(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d64de3f"],{"0156":function(t,e,n){var i=n("6d8b");function a(t,e,n){n=n||{};var a=t.coordinateSystem,o=e.axis,r={},s=o.getAxesOnZeroOf()[0],l=o.position,c=s?"onZero":l,u=o.dim,h=a.getRect(),d=[h.x,h.x+h.width,h.y,h.y+h.height],g={left:0,right:1,top:0,bottom:1,onZero:2},f=e.get("offset")||0,x="x"===u?[d[2]-f,d[3]+f]:[d[0]-f,d[1]+f];if(s){var p=s.toGlobalCoord(s.dataToCoord(0));x[g.onZero]=Math.max(Math.min(p,x[1]),x[0])}r.position=["y"===u?x[g[c]]:d[0],"x"===u?x[g[c]]:d[3]],r.rotation=Math.PI/2*("x"===u?0:1);var v={top:-1,bottom:1,left:-1,right:1};r.labelDirection=r.tickDirection=r.nameDirection=v[l],r.labelOffset=s?x[g[l]]-x[g.onZero]:0,e.get("axisTick.inside")&&(r.tickDirection=-r.tickDirection),i.retrieve(n.labelInside,e.get("axisLabel.inside"))&&(r.labelDirection=-r.labelDirection);var m=e.get("axisLabel.rotate");return r.labelRotate="top"===c?-m:m,r.z2=1,r}e.layout=a},1748:function(t,e,n){var i=n("3eba"),a=n("6d8b"),o=n("71ad"),r=n("4319"),s=n("2023"),l=o.valueAxis;function c(t,e){return a.defaults({show:e},t)}var u=i.extendComponentModel({type:"radar",optionUpdated:function(){var t=this.get("boundaryGap"),e=this.get("splitNumber"),n=this.get("scale"),i=this.get("axisLine"),o=this.get("axisTick"),l=this.get("axisType"),c=this.get("axisLabel"),u=this.get("name"),h=this.get("name.show"),d=this.get("name.formatter"),g=this.get("nameGap"),f=this.get("triggerEvent"),x=a.map(this.get("indicator")||[],(function(x){null!=x.max&&x.max>0&&!x.min?x.min=0:null!=x.min&&x.min<0&&!x.max&&(x.max=0);var p=u;if(null!=x.color&&(p=a.defaults({color:x.color},u)),x=a.merge(a.clone(x),{boundaryGap:t,splitNumber:e,scale:n,axisLine:i,axisTick:o,axisType:l,axisLabel:c,name:x.text,nameLocation:"end",nameGap:g,nameTextStyle:p,triggerEvent:f},!1),h||(x.name=""),"string"===typeof d){var v=x.name;x.name=d.replace("{value}",null!=v?v:"")}else"function"===typeof d&&(x.name=d(x.name,x));var m=a.extend(new r(x,null,this.ecModel),s);return m.mainType="radar",m.componentIndex=this.componentIndex,m}),this);this.getIndicatorModels=function(){return x}},defaultOption:{zlevel:0,z:0,center:["50%","50%"],radius:"75%",startAngle:90,name:{show:!0},boundaryGap:[0,0],splitNumber:5,nameGap:15,scale:!1,shape:"polygon",axisLine:a.merge({lineStyle:{color:"#bbb"}},l.axisLine),axisLabel:c(l.axisLabel,!1),axisTick:c(l.axisTick,!1),axisType:"interval",splitLine:c(l.splitLine,!0),splitArea:c(l.splitArea,!0),indicator:[]}}),h=u;t.exports=h},2023:function(t,e,n){var i=n("6d8b"),a={getMin:function(t){var e=this.option,n=t||null==e.rangeStart?e.min:e.rangeStart;return this.axis&&null!=n&&"dataMin"!==n&&"function"!==typeof n&&!i.eqNaN(n)&&(n=this.axis.scale.parse(n)),n},getMax:function(t){var e=this.option,n=t||null==e.rangeEnd?e.max:e.rangeEnd;return this.axis&&null!=n&&"dataMax"!==n&&"function"!==typeof n&&!i.eqNaN(n)&&(n=this.axis.scale.parse(n)),n},getNeedCrossZero:function(){var t=this.option;return null==t.rangeStart&&null==t.rangeEnd&&!t.scale},getCoordSysModel:i.noop,setRange:function(t,e){this.option.rangeStart=t,this.option.rangeEnd=e},resetRange:function(){this.option.rangeStart=this.option.rangeEnd=null}};t.exports=a},"23e0":function(t,e,n){var i=n("6d8b"),a=n("7887"),o=n("89e3"),r=n("3842"),s=n("697e"),l=s.getScaleExtent,c=s.niceScaleExtent,u=n("2039"),h=n("8c2a");function d(t,e,n){this._model=t,this.dimensions=[],this._indicatorAxes=i.map(t.getIndicatorModels(),(function(t,e){var n="indicator_"+e,i=new a(n,"log"===t.get("axisType")?new h:new o);return i.name=t.get("name"),i.model=t,t.axis=i,this.dimensions.push(n),i}),this),this.resize(t,n),this.cx,this.cy,this.r,this.r0,this.startAngle}d.prototype.getIndicatorAxes=function(){return this._indicatorAxes},d.prototype.dataToPoint=function(t,e){var n=this._indicatorAxes[e];return this.coordToPoint(n.dataToCoord(t),e)},d.prototype.coordToPoint=function(t,e){var n=this._indicatorAxes[e],i=n.angle,a=this.cx+t*Math.cos(i),o=this.cy-t*Math.sin(i);return[a,o]},d.prototype.pointToData=function(t){var e=t[0]-this.cx,n=t[1]-this.cy,i=Math.sqrt(e*e+n*n);e/=i,n/=i;for(var a,o=Math.atan2(-n,e),r=1/0,s=-1,l=0;l<this._indicatorAxes.length;l++){var c=this._indicatorAxes[l],u=Math.abs(o-c.angle);u<r&&(a=c,s=l,r=u)}return[s,+(a&&a.coordToData(i))]},d.prototype.resize=function(t,e){var n=t.get("center"),a=e.getWidth(),o=e.getHeight(),s=Math.min(a,o)/2;this.cx=r.parsePercent(n[0],a),this.cy=r.parsePercent(n[1],o),this.startAngle=t.get("startAngle")*Math.PI/180;var l=t.get("radius");"string"!==typeof l&&"number"!==typeof l||(l=[0,l]),this.r0=r.parsePercent(l[0],s),this.r=r.parsePercent(l[1],s),i.each(this._indicatorAxes,(function(t,e){t.setExtent(this.r0,this.r);var n=this.startAngle+e*Math.PI*2/this._indicatorAxes.length;n=Math.atan2(Math.sin(n),Math.cos(n)),t.angle=n}),this)},d.prototype.update=function(t,e){var n=this._indicatorAxes,a=this._model;i.each(n,(function(t){t.scale.setExtent(1/0,-1/0)})),t.eachSeriesByType("radar",(function(e,o){if("radar"===e.get("coordinateSystem")&&t.getComponent("radar",e.get("radarIndex"))===a){var r=e.getData();i.each(n,(function(t){t.scale.unionExtentFromData(r,r.mapDimension(t.dim))}))}}),this);var o=a.get("splitNumber");function s(t){var e=Math.pow(10,Math.floor(Math.log(t)/Math.LN10)),n=t/e;return 2===n?n=5:n*=2,n*e}i.each(n,(function(t,e){var n=l(t.scale,t.model).extent;c(t.scale,t.model);var i=t.model,a=t.scale,u=i.getMin(),h=i.getMax(),d=a.getInterval();if(null!=u&&null!=h)a.setExtent(+u,+h),a.setInterval((h-u)/o);else if(null!=u){do{f=u+d*o,a.setExtent(+u,f),a.setInterval(d),d=s(d)}while(f<n[1]&&isFinite(f)&&isFinite(n[1]))}else if(null!=h){do{x=h-d*o,a.setExtent(x,+h),a.setInterval(d),d=s(d)}while(x>n[0]&&isFinite(x)&&isFinite(n[0]))}else{var g=a.getTicks().length-1;g>o&&(d=s(d));var f=Math.ceil(n[1]/d)*d,x=r.round(f-d*o);a.setExtent(x,f),a.setInterval(d)}}))},d.dimensions=[],d.create=function(t,e){var n=[];return t.eachComponent("radar",(function(i){var a=new d(i,t,e);n.push(a),i.coordinateSystem=a})),t.eachSeriesByType("radar",(function(t){"radar"===t.get("coordinateSystem")&&(t.coordinateSystem=n[t.get("radarIndex")||0])})),n},u.register("radar",d);var g=d;t.exports=g},"48c7":function(t,e,n){var i=n("6d8b"),a=n("6cb7"),o=n("9e47"),r=n("2023"),s=a.extend({type:"cartesian2dAxis",axis:null,init:function(){s.superApply(this,"init",arguments),this.resetRange()},mergeOption:function(){s.superApply(this,"mergeOption",arguments),this.resetRange()},restoreData:function(){s.superApply(this,"restoreData",arguments),this.resetRange()},getCoordSysModel:function(){return this.ecModel.queryComponents({mainType:"grid",index:this.option.gridIndex,id:this.option.gridId})[0]}});function l(t,e){return e.type||(e.data?"category":"value")}i.merge(s.prototype,r);var c={offset:0};o("x",s,l,c),o("y",s,l,c);var u=s;t.exports=u},"4e08":function(t,e,n){(function(t){var n;"undefined"!==typeof window?n=window.__DEV__:"undefined"!==typeof t&&(n=t.__DEV__),"undefined"===typeof n&&(n=!0);var i=n;e.__DEV__=i}).call(this,n("c8ba"))},"5aa9d":function(t,e,n){var i=n("4e08"),a=(i.__DEV__,n("6d8b")),o=a.isObject,r=a.each,s=a.map,l=a.indexOf,c=(a.retrieve,n("f934")),u=c.getLayoutRect,h=n("697e"),d=h.createScaleByModel,g=h.ifAxisCrossZero,f=h.niceScaleExtent,x=h.estimateLabelUnionRect,p=n("cbe9"),v=n("ec02"),m=n("2039"),y=n("ee1a"),b=y.getStackedDimension;function M(t,e,n){return t.getCoordSysModel()===e}function A(t,e,n){this._coordsMap={},this._coordsList=[],this._axesMap={},this._axesList=[],this._initCartesian(t,e,n),this.model=t}n("8ed2");var L=A.prototype;function _(t,e,n,i){n.getAxesOnZeroOf=function(){return a?[a]:[]};var a,o=t[e],r=n.model,s=r.get("axisLine.onZero"),l=r.get("axisLine.onZeroAxisIndex");if(s){if(null!=l)C(o[l])&&(a=o[l]);else for(var c in o)if(o.hasOwnProperty(c)&&C(o[c])&&!i[u(o[c])]){a=o[c];break}a&&(i[u(a)]=!0)}function u(t){return t.dim+"_"+t.index}}function C(t){return t&&"category"!==t.type&&"time"!==t.type&&g(t)}function T(t,e){var n=t.getExtent(),i=n[0]+n[1];t.toGlobalCoord="x"===t.dim?function(t){return t+e}:function(t){return i-t+e},t.toLocalCoord="x"===t.dim?function(t){return t-e}:function(t){return i-t+e}}L.type="grid",L.axisPointerEnabled=!0,L.getRect=function(){return this._rect},L.update=function(t,e){var n=this._axesMap;this._updateScale(t,this.model),r(n.x,(function(t){f(t.scale,t.model)})),r(n.y,(function(t){f(t.scale,t.model)}));var i={};r(n.x,(function(t){_(n,"y",t,i)})),r(n.y,(function(t){_(n,"x",t,i)})),this.resize(this.model,e)},L.resize=function(t,e,n){var i=u(t.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()});this._rect=i;var a=this._axesList;function o(){r(a,(function(t){var e=t.isHorizontal(),n=e?[0,i.width]:[0,i.height],a=t.inverse?1:0;t.setExtent(n[a],n[1-a]),T(t,e?i.x:i.y)}))}o(),!n&&t.get("containLabel")&&(r(a,(function(t){if(!t.model.get("axisLabel.inside")){var e=x(t);if(e){var n=t.isHorizontal()?"height":"width",a=t.model.get("axisLabel.margin");i[n]-=e[n]+a,"top"===t.position?i.y+=e.height+a:"left"===t.position&&(i.x+=e.width+a)}}})),o())},L.getAxis=function(t,e){var n=this._axesMap[t];if(null!=n){if(null==e)for(var i in n)if(n.hasOwnProperty(i))return n[i];return n[e]}},L.getAxes=function(){return this._axesList.slice()},L.getCartesian=function(t,e){if(null!=t&&null!=e){var n="x"+t+"y"+e;return this._coordsMap[n]}o(t)&&(e=t.yAxisIndex,t=t.xAxisIndex);for(var i=0,a=this._coordsList;i<a.length;i++)if(a[i].getAxis("x").index===t||a[i].getAxis("y").index===e)return a[i]},L.getCartesians=function(){return this._coordsList.slice()},L.convertToPixel=function(t,e,n){var i=this._findConvertTarget(t,e);return i.cartesian?i.cartesian.dataToPoint(n):i.axis?i.axis.toGlobalCoord(i.axis.dataToCoord(n)):null},L.convertFromPixel=function(t,e,n){var i=this._findConvertTarget(t,e);return i.cartesian?i.cartesian.pointToData(n):i.axis?i.axis.coordToData(i.axis.toLocalCoord(n)):null},L._findConvertTarget=function(t,e){var n,i,a=e.seriesModel,o=e.xAxisModel||a&&a.getReferringComponents("xAxis")[0],r=e.yAxisModel||a&&a.getReferringComponents("yAxis")[0],s=e.gridModel,c=this._coordsList;if(a)n=a.coordinateSystem,l(c,n)<0&&(n=null);else if(o&&r)n=this.getCartesian(o.componentIndex,r.componentIndex);else if(o)i=this.getAxis("x",o.componentIndex);else if(r)i=this.getAxis("y",r.componentIndex);else if(s){var u=s.coordinateSystem;u===this&&(n=this._coordsList[0])}return{cartesian:n,axis:i}},L.containPoint=function(t){var e=this._coordsList[0];if(e)return e.containPoint(t)},L._initCartesian=function(t,e,n){var i={left:!1,right:!1,top:!1,bottom:!1},a={x:{},y:{}},o={x:0,y:0};if(e.eachComponent("xAxis",s("x"),this),e.eachComponent("yAxis",s("y"),this),!o.x||!o.y)return this._axesMap={},void(this._axesList=[]);function s(n){return function(r,s){if(M(r,t,e)){var l=r.get("position");"x"===n?"top"!==l&&"bottom"!==l&&(l=i.bottom?"top":"bottom"):"left"!==l&&"right"!==l&&(l=i.left?"right":"left"),i[l]=!0;var c=new v(n,d(r),[0,0],r.get("type"),l),u="category"===c.type;c.onBand=u&&r.get("boundaryGap"),c.inverse=r.get("inverse"),r.axis=c,c.model=r,c.grid=this,c.index=s,this._axesList.push(c),a[n][s]=c,o[n]++}}}this._axesMap=a,r(a.x,(function(e,n){r(a.y,(function(i,a){var o="x"+n+"y"+a,r=new p(o);r.grid=this,r.model=t,this._coordsMap[o]=r,this._coordsList.push(r),r.addAxis(e),r.addAxis(i)}),this)}),this)},L._updateScale=function(t,e){function n(t,e,n){r(t.mapDimension(e.dim,!0),(function(n){e.scale.unionExtentFromData(t,b(t,n))}))}r(this._axesList,(function(t){t.scale.setExtent(1/0,-1/0)})),t.eachSeries((function(i){if(E(i)){var a=S(i,t),o=a[0],r=a[1];if(!M(o,e,t)||!M(r,e,t))return;var s=this.getCartesian(o.componentIndex,r.componentIndex),l=i.getData(),c=s.getAxis("x"),u=s.getAxis("y");"list"===l.type&&(n(l,c,i),n(l,u,i))}}),this)},L.getTooltipAxes=function(t){var e=[],n=[];return r(this.getCartesians(),(function(i){var a=null!=t&&"auto"!==t?i.getAxis(t):i.getBaseAxis(),o=i.getOtherAxis(a);l(e,a)<0&&e.push(a),l(n,o)<0&&n.push(o)})),{baseAxes:e,otherAxes:n}};var w=["xAxis","yAxis"];function S(t,e){return s(w,(function(e){var n=t.getReferringComponents(e)[0];return n}))}function E(t){return"cartesian2d"===t.get("coordinateSystem")}A.create=function(t,e){var n=[];return t.eachComponent("grid",(function(i,a){var o=new A(i,t,e);o.name="grid_"+a,o.resize(i,e,!0),i.coordinateSystem=o,n.push(o)})),t.eachSeries((function(e){if(E(e)){var n=S(e,t),i=n[0],a=n[1],o=i.getCoordSysModel(),r=o.coordinateSystem;e.coordinateSystem=r.getCartesian(i.componentIndex,a.componentIndex)}})),n},A.dimensions=A.prototype.dimensions=p.prototype.dimensions,m.register("cartesian2d",A);var k=A;t.exports=k},"697e":function(t,e,n){var i=n("4e08"),a=(i.__DEV__,n("6d8b")),o=n("18c0"),r=n("89e3"),s=n("e0d8"),l=n("3842"),c=n("9d57"),u=c.prepareLayoutBarSeries,h=c.makeColumnLayout,d=c.retrieveColumnLayout,g=n("9850");function f(t,e){var n,i,o,r=t.type,s=e.getMin(),c=e.getMax(),d=t.getExtent();"ordinal"===r?n=e.getCategories().length:(i=e.get("boundaryGap"),a.isArray(i)||(i=[i||0,i||0]),"boolean"===typeof i[0]&&(i=[0,0]),i[0]=l.parsePercent(i[0],1),i[1]=l.parsePercent(i[1],1),o=d[1]-d[0]||Math.abs(d[0])),"dataMin"===s?s=d[0]:"function"===typeof s&&(s=s({min:d[0],max:d[1]})),"dataMax"===c?c=d[1]:"function"===typeof c&&(c=c({min:d[0],max:d[1]}));var g=null!=s,f=null!=c;null==s&&(s="ordinal"===r?n?0:NaN:d[0]-i[0]*o),null==c&&(c="ordinal"===r?n?n-1:NaN:d[1]+i[1]*o),(null==s||!isFinite(s))&&(s=NaN),(null==c||!isFinite(c))&&(c=NaN),t.setBlank(a.eqNaN(s)||a.eqNaN(c)||"ordinal"===r&&!t.getOrdinalMeta().categories.length),e.getNeedCrossZero()&&(s>0&&c>0&&!g&&(s=0),s<0&&c<0&&!f&&(c=0));var p=e.ecModel;if(p&&"time"===r){var v,m=u("bar",p);if(a.each(m,(function(t){v|=t.getBaseAxis()===e.axis})),v){var y=h(m),b=x(s,c,e,y);s=b.min,c=b.max}}return{extent:[s,c],fixMin:g,fixMax:f}}function x(t,e,n,i){var o=n.axis.getExtent(),r=o[1]-o[0],s=d(i,n.axis);if(void 0===s)return{min:t,max:e};var l=1/0;a.each(s,(function(t){l=Math.min(t.offset,l)}));var c=-1/0;a.each(s,(function(t){c=Math.max(t.offset+t.width,c)})),l=Math.abs(l),c=Math.abs(c);var u=l+c,h=e-t,g=1-(l+c)/r,f=h/g-h;return e+=f*(c/u),t-=f*(l/u),{min:t,max:e}}function p(t,e){var n=f(t,e),i=n.extent,a=e.get("splitNumber");"log"===t.type&&(t.base=e.get("logBase"));var o=t.type;t.setExtent(i[0],i[1]),t.niceExtent({splitNumber:a,fixMin:n.fixMin,fixMax:n.fixMax,minInterval:"interval"===o||"time"===o?e.get("minInterval"):null,maxInterval:"interval"===o||"time"===o?e.get("maxInterval"):null});var r=e.get("interval");null!=r&&t.setInterval&&t.setInterval(r)}function v(t,e){if(e=e||t.get("type"),e)switch(e){case"category":return new o(t.getOrdinalMeta?t.getOrdinalMeta():t.getCategories(),[1/0,-1/0]);case"value":return new r;default:return(s.getClass(e)||r).create(t)}}function m(t){var e=t.scale.getExtent(),n=e[0],i=e[1];return!(n>0&&i>0||n<0&&i<0)}function y(t){var e=t.getLabelModel().get("formatter"),n="category"===t.type?t.scale.getExtent()[0]:null;return"string"===typeof e?(e=function(e){return function(n){return n=t.scale.getLabel(n),e.replace("{value}",null!=n?n:"")}}(e),e):"function"===typeof e?function(i,a){return null!=n&&(a=i-n),e(b(t,i),a)}:function(e){return t.scale.getLabel(e)}}function b(t,e){return"category"===t.type?t.scale.getLabel(e):e}function M(t){var e=t.model,n=t.scale;if(e.get("axisLabel.show")&&!n.isBlank()){var i,a,o="category"===t.type,r=n.getExtent();o?a=n.count():(i=n.getTicks(),a=i.length);var s,l=t.getLabelModel(),c=y(t),u=1;a>40&&(u=Math.ceil(a/40));for(var h=0;h<a;h+=u){var d=i?i[h]:r[0]+h,g=c(d),f=l.getTextRect(g),x=A(f,l.get("rotate")||0);s?s.union(x):s=x}return s}}function A(t,e){var n=e*Math.PI/180,i=t.plain(),a=i.width,o=i.height,r=a*Math.cos(n)+o*Math.sin(n),s=a*Math.sin(n)+o*Math.cos(n),l=new g(i.x,i.y,r,s);return l}function L(t){var e=t.get("interval");return null==e?"auto":e}function _(t){return"category"===t.type&&0===L(t.getLabelModel())}n("216a"),n("8c2a"),e.getScaleExtent=f,e.niceScaleExtent=p,e.createScaleByModel=v,e.ifAxisCrossZero=m,e.makeLabelFormatter=y,e.getAxisRawValue=b,e.estimateLabelUnionRect=M,e.getOptionCategoryInterval=L,e.shouldShowAllLabels=_},"71ad":function(t,e,n){var i=n("6d8b"),a={show:!0,zlevel:0,z:0,inverse:!1,name:"",nameLocation:"end",nameRotate:null,nameTruncate:{maxWidth:null,ellipsis:"...",placeholder:"."},nameTextStyle:{},nameGap:15,silent:!1,triggerEvent:!1,tooltip:{show:!1},axisPointer:{},axisLine:{show:!0,onZero:!0,onZeroAxisIndex:null,lineStyle:{color:"#333",width:1,type:"solid"},symbol:["none","none"],symbolSize:[10,15]},axisTick:{show:!0,inside:!1,length:5,lineStyle:{width:1}},axisLabel:{show:!0,inside:!1,rotate:0,showMinLabel:null,showMaxLabel:null,margin:8,fontSize:12},splitLine:{show:!0,lineStyle:{color:["#ccc"],width:1,type:"solid"}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},o={};o.categoryAxis=i.merge({boundaryGap:!0,deduplication:null,splitLine:{show:!1},axisTick:{alignWithLabel:!1,interval:"auto"},axisLabel:{interval:"auto"}},a),o.valueAxis=i.merge({boundaryGap:[0,0],splitNumber:5,minorTick:{show:!1,splitNumber:5,length:3,lineStyle:{}},minorSplitLine:{show:!1,lineStyle:{color:"#eee",width:1}}},a),o.timeAxis=i.defaults({scale:!0,min:"dataMin",max:"dataMax"},o.valueAxis),o.logAxis=i.defaults({scale:!0,logBase:10},o.valueAxis);var r=o;t.exports=r},7887:function(t,e,n){var i=n("6d8b"),a=n("84ce");function o(t,e,n){a.call(this,t,e,n),this.type="value",this.angle=0,this.name="",this.model}i.inherits(o,a);var r=o;t.exports=r},"84ce":function(t,e,n){var i=n("6d8b"),a=i.each,o=i.map,r=n("3842"),s=r.linearMap,l=r.getPixelPrecision,c=r.round,u=n("e073"),h=u.createAxisTicks,d=u.createAxisLabels,g=u.calculateCategoryInterval,f=[0,1],x=function(t,e,n){this.dim=t,this.scale=e,this._extent=n||[0,0],this.inverse=!1,this.onBand=!1};function p(t,e){var n=t[1]-t[0],i=e,a=n/i/2;t[0]+=a,t[1]-=a}function v(t,e,n,i){var o=e.length;if(t.onBand&&!n&&o){var r,s,l=t.getExtent();if(1===o)e[0].coord=l[0],r=e[1]={coord:l[0]};else{var u=e[o-1].tickValue-e[0].tickValue,h=(e[o-1].coord-e[0].coord)/u;a(e,(function(t){t.coord-=h/2}));var d=t.scale.getExtent();s=1+d[1]-e[o-1].tickValue,r={coord:e[o-1].coord+h*s},e.push(r)}var g=l[0]>l[1];f(e[0].coord,l[0])&&(i?e[0].coord=l[0]:e.shift()),i&&f(l[0],e[0].coord)&&e.unshift({coord:l[0]}),f(l[1],r.coord)&&(i?r.coord=l[1]:e.pop()),i&&f(r.coord,l[1])&&e.push({coord:l[1]})}function f(t,e){return t=c(t),e=c(e),g?t>e:t<e}}x.prototype={constructor:x,contain:function(t){var e=this._extent,n=Math.min(e[0],e[1]),i=Math.max(e[0],e[1]);return t>=n&&t<=i},containData:function(t){return this.scale.contain(t)},getExtent:function(){return this._extent.slice()},getPixelPrecision:function(t){return l(t||this.scale.getExtent(),this._extent)},setExtent:function(t,e){var n=this._extent;n[0]=t,n[1]=e},dataToCoord:function(t,e){var n=this._extent,i=this.scale;return t=i.normalize(t),this.onBand&&"ordinal"===i.type&&(n=n.slice(),p(n,i.count())),s(t,f,n,e)},coordToData:function(t,e){var n=this._extent,i=this.scale;this.onBand&&"ordinal"===i.type&&(n=n.slice(),p(n,i.count()));var a=s(t,n,f,e);return this.scale.scale(a)},pointToData:function(t,e){},getTicksCoords:function(t){t=t||{};var e=t.tickModel||this.getTickModel(),n=h(this,e),i=n.ticks,a=o(i,(function(t){return{coord:this.dataToCoord(t),tickValue:t}}),this),r=e.get("alignWithLabel");return v(this,a,r,t.clamp),a},getMinorTicksCoords:function(){if("ordinal"===this.scale.type)return[];var t=this.model.getModel("minorTick"),e=t.get("splitNumber");e>0&&e<100||(e=5);var n=this.scale.getMinorTicks(e),i=o(n,(function(t){return o(t,(function(t){return{coord:this.dataToCoord(t),tickValue:t}}),this)}),this);return i},getViewLabels:function(){return d(this).labels},getLabelModel:function(){return this.model.getModel("axisLabel")},getTickModel:function(){return this.model.getModel("axisTick")},getBandWidth:function(){var t=this._extent,e=this.scale.getExtent(),n=e[1]-e[0]+(this.onBand?1:0);0===n&&(n=1);var i=Math.abs(t[1]-t[0]);return Math.abs(i)/n},isHorizontal:null,getRotate:null,calculateCategoryInterval:function(){return g(this)}};var m=x;t.exports=m},"8ed2":function(t,e,n){n("48c7");var i=n("6cb7"),a=i.extend({type:"grid",dependencies:["xAxis","yAxis"],layoutMode:"box",coordinateSystem:null,defaultOption:{show:!1,zlevel:0,z:0,left:"10%",top:60,right:"10%",bottom:60,containLabel:!1,backgroundColor:"rgba(0,0,0,0)",borderWidth:1,borderColor:"#ccc"}});t.exports=a},"9e47":function(t,e,n){var i=n("6d8b"),a=n("71ad"),o=n("6cb7"),r=n("f934"),s=r.getLayoutParams,l=r.mergeLayoutParam,c=n("8e43"),u=["value","category","time","log"];function h(t,e,n,r){i.each(u,(function(o){e.extend({type:t+"Axis."+o,mergeDefaultAndTheme:function(e,a){var r=this.layoutMode,c=r?s(e):{},u=a.getTheme();i.merge(e,u.get(o+"Axis")),i.merge(e,this.getDefaultOption()),e.type=n(t,e),r&&l(e,c,r)},optionUpdated:function(){var t=this.option;"category"===t.type&&(this.__ordinalMeta=c.createByAxisModel(this))},getCategories:function(t){var e=this.option;if("category"===e.type)return t?e.data:this.__ordinalMeta.categories},getOrdinalMeta:function(){return this.__ordinalMeta},defaultOption:i.mergeAll([{},a[o+"Axis"],r],!0)})})),o.registerSubTypeDefaulter(t+"Axis",i.curry(n,t))}t.exports=h},bda7:function(t,e,n){var i=n("6d8b"),a=n("f279");function o(t){if(!t.UTF8Encoding)return t;var e=t.UTF8Scale;null==e&&(e=1024);for(var n=t.features,i=0;i<n.length;i++)for(var a=n[i],o=a.geometry,s=o.coordinates,l=o.encodeOffsets,c=0;c<s.length;c++){var u=s[c];if("Polygon"===o.type)s[c]=r(u,l[c],e);else if("MultiPolygon"===o.type)for(var h=0;h<u.length;h++){var d=u[h];u[h]=r(d,l[c][h],e)}}return t.UTF8Encoding=!1,t}function r(t,e,n){for(var i=[],a=e[0],o=e[1],r=0;r<t.length;r+=2){var s=t.charCodeAt(r)-64,l=t.charCodeAt(r+1)-64;s=s>>1^-(1&s),l=l>>1^-(1&l),s+=a,l+=o,a=s,o=l,i.push([s/n,l/n])}return i}function s(t,e){return o(t),i.map(i.filter(t.features,(function(t){return t.geometry&&t.properties&&t.geometry.coordinates.length>0})),(function(t){var n=t.properties,o=t.geometry,r=o.coordinates,s=[];"Polygon"===o.type&&s.push({type:"polygon",exterior:r[0],interiors:r.slice(1)}),"MultiPolygon"===o.type&&i.each(r,(function(t){t[0]&&s.push({type:"polygon",exterior:t[0],interiors:t.slice(1)})}));var l=new a(n[e||"name"],s,n.cp);return l.properties=n,l}))}t.exports=s},cbe9:function(t,e,n){var i=n("6d8b"),a=n("9850"),o=n("cf7e");function r(t){o.call(this,t)}r.prototype={constructor:r,type:"cartesian2d",dimensions:["x","y"],getBaseAxis:function(){return this.getAxesByScale("ordinal")[0]||this.getAxesByScale("time")[0]||this.getAxis("x")},containPoint:function(t){var e=this.getAxis("x"),n=this.getAxis("y");return e.contain(e.toLocalCoord(t[0]))&&n.contain(n.toLocalCoord(t[1]))},containData:function(t){return this.getAxis("x").containData(t[0])&&this.getAxis("y").containData(t[1])},dataToPoint:function(t,e,n){var i=this.getAxis("x"),a=this.getAxis("y");return n=n||[],n[0]=i.toGlobalCoord(i.dataToCoord(t[0])),n[1]=a.toGlobalCoord(a.dataToCoord(t[1])),n},clampData:function(t,e){var n=this.getAxis("x").scale,i=this.getAxis("y").scale,a=n.getExtent(),o=i.getExtent(),r=n.parse(t[0]),s=i.parse(t[1]);return e=e||[],e[0]=Math.min(Math.max(Math.min(a[0],a[1]),r),Math.max(a[0],a[1])),e[1]=Math.min(Math.max(Math.min(o[0],o[1]),s),Math.max(o[0],o[1])),e},pointToData:function(t,e){var n=this.getAxis("x"),i=this.getAxis("y");return e=e||[],e[0]=n.coordToData(n.toLocalCoord(t[0])),e[1]=i.coordToData(i.toLocalCoord(t[1])),e},getOtherAxis:function(t){return this.getAxis("x"===t.dim?"y":"x")},getArea:function(){var t=this.getAxis("x").getGlobalExtent(),e=this.getAxis("y").getGlobalExtent(),n=Math.min(t[0],t[1]),i=Math.min(e[0],e[1]),o=Math.max(t[0],t[1])-n,r=Math.max(e[0],e[1])-i,s=new a(n,i,o,r);return s}},i.inherits(r,o);var s=r;t.exports=s},cf7e:function(t,e,n){var i=n("6d8b");function a(t){return this._axes[t]}var o=function(t){this._axes={},this._dimList=[],this.name=t||""};o.prototype={constructor:o,type:"cartesian",getAxis:function(t){return this._axes[t]},getAxes:function(){return i.map(this._dimList,a,this)},getAxesByScale:function(t){return t=t.toLowerCase(),i.filter(this.getAxes(),(function(e){return e.scale.type===t}))},addAxis:function(t){var e=t.dim;this._axes[e]=t,this._dimList.push(e)},dataToCoord:function(t){return this._dataCoordConvert(t,"dataToCoord")},coordToData:function(t){return this._dataCoordConvert(t,"coordToData")},_dataCoordConvert:function(t,e){for(var n=this._dimList,i=t instanceof Array?[]:{},a=0;a<n.length;a++){var o=n[a],r=this._axes[o];i[o]=r[e](t[o])}return i}};var r=o;t.exports=r},e073:function(t,e,n){var i=n("6d8b"),a=n("e86a"),o=n("e0d3"),r=o.makeInner,s=n("697e"),l=s.makeLabelFormatter,c=s.getOptionCategoryInterval,u=s.shouldShowAllLabels,h=r();function d(t){return"category"===t.type?f(t):v(t)}function g(t,e){return"category"===t.type?p(t,e):{ticks:t.scale.getTicks()}}function f(t){var e=t.getLabelModel(),n=x(t,e);return!e.get("show")||t.scale.isBlank()?{labels:[],labelCategoryInterval:n.labelCategoryInterval}:n}function x(t,e){var n,a,o=m(t,"labels"),r=c(e),s=y(o,r);return s||(i.isFunction(r)?n=C(t,r):(a="auto"===r?M(t):r,n=_(t,a)),b(o,r,{labels:n,labelCategoryInterval:a}))}function p(t,e){var n,a,o=m(t,"ticks"),r=c(e),s=y(o,r);if(s)return s;if(e.get("show")&&!t.scale.isBlank()||(n=[]),i.isFunction(r))n=C(t,r,!0);else if("auto"===r){var l=x(t,t.getLabelModel());a=l.labelCategoryInterval,n=i.map(l.labels,(function(t){return t.tickValue}))}else a=r,n=_(t,a,!0);return b(o,r,{ticks:n,tickCategoryInterval:a})}function v(t){var e=t.scale.getTicks(),n=l(t);return{labels:i.map(e,(function(e,i){return{formattedLabel:n(e,i),rawLabel:t.scale.getLabel(e),tickValue:e}}))}}function m(t,e){return h(t)[e]||(h(t)[e]=[])}function y(t,e){for(var n=0;n<t.length;n++)if(t[n].key===e)return t[n].value}function b(t,e,n){return t.push({key:e,value:n}),n}function M(t){var e=h(t).autoInterval;return null!=e?e:h(t).autoInterval=t.calculateCategoryInterval()}function A(t){var e=L(t),n=l(t),i=(e.axisRotate-e.labelRotate)/180*Math.PI,o=t.scale,r=o.getExtent(),s=o.count();if(r[1]-r[0]<1)return 0;var c=1;s>40&&(c=Math.max(1,Math.floor(s/40)));for(var u=r[0],d=t.dataToCoord(u+1)-t.dataToCoord(u),g=Math.abs(d*Math.cos(i)),f=Math.abs(d*Math.sin(i)),x=0,p=0;u<=r[1];u+=c){var v=0,m=0,y=a.getBoundingRect(n(u),e.font,"center","top");v=1.3*y.width,m=1.3*y.height,x=Math.max(x,v,7),p=Math.max(p,m,7)}var b=x/g,M=p/f;isNaN(b)&&(b=1/0),isNaN(M)&&(M=1/0);var A=Math.max(0,Math.floor(Math.min(b,M))),_=h(t.model),C=t.getExtent(),T=_.lastAutoInterval,w=_.lastTickCount;return null!=T&&null!=w&&Math.abs(T-A)<=1&&Math.abs(w-s)<=1&&T>A&&_.axisExtend0===C[0]&&_.axisExtend1===C[1]?A=T:(_.lastTickCount=s,_.lastAutoInterval=A,_.axisExtend0=C[0],_.axisExtend1=C[1]),A}function L(t){var e=t.getLabelModel();return{axisRotate:t.getRotate?t.getRotate():t.isHorizontal&&!t.isHorizontal()?90:0,labelRotate:e.get("rotate")||0,font:e.getFont()}}function _(t,e,n){var i=l(t),a=t.scale,o=a.getExtent(),r=t.getLabelModel(),s=[],c=Math.max((e||0)+1,1),h=o[0],d=a.count();0!==h&&c>1&&d/c>2&&(h=Math.round(Math.ceil(h/c)*c));var g=u(t),f=r.get("showMinLabel")||g,x=r.get("showMaxLabel")||g;f&&h!==o[0]&&v(o[0]);for(var p=h;p<=o[1];p+=c)v(p);function v(t){s.push(n?t:{formattedLabel:i(t),rawLabel:a.getLabel(t),tickValue:t})}return x&&p-c!==o[1]&&v(o[1]),s}function C(t,e,n){var a=t.scale,o=l(t),r=[];return i.each(a.getTicks(),(function(t){var i=a.getLabel(t);e(t,i)&&r.push(n?t:{formattedLabel:o(t),rawLabel:i,tickValue:t})})),r}e.createAxisLabels=d,e.createAxisTicks=g,e.calculateCategoryInterval=A},ec02:function(t,e,n){var i=n("6d8b"),a=n("84ce"),o=function(t,e,n,i,o){a.call(this,t,e,n),this.type=i||"value",this.position=o||"bottom"};o.prototype={constructor:o,index:0,getAxesOnZeroOf:null,model:null,isHorizontal:function(){var t=this.position;return"top"===t||"bottom"===t},getGlobalExtent:function(t){var e=this.getExtent();return e[0]=this.toGlobalCoord(e[0]),e[1]=this.toGlobalCoord(e[1]),t&&e[0]>e[1]&&e.reverse(),e},getOtherAxis:function(){this.grid.getOtherAxis()},pointToData:function(t,e){return this.coordToData(this.toLocalCoord(t["x"===this.dim?0:1]),e)},toLocalCoord:null,toGlobalCoord:null},i.inherits(o,a);var r=o;t.exports=r},ec34:function(t,e,n){var i=n("4e08"),a=(i.__DEV__,n("6d8b")),o=a.createHashMap,r=a.isString,s=a.isArray,l=a.each,c=(a.assert,n("3041")),u=c.parseXML,h=o(),d={registerMap:function(t,e,n){var i;return s(e)?i=e:e.svg?i=[{type:"svg",source:e.svg,specialAreas:e.specialAreas}]:(e.geoJson&&!e.features&&(n=e.specialAreas,e=e.geoJson),i=[{type:"geoJSON",source:e,specialAreas:n}]),l(i,(function(t){var e=t.type;"geoJson"===e&&(e=t.type="geoJSON");var n=g[e];n(t)})),h.set(t,i)},retrieveMap:function(t){return h.get(t)}},g={geoJSON:function(t){var e=t.source;t.geoJSON=r(e)?"undefined"!==typeof JSON&&JSON.parse?JSON.parse(e):new Function("return ("+e+");")():e},svg:function(t){t.svgXML=u(t.source)}};t.exports=d},f279:function(t,e,n){var i=n("9850"),a=n("e263"),o=n("401b"),r=n("0655");function s(t,e,n){if(this.name=t,this.geometries=e,n)n=[n[0],n[1]];else{var i=this.getBoundingRect();n=[i.x+i.width/2,i.y+i.height/2]}this.center=n}s.prototype={constructor:s,properties:null,getBoundingRect:function(){var t=this._rect;if(t)return t;for(var e=Number.MAX_VALUE,n=[e,e],r=[-e,-e],s=[],l=[],c=this.geometries,u=0;u<c.length;u++)if("polygon"===c[u].type){var h=c[u].exterior;a.fromPoints(h,s,l),o.min(n,n,s),o.max(r,r,l)}return 0===u&&(n[0]=n[1]=r[0]=r[1]=0),this._rect=new i(n[0],n[1],r[0]-n[0],r[1]-n[1])},contain:function(t){var e=this.getBoundingRect(),n=this.geometries;if(!e.contain(t[0],t[1]))return!1;t:for(var i=0,a=n.length;i<a;i++)if("polygon"===n[i].type){var o=n[i].exterior,s=n[i].interiors;if(r.contain(o,t[0],t[1])){for(var l=0;l<(s?s.length:0);l++)if(r.contain(s[l]))continue t;return!0}}return!1},transformTo:function(t,e,n,a){var r=this.getBoundingRect(),s=r.width/r.height;n?a||(a=n/s):n=s*a;for(var l=new i(t,e,n,a),c=r.calculateTransform(l),u=this.geometries,h=0;h<u.length;h++)if("polygon"===u[h].type){for(var d=u[h].exterior,g=u[h].interiors,f=0;f<d.length;f++)o.applyTransform(d[f],d[f],c);for(var x=0;x<(g?g.length:0);x++)for(f=0;f<g[x].length;f++)o.applyTransform(g[x][f],g[x][f],c)}r=this._rect,r.copy(l),this.center=[r.x+r.width/2,r.y+r.height/2]},cloneShallow:function(t){null==t&&(t=this.name);var e=new s(t,this.geometries,this.center);return e._rect=this._rect,e.transformTo=null,e}};var l=s;t.exports=l}}]);