let rm={},aElements=document.getElementsByTagName("a");for(let e=0;e<aElements.length;e++){aElements[e].setAttribute("draggable","false");let t=aElements[e].getElementsByTagName("img");for(let e=0;e<t.length;e++)t[e].setAttribute("draggable","false")}rm.showRightMenu=function(e,t=0,n=0){console.info(t,n);let o=document.getElementById("rightMenu");o.style.top=t+"px",o.style.left=n+"px",e?(o.style.display="block",stopMaskScroll()):o.style.display="none"},rm.hideRightMenu=function(){rm.showRightMenu(!1),document.querySelector("#rightmenu-mask").style.display="none"};let rmWidth=document.getElementById("rightMenu").offsetWidth,rmHeight=document.getElementById("rightMenu").offsetHeight;rm.reloadrmSize=function(){rightMenu.style.visibility="hidden",rightMenu.style.display="block",rmWidth=document.getElementById("rightMenu").offsetWidth,rmHeight=document.getElementById("rightMenu").offsetHeight,rightMenu.style.visibility="visible"};let domhref="",domImgSrc="",globalEvent=null;var oncontextmenuFunction=function(e){if(document.body.clientWidth>768){let t=e.clientX+10,n=e.clientY;const o=document.querySelector(".rightMenuOther"),i=document.querySelector(".rightMenuPlugin"),c=document.querySelector("#menu-copytext"),l=document.querySelector("#menu-pastetext"),m=document.querySelector("#menu-commenttext"),d=document.querySelector("#menu-newwindow"),u=document.querySelector("#menu-newwindowimg"),r=document.querySelector("#menu-copylink"),a=document.querySelector("#menu-copyimg"),s=document.querySelector("#menu-downloadimg"),y=document.querySelector("#menu-search"),g=document.querySelector("#menu-searchBaidu"),h=document.querySelector("#menu-music-toggle"),p=document.querySelector("#menu-music-back"),w=document.querySelector("#menu-music-forward"),E=document.querySelector("#menu-music-playlist"),f=document.querySelector("#menu-music-copyMusicName");let k=e.target.href,v=e.target.currentSrc,b=!1;o.style.display="block",globalEvent=e,selectTextNow&&window.getSelection()?(b=!0,c.style.display="block",m.style.display="block",y.style.display="block",g.style.display="block"):(c.style.display="none",m.style.display="none",g.style.display="none",y.style.display="none"),k?(b=!0,d.style.display="block",r.style.display="block",domhref=k):(d.style.display="none",r.style.display="none"),v?(b=!0,a.style.display="block",s.style.display="block",u.style.display="block",document.getElementById("rightMenu").style.width="12rem",domImgSrc=v):(a.style.display="none",s.style.display="none",u.style.display="none"),"input"===e.target.tagName.toLowerCase()||"textarea"===e.target.tagName.toLowerCase()?(b=!0,l.style.display="block"):l.style.display="none";const B=document.querySelector("#nav-music");return B&&B.contains(e.target)?(b=!0,h.style.display="block",p.style.display="block",w.style.display="block",E.style.display="block",f.style.display="block"):(h.style.display="none",p.style.display="none",w.style.display="none",E.style.display="none",f.style.display="none"),b?(o.style.display="none",i.style.display="block"):i.style.display="none",rm.reloadrmSize(),t+rmWidth>window.innerWidth&&(t-=rmWidth+10),n+rmHeight>window.innerHeight&&(n-=n+rmHeight-window.innerHeight),rm.showRightMenu(!0,n,t),document.getElementById("rightmenu-mask").style.display="flex",!1}};function imageToBlob(e){const t=new Image,n=document.createElement("canvas"),o=n.getContext("2d");return t.crossOrigin="",t.src=e,new Promise((e=>{t.onload=function(){n.width=this.naturalWidth,n.height=this.naturalHeight,o.drawImage(this,0,0),n.toBlob((t=>{e(t)}),"image/png",.75)}}))}async function copyImage(e){const t=await imageToBlob(e),n=new ClipboardItem({"image/png":t});navigator.clipboard.write([n])}function stopMaskScroll(){if(document.getElementById("rightmenu-mask")){document.getElementById("rightmenu-mask").addEventListener("mousewheel",(function(e){rm.hideRightMenu()}),{passive:!0})}if(document.getElementById("rightMenu")){document.getElementById("rightMenu").addEventListener("mousewheel",(function(e){rm.hideRightMenu()}),{passive:!0})}}window.oncontextmenu=oncontextmenuFunction,rm.downloadimging=!1,rm.writeClipImg=function(e){console.log("按下复制"),rm.hideRightMenu(),anzhiyu.snackbarShow("正在下载中，请稍后",!1,1e4),0==rm.downloadimging&&(rm.downloadimging=!0,setTimeout((function(){copyImage(e),anzhiyu.snackbarShow("复制成功！图片已添加盲水印，请遵守版权协议"),rm.downloadimging=!1}),"10000"))},rm.copyUrl=function(e){const t=document.createElement("input");t.id="copyVal",document.body.appendChild(t);const n=e;t.value=n,t.select(),t.setSelectionRange(0,t.value.length),document.execCommand("copy"),t.remove()},rm.rightmenuCopyText=function(e){navigator.clipboard&&navigator.clipboard.writeText(e),rm.hideRightMenu()},rm.copyPageUrl=function(e){e||(e=window.location.href),rm.copyUrl(e),anzhiyu.snackbarShow("复制链接地址成功",!1,2e3),rm.hideRightMenu()};var selectTextNow="";function selceText(){var e;e=document.selection?document.selection.createRange().text:window.getSelection().toString(),selectTextNow=""!==e?e:""}function replaceAll(e,t,n){return e.split(t).join(n)}function addRightMenuClickEvent(){document.getElementById("menu-backward").addEventListener("click",(function(){window.history.back(),rm.hideRightMenu()})),document.getElementById("menu-forward").addEventListener("click",(function(){window.history.forward(),rm.hideRightMenu()})),document.getElementById("menu-refresh").addEventListener("click",(function(){window.location.reload()})),document.getElementById("menu-top").addEventListener("click",(function(){anzhiyu.scrollToDest(0,500),rm.hideRightMenu()})),document.getElementById("menu-translate").addEventListener("click",(function(){window.translateFn.translatePage(),rm.hideRightMenu()}));document.querySelectorAll(".menu-link").forEach((function(e){e.addEventListener("click",rm.hideRightMenu)})),document.getElementById("menu-home")&&document.getElementById("menu-home").addEventListener("click",(function(){window.location.href=window.location.origin})),document.getElementById("menu-randomPost").addEventListener("click",(function(){toRandomPost()})),document.getElementById("menu-commentBarrage").addEventListener("click",anzhiyu.switchCommentBarrage),document.getElementById("rightmenu-mask").addEventListener("click",rm.hideRightMenu),document.getElementById("rightmenu-mask").addEventListener("contextmenu",(function(e){rm.hideRightMenu(),e.preventDefault()})),document.getElementById("menu-copy").addEventListener("click",(()=>{rm.copyPageUrl()})),document.getElementById("menu-pastetext").addEventListener("click",rm.pasteText),document.getElementById("menu-copytext").addEventListener("click",(function(){rm.rightmenuCopyText(selectTextNow);const e=GLOBAL_CONFIG.copyright;e.copy&&anzhiyu.snackbarShow(e.languages.copySuccess)})),document.getElementById("menu-commenttext").addEventListener("click",(function(){rm.rightMenuCommentText(selectTextNow)})),document.getElementById("menu-newwindow").addEventListener("click",(function(){window.open(domhref,"_blank"),rm.hideRightMenu()})),document.getElementById("menu-copylink").addEventListener("click",rm.copyLink),document.getElementById("menu-downloadimg").addEventListener("click",(function(){anzhiyu.downloadImage(domImgSrc,"anzhiyu")})),document.getElementById("menu-newwindowimg").addEventListener("click",(function(){window.open(domImgSrc,"_blank"),rm.hideRightMenu()})),document.getElementById("menu-copyimg").addEventListener("click",(function(){rm.writeClipImg(domImgSrc)})),document.getElementById("menu-searchBaidu").addEventListener("click",rm.searchBaidu),document.getElementById("menu-music-toggle").addEventListener("click",anzhiyu.musicToggle),document.getElementById("menu-music-back").addEventListener("click",anzhiyu.musicSkipBack),document.getElementById("menu-music-forward").addEventListener("click",anzhiyu.musicSkipForward),document.getElementById("menu-music-copyMusicName").addEventListener("click",(function(){rm.rightmenuCopyText(anzhiyu.musicGetName()),anzhiyu.snackbarShow("复制歌曲名称成功",!1,3e3)}))}document.onmouseup=document.ondblclick=selceText,rm.readClipboard=function(){navigator.clipboard&&navigator.clipboard.readText().then((e=>rm.insertAtCaret(globalEvent.target,e)))},rm.insertAtCaret=function(e,t){const n=e.selectionStart,o=e.selectionEnd;if(document.selection)e.focus(),document.selection.createRange().text=t,e.focus();else if(n||"0"==n){var i=e.scrollTop;e.value=e.value.substring(0,n)+t+e.value.substring(o,e.value.length),e.focus(),e.selectionStart=n+t.length,e.selectionEnd=n+t.length,e.scrollTop=i}else e.value+=t,e.focus()},rm.pasteText=function(){rm.readClipboard();rm.hideRightMenu()},rm.rightMenuCommentText=function(e){rm.hideRightMenu();var t=document.getElementById("post-comment").offsetTop;window.scrollTo(0,t-80),"undefined"!=e&&"null"!=e||(e="好棒！"),function t(){setTimeout((()=>{var n=document.getElementsByClassName("el-textarea__inner")[0];n||t();let o=document.createEvent("HTMLEvents");o.initEvent("input",!0,!0);let i=replaceAll(e,"\n","\n> ");n.value="> "+i+"\n\n",n.dispatchEvent(o),n.focus(),n.setSelectionRange(-1,-1),document.getElementById("comment-tips")&&document.getElementById("comment-tips").classList.add("show")}),100)}()},rm.searchBaidu=function(){anzhiyu.snackbarShow("即将跳转到萌娘百科",!1,2e3),setTimeout((function(){window.open("https://zh.moegirl.org.cn/"+selectTextNow)}),"2000"),rm.hideRightMenu()},rm.copyLink=function(){rm.rightmenuCopyText(domhref),anzhiyu.snackbarShow("已复制链接地址")},addRightMenuClickEvent();