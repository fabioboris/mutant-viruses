(()=>{var e={144:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,"body{background-color:#222;color:#666;overflow:hidden;font-family:sans-serif}#models{display:none}main svg{position:absolute;width:40px;height:40px;transition:all 0.6s;transform-origin:center center;opacity:0.9}\n",""]);const i=r},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(r[c]=!0)}for(var a=0;a<e.length;a++){var s=[].concat(e[a]);o&&r[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},379:(e,t,n)=>{"use strict";var o,r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function c(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function a(e,t){for(var n={},o=[],r=0;r<e.length;r++){var a=e[r],s=t.base?a[0]+t.base:a[0],l=n[s]||0,d="".concat(s," ").concat(l);n[s]=l+1;var u=c(d),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:d,updater:m(f,t),references:1}),o.push(d)}return o}function s(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var c=r(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function u(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var i=document.createTextNode(r),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(i,c[t]):e.appendChild(i)}}function f(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var p=null,h=0;function m(e,t){var n,o,r;if(t.singleton){var i=h++;n=p||(p=s(t)),o=u.bind(null,n,i,!1),r=u.bind(null,n,i,!0)}else n=s(t),o=f.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var n=a(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=c(n[o]);i[r].references--}for(var s=a(e,t),l=0;l<n.length;l++){var d=c(n[l]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}n=s}}}},823:e=>{e.exports='<svg enable-background="new 0 0 60 60" version="1.1" viewBox="0 0 60 60" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m53.496 44.271c-1.131-0.313-2.299-0.354-3.429-0.128-0.356 0.069-0.712-5e-3 -0.967-0.211l-1.411-1.132c-0.397-0.318-0.521-0.88-0.301-1.364 0.401-0.882 0.733-1.804 0.986-2.739 0.247-0.912 1.266-1.494 2.119-1.167 1.859 0.717 3.944 0.609 5.726-0.31 3.236-1.668 4.665-5.733 3.185-9.063-1.124-2.525-3.635-4.157-6.401-4.157-1.017 0-2.005 0.218-2.934 0.647-0.313 0.145-0.654 0.354-1.039 0.636-0.866 0.634-2.042 0.395-2.586-0.515-0.574-0.96-1.265-1.819-1.961-2.684-0.636-0.791-0.744-1.889-0.277-2.795l1.479-2.87c0.421-0.817 1.177-1.373 1.975-1.452 0.741-0.073 1.476-0.274 2.183-0.598 2.248-1.028 3.824-3.132 4.112-5.489 0.246-2.006-0.374-4.018-1.701-5.518-1.564-1.769-3.955-2.631-6.314-2.283-2.959 0.44-5.359 2.81-5.836 5.763-0.22 1.358-0.049 2.73 0.494 3.965 0.359 0.819 0.36 1.688 3e-3 2.382l-1.158 2.249c-0.583 1.13-1.94 1.735-3.104 1.374-1.059-0.331-2.824-0.555-4.119-0.685-0.362-0.036-0.663-0.298-0.747-0.651l-1.139-4.804c-0.063-0.265 0.017-0.55 0.218-0.783 1.205-1.392 1.696-3.233 1.347-5.056-0.45-2.334-2.306-4.224-4.618-4.703-0.423-0.086-0.85-0.13-1.272-0.13-3.309 0-6 2.691-6 6 0 2.485 1.57 4.738 3.908 5.605 0.328 0.122 0.555 0.352 0.621 0.632l0.912 3.852c0.1 0.419-0.143 0.849-0.563 1.001-1.347 0.485-2.632 1.131-3.821 1.919-0.435 0.289-1.077 0.28-1.46-0.029-0.516-0.418-0.49-1.053-0.313-1.47 0.743-1.744 0.911-3.667 0.485-5.563-0.768-3.412-3.595-6.139-7.034-6.784-3.27-0.613-6.586 0.583-8.67 3.101-1.717 2.073-2.409 4.804-1.898 7.491 0.682 3.592 3.561 6.442 7.165 7.095 1.519 0.272 3.057 0.17 4.481-0.299 0.43-0.145 0.941 0.026 1.242 0.401l0.4 0.497c0.312 0.389 0.347 0.92 0.088 1.354-1.282 2.149-2.087 4.497-2.392 6.977-0.066 0.534-0.477 0.939-0.997 0.986l-1.983 0.174c-0.297 0-0.602-0.139-0.86-0.392-0.94-0.917-2.137-1.449-3.462-1.539-2.218-0.138-4.321 1.079-5.275 3.036-0.737 1.516-0.764 3.248-0.069 4.754s2.012 2.608 3.616 3.024c2.28 0.591 4.784-0.424 6.026-2.42 0.179-0.288 0.531-0.481 0.941-0.519l1.729-0.15c0.479 0 0.902 0.316 1.054 0.787 0.701 2.175 1.801 4.177 3.272 5.952 0.166 0.199 0.155 0.5-0.025 0.7-0.207 0.229-0.447 0.192-0.642 0.133-0.833-0.267-1.704-0.363-2.608-0.276-2.974 0.282-5.417 2.631-5.81 5.584-0.249 1.875 0.316 3.758 1.551 5.167 1.513 1.729 3.867 2.536 6.165 2.097 2.317-0.442 4.257-2.199 4.942-4.477 0.313-1.043 0.367-2.1 0.162-3.142-0.03-0.152 0.02-0.318 0.132-0.442l0.785-0.872c0.162-0.18 0.44-0.235 0.641-0.127 0.517 0.282 1.056 0.541 1.6 0.77 0.664 0.279 1.062 1.003 0.991 1.799-0.062 0.689-0.019 1.391 0.128 2.083 0.616 2.926 3.126 5.185 6.104 5.492 0.249 0.025 0.497 0.038 0.741 0.038 3.86 0 7-3.141 7-7 0-0.438-0.042-0.879-0.124-1.313-0.157-0.814 0.168-1.577 0.828-1.943 1.038-0.576 2.021-1.256 2.923-2.021 0.322-0.273 0.706-0.397 0.998-0.323 0.45 0.113 0.672 0.378 0.778 0.579 0.15 0.284 0.17 0.628 0.055 0.942-0.449 1.223-0.57 2.562-0.35 3.871 0.537 3.18 3.147 5.704 6.348 6.138 0.347 0.047 0.698 0.07 1.044 0.07 2.111 0 4.136-0.896 5.556-2.461 1.438-1.585 2.116-3.64 1.908-5.785-0.297-3.061-2.498-5.666-5.477-6.483zm-3.487-14.271c0.552 0 1 0.448 1 1s-0.448 1-1 1-1-0.448-1-1 0.448-1 1-1zm-11-9c0.552 0 1 0.448 1 1s-0.448 1-1 1-1-0.448-1-1 0.448-1 1-1zm-5 4c0.552 0 1 0.448 1 1s-0.448 1-1 1-1-0.448-1-1 0.448-1 1-1zm-11 14c-0.552 0-1-0.448-1-1s0.448-1 1-1 1 0.448 1 1-0.448 1-1 1zm1-6c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm8 16c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.692 6-6 6zm11-7c-0.552 0-1-0.448-1-1s0.448-1 1-1 1 0.448 1 1-0.448 1-1 1zm-2-6c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"></path></svg>'},848:e=>{e.exports='<svg enable-background="new 0 0 32.738 32.738" version="1.1" viewBox="0 0 32.738 32.738" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m31.917 17.595c-0.911-0.691-2.213-0.519-2.91 0.396-0.066 0.093-0.12 0.19-0.174 0.285l-5.095-0.863c0.048-0.353 0.08-0.709 0.08-1.075 0-1.481-0.412-2.863-1.118-4.053l3.248-2.101c0.207 0.14 0.46 0.216 0.728 0.191 0.618-0.057 1.072-0.599 1.018-1.221-0.056-0.618-0.603-1.071-1.221-1.016s-1.071 0.603-1.017 1.221c5e-3 0.062 0.021 0.117 0.033 0.178l-3.227 2.083c-0.644-0.87-1.454-1.604-2.393-2.151l2.318-3.662c0.247 0.04 0.509 3e-3 0.742-0.132 0.536-0.312 0.722-0.996 0.409-1.532-0.311-0.539-0.997-0.725-1.534-0.413-0.536 0.311-0.721 0.997-0.41 1.536 0.03 0.053 0.064 0.099 0.104 0.146l-2.335 3.687c-0.79-0.361-1.645-0.604-2.547-0.689l0.474-2.8c0.182-0.044 0.35-0.135 0.47-0.291 0.274-0.364 0.207-0.881-0.156-1.155-0.363-0.278-0.881-0.207-1.157 0.155-0.274 0.362-0.205 0.881 0.156 1.156 0.035 0.023 0.076 0.032 0.112 0.055l-0.484 2.853c-0.061-2e-3 -0.119-9e-3 -0.179-9e-3 -1.034 0-2.019 0.202-2.922 0.562l-2.235-4.106c0.217-0.275 0.35-0.619 0.344-0.997-0.014-0.873-0.729-1.57-1.602-1.552-0.87 0.014-1.564 0.729-1.551 1.601 0.013 0.87 0.729 1.562 1.601 1.55 0.087-2e-3 0.17-0.017 0.253-0.03l2.184 4.012c-1.092 0.617-2.024 1.488-2.715 2.53l-3.263-2.56c0.065-0.239 0.053-0.503-0.055-0.749-0.255-0.565-0.918-0.818-1.484-0.563-0.568 0.254-0.82 0.919-0.566 1.486 0.257 0.564 0.921 0.816 1.487 0.562 0.055-0.026 0.105-0.06 0.155-0.092l3.316 2.607c-0.49 0.937-0.8 1.982-0.884 3.096l-4.895-9e-3c-0.137-0.322-0.376-0.605-0.709-0.779-0.771-0.407-1.727-0.113-2.13 0.659-0.405 0.771-0.109 1.725 0.659 2.129 0.771 0.408 1.726 0.11 2.132-0.661 0.041-0.075 0.067-0.153 0.095-0.234l4.845 0.012c0.04 0.631 0.146 1.247 0.325 1.833l-3.131 1.206c-0.173-0.179-0.407-0.303-0.675-0.335-0.616-0.07-1.171 0.372-1.242 0.986-0.071 0.616 0.37 1.178 0.988 1.246 0.615 0.069 1.171-0.374 1.241-0.989 6e-3 -0.061 5e-3 -0.117 4e-3 -0.182l3.084-1.188c0.611 1.449 1.641 2.683 2.937 3.542l-1.512 1.561c-0.233-0.089-0.497-0.106-0.752-0.022-0.592 0.197-0.909 0.831-0.716 1.417 0.193 0.59 0.83 0.913 1.418 0.722 0.59-0.198 0.908-0.833 0.717-1.424-0.021-0.058-0.045-0.11-0.072-0.167l1.619-1.67c0.771 0.407 1.617 0.687 2.512 0.819l-0.431 4.041c-0.244 0.056-0.473 0.192-0.639 0.401-0.38 0.491-0.292 1.193 0.2 1.577 0.492 0.381 1.197 0.289 1.578-0.201 0.379-0.492 0.288-1.195-0.203-1.578-0.048-0.033-0.099-0.062-0.149-0.093l0.433-4.068c0.136 9e-3 0.27 0.021 0.408 0.021 1.035 0 2.021-0.203 2.93-0.562l0.804 3.58c-0.201 0.146-0.36 0.354-0.431 0.615-0.16 0.6 0.193 1.215 0.794 1.376 0.599 0.157 1.216-0.193 1.376-0.795 0.16-0.601-0.196-1.215-0.796-1.376-0.059-0.016-0.117-0.022-0.178-0.029l-0.832-3.706c0.579-0.301 1.111-0.671 1.597-1.103l1.102 1.552c-0.099 0.156-0.15 0.338-0.125 0.537 0.061 0.448 0.477 0.766 0.929 0.708 0.453-0.063 0.768-0.479 0.708-0.93-0.062-0.453-0.479-0.768-0.931-0.707-0.042 6e-3 -0.075 0.028-0.115 0.04l-1.137-1.602c0.838-0.854 1.479-1.896 1.864-3.062l5.241 0.891c0.108 0.451 0.356 0.869 0.751 1.168 0.913 0.693 2.216 0.52 2.911-0.395 0.692-0.911 0.514-2.213-0.399-2.908zm-18.54-1.626c-0.655 0-1.19-0.534-1.19-1.194 0-0.657 0.535-1.188 1.19-1.188 0.658 0 1.192 0.53 1.192 1.188 0 0.659-0.533 1.194-1.192 1.194zm3.071 2.588c-0.482 0-0.874-0.392-0.874-0.873 0-0.486 0.392-0.875 0.874-0.875 0.483 0 0.875 0.388 0.875 0.875-1e-3 0.484-0.392 0.873-0.875 0.873zm3.246-3.703c-0.712 0-1.289-0.577-1.289-1.287 0-0.715 0.577-1.293 1.289-1.293s1.29 0.578 1.29 1.293c0 0.71-0.577 1.287-1.29 1.287z"></path></svg>'}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e={randInt:(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e),constrain:(e,t,n)=>Math.min(Math.max(e,t),n),randColor(){return"#"+this.randInt(0,16777215).toString(16)}},t={total:50,window:{width:0,height:0},size:{min:10,max:200},speed:{min:10,max:200}},o={id:"",color:0,size:0,left:0,top:0,rotate:0,speed:0},r=[];function i(){r.forEach((function(n){n.size=e.constrain(n.size+e.randInt(-n.speed,n.speed),t.size.min,t.size.max),n.rotate=e.constrain(n.rotate+e.randInt(-n.speed,n.speed),0,360),n.left=e.constrain(n.left+e.randInt(-n.speed,n.speed),0,t.window.width-n.size),n.top=e.constrain(n.top+e.randInt(-n.speed,n.speed),0,t.window.height-n.size)})),r.forEach((function(e){let t=document.getElementById(e.id);t.style.left=e.left+"px",t.style.top=e.top+"px",t.style.transform="rotate("+e.rotate+"deg)",t.style.width=e.size+"px",t.style.height=e.size+"px",t.style.fill=e.color}))}function c(){r.forEach((function(n){n.speed=e.constrain(n.speed+e.randInt(-n.speed,n.speed),t.speed.min,t.speed.max)}))}function a(){r.forEach((function(t){t.color=e.randColor()}))}function s(){t.window.width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,t.window.height=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}var l=n(379),d=n.n(l),u=n(144);d()(u.Z,{insert:"head",singleton:!1}),u.Z.locals;var f=n(823),p=n.n(f),h=n(848),m=n.n(h),v=document.querySelector("#models");v.innerHTML+=p(),v.innerHTML+=m(),window.addEventListener("load",(function(){s();let n=[];document.querySelectorAll("#models svg").forEach((function(e){n.push(e)}));for(let o=0;o<t.total;o++){let t=n[e.randInt(0,n.length-1)].cloneNode(!0);t.id="svg"+o,document.querySelector("main").appendChild(t)}document.querySelectorAll("main svg").forEach((function(n){let i={...o};i.id=n.id,i.size=e.randInt(t.size.min,t.size.max),i.left=e.randInt(0,t.window.width-i.size),i.top=e.randInt(0,t.window.height-i.size),i.rotate=e.randInt(0,360),i.color=e.randColor(),i.speed=e.randInt(t.speed.min,t.speed.max),r.push(i)})),window.addEventListener("resize",s),window.setInterval(i,60),window.setInterval(a,3e3),window.setInterval(c,6e3)}))})()})();