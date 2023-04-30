(()=>{"use strict";var s,e=["rus","eng"],a=["Backspace","Delete","Tab","Enter","CapsLock","ShiftLeft","ShiftRight","ControlLeft","ControlRight","ToggleLang","AltLeft","AltRight"],c=[["Backquote","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0","Minus","Equal","Backspace"],["Tab","KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight","Backslash","Delete"],["CapsLock","KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote","Enter"],["ShiftLeft","KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Comma","Period","Slash","ArrowUp","ShiftRight"],["ControlLeft","ToggleLang","AltLeft","Space","AltRight","ArrowLeft","ArrowDown","ArrowRight","ControlRight"]],t={Backquote:{rus:{caseDown:"ё",caseUp:"Ё",caps:"Ё",shiftCaps:"ё"},eng:{caseDown:"`",caseUp:"~",caps:"`",shiftCaps:"~"}},Digit1:{rus:{caseDown:"1",caseUp:"!",caps:"1",shiftCaps:"!"},eng:{caseDown:"1",caseUp:"!",caps:"1",shiftCaps:"!"}},Digit2:{rus:{caseDown:"2",caseUp:'"',caps:"2",shiftCaps:'"'},eng:{caseDown:"2",caseUp:"@",caps:"2",shiftCaps:"@"}},Digit3:{rus:{caseDown:"3",caseUp:"№",caps:"3",shiftCaps:"№"},eng:{caseDown:"3",caseUp:"#",caps:"3",shiftCaps:"#"}},Digit4:{rus:{caseDown:"4",caseUp:";",caps:"4",shiftCaps:";"},eng:{caseDown:"4",caseUp:"$",caps:"4",shiftCaps:"$"}},Digit5:{rus:{caseDown:"5",caseUp:"%",caps:"5",shiftCaps:"%"},eng:{caseDown:"5",caseUp:"%",caps:"5",shiftCaps:"%"}},Digit6:{rus:{caseDown:"6",caseUp:":",caps:"6",shiftCaps:":"},eng:{caseDown:"6",caseUp:"^",caps:"6",shiftCaps:"^"}},Digit7:{rus:{caseDown:"7",caseUp:"?",caps:"7",shiftCaps:"?"},eng:{caseDown:"7",caseUp:"&",caps:"7",shiftCaps:"&"}},Digit8:{rus:{caseDown:"8",caseUp:"*",caps:"8",shiftCaps:"*"},eng:{caseDown:"8",caseUp:"*",caps:"8",shiftCaps:"*"}},Digit9:{rus:{caseDown:"9",caseUp:"(",caps:"9",shiftCaps:"("},eng:{caseDown:"9",caseUp:"(",caps:"9",shiftCaps:"("}},Digit0:{rus:{caseDown:"0",caseUp:")",caps:"0",shiftCaps:")"},eng:{caseDown:"0",caseUp:")",caps:"0",shiftCaps:")"}},Minus:{rus:{caseDown:"-",caseUp:"_",caps:"-",shiftCaps:"_"},eng:{caseDown:"-",caseUp:"_",caps:"-",shiftCaps:"_"}},Equal:{rus:{caseDown:"=",caseUp:"+",caps:"=",shiftCaps:"+"},eng:{caseDown:"=",caseUp:"+",caps:"=",shiftCaps:"+"}},Backspace:{rus:{caseDown:"Backspace",caseUp:"Backspace",caps:"Backspace",shiftCaps:"Backspace"},eng:{caseDown:"Backspace",caseUp:"Backspace",caps:"Backspace",shiftCaps:"Backspace"}},Tab:{rus:{caseDown:"Tab",caseUp:"Tab",caps:"Tab",shiftCaps:"Tab"},eng:{caseDown:"Tab",caseUp:"Tab",caps:"Tab",shiftCaps:"Tab"}},KeyQ:{rus:{caseDown:"й",caseUp:"Й",caps:"Й",shiftCaps:"й"},eng:{caseDown:"q",caseUp:"Q",caps:"Q",shiftCaps:"q"}},KeyW:{rus:{caseDown:"ц",caseUp:"Ц",caps:"Ц",shiftCaps:"ц"},eng:{caseDown:"w",caseUp:"W",caps:"W",shiftCaps:"w"}},KeyE:{rus:{caseDown:"у",caseUp:"У",caps:"У",shiftCaps:"у"},eng:{caseDown:"e",caseUp:"E",caps:"E",shiftCaps:"e"}},KeyR:{rus:{caseDown:"к",caseUp:"К",caps:"К",shiftCaps:"к"},eng:{caseDown:"r",caseUp:"R",caps:"R",shiftCaps:"r"}},KeyT:{rus:{caseDown:"е",caseUp:"Е",caps:"Е",shiftCaps:"е"},eng:{caseDown:"t",caseUp:"T",caps:"T",shiftCaps:"t"}},KeyY:{rus:{caseDown:"н",caseUp:"Н",caps:"Н",shiftCaps:"н"},eng:{caseDown:"y",caseUp:"Y",caps:"Y",shiftCaps:"y"}},KeyU:{rus:{caseDown:"г",caseUp:"Г",caps:"Г",shiftCaps:"г"},eng:{caseDown:"u",caseUp:"U",caps:"U",shiftCaps:"u"}},KeyI:{rus:{caseDown:"ш",caseUp:"Ш",caps:"Ш",shiftCaps:"ш"},eng:{caseDown:"i",caseUp:"I",caps:"I",shiftCaps:"i"}},KeyO:{rus:{caseDown:"щ",caseUp:"Щ",caps:"Щ",shiftCaps:"щ"},eng:{caseDown:"o",caseUp:"O",caps:"O",shiftCaps:"o"}},KeyP:{rus:{caseDown:"з",caseUp:"З",caps:"З",shiftCaps:"з"},eng:{caseDown:"p",caseUp:"P",caps:"P",shiftCaps:"p"}},BracketLeft:{rus:{caseDown:"х",caseUp:"Х",caps:"Х",shiftCaps:"х"},eng:{caseDown:"[",caseUp:"{",caps:"[",shiftCaps:"{"}},BracketRight:{rus:{caseDown:"ъ",caseUp:"Ъ",caps:"Ъ",shiftCaps:"ъ"},eng:{caseDown:"]",caseUp:"}",caps:"]",shiftCaps:"}"}},Backslash:{rus:{caseDown:"\\",caseUp:"/",caps:"\\",shiftCaps:"/"},eng:{caseDown:"\\",caseUp:"|",caps:"\\",shiftCaps:"|"}},Delete:{rus:{caseDown:"Del",caseUp:"Del",caps:"Del",shiftCaps:"Del"},eng:{caseDown:"Del",caseUp:"Del",caps:"Del",shiftCaps:"Del"}},CapsLock:{rus:{caseDown:"Caps",caseUp:"Caps",caps:"Caps",shiftCaps:"Caps"},eng:{caseDown:"Caps",caseUp:"Caps",caps:"Caps",shiftCaps:"Caps"}},KeyA:{rus:{caseDown:"ф",caseUp:"Ф",caps:"Ф",shiftCaps:"ф"},eng:{caseDown:"a",caseUp:"A",caps:"A",shiftCaps:"a"}},KeyS:{rus:{caseDown:"ы",caseUp:"Ы",caps:"Ы",shiftCaps:"ы"},eng:{caseDown:"s",caseUp:"S",caps:"S",shiftCaps:"s"}},KeyD:{rus:{caseDown:"в",caseUp:"В",caps:"В",shiftCaps:"в"},eng:{caseDown:"d",caseUp:"D",caps:"D",shiftCaps:"d"}},KeyF:{rus:{caseDown:"а",caseUp:"А",caps:"А",shiftCaps:"а"},eng:{caseDown:"f",caseUp:"F",caps:"F",shiftCaps:"f"}},KeyG:{rus:{caseDown:"п",caseUp:"П",caps:"П",shiftCaps:"п"},eng:{caseDown:"g",caseUp:"G",caps:"G",shiftCaps:"g"}},KeyH:{rus:{caseDown:"р",caseUp:"Р",caps:"Р",shiftCaps:"р"},eng:{caseDown:"h",caseUp:"H",caps:"H",shiftCaps:"h"}},KeyJ:{rus:{caseDown:"о",caseUp:"О",caps:"О",shiftCaps:"о"},eng:{caseDown:"j",caseUp:"J",caps:"J",shiftCaps:"j"}},KeyK:{rus:{caseDown:"л",caseUp:"Л",caps:"Л",shiftCaps:"л"},eng:{caseDown:"k",caseUp:"K",caps:"K",shiftCaps:"k"}},KeyL:{rus:{caseDown:"д",caseUp:"Д",caps:"Д",shiftCaps:"д"},eng:{caseDown:"l",caseUp:"L",caps:"L",shiftCaps:"l"}},Semicolon:{rus:{caseDown:"ж",caseUp:"Ж",caps:"Ж",shiftCaps:"ж"},eng:{caseDown:";",caseUp:":",caps:";",shiftCaps:":"}},Quote:{rus:{caseDown:"э",caseUp:"Э",caps:"Э",shiftCaps:"э"},eng:{caseDown:"'",caseUp:'"',caps:"'",shiftCaps:'"'}},Enter:{rus:{caseDown:"Enter",caseUp:"Enter",caps:"Enter",shiftCaps:"Enter"},eng:{caseDown:"Enter",caseUp:"Enter",caps:"Enter",shiftCaps:"Enter"}},ShiftLeft:{rus:{caseDown:"Shift",caseUp:"Shift",caps:"Shift",shiftCaps:"Shift"},eng:{caseDown:"Shift",caseUp:"Shift",caps:"Shift",shiftCaps:"Shift"}},KeyZ:{rus:{caseDown:"я",caseUp:"Я",caps:"Я",shiftCaps:"я"},eng:{caseDown:"z",caseUp:"Z",caps:"Z",shiftCaps:"z"}},KeyX:{rus:{caseDown:"ч",caseUp:"Ч",caps:"Ч",shiftCaps:"ч"},eng:{caseDown:"x",caseUp:"X",caps:"X",shiftCaps:"x"}},KeyC:{rus:{caseDown:"с",caseUp:"С",caps:"С",shiftCaps:"с"},eng:{caseDown:"c",caseUp:"C",caps:"C",shiftCaps:"c"}},KeyV:{rus:{caseDown:"м",caseUp:"М",caps:"М",shiftCaps:"м"},eng:{caseDown:"v",caseUp:"V",caps:"V",shiftCaps:"v"}},KeyB:{rus:{caseDown:"и",caseUp:"И",caps:"И",shiftCaps:"и"},eng:{caseDown:"b",caseUp:"B",caps:"B",shiftCaps:"b"}},KeyN:{rus:{caseDown:"т",caseUp:"Т",caps:"Т",shiftCaps:"т"},eng:{caseDown:"n",caseUp:"N",caps:"N",shiftCaps:"n"}},KeyM:{rus:{caseDown:"ь",caseUp:"Ь",caps:"Ь",shiftCaps:"ь"},eng:{caseDown:"m",caseUp:"M",caps:"M",shiftCaps:"m"}},Comma:{rus:{caseDown:"б",caseUp:"Б",caps:"Б",shiftCaps:"б"},eng:{caseDown:",",caseUp:"<",caps:",",shiftCaps:"<"}},Period:{rus:{caseDown:"ю",caseUp:"Ю",caps:"Ю",shiftCaps:"ю"},eng:{caseDown:".",caseUp:">",caps:".",shiftCaps:">"}},Slash:{rus:{caseDown:".",caseUp:",",caps:".",shiftCaps:","},eng:{caseDown:"/",caseUp:"?",caps:"/",shiftCaps:"?"}},ArrowUp:{rus:{caseDown:"▲",caseUp:"▲",caps:"▲",shiftCaps:"▲"},eng:{caseDown:"▲",caseUp:"▲",caps:"▲",shiftCaps:"▲"}},ShiftRight:{rus:{caseDown:"Shift",caseUp:"Shift",caps:"Shift",shiftCaps:"Shift"},eng:{caseDown:"Shift",caseUp:"Shift",caps:"Shift",shiftCaps:"Shift"}},ControlLeft:{rus:{caseDown:"Ctrl",caseUp:"Ctrl",caps:"Ctrl",shiftCaps:"Ctrl"},eng:{caseDown:"Ctrl",caseUp:"Ctrl",caps:"Ctrl",shiftCaps:"Ctrl"}},ToggleLang:{rus:{caseDown:"🌐",caseUp:"🌐",caps:"🌐",shiftCaps:"🌐"},eng:{caseDown:"🌐",caseUp:"🌐",caps:"🌐",shiftCaps:"🌐"}},AltLeft:{rus:{caseDown:"Alt",caseUp:"Alt",caps:"Alt",shiftCaps:"Alt"},eng:{caseDown:"Alt",caseUp:"Alt",caps:"Alt",shiftCaps:"Alt"}},Space:{rus:{caseDown:" ",caseUp:" ",caps:" ",shiftCaps:" "},eng:{caseDown:" ",caseUp:" ",caps:" ",shiftCaps:" "}},AltRight:{rus:{caseDown:"Alt",caseUp:"Alt",caps:"Alt",shiftCaps:"Alt"},eng:{caseDown:"Alt",caseUp:"Alt",caps:"Alt",shiftCaps:"Alt"}},ArrowLeft:{rus:{caseDown:"◄",caseUp:"◄",caps:"◄",shiftCaps:"◄"},eng:{caseDown:"◄",caseUp:"◄",caps:"◄",shiftCaps:"◄"}},ArrowDown:{rus:{caseDown:"▼",caseUp:"▼",caps:"▼",shiftCaps:"▼"},eng:{caseDown:"▼",caseUp:"▼",caps:"▼",shiftCaps:"▼"}},ArrowRight:{rus:{caseDown:"►",caseUp:"►",caps:"►",shiftCaps:"►"},eng:{caseDown:"►",caseUp:"►",caps:"►",shiftCaps:"►"}},ControlRight:{rus:{caseDown:"Ctrl",caseUp:"Ctrl",caps:"Ctrl",shiftCaps:"Ctrl"},eng:{caseDown:"Ctrl",caseUp:"Ctrl",caps:"Ctrl",shiftCaps:"Ctrl"}}},n={mode:"caseDown"},p=function(){var s=u();s.capsAll.forEach((function(s){return s.classList.add("hidden")})),s.caseDownAll.forEach((function(s){return s.classList.remove("hidden")})),s.caseUpAll.forEach((function(s){return s.classList.add("hidden")})),s.shiftCapsAll.forEach((function(s){return s.classList.add("hidden")}))},o=function(){var s=u();s.capsAll.forEach((function(s){return s.classList.add("hidden")})),s.caseDownAll.forEach((function(s){return s.classList.add("hidden")})),s.caseUpAll.forEach((function(s){return s.classList.remove("hidden")})),s.shiftCapsAll.forEach((function(s){return s.classList.add("hidden")}))},i=function(){var s=u();s.capsAll.forEach((function(s){return s.classList.remove("hidden")})),s.caseDownAll.forEach((function(s){return s.classList.add("hidden")})),s.caseUpAll.forEach((function(s){return s.classList.add("hidden")})),s.shiftCapsAll.forEach((function(s){return s.classList.add("hidden")}))},r=function(){var s=u();s.capsAll.forEach((function(s){return s.classList.add("hidden")})),s.caseDownAll.forEach((function(s){return s.classList.add("hidden")})),s.caseUpAll.forEach((function(s){return s.classList.add("hidden")})),s.shiftCapsAll.forEach((function(s){return s.classList.remove("hidden")}))},l=function(s){switch(s.mode){case"caps":n.mode="caseDown",p();break;case"shiftCaps":n.mode="caseUp",o();break;default:n.mode="caps",i()}},f=function(s){switch(s.mode){case"caseUp":n.mode="caseDown",p();break;case"shiftCaps":n.mode="caps",i();break;default:n.mode="caseUp",o()}},h=window.localStorage.getItem("lang")?window.localStorage.getItem("lang"):"rus",d=function(s,e){var a=C();switch(s){case"rus":a.engSpans.forEach((function(s){return s.classList.add("hidden")})),a.rusSpans.forEach((function(s){return s.classList.remove("hidden")}));break;case"eng":a.engSpans.forEach((function(s){return s.classList.remove("hidden")})),a.rusSpans.forEach((function(s){return s.classList.add("hidden")}))}!function(s){switch(s.mode){case"caseDown":p();break;case"caseUp":o();break;case"caps":i();break;case"shiftCaps":r()}}(e),function(s){window.localStorage.setItem("lang",s)}(h=s)},u=function(){return{capsAll:document.querySelectorAll(".caps"),caseDownAll:document.querySelectorAll(".caseDown"),caseUpAll:document.querySelectorAll(".caseUp"),shiftCapsAll:document.querySelectorAll(".shiftCaps")}},C=function(){return{rusSpans:document.querySelectorAll(".rus"),engSpans:document.querySelectorAll(".eng")}},D=function(){document.querySelector(".textarea").focus()};function w(s,e,c){var n,p,o,i,r=document.querySelector(".textarea"),l=s.classList[1],f=t[l][e][c],h=r.value;if(r.selectionStart===r.selectionEnd?(o=(n=r.selectionStart)-1,i=(p=r.selectionStart)+1):(o=n=r.selectionStart,i=p=r.selectionEnd),a.includes(l))switch(l){case"Backspace":n>=0&&n<=h.length&&(h=h.slice(0,o)+h.slice(p,h.length),r.value=h,r.selectionStart=o,r.selectionEnd=o);break;case"Delete":n>=0&&n<=h.length-1&&(h=h.slice(0,n)+h.slice(i,h.length),r.value=h,r.selectionStart=n,r.selectionEnd=n);break;case"Enter":n>=0&&n<=h.length?(h="".concat(h.slice(0,n),"\n").concat(h.slice(p,h.length)),r.value=h,r.selectionStart=n+1,r.selectionEnd=n+1):r.value+="\n";break;case"Tab":n>=0&&n<=h.length?(h="".concat(h.slice(0,n),"    ").concat(h.slice(p,h.length)),r.value=h,r.selectionStart=n+4,r.selectionEnd=n+4):r.value+="    "}else n>=0&&n<=h.length?(r.value=h.slice(0,n)+f+h.slice(p,h.length),r.selectionStart=n+f.length,r.selectionEnd=n+f.length):r.value+=f}function g(s){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(s){return typeof s}:function(s){return s&&"function"==typeof Symbol&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},g(s)}d(h,n.mode),function(){var s=document.querySelector("body"),a=document.createElement("div");a.className="page",s.prepend(a);var n=document.createElement("header");n.className="header",a.prepend(n);var p=document.createElement("h1");p.className="header__heading",p.textContent="Virtual keyboard",n.prepend(p);var o=document.createElement("main");o.className="main",n.after(o);var i=document.createElement("textarea");i.className="textarea",i.id="textarea",i.setAttribute("cols",50),i.setAttribute("rows",5),o.append(i);var r=document.createElement("div");r.className="keyboard",r.id="keyboard",o.append(r);for(var l=0;l<5;l+=1){var f=document.createElement("div");f.className="keyboard__row",r.append(f);for(var d=0;d<c[l].length;d+=1){var u=document.createElement("div");u.className="keyboard__key",u.classList.add(c[l][d]),f.append(u);for(var C=0;C<e.length;C+=1){var D=document.createElement("span"),w=e[C]===h?"":" hidden";D.className=e[C]+w,u.append(D);var g=document.createElement("span");g.className="caseDown",g.textContent=t[c[l][d]][e[C]].caseDown,D.append(g);var U=document.createElement("span");U.className="caseUp hidden",U.textContent=t[c[l][d]][e[C]].caseUp,D.append(U);var m=document.createElement("span");m.className="caps hidden",m.textContent=t[c[l][d]][e[C]].caps,D.append(m);var y=document.createElement("span");y.className="shiftCaps hidden",y.textContent=t[c[l][d]][e[C]].shiftCaps,D.append(y)}}}var L=document.createElement("footer");L.className="footer",o.after(L);var S=document.createElement("p"),E=document.createElement("p");S.className="footer__text",E.className="footer__text",L.append(S),L.append(E),S.textContent="Для смены языка используйте сочетание Left Ctrl + Alt",E.textContent="Клавиатура создана в операционной системе Windows"}(),document.addEventListener("mouseover",D),document.addEventListener("click",D),document.addEventListener("mousedown",(function(e){var a=e.target.closest(".keyboard__key");if(a){var c=(s=a).classList.contains("CapsLock"),t=s.classList.contains("ShiftLeft"),p=s.classList.contains("ShiftRight"),o=s.classList.contains("ToggleLang");c&&"caseUp"!==n.mode?(a.classList.toggle("pressed"),l(n)):(t||p)&&"caps"!==n.mode?(a.classList.toggle("pressed"),f(n)):c&&"caseUp"===n.mode||(t||p)&&"caps"===n.mode?(a.classList.toggle("pressed"),n.mode="shiftCaps",r()):o?(d("rus"===h?"eng":"rus",n.mode),a.classList.add("pressed")):a.classList.add("pressed"),w(a,h,n.mode)}})),document.addEventListener("mouseup",(function(){"object"===g(s)&&s.className.includes("pressed")&&(s.classList.contains("CapsLock")||s.classList.contains("ShiftLeft")||s.classList.contains("ShiftRight")||s.classList.remove("pressed"))})),document.addEventListener("keydown",(function(e){e.ctrlKey&&"Alt"===e.key&&d("rus"===h?"eng":"rus",n.mode),e.preventDefault(),s=e.code;var a=document.querySelector(".".concat(e.code)),c="CapsLock"===s,t="ShiftLeft"===s,p="ShiftRight"===s;c&&"caseUp"!==n.mode?(a.classList.toggle("pressed"),l(n)):(t||p)&&"caps"!==n.mode?(a.classList.toggle("pressed"),f(n)):c&&"caseUp"===n.mode||(t||p)&&"caps"===n.mode?(a.classList.toggle("pressed"),n.mode="shiftCaps",r()):a.classList.add("pressed"),w(a,h,n.mode)})),document.addEventListener("keyup",(function(e){s=e.code;var a=document.querySelector(".".concat(e.code));"CapsLock"===s||"ShiftLeft"===s||"ShiftRight"===s||a.classList.remove("pressed"),"ShiftLeft"!==s&&"ShiftRight"!==s||(a.classList.remove("pressed"),f(n))}))})();