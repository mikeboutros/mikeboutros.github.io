import{S as s,i as t,s as e,e as a,c as n,p as l,f as r,g as o,a as f,r as c,h as i,j as g,k as h,m,l as p,n as u,t as d,b as v,d as $,u as j,v as x,w as b,x as w}from"./client.1dfc8c16.js";import I from"./ListItem.460388d4.js";function k(s,t,e){const a=s.slice();return a[1]=t[e],a}function z(s){let t,e,j,x;return e=new I({props:{item:s[1]}}),{c(){t=a("div"),n(e.$$.fragment),j=l(),this.h()},l(s){t=r(s,"DIV",{class:!0});var a=o(t);f(e.$$.fragment,a),j=c(a),a.forEach(i),this.h()},h(){g(t,"class","icons-1 svelte-zplt7d")},m(s,a){h(s,t,a),m(e,t,null),p(t,j),x=!0},p:u,i(s){x||(d(e.$$.fragment,s),x=!0)},o(s){v(e.$$.fragment,s),x=!1},d(s){s&&i(t),$(e)}}}function B(s){let t,e,a=s[0],n=[];for(let t=0;t<a.length;t+=1)n[t]=z(k(s,a,t));const l=s=>v(n[s],1,1,(()=>{n[s]=null}));return{c(){for(let s=0;s<n.length;s+=1)n[s].c();t=j()},l(s){for(let t=0;t<n.length;t+=1)n[t].l(s);t=j()},m(s,a){for(let t=0;t<n.length;t+=1)n[t].m(s,a);h(s,t,a),e=!0},p(s,[e]){if(1&e){let r;for(a=s[0],r=0;r<a.length;r+=1){const l=k(s,a,r);n[r]?(n[r].p(l,e),d(n[r],1)):(n[r]=z(l),n[r].c(),d(n[r],1),n[r].m(t.parentNode,t))}for(w(),r=a.length;r<n.length;r+=1)l(r);x()}},i(s){if(!e){for(let s=0;s<a.length;s+=1)d(n[s]);e=!0}},o(s){n=n.filter(Boolean);for(let s=0;s<n.length;s+=1)v(n[s]);e=!1},d(s){b(n,s),s&&i(t)}}}function D(s){return[["bootstrap.svg","sass.svg","html.svg","sap.svg","office.svg"].map((s=>"./svg/"+s))]}export default class extends s{constructor(s){super(),t(this,s,D,B,e,{})}}
