(()=>{var e={562:()=>{const e=document.querySelector("#drop"),t=document.querySelector("#preview");e.addEventListener("change",(e=>{const r=Array.from(e.target.files),n=document.createElement("div");n.classList.add("container");const o=document.createElement("img");o.src=URL.createObjectURL(r[0]),n.appendChild(o);const a=document.createElement("button");a.textContent="x",a.classList.add("remove"),n.appendChild(a),t.appendChild(n),e.target.value=null})),document.addEventListener("click",(e=>{e.target.classList.contains("remove")&&e.target.parentNode.remove()}))}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";r(562)})()})();