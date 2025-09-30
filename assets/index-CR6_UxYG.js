(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function OM(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var xd={exports:{}},Ho={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u_;function PM(){if(u_)return Ho;u_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var f=null;if(u!==void 0&&(f=""+u),l.key!==void 0&&(f=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:u}}return Ho.Fragment=t,Ho.jsx=i,Ho.jsxs=i,Ho}var c_;function IM(){return c_||(c_=1,xd.exports=PM()),xd.exports}var ce=IM(),yd={exports:{}},ue={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f_;function FM(){if(f_)return ue;f_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,R={};function M(U,J,_t){this.props=U,this.context=J,this.refs=R,this.updater=_t||y}M.prototype.isReactComponent={},M.prototype.setState=function(U,J){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,J,"setState")},M.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function _(){}_.prototype=M.prototype;function I(U,J,_t){this.props=U,this.context=J,this.refs=R,this.updater=_t||y}var O=I.prototype=new _;O.constructor=I,E(O,M.prototype),O.isPureReactComponent=!0;var D=Array.isArray,L={H:null,A:null,T:null,S:null,V:null},H=Object.prototype.hasOwnProperty;function B(U,J,_t,yt,Ut,Ht){return _t=Ht.ref,{$$typeof:s,type:U,key:J,ref:_t!==void 0?_t:null,props:Ht}}function Z(U,J){return B(U.type,J,void 0,void 0,void 0,U.props)}function w(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function C(U){var J={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(_t){return J[_t]})}var V=/\/+/g;function nt(U,J){return typeof U=="object"&&U!==null&&U.key!=null?C(""+U.key):J.toString(36)}function ut(){}function vt(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(ut,ut):(U.status="pending",U.then(function(J){U.status==="pending"&&(U.status="fulfilled",U.value=J)},function(J){U.status==="pending"&&(U.status="rejected",U.reason=J)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function lt(U,J,_t,yt,Ut){var Ht=typeof U;(Ht==="undefined"||Ht==="boolean")&&(U=null);var tt=!1;if(U===null)tt=!0;else switch(Ht){case"bigint":case"string":case"number":tt=!0;break;case"object":switch(U.$$typeof){case s:case t:tt=!0;break;case g:return tt=U._init,lt(tt(U._payload),J,_t,yt,Ut)}}if(tt)return Ut=Ut(U),tt=yt===""?"."+nt(U,0):yt,D(Ut)?(_t="",tt!=null&&(_t=tt.replace(V,"$&/")+"/"),lt(Ut,J,_t,"",function(Qt){return Qt})):Ut!=null&&(w(Ut)&&(Ut=Z(Ut,_t+(Ut.key==null||U&&U.key===Ut.key?"":(""+Ut.key).replace(V,"$&/")+"/")+tt)),J.push(Ut)),1;tt=0;var mt=yt===""?".":yt+":";if(D(U))for(var At=0;At<U.length;At++)yt=U[At],Ht=mt+nt(yt,At),tt+=lt(yt,J,_t,Ht,Ut);else if(At=x(U),typeof At=="function")for(U=At.call(U),At=0;!(yt=U.next()).done;)yt=yt.value,Ht=mt+nt(yt,At++),tt+=lt(yt,J,_t,Ht,Ut);else if(Ht==="object"){if(typeof U.then=="function")return lt(vt(U),J,_t,yt,Ut);throw J=String(U),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return tt}function F(U,J,_t){if(U==null)return U;var yt=[],Ut=0;return lt(U,yt,"","",function(Ht){return J.call(_t,Ht,Ut++)}),yt}function j(U){if(U._status===-1){var J=U._result;J=J(),J.then(function(_t){(U._status===0||U._status===-1)&&(U._status=1,U._result=_t)},function(_t){(U._status===0||U._status===-1)&&(U._status=2,U._result=_t)}),U._status===-1&&(U._status=0,U._result=J)}if(U._status===1)return U._result.default;throw U._result}var q=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function xt(){}return ue.Children={map:F,forEach:function(U,J,_t){F(U,function(){J.apply(this,arguments)},_t)},count:function(U){var J=0;return F(U,function(){J++}),J},toArray:function(U){return F(U,function(J){return J})||[]},only:function(U){if(!w(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},ue.Component=M,ue.Fragment=i,ue.Profiler=l,ue.PureComponent=I,ue.StrictMode=r,ue.Suspense=m,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,ue.__COMPILER_RUNTIME={__proto__:null,c:function(U){return L.H.useMemoCache(U)}},ue.cache=function(U){return function(){return U.apply(null,arguments)}},ue.cloneElement=function(U,J,_t){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var yt=E({},U.props),Ut=U.key,Ht=void 0;if(J!=null)for(tt in J.ref!==void 0&&(Ht=void 0),J.key!==void 0&&(Ut=""+J.key),J)!H.call(J,tt)||tt==="key"||tt==="__self"||tt==="__source"||tt==="ref"&&J.ref===void 0||(yt[tt]=J[tt]);var tt=arguments.length-2;if(tt===1)yt.children=_t;else if(1<tt){for(var mt=Array(tt),At=0;At<tt;At++)mt[At]=arguments[At+2];yt.children=mt}return B(U.type,Ut,void 0,void 0,Ht,yt)},ue.createContext=function(U){return U={$$typeof:f,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:u,_context:U},U},ue.createElement=function(U,J,_t){var yt,Ut={},Ht=null;if(J!=null)for(yt in J.key!==void 0&&(Ht=""+J.key),J)H.call(J,yt)&&yt!=="key"&&yt!=="__self"&&yt!=="__source"&&(Ut[yt]=J[yt]);var tt=arguments.length-2;if(tt===1)Ut.children=_t;else if(1<tt){for(var mt=Array(tt),At=0;At<tt;At++)mt[At]=arguments[At+2];Ut.children=mt}if(U&&U.defaultProps)for(yt in tt=U.defaultProps,tt)Ut[yt]===void 0&&(Ut[yt]=tt[yt]);return B(U,Ht,void 0,void 0,null,Ut)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(U){return{$$typeof:h,render:U}},ue.isValidElement=w,ue.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:j}},ue.memo=function(U,J){return{$$typeof:p,type:U,compare:J===void 0?null:J}},ue.startTransition=function(U){var J=L.T,_t={};L.T=_t;try{var yt=U(),Ut=L.S;Ut!==null&&Ut(_t,yt),typeof yt=="object"&&yt!==null&&typeof yt.then=="function"&&yt.then(xt,q)}catch(Ht){q(Ht)}finally{L.T=J}},ue.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},ue.use=function(U){return L.H.use(U)},ue.useActionState=function(U,J,_t){return L.H.useActionState(U,J,_t)},ue.useCallback=function(U,J){return L.H.useCallback(U,J)},ue.useContext=function(U){return L.H.useContext(U)},ue.useDebugValue=function(){},ue.useDeferredValue=function(U,J){return L.H.useDeferredValue(U,J)},ue.useEffect=function(U,J,_t){var yt=L.H;if(typeof _t=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return yt.useEffect(U,J)},ue.useId=function(){return L.H.useId()},ue.useImperativeHandle=function(U,J,_t){return L.H.useImperativeHandle(U,J,_t)},ue.useInsertionEffect=function(U,J){return L.H.useInsertionEffect(U,J)},ue.useLayoutEffect=function(U,J){return L.H.useLayoutEffect(U,J)},ue.useMemo=function(U,J){return L.H.useMemo(U,J)},ue.useOptimistic=function(U,J){return L.H.useOptimistic(U,J)},ue.useReducer=function(U,J,_t){return L.H.useReducer(U,J,_t)},ue.useRef=function(U){return L.H.useRef(U)},ue.useState=function(U){return L.H.useState(U)},ue.useSyncExternalStore=function(U,J,_t){return L.H.useSyncExternalStore(U,J,_t)},ue.useTransition=function(){return L.H.useTransition()},ue.version="19.1.1",ue}var d_;function mp(){return d_||(d_=1,yd.exports=FM()),yd.exports}var Qo=mp();const Z0=OM(Qo);var Sd={exports:{}},Go={},Md={exports:{}},Ed={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h_;function zM(){return h_||(h_=1,(function(s){function t(F,j){var q=F.length;F.push(j);t:for(;0<q;){var xt=q-1>>>1,U=F[xt];if(0<l(U,j))F[xt]=j,F[q]=U,q=xt;else break t}}function i(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var j=F[0],q=F.pop();if(q!==j){F[0]=q;t:for(var xt=0,U=F.length,J=U>>>1;xt<J;){var _t=2*(xt+1)-1,yt=F[_t],Ut=_t+1,Ht=F[Ut];if(0>l(yt,q))Ut<U&&0>l(Ht,yt)?(F[xt]=Ht,F[Ut]=q,xt=Ut):(F[xt]=yt,F[_t]=q,xt=_t);else if(Ut<U&&0>l(Ht,q))F[xt]=Ht,F[Ut]=q,xt=Ut;else break t}}return j}function l(F,j){var q=F.sortIndex-j.sortIndex;return q!==0?q:F.id-j.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var f=Date,h=f.now();s.unstable_now=function(){return f.now()-h}}var m=[],p=[],g=1,v=null,x=3,y=!1,E=!1,R=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function D(F){for(var j=i(p);j!==null;){if(j.callback===null)r(p);else if(j.startTime<=F)r(p),j.sortIndex=j.expirationTime,t(m,j);else break;j=i(p)}}function L(F){if(R=!1,D(F),!E)if(i(m)!==null)E=!0,H||(H=!0,nt());else{var j=i(p);j!==null&&lt(L,j.startTime-F)}}var H=!1,B=-1,Z=5,w=-1;function C(){return M?!0:!(s.unstable_now()-w<Z)}function V(){if(M=!1,H){var F=s.unstable_now();w=F;var j=!0;try{t:{E=!1,R&&(R=!1,I(B),B=-1),y=!0;var q=x;try{e:{for(D(F),v=i(m);v!==null&&!(v.expirationTime>F&&C());){var xt=v.callback;if(typeof xt=="function"){v.callback=null,x=v.priorityLevel;var U=xt(v.expirationTime<=F);if(F=s.unstable_now(),typeof U=="function"){v.callback=U,D(F),j=!0;break e}v===i(m)&&r(m),D(F)}else r(m);v=i(m)}if(v!==null)j=!0;else{var J=i(p);J!==null&&lt(L,J.startTime-F),j=!1}}break t}finally{v=null,x=q,y=!1}j=void 0}}finally{j?nt():H=!1}}}var nt;if(typeof O=="function")nt=function(){O(V)};else if(typeof MessageChannel<"u"){var ut=new MessageChannel,vt=ut.port2;ut.port1.onmessage=V,nt=function(){vt.postMessage(null)}}else nt=function(){_(V,0)};function lt(F,j){B=_(function(){F(s.unstable_now())},j)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(F){F.callback=null},s.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<F?Math.floor(1e3/F):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_next=function(F){switch(x){case 1:case 2:case 3:var j=3;break;default:j=x}var q=x;x=j;try{return F()}finally{x=q}},s.unstable_requestPaint=function(){M=!0},s.unstable_runWithPriority=function(F,j){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var q=x;x=F;try{return j()}finally{x=q}},s.unstable_scheduleCallback=function(F,j,q){var xt=s.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?xt+q:xt):q=xt,F){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=q+U,F={id:g++,callback:j,priorityLevel:F,startTime:q,expirationTime:U,sortIndex:-1},q>xt?(F.sortIndex=q,t(p,F),i(m)===null&&F===i(p)&&(R?(I(B),B=-1):R=!0,lt(L,q-xt))):(F.sortIndex=U,t(m,F),E||y||(E=!0,H||(H=!0,nt()))),F},s.unstable_shouldYield=C,s.unstable_wrapCallback=function(F){var j=x;return function(){var q=x;x=j;try{return F.apply(this,arguments)}finally{x=q}}}})(Ed)),Ed}var p_;function BM(){return p_||(p_=1,Md.exports=zM()),Md.exports}var bd={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m_;function HM(){if(m_)return Dn;m_=1;var s=mp();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Dn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,g)},Dn.flushSync=function(m){var p=f.T,g=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=p,r.p=g,r.d.f()}},Dn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Dn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Dn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:y}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Dn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Dn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Dn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Dn.requestFormReset=function(m){r.d.r(m)},Dn.unstable_batchedUpdates=function(m,p){return m(p)},Dn.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},Dn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Dn.version="19.1.1",Dn}var g_;function GM(){if(g_)return bd.exports;g_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),bd.exports=HM(),bd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v_;function VM(){if(v_)return Go;v_=1;var s=BM(),t=mp(),i=GM();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(u(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var c=a.return;if(c===null)break;var d=c.alternate;if(d===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===d.child){for(d=c.child;d;){if(d===a)return h(c),e;if(d===o)return h(c),n;d=d.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=d;else{for(var S=!1,T=c.child;T;){if(T===a){S=!0,a=c,o=d;break}if(T===o){S=!0,o=c,a=d;break}T=T.sibling}if(!S){for(T=d.child;T;){if(T===a){S=!0,a=d,o=c;break}if(T===o){S=!0,o=d,a=c;break}T=T.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),I=Symbol.for("react.consumer"),O=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function nt(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var ut=Symbol.for("react.client.reference");function vt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ut?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case M:return"Profiler";case R:return"StrictMode";case L:return"Suspense";case H:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case y:return"Portal";case O:return(e.displayName||"Context")+".Provider";case I:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return n=e.displayName||null,n!==null?n:vt(e.type)||"Memo";case Z:n=e._payload,e=e._init;try{return vt(e(n))}catch{}}return null}var lt=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},xt=[],U=-1;function J(e){return{current:e}}function _t(e){0>U||(e.current=xt[U],xt[U]=null,U--)}function yt(e,n){U++,xt[U]=e.current,e.current=n}var Ut=J(null),Ht=J(null),tt=J(null),mt=J(null);function At(e,n){switch(yt(tt,n),yt(Ht,e),yt(Ut,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Fv(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Fv(n),e=zv(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}_t(Ut),yt(Ut,e)}function Qt(){_t(Ut),_t(Ht),_t(tt)}function qt(e){e.memoizedState!==null&&yt(mt,e);var n=Ut.current,a=zv(n,e.type);n!==a&&(yt(Ht,e),yt(Ut,a))}function me(e){Ht.current===e&&(_t(Ut),_t(Ht)),mt.current===e&&(_t(mt),Po._currentValue=q)}var rn=Object.prototype.hasOwnProperty,z=s.unstable_scheduleCallback,Le=s.unstable_cancelCallback,se=s.unstable_shouldYield,ie=s.unstable_requestPaint,Pt=s.unstable_now,Ve=s.unstable_getCurrentPriorityLevel,Vt=s.unstable_ImmediatePriority,oe=s.unstable_UserBlockingPriority,je=s.unstable_NormalPriority,Ze=s.unstable_LowPriority,N=s.unstable_IdlePriority,b=s.log,$=s.unstable_setDisableYieldValue,ct=null,ht=null;function ot(e){if(typeof b=="function"&&$(e),ht&&typeof ht.setStrictMode=="function")try{ht.setStrictMode(ct,e)}catch{}}var It=Math.clz32?Math.clz32:Yt,Rt=Math.log,Xt=Math.LN2;function Yt(e){return e>>>=0,e===0?32:31-(Rt(e)/Xt|0)|0}var St=256,Nt=4194304;function Zt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function kt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var c=0,d=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var T=o&134217727;return T!==0?(o=T&~d,o!==0?c=Zt(o):(S&=T,S!==0?c=Zt(S):a||(a=T&~e,a!==0&&(c=Zt(a))))):(T=o&~d,T!==0?c=Zt(T):S!==0?c=Zt(S):a||(a=o&~e,a!==0&&(c=Zt(a)))),c===0?0:n!==0&&n!==c&&(n&d)===0&&(d=c&-c,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:c}function wt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function le(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k(){var e=St;return St<<=1,(St&4194048)===0&&(St=256),e}function bt(){var e=Nt;return Nt<<=1,(Nt&62914560)===0&&(Nt=4194304),e}function Ct(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Ft(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Mt(e,n,a,o,c,d){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,P=e.expirationTimes,Q=e.hiddenUpdates;for(a=S&~a;0<a;){var ft=31-It(a),pt=1<<ft;T[ft]=0,P[ft]=-1;var et=Q[ft];if(et!==null)for(Q[ft]=null,ft=0;ft<et.length;ft++){var it=et[ft];it!==null&&(it.lane&=-536870913)}a&=~pt}o!==0&&gt(e,o,0),d!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=d&~(S&~n))}function gt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-It(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function Gt(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-It(a),c=1<<o;c&n|e[o]&n&&(e[o]|=n),a&=~c}}function re(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function we(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function be(){var e=j.p;return e!==0?e:(e=window.event,e===void 0?32:i_(e.type))}function hi(e,n){var a=j.p;try{return j.p=e,n()}finally{j.p=a}}var fn=Math.random().toString(36).slice(2),dn="__reactFiber$"+fn,Qe="__reactProps$"+fn,Ai="__reactContainer$"+fn,Pr="__reactEvents$"+fn,hl="__reactListeners$"+fn,Ir="__reactHandles$"+fn,qs="__reactResources$"+fn,Ri="__reactMarker$"+fn;function Fr(e){delete e[dn],delete e[Qe],delete e[Pr],delete e[hl],delete e[Ir]}function Fi(e){var n=e[dn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ai]||a[dn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Vv(e);e!==null;){if(a=e[dn])return a;e=Vv(e)}return n}e=a,a=e.parentNode}return null}function ga(e){if(e=e[dn]||e[Ai]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function tr(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function va(e){var n=e[qs];return n||(n=e[qs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function sn(e){e[Ri]=!0}var pl=new Set,ml={};function A(e,n){X(e,n),X(e+"Capture",n)}function X(e,n){for(ml[e]=n,e=0;e<n.length;e++)pl.add(n[e])}var at=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rt={},Y={};function Et(e){return rn.call(Y,e)?!0:rn.call(rt,e)?!1:at.test(e)?Y[e]=!0:(rt[e]=!0,!1)}function Dt(e,n,a){if(Et(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function zt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Lt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var $t,ee;function Wt(e){if($t===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);$t=n&&n[1]||"",ee=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$t+e+ee}var de=!1;function Te(e,n){if(!e||de)return"";de=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var pt=function(){throw Error()};if(Object.defineProperty(pt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(pt,[])}catch(it){var et=it}Reflect.construct(e,[],pt)}else{try{pt.call()}catch(it){et=it}e.call(pt.prototype)}}else{try{throw Error()}catch(it){et=it}(pt=e())&&typeof pt.catch=="function"&&pt.catch(function(){})}}catch(it){if(it&&et&&typeof it.stack=="string")return[it.stack,et.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),S=d[0],T=d[1];if(S&&T){var P=S.split(`
`),Q=T.split(`
`);for(c=o=0;o<P.length&&!P[o].includes("DetermineComponentFrameRoot");)o++;for(;c<Q.length&&!Q[c].includes("DetermineComponentFrameRoot");)c++;if(o===P.length||c===Q.length)for(o=P.length-1,c=Q.length-1;1<=o&&0<=c&&P[o]!==Q[c];)c--;for(;1<=o&&0<=c;o--,c--)if(P[o]!==Q[c]){if(o!==1||c!==1)do if(o--,c--,0>c||P[o]!==Q[c]){var ft=`
`+P[o].replace(" at new "," at ");return e.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",e.displayName)),ft}while(1<=o&&0<=c);break}}}finally{de=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Wt(a):""}function qe(e){switch(e.tag){case 26:case 27:case 5:return Wt(e.type);case 16:return Wt("Lazy");case 13:return Wt("Suspense");case 19:return Wt("SuspenseList");case 0:case 15:return Te(e.type,!1);case 11:return Te(e.type.render,!1);case 1:return Te(e.type,!0);case 31:return Wt("Activity");default:return""}}function Oe(e){try{var n="";do n+=qe(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function he(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Jt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Xe(e){var n=Jt(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,d=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){o=""+S,d.call(this,S)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(S){o=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function _e(e){e._valueTracker||(e._valueTracker=Xe(e))}function Rn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Jt(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function pi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ln=/[\n"\\]/g;function vn(e){return e.replace(Ln,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function He(e,n,a,o,c,d,S,T){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+he(n)):e.value!==""+he(n)&&(e.value=""+he(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?Cn(e,S,he(n)):a!=null?Cn(e,S,he(a)):o!=null&&e.removeAttribute("value"),c==null&&d!=null&&(e.defaultChecked=!!d),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+he(T):e.removeAttribute("name")}function On(e,n,a,o,c,d,S,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null))return;a=a!=null?""+he(a):"",n=n!=null?""+he(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=T?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S)}function Cn(e,n,a){n==="number"&&pi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Je(e,n,a,o){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&o&&(e[a].defaultSelected=!0)}else{for(a=""+he(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Mn(e,n,a){if(n!=null&&(n=""+he(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+he(a):""}function zr(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(lt(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=he(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function Fn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Uy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Fp(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Uy.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function zp(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&Fp(e,c,o)}else for(var d in n)n.hasOwnProperty(d)&&Fp(e,d,n[d])}function vc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ny=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ly=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function gl(e){return Ly.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var _c=null;function xc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Br=null,Hr=null;function Bp(e){var n=ga(e);if(n&&(e=n.stateNode)){var a=e[Qe]||null;t:switch(e=n.stateNode,n.type){case"input":if(He(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+vn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var c=o[Qe]||null;if(!c)throw Error(r(90));He(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Rn(o)}break t;case"textarea":Mn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Je(e,!!a.multiple,n,!1)}}}var yc=!1;function Hp(e,n,a){if(yc)return e(n,a);yc=!0;try{var o=e(n);return o}finally{if(yc=!1,(Br!==null||Hr!==null)&&(eu(),Br&&(n=Br,e=Hr,Hr=Br=null,Bp(n),e)))for(n=0;n<e.length;n++)Bp(e[n])}}function Ys(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Qe]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sc=!1;if(zi)try{var js={};Object.defineProperty(js,"passive",{get:function(){Sc=!0}}),window.addEventListener("test",js,js),window.removeEventListener("test",js,js)}catch{Sc=!1}var _a=null,Mc=null,vl=null;function Gp(){if(vl)return vl;var e,n=Mc,a=n.length,o,c="value"in _a?_a.value:_a.textContent,d=c.length;for(e=0;e<a&&n[e]===c[e];e++);var S=a-e;for(o=1;o<=S&&n[a-o]===c[d-o];o++);return vl=c.slice(e,1<o?1-o:void 0)}function _l(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function xl(){return!0}function Vp(){return!1}function zn(e){function n(a,o,c,d,S){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=d,this.target=S,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?xl:Vp,this.isPropagationStopped=Vp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=xl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=xl)},persist:function(){},isPersistent:xl}),n}var er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yl=zn(er),Zs=g({},er,{view:0,detail:0}),Oy=zn(Zs),Ec,bc,Ks,Sl=g({},Zs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ac,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ks&&(Ks&&e.type==="mousemove"?(Ec=e.screenX-Ks.screenX,bc=e.screenY-Ks.screenY):bc=Ec=0,Ks=e),Ec)},movementY:function(e){return"movementY"in e?e.movementY:bc}}),kp=zn(Sl),Py=g({},Sl,{dataTransfer:0}),Iy=zn(Py),Fy=g({},Zs,{relatedTarget:0}),Tc=zn(Fy),zy=g({},er,{animationName:0,elapsedTime:0,pseudoElement:0}),By=zn(zy),Hy=g({},er,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gy=zn(Hy),Vy=g({},er,{data:0}),Xp=zn(Vy),ky={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qy(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Wy[e])?!!n[e]:!1}function Ac(){return qy}var Yy=g({},Zs,{key:function(e){if(e.key){var n=ky[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=_l(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Xy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ac,charCode:function(e){return e.type==="keypress"?_l(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_l(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jy=zn(Yy),Zy=g({},Sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wp=zn(Zy),Ky=g({},Zs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ac}),Qy=zn(Ky),Jy=g({},er,{propertyName:0,elapsedTime:0,pseudoElement:0}),$y=zn(Jy),tS=g({},Sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),eS=zn(tS),nS=g({},er,{newState:0,oldState:0}),iS=zn(nS),aS=[9,13,27,32],Rc=zi&&"CompositionEvent"in window,Qs=null;zi&&"documentMode"in document&&(Qs=document.documentMode);var rS=zi&&"TextEvent"in window&&!Qs,qp=zi&&(!Rc||Qs&&8<Qs&&11>=Qs),Yp=" ",jp=!1;function Zp(e,n){switch(e){case"keyup":return aS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gr=!1;function sS(e,n){switch(e){case"compositionend":return Kp(n);case"keypress":return n.which!==32?null:(jp=!0,Yp);case"textInput":return e=n.data,e===Yp&&jp?null:e;default:return null}}function oS(e,n){if(Gr)return e==="compositionend"||!Rc&&Zp(e,n)?(e=Gp(),vl=Mc=_a=null,Gr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return qp&&n.locale!=="ko"?null:n.data;default:return null}}var lS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!lS[e.type]:n==="textarea"}function Jp(e,n,a,o){Br?Hr?Hr.push(o):Hr=[o]:Br=o,n=ou(n,"onChange"),0<n.length&&(a=new yl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Js=null,$s=null;function uS(e){Nv(e,0)}function Ml(e){var n=tr(e);if(Rn(n))return e}function $p(e,n){if(e==="change")return n}var tm=!1;if(zi){var Cc;if(zi){var wc="oninput"in document;if(!wc){var em=document.createElement("div");em.setAttribute("oninput","return;"),wc=typeof em.oninput=="function"}Cc=wc}else Cc=!1;tm=Cc&&(!document.documentMode||9<document.documentMode)}function nm(){Js&&(Js.detachEvent("onpropertychange",im),$s=Js=null)}function im(e){if(e.propertyName==="value"&&Ml($s)){var n=[];Jp(n,$s,e,xc(e)),Hp(uS,n)}}function cS(e,n,a){e==="focusin"?(nm(),Js=n,$s=a,Js.attachEvent("onpropertychange",im)):e==="focusout"&&nm()}function fS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ml($s)}function dS(e,n){if(e==="click")return Ml(n)}function hS(e,n){if(e==="input"||e==="change")return Ml(n)}function pS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var qn=typeof Object.is=="function"?Object.is:pS;function to(e,n){if(qn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!rn.call(n,c)||!qn(e[c],n[c]))return!1}return!0}function am(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rm(e,n){var a=am(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=am(a)}}function sm(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?sm(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function om(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=pi(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=pi(e.document)}return n}function Dc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var mS=zi&&"documentMode"in document&&11>=document.documentMode,Vr=null,Uc=null,eo=null,Nc=!1;function lm(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Nc||Vr==null||Vr!==pi(o)||(o=Vr,"selectionStart"in o&&Dc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),eo&&to(eo,o)||(eo=o,o=ou(Uc,"onSelect"),0<o.length&&(n=new yl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Vr)))}function nr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var kr={animationend:nr("Animation","AnimationEnd"),animationiteration:nr("Animation","AnimationIteration"),animationstart:nr("Animation","AnimationStart"),transitionrun:nr("Transition","TransitionRun"),transitionstart:nr("Transition","TransitionStart"),transitioncancel:nr("Transition","TransitionCancel"),transitionend:nr("Transition","TransitionEnd")},Lc={},um={};zi&&(um=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);function ir(e){if(Lc[e])return Lc[e];if(!kr[e])return e;var n=kr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in um)return Lc[e]=n[a];return e}var cm=ir("animationend"),fm=ir("animationiteration"),dm=ir("animationstart"),gS=ir("transitionrun"),vS=ir("transitionstart"),_S=ir("transitioncancel"),hm=ir("transitionend"),pm=new Map,Oc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Oc.push("scrollEnd");function mi(e,n){pm.set(e,n),A(n,[e])}var mm=new WeakMap;function ni(e,n){if(typeof e=="object"&&e!==null){var a=mm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Oe(n)},mm.set(e,n),n)}return{value:e,source:n,stack:Oe(n)}}var ii=[],Xr=0,Pc=0;function El(){for(var e=Xr,n=Pc=Xr=0;n<e;){var a=ii[n];ii[n++]=null;var o=ii[n];ii[n++]=null;var c=ii[n];ii[n++]=null;var d=ii[n];if(ii[n++]=null,o!==null&&c!==null){var S=o.pending;S===null?c.next=c:(c.next=S.next,S.next=c),o.pending=c}d!==0&&gm(a,c,d)}}function bl(e,n,a,o){ii[Xr++]=e,ii[Xr++]=n,ii[Xr++]=a,ii[Xr++]=o,Pc|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Ic(e,n,a,o){return bl(e,n,a,o),Tl(e)}function Wr(e,n){return bl(e,null,null,n),Tl(e)}function gm(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var c=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(c=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,c&&n!==null&&(c=31-It(a),e=d.hiddenUpdates,o=e[c],o===null?e[c]=[n]:o.push(n),n.lane=a|536870912),d):null}function Tl(e){if(50<Ro)throw Ro=0,kf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var qr={};function xS(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(e,n,a,o){return new xS(e,n,a,o)}function Fc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Bi(e,n){var a=e.alternate;return a===null?(a=Yn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function vm(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Al(e,n,a,o,c,d){var S=0;if(o=e,typeof e=="function")Fc(e)&&(S=1);else if(typeof e=="string")S=SM(e,a,Ut.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case w:return e=Yn(31,a,n,c),e.elementType=w,e.lanes=d,e;case E:return ar(a.children,c,d,n);case R:S=8,c|=24;break;case M:return e=Yn(12,a,n,c|2),e.elementType=M,e.lanes=d,e;case L:return e=Yn(13,a,n,c),e.elementType=L,e.lanes=d,e;case H:return e=Yn(19,a,n,c),e.elementType=H,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case O:S=10;break t;case I:S=9;break t;case D:S=11;break t;case B:S=14;break t;case Z:S=16,o=null;break t}S=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=Yn(S,a,n,c),n.elementType=e,n.type=o,n.lanes=d,n}function ar(e,n,a,o){return e=Yn(7,e,o,n),e.lanes=a,e}function zc(e,n,a){return e=Yn(6,e,null,n),e.lanes=a,e}function Bc(e,n,a){return n=Yn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Yr=[],jr=0,Rl=null,Cl=0,ai=[],ri=0,rr=null,Hi=1,Gi="";function sr(e,n){Yr[jr++]=Cl,Yr[jr++]=Rl,Rl=e,Cl=n}function _m(e,n,a){ai[ri++]=Hi,ai[ri++]=Gi,ai[ri++]=rr,rr=e;var o=Hi;e=Gi;var c=32-It(o)-1;o&=~(1<<c),a+=1;var d=32-It(n)+c;if(30<d){var S=c-c%5;d=(o&(1<<S)-1).toString(32),o>>=S,c-=S,Hi=1<<32-It(n)+c|a<<c|o,Gi=d+e}else Hi=1<<d|a<<c|o,Gi=e}function Hc(e){e.return!==null&&(sr(e,1),_m(e,1,0))}function Gc(e){for(;e===Rl;)Rl=Yr[--jr],Yr[jr]=null,Cl=Yr[--jr],Yr[jr]=null;for(;e===rr;)rr=ai[--ri],ai[ri]=null,Gi=ai[--ri],ai[ri]=null,Hi=ai[--ri],ai[ri]=null}var Pn=null,$e=null,Ce=!1,or=null,Ci=!1,Vc=Error(r(519));function lr(e){var n=Error(r(418,""));throw ao(ni(n,e)),Vc}function xm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[dn]=e,n[Qe]=o,a){case"dialog":ye("cancel",n),ye("close",n);break;case"iframe":case"object":case"embed":ye("load",n);break;case"video":case"audio":for(a=0;a<wo.length;a++)ye(wo[a],n);break;case"source":ye("error",n);break;case"img":case"image":case"link":ye("error",n),ye("load",n);break;case"details":ye("toggle",n);break;case"input":ye("invalid",n),On(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),_e(n);break;case"select":ye("invalid",n);break;case"textarea":ye("invalid",n),zr(n,o.value,o.defaultValue,o.children),_e(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Iv(n.textContent,a)?(o.popover!=null&&(ye("beforetoggle",n),ye("toggle",n)),o.onScroll!=null&&ye("scroll",n),o.onScrollEnd!=null&&ye("scrollend",n),o.onClick!=null&&(n.onclick=lu),n=!0):n=!1,n||lr(e)}function ym(e){for(Pn=e.return;Pn;)switch(Pn.tag){case 5:case 13:Ci=!1;return;case 27:case 3:Ci=!0;return;default:Pn=Pn.return}}function no(e){if(e!==Pn)return!1;if(!Ce)return ym(e),Ce=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||rd(e.type,e.memoizedProps)),a=!a),a&&$e&&lr(e),ym(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){$e=vi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}$e=null}}else n===27?(n=$e,Oa(e.type)?(e=ud,ud=null,$e=e):$e=n):$e=Pn?vi(e.stateNode.nextSibling):null;return!0}function io(){$e=Pn=null,Ce=!1}function Sm(){var e=or;return e!==null&&(Gn===null?Gn=e:Gn.push.apply(Gn,e),or=null),e}function ao(e){or===null?or=[e]:or.push(e)}var kc=J(null),ur=null,Vi=null;function xa(e,n,a){yt(kc,n._currentValue),n._currentValue=a}function ki(e){e._currentValue=kc.current,_t(kc)}function Xc(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Wc(e,n,a,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var d=c.dependencies;if(d!==null){var S=c.child;d=d.firstContext;t:for(;d!==null;){var T=d;d=c;for(var P=0;P<n.length;P++)if(T.context===n[P]){d.lanes|=a,T=d.alternate,T!==null&&(T.lanes|=a),Xc(d.return,a,e),o||(S=null);break t}d=T.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(r(341));S.lanes|=a,d=S.alternate,d!==null&&(d.lanes|=a),Xc(S,a,e),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===e){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function ro(e,n,a,o){e=null;for(var c=n,d=!1;c!==null;){if(!d){if((c.flags&524288)!==0)d=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var T=c.type;qn(c.pendingProps.value,S.value)||(e!==null?e.push(T):e=[T])}}else if(c===mt.current){if(S=c.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Po):e=[Po])}c=c.return}e!==null&&Wc(n,e,a,o),n.flags|=262144}function wl(e){for(e=e.firstContext;e!==null;){if(!qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function cr(e){ur=e,Vi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function wn(e){return Mm(ur,e)}function Dl(e,n){return ur===null&&cr(e),Mm(e,n)}function Mm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Vi===null){if(e===null)throw Error(r(308));Vi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Vi=Vi.next=n;return a}var yS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},SS=s.unstable_scheduleCallback,MS=s.unstable_NormalPriority,hn={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qc(){return{controller:new yS,data:new Map,refCount:0}}function so(e){e.refCount--,e.refCount===0&&SS(MS,function(){e.controller.abort()})}var oo=null,Yc=0,Zr=0,Kr=null;function ES(e,n){if(oo===null){var a=oo=[];Yc=0,Zr=Kf(),Kr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Yc++,n.then(Em,Em),n}function Em(){if(--Yc===0&&oo!==null){Kr!==null&&(Kr.status="fulfilled");var e=oo;oo=null,Zr=0,Kr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function bS(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var bm=F.S;F.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&ES(e,n),bm!==null&&bm(e,n)};var fr=J(null);function jc(){var e=fr.current;return e!==null?e:ke.pooledCache}function Ul(e,n){n===null?yt(fr,fr.current):yt(fr,n.pool)}function Tm(){var e=jc();return e===null?null:{parent:hn._currentValue,pool:e}}var lo=Error(r(460)),Am=Error(r(474)),Nl=Error(r(542)),Zc={then:function(){}};function Rm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ll(){}function Cm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Ll,Ll),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Dm(e),e;default:if(typeof n.status=="string")n.then(Ll,Ll);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Dm(e),e}throw uo=n,lo}}var uo=null;function wm(){if(uo===null)throw Error(r(459));var e=uo;return uo=null,e}function Dm(e){if(e===lo||e===Nl)throw Error(r(483))}var ya=!1;function Kc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Qc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Sa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ma(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(De&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=Tl(e),gm(e,null,a),n}return bl(e,o,n,a),Tl(e)}function co(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Gt(e,a)}}function Jc(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?c=d=S:d=d.next=S,a=a.next}while(a!==null);d===null?c=d=n:d=d.next=n}else c=d=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var $c=!1;function fo(){if($c){var e=Kr;if(e!==null)throw e}}function ho(e,n,a,o){$c=!1;var c=e.updateQueue;ya=!1;var d=c.firstBaseUpdate,S=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var P=T,Q=P.next;P.next=null,S===null?d=Q:S.next=Q,S=P;var ft=e.alternate;ft!==null&&(ft=ft.updateQueue,T=ft.lastBaseUpdate,T!==S&&(T===null?ft.firstBaseUpdate=Q:T.next=Q,ft.lastBaseUpdate=P))}if(d!==null){var pt=c.baseState;S=0,ft=Q=P=null,T=d;do{var et=T.lane&-536870913,it=et!==T.lane;if(it?(Ee&et)===et:(o&et)===et){et!==0&&et===Zr&&($c=!0),ft!==null&&(ft=ft.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var ae=e,te=T;et=n;var Fe=a;switch(te.tag){case 1:if(ae=te.payload,typeof ae=="function"){pt=ae.call(Fe,pt,et);break t}pt=ae;break t;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=te.payload,et=typeof ae=="function"?ae.call(Fe,pt,et):ae,et==null)break t;pt=g({},pt,et);break t;case 2:ya=!0}}et=T.callback,et!==null&&(e.flags|=64,it&&(e.flags|=8192),it=c.callbacks,it===null?c.callbacks=[et]:it.push(et))}else it={lane:et,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ft===null?(Q=ft=it,P=pt):ft=ft.next=it,S|=et;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;it=T,T=it.next,it.next=null,c.lastBaseUpdate=it,c.shared.pending=null}}while(!0);ft===null&&(P=pt),c.baseState=P,c.firstBaseUpdate=Q,c.lastBaseUpdate=ft,d===null&&(c.shared.lanes=0),Da|=S,e.lanes=S,e.memoizedState=pt}}function Um(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Nm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Um(a[e],n)}var Qr=J(null),Ol=J(0);function Lm(e,n){e=Ki,yt(Ol,e),yt(Qr,n),Ki=e|n.baseLanes}function tf(){yt(Ol,Ki),yt(Qr,Qr.current)}function ef(){Ki=Ol.current,_t(Qr),_t(Ol)}var Ea=0,ge=null,Pe=null,on=null,Pl=!1,Jr=!1,dr=!1,Il=0,po=0,$r=null,TS=0;function en(){throw Error(r(321))}function nf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!qn(e[a],n[a]))return!1;return!0}function af(e,n,a,o,c,d){return Ea=d,ge=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=e===null||e.memoizedState===null?gg:vg,dr=!1,d=a(o,c),dr=!1,Jr&&(d=Pm(n,a,o,c)),Om(e),d}function Om(e){F.H=Vl;var n=Pe!==null&&Pe.next!==null;if(Ea=0,on=Pe=ge=null,Pl=!1,po=0,$r=null,n)throw Error(r(300));e===null||_n||(e=e.dependencies,e!==null&&wl(e)&&(_n=!0))}function Pm(e,n,a,o){ge=e;var c=0;do{if(Jr&&($r=null),po=0,Jr=!1,25<=c)throw Error(r(301));if(c+=1,on=Pe=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}F.H=NS,d=n(a,o)}while(Jr);return d}function AS(){var e=F.H,n=e.useState()[0];return n=typeof n.then=="function"?mo(n):n,e=e.useState()[0],(Pe!==null?Pe.memoizedState:null)!==e&&(ge.flags|=1024),n}function rf(){var e=Il!==0;return Il=0,e}function sf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function of(e){if(Pl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Pl=!1}Ea=0,on=Pe=ge=null,Jr=!1,po=Il=0,$r=null}function Bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?ge.memoizedState=on=e:on=on.next=e,on}function ln(){if(Pe===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var n=on===null?ge.memoizedState:on.next;if(n!==null)on=n,Pe=e;else{if(e===null)throw ge.alternate===null?Error(r(467)):Error(r(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},on===null?ge.memoizedState=on=e:on=on.next=e}return on}function lf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function mo(e){var n=po;return po+=1,$r===null&&($r=[]),e=Cm($r,e,n),n=ge,(on===null?n.memoizedState:on.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?gg:vg),e}function Fl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return mo(e);if(e.$$typeof===O)return wn(e)}throw Error(r(438,String(e)))}function uf(e){var n=null,a=ge.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ge.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=lf(),ge.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=C;return n.index++,a}function Xi(e,n){return typeof n=="function"?n(e):n}function zl(e){var n=ln();return cf(n,Pe,e)}function cf(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=e.baseQueue,d=o.pending;if(d!==null){if(c!==null){var S=c.next;c.next=d.next,d.next=S}n.baseQueue=c=d,o.pending=null}if(d=e.baseState,c===null)e.memoizedState=d;else{n=c.next;var T=S=null,P=null,Q=n,ft=!1;do{var pt=Q.lane&-536870913;if(pt!==Q.lane?(Ee&pt)===pt:(Ea&pt)===pt){var et=Q.revertLane;if(et===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),pt===Zr&&(ft=!0);else if((Ea&et)===et){Q=Q.next,et===Zr&&(ft=!0);continue}else pt={lane:0,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},P===null?(T=P=pt,S=d):P=P.next=pt,ge.lanes|=et,Da|=et;pt=Q.action,dr&&a(d,pt),d=Q.hasEagerState?Q.eagerState:a(d,pt)}else et={lane:pt,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},P===null?(T=P=et,S=d):P=P.next=et,ge.lanes|=pt,Da|=pt;Q=Q.next}while(Q!==null&&Q!==n);if(P===null?S=d:P.next=T,!qn(d,e.memoizedState)&&(_n=!0,ft&&(a=Kr,a!==null)))throw a;e.memoizedState=d,e.baseState=S,e.baseQueue=P,o.lastRenderedState=d}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function ff(e){var n=ln(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,c=a.pending,d=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do d=e(d,S.action),S=S.next;while(S!==c);qn(d,n.memoizedState)||(_n=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function Im(e,n,a){var o=ge,c=ln(),d=Ce;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!qn((Pe||c).memoizedState,a);S&&(c.memoizedState=a,_n=!0),c=c.queue;var T=Bm.bind(null,o,c,e);if(go(2048,8,T,[e]),c.getSnapshot!==n||S||on!==null&&on.memoizedState.tag&1){if(o.flags|=2048,ts(9,Bl(),zm.bind(null,o,c,a,n),null),ke===null)throw Error(r(349));d||(Ea&124)!==0||Fm(o,n,a)}return a}function Fm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ge.updateQueue,n===null?(n=lf(),ge.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function zm(e,n,a,o){n.value=a,n.getSnapshot=o,Hm(n)&&Gm(e)}function Bm(e,n,a){return a(function(){Hm(n)&&Gm(e)})}function Hm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!qn(e,a)}catch{return!0}}function Gm(e){var n=Wr(e,2);n!==null&&Jn(n,e,2)}function df(e){var n=Bn();if(typeof e=="function"){var a=e;if(e=a(),dr){ot(!0);try{a()}finally{ot(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:e},n}function Vm(e,n,a,o){return e.baseState=a,cf(e,Pe,typeof o=="function"?o:Xi)}function RS(e,n,a,o,c){if(Gl(e))throw Error(r(485));if(e=n.action,e!==null){var d={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){d.listeners.push(S)}};F.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,km(n,d)):(d.next=a.next,n.pending=a.next=d)}}function km(e,n){var a=n.action,o=n.payload,c=e.state;if(n.isTransition){var d=F.T,S={};F.T=S;try{var T=a(c,o),P=F.S;P!==null&&P(S,T),Xm(e,n,T)}catch(Q){hf(e,n,Q)}finally{F.T=d}}else try{d=a(c,o),Xm(e,n,d)}catch(Q){hf(e,n,Q)}}function Xm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Wm(e,n,o)},function(o){return hf(e,n,o)}):Wm(e,n,a)}function Wm(e,n,a){n.status="fulfilled",n.value=a,qm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,km(e,a)))}function hf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,qm(n),n=n.next;while(n!==o)}e.action=null}function qm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Ym(e,n){return n}function jm(e,n){if(Ce){var a=ke.formState;if(a!==null){t:{var o=ge;if(Ce){if($e){e:{for(var c=$e,d=Ci;c.nodeType!==8;){if(!d){c=null;break e}if(c=vi(c.nextSibling),c===null){c=null;break e}}d=c.data,c=d==="F!"||d==="F"?c:null}if(c){$e=vi(c.nextSibling),o=c.data==="F!";break t}}lr(o)}o=!1}o&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ym,lastRenderedState:n},a.queue=o,a=hg.bind(null,ge,o),o.dispatch=a,o=df(!1),d=_f.bind(null,ge,!1,o.queue),o=Bn(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,a=RS.bind(null,ge,c,d,a),c.dispatch=a,o.memoizedState=e,[n,a,!1]}function Zm(e){var n=ln();return Km(n,Pe,e)}function Km(e,n,a){if(n=cf(e,n,Ym)[0],e=zl(Xi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=mo(n)}catch(S){throw S===lo?Nl:S}else o=n;n=ln();var c=n.queue,d=c.dispatch;return a!==n.memoizedState&&(ge.flags|=2048,ts(9,Bl(),CS.bind(null,c,a),null)),[o,d,e]}function CS(e,n){e.action=n}function Qm(e){var n=ln(),a=Pe;if(a!==null)return Km(n,a,e);ln(),n=n.memoizedState,a=ln();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function ts(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ge.updateQueue,n===null&&(n=lf(),ge.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Bl(){return{destroy:void 0,resource:void 0}}function Jm(){return ln().memoizedState}function Hl(e,n,a,o){var c=Bn();o=o===void 0?null:o,ge.flags|=e,c.memoizedState=ts(1|n,Bl(),a,o)}function go(e,n,a,o){var c=ln();o=o===void 0?null:o;var d=c.memoizedState.inst;Pe!==null&&o!==null&&nf(o,Pe.memoizedState.deps)?c.memoizedState=ts(n,d,a,o):(ge.flags|=e,c.memoizedState=ts(1|n,d,a,o))}function $m(e,n){Hl(8390656,8,e,n)}function tg(e,n){go(2048,8,e,n)}function eg(e,n){return go(4,2,e,n)}function ng(e,n){return go(4,4,e,n)}function ig(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function ag(e,n,a){a=a!=null?a.concat([e]):null,go(4,4,ig.bind(null,n,e),a)}function pf(){}function rg(e,n){var a=ln();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&nf(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function sg(e,n){var a=ln();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&nf(n,o[1]))return o[0];if(o=e(),dr){ot(!0);try{e()}finally{ot(!1)}}return a.memoizedState=[o,n],o}function mf(e,n,a){return a===void 0||(Ea&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=uv(),ge.lanes|=e,Da|=e,a)}function og(e,n,a,o){return qn(a,n)?a:Qr.current!==null?(e=mf(e,a,o),qn(e,n)||(_n=!0),e):(Ea&42)===0?(_n=!0,e.memoizedState=a):(e=uv(),ge.lanes|=e,Da|=e,n)}function lg(e,n,a,o,c){var d=j.p;j.p=d!==0&&8>d?d:8;var S=F.T,T={};F.T=T,_f(e,!1,n,a);try{var P=c(),Q=F.S;if(Q!==null&&Q(T,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ft=bS(P,o);vo(e,n,ft,Qn(e))}else vo(e,n,o,Qn(e))}catch(pt){vo(e,n,{then:function(){},status:"rejected",reason:pt},Qn())}finally{j.p=d,F.T=S}}function wS(){}function gf(e,n,a,o){if(e.tag!==5)throw Error(r(476));var c=ug(e).queue;lg(e,c,n,q,a===null?wS:function(){return cg(e),a(o)})}function ug(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function cg(e){var n=ug(e).next.queue;vo(e,n,{},Qn())}function vf(){return wn(Po)}function fg(){return ln().memoizedState}function dg(){return ln().memoizedState}function DS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qn();e=Sa(a);var o=Ma(n,e,a);o!==null&&(Jn(o,n,a),co(o,n,a)),n={cache:qc()},e.payload=n;return}n=n.return}}function US(e,n,a){var o=Qn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Gl(e)?pg(n,a):(a=Ic(e,n,a,o),a!==null&&(Jn(a,e,o),mg(a,n,o)))}function hg(e,n,a){var o=Qn();vo(e,n,a,o)}function vo(e,n,a,o){var c={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Gl(e))pg(n,c);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var S=n.lastRenderedState,T=d(S,a);if(c.hasEagerState=!0,c.eagerState=T,qn(T,S))return bl(e,n,c,0),ke===null&&El(),!1}catch{}finally{}if(a=Ic(e,n,c,o),a!==null)return Jn(a,e,o),mg(a,n,o),!0}return!1}function _f(e,n,a,o){if(o={lane:2,revertLane:Kf(),action:o,hasEagerState:!1,eagerState:null,next:null},Gl(e)){if(n)throw Error(r(479))}else n=Ic(e,a,o,2),n!==null&&Jn(n,e,2)}function Gl(e){var n=e.alternate;return e===ge||n!==null&&n===ge}function pg(e,n){Jr=Pl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function mg(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Gt(e,a)}}var Vl={readContext:wn,use:Fl,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en},gg={readContext:wn,use:Fl,useCallback:function(e,n){return Bn().memoizedState=[e,n===void 0?null:n],e},useContext:wn,useEffect:$m,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Hl(4194308,4,ig.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Hl(4194308,4,e,n)},useInsertionEffect:function(e,n){Hl(4,2,e,n)},useMemo:function(e,n){var a=Bn();n=n===void 0?null:n;var o=e();if(dr){ot(!0);try{e()}finally{ot(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Bn();if(a!==void 0){var c=a(n);if(dr){ot(!0);try{a(n)}finally{ot(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=US.bind(null,ge,e),[o.memoizedState,e]},useRef:function(e){var n=Bn();return e={current:e},n.memoizedState=e},useState:function(e){e=df(e);var n=e.queue,a=hg.bind(null,ge,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:pf,useDeferredValue:function(e,n){var a=Bn();return mf(a,e,n)},useTransition:function(){var e=df(!1);return e=lg.bind(null,ge,e.queue,!0,!1),Bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ge,c=Bn();if(Ce){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),ke===null)throw Error(r(349));(Ee&124)!==0||Fm(o,n,a)}c.memoizedState=a;var d={value:a,getSnapshot:n};return c.queue=d,$m(Bm.bind(null,o,d,e),[e]),o.flags|=2048,ts(9,Bl(),zm.bind(null,o,d,a,n),null),a},useId:function(){var e=Bn(),n=ke.identifierPrefix;if(Ce){var a=Gi,o=Hi;a=(o&~(1<<32-It(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=Il++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=TS++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:vf,useFormState:jm,useActionState:jm,useOptimistic:function(e){var n=Bn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=_f.bind(null,ge,!0,a),a.dispatch=n,[e,n]},useMemoCache:uf,useCacheRefresh:function(){return Bn().memoizedState=DS.bind(null,ge)}},vg={readContext:wn,use:Fl,useCallback:rg,useContext:wn,useEffect:tg,useImperativeHandle:ag,useInsertionEffect:eg,useLayoutEffect:ng,useMemo:sg,useReducer:zl,useRef:Jm,useState:function(){return zl(Xi)},useDebugValue:pf,useDeferredValue:function(e,n){var a=ln();return og(a,Pe.memoizedState,e,n)},useTransition:function(){var e=zl(Xi)[0],n=ln().memoizedState;return[typeof e=="boolean"?e:mo(e),n]},useSyncExternalStore:Im,useId:fg,useHostTransitionStatus:vf,useFormState:Zm,useActionState:Zm,useOptimistic:function(e,n){var a=ln();return Vm(a,Pe,e,n)},useMemoCache:uf,useCacheRefresh:dg},NS={readContext:wn,use:Fl,useCallback:rg,useContext:wn,useEffect:tg,useImperativeHandle:ag,useInsertionEffect:eg,useLayoutEffect:ng,useMemo:sg,useReducer:ff,useRef:Jm,useState:function(){return ff(Xi)},useDebugValue:pf,useDeferredValue:function(e,n){var a=ln();return Pe===null?mf(a,e,n):og(a,Pe.memoizedState,e,n)},useTransition:function(){var e=ff(Xi)[0],n=ln().memoizedState;return[typeof e=="boolean"?e:mo(e),n]},useSyncExternalStore:Im,useId:fg,useHostTransitionStatus:vf,useFormState:Qm,useActionState:Qm,useOptimistic:function(e,n){var a=ln();return Pe!==null?Vm(a,Pe,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:uf,useCacheRefresh:dg},es=null,_o=0;function kl(e){var n=_o;return _o+=1,es===null&&(es=[]),Cm(es,e,n)}function xo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Xl(e,n){throw n.$$typeof===v?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function _g(e){var n=e._init;return n(e._payload)}function xg(e){function n(W,G){if(e){var K=W.deletions;K===null?(W.deletions=[G],W.flags|=16):K.push(G)}}function a(W,G){if(!e)return null;for(;G!==null;)n(W,G),G=G.sibling;return null}function o(W){for(var G=new Map;W!==null;)W.key!==null?G.set(W.key,W):G.set(W.index,W),W=W.sibling;return G}function c(W,G){return W=Bi(W,G),W.index=0,W.sibling=null,W}function d(W,G,K){return W.index=K,e?(K=W.alternate,K!==null?(K=K.index,K<G?(W.flags|=67108866,G):K):(W.flags|=67108866,G)):(W.flags|=1048576,G)}function S(W){return e&&W.alternate===null&&(W.flags|=67108866),W}function T(W,G,K,dt){return G===null||G.tag!==6?(G=zc(K,W.mode,dt),G.return=W,G):(G=c(G,K),G.return=W,G)}function P(W,G,K,dt){var Bt=K.type;return Bt===E?ft(W,G,K.props.children,dt,K.key):G!==null&&(G.elementType===Bt||typeof Bt=="object"&&Bt!==null&&Bt.$$typeof===Z&&_g(Bt)===G.type)?(G=c(G,K.props),xo(G,K),G.return=W,G):(G=Al(K.type,K.key,K.props,null,W.mode,dt),xo(G,K),G.return=W,G)}function Q(W,G,K,dt){return G===null||G.tag!==4||G.stateNode.containerInfo!==K.containerInfo||G.stateNode.implementation!==K.implementation?(G=Bc(K,W.mode,dt),G.return=W,G):(G=c(G,K.children||[]),G.return=W,G)}function ft(W,G,K,dt,Bt){return G===null||G.tag!==7?(G=ar(K,W.mode,dt,Bt),G.return=W,G):(G=c(G,K),G.return=W,G)}function pt(W,G,K){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=zc(""+G,W.mode,K),G.return=W,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case x:return K=Al(G.type,G.key,G.props,null,W.mode,K),xo(K,G),K.return=W,K;case y:return G=Bc(G,W.mode,K),G.return=W,G;case Z:var dt=G._init;return G=dt(G._payload),pt(W,G,K)}if(lt(G)||nt(G))return G=ar(G,W.mode,K,null),G.return=W,G;if(typeof G.then=="function")return pt(W,kl(G),K);if(G.$$typeof===O)return pt(W,Dl(W,G),K);Xl(W,G)}return null}function et(W,G,K,dt){var Bt=G!==null?G.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Bt!==null?null:T(W,G,""+K,dt);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case x:return K.key===Bt?P(W,G,K,dt):null;case y:return K.key===Bt?Q(W,G,K,dt):null;case Z:return Bt=K._init,K=Bt(K._payload),et(W,G,K,dt)}if(lt(K)||nt(K))return Bt!==null?null:ft(W,G,K,dt,null);if(typeof K.then=="function")return et(W,G,kl(K),dt);if(K.$$typeof===O)return et(W,G,Dl(W,K),dt);Xl(W,K)}return null}function it(W,G,K,dt,Bt){if(typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint")return W=W.get(K)||null,T(G,W,""+dt,Bt);if(typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case x:return W=W.get(dt.key===null?K:dt.key)||null,P(G,W,dt,Bt);case y:return W=W.get(dt.key===null?K:dt.key)||null,Q(G,W,dt,Bt);case Z:var ve=dt._init;return dt=ve(dt._payload),it(W,G,K,dt,Bt)}if(lt(dt)||nt(dt))return W=W.get(K)||null,ft(G,W,dt,Bt,null);if(typeof dt.then=="function")return it(W,G,K,kl(dt),Bt);if(dt.$$typeof===O)return it(W,G,K,Dl(G,dt),Bt);Xl(G,dt)}return null}function ae(W,G,K,dt){for(var Bt=null,ve=null,jt=G,ne=G=0,yn=null;jt!==null&&ne<K.length;ne++){jt.index>ne?(yn=jt,jt=null):yn=jt.sibling;var Ae=et(W,jt,K[ne],dt);if(Ae===null){jt===null&&(jt=yn);break}e&&jt&&Ae.alternate===null&&n(W,jt),G=d(Ae,G,ne),ve===null?Bt=Ae:ve.sibling=Ae,ve=Ae,jt=yn}if(ne===K.length)return a(W,jt),Ce&&sr(W,ne),Bt;if(jt===null){for(;ne<K.length;ne++)jt=pt(W,K[ne],dt),jt!==null&&(G=d(jt,G,ne),ve===null?Bt=jt:ve.sibling=jt,ve=jt);return Ce&&sr(W,ne),Bt}for(jt=o(jt);ne<K.length;ne++)yn=it(jt,W,ne,K[ne],dt),yn!==null&&(e&&yn.alternate!==null&&jt.delete(yn.key===null?ne:yn.key),G=d(yn,G,ne),ve===null?Bt=yn:ve.sibling=yn,ve=yn);return e&&jt.forEach(function(Ba){return n(W,Ba)}),Ce&&sr(W,ne),Bt}function te(W,G,K,dt){if(K==null)throw Error(r(151));for(var Bt=null,ve=null,jt=G,ne=G=0,yn=null,Ae=K.next();jt!==null&&!Ae.done;ne++,Ae=K.next()){jt.index>ne?(yn=jt,jt=null):yn=jt.sibling;var Ba=et(W,jt,Ae.value,dt);if(Ba===null){jt===null&&(jt=yn);break}e&&jt&&Ba.alternate===null&&n(W,jt),G=d(Ba,G,ne),ve===null?Bt=Ba:ve.sibling=Ba,ve=Ba,jt=yn}if(Ae.done)return a(W,jt),Ce&&sr(W,ne),Bt;if(jt===null){for(;!Ae.done;ne++,Ae=K.next())Ae=pt(W,Ae.value,dt),Ae!==null&&(G=d(Ae,G,ne),ve===null?Bt=Ae:ve.sibling=Ae,ve=Ae);return Ce&&sr(W,ne),Bt}for(jt=o(jt);!Ae.done;ne++,Ae=K.next())Ae=it(jt,W,ne,Ae.value,dt),Ae!==null&&(e&&Ae.alternate!==null&&jt.delete(Ae.key===null?ne:Ae.key),G=d(Ae,G,ne),ve===null?Bt=Ae:ve.sibling=Ae,ve=Ae);return e&&jt.forEach(function(LM){return n(W,LM)}),Ce&&sr(W,ne),Bt}function Fe(W,G,K,dt){if(typeof K=="object"&&K!==null&&K.type===E&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case x:t:{for(var Bt=K.key;G!==null;){if(G.key===Bt){if(Bt=K.type,Bt===E){if(G.tag===7){a(W,G.sibling),dt=c(G,K.props.children),dt.return=W,W=dt;break t}}else if(G.elementType===Bt||typeof Bt=="object"&&Bt!==null&&Bt.$$typeof===Z&&_g(Bt)===G.type){a(W,G.sibling),dt=c(G,K.props),xo(dt,K),dt.return=W,W=dt;break t}a(W,G);break}else n(W,G);G=G.sibling}K.type===E?(dt=ar(K.props.children,W.mode,dt,K.key),dt.return=W,W=dt):(dt=Al(K.type,K.key,K.props,null,W.mode,dt),xo(dt,K),dt.return=W,W=dt)}return S(W);case y:t:{for(Bt=K.key;G!==null;){if(G.key===Bt)if(G.tag===4&&G.stateNode.containerInfo===K.containerInfo&&G.stateNode.implementation===K.implementation){a(W,G.sibling),dt=c(G,K.children||[]),dt.return=W,W=dt;break t}else{a(W,G);break}else n(W,G);G=G.sibling}dt=Bc(K,W.mode,dt),dt.return=W,W=dt}return S(W);case Z:return Bt=K._init,K=Bt(K._payload),Fe(W,G,K,dt)}if(lt(K))return ae(W,G,K,dt);if(nt(K)){if(Bt=nt(K),typeof Bt!="function")throw Error(r(150));return K=Bt.call(K),te(W,G,K,dt)}if(typeof K.then=="function")return Fe(W,G,kl(K),dt);if(K.$$typeof===O)return Fe(W,G,Dl(W,K),dt);Xl(W,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,G!==null&&G.tag===6?(a(W,G.sibling),dt=c(G,K),dt.return=W,W=dt):(a(W,G),dt=zc(K,W.mode,dt),dt.return=W,W=dt),S(W)):a(W,G)}return function(W,G,K,dt){try{_o=0;var Bt=Fe(W,G,K,dt);return es=null,Bt}catch(jt){if(jt===lo||jt===Nl)throw jt;var ve=Yn(29,jt,null,W.mode);return ve.lanes=dt,ve.return=W,ve}finally{}}}var ns=xg(!0),yg=xg(!1),si=J(null),wi=null;function ba(e){var n=e.alternate;yt(pn,pn.current&1),yt(si,e),wi===null&&(n===null||Qr.current!==null||n.memoizedState!==null)&&(wi=e)}function Sg(e){if(e.tag===22){if(yt(pn,pn.current),yt(si,e),wi===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(wi=e)}}else Ta()}function Ta(){yt(pn,pn.current),yt(si,si.current)}function Wi(e){_t(si),wi===e&&(wi=null),_t(pn)}var pn=J(0);function Wl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||ld(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function xf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var yf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Qn(),c=Sa(o);c.payload=n,a!=null&&(c.callback=a),n=Ma(e,c,o),n!==null&&(Jn(n,e,o),co(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Qn(),c=Sa(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Ma(e,c,o),n!==null&&(Jn(n,e,o),co(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Qn(),o=Sa(a);o.tag=2,n!=null&&(o.callback=n),n=Ma(e,o,a),n!==null&&(Jn(n,e,a),co(n,e,a))}};function Mg(e,n,a,o,c,d,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,S):n.prototype&&n.prototype.isPureReactComponent?!to(a,o)||!to(c,d):!0}function Eg(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&yf.enqueueReplaceState(n,n.state,null)}function hr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var ql=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function bg(e){ql(e)}function Tg(e){console.error(e)}function Ag(e){ql(e)}function Yl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Rg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Sf(e,n,a){return a=Sa(a),a.tag=3,a.payload={element:null},a.callback=function(){Yl(e,n)},a}function Cg(e){return e=Sa(e),e.tag=3,e}function wg(e,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var d=o.value;e.payload=function(){return c(d)},e.callback=function(){Rg(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){Rg(n,a,o),typeof c!="function"&&(Ua===null?Ua=new Set([this]):Ua.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function LS(e,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&ro(n,a,c,!0),a=si.current,a!==null){switch(a.tag){case 13:return wi===null?Wf():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===Zc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Yf(e,o,c)),!1;case 22:return a.flags|=65536,o===Zc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Yf(e,o,c)),!1}throw Error(r(435,a.tag))}return Yf(e,o,c),Wf(),!1}if(Ce)return n=si.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==Vc&&(e=Error(r(422),{cause:o}),ao(ni(e,a)))):(o!==Vc&&(n=Error(r(423),{cause:o}),ao(ni(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=ni(o,a),c=Sf(e.stateNode,o,c),Jc(e,c),tn!==4&&(tn=2)),!1;var d=Error(r(520),{cause:o});if(d=ni(d,a),Ao===null?Ao=[d]:Ao.push(d),tn!==4&&(tn=2),n===null)return!0;o=ni(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Sf(a.stateNode,o,e),Jc(a,e),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ua===null||!Ua.has(d))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Cg(c),wg(c,e,a,o),Jc(a,c),!1}a=a.return}while(a!==null);return!1}var Dg=Error(r(461)),_n=!1;function En(e,n,a,o){n.child=e===null?yg(n,null,a,o):ns(n,e.child,a,o)}function Ug(e,n,a,o,c){a=a.render;var d=n.ref;if("ref"in o){var S={};for(var T in o)T!=="ref"&&(S[T]=o[T])}else S=o;return cr(n),o=af(e,n,a,S,d,c),T=rf(),e!==null&&!_n?(sf(e,n,c),qi(e,n,c)):(Ce&&T&&Hc(n),n.flags|=1,En(e,n,o,c),n.child)}function Ng(e,n,a,o,c){if(e===null){var d=a.type;return typeof d=="function"&&!Fc(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,Lg(e,n,d,o,c)):(e=Al(a.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!wf(e,c)){var S=d.memoizedProps;if(a=a.compare,a=a!==null?a:to,a(S,o)&&e.ref===n.ref)return qi(e,n,c)}return n.flags|=1,e=Bi(d,o),e.ref=n.ref,e.return=n,n.child=e}function Lg(e,n,a,o,c){if(e!==null){var d=e.memoizedProps;if(to(d,o)&&e.ref===n.ref)if(_n=!1,n.pendingProps=o=d,wf(e,c))(e.flags&131072)!==0&&(_n=!0);else return n.lanes=e.lanes,qi(e,n,c)}return Mf(e,n,a,o,c)}function Og(e,n,a){var o=n.pendingProps,c=o.children,d=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=d!==null?d.baseLanes|a:a,e!==null){for(c=n.child=e.child,d=0;c!==null;)d=d|c.lanes|c.childLanes,c=c.sibling;n.childLanes=d&~o}else n.childLanes=0,n.child=null;return Pg(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ul(n,d!==null?d.cachePool:null),d!==null?Lm(n,d):tf(),Sg(n);else return n.lanes=n.childLanes=536870912,Pg(e,n,d!==null?d.baseLanes|a:a,a)}else d!==null?(Ul(n,d.cachePool),Lm(n,d),Ta(),n.memoizedState=null):(e!==null&&Ul(n,null),tf(),Ta());return En(e,n,c,a),n.child}function Pg(e,n,a,o){var c=jc();return c=c===null?null:{parent:hn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&Ul(n,null),tf(),Sg(n),e!==null&&ro(e,n,o,!0),null}function jl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Mf(e,n,a,o,c){return cr(n),a=af(e,n,a,o,void 0,c),o=rf(),e!==null&&!_n?(sf(e,n,c),qi(e,n,c)):(Ce&&o&&Hc(n),n.flags|=1,En(e,n,a,c),n.child)}function Ig(e,n,a,o,c,d){return cr(n),n.updateQueue=null,a=Pm(n,o,a,c),Om(e),o=rf(),e!==null&&!_n?(sf(e,n,d),qi(e,n,d)):(Ce&&o&&Hc(n),n.flags|=1,En(e,n,a,d),n.child)}function Fg(e,n,a,o,c){if(cr(n),n.stateNode===null){var d=qr,S=a.contextType;typeof S=="object"&&S!==null&&(d=wn(S)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=yf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Kc(n),S=a.contextType,d.context=typeof S=="object"&&S!==null?wn(S):qr,d.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(xf(n,a,S,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(S=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),S!==d.state&&yf.enqueueReplaceState(d,d.state,null),ho(n,o,d,c),fo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){d=n.stateNode;var T=n.memoizedProps,P=hr(a,T);d.props=P;var Q=d.context,ft=a.contextType;S=qr,typeof ft=="object"&&ft!==null&&(S=wn(ft));var pt=a.getDerivedStateFromProps;ft=typeof pt=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ft||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||Q!==S)&&Eg(n,d,o,S),ya=!1;var et=n.memoizedState;d.state=et,ho(n,o,d,c),fo(),Q=n.memoizedState,T||et!==Q||ya?(typeof pt=="function"&&(xf(n,a,pt,o),Q=n.memoizedState),(P=ya||Mg(n,a,P,o,et,Q,S))?(ft||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=Q),d.props=o,d.state=Q,d.context=S,o=P):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Qc(e,n),S=n.memoizedProps,ft=hr(a,S),d.props=ft,pt=n.pendingProps,et=d.context,Q=a.contextType,P=qr,typeof Q=="object"&&Q!==null&&(P=wn(Q)),T=a.getDerivedStateFromProps,(Q=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S!==pt||et!==P)&&Eg(n,d,o,P),ya=!1,et=n.memoizedState,d.state=et,ho(n,o,d,c),fo();var it=n.memoizedState;S!==pt||et!==it||ya||e!==null&&e.dependencies!==null&&wl(e.dependencies)?(typeof T=="function"&&(xf(n,a,T,o),it=n.memoizedState),(ft=ya||Mg(n,a,ft,o,et,it,P)||e!==null&&e.dependencies!==null&&wl(e.dependencies))?(Q||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,it,P),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,it,P)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||S===e.memoizedProps&&et===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&et===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=it),d.props=o,d.state=it,d.context=P,o=ft):(typeof d.componentDidUpdate!="function"||S===e.memoizedProps&&et===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&et===e.memoizedState||(n.flags|=1024),o=!1)}return d=o,jl(e,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&o?(n.child=ns(n,e.child,null,c),n.child=ns(n,null,a,c)):En(e,n,a,c),n.memoizedState=d.state,e=n.child):e=qi(e,n,c),e}function zg(e,n,a,o){return io(),n.flags|=256,En(e,n,a,o),n.child}var Ef={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bf(e){return{baseLanes:e,cachePool:Tm()}}function Tf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=oi),e}function Bg(e,n,a){var o=n.pendingProps,c=!1,d=(n.flags&128)!==0,S;if((S=d)||(S=e!==null&&e.memoizedState===null?!1:(pn.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ce){if(c?ba(n):Ta(),Ce){var T=$e,P;if(P=T){t:{for(P=T,T=Ci;P.nodeType!==8;){if(!T){T=null;break t}if(P=vi(P.nextSibling),P===null){T=null;break t}}T=P}T!==null?(n.memoizedState={dehydrated:T,treeContext:rr!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},P=Yn(18,null,null,0),P.stateNode=T,P.return=n,n.child=P,Pn=n,$e=null,P=!0):P=!1}P||lr(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return ld(T)?n.lanes=32:n.lanes=536870912,null;Wi(n)}return T=o.children,o=o.fallback,c?(Ta(),c=n.mode,T=Zl({mode:"hidden",children:T},c),o=ar(o,c,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,c=n.child,c.memoizedState=bf(a),c.childLanes=Tf(e,S,a),n.memoizedState=Ef,o):(ba(n),Af(n,T))}if(P=e.memoizedState,P!==null&&(T=P.dehydrated,T!==null)){if(d)n.flags&256?(ba(n),n.flags&=-257,n=Rf(e,n,a)):n.memoizedState!==null?(Ta(),n.child=e.child,n.flags|=128,n=null):(Ta(),c=o.fallback,T=n.mode,o=Zl({mode:"visible",children:o.children},T),c=ar(c,T,a,null),c.flags|=2,o.return=n,c.return=n,o.sibling=c,n.child=o,ns(n,e.child,null,a),o=n.child,o.memoizedState=bf(a),o.childLanes=Tf(e,S,a),n.memoizedState=Ef,n=c);else if(ba(n),ld(T)){if(S=T.nextSibling&&T.nextSibling.dataset,S)var Q=S.dgst;S=Q,o=Error(r(419)),o.stack="",o.digest=S,ao({value:o,source:null,stack:null}),n=Rf(e,n,a)}else if(_n||ro(e,n,a,!1),S=(a&e.childLanes)!==0,_n||S){if(S=ke,S!==null&&(o=a&-a,o=(o&42)!==0?1:re(o),o=(o&(S.suspendedLanes|a))!==0?0:o,o!==0&&o!==P.retryLane))throw P.retryLane=o,Wr(e,o),Jn(S,e,o),Dg;T.data==="$?"||Wf(),n=Rf(e,n,a)}else T.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=P.treeContext,$e=vi(T.nextSibling),Pn=n,Ce=!0,or=null,Ci=!1,e!==null&&(ai[ri++]=Hi,ai[ri++]=Gi,ai[ri++]=rr,Hi=e.id,Gi=e.overflow,rr=n),n=Af(n,o.children),n.flags|=4096);return n}return c?(Ta(),c=o.fallback,T=n.mode,P=e.child,Q=P.sibling,o=Bi(P,{mode:"hidden",children:o.children}),o.subtreeFlags=P.subtreeFlags&65011712,Q!==null?c=Bi(Q,c):(c=ar(c,T,a,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,o=c,c=n.child,T=e.child.memoizedState,T===null?T=bf(a):(P=T.cachePool,P!==null?(Q=hn._currentValue,P=P.parent!==Q?{parent:Q,pool:Q}:P):P=Tm(),T={baseLanes:T.baseLanes|a,cachePool:P}),c.memoizedState=T,c.childLanes=Tf(e,S,a),n.memoizedState=Ef,o):(ba(n),a=e.child,e=a.sibling,a=Bi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function Af(e,n){return n=Zl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Zl(e,n){return e=Yn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Rf(e,n,a){return ns(n,e.child,null,a),e=Af(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Hg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Xc(e.return,n,a)}function Cf(e,n,a,o,c){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=a,d.tailMode=c)}function Gg(e,n,a){var o=n.pendingProps,c=o.revealOrder,d=o.tail;if(En(e,n,o.children,a),o=pn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Hg(e,a,n);else if(e.tag===19)Hg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(yt(pn,o),c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&Wl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Cf(n,!1,c,a,d);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Wl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Cf(n,!0,a,null,d);break;case"together":Cf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function qi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Da|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(ro(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Bi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Bi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function wf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&wl(e)))}function OS(e,n,a){switch(n.tag){case 3:At(n,n.stateNode.containerInfo),xa(n,hn,e.memoizedState.cache),io();break;case 27:case 5:qt(n);break;case 4:At(n,n.stateNode.containerInfo);break;case 10:xa(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ba(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Bg(e,n,a):(ba(n),e=qi(e,n,a),e!==null?e.sibling:null);ba(n);break;case 19:var c=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(ro(e,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return Gg(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),yt(pn,pn.current),o)break;return null;case 22:case 23:return n.lanes=0,Og(e,n,a);case 24:xa(n,hn,e.memoizedState.cache)}return qi(e,n,a)}function Vg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)_n=!0;else{if(!wf(e,a)&&(n.flags&128)===0)return _n=!1,OS(e,n,a);_n=(e.flags&131072)!==0}else _n=!1,Ce&&(n.flags&1048576)!==0&&_m(n,Cl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,c=o._init;if(o=c(o._payload),n.type=o,typeof o=="function")Fc(o)?(e=hr(o,e),n.tag=1,n=Fg(null,n,o,e,a)):(n.tag=0,n=Mf(null,n,o,e,a));else{if(o!=null){if(c=o.$$typeof,c===D){n.tag=11,n=Ug(null,n,o,e,a);break t}else if(c===B){n.tag=14,n=Ng(null,n,o,e,a);break t}}throw n=vt(o)||o,Error(r(306,n,""))}}return n;case 0:return Mf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=hr(o,n.pendingProps),Fg(e,n,o,c,a);case 3:t:{if(At(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var d=n.memoizedState;c=d.element,Qc(e,n),ho(n,o,null,a);var S=n.memoizedState;if(o=S.cache,xa(n,hn,o),o!==d.cache&&Wc(n,[hn],a,!0),fo(),o=S.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=zg(e,n,o,a);break t}else if(o!==c){c=ni(Error(r(424)),n),ao(c),n=zg(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for($e=vi(e.firstChild),Pn=n,Ce=!0,or=null,Ci=!0,a=yg(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(io(),o===c){n=qi(e,n,a);break t}En(e,n,o,a)}n=n.child}return n;case 26:return jl(e,n),e===null?(a=qv(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ce||(a=n.type,e=n.pendingProps,o=uu(tt.current).createElement(a),o[dn]=n,o[Qe]=e,Tn(o,a,e),sn(o),n.stateNode=o):n.memoizedState=qv(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return qt(n),e===null&&Ce&&(o=n.stateNode=kv(n.type,n.pendingProps,tt.current),Pn=n,Ci=!0,c=$e,Oa(n.type)?(ud=c,$e=vi(o.firstChild)):$e=c),En(e,n,n.pendingProps.children,a),jl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ce&&((c=o=$e)&&(o=lM(o,n.type,n.pendingProps,Ci),o!==null?(n.stateNode=o,Pn=n,$e=vi(o.firstChild),Ci=!1,c=!0):c=!1),c||lr(n)),qt(n),c=n.type,d=n.pendingProps,S=e!==null?e.memoizedProps:null,o=d.children,rd(c,d)?o=null:S!==null&&rd(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=af(e,n,AS,null,null,a),Po._currentValue=c),jl(e,n),En(e,n,o,a),n.child;case 6:return e===null&&Ce&&((e=a=$e)&&(a=uM(a,n.pendingProps,Ci),a!==null?(n.stateNode=a,Pn=n,$e=null,e=!0):e=!1),e||lr(n)),null;case 13:return Bg(e,n,a);case 4:return At(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=ns(n,null,o,a):En(e,n,o,a),n.child;case 11:return Ug(e,n,n.type,n.pendingProps,a);case 7:return En(e,n,n.pendingProps,a),n.child;case 8:return En(e,n,n.pendingProps.children,a),n.child;case 12:return En(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,xa(n,n.type,o.value),En(e,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,cr(n),c=wn(c),o=o(c),n.flags|=1,En(e,n,o,a),n.child;case 14:return Ng(e,n,n.type,n.pendingProps,a);case 15:return Lg(e,n,n.type,n.pendingProps,a);case 19:return Gg(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=Zl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Bi(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Og(e,n,a);case 24:return cr(n),o=wn(hn),e===null?(c=jc(),c===null&&(c=ke,d=qc(),c.pooledCache=d,d.refCount++,d!==null&&(c.pooledCacheLanes|=a),c=d),n.memoizedState={parent:o,cache:c},Kc(n),xa(n,hn,c)):((e.lanes&a)!==0&&(Qc(e,n),ho(n,null,null,a),fo()),c=e.memoizedState,d=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),xa(n,hn,o)):(o=d.cache,xa(n,hn,o),o!==c.cache&&Wc(n,[hn],a,!0))),En(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Yi(e){e.flags|=4}function kg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Qv(n)){if(n=si.current,n!==null&&((Ee&4194048)===Ee?wi!==null:(Ee&62914560)!==Ee&&(Ee&536870912)===0||n!==wi))throw uo=Zc,Am;e.flags|=8192}}function Kl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?bt():536870912,e.lanes|=n,ss|=n)}function yo(e,n){if(!Ce)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function PS(e,n,a){var o=n.pendingProps;switch(Gc(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ki(hn),Qt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(no(n)?Yi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Sm())),Ke(n),null;case 26:return a=n.memoizedState,e===null?(Yi(n),a!==null?(Ke(n),kg(n,a)):(Ke(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Yi(n),Ke(n),kg(n,a)):(Ke(n),n.flags&=-16777217):(e.memoizedProps!==o&&Yi(n),Ke(n),n.flags&=-16777217),null;case 27:me(n),a=tt.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Yi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Ke(n),null}e=Ut.current,no(n)?xm(n):(e=kv(c,o,a),n.stateNode=e,Yi(n))}return Ke(n),null;case 5:if(me(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Yi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Ke(n),null}if(e=Ut.current,no(n))xm(n);else{switch(c=uu(tt.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?c.createElement(a,{is:o.is}):c.createElement(a)}}e[dn]=n,e[Qe]=o;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(Tn(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Yi(n)}}return Ke(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Yi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=tt.current,no(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,c=Pn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[dn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Iv(e.nodeValue,a)),e||lr(n)}else e=uu(e).createTextNode(o),e[dn]=n,n.stateNode=e}return Ke(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=no(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[dn]=n}else io(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),c=!1}else c=Sm(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Wi(n),n):(Wi(n),null)}if(Wi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var d=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==c&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Kl(n,n.updateQueue),Ke(n),null;case 4:return Qt(),e===null&&td(n.stateNode.containerInfo),Ke(n),null;case 10:return ki(n.type),Ke(n),null;case 19:if(_t(pn),c=n.memoizedState,c===null)return Ke(n),null;if(o=(n.flags&128)!==0,d=c.rendering,d===null)if(o)yo(c,!1);else{if(tn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=Wl(e),d!==null){for(n.flags|=128,yo(c,!1),e=d.updateQueue,n.updateQueue=e,Kl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)vm(a,e),a=a.sibling;return yt(pn,pn.current&1|2),n.child}e=e.sibling}c.tail!==null&&Pt()>$l&&(n.flags|=128,o=!0,yo(c,!1),n.lanes=4194304)}else{if(!o)if(e=Wl(d),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Kl(n,e),yo(c,!0),c.tail===null&&c.tailMode==="hidden"&&!d.alternate&&!Ce)return Ke(n),null}else 2*Pt()-c.renderingStartTime>$l&&a!==536870912&&(n.flags|=128,o=!0,yo(c,!1),n.lanes=4194304);c.isBackwards?(d.sibling=n.child,n.child=d):(e=c.last,e!==null?e.sibling=d:n.child=d,c.last=d)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=Pt(),n.sibling=null,e=pn.current,yt(pn,o?e&1|2:e&1),n):(Ke(n),null);case 22:case 23:return Wi(n),ef(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&Kl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&_t(fr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ki(hn),Ke(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function IS(e,n){switch(Gc(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ki(hn),Qt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return me(n),null;case 13:if(Wi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));io()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return _t(pn),null;case 4:return Qt(),null;case 10:return ki(n.type),null;case 22:case 23:return Wi(n),ef(),e!==null&&_t(fr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ki(hn),null;case 25:return null;default:return null}}function Xg(e,n){switch(Gc(n),n.tag){case 3:ki(hn),Qt();break;case 26:case 27:case 5:me(n);break;case 4:Qt();break;case 13:Wi(n);break;case 19:_t(pn);break;case 10:ki(n.type);break;case 22:case 23:Wi(n),ef(),e!==null&&_t(fr);break;case 24:ki(hn)}}function So(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){o=void 0;var d=a.create,S=a.inst;o=d(),S.destroy=o}a=a.next}while(a!==c)}}catch(T){Ge(n,n.return,T)}}function Aa(e,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var d=c.next;o=d;do{if((o.tag&e)===e){var S=o.inst,T=S.destroy;if(T!==void 0){S.destroy=void 0,c=n;var P=a,Q=T;try{Q()}catch(ft){Ge(c,P,ft)}}}o=o.next}while(o!==d)}}catch(ft){Ge(n,n.return,ft)}}function Wg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Nm(n,a)}catch(o){Ge(e,e.return,o)}}}function qg(e,n,a){a.props=hr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ge(e,n,o)}}function Mo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(c){Ge(e,n,c)}}function Di(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Ge(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ge(e,n,c)}else a.current=null}function Yg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Ge(e,e.return,c)}}function Df(e,n,a){try{var o=e.stateNode;iM(o,e.type,a,n),o[Qe]=n}catch(c){Ge(e,e.return,c)}}function jg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Oa(e.type)||e.tag===4}function Uf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||jg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Oa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Nf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=lu));else if(o!==4&&(o===27&&Oa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Nf(e,n,a),e=e.sibling;e!==null;)Nf(e,n,a),e=e.sibling}function Ql(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Oa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ql(e,n,a),e=e.sibling;e!==null;)Ql(e,n,a),e=e.sibling}function Zg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Tn(n,o,a),n[dn]=e,n[Qe]=a}catch(d){Ge(e,e.return,d)}}var ji=!1,nn=!1,Lf=!1,Kg=typeof WeakSet=="function"?WeakSet:Set,xn=null;function FS(e,n){if(e=e.containerInfo,id=mu,e=om(e),Dc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var S=0,T=-1,P=-1,Q=0,ft=0,pt=e,et=null;e:for(;;){for(var it;pt!==a||c!==0&&pt.nodeType!==3||(T=S+c),pt!==d||o!==0&&pt.nodeType!==3||(P=S+o),pt.nodeType===3&&(S+=pt.nodeValue.length),(it=pt.firstChild)!==null;)et=pt,pt=it;for(;;){if(pt===e)break e;if(et===a&&++Q===c&&(T=S),et===d&&++ft===o&&(P=S),(it=pt.nextSibling)!==null)break;pt=et,et=pt.parentNode}pt=it}a=T===-1||P===-1?null:{start:T,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(ad={focusedElem:e,selectionRange:a},mu=!1,xn=n;xn!==null;)if(n=xn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,xn=e;else for(;xn!==null;){switch(n=xn,d=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=n,c=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var ae=hr(a.type,c,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(ae,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(te){Ge(a,a.return,te)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)od(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":od(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,xn=e;break}xn=n.return}}function Qg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ra(e,a),o&4&&So(5,a);break;case 1:if(Ra(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){Ge(a,a.return,S)}else{var c=hr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Ge(a,a.return,S)}}o&64&&Wg(a),o&512&&Mo(a,a.return);break;case 3:if(Ra(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Nm(e,n)}catch(S){Ge(a,a.return,S)}}break;case 27:n===null&&o&4&&Zg(a);case 26:case 5:Ra(e,a),n===null&&o&4&&Yg(a),o&512&&Mo(a,a.return);break;case 12:Ra(e,a);break;case 13:Ra(e,a),o&4&&tv(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=qS.bind(null,a),cM(e,a))));break;case 22:if(o=a.memoizedState!==null||ji,!o){n=n!==null&&n.memoizedState!==null||nn,c=ji;var d=nn;ji=o,(nn=n)&&!d?Ca(e,a,(a.subtreeFlags&8772)!==0):Ra(e,a),ji=c,nn=d}break;case 30:break;default:Ra(e,a)}}function Jg(e){var n=e.alternate;n!==null&&(e.alternate=null,Jg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Fr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ye=null,Hn=!1;function Zi(e,n,a){for(a=a.child;a!==null;)$g(e,n,a),a=a.sibling}function $g(e,n,a){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(ct,a)}catch{}switch(a.tag){case 26:nn||Di(a,n),Zi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:nn||Di(a,n);var o=Ye,c=Hn;Oa(a.type)&&(Ye=a.stateNode,Hn=!1),Zi(e,n,a),Uo(a.stateNode),Ye=o,Hn=c;break;case 5:nn||Di(a,n);case 6:if(o=Ye,c=Hn,Ye=null,Zi(e,n,a),Ye=o,Hn=c,Ye!==null)if(Hn)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(a.stateNode)}catch(d){Ge(a,n,d)}else try{Ye.removeChild(a.stateNode)}catch(d){Ge(a,n,d)}break;case 18:Ye!==null&&(Hn?(e=Ye,Gv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Bo(e)):Gv(Ye,a.stateNode));break;case 4:o=Ye,c=Hn,Ye=a.stateNode.containerInfo,Hn=!0,Zi(e,n,a),Ye=o,Hn=c;break;case 0:case 11:case 14:case 15:nn||Aa(2,a,n),nn||Aa(4,a,n),Zi(e,n,a);break;case 1:nn||(Di(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&qg(a,n,o)),Zi(e,n,a);break;case 21:Zi(e,n,a);break;case 22:nn=(o=nn)||a.memoizedState!==null,Zi(e,n,a),nn=o;break;default:Zi(e,n,a)}}function tv(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Bo(e)}catch(a){Ge(n,n.return,a)}}function zS(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Kg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Kg),n;default:throw Error(r(435,e.tag))}}function Of(e,n){var a=zS(e);n.forEach(function(o){var c=YS.bind(null,e,o);a.has(o)||(a.add(o),o.then(c,c))})}function jn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],d=e,S=n,T=S;t:for(;T!==null;){switch(T.tag){case 27:if(Oa(T.type)){Ye=T.stateNode,Hn=!1;break t}break;case 5:Ye=T.stateNode,Hn=!1;break t;case 3:case 4:Ye=T.stateNode.containerInfo,Hn=!0;break t}T=T.return}if(Ye===null)throw Error(r(160));$g(d,S,c),Ye=null,Hn=!1,d=c.alternate,d!==null&&(d.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)ev(n,e),n=n.sibling}var gi=null;function ev(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:jn(n,e),Zn(e),o&4&&(Aa(3,e,e.return),So(3,e),Aa(5,e,e.return));break;case 1:jn(n,e),Zn(e),o&512&&(nn||a===null||Di(a,a.return)),o&64&&ji&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=gi;if(jn(n,e),Zn(e),o&512&&(nn||a===null||Di(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":d=c.getElementsByTagName("title")[0],(!d||d[Ri]||d[dn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=c.createElement(o),c.head.insertBefore(d,c.querySelector("head > title"))),Tn(d,o,a),d[dn]=e,sn(d),o=d;break t;case"link":var S=Zv("link","href",c).get(o+(a.href||""));if(S){for(var T=0;T<S.length;T++)if(d=S[T],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(T,1);break e}}d=c.createElement(o),Tn(d,o,a),c.head.appendChild(d);break;case"meta":if(S=Zv("meta","content",c).get(o+(a.content||""))){for(T=0;T<S.length;T++)if(d=S[T],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(T,1);break e}}d=c.createElement(o),Tn(d,o,a),c.head.appendChild(d);break;default:throw Error(r(468,o))}d[dn]=e,sn(d),o=d}e.stateNode=o}else Kv(c,e.type,e.stateNode);else e.stateNode=jv(c,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?Kv(c,e.type,e.stateNode):jv(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Df(e,e.memoizedProps,a.memoizedProps)}break;case 27:jn(n,e),Zn(e),o&512&&(nn||a===null||Di(a,a.return)),a!==null&&o&4&&Df(e,e.memoizedProps,a.memoizedProps);break;case 5:if(jn(n,e),Zn(e),o&512&&(nn||a===null||Di(a,a.return)),e.flags&32){c=e.stateNode;try{Fn(c,"")}catch(it){Ge(e,e.return,it)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,Df(e,c,a!==null?a.memoizedProps:c)),o&1024&&(Lf=!0);break;case 6:if(jn(n,e),Zn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(it){Ge(e,e.return,it)}}break;case 3:if(du=null,c=gi,gi=cu(n.containerInfo),jn(n,e),gi=c,Zn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Bo(n.containerInfo)}catch(it){Ge(e,e.return,it)}Lf&&(Lf=!1,nv(e));break;case 4:o=gi,gi=cu(e.stateNode.containerInfo),jn(n,e),Zn(e),gi=o;break;case 12:jn(n,e),Zn(e);break;case 13:jn(n,e),Zn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Hf=Pt()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Of(e,o)));break;case 22:c=e.memoizedState!==null;var P=a!==null&&a.memoizedState!==null,Q=ji,ft=nn;if(ji=Q||c,nn=ft||P,jn(n,e),nn=ft,ji=Q,Zn(e),o&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||P||ji||nn||pr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){P=a=n;try{if(d=P.stateNode,c)S=d.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{T=P.stateNode;var pt=P.memoizedProps.style,et=pt!=null&&pt.hasOwnProperty("display")?pt.display:null;T.style.display=et==null||typeof et=="boolean"?"":(""+et).trim()}}catch(it){Ge(P,P.return,it)}}}else if(n.tag===6){if(a===null){P=n;try{P.stateNode.nodeValue=c?"":P.memoizedProps}catch(it){Ge(P,P.return,it)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Of(e,a))));break;case 19:jn(n,e),Zn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Of(e,o)));break;case 30:break;case 21:break;default:jn(n,e),Zn(e)}}function Zn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(jg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,d=Uf(e);Ql(e,d,c);break;case 5:var S=a.stateNode;a.flags&32&&(Fn(S,""),a.flags&=-33);var T=Uf(e);Ql(e,T,S);break;case 3:case 4:var P=a.stateNode.containerInfo,Q=Uf(e);Nf(e,Q,P);break;default:throw Error(r(161))}}catch(ft){Ge(e,e.return,ft)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function nv(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;nv(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ra(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Qg(e,n.alternate,n),n=n.sibling}function pr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Aa(4,n,n.return),pr(n);break;case 1:Di(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&qg(n,n.return,a),pr(n);break;case 27:Uo(n.stateNode);case 26:case 5:Di(n,n.return),pr(n);break;case 22:n.memoizedState===null&&pr(n);break;case 30:pr(n);break;default:pr(n)}e=e.sibling}}function Ca(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=e,d=n,S=d.flags;switch(d.tag){case 0:case 11:case 15:Ca(c,d,a),So(4,d);break;case 1:if(Ca(c,d,a),o=d,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(Q){Ge(o,o.return,Q)}if(o=d,c=o.updateQueue,c!==null){var T=o.stateNode;try{var P=c.shared.hiddenCallbacks;if(P!==null)for(c.shared.hiddenCallbacks=null,c=0;c<P.length;c++)Um(P[c],T)}catch(Q){Ge(o,o.return,Q)}}a&&S&64&&Wg(d),Mo(d,d.return);break;case 27:Zg(d);case 26:case 5:Ca(c,d,a),a&&o===null&&S&4&&Yg(d),Mo(d,d.return);break;case 12:Ca(c,d,a);break;case 13:Ca(c,d,a),a&&S&4&&tv(c,d);break;case 22:d.memoizedState===null&&Ca(c,d,a),Mo(d,d.return);break;case 30:break;default:Ca(c,d,a)}n=n.sibling}}function Pf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&so(a))}function If(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&so(e))}function Ui(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)iv(e,n,a,o),n=n.sibling}function iv(e,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ui(e,n,a,o),c&2048&&So(9,n);break;case 1:Ui(e,n,a,o);break;case 3:Ui(e,n,a,o),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&so(e)));break;case 12:if(c&2048){Ui(e,n,a,o),e=n.stateNode;try{var d=n.memoizedProps,S=d.id,T=d.onPostCommit;typeof T=="function"&&T(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(P){Ge(n,n.return,P)}}else Ui(e,n,a,o);break;case 13:Ui(e,n,a,o);break;case 23:break;case 22:d=n.stateNode,S=n.alternate,n.memoizedState!==null?d._visibility&2?Ui(e,n,a,o):Eo(e,n):d._visibility&2?Ui(e,n,a,o):(d._visibility|=2,is(e,n,a,o,(n.subtreeFlags&10256)!==0)),c&2048&&Pf(S,n);break;case 24:Ui(e,n,a,o),c&2048&&If(n.alternate,n);break;default:Ui(e,n,a,o)}}function is(e,n,a,o,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var d=e,S=n,T=a,P=o,Q=S.flags;switch(S.tag){case 0:case 11:case 15:is(d,S,T,P,c),So(8,S);break;case 23:break;case 22:var ft=S.stateNode;S.memoizedState!==null?ft._visibility&2?is(d,S,T,P,c):Eo(d,S):(ft._visibility|=2,is(d,S,T,P,c)),c&&Q&2048&&Pf(S.alternate,S);break;case 24:is(d,S,T,P,c),c&&Q&2048&&If(S.alternate,S);break;default:is(d,S,T,P,c)}n=n.sibling}}function Eo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,c=o.flags;switch(o.tag){case 22:Eo(a,o),c&2048&&Pf(o.alternate,o);break;case 24:Eo(a,o),c&2048&&If(o.alternate,o);break;default:Eo(a,o)}n=n.sibling}}var bo=8192;function as(e){if(e.subtreeFlags&bo)for(e=e.child;e!==null;)av(e),e=e.sibling}function av(e){switch(e.tag){case 26:as(e),e.flags&bo&&e.memoizedState!==null&&EM(gi,e.memoizedState,e.memoizedProps);break;case 5:as(e);break;case 3:case 4:var n=gi;gi=cu(e.stateNode.containerInfo),as(e),gi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=bo,bo=16777216,as(e),bo=n):as(e));break;default:as(e)}}function rv(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function To(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,ov(o,e)}rv(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)sv(e),e=e.sibling}function sv(e){switch(e.tag){case 0:case 11:case 15:To(e),e.flags&2048&&Aa(9,e,e.return);break;case 3:To(e);break;case 12:To(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Jl(e)):To(e);break;default:To(e)}}function Jl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,ov(o,e)}rv(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Aa(8,n,n.return),Jl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Jl(n));break;default:Jl(n)}e=e.sibling}}function ov(e,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:Aa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:so(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,xn=o;else t:for(a=e;xn!==null;){o=xn;var c=o.sibling,d=o.return;if(Jg(o),o===a){xn=null;break t}if(c!==null){c.return=d,xn=c;break t}xn=d}}}var BS={getCacheForType:function(e){var n=wn(hn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},HS=typeof WeakMap=="function"?WeakMap:Map,De=0,ke=null,xe=null,Ee=0,Ue=0,Kn=null,wa=!1,rs=!1,Ff=!1,Ki=0,tn=0,Da=0,mr=0,zf=0,oi=0,ss=0,Ao=null,Gn=null,Bf=!1,Hf=0,$l=1/0,tu=null,Ua=null,bn=0,Na=null,os=null,ls=0,Gf=0,Vf=null,lv=null,Ro=0,kf=null;function Qn(){if((De&2)!==0&&Ee!==0)return Ee&-Ee;if(F.T!==null){var e=Zr;return e!==0?e:Kf()}return be()}function uv(){oi===0&&(oi=(Ee&536870912)===0||Ce?k():536870912);var e=si.current;return e!==null&&(e.flags|=32),oi}function Jn(e,n,a){(e===ke&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)&&(us(e,0),La(e,Ee,oi,!1)),Ft(e,a),((De&2)===0||e!==ke)&&(e===ke&&((De&2)===0&&(mr|=a),tn===4&&La(e,Ee,oi,!1)),Ni(e))}function cv(e,n,a){if((De&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||wt(e,n),c=o?kS(e,n):qf(e,n,!0),d=o;do{if(c===0){rs&&!o&&La(e,n,0,!1);break}else{if(a=e.current.alternate,d&&!GS(a)){c=qf(e,n,!1),d=!1;continue}if(c===2){if(d=n,e.errorRecoveryDisabledLanes&d)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var T=e;c=Ao;var P=T.current.memoizedState.isDehydrated;if(P&&(us(T,S).flags|=256),S=qf(T,S,!1),S!==2){if(Ff&&!P){T.errorRecoveryDisabledLanes|=d,mr|=d,c=4;break t}d=Gn,Gn=c,d!==null&&(Gn===null?Gn=d:Gn.push.apply(Gn,d))}c=S}if(d=!1,c!==2)continue}}if(c===1){us(e,0),La(e,n,0,!0);break}t:{switch(o=e,d=c,d){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:La(o,n,oi,!wa);break t;case 2:Gn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Hf+300-Pt(),10<c)){if(La(o,n,oi,!wa),kt(o,0,!0)!==0)break t;o.timeoutHandle=Bv(fv.bind(null,o,a,Gn,tu,Bf,n,oi,mr,ss,wa,d,2,-0,0),c);break t}fv(o,a,Gn,tu,Bf,n,oi,mr,ss,wa,d,0,-0,0)}}break}while(!0);Ni(e)}function fv(e,n,a,o,c,d,S,T,P,Q,ft,pt,et,it){if(e.timeoutHandle=-1,pt=n.subtreeFlags,(pt&8192||(pt&16785408)===16785408)&&(Oo={stylesheets:null,count:0,unsuspend:MM},av(n),pt=bM(),pt!==null)){e.cancelPendingCommit=pt(_v.bind(null,e,n,d,a,o,c,S,T,P,ft,1,et,it)),La(e,d,S,!Q);return}_v(e,n,d,a,o,c,S,T,P)}function GS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],d=c.getSnapshot;c=c.value;try{if(!qn(d(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function La(e,n,a,o){n&=~zf,n&=~mr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var d=31-It(c),S=1<<d;o[d]=-1,c&=~S}a!==0&&gt(e,a,n)}function eu(){return(De&6)===0?(Co(0),!1):!0}function Xf(){if(xe!==null){if(Ue===0)var e=xe.return;else e=xe,Vi=ur=null,of(e),es=null,_o=0,e=xe;for(;e!==null;)Xg(e.alternate,e),e=e.return;xe=null}}function us(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,rM(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Xf(),ke=e,xe=a=Bi(e.current,null),Ee=n,Ue=0,Kn=null,wa=!1,rs=wt(e,n),Ff=!1,ss=oi=zf=mr=Da=tn=0,Gn=Ao=null,Bf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var c=31-It(o),d=1<<c;n|=e[c],o&=~d}return Ki=n,El(),a}function dv(e,n){ge=null,F.H=Vl,n===lo||n===Nl?(n=wm(),Ue=3):n===Am?(n=wm(),Ue=4):Ue=n===Dg?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Kn=n,xe===null&&(tn=1,Yl(e,ni(n,e.current)))}function hv(){var e=F.H;return F.H=Vl,e===null?Vl:e}function pv(){var e=F.A;return F.A=BS,e}function Wf(){tn=4,wa||(Ee&4194048)!==Ee&&si.current!==null||(rs=!0),(Da&134217727)===0&&(mr&134217727)===0||ke===null||La(ke,Ee,oi,!1)}function qf(e,n,a){var o=De;De|=2;var c=hv(),d=pv();(ke!==e||Ee!==n)&&(tu=null,us(e,n)),n=!1;var S=tn;t:do try{if(Ue!==0&&xe!==null){var T=xe,P=Kn;switch(Ue){case 8:Xf(),S=6;break t;case 3:case 2:case 9:case 6:si.current===null&&(n=!0);var Q=Ue;if(Ue=0,Kn=null,cs(e,T,P,Q),a&&rs){S=0;break t}break;default:Q=Ue,Ue=0,Kn=null,cs(e,T,P,Q)}}VS(),S=tn;break}catch(ft){dv(e,ft)}while(!0);return n&&e.shellSuspendCounter++,Vi=ur=null,De=o,F.H=c,F.A=d,xe===null&&(ke=null,Ee=0,El()),S}function VS(){for(;xe!==null;)mv(xe)}function kS(e,n){var a=De;De|=2;var o=hv(),c=pv();ke!==e||Ee!==n?(tu=null,$l=Pt()+500,us(e,n)):rs=wt(e,n);t:do try{if(Ue!==0&&xe!==null){n=xe;var d=Kn;e:switch(Ue){case 1:Ue=0,Kn=null,cs(e,n,d,1);break;case 2:case 9:if(Rm(d)){Ue=0,Kn=null,gv(n);break}n=function(){Ue!==2&&Ue!==9||ke!==e||(Ue=7),Ni(e)},d.then(n,n);break t;case 3:Ue=7;break t;case 4:Ue=5;break t;case 7:Rm(d)?(Ue=0,Kn=null,gv(n)):(Ue=0,Kn=null,cs(e,n,d,7));break;case 5:var S=null;switch(xe.tag){case 26:S=xe.memoizedState;case 5:case 27:var T=xe;if(!S||Qv(S)){Ue=0,Kn=null;var P=T.sibling;if(P!==null)xe=P;else{var Q=T.return;Q!==null?(xe=Q,nu(Q)):xe=null}break e}}Ue=0,Kn=null,cs(e,n,d,5);break;case 6:Ue=0,Kn=null,cs(e,n,d,6);break;case 8:Xf(),tn=6;break t;default:throw Error(r(462))}}XS();break}catch(ft){dv(e,ft)}while(!0);return Vi=ur=null,F.H=o,F.A=c,De=a,xe!==null?0:(ke=null,Ee=0,El(),tn)}function XS(){for(;xe!==null&&!se();)mv(xe)}function mv(e){var n=Vg(e.alternate,e,Ki);e.memoizedProps=e.pendingProps,n===null?nu(e):xe=n}function gv(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Ig(a,n,n.pendingProps,n.type,void 0,Ee);break;case 11:n=Ig(a,n,n.pendingProps,n.type.render,n.ref,Ee);break;case 5:of(n);default:Xg(a,n),n=xe=vm(n,Ki),n=Vg(a,n,Ki)}e.memoizedProps=e.pendingProps,n===null?nu(e):xe=n}function cs(e,n,a,o){Vi=ur=null,of(n),es=null,_o=0;var c=n.return;try{if(LS(e,c,n,a,Ee)){tn=1,Yl(e,ni(a,e.current)),xe=null;return}}catch(d){if(c!==null)throw xe=c,d;tn=1,Yl(e,ni(a,e.current)),xe=null;return}n.flags&32768?(Ce||o===1?e=!0:rs||(Ee&536870912)!==0?e=!1:(wa=e=!0,(o===2||o===9||o===3||o===6)&&(o=si.current,o!==null&&o.tag===13&&(o.flags|=16384))),vv(n,e)):nu(n)}function nu(e){var n=e;do{if((n.flags&32768)!==0){vv(n,wa);return}e=n.return;var a=PS(n.alternate,n,Ki);if(a!==null){xe=a;return}if(n=n.sibling,n!==null){xe=n;return}xe=n=e}while(n!==null);tn===0&&(tn=5)}function vv(e,n){do{var a=IS(e.alternate,e);if(a!==null){a.flags&=32767,xe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){xe=e;return}xe=e=a}while(e!==null);tn=6,xe=null}function _v(e,n,a,o,c,d,S,T,P){e.cancelPendingCommit=null;do iu();while(bn!==0);if((De&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(d=n.lanes|n.childLanes,d|=Pc,Mt(e,a,d,S,T,P),e===ke&&(xe=ke=null,Ee=0),os=n,Na=e,ls=a,Gf=d,Vf=c,lv=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,jS(je,function(){return Ev(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=F.T,F.T=null,c=j.p,j.p=2,S=De,De|=4;try{FS(e,n,a)}finally{De=S,j.p=c,F.T=o}}bn=1,xv(),yv(),Sv()}}function xv(){if(bn===1){bn=0;var e=Na,n=os,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var o=j.p;j.p=2;var c=De;De|=4;try{ev(n,e);var d=ad,S=om(e.containerInfo),T=d.focusedElem,P=d.selectionRange;if(S!==T&&T&&T.ownerDocument&&sm(T.ownerDocument.documentElement,T)){if(P!==null&&Dc(T)){var Q=P.start,ft=P.end;if(ft===void 0&&(ft=Q),"selectionStart"in T)T.selectionStart=Q,T.selectionEnd=Math.min(ft,T.value.length);else{var pt=T.ownerDocument||document,et=pt&&pt.defaultView||window;if(et.getSelection){var it=et.getSelection(),ae=T.textContent.length,te=Math.min(P.start,ae),Fe=P.end===void 0?te:Math.min(P.end,ae);!it.extend&&te>Fe&&(S=Fe,Fe=te,te=S);var W=rm(T,te),G=rm(T,Fe);if(W&&G&&(it.rangeCount!==1||it.anchorNode!==W.node||it.anchorOffset!==W.offset||it.focusNode!==G.node||it.focusOffset!==G.offset)){var K=pt.createRange();K.setStart(W.node,W.offset),it.removeAllRanges(),te>Fe?(it.addRange(K),it.extend(G.node,G.offset)):(K.setEnd(G.node,G.offset),it.addRange(K))}}}}for(pt=[],it=T;it=it.parentNode;)it.nodeType===1&&pt.push({element:it,left:it.scrollLeft,top:it.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<pt.length;T++){var dt=pt[T];dt.element.scrollLeft=dt.left,dt.element.scrollTop=dt.top}}mu=!!id,ad=id=null}finally{De=c,j.p=o,F.T=a}}e.current=n,bn=2}}function yv(){if(bn===2){bn=0;var e=Na,n=os,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var o=j.p;j.p=2;var c=De;De|=4;try{Qg(e,n.alternate,n)}finally{De=c,j.p=o,F.T=a}}bn=3}}function Sv(){if(bn===4||bn===3){bn=0,ie();var e=Na,n=os,a=ls,o=lv;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?bn=5:(bn=0,os=Na=null,Mv(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Ua=null),we(a),n=n.stateNode,ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(ct,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=F.T,c=j.p,j.p=2,F.T=null;try{for(var d=e.onRecoverableError,S=0;S<o.length;S++){var T=o[S];d(T.value,{componentStack:T.stack})}}finally{F.T=n,j.p=c}}(ls&3)!==0&&iu(),Ni(e),c=e.pendingLanes,(a&4194090)!==0&&(c&42)!==0?e===kf?Ro++:(Ro=0,kf=e):Ro=0,Co(0)}}function Mv(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,so(n)))}function iu(e){return xv(),yv(),Sv(),Ev()}function Ev(){if(bn!==5)return!1;var e=Na,n=Gf;Gf=0;var a=we(ls),o=F.T,c=j.p;try{j.p=32>a?32:a,F.T=null,a=Vf,Vf=null;var d=Na,S=ls;if(bn=0,os=Na=null,ls=0,(De&6)!==0)throw Error(r(331));var T=De;if(De|=4,sv(d.current),iv(d,d.current,S,a),De=T,Co(0,!1),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(ct,d)}catch{}return!0}finally{j.p=c,F.T=o,Mv(e,n)}}function bv(e,n,a){n=ni(a,n),n=Sf(e.stateNode,n,2),e=Ma(e,n,2),e!==null&&(Ft(e,2),Ni(e))}function Ge(e,n,a){if(e.tag===3)bv(e,e,a);else for(;n!==null;){if(n.tag===3){bv(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ua===null||!Ua.has(o))){e=ni(a,e),a=Cg(2),o=Ma(n,a,2),o!==null&&(wg(a,o,n,e),Ft(o,2),Ni(o));break}}n=n.return}}function Yf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new HS;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(Ff=!0,c.add(a),e=WS.bind(null,e,n,a),n.then(e,e))}function WS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ke===e&&(Ee&a)===a&&(tn===4||tn===3&&(Ee&62914560)===Ee&&300>Pt()-Hf?(De&2)===0&&us(e,0):zf|=a,ss===Ee&&(ss=0)),Ni(e)}function Tv(e,n){n===0&&(n=bt()),e=Wr(e,n),e!==null&&(Ft(e,n),Ni(e))}function qS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Tv(e,a)}function YS(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),Tv(e,a)}function jS(e,n){return z(e,n)}var au=null,fs=null,jf=!1,ru=!1,Zf=!1,gr=0;function Ni(e){e!==fs&&e.next===null&&(fs===null?au=fs=e:fs=fs.next=e),ru=!0,jf||(jf=!0,KS())}function Co(e,n){if(!Zf&&ru){Zf=!0;do for(var a=!1,o=au;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var d=0;else{var S=o.suspendedLanes,T=o.pingedLanes;d=(1<<31-It(42|e)+1)-1,d&=c&~(S&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,wv(o,d))}else d=Ee,d=kt(o,o===ke?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||wt(o,d)||(a=!0,wv(o,d));o=o.next}while(a);Zf=!1}}function ZS(){Av()}function Av(){ru=jf=!1;var e=0;gr!==0&&(aM()&&(e=gr),gr=0);for(var n=Pt(),a=null,o=au;o!==null;){var c=o.next,d=Rv(o,n);d===0?(o.next=null,a===null?au=c:a.next=c,c===null&&(fs=a)):(a=o,(e!==0||(d&3)!==0)&&(ru=!0)),o=c}Co(e)}function Rv(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var S=31-It(d),T=1<<S,P=c[S];P===-1?((T&a)===0||(T&o)!==0)&&(c[S]=le(T,n)):P<=n&&(e.expiredLanes|=T),d&=~T}if(n=ke,a=Ee,a=kt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Le(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||wt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Le(o),we(a)){case 2:case 8:a=oe;break;case 32:a=je;break;case 268435456:a=N;break;default:a=je}return o=Cv.bind(null,e),a=z(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Le(o),e.callbackPriority=2,e.callbackNode=null,2}function Cv(e,n){if(bn!==0&&bn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(iu()&&e.callbackNode!==a)return null;var o=Ee;return o=kt(e,e===ke?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(cv(e,o,n),Rv(e,Pt()),e.callbackNode!=null&&e.callbackNode===a?Cv.bind(null,e):null)}function wv(e,n){if(iu())return null;cv(e,n,!0)}function KS(){sM(function(){(De&6)!==0?z(Vt,ZS):Av()})}function Kf(){return gr===0&&(gr=k()),gr}function Dv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:gl(""+e)}function Uv(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function QS(e,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var d=Dv((c[Qe]||null).action),S=o.submitter;S&&(n=(n=S[Qe]||null)?Dv(n.formAction):S.getAttribute("formAction"),n!==null&&(d=n,S=null));var T=new yl("action","action",null,o,c);e.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(gr!==0){var P=S?Uv(c,S):new FormData(c);gf(a,{pending:!0,data:P,method:c.method,action:d},null,P)}}else typeof d=="function"&&(T.preventDefault(),P=S?Uv(c,S):new FormData(c),gf(a,{pending:!0,data:P,method:c.method,action:d},d,P))},currentTarget:c}]})}}for(var Qf=0;Qf<Oc.length;Qf++){var Jf=Oc[Qf],JS=Jf.toLowerCase(),$S=Jf[0].toUpperCase()+Jf.slice(1);mi(JS,"on"+$S)}mi(cm,"onAnimationEnd"),mi(fm,"onAnimationIteration"),mi(dm,"onAnimationStart"),mi("dblclick","onDoubleClick"),mi("focusin","onFocus"),mi("focusout","onBlur"),mi(gS,"onTransitionRun"),mi(vS,"onTransitionStart"),mi(_S,"onTransitionCancel"),mi(hm,"onTransitionEnd"),X("onMouseEnter",["mouseout","mouseover"]),X("onMouseLeave",["mouseout","mouseover"]),X("onPointerEnter",["pointerout","pointerover"]),X("onPointerLeave",["pointerout","pointerover"]),A("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),A("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),A("onBeforeInput",["compositionend","keypress","textInput","paste"]),A("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),A("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),A("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wo));function Nv(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],c=o.event;o=o.listeners;t:{var d=void 0;if(n)for(var S=o.length-1;0<=S;S--){var T=o[S],P=T.instance,Q=T.currentTarget;if(T=T.listener,P!==d&&c.isPropagationStopped())break t;d=T,c.currentTarget=Q;try{d(c)}catch(ft){ql(ft)}c.currentTarget=null,d=P}else for(S=0;S<o.length;S++){if(T=o[S],P=T.instance,Q=T.currentTarget,T=T.listener,P!==d&&c.isPropagationStopped())break t;d=T,c.currentTarget=Q;try{d(c)}catch(ft){ql(ft)}c.currentTarget=null,d=P}}}}function ye(e,n){var a=n[Pr];a===void 0&&(a=n[Pr]=new Set);var o=e+"__bubble";a.has(o)||(Lv(n,e,2,!1),a.add(o))}function $f(e,n,a){var o=0;n&&(o|=4),Lv(a,e,o,n)}var su="_reactListening"+Math.random().toString(36).slice(2);function td(e){if(!e[su]){e[su]=!0,pl.forEach(function(a){a!=="selectionchange"&&(tM.has(a)||$f(a,!1,e),$f(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[su]||(n[su]=!0,$f("selectionchange",!1,n))}}function Lv(e,n,a,o){switch(i_(n)){case 2:var c=RM;break;case 8:c=CM;break;default:c=pd}a=c.bind(null,n,a,e),c=void 0,!Sc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function ed(e,n,a,o,c){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var T=o.stateNode.containerInfo;if(T===c)break;if(S===4)for(S=o.return;S!==null;){var P=S.tag;if((P===3||P===4)&&S.stateNode.containerInfo===c)return;S=S.return}for(;T!==null;){if(S=Fi(T),S===null)return;if(P=S.tag,P===5||P===6||P===26||P===27){o=d=S;continue t}T=T.parentNode}}o=o.return}Hp(function(){var Q=d,ft=xc(a),pt=[];t:{var et=pm.get(e);if(et!==void 0){var it=yl,ae=e;switch(e){case"keypress":if(_l(a)===0)break t;case"keydown":case"keyup":it=jy;break;case"focusin":ae="focus",it=Tc;break;case"focusout":ae="blur",it=Tc;break;case"beforeblur":case"afterblur":it=Tc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":it=kp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":it=Iy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":it=Qy;break;case cm:case fm:case dm:it=By;break;case hm:it=$y;break;case"scroll":case"scrollend":it=Oy;break;case"wheel":it=eS;break;case"copy":case"cut":case"paste":it=Gy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":it=Wp;break;case"toggle":case"beforetoggle":it=iS}var te=(n&4)!==0,Fe=!te&&(e==="scroll"||e==="scrollend"),W=te?et!==null?et+"Capture":null:et;te=[];for(var G=Q,K;G!==null;){var dt=G;if(K=dt.stateNode,dt=dt.tag,dt!==5&&dt!==26&&dt!==27||K===null||W===null||(dt=Ys(G,W),dt!=null&&te.push(Do(G,dt,K))),Fe)break;G=G.return}0<te.length&&(et=new it(et,ae,null,a,ft),pt.push({event:et,listeners:te}))}}if((n&7)===0){t:{if(et=e==="mouseover"||e==="pointerover",it=e==="mouseout"||e==="pointerout",et&&a!==_c&&(ae=a.relatedTarget||a.fromElement)&&(Fi(ae)||ae[Ai]))break t;if((it||et)&&(et=ft.window===ft?ft:(et=ft.ownerDocument)?et.defaultView||et.parentWindow:window,it?(ae=a.relatedTarget||a.toElement,it=Q,ae=ae?Fi(ae):null,ae!==null&&(Fe=u(ae),te=ae.tag,ae!==Fe||te!==5&&te!==27&&te!==6)&&(ae=null)):(it=null,ae=Q),it!==ae)){if(te=kp,dt="onMouseLeave",W="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&(te=Wp,dt="onPointerLeave",W="onPointerEnter",G="pointer"),Fe=it==null?et:tr(it),K=ae==null?et:tr(ae),et=new te(dt,G+"leave",it,a,ft),et.target=Fe,et.relatedTarget=K,dt=null,Fi(ft)===Q&&(te=new te(W,G+"enter",ae,a,ft),te.target=K,te.relatedTarget=Fe,dt=te),Fe=dt,it&&ae)e:{for(te=it,W=ae,G=0,K=te;K;K=ds(K))G++;for(K=0,dt=W;dt;dt=ds(dt))K++;for(;0<G-K;)te=ds(te),G--;for(;0<K-G;)W=ds(W),K--;for(;G--;){if(te===W||W!==null&&te===W.alternate)break e;te=ds(te),W=ds(W)}te=null}else te=null;it!==null&&Ov(pt,et,it,te,!1),ae!==null&&Fe!==null&&Ov(pt,Fe,ae,te,!0)}}t:{if(et=Q?tr(Q):window,it=et.nodeName&&et.nodeName.toLowerCase(),it==="select"||it==="input"&&et.type==="file")var Bt=$p;else if(Qp(et))if(tm)Bt=hS;else{Bt=fS;var ve=cS}else it=et.nodeName,!it||it.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?Q&&vc(Q.elementType)&&(Bt=$p):Bt=dS;if(Bt&&(Bt=Bt(e,Q))){Jp(pt,Bt,a,ft);break t}ve&&ve(e,et,Q),e==="focusout"&&Q&&et.type==="number"&&Q.memoizedProps.value!=null&&Cn(et,"number",et.value)}switch(ve=Q?tr(Q):window,e){case"focusin":(Qp(ve)||ve.contentEditable==="true")&&(Vr=ve,Uc=Q,eo=null);break;case"focusout":eo=Uc=Vr=null;break;case"mousedown":Nc=!0;break;case"contextmenu":case"mouseup":case"dragend":Nc=!1,lm(pt,a,ft);break;case"selectionchange":if(mS)break;case"keydown":case"keyup":lm(pt,a,ft)}var jt;if(Rc)t:{switch(e){case"compositionstart":var ne="onCompositionStart";break t;case"compositionend":ne="onCompositionEnd";break t;case"compositionupdate":ne="onCompositionUpdate";break t}ne=void 0}else Gr?Zp(e,a)&&(ne="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ne="onCompositionStart");ne&&(qp&&a.locale!=="ko"&&(Gr||ne!=="onCompositionStart"?ne==="onCompositionEnd"&&Gr&&(jt=Gp()):(_a=ft,Mc="value"in _a?_a.value:_a.textContent,Gr=!0)),ve=ou(Q,ne),0<ve.length&&(ne=new Xp(ne,e,null,a,ft),pt.push({event:ne,listeners:ve}),jt?ne.data=jt:(jt=Kp(a),jt!==null&&(ne.data=jt)))),(jt=rS?sS(e,a):oS(e,a))&&(ne=ou(Q,"onBeforeInput"),0<ne.length&&(ve=new Xp("onBeforeInput","beforeinput",null,a,ft),pt.push({event:ve,listeners:ne}),ve.data=jt)),QS(pt,e,Q,a,ft)}Nv(pt,n)})}function Do(e,n,a){return{instance:e,listener:n,currentTarget:a}}function ou(e,n){for(var a=n+"Capture",o=[];e!==null;){var c=e,d=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||d===null||(c=Ys(e,a),c!=null&&o.unshift(Do(e,c,d)),c=Ys(e,n),c!=null&&o.push(Do(e,c,d))),e.tag===3)return o;e=e.return}return[]}function ds(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ov(e,n,a,o,c){for(var d=n._reactName,S=[];a!==null&&a!==o;){var T=a,P=T.alternate,Q=T.stateNode;if(T=T.tag,P!==null&&P===o)break;T!==5&&T!==26&&T!==27||Q===null||(P=Q,c?(Q=Ys(a,d),Q!=null&&S.unshift(Do(a,Q,P))):c||(Q=Ys(a,d),Q!=null&&S.push(Do(a,Q,P)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var eM=/\r\n?/g,nM=/\u0000|\uFFFD/g;function Pv(e){return(typeof e=="string"?e:""+e).replace(eM,`
`).replace(nM,"")}function Iv(e,n){return n=Pv(n),Pv(e)===n}function lu(){}function Ie(e,n,a,o,c,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Fn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Fn(e,""+o);break;case"className":zt(e,"class",o);break;case"tabIndex":zt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":zt(e,a,o);break;case"style":zp(e,o,d);break;case"data":if(n!=="object"){zt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=gl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Ie(e,n,"name",c.name,c,null),Ie(e,n,"formEncType",c.formEncType,c,null),Ie(e,n,"formMethod",c.formMethod,c,null),Ie(e,n,"formTarget",c.formTarget,c,null)):(Ie(e,n,"encType",c.encType,c,null),Ie(e,n,"method",c.method,c,null),Ie(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=gl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=lu);break;case"onScroll":o!=null&&ye("scroll",e);break;case"onScrollEnd":o!=null&&ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=gl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ye("beforetoggle",e),ye("toggle",e),Dt(e,"popover",o);break;case"xlinkActuate":Lt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Lt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Lt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Lt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Lt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Lt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Lt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Lt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Lt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Dt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ny.get(a)||a,Dt(e,a,o))}}function nd(e,n,a,o,c,d){switch(a){case"style":zp(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Fn(e,o):(typeof o=="number"||typeof o=="bigint")&&Fn(e,""+o);break;case"onScroll":o!=null&&ye("scroll",e);break;case"onScrollEnd":o!=null&&ye("scrollend",e);break;case"onClick":o!=null&&(e.onclick=lu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ml.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),d=e[Qe]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(n,d,c),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,c);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Dt(e,a,o)}}}function Tn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",e),ye("load",e);var o=!1,c=!1,d;for(d in a)if(a.hasOwnProperty(d)){var S=a[d];if(S!=null)switch(d){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ie(e,n,d,S,a,null)}}c&&Ie(e,n,"srcSet",a.srcSet,a,null),o&&Ie(e,n,"src",a.src,a,null);return;case"input":ye("invalid",e);var T=d=S=c=null,P=null,Q=null;for(o in a)if(a.hasOwnProperty(o)){var ft=a[o];if(ft!=null)switch(o){case"name":c=ft;break;case"type":S=ft;break;case"checked":P=ft;break;case"defaultChecked":Q=ft;break;case"value":d=ft;break;case"defaultValue":T=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(r(137,n));break;default:Ie(e,n,o,ft,a,null)}}On(e,d,T,P,Q,S,c,!1),_e(e);return;case"select":ye("invalid",e),o=S=d=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":d=T;break;case"defaultValue":S=T;break;case"multiple":o=T;default:Ie(e,n,c,T,a,null)}n=d,a=S,e.multiple=!!o,n!=null?Je(e,!!o,n,!1):a!=null&&Je(e,!!o,a,!0);return;case"textarea":ye("invalid",e),d=c=o=null;for(S in a)if(a.hasOwnProperty(S)&&(T=a[S],T!=null))switch(S){case"value":o=T;break;case"defaultValue":c=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Ie(e,n,S,T,a,null)}zr(e,o,c,d),_e(e);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(o=a[P],o!=null))switch(P){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ie(e,n,P,o,a,null)}return;case"dialog":ye("beforetoggle",e),ye("toggle",e),ye("cancel",e),ye("close",e);break;case"iframe":case"object":ye("load",e);break;case"video":case"audio":for(o=0;o<wo.length;o++)ye(wo[o],e);break;case"image":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"embed":case"source":case"link":ye("error",e),ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(o=a[Q],o!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ie(e,n,Q,o,a,null)}return;default:if(vc(n)){for(ft in a)a.hasOwnProperty(ft)&&(o=a[ft],o!==void 0&&nd(e,n,ft,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&Ie(e,n,T,o,a,null))}function iM(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,d=null,S=null,T=null,P=null,Q=null,ft=null;for(it in a){var pt=a[it];if(a.hasOwnProperty(it)&&pt!=null)switch(it){case"checked":break;case"value":break;case"defaultValue":P=pt;default:o.hasOwnProperty(it)||Ie(e,n,it,null,o,pt)}}for(var et in o){var it=o[et];if(pt=a[et],o.hasOwnProperty(et)&&(it!=null||pt!=null))switch(et){case"type":d=it;break;case"name":c=it;break;case"checked":Q=it;break;case"defaultChecked":ft=it;break;case"value":S=it;break;case"defaultValue":T=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:it!==pt&&Ie(e,n,et,it,o,pt)}}He(e,S,T,P,Q,ft,d,c);return;case"select":it=S=T=et=null;for(d in a)if(P=a[d],a.hasOwnProperty(d)&&P!=null)switch(d){case"value":break;case"multiple":it=P;default:o.hasOwnProperty(d)||Ie(e,n,d,null,o,P)}for(c in o)if(d=o[c],P=a[c],o.hasOwnProperty(c)&&(d!=null||P!=null))switch(c){case"value":et=d;break;case"defaultValue":T=d;break;case"multiple":S=d;default:d!==P&&Ie(e,n,c,d,o,P)}n=T,a=S,o=it,et!=null?Je(e,!!a,et,!1):!!o!=!!a&&(n!=null?Je(e,!!a,n,!0):Je(e,!!a,a?[]:"",!1));return;case"textarea":it=et=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ie(e,n,T,null,o,c)}for(S in o)if(c=o[S],d=a[S],o.hasOwnProperty(S)&&(c!=null||d!=null))switch(S){case"value":et=c;break;case"defaultValue":it=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==d&&Ie(e,n,S,c,o,d)}Mn(e,et,it);return;case"option":for(var ae in a)if(et=a[ae],a.hasOwnProperty(ae)&&et!=null&&!o.hasOwnProperty(ae))switch(ae){case"selected":e.selected=!1;break;default:Ie(e,n,ae,null,o,et)}for(P in o)if(et=o[P],it=a[P],o.hasOwnProperty(P)&&et!==it&&(et!=null||it!=null))switch(P){case"selected":e.selected=et&&typeof et!="function"&&typeof et!="symbol";break;default:Ie(e,n,P,et,o,it)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)et=a[te],a.hasOwnProperty(te)&&et!=null&&!o.hasOwnProperty(te)&&Ie(e,n,te,null,o,et);for(Q in o)if(et=o[Q],it=a[Q],o.hasOwnProperty(Q)&&et!==it&&(et!=null||it!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(r(137,n));break;default:Ie(e,n,Q,et,o,it)}return;default:if(vc(n)){for(var Fe in a)et=a[Fe],a.hasOwnProperty(Fe)&&et!==void 0&&!o.hasOwnProperty(Fe)&&nd(e,n,Fe,void 0,o,et);for(ft in o)et=o[ft],it=a[ft],!o.hasOwnProperty(ft)||et===it||et===void 0&&it===void 0||nd(e,n,ft,et,o,it);return}}for(var W in a)et=a[W],a.hasOwnProperty(W)&&et!=null&&!o.hasOwnProperty(W)&&Ie(e,n,W,null,o,et);for(pt in o)et=o[pt],it=a[pt],!o.hasOwnProperty(pt)||et===it||et==null&&it==null||Ie(e,n,pt,et,o,it)}var id=null,ad=null;function uu(e){return e.nodeType===9?e:e.ownerDocument}function Fv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function zv(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function rd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var sd=null;function aM(){var e=window.event;return e&&e.type==="popstate"?e===sd?!1:(sd=e,!0):(sd=null,!1)}var Bv=typeof setTimeout=="function"?setTimeout:void 0,rM=typeof clearTimeout=="function"?clearTimeout:void 0,Hv=typeof Promise=="function"?Promise:void 0,sM=typeof queueMicrotask=="function"?queueMicrotask:typeof Hv<"u"?function(e){return Hv.resolve(null).then(e).catch(oM)}:Bv;function oM(e){setTimeout(function(){throw e})}function Oa(e){return e==="head"}function Gv(e,n){var a=n,o=0,c=0;do{var d=a.nextSibling;if(e.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<o&&8>o){a=o;var S=e.ownerDocument;if(a&1&&Uo(S.documentElement),a&2&&Uo(S.body),a&4)for(a=S.head,Uo(a),S=a.firstChild;S;){var T=S.nextSibling,P=S.nodeName;S[Ri]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=T}}if(c===0){e.removeChild(d),Bo(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:o=a.charCodeAt(0)-48;else o=0;a=d}while(a);Bo(n)}function od(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":od(a),Fr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function lM(e,n,a,o){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ri])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=vi(e.nextSibling),e===null)break}return null}function uM(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=vi(e.nextSibling),e===null))return null;return e}function ld(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function cM(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function vi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var ud=null;function Vv(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function kv(e,n,a){switch(n=uu(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Uo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Fr(e)}var li=new Map,Xv=new Set;function cu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Qi=j.d;j.d={f:fM,r:dM,D:hM,C:pM,L:mM,m:gM,X:_M,S:vM,M:xM};function fM(){var e=Qi.f(),n=eu();return e||n}function dM(e){var n=ga(e);n!==null&&n.tag===5&&n.type==="form"?cg(n):Qi.r(e)}var hs=typeof document>"u"?null:document;function Wv(e,n,a){var o=hs;if(o&&typeof n=="string"&&n){var c=vn(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Xv.has(c)||(Xv.add(c),e={rel:e,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),Tn(n,"link",e),sn(n),o.head.appendChild(n)))}}function hM(e){Qi.D(e),Wv("dns-prefetch",e,null)}function pM(e,n){Qi.C(e,n),Wv("preconnect",e,n)}function mM(e,n,a){Qi.L(e,n,a);var o=hs;if(o&&e&&n){var c='link[rel="preload"][as="'+vn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+vn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+vn(a.imageSizes)+'"]')):c+='[href="'+vn(e)+'"]';var d=c;switch(n){case"style":d=ps(e);break;case"script":d=ms(e)}li.has(d)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),li.set(d,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(No(d))||n==="script"&&o.querySelector(Lo(d))||(n=o.createElement("link"),Tn(n,"link",e),sn(n),o.head.appendChild(n)))}}function gM(e,n){Qi.m(e,n);var a=hs;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+vn(o)+'"][href="'+vn(e)+'"]',d=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=ms(e)}if(!li.has(d)&&(e=g({rel:"modulepreload",href:e},n),li.set(d,e),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Lo(d)))return}o=a.createElement("link"),Tn(o,"link",e),sn(o),a.head.appendChild(o)}}}function vM(e,n,a){Qi.S(e,n,a);var o=hs;if(o&&e){var c=va(o).hoistableStyles,d=ps(e);n=n||"default";var S=c.get(d);if(!S){var T={loading:0,preload:null};if(S=o.querySelector(No(d)))T.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=li.get(d))&&cd(e,a);var P=S=o.createElement("link");sn(P),Tn(P,"link",e),P._p=new Promise(function(Q,ft){P.onload=Q,P.onerror=ft}),P.addEventListener("load",function(){T.loading|=1}),P.addEventListener("error",function(){T.loading|=2}),T.loading|=4,fu(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:T},c.set(d,S)}}}function _M(e,n){Qi.X(e,n);var a=hs;if(a&&e){var o=va(a).hoistableScripts,c=ms(e),d=o.get(c);d||(d=a.querySelector(Lo(c)),d||(e=g({src:e,async:!0},n),(n=li.get(c))&&fd(e,n),d=a.createElement("script"),sn(d),Tn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(c,d))}}function xM(e,n){Qi.M(e,n);var a=hs;if(a&&e){var o=va(a).hoistableScripts,c=ms(e),d=o.get(c);d||(d=a.querySelector(Lo(c)),d||(e=g({src:e,async:!0,type:"module"},n),(n=li.get(c))&&fd(e,n),d=a.createElement("script"),sn(d),Tn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(c,d))}}function qv(e,n,a,o){var c=(c=tt.current)?cu(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ps(a.href),a=va(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ps(a.href);var d=va(c).hoistableStyles,S=d.get(e);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,S),(d=c.querySelector(No(e)))&&!d._p&&(S.instance=d,S.state.loading=5),li.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},li.set(e,a),d||yM(c,e,a,S.state))),n&&o===null)throw Error(r(528,""));return S}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ms(a),a=va(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function ps(e){return'href="'+vn(e)+'"'}function No(e){return'link[rel="stylesheet"]['+e+"]"}function Yv(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function yM(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Tn(n,"link",a),sn(n),e.head.appendChild(n))}function ms(e){return'[src="'+vn(e)+'"]'}function Lo(e){return"script[async]"+e}function jv(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+vn(a.href)+'"]');if(o)return n.instance=o,sn(o),o;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),sn(o),Tn(o,"style",c),fu(o,a.precedence,e),n.instance=o;case"stylesheet":c=ps(a.href);var d=e.querySelector(No(c));if(d)return n.state.loading|=4,n.instance=d,sn(d),d;o=Yv(a),(c=li.get(c))&&cd(o,c),d=(e.ownerDocument||e).createElement("link"),sn(d);var S=d;return S._p=new Promise(function(T,P){S.onload=T,S.onerror=P}),Tn(d,"link",o),n.state.loading|=4,fu(d,a.precedence,e),n.instance=d;case"script":return d=ms(a.src),(c=e.querySelector(Lo(d)))?(n.instance=c,sn(c),c):(o=a,(c=li.get(d))&&(o=g({},a),fd(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),sn(c),Tn(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,fu(o,a.precedence,e));return n.instance}function fu(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,d=c,S=0;S<o.length;S++){var T=o[S];if(T.dataset.precedence===n)d=T;else if(d!==c)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function cd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function fd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var du=null;function Zv(e,n,a){if(du===null){var o=new Map,c=du=new Map;c.set(a,o)}else c=du,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var d=a[c];if(!(d[Ri]||d[dn]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var S=d.getAttribute(n)||"";S=e+S;var T=o.get(S);T?T.push(d):o.set(S,[d])}}return o}function Kv(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function SM(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Qv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Oo=null;function MM(){}function EM(e,n,a){if(Oo===null)throw Error(r(475));var o=Oo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=ps(a.href),d=e.querySelector(No(c));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=hu.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=d,sn(d);return}d=e.ownerDocument||e,a=Yv(a),(c=li.get(c))&&cd(a,c),d=d.createElement("link"),sn(d);var S=d;S._p=new Promise(function(T,P){S.onload=T,S.onerror=P}),Tn(d,"link",a),n.instance=d}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=hu.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function bM(){if(Oo===null)throw Error(r(475));var e=Oo;return e.stylesheets&&e.count===0&&dd(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&dd(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function hu(){if(this.count--,this.count===0){if(this.stylesheets)dd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var pu=null;function dd(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,pu=new Map,n.forEach(TM,e),pu=null,hu.call(e))}function TM(e,n){if(!(n.state.loading&4)){var a=pu.get(e);if(a)var o=a.get(null);else{a=new Map,pu.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<c.length;d++){var S=c[d];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}c=n.instance,S=c.getAttribute("data-precedence"),d=a.get(S)||o,d===o&&a.set(null,c),a.set(S,c),this.count++,o=hu.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),d?d.parentNode.insertBefore(c,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Po={$$typeof:O,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function AM(e,n,a,o,c,d,S,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ct(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ct(0),this.hiddenUpdates=Ct(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=d,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function Jv(e,n,a,o,c,d,S,T,P,Q,ft,pt){return e=new AM(e,n,a,S,T,P,Q,pt),n=1,d===!0&&(n|=24),d=Yn(3,null,null,n),e.current=d,d.stateNode=e,n=qc(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Kc(d),e}function $v(e){return e?(e=qr,e):qr}function t_(e,n,a,o,c,d){c=$v(c),o.context===null?o.context=c:o.pendingContext=c,o=Sa(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Ma(e,o,n),a!==null&&(Jn(a,e,n),co(a,e,n))}function e_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function hd(e,n){e_(e,n),(e=e.alternate)&&e_(e,n)}function n_(e){if(e.tag===13){var n=Wr(e,67108864);n!==null&&Jn(n,e,67108864),hd(e,67108864)}}var mu=!0;function RM(e,n,a,o){var c=F.T;F.T=null;var d=j.p;try{j.p=2,pd(e,n,a,o)}finally{j.p=d,F.T=c}}function CM(e,n,a,o){var c=F.T;F.T=null;var d=j.p;try{j.p=8,pd(e,n,a,o)}finally{j.p=d,F.T=c}}function pd(e,n,a,o){if(mu){var c=md(o);if(c===null)ed(e,n,o,gu,a),a_(e,o);else if(DM(c,e,n,a,o))o.stopPropagation();else if(a_(e,o),n&4&&-1<wM.indexOf(e)){for(;c!==null;){var d=ga(c);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var S=Zt(d.pendingLanes);if(S!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;S;){var P=1<<31-It(S);T.entanglements[1]|=P,S&=~P}Ni(d),(De&6)===0&&($l=Pt()+500,Co(0))}}break;case 13:T=Wr(d,2),T!==null&&Jn(T,d,2),eu(),hd(d,2)}if(d=md(o),d===null&&ed(e,n,o,gu,a),d===c)break;c=d}c!==null&&o.stopPropagation()}else ed(e,n,o,null,a)}}function md(e){return e=xc(e),gd(e)}var gu=null;function gd(e){if(gu=null,e=Fi(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return gu=e,null}function i_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ve()){case Vt:return 2;case oe:return 8;case je:case Ze:return 32;case N:return 268435456;default:return 32}default:return 32}}var vd=!1,Pa=null,Ia=null,Fa=null,Io=new Map,Fo=new Map,za=[],wM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function a_(e,n){switch(e){case"focusin":case"focusout":Pa=null;break;case"dragenter":case"dragleave":Ia=null;break;case"mouseover":case"mouseout":Fa=null;break;case"pointerover":case"pointerout":Io.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(n.pointerId)}}function zo(e,n,a,o,c,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[c]},n!==null&&(n=ga(n),n!==null&&n_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function DM(e,n,a,o,c){switch(n){case"focusin":return Pa=zo(Pa,e,n,a,o,c),!0;case"dragenter":return Ia=zo(Ia,e,n,a,o,c),!0;case"mouseover":return Fa=zo(Fa,e,n,a,o,c),!0;case"pointerover":var d=c.pointerId;return Io.set(d,zo(Io.get(d)||null,e,n,a,o,c)),!0;case"gotpointercapture":return d=c.pointerId,Fo.set(d,zo(Fo.get(d)||null,e,n,a,o,c)),!0}return!1}function r_(e){var n=Fi(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,hi(e.priority,function(){if(a.tag===13){var o=Qn();o=re(o);var c=Wr(a,o);c!==null&&Jn(c,a,o),hd(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vu(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=md(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);_c=o,a.target.dispatchEvent(o),_c=null}else return n=ga(a),n!==null&&n_(n),e.blockedOn=a,!1;n.shift()}return!0}function s_(e,n,a){vu(e)&&a.delete(n)}function UM(){vd=!1,Pa!==null&&vu(Pa)&&(Pa=null),Ia!==null&&vu(Ia)&&(Ia=null),Fa!==null&&vu(Fa)&&(Fa=null),Io.forEach(s_),Fo.forEach(s_)}function _u(e,n){e.blockedOn===n&&(e.blockedOn=null,vd||(vd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,UM)))}var xu=null;function o_(e){xu!==e&&(xu=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){xu===e&&(xu=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(gd(o||a)===null)continue;break}var d=ga(a);d!==null&&(e.splice(n,3),n-=3,gf(d,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function Bo(e){function n(P){return _u(P,e)}Pa!==null&&_u(Pa,e),Ia!==null&&_u(Ia,e),Fa!==null&&_u(Fa,e),Io.forEach(n),Fo.forEach(n);for(var a=0;a<za.length;a++){var o=za[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<za.length&&(a=za[0],a.blockedOn===null);)r_(a),a.blockedOn===null&&za.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],d=a[o+1],S=c[Qe]||null;if(typeof d=="function")S||o_(a);else if(S){var T=null;if(d&&d.hasAttribute("formAction")){if(c=d,S=d[Qe]||null)T=S.formAction;else if(gd(c)!==null)continue}else T=S.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),o_(a)}}}function _d(e){this._internalRoot=e}yu.prototype.render=_d.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Qn();t_(a,o,e,n,null,null)},yu.prototype.unmount=_d.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;t_(e.current,2,null,e,null,null),eu(),n[Ai]=null}};function yu(e){this._internalRoot=e}yu.prototype.unstable_scheduleHydration=function(e){if(e){var n=be();e={blockedOn:null,target:e,priority:n};for(var a=0;a<za.length&&n!==0&&n<za[a].priority;a++);za.splice(a,0,e),a===0&&r_(e)}};var l_=t.version;if(l_!=="19.1.1")throw Error(r(527,l_,"19.1.1"));j.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var NM={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Su=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Su.isDisabled&&Su.supportsFiber)try{ct=Su.inject(NM),ht=Su}catch{}}return Go.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",c=bg,d=Tg,S=Ag,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=Jv(e,1,!1,null,null,a,o,c,d,S,T,null),e[Ai]=n.current,td(e),new _d(n)},Go.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,c="",d=bg,S=Tg,T=Ag,P=null,Q=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(P=a.unstable_transitionCallbacks),a.formState!==void 0&&(Q=a.formState)),n=Jv(e,1,!0,n,a??null,o,c,d,S,T,P,Q),n.context=$v(null),a=n.current,o=Qn(),o=re(o),c=Sa(o),c.callback=null,Ma(a,c,o),a=o,n.current.lanes=a,Ft(n,a),Ni(n),e[Ai]=n.current,td(e),new yu(n)},Go.version="19.1.1",Go}var __;function kM(){if(__)return Sd.exports;__=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Sd.exports=VM(),Sd.exports}var XM=kM();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gp="180",WM=0,x_=1,qM=2,K0=1,YM=2,ra=3,Za=0,kn=1,sa=2,Ya=0,Os=1,uh=2,y_=3,S_=4,jM=5,Tr=100,ZM=101,KM=102,QM=103,JM=104,$M=200,tE=201,eE=202,nE=203,ch=204,fh=205,iE=206,aE=207,rE=208,sE=209,oE=210,lE=211,uE=212,cE=213,fE=214,dh=0,hh=1,ph=2,Fs=3,mh=4,gh=5,vh=6,_h=7,Q0=0,dE=1,hE=2,ja=0,pE=1,mE=2,gE=3,vE=4,_E=5,xE=6,yE=7,J0=300,zs=301,Bs=302,xh=303,yh=304,lc=306,Sh=1e3,Rr=1001,Mh=1002,bi=1003,SE=1004,Mu=1005,Oi=1006,Td=1007,Cr=1008,ca=1009,$0=1010,tx=1011,Jo=1012,vp=1013,Ur=1014,oa=1015,al=1016,_p=1017,xp=1018,$o=1020,ex=35902,nx=35899,ix=1021,ax=1022,Mi=1023,tl=1026,el=1027,rx=1028,yp=1029,sx=1030,Sp=1031,Mp=1033,ju=33776,Zu=33777,Ku=33778,Qu=33779,Eh=35840,bh=35841,Th=35842,Ah=35843,Rh=36196,Ch=37492,wh=37496,Dh=37808,Uh=37809,Nh=37810,Lh=37811,Oh=37812,Ph=37813,Ih=37814,Fh=37815,zh=37816,Bh=37817,Hh=37818,Gh=37819,Vh=37820,kh=37821,Xh=36492,Wh=36494,qh=36495,Yh=36283,jh=36284,Zh=36285,Kh=36286,ME=3200,EE=3201,bE=0,TE=1,qa="",ci="srgb",Hs="srgb-linear",nc="linear",ze="srgb",gs=7680,M_=519,AE=512,RE=513,CE=514,ox=515,wE=516,DE=517,UE=518,NE=519,E_=35044,b_="300 es",Pi=2e3,ic=2001;class ks{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,f=l.length;u<f;u++)l[u].call(this,t);t.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ad=Math.PI/180,Qh=180/Math.PI;function rl(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]+"-"+Un[t&255]+Un[t>>8&255]+"-"+Un[t>>16&15|64]+Un[t>>24&255]+"-"+Un[i&63|128]+Un[i>>8&255]+"-"+Un[i>>16&255]+Un[i>>24&255]+Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]).toLowerCase()}function Me(s,t,i){return Math.max(t,Math.min(i,s))}function LE(s,t){return(s%t+t)%t}function Rd(s,t,i){return(1-i)*s+i*t}function Vo(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Vn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Be{constructor(t=0,i=0){Be.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Me(this.x,t.x,i.x),this.y=Me(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Me(this.x,t,i),this.y=Me(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Me(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Me(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,f=this.y-t.y;return this.x=u*r-f*l+t.x,this.y=u*l+f*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class sl{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,f,h){let m=r[l+0],p=r[l+1],g=r[l+2],v=r[l+3];const x=u[f+0],y=u[f+1],E=u[f+2],R=u[f+3];if(h===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v;return}if(h===1){t[i+0]=x,t[i+1]=y,t[i+2]=E,t[i+3]=R;return}if(v!==R||m!==x||p!==y||g!==E){let M=1-h;const _=m*x+p*y+g*E+v*R,I=_>=0?1:-1,O=1-_*_;if(O>Number.EPSILON){const L=Math.sqrt(O),H=Math.atan2(L,_*I);M=Math.sin(M*H)/L,h=Math.sin(h*H)/L}const D=h*I;if(m=m*M+x*D,p=p*M+y*D,g=g*M+E*D,v=v*M+R*D,M===1-h){const L=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=L,p*=L,g*=L,v*=L}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v}static multiplyQuaternionsFlat(t,i,r,l,u,f){const h=r[l],m=r[l+1],p=r[l+2],g=r[l+3],v=u[f],x=u[f+1],y=u[f+2],E=u[f+3];return t[i]=h*E+g*v+m*y-p*x,t[i+1]=m*E+g*x+p*v-h*y,t[i+2]=p*E+g*y+h*x-m*v,t[i+3]=g*E-h*v-m*x-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,f=t._order,h=Math.cos,m=Math.sin,p=h(r/2),g=h(l/2),v=h(u/2),x=m(r/2),y=m(l/2),E=m(u/2);switch(f){case"XYZ":this._x=x*g*v+p*y*E,this._y=p*y*v-x*g*E,this._z=p*g*E+x*y*v,this._w=p*g*v-x*y*E;break;case"YXZ":this._x=x*g*v+p*y*E,this._y=p*y*v-x*g*E,this._z=p*g*E-x*y*v,this._w=p*g*v+x*y*E;break;case"ZXY":this._x=x*g*v-p*y*E,this._y=p*y*v+x*g*E,this._z=p*g*E+x*y*v,this._w=p*g*v-x*y*E;break;case"ZYX":this._x=x*g*v-p*y*E,this._y=p*y*v+x*g*E,this._z=p*g*E-x*y*v,this._w=p*g*v+x*y*E;break;case"YZX":this._x=x*g*v+p*y*E,this._y=p*y*v+x*g*E,this._z=p*g*E-x*y*v,this._w=p*g*v-x*y*E;break;case"XZY":this._x=x*g*v-p*y*E,this._y=p*y*v-x*g*E,this._z=p*g*E+x*y*v,this._w=p*g*v+x*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],f=i[1],h=i[5],m=i[9],p=i[2],g=i[6],v=i[10],x=r+h+v;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(g-m)*y,this._y=(u-p)*y,this._z=(f-l)*y}else if(r>h&&r>v){const y=2*Math.sqrt(1+r-h-v);this._w=(g-m)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(u+p)/y}else if(h>v){const y=2*Math.sqrt(1+h-r-v);this._w=(u-p)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+v-r-h);this._w=(f-l)/y,this._x=(u+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,f=t._w,h=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+f*h+l*p-u*m,this._y=l*g+f*m+u*h-r*p,this._z=u*g+f*p+r*m-l*h,this._w=f*g-r*h-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,u=this._z,f=this._w;let h=f*t._w+r*t._x+l*t._y+u*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=f,this._x=r,this._y=l,this._z=u,this;const m=1-h*h;if(m<=Number.EPSILON){const y=1-i;return this._w=y*f+i*this._w,this._x=y*r+i*this._x,this._y=y*l+i*this._y,this._z=y*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,h),v=Math.sin((1-i)*g)/p,x=Math.sin(i*g)/p;return this._w=f*v+this._w*x,this._x=r*v+this._x*x,this._y=l*v+this._y*x,this._z=u*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class st{constructor(t=0,i=0,r=0){st.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(T_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(T_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,f=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*f,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*f,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*f,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,f=t.y,h=t.z,m=t.w,p=2*(f*l-h*r),g=2*(h*i-u*l),v=2*(u*r-f*i);return this.x=i+m*p+f*v-h*g,this.y=r+m*g+h*p-u*v,this.z=l+m*v+u*g-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Me(this.x,t.x,i.x),this.y=Me(this.y,t.y,i.y),this.z=Me(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Me(this.x,t,i),this.y=Me(this.y,t,i),this.z=Me(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Me(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*f-r*m,this.z=r*h-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Cd.copy(this).projectOnVector(t),this.sub(Cd)}reflect(t){return this.sub(Cd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Me(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cd=new st,T_=new sl;class fe{constructor(t,i,r,l,u,f,h,m,p){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,f,h,m,p)}set(t,i,r,l,u,f,h,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=h,g[3]=i,g[4]=u,g[5]=m,g[6]=r,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,f=r[0],h=r[3],m=r[6],p=r[1],g=r[4],v=r[7],x=r[2],y=r[5],E=r[8],R=l[0],M=l[3],_=l[6],I=l[1],O=l[4],D=l[7],L=l[2],H=l[5],B=l[8];return u[0]=f*R+h*I+m*L,u[3]=f*M+h*O+m*H,u[6]=f*_+h*D+m*B,u[1]=p*R+g*I+v*L,u[4]=p*M+g*O+v*H,u[7]=p*_+g*D+v*B,u[2]=x*R+y*I+E*L,u[5]=x*M+y*O+E*H,u[8]=x*_+y*D+E*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8];return i*f*g-i*h*p-r*u*g+r*h*m+l*u*p-l*f*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8],v=g*f-h*p,x=h*m-g*u,y=p*u-f*m,E=i*v+r*x+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/E;return t[0]=v*R,t[1]=(l*p-g*r)*R,t[2]=(h*r-l*f)*R,t[3]=x*R,t[4]=(g*i-l*m)*R,t[5]=(l*u-h*i)*R,t[6]=y*R,t[7]=(r*m-p*i)*R,t[8]=(f*i-r*u)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,f,h){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*f+p*h)+f+t,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(wd.makeScale(t,i)),this}rotate(t){return this.premultiply(wd.makeRotation(-t)),this}translate(t,i){return this.premultiply(wd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const wd=new fe;function lx(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ac(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function OE(){const s=ac("canvas");return s.style.display="block",s}const A_={};function nl(s){s in A_||(A_[s]=!0,console.warn(s))}function PE(s,t,i){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const R_=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),C_=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function IE(){const s={enabled:!0,workingColorSpace:Hs,spaces:{},convert:function(l,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===ze&&(l.r=ua(l.r),l.g=ua(l.g),l.b=ua(l.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===ze&&(l.r=Ps(l.r),l.g=Ps(l.g),l.b=Ps(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===qa?nc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,f){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return nl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return nl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Hs]:{primaries:t,whitePoint:r,transfer:nc,toXYZ:R_,fromXYZ:C_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:t,whitePoint:r,transfer:ze,toXYZ:R_,fromXYZ:C_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),s}const Re=IE();function ua(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ps(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let vs;class FE{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{vs===void 0&&(vs=ac("canvas")),vs.width=t.width,vs.height=t.height;const l=vs.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=vs}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=ac("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let f=0;f<u.length;f++)u[f]=ua(u[f]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ua(i[r]/255)*255):i[r]=ua(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let zE=0;class Ep{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zE++}),this.uuid=rl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?u.push(Dd(l[f].image)):u.push(Dd(l[f]))}else u=Dd(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function Dd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?FE.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let BE=0;const Ud=new st;class Xn extends ks{constructor(t=Xn.DEFAULT_IMAGE,i=Xn.DEFAULT_MAPPING,r=Rr,l=Rr,u=Oi,f=Cr,h=Mi,m=ca,p=Xn.DEFAULT_ANISOTROPY,g=qa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:BE++}),this.uuid=rl(),this.name="",this.source=new Ep(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ud).x}get height(){return this.source.getSize(Ud).y}get depth(){return this.source.getSize(Ud).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==J0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Sh:t.x=t.x-Math.floor(t.x);break;case Rr:t.x=t.x<0?0:1;break;case Mh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Sh:t.y=t.y-Math.floor(t.y);break;case Rr:t.y=t.y<0?0:1;break;case Mh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=J0;Xn.DEFAULT_ANISOTROPY=1;class an{constructor(t=0,i=0,r=0,l=1){an.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,f=t.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*u,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*u,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*u,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const m=t.elements,p=m[0],g=m[4],v=m[8],x=m[1],y=m[5],E=m[9],R=m[2],M=m[6],_=m[10];if(Math.abs(g-x)<.01&&Math.abs(v-R)<.01&&Math.abs(E-M)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+R)<.1&&Math.abs(E+M)<.1&&Math.abs(p+y+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,D=(y+1)/2,L=(_+1)/2,H=(g+x)/4,B=(v+R)/4,Z=(E+M)/4;return O>D&&O>L?O<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(O),l=H/r,u=B/r):D>L?D<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(D),r=H/l,u=Z/l):L<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(L),r=B/u,l=Z/u),this.set(r,l,u,i),this}let I=Math.sqrt((M-E)*(M-E)+(v-R)*(v-R)+(x-g)*(x-g));return Math.abs(I)<.001&&(I=1),this.x=(M-E)/I,this.y=(v-R)/I,this.z=(x-g)/I,this.w=Math.acos((p+y+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Me(this.x,t.x,i.x),this.y=Me(this.y,t.y,i.y),this.z=Me(this.z,t.z,i.z),this.w=Me(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Me(this.x,t,i),this.y=Me(this.y,t,i),this.z=Me(this.z,t,i),this.w=Me(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Me(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class HE extends ks{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Oi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new an(0,0,t,i),this.scissorTest=!1,this.viewport=new an(0,0,t,i);const l={width:t,height:i,depth:r.depth},u=new Xn(l);this.textures=[];const f=r.count;for(let h=0;h<f;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Oi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Ep(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nr extends HE{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class ux extends Xn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=bi,this.minFilter=bi,this.wrapR=Rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class GE extends Xn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=bi,this.minFilter=bi,this.wrapR=Rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ol{constructor(t=new st(1/0,1/0,1/0),i=new st(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(_i.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(_i.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=_i.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=u.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,_i):_i.fromBufferAttribute(u,f),_i.applyMatrix4(t.matrixWorld),this.expandByPoint(_i);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Eu.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Eu.copy(r.boundingBox)),Eu.applyMatrix4(t.matrixWorld),this.union(Eu)}const l=t.children;for(let u=0,f=l.length;u<f;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_i),_i.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ko),bu.subVectors(this.max,ko),_s.subVectors(t.a,ko),xs.subVectors(t.b,ko),ys.subVectors(t.c,ko),Ha.subVectors(xs,_s),Ga.subVectors(ys,xs),vr.subVectors(_s,ys);let i=[0,-Ha.z,Ha.y,0,-Ga.z,Ga.y,0,-vr.z,vr.y,Ha.z,0,-Ha.x,Ga.z,0,-Ga.x,vr.z,0,-vr.x,-Ha.y,Ha.x,0,-Ga.y,Ga.x,0,-vr.y,vr.x,0];return!Nd(i,_s,xs,ys,bu)||(i=[1,0,0,0,1,0,0,0,1],!Nd(i,_s,xs,ys,bu))?!1:(Tu.crossVectors(Ha,Ga),i=[Tu.x,Tu.y,Tu.z],Nd(i,_s,xs,ys,bu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_i).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_i).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ji),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ji=[new st,new st,new st,new st,new st,new st,new st,new st],_i=new st,Eu=new ol,_s=new st,xs=new st,ys=new st,Ha=new st,Ga=new st,vr=new st,ko=new st,bu=new st,Tu=new st,_r=new st;function Nd(s,t,i,r,l){for(let u=0,f=s.length-3;u<=f;u+=3){_r.fromArray(s,u);const h=l.x*Math.abs(_r.x)+l.y*Math.abs(_r.y)+l.z*Math.abs(_r.z),m=t.dot(_r),p=i.dot(_r),g=r.dot(_r);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const VE=new ol,Xo=new st,Ld=new st;class uc{constructor(t=new st,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):VE.setFromPoints(t).getCenter(r);let l=0;for(let u=0,f=t.length;u<f;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xo.subVectors(t,this.center);const i=Xo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Xo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ld.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xo.copy(t.center).add(Ld)),this.expandByPoint(Xo.copy(t.center).sub(Ld))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const $i=new st,Od=new st,Au=new st,Va=new st,Pd=new st,Ru=new st,Id=new st;class cx{constructor(t=new st,i=new st(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$i)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=$i.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):($i.copy(this.origin).addScaledVector(this.direction,i),$i.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Od.copy(t).add(i).multiplyScalar(.5),Au.copy(i).sub(t).normalize(),Va.copy(this.origin).sub(Od);const u=t.distanceTo(i)*.5,f=-this.direction.dot(Au),h=Va.dot(this.direction),m=-Va.dot(Au),p=Va.lengthSq(),g=Math.abs(1-f*f);let v,x,y,E;if(g>0)if(v=f*m-h,x=f*h-m,E=u*g,v>=0)if(x>=-E)if(x<=E){const R=1/g;v*=R,x*=R,y=v*(v+f*x+2*h)+x*(f*v+x+2*m)+p}else x=u,v=Math.max(0,-(f*x+h)),y=-v*v+x*(x+2*m)+p;else x=-u,v=Math.max(0,-(f*x+h)),y=-v*v+x*(x+2*m)+p;else x<=-E?(v=Math.max(0,-(-f*u+h)),x=v>0?-u:Math.min(Math.max(-u,-m),u),y=-v*v+x*(x+2*m)+p):x<=E?(v=0,x=Math.min(Math.max(-u,-m),u),y=x*(x+2*m)+p):(v=Math.max(0,-(f*u+h)),x=v>0?u:Math.min(Math.max(-u,-m),u),y=-v*v+x*(x+2*m)+p);else x=f>0?-u:u,v=Math.max(0,-(f*x+h)),y=-v*v+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Od).addScaledVector(Au,x),y}intersectSphere(t,i){$i.subVectors(t.center,this.origin);const r=$i.dot(this.direction),l=$i.dot($i)-r*r,u=t.radius*t.radius;if(l>u)return null;const f=Math.sqrt(u-l),h=r-f,m=r+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,f,h,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(r=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(r=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),g>=0?(u=(t.min.y-x.y)*g,f=(t.max.y-x.y)*g):(u=(t.max.y-x.y)*g,f=(t.min.y-x.y)*g),r>f||u>l||((u>r||isNaN(r))&&(r=u),(f<l||isNaN(l))&&(l=f),v>=0?(h=(t.min.z-x.z)*v,m=(t.max.z-x.z)*v):(h=(t.max.z-x.z)*v,m=(t.min.z-x.z)*v),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,$i)!==null}intersectTriangle(t,i,r,l,u){Pd.subVectors(i,t),Ru.subVectors(r,t),Id.crossVectors(Pd,Ru);let f=this.direction.dot(Id),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Va.subVectors(this.origin,t);const m=h*this.direction.dot(Ru.crossVectors(Va,Ru));if(m<0)return null;const p=h*this.direction.dot(Pd.cross(Va));if(p<0||m+p>f)return null;const g=-h*Va.dot(Id);return g<0?null:this.at(g/f,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class cn{constructor(t,i,r,l,u,f,h,m,p,g,v,x,y,E,R,M){cn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,f,h,m,p,g,v,x,y,E,R,M)}set(t,i,r,l,u,f,h,m,p,g,v,x,y,E,R,M){const _=this.elements;return _[0]=t,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=f,_[9]=h,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=x,_[3]=y,_[7]=E,_[11]=R,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cn().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/Ss.setFromMatrixColumn(t,0).length(),u=1/Ss.setFromMatrixColumn(t,1).length(),f=1/Ss.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,f=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),v=Math.sin(u);if(t.order==="XYZ"){const x=f*g,y=f*v,E=h*g,R=h*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=y+E*p,i[5]=x-R*p,i[9]=-h*m,i[2]=R-x*p,i[6]=E+y*p,i[10]=f*m}else if(t.order==="YXZ"){const x=m*g,y=m*v,E=p*g,R=p*v;i[0]=x+R*h,i[4]=E*h-y,i[8]=f*p,i[1]=f*v,i[5]=f*g,i[9]=-h,i[2]=y*h-E,i[6]=R+x*h,i[10]=f*m}else if(t.order==="ZXY"){const x=m*g,y=m*v,E=p*g,R=p*v;i[0]=x-R*h,i[4]=-f*v,i[8]=E+y*h,i[1]=y+E*h,i[5]=f*g,i[9]=R-x*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(t.order==="ZYX"){const x=f*g,y=f*v,E=h*g,R=h*v;i[0]=m*g,i[4]=E*p-y,i[8]=x*p+R,i[1]=m*v,i[5]=R*p+x,i[9]=y*p-E,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(t.order==="YZX"){const x=f*m,y=f*p,E=h*m,R=h*p;i[0]=m*g,i[4]=R-x*v,i[8]=E*v+y,i[1]=v,i[5]=f*g,i[9]=-h*g,i[2]=-p*g,i[6]=y*v+E,i[10]=x-R*v}else if(t.order==="XZY"){const x=f*m,y=f*p,E=h*m,R=h*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=x*v+R,i[5]=f*g,i[9]=y*v-E,i[2]=E*v-y,i[6]=h*g,i[10]=R*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(kE,t,XE)}lookAt(t,i,r){const l=this.elements;return $n.subVectors(t,i),$n.lengthSq()===0&&($n.z=1),$n.normalize(),ka.crossVectors(r,$n),ka.lengthSq()===0&&(Math.abs(r.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),ka.crossVectors(r,$n)),ka.normalize(),Cu.crossVectors($n,ka),l[0]=ka.x,l[4]=Cu.x,l[8]=$n.x,l[1]=ka.y,l[5]=Cu.y,l[9]=$n.y,l[2]=ka.z,l[6]=Cu.z,l[10]=$n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,f=r[0],h=r[4],m=r[8],p=r[12],g=r[1],v=r[5],x=r[9],y=r[13],E=r[2],R=r[6],M=r[10],_=r[14],I=r[3],O=r[7],D=r[11],L=r[15],H=l[0],B=l[4],Z=l[8],w=l[12],C=l[1],V=l[5],nt=l[9],ut=l[13],vt=l[2],lt=l[6],F=l[10],j=l[14],q=l[3],xt=l[7],U=l[11],J=l[15];return u[0]=f*H+h*C+m*vt+p*q,u[4]=f*B+h*V+m*lt+p*xt,u[8]=f*Z+h*nt+m*F+p*U,u[12]=f*w+h*ut+m*j+p*J,u[1]=g*H+v*C+x*vt+y*q,u[5]=g*B+v*V+x*lt+y*xt,u[9]=g*Z+v*nt+x*F+y*U,u[13]=g*w+v*ut+x*j+y*J,u[2]=E*H+R*C+M*vt+_*q,u[6]=E*B+R*V+M*lt+_*xt,u[10]=E*Z+R*nt+M*F+_*U,u[14]=E*w+R*ut+M*j+_*J,u[3]=I*H+O*C+D*vt+L*q,u[7]=I*B+O*V+D*lt+L*xt,u[11]=I*Z+O*nt+D*F+L*U,u[15]=I*w+O*ut+D*j+L*J,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],f=t[1],h=t[5],m=t[9],p=t[13],g=t[2],v=t[6],x=t[10],y=t[14],E=t[3],R=t[7],M=t[11],_=t[15];return E*(+u*m*v-l*p*v-u*h*x+r*p*x+l*h*y-r*m*y)+R*(+i*m*y-i*p*x+u*f*x-l*f*y+l*p*g-u*m*g)+M*(+i*p*v-i*h*y-u*f*v+r*f*y+u*h*g-r*p*g)+_*(-l*h*g-i*m*v+i*h*x+l*f*v-r*f*x+r*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8],v=t[9],x=t[10],y=t[11],E=t[12],R=t[13],M=t[14],_=t[15],I=v*M*p-R*x*p+R*m*y-h*M*y-v*m*_+h*x*_,O=E*x*p-g*M*p-E*m*y+f*M*y+g*m*_-f*x*_,D=g*R*p-E*v*p+E*h*y-f*R*y-g*h*_+f*v*_,L=E*v*m-g*R*m-E*h*x+f*R*x+g*h*M-f*v*M,H=i*I+r*O+l*D+u*L;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/H;return t[0]=I*B,t[1]=(R*x*u-v*M*u-R*l*y+r*M*y+v*l*_-r*x*_)*B,t[2]=(h*M*u-R*m*u+R*l*p-r*M*p-h*l*_+r*m*_)*B,t[3]=(v*m*u-h*x*u-v*l*p+r*x*p+h*l*y-r*m*y)*B,t[4]=O*B,t[5]=(g*M*u-E*x*u+E*l*y-i*M*y-g*l*_+i*x*_)*B,t[6]=(E*m*u-f*M*u-E*l*p+i*M*p+f*l*_-i*m*_)*B,t[7]=(f*x*u-g*m*u+g*l*p-i*x*p-f*l*y+i*m*y)*B,t[8]=D*B,t[9]=(E*v*u-g*R*u-E*r*y+i*R*y+g*r*_-i*v*_)*B,t[10]=(f*R*u-E*h*u+E*r*p-i*R*p-f*r*_+i*h*_)*B,t[11]=(g*h*u-f*v*u-g*r*p+i*v*p+f*r*y-i*h*y)*B,t[12]=L*B,t[13]=(g*R*l-E*v*l+E*r*x-i*R*x-g*r*M+i*v*M)*B,t[14]=(E*h*l-f*R*l-E*r*m+i*R*m+f*r*M-i*h*M)*B,t[15]=(f*v*l-g*h*l+g*r*m-i*v*m-f*r*x+i*h*x)*B,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,f=t.x,h=t.y,m=t.z,p=u*f,g=u*h;return this.set(p*f+r,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+r,g*m-l*f,0,p*m-l*h,g*m+l*f,u*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,f){return this.set(1,r,u,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,f=i._y,h=i._z,m=i._w,p=u+u,g=f+f,v=h+h,x=u*p,y=u*g,E=u*v,R=f*g,M=f*v,_=h*v,I=m*p,O=m*g,D=m*v,L=r.x,H=r.y,B=r.z;return l[0]=(1-(R+_))*L,l[1]=(y+D)*L,l[2]=(E-O)*L,l[3]=0,l[4]=(y-D)*H,l[5]=(1-(x+_))*H,l[6]=(M+I)*H,l[7]=0,l[8]=(E+O)*B,l[9]=(M-I)*B,l[10]=(1-(x+R))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=Ss.set(l[0],l[1],l[2]).length();const f=Ss.set(l[4],l[5],l[6]).length(),h=Ss.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],xi.copy(this);const p=1/u,g=1/f,v=1/h;return xi.elements[0]*=p,xi.elements[1]*=p,xi.elements[2]*=p,xi.elements[4]*=g,xi.elements[5]*=g,xi.elements[6]*=g,xi.elements[8]*=v,xi.elements[9]*=v,xi.elements[10]*=v,i.setFromRotationMatrix(xi),r.x=u,r.y=f,r.z=h,this}makePerspective(t,i,r,l,u,f,h=Pi,m=!1){const p=this.elements,g=2*u/(i-t),v=2*u/(r-l),x=(i+t)/(i-t),y=(r+l)/(r-l);let E,R;if(m)E=u/(f-u),R=f*u/(f-u);else if(h===Pi)E=-(f+u)/(f-u),R=-2*f*u/(f-u);else if(h===ic)E=-f/(f-u),R=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=v,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,u,f,h=Pi,m=!1){const p=this.elements,g=2/(i-t),v=2/(r-l),x=-(i+t)/(i-t),y=-(r+l)/(r-l);let E,R;if(m)E=1/(f-u),R=f/(f-u);else if(h===Pi)E=-2/(f-u),R=-(f+u)/(f-u);else if(h===ic)E=-1/(f-u),R=-u/(f-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=v,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=E,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const Ss=new st,xi=new cn,kE=new st(0,0,0),XE=new st(1,1,1),ka=new st,Cu=new st,$n=new st,w_=new cn,D_=new sl;class fa{constructor(t=0,i=0,r=0,l=fa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],f=l[4],h=l[8],m=l[1],p=l[5],g=l[9],v=l[2],x=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(Me(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Me(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Me(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-Me(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return w_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(w_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return D_.setFromEuler(this),this.setFromQuaternion(D_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fa.DEFAULT_ORDER="XYZ";let fx=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},WE=0;const U_=new st,Ms=new sl,ta=new cn,wu=new st,Wo=new st,qE=new st,YE=new sl,N_=new st(1,0,0),L_=new st(0,1,0),O_=new st(0,0,1),P_={type:"added"},jE={type:"removed"},Es={type:"childadded",child:null},Fd={type:"childremoved",child:null};class Wn extends ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:WE++}),this.uuid=rl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wn.DEFAULT_UP.clone();const t=new st,i=new fa,r=new sl,l=new st(1,1,1);function u(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new cn},normalMatrix:{value:new fe}}),this.matrix=new cn,this.matrixWorld=new cn,this.matrixAutoUpdate=Wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ms.setFromAxisAngle(t,i),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(t,i){return Ms.setFromAxisAngle(t,i),this.quaternion.premultiply(Ms),this}rotateX(t){return this.rotateOnAxis(N_,t)}rotateY(t){return this.rotateOnAxis(L_,t)}rotateZ(t){return this.rotateOnAxis(O_,t)}translateOnAxis(t,i){return U_.copy(t).applyQuaternion(this.quaternion),this.position.add(U_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(N_,t)}translateY(t){return this.translateOnAxis(L_,t)}translateZ(t){return this.translateOnAxis(O_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ta.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?wu.copy(t):wu.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ta.lookAt(Wo,wu,this.up):ta.lookAt(wu,Wo,this.up),this.quaternion.setFromRotationMatrix(ta),l&&(ta.extractRotation(l.matrixWorld),Ms.setFromRotationMatrix(ta),this.quaternion.premultiply(Ms.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(P_),Es.child=t,this.dispatchEvent(Es),Es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(jE),Fd.child=t,this.dispatchEvent(Fd),Fd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ta.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ta.multiply(t.parent.matrixWorld)),t.applyMatrix4(ta),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(P_),Es.child=t,this.dispatchEvent(Es),Es.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,t,qE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,YE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];u(t.shapes,v)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(t.materials,this.material[m]));l.material=h}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(t.animations,m))}}if(i){const h=f(t.geometries),m=f(t.materials),p=f(t.textures),g=f(t.images),v=f(t.shapes),x=f(t.skeletons),y=f(t.animations),E=f(t.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),y.length>0&&(r.animations=y),E.length>0&&(r.nodes=E)}return r.object=l,r;function f(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Wn.DEFAULT_UP=new st(0,1,0);Wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yi=new st,ea=new st,zd=new st,na=new st,bs=new st,Ts=new st,I_=new st,Bd=new st,Hd=new st,Gd=new st,Vd=new an,kd=new an,Xd=new an;class Si{constructor(t=new st,i=new st,r=new st){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),yi.subVectors(t,i),l.cross(yi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){yi.subVectors(l,i),ea.subVectors(r,i),zd.subVectors(t,i);const f=yi.dot(yi),h=yi.dot(ea),m=yi.dot(zd),p=ea.dot(ea),g=ea.dot(zd),v=f*p-h*h;if(v===0)return u.set(0,0,0),null;const x=1/v,y=(p*m-h*g)*x,E=(f*g-h*m)*x;return u.set(1-y-E,E,y)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,na)===null?!1:na.x>=0&&na.y>=0&&na.x+na.y<=1}static getInterpolation(t,i,r,l,u,f,h,m){return this.getBarycoord(t,i,r,l,na)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,na.x),m.addScaledVector(f,na.y),m.addScaledVector(h,na.z),m)}static getInterpolatedAttribute(t,i,r,l,u,f){return Vd.setScalar(0),kd.setScalar(0),Xd.setScalar(0),Vd.fromBufferAttribute(t,i),kd.fromBufferAttribute(t,r),Xd.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Vd,u.x),f.addScaledVector(kd,u.y),f.addScaledVector(Xd,u.z),f}static isFrontFacing(t,i,r,l){return yi.subVectors(r,i),ea.subVectors(t,i),yi.cross(ea).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yi.subVectors(this.c,this.b),ea.subVectors(this.a,this.b),yi.cross(ea).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Si.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Si.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return Si.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return Si.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Si.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let f,h;bs.subVectors(l,r),Ts.subVectors(u,r),Bd.subVectors(t,r);const m=bs.dot(Bd),p=Ts.dot(Bd);if(m<=0&&p<=0)return i.copy(r);Hd.subVectors(t,l);const g=bs.dot(Hd),v=Ts.dot(Hd);if(g>=0&&v<=g)return i.copy(l);const x=m*v-g*p;if(x<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(r).addScaledVector(bs,f);Gd.subVectors(t,u);const y=bs.dot(Gd),E=Ts.dot(Gd);if(E>=0&&y<=E)return i.copy(u);const R=y*p-m*E;if(R<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(r).addScaledVector(Ts,h);const M=g*E-y*v;if(M<=0&&v-g>=0&&y-E>=0)return I_.subVectors(u,l),h=(v-g)/(v-g+(y-E)),i.copy(l).addScaledVector(I_,h);const _=1/(M+R+x);return f=R*_,h=x*_,i.copy(r).addScaledVector(bs,f).addScaledVector(Ts,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const dx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xa={h:0,s:0,l:0},Du={h:0,s:0,l:0};function Wd(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class Ne{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ci){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Re.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Re.workingColorSpace){return this.r=t,this.g=i,this.b=r,Re.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Re.workingColorSpace){if(t=LE(t,1),i=Me(i,0,1),r=Me(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,f=2*r-u;this.r=Wd(f,u,t+1/3),this.g=Wd(f,u,t),this.b=Wd(f,u,t-1/3)}return Re.colorSpaceToWorking(this,l),this}setStyle(t,i=ci){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ci){const r=dx[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ua(t.r),this.g=ua(t.g),this.b=ua(t.b),this}copyLinearToSRGB(t){return this.r=Ps(t.r),this.g=Ps(t.g),this.b=Ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ci){return Re.workingToColorSpace(Nn.copy(this),t),Math.round(Me(Nn.r*255,0,255))*65536+Math.round(Me(Nn.g*255,0,255))*256+Math.round(Me(Nn.b*255,0,255))}getHexString(t=ci){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Re.workingColorSpace){Re.workingToColorSpace(Nn.copy(this),i);const r=Nn.r,l=Nn.g,u=Nn.b,f=Math.max(r,l,u),h=Math.min(r,l,u);let m,p;const g=(h+f)/2;if(h===f)m=0,p=0;else{const v=f-h;switch(p=g<=.5?v/(f+h):v/(2-f-h),f){case r:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-r)/v+2;break;case u:m=(r-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Re.workingColorSpace){return Re.workingToColorSpace(Nn.copy(this),i),t.r=Nn.r,t.g=Nn.g,t.b=Nn.b,t}getStyle(t=ci){Re.workingToColorSpace(Nn.copy(this),t);const i=Nn.r,r=Nn.g,l=Nn.b;return t!==ci?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Xa),this.setHSL(Xa.h+t,Xa.s+i,Xa.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Xa),t.getHSL(Du);const r=Rd(Xa.h,Du.h,i),l=Rd(Xa.s,Du.s,i),u=Rd(Xa.l,Du.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new Ne;Ne.NAMES=dx;let ZE=0;class ll extends ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ZE++}),this.uuid=rl(),this.name="",this.type="Material",this.blending=Os,this.side=Za,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ch,this.blendDst=fh,this.blendEquation=Tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=M_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(r.blending=this.blending),this.side!==Za&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==ch&&(r.blendSrc=this.blendSrc),this.blendDst!==fh&&(r.blendDst=this.blendDst),this.blendEquation!==Tr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Fs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==M_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const f=[];for(const h in u){const m=u[h];delete m.metadata,f.push(m)}return f}if(i){const u=l(t.textures),f=l(t.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class hx extends ll{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fa,this.combine=Q0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const un=new st,Uu=new Be;let KE=0;class di{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:KE++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=E_,this.updateRanges=[],this.gpuType=oa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Uu.fromBufferAttribute(this,i),Uu.applyMatrix3(t),this.setXY(i,Uu.x,Uu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(t),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(t),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(t),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.transformDirection(t),this.setXYZ(i,un.x,un.y,un.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Vo(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Vn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Vo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Vo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Vo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Vo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array),l=Vn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array),l=Vn(l,this.array),u=Vn(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==E_&&(t.usage=this.usage),t}}class px extends di{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class mx extends di{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Dr extends di{constructor(t,i,r){super(new Float32Array(t),i,r)}}let QE=0;const ui=new cn,qd=new Wn,As=new st,ti=new ol,qo=new ol,Sn=new st;class pa extends ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:QE++}),this.uuid=rl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(lx(t)?mx:px)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new fe().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ui.makeRotationFromQuaternion(t),this.applyMatrix4(ui),this}rotateX(t){return ui.makeRotationX(t),this.applyMatrix4(ui),this}rotateY(t){return ui.makeRotationY(t),this.applyMatrix4(ui),this}rotateZ(t){return ui.makeRotationZ(t),this.applyMatrix4(ui),this}translate(t,i,r){return ui.makeTranslation(t,i,r),this.applyMatrix4(ui),this}scale(t,i,r){return ui.makeScale(t,i,r),this.applyMatrix4(ui),this}lookAt(t){return qd.lookAt(t),qd.updateMatrix(),this.applyMatrix4(qd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const f=t[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Dr(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ol);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new st(-1/0,-1/0,-1/0),new st(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];ti.setFromBufferAttribute(u),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new st,1/0);return}if(t){const r=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),i)for(let u=0,f=i.length;u<f;u++){const h=i[u];qo.setFromBufferAttribute(h),this.morphTargetsRelative?(Sn.addVectors(ti.min,qo.min),ti.expandByPoint(Sn),Sn.addVectors(ti.max,qo.max),ti.expandByPoint(Sn)):(ti.expandByPoint(qo.min),ti.expandByPoint(qo.max))}ti.getCenter(r);let l=0;for(let u=0,f=t.count;u<f;u++)Sn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(Sn));if(i)for(let u=0,f=i.length;u<f;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)Sn.fromBufferAttribute(h,p),m&&(As.fromBufferAttribute(t,p),Sn.add(As)),l=Math.max(l,r.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new di(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let Z=0;Z<r.count;Z++)h[Z]=new st,m[Z]=new st;const p=new st,g=new st,v=new st,x=new Be,y=new Be,E=new Be,R=new st,M=new st;function _(Z,w,C){p.fromBufferAttribute(r,Z),g.fromBufferAttribute(r,w),v.fromBufferAttribute(r,C),x.fromBufferAttribute(u,Z),y.fromBufferAttribute(u,w),E.fromBufferAttribute(u,C),g.sub(p),v.sub(p),y.sub(x),E.sub(x);const V=1/(y.x*E.y-E.x*y.y);isFinite(V)&&(R.copy(g).multiplyScalar(E.y).addScaledVector(v,-y.y).multiplyScalar(V),M.copy(v).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(V),h[Z].add(R),h[w].add(R),h[C].add(R),m[Z].add(M),m[w].add(M),m[C].add(M))}let I=this.groups;I.length===0&&(I=[{start:0,count:t.count}]);for(let Z=0,w=I.length;Z<w;++Z){const C=I[Z],V=C.start,nt=C.count;for(let ut=V,vt=V+nt;ut<vt;ut+=3)_(t.getX(ut+0),t.getX(ut+1),t.getX(ut+2))}const O=new st,D=new st,L=new st,H=new st;function B(Z){L.fromBufferAttribute(l,Z),H.copy(L);const w=h[Z];O.copy(w),O.sub(L.multiplyScalar(L.dot(w))).normalize(),D.crossVectors(H,w);const V=D.dot(m[Z])<0?-1:1;f.setXYZW(Z,O.x,O.y,O.z,V)}for(let Z=0,w=I.length;Z<w;++Z){const C=I[Z],V=C.start,nt=C.count;for(let ut=V,vt=V+nt;ut<vt;ut+=3)B(t.getX(ut+0)),B(t.getX(ut+1)),B(t.getX(ut+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new di(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,y=r.count;x<y;x++)r.setXYZ(x,0,0,0);const l=new st,u=new st,f=new st,h=new st,m=new st,p=new st,g=new st,v=new st;if(t)for(let x=0,y=t.count;x<y;x+=3){const E=t.getX(x+0),R=t.getX(x+1),M=t.getX(x+2);l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,R),f.fromBufferAttribute(i,M),g.subVectors(f,u),v.subVectors(l,u),g.cross(v),h.fromBufferAttribute(r,E),m.fromBufferAttribute(r,R),p.fromBufferAttribute(r,M),h.add(g),m.add(g),p.add(g),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let x=0,y=i.count;x<y;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),g.subVectors(f,u),v.subVectors(l,u),g.cross(v),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Sn.fromBufferAttribute(t,i),Sn.normalize(),t.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(h,m){const p=h.array,g=h.itemSize,v=h.normalized,x=new p.constructor(m.length*g);let y=0,E=0;for(let R=0,M=m.length;R<M;R++){h.isInterleavedBufferAttribute?y=m[R]*h.data.stride+h.offset:y=m[R]*g;for(let _=0;_<g;_++)x[E++]=p[y++]}return new di(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new pa,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,r);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let g=0,v=p.length;g<v;g++){const x=p[g],y=t(x,r);m.push(y)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,x=p.length;v<x;v++){const y=p[v];g.push(y.toJSON(t.data))}g.length>0&&(l[m]=g,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=t.morphAttributes;for(const p in u){const g=[],v=u[p];for(let x=0,y=v.length;x<y;x++)g.push(v[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,g=f.length;p<g;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const F_=new cn,xr=new cx,Nu=new uc,z_=new st,Lu=new st,Ou=new st,Pu=new st,Yd=new st,Iu=new st,B_=new st,Fu=new st;class la extends Wn{constructor(t=new pa,i=new hx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(u&&h){Iu.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=h[m],v=u[m];g!==0&&(Yd.fromBufferAttribute(v,t),f?Iu.addScaledVector(Yd,g):Iu.addScaledVector(Yd.sub(i),g))}i.add(Iu)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Nu.copy(r.boundingSphere),Nu.applyMatrix4(u),xr.copy(t.ray).recast(t.near),!(Nu.containsPoint(xr.origin)===!1&&(xr.intersectSphere(Nu,z_)===null||xr.origin.distanceToSquared(z_)>(t.far-t.near)**2))&&(F_.copy(u).invert(),xr.copy(t.ray).applyMatrix4(F_),!(r.boundingBox!==null&&xr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,xr)))}_computeIntersections(t,i,r){let l;const u=this.geometry,f=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,x=u.groups,y=u.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,R=x.length;E<R;E++){const M=x[E],_=f[M.materialIndex],I=Math.max(M.start,y.start),O=Math.min(h.count,Math.min(M.start+M.count,y.start+y.count));for(let D=I,L=O;D<L;D+=3){const H=h.getX(D),B=h.getX(D+1),Z=h.getX(D+2);l=zu(this,_,t,r,p,g,v,H,B,Z),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),R=Math.min(h.count,y.start+y.count);for(let M=E,_=R;M<_;M+=3){const I=h.getX(M),O=h.getX(M+1),D=h.getX(M+2);l=zu(this,f,t,r,p,g,v,I,O,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,R=x.length;E<R;E++){const M=x[E],_=f[M.materialIndex],I=Math.max(M.start,y.start),O=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let D=I,L=O;D<L;D+=3){const H=D,B=D+1,Z=D+2;l=zu(this,_,t,r,p,g,v,H,B,Z),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),R=Math.min(m.count,y.start+y.count);for(let M=E,_=R;M<_;M+=3){const I=M,O=M+1,D=M+2;l=zu(this,f,t,r,p,g,v,I,O,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function JE(s,t,i,r,l,u,f,h){let m;if(t.side===kn?m=r.intersectTriangle(f,u,l,!0,h):m=r.intersectTriangle(l,u,f,t.side===Za,h),m===null)return null;Fu.copy(h),Fu.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Fu);return p<i.near||p>i.far?null:{distance:p,point:Fu.clone(),object:s}}function zu(s,t,i,r,l,u,f,h,m,p){s.getVertexPosition(h,Lu),s.getVertexPosition(m,Ou),s.getVertexPosition(p,Pu);const g=JE(s,t,i,r,Lu,Ou,Pu,B_);if(g){const v=new st;Si.getBarycoord(B_,Lu,Ou,Pu,v),l&&(g.uv=Si.getInterpolatedAttribute(l,h,m,p,v,new Be)),u&&(g.uv1=Si.getInterpolatedAttribute(u,h,m,p,v,new Be)),f&&(g.normal=Si.getInterpolatedAttribute(f,h,m,p,v,new st),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:h,b:m,c:p,normal:new st,materialIndex:0};Si.getNormal(Lu,Ou,Pu,x.normal),g.face=x,g.barycoord=v}return g}class ul extends pa{constructor(t=1,i=1,r=1,l=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:f};const h=this;l=Math.floor(l),u=Math.floor(u),f=Math.floor(f);const m=[],p=[],g=[],v=[];let x=0,y=0;E("z","y","x",-1,-1,r,i,t,f,u,0),E("z","y","x",1,-1,r,i,-t,f,u,1),E("x","z","y",1,1,t,r,i,l,f,2),E("x","z","y",1,-1,t,r,-i,l,f,3),E("x","y","z",1,-1,t,i,r,l,u,4),E("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new Dr(p,3)),this.setAttribute("normal",new Dr(g,3)),this.setAttribute("uv",new Dr(v,2));function E(R,M,_,I,O,D,L,H,B,Z,w){const C=D/B,V=L/Z,nt=D/2,ut=L/2,vt=H/2,lt=B+1,F=Z+1;let j=0,q=0;const xt=new st;for(let U=0;U<F;U++){const J=U*V-ut;for(let _t=0;_t<lt;_t++){const yt=_t*C-nt;xt[R]=yt*I,xt[M]=J*O,xt[_]=vt,p.push(xt.x,xt.y,xt.z),xt[R]=0,xt[M]=0,xt[_]=H>0?1:-1,g.push(xt.x,xt.y,xt.z),v.push(_t/B),v.push(1-U/Z),j+=1}}for(let U=0;U<Z;U++)for(let J=0;J<B;J++){const _t=x+J+lt*U,yt=x+J+lt*(U+1),Ut=x+(J+1)+lt*(U+1),Ht=x+(J+1)+lt*U;m.push(_t,yt,Ht),m.push(yt,Ut,Ht),q+=6}h.addGroup(y,q,w),y+=q,x+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ul(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Gs(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function In(s){const t={};for(let i=0;i<s.length;i++){const r=Gs(s[i]);for(const l in r)t[l]=r[l]}return t}function $E(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function gx(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Re.workingColorSpace}const tb={clone:Gs,merge:In};var eb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ka extends ll{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eb,this.fragmentShader=nb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gs(t.uniforms),this.uniformsGroups=$E(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class vx extends Wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new cn,this.projectionMatrix=new cn,this.projectionMatrixInverse=new cn,this.coordinateSystem=Pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wa=new st,H_=new Be,G_=new Be;class fi extends vx{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Qh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ad*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qh*2*Math.atan(Math.tan(Ad*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Wa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wa.x,Wa.y).multiplyScalar(-t/Wa.z),Wa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Wa.x,Wa.y).multiplyScalar(-t/Wa.z)}getViewSize(t,i){return this.getViewBounds(t,H_,G_),i.subVectors(G_,H_)}setViewOffset(t,i,r,l,u,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Ad*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;u+=f.offsetX*l/m,i-=f.offsetY*r/p,l*=f.width/m,r*=f.height/p}const h=this.filmOffset;h!==0&&(u+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Rs=-90,Cs=1;class ib extends Wn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new fi(Rs,Cs,t,i);l.layers=this.layers,this.add(l);const u=new fi(Rs,Cs,t,i);u.layers=this.layers,this.add(u);const f=new fi(Rs,Cs,t,i);f.layers=this.layers,this.add(f);const h=new fi(Rs,Cs,t,i);h.layers=this.layers,this.add(h);const m=new fi(Rs,Cs,t,i);m.layers=this.layers,this.add(m);const p=new fi(Rs,Cs,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,f,h,m]=i;for(const p of i)this.remove(p);if(t===Pi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===ic)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,f,h,m,p,g]=this.children,v=t.getRenderTarget(),x=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,f),t.setRenderTarget(r,2,l),t.render(i,h),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=R,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(v,x,y),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class _x extends Xn{constructor(t=[],i=zs,r,l,u,f,h,m,p,g){super(t,i,r,l,u,f,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ab extends Nr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new _x(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ul(5,5,5),u=new Ka({name:"CubemapFromEquirect",uniforms:Gs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:kn,blending:Ya});u.uniforms.tEquirect.value=i;const f=new la(l,u),h=i.minFilter;return i.minFilter===Cr&&(i.minFilter=Oi),new ib(1,10,this).update(t,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,r,l);t.setRenderTarget(u)}}class Bu extends Wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rb={type:"move"};class jd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new st,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new st),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new st,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new st),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const R of t.hand.values()){const M=i.getJointPose(R,r),_=this._getHandJoint(p,R);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=g.position.distanceTo(v.position),y=.02,E=.005;p.inputState.pinching&&x>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(rb)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Bu;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class sb extends Wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fa,this.environmentIntensity=1,this.environmentRotation=new fa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Zd=new st,ob=new st,lb=new fe;class Er{constructor(t=new st(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Zd.subVectors(r,i).cross(ob.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Zd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||lb.getNormalMatrix(t),l=this.coplanarPoint(Zd).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yr=new uc,ub=new Be(.5,.5),Hu=new st;class xx{constructor(t=new Er,i=new Er,r=new Er,l=new Er,u=new Er,f=new Er){this.planes=[t,i,r,l,u,f]}set(t,i,r,l,u,f){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(f),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Pi,r=!1){const l=this.planes,u=t.elements,f=u[0],h=u[1],m=u[2],p=u[3],g=u[4],v=u[5],x=u[6],y=u[7],E=u[8],R=u[9],M=u[10],_=u[11],I=u[12],O=u[13],D=u[14],L=u[15];if(l[0].setComponents(p-f,y-g,_-E,L-I).normalize(),l[1].setComponents(p+f,y+g,_+E,L+I).normalize(),l[2].setComponents(p+h,y+v,_+R,L+O).normalize(),l[3].setComponents(p-h,y-v,_-R,L-O).normalize(),r)l[4].setComponents(m,x,M,D).normalize(),l[5].setComponents(p-m,y-x,_-M,L-D).normalize();else if(l[4].setComponents(p-m,y-x,_-M,L-D).normalize(),i===Pi)l[5].setComponents(p+m,y+x,_+M,L+D).normalize();else if(i===ic)l[5].setComponents(m,x,M,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),yr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(t){yr.center.set(0,0,0);const i=ub.distanceTo(t.center);return yr.radius=.7071067811865476+i,yr.applyMatrix4(t.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Hu.x=l.normal.x>0?t.max.x:t.min.x,Hu.y=l.normal.y>0?t.max.y:t.min.y,Hu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Hu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class yx extends ll{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const V_=new cn,Jh=new cx,Gu=new uc,Vu=new st;class cb extends Wn{constructor(t=new pa,i=new yx){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,u=t.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Gu.copy(r.boundingSphere),Gu.applyMatrix4(l),Gu.radius+=u,t.ray.intersectsSphere(Gu)===!1)return;V_.copy(l).invert(),Jh.copy(t.ray).applyMatrix4(V_);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=r.index,v=r.attributes.position;if(p!==null){const x=Math.max(0,f.start),y=Math.min(p.count,f.start+f.count);for(let E=x,R=y;E<R;E++){const M=p.getX(E);Vu.fromBufferAttribute(v,M),k_(Vu,M,m,l,t,i,this)}}else{const x=Math.max(0,f.start),y=Math.min(v.count,f.start+f.count);for(let E=x,R=y;E<R;E++)Vu.fromBufferAttribute(v,E),k_(Vu,E,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function k_(s,t,i,r,l,u,f){const h=Jh.distanceSqToPoint(s);if(h<i){const m=new st;Jh.closestPointToPoint(s,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class Sx extends Xn{constructor(t,i,r=Ur,l,u,f,h=bi,m=bi,p,g=tl,v=1){if(g!==tl&&g!==el)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:v};super(x,l,u,f,h,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ep(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Mx extends Xn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class cc extends pa{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,f=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,g=m+1,v=t/h,x=i/m,y=[],E=[],R=[],M=[];for(let _=0;_<g;_++){const I=_*x-f;for(let O=0;O<p;O++){const D=O*v-u;E.push(D,-I,0),R.push(0,0,1),M.push(O/h),M.push(1-_/m)}}for(let _=0;_<m;_++)for(let I=0;I<h;I++){const O=I+p*_,D=I+p*(_+1),L=I+1+p*(_+1),H=I+1+p*_;y.push(O,D,H),y.push(D,L,H)}this.setIndex(y),this.setAttribute("position",new Dr(E,3)),this.setAttribute("normal",new Dr(R,3)),this.setAttribute("uv",new Dr(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cc(t.width,t.height,t.widthSegments,t.heightSegments)}}class fb extends ll{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ME,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class db extends ll{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class hb extends vx{constructor(t=-1,i=1,r=1,l=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,f=r+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,f=u+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(u,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class pb extends fi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function X_(s,t,i,r){const l=mb(r);switch(i){case ix:return s*t;case rx:return s*t/l.components*l.byteLength;case yp:return s*t/l.components*l.byteLength;case sx:return s*t*2/l.components*l.byteLength;case Sp:return s*t*2/l.components*l.byteLength;case ax:return s*t*3/l.components*l.byteLength;case Mi:return s*t*4/l.components*l.byteLength;case Mp:return s*t*4/l.components*l.byteLength;case ju:case Zu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ku:case Qu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case bh:case Ah:return Math.max(s,16)*Math.max(t,8)/4;case Eh:case Th:return Math.max(s,8)*Math.max(t,8)/2;case Rh:case Ch:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case wh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Dh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Uh:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Nh:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Lh:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Oh:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ph:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ih:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Fh:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case zh:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Bh:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Hh:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Gh:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Vh:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case kh:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Xh:case Wh:case qh:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Yh:case jh:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Zh:case Kh:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function mb(s){switch(s){case ca:case $0:return{byteLength:1,components:1};case Jo:case tx:case al:return{byteLength:2,components:1};case _p:case xp:return{byteLength:2,components:4};case Ur:case vp:case oa:return{byteLength:4,components:1};case ex:case nx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ex(){let s=null,t=!1,i=null,r=null;function l(u,f){i(u,f),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function gb(s){const t=new WeakMap;function i(h,m){const p=h.array,g=h.usage,v=p.byteLength,x=s.createBuffer();s.bindBuffer(m,x),s.bufferData(m,p,g),h.onUploadCallback();let y;if(p instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=s.SHORT;else if(p instanceof Uint32Array)y=s.UNSIGNED_INT;else if(p instanceof Int32Array)y=s.INT;else if(p instanceof Int8Array)y=s.BYTE;else if(p instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function r(h,m,p){const g=m.array,v=m.updateRanges;if(s.bindBuffer(p,h),v.length===0)s.bufferSubData(p,0,g);else{v.sort((y,E)=>y.start-E.start);let x=0;for(let y=1;y<v.length;y++){const E=v[x],R=v[y];R.start<=E.start+E.count+1?E.count=Math.max(E.count,R.start+R.count-E.start):(++x,v[x]=R)}v.length=x+1;for(let y=0,E=v.length;y<E;y++){const R=v[y];s.bufferSubData(p,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(s.deleteBuffer(m.buffer),t.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:f}}var vb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_b=`#ifdef USE_ALPHAHASH
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
#endif`,xb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Eb=`#ifdef USE_AOMAP
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
#endif`,bb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tb=`#ifdef USE_BATCHING
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
#endif`,Ab=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Db=`#ifdef USE_IRIDESCENCE
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
#endif`,Ub=`#ifdef USE_BUMPMAP
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
#endif`,Nb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ob=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ib=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Hb=`#define PI 3.141592653589793
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
} // validated`,Gb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vb=`vec3 transformedNormal = objectNormal;
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
#endif`,kb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yb="gl_FragColor = linearToOutputTexel( gl_FragColor );",jb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zb=`#ifdef USE_ENVMAP
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
#endif`,Kb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qb=`#ifdef USE_ENVMAP
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
#endif`,Jb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$b=`#ifdef USE_ENVMAP
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
#endif`,t1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,e1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,n1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,i1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,a1=`#ifdef USE_GRADIENTMAP
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
}`,r1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,s1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,o1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,l1=`uniform bool receiveShadow;
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
#endif`,u1=`#ifdef USE_ENVMAP
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
#endif`,c1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,f1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,d1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,h1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,p1=`PhysicalMaterial material;
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
#endif`,m1=`struct PhysicalMaterial {
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
}`,g1=`
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
#endif`,v1=`#if defined( RE_IndirectDiffuse )
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
#endif`,_1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,x1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,y1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,E1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,b1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,T1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,A1=`#if defined( USE_POINTS_UV )
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
#endif`,R1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,C1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,w1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,D1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,U1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N1=`#ifdef USE_MORPHTARGETS
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
#endif`,L1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,P1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,I1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,B1=`#ifdef USE_NORMALMAP
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
#endif`,H1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,G1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,V1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,k1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,X1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,W1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,q1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Y1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,j1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Z1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,K1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Q1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,J1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,eT=`float getShadowMask() {
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
}`,nT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iT=`#ifdef USE_SKINNING
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
#endif`,aT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rT=`#ifdef USE_SKINNING
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
#endif`,sT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cT=`#ifdef USE_TRANSMISSION
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
#endif`,fT=`#ifdef USE_TRANSMISSION
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
#endif`,dT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vT=`uniform sampler2D t2D;
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
}`,_T=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ST=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MT=`#include <common>
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
}`,ET=`#if DEPTH_PACKING == 3200
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
}`,bT=`#define DISTANCE
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
}`,TT=`#define DISTANCE
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
}`,AT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,RT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CT=`uniform float scale;
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
}`,wT=`uniform vec3 diffuse;
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
}`,DT=`#include <common>
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
}`,UT=`uniform vec3 diffuse;
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
}`,NT=`#define LAMBERT
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
}`,LT=`#define LAMBERT
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
}`,OT=`#define MATCAP
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
}`,PT=`#define MATCAP
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
}`,IT=`#define NORMAL
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
}`,FT=`#define NORMAL
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
}`,zT=`#define PHONG
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
}`,BT=`#define PHONG
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
}`,HT=`#define STANDARD
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
}`,GT=`#define STANDARD
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
}`,VT=`#define TOON
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
}`,kT=`#define TOON
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
}`,XT=`uniform float size;
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
}`,WT=`uniform vec3 diffuse;
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
}`,qT=`#include <common>
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
}`,YT=`uniform vec3 color;
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
}`,jT=`uniform float rotation;
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
}`,ZT=`uniform vec3 diffuse;
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
}`,pe={alphahash_fragment:vb,alphahash_pars_fragment:_b,alphamap_fragment:xb,alphamap_pars_fragment:yb,alphatest_fragment:Sb,alphatest_pars_fragment:Mb,aomap_fragment:Eb,aomap_pars_fragment:bb,batching_pars_vertex:Tb,batching_vertex:Ab,begin_vertex:Rb,beginnormal_vertex:Cb,bsdfs:wb,iridescence_fragment:Db,bumpmap_pars_fragment:Ub,clipping_planes_fragment:Nb,clipping_planes_pars_fragment:Lb,clipping_planes_pars_vertex:Ob,clipping_planes_vertex:Pb,color_fragment:Ib,color_pars_fragment:Fb,color_pars_vertex:zb,color_vertex:Bb,common:Hb,cube_uv_reflection_fragment:Gb,defaultnormal_vertex:Vb,displacementmap_pars_vertex:kb,displacementmap_vertex:Xb,emissivemap_fragment:Wb,emissivemap_pars_fragment:qb,colorspace_fragment:Yb,colorspace_pars_fragment:jb,envmap_fragment:Zb,envmap_common_pars_fragment:Kb,envmap_pars_fragment:Qb,envmap_pars_vertex:Jb,envmap_physical_pars_fragment:u1,envmap_vertex:$b,fog_vertex:t1,fog_pars_vertex:e1,fog_fragment:n1,fog_pars_fragment:i1,gradientmap_pars_fragment:a1,lightmap_pars_fragment:r1,lights_lambert_fragment:s1,lights_lambert_pars_fragment:o1,lights_pars_begin:l1,lights_toon_fragment:c1,lights_toon_pars_fragment:f1,lights_phong_fragment:d1,lights_phong_pars_fragment:h1,lights_physical_fragment:p1,lights_physical_pars_fragment:m1,lights_fragment_begin:g1,lights_fragment_maps:v1,lights_fragment_end:_1,logdepthbuf_fragment:x1,logdepthbuf_pars_fragment:y1,logdepthbuf_pars_vertex:S1,logdepthbuf_vertex:M1,map_fragment:E1,map_pars_fragment:b1,map_particle_fragment:T1,map_particle_pars_fragment:A1,metalnessmap_fragment:R1,metalnessmap_pars_fragment:C1,morphinstance_vertex:w1,morphcolor_vertex:D1,morphnormal_vertex:U1,morphtarget_pars_vertex:N1,morphtarget_vertex:L1,normal_fragment_begin:O1,normal_fragment_maps:P1,normal_pars_fragment:I1,normal_pars_vertex:F1,normal_vertex:z1,normalmap_pars_fragment:B1,clearcoat_normal_fragment_begin:H1,clearcoat_normal_fragment_maps:G1,clearcoat_pars_fragment:V1,iridescence_pars_fragment:k1,opaque_fragment:X1,packing:W1,premultiplied_alpha_fragment:q1,project_vertex:Y1,dithering_fragment:j1,dithering_pars_fragment:Z1,roughnessmap_fragment:K1,roughnessmap_pars_fragment:Q1,shadowmap_pars_fragment:J1,shadowmap_pars_vertex:$1,shadowmap_vertex:tT,shadowmask_pars_fragment:eT,skinbase_vertex:nT,skinning_pars_vertex:iT,skinning_vertex:aT,skinnormal_vertex:rT,specularmap_fragment:sT,specularmap_pars_fragment:oT,tonemapping_fragment:lT,tonemapping_pars_fragment:uT,transmission_fragment:cT,transmission_pars_fragment:fT,uv_pars_fragment:dT,uv_pars_vertex:hT,uv_vertex:pT,worldpos_vertex:mT,background_vert:gT,background_frag:vT,backgroundCube_vert:_T,backgroundCube_frag:xT,cube_vert:yT,cube_frag:ST,depth_vert:MT,depth_frag:ET,distanceRGBA_vert:bT,distanceRGBA_frag:TT,equirect_vert:AT,equirect_frag:RT,linedashed_vert:CT,linedashed_frag:wT,meshbasic_vert:DT,meshbasic_frag:UT,meshlambert_vert:NT,meshlambert_frag:LT,meshmatcap_vert:OT,meshmatcap_frag:PT,meshnormal_vert:IT,meshnormal_frag:FT,meshphong_vert:zT,meshphong_frag:BT,meshphysical_vert:HT,meshphysical_frag:GT,meshtoon_vert:VT,meshtoon_frag:kT,points_vert:XT,points_frag:WT,shadow_vert:qT,shadow_frag:YT,sprite_vert:jT,sprite_frag:ZT},Ot={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},Li={basic:{uniforms:In([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:In([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Ne(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:In([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:In([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:In([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new Ne(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:In([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:In([Ot.points,Ot.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:In([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:In([Ot.common,Ot.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:In([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:In([Ot.sprite,Ot.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distanceRGBA:{uniforms:In([Ot.common,Ot.displacementmap,{referencePosition:{value:new st},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distanceRGBA_vert,fragmentShader:pe.distanceRGBA_frag},shadow:{uniforms:In([Ot.lights,Ot.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};Li.physical={uniforms:In([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const ku={r:0,b:0,g:0},Sr=new fa,KT=new cn;function QT(s,t,i,r,l,u,f){const h=new Ne(0);let m=u===!0?0:1,p,g,v=null,x=0,y=null;function E(O){let D=O.isScene===!0?O.background:null;return D&&D.isTexture&&(D=(O.backgroundBlurriness>0?i:t).get(D)),D}function R(O){let D=!1;const L=E(O);L===null?_(h,m):L&&L.isColor&&(_(L,1),D=!0);const H=s.xr.getEnvironmentBlendMode();H==="additive"?r.buffers.color.setClear(0,0,0,1,f):H==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(O,D){const L=E(D);L&&(L.isCubeTexture||L.mapping===lc)?(g===void 0&&(g=new la(new ul(1,1,1),new Ka({name:"BackgroundCubeMaterial",uniforms:Gs(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(H,B,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Sr.copy(D.backgroundRotation),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),g.material.uniforms.envMap.value=L,g.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(KT.makeRotationFromEuler(Sr)),g.material.toneMapped=Re.getTransfer(L.colorSpace)!==ze,(v!==L||x!==L.version||y!==s.toneMapping)&&(g.material.needsUpdate=!0,v=L,x=L.version,y=s.toneMapping),g.layers.enableAll(),O.unshift(g,g.geometry,g.material,0,0,null)):L&&L.isTexture&&(p===void 0&&(p=new la(new cc(2,2),new Ka({name:"BackgroundMaterial",uniforms:Gs(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:Za,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=L,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Re.getTransfer(L.colorSpace)!==ze,L.matrixAutoUpdate===!0&&L.updateMatrix(),p.material.uniforms.uvTransform.value.copy(L.matrix),(v!==L||x!==L.version||y!==s.toneMapping)&&(p.material.needsUpdate=!0,v=L,x=L.version,y=s.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function _(O,D){O.getRGB(ku,gx(s)),r.buffers.color.setClear(ku.r,ku.g,ku.b,D,f)}function I(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(O,D=1){h.set(O),m=D,_(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,_(h,m)},render:R,addToRenderList:M,dispose:I}}function JT(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=x(null);let u=l,f=!1;function h(C,V,nt,ut,vt){let lt=!1;const F=v(ut,nt,V);u!==F&&(u=F,p(u.object)),lt=y(C,ut,nt,vt),lt&&E(C,ut,nt,vt),vt!==null&&t.update(vt,s.ELEMENT_ARRAY_BUFFER),(lt||f)&&(f=!1,D(C,V,nt,ut),vt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(vt).buffer))}function m(){return s.createVertexArray()}function p(C){return s.bindVertexArray(C)}function g(C){return s.deleteVertexArray(C)}function v(C,V,nt){const ut=nt.wireframe===!0;let vt=r[C.id];vt===void 0&&(vt={},r[C.id]=vt);let lt=vt[V.id];lt===void 0&&(lt={},vt[V.id]=lt);let F=lt[ut];return F===void 0&&(F=x(m()),lt[ut]=F),F}function x(C){const V=[],nt=[],ut=[];for(let vt=0;vt<i;vt++)V[vt]=0,nt[vt]=0,ut[vt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:nt,attributeDivisors:ut,object:C,attributes:{},index:null}}function y(C,V,nt,ut){const vt=u.attributes,lt=V.attributes;let F=0;const j=nt.getAttributes();for(const q in j)if(j[q].location>=0){const U=vt[q];let J=lt[q];if(J===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(J=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(J=C.instanceColor)),U===void 0||U.attribute!==J||J&&U.data!==J.data)return!0;F++}return u.attributesNum!==F||u.index!==ut}function E(C,V,nt,ut){const vt={},lt=V.attributes;let F=0;const j=nt.getAttributes();for(const q in j)if(j[q].location>=0){let U=lt[q];U===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(U=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(U=C.instanceColor));const J={};J.attribute=U,U&&U.data&&(J.data=U.data),vt[q]=J,F++}u.attributes=vt,u.attributesNum=F,u.index=ut}function R(){const C=u.newAttributes;for(let V=0,nt=C.length;V<nt;V++)C[V]=0}function M(C){_(C,0)}function _(C,V){const nt=u.newAttributes,ut=u.enabledAttributes,vt=u.attributeDivisors;nt[C]=1,ut[C]===0&&(s.enableVertexAttribArray(C),ut[C]=1),vt[C]!==V&&(s.vertexAttribDivisor(C,V),vt[C]=V)}function I(){const C=u.newAttributes,V=u.enabledAttributes;for(let nt=0,ut=V.length;nt<ut;nt++)V[nt]!==C[nt]&&(s.disableVertexAttribArray(nt),V[nt]=0)}function O(C,V,nt,ut,vt,lt,F){F===!0?s.vertexAttribIPointer(C,V,nt,vt,lt):s.vertexAttribPointer(C,V,nt,ut,vt,lt)}function D(C,V,nt,ut){R();const vt=ut.attributes,lt=nt.getAttributes(),F=V.defaultAttributeValues;for(const j in lt){const q=lt[j];if(q.location>=0){let xt=vt[j];if(xt===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(xt=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(xt=C.instanceColor)),xt!==void 0){const U=xt.normalized,J=xt.itemSize,_t=t.get(xt);if(_t===void 0)continue;const yt=_t.buffer,Ut=_t.type,Ht=_t.bytesPerElement,tt=Ut===s.INT||Ut===s.UNSIGNED_INT||xt.gpuType===vp;if(xt.isInterleavedBufferAttribute){const mt=xt.data,At=mt.stride,Qt=xt.offset;if(mt.isInstancedInterleavedBuffer){for(let qt=0;qt<q.locationSize;qt++)_(q.location+qt,mt.meshPerAttribute);C.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let qt=0;qt<q.locationSize;qt++)M(q.location+qt);s.bindBuffer(s.ARRAY_BUFFER,yt);for(let qt=0;qt<q.locationSize;qt++)O(q.location+qt,J/q.locationSize,Ut,U,At*Ht,(Qt+J/q.locationSize*qt)*Ht,tt)}else{if(xt.isInstancedBufferAttribute){for(let mt=0;mt<q.locationSize;mt++)_(q.location+mt,xt.meshPerAttribute);C.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let mt=0;mt<q.locationSize;mt++)M(q.location+mt);s.bindBuffer(s.ARRAY_BUFFER,yt);for(let mt=0;mt<q.locationSize;mt++)O(q.location+mt,J/q.locationSize,Ut,U,J*Ht,J/q.locationSize*mt*Ht,tt)}}else if(F!==void 0){const U=F[j];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(q.location,U);break;case 3:s.vertexAttrib3fv(q.location,U);break;case 4:s.vertexAttrib4fv(q.location,U);break;default:s.vertexAttrib1fv(q.location,U)}}}}I()}function L(){Z();for(const C in r){const V=r[C];for(const nt in V){const ut=V[nt];for(const vt in ut)g(ut[vt].object),delete ut[vt];delete V[nt]}delete r[C]}}function H(C){if(r[C.id]===void 0)return;const V=r[C.id];for(const nt in V){const ut=V[nt];for(const vt in ut)g(ut[vt].object),delete ut[vt];delete V[nt]}delete r[C.id]}function B(C){for(const V in r){const nt=r[V];if(nt[C.id]===void 0)continue;const ut=nt[C.id];for(const vt in ut)g(ut[vt].object),delete ut[vt];delete nt[C.id]}}function Z(){w(),f=!0,u!==l&&(u=l,p(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Z,resetDefaultState:w,dispose:L,releaseStatesOfGeometry:H,releaseStatesOfProgram:B,initAttributes:R,enableAttribute:M,disableUnusedAttributes:I}}function $T(s,t,i){let r;function l(p){r=p}function u(p,g){s.drawArrays(r,p,g),i.update(g,r,1)}function f(p,g,v){v!==0&&(s.drawArraysInstanced(r,p,g,v),i.update(g,r,v))}function h(p,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,v);let y=0;for(let E=0;E<v;E++)y+=g[E];i.update(y,r,1)}function m(p,g,v,x){if(v===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<p.length;E++)f(p[E],g[E],x[E]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,g,0,x,0,v);let E=0;for(let R=0;R<v;R++)E+=g[R]*x[R];i.update(E,r,1)}}this.setMode=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function tA(s,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(B){return!(B!==Mi&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const Z=B===al&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==ca&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==oa&&!Z)}function m(B){if(B==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),I=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),O=s.getParameter(s.MAX_VARYING_VECTORS),D=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=E>0,H=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:x,maxTextures:y,maxVertexTextures:E,maxTextureSize:R,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:I,maxVaryings:O,maxFragmentUniforms:D,vertexTextures:L,maxSamples:H}}function eA(s){const t=this;let i=null,r=0,l=!1,u=!1;const f=new Er,h=new fe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const y=v.length!==0||x||r!==0||l;return l=x,r=v.length,y},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,x){i=g(v,x,0)},this.setState=function(v,x,y){const E=v.clippingPlanes,R=v.clipIntersection,M=v.clipShadows,_=s.get(v);if(!l||E===null||E.length===0||u&&!M)u?g(null):p();else{const I=u?0:r,O=I*4;let D=_.clippingState||null;m.value=D,D=g(E,x,O,y);for(let L=0;L!==O;++L)D[L]=i[L];_.clippingState=D,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=I}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(v,x,y,E){const R=v!==null?v.length:0;let M=null;if(R!==0){if(M=m.value,E!==!0||M===null){const _=y+R*4,I=x.matrixWorldInverse;h.getNormalMatrix(I),(M===null||M.length<_)&&(M=new Float32Array(_));for(let O=0,D=y;O!==R;++O,D+=4)f.copy(v[O]).applyMatrix4(I,h),f.normal.toArray(M,D),M[D+3]=f.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,M}}function nA(s){let t=new WeakMap;function i(f,h){return h===xh?f.mapping=zs:h===yh&&(f.mapping=Bs),f}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===xh||h===yh)if(t.has(f)){const m=t.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new ab(m.height);return p.fromEquirectangularTexture(s,f),t.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const Ns=4,W_=[.125,.215,.35,.446,.526,.582],Ar=20,Kd=new hb,q_=new Ne;let Qd=null,Jd=0,$d=0,th=!1;const br=(1+Math.sqrt(5))/2,ws=1/br,Y_=[new st(-br,ws,0),new st(br,ws,0),new st(-ws,0,br),new st(ws,0,br),new st(0,br,-ws),new st(0,br,ws),new st(-1,1,-1),new st(1,1,-1),new st(-1,1,1),new st(1,1,1)],iA=new st;class j_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,u={}){const{size:f=256,position:h=iA}=u;Qd=this._renderer.getRenderTarget(),Jd=this._renderer.getActiveCubeFace(),$d=this._renderer.getActiveMipmapLevel(),th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Q_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=K_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Qd,Jd,$d),this._renderer.xr.enabled=th,t.scissorTest=!1,Xu(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===zs||t.mapping===Bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qd=this._renderer.getRenderTarget(),Jd=this._renderer.getActiveCubeFace(),$d=this._renderer.getActiveMipmapLevel(),th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Oi,minFilter:Oi,generateMipmaps:!1,type:al,format:Mi,colorSpace:Hs,depthBuffer:!1},l=Z_(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Z_(t,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=aA(u)),this._blurMaterial=rA(u,t,i)}return l}_compileMaterial(t){const i=new la(this._lodPlanes[0],t);this._renderer.compile(i,Kd)}_sceneToCubeUV(t,i,r,l,u){const m=new fi(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,y=v.toneMapping;v.getClearColor(q_),v.toneMapping=ja,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null));const R=new hx({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),M=new la(new ul,R);let _=!1;const I=t.background;I?I.isColor&&(R.color.copy(I),t.background=null,_=!0):(R.color.copy(q_),_=!0);for(let O=0;O<6;O++){const D=O%3;D===0?(m.up.set(0,p[O],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[O],u.y,u.z)):D===1?(m.up.set(0,0,p[O]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[O],u.z)):(m.up.set(0,p[O],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[O]));const L=this._cubeSize;Xu(l,D*L,O>2?L:0,L,L),v.setRenderTarget(l),_&&v.render(M,m),v.render(t,m)}M.geometry.dispose(),M.material.dispose(),v.toneMapping=y,v.autoClear=x,t.background=I}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===zs||t.mapping===Bs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Q_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=K_());const u=l?this._cubemapMaterial:this._equirectMaterial,f=new la(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=t;const m=this._cubeSize;Xu(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,Kd)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),h=Y_[(l-u-1)%Y_.length];this._blur(t,u-1,u,f,h)}i.autoClear=r}_blur(t,i,r,l,u){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,r,l,"latitudinal",u),this._halfBlur(f,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new la(this._lodPlanes[l],p),x=p.uniforms,y=this._sizeLods[r]-1,E=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*Ar-1),R=u/E,M=isFinite(u)?1+Math.floor(g*R):Ar;M>Ar&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Ar}`);const _=[];let I=0;for(let B=0;B<Ar;++B){const Z=B/R,w=Math.exp(-Z*Z/2);_.push(w),B===0?I+=w:B<M&&(I+=2*w)}for(let B=0;B<_.length;B++)_[B]=_[B]/I;x.envMap.value=t.texture,x.samples.value=M,x.weights.value=_,x.latitudinal.value=f==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:O}=this;x.dTheta.value=E,x.mipInt.value=O-r;const D=this._sizeLods[l],L=3*D*(l>O-Ns?l-O+Ns:0),H=4*(this._cubeSize-D);Xu(i,L,H,3*D,2*D),m.setRenderTarget(i),m.render(v,Kd)}}function aA(s){const t=[],i=[],r=[];let l=s;const u=s-Ns+1+W_.length;for(let f=0;f<u;f++){const h=Math.pow(2,l);i.push(h);let m=1/h;f>s-Ns?m=W_[f-s+Ns-1]:f===0&&(m=0),r.push(m);const p=1/(h-2),g=-p,v=1+p,x=[g,g,v,g,v,v,g,g,v,v,g,v],y=6,E=6,R=3,M=2,_=1,I=new Float32Array(R*E*y),O=new Float32Array(M*E*y),D=new Float32Array(_*E*y);for(let H=0;H<y;H++){const B=H%3*2/3-1,Z=H>2?0:-1,w=[B,Z,0,B+2/3,Z,0,B+2/3,Z+1,0,B,Z,0,B+2/3,Z+1,0,B,Z+1,0];I.set(w,R*E*H),O.set(x,M*E*H);const C=[H,H,H,H,H,H];D.set(C,_*E*H)}const L=new pa;L.setAttribute("position",new di(I,R)),L.setAttribute("uv",new di(O,M)),L.setAttribute("faceIndex",new di(D,_)),t.push(L),l>Ns&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function Z_(s,t,i){const r=new Nr(s,t,i);return r.texture.mapping=lc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Xu(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function rA(s,t,i){const r=new Float32Array(Ar),l=new st(0,1,0);return new Ka({name:"SphericalGaussianBlur",defines:{n:Ar,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:bp(),fragmentShader:`

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
		`,blending:Ya,depthTest:!1,depthWrite:!1})}function K_(){return new Ka({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bp(),fragmentShader:`

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
		`,blending:Ya,depthTest:!1,depthWrite:!1})}function Q_(){return new Ka({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ya,depthTest:!1,depthWrite:!1})}function bp(){return`

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
	`}function sA(s){let t=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===xh||m===yh,g=m===zs||m===Bs;if(p||g){let v=t.get(h);const x=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return i===null&&(i=new j_(s)),v=p?i.fromEquirectangular(h,v):i.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),v.texture;if(v!==void 0)return v.texture;{const y=h.image;return p&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new j_(s)),v=p?i.fromEquirectangular(h):i.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),h.addEventListener("dispose",u),v.texture):null}}}return h}function l(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function oA(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&nl("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function lA(s,t,i,r){const l={},u=new WeakMap;function f(v){const x=v.target;x.index!==null&&t.remove(x.index);for(const E in x.attributes)t.remove(x.attributes[E]);x.removeEventListener("dispose",f),delete l[x.id];const y=u.get(x);y&&(t.remove(y),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function h(v,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function m(v){const x=v.attributes;for(const y in x)t.update(x[y],s.ARRAY_BUFFER)}function p(v){const x=[],y=v.index,E=v.attributes.position;let R=0;if(y!==null){const I=y.array;R=y.version;for(let O=0,D=I.length;O<D;O+=3){const L=I[O+0],H=I[O+1],B=I[O+2];x.push(L,H,H,B,B,L)}}else if(E!==void 0){const I=E.array;R=E.version;for(let O=0,D=I.length/3-1;O<D;O+=3){const L=O+0,H=O+1,B=O+2;x.push(L,H,H,B,B,L)}}else return;const M=new(lx(x)?mx:px)(x,1);M.version=R;const _=u.get(v);_&&t.remove(_),u.set(v,M)}function g(v){const x=u.get(v);if(x){const y=v.index;y!==null&&x.version<y.version&&p(v)}else p(v);return u.get(v)}return{get:h,update:m,getWireframeAttribute:g}}function uA(s,t,i){let r;function l(x){r=x}let u,f;function h(x){u=x.type,f=x.bytesPerElement}function m(x,y){s.drawElements(r,y,u,x*f),i.update(y,r,1)}function p(x,y,E){E!==0&&(s.drawElementsInstanced(r,y,u,x*f,E),i.update(y,r,E))}function g(x,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,u,x,0,E);let M=0;for(let _=0;_<E;_++)M+=y[_];i.update(M,r,1)}function v(x,y,E,R){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<x.length;_++)p(x[_]/f,y[_],R[_]);else{M.multiDrawElementsInstancedWEBGL(r,y,0,u,x,0,R,0,E);let _=0;for(let I=0;I<E;I++)_+=y[I]*R[I];i.update(_,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function cA(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,h){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=h*(u/3);break;case s.LINES:i.lines+=h*(u/2);break;case s.LINE_STRIP:i.lines+=h*(u-1);break;case s.LINE_LOOP:i.lines+=h*u;break;case s.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function fA(s,t,i){const r=new WeakMap,l=new an;function u(f,h,m){const p=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let x=r.get(h);if(x===void 0||x.count!==v){let C=function(){Z.dispose(),r.delete(h),h.removeEventListener("dispose",C)};var y=C;x!==void 0&&x.texture.dispose();const E=h.morphAttributes.position!==void 0,R=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],O=h.morphAttributes.color||[];let D=0;E===!0&&(D=1),R===!0&&(D=2),M===!0&&(D=3);let L=h.attributes.position.count*D,H=1;L>t.maxTextureSize&&(H=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const B=new Float32Array(L*H*4*v),Z=new ux(B,L,H,v);Z.type=oa,Z.needsUpdate=!0;const w=D*4;for(let V=0;V<v;V++){const nt=_[V],ut=I[V],vt=O[V],lt=L*H*4*V;for(let F=0;F<nt.count;F++){const j=F*w;E===!0&&(l.fromBufferAttribute(nt,F),B[lt+j+0]=l.x,B[lt+j+1]=l.y,B[lt+j+2]=l.z,B[lt+j+3]=0),R===!0&&(l.fromBufferAttribute(ut,F),B[lt+j+4]=l.x,B[lt+j+5]=l.y,B[lt+j+6]=l.z,B[lt+j+7]=0),M===!0&&(l.fromBufferAttribute(vt,F),B[lt+j+8]=l.x,B[lt+j+9]=l.y,B[lt+j+10]=l.z,B[lt+j+11]=vt.itemSize===4?l.w:1)}}x={count:v,texture:Z,size:new Be(L,H)},r.set(h,x),h.addEventListener("dispose",C)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const R=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",R),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:u}}function dA(s,t,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,g=m.geometry,v=t.get(m,g);if(l.get(v)!==p&&(t.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return v}function f(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:f}}const bx=new Xn,J_=new Sx(1,1),Tx=new ux,Ax=new GE,Rx=new _x,$_=[],t0=[],e0=new Float32Array(16),n0=new Float32Array(9),i0=new Float32Array(4);function Xs(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let u=$_[l];if(u===void 0&&(u=new Float32Array(l),$_[l]=u),t!==0){r.toArray(u,0);for(let f=1,h=0;f!==t;++f)h+=i,s[f].toArray(u,h)}return u}function mn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function gn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function fc(s,t){let i=t0[t];i===void 0&&(i=new Int32Array(t),t0[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function hA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function pA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;s.uniform2fv(this.addr,t),gn(i,t)}}function mA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(mn(i,t))return;s.uniform3fv(this.addr,t),gn(i,t)}}function gA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;s.uniform4fv(this.addr,t),gn(i,t)}}function vA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(mn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,r))return;i0.set(r),s.uniformMatrix2fv(this.addr,!1,i0),gn(i,r)}}function _A(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(mn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,r))return;n0.set(r),s.uniformMatrix3fv(this.addr,!1,n0),gn(i,r)}}function xA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(mn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,r))return;e0.set(r),s.uniformMatrix4fv(this.addr,!1,e0),gn(i,r)}}function yA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function SA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;s.uniform2iv(this.addr,t),gn(i,t)}}function MA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(mn(i,t))return;s.uniform3iv(this.addr,t),gn(i,t)}}function EA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;s.uniform4iv(this.addr,t),gn(i,t)}}function bA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function TA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;s.uniform2uiv(this.addr,t),gn(i,t)}}function AA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(mn(i,t))return;s.uniform3uiv(this.addr,t),gn(i,t)}}function RA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;s.uniform4uiv(this.addr,t),gn(i,t)}}function CA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(J_.compareFunction=ox,u=J_):u=bx,i.setTexture2D(t||u,l)}function wA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||Ax,l)}function DA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||Rx,l)}function UA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||Tx,l)}function NA(s){switch(s){case 5126:return hA;case 35664:return pA;case 35665:return mA;case 35666:return gA;case 35674:return vA;case 35675:return _A;case 35676:return xA;case 5124:case 35670:return yA;case 35667:case 35671:return SA;case 35668:case 35672:return MA;case 35669:case 35673:return EA;case 5125:return bA;case 36294:return TA;case 36295:return AA;case 36296:return RA;case 35678:case 36198:case 36298:case 36306:case 35682:return CA;case 35679:case 36299:case 36307:return wA;case 35680:case 36300:case 36308:case 36293:return DA;case 36289:case 36303:case 36311:case 36292:return UA}}function LA(s,t){s.uniform1fv(this.addr,t)}function OA(s,t){const i=Xs(t,this.size,2);s.uniform2fv(this.addr,i)}function PA(s,t){const i=Xs(t,this.size,3);s.uniform3fv(this.addr,i)}function IA(s,t){const i=Xs(t,this.size,4);s.uniform4fv(this.addr,i)}function FA(s,t){const i=Xs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function zA(s,t){const i=Xs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function BA(s,t){const i=Xs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function HA(s,t){s.uniform1iv(this.addr,t)}function GA(s,t){s.uniform2iv(this.addr,t)}function VA(s,t){s.uniform3iv(this.addr,t)}function kA(s,t){s.uniform4iv(this.addr,t)}function XA(s,t){s.uniform1uiv(this.addr,t)}function WA(s,t){s.uniform2uiv(this.addr,t)}function qA(s,t){s.uniform3uiv(this.addr,t)}function YA(s,t){s.uniform4uiv(this.addr,t)}function jA(s,t,i){const r=this.cache,l=t.length,u=fc(i,l);mn(r,u)||(s.uniform1iv(this.addr,u),gn(r,u));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||bx,u[f])}function ZA(s,t,i){const r=this.cache,l=t.length,u=fc(i,l);mn(r,u)||(s.uniform1iv(this.addr,u),gn(r,u));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||Ax,u[f])}function KA(s,t,i){const r=this.cache,l=t.length,u=fc(i,l);mn(r,u)||(s.uniform1iv(this.addr,u),gn(r,u));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||Rx,u[f])}function QA(s,t,i){const r=this.cache,l=t.length,u=fc(i,l);mn(r,u)||(s.uniform1iv(this.addr,u),gn(r,u));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||Tx,u[f])}function JA(s){switch(s){case 5126:return LA;case 35664:return OA;case 35665:return PA;case 35666:return IA;case 35674:return FA;case 35675:return zA;case 35676:return BA;case 5124:case 35670:return HA;case 35667:case 35671:return GA;case 35668:case 35672:return VA;case 35669:case 35673:return kA;case 5125:return XA;case 36294:return WA;case 36295:return qA;case 36296:return YA;case 35678:case 36198:case 36298:case 36306:case 35682:return jA;case 35679:case 36299:case 36307:return ZA;case 35680:case 36300:case 36308:case 36293:return KA;case 36289:case 36303:case 36311:case 36292:return QA}}class $A{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=NA(i.type)}}class tR{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=JA(i.type)}}class eR{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,f=l.length;u!==f;++u){const h=l[u];h.setValue(t,i[h.id],r)}}}const eh=/(\w+)(\])?(\[|\.)?/g;function a0(s,t){s.seq.push(t),s.map[t.id]=t}function nR(s,t,i){const r=s.name,l=r.length;for(eh.lastIndex=0;;){const u=eh.exec(r),f=eh.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){a0(i,p===void 0?new $A(h,s,t):new tR(h,s,t));break}else{let v=i.map[h];v===void 0&&(v=new eR(h),a0(i,v)),i=v}}}class Ju{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),f=t.getUniformLocation(i,u.name);nR(u,f,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,f=i.length;u!==f;++u){const h=i[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const f=t[l];f.id in i&&r.push(f)}return r}}function r0(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const iR=37297;let aR=0;function rR(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let f=l;f<u;f++){const h=f+1;r.push(`${h===t?">":" "} ${h}: ${i[f]}`)}return r.join(`
`)}const s0=new fe;function sR(s){Re._getMatrix(s0,Re.workingColorSpace,s);const t=`mat3( ${s0.elements.map(i=>i.toFixed(4))} )`;switch(Re.getTransfer(s)){case nc:return[t,"LinearTransferOETF"];case ze:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function o0(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),u=(s.getShaderInfoLog(t)||"").trim();if(r&&u==="")return"";const f=/ERROR: 0:(\d+)/.exec(u);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+u+`

`+rR(s.getShaderSource(t),h)}else return u}function oR(s,t){const i=sR(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function lR(s,t){let i;switch(t){case pE:i="Linear";break;case mE:i="Reinhard";break;case gE:i="Cineon";break;case vE:i="ACESFilmic";break;case xE:i="AgX";break;case yE:i="Neutral";break;case _E:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Wu=new st;function uR(){Re.getLuminanceCoefficients(Wu);const s=Wu.x.toFixed(4),t=Wu.y.toFixed(4),i=Wu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cR(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yo).join(`
`)}function fR(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function dR(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(t,l),f=u.name;let h=1;u.type===s.FLOAT_MAT2&&(h=2),u.type===s.FLOAT_MAT3&&(h=3),u.type===s.FLOAT_MAT4&&(h=4),i[f]={type:u.type,location:s.getAttribLocation(t,f),locationSize:h}}return i}function Yo(s){return s!==""}function l0(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function u0(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const hR=/^[ \t]*#include +<([\w\d./]+)>/gm;function $h(s){return s.replace(hR,mR)}const pR=new Map;function mR(s,t){let i=pe[t];if(i===void 0){const r=pR.get(t);if(r!==void 0)i=pe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return $h(i)}const gR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function c0(s){return s.replace(gR,vR)}function vR(s,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function f0(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function _R(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===K0?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===YM?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ra&&(t="SHADOWMAP_TYPE_VSM"),t}function xR(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case zs:case Bs:t="ENVMAP_TYPE_CUBE";break;case lc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function yR(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Bs:t="ENVMAP_MODE_REFRACTION";break}return t}function SR(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Q0:t="ENVMAP_BLENDING_MULTIPLY";break;case dE:t="ENVMAP_BLENDING_MIX";break;case hE:t="ENVMAP_BLENDING_ADD";break}return t}function MR(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function ER(s,t,i,r){const l=s.getContext(),u=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=_R(i),p=xR(i),g=yR(i),v=SR(i),x=MR(i),y=cR(i),E=fR(u),R=l.createProgram();let M,_,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Yo).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Yo).join(`
`),_.length>0&&(_+=`
`)):(M=[f0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yo).join(`
`),_=[f0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ja?"#define TONE_MAPPING":"",i.toneMapping!==ja?pe.tonemapping_pars_fragment:"",i.toneMapping!==ja?lR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,oR("linearToOutputTexel",i.outputColorSpace),uR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Yo).join(`
`)),f=$h(f),f=l0(f,i),f=u0(f,i),h=$h(h),h=l0(h,i),h=u0(h,i),f=c0(f),h=c0(h),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",i.glslVersion===b_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===b_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const O=I+M+f,D=I+_+h,L=r0(l,l.VERTEX_SHADER,O),H=r0(l,l.FRAGMENT_SHADER,D);l.attachShader(R,L),l.attachShader(R,H),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function B(V){if(s.debug.checkShaderErrors){const nt=l.getProgramInfoLog(R)||"",ut=l.getShaderInfoLog(L)||"",vt=l.getShaderInfoLog(H)||"",lt=nt.trim(),F=ut.trim(),j=vt.trim();let q=!0,xt=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,R,L,H);else{const U=o0(l,L,"vertex"),J=o0(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+lt+`
`+U+`
`+J)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(F===""||j==="")&&(xt=!1);xt&&(V.diagnostics={runnable:q,programLog:lt,vertexShader:{log:F,prefix:M},fragmentShader:{log:j,prefix:_}})}l.deleteShader(L),l.deleteShader(H),Z=new Ju(l,R),w=dR(l,R)}let Z;this.getUniforms=function(){return Z===void 0&&B(this),Z};let w;this.getAttributes=function(){return w===void 0&&B(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(R,iR)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=aR++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=L,this.fragmentShader=H,this}let bR=0;class TR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new AR(t),i.set(t,r)),r}}class AR{constructor(t){this.id=bR++,this.code=t,this.usedTimes=0}}function RR(s,t,i,r,l,u,f){const h=new fx,m=new TR,p=new Set,g=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let y=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(w){return p.add(w),w===0?"uv":`uv${w}`}function M(w,C,V,nt,ut){const vt=nt.fog,lt=ut.geometry,F=w.isMeshStandardMaterial?nt.environment:null,j=(w.isMeshStandardMaterial?i:t).get(w.envMap||F),q=j&&j.mapping===lc?j.image.height:null,xt=E[w.type];w.precision!==null&&(y=l.getMaxPrecision(w.precision),y!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",y,"instead."));const U=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,J=U!==void 0?U.length:0;let _t=0;lt.morphAttributes.position!==void 0&&(_t=1),lt.morphAttributes.normal!==void 0&&(_t=2),lt.morphAttributes.color!==void 0&&(_t=3);let yt,Ut,Ht,tt;if(xt){const be=Li[xt];yt=be.vertexShader,Ut=be.fragmentShader}else yt=w.vertexShader,Ut=w.fragmentShader,m.update(w),Ht=m.getVertexShaderID(w),tt=m.getFragmentShaderID(w);const mt=s.getRenderTarget(),At=s.state.buffers.depth.getReversed(),Qt=ut.isInstancedMesh===!0,qt=ut.isBatchedMesh===!0,me=!!w.map,rn=!!w.matcap,z=!!j,Le=!!w.aoMap,se=!!w.lightMap,ie=!!w.bumpMap,Pt=!!w.normalMap,Ve=!!w.displacementMap,Vt=!!w.emissiveMap,oe=!!w.metalnessMap,je=!!w.roughnessMap,Ze=w.anisotropy>0,N=w.clearcoat>0,b=w.dispersion>0,$=w.iridescence>0,ct=w.sheen>0,ht=w.transmission>0,ot=Ze&&!!w.anisotropyMap,It=N&&!!w.clearcoatMap,Rt=N&&!!w.clearcoatNormalMap,Xt=N&&!!w.clearcoatRoughnessMap,Yt=$&&!!w.iridescenceMap,St=$&&!!w.iridescenceThicknessMap,Nt=ct&&!!w.sheenColorMap,Zt=ct&&!!w.sheenRoughnessMap,kt=!!w.specularMap,wt=!!w.specularColorMap,le=!!w.specularIntensityMap,k=ht&&!!w.transmissionMap,bt=ht&&!!w.thicknessMap,Ct=!!w.gradientMap,Ft=!!w.alphaMap,Mt=w.alphaTest>0,gt=!!w.alphaHash,Gt=!!w.extensions;let re=ja;w.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(re=s.toneMapping);const we={shaderID:xt,shaderType:w.type,shaderName:w.name,vertexShader:yt,fragmentShader:Ut,defines:w.defines,customVertexShaderID:Ht,customFragmentShaderID:tt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:y,batching:qt,batchingColor:qt&&ut._colorsTexture!==null,instancing:Qt,instancingColor:Qt&&ut.instanceColor!==null,instancingMorph:Qt&&ut.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:mt===null?s.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:Hs,alphaToCoverage:!!w.alphaToCoverage,map:me,matcap:rn,envMap:z,envMapMode:z&&j.mapping,envMapCubeUVHeight:q,aoMap:Le,lightMap:se,bumpMap:ie,normalMap:Pt,displacementMap:x&&Ve,emissiveMap:Vt,normalMapObjectSpace:Pt&&w.normalMapType===TE,normalMapTangentSpace:Pt&&w.normalMapType===bE,metalnessMap:oe,roughnessMap:je,anisotropy:Ze,anisotropyMap:ot,clearcoat:N,clearcoatMap:It,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Xt,dispersion:b,iridescence:$,iridescenceMap:Yt,iridescenceThicknessMap:St,sheen:ct,sheenColorMap:Nt,sheenRoughnessMap:Zt,specularMap:kt,specularColorMap:wt,specularIntensityMap:le,transmission:ht,transmissionMap:k,thicknessMap:bt,gradientMap:Ct,opaque:w.transparent===!1&&w.blending===Os&&w.alphaToCoverage===!1,alphaMap:Ft,alphaTest:Mt,alphaHash:gt,combine:w.combine,mapUv:me&&R(w.map.channel),aoMapUv:Le&&R(w.aoMap.channel),lightMapUv:se&&R(w.lightMap.channel),bumpMapUv:ie&&R(w.bumpMap.channel),normalMapUv:Pt&&R(w.normalMap.channel),displacementMapUv:Ve&&R(w.displacementMap.channel),emissiveMapUv:Vt&&R(w.emissiveMap.channel),metalnessMapUv:oe&&R(w.metalnessMap.channel),roughnessMapUv:je&&R(w.roughnessMap.channel),anisotropyMapUv:ot&&R(w.anisotropyMap.channel),clearcoatMapUv:It&&R(w.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&R(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&R(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Yt&&R(w.iridescenceMap.channel),iridescenceThicknessMapUv:St&&R(w.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&R(w.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&R(w.sheenRoughnessMap.channel),specularMapUv:kt&&R(w.specularMap.channel),specularColorMapUv:wt&&R(w.specularColorMap.channel),specularIntensityMapUv:le&&R(w.specularIntensityMap.channel),transmissionMapUv:k&&R(w.transmissionMap.channel),thicknessMapUv:bt&&R(w.thicknessMap.channel),alphaMapUv:Ft&&R(w.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(Pt||Ze),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:ut.isPoints===!0&&!!lt.attributes.uv&&(me||Ft),fog:!!vt,useFog:w.fog===!0,fogExp2:!!vt&&vt.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:At,skinning:ut.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:_t,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:re,decodeVideoTexture:me&&w.map.isVideoTexture===!0&&Re.getTransfer(w.map.colorSpace)===ze,decodeVideoTextureEmissive:Vt&&w.emissiveMap.isVideoTexture===!0&&Re.getTransfer(w.emissiveMap.colorSpace)===ze,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===sa,flipSided:w.side===kn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Gt&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&w.extensions.multiDraw===!0||qt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return we.vertexUv1s=p.has(1),we.vertexUv2s=p.has(2),we.vertexUv3s=p.has(3),p.clear(),we}function _(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const V in w.defines)C.push(V),C.push(w.defines[V]);return w.isRawShaderMaterial===!1&&(I(C,w),O(C,w),C.push(s.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function I(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function O(w,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),C.gradientMap&&h.enable(22),w.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reversedDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),w.push(h.mask)}function D(w){const C=E[w.type];let V;if(C){const nt=Li[C];V=tb.clone(nt.uniforms)}else V=w.uniforms;return V}function L(w,C){let V;for(let nt=0,ut=g.length;nt<ut;nt++){const vt=g[nt];if(vt.cacheKey===C){V=vt,++V.usedTimes;break}}return V===void 0&&(V=new ER(s,C,w,u),g.push(V)),V}function H(w){if(--w.usedTimes===0){const C=g.indexOf(w);g[C]=g[g.length-1],g.pop(),w.destroy()}}function B(w){m.remove(w)}function Z(){m.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:D,acquireProgram:L,releaseProgram:H,releaseShaderCache:B,programs:g,dispose:Z}}function CR(){let s=new WeakMap;function t(f){return s.has(f)}function i(f){let h=s.get(f);return h===void 0&&(h={},s.set(f,h)),h}function r(f){s.delete(f)}function l(f,h,m){s.get(f)[h]=m}function u(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function wR(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function d0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function h0(){const s=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function f(v,x,y,E,R,M){let _=s[t];return _===void 0?(_={id:v.id,object:v,geometry:x,material:y,groupOrder:E,renderOrder:v.renderOrder,z:R,group:M},s[t]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=y,_.groupOrder=E,_.renderOrder=v.renderOrder,_.z=R,_.group=M),t++,_}function h(v,x,y,E,R,M){const _=f(v,x,y,E,R,M);y.transmission>0?r.push(_):y.transparent===!0?l.push(_):i.push(_)}function m(v,x,y,E,R,M){const _=f(v,x,y,E,R,M);y.transmission>0?r.unshift(_):y.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,x){i.length>1&&i.sort(v||wR),r.length>1&&r.sort(x||d0),l.length>1&&l.sort(x||d0)}function g(){for(let v=t,x=s.length;v<x;v++){const y=s[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:m,finish:g,sort:p}}function DR(){let s=new WeakMap;function t(r,l){const u=s.get(r);let f;return u===void 0?(f=new h0,s.set(r,[f])):l>=u.length?(f=new h0,u.push(f)):f=u[l],f}function i(){s=new WeakMap}return{get:t,dispose:i}}function UR(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new st,color:new Ne};break;case"SpotLight":i={position:new st,direction:new st,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new st,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":i={direction:new st,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":i={color:new Ne,position:new st,halfWidth:new st,halfHeight:new st};break}return s[t.id]=i,i}}}function NR(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let LR=0;function OR(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function PR(s){const t=new UR,i=NR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new st);const l=new st,u=new cn,f=new cn;function h(p){let g=0,v=0,x=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let y=0,E=0,R=0,M=0,_=0,I=0,O=0,D=0,L=0,H=0,B=0;p.sort(OR);for(let w=0,C=p.length;w<C;w++){const V=p[w],nt=V.color,ut=V.intensity,vt=V.distance,lt=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)g+=nt.r*ut,v+=nt.g*ut,x+=nt.b*ut;else if(V.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(V.sh.coefficients[F],ut);B++}else if(V.isDirectionalLight){const F=t.get(V);if(F.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const j=V.shadow,q=i.get(V);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,r.directionalShadow[y]=q,r.directionalShadowMap[y]=lt,r.directionalShadowMatrix[y]=V.shadow.matrix,I++}r.directional[y]=F,y++}else if(V.isSpotLight){const F=t.get(V);F.position.setFromMatrixPosition(V.matrixWorld),F.color.copy(nt).multiplyScalar(ut),F.distance=vt,F.coneCos=Math.cos(V.angle),F.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),F.decay=V.decay,r.spot[R]=F;const j=V.shadow;if(V.map&&(r.spotLightMap[L]=V.map,L++,j.updateMatrices(V),V.castShadow&&H++),r.spotLightMatrix[R]=j.matrix,V.castShadow){const q=i.get(V);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,r.spotShadow[R]=q,r.spotShadowMap[R]=lt,D++}R++}else if(V.isRectAreaLight){const F=t.get(V);F.color.copy(nt).multiplyScalar(ut),F.halfWidth.set(V.width*.5,0,0),F.halfHeight.set(0,V.height*.5,0),r.rectArea[M]=F,M++}else if(V.isPointLight){const F=t.get(V);if(F.color.copy(V.color).multiplyScalar(V.intensity),F.distance=V.distance,F.decay=V.decay,V.castShadow){const j=V.shadow,q=i.get(V);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,q.shadowCameraNear=j.camera.near,q.shadowCameraFar=j.camera.far,r.pointShadow[E]=q,r.pointShadowMap[E]=lt,r.pointShadowMatrix[E]=V.shadow.matrix,O++}r.point[E]=F,E++}else if(V.isHemisphereLight){const F=t.get(V);F.skyColor.copy(V.color).multiplyScalar(ut),F.groundColor.copy(V.groundColor).multiplyScalar(ut),r.hemi[_]=F,_++}}M>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ot.LTC_FLOAT_1,r.rectAreaLTC2=Ot.LTC_FLOAT_2):(r.rectAreaLTC1=Ot.LTC_HALF_1,r.rectAreaLTC2=Ot.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=x;const Z=r.hash;(Z.directionalLength!==y||Z.pointLength!==E||Z.spotLength!==R||Z.rectAreaLength!==M||Z.hemiLength!==_||Z.numDirectionalShadows!==I||Z.numPointShadows!==O||Z.numSpotShadows!==D||Z.numSpotMaps!==L||Z.numLightProbes!==B)&&(r.directional.length=y,r.spot.length=R,r.rectArea.length=M,r.point.length=E,r.hemi.length=_,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=O,r.pointShadowMap.length=O,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=O,r.spotLightMatrix.length=D+L-H,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=B,Z.directionalLength=y,Z.pointLength=E,Z.spotLength=R,Z.rectAreaLength=M,Z.hemiLength=_,Z.numDirectionalShadows=I,Z.numPointShadows=O,Z.numSpotShadows=D,Z.numSpotMaps=L,Z.numLightProbes=B,r.version=LR++)}function m(p,g){let v=0,x=0,y=0,E=0,R=0;const M=g.matrixWorldInverse;for(let _=0,I=p.length;_<I;_++){const O=p[_];if(O.isDirectionalLight){const D=r.directional[v];D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),v++}else if(O.isSpotLight){const D=r.spot[y];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),y++}else if(O.isRectAreaLight){const D=r.rectArea[E];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(M),f.identity(),u.copy(O.matrixWorld),u.premultiply(M),f.extractRotation(u),D.halfWidth.set(O.width*.5,0,0),D.halfHeight.set(0,O.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),E++}else if(O.isPointLight){const D=r.point[x];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(M),x++}else if(O.isHemisphereLight){const D=r.hemi[R];D.direction.setFromMatrixPosition(O.matrixWorld),D.direction.transformDirection(M),R++}}}return{setup:h,setupView:m,state:r}}function p0(s){const t=new PR(s),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function f(g){r.push(g)}function h(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:f}}function IR(s){let t=new WeakMap;function i(l,u=0){const f=t.get(l);let h;return f===void 0?(h=new p0(s),t.set(l,[h])):u>=f.length?(h=new p0(s),f.push(h)):h=f[u],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const FR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zR=`uniform sampler2D shadow_pass;
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
}`;function BR(s,t,i){let r=new xx;const l=new Be,u=new Be,f=new an,h=new fb({depthPacking:EE}),m=new db,p={},g=i.maxTextureSize,v={[Za]:kn,[kn]:Za,[sa]:sa},x=new Ka({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:FR,fragmentShader:zR}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const E=new pa;E.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new la(E,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=K0;let _=this.type;this.render=function(H,B,Z){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||H.length===0)return;const w=s.getRenderTarget(),C=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),nt=s.state;nt.setBlending(Ya),nt.buffers.depth.getReversed()===!0?nt.buffers.color.setClear(0,0,0,0):nt.buffers.color.setClear(1,1,1,1),nt.buffers.depth.setTest(!0),nt.setScissorTest(!1);const ut=_!==ra&&this.type===ra,vt=_===ra&&this.type!==ra;for(let lt=0,F=H.length;lt<F;lt++){const j=H[lt],q=j.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const xt=q.getFrameExtents();if(l.multiply(xt),u.copy(q.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/xt.x),l.x=u.x*xt.x,q.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/xt.y),l.y=u.y*xt.y,q.mapSize.y=u.y)),q.map===null||ut===!0||vt===!0){const J=this.type!==ra?{minFilter:bi,magFilter:bi}:{};q.map!==null&&q.map.dispose(),q.map=new Nr(l.x,l.y,J),q.map.texture.name=j.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();const U=q.getViewportCount();for(let J=0;J<U;J++){const _t=q.getViewport(J);f.set(u.x*_t.x,u.y*_t.y,u.x*_t.z,u.y*_t.w),nt.viewport(f),q.updateMatrices(j,J),r=q.getFrustum(),D(B,Z,q.camera,j,this.type)}q.isPointLightShadow!==!0&&this.type===ra&&I(q,Z),q.needsUpdate=!1}_=this.type,M.needsUpdate=!1,s.setRenderTarget(w,C,V)};function I(H,B){const Z=t.update(R);x.defines.VSM_SAMPLES!==H.blurSamples&&(x.defines.VSM_SAMPLES=H.blurSamples,y.defines.VSM_SAMPLES=H.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Nr(l.x,l.y)),x.uniforms.shadow_pass.value=H.map.texture,x.uniforms.resolution.value=H.mapSize,x.uniforms.radius.value=H.radius,s.setRenderTarget(H.mapPass),s.clear(),s.renderBufferDirect(B,null,Z,x,R,null),y.uniforms.shadow_pass.value=H.mapPass.texture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,s.setRenderTarget(H.map),s.clear(),s.renderBufferDirect(B,null,Z,y,R,null)}function O(H,B,Z,w){let C=null;const V=Z.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(V!==void 0)C=V;else if(C=Z.isPointLight===!0?m:h,s.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const nt=C.uuid,ut=B.uuid;let vt=p[nt];vt===void 0&&(vt={},p[nt]=vt);let lt=vt[ut];lt===void 0&&(lt=C.clone(),vt[ut]=lt,B.addEventListener("dispose",L)),C=lt}if(C.visible=B.visible,C.wireframe=B.wireframe,w===ra?C.side=B.shadowSide!==null?B.shadowSide:B.side:C.side=B.shadowSide!==null?B.shadowSide:v[B.side],C.alphaMap=B.alphaMap,C.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,C.map=B.map,C.clipShadows=B.clipShadows,C.clippingPlanes=B.clippingPlanes,C.clipIntersection=B.clipIntersection,C.displacementMap=B.displacementMap,C.displacementScale=B.displacementScale,C.displacementBias=B.displacementBias,C.wireframeLinewidth=B.wireframeLinewidth,C.linewidth=B.linewidth,Z.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const nt=s.properties.get(C);nt.light=Z}return C}function D(H,B,Z,w,C){if(H.visible===!1)return;if(H.layers.test(B.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&C===ra)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,H.matrixWorld);const ut=t.update(H),vt=H.material;if(Array.isArray(vt)){const lt=ut.groups;for(let F=0,j=lt.length;F<j;F++){const q=lt[F],xt=vt[q.materialIndex];if(xt&&xt.visible){const U=O(H,xt,w,C);H.onBeforeShadow(s,H,B,Z,ut,U,q),s.renderBufferDirect(Z,null,ut,U,H,q),H.onAfterShadow(s,H,B,Z,ut,U,q)}}}else if(vt.visible){const lt=O(H,vt,w,C);H.onBeforeShadow(s,H,B,Z,ut,lt,null),s.renderBufferDirect(Z,null,ut,lt,H,null),H.onAfterShadow(s,H,B,Z,ut,lt,null)}}const nt=H.children;for(let ut=0,vt=nt.length;ut<vt;ut++)D(nt[ut],B,Z,w,C)}function L(H){H.target.removeEventListener("dispose",L);for(const Z in p){const w=p[Z],C=H.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const HR={[dh]:hh,[ph]:vh,[mh]:_h,[Fs]:gh,[hh]:dh,[vh]:ph,[_h]:mh,[gh]:Fs};function GR(s,t){function i(){let k=!1;const bt=new an;let Ct=null;const Ft=new an(0,0,0,0);return{setMask:function(Mt){Ct!==Mt&&!k&&(s.colorMask(Mt,Mt,Mt,Mt),Ct=Mt)},setLocked:function(Mt){k=Mt},setClear:function(Mt,gt,Gt,re,we){we===!0&&(Mt*=re,gt*=re,Gt*=re),bt.set(Mt,gt,Gt,re),Ft.equals(bt)===!1&&(s.clearColor(Mt,gt,Gt,re),Ft.copy(bt))},reset:function(){k=!1,Ct=null,Ft.set(-1,0,0,0)}}}function r(){let k=!1,bt=!1,Ct=null,Ft=null,Mt=null;return{setReversed:function(gt){if(bt!==gt){const Gt=t.get("EXT_clip_control");gt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),bt=gt;const re=Mt;Mt=null,this.setClear(re)}},getReversed:function(){return bt},setTest:function(gt){gt?mt(s.DEPTH_TEST):At(s.DEPTH_TEST)},setMask:function(gt){Ct!==gt&&!k&&(s.depthMask(gt),Ct=gt)},setFunc:function(gt){if(bt&&(gt=HR[gt]),Ft!==gt){switch(gt){case dh:s.depthFunc(s.NEVER);break;case hh:s.depthFunc(s.ALWAYS);break;case ph:s.depthFunc(s.LESS);break;case Fs:s.depthFunc(s.LEQUAL);break;case mh:s.depthFunc(s.EQUAL);break;case gh:s.depthFunc(s.GEQUAL);break;case vh:s.depthFunc(s.GREATER);break;case _h:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ft=gt}},setLocked:function(gt){k=gt},setClear:function(gt){Mt!==gt&&(bt&&(gt=1-gt),s.clearDepth(gt),Mt=gt)},reset:function(){k=!1,Ct=null,Ft=null,Mt=null,bt=!1}}}function l(){let k=!1,bt=null,Ct=null,Ft=null,Mt=null,gt=null,Gt=null,re=null,we=null;return{setTest:function(be){k||(be?mt(s.STENCIL_TEST):At(s.STENCIL_TEST))},setMask:function(be){bt!==be&&!k&&(s.stencilMask(be),bt=be)},setFunc:function(be,hi,fn){(Ct!==be||Ft!==hi||Mt!==fn)&&(s.stencilFunc(be,hi,fn),Ct=be,Ft=hi,Mt=fn)},setOp:function(be,hi,fn){(gt!==be||Gt!==hi||re!==fn)&&(s.stencilOp(be,hi,fn),gt=be,Gt=hi,re=fn)},setLocked:function(be){k=be},setClear:function(be){we!==be&&(s.clearStencil(be),we=be)},reset:function(){k=!1,bt=null,Ct=null,Ft=null,Mt=null,gt=null,Gt=null,re=null,we=null}}}const u=new i,f=new r,h=new l,m=new WeakMap,p=new WeakMap;let g={},v={},x=new WeakMap,y=[],E=null,R=!1,M=null,_=null,I=null,O=null,D=null,L=null,H=null,B=new Ne(0,0,0),Z=0,w=!1,C=null,V=null,nt=null,ut=null,vt=null;const lt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,j=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(q)[1]),F=j>=1):q.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),F=j>=2);let xt=null,U={};const J=s.getParameter(s.SCISSOR_BOX),_t=s.getParameter(s.VIEWPORT),yt=new an().fromArray(J),Ut=new an().fromArray(_t);function Ht(k,bt,Ct,Ft){const Mt=new Uint8Array(4),gt=s.createTexture();s.bindTexture(k,gt),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Gt=0;Gt<Ct;Gt++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(bt,0,s.RGBA,1,1,Ft,0,s.RGBA,s.UNSIGNED_BYTE,Mt):s.texImage2D(bt+Gt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Mt);return gt}const tt={};tt[s.TEXTURE_2D]=Ht(s.TEXTURE_2D,s.TEXTURE_2D,1),tt[s.TEXTURE_CUBE_MAP]=Ht(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[s.TEXTURE_2D_ARRAY]=Ht(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),tt[s.TEXTURE_3D]=Ht(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),h.setClear(0),mt(s.DEPTH_TEST),f.setFunc(Fs),ie(!1),Pt(x_),mt(s.CULL_FACE),Le(Ya);function mt(k){g[k]!==!0&&(s.enable(k),g[k]=!0)}function At(k){g[k]!==!1&&(s.disable(k),g[k]=!1)}function Qt(k,bt){return v[k]!==bt?(s.bindFramebuffer(k,bt),v[k]=bt,k===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=bt),k===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=bt),!0):!1}function qt(k,bt){let Ct=y,Ft=!1;if(k){Ct=x.get(bt),Ct===void 0&&(Ct=[],x.set(bt,Ct));const Mt=k.textures;if(Ct.length!==Mt.length||Ct[0]!==s.COLOR_ATTACHMENT0){for(let gt=0,Gt=Mt.length;gt<Gt;gt++)Ct[gt]=s.COLOR_ATTACHMENT0+gt;Ct.length=Mt.length,Ft=!0}}else Ct[0]!==s.BACK&&(Ct[0]=s.BACK,Ft=!0);Ft&&s.drawBuffers(Ct)}function me(k){return E!==k?(s.useProgram(k),E=k,!0):!1}const rn={[Tr]:s.FUNC_ADD,[ZM]:s.FUNC_SUBTRACT,[KM]:s.FUNC_REVERSE_SUBTRACT};rn[QM]=s.MIN,rn[JM]=s.MAX;const z={[$M]:s.ZERO,[tE]:s.ONE,[eE]:s.SRC_COLOR,[ch]:s.SRC_ALPHA,[oE]:s.SRC_ALPHA_SATURATE,[rE]:s.DST_COLOR,[iE]:s.DST_ALPHA,[nE]:s.ONE_MINUS_SRC_COLOR,[fh]:s.ONE_MINUS_SRC_ALPHA,[sE]:s.ONE_MINUS_DST_COLOR,[aE]:s.ONE_MINUS_DST_ALPHA,[lE]:s.CONSTANT_COLOR,[uE]:s.ONE_MINUS_CONSTANT_COLOR,[cE]:s.CONSTANT_ALPHA,[fE]:s.ONE_MINUS_CONSTANT_ALPHA};function Le(k,bt,Ct,Ft,Mt,gt,Gt,re,we,be){if(k===Ya){R===!0&&(At(s.BLEND),R=!1);return}if(R===!1&&(mt(s.BLEND),R=!0),k!==jM){if(k!==M||be!==w){if((_!==Tr||D!==Tr)&&(s.blendEquation(s.FUNC_ADD),_=Tr,D=Tr),be)switch(k){case Os:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case uh:s.blendFunc(s.ONE,s.ONE);break;case y_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case S_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Os:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case uh:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case y_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case S_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}I=null,O=null,L=null,H=null,B.set(0,0,0),Z=0,M=k,w=be}return}Mt=Mt||bt,gt=gt||Ct,Gt=Gt||Ft,(bt!==_||Mt!==D)&&(s.blendEquationSeparate(rn[bt],rn[Mt]),_=bt,D=Mt),(Ct!==I||Ft!==O||gt!==L||Gt!==H)&&(s.blendFuncSeparate(z[Ct],z[Ft],z[gt],z[Gt]),I=Ct,O=Ft,L=gt,H=Gt),(re.equals(B)===!1||we!==Z)&&(s.blendColor(re.r,re.g,re.b,we),B.copy(re),Z=we),M=k,w=!1}function se(k,bt){k.side===sa?At(s.CULL_FACE):mt(s.CULL_FACE);let Ct=k.side===kn;bt&&(Ct=!Ct),ie(Ct),k.blending===Os&&k.transparent===!1?Le(Ya):Le(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),f.setFunc(k.depthFunc),f.setTest(k.depthTest),f.setMask(k.depthWrite),u.setMask(k.colorWrite);const Ft=k.stencilWrite;h.setTest(Ft),Ft&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Vt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?mt(s.SAMPLE_ALPHA_TO_COVERAGE):At(s.SAMPLE_ALPHA_TO_COVERAGE)}function ie(k){C!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),C=k)}function Pt(k){k!==WM?(mt(s.CULL_FACE),k!==V&&(k===x_?s.cullFace(s.BACK):k===qM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):At(s.CULL_FACE),V=k}function Ve(k){k!==nt&&(F&&s.lineWidth(k),nt=k)}function Vt(k,bt,Ct){k?(mt(s.POLYGON_OFFSET_FILL),(ut!==bt||vt!==Ct)&&(s.polygonOffset(bt,Ct),ut=bt,vt=Ct)):At(s.POLYGON_OFFSET_FILL)}function oe(k){k?mt(s.SCISSOR_TEST):At(s.SCISSOR_TEST)}function je(k){k===void 0&&(k=s.TEXTURE0+lt-1),xt!==k&&(s.activeTexture(k),xt=k)}function Ze(k,bt,Ct){Ct===void 0&&(xt===null?Ct=s.TEXTURE0+lt-1:Ct=xt);let Ft=U[Ct];Ft===void 0&&(Ft={type:void 0,texture:void 0},U[Ct]=Ft),(Ft.type!==k||Ft.texture!==bt)&&(xt!==Ct&&(s.activeTexture(Ct),xt=Ct),s.bindTexture(k,bt||tt[k]),Ft.type=k,Ft.texture=bt)}function N(){const k=U[xt];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function b(){try{s.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $(){try{s.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ct(){try{s.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ht(){try{s.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ot(){try{s.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function It(){try{s.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Rt(){try{s.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Xt(){try{s.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Yt(){try{s.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function St(){try{s.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Nt(k){yt.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),yt.copy(k))}function Zt(k){Ut.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),Ut.copy(k))}function kt(k,bt){let Ct=p.get(bt);Ct===void 0&&(Ct=new WeakMap,p.set(bt,Ct));let Ft=Ct.get(k);Ft===void 0&&(Ft=s.getUniformBlockIndex(bt,k.name),Ct.set(k,Ft))}function wt(k,bt){const Ft=p.get(bt).get(k);m.get(bt)!==Ft&&(s.uniformBlockBinding(bt,Ft,k.__bindingPointIndex),m.set(bt,Ft))}function le(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},xt=null,U={},v={},x=new WeakMap,y=[],E=null,R=!1,M=null,_=null,I=null,O=null,D=null,L=null,H=null,B=new Ne(0,0,0),Z=0,w=!1,C=null,V=null,nt=null,ut=null,vt=null,yt.set(0,0,s.canvas.width,s.canvas.height),Ut.set(0,0,s.canvas.width,s.canvas.height),u.reset(),f.reset(),h.reset()}return{buffers:{color:u,depth:f,stencil:h},enable:mt,disable:At,bindFramebuffer:Qt,drawBuffers:qt,useProgram:me,setBlending:Le,setMaterial:se,setFlipSided:ie,setCullFace:Pt,setLineWidth:Ve,setPolygonOffset:Vt,setScissorTest:oe,activeTexture:je,bindTexture:Ze,unbindTexture:N,compressedTexImage2D:b,compressedTexImage3D:$,texImage2D:Yt,texImage3D:St,updateUBOMapping:kt,uniformBlockBinding:wt,texStorage2D:Rt,texStorage3D:Xt,texSubImage2D:ct,texSubImage3D:ht,compressedTexSubImage2D:ot,compressedTexSubImage3D:It,scissor:Nt,viewport:Zt,reset:le}}function VR(s,t,i,r,l,u,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Be,g=new WeakMap;let v;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,b){return y?new OffscreenCanvas(N,b):ac("canvas")}function R(N,b,$){let ct=1;const ht=Ze(N);if((ht.width>$||ht.height>$)&&(ct=$/Math.max(ht.width,ht.height)),ct<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ot=Math.floor(ct*ht.width),It=Math.floor(ct*ht.height);v===void 0&&(v=E(ot,It));const Rt=b?E(ot,It):v;return Rt.width=ot,Rt.height=It,Rt.getContext("2d").drawImage(N,0,0,ot,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+ot+"x"+It+")."),Rt}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),N;return N}function M(N){return N.generateMipmaps}function _(N){s.generateMipmap(N)}function I(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function O(N,b,$,ct,ht=!1){if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ot=b;if(b===s.RED&&($===s.FLOAT&&(ot=s.R32F),$===s.HALF_FLOAT&&(ot=s.R16F),$===s.UNSIGNED_BYTE&&(ot=s.R8)),b===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(ot=s.R8UI),$===s.UNSIGNED_SHORT&&(ot=s.R16UI),$===s.UNSIGNED_INT&&(ot=s.R32UI),$===s.BYTE&&(ot=s.R8I),$===s.SHORT&&(ot=s.R16I),$===s.INT&&(ot=s.R32I)),b===s.RG&&($===s.FLOAT&&(ot=s.RG32F),$===s.HALF_FLOAT&&(ot=s.RG16F),$===s.UNSIGNED_BYTE&&(ot=s.RG8)),b===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(ot=s.RG8UI),$===s.UNSIGNED_SHORT&&(ot=s.RG16UI),$===s.UNSIGNED_INT&&(ot=s.RG32UI),$===s.BYTE&&(ot=s.RG8I),$===s.SHORT&&(ot=s.RG16I),$===s.INT&&(ot=s.RG32I)),b===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(ot=s.RGB8UI),$===s.UNSIGNED_SHORT&&(ot=s.RGB16UI),$===s.UNSIGNED_INT&&(ot=s.RGB32UI),$===s.BYTE&&(ot=s.RGB8I),$===s.SHORT&&(ot=s.RGB16I),$===s.INT&&(ot=s.RGB32I)),b===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(ot=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(ot=s.RGBA16UI),$===s.UNSIGNED_INT&&(ot=s.RGBA32UI),$===s.BYTE&&(ot=s.RGBA8I),$===s.SHORT&&(ot=s.RGBA16I),$===s.INT&&(ot=s.RGBA32I)),b===s.RGB&&($===s.UNSIGNED_INT_5_9_9_9_REV&&(ot=s.RGB9_E5),$===s.UNSIGNED_INT_10F_11F_11F_REV&&(ot=s.R11F_G11F_B10F)),b===s.RGBA){const It=ht?nc:Re.getTransfer(ct);$===s.FLOAT&&(ot=s.RGBA32F),$===s.HALF_FLOAT&&(ot=s.RGBA16F),$===s.UNSIGNED_BYTE&&(ot=It===ze?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT_4_4_4_4&&(ot=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(ot=s.RGB5_A1)}return(ot===s.R16F||ot===s.R32F||ot===s.RG16F||ot===s.RG32F||ot===s.RGBA16F||ot===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function D(N,b){let $;return N?b===null||b===Ur||b===$o?$=s.DEPTH24_STENCIL8:b===oa?$=s.DEPTH32F_STENCIL8:b===Jo&&($=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ur||b===$o?$=s.DEPTH_COMPONENT24:b===oa?$=s.DEPTH_COMPONENT32F:b===Jo&&($=s.DEPTH_COMPONENT16),$}function L(N,b){return M(N)===!0||N.isFramebufferTexture&&N.minFilter!==bi&&N.minFilter!==Oi?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function H(N){const b=N.target;b.removeEventListener("dispose",H),Z(b),b.isVideoTexture&&g.delete(b)}function B(N){const b=N.target;b.removeEventListener("dispose",B),C(b)}function Z(N){const b=r.get(N);if(b.__webglInit===void 0)return;const $=N.source,ct=x.get($);if(ct){const ht=ct[b.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&w(N),Object.keys(ct).length===0&&x.delete($)}r.remove(N)}function w(N){const b=r.get(N);s.deleteTexture(b.__webglTexture);const $=N.source,ct=x.get($);delete ct[b.__cacheKey],f.memory.textures--}function C(N){const b=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(b.__webglFramebuffer[ct]))for(let ht=0;ht<b.__webglFramebuffer[ct].length;ht++)s.deleteFramebuffer(b.__webglFramebuffer[ct][ht]);else s.deleteFramebuffer(b.__webglFramebuffer[ct]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[ct])}else{if(Array.isArray(b.__webglFramebuffer))for(let ct=0;ct<b.__webglFramebuffer.length;ct++)s.deleteFramebuffer(b.__webglFramebuffer[ct]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ct=0;ct<b.__webglColorRenderbuffer.length;ct++)b.__webglColorRenderbuffer[ct]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[ct]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const $=N.textures;for(let ct=0,ht=$.length;ct<ht;ct++){const ot=r.get($[ct]);ot.__webglTexture&&(s.deleteTexture(ot.__webglTexture),f.memory.textures--),r.remove($[ct])}r.remove(N)}let V=0;function nt(){V=0}function ut(){const N=V;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),V+=1,N}function vt(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function lt(N,b){const $=r.get(N);if(N.isVideoTexture&&oe(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&$.__version!==N.version){const ct=N.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt($,N,b);return}}else N.isExternalTexture&&($.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+b)}function F(N,b){const $=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&$.__version!==N.version){tt($,N,b);return}i.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+b)}function j(N,b){const $=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&$.__version!==N.version){tt($,N,b);return}i.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+b)}function q(N,b){const $=r.get(N);if(N.version>0&&$.__version!==N.version){mt($,N,b);return}i.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+b)}const xt={[Sh]:s.REPEAT,[Rr]:s.CLAMP_TO_EDGE,[Mh]:s.MIRRORED_REPEAT},U={[bi]:s.NEAREST,[SE]:s.NEAREST_MIPMAP_NEAREST,[Mu]:s.NEAREST_MIPMAP_LINEAR,[Oi]:s.LINEAR,[Td]:s.LINEAR_MIPMAP_NEAREST,[Cr]:s.LINEAR_MIPMAP_LINEAR},J={[AE]:s.NEVER,[NE]:s.ALWAYS,[RE]:s.LESS,[ox]:s.LEQUAL,[CE]:s.EQUAL,[UE]:s.GEQUAL,[wE]:s.GREATER,[DE]:s.NOTEQUAL};function _t(N,b){if(b.type===oa&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Oi||b.magFilter===Td||b.magFilter===Mu||b.magFilter===Cr||b.minFilter===Oi||b.minFilter===Td||b.minFilter===Mu||b.minFilter===Cr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,xt[b.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,xt[b.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,xt[b.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,U[b.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,U[b.minFilter]),b.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,J[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===bi||b.minFilter!==Mu&&b.minFilter!==Cr||b.type===oa&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");s.texParameterf(N,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function yt(N,b){let $=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",H));const ct=b.source;let ht=x.get(ct);ht===void 0&&(ht={},x.set(ct,ht));const ot=vt(b);if(ot!==N.__cacheKey){ht[ot]===void 0&&(ht[ot]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,$=!0),ht[ot].usedTimes++;const It=ht[N.__cacheKey];It!==void 0&&(ht[N.__cacheKey].usedTimes--,It.usedTimes===0&&w(b)),N.__cacheKey=ot,N.__webglTexture=ht[ot].texture}return $}function Ut(N,b,$){return Math.floor(Math.floor(N/$)/b)}function Ht(N,b,$,ct){const ot=N.updateRanges;if(ot.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,$,ct,b.data);else{ot.sort((St,Nt)=>St.start-Nt.start);let It=0;for(let St=1;St<ot.length;St++){const Nt=ot[It],Zt=ot[St],kt=Nt.start+Nt.count,wt=Ut(Zt.start,b.width,4),le=Ut(Nt.start,b.width,4);Zt.start<=kt+1&&wt===le&&Ut(Zt.start+Zt.count-1,b.width,4)===wt?Nt.count=Math.max(Nt.count,Zt.start+Zt.count-Nt.start):(++It,ot[It]=Zt)}ot.length=It+1;const Rt=s.getParameter(s.UNPACK_ROW_LENGTH),Xt=s.getParameter(s.UNPACK_SKIP_PIXELS),Yt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let St=0,Nt=ot.length;St<Nt;St++){const Zt=ot[St],kt=Math.floor(Zt.start/4),wt=Math.ceil(Zt.count/4),le=kt%b.width,k=Math.floor(kt/b.width),bt=wt,Ct=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,le),s.pixelStorei(s.UNPACK_SKIP_ROWS,k),i.texSubImage2D(s.TEXTURE_2D,0,le,k,bt,Ct,$,ct,b.data)}N.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Rt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Xt),s.pixelStorei(s.UNPACK_SKIP_ROWS,Yt)}}function tt(N,b,$){let ct=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ct=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ct=s.TEXTURE_3D);const ht=yt(N,b),ot=b.source;i.bindTexture(ct,N.__webglTexture,s.TEXTURE0+$);const It=r.get(ot);if(ot.version!==It.__version||ht===!0){i.activeTexture(s.TEXTURE0+$);const Rt=Re.getPrimaries(Re.workingColorSpace),Xt=b.colorSpace===qa?null:Re.getPrimaries(b.colorSpace),Yt=b.colorSpace===qa||Rt===Xt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let St=R(b.image,!1,l.maxTextureSize);St=je(b,St);const Nt=u.convert(b.format,b.colorSpace),Zt=u.convert(b.type);let kt=O(b.internalFormat,Nt,Zt,b.colorSpace,b.isVideoTexture);_t(ct,b);let wt;const le=b.mipmaps,k=b.isVideoTexture!==!0,bt=It.__version===void 0||ht===!0,Ct=ot.dataReady,Ft=L(b,St);if(b.isDepthTexture)kt=D(b.format===el,b.type),bt&&(k?i.texStorage2D(s.TEXTURE_2D,1,kt,St.width,St.height):i.texImage2D(s.TEXTURE_2D,0,kt,St.width,St.height,0,Nt,Zt,null));else if(b.isDataTexture)if(le.length>0){k&&bt&&i.texStorage2D(s.TEXTURE_2D,Ft,kt,le[0].width,le[0].height);for(let Mt=0,gt=le.length;Mt<gt;Mt++)wt=le[Mt],k?Ct&&i.texSubImage2D(s.TEXTURE_2D,Mt,0,0,wt.width,wt.height,Nt,Zt,wt.data):i.texImage2D(s.TEXTURE_2D,Mt,kt,wt.width,wt.height,0,Nt,Zt,wt.data);b.generateMipmaps=!1}else k?(bt&&i.texStorage2D(s.TEXTURE_2D,Ft,kt,St.width,St.height),Ct&&Ht(b,St,Nt,Zt)):i.texImage2D(s.TEXTURE_2D,0,kt,St.width,St.height,0,Nt,Zt,St.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){k&&bt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ft,kt,le[0].width,le[0].height,St.depth);for(let Mt=0,gt=le.length;Mt<gt;Mt++)if(wt=le[Mt],b.format!==Mi)if(Nt!==null)if(k){if(Ct)if(b.layerUpdates.size>0){const Gt=X_(wt.width,wt.height,b.format,b.type);for(const re of b.layerUpdates){const we=wt.data.subarray(re*Gt/wt.data.BYTES_PER_ELEMENT,(re+1)*Gt/wt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Mt,0,0,re,wt.width,wt.height,1,Nt,we)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Mt,0,0,0,wt.width,wt.height,St.depth,Nt,wt.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Mt,kt,wt.width,wt.height,St.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Ct&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Mt,0,0,0,wt.width,wt.height,St.depth,Nt,Zt,wt.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Mt,kt,wt.width,wt.height,St.depth,0,Nt,Zt,wt.data)}else{k&&bt&&i.texStorage2D(s.TEXTURE_2D,Ft,kt,le[0].width,le[0].height);for(let Mt=0,gt=le.length;Mt<gt;Mt++)wt=le[Mt],b.format!==Mi?Nt!==null?k?Ct&&i.compressedTexSubImage2D(s.TEXTURE_2D,Mt,0,0,wt.width,wt.height,Nt,wt.data):i.compressedTexImage2D(s.TEXTURE_2D,Mt,kt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Ct&&i.texSubImage2D(s.TEXTURE_2D,Mt,0,0,wt.width,wt.height,Nt,Zt,wt.data):i.texImage2D(s.TEXTURE_2D,Mt,kt,wt.width,wt.height,0,Nt,Zt,wt.data)}else if(b.isDataArrayTexture)if(k){if(bt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ft,kt,St.width,St.height,St.depth),Ct)if(b.layerUpdates.size>0){const Mt=X_(St.width,St.height,b.format,b.type);for(const gt of b.layerUpdates){const Gt=St.data.subarray(gt*Mt/St.data.BYTES_PER_ELEMENT,(gt+1)*Mt/St.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,gt,St.width,St.height,1,Nt,Zt,Gt)}b.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,Nt,Zt,St.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,kt,St.width,St.height,St.depth,0,Nt,Zt,St.data);else if(b.isData3DTexture)k?(bt&&i.texStorage3D(s.TEXTURE_3D,Ft,kt,St.width,St.height,St.depth),Ct&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,Nt,Zt,St.data)):i.texImage3D(s.TEXTURE_3D,0,kt,St.width,St.height,St.depth,0,Nt,Zt,St.data);else if(b.isFramebufferTexture){if(bt)if(k)i.texStorage2D(s.TEXTURE_2D,Ft,kt,St.width,St.height);else{let Mt=St.width,gt=St.height;for(let Gt=0;Gt<Ft;Gt++)i.texImage2D(s.TEXTURE_2D,Gt,kt,Mt,gt,0,Nt,Zt,null),Mt>>=1,gt>>=1}}else if(le.length>0){if(k&&bt){const Mt=Ze(le[0]);i.texStorage2D(s.TEXTURE_2D,Ft,kt,Mt.width,Mt.height)}for(let Mt=0,gt=le.length;Mt<gt;Mt++)wt=le[Mt],k?Ct&&i.texSubImage2D(s.TEXTURE_2D,Mt,0,0,Nt,Zt,wt):i.texImage2D(s.TEXTURE_2D,Mt,kt,Nt,Zt,wt);b.generateMipmaps=!1}else if(k){if(bt){const Mt=Ze(St);i.texStorage2D(s.TEXTURE_2D,Ft,kt,Mt.width,Mt.height)}Ct&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Nt,Zt,St)}else i.texImage2D(s.TEXTURE_2D,0,kt,Nt,Zt,St);M(b)&&_(ct),It.__version=ot.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function mt(N,b,$){if(b.image.length!==6)return;const ct=yt(N,b),ht=b.source;i.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+$);const ot=r.get(ht);if(ht.version!==ot.__version||ct===!0){i.activeTexture(s.TEXTURE0+$);const It=Re.getPrimaries(Re.workingColorSpace),Rt=b.colorSpace===qa?null:Re.getPrimaries(b.colorSpace),Xt=b.colorSpace===qa||It===Rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);const Yt=b.isCompressedTexture||b.image[0].isCompressedTexture,St=b.image[0]&&b.image[0].isDataTexture,Nt=[];for(let gt=0;gt<6;gt++)!Yt&&!St?Nt[gt]=R(b.image[gt],!0,l.maxCubemapSize):Nt[gt]=St?b.image[gt].image:b.image[gt],Nt[gt]=je(b,Nt[gt]);const Zt=Nt[0],kt=u.convert(b.format,b.colorSpace),wt=u.convert(b.type),le=O(b.internalFormat,kt,wt,b.colorSpace),k=b.isVideoTexture!==!0,bt=ot.__version===void 0||ct===!0,Ct=ht.dataReady;let Ft=L(b,Zt);_t(s.TEXTURE_CUBE_MAP,b);let Mt;if(Yt){k&&bt&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Ft,le,Zt.width,Zt.height);for(let gt=0;gt<6;gt++){Mt=Nt[gt].mipmaps;for(let Gt=0;Gt<Mt.length;Gt++){const re=Mt[Gt];b.format!==Mi?kt!==null?k?Ct&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Gt,0,0,re.width,re.height,kt,re.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Gt,le,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Ct&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Gt,0,0,re.width,re.height,kt,wt,re.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Gt,le,re.width,re.height,0,kt,wt,re.data)}}}else{if(Mt=b.mipmaps,k&&bt){Mt.length>0&&Ft++;const gt=Ze(Nt[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Ft,le,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(St){k?Ct&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Nt[gt].width,Nt[gt].height,kt,wt,Nt[gt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,le,Nt[gt].width,Nt[gt].height,0,kt,wt,Nt[gt].data);for(let Gt=0;Gt<Mt.length;Gt++){const we=Mt[Gt].image[gt].image;k?Ct&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Gt+1,0,0,we.width,we.height,kt,wt,we.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Gt+1,le,we.width,we.height,0,kt,wt,we.data)}}else{k?Ct&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,kt,wt,Nt[gt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,le,kt,wt,Nt[gt]);for(let Gt=0;Gt<Mt.length;Gt++){const re=Mt[Gt];k?Ct&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Gt+1,0,0,kt,wt,re.image[gt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Gt+1,le,kt,wt,re.image[gt])}}}M(b)&&_(s.TEXTURE_CUBE_MAP),ot.__version=ht.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function At(N,b,$,ct,ht,ot){const It=u.convert($.format,$.colorSpace),Rt=u.convert($.type),Xt=O($.internalFormat,It,Rt,$.colorSpace),Yt=r.get(b),St=r.get($);if(St.__renderTarget=b,!Yt.__hasExternalTextures){const Nt=Math.max(1,b.width>>ot),Zt=Math.max(1,b.height>>ot);ht===s.TEXTURE_3D||ht===s.TEXTURE_2D_ARRAY?i.texImage3D(ht,ot,Xt,Nt,Zt,b.depth,0,It,Rt,null):i.texImage2D(ht,ot,Xt,Nt,Zt,0,It,Rt,null)}i.bindFramebuffer(s.FRAMEBUFFER,N),Vt(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ct,ht,St.__webglTexture,0,Ve(b)):(ht===s.TEXTURE_2D||ht>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ct,ht,St.__webglTexture,ot),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Qt(N,b,$){if(s.bindRenderbuffer(s.RENDERBUFFER,N),b.depthBuffer){const ct=b.depthTexture,ht=ct&&ct.isDepthTexture?ct.type:null,ot=D(b.stencilBuffer,ht),It=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Rt=Ve(b);Vt(b)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Rt,ot,b.width,b.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,Rt,ot,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ot,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,It,s.RENDERBUFFER,N)}else{const ct=b.textures;for(let ht=0;ht<ct.length;ht++){const ot=ct[ht],It=u.convert(ot.format,ot.colorSpace),Rt=u.convert(ot.type),Xt=O(ot.internalFormat,It,Rt,ot.colorSpace),Yt=Ve(b);$&&Vt(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Yt,Xt,b.width,b.height):Vt(b)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Yt,Xt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Xt,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function qt(N,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ct=r.get(b.depthTexture);ct.__renderTarget=b,(!ct.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),lt(b.depthTexture,0);const ht=ct.__webglTexture,ot=Ve(b);if(b.depthTexture.format===tl)Vt(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ht,0,ot):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ht,0);else if(b.depthTexture.format===el)Vt(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ht,0,ot):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function me(N){const b=r.get(N),$=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){const ct=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ct){const ht=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ct.removeEventListener("dispose",ht)};ct.addEventListener("dispose",ht),b.__depthDisposeCallback=ht}b.__boundDepthTexture=ct}if(N.depthTexture&&!b.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const ct=N.texture.mipmaps;ct&&ct.length>0?qt(b.__webglFramebuffer[0],N):qt(b.__webglFramebuffer,N)}else if($){b.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[ct]),b.__webglDepthbuffer[ct]===void 0)b.__webglDepthbuffer[ct]=s.createRenderbuffer(),Qt(b.__webglDepthbuffer[ct],N,!1);else{const ht=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=b.__webglDepthbuffer[ct];s.bindRenderbuffer(s.RENDERBUFFER,ot),s.framebufferRenderbuffer(s.FRAMEBUFFER,ht,s.RENDERBUFFER,ot)}}else{const ct=N.texture.mipmaps;if(ct&&ct.length>0?i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Qt(b.__webglDepthbuffer,N,!1);else{const ht=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ot),s.framebufferRenderbuffer(s.FRAMEBUFFER,ht,s.RENDERBUFFER,ot)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function rn(N,b,$){const ct=r.get(N);b!==void 0&&At(ct.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&me(N)}function z(N){const b=N.texture,$=r.get(N),ct=r.get(b);N.addEventListener("dispose",B);const ht=N.textures,ot=N.isWebGLCubeRenderTarget===!0,It=ht.length>1;if(It||(ct.__webglTexture===void 0&&(ct.__webglTexture=s.createTexture()),ct.__version=b.version,f.memory.textures++),ot){$.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer[Rt]=[];for(let Xt=0;Xt<b.mipmaps.length;Xt++)$.__webglFramebuffer[Rt][Xt]=s.createFramebuffer()}else $.__webglFramebuffer[Rt]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer=[];for(let Rt=0;Rt<b.mipmaps.length;Rt++)$.__webglFramebuffer[Rt]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(It)for(let Rt=0,Xt=ht.length;Rt<Xt;Rt++){const Yt=r.get(ht[Rt]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=s.createTexture(),f.memory.textures++)}if(N.samples>0&&Vt(N)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Rt=0;Rt<ht.length;Rt++){const Xt=ht[Rt];$.__webglColorRenderbuffer[Rt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[Rt]);const Yt=u.convert(Xt.format,Xt.colorSpace),St=u.convert(Xt.type),Nt=O(Xt.internalFormat,Yt,St,Xt.colorSpace,N.isXRRenderTarget===!0),Zt=Ve(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,Zt,Nt,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.RENDERBUFFER,$.__webglColorRenderbuffer[Rt])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),Qt($.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ot){i.bindTexture(s.TEXTURE_CUBE_MAP,ct.__webglTexture),_t(s.TEXTURE_CUBE_MAP,b);for(let Rt=0;Rt<6;Rt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Xt=0;Xt<b.mipmaps.length;Xt++)At($.__webglFramebuffer[Rt][Xt],N,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Xt);else At($.__webglFramebuffer[Rt],N,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);M(b)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(It){for(let Rt=0,Xt=ht.length;Rt<Xt;Rt++){const Yt=ht[Rt],St=r.get(Yt);let Nt=s.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Nt=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Nt,St.__webglTexture),_t(Nt,Yt),At($.__webglFramebuffer,N,Yt,s.COLOR_ATTACHMENT0+Rt,Nt,0),M(Yt)&&_(Nt)}i.unbindTexture()}else{let Rt=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Rt=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Rt,ct.__webglTexture),_t(Rt,b),b.mipmaps&&b.mipmaps.length>0)for(let Xt=0;Xt<b.mipmaps.length;Xt++)At($.__webglFramebuffer[Xt],N,b,s.COLOR_ATTACHMENT0,Rt,Xt);else At($.__webglFramebuffer,N,b,s.COLOR_ATTACHMENT0,Rt,0);M(b)&&_(Rt),i.unbindTexture()}N.depthBuffer&&me(N)}function Le(N){const b=N.textures;for(let $=0,ct=b.length;$<ct;$++){const ht=b[$];if(M(ht)){const ot=I(N),It=r.get(ht).__webglTexture;i.bindTexture(ot,It),_(ot),i.unbindTexture()}}}const se=[],ie=[];function Pt(N){if(N.samples>0){if(Vt(N)===!1){const b=N.textures,$=N.width,ct=N.height;let ht=s.COLOR_BUFFER_BIT;const ot=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,It=r.get(N),Rt=b.length>1;if(Rt)for(let Yt=0;Yt<b.length;Yt++)i.bindFramebuffer(s.FRAMEBUFFER,It.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Yt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,It.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Yt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer);const Xt=N.texture.mipmaps;Xt&&Xt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,It.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Yt=0;Yt<b.length;Yt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ht|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ht|=s.STENCIL_BUFFER_BIT)),Rt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,It.__webglColorRenderbuffer[Yt]);const St=r.get(b[Yt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,St,0)}s.blitFramebuffer(0,0,$,ct,0,0,$,ct,ht,s.NEAREST),m===!0&&(se.length=0,ie.length=0,se.push(s.COLOR_ATTACHMENT0+Yt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(se.push(ot),ie.push(ot),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ie)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,se))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Rt)for(let Yt=0;Yt<b.length;Yt++){i.bindFramebuffer(s.FRAMEBUFFER,It.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Yt,s.RENDERBUFFER,It.__webglColorRenderbuffer[Yt]);const St=r.get(b[Yt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,It.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Yt,s.TEXTURE_2D,St,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const b=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Ve(N){return Math.min(l.maxSamples,N.samples)}function Vt(N){const b=r.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function oe(N){const b=f.render.frame;g.get(N)!==b&&(g.set(N,b),N.update())}function je(N,b){const $=N.colorSpace,ct=N.format,ht=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||$!==Hs&&$!==qa&&(Re.getTransfer($)===ze?(ct!==Mi||ht!==ca)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),b}function Ze(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=ut,this.resetTextureUnits=nt,this.setTexture2D=lt,this.setTexture2DArray=F,this.setTexture3D=j,this.setTextureCube=q,this.rebindTextures=rn,this.setupRenderTarget=z,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=At,this.useMultisampledRTT=Vt}function kR(s,t){function i(r,l=qa){let u;const f=Re.getTransfer(l);if(r===ca)return s.UNSIGNED_BYTE;if(r===_p)return s.UNSIGNED_SHORT_4_4_4_4;if(r===xp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===ex)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===nx)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===$0)return s.BYTE;if(r===tx)return s.SHORT;if(r===Jo)return s.UNSIGNED_SHORT;if(r===vp)return s.INT;if(r===Ur)return s.UNSIGNED_INT;if(r===oa)return s.FLOAT;if(r===al)return s.HALF_FLOAT;if(r===ix)return s.ALPHA;if(r===ax)return s.RGB;if(r===Mi)return s.RGBA;if(r===tl)return s.DEPTH_COMPONENT;if(r===el)return s.DEPTH_STENCIL;if(r===rx)return s.RED;if(r===yp)return s.RED_INTEGER;if(r===sx)return s.RG;if(r===Sp)return s.RG_INTEGER;if(r===Mp)return s.RGBA_INTEGER;if(r===ju||r===Zu||r===Ku||r===Qu)if(f===ze)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===ju)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Zu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ku)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Qu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===ju)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Zu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ku)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Qu)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Eh||r===bh||r===Th||r===Ah)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Eh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===bh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Th)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ah)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Rh||r===Ch||r===wh)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Rh||r===Ch)return f===ze?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===wh)return f===ze?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Dh||r===Uh||r===Nh||r===Lh||r===Oh||r===Ph||r===Ih||r===Fh||r===zh||r===Bh||r===Hh||r===Gh||r===Vh||r===kh)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Dh)return f===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Uh)return f===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Nh)return f===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Lh)return f===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Oh)return f===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ph)return f===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ih)return f===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Fh)return f===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===zh)return f===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Bh)return f===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Hh)return f===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Gh)return f===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Vh)return f===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===kh)return f===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Xh||r===Wh||r===qh)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===Xh)return f===ze?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Wh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===qh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Yh||r===jh||r===Zh||r===Kh)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===Yh)return u.COMPRESSED_RED_RGTC1_EXT;if(r===jh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Zh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Kh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===$o?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const XR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WR=`
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

}`;class qR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new Mx(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Ka({vertexShader:XR,fragmentShader:WR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new la(new cc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class YR extends ks{constructor(t,i){super();const r=this;let l=null,u=1,f=null,h="local-floor",m=1,p=null,g=null,v=null,x=null,y=null,E=null;const R=typeof XRWebGLBinding<"u",M=new qR,_={},I=i.getContextAttributes();let O=null,D=null;const L=[],H=[],B=new Be;let Z=null;const w=new fi;w.viewport=new an;const C=new fi;C.viewport=new an;const V=[w,C],nt=new pb;let ut=null,vt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let mt=L[tt];return mt===void 0&&(mt=new jd,L[tt]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(tt){let mt=L[tt];return mt===void 0&&(mt=new jd,L[tt]=mt),mt.getGripSpace()},this.getHand=function(tt){let mt=L[tt];return mt===void 0&&(mt=new jd,L[tt]=mt),mt.getHandSpace()};function lt(tt){const mt=H.indexOf(tt.inputSource);if(mt===-1)return;const At=L[mt];At!==void 0&&(At.update(tt.inputSource,tt.frame,p||f),At.dispatchEvent({type:tt.type,data:tt.inputSource}))}function F(){l.removeEventListener("select",lt),l.removeEventListener("selectstart",lt),l.removeEventListener("selectend",lt),l.removeEventListener("squeeze",lt),l.removeEventListener("squeezestart",lt),l.removeEventListener("squeezeend",lt),l.removeEventListener("end",F),l.removeEventListener("inputsourceschange",j);for(let tt=0;tt<L.length;tt++){const mt=H[tt];mt!==null&&(H[tt]=null,L[tt].disconnect(mt))}ut=null,vt=null,M.reset();for(const tt in _)delete _[tt];t.setRenderTarget(O),y=null,x=null,v=null,l=null,D=null,Ht.stop(),r.isPresenting=!1,t.setPixelRatio(Z),t.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){u=tt,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){h=tt,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(tt){p=tt},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return v===null&&R&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(tt){if(l=tt,l!==null){if(O=t.getRenderTarget(),l.addEventListener("select",lt),l.addEventListener("selectstart",lt),l.addEventListener("selectend",lt),l.addEventListener("squeeze",lt),l.addEventListener("squeezestart",lt),l.addEventListener("squeezeend",lt),l.addEventListener("end",F),l.addEventListener("inputsourceschange",j),I.xrCompatible!==!0&&await i.makeXRCompatible(),Z=t.getPixelRatio(),t.getSize(B),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,Qt=null,qt=null;I.depth&&(qt=I.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,At=I.stencil?el:tl,Qt=I.stencil?$o:Ur);const me={colorFormat:i.RGBA8,depthFormat:qt,scaleFactor:u};v=this.getBinding(),x=v.createProjectionLayer(me),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),D=new Nr(x.textureWidth,x.textureHeight,{format:Mi,type:ca,depthTexture:new Sx(x.textureWidth,x.textureHeight,Qt,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:I.stencil,colorSpace:t.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const At={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,At),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),D=new Nr(y.framebufferWidth,y.framebufferHeight,{format:Mi,type:ca,colorSpace:t.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),Ht.setContext(l),Ht.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function j(tt){for(let mt=0;mt<tt.removed.length;mt++){const At=tt.removed[mt],Qt=H.indexOf(At);Qt>=0&&(H[Qt]=null,L[Qt].disconnect(At))}for(let mt=0;mt<tt.added.length;mt++){const At=tt.added[mt];let Qt=H.indexOf(At);if(Qt===-1){for(let me=0;me<L.length;me++)if(me>=H.length){H.push(At),Qt=me;break}else if(H[me]===null){H[me]=At,Qt=me;break}if(Qt===-1)break}const qt=L[Qt];qt&&qt.connect(At)}}const q=new st,xt=new st;function U(tt,mt,At){q.setFromMatrixPosition(mt.matrixWorld),xt.setFromMatrixPosition(At.matrixWorld);const Qt=q.distanceTo(xt),qt=mt.projectionMatrix.elements,me=At.projectionMatrix.elements,rn=qt[14]/(qt[10]-1),z=qt[14]/(qt[10]+1),Le=(qt[9]+1)/qt[5],se=(qt[9]-1)/qt[5],ie=(qt[8]-1)/qt[0],Pt=(me[8]+1)/me[0],Ve=rn*ie,Vt=rn*Pt,oe=Qt/(-ie+Pt),je=oe*-ie;if(mt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(je),tt.translateZ(oe),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),qt[10]===-1)tt.projectionMatrix.copy(mt.projectionMatrix),tt.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{const Ze=rn+oe,N=z+oe,b=Ve-je,$=Vt+(Qt-je),ct=Le*z/N*Ze,ht=se*z/N*Ze;tt.projectionMatrix.makePerspective(b,$,ct,ht,Ze,N),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function J(tt,mt){mt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(mt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(l===null)return;let mt=tt.near,At=tt.far;M.texture!==null&&(M.depthNear>0&&(mt=M.depthNear),M.depthFar>0&&(At=M.depthFar)),nt.near=C.near=w.near=mt,nt.far=C.far=w.far=At,(ut!==nt.near||vt!==nt.far)&&(l.updateRenderState({depthNear:nt.near,depthFar:nt.far}),ut=nt.near,vt=nt.far),nt.layers.mask=tt.layers.mask|6,w.layers.mask=nt.layers.mask&3,C.layers.mask=nt.layers.mask&5;const Qt=tt.parent,qt=nt.cameras;J(nt,Qt);for(let me=0;me<qt.length;me++)J(qt[me],Qt);qt.length===2?U(nt,w,C):nt.projectionMatrix.copy(w.projectionMatrix),_t(tt,nt,Qt)};function _t(tt,mt,At){At===null?tt.matrix.copy(mt.matrixWorld):(tt.matrix.copy(At.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(mt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(mt.projectionMatrix),tt.projectionMatrixInverse.copy(mt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Qh*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return nt},this.getFoveation=function(){if(!(x===null&&y===null))return m},this.setFoveation=function(tt){m=tt,x!==null&&(x.fixedFoveation=tt),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=tt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(nt)},this.getCameraTexture=function(tt){return _[tt]};let yt=null;function Ut(tt,mt){if(g=mt.getViewerPose(p||f),E=mt,g!==null){const At=g.views;y!==null&&(t.setRenderTargetFramebuffer(D,y.framebuffer),t.setRenderTarget(D));let Qt=!1;At.length!==nt.cameras.length&&(nt.cameras.length=0,Qt=!0);for(let z=0;z<At.length;z++){const Le=At[z];let se=null;if(y!==null)se=y.getViewport(Le);else{const Pt=v.getViewSubImage(x,Le);se=Pt.viewport,z===0&&(t.setRenderTargetTextures(D,Pt.colorTexture,Pt.depthStencilTexture),t.setRenderTarget(D))}let ie=V[z];ie===void 0&&(ie=new fi,ie.layers.enable(z),ie.viewport=new an,V[z]=ie),ie.matrix.fromArray(Le.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(Le.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(se.x,se.y,se.width,se.height),z===0&&(nt.matrix.copy(ie.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale)),Qt===!0&&nt.cameras.push(ie)}const qt=l.enabledFeatures;if(qt&&qt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){v=r.getBinding();const z=v.getDepthInformation(At[0]);z&&z.isValid&&z.texture&&M.init(z,l.renderState)}if(qt&&qt.includes("camera-access")&&R){t.state.unbindTexture(),v=r.getBinding();for(let z=0;z<At.length;z++){const Le=At[z].camera;if(Le){let se=_[Le];se||(se=new Mx,_[Le]=se);const ie=v.getCameraImage(Le);se.sourceTexture=ie}}}}for(let At=0;At<L.length;At++){const Qt=H[At],qt=L[At];Qt!==null&&qt!==void 0&&qt.update(Qt,mt,p||f)}yt&&yt(tt,mt),mt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:mt}),E=null}const Ht=new Ex;Ht.setAnimationLoop(Ut),this.setAnimationLoop=function(tt){yt=tt},this.dispose=function(){}}}const Mr=new fa,jR=new cn;function ZR(s,t){function i(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function r(M,_){_.color.getRGB(M.fogColor.value,gx(s)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function l(M,_,I,O,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(M,_):_.isMeshToonMaterial?(u(M,_),v(M,_)):_.isMeshPhongMaterial?(u(M,_),g(M,_)):_.isMeshStandardMaterial?(u(M,_),x(M,_),_.isMeshPhysicalMaterial&&y(M,_,D)):_.isMeshMatcapMaterial?(u(M,_),E(M,_)):_.isMeshDepthMaterial?u(M,_):_.isMeshDistanceMaterial?(u(M,_),R(M,_)):_.isMeshNormalMaterial?u(M,_):_.isLineBasicMaterial?(f(M,_),_.isLineDashedMaterial&&h(M,_)):_.isPointsMaterial?m(M,_,I,O):_.isSpriteMaterial?p(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,i(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===kn&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,i(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===kn&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,i(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,i(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const I=t.get(_),O=I.envMap,D=I.envMapRotation;O&&(M.envMap.value=O,Mr.copy(D),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),M.envMapRotation.value.setFromMatrix4(jR.makeRotationFromEuler(Mr)),M.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,M.aoMapTransform))}function f(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform))}function h(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function m(M,_,I,O){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*I,M.scale.value=O*.5,_.map&&(M.map.value=_.map,i(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function p(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function g(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function v(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function x(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function y(M,_,I){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===kn&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=I.texture,M.transmissionSamplerSize.value.set(I.width,I.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,_){_.matcap&&(M.matcap.value=_.matcap)}function R(M,_){const I=t.get(_).light;M.referencePosition.value.setFromMatrixPosition(I.matrixWorld),M.nearDistance.value=I.shadow.camera.near,M.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function KR(s,t,i,r){let l={},u={},f=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(I,O){const D=O.program;r.uniformBlockBinding(I,D)}function p(I,O){let D=l[I.id];D===void 0&&(E(I),D=g(I),l[I.id]=D,I.addEventListener("dispose",M));const L=O.program;r.updateUBOMapping(I,L);const H=t.render.frame;u[I.id]!==H&&(x(I),u[I.id]=H)}function g(I){const O=v();I.__bindingPointIndex=O;const D=s.createBuffer(),L=I.__size,H=I.usage;return s.bindBuffer(s.UNIFORM_BUFFER,D),s.bufferData(s.UNIFORM_BUFFER,L,H),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,O,D),D}function v(){for(let I=0;I<h;I++)if(f.indexOf(I)===-1)return f.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(I){const O=l[I.id],D=I.uniforms,L=I.__cache;s.bindBuffer(s.UNIFORM_BUFFER,O);for(let H=0,B=D.length;H<B;H++){const Z=Array.isArray(D[H])?D[H]:[D[H]];for(let w=0,C=Z.length;w<C;w++){const V=Z[w];if(y(V,H,w,L)===!0){const nt=V.__offset,ut=Array.isArray(V.value)?V.value:[V.value];let vt=0;for(let lt=0;lt<ut.length;lt++){const F=ut[lt],j=R(F);typeof F=="number"||typeof F=="boolean"?(V.__data[0]=F,s.bufferSubData(s.UNIFORM_BUFFER,nt+vt,V.__data)):F.isMatrix3?(V.__data[0]=F.elements[0],V.__data[1]=F.elements[1],V.__data[2]=F.elements[2],V.__data[3]=0,V.__data[4]=F.elements[3],V.__data[5]=F.elements[4],V.__data[6]=F.elements[5],V.__data[7]=0,V.__data[8]=F.elements[6],V.__data[9]=F.elements[7],V.__data[10]=F.elements[8],V.__data[11]=0):(F.toArray(V.__data,vt),vt+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,nt,V.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(I,O,D,L){const H=I.value,B=O+"_"+D;if(L[B]===void 0)return typeof H=="number"||typeof H=="boolean"?L[B]=H:L[B]=H.clone(),!0;{const Z=L[B];if(typeof H=="number"||typeof H=="boolean"){if(Z!==H)return L[B]=H,!0}else if(Z.equals(H)===!1)return Z.copy(H),!0}return!1}function E(I){const O=I.uniforms;let D=0;const L=16;for(let B=0,Z=O.length;B<Z;B++){const w=Array.isArray(O[B])?O[B]:[O[B]];for(let C=0,V=w.length;C<V;C++){const nt=w[C],ut=Array.isArray(nt.value)?nt.value:[nt.value];for(let vt=0,lt=ut.length;vt<lt;vt++){const F=ut[vt],j=R(F),q=D%L,xt=q%j.boundary,U=q+xt;D+=xt,U!==0&&L-U<j.storage&&(D+=L-U),nt.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),nt.__offset=D,D+=j.storage}}}const H=D%L;return H>0&&(D+=L-H),I.__size=D,I.__cache={},this}function R(I){const O={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(O.boundary=4,O.storage=4):I.isVector2?(O.boundary=8,O.storage=8):I.isVector3||I.isColor?(O.boundary=16,O.storage=12):I.isVector4?(O.boundary=16,O.storage=16):I.isMatrix3?(O.boundary=48,O.storage=48):I.isMatrix4?(O.boundary=64,O.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),O}function M(I){const O=I.target;O.removeEventListener("dispose",M);const D=f.indexOf(O.__bindingPointIndex);f.splice(D,1),s.deleteBuffer(l[O.id]),delete l[O.id],delete u[O.id]}function _(){for(const I in l)s.deleteBuffer(l[I]);f=[],l={},u={}}return{bind:m,update:p,dispose:_}}class QR{constructor(t={}){const{canvas:i=OE(),context:r=null,depth:l=!0,stencil:u=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=f;const E=new Uint32Array(4),R=new Int32Array(4);let M=null,_=null;const I=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ja,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let L=!1;this._outputColorSpace=ci;let H=0,B=0,Z=null,w=-1,C=null;const V=new an,nt=new an;let ut=null;const vt=new Ne(0);let lt=0,F=i.width,j=i.height,q=1,xt=null,U=null;const J=new an(0,0,F,j),_t=new an(0,0,F,j);let yt=!1;const Ut=new xx;let Ht=!1,tt=!1;const mt=new cn,At=new st,Qt=new an,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let me=!1;function rn(){return Z===null?q:1}let z=r;function Le(A,X){return i.getContext(A,X)}try{const A={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${gp}`),i.addEventListener("webglcontextlost",Ct,!1),i.addEventListener("webglcontextrestored",Ft,!1),i.addEventListener("webglcontextcreationerror",Mt,!1),z===null){const X="webgl2";if(z=Le(X,A),z===null)throw Le(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let se,ie,Pt,Ve,Vt,oe,je,Ze,N,b,$,ct,ht,ot,It,Rt,Xt,Yt,St,Nt,Zt,kt,wt,le;function k(){se=new oA(z),se.init(),kt=new kR(z,se),ie=new tA(z,se,t,kt),Pt=new GR(z,se),ie.reversedDepthBuffer&&x&&Pt.buffers.depth.setReversed(!0),Ve=new cA(z),Vt=new CR,oe=new VR(z,se,Pt,Vt,ie,kt,Ve),je=new nA(D),Ze=new sA(D),N=new gb(z),wt=new JT(z,N),b=new lA(z,N,Ve,wt),$=new dA(z,b,N,Ve),St=new fA(z,ie,oe),Rt=new eA(Vt),ct=new RR(D,je,Ze,se,ie,wt,Rt),ht=new ZR(D,Vt),ot=new DR,It=new IR(se),Yt=new QT(D,je,Ze,Pt,$,y,m),Xt=new BR(D,$,ie),le=new KR(z,Ve,ie,Pt),Nt=new $T(z,se,Ve),Zt=new uA(z,se,Ve),Ve.programs=ct.programs,D.capabilities=ie,D.extensions=se,D.properties=Vt,D.renderLists=ot,D.shadowMap=Xt,D.state=Pt,D.info=Ve}k();const bt=new YR(D,z);this.xr=bt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const A=se.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=se.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(A){A!==void 0&&(q=A,this.setSize(F,j,!1))},this.getSize=function(A){return A.set(F,j)},this.setSize=function(A,X,at=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=A,j=X,i.width=Math.floor(A*q),i.height=Math.floor(X*q),at===!0&&(i.style.width=A+"px",i.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(F*q,j*q).floor()},this.setDrawingBufferSize=function(A,X,at){F=A,j=X,q=at,i.width=Math.floor(A*at),i.height=Math.floor(X*at),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(V)},this.getViewport=function(A){return A.copy(J)},this.setViewport=function(A,X,at,rt){A.isVector4?J.set(A.x,A.y,A.z,A.w):J.set(A,X,at,rt),Pt.viewport(V.copy(J).multiplyScalar(q).round())},this.getScissor=function(A){return A.copy(_t)},this.setScissor=function(A,X,at,rt){A.isVector4?_t.set(A.x,A.y,A.z,A.w):_t.set(A,X,at,rt),Pt.scissor(nt.copy(_t).multiplyScalar(q).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(A){Pt.setScissorTest(yt=A)},this.setOpaqueSort=function(A){xt=A},this.setTransparentSort=function(A){U=A},this.getClearColor=function(A){return A.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor(...arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,at=!0){let rt=0;if(A){let Y=!1;if(Z!==null){const Et=Z.texture.format;Y=Et===Mp||Et===Sp||Et===yp}if(Y){const Et=Z.texture.type,Dt=Et===ca||Et===Ur||Et===Jo||Et===$o||Et===_p||Et===xp,zt=Yt.getClearColor(),Lt=Yt.getClearAlpha(),$t=zt.r,ee=zt.g,Wt=zt.b;Dt?(E[0]=$t,E[1]=ee,E[2]=Wt,E[3]=Lt,z.clearBufferuiv(z.COLOR,0,E)):(R[0]=$t,R[1]=ee,R[2]=Wt,R[3]=Lt,z.clearBufferiv(z.COLOR,0,R))}else rt|=z.COLOR_BUFFER_BIT}X&&(rt|=z.DEPTH_BUFFER_BIT),at&&(rt|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ct,!1),i.removeEventListener("webglcontextrestored",Ft,!1),i.removeEventListener("webglcontextcreationerror",Mt,!1),Yt.dispose(),ot.dispose(),It.dispose(),Vt.dispose(),je.dispose(),Ze.dispose(),$.dispose(),wt.dispose(),le.dispose(),ct.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",fn),bt.removeEventListener("sessionend",dn),Qe.stop()};function Ct(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Ft(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const A=Ve.autoReset,X=Xt.enabled,at=Xt.autoUpdate,rt=Xt.needsUpdate,Y=Xt.type;k(),Ve.autoReset=A,Xt.enabled=X,Xt.autoUpdate=at,Xt.needsUpdate=rt,Xt.type=Y}function Mt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function gt(A){const X=A.target;X.removeEventListener("dispose",gt),Gt(X)}function Gt(A){re(A),Vt.remove(A)}function re(A){const X=Vt.get(A).programs;X!==void 0&&(X.forEach(function(at){ct.releaseProgram(at)}),A.isShaderMaterial&&ct.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,at,rt,Y,Et){X===null&&(X=qt);const Dt=Y.isMesh&&Y.matrixWorld.determinant()<0,zt=ga(A,X,at,rt,Y);Pt.setMaterial(rt,Dt);let Lt=at.index,$t=1;if(rt.wireframe===!0){if(Lt=b.getWireframeAttribute(at),Lt===void 0)return;$t=2}const ee=at.drawRange,Wt=at.attributes.position;let de=ee.start*$t,Te=(ee.start+ee.count)*$t;Et!==null&&(de=Math.max(de,Et.start*$t),Te=Math.min(Te,(Et.start+Et.count)*$t)),Lt!==null?(de=Math.max(de,0),Te=Math.min(Te,Lt.count)):Wt!=null&&(de=Math.max(de,0),Te=Math.min(Te,Wt.count));const qe=Te-de;if(qe<0||qe===1/0)return;wt.setup(Y,rt,zt,at,Lt);let Oe,he=Nt;if(Lt!==null&&(Oe=N.get(Lt),he=Zt,he.setIndex(Oe)),Y.isMesh)rt.wireframe===!0?(Pt.setLineWidth(rt.wireframeLinewidth*rn()),he.setMode(z.LINES)):he.setMode(z.TRIANGLES);else if(Y.isLine){let Jt=rt.linewidth;Jt===void 0&&(Jt=1),Pt.setLineWidth(Jt*rn()),Y.isLineSegments?he.setMode(z.LINES):Y.isLineLoop?he.setMode(z.LINE_LOOP):he.setMode(z.LINE_STRIP)}else Y.isPoints?he.setMode(z.POINTS):Y.isSprite&&he.setMode(z.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)nl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),he.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))he.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Jt=Y._multiDrawStarts,Xe=Y._multiDrawCounts,_e=Y._multiDrawCount,Rn=Lt?N.get(Lt).bytesPerElement:1,pi=Vt.get(rt).currentProgram.getUniforms();for(let Ln=0;Ln<_e;Ln++)pi.setValue(z,"_gl_DrawID",Ln),he.render(Jt[Ln]/Rn,Xe[Ln])}else if(Y.isInstancedMesh)he.renderInstances(de,qe,Y.count);else if(at.isInstancedBufferGeometry){const Jt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Xe=Math.min(at.instanceCount,Jt);he.renderInstances(de,qe,Xe)}else he.render(de,qe)};function we(A,X,at){A.transparent===!0&&A.side===sa&&A.forceSinglePass===!1?(A.side=kn,A.needsUpdate=!0,Ri(A,X,at),A.side=Za,A.needsUpdate=!0,Ri(A,X,at),A.side=sa):Ri(A,X,at)}this.compile=function(A,X,at=null){at===null&&(at=A),_=It.get(at),_.init(X),O.push(_),at.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),A!==at&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),_.setupLights();const rt=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Et=Y.material;if(Et)if(Array.isArray(Et))for(let Dt=0;Dt<Et.length;Dt++){const zt=Et[Dt];we(zt,at,Y),rt.add(zt)}else we(Et,at,Y),rt.add(Et)}),_=O.pop(),rt},this.compileAsync=function(A,X,at=null){const rt=this.compile(A,X,at);return new Promise(Y=>{function Et(){if(rt.forEach(function(Dt){Vt.get(Dt).currentProgram.isReady()&&rt.delete(Dt)}),rt.size===0){Y(A);return}setTimeout(Et,10)}se.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let be=null;function hi(A){be&&be(A)}function fn(){Qe.stop()}function dn(){Qe.start()}const Qe=new Ex;Qe.setAnimationLoop(hi),typeof self<"u"&&Qe.setContext(self),this.setAnimationLoop=function(A){be=A,bt.setAnimationLoop(A),A===null?Qe.stop():Qe.start()},bt.addEventListener("sessionstart",fn),bt.addEventListener("sessionend",dn),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(X),X=bt.getCamera()),A.isScene===!0&&A.onBeforeRender(D,A,X,Z),_=It.get(A,O.length),_.init(X),O.push(_),mt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Ut.setFromProjectionMatrix(mt,Pi,X.reversedDepth),tt=this.localClippingEnabled,Ht=Rt.init(this.clippingPlanes,tt),M=ot.get(A,I.length),M.init(),I.push(M),bt.enabled===!0&&bt.isPresenting===!0){const Et=D.xr.getDepthSensingMesh();Et!==null&&Ai(Et,X,-1/0,D.sortObjects)}Ai(A,X,0,D.sortObjects),M.finish(),D.sortObjects===!0&&M.sort(xt,U),me=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,me&&Yt.addToRenderList(M,A),this.info.render.frame++,Ht===!0&&Rt.beginShadows();const at=_.state.shadowsArray;Xt.render(at,A,X),Ht===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=M.opaque,Y=M.transmissive;if(_.setupLights(),X.isArrayCamera){const Et=X.cameras;if(Y.length>0)for(let Dt=0,zt=Et.length;Dt<zt;Dt++){const Lt=Et[Dt];hl(rt,Y,A,Lt)}me&&Yt.render(A);for(let Dt=0,zt=Et.length;Dt<zt;Dt++){const Lt=Et[Dt];Pr(M,A,Lt,Lt.viewport)}}else Y.length>0&&hl(rt,Y,A,X),me&&Yt.render(A),Pr(M,A,X);Z!==null&&B===0&&(oe.updateMultisampleRenderTarget(Z),oe.updateRenderTargetMipmap(Z)),A.isScene===!0&&A.onAfterRender(D,A,X),wt.resetDefaultState(),w=-1,C=null,O.pop(),O.length>0?(_=O[O.length-1],Ht===!0&&Rt.setGlobalState(D.clippingPlanes,_.state.camera)):_=null,I.pop(),I.length>0?M=I[I.length-1]:M=null};function Ai(A,X,at,rt){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)at=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ut.intersectsSprite(A)){rt&&Qt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(mt);const Dt=$.update(A),zt=A.material;zt.visible&&M.push(A,Dt,zt,at,Qt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ut.intersectsObject(A))){const Dt=$.update(A),zt=A.material;if(rt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Qt.copy(A.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),Qt.copy(Dt.boundingSphere.center)),Qt.applyMatrix4(A.matrixWorld).applyMatrix4(mt)),Array.isArray(zt)){const Lt=Dt.groups;for(let $t=0,ee=Lt.length;$t<ee;$t++){const Wt=Lt[$t],de=zt[Wt.materialIndex];de&&de.visible&&M.push(A,Dt,de,at,Qt.z,Wt)}}else zt.visible&&M.push(A,Dt,zt,at,Qt.z,null)}}const Et=A.children;for(let Dt=0,zt=Et.length;Dt<zt;Dt++)Ai(Et[Dt],X,at,rt)}function Pr(A,X,at,rt){const Y=A.opaque,Et=A.transmissive,Dt=A.transparent;_.setupLightsView(at),Ht===!0&&Rt.setGlobalState(D.clippingPlanes,at),rt&&Pt.viewport(V.copy(rt)),Y.length>0&&Ir(Y,X,at),Et.length>0&&Ir(Et,X,at),Dt.length>0&&Ir(Dt,X,at),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function hl(A,X,at,rt){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[rt.id]===void 0&&(_.state.transmissionRenderTarget[rt.id]=new Nr(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?al:ca,minFilter:Cr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Re.workingColorSpace}));const Et=_.state.transmissionRenderTarget[rt.id],Dt=rt.viewport||V;Et.setSize(Dt.z*D.transmissionResolutionScale,Dt.w*D.transmissionResolutionScale);const zt=D.getRenderTarget(),Lt=D.getActiveCubeFace(),$t=D.getActiveMipmapLevel();D.setRenderTarget(Et),D.getClearColor(vt),lt=D.getClearAlpha(),lt<1&&D.setClearColor(16777215,.5),D.clear(),me&&Yt.render(at);const ee=D.toneMapping;D.toneMapping=ja;const Wt=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),_.setupLightsView(rt),Ht===!0&&Rt.setGlobalState(D.clippingPlanes,rt),Ir(A,at,rt),oe.updateMultisampleRenderTarget(Et),oe.updateRenderTargetMipmap(Et),se.has("WEBGL_multisampled_render_to_texture")===!1){let de=!1;for(let Te=0,qe=X.length;Te<qe;Te++){const Oe=X[Te],he=Oe.object,Jt=Oe.geometry,Xe=Oe.material,_e=Oe.group;if(Xe.side===sa&&he.layers.test(rt.layers)){const Rn=Xe.side;Xe.side=kn,Xe.needsUpdate=!0,qs(he,at,rt,Jt,Xe,_e),Xe.side=Rn,Xe.needsUpdate=!0,de=!0}}de===!0&&(oe.updateMultisampleRenderTarget(Et),oe.updateRenderTargetMipmap(Et))}D.setRenderTarget(zt,Lt,$t),D.setClearColor(vt,lt),Wt!==void 0&&(rt.viewport=Wt),D.toneMapping=ee}function Ir(A,X,at){const rt=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,Et=A.length;Y<Et;Y++){const Dt=A[Y],zt=Dt.object,Lt=Dt.geometry,$t=Dt.group;let ee=Dt.material;ee.allowOverride===!0&&rt!==null&&(ee=rt),zt.layers.test(at.layers)&&qs(zt,X,at,Lt,ee,$t)}}function qs(A,X,at,rt,Y,Et){A.onBeforeRender(D,X,at,rt,Y,Et),A.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(D,X,at,rt,A,Et),Y.transparent===!0&&Y.side===sa&&Y.forceSinglePass===!1?(Y.side=kn,Y.needsUpdate=!0,D.renderBufferDirect(at,X,rt,Y,A,Et),Y.side=Za,Y.needsUpdate=!0,D.renderBufferDirect(at,X,rt,Y,A,Et),Y.side=sa):D.renderBufferDirect(at,X,rt,Y,A,Et),A.onAfterRender(D,X,at,rt,Y,Et)}function Ri(A,X,at){X.isScene!==!0&&(X=qt);const rt=Vt.get(A),Y=_.state.lights,Et=_.state.shadowsArray,Dt=Y.state.version,zt=ct.getParameters(A,Y.state,Et,X,at),Lt=ct.getProgramCacheKey(zt);let $t=rt.programs;rt.environment=A.isMeshStandardMaterial?X.environment:null,rt.fog=X.fog,rt.envMap=(A.isMeshStandardMaterial?Ze:je).get(A.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,$t===void 0&&(A.addEventListener("dispose",gt),$t=new Map,rt.programs=$t);let ee=$t.get(Lt);if(ee!==void 0){if(rt.currentProgram===ee&&rt.lightsStateVersion===Dt)return Fi(A,zt),ee}else zt.uniforms=ct.getUniforms(A),A.onBeforeCompile(zt,D),ee=ct.acquireProgram(zt,Lt),$t.set(Lt,ee),rt.uniforms=zt.uniforms;const Wt=rt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Wt.clippingPlanes=Rt.uniform),Fi(A,zt),rt.needsLights=va(A),rt.lightsStateVersion=Dt,rt.needsLights&&(Wt.ambientLightColor.value=Y.state.ambient,Wt.lightProbe.value=Y.state.probe,Wt.directionalLights.value=Y.state.directional,Wt.directionalLightShadows.value=Y.state.directionalShadow,Wt.spotLights.value=Y.state.spot,Wt.spotLightShadows.value=Y.state.spotShadow,Wt.rectAreaLights.value=Y.state.rectArea,Wt.ltc_1.value=Y.state.rectAreaLTC1,Wt.ltc_2.value=Y.state.rectAreaLTC2,Wt.pointLights.value=Y.state.point,Wt.pointLightShadows.value=Y.state.pointShadow,Wt.hemisphereLights.value=Y.state.hemi,Wt.directionalShadowMap.value=Y.state.directionalShadowMap,Wt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Wt.spotShadowMap.value=Y.state.spotShadowMap,Wt.spotLightMatrix.value=Y.state.spotLightMatrix,Wt.spotLightMap.value=Y.state.spotLightMap,Wt.pointShadowMap.value=Y.state.pointShadowMap,Wt.pointShadowMatrix.value=Y.state.pointShadowMatrix),rt.currentProgram=ee,rt.uniformsList=null,ee}function Fr(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=Ju.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function Fi(A,X){const at=Vt.get(A);at.outputColorSpace=X.outputColorSpace,at.batching=X.batching,at.batchingColor=X.batchingColor,at.instancing=X.instancing,at.instancingColor=X.instancingColor,at.instancingMorph=X.instancingMorph,at.skinning=X.skinning,at.morphTargets=X.morphTargets,at.morphNormals=X.morphNormals,at.morphColors=X.morphColors,at.morphTargetsCount=X.morphTargetsCount,at.numClippingPlanes=X.numClippingPlanes,at.numIntersection=X.numClipIntersection,at.vertexAlphas=X.vertexAlphas,at.vertexTangents=X.vertexTangents,at.toneMapping=X.toneMapping}function ga(A,X,at,rt,Y){X.isScene!==!0&&(X=qt),oe.resetTextureUnits();const Et=X.fog,Dt=rt.isMeshStandardMaterial?X.environment:null,zt=Z===null?D.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Hs,Lt=(rt.isMeshStandardMaterial?Ze:je).get(rt.envMap||Dt),$t=rt.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,ee=!!at.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Wt=!!at.morphAttributes.position,de=!!at.morphAttributes.normal,Te=!!at.morphAttributes.color;let qe=ja;rt.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(qe=D.toneMapping);const Oe=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,he=Oe!==void 0?Oe.length:0,Jt=Vt.get(rt),Xe=_.state.lights;if(Ht===!0&&(tt===!0||A!==C)){const Je=A===C&&rt.id===w;Rt.setState(rt,A,Je)}let _e=!1;rt.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==Xe.state.version||Jt.outputColorSpace!==zt||Y.isBatchedMesh&&Jt.batching===!1||!Y.isBatchedMesh&&Jt.batching===!0||Y.isBatchedMesh&&Jt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Jt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Jt.instancing===!1||!Y.isInstancedMesh&&Jt.instancing===!0||Y.isSkinnedMesh&&Jt.skinning===!1||!Y.isSkinnedMesh&&Jt.skinning===!0||Y.isInstancedMesh&&Jt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Jt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Jt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Jt.instancingMorph===!1&&Y.morphTexture!==null||Jt.envMap!==Lt||rt.fog===!0&&Jt.fog!==Et||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==Rt.numPlanes||Jt.numIntersection!==Rt.numIntersection)||Jt.vertexAlphas!==$t||Jt.vertexTangents!==ee||Jt.morphTargets!==Wt||Jt.morphNormals!==de||Jt.morphColors!==Te||Jt.toneMapping!==qe||Jt.morphTargetsCount!==he)&&(_e=!0):(_e=!0,Jt.__version=rt.version);let Rn=Jt.currentProgram;_e===!0&&(Rn=Ri(rt,X,Y));let pi=!1,Ln=!1,vn=!1;const He=Rn.getUniforms(),On=Jt.uniforms;if(Pt.useProgram(Rn.program)&&(pi=!0,Ln=!0,vn=!0),rt.id!==w&&(w=rt.id,Ln=!0),pi||C!==A){Pt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),He.setValue(z,"projectionMatrix",A.projectionMatrix),He.setValue(z,"viewMatrix",A.matrixWorldInverse);const Mn=He.map.cameraPosition;Mn!==void 0&&Mn.setValue(z,At.setFromMatrixPosition(A.matrixWorld)),ie.logarithmicDepthBuffer&&He.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&He.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,Ln=!0,vn=!0)}if(Y.isSkinnedMesh){He.setOptional(z,Y,"bindMatrix"),He.setOptional(z,Y,"bindMatrixInverse");const Je=Y.skeleton;Je&&(Je.boneTexture===null&&Je.computeBoneTexture(),He.setValue(z,"boneTexture",Je.boneTexture,oe))}Y.isBatchedMesh&&(He.setOptional(z,Y,"batchingTexture"),He.setValue(z,"batchingTexture",Y._matricesTexture,oe),He.setOptional(z,Y,"batchingIdTexture"),He.setValue(z,"batchingIdTexture",Y._indirectTexture,oe),He.setOptional(z,Y,"batchingColorTexture"),Y._colorsTexture!==null&&He.setValue(z,"batchingColorTexture",Y._colorsTexture,oe));const Cn=at.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&St.update(Y,at,Rn),(Ln||Jt.receiveShadow!==Y.receiveShadow)&&(Jt.receiveShadow=Y.receiveShadow,He.setValue(z,"receiveShadow",Y.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(On.envMap.value=Lt,On.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&X.environment!==null&&(On.envMapIntensity.value=X.environmentIntensity),Ln&&(He.setValue(z,"toneMappingExposure",D.toneMappingExposure),Jt.needsLights&&tr(On,vn),Et&&rt.fog===!0&&ht.refreshFogUniforms(On,Et),ht.refreshMaterialUniforms(On,rt,q,j,_.state.transmissionRenderTarget[A.id]),Ju.upload(z,Fr(Jt),On,oe)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Ju.upload(z,Fr(Jt),On,oe),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&He.setValue(z,"center",Y.center),He.setValue(z,"modelViewMatrix",Y.modelViewMatrix),He.setValue(z,"normalMatrix",Y.normalMatrix),He.setValue(z,"modelMatrix",Y.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const Je=rt.uniformsGroups;for(let Mn=0,zr=Je.length;Mn<zr;Mn++){const Fn=Je[Mn];le.update(Fn,Rn),le.bind(Fn,Rn)}}return Rn}function tr(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function va(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(A,X,at){const rt=Vt.get(A);rt.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),Vt.get(A.texture).__webglTexture=X,Vt.get(A.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:at,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){const at=Vt.get(A);at.__webglFramebuffer=X,at.__useDefaultFramebuffer=X===void 0};const sn=z.createFramebuffer();this.setRenderTarget=function(A,X=0,at=0){Z=A,H=X,B=at;let rt=!0,Y=null,Et=!1,Dt=!1;if(A){const Lt=Vt.get(A);if(Lt.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(z.FRAMEBUFFER,null),rt=!1;else if(Lt.__webglFramebuffer===void 0)oe.setupRenderTarget(A);else if(Lt.__hasExternalTextures)oe.rebindTextures(A,Vt.get(A.texture).__webglTexture,Vt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Wt=A.depthTexture;if(Lt.__boundDepthTexture!==Wt){if(Wt!==null&&Vt.has(Wt)&&(A.width!==Wt.image.width||A.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(A)}}const $t=A.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Dt=!0);const ee=Vt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ee[X])?Y=ee[X][at]:Y=ee[X],Et=!0):A.samples>0&&oe.useMultisampledRTT(A)===!1?Y=Vt.get(A).__webglMultisampledFramebuffer:Array.isArray(ee)?Y=ee[at]:Y=ee,V.copy(A.viewport),nt.copy(A.scissor),ut=A.scissorTest}else V.copy(J).multiplyScalar(q).floor(),nt.copy(_t).multiplyScalar(q).floor(),ut=yt;if(at!==0&&(Y=sn),Pt.bindFramebuffer(z.FRAMEBUFFER,Y)&&rt&&Pt.drawBuffers(A,Y),Pt.viewport(V),Pt.scissor(nt),Pt.setScissorTest(ut),Et){const Lt=Vt.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+X,Lt.__webglTexture,at)}else if(Dt){const Lt=X;for(let $t=0;$t<A.textures.length;$t++){const ee=Vt.get(A.textures[$t]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+$t,ee.__webglTexture,at,Lt)}}else if(A!==null&&at!==0){const Lt=Vt.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Lt.__webglTexture,at)}w=-1},this.readRenderTargetPixels=function(A,X,at,rt,Y,Et,Dt,zt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Vt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Dt!==void 0&&(Lt=Lt[Dt]),Lt){Pt.bindFramebuffer(z.FRAMEBUFFER,Lt);try{const $t=A.textures[zt],ee=$t.format,Wt=$t.type;if(!ie.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-rt&&at>=0&&at<=A.height-Y&&(A.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+zt),z.readPixels(X,at,rt,Y,kt.convert(ee),kt.convert(Wt),Et))}finally{const $t=Z!==null?Vt.get(Z).__webglFramebuffer:null;Pt.bindFramebuffer(z.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(A,X,at,rt,Y,Et,Dt,zt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=Vt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Dt!==void 0&&(Lt=Lt[Dt]),Lt)if(X>=0&&X<=A.width-rt&&at>=0&&at<=A.height-Y){Pt.bindFramebuffer(z.FRAMEBUFFER,Lt);const $t=A.textures[zt],ee=$t.format,Wt=$t.type;if(!ie.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const de=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,de),z.bufferData(z.PIXEL_PACK_BUFFER,Et.byteLength,z.STREAM_READ),A.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+zt),z.readPixels(X,at,rt,Y,kt.convert(ee),kt.convert(Wt),0);const Te=Z!==null?Vt.get(Z).__webglFramebuffer:null;Pt.bindFramebuffer(z.FRAMEBUFFER,Te);const qe=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await PE(z,qe,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,de),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Et),z.deleteBuffer(de),z.deleteSync(qe),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,at=0){const rt=Math.pow(2,-at),Y=Math.floor(A.image.width*rt),Et=Math.floor(A.image.height*rt),Dt=X!==null?X.x:0,zt=X!==null?X.y:0;oe.setTexture2D(A,0),z.copyTexSubImage2D(z.TEXTURE_2D,at,0,0,Dt,zt,Y,Et),Pt.unbindTexture()};const pl=z.createFramebuffer(),ml=z.createFramebuffer();this.copyTextureToTexture=function(A,X,at=null,rt=null,Y=0,Et=null){Et===null&&(Y!==0?(nl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Et=Y,Y=0):Et=0);let Dt,zt,Lt,$t,ee,Wt,de,Te,qe;const Oe=A.isCompressedTexture?A.mipmaps[Et]:A.image;if(at!==null)Dt=at.max.x-at.min.x,zt=at.max.y-at.min.y,Lt=at.isBox3?at.max.z-at.min.z:1,$t=at.min.x,ee=at.min.y,Wt=at.isBox3?at.min.z:0;else{const Cn=Math.pow(2,-Y);Dt=Math.floor(Oe.width*Cn),zt=Math.floor(Oe.height*Cn),A.isDataArrayTexture?Lt=Oe.depth:A.isData3DTexture?Lt=Math.floor(Oe.depth*Cn):Lt=1,$t=0,ee=0,Wt=0}rt!==null?(de=rt.x,Te=rt.y,qe=rt.z):(de=0,Te=0,qe=0);const he=kt.convert(X.format),Jt=kt.convert(X.type);let Xe;X.isData3DTexture?(oe.setTexture3D(X,0),Xe=z.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(oe.setTexture2DArray(X,0),Xe=z.TEXTURE_2D_ARRAY):(oe.setTexture2D(X,0),Xe=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,X.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,X.unpackAlignment);const _e=z.getParameter(z.UNPACK_ROW_LENGTH),Rn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),pi=z.getParameter(z.UNPACK_SKIP_PIXELS),Ln=z.getParameter(z.UNPACK_SKIP_ROWS),vn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Oe.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Oe.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,$t),z.pixelStorei(z.UNPACK_SKIP_ROWS,ee),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Wt);const He=A.isDataArrayTexture||A.isData3DTexture,On=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const Cn=Vt.get(A),Je=Vt.get(X),Mn=Vt.get(Cn.__renderTarget),zr=Vt.get(Je.__renderTarget);Pt.bindFramebuffer(z.READ_FRAMEBUFFER,Mn.__webglFramebuffer),Pt.bindFramebuffer(z.DRAW_FRAMEBUFFER,zr.__webglFramebuffer);for(let Fn=0;Fn<Lt;Fn++)He&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Vt.get(A).__webglTexture,Y,Wt+Fn),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Vt.get(X).__webglTexture,Et,qe+Fn)),z.blitFramebuffer($t,ee,Dt,zt,de,Te,Dt,zt,z.DEPTH_BUFFER_BIT,z.NEAREST);Pt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Y!==0||A.isRenderTargetTexture||Vt.has(A)){const Cn=Vt.get(A),Je=Vt.get(X);Pt.bindFramebuffer(z.READ_FRAMEBUFFER,pl),Pt.bindFramebuffer(z.DRAW_FRAMEBUFFER,ml);for(let Mn=0;Mn<Lt;Mn++)He?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Cn.__webglTexture,Y,Wt+Mn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Cn.__webglTexture,Y),On?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Je.__webglTexture,Et,qe+Mn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Je.__webglTexture,Et),Y!==0?z.blitFramebuffer($t,ee,Dt,zt,de,Te,Dt,zt,z.COLOR_BUFFER_BIT,z.NEAREST):On?z.copyTexSubImage3D(Xe,Et,de,Te,qe+Mn,$t,ee,Dt,zt):z.copyTexSubImage2D(Xe,Et,de,Te,$t,ee,Dt,zt);Pt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else On?A.isDataTexture||A.isData3DTexture?z.texSubImage3D(Xe,Et,de,Te,qe,Dt,zt,Lt,he,Jt,Oe.data):X.isCompressedArrayTexture?z.compressedTexSubImage3D(Xe,Et,de,Te,qe,Dt,zt,Lt,he,Oe.data):z.texSubImage3D(Xe,Et,de,Te,qe,Dt,zt,Lt,he,Jt,Oe):A.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Et,de,Te,Dt,zt,he,Jt,Oe.data):A.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Et,de,Te,Oe.width,Oe.height,he,Oe.data):z.texSubImage2D(z.TEXTURE_2D,Et,de,Te,Dt,zt,he,Jt,Oe);z.pixelStorei(z.UNPACK_ROW_LENGTH,_e),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Rn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,pi),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ln),z.pixelStorei(z.UNPACK_SKIP_IMAGES,vn),Et===0&&X.generateMipmaps&&z.generateMipmap(Xe),Pt.unbindTexture()},this.initRenderTarget=function(A){Vt.get(A).__webglFramebuffer===void 0&&oe.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?oe.setTextureCube(A,0):A.isData3DTexture?oe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?oe.setTexture2DArray(A,0):oe.setTexture2D(A,0),Pt.unbindTexture()},this.resetState=function(){H=0,B=0,Z=null,Pt.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Re._getDrawingBufferColorSpace(t),i.unpackColorSpace=Re._getUnpackColorSpace()}}/*!
 * Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */function tp(s,t){(t==null||t>s.length)&&(t=s.length);for(var i=0,r=Array(t);i<t;i++)r[i]=s[i];return r}function JR(s){if(Array.isArray(s))return s}function $R(s){if(Array.isArray(s))return tp(s)}function t2(s,t){if(!(s instanceof t))throw new TypeError("Cannot call a class as a function")}function e2(s,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(s,Cx(r.key),r)}}function n2(s,t,i){return t&&e2(s.prototype,t),Object.defineProperty(s,"prototype",{writable:!1}),s}function $u(s,t){var i=typeof Symbol<"u"&&s[Symbol.iterator]||s["@@iterator"];if(!i){if(Array.isArray(s)||(i=Tp(s))||t){i&&(s=i);var r=0,l=function(){};return{s:l,n:function(){return r>=s.length?{done:!0}:{done:!1,value:s[r++]}},e:function(m){throw m},f:l}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var u,f=!0,h=!1;return{s:function(){i=i.call(s)},n:function(){var m=i.next();return f=m.done,m},e:function(m){h=!0,u=m},f:function(){try{f||i.return==null||i.return()}finally{if(h)throw u}}}}function Se(s,t,i){return(t=Cx(t))in s?Object.defineProperty(s,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):s[t]=i,s}function i2(s){if(typeof Symbol<"u"&&s[Symbol.iterator]!=null||s["@@iterator"]!=null)return Array.from(s)}function a2(s,t){var i=s==null?null:typeof Symbol<"u"&&s[Symbol.iterator]||s["@@iterator"];if(i!=null){var r,l,u,f,h=[],m=!0,p=!1;try{if(u=(i=i.call(s)).next,t===0){if(Object(i)!==i)return;m=!1}else for(;!(m=(r=u.call(i)).done)&&(h.push(r.value),h.length!==t);m=!0);}catch(g){p=!0,l=g}finally{try{if(!m&&i.return!=null&&(f=i.return(),Object(f)!==f))return}finally{if(p)throw l}}return h}}function r2(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function s2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function m0(s,t){var i=Object.keys(s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);t&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(s,l).enumerable})),i.push.apply(i,r)}return i}function Tt(s){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?m0(Object(i),!0).forEach(function(r){Se(s,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(i)):m0(Object(i)).forEach(function(r){Object.defineProperty(s,r,Object.getOwnPropertyDescriptor(i,r))})}return s}function dc(s,t){return JR(s)||a2(s,t)||Tp(s,t)||r2()}function Ti(s){return $R(s)||i2(s)||Tp(s)||s2()}function o2(s,t){if(typeof s!="object"||!s)return s;var i=s[Symbol.toPrimitive];if(i!==void 0){var r=i.call(s,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(s)}function Cx(s){var t=o2(s,"string");return typeof t=="symbol"?t:t+""}function rc(s){"@babel/helpers - typeof";return rc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},rc(s)}function Tp(s,t){if(s){if(typeof s=="string")return tp(s,t);var i={}.toString.call(s).slice(8,-1);return i==="Object"&&s.constructor&&(i=s.constructor.name),i==="Map"||i==="Set"?Array.from(s):i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?tp(s,t):void 0}}var g0=function(){},Ap={},wx={},Dx=null,Ux={mark:g0,measure:g0};try{typeof window<"u"&&(Ap=window),typeof document<"u"&&(wx=document),typeof MutationObserver<"u"&&(Dx=MutationObserver),typeof performance<"u"&&(Ux=performance)}catch{}var l2=Ap.navigator||{},v0=l2.userAgent,_0=v0===void 0?"":v0,Qa=Ap,We=wx,x0=Dx,qu=Ux;Qa.document;var ma=!!We.documentElement&&!!We.head&&typeof We.addEventListener=="function"&&typeof We.createElement=="function",Nx=~_0.indexOf("MSIE")||~_0.indexOf("Trident/"),nh,u2=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,c2=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Slab Press|Slab|Whiteboard)?.*/i,Lx={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"}},f2={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Ox=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],An="classic",cl="duotone",Px="sharp",Ix="sharp-duotone",Fx="chisel",zx="etch",Bx="jelly",Hx="jelly-duo",Gx="jelly-fill",Vx="notdog",kx="notdog-duo",Xx="slab",Wx="slab-press",qx="thumbprint",Yx="whiteboard",d2="Classic",h2="Duotone",p2="Sharp",m2="Sharp Duotone",g2="Chisel",v2="Etch",_2="Jelly",x2="Jelly Duo",y2="Jelly Fill",S2="Notdog",M2="Notdog Duo",E2="Slab",b2="Slab Press",T2="Thumbprint",A2="Whiteboard",jx=[An,cl,Px,Ix,Fx,zx,Bx,Hx,Gx,Vx,kx,Xx,Wx,qx,Yx];nh={},Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(nh,An,d2),cl,h2),Px,p2),Ix,m2),Fx,g2),zx,v2),Bx,_2),Hx,x2),Gx,y2),Vx,S2),Se(Se(Se(Se(Se(nh,kx,M2),Xx,E2),Wx,b2),qx,T2),Yx,A2);var R2={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"}},C2={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"}},w2=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),D2={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},whiteboard:{semibold:"fawsb"}},Zx=["fak","fa-kit","fakd","fa-kit-duotone"],y0={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},U2=["kit"],N2="kit",L2="kit-duotone",O2="Kit",P2="Kit Duotone";Se(Se({},N2,O2),L2,P2);var I2={kit:{"fa-kit":"fak"}},F2={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},z2={kit:{fak:"fa-kit"}},S0={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},ih,Yu={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},B2=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],H2="classic",G2="duotone",V2="sharp",k2="sharp-duotone",X2="chisel",W2="etch",q2="jelly",Y2="jelly-duo",j2="jelly-fill",Z2="notdog",K2="notdog-duo",Q2="slab",J2="slab-press",$2="thumbprint",tC="whiteboard",eC="Classic",nC="Duotone",iC="Sharp",aC="Sharp Duotone",rC="Chisel",sC="Etch",oC="Jelly",lC="Jelly Duo",uC="Jelly Fill",cC="Notdog",fC="Notdog Duo",dC="Slab",hC="Slab Press",pC="Thumbprint",mC="Whiteboard";ih={},Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(ih,H2,eC),G2,nC),V2,iC),k2,aC),X2,rC),W2,sC),q2,oC),Y2,lC),j2,uC),Z2,cC),Se(Se(Se(Se(Se(ih,K2,fC),Q2,dC),J2,hC),$2,pC),tC,mC);var gC="kit",vC="kit-duotone",_C="Kit",xC="Kit Duotone";Se(Se({},gC,_C),vC,xC);var yC={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"}},SC={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"]},ep={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"}},MC=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],Kx=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr"].concat(B2,MC),EC=["solid","regular","light","thin","duotone","brands","semibold"],Qx=[1,2,3,4,5,6,7,8,9,10],bC=Qx.concat([11,12,13,14,15,16,17,18,19,20]),TC=["aw","fw","pull-left","pull-right"],AC=[].concat(Ti(Object.keys(SC)),EC,TC,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",Yu.GROUP,Yu.SWAP_OPACITY,Yu.PRIMARY,Yu.SECONDARY]).concat(Qx.map(function(s){return"".concat(s,"x")})).concat(bC.map(function(s){return"w-".concat(s)})),RC={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},da="___FONT_AWESOME___",np=16,Jx="fa",$x="svg-inline--fa",Lr="data-fa-i2svg",ip="data-fa-pseudo-element",CC="data-fa-pseudo-element-pending",Rp="data-prefix",Cp="data-icon",M0="fontawesome-i2svg",wC="async",DC=["HTML","HEAD","STYLE","SCRIPT"],ty=["::before","::after",":before",":after"],ey=(function(){try{return!0}catch{return!1}})();function fl(s){return new Proxy(s,{get:function(i,r){return r in i?i[r]:i[An]}})}var ny=Tt({},Lx);ny[An]=Tt(Tt(Tt(Tt({},{"fa-duotone":"duotone"}),Lx[An]),y0.kit),y0["kit-duotone"]);var UC=fl(ny),ap=Tt({},D2);ap[An]=Tt(Tt(Tt(Tt({},{duotone:"fad"}),ap[An]),S0.kit),S0["kit-duotone"]);var E0=fl(ap),rp=Tt({},ep);rp[An]=Tt(Tt({},rp[An]),z2.kit);var wp=fl(rp),sp=Tt({},yC);sp[An]=Tt(Tt({},sp[An]),I2.kit);fl(sp);var NC=u2,iy="fa-layers-text",LC=c2,OC=Tt({},R2);fl(OC);var PC=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ah=f2,IC=[].concat(Ti(U2),Ti(AC)),Zo=Qa.FontAwesomeConfig||{};function FC(s){var t=We.querySelector("script["+s+"]");if(t)return t.getAttribute(s)}function zC(s){return s===""?!0:s==="false"?!1:s==="true"?!0:s}if(We&&typeof We.querySelector=="function"){var BC=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];BC.forEach(function(s){var t=dc(s,2),i=t[0],r=t[1],l=zC(FC(i));l!=null&&(Zo[r]=l)})}var ay={styleDefault:"solid",familyDefault:An,cssPrefix:Jx,replacementClass:$x,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Zo.familyPrefix&&(Zo.cssPrefix=Zo.familyPrefix);var Vs=Tt(Tt({},ay),Zo);Vs.autoReplaceSvg||(Vs.observeMutations=!1);var Kt={};Object.keys(ay).forEach(function(s){Object.defineProperty(Kt,s,{enumerable:!0,set:function(i){Vs[s]=i,Ko.forEach(function(r){return r(Kt)})},get:function(){return Vs[s]}})});Object.defineProperty(Kt,"familyPrefix",{enumerable:!0,set:function(t){Vs.cssPrefix=t,Ko.forEach(function(i){return i(Kt)})},get:function(){return Vs.cssPrefix}});Qa.FontAwesomeConfig=Kt;var Ko=[];function HC(s){return Ko.push(s),function(){Ko.splice(Ko.indexOf(s),1)}}var Ds=np,Ii={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function GC(s){if(!(!s||!ma)){var t=We.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=s;for(var i=We.head.childNodes,r=null,l=i.length-1;l>-1;l--){var u=i[l],f=(u.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(f)>-1&&(r=u)}return We.head.insertBefore(t,r),s}}var VC="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function b0(){for(var s=12,t="";s-- >0;)t+=VC[Math.random()*62|0];return t}function Ws(s){for(var t=[],i=(s||[]).length>>>0;i--;)t[i]=s[i];return t}function Dp(s){return s.classList?Ws(s.classList):(s.getAttribute("class")||"").split(" ").filter(function(t){return t})}function ry(s){return"".concat(s).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function kC(s){return Object.keys(s||{}).reduce(function(t,i){return t+"".concat(i,'="').concat(ry(s[i]),'" ')},"").trim()}function hc(s){return Object.keys(s||{}).reduce(function(t,i){return t+"".concat(i,": ").concat(s[i].trim(),";")},"")}function Up(s){return s.size!==Ii.size||s.x!==Ii.x||s.y!==Ii.y||s.rotate!==Ii.rotate||s.flipX||s.flipY}function XC(s){var t=s.transform,i=s.containerWidth,r=s.iconWidth,l={transform:"translate(".concat(i/2," 256)")},u="translate(".concat(t.x*32,", ").concat(t.y*32,") "),f="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),h="rotate(".concat(t.rotate," 0 0)"),m={transform:"".concat(u," ").concat(f," ").concat(h)},p={transform:"translate(".concat(r/2*-1," -256)")};return{outer:l,inner:m,path:p}}function WC(s){var t=s.transform,i=s.width,r=i===void 0?np:i,l=s.height,u=l===void 0?np:l,f="";return Nx?f+="translate(".concat(t.x/Ds-r/2,"em, ").concat(t.y/Ds-u/2,"em) "):f+="translate(calc(-50% + ".concat(t.x/Ds,"em), calc(-50% + ").concat(t.y/Ds,"em)) "),f+="scale(".concat(t.size/Ds*(t.flipX?-1:1),", ").concat(t.size/Ds*(t.flipY?-1:1),") "),f+="rotate(".concat(t.rotate,"deg) "),f}var qC=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function sy(){var s=Jx,t=$x,i=Kt.cssPrefix,r=Kt.replacementClass,l=qC;if(i!==s||r!==t){var u=new RegExp("\\.".concat(s,"\\-"),"g"),f=new RegExp("\\--".concat(s,"\\-"),"g"),h=new RegExp("\\.".concat(t),"g");l=l.replace(u,".".concat(i,"-")).replace(f,"--".concat(i,"-")).replace(h,".".concat(r))}return l}var T0=!1;function rh(){Kt.autoAddCss&&!T0&&(GC(sy()),T0=!0)}var YC={mixout:function(){return{dom:{css:sy,insertCss:rh}}},hooks:function(){return{beforeDOMElementCreation:function(){rh()},beforeI2svg:function(){rh()}}}},ha=Qa||{};ha[da]||(ha[da]={});ha[da].styles||(ha[da].styles={});ha[da].hooks||(ha[da].hooks={});ha[da].shims||(ha[da].shims=[]);var Ei=ha[da],oy=[],ly=function(){We.removeEventListener("DOMContentLoaded",ly),sc=1,oy.map(function(t){return t()})},sc=!1;ma&&(sc=(We.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(We.readyState),sc||We.addEventListener("DOMContentLoaded",ly));function jC(s){ma&&(sc?setTimeout(s,0):oy.push(s))}function dl(s){var t=s.tag,i=s.attributes,r=i===void 0?{}:i,l=s.children,u=l===void 0?[]:l;return typeof s=="string"?ry(s):"<".concat(t," ").concat(kC(r),">").concat(u.map(dl).join(""),"</").concat(t,">")}function A0(s,t,i){if(s&&s[t]&&s[t][i])return{prefix:t,iconName:i,icon:s[t][i]}}var sh=function(t,i,r,l){var u=Object.keys(t),f=u.length,h=i,m,p,g;for(r===void 0?(m=1,g=t[u[0]]):(m=0,g=r);m<f;m++)p=u[m],g=h(g,t[p],p,t);return g};function uy(s){return Ti(s).length!==1?null:s.codePointAt(0).toString(16)}function R0(s){return Object.keys(s).reduce(function(t,i){var r=s[i],l=!!r.icon;return l?t[r.iconName]=r.icon:t[i]=r,t},{})}function op(s,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=i.skipHooks,l=r===void 0?!1:r,u=R0(t);typeof Ei.hooks.addPack=="function"&&!l?Ei.hooks.addPack(s,R0(t)):Ei.styles[s]=Tt(Tt({},Ei.styles[s]||{}),u),s==="fas"&&op("fa",t)}var il=Ei.styles,ZC=Ei.shims,cy=Object.keys(wp),KC=cy.reduce(function(s,t){return s[t]=Object.keys(wp[t]),s},{}),Np=null,fy={},dy={},hy={},py={},my={};function QC(s){return~IC.indexOf(s)}function JC(s,t){var i=t.split("-"),r=i[0],l=i.slice(1).join("-");return r===s&&l!==""&&!QC(l)?l:null}var gy=function(){var t=function(u){return sh(il,function(f,h,m){return f[m]=sh(h,u,{}),f},{})};fy=t(function(l,u,f){if(u[3]&&(l[u[3]]=f),u[2]){var h=u[2].filter(function(m){return typeof m=="number"});h.forEach(function(m){l[m.toString(16)]=f})}return l}),dy=t(function(l,u,f){if(l[f]=f,u[2]){var h=u[2].filter(function(m){return typeof m=="string"});h.forEach(function(m){l[m]=f})}return l}),my=t(function(l,u,f){var h=u[2];return l[f]=f,h.forEach(function(m){l[m]=f}),l});var i="far"in il||Kt.autoFetchSvg,r=sh(ZC,function(l,u){var f=u[0],h=u[1],m=u[2];return h==="far"&&!i&&(h="fas"),typeof f=="string"&&(l.names[f]={prefix:h,iconName:m}),typeof f=="number"&&(l.unicodes[f.toString(16)]={prefix:h,iconName:m}),l},{names:{},unicodes:{}});hy=r.names,py=r.unicodes,Np=pc(Kt.styleDefault,{family:Kt.familyDefault})};HC(function(s){Np=pc(s.styleDefault,{family:Kt.familyDefault})});gy();function Lp(s,t){return(fy[s]||{})[t]}function $C(s,t){return(dy[s]||{})[t]}function wr(s,t){return(my[s]||{})[t]}function vy(s){return hy[s]||{prefix:null,iconName:null}}function tw(s){var t=py[s],i=Lp("fas",s);return t||(i?{prefix:"fas",iconName:i}:null)||{prefix:null,iconName:null}}function Ja(){return Np}var _y=function(){return{prefix:null,iconName:null,rest:[]}};function ew(s){var t=An,i=cy.reduce(function(r,l){return r[l]="".concat(Kt.cssPrefix,"-").concat(l),r},{});return jx.forEach(function(r){(s.includes(i[r])||s.some(function(l){return KC[r].includes(l)}))&&(t=r)}),t}function pc(s){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=t.family,r=i===void 0?An:i,l=UC[r][s];if(r===cl&&!s)return"fad";var u=E0[r][s]||E0[r][l],f=s in Ei.styles?s:null,h=u||f||null;return h}function nw(s){var t=[],i=null;return s.forEach(function(r){var l=JC(Kt.cssPrefix,r);l?i=l:r&&t.push(r)}),{iconName:i,rest:t}}function C0(s){return s.sort().filter(function(t,i,r){return r.indexOf(t)===i})}var w0=Kx.concat(Zx);function mc(s){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=t.skipLookups,r=i===void 0?!1:i,l=null,u=C0(s.filter(function(y){return w0.includes(y)})),f=C0(s.filter(function(y){return!w0.includes(y)})),h=u.filter(function(y){return l=y,!Ox.includes(y)}),m=dc(h,1),p=m[0],g=p===void 0?null:p,v=ew(u),x=Tt(Tt({},nw(f)),{},{prefix:pc(g,{family:v})});return Tt(Tt(Tt({},x),sw({values:s,family:v,styles:il,config:Kt,canonical:x,givenPrefix:l})),iw(r,l,x))}function iw(s,t,i){var r=i.prefix,l=i.iconName;if(s||!r||!l)return{prefix:r,iconName:l};var u=t==="fa"?vy(l):{},f=wr(r,l);return l=u.iconName||f||l,r=u.prefix||r,r==="far"&&!il.far&&il.fas&&!Kt.autoFetchSvg&&(r="fas"),{prefix:r,iconName:l}}var aw=jx.filter(function(s){return s!==An||s!==cl}),rw=Object.keys(ep).filter(function(s){return s!==An}).map(function(s){return Object.keys(ep[s])}).flat();function sw(s){var t=s.values,i=s.family,r=s.canonical,l=s.givenPrefix,u=l===void 0?"":l,f=s.styles,h=f===void 0?{}:f,m=s.config,p=m===void 0?{}:m,g=i===cl,v=t.includes("fa-duotone")||t.includes("fad"),x=p.familyDefault==="duotone",y=r.prefix==="fad"||r.prefix==="fa-duotone";if(!g&&(v||x||y)&&(r.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab"),!r.prefix&&aw.includes(i)){var E=Object.keys(h).find(function(M){return rw.includes(M)});if(E||p.autoFetchSvg){var R=w2.get(i).defaultShortPrefixId;r.prefix=R,r.iconName=wr(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||u==="fa")&&(r.prefix=Ja()||"fas"),r}var ow=(function(){function s(){t2(this,s),this.definitions={}}return n2(s,[{key:"add",value:function(){for(var i=this,r=arguments.length,l=new Array(r),u=0;u<r;u++)l[u]=arguments[u];var f=l.reduce(this._pullDefinitions,{});Object.keys(f).forEach(function(h){i.definitions[h]=Tt(Tt({},i.definitions[h]||{}),f[h]),op(h,f[h]);var m=wp[An][h];m&&op(m,f[h]),gy()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(i,r){var l=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(l).map(function(u){var f=l[u],h=f.prefix,m=f.iconName,p=f.icon,g=p[2];i[h]||(i[h]={}),g.length>0&&g.forEach(function(v){typeof v=="string"&&(i[h][v]=p)}),i[h][m]=p}),i}}])})(),D0=[],Ls={},Is={},lw=Object.keys(Is);function uw(s,t){var i=t.mixoutsTo;return D0=s,Ls={},Object.keys(Is).forEach(function(r){lw.indexOf(r)===-1&&delete Is[r]}),D0.forEach(function(r){var l=r.mixout?r.mixout():{};if(Object.keys(l).forEach(function(f){typeof l[f]=="function"&&(i[f]=l[f]),rc(l[f])==="object"&&Object.keys(l[f]).forEach(function(h){i[f]||(i[f]={}),i[f][h]=l[f][h]})}),r.hooks){var u=r.hooks();Object.keys(u).forEach(function(f){Ls[f]||(Ls[f]=[]),Ls[f].push(u[f])})}r.provides&&r.provides(Is)}),i}function lp(s,t){for(var i=arguments.length,r=new Array(i>2?i-2:0),l=2;l<i;l++)r[l-2]=arguments[l];var u=Ls[s]||[];return u.forEach(function(f){t=f.apply(null,[t].concat(r))}),t}function Or(s){for(var t=arguments.length,i=new Array(t>1?t-1:0),r=1;r<t;r++)i[r-1]=arguments[r];var l=Ls[s]||[];l.forEach(function(u){u.apply(null,i)})}function $a(){var s=arguments[0],t=Array.prototype.slice.call(arguments,1);return Is[s]?Is[s].apply(null,t):void 0}function up(s){s.prefix==="fa"&&(s.prefix="fas");var t=s.iconName,i=s.prefix||Ja();if(t)return t=wr(i,t)||t,A0(xy.definitions,i,t)||A0(Ei.styles,i,t)}var xy=new ow,cw=function(){Kt.autoReplaceSvg=!1,Kt.observeMutations=!1,Or("noAuto")},fw={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ma?(Or("beforeI2svg",t),$a("pseudoElements2svg",t),$a("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=t.autoReplaceSvgRoot;Kt.autoReplaceSvg===!1&&(Kt.autoReplaceSvg=!0),Kt.observeMutations=!0,jC(function(){hw({autoReplaceSvgRoot:i}),Or("watch",t)})}},dw={icon:function(t){if(t===null)return null;if(rc(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:wr(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var i=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=pc(t[0]);return{prefix:r,iconName:wr(r,i)||i}}if(typeof t=="string"&&(t.indexOf("".concat(Kt.cssPrefix,"-"))>-1||t.match(NC))){var l=mc(t.split(" "),{skipLookups:!0});return{prefix:l.prefix||Ja(),iconName:wr(l.prefix,l.iconName)||l.iconName}}if(typeof t=="string"){var u=Ja();return{prefix:u,iconName:wr(u,t)||t}}}},ei={noAuto:cw,config:Kt,dom:fw,parse:dw,library:xy,findIconDefinition:up,toHtml:dl},hw=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=t.autoReplaceSvgRoot,r=i===void 0?We:i;(Object.keys(Ei.styles).length>0||Kt.autoFetchSvg)&&ma&&Kt.autoReplaceSvg&&ei.dom.i2svg({node:r})};function gc(s,t){return Object.defineProperty(s,"abstract",{get:t}),Object.defineProperty(s,"html",{get:function(){return s.abstract.map(function(r){return dl(r)})}}),Object.defineProperty(s,"node",{get:function(){if(ma){var r=We.createElement("div");return r.innerHTML=s.html,r.children}}}),s}function pw(s){var t=s.children,i=s.main,r=s.mask,l=s.attributes,u=s.styles,f=s.transform;if(Up(f)&&i.found&&!r.found){var h=i.width,m=i.height,p={x:h/m/2,y:.5};l.style=hc(Tt(Tt({},u),{},{"transform-origin":"".concat(p.x+f.x/16,"em ").concat(p.y+f.y/16,"em")}))}return[{tag:"svg",attributes:l,children:t}]}function mw(s){var t=s.prefix,i=s.iconName,r=s.children,l=s.attributes,u=s.symbol,f=u===!0?"".concat(t,"-").concat(Kt.cssPrefix,"-").concat(i):u;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Tt(Tt({},l),{},{id:f}),children:r}]}]}function gw(s){var t=["aria-label","aria-labelledby","title","role"];return t.some(function(i){return i in s})}function Op(s){var t=s.icons,i=t.main,r=t.mask,l=s.prefix,u=s.iconName,f=s.transform,h=s.symbol,m=s.maskId,p=s.extra,g=s.watchable,v=g===void 0?!1:g,x=r.found?r:i,y=x.width,E=x.height,R=[Kt.replacementClass,u?"".concat(Kt.cssPrefix,"-").concat(u):""].filter(function(L){return p.classes.indexOf(L)===-1}).filter(function(L){return L!==""||!!L}).concat(p.classes).join(" "),M={children:[],attributes:Tt(Tt({},p.attributes),{},{"data-prefix":l,"data-icon":u,class:R,role:p.attributes.role||"img",viewBox:"0 0 ".concat(y," ").concat(E)})};!gw(p.attributes)&&!p.attributes["aria-hidden"]&&(M.attributes["aria-hidden"]="true"),v&&(M.attributes[Lr]="");var _=Tt(Tt({},M),{},{prefix:l,iconName:u,main:i,mask:r,maskId:m,transform:f,symbol:h,styles:Tt({},p.styles)}),I=r.found&&i.found?$a("generateAbstractMask",_)||{children:[],attributes:{}}:$a("generateAbstractIcon",_)||{children:[],attributes:{}},O=I.children,D=I.attributes;return _.children=O,_.attributes=D,h?mw(_):pw(_)}function U0(s){var t=s.content,i=s.width,r=s.height,l=s.transform,u=s.extra,f=s.watchable,h=f===void 0?!1:f,m=Tt(Tt({},u.attributes),{},{class:u.classes.join(" ")});h&&(m[Lr]="");var p=Tt({},u.styles);Up(l)&&(p.transform=WC({transform:l,width:i,height:r}),p["-webkit-transform"]=p.transform);var g=hc(p);g.length>0&&(m.style=g);var v=[];return v.push({tag:"span",attributes:m,children:[t]}),v}function vw(s){var t=s.content,i=s.extra,r=Tt(Tt({},i.attributes),{},{class:i.classes.join(" ")}),l=hc(i.styles);l.length>0&&(r.style=l);var u=[];return u.push({tag:"span",attributes:r,children:[t]}),u}var oh=Ei.styles;function cp(s){var t=s[0],i=s[1],r=s.slice(4),l=dc(r,1),u=l[0],f=null;return Array.isArray(u)?f={tag:"g",attributes:{class:"".concat(Kt.cssPrefix,"-").concat(ah.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Kt.cssPrefix,"-").concat(ah.SECONDARY),fill:"currentColor",d:u[0]}},{tag:"path",attributes:{class:"".concat(Kt.cssPrefix,"-").concat(ah.PRIMARY),fill:"currentColor",d:u[1]}}]}:f={tag:"path",attributes:{fill:"currentColor",d:u}},{found:!0,width:t,height:i,icon:f}}var _w={found:!1,width:512,height:512};function xw(s,t){!ey&&!Kt.showMissingIcons&&s&&console.error('Icon with name "'.concat(s,'" and prefix "').concat(t,'" is missing.'))}function fp(s,t){var i=t;return t==="fa"&&Kt.styleDefault!==null&&(t=Ja()),new Promise(function(r,l){if(i==="fa"){var u=vy(s)||{};s=u.iconName||s,t=u.prefix||t}if(s&&t&&oh[t]&&oh[t][s]){var f=oh[t][s];return r(cp(f))}xw(s,t),r(Tt(Tt({},_w),{},{icon:Kt.showMissingIcons&&s?$a("missingIconAbstract")||{}:{}}))})}var N0=function(){},dp=Kt.measurePerformance&&qu&&qu.mark&&qu.measure?qu:{mark:N0,measure:N0},jo='FA "7.0.1"',yw=function(t){return dp.mark("".concat(jo," ").concat(t," begins")),function(){return yy(t)}},yy=function(t){dp.mark("".concat(jo," ").concat(t," ends")),dp.measure("".concat(jo," ").concat(t),"".concat(jo," ").concat(t," begins"),"".concat(jo," ").concat(t," ends"))},Pp={begin:yw,end:yy},tc=function(){};function L0(s){var t=s.getAttribute?s.getAttribute(Lr):null;return typeof t=="string"}function Sw(s){var t=s.getAttribute?s.getAttribute(Rp):null,i=s.getAttribute?s.getAttribute(Cp):null;return t&&i}function Mw(s){return s&&s.classList&&s.classList.contains&&s.classList.contains(Kt.replacementClass)}function Ew(){if(Kt.autoReplaceSvg===!0)return ec.replace;var s=ec[Kt.autoReplaceSvg];return s||ec.replace}function bw(s){return We.createElementNS("http://www.w3.org/2000/svg",s)}function Tw(s){return We.createElement(s)}function Sy(s){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=t.ceFn,r=i===void 0?s.tag==="svg"?bw:Tw:i;if(typeof s=="string")return We.createTextNode(s);var l=r(s.tag);Object.keys(s.attributes||[]).forEach(function(f){l.setAttribute(f,s.attributes[f])});var u=s.children||[];return u.forEach(function(f){l.appendChild(Sy(f,{ceFn:r}))}),l}function Aw(s){var t=" ".concat(s.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var ec={replace:function(t){var i=t[0];if(i.parentNode)if(t[1].forEach(function(l){i.parentNode.insertBefore(Sy(l),i)}),i.getAttribute(Lr)===null&&Kt.keepOriginalSource){var r=We.createComment(Aw(i));i.parentNode.replaceChild(r,i)}else i.remove()},nest:function(t){var i=t[0],r=t[1];if(~Dp(i).indexOf(Kt.replacementClass))return ec.replace(t);var l=new RegExp("".concat(Kt.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var u=r[0].attributes.class.split(" ").reduce(function(h,m){return m===Kt.replacementClass||m.match(l)?h.toSvg.push(m):h.toNode.push(m),h},{toNode:[],toSvg:[]});r[0].attributes.class=u.toSvg.join(" "),u.toNode.length===0?i.removeAttribute("class"):i.setAttribute("class",u.toNode.join(" "))}var f=r.map(function(h){return dl(h)}).join(`
`);i.setAttribute(Lr,""),i.innerHTML=f}};function O0(s){s()}function My(s,t){var i=typeof t=="function"?t:tc;if(s.length===0)i();else{var r=O0;Kt.mutateApproach===wC&&(r=Qa.requestAnimationFrame||O0),r(function(){var l=Ew(),u=Pp.begin("mutate");s.map(l),u(),i()})}}var Ip=!1;function Ey(){Ip=!0}function hp(){Ip=!1}var oc=null;function P0(s){if(x0&&Kt.observeMutations){var t=s.treeCallback,i=t===void 0?tc:t,r=s.nodeCallback,l=r===void 0?tc:r,u=s.pseudoElementsCallback,f=u===void 0?tc:u,h=s.observeMutationsRoot,m=h===void 0?We:h;oc=new x0(function(p){if(!Ip){var g=Ja();Ws(p).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!L0(v.addedNodes[0])&&(Kt.searchPseudoElements&&f(v.target),i(v.target)),v.type==="attributes"&&v.target.parentNode&&Kt.searchPseudoElements&&f([v.target],!0),v.type==="attributes"&&L0(v.target)&&~PC.indexOf(v.attributeName))if(v.attributeName==="class"&&Sw(v.target)){var x=mc(Dp(v.target)),y=x.prefix,E=x.iconName;v.target.setAttribute(Rp,y||g),E&&v.target.setAttribute(Cp,E)}else Mw(v.target)&&l(v.target)})}}),ma&&oc.observe(m,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Rw(){oc&&oc.disconnect()}function Cw(s){var t=s.getAttribute("style"),i=[];return t&&(i=t.split(";").reduce(function(r,l){var u=l.split(":"),f=u[0],h=u.slice(1);return f&&h.length>0&&(r[f]=h.join(":").trim()),r},{})),i}function ww(s){var t=s.getAttribute("data-prefix"),i=s.getAttribute("data-icon"),r=s.innerText!==void 0?s.innerText.trim():"",l=mc(Dp(s));return l.prefix||(l.prefix=Ja()),t&&i&&(l.prefix=t,l.iconName=i),l.iconName&&l.prefix||(l.prefix&&r.length>0&&(l.iconName=$C(l.prefix,s.innerText)||Lp(l.prefix,uy(s.innerText))),!l.iconName&&Kt.autoFetchSvg&&s.firstChild&&s.firstChild.nodeType===Node.TEXT_NODE&&(l.iconName=s.firstChild.data)),l}function Dw(s){var t=Ws(s.attributes).reduce(function(i,r){return i.name!=="class"&&i.name!=="style"&&(i[r.name]=r.value),i},{});return t}function Uw(){return{iconName:null,prefix:null,transform:Ii,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function I0(s){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},i=ww(s),r=i.iconName,l=i.prefix,u=i.rest,f=Dw(s),h=lp("parseNodeAttributes",{},s),m=t.styleParser?Cw(s):[];return Tt({iconName:r,prefix:l,transform:Ii,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:u,styles:m,attributes:f}},h)}var Nw=Ei.styles;function by(s){var t=Kt.autoReplaceSvg==="nest"?I0(s,{styleParser:!1}):I0(s);return~t.extra.classes.indexOf(iy)?$a("generateLayersText",s,t):$a("generateSvgReplacementMutation",s,t)}function Lw(){return[].concat(Ti(Zx),Ti(Kx))}function F0(s){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ma)return Promise.resolve();var i=We.documentElement.classList,r=function(v){return i.add("".concat(M0,"-").concat(v))},l=function(v){return i.remove("".concat(M0,"-").concat(v))},u=Kt.autoFetchSvg?Lw():Ox.concat(Object.keys(Nw));u.includes("fa")||u.push("fa");var f=[".".concat(iy,":not([").concat(Lr,"])")].concat(u.map(function(g){return".".concat(g,":not([").concat(Lr,"])")})).join(", ");if(f.length===0)return Promise.resolve();var h=[];try{h=Ws(s.querySelectorAll(f))}catch{}if(h.length>0)r("pending"),l("complete");else return Promise.resolve();var m=Pp.begin("onTree"),p=h.reduce(function(g,v){try{var x=by(v);x&&g.push(x)}catch(y){ey||y.name==="MissingIcon"&&console.error(y)}return g},[]);return new Promise(function(g,v){Promise.all(p).then(function(x){My(x,function(){r("active"),r("complete"),l("pending"),typeof t=="function"&&t(),m(),g()})}).catch(function(x){m(),v(x)})})}function Ow(s){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;by(s).then(function(i){i&&My([i],t)})}function Pw(s){return function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:up(t||{}),l=i.mask;return l&&(l=(l||{}).icon?l:up(l||{})),s(r,Tt(Tt({},i),{},{mask:l}))}}var Iw=function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.transform,l=r===void 0?Ii:r,u=i.symbol,f=u===void 0?!1:u,h=i.mask,m=h===void 0?null:h,p=i.maskId,g=p===void 0?null:p,v=i.classes,x=v===void 0?[]:v,y=i.attributes,E=y===void 0?{}:y,R=i.styles,M=R===void 0?{}:R;if(t){var _=t.prefix,I=t.iconName,O=t.icon;return gc(Tt({type:"icon"},t),function(){return Or("beforeDOMElementCreation",{iconDefinition:t,params:i}),Op({icons:{main:cp(O),mask:m?cp(m.icon):{found:!1,width:null,height:null,icon:{}}},prefix:_,iconName:I,transform:Tt(Tt({},Ii),l),symbol:f,maskId:g,extra:{attributes:E,styles:M,classes:x}})})}},Fw={mixout:function(){return{icon:Pw(Iw)}},hooks:function(){return{mutationObserverCallbacks:function(i){return i.treeCallback=F0,i.nodeCallback=Ow,i}}},provides:function(t){t.i2svg=function(i){var r=i.node,l=r===void 0?We:r,u=i.callback,f=u===void 0?function(){}:u;return F0(l,f)},t.generateSvgReplacementMutation=function(i,r){var l=r.iconName,u=r.prefix,f=r.transform,h=r.symbol,m=r.mask,p=r.maskId,g=r.extra;return new Promise(function(v,x){Promise.all([fp(l,u),m.iconName?fp(m.iconName,m.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var E=dc(y,2),R=E[0],M=E[1];v([i,Op({icons:{main:R,mask:M},prefix:u,iconName:l,transform:f,symbol:h,maskId:p,extra:g,watchable:!0})])}).catch(x)})},t.generateAbstractIcon=function(i){var r=i.children,l=i.attributes,u=i.main,f=i.transform,h=i.styles,m=hc(h);m.length>0&&(l.style=m);var p;return Up(f)&&(p=$a("generateAbstractTransformGrouping",{main:u,transform:f,containerWidth:u.width,iconWidth:u.width})),r.push(p||u.icon),{children:r,attributes:l}}}},zw={mixout:function(){return{layer:function(i){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=r.classes,u=l===void 0?[]:l;return gc({type:"layer"},function(){Or("beforeDOMElementCreation",{assembler:i,params:r});var f=[];return i(function(h){Array.isArray(h)?h.map(function(m){f=f.concat(m.abstract)}):f=f.concat(h.abstract)}),[{tag:"span",attributes:{class:["".concat(Kt.cssPrefix,"-layers")].concat(Ti(u)).join(" ")},children:f}]})}}}},Bw={mixout:function(){return{counter:function(i){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};r.title;var l=r.classes,u=l===void 0?[]:l,f=r.attributes,h=f===void 0?{}:f,m=r.styles,p=m===void 0?{}:m;return gc({type:"counter",content:i},function(){return Or("beforeDOMElementCreation",{content:i,params:r}),vw({content:i.toString(),extra:{attributes:h,styles:p,classes:["".concat(Kt.cssPrefix,"-layers-counter")].concat(Ti(u))}})})}}}},Hw={mixout:function(){return{text:function(i){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=r.transform,u=l===void 0?Ii:l,f=r.classes,h=f===void 0?[]:f,m=r.attributes,p=m===void 0?{}:m,g=r.styles,v=g===void 0?{}:g;return gc({type:"text",content:i},function(){return Or("beforeDOMElementCreation",{content:i,params:r}),U0({content:i,transform:Tt(Tt({},Ii),u),extra:{attributes:p,styles:v,classes:["".concat(Kt.cssPrefix,"-layers-text")].concat(Ti(h))}})})}}},provides:function(t){t.generateLayersText=function(i,r){var l=r.transform,u=r.extra,f=null,h=null;if(Nx){var m=parseInt(getComputedStyle(i).fontSize,10),p=i.getBoundingClientRect();f=p.width/m,h=p.height/m}return Promise.resolve([i,U0({content:i.innerHTML,width:f,height:h,transform:l,extra:u,watchable:!0})])}}},Ty=new RegExp('"',"ug"),z0=[1105920,1112319],B0=Tt(Tt(Tt(Tt({},{FontAwesome:{normal:"fas",400:"fas"}}),C2),RC),F2),pp=Object.keys(B0).reduce(function(s,t){return s[t.toLowerCase()]=B0[t],s},{}),Gw=Object.keys(pp).reduce(function(s,t){var i=pp[t];return s[t]=i[900]||Ti(Object.entries(i))[0][1],s},{});function Vw(s){var t=s.replace(Ty,"");return uy(Ti(t)[0]||"")}function kw(s){var t=s.getPropertyValue("font-feature-settings").includes("ss01"),i=s.getPropertyValue("content"),r=i.replace(Ty,""),l=r.codePointAt(0),u=l>=z0[0]&&l<=z0[1],f=r.length===2?r[0]===r[1]:!1;return u||f||t}function Xw(s,t){var i=s.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),l=isNaN(r)?"normal":r;return(pp[i]||{})[l]||Gw[i]}function H0(s,t){var i="".concat(CC).concat(t.replace(":","-"));return new Promise(function(r,l){if(s.getAttribute(i)!==null)return r();var u=Ws(s.children),f=u.filter(function(H){return H.getAttribute(ip)===t})[0],h=Qa.getComputedStyle(s,t),m=h.getPropertyValue("font-family"),p=m.match(LC),g=h.getPropertyValue("font-weight"),v=h.getPropertyValue("content");if(f&&!p)return s.removeChild(f),r();if(p&&v!=="none"&&v!==""){var x=h.getPropertyValue("content"),y=Xw(m,g),E=Vw(x),R=p[0].startsWith("FontAwesome"),M=kw(h),_=Lp(y,E),I=_;if(R){var O=tw(E);O.iconName&&O.prefix&&(_=O.iconName,y=O.prefix)}if(_&&!M&&(!f||f.getAttribute(Rp)!==y||f.getAttribute(Cp)!==I)){s.setAttribute(i,I),f&&s.removeChild(f);var D=Uw(),L=D.extra;L.attributes[ip]=t,fp(_,y).then(function(H){var B=Op(Tt(Tt({},D),{},{icons:{main:H,mask:_y()},prefix:y,iconName:I,extra:L,watchable:!0})),Z=We.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?s.insertBefore(Z,s.firstChild):s.appendChild(Z),Z.outerHTML=B.map(function(w){return dl(w)}).join(`
`),s.removeAttribute(i),r()}).catch(l)}else r()}else r()})}function Ww(s){return Promise.all([H0(s,"::before"),H0(s,"::after")])}function qw(s){return s.parentNode!==document.head&&!~DC.indexOf(s.tagName.toUpperCase())&&!s.getAttribute(ip)&&(!s.parentNode||s.parentNode.tagName!=="svg")}var Yw=function(t){return!!t&&ty.some(function(i){return t.includes(i)})},jw=function(t){if(!t)return[];var i=new Set,r=t.split(/,(?![^()]*\))/).map(function(m){return m.trim()});r=r.flatMap(function(m){return m.includes("(")?m:m.split(",").map(function(p){return p.trim()})});var l=$u(r),u;try{for(l.s();!(u=l.n()).done;){var f=u.value;if(Yw(f)){var h=ty.reduce(function(m,p){return m.replace(p,"")},f);h!==""&&h!=="*"&&i.add(h)}}}catch(m){l.e(m)}finally{l.f()}return i};function G0(s){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(ma){var i;if(t)i=s;else if(Kt.searchPseudoElementsFullScan)i=s.querySelectorAll("*");else{var r=new Set,l=$u(document.styleSheets),u;try{for(l.s();!(u=l.n()).done;){var f=u.value;try{var h=$u(f.cssRules),m;try{for(h.s();!(m=h.n()).done;){var p=m.value,g=jw(p.selectorText),v=$u(g),x;try{for(v.s();!(x=v.n()).done;){var y=x.value;r.add(y)}}catch(R){v.e(R)}finally{v.f()}}}catch(R){h.e(R)}finally{h.f()}}catch(R){Kt.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(f.href," (").concat(R.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(R){l.e(R)}finally{l.f()}if(!r.size)return;var E=Array.from(r).join(", ");try{i=s.querySelectorAll(E)}catch{}}return new Promise(function(R,M){var _=Ws(i).filter(qw).map(Ww),I=Pp.begin("searchPseudoElements");Ey(),Promise.all(_).then(function(){I(),hp(),R()}).catch(function(){I(),hp(),M()})})}}var Zw={hooks:function(){return{mutationObserverCallbacks:function(i){return i.pseudoElementsCallback=G0,i}}},provides:function(t){t.pseudoElements2svg=function(i){var r=i.node,l=r===void 0?We:r;Kt.searchPseudoElements&&G0(l)}}},V0=!1,Kw={mixout:function(){return{dom:{unwatch:function(){Ey(),V0=!0}}}},hooks:function(){return{bootstrap:function(){P0(lp("mutationObserverCallbacks",{}))},noAuto:function(){Rw()},watch:function(i){var r=i.observeMutationsRoot;V0?hp():P0(lp("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},k0=function(t){var i={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,l){var u=l.toLowerCase().split("-"),f=u[0],h=u.slice(1).join("-");if(f&&h==="h")return r.flipX=!0,r;if(f&&h==="v")return r.flipY=!0,r;if(h=parseFloat(h),isNaN(h))return r;switch(f){case"grow":r.size=r.size+h;break;case"shrink":r.size=r.size-h;break;case"left":r.x=r.x-h;break;case"right":r.x=r.x+h;break;case"up":r.y=r.y-h;break;case"down":r.y=r.y+h;break;case"rotate":r.rotate=r.rotate+h;break}return r},i)},Qw={mixout:function(){return{parse:{transform:function(i){return k0(i)}}}},hooks:function(){return{parseNodeAttributes:function(i,r){var l=r.getAttribute("data-fa-transform");return l&&(i.transform=k0(l)),i}}},provides:function(t){t.generateAbstractTransformGrouping=function(i){var r=i.main,l=i.transform,u=i.containerWidth,f=i.iconWidth,h={transform:"translate(".concat(u/2," 256)")},m="translate(".concat(l.x*32,", ").concat(l.y*32,") "),p="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),g="rotate(".concat(l.rotate," 0 0)"),v={transform:"".concat(m," ").concat(p," ").concat(g)},x={transform:"translate(".concat(f/2*-1," -256)")},y={outer:h,inner:v,path:x};return{tag:"g",attributes:Tt({},y.outer),children:[{tag:"g",attributes:Tt({},y.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:Tt(Tt({},r.icon.attributes),y.path)}]}]}}}},lh={x:0,y:0,width:"100%",height:"100%"};function X0(s){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return s.attributes&&(s.attributes.fill||t)&&(s.attributes.fill="black"),s}function Jw(s){return s.tag==="g"?s.children:[s]}var $w={hooks:function(){return{parseNodeAttributes:function(i,r){var l=r.getAttribute("data-fa-mask"),u=l?mc(l.split(" ").map(function(f){return f.trim()})):_y();return u.prefix||(u.prefix=Ja()),i.mask=u,i.maskId=r.getAttribute("data-fa-mask-id"),i}}},provides:function(t){t.generateAbstractMask=function(i){var r=i.children,l=i.attributes,u=i.main,f=i.mask,h=i.maskId,m=i.transform,p=u.width,g=u.icon,v=f.width,x=f.icon,y=XC({transform:m,containerWidth:v,iconWidth:p}),E={tag:"rect",attributes:Tt(Tt({},lh),{},{fill:"white"})},R=g.children?{children:g.children.map(X0)}:{},M={tag:"g",attributes:Tt({},y.inner),children:[X0(Tt({tag:g.tag,attributes:Tt(Tt({},g.attributes),y.path)},R))]},_={tag:"g",attributes:Tt({},y.outer),children:[M]},I="mask-".concat(h||b0()),O="clip-".concat(h||b0()),D={tag:"mask",attributes:Tt(Tt({},lh),{},{id:I,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[E,_]},L={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:Jw(x)},D]};return r.push(L,{tag:"rect",attributes:Tt({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(I,")")},lh)}),{children:r,attributes:l}}}},tD={provides:function(t){var i=!1;Qa.matchMedia&&(i=Qa.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],l={fill:"currentColor"},u={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:Tt(Tt({},l),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var f=Tt(Tt({},u),{},{attributeName:"opacity"}),h={tag:"circle",attributes:Tt(Tt({},l),{},{cx:"256",cy:"364",r:"28"}),children:[]};return i||h.children.push({tag:"animate",attributes:Tt(Tt({},u),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Tt(Tt({},f),{},{values:"1;0;1;1;0;1;"})}),r.push(h),r.push({tag:"path",attributes:Tt(Tt({},l),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:i?[]:[{tag:"animate",attributes:Tt(Tt({},f),{},{values:"1;0;0;0;0;1;"})}]}),i||r.push({tag:"path",attributes:Tt(Tt({},l),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Tt(Tt({},f),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},eD={hooks:function(){return{parseNodeAttributes:function(i,r){var l=r.getAttribute("data-fa-symbol"),u=l===null?!1:l===""?!0:l;return i.symbol=u,i}}}},nD=[YC,Fw,zw,Bw,Hw,Zw,Kw,Qw,$w,tD,eD];uw(nD,{mixoutsTo:ei});ei.noAuto;var iD=ei.config;ei.library;ei.dom;var Ay=ei.parse;ei.findIconDefinition;ei.toHtml;var aD=ei.icon;ei.layer;ei.text;ei.counter;function rD(s){return s=s-0,s===s}function Ry(s){return rD(s)?s:(s=s.replaceAll(/[_-]+(.)?/g,(t,i)=>i?i.toUpperCase():""),s.charAt(0).toLowerCase()+s.slice(1))}function sD(s){return s.charAt(0).toUpperCase()+s.slice(1)}var Us=new Map,oD=1e3;function lD(s){if(Us.has(s))return Us.get(s);const t={};let i=0;const r=s.length;for(;i<r;){const l=s.indexOf(";",i),u=l===-1?r:l,f=s.slice(i,u).trim();if(f){const h=f.indexOf(":");if(h>0){const m=f.slice(0,h).trim(),p=f.slice(h+1).trim();if(m&&p){const g=Ry(m);t[g.startsWith("webkit")?sD(g):g]=p}}}i=u+1}if(Us.size===oD){const l=Us.keys().next().value;l&&Us.delete(l)}return Us.set(s,t),t}function Cy(s,t,i={}){if(typeof t=="string")return t;const r=(t.children||[]).map(p=>Cy(s,p)),l=t.attributes||{},u={};for(const[p,g]of Object.entries(l))switch(!0){case p==="class":{u.className=g,delete l.class;break}case p==="style":{u.style=lD(String(g));break}case p.startsWith("aria-"):case p.startsWith("data-"):{u[p.toLowerCase()]=g;break}default:u[Ry(p)]=g}const{style:f,"aria-label":h,...m}=i;return f&&(u.style=u.style?{...u.style,...f}:f),h&&(u["aria-label"]=h,u["aria-hidden"]="false"),s(t.tag,{...m,...u},...r)}var W0=(s,t)=>{const i=Qo.useId();return s||(t?i:void 0)},uD=class{constructor(s="react-fontawesome"){this.enabled=!1;let t=!1;try{t=typeof process<"u"&&!1}catch{}this.scope=s,this.enabled=t}log(...s){this.enabled&&console.log(`[${this.scope}]`,...s)}warn(...s){this.enabled&&console.warn(`[${this.scope}]`,...s)}error(...s){this.enabled&&console.error(`[${this.scope}]`,...s)}},cD="searchPseudoElementsFullScan"in iD?"7.0.0":"6.0.0",fD=Number.parseInt(cD)>=7,ia={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse"},dD={left:"fa-pull-left",right:"fa-pull-right"},hD={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},pD={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},aa={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto"};function mD(s){const{beat:t,fade:i,beatFade:r,bounce:l,shake:u,spin:f,spinPulse:h,spinReverse:m,pulse:p,fixedWidth:g,inverse:v,border:x,flip:y,size:E,rotation:R,pull:M,swapOpacity:_,rotateBy:I,widthAuto:O,className:D}=s,L=[];return D&&L.push(...D.split(" ")),t&&L.push(ia.beat),i&&L.push(ia.fade),r&&L.push(ia.beatFade),l&&L.push(ia.bounce),u&&L.push(ia.shake),f&&L.push(ia.spin),m&&L.push(ia.spinReverse),h&&L.push(ia.spinPulse),p&&L.push(ia.pulse),g&&L.push(aa.fixedWidth),v&&L.push(aa.inverse),x&&L.push(aa.border),y===!0&&L.push(aa.flip),(y==="horizontal"||y==="both")&&L.push(aa.flipHorizontal),(y==="vertical"||y==="both")&&L.push(aa.flipVertical),E!=null&&L.push(pD[E]),R!=null&&R!==0&&L.push(hD[R]),M!=null&&L.push(dD[M]),_&&L.push(aa.swapOpacity),fD&&(I&&L.push(aa.rotateBy),O&&L.push(aa.widthAuto)),L}var gD=s=>typeof s=="object"&&"icon"in s&&!!s.icon;function q0(s){if(s)return gD(s)?s:Ay.icon(s)}function vD(s){return Object.keys(s)}var Y0=new uD("FontAwesomeIcon"),wy={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},_D=new Set(Object.keys(wy)),Dy=Z0.forwardRef((s,t)=>{const i={...wy,...s},{icon:r,mask:l,symbol:u,title:f,titleId:h,maskId:m,transform:p}=i,g=W0(m,!!l),v=W0(h,!!f),x=q0(r);if(!x)return Y0.error("Icon lookup is undefined",r),null;const y=mD(i),E=typeof p=="string"?Ay.transform(p):p,R=q0(l),M=aD(x,{...y.length>0&&{classes:y},...E&&{transform:E},...R&&{mask:R},symbol:u,title:f,titleId:v,maskId:g});if(!M)return Y0.error("Could not find icon",x),null;const{abstract:_}=M,I={ref:t};for(const O of vD(i))_D.has(O)||(I[O]=i[O]);return xD(_[0],I)});Dy.displayName="FontAwesomeIcon";var xD=Cy.bind(null,Z0.createElement);/*!
 * Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var j0={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]};const yD="/NANA/assets/fotProdAct1-6Kz3R_vE.png",SD="/NANA/assets/fotProdAct2-bAtzERfx.png",MD="/NANA/assets/fotProdAct3-BYnyXmwp.png",ED="/NANA/assets/fotProdAct4-CGxyA4-s.png",bD="/NANA/assets/fotAcce1-Cf2plBou.png",TD="/NANA/assets/fotAcce2-D02EA7OT.png",AD="/NANA/assets/fotAcce3-CG7kmB8v.png",RD="/NANA/assets/fotAcce4-BjAG9Jxs.png",CD="/NANA/assets/fotSegundaMano1-D_OzIWw7.png",wD="/NANA/assets/fotSegundaMano2-Dhpd0Fbr.png",DD="/NANA/assets/fotSegundaMano3-FcO977ia.png",UD="/NANA/assets/fotSegundaMano4-CQhWlkGl.png",ND=()=>{const s=Qo.useRef(null);Qo.useEffect(()=>{if(!s.current)return;const y=new sb,E=new fi(75,window.innerWidth/window.innerHeight,.1,1e3),R=new QR({antialias:!0,alpha:!0});R.setSize(window.innerWidth,window.innerHeight),R.setPixelRatio(window.devicePixelRatio),s.current.appendChild(R.domElement);const M=new pa,_=5e3,I=new Float32Array(_*3),O=new Float32Array(_*3);for(let B=0;B<_*3;B++)I[B]=(Math.random()-.5)*10,O[B]=Math.random();M.setAttribute("position",new di(I,3)),M.setAttribute("color",new di(O,3));const D=new yx({size:.02,vertexColors:!0,transparent:!0,blending:uh}),L=new cb(M,D);y.add(L),E.position.z=2;const H=()=>{requestAnimationFrame(H),L.rotation.y+=5e-4,L.rotation.x+=2e-4,R.render(y,E)};return H(),()=>{s.current&&s.current.removeChild(R.domElement),R.dispose()}},[]);const t=()=>ce.jsx("header",{className:"fixed top-0 left-0 w-full z-20 bg-primary/80 backdrop-blur-sm border-b border-gray-700",children:ce.jsx("nav",{className:"container mx-auto p-4 flex justify-between items-center font-bold text-lg",children:ce.jsx("a",{href:"#",className:"text-text-secondary font-brand hover:text-text-primary w transition-colors ",children:"#NANA"})})}),i=()=>ce.jsxs("div",{className:"relative w-screen h-screen overflow-hidden flex flex-col items-center justify-center text-center",children:[ce.jsx("div",{ref:s,className:"absolute inset-0 z-0"}),ce.jsxs("div",{className:"relative z-10 p-8 rounded-xl bg-primary/50 backdrop-blur-md shadow-2xl",children:[ce.jsx("h1",{className:"text-text-secondary font-brand text-5xl md:text-7xl font-extrabold mb-4",children:"#NANA"}),ce.jsx("p",{className:"text-lg md:text-xl text-text-primary",children:"Ropa que define tu estilo."})]})]}),r=()=>ce.jsxs("section",{className:"mt-8 mb-20 text-center",children:[ce.jsx("h2",{className:"font-brand text-4xl md:text-5xl  mb-4",children:"NO SEGUIMOS TENDENCIAS. LAS CREAMOS."}),ce.jsx("p",{className:"font-body text-lg  max-w-3xl mx-auto",children:"Somos para las que no piden permiso. Para las que mezclan, se atreven y escriben su propia historia con cada outfit. #NANA no es ropa, es una actitud."})]}),l=({children:y})=>ce.jsx("h2",{className:"text-text-primary font-brand text-4xl md:text-5xl  text-center mb-10 tracking-wider uppercase",children:y}),u=({titulo:y,productos:E})=>ce.jsxs("section",{children:[ce.jsx(l,{children:y}),ce.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:E.map(R=>ce.jsx(f,{producto:R,onVerMas:()=>setSelectedProduct(R)},R.id))})]}),f=({producto:y})=>ce.jsxs("div",{className:"bg-neutral-800 rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105",children:[ce.jsx("div",{className:"w-full aspect-[4/5] overflow-hidden",children:ce.jsx("img",{src:y.imagenUrl,alt:y.nombre,className:"w-full h-auto object-cover"})}),ce.jsxs("div",{className:"p-4 flex flex-col items-center text-center",children:[ce.jsx("h3",{className:"text-text-primary text-xl font-body mb-2",children:y.nombre}),ce.jsx("p",{className:"text-text-primary font-body mb-4",children:y.descripcion}),ce.jsxs("span",{className:"text-text-primary text-2xl font-bold mb-4",children:["$",y.precio.toFixed(2)]})]})]}),h=[{id:1,nombre:"Sudadera Negra Clásica",precio:55.99,imagenUrl:yD,descripcion:"Una sudadera cómoda y versátil, ideal para cualquier ocasión."},{id:2,nombre:"Pantalones Deportivos Grises",precio:45,imagenUrl:SD,descripcion:"Pantalones holgados con un diseño moderno y minimalista."},{id:3,nombre:"Camiseta Blanca Oversize",precio:30.5,imagenUrl:MD,descripcion:"Un básico atemporal en algodón de alta calidad."},{id:4,nombre:"Gorra Estampada",precio:25,imagenUrl:ED,descripcion:"El accesorio perfecto para complementar tu estilo."}],m=[{id:1,nombre:"Sudadera Negra Clásica",precio:55.99,imagenUrl:bD,descripcion:"Una sudadera cómoda y versátil, ideal para cualquier ocasión."},{id:2,nombre:"Pantalones Deportivos Grises",precio:45,imagenUrl:TD,descripcion:"Pantalones holgados con un diseño moderno y minimalista."},{id:3,nombre:"Camiseta Blanca Oversize",precio:30.5,imagenUrl:AD,descripcion:"Un básico atemporal en algodón de alta calidad."},{id:4,nombre:"Gorra Estampada",precio:25,imagenUrl:RD,descripcion:"El accesorio perfecto para complementar tu estilo."}],p=[{id:1,nombre:"Chaqueta de Cuero Vintage",precio:80,imagenUrl:CD,descripcion:"Una chaqueta de cuero auténtico con carácter."},{id:2,nombre:"Botas de Combate",precio:70,imagenUrl:wD,descripcion:"Botas resistentes y con estilo para cualquier aventura."},{id:3,nombre:"Vestido Floral",precio:40,imagenUrl:DD,descripcion:"Un vestido ligero y fresco, perfecto para el verano."},{id:4,nombre:"Camisa de Rayas",precio:35,imagenUrl:UD,descripcion:"Una camisa clásica que nunca pasa de moda."}],g=[{id:1,name:"Instagram (Empresa)",url:"https://www.instagram.com/nana.uruguay?igsh=MWpwYXEwcTVhM2x0Mg%3D%3D",icon:j0},{id:2,name:"Instagram (Personal)",url:"https://www.instagram.com/mili.vidarte/",icon:j0}],v=({links:y})=>ce.jsx("div",{className:"flex justify-center space-x-6 mb-4",children:y.map(E=>ce.jsxs("a",{href:E.url,target:"_blank",rel:"noopener noreferrer",title:E.name,className:`\r
                    flex items-center space-x-2 p-3 rounded-xl \r
                    border border-text-primary \r
                    text-text-primary text-base font-semibold\r
                    transition-colors duration-200\r
                    hover:bg-text-primary hover:text-secondary \r
                  `,children:[ce.jsx(Dy,{icon:E.icon}),ce.jsx("span",{children:E.name})]},E.id))}),x=()=>ce.jsx("footer",{className:"bg-secondary border-t border-gray-700 py-3 text-center text-text-primary mt-20",children:ce.jsx(v,{links:g})});return ce.jsxs("div",{className:`\r
            // 🟢 ¡USAMOS LA CLASE DEFINIDA EN TAILWIND!\r
            bg-fondo-web \r
            \r
            // 🟢 Comportamiento del fondo\r
            bg-cover bg-fixed bg-center \r
            \r
            // 🟢 Clases existentes (usan tus vars de tailwind.config.js) bg-primary\r
            text-text-primary  min-h-screen font-body\r
        `,children:[ce.jsx("style",{children:`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
        `}),ce.jsx(t,{}),ce.jsx(i,{}),ce.jsx(r,{}),ce.jsxs("main",{className:"space-y-16",children:[ce.jsx(u,{titulo:"Coleccion Actual",productos:h}),ce.jsx(u,{titulo:"Accesorios",productos:m}),ce.jsx(u,{titulo:"Segunda Mano",productos:p})]}),ce.jsx(x,{})]})};XM.createRoot(document.getElementById("root")).render(ce.jsx(Qo.StrictMode,{children:ce.jsx(ND,{})}));
