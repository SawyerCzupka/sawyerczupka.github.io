import{S as t,i as e,s,a as c,m as n,q as l,d as a,c as r,k as o,o as i,p as h,r as u,u as f,e as v,v as d,t as m,b as g,f as p,w as E,g as T,j as k,x,l as I,y as D,n as B,z as $,A as C,B as N}from"./client.5c0b1900.js";import{S as V}from"./Stats.608c084a.js";const b=5;let w=0,P=0,S=0,O=1,q=0;var y=G();function G(){var t=Q(),e=Q();return{question:`${t} x ${e}`,answer:t*e,answerChoices:j(t*e),response:!1,checked:!1,correct:!1}}function M(t){y.response=t,q+=1,function(t){0==t.checked&&(t.checked=!0,t.response==t.answer?(console.log("Correct!"),t.correct=!0,w+=1,S=0,(P+=1)>=b&&(P=0,O+=1),console.log(P,O)):(console.log("Incorrect!"),t.correct=!1,P=P>0?P-1:0,(S+=1)>=b&&O>1&&(O-=1)))}(y)}function Q(t=2,e=10*O){return t<=1&&(t=2),U(t,e)}function U(t=10**(O-1),e=10**O){return t<0&&(e-=t,t=0),Math.floor(Math.random()*(e-t)+t)}function j(t){for(var e=U(0,3),s=[],c=10**O/4;s.length<4;){var n=U(t-c/2,t+c/2);if(s.length==e)s.push(t);else{if(s.includes(n)||n==t||0==n)continue;s.push(n)}}return s}function A(t,e,s){const c=t.slice();return c[9]=e[s],c}function R(t){let e,s,n,l,h,f,C;const N=new V({props:{answersCorrect:w,totalQuestions:q,finalDifficulty:O}});return{c(){e=v("div"),d(N.$$.fragment),s=c(),n=v("div"),l=v("button"),h=m("Play Again"),this.h()},l(t){e=g(t,"DIV",{class:!0});var c=p(e);E(N.$$.fragment,c),s=r(c),n=g(c,"DIV",{align:!0});var o=p(n);l=g(o,"BUTTON",{class:!0});var i=p(l);h=T(i,"Play Again"),i.forEach(a),o.forEach(a),c.forEach(a),this.h()},h(){k(l,"class","svelte-10328h7"),k(n,"align","center"),k(e,"class","Div-GameOverTrue svelte-10328h7")},m(c,a,r){o(c,e,a),x(N,e,null),I(e,s),I(e,n),I(n,l),I(l,h),f=!0,r&&C(),C=D(l,"click",t[7])},p:B,i(t){f||(u(N.$$.fragment,t),f=!0)},o(t){i(N.$$.fragment,t),f=!1},d(t){t&&a(e),$(N),C()}}}function z(t){let e;function s(t,e){return 0==t[1]?H:1==t[1]?F:void 0}let c=s(t),n=c&&c(t);return{c(){e=v("div"),n&&n.c(),this.h()},l(t){e=g(t,"DIV",{class:!0});var s=p(e);n&&n.l(s),s.forEach(a),this.h()},h(){k(e,"class","Body svelte-10328h7")},m(t,s){o(t,e,s),n&&n.m(e,null)},p(t,l){c===(c=s(t))&&n?n.p(t,l):(n&&n.d(1),(n=c&&c(t))&&(n.c(),n.m(e,null)))},i:B,o:B,d(t){t&&a(e),n&&n.d()}}}function F(t){let e,s,n,l,i,h,u,f,d,E,x,B,$,V,b=t[0].question+"",w=t[0].answerChoices,P=[];for(let e=0;e<w.length;e+=1)P[e]=J(A(t,w,e));let S=1==t[0].checked&&K(t);function O(t,e){return 1==t[0].checked&&1==t[0].correct?W:1==t[0].checked&&0==t[0].correct?L:void 0}let q=O(t),y=q&&q(t);return{c(){e=v("div"),s=v("div"),n=v("p"),l=m(b),i=c(),h=v("div");for(let t=0;t<P.length;t+=1)P[t].c();u=c(),S&&S.c(),f=c(),d=v("div"),y&&y.c(),E=c(),x=v("div"),B=v("button"),$=m("Exit"),this.h()},l(t){e=g(t,"DIV",{class:!0});var c=p(e);s=g(c,"DIV",{class:!0});var o=p(s);n=g(o,"P",{class:!0,align:!0});var v=p(n);l=T(v,b),v.forEach(a),i=r(o),h=g(o,"DIV",{class:!0,align:!0});var m=p(h);for(let t=0;t<P.length;t+=1)P[t].l(m);u=r(m),S&&S.l(m),m.forEach(a),o.forEach(a),c.forEach(a),f=r(t),d=g(t,"DIV",{class:!0,align:!0});var k=p(d);y&&y.l(k),k.forEach(a),E=r(t),x=g(t,"DIV",{class:!0});var I=p(x);B=g(I,"BUTTON",{class:!0});var D=p(B);$=T(D,"Exit"),D.forEach(a),I.forEach(a),this.h()},h(){k(n,"class","Question svelte-10328h7"),k(n,"align","center"),k(h,"class","buttons svelte-10328h7"),k(h,"align","center"),k(s,"class","Game svelte-10328h7"),k(e,"class","Game-Container svelte-10328h7"),k(d,"class","Result svelte-10328h7"),k(d,"align","center"),k(B,"class","svelte-10328h7"),k(x,"class","ExitButton svelte-10328h7")},m(c,a,r){o(c,e,a),I(e,s),I(s,n),I(n,l),I(s,i),I(s,h);for(let t=0;t<P.length;t+=1)P[t].m(h,null);I(h,u),S&&S.m(h,null),o(c,f,a),o(c,d,a),y&&y.m(d,null),o(c,E,a),o(c,x,a),I(x,B),I(B,$),r&&V(),V=D(B,"click",t[6])},p(t,e){if(1&e&&b!==(b=t[0].question+"")&&C(l,b),9&e){let s;for(w=t[0].answerChoices,s=0;s<w.length;s+=1){const c=A(t,w,s);P[s]?P[s].p(c,e):(P[s]=J(c),P[s].c(),P[s].m(h,u))}for(;s<P.length;s+=1)P[s].d(1);P.length=w.length}1==t[0].checked?S?S.p(t,e):((S=K(t)).c(),S.m(h,null)):S&&(S.d(1),S=null),q!==(q=O(t))&&(y&&y.d(1),(y=q&&q(t))&&(y.c(),y.m(d,null)))},d(t){t&&a(e),N(P,t),S&&S.d(),t&&a(f),t&&a(d),y&&y.d(),t&&a(E),t&&a(x),V()}}}function H(t){let e,s,n,l,i,h,u;return{c(){e=v("p"),s=m("Multiplication Practice"),n=c(),l=v("div"),i=v("button"),h=m("Start Game"),this.h()},l(t){e=g(t,"P",{class:!0,align:!0});var c=p(e);s=T(c,"Multiplication Practice"),c.forEach(a),n=r(t),l=g(t,"DIV",{class:!0,align:!0});var o=p(l);i=g(o,"BUTTON",{align:!0,class:!0});var u=p(i);h=T(u,"Start Game"),u.forEach(a),o.forEach(a),this.h()},h(){k(e,"class","Start-Text svelte-10328h7"),k(e,"align","center"),k(i,"align","center"),k(i,"class","Start-Button svelte-10328h7"),k(l,"class","Start-Button-Div svelte-10328h7"),k(l,"align","center")},m(c,a,r){o(c,e,a),I(e,s),o(c,n,a),o(c,l,a),I(l,i),I(i,h),r&&u(),u=D(i,"click",t[5])},p:B,d(t){t&&a(e),t&&a(n),t&&a(l),u()}}}function J(t){let e,s,c,n=t[9]+"";function l(...e){return t[8](t[9],...e)}return{c(){e=v("button"),s=m(n),this.h()},l(t){e=g(t,"BUTTON",{class:!0});var c=p(e);s=T(c,n),c.forEach(a),this.h()},h(){k(e,"class","svelte-10328h7")},m(t,n,a){o(t,e,n),I(e,s),a&&c(),c=D(e,"click",l)},p(e,c){t=e,1&c&&n!==(n=t[9]+"")&&C(s,n)},d(t){t&&a(e),c()}}}function K(t){let e,s,c;return{c(){e=v("button"),s=m("Next Question"),this.h()},l(t){e=g(t,"BUTTON",{class:!0});var c=p(e);s=T(c,"Next Question"),c.forEach(a),this.h()},h(){k(e,"class","Next-Question svelte-10328h7")},m(n,l,a){o(n,e,l),I(e,s),a&&c(),c=D(e,"click",t[4])},p:B,d(t){t&&a(e),c()}}}function L(t){let e,s;return{c(){e=v("p"),s=m("Incorrect!"),this.h()},l(t){e=g(t,"P",{class:!0,id:!0});var c=p(e);s=T(c,"Incorrect!"),c.forEach(a),this.h()},h(){k(e,"class","Result-Text svelte-10328h7"),k(e,"id","Incorrect")},m(t,c){o(t,e,c),I(e,s)},d(t){t&&a(e)}}}function W(t){let e,s;return{c(){e=v("p"),s=m("Correct!"),this.h()},l(t){e=g(t,"P",{class:!0,id:!0});var c=p(e);s=T(c,"Correct!"),c.forEach(a),this.h()},h(){k(e,"class","Result-Text svelte-10328h7"),k(e,"id","Correct")},m(t,c){o(t,e,c),I(e,s)},d(t){t&&a(e)}}}function X(t){let e,s,v,d,m;const g=[z,R],p=[];function E(t,e){return 0==t[2]?0:1==t[2]?1:-1}return~(s=E(t))&&(v=p[s]=g[s](t)),{c(){e=c(),v&&v.c(),d=n(),this.h()},l(t){l('[data-svelte="svelte-1c3eq77"]',document.head).forEach(a),e=r(t),v&&v.l(t),d=n(),this.h()},h(){document.title="Multiplication"},m(t,c){o(t,e,c),~s&&p[s].m(t,c),o(t,d,c),m=!0},p(t,[e]){let c=s;(s=E(t))===c?~s&&p[s].p(t,e):(v&&(f(),i(p[c],1,1,()=>{p[c]=null}),h()),~s?((v=p[s])||(v=p[s]=g[s](t)).c(),u(v,1),v.m(d.parentNode,d)):v=null)},i(t){m||(u(v),m=!0)},o(t){i(v),m=!1},d(t){t&&a(e),~s&&p[s].d(t),t&&a(d)}}}function Y(t,e,s){let c=y,n=!1,l=!1;function a(t){M(t),s(0,c=y)}return[c,n,l,a,function(){y=G(),s(0,c=y)},function(){s(1,n=!0)},function(){s(2,l=!0)},function(){w=0,P=0,S=0,O=1,y=G(),q=0,s(2,l=!1),s(1,n=!1),s(0,c=y)},t=>a(t)]}export default class extends t{constructor(t){super(),e(this,t,Y,X,s,{})}}
