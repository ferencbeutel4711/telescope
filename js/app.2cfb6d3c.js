(function(t){function e(e){for(var r,o,s=e[0],c=e[1],l=e[2],u=0,f=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);h&&h(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/telescope/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var h=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2d5f":function(t,e,n){"use strict";n("5a25")},"4c04":function(t,e,n){"use strict";n("712d")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={id:"nav"},i=Object(r["g"])("Universe-Maker"),o=Object(r["g"])("Starmap");function s(t,e){var n=Object(r["x"])("router-link"),s=Object(r["x"])("router-view");return Object(r["r"])(),Object(r["e"])(r["a"],null,[Object(r["h"])("div",a,[Object(r["h"])(n,{to:"/"},{default:Object(r["C"])((function(){return[i]})),_:1}),Object(r["h"])(n,{to:"/starmap"},{default:Object(r["C"])((function(){return[o]})),_:1})]),Object(r["h"])(s)],64)}n("2d5f");const c={};c.render=s;var l=c,h=n("6c02");function u(t,e,n,a,i,o){var s=Object(r["x"])("Starmap");return Object(r["r"])(),Object(r["e"])(s)}var f=Object(r["D"])("data-v-cc264716");Object(r["u"])("data-v-cc264716");var v=Object(r["h"])("p",null,"Starmap",-1),d={class:"starmap-container"},g={key:0,class:"starmap-blur"};Object(r["s"])();var p=f((function(t,e,n,a,i,o){var s=Object(r["x"])("StarInfo"),c=Object(r["x"])("StarQuickInfo");return Object(r["r"])(),Object(r["e"])(r["a"],null,[v,Object(r["h"])("div",d,[Object(r["h"])(r["b"],{name:"blur"},{default:f((function(){return[a.interactionLocked?(Object(r["r"])(),Object(r["e"])("div",g)):Object(r["f"])("",!0)]})),_:1}),Object(r["h"])("canvas",{id:"starmap",class:"starmap",height:1e4,width:1e4,onWheel:e[1]||(e[1]=function(){return a.handleZoom&&a.handleZoom.apply(a,arguments)})},null,32),a.selectedStar?(Object(r["r"])(),Object(r["e"])(s,{key:0,class:"starinfo",style:{left:"".concat(a.selectedStar.screenPoint.x-350,"px"),top:"".concat(a.selectedStar.screenPoint.y-800,"px")},star:a.selectedStar.star,onStarInfoClosed:a.starInfoClosed},null,8,["style","star","onStarInfoClosed"])):Object(r["f"])("",!0),a.hoveredStar?(Object(r["r"])(),Object(r["e"])(c,{key:1,class:"star-quickinfo",style:{left:"".concat(a.hoveredStar.screenPoint.x+30,"px"),top:"".concat(a.hoveredStar.screenPoint.y-40,"px")},star:a.hoveredStar.star},null,8,["style","star"])):Object(r["f"])("",!0)])],64)})),b=n("b85c"),O=(n("159b"),n("d3b7"),n("ddb0"),n("d81d"),n("d4ec")),m=n("bee2"),j=(n("cb29"),function(t,e,n,r,a,i){var o=(t.clientX-e.parentNode.getBoundingClientRect().left)*(1/i),s=(t.clientY-e.parentNode.getBoundingClientRect().top)*(1/i),c=o-(n.position.x-r),l=s-(n.position.y-a);return Math.pow(c,2)+Math.pow(l,2)<Math.pow(n.position.size,2)}),y=function(t,e,n,r){return{x:(t.position.x-e)*r,y:(t.position.y-n)*r}},S=function(){function t(e,n,r,a,i){Object(O["a"])(this,t),this.star=n,this.canDisplayInfo=!1,this.canvas=e,this.controls=r,this.canvasWidth=a,this.canvasHeight=i}return Object(m["a"])(t,[{key:"draw",value:function(){var t=this.canvas.getContext("2d");t.beginPath(),t.arc(this.star.position.x,this.star.position.y,this.star.position.size,0,2*Math.PI),t.fillStyle=this.star.style.color,t.fill(),t.closePath()}},{key:"onMouseDown",value:function(t){j(t,this.canvas,this.star,this.controls.getCurrentOrigX(),this.controls.getCurrentOrigY(),this.controls.getCurrentScale())&&(this.canDisplayInfo=!0)}},{key:"onMouseMove",value:function(t){return j(t,this.canvas,this.star,this.controls.getCurrentOrigX(),this.controls.getCurrentOrigY(),this.controls.getCurrentScale())?{star:this.star,screenPoint:y(this.star,this.controls.getCurrentOrigX(),this.controls.getCurrentOrigY(),this.controls.getCurrentScale())}:null}},{key:"onMouseUp",value:function(t){return this.canDisplayInfo&&j(t,this.canvas,this.star,this.controls.getCurrentOrigX(),this.controls.getCurrentOrigY(),this.controls.getCurrentScale())?(this.canDisplayInfo=!1,this.controls.scrollToOrig(this.star.position.x-this.canvasWidth*(1/this.controls.getCurrentScale())*.5,this.star.position.y-this.canvasHeight*(1/this.controls.getCurrentScale())*.75),{star:this.star,screenPoint:y(this.star,this.controls.getCurrentOrigX(),this.controls.getCurrentOrigY(),this.controls.getCurrentScale())}):(this.canDisplayInfo=!1,null)}}]),t}(),w=(n("7db0"),n("b0c0"),function(t){switch(t){case x.SMALL:return{strokeStyle:"#7a328a",lineWidth:1,arrowLength:8,arrowSize:8};case x.MEDIUM:return{strokeStyle:"#b44bcb",lineWidth:2,arrowLength:10,arrowSize:10};default:return console.error("unknown gate tier: ".concat(t)),null}}),k=function(t,e){var n=e.find((function(e){return e.name===t}));return n||console.error("cannot find target: ".concat(t)),n},I=function(t,e,n,r,a,i,o,s){var c=a-e,l=i-n,h=Math.atan2(l,c),u=Math.sqrt(c*c+l*l),f=0+r,v=u-o;t.save(),t.translate(e,n),t.rotate(h),t.beginPath(),t.lineWidth=s.lineWidth,t.strokeStyle=s.strokeStyle,t.moveTo(f,0),t.lineTo(v,0),t.moveTo(v-s.arrowLength,-s.arrowSize),t.lineTo(v,0),t.lineTo(v-s.arrowLength,s.arrowSize),t.stroke(),t.closePath(),t.restore()},M=function t(e,n,r,a){Object(O["a"])(this,t);var i=w(n.tier);if(i){var o=k(n.target,a);if(o){var s=e.getContext("2d");I(s,r.position.x,r.position.y,r.position.size,o.position.x,o.position.y,o.position.size,i)}}},x={SMALL:"SMALL",MEDIUM:"MEDIUM"},C=function(){function t(e,n,r,a,i,o){Object(O["a"])(this,t),this.zoomIntensity=.2,this.ctx=e,this.canvas=n,this.isDragging=!1,this.origX=r,this.origY=a,this.zoomLevel=0,this.scale=1,this.canvasWidth=i,this.canvasHeight=o}return Object(m["a"])(t,[{key:"getCurrentScale",value:function(){return this.scale}},{key:"getCurrentOrigX",value:function(){return this.origX}},{key:"getCurrentOrigY",value:function(){return this.origY}},{key:"scrollToOrig",value:function(t,e){this.ctx.translate(this.origX-t,this.origY-e),this.origX=t,this.origY=e}},{key:"onMouseDown",value:function(t){this.dragX=t.clientX-this.canvas.parentNode.getBoundingClientRect().left,this.dragY=t.clientY-this.canvas.parentNode.getBoundingClientRect().top,this.isDragging=!0}},{key:"onMouseMove",value:function(t){if(this.isDragging){var e=t.clientX-this.canvas.parentNode.getBoundingClientRect().left,n=t.clientY-this.canvas.parentNode.getBoundingClientRect().top,r=(this.dragX-e)*(0===this.zoomLevel?1:this.zoomLevel<0?-this.zoomLevel:1/this.zoomLevel),a=(this.dragY-n)*(0===this.zoomLevel?1:this.zoomLevel<0?-this.zoomLevel:1/this.zoomLevel);if(this.origX+=r,this.origY+=a,this.origX<0)this.origX=0;else{var i=this.canvasWidth/this.scale;this.origX+i>this.canvas.width?this.origX=this.canvas.width-i:this.ctx.translate(-r,0)}if(this.origY<0)this.origY=0;else{var o=this.canvasHeight/this.scale;this.origY+o>this.canvas.height?this.origY=this.canvas.height-o:this.ctx.translate(0,-a)}this.dragX=e,this.dragY=n}}},{key:"onMouseUp",value:function(){this.isDragging=!1}},{key:"zoomAt",value:function(t){var e=t.clientX-this.canvas.parentNode.getBoundingClientRect().left,n=t.clientY-this.canvas.parentNode.getBoundingClientRect().top,r=t.deltaY<0?1:-1;this.zoomLevel+=r;var a=Math.exp(r*this.zoomIntensity);if(this.zoomLevel<-5)this.zoomLevel+=1;else if(this.zoomLevel>5)this.zoomLevel-=1;else{if(this.ctx.translate(this.origX,this.origY),this.origX-=e/(this.scale*a)-e/this.scale,this.origY-=n/(this.scale*a)-n/this.scale,this.origX<0)this.origX=0;else{var i=this.canvasWidth/(this.scale*a);this.origX+i>this.canvas.width&&(this.origX=this.canvas.width-i)}if(this.origY<0)this.origY=0;else{var o=this.canvasHeight/(this.scale*a);this.origY+o>this.canvas.height&&(this.origY=this.canvas.height-o)}this.ctx.scale(a,a),this.ctx.translate(-this.origX,-this.origY),this.scale*=a}}}]),t}(),L=Object(r["D"])("data-v-27900582");Object(r["u"])("data-v-27900582");var z={class:"star-info"},X=Object(r["h"])("span",null,"X",-1),Y={class:"star-info__content"},P={class:"star-info__star-name"},D=Object(r["h"])("div",{class:"star-info__visit-system-link"},[Object(r["h"])("span",null,"Visit System")],-1);Object(r["s"])();var _=L((function(t,e,n,a,i,o){return Object(r["r"])(),Object(r["e"])("div",z,[Object(r["h"])("div",{class:"star-info__close-button",onClick:e[1]||(e[1]=function(){return a.close&&a.close.apply(a,arguments)})},[X]),Object(r["h"])("div",Y,[Object(r["h"])("span",P,Object(r["z"])(n.star.name),1)]),D])})),A={name:"StarInfo",props:{star:Object},setup:function(t,e){var n=e.emit,r=function(){return n("starInfoClosed")};return{close:r}}};n("4c04");A.render=_,A.__scopeId="data-v-27900582";var E=A,T=Object(r["D"])("data-v-6c3ce3f3");Object(r["u"])("data-v-6c3ce3f3");var W={class:"star-quickinfo"};Object(r["s"])();var U=T((function(t,e,n,a,i,o){return Object(r["r"])(),Object(r["e"])("div",W,[Object(r["h"])("span",null,Object(r["z"])(n.star.name),1)])})),R={name:"StarInfo",props:{star:Object}};n("b721");R.render=U,R.__scopeId="data-v-6c3ce3f3";var B=R,N=(n("96cf"),regeneratorRuntime.mark(H));function H(t,e){var n,r,a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:n=Object(b["a"])(t),i.prev=1,n.s();case 3:if((r=n.n()).done){i.next=9;break}return a=r.value,i.next=7,e(a);case 7:i.next=3;break;case 9:i.next=14;break;case 11:i.prev=11,i.t0=i["catch"](1),n.e(i.t0);case 14:return i.prev=14,n.f(),i.finish(14);case 17:case"end":return i.stop()}}),N,null,[[1,11,14,17]])}function F(t,e,n){var r,a=Object(b["a"])(H(t,n));try{for(a.s();!(r=a.n()).done;){var i=r.value;if(e(i))return i}}catch(o){a.e(o)}finally{a.f()}}var q=1800,Z=1100,J=3e3,Q=4200,G={stars:[{name:"Sol",style:{color:"#f3d98a"},position:{x:5e3,y:5e3,size:10},gates:[{name:"Sol -> Alpha I",target:"Alpha I",tier:"SMALL"},{name:"First Contact",target:"Alpha II",tier:"MEDIUM"}]},{name:"Alpha I",style:{color:"#9fac5d"},position:{x:4300,y:4500,size:20},gates:[{name:"Alpha I -> Alpha II",target:"Alpha II",tier:"SMALL"}]},{name:"Alpha II",style:{color:"#9fac5d"},position:{x:3300,y:5200,size:18},gates:[{name:"Alpha II -> Alpha I",target:"Alpha I",tier:"SMALL"},{name:"First Encounter",target:"Sol",tier:"MEDIUM"}]}]},V={name:"Starmap",components:{StarInfo:E,StarQuickInfo:B},setup:function(){var t,e,n,a=[],i=Object(r["w"])(!1),o=Object(r["w"])(),s=Object(r["w"])(),c=function(){e.save(),e.setTransform(1,0,0,1,0,0),e.clearRect(0,0,t.width,t.height),e.restore(),e.beginPath(),e.rect(0,0,t.width,t.height),e.strokeStyle="rgba(212,29,29,1)",e.lineWidth=1/n.getCurrentScale()*20,e.stroke(),e.closePath();var r,i=Object(b["a"])(Array(9).keys());try{for(i.s();!(r=i.n()).done;){var o=r.value;e.beginPath(),e.moveTo(t.width*parseFloat("0.".concat(o+1)),0),e.lineTo(t.width*parseFloat("0.".concat(o+1)),t.height),e.strokeStyle="rgba(126,126,126,0.3)",e.lineWidth=1,e.stroke(),e.closePath()}}catch(h){i.e(h)}finally{i.f()}var s,c=Object(b["a"])(Array(9).keys());try{for(c.s();!(s=c.n()).done;){var l=s.value;e.beginPath(),e.moveTo(0,t.height*parseFloat("0.".concat(l+1))),e.lineTo(t.width,t.height*parseFloat("0.".concat(l+1))),e.strokeStyle="rgba(126,126,126,0.3)",e.lineWidth=1,e.stroke(),e.closePath()}}catch(h){c.e(h)}finally{c.f()}G.stars.forEach((function(e){return e.gates.forEach((function(n){return new M(t,n,e,G.stars)}))})),a.forEach((function(t){return t.draw()}))};Object(r["p"])((function(){t=document.getElementById("starmap"),e=t.getContext("2d"),n=new C(e,t,J,Q,q,Z),t.addEventListener("mousedown",(function(t){t.preventDefault(),i.value||(n.onMouseDown(t),a.forEach((function(e){return e.onMouseDown(t)})))})),t.addEventListener("mousemove",(function(t){if(t.preventDefault(),!i.value){n.onMouseMove(t),s.value=null;var e=F(a,(function(t){return null!=t}),(function(e){return e.onMouseMove(t)}));e&&(console.log(e),s.value=e)}})),t.addEventListener("mouseup",(function(t){if(t.preventDefault(),!i.value){n.onMouseUp();var e=F(a,(function(t){return null!=t}),(function(e){return e.onMouseUp(t)}));e&&(s.value=null,o.value=e,i.value=!0)}})),a=G.stars.map((function(e){return new S(t,e,n,q,Z)})),e.translate(-J,-Q),setInterval((function(){return c(n)}),800/60)}));var l=function(t){i.value||n.zoomAt(t)},h=function(){o.value=null,i.value=!1};return{handleZoom:l,interactionLocked:i,starInfoClosed:h,selectedStar:o,hoveredStar:s}}};n("61dc");V.render=p,V.__scopeId="data-v-cc264716";var K=V,$={name:"Home",components:{Starmap:K}};$.render=u;var tt=$,et=Object(r["h"])("h1",null,"Universe-Maker",-1),nt=Object(r["h"])("h3",null,"Werde Gott & erstelle dein Universum",-1);function rt(t,e,n,a,i,o){return Object(r["r"])(),Object(r["e"])(r["a"],null,[et,nt],64)}var at={name:"Home"};at.render=rt;var it=at,ot=n("5f35"),st=[{path:"/",name:"home",component:it},{path:"/starmap",name:"Starmap",component:tt}],ct=Object(h["a"])({history:Object(h["b"])(ot["publicPath"]),routes:st}),lt=ct,ht=n("5502"),ut=Object(ht["a"])({state:{},mutations:{},actions:{},modules:{}});Object(r["d"])(l).use(ut).use(lt).mount("#app")},"5a25":function(t,e,n){},"5f35":function(t,e,n){t.exports={publicPath:"/telescope/"}},"61dc":function(t,e,n){"use strict";n("bca8")},"712d":function(t,e,n){},b721:function(t,e,n){"use strict";n("f72a")},bca8:function(t,e,n){},f72a:function(t,e,n){}});
//# sourceMappingURL=app.2cfb6d3c.js.map