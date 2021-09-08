(()=>{"use strict";(function(e){let t=document.querySelector("#timer-hours"),o=document.querySelector("#timer-minutes"),n=document.querySelector("#timer-seconds");function s(){let s=function(){let t=(new Date(e).getTime()-(new Date).getTime())/1e3,o=Math.floor(t%60),n=Math.floor(t/60%60);return{timeRemaining:t,hours:Math.floor(t/3600),minutes:n,seconds:o}}();s.timeRemaining>0?(s.hours<10?t.textContent=`0${s.hours}`:t.textContent=`${s.hours}`,s.minutes<10?o.textContent=`0${s.minutes}`:o.textContent=`${s.minutes}`,s.seconds<10?n.textContent=`0${s.seconds}`:n.textContent=`${s.seconds}`):(t.textContent="00",o.textContent="00",n.textContent="00")}s(),setInterval((function(){s()}),1e3)})("09 september 2021"),(()=>{const e=document.querySelector("menu");document.querySelectorAll("a").forEach((e=>{"#service-block"===e.hash&&e.addEventListener("click",(t=>{t.preventDefault();const o=e.getAttribute("href").substr(1);document.getElementById(o).scrollIntoView({behavior:"smooth",block:"start"})}))}));const t=()=>{e.classList.toggle("active-menu")};document.addEventListener("click",(o=>{let n=o.target;if(n.closest(".menu"))t();else if(n.classList.contains("close-btn"))t();else if("A"===n.tagName&&e.classList.contains("active-menu")){t(),o.preventDefault();const e=o.target.getAttribute("href").substr(1);document.getElementById(e).scrollIntoView({behavior:"smooth",block:"start"})}else n.classList.contains("active-menu")||"LI"===n.tagName||!0!==e.classList.contains("active-menu")||t()}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),o=window.innerWidth;if(o>768){e.style.opacity=0;const o=()=>{(({timing:e,draw:t,duration:o})=>{let n=performance.now();requestAnimationFrame((function s(i){let l=(i-n)/o;l>1&&(l=1);let r=e(l);t(r),l<1&&requestAnimationFrame(s)}))})({duration:500,timing:e=>Math.pow(e,2),draw(t){e.style.opacity=1*t}})};t.forEach((t=>{t.addEventListener("click",(()=>{e.style.display&&"none"!==e.style.display||(o(),e.style.display="initial")}))})),e.addEventListener("click",(t=>{let o=t.target;o.classList.contains("popup-close")?e.style.display="none":(o=o.closest(".popup-content"),o||(e.style.display="none"))}))}o<768&&(t.forEach((t=>{t.addEventListener("click",(()=>{e.style.display&&"none"!==e.style.display||(e.style.display="initial")}))})),e.addEventListener("click",(t=>{let o=t.target;o.classList.contains("popup-close")?e.style.display="none":(o=o.closest(".popup-content"),o||(e.style.display="none"))})))})(),(()=>{const e=document.querySelector(".service-header"),t=e.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{let n=e.target;n=n.closest(".service-header-tab"),n&&t.forEach(((e,s)=>{e===n&&(e=>{for(let n=0;n<o.length;n++)e===n?(t[n].classList.add("active"),o[n].classList.remove("d-none")):(t[n].classList.remove("active"),o[n].classList.add("d-none"))})(s)}))}))})(),(()=>{const e=document.querySelectorAll(".portfolio-item"),t=document.querySelector(".portfolio-content");let o,n=0,s=document.querySelector(".portfolio-dots");for(let t=0;t<e.length-1;t++){if(0===t){let e=document.createElement("li");s.append(e),e.classList.add("dot"),e.classList.add("dot-active")}let e=document.createElement("li");s.append(e),e.classList.add("dot")}let i=document.querySelectorAll(".dot");const l=(e,t,o)=>{e[t].classList.remove(o)},r=(e,t,o)=>{e[t].classList.add(o)},a=()=>{l(e,n,"portfolio-item-active"),l(i,n,"dot-active"),n++,n>=e.length&&(n=0),r(e,n,"portfolio-item-active"),r(i,n,"dot-active")},c=(e=1500)=>{o=setInterval(a,e)};t.addEventListener("click",(t=>{t.preventDefault();let o=t.target;o.matches(".portfolio-btn, .dot ")&&(l(e,n,"portfolio-item-active"),l(i,n,"dot-active"),o.matches("#arrow-right")?n++:o.matches("#arrow-left")?n--:o.matches(".dot")&&i.forEach(((e,t)=>{e===o&&(n=t)})),n>=e.length&&(n=0),n<0&&(n=e.length-1),r(e,n,"portfolio-item-active"),r(i,n,"dot-active"))})),t.addEventListener("mouseover",(e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(o)})),t.addEventListener("mouseout",(e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&c()})),c()})(),document.querySelectorAll(".command__photo").forEach((e=>{let t=e.src,o=e.dataset.img;e.addEventListener("mouseenter",(e=>{e.target.src=o})),e.addEventListener("mouseleave",(e=>{e.target.src=t}))})),(()=>{document.querySelector(".footer-form-input");let e=document.querySelectorAll(".calc-item");document.querySelectorAll("input").forEach((e=>{e.setAttribute("minlength",2),e.setAttribute("title","Минимум 2 буквы"),"user_name"===e.getAttribute("name")?e.addEventListener("blur",(()=>{if(e.value.match(/[а-яА-ЯёЁ\-\ ]/g)){let t=e.value.split(" "),o=[];t.forEach((e=>{e=e[0].toUpperCase()+e.slice(1),o.push(e)})),e.value=o.join(" ")}e.value=e.value.replace(/[^а-яА-ЯёЁ\ ]/g,""),e.value=e.value.replace(/\ +/g," "),e.value=e.value.replace(/\-+/g,"-"),e.value=e.value.replace(/^[\s\-]+/g,""),e.value=e.value.replace(/[\s\-]+$/g,"")})):"user_email"===e.getAttribute("name")?(e.required=" ",e.setAttribute("pattern","([A-z0-9.-]{1,})@([A-z0-9.-]{1,}).([A-z]{2,8})"),e.setAttribute("title","Формат ввода: test@gmail.com"),e.addEventListener("blur",(()=>{e.value=e.value.replace(/[^a-zA-Z\@-\_\.\~\!\*\']/g,""),e.value=e.value.replace(/\ +/g," "),e.value=e.value.replace(/\-+/g,"-"),e.value=e.value.replace(/^[\s\-]+/g,""),e.value=e.value.replace(/[\s\-]+$/g,"")}))):"user_phone"===e.getAttribute("name")?(e.setAttribute("title","Минимум 8 символов"),e.setAttribute("minlength",8),e.addEventListener("blur",(()=>{e.value=e.value.replace(/[^0-9\+]/g,""),e.value=e.value.replace(/\ +/g," "),e.value=e.value.replace(/\-+/g,"-"),e.value=e.value.replace(/^[\s\-]+/g,""),e.value=e.value.replace(/[\s\-]+$/g,"")}))):"user_message"===e.getAttribute("name")&&e.addEventListener("blur",(()=>{e.value=e.value.replace(/[^а-яА-ЯёЁ0-9\-\,\.\!\:\;\ ]/g,""),e.value=e.value.replace(/\ +/g," "),e.value=e.value.replace(/\-+/g,"-"),e.value=e.value.replace(/^[\s\-]+/g,""),e.value=e.value.replace(/[\s\-]+$/g,"")}))})),e.forEach(((e,t)=>{0!==t&&e.addEventListener("input",(()=>{e.value=e.value.replace(/\D/g,"")}))}))})(),((e=100)=>{const t=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),n=document.querySelector(".calc-square"),s=document.querySelector(".calc-day"),i=document.querySelector(".calc-count");let l=document.getElementById("total");t.addEventListener("change",(t=>{const r=t.target;(r.matches("select")||r.matches("input"))&&(()=>{let t=0,r=1,a=1;const c=o.options[o.selectedIndex].value,d=+n.value;i.value>1&&(r+=(i.value-1)/10),s.value&&s.value<5?a*=2:s.value&&s.value<10&&(a*=1.5),c&&d&&(t=e*c*d*r*a),(({timing:e,draw:t,duration:o})=>{let n=performance.now();requestAnimationFrame((function s(i){let l=(i-n)/o;l>1&&(l=1);let r=e(l);t(r),l<1&&requestAnimationFrame(s)}))})({duration:1e3,timing:e=>e,draw(e){l.textContent=Math.floor(t*e)}})})()}))})(100),(()=>{const e=document.querySelectorAll("form"),t=document.createElement("div"),o=document.createElement("div"),n=document.createElement("div");t.classList.add("example"),o.classList.add("sk-plane"),n.style.cssText="font-size: 2rem",n.style.cssText="color: #fff",e.forEach((e=>{e.addEventListener("submit",(s=>{const i=e.querySelectorAll("input");s.preventDefault(),e.appendChild(n),e.appendChild(t),t.appendChild(o),n.textContent="Загрузка...";const l=new FormData(e);let r={};l.forEach(((e,t)=>{r[t]=e})),(e=>fetch("./server.php",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)}))(r).then((e=>{if(200!==e.status)throw new Error("status netwokr not 200");n.textContent="Спасибо! Мы скоро с вами свяжемся!",setTimeout((()=>n.textContent=""),5e3),t.remove(),i.forEach((e=>{e.value=""}))})).catch((e=>{n.textContent="Что-то пошло нет так...",console.error(e),setTimeout((()=>{t.remove(),n.textContent=""}),5e3)}))}))}))})(),new class{constructor({main:e,wrap:t,next:o,prev:n,infinity:s=!1,position:i=0,slidesToShow:l=4,responsive:r=[]}){this.main=document.querySelector(e),this.wrap=document.querySelector(t),this.slides=document.querySelector(t).children,this.next=document.querySelector(o),this.prev=document.querySelector(n),this.slidesToShow=l,this.options={position:i,infinity:s,widthSlide:Math.floor(100/this.slidesToShow)},this.responsive=r}init(){this.addGloClass(),this.addStyle(),this.pver&&this.next||this.addArrow(),this.controlSlider(),this.responsive&&this.responseInit()}addGloClass(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrap");for(const e of this.slides)e.classList.add("glo-slider__item")}addStyle(){let e=document.getElementById("slider");e||(e=document.createElement("style"),e.id="sliderCarusel-style"),e.textContent=`\n    .glo-slider{\n      overflow: hidden !important;\n    }\n    .glo-slider__wrap{\n      display: flex !important;\n      transition: transform 0.5s !important;\n      will-change: transform !important;\n    }\n    .glo-slider__item{\n      display: flex !important;\n      align-items: center !important;\n      justify-content: center !important;\n      flex: 0 0 ${this.options.widthSlide}% !important;\n      margin: auto 0 !important;\n    }\n    .glo-slider__prev,\n    .glo-slider__next{\n      margin: 0 10px;\n      border: 20px solid transparent;\n      background: transparent;\n    }\n    .glo-slider__next{\n      border-left-color: #19b5fe;\n    }\n    .glo-slider__prev{\n      border-right-color: #19b5fe;\n    }\n    .glo-slider__prev:hover,\n    .glo-slider__next:hover,\n    .glo-slider__prev:focus,\n    .glo-slider__next:focus{\n      background: transparent;\n      outline: transparent;\n    }`,document.head.appendChild(e)}controlSlider(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}prevSlider(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.slides.length-this.slidesToShow),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)}nextSlider(){(this.options.infinity||this.options.position<this.slides.length-this.slidesToShow)&&(++this.options.position,this.options.position>this.slides.length-this.slidesToShow&&(this.options.position=0),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)}addArrow(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.className="glo-slider__prev",this.next.className="glo-slider__next",this.main.appendChild(this.prev),this.main.appendChild(this.next)}responseInit(){const e=this.slidesToShow,t=this.responsive.map((e=>e.breakpoint)),o=Math.max(...t),n=()=>{const n=document.documentElement.clientWidth;if(n<o)for(let e=0;e<t.length;e++)n<t[e]&&(this.slidesToShow=this.responsive[e].slidesToShow,this.options.widthSlide=Math.floor(100/this.slidesToShow),this.addStyle());else this.slidesToShow=e,this.options.widthSlide=Math.floor(100/this.slidesToShow),this.addStyle()};n(),window.addEventListener("resize",n)}}({main:".companies-wrapper",wrap:".companies-hor",slidesToShow:4,infinity:!0,responsive:[{breakpoint:1024,slidesToShow:3},{breakpoint:768,slidesToShow:2},{breakpoint:576,slidesToShow:1}]}).init()})();