(function(t){function e(e){for(var n,o,i=e[0],c=e[1],l=e[2],h=0,d=[];h<i.length;h++)o=i[h],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},s=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/telescope/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0f18":function(t,e,a){},2548:function(t,e,a){},"3d0f":function(t,e,a){},"45a9":function(t,e,a){},"54c7":function(t,e,a){"use strict";a("45a9")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),r={id:"nav"},s=Object(n["h"])("Universe-Maker"),o=Object(n["h"])(" | "),i=Object(n["h"])("Starmap");function c(t,e){var a=Object(n["z"])("router-link"),c=Object(n["z"])("router-view");return Object(n["s"])(),Object(n["e"])(n["a"],null,[Object(n["i"])("div",r,[Object(n["i"])(a,{to:"/"},{default:Object(n["E"])((function(){return[s]})),_:1}),o,Object(n["i"])(a,{to:"/starmap"},{default:Object(n["E"])((function(){return[i]})),_:1})]),Object(n["i"])(c)],64)}a("9cde");const l={};l.render=c;var u=l,h=a("6c02");function d(t,e,a,r,s,o){var i=Object(n["z"])("Starmap"),c=Object(n["z"])("SystemMap");return Object(n["s"])(),Object(n["e"])(n["a"],null,[Object(n["i"])(i,{style:{display:r.selectedSystem?"none":"block"}},null,8,["style"]),r.selectedSystem?(Object(n["s"])(),Object(n["e"])(c,{key:0,system:r.selectedSystem},null,8,["system"])):Object(n["f"])("",!0)],64)}var g=Object(n["G"])("data-v-42a2b196");Object(n["v"])("data-v-42a2b196");var f={class:"starmap-container"},v={key:0,class:"starmap-blur"},b={key:0},p=Object(n["g"])('<canvas id="background-0" style="z-index:-1;" class="background background-0" height="2000" width="2000" data-v-42a2b196></canvas><canvas id="background-1" style="z-index:8;" class="background" height="7500" width="7500" data-v-42a2b196></canvas><canvas id="background-2" style="z-index:6;" class="background" height="7500" width="7500" data-v-42a2b196></canvas><canvas id="background-3" style="z-index:4;" class="background" height="7500" width="7500" data-v-42a2b196></canvas><canvas id="background-4" style="z-index:2;" class="background" height="7500" width="7500" data-v-42a2b196></canvas>',5);Object(n["t"])();var m=g((function(t,e,a,r,s,o){var i=Object(n["z"])("StarInfo"),c=Object(n["z"])("StarQuickInfo");return Object(n["s"])(),Object(n["e"])("div",f,[Object(n["i"])(n["b"],{name:"blur"},{default:g((function(){return[r.interactionLocked?(Object(n["s"])(),Object(n["e"])("div",v)):Object(n["f"])("",!0)]})),_:1}),r.debug?(Object(n["s"])(),Object(n["e"])("div",b,[(Object(n["s"])(!0),Object(n["e"])(n["a"],null,Object(n["y"])(r.debugOrigXList,(function(t){return Object(n["s"])(),Object(n["e"])("p",{key:t.key},Object(n["B"])(t.key)+" : "+Object(n["B"])(t.value),1)})),128))])):Object(n["f"])("",!0),Object(n["i"])("canvas",{id:"starmap",class:"starmap",height:1e4,width:1e4,onWheel:e[1]||(e[1]=Object(n["F"])((function(){return r.handleZoom&&r.handleZoom.apply(r,arguments)}),["prevent"]))},null,32),p,r.selectedStar?(Object(n["s"])(),Object(n["e"])(i,{key:1,class:"starinfo",style:{left:"".concat(r.selectedStar.screenPoint.x-350,"px"),top:"".concat(r.selectedStar.screenPoint.y-800,"px")},star:r.selectedStar.star,onStarInfoClosed:r.starInfoClosed},null,8,["style","star","onStarInfoClosed"])):Object(n["f"])("",!0),r.hoveredStar?(Object(n["s"])(),Object(n["e"])(c,{key:2,class:"star-quickinfo",style:{left:"".concat(r.hoveredStar.screenPoint.x+r.hoveredStar.star.position.size+10,"px"),top:"".concat(r.hoveredStar.screenPoint.y-r.hoveredStar.star.position.size-20,"px")},star:r.hoveredStar.star},null,8,["style","star"])):Object(n["f"])("",!0)])})),y=a("2909"),O=a("b85c"),j=(a("d3b7"),a("ddb0"),a("159b"),a("99af"),a("d81d"),a("d4ec")),k=a("bee2"),S=(a("cb29"),function(t,e,a,n,r,s){var o=(t.clientX-e.parentNode.getBoundingClientRect().left)*(1/s),i=(t.clientY-e.parentNode.getBoundingClientRect().top)*(1/s),c=o-(a.position.x-n),l=i-(a.position.y-r);return Math.pow(c,2)+Math.pow(l,2)<Math.pow(a.position.size,2)}),w=function(t,e,a,n){return{x:(t.position.x-e)*n,y:(t.position.y-a)*n}},x=function(){function t(e,a,n,r,s){Object(j["a"])(this,t),this.star=a,this.canDisplayInfo=!1,this.canvas=e,this.controls=n,this.canvasWidth=r,this.canvasHeight=s}return Object(k["a"])(t,[{key:"draw",value:function(){var t=this.canvas.getContext("2d");t.save(),t.beginPath(),t.arc(this.star.position.x,this.star.position.y,this.star.position.size,0,2*Math.PI);var e=t.createRadialGradient(this.star.position.x,this.star.position.y,this.star.position.size/15,this.star.position.x,this.star.position.y,this.star.position.size);e.addColorStop(0,"hsl(".concat(this.star.style.hue,", ").concat(this.star.style.saturation/2,"%, ").concat(Math.min(100,1.5*this.star.style.lightness),"%)")),e.addColorStop(.8,"hsl(".concat(this.star.style.hue,", ").concat(this.star.style.saturation,"%, ").concat(Math.min(100,this.star.style.lightness),"%)")),t.fillStyle=e,t.shadowBlur=this.star.position.size,t.shadowColor="hsl(".concat(this.star.style.hue,", ").concat(this.star.style.saturation,"%, ").concat(Math.min(100,this.star.style.lightness),"%)"),t.fill(),t.closePath(),t.restore()}},{key:"onMouseDown",value:function(t){S(t,this.canvas,this.star,this.controls.getCurrentOrigX(),this.controls.getCurrentOrigY(),this.controls.getCurrentScale())&&(this.canDisplayInfo=!0)}},{key:"onMouseMove",value:function(t){return S(t,this.canvas,this.star,this.controls.getCurrentOrigX(),this.controls.getCurrentOrigY(),this.controls.getCurrentScale())?{star:this.star,screenPoint:w(this.star,this.controls.getCurrentOrigX(),this.controls.getCurrentOrigY(),this.controls.getCurrentScale())}:null}},{key:"onMouseUp",value:function(t){return this.canDisplayInfo&&S(t,this.canvas,this.star,this.controls.getCurrentOrigX(),this.controls.getCurrentOrigY(),this.controls.getCurrentScale())?(this.canDisplayInfo=!1,this.controls.scrollToOrig(this.star.position.x-this.canvasWidth*(1/this.controls.getCurrentScale())*.5,this.star.position.y-this.canvasHeight*(1/this.controls.getCurrentScale())*.75),{star:this.star,screenPoint:w(this.star,this.controls.getCurrentOrigX(),this.controls.getCurrentOrigY(),this.controls.getCurrentScale())}):(this.canDisplayInfo=!1,null)}}]),t}(),M=(a("7db0"),a("b0c0"),function(t){switch(t){case z.SMALL:return{strokeStyle:"#7a328a",lineWidth:1,arrowLength:8,arrowSize:8};case z.MEDIUM:return{strokeStyle:"#b44bcb",lineWidth:2,arrowLength:10,arrowSize:10};default:return console.error("unknown gate tier: ".concat(t)),null}}),I=function(t,e){var a=e.find((function(e){return e.name===t}));return a||console.error("cannot find target: ".concat(t)),a},C=function(t,e,a,n,r,s,o,i){var c=r-e,l=s-a,u=Math.atan2(l,c),h=Math.sqrt(c*c+l*l),d=0+n,g=h-o;t.save(),t.translate(e,a),t.rotate(u),t.beginPath(),t.lineWidth=i.lineWidth,t.strokeStyle=i.strokeStyle,t.moveTo(d,0),t.lineTo(g,0),t.moveTo(g-i.arrowLength,-i.arrowSize),t.lineTo(g,0),t.lineTo(g-i.arrowLength,i.arrowSize),t.stroke(),t.closePath(),t.restore()},P=function t(e,a,n,r){Object(j["a"])(this,t);var s=M(a.tier);if(s){var o=I(a.target,r);if(o){var i=e.getContext("2d");C(i,n.position.x,n.position.y,n.position.size,o.position.x,o.position.y,o.position.size,s)}}},z={SMALL:"SMALL",MEDIUM:"MEDIUM"},L=function(){function t(e,a,n,r){Object(j["a"])(this,t),this.zoomIntensity=.2,this.origX=0,this.origY=0,this.primaryCanvas=e,this.primaryCtx=e.getContext("2d"),this.backgroundCanvasList=a,this.isDragging=!1,this.dragOffsetX=0,this.dragOffsetY=0,this.draggingBackLockedX=!1,this.draggingBackLockedY=!1,this.draggingForwardsLockedX=!1,this.draggingForwardsLockedY=!1,this.htmlWidth=n,this.htmlHeight=r,this.zoomLevel=0,this.scale=1}return Object(k["a"])(t,[{key:"getCurrentScale",value:function(){return this.scale}},{key:"getCurrentOrigX",value:function(){return this.origX}},{key:"getCurrentOrigY",value:function(){return this.origY}},{key:"scrollToOrig",value:function(t,e){var a=this.origX-t,n=this.origY-e;this.primaryCtx.translate(a,n),this.origX=t,this.origY=e,this.backgroundCanvasList.forEach((function(r){var s=r.canvas.getContext("2d");s.translate(a*r.parallax,n*r.parallax),r.origX=t*r.parallax,r.origY=e*r.parallax}))}},{key:"onMouseDown",value:function(t){this.isDragging=!0,this.dragOffsetX=t.offsetX,this.dragOffsetY=t.offsetY}},{key:"onMouseLeave",value:function(){this.isDragging=!1,this.dragOffsetX=0,this.dragOffsetY=0}},{key:"onMouseMove",value:function(t){this.isDragging&&(this.handleMouseMoveForDimension(t,"X"),this.handleMouseMoveForDimension(t,"Y"))}},{key:"handleMouseMoveForDimension",value:function(t,e){var a="X"===e,n=t["offset".concat(e)],r=(this["dragOffset".concat(e)]-n)*(0===this.zoomLevel?1:this.zoomLevel<0?-this.zoomLevel/2:1/this.zoomLevel*2),s=(a?this.htmlWidth:this.htmlHeight)/this.scale,o=a?this.primaryCanvas.width:this.primaryCanvas.height,i=r<0;if(!this["draggingBackLocked".concat(e)]||!this["draggingForwardsLocked".concat(e)]||this["draggingBackLocked".concat(e)]&&!i||this["draggingForwardsLocked".concat(e)]&&i){var c=this["orig".concat(e)]+r;c<0?(this["draggingBackLocked".concat(e)]=!0,r=-this["orig".concat(e)]):this["draggingBackLocked".concat(e)]=!1,c+s>o?(this["draggingForwardsLocked".concat(e)]=!0,r=o-this["orig".concat(e)]-s):this["draggingForwardsLocked".concat(e)]=!1,this.primaryCtx.translate(a?-r:0,a?0:-r),this["orig".concat(e)]+=r,this.backgroundCanvasList.forEach((function(t){var n=t.canvas.getContext("2d");t["orig".concat(e)]+r>=0&&!t["orig".concat(e)]+r+s<=o&&(n.translate(a?-r*t.parallax:0,a?0:-r*t.parallax),t["orig".concat(e)]+=r*t.parallax)})),this["dragOffset".concat(e)]=n}}},{key:"onMouseUp",value:function(){this.isDragging=!1,this.dragOffsetX=0,this.dragOffsetY=0}},{key:"zoomAt",value:function(t){var e=this,a=t.offsetX,n=t.offsetY,r=t.deltaY<0?1:-1,s=this.primaryCanvas.getContext("2d");if(this.zoomLevel+=r,this.zoomLevel<-5)this.zoomLevel+=1;else if(this.zoomLevel>5)this.zoomLevel-=1;else{s.translate(this.origX,this.origY);var o=Math.exp(r*this.zoomIntensity),i=this.scaleOrig(a,n,o,this.origX,this.origY,this.primaryCanvas,this.scale,1),c=i.newOrigX,l=i.newOrigY;this.origX=c,this.origY=l,s.scale(o,o),s.translate(-this.origX,-this.origY),this.scale*=o,this.backgroundCanvasList.forEach((function(t){var s=t.canvas.getContext("2d");s.translate(t.origX,t.origY);var i=Math.exp(r*e.zoomIntensity*t.parallax),c=e.scaleOrig(a,n,o,t.origX,t.origY,t.canvas,t.scale,t.parallax),l=c.newOrigX,u=c.newOrigY;t.origX=l,t.origY=u,s.scale(i,i),s.translate(-t.origX,-t.origY),t.scale*=i}))}}},{key:"scaleOrig",value:function(t,e,a,n,r,s,o,i){var c=n-(t/(o*a)-t/o)*i,l=r-(e/(o*a)-e/o)*i;if(c<0)c=0;else{var u=this.htmlWidth/(o*a);c+u>s.width&&(c=s.width-u)}if(l<0)l=0;else{var h=this.htmlHeight/(o*a);l+h>s.height&&(l=s.height-h)}return{newOrigX:c,newOrigY:l}}}]),t}(),_=Object(n["G"])("data-v-1fe1af85");Object(n["v"])("data-v-1fe1af85");var X={class:"star-info"},Y=Object(n["i"])("span",null,"X",-1),D={class:"star-info__content"},E={class:"star-info__text star-info__star-name"},T={key:0},B=Object(n["i"])("p",{class:"star-info__text star-info__list-label"},"Gates:",-1),N={class:"star-info__text"},A={key:1},F=Object(n["i"])("p",{class:"star-info__text star-info__list-label"},"Planets:",-1),W={class:"star-info__text"},U={class:"star-info__text"},G=Object(n["i"])("span",null,"Visit System",-1);Object(n["t"])();var q=_((function(t,e,a,r,s,o){return Object(n["s"])(),Object(n["e"])("div",X,[Object(n["i"])("div",{class:"star-info__close-button",onClick:e[1]||(e[1]=function(){return r.close&&r.close.apply(r,arguments)})},[Y]),Object(n["i"])("div",D,[Object(n["i"])("p",E,Object(n["B"])(a.star.name),1),a.star.gates.length>0?(Object(n["s"])(),Object(n["e"])("div",T,[B,(Object(n["s"])(!0),Object(n["e"])(n["a"],null,Object(n["y"])(a.star.gates,(function(t){return Object(n["s"])(),Object(n["e"])("div",{class:"star-info__list-item",key:t.name},[Object(n["i"])("p",N,Object(n["B"])(t.name)+" : "+Object(n["B"])(a.star.name)+" => "+Object(n["B"])(t.target),1)])})),128))])):Object(n["f"])("",!0),a.star.planets.length>0?(Object(n["s"])(),Object(n["e"])("div",A,[F,(Object(n["s"])(!0),Object(n["e"])(n["a"],null,Object(n["y"])(a.star.planets,(function(t){return Object(n["s"])(),Object(n["e"])("div",{class:"star-info__list-item",key:t.officialName},[Object(n["i"])("p",W,"Official name: "+Object(n["B"])(t.officialName),1),Object(n["i"])("p",U,"Name: "+Object(n["B"])(t.name),1)])})),128))])):Object(n["f"])("",!0)]),Object(n["i"])("div",{class:"star-info__visit-system-link",onClick:e[2]||(e[2]=function(){return r.visitSystem&&r.visitSystem.apply(r,arguments)})},[G])])})),H={name:"StarInfo",props:{star:Object},setup:function(t,e){var a=e.emit,n=Object(h["d"])(),r=function(){return a("starInfoClosed")},s=function(){return n.push({path:"/starmap/".concat(t.star.name)})};return{close:r,visitSystem:s}}};a("54c7");H.render=q,H.__scopeId="data-v-1fe1af85";var R=H,Q=Object(n["G"])("data-v-461a788e");Object(n["v"])("data-v-461a788e");var J={class:"star-quickinfo"};Object(n["t"])();var Z=Q((function(t,e,a,r,s,o){return Object(n["s"])(),Object(n["e"])("div",J,[Object(n["i"])("span",null,Object(n["B"])(a.star.name),1)])})),V={name:"StarQuickInfo",props:{star:Object}};a("5c5e");V.render=Z,V.__scopeId="data-v-461a788e";var K=V,$=(a("96cf"),regeneratorRuntime.mark(tt));function tt(t,e){var a,n,r;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:a=Object(O["a"])(t),s.prev=1,a.s();case 3:if((n=a.n()).done){s.next=9;break}return r=n.value,s.next=7,e(r);case 7:s.next=3;break;case 9:s.next=14;break;case 11:s.prev=11,s.t0=s["catch"](1),a.e(s.t0);case 14:return s.prev=14,a.f(),s.finish(14);case 17:case"end":return s.stop()}}),$,null,[[1,11,14,17]])}function et(t,e,a){var n,r=Object(O["a"])(tt(t,a));try{for(r.s();!(n=r.n()).done;){var s=n.value;if(e(s))return s}}catch(o){r.e(o)}finally{r.f()}}var at=function(t,e){var a=Math.max(100,255*Math.random());return{x:Math.random()*t.width,y:Math.random()*t.height,r:Math.random()*e,color:"rgba(".concat(a,", ").concat(a,", ").concat(a,", 1)"),glow:Math.random()*e*3}},nt=function(t,e,a){var n=a.x,r=a.y,s=a.r,o=a.color,i=a.glow;e.save(),e.beginPath(),e.arc(n,r,s,0,360),e.fillStyle=o,e.shadowBlur=i,e.shadowColor=o,e.fill(),e.closePath(),e.restore()},rt=function(){function t(e,a){Object(j["a"])(this,t),this.canvas=e,this.ctx=e.getContext("2d"),this.backgroundStars=Array(Math.round(1/a*1500)).fill(1).map((function(){return at(e,a)}))}return Object(k["a"])(t,[{key:"render",value:function(){var t=this;this.backgroundStars.forEach((function(e){nt(t.canvas,t.ctx,e)}))}}]),t}(),st=a("5ee2"),ot=a.n(st),it=1800,ct=1100,lt=3e3,ut=4200,ht=!1,dt=!0,gt={name:"Starmap",components:{StarInfo:R,StarQuickInfo:K},setup:function(){var t,e,a,r=[],s=Object(n["x"])(!1),o=Object(n["x"])(),i=Object(n["x"])(),c=Object(n["x"])([]),l=function(){var n=t.getContext("2d");if(n.save(),n.setTransform(1,0,0,1,0,0),n.clearRect(0,0,t.width,t.height),n.restore(),dt){var s,o=Object(O["a"])(Array(9).keys());try{for(o.s();!(s=o.n()).done;){var i=s.value;n.save(),n.beginPath(),n.moveTo(t.width*parseFloat("0.".concat(i+1)),0),n.lineTo(t.width*parseFloat("0.".concat(i+1)),t.height),n.strokeStyle="rgba(126,126,126,0.4)",n.lineWidth=1,n.stroke(),n.closePath(),n.restore()}}catch(h){o.e(h)}finally{o.f()}var c,l=Object(O["a"])(Array(9).keys());try{for(l.s();!(c=l.n()).done;){var u=c.value;n.save(),n.beginPath(),n.moveTo(0,t.height*parseFloat("0.".concat(u+1))),n.lineTo(t.width,t.height*parseFloat("0.".concat(u+1))),n.strokeStyle="rgba(126,126,126,0.4)",n.lineWidth=1,n.stroke(),n.closePath(),n.restore()}}catch(h){l.e(h)}finally{l.f()}}n.save(),n.beginPath(),n.rect(0,0,t.width,t.height),n.strokeStyle="rgba(212,29,29,1)",n.lineWidth=1/a.getCurrentScale()*20,n.stroke(),n.closePath(),n.restore(),ot.a.stars.forEach((function(e){return e.gates.forEach((function(a){return new P(t,a,e,ot.a.stars)}))})),r.forEach((function(t){return t.draw()})),e.forEach((function(t){var e=t.canvas.getContext("2d");if(e.save(),e.setTransform(1,0,0,1,0,0),e.clearRect(0,0,t.canvas.width,t.canvas.height),e.restore(),t.background.render(),ht){var a,n=Object(O["a"])(Array(9).keys());try{for(n.s();!(a=n.n()).done;){var r=a.value;e.save(),e.beginPath(),e.moveTo(t.canvas.width*parseFloat("0.".concat(r+1)),0),e.lineTo(t.canvas.width*parseFloat("0.".concat(r+1)),t.canvas.height),e.strokeStyle="rgba(245,88,88,1)",e.lineWidth=1,e.stroke(),e.closePath(),e.restore()}}catch(h){n.e(h)}finally{n.f()}var s,o=Object(O["a"])(Array(9).keys());try{for(o.s();!(s=o.n()).done;){var i=s.value;e.save(),e.beginPath(),e.moveTo(0,t.canvas.height*parseFloat("0.".concat(i+1))),e.lineTo(t.canvas.width,t.canvas.height*parseFloat("0.".concat(i+1))),e.strokeStyle="rgba(245,88,88,1)",e.lineWidth=1,e.stroke(),e.closePath(),e.restore()}}catch(h){o.e(h)}finally{o.f()}}}))};Object(n["q"])((function(){t=document.getElementById("starmap"),e=[{parallax:.4,canvas:document.getElementById("background-1"),background:new rt(document.getElementById("background-1"),8),origX:0,origY:0,scale:1},{parallax:.25,canvas:document.getElementById("background-2"),background:new rt(document.getElementById("background-2"),6),origX:0,origY:0,scale:1},{parallax:.1,canvas:document.getElementById("background-3"),background:new rt(document.getElementById("background-3"),4),origX:0,origY:0,scale:1},{parallax:.05,canvas:document.getElementById("background-4"),background:new rt(document.getElementById("background-4"),2),origX:0,origY:0,scale:1}],a=new L(t,e,it,ct),setInterval((function(){c.value=[{key:"primary",value:a.getCurrentOrigX()}].concat(Object(y["a"])(e.map((function(t){return{key:"bg1",value:t.origX}}))))}),50),t.addEventListener("mousedown",(function(t){t.preventDefault(),s.value||(a.onMouseDown(t),r.forEach((function(e){return e.onMouseDown(t)})))})),t.addEventListener("mouseleave",(function(){a.onMouseLeave()})),t.addEventListener("mousemove",(function(t){if(t.preventDefault(),!s.value){a.onMouseMove(t,!1),i.value=null,document.body.style.cursor="default";var e=et(r,(function(t){return null!=t}),(function(e){return e.onMouseMove(t)}));e&&(document.body.style.cursor="pointer",i.value=e)}})),t.addEventListener("mouseup",(function(t){if(t.preventDefault(),!s.value){a.onMouseUp();var e=et(r,(function(t){return null!=t}),(function(e){return e.onMouseUp(t)}));e&&(i.value=null,o.value=e,s.value=!0)}})),r=ot.a.stars.map((function(e){return new x(t,e,a,it,ct)})),a.scrollToOrig(lt,ut),setInterval((function(){l()}),10)}));var u=function(t){s.value||a.zoomAt(t,!1)},h=function(){o.value=null,s.value=!1};return{handleZoom:u,interactionLocked:s,starInfoClosed:h,selectedStar:o,hoveredStar:i,debugOrigXList:c,debug:ht}}};a("dfa8");gt.render=m,gt.__scopeId="data-v-42a2b196";var ft=gt,vt=Object(n["G"])("data-v-43f301e7");Object(n["v"])("data-v-43f301e7");var bt=Object(n["i"])("div",{id:"systemmap-container",class:"systemmap-container"},[Object(n["i"])("canvas",{id:"systemmap",style:{"z-index":"1"},class:"systemmap"}),Object(n["i"])("canvas",{id:"background-0",style:{"z-index":"-1"},class:"background background-0"})],-1);Object(n["t"])();var pt=vt((function(t,e,a,r,s,o){var i=Object(n["z"])("PlanetQuickInfo");return Object(n["s"])(),Object(n["e"])(n["a"],null,[bt,r.hoveredPlanet?(Object(n["s"])(),Object(n["e"])(i,{key:0,class:"planet-quickinfo",style:{left:"".concat(r.hoveredPlanet.getX()+r.hoveredPlanet.getPlanet().size+10,"px"),top:"".concat(r.hoveredPlanet.getY()-r.hoveredPlanet.getPlanet().size+50,"px")},planet:r.hoveredPlanet.getPlanet()},null,8,["style","planet"])):Object(n["f"])("",!0)],64)})),mt=function(){function t(e,a){Object(j["a"])(this,t),this.canvas=e,this.planet=a}return Object(k["a"])(t,[{key:"getName",value:function(){return this.planet.officialName}},{key:"getX",value:function(){return this.x}},{key:"getY",value:function(){return this.y}},{key:"getPlanet",value:function(){return this.planet}},{key:"draw",value:function(t,e,a){var n=this.planet.distanceToStar/2*Math.min(this.canvas.width,this.canvas.height),r=this.canvas.getContext("2d");this.x=-Math.sin(t*Math.PI/180)*(a-n-a)+e,this.y=Math.cos(t*Math.PI/180)*(a-n-a)+a,r.save(),r.beginPath(),r.arc(e,a,n,0,2*Math.PI),r.strokeStyle="rgba(255, 255, 255, 0.25)",r.lineWidth=1,r.stroke(),r.closePath(),r.restore(),r.save(),r.beginPath(),r.fillStyle=this.planet.color,r.arc(this.x,this.y,this.planet.size,0,2*Math.PI),r.fill(),r.closePath(),r.restore()}},{key:"isIntersecting",value:function(t){var e=t.offsetX-this.x,a=t.offsetY-this.y;return Math.pow(e,2)+Math.pow(a,2)<Math.pow(this.planet.size,2)}}]),t}(),yt=Object(n["G"])("data-v-5c18059b");Object(n["v"])("data-v-5c18059b");var Ot={class:"planet-quickinfo"};Object(n["t"])();var jt=yt((function(t,e,a,r,s,o){return Object(n["s"])(),Object(n["e"])("div",Ot,[Object(n["i"])("span",null,Object(n["B"])(a.planet.name),1)])})),kt={name:"PlanetQuickInfo",props:{planet:Object}};a("8455");kt.render=jt,kt.__scopeId="data-v-5c18059b";var St=kt,wt={name:"SystemMap",props:{system:String},components:{PlanetQuickInfo:St},setup:function(t){var e,a,r,s=Object(n["x"])(ot.a.stars.find((function(e){return e.name===t.system}))),o=Object(n["x"])(),i={},c=[],l=function(){var t=e.clientWidth,n=e.clientHeight;a.width=t,a.height=n,r.width=t,r.height=n;var o=a.getContext("2d");o.save(),o.setTransform(1,0,0,1,0,0),o.clearRect(0,0,a.width,a.height),o.restore(),o.save(),o.beginPath();var l=80,u=t/2,h=n/2;o.arc(u,h,l,0,2*Math.PI);var d=o.createRadialGradient(u,h,l/15,u,h,l);d.addColorStop(0,"hsl(".concat(s.value.style.hue,", ").concat(s.value.style.saturation/2,"%, ").concat(Math.min(100,1.5*s.value.style.lightness),"%)")),d.addColorStop(.8,"hsl(".concat(s.value.style.hue,", ").concat(s.value.style.saturation,"%, ").concat(Math.min(100,s.value.style.lightness),"%)")),o.fillStyle=d,o.shadowBlur=75,o.shadowColor="hsl(".concat(s.value.style.hue,", ").concat(s.value.style.saturation,"%, ").concat(Math.min(100,s.value.style.lightness),"%)"),o.fill(),o.closePath(),o.restore(),c.forEach((function(t){t.draw(i[t.getName()],u,h)}))};return Object(n["q"])((function(){e=document.getElementById("systemmap-container"),a=e.querySelector("#systemmap"),r=e.querySelector("#background-0"),s.value.planets.forEach((function(t){i[t.officialName]=t.startingDeg,c.push(new mt(a,t))})),a.addEventListener("mousemove",(function(t){o.value=null,document.body.style.cursor="default";var e=c.find((function(e){return e.isIntersecting(t)}));e&&(document.body.style.cursor="pointer",o.value=e)})),setInterval((function(){l()}),10),setInterval((function(){o.value||c.forEach((function(t){return i[t.getName()]=i[t.getName()]+t.getPlanet().rotationSpeed}))}),50)})),{hoveredPlanet:o}}};a("cc21");wt.render=pt,wt.__scopeId="data-v-43f301e7";var xt=wt,Mt={name:"Home",components:{Starmap:ft,SystemMap:xt},setup:function(){var t=Object(h["c"])(),e=Object(n["x"])(t.params.system);return Object(n["D"])((function(){return t.params.system}),(function(t){e.value=t})),{selectedSystem:e}}};Mt.render=d;var It=Mt,Ct=Object(n["i"])("h1",null,"Universe-Maker",-1),Pt=Object(n["i"])("h3",null,"WIP - Management-Tool für Sci-Fi P&P-Universen",-1);function zt(t,e,a,r,s,o){return Object(n["s"])(),Object(n["e"])(n["a"],null,[Ct,Pt],64)}var Lt={name:"Home"};Lt.render=zt;var _t=Lt,Xt=a("5f35"),Yt=[{path:"/",name:"home",component:_t},{path:"/starmap/:system?",name:"Starmap",component:It}],Dt=Object(h["a"])({history:Object(h["b"])(Xt["publicPath"]),routes:Yt}),Et=Dt,Tt=a("5502"),Bt=Object(Tt["a"])({state:{},mutations:{},actions:{},modules:{}});Object(n["d"])(u).use(Bt).use(Et).mount("#app")},"5c5e":function(t,e,a){"use strict";a("0f18")},"5ee2":function(t,e){t.exports={stars:[{name:"Sol",style:{hue:45,saturation:78,lightness:72},position:{x:5e3,y:5e3,size:20},planets:[{name:"Merkur",officialName:"Sol-1",startingDeg:110,distanceToStar:.175,size:6,color:"rgba(255, 255, 255, 1)",rotationSpeed:.25},{name:"Venus",officialName:"Sol-2",startingDeg:220,distanceToStar:.2,size:8,color:"rgba(255, 255, 255, 1)",rotationSpeed:.22},{name:"Erde",officialName:"Sol-3",startingDeg:90,distanceToStar:.25,size:14,color:"rgba(255, 255, 255, 1)",rotationSpeed:.18},{name:"Mars",officialName:"Sol-4",startingDeg:0,distanceToStar:.325,size:18,color:"rgba(255, 255, 255, 1)",rotationSpeed:.16},{name:"Jupiter",officialName:"Sol-5",startingDeg:190,distanceToStar:.5,size:40,color:"rgba(255, 255, 255, 1)",rotationSpeed:.1},{name:"Saturn",officialName:"Sol-6",startingDeg:0,distanceToStar:.625,size:36,color:"rgba(255, 255, 255, 1)",rotationSpeed:.066},{name:"Uranus",officialName:"Sol-7",startingDeg:120,distanceToStar:.8,size:28,color:"rgba(255, 255, 255, 1)",rotationSpeed:.02},{name:"Neptun",officialName:"Sol-8",startingDeg:280,distanceToStar:.95,size:26,color:"rgba(255, 255, 255, 1)",rotationSpeed:.01}],gates:[{name:"First Contact",target:"Alpha I",tier:"SMALL"},{name:"New Horizon",target:"Alpha II",tier:"MEDIUM"}]},{name:"Alpha I",style:{hue:28,saturation:58,lightness:60},position:{x:4300,y:4500,size:40},planets:[{name:"unknown",officialName:"Alpha I-1",startingDeg:90,distanceToStar:.5,size:15,color:"rgba(255, 255, 255, 1)",rotationSpeed:.075}],gates:[{name:"Gate I",target:"Alpha II",tier:"SMALL"}]},{name:"Alpha II",style:{hue:227,saturation:37,lightness:80},position:{x:3300,y:5200,size:36},planets:[{name:"unknown",officialName:"Alpha II-1",startingDeg:40,distanceToStar:.37,size:12,color:"rgba(255, 255, 255, 1)",rotationSpeed:.1},{name:"unknown",officialName:"Alpha II-2",startingDeg:60,distanceToStar:.52,size:18,color:"rgba(255, 255, 255, 1)",rotationSpeed:.05}],gates:[{name:"Gate I",target:"Alpha I",tier:"SMALL"},{name:"Gate II",target:"Sol",tier:"MEDIUM"}]}]}},"5f35":function(t,e,a){t.exports={publicPath:"/telescope/"}},6405:function(t,e,a){},8455:function(t,e,a){"use strict";a("b189")},"9cde":function(t,e,a){"use strict";a("3d0f")},b189:function(t,e,a){},cc21:function(t,e,a){"use strict";a("6405")},dfa8:function(t,e,a){"use strict";a("2548")}});
//# sourceMappingURL=app.8c305fc1.js.map