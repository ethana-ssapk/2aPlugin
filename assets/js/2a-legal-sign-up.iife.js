var app=function(){"use strict";var at=Object.defineProperty;var ft=(j,r,a)=>r in j?at(j,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):j[r]=a;var Y=(j,r,a)=>(ft(j,typeof r!="symbol"?r+"":r,a),a);const j="";function r(){}function a(t){return t()}function $(){return Object.create(null)}function h(t){t.forEach(a)}function S(t){return typeof t=="function"}function k(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function P(t){return Object.keys(t).length===0}function g(t,e){t.appendChild(e)}function v(t,e,n){t.insertBefore(e,n||null)}function E(t){t.parentNode&&t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function z(t){return document.createTextNode(t)}function w(){return z(" ")}function V(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function U(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function X(t){return Array.from(t.childNodes)}function F(t,e){e=""+e,t.data!==e&&(t.data=e)}let p;function T(t){p=t}const I=[],b=[];let d=[];const Q=[],J=Promise.resolve();let m=!1;function q(){m||(m=!0,J.then(W))}function _(t){d.push(t)}const O=new Set;let L=0;function W(){if(L!==0)return;const t=p;do{try{for(;L<I.length;){const e=I[L];L++,T(e),K(e.$$)}}catch(e){throw I.length=0,L=0,e}for(T(null),I.length=0,L=0;b.length;)b.pop()();for(let e=0;e<d.length;e+=1){const n=d[e];O.has(n)||(O.add(n),n())}d.length=0}while(I.length);for(;Q.length;)Q.pop()();m=!1,O.clear(),T(t)}function K(t){if(t.fragment!==null){t.update(),h(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_)}}function tt(t){const e=[],n=[];d.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),d=e}const C=new Set;let et;function Z(t,e){t&&t.i&&(C.delete(t),t.i(e))}function nt(t,e,n,i){if(t&&t.o){if(C.has(t))return;C.add(t),et.c.push(()=>{C.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function it(t){t&&t.c()}function G(t,e,n){const{fragment:i,after_update:u}=t.$$;i&&i.m(e,n),_(()=>{const N=t.$$.on_mount.map(a).filter(S);t.$$.on_destroy?t.$$.on_destroy.push(...N):h(N),t.$$.on_mount=[]}),u.forEach(_)}function B(t,e){const n=t.$$;n.fragment!==null&&(tt(n.after_update),h(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Mt(t,e){t.$$.dirty[0]===-1&&(I.push(t),q(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function R(t,e,n,i,u,N,c,s=[-1]){const A=p;T(t);const M=t.$$={fragment:null,ctx:[],props:N,update:r,not_equal:u,bound:$(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(A?A.$$.context:[])),callbacks:$(),dirty:s,skip_bound:!1,root:e.target||A.$$.root};c&&c(M.root);let y=!1;if(M.ctx=n?n(t,e.props||{},(o,D,...l)=>{const x=l.length?l[0]:D;return M.ctx&&u(M.ctx[o],M.ctx[o]=x)&&(!M.skip_bound&&M.bound[o]&&M.bound[o](x),y&&Mt(t,o)),D}):[],M.update(),y=!0,h(M.before_update),M.fragment=i?i(M.ctx):!1,e.target){if(e.hydrate){const o=X(e.target);M.fragment&&M.fragment.l(o),o.forEach(E)}else M.fragment&&M.fragment.c();e.intro&&Z(t.$$.fragment),G(t,e.target,e.anchor),W()}T(A)}class H{constructor(){Y(this,"$$");Y(this,"$$set")}$destroy(){B(this,1),this.$destroy=r}$on(e,n){if(!S(n))return r;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const u=i.indexOf(n);u!==-1&&i.splice(u,1)}}$set(e){this.$$set&&!P(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ut="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ut);const rt="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1sb2dvcyIgd2lkdGg9IjI2LjYiIGhlaWdodD0iMzIiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiIHZpZXdCb3g9IjAgMCAyNTYgMzA4Ij48cGF0aCBmaWxsPSIjRkYzRTAwIiBkPSJNMjM5LjY4MiA0MC43MDdDMjExLjExMy0uMTgyIDE1NC42OS0xMi4zMDEgMTEzLjg5NSAxMy42OUw0Mi4yNDcgNTkuMzU2YTgyLjE5OCA4Mi4xOTggMCAwIDAtMzcuMTM1IDU1LjA1NmE4Ni41NjYgODYuNTY2IDAgMCAwIDguNTM2IDU1LjU3NmE4Mi40MjUgODIuNDI1IDAgMCAwLTEyLjI5NiAzMC43MTlhODcuNTk2IDg3LjU5NiAwIDAgMCAxNC45NjQgNjYuMjQ0YzI4LjU3NCA0MC44OTMgODQuOTk3IDUzLjAwNyAxMjUuNzg3IDI3LjAxNmw3MS42NDgtNDUuNjY0YTgyLjE4MiA4Mi4xODIgMCAwIDAgMzcuMTM1LTU1LjA1N2E4Ni42MDEgODYuNjAxIDAgMCAwLTguNTMtNTUuNTc3YTgyLjQwOSA4Mi40MDkgMCAwIDAgMTIuMjktMzAuNzE4YTg3LjU3MyA4Ny41NzMgMCAwIDAtMTQuOTYzLTY2LjI0NCI+PC9wYXRoPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0xMDYuODg5IDI3MC44NDFjLTIzLjEwMiA2LjAwNy00Ny40OTctMy4wMzYtNjEuMTAzLTIyLjY0OGE1Mi42ODUgNTIuNjg1IDAgMCAxLTkuMDAzLTM5Ljg1YTQ5Ljk3OCA0OS45NzggMCAwIDEgMS43MTMtNi42OTNsMS4zNS00LjExNWwzLjY3MSAyLjY5N2E5Mi40NDcgOTIuNDQ3IDAgMCAwIDI4LjAzNiAxNC4wMDdsMi42NjMuODA4bC0uMjQ1IDIuNjU5YTE2LjA2NyAxNi4wNjcgMCAwIDAgMi44OSAxMC42NTZhMTcuMTQzIDE3LjE0MyAwIDAgMCAxOC4zOTcgNi44MjhhMTUuNzg2IDE1Ljc4NiAwIDAgMCA0LjQwMy0xLjkzNWw3MS42Ny00NS42NzJhMTQuOTIyIDE0LjkyMiAwIDAgMCA2LjczNC05Ljk3N2ExNS45MjMgMTUuOTIzIDAgMCAwLTIuNzEzLTEyLjAxMWExNy4xNTYgMTcuMTU2IDAgMCAwLTE4LjQwNC02LjgzMmExNS43OCAxNS43OCAwIDAgMC00LjM5NiAxLjkzM2wtMjcuMzUgMTcuNDM0YTUyLjI5OCA1Mi4yOTggMCAwIDEtMTQuNTUzIDYuMzkxYy0yMy4xMDEgNi4wMDctNDcuNDk3LTMuMDM2LTYxLjEwMS0yMi42NDlhNTIuNjgxIDUyLjY4MSAwIDAgMS05LjAwNC0zOS44NDlhNDkuNDI4IDQ5LjQyOCAwIDAgMSAyMi4zNC0zMy4xMTRsNzEuNjY0LTQ1LjY3N2E1Mi4yMTggNTIuMjE4IDAgMCAxIDE0LjU2My02LjM5OGMyMy4xMDEtNi4wMDcgNDcuNDk3IDMuMDM2IDYxLjEwMSAyMi42NDhhNTIuNjg1IDUyLjY4NSAwIDAgMSA5LjAwNCAzOS44NWE1MC41NTkgNTAuNTU5IDAgMCAxLTEuNzEzIDYuNjkybC0xLjM1IDQuMTE2bC0zLjY3LTIuNjkzYTkyLjM3MyA5Mi4zNzMgMCAwIDAtMjguMDM3LTE0LjAxM2wtMi42NjQtLjgwOWwuMjQ2LTIuNjU4YTE2LjA5OSAxNi4wOTkgMCAwIDAtMi44OS0xMC42NTZhMTcuMTQzIDE3LjE0MyAwIDAgMC0xOC4zOTgtNi44MjhhMTUuNzg2IDE1Ljc4NiAwIDAgMC00LjQwMiAxLjkzNWwtNzEuNjcgNDUuNjc0YTE0Ljg5OCAxNC44OTggMCAwIDAtNi43MyA5Ljk3NWExNS45IDE1LjkgMCAwIDAgMi43MDkgMTIuMDEyYTE3LjE1NiAxNy4xNTYgMCAwIDAgMTguNDA0IDYuODMyYTE1Ljg0MSAxNS44NDEgMCAwIDAgNC40MDItMS45MzVsMjcuMzQ1LTE3LjQyN2E1Mi4xNDcgNTIuMTQ3IDAgMCAxIDE0LjU1Mi02LjM5N2MyMy4xMDEtNi4wMDYgNDcuNDk3IDMuMDM3IDYxLjEwMiAyMi42NWE1Mi42ODEgNTIuNjgxIDAgMCAxIDkuMDAzIDM5Ljg0OGE0OS40NTMgNDkuNDUzIDAgMCAxLTIyLjM0IDMzLjEybC03MS42NjQgNDUuNjczYTUyLjIxOCA1Mi4yMTggMCAwIDEtMTQuNTYzIDYuMzk4Ij48L3BhdGg+PC9zdmc+",ct="/vite.svg";function ot(t){let e,n,i,u,N;return{c(){e=f("button"),n=z("count is "),i=z(t[0])},m(c,s){v(c,e,s),g(e,n),g(e,i),u||(N=V(e,"click",t[1]),u=!0)},p(c,[s]){s&1&&F(i,c[0])},i:r,o:r,d(c){c&&E(e),u=!1,N()}}}function st(t,e,n){let i=0;return[i,()=>{n(0,i+=1)}]}class gt extends H{constructor(e){super(),R(this,e,st,ot,k,{})}}const At="";function Nt(t){let e,n,i,u,N,c,s,A,M,y,o,D;return s=new gt({}),{c(){e=f("main"),n=f("div"),n.innerHTML=`<a href="https://vitejs.dev" target="_blank" rel="noreferrer"><img src="${ct}" class="logo svelte-11cv5lq" alt="Vite Logo"/></a> <a href="https://svelte.dev" target="_blank" rel="noreferrer"><img src="${rt}" class="logo svelte svelte-11cv5lq" alt="Svelte Logo"/></a>`,i=w(),u=f("h1"),u.textContent="Vite + Svelte",N=w(),c=f("div"),it(s.$$.fragment),A=w(),M=f("p"),M.innerHTML='Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!',y=w(),o=f("p"),o.textContent="Click on the Vite and Svelte logos to learn more",U(c,"class","card"),U(o,"class","read-the-docs svelte-11cv5lq")},m(l,x){v(l,e,x),g(e,n),g(e,i),g(e,u),g(e,N),g(e,c),G(s,c,null),g(e,A),g(e,M),g(e,y),g(e,o),D=!0},p:r,i(l){D||(Z(s.$$.fragment,l),D=!0)},o(l){nt(s.$$.fragment,l),D=!1},d(l){l&&E(e),B(s)}}}class lt extends H{constructor(e){super(),R(this,e,null,Nt,k,{})}}return new lt({target:document.getElementById("twoa-sign-up")})}();