import{S as t,i as s,s as e,e as a,c as n,p as l,f as r,g as o,a as f,r as c,h as i,j as g,k as h,m,l as u,n as p,t as d,b as v,d as $,u as j,v as x,w as b,x as w}from"./client.1dfc8c16.js";import I from"./ListItem.460388d4.js";function k(t,s,e){const a=t.slice();return a[1]=s[e],a}function y(t){let s,e,j,x;return e=new I({props:{item:t[1]}}),{c(){s=a("div"),n(e.$$.fragment),j=l(),this.h()},l(t){s=r(t,"DIV",{class:!0});var a=o(s);f(e.$$.fragment,a),j=c(a),a.forEach(i),this.h()},h(){g(s,"class","icons-3 svelte-zplt7d")},m(t,a){h(t,s,a),m(e,s,null),u(s,j),x=!0},p:p,i(t){x||(d(e.$$.fragment,t),x=!0)},o(t){v(e.$$.fragment,t),x=!1},d(t){t&&i(s),$(e)}}}function z(t){let s,e,a=t[0],n=[];for(let s=0;s<a.length;s+=1)n[s]=y(k(t,a,s));const l=t=>v(n[t],1,1,(()=>{n[t]=null}));return{c(){for(let t=0;t<n.length;t+=1)n[t].c();s=j()},l(t){for(let s=0;s<n.length;s+=1)n[s].l(t);s=j()},m(t,a){for(let s=0;s<n.length;s+=1)n[s].m(t,a);h(t,s,a),e=!0},p(t,[e]){if(1&e){let r;for(a=t[0],r=0;r<a.length;r+=1){const l=k(t,a,r);n[r]?(n[r].p(l,e),d(n[r],1)):(n[r]=y(l),n[r].c(),d(n[r],1),n[r].m(s.parentNode,s))}for(w(),r=a.length;r<n.length;r+=1)l(r);x()}},i(t){if(!e){for(let t=0;t<a.length;t+=1)d(n[t]);e=!0}},o(t){n=n.filter(Boolean);for(let t=0;t<n.length;t+=1)v(n[t]);e=!1},d(t){b(n,t),t&&i(s)}}}function B(t){return[["ruby.svg","git.svg","pcdata.svg"].map((t=>"./svg/"+t))]}export default class extends t{constructor(t){super(),s(this,t,B,z,e,{})}}
