(()=>{"use strict";function e(e){let t=Math.floor(Math.random()*Math.floor(3));switch(e.style.backgroundColor="",t){case 0:e.style.backgroundColor="Crimson",e.style.borderColor="DarkRed";break;case 1:e.style.backgroundColor="SteelBlue",e.style.borderColor="DarkSlateBlue";break;case 2:e.style.backgroundColor="OliveDrab",e.style.borderColor="DarkOliveGreen";break;default:e.style.backgroundColor="gray"}return e}let t=console.log;console.log=function(e){let n=new Date,o=String(n.getHours()),l=String(n.getMinutes()),r=String(n.getSeconds());n=o+":"+l+":"+r,t(n,e,"\n",this)};let n=new function(){return this.stack=[],this.push=function(e){this.stack.push(e)},this.pop=function(){this.stack.pop()},this.stack},o=document.getElementById("addButton"),l=document.getElementById("removeButton");o.addEventListener("click",(()=>{try{return function(t){let n=document.createElement("div");n.className="plate";try{e(n),n.style.zIndex=t.length+1,10!=t.length?(t.push(n),document.querySelector(".plate").insertAdjacentElement("beforeBegin",t[t.length-1]),console.log.call(t,`Добавлен элемент с индексом [${t.length-1}]`)):(alert("Стэк переполнен!"),console.log.call(t,"Переполнение стека"))}catch(e){console.log(e)}}(n)}catch(e){console.log(e)}}),!1),l.addEventListener("click",(()=>{try{return function(e){try{let t=document.querySelector(".plates__box"),n=document.querySelector(".plate");0!=e.length?(t.removeChild(n),e.pop(),console.log.call(e,`Удалён элемент элемент с индексом [${e.length}]`)):(alert("в стеке нет элементов!"),console.log.call(e,"В стеке отсуствуют элементы"))}catch(e){console.log(e)}}(n)}catch(e){console.log(e)}}),!1),function(t){let n=document.querySelector(t);return function(o){return function(l=1){try{if("string"==typeof l)throw new Error("invalid type of the argument")}catch(e){alert("Неверный тип аргумента количества блоков\nКоличество должно быть числом"),console.log(e)}for(let r=0;r<l;r++){let l=document.createElement(o),r=document.createElement("button");r.style.cssText="\n                                border: none;\n                                background: transparent;\n                                margin-left: 10px;\n                                margin-top: 10px;\n                                width: 16px;\n                                height: 16px;\n                                font-size: 15px;\n                                font-weight: 700;\n                                text-align: center;\n                                ",r.innerHTML="X",r.className="."==t[0]||"#"==t[0]?t.slice(1)+"__deleteButton":t+"__deleteButton",e(l),r.addEventListener("click",(()=>n.removeChild(l)));try{l.appendChild(r),n.appendChild(l)}catch(e){alert("Введено неправильное имя родительского блока!"),console.log(e.message)}}}}}(".make-block-container")("span")(3)})();