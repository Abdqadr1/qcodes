import{_ as hQ,a as fQ,b as kA,d as lr}from"./axios-1fc8c87e.js";function mQ(s,a){for(var d=0;d<a.length;d++){const h=a[d];if(typeof h!="string"&&!Array.isArray(h)){for(const f in h)if(f!=="default"&&!(f in s)){const k=Object.getOwnPropertyDescriptor(h,f);k&&Object.defineProperty(s,f,k.get?k:{enumerable:!0,get:()=>h[f]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}window._=hQ;window.axios=fQ;window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";var zc={},gQ={get exports(){return zc},set exports(s){zc=s}},Mf={},oe={},pQ={get exports(){return oe},set exports(s){oe=s}},Ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nd=Symbol.for("react.element"),kQ=Symbol.for("react.portal"),bQ=Symbol.for("react.fragment"),wQ=Symbol.for("react.strict_mode"),vQ=Symbol.for("react.profiler"),AQ=Symbol.for("react.provider"),CQ=Symbol.for("react.context"),_Q=Symbol.for("react.forward_ref"),yQ=Symbol.for("react.suspense"),xQ=Symbol.for("react.memo"),EQ=Symbol.for("react.lazy"),WS=Symbol.iterator;function SQ(s){return s===null||typeof s!="object"?null:(s=WS&&s[WS]||s["@@iterator"],typeof s=="function"?s:null)}var BT={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},LT=Object.assign,zT={};function Ga(s,a,d){this.props=s,this.context=a,this.refs=zT,this.updater=d||BT}Ga.prototype.isReactComponent={};Ga.prototype.setState=function(s,a){if(typeof s!="object"&&typeof s!="function"&&s!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,s,a,"setState")};Ga.prototype.forceUpdate=function(s){this.updater.enqueueForceUpdate(this,s,"forceUpdate")};function NT(){}NT.prototype=Ga.prototype;function bA(s,a,d){this.props=s,this.context=a,this.refs=zT,this.updater=d||BT}var wA=bA.prototype=new NT;wA.constructor=bA;LT(wA,Ga.prototype);wA.isPureReactComponent=!0;var GS=Array.isArray,PT=Object.prototype.hasOwnProperty,vA={current:null},RT={key:!0,ref:!0,__self:!0,__source:!0};function OT(s,a,d){var h,f={},k=null,b=null;if(a!=null)for(h in a.ref!==void 0&&(b=a.ref),a.key!==void 0&&(k=""+a.key),a)PT.call(a,h)&&!RT.hasOwnProperty(h)&&(f[h]=a[h]);var v=arguments.length-2;if(v===1)f.children=d;else if(1<v){for(var g=Array(v),A=0;A<v;A++)g[A]=arguments[A+2];f.children=g}if(s&&s.defaultProps)for(h in v=s.defaultProps,v)f[h]===void 0&&(f[h]=v[h]);return{$$typeof:nd,type:s,key:k,ref:b,props:f,_owner:vA.current}}function DQ(s,a){return{$$typeof:nd,type:s.type,key:a,ref:s.ref,props:s.props,_owner:s._owner}}function AA(s){return typeof s=="object"&&s!==null&&s.$$typeof===nd}function TQ(s){var a={"=":"=0",":":"=2"};return"$"+s.replace(/[=:]/g,function(d){return a[d]})}var qS=/\/+/g;function jw(s,a){return typeof s=="object"&&s!==null&&s.key!=null?TQ(""+s.key):a.toString(36)}function Oh(s,a,d,h,f){var k=typeof s;(k==="undefined"||k==="boolean")&&(s=null);var b=!1;if(s===null)b=!0;else switch(k){case"string":case"number":b=!0;break;case"object":switch(s.$$typeof){case nd:case kQ:b=!0}}if(b)return b=s,f=f(b),s=h===""?"."+jw(b,0):h,GS(f)?(d="",s!=null&&(d=s.replace(qS,"$&/")+"/"),Oh(f,a,d,"",function(A){return A})):f!=null&&(AA(f)&&(f=DQ(f,d+(!f.key||b&&b.key===f.key?"":(""+f.key).replace(qS,"$&/")+"/")+s)),a.push(f)),1;if(b=0,h=h===""?".":h+":",GS(s))for(var v=0;v<s.length;v++){k=s[v];var g=h+jw(k,v);b+=Oh(k,a,d,g,f)}else if(g=SQ(s),typeof g=="function")for(s=g.call(s),v=0;!(k=s.next()).done;)k=k.value,g=h+jw(k,v++),b+=Oh(k,a,d,g,f);else if(k==="object")throw a=String(s),Error("Objects are not valid as a React child (found: "+(a==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":a)+"). If you meant to render a collection of children, use an array instead.");return b}function wh(s,a,d){if(s==null)return s;var h=[],f=0;return Oh(s,h,"","",function(k){return a.call(d,k,f++)}),h}function IQ(s){if(s._status===-1){var a=s._result;a=a(),a.then(function(d){(s._status===0||s._status===-1)&&(s._status=1,s._result=d)},function(d){(s._status===0||s._status===-1)&&(s._status=2,s._result=d)}),s._status===-1&&(s._status=0,s._result=a)}if(s._status===1)return s._result.default;throw s._result}var wn={current:null},jh={transition:null},MQ={ReactCurrentDispatcher:wn,ReactCurrentBatchConfig:jh,ReactCurrentOwner:vA};Ie.Children={map:wh,forEach:function(s,a,d){wh(s,function(){a.apply(this,arguments)},d)},count:function(s){var a=0;return wh(s,function(){a++}),a},toArray:function(s){return wh(s,function(a){return a})||[]},only:function(s){if(!AA(s))throw Error("React.Children.only expected to receive a single React element child.");return s}};Ie.Component=Ga;Ie.Fragment=bQ;Ie.Profiler=vQ;Ie.PureComponent=bA;Ie.StrictMode=wQ;Ie.Suspense=yQ;Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=MQ;Ie.cloneElement=function(s,a,d){if(s==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+s+".");var h=LT({},s.props),f=s.key,k=s.ref,b=s._owner;if(a!=null){if(a.ref!==void 0&&(k=a.ref,b=vA.current),a.key!==void 0&&(f=""+a.key),s.type&&s.type.defaultProps)var v=s.type.defaultProps;for(g in a)PT.call(a,g)&&!RT.hasOwnProperty(g)&&(h[g]=a[g]===void 0&&v!==void 0?v[g]:a[g])}var g=arguments.length-2;if(g===1)h.children=d;else if(1<g){v=Array(g);for(var A=0;A<g;A++)v[A]=arguments[A+2];h.children=v}return{$$typeof:nd,type:s.type,key:f,ref:k,props:h,_owner:b}};Ie.createContext=function(s){return s={$$typeof:CQ,_currentValue:s,_currentValue2:s,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},s.Provider={$$typeof:AQ,_context:s},s.Consumer=s};Ie.createElement=OT;Ie.createFactory=function(s){var a=OT.bind(null,s);return a.type=s,a};Ie.createRef=function(){return{current:null}};Ie.forwardRef=function(s){return{$$typeof:_Q,render:s}};Ie.isValidElement=AA;Ie.lazy=function(s){return{$$typeof:EQ,_payload:{_status:-1,_result:s},_init:IQ}};Ie.memo=function(s,a){return{$$typeof:xQ,type:s,compare:a===void 0?null:a}};Ie.startTransition=function(s){var a=jh.transition;jh.transition={};try{s()}finally{jh.transition=a}};Ie.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Ie.useCallback=function(s,a){return wn.current.useCallback(s,a)};Ie.useContext=function(s){return wn.current.useContext(s)};Ie.useDebugValue=function(){};Ie.useDeferredValue=function(s){return wn.current.useDeferredValue(s)};Ie.useEffect=function(s,a){return wn.current.useEffect(s,a)};Ie.useId=function(){return wn.current.useId()};Ie.useImperativeHandle=function(s,a,d){return wn.current.useImperativeHandle(s,a,d)};Ie.useInsertionEffect=function(s,a){return wn.current.useInsertionEffect(s,a)};Ie.useLayoutEffect=function(s,a){return wn.current.useLayoutEffect(s,a)};Ie.useMemo=function(s,a){return wn.current.useMemo(s,a)};Ie.useReducer=function(s,a,d){return wn.current.useReducer(s,a,d)};Ie.useRef=function(s){return wn.current.useRef(s)};Ie.useState=function(s){return wn.current.useState(s)};Ie.useSyncExternalStore=function(s,a,d){return wn.current.useSyncExternalStore(s,a,d)};Ie.useTransition=function(){return wn.current.useTransition()};Ie.version="18.2.0";(function(s){s.exports=Ie})(pQ);const pa=kA(oe),KS=mQ({__proto__:null,default:pa},[oe]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var BQ=oe,LQ=Symbol.for("react.element"),zQ=Symbol.for("react.fragment"),NQ=Object.prototype.hasOwnProperty,PQ=BQ.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,RQ={key:!0,ref:!0,__self:!0,__source:!0};function jT(s,a,d){var h,f={},k=null,b=null;d!==void 0&&(k=""+d),a.key!==void 0&&(k=""+a.key),a.ref!==void 0&&(b=a.ref);for(h in a)NQ.call(a,h)&&!RQ.hasOwnProperty(h)&&(f[h]=a[h]);if(s&&s.defaultProps)for(h in a=s.defaultProps,a)f[h]===void 0&&(f[h]=a[h]);return{$$typeof:LQ,type:s,key:k,ref:b,props:f,_owner:PQ.current}}Mf.Fragment=zQ;Mf.jsx=jT;Mf.jsxs=jT;(function(s){s.exports=Mf})(gQ);const OQ=zc.Fragment,Je=zc.jsx,Bf=zc.jsxs,tre=Object.freeze(Object.defineProperty({__proto__:null,Fragment:OQ,jsx:Je,jsxs:Bf},Symbol.toStringTag,{value:"Module"}));var YS={},Xh={},jQ={get exports(){return Xh},set exports(s){Xh=s}},Yn={},mv={},FQ={get exports(){return mv},set exports(s){mv=s}},FT={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(s){function a(ie,M){var re=ie.length;ie.push(M);e:for(;0<re;){var qe=re-1>>>1,dt=ie[qe];if(0<f(dt,M))ie[qe]=M,ie[re]=dt,re=qe;else break e}}function d(ie){return ie.length===0?null:ie[0]}function h(ie){if(ie.length===0)return null;var M=ie[0],re=ie.pop();if(re!==M){ie[0]=re;e:for(var qe=0,dt=ie.length,zi=dt>>>1;qe<zi;){var Rt=2*(qe+1)-1,Ln=ie[Rt],It=Rt+1,mn=ie[It];if(0>f(Ln,re))It<dt&&0>f(mn,Ln)?(ie[qe]=mn,ie[It]=re,qe=It):(ie[qe]=Ln,ie[Rt]=re,qe=Rt);else if(It<dt&&0>f(mn,re))ie[qe]=mn,ie[It]=re,qe=It;else break e}}return M}function f(ie,M){var re=ie.sortIndex-M.sortIndex;return re!==0?re:ie.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var k=performance;s.unstable_now=function(){return k.now()}}else{var b=Date,v=b.now();s.unstable_now=function(){return b.now()-v}}var g=[],A=[],x=1,y=null,E=3,_=!1,D=!1,O=!1,Q=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(ie){for(var M=d(A);M!==null;){if(M.callback===null)h(A);else if(M.startTime<=ie)h(A),M.sortIndex=M.expirationTime,a(g,M);else break;M=d(A)}}function F(ie){if(O=!1,R(ie),!D)if(d(g)!==null)D=!0,Me(q);else{var M=d(A);M!==null&&Vt(F,M.startTime-ie)}}function q(ie,M){D=!1,O&&(O=!1,N(K),K=-1),_=!0;var re=E;try{for(R(M),y=d(g);y!==null&&(!(y.expirationTime>M)||ie&&!ce());){var qe=y.callback;if(typeof qe=="function"){y.callback=null,E=y.priorityLevel;var dt=qe(y.expirationTime<=M);M=s.unstable_now(),typeof dt=="function"?y.callback=dt:y===d(g)&&h(g),R(M)}else h(g);y=d(g)}if(y!==null)var zi=!0;else{var Rt=d(A);Rt!==null&&Vt(F,Rt.startTime-M),zi=!1}return zi}finally{y=null,E=re,_=!1}}var $=!1,U=null,K=-1,ee=5,Y=-1;function ce(){return!(s.unstable_now()-Y<ee)}function be(){if(U!==null){var ie=s.unstable_now();Y=ie;var M=!0;try{M=U(!0,ie)}finally{M?ge():($=!1,U=null)}}else $=!1}var ge;if(typeof L=="function")ge=function(){L(be)};else if(typeof MessageChannel<"u"){var we=new MessageChannel,_t=we.port2;we.port1.onmessage=be,ge=function(){_t.postMessage(null)}}else ge=function(){Q(be,0)};function Me(ie){U=ie,$||($=!0,ge())}function Vt(ie,M){K=Q(function(){ie(s.unstable_now())},M)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(ie){ie.callback=null},s.unstable_continueExecution=function(){D||_||(D=!0,Me(q))},s.unstable_forceFrameRate=function(ie){0>ie||125<ie?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<ie?Math.floor(1e3/ie):5},s.unstable_getCurrentPriorityLevel=function(){return E},s.unstable_getFirstCallbackNode=function(){return d(g)},s.unstable_next=function(ie){switch(E){case 1:case 2:case 3:var M=3;break;default:M=E}var re=E;E=M;try{return ie()}finally{E=re}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(ie,M){switch(ie){case 1:case 2:case 3:case 4:case 5:break;default:ie=3}var re=E;E=ie;try{return M()}finally{E=re}},s.unstable_scheduleCallback=function(ie,M,re){var qe=s.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?qe+re:qe):re=qe,ie){case 1:var dt=-1;break;case 2:dt=250;break;case 5:dt=1073741823;break;case 4:dt=1e4;break;default:dt=5e3}return dt=re+dt,ie={id:x++,callback:M,priorityLevel:ie,startTime:re,expirationTime:dt,sortIndex:-1},re>qe?(ie.sortIndex=re,a(A,ie),d(g)===null&&ie===d(A)&&(O?(N(K),K=-1):O=!0,Vt(F,re-qe))):(ie.sortIndex=dt,a(g,ie),D||_||(D=!0,Me(q))),ie},s.unstable_shouldYield=ce,s.unstable_wrapCallback=function(ie){var M=E;return function(){var re=E;E=M;try{return ie.apply(this,arguments)}finally{E=re}}}})(FT);(function(s){s.exports=FT})(FQ);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var VT=oe,Kn=mv;function X(s){for(var a="https://reactjs.org/docs/error-decoder.html?invariant="+s,d=1;d<arguments.length;d++)a+="&args[]="+encodeURIComponent(arguments[d]);return"Minified React error #"+s+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var HT=new Set,Nc={};function Cs(s,a){Ra(s,a),Ra(s+"Capture",a)}function Ra(s,a){for(Nc[s]=a,s=0;s<a.length;s++)HT.add(a[s])}var Oo=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gv=Object.prototype.hasOwnProperty,VQ=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ZS={},QS={};function HQ(s){return gv.call(QS,s)?!0:gv.call(ZS,s)?!1:VQ.test(s)?QS[s]=!0:(ZS[s]=!0,!1)}function UQ(s,a,d,h){if(d!==null&&d.type===0)return!1;switch(typeof a){case"function":case"symbol":return!0;case"boolean":return h?!1:d!==null?!d.acceptsBooleans:(s=s.toLowerCase().slice(0,5),s!=="data-"&&s!=="aria-");default:return!1}}function $Q(s,a,d,h){if(a===null||typeof a>"u"||UQ(s,a,d,h))return!0;if(h)return!1;if(d!==null)switch(d.type){case 3:return!a;case 4:return a===!1;case 5:return isNaN(a);case 6:return isNaN(a)||1>a}return!1}function vn(s,a,d,h,f,k,b){this.acceptsBooleans=a===2||a===3||a===4,this.attributeName=h,this.attributeNamespace=f,this.mustUseProperty=d,this.propertyName=s,this.type=a,this.sanitizeURL=k,this.removeEmptyString=b}var sn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(s){sn[s]=new vn(s,0,!1,s,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(s){var a=s[0];sn[a]=new vn(a,1,!1,s[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(s){sn[s]=new vn(s,2,!1,s.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(s){sn[s]=new vn(s,2,!1,s,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(s){sn[s]=new vn(s,3,!1,s.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(s){sn[s]=new vn(s,3,!0,s,null,!1,!1)});["capture","download"].forEach(function(s){sn[s]=new vn(s,4,!1,s,null,!1,!1)});["cols","rows","size","span"].forEach(function(s){sn[s]=new vn(s,6,!1,s,null,!1,!1)});["rowSpan","start"].forEach(function(s){sn[s]=new vn(s,5,!1,s.toLowerCase(),null,!1,!1)});var CA=/[\-:]([a-z])/g;function _A(s){return s[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(s){var a=s.replace(CA,_A);sn[a]=new vn(a,1,!1,s,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(s){var a=s.replace(CA,_A);sn[a]=new vn(a,1,!1,s,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(s){var a=s.replace(CA,_A);sn[a]=new vn(a,1,!1,s,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(s){sn[s]=new vn(s,1,!1,s.toLowerCase(),null,!1,!1)});sn.xlinkHref=new vn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(s){sn[s]=new vn(s,1,!1,s.toLowerCase(),null,!0,!0)});function yA(s,a,d,h){var f=sn.hasOwnProperty(a)?sn[a]:null;(f!==null?f.type!==0:h||!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&($Q(a,d,f,h)&&(d=null),h||f===null?HQ(a)&&(d===null?s.removeAttribute(a):s.setAttribute(a,""+d)):f.mustUseProperty?s[f.propertyName]=d===null?f.type===3?!1:"":d:(a=f.attributeName,h=f.attributeNamespace,d===null?s.removeAttribute(a):(f=f.type,d=f===3||f===4&&d===!0?"":""+d,h?s.setAttributeNS(h,a,d):s.setAttribute(a,d))))}var Uo=VT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vh=Symbol.for("react.element"),ka=Symbol.for("react.portal"),ba=Symbol.for("react.fragment"),xA=Symbol.for("react.strict_mode"),pv=Symbol.for("react.profiler"),UT=Symbol.for("react.provider"),$T=Symbol.for("react.context"),EA=Symbol.for("react.forward_ref"),kv=Symbol.for("react.suspense"),bv=Symbol.for("react.suspense_list"),SA=Symbol.for("react.memo"),or=Symbol.for("react.lazy"),WT=Symbol.for("react.offscreen"),JS=Symbol.iterator;function lc(s){return s===null||typeof s!="object"?null:(s=JS&&s[JS]||s["@@iterator"],typeof s=="function"?s:null)}var Ct=Object.assign,Fw;function wc(s){if(Fw===void 0)try{throw Error()}catch(d){var a=d.stack.trim().match(/\n( *(at )?)/);Fw=a&&a[1]||""}return`
`+Fw+s}var Vw=!1;function Hw(s,a){if(!s||Vw)return"";Vw=!0;var d=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(a)if(a=function(){throw Error()},Object.defineProperty(a.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(a,[])}catch(A){var h=A}Reflect.construct(s,[],a)}else{try{a.call()}catch(A){h=A}s.call(a.prototype)}else{try{throw Error()}catch(A){h=A}s()}}catch(A){if(A&&h&&typeof A.stack=="string"){for(var f=A.stack.split(`
`),k=h.stack.split(`
`),b=f.length-1,v=k.length-1;1<=b&&0<=v&&f[b]!==k[v];)v--;for(;1<=b&&0<=v;b--,v--)if(f[b]!==k[v]){if(b!==1||v!==1)do if(b--,v--,0>v||f[b]!==k[v]){var g=`
`+f[b].replace(" at new "," at ");return s.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",s.displayName)),g}while(1<=b&&0<=v);break}}}finally{Vw=!1,Error.prepareStackTrace=d}return(s=s?s.displayName||s.name:"")?wc(s):""}function WQ(s){switch(s.tag){case 5:return wc(s.type);case 16:return wc("Lazy");case 13:return wc("Suspense");case 19:return wc("SuspenseList");case 0:case 2:case 15:return s=Hw(s.type,!1),s;case 11:return s=Hw(s.type.render,!1),s;case 1:return s=Hw(s.type,!0),s;default:return""}}function wv(s){if(s==null)return null;if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s;switch(s){case ba:return"Fragment";case ka:return"Portal";case pv:return"Profiler";case xA:return"StrictMode";case kv:return"Suspense";case bv:return"SuspenseList"}if(typeof s=="object")switch(s.$$typeof){case $T:return(s.displayName||"Context")+".Consumer";case UT:return(s._context.displayName||"Context")+".Provider";case EA:var a=s.render;return s=s.displayName,s||(s=a.displayName||a.name||"",s=s!==""?"ForwardRef("+s+")":"ForwardRef"),s;case SA:return a=s.displayName||null,a!==null?a:wv(s.type)||"Memo";case or:a=s._payload,s=s._init;try{return wv(s(a))}catch{}}return null}function GQ(s){var a=s.type;switch(s.tag){case 24:return"Cache";case 9:return(a.displayName||"Context")+".Consumer";case 10:return(a._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return s=a.render,s=s.displayName||s.name||"",a.displayName||(s!==""?"ForwardRef("+s+")":"ForwardRef");case 7:return"Fragment";case 5:return a;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wv(a);case 8:return a===xA?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a}return null}function wr(s){switch(typeof s){case"boolean":case"number":case"string":case"undefined":return s;case"object":return s;default:return""}}function GT(s){var a=s.type;return(s=s.nodeName)&&s.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function qQ(s){var a=GT(s)?"checked":"value",d=Object.getOwnPropertyDescriptor(s.constructor.prototype,a),h=""+s[a];if(!s.hasOwnProperty(a)&&typeof d<"u"&&typeof d.get=="function"&&typeof d.set=="function"){var f=d.get,k=d.set;return Object.defineProperty(s,a,{configurable:!0,get:function(){return f.call(this)},set:function(b){h=""+b,k.call(this,b)}}),Object.defineProperty(s,a,{enumerable:d.enumerable}),{getValue:function(){return h},setValue:function(b){h=""+b},stopTracking:function(){s._valueTracker=null,delete s[a]}}}}function Ah(s){s._valueTracker||(s._valueTracker=qQ(s))}function qT(s){if(!s)return!1;var a=s._valueTracker;if(!a)return!0;var d=a.getValue(),h="";return s&&(h=GT(s)?s.checked?"true":"false":s.value),s=h,s!==d?(a.setValue(s),!0):!1}function ef(s){if(s=s||(typeof document<"u"?document:void 0),typeof s>"u")return null;try{return s.activeElement||s.body}catch{return s.body}}function vv(s,a){var d=a.checked;return Ct({},a,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:d??s._wrapperState.initialChecked})}function XS(s,a){var d=a.defaultValue==null?"":a.defaultValue,h=a.checked!=null?a.checked:a.defaultChecked;d=wr(a.value!=null?a.value:d),s._wrapperState={initialChecked:h,initialValue:d,controlled:a.type==="checkbox"||a.type==="radio"?a.checked!=null:a.value!=null}}function KT(s,a){a=a.checked,a!=null&&yA(s,"checked",a,!1)}function Av(s,a){KT(s,a);var d=wr(a.value),h=a.type;if(d!=null)h==="number"?(d===0&&s.value===""||s.value!=d)&&(s.value=""+d):s.value!==""+d&&(s.value=""+d);else if(h==="submit"||h==="reset"){s.removeAttribute("value");return}a.hasOwnProperty("value")?Cv(s,a.type,d):a.hasOwnProperty("defaultValue")&&Cv(s,a.type,wr(a.defaultValue)),a.checked==null&&a.defaultChecked!=null&&(s.defaultChecked=!!a.defaultChecked)}function eD(s,a,d){if(a.hasOwnProperty("value")||a.hasOwnProperty("defaultValue")){var h=a.type;if(!(h!=="submit"&&h!=="reset"||a.value!==void 0&&a.value!==null))return;a=""+s._wrapperState.initialValue,d||a===s.value||(s.value=a),s.defaultValue=a}d=s.name,d!==""&&(s.name=""),s.defaultChecked=!!s._wrapperState.initialChecked,d!==""&&(s.name=d)}function Cv(s,a,d){(a!=="number"||ef(s.ownerDocument)!==s)&&(d==null?s.defaultValue=""+s._wrapperState.initialValue:s.defaultValue!==""+d&&(s.defaultValue=""+d))}var vc=Array.isArray;function Ta(s,a,d,h){if(s=s.options,a){a={};for(var f=0;f<d.length;f++)a["$"+d[f]]=!0;for(d=0;d<s.length;d++)f=a.hasOwnProperty("$"+s[d].value),s[d].selected!==f&&(s[d].selected=f),f&&h&&(s[d].defaultSelected=!0)}else{for(d=""+wr(d),a=null,f=0;f<s.length;f++){if(s[f].value===d){s[f].selected=!0,h&&(s[f].defaultSelected=!0);return}a!==null||s[f].disabled||(a=s[f])}a!==null&&(a.selected=!0)}}function _v(s,a){if(a.dangerouslySetInnerHTML!=null)throw Error(X(91));return Ct({},a,{value:void 0,defaultValue:void 0,children:""+s._wrapperState.initialValue})}function tD(s,a){var d=a.value;if(d==null){if(d=a.children,a=a.defaultValue,d!=null){if(a!=null)throw Error(X(92));if(vc(d)){if(1<d.length)throw Error(X(93));d=d[0]}a=d}a==null&&(a=""),d=a}s._wrapperState={initialValue:wr(d)}}function YT(s,a){var d=wr(a.value),h=wr(a.defaultValue);d!=null&&(d=""+d,d!==s.value&&(s.value=d),a.defaultValue==null&&s.defaultValue!==d&&(s.defaultValue=d)),h!=null&&(s.defaultValue=""+h)}function nD(s){var a=s.textContent;a===s._wrapperState.initialValue&&a!==""&&a!==null&&(s.value=a)}function ZT(s){switch(s){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yv(s,a){return s==null||s==="http://www.w3.org/1999/xhtml"?ZT(a):s==="http://www.w3.org/2000/svg"&&a==="foreignObject"?"http://www.w3.org/1999/xhtml":s}var Ch,QT=function(s){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(a,d,h,f){MSApp.execUnsafeLocalFunction(function(){return s(a,d,h,f)})}:s}(function(s,a){if(s.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in s)s.innerHTML=a;else{for(Ch=Ch||document.createElement("div"),Ch.innerHTML="<svg>"+a.valueOf().toString()+"</svg>",a=Ch.firstChild;s.firstChild;)s.removeChild(s.firstChild);for(;a.firstChild;)s.appendChild(a.firstChild)}});function Pc(s,a){if(a){var d=s.firstChild;if(d&&d===s.lastChild&&d.nodeType===3){d.nodeValue=a;return}}s.textContent=a}var _c={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},KQ=["Webkit","ms","Moz","O"];Object.keys(_c).forEach(function(s){KQ.forEach(function(a){a=a+s.charAt(0).toUpperCase()+s.substring(1),_c[a]=_c[s]})});function JT(s,a,d){return a==null||typeof a=="boolean"||a===""?"":d||typeof a!="number"||a===0||_c.hasOwnProperty(s)&&_c[s]?(""+a).trim():a+"px"}function XT(s,a){s=s.style;for(var d in a)if(a.hasOwnProperty(d)){var h=d.indexOf("--")===0,f=JT(d,a[d],h);d==="float"&&(d="cssFloat"),h?s.setProperty(d,f):s[d]=f}}var YQ=Ct({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xv(s,a){if(a){if(YQ[s]&&(a.children!=null||a.dangerouslySetInnerHTML!=null))throw Error(X(137,s));if(a.dangerouslySetInnerHTML!=null){if(a.children!=null)throw Error(X(60));if(typeof a.dangerouslySetInnerHTML!="object"||!("__html"in a.dangerouslySetInnerHTML))throw Error(X(61))}if(a.style!=null&&typeof a.style!="object")throw Error(X(62))}}function Ev(s,a){if(s.indexOf("-")===-1)return typeof a.is=="string";switch(s){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sv=null;function DA(s){return s=s.target||s.srcElement||window,s.correspondingUseElement&&(s=s.correspondingUseElement),s.nodeType===3?s.parentNode:s}var Dv=null,Ia=null,Ma=null;function iD(s){if(s=rd(s)){if(typeof Dv!="function")throw Error(X(280));var a=s.stateNode;a&&(a=Rf(a),Dv(s.stateNode,s.type,a))}}function e4(s){Ia?Ma?Ma.push(s):Ma=[s]:Ia=s}function t4(){if(Ia){var s=Ia,a=Ma;if(Ma=Ia=null,iD(s),a)for(s=0;s<a.length;s++)iD(a[s])}}function n4(s,a){return s(a)}function i4(){}var Uw=!1;function o4(s,a,d){if(Uw)return s(a,d);Uw=!0;try{return n4(s,a,d)}finally{Uw=!1,(Ia!==null||Ma!==null)&&(i4(),t4())}}function Rc(s,a){var d=s.stateNode;if(d===null)return null;var h=Rf(d);if(h===null)return null;d=h[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(s=s.type,h=!(s==="button"||s==="input"||s==="select"||s==="textarea")),s=!h;break e;default:s=!1}if(s)return null;if(d&&typeof d!="function")throw Error(X(231,a,typeof d));return d}var Tv=!1;if(Oo)try{var cc={};Object.defineProperty(cc,"passive",{get:function(){Tv=!0}}),window.addEventListener("test",cc,cc),window.removeEventListener("test",cc,cc)}catch{Tv=!1}function ZQ(s,a,d,h,f,k,b,v,g){var A=Array.prototype.slice.call(arguments,3);try{a.apply(d,A)}catch(x){this.onError(x)}}var yc=!1,tf=null,nf=!1,Iv=null,QQ={onError:function(s){yc=!0,tf=s}};function JQ(s,a,d,h,f,k,b,v,g){yc=!1,tf=null,ZQ.apply(QQ,arguments)}function XQ(s,a,d,h,f,k,b,v,g){if(JQ.apply(this,arguments),yc){if(yc){var A=tf;yc=!1,tf=null}else throw Error(X(198));nf||(nf=!0,Iv=A)}}function _s(s){var a=s,d=s;if(s.alternate)for(;a.return;)a=a.return;else{s=a;do a=s,a.flags&4098&&(d=a.return),s=a.return;while(s)}return a.tag===3?d:null}function r4(s){if(s.tag===13){var a=s.memoizedState;if(a===null&&(s=s.alternate,s!==null&&(a=s.memoizedState)),a!==null)return a.dehydrated}return null}function oD(s){if(_s(s)!==s)throw Error(X(188))}function eJ(s){var a=s.alternate;if(!a){if(a=_s(s),a===null)throw Error(X(188));return a!==s?null:s}for(var d=s,h=a;;){var f=d.return;if(f===null)break;var k=f.alternate;if(k===null){if(h=f.return,h!==null){d=h;continue}break}if(f.child===k.child){for(k=f.child;k;){if(k===d)return oD(f),s;if(k===h)return oD(f),a;k=k.sibling}throw Error(X(188))}if(d.return!==h.return)d=f,h=k;else{for(var b=!1,v=f.child;v;){if(v===d){b=!0,d=f,h=k;break}if(v===h){b=!0,h=f,d=k;break}v=v.sibling}if(!b){for(v=k.child;v;){if(v===d){b=!0,d=k,h=f;break}if(v===h){b=!0,h=k,d=f;break}v=v.sibling}if(!b)throw Error(X(189))}}if(d.alternate!==h)throw Error(X(190))}if(d.tag!==3)throw Error(X(188));return d.stateNode.current===d?s:a}function s4(s){return s=eJ(s),s!==null?a4(s):null}function a4(s){if(s.tag===5||s.tag===6)return s;for(s=s.child;s!==null;){var a=a4(s);if(a!==null)return a;s=s.sibling}return null}var l4=Kn.unstable_scheduleCallback,rD=Kn.unstable_cancelCallback,tJ=Kn.unstable_shouldYield,nJ=Kn.unstable_requestPaint,Lt=Kn.unstable_now,iJ=Kn.unstable_getCurrentPriorityLevel,TA=Kn.unstable_ImmediatePriority,c4=Kn.unstable_UserBlockingPriority,of=Kn.unstable_NormalPriority,oJ=Kn.unstable_LowPriority,d4=Kn.unstable_IdlePriority,Lf=null,io=null;function rJ(s){if(io&&typeof io.onCommitFiberRoot=="function")try{io.onCommitFiberRoot(Lf,s,void 0,(s.current.flags&128)===128)}catch{}}var Mi=Math.clz32?Math.clz32:lJ,sJ=Math.log,aJ=Math.LN2;function lJ(s){return s>>>=0,s===0?32:31-(sJ(s)/aJ|0)|0}var _h=64,yh=4194304;function Ac(s){switch(s&-s){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return s&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return s}}function rf(s,a){var d=s.pendingLanes;if(d===0)return 0;var h=0,f=s.suspendedLanes,k=s.pingedLanes,b=d&268435455;if(b!==0){var v=b&~f;v!==0?h=Ac(v):(k&=b,k!==0&&(h=Ac(k)))}else b=d&~f,b!==0?h=Ac(b):k!==0&&(h=Ac(k));if(h===0)return 0;if(a!==0&&a!==h&&!(a&f)&&(f=h&-h,k=a&-a,f>=k||f===16&&(k&4194240)!==0))return a;if(h&4&&(h|=d&16),a=s.entangledLanes,a!==0)for(s=s.entanglements,a&=h;0<a;)d=31-Mi(a),f=1<<d,h|=s[d],a&=~f;return h}function cJ(s,a){switch(s){case 1:case 2:case 4:return a+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dJ(s,a){for(var d=s.suspendedLanes,h=s.pingedLanes,f=s.expirationTimes,k=s.pendingLanes;0<k;){var b=31-Mi(k),v=1<<b,g=f[b];g===-1?(!(v&d)||v&h)&&(f[b]=cJ(v,a)):g<=a&&(s.expiredLanes|=v),k&=~v}}function Mv(s){return s=s.pendingLanes&-1073741825,s!==0?s:s&1073741824?1073741824:0}function u4(){var s=_h;return _h<<=1,!(_h&4194240)&&(_h=64),s}function $w(s){for(var a=[],d=0;31>d;d++)a.push(s);return a}function id(s,a,d){s.pendingLanes|=a,a!==536870912&&(s.suspendedLanes=0,s.pingedLanes=0),s=s.eventTimes,a=31-Mi(a),s[a]=d}function uJ(s,a){var d=s.pendingLanes&~a;s.pendingLanes=a,s.suspendedLanes=0,s.pingedLanes=0,s.expiredLanes&=a,s.mutableReadLanes&=a,s.entangledLanes&=a,a=s.entanglements;var h=s.eventTimes;for(s=s.expirationTimes;0<d;){var f=31-Mi(d),k=1<<f;a[f]=0,h[f]=-1,s[f]=-1,d&=~k}}function IA(s,a){var d=s.entangledLanes|=a;for(s=s.entanglements;d;){var h=31-Mi(d),f=1<<h;f&a|s[h]&a&&(s[h]|=a),d&=~f}}var We=0;function h4(s){return s&=-s,1<s?4<s?s&268435455?16:536870912:4:1}var f4,MA,m4,g4,p4,Bv=!1,xh=[],ur=null,hr=null,fr=null,Oc=new Map,jc=new Map,sr=[],hJ="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sD(s,a){switch(s){case"focusin":case"focusout":ur=null;break;case"dragenter":case"dragleave":hr=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":Oc.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":jc.delete(a.pointerId)}}function dc(s,a,d,h,f,k){return s===null||s.nativeEvent!==k?(s={blockedOn:a,domEventName:d,eventSystemFlags:h,nativeEvent:k,targetContainers:[f]},a!==null&&(a=rd(a),a!==null&&MA(a)),s):(s.eventSystemFlags|=h,a=s.targetContainers,f!==null&&a.indexOf(f)===-1&&a.push(f),s)}function fJ(s,a,d,h,f){switch(a){case"focusin":return ur=dc(ur,s,a,d,h,f),!0;case"dragenter":return hr=dc(hr,s,a,d,h,f),!0;case"mouseover":return fr=dc(fr,s,a,d,h,f),!0;case"pointerover":var k=f.pointerId;return Oc.set(k,dc(Oc.get(k)||null,s,a,d,h,f)),!0;case"gotpointercapture":return k=f.pointerId,jc.set(k,dc(jc.get(k)||null,s,a,d,h,f)),!0}return!1}function k4(s){var a=ds(s.target);if(a!==null){var d=_s(a);if(d!==null){if(a=d.tag,a===13){if(a=r4(d),a!==null){s.blockedOn=a,p4(s.priority,function(){m4(d)});return}}else if(a===3&&d.stateNode.current.memoizedState.isDehydrated){s.blockedOn=d.tag===3?d.stateNode.containerInfo:null;return}}}s.blockedOn=null}function Fh(s){if(s.blockedOn!==null)return!1;for(var a=s.targetContainers;0<a.length;){var d=Lv(s.domEventName,s.eventSystemFlags,a[0],s.nativeEvent);if(d===null){d=s.nativeEvent;var h=new d.constructor(d.type,d);Sv=h,d.target.dispatchEvent(h),Sv=null}else return a=rd(d),a!==null&&MA(a),s.blockedOn=d,!1;a.shift()}return!0}function aD(s,a,d){Fh(s)&&d.delete(a)}function mJ(){Bv=!1,ur!==null&&Fh(ur)&&(ur=null),hr!==null&&Fh(hr)&&(hr=null),fr!==null&&Fh(fr)&&(fr=null),Oc.forEach(aD),jc.forEach(aD)}function uc(s,a){s.blockedOn===a&&(s.blockedOn=null,Bv||(Bv=!0,Kn.unstable_scheduleCallback(Kn.unstable_NormalPriority,mJ)))}function Fc(s){function a(f){return uc(f,s)}if(0<xh.length){uc(xh[0],s);for(var d=1;d<xh.length;d++){var h=xh[d];h.blockedOn===s&&(h.blockedOn=null)}}for(ur!==null&&uc(ur,s),hr!==null&&uc(hr,s),fr!==null&&uc(fr,s),Oc.forEach(a),jc.forEach(a),d=0;d<sr.length;d++)h=sr[d],h.blockedOn===s&&(h.blockedOn=null);for(;0<sr.length&&(d=sr[0],d.blockedOn===null);)k4(d),d.blockedOn===null&&sr.shift()}var Ba=Uo.ReactCurrentBatchConfig,sf=!0;function gJ(s,a,d,h){var f=We,k=Ba.transition;Ba.transition=null;try{We=1,BA(s,a,d,h)}finally{We=f,Ba.transition=k}}function pJ(s,a,d,h){var f=We,k=Ba.transition;Ba.transition=null;try{We=4,BA(s,a,d,h)}finally{We=f,Ba.transition=k}}function BA(s,a,d,h){if(sf){var f=Lv(s,a,d,h);if(f===null)ev(s,a,h,af,d),sD(s,h);else if(fJ(f,s,a,d,h))h.stopPropagation();else if(sD(s,h),a&4&&-1<hJ.indexOf(s)){for(;f!==null;){var k=rd(f);if(k!==null&&f4(k),k=Lv(s,a,d,h),k===null&&ev(s,a,h,af,d),k===f)break;f=k}f!==null&&h.stopPropagation()}else ev(s,a,h,null,d)}}var af=null;function Lv(s,a,d,h){if(af=null,s=DA(h),s=ds(s),s!==null)if(a=_s(s),a===null)s=null;else if(d=a.tag,d===13){if(s=r4(a),s!==null)return s;s=null}else if(d===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;s=null}else a!==s&&(s=null);return af=s,null}function b4(s){switch(s){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(iJ()){case TA:return 1;case c4:return 4;case of:case oJ:return 16;case d4:return 536870912;default:return 16}default:return 16}}var cr=null,LA=null,Vh=null;function w4(){if(Vh)return Vh;var s,a=LA,d=a.length,h,f="value"in cr?cr.value:cr.textContent,k=f.length;for(s=0;s<d&&a[s]===f[s];s++);var b=d-s;for(h=1;h<=b&&a[d-h]===f[k-h];h++);return Vh=f.slice(s,1<h?1-h:void 0)}function Hh(s){var a=s.keyCode;return"charCode"in s?(s=s.charCode,s===0&&a===13&&(s=13)):s=a,s===10&&(s=13),32<=s||s===13?s:0}function Eh(){return!0}function lD(){return!1}function Zn(s){function a(d,h,f,k,b){this._reactName=d,this._targetInst=f,this.type=h,this.nativeEvent=k,this.target=b,this.currentTarget=null;for(var v in s)s.hasOwnProperty(v)&&(d=s[v],this[v]=d?d(k):k[v]);return this.isDefaultPrevented=(k.defaultPrevented!=null?k.defaultPrevented:k.returnValue===!1)?Eh:lD,this.isPropagationStopped=lD,this}return Ct(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var d=this.nativeEvent;d&&(d.preventDefault?d.preventDefault():typeof d.returnValue!="unknown"&&(d.returnValue=!1),this.isDefaultPrevented=Eh)},stopPropagation:function(){var d=this.nativeEvent;d&&(d.stopPropagation?d.stopPropagation():typeof d.cancelBubble!="unknown"&&(d.cancelBubble=!0),this.isPropagationStopped=Eh)},persist:function(){},isPersistent:Eh}),a}var qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(s){return s.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zA=Zn(qa),od=Ct({},qa,{view:0,detail:0}),kJ=Zn(od),Ww,Gw,hc,zf=Ct({},od,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:NA,button:0,buttons:0,relatedTarget:function(s){return s.relatedTarget===void 0?s.fromElement===s.srcElement?s.toElement:s.fromElement:s.relatedTarget},movementX:function(s){return"movementX"in s?s.movementX:(s!==hc&&(hc&&s.type==="mousemove"?(Ww=s.screenX-hc.screenX,Gw=s.screenY-hc.screenY):Gw=Ww=0,hc=s),Ww)},movementY:function(s){return"movementY"in s?s.movementY:Gw}}),cD=Zn(zf),bJ=Ct({},zf,{dataTransfer:0}),wJ=Zn(bJ),vJ=Ct({},od,{relatedTarget:0}),qw=Zn(vJ),AJ=Ct({},qa,{animationName:0,elapsedTime:0,pseudoElement:0}),CJ=Zn(AJ),_J=Ct({},qa,{clipboardData:function(s){return"clipboardData"in s?s.clipboardData:window.clipboardData}}),yJ=Zn(_J),xJ=Ct({},qa,{data:0}),dD=Zn(xJ),EJ={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},SJ={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},DJ={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function TJ(s){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(s):(s=DJ[s])?!!a[s]:!1}function NA(){return TJ}var IJ=Ct({},od,{key:function(s){if(s.key){var a=EJ[s.key]||s.key;if(a!=="Unidentified")return a}return s.type==="keypress"?(s=Hh(s),s===13?"Enter":String.fromCharCode(s)):s.type==="keydown"||s.type==="keyup"?SJ[s.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:NA,charCode:function(s){return s.type==="keypress"?Hh(s):0},keyCode:function(s){return s.type==="keydown"||s.type==="keyup"?s.keyCode:0},which:function(s){return s.type==="keypress"?Hh(s):s.type==="keydown"||s.type==="keyup"?s.keyCode:0}}),MJ=Zn(IJ),BJ=Ct({},zf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uD=Zn(BJ),LJ=Ct({},od,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:NA}),zJ=Zn(LJ),NJ=Ct({},qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),PJ=Zn(NJ),RJ=Ct({},zf,{deltaX:function(s){return"deltaX"in s?s.deltaX:"wheelDeltaX"in s?-s.wheelDeltaX:0},deltaY:function(s){return"deltaY"in s?s.deltaY:"wheelDeltaY"in s?-s.wheelDeltaY:"wheelDelta"in s?-s.wheelDelta:0},deltaZ:0,deltaMode:0}),OJ=Zn(RJ),jJ=[9,13,27,32],PA=Oo&&"CompositionEvent"in window,xc=null;Oo&&"documentMode"in document&&(xc=document.documentMode);var FJ=Oo&&"TextEvent"in window&&!xc,v4=Oo&&(!PA||xc&&8<xc&&11>=xc),hD=String.fromCharCode(32),fD=!1;function A4(s,a){switch(s){case"keyup":return jJ.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function C4(s){return s=s.detail,typeof s=="object"&&"data"in s?s.data:null}var wa=!1;function VJ(s,a){switch(s){case"compositionend":return C4(a);case"keypress":return a.which!==32?null:(fD=!0,hD);case"textInput":return s=a.data,s===hD&&fD?null:s;default:return null}}function HJ(s,a){if(wa)return s==="compositionend"||!PA&&A4(s,a)?(s=w4(),Vh=LA=cr=null,wa=!1,s):null;switch(s){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return v4&&a.locale!=="ko"?null:a.data;default:return null}}var UJ={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mD(s){var a=s&&s.nodeName&&s.nodeName.toLowerCase();return a==="input"?!!UJ[s.type]:a==="textarea"}function _4(s,a,d,h){e4(h),a=lf(a,"onChange"),0<a.length&&(d=new zA("onChange","change",null,d,h),s.push({event:d,listeners:a}))}var Ec=null,Vc=null;function $J(s){z4(s,0)}function Nf(s){var a=Ca(s);if(qT(a))return s}function WJ(s,a){if(s==="change")return a}var y4=!1;if(Oo){var Kw;if(Oo){var Yw="oninput"in document;if(!Yw){var gD=document.createElement("div");gD.setAttribute("oninput","return;"),Yw=typeof gD.oninput=="function"}Kw=Yw}else Kw=!1;y4=Kw&&(!document.documentMode||9<document.documentMode)}function pD(){Ec&&(Ec.detachEvent("onpropertychange",x4),Vc=Ec=null)}function x4(s){if(s.propertyName==="value"&&Nf(Vc)){var a=[];_4(a,Vc,s,DA(s)),o4($J,a)}}function GJ(s,a,d){s==="focusin"?(pD(),Ec=a,Vc=d,Ec.attachEvent("onpropertychange",x4)):s==="focusout"&&pD()}function qJ(s){if(s==="selectionchange"||s==="keyup"||s==="keydown")return Nf(Vc)}function KJ(s,a){if(s==="click")return Nf(a)}function YJ(s,a){if(s==="input"||s==="change")return Nf(a)}function ZJ(s,a){return s===a&&(s!==0||1/s===1/a)||s!==s&&a!==a}var Li=typeof Object.is=="function"?Object.is:ZJ;function Hc(s,a){if(Li(s,a))return!0;if(typeof s!="object"||s===null||typeof a!="object"||a===null)return!1;var d=Object.keys(s),h=Object.keys(a);if(d.length!==h.length)return!1;for(h=0;h<d.length;h++){var f=d[h];if(!gv.call(a,f)||!Li(s[f],a[f]))return!1}return!0}function kD(s){for(;s&&s.firstChild;)s=s.firstChild;return s}function bD(s,a){var d=kD(s);s=0;for(var h;d;){if(d.nodeType===3){if(h=s+d.textContent.length,s<=a&&h>=a)return{node:d,offset:a-s};s=h}e:{for(;d;){if(d.nextSibling){d=d.nextSibling;break e}d=d.parentNode}d=void 0}d=kD(d)}}function E4(s,a){return s&&a?s===a?!0:s&&s.nodeType===3?!1:a&&a.nodeType===3?E4(s,a.parentNode):"contains"in s?s.contains(a):s.compareDocumentPosition?!!(s.compareDocumentPosition(a)&16):!1:!1}function S4(){for(var s=window,a=ef();a instanceof s.HTMLIFrameElement;){try{var d=typeof a.contentWindow.location.href=="string"}catch{d=!1}if(d)s=a.contentWindow;else break;a=ef(s.document)}return a}function RA(s){var a=s&&s.nodeName&&s.nodeName.toLowerCase();return a&&(a==="input"&&(s.type==="text"||s.type==="search"||s.type==="tel"||s.type==="url"||s.type==="password")||a==="textarea"||s.contentEditable==="true")}function QJ(s){var a=S4(),d=s.focusedElem,h=s.selectionRange;if(a!==d&&d&&d.ownerDocument&&E4(d.ownerDocument.documentElement,d)){if(h!==null&&RA(d)){if(a=h.start,s=h.end,s===void 0&&(s=a),"selectionStart"in d)d.selectionStart=a,d.selectionEnd=Math.min(s,d.value.length);else if(s=(a=d.ownerDocument||document)&&a.defaultView||window,s.getSelection){s=s.getSelection();var f=d.textContent.length,k=Math.min(h.start,f);h=h.end===void 0?k:Math.min(h.end,f),!s.extend&&k>h&&(f=h,h=k,k=f),f=bD(d,k);var b=bD(d,h);f&&b&&(s.rangeCount!==1||s.anchorNode!==f.node||s.anchorOffset!==f.offset||s.focusNode!==b.node||s.focusOffset!==b.offset)&&(a=a.createRange(),a.setStart(f.node,f.offset),s.removeAllRanges(),k>h?(s.addRange(a),s.extend(b.node,b.offset)):(a.setEnd(b.node,b.offset),s.addRange(a)))}}for(a=[],s=d;s=s.parentNode;)s.nodeType===1&&a.push({element:s,left:s.scrollLeft,top:s.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<a.length;d++)s=a[d],s.element.scrollLeft=s.left,s.element.scrollTop=s.top}}var JJ=Oo&&"documentMode"in document&&11>=document.documentMode,va=null,zv=null,Sc=null,Nv=!1;function wD(s,a,d){var h=d.window===d?d.document:d.nodeType===9?d:d.ownerDocument;Nv||va==null||va!==ef(h)||(h=va,"selectionStart"in h&&RA(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Sc&&Hc(Sc,h)||(Sc=h,h=lf(zv,"onSelect"),0<h.length&&(a=new zA("onSelect","select",null,a,d),s.push({event:a,listeners:h}),a.target=va)))}function Sh(s,a){var d={};return d[s.toLowerCase()]=a.toLowerCase(),d["Webkit"+s]="webkit"+a,d["Moz"+s]="moz"+a,d}var Aa={animationend:Sh("Animation","AnimationEnd"),animationiteration:Sh("Animation","AnimationIteration"),animationstart:Sh("Animation","AnimationStart"),transitionend:Sh("Transition","TransitionEnd")},Zw={},D4={};Oo&&(D4=document.createElement("div").style,"AnimationEvent"in window||(delete Aa.animationend.animation,delete Aa.animationiteration.animation,delete Aa.animationstart.animation),"TransitionEvent"in window||delete Aa.transitionend.transition);function Pf(s){if(Zw[s])return Zw[s];if(!Aa[s])return s;var a=Aa[s],d;for(d in a)if(a.hasOwnProperty(d)&&d in D4)return Zw[s]=a[d];return s}var T4=Pf("animationend"),I4=Pf("animationiteration"),M4=Pf("animationstart"),B4=Pf("transitionend"),L4=new Map,vD="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(s,a){L4.set(s,a),Cs(a,[s])}for(var Qw=0;Qw<vD.length;Qw++){var Jw=vD[Qw],XJ=Jw.toLowerCase(),eX=Jw[0].toUpperCase()+Jw.slice(1);Ar(XJ,"on"+eX)}Ar(T4,"onAnimationEnd");Ar(I4,"onAnimationIteration");Ar(M4,"onAnimationStart");Ar("dblclick","onDoubleClick");Ar("focusin","onFocus");Ar("focusout","onBlur");Ar(B4,"onTransitionEnd");Ra("onMouseEnter",["mouseout","mouseover"]);Ra("onMouseLeave",["mouseout","mouseover"]);Ra("onPointerEnter",["pointerout","pointerover"]);Ra("onPointerLeave",["pointerout","pointerover"]);Cs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Cs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Cs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Cs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Cs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Cs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tX=new Set("cancel close invalid load scroll toggle".split(" ").concat(Cc));function AD(s,a,d){var h=s.type||"unknown-event";s.currentTarget=d,XQ(h,a,void 0,s),s.currentTarget=null}function z4(s,a){a=(a&4)!==0;for(var d=0;d<s.length;d++){var h=s[d],f=h.event;h=h.listeners;e:{var k=void 0;if(a)for(var b=h.length-1;0<=b;b--){var v=h[b],g=v.instance,A=v.currentTarget;if(v=v.listener,g!==k&&f.isPropagationStopped())break e;AD(f,v,A),k=g}else for(b=0;b<h.length;b++){if(v=h[b],g=v.instance,A=v.currentTarget,v=v.listener,g!==k&&f.isPropagationStopped())break e;AD(f,v,A),k=g}}}if(nf)throw s=Iv,nf=!1,Iv=null,s}function lt(s,a){var d=a[Fv];d===void 0&&(d=a[Fv]=new Set);var h=s+"__bubble";d.has(h)||(N4(a,s,2,!1),d.add(h))}function Xw(s,a,d){var h=0;a&&(h|=4),N4(d,s,h,a)}var Dh="_reactListening"+Math.random().toString(36).slice(2);function Uc(s){if(!s[Dh]){s[Dh]=!0,HT.forEach(function(d){d!=="selectionchange"&&(tX.has(d)||Xw(d,!1,s),Xw(d,!0,s))});var a=s.nodeType===9?s:s.ownerDocument;a===null||a[Dh]||(a[Dh]=!0,Xw("selectionchange",!1,a))}}function N4(s,a,d,h){switch(b4(a)){case 1:var f=gJ;break;case 4:f=pJ;break;default:f=BA}d=f.bind(null,a,d,s),f=void 0,!Tv||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(f=!0),h?f!==void 0?s.addEventListener(a,d,{capture:!0,passive:f}):s.addEventListener(a,d,!0):f!==void 0?s.addEventListener(a,d,{passive:f}):s.addEventListener(a,d,!1)}function ev(s,a,d,h,f){var k=h;if(!(a&1)&&!(a&2)&&h!==null)e:for(;;){if(h===null)return;var b=h.tag;if(b===3||b===4){var v=h.stateNode.containerInfo;if(v===f||v.nodeType===8&&v.parentNode===f)break;if(b===4)for(b=h.return;b!==null;){var g=b.tag;if((g===3||g===4)&&(g=b.stateNode.containerInfo,g===f||g.nodeType===8&&g.parentNode===f))return;b=b.return}for(;v!==null;){if(b=ds(v),b===null)return;if(g=b.tag,g===5||g===6){h=k=b;continue e}v=v.parentNode}}h=h.return}o4(function(){var A=k,x=DA(d),y=[];e:{var E=L4.get(s);if(E!==void 0){var _=zA,D=s;switch(s){case"keypress":if(Hh(d)===0)break e;case"keydown":case"keyup":_=MJ;break;case"focusin":D="focus",_=qw;break;case"focusout":D="blur",_=qw;break;case"beforeblur":case"afterblur":_=qw;break;case"click":if(d.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=cD;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=wJ;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=zJ;break;case T4:case I4:case M4:_=CJ;break;case B4:_=PJ;break;case"scroll":_=kJ;break;case"wheel":_=OJ;break;case"copy":case"cut":case"paste":_=yJ;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=uD}var O=(a&4)!==0,Q=!O&&s==="scroll",N=O?E!==null?E+"Capture":null:E;O=[];for(var L=A,R;L!==null;){R=L;var F=R.stateNode;if(R.tag===5&&F!==null&&(R=F,N!==null&&(F=Rc(L,N),F!=null&&O.push($c(L,F,R)))),Q)break;L=L.return}0<O.length&&(E=new _(E,D,null,d,x),y.push({event:E,listeners:O}))}}if(!(a&7)){e:{if(E=s==="mouseover"||s==="pointerover",_=s==="mouseout"||s==="pointerout",E&&d!==Sv&&(D=d.relatedTarget||d.fromElement)&&(ds(D)||D[jo]))break e;if((_||E)&&(E=x.window===x?x:(E=x.ownerDocument)?E.defaultView||E.parentWindow:window,_?(D=d.relatedTarget||d.toElement,_=A,D=D?ds(D):null,D!==null&&(Q=_s(D),D!==Q||D.tag!==5&&D.tag!==6)&&(D=null)):(_=null,D=A),_!==D)){if(O=cD,F="onMouseLeave",N="onMouseEnter",L="mouse",(s==="pointerout"||s==="pointerover")&&(O=uD,F="onPointerLeave",N="onPointerEnter",L="pointer"),Q=_==null?E:Ca(_),R=D==null?E:Ca(D),E=new O(F,L+"leave",_,d,x),E.target=Q,E.relatedTarget=R,F=null,ds(x)===A&&(O=new O(N,L+"enter",D,d,x),O.target=R,O.relatedTarget=Q,F=O),Q=F,_&&D)t:{for(O=_,N=D,L=0,R=O;R;R=ca(R))L++;for(R=0,F=N;F;F=ca(F))R++;for(;0<L-R;)O=ca(O),L--;for(;0<R-L;)N=ca(N),R--;for(;L--;){if(O===N||N!==null&&O===N.alternate)break t;O=ca(O),N=ca(N)}O=null}else O=null;_!==null&&CD(y,E,_,O,!1),D!==null&&Q!==null&&CD(y,Q,D,O,!0)}}e:{if(E=A?Ca(A):window,_=E.nodeName&&E.nodeName.toLowerCase(),_==="select"||_==="input"&&E.type==="file")var q=WJ;else if(mD(E))if(y4)q=YJ;else{q=qJ;var $=GJ}else(_=E.nodeName)&&_.toLowerCase()==="input"&&(E.type==="checkbox"||E.type==="radio")&&(q=KJ);if(q&&(q=q(s,A))){_4(y,q,d,x);break e}$&&$(s,E,A),s==="focusout"&&($=E._wrapperState)&&$.controlled&&E.type==="number"&&Cv(E,"number",E.value)}switch($=A?Ca(A):window,s){case"focusin":(mD($)||$.contentEditable==="true")&&(va=$,zv=A,Sc=null);break;case"focusout":Sc=zv=va=null;break;case"mousedown":Nv=!0;break;case"contextmenu":case"mouseup":case"dragend":Nv=!1,wD(y,d,x);break;case"selectionchange":if(JJ)break;case"keydown":case"keyup":wD(y,d,x)}var U;if(PA)e:{switch(s){case"compositionstart":var K="onCompositionStart";break e;case"compositionend":K="onCompositionEnd";break e;case"compositionupdate":K="onCompositionUpdate";break e}K=void 0}else wa?A4(s,d)&&(K="onCompositionEnd"):s==="keydown"&&d.keyCode===229&&(K="onCompositionStart");K&&(v4&&d.locale!=="ko"&&(wa||K!=="onCompositionStart"?K==="onCompositionEnd"&&wa&&(U=w4()):(cr=x,LA="value"in cr?cr.value:cr.textContent,wa=!0)),$=lf(A,K),0<$.length&&(K=new dD(K,s,null,d,x),y.push({event:K,listeners:$}),U?K.data=U:(U=C4(d),U!==null&&(K.data=U)))),(U=FJ?VJ(s,d):HJ(s,d))&&(A=lf(A,"onBeforeInput"),0<A.length&&(x=new dD("onBeforeInput","beforeinput",null,d,x),y.push({event:x,listeners:A}),x.data=U))}z4(y,a)})}function $c(s,a,d){return{instance:s,listener:a,currentTarget:d}}function lf(s,a){for(var d=a+"Capture",h=[];s!==null;){var f=s,k=f.stateNode;f.tag===5&&k!==null&&(f=k,k=Rc(s,d),k!=null&&h.unshift($c(s,k,f)),k=Rc(s,a),k!=null&&h.push($c(s,k,f))),s=s.return}return h}function ca(s){if(s===null)return null;do s=s.return;while(s&&s.tag!==5);return s||null}function CD(s,a,d,h,f){for(var k=a._reactName,b=[];d!==null&&d!==h;){var v=d,g=v.alternate,A=v.stateNode;if(g!==null&&g===h)break;v.tag===5&&A!==null&&(v=A,f?(g=Rc(d,k),g!=null&&b.unshift($c(d,g,v))):f||(g=Rc(d,k),g!=null&&b.push($c(d,g,v)))),d=d.return}b.length!==0&&s.push({event:a,listeners:b})}var nX=/\r\n?/g,iX=/\u0000|\uFFFD/g;function _D(s){return(typeof s=="string"?s:""+s).replace(nX,`
`).replace(iX,"")}function Th(s,a,d){if(a=_D(a),_D(s)!==a&&d)throw Error(X(425))}function cf(){}var Pv=null,Rv=null;function Ov(s,a){return s==="textarea"||s==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var jv=typeof setTimeout=="function"?setTimeout:void 0,oX=typeof clearTimeout=="function"?clearTimeout:void 0,yD=typeof Promise=="function"?Promise:void 0,rX=typeof queueMicrotask=="function"?queueMicrotask:typeof yD<"u"?function(s){return yD.resolve(null).then(s).catch(sX)}:jv;function sX(s){setTimeout(function(){throw s})}function tv(s,a){var d=a,h=0;do{var f=d.nextSibling;if(s.removeChild(d),f&&f.nodeType===8)if(d=f.data,d==="/$"){if(h===0){s.removeChild(f),Fc(a);return}h--}else d!=="$"&&d!=="$?"&&d!=="$!"||h++;d=f}while(d);Fc(a)}function mr(s){for(;s!=null;s=s.nextSibling){var a=s.nodeType;if(a===1||a===3)break;if(a===8){if(a=s.data,a==="$"||a==="$!"||a==="$?")break;if(a==="/$")return null}}return s}function xD(s){s=s.previousSibling;for(var a=0;s;){if(s.nodeType===8){var d=s.data;if(d==="$"||d==="$!"||d==="$?"){if(a===0)return s;a--}else d==="/$"&&a++}s=s.previousSibling}return null}var Ka=Math.random().toString(36).slice(2),to="__reactFiber$"+Ka,Wc="__reactProps$"+Ka,jo="__reactContainer$"+Ka,Fv="__reactEvents$"+Ka,aX="__reactListeners$"+Ka,lX="__reactHandles$"+Ka;function ds(s){var a=s[to];if(a)return a;for(var d=s.parentNode;d;){if(a=d[jo]||d[to]){if(d=a.alternate,a.child!==null||d!==null&&d.child!==null)for(s=xD(s);s!==null;){if(d=s[to])return d;s=xD(s)}return a}s=d,d=s.parentNode}return null}function rd(s){return s=s[to]||s[jo],!s||s.tag!==5&&s.tag!==6&&s.tag!==13&&s.tag!==3?null:s}function Ca(s){if(s.tag===5||s.tag===6)return s.stateNode;throw Error(X(33))}function Rf(s){return s[Wc]||null}var Vv=[],_a=-1;function Cr(s){return{current:s}}function ct(s){0>_a||(s.current=Vv[_a],Vv[_a]=null,_a--)}function it(s,a){_a++,Vv[_a]=s.current,s.current=a}var vr={},fn=Cr(vr),Tn=Cr(!1),ps=vr;function Oa(s,a){var d=s.type.contextTypes;if(!d)return vr;var h=s.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===a)return h.__reactInternalMemoizedMaskedChildContext;var f={},k;for(k in d)f[k]=a[k];return h&&(s=s.stateNode,s.__reactInternalMemoizedUnmaskedChildContext=a,s.__reactInternalMemoizedMaskedChildContext=f),f}function In(s){return s=s.childContextTypes,s!=null}function df(){ct(Tn),ct(fn)}function ED(s,a,d){if(fn.current!==vr)throw Error(X(168));it(fn,a),it(Tn,d)}function P4(s,a,d){var h=s.stateNode;if(a=a.childContextTypes,typeof h.getChildContext!="function")return d;h=h.getChildContext();for(var f in h)if(!(f in a))throw Error(X(108,GQ(s)||"Unknown",f));return Ct({},d,h)}function uf(s){return s=(s=s.stateNode)&&s.__reactInternalMemoizedMergedChildContext||vr,ps=fn.current,it(fn,s),it(Tn,Tn.current),!0}function SD(s,a,d){var h=s.stateNode;if(!h)throw Error(X(169));d?(s=P4(s,a,ps),h.__reactInternalMemoizedMergedChildContext=s,ct(Tn),ct(fn),it(fn,s)):ct(Tn),it(Tn,d)}var zo=null,Of=!1,nv=!1;function R4(s){zo===null?zo=[s]:zo.push(s)}function cX(s){Of=!0,R4(s)}function _r(){if(!nv&&zo!==null){nv=!0;var s=0,a=We;try{var d=zo;for(We=1;s<d.length;s++){var h=d[s];do h=h(!0);while(h!==null)}zo=null,Of=!1}catch(f){throw zo!==null&&(zo=zo.slice(s+1)),l4(TA,_r),f}finally{We=a,nv=!1}}return null}var ya=[],xa=0,hf=null,ff=0,fi=[],mi=0,ks=null,No=1,Po="";function ls(s,a){ya[xa++]=ff,ya[xa++]=hf,hf=s,ff=a}function O4(s,a,d){fi[mi++]=No,fi[mi++]=Po,fi[mi++]=ks,ks=s;var h=No;s=Po;var f=32-Mi(h)-1;h&=~(1<<f),d+=1;var k=32-Mi(a)+f;if(30<k){var b=f-f%5;k=(h&(1<<b)-1).toString(32),h>>=b,f-=b,No=1<<32-Mi(a)+f|d<<f|h,Po=k+s}else No=1<<k|d<<f|h,Po=s}function OA(s){s.return!==null&&(ls(s,1),O4(s,1,0))}function jA(s){for(;s===hf;)hf=ya[--xa],ya[xa]=null,ff=ya[--xa],ya[xa]=null;for(;s===ks;)ks=fi[--mi],fi[mi]=null,Po=fi[--mi],fi[mi]=null,No=fi[--mi],fi[mi]=null}var Gn=null,Wn=null,mt=!1,Ii=null;function j4(s,a){var d=gi(5,null,null,0);d.elementType="DELETED",d.stateNode=a,d.return=s,a=s.deletions,a===null?(s.deletions=[d],s.flags|=16):a.push(d)}function DD(s,a){switch(s.tag){case 5:var d=s.type;return a=a.nodeType!==1||d.toLowerCase()!==a.nodeName.toLowerCase()?null:a,a!==null?(s.stateNode=a,Gn=s,Wn=mr(a.firstChild),!0):!1;case 6:return a=s.pendingProps===""||a.nodeType!==3?null:a,a!==null?(s.stateNode=a,Gn=s,Wn=null,!0):!1;case 13:return a=a.nodeType!==8?null:a,a!==null?(d=ks!==null?{id:No,overflow:Po}:null,s.memoizedState={dehydrated:a,treeContext:d,retryLane:1073741824},d=gi(18,null,null,0),d.stateNode=a,d.return=s,s.child=d,Gn=s,Wn=null,!0):!1;default:return!1}}function Hv(s){return(s.mode&1)!==0&&(s.flags&128)===0}function Uv(s){if(mt){var a=Wn;if(a){var d=a;if(!DD(s,a)){if(Hv(s))throw Error(X(418));a=mr(d.nextSibling);var h=Gn;a&&DD(s,a)?j4(h,d):(s.flags=s.flags&-4097|2,mt=!1,Gn=s)}}else{if(Hv(s))throw Error(X(418));s.flags=s.flags&-4097|2,mt=!1,Gn=s}}}function TD(s){for(s=s.return;s!==null&&s.tag!==5&&s.tag!==3&&s.tag!==13;)s=s.return;Gn=s}function Ih(s){if(s!==Gn)return!1;if(!mt)return TD(s),mt=!0,!1;var a;if((a=s.tag!==3)&&!(a=s.tag!==5)&&(a=s.type,a=a!=="head"&&a!=="body"&&!Ov(s.type,s.memoizedProps)),a&&(a=Wn)){if(Hv(s))throw F4(),Error(X(418));for(;a;)j4(s,a),a=mr(a.nextSibling)}if(TD(s),s.tag===13){if(s=s.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(X(317));e:{for(s=s.nextSibling,a=0;s;){if(s.nodeType===8){var d=s.data;if(d==="/$"){if(a===0){Wn=mr(s.nextSibling);break e}a--}else d!=="$"&&d!=="$!"&&d!=="$?"||a++}s=s.nextSibling}Wn=null}}else Wn=Gn?mr(s.stateNode.nextSibling):null;return!0}function F4(){for(var s=Wn;s;)s=mr(s.nextSibling)}function ja(){Wn=Gn=null,mt=!1}function FA(s){Ii===null?Ii=[s]:Ii.push(s)}var dX=Uo.ReactCurrentBatchConfig;function Di(s,a){if(s&&s.defaultProps){a=Ct({},a),s=s.defaultProps;for(var d in s)a[d]===void 0&&(a[d]=s[d]);return a}return a}var mf=Cr(null),gf=null,Ea=null,VA=null;function HA(){VA=Ea=gf=null}function UA(s){var a=mf.current;ct(mf),s._currentValue=a}function $v(s,a,d){for(;s!==null;){var h=s.alternate;if((s.childLanes&a)!==a?(s.childLanes|=a,h!==null&&(h.childLanes|=a)):h!==null&&(h.childLanes&a)!==a&&(h.childLanes|=a),s===d)break;s=s.return}}function La(s,a){gf=s,VA=Ea=null,s=s.dependencies,s!==null&&s.firstContext!==null&&(s.lanes&a&&(Dn=!0),s.firstContext=null)}function ki(s){var a=s._currentValue;if(VA!==s)if(s={context:s,memoizedValue:a,next:null},Ea===null){if(gf===null)throw Error(X(308));Ea=s,gf.dependencies={lanes:0,firstContext:s}}else Ea=Ea.next=s;return a}var us=null;function $A(s){us===null?us=[s]:us.push(s)}function V4(s,a,d,h){var f=a.interleaved;return f===null?(d.next=d,$A(a)):(d.next=f.next,f.next=d),a.interleaved=d,Fo(s,h)}function Fo(s,a){s.lanes|=a;var d=s.alternate;for(d!==null&&(d.lanes|=a),d=s,s=s.return;s!==null;)s.childLanes|=a,d=s.alternate,d!==null&&(d.childLanes|=a),d=s,s=s.return;return d.tag===3?d.stateNode:null}var rr=!1;function WA(s){s.updateQueue={baseState:s.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function H4(s,a){s=s.updateQueue,a.updateQueue===s&&(a.updateQueue={baseState:s.baseState,firstBaseUpdate:s.firstBaseUpdate,lastBaseUpdate:s.lastBaseUpdate,shared:s.shared,effects:s.effects})}function Ro(s,a){return{eventTime:s,lane:a,tag:0,payload:null,callback:null,next:null}}function gr(s,a,d){var h=s.updateQueue;if(h===null)return null;if(h=h.shared,ze&2){var f=h.pending;return f===null?a.next=a:(a.next=f.next,f.next=a),h.pending=a,Fo(s,d)}return f=h.interleaved,f===null?(a.next=a,$A(h)):(a.next=f.next,f.next=a),h.interleaved=a,Fo(s,d)}function Uh(s,a,d){if(a=a.updateQueue,a!==null&&(a=a.shared,(d&4194240)!==0)){var h=a.lanes;h&=s.pendingLanes,d|=h,a.lanes=d,IA(s,d)}}function ID(s,a){var d=s.updateQueue,h=s.alternate;if(h!==null&&(h=h.updateQueue,d===h)){var f=null,k=null;if(d=d.firstBaseUpdate,d!==null){do{var b={eventTime:d.eventTime,lane:d.lane,tag:d.tag,payload:d.payload,callback:d.callback,next:null};k===null?f=k=b:k=k.next=b,d=d.next}while(d!==null);k===null?f=k=a:k=k.next=a}else f=k=a;d={baseState:h.baseState,firstBaseUpdate:f,lastBaseUpdate:k,shared:h.shared,effects:h.effects},s.updateQueue=d;return}s=d.lastBaseUpdate,s===null?d.firstBaseUpdate=a:s.next=a,d.lastBaseUpdate=a}function pf(s,a,d,h){var f=s.updateQueue;rr=!1;var k=f.firstBaseUpdate,b=f.lastBaseUpdate,v=f.shared.pending;if(v!==null){f.shared.pending=null;var g=v,A=g.next;g.next=null,b===null?k=A:b.next=A,b=g;var x=s.alternate;x!==null&&(x=x.updateQueue,v=x.lastBaseUpdate,v!==b&&(v===null?x.firstBaseUpdate=A:v.next=A,x.lastBaseUpdate=g))}if(k!==null){var y=f.baseState;b=0,x=A=g=null,v=k;do{var E=v.lane,_=v.eventTime;if((h&E)===E){x!==null&&(x=x.next={eventTime:_,lane:0,tag:v.tag,payload:v.payload,callback:v.callback,next:null});e:{var D=s,O=v;switch(E=a,_=d,O.tag){case 1:if(D=O.payload,typeof D=="function"){y=D.call(_,y,E);break e}y=D;break e;case 3:D.flags=D.flags&-65537|128;case 0:if(D=O.payload,E=typeof D=="function"?D.call(_,y,E):D,E==null)break e;y=Ct({},y,E);break e;case 2:rr=!0}}v.callback!==null&&v.lane!==0&&(s.flags|=64,E=f.effects,E===null?f.effects=[v]:E.push(v))}else _={eventTime:_,lane:E,tag:v.tag,payload:v.payload,callback:v.callback,next:null},x===null?(A=x=_,g=y):x=x.next=_,b|=E;if(v=v.next,v===null){if(v=f.shared.pending,v===null)break;E=v,v=E.next,E.next=null,f.lastBaseUpdate=E,f.shared.pending=null}}while(1);if(x===null&&(g=y),f.baseState=g,f.firstBaseUpdate=A,f.lastBaseUpdate=x,a=f.shared.interleaved,a!==null){f=a;do b|=f.lane,f=f.next;while(f!==a)}else k===null&&(f.shared.lanes=0);ws|=b,s.lanes=b,s.memoizedState=y}}function MD(s,a,d){if(s=a.effects,a.effects=null,s!==null)for(a=0;a<s.length;a++){var h=s[a],f=h.callback;if(f!==null){if(h.callback=null,h=d,typeof f!="function")throw Error(X(191,f));f.call(h)}}}var U4=new VT.Component().refs;function Wv(s,a,d,h){a=s.memoizedState,d=d(h,a),d=d==null?a:Ct({},a,d),s.memoizedState=d,s.lanes===0&&(s.updateQueue.baseState=d)}var jf={isMounted:function(s){return(s=s._reactInternals)?_s(s)===s:!1},enqueueSetState:function(s,a,d){s=s._reactInternals;var h=bn(),f=kr(s),k=Ro(h,f);k.payload=a,d!=null&&(k.callback=d),a=gr(s,k,f),a!==null&&(Bi(a,s,f,h),Uh(a,s,f))},enqueueReplaceState:function(s,a,d){s=s._reactInternals;var h=bn(),f=kr(s),k=Ro(h,f);k.tag=1,k.payload=a,d!=null&&(k.callback=d),a=gr(s,k,f),a!==null&&(Bi(a,s,f,h),Uh(a,s,f))},enqueueForceUpdate:function(s,a){s=s._reactInternals;var d=bn(),h=kr(s),f=Ro(d,h);f.tag=2,a!=null&&(f.callback=a),a=gr(s,f,h),a!==null&&(Bi(a,s,h,d),Uh(a,s,h))}};function BD(s,a,d,h,f,k,b){return s=s.stateNode,typeof s.shouldComponentUpdate=="function"?s.shouldComponentUpdate(h,k,b):a.prototype&&a.prototype.isPureReactComponent?!Hc(d,h)||!Hc(f,k):!0}function $4(s,a,d){var h=!1,f=vr,k=a.contextType;return typeof k=="object"&&k!==null?k=ki(k):(f=In(a)?ps:fn.current,h=a.contextTypes,k=(h=h!=null)?Oa(s,f):vr),a=new a(d,k),s.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=jf,s.stateNode=a,a._reactInternals=s,h&&(s=s.stateNode,s.__reactInternalMemoizedUnmaskedChildContext=f,s.__reactInternalMemoizedMaskedChildContext=k),a}function LD(s,a,d,h){s=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(d,h),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(d,h),a.state!==s&&jf.enqueueReplaceState(a,a.state,null)}function Gv(s,a,d,h){var f=s.stateNode;f.props=d,f.state=s.memoizedState,f.refs=U4,WA(s);var k=a.contextType;typeof k=="object"&&k!==null?f.context=ki(k):(k=In(a)?ps:fn.current,f.context=Oa(s,k)),f.state=s.memoizedState,k=a.getDerivedStateFromProps,typeof k=="function"&&(Wv(s,a,k,d),f.state=s.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(a=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),a!==f.state&&jf.enqueueReplaceState(f,f.state,null),pf(s,d,f,h),f.state=s.memoizedState),typeof f.componentDidMount=="function"&&(s.flags|=4194308)}function fc(s,a,d){if(s=d.ref,s!==null&&typeof s!="function"&&typeof s!="object"){if(d._owner){if(d=d._owner,d){if(d.tag!==1)throw Error(X(309));var h=d.stateNode}if(!h)throw Error(X(147,s));var f=h,k=""+s;return a!==null&&a.ref!==null&&typeof a.ref=="function"&&a.ref._stringRef===k?a.ref:(a=function(b){var v=f.refs;v===U4&&(v=f.refs={}),b===null?delete v[k]:v[k]=b},a._stringRef=k,a)}if(typeof s!="string")throw Error(X(284));if(!d._owner)throw Error(X(290,s))}return s}function Mh(s,a){throw s=Object.prototype.toString.call(a),Error(X(31,s==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":s))}function zD(s){var a=s._init;return a(s._payload)}function W4(s){function a(N,L){if(s){var R=N.deletions;R===null?(N.deletions=[L],N.flags|=16):R.push(L)}}function d(N,L){if(!s)return null;for(;L!==null;)a(N,L),L=L.sibling;return null}function h(N,L){for(N=new Map;L!==null;)L.key!==null?N.set(L.key,L):N.set(L.index,L),L=L.sibling;return N}function f(N,L){return N=br(N,L),N.index=0,N.sibling=null,N}function k(N,L,R){return N.index=R,s?(R=N.alternate,R!==null?(R=R.index,R<L?(N.flags|=2,L):R):(N.flags|=2,L)):(N.flags|=1048576,L)}function b(N){return s&&N.alternate===null&&(N.flags|=2),N}function v(N,L,R,F){return L===null||L.tag!==6?(L=cv(R,N.mode,F),L.return=N,L):(L=f(L,R),L.return=N,L)}function g(N,L,R,F){var q=R.type;return q===ba?x(N,L,R.props.children,F,R.key):L!==null&&(L.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===or&&zD(q)===L.type)?(F=f(L,R.props),F.ref=fc(N,L,R),F.return=N,F):(F=Yh(R.type,R.key,R.props,null,N.mode,F),F.ref=fc(N,L,R),F.return=N,F)}function A(N,L,R,F){return L===null||L.tag!==4||L.stateNode.containerInfo!==R.containerInfo||L.stateNode.implementation!==R.implementation?(L=dv(R,N.mode,F),L.return=N,L):(L=f(L,R.children||[]),L.return=N,L)}function x(N,L,R,F,q){return L===null||L.tag!==7?(L=gs(R,N.mode,F,q),L.return=N,L):(L=f(L,R),L.return=N,L)}function y(N,L,R){if(typeof L=="string"&&L!==""||typeof L=="number")return L=cv(""+L,N.mode,R),L.return=N,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case vh:return R=Yh(L.type,L.key,L.props,null,N.mode,R),R.ref=fc(N,null,L),R.return=N,R;case ka:return L=dv(L,N.mode,R),L.return=N,L;case or:var F=L._init;return y(N,F(L._payload),R)}if(vc(L)||lc(L))return L=gs(L,N.mode,R,null),L.return=N,L;Mh(N,L)}return null}function E(N,L,R,F){var q=L!==null?L.key:null;if(typeof R=="string"&&R!==""||typeof R=="number")return q!==null?null:v(N,L,""+R,F);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case vh:return R.key===q?g(N,L,R,F):null;case ka:return R.key===q?A(N,L,R,F):null;case or:return q=R._init,E(N,L,q(R._payload),F)}if(vc(R)||lc(R))return q!==null?null:x(N,L,R,F,null);Mh(N,R)}return null}function _(N,L,R,F,q){if(typeof F=="string"&&F!==""||typeof F=="number")return N=N.get(R)||null,v(L,N,""+F,q);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case vh:return N=N.get(F.key===null?R:F.key)||null,g(L,N,F,q);case ka:return N=N.get(F.key===null?R:F.key)||null,A(L,N,F,q);case or:var $=F._init;return _(N,L,R,$(F._payload),q)}if(vc(F)||lc(F))return N=N.get(R)||null,x(L,N,F,q,null);Mh(L,F)}return null}function D(N,L,R,F){for(var q=null,$=null,U=L,K=L=0,ee=null;U!==null&&K<R.length;K++){U.index>K?(ee=U,U=null):ee=U.sibling;var Y=E(N,U,R[K],F);if(Y===null){U===null&&(U=ee);break}s&&U&&Y.alternate===null&&a(N,U),L=k(Y,L,K),$===null?q=Y:$.sibling=Y,$=Y,U=ee}if(K===R.length)return d(N,U),mt&&ls(N,K),q;if(U===null){for(;K<R.length;K++)U=y(N,R[K],F),U!==null&&(L=k(U,L,K),$===null?q=U:$.sibling=U,$=U);return mt&&ls(N,K),q}for(U=h(N,U);K<R.length;K++)ee=_(U,N,K,R[K],F),ee!==null&&(s&&ee.alternate!==null&&U.delete(ee.key===null?K:ee.key),L=k(ee,L,K),$===null?q=ee:$.sibling=ee,$=ee);return s&&U.forEach(function(ce){return a(N,ce)}),mt&&ls(N,K),q}function O(N,L,R,F){var q=lc(R);if(typeof q!="function")throw Error(X(150));if(R=q.call(R),R==null)throw Error(X(151));for(var $=q=null,U=L,K=L=0,ee=null,Y=R.next();U!==null&&!Y.done;K++,Y=R.next()){U.index>K?(ee=U,U=null):ee=U.sibling;var ce=E(N,U,Y.value,F);if(ce===null){U===null&&(U=ee);break}s&&U&&ce.alternate===null&&a(N,U),L=k(ce,L,K),$===null?q=ce:$.sibling=ce,$=ce,U=ee}if(Y.done)return d(N,U),mt&&ls(N,K),q;if(U===null){for(;!Y.done;K++,Y=R.next())Y=y(N,Y.value,F),Y!==null&&(L=k(Y,L,K),$===null?q=Y:$.sibling=Y,$=Y);return mt&&ls(N,K),q}for(U=h(N,U);!Y.done;K++,Y=R.next())Y=_(U,N,K,Y.value,F),Y!==null&&(s&&Y.alternate!==null&&U.delete(Y.key===null?K:Y.key),L=k(Y,L,K),$===null?q=Y:$.sibling=Y,$=Y);return s&&U.forEach(function(be){return a(N,be)}),mt&&ls(N,K),q}function Q(N,L,R,F){if(typeof R=="object"&&R!==null&&R.type===ba&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case vh:e:{for(var q=R.key,$=L;$!==null;){if($.key===q){if(q=R.type,q===ba){if($.tag===7){d(N,$.sibling),L=f($,R.props.children),L.return=N,N=L;break e}}else if($.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===or&&zD(q)===$.type){d(N,$.sibling),L=f($,R.props),L.ref=fc(N,$,R),L.return=N,N=L;break e}d(N,$);break}else a(N,$);$=$.sibling}R.type===ba?(L=gs(R.props.children,N.mode,F,R.key),L.return=N,N=L):(F=Yh(R.type,R.key,R.props,null,N.mode,F),F.ref=fc(N,L,R),F.return=N,N=F)}return b(N);case ka:e:{for($=R.key;L!==null;){if(L.key===$)if(L.tag===4&&L.stateNode.containerInfo===R.containerInfo&&L.stateNode.implementation===R.implementation){d(N,L.sibling),L=f(L,R.children||[]),L.return=N,N=L;break e}else{d(N,L);break}else a(N,L);L=L.sibling}L=dv(R,N.mode,F),L.return=N,N=L}return b(N);case or:return $=R._init,Q(N,L,$(R._payload),F)}if(vc(R))return D(N,L,R,F);if(lc(R))return O(N,L,R,F);Mh(N,R)}return typeof R=="string"&&R!==""||typeof R=="number"?(R=""+R,L!==null&&L.tag===6?(d(N,L.sibling),L=f(L,R),L.return=N,N=L):(d(N,L),L=cv(R,N.mode,F),L.return=N,N=L),b(N)):d(N,L)}return Q}var Fa=W4(!0),G4=W4(!1),sd={},oo=Cr(sd),Gc=Cr(sd),qc=Cr(sd);function hs(s){if(s===sd)throw Error(X(174));return s}function GA(s,a){switch(it(qc,a),it(Gc,s),it(oo,sd),s=a.nodeType,s){case 9:case 11:a=(a=a.documentElement)?a.namespaceURI:yv(null,"");break;default:s=s===8?a.parentNode:a,a=s.namespaceURI||null,s=s.tagName,a=yv(a,s)}ct(oo),it(oo,a)}function Va(){ct(oo),ct(Gc),ct(qc)}function q4(s){hs(qc.current);var a=hs(oo.current),d=yv(a,s.type);a!==d&&(it(Gc,s),it(oo,d))}function qA(s){Gc.current===s&&(ct(oo),ct(Gc))}var vt=Cr(0);function kf(s){for(var a=s;a!==null;){if(a.tag===13){var d=a.memoizedState;if(d!==null&&(d=d.dehydrated,d===null||d.data==="$?"||d.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if(a.flags&128)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var iv=[];function KA(){for(var s=0;s<iv.length;s++)iv[s]._workInProgressVersionPrimary=null;iv.length=0}var $h=Uo.ReactCurrentDispatcher,ov=Uo.ReactCurrentBatchConfig,bs=0,At=null,jt=null,qt=null,bf=!1,Dc=!1,Kc=0,uX=0;function cn(){throw Error(X(321))}function YA(s,a){if(a===null)return!1;for(var d=0;d<a.length&&d<s.length;d++)if(!Li(s[d],a[d]))return!1;return!0}function ZA(s,a,d,h,f,k){if(bs=k,At=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,$h.current=s===null||s.memoizedState===null?gX:pX,s=d(h,f),Dc){k=0;do{if(Dc=!1,Kc=0,25<=k)throw Error(X(301));k+=1,qt=jt=null,a.updateQueue=null,$h.current=kX,s=d(h,f)}while(Dc)}if($h.current=wf,a=jt!==null&&jt.next!==null,bs=0,qt=jt=At=null,bf=!1,a)throw Error(X(300));return s}function QA(){var s=Kc!==0;return Kc=0,s}function Ji(){var s={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qt===null?At.memoizedState=qt=s:qt=qt.next=s,qt}function bi(){if(jt===null){var s=At.alternate;s=s!==null?s.memoizedState:null}else s=jt.next;var a=qt===null?At.memoizedState:qt.next;if(a!==null)qt=a,jt=s;else{if(s===null)throw Error(X(310));jt=s,s={memoizedState:jt.memoizedState,baseState:jt.baseState,baseQueue:jt.baseQueue,queue:jt.queue,next:null},qt===null?At.memoizedState=qt=s:qt=qt.next=s}return qt}function Yc(s,a){return typeof a=="function"?a(s):a}function rv(s){var a=bi(),d=a.queue;if(d===null)throw Error(X(311));d.lastRenderedReducer=s;var h=jt,f=h.baseQueue,k=d.pending;if(k!==null){if(f!==null){var b=f.next;f.next=k.next,k.next=b}h.baseQueue=f=k,d.pending=null}if(f!==null){k=f.next,h=h.baseState;var v=b=null,g=null,A=k;do{var x=A.lane;if((bs&x)===x)g!==null&&(g=g.next={lane:0,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),h=A.hasEagerState?A.eagerState:s(h,A.action);else{var y={lane:x,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null};g===null?(v=g=y,b=h):g=g.next=y,At.lanes|=x,ws|=x}A=A.next}while(A!==null&&A!==k);g===null?b=h:g.next=v,Li(h,a.memoizedState)||(Dn=!0),a.memoizedState=h,a.baseState=b,a.baseQueue=g,d.lastRenderedState=h}if(s=d.interleaved,s!==null){f=s;do k=f.lane,At.lanes|=k,ws|=k,f=f.next;while(f!==s)}else f===null&&(d.lanes=0);return[a.memoizedState,d.dispatch]}function sv(s){var a=bi(),d=a.queue;if(d===null)throw Error(X(311));d.lastRenderedReducer=s;var h=d.dispatch,f=d.pending,k=a.memoizedState;if(f!==null){d.pending=null;var b=f=f.next;do k=s(k,b.action),b=b.next;while(b!==f);Li(k,a.memoizedState)||(Dn=!0),a.memoizedState=k,a.baseQueue===null&&(a.baseState=k),d.lastRenderedState=k}return[k,h]}function K4(){}function Y4(s,a){var d=At,h=bi(),f=a(),k=!Li(h.memoizedState,f);if(k&&(h.memoizedState=f,Dn=!0),h=h.queue,JA(J4.bind(null,d,h,s),[s]),h.getSnapshot!==a||k||qt!==null&&qt.memoizedState.tag&1){if(d.flags|=2048,Zc(9,Q4.bind(null,d,h,f,a),void 0,null),Kt===null)throw Error(X(349));bs&30||Z4(d,a,f)}return f}function Z4(s,a,d){s.flags|=16384,s={getSnapshot:a,value:d},a=At.updateQueue,a===null?(a={lastEffect:null,stores:null},At.updateQueue=a,a.stores=[s]):(d=a.stores,d===null?a.stores=[s]:d.push(s))}function Q4(s,a,d,h){a.value=d,a.getSnapshot=h,X4(a)&&eI(s)}function J4(s,a,d){return d(function(){X4(a)&&eI(s)})}function X4(s){var a=s.getSnapshot;s=s.value;try{var d=a();return!Li(s,d)}catch{return!0}}function eI(s){var a=Fo(s,1);a!==null&&Bi(a,s,1,-1)}function ND(s){var a=Ji();return typeof s=="function"&&(s=s()),a.memoizedState=a.baseState=s,s={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yc,lastRenderedState:s},a.queue=s,s=s.dispatch=mX.bind(null,At,s),[a.memoizedState,s]}function Zc(s,a,d,h){return s={tag:s,create:a,destroy:d,deps:h,next:null},a=At.updateQueue,a===null?(a={lastEffect:null,stores:null},At.updateQueue=a,a.lastEffect=s.next=s):(d=a.lastEffect,d===null?a.lastEffect=s.next=s:(h=d.next,d.next=s,s.next=h,a.lastEffect=s)),s}function tI(){return bi().memoizedState}function Wh(s,a,d,h){var f=Ji();At.flags|=s,f.memoizedState=Zc(1|a,d,void 0,h===void 0?null:h)}function Ff(s,a,d,h){var f=bi();h=h===void 0?null:h;var k=void 0;if(jt!==null){var b=jt.memoizedState;if(k=b.destroy,h!==null&&YA(h,b.deps)){f.memoizedState=Zc(a,d,k,h);return}}At.flags|=s,f.memoizedState=Zc(1|a,d,k,h)}function PD(s,a){return Wh(8390656,8,s,a)}function JA(s,a){return Ff(2048,8,s,a)}function nI(s,a){return Ff(4,2,s,a)}function iI(s,a){return Ff(4,4,s,a)}function oI(s,a){if(typeof a=="function")return s=s(),a(s),function(){a(null)};if(a!=null)return s=s(),a.current=s,function(){a.current=null}}function rI(s,a,d){return d=d!=null?d.concat([s]):null,Ff(4,4,oI.bind(null,a,s),d)}function XA(){}function sI(s,a){var d=bi();a=a===void 0?null:a;var h=d.memoizedState;return h!==null&&a!==null&&YA(a,h[1])?h[0]:(d.memoizedState=[s,a],s)}function aI(s,a){var d=bi();a=a===void 0?null:a;var h=d.memoizedState;return h!==null&&a!==null&&YA(a,h[1])?h[0]:(s=s(),d.memoizedState=[s,a],s)}function lI(s,a,d){return bs&21?(Li(d,a)||(d=u4(),At.lanes|=d,ws|=d,s.baseState=!0),a):(s.baseState&&(s.baseState=!1,Dn=!0),s.memoizedState=d)}function hX(s,a){var d=We;We=d!==0&&4>d?d:4,s(!0);var h=ov.transition;ov.transition={};try{s(!1),a()}finally{We=d,ov.transition=h}}function cI(){return bi().memoizedState}function fX(s,a,d){var h=kr(s);if(d={lane:h,action:d,hasEagerState:!1,eagerState:null,next:null},dI(s))uI(a,d);else if(d=V4(s,a,d,h),d!==null){var f=bn();Bi(d,s,h,f),hI(d,a,h)}}function mX(s,a,d){var h=kr(s),f={lane:h,action:d,hasEagerState:!1,eagerState:null,next:null};if(dI(s))uI(a,f);else{var k=s.alternate;if(s.lanes===0&&(k===null||k.lanes===0)&&(k=a.lastRenderedReducer,k!==null))try{var b=a.lastRenderedState,v=k(b,d);if(f.hasEagerState=!0,f.eagerState=v,Li(v,b)){var g=a.interleaved;g===null?(f.next=f,$A(a)):(f.next=g.next,g.next=f),a.interleaved=f;return}}catch{}finally{}d=V4(s,a,f,h),d!==null&&(f=bn(),Bi(d,s,h,f),hI(d,a,h))}}function dI(s){var a=s.alternate;return s===At||a!==null&&a===At}function uI(s,a){Dc=bf=!0;var d=s.pending;d===null?a.next=a:(a.next=d.next,d.next=a),s.pending=a}function hI(s,a,d){if(d&4194240){var h=a.lanes;h&=s.pendingLanes,d|=h,a.lanes=d,IA(s,d)}}var wf={readContext:ki,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useInsertionEffect:cn,useLayoutEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useMutableSource:cn,useSyncExternalStore:cn,useId:cn,unstable_isNewReconciler:!1},gX={readContext:ki,useCallback:function(s,a){return Ji().memoizedState=[s,a===void 0?null:a],s},useContext:ki,useEffect:PD,useImperativeHandle:function(s,a,d){return d=d!=null?d.concat([s]):null,Wh(4194308,4,oI.bind(null,a,s),d)},useLayoutEffect:function(s,a){return Wh(4194308,4,s,a)},useInsertionEffect:function(s,a){return Wh(4,2,s,a)},useMemo:function(s,a){var d=Ji();return a=a===void 0?null:a,s=s(),d.memoizedState=[s,a],s},useReducer:function(s,a,d){var h=Ji();return a=d!==void 0?d(a):a,h.memoizedState=h.baseState=a,s={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:s,lastRenderedState:a},h.queue=s,s=s.dispatch=fX.bind(null,At,s),[h.memoizedState,s]},useRef:function(s){var a=Ji();return s={current:s},a.memoizedState=s},useState:ND,useDebugValue:XA,useDeferredValue:function(s){return Ji().memoizedState=s},useTransition:function(){var s=ND(!1),a=s[0];return s=hX.bind(null,s[1]),Ji().memoizedState=s,[a,s]},useMutableSource:function(){},useSyncExternalStore:function(s,a,d){var h=At,f=Ji();if(mt){if(d===void 0)throw Error(X(407));d=d()}else{if(d=a(),Kt===null)throw Error(X(349));bs&30||Z4(h,a,d)}f.memoizedState=d;var k={value:d,getSnapshot:a};return f.queue=k,PD(J4.bind(null,h,k,s),[s]),h.flags|=2048,Zc(9,Q4.bind(null,h,k,d,a),void 0,null),d},useId:function(){var s=Ji(),a=Kt.identifierPrefix;if(mt){var d=Po,h=No;d=(h&~(1<<32-Mi(h)-1)).toString(32)+d,a=":"+a+"R"+d,d=Kc++,0<d&&(a+="H"+d.toString(32)),a+=":"}else d=uX++,a=":"+a+"r"+d.toString(32)+":";return s.memoizedState=a},unstable_isNewReconciler:!1},pX={readContext:ki,useCallback:sI,useContext:ki,useEffect:JA,useImperativeHandle:rI,useInsertionEffect:nI,useLayoutEffect:iI,useMemo:aI,useReducer:rv,useRef:tI,useState:function(){return rv(Yc)},useDebugValue:XA,useDeferredValue:function(s){var a=bi();return lI(a,jt.memoizedState,s)},useTransition:function(){var s=rv(Yc)[0],a=bi().memoizedState;return[s,a]},useMutableSource:K4,useSyncExternalStore:Y4,useId:cI,unstable_isNewReconciler:!1},kX={readContext:ki,useCallback:sI,useContext:ki,useEffect:JA,useImperativeHandle:rI,useInsertionEffect:nI,useLayoutEffect:iI,useMemo:aI,useReducer:sv,useRef:tI,useState:function(){return sv(Yc)},useDebugValue:XA,useDeferredValue:function(s){var a=bi();return jt===null?a.memoizedState=s:lI(a,jt.memoizedState,s)},useTransition:function(){var s=sv(Yc)[0],a=bi().memoizedState;return[s,a]},useMutableSource:K4,useSyncExternalStore:Y4,useId:cI,unstable_isNewReconciler:!1};function Ha(s,a){try{var d="",h=a;do d+=WQ(h),h=h.return;while(h);var f=d}catch(k){f=`
Error generating stack: `+k.message+`
`+k.stack}return{value:s,source:a,stack:f,digest:null}}function av(s,a,d){return{value:s,source:null,stack:d??null,digest:a??null}}function qv(s,a){try{console.error(a.value)}catch(d){setTimeout(function(){throw d})}}var bX=typeof WeakMap=="function"?WeakMap:Map;function fI(s,a,d){d=Ro(-1,d),d.tag=3,d.payload={element:null};var h=a.value;return d.callback=function(){Af||(Af=!0,iA=h),qv(s,a)},d}function mI(s,a,d){d=Ro(-1,d),d.tag=3;var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var f=a.value;d.payload=function(){return h(f)},d.callback=function(){qv(s,a)}}var k=s.stateNode;return k!==null&&typeof k.componentDidCatch=="function"&&(d.callback=function(){qv(s,a),typeof h!="function"&&(pr===null?pr=new Set([this]):pr.add(this));var b=a.stack;this.componentDidCatch(a.value,{componentStack:b!==null?b:""})}),d}function RD(s,a,d){var h=s.pingCache;if(h===null){h=s.pingCache=new bX;var f=new Set;h.set(a,f)}else f=h.get(a),f===void 0&&(f=new Set,h.set(a,f));f.has(d)||(f.add(d),s=BX.bind(null,s,a,d),a.then(s,s))}function OD(s){do{var a;if((a=s.tag===13)&&(a=s.memoizedState,a=a!==null?a.dehydrated!==null:!0),a)return s;s=s.return}while(s!==null);return null}function jD(s,a,d,h,f){return s.mode&1?(s.flags|=65536,s.lanes=f,s):(s===a?s.flags|=65536:(s.flags|=128,d.flags|=131072,d.flags&=-52805,d.tag===1&&(d.alternate===null?d.tag=17:(a=Ro(-1,1),a.tag=2,gr(d,a,1))),d.lanes|=1),s)}var wX=Uo.ReactCurrentOwner,Dn=!1;function kn(s,a,d,h){a.child=s===null?G4(a,null,d,h):Fa(a,s.child,d,h)}function FD(s,a,d,h,f){d=d.render;var k=a.ref;return La(a,f),h=ZA(s,a,d,h,k,f),d=QA(),s!==null&&!Dn?(a.updateQueue=s.updateQueue,a.flags&=-2053,s.lanes&=~f,Vo(s,a,f)):(mt&&d&&OA(a),a.flags|=1,kn(s,a,h,f),a.child)}function VD(s,a,d,h,f){if(s===null){var k=d.type;return typeof k=="function"&&!a0(k)&&k.defaultProps===void 0&&d.compare===null&&d.defaultProps===void 0?(a.tag=15,a.type=k,gI(s,a,k,h,f)):(s=Yh(d.type,null,h,a,a.mode,f),s.ref=a.ref,s.return=a,a.child=s)}if(k=s.child,!(s.lanes&f)){var b=k.memoizedProps;if(d=d.compare,d=d!==null?d:Hc,d(b,h)&&s.ref===a.ref)return Vo(s,a,f)}return a.flags|=1,s=br(k,h),s.ref=a.ref,s.return=a,a.child=s}function gI(s,a,d,h,f){if(s!==null){var k=s.memoizedProps;if(Hc(k,h)&&s.ref===a.ref)if(Dn=!1,a.pendingProps=h=k,(s.lanes&f)!==0)s.flags&131072&&(Dn=!0);else return a.lanes=s.lanes,Vo(s,a,f)}return Kv(s,a,d,h,f)}function pI(s,a,d){var h=a.pendingProps,f=h.children,k=s!==null?s.memoizedState:null;if(h.mode==="hidden")if(!(a.mode&1))a.memoizedState={baseLanes:0,cachePool:null,transitions:null},it(Da,Un),Un|=d;else{if(!(d&1073741824))return s=k!==null?k.baseLanes|d:d,a.lanes=a.childLanes=1073741824,a.memoizedState={baseLanes:s,cachePool:null,transitions:null},a.updateQueue=null,it(Da,Un),Un|=s,null;a.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=k!==null?k.baseLanes:d,it(Da,Un),Un|=h}else k!==null?(h=k.baseLanes|d,a.memoizedState=null):h=d,it(Da,Un),Un|=h;return kn(s,a,f,d),a.child}function kI(s,a){var d=a.ref;(s===null&&d!==null||s!==null&&s.ref!==d)&&(a.flags|=512,a.flags|=2097152)}function Kv(s,a,d,h,f){var k=In(d)?ps:fn.current;return k=Oa(a,k),La(a,f),d=ZA(s,a,d,h,k,f),h=QA(),s!==null&&!Dn?(a.updateQueue=s.updateQueue,a.flags&=-2053,s.lanes&=~f,Vo(s,a,f)):(mt&&h&&OA(a),a.flags|=1,kn(s,a,d,f),a.child)}function HD(s,a,d,h,f){if(In(d)){var k=!0;uf(a)}else k=!1;if(La(a,f),a.stateNode===null)Gh(s,a),$4(a,d,h),Gv(a,d,h,f),h=!0;else if(s===null){var b=a.stateNode,v=a.memoizedProps;b.props=v;var g=b.context,A=d.contextType;typeof A=="object"&&A!==null?A=ki(A):(A=In(d)?ps:fn.current,A=Oa(a,A));var x=d.getDerivedStateFromProps,y=typeof x=="function"||typeof b.getSnapshotBeforeUpdate=="function";y||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(v!==h||g!==A)&&LD(a,b,h,A),rr=!1;var E=a.memoizedState;b.state=E,pf(a,h,b,f),g=a.memoizedState,v!==h||E!==g||Tn.current||rr?(typeof x=="function"&&(Wv(a,d,x,h),g=a.memoizedState),(v=rr||BD(a,d,v,h,E,g,A))?(y||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(a.flags|=4194308)):(typeof b.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=h,a.memoizedState=g),b.props=h,b.state=g,b.context=A,h=v):(typeof b.componentDidMount=="function"&&(a.flags|=4194308),h=!1)}else{b=a.stateNode,H4(s,a),v=a.memoizedProps,A=a.type===a.elementType?v:Di(a.type,v),b.props=A,y=a.pendingProps,E=b.context,g=d.contextType,typeof g=="object"&&g!==null?g=ki(g):(g=In(d)?ps:fn.current,g=Oa(a,g));var _=d.getDerivedStateFromProps;(x=typeof _=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(v!==y||E!==g)&&LD(a,b,h,g),rr=!1,E=a.memoizedState,b.state=E,pf(a,h,b,f);var D=a.memoizedState;v!==y||E!==D||Tn.current||rr?(typeof _=="function"&&(Wv(a,d,_,h),D=a.memoizedState),(A=rr||BD(a,d,A,h,E,D,g)||!1)?(x||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(h,D,g),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(h,D,g)),typeof b.componentDidUpdate=="function"&&(a.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof b.componentDidUpdate!="function"||v===s.memoizedProps&&E===s.memoizedState||(a.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||v===s.memoizedProps&&E===s.memoizedState||(a.flags|=1024),a.memoizedProps=h,a.memoizedState=D),b.props=h,b.state=D,b.context=g,h=A):(typeof b.componentDidUpdate!="function"||v===s.memoizedProps&&E===s.memoizedState||(a.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||v===s.memoizedProps&&E===s.memoizedState||(a.flags|=1024),h=!1)}return Yv(s,a,d,h,k,f)}function Yv(s,a,d,h,f,k){kI(s,a);var b=(a.flags&128)!==0;if(!h&&!b)return f&&SD(a,d,!1),Vo(s,a,k);h=a.stateNode,wX.current=a;var v=b&&typeof d.getDerivedStateFromError!="function"?null:h.render();return a.flags|=1,s!==null&&b?(a.child=Fa(a,s.child,null,k),a.child=Fa(a,null,v,k)):kn(s,a,v,k),a.memoizedState=h.state,f&&SD(a,d,!0),a.child}function bI(s){var a=s.stateNode;a.pendingContext?ED(s,a.pendingContext,a.pendingContext!==a.context):a.context&&ED(s,a.context,!1),GA(s,a.containerInfo)}function UD(s,a,d,h,f){return ja(),FA(f),a.flags|=256,kn(s,a,d,h),a.child}var Zv={dehydrated:null,treeContext:null,retryLane:0};function Qv(s){return{baseLanes:s,cachePool:null,transitions:null}}function wI(s,a,d){var h=a.pendingProps,f=vt.current,k=!1,b=(a.flags&128)!==0,v;if((v=b)||(v=s!==null&&s.memoizedState===null?!1:(f&2)!==0),v?(k=!0,a.flags&=-129):(s===null||s.memoizedState!==null)&&(f|=1),it(vt,f&1),s===null)return Uv(a),s=a.memoizedState,s!==null&&(s=s.dehydrated,s!==null)?(a.mode&1?s.data==="$!"?a.lanes=8:a.lanes=1073741824:a.lanes=1,null):(b=h.children,s=h.fallback,k?(h=a.mode,k=a.child,b={mode:"hidden",children:b},!(h&1)&&k!==null?(k.childLanes=0,k.pendingProps=b):k=Uf(b,h,0,null),s=gs(s,h,d,null),k.return=a,s.return=a,k.sibling=s,a.child=k,a.child.memoizedState=Qv(d),a.memoizedState=Zv,s):e0(a,b));if(f=s.memoizedState,f!==null&&(v=f.dehydrated,v!==null))return vX(s,a,b,h,v,f,d);if(k){k=h.fallback,b=a.mode,f=s.child,v=f.sibling;var g={mode:"hidden",children:h.children};return!(b&1)&&a.child!==f?(h=a.child,h.childLanes=0,h.pendingProps=g,a.deletions=null):(h=br(f,g),h.subtreeFlags=f.subtreeFlags&14680064),v!==null?k=br(v,k):(k=gs(k,b,d,null),k.flags|=2),k.return=a,h.return=a,h.sibling=k,a.child=h,h=k,k=a.child,b=s.child.memoizedState,b=b===null?Qv(d):{baseLanes:b.baseLanes|d,cachePool:null,transitions:b.transitions},k.memoizedState=b,k.childLanes=s.childLanes&~d,a.memoizedState=Zv,h}return k=s.child,s=k.sibling,h=br(k,{mode:"visible",children:h.children}),!(a.mode&1)&&(h.lanes=d),h.return=a,h.sibling=null,s!==null&&(d=a.deletions,d===null?(a.deletions=[s],a.flags|=16):d.push(s)),a.child=h,a.memoizedState=null,h}function e0(s,a){return a=Uf({mode:"visible",children:a},s.mode,0,null),a.return=s,s.child=a}function Bh(s,a,d,h){return h!==null&&FA(h),Fa(a,s.child,null,d),s=e0(a,a.pendingProps.children),s.flags|=2,a.memoizedState=null,s}function vX(s,a,d,h,f,k,b){if(d)return a.flags&256?(a.flags&=-257,h=av(Error(X(422))),Bh(s,a,b,h)):a.memoizedState!==null?(a.child=s.child,a.flags|=128,null):(k=h.fallback,f=a.mode,h=Uf({mode:"visible",children:h.children},f,0,null),k=gs(k,f,b,null),k.flags|=2,h.return=a,k.return=a,h.sibling=k,a.child=h,a.mode&1&&Fa(a,s.child,null,b),a.child.memoizedState=Qv(b),a.memoizedState=Zv,k);if(!(a.mode&1))return Bh(s,a,b,null);if(f.data==="$!"){if(h=f.nextSibling&&f.nextSibling.dataset,h)var v=h.dgst;return h=v,k=Error(X(419)),h=av(k,h,void 0),Bh(s,a,b,h)}if(v=(b&s.childLanes)!==0,Dn||v){if(h=Kt,h!==null){switch(b&-b){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=f&(h.suspendedLanes|b)?0:f,f!==0&&f!==k.retryLane&&(k.retryLane=f,Fo(s,f),Bi(h,s,f,-1))}return s0(),h=av(Error(X(421))),Bh(s,a,b,h)}return f.data==="$?"?(a.flags|=128,a.child=s.child,a=LX.bind(null,s),f._reactRetry=a,null):(s=k.treeContext,Wn=mr(f.nextSibling),Gn=a,mt=!0,Ii=null,s!==null&&(fi[mi++]=No,fi[mi++]=Po,fi[mi++]=ks,No=s.id,Po=s.overflow,ks=a),a=e0(a,h.children),a.flags|=4096,a)}function $D(s,a,d){s.lanes|=a;var h=s.alternate;h!==null&&(h.lanes|=a),$v(s.return,a,d)}function lv(s,a,d,h,f){var k=s.memoizedState;k===null?s.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:h,tail:d,tailMode:f}:(k.isBackwards=a,k.rendering=null,k.renderingStartTime=0,k.last=h,k.tail=d,k.tailMode=f)}function vI(s,a,d){var h=a.pendingProps,f=h.revealOrder,k=h.tail;if(kn(s,a,h.children,d),h=vt.current,h&2)h=h&1|2,a.flags|=128;else{if(s!==null&&s.flags&128)e:for(s=a.child;s!==null;){if(s.tag===13)s.memoizedState!==null&&$D(s,d,a);else if(s.tag===19)$D(s,d,a);else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===a)break e;for(;s.sibling===null;){if(s.return===null||s.return===a)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}h&=1}if(it(vt,h),!(a.mode&1))a.memoizedState=null;else switch(f){case"forwards":for(d=a.child,f=null;d!==null;)s=d.alternate,s!==null&&kf(s)===null&&(f=d),d=d.sibling;d=f,d===null?(f=a.child,a.child=null):(f=d.sibling,d.sibling=null),lv(a,!1,f,d,k);break;case"backwards":for(d=null,f=a.child,a.child=null;f!==null;){if(s=f.alternate,s!==null&&kf(s)===null){a.child=f;break}s=f.sibling,f.sibling=d,d=f,f=s}lv(a,!0,d,null,k);break;case"together":lv(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Gh(s,a){!(a.mode&1)&&s!==null&&(s.alternate=null,a.alternate=null,a.flags|=2)}function Vo(s,a,d){if(s!==null&&(a.dependencies=s.dependencies),ws|=a.lanes,!(d&a.childLanes))return null;if(s!==null&&a.child!==s.child)throw Error(X(153));if(a.child!==null){for(s=a.child,d=br(s,s.pendingProps),a.child=d,d.return=a;s.sibling!==null;)s=s.sibling,d=d.sibling=br(s,s.pendingProps),d.return=a;d.sibling=null}return a.child}function AX(s,a,d){switch(a.tag){case 3:bI(a),ja();break;case 5:q4(a);break;case 1:In(a.type)&&uf(a);break;case 4:GA(a,a.stateNode.containerInfo);break;case 10:var h=a.type._context,f=a.memoizedProps.value;it(mf,h._currentValue),h._currentValue=f;break;case 13:if(h=a.memoizedState,h!==null)return h.dehydrated!==null?(it(vt,vt.current&1),a.flags|=128,null):d&a.child.childLanes?wI(s,a,d):(it(vt,vt.current&1),s=Vo(s,a,d),s!==null?s.sibling:null);it(vt,vt.current&1);break;case 19:if(h=(d&a.childLanes)!==0,s.flags&128){if(h)return vI(s,a,d);a.flags|=128}if(f=a.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),it(vt,vt.current),h)break;return null;case 22:case 23:return a.lanes=0,pI(s,a,d)}return Vo(s,a,d)}var AI,Jv,CI,_I;AI=function(s,a){for(var d=a.child;d!==null;){if(d.tag===5||d.tag===6)s.appendChild(d.stateNode);else if(d.tag!==4&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===a)break;for(;d.sibling===null;){if(d.return===null||d.return===a)return;d=d.return}d.sibling.return=d.return,d=d.sibling}};Jv=function(){};CI=function(s,a,d,h){var f=s.memoizedProps;if(f!==h){s=a.stateNode,hs(oo.current);var k=null;switch(d){case"input":f=vv(s,f),h=vv(s,h),k=[];break;case"select":f=Ct({},f,{value:void 0}),h=Ct({},h,{value:void 0}),k=[];break;case"textarea":f=_v(s,f),h=_v(s,h),k=[];break;default:typeof f.onClick!="function"&&typeof h.onClick=="function"&&(s.onclick=cf)}xv(d,h);var b;d=null;for(A in f)if(!h.hasOwnProperty(A)&&f.hasOwnProperty(A)&&f[A]!=null)if(A==="style"){var v=f[A];for(b in v)v.hasOwnProperty(b)&&(d||(d={}),d[b]="")}else A!=="dangerouslySetInnerHTML"&&A!=="children"&&A!=="suppressContentEditableWarning"&&A!=="suppressHydrationWarning"&&A!=="autoFocus"&&(Nc.hasOwnProperty(A)?k||(k=[]):(k=k||[]).push(A,null));for(A in h){var g=h[A];if(v=f!=null?f[A]:void 0,h.hasOwnProperty(A)&&g!==v&&(g!=null||v!=null))if(A==="style")if(v){for(b in v)!v.hasOwnProperty(b)||g&&g.hasOwnProperty(b)||(d||(d={}),d[b]="");for(b in g)g.hasOwnProperty(b)&&v[b]!==g[b]&&(d||(d={}),d[b]=g[b])}else d||(k||(k=[]),k.push(A,d)),d=g;else A==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,v=v?v.__html:void 0,g!=null&&v!==g&&(k=k||[]).push(A,g)):A==="children"?typeof g!="string"&&typeof g!="number"||(k=k||[]).push(A,""+g):A!=="suppressContentEditableWarning"&&A!=="suppressHydrationWarning"&&(Nc.hasOwnProperty(A)?(g!=null&&A==="onScroll"&&lt("scroll",s),k||v===g||(k=[])):(k=k||[]).push(A,g))}d&&(k=k||[]).push("style",d);var A=k;(a.updateQueue=A)&&(a.flags|=4)}};_I=function(s,a,d,h){d!==h&&(a.flags|=4)};function mc(s,a){if(!mt)switch(s.tailMode){case"hidden":a=s.tail;for(var d=null;a!==null;)a.alternate!==null&&(d=a),a=a.sibling;d===null?s.tail=null:d.sibling=null;break;case"collapsed":d=s.tail;for(var h=null;d!==null;)d.alternate!==null&&(h=d),d=d.sibling;h===null?a||s.tail===null?s.tail=null:s.tail.sibling=null:h.sibling=null}}function dn(s){var a=s.alternate!==null&&s.alternate.child===s.child,d=0,h=0;if(a)for(var f=s.child;f!==null;)d|=f.lanes|f.childLanes,h|=f.subtreeFlags&14680064,h|=f.flags&14680064,f.return=s,f=f.sibling;else for(f=s.child;f!==null;)d|=f.lanes|f.childLanes,h|=f.subtreeFlags,h|=f.flags,f.return=s,f=f.sibling;return s.subtreeFlags|=h,s.childLanes=d,a}function CX(s,a,d){var h=a.pendingProps;switch(jA(a),a.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(a),null;case 1:return In(a.type)&&df(),dn(a),null;case 3:return h=a.stateNode,Va(),ct(Tn),ct(fn),KA(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(s===null||s.child===null)&&(Ih(a)?a.flags|=4:s===null||s.memoizedState.isDehydrated&&!(a.flags&256)||(a.flags|=1024,Ii!==null&&(sA(Ii),Ii=null))),Jv(s,a),dn(a),null;case 5:qA(a);var f=hs(qc.current);if(d=a.type,s!==null&&a.stateNode!=null)CI(s,a,d,h,f),s.ref!==a.ref&&(a.flags|=512,a.flags|=2097152);else{if(!h){if(a.stateNode===null)throw Error(X(166));return dn(a),null}if(s=hs(oo.current),Ih(a)){h=a.stateNode,d=a.type;var k=a.memoizedProps;switch(h[to]=a,h[Wc]=k,s=(a.mode&1)!==0,d){case"dialog":lt("cancel",h),lt("close",h);break;case"iframe":case"object":case"embed":lt("load",h);break;case"video":case"audio":for(f=0;f<Cc.length;f++)lt(Cc[f],h);break;case"source":lt("error",h);break;case"img":case"image":case"link":lt("error",h),lt("load",h);break;case"details":lt("toggle",h);break;case"input":XS(h,k),lt("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!k.multiple},lt("invalid",h);break;case"textarea":tD(h,k),lt("invalid",h)}xv(d,k),f=null;for(var b in k)if(k.hasOwnProperty(b)){var v=k[b];b==="children"?typeof v=="string"?h.textContent!==v&&(k.suppressHydrationWarning!==!0&&Th(h.textContent,v,s),f=["children",v]):typeof v=="number"&&h.textContent!==""+v&&(k.suppressHydrationWarning!==!0&&Th(h.textContent,v,s),f=["children",""+v]):Nc.hasOwnProperty(b)&&v!=null&&b==="onScroll"&&lt("scroll",h)}switch(d){case"input":Ah(h),eD(h,k,!0);break;case"textarea":Ah(h),nD(h);break;case"select":case"option":break;default:typeof k.onClick=="function"&&(h.onclick=cf)}h=f,a.updateQueue=h,h!==null&&(a.flags|=4)}else{b=f.nodeType===9?f:f.ownerDocument,s==="http://www.w3.org/1999/xhtml"&&(s=ZT(d)),s==="http://www.w3.org/1999/xhtml"?d==="script"?(s=b.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild)):typeof h.is=="string"?s=b.createElement(d,{is:h.is}):(s=b.createElement(d),d==="select"&&(b=s,h.multiple?b.multiple=!0:h.size&&(b.size=h.size))):s=b.createElementNS(s,d),s[to]=a,s[Wc]=h,AI(s,a,!1,!1),a.stateNode=s;e:{switch(b=Ev(d,h),d){case"dialog":lt("cancel",s),lt("close",s),f=h;break;case"iframe":case"object":case"embed":lt("load",s),f=h;break;case"video":case"audio":for(f=0;f<Cc.length;f++)lt(Cc[f],s);f=h;break;case"source":lt("error",s),f=h;break;case"img":case"image":case"link":lt("error",s),lt("load",s),f=h;break;case"details":lt("toggle",s),f=h;break;case"input":XS(s,h),f=vv(s,h),lt("invalid",s);break;case"option":f=h;break;case"select":s._wrapperState={wasMultiple:!!h.multiple},f=Ct({},h,{value:void 0}),lt("invalid",s);break;case"textarea":tD(s,h),f=_v(s,h),lt("invalid",s);break;default:f=h}xv(d,f),v=f;for(k in v)if(v.hasOwnProperty(k)){var g=v[k];k==="style"?XT(s,g):k==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,g!=null&&QT(s,g)):k==="children"?typeof g=="string"?(d!=="textarea"||g!=="")&&Pc(s,g):typeof g=="number"&&Pc(s,""+g):k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&k!=="autoFocus"&&(Nc.hasOwnProperty(k)?g!=null&&k==="onScroll"&&lt("scroll",s):g!=null&&yA(s,k,g,b))}switch(d){case"input":Ah(s),eD(s,h,!1);break;case"textarea":Ah(s),nD(s);break;case"option":h.value!=null&&s.setAttribute("value",""+wr(h.value));break;case"select":s.multiple=!!h.multiple,k=h.value,k!=null?Ta(s,!!h.multiple,k,!1):h.defaultValue!=null&&Ta(s,!!h.multiple,h.defaultValue,!0);break;default:typeof f.onClick=="function"&&(s.onclick=cf)}switch(d){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(a.flags|=4)}a.ref!==null&&(a.flags|=512,a.flags|=2097152)}return dn(a),null;case 6:if(s&&a.stateNode!=null)_I(s,a,s.memoizedProps,h);else{if(typeof h!="string"&&a.stateNode===null)throw Error(X(166));if(d=hs(qc.current),hs(oo.current),Ih(a)){if(h=a.stateNode,d=a.memoizedProps,h[to]=a,(k=h.nodeValue!==d)&&(s=Gn,s!==null))switch(s.tag){case 3:Th(h.nodeValue,d,(s.mode&1)!==0);break;case 5:s.memoizedProps.suppressHydrationWarning!==!0&&Th(h.nodeValue,d,(s.mode&1)!==0)}k&&(a.flags|=4)}else h=(d.nodeType===9?d:d.ownerDocument).createTextNode(h),h[to]=a,a.stateNode=h}return dn(a),null;case 13:if(ct(vt),h=a.memoizedState,s===null||s.memoizedState!==null&&s.memoizedState.dehydrated!==null){if(mt&&Wn!==null&&a.mode&1&&!(a.flags&128))F4(),ja(),a.flags|=98560,k=!1;else if(k=Ih(a),h!==null&&h.dehydrated!==null){if(s===null){if(!k)throw Error(X(318));if(k=a.memoizedState,k=k!==null?k.dehydrated:null,!k)throw Error(X(317));k[to]=a}else ja(),!(a.flags&128)&&(a.memoizedState=null),a.flags|=4;dn(a),k=!1}else Ii!==null&&(sA(Ii),Ii=null),k=!0;if(!k)return a.flags&65536?a:null}return a.flags&128?(a.lanes=d,a):(h=h!==null,h!==(s!==null&&s.memoizedState!==null)&&h&&(a.child.flags|=8192,a.mode&1&&(s===null||vt.current&1?Ft===0&&(Ft=3):s0())),a.updateQueue!==null&&(a.flags|=4),dn(a),null);case 4:return Va(),Jv(s,a),s===null&&Uc(a.stateNode.containerInfo),dn(a),null;case 10:return UA(a.type._context),dn(a),null;case 17:return In(a.type)&&df(),dn(a),null;case 19:if(ct(vt),k=a.memoizedState,k===null)return dn(a),null;if(h=(a.flags&128)!==0,b=k.rendering,b===null)if(h)mc(k,!1);else{if(Ft!==0||s!==null&&s.flags&128)for(s=a.child;s!==null;){if(b=kf(s),b!==null){for(a.flags|=128,mc(k,!1),h=b.updateQueue,h!==null&&(a.updateQueue=h,a.flags|=4),a.subtreeFlags=0,h=d,d=a.child;d!==null;)k=d,s=h,k.flags&=14680066,b=k.alternate,b===null?(k.childLanes=0,k.lanes=s,k.child=null,k.subtreeFlags=0,k.memoizedProps=null,k.memoizedState=null,k.updateQueue=null,k.dependencies=null,k.stateNode=null):(k.childLanes=b.childLanes,k.lanes=b.lanes,k.child=b.child,k.subtreeFlags=0,k.deletions=null,k.memoizedProps=b.memoizedProps,k.memoizedState=b.memoizedState,k.updateQueue=b.updateQueue,k.type=b.type,s=b.dependencies,k.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),d=d.sibling;return it(vt,vt.current&1|2),a.child}s=s.sibling}k.tail!==null&&Lt()>Ua&&(a.flags|=128,h=!0,mc(k,!1),a.lanes=4194304)}else{if(!h)if(s=kf(b),s!==null){if(a.flags|=128,h=!0,d=s.updateQueue,d!==null&&(a.updateQueue=d,a.flags|=4),mc(k,!0),k.tail===null&&k.tailMode==="hidden"&&!b.alternate&&!mt)return dn(a),null}else 2*Lt()-k.renderingStartTime>Ua&&d!==1073741824&&(a.flags|=128,h=!0,mc(k,!1),a.lanes=4194304);k.isBackwards?(b.sibling=a.child,a.child=b):(d=k.last,d!==null?d.sibling=b:a.child=b,k.last=b)}return k.tail!==null?(a=k.tail,k.rendering=a,k.tail=a.sibling,k.renderingStartTime=Lt(),a.sibling=null,d=vt.current,it(vt,h?d&1|2:d&1),a):(dn(a),null);case 22:case 23:return r0(),h=a.memoizedState!==null,s!==null&&s.memoizedState!==null!==h&&(a.flags|=8192),h&&a.mode&1?Un&1073741824&&(dn(a),a.subtreeFlags&6&&(a.flags|=8192)):dn(a),null;case 24:return null;case 25:return null}throw Error(X(156,a.tag))}function _X(s,a){switch(jA(a),a.tag){case 1:return In(a.type)&&df(),s=a.flags,s&65536?(a.flags=s&-65537|128,a):null;case 3:return Va(),ct(Tn),ct(fn),KA(),s=a.flags,s&65536&&!(s&128)?(a.flags=s&-65537|128,a):null;case 5:return qA(a),null;case 13:if(ct(vt),s=a.memoizedState,s!==null&&s.dehydrated!==null){if(a.alternate===null)throw Error(X(340));ja()}return s=a.flags,s&65536?(a.flags=s&-65537|128,a):null;case 19:return ct(vt),null;case 4:return Va(),null;case 10:return UA(a.type._context),null;case 22:case 23:return r0(),null;case 24:return null;default:return null}}var Lh=!1,hn=!1,yX=typeof WeakSet=="function"?WeakSet:Set,se=null;function Sa(s,a){var d=s.ref;if(d!==null)if(typeof d=="function")try{d(null)}catch(h){Tt(s,a,h)}else d.current=null}function Xv(s,a,d){try{d()}catch(h){Tt(s,a,h)}}var WD=!1;function xX(s,a){if(Pv=sf,s=S4(),RA(s)){if("selectionStart"in s)var d={start:s.selectionStart,end:s.selectionEnd};else e:{d=(d=s.ownerDocument)&&d.defaultView||window;var h=d.getSelection&&d.getSelection();if(h&&h.rangeCount!==0){d=h.anchorNode;var f=h.anchorOffset,k=h.focusNode;h=h.focusOffset;try{d.nodeType,k.nodeType}catch{d=null;break e}var b=0,v=-1,g=-1,A=0,x=0,y=s,E=null;t:for(;;){for(var _;y!==d||f!==0&&y.nodeType!==3||(v=b+f),y!==k||h!==0&&y.nodeType!==3||(g=b+h),y.nodeType===3&&(b+=y.nodeValue.length),(_=y.firstChild)!==null;)E=y,y=_;for(;;){if(y===s)break t;if(E===d&&++A===f&&(v=b),E===k&&++x===h&&(g=b),(_=y.nextSibling)!==null)break;y=E,E=y.parentNode}y=_}d=v===-1||g===-1?null:{start:v,end:g}}else d=null}d=d||{start:0,end:0}}else d=null;for(Rv={focusedElem:s,selectionRange:d},sf=!1,se=a;se!==null;)if(a=se,s=a.child,(a.subtreeFlags&1028)!==0&&s!==null)s.return=a,se=s;else for(;se!==null;){a=se;try{var D=a.alternate;if(a.flags&1024)switch(a.tag){case 0:case 11:case 15:break;case 1:if(D!==null){var O=D.memoizedProps,Q=D.memoizedState,N=a.stateNode,L=N.getSnapshotBeforeUpdate(a.elementType===a.type?O:Di(a.type,O),Q);N.__reactInternalSnapshotBeforeUpdate=L}break;case 3:var R=a.stateNode.containerInfo;R.nodeType===1?R.textContent="":R.nodeType===9&&R.documentElement&&R.removeChild(R.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(X(163))}}catch(F){Tt(a,a.return,F)}if(s=a.sibling,s!==null){s.return=a.return,se=s;break}se=a.return}return D=WD,WD=!1,D}function Tc(s,a,d){var h=a.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var f=h=h.next;do{if((f.tag&s)===s){var k=f.destroy;f.destroy=void 0,k!==void 0&&Xv(a,d,k)}f=f.next}while(f!==h)}}function Vf(s,a){if(a=a.updateQueue,a=a!==null?a.lastEffect:null,a!==null){var d=a=a.next;do{if((d.tag&s)===s){var h=d.create;d.destroy=h()}d=d.next}while(d!==a)}}function eA(s){var a=s.ref;if(a!==null){var d=s.stateNode;switch(s.tag){case 5:s=d;break;default:s=d}typeof a=="function"?a(s):a.current=s}}function yI(s){var a=s.alternate;a!==null&&(s.alternate=null,yI(a)),s.child=null,s.deletions=null,s.sibling=null,s.tag===5&&(a=s.stateNode,a!==null&&(delete a[to],delete a[Wc],delete a[Fv],delete a[aX],delete a[lX])),s.stateNode=null,s.return=null,s.dependencies=null,s.memoizedProps=null,s.memoizedState=null,s.pendingProps=null,s.stateNode=null,s.updateQueue=null}function xI(s){return s.tag===5||s.tag===3||s.tag===4}function GD(s){e:for(;;){for(;s.sibling===null;){if(s.return===null||xI(s.return))return null;s=s.return}for(s.sibling.return=s.return,s=s.sibling;s.tag!==5&&s.tag!==6&&s.tag!==18;){if(s.flags&2||s.child===null||s.tag===4)continue e;s.child.return=s,s=s.child}if(!(s.flags&2))return s.stateNode}}function tA(s,a,d){var h=s.tag;if(h===5||h===6)s=s.stateNode,a?d.nodeType===8?d.parentNode.insertBefore(s,a):d.insertBefore(s,a):(d.nodeType===8?(a=d.parentNode,a.insertBefore(s,d)):(a=d,a.appendChild(s)),d=d._reactRootContainer,d!=null||a.onclick!==null||(a.onclick=cf));else if(h!==4&&(s=s.child,s!==null))for(tA(s,a,d),s=s.sibling;s!==null;)tA(s,a,d),s=s.sibling}function nA(s,a,d){var h=s.tag;if(h===5||h===6)s=s.stateNode,a?d.insertBefore(s,a):d.appendChild(s);else if(h!==4&&(s=s.child,s!==null))for(nA(s,a,d),s=s.sibling;s!==null;)nA(s,a,d),s=s.sibling}var en=null,Ti=!1;function ir(s,a,d){for(d=d.child;d!==null;)EI(s,a,d),d=d.sibling}function EI(s,a,d){if(io&&typeof io.onCommitFiberUnmount=="function")try{io.onCommitFiberUnmount(Lf,d)}catch{}switch(d.tag){case 5:hn||Sa(d,a);case 6:var h=en,f=Ti;en=null,ir(s,a,d),en=h,Ti=f,en!==null&&(Ti?(s=en,d=d.stateNode,s.nodeType===8?s.parentNode.removeChild(d):s.removeChild(d)):en.removeChild(d.stateNode));break;case 18:en!==null&&(Ti?(s=en,d=d.stateNode,s.nodeType===8?tv(s.parentNode,d):s.nodeType===1&&tv(s,d),Fc(s)):tv(en,d.stateNode));break;case 4:h=en,f=Ti,en=d.stateNode.containerInfo,Ti=!0,ir(s,a,d),en=h,Ti=f;break;case 0:case 11:case 14:case 15:if(!hn&&(h=d.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){f=h=h.next;do{var k=f,b=k.destroy;k=k.tag,b!==void 0&&(k&2||k&4)&&Xv(d,a,b),f=f.next}while(f!==h)}ir(s,a,d);break;case 1:if(!hn&&(Sa(d,a),h=d.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=d.memoizedProps,h.state=d.memoizedState,h.componentWillUnmount()}catch(v){Tt(d,a,v)}ir(s,a,d);break;case 21:ir(s,a,d);break;case 22:d.mode&1?(hn=(h=hn)||d.memoizedState!==null,ir(s,a,d),hn=h):ir(s,a,d);break;default:ir(s,a,d)}}function qD(s){var a=s.updateQueue;if(a!==null){s.updateQueue=null;var d=s.stateNode;d===null&&(d=s.stateNode=new yX),a.forEach(function(h){var f=zX.bind(null,s,h);d.has(h)||(d.add(h),h.then(f,f))})}}function Si(s,a){var d=a.deletions;if(d!==null)for(var h=0;h<d.length;h++){var f=d[h];try{var k=s,b=a,v=b;e:for(;v!==null;){switch(v.tag){case 5:en=v.stateNode,Ti=!1;break e;case 3:en=v.stateNode.containerInfo,Ti=!0;break e;case 4:en=v.stateNode.containerInfo,Ti=!0;break e}v=v.return}if(en===null)throw Error(X(160));EI(k,b,f),en=null,Ti=!1;var g=f.alternate;g!==null&&(g.return=null),f.return=null}catch(A){Tt(f,a,A)}}if(a.subtreeFlags&12854)for(a=a.child;a!==null;)SI(a,s),a=a.sibling}function SI(s,a){var d=s.alternate,h=s.flags;switch(s.tag){case 0:case 11:case 14:case 15:if(Si(a,s),Qi(s),h&4){try{Tc(3,s,s.return),Vf(3,s)}catch(O){Tt(s,s.return,O)}try{Tc(5,s,s.return)}catch(O){Tt(s,s.return,O)}}break;case 1:Si(a,s),Qi(s),h&512&&d!==null&&Sa(d,d.return);break;case 5:if(Si(a,s),Qi(s),h&512&&d!==null&&Sa(d,d.return),s.flags&32){var f=s.stateNode;try{Pc(f,"")}catch(O){Tt(s,s.return,O)}}if(h&4&&(f=s.stateNode,f!=null)){var k=s.memoizedProps,b=d!==null?d.memoizedProps:k,v=s.type,g=s.updateQueue;if(s.updateQueue=null,g!==null)try{v==="input"&&k.type==="radio"&&k.name!=null&&KT(f,k),Ev(v,b);var A=Ev(v,k);for(b=0;b<g.length;b+=2){var x=g[b],y=g[b+1];x==="style"?XT(f,y):x==="dangerouslySetInnerHTML"?QT(f,y):x==="children"?Pc(f,y):yA(f,x,y,A)}switch(v){case"input":Av(f,k);break;case"textarea":YT(f,k);break;case"select":var E=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!k.multiple;var _=k.value;_!=null?Ta(f,!!k.multiple,_,!1):E!==!!k.multiple&&(k.defaultValue!=null?Ta(f,!!k.multiple,k.defaultValue,!0):Ta(f,!!k.multiple,k.multiple?[]:"",!1))}f[Wc]=k}catch(O){Tt(s,s.return,O)}}break;case 6:if(Si(a,s),Qi(s),h&4){if(s.stateNode===null)throw Error(X(162));f=s.stateNode,k=s.memoizedProps;try{f.nodeValue=k}catch(O){Tt(s,s.return,O)}}break;case 3:if(Si(a,s),Qi(s),h&4&&d!==null&&d.memoizedState.isDehydrated)try{Fc(a.containerInfo)}catch(O){Tt(s,s.return,O)}break;case 4:Si(a,s),Qi(s);break;case 13:Si(a,s),Qi(s),f=s.child,f.flags&8192&&(k=f.memoizedState!==null,f.stateNode.isHidden=k,!k||f.alternate!==null&&f.alternate.memoizedState!==null||(i0=Lt())),h&4&&qD(s);break;case 22:if(x=d!==null&&d.memoizedState!==null,s.mode&1?(hn=(A=hn)||x,Si(a,s),hn=A):Si(a,s),Qi(s),h&8192){if(A=s.memoizedState!==null,(s.stateNode.isHidden=A)&&!x&&s.mode&1)for(se=s,x=s.child;x!==null;){for(y=se=x;se!==null;){switch(E=se,_=E.child,E.tag){case 0:case 11:case 14:case 15:Tc(4,E,E.return);break;case 1:Sa(E,E.return);var D=E.stateNode;if(typeof D.componentWillUnmount=="function"){h=E,d=E.return;try{a=h,D.props=a.memoizedProps,D.state=a.memoizedState,D.componentWillUnmount()}catch(O){Tt(h,d,O)}}break;case 5:Sa(E,E.return);break;case 22:if(E.memoizedState!==null){YD(y);continue}}_!==null?(_.return=E,se=_):YD(y)}x=x.sibling}e:for(x=null,y=s;;){if(y.tag===5){if(x===null){x=y;try{f=y.stateNode,A?(k=f.style,typeof k.setProperty=="function"?k.setProperty("display","none","important"):k.display="none"):(v=y.stateNode,g=y.memoizedProps.style,b=g!=null&&g.hasOwnProperty("display")?g.display:null,v.style.display=JT("display",b))}catch(O){Tt(s,s.return,O)}}}else if(y.tag===6){if(x===null)try{y.stateNode.nodeValue=A?"":y.memoizedProps}catch(O){Tt(s,s.return,O)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===s)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===s)break e;for(;y.sibling===null;){if(y.return===null||y.return===s)break e;x===y&&(x=null),y=y.return}x===y&&(x=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:Si(a,s),Qi(s),h&4&&qD(s);break;case 21:break;default:Si(a,s),Qi(s)}}function Qi(s){var a=s.flags;if(a&2){try{e:{for(var d=s.return;d!==null;){if(xI(d)){var h=d;break e}d=d.return}throw Error(X(160))}switch(h.tag){case 5:var f=h.stateNode;h.flags&32&&(Pc(f,""),h.flags&=-33);var k=GD(s);nA(s,k,f);break;case 3:case 4:var b=h.stateNode.containerInfo,v=GD(s);tA(s,v,b);break;default:throw Error(X(161))}}catch(g){Tt(s,s.return,g)}s.flags&=-3}a&4096&&(s.flags&=-4097)}function EX(s,a,d){se=s,DI(s)}function DI(s,a,d){for(var h=(s.mode&1)!==0;se!==null;){var f=se,k=f.child;if(f.tag===22&&h){var b=f.memoizedState!==null||Lh;if(!b){var v=f.alternate,g=v!==null&&v.memoizedState!==null||hn;v=Lh;var A=hn;if(Lh=b,(hn=g)&&!A)for(se=f;se!==null;)b=se,g=b.child,b.tag===22&&b.memoizedState!==null?ZD(f):g!==null?(g.return=b,se=g):ZD(f);for(;k!==null;)se=k,DI(k),k=k.sibling;se=f,Lh=v,hn=A}KD(s)}else f.subtreeFlags&8772&&k!==null?(k.return=f,se=k):KD(s)}}function KD(s){for(;se!==null;){var a=se;if(a.flags&8772){var d=a.alternate;try{if(a.flags&8772)switch(a.tag){case 0:case 11:case 15:hn||Vf(5,a);break;case 1:var h=a.stateNode;if(a.flags&4&&!hn)if(d===null)h.componentDidMount();else{var f=a.elementType===a.type?d.memoizedProps:Di(a.type,d.memoizedProps);h.componentDidUpdate(f,d.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var k=a.updateQueue;k!==null&&MD(a,k,h);break;case 3:var b=a.updateQueue;if(b!==null){if(d=null,a.child!==null)switch(a.child.tag){case 5:d=a.child.stateNode;break;case 1:d=a.child.stateNode}MD(a,b,d)}break;case 5:var v=a.stateNode;if(d===null&&a.flags&4){d=v;var g=a.memoizedProps;switch(a.type){case"button":case"input":case"select":case"textarea":g.autoFocus&&d.focus();break;case"img":g.src&&(d.src=g.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(a.memoizedState===null){var A=a.alternate;if(A!==null){var x=A.memoizedState;if(x!==null){var y=x.dehydrated;y!==null&&Fc(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(X(163))}hn||a.flags&512&&eA(a)}catch(E){Tt(a,a.return,E)}}if(a===s){se=null;break}if(d=a.sibling,d!==null){d.return=a.return,se=d;break}se=a.return}}function YD(s){for(;se!==null;){var a=se;if(a===s){se=null;break}var d=a.sibling;if(d!==null){d.return=a.return,se=d;break}se=a.return}}function ZD(s){for(;se!==null;){var a=se;try{switch(a.tag){case 0:case 11:case 15:var d=a.return;try{Vf(4,a)}catch(g){Tt(a,d,g)}break;case 1:var h=a.stateNode;if(typeof h.componentDidMount=="function"){var f=a.return;try{h.componentDidMount()}catch(g){Tt(a,f,g)}}var k=a.return;try{eA(a)}catch(g){Tt(a,k,g)}break;case 5:var b=a.return;try{eA(a)}catch(g){Tt(a,b,g)}}}catch(g){Tt(a,a.return,g)}if(a===s){se=null;break}var v=a.sibling;if(v!==null){v.return=a.return,se=v;break}se=a.return}}var SX=Math.ceil,vf=Uo.ReactCurrentDispatcher,t0=Uo.ReactCurrentOwner,pi=Uo.ReactCurrentBatchConfig,ze=0,Kt=null,Pt=null,nn=0,Un=0,Da=Cr(0),Ft=0,Qc=null,ws=0,Hf=0,n0=0,Ic=null,Sn=null,i0=0,Ua=1/0,Lo=null,Af=!1,iA=null,pr=null,zh=!1,dr=null,Cf=0,Mc=0,oA=null,qh=-1,Kh=0;function bn(){return ze&6?Lt():qh!==-1?qh:qh=Lt()}function kr(s){return s.mode&1?ze&2&&nn!==0?nn&-nn:dX.transition!==null?(Kh===0&&(Kh=u4()),Kh):(s=We,s!==0||(s=window.event,s=s===void 0?16:b4(s.type)),s):1}function Bi(s,a,d,h){if(50<Mc)throw Mc=0,oA=null,Error(X(185));id(s,d,h),(!(ze&2)||s!==Kt)&&(s===Kt&&(!(ze&2)&&(Hf|=d),Ft===4&&ar(s,nn)),Mn(s,h),d===1&&ze===0&&!(a.mode&1)&&(Ua=Lt()+500,Of&&_r()))}function Mn(s,a){var d=s.callbackNode;dJ(s,a);var h=rf(s,s===Kt?nn:0);if(h===0)d!==null&&rD(d),s.callbackNode=null,s.callbackPriority=0;else if(a=h&-h,s.callbackPriority!==a){if(d!=null&&rD(d),a===1)s.tag===0?cX(QD.bind(null,s)):R4(QD.bind(null,s)),rX(function(){!(ze&6)&&_r()}),d=null;else{switch(h4(h)){case 1:d=TA;break;case 4:d=c4;break;case 16:d=of;break;case 536870912:d=d4;break;default:d=of}d=PI(d,TI.bind(null,s))}s.callbackPriority=a,s.callbackNode=d}}function TI(s,a){if(qh=-1,Kh=0,ze&6)throw Error(X(327));var d=s.callbackNode;if(za()&&s.callbackNode!==d)return null;var h=rf(s,s===Kt?nn:0);if(h===0)return null;if(h&30||h&s.expiredLanes||a)a=_f(s,h);else{a=h;var f=ze;ze|=2;var k=MI();(Kt!==s||nn!==a)&&(Lo=null,Ua=Lt()+500,ms(s,a));do try{IX();break}catch(v){II(s,v)}while(1);HA(),vf.current=k,ze=f,Pt!==null?a=0:(Kt=null,nn=0,a=Ft)}if(a!==0){if(a===2&&(f=Mv(s),f!==0&&(h=f,a=rA(s,f))),a===1)throw d=Qc,ms(s,0),ar(s,h),Mn(s,Lt()),d;if(a===6)ar(s,h);else{if(f=s.current.alternate,!(h&30)&&!DX(f)&&(a=_f(s,h),a===2&&(k=Mv(s),k!==0&&(h=k,a=rA(s,k))),a===1))throw d=Qc,ms(s,0),ar(s,h),Mn(s,Lt()),d;switch(s.finishedWork=f,s.finishedLanes=h,a){case 0:case 1:throw Error(X(345));case 2:cs(s,Sn,Lo);break;case 3:if(ar(s,h),(h&130023424)===h&&(a=i0+500-Lt(),10<a)){if(rf(s,0)!==0)break;if(f=s.suspendedLanes,(f&h)!==h){bn(),s.pingedLanes|=s.suspendedLanes&f;break}s.timeoutHandle=jv(cs.bind(null,s,Sn,Lo),a);break}cs(s,Sn,Lo);break;case 4:if(ar(s,h),(h&4194240)===h)break;for(a=s.eventTimes,f=-1;0<h;){var b=31-Mi(h);k=1<<b,b=a[b],b>f&&(f=b),h&=~k}if(h=f,h=Lt()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*SX(h/1960))-h,10<h){s.timeoutHandle=jv(cs.bind(null,s,Sn,Lo),h);break}cs(s,Sn,Lo);break;case 5:cs(s,Sn,Lo);break;default:throw Error(X(329))}}}return Mn(s,Lt()),s.callbackNode===d?TI.bind(null,s):null}function rA(s,a){var d=Ic;return s.current.memoizedState.isDehydrated&&(ms(s,a).flags|=256),s=_f(s,a),s!==2&&(a=Sn,Sn=d,a!==null&&sA(a)),s}function sA(s){Sn===null?Sn=s:Sn.push.apply(Sn,s)}function DX(s){for(var a=s;;){if(a.flags&16384){var d=a.updateQueue;if(d!==null&&(d=d.stores,d!==null))for(var h=0;h<d.length;h++){var f=d[h],k=f.getSnapshot;f=f.value;try{if(!Li(k(),f))return!1}catch{return!1}}}if(d=a.child,a.subtreeFlags&16384&&d!==null)d.return=a,a=d;else{if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function ar(s,a){for(a&=~n0,a&=~Hf,s.suspendedLanes|=a,s.pingedLanes&=~a,s=s.expirationTimes;0<a;){var d=31-Mi(a),h=1<<d;s[d]=-1,a&=~h}}function QD(s){if(ze&6)throw Error(X(327));za();var a=rf(s,0);if(!(a&1))return Mn(s,Lt()),null;var d=_f(s,a);if(s.tag!==0&&d===2){var h=Mv(s);h!==0&&(a=h,d=rA(s,h))}if(d===1)throw d=Qc,ms(s,0),ar(s,a),Mn(s,Lt()),d;if(d===6)throw Error(X(345));return s.finishedWork=s.current.alternate,s.finishedLanes=a,cs(s,Sn,Lo),Mn(s,Lt()),null}function o0(s,a){var d=ze;ze|=1;try{return s(a)}finally{ze=d,ze===0&&(Ua=Lt()+500,Of&&_r())}}function vs(s){dr!==null&&dr.tag===0&&!(ze&6)&&za();var a=ze;ze|=1;var d=pi.transition,h=We;try{if(pi.transition=null,We=1,s)return s()}finally{We=h,pi.transition=d,ze=a,!(ze&6)&&_r()}}function r0(){Un=Da.current,ct(Da)}function ms(s,a){s.finishedWork=null,s.finishedLanes=0;var d=s.timeoutHandle;if(d!==-1&&(s.timeoutHandle=-1,oX(d)),Pt!==null)for(d=Pt.return;d!==null;){var h=d;switch(jA(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&df();break;case 3:Va(),ct(Tn),ct(fn),KA();break;case 5:qA(h);break;case 4:Va();break;case 13:ct(vt);break;case 19:ct(vt);break;case 10:UA(h.type._context);break;case 22:case 23:r0()}d=d.return}if(Kt=s,Pt=s=br(s.current,null),nn=Un=a,Ft=0,Qc=null,n0=Hf=ws=0,Sn=Ic=null,us!==null){for(a=0;a<us.length;a++)if(d=us[a],h=d.interleaved,h!==null){d.interleaved=null;var f=h.next,k=d.pending;if(k!==null){var b=k.next;k.next=f,h.next=b}d.pending=h}us=null}return s}function II(s,a){do{var d=Pt;try{if(HA(),$h.current=wf,bf){for(var h=At.memoizedState;h!==null;){var f=h.queue;f!==null&&(f.pending=null),h=h.next}bf=!1}if(bs=0,qt=jt=At=null,Dc=!1,Kc=0,t0.current=null,d===null||d.return===null){Ft=1,Qc=a,Pt=null;break}e:{var k=s,b=d.return,v=d,g=a;if(a=nn,v.flags|=32768,g!==null&&typeof g=="object"&&typeof g.then=="function"){var A=g,x=v,y=x.tag;if(!(x.mode&1)&&(y===0||y===11||y===15)){var E=x.alternate;E?(x.updateQueue=E.updateQueue,x.memoizedState=E.memoizedState,x.lanes=E.lanes):(x.updateQueue=null,x.memoizedState=null)}var _=OD(b);if(_!==null){_.flags&=-257,jD(_,b,v,k,a),_.mode&1&&RD(k,A,a),a=_,g=A;var D=a.updateQueue;if(D===null){var O=new Set;O.add(g),a.updateQueue=O}else D.add(g);break e}else{if(!(a&1)){RD(k,A,a),s0();break e}g=Error(X(426))}}else if(mt&&v.mode&1){var Q=OD(b);if(Q!==null){!(Q.flags&65536)&&(Q.flags|=256),jD(Q,b,v,k,a),FA(Ha(g,v));break e}}k=g=Ha(g,v),Ft!==4&&(Ft=2),Ic===null?Ic=[k]:Ic.push(k),k=b;do{switch(k.tag){case 3:k.flags|=65536,a&=-a,k.lanes|=a;var N=fI(k,g,a);ID(k,N);break e;case 1:v=g;var L=k.type,R=k.stateNode;if(!(k.flags&128)&&(typeof L.getDerivedStateFromError=="function"||R!==null&&typeof R.componentDidCatch=="function"&&(pr===null||!pr.has(R)))){k.flags|=65536,a&=-a,k.lanes|=a;var F=mI(k,v,a);ID(k,F);break e}}k=k.return}while(k!==null)}LI(d)}catch(q){a=q,Pt===d&&d!==null&&(Pt=d=d.return);continue}break}while(1)}function MI(){var s=vf.current;return vf.current=wf,s===null?wf:s}function s0(){(Ft===0||Ft===3||Ft===2)&&(Ft=4),Kt===null||!(ws&268435455)&&!(Hf&268435455)||ar(Kt,nn)}function _f(s,a){var d=ze;ze|=2;var h=MI();(Kt!==s||nn!==a)&&(Lo=null,ms(s,a));do try{TX();break}catch(f){II(s,f)}while(1);if(HA(),ze=d,vf.current=h,Pt!==null)throw Error(X(261));return Kt=null,nn=0,Ft}function TX(){for(;Pt!==null;)BI(Pt)}function IX(){for(;Pt!==null&&!tJ();)BI(Pt)}function BI(s){var a=NI(s.alternate,s,Un);s.memoizedProps=s.pendingProps,a===null?LI(s):Pt=a,t0.current=null}function LI(s){var a=s;do{var d=a.alternate;if(s=a.return,a.flags&32768){if(d=_X(d,a),d!==null){d.flags&=32767,Pt=d;return}if(s!==null)s.flags|=32768,s.subtreeFlags=0,s.deletions=null;else{Ft=6,Pt=null;return}}else if(d=CX(d,a,Un),d!==null){Pt=d;return}if(a=a.sibling,a!==null){Pt=a;return}Pt=a=s}while(a!==null);Ft===0&&(Ft=5)}function cs(s,a,d){var h=We,f=pi.transition;try{pi.transition=null,We=1,MX(s,a,d,h)}finally{pi.transition=f,We=h}return null}function MX(s,a,d,h){do za();while(dr!==null);if(ze&6)throw Error(X(327));d=s.finishedWork;var f=s.finishedLanes;if(d===null)return null;if(s.finishedWork=null,s.finishedLanes=0,d===s.current)throw Error(X(177));s.callbackNode=null,s.callbackPriority=0;var k=d.lanes|d.childLanes;if(uJ(s,k),s===Kt&&(Pt=Kt=null,nn=0),!(d.subtreeFlags&2064)&&!(d.flags&2064)||zh||(zh=!0,PI(of,function(){return za(),null})),k=(d.flags&15990)!==0,d.subtreeFlags&15990||k){k=pi.transition,pi.transition=null;var b=We;We=1;var v=ze;ze|=4,t0.current=null,xX(s,d),SI(d,s),QJ(Rv),sf=!!Pv,Rv=Pv=null,s.current=d,EX(d),nJ(),ze=v,We=b,pi.transition=k}else s.current=d;if(zh&&(zh=!1,dr=s,Cf=f),k=s.pendingLanes,k===0&&(pr=null),rJ(d.stateNode),Mn(s,Lt()),a!==null)for(h=s.onRecoverableError,d=0;d<a.length;d++)f=a[d],h(f.value,{componentStack:f.stack,digest:f.digest});if(Af)throw Af=!1,s=iA,iA=null,s;return Cf&1&&s.tag!==0&&za(),k=s.pendingLanes,k&1?s===oA?Mc++:(Mc=0,oA=s):Mc=0,_r(),null}function za(){if(dr!==null){var s=h4(Cf),a=pi.transition,d=We;try{if(pi.transition=null,We=16>s?16:s,dr===null)var h=!1;else{if(s=dr,dr=null,Cf=0,ze&6)throw Error(X(331));var f=ze;for(ze|=4,se=s.current;se!==null;){var k=se,b=k.child;if(se.flags&16){var v=k.deletions;if(v!==null){for(var g=0;g<v.length;g++){var A=v[g];for(se=A;se!==null;){var x=se;switch(x.tag){case 0:case 11:case 15:Tc(8,x,k)}var y=x.child;if(y!==null)y.return=x,se=y;else for(;se!==null;){x=se;var E=x.sibling,_=x.return;if(yI(x),x===A){se=null;break}if(E!==null){E.return=_,se=E;break}se=_}}}var D=k.alternate;if(D!==null){var O=D.child;if(O!==null){D.child=null;do{var Q=O.sibling;O.sibling=null,O=Q}while(O!==null)}}se=k}}if(k.subtreeFlags&2064&&b!==null)b.return=k,se=b;else e:for(;se!==null;){if(k=se,k.flags&2048)switch(k.tag){case 0:case 11:case 15:Tc(9,k,k.return)}var N=k.sibling;if(N!==null){N.return=k.return,se=N;break e}se=k.return}}var L=s.current;for(se=L;se!==null;){b=se;var R=b.child;if(b.subtreeFlags&2064&&R!==null)R.return=b,se=R;else e:for(b=L;se!==null;){if(v=se,v.flags&2048)try{switch(v.tag){case 0:case 11:case 15:Vf(9,v)}}catch(q){Tt(v,v.return,q)}if(v===b){se=null;break e}var F=v.sibling;if(F!==null){F.return=v.return,se=F;break e}se=v.return}}if(ze=f,_r(),io&&typeof io.onPostCommitFiberRoot=="function")try{io.onPostCommitFiberRoot(Lf,s)}catch{}h=!0}return h}finally{We=d,pi.transition=a}}return!1}function JD(s,a,d){a=Ha(d,a),a=fI(s,a,1),s=gr(s,a,1),a=bn(),s!==null&&(id(s,1,a),Mn(s,a))}function Tt(s,a,d){if(s.tag===3)JD(s,s,d);else for(;a!==null;){if(a.tag===3){JD(a,s,d);break}else if(a.tag===1){var h=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(pr===null||!pr.has(h))){s=Ha(d,s),s=mI(a,s,1),a=gr(a,s,1),s=bn(),a!==null&&(id(a,1,s),Mn(a,s));break}}a=a.return}}function BX(s,a,d){var h=s.pingCache;h!==null&&h.delete(a),a=bn(),s.pingedLanes|=s.suspendedLanes&d,Kt===s&&(nn&d)===d&&(Ft===4||Ft===3&&(nn&130023424)===nn&&500>Lt()-i0?ms(s,0):n0|=d),Mn(s,a)}function zI(s,a){a===0&&(s.mode&1?(a=yh,yh<<=1,!(yh&130023424)&&(yh=4194304)):a=1);var d=bn();s=Fo(s,a),s!==null&&(id(s,a,d),Mn(s,d))}function LX(s){var a=s.memoizedState,d=0;a!==null&&(d=a.retryLane),zI(s,d)}function zX(s,a){var d=0;switch(s.tag){case 13:var h=s.stateNode,f=s.memoizedState;f!==null&&(d=f.retryLane);break;case 19:h=s.stateNode;break;default:throw Error(X(314))}h!==null&&h.delete(a),zI(s,d)}var NI;NI=function(s,a,d){if(s!==null)if(s.memoizedProps!==a.pendingProps||Tn.current)Dn=!0;else{if(!(s.lanes&d)&&!(a.flags&128))return Dn=!1,AX(s,a,d);Dn=!!(s.flags&131072)}else Dn=!1,mt&&a.flags&1048576&&O4(a,ff,a.index);switch(a.lanes=0,a.tag){case 2:var h=a.type;Gh(s,a),s=a.pendingProps;var f=Oa(a,fn.current);La(a,d),f=ZA(null,a,h,s,f,d);var k=QA();return a.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(a.tag=1,a.memoizedState=null,a.updateQueue=null,In(h)?(k=!0,uf(a)):k=!1,a.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,WA(a),f.updater=jf,a.stateNode=f,f._reactInternals=a,Gv(a,h,s,d),a=Yv(null,a,h,!0,k,d)):(a.tag=0,mt&&k&&OA(a),kn(null,a,f,d),a=a.child),a;case 16:h=a.elementType;e:{switch(Gh(s,a),s=a.pendingProps,f=h._init,h=f(h._payload),a.type=h,f=a.tag=PX(h),s=Di(h,s),f){case 0:a=Kv(null,a,h,s,d);break e;case 1:a=HD(null,a,h,s,d);break e;case 11:a=FD(null,a,h,s,d);break e;case 14:a=VD(null,a,h,Di(h.type,s),d);break e}throw Error(X(306,h,""))}return a;case 0:return h=a.type,f=a.pendingProps,f=a.elementType===h?f:Di(h,f),Kv(s,a,h,f,d);case 1:return h=a.type,f=a.pendingProps,f=a.elementType===h?f:Di(h,f),HD(s,a,h,f,d);case 3:e:{if(bI(a),s===null)throw Error(X(387));h=a.pendingProps,k=a.memoizedState,f=k.element,H4(s,a),pf(a,h,null,d);var b=a.memoizedState;if(h=b.element,k.isDehydrated)if(k={element:h,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},a.updateQueue.baseState=k,a.memoizedState=k,a.flags&256){f=Ha(Error(X(423)),a),a=UD(s,a,h,d,f);break e}else if(h!==f){f=Ha(Error(X(424)),a),a=UD(s,a,h,d,f);break e}else for(Wn=mr(a.stateNode.containerInfo.firstChild),Gn=a,mt=!0,Ii=null,d=G4(a,null,h,d),a.child=d;d;)d.flags=d.flags&-3|4096,d=d.sibling;else{if(ja(),h===f){a=Vo(s,a,d);break e}kn(s,a,h,d)}a=a.child}return a;case 5:return q4(a),s===null&&Uv(a),h=a.type,f=a.pendingProps,k=s!==null?s.memoizedProps:null,b=f.children,Ov(h,f)?b=null:k!==null&&Ov(h,k)&&(a.flags|=32),kI(s,a),kn(s,a,b,d),a.child;case 6:return s===null&&Uv(a),null;case 13:return wI(s,a,d);case 4:return GA(a,a.stateNode.containerInfo),h=a.pendingProps,s===null?a.child=Fa(a,null,h,d):kn(s,a,h,d),a.child;case 11:return h=a.type,f=a.pendingProps,f=a.elementType===h?f:Di(h,f),FD(s,a,h,f,d);case 7:return kn(s,a,a.pendingProps,d),a.child;case 8:return kn(s,a,a.pendingProps.children,d),a.child;case 12:return kn(s,a,a.pendingProps.children,d),a.child;case 10:e:{if(h=a.type._context,f=a.pendingProps,k=a.memoizedProps,b=f.value,it(mf,h._currentValue),h._currentValue=b,k!==null)if(Li(k.value,b)){if(k.children===f.children&&!Tn.current){a=Vo(s,a,d);break e}}else for(k=a.child,k!==null&&(k.return=a);k!==null;){var v=k.dependencies;if(v!==null){b=k.child;for(var g=v.firstContext;g!==null;){if(g.context===h){if(k.tag===1){g=Ro(-1,d&-d),g.tag=2;var A=k.updateQueue;if(A!==null){A=A.shared;var x=A.pending;x===null?g.next=g:(g.next=x.next,x.next=g),A.pending=g}}k.lanes|=d,g=k.alternate,g!==null&&(g.lanes|=d),$v(k.return,d,a),v.lanes|=d;break}g=g.next}}else if(k.tag===10)b=k.type===a.type?null:k.child;else if(k.tag===18){if(b=k.return,b===null)throw Error(X(341));b.lanes|=d,v=b.alternate,v!==null&&(v.lanes|=d),$v(b,d,a),b=k.sibling}else b=k.child;if(b!==null)b.return=k;else for(b=k;b!==null;){if(b===a){b=null;break}if(k=b.sibling,k!==null){k.return=b.return,b=k;break}b=b.return}k=b}kn(s,a,f.children,d),a=a.child}return a;case 9:return f=a.type,h=a.pendingProps.children,La(a,d),f=ki(f),h=h(f),a.flags|=1,kn(s,a,h,d),a.child;case 14:return h=a.type,f=Di(h,a.pendingProps),f=Di(h.type,f),VD(s,a,h,f,d);case 15:return gI(s,a,a.type,a.pendingProps,d);case 17:return h=a.type,f=a.pendingProps,f=a.elementType===h?f:Di(h,f),Gh(s,a),a.tag=1,In(h)?(s=!0,uf(a)):s=!1,La(a,d),$4(a,h,f),Gv(a,h,f,d),Yv(null,a,h,!0,s,d);case 19:return vI(s,a,d);case 22:return pI(s,a,d)}throw Error(X(156,a.tag))};function PI(s,a){return l4(s,a)}function NX(s,a,d,h){this.tag=s,this.key=d,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gi(s,a,d,h){return new NX(s,a,d,h)}function a0(s){return s=s.prototype,!(!s||!s.isReactComponent)}function PX(s){if(typeof s=="function")return a0(s)?1:0;if(s!=null){if(s=s.$$typeof,s===EA)return 11;if(s===SA)return 14}return 2}function br(s,a){var d=s.alternate;return d===null?(d=gi(s.tag,a,s.key,s.mode),d.elementType=s.elementType,d.type=s.type,d.stateNode=s.stateNode,d.alternate=s,s.alternate=d):(d.pendingProps=a,d.type=s.type,d.flags=0,d.subtreeFlags=0,d.deletions=null),d.flags=s.flags&14680064,d.childLanes=s.childLanes,d.lanes=s.lanes,d.child=s.child,d.memoizedProps=s.memoizedProps,d.memoizedState=s.memoizedState,d.updateQueue=s.updateQueue,a=s.dependencies,d.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},d.sibling=s.sibling,d.index=s.index,d.ref=s.ref,d}function Yh(s,a,d,h,f,k){var b=2;if(h=s,typeof s=="function")a0(s)&&(b=1);else if(typeof s=="string")b=5;else e:switch(s){case ba:return gs(d.children,f,k,a);case xA:b=8,f|=8;break;case pv:return s=gi(12,d,a,f|2),s.elementType=pv,s.lanes=k,s;case kv:return s=gi(13,d,a,f),s.elementType=kv,s.lanes=k,s;case bv:return s=gi(19,d,a,f),s.elementType=bv,s.lanes=k,s;case WT:return Uf(d,f,k,a);default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case UT:b=10;break e;case $T:b=9;break e;case EA:b=11;break e;case SA:b=14;break e;case or:b=16,h=null;break e}throw Error(X(130,s==null?s:typeof s,""))}return a=gi(b,d,a,f),a.elementType=s,a.type=h,a.lanes=k,a}function gs(s,a,d,h){return s=gi(7,s,h,a),s.lanes=d,s}function Uf(s,a,d,h){return s=gi(22,s,h,a),s.elementType=WT,s.lanes=d,s.stateNode={isHidden:!1},s}function cv(s,a,d){return s=gi(6,s,null,a),s.lanes=d,s}function dv(s,a,d){return a=gi(4,s.children!==null?s.children:[],s.key,a),a.lanes=d,a.stateNode={containerInfo:s.containerInfo,pendingChildren:null,implementation:s.implementation},a}function RX(s,a,d,h,f){this.tag=a,this.containerInfo=s,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$w(0),this.expirationTimes=$w(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$w(0),this.identifierPrefix=h,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function l0(s,a,d,h,f,k,b,v,g){return s=new RX(s,a,d,v,g),a===1?(a=1,k===!0&&(a|=8)):a=0,k=gi(3,null,null,a),s.current=k,k.stateNode=s,k.memoizedState={element:h,isDehydrated:d,cache:null,transitions:null,pendingSuspenseBoundaries:null},WA(k),s}function OX(s,a,d){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ka,key:h==null?null:""+h,children:s,containerInfo:a,implementation:d}}function RI(s){if(!s)return vr;s=s._reactInternals;e:{if(_s(s)!==s||s.tag!==1)throw Error(X(170));var a=s;do{switch(a.tag){case 3:a=a.stateNode.context;break e;case 1:if(In(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break e}}a=a.return}while(a!==null);throw Error(X(171))}if(s.tag===1){var d=s.type;if(In(d))return P4(s,d,a)}return a}function OI(s,a,d,h,f,k,b,v,g){return s=l0(d,h,!0,s,f,k,b,v,g),s.context=RI(null),d=s.current,h=bn(),f=kr(d),k=Ro(h,f),k.callback=a??null,gr(d,k,f),s.current.lanes=f,id(s,f,h),Mn(s,h),s}function $f(s,a,d,h){var f=a.current,k=bn(),b=kr(f);return d=RI(d),a.context===null?a.context=d:a.pendingContext=d,a=Ro(k,b),a.payload={element:s},h=h===void 0?null:h,h!==null&&(a.callback=h),s=gr(f,a,b),s!==null&&(Bi(s,f,b,k),Uh(s,f,b)),b}function yf(s){if(s=s.current,!s.child)return null;switch(s.child.tag){case 5:return s.child.stateNode;default:return s.child.stateNode}}function XD(s,a){if(s=s.memoizedState,s!==null&&s.dehydrated!==null){var d=s.retryLane;s.retryLane=d!==0&&d<a?d:a}}function c0(s,a){XD(s,a),(s=s.alternate)&&XD(s,a)}function jX(){return null}var jI=typeof reportError=="function"?reportError:function(s){console.error(s)};function d0(s){this._internalRoot=s}Wf.prototype.render=d0.prototype.render=function(s){var a=this._internalRoot;if(a===null)throw Error(X(409));$f(s,a,null,null)};Wf.prototype.unmount=d0.prototype.unmount=function(){var s=this._internalRoot;if(s!==null){this._internalRoot=null;var a=s.containerInfo;vs(function(){$f(null,s,null,null)}),a[jo]=null}};function Wf(s){this._internalRoot=s}Wf.prototype.unstable_scheduleHydration=function(s){if(s){var a=g4();s={blockedOn:null,target:s,priority:a};for(var d=0;d<sr.length&&a!==0&&a<sr[d].priority;d++);sr.splice(d,0,s),d===0&&k4(s)}};function u0(s){return!(!s||s.nodeType!==1&&s.nodeType!==9&&s.nodeType!==11)}function Gf(s){return!(!s||s.nodeType!==1&&s.nodeType!==9&&s.nodeType!==11&&(s.nodeType!==8||s.nodeValue!==" react-mount-point-unstable "))}function eT(){}function FX(s,a,d,h,f){if(f){if(typeof h=="function"){var k=h;h=function(){var A=yf(b);k.call(A)}}var b=OI(a,h,s,0,null,!1,!1,"",eT);return s._reactRootContainer=b,s[jo]=b.current,Uc(s.nodeType===8?s.parentNode:s),vs(),b}for(;f=s.lastChild;)s.removeChild(f);if(typeof h=="function"){var v=h;h=function(){var A=yf(g);v.call(A)}}var g=l0(s,0,!1,null,null,!1,!1,"",eT);return s._reactRootContainer=g,s[jo]=g.current,Uc(s.nodeType===8?s.parentNode:s),vs(function(){$f(a,g,d,h)}),g}function qf(s,a,d,h,f){var k=d._reactRootContainer;if(k){var b=k;if(typeof f=="function"){var v=f;f=function(){var g=yf(b);v.call(g)}}$f(a,b,s,f)}else b=FX(d,a,s,f,h);return yf(b)}f4=function(s){switch(s.tag){case 3:var a=s.stateNode;if(a.current.memoizedState.isDehydrated){var d=Ac(a.pendingLanes);d!==0&&(IA(a,d|1),Mn(a,Lt()),!(ze&6)&&(Ua=Lt()+500,_r()))}break;case 13:vs(function(){var h=Fo(s,1);if(h!==null){var f=bn();Bi(h,s,1,f)}}),c0(s,1)}};MA=function(s){if(s.tag===13){var a=Fo(s,134217728);if(a!==null){var d=bn();Bi(a,s,134217728,d)}c0(s,134217728)}};m4=function(s){if(s.tag===13){var a=kr(s),d=Fo(s,a);if(d!==null){var h=bn();Bi(d,s,a,h)}c0(s,a)}};g4=function(){return We};p4=function(s,a){var d=We;try{return We=s,a()}finally{We=d}};Dv=function(s,a,d){switch(a){case"input":if(Av(s,d),a=d.name,d.type==="radio"&&a!=null){for(d=s;d.parentNode;)d=d.parentNode;for(d=d.querySelectorAll("input[name="+JSON.stringify(""+a)+'][type="radio"]'),a=0;a<d.length;a++){var h=d[a];if(h!==s&&h.form===s.form){var f=Rf(h);if(!f)throw Error(X(90));qT(h),Av(h,f)}}}break;case"textarea":YT(s,d);break;case"select":a=d.value,a!=null&&Ta(s,!!d.multiple,a,!1)}};n4=o0;i4=vs;var VX={usingClientEntryPoint:!1,Events:[rd,Ca,Rf,e4,t4,o0]},gc={findFiberByHostInstance:ds,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},HX={bundleType:gc.bundleType,version:gc.version,rendererPackageName:gc.rendererPackageName,rendererConfig:gc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Uo.ReactCurrentDispatcher,findHostInstanceByFiber:function(s){return s=s4(s),s===null?null:s.stateNode},findFiberByHostInstance:gc.findFiberByHostInstance||jX,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nh.isDisabled&&Nh.supportsFiber)try{Lf=Nh.inject(HX),io=Nh}catch{}}Yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=VX;Yn.createPortal=function(s,a){var d=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!u0(a))throw Error(X(200));return OX(s,a,null,d)};Yn.createRoot=function(s,a){if(!u0(s))throw Error(X(299));var d=!1,h="",f=jI;return a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onRecoverableError!==void 0&&(f=a.onRecoverableError)),a=l0(s,1,!1,null,null,d,!1,h,f),s[jo]=a.current,Uc(s.nodeType===8?s.parentNode:s),new d0(a)};Yn.findDOMNode=function(s){if(s==null)return null;if(s.nodeType===1)return s;var a=s._reactInternals;if(a===void 0)throw typeof s.render=="function"?Error(X(188)):(s=Object.keys(s).join(","),Error(X(268,s)));return s=s4(a),s=s===null?null:s.stateNode,s};Yn.flushSync=function(s){return vs(s)};Yn.hydrate=function(s,a,d){if(!Gf(a))throw Error(X(200));return qf(null,s,a,!0,d)};Yn.hydrateRoot=function(s,a,d){if(!u0(s))throw Error(X(405));var h=d!=null&&d.hydratedSources||null,f=!1,k="",b=jI;if(d!=null&&(d.unstable_strictMode===!0&&(f=!0),d.identifierPrefix!==void 0&&(k=d.identifierPrefix),d.onRecoverableError!==void 0&&(b=d.onRecoverableError)),a=OI(a,null,s,1,d??null,f,!1,k,b),s[jo]=a.current,Uc(s),h)for(s=0;s<h.length;s++)d=h[s],f=d._getVersion,f=f(d._source),a.mutableSourceEagerHydrationData==null?a.mutableSourceEagerHydrationData=[d,f]:a.mutableSourceEagerHydrationData.push(d,f);return new Wf(a)};Yn.render=function(s,a,d){if(!Gf(a))throw Error(X(200));return qf(null,s,a,!1,d)};Yn.unmountComponentAtNode=function(s){if(!Gf(s))throw Error(X(40));return s._reactRootContainer?(vs(function(){qf(null,null,s,!1,function(){s._reactRootContainer=null,s[jo]=null})}),!0):!1};Yn.unstable_batchedUpdates=o0;Yn.unstable_renderSubtreeIntoContainer=function(s,a,d,h){if(!Gf(d))throw Error(X(200));if(s==null||s._reactInternals===void 0)throw Error(X(38));return qf(s,a,d,!1,h)};Yn.version="18.2.0-next-9e3b772b8-20220608";(function(s){function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(d){console.error(d)}}a(),s.exports=Yn})(jQ);const nre=kA(Xh);var tT=Xh;YS.createRoot=tT.createRoot,YS.hydrateRoot=tT.hydrateRoot;function aA(s,a){return aA=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(h,f){return h.__proto__=f,h},aA(s,a)}function UX(s,a){s.prototype=Object.create(a.prototype),s.prototype.constructor=s,aA(s,a)}function pe(){return pe=Object.assign?Object.assign.bind():function(s){for(var a=1;a<arguments.length;a++){var d=arguments[a];for(var h in d)Object.prototype.hasOwnProperty.call(d,h)&&(s[h]=d[h])}return s},pe.apply(this,arguments)}function on(s,a){if(s==null)return{};var d={},h=Object.keys(s),f,k;for(k=0;k<h.length;k++)f=h[k],!(a.indexOf(f)>=0)&&(d[f]=s[f]);return d}function FI(s){var a,d,h="";if(typeof s=="string"||typeof s=="number")h+=s;else if(typeof s=="object")if(Array.isArray(s))for(a=0;a<s.length;a++)s[a]&&(d=FI(s[a]))&&(h&&(h+=" "),h+=d);else for(a in s)s[a]&&(h&&(h+=" "),h+=a);return h}function En(){for(var s,a,d=0,h="";d<arguments.length;)(s=arguments[d++])&&(a=FI(s))&&(h&&(h+=" "),h+=a);return h}function ga(s){return s!==null&&typeof s=="object"&&s.constructor===Object}function VI(s){if(!ga(s))return s;const a={};return Object.keys(s).forEach(d=>{a[d]=VI(s[d])}),a}function ro(s,a,d={clone:!0}){const h=d.clone?pe({},s):s;return ga(s)&&ga(a)&&Object.keys(a).forEach(f=>{f!=="__proto__"&&(ga(a[f])&&f in s&&ga(s[f])?h[f]=ro(s[f],a[f],d):d.clone?h[f]=ga(a[f])?VI(a[f]):a[f]:h[f]=a[f])}),h}function $a(s){let a="https://mui.com/production-error/?code="+s;for(let d=1;d<arguments.length;d+=1)a+="&args[]="+encodeURIComponent(arguments[d]);return"Minified MUI error #"+s+"; visit "+a+" for the full message."}function rn(s){if(typeof s!="string")throw new Error($a(7));return s.charAt(0).toUpperCase()+s.slice(1)}function $X(s,a){typeof s=="function"?s(a):s&&(s.current=a)}const WX=typeof window<"u"?oe.useLayoutEffect:oe.useEffect,GX=WX;function Ph(s){const a=oe.useRef(s);return GX(()=>{a.current=s}),oe.useCallback((...d)=>(0,a.current)(...d),[])}function nT(...s){return oe.useMemo(()=>s.every(a=>a==null)?null:a=>{s.forEach(d=>{$X(d,a)})},s)}let Kf=!0,lA=!1,iT;const qX={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function KX(s){const{type:a,tagName:d}=s;return!!(d==="INPUT"&&qX[a]&&!s.readOnly||d==="TEXTAREA"&&!s.readOnly||s.isContentEditable)}function YX(s){s.metaKey||s.altKey||s.ctrlKey||(Kf=!0)}function uv(){Kf=!1}function ZX(){this.visibilityState==="hidden"&&lA&&(Kf=!0)}function QX(s){s.addEventListener("keydown",YX,!0),s.addEventListener("mousedown",uv,!0),s.addEventListener("pointerdown",uv,!0),s.addEventListener("touchstart",uv,!0),s.addEventListener("visibilitychange",ZX,!0)}function JX(s){const{target:a}=s;try{return a.matches(":focus-visible")}catch{}return Kf||KX(a)}function XX(){const s=oe.useCallback(f=>{f!=null&&QX(f.ownerDocument)},[]),a=oe.useRef(!1);function d(){return a.current?(lA=!0,window.clearTimeout(iT),iT=window.setTimeout(()=>{lA=!1},100),a.current=!1,!0):!1}function h(f){return JX(f)?(a.current=!0,!0):!1}return{isFocusVisibleRef:a,onFocus:h,onBlur:d,ref:s}}function HI(s,a){const d=pe({},a);return Object.keys(s).forEach(h=>{if(h.toString().match(/^(components|slots)$/))d[h]=pe({},s[h],d[h]);else if(h.toString().match(/^(componentsProps|slotProps)$/)){const f=s[h]||{},k=a[h];d[h]={},!k||!Object.keys(k)?d[h]=f:!f||!Object.keys(f)?d[h]=k:(d[h]=pe({},k),Object.keys(f).forEach(b=>{d[h][b]=HI(f[b],k[b])}))}else d[h]===void 0&&(d[h]=s[h])}),d}function ad(s,a,d){const h={};return Object.keys(s).forEach(f=>{h[f]=s[f].reduce((k,b)=>(b&&(k.push(a(b)),d&&d[b]&&k.push(d[b])),k),[]).join(" ")}),h}const oT=s=>s,eee=()=>{let s=oT;return{configure(a){s=a},generate(a){return s(a)},reset(){s=oT}}},tee=eee(),nee=tee,iee={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",required:"required",selected:"selected"};function Ya(s,a,d="Mui"){const h=iee[a];return h?`${d}-${h}`:`${nee.generate(s)}-${a}`}function Za(s,a,d="Mui"){const h={};return a.forEach(f=>{h[f]=Ya(s,f,d)}),h}function UI(s){var a=Object.create(null);return function(d){return a[d]===void 0&&(a[d]=s(d)),a[d]}}var oee=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,ree=UI(function(s){return oee.test(s)||s.charCodeAt(0)===111&&s.charCodeAt(1)===110&&s.charCodeAt(2)<91});function see(s){if(s.sheet)return s.sheet;for(var a=0;a<document.styleSheets.length;a++)if(document.styleSheets[a].ownerNode===s)return document.styleSheets[a]}function aee(s){var a=document.createElement("style");return a.setAttribute("data-emotion",s.key),s.nonce!==void 0&&a.setAttribute("nonce",s.nonce),a.appendChild(document.createTextNode("")),a.setAttribute("data-s",""),a}var lee=function(){function s(d){var h=this;this._insertTag=function(f){var k;h.tags.length===0?h.insertionPoint?k=h.insertionPoint.nextSibling:h.prepend?k=h.container.firstChild:k=h.before:k=h.tags[h.tags.length-1].nextSibling,h.container.insertBefore(f,k),h.tags.push(f)},this.isSpeedy=d.speedy===void 0?!0:d.speedy,this.tags=[],this.ctr=0,this.nonce=d.nonce,this.key=d.key,this.container=d.container,this.prepend=d.prepend,this.insertionPoint=d.insertionPoint,this.before=null}var a=s.prototype;return a.hydrate=function(h){h.forEach(this._insertTag)},a.insert=function(h){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(aee(this));var f=this.tags[this.tags.length-1];if(this.isSpeedy){var k=see(f);try{k.insertRule(h,k.cssRules.length)}catch{}}else f.appendChild(document.createTextNode(h));this.ctr++},a.flush=function(){this.tags.forEach(function(h){return h.parentNode&&h.parentNode.removeChild(h)}),this.tags=[],this.ctr=0},s}(),un="-ms-",xf="-moz-",Re="-webkit-",$I="comm",h0="rule",f0="decl",cee="@import",WI="@keyframes",dee=Math.abs,Yf=String.fromCharCode,uee=Object.assign;function hee(s,a){return tn(s,0)^45?(((a<<2^tn(s,0))<<2^tn(s,1))<<2^tn(s,2))<<2^tn(s,3):0}function GI(s){return s.trim()}function fee(s,a){return(s=a.exec(s))?s[0]:s}function Fe(s,a,d){return s.replace(a,d)}function cA(s,a){return s.indexOf(a)}function tn(s,a){return s.charCodeAt(a)|0}function Jc(s,a,d){return s.slice(a,d)}function Xi(s){return s.length}function m0(s){return s.length}function Rh(s,a){return a.push(s),s}function mee(s,a){return s.map(a).join("")}var Zf=1,Wa=1,qI=0,Bn=0,Nt=0,Qa="";function Qf(s,a,d,h,f,k,b){return{value:s,root:a,parent:d,type:h,props:f,children:k,line:Zf,column:Wa,length:b,return:""}}function pc(s,a){return uee(Qf("",null,null,"",null,null,0),s,{length:-s.length},a)}function gee(){return Nt}function pee(){return Nt=Bn>0?tn(Qa,--Bn):0,Wa--,Nt===10&&(Wa=1,Zf--),Nt}function qn(){return Nt=Bn<qI?tn(Qa,Bn++):0,Wa++,Nt===10&&(Wa=1,Zf++),Nt}function so(){return tn(Qa,Bn)}function Zh(){return Bn}function ld(s,a){return Jc(Qa,s,a)}function Xc(s){switch(s){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function KI(s){return Zf=Wa=1,qI=Xi(Qa=s),Bn=0,[]}function YI(s){return Qa="",s}function Qh(s){return GI(ld(Bn-1,dA(s===91?s+2:s===40?s+1:s)))}function kee(s){for(;(Nt=so())&&Nt<33;)qn();return Xc(s)>2||Xc(Nt)>3?"":" "}function bee(s,a){for(;--a&&qn()&&!(Nt<48||Nt>102||Nt>57&&Nt<65||Nt>70&&Nt<97););return ld(s,Zh()+(a<6&&so()==32&&qn()==32))}function dA(s){for(;qn();)switch(Nt){case s:return Bn;case 34:case 39:s!==34&&s!==39&&dA(Nt);break;case 40:s===41&&dA(s);break;case 92:qn();break}return Bn}function wee(s,a){for(;qn()&&s+Nt!==47+10;)if(s+Nt===42+42&&so()===47)break;return"/*"+ld(a,Bn-1)+"*"+Yf(s===47?s:qn())}function vee(s){for(;!Xc(so());)qn();return ld(s,Bn)}function Aee(s){return YI(Jh("",null,null,null,[""],s=KI(s),0,[0],s))}function Jh(s,a,d,h,f,k,b,v,g){for(var A=0,x=0,y=b,E=0,_=0,D=0,O=1,Q=1,N=1,L=0,R="",F=f,q=k,$=h,U=R;Q;)switch(D=L,L=qn()){case 40:if(D!=108&&tn(U,y-1)==58){cA(U+=Fe(Qh(L),"&","&\f"),"&\f")!=-1&&(N=-1);break}case 34:case 39:case 91:U+=Qh(L);break;case 9:case 10:case 13:case 32:U+=kee(D);break;case 92:U+=bee(Zh()-1,7);continue;case 47:switch(so()){case 42:case 47:Rh(Cee(wee(qn(),Zh()),a,d),g);break;default:U+="/"}break;case 123*O:v[A++]=Xi(U)*N;case 125*O:case 59:case 0:switch(L){case 0:case 125:Q=0;case 59+x:_>0&&Xi(U)-y&&Rh(_>32?sT(U+";",h,d,y-1):sT(Fe(U," ","")+";",h,d,y-2),g);break;case 59:U+=";";default:if(Rh($=rT(U,a,d,A,x,f,v,R,F=[],q=[],y),k),L===123)if(x===0)Jh(U,a,$,$,F,k,y,v,q);else switch(E===99&&tn(U,3)===110?100:E){case 100:case 109:case 115:Jh(s,$,$,h&&Rh(rT(s,$,$,0,0,f,v,R,f,F=[],y),q),f,q,y,v,h?F:q);break;default:Jh(U,$,$,$,[""],q,0,v,q)}}A=x=_=0,O=N=1,R=U="",y=b;break;case 58:y=1+Xi(U),_=D;default:if(O<1){if(L==123)--O;else if(L==125&&O++==0&&pee()==125)continue}switch(U+=Yf(L),L*O){case 38:N=x>0?1:(U+="\f",-1);break;case 44:v[A++]=(Xi(U)-1)*N,N=1;break;case 64:so()===45&&(U+=Qh(qn())),E=so(),x=y=Xi(R=U+=vee(Zh())),L++;break;case 45:D===45&&Xi(U)==2&&(O=0)}}return k}function rT(s,a,d,h,f,k,b,v,g,A,x){for(var y=f-1,E=f===0?k:[""],_=m0(E),D=0,O=0,Q=0;D<h;++D)for(var N=0,L=Jc(s,y+1,y=dee(O=b[D])),R=s;N<_;++N)(R=GI(O>0?E[N]+" "+L:Fe(L,/&\f/g,E[N])))&&(g[Q++]=R);return Qf(s,a,d,f===0?h0:v,g,A,x)}function Cee(s,a,d){return Qf(s,a,d,$I,Yf(gee()),Jc(s,2,-2),0)}function sT(s,a,d,h){return Qf(s,a,d,f0,Jc(s,0,h),Jc(s,h+1,-1),h)}function Na(s,a){for(var d="",h=m0(s),f=0;f<h;f++)d+=a(s[f],f,s,a)||"";return d}function _ee(s,a,d,h){switch(s.type){case cee:case f0:return s.return=s.return||s.value;case $I:return"";case WI:return s.return=s.value+"{"+Na(s.children,h)+"}";case h0:s.value=s.props.join(",")}return Xi(d=Na(s.children,h))?s.return=s.value+"{"+d+"}":""}function yee(s){var a=m0(s);return function(d,h,f,k){for(var b="",v=0;v<a;v++)b+=s[v](d,h,f,k)||"";return b}}function xee(s){return function(a){a.root||(a=a.return)&&s(a)}}var Eee=function(a,d,h){for(var f=0,k=0;f=k,k=so(),f===38&&k===12&&(d[h]=1),!Xc(k);)qn();return ld(a,Bn)},See=function(a,d){var h=-1,f=44;do switch(Xc(f)){case 0:f===38&&so()===12&&(d[h]=1),a[h]+=Eee(Bn-1,d,h);break;case 2:a[h]+=Qh(f);break;case 4:if(f===44){a[++h]=so()===58?"&\f":"",d[h]=a[h].length;break}default:a[h]+=Yf(f)}while(f=qn());return a},Dee=function(a,d){return YI(See(KI(a),d))},aT=new WeakMap,Tee=function(a){if(!(a.type!=="rule"||!a.parent||a.length<1)){for(var d=a.value,h=a.parent,f=a.column===h.column&&a.line===h.line;h.type!=="rule";)if(h=h.parent,!h)return;if(!(a.props.length===1&&d.charCodeAt(0)!==58&&!aT.get(h))&&!f){aT.set(a,!0);for(var k=[],b=Dee(d,k),v=h.props,g=0,A=0;g<b.length;g++)for(var x=0;x<v.length;x++,A++)a.props[A]=k[g]?b[g].replace(/&\f/g,v[x]):v[x]+" "+b[g]}}},Iee=function(a){if(a.type==="decl"){var d=a.value;d.charCodeAt(0)===108&&d.charCodeAt(2)===98&&(a.return="",a.value="")}};function ZI(s,a){switch(hee(s,a)){case 5103:return Re+"print-"+s+s;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Re+s+s;case 5349:case 4246:case 4810:case 6968:case 2756:return Re+s+xf+s+un+s+s;case 6828:case 4268:return Re+s+un+s+s;case 6165:return Re+s+un+"flex-"+s+s;case 5187:return Re+s+Fe(s,/(\w+).+(:[^]+)/,Re+"box-$1$2"+un+"flex-$1$2")+s;case 5443:return Re+s+un+"flex-item-"+Fe(s,/flex-|-self/,"")+s;case 4675:return Re+s+un+"flex-line-pack"+Fe(s,/align-content|flex-|-self/,"")+s;case 5548:return Re+s+un+Fe(s,"shrink","negative")+s;case 5292:return Re+s+un+Fe(s,"basis","preferred-size")+s;case 6060:return Re+"box-"+Fe(s,"-grow","")+Re+s+un+Fe(s,"grow","positive")+s;case 4554:return Re+Fe(s,/([^-])(transform)/g,"$1"+Re+"$2")+s;case 6187:return Fe(Fe(Fe(s,/(zoom-|grab)/,Re+"$1"),/(image-set)/,Re+"$1"),s,"")+s;case 5495:case 3959:return Fe(s,/(image-set\([^]*)/,Re+"$1$`$1");case 4968:return Fe(Fe(s,/(.+:)(flex-)?(.*)/,Re+"box-pack:$3"+un+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Re+s+s;case 4095:case 3583:case 4068:case 2532:return Fe(s,/(.+)-inline(.+)/,Re+"$1$2")+s;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Xi(s)-1-a>6)switch(tn(s,a+1)){case 109:if(tn(s,a+4)!==45)break;case 102:return Fe(s,/(.+:)(.+)-([^]+)/,"$1"+Re+"$2-$3$1"+xf+(tn(s,a+3)==108?"$3":"$2-$3"))+s;case 115:return~cA(s,"stretch")?ZI(Fe(s,"stretch","fill-available"),a)+s:s}break;case 4949:if(tn(s,a+1)!==115)break;case 6444:switch(tn(s,Xi(s)-3-(~cA(s,"!important")&&10))){case 107:return Fe(s,":",":"+Re)+s;case 101:return Fe(s,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Re+(tn(s,14)===45?"inline-":"")+"box$3$1"+Re+"$2$3$1"+un+"$2box$3")+s}break;case 5936:switch(tn(s,a+11)){case 114:return Re+s+un+Fe(s,/[svh]\w+-[tblr]{2}/,"tb")+s;case 108:return Re+s+un+Fe(s,/[svh]\w+-[tblr]{2}/,"tb-rl")+s;case 45:return Re+s+un+Fe(s,/[svh]\w+-[tblr]{2}/,"lr")+s}return Re+s+un+s+s}return s}var Mee=function(a,d,h,f){if(a.length>-1&&!a.return)switch(a.type){case f0:a.return=ZI(a.value,a.length);break;case WI:return Na([pc(a,{value:Fe(a.value,"@","@"+Re)})],f);case h0:if(a.length)return mee(a.props,function(k){switch(fee(k,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Na([pc(a,{props:[Fe(k,/:(read-\w+)/,":"+xf+"$1")]})],f);case"::placeholder":return Na([pc(a,{props:[Fe(k,/:(plac\w+)/,":"+Re+"input-$1")]}),pc(a,{props:[Fe(k,/:(plac\w+)/,":"+xf+"$1")]}),pc(a,{props:[Fe(k,/:(plac\w+)/,un+"input-$1")]})],f)}return""})}},Bee=[Mee],Lee=function(a){var d=a.key;if(d==="css"){var h=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(h,function(O){var Q=O.getAttribute("data-emotion");Q.indexOf(" ")!==-1&&(document.head.appendChild(O),O.setAttribute("data-s",""))})}var f=a.stylisPlugins||Bee,k={},b,v=[];b=a.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+d+' "]'),function(O){for(var Q=O.getAttribute("data-emotion").split(" "),N=1;N<Q.length;N++)k[Q[N]]=!0;v.push(O)});var g,A=[Tee,Iee];{var x,y=[_ee,xee(function(O){x.insert(O)})],E=yee(A.concat(f,y)),_=function(Q){return Na(Aee(Q),E)};g=function(Q,N,L,R){x=L,_(Q?Q+"{"+N.styles+"}":N.styles),R&&(D.inserted[N.name]=!0)}}var D={key:d,sheet:new lee({key:d,container:b,nonce:a.nonce,speedy:a.speedy,prepend:a.prepend,insertionPoint:a.insertionPoint}),nonce:a.nonce,inserted:k,registered:{},insert:g};return D.sheet.hydrate(v),D},uA={},zee={get exports(){return uA},set exports(s){uA=s}},Ge={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yt=typeof Symbol=="function"&&Symbol.for,g0=Yt?Symbol.for("react.element"):60103,p0=Yt?Symbol.for("react.portal"):60106,Jf=Yt?Symbol.for("react.fragment"):60107,Xf=Yt?Symbol.for("react.strict_mode"):60108,em=Yt?Symbol.for("react.profiler"):60114,tm=Yt?Symbol.for("react.provider"):60109,nm=Yt?Symbol.for("react.context"):60110,k0=Yt?Symbol.for("react.async_mode"):60111,im=Yt?Symbol.for("react.concurrent_mode"):60111,om=Yt?Symbol.for("react.forward_ref"):60112,rm=Yt?Symbol.for("react.suspense"):60113,Nee=Yt?Symbol.for("react.suspense_list"):60120,sm=Yt?Symbol.for("react.memo"):60115,am=Yt?Symbol.for("react.lazy"):60116,Pee=Yt?Symbol.for("react.block"):60121,Ree=Yt?Symbol.for("react.fundamental"):60117,Oee=Yt?Symbol.for("react.responder"):60118,jee=Yt?Symbol.for("react.scope"):60119;function Qn(s){if(typeof s=="object"&&s!==null){var a=s.$$typeof;switch(a){case g0:switch(s=s.type,s){case k0:case im:case Jf:case em:case Xf:case rm:return s;default:switch(s=s&&s.$$typeof,s){case nm:case om:case am:case sm:case tm:return s;default:return a}}case p0:return a}}}function QI(s){return Qn(s)===im}Ge.AsyncMode=k0;Ge.ConcurrentMode=im;Ge.ContextConsumer=nm;Ge.ContextProvider=tm;Ge.Element=g0;Ge.ForwardRef=om;Ge.Fragment=Jf;Ge.Lazy=am;Ge.Memo=sm;Ge.Portal=p0;Ge.Profiler=em;Ge.StrictMode=Xf;Ge.Suspense=rm;Ge.isAsyncMode=function(s){return QI(s)||Qn(s)===k0};Ge.isConcurrentMode=QI;Ge.isContextConsumer=function(s){return Qn(s)===nm};Ge.isContextProvider=function(s){return Qn(s)===tm};Ge.isElement=function(s){return typeof s=="object"&&s!==null&&s.$$typeof===g0};Ge.isForwardRef=function(s){return Qn(s)===om};Ge.isFragment=function(s){return Qn(s)===Jf};Ge.isLazy=function(s){return Qn(s)===am};Ge.isMemo=function(s){return Qn(s)===sm};Ge.isPortal=function(s){return Qn(s)===p0};Ge.isProfiler=function(s){return Qn(s)===em};Ge.isStrictMode=function(s){return Qn(s)===Xf};Ge.isSuspense=function(s){return Qn(s)===rm};Ge.isValidElementType=function(s){return typeof s=="string"||typeof s=="function"||s===Jf||s===im||s===em||s===Xf||s===rm||s===Nee||typeof s=="object"&&s!==null&&(s.$$typeof===am||s.$$typeof===sm||s.$$typeof===tm||s.$$typeof===nm||s.$$typeof===om||s.$$typeof===Ree||s.$$typeof===Oee||s.$$typeof===jee||s.$$typeof===Pee)};Ge.typeOf=Qn;(function(s){s.exports=Ge})(zee);var JI=uA,Fee={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Vee={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},XI={};XI[JI.ForwardRef]=Fee;XI[JI.Memo]=Vee;var Hee=!0;function Uee(s,a,d){var h="";return d.split(" ").forEach(function(f){s[f]!==void 0?a.push(s[f]+";"):h+=f+" "}),h}var e3=function(a,d,h){var f=a.key+"-"+d.name;(h===!1||Hee===!1)&&a.registered[f]===void 0&&(a.registered[f]=d.styles)},t3=function(a,d,h){e3(a,d,h);var f=a.key+"-"+d.name;if(a.inserted[d.name]===void 0){var k=d;do a.insert(d===k?"."+f:"",k,a.sheet,!0),k=k.next;while(k!==void 0)}};function $ee(s){for(var a=0,d,h=0,f=s.length;f>=4;++h,f-=4)d=s.charCodeAt(h)&255|(s.charCodeAt(++h)&255)<<8|(s.charCodeAt(++h)&255)<<16|(s.charCodeAt(++h)&255)<<24,d=(d&65535)*1540483477+((d>>>16)*59797<<16),d^=d>>>24,a=(d&65535)*1540483477+((d>>>16)*59797<<16)^(a&65535)*1540483477+((a>>>16)*59797<<16);switch(f){case 3:a^=(s.charCodeAt(h+2)&255)<<16;case 2:a^=(s.charCodeAt(h+1)&255)<<8;case 1:a^=s.charCodeAt(h)&255,a=(a&65535)*1540483477+((a>>>16)*59797<<16)}return a^=a>>>13,a=(a&65535)*1540483477+((a>>>16)*59797<<16),((a^a>>>15)>>>0).toString(36)}var Wee={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Gee=/[A-Z]|^ms/g,qee=/_EMO_([^_]+?)_([^]*?)_EMO_/g,n3=function(a){return a.charCodeAt(1)===45},lT=function(a){return a!=null&&typeof a!="boolean"},hv=UI(function(s){return n3(s)?s:s.replace(Gee,"-$&").toLowerCase()}),cT=function(a,d){switch(a){case"animation":case"animationName":if(typeof d=="string")return d.replace(qee,function(h,f,k){return eo={name:f,styles:k,next:eo},f})}return Wee[a]!==1&&!n3(a)&&typeof d=="number"&&d!==0?d+"px":d};function ed(s,a,d){if(d==null)return"";if(d.__emotion_styles!==void 0)return d;switch(typeof d){case"boolean":return"";case"object":{if(d.anim===1)return eo={name:d.name,styles:d.styles,next:eo},d.name;if(d.styles!==void 0){var h=d.next;if(h!==void 0)for(;h!==void 0;)eo={name:h.name,styles:h.styles,next:eo},h=h.next;var f=d.styles+";";return f}return Kee(s,a,d)}case"function":{if(s!==void 0){var k=eo,b=d(s);return eo=k,ed(s,a,b)}break}}if(a==null)return d;var v=a[d];return v!==void 0?v:d}function Kee(s,a,d){var h="";if(Array.isArray(d))for(var f=0;f<d.length;f++)h+=ed(s,a,d[f])+";";else for(var k in d){var b=d[k];if(typeof b!="object")a!=null&&a[b]!==void 0?h+=k+"{"+a[b]+"}":lT(b)&&(h+=hv(k)+":"+cT(k,b)+";");else if(Array.isArray(b)&&typeof b[0]=="string"&&(a==null||a[b[0]]===void 0))for(var v=0;v<b.length;v++)lT(b[v])&&(h+=hv(k)+":"+cT(k,b[v])+";");else{var g=ed(s,a,b);switch(k){case"animation":case"animationName":{h+=hv(k)+":"+g+";";break}default:h+=k+"{"+g+"}"}}}return h}var dT=/label:\s*([^\s;\n{]+)\s*(;|$)/g,eo,b0=function(a,d,h){if(a.length===1&&typeof a[0]=="object"&&a[0]!==null&&a[0].styles!==void 0)return a[0];var f=!0,k="";eo=void 0;var b=a[0];b==null||b.raw===void 0?(f=!1,k+=ed(h,d,b)):k+=b[0];for(var v=1;v<a.length;v++)k+=ed(h,d,a[v]),f&&(k+=b[v]);dT.lastIndex=0;for(var g="",A;(A=dT.exec(k))!==null;)g+="-"+A[1];var x=$ee(k)+g;return{name:x,styles:k,next:eo}},Yee=function(a){return a()},i3=KS["useInsertionEffect"]?KS["useInsertionEffect"]:!1,Zee=i3||Yee,uT=i3||oe.useLayoutEffect,o3=oe.createContext(typeof HTMLElement<"u"?Lee({key:"css"}):null);o3.Provider;var r3=function(a){return oe.forwardRef(function(d,h){var f=oe.useContext(o3);return a(d,f,h)})},s3=oe.createContext({}),ire=r3(function(s,a){var d=s.styles,h=b0([d],void 0,oe.useContext(s3)),f=oe.useRef();return uT(function(){var k=a.key+"-global",b=new a.sheet.constructor({key:k,nonce:a.sheet.nonce,container:a.sheet.container,speedy:a.sheet.isSpeedy}),v=!1,g=document.querySelector('style[data-emotion="'+k+" "+h.name+'"]');return a.sheet.tags.length&&(b.before=a.sheet.tags[0]),g!==null&&(v=!0,g.setAttribute("data-emotion",k),b.hydrate([g])),f.current=[b,v],function(){b.flush()}},[a]),uT(function(){var k=f.current,b=k[0],v=k[1];if(v){k[1]=!1;return}if(h.next!==void 0&&t3(a,h.next,!0),b.tags.length){var g=b.tags[b.tags.length-1].nextElementSibling;b.before=g,b.flush()}a.insert("",h,b,!1)},[a,h.name]),null});function Qee(){for(var s=arguments.length,a=new Array(s),d=0;d<s;d++)a[d]=arguments[d];return b0(a)}var w0=function(){var a=Qee.apply(void 0,arguments),d="animation-"+a.name;return{name:d,styles:"@keyframes "+d+"{"+a.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Jee=ree,Xee=function(a){return a!=="theme"},hT=function(a){return typeof a=="string"&&a.charCodeAt(0)>96?Jee:Xee},fT=function(a,d,h){var f;if(d){var k=d.shouldForwardProp;f=a.__emotion_forwardProp&&k?function(b){return a.__emotion_forwardProp(b)&&k(b)}:k}return typeof f!="function"&&h&&(f=a.__emotion_forwardProp),f},ete=function(a){var d=a.cache,h=a.serialized,f=a.isStringTag;return e3(d,h,f),Zee(function(){return t3(d,h,f)}),null},tte=function s(a,d){var h=a.__emotion_real===a,f=h&&a.__emotion_base||a,k,b;d!==void 0&&(k=d.label,b=d.target);var v=fT(a,d,h),g=v||hT(f),A=!g("as");return function(){var x=arguments,y=h&&a.__emotion_styles!==void 0?a.__emotion_styles.slice(0):[];if(k!==void 0&&y.push("label:"+k+";"),x[0]==null||x[0].raw===void 0)y.push.apply(y,x);else{y.push(x[0][0]);for(var E=x.length,_=1;_<E;_++)y.push(x[_],x[0][_])}var D=r3(function(O,Q,N){var L=A&&O.as||f,R="",F=[],q=O;if(O.theme==null){q={};for(var $ in O)q[$]=O[$];q.theme=oe.useContext(s3)}typeof O.className=="string"?R=Uee(Q.registered,F,O.className):O.className!=null&&(R=O.className+" ");var U=b0(y.concat(F),Q.registered,q);R+=Q.key+"-"+U.name,b!==void 0&&(R+=" "+b);var K=A&&v===void 0?hT(L):g,ee={};for(var Y in O)A&&Y==="as"||K(Y)&&(ee[Y]=O[Y]);return ee.className=R,ee.ref=N,oe.createElement(oe.Fragment,null,oe.createElement(ete,{cache:Q,serialized:U,isStringTag:typeof L=="string"}),oe.createElement(L,ee))});return D.displayName=k!==void 0?k:"Styled("+(typeof f=="string"?f:f.displayName||f.name||"Component")+")",D.defaultProps=a.defaultProps,D.__emotion_real=D,D.__emotion_base=f,D.__emotion_styles=y,D.__emotion_forwardProp=v,Object.defineProperty(D,"toString",{value:function(){return"."+b}}),D.withComponent=function(O,Q){return s(O,pe({},d,Q,{shouldForwardProp:fT(D,Q,!0)})).apply(void 0,y)},D}},nte=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],hA=tte.bind();nte.forEach(function(s){hA[s]=hA(s)});const ite=hA;/** @license MUI v5.11.0
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function ote(s,a){return ite(s,a)}const rte=(s,a)=>{Array.isArray(s.__emotion_styles)&&(s.__emotion_styles=a(s.__emotion_styles))};function Bc(s,a){return a?ro(s,a,{clone:!1}):s}const v0={xs:0,sm:600,md:900,lg:1200,xl:1536},mT={keys:["xs","sm","md","lg","xl"],up:s=>`@media (min-width:${v0[s]}px)`};function Ho(s,a,d){const h=s.theme||{};if(Array.isArray(a)){const k=h.breakpoints||mT;return a.reduce((b,v,g)=>(b[k.up(k.keys[g])]=d(a[g]),b),{})}if(typeof a=="object"){const k=h.breakpoints||mT;return Object.keys(a).reduce((b,v)=>{if(Object.keys(k.values||v0).indexOf(v)!==-1){const g=k.up(v);b[g]=d(a[v],v)}else{const g=v;b[g]=a[g]}return b},{})}return d(a)}function a3(s={}){var a;return((a=s.keys)==null?void 0:a.reduce((h,f)=>{const k=s.up(f);return h[k]={},h},{}))||{}}function l3(s,a){return s.reduce((d,h)=>{const f=d[h];return(!f||Object.keys(f).length===0)&&delete d[h],d},a)}function ore(s,...a){const d=a3(s),h=[d,...a].reduce((f,k)=>ro(f,k),{});return l3(Object.keys(d),h)}function ste(s,a){if(typeof s!="object")return{};const d={},h=Object.keys(a);return Array.isArray(s)?h.forEach((f,k)=>{k<s.length&&(d[f]=!0)}):h.forEach(f=>{s[f]!=null&&(d[f]=!0)}),d}function rre({values:s,breakpoints:a,base:d}){const h=d||ste(s,a),f=Object.keys(h);if(f.length===0)return s;let k;return f.reduce((b,v,g)=>(Array.isArray(s)?(b[v]=s[g]!=null?s[g]:s[k],k=g):typeof s=="object"?(b[v]=s[v]!=null?s[v]:s[k],k=v):b[v]=s,b),{})}function lm(s,a,d=!0){if(!a||typeof a!="string")return null;if(s&&s.vars&&d){const h=`vars.${a}`.split(".").reduce((f,k)=>f&&f[k]?f[k]:null,s);if(h!=null)return h}return a.split(".").reduce((h,f)=>h&&h[f]!=null?h[f]:null,s)}function Ef(s,a,d,h=d){let f;return typeof s=="function"?f=s(d):Array.isArray(s)?f=s[d]||h:f=lm(s,d)||h,a&&(f=a(f,h,s)),f}function Ve(s){const{prop:a,cssProperty:d=s.prop,themeKey:h,transform:f}=s,k=b=>{if(b[a]==null)return null;const v=b[a],g=b.theme,A=lm(g,h)||{};return Ho(b,v,y=>{let E=Ef(A,f,y);return y===E&&typeof y=="string"&&(E=Ef(A,f,`${a}${y==="default"?"":rn(y)}`,y)),d===!1?E:{[d]:E}})};return k.propTypes={},k.filterProps=[a],k}function cm(...s){const a=s.reduce((h,f)=>(f.filterProps.forEach(k=>{h[k]=f}),h),{}),d=h=>Object.keys(h).reduce((f,k)=>a[k]?Bc(f,a[k](h)):f,{});return d.propTypes={},d.filterProps=s.reduce((h,f)=>h.concat(f.filterProps),[]),d}function ate(s){const a={};return d=>(a[d]===void 0&&(a[d]=s(d)),a[d])}const lte={m:"margin",p:"padding"},cte={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},gT={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},dte=ate(s=>{if(s.length>2)if(gT[s])s=gT[s];else return[s];const[a,d]=s.split(""),h=lte[a],f=cte[d]||"";return Array.isArray(f)?f.map(k=>h+k):[h+f]}),A0=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],C0=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...A0,...C0];function cd(s,a,d,h){var f;const k=(f=lm(s,a,!1))!=null?f:d;return typeof k=="number"?b=>typeof b=="string"?b:k*b:Array.isArray(k)?b=>typeof b=="string"?b:k[b]:typeof k=="function"?k:()=>{}}function c3(s){return cd(s,"spacing",8)}function dd(s,a){if(typeof a=="string"||a==null)return a;const d=Math.abs(a),h=s(d);return a>=0?h:typeof h=="number"?-h:`-${h}`}function ute(s,a){return d=>s.reduce((h,f)=>(h[f]=dd(a,d),h),{})}function hte(s,a,d,h){if(a.indexOf(d)===-1)return null;const f=dte(d),k=ute(f,h),b=s[d];return Ho(s,b,k)}function d3(s,a){const d=c3(s.theme);return Object.keys(s).map(h=>hte(s,a,h,d)).reduce(Bc,{})}function St(s){return d3(s,A0)}St.propTypes={};St.filterProps=A0;function Dt(s){return d3(s,C0)}Dt.propTypes={};Dt.filterProps=C0;function no(s){return typeof s!="number"?s:`${s}px solid`}const fte=Ve({prop:"border",themeKey:"borders",transform:no}),mte=Ve({prop:"borderTop",themeKey:"borders",transform:no}),gte=Ve({prop:"borderRight",themeKey:"borders",transform:no}),pte=Ve({prop:"borderBottom",themeKey:"borders",transform:no}),kte=Ve({prop:"borderLeft",themeKey:"borders",transform:no}),bte=Ve({prop:"borderColor",themeKey:"palette"}),wte=Ve({prop:"borderTopColor",themeKey:"palette"}),vte=Ve({prop:"borderRightColor",themeKey:"palette"}),Ate=Ve({prop:"borderBottomColor",themeKey:"palette"}),Cte=Ve({prop:"borderLeftColor",themeKey:"palette"}),dm=s=>{if(s.borderRadius!==void 0&&s.borderRadius!==null){const a=cd(s.theme,"shape.borderRadius",4),d=h=>({borderRadius:dd(a,h)});return Ho(s,s.borderRadius,d)}return null};dm.propTypes={};dm.filterProps=["borderRadius"];cm(fte,mte,gte,pte,kte,bte,wte,vte,Ate,Cte,dm);const um=s=>{if(s.gap!==void 0&&s.gap!==null){const a=cd(s.theme,"spacing",8),d=h=>({gap:dd(a,h)});return Ho(s,s.gap,d)}return null};um.propTypes={};um.filterProps=["gap"];const hm=s=>{if(s.columnGap!==void 0&&s.columnGap!==null){const a=cd(s.theme,"spacing",8),d=h=>({columnGap:dd(a,h)});return Ho(s,s.columnGap,d)}return null};hm.propTypes={};hm.filterProps=["columnGap"];const fm=s=>{if(s.rowGap!==void 0&&s.rowGap!==null){const a=cd(s.theme,"spacing",8),d=h=>({rowGap:dd(a,h)});return Ho(s,s.rowGap,d)}return null};fm.propTypes={};fm.filterProps=["rowGap"];const _te=Ve({prop:"gridColumn"}),yte=Ve({prop:"gridRow"}),xte=Ve({prop:"gridAutoFlow"}),Ete=Ve({prop:"gridAutoColumns"}),Ste=Ve({prop:"gridAutoRows"}),Dte=Ve({prop:"gridTemplateColumns"}),Tte=Ve({prop:"gridTemplateRows"}),Ite=Ve({prop:"gridTemplateAreas"}),Mte=Ve({prop:"gridArea"});cm(um,hm,fm,_te,yte,xte,Ete,Ste,Dte,Tte,Ite,Mte);function Pa(s,a){return a==="grey"?a:s}const Bte=Ve({prop:"color",themeKey:"palette",transform:Pa}),Lte=Ve({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Pa}),zte=Ve({prop:"backgroundColor",themeKey:"palette",transform:Pa});cm(Bte,Lte,zte);function $n(s){return s<=1&&s!==0?`${s*100}%`:s}const Nte=Ve({prop:"width",transform:$n}),_0=s=>{if(s.maxWidth!==void 0&&s.maxWidth!==null){const a=d=>{var h,f,k;return{maxWidth:((h=s.theme)==null||(f=h.breakpoints)==null||(k=f.values)==null?void 0:k[d])||v0[d]||$n(d)}};return Ho(s,s.maxWidth,a)}return null};_0.filterProps=["maxWidth"];const Pte=Ve({prop:"minWidth",transform:$n}),Rte=Ve({prop:"height",transform:$n}),Ote=Ve({prop:"maxHeight",transform:$n}),jte=Ve({prop:"minHeight",transform:$n});Ve({prop:"size",cssProperty:"width",transform:$n});Ve({prop:"size",cssProperty:"height",transform:$n});const Fte=Ve({prop:"boxSizing"});cm(Nte,_0,Pte,Rte,Ote,jte,Fte);const Vte={border:{themeKey:"borders",transform:no},borderTop:{themeKey:"borders",transform:no},borderRight:{themeKey:"borders",transform:no},borderBottom:{themeKey:"borders",transform:no},borderLeft:{themeKey:"borders",transform:no},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:dm},color:{themeKey:"palette",transform:Pa},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:Pa},backgroundColor:{themeKey:"palette",transform:Pa},p:{style:Dt},pt:{style:Dt},pr:{style:Dt},pb:{style:Dt},pl:{style:Dt},px:{style:Dt},py:{style:Dt},padding:{style:Dt},paddingTop:{style:Dt},paddingRight:{style:Dt},paddingBottom:{style:Dt},paddingLeft:{style:Dt},paddingX:{style:Dt},paddingY:{style:Dt},paddingInline:{style:Dt},paddingInlineStart:{style:Dt},paddingInlineEnd:{style:Dt},paddingBlock:{style:Dt},paddingBlockStart:{style:Dt},paddingBlockEnd:{style:Dt},m:{style:St},mt:{style:St},mr:{style:St},mb:{style:St},ml:{style:St},mx:{style:St},my:{style:St},margin:{style:St},marginTop:{style:St},marginRight:{style:St},marginBottom:{style:St},marginLeft:{style:St},marginX:{style:St},marginY:{style:St},marginInline:{style:St},marginInlineStart:{style:St},marginInlineEnd:{style:St},marginBlock:{style:St},marginBlockStart:{style:St},marginBlockEnd:{style:St},displayPrint:{cssProperty:!1,transform:s=>({"@media print":{display:s}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:um},rowGap:{style:fm},columnGap:{style:hm},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:$n},maxWidth:{style:_0},minWidth:{transform:$n},height:{transform:$n},maxHeight:{transform:$n},minHeight:{transform:$n},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}},y0=Vte;function Hte(...s){const a=s.reduce((h,f)=>h.concat(Object.keys(f)),[]),d=new Set(a);return s.every(h=>d.size===Object.keys(h).length)}function Ute(s,a){return typeof s=="function"?s(a):s}function $te(){function s(d,h,f,k){const b={[d]:h,theme:f},v=k[d];if(!v)return{[d]:h};const{cssProperty:g=d,themeKey:A,transform:x,style:y}=v;if(h==null)return null;const E=lm(f,A)||{};return y?y(b):Ho(b,h,D=>{let O=Ef(E,x,D);return D===O&&typeof D=="string"&&(O=Ef(E,x,`${d}${D==="default"?"":rn(D)}`,D)),g===!1?O:{[g]:O}})}function a(d){var h;const{sx:f,theme:k={}}=d||{};if(!f)return null;const b=(h=k.unstable_sxConfig)!=null?h:y0;function v(g){let A=g;if(typeof g=="function")A=g(k);else if(typeof g!="object")return g;if(!A)return null;const x=a3(k.breakpoints),y=Object.keys(x);let E=x;return Object.keys(A).forEach(_=>{const D=Ute(A[_],k);if(D!=null)if(typeof D=="object")if(b[_])E=Bc(E,s(_,D,k,b));else{const O=Ho({theme:k},D,Q=>({[_]:Q}));Hte(O,D)?E[_]=a({sx:D,theme:k}):E=Bc(E,O)}else E=Bc(E,s(_,D,k,b))}),l3(y,E)}return Array.isArray(f)?f.map(v):v(f)}return a}const u3=$te();u3.filterProps=["sx"];const x0=u3,Wte=["values","unit","step"],Gte=s=>{const a=Object.keys(s).map(d=>({key:d,val:s[d]}))||[];return a.sort((d,h)=>d.val-h.val),a.reduce((d,h)=>pe({},d,{[h.key]:h.val}),{})};function qte(s){const{values:a={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:d="px",step:h=5}=s,f=on(s,Wte),k=Gte(a),b=Object.keys(k);function v(E){return`@media (min-width:${typeof a[E]=="number"?a[E]:E}${d})`}function g(E){return`@media (max-width:${(typeof a[E]=="number"?a[E]:E)-h/100}${d})`}function A(E,_){const D=b.indexOf(_);return`@media (min-width:${typeof a[E]=="number"?a[E]:E}${d}) and (max-width:${(D!==-1&&typeof a[b[D]]=="number"?a[b[D]]:_)-h/100}${d})`}function x(E){return b.indexOf(E)+1<b.length?A(E,b[b.indexOf(E)+1]):v(E)}function y(E){const _=b.indexOf(E);return _===0?v(b[1]):_===b.length-1?g(b[_]):A(E,b[b.indexOf(E)+1]).replace("@media","@media not all and")}return pe({keys:b,values:k,up:v,down:g,between:A,only:x,not:y,unit:d},f)}const Kte={borderRadius:4},Yte=Kte;function Zte(s=8){if(s.mui)return s;const a=c3({spacing:s}),d=(...h)=>(h.length===0?[1]:h).map(k=>{const b=a(k);return typeof b=="number"?`${b}px`:b}).join(" ");return d.mui=!0,d}const Qte=["breakpoints","palette","spacing","shape"];function E0(s={},...a){const{breakpoints:d={},palette:h={},spacing:f,shape:k={}}=s,b=on(s,Qte),v=qte(d),g=Zte(f);let A=ro({breakpoints:v,direction:"ltr",components:{},palette:pe({mode:"light"},h),spacing:g,shape:pe({},Yte,k)},b);return A=a.reduce((x,y)=>ro(x,y),A),A.unstable_sxConfig=pe({},y0,b==null?void 0:b.unstable_sxConfig),A.unstable_sx=function(y){return x0({sx:y,theme:this})},A}const Jte=oe.createContext(null),Xte=Jte;function ene(){return oe.useContext(Xte)}function tne(s){return Object.keys(s).length===0}function nne(s=null){const a=ene();return!a||tne(a)?s:a}const ine=E0();function one(s=ine){return nne(s)}const rne=["variant"];function pT(s){return s.length===0}function h3(s){const{variant:a}=s,d=on(s,rne);let h=a||"";return Object.keys(d).sort().forEach(f=>{f==="color"?h+=pT(h)?s[f]:rn(s[f]):h+=`${pT(h)?f:rn(f)}${rn(s[f].toString())}`}),h}const sne=["name","slot","skipVariantsResolver","skipSx","overridesResolver"],ane=["theme"],lne=["theme"];function kc(s){return Object.keys(s).length===0}function cne(s){return typeof s=="string"&&s.charCodeAt(0)>96}const dne=(s,a)=>a.components&&a.components[s]&&a.components[s].styleOverrides?a.components[s].styleOverrides:null,une=(s,a)=>{let d=[];a&&a.components&&a.components[s]&&a.components[s].variants&&(d=a.components[s].variants);const h={};return d.forEach(f=>{const k=h3(f.props);h[k]=f.style}),h},hne=(s,a,d,h)=>{var f,k;const{ownerState:b={}}=s,v=[],g=d==null||(f=d.components)==null||(k=f[h])==null?void 0:k.variants;return g&&g.forEach(A=>{let x=!0;Object.keys(A.props).forEach(y=>{b[y]!==A.props[y]&&s[y]!==A.props[y]&&(x=!1)}),x&&v.push(a[h3(A.props)])}),v};function Lc(s){return s!=="ownerState"&&s!=="theme"&&s!=="sx"&&s!=="as"}const fne=E0();function mne(s={}){const{defaultTheme:a=fne,rootShouldForwardProp:d=Lc,slotShouldForwardProp:h=Lc}=s,f=k=>{const b=kc(k.theme)?a:k.theme;return x0(pe({},k,{theme:b}))};return f.__mui_systemSx=!0,(k,b={})=>{rte(k,R=>R.filter(F=>!(F!=null&&F.__mui_systemSx)));const{name:v,slot:g,skipVariantsResolver:A,skipSx:x,overridesResolver:y}=b,E=on(b,sne),_=A!==void 0?A:g&&g!=="Root"||!1,D=x||!1;let O,Q=Lc;g==="Root"?Q=d:g?Q=h:cne(k)&&(Q=void 0);const N=ote(k,pe({shouldForwardProp:Q,label:O},E)),L=(R,...F)=>{const q=F?F.map(ee=>typeof ee=="function"&&ee.__emotion_real!==ee?Y=>{let{theme:ce}=Y,be=on(Y,ane);return ee(pe({theme:kc(ce)?a:ce},be))}:ee):[];let $=R;v&&y&&q.push(ee=>{const Y=kc(ee.theme)?a:ee.theme,ce=dne(v,Y);if(ce){const be={};return Object.entries(ce).forEach(([ge,we])=>{be[ge]=typeof we=="function"?we(pe({},ee,{theme:Y})):we}),y(ee,be)}return null}),v&&!_&&q.push(ee=>{const Y=kc(ee.theme)?a:ee.theme;return hne(ee,une(v,Y),Y,v)}),D||q.push(f);const U=q.length-F.length;if(Array.isArray(R)&&U>0){const ee=new Array(U).fill("");$=[...R,...ee],$.raw=[...R.raw,...ee]}else typeof R=="function"&&R.__emotion_real!==R&&($=ee=>{let{theme:Y}=ee,ce=on(ee,lne);return R(pe({theme:kc(Y)?a:Y},ce))});return N($,...q)};return N.withConfig&&(L.withConfig=N.withConfig),L}}function gne(s){const{theme:a,name:d,props:h}=s;return!a||!a.components||!a.components[d]||!a.components[d].defaultProps?h:HI(a.components[d].defaultProps,h)}function pne({props:s,name:a,defaultTheme:d}){const h=one(d);return gne({theme:h,name:a,props:s})}function S0(s,a=0,d=1){return Math.min(Math.max(a,s),d)}function kne(s){s=s.slice(1);const a=new RegExp(`.{1,${s.length>=6?2:1}}`,"g");let d=s.match(a);return d&&d[0].length===1&&(d=d.map(h=>h+h)),d?`rgb${d.length===4?"a":""}(${d.map((h,f)=>f<3?parseInt(h,16):Math.round(parseInt(h,16)/255*1e3)/1e3).join(", ")})`:""}function As(s){if(s.type)return s;if(s.charAt(0)==="#")return As(kne(s));const a=s.indexOf("("),d=s.substring(0,a);if(["rgb","rgba","hsl","hsla","color"].indexOf(d)===-1)throw new Error($a(9,s));let h=s.substring(a+1,s.length-1),f;if(d==="color"){if(h=h.split(" "),f=h.shift(),h.length===4&&h[3].charAt(0)==="/"&&(h[3]=h[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(f)===-1)throw new Error($a(10,f))}else h=h.split(",");return h=h.map(k=>parseFloat(k)),{type:d,values:h,colorSpace:f}}function mm(s){const{type:a,colorSpace:d}=s;let{values:h}=s;return a.indexOf("rgb")!==-1?h=h.map((f,k)=>k<3?parseInt(f,10):f):a.indexOf("hsl")!==-1&&(h[1]=`${h[1]}%`,h[2]=`${h[2]}%`),a.indexOf("color")!==-1?h=`${d} ${h.join(" ")}`:h=`${h.join(", ")}`,`${a}(${h})`}function bne(s){s=As(s);const{values:a}=s,d=a[0],h=a[1]/100,f=a[2]/100,k=h*Math.min(f,1-f),b=(A,x=(A+d/30)%12)=>f-k*Math.max(Math.min(x-3,9-x,1),-1);let v="rgb";const g=[Math.round(b(0)*255),Math.round(b(8)*255),Math.round(b(4)*255)];return s.type==="hsla"&&(v+="a",g.push(a[3])),mm({type:v,values:g})}function fA(s){s=As(s);let a=s.type==="hsl"||s.type==="hsla"?As(bne(s)).values:s.values;return a=a.map(d=>(s.type!=="color"&&(d/=255),d<=.03928?d/12.92:((d+.055)/1.055)**2.4)),Number((.2126*a[0]+.7152*a[1]+.0722*a[2]).toFixed(3))}function wne(s,a){const d=fA(s),h=fA(a);return(Math.max(d,h)+.05)/(Math.min(d,h)+.05)}function Sf(s,a){return s=As(s),a=S0(a),(s.type==="rgb"||s.type==="hsl")&&(s.type+="a"),s.type==="color"?s.values[3]=`/${a}`:s.values[3]=a,mm(s)}function Df(s,a){if(s=As(s),a=S0(a),s.type.indexOf("hsl")!==-1)s.values[2]*=1-a;else if(s.type.indexOf("rgb")!==-1||s.type.indexOf("color")!==-1)for(let d=0;d<3;d+=1)s.values[d]*=1-a;return mm(s)}function Tf(s,a){if(s=As(s),a=S0(a),s.type.indexOf("hsl")!==-1)s.values[2]+=(100-s.values[2])*a;else if(s.type.indexOf("rgb")!==-1)for(let d=0;d<3;d+=1)s.values[d]+=(255-s.values[d])*a;else if(s.type.indexOf("color")!==-1)for(let d=0;d<3;d+=1)s.values[d]+=(1-s.values[d])*a;return mm(s)}function sre(s,a=.15){return fA(s)>.5?Df(s,a):Tf(s,a)}function vne(s,a){return pe({toolbar:{minHeight:56,[s.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[s.up("sm")]:{minHeight:64}}},a)}const Ane={black:"#000",white:"#fff"},td=Ane,Cne={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},_ne=Cne,yne={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},da=yne,xne={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},ua=xne,Ene={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},bc=Ene,Sne={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},ha=Sne,Dne={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},fa=Dne,Tne={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},ma=Tne,Ine=["mode","contrastThreshold","tonalOffset"],kT={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:td.white,default:td.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},fv={text:{primary:td.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:td.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function bT(s,a,d,h){const f=h.light||h,k=h.dark||h*1.5;s[a]||(s.hasOwnProperty(d)?s[a]=s[d]:a==="light"?s.light=Tf(s.main,f):a==="dark"&&(s.dark=Df(s.main,k)))}function Mne(s="light"){return s==="dark"?{main:ha[200],light:ha[50],dark:ha[400]}:{main:ha[700],light:ha[400],dark:ha[800]}}function Bne(s="light"){return s==="dark"?{main:da[200],light:da[50],dark:da[400]}:{main:da[500],light:da[300],dark:da[700]}}function Lne(s="light"){return s==="dark"?{main:ua[500],light:ua[300],dark:ua[700]}:{main:ua[700],light:ua[400],dark:ua[800]}}function zne(s="light"){return s==="dark"?{main:fa[400],light:fa[300],dark:fa[700]}:{main:fa[700],light:fa[500],dark:fa[900]}}function Nne(s="light"){return s==="dark"?{main:ma[400],light:ma[300],dark:ma[700]}:{main:ma[800],light:ma[500],dark:ma[900]}}function Pne(s="light"){return s==="dark"?{main:bc[400],light:bc[300],dark:bc[700]}:{main:"#ed6c02",light:bc[500],dark:bc[900]}}function Rne(s){const{mode:a="light",contrastThreshold:d=3,tonalOffset:h=.2}=s,f=on(s,Ine),k=s.primary||Mne(a),b=s.secondary||Bne(a),v=s.error||Lne(a),g=s.info||zne(a),A=s.success||Nne(a),x=s.warning||Pne(a);function y(O){return wne(O,fv.text.primary)>=d?fv.text.primary:kT.text.primary}const E=({color:O,name:Q,mainShade:N=500,lightShade:L=300,darkShade:R=700})=>{if(O=pe({},O),!O.main&&O[N]&&(O.main=O[N]),!O.hasOwnProperty("main"))throw new Error($a(11,Q?` (${Q})`:"",N));if(typeof O.main!="string")throw new Error($a(12,Q?` (${Q})`:"",JSON.stringify(O.main)));return bT(O,"light",L,h),bT(O,"dark",R,h),O.contrastText||(O.contrastText=y(O.main)),O},_={dark:fv,light:kT};return ro(pe({common:pe({},td),mode:a,primary:E({color:k,name:"primary"}),secondary:E({color:b,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:E({color:v,name:"error"}),warning:E({color:x,name:"warning"}),info:E({color:g,name:"info"}),success:E({color:A,name:"success"}),grey:_ne,contrastThreshold:d,getContrastText:y,augmentColor:E,tonalOffset:h},_[a]),f)}const One=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function jne(s){return Math.round(s*1e5)/1e5}const wT={textTransform:"uppercase"},vT='"Roboto", "Helvetica", "Arial", sans-serif';function Fne(s,a){const d=typeof a=="function"?a(s):a,{fontFamily:h=vT,fontSize:f=14,fontWeightLight:k=300,fontWeightRegular:b=400,fontWeightMedium:v=500,fontWeightBold:g=700,htmlFontSize:A=16,allVariants:x,pxToRem:y}=d,E=on(d,One),_=f/14,D=y||(N=>`${N/A*_}rem`),O=(N,L,R,F,q)=>pe({fontFamily:h,fontWeight:N,fontSize:D(L),lineHeight:R},h===vT?{letterSpacing:`${jne(F/L)}em`}:{},q,x),Q={h1:O(k,96,1.167,-1.5),h2:O(k,60,1.2,-.5),h3:O(b,48,1.167,0),h4:O(b,34,1.235,.25),h5:O(b,24,1.334,0),h6:O(v,20,1.6,.15),subtitle1:O(b,16,1.75,.15),subtitle2:O(v,14,1.57,.1),body1:O(b,16,1.5,.15),body2:O(b,14,1.43,.15),button:O(v,14,1.75,.4,wT),caption:O(b,12,1.66,.4),overline:O(b,12,2.66,1,wT)};return ro(pe({htmlFontSize:A,pxToRem:D,fontFamily:h,fontSize:f,fontWeightLight:k,fontWeightRegular:b,fontWeightMedium:v,fontWeightBold:g},Q),E,{clone:!1})}const Vne=.2,Hne=.14,Une=.12;function ft(...s){return[`${s[0]}px ${s[1]}px ${s[2]}px ${s[3]}px rgba(0,0,0,${Vne})`,`${s[4]}px ${s[5]}px ${s[6]}px ${s[7]}px rgba(0,0,0,${Hne})`,`${s[8]}px ${s[9]}px ${s[10]}px ${s[11]}px rgba(0,0,0,${Une})`].join(",")}const $ne=["none",ft(0,2,1,-1,0,1,1,0,0,1,3,0),ft(0,3,1,-2,0,2,2,0,0,1,5,0),ft(0,3,3,-2,0,3,4,0,0,1,8,0),ft(0,2,4,-1,0,4,5,0,0,1,10,0),ft(0,3,5,-1,0,5,8,0,0,1,14,0),ft(0,3,5,-1,0,6,10,0,0,1,18,0),ft(0,4,5,-2,0,7,10,1,0,2,16,1),ft(0,5,5,-3,0,8,10,1,0,3,14,2),ft(0,5,6,-3,0,9,12,1,0,3,16,2),ft(0,6,6,-3,0,10,14,1,0,4,18,3),ft(0,6,7,-4,0,11,15,1,0,4,20,3),ft(0,7,8,-4,0,12,17,2,0,5,22,4),ft(0,7,8,-4,0,13,19,2,0,5,24,4),ft(0,7,9,-4,0,14,21,2,0,5,26,4),ft(0,8,9,-5,0,15,22,2,0,6,28,5),ft(0,8,10,-5,0,16,24,2,0,6,30,5),ft(0,8,11,-5,0,17,26,2,0,6,32,5),ft(0,9,11,-5,0,18,28,2,0,7,34,6),ft(0,9,12,-6,0,19,29,2,0,7,36,6),ft(0,10,13,-6,0,20,31,3,0,8,38,7),ft(0,10,13,-6,0,21,33,3,0,8,40,7),ft(0,10,14,-6,0,22,35,3,0,8,42,7),ft(0,11,14,-7,0,23,36,3,0,9,44,8),ft(0,11,15,-7,0,24,38,3,0,9,46,8)],Wne=$ne,Gne=["duration","easing","delay"],qne={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},Kne={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function AT(s){return`${Math.round(s)}ms`}function Yne(s){if(!s)return 0;const a=s/36;return Math.round((4+15*a**.25+a/5)*10)}function Zne(s){const a=pe({},qne,s.easing),d=pe({},Kne,s.duration);return pe({getAutoHeightDuration:Yne,create:(f=["all"],k={})=>{const{duration:b=d.standard,easing:v=a.easeInOut,delay:g=0}=k;return on(k,Gne),(Array.isArray(f)?f:[f]).map(A=>`${A} ${typeof b=="string"?b:AT(b)} ${v} ${typeof g=="string"?g:AT(g)}`).join(",")}},s,{easing:a,duration:d})}const Qne={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},Jne=Qne,Xne=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function eie(s={},...a){const{mixins:d={},palette:h={},transitions:f={},typography:k={}}=s,b=on(s,Xne);if(s.vars)throw new Error($a(18));const v=Rne(h),g=E0(s);let A=ro(g,{mixins:vne(g.breakpoints,d),palette:v,shadows:Wne.slice(),typography:Fne(v,k),transitions:Zne(f),zIndex:pe({},Jne)});return A=ro(A,b),A=a.reduce((x,y)=>ro(x,y),A),A.unstable_sxConfig=pe({},y0,b==null?void 0:b.unstable_sxConfig),A.unstable_sx=function(y){return x0({sx:y,theme:this})},A}const tie=eie(),f3=tie;function Ja({props:s,name:a}){return pne({props:s,name:a,defaultTheme:f3})}const nie=s=>Lc(s)&&s!=="classes",are=Lc,iie=mne({defaultTheme:f3,rootShouldForwardProp:nie}),ao=iie,CT=pa.createContext(null);function oie(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function D0(s,a){var d=function(k){return a&&oe.isValidElement(k)?a(k):k},h=Object.create(null);return s&&oe.Children.map(s,function(f){return f}).forEach(function(f){h[f.key]=d(f)}),h}function rie(s,a){s=s||{},a=a||{};function d(x){return x in a?a[x]:s[x]}var h=Object.create(null),f=[];for(var k in s)k in a?f.length&&(h[k]=f,f=[]):f.push(k);var b,v={};for(var g in a){if(h[g])for(b=0;b<h[g].length;b++){var A=h[g][b];v[h[g][b]]=d(A)}v[g]=d(g)}for(b=0;b<f.length;b++)v[f[b]]=d(f[b]);return v}function fs(s,a,d){return d[a]!=null?d[a]:s.props[a]}function sie(s,a){return D0(s.children,function(d){return oe.cloneElement(d,{onExited:a.bind(null,d),in:!0,appear:fs(d,"appear",s),enter:fs(d,"enter",s),exit:fs(d,"exit",s)})})}function aie(s,a,d){var h=D0(s.children),f=rie(a,h);return Object.keys(f).forEach(function(k){var b=f[k];if(oe.isValidElement(b)){var v=k in a,g=k in h,A=a[k],x=oe.isValidElement(A)&&!A.props.in;g&&(!v||x)?f[k]=oe.cloneElement(b,{onExited:d.bind(null,b),in:!0,exit:fs(b,"exit",s),enter:fs(b,"enter",s)}):!g&&v&&!x?f[k]=oe.cloneElement(b,{in:!1}):g&&v&&oe.isValidElement(A)&&(f[k]=oe.cloneElement(b,{onExited:d.bind(null,b),in:A.props.in,exit:fs(b,"exit",s),enter:fs(b,"enter",s)}))}}),f}var lie=Object.values||function(s){return Object.keys(s).map(function(a){return s[a]})},cie={component:"div",childFactory:function(a){return a}},T0=function(s){UX(a,s);function a(h,f){var k;k=s.call(this,h,f)||this;var b=k.handleExited.bind(oie(k));return k.state={contextValue:{isMounting:!0},handleExited:b,firstRender:!0},k}var d=a.prototype;return d.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},d.componentWillUnmount=function(){this.mounted=!1},a.getDerivedStateFromProps=function(f,k){var b=k.children,v=k.handleExited,g=k.firstRender;return{children:g?sie(f,v):aie(f,b,v),firstRender:!1}},d.handleExited=function(f,k){var b=D0(this.props.children);f.key in b||(f.props.onExited&&f.props.onExited(k),this.mounted&&this.setState(function(v){var g=pe({},v.children);return delete g[f.key],{children:g}}))},d.render=function(){var f=this.props,k=f.component,b=f.childFactory,v=on(f,["component","childFactory"]),g=this.state.contextValue,A=lie(this.state.children).map(b);return delete v.appear,delete v.enter,delete v.exit,k===null?pa.createElement(CT.Provider,{value:g},A):pa.createElement(CT.Provider,{value:g},pa.createElement(k,v,A))},a}(pa.Component);T0.propTypes={};T0.defaultProps=cie;const die=T0;function uie(s){const{className:a,classes:d,pulsate:h=!1,rippleX:f,rippleY:k,rippleSize:b,in:v,onExited:g,timeout:A}=s,[x,y]=oe.useState(!1),E=En(a,d.ripple,d.rippleVisible,h&&d.ripplePulsate),_={width:b,height:b,top:-(b/2)+k,left:-(b/2)+f},D=En(d.child,x&&d.childLeaving,h&&d.childPulsate);return!v&&!x&&y(!0),oe.useEffect(()=>{if(!v&&g!=null){const O=setTimeout(g,A);return()=>{clearTimeout(O)}}},[g,v,A]),Je("span",{className:E,style:_,children:Je("span",{className:D})})}const hie=Za("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),hi=hie,fie=["center","classes","className"];let gm=s=>s,_T,yT,xT,ET;const mA=550,mie=80,gie=w0(_T||(_T=gm`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),pie=w0(yT||(yT=gm`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),kie=w0(xT||(xT=gm`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),bie=ao("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),wie=ao(uie,{name:"MuiTouchRipple",slot:"Ripple"})(ET||(ET=gm`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),hi.rippleVisible,gie,mA,({theme:s})=>s.transitions.easing.easeInOut,hi.ripplePulsate,({theme:s})=>s.transitions.duration.shorter,hi.child,hi.childLeaving,pie,mA,({theme:s})=>s.transitions.easing.easeInOut,hi.childPulsate,kie,({theme:s})=>s.transitions.easing.easeInOut),vie=oe.forwardRef(function(a,d){const h=Ja({props:a,name:"MuiTouchRipple"}),{center:f=!1,classes:k={},className:b}=h,v=on(h,fie),[g,A]=oe.useState([]),x=oe.useRef(0),y=oe.useRef(null);oe.useEffect(()=>{y.current&&(y.current(),y.current=null)},[g]);const E=oe.useRef(!1),_=oe.useRef(null),D=oe.useRef(null),O=oe.useRef(null);oe.useEffect(()=>()=>{clearTimeout(_.current)},[]);const Q=oe.useCallback(F=>{const{pulsate:q,rippleX:$,rippleY:U,rippleSize:K,cb:ee}=F;A(Y=>[...Y,Je(wie,{classes:{ripple:En(k.ripple,hi.ripple),rippleVisible:En(k.rippleVisible,hi.rippleVisible),ripplePulsate:En(k.ripplePulsate,hi.ripplePulsate),child:En(k.child,hi.child),childLeaving:En(k.childLeaving,hi.childLeaving),childPulsate:En(k.childPulsate,hi.childPulsate)},timeout:mA,pulsate:q,rippleX:$,rippleY:U,rippleSize:K},x.current)]),x.current+=1,y.current=ee},[k]),N=oe.useCallback((F={},q={},$=()=>{})=>{const{pulsate:U=!1,center:K=f||q.pulsate,fakeElement:ee=!1}=q;if((F==null?void 0:F.type)==="mousedown"&&E.current){E.current=!1;return}(F==null?void 0:F.type)==="touchstart"&&(E.current=!0);const Y=ee?null:O.current,ce=Y?Y.getBoundingClientRect():{width:0,height:0,left:0,top:0};let be,ge,we;if(K||F===void 0||F.clientX===0&&F.clientY===0||!F.clientX&&!F.touches)be=Math.round(ce.width/2),ge=Math.round(ce.height/2);else{const{clientX:_t,clientY:Me}=F.touches&&F.touches.length>0?F.touches[0]:F;be=Math.round(_t-ce.left),ge=Math.round(Me-ce.top)}if(K)we=Math.sqrt((2*ce.width**2+ce.height**2)/3),we%2===0&&(we+=1);else{const _t=Math.max(Math.abs((Y?Y.clientWidth:0)-be),be)*2+2,Me=Math.max(Math.abs((Y?Y.clientHeight:0)-ge),ge)*2+2;we=Math.sqrt(_t**2+Me**2)}F!=null&&F.touches?D.current===null&&(D.current=()=>{Q({pulsate:U,rippleX:be,rippleY:ge,rippleSize:we,cb:$})},_.current=setTimeout(()=>{D.current&&(D.current(),D.current=null)},mie)):Q({pulsate:U,rippleX:be,rippleY:ge,rippleSize:we,cb:$})},[f,Q]),L=oe.useCallback(()=>{N({},{pulsate:!0})},[N]),R=oe.useCallback((F,q)=>{if(clearTimeout(_.current),(F==null?void 0:F.type)==="touchend"&&D.current){D.current(),D.current=null,_.current=setTimeout(()=>{R(F,q)});return}D.current=null,A($=>$.length>0?$.slice(1):$),y.current=q},[]);return oe.useImperativeHandle(d,()=>({pulsate:L,start:N,stop:R}),[L,N,R]),Je(bie,pe({className:En(hi.root,k.root,b),ref:O},v,{children:Je(die,{component:null,exit:!0,children:g})}))}),Aie=vie;function Cie(s){return Ya("MuiButtonBase",s)}const _ie=Za("MuiButtonBase",["root","disabled","focusVisible"]),yie=_ie,xie=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],Eie=s=>{const{disabled:a,focusVisible:d,focusVisibleClassName:h,classes:f}=s,b=ad({root:["root",a&&"disabled",d&&"focusVisible"]},Cie,f);return d&&h&&(b.root+=` ${h}`),b},Sie=ao("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(s,a)=>a.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${yie.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Die=oe.forwardRef(function(a,d){const h=Ja({props:a,name:"MuiButtonBase"}),{action:f,centerRipple:k=!1,children:b,className:v,component:g="button",disabled:A=!1,disableRipple:x=!1,disableTouchRipple:y=!1,focusRipple:E=!1,LinkComponent:_="a",onBlur:D,onClick:O,onContextMenu:Q,onDragLeave:N,onFocus:L,onFocusVisible:R,onKeyDown:F,onKeyUp:q,onMouseDown:$,onMouseLeave:U,onMouseUp:K,onTouchEnd:ee,onTouchMove:Y,onTouchStart:ce,tabIndex:be=0,TouchRippleProps:ge,touchRippleRef:we,type:_t}=h,Me=on(h,xie),Vt=oe.useRef(null),ie=oe.useRef(null),M=nT(ie,we),{isFocusVisibleRef:re,onFocus:qe,onBlur:dt,ref:zi}=XX(),[Rt,Ln]=oe.useState(!1);A&&Rt&&Ln(!1),oe.useImperativeHandle(f,()=>({focusVisible:()=>{Ln(!0),Vt.current.focus()}}),[]);const[It,mn]=oe.useState(!1);oe.useEffect(()=>{mn(!0)},[]);const zn=It&&!x&&!A;oe.useEffect(()=>{Rt&&E&&!x&&It&&ie.current.pulsate()},[x,E,Rt,It]);function An(_e,De,Er=y){return Ph(Ss=>(De&&De(Ss),!Er&&ie.current&&ie.current[_e](Ss),!0))}const Ne=An("start",$),Xa=An("stop",Q),ys=An("stop",N),Jn=An("stop",K),lo=An("stop",_e=>{Rt&&_e.preventDefault(),U&&U(_e)}),el=An("start",ce),tl=An("stop",ee),yr=An("stop",Y),xs=An("stop",_e=>{dt(_e),re.current===!1&&Ln(!1),D&&D(_e)},!1),xr=Ph(_e=>{Vt.current||(Vt.current=_e.currentTarget),qe(_e),re.current===!0&&(Ln(!0),R&&R(_e)),L&&L(_e)}),co=()=>{const _e=Vt.current;return g&&g!=="button"&&!(_e.tagName==="A"&&_e.href)},Ni=oe.useRef(!1),nl=Ph(_e=>{E&&!Ni.current&&Rt&&ie.current&&_e.key===" "&&(Ni.current=!0,ie.current.stop(_e,()=>{ie.current.start(_e)})),_e.target===_e.currentTarget&&co()&&_e.key===" "&&_e.preventDefault(),F&&F(_e),_e.target===_e.currentTarget&&co()&&_e.key==="Enter"&&!A&&(_e.preventDefault(),O&&O(_e))}),He=Ph(_e=>{E&&_e.key===" "&&ie.current&&Rt&&!_e.defaultPrevented&&(Ni.current=!1,ie.current.stop(_e,()=>{ie.current.pulsate(_e)})),q&&q(_e),O&&_e.target===_e.currentTarget&&co()&&_e.key===" "&&!_e.defaultPrevented&&O(_e)});let Zt=g;Zt==="button"&&(Me.href||Me.to)&&(Zt=_);const Xn={};Zt==="button"?(Xn.type=_t===void 0?"button":_t,Xn.disabled=A):(!Me.href&&!Me.to&&(Xn.role="button"),A&&(Xn["aria-disabled"]=A));const $o=nT(d,zi,Vt),wi=pe({},h,{centerRipple:k,component:g,disabled:A,disableRipple:x,disableTouchRipple:y,focusRipple:E,tabIndex:be,focusVisible:Rt}),Es=Eie(wi);return Bf(Sie,pe({as:Zt,className:En(Es.root,v),ownerState:wi,onBlur:xs,onClick:O,onContextMenu:Xa,onFocus:xr,onKeyDown:nl,onKeyUp:He,onMouseDown:Ne,onMouseLeave:lo,onMouseUp:Jn,onDragLeave:ys,onTouchEnd:tl,onTouchMove:yr,onTouchStart:el,ref:$o,tabIndex:A?-1:be,type:_t},Xn,Me,{children:[b,zn?Je(Aie,pe({ref:M,center:k},ge)):null]}))}),Tie=Die;function Iie(s){return Ya("MuiSvgIcon",s)}Za("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const Mie=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],Bie=s=>{const{color:a,fontSize:d,classes:h}=s,f={root:["root",a!=="inherit"&&`color${rn(a)}`,`fontSize${rn(d)}`]};return ad(f,Iie,h)},Lie=ao("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(s,a)=>{const{ownerState:d}=s;return[a.root,d.color!=="inherit"&&a[`color${rn(d.color)}`],a[`fontSize${rn(d.fontSize)}`]]}})(({theme:s,ownerState:a})=>{var d,h,f,k,b,v,g,A,x,y,E,_,D,O,Q,N,L;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:(d=s.transitions)==null||(h=d.create)==null?void 0:h.call(d,"fill",{duration:(f=s.transitions)==null||(k=f.duration)==null?void 0:k.shorter}),fontSize:{inherit:"inherit",small:((b=s.typography)==null||(v=b.pxToRem)==null?void 0:v.call(b,20))||"1.25rem",medium:((g=s.typography)==null||(A=g.pxToRem)==null?void 0:A.call(g,24))||"1.5rem",large:((x=s.typography)==null||(y=x.pxToRem)==null?void 0:y.call(x,35))||"2.1875rem"}[a.fontSize],color:(E=(_=(s.vars||s).palette)==null||(D=_[a.color])==null?void 0:D.main)!=null?E:{action:(O=(s.vars||s).palette)==null||(Q=O.action)==null?void 0:Q.active,disabled:(N=(s.vars||s).palette)==null||(L=N.action)==null?void 0:L.disabled,inherit:void 0}[a.color]}}),m3=oe.forwardRef(function(a,d){const h=Ja({props:a,name:"MuiSvgIcon"}),{children:f,className:k,color:b="inherit",component:v="svg",fontSize:g="medium",htmlColor:A,inheritViewBox:x=!1,titleAccess:y,viewBox:E="0 0 24 24"}=h,_=on(h,Mie),D=pe({},h,{color:b,component:v,fontSize:g,instanceFontSize:a.fontSize,inheritViewBox:x,viewBox:E}),O={};x||(O.viewBox=E);const Q=Bie(D);return Bf(Lie,pe({as:v,className:En(Q.root,k),focusable:"false",color:A,"aria-hidden":y?void 0:!0,role:y?"img":void 0,ref:d},O,_,{ownerState:D,children:[f,y?Je("title",{children:y}):null]}))});m3.muiName="SvgIcon";const ST=m3;function ud(s,a){function d(h,f){return Je(ST,pe({"data-testid":`${a}Icon`,ref:f},h,{children:s}))}return d.muiName=ST.muiName,oe.memo(oe.forwardRef(d))}var gA={},zie={get exports(){return gA},set exports(s){gA=s}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(s){(function(){var a={}.hasOwnProperty;function d(){for(var h=[],f=0;f<arguments.length;f++){var k=arguments[f];if(k){var b=typeof k;if(b==="string"||b==="number")h.push(k);else if(Array.isArray(k)){if(k.length){var v=d.apply(null,k);v&&h.push(v)}}else if(b==="object"){if(k.toString!==Object.prototype.toString&&!k.toString.toString().includes("[native code]")){h.push(k.toString());continue}for(var g in k)a.call(k,g)&&k[g]&&h.push(g)}}}return h.join(" ")}s.exports?(d.default=d,s.exports=d):window.classNames=d})()})(zie);const I0=gA,Nie=["xxl","xl","lg","md","sm","xs"],Pie="xs",pm=oe.createContext({prefixes:{},breakpoints:Nie,minBreakpoint:Pie});function g3(s,a){const{prefixes:d}=oe.useContext(pm);return s||d[a]||a}function p3(){const{breakpoints:s}=oe.useContext(pm);return s}function k3(){const{minBreakpoint:s}=oe.useContext(pm);return s}function lre(){const{dir:s}=oe.useContext(pm);return s==="rtl"}const Rie=s=>{let a;return s<1?a=5.11916*s**2:a=4.5*Math.log(s+1)+2,(a/100).toFixed(2)},DT=Rie;function Oie(s){return Ya("MuiPaper",s)}Za("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const jie=["className","component","elevation","square","variant"],Fie=s=>{const{square:a,elevation:d,variant:h,classes:f}=s,k={root:["root",h,!a&&"rounded",h==="elevation"&&`elevation${d}`]};return ad(k,Oie,f)},Vie=ao("div",{name:"MuiPaper",slot:"Root",overridesResolver:(s,a)=>{const{ownerState:d}=s;return[a.root,a[d.variant],!d.square&&a.rounded,d.variant==="elevation"&&a[`elevation${d.elevation}`]]}})(({theme:s,ownerState:a})=>{var d;return pe({backgroundColor:(s.vars||s).palette.background.paper,color:(s.vars||s).palette.text.primary,transition:s.transitions.create("box-shadow")},!a.square&&{borderRadius:s.shape.borderRadius},a.variant==="outlined"&&{border:`1px solid ${(s.vars||s).palette.divider}`},a.variant==="elevation"&&pe({boxShadow:(s.vars||s).shadows[a.elevation]},!s.vars&&s.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${Sf("#fff",DT(a.elevation))}, ${Sf("#fff",DT(a.elevation))})`},s.vars&&{backgroundImage:(d=s.vars.overlays)==null?void 0:d[a.elevation]}))}),Hie=oe.forwardRef(function(a,d){const h=Ja({props:a,name:"MuiPaper"}),{className:f,component:k="div",elevation:b=1,square:v=!1,variant:g="elevation"}=h,A=on(h,jie),x=pe({},h,{component:k,elevation:b,square:v,variant:g}),y=Fie(x);return Je(Vie,pe({as:k,ownerState:x,className:En(y.root,f),ref:d},A))}),Uie=Hie;function $ie(s){return Ya("MuiAlert",s)}const Wie=Za("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),TT=Wie;function Gie(s){return Ya("MuiIconButton",s)}const qie=Za("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),Kie=qie,Yie=["edge","children","className","color","disabled","disableFocusRipple","size"],Zie=s=>{const{classes:a,disabled:d,color:h,edge:f,size:k}=s,b={root:["root",d&&"disabled",h!=="default"&&`color${rn(h)}`,f&&`edge${rn(f)}`,`size${rn(k)}`]};return ad(b,Gie,a)},Qie=ao(Tie,{name:"MuiIconButton",slot:"Root",overridesResolver:(s,a)=>{const{ownerState:d}=s;return[a.root,d.color!=="default"&&a[`color${rn(d.color)}`],d.edge&&a[`edge${rn(d.edge)}`],a[`size${rn(d.size)}`]]}})(({theme:s,ownerState:a})=>pe({textAlign:"center",flex:"0 0 auto",fontSize:s.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(s.vars||s).palette.action.active,transition:s.transitions.create("background-color",{duration:s.transitions.duration.shortest})},!a.disableRipple&&{"&:hover":{backgroundColor:s.vars?`rgba(${s.vars.palette.action.activeChannel} / ${s.vars.palette.action.hoverOpacity})`:Sf(s.palette.action.active,s.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},a.edge==="start"&&{marginLeft:a.size==="small"?-3:-12},a.edge==="end"&&{marginRight:a.size==="small"?-3:-12}),({theme:s,ownerState:a})=>{var d;const h=(d=(s.vars||s).palette)==null?void 0:d[a.color];return pe({},a.color==="inherit"&&{color:"inherit"},a.color!=="inherit"&&a.color!=="default"&&pe({color:h==null?void 0:h.main},!a.disableRipple&&{"&:hover":pe({},h&&{backgroundColor:s.vars?`rgba(${h.mainChannel} / ${s.vars.palette.action.hoverOpacity})`:Sf(h.main,s.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),a.size==="small"&&{padding:5,fontSize:s.typography.pxToRem(18)},a.size==="large"&&{padding:12,fontSize:s.typography.pxToRem(28)},{[`&.${Kie.disabled}`]:{backgroundColor:"transparent",color:(s.vars||s).palette.action.disabled}})}),Jie=oe.forwardRef(function(a,d){const h=Ja({props:a,name:"MuiIconButton"}),{edge:f=!1,children:k,className:b,color:v="default",disabled:g=!1,disableFocusRipple:A=!1,size:x="medium"}=h,y=on(h,Yie),E=pe({},h,{edge:f,color:v,disabled:g,disableFocusRipple:A,size:x}),_=Zie(E);return Je(Qie,pe({className:En(_.root,b),centerRipple:!0,focusRipple:!A,disabled:g,ref:d,ownerState:E},y,{children:k}))}),Xie=Jie,eoe=ud(Je("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),toe=ud(Je("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),noe=ud(Je("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),ioe=ud(Je("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),ooe=ud(Je("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),roe=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],soe=s=>{const{variant:a,color:d,severity:h,classes:f}=s,k={root:["root",`${a}${rn(d||h)}`,`${a}`],icon:["icon"],message:["message"],action:["action"]};return ad(k,$ie,f)},aoe=ao(Uie,{name:"MuiAlert",slot:"Root",overridesResolver:(s,a)=>{const{ownerState:d}=s;return[a.root,a[d.variant],a[`${d.variant}${rn(d.color||d.severity)}`]]}})(({theme:s,ownerState:a})=>{const d=s.palette.mode==="light"?Df:Tf,h=s.palette.mode==="light"?Tf:Df,f=a.color||a.severity;return pe({},s.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},f&&a.variant==="standard"&&{color:s.vars?s.vars.palette.Alert[`${f}Color`]:d(s.palette[f].light,.6),backgroundColor:s.vars?s.vars.palette.Alert[`${f}StandardBg`]:h(s.palette[f].light,.9),[`& .${TT.icon}`]:s.vars?{color:s.vars.palette.Alert[`${f}IconColor`]}:{color:s.palette[f].main}},f&&a.variant==="outlined"&&{color:s.vars?s.vars.palette.Alert[`${f}Color`]:d(s.palette[f].light,.6),border:`1px solid ${(s.vars||s).palette[f].light}`,[`& .${TT.icon}`]:s.vars?{color:s.vars.palette.Alert[`${f}IconColor`]}:{color:s.palette[f].main}},f&&a.variant==="filled"&&pe({fontWeight:s.typography.fontWeightMedium},s.vars?{color:s.vars.palette.Alert[`${f}FilledColor`],backgroundColor:s.vars.palette.Alert[`${f}FilledBg`]}:{backgroundColor:s.palette.mode==="dark"?s.palette[f].dark:s.palette[f].main,color:s.palette.getContrastText(s.palette[f].main)}))}),loe=ao("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(s,a)=>a.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),coe=ao("div",{name:"MuiAlert",slot:"Message",overridesResolver:(s,a)=>a.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),IT=ao("div",{name:"MuiAlert",slot:"Action",overridesResolver:(s,a)=>a.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),MT={success:Je(eoe,{fontSize:"inherit"}),warning:Je(toe,{fontSize:"inherit"}),error:Je(noe,{fontSize:"inherit"}),info:Je(ioe,{fontSize:"inherit"})},doe=oe.forwardRef(function(a,d){var h,f,k,b,v,g;const A=Ja({props:a,name:"MuiAlert"}),{action:x,children:y,className:E,closeText:_="Close",color:D,components:O={},componentsProps:Q={},icon:N,iconMapping:L=MT,onClose:R,role:F="alert",severity:q="success",slotProps:$={},slots:U={},variant:K="standard"}=A,ee=on(A,roe),Y=pe({},A,{color:D,severity:q,variant:K}),ce=soe(Y),be=(h=(f=U.closeButton)!=null?f:O.CloseButton)!=null?h:Xie,ge=(k=(b=U.closeIcon)!=null?b:O.CloseIcon)!=null?k:ooe,we=(v=$.closeButton)!=null?v:Q.closeButton,_t=(g=$.closeIcon)!=null?g:Q.closeIcon;return Bf(aoe,pe({role:F,elevation:0,ownerState:Y,className:En(ce.root,E),ref:d},ee,{children:[N!==!1?Je(loe,{ownerState:Y,className:ce.icon,children:N||L[q]||MT[q]}):null,Je(coe,{ownerState:Y,className:ce.message,children:y}),x!=null?Je(IT,{ownerState:Y,className:ce.action,children:x}):null,x==null&&R?Je(IT,{ownerState:Y,className:ce.action,children:Je(be,pe({size:"small","aria-label":_,title:_,color:"inherit",onClick:R},we,{children:Je(ge,pe({fontSize:"small"},_t))}))}):null]}))}),cre=doe,uoe=oe.forwardRef(({bsPrefix:s,className:a,as:d="div",...h},f)=>{const k=g3(s,"row"),b=p3(),v=k3(),g=`${k}-cols`,A=[];return b.forEach(x=>{const y=h[x];delete h[x];let E;y!=null&&typeof y=="object"?{cols:E}=y:E=y;const _=x!==v?`-${x}`:"";E!=null&&A.push(`${g}${_}-${E}`)}),Je(d,{ref:f,...h,className:I0(a,k,...A)})});uoe.displayName="Row";function hoe({as:s,bsPrefix:a,className:d,...h}){a=g3(a,"col");const f=p3(),k=k3(),b=[],v=[];return f.forEach(g=>{const A=h[g];delete h[g];let x,y,E;typeof A=="object"&&A!=null?{span:x,offset:y,order:E}=A:x=A;const _=g!==k?`-${g}`:"";x&&b.push(x===!0?`${a}${_}`:`${a}${_}-${x}`),E!=null&&v.push(`order${_}-${E}`),y!=null&&v.push(`offset${_}-${y}`)}),[{...h,className:I0(d,...b,...v)},{as:s,bsPrefix:a,spans:b}]}const foe=oe.forwardRef((s,a)=>{const[{className:d,...h},{as:f="div",bsPrefix:k,spans:b}]=hoe(s);return Je(f,{...h,ref:a,className:I0(d,!b.length&&k)})});foe.displayName="Col";var pA={},moe={get exports(){return pA},set exports(s){pA=s}};/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(function(s,a){(function(d,h){s.exports=h(oe)})(self,d=>(()=>{var h={703:(v,g,A)=>{var x=A(414);function y(){}function E(){}E.resetWarningCache=y,v.exports=function(){function _(Q,N,L,R,F,q){if(q!==x){var $=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw $.name="Invariant Violation",$}}function D(){return _}_.isRequired=_;var O={array:_,bigint:_,bool:_,func:_,number:_,object:_,string:_,symbol:_,any:_,arrayOf:D,element:_,elementType:_,instanceOf:D,node:_,objectOf:D,oneOf:D,oneOfType:D,shape:D,exact:D,checkPropTypes:E,resetWarningCache:y};return O.PropTypes=O,O}},697:(v,g,A)=>{v.exports=A(703)()},414:v=>{v.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},787:v=>{v.exports=d}},f={};function k(v){var g=f[v];if(g!==void 0)return g.exports;var A=f[v]={exports:{}};return h[v](A,A.exports,k),A.exports}k.n=v=>{var g=v&&v.__esModule?()=>v.default:()=>v;return k.d(g,{a:g}),g},k.d=(v,g)=>{for(var A in g)k.o(g,A)&&!k.o(v,A)&&Object.defineProperty(v,A,{enumerable:!0,get:g[A]})},k.o=(v,g)=>Object.prototype.hasOwnProperty.call(v,g),k.r=v=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(v,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(v,"__esModule",{value:!0})};var b={};return(()=>{k.r(b),k.d(b,{CKEditor:()=>wo,CKEditorContext:()=>bo});var v=k(787),g=k.n(v),A=k(697),x=k.n(A);const y=function(S){var T=typeof S;return S!=null&&(T=="object"||T=="function")},E=typeof lr=="object"&&lr&&lr.Object===Object&&lr;var _=typeof self=="object"&&self&&self.Object===Object&&self;const D=E||_||Function("return this")(),O=function(){return D.Date.now()};var Q=/\s/;const N=function(S){for(var T=S.length;T--&&Q.test(S.charAt(T)););return T};var L=/^\s+/;const R=function(S){return S&&S.slice(0,N(S)+1).replace(L,"")},F=D.Symbol;var q=Object.prototype,$=q.hasOwnProperty,U=q.toString,K=F?F.toStringTag:void 0;const ee=function(S){var T=$.call(S,K),z=S[K];try{S[K]=void 0;var H=!0}catch{}var de=U.call(S);return H&&(T?S[K]=z:delete S[K]),de};var Y=Object.prototype.toString;const ce=function(S){return Y.call(S)};var be=F?F.toStringTag:void 0;const ge=function(S){return S==null?S===void 0?"[object Undefined]":"[object Null]":be&&be in Object(S)?ee(S):ce(S)},we=function(S){return S!=null&&typeof S=="object"},_t=function(S){return typeof S=="symbol"||we(S)&&ge(S)=="[object Symbol]"};var Me=/^[-+]0x[0-9a-f]+$/i,Vt=/^0b[01]+$/i,ie=/^0o[0-7]+$/i,M=parseInt;const re=function(S){if(typeof S=="number")return S;if(_t(S))return NaN;if(y(S)){var T=typeof S.valueOf=="function"?S.valueOf():S;S=y(T)?T+"":T}if(typeof S!="string")return S===0?S:+S;S=R(S);var z=Vt.test(S);return z||ie.test(S)?M(S.slice(2),z?2:8):Me.test(S)?NaN:+S};var qe=Math.max,dt=Math.min;const zi=function(S,T,z){var H,de,Ae,Ce,Ee,Ke,ut=0,Bs=!1,vo=!1,ii=!0;if(typeof S!="function")throw new TypeError("Expected a function");function Ao(Ht){var Ai=H,zr=de;return H=de=void 0,ut=Ht,Ce=S.apply(zr,Ai)}function Mr(Ht){return ut=Ht,Ee=setTimeout(gn,T),Bs?Ao(Ht):Ce}function Br(Ht){var Ai=Ht-Ke;return Ke===void 0||Ai>=T||Ai<0||vo&&Ht-ut>=Ae}function gn(){var Ht=O();if(Br(Ht))return vi(Ht);Ee=setTimeout(gn,function(Ai){var zr=T-(Ai-Ke);return vo?dt(zr,Ae-(Ai-ut)):zr}(Ht))}function vi(Ht){return Ee=void 0,ii&&H?Ao(Ht):(H=de=void 0,Ce)}function Lr(){var Ht=O(),Ai=Br(Ht);if(H=arguments,de=this,Ke=Ht,Ai){if(Ee===void 0)return Mr(Ke);if(vo)return clearTimeout(Ee),Ee=setTimeout(gn,T),Ao(Ke)}return Ee===void 0&&(Ee=setTimeout(gn,T)),Ce}return T=re(T)||0,y(z)&&(Bs=!!z.leading,Ae=(vo="maxWait"in z)?qe(re(z.maxWait)||0,T):Ae,ii="trailing"in z?!!z.trailing:ii),Lr.cancel=function(){Ee!==void 0&&clearTimeout(Ee),ut=0,H=Ke=de=Ee=void 0},Lr.flush=function(){return Ee===void 0?Ce:vi(O())},Lr},Rt=function(S,T,z){var H=!0,de=!0;if(typeof S!="function")throw new TypeError("Expected a function");return y(z)&&(H="leading"in z?!!z.leading:H,de="trailing"in z?!!z.trailing:de),zi(S,T,{leading:H,maxWait:T,trailing:de})},Ln=function(){this.__data__=[],this.size=0},It=function(S,T){return S===T||S!=S&&T!=T},mn=function(S,T){for(var z=S.length;z--;)if(It(S[z][0],T))return z;return-1};var zn=Array.prototype.splice;const An=function(S){var T=this.__data__,z=mn(T,S);return!(z<0)&&(z==T.length-1?T.pop():zn.call(T,z,1),--this.size,!0)},Ne=function(S){var T=this.__data__,z=mn(T,S);return z<0?void 0:T[z][1]},Xa=function(S){return mn(this.__data__,S)>-1},ys=function(S,T){var z=this.__data__,H=mn(z,S);return H<0?(++this.size,z.push([S,T])):z[H][1]=T,this};function Jn(S){var T=-1,z=S==null?0:S.length;for(this.clear();++T<z;){var H=S[T];this.set(H[0],H[1])}}Jn.prototype.clear=Ln,Jn.prototype.delete=An,Jn.prototype.get=Ne,Jn.prototype.has=Xa,Jn.prototype.set=ys;const lo=Jn,el=function(){this.__data__=new lo,this.size=0},tl=function(S){var T=this.__data__,z=T.delete(S);return this.size=T.size,z},yr=function(S){return this.__data__.get(S)},xs=function(S){return this.__data__.has(S)},xr=function(S){if(!y(S))return!1;var T=ge(S);return T=="[object Function]"||T=="[object GeneratorFunction]"||T=="[object AsyncFunction]"||T=="[object Proxy]"},co=D["__core-js_shared__"];var Ni=function(){var S=/[^.]+$/.exec(co&&co.keys&&co.keys.IE_PROTO||"");return S?"Symbol(src)_1."+S:""}();const nl=function(S){return!!Ni&&Ni in S};var He=Function.prototype.toString;const Zt=function(S){if(S!=null){try{return He.call(S)}catch{}try{return S+""}catch{}}return""};var Xn=/^\[object .+?Constructor\]$/,$o=Function.prototype,wi=Object.prototype,Es=$o.toString,_e=wi.hasOwnProperty,De=RegExp("^"+Es.call(_e).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const Er=function(S){return!(!y(S)||nl(S))&&(xr(S)?De:Xn).test(Zt(S))},Ss=function(S,T){return S==null?void 0:S[T]},Pi=function(S,T){var z=Ss(S,T);return Er(z)?z:void 0},Sr=Pi(D,"Map"),Wo=Pi(Object,"create"),km=function(){this.__data__=Wo?Wo(null):{},this.size=0},bm=function(S){var T=this.has(S)&&delete this.__data__[S];return this.size-=T?1:0,T};var wm=Object.prototype.hasOwnProperty;const hd=function(S){var T=this.__data__;if(Wo){var z=T[S];return z==="__lodash_hash_undefined__"?void 0:z}return wm.call(T,S)?T[S]:void 0};var vm=Object.prototype.hasOwnProperty;const Am=function(S){var T=this.__data__;return Wo?T[S]!==void 0:vm.call(T,S)},il=function(S,T){var z=this.__data__;return this.size+=this.has(S)?0:1,z[S]=Wo&&T===void 0?"__lodash_hash_undefined__":T,this};function gt(S){var T=-1,z=S==null?0:S.length;for(this.clear();++T<z;){var H=S[T];this.set(H[0],H[1])}}gt.prototype.clear=km,gt.prototype.delete=bm,gt.prototype.get=hd,gt.prototype.has=Am,gt.prototype.set=il;const an=gt,Cm=function(){this.size=0,this.__data__={hash:new an,map:new(Sr||lo),string:new an}},fd=function(S){var T=typeof S;return T=="string"||T=="number"||T=="symbol"||T=="boolean"?S!=="__proto__":S===null},Ds=function(S,T){var z=S.__data__;return fd(T)?z[typeof T=="string"?"string":"hash"]:z.map},_m=function(S){var T=Ds(this,S).delete(S);return this.size-=T?1:0,T},Nn=function(S){return Ds(this,S).get(S)},ym=function(S){return Ds(this,S).has(S)},ei=function(S,T){var z=Ds(this,S),H=z.size;return z.set(S,T),this.size+=z.size==H?0:1,this};function uo(S){var T=-1,z=S==null?0:S.length;for(this.clear();++T<z;){var H=S[T];this.set(H[0],H[1])}}uo.prototype.clear=Cm,uo.prototype.delete=_m,uo.prototype.get=Nn,uo.prototype.has=ym,uo.prototype.set=ei;const xm=uo,Em=function(S,T){var z=this.__data__;if(z instanceof lo){var H=z.__data__;if(!Sr||H.length<199)return H.push([S,T]),this.size=++z.size,this;z=this.__data__=new xm(H)}return z.set(S,T),this.size=z.size,this};function ti(S){var T=this.__data__=new lo(S);this.size=T.size}ti.prototype.clear=el,ti.prototype.delete=tl,ti.prototype.get=yr,ti.prototype.has=xs,ti.prototype.set=Em;const Sm=ti,Dm=function(S,T){for(var z=-1,H=S==null?0:S.length;++z<H&&T(S[z],z,S)!==!1;);return S},md=function(){try{var S=Pi(Object,"defineProperty");return S({},"",{}),S}catch{}}(),gd=function(S,T,z){T=="__proto__"&&md?md(S,T,{configurable:!0,enumerable:!0,value:z,writable:!0}):S[T]=z};var Tm=Object.prototype.hasOwnProperty;const pd=function(S,T,z){var H=S[T];Tm.call(S,T)&&It(H,z)&&(z!==void 0||T in S)||gd(S,T,z)},Ts=function(S,T,z,H){var de=!z;z||(z={});for(var Ae=-1,Ce=T.length;++Ae<Ce;){var Ee=T[Ae],Ke=H?H(z[Ee],S[Ee],Ee,z,S):void 0;Ke===void 0&&(Ke=S[Ee]),de?gd(z,Ee,Ke):pd(z,Ee,Ke)}return z},Im=function(S,T){for(var z=-1,H=Array(S);++z<S;)H[z]=T(z);return H},ol=function(S){return we(S)&&ge(S)=="[object Arguments]"};var kd=Object.prototype,Ri=kd.hasOwnProperty,Mm=kd.propertyIsEnumerable;const Qt=ol(function(){return arguments}())?ol:function(S){return we(S)&&Ri.call(S,"callee")&&!Mm.call(S,"callee")},rl=Array.isArray,Cn=function(){return!1};var bd=a&&!a.nodeType&&a,wd=bd&&!0&&s&&!s.nodeType&&s,sl=wd&&wd.exports===bd?D.Buffer:void 0;const ni=(sl?sl.isBuffer:void 0)||Cn;var Bm=/^(?:0|[1-9]\d*)$/;const vd=function(S,T){var z=typeof S;return!!(T=T??9007199254740991)&&(z=="number"||z!="symbol"&&Bm.test(S))&&S>-1&&S%1==0&&S<T},Ad=function(S){return typeof S=="number"&&S>-1&&S%1==0&&S<=9007199254740991};var Ue={};Ue["[object Float32Array]"]=Ue["[object Float64Array]"]=Ue["[object Int8Array]"]=Ue["[object Int16Array]"]=Ue["[object Int32Array]"]=Ue["[object Uint8Array]"]=Ue["[object Uint8ClampedArray]"]=Ue["[object Uint16Array]"]=Ue["[object Uint32Array]"]=!0,Ue["[object Arguments]"]=Ue["[object Array]"]=Ue["[object ArrayBuffer]"]=Ue["[object Boolean]"]=Ue["[object DataView]"]=Ue["[object Date]"]=Ue["[object Error]"]=Ue["[object Function]"]=Ue["[object Map]"]=Ue["[object Number]"]=Ue["[object Object]"]=Ue["[object RegExp]"]=Ue["[object Set]"]=Ue["[object String]"]=Ue["[object WeakMap]"]=!1;const Lm=function(S){return we(S)&&Ad(S.length)&&!!Ue[ge(S)]},al=function(S){return function(T){return S(T)}};var Cd=a&&!a.nodeType&&a,Go=Cd&&!0&&s&&!s.nodeType&&s,ll=Go&&Go.exports===Cd&&E.process;const qo=function(){try{var S=Go&&Go.require&&Go.require("util").types;return S||ll&&ll.binding&&ll.binding("util")}catch{}}();var _d=qo&&qo.isTypedArray;const Jt=_d?al(_d):Lm;var zm=Object.prototype.hasOwnProperty;const yd=function(S,T){var z=rl(S),H=!z&&Qt(S),de=!z&&!H&&ni(S),Ae=!z&&!H&&!de&&Jt(S),Ce=z||H||de||Ae,Ee=Ce?Im(S.length,String):[],Ke=Ee.length;for(var ut in S)!T&&!zm.call(S,ut)||Ce&&(ut=="length"||de&&(ut=="offset"||ut=="parent")||Ae&&(ut=="buffer"||ut=="byteLength"||ut=="byteOffset")||vd(ut,Ke))||Ee.push(ut);return Ee};var Nm=Object.prototype;const ho=function(S){var T=S&&S.constructor;return S===(typeof T=="function"&&T.prototype||Nm)},xd=function(S,T){return function(z){return S(T(z))}},Is=xd(Object.keys,Object);var Pm=Object.prototype.hasOwnProperty;const Rm=function(S){if(!ho(S))return Is(S);var T=[];for(var z in Object(S))Pm.call(S,z)&&z!="constructor"&&T.push(z);return T},Ed=function(S){return S!=null&&Ad(S.length)&&!xr(S)},cl=function(S){return Ed(S)?yd(S):Rm(S)},Om=function(S,T){return S&&Ts(T,cl(T),S)},jm=function(S){var T=[];if(S!=null)for(var z in Object(S))T.push(z);return T};var Fm=Object.prototype.hasOwnProperty;const Vm=function(S){if(!y(S))return jm(S);var T=ho(S),z=[];for(var H in S)(H!="constructor"||!T&&Fm.call(S,H))&&z.push(H);return z},dl=function(S){return Ed(S)?yd(S,!0):Vm(S)},Hm=function(S,T){return S&&Ts(T,dl(T),S)};var fo=a&&!a.nodeType&&a,Dr=fo&&!0&&s&&!s.nodeType&&s,Sd=Dr&&Dr.exports===fo?D.Buffer:void 0,Dd=Sd?Sd.allocUnsafe:void 0;const Um=function(S,T){if(T)return S.slice();var z=S.length,H=Dd?Dd(z):new S.constructor(z);return S.copy(H),H},$m=function(S,T){var z=-1,H=S.length;for(T||(T=Array(H));++z<H;)T[z]=S[z];return T},Wm=function(S,T){for(var z=-1,H=S==null?0:S.length,de=0,Ae=[];++z<H;){var Ce=S[z];T(Ce,z,S)&&(Ae[de++]=Ce)}return Ae},Td=function(){return[]};var Gm=Object.prototype.propertyIsEnumerable,Id=Object.getOwnPropertySymbols;const ul=Id?function(S){return S==null?[]:(S=Object(S),Wm(Id(S),function(T){return Gm.call(S,T)}))}:Td,qm=function(S,T){return Ts(S,ul(S),T)},Md=function(S,T){for(var z=-1,H=T.length,de=S.length;++z<H;)S[de+z]=T[z];return S},hl=xd(Object.getPrototypeOf,Object),Bd=Object.getOwnPropertySymbols?function(S){for(var T=[];S;)Md(T,ul(S)),S=hl(S);return T}:Td,mo=function(S,T){return Ts(S,Bd(S),T)},Ld=function(S,T,z){var H=T(S);return rl(S)?H:Md(H,z(S))},fl=function(S){return Ld(S,cl,ul)},zd=function(S){return Ld(S,dl,Bd)},ml=Pi(D,"DataView"),gl=Pi(D,"Promise"),pl=Pi(D,"Set"),kl=Pi(D,"WeakMap");var Nd="[object Map]",Oi="[object Promise]",Pd="[object Set]",Rd="[object WeakMap]",Od="[object DataView]",Km=Zt(ml),Ym=Zt(Sr),Zm=Zt(gl),Qm=Zt(pl),Jm=Zt(kl),go=ge;(ml&&go(new ml(new ArrayBuffer(1)))!=Od||Sr&&go(new Sr)!=Nd||gl&&go(gl.resolve())!=Oi||pl&&go(new pl)!=Pd||kl&&go(new kl)!=Rd)&&(go=function(S){var T=ge(S),z=T=="[object Object]"?S.constructor:void 0,H=z?Zt(z):"";if(H)switch(H){case Km:return Od;case Ym:return Nd;case Zm:return Oi;case Qm:return Pd;case Jm:return Rd}return T});const bl=go;var Xm=Object.prototype.hasOwnProperty;const eg=function(S){var T=S.length,z=new S.constructor(T);return T&&typeof S[0]=="string"&&Xm.call(S,"index")&&(z.index=S.index,z.input=S.input),z},ji=D.Uint8Array,wl=function(S){var T=new S.constructor(S.byteLength);return new ji(T).set(new ji(S)),T},Tr=function(S,T){var z=T?wl(S.buffer):S.buffer;return new S.constructor(z,S.byteOffset,S.byteLength)};var tg=/\w*$/;const Ir=function(S){var T=new S.constructor(S.source,tg.exec(S));return T.lastIndex=S.lastIndex,T};var jd=F?F.prototype:void 0,Fd=jd?jd.valueOf:void 0;const ng=function(S){return Fd?Object(Fd.call(S)):{}},ig=function(S,T){var z=T?wl(S.buffer):S.buffer;return new S.constructor(z,S.byteOffset,S.length)},og=function(S,T,z){var H=S.constructor;switch(T){case"[object ArrayBuffer]":return wl(S);case"[object Boolean]":case"[object Date]":return new H(+S);case"[object DataView]":return Tr(S,z);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return ig(S,z);case"[object Map]":case"[object Set]":return new H;case"[object Number]":case"[object String]":return new H(S);case"[object RegExp]":return Ir(S);case"[object Symbol]":return ng(S)}};var Vd=Object.create;const rg=function(){function S(){}return function(T){if(!y(T))return{};if(Vd)return Vd(T);S.prototype=T;var z=new S;return S.prototype=void 0,z}}(),sg=function(S){return typeof S.constructor!="function"||ho(S)?{}:rg(hl(S))},ag=function(S){return we(S)&&bl(S)=="[object Map]"};var Hd=qo&&qo.isMap;const lg=Hd?al(Hd):ag,cg=function(S){return we(S)&&bl(S)=="[object Set]"};var Ud=qo&&qo.isSet;const dg=Ud?al(Ud):cg;var $d="[object Arguments]",Wd="[object Function]",po="[object Object]",$e={};$e[$d]=$e["[object Array]"]=$e["[object ArrayBuffer]"]=$e["[object DataView]"]=$e["[object Boolean]"]=$e["[object Date]"]=$e["[object Float32Array]"]=$e["[object Float64Array]"]=$e["[object Int8Array]"]=$e["[object Int16Array]"]=$e["[object Int32Array]"]=$e["[object Map]"]=$e["[object Number]"]=$e[po]=$e["[object RegExp]"]=$e["[object Set]"]=$e["[object String]"]=$e["[object Symbol]"]=$e["[object Uint8Array]"]=$e["[object Uint8ClampedArray]"]=$e["[object Uint16Array]"]=$e["[object Uint32Array]"]=!0,$e["[object Error]"]=$e[Wd]=$e["[object WeakMap]"]=!1;const ug=function S(T,z,H,de,Ae,Ce){var Ee,Ke=1&z,ut=2&z,Bs=4&z;if(H&&(Ee=Ae?H(T,de,Ae,Ce):H(T)),Ee!==void 0)return Ee;if(!y(T))return T;var vo=rl(T);if(vo){if(Ee=eg(T),!Ke)return $m(T,Ee)}else{var ii=bl(T),Ao=ii==Wd||ii=="[object GeneratorFunction]";if(ni(T))return Um(T,Ke);if(ii==po||ii==$d||Ao&&!Ae){if(Ee=ut||Ao?{}:sg(T),!Ke)return ut?mo(T,Hm(Ee,T)):qm(T,Om(Ee,T))}else{if(!$e[ii])return Ae?T:{};Ee=og(T,ii,Ke)}}Ce||(Ce=new Sm);var Mr=Ce.get(T);if(Mr)return Mr;Ce.set(T,Ee),dg(T)?T.forEach(function(gn){Ee.add(S(gn,z,H,gn,T,Ce))}):lg(T)&&T.forEach(function(gn,vi){Ee.set(vi,S(gn,z,H,vi,T,Ce))});var Br=vo?void 0:(Bs?ut?zd:fl:ut?dl:cl)(T);return Dm(Br||T,function(gn,vi){Br&&(gn=T[vi=gn]),pd(Ee,vi,S(gn,z,H,vi,T,Ce))}),Ee},hg=function(S,T){return ug(S,5,T=typeof T=="function"?T:void 0)};var fg=Function.prototype,mg=Object.prototype,Gd=fg.toString,Ms=mg.hasOwnProperty,gg=Gd.call(Object);const pg=function(S){if(!we(S)||ge(S)!="[object Object]")return!1;var T=hl(S);if(T===null)return!0;var z=Ms.call(T,"constructor")&&T.constructor;return typeof z=="function"&&z instanceof z&&Gd.call(z)==gg},kg=function(S){return we(S)&&S.nodeType===1&&!pg(S)};function vl(S,T=new Set){const z=[S],H=new Set;let de=0;for(;z.length>de;){const Ae=z[de++];if(!(H.has(Ae)||bg(Ae)||T.has(Ae)))if(H.add(Ae),Ae[Symbol.iterator])try{for(const Ce of Ae)z.push(Ce)}catch{}else for(const Ce in Ae)Ce!=="defaultValue"&&z.push(Ae[Ce])}return H}function bg(S){const T=Object.prototype.toString.call(S),z=typeof S;return z==="number"||z==="boolean"||z==="string"||z==="symbol"||z==="function"||T==="[object Date]"||T==="[object RegExp]"||T==="[object Module]"||S==null||S._watchdogExcluded===!0||S instanceof EventTarget||S instanceof Event}function qd(S,T,z=new Set){if(S===T&&typeof(H=S)=="object"&&H!==null)return!0;var H;const de=vl(S,z),Ae=vl(T,z);for(const Ce of de)if(Ae.has(Ce))return!0;return!1}class Kd{constructor(T){if(this.crashes=[],this.state="initializing",this._crashNumberLimit=typeof T.crashNumberLimit=="number"?T.crashNumberLimit:3,this._now=Date.now,this._minimumNonErrorTimePeriod=typeof T.minimumNonErrorTimePeriod=="number"?T.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=z=>{const H=z.error||z.reason;H instanceof Error&&this._handleError(H,z)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}setCreator(T){this._creator=T}setDestructor(T){this._destructor=T}destroy(){this._stopErrorHandling(),this._listeners={}}on(T,z){this._listeners[T]||(this._listeners[T]=[]),this._listeners[T].push(z)}off(T,z){this._listeners[T]=this._listeners[T].filter(H=>H!==z)}_fire(T,...z){const H=this._listeners[T]||[];for(const de of H)de.apply(this,[null,...z])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(T,z){if(this._shouldReactToError(T)){this.crashes.push({message:T.message,stack:T.stack,filename:z.filename,lineno:z.lineno,colno:z.colno,date:this._now()});const H=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:T,causesRestart:H}),H?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(T){return T.is&&T.is("CKEditorError")&&T.context!==void 0&&T.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(T)}_shouldRestart(){return this.crashes.length<=this._crashNumberLimit?!0:(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}class Yd extends Kd{constructor(T,z={}){super(z),this._editor=null,this._throttledSave=Rt(this._save.bind(this),typeof z.saveInterval=="number"?z.saveInterval:5e3),this._creator=(H,de)=>T.create(H,de),this._destructor=H=>H.destroy()}get editor(){return this._editor}get _item(){return this._editor}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(T=>{console.error("An error happened during the editor destroying.",T)}).then(()=>{if(typeof this._elementOrData=="string")return this.create(this._data,this._config,this._config.context);{const T=Object.assign({},this._config,{initialData:this._data});return this.create(this._elementOrData,T,T.context)}}).then(()=>{this._fire("restart")})}create(T=this._elementOrData,z=this._config,H){return Promise.resolve().then(()=>(super._startErrorHandling(),this._elementOrData=T,this._config=this._cloneEditorConfiguration(z)||{},this._config.context=H,this._creator(T,this._config))).then(de=>{this._editor=de,de.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=de.model.document.version,this._data=this._getData(),this.state="ready",this._fire("stateChange")})}destroy(){return Promise.resolve().then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.flush();const T=this._editor;return this._editor=null,T.model.document.off("change:data",this._throttledSave),this._destructor(T)})}_save(){const T=this._editor.model.document.version;try{this._data=this._getData(),this._lastDocumentVersion=T}catch(z){console.error(z,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(T){this._excludedProps=T}_getData(){const T={};for(const z of this._editor.model.document.getRootNames())T[z]=this._editor.data.get({rootName:z});return T}_isErrorComingFromThisItem(T){return qd(this._editor,T.context,this._excludedProps)}_cloneEditorConfiguration(T){return hg(T,(z,H)=>kg(z)||H==="context"?z:void 0)}}const pt=new Array(256).fill("").map((S,T)=>("0"+T.toString(16)).slice(-2)),Fi=Symbol("MainQueueId");class Zd extends Kd{constructor(T,z={}){super(z),this._watchdogs=new Map,this._watchdogConfig=z,this._context=null,this._contextProps=new Set,this._actionQueues=new wg,this._creator=H=>T.create(H),this._destructor=H=>H.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}get context(){return this._context}create(T={}){return this._actionQueues.enqueue(Fi,()=>(this._contextConfig=T,this._create()))}getItem(T){return this._getWatchdog(T)._item}getItemState(T){return this._getWatchdog(T).state}add(T){const z=Qd(T);return Promise.all(z.map(H=>this._actionQueues.enqueue(H.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let de;if(this._watchdogs.has(H.id))throw new Error(`Item with the given id is already added: '${H.id}'.`);if(H.type==="editor")return de=new Yd(this._watchdogConfig),de.setCreator(H.creator),de._setExcludedProperties(this._contextProps),H.destructor&&de.setDestructor(H.destructor),this._watchdogs.set(H.id,de),de.on("error",(Ae,{error:Ce,causesRestart:Ee})=>{this._fire("itemError",{itemId:H.id,error:Ce}),Ee&&this._actionQueues.enqueue(H.id,()=>new Promise(Ke=>{de.on("restart",function ut(){de.off("restart",ut),this._fire("itemRestart",{itemId:H.id}),Ke()}.bind(this))}))}),de.create(H.sourceElementOrData,H.config,this._context);throw new Error(`Not supported item type: '${H.type}'.`)})))}remove(T){const z=Qd(T);return Promise.all(z.map(H=>this._actionQueues.enqueue(H,()=>{const de=this._getWatchdog(H);return this._watchdogs.delete(H),de.destroy()})))}destroy(){return this._actionQueues.enqueue(Fi,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(Fi,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(T=>{console.error("An error happened during destroying the context or items.",T)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(T=>(this._context=T,this._contextProps=vl(this._context),Promise.all(Array.from(this._watchdogs.values()).map(z=>(z._setExcludedProperties(this._contextProps),z.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const T=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(z=>z.destroy())).then(()=>this._destructor(T))})}_getWatchdog(T){const z=this._watchdogs.get(T);if(!z)throw new Error(`Item with the given id was not registered: ${T}.`);return z}_isErrorComingFromThisItem(T){for(const z of this._watchdogs.values())if(z._isErrorComingFromThisItem(T))return!1;return qd(this._context,T.context)}}class wg{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._actions=new WeakMap,this._lastActionId=0,this._activeActions=0}onEmpty(T){this._onEmptyCallbacks.push(T)}enqueue(T,z){const H=T===Fi;this._activeActions++,this._queues.get(T)||this._queues.set(T,Promise.resolve());const de=(H?Promise.all(this._queues.values()):Promise.all([this._queues.get(Fi),this._queues.get(T)])).then(z),Ae=de.catch(()=>{});return this._queues.set(T,Ae),de.finally(()=>{this._activeActions--,this._queues.get(T)===Ae&&this._activeActions===0&&this._onEmptyCallbacks.forEach(Ce=>Ce())})}}function Qd(S){return Array.isArray(S)?S:[S]}const ko=g().createContext("contextWatchdog");class bo extends g().Component{constructor(T,z){super(T,z),this.contextWatchdog=null,this.props.isLayoutReady&&this._initializeContextWatchdog(this.props.config)}async shouldComponentUpdate(T){return T.id!==this.props.id&&(this.contextWatchdog&&await this.contextWatchdog.destroy(),await this._initializeContextWatchdog(T.config)),T.isLayoutReady&&!this.contextWatchdog?(await this._initializeContextWatchdog(T.config),!0):this.props.children!==T.children}render(){return g().createElement(ko.Provider,{value:this.contextWatchdog},this.props.children)}async componentWillUnmount(){await this._destroyContext()}async _initializeContextWatchdog(T){this.contextWatchdog=new Zd(this.props.context),this.contextWatchdog.on("error",(z,H)=>{this.props.onError(H.error,{phase:"runtime",willContextRestart:H.causesRestart})}),this.contextWatchdog.on("stateChange",()=>{this.contextWatchdog.state==="ready"&&this.props.onReady&&this.props.onReady(this.contextWatchdog.context)}),await this.contextWatchdog.create(T).catch(z=>{this.props.onError(z,{phase:"initialization",willContextRestart:!1})})}async _destroyContext(){this.contextWatchdog&&(await this.contextWatchdog.destroy(),this.contextWatchdog=null)}}bo.defaultProps={isLayoutReady:!0,onError:(S,T)=>console.error(S,T)},bo.propTypes={id:x().string,isLayoutReady:x().bool,context:x().func,config:x().object,onReady:x().func,onError:x().func};const Al="Lock from React integration (@ckeditor/ckeditor5-react)";class wo extends g().Component{constructor(T){super(T),this.editorDestructionInProgress=null,this.domContainer=g().createRef(),this.watchdog=null;const{CKEDITOR_VERSION:z}=window;if(z){const[H]=z.split(".").map(Number);H<34&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 34 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')}get editor(){return this.watchdog?this.watchdog.editor:null}shouldComponentUpdate(T){return!!this.editor&&(T.id!==this.props.id||(this._shouldUpdateEditor(T)&&this.editor.setData(T.data),"disabled"in T&&(T.disabled?this.editor.enableReadOnlyMode(Al):this.editor.disableReadOnlyMode(Al)),!1))}async componentDidMount(){await this._initializeEditor()}async componentDidUpdate(){await this._destroyEditor(),await this._initializeEditor()}async componentWillUnmount(){await this._destroyEditor()}render(){return g().createElement("div",{ref:this.domContainer})}async _initializeEditor(){await this.editorDestructionInProgress,this.watchdog||(this.context instanceof Zd?this.watchdog=new vg(this.context):this.watchdog=new wo._EditorWatchdog(this.props.editor),this.watchdog.setCreator((T,z)=>this._createEditor(T,z)),this.watchdog.on("error",(T,{error:z,causesRestart:H})=>{this.props.onError(z,{phase:"runtime",willEditorRestart:H})}),await this.watchdog.create(this.domContainer.current,this._getConfig()).catch(T=>this.props.onError(T,{phase:"initialization",willEditorRestart:!1})))}_createEditor(T,z){return this.props.editor.create(T,z).then(H=>{"disabled"in this.props&&this.props.disabled&&H.enableReadOnlyMode(Al);const de=H.model.document,Ae=H.editing.view.document;return de.on("change:data",Ce=>{this.props.onChange&&this.props.onChange(Ce,H)}),Ae.on("focus",Ce=>{this.props.onFocus&&this.props.onFocus(Ce,H)}),Ae.on("blur",Ce=>{this.props.onBlur&&this.props.onBlur(Ce,H)}),setTimeout(()=>{this.props.onReady&&this.props.onReady(H)}),H})}async _destroyEditor(){this.editorDestructionInProgress=new Promise(T=>{setTimeout(()=>{this.watchdog?this.watchdog.destroy().then(()=>{this.watchdog=null,T()}):T()})})}_shouldUpdateEditor(T){return this.props.data!==T.data&&this.editor.getData()!==T.data}_getConfig(){return this.props.data&&this.props.config.initialData&&console.warn("Editor data should be provided either using `config.initialData` or `data` properties. The config property is over the data value and the first one will be used when specified both."),{...this.props.config,initialData:this.props.config.initialData||this.props.data||""}}}class vg{constructor(T){this._contextWatchdog=T,this._id=function(){const z=4294967296*Math.random()>>>0,H=4294967296*Math.random()>>>0,de=4294967296*Math.random()>>>0,Ae=4294967296*Math.random()>>>0;return"e"+pt[z>>0&255]+pt[z>>8&255]+pt[z>>16&255]+pt[z>>24&255]+pt[H>>0&255]+pt[H>>8&255]+pt[H>>16&255]+pt[H>>24&255]+pt[de>>0&255]+pt[de>>8&255]+pt[de>>16&255]+pt[de>>24&255]+pt[Ae>>0&255]+pt[Ae>>8&255]+pt[Ae>>16&255]+pt[Ae>>24&255]}()}setCreator(T){this._creator=T}create(T,z){return this._contextWatchdog.add({sourceElementOrData:T,config:z,creator:this._creator,id:this._id,type:"editor"})}on(T,z){this._contextWatchdog.on("itemError",(H,{itemId:de,causesRestart:Ae,error:Ce})=>{de===this._id&&z(null,{error:Ce,causesRestart:Ae})})}destroy(){return this._contextWatchdog.state==="ready"?this._contextWatchdog.remove(this._id):Promise.resolve()}get editor(){return this._contextWatchdog.getItem(this._id)}}wo.contextType=ko,wo.propTypes={editor:x().func.isRequired,data:x().string,config:x().object,onChange:x().func,onReady:x().func,onFocus:x().func,onBlur:x().func,onError:x().func,disabled:x().bool,onInit:(S,T)=>{if(S[T])return new Error('The "onInit" property is not supported anymore by the CKEditor component. Use the "onReady" property instead.')}},wo.defaultProps={config:{},onError:(S,T)=>console.error(S,T)},wo._EditorWatchdog=Yd})(),b})())})(moe,pA);var If={},goe={get exports(){return If},set exports(s){If=s}};(function(s,a){(function(d){const h=d.en=d.en||{};h.dictionary=Object.assign(h.dictionary||{},{"%0 of %1":"%0 of %1","Align cell text to the bottom":"Align cell text to the bottom","Align cell text to the center":"Align cell text to the center","Align cell text to the left":"Align cell text to the left","Align cell text to the middle":"Align cell text to the middle","Align cell text to the right":"Align cell text to the right","Align cell text to the top":"Align cell text to the top","Align center":"Align center","Align left":"Align left","Align right":"Align right","Align table to the left":"Align table to the left","Align table to the right":"Align table to the right",Alignment:"Alignment",All:"All","Almost equal to":"Almost equal to",Angle:"Angle","Approximately equal to":"Approximately equal to",Aquamarine:"Aquamarine",Arrows:"Arrows","Asterisk operator":"Asterisk operator","Austral sign":"Austral sign","back with leftwards arrow above":"back with leftwards arrow above",Background:"Background",Big:"Big","Bitcoin sign":"Bitcoin sign",Black:"Black","Block quote":"Block quote","Block styles":"Block styles",Blue:"Blue","Blue marker":"Blue marker",Bold:"Bold",Border:"Border","Break text":"Break text","Bulleted List":"Bulleted List","Bulleted list styles toolbar":"Bulleted list styles toolbar",Cancel:"Cancel","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Cedi sign":"Cedi sign","Cell properties":"Cell properties","Cent sign":"Cent sign","Center table":"Center table","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Character categories":"Character categories","Characters: %0":"Characters: %0","Choose heading":"Choose heading","Choose language":"Choose language",Circle:"Circle",Code:"Code","Colon sign":"Colon sign",Color:"Color","Color picker":"Color picker",Column:"Column","Contains as member":"Contains as member","Copyright sign":"Copyright sign","Cruzeiro sign":"Cruzeiro sign",Currency:"Currency","Currency sign":"Currency sign",Dashed:"Dashed",Decimal:"Decimal","Decimal with leading zero":"Decimal with leading zero","Decrease indent":"Decrease indent",Default:"Default","Degree sign":"Degree sign","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Dimensions:"Dimensions","Disable editing":"Disable editing",Disc:"Disc","Division sign":"Division sign","Document colors":"Document colors","Dollar sign":"Dollar sign","Dong sign":"Dong sign",Dotted:"Dotted",Double:"Double","Double dagger":"Double dagger","Double exclamation mark":"Double exclamation mark","Double low-9 quotation mark":"Double low-9 quotation mark","Double question mark":"Double question mark",Downloadable:"Downloadable","downwards arrow to bar":"downwards arrow to bar","downwards dashed arrow":"downwards dashed arrow","downwards double arrow":"downwards double arrow","downwards simple arrow":"downwards simple arrow","Drachma sign":"Drachma sign","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit link":"Edit link","Edit source":"Edit source","Editor block content toolbar":"Editor block content toolbar","Editor contextual toolbar":"Editor contextual toolbar","Editor editing area: %0":"Editor editing area: %0","Editor toolbar":"Editor toolbar","Element of":"Element of","Em dash":"Em dash","Empty set":"Empty set","Empty snippet content":"Empty snippet content","En dash":"En dash","Enable editing":"Enable editing","end with leftwards arrow above":"end with leftwards arrow above","Enter image caption":"Enter image caption","Enter table caption":"Enter table caption","Euro sign":"Euro sign","Euro-currency sign":"Euro-currency sign","Exclamation question mark":"Exclamation question mark",Find:"Find","Find and replace":"Find and replace","Find in text…":"Find in text…","Font Background Color":"Font Background Color","Font Color":"Font Color","Font Family":"Font Family","Font Size":"Font Size","For all":"For all","Fraction slash":"Fraction slash","French franc sign":"French franc sign","Full size image":"Full size image","German penny sign":"German penny sign","Greater-than or equal to":"Greater-than or equal to","Greater-than sign":"Greater-than sign",Green:"Green","Green marker":"Green marker","Green pen":"Green pen",Grey:"Grey",Groove:"Groove","Guarani sign":"Guarani sign","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6",Height:"Height",Highlight:"Highlight","Horizontal ellipsis":"Horizontal ellipsis","Horizontal line":"Horizontal line","Horizontal text alignment toolbar":"Horizontal text alignment toolbar","Hryvnia sign":"Hryvnia sign","HTML object":"HTML object","HTML snippet":"HTML snippet",Huge:"Huge","Identical to":"Identical to","Image resize list":"Image resize list","Image toolbar":"Image toolbar","image widget":"image widget","In line":"In line","Increase indent":"Increase indent","Indian rupee sign":"Indian rupee sign",Infinity:"Infinity",Insert:"Insert","Insert code block":"Insert code block","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert HTML":"Insert HTML","Insert image":"Insert image","Insert image via URL":"Insert image via URL","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table",Inset:"Inset",Integral:"Integral",Intersection:"Intersection","Inverted exclamation mark":"Inverted exclamation mark","Inverted question mark":"Inverted question mark",Italic:"Italic",Justify:"Justify","Justify cell text":"Justify cell text","Kip sign":"Kip sign",Language:"Language",Latin:"Latin","Latin capital letter a with breve":"Latin capital letter a with breve","Latin capital letter a with macron":"Latin capital letter a with macron","Latin capital letter a with ogonek":"Latin capital letter a with ogonek","Latin capital letter c with acute":"Latin capital letter c with acute","Latin capital letter c with caron":"Latin capital letter c with caron","Latin capital letter c with circumflex":"Latin capital letter c with circumflex","Latin capital letter c with dot above":"Latin capital letter c with dot above","Latin capital letter d with caron":"Latin capital letter d with caron","Latin capital letter d with stroke":"Latin capital letter d with stroke","Latin capital letter e with breve":"Latin capital letter e with breve","Latin capital letter e with caron":"Latin capital letter e with caron","Latin capital letter e with dot above":"Latin capital letter e with dot above","Latin capital letter e with macron":"Latin capital letter e with macron","Latin capital letter e with ogonek":"Latin capital letter e with ogonek","Latin capital letter eng":"Latin capital letter eng","Latin capital letter g with breve":"Latin capital letter g with breve","Latin capital letter g with cedilla":"Latin capital letter g with cedilla","Latin capital letter g with circumflex":"Latin capital letter g with circumflex","Latin capital letter g with dot above":"Latin capital letter g with dot above","Latin capital letter h with circumflex":"Latin capital letter h with circumflex","Latin capital letter h with stroke":"Latin capital letter h with stroke","Latin capital letter i with breve":"Latin capital letter i with breve","Latin capital letter i with dot above":"Latin capital letter i with dot above","Latin capital letter i with macron":"Latin capital letter i with macron","Latin capital letter i with ogonek":"Latin capital letter i with ogonek","Latin capital letter i with tilde":"Latin capital letter i with tilde","Latin capital letter j with circumflex":"Latin capital letter j with circumflex","Latin capital letter k with cedilla":"Latin capital letter k with cedilla","Latin capital letter l with acute":"Latin capital letter l with acute","Latin capital letter l with caron":"Latin capital letter l with caron","Latin capital letter l with cedilla":"Latin capital letter l with cedilla","Latin capital letter l with middle dot":"Latin capital letter l with middle dot","Latin capital letter l with stroke":"Latin capital letter l with stroke","Latin capital letter n with acute":"Latin capital letter n with acute","Latin capital letter n with caron":"Latin capital letter n with caron","Latin capital letter n with cedilla":"Latin capital letter n with cedilla","Latin capital letter o with breve":"Latin capital letter o with breve","Latin capital letter o with double acute":"Latin capital letter o with double acute","Latin capital letter o with macron":"Latin capital letter o with macron","Latin capital letter r with acute":"Latin capital letter r with acute","Latin capital letter r with caron":"Latin capital letter r with caron","Latin capital letter r with cedilla":"Latin capital letter r with cedilla","Latin capital letter s with acute":"Latin capital letter s with acute","Latin capital letter s with caron":"Latin capital letter s with caron","Latin capital letter s with cedilla":"Latin capital letter s with cedilla","Latin capital letter s with circumflex":"Latin capital letter s with circumflex","Latin capital letter t with caron":"Latin capital letter t with caron","Latin capital letter t with cedilla":"Latin capital letter t with cedilla","Latin capital letter t with stroke":"Latin capital letter t with stroke","Latin capital letter u with breve":"Latin capital letter u with breve","Latin capital letter u with double acute":"Latin capital letter u with double acute","Latin capital letter u with macron":"Latin capital letter u with macron","Latin capital letter u with ogonek":"Latin capital letter u with ogonek","Latin capital letter u with ring above":"Latin capital letter u with ring above","Latin capital letter u with tilde":"Latin capital letter u with tilde","Latin capital letter w with circumflex":"Latin capital letter w with circumflex","Latin capital letter y with circumflex":"Latin capital letter y with circumflex","Latin capital letter y with diaeresis":"Latin capital letter y with diaeresis","Latin capital letter z with acute":"Latin capital letter z with acute","Latin capital letter z with caron":"Latin capital letter z with caron","Latin capital letter z with dot above":"Latin capital letter z with dot above","Latin capital ligature ij":"Latin capital ligature ij","Latin capital ligature oe":"Latin capital ligature oe","Latin small letter a with breve":"Latin small letter a with breve","Latin small letter a with macron":"Latin small letter a with macron","Latin small letter a with ogonek":"Latin small letter a with ogonek","Latin small letter c with acute":"Latin small letter c with acute","Latin small letter c with caron":"Latin small letter c with caron","Latin small letter c with circumflex":"Latin small letter c with circumflex","Latin small letter c with dot above":"Latin small letter c with dot above","Latin small letter d with caron":"Latin small letter d with caron","Latin small letter d with stroke":"Latin small letter d with stroke","Latin small letter dotless i":"Latin small letter dotless i","Latin small letter e with breve":"Latin small letter e with breve","Latin small letter e with caron":"Latin small letter e with caron","Latin small letter e with dot above":"Latin small letter e with dot above","Latin small letter e with macron":"Latin small letter e with macron","Latin small letter e with ogonek":"Latin small letter e with ogonek","Latin small letter eng":"Latin small letter eng","Latin small letter f with hook":"Latin small letter f with hook","Latin small letter g with breve":"Latin small letter g with breve","Latin small letter g with cedilla":"Latin small letter g with cedilla","Latin small letter g with circumflex":"Latin small letter g with circumflex","Latin small letter g with dot above":"Latin small letter g with dot above","Latin small letter h with circumflex":"Latin small letter h with circumflex","Latin small letter h with stroke":"Latin small letter h with stroke","Latin small letter i with breve":"Latin small letter i with breve","Latin small letter i with macron":"Latin small letter i with macron","Latin small letter i with ogonek":"Latin small letter i with ogonek","Latin small letter i with tilde":"Latin small letter i with tilde","Latin small letter j with circumflex":"Latin small letter j with circumflex","Latin small letter k with cedilla":"Latin small letter k with cedilla","Latin small letter kra":"Latin small letter kra","Latin small letter l with acute":"Latin small letter l with acute","Latin small letter l with caron":"Latin small letter l with caron","Latin small letter l with cedilla":"Latin small letter l with cedilla","Latin small letter l with middle dot":"Latin small letter l with middle dot","Latin small letter l with stroke":"Latin small letter l with stroke","Latin small letter long s":"Latin small letter long s","Latin small letter n preceded by apostrophe":"Latin small letter n preceded by apostrophe","Latin small letter n with acute":"Latin small letter n with acute","Latin small letter n with caron":"Latin small letter n with caron","Latin small letter n with cedilla":"Latin small letter n with cedilla","Latin small letter o with breve":"Latin small letter o with breve","Latin small letter o with double acute":"Latin small letter o with double acute","Latin small letter o with macron":"Latin small letter o with macron","Latin small letter r with acute":"Latin small letter r with acute","Latin small letter r with caron":"Latin small letter r with caron","Latin small letter r with cedilla":"Latin small letter r with cedilla","Latin small letter s with acute":"Latin small letter s with acute","Latin small letter s with caron":"Latin small letter s with caron","Latin small letter s with cedilla":"Latin small letter s with cedilla","Latin small letter s with circumflex":"Latin small letter s with circumflex","Latin small letter t with caron":"Latin small letter t with caron","Latin small letter t with cedilla":"Latin small letter t with cedilla","Latin small letter t with stroke":"Latin small letter t with stroke","Latin small letter u with breve":"Latin small letter u with breve","Latin small letter u with double acute":"Latin small letter u with double acute","Latin small letter u with macron":"Latin small letter u with macron","Latin small letter u with ogonek":"Latin small letter u with ogonek","Latin small letter u with ring above":"Latin small letter u with ring above","Latin small letter u with tilde":"Latin small letter u with tilde","Latin small letter w with circumflex":"Latin small letter w with circumflex","Latin small letter y with circumflex":"Latin small letter y with circumflex","Latin small letter z with acute":"Latin small letter z with acute","Latin small letter z with caron":"Latin small letter z with caron","Latin small letter z with dot above":"Latin small letter z with dot above","Latin small ligature ij":"Latin small ligature ij","Latin small ligature oe":"Latin small ligature oe","Left aligned image":"Left aligned image","Left double quotation mark":"Left double quotation mark","Left single quotation mark":"Left single quotation mark","Left-pointing double angle quotation mark":"Left-pointing double angle quotation mark","leftwards arrow to bar":"leftwards arrow to bar","leftwards dashed arrow":"leftwards dashed arrow","leftwards double arrow":"leftwards double arrow","leftwards simple arrow":"leftwards simple arrow","Less-than or equal to":"Less-than or equal to","Less-than sign":"Less-than sign","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link image":"Link image","Link URL":"Link URL","Lira sign":"Lira sign","List properties":"List properties","Livre tournois sign":"Livre tournois sign","Logical and":"Logical and","Logical or":"Logical or","Lower-latin":"Lower-latin","Lower–roman":"Lower–roman",Macron:"Macron","Manat sign":"Manat sign","Match case":"Match case",Mathematical:"Mathematical","Media toolbar":"Media toolbar","Media URL":"Media URL","media widget":"media widget","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells","Mill sign":"Mill sign","Minus sign":"Minus sign","Multiple styles":"Multiple styles","Multiplication sign":"Multiplication sign","N-ary product":"N-ary product","N-ary summation":"N-ary summation",Nabla:"Nabla","Naira sign":"Naira sign","New sheqel sign":"New sheqel sign",Next:"Next","Next result":"Next result","No preview available":"No preview available",None:"None","Nordic mark sign":"Nordic mark sign","Not an element of":"Not an element of","Not equal to":"Not equal to","Not sign":"Not sign","Numbered List":"Numbered List","Numbered list styles toolbar":"Numbered list styles toolbar","on with exclamation mark with left right arrow above":"on with exclamation mark with left right arrow above","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab","Open media in new tab":"Open media in new tab",Orange:"Orange",Original:"Original",Outset:"Outset",Overline:"Overline",Padding:"Padding","Page break":"Page break",Paragraph:"Paragraph","Paragraph sign":"Paragraph sign","Partial differential":"Partial differential","Paste raw HTML here...":"Paste raw HTML here...","Paste the media URL in the input.":"Paste the media URL in the input.","Per mille sign":"Per mille sign","Per ten thousand sign":"Per ten thousand sign","Peseta sign":"Peseta sign","Peso sign":"Peso sign","Pink marker":"Pink marker","Plain text":"Plain text","Plus-minus sign":"Plus-minus sign","Pound sign":"Pound sign","Press Enter to type after or press Shift + Enter to type before the widget":"Press Enter to type after or press Shift + Enter to type before the widget",Previous:"Previous","Previous result":"Previous result","Proportional to":"Proportional to",Purple:"Purple","Question exclamation mark":"Question exclamation mark",Red:"Red","Red pen":"Red pen",Redo:"Redo","Registered sign":"Registered sign","Remove color":"Remove color","Remove Format":"Remove Format","Remove highlight":"Remove highlight","Remove language":"Remove language",Replace:"Replace","Replace all":"Replace all","Replace with…":"Replace with…","Resize image":"Resize image","Resize image to %0":"Resize image to %0","Resize image to the original size":"Resize image to the original size","Restore default":"Restore default","Reversed order":"Reversed order","Reversed paragraph sign":"Reversed paragraph sign","Rich Text Editor":"Rich Text Editor","Rich Text Editor. Editing area: %0":"Rich Text Editor. Editing area: %0",Ridge:"Ridge","Right aligned image":"Right aligned image","Right double quotation mark":"Right double quotation mark","Right single quotation mark":"Right single quotation mark","Right-pointing double angle quotation mark":"Right-pointing double angle quotation mark","rightwards arrow to bar":"rightwards arrow to bar","rightwards dashed arrow":"rightwards dashed arrow","rightwards double arrow":"rightwards double arrow","rightwards simple arrow":"rightwards simple arrow",Row:"Row","Ruble sign":"Ruble sign","Rupee sign":"Rupee sign",Save:"Save","Save changes":"Save changes","Section sign":"Section sign","Select all":"Select all","Select column":"Select column","Select row":"Select row","Show more items":"Show more items","Show options":"Show options","Side image":"Side image","Single left-pointing angle quotation mark":"Single left-pointing angle quotation mark","Single low-9 quotation mark":"Single low-9 quotation mark","Single right-pointing angle quotation mark":"Single right-pointing angle quotation mark",Small:"Small",Solid:"Solid","soon with rightwards arrow above":"soon with rightwards arrow above",Source:"Source","Special characters":"Special characters","Spesmilo sign":"Spesmilo sign","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically",Square:"Square","Square root":"Square root","Start at":"Start at","Start index must be greater than 0.":"Start index must be greater than 0.",Strikethrough:"Strikethrough",Style:"Style",Styles:"Styles",Subscript:"Subscript",Superscript:"Superscript","Table alignment toolbar":"Table alignment toolbar","Table cell text alignment":"Table cell text alignment","Table properties":"Table properties","Table toolbar":"Table toolbar","Tenge sign":"Tenge sign",Text:"Text","Text alignment":"Text alignment","Text alignment toolbar":"Text alignment toolbar","Text alternative":"Text alternative","Text highlight toolbar":"Text highlight toolbar","Text styles":"Text styles","Text to find must not be empty.":"Text to find must not be empty.",'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".':'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".',"The URL must not be empty.":"The URL must not be empty.",'The value is invalid. Try "10px" or "2em" or simply "2".':'The value is invalid. Try "10px" or "2em" or simply "2".',"There exists":"There exists","This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tilde operator":"Tilde operator",Tiny:"Tiny","Tip: Find some text first in order to replace it.":"Tip: Find some text first in order to replace it.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","To-do List":"To-do List","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on","Toggle the circle list style":"Toggle the circle list style","Toggle the decimal list style":"Toggle the decimal list style","Toggle the decimal with leading zero list style":"Toggle the decimal with leading zero list style","Toggle the disc list style":"Toggle the disc list style","Toggle the lower–latin list style":"Toggle the lower–latin list style","Toggle the lower–roman list style":"Toggle the lower–roman list style","Toggle the square list style":"Toggle the square list style","Toggle the upper–latin list style":"Toggle the upper–latin list style","Toggle the upper–roman list style":"Toggle the upper–roman list style","top with upwards arrow above":"top with upwards arrow above","Trade mark sign":"Trade mark sign","Tugrik sign":"Tugrik sign","Turkish lira sign":"Turkish lira sign",Turquoise:"Turquoise","Two dot leader":"Two dot leader",Underline:"Underline",Undo:"Undo",Union:"Union",Unlink:"Unlink","up down arrow with base":"up down arrow with base",Update:"Update","Update image URL":"Update image URL","Upload failed":"Upload failed","Upload in progress":"Upload in progress","Upper-latin":"Upper-latin","Upper-roman":"Upper-roman","upwards arrow to bar":"upwards arrow to bar","upwards dashed arrow":"upwards dashed arrow","upwards double arrow":"upwards double arrow","upwards simple arrow":"upwards simple arrow","Vertical text alignment toolbar":"Vertical text alignment toolbar","Vulgar fraction one half":"Vulgar fraction one half","Vulgar fraction one quarter":"Vulgar fraction one quarter","Vulgar fraction three quarters":"Vulgar fraction three quarters",White:"White","Whole words only":"Whole words only","Widget toolbar":"Widget toolbar",Width:"Width","Won sign":"Won sign","Words: %0":"Words: %0","Wrap text":"Wrap text",Yellow:"Yellow","Yellow marker":"Yellow marker","Yen sign":"Yen sign"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(function(h,f){s.exports=f()})(self,()=>(()=>{var d={8180:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck-content code{background-color:hsla(0,0%,78%,.3);border-radius:2px;padding:.15em}.ck.ck-editor__editable .ck-code_selected{background-color:hsla(0,0%,78%,.5)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-basic-styles/theme/code.css"],names:[],mappings:"AAKA,iBACC,kCAAuC,CAEvC,iBAAkB,CADlB,aAED,CAEA,0CACC,kCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content code {
	background-color: hsla(0, 0%, 78%, 0.3);
	padding: .15em;
	border-radius: 2px;
}

.ck.ck-editor__editable .ck-code_selected  {
	background-color: hsla(0, 0%, 78%, 0.5);
}
`],sourceRoot:""}]);const D=_},636:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content blockquote {
	/* See #12 */
	overflow: hidden;

	/* https://github.com/ckeditor/ckeditor5-block-quote/issues/15 */
	padding-right: 1.5em;
	padding-left: 1.5em;

	margin-left: 0;
	margin-right: 0;
	font-style: italic;
	border-left: solid 5px hsl(0, 0%, 80%);
}

.ck-content[dir="rtl"] blockquote {
	border-left: 0;
	border-right: solid 5px hsl(0, 0%, 80%);
}
`],sourceRoot:""}]);const D=_},390:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-clipboard/theme/clipboard.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CCzBF,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CA2DF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		display: inline;
		position: relative;
		pointer-events: none;

		& span {
			position: absolute;
			width: 0;
		}
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		& > .ck-widget__selection-handle {
			display: none;
		}

		& > .ck-widget__type-around {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-clipboard-drop-target-dot-width: 12px;
	--ck-clipboard-drop-target-dot-height: 8px;
	--ck-clipboard-drop-target-color: var(--ck-color-focus-border)
}

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		& span {
			bottom: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			border: 1px solid var(--ck-clipboard-drop-target-color);
			background: var(--ck-clipboard-drop-target-color);
			margin-left: -1px;

			/* The triangle above the marker */
			&::after {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: 50%;
				top: calc(var(--ck-clipboard-drop-target-dot-height) * -.5);

				transform: translateX(-50%);
				border-color: var(--ck-clipboard-drop-target-color) transparent transparent transparent;
				border-width: calc(var(--ck-clipboard-drop-target-dot-height)) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width));
				border-style: solid;
			}
		}
	}

	/*
	// Horizontal drop target (between blocks).
	& .ck.ck-clipboard-drop-target-position {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		margin: 0;
		text-align: initial;

		& .ck-clipboard-drop-target__line {
			position: absolute;
			width: 100%;
			height: 0;
			border: 1px solid var(--ck-clipboard-drop-target-color);
			margin-top: -1px;

			&::before {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: calc(-1 * var(--ck-clipboard-drop-target-dot-size));
				top: 0;

				transform: translateY(-50%);
				border-color: transparent transparent transparent var(--ck-clipboard-drop-target-color);
				border-width: var(--ck-clipboard-drop-target-dot-size) 0 var(--ck-clipboard-drop-target-dot-size) calc(2 * var(--ck-clipboard-drop-target-dot-size));
				border-style: solid;
			}

			&::after {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				right: calc(-1 * var(--ck-clipboard-drop-target-dot-size));
				top: 0;

				transform: translateY(-50%);
				border-color: transparent var(--ck-clipboard-drop-target-color) transparent transparent;
				border-width: var(--ck-clipboard-drop-target-dot-size) calc(2 * var(--ck-clipboard-drop-target-dot-size)) var(--ck-clipboard-drop-target-dot-size) 0;
				border-style: solid;
			}
		}
	}
	*/

	/*
	 * Styles of the widget that it a drop target.
	 */
	& .ck-widget.ck-clipboard-drop-target-range {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color) !important;
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		zoom: 0.6;
		outline: none !important;
	}
}
`],sourceRoot:""}]);const D=_},9085:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck-content pre{background:hsla(0,0%,78%,.3);border:1px solid #c4c4c4;border-radius:2px;color:#353535;direction:ltr;font-style:normal;min-width:200px;padding:1em;tab-size:4;text-align:left;white-space:pre-wrap}.ck-content pre code{background:unset;border-radius:0;padding:0}.ck.ck-editor__editable pre{position:relative}.ck.ck-editor__editable pre[data-language]:after{content:attr(data-language);position:absolute}:root{--ck-color-code-block-label-background:#757575}.ck.ck-editor__editable pre[data-language]:after{background:var(--ck-color-code-block-label-background);color:#fff;font-family:var(--ck-font-face);font-size:10px;line-height:16px;padding:var(--ck-spacing-tiny) var(--ck-spacing-medium);right:10px;top:-1px;white-space:nowrap}.ck.ck-code-block-dropdown .ck-dropdown__panel{max-height:250px;overflow-x:hidden;overflow-y:auto}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-code-block/theme/codeblock.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-code-block/codeblock.css"],names:[],mappings:"AAKA,gBAGC,4BAAiC,CACjC,wBAAiC,CACjC,iBAAkB,CAHlB,aAAwB,CAOxB,aAAc,CAMd,iBAAkB,CAGlB,eAAgB,CAjBhB,WAAY,CAUZ,UAAW,CAHX,eAAgB,CAIhB,oBAaD,CALC,qBACC,gBAAiB,CAEjB,eAAgB,CADhB,SAED,CAGD,4BACC,iBAMD,CAJC,iDACC,2BAA4B,CAC5B,iBACD,CCjCD,MACC,8CACD,CAEA,iDAGC,sDAAuD,CAMvD,UAAuB,CAHvB,+BAAgC,CADhC,cAAe,CAEf,gBAAiB,CACjB,uDAAwD,CANxD,UAAW,CADX,QAAS,CAST,kBACD,CAEA,+CAEC,gBAAiB,CAEjB,iBAAkB,CADlB,eAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content pre {
	padding: 1em;
	color: hsl(0, 0%, 20.8%);
	background: hsla(0, 0%, 78%, 0.3);
	border: 1px solid hsl(0, 0%, 77%);
	border-radius: 2px;

	/* Code block are language direction–agnostic. */
	text-align: left;
	direction: ltr;

	tab-size: 4;
	white-space: pre-wrap;

	/* Don't inherit the style, e.g. when in a block quote. */
	font-style: normal;

	/* Don't let the code be squashed e.g. when in a table cell. */
	min-width: 200px;

	& code {
		background: unset;
		padding: 0;
		border-radius: 0;
	}
}

.ck.ck-editor__editable pre {
	position: relative;

	&[data-language]::after {
		content: attr(data-language);
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-code-block-label-background: hsl(0, 0%, 46%);
}

.ck.ck-editor__editable pre[data-language]::after {
	top: -1px;
	right: 10px;
	background: var(--ck-color-code-block-label-background);

	font-size: 10px;
	font-family: var(--ck-font-face);
	line-height: 16px;
	padding: var(--ck-spacing-tiny) var(--ck-spacing-medium);
	color: hsl(0, 0%, 100%);
	white-space: nowrap;
}

.ck.ck-code-block-dropdown .ck-dropdown__panel {
	/* There could be dozens of languages available. Use scroll to prevent a 10e6px dropdown. */
	max-height: 250px;
	overflow-y: auto;
	overflow-x: hidden;
}
`],sourceRoot:""}]);const D=_},8894:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text);cursor:text}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-engine/theme/placeholder.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC5BC,qDAEC,6CAA8C,CAD9C,WAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder,
.ck .ck-placeholder {
	position: relative;

	&::before {
		position: absolute;
		left: 0;
		right: 0;
		content: attr(data-placeholder);

		/* See ckeditor/ckeditor5#469. */
		pointer-events: none;
	}
}

/* See ckeditor/ckeditor5#1987. */
.ck.ck-read-only .ck-placeholder {
	&::before {
		display: none;
	}
}

/*
 * Rules for the \`ck-placeholder\` are loaded before the rules for \`ck-reset_all\` in the base CKEditor 5 DLL build.
 * This fix overwrites the incorrectly set \`position: static\` from \`ck-reset_all\`.
 * See https://github.com/ckeditor/ckeditor5/issues/11418.
 */
.ck.ck-reset_all .ck-placeholder {
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder, .ck .ck-placeholder {
	&::before {
		cursor: text;
		color: var(--ck-color-engine-placeholder-text);
	}
}
`],sourceRoot:""}]);const D=_},4401:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const D=_},5436:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck-find-result{background:var(--ck-color-highlight-background);color:var(--ck-color-text)}.ck-find-result_selected{background:#ff9633}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-find-and-replace/theme/findandreplace.css"],names:[],mappings:"AAKA,gBACC,+CAAgD,CAChD,0BACD,CAEA,yBACC,kBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-find-result {
	background: var(--ck-color-highlight-background);
	color: var(--ck-color-text);
}

.ck-find-result_selected {
	background: hsl(29, 100%, 60%);
}
`],sourceRoot:""}]);const D=_},9289:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck.ck-find-and-replace-form{max-width:100%}.ck.ck-find-and-replace-form fieldset{display:flex}.ck.ck-find-and-replace-form fieldset.ck-find-and-replace-form__find .ck-results-counter{position:absolute}.ck.ck-find-and-replace-form{width:400px}.ck.ck-find-and-replace-form:focus{outline:none}.ck.ck-find-and-replace-form fieldset{align-content:stretch;align-items:center;border:0;flex-direction:row;flex-wrap:nowrap;margin:0;padding:var(--ck-spacing-large)}.ck.ck-find-and-replace-form fieldset>.ck-button{flex:0 0 auto}[dir=ltr] .ck.ck-find-and-replace-form fieldset>*+*{margin-left:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-find-and-replace-form fieldset>*+*{margin-right:var(--ck-spacing-standard)}.ck.ck-find-and-replace-form fieldset .ck-labeled-field-view{flex:1 1 auto}.ck.ck-find-and-replace-form fieldset .ck-labeled-field-view .ck-input{min-width:50px;width:100%}.ck.ck-find-and-replace-form fieldset.ck-find-and-replace-form__find{align-items:flex-start}.ck.ck-find-and-replace-form fieldset.ck-find-and-replace-form__find>.ck-button-find{font-weight:700}.ck.ck-find-and-replace-form fieldset.ck-find-and-replace-form__find>.ck-button-find .ck-button__label{padding-left:var(--ck-spacing-large);padding-right:var(--ck-spacing-large)}.ck.ck-find-and-replace-form fieldset.ck-find-and-replace-form__find>.ck-button-prev>.ck-icon{transform:rotate(90deg)}.ck.ck-find-and-replace-form fieldset.ck-find-and-replace-form__find>.ck-button-next>.ck-icon{transform:rotate(-90deg)}.ck.ck-find-and-replace-form fieldset.ck-find-and-replace-form__find .ck-results-counter{top:50%;transform:translateY(-50%)}[dir=ltr] .ck.ck-find-and-replace-form fieldset.ck-find-and-replace-form__find .ck-results-counter{right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-find-and-replace-form fieldset.ck-find-and-replace-form__find .ck-results-counter{left:var(--ck-spacing-standard)}.ck.ck-find-and-replace-form fieldset.ck-find-and-replace-form__find .ck-results-counter{color:var(--ck-color-base-border)}.ck.ck-find-and-replace-form fieldset.ck-find-and-replace-form__replace{flex-wrap:wrap;justify-content:flex-end;margin-top:calc(var(--ck-spacing-large)*-1)}.ck.ck-find-and-replace-form fieldset.ck-find-and-replace-form__replace>.ck-labeled-field-view{margin-bottom:var(--ck-spacing-large)}.ck.ck-find-and-replace-form fieldset.ck-find-and-replace-form__replace>.ck-options-dropdown{margin-left:0;margin-right:auto}.ck.ck-find-and-replace-form fieldset.ck-find-and-replace-form__replace>.ck-labeled-field-view,.ck.ck-find-and-replace-form fieldset.ck-find-and-replace-form__replace>.ck-labeled-field-view .ck-input{width:100%}@media screen and (max-width:600px){.ck.ck-find-and-replace-form{width:300px}.ck.ck-find-and-replace-form fieldset{flex-wrap:wrap}.ck.ck-find-and-replace-form fieldset.ck-find-and-replace-form__find .ck-labeled-field-view{flex:1 0 auto;margin-bottom:var(--ck-spacing-standard);width:100%}.ck.ck-find-and-replace-form fieldset.ck-find-and-replace-form__find>.ck-button{text-align:center}.ck.ck-find-and-replace-form fieldset.ck-find-and-replace-form__find>.ck-button:first-of-type{flex:1 1 auto}[dir=ltr] .ck.ck-find-and-replace-form fieldset.ck-find-and-replace-form__find>.ck-button:first-of-type{margin-left:0}[dir=rtl] .ck.ck-find-and-replace-form fieldset.ck-find-and-replace-form__find>.ck-button:first-of-type{margin-right:0}.ck.ck-find-and-replace-form fieldset.ck-find-and-replace-form__find>.ck-button:first-of-type .ck-button__label{text-align:center;width:100%}.ck.ck-find-and-replace-form fieldset.ck-find-and-replace-form__replace>:not(.ck-labeled-field-view){flex:1 1 auto}.ck.ck-find-and-replace-form fieldset.ck-find-and-replace-form__replace>.ck-dropdown:not(.ck-labeled-field-view){flex-grow:0}.ck.ck-find-and-replace-form fieldset.ck-find-and-replace-form__replace>.ck-button:not(.ck-labeled-field-view)>.ck-button__label{text-align:center;width:100%}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-find-and-replace/theme/findandreplaceform.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-find-and-replace/findandreplaceform.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAKA,6BACC,cAUD,CARC,sCACC,YAMD,CAHC,yFACC,iBACD,CCNF,6BACC,WAyGD,CAnGC,mCACC,YACD,CAEA,sCAIC,qBAAsB,CADtB,kBAAmB,CAInB,QAAS,CANT,kBAAmB,CACnB,gBAAiB,CAMjB,QAAS,CAFT,+BAwFD,CApFC,iDACC,aACD,CAGC,oDACC,sCACD,CAIA,oDACC,uCACD,CAGD,6DACC,aAMD,CAJC,uEAEC,cAAe,CADf,UAED,CAID,qEAEC,sBAkCD,CAhCC,qFACC,eAOD,CAJC,uGACC,oCAAqC,CACrC,qCACD,CAGD,8FACC,uBACD,CAEA,8FACC,wBACD,CAEA,yFACC,OAAQ,CACR,0BAWD,CAbA,mGAKE,gCAQF,CAbA,mGASE,+BAIF,CAbA,yFAYC,iCACD,CAID,wEACC,cAAe,CACf,wBAAyB,CACzB,2CAeD,CAbC,+FACC,qCACD,CAEA,6FAEC,aAAc,CADd,iBAED,CAEA,wMAEC,UACD,CCzGF,oCD+GA,6BACC,WAiDD,CA/CC,sCACC,cA6CD,CAzCE,4FACC,aAAc,CAEd,wCAAyC,CADzC,UAED,CAEA,gFACC,iBAkBD,CAhBC,8FACC,aAcD,CAfA,wGAIE,aAWF,CAfA,wGAQE,cAOF,CAJC,gHAEC,iBAAkB,CADlB,UAED,CAMH,qGACC,aAUD,CARC,iHACC,WACD,CAEA,iIAEC,iBAAkB,CADlB,UAED,CC5JH",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-find-and-replace-form {
	max-width: 100%;

	& fieldset {
		display: flex;

		/* The find fieldset */
		&.ck-find-and-replace-form__find .ck-results-counter {
			position: absolute;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-find-and-replace-form {
	width: 400px;

	/*
	 * The <form> needs tabindex="-1" for proper Esc handling after being clicked
	 * but the side effect is that this creates a nasty focus outline in some browsers.
	 */
	&:focus {
		outline: none;
	}

	& fieldset {
		flex-direction: row;
		flex-wrap: nowrap;
		align-items: center;
		align-content: stretch;

		padding: var(--ck-spacing-large);
		border: 0;
		margin: 0;

		& > .ck-button {
			flex: 0 0 auto;
		}

		@mixin ck-dir ltr {
			& > * + * {
				margin-left: var(--ck-spacing-standard);
			}
		}

		@mixin ck-dir rtl {
			& > * + * {
				margin-right: var(--ck-spacing-standard);
			}
		}

		& .ck-labeled-field-view {
			flex: 1 1 auto;

			& .ck-input {
				width: 100%;
				min-width: 50px;
			}
		}

		/* The find fieldset */
		&.ck-find-and-replace-form__find {
			/* To display all controls in line when there's an error under the input */
			align-items: flex-start;

			& > .ck-button-find {
				font-weight: bold;

				/* Beef the find button up a little. It's the main action button in the form */
				& .ck-button__label {
					padding-left: var(--ck-spacing-large);
					padding-right: var(--ck-spacing-large);
				}
			}

			& > .ck-button-prev > .ck-icon {
				transform: rotate(90deg);
			}

			& > .ck-button-next > .ck-icon {
				transform: rotate(-90deg);
			}

			& .ck-results-counter {
				top: 50%;
				transform: translateY(-50%);

				@mixin ck-dir ltr {
					right: var(--ck-spacing-standard);
				}

				@mixin ck-dir rtl {
					left: var(--ck-spacing-standard);
				}

				color: var(--ck-color-base-border);
			}
		}

		/* The replace fieldset */
		&.ck-find-and-replace-form__replace {
			flex-wrap: wrap;
			justify-content: flex-end;
			margin-top: calc( -1 * var(--ck-spacing-large) );

			& > .ck-labeled-field-view {
				margin-bottom: var(--ck-spacing-large);
			}

			& > .ck-options-dropdown {
				margin-right: auto;
				margin-left: 0;
			}

			& > .ck-labeled-field-view,
			& > .ck-labeled-field-view .ck-input {
				width: 100%;
			}
		}
	}
}

@mixin ck-media-phone {
	.ck.ck-find-and-replace-form {
		width: 300px;

		& fieldset {
			flex-wrap: wrap;

			/* The find fieldset */
			&.ck-find-and-replace-form__find {
				& .ck-labeled-field-view {
					flex: 1 0 auto;
					width: 100%;
					margin-bottom: var(--ck-spacing-standard);
				}

				& > .ck-button {
					text-align: center;

					&:first-of-type {
						flex: 1 1 auto;

						@mixin ck-dir ltr {
							margin-left: 0;
						}

						@mixin ck-dir rtl {
							margin-right: 0;
						}

						& .ck-button__label {
							width: 100%;
							text-align: center;
						}
					}
				}
			}

			/* The replace fieldset */
			&.ck-find-and-replace-form__replace > :not(.ck-labeled-field-view) {
				flex: 1 1 auto;

				&.ck-dropdown {
					flex-grow: 0;
				}

				&.ck-button > .ck-button__label {
					width: 100%;
					text-align: center;
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=_},2585:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck .ck-button.ck-color-table__remove-color{align-items:center;display:flex;width:100%}label.ck.ck-color-grid__label{font-weight:unset}.ck .ck-button.ck-color-table__remove-color{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard)}.ck .ck-button.ck-color-table__remove-color:not(:focus){border-bottom:1px solid var(--ck-color-base-border)}[dir=ltr] .ck .ck-button.ck-color-table__remove-color .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck .ck-button.ck-color-table__remove-color .ck.ck-icon{margin-left:var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-font/theme/fontcolor.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-font/fontcolor.css"],names:[],mappings:"AAKA,4CAEC,kBAAmB,CADnB,YAAa,CAEb,UACD,CAEA,8BACC,iBACD,CCNA,4CAEC,2BAA4B,CAC5B,4BAA6B,CAF7B,qEAiBD,CAbC,wDACC,mDACD,CAEA,kEAEE,uCAMF,CARA,kEAME,sCAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-button.ck-color-table__remove-color {
	display: flex;
	align-items: center;
	width: 100%;
}

label.ck.ck-color-grid__label {
	font-weight: unset;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck .ck-button.ck-color-table__remove-color {
	padding: calc(var(--ck-spacing-standard) / 2 ) var(--ck-spacing-standard);
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 0;

	&:not(:focus) {
		border-bottom: 1px solid var(--ck-color-base-border);
	}

	& .ck.ck-icon {
		@mixin ck-dir ltr {
			margin-right: var(--ck-spacing-standard);
		}

		@mixin ck-dir rtl {
			margin-left: var(--ck-spacing-standard);
		}
	}
}

`],sourceRoot:""}]);const D=_},6203:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck-content .text-tiny{font-size:.7em}.ck-content .text-small{font-size:.85em}.ck-content .text-big{font-size:1.4em}.ck-content .text-huge{font-size:1.8em}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-font/theme/fontsize.css"],names:[],mappings:"AAUC,uBACC,cACD,CAEA,wBACC,eACD,CAEA,sBACC,eACD,CAEA,uBACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* The values should be synchronized with the "FONT_SIZE_PRESET_UNITS" object in the "/src/fontsize/utils.js" file. */

/* Styles should be prefixed with the \`.ck-content\` class.
See https://github.com/ckeditor/ckeditor5/issues/6636 */
.ck-content {
	& .text-tiny {
		font-size: .7em;
	}

	& .text-small {
		font-size: .85em;
	}

	& .text-big {
		font-size: 1.4em;
	}

	& .text-huge {
		font-size: 1.8em;
	}
}
`],sourceRoot:""}]);const D=_},3230:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-heading/theme/heading.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-heading_heading1 {
	font-size: 20px;
}

.ck.ck-heading_heading2 {
	font-size: 17px;
}

.ck.ck-heading_heading3 {
	font-size: 14px;
}

.ck[class*="ck-heading_heading"] {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Resize dropdown's button label. */
.ck.ck-dropdown.ck-heading-dropdown {
	& .ck-dropdown__button .ck-button__label {
		width: 8em;
	}

	& .ck-dropdown__panel .ck-list__item {
		min-width: 18em;
	}
}
`],sourceRoot:""}]);const D=_},713:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,":root{--ck-highlight-marker-yellow:#fdfd77;--ck-highlight-marker-green:#62f962;--ck-highlight-marker-pink:#fc7899;--ck-highlight-marker-blue:#72ccfd;--ck-highlight-pen-red:#e71313;--ck-highlight-pen-green:#128a00}.ck-content .marker-yellow{background-color:var(--ck-highlight-marker-yellow)}.ck-content .marker-green{background-color:var(--ck-highlight-marker-green)}.ck-content .marker-pink{background-color:var(--ck-highlight-marker-pink)}.ck-content .marker-blue{background-color:var(--ck-highlight-marker-blue)}.ck-content .pen-red{background-color:transparent;color:var(--ck-highlight-pen-red)}.ck-content .pen-green{background-color:transparent;color:var(--ck-highlight-pen-green)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-highlight/theme/highlight.css"],names:[],mappings:"AAKA,MACC,oCAA+C,CAC/C,mCAA+C,CAC/C,kCAA8C,CAC9C,kCAA8C,CAC9C,8BAAwC,CACxC,gCACD,CAGC,2BACC,kDACD,CAFA,0BACC,iDACD,CAFA,yBACC,gDACD,CAFA,yBACC,gDACD,CAIA,qBAIC,4BAA6B,CAH7B,iCAID,CALA,uBAIC,4BAA6B,CAH7B,mCAID",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-highlight-marker-yellow: hsl(60, 97%, 73%);
	--ck-highlight-marker-green: hsl(120, 93%, 68%);
	--ck-highlight-marker-pink: hsl(345, 96%, 73%);
	--ck-highlight-marker-blue: hsl(201, 97%, 72%);
	--ck-highlight-pen-red: hsl(0, 85%, 49%);
	--ck-highlight-pen-green: hsl(112, 100%, 27%);
}

@define-mixin highlight-marker-color $color {
	.ck-content .marker-$color {
		background-color: var(--ck-highlight-marker-$color);
	}
}

@define-mixin highlight-pen-color $color {
	.ck-content .pen-$color {
		color: var(--ck-highlight-pen-$color);

		/* Override default yellow background of \`<mark>\` from user agent stylesheet */
		background-color: transparent;
	}
}

@mixin highlight-marker-color yellow;
@mixin highlight-marker-color green;
@mixin highlight-marker-color pink;
@mixin highlight-marker-color blue;

@mixin highlight-pen-color red;
@mixin highlight-pen-color green;
`],sourceRoot:""}]);const D=_},2536:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck-editor__editable .ck-horizontal-line{display:flow-root}.ck-content hr{background:#dedede;border:0;height:4px;margin:15px 0}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-horizontal-line/theme/horizontalline.css"],names:[],mappings:"AAMA,yCAEC,iBACD,CAEA,eAGC,kBAA2B,CAC3B,QAAS,CAFT,UAAW,CADX,aAID",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */


.ck-editor__editable .ck-horizontal-line {
	/* Necessary to render properly next to floated objects, e.g. side image case. */
	display: flow-root;
}

.ck-content hr {
	margin: 15px 0;
	height: 4px;
	background: hsl(0, 0%, 87%);
	border: 0;
}
`],sourceRoot:""}]);const D=_},3403:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck-widget.raw-html-embed{display:flow-root;font-style:normal;margin:.9em auto;min-width:15em;position:relative}.ck-widget.raw-html-embed:before{position:absolute;z-index:1}.ck-widget.raw-html-embed .raw-html-embed__buttons-wrapper{display:flex;flex-direction:column;position:absolute}.ck-widget.raw-html-embed .raw-html-embed__preview{display:flex;overflow:hidden;position:relative}.ck-widget.raw-html-embed .raw-html-embed__preview-content{border-collapse:separate;border-spacing:7px;display:table;margin:auto;position:relative;width:100%}.ck-widget.raw-html-embed .raw-html-embed__preview-placeholder{align-items:center;bottom:0;display:flex;justify-content:center;left:0;position:absolute;right:0;top:0}:root{--ck-html-embed-content-width:calc(100% - var(--ck-icon-size)*1.5);--ck-html-embed-source-height:10em;--ck-html-embed-unfocused-outline-width:1px;--ck-html-embed-content-min-height:calc(var(--ck-icon-size) + var(--ck-spacing-standard));--ck-html-embed-source-disabled-background:var(--ck-color-base-foreground);--ck-html-embed-source-disabled-color:#737373}.ck-widget.raw-html-embed{background-color:var(--ck-color-base-foreground);font-size:var(--ck-font-size-base)}.ck-widget.raw-html-embed:not(.ck-widget_selected):not(:hover){outline:var(--ck-html-embed-unfocused-outline-width) dashed var(--ck-color-widget-blurred-border)}.ck-widget.raw-html-embed[dir=ltr]{text-align:left}.ck-widget.raw-html-embed[dir=rtl]{text-align:right}.ck-widget.raw-html-embed:before{background:#999;border-radius:0 0 var(--ck-border-radius) var(--ck-border-radius);color:var(--ck-color-base-background);content:attr(data-html-embed-label);font-family:var(--ck-font-face);font-size:var(--ck-font-size-tiny);left:var(--ck-spacing-standard);padding:calc(var(--ck-spacing-tiny) + var(--ck-html-embed-unfocused-outline-width)) var(--ck-spacing-small) var(--ck-spacing-tiny);top:calc(var(--ck-html-embed-unfocused-outline-width)*-1);transition:background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck-widget.raw-html-embed[dir=rtl]:before{left:auto;right:var(--ck-spacing-standard)}.ck-widget.raw-html-embed[dir=ltr] .ck-widget__type-around .ck-widget__type-around__button.ck-widget__type-around__button_before{margin-left:50px}.ck.ck-editor__editable.ck-blurred .ck-widget.raw-html-embed.ck-widget_selected:before{padding:var(--ck-spacing-tiny) var(--ck-spacing-small);top:0}.ck.ck-editor__editable:not(.ck-blurred) .ck-widget.raw-html-embed.ck-widget_selected:before{background:var(--ck-color-focus-border);padding:var(--ck-spacing-tiny) var(--ck-spacing-small);top:0}.ck.ck-editor__editable .ck-widget.raw-html-embed:not(.ck-widget_selected):hover:before{padding:var(--ck-spacing-tiny) var(--ck-spacing-small);top:0}.ck-widget.raw-html-embed .raw-html-embed__content-wrapper{padding:var(--ck-spacing-standard)}.ck-widget.raw-html-embed .raw-html-embed__buttons-wrapper{right:var(--ck-spacing-standard);top:var(--ck-spacing-standard)}.ck-widget.raw-html-embed .raw-html-embed__buttons-wrapper .ck-button.raw-html-embed__save-button{color:var(--ck-color-button-save)}.ck-widget.raw-html-embed .raw-html-embed__buttons-wrapper .ck-button.raw-html-embed__cancel-button{color:var(--ck-color-button-cancel)}.ck-widget.raw-html-embed .raw-html-embed__buttons-wrapper .ck-button:not(:first-child){margin-top:var(--ck-spacing-small)}.ck-widget.raw-html-embed[dir=rtl] .raw-html-embed__buttons-wrapper{left:var(--ck-spacing-standard);right:auto}.ck-widget.raw-html-embed .raw-html-embed__source{box-sizing:border-box;direction:ltr;font-family:monospace;font-size:var(--ck-font-size-base);height:var(--ck-html-embed-source-height);min-width:0;padding:var(--ck-spacing-standard);resize:none;tab-size:4;text-align:left;white-space:pre-wrap;width:var(--ck-html-embed-content-width)}.ck-widget.raw-html-embed .raw-html-embed__source[disabled]{-webkit-text-fill-color:var(--ck-html-embed-source-disabled-color);background:var(--ck-html-embed-source-disabled-background);color:var(--ck-html-embed-source-disabled-color);opacity:1}.ck-widget.raw-html-embed .raw-html-embed__preview{min-height:var(--ck-html-embed-content-min-height);width:var(--ck-html-embed-content-width)}.ck-editor__editable:not(.ck-read-only) .ck-widget.raw-html-embed .raw-html-embed__preview{pointer-events:none}.ck-widget.raw-html-embed .raw-html-embed__preview-content{background-color:var(--ck-color-base-foreground);box-sizing:border-box}.ck-widget.raw-html-embed .raw-html-embed__preview-content>*{margin-left:auto;margin-right:auto}.ck-widget.raw-html-embed .raw-html-embed__preview-placeholder{color:var(--ck-html-embed-source-disabled-color)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-html-embed/theme/htmlembed.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-html-embed/htmlembed.css"],names:[],mappings:"AAMA,0BAMC,iBAAkB,CAOlB,iBAAkB,CATlB,gBAAkB,CAMlB,cAAe,CALf,iBAwDD,CA5CC,iCACC,iBAAkB,CAGlB,SACD,CAKA,2DAEC,YAAa,CACb,qBAAsB,CAFtB,iBAGD,CAEA,mDAGC,YAAa,CADb,eAAgB,CADhB,iBAGD,CAEA,2DAOC,wBAAyB,CACzB,kBAAmB,CAFnB,aAAc,CAHd,WAAY,CADZ,iBAAkB,CADlB,UAQD,CAEA,+DAQC,kBAAmB,CAHnB,QAAS,CAET,YAAa,CAEb,sBAAuB,CAPvB,MAAO,CADP,iBAAkB,CAGlB,OAAQ,CADR,KAOD,CC7DD,MACC,kEAAqE,CACrE,kCAAmC,CACnC,2CAA4C,CAC5C,yFAA0F,CAE1F,0EAA2E,CAC3E,6CACD,CAGA,0BAEC,gDAAiD,CADjD,kCA0ID,CAvIC,+DACC,iGACD,CAGA,mCACC,eACD,CAEA,mCACC,gBACD,CAIA,iCAIC,eAA4B,CAG5B,iEAAkE,CAClE,qCAAsC,CAPtC,mCAAoC,CASpC,+BAAgC,CADhC,kCAAmC,CANnC,+BAAgC,CAGhC,kIAAmI,CAJnI,yDAA4D,CAG5D,0GAMD,CAEA,0CACC,SAAU,CACV,gCACD,CAGA,iIACC,gBACD,CAxCD,uFA4CE,sDAAuD,CADvD,KAgGF,CA3IA,6FAkDE,uCAAwC,CADxC,sDAAuD,CADvD,KA2FF,CA3IA,wFAuDE,sDAAuD,CADvD,KAqFF,CA/EC,2DACC,kCACD,CAGA,2DAEC,gCAAiC,CADjC,8BAcD,CAXC,kGACC,iCACD,CAEA,oGACC,mCACD,CAEA,wFACC,kCACD,CAGD,oEACC,+BAAgC,CAChC,UACD,CAGA,kDACC,qBAAsB,CActB,aAAc,CAPd,qBAAsB,CAGtB,kCAAmC,CATnC,yCAA0C,CAG1C,WAAY,CACZ,kCAAmC,CAFnC,WAAY,CAKZ,UAAW,CAKX,eAAgB,CAJhB,oBAAqB,CAPrB,wCAsBD,CARC,4DAKC,kEAAmE,CAJnE,0DAA2D,CAC3D,gDAAiD,CAIjD,SACD,CAID,mDACC,kDAAmD,CACnD,wCAMD,CARA,2FAME,mBAEF,CAEA,2DAEC,gDAAiD,CADjD,qBAOD,CAJC,6DACC,gBAAiB,CACjB,iBACD,CAGD,+DACC,gDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* The feature container. */
.ck-widget.raw-html-embed {
	/* Give the embed some air. */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em auto;
	position: relative;
	display: flow-root;

	/* Give the html embed some minimal width in the content to prevent them
	from being "squashed" in tight spaces, e.g. in table cells (https://github.com/ckeditor/ckeditor5/issues/8331) */
	min-width: 15em;

	/* Don't inherit the style, e.g. when in a block quote. */
	font-style: normal;

	/* ----- Emebed label in the upper left corner ----------------------------------------------- */

	&::before {
		position: absolute;

		/* Make sure the content does not cover the label. */
		z-index: 1;
	}

	/* ----- Emebed internals --------------------------------------------------------------------- */

	/* The switch mode button wrapper. */
	& .raw-html-embed__buttons-wrapper {
		position: absolute;
		display: flex;
		flex-direction: column;
	}

	& .raw-html-embed__preview {
		position: relative;
		overflow: hidden;
		display: flex;
	}

	& .raw-html-embed__preview-content {
		width: 100%;
		position: relative;
		margin: auto;

		/* Gives spacing to the small renderable elements, so they always cover the placeholder. */
		display: table;
		border-collapse: separate;
		border-spacing: 7px;
	}

	& .raw-html-embed__preview-placeholder {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;

		display: flex;
		align-items: center;
		justify-content: center;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-html-embed-content-width: calc(100% - 1.5 * var(--ck-icon-size));
	--ck-html-embed-source-height: 10em;
	--ck-html-embed-unfocused-outline-width: 1px;
	--ck-html-embed-content-min-height: calc(var(--ck-icon-size) + var(--ck-spacing-standard));

	--ck-html-embed-source-disabled-background: var(--ck-color-base-foreground);
	--ck-html-embed-source-disabled-color: hsl(0deg 0% 45%);
}

/* The feature container. */
.ck-widget.raw-html-embed {
	font-size: var(--ck-font-size-base);
	background-color: var(--ck-color-base-foreground);

	&:not(.ck-widget_selected):not(:hover) {
		outline: var(--ck-html-embed-unfocused-outline-width) dashed var(--ck-color-widget-blurred-border);
	}

	/* HTML embed widget itself should respect UI language direction */
	&[dir="ltr"] {
		text-align: left;
	}

	&[dir="rtl"] {
		text-align: right;
	}

	/* ----- Embed label in the upper left corner ----------------------------------------------- */

	&::before {
		content: attr(data-html-embed-label);
		top: calc(-1 * var(--ck-html-embed-unfocused-outline-width));
		left: var(--ck-spacing-standard);
		background: hsl(0deg 0% 60%);
		transition: background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);
		padding: calc(var(--ck-spacing-tiny) + var(--ck-html-embed-unfocused-outline-width)) var(--ck-spacing-small) var(--ck-spacing-tiny);
		border-radius: 0 0 var(--ck-border-radius) var(--ck-border-radius);
		color: var(--ck-color-base-background);
		font-size: var(--ck-font-size-tiny);
		font-family: var(--ck-font-face);
	}

	&[dir="rtl"]::before {
		left: auto;
		right: var(--ck-spacing-standard);
	}

	/* Make space for label but it only collides in LTR languages */
	&[dir="ltr"] .ck-widget__type-around .ck-widget__type-around__button.ck-widget__type-around__button_before {
		margin-left: 50px;
	}

	@nest .ck.ck-editor__editable.ck-blurred &.ck-widget_selected::before {
		top: 0px;
		padding: var(--ck-spacing-tiny) var(--ck-spacing-small);
	}

	@nest .ck.ck-editor__editable:not(.ck-blurred) &.ck-widget_selected::before {
		top: 0;
		padding: var(--ck-spacing-tiny) var(--ck-spacing-small);
		background: var(--ck-color-focus-border);
	}

	@nest .ck.ck-editor__editable &:not(.ck-widget_selected):hover::before {
		top: 0px;
		padding: var(--ck-spacing-tiny) var(--ck-spacing-small);
	}

	/* ----- Emebed internals --------------------------------------------------------------------- */

	& .raw-html-embed__content-wrapper {
		padding: var(--ck-spacing-standard);
	}

	/* The switch mode button wrapper. */
	& .raw-html-embed__buttons-wrapper {
		top: var(--ck-spacing-standard);
		right: var(--ck-spacing-standard);

		& .ck-button.raw-html-embed__save-button {
			color: var(--ck-color-button-save);
		}

		& .ck-button.raw-html-embed__cancel-button {
			color: var(--ck-color-button-cancel);
		}

		& .ck-button:not(:first-child) {
			margin-top: var(--ck-spacing-small);
		}
	}

	&[dir="rtl"] .raw-html-embed__buttons-wrapper {
		left: var(--ck-spacing-standard);
		right: auto;
	}

	/* The edit source element. */
	& .raw-html-embed__source {
		box-sizing: border-box;
		height: var(--ck-html-embed-source-height);
		width: var(--ck-html-embed-content-width);
		resize: none;
		min-width: 0;
		padding: var(--ck-spacing-standard);

		font-family: monospace;
		tab-size: 4;
		white-space: pre-wrap;
		font-size: var(--ck-font-size-base); /* Safari needs this. */

		/* HTML code is direction–agnostic. */
		text-align: left;
		direction: ltr;

		&[disabled] {
			background: var(--ck-html-embed-source-disabled-background);
			color: var(--ck-html-embed-source-disabled-color);

			/* Safari needs this for the proper text color in disabled input (https://github.com/ckeditor/ckeditor5/issues/8320). */
			-webkit-text-fill-color: var(--ck-html-embed-source-disabled-color);
			opacity: 1;
		}
	}

	/* The preview data container. */
	& .raw-html-embed__preview {
		min-height: var(--ck-html-embed-content-min-height);
		width: var(--ck-html-embed-content-width);

		/* Disable all mouse interaction as long as the editor is not read–only. */
		@nest .ck-editor__editable:not(.ck-read-only) & {
			pointer-events: none;
		}
	}

	& .raw-html-embed__preview-content {
		box-sizing: border-box;
		background-color: var(--ck-color-base-foreground);

		& > * {
			margin-left: auto;
			margin-right: auto;
		}
	}

	& .raw-html-embed__preview-placeholder {
		color: var(--ck-html-embed-source-disabled-color)
	}
}
`],sourceRoot:""}]);const D=_},8468:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,":root{--ck-html-object-embed-unfocused-outline-width:1px}.ck-widget.html-object-embed{background-color:var(--ck-color-base-foreground);font-size:var(--ck-font-size-base);min-width:calc(76px + var(--ck-spacing-standard));padding:var(--ck-spacing-small);padding-top:calc(var(--ck-font-size-tiny) + var(--ck-spacing-large))}.ck-widget.html-object-embed:not(.ck-widget_selected):not(:hover){outline:var(--ck-html-object-embed-unfocused-outline-width) dashed var(--ck-color-widget-blurred-border)}.ck-widget.html-object-embed:before{background:#999;border-radius:0 0 var(--ck-border-radius) var(--ck-border-radius);color:var(--ck-color-base-background);content:attr(data-html-object-embed-label);font-family:var(--ck-font-face);font-size:var(--ck-font-size-tiny);font-style:normal;font-weight:400;left:var(--ck-spacing-standard);padding:calc(var(--ck-spacing-tiny) + var(--ck-html-object-embed-unfocused-outline-width)) var(--ck-spacing-small) var(--ck-spacing-tiny);position:absolute;top:0;transition:background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck-widget.html-object-embed .ck-widget__type-around .ck-widget__type-around__button.ck-widget__type-around__button_before{margin-left:50px}.ck-widget.html-object-embed .html-object-embed__content{pointer-events:none}div.ck-widget.html-object-embed{margin:1em auto}span.ck-widget.html-object-embed{display:inline-block}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-html-support/theme/datafilter.css"],names:[],mappings:"AAKA,MACC,kDACD,CAEA,6BAEC,gDAAiD,CADjD,kCAAmC,CAKnC,iDAAkD,CAHlD,+BAAgC,CAEhC,oEAgCD,CA7BC,kEACC,wGACD,CAEA,oCAOC,eAA4B,CAG5B,iEAAkE,CAClE,qCAAsC,CAPtC,0CAA2C,CAS3C,+BAAgC,CADhC,kCAAmC,CAVnC,iBAAkB,CADlB,eAAmB,CAKnB,+BAAgC,CAGhC,yIAA0I,CAN1I,iBAAkB,CAElB,KAAM,CAGN,0GAMD,CAGA,2HACC,gBACD,CAEA,yDAEC,mBACD,CAGD,gCACC,eACD,CAEA,iCACC,oBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-html-object-embed-unfocused-outline-width: 1px;
}

.ck-widget.html-object-embed {
	font-size: var(--ck-font-size-base);
	background-color: var(--ck-color-base-foreground);
	padding: var(--ck-spacing-small);
	/* Leave space for label */
	padding-top: calc(var(--ck-font-size-tiny) + var(--ck-spacing-large));
	min-width: calc(76px + var(--ck-spacing-standard));

	&:not(.ck-widget_selected):not(:hover) {
		outline: var(--ck-html-object-embed-unfocused-outline-width) dashed var(--ck-color-widget-blurred-border);
	}

	&::before {
		font-weight: normal;
		font-style: normal;
		position: absolute;
		content: attr(data-html-object-embed-label);
		top: 0;
		left: var(--ck-spacing-standard);
		background: hsl(0deg 0% 60%);
		transition: background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);
		padding: calc(var(--ck-spacing-tiny) + var(--ck-html-object-embed-unfocused-outline-width)) var(--ck-spacing-small) var(--ck-spacing-tiny);
		border-radius: 0 0 var(--ck-border-radius) var(--ck-border-radius);
		color: var(--ck-color-base-background);
		font-size: var(--ck-font-size-tiny);
		font-family: var(--ck-font-face);
	}

	/* Make space for label. */
	& .ck-widget__type-around .ck-widget__type-around__button.ck-widget__type-around__button_before {
		margin-left: 50px;
	}

	& .html-object-embed__content {
		/* Disable user interaction with embed content */
		pointer-events: none;
	}
}

div.ck-widget.html-object-embed {
	margin: 1em auto;
}

span.ck-widget.html-object-embed {
	display: inline-block;
}

`],sourceRoot:""}]);const D=_},9048:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image-inline.ck-widget_selected,.ck.ck-editor__editable .image.ck-widget_selected{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBAuBD,CAbC,uBAEC,aAAc,CAGd,aAAc,CAGd,cAAe,CAGf,cACD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAWA,2GACC,SAUD,CAHC,qEACC,YACD,CAOA,0FACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content {
	& .image {
		display: table;
		clear: both;
		text-align: center;

		/* Make sure there is some space between the content and the image. Center image by default. */
		/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	 	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
		margin: 0.9em auto;

		/* Make sure the caption will be displayed properly (See: https://github.com/ckeditor/ckeditor5/issues/1870). */
		min-width: 50px;

		& img {
			/* Prevent unnecessary margins caused by line-height (see #44). */
			display: block;

			/* Center the image if its width is smaller than the content's width. */
			margin: 0 auto;

			/* Make sure the image never exceeds the size of the parent container (ckeditor/ckeditor5-ui#67). */
			max-width: 100%;

			/* Make sure the image is never smaller than the parent container (See: https://github.com/ckeditor/ckeditor5/issues/9300). */
			min-width: 100%
		}
	}

	& .image-inline {
		/*
		 * Normally, the .image-inline would have "display: inline-block" and "img { width: 100% }" (to follow the wrapper while resizing).
		 * Unfortunately, together with "srcset", it gets automatically stretched up to the width of the editing root.
		 * This strange behavior does not happen with inline-flex.
		 */
		display: inline-flex;

		/* While being resized, don't allow the image to exceed the width of the editing root. */
		max-width: 100%;

		/* This is required by Safari to resize images in a sensible way. Without this, the browser breaks the ratio. */
		align-items: flex-start;

		/* When the picture is present it must act as a flex container to let the img resize properly */
		& picture {
			display: flex;
		}

		/* When the picture is present, it must act like a resizable img. */
		& picture,
		& img {
			/* This is necessary for the img to span the entire .image-inline wrapper and to resize properly. */
			flex-grow: 1;
			flex-shrink: 1;

			/* Prevents overflowing the editing root boundaries when an inline image is very wide. */
			max-width: 100%;
		}
	}
}

.ck.ck-editor__editable {
	/*
	 * Inhertit the content styles padding of the <figcaption> in case the integration overrides \`text-align: center\`
	 * of \`.image\` (e.g. to the left/right). This ensures the placeholder stays at the padding just like the native
	 * caret does, and not at the edge of <figcaption>.
	 */
	& .image > figcaption.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the image caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}


	/*
	 * Make sure the selected inline image always stays on top of its siblings.
	 * See https://github.com/ckeditor/ckeditor5/issues/9108.
	 */
	& .image.ck-widget_selected {
		z-index: 1;
	}

	& .image-inline.ck-widget_selected {
		z-index: 1;

		/*
		 * Make sure the native browser selection style is not displayed.
		 * Inline image widgets have their own styles for the selected state and
		 * leaving this up to the browser is asking for a visual collision.
		 */
		& ::selection {
			display: none;
		}
	}

	/* The inline image nested in the table should have its original size if not resized.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline img {
			max-width: none;
		}
	}
}
`],sourceRoot:""}]);const D=_},8662:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highligted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highligted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imagecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,mDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAMD,CAGA,qEACC,iDACD,CAEA,sCACC,GACC,oEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-caption-background: hsl(0, 0%, 97%);
	--ck-color-image-caption-text: hsl(0, 0%, 20%);
	--ck-color-image-caption-highligted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .image > figcaption {
	display: table-caption;
	caption-side: bottom;
	word-break: break-word;
	color: var(--ck-color-image-caption-text);
	background-color: var(--ck-color-image-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .image > figcaption.image__caption_highlighted {
	animation: ck-image-caption-highlight .6s ease-out;
}

@keyframes ck-image-caption-highlight {
	0% {
		background-color: var(--ck-color-image-caption-highligted-background);
	}

	100% {
		background-color: var(--ck-color-image-caption-background);
	}
}
`],sourceRoot:""}]);const D=_},9292:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck.ck-image-insert__panel{padding:var(--ck-spacing-large)}.ck.ck-image-insert__ck-finder-button{border:1px solid #ccc;border-radius:var(--ck-border-radius);display:block;margin:var(--ck-spacing-standard) auto;width:100%}.ck.ck-splitbutton>.ck-file-dialog-button.ck-button{border:none;margin:0;padding:0}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imageinsert.css"],names:[],mappings:"AAKA,2BACC,+BACD,CAEA,sCAIC,qBAAiC,CACjC,qCAAsC,CAJtC,aAAc,CAEd,sCAAuC,CADvC,UAID,CAGA,oDAGC,WAAY,CADZ,QAAS,CADT,SAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-image-insert__panel {
	padding: var(--ck-spacing-large);
}

.ck.ck-image-insert__ck-finder-button {
	display: block;
	width: 100%;
	margin: var(--ck-spacing-standard) auto;
	border: 1px solid hsl(0, 0%, 80%);
	border-radius: var(--ck-border-radius);
}

/* https://github.com/ckeditor/ckeditor5/issues/7986 */
.ck.ck-splitbutton > .ck-file-dialog-button.ck-button {
	padding: 0;
	margin: 0;
	border: none;
}
`],sourceRoot:""}]);const D=_},5150:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck.ck-image-insert-form:focus{outline:none}.ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-image-insert-form__action-row{margin-top:var(--ck-spacing-standard)}.ck.ck-form__row.ck-image-insert-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-image-insert-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row.ck-image-insert-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imageinsertformrowview.css"],names:[],mappings:"AAMC,+BAEC,YACD,CAGD,iBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAmBD,CAhBC,iCACC,WACD,CAEA,kDACC,qCAUD,CARC,sIAEC,sBACD,CAEA,+EACC,0BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-image-insert-form {
	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}
}

.ck.ck-form__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		flex-grow: 1;
	}

	&.ck-image-insert-form__action-row {
		margin-top: var(--ck-spacing-standard);

		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
		}

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}
`],sourceRoot:""}]);const D=_},1043:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck-content .image.image_resized{box-sizing:border-box;display:block;max-width:100%}.ck-content .image.image_resized img{width:100%}.ck-content .image.image_resized>figcaption{display:block}.ck.ck-editor__editable td .image-inline.image_resized img,.ck.ck-editor__editable th .image-inline.image_resized img{max-width:100%}[dir=ltr] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-left:var(--ck-spacing-standard)}.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label{width:4em}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imageresize.css"],names:[],mappings:"AAKA,iCAQC,qBAAsB,CADtB,aAAc,CANd,cAkBD,CATC,qCAEC,UACD,CAEA,4CAEC,aACD,CAQC,sHACC,cACD,CAIF,oFACC,uCACD,CAEA,oFACC,sCACD,CAEA,oEACC,SACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .image.image_resized {
	max-width: 100%;
	/*
	The \`<figure>\` element for resized images must not use \`display:table\` as browsers do not support \`max-width\` for it well.
	See https://stackoverflow.com/questions/4019604/chrome-safari-ignoring-max-width-in-table/14420691#14420691 for more.
	Fortunately, since we control the width, there is no risk that the image will look bad.
	*/
	display: block;
	box-sizing: border-box;

	& img {
		/* For resized images it is the \`<figure>\` element that determines the image width. */
		width: 100%;
	}

	& > figcaption {
		/* The \`<figure>\` element uses \`display:block\`, so \`<figcaption>\` also has to. */
		display: block;
	}
}

.ck.ck-editor__editable {
	/* The resized inline image nested in the table should respect its parent size.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline.image_resized img {
			max-width: 100%;
		}
	}
}

[dir="ltr"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-right: var(--ck-spacing-standard);
}

[dir="rtl"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-left: var(--ck-spacing-standard);
}

.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label {
	width: 4em;
}
`],sourceRoot:""}]);const D=_},4622:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-image-style-spacing: 1.5em;
	--ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
}

.ck-content {
	/* Provides a minimal side margin for the left and right aligned images, so that the user has a visual feedback
	confirming successful application of the style if image width exceeds the editor's size.
	See https://github.com/ckeditor/ckeditor5/issues/9342 */
	& .image-style-block-align-left,
	& .image-style-block-align-right {
		max-width: calc(100% - var(--ck-image-style-spacing));
	}

	/* Allows displaying multiple floating images in the same line.
	See https://github.com/ckeditor/ckeditor5/issues/9183#issuecomment-804988132 */
	& .image-style-align-left,
	& .image-style-align-right {
		clear: none;
	}

	& .image-style-side {
		float: right;
		margin-left: var(--ck-image-style-spacing);
		max-width: 50%;
	}

	& .image-style-align-left {
		float: left;
		margin-right: var(--ck-image-style-spacing);
	}

	& .image-style-align-center {
		margin-left: auto;
		margin-right: auto;
	}

	& .image-style-align-right {
		float: right;
		margin-left: var(--ck-image-style-spacing);
	}

	& .image-style-block-align-right {
		margin-right: 0;
		margin-left: auto;
	}

	& .image-style-block-align-left {
		margin-left: 0;
		margin-right: auto;
	}

	/* Simulates margin collapsing with the preceding paragraph, which does not work for the floating elements. */
	& p + .image-style-align-left,
	& p + .image-style-align-right,
	& p + .image-style-side {
		margin-top: 0;
	}

	& .image-inline {
		&.image-style-align-left,
		&.image-style-align-right {
			margin-top: var(--ck-inline-image-style-spacing);
			margin-bottom: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-left {
			margin-right: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-right {
			margin-left: var(--ck-inline-image-style-spacing);
		}
	}
}

.ck.ck-splitbutton {
	/* The button should display as a regular drop-down if the action button
	is forced to fire the same action as the arrow button. */
	&.ck-splitbutton_flatten {
		&:hover,
		&.ck-splitbutton_open {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-background);

				&::after {
					display: none;
				}
			}
		}

		&.ck-splitbutton_open:hover {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-hover-background);
			}
		}
	}
}
`],sourceRoot:""}]);const D=_},9899:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imageuploadicon.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFA0BD,CAtBC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-image-upload-complete-icon {
	display: block;
	position: absolute;

	/*
	 * Smaller images should have the icon closer to the border.
	 * Match the icon position with the linked image indicator brought by the link image feature.
	 */
	top: min(var(--ck-spacing-medium), 6%);
	right: min(var(--ck-spacing-medium), 6%);
	border-radius: 50%;
	z-index: 1;

	&::after {
		content: "";
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-upload-icon: hsl(0, 0%, 100%);
	--ck-color-image-upload-icon-background: hsl(120, 100%, 27%);

	/* Match the icon size with the linked image indicator brought by the link image feature. */
	--ck-image-upload-icon-size: 20;
	--ck-image-upload-icon-width: 2px;
	--ck-image-upload-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck-image-upload-complete-icon {
	opacity: 0;
	background: var(--ck-color-image-upload-icon-background);
	animation-name: ck-upload-complete-icon-show, ck-upload-complete-icon-hide;
	animation-fill-mode: forwards, forwards;
	animation-duration: 500ms, 500ms;

	/* To make animation scalable. */
	font-size: calc(1px * var(--ck-image-upload-icon-size));

	/* Hide completed upload icon after 3 seconds. */
	animation-delay: 0ms, 3000ms;

	/*
	 * Use CSS math to simulate container queries.
	 * https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
	 */
	overflow: hidden;
	width: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));
	height: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));

	/* This is check icon element made from border-width mixed with animations. */
	&::after {
		/* Because of border transformation we need to "hard code" left position. */
		left: 25%;

		top: 50%;
		opacity: 0;
		height: 0;
		width: 0;

		transform: scaleX(-1) rotate(135deg);
		transform-origin: left top;
		border-top: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);
		border-right: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);

		animation-name: ck-upload-complete-icon-check;
		animation-duration: 500ms;
		animation-delay: 500ms;
		animation-fill-mode: forwards;

		/* #1095. While reset is not providing proper box-sizing for pseudoelements, we need to handle it. */
		box-sizing: border-box;
	}
}

@keyframes ck-upload-complete-icon-show {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes ck-upload-complete-icon-hide {
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}

@keyframes ck-upload-complete-icon-check {
	0% {
		opacity: 1;
		width: 0;
		height: 0;
	}
	33% {
		width: 0.3em;
		height: 0;
	}
	100% {
		opacity: 1;
		width: 0.3em;
		height: 0.45em;
	}
}
`],sourceRoot:""}]);const D=_},9825:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imageuploadloader.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-upload-placeholder-loader {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;

	&::before {
		content: '';
		position: relative;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-upload-placeholder-loader: hsl(0, 0%, 70%);
	--ck-upload-placeholder-loader-size: 32px;
	--ck-upload-placeholder-image-aspect-ratio: 2.8;
}

.ck .ck-image-upload-placeholder {
	/* We need to control the full width of the SVG gray background. */
	width: 100%;
	margin: 0;

	&.image-inline {
		width: calc( 2 * var(--ck-upload-placeholder-loader-size) * var(--ck-upload-placeholder-image-aspect-ratio) );
	}

	& img {
		/*
		 * This is an arbitrary aspect for a 1x1 px GIF to display to the user. Not too tall, not too short.
		 * There's nothing special about this number except that it should make the image placeholder look like
		 * a real image during this short period after the upload started and before the image was read from the
		 * file system (and a rich preview was loaded).
		 */
		aspect-ratio: var(--ck-upload-placeholder-image-aspect-ratio);
	}
}

.ck .ck-upload-placeholder-loader {
	width: 100%;
	height: 100%;

	&::before {
		width: var(--ck-upload-placeholder-loader-size);
		height: var(--ck-upload-placeholder-loader-size);
		border-radius: 50%;
		border-top: 3px solid var(--ck-color-upload-placeholder-loader);
		border-right: 2px solid transparent;
		animation: ck-upload-placeholder-loader 1s linear infinite;
	}
}

@keyframes ck-upload-placeholder-loader {
	to {
		transform: rotate( 360deg );
	}
}
`],sourceRoot:""}]);const D=_},5870:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imageuploadprogress.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBACD,CAID,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		position: relative;
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		position: absolute;
		top: 0;
		left: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		/* Showing animation. */
		&.ck-appear {
			animation: fadeIn 700ms;
		}
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		height: 2px;
		width: 0;
		background: var(--ck-color-upload-bar-background);
		transition: width 100ms;
	}
}

@keyframes fadeIn {
	from { opacity: 0; }
	to   { opacity: 1; }
}
`],sourceRoot:""}]);const D=_},6831:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/textalternativeform.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-text-alternative-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=_},4704:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck-content span[lang]{font-style:italic}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-language/theme/language.css"],names:[],mappings:"AAKA,uBACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content span[lang] {
	font-style: italic;
}
`],sourceRoot:""}]);const D=_},399:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Class added to span element surrounding currently selected link. */
.ck .ck-link_selected {
	background: var(--ck-color-link-selected-background);

	/* Give linked inline images some outline to let the user know they are also part of the link. */
	& span.image-inline {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background);
	}
}

/*
 * Classes used by the "fake visual selection" displayed in the content when an input
 * in the link UI has focus (the browser does not render the native selection in this state).
 */
.ck .ck-fake-link-selection {
	background: var(--ck-color-link-fake-selection);
}

/* A collapsed fake visual selection. */
.ck .ck-fake-link-selection_collapsed {
	height: 100%;
	border-right: 1px solid var(--ck-color-base-text);
	margin-right: -1px;
	outline: solid 1px hsla(0, 0%, 100%, .5);
}
`],sourceRoot:""}]);const D=_},9465:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-link/theme/linkactions.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCIA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDtDD,oCC0DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CDzED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-link-actions__preview {
		display: inline-block;

		& .ck-button__label {
			overflow: hidden;
		}
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-link-actions__preview {
			flex-basis: 100%;
		}

		& .ck-button:not(.ck-link-actions__preview) {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	& .ck-button.ck-link-actions__preview {
		padding-left: 0;
		padding-right: 0;

		& .ck-button__label {
			padding: 0 var(--ck-spacing-medium);
			color: var(--ck-color-link-default);
			text-overflow: ellipsis;
			cursor: pointer;

			/* Match the box model of the link editor form's input so the balloon
			does not change width when moving between actions and the form. */
			max-width: var(--ck-input-width);
			min-width: 3em;
			text-align: center;

			&:hover {
				text-decoration: underline;
			}
		}

		&,
		&:hover,
		&:focus,
		&:active {
			background: none;
		}

		&:active {
			box-shadow: none;
		}

		&:focus {
			& .ck-button__label {
				text-decoration: underline;
			}
		}
	}

	@mixin ck-dir ltr {
		& .ck-button:not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-button:not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		& .ck-button.ck-link-actions__preview {
			margin: var(--ck-spacing-standard) var(--ck-spacing-standard) 0;

			& .ck-button__label {
				min-width: 0;
				max-width: 100%;
			}
		}

		& .ck-button:not(.ck-link-actions__preview) {
			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;
			}
		}
	}
}
`],sourceRoot:""}]);const D=_},4827:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical>.ck-button{border-radius:0;margin:0;padding:var(--ck-spacing-standard);width:50%}.ck.ck-link-form_layout-vertical>.ck-button:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form_layout-vertical>.ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-link/theme/linkform.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBACC,YAiBD,CAfC,2BACC,YACD,CCNA,oCDCD,iBAQE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CCfD,CDuBD,iCACC,aAYD,CALE,wHAEC,mCACD,CE/BF,iCAEC,+BAAgC,CADhC,SAgDD,CA7CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,eAAgB,CAFhB,QAAS,CADT,kCAAmC,CAEnC,SAkBD,CAfC,wDACC,gDACD,CARD,4GAeE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAUD,CARC,wEACC,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-form {
	display: flex;

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	display: block;

	/*
	 * Whether the form is in the responsive mode or not, if there are decorator buttons
	 * keep the top margin of action buttons medium.
	 */
	& .ck-button {
		&.ck-button-save,
		&.ck-button-cancel {
			margin-top: var(--ck-spacing-medium);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	padding: 0;
	min-width: var(--ck-input-width);

	& .ck-labeled-field-view {
		margin: var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small);

		& .ck-input-text {
			min-width: 0;
			width: 100%;
		}
	}

	& > .ck-button {
		padding: var(--ck-spacing-standard);
		margin: 0;
		width: 50%;
		border-radius: 0;

		&:not(:focus) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		@mixin ck-dir ltr {
			margin-left: 0;
		}

		@mixin ck-dir rtl {
			margin-left: 0;

			&:last-of-type {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}

	/* Using additional \`.ck\` class for stronger CSS specificity than \`.ck.ck-link-form > :not(:first-child)\`. */
	& .ck.ck-list {
		margin: var(--ck-spacing-standard) var(--ck-spacing-large);

		& .ck-button.ck-switchbutton {
			padding: 0;
			width: 100%;

			&:hover {
				background: none;
			}
		}
	}
}
`],sourceRoot:""}]);const D=_},3858:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,'.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{display:block;position:absolute}:root{--ck-link-image-indicator-icon-size:20;--ck-link-image-indicator-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{background-color:rgba(0,0,0,.4);background-image:url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");background-position:50%;background-repeat:no-repeat;background-size:14px;border-radius:100%;content:"";height:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size));overflow:hidden;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);width:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size))}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-link/theme/linkimage.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-link/linkimage.css"],names:[],mappings:"AASE,+FACC,aAAc,CACd,iBACD,CCPF,MAEC,sCAAuC,CACvC,oEACD,CAME,+FAUC,+BAAqC,CACrC,83BAA+3B,CAG/3B,uBAA2B,CAD3B,2BAA4B,CAD5B,oBAAqB,CAGrB,kBAAmB,CAdnB,UAAW,CAsBX,oGAAuG,CAFvG,eAAgB,CAbhB,sCAAwC,CADxC,oCAAsC,CAetC,mGAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			display: block;
			position: absolute;
		}
	}
}

`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Match the icon size with the upload indicator brought by the image upload feature. */
	--ck-link-image-indicator-icon-size: 20;
	--ck-link-image-indicator-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			content: "";

			/*
			 * Smaller images should have the icon closer to the border.
			 * Match the icon position with the upload indicator brought by the image upload feature.
			 */
			top: min(var(--ck-spacing-medium), 6%);
			right: min(var(--ck-spacing-medium), 6%);

			background-color: hsla(0, 0%, 0%, .4);
			background-image: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");
			background-size: 14px;
			background-repeat: no-repeat;
			background-position: center;
			border-radius: 100%;

			/*
			* Use CSS math to simulate container queries.
			* https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
			*/
			overflow: hidden;
			width: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
			height: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
		}
	}
}

`],sourceRoot:""}]);const D=_},3195:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck.ck-collapsible.ck-collapsible_collapsed>.ck-collapsible__children{display:none}:root{--ck-collapsible-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-collapsible>.ck.ck-button{border-radius:0;color:inherit;font-weight:700;padding:var(--ck-spacing-medium) var(--ck-spacing-large);width:100%}.ck.ck-collapsible>.ck.ck-button:focus{background:transparent}.ck.ck-collapsible>.ck.ck-button:active,.ck.ck-collapsible>.ck.ck-button:hover:not(:focus),.ck.ck-collapsible>.ck.ck-button:not(:focus){background:transparent;border-color:transparent;box-shadow:none}.ck.ck-collapsible>.ck.ck-button>.ck-icon{margin-right:var(--ck-spacing-medium);width:var(--ck-collapsible-arrow-size)}.ck.ck-collapsible>.ck-collapsible__children{padding:0 var(--ck-spacing-large) var(--ck-spacing-large)}.ck.ck-collapsible.ck-collapsible_collapsed>.ck.ck-button .ck-icon{transform:rotate(-90deg)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-list/theme/collapsible.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-list/collapsible.css"],names:[],mappings:"AAMC,sEACC,YACD,CCHD,MACC,yDACD,CAGC,iCAIC,eAAgB,CAChB,aAAc,CAHd,eAAiB,CACjB,wDAAyD,CAFzD,UAoBD,CAdC,uCACC,sBACD,CAEA,wIACC,sBAAuB,CACvB,wBAAyB,CACzB,eACD,CAEA,0CACC,qCAAsC,CACtC,sCACD,CAGD,6CACC,yDACD,CAGC,mEACC,wBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-collapsible.ck-collapsible_collapsed {
	& > .ck-collapsible__children {
		display: none;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-collapsible-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-collapsible {
	& > .ck.ck-button {
		width: 100%;
		font-weight: bold;
		padding: var(--ck-spacing-medium) var(--ck-spacing-large);
		border-radius: 0;
		color: inherit;

		&:focus {
			background: transparent;
		}

		&:active, &:not(:focus), &:hover:not(:focus) {
			background: transparent;
			border-color: transparent;
			box-shadow: none;
		}

		& > .ck-icon {
			margin-right: var(--ck-spacing-medium);
			width: var(--ck-collapsible-arrow-size);
		}
	}

	& > .ck-collapsible__children {
		padding: 0 var(--ck-spacing-large) var(--ck-spacing-large);
	}

	&.ck-collapsible_collapsed {
		& > .ck.ck-button .ck-icon {
			transform: rotate(-90deg);
		}
	}
}
`],sourceRoot:""}]);const D=_},9989:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck-content ol{list-style-type:decimal}.ck-content ol ol{list-style-type:lower-latin}.ck-content ol ol ol{list-style-type:lower-roman}.ck-content ol ol ol ol{list-style-type:upper-latin}.ck-content ol ol ol ol ol{list-style-type:upper-roman}.ck-content ul{list-style-type:disc}.ck-content ul ul{list-style-type:circle}.ck-content ul ul ul,.ck-content ul ul ul ul{list-style-type:square}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-list/theme/list.css"],names:[],mappings:"AAKA,eACC,uBAiBD,CAfC,kBACC,2BAaD,CAXC,qBACC,2BASD,CAPC,wBACC,2BAKD,CAHC,2BACC,2BACD,CAMJ,eACC,oBAaD,CAXC,kBACC,sBASD,CAJE,6CACC,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content ol {
	list-style-type: decimal;

	& ol {
		list-style-type: lower-latin;

		& ol {
			list-style-type: lower-roman;

			& ol {
				list-style-type: upper-latin;

				& ol {
					list-style-type: upper-roman;
				}
			}
		}
	}
}

.ck-content ul {
	list-style-type: disc;

	& ul {
		list-style-type: circle;

		& ul {
			list-style-type: square;

			& ul {
				list-style-type: square;
			}
		}
	}
}
`],sourceRoot:""}]);const D=_},7133:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck.ck-list-properties.ck-list-properties_without-styles{padding:var(--ck-spacing-large)}.ck.ck-list-properties.ck-list-properties_without-styles>*{min-width:14em}.ck.ck-list-properties.ck-list-properties_without-styles>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-list-styles-list{grid-template-columns:repeat(4,auto)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible{border-top:1px solid var(--ck-color-base-border)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*{width:100%}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties .ck.ck-numbered-list-properties__start-index .ck-input{min-width:auto;width:100%}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order{background:transparent;margin-bottom:calc(var(--ck-spacing-tiny)*-1);padding-left:0;padding-right:0}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:active,.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:hover{background:none;border-color:transparent;box-shadow:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-list/listproperties.css"],names:[],mappings:"AAOC,yDACC,+BASD,CAPC,2DACC,cAKD,CAHC,6DACC,qCACD,CASD,wFACC,oCACD,CAGA,mFACC,gDAWD,CARE,+GACC,UAKD,CAHC,iHACC,qCACD,CAMJ,8EACC,cAAe,CACf,UACD,CAEA,uEACC,sBAAuB,CAGvB,6CAAgD,CAFhD,cAAe,CACf,eAQD,CALC,2JAGC,eAAgB,CADhB,wBAAyB,CADzB,eAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-properties {
	/* When there are no list styles and there is no collapsible. */
	&.ck-list-properties_without-styles {
		padding: var(--ck-spacing-large);

		& > * {
			min-width: 14em;

			& + * {
				margin-top: var(--ck-spacing-standard);
			}
		}
	}

	/*
	 * When the numbered list property fields (start at, reversed) should be displayed,
	 * more horizontal space is needed. Reconfigure the style grid to create that space.
	 */
	&.ck-list-properties_with-numbered-properties {
		& > .ck-list-styles-list {
			grid-template-columns: repeat( 4, auto );
		}

		/* When list styles are rendered and property fields are in a collapsible. */
		& > .ck-collapsible {
			border-top: 1px solid var(--ck-color-base-border);

			& > .ck-collapsible__children {
				& > * {
					width: 100%;

					& + * {
						margin-top: var(--ck-spacing-standard);
					}
				}
			}
		}
	}

	& .ck.ck-numbered-list-properties__start-index .ck-input {
		min-width: auto;
		width: 100%;
	}

	& .ck.ck-numbered-list-properties__reversed-order {
		background: transparent;
		padding-left: 0;
		padding-right: 0;
		margin-bottom: calc(-1 * var(--ck-spacing-tiny));

		&:active, &:hover {
			box-shadow: none;
			border-color: transparent;
			background: none;
		}
	}
}
`],sourceRoot:""}]);const D=_},4553:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck.ck-list-styles-list{display:grid}:root{--ck-list-style-button-size:44px}.ck.ck-list-styles-list{column-gap:var(--ck-spacing-medium);grid-template-columns:repeat(3,auto);padding:var(--ck-spacing-large);row-gap:var(--ck-spacing-medium)}.ck.ck-list-styles-list .ck-button{box-sizing:content-box;margin:0;padding:0}.ck.ck-list-styles-list .ck-button,.ck.ck-list-styles-list .ck-button .ck-icon{height:var(--ck-list-style-button-size);width:var(--ck-list-style-button-size)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-list/theme/liststyles.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-list/liststyles.css"],names:[],mappings:"AAKA,wBACC,YACD,CCFA,MACC,gCACD,CAEA,wBAGC,mCAAoC,CAFpC,oCAAwC,CAGxC,+BAAgC,CAFhC,gCA4BD,CAxBC,mCAiBC,sBAAuB,CAPvB,QAAS,CANT,SAmBD,CAJC,+EAhBA,uCAAwC,CADxC,sCAoBA",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-styles-list {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-list-style-button-size: 44px;
}

.ck.ck-list-styles-list {
	grid-template-columns: repeat( 3, auto );
	row-gap: var(--ck-spacing-medium);
	column-gap: var(--ck-spacing-medium);
	padding: var(--ck-spacing-large);

	& .ck-button {
		/* Make the button look like a thumbnail (the icon "takes it all"). */
		width: var(--ck-list-style-button-size);
		height: var(--ck-list-style-button-size);
		padding: 0;

		/*
		 * Buttons are aligned by the grid so disable default button margins to not collide with the
		 * gaps in the grid.
		 */
		margin: 0;

		/*
		 * Make sure the button border (which is displayed on focus, BTW) does not steal pixels
		 * from the button dimensions and, as a result, decrease the size of the icon
		 * (which becomes blurry as it scales down).
		 */
		box-sizing: content-box;

		& .ck-icon {
			width: var(--ck-list-style-button-size);
			height: var(--ck-list-style-button-size);
		}
	}
}
`],sourceRoot:""}]);const D=_},1588:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,':root{--ck-todo-list-checkmark-size:16px}.ck-content .todo-list{list-style:none}.ck-content .todo-list li{margin-bottom:5px}.ck-content .todo-list li .todo-list{margin-top:5px}.ck-content .todo-list .todo-list__label>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-content .todo-list .todo-list__label>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out,background .25s ease-in-out,border .25s ease-in-out;width:100%}.ck-content .todo-list .todo-list__label>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-content .todo-list .todo-list__label>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-content .todo-list .todo-list__label>input[checked]:after{border-color:#fff}.ck-content .todo-list .todo-list__label .todo-list__label__description{vertical-align:middle}[dir=rtl] .todo-list .todo-list__label>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-editor__editable .todo-list .todo-list__label>input{cursor:pointer}.ck-editor__editable .todo-list .todo-list__label>input:hover:before{box-shadow:0 0 0 5px rgba(0,0,0,.1)}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-list/theme/todolist.css"],names:[],mappings:"AAKA,MACC,kCACD,CAEA,uBACC,eA0ED,CAxEC,0BACC,iBAKD,CAHC,qCACC,cACD,CAIA,+CACC,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAqDD,CAxCC,sDAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,0FAAgG,CAJhG,UAKD,CAEA,qDAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+DACC,kBAA8B,CAC9B,oBACD,CAEA,8DACC,iBACD,CAIF,wEACC,qBACD,CAKF,6CACC,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAED,CAMA,wDACC,cAKD,CAHC,qEACC,mCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-todo-list-checkmark-size: 16px;
}

.ck-content .todo-list {
	list-style: none;

	& li {
		margin-bottom: 5px;

		& .todo-list {
			margin-top: 5px;
		}
	}

	& .todo-list__label {
		& > input {
			-webkit-appearance: none;
			display: inline-block;
			position: relative;
			width: var(--ck-todo-list-checkmark-size);
			height: var(--ck-todo-list-checkmark-size);
			vertical-align: middle;

			/* Needed on iOS */
			border: 0;

			/* LTR styles */
			left: -25px;
			margin-right: -15px;
			right: 0;
			margin-left: 0;

			&::before {
				display: block;
				position: absolute;
				box-sizing: border-box;
				content: '';
				width: 100%;
				height: 100%;
				border: 1px solid hsl(0, 0%, 20%);
				border-radius: 2px;
				transition: 250ms ease-in-out box-shadow, 250ms ease-in-out background, 250ms ease-in-out border;
			}

			&::after {
				display: block;
				position: absolute;
				box-sizing: content-box;
				pointer-events: none;
				content: '';

				/* Calculate tick position, size and border-width proportional to the checkmark size. */
				left: calc( var(--ck-todo-list-checkmark-size) / 3 );
				top: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
				width: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
				height: calc( var(--ck-todo-list-checkmark-size) / 2.6 );
				border-style: solid;
				border-color: transparent;
				border-width: 0 calc( var(--ck-todo-list-checkmark-size) / 8 ) calc( var(--ck-todo-list-checkmark-size) / 8 ) 0;
				transform: rotate(45deg);
			}

			&[checked] {
				&::before {
					background: hsl(126, 64%, 41%);
					border-color: hsl(126, 64%, 41%);
				}

				&::after {
					border-color: hsl(0, 0%, 100%);
				}
			}
		}

		& .todo-list__label__description {
			vertical-align: middle;
		}
	}
}

/* RTL styles */
[dir="rtl"] .todo-list .todo-list__label > input {
	left: 0;
	margin-right: 0;
	right: -25px;
	margin-left: -15px;
}

/*
 * To-do list should be interactive only during the editing
 * (https://github.com/ckeditor/ckeditor5/issues/2090).
 */
.ck-editor__editable .todo-list .todo-list__label > input {
	cursor: pointer;

	&:hover::before {
		box-shadow: 0 0 0 5px hsla(0, 0%, 0%, 0.1);
	}
}
`],sourceRoot:""}]);const D=_},5777:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .media {
	/* Don't allow floated content overlap the media.
	https://github.com/ckeditor/ckeditor5-media-embed/issues/53 */
	clear: both;

	/* Make sure there is some space between the content and the media. */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em 0;

	/* Make sure media is not overriden with Bootstrap default \`flex\` value.
	See: https://github.com/ckeditor/ckeditor5/issues/1373. */
	display: block;

	/* Give the media some minimal width in the content to prevent them
	from being "squashed" in tight spaces, e.g. in table cells (#44) */
	min-width: 15em;
}
`],sourceRoot:""}]);const D=_},952:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Im0yMDYuNDc3IDI2MC45LTI4Ljk4NyAyOC45ODdhNS4yMTggNS4yMTggMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiIGZpbGw9IiM1Yzg4YzUiLz48cGF0aCBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwNy4zMzMuNTAyLjY1IDEuMDA1Ljk1IDEuNTA4LjM0My40NzcuNjczLjk1Ny45ODggMS40NCAxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5LjMxNS0uNDgyLjY0NS0uOTYyLjk4OC0xLjQzOS4zLS41MDMuNjE3LTEuMDA2Ljk1LTEuNTA4LjM1OS0uNy43Ni0xLjQwNCAxLjE5LTIuMTA3IDEuNDI2LTIuNDAyIDItNS4xMTQgMi4wMDQtNy44NzUgMC04Ljg0NC03LjUxMS0xNi4wMTQtMTYuNzc2LTE2LjAxNHoiIGZpbGw9IiNkZDRiM2UiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PGVsbGlwc2Ugcnk9IjUuNTY0IiByeD0iNS44MjgiIGN5PSIyMzkuMDAyIiBjeD0iMjI2Ljc0MiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMTkwLjMwMSAyMzcuMjgzYy00LjY3IDAtOC40NTcgMy44NTMtOC40NTcgOC42MDZzMy43ODYgOC42MDcgOC40NTcgOC42MDdjMy4wNDMgMCA0LjgwNi0uOTU4IDYuMzM3LTIuNTE2IDEuNTMtMS41NTcgMi4wODctMy45MTMgMi4wODctNi4yOSAwLS4zNjItLjAyMy0uNzIyLS4wNjQtMS4wNzloLTguMjU3djMuMDQzaDQuODVjLS4xOTcuNzU5LS41MzEgMS40NS0xLjA1OCAxLjk4Ni0uOTQyLjk1OC0yLjAyOCAxLjU0OC0zLjkwMSAxLjU0OC0yLjg3NiAwLTUuMjA4LTIuMzcyLTUuMjA4LTUuMjk5IDAtMi45MjYgMi4zMzItNS4yOTkgNS4yMDgtNS4yOTkgMS4zOTkgMCAyLjYxOC40MDcgMy41ODQgMS4yOTNsMi4zODEtMi4zOGMwLS4wMDItLjAwMy0uMDA0LS4wMDQtLjAwNS0xLjU4OC0xLjUyNC0zLjYyLTIuMjE1LTUuOTU1LTIuMjE1em00LjQzIDUuNjYuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0ibTIxNS4xODQgMjUxLjkyOS03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVhNS4yMzMgNS4yMzMgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjlsLS4wMDItLjAwM3oiIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJtMjEyLjk4MyAyNDguNDk1LTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOCA1LjIzOGgxLjAxNWwzNS42NjYtMzUuNjY2YTEzNi4yNzUgMTM2LjI3NSAwIDAgMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAgMC0uOTg5LTEuNDQgMzUuMTI3IDM1LjEyNyAwIDAgMC0uOTUtMS41MDhjLS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OVptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OVoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzNabTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1Wk00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAMC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAcD,CAXC,sEAEC,cAAe,CAEf,iBAMD,CAJC,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CC1CA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,wvGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,4jHACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,wiCACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-media__wrapper {
	& .ck-media__placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;

		& .ck-media__placeholder__url {
			/* Otherwise the URL will overflow when the content is very narrow. */
			max-width: 100%;

			position: relative;

			& .ck-media__placeholder__url__text {
				overflow: hidden;
				display: block;
			}
		}
	}

	&[data-oembed-url*="twitter.com"],
	&[data-oembed-url*="google.com/maps"],
	&[data-oembed-url*="goo.gl/maps"],
	&[data-oembed-url*="maps.google.com"],
	&[data-oembed-url*="maps.app.goo.gl"],
	&[data-oembed-url*="facebook.com"],
	&[data-oembed-url*="instagram.com"] {
		& .ck-media__placeholder__icon * {
			display: none;
		}
	}
}

/* Disable all mouse interaction as long as the editor is not read–only.
   https://github.com/ckeditor/ckeditor5-media-embed/issues/58 */
.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper > *:not(.ck-media__placeholder) {
	pointer-events: none;
}

/* Disable all mouse interaction when the widget is not selected (e.g. to avoid opening links by accident).
   https://github.com/ckeditor/ckeditor5-media-embed/issues/18 */
.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder {
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-media-embed-placeholder-icon-size: 3em;

	--ck-color-media-embed-placeholder-url-text: hsl(0, 0%, 46%);
	--ck-color-media-embed-placeholder-url-text-hover: var(--ck-color-base-text);
}

.ck-media__wrapper {
	margin: 0 auto;

	& .ck-media__placeholder {
		padding: calc( 3 * var(--ck-spacing-standard) );
		background: var(--ck-color-base-foreground);

		& .ck-media__placeholder__icon {
			min-width: var(--ck-media-embed-placeholder-icon-size);
			height: var(--ck-media-embed-placeholder-icon-size);
			margin-bottom: var(--ck-spacing-large);
			background-position: center;
			background-size: cover;

			& .ck-icon {
				width: 100%;
				height: 100%;
			}
		}

		& .ck-media__placeholder__url__text {
			color: var(--ck-color-media-embed-placeholder-url-text);
			white-space: nowrap;
			text-align: center;
			font-style: italic;
			text-overflow: ellipsis;

			&:hover {
				color: var(--ck-color-media-embed-placeholder-url-text-hover);
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}

	&[data-oembed-url*="open.spotify.com"] {
		max-width: 300px;
		max-height: 380px;
	}

	&[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVjLjI4Ny0uNjQ5LjQ0OS0xLjM2Ni40NDktMi4xMjN2LTMxLjE2NWMtLjQ2OS42NzUtLjkzNCAxLjM0OS0xLjM4MiAyLjAwNS0uNzkyIDEuMjc1LTEuNjgyIDIuNjQtMi40NjUgMy45OS0yLjM0NyA0LjA2NS0zLjk4MiA4LjAzOC00LjU4NSAxMy43OTQtLjE2Mi40ODUtLjUyNy43OTgtLjkzLjc5OS0uMzYzLS4wMDEtLjY5Ny0uMjU1LS44NzktLjY2N3YtLjAxMmMtLjU5My01LjgyMi0yLjIzNy05LjgyLTQuNi0xMy45MTQtLjc4My0xLjM1LTEuNjczLTIuNzE1LTIuNDY2LTMuOTktMS4xMzctMS42NjYtMi4zMjctMy40LTMuNjM3LTUuMTY5bC0uMDAyLS4wMDN6IiBmaWxsPSIjYzNjM2MzIi8+PHBhdGggZD0iTTIxMi45ODMgMjQ4LjQ5NWwtMzYuOTUyIDM2Ljk1M3YuODEyYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM4IDUuMjM4aDEuMDE1bDM1LjY2Ni0zNS42NjZhMTM2LjI3NSAxMzYuMjc1IDAgMCAwLTIuNzY0LTMuOSAzNy41NzUgMzcuNTc1IDAgMCAwLS45ODktMS40NGMtLjI5OS0uNTAzLS42MTYtMS4wMDYtLjk1LTEuNTA4LS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjExLjk5OCAyNjEuMDgzbC02LjE1MiA2LjE1MSAyNC4yNjQgMjQuMjY0aC43ODFhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzktNS4yMzh2LTEuMDQ1eiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48L2c+PC9zdmc+);
	}

	&[data-oembed-url*="facebook.com"] .ck-media__placeholder {
		background: hsl(220, 46%, 48%);

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImZMb2dvX1doaXRlIiBmaWxsPSIjRkZGRkZFIj4gICAgICAgICAgICA8cGF0aCBkPSJNOTY3LjQ4NCwwIEw1Ni41MTcsMCBDMjUuMzA0LDAgMCwyNS4zMDQgMCw1Ni41MTcgTDAsOTY3LjQ4MyBDMCw5OTguNjk0IDI1LjI5NywxMDI0IDU2LjUyMiwxMDI0IEw1NDcsMTAyNCBMNTQ3LDYyOCBMNDE0LDYyOCBMNDE0LDQ3MyBMNTQ3LDQ3MyBMNTQ3LDM1OS4wMjkgQzU0NywyMjYuNzY3IDYyNy43NzMsMTU0Ljc0NyA3NDUuNzU2LDE1NC43NDcgQzgwMi4yNjksMTU0Ljc0NyA4NTAuODQyLDE1OC45NTUgODY1LDE2MC44MzYgTDg2NSwyOTkgTDc4My4zODQsMjk5LjAzNyBDNzE5LjM5MSwyOTkuMDM3IDcwNywzMjkuNTI5IDcwNywzNzQuMjczIEw3MDcsNDczIEw4NjAuNDg3LDQ3MyBMODQwLjUwMSw2MjggTDcwNyw2MjggTDcwNywxMDI0IEw5NjcuNDg0LDEwMjQgQzk5OC42OTcsMTAyNCAxMDI0LDk5OC42OTcgMTAyNCw5NjcuNDg0IEwxMDI0LDU2LjUxNSBDMTAyNCwyNS4zMDMgOTk4LjY5NywwIDk2Ny40ODQsMCIgaWQ9IkZpbGwtMSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(220, 100%, 90%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="instagram.com"] .ck-media__placeholder {
		background: linear-gradient(-135deg,hsl(246, 100%, 39%),hsl(302, 100%, 36%),hsl(0, 100%, 48%));

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MDRweCIgaGVpZ2h0PSI1MDRweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+Z2x5cGgtbG9nb19NYXkyMDE2PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAuMTU5IDUwMy44NDEgMC4xNTkgNTAzLjg0MSA1MDMuOTQgMCA1MDMuOTQiPjwvcG9seWdvbj4gICAgPC9kZWZzPiAgICA8ZyBpZD0iZ2x5cGgtbG9nb19NYXkyMDE2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJHcm91cC0zIj4gICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgPC9tYXNrPiAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4gICAgICAgICAgICA8cGF0aCBkPSJNMjUxLjkyMSwwLjE1OSBDMTgzLjUwMywwLjE1OSAxNzQuOTI0LDAuNDQ5IDE0OC4wNTQsMS42NzUgQzEyMS4yNCwyLjg5OCAxMDIuOTI3LDcuMTU3IDg2LjkwMywxMy4zODUgQzcwLjMzNywxOS44MjIgNTYuMjg4LDI4LjQzNiA0Mi4yODIsNDIuNDQxIEMyOC4yNzcsNTYuNDQ3IDE5LjY2Myw3MC40OTYgMTMuMjI2LDg3LjA2MiBDNi45OTgsMTAzLjA4NiAyLjczOSwxMjEuMzk5IDEuNTE2LDE0OC4yMTMgQzAuMjksMTc1LjA4MyAwLDE4My42NjIgMCwyNTIuMDggQzAsMzIwLjQ5NyAwLjI5LDMyOS4wNzYgMS41MTYsMzU1Ljk0NiBDMi43MzksMzgyLjc2IDYuOTk4LDQwMS4wNzMgMTMuMjI2LDQxNy4wOTcgQzE5LjY2Myw0MzMuNjYzIDI4LjI3Nyw0NDcuNzEyIDQyLjI4Miw0NjEuNzE4IEM1Ni4yODgsNDc1LjcyMyA3MC4zMzcsNDg0LjMzNyA4Ni45MDMsNDkwLjc3NSBDMTAyLjkyNyw0OTcuMDAyIDEyMS4yNCw1MDEuMjYxIDE0OC4wNTQsNTAyLjQ4NCBDMTc0LjkyNCw1MDMuNzEgMTgzLjUwMyw1MDQgMjUxLjkyMSw1MDQgQzMyMC4zMzgsNTA0IDMyOC45MTcsNTAzLjcxIDM1NS43ODcsNTAyLjQ4NCBDMzgyLjYwMSw1MDEuMjYxIDQwMC45MTQsNDk3LjAwMiA0MTYuOTM4LDQ5MC43NzUgQzQzMy41MDQsNDg0LjMzNyA0NDcuNTUzLDQ3NS43MjMgNDYxLjU1OSw0NjEuNzE4IEM0NzUuNTY0LDQ0Ny43MTIgNDg0LjE3OCw0MzMuNjYzIDQ5MC42MTYsNDE3LjA5NyBDNDk2Ljg0Myw0MDEuMDczIDUwMS4xMDIsMzgyLjc2IDUwMi4zMjUsMzU1Ljk0NiBDNTAzLjU1MSwzMjkuMDc2IDUwMy44NDEsMzIwLjQ5NyA1MDMuODQxLDI1Mi4wOCBDNTAzLjg0MSwxODMuNjYyIDUwMy41NTEsMTc1LjA4MyA1MDIuMzI1LDE0OC4yMTMgQzUwMS4xMDIsMTIxLjM5OSA0OTYuODQzLDEwMy4wODYgNDkwLjYxNiw4Ny4wNjIgQzQ4NC4xNzgsNzAuNDk2IDQ3NS41NjQsNTYuNDQ3IDQ2MS41NTksNDIuNDQxIEM0NDcuNTUzLDI4LjQzNiA0MzMuNTA0LDE5LjgyMiA0MTYuOTM4LDEzLjM4NSBDNDAwLjkxNCw3LjE1NyAzODIuNjAxLDIuODk4IDM1NS43ODcsMS42NzUgQzMyOC45MTcsMC40NDkgMzIwLjMzOCwwLjE1OSAyNTEuOTIxLDAuMTU5IFogTTI1MS45MjEsNDUuNTUgQzMxOS4xODYsNDUuNTUgMzI3LjE1NCw0NS44MDcgMzUzLjcxOCw0Ny4wMTkgQzM3OC4yOCw0OC4xMzkgMzkxLjYxOSw1Mi4yNDMgNDAwLjQ5Niw1NS42OTMgQzQxMi4yNTUsNjAuMjYzIDQyMC42NDcsNjUuNzIyIDQyOS40NjIsNzQuNTM4IEM0MzguMjc4LDgzLjM1MyA0NDMuNzM3LDkxLjc0NSA0NDguMzA3LDEwMy41MDQgQzQ1MS43NTcsMTEyLjM4MSA0NTUuODYxLDEyNS43MiA0NTYuOTgxLDE1MC4yODIgQzQ1OC4xOTMsMTc2Ljg0NiA0NTguNDUsMTg0LjgxNCA0NTguNDUsMjUyLjA4IEM0NTguNDUsMzE5LjM0NSA0NTguMTkzLDMyNy4zMTMgNDU2Ljk4MSwzNTMuODc3IEM0NTUuODYxLDM3OC40MzkgNDUxLjc1NywzOTEuNzc4IDQ0OC4zMDcsNDAwLjY1NSBDNDQzLjczNyw0MTIuNDE0IDQzOC4yNzgsNDIwLjgwNiA0MjkuNDYyLDQyOS42MjEgQzQyMC42NDcsNDM4LjQzNyA0MTIuMjU1LDQ0My44OTYgNDAwLjQ5Niw0NDguNDY2IEMzOTEuNjE5LDQ1MS45MTYgMzc4LjI4LDQ1Ni4wMiAzNTMuNzE4LDQ1Ny4xNCBDMzI3LjE1OCw0NTguMzUyIDMxOS4xOTEsNDU4LjYwOSAyNTEuOTIxLDQ1OC42MDkgQzE4NC42NSw0NTguNjA5IDE3Ni42ODQsNDU4LjM1MiAxNTAuMTIzLDQ1Ny4xNCBDMTI1LjU2MSw0NTYuMDIgMTEyLjIyMiw0NTEuOTE2IDEwMy4zNDUsNDQ4LjQ2NiBDOTEuNTg2LDQ0My44OTYgODMuMTk0LDQzOC40MzcgNzQuMzc5LDQyOS42MjEgQzY1LjU2NCw0MjAuODA2IDYwLjEwNCw0MTIuNDE0IDU1LjUzNCw0MDAuNjU1IEM1Mi4wODQsMzkxLjc3OCA0Ny45OCwzNzguNDM5IDQ2Ljg2LDM1My44NzcgQzQ1LjY0OCwzMjcuMzEzIDQ1LjM5MSwzMTkuMzQ1IDQ1LjM5MSwyNTIuMDggQzQ1LjM5MSwxODQuODE0IDQ1LjY0OCwxNzYuODQ2IDQ2Ljg2LDE1MC4yODIgQzQ3Ljk4LDEyNS43MiA1Mi4wODQsMTEyLjM4MSA1NS41MzQsMTAzLjUwNCBDNjAuMTA0LDkxLjc0NSA2NS41NjMsODMuMzUzIDc0LjM3OSw3NC41MzggQzgzLjE5NCw2NS43MjIgOTEuNTg2LDYwLjI2MyAxMDMuMzQ1LDU1LjY5MyBDMTEyLjIyMiw1Mi4yNDMgMTI1LjU2MSw0OC4xMzkgMTUwLjEyMyw0Ny4wMTkgQzE3Ni42ODcsNDUuODA3IDE4NC42NTUsNDUuNTUgMjUxLjkyMSw0NS41NSBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkZGRkZGIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgICAgIDxwYXRoIGQ9Ik0yNTEuOTIxLDMzNi4wNTMgQzIwNS41NDMsMzM2LjA1MyAxNjcuOTQ3LDI5OC40NTcgMTY3Ljk0NywyNTIuMDggQzE2Ny45NDcsMjA1LjcwMiAyMDUuNTQzLDE2OC4xMDYgMjUxLjkyMSwxNjguMTA2IEMyOTguMjk4LDE2OC4xMDYgMzM1Ljg5NCwyMDUuNzAyIDMzNS44OTQsMjUyLjA4IEMzMzUuODk0LDI5OC40NTcgMjk4LjI5OCwzMzYuMDUzIDI1MS45MjEsMzM2LjA1MyBaIE0yNTEuOTIxLDEyMi43MTUgQzE4MC40NzQsMTIyLjcxNSAxMjIuNTU2LDE4MC42MzMgMTIyLjU1NiwyNTIuMDggQzEyMi41NTYsMzIzLjUyNiAxODAuNDc0LDM4MS40NDQgMjUxLjkyMSwzODEuNDQ0IEMzMjMuMzY3LDM4MS40NDQgMzgxLjI4NSwzMjMuNTI2IDM4MS4yODUsMjUyLjA4IEMzODEuMjg1LDE4MC42MzMgMzIzLjM2NywxMjIuNzE1IDI1MS45MjEsMTIyLjcxNSBaIiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8cGF0aCBkPSJNNDE2LjYyNywxMTcuNjA0IEM0MTYuNjI3LDEzNC4zIDQwMy4wOTIsMTQ3LjgzNCAzODYuMzk2LDE0Ny44MzQgQzM2OS43MDEsMTQ3LjgzNCAzNTYuMTY2LDEzNC4zIDM1Ni4xNjYsMTE3LjYwNCBDMzU2LjE2NiwxMDAuOTA4IDM2OS43MDEsODcuMzczIDM4Ni4zOTYsODcuMzczIEM0MDMuMDkyLDg3LjM3MyA0MTYuNjI3LDEwMC45MDggNDE2LjYyNywxMTcuNjA0IiBpZD0iRmlsbC01IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=);
		}

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-media__placeholder__url__text {
			color: hsl(302, 100%, 94%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder {
		/* Use gradient to contrast with focused widget (ckeditor/ckeditor5-media-embed#22). */
		background: linear-gradient( to right, hsl(201, 85%, 70%), hsl(201, 85%, 35%) );

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IldoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MDAsMjAwYzAsMTEwLjUtODkuNSwyMDAtMjAwLDIwMFMwLDMxMC41LDAsMjAwUzg5LjUsMCwyMDAsMFM0MDAsODkuNSw0MDAsMjAweiBNMTYzLjQsMzA1LjVjODguNywwLDEzNy4yLTczLjUsMTM3LjItMTM3LjJjMC0yLjEsMC00LjItMC4xLTYuMmM5LjQtNi44LDE3LjYtMTUuMywyNC4xLTI1Yy04LjYsMy44LTE3LjksNi40LTI3LjcsNy42YzEwLTYsMTcuNi0xNS40LDIxLjItMjYuN2MtOS4zLDUuNS0xOS42LDkuNS0zMC42LDExLjdjLTguOC05LjQtMjEuMy0xNS4yLTM1LjItMTUuMmMtMjYuNiwwLTQ4LjIsMjEuNi00OC4yLDQ4LjJjMCwzLjgsMC40LDcuNSwxLjMsMTFjLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40Yy00LjEsNy4xLTYuNSwxNS40LTYuNSwyNC4yYzAsMTYuNyw4LjUsMzEuNSwyMS41LDQwLjFjLTcuOS0wLjItMTUuMy0yLjQtMjEuOC02YzAsMC4yLDAsMC40LDAsMC42YzAsMjMuNCwxNi42LDQyLjgsMzguNyw0Ny4zYy00LDEuMS04LjMsMS43LTEyLjcsMS43Yy0zLjEsMC02LjEtMC4zLTkuMS0wLjljNi4xLDE5LjIsMjMuOSwzMy4xLDQ1LDMzLjVjLTE2LjUsMTIuOS0zNy4zLDIwLjYtNTkuOSwyMC42Yy0zLjksMC03LjctMC4yLTExLjUtMC43QzExMC44LDI5Ny41LDEzNi4yLDMwNS41LDE2My40LDMwNS41Ii8+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(201, 100%, 86%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}
}
`],sourceRoot:""}]);const D=_},3525:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-media-embed/theme/mediaform.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-media-form {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=_},7583:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,":root{--ck-color-mention-background:rgba(153,0,48,.1);--ck-color-mention-text:#990030}.ck-content .mention{background:var(--ck-color-mention-background);color:var(--ck-color-mention-text)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-mention/mention.css"],names:[],mappings:"AAKA,MACC,+CAAwD,CACxD,+BACD,CAEA,qBACC,6CAA8C,CAC9C,kCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-mention-background: hsla(341, 100%, 30%, 0.1);
	--ck-color-mention-text: hsl(341, 100%, 30%);
}

.ck-content .mention {
	background: var(--ck-color-mention-background);
	color: var(--ck-color-mention-text);
}
`],sourceRoot:""}]);const D=_},6391:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,":root{--ck-mention-list-max-height:300px}.ck.ck-mentions{max-height:var(--ck-mention-list-max-height);overflow-x:hidden;overflow-y:auto;overscroll-behavior:contain}.ck.ck-mentions>.ck-list__item{flex-shrink:0;overflow:hidden}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-mention/theme/mentionui.css"],names:[],mappings:"AAKA,MACC,kCACD,CAEA,gBACC,4CAA6C,CAM7C,iBAAkB,CAJlB,eAAgB,CAMhB,2BAQD,CAJC,+BAEC,aAAc,CADd,eAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-mention-list-max-height: 300px;
}

.ck.ck-mentions {
	max-height: var(--ck-mention-list-max-height);

	overflow-y: auto;

	/* Prevent unnecessary horizontal scrollbar in Safari
	https://github.com/ckeditor/ckeditor5-mention/issues/41 */
	overflow-x: hidden;

	overscroll-behavior: contain;

	/* Prevent unnecessary vertical scrollbar in Safari
	https://github.com/ckeditor/ckeditor5-mention/issues/41 */
	& > .ck-list__item {
		overflow: hidden;
		flex-shrink: 0;
	}
}
`],sourceRoot:""}]);const D=_},6448:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,'.ck-content .page-break{align-items:center;clear:both;display:flex;justify-content:center;padding:5px 0;position:relative}.ck-content .page-break:after{border-bottom:2px dashed #c4c4c4;content:"";position:absolute;width:100%}.ck-content .page-break__label{background:#fff;border:1px solid #c4c4c4;border-radius:2px;box-shadow:2px 2px 1px rgba(0,0,0,.15);color:#333;display:block;font-family:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;font-size:.75em;font-weight:700;padding:.3em .6em;position:relative;text-transform:uppercase;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1}@media print{.ck-content .page-break{padding:0}.ck-content .page-break:after{display:none}}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-page-break/theme/pagebreak.css"],names:[],mappings:"AAKA,wBAKC,kBAAmB,CAHnB,UAAW,CAEX,YAAa,CAEb,sBAAuB,CAHvB,aAAc,CAFd,iBAaD,CANC,8BAGC,gCAAyC,CAFzC,UAAW,CACX,iBAAkB,CAElB,UACD,CAGD,+BAYC,eAA4B,CAN5B,wBAAiC,CACjC,iBAAkB,CAMlB,sCAA6C,CAF7C,UAAsB,CAPtB,aAAc,CAId,qDAA0D,CAC1D,eAAiB,CACjB,eAAiB,CAPjB,iBAAkB,CAFlB,iBAAkB,CAIlB,wBAAyB,CAWzB,wBAAyB,CACzB,qBAAsB,CACtB,oBAAqB,CACrB,gBAAiB,CAjBjB,SAkBD,CAGA,aACC,wBACC,SAKD,CAHC,8BACC,YACD,CAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .page-break {
	position: relative;
	clear: both;
	padding: 5px 0;
	display: flex;
	align-items: center;
	justify-content: center;

	&::after {
		content: '';
		position: absolute;
		border-bottom: 2px dashed hsl(0, 0%, 77%);
		width: 100%;
	}
}

.ck-content .page-break__label {
	position: relative;
	z-index: 1;
	padding: .3em .6em;
	display: block;
	text-transform: uppercase;
	border: 1px solid hsl(0, 0%, 77%);
	border-radius: 2px;
	font-family: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;
	font-size: 0.75em;
	font-weight: bold;
	color: hsl(0, 0%, 20%);
	background: hsl(0, 0%, 100%);
	box-shadow: 2px 2px 1px hsla(0, 0%, 0%, 0.15);

	/* Disable the possibility to select the label text by the user. */
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}

/* Do not show the page break element inside the print preview window. */
@media print {
	.ck-content .page-break {
		padding: 0;

		&::after {
			display: none;
		}
	}
}
`],sourceRoot:""}]);const D=_},2353:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,":root{--ck-color-restricted-editing-exception-background:rgba(255,169,77,.2);--ck-color-restricted-editing-exception-hover-background:rgba(255,169,77,.35);--ck-color-restricted-editing-exception-brackets:rgba(204,105,0,.4);--ck-color-restricted-editing-selected-exception-background:rgba(255,169,77,.5);--ck-color-restricted-editing-selected-exception-brackets:rgba(204,105,0,.6)}.ck-editor__editable .restricted-editing-exception{background-color:var(--ck-color-restricted-editing-exception-background);border:1px solid;border-image:linear-gradient(to right,var(--ck-color-restricted-editing-exception-brackets) 0,var(--ck-color-restricted-editing-exception-brackets) 5px,transparent 6px,transparent calc(100% - 6px),var(--ck-color-restricted-editing-exception-brackets) calc(100% - 5px),var(--ck-color-restricted-editing-exception-brackets) 100%) 1;transition:background .2s ease-in-out}.ck-editor__editable .restricted-editing-exception.restricted-editing-exception_selected{background-color:var(--ck-color-restricted-editing-selected-exception-background);border-image:linear-gradient(to right,var(--ck-color-restricted-editing-selected-exception-brackets) 0,var(--ck-color-restricted-editing-selected-exception-brackets) 5px,var(--ck-color-restricted-editing-selected-exception-brackets) calc(100% - 5px),var(--ck-color-restricted-editing-selected-exception-brackets) 100%) 1}.ck-editor__editable .restricted-editing-exception.restricted-editing-exception_collapsed{padding-left:1ch}.ck-restricted-editing_mode_restricted,.ck-restricted-editing_mode_restricted *{cursor:default}.ck-restricted-editing_mode_restricted .restricted-editing-exception,.ck-restricted-editing_mode_restricted .restricted-editing-exception *{cursor:text}.ck-restricted-editing_mode_restricted .restricted-editing-exception:hover{background:var(--ck-color-restricted-editing-exception-hover-background)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-restricted-editing/restrictedediting.css"],names:[],mappings:"AAKA,MACC,sEAA2E,CAC3E,6EAAkF,CAClF,mEAAyE,CACzE,+EAAoF,CACpF,4EACD,CAEA,mDAEC,wEAAyE,CACzE,gBAAiB,CACjB,yUAQG,CAXH,qCA4BD,CAfC,yFACC,iFAAkF,CAClF,gUAOD,CAEA,0FAEC,gBACD,CAQA,gFACC,cACD,CAKC,4IACC,WACD,CAEA,2EACC,wEACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-restricted-editing-exception-background: hsla(31, 100%, 65%, .2);
	--ck-color-restricted-editing-exception-hover-background: hsla(31, 100%, 65%, .35);
	--ck-color-restricted-editing-exception-brackets: hsla(31, 100%, 40%, .4);
	--ck-color-restricted-editing-selected-exception-background: hsla(31, 100%, 65%, .5);
	--ck-color-restricted-editing-selected-exception-brackets: hsla(31, 100%, 40%, .6);
}

.ck-editor__editable .restricted-editing-exception {
	transition: .2s ease-in-out background;
	background-color: var(--ck-color-restricted-editing-exception-background);
	border: 1px solid;
	border-image: linear-gradient(
		to right,
		var(--ck-color-restricted-editing-exception-brackets) 0%,
		var(--ck-color-restricted-editing-exception-brackets) 5px,
		hsla(0, 0%, 0%, 0) 6px,
		hsla(0, 0%, 0%, 0) calc(100% - 6px),
		var(--ck-color-restricted-editing-exception-brackets) calc(100% - 5px),
		var(--ck-color-restricted-editing-exception-brackets) 100%
	) 1;

	&.restricted-editing-exception_selected {
		background-color: var(--ck-color-restricted-editing-selected-exception-background);
		border-image: linear-gradient(
			to right,
			var(--ck-color-restricted-editing-selected-exception-brackets) 0%,
			var(--ck-color-restricted-editing-selected-exception-brackets) 5px,
			var(--ck-color-restricted-editing-selected-exception-brackets) calc(100% - 5px),
			var(--ck-color-restricted-editing-selected-exception-brackets) 100%
		) 1;
	}

	&.restricted-editing-exception_collapsed {
		/* Empty exception should have the same width as exception with at least 1 char */
		padding-left: 1ch;
	}
}

.ck-restricted-editing_mode_restricted {
	cursor: default;

	/* We also have to override all elements inside the restricted editable to prevent cursor switching between default and text
	during the pointer movement. */
	& * {
		cursor: default;
	}

	& .restricted-editing-exception {
		cursor: text;

		& * {
			cursor: text;
		}

		&:hover {
			background: var(--ck-color-restricted-editing-exception-hover-background);
		}
	}
}
`],sourceRoot:""}]);const D=_},671:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,'.ck-source-editing-area{overflow:hidden;position:relative}.ck-source-editing-area textarea,.ck-source-editing-area:after{border:1px solid transparent;font-family:monospace;font-size:var(--ck-font-size-normal);line-height:var(--ck-line-height-base);margin:0;padding:var(--ck-spacing-large);white-space:pre-wrap}.ck-source-editing-area:after{content:attr(data-value) " ";display:block;visibility:hidden}.ck-source-editing-area textarea{border-color:var(--ck-color-base-border);border-radius:0;box-sizing:border-box;height:100%;outline:none;overflow:hidden;position:absolute;resize:none;width:100%}.ck-rounded-corners .ck-source-editing-area textarea,.ck-source-editing-area textarea.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck-source-editing-area textarea:not([readonly]):focus{border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-source-editing/theme/sourceediting.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,wBAEC,eAAgB,CADhB,iBAED,CAEA,+DAIC,4BAA6B,CAG7B,qBAAsB,CADtB,oCAAqC,CADrC,sCAAuC,CAFvC,QAAS,CADT,+BAAgC,CAMhC,oBACD,CAEA,8BACC,4BAA6B,CAE7B,aAAc,CADd,iBAED,CAEA,iCASC,wCAAyC,CC7BzC,eAAgB,CD2BhB,qBAAsB,CAJtB,WAAY,CAEZ,YAAa,CACb,eAAgB,CALhB,iBAAkB,CAGlB,WAAY,CAFZ,UAkBD,CApBA,yGChBE,qCAAsC,CD4BtC,wBAAyB,CACzB,yBAOF,CAJC,uDEpCA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFwCA",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css";
@import "@ckeditor/ckeditor5-theme-lark/theme/mixins/_focus.css";
@import "@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css";

.ck-source-editing-area {
	position: relative;
	overflow: hidden;
}

.ck-source-editing-area::after,
.ck-source-editing-area textarea {
	padding: var(--ck-spacing-large);
	margin: 0;
	border: 1px solid transparent;
	line-height: var(--ck-line-height-base);
	font-size: var(--ck-font-size-normal);
	font-family: monospace;
	white-space: pre-wrap;
}

.ck-source-editing-area::after {
	content: attr(data-value) " ";
	visibility: hidden;
	display: block;
}

.ck-source-editing-area textarea {
	position: absolute;
	width: 100%;
	height: 100%;
	resize: none;
	outline: none;
	overflow: hidden;
	box-sizing: border-box;

	border-color: var(--ck-color-base-border);

	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	&:not([readonly]):focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=_},4046:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck.ck-character-grid{max-width:100%}.ck.ck-character-grid .ck-character-grid__tiles{display:grid}:root{--ck-character-grid-tile-size:24px}.ck.ck-character-grid{max-height:200px;overflow-x:hidden;overflow-y:auto;width:350px}@media screen and (max-width:600px){.ck.ck-character-grid{width:190px}}.ck.ck-character-grid .ck-character-grid__tiles{grid-gap:var(--ck-spacing-standard);grid-template-columns:repeat(10,1fr);margin:var(--ck-spacing-standard) var(--ck-spacing-large)}@media screen and (max-width:600px){.ck.ck-character-grid .ck-character-grid__tiles{grid-template-columns:repeat(5,1fr)}}.ck.ck-character-grid .ck-character-grid__tile{border:0;font-size:1.2em;height:var(--ck-character-grid-tile-size);min-height:var(--ck-character-grid-tile-size);min-width:var(--ck-character-grid-tile-size);padding:0;transition:box-shadow .2s ease;width:var(--ck-character-grid-tile-size)}.ck.ck-character-grid .ck-character-grid__tile:focus:not(.ck-disabled),.ck.ck-character-grid .ck-character-grid__tile:hover:not(.ck-disabled){border:0;box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-character-grid .ck-character-grid__tile .ck-button__label{line-height:var(--ck-character-grid-tile-size);text-align:center;width:100%}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-special-characters/theme/charactergrid.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-special-characters/charactergrid.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAKA,sBACC,cAKD,CAHC,gDACC,YACD,CCFD,MACC,kCACD,CAEA,sBAIC,gBAAiB,CAFjB,iBAAkB,CADlB,eAAgB,CAEhB,WAyCD,CClDC,oCDMD,sBAOE,WAqCF,CChDC,CDcA,gDAGC,mCAAoC,CAFpC,oCAAsC,CACtC,yDAMD,CCxBA,oCDgBA,gDAME,mCAEF,CCtBA,CDwBA,+CAQC,QAAS,CAHT,eAAgB,CAHhB,yCAA0C,CAE1C,6CAA8C,CAD9C,4CAA6C,CAG7C,SAAU,CACV,8BAA+B,CAN/B,wCAsBD,CAbC,8IAGC,QAAS,CACT,iGACD,CAGA,iEACC,8CAA+C,CAE/C,iBAAkB,CADlB,UAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-character-grid {
	max-width: 100%;
	
	& .ck-character-grid__tiles {
		display: grid;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "../mixins/_rounded.css";

:root {
	--ck-character-grid-tile-size: 24px;
}

.ck.ck-character-grid {
	overflow-y: auto;
	overflow-x: hidden;
	width: 350px;
	max-height: 200px;

	@mixin ck-media-phone {
		width: 190px;
	}

	& .ck-character-grid__tiles {
		grid-template-columns: repeat(10, 1fr);
		margin: var(--ck-spacing-standard) var(--ck-spacing-large);
		grid-gap: var(--ck-spacing-standard);

		@mixin ck-media-phone {
			grid-template-columns: repeat(5, 1fr);
		}
	}

	& .ck-character-grid__tile {
		width: var(--ck-character-grid-tile-size);
		height: var(--ck-character-grid-tile-size);
		min-width: var(--ck-character-grid-tile-size);
		min-height: var(--ck-character-grid-tile-size);
		font-size: 1.2em;
		padding: 0;
		transition: .2s ease box-shadow;
		border: 0;

		&:focus:not( .ck-disabled ),
		&:hover:not( .ck-disabled ) {
			/* Disable the default .ck-button's border ring. */
			border: 0;
			box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
		}

		/* Make sure the glyph is rendered in the center of the button */
		& .ck-button__label {
			line-height: var(--ck-character-grid-tile-size);
			width: 100%;
			text-align: center;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=_},4779:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck.ck-character-info{border-top:1px solid var(--ck-color-base-border);display:flex;justify-content:space-between;padding:var(--ck-spacing-small) var(--ck-spacing-large)}.ck.ck-character-info>*{font-size:var(--ck-font-size-small);text-transform:uppercase}.ck.ck-character-info .ck-character-info__name{max-width:280px;overflow:hidden;text-overflow:ellipsis}.ck.ck-character-info .ck-character-info__code{opacity:.6}@media screen and (max-width:600px){.ck.ck-character-info{max-width:190px}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-special-characters/theme/characterinfo.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-special-characters/characterinfo.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAKA,sBCIC,gDAAiD,CDHjD,YAAa,CACb,6BAA8B,CCC9B,uDDAD,CCGC,wBAEC,mCAAoC,CADpC,wBAED,CAEA,+CACC,eAAgB,CAEhB,eAAgB,CADhB,sBAED,CAEA,+CACC,UACD,CClBA,oCDCD,sBAoBE,eAEF,CCrBC",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-character-info {
	display: flex;
	justify-content: space-between;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-character-info {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	border-top: 1px solid var(--ck-color-base-border);

	& > * {
		text-transform: uppercase;
		font-size: var(--ck-font-size-small);
	}

	& .ck-character-info__name {
		max-width: 280px;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	& .ck-character-info__code {
		opacity: .6;
	}

	@mixin ck-media-phone {
		max-width: 190px;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=_},8170:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck.ck-special-characters-navigation>.ck-label{max-width:160px;overflow:hidden;text-overflow:ellipsis}.ck.ck-special-characters-navigation>.ck-dropdown .ck-dropdown__panel{max-height:250px;overflow-x:hidden;overflow-y:auto}@media screen and (max-width:600px){.ck.ck-special-characters-navigation{max-width:190px}.ck.ck-special-characters-navigation>.ck-form__header__label{overflow:hidden;text-overflow:ellipsis}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-special-characters/specialcharacters.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAUC,+CACC,eAAgB,CAEhB,eAAgB,CADhB,sBAED,CAEA,sEAEC,gBAAiB,CAEjB,iBAAkB,CADlB,eAED,CCfA,oCDED,qCAgBE,eAOF,CALE,6DAEC,eAAgB,CADhB,sBAED,CCrBD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-special-characters-navigation {

	& > .ck-label {
		max-width: 160px;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	& > .ck-dropdown .ck-dropdown__panel {
		/* There could be dozens of categories available. Use scroll to prevent a 10e6px dropdown. */
		max-height: 250px;
		overflow-y: auto;
		overflow-x: hidden;
	}

	@mixin ck-media-phone {
		max-width: 190px;

		& > .ck-form__header__label {
			text-overflow: ellipsis;
			overflow: hidden;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=_},2844:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck.ck-dropdown.ck-style-dropdown.ck-style-dropdown_multiple-active>.ck-button>.ck-button__label{font-style:italic}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-style/style.css"],names:[],mappings:"AAKA,iGACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dropdown.ck-style-dropdown.ck-style-dropdown_multiple-active > .ck-button > .ck-button__label {
	font-style: italic;
}
`],sourceRoot:""}]);const D=_},3875:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,":root{--ck-style-panel-columns:3}.ck.ck-style-panel .ck-style-grid{display:grid;grid-template-columns:repeat(var(--ck-style-panel-columns),auto);justify-content:start}.ck.ck-style-panel .ck-style-grid .ck-style-grid__button{display:flex;flex-direction:column;justify-content:space-between}.ck.ck-style-panel .ck-style-grid .ck-style-grid__button .ck-style-grid__button__preview{align-content:center;align-items:center;display:flex;flex-basis:100%;flex-grow:1;justify-content:flex-start}:root{--ck-style-panel-button-width:120px;--ck-style-panel-button-height:80px;--ck-style-panel-button-label-background:#f0f0f0;--ck-style-panel-button-hover-label-background:#ebebeb;--ck-style-panel-button-hover-border-color:#b3b3b3}.ck.ck-style-panel .ck-style-grid{column-gap:var(--ck-spacing-large);row-gap:var(--ck-spacing-large)}.ck.ck-style-panel .ck-style-grid .ck-style-grid__button{--ck-color-button-default-hover-background:var(--ck-color-base-background);--ck-color-button-default-active-background:var(--ck-color-base-background);height:var(--ck-style-panel-button-height);padding:0;width:var(--ck-style-panel-button-width)}.ck.ck-style-panel .ck-style-grid .ck-style-grid__button:not(:focus){border:1px solid var(--ck-color-base-border)}.ck.ck-style-panel .ck-style-grid .ck-style-grid__button .ck-button__label{flex-shrink:0;height:22px;line-height:22px;overflow:hidden;padding:0 var(--ck-spacing-medium);text-overflow:ellipsis;width:100%}.ck.ck-style-panel .ck-style-grid .ck-style-grid__button .ck-style-grid__button__preview{background:var(--ck-color-base-background);border:2px solid var(--ck-color-base-background);opacity:.9;overflow:hidden;padding:var(--ck-spacing-medium);width:100%}.ck.ck-style-panel .ck-style-grid .ck-style-grid__button.ck-disabled{--ck-color-button-default-disabled-background:var(--ck-color-base-foreground)}.ck.ck-style-panel .ck-style-grid .ck-style-grid__button.ck-disabled:not(:focus){border-color:var(--ck-style-panel-button-label-background)}.ck.ck-style-panel .ck-style-grid .ck-style-grid__button.ck-disabled .ck-style-grid__button__preview{border-color:var(--ck-color-base-foreground);filter:saturate(.3);opacity:.4}.ck.ck-style-panel .ck-style-grid .ck-style-grid__button.ck-on{border-color:var(--ck-color-base-active)}.ck.ck-style-panel .ck-style-grid .ck-style-grid__button.ck-on .ck-button__label{box-shadow:0 -1px 0 var(--ck-color-base-active);z-index:1}.ck.ck-style-panel .ck-style-grid .ck-style-grid__button.ck-on:hover{border-color:var(--ck-color-base-active-focus)}.ck.ck-style-panel .ck-style-grid .ck-style-grid__button:not(.ck-on) .ck-button__label{background:var(--ck-style-panel-button-label-background)}.ck.ck-style-panel .ck-style-grid .ck-style-grid__button:not(.ck-on):hover .ck-button__label{background:var(--ck-style-panel-button-hover-label-background)}.ck.ck-style-panel .ck-style-grid .ck-style-grid__button:hover:not(.ck-disabled):not(.ck-on){border-color:var(--ck-style-panel-button-hover-border-color)}.ck.ck-style-panel .ck-style-grid .ck-style-grid__button:hover:not(.ck-disabled):not(.ck-on) .ck-style-grid__button__preview{opacity:1}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-style/theme/stylegrid.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-style/stylegrid.css"],names:[],mappings:"AAKA,MACC,0BACD,CAEA,kCACC,YAAa,CACb,gEAAiE,CACjE,qBAgBD,CAdC,yDACC,YAAa,CAEb,qBAAsB,CADtB,6BAWD,CARC,yFAEC,oBAAqB,CAErB,kBAAmB,CAHnB,YAAa,CAKb,eAAgB,CADhB,WAAY,CAFZ,0BAID,CCrBF,MACC,mCAAoC,CACpC,mCAAoC,CACpC,gDAA2D,CAC3D,sDAAiE,CACjE,kDACD,CAEA,kCAEC,kCAAmC,CADnC,+BAmFD,CAhFC,yDACC,0EAA2E,CAC3E,2EAA4E,CAI5E,0CAA2C,CAF3C,SAAU,CACV,wCA0ED,CAtEC,qEACC,4CACD,CAEA,2EAOC,aAAc,CANd,WAAY,CACZ,gBAAiB,CAGjB,eAAgB,CADhB,kCAAmC,CAEnC,sBAAuB,CAHvB,UAKD,CAEA,yFAMC,0CAA2C,CAC3C,gDAAiD,CAJjD,UAAW,CADX,eAAgB,CAGhB,gCAAiC,CAJjC,UAOD,CAEA,qEACC,6EAaD,CAVC,iFACC,0DACD,CAEA,qGAGC,4CAA6C,CAC7C,mBAAoB,CAHpB,UAID,CAGD,+DACC,wCAUD,CARC,iFACC,+CAAgD,CAChD,SACD,CAEA,qEACC,8CACD,CAIA,uFACC,wDACD,CAEA,6FACC,8DACD,CAGD,6FACC,4DAKD,CAHC,6HACC,SACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-style-panel-columns: 3;
}

.ck.ck-style-panel .ck-style-grid {
	display: grid;
	grid-template-columns: repeat(var(--ck-style-panel-columns),auto);
	justify-content: start;

	& .ck-style-grid__button {
		display: flex;
		justify-content: space-between;
		flex-direction: column;

		& .ck-style-grid__button__preview {
			display: flex;
			align-content: center;
			justify-content: flex-start;
			align-items: center;
			flex-grow: 1;
			flex-basis: 100%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-style-panel-button-width: 120px;
	--ck-style-panel-button-height: 80px;
	--ck-style-panel-button-label-background: hsl(0, 0%, 94.1%);
	--ck-style-panel-button-hover-label-background: hsl(0, 0%, 92.1%);
	--ck-style-panel-button-hover-border-color: hsl(0, 0%, 70%);
}

.ck.ck-style-panel .ck-style-grid {
	row-gap: var(--ck-spacing-large);
	column-gap: var(--ck-spacing-large);

	& .ck-style-grid__button {
		--ck-color-button-default-hover-background: var(--ck-color-base-background);
		--ck-color-button-default-active-background: var(--ck-color-base-background);

		padding: 0;
		width: var(--ck-style-panel-button-width);
		height: var(--ck-style-panel-button-height);

		/* Let default .ck-button :focus styles apply */
		&:not(:focus) {
			border: 1px solid var(--ck-color-base-border);
		}

		& .ck-button__label {
			height: 22px;
			line-height: 22px;
			width: 100%;
			padding: 0 var(--ck-spacing-medium);
			overflow: hidden;
			text-overflow: ellipsis;
			flex-shrink: 0;
		}

		& .ck-style-grid__button__preview {
			width: 100%;
			overflow: hidden;
			opacity: .9;

			padding: var(--ck-spacing-medium);
			background: var(--ck-color-base-background);
			border: 2px solid var(--ck-color-base-background);
		}

		&.ck-disabled {
			--ck-color-button-default-disabled-background: var(--ck-color-base-foreground);

			/* Let default .ck-button :focus styles apply */
			&:not(:focus) {
				border-color: var(--ck-style-panel-button-label-background);
			}

			& .ck-style-grid__button__preview {
				opacity: .4;

				border-color: var(--ck-color-base-foreground);
				filter: saturate(.3);
			}
		}

		&.ck-on {
			border-color: var(--ck-color-base-active);

			& .ck-button__label {
				box-shadow: 0 -1px 0 var(--ck-color-base-active);
				z-index: 1; /* Stay on top of the preview with the shadow. */
			}

			&:hover {
				border-color: var(--ck-color-base-active-focus);
			}
		}

		&:not(.ck-on) {
			& .ck-button__label {
				background: var(--ck-style-panel-button-label-background);
			}

			&:hover .ck-button__label {
				background: var(--ck-style-panel-button-hover-label-background);
			}
		}

		&:hover:not(.ck-disabled):not(.ck-on) {
			border-color: var(--ck-style-panel-button-hover-border-color);

			& .ck-style-grid__button__preview {
				opacity: 1;
			}
		}
	}
}
`],sourceRoot:""}]);const D=_},9545:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck.ck-style-panel .ck-style-panel__style-group>.ck-label{margin:var(--ck-spacing-large) 0}.ck.ck-style-panel .ck-style-panel__style-group:first-child>.ck-label{margin-top:0}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-style/stylegroup.css"],names:[],mappings:"AAMC,0DACC,gCACD,CAGC,sEACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-style-panel .ck-style-panel__style-group {
	& > .ck-label {
		margin: var(--ck-spacing-large) 0;
	}

	&:first-child {
		& > .ck-label {
			margin-top: 0;
		}
	}
}
`],sourceRoot:""}]);const D=_},6746:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,":root{--ck-style-panel-max-height:470px}.ck.ck-style-panel{max-height:var(--ck-style-panel-max-height);overflow-y:auto;padding:var(--ck-spacing-large)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-style/stylepanel.css"],names:[],mappings:"AAKA,MACC,iCACD,CAEA,mBAGC,2CAA4C,CAD5C,eAAgB,CADhB,+BAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-style-panel-max-height: 470px;
}

.ck.ck-style-panel {
	padding: var(--ck-spacing-large);
	overflow-y: auto;
	max-height: var(--ck-style-panel-max-height);
}
`],sourceRoot:""}]);const D=_},4082:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck.ck-input-color{display:flex;flex-direction:row-reverse;width:100%}.ck.ck-input-color>input.ck.ck-input-text{flex-grow:1;min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown{min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown>.ck-input-color__button .ck-dropdown__arrow{display:none}.ck.ck-input-color .ck.ck-input-color__button{display:flex}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview{overflow:hidden;position:relative}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{display:block;position:absolute}[dir=ltr] .ck.ck-input-color>.ck.ck-input-text{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-input-text{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-input-color>.ck.ck-input-text:focus{z-index:0}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{padding:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-left-radius:0;border-top-left-radius:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-left:1px solid transparent}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-right:1px solid transparent}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button.ck-disabled{background:var(--ck-color-input-disabled-background)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border-radius:0}.ck-rounded-corners .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview,.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border:1px solid var(--ck-color-input-border);height:20px;width:20px}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{background:red;border-radius:2px;height:150%;left:50%;top:-30%;transform:rotate(45deg);transform-origin:50%;width:8%}.ck.ck-input-color .ck.ck-input-color__remove-color{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard);width:100%}.ck.ck-input-color .ck.ck-input-color__remove-color:not(:focus){border-bottom:1px solid var(--ck-color-input-border)}[dir=ltr] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-right-radius:0}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-left-radius:0}.ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-left:var(--ck-spacing-standard);margin-right:0}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-table/theme/colorinput.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-table/colorinput.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,YAAa,CACb,0BAA2B,CAF3B,UAgCD,CA5BC,0CAEC,WAAY,CADZ,cAED,CAEA,sCACC,cAMD,CAHC,kFACC,YACD,CAGD,8CAEC,YAWD,CATC,kFAEC,eAAgB,CADhB,iBAOD,CAJC,0IAEC,aAAc,CADd,iBAED,CC1BF,+CAGE,4BAA6B,CAD7B,yBAcF,CAhBA,+CAQE,2BAA4B,CAD5B,wBASF,CAHC,2CACC,SACD,CAIA,wEACC,SA0CD,CA3CA,kFAKE,2BAA4B,CAD5B,wBAuCF,CApCE,8FACC,iCACD,CATF,kFAcE,4BAA6B,CAD7B,yBA8BF,CA3BE,8FACC,kCACD,CAGD,oFACC,oDACD,CAEA,4GC1CF,eD2DE,CAjBA,+PCtCD,qCDuDC,CAjBA,4GAKC,6CAA8C,CAD9C,WAAY,CADZ,UAcD,CAVC,oKAKC,cAA6B,CAC7B,iBAAkB,CAHlB,WAAY,CADZ,QAAS,CADT,QAAS,CAMT,uBAAwB,CACxB,oBAAqB,CAJrB,QAKD,CAKH,oDAIC,2BAA4B,CAC5B,4BAA6B,CAH7B,qEAAwE,CADxE,UA0BD,CApBC,gEACC,oDACD,CATD,8DAYE,yBAeF,CA3BA,8DAgBE,wBAWF,CARC,gEACC,uCAMD,CAPA,0EAKE,sCAAuC,CADvC,cAGF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-input-color {
	width: 100%;
	display: flex;
	flex-direction: row-reverse;

	& > input.ck.ck-input-text {
		min-width: auto;
		flex-grow: 1;
	}

	& > div.ck.ck-dropdown {
		min-width: auto;

		/* This dropdown has no arrow but a color preview instead. */
		& > .ck-input-color__button .ck-dropdown__arrow {
			display: none;
		}
	}

	& .ck.ck-input-color__button {
		/* Resolving issue with misaligned buttons on Safari (see #10589) */
		display: flex;

		& .ck.ck-input-color__button__preview {
			position: relative;
			overflow: hidden;

			& > .ck.ck-input-color__button__preview__no-color-indicator {
				position: absolute;
				display: block;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_rounded.css";

.ck.ck-input-color {
	& > .ck.ck-input-text {
		@mixin ck-dir ltr {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* Make sure the focused input is always on top of the dropdown button so its
		   outline and border are never cropped (also when the input is read-only). */
		&:focus {
			z-index: 0;
		}
	}

	& > .ck.ck-dropdown {
		& > .ck.ck-button.ck-input-color__button {
			padding: 0;

			@mixin ck-dir ltr {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;

				&:not(:focus) {
					border-left: 1px solid transparent;
				}
			}

			@mixin ck-dir rtl {
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;

				&:not(:focus) {
					border-right: 1px solid transparent;
				}
			}

			&.ck-disabled {
				background: var(--ck-color-input-disabled-background);
			}

			& > .ck.ck-input-color__button__preview {
				@mixin ck-rounded-corners;

				width: 20px;
				height: 20px;
				border: 1px solid var(--ck-color-input-border);

				& > .ck.ck-input-color__button__preview__no-color-indicator {
					top: -30%;
					left: 50%;
					height: 150%;
					width: 8%;
					background: hsl(0, 100%, 50%);
					border-radius: 2px;
					transform: rotate(45deg);
					transform-origin: 50%;
				}
			}
		}
	}

	& .ck.ck-input-color__remove-color {
		width: 100%;
		padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);

		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;

		&:not(:focus) {
			border-bottom: 1px solid var(--ck-color-input-border);
		}

		@mixin ck-dir ltr {
			border-top-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
		}

		& .ck.ck-icon {
			margin-right: var(--ck-spacing-standard);

			@mixin ck-dir rtl {
				margin-right: 0;
				margin-left: var(--ck-spacing-standard);
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=_},4880:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck.ck-form{padding:0 0 var(--ck-spacing-large)}.ck.ck-form:focus{outline:none}.ck.ck-form .ck.ck-input-text{min-width:100%;width:0}.ck.ck-form .ck.ck-dropdown{min-width:100%}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button:not(:focus){border:1px solid var(--ck-color-base-border)}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button .ck-button__label{width:100%}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-table/form.css"],names:[],mappings:"AAKA,YACC,mCAyBD,CAvBC,kBAEC,YACD,CAEA,8BACC,cAAe,CACf,OACD,CAEA,4BACC,cAWD,CARE,6DACC,4CACD,CAEA,mEACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form {
	padding: 0 0 var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	& .ck.ck-input-text {
		min-width: 100%;
		width: 0;
	}

	& .ck.ck-dropdown {
		min-width: 100%;

		& .ck-dropdown__button {
			&:not(:focus) {
				border: 1px solid var(--ck-color-base-border);
			}

			& .ck-button__label {
				width: 100%;
			}
		}
	}
}
`],sourceRoot:""}]);const D=_},9865:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-table-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-table-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row{padding:var(--ck-spacing-standard) var(--ck-spacing-large) 0}[dir=ltr] .ck.ck-form__row>:not(.ck-label)+*{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-form__row>:not(.ck-label)+*{margin-right:var(--ck-spacing-large)}.ck.ck-form__row>.ck-label{min-width:100%;width:100%}.ck.ck-form__row.ck-table-form__action-row{margin-top:var(--ck-spacing-large)}.ck.ck-form__row.ck-table-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-table/theme/formrow.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-table/formrow.css"],names:[],mappings:"AAKA,iBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAaD,CAVC,iCACC,WACD,CAGC,wHAEC,sBACD,CCbF,iBACC,4DA2BD,CAvBE,6CAEE,mCAMF,CARA,6CAME,oCAEF,CAGD,2BAEC,cAAe,CADf,UAED,CAEA,2CACC,kCAKD,CAHC,wEACC,0BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		flex-grow: 1;
	}

	&.ck-table-form__action-row {
		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-form__row {
	padding: var(--ck-spacing-standard) var(--ck-spacing-large) 0;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		& + * {
			@mixin ck-dir ltr {
				margin-left: var(--ck-spacing-large);
			}

			@mixin ck-dir rtl {
				margin-right: var(--ck-spacing-large);
			}
		}
	}

	& > .ck-label {
		width: 100%;
		min-width: 100%;
	}

	&.ck-table-form__action-row {
		margin-top: var(--ck-spacing-large);

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}
`],sourceRoot:""}]);const D=_},8085:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label,.ck[dir=rtl] .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;margin:var(--ck-insert-table-dropdown-box-margin);min-height:var(--ck-insert-table-dropdown-box-height);min-width:var(--ck-insert-table-dropdown-box-width);outline:none;transition:none}.ck .ck-insert-table-dropdown-grid-box:focus{box-shadow:none}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-table/theme/inserttable.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,mFAEC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAFlB,iDAAkD,CADlD,qDAAsD,CADtD,mDAAoD,CAKpD,YAAa,CACb,eAUD,CARC,6CACC,eACD,CAEA,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-insert-table-dropdown__grid {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-insert-table-dropdown-padding: 10px;
	--ck-insert-table-dropdown-box-height: 11px;
	--ck-insert-table-dropdown-box-width: 12px;
	--ck-insert-table-dropdown-box-margin: 1px;
}

.ck .ck-insert-table-dropdown__grid {
	/* The width of a container should match 10 items in a row so there will be a 10x10 grid. */
	width: calc(var(--ck-insert-table-dropdown-box-width) * 10 + var(--ck-insert-table-dropdown-box-margin) * 20 + var(--ck-insert-table-dropdown-padding) * 2);
	padding: var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;
}

.ck .ck-insert-table-dropdown__label,
.ck[dir=rtl] .ck-insert-table-dropdown__label {
	text-align: center;
}

.ck .ck-insert-table-dropdown-grid-box {
	min-width: var(--ck-insert-table-dropdown-box-width);
	min-height: var(--ck-insert-table-dropdown-box-height);
	margin: var(--ck-insert-table-dropdown-box-margin);
	border: 1px solid var(--ck-color-base-border);
	border-radius: 1px;
	outline: none;
	transition: none;

	&:focus {
		box-shadow: none;
	}

	&.ck-on {
		border-color: var(--ck-color-focus-border);
		background: var(--ck-color-focus-outer-shadow);
	}
}

`],sourceRoot:""}]);const D=_},4104:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .table {
	/* Give the table widget some air and center it horizontally */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em auto;
	display: table;

	& table {
		/* The table cells should have slight borders */
		border-collapse: collapse;
		border-spacing: 0;

		/* Table width and height are set on the parent <figure>. Make sure the table inside stretches
		to the full dimensions of the container (https://github.com/ckeditor/ckeditor5/issues/6186). */
		width: 100%;
		height: 100%;

		/* The outer border of the table should be slightly darker than the inner lines.
		Also see https://github.com/ckeditor/ckeditor5-table/issues/50. */
		border: 1px double hsl(0, 0%, 70%);

		& td,
		& th {
			min-width: 2em;
			padding: .4em;

			/* The border is inherited from .ck-editor__nested-editable styles, so theoretically it's not necessary here.
			However, the border is a content style, so it should use .ck-content (so it works outside the editor).
			Hence, the duplication. See https://github.com/ckeditor/ckeditor5/issues/6314 */
			border: 1px solid hsl(0, 0%, 75%);
		}

		& th {
			font-weight: bold;
			background: hsla(0, 0%, 0%, 5%);
		}
	}
}

/* Text alignment of the table header should match the editor settings and override the native browser styling,
when content is available outside the editor. See https://github.com/ckeditor/ckeditor5/issues/6638 */
.ck-content[dir="rtl"] .table th {
	text-align: right;
}

.ck-content[dir="ltr"] .table th {
	text-align: left;
}

.ck-editor__editable .ck-table-bogus-paragraph {
	/*
	 * Use display:inline-block to force Chrome/Safari to limit text mutations to this element.
	 * See https://github.com/ckeditor/ckeditor5/issues/6062.
	 */
	display: inline-block;

	/*
	 * Inline HTML elements nested in the span should always be dimensioned in relation to the whole cell width.
	 * See https://github.com/ckeditor/ckeditor5/issues/9117.
	 */
	width: 100%;
}
`],sourceRoot:""}]);const D=_},9888:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,":root{--ck-color-table-caption-background:#f7f7f7;--ck-color-table-caption-text:#333;--ck-color-table-caption-highlighted-background:#fd0}.ck-content .table>figcaption{background-color:var(--ck-color-table-caption-background);caption-side:top;color:var(--ck-color-table-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;text-align:center;word-break:break-word}.ck.ck-editor__editable .table>figcaption.table__caption_highlighted{animation:ck-table-caption-highlight .6s ease-out}.ck.ck-editor__editable .table>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}@keyframes ck-table-caption-highlight{0%{background-color:var(--ck-color-table-caption-highlighted-background)}to{background-color:var(--ck-color-table-caption-background)}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-table/theme/tablecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,oDACD,CAGA,8BAMC,yDAA0D,CAJ1D,gBAAiB,CAGjB,wCAAyC,CAJzC,qBAAsB,CAOtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,iBAAkB,CADlB,qBAOD,CAIC,qEACC,iDACD,CAEA,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAGD,sCACC,GACC,qEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-table-caption-background: hsl(0, 0%, 97%);
	--ck-color-table-caption-text: hsl(0, 0%, 20%);
	--ck-color-table-caption-highlighted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .table > figcaption {
	display: table-caption;
	caption-side: top;
	word-break: break-word;
	text-align: center;
	color: var(--ck-color-table-caption-text);
	background-color: var(--ck-color-table-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .table > figcaption {
	&.table__caption_highlighted {
		animation: ck-table-caption-highlight .6s ease-out;
	}

	&.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the table caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
}

@keyframes ck-table-caption-highlight {
	0% {
		background-color: var(--ck-color-table-caption-highlighted-background);
	}

	100% {
		background-color: var(--ck-color-table-caption-background);
	}
}
`],sourceRoot:""}]);const D=_},5737:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row{flex-wrap:wrap}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:first-of-type{flex-grow:0.57}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:last-of-type{flex-grow:0.43}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar .ck-button{flex-grow:1}.ck.ck-table-cell-properties-form{width:320px}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__padding-row{align-self:flex-end;padding:0;width:25%}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-table/theme/tablecellproperties.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-table/tablecellproperties.css"],names:[],mappings:"AAOE,6FACC,cAiBD,CAdE,0HAEC,cACD,CAEA,yHAEC,cACD,CAEA,uHACC,WACD,CClBJ,kCACC,WAkBD,CAfE,2FACC,mBAAoB,CACpB,SAAU,CACV,SACD,CAGC,4GACC,eAAgB,CAGhB,qCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	& .ck-form__row {
		&.ck-table-cell-properties-form__alignment-row {
			flex-wrap: wrap;

			& .ck.ck-toolbar {
				&:first-of-type {
					/* 4 buttons out of 7 (h-alignment + v-alignment) = 0.57 */
					flex-grow: 0.57;
				}

				&:last-of-type {
					/* 3 buttons out of 7 (h-alignment + v-alignment) = 0.43 */
					flex-grow: 0.43;
				}

				& .ck-button {
					flex-grow: 1;
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-cell-properties-form__padding-row {
			align-self: flex-end;
			padding: 0;
			width: 25%;
		}

		&.ck-table-cell-properties-form__alignment-row {
			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);
			}
		}
	}
}
`],sourceRoot:""}]);const D=_},728:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,":root{--ck-color-table-column-resizer-hover:var(--ck-color-base-active);--ck-table-column-resizer-width:7px;--ck-table-column-resizer-position-offset:calc(var(--ck-table-column-resizer-width)*-0.5 - 0.5px)}.ck-content .table .ck-table-resized{table-layout:fixed}.ck-content .table table{overflow:hidden}.ck-content .table td,.ck-content .table th{position:relative}.ck.ck-editor__editable .table .ck-table-column-resizer{bottom:-999999px;cursor:col-resize;position:absolute;right:var(--ck-table-column-resizer-position-offset);top:-999999px;user-select:none;width:var(--ck-table-column-resizer-width);z-index:var(--ck-z-default)}.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer,.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer{display:none}.ck.ck-editor__editable .table .ck-table-column-resizer:hover,.ck.ck-editor__editable .table .ck-table-column-resizer__active{background-color:var(--ck-color-table-column-resizer-hover);opacity:.25}.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer{left:var(--ck-table-column-resizer-position-offset);right:unset}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-table/theme/tablecolumnresize.css"],names:[],mappings:"AAKA,MACC,iEAAkE,CAClE,mCAAoC,CAIpC,iGACD,CAEA,qCACC,kBACD,CAEA,yBACC,eACD,CAEA,4CAEC,iBACD,CAEA,wDAOC,gBAAiB,CAGjB,iBAAkB,CATlB,iBAAkB,CAOlB,oDAAqD,CAFrD,aAAc,CAKd,gBAAiB,CAFjB,0CAA2C,CAG3C,2BACD,CAQA,qJACC,YACD,CAEA,8HAEC,2DAA4D,CAC5D,WACD,CAEA,iEACC,mDAAoD,CACpD,WACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-table-column-resizer-hover: var(--ck-color-base-active);
	--ck-table-column-resizer-width: 7px;

	/* The offset used for absolute positioning of the resizer element, so that it is placed exactly above the cell border.
	   The value is: minus half the width of the resizer decreased additionaly by the half the width of the border (0.5px). */
	--ck-table-column-resizer-position-offset: calc(var(--ck-table-column-resizer-width) * -0.5 - 0.5px);
}

.ck-content .table .ck-table-resized {
	table-layout: fixed;
}

.ck-content .table table {
	overflow: hidden;
}

.ck-content .table td,
.ck-content .table th {
	position: relative;
}

.ck.ck-editor__editable .table .ck-table-column-resizer {
	position: absolute;
	/* The resizer element resides in each cell so to occupy the entire height of the table, which is unknown from a CSS point of view,
	   it is extended to an extremely high height. Even for screens with a very high pixel density, the resizer will fulfill its role as
	   it should, i.e. for a screen of 476 ppi the total height of the resizer will take over 350 sheets of A4 format, which is totally
	   unrealistic height for a single table. */
	top: -999999px;
	bottom: -999999px;
	right: var(--ck-table-column-resizer-position-offset);
	width: var(--ck-table-column-resizer-width);
	cursor: col-resize;
	user-select: none;
	z-index: var(--ck-z-default);
}

.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer {
	display: none;
}

/* The resizer elements, which are extended to an extremely high height, break the drag & drop feature in Chrome. To make it work again,
   all resizers must be hidden while the table is dragged. */
.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer {
	display: none;
}

.ck.ck-editor__editable .table .ck-table-column-resizer:hover,
.ck.ck-editor__editable .table .ck-table-column-resizer__active {
	background-color: var(--ck-color-table-column-resizer-hover);
	opacity: 0.25;
}

.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer {
	left: var(--ck-table-column-resizer-position-offset);
	right: unset;
}
`],sourceRoot:""}]);const D=_},4777:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,":root{--ck-color-table-focused-cell-background:rgba(158,201,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-table-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,6DACD,CAKE,8QAGC,wDAAyD,CAKzD,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-table-focused-cell-background: hsla(212, 90%, 80%, .3);
}

.ck-widget.table {
	& td,
	& th {
		&.ck-editor__nested-editable.ck-editor__nested-editable_focused,
		&.ck-editor__nested-editable:focus {
			/* A very slight background to highlight the focused cell */
			background: var(--ck-color-table-focused-cell-background);

			/* Fixes the problem where surrounding cells cover the focused cell's border.
			It does not fix the problem in all places but the UX is improved.
			See https://github.com/ckeditor/ckeditor5-table/issues/29. */
			border-style: none;
			outline: 1px solid var(--ck-color-focus-border);
			outline-offset: -1px; /* progressive enhancement - no IE support */
		}
	}
}
`],sourceRoot:""}]);const D=_},198:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,'.ck.ck-table-form .ck-form__row.ck-table-form__background-row,.ck.ck-table-form .ck-form__row.ck-table-form__border-row{flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{align-items:center;flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view{align-items:center;display:flex;flex-direction:column-reverse}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view .ck.ck-dropdown,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{flex-grow:0}.ck.ck-table-form .ck.ck-labeled-field-view{position:relative}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{bottom:calc(var(--ck-table-properties-error-arrow-size)*-1);left:50%;position:absolute;transform:translate(-50%,100%);z-index:1}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{content:"";left:50%;position:absolute;top:calc(var(--ck-table-properties-error-arrow-size)*-1);transform:translateX(-50%)}:root{--ck-table-properties-error-arrow-size:6px;--ck-table-properties-min-error-width:150px}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-labeled-field-view>.ck-label{font-size:var(--ck-font-size-tiny);text-align:center}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-style,.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-width{max-width:80px;min-width:80px;width:80px}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{padding:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__height,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__width{margin:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{align-self:flex-end;display:inline-block;height:var(--ck-ui-component-min-height);line-height:var(--ck-ui-component-min-height);margin:0 var(--ck-spacing-small)}.ck.ck-table-form .ck.ck-labeled-field-view{padding-top:var(--ck-spacing-standard)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{border-radius:0}.ck-rounded-corners .ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status,.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{background:var(--ck-color-base-error);color:var(--ck-color-base-background);min-width:var(--ck-table-properties-min-error-width);padding:var(--ck-spacing-small) var(--ck-spacing-medium);text-align:center}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{border-color:transparent transparent var(--ck-color-base-error) transparent;border-style:solid;border-width:0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{animation:ck-table-form-labeled-view-status-appear .15s ease both}.ck.ck-table-form .ck.ck-labeled-field-view .ck-input.ck-error:not(:focus)+.ck.ck-labeled-field-view__status{display:none}@keyframes ck-table-form-labeled-view-status-appear{0%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-table/theme/tableform.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-table/tableform.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAWE,wHACC,cACD,CAEA,8DAEC,kBAAmB,CADnB,cAgBD,CAbC,qFAGC,kBAAmB,CAFnB,YAAa,CACb,6BAMD,CAEA,sMACC,WACD,CAIF,4CAEC,iBAoBD,CAlBC,8EAGC,2DAAgE,CADhE,QAAS,CADT,iBAAkB,CAGlB,8BAA+B,CAG/B,SAUD,CAPC,oFACC,UAAW,CAGX,QAAS,CAFT,iBAAkB,CAClB,wDAA6D,CAE7D,0BACD,CChDH,MACC,0CAA2C,CAC3C,2CACD,CAMI,2FACC,kCAAmC,CACnC,iBACD,CAGD,8KAIC,cAAe,CADf,cAAe,CADf,UAGD,CAGD,8DACC,SAcD,CAZC,yMAEC,QACD,CAEA,iGACC,mBAAoB,CACpB,oBAAqB,CACrB,wCAAyC,CACzC,6CAA8C,CAC9C,gCACD,CAIF,4CACC,sCAyBD,CAvBC,8ECxCD,eDyDC,CAjBA,mMCpCA,qCDqDA,CAjBA,8EAGC,qCAAsC,CACtC,qCAAsC,CAEtC,oDAAqD,CADrD,wDAAyD,CAEzD,iBAUD,CAPC,oFACC,2EAA4E,CAE5E,kBAAmB,CADnB,kJAED,CAdD,8EAgBC,iEACD,CAGA,6GACC,YACD,CAIF,oDACC,GACC,SACD,CAEA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__background-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__dimensions-row {
			flex-wrap: wrap;
			align-items: center;

			& .ck-labeled-field-view {
				display: flex;
				flex-direction: column-reverse;
				align-items: center;

				& .ck.ck-dropdown {
					flex-grow: 0;
				}
			}

			& .ck-table-form__dimension-operator {
				flex-grow: 0;
			}
		}
	}

	& .ck.ck-labeled-field-view {
		/* Allow absolute positioning of the status (error) balloons. */
		position: relative;

		& .ck.ck-labeled-field-view__status {
			position: absolute;
			left: 50%;
			bottom: calc( -1 * var(--ck-table-properties-error-arrow-size) );
			transform: translate(-50%,100%);

			/* Make sure the balloon status stays on top of other form elements. */
			z-index: 1;

			/* The arrow pointing towards the field. */
			&::after {
				content: "";
				position: absolute;
				top: calc( -1 * var(--ck-table-properties-error-arrow-size) );
				left: 50%;
				transform: translateX( -50% );
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

:root {
	--ck-table-properties-error-arrow-size: 6px;
	--ck-table-properties-min-error-width: 150px;
}

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			& .ck-labeled-field-view {
				& > .ck-label {
					font-size: var(--ck-font-size-tiny);
					text-align: center;
				}
			}

			& .ck-table-form__border-style,
			& .ck-table-form__border-width {
				width: 80px;
				min-width: 80px;
				max-width: 80px;
			}
		}

		&.ck-table-form__dimensions-row {
			padding: 0;

			& .ck-table-form__dimensions-row__width,
			& .ck-table-form__dimensions-row__height {
				margin: 0
			}

			& .ck-table-form__dimension-operator {
				align-self: flex-end;
				display: inline-block;
				height: var(--ck-ui-component-min-height);
				line-height: var(--ck-ui-component-min-height);
				margin: 0 var(--ck-spacing-small);
			}
		}
	}

	& .ck.ck-labeled-field-view {
		padding-top: var(--ck-spacing-standard);

		& .ck.ck-labeled-field-view__status {
			@mixin ck-rounded-corners;

			background: var(--ck-color-base-error);
			color: var(--ck-color-base-background);
			padding: var(--ck-spacing-small) var(--ck-spacing-medium);
			min-width: var(--ck-table-properties-min-error-width);
			text-align: center;

			/* The arrow pointing towards the field. */
			&::after {
				border-color: transparent transparent var(--ck-color-base-error) transparent;
				border-width: 0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size);
				border-style: solid;
			}

			animation: ck-table-form-labeled-view-status-appear .15s ease both;
		}

		/* Hide the error balloon when the field is blurred. Makes the experience much more clear. */
		& .ck-input.ck-error:not(:focus) + .ck.ck-labeled-field-view__status {
			display: none;
		}
	}
}

@keyframes ck-table-form-labeled-view-status-appear {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=_},9221:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-content:baseline;flex-basis:0;flex-wrap:wrap}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items{flex-wrap:nowrap}.ck.ck-table-properties-form{width:320px}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-self:flex-end;padding:0}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items>*{width:40px}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-table/theme/tableproperties.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-table/tableproperties.css"],names:[],mappings:"AAOE,mFAGC,sBAAuB,CADvB,YAAa,CADb,cAOD,CAHC,qHACC,gBACD,CCTH,6BACC,WAmBD,CAhBE,mFACC,mBAAoB,CACpB,SAYD,CAVC,kGACC,eAAgB,CAGhB,qCAKD,CAHC,uHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			flex-wrap: wrap;
			flex-basis: 0;
			align-content: baseline;

			& .ck.ck-toolbar .ck-toolbar__items {
				flex-wrap: nowrap;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			align-self: flex-end;
			padding: 0;

			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);

				& .ck-toolbar__items > * {
					width: 40px;
				}
			}
		}
	}
}
`],sourceRoot:""}]);const D=_},5593:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-table-selected-cell-background: hsla(208, 90%, 80%, .3);
}

.ck.ck-editor__editable .table table {
	& td.ck-editor__editable_selected,
	& th.ck-editor__editable_selected {
		position: relative;
		caret-color: transparent;
		outline: unset;
		box-shadow: unset;

		/* https://github.com/ckeditor/ckeditor5/issues/6446 */
		&:after {
			content: '';
			pointer-events: none;
			background-color: var(--ck-table-selected-cell-background);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		& ::selection,
		&:focus {
			background-color: transparent;
		}

		/*
		 * To reduce the amount of noise, all widgets in the table selection have no outline and no selection handle.
		 * See https://github.com/ckeditor/ckeditor5/issues/9491.
		 */
		& .ck-widget {
			outline: unset;

			& > .ck-widget__selection-handle {
				display: none;
			}
		}
	}
}
`],sourceRoot:""}]);const D=_},4499:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;justify-content:left;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{font-weight:700;opacity:.7}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{color:var(--ck-color-button-on-color)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/button/button.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAOA,6BAMC,kBAAmB,CADnB,mBAAoB,CAEpB,oBAAqB,CAHrB,iBAAkB,CCFlB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDkBD,CAdC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEjBD,6BCAC,oDD4ID,CCzIE,6EACC,0DACD,CAEA,+EACC,2DACD,CAID,qDACC,6DACD,CDfD,6BEDC,eF6ID,CA5IA,wIEGE,qCFyIF,CA5IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBAuID,CA7GC,oFGhCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHqCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAYD,CAbA,6FAIE,mCASF,CAbA,6FAQE,oCAKF,CAbA,yEAWC,eAAiB,CACjB,UACD,CAIC,oIIrFD,oDJyFC,CAOA,gLKhGD,kCLkGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCC/HA,+CDmIA,CChIC,yFACC,qDACD,CAEA,2FACC,sDACD,CAID,iEACC,wDACD,CDgHA,yCAGC,qCACD,CAEA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CC/IC,mDDoJD,CCjJE,2FACC,yDACD,CAEA,6FACC,0DACD,CAID,mEACC,4DACD,CDgID,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-unselectable;

	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: left;

	& .ck-button__label {
		display: none;
	}

	&.ck-button_with-text {
		& .ck-button__label {
			display: inline-block;
		}
	}

	/* Center the icon horizontally in a button without text. */
	&:not(.ck-button_with-text)  {
		justify-content: center;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-button-colors --ck-color-button-default;
	@mixin ck-rounded-corners;

	white-space: nowrap;
	cursor: default;
	vertical-align: middle;
	padding: var(--ck-spacing-tiny);
	text-align: center;

	/* A very important piece of styling. Go to variable declaration to learn more. */
	min-width: var(--ck-ui-component-min-height);
	min-height: var(--ck-ui-component-min-height);

	/* Normalize the height of the line. Removing this will break consistent height
	among text and text-less buttons (with icons). */
	line-height: 1;

	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	/* Avoid flickering when the foucs border shows up. */
	border: 1px solid transparent;

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .2s ease-in-out, border .2s ease-in-out;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/189 */
	-webkit-appearance: none;

	&:active,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	/* Allow icon coloring using the text "color" property. */
	& .ck-button__icon {
		& use,
		& use * {
			color: inherit;
		}
	}

	& .ck-button__label {
		/* Enable font size inheritance, which allows fluid UI scaling. */
		font-size: inherit;
		font-weight: inherit;
		color: inherit;
		cursor: inherit;

		/* Must be consistent with .ck-icon's vertical align. Otherwise, buttons with and
		without labels (but with icons) have different sizes in Chrome */
		vertical-align: middle;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& .ck-button__keystroke {
		color: inherit;

		@mixin ck-dir ltr {
			margin-left: var(--ck-spacing-large);
		}

		@mixin ck-dir rtl {
			margin-right: var(--ck-spacing-large);
		}

		font-weight: bold;
		opacity: .7;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
	&.ck-disabled {
		&:active,
		&:focus {
			/* The disabled button should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}

		& .ck-button__icon {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
		& .ck-button__label {
			@mixin ck-disabled;
		}

		& .ck-button__keystroke {
			opacity: .3;
		}
	}

	&.ck-button_with-text {
		padding: var(--ck-spacing-tiny) var(--ck-spacing-standard);

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__icon {
			@mixin ck-dir ltr {
				margin-left: calc(-1 * var(--ck-spacing-small));
				margin-right: var(--ck-spacing-small);
			}

			@mixin ck-dir rtl {
				margin-right: calc(-1 * var(--ck-spacing-small));
				margin-left: var(--ck-spacing-small);
			}
		}
	}

	&.ck-button_with-keystroke {
		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__label {
			flex-grow: 1;
		}
	}

	/* A style of the button which is currently on, e.g. its feature is active. */
	&.ck-on {
		@mixin ck-button-colors --ck-color-button-on;

		color: var(--ck-color-button-on-color);
	}

	&.ck-button-save {
		color: var(--ck-color-button-save);
	}

	&.ck-button-cancel {
		color: var(--ck-color-button-cancel);
	}
}

/* A style of the button which handles the primary action. */
.ck.ck-button-action,
a.ck.ck-button-action {
	@mixin ck-button-colors --ck-color-button-action;

	color: var(--ck-color-button-action-text);
}

.ck.ck-button-bold,
a.ck.ck-button-bold {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
@define-mixin ck-button-colors $prefix {
	background: var($(prefix)-background);

	&:not(.ck-disabled) {
		&:hover {
			background: var($(prefix)-hover-background);
		}

		&:active {
			background: var($(prefix)-active-background);
		}
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
	&.ck-disabled {
		background: var($(prefix)-disabled-background);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const D=_},9681:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:calc(1.07692em + 1px);--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - 2px);--ck-switch-button-inner-hover-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton,.ck.ck-button.ck-switchbutton.ck-on:active,.ck.ck-button.ck-switchbutton.ck-on:focus,.ck.ck-button.ck-switchbutton.ck-on:hover,.ck.ck-button.ck-switchbutton:active,.ck.ck-button.ck-switchbutton:focus,.ck.ck-button.ck-switchbutton:hover{background:transparent;color:inherit}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);border:1px solid transparent;transition:background .4s ease,box-shadow .2s ease-in-out,outline .2s ease-in-out;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:var(--ck-switch-button-inner-hover-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton:focus{border-color:transparent;box-shadow:none;outline:none}.ck.ck-button.ck-switchbutton:focus .ck-button__toggle{box-shadow:0 0 0 1px var(--ck-color-base-background),0 0 0 5px var(--ck-color-focus-outer-shadow);outline:var(--ck-focus-ring);outline-offset:1px}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,0DAAgE,CAChE,2HAIC,CACD,0FACD,CAOC,0QAEC,sBAAuB,CADvB,aAED,CAEA,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDCpCA,eD4EA,CAxCA,yIChCC,qCDwED,CAxCA,2DAKE,gBAmCF,CAxCA,2DAUE,iBA8BF,CAxCA,iDAkBC,uDAAwD,CAFxD,4BAA6B,CAD7B,iFAAsF,CAEtF,0CAuBD,CApBC,2ECxDD,eDmEC,CAXA,6LCpDA,qCAAsC,CDsDpC,8CASF,CAXA,2EAOC,yDAA0D,CAD1D,gDAAiD,CAIjD,uBAA0B,CAL1B,+CAMD,CAEA,uDACC,6DAKD,CAHC,iFACC,qDACD,CAIF,6DEhFA,kCFkFA,CAGA,oCACC,wBAAyB,CAEzB,eAAgB,CADhB,YAQD,CALC,uDACC,iGAAmG,CAEnG,4BAA6B,CAD7B,kBAED,CAKA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-button.ck-switchbutton {
	& .ck-button__toggle {
		display: block;

		& .ck-button__toggle__inner {
			display: block;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/* Note: To avoid rendering issues (aliasing) but to preserve the responsive nature
of the component, floating–point numbers have been used which, for the default font size
(see: --ck-font-size-base), will generate simple integers. */
:root {
	/* 34px at 13px font-size */
	--ck-switch-button-toggle-width: 2.6153846154em;
	/* 14px at 13px font-size */
	--ck-switch-button-toggle-inner-size: calc(1.0769230769em + 1px);
	--ck-switch-button-translation: calc(
		var(--ck-switch-button-toggle-width) -
		var(--ck-switch-button-toggle-inner-size) -
		2px /* Border */
	);
	--ck-switch-button-inner-hover-shadow: 0 0 0 5px var(--ck-color-switch-button-inner-shadow);
}

.ck.ck-button.ck-switchbutton {
	/* Unlike a regular button, the switch button text color and background should never change.
	 * Changing toggle switch (background, outline) is enough to carry the information about the
	 * state of the entire component (https://github.com/ckeditor/ckeditor5/issues/12519)
	 */
	&, &:hover, &:focus, &:active, &.ck-on:hover, &.ck-on:focus, &.ck-on:active {
		color: inherit;
		background: transparent;
	}

	& .ck-button__label {
		@mixin ck-dir ltr {
			/* Separate the label from the switch */
			margin-right: calc(2 * var(--ck-spacing-large));
		}

		@mixin ck-dir rtl {
			/* Separate the label from the switch */
			margin-left: calc(2 * var(--ck-spacing-large));
		}
	}

	& .ck-button__toggle {
		@mixin ck-rounded-corners;

		@mixin ck-dir ltr {
			/* Make sure the toggle is always to the right as far as possible. */
			margin-left: auto;
		}

		@mixin ck-dir rtl {
			/* Make sure the toggle is always to the left as far as possible. */
			margin-right: auto;
		}

		/* Apply some smooth transition to the box-shadow and border. */
		/* Gently animate the background color of the toggle switch */
		transition: background 400ms ease, box-shadow .2s ease-in-out, outline .2s ease-in-out;
		border: 1px solid transparent;
		width: var(--ck-switch-button-toggle-width);
		background: var(--ck-color-switch-button-off-background);

		& .ck-button__toggle__inner {
			@mixin ck-rounded-corners {
				border-radius: calc(.5 * var(--ck-border-radius));
			}

			width: var(--ck-switch-button-toggle-inner-size);
			height: var(--ck-switch-button-toggle-inner-size);
			background: var(--ck-color-switch-button-inner-background);

			/* Gently animate the inner part of the toggle switch */
			transition: all 300ms ease;
		}

		&:hover {
			background: var(--ck-color-switch-button-off-hover-background);

			& .ck-button__toggle__inner {
				box-shadow: var(--ck-switch-button-inner-hover-shadow);
			}
		}
	}

	&.ck-disabled .ck-button__toggle {
		@mixin ck-disabled;
	}

	/* Overriding default .ck-button:focus styles + an outline around the toogle */
	&:focus {
		border-color: transparent;
		outline: none;
		box-shadow: none;

		& .ck-button__toggle {
			box-shadow: 0 0 0 1px var(--ck-color-base-background), 0 0 0 5px var(--ck-color-focus-outer-shadow);
			outline-offset: 1px;
			outline: var(--ck-focus-ring);
		}
	}

	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-on {
		& .ck-button__toggle {
			background: var(--ck-color-switch-button-on-background);

			&:hover {
				background: var(--ck-color-switch-button-on-hover-background);
			}

			& .ck-button__toggle__inner {
				/*
				* Move the toggle switch to the right. It will be animated.
				*/
				@mixin ck-dir ltr {
					transform: translateX( var( --ck-switch-button-translation ) );
				}

				@mixin ck-dir rtl {
					transform: translateX( calc( -1 * var( --ck-switch-button-translation ) ) );
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const D=_},4923:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#166fd4}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-table__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css"],names:[],mappings:"AAKA,kBACC,YACD,CCAA,MACC,8BAA+B,CAK/B,wCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBAOC,QAAS,CALT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CACV,8BAA+B,CAL/B,oCAyCD,CAjCC,oCACC,YAAa,CACb,gBACD,CAEA,4DACC,gDACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAEA,8BACC,8FAKD,CAHC,0CACC,aACD,CAGD,8HAIC,QACD,CAEA,gGAEC,iGACD,CAGD,yBACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-color-grid {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-grid-tile-size: 24px;

	/* Not using global colors here because these may change but some colors in a pallette
	 * require special treatment. For instance, this ensures no matter what the UI text color is,
	 * the check icon will look good on the black color tile. */
	--ck-color-color-grid-check-icon: hsl(212, 81%, 46%);
}

.ck.ck-color-grid {
	grid-gap: 5px;
	padding: 8px;
}

.ck.ck-color-grid__tile {
	width: var(--ck-color-grid-tile-size);
	height: var(--ck-color-grid-tile-size);
	min-width: var(--ck-color-grid-tile-size);
	min-height: var(--ck-color-grid-tile-size);
	padding: 0;
	transition: .2s ease box-shadow;
	border: 0;

	&.ck-disabled {
		cursor: unset;
		transition: unset;
	}

	&.ck-color-table__color-tile_bordered {
		box-shadow: 0 0 0 1px var(--ck-color-base-border);
	}

	& .ck.ck-icon {
		display: none;
		color: var(--ck-color-color-grid-check-icon);
	}

	&.ck-on {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-base-text);

		& .ck.ck-icon {
			display: block;
		}
	}

	&.ck-on,
	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		/* Disable the default .ck-button's border ring. */
		border: 0;
	}

	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
	}
}

.ck.ck-color-grid__label {
	padding: 0 var(--ck-spacing-standard);
}
`],sourceRoot:""}]);const D=_},3488:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-dropdown__panel{display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-modal)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-modal) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBA2ED,CAzEC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UACD,CAEA,oCACC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CCpFA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eH8GD,CA5BA,qFG9EE,qCH0GF,CA5BA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAmBD,CAfC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-dropdown-max-width: 75vw;
}

.ck.ck-dropdown {
	display: inline-block;
	position: relative;

	& .ck-dropdown__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}

	/* Dropdown button should span horizontally, e.g. in vertical toolbars */
	& .ck-button.ck-dropdown__button {
		width: 100%;
	}

	& .ck-dropdown__panel {
		display: none;
		z-index: var(--ck-z-modal);
		max-width: var(--ck-dropdown-max-width);

		position: absolute;

		&.ck-dropdown__panel-visible {
			display: inline-block;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_n,
		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_nme {
			bottom: 100%;
		}

		&.ck-dropdown__panel_se,
		&.ck-dropdown__panel_sw,
		&.ck-dropdown__panel_smw,
		&.ck-dropdown__panel_sme,
		&.ck-dropdown__panel_s {
			/*
			 * Using transform: translate3d( 0, 100%, 0 ) causes blurry dropdown on Chrome 67-78+ on non-retina displays.
			 * See https://github.com/ckeditor/ckeditor5/issues/1053.
			 */
			top: 100%;
			bottom: auto;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_se {
			left: 0px;
		}

		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_sw {
			right: 0px;
		}

		&.ck-dropdown__panel_s,
		&.ck-dropdown__panel_n {
			/* Positioning panels relative to the center of the button */
			left: 50%;
			transform: translateX(-50%);
		}

		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_smw {
			/* Positioning panels relative to the middle-west of the button */
			left: 75%;
			transform: translateX(-75%);
		}

		&.ck-dropdown__panel_nme,
		&.ck-dropdown__panel_sme {
			/* Positioning panels relative to the middle-east of the button */
			left: 25%;
			transform: translateX(-25%);
		}
	}
}

/*
 * Toolbar dropdown panels should be always above the UI (eg. other dropdown panels) from the editor's content.
 * See https://github.com/ckeditor/ckeditor5/issues/7874
 */
.ck.ck-toolbar .ck-dropdown__panel {
	z-index: calc( var(--ck-z-modal) + 1 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-dropdown-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-dropdown {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-dropdown__arrow {
		width: var(--ck-dropdown-arrow-size);
	}

	@mixin ck-dir ltr {
		& .ck-dropdown__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-dropdown__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
	}

	&.ck-disabled .ck-dropdown__arrow {
		@mixin ck-disabled;
	}

	& .ck-button.ck-dropdown__button {
		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-right: var(--ck-spacing-small);
			}
		}

		/* #23 */
		& .ck-button__label {
			width: 7em;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
		&.ck-disabled .ck-button__label {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/816 */
		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		&.ck-dropdown__button_label-width_auto .ck-button__label {
			width: auto;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/8699 */
		&.ck-off:active,
		&.ck-on:active {
			box-shadow: none;
			
			&:focus {
				@mixin ck-box-shadow var(--ck-focus-outer-shadow);
			}
		}
	}
}

.ck.ck-dropdown__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;

	/* Make sure the panel is at least as wide as the drop-down's button. */
	min-width: 100%;

	/* Disabled corner border radius to be consistent with the .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-dropdown__panel_se {
		border-top-left-radius: 0;
	}

	&.ck-dropdown__panel_sw {
		border-top-right-radius: 0;
	}

	&.ck-dropdown__panel_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-dropdown__panel_nw {
		border-bottom-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=_},6875:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-dropdown .ck-dropdown__panel .ck-list {
	/* Disabled radius of top-left border to be consistent with .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
	}

	/* Make sure the button belonging to the first/last child of the list goes well with the
	border radius of the entire panel. */
	& .ck-list__item {
		&:first-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
		}

		&:last-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=_},66:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton>.ck-splitbutton__arrow:not(:focus){border-bottom-width:0;border-top-width:0}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:focus:after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:focus:after{--ck-color-split-button-hover-border:var(--ck-color-focus-border)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,iBAKD,CAHC,iDACC,qCACD,CCJD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CAKD,sDAEC,qBAAwB,CADxB,kBAED,CAQC,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGA,sIACC,iEACD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCCzFA,eDmGA,CAVA,qHCrFC,qCD+FD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-splitbutton {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-splitbutton__action:focus {
		z-index: calc(var(--ck-z-default) + 1);
	}
}

`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-split-button-hover-background: hsl(0, 0%, 92%);
	--ck-color-split-button-hover-border: hsl(0, 0%, 70%);
}

.ck.ck-splitbutton {
	/*
	 * Note: ck-rounded and ck-dir mixins don't go together (because they both use @nest).
	 */
	&:hover > .ck-splitbutton__action,
	&.ck-splitbutton_open > .ck-splitbutton__action {
		@nest [dir="ltr"] & {
			/* Don't round the action button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the action button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}
	}

	& > .ck-splitbutton__arrow {
		/* It's a text-less button and since the icon is positioned absolutely in such situation,
		it must get some arbitrary min-width. */
		min-width: unset;

		@nest [dir="ltr"] & {
			/* Don't round the arrow button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the arrow button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		& svg {
			width: var(--ck-dropdown-arrow-size);
		}
	}

	/* Make sure the divider stretches 100% height of the button
	https://github.com/ckeditor/ckeditor5/issues/10936 */
	& > .ck-splitbutton__arrow:not(:focus) {
		border-top-width: 0px;
		border-bottom-width: 0px;
	}

	/* When the split button is "open" (the arrow is on) or being hovered, it should get some styling
	as a whole. The background of both buttons should stand out and there should be a visual
	separation between both buttons. */
	&.ck-splitbutton_open,
	&:hover {
		/* When the split button hovered as a whole, not as individual buttons. */
		& > .ck-button:not(.ck-on):not(.ck-disabled):not(:hover) {
			background: var(--ck-color-split-button-hover-background);
		}

		/* Splitbutton separator needs to be set with the ::after pseudoselector
		to display properly the borders on focus */
		& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
			content: '';
			position: absolute;
			width: 1px;
			height: 100%;
			background-color: var(--ck-color-split-button-hover-border);
		}

		/* Make sure the divider between the buttons looks fine when the button is focused */
		& > .ck-splitbutton__arrow:focus::after {
			--ck-color-split-button-hover-border: var(--ck-color-focus-border);
		}

		@nest [dir="ltr"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				left: -1px;
			}
		}

		@nest [dir="rtl"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				right: -1px;
			}
		}
	}

	/* Don't round the bottom left and right corners of the buttons when "open"
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-splitbutton_open {
		@mixin ck-rounded-corners {
			& > .ck-splitbutton__action {
				border-bottom-left-radius: 0;
			}

			& > .ck-splitbutton__arrow {
				border-bottom-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=_},5075:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-dropdown-max-width: 60vw;
}

.ck.ck-toolbar-dropdown > .ck-dropdown__panel {
	/* https://github.com/ckeditor/ckeditor5/issues/5586 */
	width: max-content;
	max-width: var(--ck-toolbar-dropdown-max-width);

	& .ck-button {
		&:focus {
			z-index: calc(var(--ck-z-default) + 1);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-toolbar-dropdown .ck-toolbar {
	border: 0;
}
`],sourceRoot:""}]);const D=_},4547:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-base-foreground)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-base-foreground)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,mDACD,CAIA,gEACC,gDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_focus.css";
@import "../../mixins/_button.css";

:root {
	--ck-color-editable-blur-selection: hsl(0, 0%, 85%);
}

.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
	@mixin ck-rounded-corners;

	&.ck-focused {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
	}
}

.ck.ck-editor__editable_inline {
	overflow: auto;
	padding: 0 var(--ck-spacing-standard);
	border: 1px solid transparent;

	&[dir="ltr"] {
		text-align: left;
	}

	&[dir="rtl"] {
		text-align: right;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/116 */
	& > *:first-child {
		margin-top: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/847 */
	& > *:last-child {
		/*
		 * This value should match with the default margins of the block elements (like .media or .image)
		 * to avoid a content jumping when the fake selection container shows up (See https://github.com/ckeditor/ckeditor5/issues/9825).
		 */
		margin-bottom: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/6517 */
	&.ck-blurred ::selection {
		background: var(--ck-color-editable-blur-selection);
	}
}

/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/111 */
.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_n"] {
	&::after {
		border-bottom-color: var(--ck-color-base-foreground);
	}
}

.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_s"] {
	&::after {
		border-top-color: var(--ck-color-base-foreground);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=_},5523:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}:root{--ck-form-header-height:38px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}.ck.ck-form__header .ck-form__header__label{font-weight:700}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BACD,CCNA,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAQD,CAHC,4CACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-form-header-height: 38px;
}

.ck.ck-form__header {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	height: var(--ck-form-header-height);
	line-height: var(--ck-form-header-height);
	border-bottom: 1px solid var(--ck-color-base-border);

	& .ck-form__header__label {
		font-weight: bold;
	}
}
`],sourceRoot:""}]);const D=_},1174:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{cursor:inherit}.ck.ck-icon.ck-icon_inherit-color,.ck.ck-icon.ck-icon_inherit-color *{color:inherit}.ck.ck-icon.ck-icon_inherit-color :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/icon/icon.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAU1B,qBAoBD,CAlBC,0BALA,cAQA,CAMC,sEACC,aAMD,CAJC,+CAEC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-icon {
	vertical-align: middle;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-icon-size: calc(var(--ck-line-height-base) * var(--ck-font-size-normal));
}

.ck.ck-icon {
	width: var(--ck-icon-size);
	height: var(--ck-icon-size);

	/* Multiplied by the height of the line in "px" should give SVG "viewport" dimensions */
	font-size: .8333350694em;

	/* Inherit cursor style (#5). */
	cursor: inherit;

	/* This will prevent blurry icons on Firefox. See #340. */
	will-change: transform;

	& * {
		/* Inherit cursor style (#5). */
		cursor: inherit;
	}

	/* Allows dynamic coloring of an icon by inheriting its color from the parent. */
	&.ck-icon_inherit-color {
		color: inherit;

		& * {
			color: inherit;

			&:not([fill]) {
				/* Needed by FF. */
				fill: currentColor;
			}
		}
	}
}
`],sourceRoot:""}]);const D=_},6985:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eD2CD,CAtCA,iECDE,qCDuCF,CAtCA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DA0BD,CAxBC,mBEnBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YFuBA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BG/BD,oDHkCC,CAGD,sBAEC,sCAAuC,CADvC,+CAMD,CAHC,4BGzCD,iDH2CC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-input-width: 18em;

	/* Backward compatibility. */
	--ck-input-text-width: var(--ck-input-width);
}

.ck.ck-input {
	@mixin ck-rounded-corners;

	background: var(--ck-color-input-background);
	border: 1px solid var(--ck-color-input-border);
	padding: var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);
	min-width: var(--ck-input-width);

	/* This is important to stay of the same height as surrounding buttons */
	min-height: var(--ck-ui-component-min-height);

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .1s ease-in-out, border .1s ease-in-out;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	&[readonly] {
		border: 1px solid var(--ck-color-input-disabled-border);
		background: var(--ck-color-input-disabled-background);
		color: var(--ck-color-input-disabled-text);

		&:focus {
			/* The read-only input should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}
	}

	&.ck-error {
		border-color: var(--ck-color-input-error-border);
		animation: ck-input-shake .3s ease both;

		&:focus {
			@mixin ck-box-shadow var(--ck-focus-error-outer-shadow);
		}
	}
}

@keyframes ck-input-shake {
	20% {
		transform: translateX(-2px);
	}

	40% {
		transform: translateX(2px);
	}

	60% {
		transform: translateX(-1px);
	}

	80% {
		transform: translateX(1px);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=_},2751:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/label/label.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	display: block;
}

.ck.ck-voice-label {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	font-weight: bold;
}
`],sourceRoot:""}]);const D=_},8111:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-labeled-field-label-default-position-x:var(--ck-spacing-medium);--ck-labeled-field-label-default-position-y:calc(var(--ck-font-size-base)*0.6);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-labeled-field-label-default-position-x),var(--ck-labeled-field-label-default-position-y)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-labeled-field-label-default-position-x)*-1),var(--ck-labeled-field-label-default-position-y)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,oEAAqE,CACrE,8EAAiF,CACjF,yEACD,CAEA,0BCLC,eD8GD,CAzGA,2FCDE,qCD0GF,CAtGC,mEACC,UAmCD,CAjCC,gFACC,KA+BD,CAhCA,0FAIE,MA4BF,CAhCA,0FAQE,OAwBF,CAhCA,gFAiBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAP9C,mBAAoB,CAYpB,sBAAuB,CARvB,6DAA+D,CAH/D,oBAAqB,CAgBrB,+JAID,CAQA,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,oUAGE,+HAYF,CAfA,oUAOE,wIAQF,CAfA,gTAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-labeled-field-view {
	& > .ck.ck-labeled-field-view__input-wrapper {
		display: flex;
		position: relative;
	}

	& .ck.ck-label {
		display: block;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../../../mixins/_rounded.css";

:root {
	--ck-labeled-field-view-transition: .1s cubic-bezier(0, 0, 0.24, 0.95);
	--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-x: var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-y: calc(0.6 * var(--ck-font-size-base));
	--ck-color-labeled-field-label-background: var(--ck-color-base-background);
}

.ck.ck-labeled-field-view {
	@mixin ck-rounded-corners;

	& > .ck.ck-labeled-field-view__input-wrapper {
		width: 100%;

		& > .ck.ck-label {
			top: 0px;

			@mixin ck-dir ltr {
				left: 0px;
			}

			@mixin ck-dir rtl {
				right: 0px;
			}

			pointer-events: none;
			transform-origin: 0 0;

			/* By default, display the label scaled down above the field. */
			transform: translate(var(--ck-spacing-medium), -6px) scale(.75);

			background: var(--ck-color-labeled-field-label-background);
			padding: 0 calc(.5 * var(--ck-font-size-tiny));
			line-height: initial;
			font-weight: normal;

			/* Prevent overflow when the label is longer than the input */
			text-overflow: ellipsis;
			overflow: hidden;

			max-width: 100%;

			transition:
				transform var(--ck-labeled-field-view-transition),
				padding var(--ck-labeled-field-view-transition),
				background var(--ck-labeled-field-view-transition);
		}
	}

	&.ck-error {
		& > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			color: var(--ck-color-base-error);
		}

		& .ck-input:not([readonly]) + .ck.ck-label {
			color: var(--ck-color-base-error);
		}
	}

	& .ck-labeled-field-view__status {
		font-size: var(--ck-font-size-small);
		margin-top: var(--ck-spacing-small);

		/* Let the info wrap to the next line to avoid stretching the layout horizontally.
		The status could be very long. */
		white-space: normal;

		&.ck-labeled-field-view__status_error {
			color: var(--ck-color-base-error);
		}
	}

	/* Disabled fields and fields that have no focus should fade out. */
	&.ck-disabled > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		color: var(--ck-color-input-disabled-text);
	}

	/* Fields that are disabled or not focused and without a placeholder should have full-sized labels. */
	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-disabled.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		@mixin ck-dir ltr {
			transform: translate(var(--ck-labeled-field-label-default-position-x), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		@mixin ck-dir rtl {
			transform: translate(calc(-1 * var(--ck-labeled-field-label-default-position-x)), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		/* Compensate for the default translate position. */
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width));

		background: transparent;
		padding: 0;
	}

	/*------ DropdownView integration ----------------------------------------------------------------------------------- */

	/* Make sure dropdown' background color in any of dropdown's state does not collide with labeled field. */
	& > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck.ck-button {
		background: transparent;
	}

	/* When the dropdown is "empty", the labeled field label replaces its label. */
	&.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck-button > .ck-button__label {
		opacity: 0;
	}

	/* Make sure the label of the empty, unfocused input does not cover the dropdown arrow. */
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown + .ck-label {
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard));
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=_},1162:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{border-radius:0;min-height:unset;padding:calc(var(--ck-line-height-base)*.2*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*.4*var(--ck-font-size-base));text-align:left;width:100%}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(var(--ck-line-height-base)*1.2*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:focus:not(.ck-switchbutton):not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/list/list.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEfD,YCEC,eDGD,CALA,+DCME,qCDDF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cA2DD,CAzDC,6BAIC,eAAgB,CAHhB,gBAAiB,CAQjB,iIAEiE,CARjE,eAAgB,CADhB,UAwCD,CA7BC,+CAEC,yEACD,CAEA,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,iFACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-list {
	@mixin ck-unselectable;

	display: flex;
	flex-direction: column;

	& .ck-list__item,
	& .ck-list__separator {
		display: block;
	}

	/* Make sure that whatever child of the list item gets focus, it remains on the
	top. Thanks to that, styles like box-shadow, outline, etc. are not masked by
	adjacent list items. */
	& .ck-list__item > *:focus {
		position: relative;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

.ck.ck-list {
	@mixin ck-rounded-corners;

	list-style-type: none;
	background: var(--ck-color-list-background);
}

.ck.ck-list__item {
	cursor: default;
	min-width: 12em;

	& .ck-button {
		min-height: unset;
		width: 100%;
		text-align: left;
		border-radius: 0;

		/* List items should have the same height. Use absolute units to make sure it is so
		   because e.g. different heading styles may have different height
		   https://github.com/ckeditor/ckeditor5-heading/issues/63 */
		padding:
			calc(.2 * var(--ck-line-height-base) * var(--ck-font-size-base))
			calc(.4 * var(--ck-line-height-base) * var(--ck-font-size-base));

		& .ck-button__label {
			/* https://github.com/ckeditor/ckeditor5-heading/issues/63 */
			line-height: calc(1.2 * var(--ck-line-height-base) * var(--ck-font-size-base));
		}

		&:active {
			box-shadow: none;
		}

		&.ck-on {
			background: var(--ck-color-list-button-on-background);
			color: var(--ck-color-list-button-on-text);

			&:active {
				box-shadow: none;
			}

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-on-background-focus);
			}

			&:focus:not(.ck-switchbutton):not(.ck-disabled) {
				border-color: var(--ck-color-base-background);
			}
		}

		&:hover:not(.ck-disabled) {
			background: var(--ck-color-list-button-hover-background);
		}
	}

	/* It's unnecessary to change the background/text of a switch toggle; it has different ways
	of conveying its state (like the switcher) */
	& .ck-switchbutton {
		&.ck-on {
			background: var(--ck-color-list-background);
			color: inherit;

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-hover-background);
				color: inherit;
			}
		}
	}
}

.ck.ck-list__separator {
	height: 1px;
	width: 100%;
	background: var(--ck-color-base-border);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=_},8245:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-border-width:1px;--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:var(--ck-balloon-border-width) solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent;margin-top:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow));margin-bottom:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_e]:after,.ck.ck-balloon-panel[class*=arrow_e]:before{border-width:var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_e]:before{border-color:transparent transparent transparent var(--ck-color-panel-border);margin-right:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_e]:after{border-color:transparent transparent transparent var(--ck-color-panel-background);margin-right:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_w]:after,.ck.ck-balloon-panel[class*=arrow_w]:before{border-width:var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_w]:before{border-color:transparent var(--ck-color-panel-border) transparent transparent;margin-left:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_w]:after{border-color:transparent var(--ck-color-panel-background) transparent transparent;margin-left:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:before{margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);right:calc(var(--ck-balloon-arrow-height)*-1);top:50%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:before{left:calc(var(--ck-balloon-arrow-height)*-1);margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);top:50%}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCLC,eDmMD,CA9LA,iFCDE,qCD+LF,CA9LA,qBAMC,2CAA4C,CAC5C,wEAAyE,CEdzE,oCAA8B,CFW9B,eA0LD,CApLE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,kDACD,CAEA,2CACC,iFAAkF,CAClF,gFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDAAwD,CACxD,qDACD,CAEA,2CACC,iFAAkF,CAClF,mFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,oDACD,CAEA,2CACC,iFAAkF,CAClF,kFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,mDACD,CAEA,2CACC,iFAAkF,CAClF,iFACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD,CAIA,yGAGC,sDAAyD,CADzD,6CAAgD,CAEhD,OACD,CAIA,yGAEC,4CAA+C,CAC/C,sDAAyD,CACzD,OACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Make sure the balloon arrow does not float over its children. */
	--ck-balloon-panel-arrow-z-index: calc(var(--ck-z-default) - 3);
}

.ck.ck-balloon-panel {
	display: none;
	position: absolute;

	z-index: var(--ck-z-modal);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			content: "";
			position: absolute;
		}

		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_n"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_s"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&.ck-balloon-panel_visible {
		display: block;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-border-width: 1px;
	--ck-balloon-arrow-offset: 2px;
	--ck-balloon-arrow-height: 10px;
	--ck-balloon-arrow-half-width: 8px;
	--ck-balloon-arrow-drop-shadow: 0 2px 2px var(--ck-color-shadow-drop);
}

.ck.ck-balloon-panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: var(--ck-balloon-border-width) solid var(--ck-color-panel-border);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			width: 0;
			height: 0;
			border-style: solid;
		}
	}

	&[class*="arrow_n"] {
		&::before,
		&::after {
			border-width: 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: transparent transparent var(--ck-color-panel-border) transparent;
			margin-top: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent var(--ck-color-panel-background) transparent;
			margin-top: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_s"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: var(--ck-color-panel-border) transparent transparent;
			filter: drop-shadow(var(--ck-balloon-arrow-drop-shadow));
			margin-bottom: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: var(--ck-color-panel-background) transparent transparent transparent;
			margin-bottom: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_e"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height);
		}

		&::before {
			border-color: transparent transparent transparent var(--ck-color-panel-border);
			margin-right: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent transparent var(--ck-color-panel-background);
			margin-right: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_w"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0;
		}

		&::before {
			border-color: transparent var(--ck-color-panel-border) transparent transparent;
			margin-left: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent var(--ck-color-panel-background) transparent transparent;
			margin-left: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&.ck-balloon-panel_arrow_n {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_ne {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_s {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_se {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_smw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nmw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_e {
		&::before,
		&::after {
			right: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}

	&.ck-balloon-panel_arrow_w {
		&::before,
		&::after {
			left: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=_},1757:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Buttons inside a toolbar should be centered when rotator bar is wider.
 * See: https://github.com/ckeditor/ckeditor5-ui/issues/495
 */
.ck .ck-balloon-rotator__content .ck-toolbar {
	justify-content: center;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	background: var(--ck-color-toolbar-background);
	border-bottom: 1px solid var(--ck-color-toolbar-border);
	padding: 0 var(--ck-spacing-small);

	/* Let's keep similar appearance to \`ck-toolbar\`. */
	& > * {
		margin-right: var(--ck-spacing-small);
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	/* Gives counter more breath than buttons. */
	& .ck-balloon-rotator__counter {
		margin-right: var(--ck-spacing-standard);

		/* We need to use smaller margin because of previous button's right margin. */
		margin-left: var(--ck-spacing-small);
	}
}

.ck .ck-balloon-rotator__content {

	/* Disable default annotation shadow inside rotator with fake panels. */
	& .ck.ck-annotation-wrapper {
		box-shadow: none;
	}
}
`],sourceRoot:""}]);const D=_},3553:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-modal) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-fake-panel {
	position: absolute;

	/* Fake panels should be placed under main balloon content. */
	z-index: calc(var(--ck-z-modal) - 1);
}

.ck .ck-fake-panel div {
	position: absolute;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	z-index: 2;
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-fake-panel-offset-horizontal: 6px;
	--ck-balloon-fake-panel-offset-vertical: 6px;
}

/* Let's use \`.ck-balloon-panel\` appearance. See: balloonpanel.css. */
.ck .ck-fake-panel div {
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);
	border-radius: var(--ck-border-radius);

	width: 100%;
	height: 100%;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	margin-left: var(--ck-balloon-fake-panel-offset-horizontal);
	margin-top: var(--ck-balloon-fake-panel-offset-vertical);
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 2);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 2);
}
.ck .ck-fake-panel div:nth-child( 3 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 3);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 3);
}

/* If balloon is positioned above element, we need to move fake panel to the top. */
.ck .ck-balloon-panel_arrow_s + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_se + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_sw + .ck-fake-panel {
	--ck-balloon-fake-panel-offset-vertical: -6px;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=_},3609:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-modal)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		z-index: var(--ck-z-modal); /* #315 */
		position: fixed;
		top: 0;
	}

	& .ck-sticky-panel__content_sticky_bottom-limit {
		top: auto;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		@mixin ck-drop-shadow;

		border-width: 0 1px 1px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=_},1590:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,'.ck-vertical-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck-vertical-form .ck-button:focus:after{display:none}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck.ck-responsive-form .ck-button:focus:after{display:none}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border-radius:0;margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}.ck.ck-responsive-form>.ck-button:last-child:not(:focus),.ck.ck-responsive-form>.ck-button:nth-last-child(2):not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAQC,mCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,yCACC,YACD,CCdA,oCDoBE,wCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,8CACC,YACD,CC9BF,CCAD,qDACC,kDACD,CAEA,uBACC,+BAmED,CAjEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA8CF,CA5CE,8CACC,wDAWD,CATC,6DACC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAKA,0DACC,kDACD,CAGD,iGAIC,eAAgB,CADhB,kCAAmC,CADnC,kCAmBD,CAfC,yHACC,gDACD,CARD,0OAeE,aAMF,CAJE,+IACC,kDACD,CDpEH",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck-vertical-form .ck-button {
	&::after {
		content: "";
		width: 0;
		position: absolute;
		right: -1px;
		top: -1px;
		bottom: -1px;
		z-index: 1;
	}

	&:focus::after {
		display: none;
	}
}

.ck.ck-responsive-form {
	@mixin ck-media-phone {
		& .ck-button {
			&::after {
				content: "";
				width: 0;
				position: absolute;
				right: -1px;
				top: -1px;
				bottom: -1px;
				z-index: 1;
			}

			&:focus::after {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck-vertical-form > .ck-button:nth-last-child(2)::after {
	border-right: 1px solid var(--ck-color-base-border);
}

.ck.ck-responsive-form {
	padding: var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	@mixin ck-dir ltr {
		& > :not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& > :not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		padding: 0;
		width: calc(.8 * var(--ck-input-width));

		& .ck-labeled-field-view {
			margin: var(--ck-spacing-large) var(--ck-spacing-large) 0;

			& .ck-input-text {
				min-width: 0;
				width: 100%;
			}

			/* Let the long error messages wrap in the narrow form. */
			& .ck-labeled-field-view__error {
				white-space: normal;
			}
		}

		/* Styles for two last buttons in the form (save&cancel, edit&unlink, etc.). */
		& > .ck-button:nth-last-child(2) {
			&::after {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}

		& > .ck-button:nth-last-child(1),
		& > .ck-button:nth-last-child(2) {
			padding: var(--ck-spacing-standard);
			margin-top: var(--ck-spacing-large);
			border-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;

				&:last-of-type {
					border-right: 1px solid var(--ck-color-base-border);
				}
			}
		}
	}
}
`],sourceRoot:""}]);const D=_},6706:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-block-toolbar-button {
	position: absolute;
	z-index: var(--ck-z-default);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-block-toolbar-button: var(--ck-color-text);
	--ck-block-toolbar-button-size: var(--ck-font-size-normal);
}

.ck.ck-block-toolbar-button {
	color: var(--ck-color-block-toolbar-button);
	font-size: var(--ck-block-toolbar-size);
}
`],sourceRoot:""}]);const D=_},5571:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-dropdown__panel{min-width:auto}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-button>.ck-button__label{max-width:7em;width:auto}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eDoGD,CAvGA,qECOE,qCDgGF,CAvGA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAmGD,CAhGC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAaD,CAVC,0DAQC,eAAgB,CAHhB,QAAS,CAHT,UAOD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAMA,wEACC,cACD,CAEA,iFACC,aAAc,CACd,UACD,CAjGF,qCAqGE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-toolbar {
	@mixin ck-unselectable;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	& > .ck-toolbar__items {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		flex-grow: 1;

	}

	& .ck.ck-toolbar__separator {
		display: inline-block;

		/*
		 * A leading or trailing separator makes no sense (separates from nothing on one side).
		 * For instance, it can happen when toolbar items (also separators) are getting grouped one by one and
		 * moved to another toolbar in the dropdown.
		 */
		&:first-child,
		&:last-child {
			display: none;
		}
	}

	& .ck-toolbar__line-break {
		flex-basis: 100%;
	}

	&.ck-toolbar_grouping > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	&.ck-toolbar_vertical > .ck-toolbar__items {
		flex-direction: column;
	}

	&.ck-toolbar_floating > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		& > .ck-dropdown__button .ck-dropdown__arrow {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-toolbar {
	@mixin ck-rounded-corners;

	background: var(--ck-color-toolbar-background);
	padding: 0 var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);

	& .ck.ck-toolbar__separator {
		align-self: stretch;
		width: 1px;
		min-width: 1px;
		background: var(--ck-color-toolbar-border);

		/*
		 * These margins make the separators look better in balloon toolbars (when aligned with the "tip").
		 * See https://github.com/ckeditor/ckeditor5/issues/7493.
		 */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	& .ck-toolbar__line-break {
		height: 0;
	}

	& > .ck-toolbar__items {
		& > *:not(.ck-toolbar__line-break) {
			/* (#11) Separate toolbar items. */
			margin-right: var(--ck-spacing-small);
		}

		/* Don't display a separator after an empty items container, for instance,
		when all items were grouped */
		&:empty + .ck.ck-toolbar__separator {
			display: none;
		}
	}

	& > .ck-toolbar__items > *:not(.ck-toolbar__line-break),
	& > .ck.ck-toolbar__grouped-dropdown {
		/* Make sure items wrapped to the next line have v-spacing */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	&.ck-toolbar_vertical {
		/* Items in a vertical toolbar span the entire width. */
		padding: 0;

		/* Specificity matters here. See https://github.com/ckeditor/ckeditor5-theme-lark/issues/168. */
		& > .ck-toolbar__items > .ck {
			/* Items in a vertical toolbar should span the horizontal space. */
			width: 100%;

			/* Items in a vertical toolbar should have no margin. */
			margin: 0;

			/* Items in a vertical toolbar span the entire width so rounded corners are pointless. */
			border-radius: 0;
		}
	}

	&.ck-toolbar_compact {
		/* No spacing around items. */
		padding: 0;

		& > .ck-toolbar__items > * {
			/* Compact toolbar items have no spacing between them. */
			margin: 0;

			/* "Middle" children should have no rounded corners. */
			&:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
		}
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		/*
		 * Dropdown button has asymmetric padding to fit the arrow.
		 * This button has no arrow so let's revert that padding back to normal.
		 */
		& > .ck.ck-button.ck-dropdown__button {
			padding-left: var(--ck-spacing-tiny);
		}
	}

	/* A drop-down containing the nested toolbar with configured items. */
	& .ck-toolbar__nested-toolbar-dropdown {
		/* Prevent empty space in the panel when the dropdown label is visible and long but the toolbar has few items. */
		& > .ck-dropdown__panel {
			min-width: auto;
		}

		& > .ck-button > .ck-button__label {
			max-width: 7em;
			width: auto;
		}
	}

	@nest .ck-toolbar-container & {
		border: 0;
	}
}

/* stylelint-disable */

/*
 * Styles for RTL toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="rtl"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="rtl"] {
	& > .ck-toolbar__items > .ck {
		margin-right: 0;
	}

	&:not(.ck-toolbar_compact) > .ck-toolbar__items > .ck {
		/* (#11) Separate toolbar items. */
		margin-left: var(--ck-spacing-small);
	}

	& > .ck-toolbar__items > .ck:last-child {
		margin-left: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-left: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-left: var(--ck-spacing-small);
	}
}

/*
 * Styles for LTR toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="ltr"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="ltr"] {
	& > .ck-toolbar__items > .ck:last-child {
		margin-right: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-right: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-right: var(--ck-spacing-small);
	}
}

/* stylelint-enable */
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=_},9948:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck.ck-balloon-panel.ck-tooltip{--ck-balloon-border-width:0px;--ck-balloon-arrow-offset:0px;--ck-balloon-arrow-half-width:4px;--ck-balloon-arrow-height:4px;--ck-color-panel-background:var(--ck-color-tooltip-background);padding:0 var(--ck-spacing-medium);pointer-events:none;z-index:calc(var(--ck-z-modal) + 100)}.ck.ck-balloon-panel.ck-tooltip .ck-tooltip__text{color:var(--ck-color-tooltip-text);font-size:.9em;line-height:1.5}.ck.ck-balloon-panel.ck-tooltip{box-shadow:none}.ck.ck-balloon-panel.ck-tooltip:before{display:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css"],names:[],mappings:"AAKA,gCCGC,6BAA8B,CAC9B,6BAA8B,CAC9B,iCAAkC,CAClC,6BAA8B,CAC9B,8DAA+D,CAE/D,kCAAmC,CDPnC,mBAAoB,CAEpB,qCACD,CCMC,kDAGC,kCAAmC,CAFnC,cAAe,CACf,eAED,CAbD,gCAgBC,eAMD,CAHC,uCACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-balloon-panel.ck-tooltip {
	/* Keep tooltips transparent for any interactions. */
	pointer-events: none;

	z-index: calc( var(--ck-z-modal) + 100 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-balloon-panel.ck-tooltip {
	--ck-balloon-border-width: 0px;
	--ck-balloon-arrow-offset: 0px;
	--ck-balloon-arrow-half-width: 4px;
	--ck-balloon-arrow-height: 4px;
	--ck-color-panel-background: var(--ck-color-tooltip-background);

	padding: 0 var(--ck-spacing-medium);

	& .ck-tooltip__text {
		font-size: .9em;
		line-height: 1.5;
		color: var(--ck-color-tooltip-text);
	}

	/* Reset balloon panel styles */
	box-shadow: none;

	/* Hide the default shadow of the .ck-balloon-panel tip */
	&::before {
		display: none;
	}
}
`],sourceRoot:""}]);const D=_},6150:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck-hidden{display:none!important}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{box-sizing:border-box;height:auto;position:static;width:auto}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999)}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#ccced1;--ck-color-base-action:#53a336;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#2977ff;--ck-color-base-active-focus:#0d65ff;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:218,81.8%,56.9%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#cae1fc;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#f0f0f0;--ck-color-button-default-active-background:#f0f0f0;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#f0f7ff;--ck-color-button-on-hover-background:#dbecff;--ck-color-button-on-active-background:#dbecff;--ck-color-button-on-disabled-background:#f0f2f4;--ck-color-button-on-color:#2977ff;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#4d9d30;--ck-color-button-action-active-background:#4d9d30;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#939393;--ck-color-switch-button-off-hover-background:#7d7d7d;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#4d9d30;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:var(--ck-color-base-border);--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:var(--ck-color-base-border);--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-button-on-color);--ck-color-list-button-on-background-focus:var(--ck-color-button-on-color);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-background);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-color-highlight-background:#ff0;--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{word-wrap:break-word;background:transparent;border:0;margin:0;padding:0;text-decoration:none;transition:none;vertical-align:middle}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/globals/_hidden.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/globals/_reset.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/globals/_zindex.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/globals/_transition.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,2EAGC,qBAAsB,CAEtB,WAAY,CACZ,eAAgB,CAFhB,UAGD,CCPA,MACC,gBAAiB,CACjB,4CACD,CCAA,oDAEC,yBACD,CCNA,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAkD,CAClD,8BAAuD,CACvD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAsD,CACtD,oCAA4D,CAC5D,6BAAkD,CAIlD,mDAA4D,CAC5D,qEAA+E,CAC/E,qCAA4D,CAC5D,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAAiE,CACjE,mDAAkE,CAClE,yDAA8D,CAE9D,uCAA6D,CAC7D,6CAAoE,CACpE,8CAAoE,CACpE,gDAAiE,CACjE,kCAAyD,CAGzD,+DAAsE,CACtE,iDAAsE,CACtE,kDAAsE,CACtE,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA8D,CAC9D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAuE,CACvE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,2DAAoE,CACpE,mDAA6D,CAC7D,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,4DAAoE,CACpE,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,oEAA2E,CAC3E,0EAA+E,CAC/E,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CAIhE,oCAAwD,CCvGxD,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJuGD,CIjGA,2EAaC,oBAAqB,CANrB,sBAAuB,CADvB,QAAS,CAFT,QAAS,CACT,SAAU,CAGV,oBAAqB,CAErB,eAAgB,CADhB,qBAKD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCnFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which hides an element in DOM.
 */
.ck-hidden {
	/* Override selector specificity. Otherwise, all elements with some display
	style defined will override this one, which is not a desired result. */
	display: none !important;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	box-sizing: border-box;
	width: auto;
	height: auto;
	position: static;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-z-default: 1;
	--ck-z-modal: calc( var(--ck-z-default) + 999 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class that disables all transitions of the element and its children.
 */
.ck-transitions-disabled,
.ck-transitions-disabled * {
	transition: none !important;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-base-foreground: 								hsl(0, 0%, 98%);
	--ck-color-base-background: 								hsl(0, 0%, 100%);
	--ck-color-base-border: 									hsl(220, 6%, 81%);
	--ck-color-base-action: 									hsl(104, 50.2%, 42.5%);
	--ck-color-base-focus: 										hsl(209, 92%, 70%);
	--ck-color-base-text: 										hsl(0, 0%, 20%);
	--ck-color-base-active: 									hsl(218.1, 100%, 58%);
	--ck-color-base-active-focus:								hsl(218.2, 100%, 52.5%);
	--ck-color-base-error:										hsl(15, 100%, 43%);

	/* -- Generic colors ------------------------------------------------------------------------ */

	--ck-color-focus-border-coordinates: 						218, 81.8%, 56.9%;
	--ck-color-focus-border: 									hsl(var(--ck-color-focus-border-coordinates));
	--ck-color-focus-outer-shadow:								hsl(212.4, 89.3%, 89%);
	--ck-color-focus-disabled-shadow:							hsla(209, 90%, 72%,.3);
	--ck-color-focus-error-shadow:								hsla(9,100%,56%,.3);
	--ck-color-text: 											var(--ck-color-base-text);
	--ck-color-shadow-drop: 									hsla(0, 0%, 0%, 0.15);
	--ck-color-shadow-drop-active:								hsla(0, 0%, 0%, 0.2);
	--ck-color-shadow-inner: 									hsla(0, 0%, 0%, 0.1);

	/* -- Buttons ------------------------------------------------------------------------------- */

	--ck-color-button-default-background: 						transparent;
	--ck-color-button-default-hover-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-active-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-disabled-background: 				transparent;

	--ck-color-button-on-background: 							hsl(212, 100%, 97.1%);
	--ck-color-button-on-hover-background: 						hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-active-background: 					hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-disabled-background: 					hsl(211, 15%, 95%);
	--ck-color-button-on-color:									hsl(218.1, 100%, 58%);


	--ck-color-button-action-background: 						var(--ck-color-base-action);
	--ck-color-button-action-hover-background: 					hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-active-background: 				hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-disabled-background: 				hsl(104, 44%, 58%);
	--ck-color-button-action-text: 								var(--ck-color-base-background);

	--ck-color-button-save: 									hsl(120, 100%, 27%);
	--ck-color-button-cancel: 									hsl(15, 100%, 43%);

	--ck-color-switch-button-off-background:					hsl(0, 0%, 57.6%);
	--ck-color-switch-button-off-hover-background:				hsl(0, 0%, 49%);
	--ck-color-switch-button-on-background:						var(--ck-color-button-action-background);
	--ck-color-switch-button-on-hover-background:				hsl(104, 53.2%, 40.2%);
	--ck-color-switch-button-inner-background:					var(--ck-color-base-background);
	--ck-color-switch-button-inner-shadow:						hsla(0, 0%, 0%, 0.1);

	/* -- Dropdown ------------------------------------------------------------------------------ */

	--ck-color-dropdown-panel-background: 						var(--ck-color-base-background);
	--ck-color-dropdown-panel-border: 							var(--ck-color-base-border);

	/* -- Input --------------------------------------------------------------------------------- */

	--ck-color-input-background: 								var(--ck-color-base-background);
	--ck-color-input-border: 									var(--ck-color-base-border);
	--ck-color-input-error-border:								var(--ck-color-base-error);
	--ck-color-input-text: 										var(--ck-color-base-text);
	--ck-color-input-disabled-background: 						hsl(0, 0%, 95%);
	--ck-color-input-disabled-border: 							var(--ck-color-base-border);
	--ck-color-input-disabled-text: 							hsl(0, 0%, 46%);

	/* -- List ---------------------------------------------------------------------------------- */

	--ck-color-list-background: 								var(--ck-color-base-background);
	--ck-color-list-button-hover-background: 					var(--ck-color-button-default-hover-background);
	--ck-color-list-button-on-background: 						var(--ck-color-button-on-color);
	--ck-color-list-button-on-background-focus: 				var(--ck-color-button-on-color);
	--ck-color-list-button-on-text:								var(--ck-color-base-background);

	/* -- Panel --------------------------------------------------------------------------------- */

	--ck-color-panel-background: 								var(--ck-color-base-background);
	--ck-color-panel-border: 									var(--ck-color-base-border);

	/* -- Toolbar ------------------------------------------------------------------------------- */

	--ck-color-toolbar-background: 								var(--ck-color-base-background);
	--ck-color-toolbar-border: 									var(--ck-color-base-border);

	/* -- Tooltip ------------------------------------------------------------------------------- */

	--ck-color-tooltip-background: 								var(--ck-color-base-text);
	--ck-color-tooltip-text: 									var(--ck-color-base-background);

	/* -- Engine -------------------------------------------------------------------------------- */

	--ck-color-engine-placeholder-text: 						hsl(0, 0%, 44%);

	/* -- Upload -------------------------------------------------------------------------------- */

	--ck-color-upload-bar-background:		 					hsl(209, 92%, 70%);

	/* -- Link -------------------------------------------------------------------------------- */

	--ck-color-link-default:									hsl(240, 100%, 47%);
	--ck-color-link-selected-background:						hsla(201, 100%, 56%, 0.1);
	--ck-color-link-fake-selection:								hsla(201, 100%, 56%, 0.3);

	/* -- Search result highlight ---------------------------------------------------------------- */

	--ck-color-highlight-background:							hsl(60, 100%, 50%)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * An opacity value of disabled UI item.
	 */
	--ck-disabled-opacity: .5;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * The geometry of the of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow-geometry: 0 0 0 3px;

	/**
	 * A visual style of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);

	/**
	 * A visual style of focused element's outer shadow (when disabled).
	 */
	--ck-focus-disabled-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);

	/**
	 * A visual style of focused element's outer shadow (when has errors).
	 */
	--ck-focus-error-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);

	/**
	 * A visual style of focused element's border or outline.
	 */
	--ck-focus-ring: 1px solid var(--ck-color-focus-border);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-font-size-base: 13px;
	--ck-line-height-base: 1.84615;
	--ck-font-face: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;

	--ck-font-size-tiny: 0.7em;
	--ck-font-size-small: 0.75em;
	--ck-font-size-normal: 1em;
	--ck-font-size-big: 1.4em;
	--ck-font-size-large: 1.8em;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* This is super-important. This is **manually** adjusted so a button without an icon
	is never smaller than a button with icon, additionally making sure that text-less buttons
	are perfect squares. The value is also shared by other components which should stay "in-line"
	with buttons. */
	--ck-ui-component-min-height: 2.3em;
}

/**
 * Resets an element, ignoring its children.
 */
.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* Do not include inheritable rules here. */
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	text-decoration: none;
	vertical-align: middle;
	transition: none;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/105 */
	word-wrap: break-word;
}

/**
 * Resets an element AND its children.
 */
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* These are rule inherited by all children elements. */
	border-collapse: collapse;
	font: normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);
	color: var(--ck-color-text);
	text-align: left;
	white-space: nowrap;
	cursor: auto;
	float: none;
}

.ck-reset_all {
	& .ck-rtl *:not(.ck-reset_all-excluded *) {
		text-align: right;
	}

	& iframe:not(.ck-reset_all-excluded *) {
		/* For IE */
		vertical-align: inherit;
	}

	& textarea:not(.ck-reset_all-excluded *) {
		white-space: pre-wrap;
	}

	& textarea:not(.ck-reset_all-excluded *),
	& input[type="text"]:not(.ck-reset_all-excluded *),
	& input[type="password"]:not(.ck-reset_all-excluded *) {
		cursor: text;
	}

	& textarea[disabled]:not(.ck-reset_all-excluded *),
	& input[type="text"][disabled]:not(.ck-reset_all-excluded *),
	& input[type="password"][disabled]:not(.ck-reset_all-excluded *) {
		cursor: default;
	}

	& fieldset:not(.ck-reset_all-excluded *) {
		padding: 10px;
		border: 2px groove hsl(255, 7%, 88%);
	}

	& button:not(.ck-reset_all-excluded *)::-moz-focus-inner {
		/* See http://stackoverflow.com/questions/5517744/remove-extra-button-spacing-padding-in-firefox */
		padding: 0;
		border: 0
	}
}

/**
 * Default UI rules for RTL languages.
 */
.ck[dir="rtl"],
.ck[dir="rtl"] .ck {
	text-align: right;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Default border-radius value.
 */
:root{
	--ck-border-radius: 2px;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * A visual style of element's inner shadow (i.e. input).
	 */
	--ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;

	/**
	 * A visual style of element's drop shadow (i.e. panel).
	 */
	--ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);

	/**
	 * A visual style of element's active shadow (i.e. comment or suggestion).
	 */
	--ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-spacing-unit: 						0.6em;
	--ck-spacing-large: 					calc(var(--ck-spacing-unit) * 1.5);
	--ck-spacing-standard: 					var(--ck-spacing-unit);
	--ck-spacing-medium: 					calc(var(--ck-spacing-unit) * 0.8);
	--ck-spacing-small: 					calc(var(--ck-spacing-unit) * 0.5);
	--ck-spacing-tiny: 						calc(var(--ck-spacing-unit) * 0.3);
	--ck-spacing-extra-tiny: 				calc(var(--ck-spacing-unit) * 0.16);
}
`],sourceRoot:""}]);const D=_},6507:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background);border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-widget/theme/widget.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CCjFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAUD,CARC,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAWD,CAPC,yGAKC,iEAAkE,CCnCnE,2BAA2B,CCF3B,qCAA8B,CDC9B,YDqCA,CAIA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAgCD,CAnBC,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAWD,CANC,kHACC,SAAU,CAGV,+DACD,CAID,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-resizer: var(--ck-color-focus-border);
	--ck-color-resizer-tooltip-background: hsl(0, 0%, 15%);
	--ck-color-resizer-tooltip-text: hsl(0, 0%, 95%);

	--ck-resizer-border-radius: var(--ck-border-radius);
	--ck-resizer-tooltip-offset: 10px;
	--ck-resizer-tooltip-height: calc(var(--ck-spacing-small) * 2 + 10px);
}

.ck .ck-widget {
	/* This is neccessary for type around UI to be positioned properly. */
	position: relative;
}

.ck .ck-widget.ck-widget_with-selection-handle {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;

	& .ck-widget__selection-handle {
		position: absolute;

		& .ck-icon {
			/* Make sure the icon in not a subject to font-size or line-height to avoid
			unnecessary spacing around it. */
			display: block;
		}
	}

	/* Show the selection handle on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		visibility: visible;
	}

	/* Show the selection handle when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected > .ck-widget__selection-handle {
		visibility: visible;
	}
}

.ck .ck-size-view {
	background: var(--ck-color-resizer-tooltip-background);
	color: var(--ck-color-resizer-tooltip-text);
	border: 1px solid var(--ck-color-resizer-tooltip-text);
	border-radius: var(--ck-resizer-border-radius);
	font-size: var(--ck-font-size-tiny);
	display: block;
	padding: 0 var(--ck-spacing-small);
	height: var(--ck-resizer-tooltip-height);
	line-height: var(--ck-resizer-tooltip-height);

	&.ck-orientation-top-left,
	&.ck-orientation-top-right,
	&.ck-orientation-bottom-right,
	&.ck-orientation-bottom-left,
	&.ck-orientation-above-center {
		position: absolute;
	}

	&.ck-orientation-top-left {
		top: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-top-right {
		top: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-right {
		bottom: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-left {
		bottom: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	/* Class applied if the widget is too small to contain the size label */
	&.ck-orientation-above-center {
		top: calc(var(--ck-resizer-tooltip-height) * -1);
		left: 50%;
		transform: translate(-50%);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";

:root {
	--ck-widget-outline-thickness: 3px;
	--ck-widget-handler-icon-size: 16px;
	--ck-widget-handler-animation-duration: 200ms;
	--ck-widget-handler-animation-curve: ease;

	--ck-color-widget-blurred-border: hsl(0, 0%, 87%);
	--ck-color-widget-hover-border: hsl(43, 100%, 62%);
	--ck-color-widget-editable-focus-background: var(--ck-color-base-background);
	--ck-color-widget-drag-handler-icon-color: var(--ck-color-base-background);
}

.ck .ck-widget {
	outline-width: var(--ck-widget-outline-thickness);
	outline-style: solid;
	outline-color: transparent;
	transition: outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border);
	}

	&:hover {
		outline-color: var(--ck-color-widget-hover-border);
	}
}

.ck .ck-editor__nested-editable {
	border: 1px solid transparent;

	/* The :focus style is applied before .ck-editor__nested-editable_focused class is rendered in the view.
	These styles show a different border for a blink of an eye, so \`:focus\` need to have same styles applied. */
	&.ck-editor__nested-editable_focused,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);

		background-color: var(--ck-color-widget-editable-focus-background);
	}
}

.ck .ck-widget.ck-widget_with-selection-handle {
	& .ck-widget__selection-handle {
		padding: 4px;
		box-sizing: border-box;

		/* Background and opacity will be animated as the handler shows up or the widget gets selected. */
		background-color: transparent;
		opacity: 0;

		/* Transition:
		   * background-color for the .ck-widget_selected state change,
		   * visibility for hiding the handler,
		   * opacity for the proper look of the icon when the handler disappears. */
		transition:
			background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		/* Make only top corners round. */
		border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;

		/* Place the drag handler outside the widget wrapper. */
		transform: translateY(-100%);
		left: calc(0px - var(--ck-widget-outline-thickness));
		top: 0;

		& .ck-icon {
			/* Make sure the dimensions of the icon are independent of the fon-size of the content. */
			width: var(--ck-widget-handler-icon-size);
			height: var(--ck-widget-handler-icon-size);
			color: var(--ck-color-widget-drag-handler-icon-color);

			/* The "selected" part of the icon is invisible by default */
			& .ck-icon__selected-indicator {
				opacity: 0;

				/* Note: The animation is longer on purpose. Simply feels better. */
				transition: opacity 300ms var(--ck-widget-handler-animation-curve);
			}
		}

		/* Advertise using the look of the icon that once clicked the handler, the widget will be selected. */
		&:hover .ck-icon .ck-icon__selected-indicator {
			opacity: 1;
		}
	}

	/* Show the selection handler on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		opacity: 1;
		background-color: var(--ck-color-widget-hover-border);
	}

	/* Show the selection handler when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		& > .ck-widget__selection-handle {
			opacity: 1;
			background-color: var(--ck-color-focus-border);

			/* When the widget is selected, notify the user using the proper look of the icon. */
			& .ck-icon .ck-icon__selected-indicator {
				opacity: 1;
			}
		}
	}
}

/* In a RTL environment, align the selection handler to the right side of the widget */
/* stylelint-disable-next-line no-descending-specificity */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
	left: auto;
	right: calc(0px - var(--ck-widget-outline-thickness));
}

/* https://github.com/ckeditor/ckeditor5/issues/6415 */
.ck.ck-editor__editable.ck-read-only .ck-widget {
	/* Prevent the :hover outline from showing up because of the used outline-color transition. */
	transition: none;

	&:not(.ck-widget_selected) {
		/* Disable visual effects of hover/active widget when CKEditor is in readOnly mode.
		 * See: https://github.com/ckeditor/ckeditor5/issues/1261
		 *
		 * Leave the unit because this custom property is used in calc() by other features.
		 * See: https://github.com/ckeditor/ckeditor5/issues/6775
		 */
		--ck-widget-outline-thickness: 0px;
	}

	&.ck-widget_with-selection-handle {
		& .ck-widget__selection-handle,
		& .ck-widget__selection-handle:hover {
			background: var(--ck-color-widget-blurred-border);
		}
	}
}

/* Style the widget when it's selected but the editable it belongs to lost focus. */
/* stylelint-disable-next-line no-descending-specificity */
.ck.ck-editor__editable.ck-blurred .ck-widget {
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline-color: var(--ck-color-widget-blurred-border);

		&.ck-widget_with-selection-handle {
			& > .ck-widget__selection-handle,
			& > .ck-widget__selection-handle:hover {
				background: var(--ck-color-widget-blurred-border);
			}
		}
	}
}

.ck.ck-editor__editable > .ck-widget.ck-widget_with-selection-handle:first-child,
.ck.ck-editor__editable blockquote > .ck-widget.ck-widget_with-selection-handle:first-child {
	/* Do not crop selection handler if a widget is a first-child in the blockquote or in the root editable.
	In fact, anything with overflow: hidden.
	https://github.com/ckeditor/ckeditor5-block-quote/issues/28
	https://github.com/ckeditor/ckeditor5-widget/issues/44
	https://github.com/ckeditor/ckeditor5-widget/issues/66 */
	margin-top: calc(1em + var(--ck-widget-handler-icon-size));
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=_},2263:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-widget/theme/widgetresize.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget_with-resizer {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;
}

.ck .ck-widget__resizer {
	display: none;
	position: absolute;

	/* The wrapper itself should not interfere with the pointer device, only the handles should. */
	pointer-events: none;

	left: 0;
	top: 0;
}

.ck-focused .ck-widget_with-resizer.ck-widget_selected {
	& > .ck-widget__resizer {
		display: block;
	}
}

.ck .ck-widget__resizer__handle {
	position: absolute;

	/* Resizers are the only UI elements that should interfere with a pointer device. */
	pointer-events: all;

	&.ck-widget__resizer__handle-top-left,
	&.ck-widget__resizer__handle-bottom-right {
		cursor: nwse-resize;
	}

	&.ck-widget__resizer__handle-top-right,
	&.ck-widget__resizer__handle-bottom-left {
		cursor: nesw-resize;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-resizer-size: 10px;

	/* Set the resizer with a 50% offset. */
	--ck-resizer-offset: calc( ( var(--ck-resizer-size) / -2 ) - 2px);
	--ck-resizer-border-width: 1px;
}

.ck .ck-widget__resizer {
	outline: 1px solid var(--ck-color-resizer);
}

.ck .ck-widget__resizer__handle {
	width: var(--ck-resizer-size);
	height: var(--ck-resizer-size);
	background: var(--ck-color-focus-border);
	border: var(--ck-resizer-border-width) solid hsl(0, 0%, 100%);
	border-radius: var(--ck-resizer-border-radius);

	&.ck-widget__resizer__handle-top-left {
		top: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-top-right {
		top: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-right {
		bottom: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-left {
		bottom: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}
}
`],sourceRoot:""}]);const D=_},5137:(b,v,g)=>{g.d(v,{Z:()=>D});var A=g(4015),x=g.n(A),y=g(3645),E=g.n(y),_=E()(x());_.push([b.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-widget/theme/widgettypearound.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAkDD,CA1CC,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAoBD,CAdC,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DAcD,CARE,kEACC,oDACD,CAEA,8DACC,wDACD,CAUF,uKAvED,SAAU,CACV,mBAwEC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAlJD,SAAU,CACV,mBAmJC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAlMF,SAAU,CACV,mBAmME,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		display: block;
		position: absolute;
		overflow: hidden;
		z-index: var(--ck-z-default);

		& svg {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: calc(var(--ck-z-default) + 2);
		}

		&.ck-widget__type-around__button_before {
			/* Place it in the middle of the outline */
			top: calc(-0.5 * var(--ck-widget-outline-thickness));
			left: min(10%, 30px);

			transform: translateY(-50%);
		}

		&.ck-widget__type-around__button_after {
			/* Place it in the middle of the outline */
			bottom: calc(-0.5 * var(--ck-widget-outline-thickness));
			right: min(10%, 30px);

			transform: translateY(50%);
		}
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		&::after {
			content: "";
			display: block;
			position: absolute;
			top: 1px;
			left: 1px;
			z-index: calc(var(--ck-z-default) + 1);
		}
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
	}

	/*
	 * When the widget is hovered the "fake caret" would normally be narrower than the
	 * extra outline displayed around the widget. Let's extend the "fake caret" to match
	 * the full width of the widget.
	 */
	&:hover > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		left: calc( -1 * var(--ck-widget-outline-thickness) );
		right: calc( -1 * var(--ck-widget-outline-thickness) );
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed before the widget (backward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_before > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		top: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed after the widget (forward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_after > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		bottom: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}
}

/*
 * Integration with the read-only mode of the editor.
 */
.ck.ck-editor__editable.ck-read-only .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the restricted editing mode (feature) of the editor.
 */
.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the #isEnabled property of the WidgetTypeAround plugin.
 */
.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-widget-type-around-button-size: 20px;
	--ck-color-widget-type-around-button-active: var(--ck-color-focus-border);
	--ck-color-widget-type-around-button-hover: var(--ck-color-widget-hover-border);
	--ck-color-widget-type-around-button-blurred-editable: var(--ck-color-widget-blurred-border);
	--ck-color-widget-type-around-button-radar-start-alpha: 0;
	--ck-color-widget-type-around-button-radar-end-alpha: .3;
	--ck-color-widget-type-around-button-icon: var(--ck-color-base-background);
}

@define-mixin ck-widget-type-around-button-visible {
	opacity: 1;
	pointer-events: auto;
}

@define-mixin ck-widget-type-around-button-hidden {
	opacity: 0;
	pointer-events: none;
}

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		width: var(--ck-widget-type-around-button-size);
		height: var(--ck-widget-type-around-button-size);
		background: var(--ck-color-widget-type-around-button);
		border-radius: 100px;
		transition: opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		@mixin ck-widget-type-around-button-hidden;

		& svg {
			width: 10px;
			height: 8px;
			transform: translate(-50%,-50%);
			transition: transform .5s ease;
			margin-top: 1px;

			& * {
				stroke-dasharray: 10;
				stroke-dashoffset: 0;

				fill: none;
				stroke: var(--ck-color-widget-type-around-button-icon);
				stroke-width: 1.5px;
				stroke-linecap: round;
				stroke-linejoin: round;
			}

			& line {
				stroke-dasharray: 7;
			}
		}

		&:hover {
			/*
			 * Display the "sonar" around the button when hovered.
			 */
			animation: ck-widget-type-around-button-sonar 1s ease infinite;

			/*
			 * Animate active button's icon.
			 */
			& svg {
				& polyline {
					animation: ck-widget-type-around-arrow-dash 2s linear;
				}

				& line {
					animation: ck-widget-type-around-arrow-tip-dash 2s linear;
				}
			}
		}
	}

	/*
	 * Show type around buttons when the widget gets selected or being hovered.
	 */
	&.ck-widget_selected,
	&:hover {
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-visible;
		}
	}

	/*
	 * Styles for the buttons when the widget is NOT selected (but the buttons are visible
	 * and still can be hovered).
	 */
	&:not(.ck-widget_selected) > .ck-widget__type-around > .ck-widget__type-around__button {
		background: var(--ck-color-widget-type-around-button-hover);
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		background: var(--ck-color-widget-type-around-button-active);

		&::after {
			width: calc(var(--ck-widget-type-around-button-size) - 2px);
			height: calc(var(--ck-widget-type-around-button-size) - 2px);
			border-radius: 100px;
			background: linear-gradient(135deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,.3) 100%);
		}
	}

	/*
	 * Styles for the "before" button when the widget has a selection handle. Because some space
	 * is consumed by the handle, the button must be moved slightly to the right to let it breathe.
	 */
	&.ck-widget_with-selection-handle > .ck-widget__type-around > .ck-widget__type-around__button_before {
		margin-left: 20px;
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& .ck-widget__type-around__fake-caret {
		pointer-events: none;
		height: 1px;
		animation: ck-widget-type-around-fake-caret-pulse linear 1s infinite normal forwards;

		/*
		 * The semi-transparent-outline+background combo improves the contrast
		 * when the background underneath the fake caret is dark.
		 */
		outline: solid 1px hsla(0, 0%, 100%, .5);
		background: var(--ck-color-base-text);
	}

	/*
	 * Styles of the widget when the "fake caret" is blinking (e.g. upon keyboard navigation).
	 * Despite the widget being physically selected in the model, its outline should disappear.
	 */
	&.ck-widget_selected {
		&.ck-widget_type-around_show-fake-caret_before,
		&.ck-widget_type-around_show-fake-caret_after {
			outline-color: transparent;
		}
	}

	&.ck-widget_type-around_show-fake-caret_before,
	&.ck-widget_type-around_show-fake-caret_after {
		/*
		 * When the "fake caret" is visible we simulate that the widget is not selected
		 * (despite being physically selected), so the outline color should be for the
		 * unselected widget.
		 */
		&.ck-widget_selected:hover {
			outline-color: var(--ck-color-widget-hover-border);
		}

		/*
		 * Styles of the type around buttons when the "fake caret" is blinking (e.g. upon keyboard navigation).
		 * In this state, the type around buttons would collide with the fake carets so they should disappear.
		 */
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-hidden;
		}

		/*
		 * Fake horizontal caret integration with the selection handle. When the caret is visible, simply
		 * hide the handle because it intersects with the caret (and does not make much sense anyway).
		 */
		&.ck-widget_with-selection-handle {
			&.ck-widget_selected,
			&.ck-widget_selected:hover {
				& > .ck-widget__selection-handle {
					opacity: 0
				}
			}
		}

		/*
		 * Fake horizontal caret integration with the resize UI. When the caret is visible, simply
		 * hide the resize UI because it creates too much noise. It can be visible when the user
		 * hovers the widget, though.
		 */
		&.ck-widget_selected.ck-widget_with-resizer > .ck-widget__resizer {
			opacity: 0
		}
	}
}

/*
 * Styles for the "before" button when the widget has a selection handle in an RTL environment.
 * The selection handler is aligned to the right side of the widget so there is no need to create
 * additional space for it next to the "before" button.
 */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around > .ck-widget__type-around__button_before {
	margin-left: 0;
	margin-right: 20px;
}

/*
 * Hide type around buttons when the widget is selected as a child of a selected
 * nested editable (e.g. mulit-cell table selection).
 *
 * See https://github.com/ckeditor/ckeditor5/issues/7263.
 */
.ck-editor__nested-editable.ck-editor__editable_selected {
	& .ck-widget {
		&.ck-widget_selected,
		&:hover {
			& > .ck-widget__type-around > .ck-widget__type-around__button {
				@mixin ck-widget-type-around-button-hidden;
			}
		}
	}
}

/*
 * Styles for the buttons when the widget is selected but the user clicked outside of the editor (blurred the editor).
 */
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button:not(:hover) {
	background: var(--ck-color-widget-type-around-button-blurred-editable);

	& svg * {
		stroke: hsl(0,0%,60%);
	}
}

@keyframes ck-widget-type-around-arrow-dash {
	0% {
		stroke-dashoffset: 10;
	}
	20%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-arrow-tip-dash {
	0%, 20% {
		stroke-dashoffset: 7;
	}
	40%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-button-sonar {
	0% {
		box-shadow: 0 0 0 0 hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
	50% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-end-alpha));
	}
	100% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
}

@keyframes ck-widget-type-around-fake-caret-pulse {
	0% {
		opacity: 1;
	}
	49% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	99% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`],sourceRoot:""}]);const D=_},3645:b=>{b.exports=function(v){var g=[];return g.toString=function(){return this.map(function(x){var y=v(x);return x[2]?"@media ".concat(x[2]," {").concat(y,"}"):y}).join("")},g.i=function(A,x,y){typeof A=="string"&&(A=[[null,A,""]]);var E={};if(y)for(var _=0;_<this.length;_++){var D=this[_][0];D!=null&&(E[D]=!0)}for(var O=0;O<A.length;O++){var Q=[].concat(A[O]);y&&E[Q[0]]||(x&&(Q[2]?Q[2]="".concat(x," and ").concat(Q[2]):Q[2]=x),g.push(Q))}},g}},4015:b=>{function v(_,D){return E(_)||y(_,D)||A(_,D)||g()}function g(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function A(_,D){if(_){if(typeof _=="string")return x(_,D);var O=Object.prototype.toString.call(_).slice(8,-1);if(O==="Object"&&_.constructor&&(O=_.constructor.name),O==="Map"||O==="Set")return Array.from(_);if(O==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O))return x(_,D)}}function x(_,D){(D==null||D>_.length)&&(D=_.length);for(var O=0,Q=new Array(D);O<D;O++)Q[O]=_[O];return Q}function y(_,D){var O=_&&(typeof Symbol<"u"&&_[Symbol.iterator]||_["@@iterator"]);if(O!=null){var Q=[],N=!0,L=!1,R,F;try{for(O=O.call(_);!(N=(R=O.next()).done)&&(Q.push(R.value),!(D&&Q.length===D));N=!0);}catch(q){L=!0,F=q}finally{try{!N&&O.return!=null&&O.return()}finally{if(L)throw F}}return Q}}function E(_){if(Array.isArray(_))return _}b.exports=function(D){var O=v(D,4),Q=O[1],N=O[3];if(!N)return Q;if(typeof btoa=="function"){var L=btoa(unescape(encodeURIComponent(JSON.stringify(N)))),R="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(L),F="/*# ".concat(R," */"),q=N.sources.map(function($){return"/*# sourceURL=".concat(N.sourceRoot||"").concat($," */")});return[Q].concat(q).concat([F]).join(`
`)}return[Q].join(`
`)}},3379:(b,v,g)=>{var A=function(){var U;return function(){return typeof U>"u"&&(U=Boolean(window&&document&&document.all&&!window.atob)),U}}(),x=function(){var U={};return function(ee){if(typeof U[ee]>"u"){var Y=document.querySelector(ee);if(window.HTMLIFrameElement&&Y instanceof window.HTMLIFrameElement)try{Y=Y.contentDocument.head}catch{Y=null}U[ee]=Y}return U[ee]}}(),y=[];function E($){for(var U=-1,K=0;K<y.length;K++)if(y[K].identifier===$){U=K;break}return U}function _($,U){for(var K={},ee=[],Y=0;Y<$.length;Y++){var ce=$[Y],be=U.base?ce[0]+U.base:ce[0],ge=K[be]||0,we="".concat(be," ").concat(ge);K[be]=ge+1;var _t=E(we),Me={css:ce[1],media:ce[2],sourceMap:ce[3]};_t!==-1?(y[_t].references++,y[_t].updater(Me)):y.push({identifier:we,updater:q(Me,U),references:1}),ee.push(we)}return ee}function D($){var U=document.createElement("style"),K=$.attributes||{};if(typeof K.nonce>"u"){var ee=g.nc;ee&&(K.nonce=ee)}if(Object.keys(K).forEach(function(ce){U.setAttribute(ce,K[ce])}),typeof $.insert=="function")$.insert(U);else{var Y=x($.insert||"head");if(!Y)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");Y.appendChild(U)}return U}function O($){if($.parentNode===null)return!1;$.parentNode.removeChild($)}var Q=function(){var U=[];return function(ee,Y){return U[ee]=Y,U.filter(Boolean).join(`
`)}}();function N($,U,K,ee){var Y=K?"":ee.media?"@media ".concat(ee.media," {").concat(ee.css,"}"):ee.css;if($.styleSheet)$.styleSheet.cssText=Q(U,Y);else{var ce=document.createTextNode(Y),be=$.childNodes;be[U]&&$.removeChild(be[U]),be.length?$.insertBefore(ce,be[U]):$.appendChild(ce)}}function L($,U,K){var ee=K.css,Y=K.media,ce=K.sourceMap;if(Y?$.setAttribute("media",Y):$.removeAttribute("media"),ce&&typeof btoa<"u"&&(ee+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(ce))))," */")),$.styleSheet)$.styleSheet.cssText=ee;else{for(;$.firstChild;)$.removeChild($.firstChild);$.appendChild(document.createTextNode(ee))}}var R=null,F=0;function q($,U){var K,ee,Y;if(U.singleton){var ce=F++;K=R||(R=D(U)),ee=N.bind(null,K,ce,!1),Y=N.bind(null,K,ce,!0)}else K=D(U),ee=L.bind(null,K,U),Y=function(){O(K)};return ee($),function(ge){if(ge){if(ge.css===$.css&&ge.media===$.media&&ge.sourceMap===$.sourceMap)return;ee($=ge)}else Y()}}b.exports=function($,U){U=U||{},!U.singleton&&typeof U.singleton!="boolean"&&(U.singleton=A()),$=$||[];var K=_($,U);return function(Y){if(Y=Y||[],Object.prototype.toString.call(Y)==="[object Array]"){for(var ce=0;ce<K.length;ce++){var be=K[ce],ge=E(be);y[ge].references--}for(var we=_(Y,U),_t=0;_t<K.length;_t++){var Me=K[_t],Vt=E(Me);y[Vt].references===0&&(y[Vt].updater(),y.splice(Vt,1))}K=we}}}}},h={};function f(b){var v=h[b];if(v!==void 0)return v.exports;var g=h[b]={id:b,exports:{}};return d[b](g,g.exports,f),g.exports}f.n=b=>{var v=b&&b.__esModule?()=>b.default:()=>b;return f.d(v,{a:v}),v},f.d=(b,v)=>{for(var g in v)f.o(v,g)&&!f.o(b,g)&&Object.defineProperty(b,g,{enumerable:!0,get:v[g]})},f.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),f.o=(b,v)=>Object.prototype.hasOwnProperty.call(b,v),f.nc=void 0;var k={};return(()=>{f.d(k,{default:()=>uQ});function b(){try{return navigator.userAgent.toLowerCase()}catch{return""}}const v=b(),A={isMac:x(v),isWindows:y(v),isGecko:E(v),isSafari:_(v),isiOS:D(v),isAndroid:O(v),isBlink:Q(v),features:{isRegExpUnicodePropertySupported:N()}};function x(i){return i.indexOf("macintosh")>-1}function y(i){return i.indexOf("windows")>-1}function E(i){return!!i.match(/gecko\/\d+/)}function _(i){return i.indexOf(" applewebkit/")>-1&&i.indexOf("chrome")===-1}function D(i){return!!i.match(/iphone|ipad/i)||x(i)&&navigator.maxTouchPoints>0}function O(i){return i.indexOf("android")>-1}function Q(i){return i.indexOf("chrome/")>-1&&i.indexOf("edge/")<0}function N(){let i=!1;try{i="ć".search(new RegExp("[\\p{L}]","u"))===0}catch{}return i}function L(i,e,t,n){t=t||function(u,m){return u===m};const o=Array.isArray(i)?i:Array.prototype.slice.call(i),r=Array.isArray(e)?e:Array.prototype.slice.call(e),l=R(o,r,t);return n?U(l,r.length):$(r,l)}function R(i,e,t){const n=F(i,e,t);if(n===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const o=q(i,n),r=q(e,n),l=F(o,r,t),c=i.length-l,u=e.length-l;return{firstIndex:n,lastIndexOld:c,lastIndexNew:u}}function F(i,e,t){for(let n=0;n<Math.max(i.length,e.length);n++)if(i[n]===void 0||e[n]===void 0||!t(i[n],e[n]))return n;return-1}function q(i,e){return i.slice(e).reverse()}function $(i,e){const t=[],{firstIndex:n,lastIndexOld:o,lastIndexNew:r}=e;return r-n>0&&t.push({index:n,type:"insert",values:i.slice(n,r)}),o-n>0&&t.push({index:n+(r-n),type:"delete",howMany:o-n}),t}function U(i,e){const{firstIndex:t,lastIndexOld:n,lastIndexNew:o}=i;if(t===-1)return Array(e).fill("equal");let r=[];return t>0&&(r=r.concat(Array(t).fill("equal"))),o-t>0&&(r=r.concat(Array(o-t).fill("insert"))),n-t>0&&(r=r.concat(Array(n-t).fill("delete"))),o<e&&(r=r.concat(Array(e-o).fill("equal"))),r}function K(i,e,t){t=t||function(P,V){return P===V};const n=i.length,o=e.length;if(n>200||o>200||n+o>300)return K.fastDiff(i,e,t,!0);let r,l;if(o<n){const P=i;i=e,e=P,r="delete",l="insert"}else r="insert",l="delete";const c=i.length,u=e.length,m=u-c,p={},w={};function C(P){const V=(w[P-1]!==void 0?w[P-1]:-1)+1,G=w[P+1]!==void 0?w[P+1]:-1,J=V>G?-1:1;p[P+J]&&(p[P]=p[P+J].slice(0)),p[P]||(p[P]=[]),p[P].push(V>G?r:l);let xe=Math.max(V,G),Te=xe-P;for(;Te<c&&xe<u&&t(i[Te],e[xe]);)Te++,xe++,p[P].push("equal");return xe}let I=0,B;do{for(B=-I;B<m;B++)w[B]=C(B);for(B=m+I;B>m;B--)w[B]=C(B);w[m]=C(m),I++}while(w[m]!==u);return p[m].slice(1)}K.fastDiff=L;function ee(i,...e){e.forEach(t=>{const n=Object.getOwnPropertyNames(t),o=Object.getOwnPropertySymbols(t);n.concat(o).forEach(r=>{if(r in i.prototype||typeof t=="function"&&(r=="length"||r=="name"||r=="prototype"))return;const l=Object.getOwnPropertyDescriptor(t,r);l.enumerable=!1,Object.defineProperty(i.prototype,r,l)})})}function Y(){return function i(){i.called=!0}}const ce=Y;class be{constructor(e,t){this.source=e,this.name=t,this.path=[],this.stop=ce(),this.off=ce()}}const ge=new Array(256).fill("").map((i,e)=>("0"+e.toString(16)).slice(-2));function we(){const i=Math.random()*4294967296>>>0,e=Math.random()*4294967296>>>0,t=Math.random()*4294967296>>>0,n=Math.random()*4294967296>>>0;return"e"+ge[i>>0&255]+ge[i>>8&255]+ge[i>>16&255]+ge[i>>24&255]+ge[e>>0&255]+ge[e>>8&255]+ge[e>>16&255]+ge[e>>24&255]+ge[t>>0&255]+ge[t>>8&255]+ge[t>>16&255]+ge[t>>24&255]+ge[n>>0&255]+ge[n>>8&255]+ge[n>>16&255]+ge[n>>24&255]}const Me={get(i="normal"){return typeof i!="number"?this[i]||this.normal:i},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function Vt(i,e){const t=Me.get(e.priority);for(let n=0;n<i.length;n++)if(Me.get(i[n].priority)<t){i.splice(n,0,e);return}i.push(e)}const ie="https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html";class M extends Error{constructor(e,t,n){super(dt(e,n)),this.name="CKEditorError",this.context=t,this.data=n}is(e){return e==="CKEditorError"}static rethrowUnexpectedError(e,t){if(e.is&&e.is("CKEditorError"))throw e;const n=new M(e.message,t);throw n.stack=e.stack,n}}function re(i,e){console.warn(...zi(i,e))}function qe(i){return`
Read more: ${ie}#error-${i}`}function dt(i,e){const t=new WeakSet,o=e?` ${JSON.stringify(e,(l,c)=>{if(typeof c=="object"&&c!==null){if(t.has(c))return`[object ${c.constructor.name}]`;t.add(c)}return c})}`:"",r=qe(i);return i+o+r}function zi(i,e){const t=qe(i);return e?[i,e,t]:[i,t]}const Rt="36.0.0",Ln=typeof window=="object"?window:f.g;if(Ln.CKEDITOR_VERSION)throw new M("ckeditor-duplicated-modules",null);Ln.CKEDITOR_VERSION=Rt;const It=Symbol("listeningTo"),mn=Symbol("emitterId"),zn=Symbol("delegations"),An=Ne(Object);function Ne(i){if(!i)return An;class e extends i{on(n,o,r){this.listenTo(this,n,o,r)}once(n,o,r){let l=!1;const c=(u,...m)=>{l||(l=!0,u.off(),o.call(this,u,...m))};this.listenTo(this,n,c,r)}off(n,o){this.stopListening(this,n,o)}listenTo(n,o,r,l={}){let c,u;this[It]||(this[It]={});const m=this[It];Jn(n)||ys(n);const p=Jn(n);(c=m[p])||(c=m[p]={emitter:n,callbacks:{}}),(u=c.callbacks[o])||(u=c.callbacks[o]=[]),u.push(r),co(this,n,o,r,l)}stopListening(n,o,r){const l=this[It];let c=n&&Jn(n);const u=l&&c?l[c]:void 0,m=u&&o?u.callbacks[o]:void 0;if(!(!l||n&&!u||o&&!m))if(r)Ni(this,n,o,r),m.indexOf(r)!==-1&&(m.length===1?delete u.callbacks[o]:Ni(this,n,o,r));else if(m){for(;r=m.pop();)Ni(this,n,o,r);delete u.callbacks[o]}else if(u){for(o in u.callbacks)this.stopListening(n,o);delete l[c]}else{for(c in l)this.stopListening(l[c].emitter);delete this[It]}}fire(n,...o){try{const r=n instanceof be?n:new be(this,n),l=r.name;let c=xs(this,l);if(r.path.push(this),c){const m=[r,...o];c=Array.from(c);for(let p=0;p<c.length&&(c[p].callback.apply(this,m),r.off.called&&(delete r.off.called,this._removeEventListener(l,c[p].callback)),!r.stop.called);p++);}const u=this[zn];if(u){const m=u.get(l),p=u.get("*");m&&xr(m,r,o),p&&xr(p,r,o)}return r.return}catch(r){M.rethrowUnexpectedError(r,this)}}delegate(...n){return{to:(o,r)=>{this[zn]||(this[zn]=new Map),n.forEach(l=>{const c=this[zn].get(l);c?c.set(o,r):this[zn].set(l,new Map([[o,r]]))})}}}stopDelegating(n,o){if(this[zn])if(!n)this[zn].clear();else if(!o)this[zn].delete(n);else{const r=this[zn].get(n);r&&r.delete(o)}}_addEventListener(n,o,r){tl(this,n);const l=yr(this,n),c=Me.get(r.priority),u={callback:o,priority:c};for(const m of l)Vt(m,u)}_removeEventListener(n,o){const r=yr(this,n);for(const l of r)for(let c=0;c<l.length;c++)l[c].callback==o&&(l.splice(c,1),c--)}}return e}["on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(i=>{Ne[i]=An.prototype[i]});function Xa(i,e){const t=i[It];return t&&t[e]?t[e].emitter:null}function ys(i,e){i[mn]||(i[mn]=e||we())}function Jn(i){return i[mn]}function lo(i){return i._events||Object.defineProperty(i,"_events",{value:{}}),i._events}function el(){return{callbacks:[],childEvents:[]}}function tl(i,e){const t=lo(i);if(t[e])return;let n=e,o=null;const r=[];for(;n!==""&&!t[n];)t[n]=el(),r.push(t[n]),o&&t[n].childEvents.push(o),o=n,n=n.substr(0,n.lastIndexOf(":"));if(n!==""){for(const l of r)l.callbacks=t[n].callbacks.slice();t[n].childEvents.push(o)}}function yr(i,e){const t=lo(i)[e];if(!t)return[];let n=[t.callbacks];for(let o=0;o<t.childEvents.length;o++){const r=yr(i,t.childEvents[o]);n=n.concat(r)}return n}function xs(i,e){let t;return!i._events||!(t=i._events[e])||!t.callbacks.length?e.indexOf(":")>-1?xs(i,e.substr(0,e.lastIndexOf(":"))):null:t.callbacks}function xr(i,e,t){for(let[n,o]of i){o?typeof o=="function"&&(o=o(e.name)):o=e.name;const r=new be(e.source,o);r.path=[...e.path],n.fire(r,...t)}}function co(i,e,t,n,o){e._addEventListener?e._addEventListener(t,n,o):i._addEventListener.call(e,t,n,o)}function Ni(i,e,t,n){e._removeEventListener?e._removeEventListener(t,n):i._removeEventListener.call(e,t,n)}function nl(i){var e=typeof i;return i!=null&&(e=="object"||e=="function")}const He=nl,Zt=Symbol("observableProperties"),Xn=Symbol("boundObservables"),$o=Symbol("boundProperties"),wi=Symbol("decoratedMethods"),Es=Symbol("decoratedOriginal"),_e=De(Ne());function De(i){if(!i)return _e;class e extends i{set(n,o){if(He(n)){Object.keys(n).forEach(l=>{this.set(l,n[l])},this);return}Er(this);const r=this[Zt];if(n in this&&!r.has(n))throw new M("observable-set-cannot-override",this);Object.defineProperty(this,n,{enumerable:!0,configurable:!0,get(){return r.get(n)},set(l){const c=r.get(n);let u=this.fire(`set:${n}`,n,l,c);u===void 0&&(u=l),(c!==u||!r.has(n))&&(r.set(n,u),this.fire(`change:${n}`,n,u,c))}}),this[n]=o}bind(...n){if(!n.length||!Wo(n))throw new M("observable-bind-wrong-properties",this);if(new Set(n).size!==n.length)throw new M("observable-bind-duplicate-properties",this);Er(this);const o=this[$o];n.forEach(l=>{if(o.has(l))throw new M("observable-bind-rebind",this)});const r=new Map;return n.forEach(l=>{const c={property:l,to:[]};o.set(l,c),r.set(l,c)}),{to:Ss,toMany:Pi,_observable:this,_bindProperties:n,_to:[],_bindings:r}}unbind(...n){if(!this[Zt])return;const o=this[$o],r=this[Xn];if(n.length){if(!Wo(n))throw new M("observable-unbind-wrong-properties",this);n.forEach(l=>{const c=o.get(l);c&&(c.to.forEach(([u,m])=>{const p=r.get(u),w=p[m];w.delete(c),w.size||delete p[m],Object.keys(p).length||(r.delete(u),this.stopListening(u,"change"))}),o.delete(l))})}else r.forEach((l,c)=>{this.stopListening(c,"change")}),r.clear(),o.clear()}decorate(n){Er(this);const o=this[n];if(!o)throw new M("observablemixin-cannot-decorate-undefined",this,{object:this,methodName:n});this.on(n,(r,l)=>{r.return=o.apply(this,l)}),this[n]=function(...r){return this.fire(n,r)},this[n][Es]=o,this[wi]||(this[wi]=[]),this[wi].push(n)}stopListening(n,o,r){if(!n&&this[wi]){for(const l of this[wi])this[l]=this[l][Es];delete this[wi]}super.stopListening(n,o,r)}}return e}["set","bind","unbind","decorate","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(i=>{De[i]=_e.prototype[i]});function Er(i){i[Zt]||(Object.defineProperty(i,Zt,{value:new Map}),Object.defineProperty(i,Xn,{value:new Map}),Object.defineProperty(i,$o,{value:new Map}))}function Ss(...i){const e=km(...i),t=Array.from(this._bindings.keys()),n=t.length;if(!e.callback&&e.to.length>1)throw new M("observable-bind-to-no-callback",this);if(n>1&&e.callback)throw new M("observable-bind-to-extra-callback",this);e.to.forEach(o=>{if(o.properties.length&&o.properties.length!==n)throw new M("observable-bind-to-properties-length",this);o.properties.length||(o.properties=this._bindProperties)}),this._to=e.to,e.callback&&(this._bindings.get(t[0]).callback=e.callback),vm(this._observable,this._to),wm(this),this._bindProperties.forEach(o=>{hd(this._observable,o)})}function Pi(i,e,t){if(this._bindings.size>1)throw new M("observable-bind-to-many-not-one-binding",this);this.to(...Sr(i,e),t)}function Sr(i,e){const t=i.map(n=>[n,e]);return Array.prototype.concat.apply([],t)}function Wo(i){return i.every(e=>typeof e=="string")}function km(...i){if(!i.length)throw new M("observable-bind-to-parse-error",null);const e={to:[]};let t;return typeof i[i.length-1]=="function"&&(e.callback=i.pop()),i.forEach(n=>{if(typeof n=="string")t.properties.push(n);else if(typeof n=="object")t={observable:n,properties:[]},e.to.push(t);else throw new M("observable-bind-to-parse-error",null)}),e}function bm(i,e,t,n){const o=i[Xn],r=o.get(t),l=r||{};l[n]||(l[n]=new Set),l[n].add(e),r||o.set(t,l)}function wm(i){let e;i._bindings.forEach((t,n)=>{i._to.forEach(o=>{e=o.properties[t.callback?0:i._bindProperties.indexOf(n)],t.to.push([o.observable,e]),bm(i._observable,t,o.observable,e)})})}function hd(i,e){const n=i[$o].get(e);let o;n.callback?o=n.callback.apply(i,n.to.map(r=>r[0][r[1]])):(o=n.to[0],o=o[0][o[1]]),Object.prototype.hasOwnProperty.call(i,e)?i[e]=o:i.set(e,o)}function vm(i,e){e.forEach(t=>{const n=i[Xn];let o;n.get(t.observable)||i.listenTo(t.observable,"change",(r,l)=>{o=n.get(t.observable)[l],o&&o.forEach(c=>{hd(i,c.property)})})})}class Am{constructor(){this._replacedElements=[]}replace(e,t){this._replacedElements.push({element:e,newElement:t}),e.style.display="none",t&&e.parentNode.insertBefore(t,e.nextSibling)}restore(){this._replacedElements.forEach(({element:e,newElement:t})=>{e.style.display="",t&&t.remove()}),this._replacedElements=[]}}function il(i){let e=0;for(const t of i)e++;return e}function gt(i,e){const t=Math.min(i.length,e.length);for(let n=0;n<t;n++)if(i[n]!=e[n])return n;return i.length==e.length?"same":i.length<e.length?"prefix":"extension"}function an(i){return!!(i&&i[Symbol.iterator])}var Cm=typeof lr=="object"&&lr&&lr.Object===Object&&lr;const fd=Cm;var Ds=typeof self=="object"&&self&&self.Object===Object&&self,_m=fd||Ds||Function("return this")();const Nn=_m;var ym=Nn.Symbol;const ei=ym;var uo=Object.prototype,xm=uo.hasOwnProperty,Em=uo.toString,ti=ei?ei.toStringTag:void 0;function Sm(i){var e=xm.call(i,ti),t=i[ti];try{i[ti]=void 0;var n=!0}catch{}var o=Em.call(i);return n&&(e?i[ti]=t:delete i[ti]),o}const Dm=Sm;var md=Object.prototype,gd=md.toString;function Tm(i){return gd.call(i)}const pd=Tm;var Ts="[object Null]",Im="[object Undefined]",ol=ei?ei.toStringTag:void 0;function kd(i){return i==null?i===void 0?Im:Ts:ol&&ol in Object(i)?Dm(i):pd(i)}const Ri=kd;var Mm=Array.isArray;const Qt=Mm;function rl(i){return i!=null&&typeof i=="object"}const Cn=rl;var bd="[object String]";function wd(i){return typeof i=="string"||!Qt(i)&&Cn(i)&&Ri(i)==bd}const sl=wd;function ni(i,e,t={},n=[]){const o=t&&t.xmlns,r=o?i.createElementNS(o,e):i.createElement(e);for(const l in t)r.setAttribute(l,t[l]);(sl(n)||!an(n))&&(n=[n]);for(let l of n)sl(l)&&(l=i.createTextNode(l)),r.appendChild(l);return r}function Bm(i,e){return function(t){return i(e(t))}}const vd=Bm;var Ad=vd(Object.getPrototypeOf,Object);const Ue=Ad;var Lm="[object Object]",al=Function.prototype,Cd=Object.prototype,Go=al.toString,ll=Cd.hasOwnProperty,qo=Go.call(Object);function _d(i){if(!Cn(i)||Ri(i)!=Lm)return!1;var e=Ue(i);if(e===null)return!0;var t=ll.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&Go.call(t)==qo}const Jt=_d;function zm(){this.__data__=[],this.size=0}const yd=zm;function Nm(i,e){return i===e||i!==i&&e!==e}const ho=Nm;function xd(i,e){for(var t=i.length;t--;)if(ho(i[t][0],e))return t;return-1}const Is=xd;var Pm=Array.prototype,Rm=Pm.splice;function Ed(i){var e=this.__data__,t=Is(e,i);if(t<0)return!1;var n=e.length-1;return t==n?e.pop():Rm.call(e,t,1),--this.size,!0}const cl=Ed;function Om(i){var e=this.__data__,t=Is(e,i);return t<0?void 0:e[t][1]}const jm=Om;function Fm(i){return Is(this.__data__,i)>-1}const Vm=Fm;function dl(i,e){var t=this.__data__,n=Is(t,i);return n<0?(++this.size,t.push([i,e])):t[n][1]=e,this}const Hm=dl;function fo(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}fo.prototype.clear=yd,fo.prototype.delete=cl,fo.prototype.get=jm,fo.prototype.has=Vm,fo.prototype.set=Hm;const Dr=fo;function Sd(){this.__data__=new Dr,this.size=0}const Dd=Sd;function Um(i){var e=this.__data__,t=e.delete(i);return this.size=e.size,t}const $m=Um;function Wm(i){return this.__data__.get(i)}const Td=Wm;function Gm(i){return this.__data__.has(i)}const Id=Gm;var ul="[object AsyncFunction]",qm="[object Function]",Md="[object GeneratorFunction]",hl="[object Proxy]";function Bd(i){if(!He(i))return!1;var e=Ri(i);return e==qm||e==Md||e==ul||e==hl}const mo=Bd;var Ld=Nn["__core-js_shared__"];const fl=Ld;var zd=function(){var i=/[^.]+$/.exec(fl&&fl.keys&&fl.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""}();function ml(i){return!!zd&&zd in i}const gl=ml;var pl=Function.prototype,kl=pl.toString;function Nd(i){if(i!=null){try{return kl.call(i)}catch{}try{return i+""}catch{}}return""}const Oi=Nd;var Pd=/[\\^$.*+?()[\]{}|]/g,Rd=/^\[object .+?Constructor\]$/,Od=Function.prototype,Km=Object.prototype,Ym=Od.toString,Zm=Km.hasOwnProperty,Qm=RegExp("^"+Ym.call(Zm).replace(Pd,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Jm(i){if(!He(i)||gl(i))return!1;var e=mo(i)?Qm:Rd;return e.test(Oi(i))}const go=Jm;function bl(i,e){return i==null?void 0:i[e]}const Xm=bl;function eg(i,e){var t=Xm(i,e);return go(t)?t:void 0}const ji=eg;var wl=ji(Nn,"Map");const Tr=wl;var tg=ji(Object,"create");const Ir=tg;function jd(){this.__data__=Ir?Ir(null):{},this.size=0}const Fd=jd;function ng(i){var e=this.has(i)&&delete this.__data__[i];return this.size-=e?1:0,e}const ig=ng;var og="__lodash_hash_undefined__",Vd=Object.prototype,rg=Vd.hasOwnProperty;function sg(i){var e=this.__data__;if(Ir){var t=e[i];return t===og?void 0:t}return rg.call(e,i)?e[i]:void 0}const ag=sg;var Hd=Object.prototype,lg=Hd.hasOwnProperty;function cg(i){var e=this.__data__;return Ir?e[i]!==void 0:lg.call(e,i)}const Ud=cg;var dg="__lodash_hash_undefined__";function $d(i,e){var t=this.__data__;return this.size+=this.has(i)?0:1,t[i]=Ir&&e===void 0?dg:e,this}const Wd=$d;function po(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}po.prototype.clear=Fd,po.prototype.delete=ig,po.prototype.get=ag,po.prototype.has=Ud,po.prototype.set=Wd;const $e=po;function ug(){this.size=0,this.__data__={hash:new $e,map:new(Tr||Dr),string:new $e}}const hg=ug;function fg(i){var e=typeof i;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?i!=="__proto__":i===null}const mg=fg;function Gd(i,e){var t=i.__data__;return mg(e)?t[typeof e=="string"?"string":"hash"]:t.map}const Ms=Gd;function gg(i){var e=Ms(this,i).delete(i);return this.size-=e?1:0,e}const pg=gg;function kg(i){return Ms(this,i).get(i)}const vl=kg;function bg(i){return Ms(this,i).has(i)}const qd=bg;function Kd(i,e){var t=Ms(this,i),n=t.size;return t.set(i,e),this.size+=t.size==n?0:1,this}const Yd=Kd;function pt(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}pt.prototype.clear=hg,pt.prototype.delete=pg,pt.prototype.get=vl,pt.prototype.has=qd,pt.prototype.set=Yd;const Fi=pt;var Zd=200;function wg(i,e){var t=this.__data__;if(t instanceof Dr){var n=t.__data__;if(!Tr||n.length<Zd-1)return n.push([i,e]),this.size=++t.size,this;t=this.__data__=new Fi(n)}return t.set(i,e),this.size=t.size,this}const Qd=wg;function ko(i){var e=this.__data__=new Dr(i);this.size=e.size}ko.prototype.clear=Dd,ko.prototype.delete=$m,ko.prototype.get=Td,ko.prototype.has=Id,ko.prototype.set=Qd;const bo=ko;function Al(i,e){for(var t=-1,n=i==null?0:i.length;++t<n&&e(i[t],t,i)!==!1;);return i}const wo=Al;var vg=function(){try{var i=ji(Object,"defineProperty");return i({},"",{}),i}catch{}}();const S=vg;function T(i,e,t){e=="__proto__"&&S?S(i,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):i[e]=t}const z=T;var H=Object.prototype,de=H.hasOwnProperty;function Ae(i,e,t){var n=i[e];(!(de.call(i,e)&&ho(n,t))||t===void 0&&!(e in i))&&z(i,e,t)}const Ce=Ae;function Ee(i,e,t,n){var o=!t;t||(t={});for(var r=-1,l=e.length;++r<l;){var c=e[r],u=n?n(t[c],i[c],c,t,i):void 0;u===void 0&&(u=i[c]),o?z(t,c,u):Ce(t,c,u)}return t}const Ke=Ee;function ut(i,e){for(var t=-1,n=Array(i);++t<i;)n[t]=e(t);return n}const Bs=ut;var vo="[object Arguments]";function ii(i){return Cn(i)&&Ri(i)==vo}const Ao=ii;var Mr=Object.prototype,Br=Mr.hasOwnProperty,gn=Mr.propertyIsEnumerable,vi=Ao(function(){return arguments}())?Ao:function(i){return Cn(i)&&Br.call(i,"callee")&&!gn.call(i,"callee")};const Lr=vi;function Ht(){return!1}const Ai=Ht;var zr=a&&!a.nodeType&&a,M0=zr&&!0&&s&&!s.nodeType&&s,b3=M0&&M0.exports===zr,B0=b3?Nn.Buffer:void 0,w3=B0?B0.isBuffer:void 0,v3=w3||Ai;const Cl=v3;var A3=9007199254740991,C3=/^(?:0|[1-9]\d*)$/;function _3(i,e){var t=typeof i;return e=e??A3,!!e&&(t=="number"||t!="symbol"&&C3.test(i))&&i>-1&&i%1==0&&i<e}const Ag=_3;var y3=9007199254740991;function x3(i){return typeof i=="number"&&i>-1&&i%1==0&&i<=y3}const L0=x3;var E3="[object Arguments]",S3="[object Array]",D3="[object Boolean]",T3="[object Date]",I3="[object Error]",M3="[object Function]",B3="[object Map]",L3="[object Number]",z3="[object Object]",N3="[object RegExp]",P3="[object Set]",R3="[object String]",O3="[object WeakMap]",j3="[object ArrayBuffer]",F3="[object DataView]",V3="[object Float32Array]",H3="[object Float64Array]",U3="[object Int8Array]",$3="[object Int16Array]",W3="[object Int32Array]",G3="[object Uint8Array]",q3="[object Uint8ClampedArray]",K3="[object Uint16Array]",Y3="[object Uint32Array]",ot={};ot[V3]=ot[H3]=ot[U3]=ot[$3]=ot[W3]=ot[G3]=ot[q3]=ot[K3]=ot[Y3]=!0,ot[E3]=ot[S3]=ot[j3]=ot[D3]=ot[F3]=ot[T3]=ot[I3]=ot[M3]=ot[B3]=ot[L3]=ot[z3]=ot[N3]=ot[P3]=ot[R3]=ot[O3]=!1;function Z3(i){return Cn(i)&&L0(i.length)&&!!ot[Ri(i)]}const Q3=Z3;function J3(i){return function(e){return i(e)}}const Jd=J3;var z0=a&&!a.nodeType&&a,_l=z0&&!0&&s&&!s.nodeType&&s,X3=_l&&_l.exports===z0,Cg=X3&&fd.process,eM=function(){try{var i=_l&&_l.require&&_l.require("util").types;return i||Cg&&Cg.binding&&Cg.binding("util")}catch{}}();const Ls=eM;var N0=Ls&&Ls.isTypedArray,tM=N0?Jd(N0):Q3;const _g=tM;var nM=Object.prototype,iM=nM.hasOwnProperty;function oM(i,e){var t=Qt(i),n=!t&&Lr(i),o=!t&&!n&&Cl(i),r=!t&&!n&&!o&&_g(i),l=t||n||o||r,c=l?Bs(i.length,String):[],u=c.length;for(var m in i)(e||iM.call(i,m))&&!(l&&(m=="length"||o&&(m=="offset"||m=="parent")||r&&(m=="buffer"||m=="byteLength"||m=="byteOffset")||Ag(m,u)))&&c.push(m);return c}const P0=oM;var rM=Object.prototype;function sM(i){var e=i&&i.constructor,t=typeof e=="function"&&e.prototype||rM;return i===t}const yg=sM;var aM=vd(Object.keys,Object);const lM=aM;var cM=Object.prototype,dM=cM.hasOwnProperty;function uM(i){if(!yg(i))return lM(i);var e=[];for(var t in Object(i))dM.call(i,t)&&t!="constructor"&&e.push(t);return e}const hM=uM;function fM(i){return i!=null&&L0(i.length)&&!mo(i)}const Xd=fM;function mM(i){return Xd(i)?P0(i):hM(i)}const xg=mM;function gM(i,e){return i&&Ke(e,xg(e),i)}const pM=gM;function kM(i){var e=[];if(i!=null)for(var t in Object(i))e.push(t);return e}const bM=kM;var wM=Object.prototype,vM=wM.hasOwnProperty;function AM(i){if(!He(i))return bM(i);var e=yg(i),t=[];for(var n in i)n=="constructor"&&(e||!vM.call(i,n))||t.push(n);return t}const CM=AM;function _M(i){return Xd(i)?P0(i,!0):CM(i)}const zs=_M;function yM(i,e){return i&&Ke(e,zs(e),i)}const xM=yM;var R0=a&&!a.nodeType&&a,O0=R0&&!0&&s&&!s.nodeType&&s,EM=O0&&O0.exports===R0,j0=EM?Nn.Buffer:void 0,F0=j0?j0.allocUnsafe:void 0;function SM(i,e){if(e)return i.slice();var t=i.length,n=F0?F0(t):new i.constructor(t);return i.copy(n),n}const V0=SM;function DM(i,e){var t=-1,n=i.length;for(e||(e=Array(n));++t<n;)e[t]=i[t];return e}const Eg=DM;function TM(i,e){for(var t=-1,n=i==null?0:i.length,o=0,r=[];++t<n;){var l=i[t];e(l,t,i)&&(r[o++]=l)}return r}const IM=TM;function MM(){return[]}const H0=MM;var BM=Object.prototype,LM=BM.propertyIsEnumerable,U0=Object.getOwnPropertySymbols,zM=U0?function(i){return i==null?[]:(i=Object(i),IM(U0(i),function(e){return LM.call(i,e)}))}:H0;const Sg=zM;function NM(i,e){return Ke(i,Sg(i),e)}const PM=NM;function RM(i,e){for(var t=-1,n=e.length,o=i.length;++t<n;)i[o+t]=e[t];return i}const $0=RM;var OM=Object.getOwnPropertySymbols,jM=OM?function(i){for(var e=[];i;)$0(e,Sg(i)),i=Ue(i);return e}:H0;const W0=jM;function FM(i,e){return Ke(i,W0(i),e)}const VM=FM;function HM(i,e,t){var n=e(i);return Qt(i)?n:$0(n,t(i))}const G0=HM;function UM(i){return G0(i,xg,Sg)}const Dg=UM;function $M(i){return G0(i,zs,W0)}const WM=$M;var GM=ji(Nn,"DataView");const Tg=GM;var qM=ji(Nn,"Promise");const Ig=qM;var KM=ji(Nn,"Set");const Mg=KM;var YM=ji(Nn,"WeakMap");const Bg=YM;var q0="[object Map]",ZM="[object Object]",K0="[object Promise]",Y0="[object Set]",Z0="[object WeakMap]",Q0="[object DataView]",QM=Oi(Tg),JM=Oi(Tr),XM=Oi(Ig),eB=Oi(Mg),tB=Oi(Bg),Nr=Ri;(Tg&&Nr(new Tg(new ArrayBuffer(1)))!=Q0||Tr&&Nr(new Tr)!=q0||Ig&&Nr(Ig.resolve())!=K0||Mg&&Nr(new Mg)!=Y0||Bg&&Nr(new Bg)!=Z0)&&(Nr=function(i){var e=Ri(i),t=e==ZM?i.constructor:void 0,n=t?Oi(t):"";if(n)switch(n){case QM:return Q0;case JM:return q0;case XM:return K0;case eB:return Y0;case tB:return Z0}return e});const yl=Nr;var nB=Object.prototype,iB=nB.hasOwnProperty;function oB(i){var e=i.length,t=new i.constructor(e);return e&&typeof i[0]=="string"&&iB.call(i,"index")&&(t.index=i.index,t.input=i.input),t}const rB=oB;var sB=Nn.Uint8Array;const eu=sB;function aB(i){var e=new i.constructor(i.byteLength);return new eu(e).set(new eu(i)),e}const Lg=aB;function lB(i,e){var t=e?Lg(i.buffer):i.buffer;return new i.constructor(t,i.byteOffset,i.byteLength)}const cB=lB;var dB=/\w*$/;function uB(i){var e=new i.constructor(i.source,dB.exec(i));return e.lastIndex=i.lastIndex,e}const hB=uB;var J0=ei?ei.prototype:void 0,X0=J0?J0.valueOf:void 0;function fB(i){return X0?Object(X0.call(i)):{}}const mB=fB;function gB(i,e){var t=e?Lg(i.buffer):i.buffer;return new i.constructor(t,i.byteOffset,i.length)}const eC=gB;var pB="[object Boolean]",kB="[object Date]",bB="[object Map]",wB="[object Number]",vB="[object RegExp]",AB="[object Set]",CB="[object String]",_B="[object Symbol]",yB="[object ArrayBuffer]",xB="[object DataView]",EB="[object Float32Array]",SB="[object Float64Array]",DB="[object Int8Array]",TB="[object Int16Array]",IB="[object Int32Array]",MB="[object Uint8Array]",BB="[object Uint8ClampedArray]",LB="[object Uint16Array]",zB="[object Uint32Array]";function NB(i,e,t){var n=i.constructor;switch(e){case yB:return Lg(i);case pB:case kB:return new n(+i);case xB:return cB(i,t);case EB:case SB:case DB:case TB:case IB:case MB:case BB:case LB:case zB:return eC(i,t);case bB:return new n;case wB:case CB:return new n(i);case vB:return hB(i);case AB:return new n;case _B:return mB(i)}}const PB=NB;var tC=Object.create,RB=function(){function i(){}return function(e){if(!He(e))return{};if(tC)return tC(e);i.prototype=e;var t=new i;return i.prototype=void 0,t}}();const OB=RB;function jB(i){return typeof i.constructor=="function"&&!yg(i)?OB(Ue(i)):{}}const nC=jB;var FB="[object Map]";function VB(i){return Cn(i)&&yl(i)==FB}const HB=VB;var iC=Ls&&Ls.isMap,UB=iC?Jd(iC):HB;const $B=UB;var WB="[object Set]";function GB(i){return Cn(i)&&yl(i)==WB}const qB=GB;var oC=Ls&&Ls.isSet,KB=oC?Jd(oC):qB;const YB=KB;var ZB=1,QB=2,JB=4,rC="[object Arguments]",XB="[object Array]",eL="[object Boolean]",tL="[object Date]",nL="[object Error]",sC="[object Function]",iL="[object GeneratorFunction]",oL="[object Map]",rL="[object Number]",aC="[object Object]",sL="[object RegExp]",aL="[object Set]",lL="[object String]",cL="[object Symbol]",dL="[object WeakMap]",uL="[object ArrayBuffer]",hL="[object DataView]",fL="[object Float32Array]",mL="[object Float64Array]",gL="[object Int8Array]",pL="[object Int16Array]",kL="[object Int32Array]",bL="[object Uint8Array]",wL="[object Uint8ClampedArray]",vL="[object Uint16Array]",AL="[object Uint32Array]",et={};et[rC]=et[XB]=et[uL]=et[hL]=et[eL]=et[tL]=et[fL]=et[mL]=et[gL]=et[pL]=et[kL]=et[oL]=et[rL]=et[aC]=et[sL]=et[aL]=et[lL]=et[cL]=et[bL]=et[wL]=et[vL]=et[AL]=!0,et[nL]=et[sC]=et[dL]=!1;function tu(i,e,t,n,o,r){var l,c=e&ZB,u=e&QB,m=e&JB;if(t&&(l=o?t(i,n,o,r):t(i)),l!==void 0)return l;if(!He(i))return i;var p=Qt(i);if(p){if(l=rB(i),!c)return Eg(i,l)}else{var w=yl(i),C=w==sC||w==iL;if(Cl(i))return V0(i,c);if(w==aC||w==rC||C&&!o){if(l=u||C?{}:nC(i),!c)return u?VM(i,xM(l,i)):PM(i,pM(l,i))}else{if(!et[w])return o?i:{};l=PB(i,w,c)}}r||(r=new bo);var I=r.get(i);if(I)return I;r.set(i,l),YB(i)?i.forEach(function(V){l.add(tu(V,e,t,V,i,r))}):$B(i)&&i.forEach(function(V,G){l.set(G,tu(V,e,t,G,i,r))});var B=m?u?WM:Dg:u?zs:xg,P=p?void 0:B(i);return wo(P||i,function(V,G){P&&(G=V,V=i[G]),Ce(l,G,tu(V,e,t,G,i,r))}),l}const zg=tu;var CL=1,_L=4;function yL(i,e){return e=typeof e=="function"?e:void 0,zg(i,CL|_L,e)}const lC=yL;function xL(i){return Cn(i)&&i.nodeType===1&&!Jt(i)}const Ns=xL;class cC{constructor(e,t){this._config={},t&&this.define(dC(t)),e&&this._setObjectToTarget(this._config,e)}set(e,t){this._setToTarget(this._config,e,t)}define(e,t){this._setToTarget(this._config,e,t,!0)}get(e){return this._getFromSource(this._config,e)}*names(){for(const e of Object.keys(this._config))yield e}_setToTarget(e,t,n,o=!1){if(Jt(t)){this._setObjectToTarget(e,t,o);return}const r=t.split(".");t=r.pop();for(const l of r)Jt(e[l])||(e[l]={}),e=e[l];if(Jt(n)){Jt(e[t])||(e[t]={}),e=e[t],this._setObjectToTarget(e,n,o);return}o&&typeof e[t]<"u"||(e[t]=n)}_getFromSource(e,t){const n=t.split(".");t=n.pop();for(const o of n){if(!Jt(e[o])){e=null;break}e=e[o]}return e?dC(e[t]):void 0}_setObjectToTarget(e,t,n){Object.keys(t).forEach(o=>{this._setToTarget(e,o,t[o],n)})}}function dC(i){return lC(i,EL)}function EL(i){return Ns(i)?i:void 0}function Ko(i){if(i){if(i.defaultView)return i instanceof i.defaultView.Document;if(i.ownerDocument&&i.ownerDocument.defaultView)return i instanceof i.ownerDocument.defaultView.Node}return!1}function nu(i){const e=Object.prototype.toString.apply(i);return e=="[object Window]"||e=="[object global]"}const uC=Co(Ne());function Co(i){if(!i)return uC;class e extends i{listenTo(n,o,r,l={}){if(Ko(n)||nu(n)){const c={capture:!!l.useCapture,passive:!!l.usePassive},u=this._getProxyEmitter(n,c)||new SL(n,c);this.listenTo(u,o,r,l)}else super.listenTo(n,o,r,l)}stopListening(n,o,r){if(Ko(n)||nu(n)){const l=this._getAllProxyEmitters(n);for(const c of l)this.stopListening(c,o,r)}else super.stopListening(n,o,r)}_getProxyEmitter(n,o){return Xa(this,hC(n,o))}_getAllProxyEmitters(n){return[{capture:!1,passive:!1},{capture:!1,passive:!0},{capture:!0,passive:!1},{capture:!0,passive:!0}].map(o=>this._getProxyEmitter(n,o)).filter(o=>!!o)}}return e}["_getProxyEmitter","_getAllProxyEmitters","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(i=>{Co[i]=uC.prototype[i]});class SL extends Ne(){constructor(e,t){super(),ys(this,hC(e,t)),this._domNode=e,this._options=t}attach(e){if(this._domListeners&&this._domListeners[e])return;const t=this._createDomListener(e);this._domNode.addEventListener(e,t,this._options),this._domListeners||(this._domListeners={}),this._domListeners[e]=t}detach(e){let t;this._domListeners[e]&&(!(t=this._events[e])||!t.callbacks.length)&&this._domListeners[e].removeListener()}_addEventListener(e,t,n){this.attach(e),Ne().prototype._addEventListener.call(this,e,t,n)}_removeEventListener(e,t){Ne().prototype._removeEventListener.call(this,e,t),this.detach(e)}_createDomListener(e){const t=n=>{this.fire(e,n)};return t.removeListener=()=>{this._domNode.removeEventListener(e,t,this._options),delete this._domListeners[e]},t}}function DL(i){return i["data-ck-expando"]||(i["data-ck-expando"]=we())}function hC(i,e){let t=DL(i);for(const n of Object.keys(e).sort())e[n]&&(t+="-"+n);return t}let Ng;try{Ng={window,document}}catch{Ng={window:{},document:{}}}const ye=Ng;function fC(i){const e=[];let t=i;for(;t&&t.nodeType!=Node.DOCUMENT_NODE;)e.unshift(t),t=t.parentNode;return e}function TL(i){return i instanceof HTMLTextAreaElement?i.value:i.innerHTML}function yt(i){return Object.prototype.toString.call(i)=="[object Text]"}function iu(i){return Object.prototype.toString.apply(i)=="[object Range]"}function mC(i){const e=i.ownerDocument.defaultView.getComputedStyle(i);return{top:parseInt(e.borderTopWidth,10),right:parseInt(e.borderRightWidth,10),bottom:parseInt(e.borderBottomWidth,10),left:parseInt(e.borderLeftWidth,10)}}const gC=["top","right","bottom","left","width","height"];class Be{constructor(e){const t=iu(e);if(Object.defineProperty(this,"_source",{value:e._source||e,writable:!0,enumerable:!1}),kC(e)||t)if(t){const n=Be.getDomRangeRects(e);ou(this,Be.getBoundingRect(n))}else ou(this,e.getBoundingClientRect());else if(nu(e)){const{innerWidth:n,innerHeight:o}=e;ou(this,{top:0,right:n,bottom:o,left:0,width:n,height:o})}else ou(this,e)}clone(){return new Be(this)}moveTo(e,t){return this.top=t,this.right=e+this.width,this.bottom=t+this.height,this.left=e,this}moveBy(e,t){return this.top+=t,this.right+=e,this.left+=e,this.bottom+=t,this}getIntersection(e){const t={top:Math.max(this.top,e.top),right:Math.min(this.right,e.right),bottom:Math.min(this.bottom,e.bottom),left:Math.max(this.left,e.left),width:0,height:0};return t.width=t.right-t.left,t.height=t.bottom-t.top,t.width<0||t.height<0?null:new Be(t)}getIntersectionArea(e){const t=this.getIntersection(e);return t?t.getArea():0}getArea(){return this.width*this.height}getVisible(){const e=this._source;let t=this.clone();if(!pC(e)){let n=e.parentNode||e.commonAncestorContainer;for(;n&&!pC(n);){const o=new Be(n),r=t.getIntersection(o);if(r)r.getArea()<t.getArea()&&(t=r);else return null;n=n.parentNode}}return t}isEqual(e){for(const t of gC)if(this[t]!==e[t])return!1;return!0}contains(e){const t=this.getIntersection(e);return!!(t&&t.isEqual(e))}excludeScrollbarsAndBorders(){const e=this._source;let t,n,o;if(nu(e))t=e.innerWidth-e.document.documentElement.clientWidth,n=e.innerHeight-e.document.documentElement.clientHeight,o=e.getComputedStyle(e.document.documentElement).direction;else{const r=mC(e);t=e.offsetWidth-e.clientWidth-r.left-r.right,n=e.offsetHeight-e.clientHeight-r.top-r.bottom,o=e.ownerDocument.defaultView.getComputedStyle(e).direction,this.left+=r.left,this.top+=r.top,this.right-=r.right,this.bottom-=r.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=t,o==="ltr"?this.right-=t:this.left+=t,this.height-=n,this.bottom-=n,this}static getDomRangeRects(e){const t=[],n=Array.from(e.getClientRects());if(n.length)for(const o of n)t.push(new Be(o));else{let o=e.startContainer;yt(o)&&(o=o.parentNode);const r=new Be(o.getBoundingClientRect());r.right=r.left,r.width=0,t.push(r)}return t}static getBoundingRect(e){const t={left:Number.POSITIVE_INFINITY,top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,width:0,height:0};let n=0;for(const o of e)n++,t.left=Math.min(t.left,o.left),t.top=Math.min(t.top,o.top),t.right=Math.max(t.right,o.right),t.bottom=Math.max(t.bottom,o.bottom);return n==0?null:(t.width=t.right-t.left,t.height=t.bottom-t.top,new Be(t))}}function ou(i,e){for(const t of gC)i[t]=e[t]}function pC(i){return kC(i)?i===i.ownerDocument.body:!1}function kC(i){return i!==null&&typeof i=="object"&&i.nodeType===1&&typeof i.getBoundingClientRect=="function"}class tt{constructor(e,t){tt._observerInstance||tt._createObserver(),this._element=e,this._callback=t,tt._addElementCallback(e,t),tt._observerInstance.observe(e)}destroy(){tt._deleteElementCallback(this._element,this._callback)}static _addElementCallback(e,t){tt._elementCallbacks||(tt._elementCallbacks=new Map);let n=tt._elementCallbacks.get(e);n||(n=new Set,tt._elementCallbacks.set(e,n)),n.add(t)}static _deleteElementCallback(e,t){const n=tt._getElementCallbacks(e);n&&(n.delete(t),n.size||(tt._elementCallbacks.delete(e),tt._observerInstance.unobserve(e))),tt._elementCallbacks&&!tt._elementCallbacks.size&&(tt._observerInstance=null,tt._elementCallbacks=null)}static _getElementCallbacks(e){return tt._elementCallbacks?tt._elementCallbacks.get(e):null}static _createObserver(){tt._observerInstance=new ye.window.ResizeObserver(e=>{for(const t of e){const n=tt._getElementCallbacks(t.target);if(n)for(const o of n)o(t)}})}}tt._observerInstance=null,tt._elementCallbacks=null;function bC(i,e){i instanceof HTMLTextAreaElement&&(i.value=e),i.innerHTML=e}function Pg(i){return e=>e+i}function ru(i){let e=0;for(;i.previousSibling;)i=i.previousSibling,e++;return e}function wC(i,e,t){i.insertBefore(t,i.childNodes[e]||null)}function Ps(i){return i&&i.nodeType===Node.COMMENT_NODE}function Yo(i){return!!(i&&i.getClientRects&&i.getClientRects().length)}function IL(i){return!i||!i.parentNode||i.offsetParent===ye.document.body?null:i.offsetParent}function vC({element:i,target:e,positions:t,limiter:n,fitInViewport:o,viewportOffsetConfig:r}){mo(e)&&(e=e()),mo(n)&&(n=n());const l=IL(i),c=new Be(i),u=new Be(e);let m;const p=o&&ML(r)||null,w={targetRect:u,elementRect:c,positionedElementAncestor:l,viewportRect:p};if(!n&&!o)m=new Rg(t[0],w);else{const C=n&&new Be(n).getVisible();Object.assign(w,{limiterRect:C,viewportRect:p}),m=BL(t,w)||new Rg(t[0],w)}return m}function ML(i){i=Object.assign({top:0,bottom:0,left:0,right:0},i);const e=new Be(ye.window);return e.top+=i.top,e.height-=i.top,e.bottom-=i.bottom,e.height-=i.bottom,e}function BL(i,e){const{elementRect:t}=e,n=t.getArea(),o=i.map(c=>new Rg(c,e)).filter(c=>!!c.name);let r=0,l=null;for(const c of o){const{limiterIntersectionArea:u,viewportIntersectionArea:m}=c;if(u===n)return c;const p=m**2+u**2;p>r&&(r=p,l=c)}return l}function LL(i,e){const t=AC(new Be(e)),n=mC(e);let o=0,r=0;o-=t.left,r-=t.top,o+=e.scrollLeft,r+=e.scrollTop,o-=n.left,r-=n.top,i.moveBy(o,r)}function AC(i){const{scrollX:e,scrollY:t}=ye.window;return i.clone().moveBy(e,t)}class Rg{constructor(e,t){const n=e(t.targetRect,t.elementRect,t.viewportRect);if(!n)return;const{left:o,top:r,name:l,config:c}=n;this.name=l,this.config=c,this._positioningFunctionCorrdinates={left:o,top:r},this._options=t}get left(){return this._absoluteRect.left}get top(){return this._absoluteRect.top}get limiterIntersectionArea(){const e=this._options.limiterRect;if(e){const t=this._options.viewportRect;if(t){const n=e.getIntersection(t);if(n)return n.getIntersectionArea(this._rect)}else return e.getIntersectionArea(this._rect)}return 0}get viewportIntersectionArea(){const e=this._options.viewportRect;return e?e.getIntersectionArea(this._rect):0}get _rect(){return this._cachedRect?this._cachedRect:(this._cachedRect=this._options.elementRect.clone().moveTo(this._positioningFunctionCorrdinates.left,this._positioningFunctionCorrdinates.top),this._cachedRect)}get _absoluteRect(){return this._cachedAbsoluteRect?this._cachedAbsoluteRect:(this._cachedAbsoluteRect=AC(this._rect),this._options.positionedElementAncestor&&LL(this._cachedAbsoluteRect,this._options.positionedElementAncestor),this._cachedAbsoluteRect)}}function CC(i){const e=i.parentNode;e&&e.removeChild(i)}function _C({target:i,viewportOffset:e=0}){const t=Og(i);let n=t,o=null;for(;n;){let r;n==t?r=DC(i):r=DC(o),NL(r,()=>TC(i,n));const l=TC(i,n);if(zL(n,l,e),n.parent!=n){if(o=n.frameElement,n=n.parent,!o)return}else n=null}}function zL(i,e,t){const n=e.clone().moveBy(0,t),o=e.clone().moveBy(0,-t),r=new Be(i).excludeScrollbarsAndBorders();if(![o,n].every(c=>r.contains(c))){let{scrollX:c,scrollY:u}=i;xC(o,r)?u-=r.top-e.top+t:yC(n,r)&&(u+=e.bottom-r.bottom+t),EC(e,r)?c-=r.left-e.left+t:SC(e,r)&&(c+=e.right-r.right+t),i.scrollTo(c,u)}}function NL(i,e){const t=Og(i);let n,o;for(;i!=t.document.body;)o=e(),n=new Be(i).excludeScrollbarsAndBorders(),n.contains(o)||(xC(o,n)?i.scrollTop-=n.top-o.top:yC(o,n)&&(i.scrollTop+=o.bottom-n.bottom),EC(o,n)?i.scrollLeft-=n.left-o.left:SC(o,n)&&(i.scrollLeft+=o.right-n.right)),i=i.parentNode}function yC(i,e){return i.bottom>e.bottom}function xC(i,e){return i.top<e.top}function EC(i,e){return i.left<e.left}function SC(i,e){return i.right>e.right}function Og(i){return iu(i)?i.startContainer.ownerDocument.defaultView:i.ownerDocument.defaultView}function DC(i){if(iu(i)){let e=i.commonAncestorContainer;return yt(e)&&(e=e.parentNode),e}else return i.parentNode}function TC(i,e){const t=Og(i),n=new Be(i);if(t===e)return n;{let o=t;for(;o!=e;){const r=o.frameElement,l=new Be(r).excludeScrollbarsAndBorders();n.moveBy(l.left,l.top),o=o.parent}}return n}const PL={ctrl:"⌃",cmd:"⌘",alt:"⌥",shift:"⇧"},RL={ctrl:"Ctrl+",alt:"Alt+",shift:"Shift+"},Se=HL(),OL=Object.fromEntries(Object.entries(Se).map(([i,e])=>[e,i.charAt(0).toUpperCase()+i.slice(1)]));function Pr(i){let e;if(typeof i=="string"){if(e=Se[i.toLowerCase()],!e)throw new M("keyboard-unknown-key",null,{key:i})}else e=i.keyCode+(i.altKey?Se.alt:0)+(i.ctrlKey?Se.ctrl:0)+(i.shiftKey?Se.shift:0)+(i.metaKey?Se.cmd:0);return e}function su(i){return typeof i=="string"&&(i=UL(i)),i.map(e=>typeof e=="string"?FL(e):e).reduce((e,t)=>t+e,0)}function IC(i){let e=su(i);return Object.entries(A.isMac?PL:RL).reduce((o,[r,l])=>(e&Se[r]&&(e&=~Se[r],o+=l),o),"")+(e?OL[e]:"")}function jL(i){return i==Se.arrowright||i==Se.arrowleft||i==Se.arrowup||i==Se.arrowdown}function au(i,e){const t=e==="ltr";switch(i){case Se.arrowleft:return t?"left":"right";case Se.arrowright:return t?"right":"left";case Se.arrowup:return"up";case Se.arrowdown:return"down"}}function FL(i){if(i.endsWith("!"))return Pr(i.slice(0,-1));const e=Pr(i);return A.isMac&&e==Se.ctrl?Se.cmd:e}function VL(i,e){const t=au(i,e);return t==="down"||t==="right"}function HL(){const i={arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let e=65;e<=90;e++){const t=String.fromCharCode(e);i[t.toLowerCase()]=e}for(let e=48;e<=57;e++)i[e-48]=e;for(let e=112;e<=123;e++)i["f"+(e-111)]=e;for(const e of"`-=[];',./\\")i[e]=e.charCodeAt(0);return i}function UL(i){return i.split("+").map(e=>e.trim())}const $L=["ar","ara","fa","per","fas","he","heb","ku","kur","ug","uig"];function jg(i){return $L.includes(i)?"rtl":"ltr"}function kt(i){return Array.isArray(i)?i:[i]}ye.window.CKEDITOR_TRANSLATIONS||(ye.window.CKEDITOR_TRANSLATIONS={});function WL(i,e,t=1){if(typeof t!="number")throw new M("translation-service-quantity-not-a-number",null,{quantity:t});const n=qL();n===1&&(i=Object.keys(ye.window.CKEDITOR_TRANSLATIONS)[0]);const o=e.id||e.string;if(n===0||!GL(i,o))return t!==1?e.plural:e.string;const r=ye.window.CKEDITOR_TRANSLATIONS[i].dictionary,l=ye.window.CKEDITOR_TRANSLATIONS[i].getPluralForm||(m=>m===1?0:1),c=r[o];if(typeof c=="string")return c;const u=Number(l(t));return c[u]}function GL(i,e){return!!ye.window.CKEDITOR_TRANSLATIONS[i]&&!!ye.window.CKEDITOR_TRANSLATIONS[i].dictionary[e]}function qL(){return Object.keys(ye.window.CKEDITOR_TRANSLATIONS).length}class KL{constructor({uiLanguage:e="en",contentLanguage:t}={}){this.uiLanguage=e,this.contentLanguage=t||this.uiLanguage,this.uiLanguageDirection=jg(this.uiLanguage),this.contentLanguageDirection=jg(this.contentLanguage),this.t=(n,o)=>this._t(n,o)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(e,t=[]){t=kt(t),typeof e=="string"&&(e={string:e});const o=!!e.plural?t[0]:1,r=WL(this.uiLanguage,e,o);return YL(r,t)}}function YL(i,e){return i.replace(/%(\d+)/g,(t,n)=>n<e.length?e[n]:t)}class rt extends Ne(){constructor(e={},t={}){super();const n=an(e);if(n||(t=e),this._items=[],this._itemMap=new Map,this._idProperty=t.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],n)for(const o of e)this._items.push(o),this._itemMap.set(this._getItemIdBeforeAdding(o),o)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(e,t){return this.addMany([e],t)}addMany(e,t){if(t===void 0)t=this._items.length;else if(t>this._items.length||t<0)throw new M("collection-add-item-invalid-index",this);let n=0;for(const o of e){const r=this._getItemIdBeforeAdding(o),l=t+n;this._items.splice(l,0,o),this._itemMap.set(r,o),this.fire("add",o,l),n++}return this.fire("change",{added:e,removed:[],index:t}),this}get(e){let t;if(typeof e=="string")t=this._itemMap.get(e);else if(typeof e=="number")t=this._items[e];else throw new M("collection-get-invalid-arg",this);return t||null}has(e){if(typeof e=="string")return this._itemMap.has(e);{const t=this._idProperty,n=e[t];return n&&this._itemMap.has(n)}}getIndex(e){let t;return typeof e=="string"?t=this._itemMap.get(e):t=e,t?this._items.indexOf(t):-1}remove(e){const[t,n]=this._remove(e);return this.fire("change",{added:[],removed:[t],index:n}),t}map(e,t){return this._items.map(e,t)}find(e,t){return this._items.find(e,t)}filter(e,t){return this._items.filter(e,t)}clear(){this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);const e=Array.from(this._items);for(;this.length;)this._remove(0);this.fire("change",{added:[],removed:e,index:0})}bindTo(e){if(this._bindToCollection)throw new M("collection-bind-to-rebind",this);return this._bindToCollection=e,{as:t=>{this._setUpBindToBinding(n=>new t(n))},using:t=>{typeof t=="function"?this._setUpBindToBinding(t):this._setUpBindToBinding(n=>n[t])}}}_setUpBindToBinding(e){const t=this._bindToCollection,n=(o,r,l)=>{const c=t._bindToCollection==this,u=t._bindToInternalToExternalMap.get(r);if(c&&u)this._bindToExternalToInternalMap.set(r,u),this._bindToInternalToExternalMap.set(u,r);else{const m=e(r);if(!m){this._skippedIndexesFromExternal.push(l);return}let p=l;for(const w of this._skippedIndexesFromExternal)l>w&&p--;for(const w of t._skippedIndexesFromExternal)p>=w&&p++;this._bindToExternalToInternalMap.set(r,m),this._bindToInternalToExternalMap.set(m,r),this.add(m,p);for(let w=0;w<t._skippedIndexesFromExternal.length;w++)p<=t._skippedIndexesFromExternal[w]&&t._skippedIndexesFromExternal[w]++}};for(const o of t)n(null,o,t.getIndex(o));this.listenTo(t,"add",n),this.listenTo(t,"remove",(o,r,l)=>{const c=this._bindToExternalToInternalMap.get(r);c&&this.remove(c),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((u,m)=>(l<m&&u.push(m-1),l>m&&u.push(m),u),[])})}_getItemIdBeforeAdding(e){const t=this._idProperty;let n;if(t in e){if(n=e[t],typeof n!="string")throw new M("collection-add-invalid-id",this);if(this.get(n))throw new M("collection-add-item-already-exists",this)}else e[t]=n=we();return n}_remove(e){let t,n,o,r=!1;const l=this._idProperty;if(typeof e=="string"?(n=e,o=this._itemMap.get(n),r=!o,o&&(t=this._items.indexOf(o))):typeof e=="number"?(t=e,o=this._items[t],r=!o,o&&(n=o[l])):(o=e,n=o[l],t=this._items.indexOf(o),r=t==-1||!this._itemMap.get(n)),r)throw new M("collection-remove-404",this);this._items.splice(t,1),this._itemMap.delete(n);const c=this._bindToInternalToExternalMap.get(o);return this._bindToInternalToExternalMap.delete(o),this._bindToExternalToInternalMap.delete(c),this.fire("remove",o,t),[o,t]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}function Xe(i){const e=i.next();return e.done?null:e.value}class st extends Co(De()){constructor(){super(),this._elements=new Set,this._nextEventLoopTimeout=null,this.set("isFocused",!1),this.set("focusedElement",null)}add(e){if(this._elements.has(e))throw new M("focustracker-add-element-already-exist",this);this.listenTo(e,"focus",()=>this._focus(e),{useCapture:!0}),this.listenTo(e,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(e)}remove(e){e===this.focusedElement&&this._blur(),this._elements.has(e)&&(this.stopListening(e),this._elements.delete(e))}destroy(){this.stopListening()}_focus(e){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=e,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}class bt{constructor(){this._listener=new(Co())}listenTo(e){this._listener.listenTo(e,"keydown",(t,n)=>{this._listener.fire("_keydown:"+Pr(n),n)})}set(e,t,n={}){const o=su(e),r=n.priority;this._listener.listenTo(this._listener,"_keydown:"+o,(l,c)=>{t(c,()=>{c.preventDefault(),c.stopPropagation(),l.stop()}),l.return=!0},{priority:r})}press(e){return!!this._listener.fire("_keydown:"+Pr(e),e)}destroy(){this._listener.stopListening()}}function ZL(i){const e=new Map;for(const t in i)e.set(t,i[t]);return e}function Ci(i){return an(i)?new Map(i):ZL(i)}const QL=1e4;function JL(i,e,t,n){if(Math.max(e.length,i.length)>QL)return i.slice(0,t).concat(e).concat(i.slice(t+n,i.length));{const o=Array.from(i);return o.splice(t,n,...e),o}}function XL(i){return!!i&&i.length==1&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(i)}function ez(i){return!!i&&i.length==1&&/[\ud800-\udbff]/.test(i)}function tz(i){return!!i&&i.length==1&&/[\udc00-\udfff]/.test(i)}function MC(i,e){return ez(i.charAt(e-1))&&tz(i.charAt(e))}function BC(i,e){return XL(i.charAt(e))}const nz=oz();function iz(i,e){const t=String(i).matchAll(nz);return Array.from(t).some(n=>n.index<e&&e<n.index+n[0].length)}function oz(){const i=[/\p{Emoji}[\u{E0020}-\u{E007E}]+\u{E007F}/u,/\p{Emoji}\u{FE0F}?\u{20E3}/u,/\p{Emoji}\u{FE0F}/u,/(?=\p{General_Category=Other_Symbol})\p{Emoji}\p{Emoji_Modifier}*/u],e=/\p{Regional_Indicator}{2}/u.source,t="(?:"+i.map(o=>o.source).join("|")+")",n=`${e}|${t}(?:‍${t})*`;return new RegExp(n,"ug")}class j extends De(){constructor(e){super(),this.editor=e,this.set("isEnabled",!0),this._disableStack=new Set}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",LC,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",LC),this.isEnabled=!0)}destroy(){this.stopListening()}static get isContextPlugin(){return!1}}function LC(i){i.return=!1,i.stop()}class ue extends De(){constructor(e){super(),this.editor=e,this.set("value",void 0),this.set("isEnabled",!1),this._affectsData=!0,this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.on("execute",t=>{this.isEnabled||t.stop()},{priority:"high"}),this.listenTo(e,"change:isReadOnly",(t,n,o)=>{o&&this.affectsData?this.forceDisabled("readOnlyMode"):this.clearForceDisabled("readOnlyMode")})}get affectsData(){return this._affectsData}set affectsData(e){this._affectsData=e}refresh(){this.isEnabled=!0}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",zC,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",zC),this.refresh())}execute(...e){}destroy(){this.stopListening()}}function zC(i){i.return=!1,i.stop()}class NC extends ue{constructor(e){super(e),this._childCommandsDefinitions=[]}refresh(){}execute(...e){const t=this._getFirstEnabledCommand();return!!t&&t.execute(e)}registerChildCommand(e,t={}){Vt(this._childCommandsDefinitions,{command:e,priority:t.priority||"normal"}),e.on("change:isEnabled",()=>this._checkEnabled()),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){const e=this._childCommandsDefinitions.find(({command:t})=>t.isEnabled);return e&&e.command}}class PC extends Ne(){constructor(e,t=[],n=[]){super(),this._context=e,this._plugins=new Map,this._availablePlugins=new Map;for(const o of t)o.pluginName&&this._availablePlugins.set(o.pluginName,o);this._contextPlugins=new Map;for(const[o,r]of n)this._contextPlugins.set(o,r),this._contextPlugins.set(r,o),o.pluginName&&this._availablePlugins.set(o.pluginName,o)}*[Symbol.iterator](){for(const e of this._plugins)typeof e[0]=="function"&&(yield e)}get(e){const t=this._plugins.get(e);if(!t){let n=e;throw typeof e=="function"&&(n=e.pluginName||e.name),new M("plugincollection-plugin-not-loaded",this._context,{plugin:n})}return t}has(e){return this._plugins.has(e)}init(e,t=[],n=[]){const o=this,r=this._context;I(e),P(e);const l=e.filter(le=>!w(le,t)),c=[...B(l)];nt(c,n);const u=xe(c);return Te(u,"init").then(()=>Te(u,"afterInit")).then(()=>u);function m(le){return typeof le=="function"}function p(le){return m(le)&&le.isContextPlugin}function w(le,ve){return ve.some(fe=>fe===le||C(le)===fe||C(fe)===le)}function C(le){return m(le)?le.pluginName||le.name:le}function I(le,ve=new Set){le.forEach(fe=>{m(fe)&&(ve.has(fe)||(ve.add(fe),fe.pluginName&&!o._availablePlugins.has(fe.pluginName)&&o._availablePlugins.set(fe.pluginName,fe),fe.requires&&I(fe.requires,ve)))})}function B(le,ve=new Set){return le.map(fe=>m(fe)?fe:o._availablePlugins.get(fe)).reduce((fe,wt)=>ve.has(wt)?fe:(ve.add(wt),wt.requires&&(P(wt.requires,wt),B(wt.requires,ve).forEach(as=>fe.add(as))),fe.add(wt)),new Set)}function P(le,ve=null){le.map(fe=>m(fe)?fe:o._availablePlugins.get(fe)||fe).forEach(fe=>{V(fe,ve),G(fe,ve),J(fe,ve)})}function V(le,ve){if(!m(le))throw ve?new M("plugincollection-soft-required",r,{missingPlugin:le,requiredBy:C(ve)}):new M("plugincollection-plugin-not-found",r,{plugin:le})}function G(le,ve){if(p(ve)&&!p(le))throw new M("plugincollection-context-required",r,{plugin:C(le),requiredBy:C(ve)})}function J(le,ve){if(ve&&w(le,t))throw new M("plugincollection-required",r,{plugin:C(le),requiredBy:C(ve)})}function xe(le){return le.map(ve=>{let fe=o._contextPlugins.get(ve);return fe=fe||new ve(r),o._add(ve,fe),fe})}function Te(le,ve){return le.reduce((fe,wt)=>!wt[ve]||o._contextPlugins.has(wt)?fe:fe.then(wt[ve].bind(wt)),Promise.resolve())}function nt(le,ve){for(const fe of ve){if(typeof fe!="function")throw new M("plugincollection-replace-plugin-invalid-type",null,{pluginItem:fe});const wt=fe.pluginName;if(!wt)throw new M("plugincollection-replace-plugin-missing-name",null,{pluginItem:fe});if(fe.requires&&fe.requires.length)throw new M("plugincollection-plugin-for-replacing-cannot-have-dependencies",null,{pluginName:wt});const as=o._availablePlugins.get(wt);if(!as)throw new M("plugincollection-plugin-for-replacing-not-exist",null,{pluginName:wt});const $S=le.indexOf(as);if($S===-1){if(o._contextPlugins.has(as))return;throw new M("plugincollection-plugin-for-replacing-not-loaded",null,{pluginName:wt})}if(as.requires&&as.requires.length)throw new M("plugincollection-replaced-plugin-cannot-have-dependencies",null,{pluginName:wt});le.splice($S,1,fe),o._availablePlugins.set(wt,fe)}}}destroy(){const e=[];for(const[,t]of this)typeof t.destroy=="function"&&!this._contextPlugins.has(t)&&e.push(t.destroy());return Promise.all(e)}_add(e,t){this._plugins.set(e,t);const n=e.pluginName;if(n){if(this._plugins.has(n))throw new M("plugincollection-plugin-name-conflict",null,{pluginName:n,plugin1:this._plugins.get(n).constructor,plugin2:e});this._plugins.set(n,t)}}}class rz{constructor(e){this.config=new cC(e,this.constructor.defaultConfig);const t=this.constructor.builtinPlugins;this.config.define("plugins",t),this.plugins=new PC(this,t);const n=this.config.get("language")||{};this.locale=new KL({uiLanguage:typeof n=="string"?n:n.ui,contentLanguage:this.config.get("language.content")}),this.t=this.locale.t,this.editors=new rt,this._contextOwner=null}initPlugins(){const e=this.config.get("plugins")||[],t=this.config.get("substitutePlugins")||[];for(const n of e.concat(t)){if(typeof n!="function")throw new M("context-initplugins-constructor-only",null,{Plugin:n});if(n.isContextPlugin!==!0)throw new M("context-initplugins-invalid-plugin",null,{Plugin:n})}return this.plugins.init(e,[],t)}destroy(){return Promise.all(Array.from(this.editors,e=>e.destroy())).then(()=>this.plugins.destroy())}_addEditor(e,t){if(this._contextOwner)throw new M("context-addeditor-private-context");this.editors.add(e),t&&(this._contextOwner=e)}_removeEditor(e){return this.editors.has(e)&&this.editors.remove(e),this._contextOwner===e?this.destroy():Promise.resolve()}_getEditorConfig(){const e={};for(const t of this.config.names())["plugins","removePlugins","extraPlugins"].includes(t)||(e[t]=this.config.get(t));return e}static create(e){return new Promise(t=>{const n=new this(e);t(n.initPlugins().then(()=>n))})}}class lu extends De(){constructor(e){super(),this.context=e}destroy(){this.stopListening()}static get isContextPlugin(){return!0}}var sz=f(3379),te=f.n(sz),RC=f(8894),Fg={injectType:"singletonStyleTag",attributes:{"data-cke":!0}};Fg.insert="head",Fg.singleton=!0,te()(RC.Z,Fg),RC.Z.locals;const cu=new WeakMap;function Vg(i){const{view:e,element:t,text:n,isDirectHost:o=!0,keepOnFocus:r=!1}=i,l=e.document;cu.has(l)||(cu.set(l,new Map),l.registerPostFixer(c=>Hg(l,c)),l.on("change:isComposing",()=>{e.change(c=>Hg(l,c))},{priority:"high"})),cu.get(l).set(t,{text:n,isDirectHost:o,keepOnFocus:r,hostElement:o?t:null}),e.change(c=>Hg(l,c))}function az(i,e){return e.hasClass("ck-placeholder")?!1:(i.addClass("ck-placeholder",e),!0)}function lz(i,e){return e.hasClass("ck-placeholder")?(i.removeClass("ck-placeholder",e),!0):!1}function cz(i,e){if(!i.isAttached()||Array.from(i.getChildren()).some(l=>!l.is("uiElement")))return!1;const n=i.document,r=n.selection.anchor;return n.isComposing&&r&&r.parent===i?!1:e||!n.isFocused?!0:!!r&&r.parent!==i}function Hg(i,e){const t=cu.get(i),n=[];let o=!1;for(const[r,l]of t)l.isDirectHost&&(n.push(r),OC(e,r,l)&&(o=!0));for(const[r,l]of t){if(l.isDirectHost)continue;const c=dz(r);c&&(n.includes(c)||(l.hostElement=c,OC(e,r,l)&&(o=!0)))}return o}function OC(i,e,t){const{text:n,isDirectHost:o,hostElement:r}=t;let l=!1;return r.getAttribute("data-placeholder")!==n&&(i.setAttribute("data-placeholder",n,r),l=!0),(o||e.childCount==1)&&cz(r,t.keepOnFocus)?az(i,r)&&(l=!0):lz(i,r)&&(l=!0),l}function dz(i){if(i.childCount){const e=i.getChild(0);if(e.is("element")&&!e.is("uiElement")&&!e.is("attributeElement"))return e}return null}class Rr{is(){throw new Error("is() method is abstract")}}var uz=4;function hz(i){return zg(i,uz)}const jC=hz;class Or extends Ne(Rr){constructor(e){super(),this.document=e,this.parent=null}get index(){let e;if(!this.parent)return null;if((e=this.parent.getChildIndex(this))==-1)throw new M("view-node-not-found-in-parent",this);return e}get nextSibling(){const e=this.index;return e!==null&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return e!==null&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}isAttached(){return this.root.is("rootElement")}getPath(){const e=[];let t=this;for(;t.parent;)e.unshift(t.index),t=t.parent;return e}getAncestors(e={}){const t=[];let n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}getCommonAncestor(e,t={}){const n=this.getAncestors(t),o=e.getAncestors(t);let r=0;for(;n[r]==o[r]&&n[r];)r++;return r===0?null:n[r-1]}isBefore(e){if(this==e||this.root!==e.root)return!1;const t=this.getPath(),n=e.getPath(),o=gt(t,n);switch(o){case"prefix":return!0;case"extension":return!1;default:return t[o]<n[o]}}isAfter(e){return this==e||this.root!==e.root?!1:!this.isBefore(e)}_remove(){this.parent._removeChildren(this.index)}_fireChange(e,t){this.fire(`change:${e}`,t),this.parent&&this.parent._fireChange(e,t)}toJSON(){const e=jC(this);return delete e.parent,e}}Or.prototype.is=function(i){return i==="node"||i==="view:node"};class Ye extends Or{constructor(e,t){super(e),this._textData=t}get data(){return this._textData}get _data(){return this.data}set _data(e){this._fireChange("text",this),this._textData=e}isSimilar(e){return e instanceof Ye?this===e||this.data===e.data:!1}_clone(){return new Ye(this.document,this.data)}}Ye.prototype.is=function(i){return i==="$text"||i==="view:$text"||i==="text"||i==="view:text"||i==="node"||i==="view:node"};class Vi extends Rr{constructor(e,t,n){if(super(),this.textNode=e,t<0||t>e.data.length)throw new M("view-textproxy-wrong-offsetintext",this);if(n<0||t+n>e.data.length)throw new M("view-textproxy-wrong-length",this);this.data=e.data.substring(t,t+n),this.offsetInText=t}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}getAncestors(e={}){const t=[];let n=e.includeSelf?this.textNode:this.parent;for(;n!==null;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}}Vi.prototype.is=function(i){return i==="$textProxy"||i==="view:$textProxy"||i==="textProxy"||i==="view:textProxy"};class Pn{constructor(...e){this._patterns=[],this.add(...e)}add(...e){for(let t of e)(typeof t=="string"||t instanceof RegExp)&&(t={name:t}),this._patterns.push(t)}match(...e){for(const t of e)for(const n of this._patterns){const o=FC(t,n);if(o)return{element:t,pattern:n,match:o}}return null}matchAll(...e){const t=[];for(const n of e)for(const o of this._patterns){const r=FC(n,o);r&&t.push({element:n,pattern:o,match:r})}return t.length>0?t:null}getElementName(){if(this._patterns.length!==1)return null;const e=this._patterns[0],t=e.name;return typeof e!="function"&&t&&!(t instanceof RegExp)?t:null}}function FC(i,e){if(typeof e=="function")return e(i);const t={};return e.name&&(t.name=fz(e.name,i.name),!t.name)||e.attributes&&(t.attributes=kz(e.attributes,i),!t.attributes)||e.classes&&(t.classes=bz(e.classes,i),!t.classes)||e.styles&&(t.styles=wz(e.styles,i),!t.styles)?null:t}function fz(i,e){return i instanceof RegExp?!!e.match(i):i===e}function Ug(i,e,t){const n=mz(i),o=Array.from(e),r=[];if(n.forEach(([l,c])=>{o.forEach(u=>{gz(l,u)&&pz(c,u,t)&&r.push(u)})}),!(!n.length||r.length<n.length))return r}function mz(i){return Array.isArray(i)?i.map(e=>Jt(e)?((e.key===void 0||e.value===void 0)&&re("matcher-pattern-missing-key-or-value",e),[e.key,e.value]):[e,!0]):Jt(i)?Object.entries(i):[[i,!0]]}function gz(i,e){return i===!0||i===e||i instanceof RegExp&&e.match(i)}function pz(i,e,t){if(i===!0)return!0;const n=t(e);return i===n||i instanceof RegExp&&!!String(n).match(i)}function kz(i,e){const t=new Set(e.getAttributeKeys());return Jt(i)?(i.style!==void 0&&re("matcher-pattern-deprecated-attributes-style-key",i),i.class!==void 0&&re("matcher-pattern-deprecated-attributes-class-key",i)):(t.delete("style"),t.delete("class")),Ug(i,t,n=>e.getAttribute(n))}function bz(i,e){return Ug(i,e.getClassNames(),()=>{})}function wz(i,e){return Ug(i,e.getStyleNames(!0),t=>e.getStyle(t))}var vz="[object Symbol]";function Az(i){return typeof i=="symbol"||Cn(i)&&Ri(i)==vz}const du=Az;var Cz=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,_z=/^\w*$/;function yz(i,e){if(Qt(i))return!1;var t=typeof i;return t=="number"||t=="symbol"||t=="boolean"||i==null||du(i)?!0:_z.test(i)||!Cz.test(i)||e!=null&&i in Object(e)}const xz=yz;var Ez="Expected a function";function $g(i,e){if(typeof i!="function"||e!=null&&typeof e!="function")throw new TypeError(Ez);var t=function(){var n=arguments,o=e?e.apply(this,n):n[0],r=t.cache;if(r.has(o))return r.get(o);var l=i.apply(this,n);return t.cache=r.set(o,l)||r,l};return t.cache=new($g.Cache||Fi),t}$g.Cache=Fi;const Sz=$g;var Dz=500;function Tz(i){var e=Sz(i,function(n){return t.size===Dz&&t.clear(),n}),t=e.cache;return e}const Iz=Tz;var Mz=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Bz=/\\(\\)?/g,Lz=Iz(function(i){var e=[];return i.charCodeAt(0)===46&&e.push(""),i.replace(Mz,function(t,n,o,r){e.push(o?r.replace(Bz,"$1"):n||t)}),e});const zz=Lz;function Nz(i,e){for(var t=-1,n=i==null?0:i.length,o=Array(n);++t<n;)o[t]=e(i[t],t,i);return o}const VC=Nz;var Pz=1/0,HC=ei?ei.prototype:void 0,UC=HC?HC.toString:void 0;function $C(i){if(typeof i=="string")return i;if(Qt(i))return VC(i,$C)+"";if(du(i))return UC?UC.call(i):"";var e=i+"";return e=="0"&&1/i==-Pz?"-0":e}const Rz=$C;function Oz(i){return i==null?"":Rz(i)}const Wg=Oz;function jz(i,e){return Qt(i)?i:xz(i,e)?[i]:zz(Wg(i))}const Gg=jz;function Fz(i){var e=i==null?0:i.length;return e?i[e-1]:void 0}const Vz=Fz;var Hz=1/0;function Uz(i){if(typeof i=="string"||du(i))return i;var e=i+"";return e=="0"&&1/i==-Hz?"-0":e}const qg=Uz;function $z(i,e){e=Gg(e,i);for(var t=0,n=e.length;i!=null&&t<n;)i=i[qg(e[t++])];return t&&t==n?i:void 0}const WC=$z;function Wz(i,e,t){var n=-1,o=i.length;e<0&&(e=-e>o?0:o+e),t=t>o?o:t,t<0&&(t+=o),o=e>t?0:t-e>>>0,e>>>=0;for(var r=Array(o);++n<o;)r[n]=i[n+e];return r}const GC=Wz;function Gz(i,e){return e.length<2?i:WC(i,GC(e,0,-1))}const qz=Gz;function Kz(i,e){return e=Gg(e,i),i=qz(i,e),i==null||delete i[qg(Vz(e))]}const Yz=Kz;function Zz(i,e){return i==null?!0:Yz(i,e)}const Qz=Zz;function Jz(i,e,t){var n=i==null?void 0:WC(i,e);return n===void 0?t:n}const uu=Jz;function Xz(i,e,t){(t!==void 0&&!ho(i[e],t)||t===void 0&&!(e in i))&&z(i,e,t)}const Kg=Xz;function eN(i){return function(e,t,n){for(var o=-1,r=Object(e),l=n(e),c=l.length;c--;){var u=l[i?c:++o];if(t(r[u],u,r)===!1)break}return e}}var tN=eN();const nN=tN;function iN(i){return Cn(i)&&Xd(i)}const oN=iN;function rN(i,e){if(!(e==="constructor"&&typeof i[e]=="function")&&e!="__proto__")return i[e]}const Yg=rN;function sN(i){return Ke(i,zs(i))}const aN=sN;function lN(i,e,t,n,o,r,l){var c=Yg(i,t),u=Yg(e,t),m=l.get(u);if(m){Kg(i,t,m);return}var p=r?r(c,u,t+"",i,e,l):void 0,w=p===void 0;if(w){var C=Qt(u),I=!C&&Cl(u),B=!C&&!I&&_g(u);p=u,C||I||B?Qt(c)?p=c:oN(c)?p=Eg(c):I?(w=!1,p=V0(u,!0)):B?(w=!1,p=eC(u,!0)):p=[]:Jt(u)||Lr(u)?(p=c,Lr(c)?p=aN(c):(!He(c)||mo(c))&&(p=nC(u))):w=!1}w&&(l.set(u,p),o(p,u,n,r,l),l.delete(u)),Kg(i,t,p)}const cN=lN;function qC(i,e,t,n,o){i!==e&&nN(e,function(r,l){if(o||(o=new bo),He(r))cN(i,e,l,t,qC,n,o);else{var c=n?n(Yg(i,l),r,l+"",i,e,o):void 0;c===void 0&&(c=r),Kg(i,l,c)}},zs)}const KC=qC;function dN(i){return i}const jr=dN;function uN(i,e,t){switch(t.length){case 0:return i.call(e);case 1:return i.call(e,t[0]);case 2:return i.call(e,t[0],t[1]);case 3:return i.call(e,t[0],t[1],t[2])}return i.apply(e,t)}const hN=uN;var YC=Math.max;function fN(i,e,t){return e=YC(e===void 0?i.length-1:e,0),function(){for(var n=arguments,o=-1,r=YC(n.length-e,0),l=Array(r);++o<r;)l[o]=n[e+o];o=-1;for(var c=Array(e+1);++o<e;)c[o]=n[o];return c[e]=t(l),hN(i,this,c)}}const mN=fN;function gN(i){return function(){return i}}const pN=gN;var kN=S?function(i,e){return S(i,"toString",{configurable:!0,enumerable:!1,value:pN(e),writable:!0})}:jr;const bN=kN;var wN=800,vN=16,AN=Date.now;function CN(i){var e=0,t=0;return function(){var n=AN(),o=vN-(n-t);if(t=n,o>0){if(++e>=wN)return arguments[0]}else e=0;return i.apply(void 0,arguments)}}var _N=CN(bN);const yN=_N;function xN(i,e){return yN(mN(i,e,jr),i+"")}const ZC=xN;function EN(i,e,t){if(!He(t))return!1;var n=typeof e;return(n=="number"?Xd(t)&&Ag(e,t.length):n=="string"&&e in t)?ho(t[e],i):!1}const SN=EN;function DN(i){return ZC(function(e,t){var n=-1,o=t.length,r=o>1?t[o-1]:void 0,l=o>2?t[2]:void 0;for(r=i.length>3&&typeof r=="function"?(o--,r):void 0,l&&SN(t[0],t[1],l)&&(r=o<3?void 0:r,o=1),e=Object(e);++n<o;){var c=t[n];c&&i(e,c,n,r)}return e})}const Zg=DN;var TN=Zg(function(i,e,t){KC(i,e,t)});const QC=TN;function IN(i,e,t,n){if(!He(i))return i;e=Gg(e,i);for(var o=-1,r=e.length,l=r-1,c=i;c!=null&&++o<r;){var u=qg(e[o]),m=t;if(u==="__proto__"||u==="constructor"||u==="prototype")return i;if(o!=l){var p=c[u];m=n?n(p,u,c):void 0,m===void 0&&(m=He(p)?p:Ag(e[o+1])?[]:{})}Ce(c,u,m),c=c[u]}return i}const MN=IN;function BN(i,e,t){return i==null?i:MN(i,e,t)}const LN=BN;class zN{constructor(e){this._styles={},this._styleProcessor=e}get isEmpty(){const e=Object.entries(this._styles);return!Array.from(e).length}get size(){return this.isEmpty?0:this.getStyleNames().length}setTo(e){this.clear();const t=Array.from(PN(e).entries());for(const[n,o]of t)this._styleProcessor.toNormalizedForm(n,o,this._styles)}has(e){if(this.isEmpty)return!1;const n=this._styleProcessor.getReducedForm(e,this._styles).find(([o])=>o===e);return Array.isArray(n)}set(e,t){if(He(e))for(const[n,o]of Object.entries(e))this._styleProcessor.toNormalizedForm(n,o,this._styles);else this._styleProcessor.toNormalizedForm(e,t,this._styles)}remove(e){const t=Qg(e);Qz(this._styles,t),delete this._styles[e],this._cleanEmptyObjectsOnPath(t)}getNormalized(e){return this._styleProcessor.getNormalized(e,this._styles)}toString(){return this.isEmpty?"":this._getStylesEntries().map(e=>e.join(":")).sort().join(";")+";"}getAsString(e){if(this.isEmpty)return;if(this._styles[e]&&!He(this._styles[e]))return this._styles[e];const n=this._styleProcessor.getReducedForm(e,this._styles).find(([o])=>o===e);if(Array.isArray(n))return n[1]}getStyleNames(e=!1){return this.isEmpty?[]:e?this._styleProcessor.getStyleNames(this._styles):this._getStylesEntries().map(([n])=>n)}clear(){this._styles={}}_getStylesEntries(){const e=[],t=Object.keys(this._styles);for(const n of t)e.push(...this._styleProcessor.getReducedForm(n,this._styles));return e}_cleanEmptyObjectsOnPath(e){const t=e.split(".");if(!(t.length>1))return;const o=t.splice(0,t.length-1).join("."),r=uu(this._styles,o);if(!r)return;!Array.from(Object.keys(r)).length&&this.remove(o)}}class NN{constructor(){this._normalizers=new Map,this._extractors=new Map,this._reducers=new Map,this._consumables=new Map}toNormalizedForm(e,t,n){if(He(t)){Jg(n,Qg(e),t);return}if(this._normalizers.has(e)){const o=this._normalizers.get(e),{path:r,value:l}=o(t);Jg(n,r,l)}else Jg(n,e,t)}getNormalized(e,t){if(!e)return QC({},t);if(t[e]!==void 0)return t[e];if(this._extractors.has(e)){const n=this._extractors.get(e);if(typeof n=="string")return uu(t,n);const o=n(e,t);if(o)return o}return uu(t,Qg(e))}getReducedForm(e,t){const n=this.getNormalized(e,t);return n===void 0?[]:this._reducers.has(e)?this._reducers.get(e)(n):[[e,n]]}getStyleNames(e){const t=Array.from(this._consumables.keys()).filter(o=>{const r=this.getNormalized(o,e);return r&&typeof r=="object"?Object.keys(r).length:r}),n=new Set([...t,...Object.keys(e)]);return Array.from(n.values())}getRelatedStyles(e){return this._consumables.get(e)||[]}setNormalizer(e,t){this._normalizers.set(e,t)}setExtractor(e,t){this._extractors.set(e,t)}setReducer(e,t){this._reducers.set(e,t)}setStyleRelation(e,t){this._mapStyleNames(e,t);for(const n of t)this._mapStyleNames(n,[e])}_mapStyleNames(e,t){this._consumables.has(e)||this._consumables.set(e,[]),this._consumables.get(e).push(...t)}}function PN(i){let e=null,t=0,n=0,o=null;const r=new Map;if(i==="")return r;i.charAt(i.length-1)!=";"&&(i=i+";");for(let l=0;l<i.length;l++){const c=i.charAt(l);if(e===null)switch(c){case":":o||(o=i.substr(t,l-t),n=l+1);break;case'"':case"'":e=c;break;case";":{const u=i.substr(n,l-n);o&&r.set(o.trim(),u.trim()),o=null,t=l+1;break}}else c===e&&(e=null)}return r}function Qg(i){return i.replace("-",".")}function Jg(i,e,t){let n=t;He(t)&&(n=QC({},uu(i,e),t)),LN(i,e,n)}class Rn extends Or{constructor(e,t,n,o){if(super(e),this.name=t,this._attrs=RN(n),this._children=[],o&&this._insertChild(0,o),this._classes=new Set,this._attrs.has("class")){const r=this._attrs.get("class");JC(this._classes,r),this._attrs.delete("class")}this._styles=new zN(this.document.stylesProcessor),this._attrs.has("style")&&(this._styles.setTo(this._attrs.get("style")),this._attrs.delete("style")),this._customProperties=new Map,this._unsafeAttributesToRender=[]}get childCount(){return this._children.length}get isEmpty(){return this._children.length===0}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.isEmpty||(yield"style"),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.isEmpty||(yield["style",this.getAttribute("style")])}getAttribute(e){if(e=="class")return this._classes.size>0?[...this._classes].join(" "):void 0;if(e=="style"){const t=this._styles.toString();return t==""?void 0:t}return this._attrs.get(e)}hasAttribute(e){return e=="class"?this._classes.size>0:e=="style"?!this._styles.isEmpty:this._attrs.has(e)}isSimilar(e){if(!(e instanceof Rn))return!1;if(this===e)return!0;if(this.name!=e.name||this._attrs.size!==e._attrs.size||this._classes.size!==e._classes.size||this._styles.size!==e._styles.size)return!1;for(const[t,n]of this._attrs)if(!e._attrs.has(t)||e._attrs.get(t)!==n)return!1;for(const t of this._classes)if(!e._classes.has(t))return!1;for(const t of this._styles.getStyleNames())if(!e._styles.has(t)||e._styles.getAsString(t)!==this._styles.getAsString(t))return!1;return!0}hasClass(...e){for(const t of e)if(!this._classes.has(t))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(e){return this._styles.getAsString(e)}getNormalizedStyle(e){return this._styles.getNormalized(e)}getStyleNames(e){return this._styles.getStyleNames(e)}hasStyle(...e){for(const t of e)if(!this._styles.has(t))return!1;return!0}findAncestor(...e){const t=new Pn(...e);let n=this.parent;for(;n&&!n.is("documentFragment");){if(t.match(n))return n;n=n.parent}return null}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const e=Array.from(this._classes).sort().join(","),t=this._styles.toString(),n=Array.from(this._attrs).map(o=>`${o[0]}="${o[1]}"`).sort().join(" ");return this.name+(e==""?"":` class="${e}"`)+(t?` style="${t}"`:"")+(n==""?"":` ${n}`)}shouldRenderUnsafeAttribute(e){return this._unsafeAttributesToRender.includes(e)}_clone(e=!1){const t=[];if(e)for(const o of this.getChildren())t.push(o._clone(e));const n=new this.constructor(this.document,this.name,this._attrs,t);return n._classes=new Set(this._classes),n._styles.set(this._styles.getNormalized()),n._customProperties=new Map(this._customProperties),n.getFillerOffset=this.getFillerOffset,n._unsafeAttributesToRender=this._unsafeAttributesToRender,n}_appendChild(e){return this._insertChild(this.childCount,e)}_insertChild(e,t){this._fireChange("children",this);let n=0;const o=ON(this.document,t);for(const r of o)r.parent!==null&&r._remove(),r.parent=this,r.document=this.document,this._children.splice(e,0,r),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_setAttribute(e,t){const n=String(t);this._fireChange("attributes",this),e=="class"?JC(this._classes,n):e=="style"?this._styles.setTo(n):this._attrs.set(e,n)}_removeAttribute(e){return this._fireChange("attributes",this),e=="class"?this._classes.size>0?(this._classes.clear(),!0):!1:e=="style"?this._styles.isEmpty?!1:(this._styles.clear(),!0):this._attrs.delete(e)}_addClass(e){this._fireChange("attributes",this);for(const t of kt(e))this._classes.add(t)}_removeClass(e){this._fireChange("attributes",this);for(const t of kt(e))this._classes.delete(t)}_setStyle(e,t){this._fireChange("attributes",this),Jt(e)?this._styles.set(e):this._styles.set(e,t)}_removeStyle(e){this._fireChange("attributes",this);for(const t of kt(e))this._styles.remove(t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}Rn.prototype.is=function(i,e){return e?e===this.name&&(i==="element"||i==="view:element"):i==="element"||i==="view:element"||i==="node"||i==="view:node"};function RN(i){const e=Ci(i);for(const[t,n]of e)n===null?e.delete(t):typeof n!="string"&&e.set(t,String(n));return e}function JC(i,e){const t=e.split(/\s+/);i.clear(),t.forEach(n=>i.add(n))}function ON(i,e){return typeof e=="string"?[new Ye(i,e)]:(an(e)||(e=[e]),Array.from(e).map(t=>typeof t=="string"?new Ye(i,t):t instanceof Vi?new Ye(i,t.data):t))}class xl extends Rn{constructor(...e){super(...e),this.getFillerOffset=XC}}xl.prototype.is=function(i,e){return e?e===this.name&&(i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"):i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};function XC(){const i=[...this.getChildren()],e=i[this.childCount-1];if(e&&e.is("element","br"))return this.childCount;for(const t of i)if(!t.is("uiElement"))return null;return this.childCount}class hu extends De(xl){constructor(...e){super(...e);const t=e[0];this.set("isReadOnly",!1),this.set("isFocused",!1),this.bind("isReadOnly").to(t),this.bind("isFocused").to(t,"isFocused",n=>n&&t.selection.editableElement==this),this.listenTo(t.selection,"change",()=>{this.isFocused=t.isFocused&&t.selection.editableElement==this})}destroy(){this.stopListening()}}hu.prototype.is=function(i,e){return e?e===this.name&&(i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"):i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};const e_=Symbol("rootName");class t_ extends hu{constructor(e,t){super(e,t),this.rootName="main"}get rootName(){return this.getCustomProperty(e_)}set rootName(e){this._setCustomProperty(e_,e)}set _name(e){this.name=e}}t_.prototype.is=function(i,e){return e?e===this.name&&(i==="rootElement"||i==="view:rootElement"||i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"):i==="rootElement"||i==="view:rootElement"||i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class Fr{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new M("view-tree-walker-no-start-position",null);if(e.direction&&e.direction!="forward"&&e.direction!="backward")throw new M("view-tree-walker-unknown-direction",e.startPosition,{direction:e.direction});this.boundaries=e.boundaries||null,e.startPosition?this.position=ne._createAt(e.startPosition):this.position=ne._createAt(e.boundaries[e.direction=="backward"?"end":"start"]),this.direction=e.direction||"forward",this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}skip(e){let t,n,o;do o=this.position,{done:t,value:n}=this.next();while(!t&&e(n));t||(this.position=o)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===n.childCount)return{done:!0,value:void 0};if(n===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0,value:void 0};let o;if(n instanceof Ye){if(e.isAtEnd)return this.position=ne._createAfter(n),this._next();o=n.data[e.offset]}else o=n.getChild(e.offset);if(o instanceof Rn)return this.shallow?e.offset++:e=new ne(o,0),this.position=e,this._formatReturnValue("elementStart",o,t,e,1);if(o instanceof Ye){if(this.singleCharacters)return e=new ne(o,0),this.position=e,this._next();{let r=o.data.length,l;return o==this._boundaryEndParent?(r=this.boundaries.end.offset,l=new Vi(o,0,r),e=ne._createAfter(l)):(l=new Vi(o,0,o.data.length),e.offset++),this.position=e,this._formatReturnValue("text",l,t,e,r)}}else if(typeof o=="string"){let r;this.singleCharacters?r=1:r=(n===this._boundaryEndParent?this.boundaries.end.offset:n.data.length)-e.offset;const l=new Vi(n,e.offset,r);return e.offset+=r,this.position=e,this._formatReturnValue("text",l,t,e,r)}else return e=ne._createAfter(n),this.position=e,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",n,t,e)}_previous(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===0)return{done:!0,value:void 0};if(n==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0,value:void 0};let o;if(n instanceof Ye){if(e.isAtStart)return this.position=ne._createBefore(n),this._previous();o=n.data[e.offset-1]}else o=n.getChild(e.offset-1);if(o instanceof Rn)return this.shallow?(e.offset--,this.position=e,this._formatReturnValue("elementStart",o,t,e,1)):(e=new ne(o,o.childCount),this.position=e,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",o,t,e));if(o instanceof Ye){if(this.singleCharacters)return e=new ne(o,o.data.length),this.position=e,this._previous();{let r=o.data.length,l;if(o==this._boundaryStartParent){const c=this.boundaries.start.offset;l=new Vi(o,c,o.data.length-c),r=l.data.length,e=ne._createBefore(l)}else l=new Vi(o,0,o.data.length),e.offset--;return this.position=e,this._formatReturnValue("text",l,t,e,r)}}else if(typeof o=="string"){let r;if(this.singleCharacters)r=1;else{const c=n===this._boundaryStartParent?this.boundaries.start.offset:0;r=e.offset-c}e.offset-=r;const l=new Vi(n,e.offset,r);return this.position=e,this._formatReturnValue("text",l,t,e,r)}else return e=ne._createBefore(n),this.position=e,this._formatReturnValue("elementStart",n,t,e,1)}_formatReturnValue(e,t,n,o,r){return t instanceof Vi&&(t.offsetInText+t.data.length==t.textNode.data.length&&(this.direction=="forward"&&!(this.boundaries&&this.boundaries.end.isEqual(this.position))?(o=ne._createAfter(t.textNode),this.position=o):n=ne._createAfter(t.textNode)),t.offsetInText===0&&(this.direction=="backward"&&!(this.boundaries&&this.boundaries.start.isEqual(this.position))?(o=ne._createBefore(t.textNode),this.position=o):n=ne._createBefore(t.textNode))),{done:!1,value:{type:e,item:t,previousPosition:n,nextPosition:o,length:r}}}}class ne extends Rr{constructor(e,t){super(),this.parent=e,this.offset=t}get nodeAfter(){return this.parent.is("$text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("$text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return this.offset===0}get isAtEnd(){const e=this.parent.is("$text")?this.parent.data.length:this.parent.childCount;return this.offset===e}get root(){return this.parent.root}get editableElement(){let e=this.parent;for(;!(e instanceof hu);)if(e.parent)e=e.parent;else return null;return e}getShiftedBy(e){const t=ne._createAt(this),n=t.offset+e;return t.offset=n<0?0:n,t}getLastMatchingPosition(e,t={}){t.startPosition=this;const n=new Fr(t);return n.skip(e),n.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(e){const t=this.getAncestors(),n=e.getAncestors();let o=0;for(;t[o]==n[o]&&t[o];)o++;return o===0?null:t[o-1]}isEqual(e){return this.parent==e.parent&&this.offset==e.offset}isBefore(e){return this.compareWith(e)=="before"}isAfter(e){return this.compareWith(e)=="after"}compareWith(e){if(this.root!==e.root)return"different";if(this.isEqual(e))return"same";const t=this.parent.is("node")?this.parent.getPath():[],n=e.parent.is("node")?e.parent.getPath():[];t.push(this.offset),n.push(e.offset);const o=gt(t,n);switch(o){case"prefix":return"before";case"extension":return"after";default:return t[o]<n[o]?"before":"after"}}getWalker(e={}){return e.startPosition=this,new Fr(e)}clone(){return new ne(this.parent,this.offset)}static _createAt(e,t){if(e instanceof ne)return new this(e.parent,e.offset);{const n=e;if(t=="end")t=n.is("$text")?n.data.length:n.childCount;else{if(t=="before")return this._createBefore(n);if(t=="after")return this._createAfter(n);if(t!==0&&!t)throw new M("view-createpositionat-offset-required",n)}return new ne(n,t)}}static _createAfter(e){if(e.is("$textProxy"))return new ne(e.textNode,e.offsetInText+e.data.length);if(!e.parent)throw new M("view-position-after-root",e,{root:e});return new ne(e.parent,e.index+1)}static _createBefore(e){if(e.is("$textProxy"))return new ne(e.textNode,e.offsetInText);if(!e.parent)throw new M("view-position-before-root",e,{root:e});return new ne(e.parent,e.index)}}ne.prototype.is=function(i){return i==="position"||i==="view:position"};class ke extends Rr{constructor(e,t=null){super(),this.start=e.clone(),this.end=t?t.clone():e.clone()}*[Symbol.iterator](){yield*new Fr({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let e=this.start.getLastMatchingPosition(fu,{direction:"backward"}),t=this.end.getLastMatchingPosition(fu);return e.parent.is("$text")&&e.isAtStart&&(e=ne._createBefore(e.parent)),t.parent.is("$text")&&t.isAtEnd&&(t=ne._createAfter(t.parent)),new ke(e,t)}getTrimmed(){let e=this.start.getLastMatchingPosition(fu);if(e.isAfter(this.end)||e.isEqual(this.end))return new ke(e,e);let t=this.end.getLastMatchingPosition(fu,{direction:"backward"});const n=e.nodeAfter,o=t.nodeBefore;return n&&n.is("$text")&&(e=new ne(n,0)),o&&o.is("$text")&&(t=new ne(o,o.data.length)),new ke(e,t)}isEqual(e){return this==e||this.start.isEqual(e.start)&&this.end.isEqual(e.end)}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const n=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),o=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return n&&o}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new ke(this.start,e.start)),this.containsPosition(e.end)&&t.push(new ke(e.end,this.end))):t.push(this.clone()),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,n=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(n=e.end),new ke(t,n)}return null}getWalker(e={}){return e.boundaries=this,new Fr(e)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let e=this.start.nodeAfter,t=this.end.nodeBefore;return this.start.parent.is("$text")&&this.start.isAtEnd&&this.start.parent.nextSibling&&(e=this.start.parent.nextSibling),this.end.parent.is("$text")&&this.end.isAtStart&&this.end.parent.previousSibling&&(t=this.end.parent.previousSibling),e&&e.is("element")&&e===t?e:null}clone(){return new ke(this.start,this.end)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new Fr(e);for(const n of t)yield n.item}*getPositions(e={}){e.boundaries=this;const t=new Fr(e);yield t.position;for(const n of t)yield n.nextPosition}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}static _createFromParentsAndOffsets(e,t,n,o){return new this(new ne(e,t),new ne(n,o))}static _createFromPositionAndShift(e,t){const n=e,o=e.getShiftedBy(t);return t>0?new this(n,o):new this(o,n)}static _createIn(e){return this._createFromParentsAndOffsets(e,0,e,e.childCount)}static _createOn(e){const t=e.is("$textProxy")?e.offsetSize:1;return this._createFromPositionAndShift(ne._createBefore(e),t)}}ke.prototype.is=function(i){return i==="range"||i==="view:range"};function fu(i){return!!(i.item.is("attributeElement")||i.item.is("uiElement"))}class Hi extends Ne(Rr){constructor(...e){super(),this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",e.length&&this.setTo(...e)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.end:e.start).clone()}get focus(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.start:e.end).clone()}get isCollapsed(){return this.rangeCount===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const e of this._ranges)yield e.clone()}getFirstRange(){let e=null;for(const t of this._ranges)(!e||t.start.isBefore(e.start))&&(e=t);return e?e.clone():null}getLastRange(){let e=null;for(const t of this._ranges)(!e||t.end.isAfter(e.end))&&(e=t);return e?e.clone():null}getFirstPosition(){const e=this.getFirstRange();return e?e.start.clone():null}getLastPosition(){const e=this.getLastRange();return e?e.end.clone():null}isEqual(e){if(this.isFake!=e.isFake||this.isFake&&this.fakeSelectionLabel!=e.fakeSelectionLabel||this.rangeCount!=e.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let n=!1;for(const o of e._ranges)if(t.isEqual(o)){n=!0;break}if(!n)return!1}return!0}isSimilar(e){if(this.isBackward!=e.isBackward)return!1;const t=il(this.getRanges()),n=il(e.getRanges());if(t!=n)return!1;if(t==0)return!0;for(let o of this.getRanges()){o=o.getTrimmed();let r=!1;for(let l of e.getRanges())if(l=l.getTrimmed(),o.start.isEqual(l.start)&&o.end.isEqual(l.end)){r=!0;break}if(!r)return!1}return!0}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}setTo(...e){let[t,n,o]=e;if(typeof n=="object"&&(o=n,n=void 0),t===null)this._setRanges([]),this._setFakeOptions(o);else if(t instanceof Hi||t instanceof Xg)this._setRanges(t.getRanges(),t.isBackward),this._setFakeOptions({fake:t.isFake,label:t.fakeSelectionLabel});else if(t instanceof ke)this._setRanges([t],o&&o.backward),this._setFakeOptions(o);else if(t instanceof ne)this._setRanges([new ke(t)]),this._setFakeOptions(o);else if(t instanceof Or){const r=!!o&&!!o.backward;let l;if(n===void 0)throw new M("view-selection-setto-required-second-parameter",this);n=="in"?l=ke._createIn(t):n=="on"?l=ke._createOn(t):l=new ke(ne._createAt(t,n)),this._setRanges([l],r),this._setFakeOptions(o)}else if(an(t))this._setRanges(t,o&&o.backward),this._setFakeOptions(o);else throw new M("view-selection-setto-not-selectable",this);this.fire("change")}setFocus(e,t){if(this.anchor===null)throw new M("view-selection-setfocus-no-ranges",this);const n=ne._createAt(e,t);if(n.compareWith(this.focus)=="same")return;const o=this.anchor;this._ranges.pop(),n.compareWith(o)=="before"?this._addRange(new ke(n,o),!0):this._addRange(new ke(o,n)),this.fire("change")}_setRanges(e,t=!1){e=Array.from(e),this._ranges=[];for(const n of e)this._addRange(n);this._lastRangeBackward=!!t}_setFakeOptions(e={}){this._isFake=!!e.fake,this._fakeSelectionLabel=e.fake&&e.label||""}_addRange(e,t=!1){if(!(e instanceof ke))throw new M("view-selection-add-range-not-range",this);this._pushRange(e),this._lastRangeBackward=!!t}_pushRange(e){for(const t of this._ranges)if(e.isIntersecting(t))throw new M("view-selection-range-intersects",this,{addedRange:e,intersectingRange:t});this._ranges.push(new ke(e.start,e.end))}}Hi.prototype.is=function(i){return i==="selection"||i==="view:selection"};class Xg extends Ne(Rr){constructor(...e){super(),this._selection=new Hi,this._selection.delegate("change").to(this),e.length&&this._selection.setTo(...e)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(e){return this._selection.isEqual(e)}isSimilar(e){return this._selection.isSimilar(e)}_setTo(...e){this._selection.setTo(...e)}_setFocus(e,t){this._selection.setFocus(e,t)}}Xg.prototype.is=function(i){return i==="selection"||i=="documentSelection"||i=="view:selection"||i=="view:documentSelection"};class Rs extends be{constructor(e,t,n){super(e,t),this.startRange=n,this._eventPhase="none",this._currentTarget=null}get eventPhase(){return this._eventPhase}get currentTarget(){return this._currentTarget}}const ep=Symbol("bubbling contexts");function tp(i){class e extends i{fire(n,...o){try{const r=n instanceof be?n:new be(this,n),l=np(this);if(!l.size)return;if(El(r,"capturing",this),Os(l,"$capture",r,...o))return r.return;const c=r.startRange||this.selection.getFirstRange(),u=c?c.getContainedElement():null,m=u?Boolean(n_(l,u)):!1;let p=u||jN(c);if(El(r,"atTarget",p),!m){if(Os(l,"$text",r,...o))return r.return;El(r,"bubbling",p)}for(;p;){if(p.is("rootElement")){if(Os(l,"$root",r,...o))return r.return}else if(p.is("element")&&Os(l,p.name,r,...o))return r.return;if(Os(l,p,r,...o))return r.return;p=p.parent,El(r,"bubbling",p)}return El(r,"bubbling",this),Os(l,"$document",r,...o),r.return}catch(r){M.rethrowUnexpectedError(r,this)}}_addEventListener(n,o,r){const l=kt(r.context||"$document"),c=np(this);for(const u of l){let m=c.get(u);m||(m=new(Ne()),c.set(u,m)),this.listenTo(m,n,o,r)}}_removeEventListener(n,o){const r=np(this);for(const l of r.values())this.stopListening(l,n,o)}}return e}{const i=tp(Object);["fire","_addEventListener","_removeEventListener"].forEach(e=>{tp[e]=i.prototype[e]})}function El(i,e,t){i instanceof Rs&&(i._eventPhase=e,i._currentTarget=t)}function Os(i,e,t,...n){const o=typeof e=="string"?i.get(e):n_(i,e);return o?(o.fire(t,...n),t.stop.called):!1}function n_(i,e){for(const[t,n]of i)if(typeof t=="function"&&t(e))return n;return null}function np(i){return i[ep]||(i[ep]=new Map),i[ep]}function jN(i){if(!i)return null;const e=i.start.parent,t=i.end.parent,n=e.getPath(),o=t.getPath();return n.length>o.length?e:t}class mu extends tp(De()){constructor(e){super(),this.selection=new Xg,this.roots=new rt({idProperty:"rootName"}),this.stylesProcessor=e,this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isSelecting",!1),this.set("isComposing",!1),this._postFixers=new Set}getRoot(e="main"){return this.roots.get(e)}registerPostFixer(e){this._postFixers.add(e)}destroy(){this.roots.map(e=>e.destroy()),this.stopListening()}_callPostFixers(e){let t=!1;do for(const n of this._postFixers)if(t=n(e),t)break;while(t)}}const i_=10;class Vr extends Rn{constructor(...e){super(...e),this.getFillerOffset=FN,this._priority=i_,this._id=null,this._clonesGroup=null}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(this.id===null)throw new M("attribute-element-get-elements-with-same-id-no-id",this);return new Set(this._clonesGroup)}isSimilar(e){return this.id!==null||e.id!==null?this.id===e.id:super.isSimilar(e)&&this.priority==e.priority}_clone(e=!1){const t=super._clone(e);return t._priority=this._priority,t._id=this._id,t}}Vr.DEFAULT_PRIORITY=i_,Vr.prototype.is=function(i,e){return e?e===this.name&&(i==="attributeElement"||i==="view:attributeElement"||i==="element"||i==="view:element"):i==="attributeElement"||i==="view:attributeElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};function FN(){if(ip(this))return null;let i=this.parent;for(;i&&i.is("attributeElement");){if(ip(i)>1)return null;i=i.parent}return!i||ip(i)>1?null:this.childCount}function ip(i){return Array.from(i.getChildren()).filter(e=>!e.is("uiElement")).length}class op extends Rn{constructor(e,t,n,o){super(e,t,n,o),this.getFillerOffset=VN}_insertChild(e,t){if(t&&(t instanceof Or||Array.from(t).length>0))throw new M("view-emptyelement-cannot-add",[this,t]);return 0}}op.prototype.is=function(i,e){return e?e===this.name&&(i==="emptyElement"||i==="view:emptyElement"||i==="element"||i==="view:element"):i==="emptyElement"||i==="view:emptyElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};function VN(){return null}class gu extends Rn{constructor(...e){super(...e),this.getFillerOffset=UN}_insertChild(e,t){if(t&&(t instanceof Or||Array.from(t).length>0))throw new M("view-uielement-cannot-add",[this,t]);return 0}render(e,t){return this.toDomElement(e)}toDomElement(e){const t=e.createElement(this.name);for(const n of this.getAttributeKeys())t.setAttribute(n,this.getAttribute(n));return t}}gu.prototype.is=function(i,e){return e?e===this.name&&(i==="uiElement"||i==="view:uiElement"||i==="element"||i==="view:element"):i==="uiElement"||i==="view:uiElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};function HN(i){i.document.on("arrowKey",(e,t)=>$N(e,t,i.domConverter),{priority:"low"})}function UN(){return null}function $N(i,e,t){if(e.keyCode==Se.arrowright){const n=e.domTarget.ownerDocument.defaultView.getSelection(),o=n.rangeCount==1&&n.getRangeAt(0).collapsed;if(o||e.shiftKey){const r=n.focusNode,l=n.focusOffset,c=t.domPositionToView(r,l);if(c===null)return;let u=!1;const m=c.getLastMatchingPosition(p=>(p.item.is("uiElement")&&(u=!0),!!(p.item.is("uiElement")||p.item.is("attributeElement"))));if(u){const p=t.viewPositionToDom(m);o?n.collapse(p.parent,p.offset):n.extend(p.parent,p.offset)}}}}class rp extends Rn{constructor(...e){super(...e),this.getFillerOffset=WN}_insertChild(e,t){if(t&&(t instanceof Or||Array.from(t).length>0))throw new M("view-rawelement-cannot-add",[this,t]);return 0}render(){}}rp.prototype.is=function(i,e){return e?e===this.name&&(i==="rawElement"||i==="view:rawElement"||i==="element"||i==="view:element"):i==="rawElement"||i==="view:rawElement"||i===this.name||i==="view:"+this.name||i==="element"||i==="view:element"||i==="node"||i==="view:node"};function WN(){return null}class Hr extends Ne(Rr){constructor(e,t){super(),this.document=e,this._children=[],t&&this._insertChild(0,t),this._customProperties=new Map}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}_appendChild(e){return this._insertChild(this.childCount,e)}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(e,t){this._fireChange("children",this);let n=0;const o=GN(this.document,t);for(const r of o)r.parent!==null&&r._remove(),r.parent=this,this._children.splice(e,0,r),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_fireChange(e,t){this.fire("change:"+e,t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}Hr.prototype.is=function(i){return i==="documentFragment"||i==="view:documentFragment"};function GN(i,e){return typeof e=="string"?[new Ye(i,e)]:(an(e)||(e=[e]),Array.from(e).map(t=>typeof t=="string"?new Ye(i,t):t instanceof Vi?new Ye(i,t.data):t))}class o_{constructor(e){this.document=e,this._cloneGroups=new Map,this._slotFactory=null}setSelection(...e){this.document.selection._setTo(...e)}setSelectionFocus(...e){this.document.selection._setFocus(...e)}createDocumentFragment(e){return new Hr(this.document,e)}createText(e){return new Ye(this.document,e)}createAttributeElement(e,t,n={}){const o=new Vr(this.document,e,t);return typeof n.priority=="number"&&(o._priority=n.priority),n.id&&(o._id=n.id),n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createContainerElement(e,t,n={},o={}){let r=null;Jt(n)?o=n:r=n;const l=new xl(this.document,e,t,r);return o.renderUnsafeAttributes&&l._unsafeAttributesToRender.push(...o.renderUnsafeAttributes),l}createEditableElement(e,t,n={}){const o=new hu(this.document,e,t);return n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createEmptyElement(e,t,n={}){const o=new op(this.document,e,t);return n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createUIElement(e,t,n){const o=new gu(this.document,e,t);return n&&(o.render=n),o}createRawElement(e,t,n,o={}){const r=new rp(this.document,e,t);return n&&(r.render=n),o.renderUnsafeAttributes&&r._unsafeAttributesToRender.push(...o.renderUnsafeAttributes),r}setAttribute(e,t,n){n._setAttribute(e,t)}removeAttribute(e,t){t._removeAttribute(e)}addClass(e,t){t._addClass(e)}removeClass(e,t){t._removeClass(e)}setStyle(e,t,n){Jt(e)&&n===void 0?t._setStyle(e):n._setStyle(e,t)}removeStyle(e,t){t._removeStyle(e)}setCustomProperty(e,t,n){n._setCustomProperty(e,t)}removeCustomProperty(e,t){return t._removeCustomProperty(e)}breakAttributes(e){return e instanceof ne?this._breakAttributes(e):this._breakAttributesRange(e)}breakContainer(e){const t=e.parent;if(!t.is("containerElement"))throw new M("view-writer-break-non-container-element",this.document);if(!t.parent)throw new M("view-writer-break-root",this.document);if(e.isAtStart)return ne._createBefore(t);if(!e.isAtEnd){const n=t._clone(!1);this.insert(ne._createAfter(t),n);const o=new ke(e,ne._createAt(t,"end")),r=new ne(n,0);this.move(o,r)}return ne._createAfter(t)}mergeAttributes(e){const t=e.offset,n=e.parent;if(n.is("$text"))return e;if(n.is("attributeElement")&&n.childCount===0){const l=n.parent,c=n.index;return n._remove(),this._removeFromClonedElementsGroup(n),this.mergeAttributes(new ne(l,c))}const o=n.getChild(t-1),r=n.getChild(t);if(!o||!r)return e;if(o.is("$text")&&r.is("$text"))return s_(o,r);if(o.is("attributeElement")&&r.is("attributeElement")&&o.isSimilar(r)){const l=o.childCount;return o._appendChild(r.getChildren()),r._remove(),this._removeFromClonedElementsGroup(r),this.mergeAttributes(new ne(o,l))}return e}mergeContainers(e){const t=e.nodeBefore,n=e.nodeAfter;if(!t||!n||!t.is("containerElement")||!n.is("containerElement"))throw new M("view-writer-merge-containers-invalid-position",this.document);const o=t.getChild(t.childCount-1),r=o instanceof Ye?ne._createAt(o,"end"):ne._createAt(t,"end");return this.move(ke._createIn(n),ne._createAt(t,"end")),this.remove(ke._createOn(n)),r}insert(e,t){t=an(t)?[...t]:[t],a_(t,this.document);const n=t.reduce((l,c)=>{const u=l[l.length-1],m=!c.is("uiElement");return!u||u.breakAttributes!=m?l.push({breakAttributes:m,nodes:[c]}):u.nodes.push(c),l},[]);let o=null,r=e;for(const{nodes:l,breakAttributes:c}of n){const u=this._insertNodes(r,l,c);o||(o=u.start),r=u.end}return o?new ke(o,r):new ke(e)}remove(e){const t=e instanceof ke?e:ke._createOn(e);if(Sl(t,this.document),t.isCollapsed)return new Hr(this.document);const{start:n,end:o}=this._breakAttributesRange(t,!0),r=n.parent,l=o.offset-n.offset,c=r._removeChildren(n.offset,l);for(const m of c)this._removeFromClonedElementsGroup(m);const u=this.mergeAttributes(n);return t.start=u,t.end=u.clone(),new Hr(this.document,c)}clear(e,t){Sl(e,this.document);const n=e.getWalker({direction:"backward",ignoreElementEnd:!0});for(const o of n){const r=o.item;let l;if(r.is("element")&&t.isSimilar(r))l=ke._createOn(r);else if(!o.nextPosition.isAfter(e.start)&&r.is("$textProxy")){const c=r.getAncestors().find(u=>u.is("element")&&t.isSimilar(u));c&&(l=ke._createIn(c))}l&&(l.end.isAfter(e.end)&&(l.end=e.end),l.start.isBefore(e.start)&&(l.start=e.start),this.remove(l))}}move(e,t){let n;if(t.isAfter(e.end)){t=this._breakAttributes(t,!0);const o=t.parent,r=o.childCount;e=this._breakAttributesRange(e,!0),n=this.remove(e),t.offset+=o.childCount-r}else n=this.remove(e);return this.insert(t,n)}wrap(e,t){if(!(t instanceof Vr))throw new M("view-writer-wrap-invalid-attribute",this.document);if(Sl(e,this.document),e.isCollapsed){let n=e.start;n.parent.is("element")&&!qN(n.parent)&&(n=n.getLastMatchingPosition(r=>r.item.is("uiElement"))),n=this._wrapPosition(n,t);const o=this.document.selection;return o.isCollapsed&&o.getFirstPosition().isEqual(e.start)&&this.setSelection(n),new ke(n)}else return this._wrapRange(e,t)}unwrap(e,t){if(!(t instanceof Vr))throw new M("view-writer-unwrap-invalid-attribute",this.document);if(Sl(e,this.document),e.isCollapsed)return e;const{start:n,end:o}=this._breakAttributesRange(e,!0),r=n.parent,l=this._unwrapChildren(r,n.offset,o.offset,t),c=this.mergeAttributes(l.start);c.isEqual(l.start)||l.end.offset--;const u=this.mergeAttributes(l.end);return new ke(c,u)}rename(e,t){const n=new xl(this.document,e,t.getAttributes());return this.insert(ne._createAfter(t),n),this.move(ke._createIn(t),ne._createAt(n,0)),this.remove(ke._createOn(t)),n}clearClonedElementsGroup(e){this._cloneGroups.delete(e)}createPositionAt(e,t){return ne._createAt(e,t)}createPositionAfter(e){return ne._createAfter(e)}createPositionBefore(e){return ne._createBefore(e)}createRange(...e){return new ke(...e)}createRangeOn(e){return ke._createOn(e)}createRangeIn(e){return ke._createIn(e)}createSelection(...e){return new Hi(...e)}createSlot(e){if(!this._slotFactory)throw new M("view-writer-invalid-create-slot-context",this.document);return this._slotFactory(this,e)}_registerSlotFactory(e){this._slotFactory=e}_clearSlotFactory(){this._slotFactory=null}_insertNodes(e,t,n){let o;if(n?o=sp(e):o=e.parent.is("$text")?e.parent.parent:e.parent,!o)throw new M("view-writer-invalid-position-container",this.document);let r;n?r=this._breakAttributes(e,!0):r=e.parent.is("$text")?ap(e):e;const l=o._insertChild(r.offset,t);for(const p of t)this._addToClonedElementsGroup(p);const c=r.getShiftedBy(l),u=this.mergeAttributes(r);u.isEqual(r)||c.offset--;const m=this.mergeAttributes(c);return new ke(u,m)}_wrapChildren(e,t,n,o){let r=t;const l=[];for(;r<n;){const u=e.getChild(r),m=u.is("$text"),p=u.is("attributeElement");if(p&&this._wrapAttributeElement(o,u))l.push(new ne(e,r));else if(m||!p||KN(o,u)){const w=o._clone();u._remove(),w._appendChild(u),e._insertChild(r,w),this._addToClonedElementsGroup(w),l.push(new ne(e,r))}else this._wrapChildren(u,0,u.childCount,o);r++}let c=0;for(const u of l){if(u.offset-=c,u.offset==t)continue;this.mergeAttributes(u).isEqual(u)||(c++,n--)}return ke._createFromParentsAndOffsets(e,t,e,n)}_unwrapChildren(e,t,n,o){let r=t;const l=[];for(;r<n;){const u=e.getChild(r);if(!u.is("attributeElement")){r++;continue}if(u.isSimilar(o)){const m=u.getChildren(),p=u.childCount;u._remove(),e._insertChild(r,m),this._removeFromClonedElementsGroup(u),l.push(new ne(e,r),new ne(e,r+p)),r+=p,n+=p-1;continue}if(this._unwrapAttributeElement(o,u)){l.push(new ne(e,r),new ne(e,r+1)),r++;continue}this._unwrapChildren(u,0,u.childCount,o),r++}let c=0;for(const u of l){if(u.offset-=c,u.offset==t||u.offset==n)continue;this.mergeAttributes(u).isEqual(u)||(c++,n--)}return ke._createFromParentsAndOffsets(e,t,e,n)}_wrapRange(e,t){const{start:n,end:o}=this._breakAttributesRange(e,!0),r=n.parent,l=this._wrapChildren(r,n.offset,o.offset,t),c=this.mergeAttributes(l.start);c.isEqual(l.start)||l.end.offset--;const u=this.mergeAttributes(l.end);return new ke(c,u)}_wrapPosition(e,t){if(t.isSimilar(e.parent))return r_(e.clone());e.parent.is("$text")&&(e=ap(e));const n=this.createAttributeElement("_wrapPosition-fake-element");n._priority=Number.POSITIVE_INFINITY,n.isSimilar=()=>!1,e.parent._insertChild(e.offset,n);const o=new ke(e,e.getShiftedBy(1));this.wrap(o,t);const r=new ne(n.parent,n.index);n._remove();const l=r.nodeBefore,c=r.nodeAfter;return l instanceof Ye&&c instanceof Ye?s_(l,c):r_(r)}_wrapAttributeElement(e,t){if(!l_(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(!(n==="class"||n==="style")&&t.hasAttribute(n)&&t.getAttribute(n)!==e.getAttribute(n))return!1;for(const n of e.getStyleNames())if(t.hasStyle(n)&&t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n==="class"||n==="style"||t.hasAttribute(n)||this.setAttribute(n,e.getAttribute(n),t);for(const n of e.getStyleNames())t.hasStyle(n)||this.setStyle(n,e.getStyle(n),t);for(const n of e.getClassNames())t.hasClass(n)||this.addClass(n,t);return!0}_unwrapAttributeElement(e,t){if(!l_(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(!(n==="class"||n==="style")&&(!t.hasAttribute(n)||t.getAttribute(n)!==e.getAttribute(n)))return!1;if(!t.hasClass(...e.getClassNames()))return!1;for(const n of e.getStyleNames())if(!t.hasStyle(n)||t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n==="class"||n==="style"||this.removeAttribute(n,t);return this.removeClass(Array.from(e.getClassNames()),t),this.removeStyle(Array.from(e.getStyleNames()),t),!0}_breakAttributesRange(e,t=!1){const n=e.start,o=e.end;if(Sl(e,this.document),e.isCollapsed){const u=this._breakAttributes(e.start,t);return new ke(u,u)}const r=this._breakAttributes(o,t),l=r.parent.childCount,c=this._breakAttributes(n,t);return r.offset+=r.parent.childCount-l,new ke(c,r)}_breakAttributes(e,t=!1){const n=e.offset,o=e.parent;if(e.parent.is("emptyElement"))throw new M("view-writer-cannot-break-empty-element",this.document);if(e.parent.is("uiElement"))throw new M("view-writer-cannot-break-ui-element",this.document);if(e.parent.is("rawElement"))throw new M("view-writer-cannot-break-raw-element",this.document);if(!t&&o.is("$text")&&lp(o.parent)||lp(o))return e.clone();if(o.is("$text"))return this._breakAttributes(ap(e),t);const r=o.childCount;if(n==r){const l=new ne(o.parent,o.index+1);return this._breakAttributes(l,t)}else if(n===0){const l=new ne(o.parent,o.index);return this._breakAttributes(l,t)}else{const l=o.index+1,c=o._clone();o.parent._insertChild(l,c),this._addToClonedElementsGroup(c);const u=o.childCount-n,m=o._removeChildren(n,u);c._appendChild(m);const p=new ne(o.parent,l);return this._breakAttributes(p,t)}}_addToClonedElementsGroup(e){if(!e.root.is("rootElement"))return;if(e.is("element"))for(const o of e.getChildren())this._addToClonedElementsGroup(o);const t=e.id;if(!t)return;let n=this._cloneGroups.get(t);n||(n=new Set,this._cloneGroups.set(t,n)),n.add(e),e._clonesGroup=n}_removeFromClonedElementsGroup(e){if(e.is("element"))for(const o of e.getChildren())this._removeFromClonedElementsGroup(o);const t=e.id;if(!t)return;const n=this._cloneGroups.get(t);n&&n.delete(e)}}function qN(i){return Array.from(i.getChildren()).some(e=>!e.is("uiElement"))}function sp(i){let e=i.parent;for(;!lp(e);){if(!e)return;e=e.parent}return e}function KN(i,e){return i.priority<e.priority?!0:i.priority>e.priority?!1:i.getIdentity()<e.getIdentity()}function r_(i){const e=i.nodeBefore;if(e&&e.is("$text"))return new ne(e,e.data.length);const t=i.nodeAfter;return t&&t.is("$text")?new ne(t,0):i}function ap(i){if(i.offset==i.parent.data.length)return new ne(i.parent.parent,i.parent.index+1);if(i.offset===0)return new ne(i.parent.parent,i.parent.index);const e=i.parent.data.slice(i.offset);return i.parent._data=i.parent.data.slice(0,i.offset),i.parent.parent._insertChild(i.parent.index+1,new Ye(i.root.document,e)),new ne(i.parent.parent,i.parent.index+1)}function s_(i,e){const t=i.data.length;return i._data+=e.data,e._remove(),new ne(i,t)}const YN=[Ye,Vr,xl,op,rp,gu];function a_(i,e){for(const t of i){if(!YN.some(n=>t instanceof n))throw new M("view-writer-insert-invalid-node-type",e);t.is("$text")||a_(t.getChildren(),e)}}function lp(i){return i&&(i.is("containerElement")||i.is("documentFragment"))}function Sl(i,e){const t=sp(i.start),n=sp(i.end);if(!t||!n||t!==n)throw new M("view-writer-invalid-range-container",e)}function l_(i,e){return i.id===null&&e.id===null}const c_=i=>i.createTextNode(" "),d_=i=>{const e=i.createElement("span");return e.dataset.ckeFiller="true",e.innerText=" ",e},u_=i=>{const e=i.createElement("br");return e.dataset.ckeFiller="true",e},Ui=7,pu="⁠".repeat(Ui);function On(i){return yt(i)&&i.data.substr(0,Ui)===pu}function Dl(i){return i.data.length==Ui&&On(i)}function h_(i){return On(i)?i.data.slice(Ui):i.data}function ZN(i){i.document.on("arrowKey",QN,{priority:"low"})}function QN(i,e){if(e.keyCode==Se.arrowleft){const t=e.domTarget.ownerDocument.defaultView.getSelection();if(t.rangeCount==1&&t.getRangeAt(0).collapsed){const n=t.getRangeAt(0).startContainer,o=t.getRangeAt(0).startOffset;On(n)&&o<=Ui&&t.collapse(n,0)}}}var f_=f(4401),cp={injectType:"singletonStyleTag",attributes:{"data-cke":!0}};cp.insert="head",cp.singleton=!0,te()(f_.Z,cp),f_.Z.locals;class JN extends De(){constructor(e,t){super(),this.domDocuments=new Set,this.domConverter=e,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this.selection=t,this.set("isFocused",!1),this.set("isSelecting",!1),A.isBlink&&!A.isAndroid&&this.on("change:isSelecting",()=>{this.isSelecting||this.render()}),this.set("isComposing",!1),this.on("change:isComposing",()=>{this.isComposing||this.render()}),this._inlineFiller=null,this._fakeSelectionContainer=null}markToSync(e,t){if(e==="text")this.domConverter.mapViewToDom(t.parent)&&this.markedTexts.add(t);else{if(!this.domConverter.mapViewToDom(t))return;if(e==="attributes")this.markedAttributes.add(t);else if(e==="children")this.markedChildren.add(t);else throw new M("view-renderer-unknown-type",this)}}render(){if(this.isComposing&&!A.isAndroid)return;let e=null;const t=A.isBlink&&!A.isAndroid?!this.isSelecting:!0;for(const n of this.markedChildren)this._updateChildrenMappings(n);t?(this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?e=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(e=this.selection.getFirstPosition(),this.markedChildren.add(e.parent))):this._inlineFiller&&this._inlineFiller.parentNode&&(e=this.domConverter.domPositionToView(this._inlineFiller),e&&e.parent.is("$text")&&(e=ne._createBefore(e.parent)));for(const n of this.markedAttributes)this._updateAttrs(n);for(const n of this.markedChildren)this._updateChildren(n,{inlineFillerPosition:e});for(const n of this.markedTexts)!this.markedChildren.has(n.parent)&&this.domConverter.mapViewToDom(n.parent)&&this._updateText(n,{inlineFillerPosition:e});if(t)if(e){const n=this.domConverter.viewPositionToDom(e),o=n.parent.ownerDocument;On(n.parent)?this._inlineFiller=n.parent:this._inlineFiller=m_(o,n.parent,n.offset)}else this._inlineFiller=null;this._updateFocus(),this._updateSelection(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(e){if(!this.domConverter.mapViewToDom(e))return;const n=Array.from(this.domConverter.mapViewToDom(e).childNodes),o=Array.from(this.domConverter.viewChildrenToDom(e,{withChildren:!1})),r=this._diffNodeLists(n,o),l=this._findReplaceActions(r,n,o);if(l.indexOf("replace")!==-1){const c={equal:0,insert:0,delete:0};for(const u of l)if(u==="replace"){const m=c.equal+c.insert,p=c.equal+c.delete,w=e.getChild(m);w&&!(w.is("uiElement")||w.is("rawElement"))&&this._updateElementMappings(w,n[p]),CC(o[m]),c.equal++}else c[u]++}}_updateElementMappings(e,t){this.domConverter.unbindDomElement(t),this.domConverter.bindElements(t,e),this.markedChildren.add(e),this.markedAttributes.add(e)}_getInlineFillerPosition(){const e=this.selection.getFirstPosition();return e.parent.is("$text")?ne._createBefore(e.parent):e}_isSelectionInInlineFiller(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=this.domConverter.viewPositionToDom(e);return!!(t&&yt(t.parent)&&On(t.parent))}_removeInlineFiller(){const e=this._inlineFiller;if(!On(e))throw new M("view-renderer-filler-was-lost",this);Dl(e)?e.remove():e.data=e.data.substr(Ui),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=e.parent,n=e.offset;if(!this.domConverter.mapViewToDom(t.root)||!t.is("element")||!XN(t)||n===t.getFillerOffset())return!1;const o=e.nodeBefore,r=e.nodeAfter;return!(o instanceof Ye||r instanceof Ye||A.isAndroid&&(o||r))}_updateText(e,t){const n=this.domConverter.findCorrespondingDomText(e);let r=this.domConverter.viewToDom(e).data;const l=t.inlineFillerPosition;l&&l.parent==e.parent&&l.offset==e.index&&(r=pu+r),k_(n,r)}_updateAttrs(e){const t=this.domConverter.mapViewToDom(e);if(!t)return;const n=Array.from(t.attributes).map(r=>r.name),o=e.getAttributeKeys();for(const r of o)this.domConverter.setDomElementAttribute(t,r,e.getAttribute(r),e);for(const r of n)e.hasAttribute(r)||this.domConverter.removeDomElementAttribute(t,r)}_updateChildren(e,t){const n=this.domConverter.mapViewToDom(e);if(!n)return;if(A.isAndroid){let w=null;for(const C of Array.from(n.childNodes)){if(w&&yt(w)&&yt(C)){n.normalize();break}w=C}}const o=t.inlineFillerPosition,r=n.childNodes,l=Array.from(this.domConverter.viewChildrenToDom(e,{bind:!0}));o&&o.parent===e&&m_(n.ownerDocument,l,o.offset);const c=this._diffNodeLists(r,l),u=A.isAndroid?this._findReplaceActions(c,r,l,{replaceText:!0}):c;let m=0;const p=new Set;for(const w of u)w==="delete"?(p.add(r[m]),CC(r[m])):(w==="equal"||w==="replace")&&m++;m=0;for(const w of u)w==="insert"?(wC(n,m,l[m]),m++):w==="replace"?(k_(r[m],l[m].data),m++):w==="equal"&&(this._markDescendantTextToSync(this.domConverter.domToView(l[m])),m++);for(const w of p)w.parentNode||this.domConverter.unbindDomElement(w)}_diffNodeLists(e,t){return e=nP(e,this._fakeSelectionContainer),K(e,t,eP.bind(null,this.domConverter))}_findReplaceActions(e,t,n,o={}){if(e.indexOf("insert")===-1||e.indexOf("delete")===-1)return e;let r=[],l=[],c=[];const u={equal:0,insert:0,delete:0};for(const m of e)m==="insert"?c.push(n[u.equal+u.insert]):m==="delete"?l.push(t[u.equal+u.delete]):(r=r.concat(K(l,c,o.replaceText?p_:g_).map(p=>p==="equal"?"replace":p)),r.push("equal"),l=[],c=[]),u[m]++;return r.concat(K(l,c,o.replaceText?p_:g_).map(m=>m==="equal"?"replace":m))}_markDescendantTextToSync(e){if(e){if(e.is("$text"))this.markedTexts.add(e);else if(e.is("element"))for(const t of e.getChildren())this._markDescendantTextToSync(t)}}_updateSelection(){if(A.isBlink&&!A.isAndroid&&this.isSelecting&&!this.markedChildren.size)return;if(this.selection.rangeCount===0){this._removeDomSelection(),this._removeFakeSelection();return}const e=this.domConverter.mapViewToDom(this.selection.editableElement);!this.isFocused||!e||(this.selection.isFake?this._updateFakeSelection(e):this._fakeSelectionContainer&&this._fakeSelectionContainer.isConnected?(this._removeFakeSelection(),this._updateDomSelection(e)):this.isComposing&&A.isAndroid||this._updateDomSelection(e))}_updateFakeSelection(e){const t=e.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=iP(t));const n=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(n,this.selection),!this._fakeSelectionNeedsUpdate(e))return;(!n.parentElement||n.parentElement!=e)&&e.appendChild(n),n.textContent=this.selection.fakeSelectionLabel||" ";const o=t.getSelection(),r=t.createRange();o.removeAllRanges(),r.selectNodeContents(n),o.addRange(r)}_updateDomSelection(e){const t=e.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(t))return;const n=this.domConverter.viewPositionToDom(this.selection.anchor),o=this.domConverter.viewPositionToDom(this.selection.focus);t.collapse(n.parent,n.offset),t.extend(o.parent,o.offset),A.isGecko&&tP(o,t)}_domSelectionNeedsUpdate(e){if(!this.domConverter.isDomSelectionCorrect(e))return!0;const t=e&&this.domConverter.domSelectionToView(e);return!(t&&this.selection.isEqual(t)||!this.selection.isCollapsed&&this.selection.isSimilar(t))}_fakeSelectionNeedsUpdate(e){const t=this._fakeSelectionContainer,n=e.ownerDocument.getSelection();return!t||t.parentElement!==e||n.anchorNode!==t&&!t.contains(n.anchorNode)?!0:t.textContent!==this.selection.fakeSelectionLabel}_removeDomSelection(){for(const e of this.domDocuments){const t=e.getSelection();if(t.rangeCount){const n=e.activeElement,o=this.domConverter.mapDomToView(n);n&&o&&t.removeAllRanges()}}}_removeFakeSelection(){const e=this._fakeSelectionContainer;e&&e.remove()}_updateFocus(){if(this.isFocused){const e=this.selection.editableElement;e&&this.domConverter.focus(e)}}}function XN(i){if(i.getAttribute("contenteditable")=="false")return!1;const e=i.findAncestor(t=>t.hasAttribute("contenteditable"));return!e||e.getAttribute("contenteditable")=="true"}function m_(i,e,t){const n=e instanceof Array?e:e.childNodes,o=n[t];if(yt(o))return o.data=pu+o.data,o;{const r=i.createTextNode(pu);return Array.isArray(e)?n.splice(t,0,r):wC(e,t,r),r}}function g_(i,e){return Ko(i)&&Ko(e)&&!yt(i)&&!yt(e)&&!Ps(i)&&!Ps(e)&&i.tagName.toLowerCase()===e.tagName.toLowerCase()}function p_(i,e){return Ko(i)&&Ko(e)&&yt(i)&&yt(e)}function eP(i,e,t){return e===t?!0:yt(e)&&yt(t)?e.data===t.data:!!(i.isBlockFiller(e)&&i.isBlockFiller(t))}function tP(i,e){const t=i.parent;if(t.nodeType!=Node.ELEMENT_NODE||i.offset!=t.childNodes.length-1)return;const n=t.childNodes[i.offset];n&&n.tagName=="BR"&&e.addRange(e.getRangeAt(0))}function nP(i,e){const t=Array.from(i);return t.length==0||!e||t[t.length-1]==e&&t.pop(),t}function iP(i){const e=i.createElement("div");return e.className="ck-fake-selection-container",Object.assign(e.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),e.textContent=" ",e}function k_(i,e){const t=i.data;if(t==e)return;const n=L(t,e);for(const o of n)o.type==="insert"?i.insertData(o.index,o.values.join("")):i.deleteData(o.index,o.howMany)}const oP=u_(ye.document),rP=c_(ye.document),sP=d_(ye.document),ku="data-ck-unsafe-attribute-",b_="data-ck-unsafe-element";class bu{constructor(e,t={}){this.document=e,this.renderingMode=t.renderingMode||"editing",this.blockFillerMode=t.blockFillerMode||(this.renderingMode==="editing"?"br":"nbsp"),this.preElements=["pre"],this.blockElements=["address","article","aside","blockquote","caption","center","dd","details","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","legend","li","main","menu","nav","ol","p","pre","section","summary","table","tbody","td","tfoot","th","thead","tr","ul"],this.inlineObjectElements=["object","iframe","input","button","textarea","select","option","video","embed","audio","img","canvas"],this.unsafeElements=["script","style"],this._domDocument=this.renderingMode==="editing"?ye.document:ye.document.implementation.createHTMLDocument(""),this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap,this._rawContentElementMatcher=new Pn,this._encounteredRawContentDomNodes=new WeakSet}bindFakeSelection(e,t){this._fakeSelectionMapping.set(e,new Hi(t))}fakeSelectionToView(e){return this._fakeSelectionMapping.get(e)}bindElements(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}unbindDomElement(e){const t=this._domToViewMapping.get(e);if(t){this._domToViewMapping.delete(e),this._viewToDomMapping.delete(t);for(const n of Array.from(e.children))this.unbindDomElement(n)}}bindDocumentFragments(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}shouldRenderAttribute(e,t,n){return this.renderingMode==="data"?!0:(e=e.toLowerCase(),e.startsWith("on")||e==="srcdoc"&&t.match(/\bon\S+\s*=|javascript:|<\s*\/*script/i)?!1:n==="img"&&(e==="src"||e==="srcset")||n==="source"&&e==="srcset"?!0:!t.match(/^\s*(javascript:|data:(image\/svg|text\/x?html))/i))}setContentOf(e,t){if(this.renderingMode==="data"){e.innerHTML=t;return}const n=new DOMParser().parseFromString(t,"text/html"),o=n.createDocumentFragment(),r=n.body.childNodes;for(;r.length>0;)o.appendChild(r[0]);const l=n.createTreeWalker(o,NodeFilter.SHOW_ELEMENT),c=[];let u;for(;u=l.nextNode();)c.push(u);for(const m of c){for(const w of m.getAttributeNames())this.setDomElementAttribute(m,w,m.getAttribute(w));const p=m.tagName.toLowerCase();this._shouldRenameElement(p)&&(A_(p),m.replaceWith(this._createReplacementDomElement(p,m)))}for(;e.firstChild;)e.firstChild.remove();e.append(o)}viewToDom(e,t={}){if(e.is("$text")){const n=this._processDataFromViewText(e);return this._domDocument.createTextNode(n)}else{if(this.mapViewToDom(e))return this.mapViewToDom(e);let n;if(e.is("documentFragment"))n=this._domDocument.createDocumentFragment(),t.bind&&this.bindDocumentFragments(n,e);else{if(e.is("uiElement"))return e.name==="$comment"?n=this._domDocument.createComment(e.getCustomProperty("$rawContent")):n=e.render(this._domDocument,this),t.bind&&this.bindElements(n,e),n;this._shouldRenameElement(e.name)?(A_(e.name),n=this._createReplacementDomElement(e.name)):e.hasAttribute("xmlns")?n=this._domDocument.createElementNS(e.getAttribute("xmlns"),e.name):n=this._domDocument.createElement(e.name),e.is("rawElement")&&e.render(n,this),t.bind&&this.bindElements(n,e);for(const o of e.getAttributeKeys())this.setDomElementAttribute(n,o,e.getAttribute(o),e)}if(t.withChildren!==!1)for(const o of this.viewChildrenToDom(e,t))n.appendChild(o);return n}}setDomElementAttribute(e,t,n,o){const r=this.shouldRenderAttribute(t,n,e.tagName.toLowerCase())||o&&o.shouldRenderUnsafeAttribute(t);r||re("domconverter-unsafe-attribute-detected",{domElement:e,key:t,value:n}),e.hasAttribute(t)&&!r?e.removeAttribute(t):e.hasAttribute(ku+t)&&r&&e.removeAttribute(ku+t),e.setAttribute(r?t:ku+t,n)}removeDomElementAttribute(e,t){t!=b_&&(e.removeAttribute(t),e.removeAttribute(ku+t))}*viewChildrenToDom(e,t={}){const n=e.getFillerOffset&&e.getFillerOffset();let o=0;for(const r of e.getChildren()){n===o&&(yield this._getBlockFiller());const l=r.is("element")&&!!r.getCustomProperty("dataPipeline:transparentRendering")&&!Xe(r.getAttributes());l&&this.renderingMode=="data"?yield*this.viewChildrenToDom(r,t):(l&&re("domconverter-transparent-rendering-unsupported-in-editing-pipeline",{viewElement:r}),yield this.viewToDom(r,t)),o++}n===o&&(yield this._getBlockFiller())}viewRangeToDom(e){const t=this.viewPositionToDom(e.start),n=this.viewPositionToDom(e.end),o=this._domDocument.createRange();return o.setStart(t.parent,t.offset),o.setEnd(n.parent,n.offset),o}viewPositionToDom(e){const t=e.parent;if(t.is("$text")){const n=this.findCorrespondingDomText(t);if(!n)return null;let o=e.offset;return On(n)&&(o+=Ui),{parent:n,offset:o}}else{let n,o,r;if(e.offset===0){if(n=this.mapViewToDom(t),!n)return null;r=n.childNodes[0]}else{const c=e.nodeBefore;if(o=c.is("$text")?this.findCorrespondingDomText(c):this.mapViewToDom(c),!o)return null;n=o.parentNode,r=o.nextSibling}if(yt(r)&&On(r))return{parent:r,offset:Ui};const l=o?ru(o)+1:0;return{parent:n,offset:l}}}domToView(e,t={}){if(this.isBlockFiller(e))return null;const n=this.getHostViewElement(e);if(n)return n;if(Ps(e)&&t.skipComments)return null;if(yt(e)){if(Dl(e))return null;{const o=this._processDataFromDomText(e);return o===""?null:new Ye(this.document,o)}}else{if(this.mapDomToView(e))return this.mapDomToView(e);let o;if(this.isDocumentFragment(e))o=new Hr(this.document),t.bind&&this.bindDocumentFragments(e,o);else{o=this._createViewElement(e,t),t.bind&&this.bindElements(e,o);const r=e.attributes;if(r)for(let l=r.length,c=0;c<l;c++)o._setAttribute(r[c].name,r[c].value);if(this._isViewElementWithRawContent(o,t)||Ps(e)){const l=Ps(e)?e.data:e.innerHTML;return o._setCustomProperty("$rawContent",l),this._encounteredRawContentDomNodes.add(e),o}}if(t.withChildren!==!1)for(const r of this.domChildrenToView(e,t))o._appendChild(r);return o}}*domChildrenToView(e,t){for(let n=0;n<e.childNodes.length;n++){const o=e.childNodes[n],r=this.domToView(o,t);r!==null&&(yield r)}}domSelectionToView(e){if(e.rangeCount===1){let o=e.getRangeAt(0).startContainer;yt(o)&&(o=o.parentNode);const r=this.fakeSelectionToView(o);if(r)return r}const t=this.isDomSelectionBackward(e),n=[];for(let o=0;o<e.rangeCount;o++){const r=e.getRangeAt(o),l=this.domRangeToView(r);l&&n.push(l)}return new Hi(n,{backward:t})}domRangeToView(e){const t=this.domPositionToView(e.startContainer,e.startOffset),n=this.domPositionToView(e.endContainer,e.endOffset);return t&&n?new ke(t,n):null}domPositionToView(e,t=0){if(this.isBlockFiller(e))return this.domPositionToView(e.parentNode,ru(e));const n=this.mapDomToView(e);if(n&&(n.is("uiElement")||n.is("rawElement")))return ne._createBefore(n);if(yt(e)){if(Dl(e))return this.domPositionToView(e.parentNode,ru(e));const o=this.findCorrespondingViewText(e);let r=t;return o?(On(e)&&(r-=Ui,r=r<0?0:r),new ne(o,r)):null}else{if(t===0){const o=this.mapDomToView(e);if(o)return new ne(o,0)}else{const o=e.childNodes[t-1];if(yt(o)&&Dl(o))return this.domPositionToView(o.parentNode,ru(o));const r=yt(o)?this.findCorrespondingViewText(o):this.mapDomToView(o);if(r&&r.parent)return new ne(r.parent,r.index+1)}return null}}mapDomToView(e){return this.getHostViewElement(e)||this._domToViewMapping.get(e)}findCorrespondingViewText(e){if(Dl(e))return null;const t=this.getHostViewElement(e);if(t)return t;const n=e.previousSibling;if(n){if(!this.isElement(n))return null;const o=this.mapDomToView(n);if(o){const r=o.nextSibling;return r instanceof Ye?r:null}}else{const o=this.mapDomToView(e.parentNode);if(o){const r=o.getChild(0);return r instanceof Ye?r:null}}return null}mapViewToDom(e){return this._viewToDomMapping.get(e)}findCorrespondingDomText(e){const t=e.previousSibling;return t&&this.mapViewToDom(t)?this.mapViewToDom(t).nextSibling:!t&&e.parent&&this.mapViewToDom(e.parent)?this.mapViewToDom(e.parent).childNodes[0]:null}focus(e){const t=this.mapViewToDom(e);if(t&&t.ownerDocument.activeElement!==t){const{scrollX:n,scrollY:o}=ye.window,r=[];w_(t,l=>{const{scrollLeft:c,scrollTop:u}=l;r.push([c,u])}),t.focus(),w_(t,l=>{const[c,u]=r.shift();l.scrollLeft=c,l.scrollTop=u}),ye.window.scrollTo(n,o)}}isElement(e){return e&&e.nodeType==Node.ELEMENT_NODE}isDocumentFragment(e){return e&&e.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isBlockFiller(e){return this.blockFillerMode=="br"?e.isEqualNode(oP):e.tagName==="BR"&&v_(e,this.blockElements)&&e.parentNode.childNodes.length===1?!0:e.isEqualNode(sP)||lP(e,this.blockElements)}isDomSelectionBackward(e){if(e.isCollapsed)return!1;const t=this._domDocument.createRange();try{t.setStart(e.anchorNode,e.anchorOffset),t.setEnd(e.focusNode,e.focusOffset)}catch{return!1}const n=t.collapsed;return t.detach(),n}getHostViewElement(e){const t=fC(e);for(t.pop();t.length;){const n=t.pop(),o=this._domToViewMapping.get(n);if(o&&(o.is("uiElement")||o.is("rawElement")))return o}return null}isDomSelectionCorrect(e){return this._isDomSelectionPositionCorrect(e.anchorNode,e.anchorOffset)&&this._isDomSelectionPositionCorrect(e.focusNode,e.focusOffset)}registerRawContentMatcher(e){this._rawContentElementMatcher.add(e)}_getBlockFiller(){switch(this.blockFillerMode){case"nbsp":return c_(this._domDocument);case"markedNbsp":return d_(this._domDocument);case"br":return u_(this._domDocument)}}_isDomSelectionPositionCorrect(e,t){if(yt(e)&&On(e)&&t<Ui||this.isElement(e)&&On(e.childNodes[t]))return!1;const n=this.mapDomToView(e);return!(n&&(n.is("uiElement")||n.is("rawElement")))}_processDataFromViewText(e){let t=e.data;if(e.getAncestors().some(n=>this.preElements.includes(n.name)))return t;if(t.charAt(0)==" "){const n=this._getTouchingInlineViewNode(e,!1);(n&&n.is("$textProxy")&&this._nodeEndsWithSpace(n)||!n)&&(t=" "+t.substr(1))}if(t.charAt(t.length-1)==" "){const n=this._getTouchingInlineViewNode(e,!0),o=n&&n.is("$textProxy")&&n.data.charAt(0)==" ";(t.charAt(t.length-2)==" "||!n||o)&&(t=t.substr(0,t.length-1)+" ")}return t.replace(/ {2}/g,"  ")}_nodeEndsWithSpace(e){if(e.getAncestors().some(n=>this.preElements.includes(n.name)))return!1;const t=this._processDataFromViewText(e);return t.charAt(t.length-1)==" "}_processDataFromDomText(e){let t=e.data;if(aP(e,this.preElements))return h_(e);t=t.replace(/[ \n\t\r]{1,}/g," ");const n=this._getTouchingInlineDomNode(e,!1),o=this._getTouchingInlineDomNode(e,!0),r=this._checkShouldLeftTrimDomText(e,n),l=this._checkShouldRightTrimDomText(e,o);r&&(t=t.replace(/^ /,"")),l&&(t=t.replace(/ $/,"")),t=h_(new Text(t)),t=t.replace(/ \u00A0/g,"  ");const c=o&&this.isElement(o)&&o.tagName!="BR",u=o&&yt(o)&&o.data.charAt(0)==" ";return(/( |\u00A0)\u00A0$/.test(t)||!o||c||u)&&(t=t.replace(/\u00A0$/," ")),(r||n&&this.isElement(n)&&n.tagName!="BR")&&(t=t.replace(/^\u00A0/," ")),t}_checkShouldLeftTrimDomText(e,t){return t?this.isElement(t)?t.tagName==="BR":this._encounteredRawContentDomNodes.has(e.previousSibling)?!1:/[^\S\u00A0]/.test(t.data.charAt(t.data.length-1)):!0}_checkShouldRightTrimDomText(e,t){return t?!1:!On(e)}_getTouchingInlineViewNode(e,t){const n=new Fr({startPosition:t?ne._createAfter(e):ne._createBefore(e),direction:t?"forward":"backward"});for(const o of n){if(o.item.is("element")&&this.inlineObjectElements.includes(o.item.name))return o.item;if(o.item.is("containerElement"))return null;if(o.item.is("element","br"))return null;if(o.item.is("$textProxy"))return o.item}return null}_getTouchingInlineDomNode(e,t){if(!e.parentNode)return null;const n=t?"firstChild":"lastChild",o=t?"nextSibling":"previousSibling";let r=!0,l=e;do if(!r&&l[n]?l=l[n]:l[o]?(l=l[o],r=!1):(l=l.parentNode,r=!0),!l||this._isBlockElement(l))return null;while(!(yt(l)||l.tagName=="BR"||this._isInlineObjectElement(l)));return l}_isBlockElement(e){return this.isElement(e)&&this.blockElements.includes(e.tagName.toLowerCase())}_isInlineObjectElement(e){return this.isElement(e)&&this.inlineObjectElements.includes(e.tagName.toLowerCase())}_createViewElement(e,t){if(Ps(e))return new gu(this.document,"$comment");const n=t.keepOriginalCase?e.tagName:e.tagName.toLowerCase();return new Rn(this.document,n)}_isViewElementWithRawContent(e,t){return t.withChildren!==!1&&!!this._rawContentElementMatcher.match(e)}_shouldRenameElement(e){const t=e.toLowerCase();return this.renderingMode==="editing"&&this.unsafeElements.includes(t)}_createReplacementDomElement(e,t){const n=this._domDocument.createElement("span");if(n.setAttribute(b_,e),t){for(;t.firstChild;)n.appendChild(t.firstChild);for(const o of t.getAttributeNames())n.setAttribute(o,t.getAttribute(o))}return n}}function aP(i,e){return fC(i).some(n=>n.tagName&&e.includes(n.tagName.toLowerCase()))}function w_(i,e){let t=i;for(;t;)e(t),t=t.parentElement}function lP(i,e){return i.isEqualNode(rP)&&v_(i,e)&&i.parentNode.childNodes.length===1}function v_(i,e){const t=i.parentNode;return!!t&&!!t.tagName&&e.includes(t.tagName.toLowerCase())}function A_(i){i==="script"&&re("domconverter-unsafe-script-element-detected"),i==="style"&&re("domconverter-unsafe-style-element-detected")}class $i extends Co(){constructor(e){super(),this.view=e,this.document=e.document,this.isEnabled=!1}enable(){this.isEnabled=!0}disable(){this.isEnabled=!1}destroy(){this.disable(),this.stopListening()}checkShouldIgnoreEventFromTarget(e){return e&&e.nodeType===3&&(e=e.parentNode),!e||e.nodeType!==1?!1:e.matches("[data-cke-ignore-events], [data-cke-ignore-events] *")}}var cP=Zg(function(i,e){Ke(e,zs(e),i)});const C_=cP;class js{constructor(e,t,n){this.view=e,this.document=e.document,this.domEvent=t,this.domTarget=t.target,C_(this,n)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class Zo extends $i{constructor(e){super(e),this.useCapture=!1}observe(e){(typeof this.domEventType=="string"?[this.domEventType]:this.domEventType).forEach(n=>{this.listenTo(e,n,(o,r)=>{this.isEnabled&&!this.checkShouldIgnoreEventFromTarget(r.target)&&this.onDomEvent(r)},{useCapture:this.useCapture})})}fire(e,t,n){this.isEnabled&&this.document.fire(e,new js(this.view,t,n))}}class dP extends Zo{constructor(e){super(e),this.domEventType=["keydown","keyup"]}onDomEvent(e){const t={keyCode:e.keyCode,altKey:e.altKey,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,metaKey:e.metaKey,get keystroke(){return Pr(this)}};this.fire(e.type,e,t)}}var uP=function(){return Nn.Date.now()};const dp=uP;var hP=/\s/;function fP(i){for(var e=i.length;e--&&hP.test(i.charAt(e)););return e}const mP=fP;var gP=/^\s+/;function pP(i){return i&&i.slice(0,mP(i)+1).replace(gP,"")}const kP=pP;var __=0/0,bP=/^[-+]0x[0-9a-f]+$/i,wP=/^0b[01]+$/i,vP=/^0o[0-7]+$/i,AP=parseInt;function CP(i){if(typeof i=="number")return i;if(du(i))return __;if(He(i)){var e=typeof i.valueOf=="function"?i.valueOf():i;i=He(e)?e+"":e}if(typeof i!="string")return i===0?i:+i;i=kP(i);var t=wP.test(i);return t||vP.test(i)?AP(i.slice(2),t?2:8):bP.test(i)?__:+i}const y_=CP;var _P="Expected a function",yP=Math.max,xP=Math.min;function EP(i,e,t){var n,o,r,l,c,u,m=0,p=!1,w=!1,C=!0;if(typeof i!="function")throw new TypeError(_P);e=y_(e)||0,He(t)&&(p=!!t.leading,w="maxWait"in t,r=w?yP(y_(t.maxWait)||0,e):r,C="trailing"in t?!!t.trailing:C);function I(le){var ve=n,fe=o;return n=o=void 0,m=le,l=i.apply(fe,ve),l}function B(le){return m=le,c=setTimeout(G,e),p?I(le):l}function P(le){var ve=le-u,fe=le-m,wt=e-ve;return w?xP(wt,r-fe):wt}function V(le){var ve=le-u,fe=le-m;return u===void 0||ve>=e||ve<0||w&&fe>=r}function G(){var le=dp();if(V(le))return J(le);c=setTimeout(G,P(le))}function J(le){return c=void 0,C&&n?I(le):(n=o=void 0,l)}function xe(){c!==void 0&&clearTimeout(c),m=0,n=u=o=c=void 0}function Te(){return c===void 0?l:J(dp())}function nt(){var le=dp(),ve=V(le);if(n=arguments,o=this,u=le,ve){if(c===void 0)return B(u);if(w)return clearTimeout(c),c=setTimeout(G,e),I(u)}return c===void 0&&(c=setTimeout(G,e)),l}return nt.cancel=xe,nt.flush=Te,nt}const _o=EP;class SP extends $i{constructor(e){super(e),this._fireSelectionChangeDoneDebounced=_o(t=>{this.document.fire("selectionChangeDone",t)},200)}observe(){const e=this.document;e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&n.preventDefault()},{context:"$capture"}),e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&this._handleSelectionMove(n.keyCode)},{priority:"lowest"})}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(e){const t=this.document.selection,n=new Hi(t.getRanges(),{backward:t.isBackward,fake:!1});(e==Se.arrowleft||e==Se.arrowup)&&n.setTo(n.getFirstPosition()),(e==Se.arrowright||e==Se.arrowdown)&&n.setTo(n.getLastPosition());const o={oldSelection:t,newSelection:n,domSelection:null};this.document.fire("selectionChange",o),this._fireSelectionChangeDoneDebounced(o)}}var DP="__lodash_hash_undefined__";function TP(i){return this.__data__.set(i,DP),this}const IP=TP;function MP(i){return this.__data__.has(i)}const BP=MP;function wu(i){var e=-1,t=i==null?0:i.length;for(this.__data__=new Fi;++e<t;)this.add(i[e])}wu.prototype.add=wu.prototype.push=IP,wu.prototype.has=BP;const LP=wu;function zP(i,e){for(var t=-1,n=i==null?0:i.length;++t<n;)if(e(i[t],t,i))return!0;return!1}const NP=zP;function PP(i,e){return i.has(e)}const RP=PP;var OP=1,jP=2;function FP(i,e,t,n,o,r){var l=t&OP,c=i.length,u=e.length;if(c!=u&&!(l&&u>c))return!1;var m=r.get(i),p=r.get(e);if(m&&p)return m==e&&p==i;var w=-1,C=!0,I=t&jP?new LP:void 0;for(r.set(i,e),r.set(e,i);++w<c;){var B=i[w],P=e[w];if(n)var V=l?n(P,B,w,e,i,r):n(B,P,w,i,e,r);if(V!==void 0){if(V)continue;C=!1;break}if(I){if(!NP(e,function(G,J){if(!RP(I,J)&&(B===G||o(B,G,t,n,r)))return I.push(J)})){C=!1;break}}else if(!(B===P||o(B,P,t,n,r))){C=!1;break}}return r.delete(i),r.delete(e),C}const x_=FP;function VP(i){var e=-1,t=Array(i.size);return i.forEach(function(n,o){t[++e]=[o,n]}),t}const HP=VP;function UP(i){var e=-1,t=Array(i.size);return i.forEach(function(n){t[++e]=n}),t}const $P=UP;var WP=1,GP=2,qP="[object Boolean]",KP="[object Date]",YP="[object Error]",ZP="[object Map]",QP="[object Number]",JP="[object RegExp]",XP="[object Set]",e6="[object String]",t6="[object Symbol]",n6="[object ArrayBuffer]",i6="[object DataView]",E_=ei?ei.prototype:void 0,up=E_?E_.valueOf:void 0;function o6(i,e,t,n,o,r,l){switch(t){case i6:if(i.byteLength!=e.byteLength||i.byteOffset!=e.byteOffset)return!1;i=i.buffer,e=e.buffer;case n6:return!(i.byteLength!=e.byteLength||!r(new eu(i),new eu(e)));case qP:case KP:case QP:return ho(+i,+e);case YP:return i.name==e.name&&i.message==e.message;case JP:case e6:return i==e+"";case ZP:var c=HP;case XP:var u=n&WP;if(c||(c=$P),i.size!=e.size&&!u)return!1;var m=l.get(i);if(m)return m==e;n|=GP,l.set(i,e);var p=x_(c(i),c(e),n,o,r,l);return l.delete(i),p;case t6:if(up)return up.call(i)==up.call(e)}return!1}const r6=o6;var s6=1,a6=Object.prototype,l6=a6.hasOwnProperty;function c6(i,e,t,n,o,r){var l=t&s6,c=Dg(i),u=c.length,m=Dg(e),p=m.length;if(u!=p&&!l)return!1;for(var w=u;w--;){var C=c[w];if(!(l?C in e:l6.call(e,C)))return!1}var I=r.get(i),B=r.get(e);if(I&&B)return I==e&&B==i;var P=!0;r.set(i,e),r.set(e,i);for(var V=l;++w<u;){C=c[w];var G=i[C],J=e[C];if(n)var xe=l?n(J,G,C,e,i,r):n(G,J,C,i,e,r);if(!(xe===void 0?G===J||o(G,J,t,n,r):xe)){P=!1;break}V||(V=C=="constructor")}if(P&&!V){var Te=i.constructor,nt=e.constructor;Te!=nt&&"constructor"in i&&"constructor"in e&&!(typeof Te=="function"&&Te instanceof Te&&typeof nt=="function"&&nt instanceof nt)&&(P=!1)}return r.delete(i),r.delete(e),P}const d6=c6;var u6=1,S_="[object Arguments]",D_="[object Array]",vu="[object Object]",h6=Object.prototype,T_=h6.hasOwnProperty;function f6(i,e,t,n,o,r){var l=Qt(i),c=Qt(e),u=l?D_:yl(i),m=c?D_:yl(e);u=u==S_?vu:u,m=m==S_?vu:m;var p=u==vu,w=m==vu,C=u==m;if(C&&Cl(i)){if(!Cl(e))return!1;l=!0,p=!1}if(C&&!p)return r||(r=new bo),l||_g(i)?x_(i,e,t,n,o,r):r6(i,e,u,t,n,o,r);if(!(t&u6)){var I=p&&T_.call(i,"__wrapped__"),B=w&&T_.call(e,"__wrapped__");if(I||B){var P=I?i.value():i,V=B?e.value():e;return r||(r=new bo),o(P,V,t,n,r)}}return C?(r||(r=new bo),d6(i,e,t,n,o,r)):!1}const m6=f6;function I_(i,e,t,n,o){return i===e?!0:i==null||e==null||!Cn(i)&&!Cn(e)?i!==i&&e!==e:m6(i,e,t,n,I_,o)}const M_=I_;function g6(i,e,t){t=typeof t=="function"?t:void 0;var n=t?t(i,e):void 0;return n===void 0?M_(i,e,void 0,t):!!n}const p6=g6;class B_ extends $i{constructor(e){super(e),this._config={childList:!0,characterData:!0,subtree:!0},this.domConverter=e.domConverter,this.renderer=e._renderer,this._domElements=[],this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(e){this._domElements.push(e),this.isEnabled&&this._mutationObserver.observe(e,this._config)}enable(){super.enable();for(const e of this._domElements)this._mutationObserver.observe(e,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(e){if(e.length===0)return;const t=this.domConverter,n=new Set,o=new Set;for(const l of e){const c=t.mapDomToView(l.target);c&&(c.is("uiElement")||c.is("rawElement")||l.type==="childList"&&!this._isBogusBrMutation(l)&&o.add(c))}for(const l of e){const c=t.mapDomToView(l.target);if(!(c&&(c.is("uiElement")||c.is("rawElement")))&&l.type==="characterData"){const u=t.findCorrespondingViewText(l.target);u&&!o.has(u.parent)?n.add(u):!u&&On(l.target)&&o.add(t.mapDomToView(l.target.parentNode))}}let r=!1;for(const l of n)r=!0,this.renderer.markToSync("text",l);for(const l of o){const c=t.mapViewToDom(l),u=Array.from(l.getChildren()),m=Array.from(t.domChildrenToView(c,{withChildren:!1}));p6(u,m,k6)||(r=!0,this.renderer.markToSync("children",l))}r&&this.view.forceRender()}_isBogusBrMutation(e){let t=null;return e.nextSibling===null&&e.removedNodes.length===0&&e.addedNodes.length==1&&(t=this.domConverter.domToView(e.addedNodes[0],{withChildren:!1})),t&&t.is("element","br")}}function k6(i,e){if(!Array.isArray(i))return i===e?!0:i.is("$text")&&e.is("$text")?i.data===e.data:!1}class hp extends Zo{constructor(e){super(e),this._isFocusChanging=!1,this.domEventType=["focus","blur"],this.useCapture=!0;const t=this.document;t.on("focus",()=>{this._isFocusChanging=!0,this._renderTimeoutId=setTimeout(()=>{this.flush(),e.change(()=>{})},50)}),t.on("blur",(n,o)=>{const r=t.selection.editableElement;(r===null||r===o.target)&&(t.isFocused=!1,this._isFocusChanging=!1,e.change(()=>{}))})}flush(){this._isFocusChanging&&(this._isFocusChanging=!1,this.document.isFocused=!0)}onDomEvent(e){this.fire(e.type,e)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class b6 extends $i{constructor(e){super(e),this.mutationObserver=e.getObserver(B_),this.focusObserver=e.getObserver(hp),this.selection=this.document.selection,this.domConverter=e.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=_o(t=>{this.document.fire("selectionChangeDone",t)},200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._documentIsSelectingInactivityTimeoutDebounced=_o(()=>this.document.isSelecting=!1,5e3),this._loopbackCounter=0}observe(e){const t=e.ownerDocument,n=()=>{this.document.isSelecting=!0,this._documentIsSelectingInactivityTimeoutDebounced()},o=()=>{this.document.isSelecting&&(this._handleSelectionChange(null,t),this.document.isSelecting=!1,this._documentIsSelectingInactivityTimeoutDebounced.cancel())};this.listenTo(e,"selectstart",n,{priority:"highest"}),this.listenTo(e,"keydown",o,{priority:"highest",useCapture:!0}),this.listenTo(e,"keyup",o,{priority:"highest",useCapture:!0}),!this._documents.has(t)&&(this.listenTo(t,"mouseup",o,{priority:"highest",useCapture:!0}),this.listenTo(t,"selectionchange",(r,l)=>{this.document.isComposing&&!A.isAndroid||(this._handleSelectionChange(l,t),this._documentIsSelectingInactivityTimeoutDebounced())}),this._documents.add(t))}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel(),this._documentIsSelectingInactivityTimeoutDebounced.cancel()}_handleSelectionChange(e,t){if(!this.isEnabled)return;const n=t.defaultView.getSelection();if(this.checkShouldIgnoreEventFromTarget(n.anchorNode))return;this.mutationObserver.flush();const o=this.domConverter.domSelectionToView(n);if(o.rangeCount==0){this.view.hasDomSelection=!1;return}if(this.view.hasDomSelection=!0,!(this.selection.isEqual(o)&&this.domConverter.isDomSelectionCorrect(n))&&!(++this._loopbackCounter>60))if(this.focusObserver.flush(),this.selection.isSimilar(o))this.view.forceRender();else{const r={oldSelection:this.selection,newSelection:o,domSelection:n};this.document.fire("selectionChange",r),this._fireSelectionChangeDoneDebounced(r)}}_clearInfiniteLoop(){this._loopbackCounter=0}}class w6 extends Zo{constructor(e){super(e),this.domEventType=["compositionstart","compositionupdate","compositionend"];const t=this.document;t.on("compositionstart",()=>{t.isComposing=!0},{priority:"low"}),t.on("compositionend",()=>{t.isComposing=!1},{priority:"low"})}onDomEvent(e){this.fire(e.type,e,{data:e.data})}}class L_{constructor(e){this.files=v6(e),this._native=e}get types(){return this._native.types}getData(e){return this._native.getData(e)}setData(e,t){this._native.setData(e,t)}set effectAllowed(e){this._native.effectAllowed=e}get effectAllowed(){return this._native.effectAllowed}set dropEffect(e){this._native.dropEffect=e}get dropEffect(){return this._native.dropEffect}get isCanceled(){return this._native.dropEffect=="none"||!!this._native.mozUserCancelled}}function v6(i){const e=Array.from(i.files||[]),t=Array.from(i.items||[]);return e.length?e:t.filter(n=>n.kind==="file").map(n=>n.getAsFile())}class A6 extends Zo{constructor(e){super(e),this.domEventType=["beforeinput"]}onDomEvent(e){const t=e.getTargetRanges(),n=this.view,o=n.document;let r=null,l=null,c=[];if(e.dataTransfer&&(r=new L_(e.dataTransfer)),e.data!==null?l=e.data:r&&(l=r.getData("text/plain")),o.selection.isFake)c=Array.from(o.selection.getRanges());else if(t.length)c=t.map(u=>n.domConverter.domRangeToView(u));else if(A.isAndroid){const u=e.target.ownerDocument.defaultView.getSelection();c=Array.from(n.domConverter.domSelectionToView(u).getRanges())}if(A.isAndroid&&e.inputType=="insertCompositionText"&&l&&l.endsWith(`
`)){this.fire(e.type,e,{inputType:"insertParagraph",targetRanges:[n.createRange(c[0].end)]});return}if(e.inputType=="insertText"&&l&&l.includes(`
`;else{let t=null;for(const n of i.getChildren()){const o=Zy(n);t&&(t.is("containerElement")||n.is("containerElement"))&&(Yy.includes(t.name)||Yy.includes(n.name)?e+=`
`:e+=`

`),e+=o,t=n}}return e}class Ki extends j{static get pluginName(){return"ClipboardPipeline"}init(){this.editor.editing.view.addObserver(uk),this._setupPasteDrop(),this._setupCopyCut()}_setupPasteDrop(){const e=this.editor,t=e.model,n=e.editing.view,o=n.document;this.listenTo(o,"clipboardInput",r=>{e.isReadOnly&&r.stop()},{priority:"highest"}),this.listenTo(o,"clipboardInput",(r,l)=>{const c=l.dataTransfer;let u;if(l.content)u=l.content;else{let p="";c.getData("text/html")?p=ij(c.getData("text/html")):c.getData("text/plain")&&(p=nj(c.getData("text/plain"))),u=this.editor.data.htmlProcessor.toView(p)}const m=new be(this,"inputTransformation");this.fire(m,{content:u,dataTransfer:c,targetRanges:l.targetRanges,method:l.method}),m.stop.called&&r.stop(),n.scrollToTheSelection()},{priority:"low"}),this.listenTo(this,"inputTransformation",(r,l)=>{if(l.content.isEmpty)return;const u=this.editor.data.toModel(l.content,"$clipboardHolder");u.childCount!=0&&(r.stop(),t.change(()=>{this.fire("contentInsertion",{content:u,method:l.method,dataTransfer:l.dataTransfer,targetRanges:l.targetRanges})}))},{priority:"low"}),this.listenTo(this,"contentInsertion",(r,l)=>{l.resultRange=t.insertContent(l.content)},{priority:"low"})}_setupCopyCut(){const e=this.editor,t=e.model.document,o=e.editing.view.document,r=(l,c)=>{const u=c.dataTransfer;c.preventDefault();const m=e.data.toView(e.model.getSelectedContent(t.selection));o.fire("clipboardOutput",{dataTransfer:u,content:m,method:l.name})};this.listenTo(o,"copy",r,{priority:"low"}),this.listenTo(o,"cut",(l,c)=>{e.isReadOnly?c.preventDefault():r(l,c)},{priority:"low"}),this.listenTo(o,"clipboardOutput",(l,c)=>{c.content.isEmpty||(c.dataTransfer.setData("text/html",this.editor.data.htmlProcessor.toData(c.content)),c.dataTransfer.setData("text/plain",Zy(c.content))),c.method=="cut"&&e.model.deleteContent(t.selection)},{priority:"low"})}}function*Qy(i,e){for(const t of e)t&&i.getAttributeProperties(t[0]).copyOnEnter&&(yield t)}class oj extends ue{execute(){this.editor.model.change(e=>{this.enterBlock(e),this.fire("afterExecute",{writer:e})})}enterBlock(e){const t=this.editor.model,n=t.document.selection,o=t.schema,r=n.isCollapsed,l=n.getFirstRange(),c=l.start.parent,u=l.end.parent;if(o.isLimit(c)||o.isLimit(u))return!r&&c==u&&t.deleteContent(n),!1;if(r){const m=Qy(e.model.schema,n.getAttributes());return Jy(e,l.start),e.setSelectionAttribute(m),!0}else{const m=!(l.start.isAtStart&&l.end.isAtEnd),p=c==u;if(t.deleteContent(n,{leaveUnmerged:m}),m){if(p)return Jy(e,n.focus),!0;e.setSelection(u,0)}}return!1}}function Jy(i,e){i.split(e),i.setSelection(e.parent.nextSibling,0)}const rj={insertParagraph:{isSoft:!1},insertLineBreak:{isSoft:!0}};class Xy extends $i{constructor(e){super(e);const t=this.document;t.on("beforeinput",(n,o)=>{if(!this.isEnabled)return;const r=o.domEvent,l=rj[o.inputType];if(!l)return;const c=new Rs(t,"enter",o.targetRanges[0]);t.fire(c,new js(e,r,{isSoft:l.isSoft})),c.stop.called&&n.stop()})}observe(){}}class Wu extends j{static get pluginName(){return"Enter"}init(){const e=this.editor,t=e.editing.view,n=t.document;t.addObserver(Xy),e.commands.add("enter",new oj(e)),this.listenTo(n,"enter",(o,r)=>{n.isComposing||r.preventDefault(),!r.isSoft&&(e.execute("enter"),t.scrollToTheSelection())},{priority:"low"})}}class sj extends ue{execute(){const e=this.editor.model,t=e.document;e.change(n=>{lj(e,n,t.selection),this.fire("afterExecute",{writer:n})})}refresh(){const e=this.editor.model,t=e.document;this.isEnabled=aj(e.schema,t.selection)}}function aj(i,e){if(e.rangeCount>1)return!1;const t=e.anchor;if(!t||!i.checkChild(t,"softBreak"))return!1;const n=e.getFirstRange(),o=n.start.parent,r=n.end.parent;return!((hk(o,i)||hk(r,i))&&o!==r)}function lj(i,e,t){const n=t.isCollapsed,o=t.getFirstRange(),r=o.start.parent,l=o.end.parent,c=r==l;if(n){const u=Qy(i.schema,t.getAttributes());ex(i,e,o.end),e.removeSelectionAttribute(t.getAttributeKeys()),e.setSelectionAttribute(u)}else{const u=!(o.start.isAtStart&&o.end.isAtEnd);i.deleteContent(t,{leaveUnmerged:u}),c?ex(i,e,t.focus):u&&e.setSelection(l,0)}}function ex(i,e,t){const n=e.createElement("softBreak");i.insertContent(n,t),e.setSelection(n,"after")}function hk(i,e){return i.is("rootElement")?!1:e.isLimit(i)||hk(i.parent,e)}class tx extends j{static get pluginName(){return"ShiftEnter"}init(){const e=this.editor,t=e.model.schema,n=e.conversion,o=e.editing.view,r=o.document;t.register("softBreak",{allowWhere:"$text",isInline:!0}),n.for("upcast").elementToElement({model:"softBreak",view:"br"}),n.for("downcast").elementToElement({model:"softBreak",view:(l,{writer:c})=>c.createEmptyElement("br")}),o.addObserver(Xy),e.commands.add("shiftEnter",new sj(e)),this.listenTo(r,"enter",(l,c)=>{r.isComposing||c.preventDefault(),c.isSoft&&(e.execute("shiftEnter"),o.scrollToTheSelection())},{priority:"low"})}}class cj extends Ne(){constructor(){super(),this._stack=[]}add(e,t){const n=this._stack,o=n[0];this._insertDescriptor(e);const r=n[0];o!==r&&!fk(o,r)&&this.fire("change:top",{oldDescriptor:o,newDescriptor:r,writer:t})}remove(e,t){const n=this._stack,o=n[0];this._removeDescriptor(e);const r=n[0];o!==r&&!fk(o,r)&&this.fire("change:top",{oldDescriptor:o,newDescriptor:r,writer:t})}_insertDescriptor(e){const t=this._stack,n=t.findIndex(r=>r.id===e.id);if(fk(e,t[n]))return;n>-1&&t.splice(n,1);let o=0;for(;t[o]&&dj(t[o],e);)o++;t.splice(o,0,e)}_removeDescriptor(e){const t=this._stack,n=t.findIndex(o=>o.id===e);n>-1&&t.splice(n,1)}}function fk(i,e){return i&&e&&i.priority==e.priority&&Gu(i.classes)==Gu(e.classes)}function dj(i,e){return i.priority>e.priority?!0:i.priority<e.priority?!1:Gu(i.classes)>Gu(e.classes)}function Gu(i){return Array.isArray(i)?i.sort().join(","):i}const uj='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M4 0v1H1v3H0V.5A.5.5 0 0 1 .5 0H4zm8 0h3.5a.5.5 0 0 1 .5.5V4h-1V1h-3V0zM4 16H.5a.5.5 0 0 1-.5-.5V12h1v3h3v1zm8 0v-1h3v-3h1v3.5a.5.5 0 0 1-.5.5H12z"/><path fill-opacity=".256" d="M1 1h14v14H1z"/><g class="ck-icon__selected-indicator"><path d="M7 0h2v1H7V0zM0 7h1v2H0V7zm15 0h1v2h-1V7zm-8 8h2v1H7v-1z"/><path fill-opacity=".254" d="M1 1h14v14H1z"/></g></svg>',hj="ck-widget",nx="ck-widget_selected";function ht(i){return i.is("element")?!!i.getCustomProperty("widget"):!1}function Yr(i,e,t={}){if(!i.is("containerElement"))throw new M("widget-to-widget-wrong-element-type",null,{element:i});return e.setAttribute("contenteditable","false",i),e.addClass(hj,i),e.setCustomProperty("widget",!0,i),i.getFillerOffset=kj,e.setCustomProperty("widgetLabel",[],i),t.label&&gj(i,t.label),t.hasSelectionHandle&&bj(i,e),ix(i,e),i}function fj(i,e,t){if(e.classes&&t.addClass(kt(e.classes),i),e.attributes)for(const n in e.attributes)t.setAttribute(n,e.attributes[n],i)}function mj(i,e,t){if(e.classes&&t.removeClass(kt(e.classes),i),e.attributes)for(const n in e.attributes)t.removeAttribute(n,i)}function ix(i,e,t=fj,n=mj){const o=new cj;o.on("change:top",(c,u)=>{u.oldDescriptor&&n(i,u.oldDescriptor,u.writer),u.newDescriptor&&t(i,u.newDescriptor,u.writer)});const r=(c,u,m)=>o.add(u,m),l=(c,u,m)=>o.remove(u,m);e.setCustomProperty("addHighlight",r,i),e.setCustomProperty("removeHighlight",l,i)}function gj(i,e){i.getCustomProperty("widgetLabel").push(e)}function pj(i){return i.getCustomProperty("widgetLabel").reduce((t,n)=>typeof n=="function"?t?t+". "+n():n():t?t+". "+n:n,"")}function mk(i,e,t={}){return e.addClass(["ck-editor__editable","ck-editor__nested-editable"],i),e.setAttribute("role","textbox",i),t.label&&e.setAttribute("aria-label",t.label,i),e.setAttribute("contenteditable",i.isReadOnly?"false":"true",i),i.on("change:isReadOnly",(n,o,r)=>{e.setAttribute("contenteditable",r?"false":"true",i)}),i.on("change:isFocused",(n,o,r)=>{r?e.addClass("ck-editor__nested-editable_focused",i):e.removeClass("ck-editor__nested-editable_focused",i)}),ix(i,e),i}function Kl(i,e){const t=i.getSelectedElement();if(t){const n=nr(i);if(n)return e.createRange(e.createPositionAt(t,n))}return T1(i,e)}function kj(){return null}function bj(i,e){const t=e.createUIElement("div",{class:"ck ck-widget__selection-handle"},function(n){const o=this.toDomElement(n),r=new qr;return r.set("content",uj),r.render(),o.appendChild(r.element),o});e.insert(e.createPositionAt(i,0),t),e.addClass(["ck-widget_with-selection-handle"],i)}const So="widget-type-around";function Zr(i,e,t){return!!i&&ht(i)&&!t.isInline(e)}function wj(i){return i.closest(".ck-widget__type-around__button")}function vj(i){return i.classList.contains("ck-widget__type-around__button_before")?"before":"after"}function Aj(i,e){const t=i.closest(".ck-widget");return e.mapDomToView(t)}function nr(i){return i.getAttribute(So)}const Cj='<svg viewBox="0 0 10 8" xmlns="http://www.w3.org/2000/svg"><path d="M9.055.263v3.972h-6.77M1 4.216l2-2.038m-2 2 2 2.038"/></svg>';var ox=f(5137),gk={injectType:"singletonStyleTag",attributes:{"data-cke":!0}};gk.insert="head",gk.singleton=!0,te()(ox.Z,gk),ox.Z.locals;const rx=["before","after"],_j=new DOMParser().parseFromString(Cj,"image/svg+xml").firstChild,sx="ck-widget__type-around_disabled";class yj extends j{static get pluginName(){return"WidgetTypeAround"}static get requires(){return[Wu,Eo]}constructor(e){super(e),this._currentFakeCaretModelElement=null}init(){const e=this.editor,t=e.editing.view;this.on("change:isEnabled",(n,o,r)=>{t.change(l=>{for(const c of t.document.roots)r?l.removeClass(sx,c):l.addClass(sx,c)}),r||e.model.change(l=>{l.removeSelectionAttribute(So)})}),this._enableTypeAroundUIInjection(),this._enableInsertingParagraphsOnButtonClick(),this._enableInsertingParagraphsOnEnterKeypress(),this._enableInsertingParagraphsOnTypingKeystroke(),this._enableTypeAroundFakeCaretActivationUsingKeyboardArrows(),this._enableDeleteIntegration(),this._enableInsertContentIntegration(),this._enableInsertObjectIntegration(),this._enableDeleteContentIntegration()}destroy(){super.destroy(),this._currentFakeCaretModelElement=null}_insertParagraph(e,t){const n=this.editor,o=n.editing.view,r=n.model.schema.getAttributesWithProperty(e,"copyOnReplace",!0);n.execute("insertParagraph",{position:n.model.createPositionAt(e,t),attributes:r}),o.focus(),o.scrollToTheSelection()}_listenToIfEnabled(e,t,n,o){this.listenTo(e,t,(...r)=>{this.isEnabled&&n(...r)},o)}_insertParagraphAccordingToFakeCaretPosition(){const n=this.editor.model.document.selection,o=nr(n);if(!o)return!1;const r=n.getSelectedElement();return this._insertParagraph(r,o),!0}_enableTypeAroundUIInjection(){const e=this.editor,t=e.model.schema,n=e.locale.t,o={before:n("Insert paragraph before block"),after:n("Insert paragraph after block")};e.editing.downcastDispatcher.on("insert",(r,l,c)=>{const u=c.mapper.toViewElement(l.item);u&&Zr(u,l.item,t)&&(xj(c.writer,o,u),u.getCustomProperty("widgetLabel").push(()=>this.isEnabled?n("Press Enter to type after or press Shift + Enter to type before the widget"):""))},{priority:"low"})}_enableTypeAroundFakeCaretActivationUsingKeyboardArrows(){const e=this.editor,t=e.model,n=t.document.selection,o=t.schema,r=e.editing.view;this._listenToIfEnabled(r.document,"arrowKey",(c,u)=>{this._handleArrowKeyPress(c,u)},{context:[ht,"$text"],priority:"high"}),this._listenToIfEnabled(n,"change:range",(c,u)=>{u.directChange&&e.model.change(m=>{m.removeSelectionAttribute(So)})}),this._listenToIfEnabled(t.document,"change:data",()=>{const c=n.getSelectedElement();if(c){const u=e.editing.mapper.toViewElement(c);if(Zr(u,c,o))return}e.model.change(u=>{u.removeSelectionAttribute(So)})}),this._listenToIfEnabled(e.editing.downcastDispatcher,"selection",(c,u,m)=>{const p=m.writer;if(this._currentFakeCaretModelElement){const B=m.mapper.toViewElement(this._currentFakeCaretModelElement);B&&(p.removeClass(rx.map(l),B),this._currentFakeCaretModelElement=null)}const w=u.selection.getSelectedElement();if(!w)return;const C=m.mapper.toViewElement(w);if(!Zr(C,w,o))return;const I=nr(u.selection);I&&(p.addClass(l(I),C),this._currentFakeCaretModelElement=w)}),this._listenToIfEnabled(e.ui.focusTracker,"change:isFocused",(c,u,m)=>{m||e.model.change(p=>{p.removeSelectionAttribute(So)})});function l(c){return`ck-widget_type-around_show-fake-caret_${c}`}}_handleArrowKeyPress(e,t){const n=this.editor,o=n.model,r=o.document.selection,l=o.schema,c=n.editing.view,u=t.keyCode,m=VL(u,n.locale.contentLanguageDirection),p=c.document.selection.getSelectedElement(),w=n.editing.mapper.toModelElement(p);let C;Zr(p,w,l)?C=this._handleArrowKeyPressOnSelectedWidget(m):r.isCollapsed?C=this._handleArrowKeyPressWhenSelectionNextToAWidget(m):t.shiftKey||(C=this._handleArrowKeyPressWhenNonCollapsedSelection(m)),C&&(t.preventDefault(),e.stop())}_handleArrowKeyPressOnSelectedWidget(e){const n=this.editor.model,o=n.document.selection,r=nr(o);return n.change(l=>{if(r){if(!(r===(e?"after":"before")))return l.removeSelectionAttribute(So),!0}else return l.setSelectionAttribute(So,e?"after":"before"),!0;return!1})}_handleArrowKeyPressWhenSelectionNextToAWidget(e){const t=this.editor,n=t.model,o=n.schema,r=t.plugins.get("Widget"),l=r._getObjectElementNextToSelection(e),c=t.editing.mapper.toViewElement(l);return Zr(c,l,o)?(n.change(u=>{r._setSelectionOverElement(l),u.setSelectionAttribute(So,e?"before":"after")}),!0):!1}_handleArrowKeyPressWhenNonCollapsedSelection(e){const t=this.editor,n=t.model,o=n.schema,r=t.editing.mapper,l=n.document.selection,c=e?l.getLastPosition().nodeBefore:l.getFirstPosition().nodeAfter,u=r.toViewElement(c);return Zr(u,c,o)?(n.change(m=>{m.setSelection(c,"on"),m.setSelectionAttribute(So,e?"after":"before")}),!0):!1}_enableInsertingParagraphsOnButtonClick(){const e=this.editor,t=e.editing.view;this._listenToIfEnabled(t.document,"mousedown",(n,o)=>{const r=wj(o.domTarget);if(!r)return;const l=vj(r),c=Aj(r,t.domConverter),u=e.editing.mapper.toModelElement(c);this._insertParagraph(u,l),o.preventDefault(),n.stop()})}_enableInsertingParagraphsOnEnterKeypress(){const e=this.editor,t=e.model.document.selection,n=e.editing.view;this._listenToIfEnabled(n.document,"enter",(o,r)=>{if(o.eventPhase!="atTarget")return;const l=t.getSelectedElement(),c=e.editing.mapper.toViewElement(l),u=e.model.schema;let m;this._insertParagraphAccordingToFakeCaretPosition()?m=!0:Zr(c,l,u)&&(this._insertParagraph(l,r.isSoft?"before":"after"),m=!0),m&&(r.preventDefault(),o.stop())},{context:ht})}_enableInsertingParagraphsOnTypingKeystroke(){const t=this.editor.editing.view.document;this._listenToIfEnabled(t,"insertText",(n,o)=>{this._insertParagraphAccordingToFakeCaretPosition()&&(o.selection=t.selection)},{priority:"high"}),A.isAndroid?this._listenToIfEnabled(t,"keydown",(n,o)=>{o.keyCode==229&&this._insertParagraphAccordingToFakeCaretPosition()}):this._listenToIfEnabled(t,"compositionstart",()=>{this._insertParagraphAccordingToFakeCaretPosition()},{priority:"high"})}_enableDeleteIntegration(){const e=this.editor,t=e.editing.view,n=e.model,o=n.schema;this._listenToIfEnabled(t.document,"delete",(r,l)=>{if(r.eventPhase!="atTarget")return;const c=nr(n.document.selection);if(!c)return;const u=l.direction,m=n.document.selection.getSelectedElement(),p=c==="before",w=u=="forward";if(p===w)e.execute("delete",{selection:n.createSelection(m,"on")});else{const I=o.getNearestSelectionRange(n.createPositionAt(m,c),u);if(I)if(!I.isCollapsed)n.change(B=>{B.setSelection(I),e.execute(w?"deleteForward":"delete")});else{const B=n.createSelection(I.start);if(n.modifySelection(B,{direction:u}),!B.focus.isEqual(I.start))n.change(P=>{P.setSelection(I),e.execute(w?"deleteForward":"delete")});else{const P=Dj(o,I.start.parent);n.deleteContent(n.createSelection(P,"on"),{doNotAutoparagraph:!0})}}}l.preventDefault(),r.stop()},{context:ht})}_enableInsertContentIntegration(){const e=this.editor,t=this.editor.model,n=t.document.selection;this._listenToIfEnabled(e.model,"insertContent",(o,[r,l])=>{if(l&&!l.is("documentSelection"))return;const c=nr(n);if(c)return o.stop(),t.change(u=>{const m=n.getSelectedElement(),p=t.createPositionAt(m,c),w=u.createSelection(p),C=t.insertContent(r,w);return u.setSelection(w),C})},{priority:"high"})}_enableInsertObjectIntegration(){const e=this.editor,n=this.editor.model.document.selection;this._listenToIfEnabled(e.model,"insertObject",(o,r)=>{const[,l,,c={}]=r;if(l&&!l.is("documentSelection"))return;const u=nr(n);u&&(c.findOptimalPosition=u,r[3]=c)},{priority:"high"})}_enableDeleteContentIntegration(){const e=this.editor,n=this.editor.model.document.selection;this._listenToIfEnabled(e.model,"deleteContent",(o,[r])=>{if(r&&!r.is("documentSelection"))return;nr(n)&&o.stop()},{priority:"high"})}}function xj(i,e,t){const n=i.createUIElement("div",{class:"ck ck-reset_all ck-widget__type-around"},function(o){const r=this.toDomElement(o);return Ej(r,e),Sj(r),r});i.insert(i.createPositionAt(t,"end"),n)}function Ej(i,e){for(const t of rx){const n=new jn({tag:"div",attributes:{class:["ck","ck-widget__type-around__button",`ck-widget__type-around__button_${t}`],title:e[t],"aria-hidden":"true"},children:[i.ownerDocument.importNode(_j,!0)]});i.appendChild(n.render())}}function Sj(i){const e=new jn({tag:"div",attributes:{class:["ck","ck-widget__type-around__fake-caret"]}});i.appendChild(e.render())}function Dj(i,e){let t=e;for(const n of e.getAncestors({parentFirst:!0})){if(n.childCount>1||i.isLimit(n))break;t=n}return t}function Tj(i){const e=i.model;return(t,n)=>{const o=n.keyCode==Se.arrowup,r=n.keyCode==Se.arrowdown,l=n.shiftKey,c=e.document.selection;if(!o&&!r)return;const u=r;if(l&&Bj(c,u))return;const m=Ij(i,c,u);if(m){if(m.isCollapsed){if(c.isCollapsed)return;if(l)return}(m.isCollapsed||Mj(i,m,u))&&(e.change(p=>{const w=u?m.end:m.start;if(l){const C=e.createSelection(c.anchor);C.setFocus(w),p.setSelection(C)}else p.setSelection(w)}),t.stop(),n.preventDefault(),n.stopPropagation())}}}function Ij(i,e,t){const n=i.model;if(t){const o=e.isCollapsed?e.focus:e.getLastPosition(),r=ax(n,o,"forward");if(!r)return null;const l=n.createRange(o,r),c=lx(n.schema,l,"backward");return c?n.createRange(o,c):null}else{const o=e.isCollapsed?e.focus:e.getFirstPosition(),r=ax(n,o,"backward");if(!r)return null;const l=n.createRange(r,o),c=lx(n.schema,l,"forward");return c?n.createRange(c,o):null}}function ax(i,e,t){const n=i.schema,o=i.createRangeIn(e.root),r=t=="forward"?"elementStart":"elementEnd";for(const{previousPosition:l,item:c,type:u}of o.getWalker({startPosition:e,direction:t})){if(n.isLimit(c)&&!n.isInline(c))return l;if(u==r&&n.isBlock(c))return null}return null}function lx(i,e,t){const n=t=="backward"?e.end:e.start;if(i.checkChild(n,"$text"))return n;for(const{nextPosition:o}of e.getWalker({direction:t}))if(i.checkChild(o,"$text"))return o;return null}function Mj(i,e,t){const n=i.model,o=i.view.domConverter;if(t){const m=n.createSelection(e.start);n.modifySelection(m),!m.focus.isAtEnd&&!e.start.isEqual(m.focus)&&(e=n.createRange(m.focus,e.end))}const r=i.mapper.toViewRange(e),l=o.viewRangeToDom(r),c=Be.getDomRangeRects(l);let u;for(const m of c){if(u===void 0){u=Math.round(m.bottom);continue}if(Math.round(m.top)>=u)return!1;u=Math.max(u,Math.round(m.bottom))}return!0}function Bj(i,e){return!i.isCollapsed&&i.isBackward==e}var cx=f(6507),pk={injectType:"singletonStyleTag",attributes:{"data-cke":!0}};pk.insert="head",pk.singleton=!0,te()(cx.Z,pk),cx.Z.locals;class Do extends j{static get pluginName(){return"Widget"}static get requires(){return[yj,Eo]}init(){const e=this.editor,t=e.editing.view,n=t.document;this._previouslySelected=new Set,this.editor.editing.downcastDispatcher.on("selection",(o,r,l)=>{const c=l.writer,u=r.selection;if(u.isCollapsed)return;const m=u.getSelectedElement();if(!m)return;const p=e.editing.mapper.toViewElement(m);ht(p)&&l.consumable.consume(u,"selection")&&c.setSelection(c.createRangeOn(p),{fake:!0,label:pj(p)})}),this.editor.editing.downcastDispatcher.on("selection",(o,r,l)=>{this._clearPreviouslySelectedWidgets(l.writer);const c=l.writer,u=c.document.selection;let m=null;for(const p of u.getRanges())for(const w of p){const C=w.item;ht(C)&&!zj(C,m)&&(c.addClass(nx,C),this._previouslySelected.add(C),m=C)}},{priority:"low"}),t.addObserver(Eu),this.listenTo(n,"mousedown",(...o)=>this._onMousedown(...o)),this.listenTo(n,"arrowKey",(...o)=>{this._handleSelectionChangeOnArrowKeyPress(...o)},{context:[ht,"$text"]}),this.listenTo(n,"arrowKey",(...o)=>{this._preventDefaultOnArrowKeyPress(...o)},{context:"$root"}),this.listenTo(n,"arrowKey",Tj(this.editor.editing),{context:"$text"}),this.listenTo(n,"delete",(o,r)=>{this._handleDelete(r.direction=="forward")&&(r.preventDefault(),o.stop())},{context:"$root"})}_onMousedown(e,t){const n=this.editor,o=n.editing.view,r=o.document;let l=t.target;if(Lj(l)){if((A.isSafari||A.isGecko)&&t.domEvent.detail>=3){const u=n.editing.mapper,m=l.is("attributeElement")?l.findAncestor(w=>!w.is("attributeElement")):l,p=u.toModelElement(m);t.preventDefault(),this.editor.model.change(w=>{w.setSelection(p,"in")})}return}if(!ht(l)&&(l=l.findAncestor(ht),!l))return;A.isAndroid&&t.preventDefault(),r.isFocused||o.focus();const c=n.editing.mapper.toModelElement(l);this._setSelectionOverElement(c)}_handleSelectionChangeOnArrowKeyPress(e,t){const n=t.keyCode,o=this.editor.model,r=o.schema,l=o.document.selection,c=l.getSelectedElement(),u=au(n,this.editor.locale.contentLanguageDirection),m=u=="down"||u=="right",p=u=="up"||u=="down";if(c&&r.isObject(c)){const C=m?l.getLastPosition():l.getFirstPosition(),I=r.getNearestSelectionRange(C,m?"forward":"backward");I&&(o.change(B=>{B.setSelection(I)}),t.preventDefault(),e.stop());return}if(!l.isCollapsed&&!t.shiftKey){const C=l.getFirstPosition(),I=l.getLastPosition(),B=C.nodeAfter,P=I.nodeBefore;(B&&r.isObject(B)||P&&r.isObject(P))&&(o.change(V=>{V.setSelection(m?I:C)}),t.preventDefault(),e.stop());return}if(!l.isCollapsed)return;const w=this._getObjectElementNextToSelection(m);if(w&&r.isObject(w)){if(r.isInline(w)&&p)return;this._setSelectionOverElement(w),t.preventDefault(),e.stop()}}_preventDefaultOnArrowKeyPress(e,t){const n=this.editor.model,o=n.schema,r=n.document.selection.getSelectedElement();r&&o.isObject(r)&&(t.preventDefault(),e.stop())}_handleDelete(e){if(this.editor.isReadOnly)return;const n=this.editor.model.document.selection;if(!n.isCollapsed)return;const o=this._getObjectElementNextToSelection(e);if(o)return this.editor.model.change(r=>{let l=n.anchor.parent;for(;l.isEmpty;){const c=l;l=c.parent,r.remove(c)}this._setSelectionOverElement(o)}),!0}_setSelectionOverElement(e){this.editor.model.change(t=>{t.setSelection(t.createRangeOn(e))})}_getObjectElementNextToSelection(e){const t=this.editor.model,n=t.schema,o=t.document.selection,r=t.createSelection(o);if(t.modifySelection(r,{direction:e?"forward":"backward"}),r.isEqual(o))return null;const l=e?r.focus.nodeBefore:r.focus.nodeAfter;return l&&n.isObject(l)?l:null}_clearPreviouslySelectedWidgets(e){for(const t of this._previouslySelected)e.removeClass(nx,t);this._previouslySelected.clear()}}function Lj(i){let e=i;for(;e;){if(e.is("editableElement")&&!e.is("rootElement"))return!0;if(ht(e))return!1;e=e.parent}return!1}function zj(i,e){return e?Array.from(i.getAncestors()).includes(e):!1}class Xs extends j{static get requires(){return[qi]}static get pluginName(){return"WidgetToolbarRepository"}init(){const e=this.editor;if(e.plugins.has("BalloonToolbar")){const t=e.plugins.get("BalloonToolbar");this.listenTo(t,"show",n=>{Nj(e.editing.view.document.selection)&&n.stop()},{priority:"high"})}this._toolbarDefinitions=new Map,this._balloon=this.editor.plugins.get("ContextualBalloon"),this.on("change:isEnabled",()=>{this._updateToolbarsVisibility()}),this.listenTo(e.ui,"update",()=>{this._updateToolbarsVisibility()}),this.listenTo(e.ui.focusTracker,"change:isFocused",()=>{this._updateToolbarsVisibility()},{priority:"low"})}destroy(){super.destroy();for(const e of this._toolbarDefinitions.values())e.view.destroy()}register(e,{ariaLabel:t,items:n,getRelatedElement:o,balloonClassName:r="ck-toolbar-container"}){if(!n.length){re("widget-toolbar-no-items",{toolbarId:e});return}const l=this.editor,c=l.t,u=new Ks(l.locale);if(u.ariaLabel=t||c("Widget toolbar"),this._toolbarDefinitions.has(e))throw new M("widget-toolbar-duplicated",this,{toolbarId:e});const m={view:u,getRelatedElement:o,balloonClassName:r,itemsConfig:n,initialized:!1};l.ui.addToolbar(u,{isContextual:!0,beforeFocus:()=>{const p=o(l.editing.view.document.selection);p&&this._showToolbar(m,p)},afterBlur:()=>{this._hideToolbar(m)}}),this._toolbarDefinitions.set(e,m)}_updateToolbarsVisibility(){let e=0,t=null,n=null;for(const o of this._toolbarDefinitions.values()){const r=o.getRelatedElement(this.editor.editing.view.document.selection);if(!this.isEnabled||!r)this._isToolbarInBalloon(o)&&this._hideToolbar(o);else if(!this.editor.ui.focusTracker.isFocused)this._isToolbarVisible(o)&&this._hideToolbar(o);else{const l=r.getAncestors().length;l>e&&(e=l,t=r,n=o)}}n&&this._showToolbar(n,t)}_hideToolbar(e){this._balloon.remove(e.view),this.stopListening(this._balloon,"change:visibleView")}_showToolbar(e,t){this._isToolbarVisible(e)?dx(this.editor,t):this._isToolbarInBalloon(e)||(e.initialized||(e.initialized=!0,e.view.fillFromConfig(e.itemsConfig,this.editor.ui.componentFactory)),this._balloon.add({view:e.view,position:ux(this.editor,t),balloonClassName:e.balloonClassName}),this.listenTo(this._balloon,"change:visibleView",()=>{for(const n of this._toolbarDefinitions.values())if(this._isToolbarVisible(n)){const o=n.getRelatedElement(this.editor.editing.view.document.selection);dx(this.editor,o)}}))}_isToolbarVisible(e){return this._balloon.visibleView===e.view}_isToolbarInBalloon(e){return this._balloon.hasView(e.view)}}function dx(i,e){const t=i.plugins.get("ContextualBalloon"),n=ux(i,e);t.updatePosition(n)}function ux(i,e){const t=i.editing.view,n=Xt.defaultPositions;return{target:t.domConverter.mapViewToDom(e),positions:[n.northArrowSouth,n.northArrowSouthWest,n.northArrowSouthEast,n.southArrowNorth,n.southArrowNorthWest,n.southArrowNorthEast,n.viewportStickyNorth]}}function Nj(i){const e=i.getSelectedElement();return!!(e&&ht(e))}class Pj extends De(){constructor(e){super(),this.set("activeHandlePosition",null),this.set("proposedWidthPercents",null),this.set("proposedWidth",null),this.set("proposedHeight",null),this.set("proposedHandleHostWidth",null),this.set("proposedHandleHostHeight",null),this._options=e,this._referenceCoordinates=null}get originalWidth(){return this._originalWidth}get originalHeight(){return this._originalHeight}get originalWidthPercents(){return this._originalWidthPercents}get aspectRatio(){return this._aspectRatio}begin(e,t,n){const o=new Be(t);this.activeHandlePosition=Fj(e),this._referenceCoordinates=Oj(t,Vj(this.activeHandlePosition)),this._originalWidth=o.width,this._originalHeight=o.height,this._aspectRatio=o.width/o.height;const r=n.style.width;r&&r.match(/^\d+(\.\d*)?%$/)?this._originalWidthPercents=parseFloat(r):this._originalWidthPercents=Rj(n,o)}update(e){this.proposedWidth=e.width,this.proposedHeight=e.height,this.proposedWidthPercents=e.widthPercents,this.proposedHandleHostWidth=e.handleHostWidth,this.proposedHandleHostHeight=e.handleHostHeight}}function Rj(i,e){const t=i.parentElement,n=parseFloat(t.ownerDocument.defaultView.getComputedStyle(t).width);return e.width/n*100}function Oj(i,e){const t=new Be(i),n=e.split("-"),o={x:n[1]=="right"?t.right:t.left,y:n[0]=="bottom"?t.bottom:t.top};return o.x+=i.ownerDocument.defaultView.scrollX,o.y+=i.ownerDocument.defaultView.scrollY,o}function jj(i){return`ck-widget__resizer__handle-${i}`}function Fj(i){const e=["top-left","top-right","bottom-right","bottom-left"];for(const t of e)if(i.classList.contains(jj(t)))return t}function Vj(i){const e=i.split("-"),t={top:"bottom",bottom:"top",left:"right",right:"left"};return`${t[e[0]]}-${t[e[1]]}`}class Hj extends ae{constructor(){super();const e=this.bindTemplate;this.setTemplate({tag:"div",attributes:{class:["ck","ck-size-view",e.to("_viewPosition",t=>t?`ck-orientation-${t}`:"")],style:{display:e.if("_isVisible","none",t=>!t)}},children:[{text:e.to("_label")}]})}_bindToState(e,t){this.bind("_isVisible").to(t,"proposedWidth",t,"proposedHeight",(n,o)=>n!==null&&o!==null),this.bind("_label").to(t,"proposedHandleHostWidth",t,"proposedHandleHostHeight",t,"proposedWidthPercents",(n,o,r)=>e.unit==="px"?`${n}×${o}`:`${r}%`),this.bind("_viewPosition").to(t,"activeHandlePosition",t,"proposedHandleHostWidth",t,"proposedHandleHostHeight",(n,o,r)=>o<50||r<50?"above-center":n)}_dismiss(){this.unbind(),this._isVisible=!1}}class hx extends De(){constructor(e){super(),this._options=e,this._viewResizerWrapper=null,this.set("isEnabled",!0),this.set("isSelected",!1),this.bind("isVisible").to(this,"isEnabled",this,"isSelected",(t,n)=>t&&n),this.decorate("begin"),this.decorate("cancel"),this.decorate("commit"),this.decorate("updateSize"),this.on("commit",t=>{!this.state.proposedWidth&&!this.state.proposedWidthPercents&&(this._cleanup(),t.stop())},{priority:"high"})}get state(){return this._state}show(){this._options.editor.editing.view.change(t=>{t.removeClass("ck-hidden",this._viewResizerWrapper)})}hide(){this._options.editor.editing.view.change(t=>{t.addClass("ck-hidden",this._viewResizerWrapper)})}attach(){const e=this,t=this._options.viewElement;this._options.editor.editing.view.change(o=>{const r=o.createUIElement("div",{class:"ck ck-reset_all ck-widget__resizer"},function(l){const c=this.toDomElement(l);return e._appendHandles(c),e._appendSizeUI(c),c});o.insert(o.createPositionAt(t,"end"),r),o.addClass("ck-widget_with-resizer",t),this._viewResizerWrapper=r,this.isVisible||this.hide()}),this.on("change:isVisible",()=>{this.isVisible?(this.show(),this.redraw()):this.hide()})}begin(e){this._state=new Pj(this._options),this._sizeView._bindToState(this._options,this.state),this._initialViewWidth=this._options.viewElement.getStyle("width"),this.state.begin(e,this._getHandleHost(),this._getResizeHost())}updateSize(e){const t=this._proposeNewSize(e);this._options.editor.editing.view.change(m=>{const p=this._options.unit||"%",w=(p==="%"?t.widthPercents:t.width)+p;m.setStyle("width",w,this._options.viewElement)});const o=this._getHandleHost(),r=new Be(o),l=Math.round(r.width),c=Math.round(r.height),u=new Be(o);t.width=Math.round(u.width),t.height=Math.round(u.height),this.redraw(r),this.state.update({...t,handleHostWidth:l,handleHostHeight:c})}commit(){const e=this._options.unit||"%",t=(e==="%"?this.state.proposedWidthPercents:this.state.proposedWidth)+e;this._options.editor.editing.view.change(()=>{this._cleanup(),this._options.onCommit(t)})}cancel(){this._cleanup()}destroy(){this.cancel()}redraw(e){const t=this._domResizerWrapper;if(!Wj(t))return;const n=t.parentElement,o=this._getHandleHost(),r=this._viewResizerWrapper,l=[r.getStyle("width"),r.getStyle("height"),r.getStyle("left"),r.getStyle("top")];let c;if(n.isSameNode(o)){const u=e||new Be(o);c=[u.width+"px",u.height+"px",void 0,void 0]}else c=[o.offsetWidth+"px",o.offsetHeight+"px",o.offsetLeft+"px",o.offsetTop+"px"];gt(l,c)!=="same"&&this._options.editor.editing.view.change(u=>{u.setStyle({width:c[0],height:c[1],left:c[2],top:c[3]},r)})}containsHandle(e){return this._domResizerWrapper.contains(e)}static isResizeHandle(e){return e.classList.contains("ck-widget__resizer__handle")}_cleanup(){this._sizeView._dismiss(),this._options.editor.editing.view.change(t=>{t.setStyle("width",this._initialViewWidth,this._options.viewElement)})}_proposeNewSize(e){const t=this.state,n=$j(e),o=this._options.isCentered?this._options.isCentered(this):!0,r={x:t._referenceCoordinates.x-(n.x+t.originalWidth),y:n.y-t.originalHeight-t._referenceCoordinates.y};o&&t.activeHandlePosition.endsWith("-right")&&(r.x=n.x-(t._referenceCoordinates.x+t.originalWidth)),o&&(r.x*=2);let l=Math.abs(t.originalWidth+r.x),c=Math.abs(t.originalHeight+r.y);return(l/t.aspectRatio>c?"width":"height")=="width"?c=l/t.aspectRatio:l=c*t.aspectRatio,{width:Math.round(l),height:Math.round(c),widthPercents:Math.min(Math.round(t.originalWidthPercents/t.originalWidth*l*100)/100,100)}}_getResizeHost(){const e=this._domResizerWrapper.parentElement;return this._options.getResizeHost(e)}_getHandleHost(){const e=this._domResizerWrapper.parentElement;return this._options.getHandleHost(e)}get _domResizerWrapper(){return this._options.editor.editing.view.domConverter.mapViewToDom(this._viewResizerWrapper)}_appendHandles(e){const t=["top-left","top-right","bottom-right","bottom-left"];for(const n of t)e.appendChild(new jn({tag:"div",attributes:{class:`ck-widget__resizer__handle ${Uj(n)}`}}).render())}_appendSizeUI(e){this._sizeView=new Hj,this._sizeView.render(),e.appendChild(this._sizeView.element)}}function Uj(i){return`ck-widget__resizer__handle-${i}`}function $j(i){return{x:i.pageX,y:i.pageY}}function Wj(i){return i&&i.ownerDocument&&i.ownerDocument.contains(i)}var Gj="Expected a function";function qj(i,e,t){var n=!0,o=!0;if(typeof i!="function")throw new TypeError(Gj);return He(t)&&(n="leading"in t?!!t.leading:n,o="trailing"in t?!!t.trailing:o),_o(i,e,{leading:n,maxWait:e,trailing:o})}const qu=qj;var fx=f(2263),kk={injectType:"singletonStyleTag",attributes:{"data-cke":!0}};kk.insert="head",kk.singleton=!0,te()(fx.Z,kk),fx.Z.locals;class bk extends j{static get pluginName(){return"WidgetResize"}init(){const e=this.editor.editing,t=ye.window.document;this.set("selectedResizer",null),this.set("_activeResizer",null),this._resizers=new Map,e.view.addObserver(Eu),this._observer=new(Co()),this.listenTo(e.view.document,"mousedown",this._mouseDownListener.bind(this),{priority:"high"}),this._observer.listenTo(t,"mousemove",this._mouseMoveListener.bind(this)),this._observer.listenTo(t,"mouseup",this._mouseUpListener.bind(this)),this._redrawSelectedResizerThrottled=qu(()=>this.redrawSelectedResizer(),200),this.editor.ui.on("update",this._redrawSelectedResizerThrottled),this.editor.model.document.on("change",()=>{for(const[o,r]of this._resizers)o.isAttached()||(this._resizers.delete(o),r.destroy())},{priority:"lowest"}),this._observer.listenTo(ye.window,"resize",this._redrawSelectedResizerThrottled);const n=this.editor.editing.view.document.selection;n.on("change",()=>{const o=n.getSelectedElement(),r=this.getResizerByViewElement(o)||null;r?this.select(r):this.deselect()})}redrawSelectedResizer(){this.selectedResizer&&this.selectedResizer.isVisible&&this.selectedResizer.redraw()}destroy(){super.destroy(),this._observer.stopListening();for(const e of this._resizers.values())e.destroy();this._redrawSelectedResizerThrottled.cancel()}select(e){this.deselect(),this.selectedResizer=e,this.selectedResizer.isSelected=!0}deselect(){this.selectedResizer&&(this.selectedResizer.isSelected=!1),this.selectedResizer=null}attachTo(e){const t=new hx(e),n=this.editor.plugins;if(t.attach(),n.has("WidgetToolbarRepository")){const l=n.get("WidgetToolbarRepository");t.on("begin",()=>{l.forceDisabled("resize")},{priority:"lowest"}),t.on("cancel",()=>{l.clearForceDisabled("resize")},{priority:"highest"}),t.on("commit",()=>{l.clearForceDisabled("resize")},{priority:"highest"})}this._resizers.set(e.viewElement,t);const r=this.editor.editing.view.document.selection.getSelectedElement();return this.getResizerByViewElement(r)==t&&this.select(t),t}getResizerByViewElement(e){return this._resizers.get(e)}_getResizerByHandle(e){for(const t of this._resizers.values())if(t.containsHandle(e))return t}_mouseDownListener(e,t){const n=t.domTarget;hx.isResizeHandle(n)&&(this._activeResizer=this._getResizerByHandle(n)||null,this._activeResizer&&(this._activeResizer.begin(n),e.stop(),t.preventDefault()))}_mouseMoveListener(e,t){this._activeResizer&&this._activeResizer.updateSize(t)}_mouseUpListener(){this._activeResizer&&(this._activeResizer.commit(),this._activeResizer=null)}}var mx=f(390),wk={injectType:"singletonStyleTag",attributes:{"data-cke":!0}};wk.insert="head",wk.singleton=!0,te()(mx.Z,wk),mx.Z.locals;class Kj extends j{static get pluginName(){return"DragDrop"}static get requires(){return[Ki,Do]}init(){const e=this.editor,t=e.editing.view;this._draggedRange=null,this._draggingUid="",this._draggableElement=null,this._updateDropMarkerThrottled=qu(n=>this._updateDropMarker(n),40),this._removeDropMarkerDelayed=kx(()=>this._removeDropMarker(),40),this._clearDraggableAttributesDelayed=kx(()=>this._clearDraggableAttributes(),40),t.addObserver(uk),t.addObserver(Eu),this._setupDragging(),this._setupContentInsertionIntegration(),this._setupClipboardInputIntegration(),this._setupDropMarker(),this._setupDraggableAttributeHandling(),this.listenTo(e,"change:isReadOnly",(n,o,r)=>{r?this.forceDisabled("readOnlyMode"):this.clearForceDisabled("readOnlyMode")}),this.on("change:isEnabled",(n,o,r)=>{r||this._finalizeDragging(!1)}),A.isAndroid&&this.forceDisabled("noAndroidSupport")}destroy(){return this._draggedRange&&(this._draggedRange.detach(),this._draggedRange=null),this._updateDropMarkerThrottled.cancel(),this._removeDropMarkerDelayed.cancel(),this._clearDraggableAttributesDelayed.cancel(),super.destroy()}_setupDragging(){const e=this.editor,t=e.model,n=t.document,o=e.editing.view,r=o.document;this.listenTo(r,"dragstart",(l,c)=>{const u=n.selection;if(c.target&&c.target.is("editableElement")){c.preventDefault();return}const m=c.target?bx(c.target):null;if(m){const C=e.editing.mapper.toModelElement(m);this._draggedRange=oi.fromRange(t.createRangeOn(C)),e.plugins.has("WidgetToolbarRepository")&&e.plugins.get("WidgetToolbarRepository").forceDisabled("dragDrop")}else if(!r.selection.isCollapsed){const C=r.selection.getSelectedElement();(!C||!ht(C))&&(this._draggedRange=oi.fromRange(u.getFirstRange()))}if(!this._draggedRange){c.preventDefault();return}this._draggingUid=we(),c.dataTransfer.effectAllowed=this.isEnabled?"copyMove":"copy",c.dataTransfer.setData("application/ckeditor5-dragging-uid",this._draggingUid);const p=t.createSelection(this._draggedRange.toRange()),w=e.data.toView(t.getSelectedContent(p));r.fire("clipboardOutput",{dataTransfer:c.dataTransfer,content:w,method:"dragstart"}),this.isEnabled||(this._draggedRange.detach(),this._draggedRange=null,this._draggingUid="")},{priority:"low"}),this.listenTo(r,"dragend",(l,c)=>{this._finalizeDragging(!c.dataTransfer.isCanceled&&c.dataTransfer.dropEffect=="move")},{priority:"low"}),this.listenTo(r,"dragenter",()=>{this.isEnabled&&o.focus()}),this.listenTo(r,"dragleave",()=>{this._removeDropMarkerDelayed()}),this.listenTo(r,"dragging",(l,c)=>{if(!this.isEnabled){c.dataTransfer.dropEffect="none";return}this._removeDropMarkerDelayed.cancel();const u=gx(e,c.targetRanges,c.target);this._draggedRange||(c.dataTransfer.dropEffect="copy"),A.isGecko||(c.dataTransfer.effectAllowed=="copy"?c.dataTransfer.dropEffect="copy":["all","copyMove"].includes(c.dataTransfer.effectAllowed)&&(c.dataTransfer.dropEffect="move")),u&&this._updateDropMarkerThrottled(u)},{priority:"low"})}_setupClipboardInputIntegration(){const e=this.editor,n=e.editing.view.document;this.listenTo(n,"clipboardInput",(o,r)=>{if(r.method!="drop")return;const l=gx(e,r.targetRanges,r.target);if(this._removeDropMarker(),!l){this._finalizeDragging(!1),o.stop();return}if(this._draggedRange&&this._draggingUid!=r.dataTransfer.getData("application/ckeditor5-dragging-uid")&&(this._draggedRange.detach(),this._draggedRange=null,this._draggingUid=""),px(r.dataTransfer)=="move"&&this._draggedRange&&this._draggedRange.containsRange(l,!0)){this._finalizeDragging(!1),o.stop();return}r.targetRanges=[e.editing.mapper.toViewRange(l)]},{priority:"high"})}_setupContentInsertionIntegration(){const e=this.editor.plugins.get(Ki);e.on("contentInsertion",(t,n)=>{if(!this.isEnabled||n.method!=="drop")return;const o=n.targetRanges.map(r=>this.editor.editing.mapper.toModelRange(r));this.editor.model.change(r=>r.setSelection(o))},{priority:"high"}),e.on("contentInsertion",(t,n)=>{if(!this.isEnabled||n.method!=="drop")return;const o=px(n.dataTransfer)=="move",r=!n.resultRange||!n.resultRange.isCollapsed;this._finalizeDragging(r&&o)},{priority:"lowest"})}_setupDraggableAttributeHandling(){const e=this.editor,t=e.editing.view,n=t.document;this.listenTo(n,"mousedown",(o,r)=>{if(A.isAndroid||!r)return;this._clearDraggableAttributesDelayed.cancel();let l=bx(r.target);if(A.isBlink&&!e.isReadOnly&&!l&&!n.selection.isCollapsed){const c=n.selection.getSelectedElement();(!c||!ht(c))&&(l=n.selection.editableElement)}l&&(t.change(c=>{c.setAttribute("draggable","true",l)}),this._draggableElement=e.editing.mapper.toModelElement(l))}),this.listenTo(n,"mouseup",()=>{A.isAndroid||this._clearDraggableAttributesDelayed()})}_clearDraggableAttributes(){const e=this.editor.editing;e.view.change(t=>{this._draggableElement&&this._draggableElement.root.rootName!="$graveyard"&&t.removeAttribute("draggable",e.mapper.toViewElement(this._draggableElement)),this._draggableElement=null})}_setupDropMarker(){const e=this.editor;e.conversion.for("editingDowncast").markerToHighlight({model:"drop-target",view:{classes:["ck-clipboard-drop-target-range"]}}),e.conversion.for("editingDowncast").markerToElement({model:"drop-target",view:(t,{writer:n})=>{if(e.model.schema.checkChild(t.markerRange.start,"$text"))return n.createUIElement("span",{class:"ck ck-clipboard-drop-target-position"},function(r){const l=this.toDomElement(r);return l.append("⁠",r.createElement("span"),"⁠"),l})}})}_updateDropMarker(e){const t=this.editor,n=t.model.markers;t.model.change(o=>{n.has("drop-target")?n.get("drop-target").getRange().isEqual(e)||o.updateMarker("drop-target",{range:e}):o.addMarker("drop-target",{range:e,usingOperation:!1,affectsData:!1})})}_removeDropMarker(){const e=this.editor.model;this._removeDropMarkerDelayed.cancel(),this._updateDropMarkerThrottled.cancel(),e.markers.has("drop-target")&&e.change(t=>{t.removeMarker("drop-target")})}_finalizeDragging(e){const t=this.editor,n=t.model;this._removeDropMarker(),this._clearDraggableAttributes(),t.plugins.has("WidgetToolbarRepository")&&t.plugins.get("WidgetToolbarRepository").clearForceDisabled("dragDrop"),this._draggingUid="",this._draggedRange&&(e&&this.isEnabled&&n.deleteContent(n.createSelection(this._draggedRange),{doNotAutoparagraph:!0}),this._draggedRange.detach(),this._draggedRange=null)}}function gx(i,e,t){const n=i.model,o=i.editing.mapper;let r=null;const l=e?e[0].start:null;if(t.is("uiElement")&&(t=t.parent),r=Yj(i,t),r)return r;const c=Xj(i,t),u=l?o.toModelPosition(l):null;return u?(r=Qj(i,u,c),r||(r=n.schema.getNearestSelectionRange(u,A.isGecko?"forward":"backward"),r)?r:Jj(i,u.parent)):Zj(i,c)}function Yj(i,e){const t=i.model,n=i.editing.mapper;if(ht(e))return t.createRangeOn(n.toModelElement(e));if(!e.is("editableElement")){const o=e.findAncestor(r=>ht(r)||r.is("editableElement"));if(ht(o))return t.createRangeOn(n.toModelElement(o))}return null}function Zj(i,e){const t=i.model,n=t.schema,o=t.createPositionAt(e,0);return n.getNearestSelectionRange(o,"forward")}function Qj(i,e,t){const n=i.model;if(!n.schema.checkChild(t,"$block"))return null;const o=n.createPositionAt(t,0),r=e.path.slice(0,o.path.length),c=n.createPositionFromPath(e.root,r).nodeAfter;return c&&n.schema.isObject(c)?n.createRangeOn(c):null}function Jj(i,e){const t=i.model;let n=e;for(;n;){if(t.schema.isObject(n))return t.createRangeOn(n);n=n.parent}return null}function Xj(i,e){const t=i.editing.mapper,n=i.editing.view,o=t.toModelElement(e);if(o)return o;const r=n.createPositionBefore(e),l=t.findMappedViewAncestor(r);return t.toModelElement(l)}function px(i){return A.isGecko?i.dropEffect:["all","copyMove"].includes(i.effectAllowed)?"move":"copy"}function kx(i,e){let t;function n(...o){n.cancel(),t=setTimeout(()=>i(...o),e)}return n.cancel=()=>{clearTimeout(t)},n}function bx(i){if(i.is("editableElement"))return null;if(i.hasClass("ck-widget__selection-handle"))return i.findAncestor(ht);if(ht(i))return i;const e=i.findAncestor(t=>ht(t)||t.is("editableElement"));return ht(e)?e:null}class eF extends j{static get pluginName(){return"PastePlainText"}static get requires(){return[Ki]}init(){const e=this.editor,t=e.model,n=e.editing.view,o=n.document,r=t.document.selection;let l=!1;n.addObserver(uk),this.listenTo(o,"keydown",(c,u)=>{l=u.shiftKey}),e.plugins.get(Ki).on("contentInsertion",(c,u)=>{!l&&!tF(u.content,t.schema)||t.change(m=>{const p=Array.from(r.getAttributes()).filter(([C])=>t.schema.getAttributeProperties(C).isFormatting);r.isCollapsed||t.deleteContent(r,{doNotAutoparagraph:!0}),p.push(...r.getAttributes());const w=m.createRangeIn(u.content);for(const C of w.getItems())C.is("$textProxy")&&m.setAttributes(p,C)})})}}function tF(i,e){if(i.childCount>1)return!1;const t=i.getChild(0);return e.isObject(t)?!1:Array.from(t.getAttributeKeys()).length==0}class vk extends j{static get pluginName(){return"Clipboard"}static get requires(){return[Ki,Kj,eF]}}class wx extends ue{constructor(e){super(e),this._stack=[],this._createdBatches=new WeakSet,this.refresh(),this.listenTo(e.data,"set",(t,n)=>{n[1]={...n[1]};const o=n[1];o.batchType||(o.batchType={isUndoable:!1})},{priority:"high"}),this.listenTo(e.data,"set",(t,n)=>{n[1].batchType.isUndoable||this.clearStack()})}refresh(){this.isEnabled=this._stack.length>0}addBatch(e){const t=this.editor.model.document.selection,n={ranges:t.hasOwnRange?Array.from(t.getRanges()):[],isBackward:t.isBackward};this._stack.push({batch:e,selection:n}),this.refresh()}clearStack(){this._stack=[],this.refresh()}_restoreSelection(e,t,n){const o=this.editor.model,r=o.document,l=[],c=e.map(m=>m.getTransformedByOperations(n)),u=c.flat();for(const m of c){const p=m.filter(w=>w.root!=r.graveyard).filter(w=>!iF(w,u));p.length&&(nF(p),l.push(p[0]))}l.length&&o.change(m=>{m.setSelection(l,{backward:t})})}_undo(e,t){const n=this.editor.model,o=n.document;this._createdBatches.add(t);const r=e.operations.slice().filter(l=>l.isDocumentOperation);r.reverse();for(const l of r){const c=l.baseVersion+1,u=Array.from(o.history.getOperations(c)),p=cO([l.getReversed()],u,{useRelations:!0,document:this.editor.model.document,padWithNoOps:!1,forceWeakRemove:!0}).operationsA;for(const w of p)t.addOperation(w),n.applyOperation(w),o.history.setOperationAsUndone(l,w)}}}function nF(i){i.sort((e,t)=>e.start.isBefore(t.start)?-1:1);for(let e=1;e<i.length;e++){const n=i[e-1].getJoined(i[e],!0);n&&(e--,i.splice(e,2,n))}}function iF(i,e){return e.some(t=>t!==i&&t.containsRange(i,!0))}class oF extends wx{execute(e=null){const t=e?this._stack.findIndex(r=>r.batch==e):this._stack.length-1,n=this._stack.splice(t,1)[0],o=this.editor.model.createBatch({isUndo:!0});this.editor.model.enqueueChange(o,()=>{this._undo(n.batch,o);const r=this.editor.model.document.history.getOperations(n.batch.baseVersion);this._restoreSelection(n.selection.ranges,n.selection.isBackward,r),this.fire("revert",n.batch,o)}),this.refresh()}}class rF extends wx{execute(){const e=this._stack.pop(),t=this.editor.model.createBatch({isUndo:!0});this.editor.model.enqueueChange(t,()=>{const o=e.batch.operations[e.batch.operations.length-1].baseVersion+1,r=this.editor.model.document.history.getOperations(o);this._restoreSelection(e.selection.ranges,e.selection.isBackward,r),this._undo(e.batch,t)}),this.refresh()}}class sF extends j{static get pluginName(){return"UndoEditing"}constructor(e){super(e),this._batchRegistry=new WeakSet}init(){const e=this.editor;this._undoCommand=new oF(e),this._redoCommand=new rF(e),e.commands.add("undo",this._undoCommand),e.commands.add("redo",this._redoCommand),this.listenTo(e.model,"applyOperation",(t,n)=>{const o=n[0];if(!o.isDocumentOperation)return;const r=o.batch,l=this._redoCommand._createdBatches.has(r),c=this._undoCommand._createdBatches.has(r);this._batchRegistry.has(r)||(this._batchRegistry.add(r),r.isUndoable&&(l?this._undoCommand.addBatch(r):c||(this._undoCommand.addBatch(r),this._redoCommand.clearStack())))},{priority:"highest"}),this.listenTo(this._undoCommand,"revert",(t,n,o)=>{this._redoCommand.addBatch(o)}),e.keystrokes.set("CTRL+Z","undo"),e.keystrokes.set("CTRL+Y","redo"),e.keystrokes.set("CTRL+SHIFT+Z","redo")}}const vx='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m5.042 9.367 2.189 1.837a.75.75 0 0 1-.965 1.149l-3.788-3.18a.747.747 0 0 1-.21-.284.75.75 0 0 1 .17-.945L6.23 4.762a.75.75 0 1 1 .964 1.15L4.863 7.866h8.917A.75.75 0 0 1 14 7.9a4 4 0 1 1-1.477 7.718l.344-1.489a2.5 2.5 0 1 0 1.094-4.73l.008-.032H5.042z"/></svg>',Ax='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m14.958 9.367-2.189 1.837a.75.75 0 0 0 .965 1.149l3.788-3.18a.747.747 0 0 0 .21-.284.75.75 0 0 0-.17-.945L13.77 4.762a.75.75 0 1 0-.964 1.15l2.331 1.955H6.22A.75.75 0 0 0 6 7.9a4 4 0 1 0 1.477 7.718l-.344-1.489A2.5 2.5 0 1 1 6.039 9.4l-.008-.032h8.927z"/></svg>';class aF extends j{static get pluginName(){return"UndoUI"}init(){const e=this.editor,t=e.locale,n=e.t,o=t.uiLanguageDirection=="ltr"?vx:Ax,r=t.uiLanguageDirection=="ltr"?Ax:vx;this._addButton("undo",n("Undo"),"CTRL+Z",o),this._addButton("redo",n("Redo"),"CTRL+Y",r)}_addButton(e,t,n,o){const r=this.editor;r.ui.componentFactory.add(e,l=>{const c=r.commands.get(e),u=new he(l);return u.set({label:t,icon:o,keystroke:n,tooltip:!0}),u.bind("isEnabled").to(c,"isEnabled"),this.listenTo(u,"execute",()=>{r.execute(e),r.editing.view.focus()}),u})}}class Ak extends j{static get requires(){return[sF,aF]}static get pluginName(){return"Undo"}}function lF(i){return i.createContainerElement("span",{class:"image-inline"},i.createEmptyElement("img"))}function Cx(i){return i.createContainerElement("figure",{class:"image"},[i.createEmptyElement("img"),i.createSlot()])}function _x(i,e){const t=i.plugins.get("ImageUtils"),n=i.plugins.has("ImageInlineEditing")&&i.plugins.has("ImageBlockEditing");return r=>t.isInlineImageView(r)?n&&(r.getStyle("display")=="block"||r.findAncestor(t.isBlockImageView)?"imageBlock":"imageInline")!==e?null:o(r):null;function o(r){const l={name:!0};return r.hasAttribute("src")&&(l.attributes=["src"]),l}}function Ck(i,e){const t=Xe(e.getSelectedBlocks());return!t||i.isObject(t)||t.isEmpty&&t.name!="listItem"?"imageBlock":"imageInline"}class di extends j{static get pluginName(){return"ImageUtils"}isImage(e){return this.isInlineImage(e)||this.isBlockImage(e)}isInlineImageView(e){return!!e&&e.is("element","img")}isBlockImageView(e){return!!e&&e.is("element","figure")&&e.hasClass("image")}insertImage(e={},t=null,n=null){const o=this.editor,r=o.model,l=r.document.selection;n=yx(o,t||l,n),e={...Object.fromEntries(l.getAttributes()),...e};for(const c in e)r.schema.checkAttribute(n,c)||delete e[c];return r.change(c=>{const u=c.createElement(n,e);return r.insertObject(u,t,null,{setSelection:"on",findOptimalPosition:!t&&n!="imageInline"}),u.parent?u:null})}getClosestSelectedImageWidget(e){const t=e.getFirstPosition();if(!t)return null;const n=e.getSelectedElement();if(n&&this.isImageWidget(n))return n;let o=t.parent;for(;o;){if(o.is("element")&&this.isImageWidget(o))return o;o=o.parent}return null}getClosestSelectedImageElement(e){const t=e.getSelectedElement();return this.isImage(t)?t:e.getFirstPosition().findAncestor("imageBlock")}isImageAllowed(){const t=this.editor.model.document.selection;return cF(this.editor,t)&&dF(t)}toImageWidget(e,t,n){return t.setCustomProperty("image",!0,e),Yr(e,t,{label:()=>{const l=this.findViewImgElement(e).getAttribute("alt");return l?`${l} ${n}`:n}})}isImageWidget(e){return!!e.getCustomProperty("image")&&ht(e)}isBlockImage(e){return!!e&&e.is("element","imageBlock")}isInlineImage(e){return!!e&&e.is("element","imageInline")}findViewImgElement(e){if(this.isInlineImageView(e))return e;const t=this.editor.editing.view;for(const{item:n}of t.createRangeIn(e))if(this.isInlineImageView(n))return n}}function cF(i,e){if(yx(i,e)=="imageBlock"){const n=uF(e,i.model);if(i.model.schema.checkChild(n,"imageBlock"))return!0}else if(i.model.schema.checkChild(e.focus,"imageInline"))return!0;return!1}function dF(i){return[...i.focus.getAncestors()].every(e=>!e.is("element","imageBlock"))}function uF(i,e){const n=Kl(i,e).start.parent;return n.isEmpty&&!n.is("element","$root")?n.parent:n}function yx(i,e,t){const n=i.model.schema,o=i.config.get("image.insert.type");return i.plugins.has("ImageBlockEditing")?i.plugins.has("ImageInlineEditing")?t||(o==="inline"?"imageInline":o==="block"?"imageBlock":e.is("selection")?Ck(n,e):n.checkChild(e,"imageInline")?"imageInline":"imageBlock"):"imageBlock":"imageInline"}const hF=new RegExp(String(/^(http(s)?:\/\/)?[\w-]+\.[\w.~:/[\]@!$&'()*+,;=%-]+/.source+/\.(jpg|jpeg|png|gif|ico|webp|JPG|JPEG|PNG|GIF|ICO|WEBP)/.source+/(\?[\w.~:/[\]@!$&'()*+,;=%-]*)?/.source+/(#[\w.~:/[\]@!$&'()*+,;=%-]*)?$/.source));class fF extends j{static get requires(){return[vk,di,Ak,Eo]}static get pluginName(){return"AutoImage"}constructor(e){super(e),this._timeoutId=null,this._positionToInsert=null}init(){const e=this.editor,t=e.model.document;this.listenTo(e.plugins.get("ClipboardPipeline"),"inputTransformation",()=>{const n=t.selection.getFirstRange(),o=zt.fromPosition(n.start);o.stickiness="toPrevious";const r=zt.fromPosition(n.end);r.stickiness="toNext",t.once("change:data",()=>{this._embedImageBetweenPositions(o,r),o.detach(),r.detach()},{priority:"high"})}),e.commands.get("undo").on("execute",()=>{this._timeoutId&&(ye.window.clearTimeout(this._timeoutId),this._positionToInsert.detach(),this._timeoutId=null,this._positionToInsert=null)},{priority:"high"})}_embedImageBetweenPositions(e,t){const n=this.editor,o=new oi(e,t),r=o.getWalker({ignoreElementEnd:!0}),l=Object.fromEntries(n.model.document.selection.getAttributes()),c=this.editor.plugins.get("ImageUtils");let u="";for(const m of r)m.item.is("$textProxy")&&(u+=m.item.data);if(u=u.trim(),!u.match(hF)){o.detach();return}this._positionToInsert=zt.fromPosition(e),this._timeoutId=ye.window.setTimeout(()=>{if(!n.commands.get("insertImage").isEnabled){o.detach();return}n.model.change(p=>{this._timeoutId=null,p.remove(o),o.detach();let w;this._positionToInsert.root.rootName!=="$graveyard"&&(w=this._positionToInsert.toPosition()),c.insertImage({...l,src:u},w),this._positionToInsert.detach(),this._positionToInsert=null}),n.plugins.get("Delete").requestUndoOnBackspace()},100)}}function mF(i,e,t){var n=i.length;return t=t===void 0?n:t,!e&&t>=n?i:GC(i,e,t)}const gF=mF;var pF="\\ud800-\\udfff",kF="\\u0300-\\u036f",bF="\\ufe20-\\ufe2f",wF="\\u20d0-\\u20ff",vF=kF+bF+wF,AF="\\ufe0e\\ufe0f",CF="\\u200d",_F=RegExp("["+CF+pF+vF+AF+"]");function yF(i){return _F.test(i)}const xx=yF;function xF(i){return i.split("")}const EF=xF;var Ex="\\ud800-\\udfff",SF="\\u0300-\\u036f",DF="\\ufe20-\\ufe2f",TF="\\u20d0-\\u20ff",IF=SF+DF+TF,MF="\\ufe0e\\ufe0f",BF="["+Ex+"]",_k="["+IF+"]",yk="\\ud83c[\\udffb-\\udfff]",LF="(?:"+_k+"|"+yk+")",Sx="[^"+Ex+"]",Dx="(?:\\ud83c[\\udde6-\\uddff]){2}",Tx="[\\ud800-\\udbff][\\udc00-\\udfff]",zF="\\u200d",Ix=LF+"?",Mx="["+MF+"]?",NF="(?:"+zF+"(?:"+[Sx,Dx,Tx].join("|")+")"+Mx+Ix+")*",PF=Mx+Ix+NF,RF="(?:"+[Sx+_k+"?",_k,Dx,Tx,BF].join("|")+")",OF=RegExp(yk+"(?="+yk+")|"+RF+PF,"g");function jF(i){return i.match(OF)||[]}const FF=jF;function VF(i){return xx(i)?FF(i):EF(i)}const HF=VF;function UF(i){return function(e){e=Wg(e);var t=xx(e)?HF(e):void 0,n=t?t[0]:e.charAt(0),o=t?gF(t,1).join(""):e.slice(1);return n[i]()+o}}var $F=UF("toUpperCase");const WF=$F,GF=/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g,qF=/^(?:(?:https?|ftps?|mailto):|[^a-z]|[a-z+.-]+(?:[^a-z+.:-]|$))/i,KF=/^[\S]+@((?![-_])(?:[-\w\u00a1-\uffff]{0,63}[^-_]\.))+(?:[a-z\u00a1-\uffff]{2,})$/i,YF=/^((\w+:(\/{2,})?)|(\W))/i,Ku="Ctrl+K";function ZF(i){return i.is("attributeElement")&&!!i.getCustomProperty("link")}function Bx(i,{writer:e}){const t=e.createAttributeElement("a",{href:i},{priority:5});return e.setCustomProperty("link",!0,t),t}function Lx(i){return i=String(i),QF(i)?i:"#"}function QF(i){return i.replace(GF,"").match(qF)}function JF(i,e){const t={"Open in a new tab":i("Open in a new tab"),Downloadable:i("Downloadable")};return e.forEach(n=>(n.label&&t[n.label]&&(n.label=t[n.label]),n)),e}function XF(i){const e=[];if(i)for(const[t,n]of Object.entries(i)){const o=Object.assign({},n,{id:`link${WF(t)}`});e.push(o)}return e}function xk(i,e){return i?e.checkAttribute(i.name,"linkHref"):!1}function eV(i){return KF.test(i)}function Ek(i,e){const t=eV(i)?"mailto:":e,n=!!t&&!zx(i);return i&&n?t+i:i}function zx(i){return YF.test(i)}function Nx(i){window.open(i,"_blank","noopener")}const tV=4,nV=new RegExp("(^|\\s)(((?:(?:(?:https?|ftp):)?\\/\\/)(?:\\S+(?::\\S*)?@)?(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(((?!www\\.)|(www\\.))(?![-_])(?:[-_a-z0-9\\u00a1-\\uffff]{1,63}\\.)+(?:[a-z\\u00a1-\\uffff]{2,63})))(?::\\d{2,5})?(?:[/?#]\\S*)?)|((www.|(\\S+@))((?![-_])(?:[-_a-z0-9\\u00a1-\\uffff]{1,63}\\.))+(?:[a-z\\u00a1-\\uffff]{2,63})))$","i"),iV=2;class Px extends j{static get requires(){return[Eo]}static get pluginName(){return"AutoLink"}init(){const t=this.editor.model.document.selection;t.on("change:range",()=>{this.isEnabled=!t.anchor.parent.is("element","codeBlock")}),this._enableTypingHandling()}afterInit(){this._enableEnterHandling(),this._enableShiftEnterHandling()}_enableTypingHandling(){const e=this.editor,t=new lk(e.model,n=>{if(!oV(n))return;const o=Rx(n.substr(0,n.length-1));if(o)return{url:o}});t.on("matched:data",(n,o)=>{const{batch:r,range:l,url:c}=o;if(!r.isTyping)return;const u=l.end.getShiftedBy(-1),m=u.getShiftedBy(-c.length),p=e.model.createRange(m,u);this._applyAutoLink(c,p)}),t.bind("isEnabled").to(this)}_enableEnterHandling(){const e=this.editor,t=e.model,n=e.commands.get("enter");n&&n.on("execute",()=>{const o=t.document.selection.getFirstPosition();if(!o.parent.previousSibling)return;const r=t.createRangeIn(o.parent.previousSibling);this._checkAndApplyAutoLinkOnRange(r)})}_enableShiftEnterHandling(){const e=this.editor,t=e.model,n=e.commands.get("shiftEnter");n&&n.on("execute",()=>{const o=t.document.selection.getFirstPosition(),r=t.createRange(t.createPositionAt(o.parent,0),o.getShiftedBy(-1));this._checkAndApplyAutoLinkOnRange(r)})}_checkAndApplyAutoLinkOnRange(e){const t=this.editor.model,{text:n,range:o}=Vy(e,t),r=Rx(n);if(r){const l=t.createRange(o.end.getShiftedBy(-r.length),o.end);this._applyAutoLink(r,l)}}_applyAutoLink(e,t){const n=this.editor.model,o=this.editor.config.get("link.defaultProtocol"),r=Ek(e,o);!this.isEnabled||!rV(t,n)||!zx(r)||sV(t)||this._persistAutoLink(r,t)}_persistAutoLink(e,t){const n=this.editor.model,o=this.editor.plugins.get("Delete");n.enqueueChange(r=>{r.setAttribute("linkHref",e,t),n.enqueueChange(()=>{o.requestUndoOnBackspace()})})}}function oV(i){return i.length>tV&&i[i.length-1]===" "&&i[i.length-2]!==" "}function Rx(i){const e=nV.exec(i);return e?e[iV]:null}function rV(i,e){return e.schema.checkAttributeInSelection(e.createSelection(i),"linkHref")}function sV(i){const e=i.start.nodeAfter;return e&&e.hasAttribute("linkHref")}class aV extends ue{refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(e={}){const t=this.editor.model,n=t.schema,o=t.document.selection,r=Array.from(o.getSelectedBlocks()),l=e.forceValue===void 0?!this.value:e.forceValue;t.change(c=>{if(!l)this._removeQuote(c,r.filter(Yu));else{const u=r.filter(m=>Yu(m)||jx(n,m));this._applyQuote(c,u)}})}_getValue(){const e=this.editor.model.document.selection,t=Xe(e.getSelectedBlocks());return!!(t&&Yu(t))}_checkEnabled(){if(this.value)return!0;const e=this.editor.model.document.selection,t=this.editor.model.schema,n=Xe(e.getSelectedBlocks());return n?jx(t,n):!1}_removeQuote(e,t){Ox(e,t).reverse().forEach(n=>{if(n.start.isAtStart&&n.end.isAtEnd){e.unwrap(n.start.parent);return}if(n.start.isAtStart){const r=e.createPositionBefore(n.start.parent);e.move(n,r);return}n.end.isAtEnd||e.split(n.end);const o=e.createPositionAfter(n.end.parent);e.move(n,o)})}_applyQuote(e,t){const n=[];Ox(e,t).reverse().forEach(o=>{let r=Yu(o.start);r||(r=e.createElement("blockQuote"),e.wrap(o,r)),n.push(r)}),n.reverse().reduce((o,r)=>o.nextSibling==r?(e.merge(e.createPositionAfter(o)),o):r)}}function Yu(i){return i.parent.name=="blockQuote"?i.parent:null}function Ox(i,e){let t,n=0;const o=[];for(;n<e.length;){const r=e[n],l=e[n+1];t||(t=i.createPositionBefore(r)),(!l||r.nextSibling!=l)&&(o.push(i.createRange(t,i.createPositionAfter(r))),t=null),n++}return o}function jx(i,e){const t=i.checkChild(e.parent,"blockQuote"),n=i.checkChild(["$root","blockQuote"],e);return t&&n}class lV extends j{static get pluginName(){return"BlockQuoteEditing"}static get requires(){return[Wu,Eo]}init(){const e=this.editor,t=e.model.schema;e.commands.add("blockQuote",new aV(e)),t.register("blockQuote",{inheritAllFrom:"$container"}),e.conversion.elementToElement({model:"blockQuote",view:"blockquote"}),e.model.document.registerPostFixer(l=>{const c=e.model.document.differ.getChanges();for(const u of c)if(u.type=="insert"){const m=u.position.nodeAfter;if(!m)continue;if(m.is("element","blockQuote")&&m.isEmpty)return l.remove(m),!0;if(m.is("element","blockQuote")&&!t.checkChild(u.position,m))return l.unwrap(m),!0;if(m.is("element")){const p=l.createRangeIn(m);for(const w of p.getItems())if(w.is("element","blockQuote")&&!t.checkChild(l.createPositionBefore(w),w))return l.unwrap(w),!0}}else if(u.type=="remove"){const m=u.position.parent;if(m.is("element","blockQuote")&&m.isEmpty)return l.remove(m),!0}return!1});const n=this.editor.editing.view.document,o=e.model.document.selection,r=e.commands.get("blockQuote");this.listenTo(n,"enter",(l,c)=>{if(!o.isCollapsed||!r.value)return;o.getLastPosition().parent.isEmpty&&(e.execute("blockQuote"),e.editing.view.scrollToTheSelection(),c.preventDefault(),l.stop())},{context:"blockquote"}),this.listenTo(n,"delete",(l,c)=>{if(c.direction!="backward"||!o.isCollapsed||!r.value)return;const u=o.getLastPosition().parent;u.isEmpty&&!u.previousSibling&&(e.execute("blockQuote"),e.editing.view.scrollToTheSelection(),c.preventDefault(),l.stop())},{context:"blockquote"})}}var Fx=f(636),Sk={injectType:"singletonStyleTag",attributes:{"data-cke":!0}};Sk.insert="head",Sk.singleton=!0,te()(Fx.Z,Sk),Fx.Z.locals;class cV extends j{static get pluginName(){return"BlockQuoteUI"}init(){const e=this.editor,t=e.t;e.ui.componentFactory.add("blockQuote",n=>{const o=e.commands.get("blockQuote"),r=new he(n);return r.set({label:t("Block quote"),icon:me.quote,tooltip:!0,isToggleable:!0}),r.bind("isOn","isEnabled").to(o,"value","isEnabled"),this.listenTo(r,"execute",()=>{e.execute("blockQuote"),e.editing.view.focus()}),r})}}class dV extends j{static get requires(){return[lV,cV]}static get pluginName(){return"BlockQuote"}}class Qr extends ue{constructor(e,t){super(e),this.attributeKey=t}refresh(){const e=this.editor.model,t=e.document;this.value=this._getValueFromFirstAllowedNode(),this.isEnabled=e.schema.checkAttributeInSelection(t.selection,this.attributeKey)}execute(e={}){const t=this.editor.model,o=t.document.selection,r=e.forceValue===void 0?!this.value:e.forceValue;t.change(l=>{if(o.isCollapsed)r?l.setSelectionAttribute(this.attributeKey,!0):l.removeSelectionAttribute(this.attributeKey);else{const c=t.schema.getValidRanges(o.getRanges(),this.attributeKey);for(const u of c)r?l.setAttribute(this.attributeKey,r,u):l.removeAttribute(this.attributeKey,u)}})}_getValueFromFirstAllowedNode(){const e=this.editor.model,t=e.schema,n=e.document.selection;if(n.isCollapsed)return n.hasAttribute(this.attributeKey);for(const o of n.getRanges())for(const r of o.getItems())if(t.checkAttribute(r,this.attributeKey))return r.hasAttribute(this.attributeKey);return!1}}const ea="bold";class uV extends j{static get pluginName(){return"BoldEditing"}init(){const e=this.editor;e.model.schema.extend("$text",{allowAttributes:ea}),e.model.schema.setAttributeProperties(ea,{isFormatting:!0,copyOnEnter:!0}),e.conversion.attributeToElement({model:ea,view:"strong",upcastAlso:["b",t=>{const n=t.getStyle("font-weight");return n&&(n=="bold"||Number(n)>=600)?{name:!0,styles:["font-weight"]}:null}]}),e.commands.add(ea,new Qr(e,ea)),e.keystrokes.set("CTRL+B",ea)}}const Dk="bold";class hV extends j{static get pluginName(){return"BoldUI"}init(){const e=this.editor,t=e.t;e.ui.componentFactory.add(Dk,n=>{const o=e.commands.get(Dk),r=new he(n);return r.set({label:t("Bold"),icon:me.bold,keystroke:"CTRL+B",tooltip:!0,isToggleable:!0}),r.bind("isOn","isEnabled").to(o,"value","isEnabled"),this.listenTo(r,"execute",()=>{e.execute(Dk),e.editing.view.focus()}),r})}}class fV extends j{static get requires(){return[uV,hV]}static get pluginName(){return"Bold"}}const Tk={autoRefresh:!0},Vx=36e5;class Zu{constructor(e,t=Tk){if(!e)throw new M("token-missing-token-url",this);t.initValue&&this._validateTokenValue(t.initValue),this.set("value",t.initValue),typeof e=="function"?this._refresh=e:this._refresh=()=>mV(e),this._options=Object.assign({},Tk,t)}init(){return new Promise((e,t)=>{if(!this.value){this.refreshToken().then(e).catch(t);return}this._options.autoRefresh&&this._registerRefreshTokenTimeout(),e(this)})}refreshToken(){return this._refresh().then(e=>{this._validateTokenValue(e),this.set("value",e),this._options.autoRefresh&&this._registerRefreshTokenTimeout()}).then(()=>this)}destroy(){clearTimeout(this._tokenRefreshTimeout)}_validateTokenValue(e){const t=typeof e=="string",n=!/^".*"$/.test(e),o=t&&e.split(".").length===3;if(!(n&&o))throw new M("token-not-in-jwt-format",this)}_registerRefreshTokenTimeout(){const e=this._getTokenRefreshTimeoutTime();clearTimeout(this._tokenRefreshTimeout),this._tokenRefreshTimeout=setTimeout(()=>{this.refreshToken()},e)}_getTokenRefreshTimeoutTime(){try{const[,e]=this.value.split("."),{exp:t}=JSON.parse(atob(e));return t?Math.floor((t*1e3-Date.now())/2):Vx}catch{return Vx}}static create(e,t=Tk){return new Zu(e,t).init()}}ee(Zu,De);function mV(i){return new Promise((e,t)=>{const n=new XMLHttpRequest;n.open("GET",i),n.addEventListener("load",()=>{const o=n.status,r=n.response;return o<200||o>299?t(new M("token-cannot-download-new-token",null)):e(r)}),n.addEventListener("error",()=>t(new Error("Network Error"))),n.addEventListener("abort",()=>t(new Error("Abort"))),n.send()})}const gV=Zu,Ik=/^data:(\S*?);base64,/;class Hx{constructor(e,t,n){if(!e)throw new M("fileuploader-missing-file",null);if(!t)throw new M("fileuploader-missing-token",null);if(!n)throw new M("fileuploader-missing-api-address",null);this.file=kV(e)?pV(e):e,this._token=t,this._apiAddress=n}onProgress(e){return this.on("progress",(t,n)=>e(n)),this}onError(e){return this.once("error",(t,n)=>e(n)),this}abort(){this.xhr.abort()}send(){return this._prepareRequest(),this._attachXHRListeners(),this._sendRequest()}_prepareRequest(){const e=new XMLHttpRequest;e.open("POST",this._apiAddress),e.setRequestHeader("Authorization",this._token.value),e.responseType="json",this.xhr=e}_attachXHRListeners(){const e=this,t=this.xhr;t.addEventListener("error",n("Network Error")),t.addEventListener("abort",n("Abort")),t.upload&&t.upload.addEventListener("progress",o=>{o.lengthComputable&&this.fire("progress",{total:o.total,uploaded:o.loaded})}),t.addEventListener("load",()=>{const o=t.status,r=t.response;if(o<200||o>299)return this.fire("error",r.message||r.error)});function n(o){return()=>e.fire("error",o)}}_sendRequest(){const e=new FormData,t=this.xhr;return e.append("file",this.file),new Promise((n,o)=>{t.addEventListener("load",()=>{const r=t.status,l=t.response;return r<200||r>299?l.message?o(new M("fileuploader-uploading-data-failed",this,{message:l.message})):o(l.error):n(l)}),t.addEventListener("error",()=>o(new Error("Network Error"))),t.addEventListener("abort",()=>o(new Error("Abort"))),t.send(e)})}}ee(Hx,Ne);function pV(i,e=512){try{const t=i.match(Ik)[1],n=atob(i.replace(Ik,"")),o=[];for(let r=0;r<n.length;r+=e){const l=n.slice(r,r+e),c=new Array(l.length);for(let u=0;u<l.length;u++)c[u]=l.charCodeAt(u);o.push(new Uint8Array(c))}return new Blob(o,{type:t})}catch{throw new M("fileuploader-decoding-image-data-error",null)}}function kV(i){if(typeof i!="string")return!1;const e=i.match(Ik);return!!(e&&e.length)}class bV{constructor(e,t){if(!e)throw new M("uploadgateway-missing-token",null);if(!t)throw new M("uploadgateway-missing-api-address",null);this._token=e,this._apiAddress=t}upload(e){return new Hx(e,this._token,this._apiAddress)}}class wV extends lu{static get pluginName(){return"CloudServicesCore"}createToken(e,t){return new gV(e,t)}createUploadGateway(e,t){return new bV(e,t)}}class vV extends lu{static get pluginName(){return"CloudServices"}static get requires(){return[wV]}init(){const t=this.context.config.get("cloudServices")||{};for(const n in t)this[n]=t[n];if(this._tokens=new Map,!this.tokenUrl){this.token=null;return}return this.token=this.context.plugins.get("CloudServicesCore").createToken(this.tokenUrl),this._tokens.set(this.tokenUrl,this.token),this.token.init()}registerTokenUrl(e){if(this._tokens.has(e))return Promise.resolve(this.getTokenFor(e));const t=this.context.plugins.get("CloudServicesCore").createToken(e);return this._tokens.set(e,t),t.init()}getTokenFor(e){const t=this._tokens.get(e);if(!t)throw new M("cloudservices-token-not-registered",this);return t}destroy(){super.destroy();for(const e of this._tokens.values())e.destroy()}}const Jr="code",AV="ck-code_selected";class CV extends j{static get pluginName(){return"CodeEditing"}static get requires(){return[Vu]}init(){const e=this.editor;e.model.schema.extend("$text",{allowAttributes:Jr}),e.model.schema.setAttributeProperties(Jr,{isFormatting:!0,copyOnEnter:!1}),e.conversion.attributeToElement({model:Jr,view:"code",upcastAlso:{styles:{"word-wrap":"break-word"}}}),e.commands.add(Jr,new Qr(e,Jr)),e.plugins.get(Vu).registerAttribute(Jr),qy(e,Jr,"code",AV)}}const _V='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m12.5 5.7 5.2 3.9v1.3l-5.6 4c-.1.2-.3.2-.5.2-.3-.1-.6-.7-.6-1l.3-.4 4.7-3.5L11.5 7l-.2-.2c-.1-.3-.1-.6 0-.8.2-.2.5-.4.8-.4a.8.8 0 0 1 .4.1zm-5.2 0L2 9.6v1.3l5.6 4c.1.2.3.2.5.2.3-.1.7-.7.6-1 0-.1 0-.3-.2-.4l-5-3.5L8.2 7l.2-.2c.1-.3.1-.6 0-.8-.2-.2-.5-.4-.8-.4a.8.8 0 0 0-.3.1z"/></svg>';var Ux=f(8180),Mk={injectType:"singletonStyleTag",attributes:{"data-cke":!0}};Mk.insert="head",Mk.singleton=!0,te()(Ux.Z,Mk),Ux.Z.locals;const Bk="code";class yV extends j{static get pluginName(){return"CodeUI"}init(){const e=this.editor,t=e.t;e.ui.componentFactory.add(Bk,n=>{const o=e.commands.get(Bk),r=new he(n);return r.set({label:t("Code"),icon:_V,tooltip:!0,isToggleable:!0}),r.bind("isOn","isEnabled").to(o,"value","isEnabled"),this.listenTo(r,"execute",()=>{e.execute(Bk),e.editing.view.focus()}),r})}}class xV extends j{static get requires(){return[CV,yV]}static get pluginName(){return"Code"}}function Lk(i){const e=i.t,t=i.config.get("codeBlock.languages");for(const n of t)n.label==="Plain text"&&(n.label=e("Plain text")),n.class===void 0&&(n.class=`language-${n.language}`);return t}function zk(i,e,t){const n={};for(const o of i)if(e==="class"){const r=o[e].split(" ").shift();n[r]=o[t]}else n[o[e]]=o[t];return n}function Nk(i){return i.data.match(/^(\s*)/)[0]}function EV(i,e){const t=i.createDocumentFragment(),n=e.split(`
`),o=n.reduce((r,l,c)=>(r.push(l),c<n.length-1&&r.push(i.createElement("br")),r),[]);return i.appendChild(o,t),t}function Pk(i){const e=i.document.selection,t=[];if(e.isCollapsed)return[e.anchor];const n=e.getFirstRange().getWalker({ignoreElementEnd:!0,direction:"backward"});for(const{item:o}of n){if(!o.is("$textProxy"))continue;const{parent:r,startOffset:l}=o.textNode;if(!r.is("element","codeBlock"))continue;const c=Nk(o.textNode),u=i.createPositionAt(r,l+c.length);t.push(u)}return t}function $x(i){const e=Xe(i.getSelectedBlocks());return!!e&&e.is("element","codeBlock")}function Wx(i,e){return e.is("rootElement")||i.isLimit(e)?!1:i.checkChild(e.parent,"codeBlock")}class SV extends ue{constructor(e){super(e),this._lastLanguage=null}refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(e={}){const t=this.editor,n=t.model,o=n.document.selection,l=Lk(t)[0],c=Array.from(o.getSelectedBlocks()),u=e.forceValue==null?!this.value:e.forceValue,m=DV(e,this._lastLanguage,l.language);n.change(p=>{u?this._applyCodeBlock(p,c,m):this._removeCodeBlock(p,c)})}_getValue(){const e=this.editor.model.document.selection,t=Xe(e.getSelectedBlocks());return!!(t&&t.is("element","codeBlock"))?t.getAttribute("language"):!1}_checkEnabled(){if(this.value)return!0;const e=this.editor.model.document.selection,t=this.editor.model.schema,n=Xe(e.getSelectedBlocks());return n?Wx(t,n):!1}_applyCodeBlock(e,t,n){this._lastLanguage=n;const o=this.editor.model.schema,r=t.filter(l=>Wx(o,l));for(const l of r)e.rename(l,"codeBlock"),e.setAttribute("language",n,l),o.removeDisallowedAttributes([l],e),Array.from(l.getChildren()).filter(c=>!o.checkChild(l,c)).forEach(c=>e.remove(c));r.reverse().forEach((l,c)=>{const u=r[c+1];l.previousSibling===u&&(e.appendElement("softBreak",u),e.merge(e.createPositionBefore(l)))})}_removeCodeBlock(e,t){const n=t.filter(o=>o.is("element","codeBlock"));for(const o of n){const r=e.createRangeOn(o);for(const l of Array.from(r.getItems()).reverse())if(l.is("element","softBreak")&&l.parent.is("element","codeBlock")){const{position:c}=e.split(e.createPositionBefore(l)),u=c.nodeAfter;e.rename(u,"paragraph"),e.removeAttribute("language",u),e.remove(l)}e.rename(o,"paragraph"),e.removeAttribute("language",o)}}}function DV(i,e,t){return i.language?i.language:i.usePreviousLanguageChoice&&e?e:t}class TV extends ue{constructor(e){super(e),this._indentSequence=e.config.get("codeBlock.indentSequence")}refresh(){this.isEnabled=this._checkEnabled()}execute(){const t=this.editor.model;t.change(n=>{const o=Pk(t);for(const r of o){const l=n.createText(this._indentSequence);t.insertContent(l,r)}})}_checkEnabled(){return this._indentSequence?$x(this.editor.model.document.selection):!1}}class IV extends ue{constructor(e){super(e),this._indentSequence=e.config.get("codeBlock.indentSequence")}refresh(){this.isEnabled=this._checkEnabled()}execute(){const t=this.editor.model;t.change(()=>{const n=Pk(t);for(const o of n){const r=Gx(t,o,this._indentSequence);r&&t.deleteContent(t.createSelection(r))}})}_checkEnabled(){if(!this._indentSequence)return!1;const e=this.editor.model;return $x(e.document.selection)?Pk(e).some(t=>Gx(e,t,this._indentSequence)):!1}}function Gx(i,e,t){const n=MV(e);if(!n)return null;const o=Nk(n),r=o.lastIndexOf(t);if(r+t.length!==o.length||r===-1)return null;const{parent:l,startOffset:c}=n;return i.createRange(i.createPositionAt(l,c+r),i.createPositionAt(l,c+r+t.length))}function MV(i){let e=i.parent.getChild(i.index);return(!e||e.is("element","softBreak"))&&(e=i.nodeBefore),!e||e.is("element","softBreak")?null:e}function qx(i,e,t=!1){const n=zk(e,"language","class"),o=zk(e,"language","label");return(r,l,c)=>{const{writer:u,mapper:m,consumable:p}=c;if(!p.consume(l.item,"insert"))return;const w=l.item.getAttribute("language"),C=m.toViewPosition(i.createPositionBefore(l.item)),I={};t&&(I["data-language"]=o[w],I.spellcheck="false");const B=n[w]?{class:n[w]}:void 0,P=u.createContainerElement("code",B),V=u.createContainerElement("pre",I,P);u.insert(C,V),m.bindElements(l.item,P)}}function BV(i){return(e,t,n)=>{if(t.item.parent.name!=="codeBlock")return;const{writer:o,mapper:r,consumable:l}=n;if(!l.consume(t.item,"insert"))return;const c=r.toViewPosition(i.createPositionBefore(t.item));o.insert(c,o.createText(`
`))}}function LV(i,e){const t=zk(e,"class","language"),n=e[0].language;return(o,r,l)=>{const c=r.viewItem,u=c.parent;if(!u||!u.is("element","pre")||r.modelCursor.findAncestor("codeBlock"))return;const{consumable:m,writer:p}=l;if(!m.test(c,{name:!0}))return;const w=p.createElement("codeBlock"),C=[...c.getClassNames()];C.length||C.push("");for(const I of C){const B=t[I];if(B){p.setAttribute("language",B,w);break}}w.hasAttribute("language")||p.setAttribute("language",n,w),l.convertChildren(c,w),l.safeInsert(w,r.modelCursor)&&(m.consume(c,{name:!0}),l.updateConversionResult(w,r))}}function zV(){return(i,e,{consumable:t,writer:n})=>{let o=e.modelCursor;if(!t.test(e.viewItem)||!o.findAncestor("codeBlock"))return;t.consume(e.viewItem);const l=e.viewItem.data.split(`
`).map(u=>n.createText(u)),c=l[l.length-1];for(const u of l)if(n.insert(u,o),o=o.getShiftedBy(u.offsetSize),u!==c){const m=n.createElement("softBreak");n.insert(m,o),o=n.createPositionAfter(m)}e.modelRange=n.createRange(e.modelCursor,o),e.modelCursor=o}}function NV(){return(i,e,{consumable:t})=>{const n=e.viewItem;if(n.findAncestor("pre"))return;const o=Array.from(n.getChildren()),r=o.find(l=>l.is("element","code"));if(r)for(const l of o)l===r||!l.is("$text")||t.consume(l,{name:!0})}}const Kx="paragraph";class PV extends j{static get pluginName(){return"CodeBlockEditing"}static get requires(){return[tx]}constructor(e){super(e),e.config.define("codeBlock",{languages:[{language:"plaintext",label:"Plain text"},{language:"c",label:"C"},{language:"cs",label:"C#"},{language:"cpp",label:"C++"},{language:"css",label:"CSS"},{language:"diff",label:"Diff"},{language:"html",label:"HTML"},{language:"java",label:"Java"},{language:"javascript",label:"JavaScript"},{language:"php",label:"PHP"},{language:"python",label:"Python"},{language:"ruby",label:"Ruby"},{language:"typescript",label:"TypeScript"},{language:"xml",label:"XML"}],indentSequence:"	"})}init(){const e=this.editor,t=e.model.schema,n=e.model,o=e.editing.view,r=e.plugins.has("DocumentListEditing"),l=Lk(e);e.commands.add("codeBlock",new SV(e)),e.commands.add("indentCodeBlock",new TV(e)),e.commands.add("outdentCodeBlock",new IV(e)),this.listenTo(o.document,"tab",(c,u)=>{const m=u.shiftKey?"outdentCodeBlock":"indentCodeBlock";e.commands.get(m).isEnabled&&(e.execute(m),u.stopPropagation(),u.preventDefault(),c.stop())},{context:"pre"}),t.register("codeBlock",{allowWhere:"$block",allowChildren:"$text",isBlock:!0,allowAttributes:["language"]}),t.addAttributeCheck((c,u)=>{const m=c.endsWith("codeBlock")&&u.startsWith("list")&&u!=="list";if(r&&m)return!0;if(c.endsWith("codeBlock $text"))return!1}),e.model.schema.addChildCheck((c,u)=>{if(c.endsWith("codeBlock")&&u.isObject)return!1}),e.editing.downcastDispatcher.on("insert:codeBlock",qx(n,l,!0)),e.data.downcastDispatcher.on("insert:codeBlock",qx(n,l)),e.data.downcastDispatcher.on("insert:softBreak",BV(n),{priority:"high"}),e.data.upcastDispatcher.on("element:code",LV(o,l)),e.data.upcastDispatcher.on("text",zV()),e.data.upcastDispatcher.on("element:pre",NV(),{priority:"high"}),this.listenTo(e.editing.view.document,"clipboardInput",(c,u)=>{let m=n.createRange(n.document.selection.anchor);if(u.targetRanges&&(m=e.editing.mapper.toModelRange(u.targetRanges[0])),!m.start.parent.is("element","codeBlock"))return;const p=u.dataTransfer.getData("text/plain"),w=new Xo(e.editing.view.document);u.content=EV(w,p)}),this.listenTo(n,"getSelectedContent",(c,[u])=>{const m=u.anchor;u.isCollapsed||!m.parent.is("element","codeBlock")||!m.hasSameParentAs(u.focus)||n.change(p=>{const w=c.return;if(m.parent.is("element")&&(w.childCount>1||u.containsEntireContent(m.parent))){const I=p.createElement("codeBlock",m.parent.getAttributes());p.append(w,I);const B=p.createDocumentFragment();p.append(I,B),c.return=B;return}const C=w.getChild(0);t.checkAttribute(C,"code")&&p.setAttribute("code",!0,C)})})}afterInit(){const e=this.editor,t=e.commands,n=t.get("indent"),o=t.get("outdent");n&&n.registerChildCommand(t.get("indentCodeBlock"),{priority:"highest"}),o&&o.registerChildCommand(t.get("outdentCodeBlock")),this.listenTo(e.editing.view.document,"enter",(r,l)=>{e.model.document.selection.getLastPosition().parent.is("element","codeBlock")&&(!OV(e,l.isSoft)&&!jV(e,l.isSoft)&&RV(e),l.preventDefault(),r.stop())},{context:"pre"})}}function RV(i){const t=i.model.document,n=t.selection.getLastPosition(),o=n.nodeBefore||n.textNode;let r;o&&o.is("$text")&&(r=Nk(o)),i.model.change(l=>{i.execute("shiftEnter"),r&&l.insertText(r,t.selection.anchor)})}function OV(i,e){const n=i.model.document,o=i.editing.view,r=n.selection.getLastPosition(),l=r.nodeAfter;return e||!n.selection.isCollapsed||!r.isAtStart||!Xr(l)?!1:(i.model.change(c=>{i.execute("enter");const u=n.selection.anchor.parent.previousSibling;c.rename(u,Kx),c.setSelection(u,"in"),i.model.schema.removeDisallowedAttributes([u],c),c.remove(l)}),o.scrollToTheSelection(),!0)}function jV(i,e){const t=i.model,n=t.document,o=i.editing.view,r=n.selection.getLastPosition(),l=r.nodeBefore;let c;if(e||!n.selection.isCollapsed||!r.isAtEnd||!l||!l.previousSibling)return!1;if(Xr(l)&&Xr(l.previousSibling))c=t.createRange(t.createPositionBefore(l.previousSibling),t.createPositionAfter(l));else if(Rk(l)&&Xr(l.previousSibling)&&Xr(l.previousSibling.previousSibling))c=t.createRange(t.createPositionBefore(l.previousSibling.previousSibling),t.createPositionAfter(l));else if(Rk(l)&&Xr(l.previousSibling)&&Rk(l.previousSibling.previousSibling)&&l.previousSibling.previousSibling&&Xr(l.previousSibling.previousSibling.previousSibling))c=t.createRange(t.createPositionBefore(l.previousSibling.previousSibling.previousSibling),t.createPositionAfter(l));else return!1;return i.model.change(u=>{u.remove(c),i.execute("enter");const m=n.selection.anchor.parent;u.rename(m,Kx),i.model.schema.removeDisallowedAttributes([m],u)}),o.scrollToTheSelection(),!0}function Rk(i){return i&&i.is("$text")&&!i.data.match(/\S/)}function Xr(i){return i&&i.is("element","softBreak")}const FV='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.87 12.61a.75.75 0 0 1-.089.976l-.085.07-3.154 2.254 3.412 2.414a.75.75 0 0 1 .237.95l-.057.095a.75.75 0 0 1-.95.237l-.096-.058-4.272-3.022-.003-1.223 4.01-2.867a.75.75 0 0 1 1.047.174zm2.795-.231.095.057 4.011 2.867-.003 1.223-4.272 3.022-.095.058a.75.75 0 0 1-.88-.151l-.07-.086-.058-.095a.75.75 0 0 1 .15-.88l.087-.07 3.412-2.414-3.154-2.253-.085-.071a.75.75 0 0 1 .862-1.207zM16 0a2 2 0 0 1 2 2v9.354l-.663-.492-.837-.001V2a.5.5 0 0 0-.5-.5H2a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5h3.118L7.156 19H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h14zM5.009 15l.003 1H3v-1h2.009zm2.188-2-1.471 1H5v-1h2.197zM10 11v.095L8.668 12H7v-1h3zm4-2v1H7V9h7zm0-2v1H7V7h7zm-4-2v1H5V5h5zM6 3v1H3V3h3z"/></svg>';var Yx=f(9085),Ok={injectType:"singletonStyleTag",attributes:{"data-cke":!0}};Ok.insert="head",Ok.singleton=!0,te()(Yx.Z,Ok),Yx.Z.locals;class VV extends j{static get pluginName(){return"CodeBlockUI"}init(){const e=this.editor,t=e.t,n=e.ui.componentFactory,o=Lk(e);n.add("codeBlock",r=>{const l=e.commands.get("codeBlock"),c=at(r,Kr),u=c.buttonView;return u.set({label:t("Insert code block"),tooltip:!0,icon:FV,isToggleable:!0}),u.bind("isOn").to(l,"value",m=>!!m),u.on("execute",()=>{e.execute("codeBlock",{usePreviousLanguageChoice:!0}),e.editing.view.focus()}),c.on("execute",m=>{e.execute("codeBlock",{language:m.source._codeBlockLanguage,forceValue:!0}),e.editing.view.focus()}),c.class="ck-code-block-dropdown",c.bind("isEnabled").to(l),xi(c,()=>this._getLanguageListItemDefinitions(o)),c})}_getLanguageListItemDefinitions(e){const n=this.editor.commands.get("codeBlock"),o=new rt;for(const r of e){const l={type:"button",model:new ci({_codeBlockLanguage:r.language,label:r.label,withText:!0})};l.model.bind("isOn").to(n,"value",c=>c===l.model._codeBlockLanguage),o.add(l)}return o}}class HV extends j{static get requires(){return[PV,VV]}static get pluginName(){return"CodeBlock"}}class UV extends ue{constructor(e){super(e),this.affectsData=!1}execute(){const e=this.editor.model,t=e.document.selection;let n=e.schema.getLimitElement(t);if(t.containsEntireContent(n)||!Zx(e.schema,n))do if(n=n.parent,!n)return;while(!Zx(e.schema,n));e.change(o=>{o.setSelection(n,"in")})}}function Zx(i,e){return i.isLimit(e)&&(i.checkChild(e,"$text")||i.checkChild(e,"paragraph"))}const $V=su("Ctrl+A");class WV extends j{static get pluginName(){return"SelectAllEditing"}init(){const e=this.editor,n=e.editing.view.document;e.commands.add("selectAll",new UV(e)),this.listenTo(n,"keydown",(o,r)=>{Pr(r)===$V&&(e.execute("selectAll"),r.preventDefault())})}}const GV='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M.75 15.5a.75.75 0 0 1 .75.75V18l.008.09A.5.5 0 0 0 2 18.5h1.75a.75.75 0 1 1 0 1.5H1.5l-.144-.007a1.5 1.5 0 0 1-1.35-1.349L0 18.5v-2.25a.75.75 0 0 1 .75-.75zm18.5 0a.75.75 0 0 1 .75.75v2.25l-.007.144a1.5 1.5 0 0 1-1.349 1.35L18.5 20h-2.25a.75.75 0 1 1 0-1.5H18a.5.5 0 0 0 .492-.41L18.5 18v-1.75a.75.75 0 0 1 .75-.75zm-10.45 3c.11 0 .2.09.2.2v1.1a.2.2 0 0 1-.2.2H7.2a.2.2 0 0 1-.2-.2v-1.1c0-.11.09-.2.2-.2h1.6zm4 0c.11 0 .2.09.2.2v1.1a.2.2 0 0 1-.2.2h-1.6a.2.2 0 0 1-.2-.2v-1.1c0-.11.09-.2.2-.2h1.6zm.45-5.5a.75.75 0 1 1 0 1.5h-8.5a.75.75 0 1 1 0-1.5h8.5zM1.3 11c.11 0 .2.09.2.2v1.6a.2.2 0 0 1-.2.2H.2a.2.2 0 0 1-.2-.2v-1.6c0-.11.09-.2.2-.2h1.1zm18.5 0c.11 0 .2.09.2.2v1.6a.2.2 0 0 1-.2.2h-1.1a.2.2 0 0 1-.2-.2v-1.6c0-.11.09-.2.2-.2h1.1zm-4.55-2a.75.75 0 1 1 0 1.5H4.75a.75.75 0 1 1 0-1.5h10.5zM1.3 7c.11 0 .2.09.2.2v1.6a.2.2 0 0 1-.2.2H.2a.2.2 0 0 1-.2-.2V7.2c0-.11.09-.2.2-.2h1.1zm18.5 0c.11 0 .2.09.2.2v1.6a.2.2 0 0 1-.2.2h-1.1a.2.2 0 0 1-.2-.2V7.2c0-.11.09-.2.2-.2h1.1zm-4.55-2a.75.75 0 1 1 0 1.5h-2.5a.75.75 0 1 1 0-1.5h2.5zm-5 0a.75.75 0 1 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5h5.5zm-6.5-5a.75.75 0 0 1 0 1.5H2a.5.5 0 0 0-.492.41L1.5 2v1.75a.75.75 0 0 1-1.5 0V1.5l.007-.144A1.5 1.5 0 0 1 1.356.006L1.5 0h2.25zM18.5 0l.144.007a1.5 1.5 0 0 1 1.35 1.349L20 1.5v2.25a.75.75 0 1 1-1.5 0V2l-.008-.09A.5.5 0 0 0 18 1.5h-1.75a.75.75 0 1 1 0-1.5h2.25zM8.8 0c.11 0 .2.09.2.2v1.1a.2.2 0 0 1-.2.2H7.2a.2.2 0 0 1-.2-.2V.2c0-.11.09-.2.2-.2h1.6zm4 0c.11 0 .2.09.2.2v1.1a.2.2 0 0 1-.2.2h-1.6a.2.2 0 0 1-.2-.2V.2c0-.11.09-.2.2-.2h1.6z"/></svg>';class qV extends j{static get pluginName(){return"SelectAllUI"}init(){const e=this.editor;e.ui.componentFactory.add("selectAll",t=>{const n=e.commands.get("selectAll"),o=new he(t),r=t.t;return o.set({label:r("Select all"),icon:GV,keystroke:"Ctrl+A",tooltip:!0}),o.bind("isEnabled").to(n,"isEnabled"),this.listenTo(o,"execute",()=>{e.execute("selectAll"),e.editing.view.focus()}),o})}}class KV extends j{static get requires(){return[WV,qV]}static get pluginName(){return"SelectAll"}}class YV extends j{static get requires(){return[vk,Wu,KV,tx,Fy,Ak]}static get pluginName(){return"Essentials"}}var Qx=f(1590),jk={injectType:"singletonStyleTag",attributes:{"data-cke":!0}};jk.insert="head",jk.singleton=!0,te()(Qx.Z,jk),Qx.Z.locals;var Jx=f(9289),Fk={injectType:"singletonStyleTag",attributes:{"data-cke":!0}};Fk.insert="head",Fk.singleton=!0,te()(Jx.Z,Fk),Jx.Z.locals;class ZV extends ae{constructor(e){super(e);const t=e.t;this.set("matchCount",0),this.set("highlightOffset",0),this.set("isDirty",!1),this.set("_areCommandsEnabled",{}),this.set("_resultsCounterText",""),this.set("_matchCase",!1),this.set("_wholeWordsOnly",!1),this.bind("_searchResultsFound").to(this,"matchCount",this,"isDirty",(n,o)=>n>0&&!o),this._findInputView=this._createInputField(t("Find in text…")),this._replaceInputView=this._createInputField(t("Replace with…")),this._findButtonView=this._createButton({label:t("Find"),class:"ck-button-find ck-button-action",withText:!0}),this._findPrevButtonView=this._createButton({label:t("Previous result"),class:"ck-button-prev",icon:tk,keystroke:"Shift+F3",tooltip:!0}),this._findNextButtonView=this._createButton({label:t("Next result"),class:"ck-button-next",icon:tk,keystroke:"F3",tooltip:!0}),this._optionsDropdown=this._createOptionsDropdown(),this._replaceButtonView=this._createButton({label:t("Replace"),class:"ck-button-replace",withText:!0}),this._replaceAllButtonView=this._createButton({label:t("Replace all"),class:"ck-button-replaceall",withText:!0}),this._findFieldsetView=this._createFindFieldset(),this._replaceFieldsetView=this._createReplaceFieldset(),this._focusTracker=new st,this._keystrokes=new bt,this._focusables=new ln,this._focusCycler=new pn({focusables:this._focusables,focusTracker:this._focusTracker,keystrokeHandler:this._keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.setTemplate({tag:"form",attributes:{class:["ck","ck-find-and-replace-form"],tabindex:"-1"},children:[new Ru(e,{label:t("Find and replace")}),this._findFieldsetView,this._replaceFieldsetView]}),Lu(this)}render(){super.render(),Gr({view:this}),this._initFocusCycling(),this._initKeystrokeHandling()}destroy(){super.destroy(),this._focusTracker.destroy(),this._keystrokes.destroy()}focus(){this._focusCycler.focusFirst()}reset(){this._findInputView.errorText=null,this.isDirty=!0}get _textToFind(){return this._findInputView.fieldView.element.value}get _textToReplace(){return this._replaceInputView.fieldView.element.value}_createFindFieldset(){const e=this.locale,t=new ae(e);return this._findInputView.fieldView.on("input",()=>{this.isDirty=!0}),this._findButtonView.on("execute",this._onFindButtonExecute.bind(this)),this._findPrevButtonView.delegate("execute").to(this,"findPrevious"),this._findNextButtonView.delegate("execute").to(this,"findNext"),this._findPrevButtonView.bind("isEnabled").to(this,"_areCommandsEnabled",({findPrevious:n})=>n),this._findNextButtonView.bind("isEnabled").to(this,"_areCommandsEnabled",({findNext:n})=>n),this._injectFindResultsCounter(),t.setTemplate({tag:"fieldset",attributes:{class:["ck","ck-find-and-replace-form__find"]},children:[this._findInputView,this._findButtonView,this._findPrevButtonView,this._findNextButtonView]}),t}_onFindButtonExecute(){if(!this._textToFind){const e=this.t;this._findInputView.errorText=e("Text to find must not be empty.");return}this.isDirty=!1,this.fire("findNext",{searchText:this._textToFind,matchCase:this._matchCase,wholeWords:this._wholeWordsOnly})}_injectFindResultsCounter(){const e=this.locale,t=e.t,n=this.bindTemplate,o=new ae(e);this.bind("_resultsCounterText").to(this,"highlightOffset",this,"matchCount",(l,c)=>t("%0 of %1",[l,c])),o.setTemplate({tag:"span",attributes:{class:["ck","ck-results-counter",n.if("isDirty","ck-hidden")]},children:[{text:n.to("_resultsCounterText")}]});const r=()=>{const l=this._findInputView.fieldView.element;if(!l||!Yo(l))return;const c=new Be(o.element).width,u=e.uiLanguageDirection==="ltr"?"paddingRight":"paddingLeft";c?l.style[u]=`calc( 2 * var(--ck-spacing-standard) + ${c}px )`:l.style[u]=null};this.on("change:_resultsCounterText",r,{priority:"low"}),this.on("change:isDirty",r,{priority:"low"}),this._findInputView.template.children[0].children.push(o)}_createReplaceFieldset(){const e=this.locale,t=e.t,n=new ae(e);return this._replaceButtonView.bind("isEnabled").to(this,"_areCommandsEnabled",this,"_searchResultsFound",({replace:o},r)=>o&&r),this._replaceAllButtonView.bind("isEnabled").to(this,"_areCommandsEnabled",this,"_searchResultsFound",({replaceAll:o},r)=>o&&r),this._replaceInputView.bind("isEnabled").to(this,"_areCommandsEnabled",this,"_searchResultsFound",({replace:o},r)=>o&&r),this._replaceInputView.bind("infoText").to(this._replaceInputView,"isEnabled",this._replaceInputView,"isFocused",(o,r)=>o||!r?"":t("Tip: Find some text first in order to replace it.")),this._replaceButtonView.on("execute",()=>{this.fire("replace",{searchText:this._textToFind,replaceText:this._textToReplace})}),this._replaceAllButtonView.on("execute",()=>{this.fire("replaceAll",{searchText:this._textToFind,replaceText:this._textToReplace}),this.focus()}),n.setTemplate({tag:"fieldset",attributes:{class:["ck","ck-find-and-replace-form__replace"]},children:[this._replaceInputView,this._optionsDropdown,this._replaceButtonView,this._replaceAllButtonView]}),n}_createOptionsDropdown(){const e=this.locale,t=e.t,n=at(e);n.class="ck-options-dropdown",n.buttonView.set({withText:!1,label:t("Show options"),icon:me.cog,tooltip:!0});const o=new ci({withText:!0,label:t("Match case"),_isMatchCaseSwitch:!0}),r=new ci({withText:!0,label:t("Whole words only")});return o.bind("isOn").to(this,"_matchCase"),r.bind("isOn").to(this,"_wholeWordsOnly"),n.on("execute",l=>{l.source._isMatchCaseSwitch?this._matchCase=!this._matchCase:this._wholeWordsOnly=!this._wholeWordsOnly,this.isDirty=!0}),xi(n,new rt([{type:"switchbutton",model:o},{type:"switchbutton",model:r}])),n}_initFocusCycling(){[this._findInputView,this._findButtonView,this._findPrevButtonView,this._findNextButtonView,this._replaceInputView,this._optionsDropdown,this._replaceButtonView,this._replaceAllButtonView].forEach(t=>{this._focusables.add(t),this._focusTracker.add(t.element)})}_initKeystrokeHandling(){const e=n=>n.stopPropagation(),t=n=>{n.stopPropagation(),n.preventDefault()};this._keystrokes.listenTo(this.element),this._keystrokes.set("f3",n=>{t(n),this._findNextButtonView.fire("execute")}),this._keystrokes.set("shift+f3",n=>{t(n),this._findPrevButtonView.fire("execute")}),this._keystrokes.set("enter",n=>{const o=n.target;o===this._findInputView.fieldView.element?(this._areCommandsEnabled.findNext?this._findNextButtonView.fire("execute"):this._findButtonView.fire("execute"),t(n)):o===this._replaceInputView.fieldView.element&&!this.isDirty&&(this._replaceButtonView.fire("execute"),t(n))}),this._keystrokes.set("shift+enter",n=>{n.target===this._findInputView.fieldView.element&&(this._areCommandsEnabled.findPrevious?this._findPrevButtonView.fire("execute"):this._findButtonView.fire("execute"),t(n))}),this._keystrokes.set("arrowright",e),this._keystrokes.set("arrowleft",e),this._keystrokes.set("arrowup",e),this._keystrokes.set("arrowdown",e),this.listenTo(this._findInputView.element,"selectstart",(n,o)=>{o.stopPropagation()},{priority:"high"}),this.listenTo(this._replaceInputView.element,"selectstart",(n,o)=>{o.stopPropagation()},{priority:"high"})}_createButton(e){const t=new he(this.locale);return t.set(e),t}_createInputField(e){const t=new Ot(this.locale,li);return t.label=e,t}}const QV='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m12.87 13.786 1.532-1.286 3.857 4.596a1 1 0 1 1-1.532 1.286l-3.857-4.596z"/><path d="M16.004 8.5a6.5 6.5 0 0 1-9.216 5.905c-1.154-.53-.863-1.415-.663-1.615.194-.194.564-.592 1.635-.141a4.5 4.5 0 0 0 5.89-5.904l-.104-.227 1.332-1.331c.045-.046.196-.041.224.007a6.47 6.47 0 0 1 .902 3.306zm-3.4-5.715c.562.305.742 1.106.354 1.494-.388.388-.995.414-1.476.178a4.5 4.5 0 0 0-6.086 5.882l.114.236-1.348 1.349c-.038.037-.17.022-.198-.023a6.5 6.5 0 0 1 5.54-9.9 6.469 6.469 0 0 1 3.1.784z"/><path d="M4.001 11.93.948 8.877a.2.2 0 0 1 .141-.341h6.106a.2.2 0 0 1 .141.341L4.283 11.93a.2.2 0 0 1-.282 0zm11.083-6.789 3.053 3.053a.2.2 0 0 1-.14.342H11.89a.2.2 0 0 1-.14-.342l3.052-3.053a.2.2 0 0 1 .282 0z"/></svg>';class JV extends j{static get pluginName(){return"FindAndReplaceUI"}constructor(e){super(e),this.formView=null}init(){const e=this.editor;e.ui.componentFactory.add("findAndReplace",t=>{const n=at(t);return n.bind("isEnabled").to(e.commands.get("find")),n.once("change:isOpen",()=>{this.formView=new ZV(e.locale),n.panelView.children.add(this.formView),this._setupFormView(this.formView)}),n.on("change:isOpen",(o,r,l)=>{l?(this.formView.disableCssTransitions(),this.formView.reset(),this.formView._findInputView.fieldView.select(),this.formView.enableCssTransitions()):this.fire("searchReseted")},{priority:"low"}),this._setupDropdownButton(n),n})}_setupDropdownButton(e){const t=this.editor,n=t.locale.t;e.buttonView.set({icon:QV,label:n("Find and replace"),keystroke:"CTRL+F",tooltip:!0}),t.keystrokes.set("Ctrl+F",(o,r)=>{e.isEnabled&&(e.isOpen=!0,r())})}_setupFormView(e){const n=this.editor.commands,r=this.editor.plugins.get("FindAndReplaceEditing").state,l={before:-1,same:0,after:1};e.bind("highlightOffset").to(r,"highlightedResult",c=>c?Array.from(r.results).sort((u,m)=>l[u.marker.getStart().compareWith(m.marker.getStart())]).indexOf(c)+1:0),e.listenTo(r.results,"change",()=>{e.matchCount=r.results.length}),e.bind("_areCommandsEnabled").to(n.get("findNext"),"isEnabled",n.get("findPrevious"),"isEnabled",n.get("replace"),"isEnabled",n.get("replaceAll"),"isEnabled",(c,u,m,p)=>({findNext:c,findPrevious:u,replace:m,replaceAll:p})),e.delegate("findNext","findPrevious","replace","replaceAll").to(this),e.on("change:isDirty",(c,u,m)=>{m&&this.fire("searchReseted")})}}class XV extends ue{constructor(e,t){super(e),this.isEnabled=!0,this.affectsData=!1,this._state=t}execute(e,{matchCase:t,wholeWords:n}={}){const{editor:o}=this,{model:r}=o,l=o.plugins.get("FindAndReplaceUtils");let c;typeof e=="string"?(c=l.findByTextCallback(e,{matchCase:t,wholeWords:n}),this._state.searchText=e):c=e;const u=r.document.getRootNames().reduce((m,p)=>l.updateFindResultFromRange(r.createRangeIn(r.document.getRoot(p)),r,c,m),null);return this._state.clear(r),this._state.results.addMany(Array.from(u)),this._state.highlightedResult=u.get(0),typeof e=="string"&&(this._state.searchText=e),this._state.matchCase=!!t,this._state.matchWholeWords=!!n,{results:u,findCallback:c}}}class Xx extends ue{constructor(e,t){super(e),this.isEnabled=!0,this._state=t}execute(e,t){const{model:n}=this.editor;n.change(o=>{const r=t.marker.getRange();if(r.root.rootName==="$graveyard"){this._state.results.remove(t);return}let l={};for(const c of r.getItems())if(c.is("$text")||c.is("$textProxy")){l=c.getAttributes();break}n.insertContent(o.createText(e,l),r),this._state.results.has(t)&&this._state.results.remove(t)})}}class e9 extends Xx{execute(e,t){const{editor:n}=this,{model:o}=n,r=n.plugins.get("FindAndReplaceUtils"),l=t instanceof rt?t:o.document.getRootNames().reduce((c,u)=>r.updateFindResultFromRange(o.createRangeIn(o.document.getRoot(u)),o,r.findByTextCallback(t,this._state),c),null);l.length&&o.change(()=>{[...l].forEach(c=>{super.execute(e,c)})})}}class e2 extends ue{constructor(e,t){super(e),this.affectsData=!1,this._state=t,this.isEnabled=!1,this.listenTo(this._state.results,"change",()=>{this.isEnabled=this._state.results.length>1})}refresh(){this.isEnabled=this._state.results.length>1}execute(){const e=this._state.results,t=e.getIndex(this._state.highlightedResult),n=t+1>=e.length?0:t+1;this._state.highlightedResult=this._state.results.get(n)}}class t9 extends e2{execute(){const t=this._state.results.getIndex(this._state.highlightedResult),n=t-1<0?this._state.results.length-1:t-1;this._state.highlightedResult=this._state.results.get(n)}}class t2{constructor(e){this.set("results",new rt),this.set("highlightedResult",null),this.set("searchText",""),this.set("replaceText",""),this.set("matchCase",!1),this.set("matchWholeWords",!1),this.results.on("change",(t,{removed:n,index:o})=>{if(n=Array.from(n),n.length){let r=!1;if(e.change(l=>{for(const c of n)this.highlightedResult===c&&(r=!0),e.markers.has(c.marker.name)&&l.removeMarker(c.marker)}),r){const l=o>=this.results.length?0:o;this.highlightedResult=this.results.get(l)}}})}clear(e){this.searchText="",e.change(t=>{if(this.highlightedResult){const n=this.highlightedResult.marker.name.split(":")[1],o=e.markers.get(`findResultHighlighted:${n}`);o&&t.removeMarker(o)}[...this.results].forEach(({marker:n})=>{t.removeMarker(n)})}),this.results.clear()}}ee(t2,De);class n9 extends j{static get pluginName(){return"FindAndReplaceUtils"}updateFindResultFromRange(e,t,n,o){const r=o||new rt;return t.change(l=>{[...e].forEach(({type:c,item:u})=>{if(c==="elementStart"&&t.schema.checkChild(u,"$text")){const m=n({item:u,text:this.rangeToText(t.createRangeIn(u))});if(!m)return;m.forEach(p=>{const w=`findResult:${we()}`,C=l.addMarker(w,{usingOperation:!1,affectsData:!1,range:l.createRange(l.createPositionAt(u,p.start),l.createPositionAt(u,p.end))}),I=i9(r,C);r.add({id:w,label:p.label,marker:C},I)})}})}),r}rangeToText(e){return Array.from(e.getItems()).reduce((t,n)=>n.is("text")||n.is("textProxy")?t+n.data:`${t}
$&
`).split(`
`);let o=0;return n.filter(r=>r.length).map(r=>zq(r,e)?Ub(r,o++):Nq(r,e)?Ub(r,--o):Ub(r,o)).join(`
`),t+=r,n=o}return t}class dQ extends j{constructor(e){super(e),this.set("characters",0),this.set("words",0),Object.defineProperties(this,{characters:{get(){return this.characters=this._getCharacters()}},words:{get(){return this.words=this._getWords()}}}),this.set("_wordsLabel",void 0),this.set("_charactersLabel",void 0),this._config=e.config.get("wordCount")||{},this._outputView=void 0,this._wordsMatchRegExp=A.features.isRegExpUnicodePropertySupported?new RegExp("([\\p{L}\\p{N}]+\\S?)+","gu"):/([a-zA-Z0-9À-ž]+\S?)+/gu}static get pluginName(){return"WordCount"}init(){this.editor.model.document.on("change:data",qu(this._refreshStats.bind(this),250)),typeof this._config.onUpdate=="function"&&this.on("update",(t,n)=>{this._config.onUpdate(n)}),Ns(this._config.container)&&this._config.container.appendChild(this.wordCountContainer)}destroy(){this._outputView&&(this._outputView.element.remove(),this._outputView.destroy()),super.destroy()}get wordCountContainer(){const e=this.editor,t=e.t,n=e.config.get("wordCount.displayWords"),o=e.config.get("wordCount.displayCharacters"),r=jn.bind(this,this),l=[];return this._outputView||(this._outputView=new ae,(n||n===void 0)&&(this.bind("_wordsLabel").to(this,"words",c=>t("Words: %0",c)),l.push({tag:"div",children:[{text:[r.to("_wordsLabel")]}],attributes:{class:"ck-word-count__words"}})),(o||o===void 0)&&(this.bind("_charactersLabel").to(this,"characters",c=>t("Characters: %0",c)),l.push({tag:"div",children:[{text:[r.to("_charactersLabel")]}],attributes:{class:"ck-word-count__characters"}})),this._outputView.setTemplate({tag:"div",attributes:{class:["ck","ck-word-count"]},children:l}),this._outputView.render()),this._outputView.element}_getCharacters(){return Rw(this.editor.model.document.getRoot()).replace(/\n/g,"").length}_getWords(){return(Rw(this.editor.model.document.getRoot()).match(this._wordsMatchRegExp)||[]).length}_refreshStats(){const e=this.words=this._getWords(),t=this.characters=this._getCharacters();this.fire("update",{words:e,characters:t})}}class Ow extends x8{}Ow.builtinPlugins=[P8,ej,fF,Px,dV,fV,vV,xV,HV,YV,l9,p9,A9,I9,V9,FH,KH,nU,dU,uU,bU,IU,zU,l$,m$,E$,S$,Q2,M$,z$,O$,Y$,nW,CW,QW,fG,mG,PG,$G,Ql,Sq,Bq,OU,Rq,Gq,v5,A5,qq,_5,C5,y5,Jq,nK,uK,gK,wK,DY,PY,oZ,AZ,FZ,VZ,GZ,q8,rQ,cQ,dQ],Ow.defaultConfig={toolbar:{items:["heading","|","bold","italic","underline","horizontalLine","strikethrough","link","bulletedList","numberedList","|","fontColor","highlight","fontFamily","fontSize","fontBackgroundColor","|","code","codeBlock","htmlEmbed","todoList","alignment","outdent","indent","restrictedEditingException","|","imageUpload","imageInsert","blockQuote","insertTable","mediaEmbed","|","sourceEditing","specialCharacters","pageBreak","removeFormat","findAndReplace","|","undo","redo","superscript","subscript","|","style","textPartLanguage"]},language:"en",image:{toolbar:["imageTextAlternative","toggleImageCaption","imageStyle:inline","imageStyle:block","imageStyle:side","linkImage"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableCellProperties","tableProperties"]}};const uQ=Ow})(),k=k.default,k})())})(goe,If);const dre=kA(If),ure={definitions:[{name:"Code(light)",element:"pre",classes:["light-code"]},{name:"Code(dark)",element:"pre",classes:["dark-code"]}]};export{w0 as $,pne as A,f3 as B,CT as C,ud as D,ao as E,Tie as F,ire as G,Sf as H,Ja as I,OQ as J,I0 as K,g3 as L,lre as M,$a as N,nie as O,ro as P,Uie as Q,KS as R,are as S,Xte as T,eie as U,nee as V,HI as W,cre as X,XX as Y,tre as Z,pe as _,UX as a,Qee as a0,sre as a1,Tf as a2,Df as a3,rre as a4,Ho as a5,lm as a6,pA as a7,ure as a8,dre as a9,nne as aa,Xie as ab,ooe as ac,c3 as ad,ore as ae,dd as af,uoe as ag,foe as ah,YS as ai,nre as b,pa as c,En as d,on as e,Ph as f,Ya as g,Za as h,Je as i,Bf as j,ad as k,GX as l,Xh as m,y0 as n,ga as o,ene as p,ote as q,oe as r,$X as s,x0 as t,nT as u,one as v,mne as w,s3 as x,E0 as y,rn as z};