const t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")};t.stopBtn.setAttribute("disabled","");let e=null;t.startBtn.addEventListener("click",(function(){e=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.startBtn.setAttribute("disabled",""),t.stopBtn.removeAttribute("disabled")})),t.stopBtn.addEventListener("click",(()=>{clearInterval(e),t.startBtn.removeAttribute("disabled"),t.stopBtn.setAttribute("disabled","")}));
//# sourceMappingURL=01-color-switcher.c64fdba7.js.map
