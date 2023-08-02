<?php
/**
 * @package GunDealsPlugin
 */
/* 

Plugin Name: 2A Legal Sign-Up Plugin

Plugin URI: 

Description: This plugin integrates the Javascipt sign up application to our website.

Version: 1.0.0

Author: Brandon Dawson

Author URI: 

Text Domain: 2a-legal-sign-up-plugin
*/

if ( ! defined( 'ABSPATH' ) ){
    die;
}

if ( !class_exists( 'TwoASignUpPlugin' ) ){
    class TwoASignUpPlugin{
        public $plugin_name;

        function __construct(){
            add_action( 'init', array( $this, 'twoa_register_shortcode' ) );
            add_action( 'wp_enqueue_scripts', array( $this, 'twoa_sign_up_enqueue_style' ) );
            add_action( 'rest_api_init', array( $this, 'twoa_register_rest_route' ) );
            add_filter( 'woocommerce_store_api_add_to_cart_data', array( $this, 'twoa_wc_store_api_add_to_cart_data'), 10, 2 );
            add_filter( 'woocommerce_get_item_data', array( $this, 'twoa_display_secondary_member_data' ), 10, 2 );
        }

        // Function to add a custom shortcode to WP
        function twoa_register_shortcode(){
            add_shortcode( 'twoa-sign-up', array( $this, 'twoa_sign_up_shortcode_handler' ) );
        }
        
        // Function to create the custom shortcode
        function twoa_sign_up_shortcode_handler(){
            wp_enqueue_script( 'wp-api' );
            wp_enqueue_script( 'twoa-sign-up-script', plugin_dir_url( __FILE__ ) . 'assets/js/2a-legal-sign-up.iife.js', ['wp-api'] );
            
            $return_string = '<div id="twoa-sign-up"></div>';
            
            return $return_string;
        }

        // Function to enqueue our style sheet only on pages that have our shortcode
        function twoa_sign_up_enqueue_style(){
            global $post;
            if( has_shortcode( $post->post_content, 'twoa-sign-up' ) ){
                wp_enqueue_style( 'twoa-sign-up-style', plugin_dir_url( __FILE__ ) . 'assets/css/sign-up-bundle.css' );
            }
        }

        function twoa_register_rest_route(){
            $namespace = '2alegal';
            $version = 1;
            $route = 'mysubscription';
            $route_args = array(
                'methods' => 'GET',
                'callback' => array( $this, 'twoa_get_my_subscription' ),
                'permission_callback' => array( $this, 'twoa_get_my_subscription_permissions' ),
            );

            //registers a route with current variables as '2alegal/v1/mysubscription'
            register_rest_route( $namespace . '/' . 'v' . $version . '/', $route, $route_args );
        }

        function twoa_get_my_subscription(){

            // check if user has any subscriptions
            if( wcs_user_has_subscription() ){
                $subscriptions = wcs_get_users_subscriptions();

				// assumes user only has one subscription based on other business logic
				$subscription_id = array_key_first( $subscriptions );

				$subscription = wcs_get_subscription( $subscription_id );
				
                $line_items = [];

                // get item data
                foreach( $subscription->get_items( 'line_item' ) as $item_id => $item ){
                    $line_item = array(
                        'product_id' => $item->get_product_id(),
                        'variation_id' => $item->get_variation_id(),
                        'product_name' => $item->get_name(),
                        'quantity' => $item->get_quantity(),
                        'item_meta' => $item->get_meta_data(),
                    );
                    $line_items[] = $line_item;
                }

                $return_data = array(
                    'subscription_id' => $subscription_id,
                    'next_payment_timestamp' => $subscription->get_time( 'next_payment' ),
                    'billing_info' => array(
                        'fist_name' => $subscription->get_billing_first_name(),
                        'last_name' => $subscription->get_billing_last_name(),
                        'address_1' => $subscription->get_billing_address_1(),
                        'address_2' => $subscription->get_billing_address_2(),
                        'city' => $subscription->get_billing_city(),
                        'state' => $subscription->get_billing_state(),
                        'postcode' => $subscription->get_billing_postcode(),
                        'country' => $subscription->get_billing_country(),
                        'email' => $subscription->get_billing_email(),
                        'phone' => $subscription->get_billing_phone(),
                    ),
                    'line_items' => $line_items,
                );

                return $return_data;
            }
            else{
                return new WP_Error( 'no_subscriptions_found', 'You have no subscriptions!', array( 'status' => 404 ) );
            }
        }

        function twoa_get_my_subscription_permissions(){
            return current_user_can( 'read' );
        }

        function twoa_wc_store_api_add_to_cart_data( $cart_data, $request ){
            $is_switch = $request['is_switch'];
            $is_secondary = $request['is_secondary'];

            // TODO: Sanity Checks for below operations

            if($is_switch){
                $cart_data['cart_item_data']['subscription_switch'] = array(
                    'subscription_id'           => $request['switch_data'][0]['subscription_id'],
                    'item_id'                   => '',
                    'next_payment_timestamp'   => $request['switch_data'][0]['next_payment_timestamp'],
                    'upgraded_or_downgraded'    => '',
                );
            }

            // TODO: Input sanitization on user supplied data
            if($is_secondary){
                $cart_data['cart_item_data']['secondary_info'] = array(
                    'secondary_first_name'  => $request['secondary_data'][0]['secondary_first_name'],
                    'secondary_last_name'   => $request['secondary_data'][0]['secondary_last_name'],
                    'secondary_email'       => $request['secondary_data'][0]['secondary_email'],
                );
            }

            return $cart_data;
        }

        function twoa_display_secondary_member_data( $cart_data, $cart_item ){
            if( isset( $cart_item['secondary_info'] ) && is_array( $cart_item['secondary_info'] ) ){
                foreach( $cart_item['secondary_info'] as $meta_key => $meta_value ){
                    $cart_data[] = array(
                        'key' => $meta_key,
                        'value' => $meta_value,
                    );
                }
            }

            return $cart_data;
        }
    }

    new TwoASignUpPlugin();
}