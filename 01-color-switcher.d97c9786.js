!function(){var e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),n=document.querySelector("body"),a=null;e.addEventListener("click",(function(){e.disabled=!0,t.disabled=!1,a=setInterval((function(){n.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),t.addEventListener("click",(function(){e.disabled=!1,t.disabled=!0,clearInterval(a)}))}();
//# sourceMappingURL=01-color-switcher.d97c9786.js.map
