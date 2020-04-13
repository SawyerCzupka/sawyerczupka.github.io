import{_ as n,a as t,i as c,s as r,b as e,S as o,c as a,u as i,q as s,d as u,f as l,m as f,v as h,w as v,x as d,y as g,p,r as m,z as E,e as D,A as y,t as T,g as I,h as k,B as w,j as x,l as B,C,n as N,D as P,o as S,E as V,F as b,G as R}from"./client.f6685f13.js";import{S as $}from"./Stats.1b41cd18.js";var G=5,O=0,M=0,Q=0,U=1,q=0,A=j();function j(){var n=F(),t=n*F();return{question:"".concat(t," / ").concat(n),answer:t/n,answerChoices:H(t/n),response:!1,checked:!1,correct:!1}}function z(n){A.response=n,q+=1,function(n){0==n.checked&&(n.checked=!0,n.response==n.answer?(console.log("Correct!"),n.correct=!0,O+=1,Q=0,(M+=1)>=G&&(M=0,U+=1),console.log(M,U)):(console.log("Incorrect!"),n.correct=!1,M=M>0?M-1:0,(Q+=1)>=G&&U>1&&(U-=1)))}(A)}function F(){return _(arguments.length>0&&void 0!==arguments[0]?arguments[0]:2,arguments.length>1&&void 0!==arguments[1]?arguments[1]:10*U)}function _(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Math.pow(10,U-1),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Math.pow(10,U);return n<0&&(t-=n,n=0),Math.floor(Math.random()*(t-n)+n)}function H(n){for(var t=_(0,3),c=[],r=Math.pow(10,U)/4;c.length<4;){var e=_(n-r,n+r);if(c.length==t)c.push(n);else{if(c.includes(e)||e==n||0==e)continue;c.push(e)}}return c}function J(n){return function(){var t,c=p(n);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(n){return!1}}()){var r=p(this).constructor;t=Reflect.construct(c,arguments,r)}else t=c.apply(this,arguments);return m(this,t)}}function K(n,t,c){var r=n.slice();return r[9]=t[c],r}function L(n){var t,c,r,e,o,i,s,h=new $({props:{answersCorrect:O,totalQuestions:q,finalDifficulty:U}});return{c:function(){t=D("div"),y(h.$$.fragment),c=a(),r=D("div"),e=D("button"),o=T("Play Again"),this.h()},l:function(n){t=I(n,"DIV",{class:!0});var a=k(t);w(h.$$.fragment,a),c=l(a),r=I(a,"DIV",{align:!0});var i=k(r);e=I(i,"BUTTON",{class:!0});var s=k(e);o=x(s,"Play Again"),s.forEach(u),i.forEach(u),a.forEach(u),this.h()},h:function(){B(e,"class","svelte-10328h7"),B(r,"align","center"),B(t,"class","Div-GameOverTrue svelte-10328h7")},m:function(a,u,l){f(a,t,u),C(h,t,null),N(t,c),N(t,r),N(r,e),N(e,o),i=!0,l&&s(),s=P(e,"click",n[7])},p:S,i:function(n){i||(g(h.$$.fragment,n),i=!0)},o:function(n){v(h.$$.fragment,n),i=!1},d:function(n){n&&u(t),V(h),s()}}}function W(n){var t;function c(n,t){return 0==n[1]?Y:1==n[1]?X:void 0}var r=c(n),e=r&&r(n);return{c:function(){t=D("div"),e&&e.c(),this.h()},l:function(n){t=I(n,"DIV",{class:!0});var c=k(t);e&&e.l(c),c.forEach(u),this.h()},h:function(){B(t,"class","Body svelte-10328h7")},m:function(n,c){f(n,t,c),e&&e.m(t,null)},p:function(n,o){r===(r=c(n))&&e?e.p(n,o):(e&&e.d(1),(e=r&&r(n))&&(e.c(),e.m(t,null)))},i:S,o:S,d:function(n){n&&u(t),e&&e.d()}}}function X(n){for(var t,c,r,e,o,i,s,h,v,d,g,p,m,E,y=n[0].question+"",w=n[0].answerChoices,C=[],S=0;S<w.length;S+=1)C[S]=Z(K(n,w,S));var V=1==n[0].checked&&nn(n);function $(n,t){return 1==n[0].checked&&1==n[0].correct?cn:1==n[0].checked&&0==n[0].correct?tn:void 0}var G=$(n),O=G&&G(n);return{c:function(){t=D("div"),c=D("div"),r=D("p"),e=T(y),o=a(),i=D("div");for(var n=0;n<C.length;n+=1)C[n].c();s=a(),V&&V.c(),h=a(),v=D("div"),O&&O.c(),d=a(),g=D("div"),p=D("button"),m=T("Exit"),this.h()},l:function(n){t=I(n,"DIV",{class:!0});var a=k(t);c=I(a,"DIV",{class:!0});var f=k(c);r=I(f,"P",{class:!0,align:!0});var E=k(r);e=x(E,y),E.forEach(u),o=l(f),i=I(f,"DIV",{class:!0,align:!0});for(var D=k(i),T=0;T<C.length;T+=1)C[T].l(D);s=l(D),V&&V.l(D),D.forEach(u),f.forEach(u),a.forEach(u),h=l(n),v=I(n,"DIV",{class:!0,align:!0});var w=k(v);O&&O.l(w),w.forEach(u),d=l(n),g=I(n,"DIV",{class:!0});var B=k(g);p=I(B,"BUTTON",{class:!0});var N=k(p);m=x(N,"Exit"),N.forEach(u),B.forEach(u),this.h()},h:function(){B(r,"class","Question svelte-10328h7"),B(r,"align","center"),B(i,"class","buttons svelte-10328h7"),B(i,"align","center"),B(c,"class","Game svelte-10328h7"),B(t,"class","Game-Container svelte-10328h7"),B(v,"class","Result svelte-10328h7"),B(v,"align","center"),B(p,"class","svelte-10328h7"),B(g,"class","ExitButton svelte-10328h7")},m:function(a,u,l){f(a,t,u),N(t,c),N(c,r),N(r,e),N(c,o),N(c,i);for(var D=0;D<C.length;D+=1)C[D].m(i,null);N(i,s),V&&V.m(i,null),f(a,h,u),f(a,v,u),O&&O.m(v,null),f(a,d,u),f(a,g,u),N(g,p),N(p,m),l&&E(),E=P(p,"click",n[6])},p:function(n,t){if(1&t&&y!==(y=n[0].question+"")&&b(e,y),9&t){var c;for(w=n[0].answerChoices,c=0;c<w.length;c+=1){var r=K(n,w,c);C[c]?C[c].p(r,t):(C[c]=Z(r),C[c].c(),C[c].m(i,s))}for(;c<C.length;c+=1)C[c].d(1);C.length=w.length}1==n[0].checked?V?V.p(n,t):((V=nn(n)).c(),V.m(i,null)):V&&(V.d(1),V=null),G!==(G=$(n))&&(O&&O.d(1),(O=G&&G(n))&&(O.c(),O.m(v,null)))},d:function(n){n&&u(t),R(C,n),V&&V.d(),n&&u(h),n&&u(v),O&&O.d(),n&&u(d),n&&u(g),E()}}}function Y(n){var t,c,r,e,o,i,s;return{c:function(){t=D("p"),c=T("Division Practice"),r=a(),e=D("div"),o=D("button"),i=T("Start Game"),this.h()},l:function(n){t=I(n,"P",{class:!0,align:!0});var a=k(t);c=x(a,"Division Practice"),a.forEach(u),r=l(n),e=I(n,"DIV",{class:!0,align:!0});var s=k(e);o=I(s,"BUTTON",{align:!0,class:!0});var f=k(o);i=x(f,"Start Game"),f.forEach(u),s.forEach(u),this.h()},h:function(){B(t,"class","Start-Text svelte-10328h7"),B(t,"align","center"),B(o,"align","center"),B(o,"class","Start-Button svelte-10328h7"),B(e,"class","Start-Button-Div svelte-10328h7"),B(e,"align","center")},m:function(a,u,l){f(a,t,u),N(t,c),f(a,r,u),f(a,e,u),N(e,o),N(o,i),l&&s(),s=P(o,"click",n[5])},p:S,d:function(n){n&&u(t),n&&u(r),n&&u(e),s()}}}function Z(n){var t,c,r,e=n[9]+"";function o(){for(var t,c=arguments.length,r=new Array(c),e=0;e<c;e++)r[e]=arguments[e];return(t=n)[8].apply(t,[n[9]].concat(r))}return{c:function(){t=D("button"),c=T(e),this.h()},l:function(n){t=I(n,"BUTTON",{class:!0});var r=k(t);c=x(r,e),r.forEach(u),this.h()},h:function(){B(t,"class","svelte-10328h7")},m:function(n,e,a){f(n,t,e),N(t,c),a&&r(),r=P(t,"click",o)},p:function(t,r){n=t,1&r&&e!==(e=n[9]+"")&&b(c,e)},d:function(n){n&&u(t),r()}}}function nn(n){var t,c,r;return{c:function(){t=D("button"),c=T("Next Question"),this.h()},l:function(n){t=I(n,"BUTTON",{class:!0});var r=k(t);c=x(r,"Next Question"),r.forEach(u),this.h()},h:function(){B(t,"class","Next-Question svelte-10328h7")},m:function(e,o,a){f(e,t,o),N(t,c),a&&r(),r=P(t,"click",n[4])},p:S,d:function(n){n&&u(t),r()}}}function tn(n){var t,c;return{c:function(){t=D("p"),c=T("Incorrect!"),this.h()},l:function(n){t=I(n,"P",{class:!0,id:!0});var r=k(t);c=x(r,"Incorrect!"),r.forEach(u),this.h()},h:function(){B(t,"class","Result-Text svelte-10328h7"),B(t,"id","Incorrect")},m:function(n,r){f(n,t,r),N(t,c)},d:function(n){n&&u(t)}}}function cn(n){var t,c;return{c:function(){t=D("p"),c=T("Correct!"),this.h()},l:function(n){t=I(n,"P",{class:!0,id:!0});var r=k(t);c=x(r,"Correct!"),r.forEach(u),this.h()},h:function(){B(t,"class","Result-Text svelte-10328h7"),B(t,"id","Correct")},m:function(n,r){f(n,t,r),N(t,c)},d:function(n){n&&u(t)}}}function rn(n){var t,c,r,e,o,p=[W,L],m=[];function D(n,t){return 0==n[2]?0:1==n[2]?1:-1}return~(c=D(n))&&(r=m[c]=p[c](n)),{c:function(){t=a(),r&&r.c(),e=i(),this.h()},l:function(n){s('[data-svelte="svelte-spsicy"]',document.head).forEach(u),t=l(n),r&&r.l(n),e=i(),this.h()},h:function(){document.title="Division"},m:function(n,r){f(n,t,r),~c&&m[c].m(n,r),f(n,e,r),o=!0},p:function(n,t){var o=h(t,1)[0],a=c;(c=D(n))===a?~c&&m[c].p(n,o):(r&&(E(),v(m[a],1,1,function(){m[a]=null}),d()),~c?((r=m[c])||(r=m[c]=p[c](n)).c(),g(r,1),r.m(e.parentNode,e)):r=null)},i:function(n){o||(g(r),o=!0)},o:function(n){v(r),o=!1},d:function(n){n&&u(t),~c&&m[c].d(n),n&&u(e)}}}function en(n,t,c){var r=A,e=!1,o=!1;function a(n){z(n),c(0,r=A)}return[r,e,o,a,function(){A=j(),c(0,r=A)},function(){c(1,e=!0)},function(){c(2,o=!0)},function(){O=0,M=0,Q=0,U=1,A=j(),q=0,c(2,o=!1),c(1,e=!1),c(0,r=A)},function(n){return a(n)}]}export default(function(a){n(s,o);var i=J(s);function s(n){var o;return t(this,s),o=i.call(this),c(e(o),n,en,rn,r,{}),o}return s}());
