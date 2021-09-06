(()=>{"use strict";(function(e){let t=document.querySelector("#timer-hours"),a=document.querySelector("#timer-minutes"),l=document.querySelector("#timer-seconds");function o(){let e=function(){let e=(new Date("09 september 2021").getTime()-(new Date).getTime())/1e3,t=Math.floor(e%60),a=Math.floor(e/60%60);return{timeRemaining:e,hours:Math.floor(e/3600),minutes:a,seconds:t}}();e.timeRemaining>0?(e.hours<10?t.textContent=`0${e.hours}`:t.textContent=`${e.hours}`,e.minutes<10?a.textContent=`0${e.minutes}`:a.textContent=`${e.minutes}`,e.seconds<10?l.textContent=`0${e.seconds}`:l.textContent=`${e.seconds}`):(t.textContent="00",a.textContent="00",l.textContent="00")}o(),setInterval((function(){o()}),1e3)})(),(()=>{const e=document.querySelector("menu");document.querySelectorAll("a").forEach((e=>{"#service-block"===e.hash&&e.addEventListener("click",(t=>{t.preventDefault();const a=e.getAttribute("href").substr(1);document.getElementById(a).scrollIntoView({behavior:"smooth",block:"start"})}))}));const t=()=>{e.classList.toggle("active-menu")};document.addEventListener("click",(a=>{let l=a.target;if(l.closest(".menu"))t();else if(l.classList.contains("close-btn"))t();else if("A"===l.tagName&&e.classList.contains("active-menu")){t(),a.preventDefault();const e=a.target.getAttribute("href").substr(1);document.getElementById(e).scrollIntoView({behavior:"smooth",block:"start"})}else l.classList.contains("active-menu")||"LI"===l.tagName||!0!==e.classList.contains("active-menu")||t()}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),a=window.innerWidth;e.style.opacity=0,t.forEach((t=>{t.addEventListener("click",(()=>{e.style.display&&"none"!==e.style.display||(a>768&&(({timing:e,draw:t,duration:a})=>{let l=performance.now();requestAnimationFrame((function o(n){let r=(n-l)/a;r>1&&(r=1);let c=e(r);t(c),r<1&&requestAnimationFrame(o)}))})({duration:500,timing:e=>Math.pow(e,2),draw(t){e.style.opacity=1*t}}),e.style.display="initial")}))})),e.addEventListener("click",(t=>{let a=t.target;a.classList.contains("popup-close")?e.style.display="none":(a=a.closest(".popup-content"),a||(e.style.display="none"))}))})(),(()=>{const e=document.querySelector(".service-header"),t=e.querySelectorAll(".service-header-tab"),a=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{let l=e.target;l=l.closest(".service-header-tab"),l&&t.forEach(((e,o)=>{e===l&&(e=>{for(let l=0;l<a.length;l++)e===l?(t[l].classList.add("active"),a[l].classList.remove("d-none")):(t[l].classList.remove("active"),a[l].classList.add("d-none"))})(o)}))}))})(),(()=>{const e=document.querySelectorAll(".portfolio-item"),t=document.querySelector(".portfolio-content");let a,l=0,o=document.querySelector(".portfolio-dots");for(let t=0;t<e.length-1;t++){if(0===t){let e=document.createElement("li");o.append(e),e.classList.add("dot"),e.classList.add("dot-active")}let e=document.createElement("li");o.append(e),e.classList.add("dot")}let n=document.querySelectorAll(".dot");const r=(e,t,a)=>{e[t].classList.remove(a)},c=(e,t,a)=>{e[t].classList.add(a)},s=()=>{r(e,l,"portfolio-item-active"),r(n,l,"dot-active"),l++,l>=e.length&&(l=0),c(e,l,"portfolio-item-active"),c(n,l,"dot-active")},i=(e=1500)=>{a=setInterval(s,e)};t.addEventListener("click",(t=>{t.preventDefault();let a=t.target;a.matches(".portfolio-btn, .dot ")&&(r(e,l,"portfolio-item-active"),r(n,l,"dot-active"),a.matches("#arrow-right")?l++:a.matches("#arrow-left")?l--:a.matches(".dot")&&n.forEach(((e,t)=>{e===a&&(l=t)})),l>=e.length&&(l=0),l<0&&(l=e.length-1),c(e,l,"portfolio-item-active"),c(n,l,"dot-active"))})),t.addEventListener("mouseover",(e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(a)})),t.addEventListener("mouseout",(e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&i()})),i()})(),document.querySelectorAll(".command__photo").forEach((e=>{e.addEventListener("mouseenter",(e=>{e.target.src=e.target.dataset.img}))})),(()=>{document.querySelector(".footer-form-input");let e=document.querySelectorAll(".calc-item");document.querySelectorAll("input").forEach((e=>{e.setAttribute("minlength",2),e.setAttribute("title","Минимум 2 буквы"),"user_name"===e.getAttribute("name")?e.addEventListener("blur",(()=>{if(e.value.match(/[а-яА-ЯёЁ\-\ ]/g)){let t=e.value.split(" "),a=[];t.forEach((e=>{e=e[0].toUpperCase()+e.slice(1),a.push(e)})),e.value=a.join(" ")}e.value=e.value.replace(/[^а-яА-ЯёЁ\ ]/g,""),e.value=e.value.replace(/\ +/g," "),e.value=e.value.replace(/\-+/g,"-"),e.value=e.value.replace(/^[\s\-]+/g,""),e.value=e.value.replace(/[\s\-]+$/g,"")})):"user_email"===e.getAttribute("name")?(e.required=" ",e.setAttribute("pattern","([A-z0-9.-]{1,})@([A-z0-9.-]{1,}).([A-z]{2,8})"),e.setAttribute("title","Формат ввода: test@gmail.com"),e.addEventListener("blur",(()=>{e.value=e.value.replace(/[^a-zA-Z\@-\_\.\~\!\*\']/g,""),e.value=e.value.replace(/\ +/g," "),e.value=e.value.replace(/\-+/g,"-"),e.value=e.value.replace(/^[\s\-]+/g,""),e.value=e.value.replace(/[\s\-]+$/g,"")}))):"user_phone"===e.getAttribute("name")?(e.setAttribute("title","Минимум 8 символов"),e.setAttribute("minlength",8),e.addEventListener("blur",(()=>{e.value=e.value.replace(/[^0-9\+]/g,""),e.value=e.value.replace(/\ +/g," "),e.value=e.value.replace(/\-+/g,"-"),e.value=e.value.replace(/^[\s\-]+/g,""),e.value=e.value.replace(/[\s\-]+$/g,"")}))):"user_message"===e.getAttribute("name")&&e.addEventListener("blur",(()=>{e.value=e.value.replace(/[^а-яА-ЯёЁ0-9\-\,\.\!\:\;\ ]/g,""),e.value=e.value.replace(/\ +/g," "),e.value=e.value.replace(/\-+/g,"-"),e.value=e.value.replace(/^[\s\-]+/g,""),e.value=e.value.replace(/[\s\-]+$/g,"")}))})),e.forEach(((e,t)=>{0!==t&&e.addEventListener("input",(()=>{e.value=e.value.replace(/\D/g,"")}))}))})(),((e=100)=>{const t=document.querySelector(".calc-block"),a=document.querySelector(".calc-type"),l=document.querySelector(".calc-square"),o=document.querySelector(".calc-day"),n=document.querySelector(".calc-count");let r=document.getElementById("total");t.addEventListener("change",(t=>{const c=t.target;(c.matches("select")||c.matches("input"))&&(()=>{let t=0,c=1,s=1;const i=a.options[a.selectedIndex].value,u=+l.value;n.value>1&&(c+=(n.value-1)/10),o.value&&o.value<5?s*=2:o.value&&o.value<10&&(s*=1.5),i&&u&&(t=e*i*u*c*s),(({timing:e,draw:t,duration:a})=>{let l=performance.now();requestAnimationFrame((function o(n){let r=(n-l)/a;r>1&&(r=1);let c=e(r);t(c),r<1&&requestAnimationFrame(o)}))})({duration:1e3,timing:e=>e,draw(e){r.textContent=Math.floor(t*e)}})})()}))})(100),(()=>{const e=document.querySelectorAll("form"),t=document.createElement("div"),a=document.createElement("div"),l=document.createElement("div");t.classList.add("example"),a.classList.add("sk-plane"),l.style.cssText="font-size: 2rem",l.style.cssText="color: #fff",e.forEach((e=>{e.addEventListener("submit",(o=>{const n=e.querySelectorAll("input");o.preventDefault(),e.appendChild(l),e.appendChild(t),t.appendChild(a),l.textContent="Загрузка...";const r=new FormData(e);let c={};r.forEach(((e,t)=>{c[t]=e})),(e=>fetch("./server.php",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)}))(c).then((e=>{if(200!==e.status)throw new Error("status netwokr not 200");l.textContent="Спасибо! Мы скоро с вами свяжемся!",setTimeout((()=>l.textContent=""),5e3),t.remove(),n.forEach((e=>{e.value=""}))})).catch((e=>{l.textContent="Что-то пошло нет так...",console.error(e),setTimeout((()=>{t.remove(),l.textContent=""}),5e3)}))}))}))})()})();