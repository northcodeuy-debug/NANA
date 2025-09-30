(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var bf={exports:{}},po={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zg;function Tx(){if(zg)return po;zg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:u}}return po.Fragment=e,po.jsx=i,po.jsxs=i,po}var Ig;function Ax(){return Ig||(Ig=1,bf.exports=Tx()),bf.exports}var ve=Ax(),Rf={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fg;function bx(){if(Fg)return oe;Fg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(D){return D===null||typeof D!="object"?null:(D=v&&D[v]||D["@@iterator"],typeof D=="function"?D:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,R={};function M(D,J,vt){this.props=D,this.context=J,this.refs=R,this.updater=vt||y}M.prototype.isReactComponent={},M.prototype.setState=function(D,J){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,J,"setState")},M.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function _(){}_.prototype=M.prototype;function I(D,J,vt){this.props=D,this.context=J,this.refs=R,this.updater=vt||y}var P=I.prototype=new _;P.constructor=I,b(P,M.prototype),P.isPureReactComponent=!0;var U=Array.isArray,z={H:null,A:null,T:null,S:null,V:null},G=Object.prototype.hasOwnProperty;function F(D,J,vt,St,Dt,Ft){return vt=Ft.ref,{$$typeof:o,type:D,key:J,ref:vt!==void 0?vt:null,props:Ft}}function j(D,J){return F(D.type,J,void 0,void 0,void 0,D.props)}function w(D){return typeof D=="object"&&D!==null&&D.$$typeof===o}function C(D){var J={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(vt){return J[vt]})}var V=/\/+/g;function nt(D,J){return typeof D=="object"&&D!==null&&D.key!=null?C(""+D.key):J.toString(36)}function ct(){}function _t(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(ct,ct):(D.status="pending",D.then(function(J){D.status==="pending"&&(D.status="fulfilled",D.value=J)},function(J){D.status==="pending"&&(D.status="rejected",D.reason=J)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function lt(D,J,vt,St,Dt){var Ft=typeof D;(Ft==="undefined"||Ft==="boolean")&&(D=null);var tt=!1;if(D===null)tt=!0;else switch(Ft){case"bigint":case"string":case"number":tt=!0;break;case"object":switch(D.$$typeof){case o:case e:tt=!0;break;case g:return tt=D._init,lt(tt(D._payload),J,vt,St,Dt)}}if(tt)return Dt=Dt(D),tt=St===""?"."+nt(D,0):St,U(Dt)?(vt="",tt!=null&&(vt=tt.replace(V,"$&/")+"/"),lt(Dt,J,vt,"",function(jt){return jt})):Dt!=null&&(w(Dt)&&(Dt=j(Dt,vt+(Dt.key==null||D&&D.key===Dt.key?"":(""+Dt.key).replace(V,"$&/")+"/")+tt)),J.push(Dt)),1;tt=0;var mt=St===""?".":St+":";if(U(D))for(var At=0;At<D.length;At++)St=D[At],Ft=mt+nt(St,At),tt+=lt(St,J,vt,Ft,Dt);else if(At=x(D),typeof At=="function")for(D=At.call(D),At=0;!(St=D.next()).done;)St=St.value,Ft=mt+nt(St,At++),tt+=lt(St,J,vt,Ft,Dt);else if(Ft==="object"){if(typeof D.then=="function")return lt(_t(D),J,vt,St,Dt);throw J=String(D),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return tt}function O(D,J,vt){if(D==null)return D;var St=[],Dt=0;return lt(D,St,"","",function(Ft){return J.call(vt,Ft,Dt++)}),St}function Z(D){if(D._status===-1){var J=D._result;J=J(),J.then(function(vt){(D._status===0||D._status===-1)&&(D._status=1,D._result=vt)},function(vt){(D._status===0||D._status===-1)&&(D._status=2,D._result=vt)}),D._status===-1&&(D._status=0,D._result=J)}if(D._status===1)return D._result.default;throw D._result}var q=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function xt(){}return oe.Children={map:O,forEach:function(D,J,vt){O(D,function(){J.apply(this,arguments)},vt)},count:function(D){var J=0;return O(D,function(){J++}),J},toArray:function(D){return O(D,function(J){return J})||[]},only:function(D){if(!w(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},oe.Component=M,oe.Fragment=i,oe.Profiler=l,oe.PureComponent=I,oe.StrictMode=r,oe.Suspense=m,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,oe.__COMPILER_RUNTIME={__proto__:null,c:function(D){return z.H.useMemoCache(D)}},oe.cache=function(D){return function(){return D.apply(null,arguments)}},oe.cloneElement=function(D,J,vt){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var St=b({},D.props),Dt=D.key,Ft=void 0;if(J!=null)for(tt in J.ref!==void 0&&(Ft=void 0),J.key!==void 0&&(Dt=""+J.key),J)!G.call(J,tt)||tt==="key"||tt==="__self"||tt==="__source"||tt==="ref"&&J.ref===void 0||(St[tt]=J[tt]);var tt=arguments.length-2;if(tt===1)St.children=vt;else if(1<tt){for(var mt=Array(tt),At=0;At<tt;At++)mt[At]=arguments[At+2];St.children=mt}return F(D.type,Dt,void 0,void 0,Ft,St)},oe.createContext=function(D){return D={$$typeof:h,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:u,_context:D},D},oe.createElement=function(D,J,vt){var St,Dt={},Ft=null;if(J!=null)for(St in J.key!==void 0&&(Ft=""+J.key),J)G.call(J,St)&&St!=="key"&&St!=="__self"&&St!=="__source"&&(Dt[St]=J[St]);var tt=arguments.length-2;if(tt===1)Dt.children=vt;else if(1<tt){for(var mt=Array(tt),At=0;At<tt;At++)mt[At]=arguments[At+2];Dt.children=mt}if(D&&D.defaultProps)for(St in tt=D.defaultProps,tt)Dt[St]===void 0&&(Dt[St]=tt[St]);return F(D,Ft,void 0,void 0,null,Dt)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(D){return{$$typeof:d,render:D}},oe.isValidElement=w,oe.lazy=function(D){return{$$typeof:g,_payload:{_status:-1,_result:D},_init:Z}},oe.memo=function(D,J){return{$$typeof:p,type:D,compare:J===void 0?null:J}},oe.startTransition=function(D){var J=z.T,vt={};z.T=vt;try{var St=D(),Dt=z.S;Dt!==null&&Dt(vt,St),typeof St=="object"&&St!==null&&typeof St.then=="function"&&St.then(xt,q)}catch(Ft){q(Ft)}finally{z.T=J}},oe.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},oe.use=function(D){return z.H.use(D)},oe.useActionState=function(D,J,vt){return z.H.useActionState(D,J,vt)},oe.useCallback=function(D,J){return z.H.useCallback(D,J)},oe.useContext=function(D){return z.H.useContext(D)},oe.useDebugValue=function(){},oe.useDeferredValue=function(D,J){return z.H.useDeferredValue(D,J)},oe.useEffect=function(D,J,vt){var St=z.H;if(typeof vt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return St.useEffect(D,J)},oe.useId=function(){return z.H.useId()},oe.useImperativeHandle=function(D,J,vt){return z.H.useImperativeHandle(D,J,vt)},oe.useInsertionEffect=function(D,J){return z.H.useInsertionEffect(D,J)},oe.useLayoutEffect=function(D,J){return z.H.useLayoutEffect(D,J)},oe.useMemo=function(D,J){return z.H.useMemo(D,J)},oe.useOptimistic=function(D,J){return z.H.useOptimistic(D,J)},oe.useReducer=function(D,J,vt){return z.H.useReducer(D,J,vt)},oe.useRef=function(D){return z.H.useRef(D)},oe.useState=function(D){return z.H.useState(D)},oe.useSyncExternalStore=function(D,J,vt){return z.H.useSyncExternalStore(D,J,vt)},oe.useTransition=function(){return z.H.useTransition()},oe.version="19.1.1",oe}var Hg;function ed(){return Hg||(Hg=1,Rf.exports=bx()),Rf.exports}var ch=ed(),Cf={exports:{}},mo={},wf={exports:{}},Df={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gg;function Rx(){return Gg||(Gg=1,(function(o){function e(O,Z){var q=O.length;O.push(Z);t:for(;0<q;){var xt=q-1>>>1,D=O[xt];if(0<l(D,Z))O[xt]=Z,O[q]=D,q=xt;else break t}}function i(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var Z=O[0],q=O.pop();if(q!==Z){O[0]=q;t:for(var xt=0,D=O.length,J=D>>>1;xt<J;){var vt=2*(xt+1)-1,St=O[vt],Dt=vt+1,Ft=O[Dt];if(0>l(St,q))Dt<D&&0>l(Ft,St)?(O[xt]=Ft,O[Dt]=q,xt=Dt):(O[xt]=St,O[vt]=q,xt=vt);else if(Dt<D&&0>l(Ft,q))O[xt]=Ft,O[Dt]=q,xt=Dt;else break t}}return Z}function l(O,Z){var q=O.sortIndex-Z.sortIndex;return q!==0?q:O.id-Z.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,v=null,x=3,y=!1,b=!1,R=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function U(O){for(var Z=i(p);Z!==null;){if(Z.callback===null)r(p);else if(Z.startTime<=O)r(p),Z.sortIndex=Z.expirationTime,e(m,Z);else break;Z=i(p)}}function z(O){if(R=!1,U(O),!b)if(i(m)!==null)b=!0,G||(G=!0,nt());else{var Z=i(p);Z!==null&&lt(z,Z.startTime-O)}}var G=!1,F=-1,j=5,w=-1;function C(){return M?!0:!(o.unstable_now()-w<j)}function V(){if(M=!1,G){var O=o.unstable_now();w=O;var Z=!0;try{t:{b=!1,R&&(R=!1,I(F),F=-1),y=!0;var q=x;try{e:{for(U(O),v=i(m);v!==null&&!(v.expirationTime>O&&C());){var xt=v.callback;if(typeof xt=="function"){v.callback=null,x=v.priorityLevel;var D=xt(v.expirationTime<=O);if(O=o.unstable_now(),typeof D=="function"){v.callback=D,U(O),Z=!0;break e}v===i(m)&&r(m),U(O)}else r(m);v=i(m)}if(v!==null)Z=!0;else{var J=i(p);J!==null&&lt(z,J.startTime-O),Z=!1}}break t}finally{v=null,x=q,y=!1}Z=void 0}}finally{Z?nt():G=!1}}}var nt;if(typeof P=="function")nt=function(){P(V)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,_t=ct.port2;ct.port1.onmessage=V,nt=function(){_t.postMessage(null)}}else nt=function(){_(V,0)};function lt(O,Z){F=_(function(){O(o.unstable_now())},Z)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(O){switch(x){case 1:case 2:case 3:var Z=3;break;default:Z=x}var q=x;x=Z;try{return O()}finally{x=q}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(O,Z){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var q=x;x=O;try{return Z()}finally{x=q}},o.unstable_scheduleCallback=function(O,Z,q){var xt=o.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?xt+q:xt):q=xt,O){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=q+D,O={id:g++,callback:Z,priorityLevel:O,startTime:q,expirationTime:D,sortIndex:-1},q>xt?(O.sortIndex=q,e(p,O),i(m)===null&&O===i(p)&&(R?(I(F),F=-1):R=!0,lt(z,q-xt))):(O.sortIndex=D,e(m,O),b||y||(b=!0,G||(G=!0,nt()))),O},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(O){var Z=x;return function(){var q=x;x=Z;try{return O.apply(this,arguments)}finally{x=q}}}})(Df)),Df}var Vg;function Cx(){return Vg||(Vg=1,wf.exports=Rx()),wf.exports}var Uf={exports:{}},An={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kg;function wx(){if(kg)return An;kg=1;var o=ed();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,An.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,g)},An.flushSync=function(m){var p=h.T,g=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=g,r.d.f()}},An.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},An.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},An.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:y}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},An.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},An.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},An.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},An.requestFormReset=function(m){r.d.r(m)},An.unstable_batchedUpdates=function(m,p){return m(p)},An.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},An.useFormStatus=function(){return h.H.useHostTransitionStatus()},An.version="19.1.1",An}var Xg;function Dx(){if(Xg)return Uf.exports;Xg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Uf.exports=wx(),Uf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wg;function Ux(){if(Wg)return mo;Wg=1;var o=Cx(),e=ed(),i=Dx();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(u(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return d(c),t;if(f===s)return d(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var S=!1,T=c.child;T;){if(T===a){S=!0,a=c,s=f;break}if(T===s){S=!0,s=c,a=f;break}T=T.sibling}if(!S){for(T=f.child;T;){if(T===a){S=!0,a=f,s=c;break}if(T===s){S=!0,s=f,a=c;break}T=T.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function p(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=p(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),I=Symbol.for("react.consumer"),P=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function nt(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var ct=Symbol.for("react.client.reference");function _t(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ct?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case b:return"Fragment";case M:return"Profiler";case R:return"StrictMode";case z:return"Suspense";case G:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case y:return"Portal";case P:return(t.displayName||"Context")+".Provider";case I:return(t._context.displayName||"Context")+".Consumer";case U:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return n=t.displayName||null,n!==null?n:_t(t.type)||"Memo";case j:n=t._payload,t=t._init;try{return _t(t(n))}catch{}}return null}var lt=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},xt=[],D=-1;function J(t){return{current:t}}function vt(t){0>D||(t.current=xt[D],xt[D]=null,D--)}function St(t,n){D++,xt[D]=t.current,t.current=n}var Dt=J(null),Ft=J(null),tt=J(null),mt=J(null);function At(t,n){switch(St(tt,n),St(Ft,t),St(Dt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?fg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=fg(n),t=hg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}vt(Dt),St(Dt,t)}function jt(){vt(Dt),vt(Ft),vt(tt)}function Wt(t){t.memoizedState!==null&&St(mt,t);var n=Dt.current,a=hg(n,t.type);n!==a&&(St(Ft,t),St(Dt,a))}function he(t){Ft.current===t&&(vt(Dt),vt(Ft)),mt.current===t&&(vt(mt),lo._currentValue=q)}var tn=Object.prototype.hasOwnProperty,B=o.unstable_scheduleCallback,De=o.unstable_cancelCallback,ae=o.unstable_shouldYield,ee=o.unstable_requestPaint,Ot=o.unstable_now,Fe=o.unstable_getCurrentPriorityLevel,Gt=o.unstable_ImmediatePriority,re=o.unstable_UserBlockingPriority,Xe=o.unstable_NormalPriority,We=o.unstable_LowPriority,L=o.unstable_IdlePriority,E=o.log,$=o.unstable_setDisableYieldValue,ut=null,dt=null;function ot(t){if(typeof E=="function"&&$(t),dt&&typeof dt.setStrictMode=="function")try{dt.setStrictMode(ut,t)}catch{}}var Pt=Math.clz32?Math.clz32:qt,bt=Math.log,kt=Math.LN2;function qt(t){return t>>>=0,t===0?32:31-(bt(t)/kt|0)|0}var Mt=256,Ut=4194304;function Zt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Vt(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?c=Zt(s):(S&=T,S!==0?c=Zt(S):a||(a=T&~t,a!==0&&(c=Zt(a))))):(T=s&~f,T!==0?c=Zt(T):S!==0?c=Zt(S):a||(a=s&~t,a!==0&&(c=Zt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Ct(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function se(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k(){var t=Mt;return Mt<<=1,(Mt&4194048)===0&&(Mt=256),t}function Tt(){var t=Ut;return Ut<<=1,(Ut&62914560)===0&&(Ut=4194304),t}function Rt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Bt(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function yt(t,n,a,s,c,f){var S=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,N=t.expirationTimes,Q=t.hiddenUpdates;for(a=S&~a;0<a;){var ft=31-Pt(a),pt=1<<ft;T[ft]=0,N[ft]=-1;var et=Q[ft];if(et!==null)for(Q[ft]=null,ft=0;ft<et.length;ft++){var it=et[ft];it!==null&&(it.lane&=-536870913)}a&=~pt}s!==0&&gt(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(S&~n))}function gt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Pt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&4194090}function Ht(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Pt(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function ie(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function be(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Me(){var t=Z.p;return t!==0?t:(t=window.event,t===void 0?32:Ug(t.type))}function oi(t,n){var a=Z.p;try{return Z.p=t,n()}finally{Z.p=a}}var on=Math.random().toString(36).slice(2),ln="__reactFiber$"+on,Ye="__reactProps$"+on,vi="__reactContainer$"+on,mr="__reactEvents$"+on,No="__reactListeners$"+on,gr="__reactHandles$"+on,Ss="__reactResources$"+on,xi="__reactMarker$"+on;function _r(t){delete t[ln],delete t[Ye],delete t[mr],delete t[No],delete t[gr]}function Ci(t){var n=t[ln];if(n)return n;for(var a=t.parentNode;a;){if(n=a[vi]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=gg(t);t!==null;){if(a=t[ln])return a;t=gg(t)}return n}t=a,a=t.parentNode}return null}function na(t){if(t=t[ln]||t[vi]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function za(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function ia(t){var n=t[Ss];return n||(n=t[Ss]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function en(t){t[xi]=!0}var Oo=new Set,Po={};function A(t,n){X(t,n),X(t+"Capture",n)}function X(t,n){for(Po[t]=n,t=0;t<n.length;t++)Oo.add(n[t])}var at=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rt={},Y={};function Et(t){return tn.call(Y,t)?!0:tn.call(rt,t)?!1:at.test(t)?Y[t]=!0:(rt[t]=!0,!1)}function wt(t,n,a){if(Et(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function zt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Lt(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}var Qt,$t;function Xt(t){if(Qt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Qt=n&&n[1]||"",$t=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qt+t+$t}var ce=!1;function ye(t,n){if(!t||ce)return"";ce=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var pt=function(){throw Error()};if(Object.defineProperty(pt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(pt,[])}catch(it){var et=it}Reflect.construct(t,[],pt)}else{try{pt.call()}catch(it){et=it}t.call(pt.prototype)}}else{try{throw Error()}catch(it){et=it}(pt=t())&&typeof pt.catch=="function"&&pt.catch(function(){})}}catch(it){if(it&&et&&typeof it.stack=="string")return[it.stack,et.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),S=f[0],T=f[1];if(S&&T){var N=S.split(`
`),Q=T.split(`
`);for(c=s=0;s<N.length&&!N[s].includes("DetermineComponentFrameRoot");)s++;for(;c<Q.length&&!Q[c].includes("DetermineComponentFrameRoot");)c++;if(s===N.length||c===Q.length)for(s=N.length-1,c=Q.length-1;1<=s&&0<=c&&N[s]!==Q[c];)c--;for(;1<=s&&0<=c;s--,c--)if(N[s]!==Q[c]){if(s!==1||c!==1)do if(s--,c--,0>c||N[s]!==Q[c]){var ft=`
`+N[s].replace(" at new "," at ");return t.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",t.displayName)),ft}while(1<=s&&0<=c);break}}}finally{ce=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Xt(a):""}function Ve(t){switch(t.tag){case 26:case 27:case 5:return Xt(t.type);case 16:return Xt("Lazy");case 13:return Xt("Suspense");case 19:return Xt("SuspenseList");case 0:case 15:return ye(t.type,!1);case 11:return ye(t.type.render,!1);case 1:return ye(t.type,!0);case 31:return Xt("Activity");default:return""}}function Ue(t){try{var n="";do n+=Ve(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ue(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Kt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ge(t){var n=Kt(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),s=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){s=""+S,f.call(this,S)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function me(t){t._valueTracker||(t._valueTracker=Ge(t))}function yn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Kt(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function li(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Cn=/[\n"\\]/g;function dn(t){return t.replace(Cn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ze(t,n,a,s,c,f,S,T){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ue(n)):t.value!==""+ue(n)&&(t.value=""+ue(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?En(t,S,ue(n)):a!=null?En(t,S,ue(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+ue(T):t.removeAttribute("name")}function wn(t,n,a,s,c,f,S,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+ue(a):"",n=n!=null?""+ue(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=T?t.checked:!!s,t.defaultChecked=!!s,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S)}function En(t,n,a){n==="number"&&li(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Ze(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+ue(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function vn(t,n,a){if(n!=null&&(n=""+ue(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ue(a):""}function vr(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(lt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ue(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s)}function Ln(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Mv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function fd(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||Mv.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function hd(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&fd(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&fd(t,f,n[f])}function Tc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ev=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Bo(t){return Ev.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Ac=null;function bc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xr=null,Sr=null;function dd(t){var n=na(t);if(n&&(t=n.stateNode)){var a=t[Ye]||null;t:switch(t=n.stateNode,n.type){case"input":if(ze(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+dn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[Ye]||null;if(!c)throw Error(r(90));ze(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&yn(s)}break t;case"textarea":vn(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Ze(t,!!a.multiple,n,!1)}}}var Rc=!1;function pd(t,n,a){if(Rc)return t(n,a);Rc=!0;try{var s=t(n);return s}finally{if(Rc=!1,(xr!==null||Sr!==null)&&(Ml(),xr&&(n=xr,t=Sr,Sr=xr=null,dd(n),t)))for(n=0;n<t.length;n++)dd(t[n])}}function Ms(t,n){var a=t.stateNode;if(a===null)return null;var s=a[Ye]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cc=!1;if(wi)try{var ys={};Object.defineProperty(ys,"passive",{get:function(){Cc=!0}}),window.addEventListener("test",ys,ys),window.removeEventListener("test",ys,ys)}catch{Cc=!1}var aa=null,wc=null,zo=null;function md(){if(zo)return zo;var t,n=wc,a=n.length,s,c="value"in aa?aa.value:aa.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var S=a-t;for(s=1;s<=S&&n[a-s]===c[f-s];s++);return zo=c.slice(t,1<s?1-s:void 0)}function Io(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Fo(){return!0}function gd(){return!1}function Nn(t){function n(a,s,c,f,S){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Fo:gd,this.isPropagationStopped=gd,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Fo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Fo)},persist:function(){},isPersistent:Fo}),n}var Ia={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ho=Nn(Ia),Es=g({},Ia,{view:0,detail:0}),Tv=Nn(Es),Dc,Uc,Ts,Go=g({},Es,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ts&&(Ts&&t.type==="mousemove"?(Dc=t.screenX-Ts.screenX,Uc=t.screenY-Ts.screenY):Uc=Dc=0,Ts=t),Dc)},movementY:function(t){return"movementY"in t?t.movementY:Uc}}),_d=Nn(Go),Av=g({},Go,{dataTransfer:0}),bv=Nn(Av),Rv=g({},Es,{relatedTarget:0}),Lc=Nn(Rv),Cv=g({},Ia,{animationName:0,elapsedTime:0,pseudoElement:0}),wv=Nn(Cv),Dv=g({},Ia,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Uv=Nn(Dv),Lv=g({},Ia,{data:0}),vd=Nn(Lv),Nv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ov={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Pv[t])?!!n[t]:!1}function Nc(){return Bv}var zv=g({},Es,{key:function(t){if(t.key){var n=Nv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Io(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ov[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nc,charCode:function(t){return t.type==="keypress"?Io(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Io(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Iv=Nn(zv),Fv=g({},Go,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xd=Nn(Fv),Hv=g({},Es,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nc}),Gv=Nn(Hv),Vv=g({},Ia,{propertyName:0,elapsedTime:0,pseudoElement:0}),kv=Nn(Vv),Xv=g({},Go,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Wv=Nn(Xv),qv=g({},Ia,{newState:0,oldState:0}),Yv=Nn(qv),Zv=[9,13,27,32],Oc=wi&&"CompositionEvent"in window,As=null;wi&&"documentMode"in document&&(As=document.documentMode);var jv=wi&&"TextEvent"in window&&!As,Sd=wi&&(!Oc||As&&8<As&&11>=As),Md=" ",yd=!1;function Ed(t,n){switch(t){case"keyup":return Zv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Td(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Mr=!1;function Kv(t,n){switch(t){case"compositionend":return Td(n);case"keypress":return n.which!==32?null:(yd=!0,Md);case"textInput":return t=n.data,t===Md&&yd?null:t;default:return null}}function Qv(t,n){if(Mr)return t==="compositionend"||!Oc&&Ed(t,n)?(t=md(),zo=wc=aa=null,Mr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Sd&&n.locale!=="ko"?null:n.data;default:return null}}var Jv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ad(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Jv[t.type]:n==="textarea"}function bd(t,n,a,s){xr?Sr?Sr.push(s):Sr=[s]:xr=s,n=Rl(n,"onChange"),0<n.length&&(a=new Ho("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var bs=null,Rs=null;function $v(t){sg(t,0)}function Vo(t){var n=za(t);if(yn(n))return t}function Rd(t,n){if(t==="change")return n}var Cd=!1;if(wi){var Pc;if(wi){var Bc="oninput"in document;if(!Bc){var wd=document.createElement("div");wd.setAttribute("oninput","return;"),Bc=typeof wd.oninput=="function"}Pc=Bc}else Pc=!1;Cd=Pc&&(!document.documentMode||9<document.documentMode)}function Dd(){bs&&(bs.detachEvent("onpropertychange",Ud),Rs=bs=null)}function Ud(t){if(t.propertyName==="value"&&Vo(Rs)){var n=[];bd(n,Rs,t,bc(t)),pd($v,n)}}function t0(t,n,a){t==="focusin"?(Dd(),bs=n,Rs=a,bs.attachEvent("onpropertychange",Ud)):t==="focusout"&&Dd()}function e0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Vo(Rs)}function n0(t,n){if(t==="click")return Vo(n)}function i0(t,n){if(t==="input"||t==="change")return Vo(n)}function a0(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Gn=typeof Object.is=="function"?Object.is:a0;function Cs(t,n){if(Gn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!tn.call(n,c)||!Gn(t[c],n[c]))return!1}return!0}function Ld(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Nd(t,n){var a=Ld(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Ld(a)}}function Od(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Od(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Pd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=li(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=li(t.document)}return n}function zc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var r0=wi&&"documentMode"in document&&11>=document.documentMode,yr=null,Ic=null,ws=null,Fc=!1;function Bd(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Fc||yr==null||yr!==li(s)||(s=yr,"selectionStart"in s&&zc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),ws&&Cs(ws,s)||(ws=s,s=Rl(Ic,"onSelect"),0<s.length&&(n=new Ho("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=yr)))}function Fa(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Er={animationend:Fa("Animation","AnimationEnd"),animationiteration:Fa("Animation","AnimationIteration"),animationstart:Fa("Animation","AnimationStart"),transitionrun:Fa("Transition","TransitionRun"),transitionstart:Fa("Transition","TransitionStart"),transitioncancel:Fa("Transition","TransitionCancel"),transitionend:Fa("Transition","TransitionEnd")},Hc={},zd={};wi&&(zd=document.createElement("div").style,"AnimationEvent"in window||(delete Er.animationend.animation,delete Er.animationiteration.animation,delete Er.animationstart.animation),"TransitionEvent"in window||delete Er.transitionend.transition);function Ha(t){if(Hc[t])return Hc[t];if(!Er[t])return t;var n=Er[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in zd)return Hc[t]=n[a];return t}var Id=Ha("animationend"),Fd=Ha("animationiteration"),Hd=Ha("animationstart"),s0=Ha("transitionrun"),o0=Ha("transitionstart"),l0=Ha("transitioncancel"),Gd=Ha("transitionend"),Vd=new Map,Gc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gc.push("scrollEnd");function ci(t,n){Vd.set(t,n),A(n,[t])}var kd=new WeakMap;function Kn(t,n){if(typeof t=="object"&&t!==null){var a=kd.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Ue(n)},kd.set(t,n),n)}return{value:t,source:n,stack:Ue(n)}}var Qn=[],Tr=0,Vc=0;function ko(){for(var t=Tr,n=Vc=Tr=0;n<t;){var a=Qn[n];Qn[n++]=null;var s=Qn[n];Qn[n++]=null;var c=Qn[n];Qn[n++]=null;var f=Qn[n];if(Qn[n++]=null,s!==null&&c!==null){var S=s.pending;S===null?c.next=c:(c.next=S.next,S.next=c),s.pending=c}f!==0&&Xd(a,c,f)}}function Xo(t,n,a,s){Qn[Tr++]=t,Qn[Tr++]=n,Qn[Tr++]=a,Qn[Tr++]=s,Vc|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function kc(t,n,a,s){return Xo(t,n,a,s),Wo(t)}function Ar(t,n){return Xo(t,null,null,n),Wo(t)}function Xd(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Pt(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function Wo(t){if(50<to)throw to=0,ju=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var br={};function c0(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vn(t,n,a,s){return new c0(t,n,a,s)}function Xc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Di(t,n){var a=t.alternate;return a===null?(a=Vn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Wd(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function qo(t,n,a,s,c,f){var S=0;if(s=t,typeof t=="function")Xc(t)&&(S=1);else if(typeof t=="string")S=fx(t,a,Dt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case w:return t=Vn(31,a,n,c),t.elementType=w,t.lanes=f,t;case b:return Ga(a.children,c,f,n);case R:S=8,c|=24;break;case M:return t=Vn(12,a,n,c|2),t.elementType=M,t.lanes=f,t;case z:return t=Vn(13,a,n,c),t.elementType=z,t.lanes=f,t;case G:return t=Vn(19,a,n,c),t.elementType=G,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _:case P:S=10;break t;case I:S=9;break t;case U:S=11;break t;case F:S=14;break t;case j:S=16,s=null;break t}S=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Vn(S,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function Ga(t,n,a,s){return t=Vn(7,t,s,n),t.lanes=a,t}function Wc(t,n,a){return t=Vn(6,t,null,n),t.lanes=a,t}function qc(t,n,a){return n=Vn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Rr=[],Cr=0,Yo=null,Zo=0,Jn=[],$n=0,Va=null,Ui=1,Li="";function ka(t,n){Rr[Cr++]=Zo,Rr[Cr++]=Yo,Yo=t,Zo=n}function qd(t,n,a){Jn[$n++]=Ui,Jn[$n++]=Li,Jn[$n++]=Va,Va=t;var s=Ui;t=Li;var c=32-Pt(s)-1;s&=~(1<<c),a+=1;var f=32-Pt(n)+c;if(30<f){var S=c-c%5;f=(s&(1<<S)-1).toString(32),s>>=S,c-=S,Ui=1<<32-Pt(n)+c|a<<c|s,Li=f+t}else Ui=1<<f|a<<c|s,Li=t}function Yc(t){t.return!==null&&(ka(t,1),qd(t,1,0))}function Zc(t){for(;t===Yo;)Yo=Rr[--Cr],Rr[Cr]=null,Zo=Rr[--Cr],Rr[Cr]=null;for(;t===Va;)Va=Jn[--$n],Jn[$n]=null,Li=Jn[--$n],Jn[$n]=null,Ui=Jn[--$n],Jn[$n]=null}var Dn=null,je=null,Ae=!1,Xa=null,Si=!1,jc=Error(r(519));function Wa(t){var n=Error(r(418,""));throw Ls(Kn(n,t)),jc}function Yd(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[ln]=t,n[Ye]=s,a){case"dialog":_e("cancel",n),_e("close",n);break;case"iframe":case"object":case"embed":_e("load",n);break;case"video":case"audio":for(a=0;a<no.length;a++)_e(no[a],n);break;case"source":_e("error",n);break;case"img":case"image":case"link":_e("error",n),_e("load",n);break;case"details":_e("toggle",n);break;case"input":_e("invalid",n),wn(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),me(n);break;case"select":_e("invalid",n);break;case"textarea":_e("invalid",n),vr(n,s.value,s.defaultValue,s.children),me(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||ug(n.textContent,a)?(s.popover!=null&&(_e("beforetoggle",n),_e("toggle",n)),s.onScroll!=null&&_e("scroll",n),s.onScrollEnd!=null&&_e("scrollend",n),s.onClick!=null&&(n.onclick=Cl),n=!0):n=!1,n||Wa(t)}function Zd(t){for(Dn=t.return;Dn;)switch(Dn.tag){case 5:case 13:Si=!1;return;case 27:case 3:Si=!0;return;default:Dn=Dn.return}}function Ds(t){if(t!==Dn)return!1;if(!Ae)return Zd(t),Ae=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||hf(t.type,t.memoizedProps)),a=!a),a&&je&&Wa(t),Zd(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){je=fi(t.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}je=null}}else n===27?(n=je,Sa(t.type)?(t=gf,gf=null,je=t):je=n):je=Dn?fi(t.stateNode.nextSibling):null;return!0}function Us(){je=Dn=null,Ae=!1}function jd(){var t=Xa;return t!==null&&(Bn===null?Bn=t:Bn.push.apply(Bn,t),Xa=null),t}function Ls(t){Xa===null?Xa=[t]:Xa.push(t)}var Kc=J(null),qa=null,Ni=null;function ra(t,n,a){St(Kc,n._currentValue),n._currentValue=a}function Oi(t){t._currentValue=Kc.current,vt(Kc)}function Qc(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Jc(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var S=c.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=c;for(var N=0;N<n.length;N++)if(T.context===n[N]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Qc(f.return,a,t),s||(S=null);break t}f=T.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),Qc(S,a,t),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===t){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function Ns(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var T=c.type;Gn(c.pendingProps.value,S.value)||(t!==null?t.push(T):t=[T])}}else if(c===mt.current){if(S=c.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(lo):t=[lo])}c=c.return}t!==null&&Jc(n,t,a,s),n.flags|=262144}function jo(t){for(t=t.firstContext;t!==null;){if(!Gn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ya(t){qa=t,Ni=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Tn(t){return Kd(qa,t)}function Ko(t,n){return qa===null&&Ya(t),Kd(t,n)}function Kd(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ni===null){if(t===null)throw Error(r(308));Ni=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ni=Ni.next=n;return a}var u0=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},f0=o.unstable_scheduleCallback,h0=o.unstable_NormalPriority,cn={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function $c(){return{controller:new u0,data:new Map,refCount:0}}function Os(t){t.refCount--,t.refCount===0&&f0(h0,function(){t.controller.abort()})}var Ps=null,tu=0,wr=0,Dr=null;function d0(t,n){if(Ps===null){var a=Ps=[];tu=0,wr=nf(),Dr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return tu++,n.then(Qd,Qd),n}function Qd(){if(--tu===0&&Ps!==null){Dr!==null&&(Dr.status="fulfilled");var t=Ps;Ps=null,wr=0,Dr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function p0(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var Jd=O.S;O.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&d0(t,n),Jd!==null&&Jd(t,n)};var Za=J(null);function eu(){var t=Za.current;return t!==null?t:He.pooledCache}function Qo(t,n){n===null?St(Za,Za.current):St(Za,n.pool)}function $d(){var t=eu();return t===null?null:{parent:cn._currentValue,pool:t}}var Bs=Error(r(460)),tp=Error(r(474)),Jo=Error(r(542)),nu={then:function(){}};function ep(t){return t=t.status,t==="fulfilled"||t==="rejected"}function $o(){}function np(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then($o,$o),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,ap(t),t;default:if(typeof n.status=="string")n.then($o,$o);else{if(t=He,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,ap(t),t}throw zs=n,Bs}}var zs=null;function ip(){if(zs===null)throw Error(r(459));var t=zs;return zs=null,t}function ap(t){if(t===Bs||t===Jo)throw Error(r(483))}var sa=!1;function iu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function au(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function oa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function la(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Re&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=Wo(t),Xd(t,null,a),n}return Xo(t,s,n,a),Wo(t)}function Is(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Ht(t,a)}}function ru(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var su=!1;function Fs(){if(su){var t=Dr;if(t!==null)throw t}}function Hs(t,n,a,s){su=!1;var c=t.updateQueue;sa=!1;var f=c.firstBaseUpdate,S=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var N=T,Q=N.next;N.next=null,S===null?f=Q:S.next=Q,S=N;var ft=t.alternate;ft!==null&&(ft=ft.updateQueue,T=ft.lastBaseUpdate,T!==S&&(T===null?ft.firstBaseUpdate=Q:T.next=Q,ft.lastBaseUpdate=N))}if(f!==null){var pt=c.baseState;S=0,ft=Q=N=null,T=f;do{var et=T.lane&-536870913,it=et!==T.lane;if(it?(Se&et)===et:(s&et)===et){et!==0&&et===wr&&(su=!0),ft!==null&&(ft=ft.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var ne=t,Jt=T;et=n;var Oe=a;switch(Jt.tag){case 1:if(ne=Jt.payload,typeof ne=="function"){pt=ne.call(Oe,pt,et);break t}pt=ne;break t;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=Jt.payload,et=typeof ne=="function"?ne.call(Oe,pt,et):ne,et==null)break t;pt=g({},pt,et);break t;case 2:sa=!0}}et=T.callback,et!==null&&(t.flags|=64,it&&(t.flags|=8192),it=c.callbacks,it===null?c.callbacks=[et]:it.push(et))}else it={lane:et,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ft===null?(Q=ft=it,N=pt):ft=ft.next=it,S|=et;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;it=T,T=it.next,it.next=null,c.lastBaseUpdate=it,c.shared.pending=null}}while(!0);ft===null&&(N=pt),c.baseState=N,c.firstBaseUpdate=Q,c.lastBaseUpdate=ft,f===null&&(c.shared.lanes=0),ga|=S,t.lanes=S,t.memoizedState=pt}}function rp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function sp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)rp(a[t],n)}var Ur=J(null),tl=J(0);function op(t,n){t=Gi,St(tl,t),St(Ur,n),Gi=t|n.baseLanes}function ou(){St(tl,Gi),St(Ur,Ur.current)}function lu(){Gi=tl.current,vt(Ur),vt(tl)}var ca=0,de=null,Le=null,nn=null,el=!1,Lr=!1,ja=!1,nl=0,Gs=0,Nr=null,m0=0;function Qe(){throw Error(r(321))}function cu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Gn(t[a],n[a]))return!1;return!0}function uu(t,n,a,s,c,f){return ca=f,de=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=t===null||t.memoizedState===null?Xp:Wp,ja=!1,f=a(s,c),ja=!1,Lr&&(f=cp(n,a,s,c)),lp(t),f}function lp(t){O.H=ll;var n=Le!==null&&Le.next!==null;if(ca=0,nn=Le=de=null,el=!1,Gs=0,Nr=null,n)throw Error(r(300));t===null||pn||(t=t.dependencies,t!==null&&jo(t)&&(pn=!0))}function cp(t,n,a,s){de=t;var c=0;do{if(Lr&&(Nr=null),Gs=0,Lr=!1,25<=c)throw Error(r(301));if(c+=1,nn=Le=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=y0,f=n(a,s)}while(Lr);return f}function g0(){var t=O.H,n=t.useState()[0];return n=typeof n.then=="function"?Vs(n):n,t=t.useState()[0],(Le!==null?Le.memoizedState:null)!==t&&(de.flags|=1024),n}function fu(){var t=nl!==0;return nl=0,t}function hu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function du(t){if(el){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}el=!1}ca=0,nn=Le=de=null,Lr=!1,Gs=nl=0,Nr=null}function On(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?de.memoizedState=nn=t:nn=nn.next=t,nn}function an(){if(Le===null){var t=de.alternate;t=t!==null?t.memoizedState:null}else t=Le.next;var n=nn===null?de.memoizedState:nn.next;if(n!==null)nn=n,Le=t;else{if(t===null)throw de.alternate===null?Error(r(467)):Error(r(310));Le=t,t={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},nn===null?de.memoizedState=nn=t:nn=nn.next=t}return nn}function pu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Vs(t){var n=Gs;return Gs+=1,Nr===null&&(Nr=[]),t=np(Nr,t,n),n=de,(nn===null?n.memoizedState:nn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Xp:Wp),t}function il(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Vs(t);if(t.$$typeof===P)return Tn(t)}throw Error(r(438,String(t)))}function mu(t){var n=null,a=de.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=de.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=pu(),de.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=C;return n.index++,a}function Pi(t,n){return typeof n=="function"?n(t):n}function al(t){var n=an();return gu(n,Le,t)}function gu(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var S=c.next;c.next=f.next,f.next=S}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var T=S=null,N=null,Q=n,ft=!1;do{var pt=Q.lane&-536870913;if(pt!==Q.lane?(Se&pt)===pt:(ca&pt)===pt){var et=Q.revertLane;if(et===0)N!==null&&(N=N.next={lane:0,revertLane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),pt===wr&&(ft=!0);else if((ca&et)===et){Q=Q.next,et===wr&&(ft=!0);continue}else pt={lane:0,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},N===null?(T=N=pt,S=f):N=N.next=pt,de.lanes|=et,ga|=et;pt=Q.action,ja&&a(f,pt),f=Q.hasEagerState?Q.eagerState:a(f,pt)}else et={lane:pt,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},N===null?(T=N=et,S=f):N=N.next=et,de.lanes|=pt,ga|=pt;Q=Q.next}while(Q!==null&&Q!==n);if(N===null?S=f:N.next=T,!Gn(f,t.memoizedState)&&(pn=!0,ft&&(a=Dr,a!==null)))throw a;t.memoizedState=f,t.baseState=S,t.baseQueue=N,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function _u(t){var n=an(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do f=t(f,S.action),S=S.next;while(S!==c);Gn(f,n.memoizedState)||(pn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function up(t,n,a){var s=de,c=an(),f=Ae;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!Gn((Le||c).memoizedState,a);S&&(c.memoizedState=a,pn=!0),c=c.queue;var T=dp.bind(null,s,c,t);if(ks(2048,8,T,[t]),c.getSnapshot!==n||S||nn!==null&&nn.memoizedState.tag&1){if(s.flags|=2048,Or(9,rl(),hp.bind(null,s,c,a,n),null),He===null)throw Error(r(349));f||(ca&124)!==0||fp(s,n,a)}return a}function fp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=de.updateQueue,n===null?(n=pu(),de.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function hp(t,n,a,s){n.value=a,n.getSnapshot=s,pp(n)&&mp(t)}function dp(t,n,a){return a(function(){pp(n)&&mp(t)})}function pp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Gn(t,a)}catch{return!0}}function mp(t){var n=Ar(t,2);n!==null&&Yn(n,t,2)}function vu(t){var n=On();if(typeof t=="function"){var a=t;if(t=a(),ja){ot(!0);try{a()}finally{ot(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:t},n}function gp(t,n,a,s){return t.baseState=a,gu(t,Le,typeof s=="function"?s:Pi)}function _0(t,n,a,s,c){if(ol(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};O.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,_p(n,f)):(f.next=a.next,n.pending=a.next=f)}}function _p(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=O.T,S={};O.T=S;try{var T=a(c,s),N=O.S;N!==null&&N(S,T),vp(t,n,T)}catch(Q){xu(t,n,Q)}finally{O.T=f}}else try{f=a(c,s),vp(t,n,f)}catch(Q){xu(t,n,Q)}}function vp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){xp(t,n,s)},function(s){return xu(t,n,s)}):xp(t,n,a)}function xp(t,n,a){n.status="fulfilled",n.value=a,Sp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,_p(t,a)))}function xu(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Sp(n),n=n.next;while(n!==s)}t.action=null}function Sp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Mp(t,n){return n}function yp(t,n){if(Ae){var a=He.formState;if(a!==null){t:{var s=de;if(Ae){if(je){e:{for(var c=je,f=Si;c.nodeType!==8;){if(!f){c=null;break e}if(c=fi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){je=fi(c.nextSibling),s=c.data==="F!";break t}}Wa(s)}s=!1}s&&(n=a[0])}}return a=On(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mp,lastRenderedState:n},a.queue=s,a=Gp.bind(null,de,s),s.dispatch=a,s=vu(!1),f=Tu.bind(null,de,!1,s.queue),s=On(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=_0.bind(null,de,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function Ep(t){var n=an();return Tp(n,Le,t)}function Tp(t,n,a){if(n=gu(t,n,Mp)[0],t=al(Pi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Vs(n)}catch(S){throw S===Bs?Jo:S}else s=n;n=an();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(de.flags|=2048,Or(9,rl(),v0.bind(null,c,a),null)),[s,f,t]}function v0(t,n){t.action=n}function Ap(t){var n=an(),a=Le;if(a!==null)return Tp(n,a,t);an(),n=n.memoizedState,a=an();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Or(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=de.updateQueue,n===null&&(n=pu(),de.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function rl(){return{destroy:void 0,resource:void 0}}function bp(){return an().memoizedState}function sl(t,n,a,s){var c=On();s=s===void 0?null:s,de.flags|=t,c.memoizedState=Or(1|n,rl(),a,s)}function ks(t,n,a,s){var c=an();s=s===void 0?null:s;var f=c.memoizedState.inst;Le!==null&&s!==null&&cu(s,Le.memoizedState.deps)?c.memoizedState=Or(n,f,a,s):(de.flags|=t,c.memoizedState=Or(1|n,f,a,s))}function Rp(t,n){sl(8390656,8,t,n)}function Cp(t,n){ks(2048,8,t,n)}function wp(t,n){return ks(4,2,t,n)}function Dp(t,n){return ks(4,4,t,n)}function Up(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Lp(t,n,a){a=a!=null?a.concat([t]):null,ks(4,4,Up.bind(null,n,t),a)}function Su(){}function Np(t,n){var a=an();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&cu(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Op(t,n){var a=an();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&cu(n,s[1]))return s[0];if(s=t(),ja){ot(!0);try{t()}finally{ot(!1)}}return a.memoizedState=[s,n],s}function Mu(t,n,a){return a===void 0||(ca&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=zm(),de.lanes|=t,ga|=t,a)}function Pp(t,n,a,s){return Gn(a,n)?a:Ur.current!==null?(t=Mu(t,a,s),Gn(t,n)||(pn=!0),t):(ca&42)===0?(pn=!0,t.memoizedState=a):(t=zm(),de.lanes|=t,ga|=t,n)}function Bp(t,n,a,s,c){var f=Z.p;Z.p=f!==0&&8>f?f:8;var S=O.T,T={};O.T=T,Tu(t,!1,n,a);try{var N=c(),Q=O.S;if(Q!==null&&Q(T,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var ft=p0(N,s);Xs(t,n,ft,qn(t))}else Xs(t,n,s,qn(t))}catch(pt){Xs(t,n,{then:function(){},status:"rejected",reason:pt},qn())}finally{Z.p=f,O.T=S}}function x0(){}function yu(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=zp(t).queue;Bp(t,c,n,q,a===null?x0:function(){return Ip(t),a(s)})}function zp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Ip(t){var n=zp(t).next.queue;Xs(t,n,{},qn())}function Eu(){return Tn(lo)}function Fp(){return an().memoizedState}function Hp(){return an().memoizedState}function S0(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=qn();t=oa(a);var s=la(n,t,a);s!==null&&(Yn(s,n,a),Is(s,n,a)),n={cache:$c()},t.payload=n;return}n=n.return}}function M0(t,n,a){var s=qn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},ol(t)?Vp(n,a):(a=kc(t,n,a,s),a!==null&&(Yn(a,t,s),kp(a,n,s)))}function Gp(t,n,a){var s=qn();Xs(t,n,a,s)}function Xs(t,n,a,s){var c={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(ol(t))Vp(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,T=f(S,a);if(c.hasEagerState=!0,c.eagerState=T,Gn(T,S))return Xo(t,n,c,0),He===null&&ko(),!1}catch{}finally{}if(a=kc(t,n,c,s),a!==null)return Yn(a,t,s),kp(a,n,s),!0}return!1}function Tu(t,n,a,s){if(s={lane:2,revertLane:nf(),action:s,hasEagerState:!1,eagerState:null,next:null},ol(t)){if(n)throw Error(r(479))}else n=kc(t,a,s,2),n!==null&&Yn(n,t,2)}function ol(t){var n=t.alternate;return t===de||n!==null&&n===de}function Vp(t,n){Lr=el=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function kp(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Ht(t,a)}}var ll={readContext:Tn,use:il,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe},Xp={readContext:Tn,use:il,useCallback:function(t,n){return On().memoizedState=[t,n===void 0?null:n],t},useContext:Tn,useEffect:Rp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,sl(4194308,4,Up.bind(null,n,t),a)},useLayoutEffect:function(t,n){return sl(4194308,4,t,n)},useInsertionEffect:function(t,n){sl(4,2,t,n)},useMemo:function(t,n){var a=On();n=n===void 0?null:n;var s=t();if(ja){ot(!0);try{t()}finally{ot(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=On();if(a!==void 0){var c=a(n);if(ja){ot(!0);try{a(n)}finally{ot(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=M0.bind(null,de,t),[s.memoizedState,t]},useRef:function(t){var n=On();return t={current:t},n.memoizedState=t},useState:function(t){t=vu(t);var n=t.queue,a=Gp.bind(null,de,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Su,useDeferredValue:function(t,n){var a=On();return Mu(a,t,n)},useTransition:function(){var t=vu(!1);return t=Bp.bind(null,de,t.queue,!0,!1),On().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=de,c=On();if(Ae){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),He===null)throw Error(r(349));(Se&124)!==0||fp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Rp(dp.bind(null,s,f,t),[t]),s.flags|=2048,Or(9,rl(),hp.bind(null,s,f,a,n),null),a},useId:function(){var t=On(),n=He.identifierPrefix;if(Ae){var a=Li,s=Ui;a=(s&~(1<<32-Pt(s)-1)).toString(32)+a,n="«"+n+"R"+a,a=nl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=m0++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:Eu,useFormState:yp,useActionState:yp,useOptimistic:function(t){var n=On();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Tu.bind(null,de,!0,a),a.dispatch=n,[t,n]},useMemoCache:mu,useCacheRefresh:function(){return On().memoizedState=S0.bind(null,de)}},Wp={readContext:Tn,use:il,useCallback:Np,useContext:Tn,useEffect:Cp,useImperativeHandle:Lp,useInsertionEffect:wp,useLayoutEffect:Dp,useMemo:Op,useReducer:al,useRef:bp,useState:function(){return al(Pi)},useDebugValue:Su,useDeferredValue:function(t,n){var a=an();return Pp(a,Le.memoizedState,t,n)},useTransition:function(){var t=al(Pi)[0],n=an().memoizedState;return[typeof t=="boolean"?t:Vs(t),n]},useSyncExternalStore:up,useId:Fp,useHostTransitionStatus:Eu,useFormState:Ep,useActionState:Ep,useOptimistic:function(t,n){var a=an();return gp(a,Le,t,n)},useMemoCache:mu,useCacheRefresh:Hp},y0={readContext:Tn,use:il,useCallback:Np,useContext:Tn,useEffect:Cp,useImperativeHandle:Lp,useInsertionEffect:wp,useLayoutEffect:Dp,useMemo:Op,useReducer:_u,useRef:bp,useState:function(){return _u(Pi)},useDebugValue:Su,useDeferredValue:function(t,n){var a=an();return Le===null?Mu(a,t,n):Pp(a,Le.memoizedState,t,n)},useTransition:function(){var t=_u(Pi)[0],n=an().memoizedState;return[typeof t=="boolean"?t:Vs(t),n]},useSyncExternalStore:up,useId:Fp,useHostTransitionStatus:Eu,useFormState:Ap,useActionState:Ap,useOptimistic:function(t,n){var a=an();return Le!==null?gp(a,Le,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:mu,useCacheRefresh:Hp},Pr=null,Ws=0;function cl(t){var n=Ws;return Ws+=1,Pr===null&&(Pr=[]),np(Pr,t,n)}function qs(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function ul(t,n){throw n.$$typeof===v?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function qp(t){var n=t._init;return n(t._payload)}function Yp(t){function n(W,H){if(t){var K=W.deletions;K===null?(W.deletions=[H],W.flags|=16):K.push(H)}}function a(W,H){if(!t)return null;for(;H!==null;)n(W,H),H=H.sibling;return null}function s(W){for(var H=new Map;W!==null;)W.key!==null?H.set(W.key,W):H.set(W.index,W),W=W.sibling;return H}function c(W,H){return W=Di(W,H),W.index=0,W.sibling=null,W}function f(W,H,K){return W.index=K,t?(K=W.alternate,K!==null?(K=K.index,K<H?(W.flags|=67108866,H):K):(W.flags|=67108866,H)):(W.flags|=1048576,H)}function S(W){return t&&W.alternate===null&&(W.flags|=67108866),W}function T(W,H,K,ht){return H===null||H.tag!==6?(H=Wc(K,W.mode,ht),H.return=W,H):(H=c(H,K),H.return=W,H)}function N(W,H,K,ht){var It=K.type;return It===b?ft(W,H,K.props.children,ht,K.key):H!==null&&(H.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===j&&qp(It)===H.type)?(H=c(H,K.props),qs(H,K),H.return=W,H):(H=qo(K.type,K.key,K.props,null,W.mode,ht),qs(H,K),H.return=W,H)}function Q(W,H,K,ht){return H===null||H.tag!==4||H.stateNode.containerInfo!==K.containerInfo||H.stateNode.implementation!==K.implementation?(H=qc(K,W.mode,ht),H.return=W,H):(H=c(H,K.children||[]),H.return=W,H)}function ft(W,H,K,ht,It){return H===null||H.tag!==7?(H=Ga(K,W.mode,ht,It),H.return=W,H):(H=c(H,K),H.return=W,H)}function pt(W,H,K){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=Wc(""+H,W.mode,K),H.return=W,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case x:return K=qo(H.type,H.key,H.props,null,W.mode,K),qs(K,H),K.return=W,K;case y:return H=qc(H,W.mode,K),H.return=W,H;case j:var ht=H._init;return H=ht(H._payload),pt(W,H,K)}if(lt(H)||nt(H))return H=Ga(H,W.mode,K,null),H.return=W,H;if(typeof H.then=="function")return pt(W,cl(H),K);if(H.$$typeof===P)return pt(W,Ko(W,H),K);ul(W,H)}return null}function et(W,H,K,ht){var It=H!==null?H.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return It!==null?null:T(W,H,""+K,ht);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case x:return K.key===It?N(W,H,K,ht):null;case y:return K.key===It?Q(W,H,K,ht):null;case j:return It=K._init,K=It(K._payload),et(W,H,K,ht)}if(lt(K)||nt(K))return It!==null?null:ft(W,H,K,ht,null);if(typeof K.then=="function")return et(W,H,cl(K),ht);if(K.$$typeof===P)return et(W,H,Ko(W,K),ht);ul(W,K)}return null}function it(W,H,K,ht,It){if(typeof ht=="string"&&ht!==""||typeof ht=="number"||typeof ht=="bigint")return W=W.get(K)||null,T(H,W,""+ht,It);if(typeof ht=="object"&&ht!==null){switch(ht.$$typeof){case x:return W=W.get(ht.key===null?K:ht.key)||null,N(H,W,ht,It);case y:return W=W.get(ht.key===null?K:ht.key)||null,Q(H,W,ht,It);case j:var pe=ht._init;return ht=pe(ht._payload),it(W,H,K,ht,It)}if(lt(ht)||nt(ht))return W=W.get(K)||null,ft(H,W,ht,It,null);if(typeof ht.then=="function")return it(W,H,K,cl(ht),It);if(ht.$$typeof===P)return it(W,H,K,Ko(H,ht),It);ul(H,ht)}return null}function ne(W,H,K,ht){for(var It=null,pe=null,Yt=H,te=H=0,gn=null;Yt!==null&&te<K.length;te++){Yt.index>te?(gn=Yt,Yt=null):gn=Yt.sibling;var Ee=et(W,Yt,K[te],ht);if(Ee===null){Yt===null&&(Yt=gn);break}t&&Yt&&Ee.alternate===null&&n(W,Yt),H=f(Ee,H,te),pe===null?It=Ee:pe.sibling=Ee,pe=Ee,Yt=gn}if(te===K.length)return a(W,Yt),Ae&&ka(W,te),It;if(Yt===null){for(;te<K.length;te++)Yt=pt(W,K[te],ht),Yt!==null&&(H=f(Yt,H,te),pe===null?It=Yt:pe.sibling=Yt,pe=Yt);return Ae&&ka(W,te),It}for(Yt=s(Yt);te<K.length;te++)gn=it(Yt,W,te,K[te],ht),gn!==null&&(t&&gn.alternate!==null&&Yt.delete(gn.key===null?te:gn.key),H=f(gn,H,te),pe===null?It=gn:pe.sibling=gn,pe=gn);return t&&Yt.forEach(function(Aa){return n(W,Aa)}),Ae&&ka(W,te),It}function Jt(W,H,K,ht){if(K==null)throw Error(r(151));for(var It=null,pe=null,Yt=H,te=H=0,gn=null,Ee=K.next();Yt!==null&&!Ee.done;te++,Ee=K.next()){Yt.index>te?(gn=Yt,Yt=null):gn=Yt.sibling;var Aa=et(W,Yt,Ee.value,ht);if(Aa===null){Yt===null&&(Yt=gn);break}t&&Yt&&Aa.alternate===null&&n(W,Yt),H=f(Aa,H,te),pe===null?It=Aa:pe.sibling=Aa,pe=Aa,Yt=gn}if(Ee.done)return a(W,Yt),Ae&&ka(W,te),It;if(Yt===null){for(;!Ee.done;te++,Ee=K.next())Ee=pt(W,Ee.value,ht),Ee!==null&&(H=f(Ee,H,te),pe===null?It=Ee:pe.sibling=Ee,pe=Ee);return Ae&&ka(W,te),It}for(Yt=s(Yt);!Ee.done;te++,Ee=K.next())Ee=it(Yt,W,te,Ee.value,ht),Ee!==null&&(t&&Ee.alternate!==null&&Yt.delete(Ee.key===null?te:Ee.key),H=f(Ee,H,te),pe===null?It=Ee:pe.sibling=Ee,pe=Ee);return t&&Yt.forEach(function(Ex){return n(W,Ex)}),Ae&&ka(W,te),It}function Oe(W,H,K,ht){if(typeof K=="object"&&K!==null&&K.type===b&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case x:t:{for(var It=K.key;H!==null;){if(H.key===It){if(It=K.type,It===b){if(H.tag===7){a(W,H.sibling),ht=c(H,K.props.children),ht.return=W,W=ht;break t}}else if(H.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===j&&qp(It)===H.type){a(W,H.sibling),ht=c(H,K.props),qs(ht,K),ht.return=W,W=ht;break t}a(W,H);break}else n(W,H);H=H.sibling}K.type===b?(ht=Ga(K.props.children,W.mode,ht,K.key),ht.return=W,W=ht):(ht=qo(K.type,K.key,K.props,null,W.mode,ht),qs(ht,K),ht.return=W,W=ht)}return S(W);case y:t:{for(It=K.key;H!==null;){if(H.key===It)if(H.tag===4&&H.stateNode.containerInfo===K.containerInfo&&H.stateNode.implementation===K.implementation){a(W,H.sibling),ht=c(H,K.children||[]),ht.return=W,W=ht;break t}else{a(W,H);break}else n(W,H);H=H.sibling}ht=qc(K,W.mode,ht),ht.return=W,W=ht}return S(W);case j:return It=K._init,K=It(K._payload),Oe(W,H,K,ht)}if(lt(K))return ne(W,H,K,ht);if(nt(K)){if(It=nt(K),typeof It!="function")throw Error(r(150));return K=It.call(K),Jt(W,H,K,ht)}if(typeof K.then=="function")return Oe(W,H,cl(K),ht);if(K.$$typeof===P)return Oe(W,H,Ko(W,K),ht);ul(W,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,H!==null&&H.tag===6?(a(W,H.sibling),ht=c(H,K),ht.return=W,W=ht):(a(W,H),ht=Wc(K,W.mode,ht),ht.return=W,W=ht),S(W)):a(W,H)}return function(W,H,K,ht){try{Ws=0;var It=Oe(W,H,K,ht);return Pr=null,It}catch(Yt){if(Yt===Bs||Yt===Jo)throw Yt;var pe=Vn(29,Yt,null,W.mode);return pe.lanes=ht,pe.return=W,pe}finally{}}}var Br=Yp(!0),Zp=Yp(!1),ti=J(null),Mi=null;function ua(t){var n=t.alternate;St(un,un.current&1),St(ti,t),Mi===null&&(n===null||Ur.current!==null||n.memoizedState!==null)&&(Mi=t)}function jp(t){if(t.tag===22){if(St(un,un.current),St(ti,t),Mi===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Mi=t)}}else fa()}function fa(){St(un,un.current),St(ti,ti.current)}function Bi(t){vt(ti),Mi===t&&(Mi=null),vt(un)}var un=J(0);function fl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||mf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Au(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var bu={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=qn(),c=oa(s);c.payload=n,a!=null&&(c.callback=a),n=la(t,c,s),n!==null&&(Yn(n,t,s),Is(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=qn(),c=oa(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=la(t,c,s),n!==null&&(Yn(n,t,s),Is(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=qn(),s=oa(a);s.tag=2,n!=null&&(s.callback=n),n=la(t,s,a),n!==null&&(Yn(n,t,a),Is(n,t,a))}};function Kp(t,n,a,s,c,f,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,S):n.prototype&&n.prototype.isPureReactComponent?!Cs(a,s)||!Cs(c,f):!0}function Qp(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&bu.enqueueReplaceState(n,n.state,null)}function Ka(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}var hl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Jp(t){hl(t)}function $p(t){console.error(t)}function tm(t){hl(t)}function dl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function em(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Ru(t,n,a){return a=oa(a),a.tag=3,a.payload={element:null},a.callback=function(){dl(t,n)},a}function nm(t){return t=oa(t),t.tag=3,t}function im(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){em(n,a,s)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){em(n,a,s),typeof c!="function"&&(_a===null?_a=new Set([this]):_a.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function E0(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Ns(n,a,c,!0),a=ti.current,a!==null){switch(a.tag){case 13:return Mi===null?Qu():a.alternate===null&&Ke===0&&(Ke=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===nu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),$u(t,s,c)),!1;case 22:return a.flags|=65536,s===nu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),$u(t,s,c)),!1}throw Error(r(435,a.tag))}return $u(t,s,c),Qu(),!1}if(Ae)return n=ti.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==jc&&(t=Error(r(422),{cause:s}),Ls(Kn(t,a)))):(s!==jc&&(n=Error(r(423),{cause:s}),Ls(Kn(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=Kn(s,a),c=Ru(t.stateNode,s,c),ru(t,c),Ke!==4&&(Ke=2)),!1;var f=Error(r(520),{cause:s});if(f=Kn(f,a),$s===null?$s=[f]:$s.push(f),Ke!==4&&(Ke=2),n===null)return!0;s=Kn(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Ru(a.stateNode,s,t),ru(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(_a===null||!_a.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=nm(c),im(c,t,a,s),ru(a,c),!1}a=a.return}while(a!==null);return!1}var am=Error(r(461)),pn=!1;function xn(t,n,a,s){n.child=t===null?Zp(n,null,a,s):Br(n,t.child,a,s)}function rm(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var S={};for(var T in s)T!=="ref"&&(S[T]=s[T])}else S=s;return Ya(n),s=uu(t,n,a,S,f,c),T=fu(),t!==null&&!pn?(hu(t,n,c),zi(t,n,c)):(Ae&&T&&Yc(n),n.flags|=1,xn(t,n,s,c),n.child)}function sm(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!Xc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,om(t,n,f,s,c)):(t=qo(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Pu(t,c)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Cs,a(S,s)&&t.ref===n.ref)return zi(t,n,c)}return n.flags|=1,t=Di(f,s),t.ref=n.ref,t.return=n,n.child=t}function om(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(Cs(f,s)&&t.ref===n.ref)if(pn=!1,n.pendingProps=s=f,Pu(t,c))(t.flags&131072)!==0&&(pn=!0);else return n.lanes=t.lanes,zi(t,n,c)}return Cu(t,n,a,s,c)}function lm(t,n,a){var s=n.pendingProps,c=s.children,f=t!==null?t.memoizedState:null;if(s.mode==="hidden"){if((n.flags&128)!==0){if(s=f!==null?f.baseLanes|a:a,t!==null){for(c=n.child=t.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return cm(t,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Qo(n,f!==null?f.cachePool:null),f!==null?op(n,f):ou(),jp(n);else return n.lanes=n.childLanes=536870912,cm(t,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(Qo(n,f.cachePool),op(n,f),fa(),n.memoizedState=null):(t!==null&&Qo(n,null),ou(),fa());return xn(t,n,c,a),n.child}function cm(t,n,a,s){var c=eu();return c=c===null?null:{parent:cn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&Qo(n,null),ou(),jp(n),t!==null&&Ns(t,n,s,!0),null}function pl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Cu(t,n,a,s,c){return Ya(n),a=uu(t,n,a,s,void 0,c),s=fu(),t!==null&&!pn?(hu(t,n,c),zi(t,n,c)):(Ae&&s&&Yc(n),n.flags|=1,xn(t,n,a,c),n.child)}function um(t,n,a,s,c,f){return Ya(n),n.updateQueue=null,a=cp(n,s,a,c),lp(t),s=fu(),t!==null&&!pn?(hu(t,n,f),zi(t,n,f)):(Ae&&s&&Yc(n),n.flags|=1,xn(t,n,a,f),n.child)}function fm(t,n,a,s,c){if(Ya(n),n.stateNode===null){var f=br,S=a.contextType;typeof S=="object"&&S!==null&&(f=Tn(S)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=bu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},iu(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?Tn(S):br,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Au(n,a,S,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&bu.enqueueReplaceState(f,f.state,null),Hs(n,s,f,c),Fs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,N=Ka(a,T);f.props=N;var Q=f.context,ft=a.contextType;S=br,typeof ft=="object"&&ft!==null&&(S=Tn(ft));var pt=a.getDerivedStateFromProps;ft=typeof pt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ft||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||Q!==S)&&Qp(n,f,s,S),sa=!1;var et=n.memoizedState;f.state=et,Hs(n,s,f,c),Fs(),Q=n.memoizedState,T||et!==Q||sa?(typeof pt=="function"&&(Au(n,a,pt,s),Q=n.memoizedState),(N=sa||Kp(n,a,N,s,et,Q,S))?(ft||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=Q),f.props=s,f.state=Q,f.context=S,s=N):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,au(t,n),S=n.memoizedProps,ft=Ka(a,S),f.props=ft,pt=n.pendingProps,et=f.context,Q=a.contextType,N=br,typeof Q=="object"&&Q!==null&&(N=Tn(Q)),T=a.getDerivedStateFromProps,(Q=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==pt||et!==N)&&Qp(n,f,s,N),sa=!1,et=n.memoizedState,f.state=et,Hs(n,s,f,c),Fs();var it=n.memoizedState;S!==pt||et!==it||sa||t!==null&&t.dependencies!==null&&jo(t.dependencies)?(typeof T=="function"&&(Au(n,a,T,s),it=n.memoizedState),(ft=sa||Kp(n,a,ft,s,et,it,N)||t!==null&&t.dependencies!==null&&jo(t.dependencies))?(Q||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,it,N),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,it,N)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=it),f.props=s,f.state=it,f.context=N,s=ft):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,pl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=Br(n,t.child,null,c),n.child=Br(n,null,a,c)):xn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=zi(t,n,c),t}function hm(t,n,a,s){return Us(),n.flags|=256,xn(t,n,a,s),n.child}var wu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Du(t){return{baseLanes:t,cachePool:$d()}}function Uu(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ei),t}function dm(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=t!==null&&t.memoizedState===null?!1:(un.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ae){if(c?ua(n):fa(),Ae){var T=je,N;if(N=T){t:{for(N=T,T=Si;N.nodeType!==8;){if(!T){T=null;break t}if(N=fi(N.nextSibling),N===null){T=null;break t}}T=N}T!==null?(n.memoizedState={dehydrated:T,treeContext:Va!==null?{id:Ui,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},N=Vn(18,null,null,0),N.stateNode=T,N.return=n,n.child=N,Dn=n,je=null,N=!0):N=!1}N||Wa(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return mf(T)?n.lanes=32:n.lanes=536870912,null;Bi(n)}return T=s.children,s=s.fallback,c?(fa(),c=n.mode,T=ml({mode:"hidden",children:T},c),s=Ga(s,c,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,c=n.child,c.memoizedState=Du(a),c.childLanes=Uu(t,S,a),n.memoizedState=wu,s):(ua(n),Lu(n,T))}if(N=t.memoizedState,N!==null&&(T=N.dehydrated,T!==null)){if(f)n.flags&256?(ua(n),n.flags&=-257,n=Nu(t,n,a)):n.memoizedState!==null?(fa(),n.child=t.child,n.flags|=128,n=null):(fa(),c=s.fallback,T=n.mode,s=ml({mode:"visible",children:s.children},T),c=Ga(c,T,a,null),c.flags|=2,s.return=n,c.return=n,s.sibling=c,n.child=s,Br(n,t.child,null,a),s=n.child,s.memoizedState=Du(a),s.childLanes=Uu(t,S,a),n.memoizedState=wu,n=c);else if(ua(n),mf(T)){if(S=T.nextSibling&&T.nextSibling.dataset,S)var Q=S.dgst;S=Q,s=Error(r(419)),s.stack="",s.digest=S,Ls({value:s,source:null,stack:null}),n=Nu(t,n,a)}else if(pn||Ns(t,n,a,!1),S=(a&t.childLanes)!==0,pn||S){if(S=He,S!==null&&(s=a&-a,s=(s&42)!==0?1:ie(s),s=(s&(S.suspendedLanes|a))!==0?0:s,s!==0&&s!==N.retryLane))throw N.retryLane=s,Ar(t,s),Yn(S,t,s),am;T.data==="$?"||Qu(),n=Nu(t,n,a)}else T.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=N.treeContext,je=fi(T.nextSibling),Dn=n,Ae=!0,Xa=null,Si=!1,t!==null&&(Jn[$n++]=Ui,Jn[$n++]=Li,Jn[$n++]=Va,Ui=t.id,Li=t.overflow,Va=n),n=Lu(n,s.children),n.flags|=4096);return n}return c?(fa(),c=s.fallback,T=n.mode,N=t.child,Q=N.sibling,s=Di(N,{mode:"hidden",children:s.children}),s.subtreeFlags=N.subtreeFlags&65011712,Q!==null?c=Di(Q,c):(c=Ga(c,T,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,s=c,c=n.child,T=t.child.memoizedState,T===null?T=Du(a):(N=T.cachePool,N!==null?(Q=cn._currentValue,N=N.parent!==Q?{parent:Q,pool:Q}:N):N=$d(),T={baseLanes:T.baseLanes|a,cachePool:N}),c.memoizedState=T,c.childLanes=Uu(t,S,a),n.memoizedState=wu,s):(ua(n),a=t.child,t=a.sibling,a=Di(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=a,n.memoizedState=null,a)}function Lu(t,n){return n=ml({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function ml(t,n){return t=Vn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Nu(t,n,a){return Br(n,t.child,null,a),t=Lu(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function pm(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Qc(t.return,n,a)}function Ou(t,n,a,s,c){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=c)}function mm(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;if(xn(t,n,s.children,a),s=un.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&pm(t,a,n);else if(t.tag===19)pm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}s&=1}switch(St(un,s),c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&fl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Ou(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&fl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Ou(n,!0,a,null,f);break;case"together":Ou(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function zi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ga|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ns(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Di(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Di(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Pu(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&jo(t)))}function T0(t,n,a){switch(n.tag){case 3:At(n,n.stateNode.containerInfo),ra(n,cn,t.memoizedState.cache),Us();break;case 27:case 5:Wt(n);break;case 4:At(n,n.stateNode.containerInfo);break;case 10:ra(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ua(n),n.flags|=128,null):(a&n.child.childLanes)!==0?dm(t,n,a):(ua(n),t=zi(t,n,a),t!==null?t.sibling:null);ua(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Ns(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return mm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),St(un,un.current),s)break;return null;case 22:case 23:return n.lanes=0,lm(t,n,a);case 24:ra(n,cn,t.memoizedState.cache)}return zi(t,n,a)}function gm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)pn=!0;else{if(!Pu(t,a)&&(n.flags&128)===0)return pn=!1,T0(t,n,a);pn=(t.flags&131072)!==0}else pn=!1,Ae&&(n.flags&1048576)!==0&&qd(n,Zo,n.index);switch(n.lanes=0,n.tag){case 16:t:{t=n.pendingProps;var s=n.elementType,c=s._init;if(s=c(s._payload),n.type=s,typeof s=="function")Xc(s)?(t=Ka(s,t),n.tag=1,n=fm(null,n,s,t,a)):(n.tag=0,n=Cu(null,n,s,t,a));else{if(s!=null){if(c=s.$$typeof,c===U){n.tag=11,n=rm(null,n,s,t,a);break t}else if(c===F){n.tag=14,n=sm(null,n,s,t,a);break t}}throw n=_t(s)||s,Error(r(306,n,""))}}return n;case 0:return Cu(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=Ka(s,n.pendingProps),fm(t,n,s,c,a);case 3:t:{if(At(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,au(t,n),Hs(n,s,null,a);var S=n.memoizedState;if(s=S.cache,ra(n,cn,s),s!==f.cache&&Jc(n,[cn],a,!0),Fs(),s=S.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=hm(t,n,s,a);break t}else if(s!==c){c=Kn(Error(r(424)),n),Ls(c),n=hm(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(je=fi(t.firstChild),Dn=n,Ae=!0,Xa=null,Si=!0,a=Zp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Us(),s===c){n=zi(t,n,a);break t}xn(t,n,s,a)}n=n.child}return n;case 26:return pl(t,n),t===null?(a=Sg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ae||(a=n.type,t=n.pendingProps,s=wl(tt.current).createElement(a),s[ln]=n,s[Ye]=t,Mn(s,a,t),en(s),n.stateNode=s):n.memoizedState=Sg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Wt(n),t===null&&Ae&&(s=n.stateNode=_g(n.type,n.pendingProps,tt.current),Dn=n,Si=!0,c=je,Sa(n.type)?(gf=c,je=fi(s.firstChild)):je=c),xn(t,n,n.pendingProps.children,a),pl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ae&&((c=s=je)&&(s=J0(s,n.type,n.pendingProps,Si),s!==null?(n.stateNode=s,Dn=n,je=fi(s.firstChild),Si=!1,c=!0):c=!1),c||Wa(n)),Wt(n),c=n.type,f=n.pendingProps,S=t!==null?t.memoizedProps:null,s=f.children,hf(c,f)?s=null:S!==null&&hf(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=uu(t,n,g0,null,null,a),lo._currentValue=c),pl(t,n),xn(t,n,s,a),n.child;case 6:return t===null&&Ae&&((t=a=je)&&(a=$0(a,n.pendingProps,Si),a!==null?(n.stateNode=a,Dn=n,je=null,t=!0):t=!1),t||Wa(n)),null;case 13:return dm(t,n,a);case 4:return At(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Br(n,null,s,a):xn(t,n,s,a),n.child;case 11:return rm(t,n,n.type,n.pendingProps,a);case 7:return xn(t,n,n.pendingProps,a),n.child;case 8:return xn(t,n,n.pendingProps.children,a),n.child;case 12:return xn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,ra(n,n.type,s.value),xn(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,Ya(n),c=Tn(c),s=s(c),n.flags|=1,xn(t,n,s,a),n.child;case 14:return sm(t,n,n.type,n.pendingProps,a);case 15:return om(t,n,n.type,n.pendingProps,a);case 19:return mm(t,n,a);case 31:return s=n.pendingProps,a=n.mode,s={mode:s.mode,children:s.children},t===null?(a=ml(s,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Di(t.child,s),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return lm(t,n,a);case 24:return Ya(n),s=Tn(cn),t===null?(c=eu(),c===null&&(c=He,f=$c(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},iu(n),ra(n,cn,c)):((t.lanes&a)!==0&&(au(t,n),Hs(n,null,null,a),Fs()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ra(n,cn,s)):(s=f.cache,ra(n,cn,s),s!==c.cache&&Jc(n,[cn],a,!0))),xn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ii(t){t.flags|=4}function _m(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Ag(n)){if(n=ti.current,n!==null&&((Se&4194048)===Se?Mi!==null:(Se&62914560)!==Se&&(Se&536870912)===0||n!==Mi))throw zs=nu,tp;t.flags|=8192}}function gl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Tt():536870912,t.lanes|=n,Hr|=n)}function Ys(t,n){if(!Ae)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function qe(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function A0(t,n,a){var s=n.pendingProps;switch(Zc(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return qe(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Oi(cn),jt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ds(n)?Ii(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,jd())),qe(n),null;case 26:return a=n.memoizedState,t===null?(Ii(n),a!==null?(qe(n),_m(n,a)):(qe(n),n.flags&=-16777217)):a?a!==t.memoizedState?(Ii(n),qe(n),_m(n,a)):(qe(n),n.flags&=-16777217):(t.memoizedProps!==s&&Ii(n),qe(n),n.flags&=-16777217),null;case 27:he(n),a=tt.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Ii(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return qe(n),null}t=Dt.current,Ds(n)?Yd(n):(t=_g(c,s,a),n.stateNode=t,Ii(n))}return qe(n),null;case 5:if(he(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Ii(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return qe(n),null}if(t=Dt.current,Ds(n))Yd(n);else{switch(c=wl(tt.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?t.multiple=!0:s.size&&(t.size=s.size);break;default:t=typeof s.is=="string"?c.createElement(a,{is:s.is}):c.createElement(a)}}t[ln]=n,t[Ye]=s;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;t:switch(Mn(t,a,s),a){case"button":case"input":case"select":case"textarea":t=!!s.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Ii(n)}}return qe(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Ii(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=tt.current,Ds(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=Dn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[ln]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||ug(t.nodeValue,a)),t||Wa(n)}else t=wl(t).createTextNode(s),t[ln]=n,n.stateNode=t}return qe(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Ds(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[ln]=n}else Us(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),c=!1}else c=jd(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Bi(n),n):(Bi(n),null)}if(Bi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,t=t!==null&&t.memoizedState!==null,a){s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),gl(n,n.updateQueue),qe(n),null;case 4:return jt(),t===null&&of(n.stateNode.containerInfo),qe(n),null;case 10:return Oi(n.type),qe(n),null;case 19:if(vt(un),c=n.memoizedState,c===null)return qe(n),null;if(s=(n.flags&128)!==0,f=c.rendering,f===null)if(s)Ys(c,!1);else{if(Ke!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=fl(t),f!==null){for(n.flags|=128,Ys(c,!1),t=f.updateQueue,n.updateQueue=t,gl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Wd(a,t),a=a.sibling;return St(un,un.current&1|2),n.child}t=t.sibling}c.tail!==null&&Ot()>xl&&(n.flags|=128,s=!0,Ys(c,!1),n.lanes=4194304)}else{if(!s)if(t=fl(f),t!==null){if(n.flags|=128,s=!0,t=t.updateQueue,n.updateQueue=t,gl(n,t),Ys(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Ae)return qe(n),null}else 2*Ot()-c.renderingStartTime>xl&&a!==536870912&&(n.flags|=128,s=!0,Ys(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(t=c.last,t!==null?t.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=Ot(),n.sibling=null,t=un.current,St(un,s?t&1|2:t&1),n):(qe(n),null);case 22:case 23:return Bi(n),lu(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),a=n.updateQueue,a!==null&&gl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&vt(Za),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Oi(cn),qe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function b0(t,n){switch(Zc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Oi(cn),jt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return he(n),null;case 13:if(Bi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Us()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return vt(un),null;case 4:return jt(),null;case 10:return Oi(n.type),null;case 22:case 23:return Bi(n),lu(),t!==null&&vt(Za),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Oi(cn),null;case 25:return null;default:return null}}function vm(t,n){switch(Zc(n),n.tag){case 3:Oi(cn),jt();break;case 26:case 27:case 5:he(n);break;case 4:jt();break;case 13:Bi(n);break;case 19:vt(un);break;case 10:Oi(n.type);break;case 22:case 23:Bi(n),lu(),t!==null&&vt(Za);break;case 24:Oi(cn)}}function Zs(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,S=a.inst;s=f(),S.destroy=s}a=a.next}while(a!==c)}}catch(T){Ie(n,n.return,T)}}function ha(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var S=s.inst,T=S.destroy;if(T!==void 0){S.destroy=void 0,c=n;var N=a,Q=T;try{Q()}catch(ft){Ie(c,N,ft)}}}s=s.next}while(s!==f)}}catch(ft){Ie(n,n.return,ft)}}function xm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{sp(n,a)}catch(s){Ie(t,t.return,s)}}}function Sm(t,n,a){a.props=Ka(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Ie(t,n,s)}}function js(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(c){Ie(t,n,c)}}function yi(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Ie(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ie(t,n,c)}else a.current=null}function Mm(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Ie(t,t.return,c)}}function Bu(t,n,a){try{var s=t.stateNode;Y0(s,t.type,a,n),s[Ye]=n}catch(c){Ie(t,t.return,c)}}function ym(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Sa(t.type)||t.tag===4}function zu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||ym(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Sa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Iu(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Cl));else if(s!==4&&(s===27&&Sa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Iu(t,n,a),t=t.sibling;t!==null;)Iu(t,n,a),t=t.sibling}function _l(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Sa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(_l(t,n,a),t=t.sibling;t!==null;)_l(t,n,a),t=t.sibling}function Em(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Mn(n,s,a),n[ln]=t,n[Ye]=a}catch(f){Ie(t,t.return,f)}}var Fi=!1,Je=!1,Fu=!1,Tm=typeof WeakSet=="function"?WeakSet:Set,mn=null;function R0(t,n){if(t=t.containerInfo,uf=Pl,t=Pd(t),zc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,T=-1,N=-1,Q=0,ft=0,pt=t,et=null;e:for(;;){for(var it;pt!==a||c!==0&&pt.nodeType!==3||(T=S+c),pt!==f||s!==0&&pt.nodeType!==3||(N=S+s),pt.nodeType===3&&(S+=pt.nodeValue.length),(it=pt.firstChild)!==null;)et=pt,pt=it;for(;;){if(pt===t)break e;if(et===a&&++Q===c&&(T=S),et===f&&++ft===s&&(N=S),(it=pt.nextSibling)!==null)break;pt=et,et=pt.parentNode}pt=it}a=T===-1||N===-1?null:{start:T,end:N}}else a=null}a=a||{start:0,end:0}}else a=null;for(ff={focusedElem:t,selectionRange:a},Pl=!1,mn=n;mn!==null;)if(n=mn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,mn=t;else for(;mn!==null;){switch(n=mn,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var ne=Ka(a.type,c,a.elementType===a.type);t=s.getSnapshotBeforeUpdate(ne,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(Jt){Ie(a,a.return,Jt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)pf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":pf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,mn=t;break}mn=n.return}}function Am(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:da(t,a),s&4&&Zs(5,a);break;case 1:if(da(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(S){Ie(a,a.return,S)}else{var c=Ka(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Ie(a,a.return,S)}}s&64&&xm(a),s&512&&js(a,a.return);break;case 3:if(da(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{sp(t,n)}catch(S){Ie(a,a.return,S)}}break;case 27:n===null&&s&4&&Em(a);case 26:case 5:da(t,a),n===null&&s&4&&Mm(a),s&512&&js(a,a.return);break;case 12:da(t,a);break;case 13:da(t,a),s&4&&Cm(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=B0.bind(null,a),tx(t,a))));break;case 22:if(s=a.memoizedState!==null||Fi,!s){n=n!==null&&n.memoizedState!==null||Je,c=Fi;var f=Je;Fi=s,(Je=n)&&!f?pa(t,a,(a.subtreeFlags&8772)!==0):da(t,a),Fi=c,Je=f}break;case 30:break;default:da(t,a)}}function bm(t){var n=t.alternate;n!==null&&(t.alternate=null,bm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&_r(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ke=null,Pn=!1;function Hi(t,n,a){for(a=a.child;a!==null;)Rm(t,n,a),a=a.sibling}function Rm(t,n,a){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(ut,a)}catch{}switch(a.tag){case 26:Je||yi(a,n),Hi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Je||yi(a,n);var s=ke,c=Pn;Sa(a.type)&&(ke=a.stateNode,Pn=!1),Hi(t,n,a),ao(a.stateNode),ke=s,Pn=c;break;case 5:Je||yi(a,n);case 6:if(s=ke,c=Pn,ke=null,Hi(t,n,a),ke=s,Pn=c,ke!==null)if(Pn)try{(ke.nodeType===9?ke.body:ke.nodeName==="HTML"?ke.ownerDocument.body:ke).removeChild(a.stateNode)}catch(f){Ie(a,n,f)}else try{ke.removeChild(a.stateNode)}catch(f){Ie(a,n,f)}break;case 18:ke!==null&&(Pn?(t=ke,mg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ho(t)):mg(ke,a.stateNode));break;case 4:s=ke,c=Pn,ke=a.stateNode.containerInfo,Pn=!0,Hi(t,n,a),ke=s,Pn=c;break;case 0:case 11:case 14:case 15:Je||ha(2,a,n),Je||ha(4,a,n),Hi(t,n,a);break;case 1:Je||(yi(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Sm(a,n,s)),Hi(t,n,a);break;case 21:Hi(t,n,a);break;case 22:Je=(s=Je)||a.memoizedState!==null,Hi(t,n,a),Je=s;break;default:Hi(t,n,a)}}function Cm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ho(t)}catch(a){Ie(n,n.return,a)}}function C0(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Tm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Tm),n;default:throw Error(r(435,t.tag))}}function Hu(t,n){var a=C0(t);n.forEach(function(s){var c=z0.bind(null,t,s);a.has(s)||(a.add(s),s.then(c,c))})}function kn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,S=n,T=S;t:for(;T!==null;){switch(T.tag){case 27:if(Sa(T.type)){ke=T.stateNode,Pn=!1;break t}break;case 5:ke=T.stateNode,Pn=!1;break t;case 3:case 4:ke=T.stateNode.containerInfo,Pn=!0;break t}T=T.return}if(ke===null)throw Error(r(160));Rm(f,S,c),ke=null,Pn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)wm(n,t),n=n.sibling}var ui=null;function wm(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:kn(n,t),Xn(t),s&4&&(ha(3,t,t.return),Zs(3,t),ha(5,t,t.return));break;case 1:kn(n,t),Xn(t),s&512&&(Je||a===null||yi(a,a.return)),s&64&&Fi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=ui;if(kn(n,t),Xn(t),s&512&&(Je||a===null||yi(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[xi]||f[ln]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),Mn(f,s,a),f[ln]=t,en(f),s=f;break t;case"link":var S=Eg("link","href",c).get(s+(a.href||""));if(S){for(var T=0;T<S.length;T++)if(f=S[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(T,1);break e}}f=c.createElement(s),Mn(f,s,a),c.head.appendChild(f);break;case"meta":if(S=Eg("meta","content",c).get(s+(a.content||""))){for(T=0;T<S.length;T++)if(f=S[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(T,1);break e}}f=c.createElement(s),Mn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[ln]=t,en(f),s=f}t.stateNode=s}else Tg(c,t.type,t.stateNode);else t.stateNode=yg(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Tg(c,t.type,t.stateNode):yg(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Bu(t,t.memoizedProps,a.memoizedProps)}break;case 27:kn(n,t),Xn(t),s&512&&(Je||a===null||yi(a,a.return)),a!==null&&s&4&&Bu(t,t.memoizedProps,a.memoizedProps);break;case 5:if(kn(n,t),Xn(t),s&512&&(Je||a===null||yi(a,a.return)),t.flags&32){c=t.stateNode;try{Ln(c,"")}catch(it){Ie(t,t.return,it)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,Bu(t,c,a!==null?a.memoizedProps:c)),s&1024&&(Fu=!0);break;case 6:if(kn(n,t),Xn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(it){Ie(t,t.return,it)}}break;case 3:if(Ll=null,c=ui,ui=Dl(n.containerInfo),kn(n,t),ui=c,Xn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{ho(n.containerInfo)}catch(it){Ie(t,t.return,it)}Fu&&(Fu=!1,Dm(t));break;case 4:s=ui,ui=Dl(t.stateNode.containerInfo),kn(n,t),Xn(t),ui=s;break;case 12:kn(n,t),Xn(t);break;case 13:kn(n,t),Xn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(qu=Ot()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Hu(t,s)));break;case 22:c=t.memoizedState!==null;var N=a!==null&&a.memoizedState!==null,Q=Fi,ft=Je;if(Fi=Q||c,Je=ft||N,kn(n,t),Je=ft,Fi=Q,Xn(t),s&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||N||Fi||Je||Qa(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){N=a=n;try{if(f=N.stateNode,c)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{T=N.stateNode;var pt=N.memoizedProps.style,et=pt!=null&&pt.hasOwnProperty("display")?pt.display:null;T.style.display=et==null||typeof et=="boolean"?"":(""+et).trim()}}catch(it){Ie(N,N.return,it)}}}else if(n.tag===6){if(a===null){N=n;try{N.stateNode.nodeValue=c?"":N.memoizedProps}catch(it){Ie(N,N.return,it)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Hu(t,a))));break;case 19:kn(n,t),Xn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Hu(t,s)));break;case 30:break;case 21:break;default:kn(n,t),Xn(t)}}function Xn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(ym(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=zu(t);_l(t,f,c);break;case 5:var S=a.stateNode;a.flags&32&&(Ln(S,""),a.flags&=-33);var T=zu(t);_l(t,T,S);break;case 3:case 4:var N=a.stateNode.containerInfo,Q=zu(t);Iu(t,Q,N);break;default:throw Error(r(161))}}catch(ft){Ie(t,t.return,ft)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Dm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Dm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function da(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Am(t,n.alternate,n),n=n.sibling}function Qa(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ha(4,n,n.return),Qa(n);break;case 1:yi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Sm(n,n.return,a),Qa(n);break;case 27:ao(n.stateNode);case 26:case 5:yi(n,n.return),Qa(n);break;case 22:n.memoizedState===null&&Qa(n);break;case 30:Qa(n);break;default:Qa(n)}t=t.sibling}}function pa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:pa(c,f,a),Zs(4,f);break;case 1:if(pa(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(Q){Ie(s,s.return,Q)}if(s=f,c=s.updateQueue,c!==null){var T=s.stateNode;try{var N=c.shared.hiddenCallbacks;if(N!==null)for(c.shared.hiddenCallbacks=null,c=0;c<N.length;c++)rp(N[c],T)}catch(Q){Ie(s,s.return,Q)}}a&&S&64&&xm(f),js(f,f.return);break;case 27:Em(f);case 26:case 5:pa(c,f,a),a&&s===null&&S&4&&Mm(f),js(f,f.return);break;case 12:pa(c,f,a);break;case 13:pa(c,f,a),a&&S&4&&Cm(c,f);break;case 22:f.memoizedState===null&&pa(c,f,a),js(f,f.return);break;case 30:break;default:pa(c,f,a)}n=n.sibling}}function Gu(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Os(a))}function Vu(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Os(t))}function Ei(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Um(t,n,a,s),n=n.sibling}function Um(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ei(t,n,a,s),c&2048&&Zs(9,n);break;case 1:Ei(t,n,a,s);break;case 3:Ei(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Os(t)));break;case 12:if(c&2048){Ei(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,S=f.id,T=f.onPostCommit;typeof T=="function"&&T(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(N){Ie(n,n.return,N)}}else Ei(t,n,a,s);break;case 13:Ei(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?Ei(t,n,a,s):Ks(t,n):f._visibility&2?Ei(t,n,a,s):(f._visibility|=2,zr(t,n,a,s,(n.subtreeFlags&10256)!==0)),c&2048&&Gu(S,n);break;case 24:Ei(t,n,a,s),c&2048&&Vu(n.alternate,n);break;default:Ei(t,n,a,s)}}function zr(t,n,a,s,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,S=n,T=a,N=s,Q=S.flags;switch(S.tag){case 0:case 11:case 15:zr(f,S,T,N,c),Zs(8,S);break;case 23:break;case 22:var ft=S.stateNode;S.memoizedState!==null?ft._visibility&2?zr(f,S,T,N,c):Ks(f,S):(ft._visibility|=2,zr(f,S,T,N,c)),c&&Q&2048&&Gu(S.alternate,S);break;case 24:zr(f,S,T,N,c),c&&Q&2048&&Vu(S.alternate,S);break;default:zr(f,S,T,N,c)}n=n.sibling}}function Ks(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:Ks(a,s),c&2048&&Gu(s.alternate,s);break;case 24:Ks(a,s),c&2048&&Vu(s.alternate,s);break;default:Ks(a,s)}n=n.sibling}}var Qs=8192;function Ir(t){if(t.subtreeFlags&Qs)for(t=t.child;t!==null;)Lm(t),t=t.sibling}function Lm(t){switch(t.tag){case 26:Ir(t),t.flags&Qs&&t.memoizedState!==null&&dx(ui,t.memoizedState,t.memoizedProps);break;case 5:Ir(t);break;case 3:case 4:var n=ui;ui=Dl(t.stateNode.containerInfo),Ir(t),ui=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=Qs,Qs=16777216,Ir(t),Qs=n):Ir(t));break;default:Ir(t)}}function Nm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Js(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];mn=s,Pm(s,t)}Nm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Om(t),t=t.sibling}function Om(t){switch(t.tag){case 0:case 11:case 15:Js(t),t.flags&2048&&ha(9,t,t.return);break;case 3:Js(t);break;case 12:Js(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,vl(t)):Js(t);break;default:Js(t)}}function vl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];mn=s,Pm(s,t)}Nm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ha(8,n,n.return),vl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,vl(n));break;default:vl(n)}t=t.sibling}}function Pm(t,n){for(;mn!==null;){var a=mn;switch(a.tag){case 0:case 11:case 15:ha(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Os(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,mn=s;else t:for(a=t;mn!==null;){s=mn;var c=s.sibling,f=s.return;if(bm(s),s===a){mn=null;break t}if(c!==null){c.return=f,mn=c;break t}mn=f}}}var w0={getCacheForType:function(t){var n=Tn(cn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},D0=typeof WeakMap=="function"?WeakMap:Map,Re=0,He=null,ge=null,Se=0,Ce=0,Wn=null,ma=!1,Fr=!1,ku=!1,Gi=0,Ke=0,ga=0,Ja=0,Xu=0,ei=0,Hr=0,$s=null,Bn=null,Wu=!1,qu=0,xl=1/0,Sl=null,_a=null,Sn=0,va=null,Gr=null,Vr=0,Yu=0,Zu=null,Bm=null,to=0,ju=null;function qn(){if((Re&2)!==0&&Se!==0)return Se&-Se;if(O.T!==null){var t=wr;return t!==0?t:nf()}return Me()}function zm(){ei===0&&(ei=(Se&536870912)===0||Ae?k():536870912);var t=ti.current;return t!==null&&(t.flags|=32),ei}function Yn(t,n,a){(t===He&&(Ce===2||Ce===9)||t.cancelPendingCommit!==null)&&(kr(t,0),xa(t,Se,ei,!1)),Bt(t,a),((Re&2)===0||t!==He)&&(t===He&&((Re&2)===0&&(Ja|=a),Ke===4&&xa(t,Se,ei,!1)),Ti(t))}function Im(t,n,a){if((Re&6)!==0)throw Error(r(327));var s=!a&&(n&124)===0&&(n&t.expiredLanes)===0||Ct(t,n),c=s?N0(t,n):Ju(t,n,!0),f=s;do{if(c===0){Fr&&!s&&xa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!U0(a)){c=Ju(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var T=t;c=$s;var N=T.current.memoizedState.isDehydrated;if(N&&(kr(T,S).flags|=256),S=Ju(T,S,!1),S!==2){if(ku&&!N){T.errorRecoveryDisabledLanes|=f,Ja|=f,c=4;break t}f=Bn,Bn=c,f!==null&&(Bn===null?Bn=f:Bn.push.apply(Bn,f))}c=S}if(f=!1,c!==2)continue}}if(c===1){kr(t,0),xa(t,n,0,!0);break}t:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:xa(s,n,ei,!ma);break t;case 2:Bn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=qu+300-Ot(),10<c)){if(xa(s,n,ei,!ma),Vt(s,0,!0)!==0)break t;s.timeoutHandle=dg(Fm.bind(null,s,a,Bn,Sl,Wu,n,ei,Ja,Hr,ma,f,2,-0,0),c);break t}Fm(s,a,Bn,Sl,Wu,n,ei,Ja,Hr,ma,f,0,-0,0)}}break}while(!0);Ti(t)}function Fm(t,n,a,s,c,f,S,T,N,Q,ft,pt,et,it){if(t.timeoutHandle=-1,pt=n.subtreeFlags,(pt&8192||(pt&16785408)===16785408)&&(oo={stylesheets:null,count:0,unsuspend:hx},Lm(n),pt=px(),pt!==null)){t.cancelPendingCommit=pt(qm.bind(null,t,n,f,a,s,c,S,T,N,ft,1,et,it)),xa(t,f,S,!Q);return}qm(t,n,f,a,s,c,S,T,N)}function U0(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Gn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function xa(t,n,a,s){n&=~Xu,n&=~Ja,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-Pt(c),S=1<<f;s[f]=-1,c&=~S}a!==0&&gt(t,a,n)}function Ml(){return(Re&6)===0?(eo(0),!1):!0}function Ku(){if(ge!==null){if(Ce===0)var t=ge.return;else t=ge,Ni=qa=null,du(t),Pr=null,Ws=0,t=ge;for(;t!==null;)vm(t.alternate,t),t=t.return;ge=null}}function kr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,j0(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ku(),He=t,ge=a=Di(t.current,null),Se=n,Ce=0,Wn=null,ma=!1,Fr=Ct(t,n),ku=!1,Hr=ei=Xu=Ja=ga=Ke=0,Bn=$s=null,Wu=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-Pt(s),f=1<<c;n|=t[c],s&=~f}return Gi=n,ko(),a}function Hm(t,n){de=null,O.H=ll,n===Bs||n===Jo?(n=ip(),Ce=3):n===tp?(n=ip(),Ce=4):Ce=n===am?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Wn=n,ge===null&&(Ke=1,dl(t,Kn(n,t.current)))}function Gm(){var t=O.H;return O.H=ll,t===null?ll:t}function Vm(){var t=O.A;return O.A=w0,t}function Qu(){Ke=4,ma||(Se&4194048)!==Se&&ti.current!==null||(Fr=!0),(ga&134217727)===0&&(Ja&134217727)===0||He===null||xa(He,Se,ei,!1)}function Ju(t,n,a){var s=Re;Re|=2;var c=Gm(),f=Vm();(He!==t||Se!==n)&&(Sl=null,kr(t,n)),n=!1;var S=Ke;t:do try{if(Ce!==0&&ge!==null){var T=ge,N=Wn;switch(Ce){case 8:Ku(),S=6;break t;case 3:case 2:case 9:case 6:ti.current===null&&(n=!0);var Q=Ce;if(Ce=0,Wn=null,Xr(t,T,N,Q),a&&Fr){S=0;break t}break;default:Q=Ce,Ce=0,Wn=null,Xr(t,T,N,Q)}}L0(),S=Ke;break}catch(ft){Hm(t,ft)}while(!0);return n&&t.shellSuspendCounter++,Ni=qa=null,Re=s,O.H=c,O.A=f,ge===null&&(He=null,Se=0,ko()),S}function L0(){for(;ge!==null;)km(ge)}function N0(t,n){var a=Re;Re|=2;var s=Gm(),c=Vm();He!==t||Se!==n?(Sl=null,xl=Ot()+500,kr(t,n)):Fr=Ct(t,n);t:do try{if(Ce!==0&&ge!==null){n=ge;var f=Wn;e:switch(Ce){case 1:Ce=0,Wn=null,Xr(t,n,f,1);break;case 2:case 9:if(ep(f)){Ce=0,Wn=null,Xm(n);break}n=function(){Ce!==2&&Ce!==9||He!==t||(Ce=7),Ti(t)},f.then(n,n);break t;case 3:Ce=7;break t;case 4:Ce=5;break t;case 7:ep(f)?(Ce=0,Wn=null,Xm(n)):(Ce=0,Wn=null,Xr(t,n,f,7));break;case 5:var S=null;switch(ge.tag){case 26:S=ge.memoizedState;case 5:case 27:var T=ge;if(!S||Ag(S)){Ce=0,Wn=null;var N=T.sibling;if(N!==null)ge=N;else{var Q=T.return;Q!==null?(ge=Q,yl(Q)):ge=null}break e}}Ce=0,Wn=null,Xr(t,n,f,5);break;case 6:Ce=0,Wn=null,Xr(t,n,f,6);break;case 8:Ku(),Ke=6;break t;default:throw Error(r(462))}}O0();break}catch(ft){Hm(t,ft)}while(!0);return Ni=qa=null,O.H=s,O.A=c,Re=a,ge!==null?0:(He=null,Se=0,ko(),Ke)}function O0(){for(;ge!==null&&!ae();)km(ge)}function km(t){var n=gm(t.alternate,t,Gi);t.memoizedProps=t.pendingProps,n===null?yl(t):ge=n}function Xm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=um(a,n,n.pendingProps,n.type,void 0,Se);break;case 11:n=um(a,n,n.pendingProps,n.type.render,n.ref,Se);break;case 5:du(n);default:vm(a,n),n=ge=Wd(n,Gi),n=gm(a,n,Gi)}t.memoizedProps=t.pendingProps,n===null?yl(t):ge=n}function Xr(t,n,a,s){Ni=qa=null,du(n),Pr=null,Ws=0;var c=n.return;try{if(E0(t,c,n,a,Se)){Ke=1,dl(t,Kn(a,t.current)),ge=null;return}}catch(f){if(c!==null)throw ge=c,f;Ke=1,dl(t,Kn(a,t.current)),ge=null;return}n.flags&32768?(Ae||s===1?t=!0:Fr||(Se&536870912)!==0?t=!1:(ma=t=!0,(s===2||s===9||s===3||s===6)&&(s=ti.current,s!==null&&s.tag===13&&(s.flags|=16384))),Wm(n,t)):yl(n)}function yl(t){var n=t;do{if((n.flags&32768)!==0){Wm(n,ma);return}t=n.return;var a=A0(n.alternate,n,Gi);if(a!==null){ge=a;return}if(n=n.sibling,n!==null){ge=n;return}ge=n=t}while(n!==null);Ke===0&&(Ke=5)}function Wm(t,n){do{var a=b0(t.alternate,t);if(a!==null){a.flags&=32767,ge=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){ge=t;return}ge=t=a}while(t!==null);Ke=6,ge=null}function qm(t,n,a,s,c,f,S,T,N){t.cancelPendingCommit=null;do El();while(Sn!==0);if((Re&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Vc,yt(t,a,f,S,T,N),t===He&&(ge=He=null,Se=0),Gr=n,va=t,Vr=a,Yu=f,Zu=c,Bm=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,I0(Xe,function(){return Qm(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=O.T,O.T=null,c=Z.p,Z.p=2,S=Re,Re|=4;try{R0(t,n,a)}finally{Re=S,Z.p=c,O.T=s}}Sn=1,Ym(),Zm(),jm()}}function Ym(){if(Sn===1){Sn=0;var t=va,n=Gr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var s=Z.p;Z.p=2;var c=Re;Re|=4;try{wm(n,t);var f=ff,S=Pd(t.containerInfo),T=f.focusedElem,N=f.selectionRange;if(S!==T&&T&&T.ownerDocument&&Od(T.ownerDocument.documentElement,T)){if(N!==null&&zc(T)){var Q=N.start,ft=N.end;if(ft===void 0&&(ft=Q),"selectionStart"in T)T.selectionStart=Q,T.selectionEnd=Math.min(ft,T.value.length);else{var pt=T.ownerDocument||document,et=pt&&pt.defaultView||window;if(et.getSelection){var it=et.getSelection(),ne=T.textContent.length,Jt=Math.min(N.start,ne),Oe=N.end===void 0?Jt:Math.min(N.end,ne);!it.extend&&Jt>Oe&&(S=Oe,Oe=Jt,Jt=S);var W=Nd(T,Jt),H=Nd(T,Oe);if(W&&H&&(it.rangeCount!==1||it.anchorNode!==W.node||it.anchorOffset!==W.offset||it.focusNode!==H.node||it.focusOffset!==H.offset)){var K=pt.createRange();K.setStart(W.node,W.offset),it.removeAllRanges(),Jt>Oe?(it.addRange(K),it.extend(H.node,H.offset)):(K.setEnd(H.node,H.offset),it.addRange(K))}}}}for(pt=[],it=T;it=it.parentNode;)it.nodeType===1&&pt.push({element:it,left:it.scrollLeft,top:it.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<pt.length;T++){var ht=pt[T];ht.element.scrollLeft=ht.left,ht.element.scrollTop=ht.top}}Pl=!!uf,ff=uf=null}finally{Re=c,Z.p=s,O.T=a}}t.current=n,Sn=2}}function Zm(){if(Sn===2){Sn=0;var t=va,n=Gr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var s=Z.p;Z.p=2;var c=Re;Re|=4;try{Am(t,n.alternate,n)}finally{Re=c,Z.p=s,O.T=a}}Sn=3}}function jm(){if(Sn===4||Sn===3){Sn=0,ee();var t=va,n=Gr,a=Vr,s=Bm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Sn=5:(Sn=0,Gr=va=null,Km(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(_a=null),be(a),n=n.stateNode,dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(ut,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=O.T,c=Z.p,Z.p=2,O.T=null;try{for(var f=t.onRecoverableError,S=0;S<s.length;S++){var T=s[S];f(T.value,{componentStack:T.stack})}}finally{O.T=n,Z.p=c}}(Vr&3)!==0&&El(),Ti(t),c=t.pendingLanes,(a&4194090)!==0&&(c&42)!==0?t===ju?to++:(to=0,ju=t):to=0,eo(0)}}function Km(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Os(n)))}function El(t){return Ym(),Zm(),jm(),Qm()}function Qm(){if(Sn!==5)return!1;var t=va,n=Yu;Yu=0;var a=be(Vr),s=O.T,c=Z.p;try{Z.p=32>a?32:a,O.T=null,a=Zu,Zu=null;var f=va,S=Vr;if(Sn=0,Gr=va=null,Vr=0,(Re&6)!==0)throw Error(r(331));var T=Re;if(Re|=4,Om(f.current),Um(f,f.current,S,a),Re=T,eo(0,!1),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(ut,f)}catch{}return!0}finally{Z.p=c,O.T=s,Km(t,n)}}function Jm(t,n,a){n=Kn(a,n),n=Ru(t.stateNode,n,2),t=la(t,n,2),t!==null&&(Bt(t,2),Ti(t))}function Ie(t,n,a){if(t.tag===3)Jm(t,t,a);else for(;n!==null;){if(n.tag===3){Jm(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(_a===null||!_a.has(s))){t=Kn(a,t),a=nm(2),s=la(n,a,2),s!==null&&(im(a,s,n,t),Bt(s,2),Ti(s));break}}n=n.return}}function $u(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new D0;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(ku=!0,c.add(a),t=P0.bind(null,t,n,a),n.then(t,t))}function P0(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,He===t&&(Se&a)===a&&(Ke===4||Ke===3&&(Se&62914560)===Se&&300>Ot()-qu?(Re&2)===0&&kr(t,0):Xu|=a,Hr===Se&&(Hr=0)),Ti(t)}function $m(t,n){n===0&&(n=Tt()),t=Ar(t,n),t!==null&&(Bt(t,n),Ti(t))}function B0(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),$m(t,a)}function z0(t,n){var a=0;switch(t.tag){case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),$m(t,a)}function I0(t,n){return B(t,n)}var Tl=null,Wr=null,tf=!1,Al=!1,ef=!1,$a=0;function Ti(t){t!==Wr&&t.next===null&&(Wr===null?Tl=Wr=t:Wr=Wr.next=t),Al=!0,tf||(tf=!0,H0())}function eo(t,n){if(!ef&&Al){ef=!0;do for(var a=!1,s=Tl;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var S=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-Pt(42|t)+1)-1,f&=c&~(S&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,ig(s,f))}else f=Se,f=Vt(s,s===He?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Ct(s,f)||(a=!0,ig(s,f));s=s.next}while(a);ef=!1}}function F0(){tg()}function tg(){Al=tf=!1;var t=0;$a!==0&&(Z0()&&(t=$a),$a=0);for(var n=Ot(),a=null,s=Tl;s!==null;){var c=s.next,f=eg(s,n);f===0?(s.next=null,a===null?Tl=c:a.next=c,c===null&&(Wr=a)):(a=s,(t!==0||(f&3)!==0)&&(Al=!0)),s=c}eo(t)}function eg(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var S=31-Pt(f),T=1<<S,N=c[S];N===-1?((T&a)===0||(T&s)!==0)&&(c[S]=se(T,n)):N<=n&&(t.expiredLanes|=T),f&=~T}if(n=He,a=Se,a=Vt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Ce===2||Ce===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&De(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ct(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&De(s),be(a)){case 2:case 8:a=re;break;case 32:a=Xe;break;case 268435456:a=L;break;default:a=Xe}return s=ng.bind(null,t),a=B(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&De(s),t.callbackPriority=2,t.callbackNode=null,2}function ng(t,n){if(Sn!==0&&Sn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(El()&&t.callbackNode!==a)return null;var s=Se;return s=Vt(t,t===He?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(Im(t,s,n),eg(t,Ot()),t.callbackNode!=null&&t.callbackNode===a?ng.bind(null,t):null)}function ig(t,n){if(El())return null;Im(t,n,!0)}function H0(){K0(function(){(Re&6)!==0?B(Gt,F0):tg()})}function nf(){return $a===0&&($a=k()),$a}function ag(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Bo(""+t)}function rg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function G0(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=ag((c[Ye]||null).action),S=s.submitter;S&&(n=(n=S[Ye]||null)?ag(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var T=new Ho("action","action",null,s,c);t.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if($a!==0){var N=S?rg(c,S):new FormData(c);yu(a,{pending:!0,data:N,method:c.method,action:f},null,N)}}else typeof f=="function"&&(T.preventDefault(),N=S?rg(c,S):new FormData(c),yu(a,{pending:!0,data:N,method:c.method,action:f},f,N))},currentTarget:c}]})}}for(var af=0;af<Gc.length;af++){var rf=Gc[af],V0=rf.toLowerCase(),k0=rf[0].toUpperCase()+rf.slice(1);ci(V0,"on"+k0)}ci(Id,"onAnimationEnd"),ci(Fd,"onAnimationIteration"),ci(Hd,"onAnimationStart"),ci("dblclick","onDoubleClick"),ci("focusin","onFocus"),ci("focusout","onBlur"),ci(s0,"onTransitionRun"),ci(o0,"onTransitionStart"),ci(l0,"onTransitionCancel"),ci(Gd,"onTransitionEnd"),X("onMouseEnter",["mouseout","mouseover"]),X("onMouseLeave",["mouseout","mouseover"]),X("onPointerEnter",["pointerout","pointerover"]),X("onPointerLeave",["pointerout","pointerover"]),A("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),A("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),A("onBeforeInput",["compositionend","keypress","textInput","paste"]),A("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),A("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),A("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var no="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),X0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(no));function sg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var S=s.length-1;0<=S;S--){var T=s[S],N=T.instance,Q=T.currentTarget;if(T=T.listener,N!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=Q;try{f(c)}catch(ft){hl(ft)}c.currentTarget=null,f=N}else for(S=0;S<s.length;S++){if(T=s[S],N=T.instance,Q=T.currentTarget,T=T.listener,N!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=Q;try{f(c)}catch(ft){hl(ft)}c.currentTarget=null,f=N}}}}function _e(t,n){var a=n[mr];a===void 0&&(a=n[mr]=new Set);var s=t+"__bubble";a.has(s)||(og(n,t,2,!1),a.add(s))}function sf(t,n,a){var s=0;n&&(s|=4),og(a,t,s,n)}var bl="_reactListening"+Math.random().toString(36).slice(2);function of(t){if(!t[bl]){t[bl]=!0,Oo.forEach(function(a){a!=="selectionchange"&&(X0.has(a)||sf(a,!1,t),sf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[bl]||(n[bl]=!0,sf("selectionchange",!1,n))}}function og(t,n,a,s){switch(Ug(n)){case 2:var c=_x;break;case 8:c=vx;break;default:c=Mf}a=c.bind(null,n,a,t),c=void 0,!Cc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function lf(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var S=s.tag;if(S===3||S===4){var T=s.stateNode.containerInfo;if(T===c)break;if(S===4)for(S=s.return;S!==null;){var N=S.tag;if((N===3||N===4)&&S.stateNode.containerInfo===c)return;S=S.return}for(;T!==null;){if(S=Ci(T),S===null)return;if(N=S.tag,N===5||N===6||N===26||N===27){s=f=S;continue t}T=T.parentNode}}s=s.return}pd(function(){var Q=f,ft=bc(a),pt=[];t:{var et=Vd.get(t);if(et!==void 0){var it=Ho,ne=t;switch(t){case"keypress":if(Io(a)===0)break t;case"keydown":case"keyup":it=Iv;break;case"focusin":ne="focus",it=Lc;break;case"focusout":ne="blur",it=Lc;break;case"beforeblur":case"afterblur":it=Lc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":it=_d;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":it=bv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":it=Gv;break;case Id:case Fd:case Hd:it=wv;break;case Gd:it=kv;break;case"scroll":case"scrollend":it=Tv;break;case"wheel":it=Wv;break;case"copy":case"cut":case"paste":it=Uv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":it=xd;break;case"toggle":case"beforetoggle":it=Yv}var Jt=(n&4)!==0,Oe=!Jt&&(t==="scroll"||t==="scrollend"),W=Jt?et!==null?et+"Capture":null:et;Jt=[];for(var H=Q,K;H!==null;){var ht=H;if(K=ht.stateNode,ht=ht.tag,ht!==5&&ht!==26&&ht!==27||K===null||W===null||(ht=Ms(H,W),ht!=null&&Jt.push(io(H,ht,K))),Oe)break;H=H.return}0<Jt.length&&(et=new it(et,ne,null,a,ft),pt.push({event:et,listeners:Jt}))}}if((n&7)===0){t:{if(et=t==="mouseover"||t==="pointerover",it=t==="mouseout"||t==="pointerout",et&&a!==Ac&&(ne=a.relatedTarget||a.fromElement)&&(Ci(ne)||ne[vi]))break t;if((it||et)&&(et=ft.window===ft?ft:(et=ft.ownerDocument)?et.defaultView||et.parentWindow:window,it?(ne=a.relatedTarget||a.toElement,it=Q,ne=ne?Ci(ne):null,ne!==null&&(Oe=u(ne),Jt=ne.tag,ne!==Oe||Jt!==5&&Jt!==27&&Jt!==6)&&(ne=null)):(it=null,ne=Q),it!==ne)){if(Jt=_d,ht="onMouseLeave",W="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(Jt=xd,ht="onPointerLeave",W="onPointerEnter",H="pointer"),Oe=it==null?et:za(it),K=ne==null?et:za(ne),et=new Jt(ht,H+"leave",it,a,ft),et.target=Oe,et.relatedTarget=K,ht=null,Ci(ft)===Q&&(Jt=new Jt(W,H+"enter",ne,a,ft),Jt.target=K,Jt.relatedTarget=Oe,ht=Jt),Oe=ht,it&&ne)e:{for(Jt=it,W=ne,H=0,K=Jt;K;K=qr(K))H++;for(K=0,ht=W;ht;ht=qr(ht))K++;for(;0<H-K;)Jt=qr(Jt),H--;for(;0<K-H;)W=qr(W),K--;for(;H--;){if(Jt===W||W!==null&&Jt===W.alternate)break e;Jt=qr(Jt),W=qr(W)}Jt=null}else Jt=null;it!==null&&lg(pt,et,it,Jt,!1),ne!==null&&Oe!==null&&lg(pt,Oe,ne,Jt,!0)}}t:{if(et=Q?za(Q):window,it=et.nodeName&&et.nodeName.toLowerCase(),it==="select"||it==="input"&&et.type==="file")var It=Rd;else if(Ad(et))if(Cd)It=i0;else{It=e0;var pe=t0}else it=et.nodeName,!it||it.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?Q&&Tc(Q.elementType)&&(It=Rd):It=n0;if(It&&(It=It(t,Q))){bd(pt,It,a,ft);break t}pe&&pe(t,et,Q),t==="focusout"&&Q&&et.type==="number"&&Q.memoizedProps.value!=null&&En(et,"number",et.value)}switch(pe=Q?za(Q):window,t){case"focusin":(Ad(pe)||pe.contentEditable==="true")&&(yr=pe,Ic=Q,ws=null);break;case"focusout":ws=Ic=yr=null;break;case"mousedown":Fc=!0;break;case"contextmenu":case"mouseup":case"dragend":Fc=!1,Bd(pt,a,ft);break;case"selectionchange":if(r0)break;case"keydown":case"keyup":Bd(pt,a,ft)}var Yt;if(Oc)t:{switch(t){case"compositionstart":var te="onCompositionStart";break t;case"compositionend":te="onCompositionEnd";break t;case"compositionupdate":te="onCompositionUpdate";break t}te=void 0}else Mr?Ed(t,a)&&(te="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(te="onCompositionStart");te&&(Sd&&a.locale!=="ko"&&(Mr||te!=="onCompositionStart"?te==="onCompositionEnd"&&Mr&&(Yt=md()):(aa=ft,wc="value"in aa?aa.value:aa.textContent,Mr=!0)),pe=Rl(Q,te),0<pe.length&&(te=new vd(te,t,null,a,ft),pt.push({event:te,listeners:pe}),Yt?te.data=Yt:(Yt=Td(a),Yt!==null&&(te.data=Yt)))),(Yt=jv?Kv(t,a):Qv(t,a))&&(te=Rl(Q,"onBeforeInput"),0<te.length&&(pe=new vd("onBeforeInput","beforeinput",null,a,ft),pt.push({event:pe,listeners:te}),pe.data=Yt)),G0(pt,t,Q,a,ft)}sg(pt,n)})}function io(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Rl(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Ms(t,a),c!=null&&s.unshift(io(t,c,f)),c=Ms(t,n),c!=null&&s.push(io(t,c,f))),t.tag===3)return s;t=t.return}return[]}function qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function lg(t,n,a,s,c){for(var f=n._reactName,S=[];a!==null&&a!==s;){var T=a,N=T.alternate,Q=T.stateNode;if(T=T.tag,N!==null&&N===s)break;T!==5&&T!==26&&T!==27||Q===null||(N=Q,c?(Q=Ms(a,f),Q!=null&&S.unshift(io(a,Q,N))):c||(Q=Ms(a,f),Q!=null&&S.push(io(a,Q,N)))),a=a.return}S.length!==0&&t.push({event:n,listeners:S})}var W0=/\r\n?/g,q0=/\u0000|\uFFFD/g;function cg(t){return(typeof t=="string"?t:""+t).replace(W0,`
`).replace(q0,"")}function ug(t,n){return n=cg(n),cg(t)===n}function Cl(){}function Ne(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Ln(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Ln(t,""+s);break;case"className":zt(t,"class",s);break;case"tabIndex":zt(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":zt(t,a,s);break;case"style":hd(t,s,f);break;case"data":if(n!=="object"){zt(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Bo(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ne(t,n,"name",c.name,c,null),Ne(t,n,"formEncType",c.formEncType,c,null),Ne(t,n,"formMethod",c.formMethod,c,null),Ne(t,n,"formTarget",c.formTarget,c,null)):(Ne(t,n,"encType",c.encType,c,null),Ne(t,n,"method",c.method,c,null),Ne(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Bo(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Cl);break;case"onScroll":s!=null&&_e("scroll",t);break;case"onScrollEnd":s!=null&&_e("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Bo(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":_e("beforetoggle",t),_e("toggle",t),wt(t,"popover",s);break;case"xlinkActuate":Lt(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Lt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Lt(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Lt(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Lt(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Lt(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Lt(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Lt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Lt(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":wt(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=yv.get(a)||a,wt(t,a,s))}}function cf(t,n,a,s,c,f){switch(a){case"style":hd(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?Ln(t,s):(typeof s=="number"||typeof s=="bigint")&&Ln(t,""+s);break;case"onScroll":s!=null&&_e("scroll",t);break;case"onScrollEnd":s!=null&&_e("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Cl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Po.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[Ye]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):wt(t,a,s)}}}function Mn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",t),_e("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ne(t,n,f,S,a,null)}}c&&Ne(t,n,"srcSet",a.srcSet,a,null),s&&Ne(t,n,"src",a.src,a,null);return;case"input":_e("invalid",t);var T=f=S=c=null,N=null,Q=null;for(s in a)if(a.hasOwnProperty(s)){var ft=a[s];if(ft!=null)switch(s){case"name":c=ft;break;case"type":S=ft;break;case"checked":N=ft;break;case"defaultChecked":Q=ft;break;case"value":f=ft;break;case"defaultValue":T=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(r(137,n));break;default:Ne(t,n,s,ft,a,null)}}wn(t,f,T,N,Q,S,c,!1),me(t);return;case"select":_e("invalid",t),s=S=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":S=T;break;case"multiple":s=T;default:Ne(t,n,c,T,a,null)}n=f,a=S,t.multiple=!!s,n!=null?Ze(t,!!s,n,!1):a!=null&&Ze(t,!!s,a,!0);return;case"textarea":_e("invalid",t),f=c=s=null;for(S in a)if(a.hasOwnProperty(S)&&(T=a[S],T!=null))switch(S){case"value":s=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Ne(t,n,S,T,a,null)}vr(t,s,c,f),me(t);return;case"option":for(N in a)if(a.hasOwnProperty(N)&&(s=a[N],s!=null))switch(N){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ne(t,n,N,s,a,null)}return;case"dialog":_e("beforetoggle",t),_e("toggle",t),_e("cancel",t),_e("close",t);break;case"iframe":case"object":_e("load",t);break;case"video":case"audio":for(s=0;s<no.length;s++)_e(no[s],t);break;case"image":_e("error",t),_e("load",t);break;case"details":_e("toggle",t);break;case"embed":case"source":case"link":_e("error",t),_e("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(s=a[Q],s!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ne(t,n,Q,s,a,null)}return;default:if(Tc(n)){for(ft in a)a.hasOwnProperty(ft)&&(s=a[ft],s!==void 0&&cf(t,n,ft,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Ne(t,n,T,s,a,null))}function Y0(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,S=null,T=null,N=null,Q=null,ft=null;for(it in a){var pt=a[it];if(a.hasOwnProperty(it)&&pt!=null)switch(it){case"checked":break;case"value":break;case"defaultValue":N=pt;default:s.hasOwnProperty(it)||Ne(t,n,it,null,s,pt)}}for(var et in s){var it=s[et];if(pt=a[et],s.hasOwnProperty(et)&&(it!=null||pt!=null))switch(et){case"type":f=it;break;case"name":c=it;break;case"checked":Q=it;break;case"defaultChecked":ft=it;break;case"value":S=it;break;case"defaultValue":T=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:it!==pt&&Ne(t,n,et,it,s,pt)}}ze(t,S,T,N,Q,ft,f,c);return;case"select":it=S=T=et=null;for(f in a)if(N=a[f],a.hasOwnProperty(f)&&N!=null)switch(f){case"value":break;case"multiple":it=N;default:s.hasOwnProperty(f)||Ne(t,n,f,null,s,N)}for(c in s)if(f=s[c],N=a[c],s.hasOwnProperty(c)&&(f!=null||N!=null))switch(c){case"value":et=f;break;case"defaultValue":T=f;break;case"multiple":S=f;default:f!==N&&Ne(t,n,c,f,s,N)}n=T,a=S,s=it,et!=null?Ze(t,!!a,et,!1):!!s!=!!a&&(n!=null?Ze(t,!!a,n,!0):Ze(t,!!a,a?[]:"",!1));return;case"textarea":it=et=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ne(t,n,T,null,s,c)}for(S in s)if(c=s[S],f=a[S],s.hasOwnProperty(S)&&(c!=null||f!=null))switch(S){case"value":et=c;break;case"defaultValue":it=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Ne(t,n,S,c,s,f)}vn(t,et,it);return;case"option":for(var ne in a)if(et=a[ne],a.hasOwnProperty(ne)&&et!=null&&!s.hasOwnProperty(ne))switch(ne){case"selected":t.selected=!1;break;default:Ne(t,n,ne,null,s,et)}for(N in s)if(et=s[N],it=a[N],s.hasOwnProperty(N)&&et!==it&&(et!=null||it!=null))switch(N){case"selected":t.selected=et&&typeof et!="function"&&typeof et!="symbol";break;default:Ne(t,n,N,et,s,it)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in a)et=a[Jt],a.hasOwnProperty(Jt)&&et!=null&&!s.hasOwnProperty(Jt)&&Ne(t,n,Jt,null,s,et);for(Q in s)if(et=s[Q],it=a[Q],s.hasOwnProperty(Q)&&et!==it&&(et!=null||it!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(r(137,n));break;default:Ne(t,n,Q,et,s,it)}return;default:if(Tc(n)){for(var Oe in a)et=a[Oe],a.hasOwnProperty(Oe)&&et!==void 0&&!s.hasOwnProperty(Oe)&&cf(t,n,Oe,void 0,s,et);for(ft in s)et=s[ft],it=a[ft],!s.hasOwnProperty(ft)||et===it||et===void 0&&it===void 0||cf(t,n,ft,et,s,it);return}}for(var W in a)et=a[W],a.hasOwnProperty(W)&&et!=null&&!s.hasOwnProperty(W)&&Ne(t,n,W,null,s,et);for(pt in s)et=s[pt],it=a[pt],!s.hasOwnProperty(pt)||et===it||et==null&&it==null||Ne(t,n,pt,et,s,it)}var uf=null,ff=null;function wl(t){return t.nodeType===9?t:t.ownerDocument}function fg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function hg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function hf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var df=null;function Z0(){var t=window.event;return t&&t.type==="popstate"?t===df?!1:(df=t,!0):(df=null,!1)}var dg=typeof setTimeout=="function"?setTimeout:void 0,j0=typeof clearTimeout=="function"?clearTimeout:void 0,pg=typeof Promise=="function"?Promise:void 0,K0=typeof queueMicrotask=="function"?queueMicrotask:typeof pg<"u"?function(t){return pg.resolve(null).then(t).catch(Q0)}:dg;function Q0(t){setTimeout(function(){throw t})}function Sa(t){return t==="head"}function mg(t,n){var a=n,s=0,c=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<s&&8>s){a=s;var S=t.ownerDocument;if(a&1&&ao(S.documentElement),a&2&&ao(S.body),a&4)for(a=S.head,ao(a),S=a.firstChild;S;){var T=S.nextSibling,N=S.nodeName;S[xi]||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=T}}if(c===0){t.removeChild(f),ho(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:s=a.charCodeAt(0)-48;else s=0;a=f}while(a);ho(n)}function pf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":pf(a),_r(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function J0(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[xi])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=fi(t.nextSibling),t===null)break}return null}function $0(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=fi(t.nextSibling),t===null))return null;return t}function mf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function tx(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function fi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var gf=null;function gg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function _g(t,n,a){switch(n=wl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function ao(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);_r(t)}var ni=new Map,vg=new Set;function Dl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Vi=Z.d;Z.d={f:ex,r:nx,D:ix,C:ax,L:rx,m:sx,X:lx,S:ox,M:cx};function ex(){var t=Vi.f(),n=Ml();return t||n}function nx(t){var n=na(t);n!==null&&n.tag===5&&n.type==="form"?Ip(n):Vi.r(t)}var Yr=typeof document>"u"?null:document;function xg(t,n,a){var s=Yr;if(s&&typeof n=="string"&&n){var c=dn(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),vg.has(c)||(vg.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Mn(n,"link",t),en(n),s.head.appendChild(n)))}}function ix(t){Vi.D(t),xg("dns-prefetch",t,null)}function ax(t,n){Vi.C(t,n),xg("preconnect",t,n)}function rx(t,n,a){Vi.L(t,n,a);var s=Yr;if(s&&t&&n){var c='link[rel="preload"][as="'+dn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+dn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+dn(a.imageSizes)+'"]')):c+='[href="'+dn(t)+'"]';var f=c;switch(n){case"style":f=Zr(t);break;case"script":f=jr(t)}ni.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ni.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(ro(f))||n==="script"&&s.querySelector(so(f))||(n=s.createElement("link"),Mn(n,"link",t),en(n),s.head.appendChild(n)))}}function sx(t,n){Vi.m(t,n);var a=Yr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+dn(s)+'"][href="'+dn(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=jr(t)}if(!ni.has(f)&&(t=g({rel:"modulepreload",href:t},n),ni.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(so(f)))return}s=a.createElement("link"),Mn(s,"link",t),en(s),a.head.appendChild(s)}}}function ox(t,n,a){Vi.S(t,n,a);var s=Yr;if(s&&t){var c=ia(s).hoistableStyles,f=Zr(t);n=n||"default";var S=c.get(f);if(!S){var T={loading:0,preload:null};if(S=s.querySelector(ro(f)))T.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ni.get(f))&&_f(t,a);var N=S=s.createElement("link");en(N),Mn(N,"link",t),N._p=new Promise(function(Q,ft){N.onload=Q,N.onerror=ft}),N.addEventListener("load",function(){T.loading|=1}),N.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Ul(S,n,s)}S={type:"stylesheet",instance:S,count:1,state:T},c.set(f,S)}}}function lx(t,n){Vi.X(t,n);var a=Yr;if(a&&t){var s=ia(a).hoistableScripts,c=jr(t),f=s.get(c);f||(f=a.querySelector(so(c)),f||(t=g({src:t,async:!0},n),(n=ni.get(c))&&vf(t,n),f=a.createElement("script"),en(f),Mn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function cx(t,n){Vi.M(t,n);var a=Yr;if(a&&t){var s=ia(a).hoistableScripts,c=jr(t),f=s.get(c);f||(f=a.querySelector(so(c)),f||(t=g({src:t,async:!0,type:"module"},n),(n=ni.get(c))&&vf(t,n),f=a.createElement("script"),en(f),Mn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Sg(t,n,a,s){var c=(c=tt.current)?Dl(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Zr(a.href),a=ia(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Zr(a.href);var f=ia(c).hoistableStyles,S=f.get(t);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,S),(f=c.querySelector(ro(t)))&&!f._p&&(S.instance=f,S.state.loading=5),ni.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ni.set(t,a),f||ux(c,t,a,S.state))),n&&s===null)throw Error(r(528,""));return S}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=jr(a),a=ia(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Zr(t){return'href="'+dn(t)+'"'}function ro(t){return'link[rel="stylesheet"]['+t+"]"}function Mg(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function ux(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Mn(n,"link",a),en(n),t.head.appendChild(n))}function jr(t){return'[src="'+dn(t)+'"]'}function so(t){return"script[async]"+t}function yg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+dn(a.href)+'"]');if(s)return n.instance=s,en(s),s;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),en(s),Mn(s,"style",c),Ul(s,a.precedence,t),n.instance=s;case"stylesheet":c=Zr(a.href);var f=t.querySelector(ro(c));if(f)return n.state.loading|=4,n.instance=f,en(f),f;s=Mg(a),(c=ni.get(c))&&_f(s,c),f=(t.ownerDocument||t).createElement("link"),en(f);var S=f;return S._p=new Promise(function(T,N){S.onload=T,S.onerror=N}),Mn(f,"link",s),n.state.loading|=4,Ul(f,a.precedence,t),n.instance=f;case"script":return f=jr(a.src),(c=t.querySelector(so(f)))?(n.instance=c,en(c),c):(s=a,(c=ni.get(f))&&(s=g({},a),vf(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),en(c),Mn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Ul(s,a.precedence,t));return n.instance}function Ul(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,S=0;S<s.length;S++){var T=s[S];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function _f(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function vf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Ll=null;function Eg(t,n,a){if(Ll===null){var s=new Map,c=Ll=new Map;c.set(a,s)}else c=Ll,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[xi]||f[ln]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=t+S;var T=s.get(S);T?T.push(f):s.set(S,[f])}}return s}function Tg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function fx(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Ag(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var oo=null;function hx(){}function dx(t,n,a){if(oo===null)throw Error(r(475));var s=oo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=Zr(a.href),f=t.querySelector(ro(c));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(s.count++,s=Nl.bind(s),t.then(s,s)),n.state.loading|=4,n.instance=f,en(f);return}f=t.ownerDocument||t,a=Mg(a),(c=ni.get(c))&&_f(a,c),f=f.createElement("link"),en(f);var S=f;S._p=new Promise(function(T,N){S.onload=T,S.onerror=N}),Mn(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=Nl.bind(s),t.addEventListener("load",n),t.addEventListener("error",n))}}function px(){if(oo===null)throw Error(r(475));var t=oo;return t.stylesheets&&t.count===0&&xf(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&xf(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Nl(){if(this.count--,this.count===0){if(this.stylesheets)xf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Ol=null;function xf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ol=new Map,n.forEach(mx,t),Ol=null,Nl.call(t))}function mx(t,n){if(!(n.state.loading&4)){var a=Ol.get(t);if(a)var s=a.get(null);else{a=new Map,Ol.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var S=c[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),s=S)}s&&a.set(null,s)}c=n.instance,S=c.getAttribute("data-precedence"),f=a.get(S)||s,f===s&&a.set(null,c),a.set(S,c),this.count++,s=Nl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var lo={$$typeof:P,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function gx(t,n,a,s,c,f,S,T){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Rt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rt(0),this.hiddenUpdates=Rt(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function bg(t,n,a,s,c,f,S,T,N,Q,ft,pt){return t=new gx(t,n,a,S,T,N,Q,pt),n=1,f===!0&&(n|=24),f=Vn(3,null,null,n),t.current=f,f.stateNode=t,n=$c(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},iu(f),t}function Rg(t){return t?(t=br,t):br}function Cg(t,n,a,s,c,f){c=Rg(c),s.context===null?s.context=c:s.pendingContext=c,s=oa(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=la(t,s,n),a!==null&&(Yn(a,t,n),Is(a,t,n))}function wg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Sf(t,n){wg(t,n),(t=t.alternate)&&wg(t,n)}function Dg(t){if(t.tag===13){var n=Ar(t,67108864);n!==null&&Yn(n,t,67108864),Sf(t,67108864)}}var Pl=!0;function _x(t,n,a,s){var c=O.T;O.T=null;var f=Z.p;try{Z.p=2,Mf(t,n,a,s)}finally{Z.p=f,O.T=c}}function vx(t,n,a,s){var c=O.T;O.T=null;var f=Z.p;try{Z.p=8,Mf(t,n,a,s)}finally{Z.p=f,O.T=c}}function Mf(t,n,a,s){if(Pl){var c=yf(s);if(c===null)lf(t,n,s,Bl,a),Lg(t,s);else if(Sx(c,t,n,a,s))s.stopPropagation();else if(Lg(t,s),n&4&&-1<xx.indexOf(t)){for(;c!==null;){var f=na(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=Zt(f.pendingLanes);if(S!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;S;){var N=1<<31-Pt(S);T.entanglements[1]|=N,S&=~N}Ti(f),(Re&6)===0&&(xl=Ot()+500,eo(0))}}break;case 13:T=Ar(f,2),T!==null&&Yn(T,f,2),Ml(),Sf(f,2)}if(f=yf(s),f===null&&lf(t,n,s,Bl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else lf(t,n,s,null,a)}}function yf(t){return t=bc(t),Ef(t)}var Bl=null;function Ef(t){if(Bl=null,t=Ci(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Bl=t,null}function Ug(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Fe()){case Gt:return 2;case re:return 8;case Xe:case We:return 32;case L:return 268435456;default:return 32}default:return 32}}var Tf=!1,Ma=null,ya=null,Ea=null,co=new Map,uo=new Map,Ta=[],xx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Lg(t,n){switch(t){case"focusin":case"focusout":Ma=null;break;case"dragenter":case"dragleave":ya=null;break;case"mouseover":case"mouseout":Ea=null;break;case"pointerover":case"pointerout":co.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":uo.delete(n.pointerId)}}function fo(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=na(n),n!==null&&Dg(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function Sx(t,n,a,s,c){switch(n){case"focusin":return Ma=fo(Ma,t,n,a,s,c),!0;case"dragenter":return ya=fo(ya,t,n,a,s,c),!0;case"mouseover":return Ea=fo(Ea,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return co.set(f,fo(co.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,uo.set(f,fo(uo.get(f)||null,t,n,a,s,c)),!0}return!1}function Ng(t){var n=Ci(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,oi(t.priority,function(){if(a.tag===13){var s=qn();s=ie(s);var c=Ar(a,s);c!==null&&Yn(c,a,s),Sf(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function zl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=yf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Ac=s,a.target.dispatchEvent(s),Ac=null}else return n=na(a),n!==null&&Dg(n),t.blockedOn=a,!1;n.shift()}return!0}function Og(t,n,a){zl(t)&&a.delete(n)}function Mx(){Tf=!1,Ma!==null&&zl(Ma)&&(Ma=null),ya!==null&&zl(ya)&&(ya=null),Ea!==null&&zl(Ea)&&(Ea=null),co.forEach(Og),uo.forEach(Og)}function Il(t,n){t.blockedOn===n&&(t.blockedOn=null,Tf||(Tf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Mx)))}var Fl=null;function Pg(t){Fl!==t&&(Fl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Fl===t&&(Fl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(Ef(s||a)===null)continue;break}var f=na(a);f!==null&&(t.splice(n,3),n-=3,yu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function ho(t){function n(N){return Il(N,t)}Ma!==null&&Il(Ma,t),ya!==null&&Il(ya,t),Ea!==null&&Il(Ea,t),co.forEach(n),uo.forEach(n);for(var a=0;a<Ta.length;a++){var s=Ta[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Ta.length&&(a=Ta[0],a.blockedOn===null);)Ng(a),a.blockedOn===null&&Ta.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],S=c[Ye]||null;if(typeof f=="function")S||Pg(a);else if(S){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,S=f[Ye]||null)T=S.formAction;else if(Ef(c)!==null)continue}else T=S.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),Pg(a)}}}function Af(t){this._internalRoot=t}Hl.prototype.render=Af.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=qn();Cg(a,s,t,n,null,null)},Hl.prototype.unmount=Af.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Cg(t.current,2,null,t,null,null),Ml(),n[vi]=null}};function Hl(t){this._internalRoot=t}Hl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Me();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ta.length&&n!==0&&n<Ta[a].priority;a++);Ta.splice(a,0,t),a===0&&Ng(t)}};var Bg=e.version;if(Bg!=="19.1.1")throw Error(r(527,Bg,"19.1.1"));Z.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var yx={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gl.isDisabled&&Gl.supportsFiber)try{ut=Gl.inject(yx),dt=Gl}catch{}}return mo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=Jp,f=$p,S=tm,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=bg(t,1,!1,null,null,a,s,c,f,S,T,null),t[vi]=n.current,of(t),new Af(n)},mo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=Jp,S=$p,T=tm,N=null,Q=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(N=a.unstable_transitionCallbacks),a.formState!==void 0&&(Q=a.formState)),n=bg(t,1,!0,n,a??null,s,c,f,S,T,N,Q),n.context=Rg(null),a=n.current,s=qn(),s=ie(s),c=oa(s),c.callback=null,la(a,c,s),a=s,n.current.lanes=a,Bt(n,a),Ti(n),t[vi]=n.current,of(t),new Hl(n)},mo.version="19.1.1",mo}var qg;function Lx(){if(qg)return Cf.exports;qg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Cf.exports=Ux(),Cf.exports}var Nx=Lx();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nd="180",Ox=0,Yg=1,Px=2,k_=1,Bx=2,Zi=3,Pa=0,In=1,ji=2,Na=0,fs=1,uh=2,Zg=3,jg=4,zx=5,lr=100,Ix=101,Fx=102,Hx=103,Gx=104,Vx=200,kx=201,Xx=202,Wx=203,fh=204,hh=205,qx=206,Yx=207,Zx=208,jx=209,Kx=210,Qx=211,Jx=212,$x=213,tS=214,dh=0,ph=1,mh=2,ds=3,gh=4,_h=5,vh=6,xh=7,X_=0,eS=1,nS=2,Oa=0,iS=1,aS=2,rS=3,sS=4,oS=5,lS=6,cS=7,W_=300,ps=301,ms=302,Sh=303,Mh=304,Sc=306,yh=1e3,ur=1001,Eh=1002,_i=1003,uS=1004,Vl=1005,bi=1006,Lf=1007,fr=1008,$i=1009,q_=1010,Y_=1011,yo=1012,id=1013,dr=1014,Ki=1015,Ro=1016,ad=1017,rd=1018,Eo=1020,Z_=35902,j_=35899,K_=1021,Q_=1022,gi=1023,To=1026,Ao=1027,J_=1028,sd=1029,$_=1030,od=1031,ld=1033,hc=33776,dc=33777,pc=33778,mc=33779,Th=35840,Ah=35841,bh=35842,Rh=35843,Ch=36196,wh=37492,Dh=37496,Uh=37808,Lh=37809,Nh=37810,Oh=37811,Ph=37812,Bh=37813,zh=37814,Ih=37815,Fh=37816,Hh=37817,Gh=37818,Vh=37819,kh=37820,Xh=37821,Wh=36492,qh=36494,Yh=36495,Zh=36283,jh=36284,Kh=36285,Qh=36286,fS=3200,hS=3201,dS=0,pS=1,La="",ai="srgb",gs="srgb-linear",_c="linear",Pe="srgb",Kr=7680,Kg=519,mS=512,gS=513,_S=514,tv=515,vS=516,xS=517,SS=518,MS=519,Qg=35044,Jg="300 es",Ri=2e3,vc=2001;class vs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nf=Math.PI/180,Jh=180/Math.PI;function Co(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(bn[o&255]+bn[o>>8&255]+bn[o>>16&255]+bn[o>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[i&63|128]+bn[i>>8&255]+"-"+bn[i>>16&255]+bn[i>>24&255]+bn[r&255]+bn[r>>8&255]+bn[r>>16&255]+bn[r>>24&255]).toLowerCase()}function xe(o,e,i){return Math.max(e,Math.min(i,o))}function yS(o,e){return(o%e+e)%e}function Of(o,e,i){return(1-i)*o+i*e}function go(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function zn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Be{constructor(e=0,i=0){Be.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=xe(this.x,e.x,i.x),this.y=xe(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=xe(this.x,e,i),this.y=xe(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(xe(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*r-h*l+e.x,this.y=u*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class wo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,h,d){let m=r[l+0],p=r[l+1],g=r[l+2],v=r[l+3];const x=u[h+0],y=u[h+1],b=u[h+2],R=u[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=v;return}if(d===1){e[i+0]=x,e[i+1]=y,e[i+2]=b,e[i+3]=R;return}if(v!==R||m!==x||p!==y||g!==b){let M=1-d;const _=m*x+p*y+g*b+v*R,I=_>=0?1:-1,P=1-_*_;if(P>Number.EPSILON){const z=Math.sqrt(P),G=Math.atan2(z,_*I);M=Math.sin(M*G)/z,d=Math.sin(d*G)/z}const U=d*I;if(m=m*M+x*U,p=p*M+y*U,g=g*M+b*U,v=v*M+R*U,M===1-d){const z=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=z,p*=z,g*=z,v*=z}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,u,h){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],v=u[h],x=u[h+1],y=u[h+2],b=u[h+3];return e[i]=d*b+g*v+m*y-p*x,e[i+1]=m*b+g*x+p*v-d*y,e[i+2]=p*b+g*y+d*x-m*v,e[i+3]=g*b-d*v-m*x-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),v=d(u/2),x=m(r/2),y=m(l/2),b=m(u/2);switch(h){case"XYZ":this._x=x*g*v+p*y*b,this._y=p*y*v-x*g*b,this._z=p*g*b+x*y*v,this._w=p*g*v-x*y*b;break;case"YXZ":this._x=x*g*v+p*y*b,this._y=p*y*v-x*g*b,this._z=p*g*b-x*y*v,this._w=p*g*v+x*y*b;break;case"ZXY":this._x=x*g*v-p*y*b,this._y=p*y*v+x*g*b,this._z=p*g*b+x*y*v,this._w=p*g*v-x*y*b;break;case"ZYX":this._x=x*g*v-p*y*b,this._y=p*y*v+x*g*b,this._z=p*g*b-x*y*v,this._w=p*g*v+x*y*b;break;case"YZX":this._x=x*g*v+p*y*b,this._y=p*y*v+x*g*b,this._z=p*g*b-x*y*v,this._w=p*g*v-x*y*b;break;case"XZY":this._x=x*g*v-p*y*b,this._y=p*y*v-x*g*b,this._z=p*g*b+x*y*v,this._w=p*g*v+x*y*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],v=i[10],x=r+d+v;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(g-m)*y,this._y=(u-p)*y,this._z=(h-l)*y}else if(r>d&&r>v){const y=2*Math.sqrt(1+r-d-v);this._w=(g-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(u+p)/y}else if(d>v){const y=2*Math.sqrt(1+d-r-v);this._w=(u-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+v-r-d);this._w=(h-l)/y,this._x=(u+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xe(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,h=e._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+h*d+l*p-u*m,this._y=l*g+h*m+u*d-r*p,this._z=u*g+h*p+r*m-l*d,this._w=h*g-r*d-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const y=1-i;return this._w=y*h+i*this._w,this._x=y*r+i*this._x,this._y=y*l+i*this._y,this._z=y*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),v=Math.sin((1-i)*g)/p,x=Math.sin(i*g)/p;return this._w=h*v+this._w*x,this._x=r*v+this._x*x,this._y=l*v+this._y*x,this._z=u*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class st{constructor(e=0,i=0,r=0){st.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion($g.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion($g.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),g=2*(d*i-u*l),v=2*(u*r-h*i);return this.x=i+m*p+h*v-d*g,this.y=r+m*g+d*p-u*v,this.z=l+m*v+u*g-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=xe(this.x,e.x,i.x),this.y=xe(this.y,e.y,i.y),this.z=xe(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=xe(this.x,e,i),this.y=xe(this.y,e,i),this.z=xe(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Pf.copy(this).projectOnVector(e),this.sub(Pf)}reflect(e){return this.sub(Pf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(xe(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pf=new st,$g=new wo;class le{constructor(e,i,r,l,u,h,d,m,p){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,m,p)}set(e,i,r,l,u,h,d,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=m,g[6]=r,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],g=r[4],v=r[7],x=r[2],y=r[5],b=r[8],R=l[0],M=l[3],_=l[6],I=l[1],P=l[4],U=l[7],z=l[2],G=l[5],F=l[8];return u[0]=h*R+d*I+m*z,u[3]=h*M+d*P+m*G,u[6]=h*_+d*U+m*F,u[1]=p*R+g*I+v*z,u[4]=p*M+g*P+v*G,u[7]=p*_+g*U+v*F,u[2]=x*R+y*I+b*z,u[5]=x*M+y*P+b*G,u[8]=x*_+y*U+b*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8];return i*h*g-i*d*p-r*u*g+r*d*m+l*u*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],v=g*h-d*p,x=d*m-g*u,y=p*u-h*m,b=i*v+r*x+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return e[0]=v*R,e[1]=(l*p-g*r)*R,e[2]=(d*r-l*h)*R,e[3]=x*R,e[4]=(g*i-l*m)*R,e[5]=(l*u-d*i)*R,e[6]=y*R,e[7]=(r*m-p*i)*R,e[8]=(h*i-r*u)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Bf.makeScale(e,i)),this}rotate(e){return this.premultiply(Bf.makeRotation(-e)),this}translate(e,i){return this.premultiply(Bf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Bf=new le;function ev(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function xc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function ES(){const o=xc("canvas");return o.style.display="block",o}const t_={};function bo(o){o in t_||(t_[o]=!0,console.warn(o))}function TS(o,e,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const e_=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),n_=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function AS(){const o={enabled:!0,workingColorSpace:gs,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Pe&&(l.r=Ji(l.r),l.g=Ji(l.g),l.b=Ji(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Pe&&(l.r=hs(l.r),l.g=hs(l.g),l.b=hs(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===La?_c:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return bo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return bo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[gs]:{primaries:e,whitePoint:r,transfer:_c,toXYZ:e_,fromXYZ:n_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:e,whitePoint:r,transfer:Pe,toXYZ:e_,fromXYZ:n_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}}),o}const Te=AS();function Ji(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function hs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Qr;class bS{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Qr===void 0&&(Qr=xc("canvas")),Qr.width=e.width,Qr.height=e.height;const l=Qr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=Qr}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=xc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=Ji(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Ji(i[r]/255)*255):i[r]=Ji(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let RS=0;class cd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:RS++}),this.uuid=Co(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(zf(l[h].image)):u.push(zf(l[h]))}else u=zf(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function zf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?bS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let CS=0;const If=new st;class Fn extends vs{constructor(e=Fn.DEFAULT_IMAGE,i=Fn.DEFAULT_MAPPING,r=ur,l=ur,u=bi,h=fr,d=gi,m=$i,p=Fn.DEFAULT_ANISOTROPY,g=La){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:CS++}),this.uuid=Co(),this.name="",this.source=new cd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(If).x}get height(){return this.source.getSize(If).y}get depth(){return this.source.getSize(If).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==W_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yh:e.x=e.x-Math.floor(e.x);break;case ur:e.x=e.x<0?0:1;break;case Eh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yh:e.y=e.y-Math.floor(e.y);break;case ur:e.y=e.y<0?0:1;break;case Eh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=W_;Fn.DEFAULT_ANISOTROPY=1;class $e{constructor(e=0,i=0,r=0,l=1){$e.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],g=m[4],v=m[8],x=m[1],y=m[5],b=m[9],R=m[2],M=m[6],_=m[10];if(Math.abs(g-x)<.01&&Math.abs(v-R)<.01&&Math.abs(b-M)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+R)<.1&&Math.abs(b+M)<.1&&Math.abs(p+y+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(p+1)/2,U=(y+1)/2,z=(_+1)/2,G=(g+x)/4,F=(v+R)/4,j=(b+M)/4;return P>U&&P>z?P<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(P),l=G/r,u=F/r):U>z?U<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(U),r=G/l,u=j/l):z<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(z),r=F/u,l=j/u),this.set(r,l,u,i),this}let I=Math.sqrt((M-b)*(M-b)+(v-R)*(v-R)+(x-g)*(x-g));return Math.abs(I)<.001&&(I=1),this.x=(M-b)/I,this.y=(v-R)/I,this.z=(x-g)/I,this.w=Math.acos((p+y+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=xe(this.x,e.x,i.x),this.y=xe(this.y,e.y,i.y),this.z=xe(this.z,e.z,i.z),this.w=xe(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=xe(this.x,e,i),this.y=xe(this.y,e,i),this.z=xe(this.z,e,i),this.w=xe(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wS extends vs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new $e(0,0,e,i),this.scissorTest=!1,this.viewport=new $e(0,0,e,i);const l={width:e,height:i,depth:r.depth},u=new Fn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:bi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new cd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pr extends wS{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class nv extends Fn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=_i,this.minFilter=_i,this.wrapR=ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class DS extends Fn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=_i,this.minFilter=_i,this.wrapR=ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Do{constructor(e=new st(1/0,1/0,1/0),i=new st(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(hi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(hi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=hi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,hi):hi.fromBufferAttribute(u,h),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),kl.copy(r.boundingBox)),kl.applyMatrix4(e.matrixWorld),this.union(kl)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_o),Xl.subVectors(this.max,_o),Jr.subVectors(e.a,_o),$r.subVectors(e.b,_o),ts.subVectors(e.c,_o),ba.subVectors($r,Jr),Ra.subVectors(ts,$r),tr.subVectors(Jr,ts);let i=[0,-ba.z,ba.y,0,-Ra.z,Ra.y,0,-tr.z,tr.y,ba.z,0,-ba.x,Ra.z,0,-Ra.x,tr.z,0,-tr.x,-ba.y,ba.x,0,-Ra.y,Ra.x,0,-tr.y,tr.x,0];return!Ff(i,Jr,$r,ts,Xl)||(i=[1,0,0,0,1,0,0,0,1],!Ff(i,Jr,$r,ts,Xl))?!1:(Wl.crossVectors(ba,Ra),i=[Wl.x,Wl.y,Wl.z],Ff(i,Jr,$r,ts,Xl))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ki=[new st,new st,new st,new st,new st,new st,new st,new st],hi=new st,kl=new Do,Jr=new st,$r=new st,ts=new st,ba=new st,Ra=new st,tr=new st,_o=new st,Xl=new st,Wl=new st,er=new st;function Ff(o,e,i,r,l){for(let u=0,h=o.length-3;u<=h;u+=3){er.fromArray(o,u);const d=l.x*Math.abs(er.x)+l.y*Math.abs(er.y)+l.z*Math.abs(er.z),m=e.dot(er),p=i.dot(er),g=r.dot(er);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const US=new Do,vo=new st,Hf=new st;class Mc{constructor(e=new st,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):US.setFromPoints(e).getCenter(r);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vo.subVectors(e,this.center);const i=vo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(vo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vo.copy(e.center).add(Hf)),this.expandByPoint(vo.copy(e.center).sub(Hf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Xi=new st,Gf=new st,ql=new st,Ca=new st,Vf=new st,Yl=new st,kf=new st;class iv{constructor(e=new st,i=new st(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xi)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Xi.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Xi.copy(this.origin).addScaledVector(this.direction,i),Xi.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Gf.copy(e).add(i).multiplyScalar(.5),ql.copy(i).sub(e).normalize(),Ca.copy(this.origin).sub(Gf);const u=e.distanceTo(i)*.5,h=-this.direction.dot(ql),d=Ca.dot(this.direction),m=-Ca.dot(ql),p=Ca.lengthSq(),g=Math.abs(1-h*h);let v,x,y,b;if(g>0)if(v=h*m-d,x=h*d-m,b=u*g,v>=0)if(x>=-b)if(x<=b){const R=1/g;v*=R,x*=R,y=v*(v+h*x+2*d)+x*(h*v+x+2*m)+p}else x=u,v=Math.max(0,-(h*x+d)),y=-v*v+x*(x+2*m)+p;else x=-u,v=Math.max(0,-(h*x+d)),y=-v*v+x*(x+2*m)+p;else x<=-b?(v=Math.max(0,-(-h*u+d)),x=v>0?-u:Math.min(Math.max(-u,-m),u),y=-v*v+x*(x+2*m)+p):x<=b?(v=0,x=Math.min(Math.max(-u,-m),u),y=x*(x+2*m)+p):(v=Math.max(0,-(h*u+d)),x=v>0?u:Math.min(Math.max(-u,-m),u),y=-v*v+x*(x+2*m)+p);else x=h>0?-u:u,v=Math.max(0,-(h*x+d)),y=-v*v+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Gf).addScaledVector(ql,x),y}intersectSphere(e,i){Xi.subVectors(e.center,this.origin);const r=Xi.dot(this.direction),l=Xi.dot(Xi)-r*r,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),g>=0?(u=(e.min.y-x.y)*g,h=(e.max.y-x.y)*g):(u=(e.max.y-x.y)*g,h=(e.min.y-x.y)*g),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),v>=0?(d=(e.min.z-x.z)*v,m=(e.max.z-x.z)*v):(d=(e.max.z-x.z)*v,m=(e.min.z-x.z)*v),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Xi)!==null}intersectTriangle(e,i,r,l,u){Vf.subVectors(i,e),Yl.subVectors(r,e),kf.crossVectors(Vf,Yl);let h=this.direction.dot(kf),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ca.subVectors(this.origin,e);const m=d*this.direction.dot(Yl.crossVectors(Ca,Yl));if(m<0)return null;const p=d*this.direction.dot(Vf.cross(Ca));if(p<0||m+p>h)return null;const g=-d*Ca.dot(kf);return g<0?null:this.at(g/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn{constructor(e,i,r,l,u,h,d,m,p,g,v,x,y,b,R,M){sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,m,p,g,v,x,y,b,R,M)}set(e,i,r,l,u,h,d,m,p,g,v,x,y,b,R,M){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=x,_[3]=y,_[7]=b,_[11]=R,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/es.setFromMatrixColumn(e,0).length(),u=1/es.setFromMatrixColumn(e,1).length(),h=1/es.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const x=h*g,y=h*v,b=d*g,R=d*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=y+b*p,i[5]=x-R*p,i[9]=-d*m,i[2]=R-x*p,i[6]=b+y*p,i[10]=h*m}else if(e.order==="YXZ"){const x=m*g,y=m*v,b=p*g,R=p*v;i[0]=x+R*d,i[4]=b*d-y,i[8]=h*p,i[1]=h*v,i[5]=h*g,i[9]=-d,i[2]=y*d-b,i[6]=R+x*d,i[10]=h*m}else if(e.order==="ZXY"){const x=m*g,y=m*v,b=p*g,R=p*v;i[0]=x-R*d,i[4]=-h*v,i[8]=b+y*d,i[1]=y+b*d,i[5]=h*g,i[9]=R-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const x=h*g,y=h*v,b=d*g,R=d*v;i[0]=m*g,i[4]=b*p-y,i[8]=x*p+R,i[1]=m*v,i[5]=R*p+x,i[9]=y*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const x=h*m,y=h*p,b=d*m,R=d*p;i[0]=m*g,i[4]=R-x*v,i[8]=b*v+y,i[1]=v,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=y*v+b,i[10]=x-R*v}else if(e.order==="XZY"){const x=h*m,y=h*p,b=d*m,R=d*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=x*v+R,i[5]=h*g,i[9]=y*v-b,i[2]=b*v-y,i[6]=d*g,i[10]=R*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(LS,e,NS)}lookAt(e,i,r){const l=this.elements;return Zn.subVectors(e,i),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),wa.crossVectors(r,Zn),wa.lengthSq()===0&&(Math.abs(r.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),wa.crossVectors(r,Zn)),wa.normalize(),Zl.crossVectors(Zn,wa),l[0]=wa.x,l[4]=Zl.x,l[8]=Zn.x,l[1]=wa.y,l[5]=Zl.y,l[9]=Zn.y,l[2]=wa.z,l[6]=Zl.z,l[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],g=r[1],v=r[5],x=r[9],y=r[13],b=r[2],R=r[6],M=r[10],_=r[14],I=r[3],P=r[7],U=r[11],z=r[15],G=l[0],F=l[4],j=l[8],w=l[12],C=l[1],V=l[5],nt=l[9],ct=l[13],_t=l[2],lt=l[6],O=l[10],Z=l[14],q=l[3],xt=l[7],D=l[11],J=l[15];return u[0]=h*G+d*C+m*_t+p*q,u[4]=h*F+d*V+m*lt+p*xt,u[8]=h*j+d*nt+m*O+p*D,u[12]=h*w+d*ct+m*Z+p*J,u[1]=g*G+v*C+x*_t+y*q,u[5]=g*F+v*V+x*lt+y*xt,u[9]=g*j+v*nt+x*O+y*D,u[13]=g*w+v*ct+x*Z+y*J,u[2]=b*G+R*C+M*_t+_*q,u[6]=b*F+R*V+M*lt+_*xt,u[10]=b*j+R*nt+M*O+_*D,u[14]=b*w+R*ct+M*Z+_*J,u[3]=I*G+P*C+U*_t+z*q,u[7]=I*F+P*V+U*lt+z*xt,u[11]=I*j+P*nt+U*O+z*D,u[15]=I*w+P*ct+U*Z+z*J,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],h=e[1],d=e[5],m=e[9],p=e[13],g=e[2],v=e[6],x=e[10],y=e[14],b=e[3],R=e[7],M=e[11],_=e[15];return b*(+u*m*v-l*p*v-u*d*x+r*p*x+l*d*y-r*m*y)+R*(+i*m*y-i*p*x+u*h*x-l*h*y+l*p*g-u*m*g)+M*(+i*p*v-i*d*y-u*h*v+r*h*y+u*d*g-r*p*g)+_*(-l*d*g-i*m*v+i*d*x+l*h*v-r*h*x+r*m*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],v=e[9],x=e[10],y=e[11],b=e[12],R=e[13],M=e[14],_=e[15],I=v*M*p-R*x*p+R*m*y-d*M*y-v*m*_+d*x*_,P=b*x*p-g*M*p-b*m*y+h*M*y+g*m*_-h*x*_,U=g*R*p-b*v*p+b*d*y-h*R*y-g*d*_+h*v*_,z=b*v*m-g*R*m-b*d*x+h*R*x+g*d*M-h*v*M,G=i*I+r*P+l*U+u*z;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/G;return e[0]=I*F,e[1]=(R*x*u-v*M*u-R*l*y+r*M*y+v*l*_-r*x*_)*F,e[2]=(d*M*u-R*m*u+R*l*p-r*M*p-d*l*_+r*m*_)*F,e[3]=(v*m*u-d*x*u-v*l*p+r*x*p+d*l*y-r*m*y)*F,e[4]=P*F,e[5]=(g*M*u-b*x*u+b*l*y-i*M*y-g*l*_+i*x*_)*F,e[6]=(b*m*u-h*M*u-b*l*p+i*M*p+h*l*_-i*m*_)*F,e[7]=(h*x*u-g*m*u+g*l*p-i*x*p-h*l*y+i*m*y)*F,e[8]=U*F,e[9]=(b*v*u-g*R*u-b*r*y+i*R*y+g*r*_-i*v*_)*F,e[10]=(h*R*u-b*d*u+b*r*p-i*R*p-h*r*_+i*d*_)*F,e[11]=(g*d*u-h*v*u-g*r*p+i*v*p+h*r*y-i*d*y)*F,e[12]=z*F,e[13]=(g*R*l-b*v*l+b*r*x-i*R*x-g*r*M+i*v*M)*F,e[14]=(b*d*l-h*R*l-b*r*m+i*R*m+h*r*M-i*d*M)*F,e[15]=(h*v*l-g*d*l+g*r*m-i*v*m-h*r*x+i*d*x)*F,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=e.x,d=e.y,m=e.z,p=u*h,g=u*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*h,0,p*m-l*d,g*m+l*h,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,h){return this.set(1,r,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,g=h+h,v=d+d,x=u*p,y=u*g,b=u*v,R=h*g,M=h*v,_=d*v,I=m*p,P=m*g,U=m*v,z=r.x,G=r.y,F=r.z;return l[0]=(1-(R+_))*z,l[1]=(y+U)*z,l[2]=(b-P)*z,l[3]=0,l[4]=(y-U)*G,l[5]=(1-(x+_))*G,l[6]=(M+I)*G,l[7]=0,l[8]=(b+P)*F,l[9]=(M-I)*F,l[10]=(1-(x+R))*F,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=es.set(l[0],l[1],l[2]).length();const h=es.set(l[4],l[5],l[6]).length(),d=es.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],di.copy(this);const p=1/u,g=1/h,v=1/d;return di.elements[0]*=p,di.elements[1]*=p,di.elements[2]*=p,di.elements[4]*=g,di.elements[5]*=g,di.elements[6]*=g,di.elements[8]*=v,di.elements[9]*=v,di.elements[10]*=v,i.setFromRotationMatrix(di),r.x=u,r.y=h,r.z=d,this}makePerspective(e,i,r,l,u,h,d=Ri,m=!1){const p=this.elements,g=2*u/(i-e),v=2*u/(r-l),x=(i+e)/(i-e),y=(r+l)/(r-l);let b,R;if(m)b=u/(h-u),R=h*u/(h-u);else if(d===Ri)b=-(h+u)/(h-u),R=-2*h*u/(h-u);else if(d===vc)b=-h/(h-u),R=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=v,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,u,h,d=Ri,m=!1){const p=this.elements,g=2/(i-e),v=2/(r-l),x=-(i+e)/(i-e),y=-(r+l)/(r-l);let b,R;if(m)b=1/(h-u),R=h/(h-u);else if(d===Ri)b=-2/(h-u),R=-(h+u)/(h-u);else if(d===vc)b=-1/(h-u),R=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=v,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=b,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const es=new st,di=new sn,LS=new st(0,0,0),NS=new st(1,1,1),wa=new st,Zl=new st,Zn=new st,i_=new sn,a_=new wo;class ta{constructor(e=0,i=0,r=0,l=ta.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],v=l[2],x=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(xe(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-xe(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(xe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return i_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(i_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return a_.setFromEuler(this),this.setFromQuaternion(a_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ta.DEFAULT_ORDER="XYZ";class av{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let OS=0;const r_=new st,ns=new wo,Wi=new sn,jl=new st,xo=new st,PS=new st,BS=new wo,s_=new st(1,0,0),o_=new st(0,1,0),l_=new st(0,0,1),c_={type:"added"},zS={type:"removed"},is={type:"childadded",child:null},Xf={type:"childremoved",child:null};class Hn extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:OS++}),this.uuid=Co(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Hn.DEFAULT_UP.clone();const e=new st,i=new ta,r=new wo,l=new st(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new sn},normalMatrix:{value:new le}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=Hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new av,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return ns.setFromAxisAngle(e,i),this.quaternion.multiply(ns),this}rotateOnWorldAxis(e,i){return ns.setFromAxisAngle(e,i),this.quaternion.premultiply(ns),this}rotateX(e){return this.rotateOnAxis(s_,e)}rotateY(e){return this.rotateOnAxis(o_,e)}rotateZ(e){return this.rotateOnAxis(l_,e)}translateOnAxis(e,i){return r_.copy(e).applyQuaternion(this.quaternion),this.position.add(r_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(s_,e)}translateY(e){return this.translateOnAxis(o_,e)}translateZ(e){return this.translateOnAxis(l_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?jl.copy(e):jl.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(xo,jl,this.up):Wi.lookAt(jl,xo,this.up),this.quaternion.setFromRotationMatrix(Wi),l&&(Wi.extractRotation(l.matrixWorld),ns.setFromRotationMatrix(Wi),this.quaternion.premultiply(ns.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(c_),is.child=e,this.dispatchEvent(is),is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(zS),Xf.child=e,this.dispatchEvent(Xf),Xf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(c_),is.child=e,this.dispatchEvent(is),is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,e,PS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,BS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];u(e.shapes,v)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),g=h(e.images),v=h(e.shapes),x=h(e.skeletons),y=h(e.animations),b=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),y.length>0&&(r.animations=y),b.length>0&&(r.nodes=b)}return r.object=l,r;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Hn.DEFAULT_UP=new st(0,1,0);Hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pi=new st,qi=new st,Wf=new st,Yi=new st,as=new st,rs=new st,u_=new st,qf=new st,Yf=new st,Zf=new st,jf=new $e,Kf=new $e,Qf=new $e;class mi{constructor(e=new st,i=new st,r=new st){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),pi.subVectors(e,i),l.cross(pi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){pi.subVectors(l,i),qi.subVectors(r,i),Wf.subVectors(e,i);const h=pi.dot(pi),d=pi.dot(qi),m=pi.dot(Wf),p=qi.dot(qi),g=qi.dot(Wf),v=h*p-d*d;if(v===0)return u.set(0,0,0),null;const x=1/v,y=(p*m-d*g)*x,b=(h*g-d*m)*x;return u.set(1-y-b,b,y)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(e,i,r,l,u,h,d,m){return this.getBarycoord(e,i,r,l,Yi)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,Yi.x),m.addScaledVector(h,Yi.y),m.addScaledVector(d,Yi.z),m)}static getInterpolatedAttribute(e,i,r,l,u,h){return jf.setScalar(0),Kf.setScalar(0),Qf.setScalar(0),jf.fromBufferAttribute(e,i),Kf.fromBufferAttribute(e,r),Qf.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(jf,u.x),h.addScaledVector(Kf,u.y),h.addScaledVector(Qf,u.z),h}static isFrontFacing(e,i,r,l){return pi.subVectors(r,i),qi.subVectors(e,i),pi.cross(qi).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),pi.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return mi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return mi.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let h,d;as.subVectors(l,r),rs.subVectors(u,r),qf.subVectors(e,r);const m=as.dot(qf),p=rs.dot(qf);if(m<=0&&p<=0)return i.copy(r);Yf.subVectors(e,l);const g=as.dot(Yf),v=rs.dot(Yf);if(g>=0&&v<=g)return i.copy(l);const x=m*v-g*p;if(x<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(r).addScaledVector(as,h);Zf.subVectors(e,u);const y=as.dot(Zf),b=rs.dot(Zf);if(b>=0&&y<=b)return i.copy(u);const R=y*p-m*b;if(R<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(r).addScaledVector(rs,d);const M=g*b-y*v;if(M<=0&&v-g>=0&&y-b>=0)return u_.subVectors(u,l),d=(v-g)/(v-g+(y-b)),i.copy(l).addScaledVector(u_,d);const _=1/(M+R+x);return h=R*_,d=x*_,i.copy(r).addScaledVector(as,h).addScaledVector(rs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const rv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Da={h:0,s:0,l:0},Kl={h:0,s:0,l:0};function Jf(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class we{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Te.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Te.workingColorSpace){return this.r=e,this.g=i,this.b=r,Te.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Te.workingColorSpace){if(e=yS(e,1),i=xe(i,0,1),r=xe(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=Jf(h,u,e+1/3),this.g=Jf(h,u,e),this.b=Jf(h,u,e-1/3)}return Te.colorSpaceToWorking(this,l),this}setStyle(e,i=ai){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ai){const r=rv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ji(e.r),this.g=Ji(e.g),this.b=Ji(e.b),this}copyLinearToSRGB(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ai){return Te.workingToColorSpace(Rn.copy(this),e),Math.round(xe(Rn.r*255,0,255))*65536+Math.round(xe(Rn.g*255,0,255))*256+Math.round(xe(Rn.b*255,0,255))}getHexString(e=ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Te.workingColorSpace){Te.workingToColorSpace(Rn.copy(this),i);const r=Rn.r,l=Rn.g,u=Rn.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=g<=.5?v/(h+d):v/(2-h-d),h){case r:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-r)/v+2;break;case u:m=(r-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=Te.workingColorSpace){return Te.workingToColorSpace(Rn.copy(this),i),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=ai){Te.workingToColorSpace(Rn.copy(this),e);const i=Rn.r,r=Rn.g,l=Rn.b;return e!==ai?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Da),this.setHSL(Da.h+e,Da.s+i,Da.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Da),e.getHSL(Kl);const r=Of(Da.h,Kl.h,i),l=Of(Da.s,Kl.s,i),u=Of(Da.l,Kl.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new we;we.NAMES=rv;let IS=0;class Uo extends vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:IS++}),this.uuid=Co(),this.name="",this.type="Material",this.blending=fs,this.side=Pa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fh,this.blendDst=hh,this.blendEquation=lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kr,this.stencilZFail=Kr,this.stencilZPass=Kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==fs&&(r.blending=this.blending),this.side!==Pa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==fh&&(r.blendSrc=this.blendSrc),this.blendDst!==hh&&(r.blendDst=this.blendDst),this.blendEquation!==lr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ds&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Kr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Kr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Kr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class sv extends Uo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ta,this.combine=X_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rn=new st,Ql=new Be;let FS=0;class si{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:FS++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Qg,this.updateRanges=[],this.gpuType=Ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Ql.fromBufferAttribute(this,i),Ql.applyMatrix3(e),this.setXY(i,Ql.x,Ql.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix3(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix4(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyNormalMatrix(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.transformDirection(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=go(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=zn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=go(i,this.array)),i}setX(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=go(i,this.array)),i}setY(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=go(i,this.array)),i}setZ(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=go(i,this.array)),i}setW(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=zn(i,this.array),r=zn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=zn(i,this.array),r=zn(r,this.array),l=zn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=zn(i,this.array),r=zn(r,this.array),l=zn(l,this.array),u=zn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qg&&(e.usage=this.usage),e}}class ov extends si{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class lv extends si{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class hr extends si{constructor(e,i,r){super(new Float32Array(e),i,r)}}let HS=0;const ii=new sn,$f=new Hn,ss=new st,jn=new Do,So=new Do,_n=new st;class ea extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:HS++}),this.uuid=Co(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ev(e)?lv:ov)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new le().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,i,r){return ii.makeTranslation(e,i,r),this.applyMatrix4(ii),this}scale(e,i,r){return ii.makeScale(e,i,r),this.applyMatrix4(ii),this}lookAt(e){return $f.lookAt(e),$f.updateMatrix(),this.applyMatrix4($f.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new hr(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Do);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new st(-1/0,-1/0,-1/0),new st(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];jn.setFromBufferAttribute(u),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new st,1/0);return}if(e){const r=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];So.setFromBufferAttribute(d),this.morphTargetsRelative?(_n.addVectors(jn.min,So.min),jn.expandByPoint(_n),_n.addVectors(jn.max,So.max),jn.expandByPoint(_n)):(jn.expandByPoint(So.min),jn.expandByPoint(So.max))}jn.getCenter(r);let l=0;for(let u=0,h=e.count;u<h;u++)_n.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(_n));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)_n.fromBufferAttribute(d,p),m&&(ss.fromBufferAttribute(e,p),_n.add(ss)),l=Math.max(l,r.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new si(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let j=0;j<r.count;j++)d[j]=new st,m[j]=new st;const p=new st,g=new st,v=new st,x=new Be,y=new Be,b=new Be,R=new st,M=new st;function _(j,w,C){p.fromBufferAttribute(r,j),g.fromBufferAttribute(r,w),v.fromBufferAttribute(r,C),x.fromBufferAttribute(u,j),y.fromBufferAttribute(u,w),b.fromBufferAttribute(u,C),g.sub(p),v.sub(p),y.sub(x),b.sub(x);const V=1/(y.x*b.y-b.x*y.y);isFinite(V)&&(R.copy(g).multiplyScalar(b.y).addScaledVector(v,-y.y).multiplyScalar(V),M.copy(v).multiplyScalar(y.x).addScaledVector(g,-b.x).multiplyScalar(V),d[j].add(R),d[w].add(R),d[C].add(R),m[j].add(M),m[w].add(M),m[C].add(M))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let j=0,w=I.length;j<w;++j){const C=I[j],V=C.start,nt=C.count;for(let ct=V,_t=V+nt;ct<_t;ct+=3)_(e.getX(ct+0),e.getX(ct+1),e.getX(ct+2))}const P=new st,U=new st,z=new st,G=new st;function F(j){z.fromBufferAttribute(l,j),G.copy(z);const w=d[j];P.copy(w),P.sub(z.multiplyScalar(z.dot(w))).normalize(),U.crossVectors(G,w);const V=U.dot(m[j])<0?-1:1;h.setXYZW(j,P.x,P.y,P.z,V)}for(let j=0,w=I.length;j<w;++j){const C=I[j],V=C.start,nt=C.count;for(let ct=V,_t=V+nt;ct<_t;ct+=3)F(e.getX(ct+0)),F(e.getX(ct+1)),F(e.getX(ct+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new si(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,y=r.count;x<y;x++)r.setXYZ(x,0,0,0);const l=new st,u=new st,h=new st,d=new st,m=new st,p=new st,g=new st,v=new st;if(e)for(let x=0,y=e.count;x<y;x+=3){const b=e.getX(x+0),R=e.getX(x+1),M=e.getX(x+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,R),h.fromBufferAttribute(i,M),g.subVectors(h,u),v.subVectors(l,u),g.cross(v),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,R),p.fromBufferAttribute(r,M),d.add(g),m.add(g),p.add(g),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let x=0,y=i.count;x<y;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),g.subVectors(h,u),v.subVectors(l,u),g.cross(v),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)_n.fromBufferAttribute(e,i),_n.normalize(),e.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function e(d,m){const p=d.array,g=d.itemSize,v=d.normalized,x=new p.constructor(m.length*g);let y=0,b=0;for(let R=0,M=m.length;R<M;R++){d.isInterleavedBufferAttribute?y=m[R]*d.data.stride+d.offset:y=m[R]*g;for(let _=0;_<g;_++)x[b++]=p[y++]}return new si(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ea,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let g=0,v=p.length;g<v;g++){const x=p[g],y=e(x,r);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,x=p.length;v<x;v++){const y=p[v];g.push(y.toJSON(e.data))}g.length>0&&(l[m]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=e.morphAttributes;for(const p in u){const g=[],v=u[p];for(let x=0,y=v.length;x<y;x++)g.push(v[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,g=h.length;p<g;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const f_=new sn,nr=new iv,Jl=new Mc,h_=new st,$l=new st,tc=new st,ec=new st,th=new st,nc=new st,d_=new st,ic=new st;class Qi extends Hn{constructor(e=new ea,i=new sv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){nc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=d[m],v=u[m];g!==0&&(th.fromBufferAttribute(v,e),h?nc.addScaledVector(th,g):nc.addScaledVector(th.sub(i),g))}i.add(nc)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Jl.copy(r.boundingSphere),Jl.applyMatrix4(u),nr.copy(e.ray).recast(e.near),!(Jl.containsPoint(nr.origin)===!1&&(nr.intersectSphere(Jl,h_)===null||nr.origin.distanceToSquared(h_)>(e.far-e.near)**2))&&(f_.copy(u).invert(),nr.copy(e.ray).applyMatrix4(f_),!(r.boundingBox!==null&&nr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,nr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,x=u.groups,y=u.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,R=x.length;b<R;b++){const M=x[b],_=h[M.materialIndex],I=Math.max(M.start,y.start),P=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let U=I,z=P;U<z;U+=3){const G=d.getX(U),F=d.getX(U+1),j=d.getX(U+2);l=ac(this,_,e,r,p,g,v,G,F,j),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),R=Math.min(d.count,y.start+y.count);for(let M=b,_=R;M<_;M+=3){const I=d.getX(M),P=d.getX(M+1),U=d.getX(M+2);l=ac(this,h,e,r,p,g,v,I,P,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,R=x.length;b<R;b++){const M=x[b],_=h[M.materialIndex],I=Math.max(M.start,y.start),P=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let U=I,z=P;U<z;U+=3){const G=U,F=U+1,j=U+2;l=ac(this,_,e,r,p,g,v,G,F,j),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),R=Math.min(m.count,y.start+y.count);for(let M=b,_=R;M<_;M+=3){const I=M,P=M+1,U=M+2;l=ac(this,h,e,r,p,g,v,I,P,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function GS(o,e,i,r,l,u,h,d){let m;if(e.side===In?m=r.intersectTriangle(h,u,l,!0,d):m=r.intersectTriangle(l,u,h,e.side===Pa,d),m===null)return null;ic.copy(d),ic.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(ic);return p<i.near||p>i.far?null:{distance:p,point:ic.clone(),object:o}}function ac(o,e,i,r,l,u,h,d,m,p){o.getVertexPosition(d,$l),o.getVertexPosition(m,tc),o.getVertexPosition(p,ec);const g=GS(o,e,i,r,$l,tc,ec,d_);if(g){const v=new st;mi.getBarycoord(d_,$l,tc,ec,v),l&&(g.uv=mi.getInterpolatedAttribute(l,d,m,p,v,new Be)),u&&(g.uv1=mi.getInterpolatedAttribute(u,d,m,p,v,new Be)),h&&(g.normal=mi.getInterpolatedAttribute(h,d,m,p,v,new st),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new st,materialIndex:0};mi.getNormal($l,tc,ec,x.normal),g.face=x,g.barycoord=v}return g}class Lo extends ea{constructor(e=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],g=[],v=[];let x=0,y=0;b("z","y","x",-1,-1,r,i,e,h,u,0),b("z","y","x",1,-1,r,i,-e,h,u,1),b("x","z","y",1,1,e,r,i,l,h,2),b("x","z","y",1,-1,e,r,-i,l,h,3),b("x","y","z",1,-1,e,i,r,l,u,4),b("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new hr(p,3)),this.setAttribute("normal",new hr(g,3)),this.setAttribute("uv",new hr(v,2));function b(R,M,_,I,P,U,z,G,F,j,w){const C=U/F,V=z/j,nt=U/2,ct=z/2,_t=G/2,lt=F+1,O=j+1;let Z=0,q=0;const xt=new st;for(let D=0;D<O;D++){const J=D*V-ct;for(let vt=0;vt<lt;vt++){const St=vt*C-nt;xt[R]=St*I,xt[M]=J*P,xt[_]=_t,p.push(xt.x,xt.y,xt.z),xt[R]=0,xt[M]=0,xt[_]=G>0?1:-1,g.push(xt.x,xt.y,xt.z),v.push(vt/F),v.push(1-D/j),Z+=1}}for(let D=0;D<j;D++)for(let J=0;J<F;J++){const vt=x+J+lt*D,St=x+J+lt*(D+1),Dt=x+(J+1)+lt*(D+1),Ft=x+(J+1)+lt*D;m.push(vt,St,Ft),m.push(St,Dt,Ft),q+=6}d.addGroup(y,q,w),y+=q,x+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _s(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Un(o){const e={};for(let i=0;i<o.length;i++){const r=_s(o[i]);for(const l in r)e[l]=r[l]}return e}function VS(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function cv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Te.workingColorSpace}const kS={clone:_s,merge:Un};var XS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,WS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ba extends Uo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=XS,this.fragmentShader=WS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_s(e.uniforms),this.uniformsGroups=VS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class uv extends Hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=Ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ua=new st,p_=new Be,m_=new Be;class ri extends uv{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Jh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jh*2*Math.atan(Math.tan(Nf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Ua.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ua.x,Ua.y).multiplyScalar(-e/Ua.z),Ua.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ua.x,Ua.y).multiplyScalar(-e/Ua.z)}getViewSize(e,i){return this.getViewBounds(e,p_,m_),i.subVectors(m_,p_)}setViewOffset(e,i,r,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Nf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const os=-90,ls=1;class qS extends Hn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ri(os,ls,e,i);l.layers=this.layers,this.add(l);const u=new ri(os,ls,e,i);u.layers=this.layers,this.add(u);const h=new ri(os,ls,e,i);h.layers=this.layers,this.add(h);const d=new ri(os,ls,e,i);d.layers=this.layers,this.add(d);const m=new ri(os,ls,e,i);m.layers=this.layers,this.add(m);const p=new ri(os,ls,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(e===Ri)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===vc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,g]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(v,x,y),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class fv extends Fn{constructor(e=[],i=ps,r,l,u,h,d,m,p,g){super(e,i,r,l,u,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class YS extends pr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new fv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Lo(5,5,5),u=new Ba({name:"CubemapFromEquirect",uniforms:_s(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:In,blending:Na});u.uniforms.tEquirect.value=i;const h=new Qi(l,u),d=i.minFilter;return i.minFilter===fr&&(i.minFilter=bi),new qS(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(u)}}class rc extends Hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ZS={type:"move"};class eh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new st,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new st),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new st,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new st),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const R of e.hand.values()){const M=i.getJointPose(R,r),_=this._getHandJoint(p,R);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=g.position.distanceTo(v.position),y=.02,b=.005;p.inputState.pinching&&x>y+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=y-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(ZS)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new rc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class jS extends Hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ta,this.environmentIntensity=1,this.environmentRotation=new ta,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const nh=new st,KS=new st,QS=new le;class sr{constructor(e=new st(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=nh.subVectors(r,i).cross(KS.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(nh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||QS.getNormalMatrix(e),l=this.coplanarPoint(nh).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ir=new Mc,JS=new Be(.5,.5),sc=new st;class hv{constructor(e=new sr,i=new sr,r=new sr,l=new sr,u=new sr,h=new sr){this.planes=[e,i,r,l,u,h]}set(e,i,r,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Ri,r=!1){const l=this.planes,u=e.elements,h=u[0],d=u[1],m=u[2],p=u[3],g=u[4],v=u[5],x=u[6],y=u[7],b=u[8],R=u[9],M=u[10],_=u[11],I=u[12],P=u[13],U=u[14],z=u[15];if(l[0].setComponents(p-h,y-g,_-b,z-I).normalize(),l[1].setComponents(p+h,y+g,_+b,z+I).normalize(),l[2].setComponents(p+d,y+v,_+R,z+P).normalize(),l[3].setComponents(p-d,y-v,_-R,z-P).normalize(),r)l[4].setComponents(m,x,M,U).normalize(),l[5].setComponents(p-m,y-x,_-M,z-U).normalize();else if(l[4].setComponents(p-m,y-x,_-M,z-U).normalize(),i===Ri)l[5].setComponents(p+m,y+x,_+M,z+U).normalize();else if(i===vc)l[5].setComponents(m,x,M,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ir.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ir)}intersectsSprite(e){ir.center.set(0,0,0);const i=JS.distanceTo(e.center);return ir.radius=.7071067811865476+i,ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(ir)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(sc.x=l.normal.x>0?e.max.x:e.min.x,sc.y=l.normal.y>0?e.max.y:e.min.y,sc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(sc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class dv extends Uo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const g_=new sn,$h=new iv,oc=new Mc,lc=new st;class $S extends Hn{constructor(e=new ea,i=new dv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),oc.copy(r.boundingSphere),oc.applyMatrix4(l),oc.radius+=u,e.ray.intersectsSphere(oc)===!1)return;g_.copy(l).invert(),$h.copy(e.ray).applyMatrix4(g_);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=r.index,v=r.attributes.position;if(p!==null){const x=Math.max(0,h.start),y=Math.min(p.count,h.start+h.count);for(let b=x,R=y;b<R;b++){const M=p.getX(b);lc.fromBufferAttribute(v,M),__(lc,M,m,l,e,i,this)}}else{const x=Math.max(0,h.start),y=Math.min(v.count,h.start+h.count);for(let b=x,R=y;b<R;b++)lc.fromBufferAttribute(v,b),__(lc,b,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function __(o,e,i,r,l,u,h){const d=$h.distanceSqToPoint(o);if(d<i){const m=new st;$h.closestPointToPoint(o,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class pv extends Fn{constructor(e,i,r=dr,l,u,h,d=_i,m=_i,p,g=To,v=1){if(g!==To&&g!==Ao)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:v};super(x,l,u,h,d,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new cd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class mv extends Fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class yc extends ea{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,v=e/d,x=i/m,y=[],b=[],R=[],M=[];for(let _=0;_<g;_++){const I=_*x-h;for(let P=0;P<p;P++){const U=P*v-u;b.push(U,-I,0),R.push(0,0,1),M.push(P/d),M.push(1-_/m)}}for(let _=0;_<m;_++)for(let I=0;I<d;I++){const P=I+p*_,U=I+p*(_+1),z=I+1+p*(_+1),G=I+1+p*_;y.push(P,U,G),y.push(U,z,G)}this.setIndex(y),this.setAttribute("position",new hr(b,3)),this.setAttribute("normal",new hr(R,3)),this.setAttribute("uv",new hr(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yc(e.width,e.height,e.widthSegments,e.heightSegments)}}class tM extends Uo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class eM extends Uo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class nM extends uv{constructor(e=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class iM extends ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function v_(o,e,i,r){const l=aM(r);switch(i){case K_:return o*e;case J_:return o*e/l.components*l.byteLength;case sd:return o*e/l.components*l.byteLength;case $_:return o*e*2/l.components*l.byteLength;case od:return o*e*2/l.components*l.byteLength;case Q_:return o*e*3/l.components*l.byteLength;case gi:return o*e*4/l.components*l.byteLength;case ld:return o*e*4/l.components*l.byteLength;case hc:case dc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case pc:case mc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ah:case Rh:return Math.max(o,16)*Math.max(e,8)/4;case Th:case bh:return Math.max(o,8)*Math.max(e,8)/2;case Ch:case wh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Dh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Uh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Lh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Nh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Oh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Bh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case zh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Ih:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Fh:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Gh:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Vh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case kh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Xh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Wh:case qh:case Yh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Zh:case jh:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Kh:case Qh:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function aM(o){switch(o){case $i:case q_:return{byteLength:1,components:1};case yo:case Y_:case Ro:return{byteLength:2,components:1};case ad:case rd:return{byteLength:2,components:4};case dr:case id:case Ki:return{byteLength:4,components:1};case Z_:case j_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function gv(){let o=null,e=!1,i=null,r=null;function l(u,h){i(u,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function rM(o){const e=new WeakMap;function i(d,m){const p=d.array,g=d.usage,v=p.byteLength,x=o.createBuffer();o.bindBuffer(m,x),o.bufferData(m,p,g),d.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,m,p){const g=m.array,v=m.updateRanges;if(o.bindBuffer(p,d),v.length===0)o.bufferSubData(p,0,g);else{v.sort((y,b)=>y.start-b.start);let x=0;for(let y=1;y<v.length;y++){const b=v[x],R=v[y];R.start<=b.start+b.count+1?b.count=Math.max(b.count,R.start+R.count-b.start):(++x,v[x]=R)}v.length=x+1;for(let y=0,b=v.length;y<b;y++){const R=v[y];o.bufferSubData(p,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var sM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,oM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,mM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_M=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,SM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,MM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,yM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,EM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,TM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,AM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,RM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,CM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,wM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,DM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,UM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,LM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,NM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,OM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,PM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,BM="gl_FragColor = linearToOutputTexel( gl_FragColor );",zM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,IM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,FM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,HM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,GM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,VM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,XM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,WM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,YM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ZM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,KM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,QM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,JM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$M=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ty=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ey=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ny=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ay=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ry=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,oy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ly=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,py=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,my=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_y=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,My=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,yy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ey=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ty=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ay=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,by=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ry=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Uy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ly=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ny=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Oy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Py=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,By=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Iy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Vy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ky=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Xy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Yy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ky=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$y=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,eE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,aE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,dE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,pE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,mE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_E=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,SE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ME=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,TE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,RE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,DE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,OE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,PE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,IE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fe={alphahash_fragment:sM,alphahash_pars_fragment:oM,alphamap_fragment:lM,alphamap_pars_fragment:cM,alphatest_fragment:uM,alphatest_pars_fragment:fM,aomap_fragment:hM,aomap_pars_fragment:dM,batching_pars_vertex:pM,batching_vertex:mM,begin_vertex:gM,beginnormal_vertex:_M,bsdfs:vM,iridescence_fragment:xM,bumpmap_pars_fragment:SM,clipping_planes_fragment:MM,clipping_planes_pars_fragment:yM,clipping_planes_pars_vertex:EM,clipping_planes_vertex:TM,color_fragment:AM,color_pars_fragment:bM,color_pars_vertex:RM,color_vertex:CM,common:wM,cube_uv_reflection_fragment:DM,defaultnormal_vertex:UM,displacementmap_pars_vertex:LM,displacementmap_vertex:NM,emissivemap_fragment:OM,emissivemap_pars_fragment:PM,colorspace_fragment:BM,colorspace_pars_fragment:zM,envmap_fragment:IM,envmap_common_pars_fragment:FM,envmap_pars_fragment:HM,envmap_pars_vertex:GM,envmap_physical_pars_fragment:JM,envmap_vertex:VM,fog_vertex:kM,fog_pars_vertex:XM,fog_fragment:WM,fog_pars_fragment:qM,gradientmap_pars_fragment:YM,lightmap_pars_fragment:ZM,lights_lambert_fragment:jM,lights_lambert_pars_fragment:KM,lights_pars_begin:QM,lights_toon_fragment:$M,lights_toon_pars_fragment:ty,lights_phong_fragment:ey,lights_phong_pars_fragment:ny,lights_physical_fragment:iy,lights_physical_pars_fragment:ay,lights_fragment_begin:ry,lights_fragment_maps:sy,lights_fragment_end:oy,logdepthbuf_fragment:ly,logdepthbuf_pars_fragment:cy,logdepthbuf_pars_vertex:uy,logdepthbuf_vertex:fy,map_fragment:hy,map_pars_fragment:dy,map_particle_fragment:py,map_particle_pars_fragment:my,metalnessmap_fragment:gy,metalnessmap_pars_fragment:_y,morphinstance_vertex:vy,morphcolor_vertex:xy,morphnormal_vertex:Sy,morphtarget_pars_vertex:My,morphtarget_vertex:yy,normal_fragment_begin:Ey,normal_fragment_maps:Ty,normal_pars_fragment:Ay,normal_pars_vertex:by,normal_vertex:Ry,normalmap_pars_fragment:Cy,clearcoat_normal_fragment_begin:wy,clearcoat_normal_fragment_maps:Dy,clearcoat_pars_fragment:Uy,iridescence_pars_fragment:Ly,opaque_fragment:Ny,packing:Oy,premultiplied_alpha_fragment:Py,project_vertex:By,dithering_fragment:zy,dithering_pars_fragment:Iy,roughnessmap_fragment:Fy,roughnessmap_pars_fragment:Hy,shadowmap_pars_fragment:Gy,shadowmap_pars_vertex:Vy,shadowmap_vertex:ky,shadowmask_pars_fragment:Xy,skinbase_vertex:Wy,skinning_pars_vertex:qy,skinning_vertex:Yy,skinnormal_vertex:Zy,specularmap_fragment:jy,specularmap_pars_fragment:Ky,tonemapping_fragment:Qy,tonemapping_pars_fragment:Jy,transmission_fragment:$y,transmission_pars_fragment:tE,uv_pars_fragment:eE,uv_pars_vertex:nE,uv_vertex:iE,worldpos_vertex:aE,background_vert:rE,background_frag:sE,backgroundCube_vert:oE,backgroundCube_frag:lE,cube_vert:cE,cube_frag:uE,depth_vert:fE,depth_frag:hE,distanceRGBA_vert:dE,distanceRGBA_frag:pE,equirect_vert:mE,equirect_frag:gE,linedashed_vert:_E,linedashed_frag:vE,meshbasic_vert:xE,meshbasic_frag:SE,meshlambert_vert:ME,meshlambert_frag:yE,meshmatcap_vert:EE,meshmatcap_frag:TE,meshnormal_vert:AE,meshnormal_frag:bE,meshphong_vert:RE,meshphong_frag:CE,meshphysical_vert:wE,meshphysical_frag:DE,meshtoon_vert:UE,meshtoon_frag:LE,points_vert:NE,points_frag:OE,shadow_vert:PE,shadow_frag:BE,sprite_vert:zE,sprite_frag:IE},Nt={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},Ai={basic:{uniforms:Un([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:Un([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new we(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:Un([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:Un([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:Un([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new we(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:Un([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:Un([Nt.points,Nt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:Un([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:Un([Nt.common,Nt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:Un([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:Un([Nt.sprite,Nt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distanceRGBA:{uniforms:Un([Nt.common,Nt.displacementmap,{referencePosition:{value:new st},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distanceRGBA_vert,fragmentShader:fe.distanceRGBA_frag},shadow:{uniforms:Un([Nt.lights,Nt.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};Ai.physical={uniforms:Un([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const cc={r:0,b:0,g:0},ar=new ta,FE=new sn;function HE(o,e,i,r,l,u,h){const d=new we(0);let m=u===!0?0:1,p,g,v=null,x=0,y=null;function b(P){let U=P.isScene===!0?P.background:null;return U&&U.isTexture&&(U=(P.backgroundBlurriness>0?i:e).get(U)),U}function R(P){let U=!1;const z=b(P);z===null?_(d,m):z&&z.isColor&&(_(z,1),U=!0);const G=o.xr.getEnvironmentBlendMode();G==="additive"?r.buffers.color.setClear(0,0,0,1,h):G==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||U)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(P,U){const z=b(U);z&&(z.isCubeTexture||z.mapping===Sc)?(g===void 0&&(g=new Qi(new Lo(1,1,1),new Ba({name:"BackgroundCubeMaterial",uniforms:_s(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(G,F,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),ar.copy(U.backgroundRotation),ar.x*=-1,ar.y*=-1,ar.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),g.material.uniforms.envMap.value=z,g.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(FE.makeRotationFromEuler(ar)),g.material.toneMapped=Te.getTransfer(z.colorSpace)!==Pe,(v!==z||x!==z.version||y!==o.toneMapping)&&(g.material.needsUpdate=!0,v=z,x=z.version,y=o.toneMapping),g.layers.enableAll(),P.unshift(g,g.geometry,g.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new Qi(new yc(2,2),new Ba({name:"BackgroundMaterial",uniforms:_s(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:Pa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=Te.getTransfer(z.colorSpace)!==Pe,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(v!==z||x!==z.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,v=z,x=z.version,y=o.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function _(P,U){P.getRGB(cc,cv(o)),r.buffers.color.setClear(cc.r,cc.g,cc.b,U,h)}function I(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(P,U=1){d.set(P),m=U,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(P){m=P,_(d,m)},render:R,addToRenderList:M,dispose:I}}function GE(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=x(null);let u=l,h=!1;function d(C,V,nt,ct,_t){let lt=!1;const O=v(ct,nt,V);u!==O&&(u=O,p(u.object)),lt=y(C,ct,nt,_t),lt&&b(C,ct,nt,_t),_t!==null&&e.update(_t,o.ELEMENT_ARRAY_BUFFER),(lt||h)&&(h=!1,U(C,V,nt,ct),_t!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(_t).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function g(C){return o.deleteVertexArray(C)}function v(C,V,nt){const ct=nt.wireframe===!0;let _t=r[C.id];_t===void 0&&(_t={},r[C.id]=_t);let lt=_t[V.id];lt===void 0&&(lt={},_t[V.id]=lt);let O=lt[ct];return O===void 0&&(O=x(m()),lt[ct]=O),O}function x(C){const V=[],nt=[],ct=[];for(let _t=0;_t<i;_t++)V[_t]=0,nt[_t]=0,ct[_t]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:nt,attributeDivisors:ct,object:C,attributes:{},index:null}}function y(C,V,nt,ct){const _t=u.attributes,lt=V.attributes;let O=0;const Z=nt.getAttributes();for(const q in Z)if(Z[q].location>=0){const D=_t[q];let J=lt[q];if(J===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(J=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(J=C.instanceColor)),D===void 0||D.attribute!==J||J&&D.data!==J.data)return!0;O++}return u.attributesNum!==O||u.index!==ct}function b(C,V,nt,ct){const _t={},lt=V.attributes;let O=0;const Z=nt.getAttributes();for(const q in Z)if(Z[q].location>=0){let D=lt[q];D===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(D=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(D=C.instanceColor));const J={};J.attribute=D,D&&D.data&&(J.data=D.data),_t[q]=J,O++}u.attributes=_t,u.attributesNum=O,u.index=ct}function R(){const C=u.newAttributes;for(let V=0,nt=C.length;V<nt;V++)C[V]=0}function M(C){_(C,0)}function _(C,V){const nt=u.newAttributes,ct=u.enabledAttributes,_t=u.attributeDivisors;nt[C]=1,ct[C]===0&&(o.enableVertexAttribArray(C),ct[C]=1),_t[C]!==V&&(o.vertexAttribDivisor(C,V),_t[C]=V)}function I(){const C=u.newAttributes,V=u.enabledAttributes;for(let nt=0,ct=V.length;nt<ct;nt++)V[nt]!==C[nt]&&(o.disableVertexAttribArray(nt),V[nt]=0)}function P(C,V,nt,ct,_t,lt,O){O===!0?o.vertexAttribIPointer(C,V,nt,_t,lt):o.vertexAttribPointer(C,V,nt,ct,_t,lt)}function U(C,V,nt,ct){R();const _t=ct.attributes,lt=nt.getAttributes(),O=V.defaultAttributeValues;for(const Z in lt){const q=lt[Z];if(q.location>=0){let xt=_t[Z];if(xt===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(xt=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(xt=C.instanceColor)),xt!==void 0){const D=xt.normalized,J=xt.itemSize,vt=e.get(xt);if(vt===void 0)continue;const St=vt.buffer,Dt=vt.type,Ft=vt.bytesPerElement,tt=Dt===o.INT||Dt===o.UNSIGNED_INT||xt.gpuType===id;if(xt.isInterleavedBufferAttribute){const mt=xt.data,At=mt.stride,jt=xt.offset;if(mt.isInstancedInterleavedBuffer){for(let Wt=0;Wt<q.locationSize;Wt++)_(q.location+Wt,mt.meshPerAttribute);C.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let Wt=0;Wt<q.locationSize;Wt++)M(q.location+Wt);o.bindBuffer(o.ARRAY_BUFFER,St);for(let Wt=0;Wt<q.locationSize;Wt++)P(q.location+Wt,J/q.locationSize,Dt,D,At*Ft,(jt+J/q.locationSize*Wt)*Ft,tt)}else{if(xt.isInstancedBufferAttribute){for(let mt=0;mt<q.locationSize;mt++)_(q.location+mt,xt.meshPerAttribute);C.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let mt=0;mt<q.locationSize;mt++)M(q.location+mt);o.bindBuffer(o.ARRAY_BUFFER,St);for(let mt=0;mt<q.locationSize;mt++)P(q.location+mt,J/q.locationSize,Dt,D,J*Ft,J/q.locationSize*mt*Ft,tt)}}else if(O!==void 0){const D=O[Z];if(D!==void 0)switch(D.length){case 2:o.vertexAttrib2fv(q.location,D);break;case 3:o.vertexAttrib3fv(q.location,D);break;case 4:o.vertexAttrib4fv(q.location,D);break;default:o.vertexAttrib1fv(q.location,D)}}}}I()}function z(){j();for(const C in r){const V=r[C];for(const nt in V){const ct=V[nt];for(const _t in ct)g(ct[_t].object),delete ct[_t];delete V[nt]}delete r[C]}}function G(C){if(r[C.id]===void 0)return;const V=r[C.id];for(const nt in V){const ct=V[nt];for(const _t in ct)g(ct[_t].object),delete ct[_t];delete V[nt]}delete r[C.id]}function F(C){for(const V in r){const nt=r[V];if(nt[C.id]===void 0)continue;const ct=nt[C.id];for(const _t in ct)g(ct[_t].object),delete ct[_t];delete nt[C.id]}}function j(){w(),h=!0,u!==l&&(u=l,p(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:j,resetDefaultState:w,dispose:z,releaseStatesOfGeometry:G,releaseStatesOfProgram:F,initAttributes:R,enableAttribute:M,disableUnusedAttributes:I}}function VE(o,e,i){let r;function l(p){r=p}function u(p,g){o.drawArrays(r,p,g),i.update(g,r,1)}function h(p,g,v){v!==0&&(o.drawArraysInstanced(r,p,g,v),i.update(g,r,v))}function d(p,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,v);let y=0;for(let b=0;b<v;b++)y+=g[b];i.update(y,r,1)}function m(p,g,v,x){if(v===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<p.length;b++)h(p[b],g[b],x[b]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,g,0,x,0,v);let b=0;for(let R=0;R<v;R++)b+=g[R]*x[R];i.update(b,r,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function kE(o,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(F){return!(F!==gi&&r.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const j=F===Ro&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==$i&&r.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Ki&&!j)}function m(F){if(F==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),I=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),z=b>0,G=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:x,maxTextures:y,maxVertexTextures:b,maxTextureSize:R,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:I,maxVaryings:P,maxFragmentUniforms:U,vertexTextures:z,maxSamples:G}}function XE(o){const e=this;let i=null,r=0,l=!1,u=!1;const h=new sr,d=new le,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const y=v.length!==0||x||r!==0||l;return l=x,r=v.length,y},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,x){i=g(v,x,0)},this.setState=function(v,x,y){const b=v.clippingPlanes,R=v.clipIntersection,M=v.clipShadows,_=o.get(v);if(!l||b===null||b.length===0||u&&!M)u?g(null):p();else{const I=u?0:r,P=I*4;let U=_.clippingState||null;m.value=U,U=g(b,x,P,y);for(let z=0;z!==P;++z)U[z]=i[z];_.clippingState=U,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=I}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,x,y,b){const R=v!==null?v.length:0;let M=null;if(R!==0){if(M=m.value,b!==!0||M===null){const _=y+R*4,I=x.matrixWorldInverse;d.getNormalMatrix(I),(M===null||M.length<_)&&(M=new Float32Array(_));for(let P=0,U=y;P!==R;++P,U+=4)h.copy(v[P]).applyMatrix4(I,d),h.normal.toArray(M,U),M[U+3]=h.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,M}}function WE(o){let e=new WeakMap;function i(h,d){return d===Sh?h.mapping=ps:d===Mh&&(h.mapping=ms),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Sh||d===Mh)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new YS(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const us=4,x_=[.125,.215,.35,.446,.526,.582],cr=20,ih=new nM,S_=new we;let ah=null,rh=0,sh=0,oh=!1;const or=(1+Math.sqrt(5))/2,cs=1/or,M_=[new st(-or,cs,0),new st(or,cs,0),new st(-cs,0,or),new st(cs,0,or),new st(0,or,-cs),new st(0,or,cs),new st(-1,1,-1),new st(1,1,-1),new st(-1,1,1),new st(1,1,1)],qE=new st;class y_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,u={}){const{size:h=256,position:d=qE}=u;ah=this._renderer.getRenderTarget(),rh=this._renderer.getActiveCubeFace(),sh=this._renderer.getActiveMipmapLevel(),oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=A_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=T_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ah,rh,sh),this._renderer.xr.enabled=oh,e.scissorTest=!1,uc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===ps||e.mapping===ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ah=this._renderer.getRenderTarget(),rh=this._renderer.getActiveCubeFace(),sh=this._renderer.getActiveMipmapLevel(),oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:bi,minFilter:bi,generateMipmaps:!1,type:Ro,format:gi,colorSpace:gs,depthBuffer:!1},l=E_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=E_(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=YE(u)),this._blurMaterial=ZE(u,e,i)}return l}_compileMaterial(e){const i=new Qi(this._lodPlanes[0],e);this._renderer.compile(i,ih)}_sceneToCubeUV(e,i,r,l,u){const m=new ri(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,y=v.toneMapping;v.getClearColor(S_),v.toneMapping=Oa,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null));const R=new sv({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),M=new Qi(new Lo,R);let _=!1;const I=e.background;I?I.isColor&&(R.color.copy(I),e.background=null,_=!0):(R.color.copy(S_),_=!0);for(let P=0;P<6;P++){const U=P%3;U===0?(m.up.set(0,p[P],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[P],u.y,u.z)):U===1?(m.up.set(0,0,p[P]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[P],u.z)):(m.up.set(0,p[P],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[P]));const z=this._cubeSize;uc(l,U*z,P>2?z:0,z,z),v.setRenderTarget(l),_&&v.render(M,m),v.render(e,m)}M.geometry.dispose(),M.material.dispose(),v.toneMapping=y,v.autoClear=x,e.background=I}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===ps||e.mapping===ms;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=A_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=T_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new Qi(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;uc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,ih)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=M_[(l-u-1)%M_.length];this._blur(e,u-1,u,h,d)}i.autoClear=r}_blur(e,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",u),this._halfBlur(h,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Qi(this._lodPlanes[l],p),x=p.uniforms,y=this._sizeLods[r]-1,b=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*cr-1),R=u/b,M=isFinite(u)?1+Math.floor(g*R):cr;M>cr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${cr}`);const _=[];let I=0;for(let F=0;F<cr;++F){const j=F/R,w=Math.exp(-j*j/2);_.push(w),F===0?I+=w:F<M&&(I+=2*w)}for(let F=0;F<_.length;F++)_[F]=_[F]/I;x.envMap.value=e.texture,x.samples.value=M,x.weights.value=_,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:P}=this;x.dTheta.value=b,x.mipInt.value=P-r;const U=this._sizeLods[l],z=3*U*(l>P-us?l-P+us:0),G=4*(this._cubeSize-U);uc(i,z,G,3*U,2*U),m.setRenderTarget(i),m.render(v,ih)}}function YE(o){const e=[],i=[],r=[];let l=o;const u=o-us+1+x_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-us?m=x_[h-o+us-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),g=-p,v=1+p,x=[g,g,v,g,v,v,g,g,v,v,g,v],y=6,b=6,R=3,M=2,_=1,I=new Float32Array(R*b*y),P=new Float32Array(M*b*y),U=new Float32Array(_*b*y);for(let G=0;G<y;G++){const F=G%3*2/3-1,j=G>2?0:-1,w=[F,j,0,F+2/3,j,0,F+2/3,j+1,0,F,j,0,F+2/3,j+1,0,F,j+1,0];I.set(w,R*b*G),P.set(x,M*b*G);const C=[G,G,G,G,G,G];U.set(C,_*b*G)}const z=new ea;z.setAttribute("position",new si(I,R)),z.setAttribute("uv",new si(P,M)),z.setAttribute("faceIndex",new si(U,_)),e.push(z),l>us&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function E_(o,e,i){const r=new pr(o,e,i);return r.texture.mapping=Sc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function uc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function ZE(o,e,i){const r=new Float32Array(cr),l=new st(0,1,0);return new Ba({name:"SphericalGaussianBlur",defines:{n:cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:ud(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function T_(){return new Ba({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ud(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function A_(){return new Ba({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ud(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function ud(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jE(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Sh||m===Mh,g=m===ps||m===ms;if(p||g){let v=e.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new y_(o)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const y=d.image;return p&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new y_(o)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function KE(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&bo("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function QE(o,e,i,r){const l={},u=new WeakMap;function h(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const b in x.attributes)e.remove(x.attributes[b]);x.removeEventListener("dispose",h),delete l[x.id];const y=u.get(x);y&&(e.remove(y),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(v,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(v){const x=v.attributes;for(const y in x)e.update(x[y],o.ARRAY_BUFFER)}function p(v){const x=[],y=v.index,b=v.attributes.position;let R=0;if(y!==null){const I=y.array;R=y.version;for(let P=0,U=I.length;P<U;P+=3){const z=I[P+0],G=I[P+1],F=I[P+2];x.push(z,G,G,F,F,z)}}else if(b!==void 0){const I=b.array;R=b.version;for(let P=0,U=I.length/3-1;P<U;P+=3){const z=P+0,G=P+1,F=P+2;x.push(z,G,G,F,F,z)}}else return;const M=new(ev(x)?lv:ov)(x,1);M.version=R;const _=u.get(v);_&&e.remove(_),u.set(v,M)}function g(v){const x=u.get(v);if(x){const y=v.index;y!==null&&x.version<y.version&&p(v)}else p(v);return u.get(v)}return{get:d,update:m,getWireframeAttribute:g}}function JE(o,e,i){let r;function l(x){r=x}let u,h;function d(x){u=x.type,h=x.bytesPerElement}function m(x,y){o.drawElements(r,y,u,x*h),i.update(y,r,1)}function p(x,y,b){b!==0&&(o.drawElementsInstanced(r,y,u,x*h,b),i.update(y,r,b))}function g(x,y,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,u,x,0,b);let M=0;for(let _=0;_<b;_++)M+=y[_];i.update(M,r,1)}function v(x,y,b,R){if(b===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<x.length;_++)p(x[_]/h,y[_],R[_]);else{M.multiDrawElementsInstancedWEBGL(r,y,0,u,x,0,R,0,b);let _=0;for(let I=0;I<b;I++)_+=y[I]*R[I];i.update(_,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function $E(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function tT(o,e,i){const r=new WeakMap,l=new $e;function u(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let x=r.get(d);if(x===void 0||x.count!==v){let C=function(){j.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var y=C;x!==void 0&&x.texture.dispose();const b=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let U=0;b===!0&&(U=1),R===!0&&(U=2),M===!0&&(U=3);let z=d.attributes.position.count*U,G=1;z>e.maxTextureSize&&(G=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const F=new Float32Array(z*G*4*v),j=new nv(F,z,G,v);j.type=Ki,j.needsUpdate=!0;const w=U*4;for(let V=0;V<v;V++){const nt=_[V],ct=I[V],_t=P[V],lt=z*G*4*V;for(let O=0;O<nt.count;O++){const Z=O*w;b===!0&&(l.fromBufferAttribute(nt,O),F[lt+Z+0]=l.x,F[lt+Z+1]=l.y,F[lt+Z+2]=l.z,F[lt+Z+3]=0),R===!0&&(l.fromBufferAttribute(ct,O),F[lt+Z+4]=l.x,F[lt+Z+5]=l.y,F[lt+Z+6]=l.z,F[lt+Z+7]=0),M===!0&&(l.fromBufferAttribute(_t,O),F[lt+Z+8]=l.x,F[lt+Z+9]=l.y,F[lt+Z+10]=l.z,F[lt+Z+11]=_t.itemSize===4?l.w:1)}}x={count:v,texture:j,size:new Be(z,G)},r.set(d,x),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const R=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",R),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:u}}function eT(o,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,g=m.geometry,v=e.get(m,g);if(l.get(v)!==p&&(e.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const _v=new Fn,b_=new pv(1,1),vv=new nv,xv=new DS,Sv=new fv,R_=[],C_=[],w_=new Float32Array(16),D_=new Float32Array(9),U_=new Float32Array(4);function xs(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=R_[l];if(u===void 0&&(u=new Float32Array(l),R_[l]=u),e!==0){r.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(u,d)}return u}function fn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function hn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Ec(o,e){let i=C_[e];i===void 0&&(i=new Int32Array(e),C_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function nT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function iT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;o.uniform2fv(this.addr,e),hn(i,e)}}function aT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(fn(i,e))return;o.uniform3fv(this.addr,e),hn(i,e)}}function rT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;o.uniform4fv(this.addr,e),hn(i,e)}}function sT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(fn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),hn(i,e)}else{if(fn(i,r))return;U_.set(r),o.uniformMatrix2fv(this.addr,!1,U_),hn(i,r)}}function oT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(fn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),hn(i,e)}else{if(fn(i,r))return;D_.set(r),o.uniformMatrix3fv(this.addr,!1,D_),hn(i,r)}}function lT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(fn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),hn(i,e)}else{if(fn(i,r))return;w_.set(r),o.uniformMatrix4fv(this.addr,!1,w_),hn(i,r)}}function cT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function uT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;o.uniform2iv(this.addr,e),hn(i,e)}}function fT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(fn(i,e))return;o.uniform3iv(this.addr,e),hn(i,e)}}function hT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;o.uniform4iv(this.addr,e),hn(i,e)}}function dT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function pT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;o.uniform2uiv(this.addr,e),hn(i,e)}}function mT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(fn(i,e))return;o.uniform3uiv(this.addr,e),hn(i,e)}}function gT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;o.uniform4uiv(this.addr,e),hn(i,e)}}function _T(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(b_.compareFunction=tv,u=b_):u=_v,i.setTexture2D(e||u,l)}function vT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||xv,l)}function xT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Sv,l)}function ST(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||vv,l)}function MT(o){switch(o){case 5126:return nT;case 35664:return iT;case 35665:return aT;case 35666:return rT;case 35674:return sT;case 35675:return oT;case 35676:return lT;case 5124:case 35670:return cT;case 35667:case 35671:return uT;case 35668:case 35672:return fT;case 35669:case 35673:return hT;case 5125:return dT;case 36294:return pT;case 36295:return mT;case 36296:return gT;case 35678:case 36198:case 36298:case 36306:case 35682:return _T;case 35679:case 36299:case 36307:return vT;case 35680:case 36300:case 36308:case 36293:return xT;case 36289:case 36303:case 36311:case 36292:return ST}}function yT(o,e){o.uniform1fv(this.addr,e)}function ET(o,e){const i=xs(e,this.size,2);o.uniform2fv(this.addr,i)}function TT(o,e){const i=xs(e,this.size,3);o.uniform3fv(this.addr,i)}function AT(o,e){const i=xs(e,this.size,4);o.uniform4fv(this.addr,i)}function bT(o,e){const i=xs(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function RT(o,e){const i=xs(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function CT(o,e){const i=xs(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function wT(o,e){o.uniform1iv(this.addr,e)}function DT(o,e){o.uniform2iv(this.addr,e)}function UT(o,e){o.uniform3iv(this.addr,e)}function LT(o,e){o.uniform4iv(this.addr,e)}function NT(o,e){o.uniform1uiv(this.addr,e)}function OT(o,e){o.uniform2uiv(this.addr,e)}function PT(o,e){o.uniform3uiv(this.addr,e)}function BT(o,e){o.uniform4uiv(this.addr,e)}function zT(o,e,i){const r=this.cache,l=e.length,u=Ec(i,l);fn(r,u)||(o.uniform1iv(this.addr,u),hn(r,u));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||_v,u[h])}function IT(o,e,i){const r=this.cache,l=e.length,u=Ec(i,l);fn(r,u)||(o.uniform1iv(this.addr,u),hn(r,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||xv,u[h])}function FT(o,e,i){const r=this.cache,l=e.length,u=Ec(i,l);fn(r,u)||(o.uniform1iv(this.addr,u),hn(r,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||Sv,u[h])}function HT(o,e,i){const r=this.cache,l=e.length,u=Ec(i,l);fn(r,u)||(o.uniform1iv(this.addr,u),hn(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||vv,u[h])}function GT(o){switch(o){case 5126:return yT;case 35664:return ET;case 35665:return TT;case 35666:return AT;case 35674:return bT;case 35675:return RT;case 35676:return CT;case 5124:case 35670:return wT;case 35667:case 35671:return DT;case 35668:case 35672:return UT;case 35669:case 35673:return LT;case 5125:return NT;case 36294:return OT;case 36295:return PT;case 36296:return BT;case 35678:case 36198:case 36298:case 36306:case 35682:return zT;case 35679:case 36299:case 36307:return IT;case 35680:case 36300:case 36308:case 36293:return FT;case 36289:case 36303:case 36311:case 36292:return HT}}class VT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=MT(i.type)}}class kT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=GT(i.type)}}class XT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],r)}}}const lh=/(\w+)(\])?(\[|\.)?/g;function L_(o,e){o.seq.push(e),o.map[e.id]=e}function WT(o,e,i){const r=o.name,l=r.length;for(lh.lastIndex=0;;){const u=lh.exec(r),h=lh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){L_(i,p===void 0?new VT(d,o,e):new kT(d,o,e));break}else{let v=i.map[d];v===void 0&&(v=new XT(d),L_(i,v)),i=v}}}class gc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),h=e.getUniformLocation(i,u.name);WT(u,h,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function N_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const qT=37297;let YT=0;function ZT(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const O_=new le;function jT(o){Te._getMatrix(O_,Te.workingColorSpace,o);const e=`mat3( ${O_.elements.map(i=>i.toFixed(4))} )`;switch(Te.getTransfer(o)){case _c:return[e,"LinearTransferOETF"];case Pe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function P_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+ZT(o.getShaderSource(e),d)}else return u}function KT(o,e){const i=jT(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function QT(o,e){let i;switch(e){case iS:i="Linear";break;case aS:i="Reinhard";break;case rS:i="Cineon";break;case sS:i="ACESFilmic";break;case lS:i="AgX";break;case cS:i="Neutral";break;case oS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const fc=new st;function JT(){Te.getLuminanceCoefficients(fc);const o=fc.x.toFixed(4),e=fc.y.toFixed(4),i=fc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $T(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mo).join(`
`)}function tA(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function eA(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Mo(o){return o!==""}function B_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function z_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nA=/^[ \t]*#include +<([\w\d./]+)>/gm;function td(o){return o.replace(nA,aA)}const iA=new Map;function aA(o,e){let i=fe[e];if(i===void 0){const r=iA.get(e);if(r!==void 0)i=fe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return td(i)}const rA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function I_(o){return o.replace(rA,sA)}function sA(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function F_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function oA(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===k_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Bx?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Zi&&(e="SHADOWMAP_TYPE_VSM"),e}function lA(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ps:case ms:e="ENVMAP_TYPE_CUBE";break;case Sc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cA(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ms:e="ENVMAP_MODE_REFRACTION";break}return e}function uA(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case X_:e="ENVMAP_BLENDING_MULTIPLY";break;case eS:e="ENVMAP_BLENDING_MIX";break;case nS:e="ENVMAP_BLENDING_ADD";break}return e}function fA(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function hA(o,e,i,r){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=oA(i),p=lA(i),g=cA(i),v=uA(i),x=fA(i),y=$T(i),b=tA(u),R=l.createProgram();let M,_,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Mo).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Mo).join(`
`),_.length>0&&(_+=`
`)):(M=[F_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mo).join(`
`),_=[F_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Oa?"#define TONE_MAPPING":"",i.toneMapping!==Oa?fe.tonemapping_pars_fragment:"",i.toneMapping!==Oa?QT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,KT("linearToOutputTexel",i.outputColorSpace),JT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Mo).join(`
`)),h=td(h),h=B_(h,i),h=z_(h,i),d=td(d),d=B_(d,i),d=z_(d,i),h=I_(h),d=I_(d),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",i.glslVersion===Jg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Jg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const P=I+M+h,U=I+_+d,z=N_(l,l.VERTEX_SHADER,P),G=N_(l,l.FRAGMENT_SHADER,U);l.attachShader(R,z),l.attachShader(R,G),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function F(V){if(o.debug.checkShaderErrors){const nt=l.getProgramInfoLog(R)||"",ct=l.getShaderInfoLog(z)||"",_t=l.getShaderInfoLog(G)||"",lt=nt.trim(),O=ct.trim(),Z=_t.trim();let q=!0,xt=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(q=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,z,G);else{const D=P_(l,z,"vertex"),J=P_(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+lt+`
`+D+`
`+J)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(O===""||Z==="")&&(xt=!1);xt&&(V.diagnostics={runnable:q,programLog:lt,vertexShader:{log:O,prefix:M},fragmentShader:{log:Z,prefix:_}})}l.deleteShader(z),l.deleteShader(G),j=new gc(l,R),w=eA(l,R)}let j;this.getUniforms=function(){return j===void 0&&F(this),j};let w;this.getAttributes=function(){return w===void 0&&F(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(R,qT)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=YT++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=z,this.fragmentShader=G,this}let dA=0;class pA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new mA(e),i.set(e,r)),r}}class mA{constructor(e){this.id=dA++,this.code=e,this.usedTimes=0}}function gA(o,e,i,r,l,u,h){const d=new av,m=new pA,p=new Set,g=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let y=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(w){return p.add(w),w===0?"uv":`uv${w}`}function M(w,C,V,nt,ct){const _t=nt.fog,lt=ct.geometry,O=w.isMeshStandardMaterial?nt.environment:null,Z=(w.isMeshStandardMaterial?i:e).get(w.envMap||O),q=Z&&Z.mapping===Sc?Z.image.height:null,xt=b[w.type];w.precision!==null&&(y=l.getMaxPrecision(w.precision),y!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",y,"instead."));const D=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,J=D!==void 0?D.length:0;let vt=0;lt.morphAttributes.position!==void 0&&(vt=1),lt.morphAttributes.normal!==void 0&&(vt=2),lt.morphAttributes.color!==void 0&&(vt=3);let St,Dt,Ft,tt;if(xt){const Me=Ai[xt];St=Me.vertexShader,Dt=Me.fragmentShader}else St=w.vertexShader,Dt=w.fragmentShader,m.update(w),Ft=m.getVertexShaderID(w),tt=m.getFragmentShaderID(w);const mt=o.getRenderTarget(),At=o.state.buffers.depth.getReversed(),jt=ct.isInstancedMesh===!0,Wt=ct.isBatchedMesh===!0,he=!!w.map,tn=!!w.matcap,B=!!Z,De=!!w.aoMap,ae=!!w.lightMap,ee=!!w.bumpMap,Ot=!!w.normalMap,Fe=!!w.displacementMap,Gt=!!w.emissiveMap,re=!!w.metalnessMap,Xe=!!w.roughnessMap,We=w.anisotropy>0,L=w.clearcoat>0,E=w.dispersion>0,$=w.iridescence>0,ut=w.sheen>0,dt=w.transmission>0,ot=We&&!!w.anisotropyMap,Pt=L&&!!w.clearcoatMap,bt=L&&!!w.clearcoatNormalMap,kt=L&&!!w.clearcoatRoughnessMap,qt=$&&!!w.iridescenceMap,Mt=$&&!!w.iridescenceThicknessMap,Ut=ut&&!!w.sheenColorMap,Zt=ut&&!!w.sheenRoughnessMap,Vt=!!w.specularMap,Ct=!!w.specularColorMap,se=!!w.specularIntensityMap,k=dt&&!!w.transmissionMap,Tt=dt&&!!w.thicknessMap,Rt=!!w.gradientMap,Bt=!!w.alphaMap,yt=w.alphaTest>0,gt=!!w.alphaHash,Ht=!!w.extensions;let ie=Oa;w.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(ie=o.toneMapping);const be={shaderID:xt,shaderType:w.type,shaderName:w.name,vertexShader:St,fragmentShader:Dt,defines:w.defines,customVertexShaderID:Ft,customFragmentShaderID:tt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:y,batching:Wt,batchingColor:Wt&&ct._colorsTexture!==null,instancing:jt,instancingColor:jt&&ct.instanceColor!==null,instancingMorph:jt&&ct.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:mt===null?o.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:gs,alphaToCoverage:!!w.alphaToCoverage,map:he,matcap:tn,envMap:B,envMapMode:B&&Z.mapping,envMapCubeUVHeight:q,aoMap:De,lightMap:ae,bumpMap:ee,normalMap:Ot,displacementMap:x&&Fe,emissiveMap:Gt,normalMapObjectSpace:Ot&&w.normalMapType===pS,normalMapTangentSpace:Ot&&w.normalMapType===dS,metalnessMap:re,roughnessMap:Xe,anisotropy:We,anisotropyMap:ot,clearcoat:L,clearcoatMap:Pt,clearcoatNormalMap:bt,clearcoatRoughnessMap:kt,dispersion:E,iridescence:$,iridescenceMap:qt,iridescenceThicknessMap:Mt,sheen:ut,sheenColorMap:Ut,sheenRoughnessMap:Zt,specularMap:Vt,specularColorMap:Ct,specularIntensityMap:se,transmission:dt,transmissionMap:k,thicknessMap:Tt,gradientMap:Rt,opaque:w.transparent===!1&&w.blending===fs&&w.alphaToCoverage===!1,alphaMap:Bt,alphaTest:yt,alphaHash:gt,combine:w.combine,mapUv:he&&R(w.map.channel),aoMapUv:De&&R(w.aoMap.channel),lightMapUv:ae&&R(w.lightMap.channel),bumpMapUv:ee&&R(w.bumpMap.channel),normalMapUv:Ot&&R(w.normalMap.channel),displacementMapUv:Fe&&R(w.displacementMap.channel),emissiveMapUv:Gt&&R(w.emissiveMap.channel),metalnessMapUv:re&&R(w.metalnessMap.channel),roughnessMapUv:Xe&&R(w.roughnessMap.channel),anisotropyMapUv:ot&&R(w.anisotropyMap.channel),clearcoatMapUv:Pt&&R(w.clearcoatMap.channel),clearcoatNormalMapUv:bt&&R(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:kt&&R(w.clearcoatRoughnessMap.channel),iridescenceMapUv:qt&&R(w.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&R(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&R(w.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&R(w.sheenRoughnessMap.channel),specularMapUv:Vt&&R(w.specularMap.channel),specularColorMapUv:Ct&&R(w.specularColorMap.channel),specularIntensityMapUv:se&&R(w.specularIntensityMap.channel),transmissionMapUv:k&&R(w.transmissionMap.channel),thicknessMapUv:Tt&&R(w.thicknessMap.channel),alphaMapUv:Bt&&R(w.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(Ot||We),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:ct.isPoints===!0&&!!lt.attributes.uv&&(he||Bt),fog:!!_t,useFog:w.fog===!0,fogExp2:!!_t&&_t.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:At,skinning:ct.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:vt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:ie,decodeVideoTexture:he&&w.map.isVideoTexture===!0&&Te.getTransfer(w.map.colorSpace)===Pe,decodeVideoTextureEmissive:Gt&&w.emissiveMap.isVideoTexture===!0&&Te.getTransfer(w.emissiveMap.colorSpace)===Pe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ji,flipSided:w.side===In,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ht&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&w.extensions.multiDraw===!0||Wt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return be.vertexUv1s=p.has(1),be.vertexUv2s=p.has(2),be.vertexUv3s=p.has(3),p.clear(),be}function _(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const V in w.defines)C.push(V),C.push(w.defines[V]);return w.isRawShaderMaterial===!1&&(I(C,w),P(C,w),C.push(o.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function I(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function P(w,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),w.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),w.push(d.mask)}function U(w){const C=b[w.type];let V;if(C){const nt=Ai[C];V=kS.clone(nt.uniforms)}else V=w.uniforms;return V}function z(w,C){let V;for(let nt=0,ct=g.length;nt<ct;nt++){const _t=g[nt];if(_t.cacheKey===C){V=_t,++V.usedTimes;break}}return V===void 0&&(V=new hA(o,C,w,u),g.push(V)),V}function G(w){if(--w.usedTimes===0){const C=g.indexOf(w);g[C]=g[g.length-1],g.pop(),w.destroy()}}function F(w){m.remove(w)}function j(){m.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:U,acquireProgram:z,releaseProgram:G,releaseShaderCache:F,programs:g,dispose:j}}function _A(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function vA(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function H_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function G_(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function h(v,x,y,b,R,M){let _=o[e];return _===void 0?(_={id:v.id,object:v,geometry:x,material:y,groupOrder:b,renderOrder:v.renderOrder,z:R,group:M},o[e]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=y,_.groupOrder=b,_.renderOrder=v.renderOrder,_.z=R,_.group=M),e++,_}function d(v,x,y,b,R,M){const _=h(v,x,y,b,R,M);y.transmission>0?r.push(_):y.transparent===!0?l.push(_):i.push(_)}function m(v,x,y,b,R,M){const _=h(v,x,y,b,R,M);y.transmission>0?r.unshift(_):y.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,x){i.length>1&&i.sort(v||vA),r.length>1&&r.sort(x||H_),l.length>1&&l.sort(x||H_)}function g(){for(let v=e,x=o.length;v<x;v++){const y=o[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:m,finish:g,sort:p}}function xA(){let o=new WeakMap;function e(r,l){const u=o.get(r);let h;return u===void 0?(h=new G_,o.set(r,[h])):l>=u.length?(h=new G_,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function SA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new st,color:new we};break;case"SpotLight":i={position:new st,direction:new st,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new st,color:new we,distance:0,decay:0};break;case"HemisphereLight":i={direction:new st,skyColor:new we,groundColor:new we};break;case"RectAreaLight":i={color:new we,position:new st,halfWidth:new st,halfHeight:new st};break}return o[e.id]=i,i}}}function MA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let yA=0;function EA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function TA(o){const e=new SA,i=MA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new st);const l=new st,u=new sn,h=new sn;function d(p){let g=0,v=0,x=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let y=0,b=0,R=0,M=0,_=0,I=0,P=0,U=0,z=0,G=0,F=0;p.sort(EA);for(let w=0,C=p.length;w<C;w++){const V=p[w],nt=V.color,ct=V.intensity,_t=V.distance,lt=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)g+=nt.r*ct,v+=nt.g*ct,x+=nt.b*ct;else if(V.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(V.sh.coefficients[O],ct);F++}else if(V.isDirectionalLight){const O=e.get(V);if(O.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const Z=V.shadow,q=i.get(V);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,r.directionalShadow[y]=q,r.directionalShadowMap[y]=lt,r.directionalShadowMatrix[y]=V.shadow.matrix,I++}r.directional[y]=O,y++}else if(V.isSpotLight){const O=e.get(V);O.position.setFromMatrixPosition(V.matrixWorld),O.color.copy(nt).multiplyScalar(ct),O.distance=_t,O.coneCos=Math.cos(V.angle),O.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),O.decay=V.decay,r.spot[R]=O;const Z=V.shadow;if(V.map&&(r.spotLightMap[z]=V.map,z++,Z.updateMatrices(V),V.castShadow&&G++),r.spotLightMatrix[R]=Z.matrix,V.castShadow){const q=i.get(V);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,r.spotShadow[R]=q,r.spotShadowMap[R]=lt,U++}R++}else if(V.isRectAreaLight){const O=e.get(V);O.color.copy(nt).multiplyScalar(ct),O.halfWidth.set(V.width*.5,0,0),O.halfHeight.set(0,V.height*.5,0),r.rectArea[M]=O,M++}else if(V.isPointLight){const O=e.get(V);if(O.color.copy(V.color).multiplyScalar(V.intensity),O.distance=V.distance,O.decay=V.decay,V.castShadow){const Z=V.shadow,q=i.get(V);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,q.shadowCameraNear=Z.camera.near,q.shadowCameraFar=Z.camera.far,r.pointShadow[b]=q,r.pointShadowMap[b]=lt,r.pointShadowMatrix[b]=V.shadow.matrix,P++}r.point[b]=O,b++}else if(V.isHemisphereLight){const O=e.get(V);O.skyColor.copy(V.color).multiplyScalar(ct),O.groundColor.copy(V.groundColor).multiplyScalar(ct),r.hemi[_]=O,_++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Nt.LTC_FLOAT_1,r.rectAreaLTC2=Nt.LTC_FLOAT_2):(r.rectAreaLTC1=Nt.LTC_HALF_1,r.rectAreaLTC2=Nt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=x;const j=r.hash;(j.directionalLength!==y||j.pointLength!==b||j.spotLength!==R||j.rectAreaLength!==M||j.hemiLength!==_||j.numDirectionalShadows!==I||j.numPointShadows!==P||j.numSpotShadows!==U||j.numSpotMaps!==z||j.numLightProbes!==F)&&(r.directional.length=y,r.spot.length=R,r.rectArea.length=M,r.point.length=b,r.hemi.length=_,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=U+z-G,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=F,j.directionalLength=y,j.pointLength=b,j.spotLength=R,j.rectAreaLength=M,j.hemiLength=_,j.numDirectionalShadows=I,j.numPointShadows=P,j.numSpotShadows=U,j.numSpotMaps=z,j.numLightProbes=F,r.version=yA++)}function m(p,g){let v=0,x=0,y=0,b=0,R=0;const M=g.matrixWorldInverse;for(let _=0,I=p.length;_<I;_++){const P=p[_];if(P.isDirectionalLight){const U=r.directional[v];U.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),v++}else if(P.isSpotLight){const U=r.spot[y];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(M),U.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),y++}else if(P.isRectAreaLight){const U=r.rectArea[b];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(M),h.identity(),u.copy(P.matrixWorld),u.premultiply(M),h.extractRotation(u),U.halfWidth.set(P.width*.5,0,0),U.halfHeight.set(0,P.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),b++}else if(P.isPointLight){const U=r.point[x];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(M),x++}else if(P.isHemisphereLight){const U=r.hemi[R];U.direction.setFromMatrixPosition(P.matrixWorld),U.direction.transformDirection(M),R++}}}return{setup:d,setupView:m,state:r}}function V_(o){const e=new TA(o),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function h(g){r.push(g)}function d(){e.setup(i)}function m(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function AA(o){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new V_(o),e.set(l,[d])):u>=h.length?(d=new V_(o),h.push(d)):d=h[u],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const bA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,RA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function CA(o,e,i){let r=new hv;const l=new Be,u=new Be,h=new $e,d=new tM({depthPacking:hS}),m=new eM,p={},g=i.maxTextureSize,v={[Pa]:In,[In]:Pa,[ji]:ji},x=new Ba({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:bA,fragmentShader:RA}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const b=new ea;b.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Qi(b,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=k_;let _=this.type;this.render=function(G,F,j){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||G.length===0)return;const w=o.getRenderTarget(),C=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),nt=o.state;nt.setBlending(Na),nt.buffers.depth.getReversed()===!0?nt.buffers.color.setClear(0,0,0,0):nt.buffers.color.setClear(1,1,1,1),nt.buffers.depth.setTest(!0),nt.setScissorTest(!1);const ct=_!==Zi&&this.type===Zi,_t=_===Zi&&this.type!==Zi;for(let lt=0,O=G.length;lt<O;lt++){const Z=G[lt],q=Z.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const xt=q.getFrameExtents();if(l.multiply(xt),u.copy(q.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/xt.x),l.x=u.x*xt.x,q.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/xt.y),l.y=u.y*xt.y,q.mapSize.y=u.y)),q.map===null||ct===!0||_t===!0){const J=this.type!==Zi?{minFilter:_i,magFilter:_i}:{};q.map!==null&&q.map.dispose(),q.map=new pr(l.x,l.y,J),q.map.texture.name=Z.name+".shadowMap",q.camera.updateProjectionMatrix()}o.setRenderTarget(q.map),o.clear();const D=q.getViewportCount();for(let J=0;J<D;J++){const vt=q.getViewport(J);h.set(u.x*vt.x,u.y*vt.y,u.x*vt.z,u.y*vt.w),nt.viewport(h),q.updateMatrices(Z,J),r=q.getFrustum(),U(F,j,q.camera,Z,this.type)}q.isPointLightShadow!==!0&&this.type===Zi&&I(q,j),q.needsUpdate=!1}_=this.type,M.needsUpdate=!1,o.setRenderTarget(w,C,V)};function I(G,F){const j=e.update(R);x.defines.VSM_SAMPLES!==G.blurSamples&&(x.defines.VSM_SAMPLES=G.blurSamples,y.defines.VSM_SAMPLES=G.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new pr(l.x,l.y)),x.uniforms.shadow_pass.value=G.map.texture,x.uniforms.resolution.value=G.mapSize,x.uniforms.radius.value=G.radius,o.setRenderTarget(G.mapPass),o.clear(),o.renderBufferDirect(F,null,j,x,R,null),y.uniforms.shadow_pass.value=G.mapPass.texture,y.uniforms.resolution.value=G.mapSize,y.uniforms.radius.value=G.radius,o.setRenderTarget(G.map),o.clear(),o.renderBufferDirect(F,null,j,y,R,null)}function P(G,F,j,w){let C=null;const V=j.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(V!==void 0)C=V;else if(C=j.isPointLight===!0?m:d,o.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const nt=C.uuid,ct=F.uuid;let _t=p[nt];_t===void 0&&(_t={},p[nt]=_t);let lt=_t[ct];lt===void 0&&(lt=C.clone(),_t[ct]=lt,F.addEventListener("dispose",z)),C=lt}if(C.visible=F.visible,C.wireframe=F.wireframe,w===Zi?C.side=F.shadowSide!==null?F.shadowSide:F.side:C.side=F.shadowSide!==null?F.shadowSide:v[F.side],C.alphaMap=F.alphaMap,C.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,C.map=F.map,C.clipShadows=F.clipShadows,C.clippingPlanes=F.clippingPlanes,C.clipIntersection=F.clipIntersection,C.displacementMap=F.displacementMap,C.displacementScale=F.displacementScale,C.displacementBias=F.displacementBias,C.wireframeLinewidth=F.wireframeLinewidth,C.linewidth=F.linewidth,j.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const nt=o.properties.get(C);nt.light=j}return C}function U(G,F,j,w,C){if(G.visible===!1)return;if(G.layers.test(F.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&C===Zi)&&(!G.frustumCulled||r.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,G.matrixWorld);const ct=e.update(G),_t=G.material;if(Array.isArray(_t)){const lt=ct.groups;for(let O=0,Z=lt.length;O<Z;O++){const q=lt[O],xt=_t[q.materialIndex];if(xt&&xt.visible){const D=P(G,xt,w,C);G.onBeforeShadow(o,G,F,j,ct,D,q),o.renderBufferDirect(j,null,ct,D,G,q),G.onAfterShadow(o,G,F,j,ct,D,q)}}}else if(_t.visible){const lt=P(G,_t,w,C);G.onBeforeShadow(o,G,F,j,ct,lt,null),o.renderBufferDirect(j,null,ct,lt,G,null),G.onAfterShadow(o,G,F,j,ct,lt,null)}}const nt=G.children;for(let ct=0,_t=nt.length;ct<_t;ct++)U(nt[ct],F,j,w,C)}function z(G){G.target.removeEventListener("dispose",z);for(const j in p){const w=p[j],C=G.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const wA={[dh]:ph,[mh]:vh,[gh]:xh,[ds]:_h,[ph]:dh,[vh]:mh,[xh]:gh,[_h]:ds};function DA(o,e){function i(){let k=!1;const Tt=new $e;let Rt=null;const Bt=new $e(0,0,0,0);return{setMask:function(yt){Rt!==yt&&!k&&(o.colorMask(yt,yt,yt,yt),Rt=yt)},setLocked:function(yt){k=yt},setClear:function(yt,gt,Ht,ie,be){be===!0&&(yt*=ie,gt*=ie,Ht*=ie),Tt.set(yt,gt,Ht,ie),Bt.equals(Tt)===!1&&(o.clearColor(yt,gt,Ht,ie),Bt.copy(Tt))},reset:function(){k=!1,Rt=null,Bt.set(-1,0,0,0)}}}function r(){let k=!1,Tt=!1,Rt=null,Bt=null,yt=null;return{setReversed:function(gt){if(Tt!==gt){const Ht=e.get("EXT_clip_control");gt?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),Tt=gt;const ie=yt;yt=null,this.setClear(ie)}},getReversed:function(){return Tt},setTest:function(gt){gt?mt(o.DEPTH_TEST):At(o.DEPTH_TEST)},setMask:function(gt){Rt!==gt&&!k&&(o.depthMask(gt),Rt=gt)},setFunc:function(gt){if(Tt&&(gt=wA[gt]),Bt!==gt){switch(gt){case dh:o.depthFunc(o.NEVER);break;case ph:o.depthFunc(o.ALWAYS);break;case mh:o.depthFunc(o.LESS);break;case ds:o.depthFunc(o.LEQUAL);break;case gh:o.depthFunc(o.EQUAL);break;case _h:o.depthFunc(o.GEQUAL);break;case vh:o.depthFunc(o.GREATER);break;case xh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Bt=gt}},setLocked:function(gt){k=gt},setClear:function(gt){yt!==gt&&(Tt&&(gt=1-gt),o.clearDepth(gt),yt=gt)},reset:function(){k=!1,Rt=null,Bt=null,yt=null,Tt=!1}}}function l(){let k=!1,Tt=null,Rt=null,Bt=null,yt=null,gt=null,Ht=null,ie=null,be=null;return{setTest:function(Me){k||(Me?mt(o.STENCIL_TEST):At(o.STENCIL_TEST))},setMask:function(Me){Tt!==Me&&!k&&(o.stencilMask(Me),Tt=Me)},setFunc:function(Me,oi,on){(Rt!==Me||Bt!==oi||yt!==on)&&(o.stencilFunc(Me,oi,on),Rt=Me,Bt=oi,yt=on)},setOp:function(Me,oi,on){(gt!==Me||Ht!==oi||ie!==on)&&(o.stencilOp(Me,oi,on),gt=Me,Ht=oi,ie=on)},setLocked:function(Me){k=Me},setClear:function(Me){be!==Me&&(o.clearStencil(Me),be=Me)},reset:function(){k=!1,Tt=null,Rt=null,Bt=null,yt=null,gt=null,Ht=null,ie=null,be=null}}}const u=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let g={},v={},x=new WeakMap,y=[],b=null,R=!1,M=null,_=null,I=null,P=null,U=null,z=null,G=null,F=new we(0,0,0),j=0,w=!1,C=null,V=null,nt=null,ct=null,_t=null;const lt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,Z=0;const q=o.getParameter(o.VERSION);q.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(q)[1]),O=Z>=1):q.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),O=Z>=2);let xt=null,D={};const J=o.getParameter(o.SCISSOR_BOX),vt=o.getParameter(o.VIEWPORT),St=new $e().fromArray(J),Dt=new $e().fromArray(vt);function Ft(k,Tt,Rt,Bt){const yt=new Uint8Array(4),gt=o.createTexture();o.bindTexture(k,gt),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ht=0;Ht<Rt;Ht++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Tt,0,o.RGBA,1,1,Bt,0,o.RGBA,o.UNSIGNED_BYTE,yt):o.texImage2D(Tt+Ht,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,yt);return gt}const tt={};tt[o.TEXTURE_2D]=Ft(o.TEXTURE_2D,o.TEXTURE_2D,1),tt[o.TEXTURE_CUBE_MAP]=Ft(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[o.TEXTURE_2D_ARRAY]=Ft(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),tt[o.TEXTURE_3D]=Ft(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),mt(o.DEPTH_TEST),h.setFunc(ds),ee(!1),Ot(Yg),mt(o.CULL_FACE),De(Na);function mt(k){g[k]!==!0&&(o.enable(k),g[k]=!0)}function At(k){g[k]!==!1&&(o.disable(k),g[k]=!1)}function jt(k,Tt){return v[k]!==Tt?(o.bindFramebuffer(k,Tt),v[k]=Tt,k===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Tt),k===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Tt),!0):!1}function Wt(k,Tt){let Rt=y,Bt=!1;if(k){Rt=x.get(Tt),Rt===void 0&&(Rt=[],x.set(Tt,Rt));const yt=k.textures;if(Rt.length!==yt.length||Rt[0]!==o.COLOR_ATTACHMENT0){for(let gt=0,Ht=yt.length;gt<Ht;gt++)Rt[gt]=o.COLOR_ATTACHMENT0+gt;Rt.length=yt.length,Bt=!0}}else Rt[0]!==o.BACK&&(Rt[0]=o.BACK,Bt=!0);Bt&&o.drawBuffers(Rt)}function he(k){return b!==k?(o.useProgram(k),b=k,!0):!1}const tn={[lr]:o.FUNC_ADD,[Ix]:o.FUNC_SUBTRACT,[Fx]:o.FUNC_REVERSE_SUBTRACT};tn[Hx]=o.MIN,tn[Gx]=o.MAX;const B={[Vx]:o.ZERO,[kx]:o.ONE,[Xx]:o.SRC_COLOR,[fh]:o.SRC_ALPHA,[Kx]:o.SRC_ALPHA_SATURATE,[Zx]:o.DST_COLOR,[qx]:o.DST_ALPHA,[Wx]:o.ONE_MINUS_SRC_COLOR,[hh]:o.ONE_MINUS_SRC_ALPHA,[jx]:o.ONE_MINUS_DST_COLOR,[Yx]:o.ONE_MINUS_DST_ALPHA,[Qx]:o.CONSTANT_COLOR,[Jx]:o.ONE_MINUS_CONSTANT_COLOR,[$x]:o.CONSTANT_ALPHA,[tS]:o.ONE_MINUS_CONSTANT_ALPHA};function De(k,Tt,Rt,Bt,yt,gt,Ht,ie,be,Me){if(k===Na){R===!0&&(At(o.BLEND),R=!1);return}if(R===!1&&(mt(o.BLEND),R=!0),k!==zx){if(k!==M||Me!==w){if((_!==lr||U!==lr)&&(o.blendEquation(o.FUNC_ADD),_=lr,U=lr),Me)switch(k){case fs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case uh:o.blendFunc(o.ONE,o.ONE);break;case Zg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case jg:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case fs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case uh:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Zg:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jg:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}I=null,P=null,z=null,G=null,F.set(0,0,0),j=0,M=k,w=Me}return}yt=yt||Tt,gt=gt||Rt,Ht=Ht||Bt,(Tt!==_||yt!==U)&&(o.blendEquationSeparate(tn[Tt],tn[yt]),_=Tt,U=yt),(Rt!==I||Bt!==P||gt!==z||Ht!==G)&&(o.blendFuncSeparate(B[Rt],B[Bt],B[gt],B[Ht]),I=Rt,P=Bt,z=gt,G=Ht),(ie.equals(F)===!1||be!==j)&&(o.blendColor(ie.r,ie.g,ie.b,be),F.copy(ie),j=be),M=k,w=!1}function ae(k,Tt){k.side===ji?At(o.CULL_FACE):mt(o.CULL_FACE);let Rt=k.side===In;Tt&&(Rt=!Rt),ee(Rt),k.blending===fs&&k.transparent===!1?De(Na):De(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),u.setMask(k.colorWrite);const Bt=k.stencilWrite;d.setTest(Bt),Bt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Gt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?mt(o.SAMPLE_ALPHA_TO_COVERAGE):At(o.SAMPLE_ALPHA_TO_COVERAGE)}function ee(k){C!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),C=k)}function Ot(k){k!==Ox?(mt(o.CULL_FACE),k!==V&&(k===Yg?o.cullFace(o.BACK):k===Px?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):At(o.CULL_FACE),V=k}function Fe(k){k!==nt&&(O&&o.lineWidth(k),nt=k)}function Gt(k,Tt,Rt){k?(mt(o.POLYGON_OFFSET_FILL),(ct!==Tt||_t!==Rt)&&(o.polygonOffset(Tt,Rt),ct=Tt,_t=Rt)):At(o.POLYGON_OFFSET_FILL)}function re(k){k?mt(o.SCISSOR_TEST):At(o.SCISSOR_TEST)}function Xe(k){k===void 0&&(k=o.TEXTURE0+lt-1),xt!==k&&(o.activeTexture(k),xt=k)}function We(k,Tt,Rt){Rt===void 0&&(xt===null?Rt=o.TEXTURE0+lt-1:Rt=xt);let Bt=D[Rt];Bt===void 0&&(Bt={type:void 0,texture:void 0},D[Rt]=Bt),(Bt.type!==k||Bt.texture!==Tt)&&(xt!==Rt&&(o.activeTexture(Rt),xt=Rt),o.bindTexture(k,Tt||tt[k]),Bt.type=k,Bt.texture=Tt)}function L(){const k=D[xt];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $(){try{o.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ut(){try{o.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function dt(){try{o.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ot(){try{o.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pt(){try{o.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function bt(){try{o.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function kt(){try{o.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function qt(){try{o.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Mt(){try{o.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ut(k){St.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),St.copy(k))}function Zt(k){Dt.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),Dt.copy(k))}function Vt(k,Tt){let Rt=p.get(Tt);Rt===void 0&&(Rt=new WeakMap,p.set(Tt,Rt));let Bt=Rt.get(k);Bt===void 0&&(Bt=o.getUniformBlockIndex(Tt,k.name),Rt.set(k,Bt))}function Ct(k,Tt){const Bt=p.get(Tt).get(k);m.get(Tt)!==Bt&&(o.uniformBlockBinding(Tt,Bt,k.__bindingPointIndex),m.set(Tt,Bt))}function se(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},xt=null,D={},v={},x=new WeakMap,y=[],b=null,R=!1,M=null,_=null,I=null,P=null,U=null,z=null,G=null,F=new we(0,0,0),j=0,w=!1,C=null,V=null,nt=null,ct=null,_t=null,St.set(0,0,o.canvas.width,o.canvas.height),Dt.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:mt,disable:At,bindFramebuffer:jt,drawBuffers:Wt,useProgram:he,setBlending:De,setMaterial:ae,setFlipSided:ee,setCullFace:Ot,setLineWidth:Fe,setPolygonOffset:Gt,setScissorTest:re,activeTexture:Xe,bindTexture:We,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:$,texImage2D:qt,texImage3D:Mt,updateUBOMapping:Vt,uniformBlockBinding:Ct,texStorage2D:bt,texStorage3D:kt,texSubImage2D:ut,texSubImage3D:dt,compressedTexSubImage2D:ot,compressedTexSubImage3D:Pt,scissor:Ut,viewport:Zt,reset:se}}function UA(o,e,i,r,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Be,g=new WeakMap;let v;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,E){return y?new OffscreenCanvas(L,E):xc("canvas")}function R(L,E,$){let ut=1;const dt=We(L);if((dt.width>$||dt.height>$)&&(ut=$/Math.max(dt.width,dt.height)),ut<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ot=Math.floor(ut*dt.width),Pt=Math.floor(ut*dt.height);v===void 0&&(v=b(ot,Pt));const bt=E?b(ot,Pt):v;return bt.width=ot,bt.height=Pt,bt.getContext("2d").drawImage(L,0,0,ot,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+ot+"x"+Pt+")."),bt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),L;return L}function M(L){return L.generateMipmaps}function _(L){o.generateMipmap(L)}function I(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function P(L,E,$,ut,dt=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ot=E;if(E===o.RED&&($===o.FLOAT&&(ot=o.R32F),$===o.HALF_FLOAT&&(ot=o.R16F),$===o.UNSIGNED_BYTE&&(ot=o.R8)),E===o.RED_INTEGER&&($===o.UNSIGNED_BYTE&&(ot=o.R8UI),$===o.UNSIGNED_SHORT&&(ot=o.R16UI),$===o.UNSIGNED_INT&&(ot=o.R32UI),$===o.BYTE&&(ot=o.R8I),$===o.SHORT&&(ot=o.R16I),$===o.INT&&(ot=o.R32I)),E===o.RG&&($===o.FLOAT&&(ot=o.RG32F),$===o.HALF_FLOAT&&(ot=o.RG16F),$===o.UNSIGNED_BYTE&&(ot=o.RG8)),E===o.RG_INTEGER&&($===o.UNSIGNED_BYTE&&(ot=o.RG8UI),$===o.UNSIGNED_SHORT&&(ot=o.RG16UI),$===o.UNSIGNED_INT&&(ot=o.RG32UI),$===o.BYTE&&(ot=o.RG8I),$===o.SHORT&&(ot=o.RG16I),$===o.INT&&(ot=o.RG32I)),E===o.RGB_INTEGER&&($===o.UNSIGNED_BYTE&&(ot=o.RGB8UI),$===o.UNSIGNED_SHORT&&(ot=o.RGB16UI),$===o.UNSIGNED_INT&&(ot=o.RGB32UI),$===o.BYTE&&(ot=o.RGB8I),$===o.SHORT&&(ot=o.RGB16I),$===o.INT&&(ot=o.RGB32I)),E===o.RGBA_INTEGER&&($===o.UNSIGNED_BYTE&&(ot=o.RGBA8UI),$===o.UNSIGNED_SHORT&&(ot=o.RGBA16UI),$===o.UNSIGNED_INT&&(ot=o.RGBA32UI),$===o.BYTE&&(ot=o.RGBA8I),$===o.SHORT&&(ot=o.RGBA16I),$===o.INT&&(ot=o.RGBA32I)),E===o.RGB&&($===o.UNSIGNED_INT_5_9_9_9_REV&&(ot=o.RGB9_E5),$===o.UNSIGNED_INT_10F_11F_11F_REV&&(ot=o.R11F_G11F_B10F)),E===o.RGBA){const Pt=dt?_c:Te.getTransfer(ut);$===o.FLOAT&&(ot=o.RGBA32F),$===o.HALF_FLOAT&&(ot=o.RGBA16F),$===o.UNSIGNED_BYTE&&(ot=Pt===Pe?o.SRGB8_ALPHA8:o.RGBA8),$===o.UNSIGNED_SHORT_4_4_4_4&&(ot=o.RGBA4),$===o.UNSIGNED_SHORT_5_5_5_1&&(ot=o.RGB5_A1)}return(ot===o.R16F||ot===o.R32F||ot===o.RG16F||ot===o.RG32F||ot===o.RGBA16F||ot===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ot}function U(L,E){let $;return L?E===null||E===dr||E===Eo?$=o.DEPTH24_STENCIL8:E===Ki?$=o.DEPTH32F_STENCIL8:E===yo&&($=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===dr||E===Eo?$=o.DEPTH_COMPONENT24:E===Ki?$=o.DEPTH_COMPONENT32F:E===yo&&($=o.DEPTH_COMPONENT16),$}function z(L,E){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==_i&&L.minFilter!==bi?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function G(L){const E=L.target;E.removeEventListener("dispose",G),j(E),E.isVideoTexture&&g.delete(E)}function F(L){const E=L.target;E.removeEventListener("dispose",F),C(E)}function j(L){const E=r.get(L);if(E.__webglInit===void 0)return;const $=L.source,ut=x.get($);if(ut){const dt=ut[E.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&w(L),Object.keys(ut).length===0&&x.delete($)}r.remove(L)}function w(L){const E=r.get(L);o.deleteTexture(E.__webglTexture);const $=L.source,ut=x.get($);delete ut[E.__cacheKey],h.memory.textures--}function C(L){const E=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(E.__webglFramebuffer[ut]))for(let dt=0;dt<E.__webglFramebuffer[ut].length;dt++)o.deleteFramebuffer(E.__webglFramebuffer[ut][dt]);else o.deleteFramebuffer(E.__webglFramebuffer[ut]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ut])}else{if(Array.isArray(E.__webglFramebuffer))for(let ut=0;ut<E.__webglFramebuffer.length;ut++)o.deleteFramebuffer(E.__webglFramebuffer[ut]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ut=0;ut<E.__webglColorRenderbuffer.length;ut++)E.__webglColorRenderbuffer[ut]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ut]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const $=L.textures;for(let ut=0,dt=$.length;ut<dt;ut++){const ot=r.get($[ut]);ot.__webglTexture&&(o.deleteTexture(ot.__webglTexture),h.memory.textures--),r.remove($[ut])}r.remove(L)}let V=0;function nt(){V=0}function ct(){const L=V;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),V+=1,L}function _t(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function lt(L,E){const $=r.get(L);if(L.isVideoTexture&&re(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&$.__version!==L.version){const ut=L.image;if(ut===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt($,L,E);return}}else L.isExternalTexture&&($.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,$.__webglTexture,o.TEXTURE0+E)}function O(L,E){const $=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){tt($,L,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,$.__webglTexture,o.TEXTURE0+E)}function Z(L,E){const $=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){tt($,L,E);return}i.bindTexture(o.TEXTURE_3D,$.__webglTexture,o.TEXTURE0+E)}function q(L,E){const $=r.get(L);if(L.version>0&&$.__version!==L.version){mt($,L,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,$.__webglTexture,o.TEXTURE0+E)}const xt={[yh]:o.REPEAT,[ur]:o.CLAMP_TO_EDGE,[Eh]:o.MIRRORED_REPEAT},D={[_i]:o.NEAREST,[uS]:o.NEAREST_MIPMAP_NEAREST,[Vl]:o.NEAREST_MIPMAP_LINEAR,[bi]:o.LINEAR,[Lf]:o.LINEAR_MIPMAP_NEAREST,[fr]:o.LINEAR_MIPMAP_LINEAR},J={[mS]:o.NEVER,[MS]:o.ALWAYS,[gS]:o.LESS,[tv]:o.LEQUAL,[_S]:o.EQUAL,[SS]:o.GEQUAL,[vS]:o.GREATER,[xS]:o.NOTEQUAL};function vt(L,E){if(E.type===Ki&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===bi||E.magFilter===Lf||E.magFilter===Vl||E.magFilter===fr||E.minFilter===bi||E.minFilter===Lf||E.minFilter===Vl||E.minFilter===fr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,xt[E.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,xt[E.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,xt[E.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,D[E.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,D[E.minFilter]),E.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,J[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===_i||E.minFilter!==Vl&&E.minFilter!==fr||E.type===Ki&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");o.texParameterf(L,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function St(L,E){let $=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",G));const ut=E.source;let dt=x.get(ut);dt===void 0&&(dt={},x.set(ut,dt));const ot=_t(E);if(ot!==L.__cacheKey){dt[ot]===void 0&&(dt[ot]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,$=!0),dt[ot].usedTimes++;const Pt=dt[L.__cacheKey];Pt!==void 0&&(dt[L.__cacheKey].usedTimes--,Pt.usedTimes===0&&w(E)),L.__cacheKey=ot,L.__webglTexture=dt[ot].texture}return $}function Dt(L,E,$){return Math.floor(Math.floor(L/$)/E)}function Ft(L,E,$,ut){const ot=L.updateRanges;if(ot.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,$,ut,E.data);else{ot.sort((Mt,Ut)=>Mt.start-Ut.start);let Pt=0;for(let Mt=1;Mt<ot.length;Mt++){const Ut=ot[Pt],Zt=ot[Mt],Vt=Ut.start+Ut.count,Ct=Dt(Zt.start,E.width,4),se=Dt(Ut.start,E.width,4);Zt.start<=Vt+1&&Ct===se&&Dt(Zt.start+Zt.count-1,E.width,4)===Ct?Ut.count=Math.max(Ut.count,Zt.start+Zt.count-Ut.start):(++Pt,ot[Pt]=Zt)}ot.length=Pt+1;const bt=o.getParameter(o.UNPACK_ROW_LENGTH),kt=o.getParameter(o.UNPACK_SKIP_PIXELS),qt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let Mt=0,Ut=ot.length;Mt<Ut;Mt++){const Zt=ot[Mt],Vt=Math.floor(Zt.start/4),Ct=Math.ceil(Zt.count/4),se=Vt%E.width,k=Math.floor(Vt/E.width),Tt=Ct,Rt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,se),o.pixelStorei(o.UNPACK_SKIP_ROWS,k),i.texSubImage2D(o.TEXTURE_2D,0,se,k,Tt,Rt,$,ut,E.data)}L.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,bt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,kt),o.pixelStorei(o.UNPACK_SKIP_ROWS,qt)}}function tt(L,E,$){let ut=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ut=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ut=o.TEXTURE_3D);const dt=St(L,E),ot=E.source;i.bindTexture(ut,L.__webglTexture,o.TEXTURE0+$);const Pt=r.get(ot);if(ot.version!==Pt.__version||dt===!0){i.activeTexture(o.TEXTURE0+$);const bt=Te.getPrimaries(Te.workingColorSpace),kt=E.colorSpace===La?null:Te.getPrimaries(E.colorSpace),qt=E.colorSpace===La||bt===kt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let Mt=R(E.image,!1,l.maxTextureSize);Mt=Xe(E,Mt);const Ut=u.convert(E.format,E.colorSpace),Zt=u.convert(E.type);let Vt=P(E.internalFormat,Ut,Zt,E.colorSpace,E.isVideoTexture);vt(ut,E);let Ct;const se=E.mipmaps,k=E.isVideoTexture!==!0,Tt=Pt.__version===void 0||dt===!0,Rt=ot.dataReady,Bt=z(E,Mt);if(E.isDepthTexture)Vt=U(E.format===Ao,E.type),Tt&&(k?i.texStorage2D(o.TEXTURE_2D,1,Vt,Mt.width,Mt.height):i.texImage2D(o.TEXTURE_2D,0,Vt,Mt.width,Mt.height,0,Ut,Zt,null));else if(E.isDataTexture)if(se.length>0){k&&Tt&&i.texStorage2D(o.TEXTURE_2D,Bt,Vt,se[0].width,se[0].height);for(let yt=0,gt=se.length;yt<gt;yt++)Ct=se[yt],k?Rt&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Ct.width,Ct.height,Ut,Zt,Ct.data):i.texImage2D(o.TEXTURE_2D,yt,Vt,Ct.width,Ct.height,0,Ut,Zt,Ct.data);E.generateMipmaps=!1}else k?(Tt&&i.texStorage2D(o.TEXTURE_2D,Bt,Vt,Mt.width,Mt.height),Rt&&Ft(E,Mt,Ut,Zt)):i.texImage2D(o.TEXTURE_2D,0,Vt,Mt.width,Mt.height,0,Ut,Zt,Mt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){k&&Tt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,Vt,se[0].width,se[0].height,Mt.depth);for(let yt=0,gt=se.length;yt<gt;yt++)if(Ct=se[yt],E.format!==gi)if(Ut!==null)if(k){if(Rt)if(E.layerUpdates.size>0){const Ht=v_(Ct.width,Ct.height,E.format,E.type);for(const ie of E.layerUpdates){const be=Ct.data.subarray(ie*Ht/Ct.data.BYTES_PER_ELEMENT,(ie+1)*Ht/Ct.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,ie,Ct.width,Ct.height,1,Ut,be)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,Ct.width,Ct.height,Mt.depth,Ut,Ct.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,yt,Vt,Ct.width,Ct.height,Mt.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Rt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,Ct.width,Ct.height,Mt.depth,Ut,Zt,Ct.data):i.texImage3D(o.TEXTURE_2D_ARRAY,yt,Vt,Ct.width,Ct.height,Mt.depth,0,Ut,Zt,Ct.data)}else{k&&Tt&&i.texStorage2D(o.TEXTURE_2D,Bt,Vt,se[0].width,se[0].height);for(let yt=0,gt=se.length;yt<gt;yt++)Ct=se[yt],E.format!==gi?Ut!==null?k?Rt&&i.compressedTexSubImage2D(o.TEXTURE_2D,yt,0,0,Ct.width,Ct.height,Ut,Ct.data):i.compressedTexImage2D(o.TEXTURE_2D,yt,Vt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Rt&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Ct.width,Ct.height,Ut,Zt,Ct.data):i.texImage2D(o.TEXTURE_2D,yt,Vt,Ct.width,Ct.height,0,Ut,Zt,Ct.data)}else if(E.isDataArrayTexture)if(k){if(Tt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,Vt,Mt.width,Mt.height,Mt.depth),Rt)if(E.layerUpdates.size>0){const yt=v_(Mt.width,Mt.height,E.format,E.type);for(const gt of E.layerUpdates){const Ht=Mt.data.subarray(gt*yt/Mt.data.BYTES_PER_ELEMENT,(gt+1)*yt/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,gt,Mt.width,Mt.height,1,Ut,Zt,Ht)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Ut,Zt,Mt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Vt,Mt.width,Mt.height,Mt.depth,0,Ut,Zt,Mt.data);else if(E.isData3DTexture)k?(Tt&&i.texStorage3D(o.TEXTURE_3D,Bt,Vt,Mt.width,Mt.height,Mt.depth),Rt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Ut,Zt,Mt.data)):i.texImage3D(o.TEXTURE_3D,0,Vt,Mt.width,Mt.height,Mt.depth,0,Ut,Zt,Mt.data);else if(E.isFramebufferTexture){if(Tt)if(k)i.texStorage2D(o.TEXTURE_2D,Bt,Vt,Mt.width,Mt.height);else{let yt=Mt.width,gt=Mt.height;for(let Ht=0;Ht<Bt;Ht++)i.texImage2D(o.TEXTURE_2D,Ht,Vt,yt,gt,0,Ut,Zt,null),yt>>=1,gt>>=1}}else if(se.length>0){if(k&&Tt){const yt=We(se[0]);i.texStorage2D(o.TEXTURE_2D,Bt,Vt,yt.width,yt.height)}for(let yt=0,gt=se.length;yt<gt;yt++)Ct=se[yt],k?Rt&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Ut,Zt,Ct):i.texImage2D(o.TEXTURE_2D,yt,Vt,Ut,Zt,Ct);E.generateMipmaps=!1}else if(k){if(Tt){const yt=We(Mt);i.texStorage2D(o.TEXTURE_2D,Bt,Vt,yt.width,yt.height)}Rt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ut,Zt,Mt)}else i.texImage2D(o.TEXTURE_2D,0,Vt,Ut,Zt,Mt);M(E)&&_(ut),Pt.__version=ot.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function mt(L,E,$){if(E.image.length!==6)return;const ut=St(L,E),dt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+$);const ot=r.get(dt);if(dt.version!==ot.__version||ut===!0){i.activeTexture(o.TEXTURE0+$);const Pt=Te.getPrimaries(Te.workingColorSpace),bt=E.colorSpace===La?null:Te.getPrimaries(E.colorSpace),kt=E.colorSpace===La||Pt===bt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);const qt=E.isCompressedTexture||E.image[0].isCompressedTexture,Mt=E.image[0]&&E.image[0].isDataTexture,Ut=[];for(let gt=0;gt<6;gt++)!qt&&!Mt?Ut[gt]=R(E.image[gt],!0,l.maxCubemapSize):Ut[gt]=Mt?E.image[gt].image:E.image[gt],Ut[gt]=Xe(E,Ut[gt]);const Zt=Ut[0],Vt=u.convert(E.format,E.colorSpace),Ct=u.convert(E.type),se=P(E.internalFormat,Vt,Ct,E.colorSpace),k=E.isVideoTexture!==!0,Tt=ot.__version===void 0||ut===!0,Rt=dt.dataReady;let Bt=z(E,Zt);vt(o.TEXTURE_CUBE_MAP,E);let yt;if(qt){k&&Tt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,se,Zt.width,Zt.height);for(let gt=0;gt<6;gt++){yt=Ut[gt].mipmaps;for(let Ht=0;Ht<yt.length;Ht++){const ie=yt[Ht];E.format!==gi?Vt!==null?k?Rt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht,0,0,ie.width,ie.height,Vt,ie.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht,se,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht,0,0,ie.width,ie.height,Vt,Ct,ie.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht,se,ie.width,ie.height,0,Vt,Ct,ie.data)}}}else{if(yt=E.mipmaps,k&&Tt){yt.length>0&&Bt++;const gt=We(Ut[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,se,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(Mt){k?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Ut[gt].width,Ut[gt].height,Vt,Ct,Ut[gt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,se,Ut[gt].width,Ut[gt].height,0,Vt,Ct,Ut[gt].data);for(let Ht=0;Ht<yt.length;Ht++){const be=yt[Ht].image[gt].image;k?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht+1,0,0,be.width,be.height,Vt,Ct,be.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht+1,se,be.width,be.height,0,Vt,Ct,be.data)}}else{k?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Vt,Ct,Ut[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,se,Vt,Ct,Ut[gt]);for(let Ht=0;Ht<yt.length;Ht++){const ie=yt[Ht];k?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht+1,0,0,Vt,Ct,ie.image[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht+1,se,Vt,Ct,ie.image[gt])}}}M(E)&&_(o.TEXTURE_CUBE_MAP),ot.__version=dt.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function At(L,E,$,ut,dt,ot){const Pt=u.convert($.format,$.colorSpace),bt=u.convert($.type),kt=P($.internalFormat,Pt,bt,$.colorSpace),qt=r.get(E),Mt=r.get($);if(Mt.__renderTarget=E,!qt.__hasExternalTextures){const Ut=Math.max(1,E.width>>ot),Zt=Math.max(1,E.height>>ot);dt===o.TEXTURE_3D||dt===o.TEXTURE_2D_ARRAY?i.texImage3D(dt,ot,kt,Ut,Zt,E.depth,0,Pt,bt,null):i.texImage2D(dt,ot,kt,Ut,Zt,0,Pt,bt,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),Gt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ut,dt,Mt.__webglTexture,0,Fe(E)):(dt===o.TEXTURE_2D||dt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ut,dt,Mt.__webglTexture,ot),i.bindFramebuffer(o.FRAMEBUFFER,null)}function jt(L,E,$){if(o.bindRenderbuffer(o.RENDERBUFFER,L),E.depthBuffer){const ut=E.depthTexture,dt=ut&&ut.isDepthTexture?ut.type:null,ot=U(E.stencilBuffer,dt),Pt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,bt=Fe(E);Gt(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,bt,ot,E.width,E.height):$?o.renderbufferStorageMultisample(o.RENDERBUFFER,bt,ot,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ot,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Pt,o.RENDERBUFFER,L)}else{const ut=E.textures;for(let dt=0;dt<ut.length;dt++){const ot=ut[dt],Pt=u.convert(ot.format,ot.colorSpace),bt=u.convert(ot.type),kt=P(ot.internalFormat,Pt,bt,ot.colorSpace),qt=Fe(E);$&&Gt(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,qt,kt,E.width,E.height):Gt(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,qt,kt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,kt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Wt(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ut=r.get(E.depthTexture);ut.__renderTarget=E,(!ut.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),lt(E.depthTexture,0);const dt=ut.__webglTexture,ot=Fe(E);if(E.depthTexture.format===To)Gt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,dt,0,ot):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,dt,0);else if(E.depthTexture.format===Ao)Gt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,dt,0,ot):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,dt,0);else throw new Error("Unknown depthTexture format")}function he(L){const E=r.get(L),$=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const ut=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ut){const dt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ut.removeEventListener("dispose",dt)};ut.addEventListener("dispose",dt),E.__depthDisposeCallback=dt}E.__boundDepthTexture=ut}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const ut=L.texture.mipmaps;ut&&ut.length>0?Wt(E.__webglFramebuffer[0],L):Wt(E.__webglFramebuffer,L)}else if($){E.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ut]),E.__webglDepthbuffer[ut]===void 0)E.__webglDepthbuffer[ut]=o.createRenderbuffer(),jt(E.__webglDepthbuffer[ut],L,!1);else{const dt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ot=E.__webglDepthbuffer[ut];o.bindRenderbuffer(o.RENDERBUFFER,ot),o.framebufferRenderbuffer(o.FRAMEBUFFER,dt,o.RENDERBUFFER,ot)}}else{const ut=L.texture.mipmaps;if(ut&&ut.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),jt(E.__webglDepthbuffer,L,!1);else{const dt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ot=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ot),o.framebufferRenderbuffer(o.FRAMEBUFFER,dt,o.RENDERBUFFER,ot)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function tn(L,E,$){const ut=r.get(L);E!==void 0&&At(ut.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),$!==void 0&&he(L)}function B(L){const E=L.texture,$=r.get(L),ut=r.get(E);L.addEventListener("dispose",F);const dt=L.textures,ot=L.isWebGLCubeRenderTarget===!0,Pt=dt.length>1;if(Pt||(ut.__webglTexture===void 0&&(ut.__webglTexture=o.createTexture()),ut.__version=E.version,h.memory.textures++),ot){$.__webglFramebuffer=[];for(let bt=0;bt<6;bt++)if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[bt]=[];for(let kt=0;kt<E.mipmaps.length;kt++)$.__webglFramebuffer[bt][kt]=o.createFramebuffer()}else $.__webglFramebuffer[bt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let bt=0;bt<E.mipmaps.length;bt++)$.__webglFramebuffer[bt]=o.createFramebuffer()}else $.__webglFramebuffer=o.createFramebuffer();if(Pt)for(let bt=0,kt=dt.length;bt<kt;bt++){const qt=r.get(dt[bt]);qt.__webglTexture===void 0&&(qt.__webglTexture=o.createTexture(),h.memory.textures++)}if(L.samples>0&&Gt(L)===!1){$.__webglMultisampledFramebuffer=o.createFramebuffer(),$.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let bt=0;bt<dt.length;bt++){const kt=dt[bt];$.__webglColorRenderbuffer[bt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,$.__webglColorRenderbuffer[bt]);const qt=u.convert(kt.format,kt.colorSpace),Mt=u.convert(kt.type),Ut=P(kt.internalFormat,qt,Mt,kt.colorSpace,L.isXRRenderTarget===!0),Zt=Fe(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,Zt,Ut,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+bt,o.RENDERBUFFER,$.__webglColorRenderbuffer[bt])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&($.__webglDepthRenderbuffer=o.createRenderbuffer(),jt($.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ot){i.bindTexture(o.TEXTURE_CUBE_MAP,ut.__webglTexture),vt(o.TEXTURE_CUBE_MAP,E);for(let bt=0;bt<6;bt++)if(E.mipmaps&&E.mipmaps.length>0)for(let kt=0;kt<E.mipmaps.length;kt++)At($.__webglFramebuffer[bt][kt],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,kt);else At($.__webglFramebuffer[bt],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0);M(E)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Pt){for(let bt=0,kt=dt.length;bt<kt;bt++){const qt=dt[bt],Mt=r.get(qt);let Ut=o.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ut=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ut,Mt.__webglTexture),vt(Ut,qt),At($.__webglFramebuffer,L,qt,o.COLOR_ATTACHMENT0+bt,Ut,0),M(qt)&&_(Ut)}i.unbindTexture()}else{let bt=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(bt=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(bt,ut.__webglTexture),vt(bt,E),E.mipmaps&&E.mipmaps.length>0)for(let kt=0;kt<E.mipmaps.length;kt++)At($.__webglFramebuffer[kt],L,E,o.COLOR_ATTACHMENT0,bt,kt);else At($.__webglFramebuffer,L,E,o.COLOR_ATTACHMENT0,bt,0);M(E)&&_(bt),i.unbindTexture()}L.depthBuffer&&he(L)}function De(L){const E=L.textures;for(let $=0,ut=E.length;$<ut;$++){const dt=E[$];if(M(dt)){const ot=I(L),Pt=r.get(dt).__webglTexture;i.bindTexture(ot,Pt),_(ot),i.unbindTexture()}}}const ae=[],ee=[];function Ot(L){if(L.samples>0){if(Gt(L)===!1){const E=L.textures,$=L.width,ut=L.height;let dt=o.COLOR_BUFFER_BIT;const ot=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Pt=r.get(L),bt=E.length>1;if(bt)for(let qt=0;qt<E.length;qt++)i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const kt=L.texture.mipmaps;kt&&kt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let qt=0;qt<E.length;qt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(dt|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(dt|=o.STENCIL_BUFFER_BIT)),bt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Pt.__webglColorRenderbuffer[qt]);const Mt=r.get(E[qt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Mt,0)}o.blitFramebuffer(0,0,$,ut,0,0,$,ut,dt,o.NEAREST),m===!0&&(ae.length=0,ee.length=0,ae.push(o.COLOR_ATTACHMENT0+qt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ae.push(ot),ee.push(ot),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ee)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ae))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),bt)for(let qt=0;qt<E.length;qt++){i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.RENDERBUFFER,Pt.__webglColorRenderbuffer[qt]);const Mt=r.get(E[qt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.TEXTURE_2D,Mt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const E=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Fe(L){return Math.min(l.maxSamples,L.samples)}function Gt(L){const E=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function re(L){const E=h.render.frame;g.get(L)!==E&&(g.set(L,E),L.update())}function Xe(L,E){const $=L.colorSpace,ut=L.format,dt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||$!==gs&&$!==La&&(Te.getTransfer($)===Pe?(ut!==gi||dt!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),E}function We(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=ct,this.resetTextureUnits=nt,this.setTexture2D=lt,this.setTexture2DArray=O,this.setTexture3D=Z,this.setTextureCube=q,this.rebindTextures=tn,this.setupRenderTarget=B,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=At,this.useMultisampledRTT=Gt}function LA(o,e){function i(r,l=La){let u;const h=Te.getTransfer(l);if(r===$i)return o.UNSIGNED_BYTE;if(r===ad)return o.UNSIGNED_SHORT_4_4_4_4;if(r===rd)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Z_)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===j_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===q_)return o.BYTE;if(r===Y_)return o.SHORT;if(r===yo)return o.UNSIGNED_SHORT;if(r===id)return o.INT;if(r===dr)return o.UNSIGNED_INT;if(r===Ki)return o.FLOAT;if(r===Ro)return o.HALF_FLOAT;if(r===K_)return o.ALPHA;if(r===Q_)return o.RGB;if(r===gi)return o.RGBA;if(r===To)return o.DEPTH_COMPONENT;if(r===Ao)return o.DEPTH_STENCIL;if(r===J_)return o.RED;if(r===sd)return o.RED_INTEGER;if(r===$_)return o.RG;if(r===od)return o.RG_INTEGER;if(r===ld)return o.RGBA_INTEGER;if(r===hc||r===dc||r===pc||r===mc)if(h===Pe)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===hc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===dc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===pc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===mc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===hc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===dc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===pc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===mc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Th||r===Ah||r===bh||r===Rh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Th)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ah)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===bh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Rh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ch||r===wh||r===Dh)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Ch||r===wh)return h===Pe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Dh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Uh||r===Lh||r===Nh||r===Oh||r===Ph||r===Bh||r===zh||r===Ih||r===Fh||r===Hh||r===Gh||r===Vh||r===kh||r===Xh)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Uh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Lh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Nh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Oh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ph)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Bh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===zh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ih)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Fh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Hh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Gh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Vh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===kh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Xh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Wh||r===qh||r===Yh)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Wh)return h===Pe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===qh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Yh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Zh||r===jh||r===Kh||r===Qh)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Zh)return u.COMPRESSED_RED_RGTC1_EXT;if(r===jh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Kh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Qh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Eo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const NA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,OA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class PA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new mv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Ba({vertexShader:NA,fragmentShader:OA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Qi(new yc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class BA extends vs{constructor(e,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,g=null,v=null,x=null,y=null,b=null;const R=typeof XRWebGLBinding<"u",M=new PA,_={},I=i.getContextAttributes();let P=null,U=null;const z=[],G=[],F=new Be;let j=null;const w=new ri;w.viewport=new $e;const C=new ri;C.viewport=new $e;const V=[w,C],nt=new iM;let ct=null,_t=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let mt=z[tt];return mt===void 0&&(mt=new eh,z[tt]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(tt){let mt=z[tt];return mt===void 0&&(mt=new eh,z[tt]=mt),mt.getGripSpace()},this.getHand=function(tt){let mt=z[tt];return mt===void 0&&(mt=new eh,z[tt]=mt),mt.getHandSpace()};function lt(tt){const mt=G.indexOf(tt.inputSource);if(mt===-1)return;const At=z[mt];At!==void 0&&(At.update(tt.inputSource,tt.frame,p||h),At.dispatchEvent({type:tt.type,data:tt.inputSource}))}function O(){l.removeEventListener("select",lt),l.removeEventListener("selectstart",lt),l.removeEventListener("selectend",lt),l.removeEventListener("squeeze",lt),l.removeEventListener("squeezestart",lt),l.removeEventListener("squeezeend",lt),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",Z);for(let tt=0;tt<z.length;tt++){const mt=G[tt];mt!==null&&(G[tt]=null,z[tt].disconnect(mt))}ct=null,_t=null,M.reset();for(const tt in _)delete _[tt];e.setRenderTarget(P),y=null,x=null,v=null,l=null,U=null,Ft.stop(),r.isPresenting=!1,e.setPixelRatio(j),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){u=tt,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){d=tt,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(tt){p=tt},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return v===null&&R&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(tt){if(l=tt,l!==null){if(P=e.getRenderTarget(),l.addEventListener("select",lt),l.addEventListener("selectstart",lt),l.addEventListener("selectend",lt),l.addEventListener("squeeze",lt),l.addEventListener("squeezestart",lt),l.addEventListener("squeezeend",lt),l.addEventListener("end",O),l.addEventListener("inputsourceschange",Z),I.xrCompatible!==!0&&await i.makeXRCompatible(),j=e.getPixelRatio(),e.getSize(F),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,jt=null,Wt=null;I.depth&&(Wt=I.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,At=I.stencil?Ao:To,jt=I.stencil?Eo:dr);const he={colorFormat:i.RGBA8,depthFormat:Wt,scaleFactor:u};v=this.getBinding(),x=v.createProjectionLayer(he),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),U=new pr(x.textureWidth,x.textureHeight,{format:gi,type:$i,depthTexture:new pv(x.textureWidth,x.textureHeight,jt,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:I.stencil,colorSpace:e.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const At={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,At),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),U=new pr(y.framebufferWidth,y.framebufferHeight,{format:gi,type:$i,colorSpace:e.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Ft.setContext(l),Ft.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function Z(tt){for(let mt=0;mt<tt.removed.length;mt++){const At=tt.removed[mt],jt=G.indexOf(At);jt>=0&&(G[jt]=null,z[jt].disconnect(At))}for(let mt=0;mt<tt.added.length;mt++){const At=tt.added[mt];let jt=G.indexOf(At);if(jt===-1){for(let he=0;he<z.length;he++)if(he>=G.length){G.push(At),jt=he;break}else if(G[he]===null){G[he]=At,jt=he;break}if(jt===-1)break}const Wt=z[jt];Wt&&Wt.connect(At)}}const q=new st,xt=new st;function D(tt,mt,At){q.setFromMatrixPosition(mt.matrixWorld),xt.setFromMatrixPosition(At.matrixWorld);const jt=q.distanceTo(xt),Wt=mt.projectionMatrix.elements,he=At.projectionMatrix.elements,tn=Wt[14]/(Wt[10]-1),B=Wt[14]/(Wt[10]+1),De=(Wt[9]+1)/Wt[5],ae=(Wt[9]-1)/Wt[5],ee=(Wt[8]-1)/Wt[0],Ot=(he[8]+1)/he[0],Fe=tn*ee,Gt=tn*Ot,re=jt/(-ee+Ot),Xe=re*-ee;if(mt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(Xe),tt.translateZ(re),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),Wt[10]===-1)tt.projectionMatrix.copy(mt.projectionMatrix),tt.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{const We=tn+re,L=B+re,E=Fe-Xe,$=Gt+(jt-Xe),ut=De*B/L*We,dt=ae*B/L*We;tt.projectionMatrix.makePerspective(E,$,ut,dt,We,L),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function J(tt,mt){mt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(mt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(l===null)return;let mt=tt.near,At=tt.far;M.texture!==null&&(M.depthNear>0&&(mt=M.depthNear),M.depthFar>0&&(At=M.depthFar)),nt.near=C.near=w.near=mt,nt.far=C.far=w.far=At,(ct!==nt.near||_t!==nt.far)&&(l.updateRenderState({depthNear:nt.near,depthFar:nt.far}),ct=nt.near,_t=nt.far),nt.layers.mask=tt.layers.mask|6,w.layers.mask=nt.layers.mask&3,C.layers.mask=nt.layers.mask&5;const jt=tt.parent,Wt=nt.cameras;J(nt,jt);for(let he=0;he<Wt.length;he++)J(Wt[he],jt);Wt.length===2?D(nt,w,C):nt.projectionMatrix.copy(w.projectionMatrix),vt(tt,nt,jt)};function vt(tt,mt,At){At===null?tt.matrix.copy(mt.matrixWorld):(tt.matrix.copy(At.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(mt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(mt.projectionMatrix),tt.projectionMatrixInverse.copy(mt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Jh*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return nt},this.getFoveation=function(){if(!(x===null&&y===null))return m},this.setFoveation=function(tt){m=tt,x!==null&&(x.fixedFoveation=tt),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=tt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(nt)},this.getCameraTexture=function(tt){return _[tt]};let St=null;function Dt(tt,mt){if(g=mt.getViewerPose(p||h),b=mt,g!==null){const At=g.views;y!==null&&(e.setRenderTargetFramebuffer(U,y.framebuffer),e.setRenderTarget(U));let jt=!1;At.length!==nt.cameras.length&&(nt.cameras.length=0,jt=!0);for(let B=0;B<At.length;B++){const De=At[B];let ae=null;if(y!==null)ae=y.getViewport(De);else{const Ot=v.getViewSubImage(x,De);ae=Ot.viewport,B===0&&(e.setRenderTargetTextures(U,Ot.colorTexture,Ot.depthStencilTexture),e.setRenderTarget(U))}let ee=V[B];ee===void 0&&(ee=new ri,ee.layers.enable(B),ee.viewport=new $e,V[B]=ee),ee.matrix.fromArray(De.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(De.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(ae.x,ae.y,ae.width,ae.height),B===0&&(nt.matrix.copy(ee.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale)),jt===!0&&nt.cameras.push(ee)}const Wt=l.enabledFeatures;if(Wt&&Wt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){v=r.getBinding();const B=v.getDepthInformation(At[0]);B&&B.isValid&&B.texture&&M.init(B,l.renderState)}if(Wt&&Wt.includes("camera-access")&&R){e.state.unbindTexture(),v=r.getBinding();for(let B=0;B<At.length;B++){const De=At[B].camera;if(De){let ae=_[De];ae||(ae=new mv,_[De]=ae);const ee=v.getCameraImage(De);ae.sourceTexture=ee}}}}for(let At=0;At<z.length;At++){const jt=G[At],Wt=z[At];jt!==null&&Wt!==void 0&&Wt.update(jt,mt,p||h)}St&&St(tt,mt),mt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:mt}),b=null}const Ft=new gv;Ft.setAnimationLoop(Dt),this.setAnimationLoop=function(tt){St=tt},this.dispose=function(){}}}const rr=new ta,zA=new sn;function IA(o,e){function i(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function r(M,_){_.color.getRGB(M.fogColor.value,cv(o)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function l(M,_,I,P,U){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(M,_):_.isMeshToonMaterial?(u(M,_),v(M,_)):_.isMeshPhongMaterial?(u(M,_),g(M,_)):_.isMeshStandardMaterial?(u(M,_),x(M,_),_.isMeshPhysicalMaterial&&y(M,_,U)):_.isMeshMatcapMaterial?(u(M,_),b(M,_)):_.isMeshDepthMaterial?u(M,_):_.isMeshDistanceMaterial?(u(M,_),R(M,_)):_.isMeshNormalMaterial?u(M,_):_.isLineBasicMaterial?(h(M,_),_.isLineDashedMaterial&&d(M,_)):_.isPointsMaterial?m(M,_,I,P):_.isSpriteMaterial?p(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,i(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===In&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,i(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===In&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,i(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,i(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const I=e.get(_),P=I.envMap,U=I.envMapRotation;P&&(M.envMap.value=P,rr.copy(U),rr.x*=-1,rr.y*=-1,rr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(rr.y*=-1,rr.z*=-1),M.envMapRotation.value.setFromMatrix4(zA.makeRotationFromEuler(rr)),M.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,M.aoMapTransform))}function h(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform))}function d(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function m(M,_,I,P){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*I,M.scale.value=P*.5,_.map&&(M.map.value=_.map,i(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function p(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function g(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function v(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function x(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function y(M,_,I){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===In&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=I.texture,M.transmissionSamplerSize.value.set(I.width,I.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,_){_.matcap&&(M.matcap.value=_.matcap)}function R(M,_){const I=e.get(_).light;M.referencePosition.value.setFromMatrixPosition(I.matrixWorld),M.nearDistance.value=I.shadow.camera.near,M.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function FA(o,e,i,r){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(I,P){const U=P.program;r.uniformBlockBinding(I,U)}function p(I,P){let U=l[I.id];U===void 0&&(b(I),U=g(I),l[I.id]=U,I.addEventListener("dispose",M));const z=P.program;r.updateUBOMapping(I,z);const G=e.render.frame;u[I.id]!==G&&(x(I),u[I.id]=G)}function g(I){const P=v();I.__bindingPointIndex=P;const U=o.createBuffer(),z=I.__size,G=I.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,z,G),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,U),U}function v(){for(let I=0;I<d;I++)if(h.indexOf(I)===-1)return h.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(I){const P=l[I.id],U=I.uniforms,z=I.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let G=0,F=U.length;G<F;G++){const j=Array.isArray(U[G])?U[G]:[U[G]];for(let w=0,C=j.length;w<C;w++){const V=j[w];if(y(V,G,w,z)===!0){const nt=V.__offset,ct=Array.isArray(V.value)?V.value:[V.value];let _t=0;for(let lt=0;lt<ct.length;lt++){const O=ct[lt],Z=R(O);typeof O=="number"||typeof O=="boolean"?(V.__data[0]=O,o.bufferSubData(o.UNIFORM_BUFFER,nt+_t,V.__data)):O.isMatrix3?(V.__data[0]=O.elements[0],V.__data[1]=O.elements[1],V.__data[2]=O.elements[2],V.__data[3]=0,V.__data[4]=O.elements[3],V.__data[5]=O.elements[4],V.__data[6]=O.elements[5],V.__data[7]=0,V.__data[8]=O.elements[6],V.__data[9]=O.elements[7],V.__data[10]=O.elements[8],V.__data[11]=0):(O.toArray(V.__data,_t),_t+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,nt,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(I,P,U,z){const G=I.value,F=P+"_"+U;if(z[F]===void 0)return typeof G=="number"||typeof G=="boolean"?z[F]=G:z[F]=G.clone(),!0;{const j=z[F];if(typeof G=="number"||typeof G=="boolean"){if(j!==G)return z[F]=G,!0}else if(j.equals(G)===!1)return j.copy(G),!0}return!1}function b(I){const P=I.uniforms;let U=0;const z=16;for(let F=0,j=P.length;F<j;F++){const w=Array.isArray(P[F])?P[F]:[P[F]];for(let C=0,V=w.length;C<V;C++){const nt=w[C],ct=Array.isArray(nt.value)?nt.value:[nt.value];for(let _t=0,lt=ct.length;_t<lt;_t++){const O=ct[_t],Z=R(O),q=U%z,xt=q%Z.boundary,D=q+xt;U+=xt,D!==0&&z-D<Z.storage&&(U+=z-D),nt.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),nt.__offset=U,U+=Z.storage}}}const G=U%z;return G>0&&(U+=z-G),I.__size=U,I.__cache={},this}function R(I){const P={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(P.boundary=4,P.storage=4):I.isVector2?(P.boundary=8,P.storage=8):I.isVector3||I.isColor?(P.boundary=16,P.storage=12):I.isVector4?(P.boundary=16,P.storage=16):I.isMatrix3?(P.boundary=48,P.storage=48):I.isMatrix4?(P.boundary=64,P.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),P}function M(I){const P=I.target;P.removeEventListener("dispose",M);const U=h.indexOf(P.__bindingPointIndex);h.splice(U,1),o.deleteBuffer(l[P.id]),delete l[P.id],delete u[P.id]}function _(){for(const I in l)o.deleteBuffer(l[I]);h=[],l={},u={}}return{bind:m,update:p,dispose:_}}class HA{constructor(e={}){const{canvas:i=ES(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=h;const b=new Uint32Array(4),R=new Int32Array(4);let M=null,_=null;const I=[],P=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Oa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let z=!1;this._outputColorSpace=ai;let G=0,F=0,j=null,w=-1,C=null;const V=new $e,nt=new $e;let ct=null;const _t=new we(0);let lt=0,O=i.width,Z=i.height,q=1,xt=null,D=null;const J=new $e(0,0,O,Z),vt=new $e(0,0,O,Z);let St=!1;const Dt=new hv;let Ft=!1,tt=!1;const mt=new sn,At=new st,jt=new $e,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let he=!1;function tn(){return j===null?q:1}let B=r;function De(A,X){return i.getContext(A,X)}try{const A={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${nd}`),i.addEventListener("webglcontextlost",Rt,!1),i.addEventListener("webglcontextrestored",Bt,!1),i.addEventListener("webglcontextcreationerror",yt,!1),B===null){const X="webgl2";if(B=De(X,A),B===null)throw De(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ae,ee,Ot,Fe,Gt,re,Xe,We,L,E,$,ut,dt,ot,Pt,bt,kt,qt,Mt,Ut,Zt,Vt,Ct,se;function k(){ae=new KE(B),ae.init(),Vt=new LA(B,ae),ee=new kE(B,ae,e,Vt),Ot=new DA(B,ae),ee.reversedDepthBuffer&&x&&Ot.buffers.depth.setReversed(!0),Fe=new $E(B),Gt=new _A,re=new UA(B,ae,Ot,Gt,ee,Vt,Fe),Xe=new WE(U),We=new jE(U),L=new rM(B),Ct=new GE(B,L),E=new QE(B,L,Fe,Ct),$=new eT(B,E,L,Fe),Mt=new tT(B,ee,re),bt=new XE(Gt),ut=new gA(U,Xe,We,ae,ee,Ct,bt),dt=new IA(U,Gt),ot=new xA,Pt=new AA(ae),qt=new HE(U,Xe,We,Ot,$,y,m),kt=new CA(U,$,ee),se=new FA(B,Fe,ee,Ot),Ut=new VE(B,ae,Fe),Zt=new JE(B,ae,Fe),Fe.programs=ut.programs,U.capabilities=ee,U.extensions=ae,U.properties=Gt,U.renderLists=ot,U.shadowMap=kt,U.state=Ot,U.info=Fe}k();const Tt=new BA(U,B);this.xr=Tt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=ae.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ae.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(A){A!==void 0&&(q=A,this.setSize(O,Z,!1))},this.getSize=function(A){return A.set(O,Z)},this.setSize=function(A,X,at=!0){if(Tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=A,Z=X,i.width=Math.floor(A*q),i.height=Math.floor(X*q),at===!0&&(i.style.width=A+"px",i.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(O*q,Z*q).floor()},this.setDrawingBufferSize=function(A,X,at){O=A,Z=X,q=at,i.width=Math.floor(A*at),i.height=Math.floor(X*at),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(V)},this.getViewport=function(A){return A.copy(J)},this.setViewport=function(A,X,at,rt){A.isVector4?J.set(A.x,A.y,A.z,A.w):J.set(A,X,at,rt),Ot.viewport(V.copy(J).multiplyScalar(q).round())},this.getScissor=function(A){return A.copy(vt)},this.setScissor=function(A,X,at,rt){A.isVector4?vt.set(A.x,A.y,A.z,A.w):vt.set(A,X,at,rt),Ot.scissor(nt.copy(vt).multiplyScalar(q).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(A){Ot.setScissorTest(St=A)},this.setOpaqueSort=function(A){xt=A},this.setTransparentSort=function(A){D=A},this.getClearColor=function(A){return A.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,at=!0){let rt=0;if(A){let Y=!1;if(j!==null){const Et=j.texture.format;Y=Et===ld||Et===od||Et===sd}if(Y){const Et=j.texture.type,wt=Et===$i||Et===dr||Et===yo||Et===Eo||Et===ad||Et===rd,zt=qt.getClearColor(),Lt=qt.getClearAlpha(),Qt=zt.r,$t=zt.g,Xt=zt.b;wt?(b[0]=Qt,b[1]=$t,b[2]=Xt,b[3]=Lt,B.clearBufferuiv(B.COLOR,0,b)):(R[0]=Qt,R[1]=$t,R[2]=Xt,R[3]=Lt,B.clearBufferiv(B.COLOR,0,R))}else rt|=B.COLOR_BUFFER_BIT}X&&(rt|=B.DEPTH_BUFFER_BIT),at&&(rt|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Rt,!1),i.removeEventListener("webglcontextrestored",Bt,!1),i.removeEventListener("webglcontextcreationerror",yt,!1),qt.dispose(),ot.dispose(),Pt.dispose(),Gt.dispose(),Xe.dispose(),We.dispose(),$.dispose(),Ct.dispose(),se.dispose(),ut.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",on),Tt.removeEventListener("sessionend",ln),Ye.stop()};function Rt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function Bt(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;const A=Fe.autoReset,X=kt.enabled,at=kt.autoUpdate,rt=kt.needsUpdate,Y=kt.type;k(),Fe.autoReset=A,kt.enabled=X,kt.autoUpdate=at,kt.needsUpdate=rt,kt.type=Y}function yt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function gt(A){const X=A.target;X.removeEventListener("dispose",gt),Ht(X)}function Ht(A){ie(A),Gt.remove(A)}function ie(A){const X=Gt.get(A).programs;X!==void 0&&(X.forEach(function(at){ut.releaseProgram(at)}),A.isShaderMaterial&&ut.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,at,rt,Y,Et){X===null&&(X=Wt);const wt=Y.isMesh&&Y.matrixWorld.determinant()<0,zt=na(A,X,at,rt,Y);Ot.setMaterial(rt,wt);let Lt=at.index,Qt=1;if(rt.wireframe===!0){if(Lt=E.getWireframeAttribute(at),Lt===void 0)return;Qt=2}const $t=at.drawRange,Xt=at.attributes.position;let ce=$t.start*Qt,ye=($t.start+$t.count)*Qt;Et!==null&&(ce=Math.max(ce,Et.start*Qt),ye=Math.min(ye,(Et.start+Et.count)*Qt)),Lt!==null?(ce=Math.max(ce,0),ye=Math.min(ye,Lt.count)):Xt!=null&&(ce=Math.max(ce,0),ye=Math.min(ye,Xt.count));const Ve=ye-ce;if(Ve<0||Ve===1/0)return;Ct.setup(Y,rt,zt,at,Lt);let Ue,ue=Ut;if(Lt!==null&&(Ue=L.get(Lt),ue=Zt,ue.setIndex(Ue)),Y.isMesh)rt.wireframe===!0?(Ot.setLineWidth(rt.wireframeLinewidth*tn()),ue.setMode(B.LINES)):ue.setMode(B.TRIANGLES);else if(Y.isLine){let Kt=rt.linewidth;Kt===void 0&&(Kt=1),Ot.setLineWidth(Kt*tn()),Y.isLineSegments?ue.setMode(B.LINES):Y.isLineLoop?ue.setMode(B.LINE_LOOP):ue.setMode(B.LINE_STRIP)}else Y.isPoints?ue.setMode(B.POINTS):Y.isSprite&&ue.setMode(B.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)bo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ue.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))ue.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Kt=Y._multiDrawStarts,Ge=Y._multiDrawCounts,me=Y._multiDrawCount,yn=Lt?L.get(Lt).bytesPerElement:1,li=Gt.get(rt).currentProgram.getUniforms();for(let Cn=0;Cn<me;Cn++)li.setValue(B,"_gl_DrawID",Cn),ue.render(Kt[Cn]/yn,Ge[Cn])}else if(Y.isInstancedMesh)ue.renderInstances(ce,Ve,Y.count);else if(at.isInstancedBufferGeometry){const Kt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Ge=Math.min(at.instanceCount,Kt);ue.renderInstances(ce,Ve,Ge)}else ue.render(ce,Ve)};function be(A,X,at){A.transparent===!0&&A.side===ji&&A.forceSinglePass===!1?(A.side=In,A.needsUpdate=!0,xi(A,X,at),A.side=Pa,A.needsUpdate=!0,xi(A,X,at),A.side=ji):xi(A,X,at)}this.compile=function(A,X,at=null){at===null&&(at=A),_=Pt.get(at),_.init(X),P.push(_),at.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),A!==at&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),_.setupLights();const rt=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Et=Y.material;if(Et)if(Array.isArray(Et))for(let wt=0;wt<Et.length;wt++){const zt=Et[wt];be(zt,at,Y),rt.add(zt)}else be(Et,at,Y),rt.add(Et)}),_=P.pop(),rt},this.compileAsync=function(A,X,at=null){const rt=this.compile(A,X,at);return new Promise(Y=>{function Et(){if(rt.forEach(function(wt){Gt.get(wt).currentProgram.isReady()&&rt.delete(wt)}),rt.size===0){Y(A);return}setTimeout(Et,10)}ae.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Me=null;function oi(A){Me&&Me(A)}function on(){Ye.stop()}function ln(){Ye.start()}const Ye=new gv;Ye.setAnimationLoop(oi),typeof self<"u"&&Ye.setContext(self),this.setAnimationLoop=function(A){Me=A,Tt.setAnimationLoop(A),A===null?Ye.stop():Ye.start()},Tt.addEventListener("sessionstart",on),Tt.addEventListener("sessionend",ln),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(X),X=Tt.getCamera()),A.isScene===!0&&A.onBeforeRender(U,A,X,j),_=Pt.get(A,P.length),_.init(X),P.push(_),mt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Dt.setFromProjectionMatrix(mt,Ri,X.reversedDepth),tt=this.localClippingEnabled,Ft=bt.init(this.clippingPlanes,tt),M=ot.get(A,I.length),M.init(),I.push(M),Tt.enabled===!0&&Tt.isPresenting===!0){const Et=U.xr.getDepthSensingMesh();Et!==null&&vi(Et,X,-1/0,U.sortObjects)}vi(A,X,0,U.sortObjects),M.finish(),U.sortObjects===!0&&M.sort(xt,D),he=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,he&&qt.addToRenderList(M,A),this.info.render.frame++,Ft===!0&&bt.beginShadows();const at=_.state.shadowsArray;kt.render(at,A,X),Ft===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=M.opaque,Y=M.transmissive;if(_.setupLights(),X.isArrayCamera){const Et=X.cameras;if(Y.length>0)for(let wt=0,zt=Et.length;wt<zt;wt++){const Lt=Et[wt];No(rt,Y,A,Lt)}he&&qt.render(A);for(let wt=0,zt=Et.length;wt<zt;wt++){const Lt=Et[wt];mr(M,A,Lt,Lt.viewport)}}else Y.length>0&&No(rt,Y,A,X),he&&qt.render(A),mr(M,A,X);j!==null&&F===0&&(re.updateMultisampleRenderTarget(j),re.updateRenderTargetMipmap(j)),A.isScene===!0&&A.onAfterRender(U,A,X),Ct.resetDefaultState(),w=-1,C=null,P.pop(),P.length>0?(_=P[P.length-1],Ft===!0&&bt.setGlobalState(U.clippingPlanes,_.state.camera)):_=null,I.pop(),I.length>0?M=I[I.length-1]:M=null};function vi(A,X,at,rt){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)at=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Dt.intersectsSprite(A)){rt&&jt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(mt);const wt=$.update(A),zt=A.material;zt.visible&&M.push(A,wt,zt,at,jt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Dt.intersectsObject(A))){const wt=$.update(A),zt=A.material;if(rt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),jt.copy(A.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),jt.copy(wt.boundingSphere.center)),jt.applyMatrix4(A.matrixWorld).applyMatrix4(mt)),Array.isArray(zt)){const Lt=wt.groups;for(let Qt=0,$t=Lt.length;Qt<$t;Qt++){const Xt=Lt[Qt],ce=zt[Xt.materialIndex];ce&&ce.visible&&M.push(A,wt,ce,at,jt.z,Xt)}}else zt.visible&&M.push(A,wt,zt,at,jt.z,null)}}const Et=A.children;for(let wt=0,zt=Et.length;wt<zt;wt++)vi(Et[wt],X,at,rt)}function mr(A,X,at,rt){const Y=A.opaque,Et=A.transmissive,wt=A.transparent;_.setupLightsView(at),Ft===!0&&bt.setGlobalState(U.clippingPlanes,at),rt&&Ot.viewport(V.copy(rt)),Y.length>0&&gr(Y,X,at),Et.length>0&&gr(Et,X,at),wt.length>0&&gr(wt,X,at),Ot.buffers.depth.setTest(!0),Ot.buffers.depth.setMask(!0),Ot.buffers.color.setMask(!0),Ot.setPolygonOffset(!1)}function No(A,X,at,rt){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[rt.id]===void 0&&(_.state.transmissionRenderTarget[rt.id]=new pr(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?Ro:$i,minFilter:fr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace}));const Et=_.state.transmissionRenderTarget[rt.id],wt=rt.viewport||V;Et.setSize(wt.z*U.transmissionResolutionScale,wt.w*U.transmissionResolutionScale);const zt=U.getRenderTarget(),Lt=U.getActiveCubeFace(),Qt=U.getActiveMipmapLevel();U.setRenderTarget(Et),U.getClearColor(_t),lt=U.getClearAlpha(),lt<1&&U.setClearColor(16777215,.5),U.clear(),he&&qt.render(at);const $t=U.toneMapping;U.toneMapping=Oa;const Xt=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),_.setupLightsView(rt),Ft===!0&&bt.setGlobalState(U.clippingPlanes,rt),gr(A,at,rt),re.updateMultisampleRenderTarget(Et),re.updateRenderTargetMipmap(Et),ae.has("WEBGL_multisampled_render_to_texture")===!1){let ce=!1;for(let ye=0,Ve=X.length;ye<Ve;ye++){const Ue=X[ye],ue=Ue.object,Kt=Ue.geometry,Ge=Ue.material,me=Ue.group;if(Ge.side===ji&&ue.layers.test(rt.layers)){const yn=Ge.side;Ge.side=In,Ge.needsUpdate=!0,Ss(ue,at,rt,Kt,Ge,me),Ge.side=yn,Ge.needsUpdate=!0,ce=!0}}ce===!0&&(re.updateMultisampleRenderTarget(Et),re.updateRenderTargetMipmap(Et))}U.setRenderTarget(zt,Lt,Qt),U.setClearColor(_t,lt),Xt!==void 0&&(rt.viewport=Xt),U.toneMapping=$t}function gr(A,X,at){const rt=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,Et=A.length;Y<Et;Y++){const wt=A[Y],zt=wt.object,Lt=wt.geometry,Qt=wt.group;let $t=wt.material;$t.allowOverride===!0&&rt!==null&&($t=rt),zt.layers.test(at.layers)&&Ss(zt,X,at,Lt,$t,Qt)}}function Ss(A,X,at,rt,Y,Et){A.onBeforeRender(U,X,at,rt,Y,Et),A.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(U,X,at,rt,A,Et),Y.transparent===!0&&Y.side===ji&&Y.forceSinglePass===!1?(Y.side=In,Y.needsUpdate=!0,U.renderBufferDirect(at,X,rt,Y,A,Et),Y.side=Pa,Y.needsUpdate=!0,U.renderBufferDirect(at,X,rt,Y,A,Et),Y.side=ji):U.renderBufferDirect(at,X,rt,Y,A,Et),A.onAfterRender(U,X,at,rt,Y,Et)}function xi(A,X,at){X.isScene!==!0&&(X=Wt);const rt=Gt.get(A),Y=_.state.lights,Et=_.state.shadowsArray,wt=Y.state.version,zt=ut.getParameters(A,Y.state,Et,X,at),Lt=ut.getProgramCacheKey(zt);let Qt=rt.programs;rt.environment=A.isMeshStandardMaterial?X.environment:null,rt.fog=X.fog,rt.envMap=(A.isMeshStandardMaterial?We:Xe).get(A.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,Qt===void 0&&(A.addEventListener("dispose",gt),Qt=new Map,rt.programs=Qt);let $t=Qt.get(Lt);if($t!==void 0){if(rt.currentProgram===$t&&rt.lightsStateVersion===wt)return Ci(A,zt),$t}else zt.uniforms=ut.getUniforms(A),A.onBeforeCompile(zt,U),$t=ut.acquireProgram(zt,Lt),Qt.set(Lt,$t),rt.uniforms=zt.uniforms;const Xt=rt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Xt.clippingPlanes=bt.uniform),Ci(A,zt),rt.needsLights=ia(A),rt.lightsStateVersion=wt,rt.needsLights&&(Xt.ambientLightColor.value=Y.state.ambient,Xt.lightProbe.value=Y.state.probe,Xt.directionalLights.value=Y.state.directional,Xt.directionalLightShadows.value=Y.state.directionalShadow,Xt.spotLights.value=Y.state.spot,Xt.spotLightShadows.value=Y.state.spotShadow,Xt.rectAreaLights.value=Y.state.rectArea,Xt.ltc_1.value=Y.state.rectAreaLTC1,Xt.ltc_2.value=Y.state.rectAreaLTC2,Xt.pointLights.value=Y.state.point,Xt.pointLightShadows.value=Y.state.pointShadow,Xt.hemisphereLights.value=Y.state.hemi,Xt.directionalShadowMap.value=Y.state.directionalShadowMap,Xt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Xt.spotShadowMap.value=Y.state.spotShadowMap,Xt.spotLightMatrix.value=Y.state.spotLightMatrix,Xt.spotLightMap.value=Y.state.spotLightMap,Xt.pointShadowMap.value=Y.state.pointShadowMap,Xt.pointShadowMatrix.value=Y.state.pointShadowMatrix),rt.currentProgram=$t,rt.uniformsList=null,$t}function _r(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=gc.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function Ci(A,X){const at=Gt.get(A);at.outputColorSpace=X.outputColorSpace,at.batching=X.batching,at.batchingColor=X.batchingColor,at.instancing=X.instancing,at.instancingColor=X.instancingColor,at.instancingMorph=X.instancingMorph,at.skinning=X.skinning,at.morphTargets=X.morphTargets,at.morphNormals=X.morphNormals,at.morphColors=X.morphColors,at.morphTargetsCount=X.morphTargetsCount,at.numClippingPlanes=X.numClippingPlanes,at.numIntersection=X.numClipIntersection,at.vertexAlphas=X.vertexAlphas,at.vertexTangents=X.vertexTangents,at.toneMapping=X.toneMapping}function na(A,X,at,rt,Y){X.isScene!==!0&&(X=Wt),re.resetTextureUnits();const Et=X.fog,wt=rt.isMeshStandardMaterial?X.environment:null,zt=j===null?U.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:gs,Lt=(rt.isMeshStandardMaterial?We:Xe).get(rt.envMap||wt),Qt=rt.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,$t=!!at.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Xt=!!at.morphAttributes.position,ce=!!at.morphAttributes.normal,ye=!!at.morphAttributes.color;let Ve=Oa;rt.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ve=U.toneMapping);const Ue=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,ue=Ue!==void 0?Ue.length:0,Kt=Gt.get(rt),Ge=_.state.lights;if(Ft===!0&&(tt===!0||A!==C)){const Ze=A===C&&rt.id===w;bt.setState(rt,A,Ze)}let me=!1;rt.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==Ge.state.version||Kt.outputColorSpace!==zt||Y.isBatchedMesh&&Kt.batching===!1||!Y.isBatchedMesh&&Kt.batching===!0||Y.isBatchedMesh&&Kt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Kt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Kt.instancing===!1||!Y.isInstancedMesh&&Kt.instancing===!0||Y.isSkinnedMesh&&Kt.skinning===!1||!Y.isSkinnedMesh&&Kt.skinning===!0||Y.isInstancedMesh&&Kt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Kt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Kt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Kt.instancingMorph===!1&&Y.morphTexture!==null||Kt.envMap!==Lt||rt.fog===!0&&Kt.fog!==Et||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==bt.numPlanes||Kt.numIntersection!==bt.numIntersection)||Kt.vertexAlphas!==Qt||Kt.vertexTangents!==$t||Kt.morphTargets!==Xt||Kt.morphNormals!==ce||Kt.morphColors!==ye||Kt.toneMapping!==Ve||Kt.morphTargetsCount!==ue)&&(me=!0):(me=!0,Kt.__version=rt.version);let yn=Kt.currentProgram;me===!0&&(yn=xi(rt,X,Y));let li=!1,Cn=!1,dn=!1;const ze=yn.getUniforms(),wn=Kt.uniforms;if(Ot.useProgram(yn.program)&&(li=!0,Cn=!0,dn=!0),rt.id!==w&&(w=rt.id,Cn=!0),li||C!==A){Ot.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ze.setValue(B,"projectionMatrix",A.projectionMatrix),ze.setValue(B,"viewMatrix",A.matrixWorldInverse);const vn=ze.map.cameraPosition;vn!==void 0&&vn.setValue(B,At.setFromMatrixPosition(A.matrixWorld)),ee.logarithmicDepthBuffer&&ze.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&ze.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,Cn=!0,dn=!0)}if(Y.isSkinnedMesh){ze.setOptional(B,Y,"bindMatrix"),ze.setOptional(B,Y,"bindMatrixInverse");const Ze=Y.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),ze.setValue(B,"boneTexture",Ze.boneTexture,re))}Y.isBatchedMesh&&(ze.setOptional(B,Y,"batchingTexture"),ze.setValue(B,"batchingTexture",Y._matricesTexture,re),ze.setOptional(B,Y,"batchingIdTexture"),ze.setValue(B,"batchingIdTexture",Y._indirectTexture,re),ze.setOptional(B,Y,"batchingColorTexture"),Y._colorsTexture!==null&&ze.setValue(B,"batchingColorTexture",Y._colorsTexture,re));const En=at.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&Mt.update(Y,at,yn),(Cn||Kt.receiveShadow!==Y.receiveShadow)&&(Kt.receiveShadow=Y.receiveShadow,ze.setValue(B,"receiveShadow",Y.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(wn.envMap.value=Lt,wn.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&X.environment!==null&&(wn.envMapIntensity.value=X.environmentIntensity),Cn&&(ze.setValue(B,"toneMappingExposure",U.toneMappingExposure),Kt.needsLights&&za(wn,dn),Et&&rt.fog===!0&&dt.refreshFogUniforms(wn,Et),dt.refreshMaterialUniforms(wn,rt,q,Z,_.state.transmissionRenderTarget[A.id]),gc.upload(B,_r(Kt),wn,re)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(gc.upload(B,_r(Kt),wn,re),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&ze.setValue(B,"center",Y.center),ze.setValue(B,"modelViewMatrix",Y.modelViewMatrix),ze.setValue(B,"normalMatrix",Y.normalMatrix),ze.setValue(B,"modelMatrix",Y.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const Ze=rt.uniformsGroups;for(let vn=0,vr=Ze.length;vn<vr;vn++){const Ln=Ze[vn];se.update(Ln,yn),se.bind(Ln,yn)}}return yn}function za(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function ia(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(A,X,at){const rt=Gt.get(A);rt.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),Gt.get(A.texture).__webglTexture=X,Gt.get(A.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:at,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){const at=Gt.get(A);at.__webglFramebuffer=X,at.__useDefaultFramebuffer=X===void 0};const en=B.createFramebuffer();this.setRenderTarget=function(A,X=0,at=0){j=A,G=X,F=at;let rt=!0,Y=null,Et=!1,wt=!1;if(A){const Lt=Gt.get(A);if(Lt.__useDefaultFramebuffer!==void 0)Ot.bindFramebuffer(B.FRAMEBUFFER,null),rt=!1;else if(Lt.__webglFramebuffer===void 0)re.setupRenderTarget(A);else if(Lt.__hasExternalTextures)re.rebindTextures(A,Gt.get(A.texture).__webglTexture,Gt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Xt=A.depthTexture;if(Lt.__boundDepthTexture!==Xt){if(Xt!==null&&Gt.has(Xt)&&(A.width!==Xt.image.width||A.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(A)}}const Qt=A.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(wt=!0);const $t=Gt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray($t[X])?Y=$t[X][at]:Y=$t[X],Et=!0):A.samples>0&&re.useMultisampledRTT(A)===!1?Y=Gt.get(A).__webglMultisampledFramebuffer:Array.isArray($t)?Y=$t[at]:Y=$t,V.copy(A.viewport),nt.copy(A.scissor),ct=A.scissorTest}else V.copy(J).multiplyScalar(q).floor(),nt.copy(vt).multiplyScalar(q).floor(),ct=St;if(at!==0&&(Y=en),Ot.bindFramebuffer(B.FRAMEBUFFER,Y)&&rt&&Ot.drawBuffers(A,Y),Ot.viewport(V),Ot.scissor(nt),Ot.setScissorTest(ct),Et){const Lt=Gt.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+X,Lt.__webglTexture,at)}else if(wt){const Lt=X;for(let Qt=0;Qt<A.textures.length;Qt++){const $t=Gt.get(A.textures[Qt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Qt,$t.__webglTexture,at,Lt)}}else if(A!==null&&at!==0){const Lt=Gt.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Lt.__webglTexture,at)}w=-1},this.readRenderTargetPixels=function(A,X,at,rt,Y,Et,wt,zt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Gt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(Lt=Lt[wt]),Lt){Ot.bindFramebuffer(B.FRAMEBUFFER,Lt);try{const Qt=A.textures[zt],$t=Qt.format,Xt=Qt.type;if(!ee.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-rt&&at>=0&&at<=A.height-Y&&(A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+zt),B.readPixels(X,at,rt,Y,Vt.convert($t),Vt.convert(Xt),Et))}finally{const Qt=j!==null?Gt.get(j).__webglFramebuffer:null;Ot.bindFramebuffer(B.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(A,X,at,rt,Y,Et,wt,zt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=Gt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(Lt=Lt[wt]),Lt)if(X>=0&&X<=A.width-rt&&at>=0&&at<=A.height-Y){Ot.bindFramebuffer(B.FRAMEBUFFER,Lt);const Qt=A.textures[zt],$t=Qt.format,Xt=Qt.type;if(!ee.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ce=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ce),B.bufferData(B.PIXEL_PACK_BUFFER,Et.byteLength,B.STREAM_READ),A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+zt),B.readPixels(X,at,rt,Y,Vt.convert($t),Vt.convert(Xt),0);const ye=j!==null?Gt.get(j).__webglFramebuffer:null;Ot.bindFramebuffer(B.FRAMEBUFFER,ye);const Ve=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await TS(B,Ve,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ce),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Et),B.deleteBuffer(ce),B.deleteSync(Ve),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,at=0){const rt=Math.pow(2,-at),Y=Math.floor(A.image.width*rt),Et=Math.floor(A.image.height*rt),wt=X!==null?X.x:0,zt=X!==null?X.y:0;re.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,at,0,0,wt,zt,Y,Et),Ot.unbindTexture()};const Oo=B.createFramebuffer(),Po=B.createFramebuffer();this.copyTextureToTexture=function(A,X,at=null,rt=null,Y=0,Et=null){Et===null&&(Y!==0?(bo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Et=Y,Y=0):Et=0);let wt,zt,Lt,Qt,$t,Xt,ce,ye,Ve;const Ue=A.isCompressedTexture?A.mipmaps[Et]:A.image;if(at!==null)wt=at.max.x-at.min.x,zt=at.max.y-at.min.y,Lt=at.isBox3?at.max.z-at.min.z:1,Qt=at.min.x,$t=at.min.y,Xt=at.isBox3?at.min.z:0;else{const En=Math.pow(2,-Y);wt=Math.floor(Ue.width*En),zt=Math.floor(Ue.height*En),A.isDataArrayTexture?Lt=Ue.depth:A.isData3DTexture?Lt=Math.floor(Ue.depth*En):Lt=1,Qt=0,$t=0,Xt=0}rt!==null?(ce=rt.x,ye=rt.y,Ve=rt.z):(ce=0,ye=0,Ve=0);const ue=Vt.convert(X.format),Kt=Vt.convert(X.type);let Ge;X.isData3DTexture?(re.setTexture3D(X,0),Ge=B.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(re.setTexture2DArray(X,0),Ge=B.TEXTURE_2D_ARRAY):(re.setTexture2D(X,0),Ge=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,X.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,X.unpackAlignment);const me=B.getParameter(B.UNPACK_ROW_LENGTH),yn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),li=B.getParameter(B.UNPACK_SKIP_PIXELS),Cn=B.getParameter(B.UNPACK_SKIP_ROWS),dn=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ue.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ue.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Qt),B.pixelStorei(B.UNPACK_SKIP_ROWS,$t),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Xt);const ze=A.isDataArrayTexture||A.isData3DTexture,wn=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const En=Gt.get(A),Ze=Gt.get(X),vn=Gt.get(En.__renderTarget),vr=Gt.get(Ze.__renderTarget);Ot.bindFramebuffer(B.READ_FRAMEBUFFER,vn.__webglFramebuffer),Ot.bindFramebuffer(B.DRAW_FRAMEBUFFER,vr.__webglFramebuffer);for(let Ln=0;Ln<Lt;Ln++)ze&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Gt.get(A).__webglTexture,Y,Xt+Ln),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Gt.get(X).__webglTexture,Et,Ve+Ln)),B.blitFramebuffer(Qt,$t,wt,zt,ce,ye,wt,zt,B.DEPTH_BUFFER_BIT,B.NEAREST);Ot.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ot.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Y!==0||A.isRenderTargetTexture||Gt.has(A)){const En=Gt.get(A),Ze=Gt.get(X);Ot.bindFramebuffer(B.READ_FRAMEBUFFER,Oo),Ot.bindFramebuffer(B.DRAW_FRAMEBUFFER,Po);for(let vn=0;vn<Lt;vn++)ze?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,En.__webglTexture,Y,Xt+vn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,En.__webglTexture,Y),wn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ze.__webglTexture,Et,Ve+vn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ze.__webglTexture,Et),Y!==0?B.blitFramebuffer(Qt,$t,wt,zt,ce,ye,wt,zt,B.COLOR_BUFFER_BIT,B.NEAREST):wn?B.copyTexSubImage3D(Ge,Et,ce,ye,Ve+vn,Qt,$t,wt,zt):B.copyTexSubImage2D(Ge,Et,ce,ye,Qt,$t,wt,zt);Ot.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ot.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else wn?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(Ge,Et,ce,ye,Ve,wt,zt,Lt,ue,Kt,Ue.data):X.isCompressedArrayTexture?B.compressedTexSubImage3D(Ge,Et,ce,ye,Ve,wt,zt,Lt,ue,Ue.data):B.texSubImage3D(Ge,Et,ce,ye,Ve,wt,zt,Lt,ue,Kt,Ue):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Et,ce,ye,wt,zt,ue,Kt,Ue.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Et,ce,ye,Ue.width,Ue.height,ue,Ue.data):B.texSubImage2D(B.TEXTURE_2D,Et,ce,ye,wt,zt,ue,Kt,Ue);B.pixelStorei(B.UNPACK_ROW_LENGTH,me),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,yn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,li),B.pixelStorei(B.UNPACK_SKIP_ROWS,Cn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,dn),Et===0&&X.generateMipmaps&&B.generateMipmap(Ge),Ot.unbindTexture()},this.initRenderTarget=function(A){Gt.get(A).__webglFramebuffer===void 0&&re.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?re.setTextureCube(A,0):A.isData3DTexture?re.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?re.setTexture2DArray(A,0):re.setTexture2D(A,0),Ot.unbindTexture()},this.resetState=function(){G=0,F=0,j=null,Ot.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(e),i.unpackColorSpace=Te._getUnpackColorSpace()}}const GA="/NANA/assets/fotProdAct1-6Kz3R_vE.png",VA="/NANA/assets/fotProdAct2-bAtzERfx.png",kA="/NANA/assets/fotProdAct3-BYnyXmwp.png",XA="/NANA/assets/fotProdAct4-CGxyA4-s.png",WA="/NANA/assets/fotAcce1-Cf2plBou.png",qA="/NANA/assets/fotAcce2-D02EA7OT.png",YA="/NANA/assets/fotAcce3-CG7kmB8v.png",ZA="/NANA/assets/fotAcce4-BjAG9Jxs.png",jA="/NANA/assets/fotSegundaMano1-Dyz2Hqcr.png",KA="/NANA/assets/fotSegundaMano2-BhPCAWUN.png",QA="/NANA/assets/fotSegundaMano3-FcO977ia.png",JA="/NANA/assets/fotSegundaMano4-CQhWlkGl.png",$A=()=>{const o=ch.useRef(null);ch.useEffect(()=>{if(!o.current)return;const g=new jS,v=new ri(75,window.innerWidth/window.innerHeight,.1,1e3),x=new HA({antialias:!0,alpha:!0});x.setSize(window.innerWidth,window.innerHeight),x.setPixelRatio(window.devicePixelRatio),o.current.appendChild(x.domElement);const y=new ea,b=5e3,R=new Float32Array(b*3),M=new Float32Array(b*3);for(let U=0;U<b*3;U++)R[U]=(Math.random()-.5)*10,M[U]=Math.random();y.setAttribute("position",new si(R,3)),y.setAttribute("color",new si(M,3));const _=new dv({size:.02,vertexColors:!0,transparent:!0,blending:uh}),I=new $S(y,_);g.add(I),v.position.z=2;const P=()=>{requestAnimationFrame(P),I.rotation.y+=5e-4,I.rotation.x+=2e-4,x.render(g,v)};return P(),()=>{o.current&&o.current.removeChild(x.domElement),x.dispose()}},[]);const e=()=>ve.jsx("header",{className:"fixed top-0 left-0 w-full z-20 bg-primary/80 backdrop-blur-sm border-b border-gray-700",children:ve.jsx("nav",{className:"container mx-auto p-4 flex justify-between items-center font-bold text-lg",children:ve.jsx("a",{href:"#",className:"text-text-primary hover:text-text-secondary w transition-colors",children:"#NANA"})})}),i=({children:g})=>ve.jsx("h2",{className:"text-text-primary text-4xl md:text-5xl font-extrabold text-center mb-10 font-display tracking-wider uppercase",children:g}),r=({titulo:g,productos:v})=>ve.jsxs("section",{children:[ve.jsx(i,{children:g}),ve.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:v.map(x=>ve.jsx(l,{producto:x,onVerMas:()=>setSelectedProduct(x)},x.id))})]}),l=({producto:g})=>ve.jsxs("div",{className:"bg-neutral-800 rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105",children:[ve.jsx("div",{className:"w-full aspect-[4/5] overflow-hidden",children:ve.jsx("img",{src:g.imagenUrl,alt:g.nombre,className:"w-full h-auto object-cover"})}),ve.jsxs("div",{className:"p-4 flex flex-col items-center text-center",children:[ve.jsx("h3",{className:"text-text-primary text-xl font-semibold mb-2",children:g.nombre}),ve.jsx("p",{className:"text-text-primary mb-4",children:g.descripcion}),ve.jsxs("span",{className:"text-text-primary text-2xl font-bold mb-4",children:["$",g.precio.toFixed(2)]})]})]}),u=[{id:1,nombre:"Sudadera Negra Clásica",precio:55.99,imagenUrl:GA,descripcion:"Una sudadera cómoda y versátil, ideal para cualquier ocasión."},{id:2,nombre:"Pantalones Deportivos Grises",precio:45,imagenUrl:VA,descripcion:"Pantalones holgados con un diseño moderno y minimalista."},{id:3,nombre:"Camiseta Blanca Oversize",precio:30.5,imagenUrl:kA,descripcion:"Un básico atemporal en algodón de alta calidad."},{id:4,nombre:"Gorra Estampada",precio:25,imagenUrl:XA,descripcion:"El accesorio perfecto para complementar tu estilo."}],h=[{id:1,nombre:"Sudadera Negra Clásica",precio:55.99,imagenUrl:WA,descripcion:"Una sudadera cómoda y versátil, ideal para cualquier ocasión."},{id:2,nombre:"Pantalones Deportivos Grises",precio:45,imagenUrl:qA,descripcion:"Pantalones holgados con un diseño moderno y minimalista."},{id:3,nombre:"Camiseta Blanca Oversize",precio:30.5,imagenUrl:YA,descripcion:"Un básico atemporal en algodón de alta calidad."},{id:4,nombre:"Gorra Estampada",precio:25,imagenUrl:ZA,descripcion:"El accesorio perfecto para complementar tu estilo."}],d=[{id:1,nombre:"Chaqueta de Cuero Vintage",precio:80,imagenUrl:jA,descripcion:"Una chaqueta de cuero auténtico con carácter."},{id:2,nombre:"Botas de Combate",precio:70,imagenUrl:KA,descripcion:"Botas resistentes y con estilo para cualquier aventura."},{id:3,nombre:"Vestido Floral",precio:40,imagenUrl:QA,descripcion:"Un vestido ligero y fresco, perfecto para el verano."},{id:4,nombre:"Camisa de Rayas",precio:35,imagenUrl:JA,descripcion:"Una camisa clásica que nunca pasa de moda."}],m=()=>ve.jsxs("div",{className:"relative w-screen h-screen overflow-hidden flex flex-col items-center justify-center text-center",children:[ve.jsx("div",{ref:o,className:"absolute inset-0 z-0"}),ve.jsxs("div",{className:"relative z-10 p-8 rounded-xl bg-primary/50 backdrop-blur-md shadow-2xl",children:[ve.jsx("h1",{className:"text-text-primary text-5xl md:text-7xl font-extrabold mb-4 font-brand",children:"#NANA"}),ve.jsx("p",{className:"text-lg md:text-xl text-text-primary",children:"Ropa que define tu estilo."})]})]}),p=()=>ve.jsxs("section",{className:"mt-8 mb-20 text-center",children:[ve.jsx("h2",{className:"text-4xl md:text-5xl font-extrabold mb-4 font-display",children:"NO SEGUIMOS TENDENCIAS. LAS CREAMOS."}),ve.jsx("p",{className:"text-lg  max-w-3xl mx-auto",children:"Somos para las que no piden permiso. Para las que mezclan, se atreven y escriben su propia historia con cada outfit. #NANA no es ropa, es una actitud."})]});return ve.jsxs("div",{className:`\r
            // 🟢 ¡USAMOS LA CLASE DEFINIDA EN TAILWIND!\r
            bg-fondo-web \r
            \r
            // 🟢 Comportamiento del fondo\r
            bg-cover bg-fixed bg-center \r
            \r
            // 🟢 Clases existentes (usan tus vars de tailwind.config.js) bg-primary\r
            text-text-primary  min-h-screen font-body\r
        `,children:[ve.jsx("style",{children:`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
        `}),ve.jsx(e,{}),ve.jsx(m,{}),ve.jsx(p,{}),ve.jsxs("main",{className:"space-y-16",children:[ve.jsx(r,{titulo:"Coleccion Actual",productos:u}),ve.jsx(r,{titulo:"Accesorios",productos:h}),ve.jsx(r,{titulo:"Segunda Mano",productos:d})]}),ve.jsx("footer",{className:"bg-secondary border-t border-gray-700 py-6 text-center text-text-primary",children:ve.jsx("p",{children:"© 2024 #NANA. Todos los derechos reservados."})})]})};Nx.createRoot(document.getElementById("root")).render(ve.jsx(ch.StrictMode,{children:ve.jsx($A,{})}));
