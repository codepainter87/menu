var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequiredf5e;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var s={id:e,exports:{}};return t[e]=s,o.call(s.exports,s,s.exports),s.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},e.parcelRequiredf5e=o),document.addEventListener("scroll",(function(e){const t=document.querySelector(".top-nav"),r=document.querySelector(".menu-wrap"),o=t.querySelector(".button"),s=t.querySelector(".hamburger");t.querySelector(".top-nav__logo"),t.querySelector(".top-nav__lockup");window.scrollY>700?(t.classList.add("top-nav--scrolled"),r.classList.add("menu-wrap--scrolled"),s.classList.add("hamburger--accent-color"),o.classList.remove("button--white")):(t.classList.remove("top-nav--scrolled"),r.classList.remove("menu-wrap--scrolled"),s.classList.remove("hamburger--accent-color"),o.classList.add("button--white"))})),Promise.resolve(o("1LRCi")).then((async e=>{let t,r;const o=()=>{t=e(".hero").ripples({resolution:600,dropRadius:20,perturbance:.04})},s=()=>{console.log("removing droplets"),setTimeout((function(){e(t).ripples("destroy"),e(r).ripples("destroy")}),1e3)};setTimeout((()=>{e(".hero").addClass("render"),o()}));document.querySelector(".menu-wrap");document.querySelector(".hamburger").addEventListener("click",(()=>{window.document.body.classList.contains("menu-open")?s():o()}));const n=document.querySelectorAll(".is-style-animated"),a=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting&&!e(t.target).hasClass("animating")?(e(t.target).addClass("animating"),e(t.target).hasClass("droplets")&&(r=e(".droplets").ripples({resolution:600,interactive:!1}),setInterval((function(){const t=Math.random()*e(".droplets").outerWidth(),o=Math.random()*e(".droplets").outerHeight(),s=.04+.04*Math.random();r=e(".droplets").ripples("drop",t,o,20,s)}),1e3))):!t.isIntersecting&&e(t.target).hasClass("animating")&&e(t.target).hasClass("droplets")&&(e(t.target).removeClass("animating"),s())}))}),{rootMargin:"0%",threshold:.25});n.forEach((e=>{a.observe(e)}))}));