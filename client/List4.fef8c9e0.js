import{S as t,i as s,s as e,e as n,c as a,p as l,f as r,g as o,a as f,r as c,h as i,j as h,k as g,m,l as u,n as p,t as d,b as $,d as v,u as j,v as x,w,x as I}from"./client.1dfc8c16.js";import b from"./ListItem.460388d4.js";function k(t,s,e){const n=t.slice();return n[1]=s[e],n}function z(t){let s,e,j,x;return e=new b({props:{item:t[1]}}),{c(){s=n("div"),a(e.$$.fragment),j=l(),this.h()},l(t){s=r(t,"DIV",{class:!0});var n=o(s);f(e.$$.fragment,n),j=c(n),n.forEach(i),this.h()},h(){h(s,"class","icons-4 svelte-zplt7d")},m(t,n){g(t,s,n),m(e,s,null),u(s,j),x=!0},p:p,i(t){x||(d(e.$$.fragment,t),x=!0)},o(t){$(e.$$.fragment,t),x=!1},d(t){t&&i(s),v(e)}}}function B(t){let s,e,n=t[0],a=[];for(let s=0;s<n.length;s+=1)a[s]=z(k(t,n,s));const l=t=>$(a[t],1,1,(()=>{a[t]=null}));return{c(){for(let t=0;t<a.length;t+=1)a[t].c();s=j()},l(t){for(let s=0;s<a.length;s+=1)a[s].l(t);s=j()},m(t,n){for(let s=0;s<a.length;s+=1)a[s].m(t,n);g(t,s,n),e=!0},p(t,[e]){if(1&e){let r;for(n=t[0],r=0;r<n.length;r+=1){const l=k(t,n,r);a[r]?(a[r].p(l,e),d(a[r],1)):(a[r]=z(l),a[r].c(),d(a[r],1),a[r].m(s.parentNode,s))}for(I(),r=n.length;r<a.length;r+=1)l(r);x()}},i(t){if(!e){for(let t=0;t<n.length;t+=1)d(a[t]);e=!0}},o(t){a=a.filter(Boolean);for(let t=0;t<a.length;t+=1)$(a[t]);e=!1},d(t){w(a,t),t&&i(s)}}}function D(t){return[["ror.svg"].map((t=>"./svg/"+t))]}export default class extends t{constructor(t){super(),s(this,t,D,B,e,{})}}
