!function(a,b){"use strict";function c(){if(!e){e=!0;var a,c,d,f,g=-1!==navigator.appVersion.indexOf("MSIE 10"),h=!!navigator.userAgent.match(/Trident.*rv:11\./),i=b.querySelectorAll("iframe.wp-embedded-content");for(c=0;c<i.length;c++){if(d=i[c],!d.getAttribute("data-secret"))f=Math.random().toString(36).substr(2,10),d.src+="#?secret="+f,d.setAttribute("data-secret",f);if(g||h)a=d.cloneNode(!0),a.removeAttribute("security"),d.parentNode.replaceChild(a,d)}}}var d=!1,e=!1;if(b.querySelector)if(a.addEventListener)d=!0;if(a.wp=a.wp||{},!a.wp.receiveEmbedMessage)if(a.wp.receiveEmbedMessage=function(c){var d=c.data;if(d.secret||d.message||d.value)if(!/[^a-zA-Z0-9]/.test(d.secret)){var e,f,g,h,i,j=b.querySelectorAll('iframe[data-secret="'+d.secret+'"]'),k=b.querySelectorAll('blockquote[data-secret="'+d.secret+'"]');for(e=0;e<k.length;e++)k[e].style.display="none";for(e=0;e<j.length;e++)if(f=j[e],c.source===f.contentWindow){if(f.removeAttribute("style"),"height"===d.message){if(g=parseInt(d.value,10),g>1e3)g=1e3;else if(~~g<200)g=200;f.height=g}if("link"===d.message)if(h=b.createElement("a"),i=b.createElement("a"),h.href=f.getAttribute("src"),i.href=d.value,i.host===h.host)if(b.activeElement===f)a.top.location.href=d.value}else;}},d)a.addEventListener("message",a.wp.receiveEmbedMessage,!1),b.addEventListener("DOMContentLoaded",c,!1),a.addEventListener("load",c,!1)}(window,document);
(function () {
    if (sessionStorage.getItem("noticeClosed")) return;
  
    const noticeBar = document.createElement("div");
    noticeBar.style.position = "relative";
    noticeBar.style.backgroundColor = "#008CFF";
    noticeBar.style.color = "#ffffff";
    noticeBar.style.padding = "10px 20px";
    noticeBar.style.fontSize = "16px";
    noticeBar.style.textAlign = "center";
    noticeBar.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
    noticeBar.style.zIndex = "9999";
  
    // Message wrapper to center
    const messageWrapper = document.createElement("div");
    messageWrapper.innerHTML = "Buy this aged domain and original website togather (2 in 1) — now available at a highly affordable price on <a href='https://age.domains' target='_blank' style='color: inherit; text-decoration: underline;'>age.domains</a>!";
    messageWrapper.style.maxWidth = "100%";
    messageWrapper.style.margin = "0 auto";
    messageWrapper.style.display = "inline-block";
    
    noticeBar.appendChild(messageWrapper);
  
    // Close button
    const closeBtn = document.createElement("button");
    closeBtn.textContent = "×";
    closeBtn.style.position = "absolute";
    closeBtn.style.top = "50%";
    closeBtn.style.right = "20px";
    closeBtn.style.transform = "translateY(-50%)";
    closeBtn.style.background = "none";
    closeBtn.style.border = "none";
    closeBtn.style.fontSize = "20px";
    closeBtn.style.cursor = "pointer";
    closeBtn.style.color = "#ffffff";
    closeBtn.onclick = function () {
      noticeBar.remove();
      sessionStorage.setItem("noticeClosed", "true");
    };
  
    noticeBar.appendChild(closeBtn);
  
    window.addEventListener("DOMContentLoaded", function () {
      const masthead = document.getElementById("masthead");
      if (masthead && masthead.parentNode) {
        masthead.parentNode.insertBefore(noticeBar, masthead);
      } else {
        document.body.prepend(noticeBar);
      }
    });
  })();