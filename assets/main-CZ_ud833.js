!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}(),document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".hamburger"),t=document.querySelector(".nav-links"),n=document.querySelectorAll(".nav-links a"),o=()=>{e.classList.toggle("active"),t.classList.toggle("active")},i=n=>{e.contains(n.target)||t.contains(n.target)||(e.classList.remove("active"),t.classList.remove("active"))},c=()=>{e.classList.remove("active"),t.classList.remove("active")};return n.forEach((e=>{e.addEventListener("click",c)})),e.addEventListener("click",o),document.addEventListener("click",i),()=>{e.removeEventListener("click",o),document.removeEventListener("click",i),n.forEach((e=>{e.removeEventListener("click",c)}))}}));const e={"/":{template:"home.html",title:"Lilith Management & Mojo",description:"Lilith Management & Mojo"},mojo:{template:"mojo.html",title:"Lilith Management",description:"Lilith Management"},management:{template:"management.html",title:"Lilith Mojo",description:"Lilith Mojo"}},t=async()=>{const t=window.location.hash.replace("#","")||"/",n=e[t]||e["/"],o=await fetch(n.template).then((e=>e.text()));document.body.classList.remove("loaded"),setTimeout((()=>{document.getElementById("content").innerHTML=o,document.title=n.title,document.querySelector('meta[name="description"]').setAttribute("content",n.description),document.body.classList.add("loaded")}),400)};window.addEventListener("hashchange",t),t();