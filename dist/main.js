(()=>{"use strict";var e=document.getElementsByClassName("about__header")[0],o=document.getElementsByClassName("about")[0],t=window.innerHeight;document.addEventListener("scroll",(function(l){var n=e.getBoundingClientRect().top;console.log(e),console.log(o),o.style.opacity=n<t?"1":"0",console.log("hello"),console.log(t),console.log(n)}))})();