(function(e){function t(t){for(var n,o,s=t[0],c=t[1],l=t[2],d=0,g=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&g.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(g.length)g.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},i=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/telescope/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0f18":function(e,t,a){},"3d0f":function(e,t,a){},"45a9":function(e,t,a){},"4b40":function(e,t,a){},"54c7":function(e,t,a){"use strict";a("45a9")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),r={id:"nav"},i=Object(n["h"])("Universe-Maker"),o=Object(n["h"])(" | "),s=Object(n["h"])("Starmap");function c(e,t){var a=Object(n["z"])("router-link"),c=Object(n["z"])("router-view");return Object(n["s"])(),Object(n["e"])(n["a"],null,[Object(n["i"])("div",r,[Object(n["i"])(a,{to:"/"},{default:Object(n["E"])((function(){return[i]})),_:1}),o,Object(n["i"])(a,{to:"/starmap"},{default:Object(n["E"])((function(){return[s]})),_:1})]),Object(n["i"])(c)],64)}a("9cde");const l={};l.render=c;var u=l,d=a("6c02");function g(e,t,a,r,i,o){var s=Object(n["z"])("Starmap"),c=Object(n["z"])("SystemMap");return Object(n["s"])(),Object(n["e"])(n["a"],null,[Object(n["i"])(s,{style:{display:r.selectedSystem?"none":"block"}},null,8,["style"]),r.selectedSystem?(Object(n["s"])(),Object(n["e"])(c,{key:0,system:r.selectedSystem},null,8,["system"])):Object(n["f"])("",!0)],64)}var h=Object(n["G"])("data-v-ce851f9e");Object(n["v"])("data-v-ce851f9e");var f={class:"starmap-container"},v={key:0,class:"starmap-blur"},b={key:0},p=Object(n["g"])('<canvas id="background-0" style="z-index:-1;" class="background background-0" height="7500" width="7500" data-v-ce851f9e></canvas><canvas id="background-1" style="z-index:8;" class="background" height="7500" width="7500" data-v-ce851f9e></canvas><canvas id="background-2" style="z-index:6;" class="background" height="7500" width="7500" data-v-ce851f9e></canvas><canvas id="background-3" style="z-index:4;" class="background" height="7500" width="7500" data-v-ce851f9e></canvas><canvas id="background-4" style="z-index:2;" class="background" height="7500" width="7500" data-v-ce851f9e></canvas>',5);Object(n["t"])();var m=h((function(e,t,a,r,i,o){var s=Object(n["z"])("StarInfo"),c=Object(n["z"])("StarQuickInfo");return Object(n["s"])(),Object(n["e"])("div",f,[Object(n["i"])(n["b"],{name:"blur"},{default:h((function(){return[r.interactionLocked?(Object(n["s"])(),Object(n["e"])("div",v)):Object(n["f"])("",!0)]})),_:1}),r.debug?(Object(n["s"])(),Object(n["e"])("div",b,[(Object(n["s"])(!0),Object(n["e"])(n["a"],null,Object(n["y"])(r.debugOrigXList,(function(e){return Object(n["s"])(),Object(n["e"])("p",{key:e.key},Object(n["B"])(e.key)+" : "+Object(n["B"])(e.value),1)})),128))])):Object(n["f"])("",!0),Object(n["i"])("canvas",{id:"starmap",class:"starmap",height:1e4,width:1e4,onWheel:t[1]||(t[1]=Object(n["F"])((function(){return r.handleZoom&&r.handleZoom.apply(r,arguments)}),["prevent"]))},null,32),p,r.selectedStar?(Object(n["s"])(),Object(n["e"])(s,{key:1,class:"starinfo",style:{left:"".concat(r.selectedStar.screenPoint.x-350,"px"),top:"".concat(r.selectedStar.screenPoint.y-800,"px")},star:r.selectedStar.star,onStarInfoClosed:r.starInfoClosed},null,8,["style","star","onStarInfoClosed"])):Object(n["f"])("",!0),r.hoveredStar?(Object(n["s"])(),Object(n["e"])(c,{key:2,class:"star-quickinfo",style:{left:"".concat(r.hoveredStar.screenPoint.x+r.hoveredStar.star.position.size+10,"px"),top:"".concat(r.hoveredStar.screenPoint.y-r.hoveredStar.star.position.size-20,"px")},star:r.hoveredStar.star},null,8,["style","star"])):Object(n["f"])("",!0)])})),y=a("2909"),O=a("b85c"),S=(a("d3b7"),a("ddb0"),a("159b"),a("99af"),a("d81d"),a("d4ec")),j=a("bee2"),k=(a("cb29"),function(e,t,a,n,r,i){var o=(e.clientX-t.parentNode.getBoundingClientRect().left)*(1/i),s=(e.clientY-t.parentNode.getBoundingClientRect().top)*(1/i),c=o-(a.position.x-n),l=s-(a.position.y-r);return Math.pow(c,2)+Math.pow(l,2)<Math.pow(a.position.size,2)}),w=function(e,t,a,n){return{x:(e.position.x-t)*n,y:(e.position.y-a)*n}},x=function(){function e(t,a,n){Object(S["a"])(this,e),this.star=a,this.canDisplayInfo=!1,this.canvas=t,this.controls=n}return Object(j["a"])(e,[{key:"draw",value:function(){var e=this.canvas.getContext("2d");e.save(),e.beginPath(),e.arc(this.star.position.x,this.star.position.y,this.star.position.size,0,2*Math.PI);var t=e.createRadialGradient(this.star.position.x,this.star.position.y,this.star.position.size/15,this.star.position.x,this.star.position.y,this.star.position.size);t.addColorStop(0,"hsl(".concat(this.star.style.hue,", ").concat(this.star.style.saturation/2,"%, ").concat(Math.min(100,1.5*this.star.style.lightness),"%)")),t.addColorStop(.8,"hsl(".concat(this.star.style.hue,", ").concat(this.star.style.saturation,"%, ").concat(Math.min(100,this.star.style.lightness),"%)")),e.fillStyle=t,e.shadowBlur=this.star.position.size,e.shadowColor="hsl(".concat(this.star.style.hue,", ").concat(this.star.style.saturation,"%, ").concat(Math.min(100,this.star.style.lightness),"%)"),e.fill(),e.closePath(),e.restore()}},{key:"onMouseDown",value:function(e){k(e,this.canvas,this.star,this.controls.getCurrentOrigX(),this.controls.getCurrentOrigY(),this.controls.getCurrentScale())&&(this.canDisplayInfo=!0)}},{key:"onMouseMove",value:function(e){return k(e,this.canvas,this.star,this.controls.getCurrentOrigX(),this.controls.getCurrentOrigY(),this.controls.getCurrentScale())?{star:this.star,screenPoint:w(this.star,this.controls.getCurrentOrigX(),this.controls.getCurrentOrigY(),this.controls.getCurrentScale())}:null}},{key:"onMouseUp",value:function(e){return this.canDisplayInfo&&k(e,this.canvas,this.star,this.controls.getCurrentOrigX(),this.controls.getCurrentOrigY(),this.controls.getCurrentScale())?(this.canDisplayInfo=!1,this.controls.scrollToOrig(this.star.position.x-this.canvas.parentNode.clientWidth*(1/this.controls.getCurrentScale())*.5,this.star.position.y-this.canvas.parentNode.clientHeight*(1/this.controls.getCurrentScale())*.75),{star:this.star,screenPoint:w(this.star,this.controls.getCurrentOrigX(),this.controls.getCurrentOrigY(),this.controls.getCurrentScale())}):(this.canDisplayInfo=!1,null)}}]),e}(),z=(a("7db0"),a("b0c0"),function(e){switch(e){case P.SMALL:return{strokeStyle:"#7a328a",lineWidth:1,arrowLength:8,arrowSize:8};case P.MEDIUM:return{strokeStyle:"#b44bcb",lineWidth:2,arrowLength:10,arrowSize:10};case P.LARGE:return{strokeStyle:"#c640e3",lineWidth:3,arrowLength:14,arrowSize:14};case P.CAPITAL:return{strokeStyle:"#c410e7",lineWidth:4,arrowLength:20,arrowSize:20};default:return console.error("unknown gate tier: ".concat(e)),null}}),M=function(e,t){var a=t.find((function(t){return t.name===e}));return a||console.error("cannot find target: ".concat(e)),a},C=function(e,t,a,n,r,i,o,s){var c=r-t,l=i-a,u=Math.atan2(l,c),d=Math.sqrt(c*c+l*l),g=0+n,h=d-o;e.save(),e.translate(t,a),e.rotate(u),e.beginPath(),e.lineWidth=s.lineWidth,e.strokeStyle=s.strokeStyle,e.moveTo(g,0),e.lineTo(h,0),e.moveTo(h-s.arrowLength,-s.arrowSize),e.lineTo(h,0),e.lineTo(h-s.arrowLength,s.arrowSize),e.stroke(),e.closePath(),e.restore()},L=function e(t,a,n,r){Object(S["a"])(this,e);var i=z(a.tier);if(i){var o=M(a.target,r);if(o){var s=t.getContext("2d");C(s,n.position.x,n.position.y,n.position.size,o.position.x,o.position.y,o.position.size,i)}}},P={SMALL:"SMALL",MEDIUM:"MEDIUM",LARGE:"LARGE",CAPITAL:"CAPITAL"},I=function(){function e(t,a){Object(S["a"])(this,e),this.zoomIntensity=.2,this.origX=0,this.origY=0,this.primaryCanvas=t,this.primaryCtx=t.getContext("2d"),this.backgroundCanvasList=a,this.isDragging=!1,this.dragOffsetX=0,this.dragOffsetY=0,this.draggingBackLockedX=!1,this.draggingBackLockedY=!1,this.draggingForwardsLockedX=!1,this.draggingForwardsLockedY=!1,this.zoomLevel=0,this.scale=1}return Object(j["a"])(e,[{key:"getCurrentScale",value:function(){return this.scale}},{key:"getCurrentOrigX",value:function(){return this.origX}},{key:"getCurrentOrigY",value:function(){return this.origY}},{key:"scrollToOrig",value:function(e,t){var a=this.origX-e,n=this.origY-t;this.primaryCtx.translate(a,n),this.origX=e,this.origY=t,this.backgroundCanvasList.forEach((function(r){var i=r.canvas.getContext("2d");i.translate(a*r.parallax,n*r.parallax),r.origX=e*r.parallax,r.origY=t*r.parallax}))}},{key:"onMouseDown",value:function(e){this.isDragging=!0,this.dragOffsetX=e.offsetX,this.dragOffsetY=e.offsetY}},{key:"onMouseLeave",value:function(){this.isDragging=!1,this.dragOffsetX=0,this.dragOffsetY=0}},{key:"onMouseMove",value:function(e){this.isDragging&&(this.handleMouseMoveForDimension(e,"X"),this.handleMouseMoveForDimension(e,"Y"))}},{key:"handleMouseMoveForDimension",value:function(e,t){var a="X"===t,n=e["offset".concat(t)],r=(this["dragOffset".concat(t)]-n)*(0===this.zoomLevel?1:this.zoomLevel<0?-this.zoomLevel/2:1/this.zoomLevel*2),i=(a?this.primaryCanvas.parentNode.clientWidth:this.primaryCanvas.parentNode.clientHeight)/this.scale,o=a?this.primaryCanvas.width:this.primaryCanvas.height,s=r<0;if(!this["draggingBackLocked".concat(t)]||!this["draggingForwardsLocked".concat(t)]||this["draggingBackLocked".concat(t)]&&!s||this["draggingForwardsLocked".concat(t)]&&s){var c=this["orig".concat(t)]+r;c<0?(this["draggingBackLocked".concat(t)]=!0,r=-this["orig".concat(t)]):this["draggingBackLocked".concat(t)]=!1,c+i>o?(this["draggingForwardsLocked".concat(t)]=!0,r=o-this["orig".concat(t)]-i):this["draggingForwardsLocked".concat(t)]=!1,this.primaryCtx.translate(a?-r:0,a?0:-r),this["orig".concat(t)]+=r,this.backgroundCanvasList.forEach((function(e){var n=e.canvas.getContext("2d");e["orig".concat(t)]+r>=0&&!e["orig".concat(t)]+r+i<=o&&(n.translate(a?-r*e.parallax:0,a?0:-r*e.parallax),e["orig".concat(t)]+=r*e.parallax)})),this["dragOffset".concat(t)]=n}}},{key:"onMouseUp",value:function(){this.isDragging=!1,this.dragOffsetX=0,this.dragOffsetY=0}},{key:"zoomAt",value:function(e){var t=this,a=e.offsetX,n=e.offsetY,r=e.deltaY<0?1:-1,i=this.primaryCanvas.getContext("2d");if(this.zoomLevel+=r,this.zoomLevel<-5)this.zoomLevel+=1;else if(this.zoomLevel>5)this.zoomLevel-=1;else{i.translate(this.origX,this.origY);var o=Math.exp(r*this.zoomIntensity),s=this.scaleOrig(a,n,o,this.origX,this.origY,this.primaryCanvas,this.scale,1,this.primaryCanvas.parentNode.clientWidth,this.primaryCanvas.parentNode.clientHeight),c=s.newOrigX,l=s.newOrigY;this.origX=c,this.origY=l,i.scale(o,o),i.translate(-this.origX,-this.origY),this.scale*=o,this.backgroundCanvasList.forEach((function(e){var i=e.canvas.getContext("2d");i.translate(e.origX,e.origY);var s=Math.exp(r*t.zoomIntensity*e.parallax),c=t.scaleOrig(a,n,o,e.origX,e.origY,e.canvas,e.scale,e.parallax),l=c.newOrigX,u=c.newOrigY;e.origX=l,e.origY=u,i.scale(s,s),i.translate(-e.origX,-e.origY),e.scale*=s}))}}},{key:"scaleOrig",value:function(e,t,a,n,r,i,o,s,c,l){var u=n-(e/(o*a)-e/o)*s,d=r-(t/(o*a)-t/o)*s;if(u<0)u=0;else{var g=c/(o*a);u+g>i.width&&(u=i.width-g)}if(d<0)d=0;else{var h=l/(o*a);d+h>i.height&&(d=i.height-h)}return{newOrigX:u,newOrigY:d}}}]),e}(),T=Object(n["G"])("data-v-1fe1af85");Object(n["v"])("data-v-1fe1af85");var N={class:"star-info"},D=Object(n["i"])("span",null,"X",-1),E={class:"star-info__content"},X={class:"star-info__text star-info__star-name"},_={key:0},A=Object(n["i"])("p",{class:"star-info__text star-info__list-label"},"Gates:",-1),Y={class:"star-info__text"},B={key:1},F=Object(n["i"])("p",{class:"star-info__text star-info__list-label"},"Planets:",-1),R={class:"star-info__text"},G={class:"star-info__text"},W=Object(n["i"])("span",null,"Visit System",-1);Object(n["t"])();var U=T((function(e,t,a,r,i,o){return Object(n["s"])(),Object(n["e"])("div",N,[Object(n["i"])("div",{class:"star-info__close-button",onClick:t[1]||(t[1]=function(){return r.close&&r.close.apply(r,arguments)})},[D]),Object(n["i"])("div",E,[Object(n["i"])("p",X,Object(n["B"])(a.star.name),1),a.star.gates.length>0?(Object(n["s"])(),Object(n["e"])("div",_,[A,(Object(n["s"])(!0),Object(n["e"])(n["a"],null,Object(n["y"])(a.star.gates,(function(e){return Object(n["s"])(),Object(n["e"])("div",{class:"star-info__list-item",key:e.name},[Object(n["i"])("p",Y,Object(n["B"])(e.name)+" : "+Object(n["B"])(a.star.name)+" => "+Object(n["B"])(e.target),1)])})),128))])):Object(n["f"])("",!0),a.star.planets.length>0?(Object(n["s"])(),Object(n["e"])("div",B,[F,(Object(n["s"])(!0),Object(n["e"])(n["a"],null,Object(n["y"])(a.star.planets,(function(e){return Object(n["s"])(),Object(n["e"])("div",{class:"star-info__list-item",key:e.officialName},[Object(n["i"])("p",R,"Official name: "+Object(n["B"])(e.officialName),1),Object(n["i"])("p",G,"Name: "+Object(n["B"])(e.name),1)])})),128))])):Object(n["f"])("",!0)]),Object(n["i"])("div",{class:"star-info__visit-system-link",onClick:t[2]||(t[2]=function(){return r.visitSystem&&r.visitSystem.apply(r,arguments)})},[W])])})),q={name:"StarInfo",props:{star:Object},setup:function(e,t){var a=t.emit,n=Object(d["d"])(),r=function(){return a("starInfoClosed")},i=function(){return n.push({path:"/starmap/".concat(e.star.name)})};return{close:r,visitSystem:i}}};a("54c7");q.render=U,q.__scopeId="data-v-1fe1af85";var H=q,Q=Object(n["G"])("data-v-461a788e");Object(n["v"])("data-v-461a788e");var V={class:"star-quickinfo"};Object(n["t"])();var J=Q((function(e,t,a,r,i,o){return Object(n["s"])(),Object(n["e"])("div",V,[Object(n["i"])("span",null,Object(n["B"])(a.star.name),1)])})),Z={name:"StarQuickInfo",props:{star:Object}};a("5c5e");Z.render=J,Z.__scopeId="data-v-461a788e";var K=Z,$=(a("96cf"),regeneratorRuntime.mark(ee));function ee(e,t){var a,n,r;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:a=Object(O["a"])(e),i.prev=1,a.s();case 3:if((n=a.n()).done){i.next=9;break}return r=n.value,i.next=7,t(r);case 7:i.next=3;break;case 9:i.next=14;break;case 11:i.prev=11,i.t0=i["catch"](1),a.e(i.t0);case 14:return i.prev=14,a.f(),i.finish(14);case 17:case"end":return i.stop()}}),$,null,[[1,11,14,17]])}function te(e,t,a){var n,r=Object(O["a"])(ee(e,a));try{for(r.s();!(n=r.n()).done;){var i=n.value;if(t(i))return i}}catch(o){r.e(o)}finally{r.f()}}var ae=function(e,t){var a=Math.max(100,255*Math.random());return{x:Math.random()*e.width,y:Math.random()*e.height,r:Math.random()*t,color:"rgba(".concat(a,", ").concat(a,", ").concat(a,", 1)"),glow:Math.random()*t*3}},ne=function(e,t,a){var n=a.x,r=a.y,i=a.r,o=a.color,s=a.glow;t.save(),t.beginPath(),t.arc(n,r,i,0,360),t.fillStyle=o,t.shadowBlur=s,t.shadowColor=o,t.fill(),t.closePath(),t.restore()},re=function(){function e(t,a){Object(S["a"])(this,e),this.canvas=t,this.ctx=t.getContext("2d"),this.backgroundStars=Array(Math.round(1/a*1500)).fill(1).map((function(){return ae(t,a)}))}return Object(j["a"])(e,[{key:"render",value:function(){var e=this;this.backgroundStars.forEach((function(t){ne(e.canvas,e.ctx,t)}))}}]),e}(),ie=a("5ee2"),oe=a.n(ie),se=3e3,ce=4200,le=!1,ue=!0,de={name:"Starmap",components:{StarInfo:H,StarQuickInfo:K},setup:function(){var e,t,a,r,i,o,s,c,l,u=[],d=Object(n["x"])(!1),g=Object(n["x"])(),h=Object(n["x"])(),f=Object(n["x"])([]),v=function(){var e=s.getContext("2d");if(e.save(),e.setTransform(1,0,0,1,0,0),e.clearRect(0,0,s.width,s.height),e.restore(),ue){var t,a=Object(O["a"])(Array(9).keys());try{for(a.s();!(t=a.n()).done;){var n=t.value;e.save(),e.beginPath(),e.moveTo(s.width*parseFloat("0.".concat(n+1)),0),e.lineTo(s.width*parseFloat("0.".concat(n+1)),s.height),e.strokeStyle="rgba(126,126,126,0.4)",e.lineWidth=1,e.stroke(),e.closePath(),e.restore()}}catch(d){a.e(d)}finally{a.f()}var r,i=Object(O["a"])(Array(9).keys());try{for(i.s();!(r=i.n()).done;){var o=r.value;e.save(),e.beginPath(),e.moveTo(0,s.height*parseFloat("0.".concat(o+1))),e.lineTo(s.width,s.height*parseFloat("0.".concat(o+1))),e.strokeStyle="rgba(126,126,126,0.4)",e.lineWidth=1,e.stroke(),e.closePath(),e.restore()}}catch(d){i.e(d)}finally{i.f()}}e.save(),e.beginPath(),e.rect(0,0,s.width,s.height),e.strokeStyle="rgba(212,29,29,1)",e.lineWidth=1/l.getCurrentScale()*20,e.stroke(),e.closePath(),e.restore(),oe.a.stars.forEach((function(e){return e.gates.forEach((function(t){return new L(s,t,e,oe.a.stars)}))})),u.forEach((function(e){return e.draw()})),c.forEach((function(e){var t=e.canvas.getContext("2d");if(t.save(),t.setTransform(1,0,0,1,0,0),t.clearRect(0,0,e.canvas.width,e.canvas.height),t.restore(),e.background.render(),le){var a,n=Object(O["a"])(Array(9).keys());try{for(n.s();!(a=n.n()).done;){var r=a.value;t.save(),t.beginPath(),t.moveTo(e.canvas.width*parseFloat("0.".concat(r+1)),0),t.lineTo(e.canvas.width*parseFloat("0.".concat(r+1)),e.canvas.height),t.strokeStyle="rgba(245,88,88,1)",t.lineWidth=1,t.stroke(),t.closePath(),t.restore()}}catch(d){n.e(d)}finally{n.f()}var i,o=Object(O["a"])(Array(9).keys());try{for(o.s();!(i=o.n()).done;){var s=i.value;t.save(),t.beginPath(),t.moveTo(0,e.canvas.height*parseFloat("0.".concat(s+1))),t.lineTo(e.canvas.width,e.canvas.height*parseFloat("0.".concat(s+1))),t.strokeStyle="rgba(245,88,88,1)",t.lineWidth=1,t.stroke(),t.closePath(),t.restore()}}catch(d){o.e(d)}finally{o.f()}}}))};Object(n["q"])((function(){s=document.getElementById("starmap"),c=[{parallax:.4,canvas:document.getElementById("background-1"),background:new re(document.getElementById("background-1"),8),origX:0,origY:0,scale:1},{parallax:.25,canvas:document.getElementById("background-2"),background:new re(document.getElementById("background-2"),6),origX:0,origY:0,scale:1},{parallax:.1,canvas:document.getElementById("background-3"),background:new re(document.getElementById("background-3"),4),origX:0,origY:0,scale:1},{parallax:.05,canvas:document.getElementById("background-4"),background:new re(document.getElementById("background-4"),2),origX:0,origY:0,scale:1}],l=new I(s,c),e=setInterval((function(){f.value=[{key:"primary",value:l.getCurrentOrigX()}].concat(Object(y["a"])(c.map((function(e){return{key:"bg1",value:e.origX}}))))}),100),a=function(e){e.preventDefault(),d.value||(l.onMouseDown(e),u.forEach((function(t){return t.onMouseDown(e)})))},s.addEventListener("mousedown",a),r=function(){l.onMouseLeave()},s.addEventListener("mouseleave",r),i=function(e){if(e.preventDefault(),!d.value){l.onMouseMove(e,!1),h.value=null,document.body.style.cursor="default";var t=te(u,(function(e){return null!=e}),(function(t){return t.onMouseMove(e)}));t&&(document.body.style.cursor="pointer",h.value=t)}},s.addEventListener("mousemove",i),o=function(e){if(e.preventDefault(),!d.value){l.onMouseUp();var t=te(u,(function(e){return null!=e}),(function(t){return t.onMouseUp(e)}));t&&(h.value=null,g.value=t,d.value=!0,document.body.style.cursor="default")}},s.addEventListener("mouseup",o),u=oe.a.stars.map((function(e){return new x(s,e,l)})),l.scrollToOrig(se,ce),t=setInterval((function(){v()}),50)})),Object(n["r"])((function(){clearInterval(e),clearInterval(t),s.removeEventListener("mousedown",a),s.removeEventListener("mouseleave",r),s.removeEventListener("mousemove",i),s.removeEventListener("mouseup",o)}));var b=function(e){d.value||l.zoomAt(e,!1)},p=function(){g.value=null,d.value=!1};return{handleZoom:b,interactionLocked:d,starInfoClosed:p,selectedStar:g,hoveredStar:h,debugOrigXList:f,debug:le}}};a("6e1c");de.render=m,de.__scopeId="data-v-ce851f9e";var ge=de,he=Object(n["G"])("data-v-1474015d");Object(n["v"])("data-v-1474015d");var fe=Object(n["i"])("div",{id:"systemmap-container",class:"systemmap-container"},[Object(n["i"])("canvas",{id:"systemmap",style:{"z-index":"1"},class:"systemmap"}),Object(n["i"])("canvas",{id:"background-0",style:{"z-index":"-1"},class:"background background-0"})],-1);Object(n["t"])();var ve=he((function(e,t,a,r,i,o){var s=Object(n["z"])("PlanetQuickInfo");return Object(n["s"])(),Object(n["e"])(n["a"],null,[fe,r.hoveredPlanet?(Object(n["s"])(),Object(n["e"])(s,{key:0,class:"planet-quickinfo",style:{left:"".concat(r.hoveredPlanet.getX()+r.hoveredPlanet.getPlanet().size+10,"px"),top:"".concat(r.hoveredPlanet.getY()-r.hoveredPlanet.getPlanet().size+50,"px")},planet:r.hoveredPlanet.getPlanet()},null,8,["style","planet"])):Object(n["f"])("",!0)],64)})),be=function(){function e(t,a){Object(S["a"])(this,e),this.canvas=t,this.planet=a}return Object(j["a"])(e,[{key:"getName",value:function(){return this.planet.officialName}},{key:"getX",value:function(){return this.x}},{key:"getY",value:function(){return this.y}},{key:"getPlanet",value:function(){return this.planet}},{key:"draw",value:function(e,t,a){var n=this.planet.distanceToStar/2*Math.min(this.canvas.width,this.canvas.height),r=this.canvas.getContext("2d");this.x=-Math.sin(e*Math.PI/180)*(a-n-a)+t,this.y=Math.cos(e*Math.PI/180)*(a-n-a)+a,r.save(),r.beginPath(),r.arc(t,a,n,0,2*Math.PI),r.strokeStyle="rgba(255, 255, 255, 0.25)",r.lineWidth=1,r.stroke(),r.closePath(),r.restore(),r.save(),r.beginPath(),r.fillStyle=this.planet.color,r.arc(this.x,this.y,this.planet.size,0,2*Math.PI),r.fill(),r.closePath(),r.restore()}},{key:"isIntersecting",value:function(e){var t=e.offsetX-this.x,a=e.offsetY-this.y;return Math.pow(t,2)+Math.pow(a,2)<Math.pow(this.planet.size,2)}}]),e}(),pe=Object(n["G"])("data-v-5c18059b");Object(n["v"])("data-v-5c18059b");var me={class:"planet-quickinfo"};Object(n["t"])();var ye=pe((function(e,t,a,r,i,o){return Object(n["s"])(),Object(n["e"])("div",me,[Object(n["i"])("span",null,Object(n["B"])(a.planet.name),1)])})),Oe={name:"PlanetQuickInfo",props:{planet:Object}};a("8455");Oe.render=ye,Oe.__scopeId="data-v-5c18059b";var Se=Oe,je={name:"SystemMap",props:{system:String},components:{PlanetQuickInfo:Se},setup:function(e){var t,a,r,i,o,s,c=Object(n["x"])(oe.a.stars.find((function(t){return t.name===e.system}))),l=Object(n["x"])(),u={},d=[],g=function(){var e=i.clientWidth,t=i.clientHeight;o.width=e,o.height=t,s.width=e,s.height=t;var a=o.getContext("2d");a.save(),a.setTransform(1,0,0,1,0,0),a.clearRect(0,0,o.width,o.height),a.restore(),a.save(),a.beginPath();var n=4*c.value.position.size,r=e/2,l=t/2;a.arc(r,l,n,0,2*Math.PI);var g=a.createRadialGradient(r,l,n/15,r,l,n);g.addColorStop(0,"hsl(".concat(c.value.style.hue,", ").concat(c.value.style.saturation/2,"%, ").concat(Math.min(100,1.5*c.value.style.lightness),"%)")),g.addColorStop(.8,"hsl(".concat(c.value.style.hue,", ").concat(c.value.style.saturation,"%, ").concat(Math.min(100,c.value.style.lightness),"%)")),a.fillStyle=g,a.shadowBlur=75,a.shadowColor="hsl(".concat(c.value.style.hue,", ").concat(c.value.style.saturation,"%, ").concat(Math.min(100,c.value.style.lightness),"%)"),a.fill(),a.closePath(),a.restore(),d.forEach((function(e){e.draw(u[e.getName()],r,l)}))};return Object(n["q"])((function(){i=document.getElementById("systemmap-container"),o=i.querySelector("#systemmap"),s=i.querySelector("#background-0"),c.value.planets.forEach((function(e){u[e.officialName]=e.startingDeg,d.push(new be(o,e))})),r=function(e){l.value=null,document.body.style.cursor="default";var t=d.find((function(t){return t.isIntersecting(e)}));t&&(document.body.style.cursor="pointer",l.value=t)},o.addEventListener("mousemove",r),t=setInterval((function(){g()}),50),a=setInterval((function(){l.value||d.forEach((function(e){return u[e.getName()]=u[e.getName()]+e.getPlanet().rotationSpeed}))}),50)})),Object(n["r"])((function(){clearInterval(t),clearInterval(a),o.removeEventListener("mousemove",r)})),{hoveredPlanet:l}}};a("e6de");je.render=ve,je.__scopeId="data-v-1474015d";var ke=je,we={name:"Home",components:{Starmap:ge,SystemMap:ke},setup:function(){var e=Object(d["c"])(),t=Object(n["x"])(e.params.system);return Object(n["D"])((function(){return e.params.system}),(function(e){t.value=e})),{selectedSystem:t}}};we.render=g;var xe=we,ze=Object(n["i"])("h1",null,"Universe-Maker",-1),Me=Object(n["i"])("h3",null,"WIP - Management-Tool für Sci-Fi P&P-Universen",-1);function Ce(e,t,a,r,i,o){return Object(n["s"])(),Object(n["e"])(n["a"],null,[ze,Me],64)}var Le={name:"Home"};Le.render=Ce;var Pe=Le,Ie=a("5f35"),Te=[{path:"/",name:"home",component:Pe},{path:"/starmap/:system?",name:"Starmap",component:xe}],Ne=Object(d["a"])({history:Object(d["b"])(Ie["publicPath"]),routes:Te}),De=Ne,Ee=a("5502"),Xe=Object(Ee["a"])({state:{},mutations:{},actions:{},modules:{}});Object(n["d"])(u).use(Xe).use(De).mount("#app")},"5c5e":function(e,t,a){"use strict";a("0f18")},"5ee2":function(e,t){e.exports={stars:[{name:"Sol",style:{hue:45,saturation:78,lightness:72},position:{x:5e3,y:5e3,size:25},planets:[{name:"Merkur",officialName:"Sol-1",startingDeg:110,distanceToStar:.175,size:6,color:"rgba(255, 255, 255, 1)",rotationSpeed:.25},{name:"Venus",officialName:"Sol-2",startingDeg:220,distanceToStar:.2,size:8,color:"rgba(255, 255, 255, 1)",rotationSpeed:.22},{name:"Erde",officialName:"Sol-3",startingDeg:90,distanceToStar:.25,size:14,color:"rgba(255, 255, 255, 1)",rotationSpeed:.18},{name:"Mars",officialName:"Sol-4",startingDeg:0,distanceToStar:.325,size:18,color:"rgba(255, 255, 255, 1)",rotationSpeed:.16},{name:"Jupiter",officialName:"Sol-5",startingDeg:190,distanceToStar:.5,size:40,color:"rgba(255, 255, 255, 1)",rotationSpeed:.1},{name:"Saturn",officialName:"Sol-6",startingDeg:0,distanceToStar:.625,size:36,color:"rgba(255, 255, 255, 1)",rotationSpeed:.066},{name:"Uranus",officialName:"Sol-7",startingDeg:120,distanceToStar:.8,size:28,color:"rgba(255, 255, 255, 1)",rotationSpeed:.02},{name:"Neptun",officialName:"Sol-8",startingDeg:280,distanceToStar:.95,size:26,color:"rgba(255, 255, 255, 1)",rotationSpeed:.01}],gates:[{name:"First Expansion",target:"Aldebaran",tier:"CAPITAL"},{name:"First Contact",target:"Diapsida",tier:"LARGE"},{name:"New Frontier",target:"Beta Caeli",tier:"MEDIUM"},{name:"Argus",target:"Nu Pegasi",tier:"SMALL"}]},{name:"Aldebaran",style:{hue:100,saturation:35,lightness:70},position:{x:4600,y:4700,size:40},planets:[{name:"Saruta",officialName:"Aldebaran-1",startingDeg:90,distanceToStar:.3,size:10,color:"rgba(255, 255, 255, 1)",rotationSpeed:.25},{name:"Yalvion",officialName:"Aldebaran-2",startingDeg:110,distanceToStar:.425,size:25,color:"rgba(255, 255, 255, 1)",rotationSpeed:.1},{name:"Xephus",officialName:"Aldebaran-3",startingDeg:220,distanceToStar:.8,size:90,color:"rgba(255, 255, 255, 1)",rotationSpeed:.01}],gates:[{name:"The Turning Point",target:"Beta Caeli",tier:"SMALL"},{name:"First Expansion",target:"Sol",tier:"LARGE"},{name:"Independence",target:"Rigel",tier:"SMALL"}]},{name:"Beta Caeli",style:{hue:69,saturation:34,lightness:65},position:{x:3500,y:5100,size:30},planets:[{name:"Ellenope",officialName:"Beta Caeli-1",startingDeg:40,distanceToStar:.225,size:8,color:"rgba(255, 255, 255, 1)",rotationSpeed:.5},{name:"Gisulia",officialName:"Beta Caeli-2",startingDeg:80,distanceToStar:.355,size:25,color:"rgba(255, 255, 255, 1)",rotationSpeed:.2},{name:"Ungora",officialName:"Beta Caeli-3",startingDeg:320,distanceToStar:.6,size:70,color:"rgba(255, 255, 255, 1)",rotationSpeed:.1},{name:"Golla F",officialName:"Beta Caeli-4",startingDeg:200,distanceToStar:.8,size:55,color:"rgba(255, 255, 255, 1)",rotationSpeed:.075}],gates:[{name:"The Turning Point",target:"Aldebaran",tier:"SMALL"}]},{name:"Nu Pegasi",style:{hue:187,saturation:50,lightness:55},position:{x:4e3,y:6e3,size:10},planets:[{name:"Pegasus",officialName:"Nu Pegasi-1",startingDeg:100,distanceToStar:.1,size:6,color:"rgba(255, 255, 255, 1)",rotationSpeed:.7},{name:"Thobanus",officialName:"Nu Pegasi-2",startingDeg:210,distanceToStar:.24,size:22,color:"rgba(255, 255, 255, 1)",rotationSpeed:.24}],gates:[{name:"Argo",target:"Sol",tier:"SMALL"}]},{name:"Rigel",style:{hue:52,saturation:60,lightness:60},position:{x:4200,y:4500,size:14},planets:[{name:"Remiuq",officialName:"Rigel-1",startingDeg:20,distanceToStar:.55,size:40,color:"rgba(255, 255, 255, 1)",rotationSpeed:.125},{name:"Veogawa",officialName:"Rigel-2",startingDeg:265,distanceToStar:.95,size:12,color:"rgba(255, 255, 255, 1)",rotationSpeed:.25}],gates:[{name:"Independence",target:"Aldebaran",tier:"SMALL"}]},{name:"New Sol",style:{hue:226,saturation:66,lightness:54},position:{x:7e3,y:5e3,size:30},planets:[{name:"HELHEIM",officialName:"New Sol-1",startingDeg:60,distanceToStar:.225,size:8,color:"rgba(255, 255, 255, 1)",rotationSpeed:.55},{name:"Terra",officialName:"New Sol-2",startingDeg:40,distanceToStar:.35,size:20,color:"rgba(255, 255, 255, 1)",rotationSpeed:.175},{name:"Valhalla",officialName:"New Sol-3",startingDeg:90,distanceToStar:.55,size:40,color:"rgba(255, 255, 255, 1)",rotationSpeed:.1},{name:"Niflheim",officialName:"New Sol-4",startingDeg:220,distanceToStar:.8,size:60,color:"rgba(255, 255, 255, 1)",rotationSpeed:.05},{name:"Gioll",officialName:"New Sol-5",startingDeg:110,distanceToStar:.975,size:6,color:"rgba(255, 255, 255, 1)",rotationSpeed:.4}],gates:[]},{name:"Diapsida",style:{hue:69,saturation:34,lightness:85},position:{x:5300,y:3e3,size:30},planets:[{name:"Agamidae",officialName:"Agamidae",startingDeg:40,distanceToStar:.33,size:14,color:"rgba(255, 255, 255, 1)",rotationSpeed:.5},{name:"Iguanidae",officialName:"Iguanidae",startingDeg:100,distanceToStar:.4,size:18,color:"rgba(255, 255, 255, 1)",rotationSpeed:.4},{name:"Scincidae",officialName:"Scincidae",startingDeg:200,distanceToStar:.51,size:22,color:"rgba(255, 255, 255, 1)",rotationSpeed:.3},{name:"Varinidae",officialName:"Varinidae",startingDeg:220,distanceToStar:.61,size:30,color:"rgba(255, 255, 255, 1)",rotationSpeed:.25},{name:"Gerrhosauridae",officialName:"Gerrhosauridae",startingDeg:120,distanceToStar:.7,size:24,color:"rgba(255, 255, 255, 1)",rotationSpeed:.225},{name:"Lacertidae",officialName:"Lacertidae",startingDeg:10,distanceToStar:.84,size:10,color:"rgba(255, 255, 255, 1)",rotationSpeed:.1},{name:"Xantusiidae",officialName:"Xantusiidae",startingDeg:140,distanceToStar:1.04,size:6,color:"rgba(255, 255, 255, 1)",rotationSpeed:.05}],gates:[{name:"Porta A",target:"Sol",tier:"LARGE"}]},{name:"Casterion Bravo",style:{hue:16,saturation:100,lightness:36},position:{x:2e3,y:6e3,size:30},planets:[{name:"Cyberion",officialName:"M1",startingDeg:100,distanceToStar:.3,size:18,color:"rgba(255, 255, 255, 1)",rotationSpeed:.4},{name:"Aragassion",officialName:"M2",startingDeg:140,distanceToStar:.6,size:21,color:"rgba(255, 255, 255, 1)",rotationSpeed:.6},{name:"Helios",officialName:"M3",startingDeg:200,distanceToStar:.9,size:33,color:"rgba(255, 255, 255, 1)",rotationSpeed:.1}],gates:[]}]}},"5f35":function(e,t,a){e.exports={publicPath:"/telescope/"}},"6e1c":function(e,t,a){"use strict";a("4b40")},8455:function(e,t,a){"use strict";a("b189")},"9cde":function(e,t,a){"use strict";a("3d0f")},a24c:function(e,t,a){},b189:function(e,t,a){},e6de:function(e,t,a){"use strict";a("a24c")}});
//# sourceMappingURL=app.e0b9e8c2.js.map