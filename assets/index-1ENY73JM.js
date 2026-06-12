(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var td={exports:{}},Io={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Og;function HS(){if(Og)return Io;Og=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:d,ref:l!==void 0?l:null,props:c}}return Io.Fragment=t,Io.jsx=i,Io.jsxs=i,Io}var Pg;function GS(){return Pg||(Pg=1,td.exports=HS()),td.exports}var C=GS(),nd={exports:{}},rt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ig;function VS(){if(Ig)return rt;Ig=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),g=Symbol.iterator;function x(O){return O===null||typeof O!="object"?null:(O=g&&O[g]||O["@@iterator"],typeof O=="function"?O:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,M={};function y(O,Q,ve){this.props=O,this.context=Q,this.refs=M,this.updater=ve||T}y.prototype.isReactComponent={},y.prototype.setState=function(O,Q){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,Q,"setState")},y.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function D(){}D.prototype=y.prototype;function F(O,Q,ve){this.props=O,this.context=Q,this.refs=M,this.updater=ve||T}var L=F.prototype=new D;L.constructor=F,N(L,y.prototype),L.isPureReactComponent=!0;var X=Array.isArray;function P(){}var z={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function I(O,Q,ve){var Te=ve.ref;return{$$typeof:o,type:O,key:Q,ref:Te!==void 0?Te:null,props:ve}}function Z(O,Q){return I(O.type,Q,O.props)}function G(O){return typeof O=="object"&&O!==null&&O.$$typeof===o}function Y(O){var Q={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ve){return Q[ve]})}var le=/\/+/g;function ue(O,Q){return typeof O=="object"&&O!==null&&O.key!=null?Y(""+O.key):Q.toString(36)}function W(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(P,P):(O.status="pending",O.then(function(Q){O.status==="pending"&&(O.status="fulfilled",O.value=Q)},function(Q){O.status==="pending"&&(O.status="rejected",O.reason=Q)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function U(O,Q,ve,Te,Re){var re=typeof O;(re==="undefined"||re==="boolean")&&(O=null);var Se=!1;if(O===null)Se=!0;else switch(re){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(O.$$typeof){case o:case t:Se=!0;break;case v:return Se=O._init,U(Se(O._payload),Q,ve,Te,Re)}}if(Se)return Re=Re(O),Se=Te===""?"."+ue(O,0):Te,X(Re)?(ve="",Se!=null&&(ve=Se.replace(le,"$&/")+"/"),U(Re,Q,ve,"",function($e){return $e})):Re!=null&&(G(Re)&&(Re=Z(Re,ve+(Re.key==null||O&&O.key===Re.key?"":(""+Re.key).replace(le,"$&/")+"/")+Se)),Q.push(Re)),1;Se=0;var be=Te===""?".":Te+":";if(X(O))for(var He=0;He<O.length;He++)Te=O[He],re=be+ue(Te,He),Se+=U(Te,Q,ve,re,Re);else if(He=x(O),typeof He=="function")for(O=He.call(O),He=0;!(Te=O.next()).done;)Te=Te.value,re=be+ue(Te,He++),Se+=U(Te,Q,ve,re,Re);else if(re==="object"){if(typeof O.then=="function")return U(W(O),Q,ve,Te,Re);throw Q=String(O),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return Se}function B(O,Q,ve){if(O==null)return O;var Te=[],Re=0;return U(O,Te,"","",function(re){return Q.call(ve,re,Re++)}),Te}function oe(O){if(O._status===-1){var Q=O._result;Q=Q(),Q.then(function(ve){(O._status===0||O._status===-1)&&(O._status=1,O._result=ve)},function(ve){(O._status===0||O._status===-1)&&(O._status=2,O._result=ve)}),O._status===-1&&(O._status=0,O._result=Q)}if(O._status===1)return O._result.default;throw O._result}var me=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},ye={map:B,forEach:function(O,Q,ve){B(O,function(){Q.apply(this,arguments)},ve)},count:function(O){var Q=0;return B(O,function(){Q++}),Q},toArray:function(O){return B(O,function(Q){return Q})||[]},only:function(O){if(!G(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return rt.Activity=S,rt.Children=ye,rt.Component=y,rt.Fragment=i,rt.Profiler=l,rt.PureComponent=F,rt.StrictMode=s,rt.Suspense=m,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,rt.__COMPILER_RUNTIME={__proto__:null,c:function(O){return z.H.useMemoCache(O)}},rt.cache=function(O){return function(){return O.apply(null,arguments)}},rt.cacheSignal=function(){return null},rt.cloneElement=function(O,Q,ve){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Te=N({},O.props),Re=O.key;if(Q!=null)for(re in Q.key!==void 0&&(Re=""+Q.key),Q)!b.call(Q,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&Q.ref===void 0||(Te[re]=Q[re]);var re=arguments.length-2;if(re===1)Te.children=ve;else if(1<re){for(var Se=Array(re),be=0;be<re;be++)Se[be]=arguments[be+2];Te.children=Se}return I(O.type,Re,Te)},rt.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},rt.createElement=function(O,Q,ve){var Te,Re={},re=null;if(Q!=null)for(Te in Q.key!==void 0&&(re=""+Q.key),Q)b.call(Q,Te)&&Te!=="key"&&Te!=="__self"&&Te!=="__source"&&(Re[Te]=Q[Te]);var Se=arguments.length-2;if(Se===1)Re.children=ve;else if(1<Se){for(var be=Array(Se),He=0;He<Se;He++)be[He]=arguments[He+2];Re.children=be}if(O&&O.defaultProps)for(Te in Se=O.defaultProps,Se)Re[Te]===void 0&&(Re[Te]=Se[Te]);return I(O,re,Re)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(O){return{$$typeof:p,render:O}},rt.isValidElement=G,rt.lazy=function(O){return{$$typeof:v,_payload:{_status:-1,_result:O},_init:oe}},rt.memo=function(O,Q){return{$$typeof:h,type:O,compare:Q===void 0?null:Q}},rt.startTransition=function(O){var Q=z.T,ve={};z.T=ve;try{var Te=O(),Re=z.S;Re!==null&&Re(ve,Te),typeof Te=="object"&&Te!==null&&typeof Te.then=="function"&&Te.then(P,me)}catch(re){me(re)}finally{Q!==null&&ve.types!==null&&(Q.types=ve.types),z.T=Q}},rt.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},rt.use=function(O){return z.H.use(O)},rt.useActionState=function(O,Q,ve){return z.H.useActionState(O,Q,ve)},rt.useCallback=function(O,Q){return z.H.useCallback(O,Q)},rt.useContext=function(O){return z.H.useContext(O)},rt.useDebugValue=function(){},rt.useDeferredValue=function(O,Q){return z.H.useDeferredValue(O,Q)},rt.useEffect=function(O,Q){return z.H.useEffect(O,Q)},rt.useEffectEvent=function(O){return z.H.useEffectEvent(O)},rt.useId=function(){return z.H.useId()},rt.useImperativeHandle=function(O,Q,ve){return z.H.useImperativeHandle(O,Q,ve)},rt.useInsertionEffect=function(O,Q){return z.H.useInsertionEffect(O,Q)},rt.useLayoutEffect=function(O,Q){return z.H.useLayoutEffect(O,Q)},rt.useMemo=function(O,Q){return z.H.useMemo(O,Q)},rt.useOptimistic=function(O,Q){return z.H.useOptimistic(O,Q)},rt.useReducer=function(O,Q,ve){return z.H.useReducer(O,Q,ve)},rt.useRef=function(O){return z.H.useRef(O)},rt.useState=function(O){return z.H.useState(O)},rt.useSyncExternalStore=function(O,Q,ve){return z.H.useSyncExternalStore(O,Q,ve)},rt.useTransition=function(){return z.H.useTransition()},rt.version="19.2.7",rt}var Fg;function Fh(){return Fg||(Fg=1,nd.exports=VS()),nd.exports}var Cn=Fh(),id={exports:{}},Fo={},ad={exports:{}},sd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zg;function kS(){return zg||(zg=1,(function(o){function t(U,B){var oe=U.length;U.push(B);e:for(;0<oe;){var me=oe-1>>>1,ye=U[me];if(0<l(ye,B))U[me]=B,U[oe]=ye,oe=me;else break e}}function i(U){return U.length===0?null:U[0]}function s(U){if(U.length===0)return null;var B=U[0],oe=U.pop();if(oe!==B){U[0]=oe;e:for(var me=0,ye=U.length,O=ye>>>1;me<O;){var Q=2*(me+1)-1,ve=U[Q],Te=Q+1,Re=U[Te];if(0>l(ve,oe))Te<ye&&0>l(Re,ve)?(U[me]=Re,U[Te]=oe,me=Te):(U[me]=ve,U[Q]=oe,me=Q);else if(Te<ye&&0>l(Re,oe))U[me]=Re,U[Te]=oe,me=Te;else break e}}return B}function l(U,B){var oe=U.sortIndex-B.sortIndex;return oe!==0?oe:U.id-B.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();o.unstable_now=function(){return d.now()-p}}var m=[],h=[],v=1,S=null,g=3,x=!1,T=!1,N=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;function L(U){for(var B=i(h);B!==null;){if(B.callback===null)s(h);else if(B.startTime<=U)s(h),B.sortIndex=B.expirationTime,t(m,B);else break;B=i(h)}}function X(U){if(N=!1,L(U),!T)if(i(m)!==null)T=!0,P||(P=!0,Y());else{var B=i(h);B!==null&&W(X,B.startTime-U)}}var P=!1,z=-1,b=5,I=-1;function Z(){return M?!0:!(o.unstable_now()-I<b)}function G(){if(M=!1,P){var U=o.unstable_now();I=U;var B=!0;try{e:{T=!1,N&&(N=!1,D(z),z=-1),x=!0;var oe=g;try{t:{for(L(U),S=i(m);S!==null&&!(S.expirationTime>U&&Z());){var me=S.callback;if(typeof me=="function"){S.callback=null,g=S.priorityLevel;var ye=me(S.expirationTime<=U);if(U=o.unstable_now(),typeof ye=="function"){S.callback=ye,L(U),B=!0;break t}S===i(m)&&s(m),L(U)}else s(m);S=i(m)}if(S!==null)B=!0;else{var O=i(h);O!==null&&W(X,O.startTime-U),B=!1}}break e}finally{S=null,g=oe,x=!1}B=void 0}}finally{B?Y():P=!1}}}var Y;if(typeof F=="function")Y=function(){F(G)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,ue=le.port2;le.port1.onmessage=G,Y=function(){ue.postMessage(null)}}else Y=function(){y(G,0)};function W(U,B){z=y(function(){U(o.unstable_now())},B)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(U){U.callback=null},o.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<U?Math.floor(1e3/U):5},o.unstable_getCurrentPriorityLevel=function(){return g},o.unstable_next=function(U){switch(g){case 1:case 2:case 3:var B=3;break;default:B=g}var oe=g;g=B;try{return U()}finally{g=oe}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(U,B){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var oe=g;g=U;try{return B()}finally{g=oe}},o.unstable_scheduleCallback=function(U,B,oe){var me=o.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?me+oe:me):oe=me,U){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=oe+ye,U={id:v++,callback:B,priorityLevel:U,startTime:oe,expirationTime:ye,sortIndex:-1},oe>me?(U.sortIndex=oe,t(h,U),i(m)===null&&U===i(h)&&(N?(D(z),z=-1):N=!0,W(X,oe-me))):(U.sortIndex=ye,t(m,U),T||x||(T=!0,P||(P=!0,Y()))),U},o.unstable_shouldYield=Z,o.unstable_wrapCallback=function(U){var B=g;return function(){var oe=g;g=B;try{return U.apply(this,arguments)}finally{g=oe}}}})(sd)),sd}var Bg;function XS(){return Bg||(Bg=1,ad.exports=kS()),ad.exports}var rd={exports:{}},Ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hg;function jS(){if(Hg)return Ln;Hg=1;var o=Fh();function t(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)h+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,v){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:m,containerInfo:h,implementation:v}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ln.createPortal=function(m,h){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return c(m,h,null,v)},Ln.flushSync=function(m){var h=d.T,v=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=h,s.p=v,s.d.f()}},Ln.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(m,h))},Ln.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Ln.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var v=h.as,S=p(v,h.crossOrigin),g=typeof h.integrity=="string"?h.integrity:void 0,x=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;v==="style"?s.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:S,integrity:g,fetchPriority:x}):v==="script"&&s.d.X(m,{crossOrigin:S,integrity:g,fetchPriority:x,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Ln.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var v=p(h.as,h.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(m)},Ln.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var v=h.as,S=p(v,h.crossOrigin);s.d.L(m,v,{crossOrigin:S,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Ln.preloadModule=function(m,h){if(typeof m=="string")if(h){var v=p(h.as,h.crossOrigin);s.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(m)},Ln.requestFormReset=function(m){s.d.r(m)},Ln.unstable_batchedUpdates=function(m,h){return m(h)},Ln.useFormState=function(m,h,v){return d.H.useFormState(m,h,v)},Ln.useFormStatus=function(){return d.H.useHostTransitionStatus()},Ln.version="19.2.7",Ln}var Gg;function WS(){if(Gg)return rd.exports;Gg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),rd.exports=jS(),rd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vg;function qS(){if(Vg)return Fo;Vg=1;var o=XS(),t=Fh(),i=WS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function h(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===r)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var _=!1,R=u.child;R;){if(R===a){_=!0,a=u,r=f;break}if(R===r){_=!0,r=u,a=f;break}R=R.sibling}if(!_){for(R=f.child;R;){if(R===a){_=!0,a=f,r=u;break}if(R===r){_=!0,r=f,a=u;break}R=R.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var S=Object.assign,g=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),F=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),Z=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var le=Symbol.for("react.client.reference");function ue(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===le?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case N:return"Fragment";case y:return"Profiler";case M:return"StrictMode";case X:return"Suspense";case P:return"SuspenseList";case I:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case F:return e.displayName||"Context";case D:return(e._context.displayName||"Context")+".Consumer";case L:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:ue(e.type)||"Memo";case b:n=e._payload,e=e._init;try{return ue(e(n))}catch{}}return null}var W=Array.isArray,U=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe={pending:!1,data:null,method:null,action:null},me=[],ye=-1;function O(e){return{current:e}}function Q(e){0>ye||(e.current=me[ye],me[ye]=null,ye--)}function ve(e,n){ye++,me[ye]=e.current,e.current=n}var Te=O(null),Re=O(null),re=O(null),Se=O(null);function be(e,n){switch(ve(re,n),ve(Re,e),ve(Te,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?ig(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=ig(n),e=ag(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Q(Te),ve(Te,e)}function He(){Q(Te),Q(Re),Q(re)}function $e(e){e.memoizedState!==null&&ve(Se,e);var n=Te.current,a=ag(n,e.type);n!==a&&(ve(Re,e),ve(Te,a))}function Ye(e){Re.current===e&&(Q(Te),Q(Re)),Se.current===e&&(Q(Se),Uo._currentValue=oe)}var Pt,ct;function mt(e){if(Pt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Pt=n&&n[1]||"",ct=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Pt+e+ct}var Rt=!1;function ot(e,n){if(!e||Rt)return"";Rt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(ce){var se=ce}Reflect.construct(e,[],xe)}else{try{xe.call()}catch(ce){se=ce}e.call(xe.prototype)}}else{try{throw Error()}catch(ce){se=ce}(xe=e())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(ce){if(ce&&se&&typeof ce.stack=="string")return[ce.stack,se.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),_=f[0],R=f[1];if(_&&R){var H=_.split(`
`),ee=R.split(`
`);for(u=r=0;r<H.length&&!H[r].includes("DetermineComponentFrameRoot");)r++;for(;u<ee.length&&!ee[u].includes("DetermineComponentFrameRoot");)u++;if(r===H.length||u===ee.length)for(r=H.length-1,u=ee.length-1;1<=r&&0<=u&&H[r]!==ee[u];)u--;for(;1<=r&&0<=u;r--,u--)if(H[r]!==ee[u]){if(r!==1||u!==1)do if(r--,u--,0>u||H[r]!==ee[u]){var he=`
`+H[r].replace(" at new "," at ");return e.displayName&&he.includes("<anonymous>")&&(he=he.replace("<anonymous>",e.displayName)),he}while(1<=r&&0<=u);break}}}finally{Rt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?mt(a):""}function Qt(e,n){switch(e.tag){case 26:case 27:case 5:return mt(e.type);case 16:return mt("Lazy");case 13:return e.child!==n&&n!==null?mt("Suspense Fallback"):mt("Suspense");case 19:return mt("SuspenseList");case 0:case 15:return ot(e.type,!1);case 11:return ot(e.type.render,!1);case 1:return ot(e.type,!0);case 31:return mt("Activity");default:return""}}function et(e){try{var n="",a=null;do n+=Qt(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var gt=Object.prototype.hasOwnProperty,V=o.unstable_scheduleCallback,Ke=o.unstable_cancelCallback,ut=o.unstable_shouldYield,kt=o.unstable_requestPaint,Ce=o.unstable_now,Jt=o.unstable_getCurrentPriorityLevel,w=o.unstable_ImmediatePriority,E=o.unstable_UserBlockingPriority,J=o.unstable_NormalPriority,_e=o.unstable_LowPriority,Ee=o.unstable_IdlePriority,we=o.log,Le=o.unstable_setDisableYieldValue,fe=null,de=null;function Oe(e){if(typeof we=="function"&&Le(e),de&&typeof de.setStrictMode=="function")try{de.setStrictMode(fe,e)}catch{}}var Pe=Math.clz32?Math.clz32:at,De=Math.log,Ne=Math.LN2;function at(e){return e>>>=0,e===0?32:31-(De(e)/Ne|0)|0}var st=256,_t=262144,k=4194304;function Ae(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function pe(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var u=0,f=e.suspendedLanes,_=e.pingedLanes;e=e.warmLanes;var R=r&134217727;return R!==0?(r=R&~f,r!==0?u=Ae(r):(_&=R,_!==0?u=Ae(_):a||(a=R&~e,a!==0&&(u=Ae(a))))):(R=r&~f,R!==0?u=Ae(R):_!==0?u=Ae(_):a||(a=r&~e,a!==0&&(u=Ae(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function ze(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Ue(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Me(){var e=k;return k<<=1,(k&62914560)===0&&(k=4194304),e}function We(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function nt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function nn(e,n,a,r,u,f){var _=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,H=e.expirationTimes,ee=e.hiddenUpdates;for(a=_&~a;0<a;){var he=31-Pe(a),xe=1<<he;R[he]=0,H[he]=-1;var se=ee[he];if(se!==null)for(ee[he]=null,he=0;he<se.length;he++){var ce=se[he];ce!==null&&(ce.lane&=-536870913)}a&=~xe}r!==0&&Lt(e,r,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(_&~n))}function Lt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Pe(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function fi(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-Pe(a),u=1<<r;u&n|e[r]&n&&(e[r]|=n),a&=~u}}function Kn(e,n){var a=n&-n;return a=(a&42)!==0?1:cs(a),(a&(e.suspendedLanes|n))!==0?0:a}function cs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function kr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Xr(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:Rg(e.type))}function jr(e,n){var a=B.p;try{return B.p=e,n()}finally{B.p=a}}var Dn=Math.random().toString(36).slice(2),ln="__reactFiber$"+Dn,En="__reactProps$"+Dn,Yi="__reactContainer$"+Dn,Ea="__reactEvents$"+Dn,$o="__reactListeners$"+Dn,Hs="__reactHandles$"+Dn,Wr="__reactResources$"+Dn,ba="__reactMarker$"+Dn;function qr(e){delete e[ln],delete e[En],delete e[Ea],delete e[$o],delete e[Hs]}function Ta(e){var n=e[ln];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Yi]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=fg(e);e!==null;){if(a=e[ln])return a;e=fg(e)}return n}e=a,a=e.parentNode}return null}function Aa(e){if(e=e[ln]||e[Yi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function us(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Ra(e){var n=e[Wr];return n||(n=e[Wr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function fn(e){e[ba]=!0}var el=new Set,A={};function q(e,n){ae(e,n),ae(e+"Capture",n)}function ae(e,n){for(A[e]=n,e=0;e<n.length;e++)el.add(n[e])}var te=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ne={},Fe={};function Ve(e){return gt.call(Fe,e)?!0:gt.call(ne,e)?!1:te.test(e)?Fe[e]=!0:(ne[e]=!0,!1)}function Ie(e,n,a){if(Ve(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Xe(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function ke(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function Qe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ft(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ze(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ct(e){if(!e._valueTracker){var n=ft(e)?"checked":"value";e._valueTracker=Ze(e,n,""+e[n])}}function $t(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=ft(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function qt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ft=/[\n"\\]/g;function zt(e){return e.replace(Ft,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ge(e,n,a,r,u,f,_,R){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),n!=null?_==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Qe(n)):e.value!==""+Qe(n)&&(e.value=""+Qe(n)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),n!=null?xt(e,_,Qe(n)):a!=null?xt(e,_,Qe(a)):r!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+Qe(R):e.removeAttribute("name")}function Un(e,n,a,r,u,f,_,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ct(e);return}a=a!=null?""+Qe(a):"",n=n!=null?""+Qe(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=R?e.checked:!!r,e.defaultChecked=!!r,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_),Ct(e)}function xt(e,n,a){n==="number"&&qt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function _n(e,n,a,r){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&r&&(e[a].defaultSelected=!0)}else{for(a=""+Qe(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,r&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Qn(e,n,a){if(n!=null&&(n=""+Qe(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Qe(a):""}function Ei(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(W(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=Qe(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),Ct(e)}function Jn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Bt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function en(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||Bt.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function bi(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&en(e,u,r)}else for(var f in n)n.hasOwnProperty(f)&&en(e,f,n[f])}function It(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ca=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function fs(e){return Ca.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Zi(){}var Qc=null;function Jc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gs=null,Vs=null;function np(e){var n=Aa(e);if(n&&(e=n.stateNode)){var a=e[En]||null;e:switch(e=n.stateNode,n.type){case"input":if(Ge(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+zt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var u=r[En]||null;if(!u)throw Error(s(90));Ge(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&$t(r)}break e;case"textarea":Qn(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&_n(e,!!a.multiple,n,!1)}}}var $c=!1;function ip(e,n,a){if($c)return e(n,a);$c=!0;try{var r=e(n);return r}finally{if($c=!1,(Gs!==null||Vs!==null)&&(Gl(),Gs&&(n=Gs,e=Vs,Vs=Gs=null,np(n),e)))for(n=0;n<e.length;n++)np(e[n])}}function Yr(e,n){var a=e.stateNode;if(a===null)return null;var r=a[En]||null;if(r===null)return null;a=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),eu=!1;if(Ki)try{var Zr={};Object.defineProperty(Zr,"passive",{get:function(){eu=!0}}),window.addEventListener("test",Zr,Zr),window.removeEventListener("test",Zr,Zr)}catch{eu=!1}var wa=null,tu=null,tl=null;function ap(){if(tl)return tl;var e,n=tu,a=n.length,r,u="value"in wa?wa.value:wa.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var _=a-e;for(r=1;r<=_&&n[a-r]===u[f-r];r++);return tl=u.slice(e,1<r?1-r:void 0)}function nl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function il(){return!0}function sp(){return!1}function Gn(e){function n(a,r,u,f,_){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?il:sp,this.isPropagationStopped=sp,this}return S(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=il)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=il)},persist:function(){},isPersistent:il}),n}var ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},al=Gn(ds),Kr=S({},ds,{view:0,detail:0}),zx=Gn(Kr),nu,iu,Qr,sl=S({},Kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:su,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qr&&(Qr&&e.type==="mousemove"?(nu=e.screenX-Qr.screenX,iu=e.screenY-Qr.screenY):iu=nu=0,Qr=e),nu)},movementY:function(e){return"movementY"in e?e.movementY:iu}}),rp=Gn(sl),Bx=S({},sl,{dataTransfer:0}),Hx=Gn(Bx),Gx=S({},Kr,{relatedTarget:0}),au=Gn(Gx),Vx=S({},ds,{animationName:0,elapsedTime:0,pseudoElement:0}),kx=Gn(Vx),Xx=S({},ds,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jx=Gn(Xx),Wx=S({},ds,{data:0}),op=Gn(Wx),qx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Zx[e])?!!n[e]:!1}function su(){return Kx}var Qx=S({},Kr,{key:function(e){if(e.key){var n=qx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=nl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Yx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:su,charCode:function(e){return e.type==="keypress"?nl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?nl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Jx=Gn(Qx),$x=S({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lp=Gn($x),ev=S({},Kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:su}),tv=Gn(ev),nv=S({},ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),iv=Gn(nv),av=S({},sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),sv=Gn(av),rv=S({},ds,{newState:0,oldState:0}),ov=Gn(rv),lv=[9,13,27,32],ru=Ki&&"CompositionEvent"in window,Jr=null;Ki&&"documentMode"in document&&(Jr=document.documentMode);var cv=Ki&&"TextEvent"in window&&!Jr,cp=Ki&&(!ru||Jr&&8<Jr&&11>=Jr),up=" ",fp=!1;function dp(e,n){switch(e){case"keyup":return lv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ks=!1;function uv(e,n){switch(e){case"compositionend":return hp(n);case"keypress":return n.which!==32?null:(fp=!0,up);case"textInput":return e=n.data,e===up&&fp?null:e;default:return null}}function fv(e,n){if(ks)return e==="compositionend"||!ru&&dp(e,n)?(e=ap(),tl=tu=wa=null,ks=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return cp&&n.locale!=="ko"?null:n.data;default:return null}}var dv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!dv[e.type]:n==="textarea"}function mp(e,n,a,r){Gs?Vs?Vs.push(r):Vs=[r]:Gs=r,n=Yl(n,"onChange"),0<n.length&&(a=new al("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var $r=null,eo=null;function hv(e){Q0(e,0)}function rl(e){var n=us(e);if($t(n))return e}function gp(e,n){if(e==="change")return n}var _p=!1;if(Ki){var ou;if(Ki){var lu="oninput"in document;if(!lu){var xp=document.createElement("div");xp.setAttribute("oninput","return;"),lu=typeof xp.oninput=="function"}ou=lu}else ou=!1;_p=ou&&(!document.documentMode||9<document.documentMode)}function vp(){$r&&($r.detachEvent("onpropertychange",Sp),eo=$r=null)}function Sp(e){if(e.propertyName==="value"&&rl(eo)){var n=[];mp(n,eo,e,Jc(e)),ip(hv,n)}}function pv(e,n,a){e==="focusin"?(vp(),$r=n,eo=a,$r.attachEvent("onpropertychange",Sp)):e==="focusout"&&vp()}function mv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rl(eo)}function gv(e,n){if(e==="click")return rl(n)}function _v(e,n){if(e==="input"||e==="change")return rl(n)}function xv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var $n=typeof Object.is=="function"?Object.is:xv;function to(e,n){if($n(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!gt.call(n,u)||!$n(e[u],n[u]))return!1}return!0}function yp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mp(e,n){var a=yp(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=yp(a)}}function Ep(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ep(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function bp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=qt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=qt(e.document)}return n}function cu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var vv=Ki&&"documentMode"in document&&11>=document.documentMode,Xs=null,uu=null,no=null,fu=!1;function Tp(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;fu||Xs==null||Xs!==qt(r)||(r=Xs,"selectionStart"in r&&cu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),no&&to(no,r)||(no=r,r=Yl(uu,"onSelect"),0<r.length&&(n=new al("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=Xs)))}function hs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var js={animationend:hs("Animation","AnimationEnd"),animationiteration:hs("Animation","AnimationIteration"),animationstart:hs("Animation","AnimationStart"),transitionrun:hs("Transition","TransitionRun"),transitionstart:hs("Transition","TransitionStart"),transitioncancel:hs("Transition","TransitionCancel"),transitionend:hs("Transition","TransitionEnd")},du={},Ap={};Ki&&(Ap=document.createElement("div").style,"AnimationEvent"in window||(delete js.animationend.animation,delete js.animationiteration.animation,delete js.animationstart.animation),"TransitionEvent"in window||delete js.transitionend.transition);function ps(e){if(du[e])return du[e];if(!js[e])return e;var n=js[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Ap)return du[e]=n[a];return e}var Rp=ps("animationend"),Cp=ps("animationiteration"),wp=ps("animationstart"),Sv=ps("transitionrun"),yv=ps("transitionstart"),Mv=ps("transitioncancel"),Np=ps("transitionend"),Dp=new Map,hu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hu.push("scrollEnd");function Ti(e,n){Dp.set(e,n),q(n,[e])}var ol=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},di=[],Ws=0,pu=0;function ll(){for(var e=Ws,n=pu=Ws=0;n<e;){var a=di[n];di[n++]=null;var r=di[n];di[n++]=null;var u=di[n];di[n++]=null;var f=di[n];if(di[n++]=null,r!==null&&u!==null){var _=r.pending;_===null?u.next=u:(u.next=_.next,_.next=u),r.pending=u}f!==0&&Up(a,u,f)}}function cl(e,n,a,r){di[Ws++]=e,di[Ws++]=n,di[Ws++]=a,di[Ws++]=r,pu|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function mu(e,n,a,r){return cl(e,n,a,r),ul(e)}function ms(e,n){return cl(e,null,null,n),ul(e)}function Up(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Pe(a),e=f.hiddenUpdates,r=e[u],r===null?e[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function ul(e){if(50<To)throw To=0,Tf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var qs={};function Ev(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(e,n,a,r){return new Ev(e,n,a,r)}function gu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qi(e,n){var a=e.alternate;return a===null?(a=ei(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Lp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function fl(e,n,a,r,u,f){var _=0;if(r=e,typeof e=="function")gu(e)&&(_=1);else if(typeof e=="string")_=CS(e,a,Te.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case I:return e=ei(31,a,n,u),e.elementType=I,e.lanes=f,e;case N:return gs(a.children,u,f,n);case M:_=8,u|=24;break;case y:return e=ei(12,a,n,u|2),e.elementType=y,e.lanes=f,e;case X:return e=ei(13,a,n,u),e.elementType=X,e.lanes=f,e;case P:return e=ei(19,a,n,u),e.elementType=P,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case F:_=10;break e;case D:_=9;break e;case L:_=11;break e;case z:_=14;break e;case b:_=16,r=null;break e}_=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=ei(_,a,n,u),n.elementType=e,n.type=r,n.lanes=f,n}function gs(e,n,a,r){return e=ei(7,e,r,n),e.lanes=a,e}function _u(e,n,a){return e=ei(6,e,null,n),e.lanes=a,e}function Op(e){var n=ei(18,null,null,0);return n.stateNode=e,n}function xu(e,n,a){return n=ei(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Pp=new WeakMap;function hi(e,n){if(typeof e=="object"&&e!==null){var a=Pp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:et(n)},Pp.set(e,n),n)}return{value:e,source:n,stack:et(n)}}var Ys=[],Zs=0,dl=null,io=0,pi=[],mi=0,Na=null,Pi=1,Ii="";function Ji(e,n){Ys[Zs++]=io,Ys[Zs++]=dl,dl=e,io=n}function Ip(e,n,a){pi[mi++]=Pi,pi[mi++]=Ii,pi[mi++]=Na,Na=e;var r=Pi;e=Ii;var u=32-Pe(r)-1;r&=~(1<<u),a+=1;var f=32-Pe(n)+u;if(30<f){var _=u-u%5;f=(r&(1<<_)-1).toString(32),r>>=_,u-=_,Pi=1<<32-Pe(n)+u|a<<u|r,Ii=f+e}else Pi=1<<f|a<<u|r,Ii=e}function vu(e){e.return!==null&&(Ji(e,1),Ip(e,1,0))}function Su(e){for(;e===dl;)dl=Ys[--Zs],Ys[Zs]=null,io=Ys[--Zs],Ys[Zs]=null;for(;e===Na;)Na=pi[--mi],pi[mi]=null,Ii=pi[--mi],pi[mi]=null,Pi=pi[--mi],pi[mi]=null}function Fp(e,n){pi[mi++]=Pi,pi[mi++]=Ii,pi[mi++]=Na,Pi=n.id,Ii=n.overflow,Na=e}var bn=null,Zt=null,Et=!1,Da=null,gi=!1,yu=Error(s(519));function Ua(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ao(hi(n,e)),yu}function zp(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[ln]=e,n[En]=r,a){case"dialog":St("cancel",n),St("close",n);break;case"iframe":case"object":case"embed":St("load",n);break;case"video":case"audio":for(a=0;a<Ro.length;a++)St(Ro[a],n);break;case"source":St("error",n);break;case"img":case"image":case"link":St("error",n),St("load",n);break;case"details":St("toggle",n);break;case"input":St("invalid",n),Un(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":St("invalid",n);break;case"textarea":St("invalid",n),Ei(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||tg(n.textContent,a)?(r.popover!=null&&(St("beforetoggle",n),St("toggle",n)),r.onScroll!=null&&St("scroll",n),r.onScrollEnd!=null&&St("scrollend",n),r.onClick!=null&&(n.onclick=Zi),n=!0):n=!1,n||Ua(e,!0)}function Bp(e){for(bn=e.return;bn;)switch(bn.tag){case 5:case 31:case 13:gi=!1;return;case 27:case 3:gi=!0;return;default:bn=bn.return}}function Ks(e){if(e!==bn)return!1;if(!Et)return Bp(e),Et=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Hf(e.type,e.memoizedProps)),a=!a),a&&Zt&&Ua(e),Bp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Zt=ug(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Zt=ug(e)}else n===27?(n=Zt,Wa(e.type)?(e=jf,jf=null,Zt=e):Zt=n):Zt=bn?xi(e.stateNode.nextSibling):null;return!0}function _s(){Zt=bn=null,Et=!1}function Mu(){var e=Da;return e!==null&&(jn===null?jn=e:jn.push.apply(jn,e),Da=null),e}function ao(e){Da===null?Da=[e]:Da.push(e)}var Eu=O(null),xs=null,$i=null;function La(e,n,a){ve(Eu,n._currentValue),n._currentValue=a}function ea(e){e._currentValue=Eu.current,Q(Eu)}function bu(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function Tu(e,n,a,r){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;e:for(;f!==null;){var R=f;f=u;for(var H=0;H<n.length;H++)if(R.context===n[H]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),bu(f.return,a,e),r||(_=null);break e}f=R.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),bu(_,a,e),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===e){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function Qs(e,n,a,r){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var R=u.type;$n(u.pendingProps.value,_.value)||(e!==null?e.push(R):e=[R])}}else if(u===Se.current){if(_=u.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Uo):e=[Uo])}u=u.return}e!==null&&Tu(n,e,a,r),n.flags|=262144}function hl(e){for(e=e.firstContext;e!==null;){if(!$n(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function vs(e){xs=e,$i=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Tn(e){return Hp(xs,e)}function pl(e,n){return xs===null&&vs(e),Hp(e,n)}function Hp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},$i===null){if(e===null)throw Error(s(308));$i=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else $i=$i.next=n;return a}var bv=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Tv=o.unstable_scheduleCallback,Av=o.unstable_NormalPriority,dn={$$typeof:F,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Au(){return{controller:new bv,data:new Map,refCount:0}}function so(e){e.refCount--,e.refCount===0&&Tv(Av,function(){e.controller.abort()})}var ro=null,Ru=0,Js=0,$s=null;function Rv(e,n){if(ro===null){var a=ro=[];Ru=0,Js=Df(),$s={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Ru++,n.then(Gp,Gp),n}function Gp(){if(--Ru===0&&ro!==null){$s!==null&&($s.status="fulfilled");var e=ro;ro=null,Js=0,$s=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Cv(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var Vp=U.S;U.S=function(e,n){T0=Ce(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Rv(e,n),Vp!==null&&Vp(e,n)};var Ss=O(null);function Cu(){var e=Ss.current;return e!==null?e:Yt.pooledCache}function ml(e,n){n===null?ve(Ss,Ss.current):ve(Ss,n.pool)}function kp(){var e=Cu();return e===null?null:{parent:dn._currentValue,pool:e}}var er=Error(s(460)),wu=Error(s(474)),gl=Error(s(542)),_l={then:function(){}};function Xp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function jp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Zi,Zi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,qp(e),e;default:if(typeof n.status=="string")n.then(Zi,Zi);else{if(e=Yt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,qp(e),e}throw Ms=n,er}}function ys(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ms=a,er):a}}var Ms=null;function Wp(){if(Ms===null)throw Error(s(459));var e=Ms;return Ms=null,e}function qp(e){if(e===er||e===gl)throw Error(s(483))}var tr=null,oo=0;function xl(e){var n=oo;return oo+=1,tr===null&&(tr=[]),jp(tr,e,n)}function lo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function vl(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Yp(e){function n(K,j){if(e){var $=K.deletions;$===null?(K.deletions=[j],K.flags|=16):$.push(j)}}function a(K,j){if(!e)return null;for(;j!==null;)n(K,j),j=j.sibling;return null}function r(K){for(var j=new Map;K!==null;)K.key!==null?j.set(K.key,K):j.set(K.index,K),K=K.sibling;return j}function u(K,j){return K=Qi(K,j),K.index=0,K.sibling=null,K}function f(K,j,$){return K.index=$,e?($=K.alternate,$!==null?($=$.index,$<j?(K.flags|=67108866,j):$):(K.flags|=67108866,j)):(K.flags|=1048576,j)}function _(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function R(K,j,$,ge){return j===null||j.tag!==6?(j=_u($,K.mode,ge),j.return=K,j):(j=u(j,$),j.return=K,j)}function H(K,j,$,ge){var Je=$.type;return Je===N?he(K,j,$.props.children,ge,$.key):j!==null&&(j.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===b&&ys(Je)===j.type)?(j=u(j,$.props),lo(j,$),j.return=K,j):(j=fl($.type,$.key,$.props,null,K.mode,ge),lo(j,$),j.return=K,j)}function ee(K,j,$,ge){return j===null||j.tag!==4||j.stateNode.containerInfo!==$.containerInfo||j.stateNode.implementation!==$.implementation?(j=xu($,K.mode,ge),j.return=K,j):(j=u(j,$.children||[]),j.return=K,j)}function he(K,j,$,ge,Je){return j===null||j.tag!==7?(j=gs($,K.mode,ge,Je),j.return=K,j):(j=u(j,$),j.return=K,j)}function xe(K,j,$){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=_u(""+j,K.mode,$),j.return=K,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case x:return $=fl(j.type,j.key,j.props,null,K.mode,$),lo($,j),$.return=K,$;case T:return j=xu(j,K.mode,$),j.return=K,j;case b:return j=ys(j),xe(K,j,$)}if(W(j)||Y(j))return j=gs(j,K.mode,$,null),j.return=K,j;if(typeof j.then=="function")return xe(K,xl(j),$);if(j.$$typeof===F)return xe(K,pl(K,j),$);vl(K,j)}return null}function se(K,j,$,ge){var Je=j!==null?j.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Je!==null?null:R(K,j,""+$,ge);if(typeof $=="object"&&$!==null){switch($.$$typeof){case x:return $.key===Je?H(K,j,$,ge):null;case T:return $.key===Je?ee(K,j,$,ge):null;case b:return $=ys($),se(K,j,$,ge)}if(W($)||Y($))return Je!==null?null:he(K,j,$,ge,null);if(typeof $.then=="function")return se(K,j,xl($),ge);if($.$$typeof===F)return se(K,j,pl(K,$),ge);vl(K,$)}return null}function ce(K,j,$,ge,Je){if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return K=K.get($)||null,R(j,K,""+ge,Je);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case x:return K=K.get(ge.key===null?$:ge.key)||null,H(j,K,ge,Je);case T:return K=K.get(ge.key===null?$:ge.key)||null,ee(j,K,ge,Je);case b:return ge=ys(ge),ce(K,j,$,ge,Je)}if(W(ge)||Y(ge))return K=K.get($)||null,he(j,K,ge,Je,null);if(typeof ge.then=="function")return ce(K,j,$,xl(ge),Je);if(ge.$$typeof===F)return ce(K,j,$,pl(j,ge),Je);vl(j,ge)}return null}function je(K,j,$,ge){for(var Je=null,wt=null,qe=j,ht=j=0,Mt=null;qe!==null&&ht<$.length;ht++){qe.index>ht?(Mt=qe,qe=null):Mt=qe.sibling;var Nt=se(K,qe,$[ht],ge);if(Nt===null){qe===null&&(qe=Mt);break}e&&qe&&Nt.alternate===null&&n(K,qe),j=f(Nt,j,ht),wt===null?Je=Nt:wt.sibling=Nt,wt=Nt,qe=Mt}if(ht===$.length)return a(K,qe),Et&&Ji(K,ht),Je;if(qe===null){for(;ht<$.length;ht++)qe=xe(K,$[ht],ge),qe!==null&&(j=f(qe,j,ht),wt===null?Je=qe:wt.sibling=qe,wt=qe);return Et&&Ji(K,ht),Je}for(qe=r(qe);ht<$.length;ht++)Mt=ce(qe,K,ht,$[ht],ge),Mt!==null&&(e&&Mt.alternate!==null&&qe.delete(Mt.key===null?ht:Mt.key),j=f(Mt,j,ht),wt===null?Je=Mt:wt.sibling=Mt,wt=Mt);return e&&qe.forEach(function(Qa){return n(K,Qa)}),Et&&Ji(K,ht),Je}function tt(K,j,$,ge){if($==null)throw Error(s(151));for(var Je=null,wt=null,qe=j,ht=j=0,Mt=null,Nt=$.next();qe!==null&&!Nt.done;ht++,Nt=$.next()){qe.index>ht?(Mt=qe,qe=null):Mt=qe.sibling;var Qa=se(K,qe,Nt.value,ge);if(Qa===null){qe===null&&(qe=Mt);break}e&&qe&&Qa.alternate===null&&n(K,qe),j=f(Qa,j,ht),wt===null?Je=Qa:wt.sibling=Qa,wt=Qa,qe=Mt}if(Nt.done)return a(K,qe),Et&&Ji(K,ht),Je;if(qe===null){for(;!Nt.done;ht++,Nt=$.next())Nt=xe(K,Nt.value,ge),Nt!==null&&(j=f(Nt,j,ht),wt===null?Je=Nt:wt.sibling=Nt,wt=Nt);return Et&&Ji(K,ht),Je}for(qe=r(qe);!Nt.done;ht++,Nt=$.next())Nt=ce(qe,K,ht,Nt.value,ge),Nt!==null&&(e&&Nt.alternate!==null&&qe.delete(Nt.key===null?ht:Nt.key),j=f(Nt,j,ht),wt===null?Je=Nt:wt.sibling=Nt,wt=Nt);return e&&qe.forEach(function(BS){return n(K,BS)}),Et&&Ji(K,ht),Je}function Wt(K,j,$,ge){if(typeof $=="object"&&$!==null&&$.type===N&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case x:e:{for(var Je=$.key;j!==null;){if(j.key===Je){if(Je=$.type,Je===N){if(j.tag===7){a(K,j.sibling),ge=u(j,$.props.children),ge.return=K,K=ge;break e}}else if(j.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===b&&ys(Je)===j.type){a(K,j.sibling),ge=u(j,$.props),lo(ge,$),ge.return=K,K=ge;break e}a(K,j);break}else n(K,j);j=j.sibling}$.type===N?(ge=gs($.props.children,K.mode,ge,$.key),ge.return=K,K=ge):(ge=fl($.type,$.key,$.props,null,K.mode,ge),lo(ge,$),ge.return=K,K=ge)}return _(K);case T:e:{for(Je=$.key;j!==null;){if(j.key===Je)if(j.tag===4&&j.stateNode.containerInfo===$.containerInfo&&j.stateNode.implementation===$.implementation){a(K,j.sibling),ge=u(j,$.children||[]),ge.return=K,K=ge;break e}else{a(K,j);break}else n(K,j);j=j.sibling}ge=xu($,K.mode,ge),ge.return=K,K=ge}return _(K);case b:return $=ys($),Wt(K,j,$,ge)}if(W($))return je(K,j,$,ge);if(Y($)){if(Je=Y($),typeof Je!="function")throw Error(s(150));return $=Je.call($),tt(K,j,$,ge)}if(typeof $.then=="function")return Wt(K,j,xl($),ge);if($.$$typeof===F)return Wt(K,j,pl(K,$),ge);vl(K,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,j!==null&&j.tag===6?(a(K,j.sibling),ge=u(j,$),ge.return=K,K=ge):(a(K,j),ge=_u($,K.mode,ge),ge.return=K,K=ge),_(K)):a(K,j)}return function(K,j,$,ge){try{oo=0;var Je=Wt(K,j,$,ge);return tr=null,Je}catch(qe){if(qe===er||qe===gl)throw qe;var wt=ei(29,qe,null,K.mode);return wt.lanes=ge,wt.return=K,wt}finally{}}}var Es=Yp(!0),Zp=Yp(!1),Oa=!1;function Nu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Du(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Pa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ia(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Ot&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=ul(e),Up(e,null,a),n}return cl(e,r,n,a),ul(e)}function co(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,fi(e,a)}}function Uu(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Lu=!1;function uo(){if(Lu){var e=$s;if(e!==null)throw e}}function fo(e,n,a,r){Lu=!1;var u=e.updateQueue;Oa=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var H=R,ee=H.next;H.next=null,_===null?f=ee:_.next=ee,_=H;var he=e.alternate;he!==null&&(he=he.updateQueue,R=he.lastBaseUpdate,R!==_&&(R===null?he.firstBaseUpdate=ee:R.next=ee,he.lastBaseUpdate=H))}if(f!==null){var xe=u.baseState;_=0,he=ee=H=null,R=f;do{var se=R.lane&-536870913,ce=se!==R.lane;if(ce?(yt&se)===se:(r&se)===se){se!==0&&se===Js&&(Lu=!0),he!==null&&(he=he.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var je=e,tt=R;se=n;var Wt=a;switch(tt.tag){case 1:if(je=tt.payload,typeof je=="function"){xe=je.call(Wt,xe,se);break e}xe=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=tt.payload,se=typeof je=="function"?je.call(Wt,xe,se):je,se==null)break e;xe=S({},xe,se);break e;case 2:Oa=!0}}se=R.callback,se!==null&&(e.flags|=64,ce&&(e.flags|=8192),ce=u.callbacks,ce===null?u.callbacks=[se]:ce.push(se))}else ce={lane:se,tag:R.tag,payload:R.payload,callback:R.callback,next:null},he===null?(ee=he=ce,H=xe):he=he.next=ce,_|=se;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ce=R,R=ce.next,ce.next=null,u.lastBaseUpdate=ce,u.shared.pending=null}}while(!0);he===null&&(H=xe),u.baseState=H,u.firstBaseUpdate=ee,u.lastBaseUpdate=he,f===null&&(u.shared.lanes=0),Ga|=_,e.lanes=_,e.memoizedState=xe}}function Kp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Qp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Kp(a[e],n)}var nr=O(null),Sl=O(0);function Jp(e,n){e=ca,ve(Sl,e),ve(nr,n),ca=e|n.baseLanes}function Ou(){ve(Sl,ca),ve(nr,nr.current)}function Pu(){ca=Sl.current,Q(nr),Q(Sl)}var ti=O(null),_i=null;function Fa(e){var n=e.alternate;ve(cn,cn.current&1),ve(ti,e),_i===null&&(n===null||nr.current!==null||n.memoizedState!==null)&&(_i=e)}function Iu(e){ve(cn,cn.current),ve(ti,e),_i===null&&(_i=e)}function $p(e){e.tag===22?(ve(cn,cn.current),ve(ti,e),_i===null&&(_i=e)):za()}function za(){ve(cn,cn.current),ve(ti,ti.current)}function ni(e){Q(ti),_i===e&&(_i=null),Q(cn)}var cn=O(0);function yl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||kf(a)||Xf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ta=0,dt=null,Xt=null,hn=null,Ml=!1,ir=!1,bs=!1,El=0,ho=0,ar=null,wv=0;function an(){throw Error(s(321))}function Fu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!$n(e[a],n[a]))return!1;return!0}function zu(e,n,a,r,u,f){return ta=f,dt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,U.H=e===null||e.memoizedState===null?Im:$u,bs=!1,f=a(r,u),bs=!1,ir&&(f=tm(n,a,r,u)),em(e),f}function em(e){U.H=go;var n=Xt!==null&&Xt.next!==null;if(ta=0,hn=Xt=dt=null,Ml=!1,ho=0,ar=null,n)throw Error(s(300));e===null||pn||(e=e.dependencies,e!==null&&hl(e)&&(pn=!0))}function tm(e,n,a,r){dt=e;var u=0;do{if(ir&&(ar=null),ho=0,ir=!1,25<=u)throw Error(s(301));if(u+=1,hn=Xt=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}U.H=Fm,f=n(a,r)}while(ir);return f}function Nv(){var e=U.H,n=e.useState()[0];return n=typeof n.then=="function"?po(n):n,e=e.useState()[0],(Xt!==null?Xt.memoizedState:null)!==e&&(dt.flags|=1024),n}function Bu(){var e=El!==0;return El=0,e}function Hu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Gu(e){if(Ml){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Ml=!1}ta=0,hn=Xt=dt=null,ir=!1,ho=El=0,ar=null}function Bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?dt.memoizedState=hn=e:hn=hn.next=e,hn}function un(){if(Xt===null){var e=dt.alternate;e=e!==null?e.memoizedState:null}else e=Xt.next;var n=hn===null?dt.memoizedState:hn.next;if(n!==null)hn=n,Xt=e;else{if(e===null)throw dt.alternate===null?Error(s(467)):Error(s(310));Xt=e,e={memoizedState:Xt.memoizedState,baseState:Xt.baseState,baseQueue:Xt.baseQueue,queue:Xt.queue,next:null},hn===null?dt.memoizedState=hn=e:hn=hn.next=e}return hn}function bl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function po(e){var n=ho;return ho+=1,ar===null&&(ar=[]),e=jp(ar,e,n),n=dt,(hn===null?n.memoizedState:hn.next)===null&&(n=n.alternate,U.H=n===null||n.memoizedState===null?Im:$u),e}function Tl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return po(e);if(e.$$typeof===F)return Tn(e)}throw Error(s(438,String(e)))}function Vu(e){var n=null,a=dt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=dt.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=bl(),dt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=Z;return n.index++,a}function na(e,n){return typeof n=="function"?n(e):n}function Al(e){var n=un();return ku(n,Xt,e)}function ku(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=e.baseQueue,f=r.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,r.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var R=_=null,H=null,ee=n,he=!1;do{var xe=ee.lane&-536870913;if(xe!==ee.lane?(yt&xe)===xe:(ta&xe)===xe){var se=ee.revertLane;if(se===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),xe===Js&&(he=!0);else if((ta&se)===se){ee=ee.next,se===Js&&(he=!0);continue}else xe={lane:0,revertLane:ee.revertLane,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},H===null?(R=H=xe,_=f):H=H.next=xe,dt.lanes|=se,Ga|=se;xe=ee.action,bs&&a(f,xe),f=ee.hasEagerState?ee.eagerState:a(f,xe)}else se={lane:xe,revertLane:ee.revertLane,gesture:ee.gesture,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},H===null?(R=H=se,_=f):H=H.next=se,dt.lanes|=xe,Ga|=xe;ee=ee.next}while(ee!==null&&ee!==n);if(H===null?_=f:H.next=R,!$n(f,e.memoizedState)&&(pn=!0,he&&(a=$s,a!==null)))throw a;e.memoizedState=f,e.baseState=_,e.baseQueue=H,r.lastRenderedState=f}return u===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Xu(e){var n=un(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=e(f,_.action),_=_.next;while(_!==u);$n(f,n.memoizedState)||(pn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function nm(e,n,a){var r=dt,u=un(),f=Et;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!$n((Xt||u).memoizedState,a);if(_&&(u.memoizedState=a,pn=!0),u=u.queue,qu(sm.bind(null,r,u,e),[e]),u.getSnapshot!==n||_||hn!==null&&hn.memoizedState.tag&1){if(r.flags|=2048,sr(9,{destroy:void 0},am.bind(null,r,u,a,n),null),Yt===null)throw Error(s(349));f||(ta&127)!==0||im(r,n,a)}return a}function im(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=dt.updateQueue,n===null?(n=bl(),dt.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function am(e,n,a,r){n.value=a,n.getSnapshot=r,rm(n)&&om(e)}function sm(e,n,a){return a(function(){rm(n)&&om(e)})}function rm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!$n(e,a)}catch{return!0}}function om(e){var n=ms(e,2);n!==null&&Wn(n,e,2)}function ju(e){var n=Bn();if(typeof e=="function"){var a=e;if(e=a(),bs){Oe(!0);try{a()}finally{Oe(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:e},n}function lm(e,n,a,r){return e.baseState=a,ku(e,Xt,typeof r=="function"?r:na)}function Dv(e,n,a,r,u){if(wl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};U.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,cm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function cm(e,n){var a=n.action,r=n.payload,u=e.state;if(n.isTransition){var f=U.T,_={};U.T=_;try{var R=a(u,r),H=U.S;H!==null&&H(_,R),um(e,n,R)}catch(ee){Wu(e,n,ee)}finally{f!==null&&_.types!==null&&(f.types=_.types),U.T=f}}else try{f=a(u,r),um(e,n,f)}catch(ee){Wu(e,n,ee)}}function um(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){fm(e,n,r)},function(r){return Wu(e,n,r)}):fm(e,n,a)}function fm(e,n,a){n.status="fulfilled",n.value=a,dm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,cm(e,a)))}function Wu(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,dm(n),n=n.next;while(n!==r)}e.action=null}function dm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function hm(e,n){return n}function pm(e,n){if(Et){var a=Yt.formState;if(a!==null){e:{var r=dt;if(Et){if(Zt){t:{for(var u=Zt,f=gi;u.nodeType!==8;){if(!f){u=null;break t}if(u=xi(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Zt=xi(u.nextSibling),r=u.data==="F!";break e}}Ua(r)}r=!1}r&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hm,lastRenderedState:n},a.queue=r,a=Lm.bind(null,dt,r),r.dispatch=a,r=ju(!1),f=Ju.bind(null,dt,!1,r.queue),r=Bn(),u={state:n,dispatch:null,action:e,pending:null},r.queue=u,a=Dv.bind(null,dt,u,f,a),u.dispatch=a,r.memoizedState=e,[n,a,!1]}function mm(e){var n=un();return gm(n,Xt,e)}function gm(e,n,a){if(n=ku(e,n,hm)[0],e=Al(na)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=po(n)}catch(_){throw _===er?gl:_}else r=n;n=un();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(dt.flags|=2048,sr(9,{destroy:void 0},Uv.bind(null,u,a),null)),[r,f,e]}function Uv(e,n){e.action=n}function _m(e){var n=un(),a=Xt;if(a!==null)return gm(n,a,e);un(),n=n.memoizedState,a=un();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function sr(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=dt.updateQueue,n===null&&(n=bl(),dt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function xm(){return un().memoizedState}function Rl(e,n,a,r){var u=Bn();dt.flags|=e,u.memoizedState=sr(1|n,{destroy:void 0},a,r===void 0?null:r)}function Cl(e,n,a,r){var u=un();r=r===void 0?null:r;var f=u.memoizedState.inst;Xt!==null&&r!==null&&Fu(r,Xt.memoizedState.deps)?u.memoizedState=sr(n,f,a,r):(dt.flags|=e,u.memoizedState=sr(1|n,f,a,r))}function vm(e,n){Rl(8390656,8,e,n)}function qu(e,n){Cl(2048,8,e,n)}function Lv(e){dt.flags|=4;var n=dt.updateQueue;if(n===null)n=bl(),dt.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Sm(e){var n=un().memoizedState;return Lv({ref:n,nextImpl:e}),function(){if((Ot&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function ym(e,n){return Cl(4,2,e,n)}function Mm(e,n){return Cl(4,4,e,n)}function Em(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function bm(e,n,a){a=a!=null?a.concat([e]):null,Cl(4,4,Em.bind(null,n,e),a)}function Yu(){}function Tm(e,n){var a=un();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Fu(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function Am(e,n){var a=un();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Fu(n,r[1]))return r[0];if(r=e(),bs){Oe(!0);try{e()}finally{Oe(!1)}}return a.memoizedState=[r,n],r}function Zu(e,n,a){return a===void 0||(ta&1073741824)!==0&&(yt&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=R0(),dt.lanes|=e,Ga|=e,a)}function Rm(e,n,a,r){return $n(a,n)?a:nr.current!==null?(e=Zu(e,a,r),$n(e,n)||(pn=!0),e):(ta&42)===0||(ta&1073741824)!==0&&(yt&261930)===0?(pn=!0,e.memoizedState=a):(e=R0(),dt.lanes|=e,Ga|=e,n)}function Cm(e,n,a,r,u){var f=B.p;B.p=f!==0&&8>f?f:8;var _=U.T,R={};U.T=R,Ju(e,!1,n,a);try{var H=u(),ee=U.S;if(ee!==null&&ee(R,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var he=Cv(H,r);mo(e,n,he,si(e))}else mo(e,n,r,si(e))}catch(xe){mo(e,n,{then:function(){},status:"rejected",reason:xe},si())}finally{B.p=f,_!==null&&R.types!==null&&(_.types=R.types),U.T=_}}function Ov(){}function Ku(e,n,a,r){if(e.tag!==5)throw Error(s(476));var u=wm(e).queue;Cm(e,u,n,oe,a===null?Ov:function(){return Nm(e),a(r)})}function wm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:oe,baseState:oe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:oe},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Nm(e){var n=wm(e);n.next===null&&(n=e.alternate.memoizedState),mo(e,n.next.queue,{},si())}function Qu(){return Tn(Uo)}function Dm(){return un().memoizedState}function Um(){return un().memoizedState}function Pv(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=si();e=Pa(a);var r=Ia(n,e,a);r!==null&&(Wn(r,n,a),co(r,n,a)),n={cache:Au()},e.payload=n;return}n=n.return}}function Iv(e,n,a){var r=si();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},wl(e)?Om(n,a):(a=mu(e,n,a,r),a!==null&&(Wn(a,e,r),Pm(a,n,r)))}function Lm(e,n,a){var r=si();mo(e,n,a,r)}function mo(e,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(wl(e))Om(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,R=f(_,a);if(u.hasEagerState=!0,u.eagerState=R,$n(R,_))return cl(e,n,u,0),Yt===null&&ll(),!1}catch{}finally{}if(a=mu(e,n,u,r),a!==null)return Wn(a,e,r),Pm(a,n,r),!0}return!1}function Ju(e,n,a,r){if(r={lane:2,revertLane:Df(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},wl(e)){if(n)throw Error(s(479))}else n=mu(e,a,r,2),n!==null&&Wn(n,e,2)}function wl(e){var n=e.alternate;return e===dt||n!==null&&n===dt}function Om(e,n){ir=Ml=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Pm(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,fi(e,a)}}var go={readContext:Tn,use:Tl,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an};go.useEffectEvent=an;var Im={readContext:Tn,use:Tl,useCallback:function(e,n){return Bn().memoizedState=[e,n===void 0?null:n],e},useContext:Tn,useEffect:vm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Rl(4194308,4,Em.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Rl(4194308,4,e,n)},useInsertionEffect:function(e,n){Rl(4,2,e,n)},useMemo:function(e,n){var a=Bn();n=n===void 0?null:n;var r=e();if(bs){Oe(!0);try{e()}finally{Oe(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Bn();if(a!==void 0){var u=a(n);if(bs){Oe(!0);try{a(n)}finally{Oe(!1)}}}else u=n;return r.memoizedState=r.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},r.queue=e,e=e.dispatch=Iv.bind(null,dt,e),[r.memoizedState,e]},useRef:function(e){var n=Bn();return e={current:e},n.memoizedState=e},useState:function(e){e=ju(e);var n=e.queue,a=Lm.bind(null,dt,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Yu,useDeferredValue:function(e,n){var a=Bn();return Zu(a,e,n)},useTransition:function(){var e=ju(!1);return e=Cm.bind(null,dt,e.queue,!0,!1),Bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=dt,u=Bn();if(Et){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Yt===null)throw Error(s(349));(yt&127)!==0||im(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,vm(sm.bind(null,r,f,e),[e]),r.flags|=2048,sr(9,{destroy:void 0},am.bind(null,r,f,a,n),null),a},useId:function(){var e=Bn(),n=Yt.identifierPrefix;if(Et){var a=Ii,r=Pi;a=(r&~(1<<32-Pe(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=El++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=wv++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Qu,useFormState:pm,useActionState:pm,useOptimistic:function(e){var n=Bn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ju.bind(null,dt,!0,a),a.dispatch=n,[e,n]},useMemoCache:Vu,useCacheRefresh:function(){return Bn().memoizedState=Pv.bind(null,dt)},useEffectEvent:function(e){var n=Bn(),a={impl:e};return n.memoizedState=a,function(){if((Ot&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},$u={readContext:Tn,use:Tl,useCallback:Tm,useContext:Tn,useEffect:qu,useImperativeHandle:bm,useInsertionEffect:ym,useLayoutEffect:Mm,useMemo:Am,useReducer:Al,useRef:xm,useState:function(){return Al(na)},useDebugValue:Yu,useDeferredValue:function(e,n){var a=un();return Rm(a,Xt.memoizedState,e,n)},useTransition:function(){var e=Al(na)[0],n=un().memoizedState;return[typeof e=="boolean"?e:po(e),n]},useSyncExternalStore:nm,useId:Dm,useHostTransitionStatus:Qu,useFormState:mm,useActionState:mm,useOptimistic:function(e,n){var a=un();return lm(a,Xt,e,n)},useMemoCache:Vu,useCacheRefresh:Um};$u.useEffectEvent=Sm;var Fm={readContext:Tn,use:Tl,useCallback:Tm,useContext:Tn,useEffect:qu,useImperativeHandle:bm,useInsertionEffect:ym,useLayoutEffect:Mm,useMemo:Am,useReducer:Xu,useRef:xm,useState:function(){return Xu(na)},useDebugValue:Yu,useDeferredValue:function(e,n){var a=un();return Xt===null?Zu(a,e,n):Rm(a,Xt.memoizedState,e,n)},useTransition:function(){var e=Xu(na)[0],n=un().memoizedState;return[typeof e=="boolean"?e:po(e),n]},useSyncExternalStore:nm,useId:Dm,useHostTransitionStatus:Qu,useFormState:_m,useActionState:_m,useOptimistic:function(e,n){var a=un();return Xt!==null?lm(a,Xt,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Vu,useCacheRefresh:Um};Fm.useEffectEvent=Sm;function ef(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:S({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var tf={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=si(),u=Pa(r);u.payload=n,a!=null&&(u.callback=a),n=Ia(e,u,r),n!==null&&(Wn(n,e,r),co(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=si(),u=Pa(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ia(e,u,r),n!==null&&(Wn(n,e,r),co(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=si(),r=Pa(a);r.tag=2,n!=null&&(r.callback=n),n=Ia(e,r,a),n!==null&&(Wn(n,e,a),co(n,e,a))}};function zm(e,n,a,r,u,f,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,_):n.prototype&&n.prototype.isPureReactComponent?!to(a,r)||!to(u,f):!0}function Bm(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&tf.enqueueReplaceState(n,n.state,null)}function Ts(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=S({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Hm(e){ol(e)}function Gm(e){console.error(e)}function Vm(e){ol(e)}function Nl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function km(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function nf(e,n,a){return a=Pa(a),a.tag=3,a.payload={element:null},a.callback=function(){Nl(e,n)},a}function Xm(e){return e=Pa(e),e.tag=3,e}function jm(e,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;e.payload=function(){return u(f)},e.callback=function(){km(n,a,r)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){km(n,a,r),typeof u!="function"&&(Va===null?Va=new Set([this]):Va.add(this));var R=r.stack;this.componentDidCatch(r.value,{componentStack:R!==null?R:""})})}function Fv(e,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Qs(n,a,u,!0),a=ti.current,a!==null){switch(a.tag){case 31:case 13:return _i===null?Vl():a.alternate===null&&sn===0&&(sn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===_l?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Cf(e,r,u)),!1;case 22:return a.flags|=65536,r===_l?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Cf(e,r,u)),!1}throw Error(s(435,a.tag))}return Cf(e,r,u),Vl(),!1}if(Et)return n=ti.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==yu&&(e=Error(s(422),{cause:r}),ao(hi(e,a)))):(r!==yu&&(n=Error(s(423),{cause:r}),ao(hi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,r=hi(r,a),u=nf(e.stateNode,r,u),Uu(e,u),sn!==4&&(sn=2)),!1;var f=Error(s(520),{cause:r});if(f=hi(f,a),bo===null?bo=[f]:bo.push(f),sn!==4&&(sn=2),n===null)return!0;r=hi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=nf(a.stateNode,r,e),Uu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Va===null||!Va.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Xm(u),jm(u,e,a,r),Uu(a,u),!1}a=a.return}while(a!==null);return!1}var af=Error(s(461)),pn=!1;function An(e,n,a,r){n.child=e===null?Zp(n,null,a,r):Es(n,e.child,a,r)}function Wm(e,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var _={};for(var R in r)R!=="ref"&&(_[R]=r[R])}else _=r;return vs(n),r=zu(e,n,a,_,f,u),R=Bu(),e!==null&&!pn?(Hu(e,n,u),ia(e,n,u)):(Et&&R&&vu(n),n.flags|=1,An(e,n,r,u),n.child)}function qm(e,n,a,r,u){if(e===null){var f=a.type;return typeof f=="function"&&!gu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Ym(e,n,f,r,u)):(e=fl(a.type,null,r,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!df(e,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:to,a(_,r)&&e.ref===n.ref)return ia(e,n,u)}return n.flags|=1,e=Qi(f,r),e.ref=n.ref,e.return=n,n.child=e}function Ym(e,n,a,r,u){if(e!==null){var f=e.memoizedProps;if(to(f,r)&&e.ref===n.ref)if(pn=!1,n.pendingProps=r=f,df(e,u))(e.flags&131072)!==0&&(pn=!0);else return n.lanes=e.lanes,ia(e,n,u)}return sf(e,n,a,r,u)}function Zm(e,n,a,r){var u=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return Km(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ml(n,f!==null?f.cachePool:null),f!==null?Jp(n,f):Ou(),$p(n);else return r=n.lanes=536870912,Km(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(ml(n,f.cachePool),Jp(n,f),za(),n.memoizedState=null):(e!==null&&ml(n,null),Ou(),za());return An(e,n,u,a),n.child}function _o(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Km(e,n,a,r,u){var f=Cu();return f=f===null?null:{parent:dn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&ml(n,null),Ou(),$p(n),e!==null&&Qs(e,n,r,!0),n.childLanes=u,null}function Dl(e,n){return n=Ll({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Qm(e,n,a){return Es(n,e.child,null,a),e=Dl(n,n.pendingProps),e.flags|=2,ni(n),n.memoizedState=null,e}function zv(e,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Et){if(r.mode==="hidden")return e=Dl(n,r),n.lanes=536870912,_o(null,e);if(Iu(n),(e=Zt)?(e=cg(e,gi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Na!==null?{id:Pi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},a=Op(e),a.return=n,n.child=a,bn=n,Zt=null)):e=null,e===null)throw Ua(n);return n.lanes=536870912,null}return Dl(n,r)}var f=e.memoizedState;if(f!==null){var _=f.dehydrated;if(Iu(n),u)if(n.flags&256)n.flags&=-257,n=Qm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(pn||Qs(e,n,a,!1),u=(a&e.childLanes)!==0,pn||u){if(r=Yt,r!==null&&(_=Kn(r,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,ms(e,_),Wn(r,e,_),af;Vl(),n=Qm(e,n,a)}else e=f.treeContext,Zt=xi(_.nextSibling),bn=n,Et=!0,Da=null,gi=!1,e!==null&&Fp(n,e),n=Dl(n,r),n.flags|=4096;return n}return e=Qi(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Ul(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function sf(e,n,a,r,u){return vs(n),a=zu(e,n,a,r,void 0,u),r=Bu(),e!==null&&!pn?(Hu(e,n,u),ia(e,n,u)):(Et&&r&&vu(n),n.flags|=1,An(e,n,a,u),n.child)}function Jm(e,n,a,r,u,f){return vs(n),n.updateQueue=null,a=tm(n,r,a,u),em(e),r=Bu(),e!==null&&!pn?(Hu(e,n,f),ia(e,n,f)):(Et&&r&&vu(n),n.flags|=1,An(e,n,a,f),n.child)}function $m(e,n,a,r,u){if(vs(n),n.stateNode===null){var f=qs,_=a.contextType;typeof _=="object"&&_!==null&&(f=Tn(_)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=tf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Nu(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?Tn(_):qs,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(ef(n,a,_,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&tf.enqueueReplaceState(f,f.state,null),fo(n,r,f,u),uo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var R=n.memoizedProps,H=Ts(a,R);f.props=H;var ee=f.context,he=a.contextType;_=qs,typeof he=="object"&&he!==null&&(_=Tn(he));var xe=a.getDerivedStateFromProps;he=typeof xe=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,he||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||ee!==_)&&Bm(n,f,r,_),Oa=!1;var se=n.memoizedState;f.state=se,fo(n,r,f,u),uo(),ee=n.memoizedState,R||se!==ee||Oa?(typeof xe=="function"&&(ef(n,a,xe,r),ee=n.memoizedState),(H=Oa||zm(n,a,H,r,se,ee,_))?(he||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=ee),f.props=r,f.state=ee,f.context=_,r=H):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Du(e,n),_=n.memoizedProps,he=Ts(a,_),f.props=he,xe=n.pendingProps,se=f.context,ee=a.contextType,H=qs,typeof ee=="object"&&ee!==null&&(H=Tn(ee)),R=a.getDerivedStateFromProps,(ee=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==xe||se!==H)&&Bm(n,f,r,H),Oa=!1,se=n.memoizedState,f.state=se,fo(n,r,f,u),uo();var ce=n.memoizedState;_!==xe||se!==ce||Oa||e!==null&&e.dependencies!==null&&hl(e.dependencies)?(typeof R=="function"&&(ef(n,a,R,r),ce=n.memoizedState),(he=Oa||zm(n,a,he,r,se,ce,H)||e!==null&&e.dependencies!==null&&hl(e.dependencies))?(ee||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ce,H),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ce,H)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&se===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&se===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ce),f.props=r,f.state=ce,f.context=H,r=he):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&se===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&se===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,Ul(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=Es(n,e.child,null,u),n.child=Es(n,null,a,u)):An(e,n,a,u),n.memoizedState=f.state,e=n.child):e=ia(e,n,u),e}function e0(e,n,a,r){return _s(),n.flags|=256,An(e,n,a,r),n.child}var rf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function of(e){return{baseLanes:e,cachePool:kp()}}function lf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ai),e}function t0(e,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=e!==null&&e.memoizedState===null?!1:(cn.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,e===null){if(Et){if(u?Fa(n):za(),(e=Zt)?(e=cg(e,gi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Na!==null?{id:Pi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},a=Op(e),a.return=n,n.child=a,bn=n,Zt=null)):e=null,e===null)throw Ua(n);return Xf(e)?n.lanes=32:n.lanes=536870912,null}var R=r.children;return r=r.fallback,u?(za(),u=n.mode,R=Ll({mode:"hidden",children:R},u),r=gs(r,u,a,null),R.return=n,r.return=n,R.sibling=r,n.child=R,r=n.child,r.memoizedState=of(a),r.childLanes=lf(e,_,a),n.memoizedState=rf,_o(null,r)):(Fa(n),cf(n,R))}var H=e.memoizedState;if(H!==null&&(R=H.dehydrated,R!==null)){if(f)n.flags&256?(Fa(n),n.flags&=-257,n=uf(e,n,a)):n.memoizedState!==null?(za(),n.child=e.child,n.flags|=128,n=null):(za(),R=r.fallback,u=n.mode,r=Ll({mode:"visible",children:r.children},u),R=gs(R,u,a,null),R.flags|=2,r.return=n,R.return=n,r.sibling=R,n.child=r,Es(n,e.child,null,a),r=n.child,r.memoizedState=of(a),r.childLanes=lf(e,_,a),n.memoizedState=rf,n=_o(null,r));else if(Fa(n),Xf(R)){if(_=R.nextSibling&&R.nextSibling.dataset,_)var ee=_.dgst;_=ee,r=Error(s(419)),r.stack="",r.digest=_,ao({value:r,source:null,stack:null}),n=uf(e,n,a)}else if(pn||Qs(e,n,a,!1),_=(a&e.childLanes)!==0,pn||_){if(_=Yt,_!==null&&(r=Kn(_,a),r!==0&&r!==H.retryLane))throw H.retryLane=r,ms(e,r),Wn(_,e,r),af;kf(R)||Vl(),n=uf(e,n,a)}else kf(R)?(n.flags|=192,n.child=e.child,n=null):(e=H.treeContext,Zt=xi(R.nextSibling),bn=n,Et=!0,Da=null,gi=!1,e!==null&&Fp(n,e),n=cf(n,r.children),n.flags|=4096);return n}return u?(za(),R=r.fallback,u=n.mode,H=e.child,ee=H.sibling,r=Qi(H,{mode:"hidden",children:r.children}),r.subtreeFlags=H.subtreeFlags&65011712,ee!==null?R=Qi(ee,R):(R=gs(R,u,a,null),R.flags|=2),R.return=n,r.return=n,r.sibling=R,n.child=r,_o(null,r),r=n.child,R=e.child.memoizedState,R===null?R=of(a):(u=R.cachePool,u!==null?(H=dn._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=kp(),R={baseLanes:R.baseLanes|a,cachePool:u}),r.memoizedState=R,r.childLanes=lf(e,_,a),n.memoizedState=rf,_o(e.child,r)):(Fa(n),a=e.child,e=a.sibling,a=Qi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(_=n.deletions,_===null?(n.deletions=[e],n.flags|=16):_.push(e)),n.child=a,n.memoizedState=null,a)}function cf(e,n){return n=Ll({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ll(e,n){return e=ei(22,e,null,n),e.lanes=0,e}function uf(e,n,a){return Es(n,e.child,null,a),e=cf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function n0(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),bu(e.return,n,a)}function ff(e,n,a,r,u,f){var _=e.memoizedState;_===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=r,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function i0(e,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var _=cn.current,R=(_&2)!==0;if(R?(_=_&1|2,n.flags|=128):_&=1,ve(cn,_),An(e,n,r,a),r=Et?io:0,!R&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&n0(e,a,n);else if(e.tag===19)n0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&yl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),ff(n,!1,u,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&yl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}ff(n,!0,a,null,f,r);break;case"together":ff(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function ia(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ga|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Qs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Qi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Qi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function df(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&hl(e)))}function Bv(e,n,a){switch(n.tag){case 3:be(n,n.stateNode.containerInfo),La(n,dn,e.memoizedState.cache),_s();break;case 27:case 5:$e(n);break;case 4:be(n,n.stateNode.containerInfo);break;case 10:La(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Iu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Fa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?t0(e,n,a):(Fa(n),e=ia(e,n,a),e!==null?e.sibling:null);Fa(n);break;case 19:var u=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Qs(e,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return i0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ve(cn,cn.current),r)break;return null;case 22:return n.lanes=0,Zm(e,n,a,n.pendingProps);case 24:La(n,dn,e.memoizedState.cache)}return ia(e,n,a)}function a0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)pn=!0;else{if(!df(e,a)&&(n.flags&128)===0)return pn=!1,Bv(e,n,a);pn=(e.flags&131072)!==0}else pn=!1,Et&&(n.flags&1048576)!==0&&Ip(n,io,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(e=ys(n.elementType),n.type=e,typeof e=="function")gu(e)?(r=Ts(e,r),n.tag=1,n=$m(null,n,e,r,a)):(n.tag=0,n=sf(null,n,e,r,a));else{if(e!=null){var u=e.$$typeof;if(u===L){n.tag=11,n=Wm(null,n,e,r,a);break e}else if(u===z){n.tag=14,n=qm(null,n,e,r,a);break e}}throw n=ue(e)||e,Error(s(306,n,""))}}return n;case 0:return sf(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=Ts(r,n.pendingProps),$m(e,n,r,u,a);case 3:e:{if(be(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,Du(e,n),fo(n,r,null,a);var _=n.memoizedState;if(r=_.cache,La(n,dn,r),r!==f.cache&&Tu(n,[dn],a,!0),uo(),r=_.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=e0(e,n,r,a);break e}else if(r!==u){u=hi(Error(s(424)),n),ao(u),n=e0(e,n,r,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Zt=xi(e.firstChild),bn=n,Et=!0,Da=null,gi=!0,a=Zp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(_s(),r===u){n=ia(e,n,a);break e}An(e,n,r,a)}n=n.child}return n;case 26:return Ul(e,n),e===null?(a=mg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Et||(a=n.type,e=n.pendingProps,r=Zl(re.current).createElement(a),r[ln]=n,r[En]=e,Rn(r,a,e),fn(r),n.stateNode=r):n.memoizedState=mg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return $e(n),e===null&&Et&&(r=n.stateNode=dg(n.type,n.pendingProps,re.current),bn=n,gi=!0,u=Zt,Wa(n.type)?(jf=u,Zt=xi(r.firstChild)):Zt=u),An(e,n,n.pendingProps.children,a),Ul(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Et&&((u=r=Zt)&&(r=mS(r,n.type,n.pendingProps,gi),r!==null?(n.stateNode=r,bn=n,Zt=xi(r.firstChild),gi=!1,u=!0):u=!1),u||Ua(n)),$e(n),u=n.type,f=n.pendingProps,_=e!==null?e.memoizedProps:null,r=f.children,Hf(u,f)?r=null:_!==null&&Hf(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=zu(e,n,Nv,null,null,a),Uo._currentValue=u),Ul(e,n),An(e,n,r,a),n.child;case 6:return e===null&&Et&&((e=a=Zt)&&(a=gS(a,n.pendingProps,gi),a!==null?(n.stateNode=a,bn=n,Zt=null,e=!0):e=!1),e||Ua(n)),null;case 13:return t0(e,n,a);case 4:return be(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Es(n,null,r,a):An(e,n,r,a),n.child;case 11:return Wm(e,n,n.type,n.pendingProps,a);case 7:return An(e,n,n.pendingProps,a),n.child;case 8:return An(e,n,n.pendingProps.children,a),n.child;case 12:return An(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,La(n,n.type,r.value),An(e,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,vs(n),u=Tn(u),r=r(u),n.flags|=1,An(e,n,r,a),n.child;case 14:return qm(e,n,n.type,n.pendingProps,a);case 15:return Ym(e,n,n.type,n.pendingProps,a);case 19:return i0(e,n,a);case 31:return zv(e,n,a);case 22:return Zm(e,n,a,n.pendingProps);case 24:return vs(n),r=Tn(dn),e===null?(u=Cu(),u===null&&(u=Yt,f=Au(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},Nu(n),La(n,dn,u)):((e.lanes&a)!==0&&(Du(e,n),fo(n,null,null,a),uo()),u=e.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),La(n,dn,r)):(r=f.cache,La(n,dn,r),r!==u.cache&&Tu(n,[dn],a,!0))),An(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function aa(e){e.flags|=4}function hf(e,n,a,r,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(D0())e.flags|=8192;else throw Ms=_l,wu}else e.flags&=-16777217}function s0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Sg(n))if(D0())e.flags|=8192;else throw Ms=_l,wu}function Ol(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Me():536870912,e.lanes|=n,cr|=n)}function xo(e,n){if(!Et)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Kt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function Hv(e,n,a){var r=n.pendingProps;switch(Su(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(n),null;case 1:return Kt(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),ea(dn),He(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ks(n)?aa(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Mu())),Kt(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(aa(n),f!==null?(Kt(n),s0(n,f)):(Kt(n),hf(n,u,null,r,a))):f?f!==e.memoizedState?(aa(n),Kt(n),s0(n,f)):(Kt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&aa(n),Kt(n),hf(n,u,e,r,a)),null;case 27:if(Ye(n),a=re.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&aa(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Kt(n),null}e=Te.current,Ks(n)?zp(n):(e=dg(u,r,a),n.stateNode=e,aa(n))}return Kt(n),null;case 5:if(Ye(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&aa(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Kt(n),null}if(f=Te.current,Ks(n))zp(n);else{var _=Zl(re.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?_.createElement("select",{is:r.is}):_.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?_.createElement(u,{is:r.is}):_.createElement(u)}}f[ln]=n,f[En]=r;e:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break e;for(;_.sibling===null;){if(_.return===null||_.return===n)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;e:switch(Rn(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&aa(n)}}return Kt(n),hf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&aa(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=re.current,Ks(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,u=bn,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}e[ln]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||tg(e.nodeValue,a)),e||Ua(n,!0)}else e=Zl(e).createTextNode(r),e[ln]=n,n.stateNode=e}return Kt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=Ks(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[ln]=n}else _s(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Kt(n),e=!1}else a=Mu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ni(n),n):(ni(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Kt(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Ks(n),r!==null&&r.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[ln]=n}else _s(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Kt(n),u=!1}else u=Mu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ni(n),n):(ni(n),null)}return ni(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Ol(n,n.updateQueue),Kt(n),null);case 4:return He(),e===null&&Pf(n.stateNode.containerInfo),Kt(n),null;case 10:return ea(n.type),Kt(n),null;case 19:if(Q(cn),r=n.memoizedState,r===null)return Kt(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)xo(r,!1);else{if(sn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=yl(e),f!==null){for(n.flags|=128,xo(r,!1),e=f.updateQueue,n.updateQueue=e,Ol(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Lp(a,e),a=a.sibling;return ve(cn,cn.current&1|2),Et&&Ji(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&Ce()>Bl&&(n.flags|=128,u=!0,xo(r,!1),n.lanes=4194304)}else{if(!u)if(e=yl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Ol(n,e),xo(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!Et)return Kt(n),null}else 2*Ce()-r.renderingStartTime>Bl&&a!==536870912&&(n.flags|=128,u=!0,xo(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ce(),e.sibling=null,a=cn.current,ve(cn,u?a&1|2:a&1),Et&&Ji(n,r.treeForkCount),e):(Kt(n),null);case 22:case 23:return ni(n),Pu(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Kt(n),n.subtreeFlags&6&&(n.flags|=8192)):Kt(n),a=n.updateQueue,a!==null&&Ol(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&Q(Ss),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ea(dn),Kt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Gv(e,n){switch(Su(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ea(dn),He(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ye(n),null;case 31:if(n.memoizedState!==null){if(ni(n),n.alternate===null)throw Error(s(340));_s()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ni(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));_s()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Q(cn),null;case 4:return He(),null;case 10:return ea(n.type),null;case 22:case 23:return ni(n),Pu(),e!==null&&Q(Ss),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ea(dn),null;case 25:return null;default:return null}}function r0(e,n){switch(Su(n),n.tag){case 3:ea(dn),He();break;case 26:case 27:case 5:Ye(n);break;case 4:He();break;case 31:n.memoizedState!==null&&ni(n);break;case 13:ni(n);break;case 19:Q(cn);break;case 10:ea(n.type);break;case 22:case 23:ni(n),Pu(),e!==null&&Q(Ss);break;case 24:ea(dn)}}function vo(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&e)===e){r=void 0;var f=a.create,_=a.inst;r=f(),_.destroy=r}a=a.next}while(a!==u)}}catch(R){Gt(n,n.return,R)}}function Ba(e,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&e)===e){var _=r.inst,R=_.destroy;if(R!==void 0){_.destroy=void 0,u=n;var H=a,ee=R;try{ee()}catch(he){Gt(u,H,he)}}}r=r.next}while(r!==f)}}catch(he){Gt(n,n.return,he)}}function o0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Qp(n,a)}catch(r){Gt(e,e.return,r)}}}function l0(e,n,a){a.props=Ts(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Gt(e,n,r)}}function So(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(u){Gt(e,n,u)}}function Fi(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){Gt(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Gt(e,n,u)}else a.current=null}function c0(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break e;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){Gt(e,e.return,u)}}function pf(e,n,a){try{var r=e.stateNode;cS(r,e.type,a,n),r[En]=n}catch(u){Gt(e,e.return,u)}}function u0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Wa(e.type)||e.tag===4}function mf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||u0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Wa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gf(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Zi));else if(r!==4&&(r===27&&Wa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(gf(e,n,a),e=e.sibling;e!==null;)gf(e,n,a),e=e.sibling}function Pl(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&Wa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Pl(e,n,a),e=e.sibling;e!==null;)Pl(e,n,a),e=e.sibling}function f0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Rn(n,r,a),n[ln]=e,n[En]=a}catch(f){Gt(e,e.return,f)}}var sa=!1,mn=!1,_f=!1,d0=typeof WeakSet=="function"?WeakSet:Set,yn=null;function Vv(e,n){if(e=e.containerInfo,zf=nc,e=bp(e),cu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var _=0,R=-1,H=-1,ee=0,he=0,xe=e,se=null;t:for(;;){for(var ce;xe!==a||u!==0&&xe.nodeType!==3||(R=_+u),xe!==f||r!==0&&xe.nodeType!==3||(H=_+r),xe.nodeType===3&&(_+=xe.nodeValue.length),(ce=xe.firstChild)!==null;)se=xe,xe=ce;for(;;){if(xe===e)break t;if(se===a&&++ee===u&&(R=_),se===f&&++he===r&&(H=_),(ce=xe.nextSibling)!==null)break;xe=se,se=xe.parentNode}xe=ce}a=R===-1||H===-1?null:{start:R,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(Bf={focusedElem:e,selectionRange:a},nc=!1,yn=n;yn!==null;)if(n=yn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,yn=e;else for(;yn!==null;){switch(n=yn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var je=Ts(a.type,u);e=r.getSnapshotBeforeUpdate(je,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(tt){Gt(a,a.return,tt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Vf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Vf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,yn=e;break}yn=n.return}}function h0(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:oa(e,a),r&4&&vo(5,a);break;case 1:if(oa(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(_){Gt(a,a.return,_)}else{var u=Ts(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(_){Gt(a,a.return,_)}}r&64&&o0(a),r&512&&So(a,a.return);break;case 3:if(oa(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Qp(e,n)}catch(_){Gt(a,a.return,_)}}break;case 27:n===null&&r&4&&f0(a);case 26:case 5:oa(e,a),n===null&&r&4&&c0(a),r&512&&So(a,a.return);break;case 12:oa(e,a);break;case 31:oa(e,a),r&4&&g0(e,a);break;case 13:oa(e,a),r&4&&_0(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Qv.bind(null,a),_S(e,a))));break;case 22:if(r=a.memoizedState!==null||sa,!r){n=n!==null&&n.memoizedState!==null||mn,u=sa;var f=mn;sa=r,(mn=n)&&!f?la(e,a,(a.subtreeFlags&8772)!==0):oa(e,a),sa=u,mn=f}break;case 30:break;default:oa(e,a)}}function p0(e){var n=e.alternate;n!==null&&(e.alternate=null,p0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&qr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var tn=null,Vn=!1;function ra(e,n,a){for(a=a.child;a!==null;)m0(e,n,a),a=a.sibling}function m0(e,n,a){if(de&&typeof de.onCommitFiberUnmount=="function")try{de.onCommitFiberUnmount(fe,a)}catch{}switch(a.tag){case 26:mn||Fi(a,n),ra(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:mn||Fi(a,n);var r=tn,u=Vn;Wa(a.type)&&(tn=a.stateNode,Vn=!1),ra(e,n,a),wo(a.stateNode),tn=r,Vn=u;break;case 5:mn||Fi(a,n);case 6:if(r=tn,u=Vn,tn=null,ra(e,n,a),tn=r,Vn=u,tn!==null)if(Vn)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(a.stateNode)}catch(f){Gt(a,n,f)}else try{tn.removeChild(a.stateNode)}catch(f){Gt(a,n,f)}break;case 18:tn!==null&&(Vn?(e=tn,og(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),_r(e)):og(tn,a.stateNode));break;case 4:r=tn,u=Vn,tn=a.stateNode.containerInfo,Vn=!0,ra(e,n,a),tn=r,Vn=u;break;case 0:case 11:case 14:case 15:Ba(2,a,n),mn||Ba(4,a,n),ra(e,n,a);break;case 1:mn||(Fi(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&l0(a,n,r)),ra(e,n,a);break;case 21:ra(e,n,a);break;case 22:mn=(r=mn)||a.memoizedState!==null,ra(e,n,a),mn=r;break;default:ra(e,n,a)}}function g0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{_r(e)}catch(a){Gt(n,n.return,a)}}}function _0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{_r(e)}catch(a){Gt(n,n.return,a)}}function kv(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new d0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new d0),n;default:throw Error(s(435,e.tag))}}function Il(e,n){var a=kv(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=Jv.bind(null,e,r);r.then(u,u)}})}function kn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],f=e,_=n,R=_;e:for(;R!==null;){switch(R.tag){case 27:if(Wa(R.type)){tn=R.stateNode,Vn=!1;break e}break;case 5:tn=R.stateNode,Vn=!1;break e;case 3:case 4:tn=R.stateNode.containerInfo,Vn=!0;break e}R=R.return}if(tn===null)throw Error(s(160));m0(f,_,u),tn=null,Vn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)x0(n,e),n=n.sibling}var Ai=null;function x0(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:kn(n,e),Xn(e),r&4&&(Ba(3,e,e.return),vo(3,e),Ba(5,e,e.return));break;case 1:kn(n,e),Xn(e),r&512&&(mn||a===null||Fi(a,a.return)),r&64&&sa&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=Ai;if(kn(n,e),Xn(e),r&512&&(mn||a===null||Fi(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){e:{r=e.type,a=e.memoizedProps,u=u.ownerDocument||u;t:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ba]||f[ln]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),Rn(f,r,a),f[ln]=e,fn(f),r=f;break e;case"link":var _=xg("link","href",u).get(r+(a.href||""));if(_){for(var R=0;R<_.length;R++)if(f=_[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(R,1);break t}}f=u.createElement(r),Rn(f,r,a),u.head.appendChild(f);break;case"meta":if(_=xg("meta","content",u).get(r+(a.content||""))){for(R=0;R<_.length;R++)if(f=_[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(R,1);break t}}f=u.createElement(r),Rn(f,r,a),u.head.appendChild(f);break;default:throw Error(s(468,r))}f[ln]=e,fn(f),r=f}e.stateNode=r}else vg(u,e.type,e.stateNode);else e.stateNode=_g(u,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?vg(u,e.type,e.stateNode):_g(u,r,e.memoizedProps)):r===null&&e.stateNode!==null&&pf(e,e.memoizedProps,a.memoizedProps)}break;case 27:kn(n,e),Xn(e),r&512&&(mn||a===null||Fi(a,a.return)),a!==null&&r&4&&pf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(kn(n,e),Xn(e),r&512&&(mn||a===null||Fi(a,a.return)),e.flags&32){u=e.stateNode;try{Jn(u,"")}catch(je){Gt(e,e.return,je)}}r&4&&e.stateNode!=null&&(u=e.memoizedProps,pf(e,u,a!==null?a.memoizedProps:u)),r&1024&&(_f=!0);break;case 6:if(kn(n,e),Xn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(je){Gt(e,e.return,je)}}break;case 3:if(Jl=null,u=Ai,Ai=Kl(n.containerInfo),kn(n,e),Ai=u,Xn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{_r(n.containerInfo)}catch(je){Gt(e,e.return,je)}_f&&(_f=!1,v0(e));break;case 4:r=Ai,Ai=Kl(e.stateNode.containerInfo),kn(n,e),Xn(e),Ai=r;break;case 12:kn(n,e),Xn(e);break;case 31:kn(n,e),Xn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Il(e,r)));break;case 13:kn(n,e),Xn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(zl=Ce()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Il(e,r)));break;case 22:u=e.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,ee=sa,he=mn;if(sa=ee||u,mn=he||H,kn(n,e),mn=he,sa=ee,Xn(e),r&8192)e:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||sa||mn||As(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(f=H.stateNode,u)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{R=H.stateNode;var xe=H.memoizedProps.style,se=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;R.style.display=se==null||typeof se=="boolean"?"":(""+se).trim()}}catch(je){Gt(H,H.return,je)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(je){Gt(H,H.return,je)}}}else if(n.tag===18){if(a===null){H=n;try{var ce=H.stateNode;u?lg(ce,!0):lg(H.stateNode,!1)}catch(je){Gt(H,H.return,je)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Il(e,a))));break;case 19:kn(n,e),Xn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Il(e,r)));break;case 30:break;case 21:break;default:kn(n,e),Xn(e)}}function Xn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(u0(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=mf(e);Pl(e,f,u);break;case 5:var _=a.stateNode;a.flags&32&&(Jn(_,""),a.flags&=-33);var R=mf(e);Pl(e,R,_);break;case 3:case 4:var H=a.stateNode.containerInfo,ee=mf(e);gf(e,ee,H);break;default:throw Error(s(161))}}catch(he){Gt(e,e.return,he)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function v0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;v0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function oa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)h0(e,n.alternate,n),n=n.sibling}function As(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ba(4,n,n.return),As(n);break;case 1:Fi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&l0(n,n.return,a),As(n);break;case 27:wo(n.stateNode);case 26:case 5:Fi(n,n.return),As(n);break;case 22:n.memoizedState===null&&As(n);break;case 30:As(n);break;default:As(n)}e=e.sibling}}function la(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=e,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:la(u,f,a),vo(4,f);break;case 1:if(la(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ee){Gt(r,r.return,ee)}if(r=f,u=r.updateQueue,u!==null){var R=r.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)Kp(H[u],R)}catch(ee){Gt(r,r.return,ee)}}a&&_&64&&o0(f),So(f,f.return);break;case 27:f0(f);case 26:case 5:la(u,f,a),a&&r===null&&_&4&&c0(f),So(f,f.return);break;case 12:la(u,f,a);break;case 31:la(u,f,a),a&&_&4&&g0(u,f);break;case 13:la(u,f,a),a&&_&4&&_0(u,f);break;case 22:f.memoizedState===null&&la(u,f,a),So(f,f.return);break;case 30:break;default:la(u,f,a)}n=n.sibling}}function xf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&so(a))}function vf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&so(e))}function Ri(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)S0(e,n,a,r),n=n.sibling}function S0(e,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ri(e,n,a,r),u&2048&&vo(9,n);break;case 1:Ri(e,n,a,r);break;case 3:Ri(e,n,a,r),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&so(e)));break;case 12:if(u&2048){Ri(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,_=f.id,R=f.onPostCommit;typeof R=="function"&&R(_,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(H){Gt(n,n.return,H)}}else Ri(e,n,a,r);break;case 31:Ri(e,n,a,r);break;case 13:Ri(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?Ri(e,n,a,r):yo(e,n):f._visibility&2?Ri(e,n,a,r):(f._visibility|=2,rr(e,n,a,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&xf(_,n);break;case 24:Ri(e,n,a,r),u&2048&&vf(n.alternate,n);break;default:Ri(e,n,a,r)}}function rr(e,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,_=n,R=a,H=r,ee=_.flags;switch(_.tag){case 0:case 11:case 15:rr(f,_,R,H,u),vo(8,_);break;case 23:break;case 22:var he=_.stateNode;_.memoizedState!==null?he._visibility&2?rr(f,_,R,H,u):yo(f,_):(he._visibility|=2,rr(f,_,R,H,u)),u&&ee&2048&&xf(_.alternate,_);break;case 24:rr(f,_,R,H,u),u&&ee&2048&&vf(_.alternate,_);break;default:rr(f,_,R,H,u)}n=n.sibling}}function yo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,u=r.flags;switch(r.tag){case 22:yo(a,r),u&2048&&xf(r.alternate,r);break;case 24:yo(a,r),u&2048&&vf(r.alternate,r);break;default:yo(a,r)}n=n.sibling}}var Mo=8192;function or(e,n,a){if(e.subtreeFlags&Mo)for(e=e.child;e!==null;)y0(e,n,a),e=e.sibling}function y0(e,n,a){switch(e.tag){case 26:or(e,n,a),e.flags&Mo&&e.memoizedState!==null&&wS(a,Ai,e.memoizedState,e.memoizedProps);break;case 5:or(e,n,a);break;case 3:case 4:var r=Ai;Ai=Kl(e.stateNode.containerInfo),or(e,n,a),Ai=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Mo,Mo=16777216,or(e,n,a),Mo=r):or(e,n,a));break;default:or(e,n,a)}}function M0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Eo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];yn=r,b0(r,e)}M0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)E0(e),e=e.sibling}function E0(e){switch(e.tag){case 0:case 11:case 15:Eo(e),e.flags&2048&&Ba(9,e,e.return);break;case 3:Eo(e);break;case 12:Eo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Fl(e)):Eo(e);break;default:Eo(e)}}function Fl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];yn=r,b0(r,e)}M0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ba(8,n,n.return),Fl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Fl(n));break;default:Fl(n)}e=e.sibling}}function b0(e,n){for(;yn!==null;){var a=yn;switch(a.tag){case 0:case 11:case 15:Ba(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:so(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,yn=r;else e:for(a=e;yn!==null;){r=yn;var u=r.sibling,f=r.return;if(p0(r),r===a){yn=null;break e}if(u!==null){u.return=f,yn=u;break e}yn=f}}}var Xv={getCacheForType:function(e){var n=Tn(dn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Tn(dn).controller.signal}},jv=typeof WeakMap=="function"?WeakMap:Map,Ot=0,Yt=null,vt=null,yt=0,Ht=0,ii=null,Ha=!1,lr=!1,Sf=!1,ca=0,sn=0,Ga=0,Rs=0,yf=0,ai=0,cr=0,bo=null,jn=null,Mf=!1,zl=0,T0=0,Bl=1/0,Hl=null,Va=null,xn=0,ka=null,ur=null,ua=0,Ef=0,bf=null,A0=null,To=0,Tf=null;function si(){return(Ot&2)!==0&&yt!==0?yt&-yt:U.T!==null?Df():Xr()}function R0(){if(ai===0)if((yt&536870912)===0||Et){var e=_t;_t<<=1,(_t&3932160)===0&&(_t=262144),ai=e}else ai=536870912;return e=ti.current,e!==null&&(e.flags|=32),ai}function Wn(e,n,a){(e===Yt&&(Ht===2||Ht===9)||e.cancelPendingCommit!==null)&&(fr(e,0),Xa(e,yt,ai,!1)),nt(e,a),((Ot&2)===0||e!==Yt)&&(e===Yt&&((Ot&2)===0&&(Rs|=a),sn===4&&Xa(e,yt,ai,!1)),zi(e))}function C0(e,n,a){if((Ot&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||ze(e,n),u=r?Yv(e,n):Rf(e,n,!0),f=r;do{if(u===0){lr&&!r&&Xa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Wv(a)){u=Rf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;e:{var R=e;u=bo;var H=R.current.memoizedState.isDehydrated;if(H&&(fr(R,_).flags|=256),_=Rf(R,_,!1),_!==2){if(Sf&&!H){R.errorRecoveryDisabledLanes|=f,Rs|=f,u=4;break e}f=jn,jn=u,f!==null&&(jn===null?jn=f:jn.push.apply(jn,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){fr(e,0),Xa(e,n,0,!0);break}e:{switch(r=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Xa(r,n,ai,!Ha);break e;case 2:jn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=zl+300-Ce(),10<u)){if(Xa(r,n,ai,!Ha),pe(r,0,!0)!==0)break e;ua=n,r.timeoutHandle=sg(w0.bind(null,r,a,jn,Hl,Mf,n,ai,Rs,cr,Ha,f,"Throttled",-0,0),u);break e}w0(r,a,jn,Hl,Mf,n,ai,Rs,cr,Ha,f,null,-0,0)}}break}while(!0);zi(e)}function w0(e,n,a,r,u,f,_,R,H,ee,he,xe,se,ce){if(e.timeoutHandle=-1,xe=n.subtreeFlags,xe&8192||(xe&16785408)===16785408){xe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zi},y0(n,f,xe);var je=(f&62914560)===f?zl-Ce():(f&4194048)===f?T0-Ce():0;if(je=NS(xe,je),je!==null){ua=f,e.cancelPendingCommit=je(F0.bind(null,e,n,f,a,r,u,_,R,H,he,xe,null,se,ce)),Xa(e,f,_,!ee);return}}F0(e,n,f,a,r,u,_,R,H)}function Wv(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!$n(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Xa(e,n,a,r){n&=~yf,n&=~Rs,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var u=n;0<u;){var f=31-Pe(u),_=1<<f;r[f]=-1,u&=~_}a!==0&&Lt(e,a,n)}function Gl(){return(Ot&6)===0?(Ao(0),!1):!0}function Af(){if(vt!==null){if(Ht===0)var e=vt.return;else e=vt,$i=xs=null,Gu(e),tr=null,oo=0,e=vt;for(;e!==null;)r0(e.alternate,e),e=e.return;vt=null}}function fr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,dS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ua=0,Af(),Yt=e,vt=a=Qi(e.current,null),yt=n,Ht=0,ii=null,Ha=!1,lr=ze(e,n),Sf=!1,cr=ai=yf=Rs=Ga=sn=0,jn=bo=null,Mf=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var u=31-Pe(r),f=1<<u;n|=e[u],r&=~f}return ca=n,ll(),a}function N0(e,n){dt=null,U.H=go,n===er||n===gl?(n=Wp(),Ht=3):n===wu?(n=Wp(),Ht=4):Ht=n===af?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ii=n,vt===null&&(sn=1,Nl(e,hi(n,e.current)))}function D0(){var e=ti.current;return e===null?!0:(yt&4194048)===yt?_i===null:(yt&62914560)===yt||(yt&536870912)!==0?e===_i:!1}function U0(){var e=U.H;return U.H=go,e===null?go:e}function L0(){var e=U.A;return U.A=Xv,e}function Vl(){sn=4,Ha||(yt&4194048)!==yt&&ti.current!==null||(lr=!0),(Ga&134217727)===0&&(Rs&134217727)===0||Yt===null||Xa(Yt,yt,ai,!1)}function Rf(e,n,a){var r=Ot;Ot|=2;var u=U0(),f=L0();(Yt!==e||yt!==n)&&(Hl=null,fr(e,n)),n=!1;var _=sn;e:do try{if(Ht!==0&&vt!==null){var R=vt,H=ii;switch(Ht){case 8:Af(),_=6;break e;case 3:case 2:case 9:case 6:ti.current===null&&(n=!0);var ee=Ht;if(Ht=0,ii=null,dr(e,R,H,ee),a&&lr){_=0;break e}break;default:ee=Ht,Ht=0,ii=null,dr(e,R,H,ee)}}qv(),_=sn;break}catch(he){N0(e,he)}while(!0);return n&&e.shellSuspendCounter++,$i=xs=null,Ot=r,U.H=u,U.A=f,vt===null&&(Yt=null,yt=0,ll()),_}function qv(){for(;vt!==null;)O0(vt)}function Yv(e,n){var a=Ot;Ot|=2;var r=U0(),u=L0();Yt!==e||yt!==n?(Hl=null,Bl=Ce()+500,fr(e,n)):lr=ze(e,n);e:do try{if(Ht!==0&&vt!==null){n=vt;var f=ii;t:switch(Ht){case 1:Ht=0,ii=null,dr(e,n,f,1);break;case 2:case 9:if(Xp(f)){Ht=0,ii=null,P0(n);break}n=function(){Ht!==2&&Ht!==9||Yt!==e||(Ht=7),zi(e)},f.then(n,n);break e;case 3:Ht=7;break e;case 4:Ht=5;break e;case 7:Xp(f)?(Ht=0,ii=null,P0(n)):(Ht=0,ii=null,dr(e,n,f,7));break;case 5:var _=null;switch(vt.tag){case 26:_=vt.memoizedState;case 5:case 27:var R=vt;if(_?Sg(_):R.stateNode.complete){Ht=0,ii=null;var H=R.sibling;if(H!==null)vt=H;else{var ee=R.return;ee!==null?(vt=ee,kl(ee)):vt=null}break t}}Ht=0,ii=null,dr(e,n,f,5);break;case 6:Ht=0,ii=null,dr(e,n,f,6);break;case 8:Af(),sn=6;break e;default:throw Error(s(462))}}Zv();break}catch(he){N0(e,he)}while(!0);return $i=xs=null,U.H=r,U.A=u,Ot=a,vt!==null?0:(Yt=null,yt=0,ll(),sn)}function Zv(){for(;vt!==null&&!ut();)O0(vt)}function O0(e){var n=a0(e.alternate,e,ca);e.memoizedProps=e.pendingProps,n===null?kl(e):vt=n}function P0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Jm(a,n,n.pendingProps,n.type,void 0,yt);break;case 11:n=Jm(a,n,n.pendingProps,n.type.render,n.ref,yt);break;case 5:Gu(n);default:r0(a,n),n=vt=Lp(n,ca),n=a0(a,n,ca)}e.memoizedProps=e.pendingProps,n===null?kl(e):vt=n}function dr(e,n,a,r){$i=xs=null,Gu(n),tr=null,oo=0;var u=n.return;try{if(Fv(e,u,n,a,yt)){sn=1,Nl(e,hi(a,e.current)),vt=null;return}}catch(f){if(u!==null)throw vt=u,f;sn=1,Nl(e,hi(a,e.current)),vt=null;return}n.flags&32768?(Et||r===1?e=!0:lr||(yt&536870912)!==0?e=!1:(Ha=e=!0,(r===2||r===9||r===3||r===6)&&(r=ti.current,r!==null&&r.tag===13&&(r.flags|=16384))),I0(n,e)):kl(n)}function kl(e){var n=e;do{if((n.flags&32768)!==0){I0(n,Ha);return}e=n.return;var a=Hv(n.alternate,n,ca);if(a!==null){vt=a;return}if(n=n.sibling,n!==null){vt=n;return}vt=n=e}while(n!==null);sn===0&&(sn=5)}function I0(e,n){do{var a=Gv(e.alternate,e);if(a!==null){a.flags&=32767,vt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){vt=e;return}vt=e=a}while(e!==null);sn=6,vt=null}function F0(e,n,a,r,u,f,_,R,H){e.cancelPendingCommit=null;do Xl();while(xn!==0);if((Ot&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=pu,nn(e,a,f,_,R,H),e===Yt&&(vt=Yt=null,yt=0),ur=n,ka=e,ua=a,Ef=f,bf=u,A0=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,$v(J,function(){return V0(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=U.T,U.T=null,u=B.p,B.p=2,_=Ot,Ot|=4;try{Vv(e,n,a)}finally{Ot=_,B.p=u,U.T=r}}xn=1,z0(),B0(),H0()}}function z0(){if(xn===1){xn=0;var e=ka,n=ur,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=U.T,U.T=null;var r=B.p;B.p=2;var u=Ot;Ot|=4;try{x0(n,e);var f=Bf,_=bp(e.containerInfo),R=f.focusedElem,H=f.selectionRange;if(_!==R&&R&&R.ownerDocument&&Ep(R.ownerDocument.documentElement,R)){if(H!==null&&cu(R)){var ee=H.start,he=H.end;if(he===void 0&&(he=ee),"selectionStart"in R)R.selectionStart=ee,R.selectionEnd=Math.min(he,R.value.length);else{var xe=R.ownerDocument||document,se=xe&&xe.defaultView||window;if(se.getSelection){var ce=se.getSelection(),je=R.textContent.length,tt=Math.min(H.start,je),Wt=H.end===void 0?tt:Math.min(H.end,je);!ce.extend&&tt>Wt&&(_=Wt,Wt=tt,tt=_);var K=Mp(R,tt),j=Mp(R,Wt);if(K&&j&&(ce.rangeCount!==1||ce.anchorNode!==K.node||ce.anchorOffset!==K.offset||ce.focusNode!==j.node||ce.focusOffset!==j.offset)){var $=xe.createRange();$.setStart(K.node,K.offset),ce.removeAllRanges(),tt>Wt?(ce.addRange($),ce.extend(j.node,j.offset)):($.setEnd(j.node,j.offset),ce.addRange($))}}}}for(xe=[],ce=R;ce=ce.parentNode;)ce.nodeType===1&&xe.push({element:ce,left:ce.scrollLeft,top:ce.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<xe.length;R++){var ge=xe[R];ge.element.scrollLeft=ge.left,ge.element.scrollTop=ge.top}}nc=!!zf,Bf=zf=null}finally{Ot=u,B.p=r,U.T=a}}e.current=n,xn=2}}function B0(){if(xn===2){xn=0;var e=ka,n=ur,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=U.T,U.T=null;var r=B.p;B.p=2;var u=Ot;Ot|=4;try{h0(e,n.alternate,n)}finally{Ot=u,B.p=r,U.T=a}}xn=3}}function H0(){if(xn===4||xn===3){xn=0,kt();var e=ka,n=ur,a=ua,r=A0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,ur=ka=null,G0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Va=null),kr(a),n=n.stateNode,de&&typeof de.onCommitFiberRoot=="function")try{de.onCommitFiberRoot(fe,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=U.T,u=B.p,B.p=2,U.T=null;try{for(var f=e.onRecoverableError,_=0;_<r.length;_++){var R=r[_];f(R.value,{componentStack:R.stack})}}finally{U.T=n,B.p=u}}(ua&3)!==0&&Xl(),zi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Tf?To++:(To=0,Tf=e):To=0,Ao(0)}}function G0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,so(n)))}function Xl(){return z0(),B0(),H0(),V0()}function V0(){if(xn!==5)return!1;var e=ka,n=Ef;Ef=0;var a=kr(ua),r=U.T,u=B.p;try{B.p=32>a?32:a,U.T=null,a=bf,bf=null;var f=ka,_=ua;if(xn=0,ur=ka=null,ua=0,(Ot&6)!==0)throw Error(s(331));var R=Ot;if(Ot|=4,E0(f.current),S0(f,f.current,_,a),Ot=R,Ao(0,!1),de&&typeof de.onPostCommitFiberRoot=="function")try{de.onPostCommitFiberRoot(fe,f)}catch{}return!0}finally{B.p=u,U.T=r,G0(e,n)}}function k0(e,n,a){n=hi(a,n),n=nf(e.stateNode,n,2),e=Ia(e,n,2),e!==null&&(nt(e,2),zi(e))}function Gt(e,n,a){if(e.tag===3)k0(e,e,a);else for(;n!==null;){if(n.tag===3){k0(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Va===null||!Va.has(r))){e=hi(a,e),a=Xm(2),r=Ia(n,a,2),r!==null&&(jm(a,r,n,e),nt(r,2),zi(r));break}}n=n.return}}function Cf(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new jv;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(Sf=!0,u.add(a),e=Kv.bind(null,e,n,a),n.then(e,e))}function Kv(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Yt===e&&(yt&a)===a&&(sn===4||sn===3&&(yt&62914560)===yt&&300>Ce()-zl?(Ot&2)===0&&fr(e,0):yf|=a,cr===yt&&(cr=0)),zi(e)}function X0(e,n){n===0&&(n=Me()),e=ms(e,n),e!==null&&(nt(e,n),zi(e))}function Qv(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),X0(e,a)}function Jv(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),X0(e,a)}function $v(e,n){return V(e,n)}var jl=null,hr=null,wf=!1,Wl=!1,Nf=!1,ja=0;function zi(e){e!==hr&&e.next===null&&(hr===null?jl=hr=e:hr=hr.next=e),Wl=!0,wf||(wf=!0,tS())}function Ao(e,n){if(!Nf&&Wl){Nf=!0;do for(var a=!1,r=jl;r!==null;){if(e!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var _=r.suspendedLanes,R=r.pingedLanes;f=(1<<31-Pe(42|e)+1)-1,f&=u&~(_&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Y0(r,f))}else f=yt,f=pe(r,r===Yt?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||ze(r,f)||(a=!0,Y0(r,f));r=r.next}while(a);Nf=!1}}function eS(){j0()}function j0(){Wl=wf=!1;var e=0;ja!==0&&fS()&&(e=ja);for(var n=Ce(),a=null,r=jl;r!==null;){var u=r.next,f=W0(r,n);f===0?(r.next=null,a===null?jl=u:a.next=u,u===null&&(hr=a)):(a=r,(e!==0||(f&3)!==0)&&(Wl=!0)),r=u}xn!==0&&xn!==5||Ao(e),ja!==0&&(ja=0)}function W0(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var _=31-Pe(f),R=1<<_,H=u[_];H===-1?((R&a)===0||(R&r)!==0)&&(u[_]=Ue(R,n)):H<=n&&(e.expiredLanes|=R),f&=~R}if(n=Yt,a=yt,a=pe(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(Ht===2||Ht===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ke(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ze(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&Ke(r),kr(a)){case 2:case 8:a=E;break;case 32:a=J;break;case 268435456:a=Ee;break;default:a=J}return r=q0.bind(null,e),a=V(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&Ke(r),e.callbackPriority=2,e.callbackNode=null,2}function q0(e,n){if(xn!==0&&xn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Xl()&&e.callbackNode!==a)return null;var r=yt;return r=pe(e,e===Yt?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(C0(e,r,n),W0(e,Ce()),e.callbackNode!=null&&e.callbackNode===a?q0.bind(null,e):null)}function Y0(e,n){if(Xl())return null;C0(e,n,!0)}function tS(){hS(function(){(Ot&6)!==0?V(w,eS):j0()})}function Df(){if(ja===0){var e=Js;e===0&&(e=st,st<<=1,(st&261888)===0&&(st=256)),ja=e}return ja}function Z0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:fs(""+e)}function K0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function nS(e,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=Z0((u[En]||null).action),_=r.submitter;_&&(n=(n=_[En]||null)?Z0(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var R=new al("action","action",null,r,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ja!==0){var H=_?K0(u,_):new FormData(u);Ku(a,{pending:!0,data:H,method:u.method,action:f},null,H)}}else typeof f=="function"&&(R.preventDefault(),H=_?K0(u,_):new FormData(u),Ku(a,{pending:!0,data:H,method:u.method,action:f},f,H))},currentTarget:u}]})}}for(var Uf=0;Uf<hu.length;Uf++){var Lf=hu[Uf],iS=Lf.toLowerCase(),aS=Lf[0].toUpperCase()+Lf.slice(1);Ti(iS,"on"+aS)}Ti(Rp,"onAnimationEnd"),Ti(Cp,"onAnimationIteration"),Ti(wp,"onAnimationStart"),Ti("dblclick","onDoubleClick"),Ti("focusin","onFocus"),Ti("focusout","onBlur"),Ti(Sv,"onTransitionRun"),Ti(yv,"onTransitionStart"),Ti(Mv,"onTransitionCancel"),Ti(Np,"onTransitionEnd"),ae("onMouseEnter",["mouseout","mouseover"]),ae("onMouseLeave",["mouseout","mouseover"]),ae("onPointerEnter",["pointerout","pointerover"]),ae("onPointerLeave",["pointerout","pointerover"]),q("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),q("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),q("onBeforeInput",["compositionend","keypress","textInput","paste"]),q("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ro));function Q0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],u=r.event;r=r.listeners;e:{var f=void 0;if(n)for(var _=r.length-1;0<=_;_--){var R=r[_],H=R.instance,ee=R.currentTarget;if(R=R.listener,H!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=ee;try{f(u)}catch(he){ol(he)}u.currentTarget=null,f=H}else for(_=0;_<r.length;_++){if(R=r[_],H=R.instance,ee=R.currentTarget,R=R.listener,H!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=ee;try{f(u)}catch(he){ol(he)}u.currentTarget=null,f=H}}}}function St(e,n){var a=n[Ea];a===void 0&&(a=n[Ea]=new Set);var r=e+"__bubble";a.has(r)||(J0(n,e,2,!1),a.add(r))}function Of(e,n,a){var r=0;n&&(r|=4),J0(a,e,r,n)}var ql="_reactListening"+Math.random().toString(36).slice(2);function Pf(e){if(!e[ql]){e[ql]=!0,el.forEach(function(a){a!=="selectionchange"&&(sS.has(a)||Of(a,!1,e),Of(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ql]||(n[ql]=!0,Of("selectionchange",!1,n))}}function J0(e,n,a,r){switch(Rg(n)){case 2:var u=LS;break;case 8:u=OS;break;default:u=Kf}a=u.bind(null,n,a,e),u=void 0,!eu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function If(e,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var _=r.tag;if(_===3||_===4){var R=r.stateNode.containerInfo;if(R===u)break;if(_===4)for(_=r.return;_!==null;){var H=_.tag;if((H===3||H===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;R!==null;){if(_=Ta(R),_===null)return;if(H=_.tag,H===5||H===6||H===26||H===27){r=f=_;continue e}R=R.parentNode}}r=r.return}ip(function(){var ee=f,he=Jc(a),xe=[];e:{var se=Dp.get(e);if(se!==void 0){var ce=al,je=e;switch(e){case"keypress":if(nl(a)===0)break e;case"keydown":case"keyup":ce=Jx;break;case"focusin":je="focus",ce=au;break;case"focusout":je="blur",ce=au;break;case"beforeblur":case"afterblur":ce=au;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=rp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=Hx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=tv;break;case Rp:case Cp:case wp:ce=kx;break;case Np:ce=iv;break;case"scroll":case"scrollend":ce=zx;break;case"wheel":ce=sv;break;case"copy":case"cut":case"paste":ce=jx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=lp;break;case"toggle":case"beforetoggle":ce=ov}var tt=(n&4)!==0,Wt=!tt&&(e==="scroll"||e==="scrollend"),K=tt?se!==null?se+"Capture":null:se;tt=[];for(var j=ee,$;j!==null;){var ge=j;if($=ge.stateNode,ge=ge.tag,ge!==5&&ge!==26&&ge!==27||$===null||K===null||(ge=Yr(j,K),ge!=null&&tt.push(Co(j,ge,$))),Wt)break;j=j.return}0<tt.length&&(se=new ce(se,je,null,a,he),xe.push({event:se,listeners:tt}))}}if((n&7)===0){e:{if(se=e==="mouseover"||e==="pointerover",ce=e==="mouseout"||e==="pointerout",se&&a!==Qc&&(je=a.relatedTarget||a.fromElement)&&(Ta(je)||je[Yi]))break e;if((ce||se)&&(se=he.window===he?he:(se=he.ownerDocument)?se.defaultView||se.parentWindow:window,ce?(je=a.relatedTarget||a.toElement,ce=ee,je=je?Ta(je):null,je!==null&&(Wt=c(je),tt=je.tag,je!==Wt||tt!==5&&tt!==27&&tt!==6)&&(je=null)):(ce=null,je=ee),ce!==je)){if(tt=rp,ge="onMouseLeave",K="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(tt=lp,ge="onPointerLeave",K="onPointerEnter",j="pointer"),Wt=ce==null?se:us(ce),$=je==null?se:us(je),se=new tt(ge,j+"leave",ce,a,he),se.target=Wt,se.relatedTarget=$,ge=null,Ta(he)===ee&&(tt=new tt(K,j+"enter",je,a,he),tt.target=$,tt.relatedTarget=Wt,ge=tt),Wt=ge,ce&&je)t:{for(tt=rS,K=ce,j=je,$=0,ge=K;ge;ge=tt(ge))$++;ge=0;for(var Je=j;Je;Je=tt(Je))ge++;for(;0<$-ge;)K=tt(K),$--;for(;0<ge-$;)j=tt(j),ge--;for(;$--;){if(K===j||j!==null&&K===j.alternate){tt=K;break t}K=tt(K),j=tt(j)}tt=null}else tt=null;ce!==null&&$0(xe,se,ce,tt,!1),je!==null&&Wt!==null&&$0(xe,Wt,je,tt,!0)}}e:{if(se=ee?us(ee):window,ce=se.nodeName&&se.nodeName.toLowerCase(),ce==="select"||ce==="input"&&se.type==="file")var wt=gp;else if(pp(se))if(_p)wt=_v;else{wt=mv;var qe=pv}else ce=se.nodeName,!ce||ce.toLowerCase()!=="input"||se.type!=="checkbox"&&se.type!=="radio"?ee&&It(ee.elementType)&&(wt=gp):wt=gv;if(wt&&(wt=wt(e,ee))){mp(xe,wt,a,he);break e}qe&&qe(e,se,ee),e==="focusout"&&ee&&se.type==="number"&&ee.memoizedProps.value!=null&&xt(se,"number",se.value)}switch(qe=ee?us(ee):window,e){case"focusin":(pp(qe)||qe.contentEditable==="true")&&(Xs=qe,uu=ee,no=null);break;case"focusout":no=uu=Xs=null;break;case"mousedown":fu=!0;break;case"contextmenu":case"mouseup":case"dragend":fu=!1,Tp(xe,a,he);break;case"selectionchange":if(vv)break;case"keydown":case"keyup":Tp(xe,a,he)}var ht;if(ru)e:{switch(e){case"compositionstart":var Mt="onCompositionStart";break e;case"compositionend":Mt="onCompositionEnd";break e;case"compositionupdate":Mt="onCompositionUpdate";break e}Mt=void 0}else ks?dp(e,a)&&(Mt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Mt="onCompositionStart");Mt&&(cp&&a.locale!=="ko"&&(ks||Mt!=="onCompositionStart"?Mt==="onCompositionEnd"&&ks&&(ht=ap()):(wa=he,tu="value"in wa?wa.value:wa.textContent,ks=!0)),qe=Yl(ee,Mt),0<qe.length&&(Mt=new op(Mt,e,null,a,he),xe.push({event:Mt,listeners:qe}),ht?Mt.data=ht:(ht=hp(a),ht!==null&&(Mt.data=ht)))),(ht=cv?uv(e,a):fv(e,a))&&(Mt=Yl(ee,"onBeforeInput"),0<Mt.length&&(qe=new op("onBeforeInput","beforeinput",null,a,he),xe.push({event:qe,listeners:Mt}),qe.data=ht)),nS(xe,e,ee,a,he)}Q0(xe,n)})}function Co(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Yl(e,n){for(var a=n+"Capture",r=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Yr(e,a),u!=null&&r.unshift(Co(e,u,f)),u=Yr(e,n),u!=null&&r.push(Co(e,u,f))),e.tag===3)return r;e=e.return}return[]}function rS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function $0(e,n,a,r,u){for(var f=n._reactName,_=[];a!==null&&a!==r;){var R=a,H=R.alternate,ee=R.stateNode;if(R=R.tag,H!==null&&H===r)break;R!==5&&R!==26&&R!==27||ee===null||(H=ee,u?(ee=Yr(a,f),ee!=null&&_.unshift(Co(a,ee,H))):u||(ee=Yr(a,f),ee!=null&&_.push(Co(a,ee,H)))),a=a.return}_.length!==0&&e.push({event:n,listeners:_})}var oS=/\r\n?/g,lS=/\u0000|\uFFFD/g;function eg(e){return(typeof e=="string"?e:""+e).replace(oS,`
`).replace(lS,"")}function tg(e,n){return n=eg(n),eg(e)===n}function jt(e,n,a,r,u,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Jn(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Jn(e,""+r);break;case"className":Xe(e,"class",r);break;case"tabIndex":Xe(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Xe(e,a,r);break;case"style":bi(e,r,f);break;case"data":if(n!=="object"){Xe(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=fs(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&jt(e,n,"name",u.name,u,null),jt(e,n,"formEncType",u.formEncType,u,null),jt(e,n,"formMethod",u.formMethod,u,null),jt(e,n,"formTarget",u.formTarget,u,null)):(jt(e,n,"encType",u.encType,u,null),jt(e,n,"method",u.method,u,null),jt(e,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=fs(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Zi);break;case"onScroll":r!=null&&St("scroll",e);break;case"onScrollEnd":r!=null&&St("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=fs(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":St("beforetoggle",e),St("toggle",e),Ie(e,"popover",r);break;case"xlinkActuate":ke(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":ke(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":ke(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":ke(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":ke(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":ke(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":ke(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":ke(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":ke(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Ie(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Oi.get(a)||a,Ie(e,a,r))}}function Ff(e,n,a,r,u,f){switch(a){case"style":bi(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?Jn(e,r):(typeof r=="number"||typeof r=="bigint")&&Jn(e,""+r);break;case"onScroll":r!=null&&St("scroll",e);break;case"onScrollEnd":r!=null&&St("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Zi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[En]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,u);break e}a in e?e[a]=r:r===!0?e.setAttribute(a,""):Ie(e,a,r)}}}function Rn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":St("error",e),St("load",e);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:jt(e,n,f,_,a,null)}}u&&jt(e,n,"srcSet",a.srcSet,a,null),r&&jt(e,n,"src",a.src,a,null);return;case"input":St("invalid",e);var R=f=_=u=null,H=null,ee=null;for(r in a)if(a.hasOwnProperty(r)){var he=a[r];if(he!=null)switch(r){case"name":u=he;break;case"type":_=he;break;case"checked":H=he;break;case"defaultChecked":ee=he;break;case"value":f=he;break;case"defaultValue":R=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(s(137,n));break;default:jt(e,n,r,he,a,null)}}Un(e,f,R,H,ee,_,u,!1);return;case"select":St("invalid",e),r=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":_=R;break;case"multiple":r=R;default:jt(e,n,u,R,a,null)}n=f,a=_,e.multiple=!!r,n!=null?_n(e,!!r,n,!1):a!=null&&_n(e,!!r,a,!0);return;case"textarea":St("invalid",e),f=u=r=null;for(_ in a)if(a.hasOwnProperty(_)&&(R=a[_],R!=null))switch(_){case"value":r=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:jt(e,n,_,R,a,null)}Ei(e,r,u,f);return;case"option":for(H in a)if(a.hasOwnProperty(H)&&(r=a[H],r!=null))switch(H){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:jt(e,n,H,r,a,null)}return;case"dialog":St("beforetoggle",e),St("toggle",e),St("cancel",e),St("close",e);break;case"iframe":case"object":St("load",e);break;case"video":case"audio":for(r=0;r<Ro.length;r++)St(Ro[r],e);break;case"image":St("error",e),St("load",e);break;case"details":St("toggle",e);break;case"embed":case"source":case"link":St("error",e),St("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ee in a)if(a.hasOwnProperty(ee)&&(r=a[ee],r!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:jt(e,n,ee,r,a,null)}return;default:if(It(n)){for(he in a)a.hasOwnProperty(he)&&(r=a[he],r!==void 0&&Ff(e,n,he,r,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(r=a[R],r!=null&&jt(e,n,R,r,a,null))}function cS(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,R=null,H=null,ee=null,he=null;for(ce in a){var xe=a[ce];if(a.hasOwnProperty(ce)&&xe!=null)switch(ce){case"checked":break;case"value":break;case"defaultValue":H=xe;default:r.hasOwnProperty(ce)||jt(e,n,ce,null,r,xe)}}for(var se in r){var ce=r[se];if(xe=a[se],r.hasOwnProperty(se)&&(ce!=null||xe!=null))switch(se){case"type":f=ce;break;case"name":u=ce;break;case"checked":ee=ce;break;case"defaultChecked":he=ce;break;case"value":_=ce;break;case"defaultValue":R=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(s(137,n));break;default:ce!==xe&&jt(e,n,se,ce,r,xe)}}Ge(e,_,R,H,ee,he,f,u);return;case"select":ce=_=R=se=null;for(f in a)if(H=a[f],a.hasOwnProperty(f)&&H!=null)switch(f){case"value":break;case"multiple":ce=H;default:r.hasOwnProperty(f)||jt(e,n,f,null,r,H)}for(u in r)if(f=r[u],H=a[u],r.hasOwnProperty(u)&&(f!=null||H!=null))switch(u){case"value":se=f;break;case"defaultValue":R=f;break;case"multiple":_=f;default:f!==H&&jt(e,n,u,f,r,H)}n=R,a=_,r=ce,se!=null?_n(e,!!a,se,!1):!!r!=!!a&&(n!=null?_n(e,!!a,n,!0):_n(e,!!a,a?[]:"",!1));return;case"textarea":ce=se=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!r.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:jt(e,n,R,null,r,u)}for(_ in r)if(u=r[_],f=a[_],r.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":se=u;break;case"defaultValue":ce=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&jt(e,n,_,u,r,f)}Qn(e,se,ce);return;case"option":for(var je in a)if(se=a[je],a.hasOwnProperty(je)&&se!=null&&!r.hasOwnProperty(je))switch(je){case"selected":e.selected=!1;break;default:jt(e,n,je,null,r,se)}for(H in r)if(se=r[H],ce=a[H],r.hasOwnProperty(H)&&se!==ce&&(se!=null||ce!=null))switch(H){case"selected":e.selected=se&&typeof se!="function"&&typeof se!="symbol";break;default:jt(e,n,H,se,r,ce)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in a)se=a[tt],a.hasOwnProperty(tt)&&se!=null&&!r.hasOwnProperty(tt)&&jt(e,n,tt,null,r,se);for(ee in r)if(se=r[ee],ce=a[ee],r.hasOwnProperty(ee)&&se!==ce&&(se!=null||ce!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(s(137,n));break;default:jt(e,n,ee,se,r,ce)}return;default:if(It(n)){for(var Wt in a)se=a[Wt],a.hasOwnProperty(Wt)&&se!==void 0&&!r.hasOwnProperty(Wt)&&Ff(e,n,Wt,void 0,r,se);for(he in r)se=r[he],ce=a[he],!r.hasOwnProperty(he)||se===ce||se===void 0&&ce===void 0||Ff(e,n,he,se,r,ce);return}}for(var K in a)se=a[K],a.hasOwnProperty(K)&&se!=null&&!r.hasOwnProperty(K)&&jt(e,n,K,null,r,se);for(xe in r)se=r[xe],ce=a[xe],!r.hasOwnProperty(xe)||se===ce||se==null&&ce==null||jt(e,n,xe,se,r,ce)}function ng(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function uS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,_=u.initiatorType,R=u.duration;if(f&&R&&ng(_)){for(_=0,R=u.responseEnd,r+=1;r<a.length;r++){var H=a[r],ee=H.startTime;if(ee>R)break;var he=H.transferSize,xe=H.initiatorType;he&&ng(xe)&&(H=H.responseEnd,_+=he*(H<R?1:(R-ee)/(H-ee)))}if(--r,n+=8*(f+_)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var zf=null,Bf=null;function Zl(e){return e.nodeType===9?e:e.ownerDocument}function ig(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ag(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Hf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Gf=null;function fS(){var e=window.event;return e&&e.type==="popstate"?e===Gf?!1:(Gf=e,!0):(Gf=null,!1)}var sg=typeof setTimeout=="function"?setTimeout:void 0,dS=typeof clearTimeout=="function"?clearTimeout:void 0,rg=typeof Promise=="function"?Promise:void 0,hS=typeof queueMicrotask=="function"?queueMicrotask:typeof rg<"u"?function(e){return rg.resolve(null).then(e).catch(pS)}:sg;function pS(e){setTimeout(function(){throw e})}function Wa(e){return e==="head"}function og(e,n){var a=n,r=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(u),_r(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")wo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,wo(a);for(var f=a.firstChild;f;){var _=f.nextSibling,R=f.nodeName;f[ba]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&wo(e.ownerDocument.body);a=u}while(a);_r(n)}function lg(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function Vf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Vf(a),qr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function mS(e,n,a,r){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[ba])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=xi(e.nextSibling),e===null)break}return null}function gS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=xi(e.nextSibling),e===null))return null;return e}function cg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=xi(e.nextSibling),e===null))return null;return e}function kf(e){return e.data==="$?"||e.data==="$~"}function Xf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function _S(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function xi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var jf=null;function ug(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return xi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function fg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function dg(e,n,a){switch(n=Zl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function wo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);qr(e)}var vi=new Map,hg=new Set;function Kl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var fa=B.d;B.d={f:xS,r:vS,D:SS,C:yS,L:MS,m:ES,X:TS,S:bS,M:AS};function xS(){var e=fa.f(),n=Gl();return e||n}function vS(e){var n=Aa(e);n!==null&&n.tag===5&&n.type==="form"?Nm(n):fa.r(e)}var pr=typeof document>"u"?null:document;function pg(e,n,a){var r=pr;if(r&&typeof n=="string"&&n){var u=zt(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),hg.has(u)||(hg.add(u),e={rel:e,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),Rn(n,"link",e),fn(n),r.head.appendChild(n)))}}function SS(e){fa.D(e),pg("dns-prefetch",e,null)}function yS(e,n){fa.C(e,n),pg("preconnect",e,n)}function MS(e,n,a){fa.L(e,n,a);var r=pr;if(r&&e&&n){var u='link[rel="preload"][as="'+zt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+zt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+zt(a.imageSizes)+'"]')):u+='[href="'+zt(e)+'"]';var f=u;switch(n){case"style":f=mr(e);break;case"script":f=gr(e)}vi.has(f)||(e=S({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),vi.set(f,e),r.querySelector(u)!==null||n==="style"&&r.querySelector(No(f))||n==="script"&&r.querySelector(Do(f))||(n=r.createElement("link"),Rn(n,"link",e),fn(n),r.head.appendChild(n)))}}function ES(e,n){fa.m(e,n);var a=pr;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+zt(r)+'"][href="'+zt(e)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=gr(e)}if(!vi.has(f)&&(e=S({rel:"modulepreload",href:e},n),vi.set(f,e),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Do(f)))return}r=a.createElement("link"),Rn(r,"link",e),fn(r),a.head.appendChild(r)}}}function bS(e,n,a){fa.S(e,n,a);var r=pr;if(r&&e){var u=Ra(r).hoistableStyles,f=mr(e);n=n||"default";var _=u.get(f);if(!_){var R={loading:0,preload:null};if(_=r.querySelector(No(f)))R.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":n},a),(a=vi.get(f))&&Wf(e,a);var H=_=r.createElement("link");fn(H),Rn(H,"link",e),H._p=new Promise(function(ee,he){H.onload=ee,H.onerror=he}),H.addEventListener("load",function(){R.loading|=1}),H.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Ql(_,n,r)}_={type:"stylesheet",instance:_,count:1,state:R},u.set(f,_)}}}function TS(e,n){fa.X(e,n);var a=pr;if(a&&e){var r=Ra(a).hoistableScripts,u=gr(e),f=r.get(u);f||(f=a.querySelector(Do(u)),f||(e=S({src:e,async:!0},n),(n=vi.get(u))&&qf(e,n),f=a.createElement("script"),fn(f),Rn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function AS(e,n){fa.M(e,n);var a=pr;if(a&&e){var r=Ra(a).hoistableScripts,u=gr(e),f=r.get(u);f||(f=a.querySelector(Do(u)),f||(e=S({src:e,async:!0,type:"module"},n),(n=vi.get(u))&&qf(e,n),f=a.createElement("script"),fn(f),Rn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function mg(e,n,a,r){var u=(u=re.current)?Kl(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=mr(a.href),a=Ra(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=mr(a.href);var f=Ra(u).hoistableStyles,_=f.get(e);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,_),(f=u.querySelector(No(e)))&&!f._p&&(_.instance=f,_.state.loading=5),vi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},vi.set(e,a),f||RS(u,e,a,_.state))),n&&r===null)throw Error(s(528,""));return _}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=gr(a),a=Ra(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function mr(e){return'href="'+zt(e)+'"'}function No(e){return'link[rel="stylesheet"]['+e+"]"}function gg(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function RS(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Rn(n,"link",a),fn(n),e.head.appendChild(n))}function gr(e){return'[src="'+zt(e)+'"]'}function Do(e){return"script[async]"+e}function _g(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+zt(a.href)+'"]');if(r)return n.instance=r,fn(r),r;var u=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),fn(r),Rn(r,"style",u),Ql(r,a.precedence,e),n.instance=r;case"stylesheet":u=mr(a.href);var f=e.querySelector(No(u));if(f)return n.state.loading|=4,n.instance=f,fn(f),f;r=gg(a),(u=vi.get(u))&&Wf(r,u),f=(e.ownerDocument||e).createElement("link"),fn(f);var _=f;return _._p=new Promise(function(R,H){_.onload=R,_.onerror=H}),Rn(f,"link",r),n.state.loading|=4,Ql(f,a.precedence,e),n.instance=f;case"script":return f=gr(a.src),(u=e.querySelector(Do(f)))?(n.instance=u,fn(u),u):(r=a,(u=vi.get(f))&&(r=S({},a),qf(r,u)),e=e.ownerDocument||e,u=e.createElement("script"),fn(u),Rn(u,"link",r),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Ql(r,a.precedence,e));return n.instance}function Ql(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,_=0;_<r.length;_++){var R=r[_];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Wf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function qf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Jl=null;function xg(e,n,a){if(Jl===null){var r=new Map,u=Jl=new Map;u.set(a,r)}else u=Jl,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[ba]||f[ln]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=e+_;var R=r.get(_);R?R.push(f):r.set(_,[f])}}return r}function vg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function CS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Sg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function wS(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=mr(r.href),f=n.querySelector(No(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=$l.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,fn(f);return}f=n.ownerDocument||n,r=gg(r),(u=vi.get(u))&&Wf(r,u),f=f.createElement("link"),fn(f);var _=f;_._p=new Promise(function(R,H){_.onload=R,_.onerror=H}),Rn(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=$l.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Yf=0;function NS(e,n){return e.stylesheets&&e.count===0&&tc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&tc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Yf===0&&(Yf=62500*uS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&tc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Yf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function $l(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)tc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ec=null;function tc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ec=new Map,n.forEach(DS,e),ec=null,$l.call(e))}function DS(e,n){if(!(n.state.loading&4)){var a=ec.get(e);if(a)var r=a.get(null);else{a=new Map,ec.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),r=_)}r&&a.set(null,r)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||r,f===r&&a.set(null,u),a.set(_,u),this.count++,r=$l.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Uo={$$typeof:F,Provider:null,Consumer:null,_currentValue:oe,_currentValue2:oe,_threadCount:0};function US(e,n,a,r,u,f,_,R,H){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=We(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=We(0),this.hiddenUpdates=We(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function yg(e,n,a,r,u,f,_,R,H,ee,he,xe){return e=new US(e,n,a,_,H,ee,he,xe,R),n=1,f===!0&&(n|=24),f=ei(3,null,null,n),e.current=f,f.stateNode=e,n=Au(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Nu(f),e}function Mg(e){return e?(e=qs,e):qs}function Eg(e,n,a,r,u,f){u=Mg(u),r.context===null?r.context=u:r.pendingContext=u,r=Pa(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Ia(e,r,n),a!==null&&(Wn(a,e,n),co(a,e,n))}function bg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Zf(e,n){bg(e,n),(e=e.alternate)&&bg(e,n)}function Tg(e){if(e.tag===13||e.tag===31){var n=ms(e,67108864);n!==null&&Wn(n,e,67108864),Zf(e,67108864)}}function Ag(e){if(e.tag===13||e.tag===31){var n=si();n=cs(n);var a=ms(e,n);a!==null&&Wn(a,e,n),Zf(e,n)}}var nc=!0;function LS(e,n,a,r){var u=U.T;U.T=null;var f=B.p;try{B.p=2,Kf(e,n,a,r)}finally{B.p=f,U.T=u}}function OS(e,n,a,r){var u=U.T;U.T=null;var f=B.p;try{B.p=8,Kf(e,n,a,r)}finally{B.p=f,U.T=u}}function Kf(e,n,a,r){if(nc){var u=Qf(r);if(u===null)If(e,n,r,ic,a),Cg(e,r);else if(IS(u,e,n,a,r))r.stopPropagation();else if(Cg(e,r),n&4&&-1<PS.indexOf(e)){for(;u!==null;){var f=Aa(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Ae(f.pendingLanes);if(_!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;_;){var H=1<<31-Pe(_);R.entanglements[1]|=H,_&=~H}zi(f),(Ot&6)===0&&(Bl=Ce()+500,Ao(0))}}break;case 31:case 13:R=ms(f,2),R!==null&&Wn(R,f,2),Gl(),Zf(f,2)}if(f=Qf(r),f===null&&If(e,n,r,ic,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else If(e,n,r,null,a)}}function Qf(e){return e=Jc(e),Jf(e)}var ic=null;function Jf(e){if(ic=null,e=Ta(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=p(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ic=e,null}function Rg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Jt()){case w:return 2;case E:return 8;case J:case _e:return 32;case Ee:return 268435456;default:return 32}default:return 32}}var $f=!1,qa=null,Ya=null,Za=null,Lo=new Map,Oo=new Map,Ka=[],PS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Cg(e,n){switch(e){case"focusin":case"focusout":qa=null;break;case"dragenter":case"dragleave":Ya=null;break;case"mouseover":case"mouseout":Za=null;break;case"pointerover":case"pointerout":Lo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oo.delete(n.pointerId)}}function Po(e,n,a,r,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Aa(n),n!==null&&Tg(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function IS(e,n,a,r,u){switch(n){case"focusin":return qa=Po(qa,e,n,a,r,u),!0;case"dragenter":return Ya=Po(Ya,e,n,a,r,u),!0;case"mouseover":return Za=Po(Za,e,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return Lo.set(f,Po(Lo.get(f)||null,e,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,Oo.set(f,Po(Oo.get(f)||null,e,n,a,r,u)),!0}return!1}function wg(e){var n=Ta(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,jr(e.priority,function(){Ag(a)});return}}else if(n===31){if(n=p(a),n!==null){e.blockedOn=n,jr(e.priority,function(){Ag(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ac(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Qf(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);Qc=r,a.target.dispatchEvent(r),Qc=null}else return n=Aa(a),n!==null&&Tg(n),e.blockedOn=a,!1;n.shift()}return!0}function Ng(e,n,a){ac(e)&&a.delete(n)}function FS(){$f=!1,qa!==null&&ac(qa)&&(qa=null),Ya!==null&&ac(Ya)&&(Ya=null),Za!==null&&ac(Za)&&(Za=null),Lo.forEach(Ng),Oo.forEach(Ng)}function sc(e,n){e.blockedOn===n&&(e.blockedOn=null,$f||($f=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,FS)))}var rc=null;function Dg(e){rc!==e&&(rc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){rc===e&&(rc=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],u=e[n+2];if(typeof r!="function"){if(Jf(r||a)===null)continue;break}var f=Aa(a);f!==null&&(e.splice(n,3),n-=3,Ku(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function _r(e){function n(H){return sc(H,e)}qa!==null&&sc(qa,e),Ya!==null&&sc(Ya,e),Za!==null&&sc(Za,e),Lo.forEach(n),Oo.forEach(n);for(var a=0;a<Ka.length;a++){var r=Ka[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ka.length&&(a=Ka[0],a.blockedOn===null);)wg(a),a.blockedOn===null&&Ka.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],_=u[En]||null;if(typeof f=="function")_||Dg(a);else if(_){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[En]||null)R=_.formAction;else if(Jf(u)!==null)continue}else R=_.action;typeof R=="function"?a[r+1]=R:(a.splice(r,3),r-=3),Dg(a)}}}function Ug(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function ed(e){this._internalRoot=e}oc.prototype.render=ed.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=si();Eg(a,r,e,n,null,null)},oc.prototype.unmount=ed.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Eg(e.current,2,null,e,null,null),Gl(),n[Yi]=null}};function oc(e){this._internalRoot=e}oc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Xr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ka.length&&n!==0&&n<Ka[a].priority;a++);Ka.splice(a,0,e),a===0&&wg(e)}};var Lg=t.version;if(Lg!=="19.2.7")throw Error(s(527,Lg,"19.2.7"));B.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=h(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var zS={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lc.isDisabled&&lc.supportsFiber)try{fe=lc.inject(zS),de=lc}catch{}}return Fo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",u=Hm,f=Gm,_=Vm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=yg(e,1,!1,null,null,a,r,null,u,f,_,Ug),e[Yi]=n.current,Pf(e),new ed(n)},Fo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,u="",f=Hm,_=Gm,R=Vm,H=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=yg(e,1,!0,n,a??null,r,u,H,f,_,R,Ug),n.context=Mg(null),a=n.current,r=si(),r=cs(r),u=Pa(r),u.callback=null,Ia(a,u,r),a=r,n.current.lanes=a,nt(n,a),zi(n),e[Yi]=n.current,Pf(e),new oc(n)},Fo.version="19.2.7",Fo}var kg;function YS(){if(kg)return id.exports;kg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),id.exports=qS(),id.exports}var ZS=YS();/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),QS=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,s)=>s?s.toUpperCase():i.toLowerCase()),Xg=o=>{const t=QS(o);return t.charAt(0).toUpperCase()+t.slice(1)},q_=(...o)=>o.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim(),JS=o=>{for(const t in o)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $S={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=Cn.forwardRef(({color:o="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:d,...p},m)=>Cn.createElement("svg",{ref:m,...$S,width:t,height:t,stroke:o,strokeWidth:s?Number(i)*24/Number(t):i,className:q_("lucide",l),...!c&&!JS(p)&&{"aria-hidden":"true"},...p},[...d.map(([h,v])=>Cn.createElement(h,v)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=(o,t)=>{const i=Cn.forwardRef(({className:s,...l},c)=>Cn.createElement(ey,{ref:c,iconNode:t,className:q_(`lucide-${KS(Xg(o))}`,`lucide-${o}`,s),...l}));return i.displayName=Xg(o),i};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],ny=Zn("activity",ty);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],ay=Zn("award",iy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=[["path",{d:"M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z",key:"cvxqlc"}],["path",{d:"M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z",key:"1ostrc"}],["path",{d:"M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12",key:"hqx58h"}],["path",{d:"M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z",key:"eykp1o"}]],cc=Zn("cherry",sy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Y_=Zn("chevron-right",ry);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],ly=Zn("cpu",oy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]],uy=Zn("droplet",cy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],dy=Zn("flame",fy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],jg=Zn("layers",hy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],my=Zn("shield-check",py);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Z_=Zn("sparkles",gy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],xy=Zn("terminal",_y);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Sy=Zn("volume-2",vy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],My=Zn("volume-x",yy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],by=Zn("zap",Ey);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zh="184",Ty=0,Wg=1,Ay=2,Oc=1,Ry=2,jo=3,os=0,Yn=1,_a=2,va=0,Lr=1,kd=2,qg=3,Yg=4,Cy=5,Ls=100,wy=101,Ny=102,Dy=103,Uy=104,Ly=200,Oy=201,Py=202,Iy=203,Xd=204,jd=205,Fy=206,zy=207,By=208,Hy=209,Gy=210,Vy=211,ky=212,Xy=213,jy=214,Wd=0,qd=1,Yd=2,Pr=3,Zd=4,Kd=5,Qd=6,Jd=7,K_=0,Wy=1,qy=2,Xi=0,Q_=1,J_=2,$_=3,ex=4,tx=5,nx=6,ix=7,ax=300,Fs=301,Ir=302,od=303,ld=304,Wc=306,$d=1e3,xa=1001,eh=1002,wn=1003,Yy=1004,uc=1005,Fn=1006,cd=1007,Ps=1008,ui=1009,sx=1010,rx=1011,Yo=1012,Bh=1013,Wi=1014,Vi=1015,ya=1016,Hh=1017,Gh=1018,Zo=1020,ox=35902,lx=35899,cx=1021,ux=1022,Ui=1023,Ma=1026,Is=1027,fx=1028,Vh=1029,zs=1030,kh=1031,Xh=1033,Pc=33776,Ic=33777,Fc=33778,zc=33779,th=35840,nh=35841,ih=35842,ah=35843,sh=36196,rh=37492,oh=37496,lh=37488,ch=37489,Hc=37490,uh=37491,fh=37808,dh=37809,hh=37810,ph=37811,mh=37812,gh=37813,_h=37814,xh=37815,vh=37816,Sh=37817,yh=37818,Mh=37819,Eh=37820,bh=37821,Th=36492,Ah=36494,Rh=36495,Ch=36283,wh=36284,Gc=36285,Nh=36286,Zy=3200,Dh=0,Ky=1,ss="",li="srgb",Vc="srgb-linear",kc="linear",Vt="srgb",xr=7680,Zg=519,Qy=512,Jy=513,$y=514,jh=515,eM=516,tM=517,Wh=518,nM=519,Kg=35044,Qg="300 es",ki=2e3,Ko=2001;function iM(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Xc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function aM(){const o=Xc("canvas");return o.style.display="block",o}const Jg={};function $g(...o){const t="THREE."+o.shift();console.log(t,...o)}function dx(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function it(...o){o=dx(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...o)}}function At(...o){o=dx(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...o)}}function Uh(...o){const t=o.join(" ");t in Jg||(Jg[t]=!0,it(...o))}function sM(o,t,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const rM={[Wd]:qd,[Yd]:Qd,[Zd]:Jd,[Pr]:Kd,[qd]:Wd,[Qd]:Yd,[Jd]:Zd,[Kd]:Pr};class Bs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,t);t.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ud=Math.PI/180,Lh=180/Math.PI;function Qo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(On[o&255]+On[o>>8&255]+On[o>>16&255]+On[o>>24&255]+"-"+On[t&255]+On[t>>8&255]+"-"+On[t>>16&15|64]+On[t>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]).toLowerCase()}function Tt(o,t,i){return Math.max(t,Math.min(i,o))}function oM(o,t){return(o%t+t)%t}function fd(o,t,i){return(1-i)*o+i*t}function zo(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function qn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Qh=class Qh{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Tt(this.x,t.x,i.x),this.y=Tt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Tt(this.x,t,i),this.y=Tt(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Tt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Tt(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,d=this.y-t.y;return this.x=c*s-d*l+t.x,this.y=c*l+d*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Qh.prototype.isVector2=!0;let Ut=Qh;class Br{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,d,p){let m=s[l+0],h=s[l+1],v=s[l+2],S=s[l+3],g=c[d+0],x=c[d+1],T=c[d+2],N=c[d+3];if(S!==N||m!==g||h!==x||v!==T){let M=m*g+h*x+v*T+S*N;M<0&&(g=-g,x=-x,T=-T,N=-N,M=-M);let y=1-p;if(M<.9995){const D=Math.acos(M),F=Math.sin(D);y=Math.sin(y*D)/F,p=Math.sin(p*D)/F,m=m*y+g*p,h=h*y+x*p,v=v*y+T*p,S=S*y+N*p}else{m=m*y+g*p,h=h*y+x*p,v=v*y+T*p,S=S*y+N*p;const D=1/Math.sqrt(m*m+h*h+v*v+S*S);m*=D,h*=D,v*=D,S*=D}}t[i]=m,t[i+1]=h,t[i+2]=v,t[i+3]=S}static multiplyQuaternionsFlat(t,i,s,l,c,d){const p=s[l],m=s[l+1],h=s[l+2],v=s[l+3],S=c[d],g=c[d+1],x=c[d+2],T=c[d+3];return t[i]=p*T+v*S+m*x-h*g,t[i+1]=m*T+v*g+h*S-p*x,t[i+2]=h*T+v*x+p*g-m*S,t[i+3]=v*T-p*S-m*g-h*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,d=t._order,p=Math.cos,m=Math.sin,h=p(s/2),v=p(l/2),S=p(c/2),g=m(s/2),x=m(l/2),T=m(c/2);switch(d){case"XYZ":this._x=g*v*S+h*x*T,this._y=h*x*S-g*v*T,this._z=h*v*T+g*x*S,this._w=h*v*S-g*x*T;break;case"YXZ":this._x=g*v*S+h*x*T,this._y=h*x*S-g*v*T,this._z=h*v*T-g*x*S,this._w=h*v*S+g*x*T;break;case"ZXY":this._x=g*v*S-h*x*T,this._y=h*x*S+g*v*T,this._z=h*v*T+g*x*S,this._w=h*v*S-g*x*T;break;case"ZYX":this._x=g*v*S-h*x*T,this._y=h*x*S+g*v*T,this._z=h*v*T-g*x*S,this._w=h*v*S+g*x*T;break;case"YZX":this._x=g*v*S+h*x*T,this._y=h*x*S+g*v*T,this._z=h*v*T-g*x*S,this._w=h*v*S-g*x*T;break;case"XZY":this._x=g*v*S-h*x*T,this._y=h*x*S-g*v*T,this._z=h*v*T+g*x*S,this._w=h*v*S+g*x*T;break;default:it("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],d=i[1],p=i[5],m=i[9],h=i[2],v=i[6],S=i[10],g=s+p+S;if(g>0){const x=.5/Math.sqrt(g+1);this._w=.25/x,this._x=(v-m)*x,this._y=(c-h)*x,this._z=(d-l)*x}else if(s>p&&s>S){const x=2*Math.sqrt(1+s-p-S);this._w=(v-m)/x,this._x=.25*x,this._y=(l+d)/x,this._z=(c+h)/x}else if(p>S){const x=2*Math.sqrt(1+p-s-S);this._w=(c-h)/x,this._x=(l+d)/x,this._y=.25*x,this._z=(m+v)/x}else{const x=2*Math.sqrt(1+S-s-p);this._w=(d-l)/x,this._x=(c+h)/x,this._y=(m+v)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Tt(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,d=t._w,p=i._x,m=i._y,h=i._z,v=i._w;return this._x=s*v+d*p+l*h-c*m,this._y=l*v+d*m+c*p-s*h,this._z=c*v+d*h+s*m-l*p,this._w=d*v-s*p-l*m-c*h,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,d=t._w,p=this.dot(t);p<0&&(s=-s,l=-l,c=-c,d=-d,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),v=Math.sin(h);m=Math.sin(m*h)/v,i=Math.sin(i*h)/v,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Jh=class Jh{constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(e_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(e_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,d=t.y,p=t.z,m=t.w,h=2*(d*l-p*s),v=2*(p*i-c*l),S=2*(c*s-d*i);return this.x=i+m*h+d*S-p*v,this.y=s+m*v+p*h-c*S,this.z=l+m*S+c*v-d*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Tt(this.x,t.x,i.x),this.y=Tt(this.y,t.y,i.y),this.z=Tt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Tt(this.x,t,i),this.y=Tt(this.y,t,i),this.z=Tt(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Tt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,d=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*d-s*m,this.z=s*p-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return dd.copy(this).projectOnVector(t),this.sub(dd)}reflect(t){return this.sub(dd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Tt(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Jh.prototype.isVector3=!0;let ie=Jh;const dd=new ie,e_=new Br,$h=class $h{constructor(t,i,s,l,c,d,p,m,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,p,m,h)}set(t,i,s,l,c,d,p,m,h){const v=this.elements;return v[0]=t,v[1]=l,v[2]=p,v[3]=i,v[4]=c,v[5]=m,v[6]=s,v[7]=d,v[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],p=s[3],m=s[6],h=s[1],v=s[4],S=s[7],g=s[2],x=s[5],T=s[8],N=l[0],M=l[3],y=l[6],D=l[1],F=l[4],L=l[7],X=l[2],P=l[5],z=l[8];return c[0]=d*N+p*D+m*X,c[3]=d*M+p*F+m*P,c[6]=d*y+p*L+m*z,c[1]=h*N+v*D+S*X,c[4]=h*M+v*F+S*P,c[7]=h*y+v*L+S*z,c[2]=g*N+x*D+T*X,c[5]=g*M+x*F+T*P,c[8]=g*y+x*L+T*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],p=t[5],m=t[6],h=t[7],v=t[8];return i*d*v-i*p*h-s*c*v+s*p*m+l*c*h-l*d*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],p=t[5],m=t[6],h=t[7],v=t[8],S=v*d-p*h,g=p*m-v*c,x=h*c-d*m,T=i*S+s*g+l*x;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const N=1/T;return t[0]=S*N,t[1]=(l*h-v*s)*N,t[2]=(p*s-l*d)*N,t[3]=g*N,t[4]=(v*i-l*m)*N,t[5]=(l*c-p*i)*N,t[6]=x*N,t[7]=(s*m-h*i)*N,t[8]=(d*i-s*c)*N,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,d,p){const m=Math.cos(c),h=Math.sin(c);return this.set(s*m,s*h,-s*(m*d+h*p)+d+t,-l*h,l*m,-l*(-h*d+m*p)+p+i,0,0,1),this}scale(t,i){return this.premultiply(hd.makeScale(t,i)),this}rotate(t){return this.premultiply(hd.makeRotation(-t)),this}translate(t,i){return this.premultiply(hd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};$h.prototype.isMatrix3=!0;let lt=$h;const hd=new lt,t_=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),n_=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lM(){const o={enabled:!0,workingColorSpace:Vc,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Vt&&(l.r=Sa(l.r),l.g=Sa(l.g),l.b=Sa(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Vt&&(l.r=Or(l.r),l.g=Or(l.g),l.b=Or(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ss?kc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Uh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Uh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Vc]:{primaries:t,whitePoint:s,transfer:kc,toXYZ:t_,fromXYZ:n_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:t,whitePoint:s,transfer:Vt,toXYZ:t_,fromXYZ:n_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:li}}}),o}const bt=lM();function Sa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Or(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let vr;class cM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{vr===void 0&&(vr=Xc("canvas")),vr.width=t.width,vr.height=t.height;const l=vr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=vr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Xc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=Sa(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Sa(i[s]/255)*255):i[s]=Sa(i[s]);return{data:i,width:t.width,height:t.height}}else return it("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let uM=0;class qh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uM++}),this.uuid=Qo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?c.push(pd(l[d].image)):c.push(pd(l[d]))}else c=pd(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function pd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?cM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(it("Texture: Unable to serialize Texture."),{})}let fM=0;const md=new ie;class zn extends Bs{constructor(t=zn.DEFAULT_IMAGE,i=zn.DEFAULT_MAPPING,s=xa,l=xa,c=Fn,d=Ps,p=Ui,m=ui,h=zn.DEFAULT_ANISOTROPY,v=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fM++}),this.uuid=Qo(),this.name="",this.source=new qh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(md).x}get height(){return this.source.getSize(md).y}get depth(){return this.source.getSize(md).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){it(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){it(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ax)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $d:t.x=t.x-Math.floor(t.x);break;case xa:t.x=t.x<0?0:1;break;case eh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $d:t.y=t.y-Math.floor(t.y);break;case xa:t.y=t.y<0?0:1;break;case eh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=ax;zn.DEFAULT_ANISOTROPY=1;const ep=class ep{constructor(t=0,i=0,s=0,l=1){this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,d=t.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,h=m[0],v=m[4],S=m[8],g=m[1],x=m[5],T=m[9],N=m[2],M=m[6],y=m[10];if(Math.abs(v-g)<.01&&Math.abs(S-N)<.01&&Math.abs(T-M)<.01){if(Math.abs(v+g)<.1&&Math.abs(S+N)<.1&&Math.abs(T+M)<.1&&Math.abs(h+x+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const F=(h+1)/2,L=(x+1)/2,X=(y+1)/2,P=(v+g)/4,z=(S+N)/4,b=(T+M)/4;return F>L&&F>X?F<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(F),l=P/s,c=z/s):L>X?L<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(L),s=P/l,c=b/l):X<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(X),s=z/c,l=b/c),this.set(s,l,c,i),this}let D=Math.sqrt((M-T)*(M-T)+(S-N)*(S-N)+(g-v)*(g-v));return Math.abs(D)<.001&&(D=1),this.x=(M-T)/D,this.y=(S-N)/D,this.z=(g-v)/D,this.w=Math.acos((h+x+y-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Tt(this.x,t.x,i.x),this.y=Tt(this.y,t.y,i.y),this.z=Tt(this.z,t.z,i.z),this.w=Tt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Tt(this.x,t,i),this.y=Tt(this.y,t,i),this.z=Tt(this.z,t,i),this.w=Tt(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Tt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ep.prototype.isVector4=!0;let rn=ep;class dM extends Bs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new rn(0,0,t,i),this.scissorTest=!1,this.viewport=new rn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new zn(l),d=s.count;for(let p=0;p<d;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Fn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new qh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ji extends dM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class hx extends zn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class hM extends zn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const jc=class jc{constructor(t,i,s,l,c,d,p,m,h,v,S,g,x,T,N,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,p,m,h,v,S,g,x,T,N,M)}set(t,i,s,l,c,d,p,m,h,v,S,g,x,T,N,M){const y=this.elements;return y[0]=t,y[4]=i,y[8]=s,y[12]=l,y[1]=c,y[5]=d,y[9]=p,y[13]=m,y[2]=h,y[6]=v,y[10]=S,y[14]=g,y[3]=x,y[7]=T,y[11]=N,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jc().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Sr.setFromMatrixColumn(t,0).length(),c=1/Sr.setFromMatrixColumn(t,1).length(),d=1/Sr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,d=Math.cos(s),p=Math.sin(s),m=Math.cos(l),h=Math.sin(l),v=Math.cos(c),S=Math.sin(c);if(t.order==="XYZ"){const g=d*v,x=d*S,T=p*v,N=p*S;i[0]=m*v,i[4]=-m*S,i[8]=h,i[1]=x+T*h,i[5]=g-N*h,i[9]=-p*m,i[2]=N-g*h,i[6]=T+x*h,i[10]=d*m}else if(t.order==="YXZ"){const g=m*v,x=m*S,T=h*v,N=h*S;i[0]=g+N*p,i[4]=T*p-x,i[8]=d*h,i[1]=d*S,i[5]=d*v,i[9]=-p,i[2]=x*p-T,i[6]=N+g*p,i[10]=d*m}else if(t.order==="ZXY"){const g=m*v,x=m*S,T=h*v,N=h*S;i[0]=g-N*p,i[4]=-d*S,i[8]=T+x*p,i[1]=x+T*p,i[5]=d*v,i[9]=N-g*p,i[2]=-d*h,i[6]=p,i[10]=d*m}else if(t.order==="ZYX"){const g=d*v,x=d*S,T=p*v,N=p*S;i[0]=m*v,i[4]=T*h-x,i[8]=g*h+N,i[1]=m*S,i[5]=N*h+g,i[9]=x*h-T,i[2]=-h,i[6]=p*m,i[10]=d*m}else if(t.order==="YZX"){const g=d*m,x=d*h,T=p*m,N=p*h;i[0]=m*v,i[4]=N-g*S,i[8]=T*S+x,i[1]=S,i[5]=d*v,i[9]=-p*v,i[2]=-h*v,i[6]=x*S+T,i[10]=g-N*S}else if(t.order==="XZY"){const g=d*m,x=d*h,T=p*m,N=p*h;i[0]=m*v,i[4]=-S,i[8]=h*v,i[1]=g*S+N,i[5]=d*v,i[9]=x*S-T,i[2]=T*S-x,i[6]=p*v,i[10]=N*S+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pM,t,mM)}lookAt(t,i,s){const l=this.elements;return ri.subVectors(t,i),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),Ja.crossVectors(s,ri),Ja.lengthSq()===0&&(Math.abs(s.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),Ja.crossVectors(s,ri)),Ja.normalize(),fc.crossVectors(ri,Ja),l[0]=Ja.x,l[4]=fc.x,l[8]=ri.x,l[1]=Ja.y,l[5]=fc.y,l[9]=ri.y,l[2]=Ja.z,l[6]=fc.z,l[10]=ri.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],p=s[4],m=s[8],h=s[12],v=s[1],S=s[5],g=s[9],x=s[13],T=s[2],N=s[6],M=s[10],y=s[14],D=s[3],F=s[7],L=s[11],X=s[15],P=l[0],z=l[4],b=l[8],I=l[12],Z=l[1],G=l[5],Y=l[9],le=l[13],ue=l[2],W=l[6],U=l[10],B=l[14],oe=l[3],me=l[7],ye=l[11],O=l[15];return c[0]=d*P+p*Z+m*ue+h*oe,c[4]=d*z+p*G+m*W+h*me,c[8]=d*b+p*Y+m*U+h*ye,c[12]=d*I+p*le+m*B+h*O,c[1]=v*P+S*Z+g*ue+x*oe,c[5]=v*z+S*G+g*W+x*me,c[9]=v*b+S*Y+g*U+x*ye,c[13]=v*I+S*le+g*B+x*O,c[2]=T*P+N*Z+M*ue+y*oe,c[6]=T*z+N*G+M*W+y*me,c[10]=T*b+N*Y+M*U+y*ye,c[14]=T*I+N*le+M*B+y*O,c[3]=D*P+F*Z+L*ue+X*oe,c[7]=D*z+F*G+L*W+X*me,c[11]=D*b+F*Y+L*U+X*ye,c[15]=D*I+F*le+L*B+X*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],d=t[1],p=t[5],m=t[9],h=t[13],v=t[2],S=t[6],g=t[10],x=t[14],T=t[3],N=t[7],M=t[11],y=t[15],D=m*x-h*g,F=p*x-h*S,L=p*g-m*S,X=d*x-h*v,P=d*g-m*v,z=d*S-p*v;return i*(N*D-M*F+y*L)-s*(T*D-M*X+y*P)+l*(T*F-N*X+y*z)-c*(T*L-N*P+M*z)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],p=t[5],m=t[6],h=t[7],v=t[8],S=t[9],g=t[10],x=t[11],T=t[12],N=t[13],M=t[14],y=t[15],D=i*p-s*d,F=i*m-l*d,L=i*h-c*d,X=s*m-l*p,P=s*h-c*p,z=l*h-c*m,b=v*N-S*T,I=v*M-g*T,Z=v*y-x*T,G=S*M-g*N,Y=S*y-x*N,le=g*y-x*M,ue=D*le-F*Y+L*G+X*Z-P*I+z*b;if(ue===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/ue;return t[0]=(p*le-m*Y+h*G)*W,t[1]=(l*Y-s*le-c*G)*W,t[2]=(N*z-M*P+y*X)*W,t[3]=(g*P-S*z-x*X)*W,t[4]=(m*Z-d*le-h*I)*W,t[5]=(i*le-l*Z+c*I)*W,t[6]=(M*L-T*z-y*F)*W,t[7]=(v*z-g*L+x*F)*W,t[8]=(d*Y-p*Z+h*b)*W,t[9]=(s*Z-i*Y-c*b)*W,t[10]=(T*P-N*L+y*D)*W,t[11]=(S*L-v*P-x*D)*W,t[12]=(p*I-d*G-m*b)*W,t[13]=(i*G-s*I+l*b)*W,t[14]=(N*F-T*X-M*D)*W,t[15]=(v*X-S*F+g*D)*W,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=t.x,p=t.y,m=t.z,h=c*d,v=c*p;return this.set(h*d+s,h*p-l*m,h*m+l*p,0,h*p+l*m,v*p+s,v*m-l*d,0,h*m-l*p,v*m+l*d,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,d){return this.set(1,s,c,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,d=i._y,p=i._z,m=i._w,h=c+c,v=d+d,S=p+p,g=c*h,x=c*v,T=c*S,N=d*v,M=d*S,y=p*S,D=m*h,F=m*v,L=m*S,X=s.x,P=s.y,z=s.z;return l[0]=(1-(N+y))*X,l[1]=(x+L)*X,l[2]=(T-F)*X,l[3]=0,l[4]=(x-L)*P,l[5]=(1-(g+y))*P,l[6]=(M+D)*P,l[7]=0,l[8]=(T+F)*z,l[9]=(M-D)*z,l[10]=(1-(g+N))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let d=Sr.set(l[0],l[1],l[2]).length();const p=Sr.set(l[4],l[5],l[6]).length(),m=Sr.set(l[8],l[9],l[10]).length();c<0&&(d=-d),Ci.copy(this);const h=1/d,v=1/p,S=1/m;return Ci.elements[0]*=h,Ci.elements[1]*=h,Ci.elements[2]*=h,Ci.elements[4]*=v,Ci.elements[5]*=v,Ci.elements[6]*=v,Ci.elements[8]*=S,Ci.elements[9]*=S,Ci.elements[10]*=S,i.setFromRotationMatrix(Ci),s.x=d,s.y=p,s.z=m,this}makePerspective(t,i,s,l,c,d,p=ki,m=!1){const h=this.elements,v=2*c/(i-t),S=2*c/(s-l),g=(i+t)/(i-t),x=(s+l)/(s-l);let T,N;if(m)T=c/(d-c),N=d*c/(d-c);else if(p===ki)T=-(d+c)/(d-c),N=-2*d*c/(d-c);else if(p===Ko)T=-d/(d-c),N=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=v,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=S,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=T,h[14]=N,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,i,s,l,c,d,p=ki,m=!1){const h=this.elements,v=2/(i-t),S=2/(s-l),g=-(i+t)/(i-t),x=-(s+l)/(s-l);let T,N;if(m)T=1/(d-c),N=d/(d-c);else if(p===ki)T=-2/(d-c),N=-(d+c)/(d-c);else if(p===Ko)T=-1/(d-c),N=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=v,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=S,h[9]=0,h[13]=x,h[2]=0,h[6]=0,h[10]=T,h[14]=N,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}};jc.prototype.isMatrix4=!0;let on=jc;const Sr=new ie,Ci=new on,pM=new ie(0,0,0),mM=new ie(1,1,1),Ja=new ie,fc=new ie,ri=new ie,i_=new on,a_=new Br;class ls{constructor(t=0,i=0,s=0,l=ls.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],d=l[4],p=l[8],m=l[1],h=l[5],v=l[9],S=l[2],g=l[6],x=l[10];switch(i){case"XYZ":this._y=Math.asin(Tt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,x),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(p,x),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-S,c),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-S,x),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Tt(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(g,x),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(Tt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,h),this._y=Math.atan2(-S,c)):(this._x=0,this._y=Math.atan2(p,x));break;case"XZY":this._z=Math.asin(-Tt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-v,x),this._y=0);break;default:it("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return i_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(i_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return a_.setFromEuler(this),this.setFromQuaternion(a_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ls.DEFAULT_ORDER="XYZ";class px{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let gM=0;const s_=new ie,yr=new Br,da=new on,dc=new ie,Bo=new ie,_M=new ie,xM=new Br,r_=new ie(1,0,0),o_=new ie(0,1,0),l_=new ie(0,0,1),c_={type:"added"},vM={type:"removed"},Mr={type:"childadded",child:null},gd={type:"childremoved",child:null};class Nn extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=Qo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nn.DEFAULT_UP.clone();const t=new ie,i=new ls,s=new Br,l=new ie(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new on},normalMatrix:{value:new lt}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=Nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new px,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return yr.setFromAxisAngle(t,i),this.quaternion.multiply(yr),this}rotateOnWorldAxis(t,i){return yr.setFromAxisAngle(t,i),this.quaternion.premultiply(yr),this}rotateX(t){return this.rotateOnAxis(r_,t)}rotateY(t){return this.rotateOnAxis(o_,t)}rotateZ(t){return this.rotateOnAxis(l_,t)}translateOnAxis(t,i){return s_.copy(t).applyQuaternion(this.quaternion),this.position.add(s_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(r_,t)}translateY(t){return this.translateOnAxis(o_,t)}translateZ(t){return this.translateOnAxis(l_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(da.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?dc.copy(t):dc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?da.lookAt(Bo,dc,this.up):da.lookAt(dc,Bo,this.up),this.quaternion.setFromRotationMatrix(da),l&&(da.extractRotation(l.matrixWorld),yr.setFromRotationMatrix(da),this.quaternion.premultiply(yr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(At("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(c_),Mr.child=t,this.dispatchEvent(Mr),Mr.child=null):At("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(vM),gd.child=t,this.dispatchEvent(gd),gd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),da.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),da.multiply(t.parent.matrixWorld)),t.applyMatrix4(da),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(c_),Mr.child=t,this.dispatchEvent(Mr),Mr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,t,_M),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,xM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,v=m.length;h<v;h++){const S=m[h];c(t.shapes,S)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(t.materials,this.material[m]));l.material=p}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(t.animations,m))}}if(i){const p=d(t.geometries),m=d(t.materials),h=d(t.textures),v=d(t.images),S=d(t.shapes),g=d(t.skeletons),x=d(t.animations),T=d(t.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),h.length>0&&(s.textures=h),v.length>0&&(s.images=v),S.length>0&&(s.shapes=S),g.length>0&&(s.skeletons=g),x.length>0&&(s.animations=x),T.length>0&&(s.nodes=T)}return s.object=l,s;function d(p){const m=[];for(const h in p){const v=p[h];delete v.metadata,m.push(v)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Nn.DEFAULT_UP=new ie(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Wo extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const SM={type:"move"};class _d{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,d=null;const p=this._targetRay,m=this._grip,h=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(h&&t.hand){d=!0;for(const N of t.hand.values()){const M=i.getJointPose(N,s),y=this._getHandJoint(h,N);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const v=h.joints["index-finger-tip"],S=h.joints["thumb-tip"],g=v.position.distanceTo(S.position),x=.02,T=.005;h.inputState.pinching&&g>x+T?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&g<=x-T&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:t,target:this})));p!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(SM)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Wo;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const mx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$a={h:0,s:0,l:0},hc={h:0,s:0,l:0};function xd(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Dt{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=li){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,bt.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=bt.workingColorSpace){return this.r=t,this.g=i,this.b=s,bt.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=bt.workingColorSpace){if(t=oM(t,1),i=Tt(i,0,1),s=Tt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=xd(d,c,t+1/3),this.g=xd(d,c,t),this.b=xd(d,c,t-1/3)}return bt.colorSpaceToWorking(this,l),this}setStyle(t,i=li){function s(c){c!==void 0&&parseFloat(c)<1&&it("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:it("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);it("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=li){const s=mx[t.toLowerCase()];return s!==void 0?this.setHex(s,i):it("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Sa(t.r),this.g=Sa(t.g),this.b=Sa(t.b),this}copyLinearToSRGB(t){return this.r=Or(t.r),this.g=Or(t.g),this.b=Or(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=li){return bt.workingToColorSpace(Pn.copy(this),t),Math.round(Tt(Pn.r*255,0,255))*65536+Math.round(Tt(Pn.g*255,0,255))*256+Math.round(Tt(Pn.b*255,0,255))}getHexString(t=li){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=bt.workingColorSpace){bt.workingToColorSpace(Pn.copy(this),i);const s=Pn.r,l=Pn.g,c=Pn.b,d=Math.max(s,l,c),p=Math.min(s,l,c);let m,h;const v=(p+d)/2;if(p===d)m=0,h=0;else{const S=d-p;switch(h=v<=.5?S/(d+p):S/(2-d-p),d){case s:m=(l-c)/S+(l<c?6:0);break;case l:m=(c-s)/S+2;break;case c:m=(s-l)/S+4;break}m/=6}return t.h=m,t.s=h,t.l=v,t}getRGB(t,i=bt.workingColorSpace){return bt.workingToColorSpace(Pn.copy(this),i),t.r=Pn.r,t.g=Pn.g,t.b=Pn.b,t}getStyle(t=li){bt.workingToColorSpace(Pn.copy(this),t);const i=Pn.r,s=Pn.g,l=Pn.b;return t!==li?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL($a),this.setHSL($a.h+t,$a.s+i,$a.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL($a),t.getHSL(hc);const s=fd($a.h,hc.h,i),l=fd($a.s,hc.s,i),c=fd($a.l,hc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new Dt;Dt.NAMES=mx;class yM extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ls,this.environmentIntensity=1,this.environmentRotation=new ls,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const wi=new ie,ha=new ie,vd=new ie,pa=new ie,Er=new ie,br=new ie,u_=new ie,Sd=new ie,yd=new ie,Md=new ie,Ed=new rn,bd=new rn,Td=new rn;class Di{constructor(t=new ie,i=new ie,s=new ie){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),wi.subVectors(t,i),l.cross(wi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){wi.subVectors(l,i),ha.subVectors(s,i),vd.subVectors(t,i);const d=wi.dot(wi),p=wi.dot(ha),m=wi.dot(vd),h=ha.dot(ha),v=ha.dot(vd),S=d*h-p*p;if(S===0)return c.set(0,0,0),null;const g=1/S,x=(h*m-p*v)*g,T=(d*v-p*m)*g;return c.set(1-x-T,T,x)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,pa)===null?!1:pa.x>=0&&pa.y>=0&&pa.x+pa.y<=1}static getInterpolation(t,i,s,l,c,d,p,m){return this.getBarycoord(t,i,s,l,pa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,pa.x),m.addScaledVector(d,pa.y),m.addScaledVector(p,pa.z),m)}static getInterpolatedAttribute(t,i,s,l,c,d){return Ed.setScalar(0),bd.setScalar(0),Td.setScalar(0),Ed.fromBufferAttribute(t,i),bd.fromBufferAttribute(t,s),Td.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(Ed,c.x),d.addScaledVector(bd,c.y),d.addScaledVector(Td,c.z),d}static isFrontFacing(t,i,s,l){return wi.subVectors(s,i),ha.subVectors(t,i),wi.cross(ha).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wi.subVectors(this.c,this.b),ha.subVectors(this.a,this.b),wi.cross(ha).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Di.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Di.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Di.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Di.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Di.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let d,p;Er.subVectors(l,s),br.subVectors(c,s),Sd.subVectors(t,s);const m=Er.dot(Sd),h=br.dot(Sd);if(m<=0&&h<=0)return i.copy(s);yd.subVectors(t,l);const v=Er.dot(yd),S=br.dot(yd);if(v>=0&&S<=v)return i.copy(l);const g=m*S-v*h;if(g<=0&&m>=0&&v<=0)return d=m/(m-v),i.copy(s).addScaledVector(Er,d);Md.subVectors(t,c);const x=Er.dot(Md),T=br.dot(Md);if(T>=0&&x<=T)return i.copy(c);const N=x*h-m*T;if(N<=0&&h>=0&&T<=0)return p=h/(h-T),i.copy(s).addScaledVector(br,p);const M=v*T-x*S;if(M<=0&&S-v>=0&&x-T>=0)return u_.subVectors(c,l),p=(S-v)/(S-v+(x-T)),i.copy(l).addScaledVector(u_,p);const y=1/(M+N+g);return d=N*y,p=g*y,i.copy(s).addScaledVector(Er,d).addScaledVector(br,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Jo{constructor(t=new ie(1/0,1/0,1/0),i=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ni.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ni.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ni.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let d=0,p=c.count;d<p;d++)t.isMesh===!0?t.getVertexPosition(d,Ni):Ni.fromBufferAttribute(c,d),Ni.applyMatrix4(t.matrixWorld),this.expandByPoint(Ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),pc.copy(s.boundingBox)),pc.applyMatrix4(t.matrixWorld),this.union(pc)}const l=t.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ni),Ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ho),mc.subVectors(this.max,Ho),Tr.subVectors(t.a,Ho),Ar.subVectors(t.b,Ho),Rr.subVectors(t.c,Ho),es.subVectors(Ar,Tr),ts.subVectors(Rr,Ar),Cs.subVectors(Tr,Rr);let i=[0,-es.z,es.y,0,-ts.z,ts.y,0,-Cs.z,Cs.y,es.z,0,-es.x,ts.z,0,-ts.x,Cs.z,0,-Cs.x,-es.y,es.x,0,-ts.y,ts.x,0,-Cs.y,Cs.x,0];return!Ad(i,Tr,Ar,Rr,mc)||(i=[1,0,0,0,1,0,0,0,1],!Ad(i,Tr,Ar,Rr,mc))?!1:(gc.crossVectors(es,ts),i=[gc.x,gc.y,gc.z],Ad(i,Tr,Ar,Rr,mc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ma[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ma[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ma[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ma[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ma[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ma[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ma[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ma[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ma),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ma=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],Ni=new ie,pc=new Jo,Tr=new ie,Ar=new ie,Rr=new ie,es=new ie,ts=new ie,Cs=new ie,Ho=new ie,mc=new ie,gc=new ie,ws=new ie;function Ad(o,t,i,s,l){for(let c=0,d=o.length-3;c<=d;c+=3){ws.fromArray(o,c);const p=l.x*Math.abs(ws.x)+l.y*Math.abs(ws.y)+l.z*Math.abs(ws.z),m=t.dot(ws),h=i.dot(ws),v=s.dot(ws);if(Math.max(-Math.max(m,h,v),Math.min(m,h,v))>p)return!1}return!0}const gn=new ie,_c=new Ut;let MM=0;class Li extends Bs{constructor(t,i,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:MM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Kg,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)_c.fromBufferAttribute(this,i),_c.applyMatrix3(t),this.setXY(i,_c.x,_c.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix3(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix4(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyNormalMatrix(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.transformDirection(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=zo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=qn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=zo(i,this.array)),i}setX(t,i){return this.normalized&&(i=qn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=zo(i,this.array)),i}setY(t,i){return this.normalized&&(i=qn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=zo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=qn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=zo(i,this.array)),i}setW(t,i){return this.normalized&&(i=qn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=qn(i,this.array),s=qn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=qn(i,this.array),s=qn(s,this.array),l=qn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=qn(i,this.array),s=qn(s,this.array),l=qn(l,this.array),c=qn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Kg&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class gx extends Li{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class _x extends Li{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class yi extends Li{constructor(t,i,s){super(new Float32Array(t),i,s)}}const EM=new Jo,Go=new ie,Rd=new ie;class qc{constructor(t=new ie,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):EM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,d=t.length;c<d;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Go.subVectors(t,this.center);const i=Go.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Go,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Rd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Go.copy(t.center).add(Rd)),this.expandByPoint(Go.copy(t.center).sub(Rd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let bM=0;const Si=new on,Cd=new Nn,Cr=new ie,oi=new Jo,Vo=new Jo,Mn=new ie;class Mi extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bM++}),this.uuid=Qo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(iM(t)?_x:gx)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new lt().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Si.makeRotationFromQuaternion(t),this.applyMatrix4(Si),this}rotateX(t){return Si.makeRotationX(t),this.applyMatrix4(Si),this}rotateY(t){return Si.makeRotationY(t),this.applyMatrix4(Si),this}rotateZ(t){return Si.makeRotationZ(t),this.applyMatrix4(Si),this}translate(t,i,s){return Si.makeTranslation(t,i,s),this.applyMatrix4(Si),this}scale(t,i,s){return Si.makeScale(t,i,s),this.applyMatrix4(Si),this}lookAt(t){return Cd.lookAt(t),Cd.updateMatrix(),this.applyMatrix4(Cd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const d=t[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new yi(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&it("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){At("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];oi.setFromBufferAttribute(c),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&At('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){At("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(t){const s=this.boundingSphere.center;if(oi.setFromBufferAttribute(t),i)for(let c=0,d=i.length;c<d;c++){const p=i[c];Vo.setFromBufferAttribute(p),this.morphTargetsRelative?(Mn.addVectors(oi.min,Vo.min),oi.expandByPoint(Mn),Mn.addVectors(oi.max,Vo.max),oi.expandByPoint(Mn)):(oi.expandByPoint(Vo.min),oi.expandByPoint(Vo.max))}oi.getCenter(s);let l=0;for(let c=0,d=t.count;c<d;c++)Mn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Mn));if(i)for(let c=0,d=i.length;c<d;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,v=p.count;h<v;h++)Mn.fromBufferAttribute(p,h),m&&(Cr.fromBufferAttribute(t,h),Mn.add(Cr)),l=Math.max(l,s.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&At('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){At("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Li(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),p=[],m=[];for(let b=0;b<s.count;b++)p[b]=new ie,m[b]=new ie;const h=new ie,v=new ie,S=new ie,g=new Ut,x=new Ut,T=new Ut,N=new ie,M=new ie;function y(b,I,Z){h.fromBufferAttribute(s,b),v.fromBufferAttribute(s,I),S.fromBufferAttribute(s,Z),g.fromBufferAttribute(c,b),x.fromBufferAttribute(c,I),T.fromBufferAttribute(c,Z),v.sub(h),S.sub(h),x.sub(g),T.sub(g);const G=1/(x.x*T.y-T.x*x.y);isFinite(G)&&(N.copy(v).multiplyScalar(T.y).addScaledVector(S,-x.y).multiplyScalar(G),M.copy(S).multiplyScalar(x.x).addScaledVector(v,-T.x).multiplyScalar(G),p[b].add(N),p[I].add(N),p[Z].add(N),m[b].add(M),m[I].add(M),m[Z].add(M))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let b=0,I=D.length;b<I;++b){const Z=D[b],G=Z.start,Y=Z.count;for(let le=G,ue=G+Y;le<ue;le+=3)y(t.getX(le+0),t.getX(le+1),t.getX(le+2))}const F=new ie,L=new ie,X=new ie,P=new ie;function z(b){X.fromBufferAttribute(l,b),P.copy(X);const I=p[b];F.copy(I),F.sub(X.multiplyScalar(X.dot(I))).normalize(),L.crossVectors(P,I);const G=L.dot(m[b])<0?-1:1;d.setXYZW(b,F.x,F.y,F.z,G)}for(let b=0,I=D.length;b<I;++b){const Z=D[b],G=Z.start,Y=Z.count;for(let le=G,ue=G+Y;le<ue;le+=3)z(t.getX(le+0)),z(t.getX(le+1)),z(t.getX(le+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Li(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,x=s.count;g<x;g++)s.setXYZ(g,0,0,0);const l=new ie,c=new ie,d=new ie,p=new ie,m=new ie,h=new ie,v=new ie,S=new ie;if(t)for(let g=0,x=t.count;g<x;g+=3){const T=t.getX(g+0),N=t.getX(g+1),M=t.getX(g+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,N),d.fromBufferAttribute(i,M),v.subVectors(d,c),S.subVectors(l,c),v.cross(S),p.fromBufferAttribute(s,T),m.fromBufferAttribute(s,N),h.fromBufferAttribute(s,M),p.add(v),m.add(v),h.add(v),s.setXYZ(T,p.x,p.y,p.z),s.setXYZ(N,m.x,m.y,m.z),s.setXYZ(M,h.x,h.y,h.z)}else for(let g=0,x=i.count;g<x;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),d.fromBufferAttribute(i,g+2),v.subVectors(d,c),S.subVectors(l,c),v.cross(S),s.setXYZ(g+0,v.x,v.y,v.z),s.setXYZ(g+1,v.x,v.y,v.z),s.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Mn.fromBufferAttribute(t,i),Mn.normalize(),t.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function t(p,m){const h=p.array,v=p.itemSize,S=p.normalized,g=new h.constructor(m.length*v);let x=0,T=0;for(let N=0,M=m.length;N<M;N++){p.isInterleavedBufferAttribute?x=m[N]*p.data.stride+p.offset:x=m[N]*v;for(let y=0;y<v;y++)g[T++]=h[x++]}return new Li(g,v,S)}if(this.index===null)return it("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Mi,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=t(m,s);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let v=0,S=h.length;v<S;v++){const g=h[v],x=t(g,s);m.push(x)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const h=d[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(t[h]=m[h]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const h=s[m];t.data.attributes[m]=h.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],v=[];for(let S=0,g=h.length;S<g;S++){const x=h[S];v.push(x.toJSON(t.data))}v.length>0&&(l[m]=v,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const h in l){const v=l[h];this.setAttribute(h,v.clone(i))}const c=t.morphAttributes;for(const h in c){const v=[],S=c[h];for(let g=0,x=S.length;g<x;g++)v.push(S[g].clone(i));this.morphAttributes[h]=v}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let h=0,v=d.length;h<v;h++){const S=d[h];this.addGroup(S.start,S.count,S.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let TM=0;class Hr extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:TM++}),this.uuid=Qo(),this.name="",this.type="Material",this.blending=Lr,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xd,this.blendDst=jd,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=Pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xr,this.stencilZFail=xr,this.stencilZPass=xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){it(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){it(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Lr&&(s.blending=this.blending),this.side!==os&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Xd&&(s.blendSrc=this.blendSrc),this.blendDst!==jd&&(s.blendDst=this.blendDst),this.blendEquation!==Ls&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Pr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==xr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==xr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const p in c){const m=c[p];delete m.metadata,d.push(m)}return d}if(i){const c=l(t.textures),d=l(t.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const ga=new ie,wd=new ie,xc=new ie,ns=new ie,Nd=new ie,vc=new ie,Dd=new ie;class xx{constructor(t=new ie,i=new ie(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ga)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ga.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ga.copy(this.origin).addScaledVector(this.direction,i),ga.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){wd.copy(t).add(i).multiplyScalar(.5),xc.copy(i).sub(t).normalize(),ns.copy(this.origin).sub(wd);const c=t.distanceTo(i)*.5,d=-this.direction.dot(xc),p=ns.dot(this.direction),m=-ns.dot(xc),h=ns.lengthSq(),v=Math.abs(1-d*d);let S,g,x,T;if(v>0)if(S=d*m-p,g=d*p-m,T=c*v,S>=0)if(g>=-T)if(g<=T){const N=1/v;S*=N,g*=N,x=S*(S+d*g+2*p)+g*(d*S+g+2*m)+h}else g=c,S=Math.max(0,-(d*g+p)),x=-S*S+g*(g+2*m)+h;else g=-c,S=Math.max(0,-(d*g+p)),x=-S*S+g*(g+2*m)+h;else g<=-T?(S=Math.max(0,-(-d*c+p)),g=S>0?-c:Math.min(Math.max(-c,-m),c),x=-S*S+g*(g+2*m)+h):g<=T?(S=0,g=Math.min(Math.max(-c,-m),c),x=g*(g+2*m)+h):(S=Math.max(0,-(d*c+p)),g=S>0?c:Math.min(Math.max(-c,-m),c),x=-S*S+g*(g+2*m)+h);else g=d>0?-c:c,S=Math.max(0,-(d*g+p)),x=-S*S+g*(g+2*m)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(wd).addScaledVector(xc,g),x}intersectSphere(t,i){ga.subVectors(t.center,this.origin);const s=ga.dot(this.direction),l=ga.dot(ga)-s*s,c=t.radius*t.radius;if(l>c)return null;const d=Math.sqrt(c-l),p=s-d,m=s+d;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,d,p,m;const h=1/this.direction.x,v=1/this.direction.y,S=1/this.direction.z,g=this.origin;return h>=0?(s=(t.min.x-g.x)*h,l=(t.max.x-g.x)*h):(s=(t.max.x-g.x)*h,l=(t.min.x-g.x)*h),v>=0?(c=(t.min.y-g.y)*v,d=(t.max.y-g.y)*v):(c=(t.max.y-g.y)*v,d=(t.min.y-g.y)*v),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),S>=0?(p=(t.min.z-g.z)*S,m=(t.max.z-g.z)*S):(p=(t.max.z-g.z)*S,m=(t.min.z-g.z)*S),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ga)!==null}intersectTriangle(t,i,s,l,c){Nd.subVectors(i,t),vc.subVectors(s,t),Dd.crossVectors(Nd,vc);let d=this.direction.dot(Dd),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;ns.subVectors(this.origin,t);const m=p*this.direction.dot(vc.crossVectors(ns,vc));if(m<0)return null;const h=p*this.direction.dot(Nd.cross(ns));if(h<0||m+h>d)return null;const v=-p*ns.dot(Dd);return v<0?null:this.at(v/d,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vx extends Hr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ls,this.combine=K_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const f_=new on,Ns=new xx,Sc=new qc,d_=new ie,yc=new ie,Mc=new ie,Ec=new ie,Ud=new ie,bc=new ie,h_=new ie,Tc=new ie;class In extends Nn{constructor(t=new Mi,i=new vx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(c&&p){bc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const v=p[m],S=c[m];v!==0&&(Ud.fromBufferAttribute(S,t),d?bc.addScaledVector(Ud,v):bc.addScaledVector(Ud.sub(i),v))}i.add(bc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Sc.copy(s.boundingSphere),Sc.applyMatrix4(c),Ns.copy(t.ray).recast(t.near),!(Sc.containsPoint(Ns.origin)===!1&&(Ns.intersectSphere(Sc,d_)===null||Ns.origin.distanceToSquared(d_)>(t.far-t.near)**2))&&(f_.copy(c).invert(),Ns.copy(t.ray).applyMatrix4(f_),!(s.boundingBox!==null&&Ns.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Ns)))}_computeIntersections(t,i,s){let l;const c=this.geometry,d=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,v=c.attributes.uv1,S=c.attributes.normal,g=c.groups,x=c.drawRange;if(p!==null)if(Array.isArray(d))for(let T=0,N=g.length;T<N;T++){const M=g[T],y=d[M.materialIndex],D=Math.max(M.start,x.start),F=Math.min(p.count,Math.min(M.start+M.count,x.start+x.count));for(let L=D,X=F;L<X;L+=3){const P=p.getX(L),z=p.getX(L+1),b=p.getX(L+2);l=Ac(this,y,t,s,h,v,S,P,z,b),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,x.start),N=Math.min(p.count,x.start+x.count);for(let M=T,y=N;M<y;M+=3){const D=p.getX(M),F=p.getX(M+1),L=p.getX(M+2);l=Ac(this,d,t,s,h,v,S,D,F,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let T=0,N=g.length;T<N;T++){const M=g[T],y=d[M.materialIndex],D=Math.max(M.start,x.start),F=Math.min(m.count,Math.min(M.start+M.count,x.start+x.count));for(let L=D,X=F;L<X;L+=3){const P=L,z=L+1,b=L+2;l=Ac(this,y,t,s,h,v,S,P,z,b),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,x.start),N=Math.min(m.count,x.start+x.count);for(let M=T,y=N;M<y;M+=3){const D=M,F=M+1,L=M+2;l=Ac(this,d,t,s,h,v,S,D,F,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function AM(o,t,i,s,l,c,d,p){let m;if(t.side===Yn?m=s.intersectTriangle(d,c,l,!0,p):m=s.intersectTriangle(l,c,d,t.side===os,p),m===null)return null;Tc.copy(p),Tc.applyMatrix4(o.matrixWorld);const h=i.ray.origin.distanceTo(Tc);return h<i.near||h>i.far?null:{distance:h,point:Tc.clone(),object:o}}function Ac(o,t,i,s,l,c,d,p,m,h){o.getVertexPosition(p,yc),o.getVertexPosition(m,Mc),o.getVertexPosition(h,Ec);const v=AM(o,t,i,s,yc,Mc,Ec,h_);if(v){const S=new ie;Di.getBarycoord(h_,yc,Mc,Ec,S),l&&(v.uv=Di.getInterpolatedAttribute(l,p,m,h,S,new Ut)),c&&(v.uv1=Di.getInterpolatedAttribute(c,p,m,h,S,new Ut)),d&&(v.normal=Di.getInterpolatedAttribute(d,p,m,h,S,new ie),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const g={a:p,b:m,c:h,normal:new ie,materialIndex:0};Di.getNormal(yc,Mc,Ec,g.normal),v.face=g,v.barycoord=S}return v}class RM extends zn{constructor(t=null,i=1,s=1,l,c,d,p,m,h=wn,v=wn,S,g){super(null,d,p,m,h,v,l,c,S,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ld=new ie,CM=new ie,wM=new lt;class Us{constructor(t=new ie(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Ld.subVectors(s,i).cross(CM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,s=!0){const l=t.delta(Ld),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const d=-(t.start.dot(this.normal)+this.constant)/c;return s===!0&&(d<0||d>1)?null:i.copy(t.start).addScaledVector(l,d)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||wM.getNormalMatrix(t),l=this.coplanarPoint(Ld).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ds=new qc,NM=new Ut(.5,.5),Rc=new ie;class Yh{constructor(t=new Us,i=new Us,s=new Us,l=new Us,c=new Us,d=new Us){this.planes=[t,i,s,l,c,d]}set(t,i,s,l,c,d){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(d),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=ki,s=!1){const l=this.planes,c=t.elements,d=c[0],p=c[1],m=c[2],h=c[3],v=c[4],S=c[5],g=c[6],x=c[7],T=c[8],N=c[9],M=c[10],y=c[11],D=c[12],F=c[13],L=c[14],X=c[15];if(l[0].setComponents(h-d,x-v,y-T,X-D).normalize(),l[1].setComponents(h+d,x+v,y+T,X+D).normalize(),l[2].setComponents(h+p,x+S,y+N,X+F).normalize(),l[3].setComponents(h-p,x-S,y-N,X-F).normalize(),s)l[4].setComponents(m,g,M,L).normalize(),l[5].setComponents(h-m,x-g,y-M,X-L).normalize();else if(l[4].setComponents(h-m,x-g,y-M,X-L).normalize(),i===ki)l[5].setComponents(h+m,x+g,y+M,X+L).normalize();else if(i===Ko)l[5].setComponents(m,g,M,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ds.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ds.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ds)}intersectsSprite(t){Ds.center.set(0,0,0);const i=NM.distanceTo(t.center);return Ds.radius=.7071067811865476+i,Ds.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ds)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Rc.x=l.normal.x>0?t.max.x:t.min.x,Rc.y=l.normal.y>0?t.max.y:t.min.y,Rc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Rc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sx extends Hr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const p_=new on,Oh=new xx,Cc=new qc,wc=new ie;class DM extends Nn{constructor(t=new Mi,i=new Sx){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Cc.copy(s.boundingSphere),Cc.applyMatrix4(l),Cc.radius+=c,t.ray.intersectsSphere(Cc)===!1)return;p_.copy(l).invert(),Oh.copy(t.ray).applyMatrix4(p_);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=s.index,S=s.attributes.position;if(h!==null){const g=Math.max(0,d.start),x=Math.min(h.count,d.start+d.count);for(let T=g,N=x;T<N;T++){const M=h.getX(T);wc.fromBufferAttribute(S,M),m_(wc,M,m,l,t,i,this)}}else{const g=Math.max(0,d.start),x=Math.min(S.count,d.start+d.count);for(let T=g,N=x;T<N;T++)wc.fromBufferAttribute(S,T),m_(wc,T,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function m_(o,t,i,s,l,c,d){const p=Oh.distanceSqToPoint(o);if(p<i){const m=new ie;Oh.closestPointToPoint(o,m),m.applyMatrix4(s);const h=l.ray.origin.distanceTo(m);if(h<l.near||h>l.far)return;c.push({distance:h,distanceToRay:Math.sqrt(p),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:d})}}class yx extends zn{constructor(t=[],i=Fs,s,l,c,d,p,m,h,v){super(t,i,s,l,c,d,p,m,h,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class UM extends zn{constructor(t,i,s,l,c,d,p,m,h){super(t,i,s,l,c,d,p,m,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fr extends zn{constructor(t,i,s=Wi,l,c,d,p=wn,m=wn,h,v=Ma,S=1){if(v!==Ma&&v!==Is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:S};super(g,l,c,d,p,m,v,s,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new qh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class LM extends Fr{constructor(t,i=Wi,s=Fs,l,c,d=wn,p=wn,m,h=Ma){const v={width:t,height:t,depth:1},S=[v,v,v,v,v,v];super(t,t,i,s,l,c,d,p,m,h),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Mx extends zn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Gr extends Mi{constructor(t=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const p=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],h=[],v=[],S=[];let g=0,x=0;T("z","y","x",-1,-1,s,i,t,d,c,0),T("z","y","x",1,-1,s,i,-t,d,c,1),T("x","z","y",1,1,t,s,i,l,d,2),T("x","z","y",1,-1,t,s,-i,l,d,3),T("x","y","z",1,-1,t,i,s,l,c,4),T("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new yi(h,3)),this.setAttribute("normal",new yi(v,3)),this.setAttribute("uv",new yi(S,2));function T(N,M,y,D,F,L,X,P,z,b,I){const Z=L/z,G=X/b,Y=L/2,le=X/2,ue=P/2,W=z+1,U=b+1;let B=0,oe=0;const me=new ie;for(let ye=0;ye<U;ye++){const O=ye*G-le;for(let Q=0;Q<W;Q++){const ve=Q*Z-Y;me[N]=ve*D,me[M]=O*F,me[y]=ue,h.push(me.x,me.y,me.z),me[N]=0,me[M]=0,me[y]=P>0?1:-1,v.push(me.x,me.y,me.z),S.push(Q/z),S.push(1-ye/b),B+=1}}for(let ye=0;ye<b;ye++)for(let O=0;O<z;O++){const Q=g+O+W*ye,ve=g+O+W*(ye+1),Te=g+(O+1)+W*(ye+1),Re=g+(O+1)+W*ye;m.push(Q,ve,Re),m.push(ve,Te,Re),oe+=6}p.addGroup(x,oe,I),x+=oe,g+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class as extends Mi{constructor(t=1,i=1,s=1,l=32,c=1,d=!1,p=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:d,thetaStart:p,thetaLength:m};const h=this;l=Math.floor(l),c=Math.floor(c);const v=[],S=[],g=[],x=[];let T=0;const N=[],M=s/2;let y=0;D(),d===!1&&(t>0&&F(!0),i>0&&F(!1)),this.setIndex(v),this.setAttribute("position",new yi(S,3)),this.setAttribute("normal",new yi(g,3)),this.setAttribute("uv",new yi(x,2));function D(){const L=new ie,X=new ie;let P=0;const z=(i-t)/s;for(let b=0;b<=c;b++){const I=[],Z=b/c,G=Z*(i-t)+t;for(let Y=0;Y<=l;Y++){const le=Y/l,ue=le*m+p,W=Math.sin(ue),U=Math.cos(ue);X.x=G*W,X.y=-Z*s+M,X.z=G*U,S.push(X.x,X.y,X.z),L.set(W,z,U).normalize(),g.push(L.x,L.y,L.z),x.push(le,1-Z),I.push(T++)}N.push(I)}for(let b=0;b<l;b++)for(let I=0;I<c;I++){const Z=N[I][b],G=N[I+1][b],Y=N[I+1][b+1],le=N[I][b+1];(t>0||I!==0)&&(v.push(Z,G,le),P+=3),(i>0||I!==c-1)&&(v.push(G,Y,le),P+=3)}h.addGroup(y,P,0),y+=P}function F(L){const X=T,P=new Ut,z=new ie;let b=0;const I=L===!0?t:i,Z=L===!0?1:-1;for(let Y=1;Y<=l;Y++)S.push(0,M*Z,0),g.push(0,Z,0),x.push(.5,.5),T++;const G=T;for(let Y=0;Y<=l;Y++){const ue=Y/l*m+p,W=Math.cos(ue),U=Math.sin(ue);z.x=I*U,z.y=M*Z,z.z=I*W,S.push(z.x,z.y,z.z),g.push(0,Z,0),P.x=W*.5+.5,P.y=U*.5*Z+.5,x.push(P.x,P.y),T++}for(let Y=0;Y<l;Y++){const le=X+Y,ue=G+Y;L===!0?v.push(ue,ue+1,le):v.push(ue+1,ue,le),b+=3}h.addGroup(y,b,L===!0?1:2),y+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new as(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Yc extends Mi{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,d=i/2,p=Math.floor(s),m=Math.floor(l),h=p+1,v=m+1,S=t/p,g=i/m,x=[],T=[],N=[],M=[];for(let y=0;y<v;y++){const D=y*g-d;for(let F=0;F<h;F++){const L=F*S-c;T.push(L,-D,0),N.push(0,0,1),M.push(F/p),M.push(1-y/m)}}for(let y=0;y<m;y++)for(let D=0;D<p;D++){const F=D+h*y,L=D+h*(y+1),X=D+1+h*(y+1),P=D+1+h*y;x.push(F,L,P),x.push(L,X,P)}this.setIndex(x),this.setAttribute("position",new yi(T,3)),this.setAttribute("normal",new yi(N,3)),this.setAttribute("uv",new yi(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yc(t.width,t.height,t.widthSegments,t.heightSegments)}}function zr(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];if(g_(l))l.isRenderTargetTexture?(it("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone();else if(Array.isArray(l))if(g_(l[0])){const c=[];for(let d=0,p=l.length;d<p;d++)c[d]=l[d].clone();t[i][s]=c}else t[i][s]=l.slice();else t[i][s]=l}}return t}function Hn(o){const t={};for(let i=0;i<o.length;i++){const s=zr(o[i]);for(const l in s)t[l]=s[l]}return t}function g_(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function OM(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function Ex(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:bt.workingColorSpace}const PM={clone:zr,merge:Hn};var IM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,FM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends Hr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=IM,this.fragmentShader=FM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zr(t.uniforms),this.uniformsGroups=OM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class zM extends qi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Od extends Hr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dh,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ls,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class BM extends Hr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class HM extends Hr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Zh extends Nn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Pd=new on,__=new ie,x_=new ie;class bx{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.mapType=ui,this.map=null,this.mapPass=null,this.matrix=new on,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yh,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;__.setFromMatrixPosition(t.matrixWorld),i.position.copy(__),x_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(x_),i.updateMatrixWorld(),Pd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pd,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===Ko||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Pd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Nc=new ie,Dc=new Br,Bi=new ie;class Tx extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Nc,Dc,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Nc,Dc,Bi.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(Nc,Dc,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Nc,Dc,Bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const is=new ie,v_=new Ut,S_=new Ut;class ci extends Tx{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Lh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ud*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Lh*2*Math.atan(Math.tan(ud*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(is.x,is.y).multiplyScalar(-t/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(is.x,is.y).multiplyScalar(-t/is.z)}getViewSize(t,i){return this.getViewBounds(t,v_,S_),i.subVectors(S_,v_)}setViewOffset(t,i,s,l,c,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(ud*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,h=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*s/h,l*=d.width/m,s*=d.height/h}const p=this.filmOffset;p!==0&&(c+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class GM extends bx{constructor(){super(new ci(90,1,.5,500)),this.isPointLightShadow=!0}}class Id extends Zh{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new GM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class Kh extends Tx{constructor(t=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,d=s+t,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,d=c+h*this.view.width,p-=v*this.view.offsetY,m=p-v*this.view.height}this.projectionMatrix.makeOrthographic(c,d,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class VM extends bx{constructor(){super(new Kh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class y_ extends Zh{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.target=new Nn,this.shadow=new VM}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class kM extends Zh{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const wr=-90,Nr=1;class XM extends Nn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ci(wr,Nr,t,i);l.layers=this.layers,this.add(l);const c=new ci(wr,Nr,t,i);c.layers=this.layers,this.add(c);const d=new ci(wr,Nr,t,i);d.layers=this.layers,this.add(d);const p=new ci(wr,Nr,t,i);p.layers=this.layers,this.add(p);const m=new ci(wr,Nr,t,i);m.layers=this.layers,this.add(m);const h=new ci(wr,Nr,t,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,p,m]=i;for(const h of i)this.remove(h);if(t===ki)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Ko)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of i)this.add(h),h.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,d,p,m,h,v]=this.children,S=t.getRenderTarget(),g=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const N=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,2,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(s,3,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),s.texture.generateMipmaps=N,t.setRenderTarget(s,5,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,v),t.setRenderTarget(S,g,x),t.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class jM extends ci{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class WM{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,it("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}const tp=class tp{constructor(t,i,s,l){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let s=0;s<4;s++)this.elements[s]=t[s+i];return this}set(t,i,s,l){const c=this.elements;return c[0]=t,c[2]=i,c[1]=s,c[3]=l,this}};tp.prototype.isMatrix2=!0;let M_=tp;function E_(o,t,i,s){const l=qM(s);switch(i){case cx:return o*t;case fx:return o*t/l.components*l.byteLength;case Vh:return o*t/l.components*l.byteLength;case zs:return o*t*2/l.components*l.byteLength;case kh:return o*t*2/l.components*l.byteLength;case ux:return o*t*3/l.components*l.byteLength;case Ui:return o*t*4/l.components*l.byteLength;case Xh:return o*t*4/l.components*l.byteLength;case Pc:case Ic:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Fc:case zc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case nh:case ah:return Math.max(o,16)*Math.max(t,8)/4;case th:case ih:return Math.max(o,8)*Math.max(t,8)/2;case sh:case rh:case lh:case ch:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case oh:case Hc:case uh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case fh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case dh:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case hh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case ph:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case mh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case gh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case _h:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case xh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case vh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Sh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case yh:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Mh:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Eh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case bh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Th:case Ah:case Rh:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Ch:case wh:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Gc:case Nh:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function qM(o){switch(o){case ui:case sx:return{byteLength:1,components:1};case Yo:case rx:case ya:return{byteLength:2,components:1};case Hh:case Gh:return{byteLength:2,components:4};case Wi:case Bh:case Vi:return{byteLength:4,components:1};case ox:case lx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zh}}));typeof window<"u"&&(window.__THREE__?it("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ax(){let o=null,t=!1,i=null,s=null;function l(c,d){i(c,d),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&o!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function YM(o){const t=new WeakMap;function i(p,m){const h=p.array,v=p.usage,S=h.byteLength,g=o.createBuffer();o.bindBuffer(m,g),o.bufferData(m,h,v),p.onUploadCallback();let x;if(h instanceof Float32Array)x=o.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)x=o.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?x=o.HALF_FLOAT:x=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=o.SHORT;else if(h instanceof Uint32Array)x=o.UNSIGNED_INT;else if(h instanceof Int32Array)x=o.INT;else if(h instanceof Int8Array)x=o.BYTE;else if(h instanceof Uint8Array)x=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:S}}function s(p,m,h){const v=m.array,S=m.updateRanges;if(o.bindBuffer(h,p),S.length===0)o.bufferSubData(h,0,v);else{S.sort((x,T)=>x.start-T.start);let g=0;for(let x=1;x<S.length;x++){const T=S[g],N=S[x];N.start<=T.start+T.count+1?T.count=Math.max(T.count,N.start+N.count-T.start):(++g,S[g]=N)}S.length=g+1;for(let x=0,T=S.length;x<T;x++){const N=S[x];o.bufferSubData(h,N.start*v.BYTES_PER_ELEMENT,v,N.start,N.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=t.get(p);m&&(o.deleteBuffer(m.buffer),t.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const v=t.get(p);(!v||v.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=t.get(p);if(h===void 0)t.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:d}}var ZM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,KM=`#ifdef USE_ALPHAHASH
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
#endif`,QM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,JM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$M=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,eE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tE=`#ifdef USE_AOMAP
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
#endif`,nE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iE=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,aE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,oE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lE=`#ifdef USE_IRIDESCENCE
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
#endif`,cE=`#ifdef USE_BUMPMAP
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
#endif`,uE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,mE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,gE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,_E=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,xE=`#define PI 3.141592653589793
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
} // validated`,vE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,SE=`vec3 transformedNormal = objectNormal;
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
#endif`,yE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ME=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,EE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,TE="gl_FragColor = linearToOutputTexel( gl_FragColor );",AE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,RE=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,CE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,wE=`#ifdef USE_ENVMAP
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
#endif`,NE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,DE=`#ifdef USE_ENVMAP
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
#endif`,UE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,LE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,OE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,PE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,IE=`#ifdef USE_GRADIENTMAP
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
}`,FE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,BE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,HE=`uniform bool receiveShadow;
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
#endif
#include <lightprobes_pars_fragment>`,GE=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,VE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,XE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,WE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,qE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,YE=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ZE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,KE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,QE=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,JE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$E=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ib=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ab=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sb=`#if defined( USE_POINTS_UV )
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
#endif`,rb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ob=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ub=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fb=`#ifdef USE_MORPHTARGETS
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
#endif`,db=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_b=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xb=`#ifdef USE_NORMALMAP
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
#endif`,vb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Eb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Tb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ab=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Db=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ub=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,Ob=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,Pb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ib=`#ifdef USE_SKINNING
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
#endif`,Fb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zb=`#ifdef USE_SKINNING
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
#endif`,Bb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kb=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xb=`#ifdef USE_TRANSMISSION
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
#endif`,jb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kb=`uniform sampler2D t2D;
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
}`,Qb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t1=`#include <common>
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
}`,n1=`#if DEPTH_PACKING == 3200
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
}`,i1=`#define DISTANCE
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
}`,a1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,s1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,r1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o1=`uniform float scale;
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
}`,l1=`uniform vec3 diffuse;
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
}`,c1=`#include <common>
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
}`,u1=`uniform vec3 diffuse;
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
}`,f1=`#define LAMBERT
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
}`,d1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,h1=`#define MATCAP
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
}`,p1=`#define MATCAP
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
}`,m1=`#define NORMAL
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
}`,g1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_1=`#define PHONG
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
}`,x1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,v1=`#define STANDARD
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
}`,S1=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,y1=`#define TOON
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
}`,M1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,E1=`uniform float size;
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
}`,b1=`uniform vec3 diffuse;
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
}`,T1=`#include <common>
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
}`,A1=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,R1=`uniform float rotation;
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
}`,C1=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:ZM,alphahash_pars_fragment:KM,alphamap_fragment:QM,alphamap_pars_fragment:JM,alphatest_fragment:$M,alphatest_pars_fragment:eE,aomap_fragment:tE,aomap_pars_fragment:nE,batching_pars_vertex:iE,batching_vertex:aE,begin_vertex:sE,beginnormal_vertex:rE,bsdfs:oE,iridescence_fragment:lE,bumpmap_pars_fragment:cE,clipping_planes_fragment:uE,clipping_planes_pars_fragment:fE,clipping_planes_pars_vertex:dE,clipping_planes_vertex:hE,color_fragment:pE,color_pars_fragment:mE,color_pars_vertex:gE,color_vertex:_E,common:xE,cube_uv_reflection_fragment:vE,defaultnormal_vertex:SE,displacementmap_pars_vertex:yE,displacementmap_vertex:ME,emissivemap_fragment:EE,emissivemap_pars_fragment:bE,colorspace_fragment:TE,colorspace_pars_fragment:AE,envmap_fragment:RE,envmap_common_pars_fragment:CE,envmap_pars_fragment:wE,envmap_pars_vertex:NE,envmap_physical_pars_fragment:GE,envmap_vertex:DE,fog_vertex:UE,fog_pars_vertex:LE,fog_fragment:OE,fog_pars_fragment:PE,gradientmap_pars_fragment:IE,lightmap_pars_fragment:FE,lights_lambert_fragment:zE,lights_lambert_pars_fragment:BE,lights_pars_begin:HE,lights_toon_fragment:VE,lights_toon_pars_fragment:kE,lights_phong_fragment:XE,lights_phong_pars_fragment:jE,lights_physical_fragment:WE,lights_physical_pars_fragment:qE,lights_fragment_begin:YE,lights_fragment_maps:ZE,lights_fragment_end:KE,lightprobes_pars_fragment:QE,logdepthbuf_fragment:JE,logdepthbuf_pars_fragment:$E,logdepthbuf_pars_vertex:eb,logdepthbuf_vertex:tb,map_fragment:nb,map_pars_fragment:ib,map_particle_fragment:ab,map_particle_pars_fragment:sb,metalnessmap_fragment:rb,metalnessmap_pars_fragment:ob,morphinstance_vertex:lb,morphcolor_vertex:cb,morphnormal_vertex:ub,morphtarget_pars_vertex:fb,morphtarget_vertex:db,normal_fragment_begin:hb,normal_fragment_maps:pb,normal_pars_fragment:mb,normal_pars_vertex:gb,normal_vertex:_b,normalmap_pars_fragment:xb,clearcoat_normal_fragment_begin:vb,clearcoat_normal_fragment_maps:Sb,clearcoat_pars_fragment:yb,iridescence_pars_fragment:Mb,opaque_fragment:Eb,packing:bb,premultiplied_alpha_fragment:Tb,project_vertex:Ab,dithering_fragment:Rb,dithering_pars_fragment:Cb,roughnessmap_fragment:wb,roughnessmap_pars_fragment:Nb,shadowmap_pars_fragment:Db,shadowmap_pars_vertex:Ub,shadowmap_vertex:Lb,shadowmask_pars_fragment:Ob,skinbase_vertex:Pb,skinning_pars_vertex:Ib,skinning_vertex:Fb,skinnormal_vertex:zb,specularmap_fragment:Bb,specularmap_pars_fragment:Hb,tonemapping_fragment:Gb,tonemapping_pars_fragment:Vb,transmission_fragment:kb,transmission_pars_fragment:Xb,uv_pars_fragment:jb,uv_pars_vertex:Wb,uv_vertex:qb,worldpos_vertex:Yb,background_vert:Zb,background_frag:Kb,backgroundCube_vert:Qb,backgroundCube_frag:Jb,cube_vert:$b,cube_frag:e1,depth_vert:t1,depth_frag:n1,distance_vert:i1,distance_frag:a1,equirect_vert:s1,equirect_frag:r1,linedashed_vert:o1,linedashed_frag:l1,meshbasic_vert:c1,meshbasic_frag:u1,meshlambert_vert:f1,meshlambert_frag:d1,meshmatcap_vert:h1,meshmatcap_frag:p1,meshnormal_vert:m1,meshnormal_frag:g1,meshphong_vert:_1,meshphong_frag:x1,meshphysical_vert:v1,meshphysical_frag:S1,meshtoon_vert:y1,meshtoon_frag:M1,points_vert:E1,points_frag:b1,shadow_vert:T1,shadow_frag:A1,sprite_vert:R1,sprite_frag:C1},Be={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ie},probesMax:{value:new ie},probesResolution:{value:new ie}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Gi={basic:{uniforms:Hn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Hn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Dt(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Hn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Hn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Hn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new Dt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Hn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Hn([Be.points,Be.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Hn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Hn([Be.common,Be.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Hn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Hn([Be.sprite,Be.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:Hn([Be.common,Be.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:Hn([Be.lights,Be.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Gi.physical={uniforms:Hn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Uc={r:0,b:0,g:0},w1=new on,Rx=new lt;Rx.set(-1,0,0,0,1,0,0,0,1);function N1(o,t,i,s,l,c){const d=new Dt(0);let p=l===!0?0:1,m,h,v=null,S=0,g=null;function x(D){let F=D.isScene===!0?D.background:null;if(F&&F.isTexture){const L=D.backgroundBlurriness>0;F=t.get(F,L)}return F}function T(D){let F=!1;const L=x(D);L===null?M(d,p):L&&L.isColor&&(M(L,1),F=!0);const X=o.xr.getEnvironmentBlendMode();X==="additive"?i.buffers.color.setClear(0,0,0,1,c):X==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||F)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function N(D,F){const L=x(F);L&&(L.isCubeTexture||L.mapping===Wc)?(h===void 0&&(h=new In(new Gr(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:zr(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(X,P,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=L,h.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(w1.makeRotationFromEuler(F.backgroundRotation)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Rx),h.material.toneMapped=bt.getTransfer(L.colorSpace)!==Vt,(v!==L||S!==L.version||g!==o.toneMapping)&&(h.material.needsUpdate=!0,v=L,S=L.version,g=o.toneMapping),h.layers.enableAll(),D.unshift(h,h.geometry,h.material,0,0,null)):L&&L.isTexture&&(m===void 0&&(m=new In(new Yc(2,2),new qi({name:"BackgroundMaterial",uniforms:zr(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=L,m.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,m.material.toneMapped=bt.getTransfer(L.colorSpace)!==Vt,L.matrixAutoUpdate===!0&&L.updateMatrix(),m.material.uniforms.uvTransform.value.copy(L.matrix),(v!==L||S!==L.version||g!==o.toneMapping)&&(m.material.needsUpdate=!0,v=L,S=L.version,g=o.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function M(D,F){D.getRGB(Uc,Ex(o)),i.buffers.color.setClear(Uc.r,Uc.g,Uc.b,F,c)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,F=1){d.set(D),p=F,M(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,M(d,p)},render:T,addToRenderList:N,dispose:y}}function D1(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,d=!1;function p(G,Y,le,ue,W){let U=!1;const B=S(G,ue,le,Y);c!==B&&(c=B,h(c.object)),U=x(G,ue,le,W),U&&T(G,ue,le,W),W!==null&&t.update(W,o.ELEMENT_ARRAY_BUFFER),(U||d)&&(d=!1,L(G,Y,le,ue),W!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function m(){return o.createVertexArray()}function h(G){return o.bindVertexArray(G)}function v(G){return o.deleteVertexArray(G)}function S(G,Y,le,ue){const W=ue.wireframe===!0;let U=s[Y.id];U===void 0&&(U={},s[Y.id]=U);const B=G.isInstancedMesh===!0?G.id:0;let oe=U[B];oe===void 0&&(oe={},U[B]=oe);let me=oe[le.id];me===void 0&&(me={},oe[le.id]=me);let ye=me[W];return ye===void 0&&(ye=g(m()),me[W]=ye),ye}function g(G){const Y=[],le=[],ue=[];for(let W=0;W<i;W++)Y[W]=0,le[W]=0,ue[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:le,attributeDivisors:ue,object:G,attributes:{},index:null}}function x(G,Y,le,ue){const W=c.attributes,U=Y.attributes;let B=0;const oe=le.getAttributes();for(const me in oe)if(oe[me].location>=0){const O=W[me];let Q=U[me];if(Q===void 0&&(me==="instanceMatrix"&&G.instanceMatrix&&(Q=G.instanceMatrix),me==="instanceColor"&&G.instanceColor&&(Q=G.instanceColor)),O===void 0||O.attribute!==Q||Q&&O.data!==Q.data)return!0;B++}return c.attributesNum!==B||c.index!==ue}function T(G,Y,le,ue){const W={},U=Y.attributes;let B=0;const oe=le.getAttributes();for(const me in oe)if(oe[me].location>=0){let O=U[me];O===void 0&&(me==="instanceMatrix"&&G.instanceMatrix&&(O=G.instanceMatrix),me==="instanceColor"&&G.instanceColor&&(O=G.instanceColor));const Q={};Q.attribute=O,O&&O.data&&(Q.data=O.data),W[me]=Q,B++}c.attributes=W,c.attributesNum=B,c.index=ue}function N(){const G=c.newAttributes;for(let Y=0,le=G.length;Y<le;Y++)G[Y]=0}function M(G){y(G,0)}function y(G,Y){const le=c.newAttributes,ue=c.enabledAttributes,W=c.attributeDivisors;le[G]=1,ue[G]===0&&(o.enableVertexAttribArray(G),ue[G]=1),W[G]!==Y&&(o.vertexAttribDivisor(G,Y),W[G]=Y)}function D(){const G=c.newAttributes,Y=c.enabledAttributes;for(let le=0,ue=Y.length;le<ue;le++)Y[le]!==G[le]&&(o.disableVertexAttribArray(le),Y[le]=0)}function F(G,Y,le,ue,W,U,B){B===!0?o.vertexAttribIPointer(G,Y,le,W,U):o.vertexAttribPointer(G,Y,le,ue,W,U)}function L(G,Y,le,ue){N();const W=ue.attributes,U=le.getAttributes(),B=Y.defaultAttributeValues;for(const oe in U){const me=U[oe];if(me.location>=0){let ye=W[oe];if(ye===void 0&&(oe==="instanceMatrix"&&G.instanceMatrix&&(ye=G.instanceMatrix),oe==="instanceColor"&&G.instanceColor&&(ye=G.instanceColor)),ye!==void 0){const O=ye.normalized,Q=ye.itemSize,ve=t.get(ye);if(ve===void 0)continue;const Te=ve.buffer,Re=ve.type,re=ve.bytesPerElement,Se=Re===o.INT||Re===o.UNSIGNED_INT||ye.gpuType===Bh;if(ye.isInterleavedBufferAttribute){const be=ye.data,He=be.stride,$e=ye.offset;if(be.isInstancedInterleavedBuffer){for(let Ye=0;Ye<me.locationSize;Ye++)y(me.location+Ye,be.meshPerAttribute);G.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Ye=0;Ye<me.locationSize;Ye++)M(me.location+Ye);o.bindBuffer(o.ARRAY_BUFFER,Te);for(let Ye=0;Ye<me.locationSize;Ye++)F(me.location+Ye,Q/me.locationSize,Re,O,He*re,($e+Q/me.locationSize*Ye)*re,Se)}else{if(ye.isInstancedBufferAttribute){for(let be=0;be<me.locationSize;be++)y(me.location+be,ye.meshPerAttribute);G.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let be=0;be<me.locationSize;be++)M(me.location+be);o.bindBuffer(o.ARRAY_BUFFER,Te);for(let be=0;be<me.locationSize;be++)F(me.location+be,Q/me.locationSize,Re,O,Q*re,Q/me.locationSize*be*re,Se)}}else if(B!==void 0){const O=B[oe];if(O!==void 0)switch(O.length){case 2:o.vertexAttrib2fv(me.location,O);break;case 3:o.vertexAttrib3fv(me.location,O);break;case 4:o.vertexAttrib4fv(me.location,O);break;default:o.vertexAttrib1fv(me.location,O)}}}}D()}function X(){I();for(const G in s){const Y=s[G];for(const le in Y){const ue=Y[le];for(const W in ue){const U=ue[W];for(const B in U)v(U[B].object),delete U[B];delete ue[W]}}delete s[G]}}function P(G){if(s[G.id]===void 0)return;const Y=s[G.id];for(const le in Y){const ue=Y[le];for(const W in ue){const U=ue[W];for(const B in U)v(U[B].object),delete U[B];delete ue[W]}}delete s[G.id]}function z(G){for(const Y in s){const le=s[Y];for(const ue in le){const W=le[ue];if(W[G.id]===void 0)continue;const U=W[G.id];for(const B in U)v(U[B].object),delete U[B];delete W[G.id]}}}function b(G){for(const Y in s){const le=s[Y],ue=G.isInstancedMesh===!0?G.id:0,W=le[ue];if(W!==void 0){for(const U in W){const B=W[U];for(const oe in B)v(B[oe].object),delete B[oe];delete W[U]}delete le[ue],Object.keys(le).length===0&&delete s[Y]}}}function I(){Z(),d=!0,c!==l&&(c=l,h(c.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:I,resetDefaultState:Z,dispose:X,releaseStatesOfGeometry:P,releaseStatesOfObject:b,releaseStatesOfProgram:z,initAttributes:N,enableAttribute:M,disableUnusedAttributes:D}}function U1(o,t,i){let s;function l(m){s=m}function c(m,h){o.drawArrays(s,m,h),i.update(h,s,1)}function d(m,h,v){v!==0&&(o.drawArraysInstanced(s,m,h,v),i.update(h,s,v))}function p(m,h,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,h,0,v);let g=0;for(let x=0;x<v;x++)g+=h[x];i.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=p}function L1(o,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(z){return!(z!==Ui&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(z){const b=z===ya&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==ui&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Vi&&!b)}function m(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const v=m(h);v!==h&&(it("WebGLRenderer:",h,"not supported, using",v,"instead."),h=v);const S=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&it("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),N=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),D=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),F=o.getParameter(o.MAX_VARYING_VECTORS),L=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),X=o.getParameter(o.MAX_SAMPLES),P=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:S,reversedDepthBuffer:g,maxTextures:x,maxVertexTextures:T,maxTextureSize:N,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:D,maxVaryings:F,maxFragmentUniforms:L,maxSamples:X,samples:P}}function O1(o){const t=this;let i=null,s=0,l=!1,c=!1;const d=new Us,p=new lt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,g){const x=S.length!==0||g||s!==0||l;return l=g,s=S.length,x},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(S,g){i=v(S,g,0)},this.setState=function(S,g,x){const T=S.clippingPlanes,N=S.clipIntersection,M=S.clipShadows,y=o.get(S);if(!l||T===null||T.length===0||c&&!M)c?v(null):h();else{const D=c?0:s,F=D*4;let L=y.clippingState||null;m.value=L,L=v(T,g,F,x);for(let X=0;X!==F;++X)L[X]=i[X];y.clippingState=L,this.numIntersection=N?this.numPlanes:0,this.numPlanes+=D}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function v(S,g,x,T){const N=S!==null?S.length:0;let M=null;if(N!==0){if(M=m.value,T!==!0||M===null){const y=x+N*4,D=g.matrixWorldInverse;p.getNormalMatrix(D),(M===null||M.length<y)&&(M=new Float32Array(y));for(let F=0,L=x;F!==N;++F,L+=4)d.copy(S[F]).applyMatrix4(D,p),d.normal.toArray(M,L),M[L+3]=d.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=N,t.numIntersection=0,M}}const rs=4,b_=[.125,.215,.35,.446,.526,.582],Os=20,P1=256,ko=new Kh,T_=new Dt;let Fd=null,zd=0,Bd=0,Hd=!1;const I1=new ie;class A_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:d=256,position:p=I1}=c;Fd=this._renderer.getRenderTarget(),zd=this._renderer.getActiveCubeFace(),Bd=this._renderer.getActiveMipmapLevel(),Hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=w_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=C_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Fd,zd,Bd),this._renderer.xr.enabled=Hd,t.scissorTest=!1,Dr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Fs||t.mapping===Ir?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fd=this._renderer.getRenderTarget(),zd=this._renderer.getActiveCubeFace(),Bd=this._renderer.getActiveMipmapLevel(),Hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:ya,format:Ui,colorSpace:Vc,depthBuffer:!1},l=R_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=R_(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=F1(c)),this._blurMaterial=B1(c,t,i),this._ggxMaterial=z1(c,t,i)}return l}_compileMaterial(t){const i=new In(new Mi,t);this._renderer.compile(i,ko)}_sceneToCubeUV(t,i,s,l,c){const m=new ci(90,1,i,s),h=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],S=this._renderer,g=S.autoClear,x=S.toneMapping;S.getClearColor(T_),S.toneMapping=Xi,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(l),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new In(new Gr,new vx({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1})));const N=this._backgroundBox,M=N.material;let y=!1;const D=t.background;D?D.isColor&&(M.color.copy(D),t.background=null,y=!0):(M.color.copy(T_),y=!0);for(let F=0;F<6;F++){const L=F%3;L===0?(m.up.set(0,h[F],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[F],c.y,c.z)):L===1?(m.up.set(0,0,h[F]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[F],c.z)):(m.up.set(0,h[F],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[F]));const X=this._cubeSize;Dr(l,L*X,F>2?X:0,X,X),S.setRenderTarget(l),y&&S.render(N,m),S.render(t,m)}S.toneMapping=x,S.autoClear=g,t.background=D}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Fs||t.mapping===Ir;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=w_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=C_());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const p=c.uniforms;p.envMap.value=t;const m=this._cubeSize;Dr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,ko)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[s];p.material=d;const m=d.uniforms,h=s/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),S=Math.sqrt(h*h-v*v),g=0+h*1.25,x=S*g,{_lodMax:T}=this,N=this._sizeLods[s],M=3*N*(s>T-rs?s-T+rs:0),y=4*(this._cubeSize-N);m.envMap.value=t.texture,m.roughness.value=x,m.mipInt.value=T-i,Dr(c,M,y,3*N,2*N),l.setRenderTarget(c),l.render(p,ko),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-s,Dr(t,M,y,3*N,2*N),l.setRenderTarget(t),l.render(p,ko)}_blur(t,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,s,l,"latitudinal",c),this._halfBlur(d,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,d,p){const m=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&At("blur direction must be either latitudinal or longitudinal!");const v=3,S=this._lodMeshes[l];S.material=h;const g=h.uniforms,x=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*Os-1),N=c/T,M=isFinite(c)?1+Math.floor(v*N):Os;M>Os&&it(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Os}`);const y=[];let D=0;for(let z=0;z<Os;++z){const b=z/N,I=Math.exp(-b*b/2);y.push(I),z===0?D+=I:z<M&&(D+=2*I)}for(let z=0;z<y.length;z++)y[z]=y[z]/D;g.envMap.value=t.texture,g.samples.value=M,g.weights.value=y,g.latitudinal.value=d==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:F}=this;g.dTheta.value=T,g.mipInt.value=F-s;const L=this._sizeLods[l],X=3*L*(l>F-rs?l-F+rs:0),P=4*(this._cubeSize-L);Dr(i,X,P,3*L,2*L),m.setRenderTarget(i),m.render(S,ko)}}function F1(o){const t=[],i=[],s=[];let l=o;const c=o-rs+1+b_.length;for(let d=0;d<c;d++){const p=Math.pow(2,l);t.push(p);let m=1/p;d>o-rs?m=b_[d-o+rs-1]:d===0&&(m=0),i.push(m);const h=1/(p-2),v=-h,S=1+h,g=[v,v,S,v,S,S,v,v,S,S,v,S],x=6,T=6,N=3,M=2,y=1,D=new Float32Array(N*T*x),F=new Float32Array(M*T*x),L=new Float32Array(y*T*x);for(let P=0;P<x;P++){const z=P%3*2/3-1,b=P>2?0:-1,I=[z,b,0,z+2/3,b,0,z+2/3,b+1,0,z,b,0,z+2/3,b+1,0,z,b+1,0];D.set(I,N*T*P),F.set(g,M*T*P);const Z=[P,P,P,P,P,P];L.set(Z,y*T*P)}const X=new Mi;X.setAttribute("position",new Li(D,N)),X.setAttribute("uv",new Li(F,M)),X.setAttribute("faceIndex",new Li(L,y)),s.push(new In(X,null)),l>rs&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function R_(o,t,i){const s=new ji(o,t,i);return s.texture.mapping=Wc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Dr(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function z1(o,t,i){return new qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:P1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function B1(o,t,i){const s=new Float32Array(Os),l=new ie(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:Os,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function C_(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function w_(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function Zc(){return`

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
	`}class Cx extends ji{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new yx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Gr(5,5,5),c=new qi({name:"CubemapFromEquirect",uniforms:zr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Yn,blending:va});c.uniforms.tEquirect.value=i;const d=new In(l,c),p=i.minFilter;return i.minFilter===Ps&&(i.minFilter=Fn),new XM(1,10,this).update(t,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,s,l);t.setRenderTarget(c)}}function H1(o){let t=new WeakMap,i=new WeakMap,s=null;function l(g,x=!1){return g==null?null:x?d(g):c(g)}function c(g){if(g&&g.isTexture){const x=g.mapping;if(x===od||x===ld)if(t.has(g)){const T=t.get(g).texture;return p(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const N=new Cx(T.height);return N.fromEquirectangularTexture(o,g),t.set(g,N),g.addEventListener("dispose",h),p(N.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const x=g.mapping,T=x===od||x===ld,N=x===Fs||x===Ir;if(T||N){let M=i.get(g);const y=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return s===null&&(s=new A_(o)),M=T?s.fromEquirectangular(g,M):s.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),M.texture;if(M!==void 0)return M.texture;{const D=g.image;return T&&D&&D.height>0||N&&D&&m(D)?(s===null&&(s=new A_(o)),M=T?s.fromEquirectangular(g):s.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),g.addEventListener("dispose",v),M.texture):null}}}return g}function p(g,x){return x===od?g.mapping=Fs:x===ld&&(g.mapping=Ir),g}function m(g){let x=0;const T=6;for(let N=0;N<T;N++)g[N]!==void 0&&x++;return x===T}function h(g){const x=g.target;x.removeEventListener("dispose",h);const T=t.get(x);T!==void 0&&(t.delete(x),T.dispose())}function v(g){const x=g.target;x.removeEventListener("dispose",v);const T=i.get(x);T!==void 0&&(i.delete(x),T.dispose())}function S(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:S}}function G1(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=o.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Uh("WebGLRenderer: "+s+" extension not supported."),l}}}function V1(o,t,i,s){const l={},c=new WeakMap;function d(S){const g=S.target;g.index!==null&&t.remove(g.index);for(const T in g.attributes)t.remove(g.attributes[T]);g.removeEventListener("dispose",d),delete l[g.id];const x=c.get(g);x&&(t.remove(x),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(S,g){return l[g.id]===!0||(g.addEventListener("dispose",d),l[g.id]=!0,i.memory.geometries++),g}function m(S){const g=S.attributes;for(const x in g)t.update(g[x],o.ARRAY_BUFFER)}function h(S){const g=[],x=S.index,T=S.attributes.position;let N=0;if(T===void 0)return;if(x!==null){const D=x.array;N=x.version;for(let F=0,L=D.length;F<L;F+=3){const X=D[F+0],P=D[F+1],z=D[F+2];g.push(X,P,P,z,z,X)}}else{const D=T.array;N=T.version;for(let F=0,L=D.length/3-1;F<L;F+=3){const X=F+0,P=F+1,z=F+2;g.push(X,P,P,z,z,X)}}const M=new(T.count>=65535?_x:gx)(g,1);M.version=N;const y=c.get(S);y&&t.remove(y),c.set(S,M)}function v(S){const g=c.get(S);if(g){const x=S.index;x!==null&&g.version<x.version&&h(S)}else h(S);return c.get(S)}return{get:p,update:m,getWireframeAttribute:v}}function k1(o,t,i){let s;function l(S){s=S}let c,d;function p(S){c=S.type,d=S.bytesPerElement}function m(S,g){o.drawElements(s,g,c,S*d),i.update(g,s,1)}function h(S,g,x){x!==0&&(o.drawElementsInstanced(s,g,c,S*d,x),i.update(g,s,x))}function v(S,g,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,S,0,x);let N=0;for(let M=0;M<x;M++)N+=g[M];i.update(N,s,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=v}function X1(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,p){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=p*(c/3);break;case o.LINES:i.lines+=p*(c/2);break;case o.LINE_STRIP:i.lines+=p*(c-1);break;case o.LINE_LOOP:i.lines+=p*c;break;case o.POINTS:i.points+=p*c;break;default:At("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function j1(o,t,i){const s=new WeakMap,l=new rn;function c(d,p,m){const h=d.morphTargetInfluences,v=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,S=v!==void 0?v.length:0;let g=s.get(p);if(g===void 0||g.count!==S){let Z=function(){b.dispose(),s.delete(p),p.removeEventListener("dispose",Z)};var x=Z;g!==void 0&&g.texture.dispose();const T=p.morphAttributes.position!==void 0,N=p.morphAttributes.normal!==void 0,M=p.morphAttributes.color!==void 0,y=p.morphAttributes.position||[],D=p.morphAttributes.normal||[],F=p.morphAttributes.color||[];let L=0;T===!0&&(L=1),N===!0&&(L=2),M===!0&&(L=3);let X=p.attributes.position.count*L,P=1;X>t.maxTextureSize&&(P=Math.ceil(X/t.maxTextureSize),X=t.maxTextureSize);const z=new Float32Array(X*P*4*S),b=new hx(z,X,P,S);b.type=Vi,b.needsUpdate=!0;const I=L*4;for(let G=0;G<S;G++){const Y=y[G],le=D[G],ue=F[G],W=X*P*4*G;for(let U=0;U<Y.count;U++){const B=U*I;T===!0&&(l.fromBufferAttribute(Y,U),z[W+B+0]=l.x,z[W+B+1]=l.y,z[W+B+2]=l.z,z[W+B+3]=0),N===!0&&(l.fromBufferAttribute(le,U),z[W+B+4]=l.x,z[W+B+5]=l.y,z[W+B+6]=l.z,z[W+B+7]=0),M===!0&&(l.fromBufferAttribute(ue,U),z[W+B+8]=l.x,z[W+B+9]=l.y,z[W+B+10]=l.z,z[W+B+11]=ue.itemSize===4?l.w:1)}}g={count:S,texture:b,size:new Ut(X,P)},s.set(p,g),p.addEventListener("dispose",Z)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let T=0;for(let M=0;M<h.length;M++)T+=h[M];const N=p.morphTargetsRelative?1:1-T;m.getUniforms().setValue(o,"morphTargetBaseInfluence",N),m.getUniforms().setValue(o,"morphTargetInfluences",h)}m.getUniforms().setValue(o,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}return{update:c}}function W1(o,t,i,s,l){let c=new WeakMap;function d(h){const v=l.render.frame,S=h.geometry,g=t.get(h,S);if(c.get(g)!==v&&(t.update(g),c.set(g,v)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==v&&(i.update(h.instanceMatrix,o.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,o.ARRAY_BUFFER),c.set(h,v))),h.isSkinnedMesh){const x=h.skeleton;c.get(x)!==v&&(x.update(),c.set(x,v))}return g}function p(){c=new WeakMap}function m(h){const v=h.target;v.removeEventListener("dispose",m),s.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:d,dispose:p}}const q1={[Q_]:"LINEAR_TONE_MAPPING",[J_]:"REINHARD_TONE_MAPPING",[$_]:"CINEON_TONE_MAPPING",[ex]:"ACES_FILMIC_TONE_MAPPING",[nx]:"AGX_TONE_MAPPING",[ix]:"NEUTRAL_TONE_MAPPING",[tx]:"CUSTOM_TONE_MAPPING"};function Y1(o,t,i,s,l){const c=new ji(t,i,{type:o,depthBuffer:s,stencilBuffer:l,depthTexture:s?new Fr(t,i):void 0}),d=new ji(t,i,{type:ya,depthBuffer:!1,stencilBuffer:!1}),p=new Mi;p.setAttribute("position",new yi([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new yi([0,2,0,0,2,0],2));const m=new zM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new In(p,m),v=new Kh(-1,1,1,-1,0,1);let S=null,g=null,x=!1,T,N=null,M=[],y=!1;this.setSize=function(D,F){c.setSize(D,F),d.setSize(D,F);for(let L=0;L<M.length;L++){const X=M[L];X.setSize&&X.setSize(D,F)}},this.setEffects=function(D){M=D,y=M.length>0&&M[0].isRenderPass===!0;const F=c.width,L=c.height;for(let X=0;X<M.length;X++){const P=M[X];P.setSize&&P.setSize(F,L)}},this.begin=function(D,F){if(x||D.toneMapping===Xi&&M.length===0)return!1;if(N=F,F!==null){const L=F.width,X=F.height;(c.width!==L||c.height!==X)&&this.setSize(L,X)}return y===!1&&D.setRenderTarget(c),T=D.toneMapping,D.toneMapping=Xi,!0},this.hasRenderPass=function(){return y},this.end=function(D,F){D.toneMapping=T,x=!0;let L=c,X=d;for(let P=0;P<M.length;P++){const z=M[P];if(z.enabled!==!1&&(z.render(D,X,L,F),z.needsSwap!==!1)){const b=L;L=X,X=b}}if(S!==D.outputColorSpace||g!==D.toneMapping){S=D.outputColorSpace,g=D.toneMapping,m.defines={},bt.getTransfer(S)===Vt&&(m.defines.SRGB_TRANSFER="");const P=q1[g];P&&(m.defines[P]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=L.texture,D.setRenderTarget(N),D.render(h,v),N=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),d.dispose(),p.dispose(),m.dispose()}}const wx=new zn,Ph=new Fr(1,1),Nx=new hx,Dx=new hM,Ux=new yx,N_=[],D_=[],U_=new Float32Array(16),L_=new Float32Array(9),O_=new Float32Array(4);function Vr(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let c=N_[l];if(c===void 0&&(c=new Float32Array(l),N_[l]=c),t!==0){s.toArray(c,0);for(let d=1,p=0;d!==t;++d)p+=i,o[d].toArray(c,p)}return c}function vn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function Sn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function Kc(o,t){let i=D_[t];i===void 0&&(i=new Int32Array(t),D_[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function Z1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function K1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;o.uniform2fv(this.addr,t),Sn(i,t)}}function Q1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(vn(i,t))return;o.uniform3fv(this.addr,t),Sn(i,t)}}function J1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;o.uniform4fv(this.addr,t),Sn(i,t)}}function $1(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),Sn(i,t)}else{if(vn(i,s))return;O_.set(s),o.uniformMatrix2fv(this.addr,!1,O_),Sn(i,s)}}function eT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),Sn(i,t)}else{if(vn(i,s))return;L_.set(s),o.uniformMatrix3fv(this.addr,!1,L_),Sn(i,s)}}function tT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),Sn(i,t)}else{if(vn(i,s))return;U_.set(s),o.uniformMatrix4fv(this.addr,!1,U_),Sn(i,s)}}function nT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function iT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;o.uniform2iv(this.addr,t),Sn(i,t)}}function aT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;o.uniform3iv(this.addr,t),Sn(i,t)}}function sT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;o.uniform4iv(this.addr,t),Sn(i,t)}}function rT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function oT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;o.uniform2uiv(this.addr,t),Sn(i,t)}}function lT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;o.uniform3uiv(this.addr,t),Sn(i,t)}}function cT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;o.uniform4uiv(this.addr,t),Sn(i,t)}}function uT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Ph.compareFunction=i.isReversedDepthBuffer()?Wh:jh,c=Ph):c=wx,i.setTexture2D(t||c,l)}function fT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Dx,l)}function dT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Ux,l)}function hT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Nx,l)}function pT(o){switch(o){case 5126:return Z1;case 35664:return K1;case 35665:return Q1;case 35666:return J1;case 35674:return $1;case 35675:return eT;case 35676:return tT;case 5124:case 35670:return nT;case 35667:case 35671:return iT;case 35668:case 35672:return aT;case 35669:case 35673:return sT;case 5125:return rT;case 36294:return oT;case 36295:return lT;case 36296:return cT;case 35678:case 36198:case 36298:case 36306:case 35682:return uT;case 35679:case 36299:case 36307:return fT;case 35680:case 36300:case 36308:case 36293:return dT;case 36289:case 36303:case 36311:case 36292:return hT}}function mT(o,t){o.uniform1fv(this.addr,t)}function gT(o,t){const i=Vr(t,this.size,2);o.uniform2fv(this.addr,i)}function _T(o,t){const i=Vr(t,this.size,3);o.uniform3fv(this.addr,i)}function xT(o,t){const i=Vr(t,this.size,4);o.uniform4fv(this.addr,i)}function vT(o,t){const i=Vr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function ST(o,t){const i=Vr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function yT(o,t){const i=Vr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function MT(o,t){o.uniform1iv(this.addr,t)}function ET(o,t){o.uniform2iv(this.addr,t)}function bT(o,t){o.uniform3iv(this.addr,t)}function TT(o,t){o.uniform4iv(this.addr,t)}function AT(o,t){o.uniform1uiv(this.addr,t)}function RT(o,t){o.uniform2uiv(this.addr,t)}function CT(o,t){o.uniform3uiv(this.addr,t)}function wT(o,t){o.uniform4uiv(this.addr,t)}function NT(o,t,i){const s=this.cache,l=t.length,c=Kc(i,l);vn(s,c)||(o.uniform1iv(this.addr,c),Sn(s,c));let d;this.type===o.SAMPLER_2D_SHADOW?d=Ph:d=wx;for(let p=0;p!==l;++p)i.setTexture2D(t[p]||d,c[p])}function DT(o,t,i){const s=this.cache,l=t.length,c=Kc(i,l);vn(s,c)||(o.uniform1iv(this.addr,c),Sn(s,c));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||Dx,c[d])}function UT(o,t,i){const s=this.cache,l=t.length,c=Kc(i,l);vn(s,c)||(o.uniform1iv(this.addr,c),Sn(s,c));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||Ux,c[d])}function LT(o,t,i){const s=this.cache,l=t.length,c=Kc(i,l);vn(s,c)||(o.uniform1iv(this.addr,c),Sn(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||Nx,c[d])}function OT(o){switch(o){case 5126:return mT;case 35664:return gT;case 35665:return _T;case 35666:return xT;case 35674:return vT;case 35675:return ST;case 35676:return yT;case 5124:case 35670:return MT;case 35667:case 35671:return ET;case 35668:case 35672:return bT;case 35669:case 35673:return TT;case 5125:return AT;case 36294:return RT;case 36295:return CT;case 36296:return wT;case 35678:case 36198:case 36298:case 36306:case 35682:return NT;case 35679:case 36299:case 36307:return DT;case 35680:case 36300:case 36308:case 36293:return UT;case 36289:case 36303:case 36311:case 36292:return LT}}class PT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=pT(i.type)}}class IT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=OT(i.type)}}class FT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const p=l[c];p.setValue(t,i[p.id],s)}}}const Gd=/(\w+)(\])?(\[|\.)?/g;function P_(o,t){o.seq.push(t),o.map[t.id]=t}function zT(o,t,i){const s=o.name,l=s.length;for(Gd.lastIndex=0;;){const c=Gd.exec(s),d=Gd.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&d+2===l){P_(i,h===void 0?new PT(p,o,t):new IT(p,o,t));break}else{let S=i.map[p];S===void 0&&(S=new FT(p),P_(i,S)),i=S}}}class Bc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const p=t.getActiveUniform(i,d),m=t.getUniformLocation(i,p.name);zT(p,m,this)}const l=[],c=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,d=i.length;c!==d;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const d=t[l];d.id in i&&s.push(d)}return s}}function I_(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const BT=37297;let HT=0;function GT(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let d=l;d<c;d++){const p=d+1;s.push(`${p===t?">":" "} ${p}: ${i[d]}`)}return s.join(`
`)}const F_=new lt;function VT(o){bt._getMatrix(F_,bt.workingColorSpace,o);const t=`mat3( ${F_.elements.map(i=>i.toFixed(4))} )`;switch(bt.getTransfer(o)){case kc:return[t,"LinearTransferOETF"];case Vt:return[t,"sRGBTransferOETF"];default:return it("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function z_(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),c=(o.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const p=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+GT(o.getShaderSource(t),p)}else return c}function kT(o,t){const i=VT(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const XT={[Q_]:"Linear",[J_]:"Reinhard",[$_]:"Cineon",[ex]:"ACESFilmic",[nx]:"AgX",[ix]:"Neutral",[tx]:"Custom"};function jT(o,t){const i=XT[t];return i===void 0?(it("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Lc=new ie;function WT(){bt.getLuminanceCoefficients(Lc);const o=Lc.x.toFixed(4),t=Lc.y.toFixed(4),i=Lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function YT(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function ZT(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(t,l),d=c.name;let p=1;c.type===o.FLOAT_MAT2&&(p=2),c.type===o.FLOAT_MAT3&&(p=3),c.type===o.FLOAT_MAT4&&(p=4),i[d]={type:c.type,location:o.getAttribLocation(t,d),locationSize:p}}return i}function qo(o){return o!==""}function B_(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function H_(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const KT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ih(o){return o.replace(KT,JT)}const QT=new Map;function JT(o,t){let i=pt[t];if(i===void 0){const s=QT.get(t);if(s!==void 0)i=pt[s],it('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Ih(i)}const $T=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function G_(o){return o.replace($T,eA)}function eA(o,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function V_(o){let t=`precision ${o.precision} float;
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
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const tA={[Oc]:"SHADOWMAP_TYPE_PCF",[jo]:"SHADOWMAP_TYPE_VSM"};function nA(o){return tA[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const iA={[Fs]:"ENVMAP_TYPE_CUBE",[Ir]:"ENVMAP_TYPE_CUBE",[Wc]:"ENVMAP_TYPE_CUBE_UV"};function aA(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":iA[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const sA={[Ir]:"ENVMAP_MODE_REFRACTION"};function rA(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":sA[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const oA={[K_]:"ENVMAP_BLENDING_MULTIPLY",[Wy]:"ENVMAP_BLENDING_MIX",[qy]:"ENVMAP_BLENDING_ADD"};function lA(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":oA[o.combine]||"ENVMAP_BLENDING_NONE"}function cA(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function uA(o,t,i,s){const l=o.getContext(),c=i.defines;let d=i.vertexShader,p=i.fragmentShader;const m=nA(i),h=aA(i),v=rA(i),S=lA(i),g=cA(i),x=qT(i),T=YT(c),N=l.createProgram();let M,y,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(qo).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(qo).join(`
`),y.length>0&&(y+=`
`)):(M=[V_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),y=[V_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+v:"",i.envMap?"#define "+S:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Xi?"#define TONE_MAPPING":"",i.toneMapping!==Xi?pt.tonemapping_pars_fragment:"",i.toneMapping!==Xi?jT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,kT("linearToOutputTexel",i.outputColorSpace),WT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(qo).join(`
`)),d=Ih(d),d=B_(d,i),d=H_(d,i),p=Ih(p),p=B_(p,i),p=H_(p,i),d=G_(d),p=G_(p),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,M=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",i.glslVersion===Qg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Qg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const F=D+M+d,L=D+y+p,X=I_(l,l.VERTEX_SHADER,F),P=I_(l,l.FRAGMENT_SHADER,L);l.attachShader(N,X),l.attachShader(N,P),i.index0AttributeName!==void 0?l.bindAttribLocation(N,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(N,0,"position"),l.linkProgram(N);function z(G){if(o.debug.checkShaderErrors){const Y=l.getProgramInfoLog(N)||"",le=l.getShaderInfoLog(X)||"",ue=l.getShaderInfoLog(P)||"",W=Y.trim(),U=le.trim(),B=ue.trim();let oe=!0,me=!0;if(l.getProgramParameter(N,l.LINK_STATUS)===!1)if(oe=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,N,X,P);else{const ye=z_(l,X,"vertex"),O=z_(l,P,"fragment");At("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(N,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+W+`
`+ye+`
`+O)}else W!==""?it("WebGLProgram: Program Info Log:",W):(U===""||B==="")&&(me=!1);me&&(G.diagnostics={runnable:oe,programLog:W,vertexShader:{log:U,prefix:M},fragmentShader:{log:B,prefix:y}})}l.deleteShader(X),l.deleteShader(P),b=new Bc(l,N),I=ZT(l,N)}let b;this.getUniforms=function(){return b===void 0&&z(this),b};let I;this.getAttributes=function(){return I===void 0&&z(this),I};let Z=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Z===!1&&(Z=l.getProgramParameter(N,BT)),Z},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(N),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=HT++,this.cacheKey=t,this.usedTimes=1,this.program=N,this.vertexShader=X,this.fragmentShader=P,this}let fA=0;class dA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new hA(t),i.set(t,s)),s}}class hA{constructor(t){this.id=fA++,this.code=t,this.usedTimes=0}}function pA(o){return o===zs||o===Hc||o===Gc}function mA(o,t,i,s,l,c){const d=new px,p=new dA,m=new Set,h=[],v=new Map,S=s.logarithmicDepthBuffer;let g=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return m.add(b),b===0?"uv":`uv${b}`}function N(b,I,Z,G,Y,le){const ue=G.fog,W=Y.geometry,U=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?G.environment:null,B=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,oe=t.get(b.envMap||U,B),me=oe&&oe.mapping===Wc?oe.image.height:null,ye=x[b.type];b.precision!==null&&(g=s.getMaxPrecision(b.precision),g!==b.precision&&it("WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const O=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Q=O!==void 0?O.length:0;let ve=0;W.morphAttributes.position!==void 0&&(ve=1),W.morphAttributes.normal!==void 0&&(ve=2),W.morphAttributes.color!==void 0&&(ve=3);let Te,Re,re,Se;if(ye){const nt=Gi[ye];Te=nt.vertexShader,Re=nt.fragmentShader}else Te=b.vertexShader,Re=b.fragmentShader,p.update(b),re=p.getVertexShaderID(b),Se=p.getFragmentShaderID(b);const be=o.getRenderTarget(),He=o.state.buffers.depth.getReversed(),$e=Y.isInstancedMesh===!0,Ye=Y.isBatchedMesh===!0,Pt=!!b.map,ct=!!b.matcap,mt=!!oe,Rt=!!b.aoMap,ot=!!b.lightMap,Qt=!!b.bumpMap,et=!!b.normalMap,gt=!!b.displacementMap,V=!!b.emissiveMap,Ke=!!b.metalnessMap,ut=!!b.roughnessMap,kt=b.anisotropy>0,Ce=b.clearcoat>0,Jt=b.dispersion>0,w=b.iridescence>0,E=b.sheen>0,J=b.transmission>0,_e=kt&&!!b.anisotropyMap,Ee=Ce&&!!b.clearcoatMap,we=Ce&&!!b.clearcoatNormalMap,Le=Ce&&!!b.clearcoatRoughnessMap,fe=w&&!!b.iridescenceMap,de=w&&!!b.iridescenceThicknessMap,Oe=E&&!!b.sheenColorMap,Pe=E&&!!b.sheenRoughnessMap,De=!!b.specularMap,Ne=!!b.specularColorMap,at=!!b.specularIntensityMap,st=J&&!!b.transmissionMap,_t=J&&!!b.thicknessMap,k=!!b.gradientMap,Ae=!!b.alphaMap,pe=b.alphaTest>0,ze=!!b.alphaHash,Ue=!!b.extensions;let Me=Xi;b.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(Me=o.toneMapping);const We={shaderID:ye,shaderType:b.type,shaderName:b.name,vertexShader:Te,fragmentShader:Re,defines:b.defines,customVertexShaderID:re,customFragmentShaderID:Se,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:Ye,batchingColor:Ye&&Y._colorsTexture!==null,instancing:$e,instancingColor:$e&&Y.instanceColor!==null,instancingMorph:$e&&Y.morphTexture!==null,outputColorSpace:be===null?o.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:bt.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Pt,matcap:ct,envMap:mt,envMapMode:mt&&oe.mapping,envMapCubeUVHeight:me,aoMap:Rt,lightMap:ot,bumpMap:Qt,normalMap:et,displacementMap:gt,emissiveMap:V,normalMapObjectSpace:et&&b.normalMapType===Ky,normalMapTangentSpace:et&&b.normalMapType===Dh,packedNormalMap:et&&b.normalMapType===Dh&&pA(b.normalMap.format),metalnessMap:Ke,roughnessMap:ut,anisotropy:kt,anisotropyMap:_e,clearcoat:Ce,clearcoatMap:Ee,clearcoatNormalMap:we,clearcoatRoughnessMap:Le,dispersion:Jt,iridescence:w,iridescenceMap:fe,iridescenceThicknessMap:de,sheen:E,sheenColorMap:Oe,sheenRoughnessMap:Pe,specularMap:De,specularColorMap:Ne,specularIntensityMap:at,transmission:J,transmissionMap:st,thicknessMap:_t,gradientMap:k,opaque:b.transparent===!1&&b.blending===Lr&&b.alphaToCoverage===!1,alphaMap:Ae,alphaTest:pe,alphaHash:ze,combine:b.combine,mapUv:Pt&&T(b.map.channel),aoMapUv:Rt&&T(b.aoMap.channel),lightMapUv:ot&&T(b.lightMap.channel),bumpMapUv:Qt&&T(b.bumpMap.channel),normalMapUv:et&&T(b.normalMap.channel),displacementMapUv:gt&&T(b.displacementMap.channel),emissiveMapUv:V&&T(b.emissiveMap.channel),metalnessMapUv:Ke&&T(b.metalnessMap.channel),roughnessMapUv:ut&&T(b.roughnessMap.channel),anisotropyMapUv:_e&&T(b.anisotropyMap.channel),clearcoatMapUv:Ee&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:we&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:de&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&T(b.sheenRoughnessMap.channel),specularMapUv:De&&T(b.specularMap.channel),specularColorMapUv:Ne&&T(b.specularColorMap.channel),specularIntensityMapUv:at&&T(b.specularIntensityMap.channel),transmissionMapUv:st&&T(b.transmissionMap.channel),thicknessMapUv:_t&&T(b.thicknessMap.channel),alphaMapUv:Ae&&T(b.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(et||kt),vertexNormals:!!W.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!W.attributes.uv&&(Pt||Ae),fog:!!ue,useFog:b.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||W.attributes.normal===void 0&&et===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:He,skinning:Y.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ve,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:le.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&Z.length>0,shadowMapType:o.shadowMap.type,toneMapping:Me,decodeVideoTexture:Pt&&b.map.isVideoTexture===!0&&bt.getTransfer(b.map.colorSpace)===Vt,decodeVideoTextureEmissive:V&&b.emissiveMap.isVideoTexture===!0&&bt.getTransfer(b.emissiveMap.colorSpace)===Vt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===_a,flipSided:b.side===Yn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ue&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&b.extensions.multiDraw===!0||Ye)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return We.vertexUv1s=m.has(1),We.vertexUv2s=m.has(2),We.vertexUv3s=m.has(3),m.clear(),We}function M(b){const I=[];if(b.shaderID?I.push(b.shaderID):(I.push(b.customVertexShaderID),I.push(b.customFragmentShaderID)),b.defines!==void 0)for(const Z in b.defines)I.push(Z),I.push(b.defines[Z]);return b.isRawShaderMaterial===!1&&(y(I,b),D(I,b),I.push(o.outputColorSpace)),I.push(b.customProgramCacheKey),I.join()}function y(b,I){b.push(I.precision),b.push(I.outputColorSpace),b.push(I.envMapMode),b.push(I.envMapCubeUVHeight),b.push(I.mapUv),b.push(I.alphaMapUv),b.push(I.lightMapUv),b.push(I.aoMapUv),b.push(I.bumpMapUv),b.push(I.normalMapUv),b.push(I.displacementMapUv),b.push(I.emissiveMapUv),b.push(I.metalnessMapUv),b.push(I.roughnessMapUv),b.push(I.anisotropyMapUv),b.push(I.clearcoatMapUv),b.push(I.clearcoatNormalMapUv),b.push(I.clearcoatRoughnessMapUv),b.push(I.iridescenceMapUv),b.push(I.iridescenceThicknessMapUv),b.push(I.sheenColorMapUv),b.push(I.sheenRoughnessMapUv),b.push(I.specularMapUv),b.push(I.specularColorMapUv),b.push(I.specularIntensityMapUv),b.push(I.transmissionMapUv),b.push(I.thicknessMapUv),b.push(I.combine),b.push(I.fogExp2),b.push(I.sizeAttenuation),b.push(I.morphTargetsCount),b.push(I.morphAttributeCount),b.push(I.numDirLights),b.push(I.numPointLights),b.push(I.numSpotLights),b.push(I.numSpotLightMaps),b.push(I.numHemiLights),b.push(I.numRectAreaLights),b.push(I.numDirLightShadows),b.push(I.numPointLightShadows),b.push(I.numSpotLightShadows),b.push(I.numSpotLightShadowsWithMaps),b.push(I.numLightProbes),b.push(I.shadowMapType),b.push(I.toneMapping),b.push(I.numClippingPlanes),b.push(I.numClipIntersection),b.push(I.depthPacking)}function D(b,I){d.disableAll(),I.instancing&&d.enable(0),I.instancingColor&&d.enable(1),I.instancingMorph&&d.enable(2),I.matcap&&d.enable(3),I.envMap&&d.enable(4),I.normalMapObjectSpace&&d.enable(5),I.normalMapTangentSpace&&d.enable(6),I.clearcoat&&d.enable(7),I.iridescence&&d.enable(8),I.alphaTest&&d.enable(9),I.vertexColors&&d.enable(10),I.vertexAlphas&&d.enable(11),I.vertexUv1s&&d.enable(12),I.vertexUv2s&&d.enable(13),I.vertexUv3s&&d.enable(14),I.vertexTangents&&d.enable(15),I.anisotropy&&d.enable(16),I.alphaHash&&d.enable(17),I.batching&&d.enable(18),I.dispersion&&d.enable(19),I.batchingColor&&d.enable(20),I.gradientMap&&d.enable(21),I.packedNormalMap&&d.enable(22),I.vertexNormals&&d.enable(23),b.push(d.mask),d.disableAll(),I.fog&&d.enable(0),I.useFog&&d.enable(1),I.flatShading&&d.enable(2),I.logarithmicDepthBuffer&&d.enable(3),I.reversedDepthBuffer&&d.enable(4),I.skinning&&d.enable(5),I.morphTargets&&d.enable(6),I.morphNormals&&d.enable(7),I.morphColors&&d.enable(8),I.premultipliedAlpha&&d.enable(9),I.shadowMapEnabled&&d.enable(10),I.doubleSided&&d.enable(11),I.flipSided&&d.enable(12),I.useDepthPacking&&d.enable(13),I.dithering&&d.enable(14),I.transmission&&d.enable(15),I.sheen&&d.enable(16),I.opaque&&d.enable(17),I.pointsUvs&&d.enable(18),I.decodeVideoTexture&&d.enable(19),I.decodeVideoTextureEmissive&&d.enable(20),I.alphaToCoverage&&d.enable(21),I.numLightProbeGrids>0&&d.enable(22),b.push(d.mask)}function F(b){const I=x[b.type];let Z;if(I){const G=Gi[I];Z=PM.clone(G.uniforms)}else Z=b.uniforms;return Z}function L(b,I){let Z=v.get(I);return Z!==void 0?++Z.usedTimes:(Z=new uA(o,I,b,l),h.push(Z),v.set(I,Z)),Z}function X(b){if(--b.usedTimes===0){const I=h.indexOf(b);h[I]=h[h.length-1],h.pop(),v.delete(b.cacheKey),b.destroy()}}function P(b){p.remove(b)}function z(){p.dispose()}return{getParameters:N,getProgramCacheKey:M,getUniforms:F,acquireProgram:L,releaseProgram:X,releaseShaderCache:P,programs:h,dispose:z}}function gA(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let p=o.get(d);return p===void 0&&(p={},o.set(d,p)),p}function s(d){o.delete(d)}function l(d,p,m){o.get(d)[p]=m}function c(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function _A(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function k_(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function X_(){const o=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function d(g){let x=0;return g.isInstancedMesh&&(x+=2),g.isSkinnedMesh&&(x+=1),x}function p(g,x,T,N,M,y){let D=o[t];return D===void 0?(D={id:g.id,object:g,geometry:x,material:T,materialVariant:d(g),groupOrder:N,renderOrder:g.renderOrder,z:M,group:y},o[t]=D):(D.id=g.id,D.object=g,D.geometry=x,D.material=T,D.materialVariant=d(g),D.groupOrder=N,D.renderOrder=g.renderOrder,D.z=M,D.group=y),t++,D}function m(g,x,T,N,M,y){const D=p(g,x,T,N,M,y);T.transmission>0?s.push(D):T.transparent===!0?l.push(D):i.push(D)}function h(g,x,T,N,M,y){const D=p(g,x,T,N,M,y);T.transmission>0?s.unshift(D):T.transparent===!0?l.unshift(D):i.unshift(D)}function v(g,x){i.length>1&&i.sort(g||_A),s.length>1&&s.sort(x||k_),l.length>1&&l.sort(x||k_)}function S(){for(let g=t,x=o.length;g<x;g++){const T=o[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:h,finish:S,sort:v}}function xA(){let o=new WeakMap;function t(s,l){const c=o.get(s);let d;return c===void 0?(d=new X_,o.set(s,[d])):l>=c.length?(d=new X_,c.push(d)):d=c[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function vA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new ie,color:new Dt};break;case"SpotLight":i={position:new ie,direction:new ie,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ie,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ie,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":i={color:new Dt,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return o[t.id]=i,i}}}function SA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let yA=0;function MA(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function EA(o){const t=new vA,i=SA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new ie);const l=new ie,c=new on,d=new on;function p(h){let v=0,S=0,g=0;for(let I=0;I<9;I++)s.probe[I].set(0,0,0);let x=0,T=0,N=0,M=0,y=0,D=0,F=0,L=0,X=0,P=0,z=0;h.sort(MA);for(let I=0,Z=h.length;I<Z;I++){const G=h[I],Y=G.color,le=G.intensity,ue=G.distance;let W=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===zs?W=G.shadow.map.texture:W=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)v+=Y.r*le,S+=Y.g*le,g+=Y.b*le;else if(G.isLightProbe){for(let U=0;U<9;U++)s.probe[U].addScaledVector(G.sh.coefficients[U],le);z++}else if(G.isDirectionalLight){const U=t.get(G);if(U.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const B=G.shadow,oe=i.get(G);oe.shadowIntensity=B.intensity,oe.shadowBias=B.bias,oe.shadowNormalBias=B.normalBias,oe.shadowRadius=B.radius,oe.shadowMapSize=B.mapSize,s.directionalShadow[x]=oe,s.directionalShadowMap[x]=W,s.directionalShadowMatrix[x]=G.shadow.matrix,D++}s.directional[x]=U,x++}else if(G.isSpotLight){const U=t.get(G);U.position.setFromMatrixPosition(G.matrixWorld),U.color.copy(Y).multiplyScalar(le),U.distance=ue,U.coneCos=Math.cos(G.angle),U.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),U.decay=G.decay,s.spot[N]=U;const B=G.shadow;if(G.map&&(s.spotLightMap[X]=G.map,X++,B.updateMatrices(G),G.castShadow&&P++),s.spotLightMatrix[N]=B.matrix,G.castShadow){const oe=i.get(G);oe.shadowIntensity=B.intensity,oe.shadowBias=B.bias,oe.shadowNormalBias=B.normalBias,oe.shadowRadius=B.radius,oe.shadowMapSize=B.mapSize,s.spotShadow[N]=oe,s.spotShadowMap[N]=W,L++}N++}else if(G.isRectAreaLight){const U=t.get(G);U.color.copy(Y).multiplyScalar(le),U.halfWidth.set(G.width*.5,0,0),U.halfHeight.set(0,G.height*.5,0),s.rectArea[M]=U,M++}else if(G.isPointLight){const U=t.get(G);if(U.color.copy(G.color).multiplyScalar(G.intensity),U.distance=G.distance,U.decay=G.decay,G.castShadow){const B=G.shadow,oe=i.get(G);oe.shadowIntensity=B.intensity,oe.shadowBias=B.bias,oe.shadowNormalBias=B.normalBias,oe.shadowRadius=B.radius,oe.shadowMapSize=B.mapSize,oe.shadowCameraNear=B.camera.near,oe.shadowCameraFar=B.camera.far,s.pointShadow[T]=oe,s.pointShadowMap[T]=W,s.pointShadowMatrix[T]=G.shadow.matrix,F++}s.point[T]=U,T++}else if(G.isHemisphereLight){const U=t.get(G);U.skyColor.copy(G.color).multiplyScalar(le),U.groundColor.copy(G.groundColor).multiplyScalar(le),s.hemi[y]=U,y++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Be.LTC_FLOAT_1,s.rectAreaLTC2=Be.LTC_FLOAT_2):(s.rectAreaLTC1=Be.LTC_HALF_1,s.rectAreaLTC2=Be.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=S,s.ambient[2]=g;const b=s.hash;(b.directionalLength!==x||b.pointLength!==T||b.spotLength!==N||b.rectAreaLength!==M||b.hemiLength!==y||b.numDirectionalShadows!==D||b.numPointShadows!==F||b.numSpotShadows!==L||b.numSpotMaps!==X||b.numLightProbes!==z)&&(s.directional.length=x,s.spot.length=N,s.rectArea.length=M,s.point.length=T,s.hemi.length=y,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=F,s.pointShadowMap.length=F,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=F,s.spotLightMatrix.length=L+X-P,s.spotLightMap.length=X,s.numSpotLightShadowsWithMaps=P,s.numLightProbes=z,b.directionalLength=x,b.pointLength=T,b.spotLength=N,b.rectAreaLength=M,b.hemiLength=y,b.numDirectionalShadows=D,b.numPointShadows=F,b.numSpotShadows=L,b.numSpotMaps=X,b.numLightProbes=z,s.version=yA++)}function m(h,v){let S=0,g=0,x=0,T=0,N=0;const M=v.matrixWorldInverse;for(let y=0,D=h.length;y<D;y++){const F=h[y];if(F.isDirectionalLight){const L=s.directional[S];L.direction.setFromMatrixPosition(F.matrixWorld),l.setFromMatrixPosition(F.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),S++}else if(F.isSpotLight){const L=s.spot[x];L.position.setFromMatrixPosition(F.matrixWorld),L.position.applyMatrix4(M),L.direction.setFromMatrixPosition(F.matrixWorld),l.setFromMatrixPosition(F.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),x++}else if(F.isRectAreaLight){const L=s.rectArea[T];L.position.setFromMatrixPosition(F.matrixWorld),L.position.applyMatrix4(M),d.identity(),c.copy(F.matrixWorld),c.premultiply(M),d.extractRotation(c),L.halfWidth.set(F.width*.5,0,0),L.halfHeight.set(0,F.height*.5,0),L.halfWidth.applyMatrix4(d),L.halfHeight.applyMatrix4(d),T++}else if(F.isPointLight){const L=s.point[g];L.position.setFromMatrixPosition(F.matrixWorld),L.position.applyMatrix4(M),g++}else if(F.isHemisphereLight){const L=s.hemi[N];L.direction.setFromMatrixPosition(F.matrixWorld),L.direction.transformDirection(M),N++}}}return{setup:p,setupView:m,state:s}}function j_(o){const t=new EA(o),i=[],s=[],l=[];function c(g){S.camera=g,i.length=0,s.length=0,l.length=0}function d(g){i.push(g)}function p(g){s.push(g)}function m(g){l.push(g)}function h(){t.setup(i)}function v(g){t.setupView(i,g)}const S={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:S,setupLights:h,setupLightsView:v,pushLight:d,pushShadow:p,pushLightProbeGrid:m}}function bA(o){let t=new WeakMap;function i(l,c=0){const d=t.get(l);let p;return d===void 0?(p=new j_(o),t.set(l,[p])):c>=d.length?(p=new j_(o),d.push(p)):p=d[c],p}function s(){t=new WeakMap}return{get:i,dispose:s}}const TA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,RA=[new ie(1,0,0),new ie(-1,0,0),new ie(0,1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1)],CA=[new ie(0,-1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1),new ie(0,-1,0),new ie(0,-1,0)],W_=new on,Xo=new ie,Vd=new ie;function wA(o,t,i){let s=new Yh;const l=new Ut,c=new Ut,d=new rn,p=new BM,m=new HM,h={},v=i.maxTextureSize,S={[os]:Yn,[Yn]:os,[_a]:_a},g=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:TA,fragmentShader:AA}),x=g.clone();x.defines.HORIZONTAL_PASS=1;const T=new Mi;T.setAttribute("position",new Li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const N=new In(T,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oc;let y=this.type;this.render=function(P,z,b){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||P.length===0)return;this.type===Ry&&(it("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Oc);const I=o.getRenderTarget(),Z=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),Y=o.state;Y.setBlending(va),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const le=y!==this.type;le&&z.traverse(function(ue){ue.material&&(Array.isArray(ue.material)?ue.material.forEach(W=>W.needsUpdate=!0):ue.material.needsUpdate=!0)});for(let ue=0,W=P.length;ue<W;ue++){const U=P[ue],B=U.shadow;if(B===void 0){it("WebGLShadowMap:",U,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;l.copy(B.mapSize);const oe=B.getFrameExtents();l.multiply(oe),c.copy(B.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/oe.x),l.x=c.x*oe.x,B.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/oe.y),l.y=c.y*oe.y,B.mapSize.y=c.y));const me=o.state.buffers.depth.getReversed();if(B.camera._reversedDepth=me,B.map===null||le===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===jo){if(U.isPointLight){it("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new ji(l.x,l.y,{format:zs,type:ya,minFilter:Fn,magFilter:Fn,generateMipmaps:!1}),B.map.texture.name=U.name+".shadowMap",B.map.depthTexture=new Fr(l.x,l.y,Vi),B.map.depthTexture.name=U.name+".shadowMapDepth",B.map.depthTexture.format=Ma,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=wn,B.map.depthTexture.magFilter=wn}else U.isPointLight?(B.map=new Cx(l.x),B.map.depthTexture=new LM(l.x,Wi)):(B.map=new ji(l.x,l.y),B.map.depthTexture=new Fr(l.x,l.y,Wi)),B.map.depthTexture.name=U.name+".shadowMap",B.map.depthTexture.format=Ma,this.type===Oc?(B.map.depthTexture.compareFunction=me?Wh:jh,B.map.depthTexture.minFilter=Fn,B.map.depthTexture.magFilter=Fn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=wn,B.map.depthTexture.magFilter=wn);B.camera.updateProjectionMatrix()}const ye=B.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<ye;O++){if(B.map.isWebGLCubeRenderTarget)o.setRenderTarget(B.map,O),o.clear();else{O===0&&(o.setRenderTarget(B.map),o.clear());const Q=B.getViewport(O);d.set(c.x*Q.x,c.y*Q.y,c.x*Q.z,c.y*Q.w),Y.viewport(d)}if(U.isPointLight){const Q=B.camera,ve=B.matrix,Te=U.distance||Q.far;Te!==Q.far&&(Q.far=Te,Q.updateProjectionMatrix()),Xo.setFromMatrixPosition(U.matrixWorld),Q.position.copy(Xo),Vd.copy(Q.position),Vd.add(RA[O]),Q.up.copy(CA[O]),Q.lookAt(Vd),Q.updateMatrixWorld(),ve.makeTranslation(-Xo.x,-Xo.y,-Xo.z),W_.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),B._frustum.setFromProjectionMatrix(W_,Q.coordinateSystem,Q.reversedDepth)}else B.updateMatrices(U);s=B.getFrustum(),L(z,b,B.camera,U,this.type)}B.isPointLightShadow!==!0&&this.type===jo&&D(B,b),B.needsUpdate=!1}y=this.type,M.needsUpdate=!1,o.setRenderTarget(I,Z,G)};function D(P,z){const b=t.update(N);g.defines.VSM_SAMPLES!==P.blurSamples&&(g.defines.VSM_SAMPLES=P.blurSamples,x.defines.VSM_SAMPLES=P.blurSamples,g.needsUpdate=!0,x.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ji(l.x,l.y,{format:zs,type:ya})),g.uniforms.shadow_pass.value=P.map.depthTexture,g.uniforms.resolution.value=P.mapSize,g.uniforms.radius.value=P.radius,o.setRenderTarget(P.mapPass),o.clear(),o.renderBufferDirect(z,null,b,g,N,null),x.uniforms.shadow_pass.value=P.mapPass.texture,x.uniforms.resolution.value=P.mapSize,x.uniforms.radius.value=P.radius,o.setRenderTarget(P.map),o.clear(),o.renderBufferDirect(z,null,b,x,N,null)}function F(P,z,b,I){let Z=null;const G=b.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(G!==void 0)Z=G;else if(Z=b.isPointLight===!0?m:p,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const Y=Z.uuid,le=z.uuid;let ue=h[Y];ue===void 0&&(ue={},h[Y]=ue);let W=ue[le];W===void 0&&(W=Z.clone(),ue[le]=W,z.addEventListener("dispose",X)),Z=W}if(Z.visible=z.visible,Z.wireframe=z.wireframe,I===jo?Z.side=z.shadowSide!==null?z.shadowSide:z.side:Z.side=z.shadowSide!==null?z.shadowSide:S[z.side],Z.alphaMap=z.alphaMap,Z.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,Z.map=z.map,Z.clipShadows=z.clipShadows,Z.clippingPlanes=z.clippingPlanes,Z.clipIntersection=z.clipIntersection,Z.displacementMap=z.displacementMap,Z.displacementScale=z.displacementScale,Z.displacementBias=z.displacementBias,Z.wireframeLinewidth=z.wireframeLinewidth,Z.linewidth=z.linewidth,b.isPointLight===!0&&Z.isMeshDistanceMaterial===!0){const Y=o.properties.get(Z);Y.light=b}return Z}function L(P,z,b,I,Z){if(P.visible===!1)return;if(P.layers.test(z.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&Z===jo)&&(!P.frustumCulled||s.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,P.matrixWorld);const le=t.update(P),ue=P.material;if(Array.isArray(ue)){const W=le.groups;for(let U=0,B=W.length;U<B;U++){const oe=W[U],me=ue[oe.materialIndex];if(me&&me.visible){const ye=F(P,me,I,Z);P.onBeforeShadow(o,P,z,b,le,ye,oe),o.renderBufferDirect(b,null,le,ye,P,oe),P.onAfterShadow(o,P,z,b,le,ye,oe)}}}else if(ue.visible){const W=F(P,ue,I,Z);P.onBeforeShadow(o,P,z,b,le,W,null),o.renderBufferDirect(b,null,le,W,P,null),P.onAfterShadow(o,P,z,b,le,W,null)}}const Y=P.children;for(let le=0,ue=Y.length;le<ue;le++)L(Y[le],z,b,I,Z)}function X(P){P.target.removeEventListener("dispose",X);for(const b in h){const I=h[b],Z=P.target.uuid;Z in I&&(I[Z].dispose(),delete I[Z])}}}function NA(o,t){function i(){let k=!1;const Ae=new rn;let pe=null;const ze=new rn(0,0,0,0);return{setMask:function(Ue){pe!==Ue&&!k&&(o.colorMask(Ue,Ue,Ue,Ue),pe=Ue)},setLocked:function(Ue){k=Ue},setClear:function(Ue,Me,We,nt,nn){nn===!0&&(Ue*=nt,Me*=nt,We*=nt),Ae.set(Ue,Me,We,nt),ze.equals(Ae)===!1&&(o.clearColor(Ue,Me,We,nt),ze.copy(Ae))},reset:function(){k=!1,pe=null,ze.set(-1,0,0,0)}}}function s(){let k=!1,Ae=!1,pe=null,ze=null,Ue=null;return{setReversed:function(Me){if(Ae!==Me){const We=t.get("EXT_clip_control");Me?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),Ae=Me;const nt=Ue;Ue=null,this.setClear(nt)}},getReversed:function(){return Ae},setTest:function(Me){Me?be(o.DEPTH_TEST):He(o.DEPTH_TEST)},setMask:function(Me){pe!==Me&&!k&&(o.depthMask(Me),pe=Me)},setFunc:function(Me){if(Ae&&(Me=rM[Me]),ze!==Me){switch(Me){case Wd:o.depthFunc(o.NEVER);break;case qd:o.depthFunc(o.ALWAYS);break;case Yd:o.depthFunc(o.LESS);break;case Pr:o.depthFunc(o.LEQUAL);break;case Zd:o.depthFunc(o.EQUAL);break;case Kd:o.depthFunc(o.GEQUAL);break;case Qd:o.depthFunc(o.GREATER);break;case Jd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}ze=Me}},setLocked:function(Me){k=Me},setClear:function(Me){Ue!==Me&&(Ue=Me,Ae&&(Me=1-Me),o.clearDepth(Me))},reset:function(){k=!1,pe=null,ze=null,Ue=null,Ae=!1}}}function l(){let k=!1,Ae=null,pe=null,ze=null,Ue=null,Me=null,We=null,nt=null,nn=null;return{setTest:function(Lt){k||(Lt?be(o.STENCIL_TEST):He(o.STENCIL_TEST))},setMask:function(Lt){Ae!==Lt&&!k&&(o.stencilMask(Lt),Ae=Lt)},setFunc:function(Lt,fi,Kn){(pe!==Lt||ze!==fi||Ue!==Kn)&&(o.stencilFunc(Lt,fi,Kn),pe=Lt,ze=fi,Ue=Kn)},setOp:function(Lt,fi,Kn){(Me!==Lt||We!==fi||nt!==Kn)&&(o.stencilOp(Lt,fi,Kn),Me=Lt,We=fi,nt=Kn)},setLocked:function(Lt){k=Lt},setClear:function(Lt){nn!==Lt&&(o.clearStencil(Lt),nn=Lt)},reset:function(){k=!1,Ae=null,pe=null,ze=null,Ue=null,Me=null,We=null,nt=null,nn=null}}}const c=new i,d=new s,p=new l,m=new WeakMap,h=new WeakMap;let v={},S={},g={},x=new WeakMap,T=[],N=null,M=!1,y=null,D=null,F=null,L=null,X=null,P=null,z=null,b=new Dt(0,0,0),I=0,Z=!1,G=null,Y=null,le=null,ue=null,W=null;const U=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,oe=0;const me=o.getParameter(o.VERSION);me.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(me)[1]),B=oe>=1):me.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(me)[1]),B=oe>=2);let ye=null,O={};const Q=o.getParameter(o.SCISSOR_BOX),ve=o.getParameter(o.VIEWPORT),Te=new rn().fromArray(Q),Re=new rn().fromArray(ve);function re(k,Ae,pe,ze){const Ue=new Uint8Array(4),Me=o.createTexture();o.bindTexture(k,Me),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let We=0;We<pe;We++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Ae,0,o.RGBA,1,1,ze,0,o.RGBA,o.UNSIGNED_BYTE,Ue):o.texImage2D(Ae+We,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ue);return Me}const Se={};Se[o.TEXTURE_2D]=re(o.TEXTURE_2D,o.TEXTURE_2D,1),Se[o.TEXTURE_CUBE_MAP]=re(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[o.TEXTURE_2D_ARRAY]=re(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Se[o.TEXTURE_3D]=re(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),p.setClear(0),be(o.DEPTH_TEST),d.setFunc(Pr),Qt(!1),et(Wg),be(o.CULL_FACE),Rt(va);function be(k){v[k]!==!0&&(o.enable(k),v[k]=!0)}function He(k){v[k]!==!1&&(o.disable(k),v[k]=!1)}function $e(k,Ae){return g[k]!==Ae?(o.bindFramebuffer(k,Ae),g[k]=Ae,k===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Ae),k===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Ye(k,Ae){let pe=T,ze=!1;if(k){pe=x.get(Ae),pe===void 0&&(pe=[],x.set(Ae,pe));const Ue=k.textures;if(pe.length!==Ue.length||pe[0]!==o.COLOR_ATTACHMENT0){for(let Me=0,We=Ue.length;Me<We;Me++)pe[Me]=o.COLOR_ATTACHMENT0+Me;pe.length=Ue.length,ze=!0}}else pe[0]!==o.BACK&&(pe[0]=o.BACK,ze=!0);ze&&o.drawBuffers(pe)}function Pt(k){return N!==k?(o.useProgram(k),N=k,!0):!1}const ct={[Ls]:o.FUNC_ADD,[wy]:o.FUNC_SUBTRACT,[Ny]:o.FUNC_REVERSE_SUBTRACT};ct[Dy]=o.MIN,ct[Uy]=o.MAX;const mt={[Ly]:o.ZERO,[Oy]:o.ONE,[Py]:o.SRC_COLOR,[Xd]:o.SRC_ALPHA,[Gy]:o.SRC_ALPHA_SATURATE,[By]:o.DST_COLOR,[Fy]:o.DST_ALPHA,[Iy]:o.ONE_MINUS_SRC_COLOR,[jd]:o.ONE_MINUS_SRC_ALPHA,[Hy]:o.ONE_MINUS_DST_COLOR,[zy]:o.ONE_MINUS_DST_ALPHA,[Vy]:o.CONSTANT_COLOR,[ky]:o.ONE_MINUS_CONSTANT_COLOR,[Xy]:o.CONSTANT_ALPHA,[jy]:o.ONE_MINUS_CONSTANT_ALPHA};function Rt(k,Ae,pe,ze,Ue,Me,We,nt,nn,Lt){if(k===va){M===!0&&(He(o.BLEND),M=!1);return}if(M===!1&&(be(o.BLEND),M=!0),k!==Cy){if(k!==y||Lt!==Z){if((D!==Ls||X!==Ls)&&(o.blendEquation(o.FUNC_ADD),D=Ls,X=Ls),Lt)switch(k){case Lr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case kd:o.blendFunc(o.ONE,o.ONE);break;case qg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Yg:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:At("WebGLState: Invalid blending: ",k);break}else switch(k){case Lr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case kd:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case qg:At("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yg:At("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:At("WebGLState: Invalid blending: ",k);break}F=null,L=null,P=null,z=null,b.set(0,0,0),I=0,y=k,Z=Lt}return}Ue=Ue||Ae,Me=Me||pe,We=We||ze,(Ae!==D||Ue!==X)&&(o.blendEquationSeparate(ct[Ae],ct[Ue]),D=Ae,X=Ue),(pe!==F||ze!==L||Me!==P||We!==z)&&(o.blendFuncSeparate(mt[pe],mt[ze],mt[Me],mt[We]),F=pe,L=ze,P=Me,z=We),(nt.equals(b)===!1||nn!==I)&&(o.blendColor(nt.r,nt.g,nt.b,nn),b.copy(nt),I=nn),y=k,Z=!1}function ot(k,Ae){k.side===_a?He(o.CULL_FACE):be(o.CULL_FACE);let pe=k.side===Yn;Ae&&(pe=!pe),Qt(pe),k.blending===Lr&&k.transparent===!1?Rt(va):Rt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),d.setFunc(k.depthFunc),d.setTest(k.depthTest),d.setMask(k.depthWrite),c.setMask(k.colorWrite);const ze=k.stencilWrite;p.setTest(ze),ze&&(p.setMask(k.stencilWriteMask),p.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),p.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),V(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?be(o.SAMPLE_ALPHA_TO_COVERAGE):He(o.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(k){G!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),G=k)}function et(k){k!==Ty?(be(o.CULL_FACE),k!==Y&&(k===Wg?o.cullFace(o.BACK):k===Ay?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):He(o.CULL_FACE),Y=k}function gt(k){k!==le&&(B&&o.lineWidth(k),le=k)}function V(k,Ae,pe){k?(be(o.POLYGON_OFFSET_FILL),(ue!==Ae||W!==pe)&&(ue=Ae,W=pe,d.getReversed()&&(Ae=-Ae),o.polygonOffset(Ae,pe))):He(o.POLYGON_OFFSET_FILL)}function Ke(k){k?be(o.SCISSOR_TEST):He(o.SCISSOR_TEST)}function ut(k){k===void 0&&(k=o.TEXTURE0+U-1),ye!==k&&(o.activeTexture(k),ye=k)}function kt(k,Ae,pe){pe===void 0&&(ye===null?pe=o.TEXTURE0+U-1:pe=ye);let ze=O[pe];ze===void 0&&(ze={type:void 0,texture:void 0},O[pe]=ze),(ze.type!==k||ze.texture!==Ae)&&(ye!==pe&&(o.activeTexture(pe),ye=pe),o.bindTexture(k,Ae||Se[k]),ze.type=k,ze.texture=Ae)}function Ce(){const k=O[ye];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Jt(){try{o.compressedTexImage2D(...arguments)}catch(k){At("WebGLState:",k)}}function w(){try{o.compressedTexImage3D(...arguments)}catch(k){At("WebGLState:",k)}}function E(){try{o.texSubImage2D(...arguments)}catch(k){At("WebGLState:",k)}}function J(){try{o.texSubImage3D(...arguments)}catch(k){At("WebGLState:",k)}}function _e(){try{o.compressedTexSubImage2D(...arguments)}catch(k){At("WebGLState:",k)}}function Ee(){try{o.compressedTexSubImage3D(...arguments)}catch(k){At("WebGLState:",k)}}function we(){try{o.texStorage2D(...arguments)}catch(k){At("WebGLState:",k)}}function Le(){try{o.texStorage3D(...arguments)}catch(k){At("WebGLState:",k)}}function fe(){try{o.texImage2D(...arguments)}catch(k){At("WebGLState:",k)}}function de(){try{o.texImage3D(...arguments)}catch(k){At("WebGLState:",k)}}function Oe(k){return S[k]!==void 0?S[k]:o.getParameter(k)}function Pe(k,Ae){S[k]!==Ae&&(o.pixelStorei(k,Ae),S[k]=Ae)}function De(k){Te.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),Te.copy(k))}function Ne(k){Re.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),Re.copy(k))}function at(k,Ae){let pe=h.get(Ae);pe===void 0&&(pe=new WeakMap,h.set(Ae,pe));let ze=pe.get(k);ze===void 0&&(ze=o.getUniformBlockIndex(Ae,k.name),pe.set(k,ze))}function st(k,Ae){const ze=h.get(Ae).get(k);m.get(Ae)!==ze&&(o.uniformBlockBinding(Ae,ze,k.__bindingPointIndex),m.set(Ae,ze))}function _t(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),v={},S={},ye=null,O={},g={},x=new WeakMap,T=[],N=null,M=!1,y=null,D=null,F=null,L=null,X=null,P=null,z=null,b=new Dt(0,0,0),I=0,Z=!1,G=null,Y=null,le=null,ue=null,W=null,Te.set(0,0,o.canvas.width,o.canvas.height),Re.set(0,0,o.canvas.width,o.canvas.height),c.reset(),d.reset(),p.reset()}return{buffers:{color:c,depth:d,stencil:p},enable:be,disable:He,bindFramebuffer:$e,drawBuffers:Ye,useProgram:Pt,setBlending:Rt,setMaterial:ot,setFlipSided:Qt,setCullFace:et,setLineWidth:gt,setPolygonOffset:V,setScissorTest:Ke,activeTexture:ut,bindTexture:kt,unbindTexture:Ce,compressedTexImage2D:Jt,compressedTexImage3D:w,texImage2D:fe,texImage3D:de,pixelStorei:Pe,getParameter:Oe,updateUBOMapping:at,uniformBlockBinding:st,texStorage2D:we,texStorage3D:Le,texSubImage2D:E,texSubImage3D:J,compressedTexSubImage2D:_e,compressedTexSubImage3D:Ee,scissor:De,viewport:Ne,reset:_t}}function DA(o,t,i,s,l,c,d){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ut,v=new WeakMap,S=new Set;let g;const x=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function N(w,E){return T?new OffscreenCanvas(w,E):Xc("canvas")}function M(w,E,J){let _e=1;const Ee=Jt(w);if((Ee.width>J||Ee.height>J)&&(_e=J/Math.max(Ee.width,Ee.height)),_e<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const we=Math.floor(_e*Ee.width),Le=Math.floor(_e*Ee.height);g===void 0&&(g=N(we,Le));const fe=E?N(we,Le):g;return fe.width=we,fe.height=Le,fe.getContext("2d").drawImage(w,0,0,we,Le),it("WebGLRenderer: Texture has been resized from ("+Ee.width+"x"+Ee.height+") to ("+we+"x"+Le+")."),fe}else return"data"in w&&it("WebGLRenderer: Image in DataTexture is too big ("+Ee.width+"x"+Ee.height+")."),w;return w}function y(w){return w.generateMipmaps}function D(w){o.generateMipmap(w)}function F(w){return w.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?o.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(w,E,J,_e,Ee,we=!1){if(w!==null){if(o[w]!==void 0)return o[w];it("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Le;_e&&(Le=t.get("EXT_texture_norm16"),Le||it("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let fe=E;if(E===o.RED&&(J===o.FLOAT&&(fe=o.R32F),J===o.HALF_FLOAT&&(fe=o.R16F),J===o.UNSIGNED_BYTE&&(fe=o.R8),J===o.UNSIGNED_SHORT&&Le&&(fe=Le.R16_EXT),J===o.SHORT&&Le&&(fe=Le.R16_SNORM_EXT)),E===o.RED_INTEGER&&(J===o.UNSIGNED_BYTE&&(fe=o.R8UI),J===o.UNSIGNED_SHORT&&(fe=o.R16UI),J===o.UNSIGNED_INT&&(fe=o.R32UI),J===o.BYTE&&(fe=o.R8I),J===o.SHORT&&(fe=o.R16I),J===o.INT&&(fe=o.R32I)),E===o.RG&&(J===o.FLOAT&&(fe=o.RG32F),J===o.HALF_FLOAT&&(fe=o.RG16F),J===o.UNSIGNED_BYTE&&(fe=o.RG8),J===o.UNSIGNED_SHORT&&Le&&(fe=Le.RG16_EXT),J===o.SHORT&&Le&&(fe=Le.RG16_SNORM_EXT)),E===o.RG_INTEGER&&(J===o.UNSIGNED_BYTE&&(fe=o.RG8UI),J===o.UNSIGNED_SHORT&&(fe=o.RG16UI),J===o.UNSIGNED_INT&&(fe=o.RG32UI),J===o.BYTE&&(fe=o.RG8I),J===o.SHORT&&(fe=o.RG16I),J===o.INT&&(fe=o.RG32I)),E===o.RGB_INTEGER&&(J===o.UNSIGNED_BYTE&&(fe=o.RGB8UI),J===o.UNSIGNED_SHORT&&(fe=o.RGB16UI),J===o.UNSIGNED_INT&&(fe=o.RGB32UI),J===o.BYTE&&(fe=o.RGB8I),J===o.SHORT&&(fe=o.RGB16I),J===o.INT&&(fe=o.RGB32I)),E===o.RGBA_INTEGER&&(J===o.UNSIGNED_BYTE&&(fe=o.RGBA8UI),J===o.UNSIGNED_SHORT&&(fe=o.RGBA16UI),J===o.UNSIGNED_INT&&(fe=o.RGBA32UI),J===o.BYTE&&(fe=o.RGBA8I),J===o.SHORT&&(fe=o.RGBA16I),J===o.INT&&(fe=o.RGBA32I)),E===o.RGB&&(J===o.UNSIGNED_SHORT&&Le&&(fe=Le.RGB16_EXT),J===o.SHORT&&Le&&(fe=Le.RGB16_SNORM_EXT),J===o.UNSIGNED_INT_5_9_9_9_REV&&(fe=o.RGB9_E5),J===o.UNSIGNED_INT_10F_11F_11F_REV&&(fe=o.R11F_G11F_B10F)),E===o.RGBA){const de=we?kc:bt.getTransfer(Ee);J===o.FLOAT&&(fe=o.RGBA32F),J===o.HALF_FLOAT&&(fe=o.RGBA16F),J===o.UNSIGNED_BYTE&&(fe=de===Vt?o.SRGB8_ALPHA8:o.RGBA8),J===o.UNSIGNED_SHORT&&Le&&(fe=Le.RGBA16_EXT),J===o.SHORT&&Le&&(fe=Le.RGBA16_SNORM_EXT),J===o.UNSIGNED_SHORT_4_4_4_4&&(fe=o.RGBA4),J===o.UNSIGNED_SHORT_5_5_5_1&&(fe=o.RGB5_A1)}return(fe===o.R16F||fe===o.R32F||fe===o.RG16F||fe===o.RG32F||fe===o.RGBA16F||fe===o.RGBA32F)&&t.get("EXT_color_buffer_float"),fe}function X(w,E){let J;return w?E===null||E===Wi||E===Zo?J=o.DEPTH24_STENCIL8:E===Vi?J=o.DEPTH32F_STENCIL8:E===Yo&&(J=o.DEPTH24_STENCIL8,it("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Wi||E===Zo?J=o.DEPTH_COMPONENT24:E===Vi?J=o.DEPTH_COMPONENT32F:E===Yo&&(J=o.DEPTH_COMPONENT16),J}function P(w,E){return y(w)===!0||w.isFramebufferTexture&&w.minFilter!==wn&&w.minFilter!==Fn?Math.log2(Math.max(E.width,E.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?E.mipmaps.length:1}function z(w){const E=w.target;E.removeEventListener("dispose",z),I(E),E.isVideoTexture&&v.delete(E),E.isHTMLTexture&&S.delete(E)}function b(w){const E=w.target;E.removeEventListener("dispose",b),G(E)}function I(w){const E=s.get(w);if(E.__webglInit===void 0)return;const J=w.source,_e=x.get(J);if(_e){const Ee=_e[E.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&Z(w),Object.keys(_e).length===0&&x.delete(J)}s.remove(w)}function Z(w){const E=s.get(w);o.deleteTexture(E.__webglTexture);const J=w.source,_e=x.get(J);delete _e[E.__cacheKey],d.memory.textures--}function G(w){const E=s.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),s.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(E.__webglFramebuffer[_e]))for(let Ee=0;Ee<E.__webglFramebuffer[_e].length;Ee++)o.deleteFramebuffer(E.__webglFramebuffer[_e][Ee]);else o.deleteFramebuffer(E.__webglFramebuffer[_e]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[_e])}else{if(Array.isArray(E.__webglFramebuffer))for(let _e=0;_e<E.__webglFramebuffer.length;_e++)o.deleteFramebuffer(E.__webglFramebuffer[_e]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let _e=0;_e<E.__webglColorRenderbuffer.length;_e++)E.__webglColorRenderbuffer[_e]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[_e]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const J=w.textures;for(let _e=0,Ee=J.length;_e<Ee;_e++){const we=s.get(J[_e]);we.__webglTexture&&(o.deleteTexture(we.__webglTexture),d.memory.textures--),s.remove(J[_e])}s.remove(w)}let Y=0;function le(){Y=0}function ue(){return Y}function W(w){Y=w}function U(){const w=Y;return w>=l.maxTextures&&it("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l.maxTextures),Y+=1,w}function B(w){const E=[];return E.push(w.wrapS),E.push(w.wrapT),E.push(w.wrapR||0),E.push(w.magFilter),E.push(w.minFilter),E.push(w.anisotropy),E.push(w.internalFormat),E.push(w.format),E.push(w.type),E.push(w.generateMipmaps),E.push(w.premultiplyAlpha),E.push(w.flipY),E.push(w.unpackAlignment),E.push(w.colorSpace),E.join()}function oe(w,E){const J=s.get(w);if(w.isVideoTexture&&kt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&J.__version!==w.version){const _e=w.image;if(_e===null)it("WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)it("WebGLRenderer: Texture marked for update but image is incomplete");else{He(J,w,E);return}}else w.isExternalTexture&&(J.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,J.__webglTexture,o.TEXTURE0+E)}function me(w,E){const J=s.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&J.__version!==w.version){He(J,w,E);return}else w.isExternalTexture&&(J.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,J.__webglTexture,o.TEXTURE0+E)}function ye(w,E){const J=s.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&J.__version!==w.version){He(J,w,E);return}i.bindTexture(o.TEXTURE_3D,J.__webglTexture,o.TEXTURE0+E)}function O(w,E){const J=s.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&J.__version!==w.version){$e(J,w,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,J.__webglTexture,o.TEXTURE0+E)}const Q={[$d]:o.REPEAT,[xa]:o.CLAMP_TO_EDGE,[eh]:o.MIRRORED_REPEAT},ve={[wn]:o.NEAREST,[Yy]:o.NEAREST_MIPMAP_NEAREST,[uc]:o.NEAREST_MIPMAP_LINEAR,[Fn]:o.LINEAR,[cd]:o.LINEAR_MIPMAP_NEAREST,[Ps]:o.LINEAR_MIPMAP_LINEAR},Te={[Qy]:o.NEVER,[nM]:o.ALWAYS,[Jy]:o.LESS,[jh]:o.LEQUAL,[$y]:o.EQUAL,[Wh]:o.GEQUAL,[eM]:o.GREATER,[tM]:o.NOTEQUAL};function Re(w,E){if(E.type===Vi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Fn||E.magFilter===cd||E.magFilter===uc||E.magFilter===Ps||E.minFilter===Fn||E.minFilter===cd||E.minFilter===uc||E.minFilter===Ps)&&it("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(w,o.TEXTURE_WRAP_S,Q[E.wrapS]),o.texParameteri(w,o.TEXTURE_WRAP_T,Q[E.wrapT]),(w===o.TEXTURE_3D||w===o.TEXTURE_2D_ARRAY)&&o.texParameteri(w,o.TEXTURE_WRAP_R,Q[E.wrapR]),o.texParameteri(w,o.TEXTURE_MAG_FILTER,ve[E.magFilter]),o.texParameteri(w,o.TEXTURE_MIN_FILTER,ve[E.minFilter]),E.compareFunction&&(o.texParameteri(w,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(w,o.TEXTURE_COMPARE_FUNC,Te[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===wn||E.minFilter!==uc&&E.minFilter!==Ps||E.type===Vi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const J=t.get("EXT_texture_filter_anisotropic");o.texParameterf(w,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function re(w,E){let J=!1;w.__webglInit===void 0&&(w.__webglInit=!0,E.addEventListener("dispose",z));const _e=E.source;let Ee=x.get(_e);Ee===void 0&&(Ee={},x.set(_e,Ee));const we=B(E);if(we!==w.__cacheKey){Ee[we]===void 0&&(Ee[we]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,J=!0),Ee[we].usedTimes++;const Le=Ee[w.__cacheKey];Le!==void 0&&(Ee[w.__cacheKey].usedTimes--,Le.usedTimes===0&&Z(E)),w.__cacheKey=we,w.__webglTexture=Ee[we].texture}return J}function Se(w,E,J){return Math.floor(Math.floor(w/J)/E)}function be(w,E,J,_e){const we=w.updateRanges;if(we.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,J,_e,E.data);else{we.sort((Pe,De)=>Pe.start-De.start);let Le=0;for(let Pe=1;Pe<we.length;Pe++){const De=we[Le],Ne=we[Pe],at=De.start+De.count,st=Se(Ne.start,E.width,4),_t=Se(De.start,E.width,4);Ne.start<=at+1&&st===_t&&Se(Ne.start+Ne.count-1,E.width,4)===st?De.count=Math.max(De.count,Ne.start+Ne.count-De.start):(++Le,we[Le]=Ne)}we.length=Le+1;const fe=i.getParameter(o.UNPACK_ROW_LENGTH),de=i.getParameter(o.UNPACK_SKIP_PIXELS),Oe=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let Pe=0,De=we.length;Pe<De;Pe++){const Ne=we[Pe],at=Math.floor(Ne.start/4),st=Math.ceil(Ne.count/4),_t=at%E.width,k=Math.floor(at/E.width),Ae=st,pe=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,_t),i.pixelStorei(o.UNPACK_SKIP_ROWS,k),i.texSubImage2D(o.TEXTURE_2D,0,_t,k,Ae,pe,J,_e,E.data)}w.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,fe),i.pixelStorei(o.UNPACK_SKIP_PIXELS,de),i.pixelStorei(o.UNPACK_SKIP_ROWS,Oe)}}function He(w,E,J){let _e=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(_e=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(_e=o.TEXTURE_3D);const Ee=re(w,E),we=E.source;i.bindTexture(_e,w.__webglTexture,o.TEXTURE0+J);const Le=s.get(we);if(we.version!==Le.__version||Ee===!0){if(i.activeTexture(o.TEXTURE0+J),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const pe=bt.getPrimaries(bt.workingColorSpace),ze=E.colorSpace===ss?null:bt.getPrimaries(E.colorSpace),Ue=E.colorSpace===ss||pe===ze?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue)}i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment);let de=M(E.image,!1,l.maxTextureSize);de=Ce(E,de);const Oe=c.convert(E.format,E.colorSpace),Pe=c.convert(E.type);let De=L(E.internalFormat,Oe,Pe,E.normalized,E.colorSpace,E.isVideoTexture);Re(_e,E);let Ne;const at=E.mipmaps,st=E.isVideoTexture!==!0,_t=Le.__version===void 0||Ee===!0,k=we.dataReady,Ae=P(E,de);if(E.isDepthTexture)De=X(E.format===Is,E.type),_t&&(st?i.texStorage2D(o.TEXTURE_2D,1,De,de.width,de.height):i.texImage2D(o.TEXTURE_2D,0,De,de.width,de.height,0,Oe,Pe,null));else if(E.isDataTexture)if(at.length>0){st&&_t&&i.texStorage2D(o.TEXTURE_2D,Ae,De,at[0].width,at[0].height);for(let pe=0,ze=at.length;pe<ze;pe++)Ne=at[pe],st?k&&i.texSubImage2D(o.TEXTURE_2D,pe,0,0,Ne.width,Ne.height,Oe,Pe,Ne.data):i.texImage2D(o.TEXTURE_2D,pe,De,Ne.width,Ne.height,0,Oe,Pe,Ne.data);E.generateMipmaps=!1}else st?(_t&&i.texStorage2D(o.TEXTURE_2D,Ae,De,de.width,de.height),k&&be(E,de,Oe,Pe)):i.texImage2D(o.TEXTURE_2D,0,De,de.width,de.height,0,Oe,Pe,de.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){st&&_t&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ae,De,at[0].width,at[0].height,de.depth);for(let pe=0,ze=at.length;pe<ze;pe++)if(Ne=at[pe],E.format!==Ui)if(Oe!==null)if(st){if(k)if(E.layerUpdates.size>0){const Ue=E_(Ne.width,Ne.height,E.format,E.type);for(const Me of E.layerUpdates){const We=Ne.data.subarray(Me*Ue/Ne.data.BYTES_PER_ELEMENT,(Me+1)*Ue/Ne.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,pe,0,0,Me,Ne.width,Ne.height,1,Oe,We)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,pe,0,0,0,Ne.width,Ne.height,de.depth,Oe,Ne.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,pe,De,Ne.width,Ne.height,de.depth,0,Ne.data,0,0);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?k&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,pe,0,0,0,Ne.width,Ne.height,de.depth,Oe,Pe,Ne.data):i.texImage3D(o.TEXTURE_2D_ARRAY,pe,De,Ne.width,Ne.height,de.depth,0,Oe,Pe,Ne.data)}else{st&&_t&&i.texStorage2D(o.TEXTURE_2D,Ae,De,at[0].width,at[0].height);for(let pe=0,ze=at.length;pe<ze;pe++)Ne=at[pe],E.format!==Ui?Oe!==null?st?k&&i.compressedTexSubImage2D(o.TEXTURE_2D,pe,0,0,Ne.width,Ne.height,Oe,Ne.data):i.compressedTexImage2D(o.TEXTURE_2D,pe,De,Ne.width,Ne.height,0,Ne.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?k&&i.texSubImage2D(o.TEXTURE_2D,pe,0,0,Ne.width,Ne.height,Oe,Pe,Ne.data):i.texImage2D(o.TEXTURE_2D,pe,De,Ne.width,Ne.height,0,Oe,Pe,Ne.data)}else if(E.isDataArrayTexture)if(st){if(_t&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ae,De,de.width,de.height,de.depth),k)if(E.layerUpdates.size>0){const pe=E_(de.width,de.height,E.format,E.type);for(const ze of E.layerUpdates){const Ue=de.data.subarray(ze*pe/de.data.BYTES_PER_ELEMENT,(ze+1)*pe/de.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ze,de.width,de.height,1,Oe,Pe,Ue)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Oe,Pe,de.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,De,de.width,de.height,de.depth,0,Oe,Pe,de.data);else if(E.isData3DTexture)st?(_t&&i.texStorage3D(o.TEXTURE_3D,Ae,De,de.width,de.height,de.depth),k&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Oe,Pe,de.data)):i.texImage3D(o.TEXTURE_3D,0,De,de.width,de.height,de.depth,0,Oe,Pe,de.data);else if(E.isFramebufferTexture){if(_t)if(st)i.texStorage2D(o.TEXTURE_2D,Ae,De,de.width,de.height);else{let pe=de.width,ze=de.height;for(let Ue=0;Ue<Ae;Ue++)i.texImage2D(o.TEXTURE_2D,Ue,De,pe,ze,0,Oe,Pe,null),pe>>=1,ze>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in o){const pe=o.canvas;if(pe.hasAttribute("layoutsubtree")||pe.setAttribute("layoutsubtree","true"),de.parentNode!==pe){pe.appendChild(de),S.add(E),pe.onpaint=nt=>{const nn=nt.changedElements;for(const Lt of S)nn.includes(Lt.image)&&(Lt.needsUpdate=!0)},pe.requestPaint();return}const ze=0,Ue=o.RGBA,Me=o.RGBA,We=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,ze,Ue,Me,We,de),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(at.length>0){if(st&&_t){const pe=Jt(at[0]);i.texStorage2D(o.TEXTURE_2D,Ae,De,pe.width,pe.height)}for(let pe=0,ze=at.length;pe<ze;pe++)Ne=at[pe],st?k&&i.texSubImage2D(o.TEXTURE_2D,pe,0,0,Oe,Pe,Ne):i.texImage2D(o.TEXTURE_2D,pe,De,Oe,Pe,Ne);E.generateMipmaps=!1}else if(st){if(_t){const pe=Jt(de);i.texStorage2D(o.TEXTURE_2D,Ae,De,pe.width,pe.height)}k&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Oe,Pe,de)}else i.texImage2D(o.TEXTURE_2D,0,De,Oe,Pe,de);y(E)&&D(_e),Le.__version=we.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function $e(w,E,J){if(E.image.length!==6)return;const _e=re(w,E),Ee=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,w.__webglTexture,o.TEXTURE0+J);const we=s.get(Ee);if(Ee.version!==we.__version||_e===!0){i.activeTexture(o.TEXTURE0+J);const Le=bt.getPrimaries(bt.workingColorSpace),fe=E.colorSpace===ss?null:bt.getPrimaries(E.colorSpace),de=E.colorSpace===ss||Le===fe?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Oe=E.isCompressedTexture||E.image[0].isCompressedTexture,Pe=E.image[0]&&E.image[0].isDataTexture,De=[];for(let Me=0;Me<6;Me++)!Oe&&!Pe?De[Me]=M(E.image[Me],!0,l.maxCubemapSize):De[Me]=Pe?E.image[Me].image:E.image[Me],De[Me]=Ce(E,De[Me]);const Ne=De[0],at=c.convert(E.format,E.colorSpace),st=c.convert(E.type),_t=L(E.internalFormat,at,st,E.normalized,E.colorSpace),k=E.isVideoTexture!==!0,Ae=we.__version===void 0||_e===!0,pe=Ee.dataReady;let ze=P(E,Ne);Re(o.TEXTURE_CUBE_MAP,E);let Ue;if(Oe){k&&Ae&&i.texStorage2D(o.TEXTURE_CUBE_MAP,ze,_t,Ne.width,Ne.height);for(let Me=0;Me<6;Me++){Ue=De[Me].mipmaps;for(let We=0;We<Ue.length;We++){const nt=Ue[We];E.format!==Ui?at!==null?k?pe&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We,0,0,nt.width,nt.height,at,nt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We,_t,nt.width,nt.height,0,nt.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?pe&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We,0,0,nt.width,nt.height,at,st,nt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We,_t,nt.width,nt.height,0,at,st,nt.data)}}}else{if(Ue=E.mipmaps,k&&Ae){Ue.length>0&&ze++;const Me=Jt(De[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,ze,_t,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(Pe){k?pe&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,De[Me].width,De[Me].height,at,st,De[Me].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,_t,De[Me].width,De[Me].height,0,at,st,De[Me].data);for(let We=0;We<Ue.length;We++){const nn=Ue[We].image[Me].image;k?pe&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We+1,0,0,nn.width,nn.height,at,st,nn.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We+1,_t,nn.width,nn.height,0,at,st,nn.data)}}else{k?pe&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,at,st,De[Me]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,_t,at,st,De[Me]);for(let We=0;We<Ue.length;We++){const nt=Ue[We];k?pe&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We+1,0,0,at,st,nt.image[Me]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We+1,_t,at,st,nt.image[Me])}}}y(E)&&D(o.TEXTURE_CUBE_MAP),we.__version=Ee.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function Ye(w,E,J,_e,Ee,we){const Le=c.convert(J.format,J.colorSpace),fe=c.convert(J.type),de=L(J.internalFormat,Le,fe,J.normalized,J.colorSpace),Oe=s.get(E),Pe=s.get(J);if(Pe.__renderTarget=E,!Oe.__hasExternalTextures){const De=Math.max(1,E.width>>we),Ne=Math.max(1,E.height>>we);Ee===o.TEXTURE_3D||Ee===o.TEXTURE_2D_ARRAY?i.texImage3D(Ee,we,de,De,Ne,E.depth,0,Le,fe,null):i.texImage2D(Ee,we,de,De,Ne,0,Le,fe,null)}i.bindFramebuffer(o.FRAMEBUFFER,w),ut(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,_e,Ee,Pe.__webglTexture,0,Ke(E)):(Ee===o.TEXTURE_2D||Ee>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,_e,Ee,Pe.__webglTexture,we),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Pt(w,E,J){if(o.bindRenderbuffer(o.RENDERBUFFER,w),E.depthBuffer){const _e=E.depthTexture,Ee=_e&&_e.isDepthTexture?_e.type:null,we=X(E.stencilBuffer,Ee),Le=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;ut(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ke(E),we,E.width,E.height):J?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ke(E),we,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,we,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Le,o.RENDERBUFFER,w)}else{const _e=E.textures;for(let Ee=0;Ee<_e.length;Ee++){const we=_e[Ee],Le=c.convert(we.format,we.colorSpace),fe=c.convert(we.type),de=L(we.internalFormat,Le,fe,we.normalized,we.colorSpace);ut(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ke(E),de,E.width,E.height):J?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ke(E),de,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,de,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ct(w,E,J){const _e=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,w),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Ee=s.get(E.depthTexture);if(Ee.__renderTarget=E,(!Ee.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),_e){if(Ee.__webglInit===void 0&&(Ee.__webglInit=!0,E.depthTexture.addEventListener("dispose",z)),Ee.__webglTexture===void 0){Ee.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,Ee.__webglTexture),Re(o.TEXTURE_CUBE_MAP,E.depthTexture);const Oe=c.convert(E.depthTexture.format),Pe=c.convert(E.depthTexture.type);let De;E.depthTexture.format===Ma?De=o.DEPTH_COMPONENT24:E.depthTexture.format===Is&&(De=o.DEPTH24_STENCIL8);for(let Ne=0;Ne<6;Ne++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,De,E.width,E.height,0,Oe,Pe,null)}}else oe(E.depthTexture,0);const we=Ee.__webglTexture,Le=Ke(E),fe=_e?o.TEXTURE_CUBE_MAP_POSITIVE_X+J:o.TEXTURE_2D,de=E.depthTexture.format===Is?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ma)ut(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,de,fe,we,0,Le):o.framebufferTexture2D(o.FRAMEBUFFER,de,fe,we,0);else if(E.depthTexture.format===Is)ut(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,de,fe,we,0,Le):o.framebufferTexture2D(o.FRAMEBUFFER,de,fe,we,0);else throw new Error("Unknown depthTexture format")}function mt(w){const E=s.get(w),J=w.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==w.depthTexture){const _e=w.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),_e){const Ee=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,_e.removeEventListener("dispose",Ee)};_e.addEventListener("dispose",Ee),E.__depthDisposeCallback=Ee}E.__boundDepthTexture=_e}if(w.depthTexture&&!E.__autoAllocateDepthBuffer)if(J)for(let _e=0;_e<6;_e++)ct(E.__webglFramebuffer[_e],w,_e);else{const _e=w.texture.mipmaps;_e&&_e.length>0?ct(E.__webglFramebuffer[0],w,0):ct(E.__webglFramebuffer,w,0)}else if(J){E.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[_e]),E.__webglDepthbuffer[_e]===void 0)E.__webglDepthbuffer[_e]=o.createRenderbuffer(),Pt(E.__webglDepthbuffer[_e],w,!1);else{const Ee=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,we=E.__webglDepthbuffer[_e];o.bindRenderbuffer(o.RENDERBUFFER,we),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ee,o.RENDERBUFFER,we)}}else{const _e=w.texture.mipmaps;if(_e&&_e.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Pt(E.__webglDepthbuffer,w,!1);else{const Ee=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,we=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,we),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ee,o.RENDERBUFFER,we)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Rt(w,E,J){const _e=s.get(w);E!==void 0&&Ye(_e.__webglFramebuffer,w,w.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),J!==void 0&&mt(w)}function ot(w){const E=w.texture,J=s.get(w),_e=s.get(E);w.addEventListener("dispose",b);const Ee=w.textures,we=w.isWebGLCubeRenderTarget===!0,Le=Ee.length>1;if(Le||(_e.__webglTexture===void 0&&(_e.__webglTexture=o.createTexture()),_e.__version=E.version,d.memory.textures++),we){J.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer[fe]=[];for(let de=0;de<E.mipmaps.length;de++)J.__webglFramebuffer[fe][de]=o.createFramebuffer()}else J.__webglFramebuffer[fe]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer=[];for(let fe=0;fe<E.mipmaps.length;fe++)J.__webglFramebuffer[fe]=o.createFramebuffer()}else J.__webglFramebuffer=o.createFramebuffer();if(Le)for(let fe=0,de=Ee.length;fe<de;fe++){const Oe=s.get(Ee[fe]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=o.createTexture(),d.memory.textures++)}if(w.samples>0&&ut(w)===!1){J.__webglMultisampledFramebuffer=o.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let fe=0;fe<Ee.length;fe++){const de=Ee[fe];J.__webglColorRenderbuffer[fe]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,J.__webglColorRenderbuffer[fe]);const Oe=c.convert(de.format,de.colorSpace),Pe=c.convert(de.type),De=L(de.internalFormat,Oe,Pe,de.normalized,de.colorSpace,w.isXRRenderTarget===!0),Ne=Ke(w);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ne,De,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+fe,o.RENDERBUFFER,J.__webglColorRenderbuffer[fe])}o.bindRenderbuffer(o.RENDERBUFFER,null),w.depthBuffer&&(J.__webglDepthRenderbuffer=o.createRenderbuffer(),Pt(J.__webglDepthRenderbuffer,w,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(we){i.bindTexture(o.TEXTURE_CUBE_MAP,_e.__webglTexture),Re(o.TEXTURE_CUBE_MAP,E);for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0)for(let de=0;de<E.mipmaps.length;de++)Ye(J.__webglFramebuffer[fe][de],w,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,de);else Ye(J.__webglFramebuffer[fe],w,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);y(E)&&D(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Le){for(let fe=0,de=Ee.length;fe<de;fe++){const Oe=Ee[fe],Pe=s.get(Oe);let De=o.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(De=w.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(De,Pe.__webglTexture),Re(De,Oe),Ye(J.__webglFramebuffer,w,Oe,o.COLOR_ATTACHMENT0+fe,De,0),y(Oe)&&D(De)}i.unbindTexture()}else{let fe=o.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(fe=w.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(fe,_e.__webglTexture),Re(fe,E),E.mipmaps&&E.mipmaps.length>0)for(let de=0;de<E.mipmaps.length;de++)Ye(J.__webglFramebuffer[de],w,E,o.COLOR_ATTACHMENT0,fe,de);else Ye(J.__webglFramebuffer,w,E,o.COLOR_ATTACHMENT0,fe,0);y(E)&&D(fe),i.unbindTexture()}w.depthBuffer&&mt(w)}function Qt(w){const E=w.textures;for(let J=0,_e=E.length;J<_e;J++){const Ee=E[J];if(y(Ee)){const we=F(w),Le=s.get(Ee).__webglTexture;i.bindTexture(we,Le),D(we),i.unbindTexture()}}}const et=[],gt=[];function V(w){if(w.samples>0){if(ut(w)===!1){const E=w.textures,J=w.width,_e=w.height;let Ee=o.COLOR_BUFFER_BIT;const we=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Le=s.get(w),fe=E.length>1;if(fe)for(let Oe=0;Oe<E.length;Oe++)i.bindFramebuffer(o.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Oe,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Le.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Oe,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const de=w.texture.mipmaps;de&&de.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Oe=0;Oe<E.length;Oe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Ee|=o.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Ee|=o.STENCIL_BUFFER_BIT)),fe){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Le.__webglColorRenderbuffer[Oe]);const Pe=s.get(E[Oe]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Pe,0)}o.blitFramebuffer(0,0,J,_e,0,0,J,_e,Ee,o.NEAREST),m===!0&&(et.length=0,gt.length=0,et.push(o.COLOR_ATTACHMENT0+Oe),w.depthBuffer&&w.resolveDepthBuffer===!1&&(et.push(we),gt.push(we),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,gt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,et))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),fe)for(let Oe=0;Oe<E.length;Oe++){i.bindFramebuffer(o.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Oe,o.RENDERBUFFER,Le.__webglColorRenderbuffer[Oe]);const Pe=s.get(E[Oe]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Le.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Oe,o.TEXTURE_2D,Pe,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&m){const E=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Ke(w){return Math.min(l.maxSamples,w.samples)}function ut(w){const E=s.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function kt(w){const E=d.render.frame;v.get(w)!==E&&(v.set(w,E),w.update())}function Ce(w,E){const J=w.colorSpace,_e=w.format,Ee=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||J!==Vc&&J!==ss&&(bt.getTransfer(J)===Vt?(_e!==Ui||Ee!==ui)&&it("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):At("WebGLTextures: Unsupported texture color space:",J)),E}function Jt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(h.width=w.naturalWidth||w.width,h.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(h.width=w.displayWidth,h.height=w.displayHeight):(h.width=w.width,h.height=w.height),h}this.allocateTextureUnit=U,this.resetTextureUnits=le,this.getTextureUnits=ue,this.setTextureUnits=W,this.setTexture2D=oe,this.setTexture2DArray=me,this.setTexture3D=ye,this.setTextureCube=O,this.rebindTextures=Rt,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=V,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=Ye,this.useMultisampledRTT=ut,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function UA(o,t){function i(s,l=ss){let c;const d=bt.getTransfer(l);if(s===ui)return o.UNSIGNED_BYTE;if(s===Hh)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Gh)return o.UNSIGNED_SHORT_5_5_5_1;if(s===ox)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===lx)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===sx)return o.BYTE;if(s===rx)return o.SHORT;if(s===Yo)return o.UNSIGNED_SHORT;if(s===Bh)return o.INT;if(s===Wi)return o.UNSIGNED_INT;if(s===Vi)return o.FLOAT;if(s===ya)return o.HALF_FLOAT;if(s===cx)return o.ALPHA;if(s===ux)return o.RGB;if(s===Ui)return o.RGBA;if(s===Ma)return o.DEPTH_COMPONENT;if(s===Is)return o.DEPTH_STENCIL;if(s===fx)return o.RED;if(s===Vh)return o.RED_INTEGER;if(s===zs)return o.RG;if(s===kh)return o.RG_INTEGER;if(s===Xh)return o.RGBA_INTEGER;if(s===Pc||s===Ic||s===Fc||s===zc)if(d===Vt)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Pc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ic)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Fc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Pc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ic)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Fc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===zc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===th||s===nh||s===ih||s===ah)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===th)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===nh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ih)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ah)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===sh||s===rh||s===oh||s===lh||s===ch||s===Hc||s===uh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===sh||s===rh)return d===Vt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===oh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===lh)return c.COMPRESSED_R11_EAC;if(s===ch)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Hc)return c.COMPRESSED_RG11_EAC;if(s===uh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===fh||s===dh||s===hh||s===ph||s===mh||s===gh||s===_h||s===xh||s===vh||s===Sh||s===yh||s===Mh||s===Eh||s===bh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===fh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===dh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===hh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ph)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===mh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===gh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===_h)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===xh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===vh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Sh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===yh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Mh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Eh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===bh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Th||s===Ah||s===Rh)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Th)return d===Vt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ah)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Rh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ch||s===wh||s===Gc||s===Nh)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Ch)return c.COMPRESSED_RED_RGTC1_EXT;if(s===wh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Gc)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Nh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Zo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const LA=`
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

}`;class PA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Mx(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new qi({vertexShader:LA,fragmentShader:OA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new In(new Yc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class IA extends Bs{constructor(t,i){super();const s=this;let l=null,c=1,d=null,p="local-floor",m=1,h=null,v=null,S=null,g=null,x=null,T=null;const N=typeof XRWebGLBinding<"u",M=new PA,y={},D=i.getContextAttributes();let F=null,L=null;const X=[],P=[],z=new Ut;let b=null;const I=new ci;I.viewport=new rn;const Z=new ci;Z.viewport=new rn;const G=[I,Z],Y=new jM;let le=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let Se=X[re];return Se===void 0&&(Se=new _d,X[re]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(re){let Se=X[re];return Se===void 0&&(Se=new _d,X[re]=Se),Se.getGripSpace()},this.getHand=function(re){let Se=X[re];return Se===void 0&&(Se=new _d,X[re]=Se),Se.getHandSpace()};function W(re){const Se=P.indexOf(re.inputSource);if(Se===-1)return;const be=X[Se];be!==void 0&&(be.update(re.inputSource,re.frame,h||d),be.dispatchEvent({type:re.type,data:re.inputSource}))}function U(){l.removeEventListener("select",W),l.removeEventListener("selectstart",W),l.removeEventListener("selectend",W),l.removeEventListener("squeeze",W),l.removeEventListener("squeezestart",W),l.removeEventListener("squeezeend",W),l.removeEventListener("end",U),l.removeEventListener("inputsourceschange",B);for(let re=0;re<X.length;re++){const Se=P[re];Se!==null&&(P[re]=null,X[re].disconnect(Se))}le=null,ue=null,M.reset();for(const re in y)delete y[re];t.setRenderTarget(F),x=null,g=null,S=null,l=null,L=null,Re.stop(),s.isPresenting=!1,t.setPixelRatio(b),t.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){c=re,s.isPresenting===!0&&it("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){p=re,s.isPresenting===!0&&it("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(re){h=re},this.getBaseLayer=function(){return g!==null?g:x},this.getBinding=function(){return S===null&&N&&(S=new XRWebGLBinding(l,i)),S},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(re){if(l=re,l!==null){if(F=t.getRenderTarget(),l.addEventListener("select",W),l.addEventListener("selectstart",W),l.addEventListener("selectend",W),l.addEventListener("squeeze",W),l.addEventListener("squeezestart",W),l.addEventListener("squeezeend",W),l.addEventListener("end",U),l.addEventListener("inputsourceschange",B),D.xrCompatible!==!0&&await i.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(z),N&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,He=null,$e=null;D.depth&&($e=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,be=D.stencil?Is:Ma,He=D.stencil?Zo:Wi);const Ye={colorFormat:i.RGBA8,depthFormat:$e,scaleFactor:c};S=this.getBinding(),g=S.createProjectionLayer(Ye),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),L=new ji(g.textureWidth,g.textureHeight,{format:Ui,type:ui,depthTexture:new Fr(g.textureWidth,g.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:D.stencil,colorSpace:t.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const be={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(l,i,be),l.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),L=new ji(x.framebufferWidth,x.framebufferHeight,{format:Ui,type:ui,colorSpace:t.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),h=null,d=await l.requestReferenceSpace(p),Re.setContext(l),Re.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function B(re){for(let Se=0;Se<re.removed.length;Se++){const be=re.removed[Se],He=P.indexOf(be);He>=0&&(P[He]=null,X[He].disconnect(be))}for(let Se=0;Se<re.added.length;Se++){const be=re.added[Se];let He=P.indexOf(be);if(He===-1){for(let Ye=0;Ye<X.length;Ye++)if(Ye>=P.length){P.push(be),He=Ye;break}else if(P[Ye]===null){P[Ye]=be,He=Ye;break}if(He===-1)break}const $e=X[He];$e&&$e.connect(be)}}const oe=new ie,me=new ie;function ye(re,Se,be){oe.setFromMatrixPosition(Se.matrixWorld),me.setFromMatrixPosition(be.matrixWorld);const He=oe.distanceTo(me),$e=Se.projectionMatrix.elements,Ye=be.projectionMatrix.elements,Pt=$e[14]/($e[10]-1),ct=$e[14]/($e[10]+1),mt=($e[9]+1)/$e[5],Rt=($e[9]-1)/$e[5],ot=($e[8]-1)/$e[0],Qt=(Ye[8]+1)/Ye[0],et=Pt*ot,gt=Pt*Qt,V=He/(-ot+Qt),Ke=V*-ot;if(Se.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(Ke),re.translateZ(V),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),$e[10]===-1)re.projectionMatrix.copy(Se.projectionMatrix),re.projectionMatrixInverse.copy(Se.projectionMatrixInverse);else{const ut=Pt+V,kt=ct+V,Ce=et-Ke,Jt=gt+(He-Ke),w=mt*ct/kt*ut,E=Rt*ct/kt*ut;re.projectionMatrix.makePerspective(Ce,Jt,w,E,ut,kt),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function O(re,Se){Se===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(Se.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(l===null)return;let Se=re.near,be=re.far;M.texture!==null&&(M.depthNear>0&&(Se=M.depthNear),M.depthFar>0&&(be=M.depthFar)),Y.near=Z.near=I.near=Se,Y.far=Z.far=I.far=be,(le!==Y.near||ue!==Y.far)&&(l.updateRenderState({depthNear:Y.near,depthFar:Y.far}),le=Y.near,ue=Y.far),Y.layers.mask=re.layers.mask|6,I.layers.mask=Y.layers.mask&-5,Z.layers.mask=Y.layers.mask&-3;const He=re.parent,$e=Y.cameras;O(Y,He);for(let Ye=0;Ye<$e.length;Ye++)O($e[Ye],He);$e.length===2?ye(Y,I,Z):Y.projectionMatrix.copy(I.projectionMatrix),Q(re,Y,He)};function Q(re,Se,be){be===null?re.matrix.copy(Se.matrixWorld):(re.matrix.copy(be.matrixWorld),re.matrix.invert(),re.matrix.multiply(Se.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(Se.projectionMatrix),re.projectionMatrixInverse.copy(Se.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Lh*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(g===null&&x===null))return m},this.setFoveation=function(re){m=re,g!==null&&(g.fixedFoveation=re),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=re)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Y)},this.getCameraTexture=function(re){return y[re]};let ve=null;function Te(re,Se){if(v=Se.getViewerPose(h||d),T=Se,v!==null){const be=v.views;x!==null&&(t.setRenderTargetFramebuffer(L,x.framebuffer),t.setRenderTarget(L));let He=!1;be.length!==Y.cameras.length&&(Y.cameras.length=0,He=!0);for(let ct=0;ct<be.length;ct++){const mt=be[ct];let Rt=null;if(x!==null)Rt=x.getViewport(mt);else{const Qt=S.getViewSubImage(g,mt);Rt=Qt.viewport,ct===0&&(t.setRenderTargetTextures(L,Qt.colorTexture,Qt.depthStencilTexture),t.setRenderTarget(L))}let ot=G[ct];ot===void 0&&(ot=new ci,ot.layers.enable(ct),ot.viewport=new rn,G[ct]=ot),ot.matrix.fromArray(mt.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(mt.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),ct===0&&(Y.matrix.copy(ot.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),He===!0&&Y.cameras.push(ot)}const $e=l.enabledFeatures;if($e&&$e.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&N){S=s.getBinding();const ct=S.getDepthInformation(be[0]);ct&&ct.isValid&&ct.texture&&M.init(ct,l.renderState)}if($e&&$e.includes("camera-access")&&N){t.state.unbindTexture(),S=s.getBinding();for(let ct=0;ct<be.length;ct++){const mt=be[ct].camera;if(mt){let Rt=y[mt];Rt||(Rt=new Mx,y[mt]=Rt);const ot=S.getCameraImage(mt);Rt.sourceTexture=ot}}}}for(let be=0;be<X.length;be++){const He=P[be],$e=X[be];He!==null&&$e!==void 0&&$e.update(He,Se,h||d)}ve&&ve(re,Se),Se.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Se}),T=null}const Re=new Ax;Re.setAnimationLoop(Te),this.setAnimationLoop=function(re){ve=re},this.dispose=function(){}}}const FA=new on,Lx=new lt;Lx.set(-1,0,0,0,1,0,0,0,1);function zA(o,t){function i(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function s(M,y){y.color.getRGB(M.fogColor.value,Ex(o)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function l(M,y,D,F,L){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?c(M,y):y.isMeshLambertMaterial?(c(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(M,y),S(M,y)):y.isMeshPhongMaterial?(c(M,y),v(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(M,y),g(M,y),y.isMeshPhysicalMaterial&&x(M,y,L)):y.isMeshMatcapMaterial?(c(M,y),T(M,y)):y.isMeshDepthMaterial?c(M,y):y.isMeshDistanceMaterial?(c(M,y),N(M,y)):y.isMeshNormalMaterial?c(M,y):y.isLineBasicMaterial?(d(M,y),y.isLineDashedMaterial&&p(M,y)):y.isPointsMaterial?m(M,y,D,F):y.isSpriteMaterial?h(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,i(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===Yn&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,i(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===Yn&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,i(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,i(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const D=t.get(y),F=D.envMap,L=D.envMapRotation;F&&(M.envMap.value=F,M.envMapRotation.value.setFromMatrix4(FA.makeRotationFromEuler(L)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(Lx),M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,M.aoMapTransform))}function d(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform))}function p(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function m(M,y,D,F){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*D,M.scale.value=F*.5,y.map&&(M.map.value=y.map,i(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function h(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function v(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function S(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function g(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function x(M,y,D){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Yn&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=D.texture,M.transmissionSamplerSize.value.set(D.width,D.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,y){y.matcap&&(M.matcap.value=y.matcap)}function N(M,y){const D=t.get(y).light;M.referencePosition.value.setFromMatrixPosition(D.matrixWorld),M.nearDistance.value=D.shadow.camera.near,M.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function BA(o,t,i,s){let l={},c={},d=[];const p=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,F){const L=F.program;s.uniformBlockBinding(D,L)}function h(D,F){let L=l[D.id];L===void 0&&(T(D),L=v(D),l[D.id]=L,D.addEventListener("dispose",M));const X=F.program;s.updateUBOMapping(D,X);const P=t.render.frame;c[D.id]!==P&&(g(D),c[D.id]=P)}function v(D){const F=S();D.__bindingPointIndex=F;const L=o.createBuffer(),X=D.__size,P=D.usage;return o.bindBuffer(o.UNIFORM_BUFFER,L),o.bufferData(o.UNIFORM_BUFFER,X,P),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,F,L),L}function S(){for(let D=0;D<p;D++)if(d.indexOf(D)===-1)return d.push(D),D;return At("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(D){const F=l[D.id],L=D.uniforms,X=D.__cache;o.bindBuffer(o.UNIFORM_BUFFER,F);for(let P=0,z=L.length;P<z;P++){const b=Array.isArray(L[P])?L[P]:[L[P]];for(let I=0,Z=b.length;I<Z;I++){const G=b[I];if(x(G,P,I,X)===!0){const Y=G.__offset,le=Array.isArray(G.value)?G.value:[G.value];let ue=0;for(let W=0;W<le.length;W++){const U=le[W],B=N(U);typeof U=="number"||typeof U=="boolean"?(G.__data[0]=U,o.bufferSubData(o.UNIFORM_BUFFER,Y+ue,G.__data)):U.isMatrix3?(G.__data[0]=U.elements[0],G.__data[1]=U.elements[1],G.__data[2]=U.elements[2],G.__data[3]=0,G.__data[4]=U.elements[3],G.__data[5]=U.elements[4],G.__data[6]=U.elements[5],G.__data[7]=0,G.__data[8]=U.elements[6],G.__data[9]=U.elements[7],G.__data[10]=U.elements[8],G.__data[11]=0):ArrayBuffer.isView(U)?G.__data.set(new U.constructor(U.buffer,U.byteOffset,G.__data.length)):(U.toArray(G.__data,ue),ue+=B.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,Y,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function x(D,F,L,X){const P=D.value,z=F+"_"+L;if(X[z]===void 0)return typeof P=="number"||typeof P=="boolean"?X[z]=P:ArrayBuffer.isView(P)?X[z]=P.slice():X[z]=P.clone(),!0;{const b=X[z];if(typeof P=="number"||typeof P=="boolean"){if(b!==P)return X[z]=P,!0}else{if(ArrayBuffer.isView(P))return!0;if(b.equals(P)===!1)return b.copy(P),!0}}return!1}function T(D){const F=D.uniforms;let L=0;const X=16;for(let z=0,b=F.length;z<b;z++){const I=Array.isArray(F[z])?F[z]:[F[z]];for(let Z=0,G=I.length;Z<G;Z++){const Y=I[Z],le=Array.isArray(Y.value)?Y.value:[Y.value];for(let ue=0,W=le.length;ue<W;ue++){const U=le[ue],B=N(U),oe=L%X,me=oe%B.boundary,ye=oe+me;L+=me,ye!==0&&X-ye<B.storage&&(L+=X-ye),Y.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=L,L+=B.storage}}}const P=L%X;return P>0&&(L+=X-P),D.__size=L,D.__cache={},this}function N(D){const F={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(F.boundary=4,F.storage=4):D.isVector2?(F.boundary=8,F.storage=8):D.isVector3||D.isColor?(F.boundary=16,F.storage=12):D.isVector4?(F.boundary=16,F.storage=16):D.isMatrix3?(F.boundary=48,F.storage=48):D.isMatrix4?(F.boundary=64,F.storage=64):D.isTexture?it("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(D)?(F.boundary=16,F.storage=D.byteLength):it("WebGLRenderer: Unsupported uniform value type.",D),F}function M(D){const F=D.target;F.removeEventListener("dispose",M);const L=d.indexOf(F.__bindingPointIndex);d.splice(L,1),o.deleteBuffer(l[F.id]),delete l[F.id],delete c[F.id]}function y(){for(const D in l)o.deleteBuffer(l[D]);d=[],l={},c={}}return{bind:m,update:h,dispose:y}}const HA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Hi=null;function GA(){return Hi===null&&(Hi=new RM(HA,16,16,zs,ya),Hi.name="DFG_LUT",Hi.minFilter=Fn,Hi.magFilter=Fn,Hi.wrapS=xa,Hi.wrapT=xa,Hi.generateMipmaps=!1,Hi.needsUpdate=!0),Hi}class VA{constructor(t={}){const{canvas:i=aM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:g=!1,outputBufferType:x=ui}=t;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=d;const N=x,M=new Set([Xh,kh,Vh]),y=new Set([ui,Wi,Yo,Zo,Hh,Gh]),D=new Uint32Array(4),F=new Int32Array(4),L=new ie;let X=null,P=null;const z=[],b=[];let I=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Z=this;let G=!1,Y=null;this._outputColorSpace=li;let le=0,ue=0,W=null,U=-1,B=null;const oe=new rn,me=new rn;let ye=null;const O=new Dt(0);let Q=0,ve=i.width,Te=i.height,Re=1,re=null,Se=null;const be=new rn(0,0,ve,Te),He=new rn(0,0,ve,Te);let $e=!1;const Ye=new Yh;let Pt=!1,ct=!1;const mt=new on,Rt=new ie,ot=new rn,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let et=!1;function gt(){return W===null?Re:1}let V=s;function Ke(A,q){return i.getContext(A,q)}try{const A={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:v,failIfMajorPerformanceCaveat:S};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${zh}`),i.addEventListener("webglcontextlost",Me,!1),i.addEventListener("webglcontextrestored",We,!1),i.addEventListener("webglcontextcreationerror",nt,!1),V===null){const q="webgl2";if(V=Ke(q,A),V===null)throw Ke(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw At("WebGLRenderer: "+A.message),A}let ut,kt,Ce,Jt,w,E,J,_e,Ee,we,Le,fe,de,Oe,Pe,De,Ne,at,st,_t,k,Ae,pe;function ze(){ut=new G1(V),ut.init(),k=new UA(V,ut),kt=new L1(V,ut,t,k),Ce=new NA(V,ut),kt.reversedDepthBuffer&&g&&Ce.buffers.depth.setReversed(!0),Jt=new X1(V),w=new gA,E=new DA(V,ut,Ce,w,kt,k,Jt),J=new H1(Z),_e=new YM(V),Ae=new D1(V,_e),Ee=new V1(V,_e,Jt,Ae),we=new W1(V,Ee,_e,Ae,Jt),at=new j1(V,kt,E),Pe=new O1(w),Le=new mA(Z,J,ut,kt,Ae,Pe),fe=new zA(Z,w),de=new xA,Oe=new bA(ut),Ne=new N1(Z,J,Ce,we,T,m),De=new wA(Z,we,kt),pe=new BA(V,Jt,kt,Ce),st=new U1(V,ut,Jt),_t=new k1(V,ut,Jt),Jt.programs=Le.programs,Z.capabilities=kt,Z.extensions=ut,Z.properties=w,Z.renderLists=de,Z.shadowMap=De,Z.state=Ce,Z.info=Jt}ze(),N!==ui&&(I=new Y1(N,i.width,i.height,l,c));const Ue=new IA(Z,V);this.xr=Ue,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const A=ut.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ut.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Re},this.setPixelRatio=function(A){A!==void 0&&(Re=A,this.setSize(ve,Te,!1))},this.getSize=function(A){return A.set(ve,Te)},this.setSize=function(A,q,ae=!0){if(Ue.isPresenting){it("WebGLRenderer: Can't change size while VR device is presenting.");return}ve=A,Te=q,i.width=Math.floor(A*Re),i.height=Math.floor(q*Re),ae===!0&&(i.style.width=A+"px",i.style.height=q+"px"),I!==null&&I.setSize(i.width,i.height),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(ve*Re,Te*Re).floor()},this.setDrawingBufferSize=function(A,q,ae){ve=A,Te=q,Re=ae,i.width=Math.floor(A*ae),i.height=Math.floor(q*ae),this.setViewport(0,0,A,q)},this.setEffects=function(A){if(N===ui){At("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let q=0;q<A.length;q++)if(A[q].isOutputPass===!0){it("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(oe)},this.getViewport=function(A){return A.copy(be)},this.setViewport=function(A,q,ae,te){A.isVector4?be.set(A.x,A.y,A.z,A.w):be.set(A,q,ae,te),Ce.viewport(oe.copy(be).multiplyScalar(Re).round())},this.getScissor=function(A){return A.copy(He)},this.setScissor=function(A,q,ae,te){A.isVector4?He.set(A.x,A.y,A.z,A.w):He.set(A,q,ae,te),Ce.scissor(me.copy(He).multiplyScalar(Re).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(A){Ce.setScissorTest($e=A)},this.setOpaqueSort=function(A){re=A},this.setTransparentSort=function(A){Se=A},this.getClearColor=function(A){return A.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,ae=!0){let te=0;if(A){let ne=!1;if(W!==null){const Fe=W.texture.format;ne=M.has(Fe)}if(ne){const Fe=W.texture.type,Ve=y.has(Fe),Ie=Ne.getClearColor(),Xe=Ne.getClearAlpha(),ke=Ie.r,Qe=Ie.g,ft=Ie.b;Ve?(D[0]=ke,D[1]=Qe,D[2]=ft,D[3]=Xe,V.clearBufferuiv(V.COLOR,0,D)):(F[0]=ke,F[1]=Qe,F[2]=ft,F[3]=Xe,V.clearBufferiv(V.COLOR,0,F))}else te|=V.COLOR_BUFFER_BIT}q&&(te|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ae&&(te|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&V.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),Y=A},this.dispose=function(){i.removeEventListener("webglcontextlost",Me,!1),i.removeEventListener("webglcontextrestored",We,!1),i.removeEventListener("webglcontextcreationerror",nt,!1),Ne.dispose(),de.dispose(),Oe.dispose(),w.dispose(),J.dispose(),we.dispose(),Ae.dispose(),pe.dispose(),Le.dispose(),Ue.dispose(),Ue.removeEventListener("sessionstart",Xr),Ue.removeEventListener("sessionend",jr),Dn.stop()};function Me(A){A.preventDefault(),$g("WebGLRenderer: Context Lost."),G=!0}function We(){$g("WebGLRenderer: Context Restored."),G=!1;const A=Jt.autoReset,q=De.enabled,ae=De.autoUpdate,te=De.needsUpdate,ne=De.type;ze(),Jt.autoReset=A,De.enabled=q,De.autoUpdate=ae,De.needsUpdate=te,De.type=ne}function nt(A){At("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function nn(A){const q=A.target;q.removeEventListener("dispose",nn),Lt(q)}function Lt(A){fi(A),w.remove(A)}function fi(A){const q=w.get(A).programs;q!==void 0&&(q.forEach(function(ae){Le.releaseProgram(ae)}),A.isShaderMaterial&&Le.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,ae,te,ne,Fe){q===null&&(q=Qt);const Ve=ne.isMesh&&ne.matrixWorld.determinant()<0,Ie=Ta(A,q,ae,te,ne);Ce.setMaterial(te,Ve);let Xe=ae.index,ke=1;if(te.wireframe===!0){if(Xe=Ee.getWireframeAttribute(ae),Xe===void 0)return;ke=2}const Qe=ae.drawRange,ft=ae.attributes.position;let Ze=Qe.start*ke,Ct=(Qe.start+Qe.count)*ke;Fe!==null&&(Ze=Math.max(Ze,Fe.start*ke),Ct=Math.min(Ct,(Fe.start+Fe.count)*ke)),Xe!==null?(Ze=Math.max(Ze,0),Ct=Math.min(Ct,Xe.count)):ft!=null&&(Ze=Math.max(Ze,0),Ct=Math.min(Ct,ft.count));const $t=Ct-Ze;if($t<0||$t===1/0)return;Ae.setup(ne,te,Ie,ae,Xe);let qt,Ft=st;if(Xe!==null&&(qt=_e.get(Xe),Ft=_t,Ft.setIndex(qt)),ne.isMesh)te.wireframe===!0?(Ce.setLineWidth(te.wireframeLinewidth*gt()),Ft.setMode(V.LINES)):Ft.setMode(V.TRIANGLES);else if(ne.isLine){let zt=te.linewidth;zt===void 0&&(zt=1),Ce.setLineWidth(zt*gt()),ne.isLineSegments?Ft.setMode(V.LINES):ne.isLineLoop?Ft.setMode(V.LINE_LOOP):Ft.setMode(V.LINE_STRIP)}else ne.isPoints?Ft.setMode(V.POINTS):ne.isSprite&&Ft.setMode(V.TRIANGLES);if(ne.isBatchedMesh)if(ut.get("WEBGL_multi_draw"))Ft.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const zt=ne._multiDrawStarts,Ge=ne._multiDrawCounts,Un=ne._multiDrawCount,xt=Xe?_e.get(Xe).bytesPerElement:1,_n=w.get(te).currentProgram.getUniforms();for(let Qn=0;Qn<Un;Qn++)_n.setValue(V,"_gl_DrawID",Qn),Ft.render(zt[Qn]/xt,Ge[Qn])}else if(ne.isInstancedMesh)Ft.renderInstances(Ze,$t,ne.count);else if(ae.isInstancedBufferGeometry){const zt=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Ge=Math.min(ae.instanceCount,zt);Ft.renderInstances(Ze,$t,Ge)}else Ft.render(Ze,$t)};function Kn(A,q,ae){A.transparent===!0&&A.side===_a&&A.forceSinglePass===!1?(A.side=Yn,A.needsUpdate=!0,Hs(A,q,ae),A.side=os,A.needsUpdate=!0,Hs(A,q,ae),A.side=_a):Hs(A,q,ae)}this.compile=function(A,q,ae=null){ae===null&&(ae=A),P=Oe.get(ae),P.init(q),b.push(P),ae.traverseVisible(function(ne){ne.isLight&&ne.layers.test(q.layers)&&(P.pushLight(ne),ne.castShadow&&P.pushShadow(ne))}),A!==ae&&A.traverseVisible(function(ne){ne.isLight&&ne.layers.test(q.layers)&&(P.pushLight(ne),ne.castShadow&&P.pushShadow(ne))}),P.setupLights();const te=new Set;return A.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const Fe=ne.material;if(Fe)if(Array.isArray(Fe))for(let Ve=0;Ve<Fe.length;Ve++){const Ie=Fe[Ve];Kn(Ie,ae,ne),te.add(Ie)}else Kn(Fe,ae,ne),te.add(Fe)}),P=b.pop(),te},this.compileAsync=function(A,q,ae=null){const te=this.compile(A,q,ae);return new Promise(ne=>{function Fe(){if(te.forEach(function(Ve){w.get(Ve).currentProgram.isReady()&&te.delete(Ve)}),te.size===0){ne(A);return}setTimeout(Fe,10)}ut.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let cs=null;function kr(A){cs&&cs(A)}function Xr(){Dn.stop()}function jr(){Dn.start()}const Dn=new Ax;Dn.setAnimationLoop(kr),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(A){cs=A,Ue.setAnimationLoop(A),A===null?Dn.stop():Dn.start()},Ue.addEventListener("sessionstart",Xr),Ue.addEventListener("sessionend",jr),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){At("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;Y!==null&&Y.renderStart(A,q);const ae=Ue.enabled===!0&&Ue.isPresenting===!0,te=I!==null&&(W===null||ae)&&I.begin(Z,W);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(q),q=Ue.getCamera()),A.isScene===!0&&A.onBeforeRender(Z,A,q,W),P=Oe.get(A,b.length),P.init(q),P.state.textureUnits=E.getTextureUnits(),b.push(P),mt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Ye.setFromProjectionMatrix(mt,ki,q.reversedDepth),ct=this.localClippingEnabled,Pt=Pe.init(this.clippingPlanes,ct),X=de.get(A,z.length),X.init(),z.push(X),Ue.enabled===!0&&Ue.isPresenting===!0){const Ve=Z.xr.getDepthSensingMesh();Ve!==null&&ln(Ve,q,-1/0,Z.sortObjects)}ln(A,q,0,Z.sortObjects),X.finish(),Z.sortObjects===!0&&X.sort(re,Se),et=Ue.enabled===!1||Ue.isPresenting===!1||Ue.hasDepthSensing()===!1,et&&Ne.addToRenderList(X,A),this.info.render.frame++,Pt===!0&&Pe.beginShadows();const ne=P.state.shadowsArray;if(De.render(ne,A,q),Pt===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(te&&I.hasRenderPass())===!1){const Ve=X.opaque,Ie=X.transmissive;if(P.setupLights(),q.isArrayCamera){const Xe=q.cameras;if(Ie.length>0)for(let ke=0,Qe=Xe.length;ke<Qe;ke++){const ft=Xe[ke];Yi(Ve,Ie,A,ft)}et&&Ne.render(A);for(let ke=0,Qe=Xe.length;ke<Qe;ke++){const ft=Xe[ke];En(X,A,ft,ft.viewport)}}else Ie.length>0&&Yi(Ve,Ie,A,q),et&&Ne.render(A),En(X,A,q)}W!==null&&ue===0&&(E.updateMultisampleRenderTarget(W),E.updateRenderTargetMipmap(W)),te&&I.end(Z),A.isScene===!0&&A.onAfterRender(Z,A,q),Ae.resetDefaultState(),U=-1,B=null,b.pop(),b.length>0?(P=b[b.length-1],E.setTextureUnits(P.state.textureUnits),Pt===!0&&Pe.setGlobalState(Z.clippingPlanes,P.state.camera)):P=null,z.pop(),z.length>0?X=z[z.length-1]:X=null,Y!==null&&Y.renderEnd()};function ln(A,q,ae,te){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)ae=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLightProbeGrid)P.pushLightProbeGrid(A);else if(A.isLight)P.pushLight(A),A.castShadow&&P.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ye.intersectsSprite(A)){te&&ot.setFromMatrixPosition(A.matrixWorld).applyMatrix4(mt);const Ve=we.update(A),Ie=A.material;Ie.visible&&X.push(A,Ve,Ie,ae,ot.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ye.intersectsObject(A))){const Ve=we.update(A),Ie=A.material;if(te&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ot.copy(A.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),ot.copy(Ve.boundingSphere.center)),ot.applyMatrix4(A.matrixWorld).applyMatrix4(mt)),Array.isArray(Ie)){const Xe=Ve.groups;for(let ke=0,Qe=Xe.length;ke<Qe;ke++){const ft=Xe[ke],Ze=Ie[ft.materialIndex];Ze&&Ze.visible&&X.push(A,Ve,Ze,ae,ot.z,ft)}}else Ie.visible&&X.push(A,Ve,Ie,ae,ot.z,null)}}const Fe=A.children;for(let Ve=0,Ie=Fe.length;Ve<Ie;Ve++)ln(Fe[Ve],q,ae,te)}function En(A,q,ae,te){const{opaque:ne,transmissive:Fe,transparent:Ve}=A;P.setupLightsView(ae),Pt===!0&&Pe.setGlobalState(Z.clippingPlanes,ae),te&&Ce.viewport(oe.copy(te)),ne.length>0&&Ea(ne,q,ae),Fe.length>0&&Ea(Fe,q,ae),Ve.length>0&&Ea(Ve,q,ae),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Yi(A,q,ae,te){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[te.id]===void 0){const Ze=ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[te.id]=new ji(1,1,{generateMipmaps:!0,type:Ze?ya:ui,minFilter:Ps,samples:Math.max(4,kt.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace})}const Fe=P.state.transmissionRenderTarget[te.id],Ve=te.viewport||oe;Fe.setSize(Ve.z*Z.transmissionResolutionScale,Ve.w*Z.transmissionResolutionScale);const Ie=Z.getRenderTarget(),Xe=Z.getActiveCubeFace(),ke=Z.getActiveMipmapLevel();Z.setRenderTarget(Fe),Z.getClearColor(O),Q=Z.getClearAlpha(),Q<1&&Z.setClearColor(16777215,.5),Z.clear(),et&&Ne.render(ae);const Qe=Z.toneMapping;Z.toneMapping=Xi;const ft=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),P.setupLightsView(te),Pt===!0&&Pe.setGlobalState(Z.clippingPlanes,te),Ea(A,ae,te),E.updateMultisampleRenderTarget(Fe),E.updateRenderTargetMipmap(Fe),ut.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let Ct=0,$t=q.length;Ct<$t;Ct++){const qt=q[Ct],{object:Ft,geometry:zt,material:Ge,group:Un}=qt;if(Ge.side===_a&&Ft.layers.test(te.layers)){const xt=Ge.side;Ge.side=Yn,Ge.needsUpdate=!0,$o(Ft,ae,te,zt,Ge,Un),Ge.side=xt,Ge.needsUpdate=!0,Ze=!0}}Ze===!0&&(E.updateMultisampleRenderTarget(Fe),E.updateRenderTargetMipmap(Fe))}Z.setRenderTarget(Ie,Xe,ke),Z.setClearColor(O,Q),ft!==void 0&&(te.viewport=ft),Z.toneMapping=Qe}function Ea(A,q,ae){const te=q.isScene===!0?q.overrideMaterial:null;for(let ne=0,Fe=A.length;ne<Fe;ne++){const Ve=A[ne],{object:Ie,geometry:Xe,group:ke}=Ve;let Qe=Ve.material;Qe.allowOverride===!0&&te!==null&&(Qe=te),Ie.layers.test(ae.layers)&&$o(Ie,q,ae,Xe,Qe,ke)}}function $o(A,q,ae,te,ne,Fe){A.onBeforeRender(Z,q,ae,te,ne,Fe),A.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ne.onBeforeRender(Z,q,ae,te,A,Fe),ne.transparent===!0&&ne.side===_a&&ne.forceSinglePass===!1?(ne.side=Yn,ne.needsUpdate=!0,Z.renderBufferDirect(ae,q,te,ne,A,Fe),ne.side=os,ne.needsUpdate=!0,Z.renderBufferDirect(ae,q,te,ne,A,Fe),ne.side=_a):Z.renderBufferDirect(ae,q,te,ne,A,Fe),A.onAfterRender(Z,q,ae,te,ne,Fe)}function Hs(A,q,ae){q.isScene!==!0&&(q=Qt);const te=w.get(A),ne=P.state.lights,Fe=P.state.shadowsArray,Ve=ne.state.version,Ie=Le.getParameters(A,ne.state,Fe,q,ae,P.state.lightProbeGridArray),Xe=Le.getProgramCacheKey(Ie);let ke=te.programs;te.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?q.environment:null,te.fog=q.fog;const Qe=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;te.envMap=J.get(A.envMap||te.environment,Qe),te.envMapRotation=te.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,ke===void 0&&(A.addEventListener("dispose",nn),ke=new Map,te.programs=ke);let ft=ke.get(Xe);if(ft!==void 0){if(te.currentProgram===ft&&te.lightsStateVersion===Ve)return ba(A,Ie),ft}else Ie.uniforms=Le.getUniforms(A),Y!==null&&A.isNodeMaterial&&Y.build(A,ae,Ie),A.onBeforeCompile(Ie,Z),ft=Le.acquireProgram(Ie,Xe),ke.set(Xe,ft),te.uniforms=Ie.uniforms;const Ze=te.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ze.clippingPlanes=Pe.uniform),ba(A,Ie),te.needsLights=us(A),te.lightsStateVersion=Ve,te.needsLights&&(Ze.ambientLightColor.value=ne.state.ambient,Ze.lightProbe.value=ne.state.probe,Ze.directionalLights.value=ne.state.directional,Ze.directionalLightShadows.value=ne.state.directionalShadow,Ze.spotLights.value=ne.state.spot,Ze.spotLightShadows.value=ne.state.spotShadow,Ze.rectAreaLights.value=ne.state.rectArea,Ze.ltc_1.value=ne.state.rectAreaLTC1,Ze.ltc_2.value=ne.state.rectAreaLTC2,Ze.pointLights.value=ne.state.point,Ze.pointLightShadows.value=ne.state.pointShadow,Ze.hemisphereLights.value=ne.state.hemi,Ze.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Ze.spotLightMatrix.value=ne.state.spotLightMatrix,Ze.spotLightMap.value=ne.state.spotLightMap,Ze.pointShadowMatrix.value=ne.state.pointShadowMatrix),te.lightProbeGrid=P.state.lightProbeGridArray.length>0,te.currentProgram=ft,te.uniformsList=null,ft}function Wr(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=Bc.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function ba(A,q){const ae=w.get(A);ae.outputColorSpace=q.outputColorSpace,ae.batching=q.batching,ae.batchingColor=q.batchingColor,ae.instancing=q.instancing,ae.instancingColor=q.instancingColor,ae.instancingMorph=q.instancingMorph,ae.skinning=q.skinning,ae.morphTargets=q.morphTargets,ae.morphNormals=q.morphNormals,ae.morphColors=q.morphColors,ae.morphTargetsCount=q.morphTargetsCount,ae.numClippingPlanes=q.numClippingPlanes,ae.numIntersection=q.numClipIntersection,ae.vertexAlphas=q.vertexAlphas,ae.vertexTangents=q.vertexTangents,ae.toneMapping=q.toneMapping}function qr(A,q){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;L.setFromMatrixPosition(q.matrixWorld);for(let ae=0,te=A.length;ae<te;ae++){const ne=A[ae];if(ne.texture!==null&&ne.boundingBox.containsPoint(L))return ne}return null}function Ta(A,q,ae,te,ne){q.isScene!==!0&&(q=Qt),E.resetTextureUnits();const Fe=q.fog,Ve=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?q.environment:null,Ie=W===null?Z.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:bt.workingColorSpace,Xe=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,ke=J.get(te.envMap||Ve,Xe),Qe=te.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,ft=!!ae.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ze=!!ae.morphAttributes.position,Ct=!!ae.morphAttributes.normal,$t=!!ae.morphAttributes.color;let qt=Xi;te.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(qt=Z.toneMapping);const Ft=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,zt=Ft!==void 0?Ft.length:0,Ge=w.get(te),Un=P.state.lights;if(Pt===!0&&(ct===!0||A!==B)){const It=A===B&&te.id===U;Pe.setState(te,A,It)}let xt=!1;te.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Un.state.version||Ge.outputColorSpace!==Ie||ne.isBatchedMesh&&Ge.batching===!1||!ne.isBatchedMesh&&Ge.batching===!0||ne.isBatchedMesh&&Ge.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&Ge.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&Ge.instancing===!1||!ne.isInstancedMesh&&Ge.instancing===!0||ne.isSkinnedMesh&&Ge.skinning===!1||!ne.isSkinnedMesh&&Ge.skinning===!0||ne.isInstancedMesh&&Ge.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&Ge.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&Ge.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&Ge.instancingMorph===!1&&ne.morphTexture!==null||Ge.envMap!==ke||te.fog===!0&&Ge.fog!==Fe||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Pe.numPlanes||Ge.numIntersection!==Pe.numIntersection)||Ge.vertexAlphas!==Qe||Ge.vertexTangents!==ft||Ge.morphTargets!==Ze||Ge.morphNormals!==Ct||Ge.morphColors!==$t||Ge.toneMapping!==qt||Ge.morphTargetsCount!==zt||!!Ge.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(xt=!0):(xt=!0,Ge.__version=te.version);let _n=Ge.currentProgram;xt===!0&&(_n=Hs(te,q,ne),Y&&te.isNodeMaterial&&Y.onUpdateProgram(te,_n,Ge));let Qn=!1,Ei=!1,Jn=!1;const Bt=_n.getUniforms(),en=Ge.uniforms;if(Ce.useProgram(_n.program)&&(Qn=!0,Ei=!0,Jn=!0),te.id!==U&&(U=te.id,Ei=!0),Ge.needsLights){const It=qr(P.state.lightProbeGridArray,ne);Ge.lightProbeGrid!==It&&(Ge.lightProbeGrid=It,Ei=!0)}if(Qn||B!==A){Ce.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Bt.setValue(V,"projectionMatrix",A.projectionMatrix),Bt.setValue(V,"viewMatrix",A.matrixWorldInverse);const Oi=Bt.map.cameraPosition;Oi!==void 0&&Oi.setValue(V,Rt.setFromMatrixPosition(A.matrixWorld)),kt.logarithmicDepthBuffer&&Bt.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Bt.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),B!==A&&(B=A,Ei=!0,Jn=!0)}if(Ge.needsLights&&(Un.state.directionalShadowMap.length>0&&Bt.setValue(V,"directionalShadowMap",Un.state.directionalShadowMap,E),Un.state.spotShadowMap.length>0&&Bt.setValue(V,"spotShadowMap",Un.state.spotShadowMap,E),Un.state.pointShadowMap.length>0&&Bt.setValue(V,"pointShadowMap",Un.state.pointShadowMap,E)),ne.isSkinnedMesh){Bt.setOptional(V,ne,"bindMatrix"),Bt.setOptional(V,ne,"bindMatrixInverse");const It=ne.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),Bt.setValue(V,"boneTexture",It.boneTexture,E))}ne.isBatchedMesh&&(Bt.setOptional(V,ne,"batchingTexture"),Bt.setValue(V,"batchingTexture",ne._matricesTexture,E),Bt.setOptional(V,ne,"batchingIdTexture"),Bt.setValue(V,"batchingIdTexture",ne._indirectTexture,E),Bt.setOptional(V,ne,"batchingColorTexture"),ne._colorsTexture!==null&&Bt.setValue(V,"batchingColorTexture",ne._colorsTexture,E));const bi=ae.morphAttributes;if((bi.position!==void 0||bi.normal!==void 0||bi.color!==void 0)&&at.update(ne,ae,_n),(Ei||Ge.receiveShadow!==ne.receiveShadow)&&(Ge.receiveShadow=ne.receiveShadow,Bt.setValue(V,"receiveShadow",ne.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&q.environment!==null&&(en.envMapIntensity.value=q.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=GA()),Ei){if(Bt.setValue(V,"toneMappingExposure",Z.toneMappingExposure),Ge.needsLights&&Aa(en,Jn),Fe&&te.fog===!0&&fe.refreshFogUniforms(en,Fe),fe.refreshMaterialUniforms(en,te,Re,Te,P.state.transmissionRenderTarget[A.id]),Ge.needsLights&&Ge.lightProbeGrid){const It=Ge.lightProbeGrid;en.probesSH.value=It.texture,en.probesMin.value.copy(It.boundingBox.min),en.probesMax.value.copy(It.boundingBox.max),en.probesResolution.value.copy(It.resolution)}Bc.upload(V,Wr(Ge),en,E)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Bc.upload(V,Wr(Ge),en,E),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Bt.setValue(V,"center",ne.center),Bt.setValue(V,"modelViewMatrix",ne.modelViewMatrix),Bt.setValue(V,"normalMatrix",ne.normalMatrix),Bt.setValue(V,"modelMatrix",ne.matrixWorld),te.uniformsGroups!==void 0){const It=te.uniformsGroups;for(let Oi=0,Ca=It.length;Oi<Ca;Oi++){const fs=It[Oi];pe.update(fs,_n),pe.bind(fs,_n)}}return _n}function Aa(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function us(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return le},this.getActiveMipmapLevel=function(){return ue},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(A,q,ae){const te=w.get(A);te.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),w.get(A.texture).__webglTexture=q,w.get(A.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:ae,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const ae=w.get(A);ae.__webglFramebuffer=q,ae.__useDefaultFramebuffer=q===void 0};const Ra=V.createFramebuffer();this.setRenderTarget=function(A,q=0,ae=0){W=A,le=q,ue=ae;let te=null,ne=!1,Fe=!1;if(A){const Ie=w.get(A);if(Ie.__useDefaultFramebuffer!==void 0){Ce.bindFramebuffer(V.FRAMEBUFFER,Ie.__webglFramebuffer),oe.copy(A.viewport),me.copy(A.scissor),ye=A.scissorTest,Ce.viewport(oe),Ce.scissor(me),Ce.setScissorTest(ye),U=-1;return}else if(Ie.__webglFramebuffer===void 0)E.setupRenderTarget(A);else if(Ie.__hasExternalTextures)E.rebindTextures(A,w.get(A.texture).__webglTexture,w.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Qe=A.depthTexture;if(Ie.__boundDepthTexture!==Qe){if(Qe!==null&&w.has(Qe)&&(A.width!==Qe.image.width||A.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(A)}}const Xe=A.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Fe=!0);const ke=w.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ke[q])?te=ke[q][ae]:te=ke[q],ne=!0):A.samples>0&&E.useMultisampledRTT(A)===!1?te=w.get(A).__webglMultisampledFramebuffer:Array.isArray(ke)?te=ke[ae]:te=ke,oe.copy(A.viewport),me.copy(A.scissor),ye=A.scissorTest}else oe.copy(be).multiplyScalar(Re).floor(),me.copy(He).multiplyScalar(Re).floor(),ye=$e;if(ae!==0&&(te=Ra),Ce.bindFramebuffer(V.FRAMEBUFFER,te)&&Ce.drawBuffers(A,te),Ce.viewport(oe),Ce.scissor(me),Ce.setScissorTest(ye),ne){const Ie=w.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ie.__webglTexture,ae)}else if(Fe){const Ie=q;for(let Xe=0;Xe<A.textures.length;Xe++){const ke=w.get(A.textures[Xe]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Xe,ke.__webglTexture,ae,Ie)}}else if(A!==null&&ae!==0){const Ie=w.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ie.__webglTexture,ae)}U=-1},this.readRenderTargetPixels=function(A,q,ae,te,ne,Fe,Ve,Ie=0){if(!(A&&A.isWebGLRenderTarget)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=w.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(Xe=Xe[Ve]),Xe){Ce.bindFramebuffer(V.FRAMEBUFFER,Xe);try{const ke=A.textures[Ie],Qe=ke.format,ft=ke.type;if(A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ie),!kt.textureFormatReadable(Qe)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!kt.textureTypeReadable(ft)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-te&&ae>=0&&ae<=A.height-ne&&V.readPixels(q,ae,te,ne,k.convert(Qe),k.convert(ft),Fe)}finally{const ke=W!==null?w.get(W).__webglFramebuffer:null;Ce.bindFramebuffer(V.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(A,q,ae,te,ne,Fe,Ve,Ie=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=w.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(Xe=Xe[Ve]),Xe)if(q>=0&&q<=A.width-te&&ae>=0&&ae<=A.height-ne){Ce.bindFramebuffer(V.FRAMEBUFFER,Xe);const ke=A.textures[Ie],Qe=ke.format,ft=ke.type;if(A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ie),!kt.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!kt.textureTypeReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Ze),V.bufferData(V.PIXEL_PACK_BUFFER,Fe.byteLength,V.STREAM_READ),V.readPixels(q,ae,te,ne,k.convert(Qe),k.convert(ft),0);const Ct=W!==null?w.get(W).__webglFramebuffer:null;Ce.bindFramebuffer(V.FRAMEBUFFER,Ct);const $t=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await sM(V,$t,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Ze),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Fe),V.deleteBuffer(Ze),V.deleteSync($t),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,ae=0){const te=Math.pow(2,-ae),ne=Math.floor(A.image.width*te),Fe=Math.floor(A.image.height*te),Ve=q!==null?q.x:0,Ie=q!==null?q.y:0;E.setTexture2D(A,0),V.copyTexSubImage2D(V.TEXTURE_2D,ae,0,0,Ve,Ie,ne,Fe),Ce.unbindTexture()};const fn=V.createFramebuffer(),el=V.createFramebuffer();this.copyTextureToTexture=function(A,q,ae=null,te=null,ne=0,Fe=0){let Ve,Ie,Xe,ke,Qe,ft,Ze,Ct,$t;const qt=A.isCompressedTexture?A.mipmaps[Fe]:A.image;if(ae!==null)Ve=ae.max.x-ae.min.x,Ie=ae.max.y-ae.min.y,Xe=ae.isBox3?ae.max.z-ae.min.z:1,ke=ae.min.x,Qe=ae.min.y,ft=ae.isBox3?ae.min.z:0;else{const en=Math.pow(2,-ne);Ve=Math.floor(qt.width*en),Ie=Math.floor(qt.height*en),A.isDataArrayTexture?Xe=qt.depth:A.isData3DTexture?Xe=Math.floor(qt.depth*en):Xe=1,ke=0,Qe=0,ft=0}te!==null?(Ze=te.x,Ct=te.y,$t=te.z):(Ze=0,Ct=0,$t=0);const Ft=k.convert(q.format),zt=k.convert(q.type);let Ge;q.isData3DTexture?(E.setTexture3D(q,0),Ge=V.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(E.setTexture2DArray(q,0),Ge=V.TEXTURE_2D_ARRAY):(E.setTexture2D(q,0),Ge=V.TEXTURE_2D),Ce.activeTexture(V.TEXTURE0),Ce.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,q.flipY),Ce.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),Ce.pixelStorei(V.UNPACK_ALIGNMENT,q.unpackAlignment);const Un=Ce.getParameter(V.UNPACK_ROW_LENGTH),xt=Ce.getParameter(V.UNPACK_IMAGE_HEIGHT),_n=Ce.getParameter(V.UNPACK_SKIP_PIXELS),Qn=Ce.getParameter(V.UNPACK_SKIP_ROWS),Ei=Ce.getParameter(V.UNPACK_SKIP_IMAGES);Ce.pixelStorei(V.UNPACK_ROW_LENGTH,qt.width),Ce.pixelStorei(V.UNPACK_IMAGE_HEIGHT,qt.height),Ce.pixelStorei(V.UNPACK_SKIP_PIXELS,ke),Ce.pixelStorei(V.UNPACK_SKIP_ROWS,Qe),Ce.pixelStorei(V.UNPACK_SKIP_IMAGES,ft);const Jn=A.isDataArrayTexture||A.isData3DTexture,Bt=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const en=w.get(A),bi=w.get(q),It=w.get(en.__renderTarget),Oi=w.get(bi.__renderTarget);Ce.bindFramebuffer(V.READ_FRAMEBUFFER,It.__webglFramebuffer),Ce.bindFramebuffer(V.DRAW_FRAMEBUFFER,Oi.__webglFramebuffer);for(let Ca=0;Ca<Xe;Ca++)Jn&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,w.get(A).__webglTexture,ne,ft+Ca),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,w.get(q).__webglTexture,Fe,$t+Ca)),V.blitFramebuffer(ke,Qe,Ve,Ie,Ze,Ct,Ve,Ie,V.DEPTH_BUFFER_BIT,V.NEAREST);Ce.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(ne!==0||A.isRenderTargetTexture||w.has(A)){const en=w.get(A),bi=w.get(q);Ce.bindFramebuffer(V.READ_FRAMEBUFFER,fn),Ce.bindFramebuffer(V.DRAW_FRAMEBUFFER,el);for(let It=0;It<Xe;It++)Jn?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,en.__webglTexture,ne,ft+It):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,en.__webglTexture,ne),Bt?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,bi.__webglTexture,Fe,$t+It):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,bi.__webglTexture,Fe),ne!==0?V.blitFramebuffer(ke,Qe,Ve,Ie,Ze,Ct,Ve,Ie,V.COLOR_BUFFER_BIT,V.NEAREST):Bt?V.copyTexSubImage3D(Ge,Fe,Ze,Ct,$t+It,ke,Qe,Ve,Ie):V.copyTexSubImage2D(Ge,Fe,Ze,Ct,ke,Qe,Ve,Ie);Ce.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Bt?A.isDataTexture||A.isData3DTexture?V.texSubImage3D(Ge,Fe,Ze,Ct,$t,Ve,Ie,Xe,Ft,zt,qt.data):q.isCompressedArrayTexture?V.compressedTexSubImage3D(Ge,Fe,Ze,Ct,$t,Ve,Ie,Xe,Ft,qt.data):V.texSubImage3D(Ge,Fe,Ze,Ct,$t,Ve,Ie,Xe,Ft,zt,qt):A.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Fe,Ze,Ct,Ve,Ie,Ft,zt,qt.data):A.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Fe,Ze,Ct,qt.width,qt.height,Ft,qt.data):V.texSubImage2D(V.TEXTURE_2D,Fe,Ze,Ct,Ve,Ie,Ft,zt,qt);Ce.pixelStorei(V.UNPACK_ROW_LENGTH,Un),Ce.pixelStorei(V.UNPACK_IMAGE_HEIGHT,xt),Ce.pixelStorei(V.UNPACK_SKIP_PIXELS,_n),Ce.pixelStorei(V.UNPACK_SKIP_ROWS,Qn),Ce.pixelStorei(V.UNPACK_SKIP_IMAGES,Ei),Fe===0&&q.generateMipmaps&&V.generateMipmap(Ge),Ce.unbindTexture()},this.initRenderTarget=function(A){w.get(A).__webglFramebuffer===void 0&&E.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?E.setTextureCube(A,0):A.isData3DTexture?E.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?E.setTexture2DArray(A,0):E.setTexture2D(A,0),Ce.unbindTexture()},this.resetState=function(){le=0,ue=0,W=null,Ce.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(t),i.unpackColorSpace=bt._getUnpackColorSpace()}}function kA(){const o=Cn.useRef(null),t=Cn.useRef(null),[i,s]=Cn.useState(!1),l=Cn.useRef({x:0,y:0,targetX:0,targetY:0});return Cn.useEffect(()=>{if(!o.current||!t.current)return;const c=o.current,d=t.current,p=new yM,m=new ci(45,1,.1,100);m.position.z=8;const h=new VA({canvas:d,antialias:!0,alpha:!0});h.setPixelRatio(Math.min(window.devicePixelRatio,2));const v=1024,S=1024,g=document.createElement("canvas");g.width=v,g.height=S;const x=g.getContext("2d");if(x){const et=x.createLinearGradient(0,0,v,0);et.addColorStop(0,"#ececec"),et.addColorStop(.15,"#ffffff"),et.addColorStop(.3,"#dddddd"),et.addColorStop(.5,"#b5b5b5"),et.addColorStop(.7,"#ececec"),et.addColorStop(.85,"#ffffff"),et.addColorStop(1,"#9c9c9c"),x.fillStyle=et,x.fillRect(0,0,v,S),x.strokeStyle="rgba(220, 220, 220, 0.4)",x.lineWidth=2;for(let Ke=0;Ke<v;Ke+=16)x.beginPath(),x.moveTo(Ke,0),x.lineTo(Ke,S),x.stroke();x.fillStyle="rgba(232, 0, 45, 0.15)",x.fillRect(50,50,v-100,S-100),x.fillStyle="rgba(255, 255, 255, 0.25)";for(let Ke=0;Ke<S;Ke+=4)Math.random()>.4&&x.fillRect(0,Ke,v,1);const gt=260,V=(v-gt)/2;x.fillStyle="#E8002D",x.fillRect(V,0,gt,S),x.fillStyle="rgba(255, 255, 255, 0.15)",x.fillRect(V+20,0,15,S),x.fillRect(V+gt-35,0,15,S),x.strokeStyle="#ffffff",x.lineWidth=3,x.beginPath(),x.moveTo(V+45,0),x.lineTo(V+45,S),x.moveTo(V+gt-45,0),x.lineTo(V+gt-45,S),x.stroke(),x.save(),x.translate(v/2,280),x.font="italic bold 110px 'Inter', sans-serif",x.fillStyle="#ffffff",x.textAlign="center",x.shadowColor="rgba(0, 0, 0, 0.3)",x.shadowBlur=10,x.fillText("diet",0,0),x.restore(),x.save(),x.translate(v/2,440),x.font="900 160px 'Inter', sans-serif",x.fillStyle="#0a0a0a",x.textAlign="center",x.letterSpacing="6px",x.fillText("Coke",0,0),x.font="900 160px 'Inter', sans-serif",x.strokeStyle="#ffffff",x.lineWidth=4,x.strokeText("Coke",0,0),x.restore(),x.font="500 24px monospace",x.fillStyle="#ffffff",x.textAlign="center",x.letterSpacing="8px",x.fillText("ZERO SUGAR • ZERO CALORIES",v/2,540),x.font="400 16px monospace",x.fillStyle="rgba(255, 255, 255, 0.7)",x.fillText("SYS LOG: COCA COLA CO. INC.",v/2,600),x.fillText("SPEC: 355ML | CORE EDITION v1.982",v/2,630),x.fillStyle="#0a0a0a",x.font="600 20px monospace",x.textAlign="left",x.fillText("BATCH: DC-456",80,800),x.fillText("INTEGRITY: 100%",80,830),x.fillText("COMPROMISE: 0.00%",80,860),x.textAlign="right",x.fillText("SWEETENERS: ASP-K",v-80,800),x.fillText("CAFFEINE: ACTIVE",v-80,830),x.fillText("TEMP: OPTIMAL",v-80,860),x.fillStyle="#0a0a0a";for(let Ke=0;Ke<180;Ke+=8){const ut=Math.random()>.4?4:2;x.fillRect(v/2-90+Ke,890,ut,40)}x.font="400 12px monospace",x.textAlign="center",x.fillText("0049000028913",v/2,950)}const T=new UM(g);T.anisotropy=4,T.colorSpace=li;const N=new Wo,M=new as(1.4,1.4,4.4,64,1,!1),y=new Od({map:T,metalness:.88,roughness:.22,bumpScale:.02}),D=new In(M,y);N.add(D);const F=new as(1.24,1.4,.15,64),L=new Od({color:12632256,metalness:.95,roughness:.15}),X=new In(F,L);X.position.y=2.2+.075,N.add(X);const P=new as(1.26,1.24,.1,64),z=new In(P,L);z.position.y=2.35+.05,N.add(z);const b=new as(1.4,1.25,.18,64),I=new In(b,L);I.position.y=-2.2-.09,N.add(I);const Z=new as(1.25,1.22,.1,64),G=new In(Z,L);G.position.y=-2.38-.05,N.add(G);const Y=new as(1.2,1.2,.02,64),le=new Od({color:10066329,metalness:.95,roughness:.25}),ue=new In(Y,le);ue.position.y=2.41,N.add(ue);const W=new Gr(.3,.02,.6),U=new In(W,L);U.position.set(0,2.42,.3),U.rotation.x=.05,N.add(U),p.add(N),N.rotation.x=.15,N.rotation.z=-.1;const B=new y_(16777215,2);B.position.set(5,5,5),p.add(B);const oe=new y_(16777215,.8);oe.position.set(-5,0,5),p.add(oe);const me=new Id(16711723,4.5,15);me.position.set(-6,2,-3),p.add(me);const ye=new Id(16711723,3.5,15);ye.position.set(6,-2,-3),p.add(ye);const O=new Id(15000804,3,15);O.position.set(0,5,-5),p.add(O);const Q=new kM(16777215,1.5);p.add(Q);const ve=70,Te=new Mi,Re=new Float32Array(ve*3),re=new Float32Array(ve);for(let et=0;et<ve;et++){const gt=(Math.random()-.5)*6,V=(Math.random()-.5)*8,Ke=(Math.random()-.5)*6;Re[et*3]=gt,Re[et*3+1]=V,Re[et*3+2]=Ke,re[et]=.015+Math.random()*.02}Te.setAttribute("position",new Li(Re,3));const Se=new Sx({color:16777215,size:.05,transparent:!0,opacity:.6,blending:kd}),be=new DM(Te,Se);p.add(be);const He=et=>{for(const gt of et){const{width:V,height:Ke}=gt.contentRect;m.aspect=V/Ke,m.updateProjectionMatrix(),h.setSize(V,Ke)}},$e=new ResizeObserver(He);$e.observe(c);const Ye=c.getBoundingClientRect();m.aspect=Ye.width/Ye.height,m.updateProjectionMatrix(),h.setSize(Ye.width,Ye.height);const Pt=et=>{const gt=c.getBoundingClientRect(),V=et.clientX-gt.left,Ke=et.clientY-gt.top;l.current.targetX=(V/gt.width-.5)*1.5,l.current.targetY=(Ke/gt.height-.5)*1.5};c.addEventListener("mousemove",Pt);const ct=et=>{if(et.touches.length>0){const gt=et.touches[0],V=c.getBoundingClientRect(),Ke=gt.clientX-V.left,ut=gt.clientY-V.top;l.current.targetX=(Ke/V.width-.5)*1.5,l.current.targetY=(ut/V.height-.5)*1.5}};c.addEventListener("touchmove",ct,{passive:!0});const mt=()=>{l.current.targetX=0,l.current.targetY=0};c.addEventListener("mouseleave",mt);let Rt,ot=new WM;const Qt=()=>{const et=ot.getElapsedTime(),gt=i?.012:.005;N.rotation.y+=gt,l.current.x+=(l.current.targetX-l.current.x)*.08,l.current.y+=(l.current.targetY-l.current.y)*.08,N.rotation.z=-.1-l.current.x*.4,N.rotation.x=.15+l.current.y*.4,N.position.y=Math.sin(et*1.5)*.18;const V=Te.attributes.position.array;for(let Ke=0;Ke<ve;Ke++)V[Ke*3+1]+=re[Ke],V[Ke*3]+=Math.sin(et+Ke)*.002,V[Ke*3+1]>4&&(V[Ke*3+1]=-4,V[Ke*3]=(Math.random()-.5)*5);Te.attributes.position.needsUpdate=!0,h.render(p,m),Rt=requestAnimationFrame(Qt)};return Qt(),()=>{cancelAnimationFrame(Rt),$e.unobserve(c),$e.disconnect(),c.removeEventListener("mousemove",Pt),c.removeEventListener("touchmove",ct),c.removeEventListener("mouseleave",mt),h.dispose(),T.dispose(),g.remove(),M.dispose(),y.dispose(),F.dispose(),L.dispose(),P.dispose(),b.dispose(),Z.dispose(),Y.dispose(),le.dispose(),W.dispose(),Te.dispose(),Se.dispose()}},[i]),C.jsxs("div",{ref:o,id:"3d-can-stage",className:"relative w-full h-[380px] md:h-[550px] flex items-center justify-center cursor-grab active:cursor-grabbing hover:scale-105 transition-transform duration-500",onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),children:[C.jsx("canvas",{ref:t,className:"w-full h-full block select-none pointer-events-auto"}),C.jsxs("div",{className:"absolute top-4 left-4 font-mono text-[10px] text-gray-500 flex flex-col gap-1 pointer-events-none select-none",children:[C.jsxs("div",{className:"flex items-center gap-1.5",children:[C.jsx("span",{className:"w-1.5 h-1.5 bg-[#E8002D] animate-ping rounded-full"}),C.jsx("span",{className:"text-gray-400",children:"STAGE: INTEGRATED HOLOGRAPH"})]}),C.jsx("div",{children:"MODEL: SILV-CAN-12OZ"}),C.jsx("div",{children:"X-ROT: INTERACTIVE"})]}),C.jsxs("div",{className:"absolute bottom-4 right-4 font-mono text-[10px] text-gray-500 text-right pointer-events-none select-none",children:[C.jsx("div",{children:"ORBITAL_Y: ROTATING"}),C.jsx("div",{children:"STYL_MODE: PREMIUM"})]}),C.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,0,45,0.14)_0%,transparent_65%)] pointer-events-none z-[-1]"})]})}const Ox="/diet-coke-tech-showcase/assets/diet_coke_classic_1781264470106-CbuiobfR.jpg",Px="/diet-coke-tech-showcase/assets/caffeine_free_gold_1781264483183-BQDJw73d.jpg",Ix="/diet-coke-tech-showcase/assets/cherry_diet_coke_1781264499540-DgFyUpd-.jpg",Fx="/diet-coke-tech-showcase/assets/diet_coke_nano_banana-TIy1BkLa.png";function XA(){const o=[{id:"classic",name:"DIET COKE CLASSIC",tagline:"STAY EXTRAORDINARY.",image:Ox,accentColor:"#E8002D",badge:"ORIGINAL CODE",canColor:"from-gray-300 via-gray-100 to-gray-400",description:"The immaculate standard. High-gloss silver aluminum shielding containing zero sugar, zero calories, and zero compromise. Designed for the taste of it. High cognitive focus catalyst."},{id:"caffeine-free",name:"CAFFEINE FREE",tagline:"CALM VELOCITY.",image:Px,accentColor:"#C9A84C",badge:"DE-COGNITIVE ACCELERANT",canColor:"from-amber-300 via-[#FFEAA0] to-amber-500",description:"Infinite taste, zero caffeine strain. Wrapped in precious gilded micro-plates. Perfectly tuned for high-velocity environments requiring premium focus without neural amplification."},{id:"cherry-diet",name:"CHERRY DIET COKE",tagline:"ENTER THE CHERRY DIMENSION.",image:Ix,accentColor:"#D11A5B",badge:"FRUIT ATOMIC MATRIX",canColor:"from-pink-500 via-white to-purple-600",description:"A dark crimson splash within the traditional formula. Crisp natural essence of sweet wild cherry infused with cold carbonation nodes. Bold, irresistible flavor curve for high-status mood loops."},{id:"nano-banana",name:"GEMINI NANO BANANA",tagline:"COGNITIVE CREATIVE MATRIX.",image:Fx,accentColor:"#FFE135",badge:"LIMITED TECH FLAVOR",canColor:"from-yellow-400 via-zinc-100 to-yellow-600",description:"A special cyberpunk concept flavor combining a refreshing hint of banana essence with classic Diet Coke crispness. Designed using artificial neural networks to unlock peak creative workflow."}],[t,i]=Cn.useState(null);return C.jsxs("div",{className:"w-full",children:[C.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:o.map((s,l)=>{const c=t===l;return C.jsxs("div",{id:`flavor-card-${s.id}`,className:"relative group flex flex-col h-full bg-[#0d0d0d] border border-gray-850 rounded-xl overflow-hidden transition-all duration-500 cursor-pointer hover:border-red-650/40",style:{boxShadow:c?`0px 10px 30px -10px ${s.accentColor}33`:"none"},onMouseEnter:()=>i(l),onMouseLeave:()=>i(null),children:[C.jsx("div",{className:"h-1 w-full bg-gray-800 group-hover:transition-all duration-500",style:{backgroundColor:c?s.accentColor:"rgb(31, 41, 55)"}}),C.jsxs("div",{className:"px-5 pt-5 pb-2 flex items-center justify-between",children:[C.jsxs("span",{className:"font-mono text-[10px] text-gray-500 tracking-widest uppercase",children:["VARIANT_",l+1," // CRITICAL"]}),C.jsx("span",{className:"font-mono text-[9px] px-2 py-0.5 rounded border text-slate-400 bg-white/5 transition-all duration-300",style:{borderColor:c?`${s.accentColor}50`:"rgba(255,255,255,0.08)"},children:s.badge})]}),C.jsxs("div",{className:"relative group-hover:scale-102 transition-transform duration-500 flex items-center justify-center p-3 h-72 overflow-hidden bg-radial-gradient from-white/5 to-transparent",children:[C.jsx("div",{className:"absolute w-44 h-44 rounded-full opacity-10 group-hover:opacity-25 blur-3xl transition-all duration-700 pointer-events-none",style:{backgroundColor:s.accentColor}}),C.jsx("img",{src:s.image,alt:s.name,referrerPolicy:"no-referrer",className:"h-full w-auto object-contain z-10 filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.85)] max-h-64 object-center hover:rotate-1 transition-transform duration-500"}),C.jsxs("div",{className:"absolute inset-x-2 bottom-2 font-mono text-[8px] text-gray-600 flex justify-between tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:[C.jsx("span",{children:"SCALE: 1:1 CAN SIZE"}),C.jsx("span",{children:"SYS: COMMITTED RAW"})]})]}),C.jsxs("div",{className:"p-5 flex-1 flex flex-col justify-between border-t border-gray-900 bg-black/30",children:[C.jsxs("div",{children:[C.jsxs("h3",{className:"font-sans font-black text-xl text-white tracking-wide mb-1 flex items-center justify-between",children:[C.jsx("span",{children:s.name}),C.jsx(Y_,{className:"w-4 h-4 text-gray-600 group-hover:translate-x-1 transition-transform duration-300",style:{color:c?s.accentColor:"rgb(75, 85, 99)"}})]}),C.jsx("p",{className:"font-mono text-xs text-gray-500 tracking-widest font-semibold uppercase mb-3",children:s.tagline}),C.jsx("p",{className:"font-sans text-xs text-gray-400 leading-relaxed mb-4",children:s.description})]}),C.jsxs("div",{className:"pt-4 border-t border-gray-900/40 grid grid-cols-3 gap-2 text-center font-mono text-[9px] text-gray-400",children:[C.jsxs("div",{className:"bg-[#111111] p-1.5 rounded border border-white/5",children:[C.jsx("span",{className:"block text-gray-500 text-[8px] mb-0.5",children:"SUGAR"}),C.jsx("span",{className:"font-bold text-white",children:"0% ABS"})]}),C.jsxs("div",{className:"bg-[#111111] p-1.5 rounded border border-white/5",children:[C.jsx("span",{className:"block text-gray-500 text-[8px] mb-0.5",children:"CALORIES"}),C.jsx("span",{className:"font-bold text-white",children:"0.0"})]}),C.jsxs("div",{className:"bg-[#111111] p-1.5 rounded border border-white/5",children:[C.jsx("span",{className:"block text-gray-500 text-[8px] mb-0.5",children:"METRIC"}),C.jsx("span",{className:"font-bold text-white",children:"12 OZ"})]})]})]})]},s.id)})}),C.jsxs("div",{className:"mt-8 p-4 bg-[#080808] border border-gray-850 rounded-lg flex flex-col md:flex-row items-center justify-between text-xs font-mono text-gray-400",children:[C.jsxs("div",{className:"flex items-center gap-2 mb-2 md:mb-0",children:[C.jsx(ay,{className:"w-4 h-4 text-[#E8002D]"}),C.jsx("span",{className:"text-gray-300",children:"TECHNOLOGY COMPLIANCE STATE:"}),C.jsx("span",{className:"text-emerald-500 bg-emerald-950/40 px-2 py-0.5 rounded text-[10px] border border-emerald-900/30",children:"FDA CERTIFIED ZERO SUGAR"})]}),C.jsxs("div",{className:"flex items-center gap-4 text-[10px] text-gray-500",children:[C.jsx("span",{children:"ALUMINUM WALL_THICK: SIGNED_METALLIC"}),C.jsx("span",{className:"hidden sm:inline",children:"|"}),C.jsx("span",{children:"FLAVOR_MATRIX_COUNT: 04"})]})]})]})}function jA(){const o=[{id:"calories",label:"CALORIES",value:"000",unit:"KCAL",description:"Thermodynamic energy payload. Complete metabolic bypass. Infinite refreshment without caloric heat conversion.",iconName:"Flame"},{id:"sugar",label:"SUGAR",value:"0.0",unit:"GRAMS",description:"Glucolytic matrix status: Empty. Zero sweet cycles. Preserves glucose homeostasis with zero insulin activation.",iconName:"Sparkles"},{id:"caffeine",label:"CAFFEINE",value:"046",unit:"MG",description:"Synaptic neural accelerator level per 12 FL OZ. Elevates spatial cognition, response times, and focus pathways.",iconName:"Zap"},{id:"size",label:"SIZE",value:"355",unit:"ML",description:"Standard liquid displacement capacity. Sculpted in structural cold-rolled recyclable aluminum cylinders.",iconName:"Droplet"},{id:"sweetener",label:"SWEETENERS",value:"DUAL",unit:"SYNTH",description:"Bio-engineered signature sweet compounds: Aspartame blended with Acesulfame Potassium for optimal flavor curve.",iconName:"Layers"}],t=i=>{switch(i){case"Flame":return C.jsx(dy,{className:"w-5 h-5 text-[#E8002D]"});case"Sparkles":return C.jsx(Z_,{className:"w-5 h-5 text-gray-300"});case"Zap":return C.jsx(by,{className:"w-5 h-5 text-amber-400 animate-pulse"});case"Droplet":return C.jsx(uy,{className:"w-5 h-5 text-sky-400"});case"Layers":return C.jsx(jg,{className:"w-5 h-5 text-violet-400"});default:return C.jsx(jg,{className:"w-5 h-5 text-[#E8002D]"})}};return C.jsx("div",{id:"tech-spec-section",className:"w-full",children:C.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4",children:o.map(i=>C.jsxs("div",{id:`spec-card-${i.id}`,className:"group relative bg-[#0e0e0e] border border-gray-800 rounded-lg p-5 overflow-hidden transition-all duration-300 hover:border-red-600/50 hover:shadow-[0_0_15px_rgba(232,0,45,0.15)] hover:-translate-y-1",children:[C.jsxs("div",{className:"flex items-center justify-between mb-4",children:[C.jsxs("span",{className:"font-mono text-xs text-gray-500 tracking-wider",children:["SPEC // ",i.label]}),C.jsx("div",{className:"p-1.5 bg-black/40 rounded border border-gray-850 group-hover:border-red-500/30 transition-colors",children:t(i.iconName)})]}),C.jsxs("div",{className:"flex items-baseline gap-1.5 mb-2",children:[C.jsx("span",{className:"font-mono font-bold text-4xl text-white tracking-tight group-hover:text-red-500 transition-colors",children:i.value}),i.unit&&C.jsx("span",{className:"font-mono text-xs text-gray-400 tracking-wider",children:i.unit})]}),C.jsx("div",{className:"w-full h-px bg-gradient-to-r from-red-600/30 to-transparent my-3 group-hover:from-red-600/60 transition-all duration-500"}),C.jsx("p",{className:"font-sans text-xs text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors",children:i.description}),C.jsx("div",{className:"absolute bottom-0 right-0 h-1/2 w-1/2 bg-radial-gradient from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-500"}),C.jsx("div",{className:"absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-transparent group-hover:border-red-500 transition-colors duration-300 pointer-events-none"}),C.jsx("div",{className:"absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-transparent group-hover:border-red-500 transition-colors duration-300 pointer-events-none"})]},i.id))})})}const WA="/diet-coke-tech-showcase/assets/cherry_coca_cola_zero_1781264514925-C-uytzzl.jpg";function qA(){return C.jsxs("div",{id:"cherry-dimension-canvas",className:"relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#1c0110] via-[#0D000C] to-[#2d0012] border border-pink-900/30 p-6 md:p-12 shadow-[0_0_50px_rgba(217,4,103,0.1)]",children:[C.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none select-none z-0",children:[C.jsx("div",{className:"absolute left-[8%] top-[15%] w-24 h-24 text-magenta-500 opacity-[0.25] animate-bounce duration-[8000ms] flex items-center justify-center",children:C.jsx(cc,{className:"w-12 h-12 text-pink-600 blur-[0.5px]"})}),C.jsx("div",{className:"absolute right-[12%] bottom-[25%] w-32 h-32 opacity-[0.22] animate-pulse duration-[6000ms] flex items-center justify-center",children:C.jsx(cc,{className:"w-16 h-16 text-pink-500 filter drop-shadow-[0_0_10px_rgba(219,39,119,0.5)]"})}),C.jsx("div",{className:"absolute left-[35%] bottom-[12%] w-16 h-16 opacity-[0.15] animate-bounce duration-[9000ms] flex items-center justify-center",children:C.jsx(cc,{className:"w-8 h-8 text-pink-700"})}),C.jsx("div",{className:"absolute right-[33%] top-[10%] w-20 h-20 opacity-[0.18] animate-pulse duration-[7000ms] flex items-center justify-center",children:C.jsx(cc,{className:"w-10 h-10 text-pink-500"})}),C.jsx("div",{className:"absolute -top-1/2 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-pink-500/15 to-transparent rotate-12"}),C.jsx("div",{className:"absolute -bottom-1/2 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-pink-400/20 to-transparent -rotate-12"}),C.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(#d904671a_1px,transparent_1px)] [background-size:16px_16px] opacity-35"})]}),C.jsxs("div",{className:"relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center",children:[C.jsxs("div",{className:"lg:col-span-5 flex flex-col gap-4 text-center lg:text-left",children:[C.jsxs("div",{className:"inline-flex items-center gap-2 self-center lg:self-start bg-pink-950/40 border border-pink-700/30 px-3 py-1 rounded-full font-mono text-[10px] text-pink-400 uppercase tracking-widest leading-none",children:[C.jsx(Z_,{className:"w-3.5 h-3.5"}),"DIMENSIONAL COLORWAY"]}),C.jsxs("h2",{className:"font-sans font-black text-3xl md:text-5xl text-white tracking-tight leading-tight",children:["THE CHERRY ",C.jsx("br",{}),C.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500",children:"DIMENSION."})]}),C.jsx("p",{className:"font-sans text-sm text-pink-100/70 leading-relaxed max-w-md mx-auto lg:mx-0",children:"Bold. Dark. Irresistible. Wild Cherry is not just a secondary addition — it is an intensive taste mood state engineered to trigger premium flavor responses. Zero sugar carbonation fused with deep dark stonefruit."}),C.jsxs("div",{className:"mt-4 flex flex-col gap-2 p-4 bg-black/40 rounded-xl border border-pink-950/40 font-mono text-xs",children:[C.jsxs("div",{className:"flex items-center justify-between text-pink-300",children:[C.jsx("span",{children:"MATRIX SPEED_INDEX"}),C.jsx("span",{className:"font-bold text-white",children:"4.8 GB/SIP"})]}),C.jsx("div",{className:"w-full bg-pink-950/40 h-1.5 rounded-full overflow-hidden",children:C.jsx("div",{className:"bg-gradient-to-r from-pink-500 to-red-500 h-full w-[88%]"})}),C.jsxs("div",{className:"flex items-center justify-between text-gray-400 text-[10px] mt-1",children:[C.jsx("span",{children:"FRUIT STRENGTH: MAXIMUM"}),C.jsx("span",{children:"NO_COMPROMISE: ACTIVATED"})]})]})]}),C.jsxs("div",{className:"lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6",children:[C.jsxs("div",{className:"group relative bg-black/60 rounded-xl border border-pink-900/20 p-5 overflow-hidden hover:border-pink-500/40 transition-all duration-500 hover:-translate-y-2",children:[C.jsx("span",{className:"absolute top-3 right-3 font-mono text-[9px] text-[#D11A5B] tracking-wider uppercase font-bold",children:"FORMULA_A"}),C.jsxs("div",{className:"h-64 flex items-center justify-center relative",children:[C.jsx("div",{className:"absolute inset-0 w-32 h-32 rounded-full m-auto bg-[#D11A5B]/10 group-hover:bg-[#D11A5B]/15 blur-2xl transition-colors duration-500"}),C.jsx("img",{src:Ix,alt:"Cherry Diet Coke Can",referrerPolicy:"no-referrer",className:"h-full w-auto object-contain z-10 filter drop-shadow-[0_10px_12px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-500"})]}),C.jsxs("div",{className:"mt-4 border-t border-pink-950/40 pt-4 text-center",children:[C.jsx("h4",{className:"font-mono text-xs font-bold text-white uppercase tracking-wider mb-1",children:"CHERRY DIET COKE"}),C.jsx("p",{className:"font-sans text-[10px] text-gray-400",children:"Luminescent white body. Deep wild berry nodes, light crisp finish."})]})]}),C.jsxs("div",{className:"group relative bg-black/60 rounded-xl border border-pink-900/20 p-5 overflow-hidden hover:border-pink-500/40 transition-all duration-500 hover:-translate-y-2",children:[C.jsx("span",{className:"absolute top-3 right-3 font-mono text-[9px] text-[#E8002D] tracking-wider uppercase font-bold",children:"FORMULA_B"}),C.jsxs("div",{className:"h-64 flex items-center justify-center relative",children:[C.jsx("div",{className:"absolute inset-0 w-32 h-32 rounded-full m-auto bg-pink-500/5 group-hover:bg-pink-500/10 blur-2xl transition-colors duration-500"}),C.jsx("img",{src:WA,alt:"Cherry Coca-Cola Zero Sugar Can",referrerPolicy:"no-referrer",className:"h-full w-auto object-contain z-10 filter drop-shadow-[0_10px_12px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-500"})]}),C.jsxs("div",{className:"mt-4 border-t border-pink-950/40 pt-4 text-center border-l-0",children:[C.jsx("h4",{className:"font-mono text-xs font-bold text-white uppercase tracking-wider mb-1",children:"CHERRY COCA-COLA ZERO SUGAR"}),C.jsx("p",{className:"font-sans text-[10px] text-gray-400",children:"Stealth black armor with metallic pink bands. Intense dark cherry density."})]})]})]})]})]})}function YA(){try{const o=window.AudioContext||window.webkitAudioContext;if(!o)return;const t=new o,i=t.createOscillator(),s=t.createGain();i.type="sine",i.frequency.setValueAtTime(140,t.currentTime),i.frequency.exponentialRampToValueAtTime(40,t.currentTime+.1),s.gain.setValueAtTime(.8,t.currentTime),s.gain.linearRampToValueAtTime(.01,t.currentTime+.12),i.connect(s),s.connect(t.destination);const l=t.createOscillator(),c=t.createGain();l.type="triangle",l.frequency.setValueAtTime(800,t.currentTime),l.frequency.exponentialRampToValueAtTime(2e3,t.currentTime+.08),c.gain.setValueAtTime(.3,t.currentTime),c.gain.linearRampToValueAtTime(.01,t.currentTime+.08),l.connect(c),c.connect(t.destination),i.start(),i.stop(t.currentTime+.15),l.start(),l.stop(t.currentTime+.1);const d=t.sampleRate*1.5,p=t.createBuffer(1,d,t.sampleRate),m=p.getChannelData(0);for(let g=0;g<d;g++)m[g]=Math.random()*2-1;const h=t.createBufferSource();h.buffer=p;const v=t.createBiquadFilter();v.type="bandpass",v.frequency.setValueAtTime(6e3,t.currentTime),v.frequency.exponentialRampToValueAtTime(2500,t.currentTime+1.2),v.Q.setValueAtTime(2.5,t.currentTime);const S=t.createGain();S.gain.setValueAtTime(0,t.currentTime),S.gain.linearRampToValueAtTime(.65,t.currentTime+.02),S.gain.exponentialRampToValueAtTime(.005,t.currentTime+1.5),h.connect(v),v.connect(S),S.connect(t.destination),h.start(t.currentTime+.01),h.stop(t.currentTime+1.6)}catch(o){console.warn("Web Audio Context could not run or was suspended by client constraints:",o)}}function Ur(o,t){return`[${new Date().toISOString().split("T")[1].slice(0,8)}] [${o.toUpperCase()}] ${t}`}function ZA(){const[o,t]=Cn.useState("classic"),[i,s]=Cn.useState([]),[l,c]=Cn.useState(!0),[d,p]=Cn.useState(!0),m=[{id:"classic",name:"Classic Silver Can",image:Ox,accentColor:"#E8002D",label:"DIET COKE CLASSIC"},{id:"caffeine-free",name:"Caffeine Free Gold Can",image:Px,accentColor:"#C9A84C",label:"CAFFEINE FREE DIRECTIVE"},{id:"nano-banana",name:"Gemini Nano Banana Can",image:Fx,accentColor:"#FFE135",label:"GEMINI NANO BANANA EDITION"}];Cn.useEffect(()=>{const x=[Ur("system","Initializing Diet Coke quantum telemetry core..."),Ur("core","Sensing ambient temperature: 3.5°C (Optimal frost)"),Ur("mechanics","Carbonation pressure holds firm at 4.2 Bar"),Ur("safety","Caloric payload scan: 0.00% detected [Zero Compromise SECURE]"),Ur("branding","Current campaign status: Just Because. Always.")];s(x)},[]);const h=(x,T)=>{const N=Ur(x,T);s(M=>[N,...M].slice(0,8))},v=(x,T)=>{h(x,T),l&&YA()},S=()=>{v("holograph","Opening aluminum sound pressure valve. CRACK & REVEAL.");const x=document.getElementById("tech-spec-section");x&&x.scrollIntoView({behavior:"smooth"})},g=m.find(x=>x.id===o)||m[0];return C.jsxs("div",{className:"min-h-screen bg-[#0a0a0a] text-white flex flex-col font-sans select-none overflow-x-hidden antialiased selection:bg-[#E8002D]/30 selection:text-white",children:[C.jsxs("div",{className:"w-full bg-[#111111] border-b border-gray-900 py-2.5 px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-gray-400 gap-2 z-50",children:[C.jsxs("div",{className:"flex items-center gap-2",children:[C.jsx("span",{className:"w-2 h-2 bg-emerald-500 rounded-full animate-pulse"}),C.jsx("span",{className:"text-gray-200 uppercase tracking-widest font-bold",children:"SYS_ONLINE // DE-CALORIZED ENVIRONMENT"}),C.jsx("span",{className:"text-gray-600",children:"|"}),C.jsx("span",{className:"hidden sm:inline",children:"COCA-COLA CORE DEVNET v1.982"})]}),C.jsxs("div",{className:"flex items-center gap-6",children:[C.jsxs("div",{className:"flex items-center gap-1",children:[C.jsx("span",{className:"text-gray-500",children:"CARBONATION:"}),C.jsx("span",{className:"font-bold text-white tracking-widest",children:"N-FROST_MAX"})]}),C.jsx("button",{id:"sound-toggle-btn",onClick:()=>{c(!l),h("audio",`Acoustic feedback ${l?"MUTED":"ENGAGED"}`)},className:"flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer bg-white/5 px-2 py-0.5 rounded border border-white/10 active:scale-95",children:l?C.jsxs(C.Fragment,{children:[C.jsx(Sy,{className:"w-3.5 h-3.5 text-[#E8002D]"}),C.jsx("span",{children:"AUDIO_ON"})]}):C.jsxs(C.Fragment,{children:[C.jsx(My,{className:"w-3.5 h-3.5 text-gray-500"}),C.jsx("span",{children:"AUDIO_OFF"})]})})]})]}),C.jsxs("section",{id:"hero-reveal",className:"relative min-h-[90vh] flex flex-col justify-between pt-10 pb-12 px-4 md:px-12 bg-radial-gradient from-red-950/20 via-[#0a0a0a] to-[#0a0a0a] overflow-hidden border-b border-gray-950",children:[C.jsx("div",{className:"absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-[#E8002D]/10 blur-[80px] md:blur-[130px] z-0 pointer-events-none"}),C.jsx("div",{className:"absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] md:w-[350px] h-[180px] md:h-[350px] rounded-full bg-slate-100/10 blur-[60px] md:blur-[100px] z-0 pointer-events-none"}),C.jsx("div",{className:"absolute top-0 bottom-0 left-[10%] w-px bg-white/[0.02] pointer-events-none"}),C.jsx("div",{className:"absolute top-0 bottom-0 right-[10%] w-px bg-white/[0.02] pointer-events-none"}),C.jsx("div",{className:"absolute top-[25%] left-0 right-0 h-px bg-white/[0.02] pointer-events-none"}),C.jsxs("div",{className:"relative w-full flex items-center justify-between z-10 select-none",children:[C.jsxs("div",{className:"flex flex-col",children:[C.jsx("span",{className:"font-mono text-[9px] text-[#E8002D] tracking-widest uppercase font-bold",children:"ORIGINAL BRANDING DEPT"}),C.jsx("span",{className:"font-serif italic text-lg leading-none tracking-wide text-white",children:"The Coca-Cola Company"})]}),C.jsx("div",{className:"font-mono text-[10px] text-gray-500 text-right uppercase border border-white/5 py-1 px-2 rounded bg-black/40",children:"LOC // 35.0° N, 90.0° W • EST. 1886"})]}),C.jsxs("div",{className:"relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-center my-auto z-10 w-full max-w-7xl mx-auto",children:[C.jsxs("div",{className:"lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left gap-4",children:[C.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full border border-white/10 font-mono text-[10px] tracking-widest text-[#C0C0C0] uppercase",children:[C.jsx(ly,{className:"w-3.5 h-3.5 text-[#E8002D]"}),"HARDWARE RELEASE v2026.1"]}),C.jsxs("h1",{className:"font-sans font-black text-5xl sm:text-7xl xl:text-8xl tracking-tighter text-white leading-[0.9] uppercase select-none",children:["STAY ",C.jsx("br",{}),C.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-gray-500",children:"EXTRAORDINARY."})]}),C.jsx("p",{className:"font-mono text-xs sm:text-sm text-gray-400 tracking-wider uppercase font-semibold mt-1",children:"Zero Sugar. Zero Calories. Zero Compromise."}),C.jsxs("div",{className:"mt-4 flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto",children:[C.jsxs("button",{id:"experience-can-btn",onClick:S,className:"group relative px-8 py-3.5 font-mono text-xs tracking-widest uppercase bg-transparent text-white border border-[#E8002D]/60 rounded cursor-pointer transition-all duration-300 hover:border-white hover:shadow-[0_0_20px_rgba(232,0,45,0.4)] active:scale-95 w-full sm:w-auto",children:[C.jsx("span",{className:"absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-red-600 via-white to-silver opacity-0 group-hover:opacity-100 transition-opacity"}),"EXPERIENCE THE CAN"]}),C.jsxs("a",{href:"#the-archive-product",className:"text-xs font-mono text-gray-400 hover:text-white transition-colors tracking-widest uppercase flex items-center gap-1",onClick:()=>v("system","Targeting core reimagined catalog archive"),children:["SPECIFICATION DATA // ARCHIVE ",C.jsx(Y_,{className:"w-3.5 h-3.5"})]})]}),C.jsxs("div",{className:"mt-6 grid grid-cols-2 gap-4 w-full max-w-sm border-t border-gray-900 pt-4 font-mono text-[10px] text-gray-500",children:[C.jsxs("div",{className:"text-left",children:[C.jsx("span",{className:"block text-gray-600",children:"ZERO_SUGAR STATUS"}),C.jsx("span",{className:"text-white font-bold uppercase",children:"SECURED // 100%"})]}),C.jsxs("div",{className:"text-right sm:text-left",children:[C.jsx("span",{className:"block text-gray-600",children:"FORMULA_DECRYPT"}),C.jsx("span",{className:"text-[#E8002D] font-bold uppercase",children:"“JUST BECAUSE.”"})]})]})]}),C.jsxs("div",{className:"lg:col-span-6 relative flex items-center justify-center",children:[C.jsx(kA,{}),C.jsxs("div",{className:"absolute right-0 top-1/4 hidden md:flex flex-col items-end gap-1.5 font-mono text-[9px] text-gray-500 opacity-60",children:[C.jsx("div",{children:"INTERACTION_VECTOR: MOUSE_TILT"}),C.jsx("div",{children:"METALLIC_REFRACT: EXTREME"}),C.jsx("div",{children:"SYSTEM_COOLING: NOMINAL"})]})]})]}),C.jsxs("div",{className:"relative w-full flex flex-col md:flex-row items-center justify-between border-t border-slate-900/60 pt-6 mt-10 gap-3 z-10 text-[10px] font-mono text-gray-500 max-w-7xl mx-auto",children:[C.jsxs("div",{className:"flex items-center gap-2",children:[C.jsx("span",{className:"text-gray-600",children:"BRAND FLAGSHIP:"}),C.jsx("span",{className:"text-white font-bold bg-white/5 py-1 px-2.5 rounded border border-white/5 tracking-wider",children:"DIET COKE CORE v1982"})]}),C.jsx("div",{children:"ESTABLISHED FOR THE TASTE OF IT // NO GUILT. NO CRITIQUES."}),C.jsxs("div",{className:"flex items-center gap-3",children:[C.jsx("span",{children:"Y-ORBITAL_AZIMUTH: CONSTANT"}),C.jsx("span",{children:"|"}),C.jsx("span",{children:"SPEC_355ML"})]})]})]}),C.jsx("div",{className:"w-full bg-[#050505] border-y border-gray-950 py-3.5 px-4 md:px-12 select-none",children:C.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col md:flex-row items-stretch justify-between gap-4",children:[C.jsxs("div",{className:"flex items-center gap-2.5 font-mono text-xs text-gray-400",children:[C.jsx(xy,{className:"w-4 h-4 text-[#E8002D]"}),C.jsx("span",{className:"font-bold text-white uppercase tracking-widest",children:"QUANTUM TERMINAL_HUD:"}),C.jsx("span",{className:"hidden sm:inline text-gray-600",children:"// PRESS MAIN ELEMENTS TO COUPLING TRANSMISSION"})]}),C.jsx("div",{className:"flex-1 bg-[#090909] border border-gray-900 rounded p-2.5 max-h-16 overflow-y-auto block select-none",children:i.map((x,T)=>C.jsxs("div",{className:"font-mono text-[9px] text-zinc-500 leading-normal select-none",children:[C.jsx("span",{className:"text-slate-400 animate-pulse font-bold",children:">"})," ",x]},T))})]})}),C.jsx("section",{id:"the-archive-product",className:"w-full py-16 md:py-24 px-4 md:px-12 bg-[#0a0a0a] border-b border-gray-950 relative max-w-7xl mx-auto z-10",children:C.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",children:[C.jsx("div",{className:"lg:col-span-5 flex flex-col items-center",children:C.jsxs("div",{id:"product-blueprint-card",className:"relative p-6 bg-[#0e0e0e] border border-gray-900 rounded-2xl flex flex-col items-center justify-center w-full max-w-md group overflow-hidden",onClick:()=>v("blueprint","Accessing structural CAD of the premium canister"),children:[C.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"}),C.jsxs("div",{className:"relative group-hover:scale-103 transition-transform duration-500 p-4 flex items-center justify-center h-[340px]",children:[C.jsx("img",{src:g.image,alt:g.name,referrerPolicy:"no-referrer",className:"h-full w-auto object-contain z-10 filter drop-shadow-[0_15px_20px_rgba(0,0,0,0.85)] max-h-[310px]"}),C.jsxs("div",{className:"absolute left-2 top-1/2 -translate-y-1/2 font-mono text-[8px] text-gray-500 flex flex-col gap-1 tracking-tighter",children:[C.jsx("span",{children:"H: 122.2 MM"}),C.jsx("span",{children:"W: 66.0 MM"}),C.jsx("span",{children:"R: 33.0 MM"})]})]}),C.jsxs("div",{className:"mt-4 border-t border-gray-900 pt-4 w-full text-center",children:[C.jsx("span",{className:"font-mono text-sm font-black text-[#E8002D] tracking-widest block uppercase select-none animate-pulse",children:"★ NO SUGAR · NO CALORIES ★"}),C.jsx("span",{className:"font-mono text-[9px] text-gray-500 mt-1 block",children:"DEPLOYED ALUMINUM FORMULA 0.00% COMPROMISE"})]}),C.jsx("div",{className:"absolute top-2 left-2 font-mono text-[8px] text-gray-600",children:"BLUEPRINT_CAD: ACT_REFRESH"})]})}),C.jsxs("div",{className:"lg:col-span-7 flex flex-col gap-6 text-left",children:[C.jsxs("div",{className:"inline-flex items-center gap-1.5 font-mono text-[10px] text-gray-500 uppercase tracking-widest",children:[C.jsx("span",{className:"w-2 h-0.5 bg-[#E8002D]"}),"THE CORE METRIC"]}),C.jsxs("h2",{className:"font-sans font-black text-4xl md:text-6xl text-white tracking-tight uppercase leading-tight select-none",children:["THE ORIGINAL. ",C.jsx("br",{}),C.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-white to-gray-400",children:"REIMAGINED."})]}),C.jsx("p",{className:"font-sans text-sm md:text-base text-gray-300 leading-relaxed max-w-xl",children:"Since 1982, Diet Coke has been the icon of taste without compromise. One sip. Infinite possibilities. The silver aluminum can is not just a carbonated drink — it is a modern lifestyle statement of total sensory refinement. Zero sugar, complete crisp velocity."}),C.jsxs("div",{className:"mt-4 border-t border-gray-900 pt-6",children:[C.jsx("span",{className:"font-mono text-[10px] text-gray-500 block uppercase mb-3.5",children:"CHOOSE HARDWARE CONFIGURATION TO INTERACT:"}),C.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:m.map(x=>{const T=o===x.id;return C.jsxs("button",{id:`variant-selector-${x.id}`,onClick:()=>{t(x.id),v("variant",`Swapped interface render node to: [${x.name.toUpperCase()}]`)},className:`flex items-center gap-3 p-4 rounded-xl border text-left cursor-pointer transition-all duration-300 active:scale-97 ${T?"bg-white/5 border-white text-white shadow-[0_0_15px_rgba(255,255,255,0.08)]":"bg-[#0b0b0b] border-gray-900 text-gray-400 hover:border-gray-750 hover:text-gray-200"}`,children:[C.jsx("div",{className:"w-10 h-10 flex items-center justify-center p-1 rounded-lg bg-black",children:C.jsx("img",{src:x.image,alt:x.name,referrerPolicy:"no-referrer",className:"h-full w-auto object-contain"})}),C.jsxs("div",{className:"flex flex-col",children:[C.jsx("span",{className:"font-sans font-bold text-xs uppercase text-white",children:x.name}),C.jsxs("span",{className:"font-mono text-[9px] text-gray-500 uppercase",children:["CONFIG_ID // ",x.id.toUpperCase()]})]})]},x.id)})})]}),C.jsxs("div",{className:"grid grid-cols-3 gap-4 font-mono text-[10px] text-gray-400 bg-white/5 p-4 rounded-xl border border-white/5 mt-2",children:[C.jsxs("div",{children:[C.jsx("span",{className:"block text-gray-600 mb-0.5",children:"SWEETENER_MATRIX"}),C.jsx("span",{className:"text-white font-bold",children:"ASPARTAME // PURE"})]}),C.jsxs("div",{className:"border-x border-gray-900 px-4",children:[C.jsx("span",{className:"block text-gray-600 mb-0.5",children:"ACOUSTICS"}),C.jsx("span",{className:"text-white font-bold",children:"CRISP 4.2 HZ FIZZ"})]}),C.jsxs("div",{className:"pl-4",children:[C.jsx("span",{className:"block text-gray-600 mb-0.5",children:"PACKAGING"}),C.jsx("span",{className:"text-white font-bold",children:"RECYCLABLE 100%"})]})]})]})]})}),C.jsx("section",{id:"collection-showcase",className:"w-full py-16 md:py-24 px-4 md:px-12 bg-[#080808] border-b border-gray-950",children:C.jsxs("div",{className:"max-w-7xl mx-auto",children:[C.jsxs("div",{className:"flex flex-col md:flex-row items-baseline justify-between mb-10 gap-3",children:[C.jsxs("div",{className:"text-left",children:[C.jsx("span",{className:"font-mono text-xs text-[#E8002D] tracking-widest uppercase font-bold block mb-1",children:"CATALOG // REPERTOIRE"}),C.jsx("h2",{className:"font-sans font-black text-3xl md:text-5xl text-white tracking-widest uppercase",children:"THE COLLECTION."})]}),C.jsx("div",{className:"font-mono text-[10px] text-gray-500 uppercase",children:"GRID SELECTABLE // SEAMLESS COMPATIBILITY"})]}),C.jsx(XA,{})]})}),C.jsxs("section",{id:"just-because-billboard",className:"relative w-full py-20 md:py-32 px-4 bg-black overflow-hidden border-b border-gray-950",children:[C.jsx("div",{className:"absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none"}),C.jsxs("div",{className:"max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10",children:[C.jsxs("div",{className:"lg:col-span-8 flex flex-col gap-4 text-left",children:[C.jsx("span",{className:"font-mono text-xs text-[#C0C0C0] tracking-widest uppercase font-bold",children:"CORE DIRECTIVE // “JUST BECAUSE.”"}),C.jsxs("h2",{className:"font-sans font-black text-4xl sm:text-6xl xl:text-7xl text-white tracking-tighter leading-none uppercase select-none",children:["YOU DON'T NEED ",C.jsx("br",{}),C.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-zinc-100 to-gray-500",children:"A REASON."})]}),C.jsx("p",{className:"font-sans text-sm sm:text-base text-gray-400 leading-relaxed max-w-xl",children:"No rules. No guilt. No explanation. Just crisp de-calorized cold-pressed liquid in a perfect aluminum canister — just because. Take the ultimate micro-break, recharge cognitive levels, and return to performance."}),C.jsx("div",{className:"mt-2.5 flex items-center gap-3",children:C.jsx("button",{id:"interactive-just-because-trigger",onClick:()=>v("directive","Triggered core justification bypass protocol: Just Because."),className:"font-mono text-[10px] px-3.5 py-1.5 bg-white/5 hover:bg-white/10 text-white rounded border border-white/10 active:scale-95 cursor-pointer uppercase tracking-widest",children:"BYPASS RULES DIRECTIVE"})})]}),C.jsx("div",{className:"lg:col-span-4 flex items-center justify-center",children:C.jsxs("div",{onClick:()=>v("fluid-matrix","Sensing temperature viscosity index: 4.2 cST"),className:"relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border border-white/5 shadow-[0_0_40px_rgba(232,0,45,0.15)] flex items-center justify-center group cursor-pointer",children:[C.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#E8002D] via-neutral-100 to-[#121212] animate-liquid"}),C.jsxs("div",{className:"absolute inset-[3px] bg-[#050505]/95 rounded-full flex flex-col items-center justify-center text-center p-6 z-10 border border-white/10",children:[C.jsx(ny,{className:"w-8 h-8 text-[#E8002D] mb-3 animate-pulse"}),C.jsx("span",{className:"font-mono font-bold text-xs tracking-widest text-white mb-1 uppercase",children:"FLUID VELOCITY"}),C.jsx("span",{className:"font-mono text-[10px] text-gray-500",children:"REFRESH ENVELOPE: ACTIVE"}),C.jsx("span",{className:"mt-4 font-mono text-[8px] text-[#E8002D] tracking-widest",children:"SYS.LOOP: CALIBRATED"})]}),C.jsx("div",{className:"absolute inset-0 rounded-full border border-red-500/0 group-hover:border-red-500/30 transition-colors duration-500"})]})})]})]}),C.jsx("section",{id:"technical-specifications",className:"w-full py-16 md:py-24 px-4 md:px-12 bg-[#090909] border-b border-gray-950",children:C.jsxs("div",{className:"max-w-7xl mx-auto",children:[C.jsxs("div",{className:"flex flex-col md:flex-row items-baseline justify-between mb-10 gap-3",children:[C.jsxs("div",{className:"text-left",children:[C.jsx("span",{className:"font-mono text-xs text-[#E8002D] tracking-widest uppercase font-bold block mb-1",children:"CHEMICAL_FORMULA // SPECS"}),C.jsx("h2",{className:"font-sans font-black text-3xl md:text-5xl text-white tracking-tight uppercase",children:"WHAT'S INSIDE."})]}),C.jsx("div",{className:"font-mono text-[10px] text-gray-400",children:"PHYSICAL ENVELOPES // NUTRITION ASSAY"})]}),C.jsx(jA,{})]})}),C.jsx("section",{id:"cherry-dimension-universe",className:"w-full py-16 md:py-24 px-4 md:px-12 bg-black",children:C.jsxs("div",{className:"max-w-7xl mx-auto",children:[C.jsxs("div",{className:"text-center mb-12",children:[C.jsx("span",{className:"font-mono text-xs text-pink-500 tracking-widest uppercase font-bold block mb-1",children:"ATMOSPHERIC VARIANT MATRIX"}),C.jsx("h2",{className:"font-sans font-black text-3xl md:text-5xl text-white tracking-widest uppercase",children:"ENTER THE CHERRY DIMENSION."}),C.jsx("div",{className:"w-16 h-0.5 bg-pink-600 mx-auto mt-4"})]}),C.jsx(qA,{})]})}),C.jsx("div",{className:"w-full bg-[#050505] py-8 border-t border-gray-950 px-4 md:px-12 text-center text-xs font-mono text-gray-500",children:C.jsxs("div",{className:"max-w-2xl mx-auto flex flex-col items-center gap-3",children:[C.jsx(my,{className:"w-5 h-5 text-emerald-500"}),C.jsx("h3",{className:"font-sans font-bold text-white text-xs uppercase tracking-widest",children:"AUTHENTIC PRODUCT STATE ASSURACY"}),C.jsx("p",{className:"text-[10px] text-gray-500 leading-relaxed max-w-lg",children:"Diet Coke is produced under strict patent blueprints authorized solely by The Coca-Cola Company. All metallic canisters are made with lightweight durable 100% recyclable aluminum alloy formats."}),C.jsxs("div",{className:"flex gap-4 text-[9px] text-gray-600 mt-1",children:[C.jsx("span",{children:"REGISTRATION: #89211029"}),C.jsx("span",{children:"•"}),C.jsx("span",{children:"ENCRYPT CODE: ZERO-SUGAR-ZERO-COMPROMISE"})]})]})}),C.jsx("footer",{className:"w-full bg-[#030303] border-t border-gray-900 pt-16 pb-12 px-4 md:px-12 z-10 mt-auto",children:C.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col gap-12",children:[C.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 gap-8",children:[C.jsxs("div",{className:"md:col-span-6 flex flex-col gap-4 text-left",children:[C.jsx("span",{className:"font-serif italic text-3xl leading-none text-white tracking-wide",children:"The Coca-Cola Company"}),C.jsx("p",{className:"font-mono text-[10px] text-[#E8002D] tracking-widest uppercase font-semibold leading-relaxed max-w-sm",children:"“JUST FOR THE TASTE OF IT.” / NO SUGAR. NO CALORIES. STAY EXTRAORDINARY."})]}),C.jsxs("div",{className:"md:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-6 font-mono text-[11px] text-gray-400 text-left",children:[C.jsxs("div",{className:"flex flex-col gap-2.5",children:[C.jsx("span",{className:"font-bold text-white tracking-wider uppercase text-[10px]",children:"DIET COKE DIRECT"}),C.jsx("a",{href:"#",onClick:()=>v("footer","Targeting Privacy Directives"),className:"hover:text-red-500 transition-colors",children:"PRIVACY POLICY"}),C.jsx("a",{href:"#",onClick:()=>v("footer","Targeting Terms of Use"),className:"hover:text-red-500 transition-colors",children:"TERMS of USE"}),C.jsx("a",{href:"#",onClick:()=>v("footer","Targeting Legal Notices"),className:"hover:text-red-500 transition-colors",children:"LEGAL NOTICES"})]}),C.jsxs("div",{className:"flex flex-col gap-2.5",children:[C.jsx("span",{className:"font-bold text-white tracking-wider uppercase text-[10px]",children:"CONNECT INTERFACE"}),C.jsx("a",{href:"#",onClick:()=>v("footer","Targeting Contact Gateway"),className:"hover:text-red-500 transition-colors",children:"CONTACT GATEWAY"}),C.jsx("a",{href:"#",onClick:()=>v("footer","Targeting Client Services"),className:"hover:text-red-500 transition-colors",children:"CLIENT SERVICES"}),C.jsx("a",{href:"#",onClick:()=>v("footer","Targeting Developer API"),className:"hover:text-red-500 transition-colors",children:"SYS_CONFIG"})]}),C.jsxs("div",{className:"flex flex-col gap-2.5 col-span-2 md:col-span-1",children:[C.jsx("span",{className:"font-bold text-white tracking-wider uppercase text-[10px]",children:"COGNITIVE CAMPAIGN"}),C.jsx("span",{className:"text-zinc-600 block leading-relaxed",children:"“KNOW THE SIGNS // TAKE A BREAK, REFRESH, RETURN TO PERFORMANCE.”"})]})]})]}),C.jsxs("div",{className:"border-t border-gray-950 pt-8 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono text-gray-600 gap-4",children:[C.jsx("div",{className:"flex items-center gap-2",children:C.jsx("span",{children:"© 2026 THE COCA-COLA COMPANY. ALL RIGHTS RESERVED."})}),C.jsx("div",{className:"flex items-center gap-1.5 text-zinc-500 font-bold uppercase tracking-wider",children:C.jsx("span",{children:"DESIGNED FOR THE TASTE OF IT // STAY EXTRAORDINARY."})})]})]})})]})}ZS.createRoot(document.getElementById("root")).render(C.jsx(Cn.StrictMode,{children:C.jsx(ZA,{})}));
