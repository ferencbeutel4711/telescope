(function(t){function e(e){for(var n,i,s=e[0],c=e[1],l=e[2],h=0,d=[];h<s.length;h++)i=s[h],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/telescope/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0f18":function(t,e,a){},"0f31":function(t,e,a){"use strict";a("3f60")},"3d0f":function(t,e,a){},"3f60":function(t,e,a){},"45a9":function(t,e,a){},5005:function(t,e,a){"use strict";a("9fc1")},"54c7":function(t,e,a){"use strict";a("45a9")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),r={id:"nav"},o=Object(n["h"])("Universe-Maker"),i=Object(n["h"])(" | "),s=Object(n["h"])("Starmap");function c(t,e){var a=Object(n["z"])("router-link"),c=Object(n["z"])("router-view");return Object(n["s"])(),Object(n["e"])(n["a"],null,[Object(n["i"])("div",r,[Object(n["i"])(a,{to:"/"},{default:Object(n["E"])((function(){return[o]})),_:1}),i,Object(n["i"])(a,{to:"/starmap"},{default:Object(n["E"])((function(){return[s]})),_:1})]),Object(n["i"])(c)],64)}a("9cde");const l={};l.render=c;var u=l,h=a("6c02");function d(t,e,a,r,o,i){var s=Object(n["z"])("Starmap"),c=Object(n["z"])("SystemMap");return Object(n["s"])(),Object(n["e"])(n["a"],null,[Object(n["i"])(s,{style:{display:r.selectedSystem?"none":"block"}},null,8,["style"]),r.selectedSystem?(Object(n["s"])(),Object(n["e"])(c,{key:0,system:r.selectedSystem},null,8,["system"])):Object(n["f"])("",!0)],64)}var g=Object(n["G"])("data-v-60c12ba6");Object(n["v"])("data-v-60c12ba6");var f={class:"starmap-container"},v={key:0,class:"starmap-blur"},b={key:0},p=Object(n["g"])('<canvas id="background-0" style="z-index:-1;" class="background background-0" height="7500" width="7500" data-v-60c12ba6></canvas><canvas id="background-1" style="z-index:8;" class="background" height="7500" width="7500" data-v-60c12ba6></canvas><canvas id="background-2" style="z-index:6;" class="background" height="7500" width="7500" data-v-60c12ba6></canvas><canvas id="background-3" style="z-index:4;" class="background" height="7500" width="7500" data-v-60c12ba6></canvas><canvas id="background-4" style="z-index:2;" class="background" height="7500" width="7500" data-v-60c12ba6></canvas>',5);Object(n["t"])();var m=g((function(t,e,a,r,o,i){var s=Object(n["z"])("StarInfo"),c=Object(n["z"])("StarQuickInfo");return Object(n["s"])(),Object(n["e"])("div",f,[Object(n["i"])(n["b"],{name:"blur"},{default:g((function(){return[r.interactionLocked?(Object(n["s"])(),Object(n["e"])("div",v)):Object(n["f"])("",!0)]})),_:1}),r.debug?(Object(n["s"])(),Object(n["e"])("div",b,[(Object(n["s"])(!0),Object(n["e"])(n["a"],null,Object(n["y"])(r.debugOrigXList,(function(t){return Object(n["s"])(),Object(n["e"])("p",{key:t.key},Object(n["B"])(t.key)+" : "+Object(n["B"])(t.value),1)})),128))])):Object(n["f"])("",!0),Object(n["i"])("canvas",{id:"starmap",class:"starmap",height:1e4,width:1e4,onWheel:e[1]||(e[1]=Object(n["F"])((function(){return r.handleZoom&&r.handleZoom.apply(r,arguments)}),["prevent"]))},null,32),p,r.selectedStar?(Object(n["s"])(),Object(n["e"])(s,{key:1,class:"starinfo",style:{left:"".concat(r.selectedStar.screenPoint.x-350,"px"),top:"".concat(r.selectedStar.screenPoint.y-800,"px")},star:r.selectedStar.star,onStarInfoClosed:r.starInfoClosed},null,8,["style","star","onStarInfoClosed"])):Object(n["f"])("",!0),r.hoveredStar?(Object(n["s"])(),Object(n["e"])(c,{key:2,class:"star-quickinfo",style:{left:"".concat(r.hoveredStar.screenPoint.x+r.hoveredStar.star.position.size+10,"px"),top:"".concat(r.hoveredStar.screenPoint.y-r.hoveredStar.star.position.size-20,"px")},star:r.hoveredStar.star},null,8,["style","star"])):Object(n["f"])("",!0)])})),y=a("2909"),O=a("b85c"),j=(a("d3b7"),a("ddb0"),a("159b"),a("99af"),a("d81d"),a("d4ec")),S=a("bee2"),k=(a("cb29"),function(t,e,a,n,r,o){var i=(t.clientX-e.parentNode.getBoundingClientRect().left)*(1/o),s=(t.clientY-e.parentNode.getBoundingClientRect().top)*(1/o),c=i-(a.position.x-n),l=s-(a.position.y-r);return Math.pow(c,2)+Math.pow(l,2)<Math.pow(a.position.size,2)}),w=function(t,e,a,n){return{x:(t.position.x-e)*n,y:(t.position.y-a)*n}},x=function(){function t(e,a,n){Object(j["a"])(this,t),this.star=a,this.canDisplayInfo=!1,this.canvas=e,this.controls=n}return Object(S["a"])(t,[{key:"draw",value:function(){var t=this.canvas.getContext("2d");t.save(),t.beginPath(),t.arc(this.star.position.x,this.star.position.y,this.star.position.size,0,2*Math.PI);var e=t.createRadialGradient(this.star.position.x,this.star.position.y,this.star.position.size/15,this.star.position.x,this.star.position.y,this.star.position.size);e.addColorStop(0,"hsl(".concat(this.star.style.hue,", ").concat(this.star.style.saturation/2,"%, ").concat(Math.min(100,1.5*this.star.style.lightness),"%)")),e.addColorStop(.8,"hsl(".concat(this.star.style.hue,", ").concat(this.star.style.saturation,"%, ").concat(Math.min(100,this.star.style.lightness),"%)")),t.fillStyle=e,t.shadowBlur=this.star.position.size,t.shadowColor="hsl(".concat(this.star.style.hue,", ").concat(this.star.style.saturation,"%, ").concat(Math.min(100,this.star.style.lightness),"%)"),t.fill(),t.closePath(),t.restore()}},{key:"onMouseDown",value:function(t){k(t,this.canvas,this.star,this.controls.getCurrentOrigX(),this.controls.getCurrentOrigY(),this.controls.getCurrentScale())&&(this.canDisplayInfo=!0)}},{key:"onMouseMove",value:function(t){return k(t,this.canvas,this.star,this.controls.getCurrentOrigX(),this.controls.getCurrentOrigY(),this.controls.getCurrentScale())?{star:this.star,screenPoint:w(this.star,this.controls.getCurrentOrigX(),this.controls.getCurrentOrigY(),this.controls.getCurrentScale())}:null}},{key:"onMouseUp",value:function(t){return this.canDisplayInfo&&k(t,this.canvas,this.star,this.controls.getCurrentOrigX(),this.controls.getCurrentOrigY(),this.controls.getCurrentScale())?(this.canDisplayInfo=!1,this.controls.scrollToOrig(this.star.position.x-this.canvas.parentNode.clientWidth*(1/this.controls.getCurrentScale())*.5,this.star.position.y-this.canvas.parentNode.clientHeight*(1/this.controls.getCurrentScale())*.75),{star:this.star,screenPoint:w(this.star,this.controls.getCurrentOrigX(),this.controls.getCurrentOrigY(),this.controls.getCurrentScale())}):(this.canDisplayInfo=!1,null)}}]),t}(),M=(a("7db0"),a("b0c0"),function(t){switch(t){case P.SMALL:return{strokeStyle:"#7a328a",lineWidth:1,arrowLength:8,arrowSize:8};case P.MEDIUM:return{strokeStyle:"#b44bcb",lineWidth:2,arrowLength:10,arrowSize:10};case P.LARGE:return{strokeStyle:"#c640e3",lineWidth:3,arrowLength:14,arrowSize:14};case P.CAPITAL:return{strokeStyle:"#c410e7",lineWidth:4,arrowLength:20,arrowSize:20};default:return console.error("unknown gate tier: ".concat(t)),null}}),z=function(t,e){var a=e.find((function(e){return e.name===t}));return a||console.error("cannot find target: ".concat(t)),a},C=function(t,e,a,n,r,o,i,s){var c=r-e,l=o-a,u=Math.atan2(l,c),h=Math.sqrt(c*c+l*l),d=0+n,g=h-i;t.save(),t.translate(e,a),t.rotate(u),t.beginPath(),t.lineWidth=s.lineWidth,t.strokeStyle=s.strokeStyle,t.moveTo(d,0),t.lineTo(g,0),t.moveTo(g-s.arrowLength,-s.arrowSize),t.lineTo(g,0),t.lineTo(g-s.arrowLength,s.arrowSize),t.stroke(),t.closePath(),t.restore()},L=function t(e,a,n,r){Object(j["a"])(this,t);var o=M(a.tier);if(o){var i=z(a.target,r);if(i){var s=e.getContext("2d");C(s,n.position.x,n.position.y,n.position.size,i.position.x,i.position.y,i.position.size,o)}}},P={SMALL:"SMALL",MEDIUM:"MEDIUM",LARGE:"LARGE",CAPITAL:"CAPITAL"},I=function(){function t(e,a){Object(j["a"])(this,t),this.zoomIntensity=.2,this.origX=0,this.origY=0,this.primaryCanvas=e,this.primaryCtx=e.getContext("2d"),this.backgroundCanvasList=a,this.isDragging=!1,this.dragOffsetX=0,this.dragOffsetY=0,this.draggingBackLockedX=!1,this.draggingBackLockedY=!1,this.draggingForwardsLockedX=!1,this.draggingForwardsLockedY=!1,this.zoomLevel=0,this.scale=1}return Object(S["a"])(t,[{key:"getCurrentScale",value:function(){return this.scale}},{key:"getCurrentOrigX",value:function(){return this.origX}},{key:"getCurrentOrigY",value:function(){return this.origY}},{key:"scrollToOrig",value:function(t,e){var a=this.origX-t,n=this.origY-e;this.primaryCtx.translate(a,n),this.origX=t,this.origY=e,this.backgroundCanvasList.forEach((function(r){var o=r.canvas.getContext("2d");o.translate(a*r.parallax,n*r.parallax),r.origX=t*r.parallax,r.origY=e*r.parallax}))}},{key:"onMouseDown",value:function(t){this.isDragging=!0,this.dragOffsetX=t.offsetX,this.dragOffsetY=t.offsetY}},{key:"onMouseLeave",value:function(){this.isDragging=!1,this.dragOffsetX=0,this.dragOffsetY=0}},{key:"onMouseMove",value:function(t){this.isDragging&&(this.handleMouseMoveForDimension(t,"X"),this.handleMouseMoveForDimension(t,"Y"))}},{key:"handleMouseMoveForDimension",value:function(t,e){var a="X"===e,n=t["offset".concat(e)],r=(this["dragOffset".concat(e)]-n)*(0===this.zoomLevel?1:this.zoomLevel<0?-this.zoomLevel/2:1/this.zoomLevel*2),o=(a?this.primaryCanvas.parentNode.clientWidth:this.primaryCanvas.parentNode.clientHeight)/this.scale,i=a?this.primaryCanvas.width:this.primaryCanvas.height,s=r<0;if(!this["draggingBackLocked".concat(e)]||!this["draggingForwardsLocked".concat(e)]||this["draggingBackLocked".concat(e)]&&!s||this["draggingForwardsLocked".concat(e)]&&s){var c=this["orig".concat(e)]+r;c<0?(this["draggingBackLocked".concat(e)]=!0,r=-this["orig".concat(e)]):this["draggingBackLocked".concat(e)]=!1,c+o>i?(this["draggingForwardsLocked".concat(e)]=!0,r=i-this["orig".concat(e)]-o):this["draggingForwardsLocked".concat(e)]=!1,this.primaryCtx.translate(a?-r:0,a?0:-r),this["orig".concat(e)]+=r,this.backgroundCanvasList.forEach((function(t){var n=t.canvas.getContext("2d");t["orig".concat(e)]+r>=0&&!t["orig".concat(e)]+r+o<=i&&(n.translate(a?-r*t.parallax:0,a?0:-r*t.parallax),t["orig".concat(e)]+=r*t.parallax)})),this["dragOffset".concat(e)]=n}}},{key:"onMouseUp",value:function(){this.isDragging=!1,this.dragOffsetX=0,this.dragOffsetY=0}},{key:"zoomAt",value:function(t){var e=this,a=t.offsetX,n=t.offsetY,r=t.deltaY<0?1:-1,o=this.primaryCanvas.getContext("2d");if(this.zoomLevel+=r,this.zoomLevel<-5)this.zoomLevel+=1;else if(this.zoomLevel>5)this.zoomLevel-=1;else{o.translate(this.origX,this.origY);var i=Math.exp(r*this.zoomIntensity),s=this.scaleOrig(a,n,i,this.origX,this.origY,this.primaryCanvas,this.scale,1,this.primaryCanvas.parentNode.clientWidth,this.primaryCanvas.parentNode.clientHeight),c=s.newOrigX,l=s.newOrigY;this.origX=c,this.origY=l,o.scale(i,i),o.translate(-this.origX,-this.origY),this.scale*=i,this.backgroundCanvasList.forEach((function(t){var o=t.canvas.getContext("2d");o.translate(t.origX,t.origY);var s=Math.exp(r*e.zoomIntensity*t.parallax),c=e.scaleOrig(a,n,i,t.origX,t.origY,t.canvas,t.scale,t.parallax),l=c.newOrigX,u=c.newOrigY;t.origX=l,t.origY=u,o.scale(s,s),o.translate(-t.origX,-t.origY),t.scale*=s}))}}},{key:"scaleOrig",value:function(t,e,a,n,r,o,i,s,c,l){var u=n-(t/(i*a)-t/i)*s,h=r-(e/(i*a)-e/i)*s;if(u<0)u=0;else{var d=c/(i*a);u+d>o.width&&(u=o.width-d)}if(h<0)h=0;else{var g=l/(i*a);h+g>o.height&&(h=o.height-g)}return{newOrigX:u,newOrigY:h}}}]),t}(),T=Object(n["G"])("data-v-1fe1af85");Object(n["v"])("data-v-1fe1af85");var N={class:"star-info"},D=Object(n["i"])("span",null,"X",-1),E={class:"star-info__content"},_={class:"star-info__text star-info__star-name"},X={key:0},Y=Object(n["i"])("p",{class:"star-info__text star-info__list-label"},"Gates:",-1),B={class:"star-info__text"},A={key:1},F=Object(n["i"])("p",{class:"star-info__text star-info__list-label"},"Planets:",-1),R={class:"star-info__text"},W={class:"star-info__text"},G=Object(n["i"])("span",null,"Visit System",-1);Object(n["t"])();var U=T((function(t,e,a,r,o,i){return Object(n["s"])(),Object(n["e"])("div",N,[Object(n["i"])("div",{class:"star-info__close-button",onClick:e[1]||(e[1]=function(){return r.close&&r.close.apply(r,arguments)})},[D]),Object(n["i"])("div",E,[Object(n["i"])("p",_,Object(n["B"])(a.star.name),1),a.star.gates.length>0?(Object(n["s"])(),Object(n["e"])("div",X,[Y,(Object(n["s"])(!0),Object(n["e"])(n["a"],null,Object(n["y"])(a.star.gates,(function(t){return Object(n["s"])(),Object(n["e"])("div",{class:"star-info__list-item",key:t.name},[Object(n["i"])("p",B,Object(n["B"])(t.name)+" : "+Object(n["B"])(a.star.name)+" => "+Object(n["B"])(t.target),1)])})),128))])):Object(n["f"])("",!0),a.star.planets.length>0?(Object(n["s"])(),Object(n["e"])("div",A,[F,(Object(n["s"])(!0),Object(n["e"])(n["a"],null,Object(n["y"])(a.star.planets,(function(t){return Object(n["s"])(),Object(n["e"])("div",{class:"star-info__list-item",key:t.officialName},[Object(n["i"])("p",R,"Official name: "+Object(n["B"])(t.officialName),1),Object(n["i"])("p",W,"Name: "+Object(n["B"])(t.name),1)])})),128))])):Object(n["f"])("",!0)]),Object(n["i"])("div",{class:"star-info__visit-system-link",onClick:e[2]||(e[2]=function(){return r.visitSystem&&r.visitSystem.apply(r,arguments)})},[G])])})),q={name:"StarInfo",props:{star:Object},setup:function(t,e){var a=e.emit,n=Object(h["d"])(),r=function(){return a("starInfoClosed")},o=function(){return n.push({path:"/starmap/".concat(t.star.name)})};return{close:r,visitSystem:o}}};a("54c7");q.render=U,q.__scopeId="data-v-1fe1af85";var H=q,Q=Object(n["G"])("data-v-461a788e");Object(n["v"])("data-v-461a788e");var V={class:"star-quickinfo"};Object(n["t"])();var J=Q((function(t,e,a,r,o,i){return Object(n["s"])(),Object(n["e"])("div",V,[Object(n["i"])("span",null,Object(n["B"])(a.star.name),1)])})),Z={name:"StarQuickInfo",props:{star:Object}};a("5c5e");Z.render=J,Z.__scopeId="data-v-461a788e";var K=Z,$=(a("96cf"),regeneratorRuntime.mark(tt));function tt(t,e){var a,n,r;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:a=Object(O["a"])(t),o.prev=1,a.s();case 3:if((n=a.n()).done){o.next=9;break}return r=n.value,o.next=7,e(r);case 7:o.next=3;break;case 9:o.next=14;break;case 11:o.prev=11,o.t0=o["catch"](1),a.e(o.t0);case 14:return o.prev=14,a.f(),o.finish(14);case 17:case"end":return o.stop()}}),$,null,[[1,11,14,17]])}function et(t,e,a){var n,r=Object(O["a"])(tt(t,a));try{for(r.s();!(n=r.n()).done;){var o=n.value;if(e(o))return o}}catch(i){r.e(i)}finally{r.f()}}var at=function(t,e){var a=Math.max(100,255*Math.random());return{x:Math.random()*t.width,y:Math.random()*t.height,r:Math.random()*e,color:"rgba(".concat(a,", ").concat(a,", ").concat(a,", 1)"),glow:Math.random()*e*3}},nt=function(t,e,a){var n=a.x,r=a.y,o=a.r,i=a.color,s=a.glow;e.save(),e.beginPath(),e.arc(n,r,o,0,360),e.fillStyle=i,e.shadowBlur=s,e.shadowColor=i,e.fill(),e.closePath(),e.restore()},rt=function(){function t(e,a){Object(j["a"])(this,t),this.canvas=e,this.ctx=e.getContext("2d"),this.backgroundStars=Array(Math.round(1/a*1500)).fill(1).map((function(){return at(e,a)}))}return Object(S["a"])(t,[{key:"render",value:function(){var t=this;this.backgroundStars.forEach((function(e){nt(t.canvas,t.ctx,e)}))}}]),t}(),ot=a("5ee2"),it=a.n(ot),st=3e3,ct=4200,lt=!1,ut=!0,ht={name:"Starmap",components:{StarInfo:H,StarQuickInfo:K},setup:function(){var t,e,a,r,o,i,s,c,l,u=[],h=Object(n["x"])(!1),d=Object(n["x"])(),g=Object(n["x"])(),f=Object(n["x"])([]),v=function(){var t=s.getContext("2d");if(t.save(),t.setTransform(1,0,0,1,0,0),t.clearRect(0,0,s.width,s.height),t.restore(),ut){var e,a=Object(O["a"])(Array(9).keys());try{for(a.s();!(e=a.n()).done;){var n=e.value;t.save(),t.beginPath(),t.moveTo(s.width*parseFloat("0.".concat(n+1)),0),t.lineTo(s.width*parseFloat("0.".concat(n+1)),s.height),t.strokeStyle="rgba(126,126,126,0.4)",t.lineWidth=1,t.stroke(),t.closePath(),t.restore()}}catch(h){a.e(h)}finally{a.f()}var r,o=Object(O["a"])(Array(9).keys());try{for(o.s();!(r=o.n()).done;){var i=r.value;t.save(),t.beginPath(),t.moveTo(0,s.height*parseFloat("0.".concat(i+1))),t.lineTo(s.width,s.height*parseFloat("0.".concat(i+1))),t.strokeStyle="rgba(126,126,126,0.4)",t.lineWidth=1,t.stroke(),t.closePath(),t.restore()}}catch(h){o.e(h)}finally{o.f()}}t.save(),t.beginPath(),t.rect(0,0,s.width,s.height),t.strokeStyle="rgba(212,29,29,1)",t.lineWidth=1/l.getCurrentScale()*20,t.stroke(),t.closePath(),t.restore(),it.a.stars.forEach((function(t){return t.gates.forEach((function(e){return new L(s,e,t,it.a.stars)}))})),u.forEach((function(t){return t.draw()})),c.forEach((function(t){var e=t.canvas.getContext("2d");if(e.save(),e.setTransform(1,0,0,1,0,0),e.clearRect(0,0,t.canvas.width,t.canvas.height),e.restore(),t.background.render(),lt){var a,n=Object(O["a"])(Array(9).keys());try{for(n.s();!(a=n.n()).done;){var r=a.value;e.save(),e.beginPath(),e.moveTo(t.canvas.width*parseFloat("0.".concat(r+1)),0),e.lineTo(t.canvas.width*parseFloat("0.".concat(r+1)),t.canvas.height),e.strokeStyle="rgba(245,88,88,1)",e.lineWidth=1,e.stroke(),e.closePath(),e.restore()}}catch(h){n.e(h)}finally{n.f()}var o,i=Object(O["a"])(Array(9).keys());try{for(i.s();!(o=i.n()).done;){var s=o.value;e.save(),e.beginPath(),e.moveTo(0,t.canvas.height*parseFloat("0.".concat(s+1))),e.lineTo(t.canvas.width,t.canvas.height*parseFloat("0.".concat(s+1))),e.strokeStyle="rgba(245,88,88,1)",e.lineWidth=1,e.stroke(),e.closePath(),e.restore()}}catch(h){i.e(h)}finally{i.f()}}}))};Object(n["q"])((function(){s=document.getElementById("starmap"),c=[{parallax:.4,canvas:document.getElementById("background-1"),background:new rt(document.getElementById("background-1"),8),origX:0,origY:0,scale:1},{parallax:.25,canvas:document.getElementById("background-2"),background:new rt(document.getElementById("background-2"),6),origX:0,origY:0,scale:1},{parallax:.1,canvas:document.getElementById("background-3"),background:new rt(document.getElementById("background-3"),4),origX:0,origY:0,scale:1},{parallax:.05,canvas:document.getElementById("background-4"),background:new rt(document.getElementById("background-4"),2),origX:0,origY:0,scale:1}],l=new I(s,c),t=setInterval((function(){f.value=[{key:"primary",value:l.getCurrentOrigX()}].concat(Object(y["a"])(c.map((function(t){return{key:"bg1",value:t.origX}}))))}),50),a=function(t){t.preventDefault(),h.value||(l.onMouseDown(t),u.forEach((function(e){return e.onMouseDown(t)})))},s.addEventListener("mousedown",a),r=function(){l.onMouseLeave()},s.addEventListener("mouseleave",r),o=function(t){if(t.preventDefault(),!h.value){l.onMouseMove(t,!1),g.value=null,document.body.style.cursor="default";var e=et(u,(function(t){return null!=t}),(function(e){return e.onMouseMove(t)}));e&&(document.body.style.cursor="pointer",g.value=e)}},s.addEventListener("mousemove",o),i=function(t){if(t.preventDefault(),!h.value){l.onMouseUp();var e=et(u,(function(t){return null!=t}),(function(e){return e.onMouseUp(t)}));e&&(g.value=null,d.value=e,h.value=!0,document.body.style.cursor="default")}},s.addEventListener("mouseup",i),u=it.a.stars.map((function(t){return new x(s,t,l)})),l.scrollToOrig(st,ct),e=setInterval((function(){v()}),10)})),Object(n["r"])((function(){clearInterval(t),clearInterval(e),s.removeEventListener("mousedown",a),s.removeEventListener("mouseleave",r),s.removeEventListener("mousemove",o),s.removeEventListener("mouseup",i)}));var b=function(t){h.value||l.zoomAt(t,!1)},p=function(){d.value=null,h.value=!1};return{handleZoom:b,interactionLocked:h,starInfoClosed:p,selectedStar:d,hoveredStar:g,debugOrigXList:f,debug:lt}}};a("5005");ht.render=m,ht.__scopeId="data-v-60c12ba6";var dt=ht,gt=Object(n["G"])("data-v-075756e1");Object(n["v"])("data-v-075756e1");var ft=Object(n["i"])("div",{id:"systemmap-container",class:"systemmap-container"},[Object(n["i"])("canvas",{id:"systemmap",style:{"z-index":"1"},class:"systemmap"}),Object(n["i"])("canvas",{id:"background-0",style:{"z-index":"-1"},class:"background background-0"})],-1);Object(n["t"])();var vt=gt((function(t,e,a,r,o,i){var s=Object(n["z"])("PlanetQuickInfo");return Object(n["s"])(),Object(n["e"])(n["a"],null,[ft,r.hoveredPlanet?(Object(n["s"])(),Object(n["e"])(s,{key:0,class:"planet-quickinfo",style:{left:"".concat(r.hoveredPlanet.getX()+r.hoveredPlanet.getPlanet().size+10,"px"),top:"".concat(r.hoveredPlanet.getY()-r.hoveredPlanet.getPlanet().size+50,"px")},planet:r.hoveredPlanet.getPlanet()},null,8,["style","planet"])):Object(n["f"])("",!0)],64)})),bt=function(){function t(e,a){Object(j["a"])(this,t),this.canvas=e,this.planet=a}return Object(S["a"])(t,[{key:"getName",value:function(){return this.planet.officialName}},{key:"getX",value:function(){return this.x}},{key:"getY",value:function(){return this.y}},{key:"getPlanet",value:function(){return this.planet}},{key:"draw",value:function(t,e,a){var n=this.planet.distanceToStar/2*Math.min(this.canvas.width,this.canvas.height),r=this.canvas.getContext("2d");this.x=-Math.sin(t*Math.PI/180)*(a-n-a)+e,this.y=Math.cos(t*Math.PI/180)*(a-n-a)+a,r.save(),r.beginPath(),r.arc(e,a,n,0,2*Math.PI),r.strokeStyle="rgba(255, 255, 255, 0.25)",r.lineWidth=1,r.stroke(),r.closePath(),r.restore(),r.save(),r.beginPath(),r.fillStyle=this.planet.color,r.arc(this.x,this.y,this.planet.size,0,2*Math.PI),r.fill(),r.closePath(),r.restore()}},{key:"isIntersecting",value:function(t){var e=t.offsetX-this.x,a=t.offsetY-this.y;return Math.pow(e,2)+Math.pow(a,2)<Math.pow(this.planet.size,2)}}]),t}(),pt=Object(n["G"])("data-v-5c18059b");Object(n["v"])("data-v-5c18059b");var mt={class:"planet-quickinfo"};Object(n["t"])();var yt=pt((function(t,e,a,r,o,i){return Object(n["s"])(),Object(n["e"])("div",mt,[Object(n["i"])("span",null,Object(n["B"])(a.planet.name),1)])})),Ot={name:"PlanetQuickInfo",props:{planet:Object}};a("8455");Ot.render=yt,Ot.__scopeId="data-v-5c18059b";var jt=Ot,St={name:"SystemMap",props:{system:String},components:{PlanetQuickInfo:jt},setup:function(t){var e,a,r,o,i,s,c=Object(n["x"])(it.a.stars.find((function(e){return e.name===t.system}))),l=Object(n["x"])(),u={},h=[],d=function(){var t=o.clientWidth,e=o.clientHeight;i.width=t,i.height=e,s.width=t,s.height=e;var a=i.getContext("2d");a.save(),a.setTransform(1,0,0,1,0,0),a.clearRect(0,0,i.width,i.height),a.restore(),a.save(),a.beginPath();var n=4*c.value.position.size,r=t/2,l=e/2;a.arc(r,l,n,0,2*Math.PI);var d=a.createRadialGradient(r,l,n/15,r,l,n);d.addColorStop(0,"hsl(".concat(c.value.style.hue,", ").concat(c.value.style.saturation/2,"%, ").concat(Math.min(100,1.5*c.value.style.lightness),"%)")),d.addColorStop(.8,"hsl(".concat(c.value.style.hue,", ").concat(c.value.style.saturation,"%, ").concat(Math.min(100,c.value.style.lightness),"%)")),a.fillStyle=d,a.shadowBlur=75,a.shadowColor="hsl(".concat(c.value.style.hue,", ").concat(c.value.style.saturation,"%, ").concat(Math.min(100,c.value.style.lightness),"%)"),a.fill(),a.closePath(),a.restore(),h.forEach((function(t){t.draw(u[t.getName()],r,l)}))};return Object(n["q"])((function(){o=document.getElementById("systemmap-container"),i=o.querySelector("#systemmap"),s=o.querySelector("#background-0"),c.value.planets.forEach((function(t){u[t.officialName]=t.startingDeg,h.push(new bt(i,t))})),r=function(t){l.value=null,document.body.style.cursor="default";var e=h.find((function(e){return e.isIntersecting(t)}));e&&(document.body.style.cursor="pointer",l.value=e)},i.addEventListener("mousemove",r),e=setInterval((function(){d()}),10),a=setInterval((function(){l.value||h.forEach((function(t){return u[t.getName()]=u[t.getName()]+t.getPlanet().rotationSpeed}))}),50)})),Object(n["r"])((function(){clearInterval(e),clearInterval(a),i.removeEventListener("mousemove",r)})),{hoveredPlanet:l}}};a("0f31");St.render=vt,St.__scopeId="data-v-075756e1";var kt=St,wt={name:"Home",components:{Starmap:dt,SystemMap:kt},setup:function(){var t=Object(h["c"])(),e=Object(n["x"])(t.params.system);return Object(n["D"])((function(){return t.params.system}),(function(t){e.value=t})),{selectedSystem:e}}};wt.render=d;var xt=wt,Mt=Object(n["i"])("h1",null,"Universe-Maker",-1),zt=Object(n["i"])("h3",null,"WIP - Management-Tool für Sci-Fi P&P-Universen",-1);function Ct(t,e,a,r,o,i){return Object(n["s"])(),Object(n["e"])(n["a"],null,[Mt,zt],64)}var Lt={name:"Home"};Lt.render=Ct;var Pt=Lt,It=a("5f35"),Tt=[{path:"/",name:"home",component:Pt},{path:"/starmap/:system?",name:"Starmap",component:xt}],Nt=Object(h["a"])({history:Object(h["b"])(It["publicPath"]),routes:Tt}),Dt=Nt,Et=a("5502"),_t=Object(Et["a"])({state:{},mutations:{},actions:{},modules:{}});Object(n["d"])(u).use(_t).use(Dt).mount("#app")},"5c5e":function(t,e,a){"use strict";a("0f18")},"5ee2":function(t,e){t.exports={stars:[{name:"Sol",style:{hue:45,saturation:78,lightness:72},position:{x:5e3,y:5e3,size:25},planets:[{name:"Merkur",officialName:"Sol-1",startingDeg:110,distanceToStar:.175,size:6,color:"rgba(255, 255, 255, 1)",rotationSpeed:.25},{name:"Venus",officialName:"Sol-2",startingDeg:220,distanceToStar:.2,size:8,color:"rgba(255, 255, 255, 1)",rotationSpeed:.22},{name:"Erde",officialName:"Sol-3",startingDeg:90,distanceToStar:.25,size:14,color:"rgba(255, 255, 255, 1)",rotationSpeed:.18},{name:"Mars",officialName:"Sol-4",startingDeg:0,distanceToStar:.325,size:18,color:"rgba(255, 255, 255, 1)",rotationSpeed:.16},{name:"Jupiter",officialName:"Sol-5",startingDeg:190,distanceToStar:.5,size:40,color:"rgba(255, 255, 255, 1)",rotationSpeed:.1},{name:"Saturn",officialName:"Sol-6",startingDeg:0,distanceToStar:.625,size:36,color:"rgba(255, 255, 255, 1)",rotationSpeed:.066},{name:"Uranus",officialName:"Sol-7",startingDeg:120,distanceToStar:.8,size:28,color:"rgba(255, 255, 255, 1)",rotationSpeed:.02},{name:"Neptun",officialName:"Sol-8",startingDeg:280,distanceToStar:.95,size:26,color:"rgba(255, 255, 255, 1)",rotationSpeed:.01}],gates:[{name:"First Expansion",target:"Aldebaran",tier:"CAPITAL"},{name:"New Frontier",target:"Beta Caeli",tier:"MEDIUM"},{name:"Argus",target:"Nu Pegasi",tier:"SMALL"}]},{name:"Aldebaran",style:{hue:100,saturation:35,lightness:70},position:{x:4600,y:4700,size:40},planets:[{name:"Saruta",officialName:"Aldebaran-1",startingDeg:90,distanceToStar:.3,size:10,color:"rgba(255, 255, 255, 1)",rotationSpeed:.25},{name:"Yalvion",officialName:"Aldebaran-2",startingDeg:110,distanceToStar:.425,size:25,color:"rgba(255, 255, 255, 1)",rotationSpeed:.1},{name:"Xephus",officialName:"Aldebaran-3",startingDeg:220,distanceToStar:.8,size:90,color:"rgba(255, 255, 255, 1)",rotationSpeed:.01}],gates:[{name:"The Turning Point",target:"Beta Caeli",tier:"SMALL"},{name:"First Expansion",target:"Sol",tier:"LARGE"},{name:"Independence",target:"Rigel",tier:"SMALL"}]},{name:"Beta Caeli",style:{hue:69,saturation:34,lightness:65},position:{x:3500,y:5100,size:30},planets:[{name:"Ellenope",officialName:"Beta Caeli-1",startingDeg:40,distanceToStar:.225,size:8,color:"rgba(255, 255, 255, 1)",rotationSpeed:.5},{name:"Gisulia",officialName:"Beta Caeli-2",startingDeg:80,distanceToStar:.355,size:25,color:"rgba(255, 255, 255, 1)",rotationSpeed:.2},{name:"Ungora",officialName:"Beta Caeli-3",startingDeg:320,distanceToStar:.6,size:70,color:"rgba(255, 255, 255, 1)",rotationSpeed:.1},{name:"Golla F",officialName:"Beta Caeli-4",startingDeg:200,distanceToStar:.8,size:55,color:"rgba(255, 255, 255, 1)",rotationSpeed:.075}],gates:[{name:"The Turning Point",target:"Aldebaran",tier:"SMALL"}]},{name:"Nu Pegasi",style:{hue:187,saturation:50,lightness:55},position:{x:4e3,y:6e3,size:10},planets:[{name:"Pegasus",officialName:"Nu Pegasi-1",startingDeg:100,distanceToStar:.1,size:6,color:"rgba(255, 255, 255, 1)",rotationSpeed:.7},{name:"Thobanus",officialName:"Nu Pegasi-2",startingDeg:210,distanceToStar:.24,size:22,color:"rgba(255, 255, 255, 1)",rotationSpeed:.24}],gates:[{name:"Argo",target:"Sol",tier:"SMALL"}]},{name:"Rigel",style:{hue:52,saturation:60,lightness:60},position:{x:4200,y:4500,size:14},planets:[{name:"Remiuq",officialName:"Rigel-1",startingDeg:20,distanceToStar:.55,size:40,color:"rgba(255, 255, 255, 1)",rotationSpeed:.125},{name:"Veogawa",officialName:"Rigel-2",startingDeg:265,distanceToStar:.95,size:12,color:"rgba(255, 255, 255, 1)",rotationSpeed:.25}],gates:[{name:"Independence",target:"Aldebaran",tier:"SMALL"}]},{name:"New Sol",style:{hue:226,saturation:66,lightness:54},position:{x:7e3,y:5e3,size:30},planets:[{name:"HELHEIM",officialName:"New Sol-1",startingDeg:60,distanceToStar:.225,size:8,color:"rgba(255, 255, 255, 1)",rotationSpeed:.55},{name:"Terra",officialName:"New Sol-2",startingDeg:40,distanceToStar:.35,size:20,color:"rgba(255, 255, 255, 1)",rotationSpeed:.175},{name:"Valhalla",officialName:"New Sol-3",startingDeg:90,distanceToStar:.55,size:40,color:"rgba(255, 255, 255, 1)",rotationSpeed:.1},{name:"Niflheim",officialName:"New Sol-4",startingDeg:220,distanceToStar:.8,size:60,color:"rgba(255, 255, 255, 1)",rotationSpeed:.05},{name:"Gioll",officialName:"New Sol-5",startingDeg:110,distanceToStar:.975,size:6,color:"rgba(255, 255, 255, 1)",rotationSpeed:.4}],gates:[]}]}},"5f35":function(t,e,a){t.exports={publicPath:"/telescope/"}},8455:function(t,e,a){"use strict";a("b189")},"9cde":function(t,e,a){"use strict";a("3d0f")},"9fc1":function(t,e,a){},b189:function(t,e,a){}});
//# sourceMappingURL=app.a554ec7d.js.map