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
if(a[b]!==t){A.hn(b)}a[b]=s}var r=a[b]
a[c]=function(){return r}
return r}}function makeConstList(a){a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t){convertToFastObject(a[t])}}var y=0
function instanceTearOffGetter(a,b){var t=null
return a?function(c){if(t===null)t=A.d8(b)
return new t(c,this)}:function(){if(t===null)t=A.d8(b)
return new t(this,null)}}function staticTearOffGetter(a){var t=null
return function(){if(t===null)t=A.d8(a).prototype
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
dd(a,b,c,d){return{i:a,p:b,e:c,x:d}},
da(a){var t,s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.db==null){A.he()
o=a[v.dispatchPropertyName]}if(o!=null){t=o.p
if(!1===t)return o.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return o.i
if(o.e===s)throw A.e(A.dD("Return interceptor for "+A.k(t(a,o))))}r=a.constructor
if(r==null)q=null
else{p=$.cu
if(p==null)p=$.cu=v.getIsolateTag("_$dart_js")
q=r[p]}if(q!=null)return q
q=A.hi(a)
if(q!=null)return q
if(typeof a=="function")return B.M
t=Object.getPrototypeOf(a)
if(t==null)return B.z
if(t===Object.prototype)return B.z
if(typeof r=="function"){p=$.cu
if(p==null)p=$.cu=v.getIsolateTag("_$dart_js")
Object.defineProperty(r,p,{value:B.m,enumerable:false,writable:true,configurable:true})
return B.m}return B.m},
eH(a,b){if(a>4294967295)throw A.e(A.dv(a,0,4294967295,"length",null))
return J.eJ(new Array(a),b)},
eI(a,b){return A.a(new Array(a),b.i("i<0>"))},
eJ(a,b){var t=A.a(a,b.i("i<0>"))
t.$flags=1
return t},
dq(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
eK(a,b){var t,s
for(t=a.length;b<t;){s=a.charCodeAt(b)
if(s!==32&&s!==13&&!J.dq(s))break;++b}return b},
eL(a,b){var t,s,r
for(t=a.length;b>0;b=s){s=b-1
if(!(s<t))return A.b(a,s)
r=a.charCodeAt(s)
if(r!==32&&r!==13&&!J.dq(r))break}return b},
U(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ao.prototype
return J.bd.prototype}if(typeof a=="string")return J.a_.prototype
if(a==null)return J.ap.prototype
if(typeof a=="boolean")return J.bc.prototype
if(Array.isArray(a))return J.i.prototype
if(typeof a!="object"){if(typeof a=="function")return J.I.prototype
if(typeof a=="symbol")return J.as.prototype
if(typeof a=="bigint")return J.aq.prototype
return a}if(a instanceof A.o)return a
return J.da(a)},
e4(a){if(typeof a=="string")return J.a_.prototype
if(a==null)return a
if(Array.isArray(a))return J.i.prototype
if(typeof a!="object"){if(typeof a=="function")return J.I.prototype
if(typeof a=="symbol")return J.as.prototype
if(typeof a=="bigint")return J.aq.prototype
return a}if(a instanceof A.o)return a
return J.da(a)},
h6(a){if(a==null)return a
if(Array.isArray(a))return J.i.prototype
if(typeof a!="object"){if(typeof a=="function")return J.I.prototype
if(typeof a=="symbol")return J.as.prototype
if(typeof a=="bigint")return J.aq.prototype
return a}if(a instanceof A.o)return a
return J.da(a)},
h7(a){if(typeof a=="number")return J.Z.prototype
if(a==null)return a
if(!(a instanceof A.o))return J.a7.prototype
return a},
ae(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.U(a).I(a,b)},
z(a){return J.U(a).gm(a)},
af(a){return J.h6(a).gv(a)},
cM(a){return J.e4(a).gq(a)},
en(a){return J.U(a).gt(a)},
dg(a){return J.h7(a).bg(a)},
b0(a){return J.U(a).h(a)},
bb:function bb(){},
bc:function bc(){},
ap:function ap(){},
ar:function ar(){},
J:function J(){},
bt:function bt(){},
a7:function a7(){},
I:function I(){},
aq:function aq(){},
as:function as(){},
i:function i(a){this.$ti=a},
bT:function bT(a){this.$ti=a},
b1:function b1(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
Z:function Z(){},
ao:function ao(){},
bd:function bd(){},
a_:function a_(){}},A={cQ:function cQ(){},
eM(a){return new A.au("Field '"+a+"' has not been initialized.")},
K(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
cX(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
e0(a,b,c){return a},
dc(a){var t,s
for(t=$.v.length,s=0;s<t;++s)if(a===$.v[s])return!0
return!1},
dz(a,b,c){var t="takeCount"
A.eo(b,t)
A.dw(b,t)
return new A.aj(a,b,c.i("aj<0>"))},
eC(a,b,c){return new A.ah(a,b,c.i("ah<0>"))},
cO(){return new A.aG("No element")},
au:function au(a){this.a=a},
c5:function c5(){},
ai:function ai(){},
bh:function bh(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aI:function aI(a,b,c){this.a=a
this.b=b
this.$ti=c},
aj:function aj(a,b,c){this.a=a
this.b=b
this.$ti=c},
by:function by(a,b,c){this.a=a
this.b=b
this.$ti=c},
am:function am(a,b,c){this.a=a
this.b=b
this.$ti=c},
ah:function ah(a,b,c){this.a=a
this.b=b
this.$ti=c},
an:function an(a,b){this.a=a
this.b=b
this.c=-1},
ak:function ak(){},
e9(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
hL(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.p.b(a)},
k(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.b0(a)
return t},
aE(a){var t,s=$.dt
if(s==null)s=$.dt=Symbol("identityHashCode")
t=a[s]
if(t==null){t=Math.random()*0x3fffffff|0
a[s]=t}return t},
c_(a){var t,s,r,q
if(a instanceof A.o)return A.u(A.b_(a),null)
t=J.U(a)
if(t===B.K||t===B.N||u.A.b(a)){s=B.n(a)
if(s!=="Object"&&s!=="")return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&q!=="Object"&&q!=="")return q}}return A.u(A.b_(a),null)},
du(a){if(a==null||typeof a=="number"||A.d4(a))return J.b0(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.O)return a.h(0)
if(a instanceof A.a9)return a.av(!0)
return"Instance of '"+A.c_(a)+"'"},
b(a,b){if(a==null)J.cM(a)
throw A.e(A.e2(a,b))},
e2(a,b){var t,s="index"
if(!A.dV(b))return new A.G(!0,b,s,null)
t=J.cM(a)
if(b<0||b>=t)return A.dp(b,t,a,s)
return new A.a4(null,null,!0,b,s,"Value not in range")},
d7(a){return new A.G(!0,a,null,null)},
e(a){return A.r(a,new Error())},
r(a,b){var t
if(a==null)a=new A.aJ()
b.dartException=a
t=A.ho
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:t})
b.name=""}else b.toString=t
return b},
ho(){return J.b0(this.dartException)},
X(a,b){throw A.r(a,b==null?new Error():b)},
bN(a,b,c){var t
if(b==null)b=0
if(c==null)c=0
t=Error()
A.X(A.fw(a,b,c),t)},
fw(a,b,c){var t,s,r,q,p,o,n,m,l
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
return new A.aK("'"+t+"': Cannot "+p+" "+m+l+o)},
bM(a){throw A.e(A.Y(a))},
E(a){var t,s,r,q,p,o
a=A.hl(a.replace(String({}),"$receiver$"))
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=A.a([],u.s)
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new A.cj(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),s,r,q,p,o)},
ck(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
dC(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
cR(a,b){var t=b==null,s=t?null:b.method
return new A.be(a,s,t?null:b.receiver)},
hp(a){if(a==null)return new A.bY(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.W(a,a.dartException)
return A.fY(a)},
W(a,b){if(u.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
fY(a){var t,s,r,q,p,o,n,m,l,k,j,i,h
if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((B.a.aY(s,16)&8191)===10)switch(r){case 438:return A.W(a,A.cR(A.k(t)+" (Error "+r+")",null))
case 445:case 5007:A.k(t)
return A.W(a,new A.aD())}}if(a instanceof TypeError){q=$.ec()
p=$.ed()
o=$.ee()
n=$.ef()
m=$.ei()
l=$.ej()
k=$.eh()
$.eg()
j=$.el()
i=$.ek()
h=q.D(t)
if(h!=null)return A.W(a,A.cR(t,h))
else{h=p.D(t)
if(h!=null){h.method="call"
return A.W(a,A.cR(t,h))}else if(o.D(t)!=null||n.D(t)!=null||m.D(t)!=null||l.D(t)!=null||k.D(t)!=null||n.D(t)!=null||j.D(t)!=null||i.D(t)!=null)return A.W(a,new A.aD())}return A.W(a,new A.bA(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new A.aF()
t=function(b){try{return String(b)}catch(g){}return null}(a)
return A.W(a,new A.G(!1,null,null,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new A.aF()
return a},
hb(a){var t
if(a==null)return new A.bI(a)
t=a.$cachedTrace
if(t!=null)return t
t=new A.bI(a)
if(typeof a==="object")a.$cachedTrace=t
return t},
de(a){if(a==null)return J.z(a)
if(typeof a=="object")return A.aE(a)
return J.z(a)},
h1(a){if(typeof a=="number")return B.L.gm(a)
if(a instanceof A.bJ)return A.aE(a)
if(a instanceof A.a9)return a.gm(a)
return A.de(a)},
e3(a,b){var t,s,r,q=a.length
for(t=0;t<q;t=r){s=t+1
r=s+1
b.T(0,a[t],a[s])}return b},
h5(a,b){var t,s=a.length
for(t=0;t<s;++t)b.u(0,a[t])
return b},
fE(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.e(A.ey("Unsupported number of arguments for wrapped closure"))},
bL(a,b){var t=a.$identity
if(!!t)return t
t=A.h2(a,b)
a.$identity=t
return t},
h2(a,b){var t
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.fE)},
ev(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.c7().constructor.prototype):Object.create(new A.ag(null,null).constructor.prototype)
t.$initialize=t.constructor
s=i?function static_tear_off(){this.$initialize()}:function tear_off(a2,a3){this.$initialize(a2,a3)}
t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=A.dl(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.er(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.dl(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
er(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.e("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.ep)}throw A.e("Error in functionType of tearoff")},
es(a,b,c,d){var t=A.dk
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
dl(a,b,c,d){if(c)return A.eu(a,b,d)
return A.es(b.length,d,a,b)},
et(a,b,c,d){var t=A.dk,s=A.eq
switch(b?-1:a){case 0:throw A.e(new A.bu("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
eu(a,b,c){var t,s
if($.di==null)$.di=A.dh("interceptor")
if($.dj==null)$.dj=A.dh("receiver")
t=b.length
s=A.et(t,c,a,b)
return s},
d8(a){return A.ev(a)},
ep(a,b){return A.aW(v.typeUniverse,A.b_(a.a),b)},
dk(a){return a.a},
eq(a){return a.b},
dh(a){var t,s,r,q=new A.ag("receiver","interceptor"),p=Object.getOwnPropertyNames(q)
p.$flags=1
t=p
for(p=t.length,s=0;s<p;++s){r=t[s]
if(q[r]===a)return r}throw A.e(A.cN("Field name "+a+" not found."))},
h8(a){return v.getIsolateTag(a)},
hm(){return v.G},
hi(a){var t,s,r,q,p,o=$.e5.$1(a),n=$.cE[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.cI[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=$.dY.$2(a,o)
if(r!=null){n=$.cE[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.cI[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=A.cJ(t)
$.cE[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.cI[o]=t
return t}if(q==="-"){p=A.cJ(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return A.e7(a,t)
if(q==="*")throw A.e(A.dD(o))
if(v.leafTags[o]===true){p=A.cJ(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return A.e7(a,t)},
e7(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.dd(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
cJ(a){return J.dd(a,!1,null,!!a.$it)},
hk(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return A.cJ(t)
else return J.dd(t,c,null,null)},
he(){if(!0===$.db)return
$.db=!0
A.hf()},
hf(){var t,s,r,q,p,o,n,m
$.cE=Object.create(null)
$.cI=Object.create(null)
A.hd()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.e8.$1(p)
if(o!=null){n=A.hk(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
hd(){var t,s,r,q,p,o,n=B.C()
n=A.ac(B.D,A.ac(B.E,A.ac(B.o,A.ac(B.o,A.ac(B.F,A.ac(B.G,A.ac(B.H(B.n),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(Array.isArray(t))for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.e5=new A.cF(q)
$.dY=new A.cG(p)
$.e8=new A.cH(o)},
ac(a,b){return a(b)||b},
h3(a,b){var t=b.length,s=v.rttc[""+t+";"+a]
if(s==null)return null
if(t===0)return s
if(t===s.length)return s.apply(null,b)
return s(b)},
hl(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
d:function d(a,b){this.a=a
this.b=b},
b6:function b6(){},
al:function al(a,b){this.a=a
this.$ti=b},
cj:function cj(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aD:function aD(){},
be:function be(a,b,c){this.a=a
this.b=b
this.c=c},
bA:function bA(a){this.a=a},
bY:function bY(a){this.a=a},
bI:function bI(a){this.a=a
this.b=null},
O:function O(){},
bO:function bO(){},
bP:function bP(){},
c8:function c8(){},
c7:function c7(){},
ag:function ag(a,b){this.a=a
this.b=b},
bu:function bu(a){this.a=a},
D:function D(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bV:function bV(a,b){this.a=a
this.b=b
this.c=null},
aw:function aw(a,b){this.a=a
this.$ti=b},
bg:function bg(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
av:function av(a,b){this.a=a
this.$ti=b},
bf:function bf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
at:function at(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cF:function cF(a){this.a=a},
cG:function cG(a){this.a=a},
cH:function cH(a){this.a=a},
a9:function a9(){},
bH:function bH(){},
R(a,b,c){if(a>>>0!==a||a>=c)throw A.e(A.e2(b,a))},
bi:function bi(){},
aA:function aA(){},
bj:function bj(){},
a2:function a2(){},
ay:function ay(){},
az:function az(){},
bk:function bk(){},
bl:function bl(){},
bm:function bm(){},
bn:function bn(){},
bo:function bo(){},
bp:function bp(){},
bq:function bq(){},
aB:function aB(){},
br:function br(){},
aL:function aL(){},
aM:function aM(){},
aN:function aN(){},
aO:function aO(){},
cU(a,b){var t=b.c
return t==null?b.c=A.aU(a,"dn",[b.x]):t},
dx(a){var t=a.w
if(t===6||t===7)return A.dx(a.x)
return t===11||t===12},
eR(a){return a.as},
d9(a){return A.cA(v.typeUniverse,a,!1)},
S(a0,a1,a2,a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a1.w
switch(a){case 5:case 1:case 2:case 3:case 4:return a1
case 6:t=a1.x
s=A.S(a0,t,a2,a3)
if(s===t)return a1
return A.dN(a0,s,!0)
case 7:t=a1.x
s=A.S(a0,t,a2,a3)
if(s===t)return a1
return A.dM(a0,s,!0)
case 8:r=a1.y
q=A.ab(a0,r,a2,a3)
if(q===r)return a1
return A.aU(a0,a1.x,q)
case 9:p=a1.x
o=A.S(a0,p,a2,a3)
n=a1.y
m=A.ab(a0,n,a2,a3)
if(o===p&&m===n)return a1
return A.d_(a0,o,m)
case 10:l=a1.x
k=a1.y
j=A.ab(a0,k,a2,a3)
if(j===k)return a1
return A.dO(a0,l,j)
case 11:i=a1.x
h=A.S(a0,i,a2,a3)
g=a1.y
f=A.fV(a0,g,a2,a3)
if(h===i&&f===g)return a1
return A.dL(a0,h,f)
case 12:e=a1.y
a3+=e.length
d=A.ab(a0,e,a2,a3)
p=a1.x
o=A.S(a0,p,a2,a3)
if(d===e&&o===p)return a1
return A.d0(a0,o,d,!0)
case 13:c=a1.x
if(c<a3)return a1
b=a2[c-a3]
if(b==null)return a1
return b
default:throw A.e(A.b3("Attempted to substitute unexpected RTI kind "+a))}},
ab(a,b,c,d){var t,s,r,q,p=b.length,o=A.cB(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.S(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
fW(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.cB(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.S(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
fV(a,b,c,d){var t,s=b.a,r=A.ab(a,s,c,d),q=b.b,p=A.ab(a,q,c,d),o=b.c,n=A.fW(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.bG()
t.a=r
t.b=p
t.c=n
return t},
a(a,b){a[v.arrayRti]=b
return a},
e1(a){var t=a.$S
if(t!=null){if(typeof t=="number")return A.hc(t)
return a.$S()}return null},
hg(a,b){var t
if(A.dx(b))if(a instanceof A.O){t=A.e1(a)
if(t!=null)return t}return A.b_(a)},
b_(a){if(a instanceof A.o)return A.bK(a)
if(Array.isArray(a))return A.d1(a)
return A.d3(J.U(a))},
d1(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
bK(a){var t=a.$ti
return t!=null?t:A.d3(a)},
d3(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.fD(a,t)},
fD(a,b){var t=a instanceof A.O?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,s=A.ff(v.typeUniverse,t.name)
b.$ccache=s
return s},
hc(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.cA(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
ha(a){return A.T(A.bK(a))},
d6(a){var t
if(a instanceof A.a9)return A.h4(a.$r,a.ap())
t=a instanceof A.O?A.e1(a):null
if(t!=null)return t
if(u.k.b(a))return J.en(a).a
if(Array.isArray(a))return A.d1(a)
return A.b_(a)},
T(a){var t=a.r
return t==null?a.r=new A.bJ(a):t},
h4(a,b){var t,s,r=b,q=r.length
if(q===0)return u.F
if(0>=q)return A.b(r,0)
t=A.aW(v.typeUniverse,A.d6(r[0]),"@<0>")
for(s=1;s<q;++s){if(!(s<r.length))return A.b(r,s)
t=A.dP(v.typeUniverse,t,A.d6(r[s]))}return A.aW(v.typeUniverse,t,a)},
y(a){return A.T(A.cA(v.typeUniverse,a,!1))},
fC(a){var t,s,r,q,p=this
if(p===u.K)return A.F(p,a,A.fJ)
if(A.V(p))return A.F(p,a,A.fN)
t=p.w
if(t===6)return A.F(p,a,A.fA)
if(t===1)return A.F(p,a,A.dW)
if(t===7)return A.F(p,a,A.fF)
if(p===u.S)s=A.dV
else if(p===u.i||p===u.H)s=A.fI
else if(p===u.N)s=A.fL
else s=p===u.y?A.d4:null
if(s!=null)return A.F(p,a,s)
if(t===8){r=p.x
if(p.y.every(A.V)){p.f="$i"+r
if(r==="h")return A.F(p,a,A.fH)
return A.F(p,a,A.fM)}}else if(t===10){q=A.h3(p.x,p.y)
return A.F(p,a,q==null?A.dW:q)}return A.F(p,a,A.fy)},
F(a,b,c){a.b=c
return a.b(b)},
fB(a){var t=this,s=A.fx
if(A.V(t))s=A.fs
else if(t===u.K)s=A.fp
else if(A.ad(t))s=A.fz
if(t===u.S)s=A.fl
else if(t===u.x)s=A.fm
else if(t===u.N)s=A.fq
else if(t===u.w)s=A.fr
else if(t===u.y)s=A.fh
else if(t===u.u)s=A.fi
else if(t===u.H)s=A.fn
else if(t===u.B)s=A.fo
else if(t===u.i)s=A.fj
else if(t===u.I)s=A.fk
t.a=s
return t.a(a)},
fy(a){var t=this
if(a==null)return A.ad(t)
return A.hh(v.typeUniverse,A.hg(a,t),t)},
fA(a){if(a==null)return!0
return this.x.b(a)},
fM(a){var t,s=this
if(a==null)return A.ad(s)
t=s.f
if(a instanceof A.o)return!!a[t]
return!!J.U(a)[t]},
fH(a){var t,s=this
if(a==null)return A.ad(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.f
if(a instanceof A.o)return!!a[t]
return!!J.U(a)[t]},
fx(a){var t=this
if(a==null){if(A.ad(t))return a}else if(t.b(a))return a
throw A.r(A.dS(a,t),new Error())},
fz(a){var t=this
if(a==null||t.b(a))return a
throw A.r(A.dS(a,t),new Error())},
dS(a,b){return new A.aS("TypeError: "+A.dE(a,A.u(b,null)))},
dE(a,b){return A.bQ(a)+": type '"+A.u(A.d6(a),null)+"' is not a subtype of type '"+b+"'"},
B(a,b){return new A.aS("TypeError: "+A.dE(a,b))},
fF(a){var t=this
return t.x.b(a)||A.cU(v.typeUniverse,t).b(a)},
fJ(a){return a!=null},
fp(a){if(a!=null)return a
throw A.r(A.B(a,"Object"),new Error())},
fN(a){return!0},
fs(a){return a},
dW(a){return!1},
d4(a){return!0===a||!1===a},
fh(a){if(!0===a)return!0
if(!1===a)return!1
throw A.r(A.B(a,"bool"),new Error())},
fi(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.r(A.B(a,"bool?"),new Error())},
fj(a){if(typeof a=="number")return a
throw A.r(A.B(a,"double"),new Error())},
fk(a){if(typeof a=="number")return a
if(a==null)return a
throw A.r(A.B(a,"double?"),new Error())},
dV(a){return typeof a=="number"&&Math.floor(a)===a},
fl(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.r(A.B(a,"int"),new Error())},
fm(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.r(A.B(a,"int?"),new Error())},
fI(a){return typeof a=="number"},
fn(a){if(typeof a=="number")return a
throw A.r(A.B(a,"num"),new Error())},
fo(a){if(typeof a=="number")return a
if(a==null)return a
throw A.r(A.B(a,"num?"),new Error())},
fL(a){return typeof a=="string"},
fq(a){if(typeof a=="string")return a
throw A.r(A.B(a,"String"),new Error())},
fr(a){if(typeof a=="string")return a
if(a==null)return a
throw A.r(A.B(a,"String?"),new Error())},
dX(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.u(a[r],b)
return t},
fQ(a,b){var t,s,r,q,p,o,n=a.x,m=a.y
if(""===n)return"("+A.dX(m,b)+")"
t=m.length
s=n.split(",")
r=s.length-t
for(q="(",p="",o=0;o<t;++o,p=", "){q+=p
if(r===0)q+="{"
q+=A.u(m[o],b)
if(r>=0)q+=" "+s[r];++r}return q+"})"},
dT(a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=", ",a1=null
if(a4!=null){t=a4.length
if(a3==null)a3=A.a([],u.s)
else a1=a3.length
s=a3.length
for(r=t;r>0;--r)a3.push("T"+(s+r))
for(q=u.X,p="<",o="",r=0;r<t;++r,o=a0){n=a3.length
m=n-1-r
if(!(m>=0))return A.b(a3,m)
p=p+o+a3[m]
l=a4[r]
k=l.w
if(!(k===2||k===3||k===4||k===5||l===q))p+=" extends "+A.u(l,a3)}p+=">"}else p=""
q=a2.x
j=a2.y
i=j.a
h=i.length
g=j.b
f=g.length
e=j.c
d=e.length
c=A.u(q,a3)
for(b="",a="",r=0;r<h;++r,a=a0)b+=a+A.u(i[r],a3)
if(f>0){b+=a+"["
for(a="",r=0;r<f;++r,a=a0)b+=a+A.u(g[r],a3)
b+="]"}if(d>0){b+=a+"{"
for(a="",r=0;r<d;r+=3,a=a0){b+=a
if(e[r+1])b+="required "
b+=A.u(e[r+2],a3)+" "+e[r]}b+="}"}if(a1!=null){a3.toString
a3.length=a1}return p+"("+b+") => "+c},
u(a,b){var t,s,r,q,p,o,n,m=a.w
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=a.x
s=A.u(t,b)
r=t.w
return(r===11||r===12?"("+s+")":s)+"?"}if(m===7)return"FutureOr<"+A.u(a.x,b)+">"
if(m===8){q=A.fX(a.x)
p=a.y
return p.length>0?q+("<"+A.dX(p,b)+">"):q}if(m===10)return A.fQ(a,b)
if(m===11)return A.dT(a,b,null)
if(m===12)return A.dT(a.x,b,a.y)
if(m===13){o=a.x
n=b.length
o=n-1-o
if(!(o>=0&&o<n))return A.b(b,o)
return b[o]}return"?"},
fX(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
fg(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
ff(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.cA(a,b,!1)
else if(typeof n=="number"){t=n
s=A.aV(a,5,"#")
r=A.cB(t)
for(q=0;q<t;++q)r[q]=s
p=A.aU(a,b,r)
o[b]=p
return p}else return n},
fe(a,b){return A.dQ(a.tR,b)},
fd(a,b){return A.dQ(a.eT,b)},
cA(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.dJ(A.dH(a,null,b,!1))
s.set(b,t)
return t},
aW(a,b,c){var t,s,r=b.z
if(r==null)r=b.z=new Map()
t=r.get(c)
if(t!=null)return t
s=A.dJ(A.dH(a,b,c,!0))
r.set(c,s)
return s},
dP(a,b,c){var t,s,r,q=b.Q
if(q==null)q=b.Q=new Map()
t=c.as
s=q.get(t)
if(s!=null)return s
r=A.d_(a,b,c.w===9?c.y:[c])
q.set(t,r)
return r},
L(a,b){b.a=A.fB
b.b=A.fC
return b},
aV(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.x(null,null)
t.w=b
t.as=c
s=A.L(a,t)
a.eC.set(c,s)
return s},
dN(a,b,c){var t,s=b.as+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.fb(a,b,s,c)
a.eC.set(s,t)
return t},
fb(a,b,c,d){var t,s,r
if(d){t=b.w
s=!0
if(!A.V(b))if(!(b===u.P||b===u.T))if(t!==6)s=t===7&&A.ad(b.x)
if(s)return b
else if(t===1)return u.P}r=new A.x(null,null)
r.w=6
r.x=b
r.as=c
return A.L(a,r)},
dM(a,b,c){var t,s=b.as+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.f9(a,b,s,c)
a.eC.set(s,t)
return t},
f9(a,b,c,d){var t,s
if(d){t=b.w
if(A.V(b)||b===u.K)return b
else if(t===1)return A.aU(a,"dn",[b])
else if(b===u.P||b===u.T)return u.Q}s=new A.x(null,null)
s.w=7
s.x=b
s.as=c
return A.L(a,s)},
fc(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.x(null,null)
t.w=13
t.x=b
t.as=r
s=A.L(a,t)
a.eC.set(r,s)
return s},
aT(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].as
return t},
f8(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
t+=s+q+p+a[r+2].as}return t},
aU(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.aT(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.x(null,null)
s.w=8
s.x=b
s.y=c
if(c.length>0)s.c=c[0]
s.as=q
r=A.L(a,s)
a.eC.set(q,r)
return r},
d_(a,b,c){var t,s,r,q,p,o
if(b.w===9){t=b.x
s=b.y.concat(c)}else{s=c
t=b}r=t.as+(";<"+A.aT(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.x(null,null)
p.w=9
p.x=t
p.y=s
p.as=r
o=A.L(a,p)
a.eC.set(r,o)
return o},
dO(a,b,c){var t,s,r="+"+(b+"("+A.aT(c)+")"),q=a.eC.get(r)
if(q!=null)return q
t=new A.x(null,null)
t.w=10
t.x=b
t.y=c
t.as=r
s=A.L(a,t)
a.eC.set(r,s)
return s},
dL(a,b,c){var t,s,r,q,p,o=b.as,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.aT(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.aT(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.f8(j)+"}"}s=o+(h+")")
r=a.eC.get(s)
if(r!=null)return r
q=new A.x(null,null)
q.w=11
q.x=b
q.y=c
q.as=s
p=A.L(a,q)
a.eC.set(s,p)
return p},
d0(a,b,c,d){var t,s=b.as+("<"+A.aT(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.fa(a,b,c,s,d)
a.eC.set(s,t)
return t},
fa(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.cB(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.w===1){s[q]=p;++r}}if(r>0){o=A.S(a,b,s,0)
n=A.ab(a,c,s,0)
return A.d0(a,o,n,c!==n)}}m=new A.x(null,null)
m.w=12
m.x=b
m.y=c
m.as=d
return A.L(a,m)},
dH(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
dJ(a){var t,s,r,q,p,o,n,m=a.r,l=a.s
for(t=m.length,s=0;s<t;){r=m.charCodeAt(s)
if(r>=48&&r<=57)s=A.f1(s+1,r,m,l)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124)s=A.dI(a,s,m,l,!1)
else if(r===46)s=A.dI(a,s,m,l,!0)
else{++s
switch(r){case 44:break
case 58:l.push(!1)
break
case 33:l.push(!0)
break
case 59:l.push(A.Q(a.u,a.e,l.pop()))
break
case 94:l.push(A.fc(a.u,l.pop()))
break
case 35:l.push(A.aV(a.u,5,"#"))
break
case 64:l.push(A.aV(a.u,2,"@"))
break
case 126:l.push(A.aV(a.u,3,"~"))
break
case 60:l.push(a.p)
a.p=l.length
break
case 62:A.f3(a,l)
break
case 38:A.f2(a,l)
break
case 63:q=a.u
l.push(A.dN(q,A.Q(q,a.e,l.pop()),a.n))
break
case 47:q=a.u
l.push(A.dM(q,A.Q(q,a.e,l.pop()),a.n))
break
case 40:l.push(-3)
l.push(a.p)
a.p=l.length
break
case 41:A.f0(a,l)
break
case 91:l.push(a.p)
a.p=l.length
break
case 93:p=l.splice(a.p)
A.dK(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-1)
break
case 123:l.push(a.p)
a.p=l.length
break
case 125:p=l.splice(a.p)
A.f5(a.u,a.e,p)
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
return A.Q(a.u,a.e,n)},
f1(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
dI(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36||s===124))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.w===9)p=p.x
o=A.fg(t,p.x)[q]
if(o==null)A.X('No "'+q+'" in "'+A.eR(p)+'"')
d.push(A.aW(t,p,o))}else d.push(q)
return n},
f3(a,b){var t,s=a.u,r=A.dG(a,b),q=b.pop()
if(typeof q=="string")b.push(A.aU(s,q,r))
else{t=A.Q(s,a.e,q)
switch(t.w){case 11:b.push(A.d0(s,t,r,a.n))
break
default:b.push(A.d_(s,t,r))
break}}},
f0(a,b){var t,s,r,q=a.u,p=b.pop(),o=null,n=null
if(typeof p=="number")switch(p){case-1:o=b.pop()
break
case-2:n=b.pop()
break
default:b.push(p)
break}else b.push(p)
t=A.dG(a,b)
p=b.pop()
switch(p){case-3:p=b.pop()
if(o==null)o=q.sEA
if(n==null)n=q.sEA
s=A.Q(q,a.e,p)
r=new A.bG()
r.a=t
r.b=o
r.c=n
b.push(A.dL(q,s,r))
return
case-4:b.push(A.dO(q,b.pop(),t))
return
default:throw A.e(A.b3("Unexpected state under `()`: "+A.k(p)))}},
f2(a,b){var t=b.pop()
if(0===t){b.push(A.aV(a.u,1,"0&"))
return}if(1===t){b.push(A.aV(a.u,4,"1&"))
return}throw A.e(A.b3("Unexpected extended operation "+A.k(t)))},
dG(a,b){var t=b.splice(a.p)
A.dK(a.u,a.e,t)
a.p=b.pop()
return t},
Q(a,b,c){if(typeof c=="string")return A.aU(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.f4(a,b,c)}else return c},
dK(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.Q(a,b,c[t])},
f5(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.Q(a,b,c[t])},
f4(a,b,c){var t,s,r=b.w
if(r===9){if(c===0)return b.x
t=b.y
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.x
r=b.w}else if(c===0)return b
if(r!==8)throw A.e(A.b3("Indexed base must be an interface type"))
t=b.y
if(c<=t.length)return t[c-1]
throw A.e(A.b3("Bad index "+c+" for "+b.h(0)))},
hh(a,b,c){var t,s=b.d
if(s==null)s=b.d=new Map()
t=s.get(c)
if(t==null){t=A.m(a,b,null,c,null)
s.set(c,t)}return t},
m(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(A.V(d))return!0
t=b.w
if(t===4)return!0
if(A.V(b))return!1
if(b.w===1)return!0
s=t===13
if(s)if(A.m(a,c[b.x],c,d,e))return!0
r=d.w
q=u.P
if(b===q||b===u.T){if(r===7)return A.m(a,b,c,d.x,e)
return d===q||d===u.T||r===6}if(d===u.K){if(t===7)return A.m(a,b.x,c,d,e)
return t!==6}if(t===7){if(!A.m(a,b.x,c,d,e))return!1
return A.m(a,A.cU(a,b),c,d,e)}if(t===6)return A.m(a,q,c,d,e)&&A.m(a,b.x,c,d,e)
if(r===7){if(A.m(a,b,c,d.x,e))return!0
return A.m(a,b,c,A.cU(a,d),e)}if(r===6)return A.m(a,b,c,q,e)||A.m(a,b,c,d.x,e)
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
if(!A.m(a,k,c,j,e)||!A.m(a,j,e,k,c))return!1}return A.dU(a,b.x,c,d.x,e)}if(r===11){if(b===u.g)return!0
if(q)return!1
return A.dU(a,b,c,d,e)}if(t===8){if(r!==8)return!1
return A.fG(a,b,c,d,e)}if(p&&r===10)return A.fK(a,b,c,d,e)
return!1},
dU(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!A.m(a2,a3.x,a4,a5.x,a6))return!1
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
if(!A.m(a2,q[i],a6,h,a4))return!1}for(i=0;i<n;++i){h=m[i]
if(!A.m(a2,q[p+i],a6,h,a4))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!A.m(a2,l[i],a6,h,a4))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(c=0,b=0;b<d;b+=3){a=f[b]
for(;!0;){if(c>=e)return!1
a0=g[c]
c+=3
if(a<a0)return!1
a1=g[c-2]
if(a0<a){if(a1)return!1
continue}h=f[b+1]
if(a1&&!h)return!1
h=g[c-1]
if(!A.m(a2,f[b+2],a6,h,a4))return!1
break}}for(;c<e;){if(g[c+1])return!1
c+=3}return!0},
fG(a,b,c,d,e){var t,s,r,q,p,o=b.x,n=d.x
for(;o!==n;){t=a.tR[o]
if(t==null)return!1
if(typeof t=="string"){o=t
continue}s=t[n]
if(s==null)return!1
r=s.length
q=r>0?new Array(r):v.typeUniverse.sEA
for(p=0;p<r;++p)q[p]=A.aW(a,b,s[p])
return A.dR(a,q,null,c,d.y,e)}return A.dR(a,b.y,null,c,d.y,e)},
dR(a,b,c,d,e,f){var t,s=b.length
for(t=0;t<s;++t)if(!A.m(a,b[t],d,e[t],f))return!1
return!0},
fK(a,b,c,d,e){var t,s=b.y,r=d.y,q=s.length
if(q!==r.length)return!1
if(b.x!==d.x)return!1
for(t=0;t<q;++t)if(!A.m(a,s[t],c,r[t],e))return!1
return!0},
ad(a){var t=a.w,s=!0
if(!(a===u.P||a===u.T))if(!A.V(a))if(t!==6)s=t===7&&A.ad(a.x)
return s},
V(a){var t=a.w
return t===2||t===3||t===4||t===5||a===u.X},
dQ(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
cB(a){return a>0?new Array(a):v.typeUniverse.sEA},
x:function x(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
bG:function bG(){this.c=this.b=this.a=null},
bJ:function bJ(a){this.a=a},
bF:function bF(){},
aS:function aS(a){this.a=a},
eX(){var t,s,r
if(self.scheduleImmediate!=null)return A.fZ()
if(self.MutationObserver!=null&&self.document!=null){t={}
s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(A.bL(new A.co(t),1)).observe(s,{childList:true})
return new A.cn(t,s,r)}else if(self.setImmediate!=null)return A.h_()
return A.h0()},
eY(a){self.scheduleImmediate(A.bL(new A.cp(a),0))},
eZ(a){self.setImmediate(A.bL(new A.cq(a),0))},
f_(a){A.f6(0,a)},
dB(a,b){var t=B.a.F(a.a,1000)
return A.f7(t,b)},
f6(a,b){var t=new A.aR()
t.aP(a,b)
return t},
f7(a,b){var t=new A.aR()
t.aQ(a,b)
return t},
fP(){var t,s
for(t=$.aa;t!=null;t=$.aa){$.aZ=null
s=t.b
$.aa=s
if(s==null)$.aY=null
t.a.$0()}},
fU(){$.d5=!0
try{A.fP()}finally{$.aZ=null
$.d5=!1
if($.aa!=null)$.df().$1(A.dZ())}},
fT(a){var t,s,r,q,p,o=$.aa
if(o==null){t=new A.bD(a)
s=$.aY
if(s==null){$.aa=$.aY=t
if(!$.d5)$.df().$1(A.dZ())}else $.aY=s.b=t
$.aZ=$.aY
return}r=new A.bD(a)
q=$.aZ
if(q==null){r.b=o
$.aa=$.aZ=r}else{p=q.b
r.b=p
$.aZ=q.b=r
if(p==null)$.aY=r}},
cW(){return new A.bC(null)},
dA(a,b){var t=$.bB
if(t===B.h)return A.dB(a,b)
return A.dB(a,t.aZ(b))},
fR(a,b){A.fT(new A.cD(a,b))},
fS(a,b,c,d,e){var t,s=$.bB
if(s===c)return d.$1(e)
$.bB=c
t=s
try{s=d.$1(e)
return s}finally{$.bB=t}},
co:function co(a){this.a=a},
cn:function cn(a,b,c){this.a=a
this.b=b
this.c=c},
cp:function cp(a){this.a=a},
cq:function cq(a){this.a=a},
aR:function aR(){this.c=0},
cz:function cz(a,b){this.a=a
this.b=b},
cy:function cy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bE:function bE(){},
bC:function bC(a){var _=this
_.b=a
_.c=0
_.e=_.d=null},
bD:function bD(a){this.a=a
this.b=null},
cC:function cC(){},
cD:function cD(a,b){this.a=a
this.b=b},
cw:function cw(){},
cx:function cx(a,b){this.a=a
this.b=b},
eO(a,b,c){return A.e3(a,new A.D(b.i("@<0>").ao(c).i("D<1,2>")))},
eN(a,b){return new A.D(a.i("@<0>").ao(b).i("D<1,2>"))},
a0(a){return new A.P(a.i("P<0>"))},
dr(a,b){return A.h5(a,new A.P(b.i("P<0>")))},
cZ(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
dF(a,b,c){var t=new A.a8(a,b,c.i("a8<0>"))
t.c=a.e
return t},
cT(a){var t,s
if(A.dc(a))return"{...}"
t=new A.bx("")
try{s={}
$.v.push(a)
t.a+="{"
s.a=!0
a.ae(0,new A.bW(s,t))
t.a+="}"}finally{if(0>=$.v.length)return A.b($.v,-1)
$.v.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
P:function P(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cv:function cv(a){this.a=a
this.c=this.b=null},
a8:function a8(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
j:function j(){},
ax:function ax(){},
bW:function bW(a,b){this.a=a
this.b=b},
a5:function a5(){},
aQ:function aQ(){},
ew(a,b){a=A.r(a,new Error())
a.stack=b.h(0)
throw a},
cS(a,b,c,d){var t,s=c?J.eI(a,d):J.eH(a,d)
if(a!==0&&b!=null)for(t=0;t<s.length;++t)s[t]=b
return s},
eP(a,b,c){var t,s,r=A.a([],c.i("i<0>"))
for(t=a.length,s=0;s<a.length;a.length===t||(0,A.bM)(a),++s)r.push(a[s])
r.$flags=1
return r},
ds(a,b){var t,s
if(Array.isArray(a))return A.a(a.slice(0),b.i("i<0>"))
t=A.a([],b.i("i<0>"))
for(s=J.af(a);s.k();)t.push(s.gp())
return t},
dy(a,b,c){var t=J.af(b)
if(!t.k())return a
if(c.length===0){do a+=A.k(t.gp())
while(t.k())}else{a+=A.k(t.gp())
for(;t.k();)a=a+c+A.k(t.gp())}return a},
dm(a){return new A.b7(1000*a)},
bQ(a){if(typeof a=="number"||A.d4(a)||a==null)return J.b0(a)
if(typeof a=="string")return JSON.stringify(a)
return A.du(a)},
ex(a,b){A.e0(a,"error",u.K)
A.e0(b,"stackTrace",u.l)
A.ew(a,b)},
b3(a){return new A.b2(a)},
cN(a){return new A.G(!1,null,null,a)},
eo(a,b){return a},
eQ(a){var t=null
return new A.a4(t,t,!1,t,t,a)},
dv(a,b,c,d,e){return new A.a4(b,c,!0,a,d,"Invalid value")},
dw(a,b){if(a<0)throw A.e(A.dv(a,0,null,b,null))
return a},
dp(a,b,c,d){return new A.ba(b,!0,a,d,"Index out of range")},
cm(a){return new A.aK(a)},
dD(a){return new A.bz(a)},
bw(a){return new A.aG(a)},
Y(a){return new A.b5(a)},
ey(a){return new A.cs(a)},
eG(a,b,c){var t,s
if(A.dc(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=A.a([],u.s)
$.v.push(a)
try{A.fO(a,t)}finally{if(0>=$.v.length)return A.b($.v,-1)
$.v.pop()}s=A.dy(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
cP(a,b,c){var t,s
if(A.dc(a))return b+"..."+c
t=new A.bx(b)
$.v.push(a)
try{s=t
s.a=A.dy(s.a,a,", ")}finally{if(0>=$.v.length)return A.b($.v,-1)
$.v.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
fO(a,b){var t,s,r,q,p,o,n,m=a.gv(a),l=0,k=0
while(!0){if(!(l<80||k<3))break
if(!m.k())return
t=A.k(m.gp())
b.push(t)
l+=t.length+2;++k}if(!m.k()){if(k<=5)return
if(0>=b.length)return A.b(b,-1)
s=b.pop()
if(0>=b.length)return A.b(b,-1)
r=b.pop()}else{q=m.gp();++k
if(!m.k()){if(k<=4){b.push(A.k(q))
return}s=A.k(q)
if(0>=b.length)return A.b(b,-1)
r=b.pop()
l+=s.length+2}else{p=m.gp();++k
for(;m.k();q=p,p=o){o=m.gp();++k
if(k>100){while(!0){if(!(l>75&&k>3))break
if(0>=b.length)return A.b(b,-1)
l-=b.pop().length+2;--k}b.push("...")
return}}r=A.k(q)
s=A.k(p)
l+=s.length+r.length+4}}if(k>b.length+2){l+=5
n="..."}else n=null
while(!0){if(!(l>80&&b.length>3))break
if(0>=b.length)return A.b(b,-1)
l-=b.pop().length+2
if(n==null){l+=5
n="..."}}if(n!=null)b.push(n)
b.push(r)
b.push(s)},
bZ(a,b,c,d){var t
if(B.e===c){t=B.a.gm(a)
b=J.z(b)
return A.cX(A.K(A.K($.cL(),t),b))}if(B.e===d){t=B.a.gm(a)
b=J.z(b)
c=J.z(c)
return A.cX(A.K(A.K(A.K($.cL(),t),b),c))}t=B.a.gm(a)
b=J.z(b)
c=J.z(c)
d=J.z(d)
d=A.cX(A.K(A.K(A.K(A.K($.cL(),t),b),c),d))
return d},
b7:function b7(a){this.a=a},
cr:function cr(){},
l:function l(){},
b2:function b2(a){this.a=a},
aJ:function aJ(){},
G:function G(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a4:function a4(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ba:function ba(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
aK:function aK(a){this.a=a},
bz:function bz(a){this.a=a},
aG:function aG(a){this.a=a},
b5:function b5(a){this.a=a},
bs:function bs(){},
aF:function aF(){},
cs:function cs(a){this.a=a},
p:function p(){},
a1:function a1(a,b,c){this.a=a
this.b=b
this.$ti=c},
aC:function aC(){},
o:function o(){},
bx:function bx(a){this.a=a},
ct:function ct(){},
H:function H(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bU:function bU(a){this.a=a},
bX:function bX(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
a3:function a3(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=0},
eS(a,b,c,d,e,f,g,h){var t,s,r,q=v.G,p=q.document.createElement("canvas"),o=h*g
p.width=o
t=d*f
p.height=t
s=q.document.createElement("canvas")
s.width=o
s.height=t
t=A.a([],u.v)
for(r=0;r<d;++r){q=B.a.F(h,32)
t.push(new Uint32Array(q+1))}q=new A.bv(!0,d,h,g,f,c,a,p,s,t)
q.aN(a,b,c,d,!0,f,g,h)
return q},
cV(a){return new A.d(B.a.F(a,32),31-B.a.n(a,32))},
bv:function bv(a,b,c,d,e,f,g,h,i,j){var _=this
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
c1:function c1(a){this.a=a},
c2:function c2(a){this.a=a},
c3:function c3(a){this.a=a},
c4:function c4(a){this.a=a},
c0:function c0(){},
A:function A(a){this.b=a},
eT(a,b,c,d,e,f){var t,s,r,q,p="white",o=null,n=A.eS("black",b,p,d*(8+c),!0,2,2,a*8),m=A.a([],u.J)
for(t=u.U,s=0;s<d;++s){r=A.a([],t)
for(q=0;q<a;++q)r.push(new A.H(s,q," ",p))
m.push(r)}n=new A.c9(d,a,c,b,n,new A.a3(d,a),new A.a3(d,a),new A.a3(d,a),A.cW(),A.cW(),A.cW(),B.A,m,A.a0(u.o),B.dR)
n.aO("black",a,b,p,o,!0,2,2,c,d,!0,e,f,o,o,o,o)
return n},
a6:function a6(a){this.b=a},
c9:function c9(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
ci:function ci(a){this.a=a},
ch:function ch(){},
cg:function cg(a){this.a=a},
ca:function ca(a){this.a=a},
cb:function cb(a){this.a=a},
cc:function cc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cd:function cd(a,b,c){this.a=a
this.b=b
this.c=c},
ce:function ce(a,b,c){this.a=a
this.b=b
this.c=c},
cf:function cf(a){this.a=a},
eB(){var t,s,r,q,p,o,n,m=A.eT(40,$.em(),0,27,new A.bR(),new A.bS()),l=A.a([],u.G)
for(t=u.q,s=0;s<25;++s){r=A.a([],t)
for(q=s!==0,p=s!==24,o=0;o<40;++o)r.push(!q||!p||o===0||o===39?B.b:B.c)
l.push(r)}t=A.a([],u.O)
for(n=0;n<25;++n)t.push(new A.b4())
r=u.R
q=new A.b9()
q.b=20
r=new A.b8(B.J,m,l,B.i,t,A.a0(r),A.a0(r),A.a0(r),A.a0(r),q,A.a0(r))
A.dA(A.dm(50),r.gaI())
m.S()
return r},
hj(){return A.eB()},
b9:function b9(){this.b=this.a=0},
b4:function b4(){var _=this
_.e=_.d=_.c=0
_.f=!1
_.b=_.a=0},
N:function N(a){this.b=a},
w:function w(a){this.b=a},
b8:function b8(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
bR:function bR(){},
bS:function bS(){},
hn(a){throw A.r(new A.au("Field '"+a+"' has been assigned during initialization."),new Error())},
M(){throw A.r(A.eM(""),new Error())},
aX(a){var t
if(typeof a=="function")throw A.e(A.cN("Attempting to rewrap a JS function."))
t=function(b,c){return function(){return b(c)}}(A.ft,a)
t[$.cK()]=a
return t},
d2(a){var t
if(typeof a=="function")throw A.e(A.cN("Attempting to rewrap a JS function."))
t=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.fu,a)
t[$.cK()]=a
return t},
ft(a){return a.$0()},
fu(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
h9(a,b){return a[b]},
fv(a,b,c){return a[b](c)}},B={}
var w=[A,J,B]
var $={}
A.cQ.prototype={}
J.bb.prototype={
I(a,b){return a===b},
gm(a){return A.aE(a)},
h(a){return"Instance of '"+A.c_(a)+"'"},
gt(a){return A.T(A.d3(this))}}
J.bc.prototype={
h(a){return String(a)},
gm(a){return a?519018:218159},
gt(a){return A.T(u.y)},
$if:1}
J.ap.prototype={
I(a,b){return null==b},
h(a){return"null"},
gm(a){return 0},
$if:1}
J.ar.prototype={$in:1}
J.J.prototype={
gm(a){return 0},
h(a){return String(a)}}
J.bt.prototype={}
J.a7.prototype={}
J.I.prototype={
h(a){var t=a[$.cK()]
if(t==null)return this.aM(a)
return"JavaScript function for "+J.b0(t)}}
J.aq.prototype={
gm(a){return 0},
h(a){return String(a)}}
J.as.prototype={
gm(a){return 0},
h(a){return String(a)}}
J.i.prototype={
b7(a,b){var t,s,r=a.length,q=A.cS(r,"",!1,u.N)
for(t=0;t<a.length;++t){s=A.k(a[t])
if(!(t<r))return A.b(q,t)
q[t]=s}return q.join(b)},
b3(a,b,c){var t,s,r=a.length
for(t=b,s=0;s<r;++s){t=c.$2(t,a[s])
if(a.length!==r)throw A.e(A.Y(a))}return t},
b4(a,b,c){c.toString
return this.b3(a,b,c,u.z)},
h(a){return A.cP(a,"[","]")},
gv(a){return new J.b1(a,a.length,A.d1(a).i("b1<1>"))},
gm(a){return A.aE(a)},
gq(a){return a.length},
$ih:1}
J.bT.prototype={}
J.b1.prototype={
gp(){var t=this.d
return t==null?this.$ti.c.a(t):t},
k(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw A.e(A.bM(r))
t=s.c
if(t>=q){s.d=null
return!1}s.d=r[t]
s.c=t+1
return!0}}
J.Z.prototype={
bg(a){var t
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){t=a<0?Math.ceil(a):Math.floor(a)
return t+0}throw A.e(A.cm(""+a+".toInt()"))},
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
return this.au(a,b)},
F(a,b){return(a|0)===a?a/b|0:this.au(a,b)},
au(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw A.e(A.cm("Result of truncating division is "+A.k(t)+": "+A.k(a)+" ~/ "+b))},
U(a,b){if(b<0)throw A.e(A.d7(b))
return b>31?0:a<<b>>>0},
aX(a,b){return b>31?0:a<<b>>>0},
aL(a,b){var t
if(b<0)throw A.e(A.d7(b))
if(a>0)t=this.aa(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
aY(a,b){var t
if(a>0)t=this.aa(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
E(a,b){if(0>b)throw A.e(A.d7(b))
return this.aa(a,b)},
aa(a,b){return b>31?0:a>>>b},
gt(a){return A.T(u.H)},
$iq:1}
J.ao.prototype={
gt(a){return A.T(u.S)},
$if:1,
$ic:1}
J.bd.prototype={
gt(a){return A.T(u.i)},
$if:1}
J.a_.prototype={
bh(a){var t,s,r,q=a.trim(),p=q.length
if(p===0)return q
if(0>=p)return A.b(q,0)
if(q.charCodeAt(0)===133){t=J.eK(q,1)
if(t===p)return""}else t=0
s=p-1
if(!(s>=0))return A.b(q,s)
r=q.charCodeAt(s)===133?J.eL(q,s):p
if(t===0&&r===p)return q
return q.substring(t,r)},
ak(a,b){var t,s
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.e(B.I)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
ba(a,b,c){var t=b-a.length
if(t<=0)return a
return this.ak(c,t)+a},
bb(a,b){var t=b-a.length
if(t<=0)return a
return a+this.ak(" ",t)},
h(a){return a},
gm(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=s+a.charCodeAt(r)&536870911
s=s+((s&524287)<<10)&536870911
s^=s>>6}s=s+((s&67108863)<<3)&536870911
s^=s>>11
return s+((s&16383)<<15)&536870911},
gt(a){return A.T(u.N)},
gq(a){return a.length},
$if:1,
$iaH:1}
A.au.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.c5.prototype={}
A.ai.prototype={}
A.bh.prototype={
gp(){var t=this.d
return t==null?this.$ti.c.a(t):t},
k(){var t,s=this,r=s.a,q=J.e4(r),p=q.gq(r)
if(s.b!==p)throw A.e(A.Y(r))
t=s.c
if(t>=p){s.d=null
return!1}s.d=q.aD(r,t);++s.c
return!0}}
A.aI.prototype={
gv(a){var t=this.a
return new A.by(A.dF(t,t.r,t.$ti.c),this.b,A.bK(this).i("by<1>"))}}
A.aj.prototype={
gq(a){var t=this.a.a,s=this.b
if(t>s)return s
return t}}
A.by.prototype={
k(){if(--this.b>=0)return this.a.k()
this.b=-1
return!1},
gp(){var t,s
if(this.b<0){this.$ti.c.a(null)
return null}t=this.a
s=t.d
return s==null?t.$ti.c.a(s):s}}
A.am.prototype={
gq(a){return J.cM(this.a)},
gv(a){return new A.an(J.af(this.a),this.b)}}
A.ah.prototype={}
A.an.prototype={
k(){if(++this.c>=0&&this.a.k())return!0
this.c=-2
return!1},
gp(){var t=this.c
return t>=0?new A.d(this.b+t,this.a.gp()):A.X(A.cO())}}
A.ak.prototype={}
A.d.prototype={$r:"+(1,2)",$s:1}
A.b6.prototype={
h(a){return A.cT(this)}}
A.al.prototype={
W(){var t=this,s=t.$map
if(s==null){s=new A.at(t.$ti.i("at<1,2>"))
A.e3(t.a,s)
t.$map=s}return s},
R(a){return this.W().R(a)},
j(a,b){return this.W().j(0,b)},
ae(a,b){this.W().ae(0,b)},
gq(a){return this.W().a}}
A.cj.prototype={
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
A.aD.prototype={
h(a){return"Null check operator used on a null value"}}
A.be.prototype={
h(a){var t,s=this,r="NoSuchMethodError: method not found: '",q=s.b
if(q==null)return"NoSuchMethodError: "+s.a
t=s.c
if(t==null)return r+q+"' ("+s.a+")"
return r+q+"' on '"+t+"' ("+s.a+")"}}
A.bA.prototype={
h(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
A.bY.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.bI.prototype={
h(a){var t,s=this.b
if(s!=null)return s
s=this.a
t=s!==null&&typeof s==="object"?s.stack:null
return this.b=t==null?"":t}}
A.O.prototype={
h(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.e9(s==null?"unknown":s)+"'"},
gbi(){return this},
$C:"$1",
$R:1,
$D:null}
A.bO.prototype={$C:"$0",$R:0}
A.bP.prototype={$C:"$2",$R:2}
A.c8.prototype={}
A.c7.prototype={
h(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.e9(t)+"'"}}
A.ag.prototype={
I(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.ag))return!1
return this.$_target===b.$_target&&this.a===b.a},
gm(a){return(A.de(this.a)^A.aE(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.c_(this.a)+"'")}}
A.bu.prototype={
h(a){return"RuntimeError: "+this.a}}
A.D.prototype={
gq(a){return this.a},
R(a){var t,s
if(typeof a=="string"){t=this.b
if(t==null)return!1
return t[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){s=this.c
if(s==null)return!1
return s[a]!=null}else return this.b5(a)},
b5(a){var t=this.d
if(t==null)return!1
return this.a_(t[this.Z(a)],a)>=0},
j(a,b){var t,s,r,q,p=null
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
t=r[this.Z(a)]
s=this.a_(t,a)
if(s<0)return null
return t[s].b},
T(a,b,c){var t,s,r,q,p,o,n=this
if(typeof b=="string"){t=n.b
n.am(t==null?n.b=n.a8():t,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){s=n.c
n.am(s==null?n.c=n.a8():s,b,c)}else{r=n.d
if(r==null)r=n.d=n.a8()
q=n.Z(b)
p=r[q]
if(p==null)r[q]=[n.a1(b,c)]
else{o=n.a_(p,b)
if(o>=0)p[o].b=c
else p.push(n.a1(b,c))}}},
ae(a,b){var t=this,s=t.e,r=t.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==t.r)throw A.e(A.Y(t))
s=s.c}},
am(a,b,c){var t=a[b]
if(t==null)a[b]=this.a1(b,c)
else t.b=c},
a1(a,b){var t=this,s=new A.bV(a,b)
if(t.e==null)t.e=t.f=s
else t.f=t.f.c=s;++t.a
t.r=t.r+1&1073741823
return s},
Z(a){return J.z(a)&1073741823},
a_(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.ae(a[s].a,b))return s
return-1},
h(a){return A.cT(this)},
a8(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t}}
A.bV.prototype={}
A.aw.prototype={
gq(a){return this.a.a},
gv(a){var t=this.a
return new A.bg(t,t.r,t.e)}}
A.bg.prototype={
gp(){return this.d},
k(){var t,s=this,r=s.a
if(s.b!==r.r)throw A.e(A.Y(r))
t=s.c
if(t==null){s.d=null
return!1}else{s.d=t.a
s.c=t.c
return!0}}}
A.av.prototype={
gq(a){return this.a.a},
gv(a){var t=this.a
return new A.bf(t,t.r,t.e,this.$ti.i("bf<1,2>"))}}
A.bf.prototype={
gp(){var t=this.d
t.toString
return t},
k(){var t,s=this,r=s.a
if(s.b!==r.r)throw A.e(A.Y(r))
t=s.c
if(t==null){s.d=null
return!1}else{s.d=new A.a1(t.a,t.b,s.$ti.i("a1<1,2>"))
s.c=t.c
return!0}}}
A.at.prototype={
Z(a){return A.h1(a)&1073741823},
a_(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.ae(a[s].a,b))return s
return-1}}
A.cF.prototype={
$1(a){return this.a(a)}}
A.cG.prototype={
$2(a,b){return this.a(a,b)}}
A.cH.prototype={
$1(a){return this.a(a)}}
A.a9.prototype={
h(a){return this.av(!1)},
av(a){var t,s,r,q,p,o=this.aU(),n=this.ap(),m=(a?""+"Record ":"")+"("
for(t=o.length,s="",r=0;r<t;++r,s=", "){m+=s
q=o[r]
if(typeof q=="string")m=m+q+": "
if(!(r<n.length))return A.b(n,r)
p=n[r]
m=a?m+A.du(p):m+A.k(p)}m+=")"
return m.charCodeAt(0)==0?m:m},
aU(){var t,s=this.$s
for(;$.aP.length<=s;)$.aP.push(null)
t=$.aP[s]
if(t==null){t=this.aS()
if(!(s<$.aP.length))return A.b($.aP,s)
$.aP[s]=t}return t},
aS(){var t,s,r,q,p,o=this.$r,n=o.indexOf("("),m=o.substring(1,n),l=o.substring(n),k=l==="()"?0:l.replace(/[^,]/g,"").length+1,j=A.a(new Array(k),u.f)
for(t=0;t<k;++t)j[t]=t
if(m!==""){s=m.split(",")
t=s.length
for(r=j.length,q=k;t>0;){--q;--t
p=s[t]
if(!(q>=0&&q<r))return A.b(j,q)
j[q]=p}}j=A.eP(j,!1,u.K)
j.$flags=3
return j}}
A.bH.prototype={
ap(){return[this.a,this.b]},
I(a,b){if(b==null)return!1
return b instanceof A.bH&&this.$s===b.$s&&J.ae(this.a,b.a)&&J.ae(this.b,b.b)},
gm(a){return A.bZ(this.$s,this.a,this.b,B.e)}}
A.bi.prototype={
gt(a){return B.e4},
$if:1}
A.aA.prototype={}
A.bj.prototype={
gt(a){return B.e5},
$if:1}
A.a2.prototype={
gq(a){return a.length},
$it:1}
A.ay.prototype={
j(a,b){A.R(b,a,a.length)
return a[b]},
$ih:1}
A.az.prototype={$ih:1}
A.bk.prototype={
gt(a){return B.e6},
$if:1}
A.bl.prototype={
gt(a){return B.e7},
$if:1}
A.bm.prototype={
gt(a){return B.e8},
j(a,b){A.R(b,a,a.length)
return a[b]},
$if:1}
A.bn.prototype={
gt(a){return B.e9},
j(a,b){A.R(b,a,a.length)
return a[b]},
$if:1}
A.bo.prototype={
gt(a){return B.ea},
j(a,b){A.R(b,a,a.length)
return a[b]},
$if:1}
A.bp.prototype={
gt(a){return B.ec},
j(a,b){A.R(b,a,a.length)
return a[b]},
$if:1}
A.bq.prototype={
gt(a){return B.ed},
j(a,b){A.R(b,a,a.length)
return a[b]},
$if:1,
$icl:1}
A.aB.prototype={
gt(a){return B.ee},
gq(a){return a.length},
j(a,b){A.R(b,a,a.length)
return a[b]},
$if:1}
A.br.prototype={
gt(a){return B.ef},
gq(a){return a.length},
j(a,b){A.R(b,a,a.length)
return a[b]},
$if:1}
A.aL.prototype={}
A.aM.prototype={}
A.aN.prototype={}
A.aO.prototype={}
A.x.prototype={
i(a){return A.aW(v.typeUniverse,this,a)},
ao(a){return A.dP(v.typeUniverse,this,a)}}
A.bG.prototype={}
A.bJ.prototype={
h(a){return A.u(this.a,null)}}
A.bF.prototype={
h(a){return this.a}}
A.aS.prototype={}
A.co.prototype={
$1(a){var t=this.a,s=t.a
t.a=null
s.$0()}}
A.cn.prototype={
$1(a){var t,s
this.a.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)}}
A.cp.prototype={
$0(){this.a.$0()}}
A.cq.prototype={
$0(){this.a.$0()}}
A.aR.prototype={
aP(a,b){if(self.setTimeout!=null)self.setTimeout(A.bL(new A.cz(this,b),0),a)
else throw A.e(A.cm("`setTimeout()` not found."))},
aQ(a,b){if(self.setTimeout!=null)self.setInterval(A.bL(new A.cy(this,a,Date.now(),b),0),a)
else throw A.e(A.cm("Periodic timer."))},
$icY:1}
A.cz.prototype={
$0(){this.a.c=1
this.b.$0()}}
A.cy.prototype={
$0(){var t,s=this,r=s.a,q=r.c+1,p=s.b
if(p>0){t=Date.now()-s.c
if(t>(q+1)*p)q=B.a.J(t,p)}r.c=q
s.d.$1(r)}}
A.bE.prototype={}
A.bC.prototype={}
A.bD.prototype={}
A.cC.prototype={}
A.cD.prototype={
$0(){A.ex(this.a,this.b)}}
A.cw.prototype={
be(a,b){var t,s,r
try{if(B.h===$.bB){a.$1(b)
return}A.fS(null,null,this,a,b)}catch(r){t=A.hp(r)
s=A.hb(r)
A.fR(t,s)}},
bf(a,b){a.toString
return this.be(a,b,u.z)},
b_(a){return new A.cx(this,a)},
aZ(a){a.toString
return this.b_(a,u.z)}}
A.cx.prototype={
$1(a){return this.a.bf(this.b,a)}}
A.P.prototype={
gv(a){var t=this,s=new A.a8(t,t.r,t.$ti.i("a8<1>"))
s.c=t.e
return s},
gq(a){return this.a},
aC(a,b){var t=this.aT(b)
return t},
aT(a){var t=this.d
if(t==null)return!1
return this.a6(t[a.gm(0)&1073741823],a)>=0},
gac(a){var t=this.e
if(t==null)throw A.e(A.bw("No elements"))
return t.a},
u(a,b){var t,s,r=this
if(typeof b=="string"&&b!=="__proto__"){t=r.b
return r.an(t==null?r.b=A.cZ():t,b)}else if(typeof b=="number"&&(b&1073741823)===b){s=r.c
return r.an(s==null?r.c=A.cZ():s,b)}else return r.aR(b)},
aR(a){var t,s,r=this,q=r.d
if(q==null)q=r.d=A.cZ()
t=J.z(a)&1073741823
s=q[t]
if(s==null)q[t]=[r.a9(a)]
else{if(r.a6(s,a)>=0)return!1
s.push(r.a9(a))}return!0},
H(a,b){var t=this
if(typeof b=="string"&&b!=="__proto__")return t.ar(t.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return t.ar(t.c,b)
else return t.aW(b)},
aW(a){var t,s,r,q,p=this.d
if(p==null)return!1
t=J.z(a)&1073741823
s=p[t]
r=this.a6(s,a)
if(r<0)return!1
q=s.splice(r,1)[0]
if(0===s.length)delete p[t]
this.aw(q)
return!0},
G(a){var t=this
if(t.a>0){t.b=t.c=t.d=t.e=t.f=null
t.a=0
t.a7()}},
an(a,b){if(a[b]!=null)return!1
a[b]=this.a9(b)
return!0},
ar(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.aw(t)
delete a[b]
return!0},
a7(){this.r=this.r+1&1073741823},
a9(a){var t,s=this,r=new A.cv(a)
if(s.e==null)s.e=s.f=r
else{t=s.f
t.toString
r.c=t
s.f=t.b=r}++s.a
s.a7()
return r},
aw(a){var t=this,s=a.c,r=a.b
if(s==null)t.e=r
else s.b=r
if(r==null)t.f=s
else r.c=s;--t.a
t.a7()},
a6(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.ae(a[s].a,b))return s
return-1}}
A.cv.prototype={}
A.a8.prototype={
gp(){var t=this.d
return t==null?this.$ti.c.a(t):t},
k(){var t=this,s=t.c,r=t.a
if(t.b!==r.r)throw A.e(A.Y(r))
else if(s==null){t.d=null
return!1}else{t.d=s.a
t.c=s.b
return!0}}}
A.j.prototype={
gv(a){return new A.bh(a,this.gq(a),A.b_(a).i("bh<j.E>"))},
aD(a,b){return this.j(a,b)},
h(a){return A.cP(a,"[","]")}}
A.ax.prototype={
gq(a){return this.a},
h(a){return A.cT(this)}}
A.bW.prototype={
$2(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=A.k(a)
s.a=(s.a+=t)+": "
t=A.k(b)
s.a+=t}}
A.a5.prototype={
az(a,b){var t
for(t=J.af(b);t.k();)this.u(0,t.gp())},
bc(a){var t
for(t=J.af(a);t.k();)this.H(0,t.gp())},
h(a){return A.cP(this,"{","}")},
$ic6:1}
A.aQ.prototype={}
A.b7.prototype={
I(a,b){if(b==null)return!1
return b instanceof A.b7&&this.a===b.a},
gm(a){return B.a.gm(this.a)},
h(a){var t,s,r,q,p=this.a,o=B.a.F(p,36e8)
p%=36e8
t=B.a.F(p,6e7)
p%=6e7
s=t<10?"0":""
r=B.a.F(p,1e6)
q=r<10?"0":""
return""+o+":"+s+t+":"+q+r+"."+B.l.ba(B.a.h(p%1e6),6,"0")}}
A.cr.prototype={
h(a){return this.V()}}
A.l.prototype={}
A.b2.prototype={
h(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.bQ(t)
return"Assertion failed"}}
A.aJ.prototype={}
A.G.prototype={
ga5(){return"Invalid argument"+(!this.a?"(s)":"")},
ga4(){return""},
h(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+q,o=t.ga5()+r+p
if(!t.a)return o
return o+t.ga4()+": "+A.bQ(t.gaf())},
gaf(){return this.b}}
A.a4.prototype={
gaf(){return this.b},
ga5(){return"RangeError"},
ga4(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+A.k(r):""
else if(r==null)t=": Not greater than or equal to "+A.k(s)
else if(r>s)t=": Not in inclusive range "+A.k(s)+".."+A.k(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+A.k(s)
return t}}
A.ba.prototype={
gaf(){return this.b},
ga5(){return"RangeError"},
ga4(){if(this.b<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gq(a){return this.f}}
A.aK.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.bz.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.aG.prototype={
h(a){return"Bad state: "+this.a}}
A.b5.prototype={
h(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.bQ(t)+"."}}
A.bs.prototype={
h(a){return"Out of Memory"},
$il:1}
A.aF.prototype={
h(a){return"Stack Overflow"},
$il:1}
A.cs.prototype={
h(a){return"Exception: "+this.a}}
A.p.prototype={
gq(a){var t,s=this.gv(this)
for(t=0;s.k();)++t
return t},
gac(a){var t=this.gv(this)
if(!t.k())throw A.e(A.cO())
return t.gp()},
aD(a,b){var t,s
A.dw(b,"index")
t=this.gv(this)
for(s=b;t.k();){if(s===0)return t.gp();--s}throw A.e(A.dp(b,b-s,this,"index"))},
h(a){return A.eG(this,"(",")")}}
A.a1.prototype={
h(a){return"MapEntry("+A.k(this.a)+": "+A.k(this.b)+")"}}
A.aC.prototype={
gm(a){return A.o.prototype.gm.call(this,0)},
h(a){return"null"}}
A.o.prototype={$io:1,
I(a,b){return this===b},
gm(a){return A.aE(this)},
h(a){return"Instance of '"+A.c_(this)+"'"},
gt(a){return A.ha(this)},
toString(){return this.h(this)}}
A.bx.prototype={
gq(a){return this.a.length},
h(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
A.ct.prototype={
a0(a){if(a<=0||a>4294967296)throw A.e(A.eQ("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
A.H.prototype={
gm(a){var t=this.a,s=this.b
return A.bZ(new A.d(t,s).$s,t,s,B.e)},
I(a,b){var t,s,r,q
if(b==null)return!1
if(b instanceof A.H){t=b.a
s=b.b
r=this.a
q=this.b
q=A.bZ(new A.d(t,s).$s,t,s,B.e)===A.bZ(new A.d(r,q).$s,r,q,B.e)
t=q}else t=!1
return t},
h(a){var t=this
return"("+t.a+" "+t.b+") => '"+t.c+"' "+t.d}}
A.bU.prototype={}
A.bX.prototype={
h(a){var t=this
return"               row: "+t.a+"\n            column: "+t.b+"\n         character: '"+t.c+"'\n    characterColor: "+t.d+"\n\n          pixelRow: "+t.e+"\n       pixelColumn: "+t.f+"\n         pixelIsOn: "+t.r+"\n    "}}
A.a3.prototype={
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
A.bv.prototype={
aN(a,b,c,d,e,f,g,h){var t,s=this,r=v.G.document
r.onfocus=A.aX(new A.c1(s))
r.onblur=A.aX(new A.c2(s))
r=s.w
r.tabIndex=-1
r.style.display="block"
r.style.outline="none"
t=r.getContext("2d")
if(t==null)t=u.m.a(t)
t.imageSmoothingEnabled=!1
r.onfocus=A.aX(new A.c3(s))
r.onblur=A.aX(new A.c4(s))
b.style.display="flex"
b.style.alignItems="flex-start"
b.style.padding="0"
b.style.margin="0"
b.style.width="fit-content"
b.style.height="fit-content"
b.style.background="gray"
b.appendChild(r)
s.G(0)},
X(a,b){return new A.d(B.a.n(a,this.b),B.a.n(b,this.c))},
a2(){var t=this.x,s=t.getContext("2d")
if(s==null)s=u.m.a(s)
s.save()
s.beginPath()
s.clearRect(0,0,t.width,t.height)
s.restore()
return s},
a3(){var t=this.w.getContext("2d")
if(t==null)t=u.m.a(t)
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
s=A.cV(b)
r=s.a
q=B.a.U(1,s.b)
m=n.y
if(!(a>=0&&a<m.length))return A.b(m,a)
m=m[a]
if(!(r>=0&&r<m.length))return A.b(m,r)
p=m[r]
m.$flags&2&&A.bN(m)
m[r]=(p|q)>>>0
m[r]=(m[r]^q)>>>0
m=c.getContext("2d")
if(m==null)m=u.m.a(m)
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
s=A.cV(b)
r=s.a
q=B.a.U(1,s.b)
m=n.y
if(!(a>=0&&a<m.length))return A.b(m,a)
m=m[a]
if(!(r>=0&&r<m.length))return A.b(m,r)
p=m[r]
m.$flags&2&&A.bN(m)
m[r]=(p|q)>>>0
p=d.getContext("2d")
m=p==null?u.m.a(p):p
m.save()
m.beginPath()
m.fillStyle=c
p=n.d
o=n.e
m.fillRect(b*p,a*o,p,o)
m.restore()},
aG(a,b){var t,s,r,q,p=this.X(b,a)
b=p.a
t=A.cV(p.b)
s=t.a
r=B.a.U(1,t.b)
q=this.y
if(!(b>=0&&b<q.length))return A.b(q,b)
q=q[b]
if(!(s>=0&&s<q.length))return A.b(q,s)
return(q[s]&r)>>>0>0},
aB(a,b,c,d,e){var t,s,r,q,p,o,n,m,l=this
if(e==null)e=l.c-c
if(b==null)b=l.b-d
l.a2()
if(c===0&&d===0&&e===l.c&&b===l.b){for(t=l.y,s=t.length,r=0;r<s;++r)for(q=0;p=t[r],q<p.length;++q){p.$flags&2&&A.bN(p)
p[q]=0}t=l.x
s=t.getContext("2d")
if(s==null)s=u.m.a(s)
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
for(q=c;q<n;++q)l.K(m,B.a.n(q,s),p,!1)}}l.a3()},
G(a){return this.aB(0,null,0,0,null)},
aV(a,b,c,d,e,a0,a1,a2,a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
f.a2()
t=f.X(a,b)
a=t.a
b=t.b
s=B.a.aX(1,e)-1
for(r=e-1,q=u.t,p=f.x,o=0;o<8;++o){n=c[o]
m=n&s
n=A.a([],q)
for(l=a+o,k=0;k<e;++k){j=f.aG(b+k,l)?1:0
n.push(B.a.U(j,r-k))}i=B.x.b4(n,0,new A.c0())
switch(a0){case B.y:for(k=0;k<e;++k){n=b+k
if((B.a.E(m,r-k)&1)>0)f.L(l,n,d,p,!1)
else f.K(l,n,p,!1)}break
case B.dS:for(k=0;k<e;++k){n=b+k
if((B.a.E(m,r-k)&1)>0)f.K(l,n,p,!1)
else f.L(l,n,d,p,!1)}break
case B.dU:for(k=0;k<e;++k){h=r-k
if((B.a.E(m,h)&1)>0&&(B.a.aL(i,h)&1)===0)f.L(l,b+k,d,p,!1)}break
case B.dT:for(k=0;k<e;++k)if((B.a.E(m,r-k)&1)>0)f.L(l,b+k,d,p,!1)
break
case B.dV:for(g=m&i,k=0;k<e;++k)if((B.a.E(g,r-k)&1)>0)f.L(l,b+k,d,p,!1)
break
case B.dW:for(g=m&i,k=0;k<e;++k)if((B.a.E(g,r-k)&1)>0)f.K(l,b+k,p,!1)
break
case B.dX:for(g=m&i,k=0;k<e;++k)if((B.a.E(g,r-k)&1)===0)f.K(l,b+k,p,!1)
break
case B.dY:for(g=m&i,k=0;k<e;++k){n=b+k
if((B.a.E(g,r-k)&1)===0)f.K(l,n,p,!1)
else f.L(l,n,d,p,!1)}break}}f.a3()},
aH(a,b,c){this.aV(c.a,c.b,b,a,8,B.y,!0,!1,!1)},
aK(a){var t,s,r,q,p,o,n,m,l=this,k=l.b
a=B.a.n(a,k)
for(t=k-a,s=l.y,r=s.length,q=0;q<t;++q){if(!(q<r))return A.b(s,q)
p=q+a
o=0
for(;n=s[q],o<n.length;++o){if(!(p<r))return A.b(s,p)
m=s[p]
if(!(o<m.length))return A.b(m,o)
m=m[o]
n.$flags&2&&A.bN(n)
n[o]=m}}for(;q<k;++q){if(!(q<r))return A.b(s,q)
o=0
for(;p=s[q],o<p.length;++o){p.$flags&2&&A.bN(p)
p[o]=0}}l.a2()
k=l.x
s=k.getContext("2d")
if(s==null)s=u.m.a(s)
s.save()
s.beginPath()
r=l.e
s.drawImage(l.w,0,-a*r)
s.fillStyle=l.r
s.fillRect(0,t*r,k.width,a*r)
s.restore()
l.a3()},
S(){var t=this.w
t.style.opacity="1.0"
t.focus()},
P(){var t=this.w
t.style.opacity="0.5"
t.blur()}}
A.c1.prototype={
$0(){this.a.z=!0}}
A.c2.prototype={
$0(){this.a.z=!1}}
A.c3.prototype={
$0(){this.a.S()}}
A.c4.prototype={
$0(){this.a.P()}}
A.c0.prototype={
$2(a,b){return(a|b)>>>0}}
A.A.prototype={
V(){return"Mode."+this.b}}
A.a6.prototype={
V(){return"State."+this.b}}
A.c9.prototype={
aO(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var t=this,s=new A.ch(),r=t.f
r.tabIndex=-1
r.onfocus=A.aX(new A.ca(t))
r.onblur=A.aX(new A.cb(t))
r.onkeydown=A.d2(new A.cc(t,l,s,new A.cg(t)))
r.onclick=A.d2(new A.cd(t,new A.ci(t),o))
s=A.d2(new A.ce(t,m,s))
r.onkeyup=s
A.dA(A.dm(300),new A.cf(t))
t.P()
t.G(0)},
gad(){var t=this.w
t===$&&A.M()
return t.gad()},
gab(){var t=this.w
t===$&&A.M()
return t.gab()},
O(a,b){return new A.d(B.a.n(a,this.a),B.a.n(b,this.b))},
aq(){var t=this,s=t.x
t.CW.u(0,new A.H(s.c,s.d," ","white"))
t.l()
t.cy=!1},
l(){var t,s,r,q,p,o,n,m,l,k,j,i=this
for(t=i.CW,s=A.dF(t,t.r,t.$ti.c),r=i.w,q=i.cx,p=8+i.c,o=s.$ti.c;s.k();){n=s.d
if(n==null)n=o.a(n)
m=n.a
l=n.b
if(q.R(n.c)){k=q.j(0,n.c)
k.toString
j=k}else j=$.eb()
r===$&&A.M()
r.aH(n.d,j,new A.d(m*p,l*8))}t.G(0)},
aj(a,b){var t,s=this.O(b,a)
b=s.a
a=s.b
t=this.ch
if(!(b>=0&&b<t.length))return A.b(t,b)
t=t[b]
if(!(a>=0&&a<t.length))return A.b(t,a)
return t[a].c},
A(a,b,c){var t,s=this.O(c,b)
c=s.a
b=s.b
t=this.ch
if(!(c>=0&&c<t.length))return A.b(t,c)
t=t[c]
if(!(b>=0&&b<t.length))return A.b(t,b)
t=t[b]
t.c=a
this.CW.u(0,t)},
C(a,b,c){var t,s=this.O(c,b)
c=s.a
b=s.b
t=this.ch
if(!(c>=0&&c<t.length))return A.b(t,c)
t=t[c]
if(!(b>=0&&b<t.length))return A.b(t,b)
t=t[b]
t.d=a
this.CW.u(0,t)},
b8(){var t,s=this.x
s.sY(0)
t=s.c
if(t===this.a-1)this.al()
else s.c=B.a.n(t+1,s.a)},
al(){var t,s,r,q,p,o,n,m,l=this
for(t=l.a-1,s=l.b,r=l.ch,q=0;q<t;q=p)for(p=q+1,o=0;o<s;++o){n=r.length
if(!(q<n))return A.b(r,q)
m=r[q]
if(!(o<m.length))return A.b(m,o)
m=m[o]
if(!(p<n))return A.b(r,p)
n=r[p]
if(!(o<n.length))return A.b(n,o)
n=n[o]
m.c=n.c
m.d=n.d}for(o=0;o<s;++o){if(!(t>=0&&t<r.length))return A.b(r,t)
n=r[t]
if(!(o<n.length))return A.b(n,o)
n=n[o]
n.c=" "
n.d="white"}t=l.w
t===$&&A.M()
t.aK(8+l.c)},
ah(a,b,c,d,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=a0==null?g.x.c:a0,e=g.O(f,c==null?g.x.d:c)
f=g.x
t=f.a
f.c=B.a.n(e.a,t)
f.sY(e.b)
if(b==null)b="white"
for(s=a.split(""),r=s.length,q=g.ch,p=g.CW,o=g.a-1,n=g.b-1,m=0;m<r;++m){l=s[m]
k=f.c
j=f.d
if(!(k>=0&&k<q.length))return A.b(q,k)
i=q[k]
if(!(j>=0&&j<i.length))return A.b(i,j)
h=i[j]
h.c=l
h.d=b
p.u(0,h)
if(k===o&&j===n){g.al()
f.c=B.a.n(f.c-1,t)}f.sY(f.d+1)}g.l()
if(d)g.b8()},
ag(a,b,c,d){return this.ah(a,b,c,!0,d)},
b9(a,b,c,d){return this.ah(a,null,b,c,d)},
aF(a,b){return this.ah(a,null,null,b,null)},
aA(a,b,c,d){var t,s,r,q,p,o,n=this,m=n.b-b
if(c==null)c=n.a-d
t=d+c
s=b+m
for(r=n.ch,q=d;q<t;++q)for(p=b;p<s;++p){if(!(q<r.length))return A.b(r,q)
o=r[q]
if(!(p<o.length))return A.b(o,p)
o=o[p]
o.c=" "
o.d="white"}r=n.w
r===$&&A.M()
o=8+n.c
r.aB(0,c*o,b*8,d*o,m*8)
o=n.x
o.c=B.a.n(d,o.a)
o.sY(b)},
G(a){return this.aA(0,0,null,0)},
S(){return this.gad().$0()},
P(){return this.gab().$0()}}
A.ci.prototype={
$1(a){var t,s,r,q,p,o,n,m,l,k=this.a,j=k.w
j===$&&A.M()
t=J.dg(a.offsetX)
s=Math.max(Math.min(B.a.J(J.dg(a.offsetY)-1,j.e),j.b-1),0)
r=Math.max(Math.min(B.a.J(t-1,j.d),j.c-1),0)
q=B.a.J(s,8+k.c)
p=B.a.F(r,8)
o=k.aj(p,q)
n=k.O(q,p)
m=n.a
l=n.b
k=k.ch
if(!(m>=0&&m<k.length))return A.b(k,m)
k=k[m]
if(!(l>=0&&l<k.length))return A.b(k,l)
return new A.bX(q,p,o,k[l].d,s,r,j.aG(r,s))}}
A.ch.prototype={
$1(a){var t=a.keyCode
return new A.bU(t)}}
A.cg.prototype={
$0(){var t,s,r,q,p,o=this.a,n=o.a,m=o.b,l=new A.a3(n,m)
l.sB(o.y.gB())
t=A.a([],u.s)
for(s=o.z,r=s.b;q=l.c,p=l.d,q*m+p<s.c*r+s.d;q=l.c*m+l.d+1,l.c=B.a.n(B.a.J(q,m),n),l.d=B.a.n(q,m))t.push(o.aj(p,q))
return B.x.b7(t,"")}}
A.ca.prototype={
$0(){var t=this.a.w
t===$&&A.M()
t.S()}}
A.cb.prototype={
$0(){var t=this.a.w
t===$&&A.M()
t.P()}}
A.cc.prototype={
$1(a){var t,s,r,q
a.preventDefault()
t=this.a
switch(t.ay){case B.A:this.b.$2(t,this.c.$1(a))
break
case B.e2:break
case B.B:t.aq()
$label0$1:{s=a.keyCode
if(13===s)break $label0$1
if(8===s){r=t.x
if(r.gB()>t.y.gB()){r.sB(r.gB()-1)
t.aF(" ",!1)
r.sB(r.gB()-1)}break $label0$1}q=a.key
if(q.length===1&&t.x.gB()<t.z.gB())t.aF(q,!1)}break
case B.e3:break}}}
A.cd.prototype={
$1(a){a.preventDefault()}}
A.ce.prototype={
$1(a){a.preventDefault()
this.b.$2(this.a,this.c.$1(a))}}
A.cf.prototype={
$1(a){var t,s,r,q=this.a,p=q.w
p===$&&A.M()
if(p.z&&J.ae(v.G.document.activeElement,p.w)&&q.ay===B.B)if(q.cy)q.aq()
else{t=q.x
s=t.c
t=t.d
r=$.ea()
p.aH("white",r,new A.d(s*(8+q.c),t*8))
q.cy=!0}}}
A.b9.prototype={}
A.b4.prototype={}
A.N.prototype={
V(){return"Cell."+this.b},
gM(){switch(this){case B.c:var t=" "
break
case B.b:t="\u2588"
break
case B.d:t="\u2591"
break
default:t=null}return t},
gN(){var t="#69b41e"
switch(this){case B.c:break
case B.b:break
case B.d:t="#b8d53d"
break
default:t=null}return t}}
A.w.prototype={
V(){return"GameState."+this.b}}
A.b8.prototype={
ai(){var t="Level: "+this.as+" Score: "+this.at
this.b.b9(t,B.a.F(40-t.length,2),!1,26)},
b0(a,b){var t,s,r,q,p=this
for(t=p.e,s=0;s<25;++s){r=B.a.n(p.f+1,25)
p.f=r
if(!(r<t.length))return A.b(t,r)
q=t[r]
if(!q.f){q.a=a
q.b=b
q.f=!0
t=p.a
do{q.c=t.a0(3)-1
r=t.a0(3)-1
q.d=r}while(q.c===0&&r===0);++p.r
break}}},
aE(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this
for(t=a5.e,s=t.length,r=a5.c,q=a5.b,p=a5.w,o=u.R,n=0;n<t.length;t.length===s||(0,A.bM)(t),++n){m=t[n]
if(m.f){l=m.a
k=r.length
if(!(l>=0&&l<k))return A.b(r,l)
j=r[l]
i=m.b
h=j.length
if(!(i>=0&&i<h))return A.b(j,i)
g=j[i]
if(g===B.b){m.f=!1
q.A(B.b.gM(),i,l)
q.l()
l=m.a
k=m.b
q.C(B.b.gN(),k,l)
q.l();--a5.r
continue}f=(m.e+1)%3
m.e=f
if(f===0){f=m.c
e=l+f
d=m.d
c=i+d
if(!(e>=0&&e<k))return A.b(r,e)
k=r[e]
b=k.length
if(!(c>=0&&c<b))return A.b(k,c)
if(k[c]===B.b){if(!(i<b))return A.b(k,i)
k=k[i]===B.b
if(k)f=m.c=f*-1
if(!(c<h))return A.b(j,c)
j=j[c]===B.b
h=j?m.d=d*-1:d
if(!k&&!j){m.d=h*-1
m.c=f*-1}}q.A(g.gM(),i,l)
q.l()
l=m.a
k=m.b
if(!(l>=0&&l<r.length))return A.b(r,l)
j=r[l]
if(!(k>=0&&k<j.length))return A.b(j,k)
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
if(!(l>=0&&l<r.length))return A.b(r,l)
l=r[l]
k=m.b
if(!(k>=0&&k<l.length))return A.b(l,k)
if(l[k]===B.d){p.G(0)
a=A.dr([new A.d(m.a,m.b)],o)
for(;a.a!==0;){a0=a.e
if(a0==null)A.X(A.bw("No elements"))
a1=a0.a
a2=a1.a
a3=a1.b
a.H(0,new A.d(a2,a3))
p.u(0,new A.d(a2,a3))
for(a4=0;a4<4;++a4){l=B.f[a4]
k=a2+l.a
l=a3+l.b
if(!p.aC(0,new A.d(k,l))){if(!(k>=0&&k<r.length))return A.b(r,k)
j=r[k]
if(!(l>=0&&l<j.length))return A.b(j,l)
j=j[l]===B.d}else j=!1
if(j)a.u(0,new A.d(k,l))}}a5.d=B.v}}}}},
b2(){var t,s,r,q,p,o,n,m,l,k,j
for(t=this.x,s=this.c,r=this.b;t.a!==0;){q=t.e
if(q==null)A.X(A.bw("No elements"))
p=q.a
o=p.a
n=p.b
t.H(0,new A.d(o,n))
for(m=0;m<4;++m){l=B.f[m]
k=o+l.a
if(!(k>=0&&k<s.length))return A.b(s,k)
j=s[k]
l=n+l.b
if(!(l>=0&&l<j.length))return A.b(j,l)
if(j[l]===B.d)t.u(0,new A.d(k,l))}if(!(o>=0&&o<s.length))return A.b(s,o)
l=s[o]
if(!(n>=0&&n<l.length))return A.b(l,n)
l[n]=B.b
r.A(B.b.gM(),n,o)
r.l()
r.C(B.b.gN(),n,o)
r.l()}},
b1(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a="No elements",a0=u.R,a1=A.eN(a0,u.d)
for(t=b.y,s=b.c;t.a!==0;){r=t.e
if(r==null)A.X(A.bw(a))
q=r.a
p=q.a
o=q.b
t.H(0,new A.d(p,o))
if(!(p>=0&&p<s.length))return A.b(s,p)
n=s[p]
if(!(o>=0&&o<n.length))return A.b(n,o)
if(n[o]===B.b)continue
a1.T(0,new A.d(p,o),A.a0(a0))
m=A.dr([new A.d(p,o)],a0)
for(;m.a!==0;){r=m.e
if(r==null)A.X(A.bw(a))
l=r.a
k=l.a
j=l.b
m.H(0,new A.d(k,j))
a1.j(0,new A.d(p,o)).u(0,new A.d(k,j))
for(i=0;i<4;++i){n=B.f[i]
h=k+n.a
n=j+n.b
if(!a1.j(0,new A.d(p,o)).aC(0,new A.d(h,n))){if(!(h>=0&&h<s.length))return A.b(s,h)
g=s[h]
if(!(n>=0&&n<g.length))return A.b(g,n)
g=g[n]===B.c}else g=!1
if(g)m.u(0,new A.d(h,n))}}n=a1.j(0,new A.d(p,o))
n.toString
t.bc(n)}if(a1.a>1){a0=a1.$ti
f=new A.aw(a1,a0.i("aw<1>")).gac(0)
e=a1.j(0,f).a
for(a0=new A.av(a1,a0.i("av<1,2>")).gv(0);a0.k();){t=a0.d
d=t.a
c=t.b.a
if(c<e){e=c
f=d}}a0=a1.j(0,f)
a0.toString
b.z.az(0,a0)
b.d=B.q}},
bd(){var t,s,r,q,p,o,n,m=this.b
m.aA(0,0,25,0)
for(t=this.c,s=0;s<25;++s)for(r=s!==0,q=s!==24,p=0;p<40;++p){if(!(s<t.length))return A.b(t,s)
o=t[s]
n=!r||!q||p===0||p===39?B.b:B.c
if(!(p<o.length))return A.b(o,p)
o[p]=n
n=t[s]
if(!(p<n.length))return A.b(n,p)
m.A(n[p].gM(),p,s)
m.l()
if(!(s<t.length))return A.b(t,s)
n=t[s]
if(!(p<n.length))return A.b(n,p)
m.C(n[p].gN(),p,s)
m.l()}},
aJ(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d="#b8d53d"
switch(e.d){case B.i:t=e.b
t.G(0)
s=A.a([],u.s)
for(r=".----.                   \n|  o |---.-.-.---.---.---.\n|  o | o | | | | |  _| o_:\n'----'---'---'-'-'---'---'\n".split("\n"),q=r.length,p=0;p<q;++p){o=r[p]
if(B.l.bh(o).length!==0)s.push(B.l.bb(o,28))}for(s=A.eC(s,0,u.N),r=J.af(s.a),s=s.b,q=new A.an(r,s);q.k();){n=q.c
n=n>=0?new A.d(s+n,r.gp()):A.X(A.cO())
t.ag(n.b,"#8dc71e",7,n.a+5)}t.ag("Press Enter to Start!",d,10,10)
e.d=B.p
break
case B.p:t=$.C.j(0,13)
t.toString
if(t){e.as=1
e.at=0
e.ai()
e.d=B.j}break
case B.j:t=e.Q
t.a=0
t.b=20
e.bd()
for(t=[e.y,e.x],p=0;p<2;++p)t[p].G(0)
for(t=e.e,s=t.length,p=0;p<s;++p){m=t[p]
m.f=!1
m.e=0}a=e.r=0
for(t=e.a;a<e.as;++a)e.b0(t.a0(23)+1,t.a0(38)+1)
e.d=B.k
break
case B.k:t=$.C.j(0,38)
t.toString
s=$.C.j(0,40)
s.toString
r=$.C.j(0,37)
r.toString
q=$.C.j(0,39)
q.toString
l=0
if(t)k=e.Q.a===0?0:-1
else if(s)k=e.Q.a===24?0:1
else{if(r)l=e.Q.b===0?0:-1
else if(q)l=e.Q.b===39?0:1
k=0}t=e.c
s=e.Q
r=s.a
if(!(r>=0&&r<t.length))return A.b(t,r)
q=t[r]
n=s.b
if(!(n>=0&&n<q.length))return A.b(q,n)
j=q[n]
if(j===B.b||j===B.d){e.b2()
e.b1()}else{if(k!==0||l!==0)q[n]=B.d
q=e.x
if(q.a===0)q.u(0,new A.d(r,n))
for(r=e.y,p=0;p<4;++p){q=B.f[p]
n=s.a+q.a
q=s.b+q.b
j=!1
if(n>=0)if(n<25)if(q>=0)if(q<40){if(!(n<t.length))return A.b(t,n)
j=t[n]
if(!(q<j.length))return A.b(j,q)
j=j[q]===B.c}if(j)r.u(0,new A.d(n,q))}r=e.b
q=s.a
r.A("\u2592",s.b,q)
r.l()}r=e.b
q=s.a
n=s.b
if(!(q>=0&&q<t.length))return A.b(t,q)
j=t[q]
if(!(n>=0&&n<j.length))return A.b(j,n)
r.A(j[n].gM(),n,q)
r.l()
q=s.a
n=s.b
if(!(q>=0&&q<t.length))return A.b(t,q)
t=t[q]
if(!(n>=0&&n<t.length))return A.b(t,n)
r.C(t[n].gN(),n,q)
r.l()
q=s.a+=k
r.A("\u25a0",s.b+=l,q)
r.l()
q=s.a
r.C(d,s.b,q)
r.l()
e.aE()
break
case B.q:t=e.z
if(t.a===0)e.d=B.r
else{s=A.dz(t,10,t.$ti.c)
i=A.ds(s,A.bK(s).i("p.E"))
for(s=i.length,r=e.c,q=e.b,p=0;p<i.length;i.length===s||(0,A.bM)(i),++p){n=i[p]
h=n.a
g=n.b
t.H(0,new A.d(h,g))
if(!(h>=0&&h<r.length))return A.b(r,h)
n=r[h]
if(!(g>=0&&g<n.length))return A.b(n,g)
n[g]=B.b
q.A(B.b.gM(),g,h)
q.l()
q.C(B.b.gN(),g,h)
q.l()}}break
case B.r:e.aE()
if(e.r===0){t=A.a([],u.n)
for(s=e.c,h=0;h<25;++h)for(g=0;g<40;++g){if(!(h<s.length))return A.b(s,h)
r=s[h]
if(!(g<r.length))return A.b(r,g)
if(r[g]===B.c)t.push(new A.d(h,g))}e.ax.az(0,t)
e.d=B.t}else e.d=B.k
break
case B.t:t=e.ax
if(t.a!==0){s=A.dz(t,30,t.$ti.c)
i=A.ds(s,A.bK(s).i("p.E"))
for(s=i.length,r=e.b,p=0;p<i.length;i.length===s||(0,A.bM)(i),++p){q=i[p]
h=q.a
g=q.b
t.H(0,new A.d(h,g))
r.A("\u2592",g,h)
r.l()
r.C("#8dc71e",g,h)
r.l();++e.at
e.ai()}}else{++e.as
e.ai()
e.d=B.u}break
case B.u:t=$.C.j(0,13)
t.toString
if(t)e.d=B.j
break
case B.v:t=e.w
s=e.b
if(t.a!==0){f=t.gac(0)
h=f.a
g=f.b
t.H(0,new A.d(h,g))
s.A("\u2591",g,h)
s.l()
s.C("#f73644",g,h)
s.l()}else{s.ag("Game Over!",d,15,12)
e.d=B.w}break
case B.w:t=$.C.j(0,13)
t.toString
if(t)e.d=B.i
break}}}
A.bR.prototype={
$2(a,b){var t=b.a
if($.C.R(t))$.C.T(0,t,!0)}}
A.bS.prototype={
$2(a,b){var t=b.a
if($.C.R(t))$.C.T(0,t,!1)}};(function aliases(){var t=J.J.prototype
t.aM=t.h})();(function installTearOffs(){var t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers._instance_0u,q=hunkHelpers._instance_1u
t(A,"fZ","eY",1)
t(A,"h_","eZ",1)
t(A,"h0","f_",1)
s(A,"dZ","fU",0)
var p
r(p=A.bv.prototype,"gad","S",0)
r(p,"gab","P",0)
q(A.b8.prototype,"gaI","aJ",2)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(A.o,null)
r(A.o,[A.cQ,J.bb,J.b1,A.l,A.c5,A.p,A.bh,A.by,A.an,A.ak,A.a9,A.b6,A.cj,A.bY,A.bI,A.O,A.ax,A.bV,A.bg,A.bf,A.x,A.bG,A.bJ,A.aR,A.bE,A.bD,A.cC,A.a5,A.cv,A.a8,A.j,A.b7,A.cr,A.bs,A.aF,A.cs,A.a1,A.aC,A.bx,A.ct,A.H,A.bU,A.bX,A.a3,A.bv,A.c9,A.b9,A.b8])
r(J.bb,[J.bc,J.ap,J.ar,J.aq,J.as,J.Z,J.a_])
r(J.ar,[J.J,J.i,A.bi,A.aA])
r(J.J,[J.bt,J.a7,J.I])
s(J.bT,J.i)
r(J.Z,[J.ao,J.bd])
r(A.l,[A.au,A.aJ,A.be,A.bA,A.bu,A.bF,A.b2,A.G,A.aK,A.bz,A.aG,A.b5])
r(A.p,[A.ai,A.aI,A.am])
s(A.aj,A.aI)
s(A.ah,A.am)
s(A.bH,A.a9)
s(A.d,A.bH)
s(A.al,A.b6)
s(A.aD,A.aJ)
r(A.O,[A.bO,A.bP,A.c8,A.cF,A.cH,A.co,A.cn,A.cx,A.ci,A.ch,A.cc,A.cd,A.ce,A.cf])
r(A.c8,[A.c7,A.ag])
s(A.D,A.ax)
r(A.ai,[A.aw,A.av])
s(A.at,A.D)
r(A.bP,[A.cG,A.bW,A.c0,A.bR,A.bS])
r(A.aA,[A.bj,A.a2])
r(A.a2,[A.aL,A.aN])
s(A.aM,A.aL)
s(A.ay,A.aM)
s(A.aO,A.aN)
s(A.az,A.aO)
r(A.ay,[A.bk,A.bl])
r(A.az,[A.bm,A.bn,A.bo,A.bp,A.bq,A.aB,A.br])
s(A.aS,A.bF)
r(A.bO,[A.cp,A.cq,A.cz,A.cy,A.cD,A.c1,A.c2,A.c3,A.c4,A.cg,A.ca,A.cb])
s(A.bC,A.bE)
s(A.cw,A.cC)
s(A.aQ,A.a5)
s(A.P,A.aQ)
r(A.G,[A.a4,A.ba])
r(A.cr,[A.A,A.a6,A.N,A.w])
s(A.b4,A.b9)
t(A.aL,A.j)
t(A.aM,A.ak)
t(A.aN,A.j)
t(A.aO,A.ak)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{c:"int",q:"double",e6:"num",aH:"String",e_:"bool",aC:"Null",h:"List",o:"Object",hu:"Map"},mangledNames:{},types:["~()","~(~())","~(cY)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.d&&a.b(c.a)&&b.b(c.b)}}
A.fe(v.typeUniverse,JSON.parse('{"bt":"J","a7":"J","I":"J","bc":{"f":[]},"ap":{"f":[]},"ar":{"n":[]},"J":{"n":[]},"i":{"h":["1"],"n":[]},"bT":{"i":["1"],"h":["1"],"n":[]},"Z":{"q":[]},"ao":{"q":[],"c":[],"f":[]},"bd":{"q":[],"f":[]},"a_":{"aH":[],"f":[]},"au":{"l":[]},"ai":{"p":["1"]},"aI":{"p":["1"],"p.E":"1"},"aj":{"aI":["1"],"p":["1"],"p.E":"1"},"am":{"p":["+(c,1)"],"p.E":"+(c,1)"},"ah":{"am":["1"],"p":["+(c,1)"],"p.E":"+(c,1)"},"al":{"b6":["1","2"]},"aD":{"l":[]},"be":{"l":[]},"bA":{"l":[]},"bu":{"l":[]},"D":{"ax":["1","2"]},"aw":{"p":["1"],"p.E":"1"},"av":{"p":["a1<1,2>"],"p.E":"a1<1,2>"},"at":{"D":["1","2"],"ax":["1","2"]},"bi":{"n":[],"f":[]},"aA":{"n":[]},"bj":{"n":[],"f":[]},"a2":{"t":["1"],"n":[]},"ay":{"j":["q"],"h":["q"],"t":["q"],"n":[]},"az":{"j":["c"],"h":["c"],"t":["c"],"n":[]},"bk":{"j":["q"],"h":["q"],"t":["q"],"n":[],"f":[],"j.E":"q"},"bl":{"j":["q"],"h":["q"],"t":["q"],"n":[],"f":[],"j.E":"q"},"bm":{"j":["c"],"h":["c"],"t":["c"],"n":[],"f":[],"j.E":"c"},"bn":{"j":["c"],"h":["c"],"t":["c"],"n":[],"f":[],"j.E":"c"},"bo":{"j":["c"],"h":["c"],"t":["c"],"n":[],"f":[],"j.E":"c"},"bp":{"j":["c"],"h":["c"],"t":["c"],"n":[],"f":[],"j.E":"c"},"bq":{"cl":[],"j":["c"],"h":["c"],"t":["c"],"n":[],"f":[],"j.E":"c"},"aB":{"j":["c"],"h":["c"],"t":["c"],"n":[],"f":[],"j.E":"c"},"br":{"j":["c"],"h":["c"],"t":["c"],"n":[],"f":[],"j.E":"c"},"bF":{"l":[]},"aS":{"l":[]},"aR":{"cY":[]},"P":{"a5":["1"],"c6":["1"]},"a5":{"c6":["1"]},"aQ":{"a5":["1"],"c6":["1"]},"b2":{"l":[]},"aJ":{"l":[]},"G":{"l":[]},"a4":{"l":[]},"ba":{"l":[]},"aK":{"l":[]},"bz":{"l":[]},"aG":{"l":[]},"b5":{"l":[]},"bs":{"l":[]},"aF":{"l":[]},"eF":{"h":["c"]},"eW":{"h":["c"]},"eV":{"h":["c"]},"eD":{"h":["c"]},"eU":{"h":["c"]},"eE":{"h":["c"]},"cl":{"h":["c"]},"ez":{"h":["q"]},"eA":{"h":["q"]}}'))
A.fd(v.typeUniverse,JSON.parse('{"ai":1,"an":1,"ak":1,"bg":1,"a2":1,"bE":1,"bC":1,"aQ":1}'))
var u=(function rtii(){var t=A.d9
return{o:t("H"),C:t("l"),Z:t("ht"),O:t("i<b4>"),U:t("i<H>"),q:t("i<N>"),J:t("i<h<H>>"),G:t("i<h<N>>"),f:t("i<o>"),n:t("i<+(c,c)>"),s:t("i<aH>"),v:t("i<cl>"),b:t("i<@>"),t:t("i<c>"),T:t("ap"),m:t("n"),g:t("I"),p:t("t<@>"),j:t("h<@>"),P:t("aC"),K:t("o"),L:t("hv"),F:t("+()"),R:t("+(c,c)"),d:t("c6<+(c,c)>"),l:t("hw"),N:t("aH"),k:t("f"),A:t("a7"),y:t("e_"),i:t("q"),z:t("@"),S:t("c"),Q:t("dn<aC>?"),X:t("o?"),w:t("aH?"),u:t("e_?"),I:t("q?"),x:t("c?"),B:t("e6?"),H:t("e6")}})();(function constants(){var t=hunkHelpers.makeConstList
B.K=J.bb.prototype
B.x=J.i.prototype
B.a=J.ao.prototype
B.L=J.Z.prototype
B.l=J.a_.prototype
B.M=J.I.prototype
B.N=J.ar.prototype
B.z=J.bt.prototype
B.m=J.a7.prototype
B.n=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.C=function() {
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
B.H=function(getTagFallback) {
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
B.D=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.G=function(hooks) {
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
B.F=function(hooks) {
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
B.E=function(hooks) {
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
B.o=function(hooks) { return hooks; }

B.I=new A.bs()
B.e=new A.c5()
B.J=new A.ct()
B.h=new A.cw()
B.c=new A.N("empty")
B.b=new A.N("solid")
B.d=new A.N("trail")
B.i=new A.w("titleScreenSetup")
B.p=new A.w("titleScreenWait")
B.j=new A.w("setupLevel")
B.k=new A.w("play")
B.q=new A.w("playFill")
B.r=new A.w("checkBouncers")
B.t=new A.w("levelFill")
B.u=new A.w("levelFillWait")
B.v=new A.w("gameOver")
B.w=new A.w("gameOverWait")
B.e1=new A.d(-1,0)
B.e0=new A.d(1,0)
B.e_=new A.d(0,-1)
B.dZ=new A.d(0,1)
B.f=A.a(t([B.e1,B.e0,B.e_,B.dZ]),u.n)
B.dc=A.a(t([126,129,165,129,189,153,129,126]),u.t)
B.ae=A.a(t([126,255,219,255,195,231,255,126]),u.t)
B.dJ=A.a(t([108,254,254,254,124,56,16,0]),u.t)
B.c9=A.a(t([16,56,124,254,124,56,16,0]),u.t)
B.b7=A.a(t([56,124,56,254,254,124,56,124]),u.t)
B.bj=A.a(t([16,16,56,124,254,124,56,124]),u.t)
B.aC=A.a(t([0,0,24,60,60,24,0,0]),u.t)
B.aF=A.a(t([255,255,231,195,195,231,255,255]),u.t)
B.aR=A.a(t([0,60,102,66,66,102,60,0]),u.t)
B.cX=A.a(t([255,195,153,189,189,153,195,255]),u.t)
B.dI=A.a(t([15,7,15,125,204,204,204,120]),u.t)
B.dH=A.a(t([60,102,102,102,60,24,126,24]),u.t)
B.cU=A.a(t([63,51,63,48,48,112,240,224]),u.t)
B.Y=A.a(t([127,99,127,99,99,103,230,192]),u.t)
B.a2=A.a(t([153,90,60,231,231,60,90,153]),u.t)
B.az=A.a(t([128,224,248,254,248,224,128,0]),u.t)
B.bF=A.a(t([2,14,62,254,62,14,2,0]),u.t)
B.cn=A.a(t([24,60,126,24,24,126,60,24]),u.t)
B.cj=A.a(t([102,102,102,102,102,0,102,0]),u.t)
B.ct=A.a(t([127,219,219,123,27,27,27,0]),u.t)
B.cu=A.a(t([62,99,56,108,108,56,204,120]),u.t)
B.bT=A.a(t([0,0,0,0,126,126,126,0]),u.t)
B.bW=A.a(t([24,60,126,24,126,60,24,255]),u.t)
B.T=A.a(t([24,60,126,24,24,24,24,0]),u.t)
B.dh=A.a(t([24,24,24,24,126,60,24,0]),u.t)
B.da=A.a(t([0,24,12,254,12,24,0,0]),u.t)
B.aw=A.a(t([0,48,96,254,96,48,0,0]),u.t)
B.c0=A.a(t([0,0,192,192,192,254,0,0]),u.t)
B.by=A.a(t([0,36,102,255,102,36,0,0]),u.t)
B.ac=A.a(t([0,24,60,126,255,255,0,0]),u.t)
B.bX=A.a(t([0,255,255,126,60,24,0,0]),u.t)
B.b2=A.a(t([0,0,0,0,0,0,0,0]),u.t)
B.bG=A.a(t([48,120,120,48,48,0,48,0]),u.t)
B.a0=A.a(t([108,108,108,0,0,0,0,0]),u.t)
B.aq=A.a(t([108,108,254,108,254,108,108,0]),u.t)
B.c4=A.a(t([48,124,192,120,12,248,48,0]),u.t)
B.S=A.a(t([0,198,204,24,48,102,198,0]),u.t)
B.cG=A.a(t([56,108,56,118,220,204,118,0]),u.t)
B.ap=A.a(t([96,96,192,0,0,0,0,0]),u.t)
B.X=A.a(t([24,48,96,96,96,48,24,0]),u.t)
B.bC=A.a(t([96,48,24,24,24,48,96,0]),u.t)
B.cx=A.a(t([0,102,60,255,60,102,0,0]),u.t)
B.dQ=A.a(t([0,48,48,252,48,48,0,0]),u.t)
B.c6=A.a(t([0,0,0,0,0,48,48,96]),u.t)
B.bx=A.a(t([0,0,0,252,0,0,0,0]),u.t)
B.cl=A.a(t([0,0,0,0,0,48,48,0]),u.t)
B.a7=A.a(t([6,12,24,48,96,192,128,0]),u.t)
B.ba=A.a(t([124,198,206,222,246,230,124,0]),u.t)
B.co=A.a(t([48,112,48,48,48,48,252,0]),u.t)
B.c2=A.a(t([120,204,12,56,96,204,252,0]),u.t)
B.dL=A.a(t([120,204,12,56,12,204,120,0]),u.t)
B.bE=A.a(t([28,60,108,204,254,12,30,0]),u.t)
B.db=A.a(t([252,192,248,12,12,204,120,0]),u.t)
B.dt=A.a(t([56,96,192,248,204,204,120,0]),u.t)
B.c3=A.a(t([252,204,12,24,48,48,48,0]),u.t)
B.cA=A.a(t([120,204,204,120,204,204,120,0]),u.t)
B.bh=A.a(t([120,204,204,124,12,24,112,0]),u.t)
B.d4=A.a(t([0,48,48,0,0,48,48,0]),u.t)
B.aU=A.a(t([0,48,48,0,0,48,48,96]),u.t)
B.bD=A.a(t([24,48,96,192,96,48,24,0]),u.t)
B.bs=A.a(t([0,0,252,0,0,252,0,0]),u.t)
B.aE=A.a(t([96,48,24,12,24,48,96,0]),u.t)
B.au=A.a(t([120,204,12,24,48,0,48,0]),u.t)
B.dp=A.a(t([124,198,222,222,222,192,120,0]),u.t)
B.cf=A.a(t([48,120,204,204,252,204,204,0]),u.t)
B.aO=A.a(t([252,102,102,124,102,102,252,0]),u.t)
B.ag=A.a(t([60,102,192,192,192,102,60,0]),u.t)
B.a8=A.a(t([248,108,102,102,102,108,248,0]),u.t)
B.am=A.a(t([254,98,104,120,104,98,254,0]),u.t)
B.cr=A.a(t([254,98,104,120,104,96,240,0]),u.t)
B.as=A.a(t([60,102,192,192,206,102,62,0]),u.t)
B.av=A.a(t([204,204,204,252,204,204,204,0]),u.t)
B.cP=A.a(t([120,48,48,48,48,48,120,0]),u.t)
B.bR=A.a(t([30,12,12,12,204,204,120,0]),u.t)
B.bJ=A.a(t([230,102,108,120,108,102,230,0]),u.t)
B.bI=A.a(t([240,96,96,96,98,102,254,0]),u.t)
B.aP=A.a(t([198,238,254,254,214,198,198,0]),u.t)
B.a_=A.a(t([198,230,246,222,206,198,198,0]),u.t)
B.cZ=A.a(t([56,108,198,198,198,108,56,0]),u.t)
B.bn=A.a(t([252,102,102,124,96,96,240,0]),u.t)
B.cJ=A.a(t([120,204,204,204,220,120,28,0]),u.t)
B.R=A.a(t([252,102,102,124,108,102,230,0]),u.t)
B.aj=A.a(t([120,204,224,112,28,204,120,0]),u.t)
B.dC=A.a(t([252,180,48,48,48,48,120,0]),u.t)
B.aM=A.a(t([204,204,204,204,204,204,252,0]),u.t)
B.a4=A.a(t([204,204,204,204,204,120,48,0]),u.t)
B.cS=A.a(t([198,198,198,214,254,238,198,0]),u.t)
B.cM=A.a(t([198,198,108,56,56,108,198,0]),u.t)
B.a6=A.a(t([204,204,204,120,48,48,120,0]),u.t)
B.V=A.a(t([254,198,140,24,50,102,254,0]),u.t)
B.bz=A.a(t([120,96,96,96,96,96,120,0]),u.t)
B.cE=A.a(t([192,96,48,24,12,6,2,0]),u.t)
B.bB=A.a(t([120,24,24,24,24,24,120,0]),u.t)
B.ds=A.a(t([16,56,108,198,0,0,0,0]),u.t)
B.Q=A.a(t([0,0,0,0,0,0,0,255]),u.t)
B.aN=A.a(t([48,48,24,0,0,0,0,0]),u.t)
B.di=A.a(t([0,0,120,12,124,204,118,0]),u.t)
B.ci=A.a(t([224,96,96,124,102,102,220,0]),u.t)
B.cL=A.a(t([0,0,120,204,192,204,120,0]),u.t)
B.b8=A.a(t([28,12,12,124,204,204,118,0]),u.t)
B.dv=A.a(t([0,0,120,204,252,192,120,0]),u.t)
B.aS=A.a(t([56,108,96,240,96,96,240,0]),u.t)
B.cI=A.a(t([0,0,118,204,204,124,12,248]),u.t)
B.aD=A.a(t([224,96,108,118,102,102,230,0]),u.t)
B.cy=A.a(t([48,0,112,48,48,48,120,0]),u.t)
B.bM=A.a(t([12,0,12,12,12,204,204,120]),u.t)
B.bf=A.a(t([224,96,102,108,120,108,230,0]),u.t)
B.bO=A.a(t([112,48,48,48,48,48,120,0]),u.t)
B.bw=A.a(t([0,0,204,254,254,214,198,0]),u.t)
B.bP=A.a(t([0,0,248,204,204,204,204,0]),u.t)
B.bi=A.a(t([0,0,120,204,204,204,120,0]),u.t)
B.dz=A.a(t([0,0,220,102,102,124,96,240]),u.t)
B.dw=A.a(t([0,0,118,204,204,124,12,30]),u.t)
B.bt=A.a(t([0,0,220,118,102,96,240,0]),u.t)
B.d1=A.a(t([0,0,124,192,120,12,248,0]),u.t)
B.cV=A.a(t([16,48,124,48,48,52,24,0]),u.t)
B.cc=A.a(t([0,0,204,204,204,204,118,0]),u.t)
B.b6=A.a(t([0,0,204,204,204,120,48,0]),u.t)
B.bm=A.a(t([0,0,198,214,254,254,108,0]),u.t)
B.bK=A.a(t([0,0,198,108,56,108,198,0]),u.t)
B.dF=A.a(t([0,0,204,204,204,124,12,248]),u.t)
B.dg=A.a(t([0,0,252,152,48,100,252,0]),u.t)
B.bc=A.a(t([28,48,48,224,48,48,28,0]),u.t)
B.d0=A.a(t([24,24,24,0,24,24,24,0]),u.t)
B.aH=A.a(t([224,48,48,28,48,48,224,0]),u.t)
B.dP=A.a(t([118,220,0,0,0,0,0,0]),u.t)
B.b5=A.a(t([0,16,56,108,198,198,254,0]),u.t)
B.ay=A.a(t([120,204,192,204,120,24,12,120]),u.t)
B.de=A.a(t([0,204,0,204,204,204,126,0]),u.t)
B.dE=A.a(t([28,0,120,204,252,192,120,0]),u.t)
B.c5=A.a(t([126,195,60,6,62,102,63,0]),u.t)
B.al=A.a(t([204,0,120,12,124,204,126,0]),u.t)
B.b9=A.a(t([224,0,120,12,124,204,126,0]),u.t)
B.ab=A.a(t([48,48,120,12,124,204,126,0]),u.t)
B.bp=A.a(t([0,0,120,192,192,120,12,56]),u.t)
B.dn=A.a(t([126,195,60,102,126,96,60,0]),u.t)
B.aQ=A.a(t([204,0,120,204,252,192,120,0]),u.t)
B.d2=A.a(t([224,0,120,204,252,192,120,0]),u.t)
B.df=A.a(t([204,0,112,48,48,48,120,0]),u.t)
B.cT=A.a(t([124,198,56,24,24,24,60,0]),u.t)
B.b1=A.a(t([224,0,112,48,48,48,120,0]),u.t)
B.dK=A.a(t([198,56,108,198,254,198,198,0]),u.t)
B.d_=A.a(t([48,48,0,120,204,252,204,0]),u.t)
B.bH=A.a(t([28,0,252,96,120,96,252,0]),u.t)
B.dD=A.a(t([0,0,127,12,127,204,127,0]),u.t)
B.aV=A.a(t([62,108,204,254,204,204,206,0]),u.t)
B.dx=A.a(t([120,204,0,120,204,204,120,0]),u.t)
B.ah=A.a(t([0,204,0,120,204,204,120,0]),u.t)
B.dM=A.a(t([0,224,0,120,204,204,120,0]),u.t)
B.aT=A.a(t([120,204,0,204,204,204,126,0]),u.t)
B.cW=A.a(t([0,224,0,204,204,204,126,0]),u.t)
B.aB=A.a(t([0,204,0,204,204,124,12,248]),u.t)
B.an=A.a(t([195,24,60,102,102,60,24,0]),u.t)
B.d8=A.a(t([204,0,204,204,204,204,120,0]),u.t)
B.a1=A.a(t([24,24,126,192,192,126,24,24]),u.t)
B.aK=A.a(t([56,108,100,240,96,230,252,0]),u.t)
B.b3=A.a(t([204,204,120,252,48,252,48,48]),u.t)
B.dj=A.a(t([248,204,204,250,198,207,198,199]),u.t)
B.bS=A.a(t([14,27,24,60,24,24,216,112]),u.t)
B.aG=A.a(t([28,0,120,12,124,204,126,0]),u.t)
B.ch=A.a(t([56,0,112,48,48,48,120,0]),u.t)
B.aJ=A.a(t([0,28,0,120,204,204,120,0]),u.t)
B.cB=A.a(t([0,28,0,204,204,204,126,0]),u.t)
B.aZ=A.a(t([0,248,0,248,204,204,204,0]),u.t)
B.cR=A.a(t([252,0,204,236,252,220,204,0]),u.t)
B.ai=A.a(t([60,108,108,62,0,126,0,0]),u.t)
B.ce=A.a(t([56,108,108,56,0,124,0,0]),u.t)
B.d9=A.a(t([48,0,48,96,192,204,120,0]),u.t)
B.b0=A.a(t([0,0,0,252,192,192,0,0]),u.t)
B.aI=A.a(t([0,0,0,252,12,12,0,0]),u.t)
B.d3=A.a(t([195,198,204,222,51,102,204,15]),u.t)
B.aA=A.a(t([195,198,204,219,55,111,207,3]),u.t)
B.bV=A.a(t([24,24,0,24,24,24,24,0]),u.t)
B.bU=A.a(t([0,51,102,204,102,51,0,0]),u.t)
B.be=A.a(t([0,204,102,51,102,204,0,0]),u.t)
B.cD=A.a(t([34,136,34,136,34,136,34,136]),u.t)
B.dy=A.a(t([85,170,85,170,85,170,85,170]),u.t)
B.bN=A.a(t([219,119,219,238,219,119,219,238]),u.t)
B.b4=A.a(t([24,24,24,24,24,24,24,24]),u.t)
B.b_=A.a(t([24,24,24,24,248,24,24,24]),u.t)
B.c1=A.a(t([24,24,248,24,248,24,24,24]),u.t)
B.dO=A.a(t([54,54,54,54,246,54,54,54]),u.t)
B.cp=A.a(t([0,0,0,0,254,54,54,54]),u.t)
B.aW=A.a(t([0,0,248,24,248,24,24,24]),u.t)
B.af=A.a(t([54,54,246,6,246,54,54,54]),u.t)
B.cv=A.a(t([54,54,54,54,54,54,54,54]),u.t)
B.cd=A.a(t([0,0,254,6,246,54,54,54]),u.t)
B.cz=A.a(t([54,54,246,6,254,0,0,0]),u.t)
B.at=A.a(t([54,54,54,54,254,0,0,0]),u.t)
B.a5=A.a(t([24,24,248,24,248,0,0,0]),u.t)
B.aa=A.a(t([0,0,0,0,248,24,24,24]),u.t)
B.a3=A.a(t([24,24,24,24,31,0,0,0]),u.t)
B.c_=A.a(t([24,24,24,24,255,0,0,0]),u.t)
B.br=A.a(t([0,0,0,0,255,24,24,24]),u.t)
B.d7=A.a(t([24,24,24,24,31,24,24,24]),u.t)
B.bY=A.a(t([0,0,0,0,255,0,0,0]),u.t)
B.cw=A.a(t([24,24,24,24,255,24,24,24]),u.t)
B.cH=A.a(t([24,24,31,24,31,24,24,24]),u.t)
B.bg=A.a(t([54,54,54,54,55,54,54,54]),u.t)
B.du=A.a(t([54,54,55,48,63,0,0,0]),u.t)
B.dm=A.a(t([0,0,63,48,55,54,54,54]),u.t)
B.bL=A.a(t([54,54,247,0,255,0,0,0]),u.t)
B.bA=A.a(t([0,0,255,0,247,54,54,54]),u.t)
B.aY=A.a(t([54,54,55,48,55,54,54,54]),u.t)
B.aX=A.a(t([0,0,255,0,255,0,0,0]),u.t)
B.dG=A.a(t([54,54,247,0,247,54,54,54]),u.t)
B.cN=A.a(t([24,24,255,0,255,0,0,0]),u.t)
B.O=A.a(t([54,54,54,54,255,0,0,0]),u.t)
B.dA=A.a(t([0,0,255,0,255,24,24,24]),u.t)
B.c7=A.a(t([0,0,0,0,255,54,54,54]),u.t)
B.cq=A.a(t([54,54,54,54,63,0,0,0]),u.t)
B.bv=A.a(t([24,24,31,24,31,0,0,0]),u.t)
B.ck=A.a(t([0,0,31,24,31,24,24,24]),u.t)
B.cK=A.a(t([0,0,0,0,63,54,54,54]),u.t)
B.cQ=A.a(t([54,54,54,54,255,54,54,54]),u.t)
B.bQ=A.a(t([24,24,255,24,255,24,24,24]),u.t)
B.dk=A.a(t([24,24,24,24,248,0,0,0]),u.t)
B.bb=A.a(t([0,0,0,0,31,24,24,24]),u.t)
B.c8=A.a(t([255,255,255,255,255,255,255,255]),u.t)
B.cb=A.a(t([0,0,0,0,255,255,255,255]),u.t)
B.bl=A.a(t([240,240,240,240,240,240,240,240]),u.t)
B.cs=A.a(t([15,15,15,15,15,15,15,15]),u.t)
B.d6=A.a(t([255,255,255,255,0,0,0,0]),u.t)
B.dN=A.a(t([0,0,118,220,200,220,118,0]),u.t)
B.dq=A.a(t([0,120,204,248,204,248,192,192]),u.t)
B.ar=A.a(t([0,252,204,192,192,192,192,0]),u.t)
B.ca=A.a(t([0,254,108,108,108,108,108,0]),u.t)
B.dl=A.a(t([252,204,96,48,96,204,252,0]),u.t)
B.bo=A.a(t([0,0,126,216,216,216,112,0]),u.t)
B.bu=A.a(t([0,102,102,102,102,124,96,192]),u.t)
B.cF=A.a(t([0,118,220,24,24,24,24,0]),u.t)
B.ak=A.a(t([252,48,120,204,204,120,48,252]),u.t)
B.aL=A.a(t([56,108,198,254,198,108,56,0]),u.t)
B.ao=A.a(t([56,108,198,198,108,108,238,0]),u.t)
B.P=A.a(t([28,48,24,124,204,204,120,0]),u.t)
B.dB=A.a(t([0,0,126,219,219,126,0,0]),u.t)
B.bq=A.a(t([6,12,126,219,219,126,96,192]),u.t)
B.ad=A.a(t([56,96,192,248,192,96,56,0]),u.t)
B.cm=A.a(t([120,204,204,204,204,204,204,0]),u.t)
B.cO=A.a(t([0,252,0,252,0,252,0,0]),u.t)
B.a9=A.a(t([48,48,252,48,48,0,252,0]),u.t)
B.bd=A.a(t([96,48,24,48,96,0,252,0]),u.t)
B.cY=A.a(t([24,48,96,48,24,0,252,0]),u.t)
B.bk=A.a(t([14,27,27,24,24,24,24,24]),u.t)
B.dd=A.a(t([24,24,24,24,24,216,216,112]),u.t)
B.cg=A.a(t([48,48,0,252,0,48,48,0]),u.t)
B.U=A.a(t([0,118,220,0,118,220,0,0]),u.t)
B.cC=A.a(t([56,108,108,56,0,0,0,0]),u.t)
B.W=A.a(t([0,0,0,24,24,0,0,0]),u.t)
B.dr=A.a(t([0,0,0,0,24,0,0,0]),u.t)
B.Z=A.a(t([15,12,12,12,236,108,60,28]),u.t)
B.bZ=A.a(t([120,108,108,108,108,0,0,0]),u.t)
B.ax=A.a(t([112,24,48,96,120,0,0,0]),u.t)
B.d5=A.a(t([0,0,60,60,60,60,0,0]),u.t)
B.dR=new A.al(["\u263a",B.dc,"\u263b",B.ae,"\u2665",B.dJ,"\u2666",B.c9,"\u2663",B.b7,"\u2660",B.bj,"\u2022",B.aC,"\u25d8",B.aF,"\u25cb",B.aR,"\u25d9",B.cX,"\u2642",B.dI,"\u2640",B.dH,"\u266a",B.cU,"\u266b",B.Y,"\u263c",B.a2,"\u25ba",B.az,"\u25c4",B.bF,"\u2195",B.cn,"\u203c",B.cj,"\xb6",B.ct,"\xa7",B.cu,"\u25ac",B.bT,"\u21a8",B.bW,"\u2191",B.T,"\u2193",B.dh,"\u2192",B.da,"\u2190",B.aw,"\u221f",B.c0,"\u2194",B.by,"\u25b2",B.ac,"\u25bc",B.bX," ",B.b2,"!",B.bG,'"',B.a0,"#",B.aq,"$",B.c4,"%",B.S,"&",B.cG,"'",B.ap,"(",B.X,")",B.bC,"*",B.cx,"+",B.dQ,",",B.c6,"-",B.bx,".",B.cl,"/",B.a7,"0",B.ba,"1",B.co,"2",B.c2,"3",B.dL,"4",B.bE,"5",B.db,"6",B.dt,"7",B.c3,"8",B.cA,"9",B.bh,":",B.d4,";",B.aU,"<",B.bD,"=",B.bs,">",B.aE,"?",B.au,"@",B.dp,"A",B.cf,"B",B.aO,"C",B.ag,"D",B.a8,"E",B.am,"F",B.cr,"G",B.as,"H",B.av,"I",B.cP,"J",B.bR,"K",B.bJ,"L",B.bI,"M",B.aP,"N",B.a_,"O",B.cZ,"P",B.bn,"Q",B.cJ,"R",B.R,"S",B.aj,"T",B.dC,"U",B.aM,"V",B.a4,"W",B.cS,"X",B.cM,"Y",B.a6,"Z",B.V,"[",B.bz,"\\",B.cE,"]",B.bB,"^",B.ds,"_",B.Q,"`",B.aN,"a",B.di,"b",B.ci,"c",B.cL,"d",B.b8,"e",B.dv,"f",B.aS,"g",B.cI,"h",B.aD,"i",B.cy,"j",B.bM,"k",B.bf,"l",B.bO,"m",B.bw,"n",B.bP,"o",B.bi,"p",B.dz,"q",B.dw,"r",B.bt,"s",B.d1,"t",B.cV,"u",B.cc,"v",B.b6,"w",B.bm,"x",B.bK,"y",B.dF,"z",B.dg,"{",B.bc,"|",B.d0,"}",B.aH,"~",B.dP,"\u2302",B.b5,"\xc7",B.ay,"\xfc",B.de,"\xe9",B.dE,"\xe2",B.c5,"\xe4",B.al,"\xe0",B.b9,"\xe5",B.ab,"\xe7",B.bp,"\xea",B.dn,"\xeb",B.aQ,"\xe8",B.d2,"\xef",B.df,"\xee",B.cT,"\xec",B.b1,"\xc4",B.dK,"\xc5",B.d_,"\xc9",B.bH,"\xe6",B.dD,"\xc6",B.aV,"\xf4",B.dx,"\xf6",B.ah,"\xf2",B.dM,"\xfb",B.aT,"\xf9",B.cW,"\xff",B.aB,"\xd6",B.an,"\xdc",B.d8,"\xa2",B.a1,"\xa3",B.aK,"\xa5",B.b3,"\u20a7",B.dj,"\u0192",B.bS,"\xe1",B.aG,"\xed",B.ch,"\xf3",B.aJ,"\xfa",B.cB,"\xf1",B.aZ,"\xd1",B.cR,"\xaa",B.ai,"\xba",B.ce,"\xbf",B.d9,"\u2310",B.b0,"\xac",B.aI,"\xbd",B.d3,"\xbc",B.aA,"\xa1",B.bV,"\xab",B.bU,"\xbb",B.be,"\u2591",B.cD,"\u2592",B.dy,"\u2593",B.bN,"\u2502",B.b4,"\u2524",B.b_,"\u2561",B.c1,"\u2562",B.dO,"\u2556",B.cp,"\u2555",B.aW,"\u2563",B.af,"\u2551",B.cv,"\u2557",B.cd,"\u255d",B.cz,"\u255c",B.at,"\u255b",B.a5,"\u2510",B.aa,"\u2514",B.a3,"\u2534",B.c_,"\u252c",B.br,"\u251c",B.d7,"\u2500",B.bY,"\u253c",B.cw,"\u255e",B.cH,"\u255f",B.bg,"\u255a",B.du,"\u2554",B.dm,"\u2569",B.bL,"\u2566",B.bA,"\u2560",B.aY,"\u2550",B.aX,"\u256c",B.dG,"\u2567",B.cN,"\u2568",B.O,"\u2564",B.dA,"\u2565",B.c7,"\u2559",B.cq,"\u2558",B.bv,"\u2552",B.ck,"\u2553",B.cK,"\u256b",B.cQ,"\u256a",B.bQ,"\u2518",B.dk,"\u250c",B.bb,"\u2588",B.c8,"\u2584",B.cb,"\u258c",B.bl,"\u2590",B.cs,"\u2580",B.d6,"\u03b1",B.dN,"\xdf",B.dq,"\u0393",B.ar,"\u03c0",B.ca,"\u03a3",B.dl,"\u03c3",B.bo,"\xb5",B.bu,"\u03c4",B.cF,"\u03a6",B.ak,"\u0398",B.aL,"\u03a9",B.ao,"\u03b4",B.P,"\u221e",B.dB,"\u03c6",B.bq,"\u03b5",B.ad,"\u2229",B.cm,"\u2261",B.cO,"\xb1",B.a9,"\u2265",B.bd,"\u2264",B.cY,"\u2320",B.bk,"\u2321",B.dd,"\xf7",B.cg,"\u2248",B.U,"\xb0",B.cC,"\u2219",B.W,"\xb7",B.dr,"\u221a",B.Z,"\u207f",B.bZ,"\xb2",B.ax,"\u25a0",B.d5],A.d9("al<aH,h<c>>"))
B.y=new A.A("replace")
B.dS=new A.A("inverse")
B.dT=new A.A("over")
B.dU=new A.A("under")
B.dV=new A.A("stain")
B.dW=new A.A("delete")
B.dX=new A.A("maskDestination")
B.dY=new A.A("maskSource")
B.A=new A.a6("ready")
B.e2=new A.a6("awaitingKey")
B.B=new A.a6("awaitingString")
B.e3=new A.a6("awaitingMouseClick")
B.e4=A.y("hq")
B.e5=A.y("hr")
B.e6=A.y("ez")
B.e7=A.y("eA")
B.e8=A.y("eD")
B.e9=A.y("eE")
B.ea=A.y("eF")
B.eb=A.y("o")
B.ec=A.y("eU")
B.ed=A.y("cl")
B.ee=A.y("eV")
B.ef=A.y("eW")})();(function staticFields(){$.cu=null
$.v=A.a([],u.f)
$.dt=null
$.dj=null
$.di=null
$.e5=null
$.dY=null
$.e8=null
$.cE=null
$.cI=null
$.db=null
$.aP=A.a([],A.d9("i<h<o>?>"))
$.aa=null
$.aY=null
$.aZ=null
$.d5=!1
$.bB=B.h
$.C=A.eO([38,!1,40,!1,37,!1,39,!1,13,!1],u.S,u.y)})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal
t($,"hs","cK",()=>A.h8("_$dart_dartClosure"))
t($,"hz","ec",()=>A.E(A.ck({
toString:function(){return"$receiver$"}})))
t($,"hA","ed",()=>A.E(A.ck({$method$:null,
toString:function(){return"$receiver$"}})))
t($,"hB","ee",()=>A.E(A.ck(null)))
t($,"hC","ef",()=>A.E(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(s){return s.message}}()))
t($,"hF","ei",()=>A.E(A.ck(void 0)))
t($,"hG","ej",()=>A.E(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(s){return s.message}}()))
t($,"hE","eh",()=>A.E(A.dC(null)))
t($,"hD","eg",()=>A.E(function(){try{null.$method$}catch(s){return s.message}}()))
t($,"hI","el",()=>A.E(A.dC(void 0)))
t($,"hH","ek",()=>A.E(function(){try{(void 0).$method$}catch(s){return s.message}}()))
t($,"hJ","df",()=>A.eX())
t($,"hK","cL",()=>A.de(B.eb))
t($,"hy","eb",()=>A.cS(8,0,!1,u.S))
t($,"hx","ea",()=>A.cS(8,255,!1,u.S))
t($,"hM","em",()=>{var s=A.fv(A.h9(A.hm(),"document"),"querySelector","#bounce")
return s==null?u.m.a(s):s})})();(function nativeSupport(){!function(){var t=function(a){var n={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.bi,ArrayBufferView:A.aA,DataView:A.bj,Float32Array:A.bk,Float64Array:A.bl,Int16Array:A.bm,Int32Array:A.bn,Int8Array:A.bo,Uint16Array:A.bp,Uint32Array:A.bq,Uint8ClampedArray:A.aB,CanvasPixelArray:A.aB,Uint8Array:A.br})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.a2.$nativeSuperclassTag="ArrayBufferView"
A.aL.$nativeSuperclassTag="ArrayBufferView"
A.aM.$nativeSuperclassTag="ArrayBufferView"
A.ay.$nativeSuperclassTag="ArrayBufferView"
A.aN.$nativeSuperclassTag="ArrayBufferView"
A.aO.$nativeSuperclassTag="ArrayBufferView"
A.az.$nativeSuperclassTag="ArrayBufferView"})()
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
var t=A.hj
if(typeof dartMainRunner==="function"){dartMainRunner(t,[])}else{t([])}})})()
//# sourceMappingURL=bounce.js.map
