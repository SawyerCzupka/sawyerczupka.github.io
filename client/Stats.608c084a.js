import{S as a,i as s,s as r,e as t,t as i,a as c,b as o,f as e,g as l,d as n,c as f,j as u,h,k as v,l as y,A as D,n as d}from"./client.5c0b1900.js";function m(a){let s,r,m,p,E,C,g,A,S,Y,w,F,Q,W,b,I,P,V=Math.round(a[0]/a[1]*100)+"";return{c(){s=t("body"),r=t("p"),m=i("Game Complete!"),p=c(),E=t("div"),C=t("div"),g=i("Your Final Accuracy Was "),A=t("span"),S=i(V),Y=i("%"),w=i("."),F=c(),Q=t("div"),W=i("Your Final Difficulty Level Was "),b=t("span"),I=i(a[2]),P=i("."),this.h()},l(t){s=o(t,"BODY",{class:!0});var i=e(s);r=o(i,"P",{align:!0});var c=e(r);m=l(c,"Game Complete!"),c.forEach(n),p=f(i),E=o(i,"DIV",{class:!0,align:!0});var u=e(E);C=o(u,"DIV",{});var h=e(C);g=l(h,"Your Final Accuracy Was "),A=o(h,"SPAN",{style:!0});var v=e(A);S=l(v,V),Y=l(v,"%"),v.forEach(n),w=l(h,"."),h.forEach(n),F=f(u),Q=o(u,"DIV",{});var y=e(Q);W=l(y,"Your Final Difficulty Level Was "),b=o(y,"SPAN",{style:!0});var D=e(b);I=l(D,a[2]),D.forEach(n),P=l(y,"."),y.forEach(n),u.forEach(n),i.forEach(n),this.h()},h(){u(r,"align","center"),h(A,"color","crimson"),h(b,"color","crimson"),u(E,"class","Stats"),u(E,"align","center"),u(s,"class","svelte-8fk1y9")},m(a,t){v(a,s,t),y(s,r),y(r,m),y(s,p),y(s,E),y(E,C),y(C,g),y(C,A),y(A,S),y(A,Y),y(C,w),y(E,F),y(E,Q),y(Q,W),y(Q,b),y(b,I),y(Q,P)},p(a,[s]){3&s&&V!==(V=Math.round(a[0]/a[1]*100)+"")&&D(S,V),4&s&&D(I,a[2])},i:d,o:d,d(a){a&&n(s)}}}function p(a,s,r){let{answersCorrect:t}=s,{totalQuestions:i}=s,{finalDifficulty:c}=s;return a.$set=(a=>{"answersCorrect"in a&&r(0,t=a.answersCorrect),"totalQuestions"in a&&r(1,i=a.totalQuestions),"finalDifficulty"in a&&r(2,c=a.finalDifficulty)}),[t,i,c]}class E extends a{constructor(a){super(),s(this,a,p,m,r,{answersCorrect:0,totalQuestions:1,finalDifficulty:2})}}export{E as S};
