import{S as t,i as s,s as e,e as a,c as n,p as l,f as r,g as o,a as f,r as c,h as i,j as h,k as g,m,l as u,n as p,t as d,b as $,d as v,u as j,v as x,w as b,x as w}from"./client.38106894.js";import I from"./ListItem.1a57157b.js";function k(t,s,e){const a=t.slice();return a[1]=s[e],a}function z(t){let s,e,j,x;return e=new I({props:{item:t[1]}}),{c(){s=a("div"),n(e.$$.fragment),j=l(),this.h()},l(t){s=r(t,"DIV",{class:!0});var a=o(s);f(e.$$.fragment,a),j=c(a),a.forEach(i),this.h()},h(){h(s,"class","icons-6 svelte-zplt7d")},m(t,a){g(t,s,a),m(e,s,null),u(s,j),x=!0},p:p,i(t){x||(d(e.$$.fragment,t),x=!0)},o(t){$(e.$$.fragment,t),x=!1},d(t){t&&i(s),v(e)}}}function B(t){let s,e,a=t[0],n=[];for(let s=0;s<a.length;s+=1)n[s]=z(k(t,a,s));const l=t=>$(n[t],1,1,(()=>{n[t]=null}));return{c(){for(let t=0;t<n.length;t+=1)n[t].c();s=j()},l(t){for(let s=0;s<n.length;s+=1)n[s].l(t);s=j()},m(t,a){for(let s=0;s<n.length;s+=1)n[s].m(t,a);g(t,s,a),e=!0},p(t,[e]){if(1&e){let r;for(a=t[0],r=0;r<a.length;r+=1){const l=k(t,a,r);n[r]?(n[r].p(l,e),d(n[r],1)):(n[r]=z(l),n[r].c(),d(n[r],1),n[r].m(s.parentNode,s))}for(w(),r=a.length;r<n.length;r+=1)l(r);x()}},i(t){if(!e){for(let t=0;t<a.length;t+=1)d(n[t]);e=!0}},o(t){n=n.filter(Boolean);for(let t=0;t<n.length;t+=1)$(n[t]);e=!1},d(t){b(n,t),t&&i(s)}}}function D(t){return[["svelte.svg"].map((t=>"./svg/"+t))]}export default class extends t{constructor(t){super(),s(this,t,D,B,e,{})}}
