(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))u(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const f of i.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&u(f)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerpolicy&&(i.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?i.credentials="include":l.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function u(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function L(){}function W(e){return e()}function Q(){return Object.create(null)}function z(e){e.forEach(W)}function X(e){return typeof e=="function"}function x(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ne(e){return Object.keys(e).length===0}function le(e,...t){if(e==null)return L;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function ie(e,t,n){e.$$.on_destroy.push(le(t,n))}function y(e,t){e.appendChild(t)}function I(e,t,n){e.insertBefore(t,n||null)}function q(e){e.parentNode&&e.parentNode.removeChild(e)}function g(e){return document.createElement(e)}function ce(e){return document.createTextNode(e)}function S(){return ce(" ")}function E(e,t,n,u){return e.addEventListener(t,n,u),()=>e.removeEventListener(t,n,u)}function ue(e){return function(t){return t.preventDefault(),e.call(this,t)}}function h(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function re(e){return Array.from(e.childNodes)}function Y(e,t){e.value=t??""}let B;function F(e){B=e}function oe(){if(!B)throw new Error("Function called outside component initialization");return B}function se(e){oe().$$.on_mount.push(e)}const D=[],G=[],K=[],R=[],fe=Promise.resolve();let H=!1;function ae(){H||(H=!0,fe.then(ee))}function J(e){K.push(e)}const Z=new Set;let P=0;function ee(){if(P!==0)return;const e=B;do{try{for(;P<D.length;){const t=D[P];P++,F(t),de(t.$$)}}catch(t){throw D.length=0,P=0,t}for(F(null),D.length=0,P=0;G.length;)G.pop()();for(let t=0;t<K.length;t+=1){const n=K[t];Z.has(n)||(Z.add(n),n())}K.length=0}while(D.length);for(;R.length;)R.pop()();H=!1,Z.clear(),F(e)}function de(e){if(e.fragment!==null){e.update(),z(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(J)}}const he=new Set;function te(e,t){e&&e.i&&(he.delete(e),e.i(t))}function pe(e,t){e.d(1),t.delete(e.key)}function _e(e,t,n,u,l,i,f,d,m,r,b,a){let s=e.length,p=i.length,k=s;const v={};for(;k--;)v[e[k].key]=k;const O=[],A=new Map,C=new Map;for(k=p;k--;){const o=a(l,i,k),c=n(o);let _=f.get(c);_?u&&_.p(o,t):(_=r(c,o),_.c()),A.set(c,O[k]=_),c in v&&C.set(c,Math.abs(k-v[c]))}const N=new Set,$=new Set;function w(o){te(o,1),o.m(d,b),f.set(o.key,o),b=o.first,p--}for(;s&&p;){const o=O[p-1],c=e[s-1],_=o.key,M=c.key;o===c?(b=o.first,s--,p--):A.has(M)?!f.has(_)||N.has(_)?w(o):$.has(M)?s--:C.get(_)>C.get(M)?($.add(_),w(o)):(N.add(M),s--):(m(c,f),s--)}for(;s--;){const o=e[s];A.has(o.key)||m(o,f)}for(;p;)w(O[p-1]);return O}function me(e,t,n,u){const{fragment:l,after_update:i}=e.$$;l&&l.m(t,n),u||J(()=>{const f=e.$$.on_mount.map(W).filter(X);e.$$.on_destroy?e.$$.on_destroy.push(...f):z(f),e.$$.on_mount=[]}),i.forEach(J)}function ye(e,t){const n=e.$$;n.fragment!==null&&(z(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function be(e,t){e.$$.dirty[0]===-1&&(D.push(e),ae(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ke(e,t,n,u,l,i,f,d=[-1]){const m=B;F(e);const r=e.$$={fragment:null,ctx:[],props:i,update:L,not_equal:l,bound:Q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(m?m.$$.context:[])),callbacks:Q(),dirty:d,skip_bound:!1,root:t.target||m.$$.root};f&&f(r.root);let b=!1;if(r.ctx=n?n(e,t.props||{},(a,s,...p)=>{const k=p.length?p[0]:s;return r.ctx&&l(r.ctx[a],r.ctx[a]=k)&&(!r.skip_bound&&r.bound[a]&&r.bound[a](k),b&&be(e,a)),s}):[],r.update(),b=!0,z(r.before_update),r.fragment=u?u(r.ctx):!1,t.target){if(t.hydrate){const a=re(t.target);r.fragment&&r.fragment.l(a),a.forEach(q)}else r.fragment&&r.fragment.c();t.intro&&te(e.$$.fragment),me(e,t.target,t.anchor,t.customElement),ee()}F(m)}class ge{$destroy(){ye(this,1),this.$destroy=L}$on(t,n){if(!X(n))return L;const u=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return u.push(n),()=>{const l=u.indexOf(n);l!==-1&&u.splice(l,1)}}$set(t){this.$$set&&!ne(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const T=[];function we(e,t=L){let n;const u=new Set;function l(d){if(x(e,d)&&(e=d,n)){const m=!T.length;for(const r of u)r[1](),T.push(r,e);if(m){for(let r=0;r<T.length;r+=2)T[r][0](T[r+1]);T.length=0}}}function i(d){l(d(e))}function f(d,m=L){const r=[d,m];return u.add(r),u.size===1&&(n=t(l)||L),d(e),()=>{u.delete(r),u.size===0&&(n(),n=null)}}return{set:l,update:i,subscribe:f}}const j=we([]);function U(e,t,n){const u=e.slice();return u[20]=t[n].id,u[21]=t[n].name,u[22]=t[n].checked,u[23]=t[n].readonly,u[24]=t,u[25]=n,u}function ve(e){let t;return{c(){t=g("h1"),t.textContent="Nothing to see here"},m(n,u){I(n,t,u)},p:L,d(n){n&&q(t)}}}function $e(e){let t,n,u,l,i,f,d,m,r=[],b=new Map,a,s,p,k,v,O,A,C,N,$=e[3];const w=o=>o[20];for(let o=0;o<$.length;o+=1){let c=U(e,$,o),_=w(c);b.set(_,r[o]=V(_,c))}return{c(){t=g("section"),n=g("input"),u=S(),l=g("input"),i=S(),f=g("input"),d=S(),m=g("ul");for(let o=0;o<r.length;o+=1)r[o].c();a=S(),s=g("section"),p=g("input"),k=S(),v=g("input"),O=S(),A=g("input"),h(n,"type","button"),n.value="all",h(n,"class","svelte-wn3ec3"),h(l,"type","button"),l.value="active",h(l,"class","svelte-wn3ec3"),h(f,"type","button"),f.value="checked",h(f,"class","svelte-wn3ec3"),h(m,"class","svelte-wn3ec3"),h(p,"type","button"),p.value="check all",h(p,"class","svelte-wn3ec3"),h(v,"type","button"),v.value="uncheck all",h(v,"class","svelte-wn3ec3"),h(A,"type","button"),A.value="remove checked",h(A,"class","svelte-wn3ec3")},m(o,c){I(o,t,c),y(t,n),y(t,u),y(t,l),y(t,i),y(t,f),I(o,d,c),I(o,m,c);for(let _=0;_<r.length;_+=1)r[_].m(m,null);I(o,a,c),I(o,s,c),y(s,p),y(s,k),y(s,v),y(s,O),y(s,A),C||(N=[E(n,"click",e[10]),E(l,"click",e[12]),E(f,"click",e[11]),E(p,"click",e[7]),E(v,"click",e[8]),E(A,"click",e[9])],C=!0)},p(o,c){c&104&&($=o[3],r=_e(r,c,w,1,o,$,b,m,pe,V,null,U))},d(o){o&&q(t),o&&q(d),o&&q(m);for(let c=0;c<r.length;c+=1)r[c].d();o&&q(a),o&&q(s),C=!1,z(N)}}}function V(e,t){let n,u,l,i,f,d,m,r,b,a,s,p,k,v;function O(){t[15].call(u,t[24],t[25])}function A(){t[16].call(i,t[24],t[25])}function C(){return t[17](t[20],t[23])}function N(){return t[18](t[20])}return{key:e,first:null,c(){n=g("li"),u=g("input"),l=S(),i=g("input"),m=S(),r=g("input"),a=S(),s=g("input"),p=S(),h(u,"type","checkbox"),h(u,"class","svelte-wn3ec3"),h(i,"id",f=t[20].toString()),i.readOnly=d=t[23],h(i,"class","svelte-wn3ec3"),h(r,"class","edit svelte-wn3ec3"),h(r,"type","button"),r.value=b=t[23]?"edit":"confirm",h(s,"class","remove svelte-wn3ec3"),h(s,"type","button"),s.value="remove",h(n,"class","svelte-wn3ec3"),this.first=n},m($,w){I($,n,w),y(n,u),u.checked=t[22],y(n,l),y(n,i),Y(i,t[21]),y(n,m),y(n,r),y(n,a),y(n,s),y(n,p),k||(v=[E(u,"change",O),E(i,"input",A),E(r,"click",C),E(s,"click",N)],k=!0)},p($,w){t=$,w&8&&(u.checked=t[22]),w&8&&f!==(f=t[20].toString())&&h(i,"id",f),w&8&&d!==(d=t[23])&&(i.readOnly=d),w&8&&i.value!==t[21]&&Y(i,t[21]),w&8&&b!==(b=t[23]?"edit":"confirm")&&(r.value=b)},d($){$&&q(n),k=!1,z(v)}}}function Ae(e){let t,n,u,l,i,f,d,m;function r(s,p){return s[0].length?$e:ve}let b=r(e),a=b(e);return{c(){t=g("main"),n=g("h1"),n.textContent="To Do App",u=S(),l=g("form"),i=g("input"),f=S(),a.c(),h(i,"pattern","[a-zA-Z ]+"),h(i,"minlength","5"),h(i,"maxlength","15"),h(i,"placeholder","Your Task"),i.required=!0,h(i,"class","svelte-wn3ec3"),h(t,"class","svelte-wn3ec3")},m(s,p){I(s,t,p),y(t,n),y(t,u),y(t,l),y(l,i),Y(i,e[1]),e[14](i),y(t,f),a.m(t,null),d||(m=[E(i,"input",e[13]),E(l,"submit",ue(e[4]))],d=!0)},p(s,[p]){p&2&&i.value!==s[1]&&Y(i,s[1]),b===(b=r(s))&&a?a.p(s,p):(a.d(1),a=b(s),a&&(a.c(),a.m(t,null)))},i:L,o:L,d(s){s&&q(t),e[14](null),a.d(),d=!1,z(m)}}}function Se(e,t,n){let u,l;ie(e,j,c=>n(0,l=c));let i="",f=0,d=null;se(()=>d.focus());function m(){j.set([...l,{id:f++,name:i,checked:!1,readonly:!0}]),n(1,i="")}function r(c,_){j.set(l.map(M=>M.id!==c?M:{...M,readonly:!M.readonly})),_&&document.querySelector(`#${CSS.escape(c.toString())}`).select()}function b(c){j.set(l.filter(_=>_.id!==c))}function a(){j.set(l.map(c=>({...c,checked:!0})))}function s(){j.set(l.map(c=>({...c,checked:!1})))}function p(){j.set(l.filter(c=>!c.checked))}function k(){n(3,u=l.filter(c=>c))}function v(){n(3,u=l.filter(c=>c.checked))}function O(){n(3,u=l.filter(c=>!c.checked))}function A(){i=this.value,n(1,i)}function C(c){G[c?"unshift":"push"](()=>{d=c,n(2,d)})}function N(c,_){c[_].checked=this.checked,n(3,u),n(0,l)}function $(c,_){c[_].name=this.value,n(3,u),n(0,l)}const w=(c,_)=>r(c,_),o=c=>b(c);return e.$$.update=()=>{e.$$.dirty&1&&n(3,u=l)},[l,i,d,u,m,r,b,a,s,p,k,v,O,A,C,N,$,w,o]}class Ee extends ge{constructor(t){super(),ke(this,t,Se,Ae,x,{})}}new Ee({target:document.body});