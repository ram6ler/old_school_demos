(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}function mixinPropertiesHard(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
if(!b.hasOwnProperty(r)){b[r]=a[r]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(Object.getPrototypeOf(s)&&Object.getPrototypeOf(s).p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++){inherit(b[t],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){var s=d()
if(a[b]!==t){A.hE(b)}a[b]=s}var r=a[b]
a[c]=function(){return r}
return r}}function makeConstList(a,b){if(b!=null)A.o(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t){convertToFastObject(a[t])}}var y=0
function instanceTearOffGetter(a,b){var t=null
return a?function(c){if(t===null)t=A.dh(b)
return new t(c,this)}:function(){if(t===null)t=A.dh(b)
return new t(this,null)}}function staticTearOffGetter(a){var t=null
return function(){if(t===null)t=A.dh(a).prototype
return t}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var t=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var s=staticTearOffGetter(t)
a[b]=s}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var t=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var s=instanceTearOffGetter(c,t)
a[b]=s}function setOrUpdateInterceptorsByTag(a){var t=v.interceptorsByTag
if(!t){v.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=v.leafTags
if(!t){v.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=v.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var t=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},s=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
dl(a,b,c,d){return{i:a,p:b,e:c,x:d}},
di(a){var t,s,r,q,p,o="_$dart_js",n=a[v.dispatchPropertyName]
if(n==null)if($.dj==null){A.hv()
n=a[v.dispatchPropertyName]}if(n!=null){t=n.p
if(!1===t)return n.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return n.i
if(n.e===s)throw A.d(A.dL("Return interceptor for "+A.l(t(a,n))))}r=a.constructor
if(r==null)q=null
else{p=$.cD
if(p==null)p=$.cD=A.cP(o)
q=r[p]}if(q!=null)return q
q=A.hz(a)
if(q!=null)return q
if(typeof a=="function")return B.K
t=Object.getPrototypeOf(a)
if(t==null)return B.q
if(t===Object.prototype)return B.q
if(typeof r=="function"){p=$.cD
if(p==null)p=$.cD=A.cP(o)
Object.defineProperty(r,p,{value:B.j,enumerable:false,writable:true,configurable:true})
return B.j}return B.j},
eR(a,b){if(a>4294967295)throw A.d(A.dD(a,0,4294967295,"length",null))
return J.eT(new Array(a),b)},
eS(a,b){return A.o(new Array(a),b.i("h<0>"))},
eT(a,b){var t=A.o(a,b.i("h<0>"))
t.$flags=1
return t},
dy(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
eU(a,b){var t,s
for(t=a.length;b<t;){s=a.charCodeAt(b)
if(s!==32&&s!==13&&!J.dy(s))break;++b}return b},
eV(a,b){var t,s,r
for(t=a.length;b>0;b=s){s=b-1
if(!(s<t))return A.a(a,s)
r=a.charCodeAt(s)
if(r!==32&&r!==13&&!J.dy(r))break}return b},
X(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.at.prototype
return J.bm.prototype}if(typeof a=="string")return J.a1.prototype
if(a==null)return J.au.prototype
if(typeof a=="boolean")return J.bl.prototype
if(Array.isArray(a))return J.h.prototype
if(typeof a!="object"){if(typeof a=="function")return J.J.prototype
if(typeof a=="symbol")return J.ax.prototype
if(typeof a=="bigint")return J.av.prototype
return a}if(a instanceof A.k)return a
return J.di(a)},
ec(a){if(typeof a=="string")return J.a1.prototype
if(a==null)return a
if(Array.isArray(a))return J.h.prototype
if(typeof a!="object"){if(typeof a=="function")return J.J.prototype
if(typeof a=="symbol")return J.ax.prototype
if(typeof a=="bigint")return J.av.prototype
return a}if(a instanceof A.k)return a
return J.di(a)},
ho(a){if(a==null)return a
if(Array.isArray(a))return J.h.prototype
if(typeof a!="object"){if(typeof a=="function")return J.J.prototype
if(typeof a=="symbol")return J.ax.prototype
if(typeof a=="bigint")return J.av.prototype
return a}if(a instanceof A.k)return a
return J.di(a)},
hp(a){if(typeof a=="number")return J.a0.prototype
if(a==null)return a
if(!(a instanceof A.k))return J.ab.prototype
return a},
ai(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.X(a).I(a,b)},
C(a){return J.X(a).gm(a)},
aj(a){return J.ho(a).gq(a)},
cX(a){return J.ec(a).gp(a)},
ey(a){return J.X(a).gt(a)},
dp(a){return J.hp(a).bh(a)},
b7(a){return J.X(a).h(a)},
bj:function bj(){},
bl:function bl(){},
au:function au(){},
aw:function aw(){},
L:function L(){},
bA:function bA(){},
ab:function ab(){},
J:function J(){},
av:function av(){},
ax:function ax(){},
h:function h(a){this.$ti=a},
bk:function bk(){},
c3:function c3(a){this.$ti=a},
b8:function b8(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
a0:function a0(){},
at:function at(){},
bm:function bm(){},
a1:function a1(){}},A={d_:function d_(){},
eW(a){return new A.az("Field '"+a+"' has not been initialized.")},
M(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
d6(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
e8(a,b,c){return a},
dk(a){var t,s
for(t=$.w.length,s=0;s<t;++s)if(a===$.w[s])return!0
return!1},
dH(a,b,c){var t="takeCount"
A.ez(b,t)
A.dE(b,t)
return new A.an(a,b,c.i("an<0>"))},
eM(a,b,c){return new A.al(a,b,c.i("al<0>"))},
c1(){return new A.aL("No element")},
az:function az(a){this.a=a},
ce:function ce(){},
am:function am(){},
S:function S(){},
a3:function a3(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aM:function aM(a,b,c){this.a=a
this.b=b
this.$ti=c},
an:function an(a,b,c){this.a=a
this.b=b
this.$ti=c},
bH:function bH(a,b,c){this.a=a
this.b=b
this.$ti=c},
ao:function ao(a){this.$ti=a},
bf:function bf(){},
ar:function ar(a,b,c){this.a=a
this.b=b
this.$ti=c},
al:function al(a,b,c){this.a=a
this.b=b
this.$ti=c},
as:function as(a,b){this.a=a
this.b=b
this.c=-1},
ap:function ap(){},
ei(a){var t=A.eh(a)
if(t!=null)return t
return"minified:"+a},
i4(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.p.b(a)},
l(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.b7(a)
return t},
aI(a){var t,s=$.dB
if(s==null)s=$.dB=Symbol("identityHashCode")
t=a[s]
if(t==null){t=Math.random()*0x3fffffff|0
a[s]=t}return t},
bB(a){var t,s,r,q
if(a instanceof A.k)return A.v(A.b6(a),null)
t=J.X(a)
if(t===B.I||t===B.L||u.A.b(a)){s=B.k(a)
if(s!=="Object"&&s!=="")return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&q!=="Object"&&q!=="")return q}}return A.v(A.b6(a),null)},
dC(a){var t,s,r
if(a==null||typeof a=="number"||A.dd(a))return J.b7(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.R)return a.h(0)
if(a instanceof A.ad)return a.az(!0)
t=$.ew()
for(s=0;s<1;++s){r=t[s].bj(a)
if(r!=null)return r}return"Instance of '"+A.bB(a)+"'"},
a(a,b){if(a==null)J.cX(a)
throw A.d(A.hl(a,b))},
hl(a,b){var t,s="index",r=null
if(!A.e1(b))return new A.H(!0,b,s,r)
t=J.cX(a)
if(b<0||b>=t)return A.cY(b,t,a,r,s)
return new A.a9(r,r,!0,b,s,"Value not in range")},
dg(a){return new A.H(!0,a,null,null)},
d(a){return A.q(a,new Error())},
q(a,b){var t
if(a==null)a=new A.aO()
b.dartException=a
t=A.hF
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:t})
b.name=""}else b.toString=t
return b},
hF(){return J.b7(this.dartException)},
P(a,b){throw A.q(a,b==null?new Error():b)},
bV(a,b,c){var t
if(b==null)b=0
if(c==null)c=0
t=Error()
A.P(A.fK(a,b,c),t)},
fK(a,b,c){var t,s,r,q,p,o,n,m,l
if(typeof b=="string")t=b
else{s="[]=;add;removeWhere;retainWhere;removeRange;setRange;setInt8;setInt16;setInt32;setUint8;setUint16;setUint32;setFloat32;setFloat64".split(";")
r=s.length
q=b
if(q>r){c=q/r|0
q%=r}t=s[q]}p=typeof c=="string"?c:"modify;remove from;add to".split(";")[c]
o=u.j.b(a)?"list":"ByteData"
n=a.$flags|0
m="a "
if((n&4)!==0)l="constant "
else if((n&2)!==0){l="unmodifiable "
m="an "}else l=(n&1)!==0?"fixed-length ":""
return new A.aP("'"+t+"': Cannot "+p+" "+m+l+o)},
bU(a){throw A.d(A.a_(a))},
F(a){var t,s,r,q,p,o
a=A.hC(a.replace(String({}),"$receiver$"))
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=A.o([],u.s)
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new A.cs(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),s,r,q,p,o)},
ct(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
dK(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
d0(a,b){var t=b==null,s=t?null:b.method
return new A.bn(a,s,t?null:b.receiver)},
hG(a){if(a==null)return new A.c7(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.Z(a,a.dartException)
return A.he(a)},
Z(a,b){if(u.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
he(a){var t,s,r,q,p,o,n,m,l,k,j,i,h
if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((B.a.aZ(s,16)&8191)===10)switch(r){case 438:return A.Z(a,A.d0(A.l(t)+" (Error "+r+")",null))
case 445:case 5007:A.l(t)
return A.Z(a,new A.aH())}}if(a instanceof TypeError){q=$.em()
p=$.en()
o=$.eo()
n=$.ep()
m=$.es()
l=$.et()
k=$.er()
$.eq()
j=$.ev()
i=$.eu()
h=q.D(t)
if(h!=null)return A.Z(a,A.d0(t,h))
else{h=p.D(t)
if(h!=null){h.method="call"
return A.Z(a,A.d0(t,h))}else if(o.D(t)!=null||n.D(t)!=null||m.D(t)!=null||l.D(t)!=null||k.D(t)!=null||n.D(t)!=null||j.D(t)!=null||i.D(t)!=null)return A.Z(a,new A.aH())}return A.Z(a,new A.bJ(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new A.aK()
t=function(b){try{return String(b)}catch(g){}return null}(a)
return A.Z(a,new A.H(!1,null,null,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new A.aK()
return a},
hs(a){var t
if(a==null)return new A.bR(a)
t=a.$cachedTrace
if(t!=null)return t
t=new A.bR(a)
if(typeof a==="object")a.$cachedTrace=t
return t},
dm(a){if(a==null)return J.C(a)
if(typeof a=="object")return A.aI(a)
return J.C(a)},
hi(a){if(typeof a=="number")return B.J.gm(a)
if(a instanceof A.bS)return A.aI(a)
if(a instanceof A.ad)return a.gm(a)
return A.dm(a)},
eb(a,b){var t,s,r,q=a.length
for(t=0;t<q;t=r){s=t+1
r=s+1
b.T(0,a[t],a[s])}return b},
hn(a,b){var t,s=a.length
for(t=0;t<s;++t)b.v(0,a[t])
return b},
fS(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(new A.cB("Unsupported number of arguments for wrapped closure"))},
bT(a,b){var t=a.$identity
if(!!t)return t
t=A.hj(a,b)
a.$identity=t
return t},
hj(a,b){var t
switch(b){case 0:t=a.$0
break
case 1:t=a.$1
break
case 2:t=a.$2
break
case 3:t=a.$3
break
case 4:t=a.$4
break
default:t=null}if(t!=null)return t.bind(a)
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.fS)},
eG(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.cg().constructor.prototype):Object.create(new A.ak(null,null).constructor.prototype)
t.$initialize=t.constructor
s=i?function static_tear_off(){this.$initialize()}:function tear_off(a2,a3){this.$initialize(a2,a3)}
t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=A.du(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.eC(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.du(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
eC(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.eA)}throw A.d("Error in functionType of tearoff")},
eD(a,b,c,d){var t=A.dt
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
du(a,b,c,d){if(c)return A.eF(a,b,d)
return A.eD(b.length,d,a,b)},
eE(a,b,c,d){var t=A.dt,s=A.eB
switch(b?-1:a){case 0:throw A.d(new A.bC("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
eF(a,b,c){var t,s
if($.dr==null)$.dr=A.dq("interceptor")
if($.ds==null)$.ds=A.dq("receiver")
t=b.length
s=A.eE(t,c,a,b)
return s},
dh(a){return A.eG(a)},
eA(a,b){return A.b1(v.typeUniverse,A.b6(a.a),b)},
dt(a){return a.a},
eB(a){return a.b},
dq(a){var t,s,r,q=new A.ak("receiver","interceptor"),p=Object.getOwnPropertyNames(q)
p.$flags=1
t=p
for(p=t.length,s=0;s<p;++s){r=t[s]
if(q[r]===a)return r}throw A.d(A.bW("Field name "+a+" not found.",null))},
cP(a){return v.getIsolateTag(a)},
hD(){return v.G},
hz(a){var t,s,r,q,p,o=$.ed.$1(a),n=$.cN[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.cT[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=$.e5.$2(a,o)
if(r!=null){n=$.cN[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.cT[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=A.cU(t)
$.cN[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.cT[o]=t
return t}if(q==="-"){p=A.cU(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return A.ef(a,t)
if(q==="*")throw A.d(A.dL(o))
if(v.leafTags[o]===true){p=A.cU(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return A.ef(a,t)},
ef(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.dl(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
cU(a){return J.dl(a,!1,null,!!a.$it)},
hB(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return A.cU(t)
else return J.dl(t,c,null,null)},
hv(){if(!0===$.dj)return
$.dj=!0
A.hw()},
hw(){var t,s,r,q,p,o,n,m
$.cN=Object.create(null)
$.cT=Object.create(null)
A.hu()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.eg.$1(p)
if(o!=null){n=A.hB(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
hu(){var t,s,r,q,p,o,n=B.t()
n=A.ag(B.u,A.ag(B.v,A.ag(B.l,A.ag(B.l,A.ag(B.w,A.ag(B.x,A.ag(B.y(B.k),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(Array.isArray(t))for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.ed=new A.cQ(q)
$.e5=new A.cR(p)
$.eg=new A.cS(o)},
ag(a,b){return a(b)||b},
hk(a,b){var t=b.length,s=v.rttc[""+t+";"+a]
if(s==null)return null
if(t===0)return s
if(t===s.length)return s.apply(null,b)
return s(b)},
hC(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
c:function c(a,b){this.a=a
this.b=b},
bd:function bd(){},
aq:function aq(a,b){this.a=a
this.$ti=b},
aJ:function aJ(){},
cs:function cs(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aH:function aH(){},
bn:function bn(a,b,c){this.a=a
this.b=b
this.c=c},
bJ:function bJ(a){this.a=a},
c7:function c7(a){this.a=a},
bR:function bR(a){this.a=a
this.b=null},
R:function R(){},
bX:function bX(){},
bY:function bY(){},
ch:function ch(){},
cg:function cg(){},
ak:function ak(a,b){this.a=a
this.b=b},
bC:function bC(a){this.a=a},
E:function E(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
c4:function c4(a,b){this.a=a
this.b=b
this.c=null},
aB:function aB(a,b){this.a=a
this.$ti=b},
bp:function bp(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
aA:function aA(a,b){this.a=a
this.$ti=b},
bo:function bo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ay:function ay(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cQ:function cQ(a){this.a=a},
cR:function cR(a){this.a=a},
cS:function cS(a){this.a=a},
ad:function ad(){},
bQ:function bQ(){},
a6:function a6(){},
aF:function aF(){},
bq:function bq(){},
a7:function a7(){},
aD:function aD(){},
aE:function aE(){},
br:function br(){},
bs:function bs(){},
bt:function bt(){},
bu:function bu(){},
bv:function bv(){},
bw:function bw(){},
bx:function bx(){},
aG:function aG(){},
by:function by(){},
aR:function aR(){},
aS:function aS(){},
aT:function aT(){},
aU:function aU(){},
d3(a,b){var t=b.c
return t==null?b.c=A.b_(a,"dw",[b.x]):t},
dF(a){var t=a.w
if(t===6||t===7)return A.dF(a.x)
return t===11||t===12},
f0(a){return a.as},
cO(a){return A.cJ(v.typeUniverse,a,!1)},
V(a0,a1,a2,a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a1.w
switch(a){case 5:case 1:case 2:case 3:case 4:return a1
case 6:t=a1.x
s=A.V(a0,t,a2,a3)
if(s===t)return a1
return A.dT(a0,s,!0)
case 7:t=a1.x
s=A.V(a0,t,a2,a3)
if(s===t)return a1
return A.dS(a0,s,!0)
case 8:r=a1.y
q=A.af(a0,r,a2,a3)
if(q===r)return a1
return A.b_(a0,a1.x,q)
case 9:p=a1.x
o=A.V(a0,p,a2,a3)
n=a1.y
m=A.af(a0,n,a2,a3)
if(o===p&&m===n)return a1
return A.d8(a0,o,m)
case 10:l=a1.x
k=a1.y
j=A.af(a0,k,a2,a3)
if(j===k)return a1
return A.dU(a0,l,j)
case 11:i=a1.x
h=A.V(a0,i,a2,a3)
g=a1.y
f=A.hb(a0,g,a2,a3)
if(h===i&&f===g)return a1
return A.dR(a0,h,f)
case 12:e=a1.y
a3+=e.length
d=A.af(a0,e,a2,a3)
p=a1.x
o=A.V(a0,p,a2,a3)
if(d===e&&o===p)return a1
return A.d9(a0,o,d,!0)
case 13:c=a1.x
if(c<a3)return a1
b=a2[c-a3]
if(b==null)return a1
return b
default:throw A.d(A.ba("Attempted to substitute unexpected RTI kind "+a))}},
af(a,b,c,d){var t,s,r,q,p=b.length,o=A.cK(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.V(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
hc(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.cK(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.V(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
hb(a,b,c,d){var t,s=b.a,r=A.af(a,s,c,d),q=b.b,p=A.af(a,q,c,d),o=b.c,n=A.hc(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.bP()
t.a=r
t.b=p
t.c=n
return t},
o(a,b){a[v.arrayRti]=b
return a},
e9(a){var t=a.$S
if(t!=null){if(typeof t=="number")return A.ht(t)
return a.$S()}return null},
hx(a,b){var t
if(A.dF(b))if(a instanceof A.R){t=A.e9(a)
if(t!=null)return t}return A.b6(a)},
b6(a){if(a instanceof A.k)return A.b3(a)
if(Array.isArray(a))return A.da(a)
return A.dc(J.X(a))},
da(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
b3(a){var t=a.$ti
return t!=null?t:A.dc(a)},
dc(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.fR(a,t)},
fR(a,b){var t=a instanceof A.R?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,s=A.fs(v.typeUniverse,t.name)
b.$ccache=s
return s},
ht(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.cJ(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
hr(a){return A.W(A.b3(a))},
df(a){var t
if(a instanceof A.ad)return A.hm(a.$r,a.ar())
t=a instanceof A.R?A.e9(a):null
if(t!=null)return t
if(u.k.b(a))return J.ey(a).a
if(Array.isArray(a))return A.da(a)
return A.b6(a)},
W(a){var t=a.r
return t==null?a.r=new A.bS(a):t},
hm(a,b){var t,s,r=b,q=r.length
if(q===0)return u.F
if(0>=q)return A.a(r,0)
t=A.b1(v.typeUniverse,A.df(r[0]),"@<0>")
for(s=1;s<q;++s){if(!(s<r.length))return A.a(r,s)
t=A.dW(v.typeUniverse,t,A.df(r[s]))}return A.b1(v.typeUniverse,t,a)},
B(a){return A.W(A.cJ(v.typeUniverse,a,!1))},
fQ(a){var t=this
t.b=A.h9(t)
return t.b(a)},
h9(a){var t,s,r,q
if(a===u.K)return A.fY
if(A.Y(a))return A.h1
t=a.w
if(t===6)return A.fO
if(t===1)return A.e3
if(t===7)return A.fT
s=A.h8(a)
if(s!=null)return s
if(t===8){r=a.x
if(a.y.every(A.Y)){a.f="$i"+r
if(r==="f")return A.fW
if(a===u.m)return A.fV
return A.h0}}else if(t===10){q=A.hk(a.x,a.y)
return q==null?A.e3:q}return A.fM},
h8(a){if(a.w===8){if(a===u.S)return A.e1
if(a===u.i||a===u.H)return A.fX
if(a===u.N)return A.h_
if(a===u.y)return A.dd}return null},
fP(a){var t=this,s=A.fL
if(A.Y(t))s=A.fG
else if(t===u.K)s=A.fD
else if(A.ah(t)){s=A.fN
if(t===u.x)s=A.fz
else if(t===u.w)s=A.fF
else if(t===u.u)s=A.fv
else if(t===u.E)s=A.fC
else if(t===u.I)s=A.fx
else if(t===u.B)s=A.fA}else if(t===u.S)s=A.fy
else if(t===u.N)s=A.fE
else if(t===u.y)s=A.fu
else if(t===u.H)s=A.fB
else if(t===u.i)s=A.fw
else if(t===u.m)s=A.O
t.a=s
return t.a(a)},
fM(a){var t=this
if(a==null)return A.ah(t)
return A.hy(v.typeUniverse,A.hx(a,t),t)},
fO(a){if(a==null)return!0
return this.x.b(a)},
h0(a){var t,s=this
if(a==null)return A.ah(s)
t=s.f
if(a instanceof A.k)return!!a[t]
return!!J.X(a)[t]},
fW(a){var t,s=this
if(a==null)return A.ah(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.f
if(a instanceof A.k)return!!a[t]
return!!J.X(a)[t]},
fV(a){var t=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.k)return!!a[t.f]
return!0}if(typeof a=="function")return!0
return!1},
e2(a){if(typeof a=="object"){if(a instanceof A.k)return u.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
fL(a){var t=this
if(a==null){if(A.ah(t))return a}else if(t.b(a))return a
throw A.q(A.dZ(a,t),new Error())},
fN(a){var t=this
if(a==null||t.b(a))return a
throw A.q(A.dZ(a,t),new Error())},
dZ(a,b){return new A.aY("TypeError: "+A.dM(a,A.v(b,null)))},
dM(a,b){return A.bZ(a)+": type '"+A.v(A.df(a),null)+"' is not a subtype of type '"+b+"'"},
y(a,b){return new A.aY("TypeError: "+A.dM(a,b))},
fT(a){var t=this
return t.x.b(a)||A.d3(v.typeUniverse,t).b(a)},
fY(a){return a!=null},
fD(a){if(a!=null)return a
throw A.q(A.y(a,"Object"),new Error())},
h1(a){return!0},
fG(a){return a},
e3(a){return!1},
dd(a){return!0===a||!1===a},
fu(a){if(!0===a)return!0
if(!1===a)return!1
throw A.q(A.y(a,"bool"),new Error())},
fv(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.q(A.y(a,"bool?"),new Error())},
fw(a){if(typeof a=="number")return a
throw A.q(A.y(a,"double"),new Error())},
fx(a){if(typeof a=="number")return a
if(a==null)return a
throw A.q(A.y(a,"double?"),new Error())},
e1(a){return typeof a=="number"&&Math.floor(a)===a},
fy(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.q(A.y(a,"int"),new Error())},
fz(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.q(A.y(a,"int?"),new Error())},
fX(a){return typeof a=="number"},
fB(a){if(typeof a=="number")return a
throw A.q(A.y(a,"num"),new Error())},
fC(a){if(typeof a=="number")return a
if(a==null)return a
throw A.q(A.y(a,"num?"),new Error())},
h_(a){return typeof a=="string"},
fE(a){if(typeof a=="string")return a
throw A.q(A.y(a,"String"),new Error())},
fF(a){if(typeof a=="string")return a
if(a==null)return a
throw A.q(A.y(a,"String?"),new Error())},
O(a){if(A.e2(a))return a
throw A.q(A.y(a,"JSObject"),new Error())},
fA(a){if(a==null)return a
if(A.e2(a))return a
throw A.q(A.y(a,"JSObject?"),new Error())},
e4(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.v(a[r],b)
return t},
h4(a,b){var t,s,r,q,p,o,n=a.x,m=a.y
if(""===n)return"("+A.e4(m,b)+")"
t=m.length
s=n.split(",")
r=s.length-t
for(q="(",p="",o=0;o<t;++o,p=", "){q+=p
if(r===0)q+="{"
q+=A.v(m[o],b)
if(r>=0)q+=" "+s[r];++r}return q+"})"},
e_(a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=", ",a1=null
if(a4!=null){t=a4.length
if(a3==null)a3=A.o([],u.s)
else a1=a3.length
s=a3.length
for(r=t;r>0;--r)a3.push("T"+(s+r))
for(q=u.X,p="<",o="",r=0;r<t;++r,o=a0){n=a3.length
m=n-1-r
if(!(m>=0))return A.a(a3,m)
p=p+o+a3[m]
l=a4[r]
k=l.w
if(!(k===2||k===3||k===4||k===5||l===q))p+=" extends "+A.v(l,a3)}p+=">"}else p=""
q=a2.x
j=a2.y
i=j.a
h=i.length
g=j.b
f=g.length
e=j.c
d=e.length
c=A.v(q,a3)
for(b="",a="",r=0;r<h;++r,a=a0)b+=a+A.v(i[r],a3)
if(f>0){b+=a+"["
for(a="",r=0;r<f;++r,a=a0)b+=a+A.v(g[r],a3)
b+="]"}if(d>0){b+=a+"{"
for(a="",r=0;r<d;r+=3,a=a0){b+=a
if(e[r+1])b+="required "
b+=A.v(e[r+2],a3)+" "+e[r]}b+="}"}if(a1!=null){a3.toString
a3.length=a1}return p+"("+b+") => "+c},
v(a,b){var t,s,r,q,p,o,n,m=a.w
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=a.x
s=A.v(t,b)
r=t.w
return(r===11||r===12?"("+s+")":s)+"?"}if(m===7)return"FutureOr<"+A.v(a.x,b)+">"
if(m===8){q=A.hd(a.x)
p=a.y
return p.length>0?q+("<"+A.e4(p,b)+">"):q}if(m===10)return A.h4(a,b)
if(m===11)return A.e_(a,b,null)
if(m===12)return A.e_(a.x,b,a.y)
if(m===13){o=a.x
n=b.length
o=n-1-o
if(!(o>=0&&o<n))return A.a(b,o)
return b[o]}return"?"},
hd(a){var t=A.eh(a)
if(t!=null)return t
return"minified:"+a},
ft(a,b){var t=a.tR[b]
while(typeof t=="string")t=a.tR[t]
return t},
fs(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.cJ(a,b,!1)
else if(typeof n=="number"){t=n
s=A.b0(a,5,"#")
r=A.cK(t)
for(q=0;q<t;++q)r[q]=s
p=A.b_(a,b,r)
o[b]=p
return p}else return n},
fr(a,b){return A.dX(a.tR,b)},
fq(a,b){return A.dX(a.eT,b)},
cJ(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.dV(a,null,b,!1)
s.set(b,t)
return t},
b1(a,b,c){var t,s,r=b.z
if(r==null)r=b.z=new Map()
t=r.get(c)
if(t!=null)return t
s=A.dV(a,b,c,!0)
r.set(c,s)
return s},
dW(a,b,c){var t,s,r,q=b.Q
if(q==null)q=b.Q=new Map()
t=c.as
s=q.get(t)
if(s!=null)return s
r=A.d8(a,b,c.w===9?c.y:[c])
q.set(t,r)
return r},
dV(a,b,c,d){return A.fh(A.fb(a,b,c,d))},
N(a,b){b.a=A.fP
b.b=A.fQ
return b},
b0(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.z(null,null)
t.w=b
t.as=c
s=A.N(a,t)
a.eC.set(c,s)
return s},
dT(a,b,c){var t,s=b.as+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.fo(a,b,s,c)
a.eC.set(s,t)
return t},
fo(a,b,c,d){var t,s,r
if(d){t=b.w
s=!0
if(!A.Y(b))if(!(b===u.P||b===u.T))if(t!==6)s=t===7&&A.ah(b.x)
if(s)return b
else if(t===1)return u.P}r=new A.z(null,null)
r.w=6
r.x=b
r.as=c
return A.N(a,r)},
dS(a,b,c){var t,s=b.as+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.fm(a,b,s,c)
a.eC.set(s,t)
return t},
fm(a,b,c,d){var t,s
if(d){t=b.w
if(A.Y(b)||b===u.K)return b
else if(t===1)return A.b_(a,"dw",[b])
else if(b===u.P||b===u.T)return u.Q}s=new A.z(null,null)
s.w=7
s.x=b
s.as=c
return A.N(a,s)},
fp(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.z(null,null)
t.w=13
t.x=b
t.as=r
s=A.N(a,t)
a.eC.set(r,s)
return s},
aZ(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].as
return t},
fl(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
t+=s+q+p+a[r+2].as}return t},
b_(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.aZ(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.z(null,null)
s.w=8
s.x=b
s.y=c
if(c.length>0)s.c=c[0]
s.as=q
r=A.N(a,s)
a.eC.set(q,r)
return r},
d8(a,b,c){var t,s,r,q,p,o
if(b.w===9){t=b.x
s=b.y.concat(c)}else{s=c
t=b}r=t.as+(";<"+A.aZ(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.z(null,null)
p.w=9
p.x=t
p.y=s
p.as=r
o=A.N(a,p)
a.eC.set(r,o)
return o},
dU(a,b,c){var t,s,r="+"+(b+"("+A.aZ(c)+")"),q=a.eC.get(r)
if(q!=null)return q
t=new A.z(null,null)
t.w=10
t.x=b
t.y=c
t.as=r
s=A.N(a,t)
a.eC.set(r,s)
return s},
dR(a,b,c){var t,s,r,q,p,o=b.as,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.aZ(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.aZ(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.fl(j)+"}"}s=o+(h+")")
r=a.eC.get(s)
if(r!=null)return r
q=new A.z(null,null)
q.w=11
q.x=b
q.y=c
q.as=s
p=A.N(a,q)
a.eC.set(s,p)
return p},
d9(a,b,c,d){var t,s=b.as+("<"+A.aZ(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.fn(a,b,c,s,d)
a.eC.set(s,t)
return t},
fn(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.cK(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.w===1){s[q]=p;++r}}if(r>0){o=A.V(a,b,s,0)
n=A.af(a,c,s,0)
return A.d9(a,o,n,c!==n)}}m=new A.z(null,null)
m.w=12
m.x=b
m.y=c
m.as=d
return A.N(a,m)},
fb(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
fh(a){var t,s,r,q,p,o,n,m=a.r,l=a.s
for(t=m.length,s=0;s<t;){r=m.charCodeAt(s)
if(r>=48&&r<=57)s=A.fd(s+1,r,m,l)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124)s=A.dP(a,s,m,l,!1)
else if(r===46)s=A.dP(a,s,m,l,!0)
else{++s
switch(r){case 44:break
case 58:l.push(!1)
break
case 33:l.push(!0)
break
case 59:l.push(A.U(a.u,a.e,l.pop()))
break
case 94:l.push(A.fp(a.u,l.pop()))
break
case 35:l.push(A.b0(a.u,5,"#"))
break
case 64:l.push(A.b0(a.u,2,"@"))
break
case 126:l.push(A.b0(a.u,3,"~"))
break
case 60:l.push(a.p)
a.p=l.length
break
case 62:A.ff(a,l)
break
case 38:A.fe(a,l)
break
case 63:q=a.u
l.push(A.dT(q,A.U(q,a.e,l.pop()),a.n))
break
case 47:q=a.u
l.push(A.dS(q,A.U(q,a.e,l.pop()),a.n))
break
case 40:l.push(-3)
l.push(a.p)
a.p=l.length
break
case 41:A.fc(a,l)
break
case 91:l.push(a.p)
a.p=l.length
break
case 93:p=l.splice(a.p)
A.dQ(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-1)
break
case 123:l.push(a.p)
a.p=l.length
break
case 125:p=l.splice(a.p)
A.fi(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-2)
break
case 43:o=m.indexOf("(",s)
l.push(m.substring(s,o))
l.push(-4)
l.push(a.p)
a.p=l.length
s=o+1
break
default:throw"Bad character "+r}}}n=l.pop()
return A.U(a.u,a.e,n)},
fd(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
dP(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36||s===124))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.w===9)p=p.x
o=A.ft(t,p.x)[q]
if(o==null)A.P('No "'+q+'" in "'+A.f0(p)+'"')
d.push(A.b1(t,p,o))}else d.push(q)
return n},
ff(a,b){var t,s=a.u,r=A.dO(a,b),q=b.pop()
if(typeof q=="string")b.push(A.b_(s,q,r))
else{t=A.U(s,a.e,q)
switch(t.w){case 11:b.push(A.d9(s,t,r,a.n))
break
default:b.push(A.d8(s,t,r))
break}}},
fc(a,b){var t,s,r,q=a.u,p=b.pop(),o=null,n=null
if(typeof p=="number")switch(p){case-1:o=b.pop()
break
case-2:n=b.pop()
break
default:b.push(p)
break}else b.push(p)
t=A.dO(a,b)
p=b.pop()
switch(p){case-3:p=b.pop()
if(o==null)o=q.sEA
if(n==null)n=q.sEA
s=A.U(q,a.e,p)
r=new A.bP()
r.a=t
r.b=o
r.c=n
b.push(A.dR(q,s,r))
return
case-4:b.push(A.dU(q,b.pop(),t))
return
default:throw A.d(A.ba("Unexpected state under `()`: "+A.l(p)))}},
fe(a,b){var t=b.pop()
if(0===t){b.push(A.b0(a.u,1,"0&"))
return}if(1===t){b.push(A.b0(a.u,4,"1&"))
return}throw A.d(A.ba("Unexpected extended operation "+A.l(t)))},
dO(a,b){var t=b.splice(a.p)
A.dQ(a.u,a.e,t)
a.p=b.pop()
return t},
U(a,b,c){if(typeof c=="string")return A.b_(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.fg(a,b,c)}else return c},
dQ(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.U(a,b,c[t])},
fi(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.U(a,b,c[t])},
fg(a,b,c){var t,s,r=b.w
if(r===9){if(c===0)return b.x
t=b.y
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.x
r=b.w}else if(c===0)return b
if(r!==8)throw A.d(A.ba("Indexed base must be an interface type"))
t=b.y
if(c<=t.length)return t[c-1]
throw A.d(A.ba("Bad index "+c+" for "+b.h(0)))},
hy(a,b,c){var t,s=b.d
if(s==null)s=b.d=new Map()
t=s.get(c)
if(t==null){t=A.p(a,b,null,c,null)
s.set(c,t)}return t},
p(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(A.Y(d))return!0
t=b.w
if(t===4)return!0
if(A.Y(b))return!1
if(b.w===1)return!0
s=t===13
if(s)if(A.p(a,c[b.x],c,d,e))return!0
r=d.w
q=u.P
if(b===q||b===u.T){if(r===7)return A.p(a,b,c,d.x,e)
return d===q||d===u.T||r===6}if(d===u.K){if(t===7)return A.p(a,b.x,c,d,e)
return t!==6}if(t===7){if(!A.p(a,b.x,c,d,e))return!1
return A.p(a,A.d3(a,b),c,d,e)}if(t===6)return A.p(a,q,c,d,e)&&A.p(a,b.x,c,d,e)
if(r===7){if(A.p(a,b,c,d.x,e))return!0
return A.p(a,b,c,A.d3(a,d),e)}if(r===6)return A.p(a,b,c,q,e)||A.p(a,b,c,d.x,e)
if(s)return!1
q=t!==11
if((!q||t===12)&&d===u.Z)return!0
p=t===10
if(p&&d===u.L)return!0
if(r===12){if(b===u.g)return!0
if(t!==12)return!1
o=b.y
n=d.y
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!A.p(a,k,c,j,e)||!A.p(a,j,e,k,c))return!1}return A.e0(a,b.x,c,d.x,e)}if(r===11){if(b===u.g)return!0
if(q)return!1
return A.e0(a,b,c,d,e)}if(t===8){if(r!==8)return!1
return A.fU(a,b,c,d,e)}if(p&&r===10)return A.fZ(a,b,c,d,e)
return!1},
e0(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!A.p(a2,a3.x,a4,a5.x,a6))return!1
t=a3.y
s=a5.y
r=t.a
q=s.a
p=r.length
o=q.length
if(p>o)return!1
n=o-p
m=t.b
l=s.b
k=m.length
j=l.length
if(p+k<o+j)return!1
for(i=0;i<p;++i){h=r[i]
if(!A.p(a2,q[i],a6,h,a4))return!1}for(i=0;i<n;++i){h=m[i]
if(!A.p(a2,q[p+i],a6,h,a4))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!A.p(a2,l[i],a6,h,a4))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(c=0,b=0;b<d;b+=3){a=f[b]
for(;;){if(c>=e)return!1
a0=g[c]
c+=3
if(a<a0)return!1
a1=g[c-2]
if(a0<a){if(a1)return!1
continue}h=f[b+1]
if(a1&&!h)return!1
h=g[c-1]
if(!A.p(a2,f[b+2],a6,h,a4))return!1
break}}while(c<e){if(g[c+1])return!1
c+=3}return!0},
fU(a,b,c,d,e){var t,s,r,q,p,o=b.x,n=d.x
while(o!==n){t=a.tR[o]
if(t==null)return!1
if(typeof t=="string"){o=t
continue}s=t[n]
if(s==null)return!1
r=s.length
q=r>0?new Array(r):v.typeUniverse.sEA
for(p=0;p<r;++p)q[p]=A.b1(a,b,s[p])
return A.dY(a,q,null,c,d.y,e)}return A.dY(a,b.y,null,c,d.y,e)},
dY(a,b,c,d,e,f){var t,s=b.length
for(t=0;t<s;++t)if(!A.p(a,b[t],d,e[t],f))return!1
return!0},
fZ(a,b,c,d,e){var t,s=b.y,r=d.y,q=s.length
if(q!==r.length)return!1
if(b.x!==d.x)return!1
for(t=0;t<q;++t)if(!A.p(a,s[t],c,r[t],e))return!1
return!0},
ah(a){var t=a.w,s=!0
if(!(a===u.P||a===u.T))if(!A.Y(a))if(t!==6)s=t===7&&A.ah(a.x)
return s},
Y(a){var t=a.w
return t===2||t===3||t===4||t===5||a===u.X},
dX(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
cK(a){return a>0?new Array(a):v.typeUniverse.sEA},
z:function z(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
bP:function bP(){this.c=this.b=this.a=null},
bS:function bS(a){this.a=a},
bO:function bO(){},
aY:function aY(a){this.a=a},
f6(){var t,s,r
if(self.scheduleImmediate!=null)return A.hf()
if(self.MutationObserver!=null&&self.document!=null){t={}
s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(A.bT(new A.cx(t),1)).observe(s,{childList:true})
return new A.cw(t,s,r)}else if(self.setImmediate!=null)return A.hg()
return A.hh()},
f7(a){self.scheduleImmediate(A.bT(new A.cy(a),0))},
f8(a){self.setImmediate(A.bT(new A.cz(a),0))},
f9(a){A.fj(0,a)},
dJ(a,b){var t=B.a.F(a.a,1000)
return A.fk(t,b)},
fj(a,b){var t=new A.aX()
t.aQ(a,b)
return t},
fk(a,b){var t=new A.aX()
t.aR(a,b)
return t},
h3(){var t,s
for(t=$.ae;t!=null;t=$.ae){$.b5=null
s=t.b
$.ae=s
if(s==null)$.b4=null
t.a.$0()}},
ha(){$.de=!0
try{A.h3()}finally{$.b5=null
$.de=!1
if($.ae!=null)$.dn().$1(A.e6())}},
h7(a){var t,s,r,q,p,o=$.ae
if(o==null){t=new A.bM(a)
s=$.b4
if(s==null){$.ae=$.b4=t
if(!$.de)$.dn().$1(A.e6())}else $.b4=s.b=t
$.b5=$.b4
return}r=new A.bM(a)
q=$.b5
if(q==null){r.b=o
$.ae=$.b5=r}else{p=q.b
r.b=p
$.b5=q.b=r
if(p==null)$.b4=r}},
d5(a){return new A.bL(null,a.i("bL<0>"))},
dI(a,b){var t=$.bK
if(t===B.h)return A.dJ(a,b)
return A.dJ(a,t.b_(b,u.D))},
h5(a,b){A.h7(new A.cM(a,b))},
h6(a,b,c,d,e){var t,s=$.bK
if(s===c)return d.$1(e)
$.bK=c
t=s
try{s=d.$1(e)
return s}finally{$.bK=t}},
cx:function cx(a){this.a=a},
cw:function cw(a,b,c){this.a=a
this.b=b
this.c=c},
cy:function cy(a){this.a=a},
cz:function cz(a){this.a=a},
aX:function aX(){this.c=0},
cI:function cI(a,b){this.a=a
this.b=b},
cH:function cH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bN:function bN(){},
bL:function bL(a,b){var _=this
_.b=a
_.c=0
_.e=_.d=null
_.$ti=b},
bM:function bM(a){this.a=a
this.b=null},
cL:function cL(){},
cF:function cF(){},
cG:function cG(a,b,c){this.a=a
this.b=b
this.c=c},
cM:function cM(a,b){this.a=a
this.b=b},
eY(a,b,c){return A.eb(a,new A.E(b.i("@<0>").ap(c).i("E<1,2>")))},
eX(a,b){return new A.E(a.i("@<0>").ap(b).i("E<1,2>"))},
a2(a){return new A.T(a.i("T<0>"))},
dz(a,b){return A.hn(a,new A.T(b.i("T<0>")))},
d7(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
dN(a,b,c){var t=new A.ac(a,b,c.i("ac<0>"))
t.c=a.e
return t},
d2(a){var t,s
if(A.dk(a))return"{...}"
t=new A.bG("")
try{s={}
$.w.push(a)
t.a+="{"
s.a=!0
a.ae(0,new A.c5(s,t))
t.a+="}"}finally{if(0>=$.w.length)return A.a($.w,-1)
$.w.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
T:function T(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cE:function cE(a){this.a=a
this.c=this.b=null},
ac:function ac(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
j:function j(){},
aC:function aC(){},
c5:function c5(a,b){this.a=a
this.b=b},
aa:function aa(){},
aW:function aW(){},
eH(a,b){a=A.q(a,new Error())
a.stack=b.h(0)
throw a},
d1(a,b,c,d){var t,s=c?J.eS(a,d):J.eR(a,d)
if(a!==0&&b!=null)for(t=0;t<s.length;++t)s[t]=b
return s},
eZ(a,b,c){var t,s,r=A.o([],c.i("h<0>"))
for(t=a.length,s=0;s<a.length;a.length===t||(0,A.bU)(a),++s)r.push(a[s])
r.$flags=1
return r},
dA(a,b){var t,s
if(Array.isArray(a))return A.o(a.slice(0),b.i("h<0>"))
t=A.o([],b.i("h<0>"))
for(s=J.aj(a);s.j();)t.push(s.gk())
return t},
dG(a,b,c){var t=J.aj(b)
if(!t.j())return a
if(c.length===0){do a+=A.l(t.gk())
while(t.j())}else{a+=A.l(t.gk())
while(t.j())a=a+c+A.l(t.gk())}return a},
dv(a){return new A.be(1000*a)},
bZ(a){if(typeof a=="number"||A.dd(a)||a==null)return J.b7(a)
if(typeof a=="string")return JSON.stringify(a)
return A.dC(a)},
eI(a,b){A.e8(a,"error",u.K)
A.e8(b,"stackTrace",u.l)
A.eH(a,b)},
ba(a){return new A.b9(a)},
bW(a,b){return new A.H(!1,null,b,a)},
ez(a,b){return a},
f_(a){var t=null
return new A.a9(t,t,!1,t,t,a)},
dD(a,b,c,d,e){return new A.a9(b,c,!0,a,d,"Invalid value")},
dE(a,b){if(a<0)throw A.d(A.dD(a,0,null,b,null))
return a},
cY(a,b,c,d,e){return new A.bi(b,!0,a,e,"Index out of range")},
cv(a){return new A.aP(a)},
dL(a){return new A.bI(a)},
bF(a){return new A.aL(a)},
a_(a){return new A.bc(a)},
c2(a,b){if(a<=0)return new A.ao(b.i("ao<0>"))
if(!b.i("0(b)").b(A.ea()))throw A.d(A.bW("Generator must be supplied or element type must allow integers","generator"))
return new A.aQ(a,A.ea(),b.i("aQ<0>"))},
eQ(a,b,c){var t,s
if(A.dk(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=A.o([],u.s)
$.w.push(a)
try{A.h2(a,t)}finally{if(0>=$.w.length)return A.a($.w,-1)
$.w.pop()}s=A.dG(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
cZ(a,b,c){var t,s
if(A.dk(a))return b+"..."+c
t=new A.bG(b)
$.w.push(a)
try{s=t
s.a=A.dG(s.a,a,", ")}finally{if(0>=$.w.length)return A.a($.w,-1)
$.w.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
fa(a){return a},
h2(a,b){var t,s,r,q,p,o,n,m=a.gq(a),l=0,k=0
for(;;){if(!(l<80||k<3))break
if(!m.j())return
t=A.l(m.gk())
b.push(t)
l+=t.length+2;++k}if(!m.j()){if(k<=5)return
if(0>=b.length)return A.a(b,-1)
s=b.pop()
if(0>=b.length)return A.a(b,-1)
r=b.pop()}else{q=m.gk();++k
if(!m.j()){if(k<=4){b.push(A.l(q))
return}s=A.l(q)
if(0>=b.length)return A.a(b,-1)
r=b.pop()
l+=s.length+2}else{p=m.gk();++k
for(;m.j();q=p,p=o){o=m.gk();++k
if(k>100){for(;;){if(!(l>75&&k>3))break
if(0>=b.length)return A.a(b,-1)
l-=b.pop().length+2;--k}b.push("...")
return}}r=A.l(q)
s=A.l(p)
l+=s.length+r.length+4}}if(k>b.length+2){l+=5
n="..."}else n=null
for(;;){if(!(l>80&&b.length>3))break
if(0>=b.length)return A.a(b,-1)
l-=b.pop().length+2
if(n==null){l+=5
n="..."}}if(n!=null)b.push(n)
b.push(r)
b.push(s)},
c8(a,b,c,d){var t
if(B.c===c){t=B.a.gm(a)
b=J.C(b)
return A.d6(A.M(A.M($.cW(),t),b))}if(B.c===d){t=B.a.gm(a)
b=J.C(b)
c=J.C(c)
return A.d6(A.M(A.M(A.M($.cW(),t),b),c))}t=B.a.gm(a)
b=J.C(b)
c=J.C(c)
d=J.C(d)
d=A.d6(A.M(A.M(A.M(A.M($.cW(),t),b),c),d))
return d},
be:function be(a){this.a=a},
cA:function cA(){},
m:function m(){},
b9:function b9(a){this.a=a},
aO:function aO(){},
H:function H(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a9:function a9(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bi:function bi(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
aP:function aP(a){this.a=a},
bI:function bI(a){this.a=a},
aL:function aL(a){this.a=a},
bc:function bc(a){this.a=a},
bz:function bz(){},
aK:function aK(){},
cB:function cB(a){this.a=a},
n:function n(){},
aQ:function aQ(a,b,c){this.a=a
this.b=b
this.$ti=c},
a4:function a4(a,b,c){this.a=a
this.b=b
this.$ti=c},
u:function u(){},
k:function k(){},
bG:function bG(a){this.a=a},
cC:function cC(){},
I:function I(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
K:function K(a){this.a=a},
a5:function a5(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
a8:function a8(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=0},
f1(a,b,c,d,e,f,g,h){var t,s,r,q=A.dx(),p=h*g
q.width=p
t=d*f
q.height=t
s=A.dx()
s.width=p
s.height=t
t=A.o([],u.v)
for(p=A.c2(d,u.z),p=p.gq(p);p.j();){p.gk()
r=B.a.F(h,32)
t.push(new Uint32Array(r+1))}q=new A.bD(!0,d,h,g,f,c,a,q,s,t)
q.aO(a,b,c,d,!0,f,g,h)
return q},
d4(a){return new A.c(B.a.F(a,32),31-B.a.n(a,32))},
bD:function bD(a,b,c,d,e,f,g,h,i,j){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=!0},
ca:function ca(a){this.a=a},
cb:function cb(a){this.a=a},
cc:function cc(a){this.a=a},
cd:function cd(a){this.a=a},
c9:function c9(){},
c6:function c6(a,b){this.a=a
this.b=b},
f2(a,b,c,d,e,f){var t,s,r,q,p="white",o=null,n=A.f1("black",b,p,d*(8+c),!0,2,2,a*8),m=A.o([],u.J)
for(t=u.U,s=0;s<d;++s){r=A.o([],t)
for(q=0;q<a;++q)r.push(new A.I(s,q," ",p))
m.push(r)}n=new A.aN(d,a,c,b,n,new A.a8(d,a),new A.a8(d,a),new A.a8(d,a),A.d5(u.N),A.d5(u.V),A.d5(u.r),B.dV,m,A.a2(u.o),B.dP)
n.aP("black",a,b,p,o,!0,2,2,c,d,!0,e,f,o,o,o,o)
return n},
bE:function bE(a,b){this.a=a
this.b=b},
aN:function aN(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.a=a
_.b=b
_.c=c
_.f=d
_.w=e
_.x=f
_.y=g
_.z=h
_.as=i
_.at=j
_.ax=k
_.ay=l
_.ch=m
_.CW=n
_.cx=o
_.cy=!1},
cq:function cq(a){this.a=a},
cp:function cp(){},
co:function co(a){this.a=a},
ci:function ci(a){this.a=a},
cj:function cj(a){this.a=a},
ck:function ck(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cl:function cl(a,b,c){this.a=a
this.b=b
this.c=c},
cm:function cm(a,b,c){this.a=a
this.b=b
this.c=c},
cn:function cn(a){this.a=a},
eL(){var t,s,r,q,p,o,n=A.f2(40,$.ex(),0,27,new A.c_(),new A.c0()),m=A.o([],u.G)
for(t=u.q,s=0;s<25;++s){r=A.o([],t)
for(q=s!==0,p=s!==24,o=0;o<40;++o)r.push(!q||!p||o===0||o===39?B.b:B.d)
m.push(r)}t=A.o([],u.O)
for(r=A.c2(25,u.z),r=r.gq(r);r.j();){r.gk()
t.push(new A.bb())}r=u.R
q=new A.bh()
q.b=20
r=new A.bg(B.A,n,m,B.m,t,A.a2(r),A.a2(r),A.a2(r),A.a2(r),q,A.a2(r))
A.dI(A.dv(50),r.gaJ())
n.S()
return r},
hA(){return A.eL()},
bh:function bh(){this.b=this.a=0},
bb:function bb(){var _=this
_.e=_.d=_.c=0
_.f=!1
_.b=_.a=0},
Q:function Q(a,b){this.a=a
this.b=b},
x:function x(a,b){this.a=a
this.b=b},
bg:function bg(a,b,c,d,e,f,g,h,i,j,k){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=-1
_.r=0
_.w=f
_.x=g
_.y=h
_.z=i
_.Q=j
_.at=_.as=0
_.ax=k},
c_:function c_(){},
c0:function c0(){},
eh(a){return v.mangledGlobalNames[a]},
hE(a){throw A.q(new A.az("Field '"+a+"' has been assigned during initialization."),new Error())},
G(){throw A.q(A.eW(""),new Error())},
b2(a){var t
if(typeof a=="function")throw A.d(A.bW("Attempting to rewrap a JS function.",null))
t=function(b,c){return function(){return b(c)}}(A.fH,a)
t[$.cV()]=a
return t},
db(a){var t
if(typeof a=="function")throw A.d(A.bW("Attempting to rewrap a JS function.",null))
t=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.fI,a)
t[$.cV()]=a
return t},
fH(a){return a.$0()},
fI(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
hq(a,b){return a[b]},
fJ(a,b,c){return a[b](c)},
dx(){return v.G.document.createElement("canvas")}},B={}
var w=[A,J,B]
var $={}
A.d_.prototype={}
J.bj.prototype={
I(a,b){return a===b},
gm(a){return A.aI(a)},
h(a){return"Instance of '"+A.bB(a)+"'"},
gt(a){return A.W(A.dc(this))}}
J.bl.prototype={
h(a){return String(a)},
gm(a){return a?519018:218159},
gt(a){return A.W(u.y)},
$ie:1}
J.au.prototype={
I(a,b){return null==b},
h(a){return"null"},
gm(a){return 0},
$ie:1}
J.aw.prototype={$ii:1}
J.L.prototype={
gm(a){return 0},
h(a){return String(a)}}
J.bA.prototype={}
J.ab.prototype={}
J.J.prototype={
h(a){var t=a[$.ej()]
if(t==null)t=a[$.cV()]
if(t==null)return this.aN(a)
return"JavaScript function for "+J.b7(t)}}
J.av.prototype={
gm(a){return 0},
h(a){return String(a)}}
J.ax.prototype={
gm(a){return 0},
h(a){return String(a)}}
J.h.prototype={
b7(a,b){var t,s,r=a.length,q=A.d1(r,"",!1,u.N)
for(t=0;t<a.length;++t){s=A.l(a[t])
if(!(t<r))return A.a(q,t)
q[t]=s}return q.join(b)},
b3(a,b,c){var t,s,r=a.length
for(t=b,s=0;s<r;++s){t=c.$2(t,a[s])
if(a.length!==r)throw A.d(A.a_(a))}return t},
b4(a,b,c){return this.b3(a,b,c,u.z)},
h(a){return A.cZ(a,"[","]")},
gq(a){return new J.b8(a,a.length,A.da(a).i("b8<1>"))},
gm(a){return A.aI(a)},
gp(a){return a.length},
$if:1}
J.bk.prototype={
bj(a){var t,s,r
if(!Array.isArray(a))return null
t=a.$flags|0
if((t&4)!==0)s="const, "
else if((t&2)!==0)s="unmodifiable, "
else s=(t&1)!==0?"fixed, ":""
r="Instance of '"+A.bB(a)+"'"
if(s==="")return r
return r+" ("+s+"length: "+a.length+")"}}
J.c3.prototype={}
J.b8.prototype={
gk(){var t=this.d
return t==null?this.$ti.c.a(t):t},
j(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw A.d(A.bU(r))
t=s.c
if(t>=q){s.d=null
return!1}s.d=r[t]
s.c=t+1
return!0}}
J.a0.prototype={
bh(a){var t
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){t=a<0?Math.ceil(a):Math.floor(a)
return t+0}throw A.d(A.cv(""+a+".toInt()"))},
h(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gm(a){var t,s,r,q,p=a|0
if(a===p)return p&536870911
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259&536870911},
n(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
return t+b},
J(a,b){if((a|0)===a)if(b>=1)return a/b|0
return this.aw(a,b)},
F(a,b){return(a|0)===a?a/b|0:this.aw(a,b)},
aw(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw A.d(A.cv("Result of truncating division is "+A.l(t)+": "+A.l(a)+" ~/ "+b))},
U(a,b){if(b<0)throw A.d(A.dg(b))
return b>31?0:a<<b>>>0},
aY(a,b){return b>31?0:a<<b>>>0},
aM(a,b){var t
if(b<0)throw A.d(A.dg(b))
if(a>0)t=this.a9(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
aZ(a,b){var t
if(a>0)t=this.a9(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
E(a,b){if(0>b)throw A.d(A.dg(b))
return this.a9(a,b)},
a9(a,b){return b>31?0:a>>>b},
gt(a){return A.W(u.H)},
$ir:1}
J.at.prototype={
gt(a){return A.W(u.S)},
$ie:1,
$ib:1}
J.bm.prototype={
gt(a){return A.W(u.i)},
$ie:1}
J.a1.prototype={
bi(a){var t,s,r,q=a.trim(),p=q.length
if(p===0)return q
if(0>=p)return A.a(q,0)
if(q.charCodeAt(0)===133){t=J.eU(q,1)
if(t===p)return""}else t=0
s=p-1
if(!(s>=0))return A.a(q,s)
r=q.charCodeAt(s)===133?J.eV(q,s):p
if(t===0&&r===p)return q
return q.substring(t,r)},
al(a,b){var t,s
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.z)
for(t=a,s="";;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
ba(a,b,c){var t=b-a.length
if(t<=0)return a
return this.al(c,t)+a},
bb(a,b){var t=b-a.length
if(t<=0)return a
return a+this.al(" ",t)},
h(a){return a},
gm(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=s+a.charCodeAt(r)&536870911
s=s+((s&524287)<<10)&536870911
s^=s>>6}s=s+((s&67108863)<<3)&536870911
s^=s>>11
return s+((s&16383)<<15)&536870911},
gt(a){return A.W(u.N)},
gp(a){return a.length},
$ie:1,
$iA:1}
A.az.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.ce.prototype={}
A.am.prototype={}
A.S.prototype={
gq(a){var t=this
return new A.a3(t,t.gp(t),A.b3(t).i("a3<S.E>"))}}
A.a3.prototype={
gk(){var t=this.d
return t==null?this.$ti.c.a(t):t},
j(){var t,s=this,r=s.a,q=J.ec(r),p=q.gp(r)
if(s.b!==p)throw A.d(A.a_(r))
t=s.c
if(t>=p){s.d=null
return!1}s.d=q.ab(r,t);++s.c
return!0}}
A.aM.prototype={
gq(a){var t=this.a
return new A.bH(A.dN(t,t.r,t.$ti.c),this.b,A.b3(this).i("bH<1>"))}}
A.an.prototype={
gp(a){var t=this.a.a,s=this.b
if(t>s)return s
return t}}
A.bH.prototype={
j(){if(--this.b>=0)return this.a.j()
this.b=-1
return!1},
gk(){var t,s
if(this.b<0){this.$ti.c.a(null)
return null}t=this.a
s=t.d
return s==null?t.$ti.c.a(s):s}}
A.ao.prototype={
gq(a){return B.r},
gp(a){return 0}}
A.bf.prototype={
j(){return!1},
gk(){throw A.d(A.c1())}}
A.ar.prototype={
gp(a){return J.cX(this.a)},
gq(a){return new A.as(J.aj(this.a),this.b)}}
A.al.prototype={}
A.as.prototype={
j(){if(++this.c>=0&&this.a.j())return!0
this.c=-2
return!1},
gk(){var t=this.c
return t>=0?new A.c(this.b+t,this.a.gk()):A.P(A.c1())}}
A.ap.prototype={}
A.c.prototype={$r:"+(1,2)",$s:1}
A.bd.prototype={
h(a){return A.d2(this)}}
A.aq.prototype={
W(){var t=this,s=t.$map
if(s==null){s=new A.ay(t.$ti.i("ay<1,2>"))
A.eb(t.a,s)
t.$map=s}return s},
R(a){return this.W().R(a)},
u(a,b){return this.W().u(0,b)},
ae(a,b){this.W().ae(0,b)},
gp(a){return this.W().a}}
A.aJ.prototype={}
A.cs.prototype={
D(a){var t,s,r=this,q=new RegExp(r.a).exec(a)
if(q==null)return null
t=Object.create(null)
s=r.b
if(s!==-1)t.arguments=q[s+1]
s=r.c
if(s!==-1)t.argumentsExpr=q[s+1]
s=r.d
if(s!==-1)t.expr=q[s+1]
s=r.e
if(s!==-1)t.method=q[s+1]
s=r.f
if(s!==-1)t.receiver=q[s+1]
return t}}
A.aH.prototype={
h(a){return"Null check operator used on a null value"}}
A.bn.prototype={
h(a){var t,s=this,r="NoSuchMethodError: method not found: '",q=s.b
if(q==null)return"NoSuchMethodError: "+s.a
t=s.c
if(t==null)return r+q+"' ("+s.a+")"
return r+q+"' on '"+t+"' ("+s.a+")"}}
A.bJ.prototype={
h(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
A.c7.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.bR.prototype={
h(a){var t,s=this.b
if(s!=null)return s
s=this.a
t=s!==null&&typeof s==="object"?s.stack:null
return this.b=t==null?"":t}}
A.R.prototype={
h(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.ei(s==null?"unknown":s)+"'"},
gbk(){return this},
$C:"$1",
$R:1,
$D:null}
A.bX.prototype={$C:"$0",$R:0}
A.bY.prototype={$C:"$2",$R:2}
A.ch.prototype={}
A.cg.prototype={
h(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.ei(t)+"'"}}
A.ak.prototype={
I(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.ak))return!1
return this.$_target===b.$_target&&this.a===b.a},
gm(a){return(A.dm(this.a)^A.aI(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.bB(this.a)+"'")}}
A.bC.prototype={
h(a){return"RuntimeError: "+this.a}}
A.E.prototype={
gp(a){return this.a},
R(a){var t,s
if(typeof a=="string"){t=this.b
if(t==null)return!1
return t[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){s=this.c
if(s==null)return!1
return s[a]!=null}else return this.b5(a)},
b5(a){var t=this.d
if(t==null)return!1
return this.Z(this.aq(t,a),a)>=0},
u(a,b){var t,s,r,q,p=null
if(typeof b=="string"){t=this.b
if(t==null)return p
s=t[b]
r=s==null?p:s.b
return r}else if(typeof b=="number"&&(b&0x3fffffff)===b){q=this.c
if(q==null)return p
s=q[b]
r=s==null?p:s.b
return r}else return this.b6(b)},
b6(a){var t,s,r=this.d
if(r==null)return null
t=this.aq(r,a)
s=this.Z(t,a)
if(s<0)return null
return t[s].b},
T(a,b,c){var t,s,r,q,p,o,n=this
if(typeof b=="string"){t=n.b
n.an(t==null?n.b=n.a7():t,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){s=n.c
n.an(s==null?n.c=n.a7():s,b,c)}else{r=n.d
if(r==null)r=n.d=n.a7()
q=n.af(b)
p=r[q]
if(p==null)r[q]=[n.a0(b,c)]
else{o=n.Z(p,b)
if(o>=0)p[o].b=c
else p.push(n.a0(b,c))}}},
ae(a,b){var t=this,s=t.e,r=t.r
while(s!=null){b.$2(s.a,s.b)
if(r!==t.r)throw A.d(A.a_(t))
s=s.c}},
an(a,b,c){var t=a[b]
if(t==null)a[b]=this.a0(b,c)
else t.b=c},
a0(a,b){var t=this,s=new A.c4(a,b)
if(t.e==null)t.e=t.f=s
else t.f=t.f.c=s;++t.a
t.r=t.r+1&1073741823
return s},
af(a){return J.C(a)&1073741823},
aq(a,b){return a[this.af(b)]},
Z(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.ai(a[s].a,b))return s
return-1},
h(a){return A.d2(this)},
a7(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t}}
A.c4.prototype={}
A.aB.prototype={
gp(a){return this.a.a},
gq(a){var t=this.a
return new A.bp(t,t.r,t.e)}}
A.bp.prototype={
gk(){return this.d},
j(){var t,s=this,r=s.a
if(s.b!==r.r)throw A.d(A.a_(r))
t=s.c
if(t==null){s.d=null
return!1}else{s.d=t.a
s.c=t.c
return!0}}}
A.aA.prototype={
gp(a){return this.a.a},
gq(a){var t=this.a
return new A.bo(t,t.r,t.e,this.$ti.i("bo<1,2>"))}}
A.bo.prototype={
gk(){var t=this.d
t.toString
return t},
j(){var t,s=this,r=s.a
if(s.b!==r.r)throw A.d(A.a_(r))
t=s.c
if(t==null){s.d=null
return!1}else{s.d=new A.a4(t.a,t.b,s.$ti.i("a4<1,2>"))
s.c=t.c
return!0}}}
A.ay.prototype={
af(a){return A.hi(a)&1073741823},
Z(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.ai(a[s].a,b))return s
return-1}}
A.cQ.prototype={
$1(a){return this.a(a)},
$S:6}
A.cR.prototype={
$2(a,b){return this.a(a,b)},
$S:7}
A.cS.prototype={
$1(a){return this.a(a)},
$S:8}
A.ad.prototype={
h(a){return this.az(!1)},
az(a){var t,s,r,q,p,o=this.aV(),n=this.ar(),m=(a?"Record ":"")+"("
for(t=o.length,s="",r=0;r<t;++r,s=", "){m+=s
q=o[r]
if(typeof q=="string")m=m+q+": "
if(!(r<n.length))return A.a(n,r)
p=n[r]
m=a?m+A.dC(p):m+A.l(p)}m+=")"
return m.charCodeAt(0)==0?m:m},
aV(){var t,s=this.$s
while($.aV.length<=s)$.aV.push(null)
t=$.aV[s]
if(t==null){t=this.aT()
if(!(s<$.aV.length))return A.a($.aV,s)
$.aV[s]=t}return t},
aT(){var t,s,r,q,p,o=this.$r,n=o.indexOf("("),m=o.substring(1,n),l=o.substring(n),k=l==="()"?0:l.replace(/[^,]/g,"").length+1,j=A.o(new Array(k),u.f)
for(t=0;t<k;++t)j[t]=t
if(m!==""){s=m.split(",")
t=s.length
for(r=j.length,q=k;t>0;){--q;--t
p=s[t]
if(!(q>=0&&q<r))return A.a(j,q)
j[q]=p}}j=A.eZ(j,!1,u.K)
j.$flags=3
return j}}
A.bQ.prototype={
ar(){return[this.a,this.b]},
I(a,b){if(b==null)return!1
return b instanceof A.bQ&&this.$s===b.$s&&J.ai(this.a,b.a)&&J.ai(this.b,b.b)},
gm(a){return A.c8(this.$s,this.a,this.b,B.c)}}
A.a6.prototype={
gt(a){return B.dX},
$ie:1}
A.aF.prototype={}
A.bq.prototype={
gt(a){return B.dY},
$ie:1}
A.a7.prototype={
gp(a){return a.length},
$it:1}
A.aD.prototype={$if:1}
A.aE.prototype={$if:1}
A.br.prototype={
gt(a){return B.dZ},
$ie:1}
A.bs.prototype={
gt(a){return B.e_},
$ie:1}
A.bt.prototype={
gt(a){return B.e0},
$ie:1}
A.bu.prototype={
gt(a){return B.e1},
$ie:1}
A.bv.prototype={
gt(a){return B.e2},
$ie:1}
A.bw.prototype={
gt(a){return B.e4},
$ie:1}
A.bx.prototype={
gt(a){return B.e5},
$ie:1,
$icu:1}
A.aG.prototype={
gt(a){return B.e6},
gp(a){return a.length},
$ie:1}
A.by.prototype={
gt(a){return B.e7},
gp(a){return a.length},
$ie:1}
A.aR.prototype={}
A.aS.prototype={}
A.aT.prototype={}
A.aU.prototype={}
A.z.prototype={
i(a){return A.b1(v.typeUniverse,this,a)},
ap(a){return A.dW(v.typeUniverse,this,a)}}
A.bP.prototype={}
A.bS.prototype={
h(a){return A.v(this.a,null)}}
A.bO.prototype={
h(a){return this.a}}
A.aY.prototype={}
A.cx.prototype={
$1(a){var t=this.a,s=t.a
t.a=null
s.$0()},
$S:9}
A.cw.prototype={
$1(a){var t,s
this.a.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:10}
A.cy.prototype={
$0(){this.a.$0()},
$S:0}
A.cz.prototype={
$0(){this.a.$0()},
$S:0}
A.aX.prototype={
aQ(a,b){if(self.setTimeout!=null)self.setTimeout(A.bT(new A.cI(this,b),0),a)
else throw A.d(A.cv("`setTimeout()` not found."))},
aR(a,b){if(self.setTimeout!=null)self.setInterval(A.bT(new A.cH(this,a,Date.now(),b),0),a)
else throw A.d(A.cv("Periodic timer."))},
$icr:1}
A.cI.prototype={
$0(){this.a.c=1
this.b.$0()},
$S:1}
A.cH.prototype={
$0(){var t,s=this,r=s.a,q=r.c+1,p=s.b
if(p>0){t=Date.now()-s.c
if(t>(q+1)*p)q=B.a.J(t,p)}r.c=q
s.d.$1(r)},
$S:0}
A.bN.prototype={}
A.bL.prototype={}
A.bM.prototype={}
A.cL.prototype={}
A.cF.prototype={
bf(a,b){var t,s,r
try{if(B.h===$.bK){a.$1(b)
return}A.h6(null,null,this,a,b)}catch(r){t=A.hG(r)
s=A.hs(r)
A.h5(t,s)}},
bg(a,b){return this.bf(a,b,u.z)},
b_(a,b){return new A.cG(this,a,b)}}
A.cG.prototype={
$1(a){return this.a.bg(this.b,a)},
$S(){return this.c.i("~(0)")}}
A.cM.prototype={
$0(){A.eI(this.a,this.b)},
$S:1}
A.T.prototype={
gq(a){var t=this,s=new A.ac(t,t.r,t.$ti.i("ac<1>"))
s.c=t.e
return s},
gp(a){return this.a},
aE(a,b){var t=this.aU(b)
return t},
aU(a){var t=this.d
if(t==null)return!1
return this.a5(t[a.gm(0)&1073741823],a)>=0},
gac(a){var t=this.e
if(t==null)throw A.d(A.bF("No elements"))
return t.a},
v(a,b){var t,s,r=this
if(typeof b=="string"&&b!=="__proto__"){t=r.b
return r.ao(t==null?r.b=A.d7():t,b)}else if(typeof b=="number"&&(b&1073741823)===b){s=r.c
return r.ao(s==null?r.c=A.d7():s,b)}else return r.aS(b)},
aS(a){var t,s,r=this,q=r.d
if(q==null)q=r.d=A.d7()
t=J.C(a)&1073741823
s=q[t]
if(s==null)q[t]=[r.a8(a)]
else{if(r.a5(s,a)>=0)return!1
s.push(r.a8(a))}return!0},
H(a,b){var t=this
if(typeof b=="string"&&b!=="__proto__")return t.av(t.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return t.av(t.c,b)
else return t.aX(b)},
aX(a){var t,s,r,q,p=this.d
if(p==null)return!1
t=J.C(a)&1073741823
s=p[t]
r=this.a5(s,a)
if(r<0)return!1
q=s.splice(r,1)[0]
if(0===s.length)delete p[t]
this.aA(q)
return!0},
G(a){var t=this
if(t.a>0){t.b=t.c=t.d=t.e=t.f=null
t.a=0
t.a6()}},
ao(a,b){if(a[b]!=null)return!1
a[b]=this.a8(b)
return!0},
av(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.aA(t)
delete a[b]
return!0},
a6(){this.r=this.r+1&1073741823},
a8(a){var t,s=this,r=new A.cE(a)
if(s.e==null)s.e=s.f=r
else{t=s.f
t.toString
r.c=t
s.f=t.b=r}++s.a
s.a6()
return r},
aA(a){var t=this,s=a.c,r=a.b
if(s==null)t.e=r
else s.b=r
if(r==null)t.f=s
else r.c=s;--t.a
t.a6()},
a5(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.ai(a[s].a,b))return s
return-1}}
A.cE.prototype={}
A.ac.prototype={
gk(){var t=this.d
return t==null?this.$ti.c.a(t):t},
j(){var t=this,s=t.c,r=t.a
if(t.b!==r.r)throw A.d(A.a_(r))
else if(s==null){t.d=null
return!1}else{t.d=s.a
t.c=s.b
return!0}}}
A.j.prototype={
gq(a){return new A.a3(a,a.length,A.b6(a).i("a3<j.E>"))},
ab(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
h(a){return A.cZ(a,"[","]")}}
A.aC.prototype={
gp(a){return this.a},
h(a){return A.d2(this)}}
A.c5.prototype={
$2(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=A.l(a)
s.a=(s.a+=t)+": "
t=A.l(b)
s.a+=t},
$S:11}
A.aa.prototype={
aB(a,b){var t
for(t=J.aj(b);t.j();)this.v(0,t.gk())},
bd(a){var t
for(t=J.aj(a);t.j();)this.H(0,t.gk())},
h(a){return A.cZ(this,"{","}")},
$icf:1}
A.aW.prototype={}
A.be.prototype={
I(a,b){if(b==null)return!1
return b instanceof A.be&&this.a===b.a},
gm(a){return B.a.gm(this.a)},
h(a){var t,s,r,q,p=this.a,o=B.a.F(p,36e8)
p%=36e8
t=B.a.F(p,6e7)
p%=6e7
s=t<10?"0":""
r=B.a.F(p,1e6)
q=r<10?"0":""
return""+o+":"+s+t+":"+q+r+"."+B.i.ba(B.a.h(p%1e6),6,"0")}}
A.cA.prototype={
h(a){return this.V()}}
A.m.prototype={}
A.b9.prototype={
h(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.bZ(t)
return"Assertion failed"}}
A.aO.prototype={}
A.H.prototype={
ga4(){return"Invalid argument"+(!this.a?"(s)":"")},
ga3(){return""},
h(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+q,o=t.ga4()+r+p
if(!t.a)return o
return o+t.ga3()+": "+A.bZ(t.gag())},
gag(){return this.b}}
A.a9.prototype={
gag(){return this.b},
ga4(){return"RangeError"},
ga3(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+A.l(r):""
else if(r==null)t=": Not greater than or equal to "+A.l(s)
else if(r>s)t=": Not in inclusive range "+A.l(s)+".."+A.l(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+A.l(s)
return t}}
A.bi.prototype={
gag(){return this.b},
ga4(){return"RangeError"},
ga3(){if(this.b<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gp(a){return this.f}}
A.aP.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.bI.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.aL.prototype={
h(a){return"Bad state: "+this.a}}
A.bc.prototype={
h(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.bZ(t)+"."}}
A.bz.prototype={
h(a){return"Out of Memory"},
$im:1}
A.aK.prototype={
h(a){return"Stack Overflow"},
$im:1}
A.cB.prototype={
h(a){return"Exception: "+this.a}}
A.n.prototype={
gp(a){var t,s=this.gq(this)
for(t=0;s.j();)++t
return t},
gac(a){var t=this.gq(this)
if(!t.j())throw A.d(A.c1())
return t.gk()},
ab(a,b){var t,s
A.dE(b,"index")
t=this.gq(this)
for(s=b;t.j();){if(s===0)return t.gk();--s}throw A.d(A.cY(b,b-s,this,null,"index"))},
h(a){return A.eQ(this,"(",")")}}
A.aQ.prototype={
ab(a,b){var t=this.a
if(0>b||b>=t)A.P(A.cY(b,t,this,null,"index"))
return this.b.$1(b)},
gp(a){return this.a}}
A.a4.prototype={
h(a){return"MapEntry("+A.l(this.a)+": "+A.l(this.b)+")"}}
A.u.prototype={
gm(a){return A.k.prototype.gm.call(this,0)},
h(a){return"null"}}
A.k.prototype={$ik:1,
I(a,b){return this===b},
gm(a){return A.aI(this)},
h(a){return"Instance of '"+A.bB(this)+"'"},
gt(a){return A.hr(this)},
toString(){return this.h(this)}}
A.bG.prototype={
gp(a){return this.a.length},
h(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
A.cC.prototype={
a_(a){if(a<=0||a>4294967296)throw A.d(A.f_("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
A.I.prototype={
gm(a){var t=this.a,s=this.b
return A.c8(new A.c(t,s).$s,t,s,B.c)},
I(a,b){var t,s,r,q
if(b==null)return!1
if(b instanceof A.I){t=b.a
s=b.b
r=this.a
q=this.b
q=A.c8(new A.c(t,s).$s,t,s,B.c)===A.c8(new A.c(r,q).$s,r,q,B.c)
t=q}else t=!1
return t},
h(a){var t=this
return"("+t.a+" "+t.b+") => '"+t.c+"' "+t.d}}
A.K.prototype={}
A.a5.prototype={
h(a){var t=this
return"               row: "+t.a+"\n            column: "+t.b+"\n         character: '"+t.c+"'\n    characterColor: "+t.d+"\n\n          pixelRow: "+t.e+"\n       pixelColumn: "+t.f+"\n         pixelIsOn: "+t.r+"\n    "}}
A.a8.prototype={
sY(a){var t,s,r,q=this
if(a<0){t=q.d=a
for(s=q.b,r=q.a;t<0;){t+=s
q.d=t
q.c=B.a.n(q.c-1,r)}}else{t=q.b
q.c=B.a.n(q.c+B.a.J(a,t),q.a)
q.d=B.a.n(a,t)}},
gB(){return this.c*this.b+this.d},
sB(a){var t=this,s=t.b
t.c=B.a.n(B.a.J(a,s),t.a)
t.d=B.a.n(a,s)}}
A.bD.prototype={
aO(a,b,c,d,e,f,g,h){var t,s=this,r=v.G.document
r.onfocus=A.b2(new A.ca(s))
r.onblur=A.b2(new A.cb(s))
r=s.w
r.tabIndex=-1
r.style.display="block"
r.style.outline="none"
t=r.getContext("2d")
if(t==null)t=A.O(t)
t.imageSmoothingEnabled=!1
r.onfocus=A.b2(new A.cc(s))
r.onblur=A.b2(new A.cd(s))
b.style.display="flex"
b.style.alignItems="flex-start"
b.style.padding="0"
b.style.margin="0"
b.style.width="fit-content"
b.style.height="fit-content"
b.style.background="gray"
b.appendChild(r)
s.G(0)},
X(a,b){return new A.c(B.a.n(a,this.b),B.a.n(b,this.c))},
a1(){var t=this.x,s=t.getContext("2d")
if(s==null)s=A.O(s)
s.save()
s.beginPath()
s.clearRect(0,0,t.width,t.height)
s.restore()
return s},
a2(){var t=this.w.getContext("2d")
if(t==null)t=A.O(t)
t.save()
t.beginPath()
t.drawImage(this.x,0,0)
t.restore()
return t},
K(a,b,c,d){var t,s,r,q,p,o,n=this,m=a<0||a>=n.b||b<0||b>=n.c
if(m)return
t=n.X(a,b)
a=t.a
b=t.b
s=A.d4(b)
r=s.a
q=B.a.U(1,s.b)
m=n.y
if(!(a>=0&&a<m.length))return A.a(m,a)
m=m[a]
if(!(r>=0&&r<m.length))return A.a(m,r)
p=m[r]
m.$flags&2&&A.bV(m)
m[r]=(p|q)>>>0
m[r]=(m[r]^q)>>>0
m=c.getContext("2d")
if(m==null)m=A.O(m)
m.save()
m.beginPath()
m.fillStyle=n.r
p=n.d
o=n.e
m.fillRect(b*p,a*o,p,o)
m.restore()},
L(a,b,c,d,e){var t,s,r,q,p,o,n=this,m=a<0||a>=n.b||b<0||b>=n.c
if(m)return
t=n.X(a,b)
a=t.a
b=t.b
s=A.d4(b)
r=s.a
q=B.a.U(1,s.b)
m=n.y
if(!(a>=0&&a<m.length))return A.a(m,a)
m=m[a]
if(!(r>=0&&r<m.length))return A.a(m,r)
p=m[r]
m.$flags&2&&A.bV(m)
m[r]=(p|q)>>>0
p=d.getContext("2d")
m=p==null?A.O(p):p
m.save()
m.beginPath()
m.fillStyle=c
p=n.d
o=n.e
m.fillRect(b*p,a*o,p,o)
m.restore()},
aH(a,b){var t,s,r,q,p=this.X(b,a)
b=p.a
t=A.d4(p.b)
s=t.a
r=B.a.U(1,t.b)
q=this.y
if(!(b>=0&&b<q.length))return A.a(q,b)
q=q[b]
if(!(s>=0&&s<q.length))return A.a(q,s)
return(q[s]&r)>>>0>0},
aD(a,b,c,d,e){var t,s,r,q,p,o,n,m,l=this
if(e==null)e=l.c-c
if(b==null)b=l.b-d
l.a1()
if(c===0&&d===0&&e===l.c&&b===l.b){for(t=l.y,s=t.length,r=0;r<s;++r)for(q=0;p=t[r],q<p.length;++q){p.$flags&2&&A.bV(p)
p[q]=0}t=l.x
s=t.getContext("2d")
if(s==null)s=A.O(s)
s.save()
s.fillStyle=l.r
s.fillRect(0,0,t.width,t.height)
s.restore()}else{t=l.b
d=B.a.n(d,t)
s=l.c
c=B.a.n(c,s)
p=Math.abs(b)
o=Math.min(d+p,t)
n=Math.min(c+p,s)
for(p=l.x,r=d;r<o;++r){m=B.a.n(r,t)
for(q=c;q<n;++q)l.K(m,B.a.n(q,s),p,!1)}}l.a2()},
G(a){return this.aD(0,null,0,0,null)},
aW(a,b,c,d,a0,a1,a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.a1()
t=e.X(a,b)
a=t.a
b=t.b
s=B.a.aY(1,a0)-1
for(r=a1.a,q=a0-1,p=u.t,o=e.x,n=0;n<c.length;++n){m=c[n]
l=(m&s)>>>0
m=A.o([],p)
for(k=a+n,j=0;j<a0;++j){i=e.aH(b+j,k)?1:0
m.push(B.a.U(i,q-j))}h=B.p.b4(m,0,new A.c9())
switch(r){case 0:for(j=0;j<a0;++j){m=b+j
if((B.a.E(l,q-j)&1)>0)e.L(k,m,d,o,!1)
else e.K(k,m,o,!1)}break
case 1:for(j=0;j<a0;++j){m=b+j
if((B.a.E(l,q-j)&1)>0)e.K(k,m,o,!1)
else e.L(k,m,d,o,!1)}break
case 3:for(j=0;j<a0;++j){g=q-j
if((B.a.E(l,g)&1)>0&&(B.a.aM(h,g)&1)===0)e.L(k,b+j,d,o,!1)}break
case 2:for(j=0;j<a0;++j)if((B.a.E(l,q-j)&1)>0)e.L(k,b+j,d,o,!1)
break
case 4:for(f=(l&h)>>>0,j=0;j<a0;++j)if((B.a.E(f,q-j)&1)>0)e.L(k,b+j,d,o,!1)
break
case 5:for(f=(l&h)>>>0,j=0;j<a0;++j)if((B.a.E(f,q-j)&1)>0)e.K(k,b+j,o,!1)
break
case 6:for(f=(l&h)>>>0,j=0;j<a0;++j)if((B.a.E(f,q-j)&1)===0)e.K(k,b+j,o,!1)
break
case 7:for(f=(l&h)>>>0,j=0;j<a0;++j){m=b+j
if((B.a.E(f,q-j)&1)===0)e.K(k,m,o,!1)
else e.L(k,m,d,o,!1)}break}}e.a2()},
aI(a,b,c){this.aW(c.a,c.b,b,a,8,B.dQ,!0,!1,!1)},
aL(a){var t,s,r,q,p,o,n,m,l=this,k=l.b
a=B.a.n(a,k)
for(t=k-a,s=l.y,r=s.length,q=0;q<t;++q){if(!(q<r))return A.a(s,q)
p=q+a
o=0
for(;n=s[q],o<n.length;++o){if(!(p<r))return A.a(s,p)
m=s[p]
if(!(o<m.length))return A.a(m,o)
m=m[o]
n.$flags&2&&A.bV(n)
n[o]=m}}for(;q<k;++q){if(!(q<r))return A.a(s,q)
o=0
for(;p=s[q],o<p.length;++o){p.$flags&2&&A.bV(p)
p[o]=0}}l.a1()
k=l.x
s=k.getContext("2d")
if(s==null)s=A.O(s)
s.save()
s.beginPath()
r=l.e
s.drawImage(l.w,0,-a*r)
s.fillStyle=l.r
s.fillRect(0,t*r,k.width,a*r)
s.restore()
l.a2()},
S(){var t=this.w
t.style.opacity="1.0"
t.focus()},
P(){var t=this.w,s=t.style
s.opacity="0.5"
t.blur()}}
A.ca.prototype={
$0(){this.a.z=!0},
$S:0}
A.cb.prototype={
$0(){this.a.z=!1},
$S:0}
A.cc.prototype={
$0(){this.a.S()},
$S:0}
A.cd.prototype={
$0(){this.a.P()},
$S:0}
A.c9.prototype={
$2(a,b){return(a|b)>>>0},
$S:12}
A.c6.prototype={
V(){return"Mode."+this.b}}
A.bE.prototype={
V(){return"State."+this.b}}
A.aN.prototype={
aP(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var t=this,s=new A.cp(),r=t.f
r.tabIndex=-1
r.onfocus=A.b2(new A.ci(t))
r.onblur=A.b2(new A.cj(t))
r.onkeydown=A.db(new A.ck(t,l,s,new A.co(t)))
r.onclick=A.db(new A.cl(t,new A.cq(t),o))
r.onkeyup=A.db(new A.cm(t,m,s))
A.dI(A.dv(300),new A.cn(t))
t.P()
t.G(0)},
gad(){var t=this.w
t===$&&A.G()
return t.gad()},
gaa(){var t=this.w
t===$&&A.G()
return t.gaa()},
O(a,b){return new A.c(B.a.n(a,this.a),B.a.n(b,this.b))},
au(){var t=this,s=t.x
t.CW.v(0,new A.I(s.c,s.d," ","white"))
t.l()
t.cy=!1},
l(){var t,s,r,q,p,o,n,m,l,k,j,i=this
for(t=i.CW,s=A.dN(t,t.r,t.$ti.c),r=i.w,q=i.cx,p=8+i.c,o=s.$ti.c;s.j();){n=s.d
if(n==null)n=o.a(n)
m=n.a
l=n.b
if(q.R(n.c)){k=q.u(0,n.c)
k.toString
j=k}else j=$.el()
r===$&&A.G()
r.aI(n.d,j,new A.c(m*p,l*8))}t.G(0)},
ak(a,b){var t,s=this.O(b,a)
b=s.a
a=s.b
t=this.ch
if(!(b>=0&&b<t.length))return A.a(t,b)
t=t[b]
if(!(a>=0&&a<t.length))return A.a(t,a)
return t[a].c},
A(a,b,c){var t,s=this.O(c,b)
c=s.a
b=s.b
t=this.ch
if(!(c>=0&&c<t.length))return A.a(t,c)
t=t[c]
if(!(b>=0&&b<t.length))return A.a(t,b)
t=t[b]
t.c=a
this.CW.v(0,t)},
C(a,b,c){var t,s=this.O(c,b)
c=s.a
b=s.b
t=this.ch
if(!(c>=0&&c<t.length))return A.a(t,c)
t=t[c]
if(!(b>=0&&b<t.length))return A.a(t,b)
t=t[b]
t.d=a
this.CW.v(0,t)},
b8(){var t,s=this.x
s.sY(0)
t=s.c
if(t===this.a-1)this.am()
else s.c=B.a.n(t+1,s.a)},
am(){var t,s,r,q,p,o,n,m,l=this
for(t=l.a-1,s=l.b,r=l.ch,q=0;q<t;q=p)for(p=q+1,o=0;o<s;++o){n=r.length
if(!(q<n))return A.a(r,q)
m=r[q]
if(!(o<m.length))return A.a(m,o)
m=m[o]
if(!(p<n))return A.a(r,p)
n=r[p]
if(!(o<n.length))return A.a(n,o)
n=n[o]
m.c=n.c
m.d=n.d}for(o=0;o<s;++o){if(!(t>=0&&t<r.length))return A.a(r,t)
n=r[t]
if(!(o<n.length))return A.a(n,o)
n=n[o]
n.c=" "
n.d="white"}t=l.w
t===$&&A.G()
t.aL(8+l.c)},
ai(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j,i=this,h=e==null?i.x.c:e,g=i.O(h,c==null?i.x.d:c)
h=i.x
t=h.a
h.c=B.a.n(g.a,t)
h.sY(g.b)
if(b==null)b="white"
for(s=a.split(""),r=s.length,q=i.ch,p=i.CW,o=i.a-1,n=i.b-1,m=0;m<r;++m){l=s[m]
e=h.c
c=h.d
if(!(e>=0&&e<q.length))return A.a(q,e)
k=q[e]
if(!(c>=0&&c<k.length))return A.a(k,c)
j=k[c]
j.c=l
j.d=b
p.v(0,j)
if(e===o&&c===n){i.am()
h.c=B.a.n(h.c-1,t)}h.sY(h.d+1)}i.l()
if(d)i.b8()},
ah(a,b,c,d){return this.ai(a,b,c,!0,d)},
b9(a,b,c,d){return this.ai(a,null,b,c,d)},
aG(a,b){return this.ai(a,null,null,b,null)},
aC(a,b,c,d){var t,s,r,q,p,o,n=this,m=n.b-b
if(c==null)c=n.a-d
t=d+c
s=b+m
for(r=n.ch,q=d;q<t;++q)for(p=b;p<s;++p){if(!(q<r.length))return A.a(r,q)
o=r[q]
if(!(p<o.length))return A.a(o,p)
o=o[p]
o.c=" "
o.d="white"}r=n.w
r===$&&A.G()
o=8+n.c
r.aD(0,c*o,b*8,d*o,m*8)
o=n.x
o.c=B.a.n(d,o.a)
o.sY(b)},
G(a){return this.aC(0,0,null,0)},
bc(a,b,c){var t=this.w
t===$&&A.G()
t.aI("white",b,new A.c(c*(8+this.c),a*8))},
S(){return this.gad().$0()},
P(){return this.gaa().$0()}}
A.cq.prototype={
$1(a){var t,s,r,q,p,o,n,m,l,k=this.a,j=k.w
j===$&&A.G()
t=J.dp(a.offsetX)
s=Math.max(Math.min(B.a.J(J.dp(a.offsetY)-1,j.e),j.b-1),0)
r=Math.max(Math.min(B.a.J(t-1,j.d),j.c-1),0)
q=B.a.J(s,8+k.c)
p=B.a.F(r,8)
o=k.ak(p,q)
n=k.O(q,p)
m=n.a
l=n.b
k=k.ch
if(!(m>=0&&m<k.length))return A.a(k,m)
k=k[m]
if(!(l>=0&&l<k.length))return A.a(k,l)
return new A.a5(q,p,o,k[l].d,s,r,j.aH(r,s))},
$S:13}
A.cp.prototype={
$1(a){var t=a.keyCode
return new A.K(t)},
$S:14}
A.co.prototype={
$0(){var t,s,r,q,p,o=this.a,n=o.a,m=o.b,l=new A.a8(n,m)
l.sB(o.y.gB())
t=A.o([],u.s)
for(s=o.z,r=s.b;q=l.c,p=l.d,q*m+p<s.c*r+s.d;q=l.c*m+l.d+1,l.c=B.a.n(B.a.J(q,m),n),l.d=B.a.n(q,m))t.push(o.ak(p,q))
return B.p.b7(t,"")},
$S:15}
A.ci.prototype={
$0(){var t=this.a.w
t===$&&A.G()
t.S()},
$S:0}
A.cj.prototype={
$0(){var t=this.a.w
t===$&&A.G()
t.P()},
$S:0}
A.ck.prototype={
$1(a){var t,s,r,q
a.preventDefault()
t=this.a
switch(t.ay.a){case 0:this.b.$2(t,this.c.$1(a))
break
case 1:break
case 2:t.au()
A:{s=a.keyCode
if(13===s)break A
if(8===s){r=t.x
if(r.gB()>t.y.gB()){r.sB(r.gB()-1)
t.aG(" ",!1)
r.sB(r.gB()-1)}break A}q=a.key
if(q.length===1&&t.x.gB()<t.z.gB())t.aG(q,!1)}break
case 3:break}},
$S:2}
A.cl.prototype={
$1(a){a.preventDefault()},
$S:2}
A.cm.prototype={
$1(a){a.preventDefault()
this.b.$2(this.a,this.c.$1(a))},
$S:2}
A.cn.prototype={
$1(a){var t,s=this.a,r=s.w
r===$&&A.G()
if(r.z&&J.ai(v.G.document.activeElement,r.w)&&s.ay===B.dW)if(s.cy)s.au()
else{r=s.x
t=r.c
s.bc(r.d,$.ek(),t)
s.cy=!0}},
$S:4}
A.bh.prototype={}
A.bb.prototype={}
A.Q.prototype={
V(){return"Cell."+this.b},
gM(){switch(this.a){case 0:var t=" "
break
case 1:t="\u2588"
break
case 2:t="\u2591"
break
default:t=null}return t},
gN(){var t="#69b41e"
switch(this.a){case 0:break
case 1:break
case 2:t="#b8d53d"
break
default:t=null}return t}}
A.x.prototype={
V(){return"GameState."+this.b}}
A.bg.prototype={
aj(){var t="Level: "+this.as+" Score: "+this.at
this.b.b9(t,B.a.F(40-t.length,2),!1,26)},
b0(a,b){var t,s,r,q,p=this
for(t=A.c2(25,u.z),t=t.gq(t),s=p.e;t.j();){t.gk()
r=B.a.n(p.f+1,25)
p.f=r
if(!(r<s.length))return A.a(s,r)
q=s[r]
if(!q.f){q.a=a
q.b=b
q.f=!0
t=p.a
do{q.c=t.a_(3)-1
s=t.a_(3)-1
q.d=s}while(q.c===0&&s===0);++p.r
break}}},
aF(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this
for(t=a7.e,s=t.length,r=a7.c,q=a7.b,p=a7.w,o=u.R,n=0;n<t.length;t.length===s||(0,A.bU)(t),++n){m=t[n]
if(m.f){l=m.a
k=r.length
if(!(l>=0&&l<k))return A.a(r,l)
j=r[l]
i=m.b
h=j.length
if(!(i>=0&&i<h))return A.a(j,i)
g=j[i]
if(g===B.b){m.f=!1
q.A(B.b.gM(),i,l)
q.l()
l=m.a
k=m.b
q.C(B.b.gN(),k,l)
q.l();--a7.r
continue}f=(m.e+1)%3
m.e=f
if(f===0){f=m.c
e=l+f
d=m.d
c=i+d
if(!(e>=0&&e<k))return A.a(r,e)
k=r[e]
b=k.length
if(!(c>=0&&c<b))return A.a(k,c)
if(k[c]===B.b){if(!(i<b))return A.a(k,i)
k=k[i]===B.b
if(k)f=m.c=f*-1
if(!(c<h))return A.a(j,c)
j=j[c]===B.b
h=j?m.d=d*-1:d
if(!k&&!j){m.d=h*-1
m.c=f*-1}}q.A(g.gM(),i,l)
q.l()
l=m.a
k=m.b
if(!(l>=0&&l<r.length))return A.a(r,l)
j=r[l]
if(!(k>=0&&k<j.length))return A.a(j,k)
q.C(j[k].gN(),k,l)
q.l()
l=m.a+m.c
m.a=l
k=m.b+m.d
m.b=k
q.A("\u25cb",k,l)
q.l()
l=m.a
q.C("#b8d53d",m.b,l)
q.l()
l=m.a
if(!(l>=0&&l<r.length))return A.a(r,l)
l=r[l]
k=m.b
if(!(k>=0&&k<l.length))return A.a(l,k)
if(l[k]===B.e){p.G(0)
a=A.dz([new A.c(m.a,m.b)],o)
while(a.a!==0){a0=a.e
if(a0==null)A.P(A.bF("No elements"))
a1=a0.a
a2=a1.a
a3=a1.b
a.H(0,new A.c(a2,a3))
p.v(0,new A.c(a2,a3))
for(a4=0;a4<4;++a4){l=B.f[a4]
a5=a2+l.a
a6=a3+l.b
if(!p.aE(0,new A.c(a5,a6))){if(!(a5>=0&&a5<r.length))return A.a(r,a5)
l=r[a5]
if(!(a6>=0&&a6<l.length))return A.a(l,a6)
l=l[a6]===B.e}else l=!1
if(l)a.v(0,new A.c(a5,a6))}}a7.d=B.G}}}}},
b2(){var t,s,r,q,p,o,n,m,l,k,j
for(t=this.x,s=this.c,r=this.b;t.a!==0;){q=t.e
if(q==null)A.P(A.bF("No elements"))
p=q.a
o=p.a
n=p.b
t.H(0,new A.c(o,n))
for(m=0;m<4;++m){l=B.f[m]
k=o+l.a
if(!(k>=0&&k<s.length))return A.a(s,k)
j=s[k]
l=n+l.b
if(!(l>=0&&l<j.length))return A.a(j,l)
if(j[l]===B.e)t.v(0,new A.c(k,l))}if(!(o>=0&&o<s.length))return A.a(s,o)
l=s[o]
if(!(n>=0&&n<l.length))return A.a(l,n)
l[n]=B.b
r.A(B.b.gM(),n,o)
r.l()
r.C(B.b.gN(),n,o)
r.l()}},
b1(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a="No elements",a0=u.R,a1=A.eX(a0,u.d)
for(t=b.y,s=b.c;t.a!==0;){r=t.e
if(r==null)A.P(A.bF(a))
q=r.a
p=q.a
o=q.b
t.H(0,new A.c(p,o))
if(!(p>=0&&p<s.length))return A.a(s,p)
n=s[p]
if(!(o>=0&&o<n.length))return A.a(n,o)
if(n[o]===B.b)continue
a1.T(0,new A.c(p,o),A.a2(a0))
m=A.dz([new A.c(p,o)],a0)
while(m.a!==0){r=m.e
if(r==null)A.P(A.bF(a))
l=r.a
k=l.a
j=l.b
m.H(0,new A.c(k,j))
a1.u(0,new A.c(p,o)).v(0,new A.c(k,j))
for(i=0;i<4;++i){n=B.f[i]
h=k+n.a
g=j+n.b
if(!a1.u(0,new A.c(p,o)).aE(0,new A.c(h,g))){if(!(h>=0&&h<s.length))return A.a(s,h)
n=s[h]
if(!(g>=0&&g<n.length))return A.a(n,g)
n=n[g]===B.d}else n=!1
if(n)m.v(0,new A.c(h,g))}}n=a1.u(0,new A.c(p,o))
n.toString
t.bd(n)}if(a1.a>1){a0=a1.$ti
f=new A.aB(a1,a0.i("aB<1>")).gac(0)
e=a1.u(0,f).a
for(a0=new A.aA(a1,a0.i("aA<1,2>")).gq(0);a0.j();){t=a0.d
d=t.a
c=t.b.a
if(c<e){e=c
f=d}}a0=a1.u(0,f)
a0.toString
b.z.aB(0,a0)
b.d=B.C}},
be(){var t,s,r,q,p,o,n,m=this.b
m.aC(0,0,25,0)
for(t=this.c,s=0;s<25;++s)for(r=s!==0,q=s!==24,p=0;p<40;++p){if(!(s<t.length))return A.a(t,s)
o=t[s]
n=!r||!q||p===0||p===39?B.b:B.d
if(!(p<o.length))return A.a(o,p)
o[p]=n
n=t[s]
if(!(p<n.length))return A.a(n,p)
m.A(n[p].gM(),p,s)
m.l()
if(!(s<t.length))return A.a(t,s)
n=t[s]
if(!(p<n.length))return A.a(n,p)
m.C(n[p].gN(),p,s)
m.l()}},
aK(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b="#b8d53d"
switch(c.d.a){case 0:t=c.b
t.G(0)
s=A.o([],u.s)
for(r=".----.                   \n|  o |---.-.-.---.---.---.\n|  o | o | | | | |  _| o_:\n'----'---'---'-'-'---'---'\n".split("\n"),q=r.length,p=0;p<q;++p){o=r[p]
if(B.i.bi(o).length!==0)s.push(B.i.bb(o,28))}for(s=A.eM(s,0,u.N),r=J.aj(s.a),s=s.b,q=new A.as(r,s);q.j();){n=q.c
n=n>=0?new A.c(s+n,r.gk()):A.P(A.c1())
t.ah(n.b,"#8dc71e",7,n.a+5)}t.ah("Press Enter to Start!",b,10,10)
c.d=B.B
break
case 1:t=$.D.u(0,13)
t.toString
if(t){c.as=1
c.at=0
c.aj()
c.d=B.n}break
case 2:t=c.Q
t.a=0
t.b=20
c.be()
for(t=[c.y,c.x],p=0;p<2;++p)t[p].G(0)
for(t=c.e,s=t.length,p=0;p<s;++p){m=t[p]
m.f=!1
m.e=0}c.r=0
for(t=A.c2(c.as,u.z),t=t.gq(t),s=c.a;t.j();){t.gk()
c.b0(s.a_(23)+1,s.a_(38)+1)}c.d=B.o
break
case 3:t=$.D.u(0,38)
t.toString
s=$.D.u(0,40)
s.toString
r=$.D.u(0,37)
r.toString
q=$.D.u(0,39)
q.toString
l=0
if(t)k=c.Q.a===0?0:-1
else if(s)k=c.Q.a===24?0:1
else{if(r)l=c.Q.b===0?0:-1
else if(q)l=c.Q.b===39?0:1
k=0}t=c.c
s=c.Q
r=s.a
if(!(r>=0&&r<t.length))return A.a(t,r)
q=t[r]
n=s.b
if(!(n>=0&&n<q.length))return A.a(q,n)
j=q[n]
if(j===B.b||j===B.e){c.b2()
c.b1()}else{if(k!==0||l!==0)q[n]=B.e
q=c.x
if(q.a===0)q.v(0,new A.c(r,n))
for(r=c.y,p=0;p<4;++p){q=B.f[p]
i=s.a+q.a
h=s.b+q.b
q=!1
if(i>=0)if(i<25)if(h>=0)if(h<40){if(!(i<t.length))return A.a(t,i)
q=t[i]
if(!(h<q.length))return A.a(q,h)
q=q[h]===B.d}if(q)r.v(0,new A.c(i,h))}r=c.b
q=s.a
r.A("\u2592",s.b,q)
r.l()}r=c.b
q=s.a
n=s.b
if(!(q>=0&&q<t.length))return A.a(t,q)
j=t[q]
if(!(n>=0&&n<j.length))return A.a(j,n)
r.A(j[n].gM(),n,q)
r.l()
q=s.a
n=s.b
if(!(q>=0&&q<t.length))return A.a(t,q)
t=t[q]
if(!(n>=0&&n<t.length))return A.a(t,n)
r.C(t[n].gN(),n,q)
r.l()
q=s.a+=k
r.A("\u25a0",s.b+=l,q)
r.l()
q=s.a
r.C(b,s.b,q)
r.l()
c.aF()
break
case 4:t=c.z
if(t.a===0)c.d=B.D
else{s=A.dH(t,10,t.$ti.c)
g=A.dA(s,A.b3(s).i("n.E"))
for(s=g.length,r=c.c,q=c.b,p=0;p<g.length;g.length===s||(0,A.bU)(g),++p){n=g[p]
f=n.a
e=n.b
t.H(0,new A.c(f,e))
if(!(f>=0&&f<r.length))return A.a(r,f)
n=r[f]
if(!(e>=0&&e<n.length))return A.a(n,e)
n[e]=B.b
q.A(B.b.gM(),e,f)
q.l()
q.C(B.b.gN(),e,f)
q.l()}}break
case 5:c.aF()
if(c.r===0){t=A.o([],u.n)
for(s=c.c,f=0;f<25;++f)for(e=0;e<40;++e){if(!(f<s.length))return A.a(s,f)
r=s[f]
if(!(e<r.length))return A.a(r,e)
if(r[e]===B.d)t.push(new A.c(f,e))}c.ax.aB(0,t)
c.d=B.E}else c.d=B.o
break
case 6:t=c.ax
if(t.a!==0){s=A.dH(t,30,t.$ti.c)
g=A.dA(s,A.b3(s).i("n.E"))
for(s=g.length,r=c.b,p=0;p<g.length;g.length===s||(0,A.bU)(g),++p){q=g[p]
f=q.a
e=q.b
t.H(0,new A.c(f,e))
r.A("\u2592",e,f)
r.l()
r.C("#8dc71e",e,f)
r.l();++c.at
c.aj()}}else{++c.as
c.aj()
c.d=B.F}break
case 7:t=$.D.u(0,13)
t.toString
if(t)c.d=B.n
break
case 8:t=c.w
s=c.b
if(t.a!==0){d=t.gac(0)
f=d.a
e=d.b
t.H(0,new A.c(f,e))
s.A("\u2591",e,f)
s.l()
s.C("#f73644",e,f)
s.l()}else{s.ah("Game Over!",b,15,12)
c.d=B.H}break
case 9:t=$.D.u(0,13)
t.toString
if(t)c.d=B.m
break}}}
A.c_.prototype={
$2(a,b){var t=b.a
if($.D.R(t))$.D.T(0,t,!0)},
$S:5}
A.c0.prototype={
$2(a,b){var t=b.a
if($.D.R(t))$.D.T(0,t,!1)},
$S:5};(function aliases(){var t=J.L.prototype
t.aN=t.h})();(function installTearOffs(){var t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers._instance_0u,q=hunkHelpers._instance_1u
t(A,"hf","f7",3)
t(A,"hg","f8",3)
t(A,"hh","f9",3)
s(A,"e6","ha",1)
t(A,"ea","fa",16)
var p
r(p=A.bD.prototype,"gad","S",1)
r(p,"gaa","P",1)
q(A.bg.prototype,"gaJ","aK",4)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(A.k,null)
r(A.k,[A.d_,J.bj,A.aJ,J.b8,A.m,A.ce,A.n,A.a3,A.bH,A.bf,A.as,A.ap,A.ad,A.bd,A.cs,A.c7,A.bR,A.R,A.aC,A.c4,A.bp,A.bo,A.z,A.bP,A.bS,A.aX,A.bN,A.bM,A.cL,A.aa,A.cE,A.ac,A.j,A.be,A.cA,A.bz,A.aK,A.cB,A.a4,A.u,A.bG,A.cC,A.I,A.K,A.a5,A.a8,A.bD,A.aN,A.bh,A.bg])
r(J.bj,[J.bl,J.au,J.aw,J.av,J.ax,J.a0,J.a1])
r(J.aw,[J.L,J.h,A.a6,A.aF])
r(J.L,[J.bA,J.ab,J.J])
s(J.bk,A.aJ)
s(J.c3,J.h)
r(J.a0,[J.at,J.bm])
r(A.m,[A.az,A.aO,A.bn,A.bJ,A.bC,A.bO,A.b9,A.H,A.aP,A.bI,A.aL,A.bc])
r(A.n,[A.am,A.aM,A.ar])
r(A.am,[A.S,A.ao,A.aB,A.aA])
s(A.an,A.aM)
s(A.al,A.ar)
s(A.bQ,A.ad)
s(A.c,A.bQ)
s(A.aq,A.bd)
s(A.aH,A.aO)
r(A.R,[A.bX,A.bY,A.ch,A.cQ,A.cS,A.cx,A.cw,A.cG,A.cq,A.cp,A.ck,A.cl,A.cm,A.cn])
r(A.ch,[A.cg,A.ak])
s(A.E,A.aC)
s(A.ay,A.E)
r(A.bY,[A.cR,A.c5,A.c9,A.c_,A.c0])
r(A.aF,[A.bq,A.a7])
r(A.a7,[A.aR,A.aT])
s(A.aS,A.aR)
s(A.aD,A.aS)
s(A.aU,A.aT)
s(A.aE,A.aU)
r(A.aD,[A.br,A.bs])
r(A.aE,[A.bt,A.bu,A.bv,A.bw,A.bx,A.aG,A.by])
s(A.aY,A.bO)
r(A.bX,[A.cy,A.cz,A.cI,A.cH,A.cM,A.ca,A.cb,A.cc,A.cd,A.co,A.ci,A.cj])
s(A.bL,A.bN)
s(A.cF,A.cL)
s(A.aW,A.aa)
s(A.T,A.aW)
r(A.H,[A.a9,A.bi])
s(A.aQ,A.S)
r(A.cA,[A.c6,A.bE,A.Q,A.x])
s(A.bb,A.bh)
t(A.aR,A.j)
t(A.aS,A.ap)
t(A.aT,A.j)
t(A.aU,A.ap)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{b:"int",r:"double",ee:"num",A:"String",e7:"bool",u:"Null",f:"List",k:"Object",hM:"Map",i:"JSObject"},mangledNames:{},types:["u()","~()","u(i)","~(~())","~(cr)","~(aN,K)","@(@)","@(@,A)","@(A)","u(@)","u(~())","~(k?,k?)","b(b,b)","a5(i)","K(i)","A()","b(b)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.c&&a.b(c.a)&&b.b(c.b)}}
A.fr(v.typeUniverse,JSON.parse('{"bA":"L","ab":"L","J":"L","hN":"a6","bl":{"e":[]},"au":{"e":[]},"aw":{"i":[]},"L":{"i":[]},"h":{"f":["1"],"i":[]},"bk":{"aJ":[]},"c3":{"h":["1"],"f":["1"],"i":[]},"a0":{"r":[]},"at":{"r":[],"b":[],"e":[]},"bm":{"r":[],"e":[]},"a1":{"A":[],"e":[]},"az":{"m":[]},"am":{"n":["1"]},"S":{"n":["1"]},"aM":{"n":["1"],"n.E":"1"},"an":{"aM":["1"],"n":["1"],"n.E":"1"},"ao":{"n":["1"],"n.E":"1"},"ar":{"n":["+(b,1)"],"n.E":"+(b,1)"},"al":{"ar":["1"],"n":["+(b,1)"],"n.E":"+(b,1)"},"aq":{"bd":["1","2"]},"aH":{"m":[]},"bn":{"m":[]},"bJ":{"m":[]},"bC":{"m":[]},"E":{"aC":["1","2"]},"aB":{"n":["1"],"n.E":"1"},"aA":{"n":["a4<1,2>"],"n.E":"a4<1,2>"},"ay":{"E":["1","2"],"aC":["1","2"]},"a6":{"i":[],"e":[]},"aF":{"i":[]},"bq":{"i":[],"e":[]},"a7":{"t":["1"],"i":[]},"aD":{"j":["r"],"f":["r"],"t":["r"],"i":[]},"aE":{"j":["b"],"f":["b"],"t":["b"],"i":[]},"br":{"j":["r"],"f":["r"],"t":["r"],"i":[],"e":[],"j.E":"r"},"bs":{"j":["r"],"f":["r"],"t":["r"],"i":[],"e":[],"j.E":"r"},"bt":{"j":["b"],"f":["b"],"t":["b"],"i":[],"e":[],"j.E":"b"},"bu":{"j":["b"],"f":["b"],"t":["b"],"i":[],"e":[],"j.E":"b"},"bv":{"j":["b"],"f":["b"],"t":["b"],"i":[],"e":[],"j.E":"b"},"bw":{"j":["b"],"f":["b"],"t":["b"],"i":[],"e":[],"j.E":"b"},"bx":{"cu":[],"j":["b"],"f":["b"],"t":["b"],"i":[],"e":[],"j.E":"b"},"aG":{"j":["b"],"f":["b"],"t":["b"],"i":[],"e":[],"j.E":"b"},"by":{"j":["b"],"f":["b"],"t":["b"],"i":[],"e":[],"j.E":"b"},"bO":{"m":[]},"aY":{"m":[]},"aX":{"cr":[]},"T":{"aa":["1"],"cf":["1"]},"aa":{"cf":["1"]},"aW":{"aa":["1"],"cf":["1"]},"b9":{"m":[]},"aO":{"m":[]},"H":{"m":[]},"a9":{"m":[]},"bi":{"m":[]},"aP":{"m":[]},"bI":{"m":[]},"aL":{"m":[]},"bc":{"m":[]},"bz":{"m":[]},"aK":{"m":[]},"aQ":{"S":["1"],"n":["1"],"n.E":"1","S.E":"1"},"eP":{"f":["b"]},"f5":{"f":["b"]},"f4":{"f":["b"]},"eN":{"f":["b"]},"f3":{"f":["b"]},"eO":{"f":["b"]},"cu":{"f":["b"]},"eJ":{"f":["r"]},"eK":{"f":["r"]}}'))
A.fq(v.typeUniverse,JSON.parse('{"am":1,"bf":1,"as":1,"ap":1,"bp":1,"a7":1,"bN":1,"aW":1}'))
var u=(function rtii(){var t=A.cO
return{o:t("I"),C:t("m"),Z:t("hL"),O:t("h<bb>"),U:t("h<I>"),q:t("h<Q>"),J:t("h<f<I>>"),G:t("h<f<Q>>"),f:t("h<k>"),n:t("h<+(b,b)>"),s:t("h<A>"),v:t("h<cu>"),b:t("h<@>"),t:t("h<b>"),T:t("au"),m:t("i"),g:t("J"),p:t("t<@>"),V:t("K"),j:t("f<@>"),r:t("a5"),P:t("u"),K:t("k"),L:t("hO"),F:t("+()"),R:t("+(b,b)"),d:t("cf<+(b,b)>"),l:t("hP"),N:t("A"),D:t("cr"),k:t("e"),A:t("ab"),y:t("e7"),i:t("r"),z:t("@"),S:t("b"),Q:t("dw<u>?"),B:t("i?"),X:t("k?"),w:t("A?"),u:t("e7?"),I:t("r?"),x:t("b?"),E:t("ee?"),H:t("ee")}})();(function constants(){var t=hunkHelpers.makeConstList
B.I=J.bj.prototype
B.p=J.h.prototype
B.a=J.at.prototype
B.J=J.a0.prototype
B.i=J.a1.prototype
B.K=J.J.prototype
B.L=J.aw.prototype
B.q=J.bA.prototype
B.j=J.ab.prototype
B.r=new A.bf()
B.k=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.t=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof HTMLElement == "function";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.y=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var userAgent = navigator.userAgent;
    if (typeof userAgent != "string") return hooks;
    if (userAgent.indexOf("DumpRenderTree") >= 0) return hooks;
    if (userAgent.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.u=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.x=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.w=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.v=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.l=function(hooks) { return hooks; }

B.z=new A.bz()
B.c=new A.ce()
B.A=new A.cC()
B.h=new A.cF()
B.d=new A.Q(0,"empty")
B.b=new A.Q(1,"solid")
B.e=new A.Q(2,"trail")
B.m=new A.x(0,"titleScreenSetup")
B.B=new A.x(1,"titleScreenWait")
B.n=new A.x(2,"setupLevel")
B.o=new A.x(3,"play")
B.C=new A.x(4,"playFill")
B.D=new A.x(5,"checkBouncers")
B.E=new A.x(6,"levelFill")
B.F=new A.x(7,"levelFillWait")
B.G=new A.x(8,"gameOver")
B.H=new A.x(9,"gameOverWait")
B.dU=new A.c(-1,0)
B.dT=new A.c(1,0)
B.dS=new A.c(0,-1)
B.dR=new A.c(0,1)
B.f=t([B.dU,B.dT,B.dS,B.dR],u.n)
B.da=t([126,129,165,129,189,153,129,126],u.t)
B.ac=t([126,255,219,255,195,231,255,126],u.t)
B.dH=t([108,254,254,254,124,56,16,0],u.t)
B.c7=t([16,56,124,254,124,56,16,0],u.t)
B.b5=t([56,124,56,254,254,124,56,124],u.t)
B.bh=t([16,16,56,124,254,124,56,124],u.t)
B.aA=t([0,0,24,60,60,24,0,0],u.t)
B.aD=t([255,255,231,195,195,231,255,255],u.t)
B.aP=t([0,60,102,66,66,102,60,0],u.t)
B.cV=t([255,195,153,189,189,153,195,255],u.t)
B.dG=t([15,7,15,125,204,204,204,120],u.t)
B.dF=t([60,102,102,102,60,24,126,24],u.t)
B.cS=t([63,51,63,48,48,112,240,224],u.t)
B.W=t([127,99,127,99,99,103,230,192],u.t)
B.a0=t([153,90,60,231,231,60,90,153],u.t)
B.ax=t([128,224,248,254,248,224,128,0],u.t)
B.bD=t([2,14,62,254,62,14,2,0],u.t)
B.cl=t([24,60,126,24,24,126,60,24],u.t)
B.ch=t([102,102,102,102,102,0,102,0],u.t)
B.cr=t([127,219,219,123,27,27,27,0],u.t)
B.cs=t([62,99,56,108,108,56,204,120],u.t)
B.bR=t([0,0,0,0,126,126,126,0],u.t)
B.bU=t([24,60,126,24,126,60,24,255],u.t)
B.R=t([24,60,126,24,24,24,24,0],u.t)
B.df=t([24,24,24,24,126,60,24,0],u.t)
B.d8=t([0,24,12,254,12,24,0,0],u.t)
B.au=t([0,48,96,254,96,48,0,0],u.t)
B.bZ=t([0,0,192,192,192,254,0,0],u.t)
B.bw=t([0,36,102,255,102,36,0,0],u.t)
B.aa=t([0,24,60,126,255,255,0,0],u.t)
B.bV=t([0,255,255,126,60,24,0,0],u.t)
B.b0=t([0,0,0,0,0,0,0,0],u.t)
B.bE=t([48,120,120,48,48,0,48,0],u.t)
B.Z=t([108,108,108,0,0,0,0,0],u.t)
B.ao=t([108,108,254,108,254,108,108,0],u.t)
B.c2=t([48,124,192,120,12,248,48,0],u.t)
B.Q=t([0,198,204,24,48,102,198,0],u.t)
B.cE=t([56,108,56,118,220,204,118,0],u.t)
B.an=t([96,96,192,0,0,0,0,0],u.t)
B.V=t([24,48,96,96,96,48,24,0],u.t)
B.bA=t([96,48,24,24,24,48,96,0],u.t)
B.cv=t([0,102,60,255,60,102,0,0],u.t)
B.dO=t([0,48,48,252,48,48,0,0],u.t)
B.c4=t([0,0,0,0,0,48,48,96],u.t)
B.bv=t([0,0,0,252,0,0,0,0],u.t)
B.cj=t([0,0,0,0,0,48,48,0],u.t)
B.a5=t([6,12,24,48,96,192,128,0],u.t)
B.b8=t([124,198,206,222,246,230,124,0],u.t)
B.cm=t([48,112,48,48,48,48,252,0],u.t)
B.c0=t([120,204,12,56,96,204,252,0],u.t)
B.dJ=t([120,204,12,56,12,204,120,0],u.t)
B.bC=t([28,60,108,204,254,12,30,0],u.t)
B.d9=t([252,192,248,12,12,204,120,0],u.t)
B.dr=t([56,96,192,248,204,204,120,0],u.t)
B.c1=t([252,204,12,24,48,48,48,0],u.t)
B.cy=t([120,204,204,120,204,204,120,0],u.t)
B.bf=t([120,204,204,124,12,24,112,0],u.t)
B.d2=t([0,48,48,0,0,48,48,0],u.t)
B.aS=t([0,48,48,0,0,48,48,96],u.t)
B.bB=t([24,48,96,192,96,48,24,0],u.t)
B.bq=t([0,0,252,0,0,252,0,0],u.t)
B.aC=t([96,48,24,12,24,48,96,0],u.t)
B.as=t([120,204,12,24,48,0,48,0],u.t)
B.dm=t([124,198,222,222,222,192,120,0],u.t)
B.cd=t([48,120,204,204,252,204,204,0],u.t)
B.aM=t([252,102,102,124,102,102,252,0],u.t)
B.ae=t([60,102,192,192,192,102,60,0],u.t)
B.a6=t([248,108,102,102,102,108,248,0],u.t)
B.ak=t([254,98,104,120,104,98,254,0],u.t)
B.cp=t([254,98,104,120,104,96,240,0],u.t)
B.aq=t([60,102,192,192,206,102,62,0],u.t)
B.at=t([204,204,204,252,204,204,204,0],u.t)
B.cN=t([120,48,48,48,48,48,120,0],u.t)
B.bP=t([30,12,12,12,204,204,120,0],u.t)
B.bH=t([230,102,108,120,108,102,230,0],u.t)
B.bG=t([240,96,96,96,98,102,254,0],u.t)
B.aN=t([198,238,254,254,214,198,198,0],u.t)
B.Y=t([198,230,246,222,206,198,198,0],u.t)
B.cX=t([56,108,198,198,198,108,56,0],u.t)
B.bl=t([252,102,102,124,96,96,240,0],u.t)
B.cH=t([120,204,204,204,220,120,28,0],u.t)
B.P=t([252,102,102,124,108,102,230,0],u.t)
B.ah=t([120,204,224,112,28,204,120,0],u.t)
B.dA=t([252,180,48,48,48,48,120,0],u.t)
B.aK=t([204,204,204,204,204,204,252,0],u.t)
B.a2=t([204,204,204,204,204,120,48,0],u.t)
B.cQ=t([198,198,198,214,254,238,198,0],u.t)
B.cK=t([198,198,108,56,56,108,198,0],u.t)
B.a4=t([204,204,204,120,48,48,120,0],u.t)
B.T=t([254,198,140,24,50,102,254,0],u.t)
B.bx=t([120,96,96,96,96,96,120,0],u.t)
B.cC=t([192,96,48,24,12,6,2,0],u.t)
B.bz=t([120,24,24,24,24,24,120,0],u.t)
B.dq=t([16,56,108,198,0,0,0,0],u.t)
B.O=t([0,0,0,0,0,0,0,255],u.t)
B.aL=t([48,48,24,0,0,0,0,0],u.t)
B.dg=t([0,0,120,12,124,204,118,0],u.t)
B.cg=t([224,96,96,124,102,102,220,0],u.t)
B.cJ=t([0,0,120,204,192,204,120,0],u.t)
B.b6=t([28,12,12,124,204,204,118,0],u.t)
B.dt=t([0,0,120,204,252,192,120,0],u.t)
B.aQ=t([56,108,96,240,96,96,240,0],u.t)
B.cG=t([0,0,118,204,204,124,12,248],u.t)
B.aB=t([224,96,108,118,102,102,230,0],u.t)
B.cw=t([48,0,112,48,48,48,120,0],u.t)
B.bK=t([12,0,12,12,12,204,204,120],u.t)
B.bd=t([224,96,102,108,120,108,230,0],u.t)
B.bM=t([112,48,48,48,48,48,120,0],u.t)
B.bu=t([0,0,204,254,254,214,198,0],u.t)
B.bN=t([0,0,248,204,204,204,204,0],u.t)
B.bg=t([0,0,120,204,204,204,120,0],u.t)
B.dx=t([0,0,220,102,102,124,96,240],u.t)
B.du=t([0,0,118,204,204,124,12,30],u.t)
B.br=t([0,0,220,118,102,96,240,0],u.t)
B.d_=t([0,0,124,192,120,12,248,0],u.t)
B.cT=t([16,48,124,48,48,52,24,0],u.t)
B.ca=t([0,0,204,204,204,204,118,0],u.t)
B.b4=t([0,0,204,204,204,120,48,0],u.t)
B.bk=t([0,0,198,214,254,254,108,0],u.t)
B.bI=t([0,0,198,108,56,108,198,0],u.t)
B.dD=t([0,0,204,204,204,124,12,248],u.t)
B.de=t([0,0,252,152,48,100,252,0],u.t)
B.ba=t([28,48,48,224,48,48,28,0],u.t)
B.cZ=t([24,24,24,0,24,24,24,0],u.t)
B.aF=t([224,48,48,28,48,48,224,0],u.t)
B.dN=t([118,220,0,0,0,0,0,0],u.t)
B.b3=t([0,16,56,108,198,198,254,0],u.t)
B.aw=t([120,204,192,204,120,24,12,120],u.t)
B.dc=t([0,204,0,204,204,204,126,0],u.t)
B.dC=t([28,0,120,204,252,192,120,0],u.t)
B.c3=t([126,195,60,6,62,102,63,0],u.t)
B.aj=t([204,0,120,12,124,204,126,0],u.t)
B.b7=t([224,0,120,12,124,204,126,0],u.t)
B.a9=t([48,48,120,12,124,204,126,0],u.t)
B.bn=t([0,0,120,192,192,120,12,56],u.t)
B.dl=t([126,195,60,102,126,96,60,0],u.t)
B.aO=t([204,0,120,204,252,192,120,0],u.t)
B.d0=t([224,0,120,204,252,192,120,0],u.t)
B.dd=t([204,0,112,48,48,48,120,0],u.t)
B.cR=t([124,198,56,24,24,24,60,0],u.t)
B.b_=t([224,0,112,48,48,48,120,0],u.t)
B.dI=t([198,56,108,198,254,198,198,0],u.t)
B.cY=t([48,48,0,120,204,252,204,0],u.t)
B.bF=t([28,0,252,96,120,96,252,0],u.t)
B.dB=t([0,0,127,12,127,204,127,0],u.t)
B.aT=t([62,108,204,254,204,204,206,0],u.t)
B.dv=t([120,204,0,120,204,204,120,0],u.t)
B.af=t([0,204,0,120,204,204,120,0],u.t)
B.dK=t([0,224,0,120,204,204,120,0],u.t)
B.aR=t([120,204,0,204,204,204,126,0],u.t)
B.cU=t([0,224,0,204,204,204,126,0],u.t)
B.az=t([0,204,0,204,204,124,12,248],u.t)
B.al=t([195,24,60,102,102,60,24,0],u.t)
B.d6=t([204,0,204,204,204,204,120,0],u.t)
B.a_=t([24,24,126,192,192,126,24,24],u.t)
B.aI=t([56,108,100,240,96,230,252,0],u.t)
B.b1=t([204,204,120,252,48,252,48,48],u.t)
B.dh=t([248,204,204,250,198,207,198,199],u.t)
B.bQ=t([14,27,24,60,24,24,216,112],u.t)
B.aE=t([28,0,120,12,124,204,126,0],u.t)
B.cf=t([56,0,112,48,48,48,120,0],u.t)
B.aH=t([0,28,0,120,204,204,120,0],u.t)
B.cz=t([0,28,0,204,204,204,126,0],u.t)
B.aX=t([0,248,0,248,204,204,204,0],u.t)
B.cP=t([252,0,204,236,252,220,204,0],u.t)
B.ag=t([60,108,108,62,0,126,0,0],u.t)
B.cc=t([56,108,108,56,0,124,0,0],u.t)
B.d7=t([48,0,48,96,192,204,120,0],u.t)
B.aZ=t([0,0,0,252,192,192,0,0],u.t)
B.aG=t([0,0,0,252,12,12,0,0],u.t)
B.d1=t([195,198,204,222,51,102,204,15],u.t)
B.ay=t([195,198,204,219,55,111,207,3],u.t)
B.bT=t([24,24,0,24,24,24,24,0],u.t)
B.bS=t([0,51,102,204,102,51,0,0],u.t)
B.bc=t([0,204,102,51,102,204,0,0],u.t)
B.cB=t([34,136,34,136,34,136,34,136],u.t)
B.dw=t([85,170,85,170,85,170,85,170],u.t)
B.bL=t([219,119,219,238,219,119,219,238],u.t)
B.b2=t([24,24,24,24,24,24,24,24],u.t)
B.aY=t([24,24,24,24,248,24,24,24],u.t)
B.c_=t([24,24,248,24,248,24,24,24],u.t)
B.dM=t([54,54,54,54,246,54,54,54],u.t)
B.cn=t([0,0,0,0,254,54,54,54],u.t)
B.aU=t([0,0,248,24,248,24,24,24],u.t)
B.ad=t([54,54,246,6,246,54,54,54],u.t)
B.ct=t([54,54,54,54,54,54,54,54],u.t)
B.cb=t([0,0,254,6,246,54,54,54],u.t)
B.cx=t([54,54,246,6,254,0,0,0],u.t)
B.ar=t([54,54,54,54,254,0,0,0],u.t)
B.a3=t([24,24,248,24,248,0,0,0],u.t)
B.a8=t([0,0,0,0,248,24,24,24],u.t)
B.a1=t([24,24,24,24,31,0,0,0],u.t)
B.bY=t([24,24,24,24,255,0,0,0],u.t)
B.bp=t([0,0,0,0,255,24,24,24],u.t)
B.d5=t([24,24,24,24,31,24,24,24],u.t)
B.bW=t([0,0,0,0,255,0,0,0],u.t)
B.cu=t([24,24,24,24,255,24,24,24],u.t)
B.cF=t([24,24,31,24,31,24,24,24],u.t)
B.be=t([54,54,54,54,55,54,54,54],u.t)
B.ds=t([54,54,55,48,63,0,0,0],u.t)
B.dk=t([0,0,63,48,55,54,54,54],u.t)
B.bJ=t([54,54,247,0,255,0,0,0],u.t)
B.by=t([0,0,255,0,247,54,54,54],u.t)
B.aW=t([54,54,55,48,55,54,54,54],u.t)
B.aV=t([0,0,255,0,255,0,0,0],u.t)
B.dE=t([54,54,247,0,247,54,54,54],u.t)
B.cL=t([24,24,255,0,255,0,0,0],u.t)
B.M=t([54,54,54,54,255,0,0,0],u.t)
B.dy=t([0,0,255,0,255,24,24,24],u.t)
B.c5=t([0,0,0,0,255,54,54,54],u.t)
B.co=t([54,54,54,54,63,0,0,0],u.t)
B.bt=t([24,24,31,24,31,0,0,0],u.t)
B.ci=t([0,0,31,24,31,24,24,24],u.t)
B.cI=t([0,0,0,0,63,54,54,54],u.t)
B.cO=t([54,54,54,54,255,54,54,54],u.t)
B.bO=t([24,24,255,24,255,24,24,24],u.t)
B.di=t([24,24,24,24,248,0,0,0],u.t)
B.b9=t([0,0,0,0,31,24,24,24],u.t)
B.c6=t([255,255,255,255,255,255,255,255],u.t)
B.c9=t([0,0,0,0,255,255,255,255],u.t)
B.bj=t([240,240,240,240,240,240,240,240],u.t)
B.cq=t([15,15,15,15,15,15,15,15],u.t)
B.d4=t([255,255,255,255,0,0,0,0],u.t)
B.dL=t([0,0,118,220,200,220,118,0],u.t)
B.dn=t([0,120,204,248,204,248,192,192],u.t)
B.ap=t([0,252,204,192,192,192,192,0],u.t)
B.c8=t([0,254,108,108,108,108,108,0],u.t)
B.dj=t([252,204,96,48,96,204,252,0],u.t)
B.bm=t([0,0,126,216,216,216,112,0],u.t)
B.bs=t([0,102,102,102,102,124,96,192],u.t)
B.cD=t([0,118,220,24,24,24,24,0],u.t)
B.ai=t([252,48,120,204,204,120,48,252],u.t)
B.aJ=t([56,108,198,254,198,108,56,0],u.t)
B.am=t([56,108,198,198,108,108,238,0],u.t)
B.N=t([28,48,24,124,204,204,120,0],u.t)
B.dz=t([0,0,126,219,219,126,0,0],u.t)
B.bo=t([6,12,126,219,219,126,96,192],u.t)
B.ab=t([56,96,192,248,192,96,56,0],u.t)
B.ck=t([120,204,204,204,204,204,204,0],u.t)
B.cM=t([0,252,0,252,0,252,0,0],u.t)
B.a7=t([48,48,252,48,48,0,252,0],u.t)
B.bb=t([96,48,24,48,96,0,252,0],u.t)
B.cW=t([24,48,96,48,24,0,252,0],u.t)
B.bi=t([14,27,27,24,24,24,24,24],u.t)
B.db=t([24,24,24,24,24,216,216,112],u.t)
B.ce=t([48,48,0,252,0,48,48,0],u.t)
B.S=t([0,118,220,0,118,220,0,0],u.t)
B.cA=t([56,108,108,56,0,0,0,0],u.t)
B.U=t([0,0,0,24,24,0,0,0],u.t)
B.dp=t([0,0,0,0,24,0,0,0],u.t)
B.X=t([15,12,12,12,236,108,60,28],u.t)
B.bX=t([120,108,108,108,108,0,0,0],u.t)
B.av=t([112,24,48,96,120,0,0,0],u.t)
B.d3=t([0,0,60,60,60,60,0,0],u.t)
B.dP=new A.aq(["\u263a",B.da,"\u263b",B.ac,"\u2665",B.dH,"\u2666",B.c7,"\u2663",B.b5,"\u2660",B.bh,"\u2022",B.aA,"\u25d8",B.aD,"\u25cb",B.aP,"\u25d9",B.cV,"\u2642",B.dG,"\u2640",B.dF,"\u266a",B.cS,"\u266b",B.W,"\u263c",B.a0,"\u25ba",B.ax,"\u25c4",B.bD,"\u2195",B.cl,"\u203c",B.ch,"\xb6",B.cr,"\xa7",B.cs,"\u25ac",B.bR,"\u21a8",B.bU,"\u2191",B.R,"\u2193",B.df,"\u2192",B.d8,"\u2190",B.au,"\u221f",B.bZ,"\u2194",B.bw,"\u25b2",B.aa,"\u25bc",B.bV," ",B.b0,"!",B.bE,'"',B.Z,"#",B.ao,"$",B.c2,"%",B.Q,"&",B.cE,"'",B.an,"(",B.V,")",B.bA,"*",B.cv,"+",B.dO,",",B.c4,"-",B.bv,".",B.cj,"/",B.a5,"0",B.b8,"1",B.cm,"2",B.c0,"3",B.dJ,"4",B.bC,"5",B.d9,"6",B.dr,"7",B.c1,"8",B.cy,"9",B.bf,":",B.d2,";",B.aS,"<",B.bB,"=",B.bq,">",B.aC,"?",B.as,"@",B.dm,"A",B.cd,"B",B.aM,"C",B.ae,"D",B.a6,"E",B.ak,"F",B.cp,"G",B.aq,"H",B.at,"I",B.cN,"J",B.bP,"K",B.bH,"L",B.bG,"M",B.aN,"N",B.Y,"O",B.cX,"P",B.bl,"Q",B.cH,"R",B.P,"S",B.ah,"T",B.dA,"U",B.aK,"V",B.a2,"W",B.cQ,"X",B.cK,"Y",B.a4,"Z",B.T,"[",B.bx,"\\",B.cC,"]",B.bz,"^",B.dq,"_",B.O,"`",B.aL,"a",B.dg,"b",B.cg,"c",B.cJ,"d",B.b6,"e",B.dt,"f",B.aQ,"g",B.cG,"h",B.aB,"i",B.cw,"j",B.bK,"k",B.bd,"l",B.bM,"m",B.bu,"n",B.bN,"o",B.bg,"p",B.dx,"q",B.du,"r",B.br,"s",B.d_,"t",B.cT,"u",B.ca,"v",B.b4,"w",B.bk,"x",B.bI,"y",B.dD,"z",B.de,"{",B.ba,"|",B.cZ,"}",B.aF,"~",B.dN,"\u2302",B.b3,"\xc7",B.aw,"\xfc",B.dc,"\xe9",B.dC,"\xe2",B.c3,"\xe4",B.aj,"\xe0",B.b7,"\xe5",B.a9,"\xe7",B.bn,"\xea",B.dl,"\xeb",B.aO,"\xe8",B.d0,"\xef",B.dd,"\xee",B.cR,"\xec",B.b_,"\xc4",B.dI,"\xc5",B.cY,"\xc9",B.bF,"\xe6",B.dB,"\xc6",B.aT,"\xf4",B.dv,"\xf6",B.af,"\xf2",B.dK,"\xfb",B.aR,"\xf9",B.cU,"\xff",B.az,"\xd6",B.al,"\xdc",B.d6,"\xa2",B.a_,"\xa3",B.aI,"\xa5",B.b1,"\u20a7",B.dh,"\u0192",B.bQ,"\xe1",B.aE,"\xed",B.cf,"\xf3",B.aH,"\xfa",B.cz,"\xf1",B.aX,"\xd1",B.cP,"\xaa",B.ag,"\xba",B.cc,"\xbf",B.d7,"\u2310",B.aZ,"\xac",B.aG,"\xbd",B.d1,"\xbc",B.ay,"\xa1",B.bT,"\xab",B.bS,"\xbb",B.bc,"\u2591",B.cB,"\u2592",B.dw,"\u2593",B.bL,"\u2502",B.b2,"\u2524",B.aY,"\u2561",B.c_,"\u2562",B.dM,"\u2556",B.cn,"\u2555",B.aU,"\u2563",B.ad,"\u2551",B.ct,"\u2557",B.cb,"\u255d",B.cx,"\u255c",B.ar,"\u255b",B.a3,"\u2510",B.a8,"\u2514",B.a1,"\u2534",B.bY,"\u252c",B.bp,"\u251c",B.d5,"\u2500",B.bW,"\u253c",B.cu,"\u255e",B.cF,"\u255f",B.be,"\u255a",B.ds,"\u2554",B.dk,"\u2569",B.bJ,"\u2566",B.by,"\u2560",B.aW,"\u2550",B.aV,"\u256c",B.dE,"\u2567",B.cL,"\u2568",B.M,"\u2564",B.dy,"\u2565",B.c5,"\u2559",B.co,"\u2558",B.bt,"\u2552",B.ci,"\u2553",B.cI,"\u256b",B.cO,"\u256a",B.bO,"\u2518",B.di,"\u250c",B.b9,"\u2588",B.c6,"\u2584",B.c9,"\u258c",B.bj,"\u2590",B.cq,"\u2580",B.d4,"\u03b1",B.dL,"\xdf",B.dn,"\u0393",B.ap,"\u03c0",B.c8,"\u03a3",B.dj,"\u03c3",B.bm,"\xb5",B.bs,"\u03c4",B.cD,"\u03a6",B.ai,"\u0398",B.aJ,"\u03a9",B.am,"\u03b4",B.N,"\u221e",B.dz,"\u03c6",B.bo,"\u03b5",B.ab,"\u2229",B.ck,"\u2261",B.cM,"\xb1",B.a7,"\u2265",B.bb,"\u2264",B.cW,"\u2320",B.bi,"\u2321",B.db,"\xf7",B.ce,"\u2248",B.S,"\xb0",B.cA,"\u2219",B.U,"\xb7",B.dp,"\u221a",B.X,"\u207f",B.bX,"\xb2",B.av,"\u25a0",B.d3],A.cO("aq<A,f<b>>"))
B.dQ=new A.c6(0,"replace")
B.dV=new A.bE(0,"ready")
B.dW=new A.bE(2,"awaitingString")
B.dX=A.B("hH")
B.dY=A.B("hI")
B.dZ=A.B("eJ")
B.e_=A.B("eK")
B.e0=A.B("eN")
B.e1=A.B("eO")
B.e2=A.B("eP")
B.e3=A.B("k")
B.e4=A.B("f3")
B.e5=A.B("cu")
B.e6=A.B("f4")
B.e7=A.B("f5")})();(function staticFields(){$.cD=null
$.w=A.o([],u.f)
$.dB=null
$.ds=null
$.dr=null
$.ed=null
$.e5=null
$.eg=null
$.cN=null
$.cT=null
$.dj=null
$.aV=A.o([],A.cO("h<f<k>?>"))
$.ae=null
$.b4=null
$.b5=null
$.de=!1
$.bK=B.h
$.D=A.eY([38,!1,40,!1,37,!1,39,!1,13,!1],u.S,u.y)})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal
t($,"hK","ej",()=>A.cP("_$dart_dartClosure"))
t($,"hJ","cV",()=>A.cP("_$dart_dartClosure_dartJSInterop"))
t($,"i3","ew",()=>A.o([new J.bk()],A.cO("h<aJ>")))
t($,"hS","em",()=>A.F(A.ct({
toString:function(){return"$receiver$"}})))
t($,"hT","en",()=>A.F(A.ct({$method$:null,
toString:function(){return"$receiver$"}})))
t($,"hU","eo",()=>A.F(A.ct(null)))
t($,"hV","ep",()=>A.F(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(s){return s.message}}()))
t($,"hY","es",()=>A.F(A.ct(void 0)))
t($,"hZ","et",()=>A.F(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(s){return s.message}}()))
t($,"hX","er",()=>A.F(A.dK(null)))
t($,"hW","eq",()=>A.F(function(){try{null.$method$}catch(s){return s.message}}()))
t($,"i0","ev",()=>A.F(A.dK(void 0)))
t($,"i_","eu",()=>A.F(function(){try{(void 0).$method$}catch(s){return s.message}}()))
t($,"i1","dn",()=>A.f6())
t($,"i2","cW",()=>A.dm(B.e3))
t($,"hR","el",()=>A.d1(8,0,!1,u.S))
t($,"hQ","ek",()=>A.d1(8,255,!1,u.S))
t($,"i5","ex",()=>{var s=A.fJ(A.hq(A.hD(),"document"),"querySelector","#bounce")
return s==null?A.O(s):s})})();(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(hunkHelpers.convertToFastObject(n))[0]}
v.getIsolateTag=function(a){return t("___dart_"+a+v.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
v.isolateTag=o
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.a6,SharedArrayBuffer:A.a6,ArrayBufferView:A.aF,DataView:A.bq,Float32Array:A.br,Float64Array:A.bs,Int16Array:A.bt,Int32Array:A.bu,Int8Array:A.bv,Uint16Array:A.bw,Uint32Array:A.bx,Uint8ClampedArray:A.aG,CanvasPixelArray:A.aG,Uint8Array:A.by})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.a7.$nativeSuperclassTag="ArrayBufferView"
A.aR.$nativeSuperclassTag="ArrayBufferView"
A.aS.$nativeSuperclassTag="ArrayBufferView"
A.aD.$nativeSuperclassTag="ArrayBufferView"
A.aT.$nativeSuperclassTag="ArrayBufferView"
A.aU.$nativeSuperclassTag="ArrayBufferView"
A.aE.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r){t[r].removeEventListener("load",onLoad,false)}a(b.target)}for(var s=0;s<t.length;++s){t[s].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var t=A.hA
if(typeof dartMainRunner==="function"){dartMainRunner(t,[])}else{t([])}})})()
//# sourceMappingURL=bounce.js.map
