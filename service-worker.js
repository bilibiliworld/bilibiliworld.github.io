if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,t)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let o={};const c=e=>n(e,s),l={module:{uri:s},exports:o,require:c};i[s]=Promise.all(r.map((e=>l[e]||c(e)))).then((e=>(t(...e),o)))}}define(["./workbox-c2bc8b5b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"20c76f485f9f7ee38f6e9844a2f2fb8b"},{url:"css/index.css",revision:"bb14860fedcc53127455cfef013a1da5"},{url:"/",revision:"index-20230913141523085"},{url:"music/",revision:"music-20230913141523085"},{url:"about/",revision:"about-20230913141523085"}],{}),e.registerRoute(/^https:\/\/npm\.elemecdn\.com\/anzhiyu-blog/,new e.CacheFirst,"GET")}));