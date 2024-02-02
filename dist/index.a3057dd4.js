var e,t,r,n,i,o,a,s,c,u,l,d,p,f,h,v,g=globalThis;function y(e){return e&&e.__esModule?e.default:e}var m={},b={},_=function(e){return e&&e.Math===Math&&e};b=_("object"==typeof globalThis&&globalThis)||_("object"==typeof window&&window)||_("object"==typeof self&&self)||_("object"==typeof g&&g)||_("object"==typeof b&&b)||function(){return this}()||Function("return this")();var w={},k={};w=!(k=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var E={},S={};S=!k(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var $=Function.prototype.call;E=S?$.bind($):function(){return $.apply($,arguments)};var O={}.propertyIsEnumerable,j=Object.getOwnPropertyDescriptor;n=j&&!O.call({1:2},1)?function(e){var t=j(this,e);return!!t&&t.enumerable}:O;var L={};L=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var P={},x={},M={},T=Function.prototype,H=T.call,F=S&&T.bind.bind(H,H),I={},q=(M=S?F:function(e){return function(){return H.apply(e,arguments)}})({}.toString),A=M("".slice);I=function(e){return A(q(e),8,-1)};var C=Object,N=M("".split);x=k(function(){return!C("z").propertyIsEnumerable(0)})?function(e){return"String"===I(e)?N(e,""):C(e)}:C;var D={},R={};R=function(e){return null==e};var W=TypeError;D=function(e){if(R(e))throw new W("Can't call method on "+e);return e},P=function(e){return x(D(e))};var G={},U={},z={},B={},J="object"==typeof document&&document.all;B=void 0===J&&void 0!==J?function(e){return"function"==typeof e||e===J}:function(e){return"function"==typeof e},z=function(e){return"object"==typeof e?null!==e:B(e)};var Y={},Q={};Q=function(e,t){var r;return arguments.length<2?(r=b[e],B(r)?r:void 0):b[e]&&b[e][t]};var V={};V=M({}.isPrototypeOf);var K={},X={},Z={},ee={};ee="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var et=b.process,er=b.Deno,en=et&&et.versions||er&&er.version,ei=en&&en.v8;ei&&(o=(i=ei.split("."))[0]>0&&i[0]<4?1:+(i[0]+i[1])),!o&&ee&&(!(i=ee.match(/Edge\/(\d+)/))||i[1]>=74)&&(i=ee.match(/Chrome\/(\d+)/))&&(o=+i[1]),Z=o;var eo=b.String;K=(X=!!Object.getOwnPropertySymbols&&!k(function(){var e=Symbol("symbol detection");return!eo(e)||!(Object(e) instanceof Symbol)||!Symbol.sham&&Z&&Z<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ea=Object;Y=K?function(e){return"symbol"==typeof e}:function(e){var t=Q("Symbol");return B(t)&&V(t.prototype,ea(e))};var es={},ec={},eu={},el=String;eu=function(e){try{return el(e)}catch(e){return"Object"}};var ed=TypeError;ec=function(e){if(B(e))return e;throw new ed(eu(e)+" is not a function")},es=function(e,t){var r=e[t];return R(r)?void 0:ec(r)};var ep={},ef=TypeError;ep=function(e,t){var r,n;if("string"===t&&B(r=e.toString)&&!z(n=E(r,e))||B(r=e.valueOf)&&!z(n=E(r,e))||"string"!==t&&B(r=e.toString)&&!z(n=E(r,e)))return n;throw new ef("Can't convert object to primitive value")};var eh={},ev={};ev=!1;var eg={},ey={},em=Object.defineProperty;ey=function(e,t){try{em(b,e,{value:t,configurable:!0,writable:!0})}catch(r){b[e]=t}return t};var eb="__core-js_shared__";eg=b[eb]||ey(eb,{}),(eh=function(e,t){return eg[e]||(eg[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.35.1",mode:ev?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.35.1/LICENSE",source:"https://github.com/zloirock/core-js"});var e_={},ew={},ek=Object;ew=function(e){return ek(D(e))};var eE=M({}.hasOwnProperty);e_=Object.hasOwn||function(e,t){return eE(ew(e),t)};var eS={},e$=0,eO=Math.random(),ej=M(1..toString);eS=function(e){return"Symbol("+(void 0===e?"":e)+")_"+ej(++e$+eO,36)};var eL=b.Symbol,eP=eh("wks"),ex=K?eL.for||eL:eL&&eL.withoutSetter||eS,eM=TypeError,eT=(e_(eP,e="toPrimitive")||(eP[e]=X&&e_(eL,e)?eL[e]:ex("Symbol."+e)),eP[e]);U=function(e,t){if(!z(e)||Y(e))return e;var r,n=es(e,eT);if(n){if(void 0===t&&(t="default"),r=E(n,e,t),!z(r)||Y(r))return r;throw new eM("Can't convert object to primitive value")}return void 0===t&&(t="number"),ep(e,t)},G=function(e){var t=U(e,"string");return Y(t)?t:t+""};var eH={},eF={},eI=b.document,eq=z(eI)&&z(eI.createElement);eF=function(e){return eq?eI.createElement(e):{}},eH=!w&&!k(function(){return 7!==Object.defineProperty(eF("div"),"a",{get:function(){return 7}}).a});var eA=Object.getOwnPropertyDescriptor;r=w?eA:function(e,t){if(e=P(e),t=G(t),eH)try{return eA(e,t)}catch(e){}if(e_(e,t))return L(!E(n,e,t),e[t])};var eC={},eN={};eN=w&&k(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eD={},eR=String,eW=TypeError;eD=function(e){if(z(e))return e;throw new eW(eR(e)+" is not an object")};var eG=TypeError,eU=Object.defineProperty,ez=Object.getOwnPropertyDescriptor,eB="enumerable",eJ="configurable",eY="writable";a=w?eN?function(e,t,r){if(eD(e),t=G(t),eD(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eY in r&&!r[eY]){var n=ez(e,t);n&&n[eY]&&(e[t]=r.value,r={configurable:eJ in r?r[eJ]:n[eJ],enumerable:eB in r?r[eB]:n[eB],writable:!1})}return eU(e,t,r)}:eU:function(e,t,r){if(eD(e),t=G(t),eD(r),eH)try{return eU(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eG("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eC=w?function(e,t,r){return a(e,t,L(1,r))}:function(e,t,r){return e[t]=r,e};var eQ={},eV={},eK=Function.prototype,eX=w&&Object.getOwnPropertyDescriptor,eZ=e_(eK,"name")&&(!w||w&&eX(eK,"name").configurable),e0={},e1=M(Function.toString);B(eg.inspectSource)||(eg.inspectSource=function(e){return e1(e)}),e0=eg.inspectSource;var e2={},e3={},e4=b.WeakMap;e3=B(e4)&&/native code/.test(String(e4));var e8={},e9=eh("keys");e8=function(e){return e9[e]||(e9[e]=eS(e))};var e5={};e5={};var e7="Object already initialized",e6=b.TypeError,te=b.WeakMap;if(e3||eg.state){var tt=eg.state||(eg.state=new te);tt.get=tt.get,tt.has=tt.has,tt.set=tt.set,s=function(e,t){if(tt.has(e))throw new e6(e7);return t.facade=e,tt.set(e,t),t},c=function(e){return tt.get(e)||{}},u=function(e){return tt.has(e)}}else{var tr=e8("state");e5[tr]=!0,s=function(e,t){if(e_(e,tr))throw new e6(e7);return t.facade=e,eC(e,tr,t),t},c=function(e){return e_(e,tr)?e[tr]:{}},u=function(e){return e_(e,tr)}}var tn=(e2={set:s,get:c,has:u,enforce:function(e){return u(e)?c(e):s(e,{})},getterFor:function(e){return function(t){var r;if(!z(t)||(r=c(t)).type!==e)throw new e6("Incompatible receiver, "+e+" required");return r}}}).enforce,ti=e2.get,to=String,ta=Object.defineProperty,ts=M("".slice),tc=M("".replace),tu=M([].join),tl=w&&!k(function(){return 8!==ta(function(){},"length",{value:8}).length}),td=String(String).split("String"),tp=eV=function(e,t,r){"Symbol("===ts(to(t),0,7)&&(t="["+tc(to(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!e_(e,"name")||eZ&&e.name!==t)&&(w?ta(e,"name",{value:t,configurable:!0}):e.name=t),tl&&r&&e_(r,"arity")&&e.length!==r.arity&&ta(e,"length",{value:r.arity});try{r&&e_(r,"constructor")&&r.constructor?w&&ta(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tn(e);return e_(n,"source")||(n.source=tu(td,"string"==typeof t?t:"")),e};Function.prototype.toString=tp(function(){return B(this)&&ti(this).source||e0(this)},"toString"),eQ=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(B(r)&&eV(r,o,n),n.global)i?e[t]=r:ey(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:a(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tf={},th={},tv={},tg={},ty={},tm={},tb=Math.ceil,t_=Math.floor;tm=Math.trunc||function(e){var t=+e;return(t>0?t_:tb)(t)},ty=function(e){var t=+e;return t!=t||0===t?0:tm(t)};var tw=Math.max,tk=Math.min;tg=function(e,t){var r=ty(e);return r<0?tw(r+t,0):tk(r,t)};var tE={},tS={},t$=Math.min;tS=function(e){var t=ty(e);return t>0?t$(t,9007199254740991):0},tE=function(e){return tS(e.length)};var tO=function(e){return function(t,r,n){var i,o=P(t),a=tE(o),s=tg(n,a);if(e&&r!=r){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},tj={includes:tO(!0),indexOf:tO(!1)}.indexOf,tL=M([].push);tv=function(e,t){var r,n=P(e),i=0,o=[];for(r in n)!e_(e5,r)&&e_(n,r)&&tL(o,r);for(;t.length>i;)e_(n,r=t[i++])&&(~tj(o,r)||tL(o,r));return o};var tP=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");l=Object.getOwnPropertyNames||function(e){return tv(e,tP)},d=Object.getOwnPropertySymbols;var tx=M([].concat);th=Q("Reflect","ownKeys")||function(e){var t=l(eD(e));return d?tx(t,d(e)):t},tf=function(e,t,n){for(var i=th(t),o=0;o<i.length;o++){var s=i[o];e_(e,s)||n&&e_(n,s)||a(e,s,r(t,s))}};var tM={},tT=/#|\.prototype\./,tH=function(e,t){var r=tI[tF(e)];return r===tA||r!==tq&&(B(t)?k(t):!!t)},tF=tH.normalize=function(e){return String(e).replace(tT,".").toLowerCase()},tI=tH.data={},tq=tH.NATIVE="N",tA=tH.POLYFILL="P";tM=tH,m=function(e,t){var n,i,o,a,s,c=e.target,u=e.global,l=e.stat;if(n=u?b:l?b[c]||ey(c,{}):b[c]&&b[c].prototype)for(i in t){if(a=t[i],o=e.dontCallGetSet?(s=r(n,i))&&s.value:n[i],!tM(u?i:c+(l?".":"#")+i,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;tf(a,o)}(e.sham||o&&o.sham)&&eC(a,"sham",!0),eQ(n,i,a,e)}};var tC={},tN={},tD=Function.prototype,tR=tD.apply,tW=tD.call;tN="object"==typeof Reflect&&Reflect.apply||(S?tW.bind(tR):function(){return tW.apply(tR,arguments)});var tG={},tU={},tz=(tU=function(e){if("Function"===I(e))return M(e)})(tU.bind);tG=function(e,t){return ec(e),void 0===t?e:S?tz(e,t):function(){return e.apply(t,arguments)}};var tB={};tB=Q("document","documentElement");var tJ={};tJ=M([].slice);var tY={},tQ=TypeError;tY=function(e,t){if(e<t)throw new tQ("Not enough arguments");return e};var tV={};tV=/(?:ipad|iphone|ipod).*applewebkit/i.test(ee);var tK={};tK="process"===I(b.process);var tX=b.setImmediate,tZ=b.clearImmediate,t0=b.process,t1=b.Dispatch,t2=b.Function,t3=b.MessageChannel,t4=b.String,t8=0,t9={},t5="onreadystatechange";k(function(){p=b.location});var t7=function(e){if(e_(t9,e)){var t=t9[e];delete t9[e],t()}},t6=function(e){return function(){t7(e)}},re=function(e){t7(e.data)},rt=function(e){b.postMessage(t4(e),p.protocol+"//"+p.host)};tX&&tZ||(tX=function(e){tY(arguments.length,1);var t=B(e)?e:t2(e),r=tJ(arguments,1);return t9[++t8]=function(){tN(t,void 0,r)},f(t8),t8},tZ=function(e){delete t9[e]},tK?f=function(e){t0.nextTick(t6(e))}:t1&&t1.now?f=function(e){t1.now(t6(e))}:t3&&!tV?(v=(h=new t3).port2,h.port1.onmessage=re,f=tG(v.postMessage,v)):b.addEventListener&&B(b.postMessage)&&!b.importScripts&&p&&"file:"!==p.protocol&&!k(rt)?(f=rt,b.addEventListener("message",re,!1)):f=t5 in eF("script")?function(e){tB.appendChild(eF("script"))[t5]=function(){tB.removeChild(this),t7(e)}}:function(e){setTimeout(t6(e),0)});var rr=(tC={set:tX,clear:tZ}).clear;m({global:!0,bind:!0,enumerable:!0,forced:b.clearImmediate!==rr},{clearImmediate:rr});var rn=tC.set,ri={},ro={};ro="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var ra=b.Function,rs=/MSIE .\./.test(ee)||ro&&((t=b.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));ri=function(e,t){var r=t?2:1;return rs?function(n,i){var o=tY(arguments.length,1)>r,a=B(n)?n:ra(n),s=o?tJ(arguments,r):[],c=o?function(){tN(a,this,s)}:a;return t?e(c,i):e(c)}:e};var rc=b.setImmediate?ri(rn,!1):rn;m({global:!0,bind:!0,enumerable:!0,forced:b.setImmediate!==rc},{setImmediate:rc});var ru=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,s,c=Object.create((r&&r.prototype instanceof g?r:g).prototype);return i(c,"_invoke",{value:(a=new j(o||[]),s=p,function(r,i){if(s===f)throw Error("Generator is already running");if(s===h){if("throw"===r)throw i;return{value:t,done:!0}}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var c=function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),v;var a=d(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var s=a.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,v)}(o,a);if(c){if(c===v)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===p)throw s=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=f;var u=d(e,n,a);if("normal"===u.type){if(s=a.done?h:"suspendedYield",u.arg===v)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(s=h,a.method="throw",a.arg=u.arg)}})}),c}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",f="executing",h="completed",v={};function g(){}function y(){}function m(){}var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(L([])));w&&w!==r&&n.call(w,a)&&(b=w);var k=m.prototype=g.prototype=Object.create(b);function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=d(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){u.value=e,a(u)},function(e){return r("throw",e,a,s)})}}(i,o,r,a)})}return r=r?r.then(a,a):a()}})}function $(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach($,this),this.reset(!0)}function L(e){if(null!=e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return y.prototype=m,i(k,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:y,configurable:!0}),y.displayName=u(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},E(k),u(k,c,"Generator"),u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=L,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;O(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:L(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}({});try{regeneratorRuntime=ru}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=ru:Function("r","regeneratorRuntime = r")(ru)}const rl="https://forkify-api.herokuapp.com/api/v2/recipes/",rd="f5b6c833-b839-4f07-a521-e6fffdbc68d5",rp=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 seconds"))},1e4)})]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e}},rf={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]};function rh(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}}async function rv(e){try{let t=await rp(`${rl}/${e}?key=${rd}`);rf.recipe=rh(t),rf.bookmarks.some(t=>t.id===e)?rf.recipe.bookmarked=!0:rf.recipe.bookmarked=!1}catch(e){throw console.error(`${e} \u{1F4A5}`),e}}async function rg(e){try{rf.search.query=e;let t=await rp(`${rl}?search=${e}&key=${rd}`);rf.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),rf.search.page=1}catch(e){throw e}}function ry(e=rf.search.page){rf.search.page=e;let t=(e-1)*rf.search.resultsPerPage,r=e*rf.search.resultsPerPage;return rf.search.results.slice(t,r)}function rm(){localStorage.setItem("bookmarks",JSON.stringify(rf.bookmarks))}function rb(e){rf.bookmarks.push(e),e.id===rf.recipe.id&&(rf.recipe.bookmarked=!0),rm()}async function r_(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Invalid ingredient format");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await rp(`${rl}?key=${rd}`,r);rf.recipe=rh(n),rb(rf.recipe)}catch(e){throw e}}!function(){let e=localStorage.getItem("bookmarks");e&&(rf.bookmarks=JSON.parse(e))}();var rw={};rw=new URL("icons.c14567a0.svg",import.meta.url).toString();class rk{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
        <div class="spinner">
        <svg>
          <use href="${y(rw)}#icon-loader"></use>
        </svg>
      </div>
      `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`
            <div class="error">
                <div>
                <svg>
                    <use href="${y(rw)}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${e}</p>
          </div>
          `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._successMessage){let t=`
            <div class="message">
                <div>
                <svg>
                    <use href="${y(rw)}#icon-smile-triangle"></use>
              </svg>
            </div>
            <p>${e}</p>
          </div>
          `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}class rE extends rk{_parentElement=document.querySelector(".recipe");_errorMessage="We couldn't find this recipe, please try another one.";_successMessage="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let{updateTo:n}=r.dataset;+n>0&&e(+n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){t.target.closest(".btn--bookmark")&&e()})}_generateMarkup(){return`
            <figure class="recipe__fig">
            <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
            <h1 class="recipe__title">
            <span>${this._data.title}</span>
            </h1>
        </figure>

        <div class="recipe__details">
            <div class="recipe__info">
            <svg class="recipe__info-icon">
                <use href="${y(rw)}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
            </div>
            <div class="recipe__info">
            <svg class="recipe__info-icon">
                <use href="${y(rw)}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
                <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
                <svg>
                    <use href="${y(rw)}#icon-minus-circle"></use>
                </svg>
                </button>
                <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
                <svg>
                    <use href="${y(rw)}#icon-plus-circle"></use>
                </svg>
                </button>
            </div>
            </div>

            <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
                <svg>
                    <use href="${y(rw)}#icon-user"></use>
                </svg>
            </div>
            <button class="btn--round btn--bookmark">
            <svg class="">
                <use href="${y(rw)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
            </svg>
            </button>
        </div>

        <div class="recipe__ingredients">
            <h2 class="heading--2">Recipe ingredients</h2>
            <ul class="recipe__ingredient-list">
                ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}

            </ul>
        </div>

        <div class="recipe__directions">
            <h2 class="heading--2">How to cook it</h2>
            <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
            directions at their website.
            </p>
            <a
            class="btn--small recipe__btn"
            href="${this._data.sourceUrl}"
            target="_blank"
            >
            <span>Directions</span>
            <svg class="search__icon">
                <use href="${y(rw)}#icon-arrow-right"></use>
            </svg>
            </a>
        </div>
      `}_generateMarkupIngredient(e){return`
                    <li class="recipe__ingredient">
                    <svg class="recipe__icon">
                    <use href="${y(rw)}#icon-check"></use>
                    </svg>
                    <div class="recipe__quantity">${e.quantity?e.quantity.toString():""}</div>
                    <div class="recipe__description">
                    <span class="recipe__unit">${e.unit}</span>
                    ${e.description}
                    </div>
                </li>
                    `}}var rS=new rE;class r${_parentElement=document.querySelector(".search");_inputField=this._parentElement.querySelector(".search__field");getQuery(){let e=this._inputField.value;return this._clearInput(),e}_clearInput(){this._inputField.value=""}addHandlerSearch(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rO=new r$,rj=new class extends rk{_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return`
        <li class="preview">
            <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">
              <figure class="preview__fig">
                <img src="${this._data.image}" alt="${this._data.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${this._data.title}</h4>
                <p class="preview__publisher">${this._data.publisher}</p>
              
              <div class="preview__user-generated ${this._data.key?"":"hidden"}">
                <svg>
                    <use href="${y(rw)}#icon-user"></use>
                </svg>
              </div>
            </div>
            </a>
          </li>
        `}};class rL extends rk{_parentElement=document.querySelector(".results");_errorMessage="No recipes found with your search query, please try another one.";_successMessage="";_generateMarkup(){return this._data.map(e=>rj.render(e,!1)).join("")}}var rP=new rL;class rx extends rk{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&t>1?`
            <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
                <span>Page ${e+1}</span>
                <svg class="search__icon">
                    <use href="${y(rw)}#icon-arrow-right"></use>
                </svg>
            </button>
            `:e===t&&t>1?`
            <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                    <use href="${y(rw)}#icon-arrow-left"></use>
                </svg>
                <span>Page ${e-1}</span>
            </button>
            `:e<t?`
            <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                    <use href="${y(rw)}#icon-arrow-left"></use>
                </svg>
                <span>Page ${e-1}</span>
            </button>
            <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
                <span>Page ${e+1}</span>
                <svg class="search__icon">
                    <use href="${y(rw)}#icon-arrow-right"></use>
                </svg>
            </button>
            `:""}}var rM=new rx;class rT extends rk{_parentElement=document.querySelector(".upload");_successMessage="Recipe was successfully uploaded \uD83E\uDD29";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault();let r=Object.fromEntries([...new FormData(this)]);console.log(r),e(r)})}_generateMarkup(){}}var rH=new rT;async function rF(){try{let e=window.location.hash.slice(1);if(!e)return;rS.renderSpinner(),rP.update(ry()),rP.update(rf.bookmarks),await rv(e),rS.render(rf.recipe)}catch(e){rS.renderError()}}async function rI(){try{rP.renderSpinner();let e=rO.getQuery();if(!e)return;await rg(e),rP.render(ry(1)),rM.render(rf.search)}catch(e){console.log(e)}}async function rq(e){try{rH.renderSpinner(),await r_(e),console.log(rf.recipe),rS.render(rf.recipe),rH.renderMessage(),rP.render(rf.bookmarks),window.history.pushState(null,"",`#${rf.recipe.id}`),setTimeout(function(){rH.toggleWindow()},2500)}catch(e){console.error("\uD83D\uDC9F",e),rH.renderError(e.message)}}rP.addHandlerRender(function(){rP.render(rf.bookmarks)}),rS.addHandlerRender(rF),rS.addHandlerUpdateServings(function(e){rf.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/rf.recipe.servings}),rf.recipe.servings=e,rS.update(rf.recipe)}),rS.addHandlerAddBookmark(function(){rf.recipe.bookmarked?function(e){let t=rf.bookmarks.findIndex(t=>t.id===e);rf.bookmarks.splice(t,1),e===rf.recipe.id&&(rf.recipe.bookmarked=!1),rm()}(rf.recipe.id):rb(rf.recipe),rS.update(rf.recipe),rP.render(rf.bookmarks)}),rO.addHandlerSearch(rI),rM.addHandlerClick(function(e){rP.render(ry(e)),rM.render(rf.search)}),rH.addHandlerUpload(rq);
//# sourceMappingURL=index.a3057dd4.js.map
