(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinPropertiesHard(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q))b[q]=a[q]}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(Object.getPrototypeOf(r)&&Object.getPrototypeOf(r).p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++)inherit(b[s],a)}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var s=a
a[b]=s
a[c]=function(){a[c]=function(){A.i9(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s)a[b]=d()
a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s)A.ia(b)
a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.dT(b)
return new s(c,this)}:function(){if(s===null)s=A.dT(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.dT(a).prototype
return s}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number")h+=x
return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var s=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var r=staticTearOffGetter(s)
a[b]=r}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var s=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var r=instanceTearOffGetter(c,s)
a[b]=r}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var A={dB:function dB(){},
V(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
dJ(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
el(a,b,c){return A.dJ(A.V(A.V(c,a),b))},
em(a,b,c,d,e){return A.dJ(A.V(A.V(A.V(A.V(e,a),b),c),d))},
dk(a,b,c){return a},
dW(a){var s,r
for(s=$.a9.length,r=0;r<s;++r)if(a===$.a9[r])return!0
return!1},
eb(){return new A.bB("No element")},
ah:function ah(a){this.a=a},
cr:function cr(){},
bp:function bp(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
br:function br(a,b){this.a=a
this.b=b},
bs:function bs(a,b){this.a=null
this.b=a
this.c=b},
bG:function bG(a,b){this.a=a
this.b=b},
bH:function bH(a,b){this.a=a
this.b=b},
be:function be(){},
f0(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
i1(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
e(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.b2(a)
return s},
aF(a){var s,r=$.ef
if(r==null)r=$.ef=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
cl(a){return A.fD(a)},
fD(a){var s,r,q,p
if(a instanceof A.i)return A.u(A.c5(a),null)
s=J.a7(a)
if(s===B.K||s===B.M||t.o.b(a)){r=B.v(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.u(A.c5(a),null)},
eg(a){if(a==null||typeof a=="number"||A.dP(a))return J.b2(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.a1)return a.h(0)
if(a instanceof A.ao)return a.aP(!0)
return"Instance of '"+A.cl(a)+"'"},
hP(a,b){var s,r="index"
if(!A.eL(b))return new A.E(!0,b,r,null)
s=J.dw(a)
if(b<0||b>=s)return A.bi(b,s,a,r)
return new A.al(null,null,!0,b,r,"Value not in range")},
dS(a){return new A.E(!0,a,null,null)},
d(a){return A.eW(new Error(),a)},
eW(a,b){var s
if(b==null)b=new A.I()
a.dartException=b
s=A.ic
if("defineProperty" in Object){Object.defineProperty(a,"message",{get:s})
a.name=""}else a.toString=s
return a},
ic(){return J.b2(this.dartException)},
eZ(a){throw A.d(a)},
dZ(a,b){throw A.eW(b,a)},
dt(a){throw A.d(A.ba(a))},
J(a){var s,r,q,p,o,n
a=A.i6(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=[]
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.cI(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
cJ(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
ep(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
dC(a,b){var s=b==null,r=s?null:b.method
return new A.bo(a,r,s?null:b.receiver)},
a0(a){if(a==null)return new A.ck(a)
if(a instanceof A.au)return A.a_(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.a_(a,a.dartException)
return A.hH(a)},
a_(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
hH(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.a.br(r,16)&8191)===10)switch(q){case 438:return A.a_(a,A.dC(A.e(s)+" (Error "+q+")",e))
case 445:case 5007:p=A.e(s)
return A.a_(a,new A.aD(p+" (Error "+q+")",e))}}if(a instanceof TypeError){o=$.f9()
n=$.fa()
m=$.fb()
l=$.fc()
k=$.ff()
j=$.fg()
i=$.fe()
$.fd()
h=$.fi()
g=$.fh()
f=o.A(s)
if(f!=null)return A.a_(a,A.dC(s,f))
else{f=n.A(s)
if(f!=null){f.method="call"
return A.a_(a,A.dC(s,f))}else{f=m.A(s)
if(f==null){f=l.A(s)
if(f==null){f=k.A(s)
if(f==null){f=j.A(s)
if(f==null){f=i.A(s)
if(f==null){f=l.A(s)
if(f==null){f=h.A(s)
if(f==null){f=g.A(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return A.a_(a,new A.aD(s,f==null?e:f.method))}}return A.a_(a,new A.bE(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.aG()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return A.a_(a,new A.E(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.aG()
return a},
Z(a){var s
if(a instanceof A.au)return a.b
if(a==null)return new A.aR(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new A.aR(a)},
dY(a){if(a==null)return J.D(a)
if(typeof a=="object")return A.aF(a)
return J.D(a)},
hN(a){if(typeof a=="number")return B.c.gj(a)
if(a instanceof A.c1)return A.aF(a)
if(a instanceof A.ao)return a.gj(a)
return A.dY(a)},
hS(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=a.length
for(s=0;s<h;){r=s+1
q=a[s]
s=r+1
p=a[r]
if(typeof q=="string"){o=b.b
if(o==null){n=Object.create(null)
n["<non-identifier-key>"]=n
delete n["<non-identifier-key>"]
b.b=n
o=n}m=o[q]
if(m==null)o[q]=b.R(q,p)
else m.b=p}else if(typeof q=="number"&&(q&0x3fffffff)===q){l=b.c
if(l==null){n=Object.create(null)
n["<non-identifier-key>"]=n
delete n["<non-identifier-key>"]
b.c=n
l=n}m=l[q]
if(m==null)l[q]=b.R(q,p)
else m.b=p}else{k=b.d
if(k==null){n=Object.create(null)
n["<non-identifier-key>"]=n
delete n["<non-identifier-key>"]
b.d=n
k=n}j=b.ao(q)
i=k[j]
if(i==null)k[j]=[b.R(q,p)]
else{r=b.ap(i,q)
if(r>=0)i[r].b=p
else i.push(b.R(q,p))}}}return b},
i0(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(A.fy("Unsupported number of arguments for wrapped closure"))},
b0(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.i0)
a.$identity=s
return s},
fv(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.cw().constructor.prototype):Object.create(new A.ar(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else r=function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.e9(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.fr(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.e9(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
fr(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.fp)}throw A.d("Error in functionType of tearoff")},
fs(a,b,c,d){var s=A.e7
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
e9(a,b,c,d){var s,r
if(c)return A.fu(a,b,d)
s=b.length
r=A.fs(s,d,a,b)
return r},
ft(a,b,c,d){var s=A.e7,r=A.fq
switch(b?-1:a){case 0:throw A.d(new A.bx("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
fu(a,b,c){var s,r
if($.e5==null)$.e5=A.e4("interceptor")
if($.e6==null)$.e6=A.e4("receiver")
s=b.length
r=A.ft(s,c,a,b)
return r},
dT(a){return A.fv(a)},
fp(a,b){return A.aX(v.typeUniverse,A.c5(a.a),b)},
e7(a){return a.a},
fq(a){return a.b},
e4(a){var s,r,q,p=new A.ar("receiver","interceptor"),o=J.dA(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.d(A.c7("Field name "+a+" not found.",null))},
i9(a){throw A.d(new A.bO(a))},
hU(a){return v.getIsolateTag(a)},
j8(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
i3(a){var s,r,q,p,o,n=$.eV.$1(a),m=$.dl[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.dr[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.eR.$2(a,n)
if(q!=null){m=$.dl[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.dr[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.ds(s)
$.dl[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.dr[n]=s
return s}if(p==="-"){o=A.ds(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.eX(a,s)
if(p==="*")throw A.d(A.eq(n))
if(v.leafTags[n]===true){o=A.ds(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.eX(a,s)},
eX(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.dX(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
ds(a){return J.dX(a,!1,null,!!a.$iQ)},
i5(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.ds(s)
else return J.dX(s,c,null,null)},
hY(){if(!0===$.dV)return
$.dV=!0
A.hZ()},
hZ(){var s,r,q,p,o,n,m,l
$.dl=Object.create(null)
$.dr=Object.create(null)
A.hX()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.eY.$1(o)
if(n!=null){m=A.i5(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
hX(){var s,r,q,p,o,n,m=B.B()
m=A.aq(B.C,A.aq(B.D,A.aq(B.w,A.aq(B.w,A.aq(B.E,A.aq(B.F,A.aq(B.G(B.v),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.eV=new A.dn(p)
$.eR=new A.dp(o)
$.eY=new A.dq(n)},
aq(a,b){return a(b)||b},
hO(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
i8(a,b,c){var s=a.indexOf(b,c)
return s>=0},
i6(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
y:function y(a,b){this.a=a
this.b=b},
bb:function bb(){},
bg:function bg(a){this.a=a},
cI:function cI(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aD:function aD(a,b){this.a=a
this.b=b},
bo:function bo(a,b,c){this.a=a
this.b=b
this.c=c},
bE:function bE(a){this.a=a},
ck:function ck(a){this.a=a},
au:function au(a,b){this.a=a
this.b=b},
aR:function aR(a){this.a=a
this.b=null},
a1:function a1(){},
c9:function c9(){},
ca:function ca(){},
cy:function cy(){},
cw:function cw(){},
ar:function ar(a,b){this.a=a
this.b=b},
bO:function bO(a){this.a=a},
bx:function bx(a){this.a=a},
bn:function bn(){},
ch:function ch(a,b){this.a=a
this.b=b
this.c=null},
bm:function bm(){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0},
dn:function dn(a){this.a=a},
dp:function dp(a){this.a=a},
dq:function dq(a){this.a=a},
ao:function ao(){},
bX:function bX(){},
hf(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.hP(b,a))},
bt:function bt(){},
aj:function aj(){},
aB:function aB(){},
bu:function bu(){},
aP:function aP(){},
aQ:function aQ(){},
ei(a,b){var s=b.c
return s==null?b.c=A.dN(a,b.y,!0):s},
dG(a,b){var s=b.c
return s==null?b.c=A.aV(a,"ae",[b.y]):s},
ej(a){var s=a.x
if(s===6||s===7||s===8)return A.ej(a.y)
return s===12||s===13},
fF(a){return a.at},
hT(a){return A.c2(v.typeUniverse,a,!1)},
Y(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.x
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.y
r=A.Y(a,s,a0,a1)
if(r===s)return b
return A.eB(a,r,!0)
case 7:s=b.y
r=A.Y(a,s,a0,a1)
if(r===s)return b
return A.dN(a,r,!0)
case 8:s=b.y
r=A.Y(a,s,a0,a1)
if(r===s)return b
return A.eA(a,r,!0)
case 9:q=b.z
p=A.b_(a,q,a0,a1)
if(p===q)return b
return A.aV(a,b.y,p)
case 10:o=b.y
n=A.Y(a,o,a0,a1)
m=b.z
l=A.b_(a,m,a0,a1)
if(n===o&&l===m)return b
return A.dL(a,n,l)
case 12:k=b.y
j=A.Y(a,k,a0,a1)
i=b.z
h=A.hE(a,i,a0,a1)
if(j===k&&h===i)return b
return A.ez(a,j,h)
case 13:g=b.z
a1+=g.length
f=A.b_(a,g,a0,a1)
o=b.y
n=A.Y(a,o,a0,a1)
if(f===g&&n===o)return b
return A.dM(a,n,f,!0)
case 14:e=b.y
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.d(A.b6("Attempted to substitute unexpected RTI kind "+c))}},
b_(a,b,c,d){var s,r,q,p,o=b.length,n=A.dd(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.Y(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
hF(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.dd(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.Y(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
hE(a,b,c,d){var s,r=b.a,q=A.b_(a,r,c,d),p=b.b,o=A.b_(a,p,c,d),n=b.c,m=A.hF(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.bR()
s.a=q
s.b=o
s.c=m
return s},
j7(a,b){a[v.arrayRti]=b
return a},
eT(a){var s,r=a.$S
if(r!=null){if(typeof r=="number")return A.hW(r)
s=a.$S()
return s}return null},
i_(a,b){var s
if(A.ej(b))if(a instanceof A.a1){s=A.eT(a)
if(s!=null)return s}return A.c5(a)},
c5(a){if(a instanceof A.i)return A.N(a)
if(Array.isArray(a))return A.eF(a)
return A.dO(J.a7(a))},
eF(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
N(a){var s=a.$ti
return s!=null?s:A.dO(a)},
dO(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.hm(a,s)},
hm(a,b){var s=a instanceof A.a1?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.h7(v.typeUniverse,s.name)
b.$ccache=r
return r},
hW(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.c2(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
hV(a){return A.a6(A.N(a))},
dR(a){var s
if(a instanceof A.ao)return A.hR(a.$r,a.aJ())
s=a instanceof A.a1?A.eT(a):null
if(s!=null)return s
if(t.k.b(a))return J.fm(a).a
if(Array.isArray(a))return A.eF(a)
return A.c5(a)},
a6(a){var s=a.w
return s==null?a.w=A.eH(a):s},
eH(a){var s,r,q=a.at,p=q.replace(/\*/g,"")
if(p===q)return a.w=new A.c1(a)
s=A.c2(v.typeUniverse,p,!0)
r=s.w
return r==null?s.w=A.eH(s):r},
hR(a,b){var s,r,q=b,p=q.length
if(p===0)return t.F
s=A.aX(v.typeUniverse,A.dR(q[0]),"@<0>")
for(r=1;r<p;++r)s=A.eC(v.typeUniverse,s,A.dR(q[r]))
return A.aX(v.typeUniverse,s,a)},
f_(a){return A.a6(A.c2(v.typeUniverse,a,!1))},
hl(a){var s,r,q,p,o,n=this
if(n===t.K)return A.M(n,a,A.hr)
if(!A.O(n))if(!(n===t._))s=!1
else s=!0
else s=!0
if(s)return A.M(n,a,A.hv)
s=n.x
if(s===7)return A.M(n,a,A.hj)
if(s===1)return A.M(n,a,A.eM)
r=s===6?n.y:n
s=r.x
if(s===8)return A.M(n,a,A.hn)
if(r===t.S)q=A.eL
else if(r===t.i||r===t.n)q=A.hq
else if(r===t.N)q=A.ht
else q=r===t.y?A.dP:null
if(q!=null)return A.M(n,a,q)
if(s===9){p=r.y
if(r.z.every(A.i2)){n.r="$i"+p
if(p==="ed")return A.M(n,a,A.hp)
return A.M(n,a,A.hu)}}else if(s===11){o=A.hO(r.y,r.z)
return A.M(n,a,o==null?A.eM:o)}return A.M(n,a,A.hh)},
M(a,b,c){a.b=c
return a.b(b)},
hk(a){var s,r=this,q=A.hg
if(!A.O(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.ha
else if(r===t.K)q=A.h9
else{s=A.b1(r)
if(s)q=A.hi}r.a=q
return r.a(a)},
c3(a){var s,r=a.x
if(!A.O(a))if(!(a===t._))if(!(a===t.A))if(r!==7)if(!(r===6&&A.c3(a.y)))s=r===8&&A.c3(a.y)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
else s=!0
return s},
hh(a){var s=this
if(a==null)return A.c3(s)
return A.k(v.typeUniverse,A.i_(a,s),null,s,null)},
hj(a){if(a==null)return!0
return this.y.b(a)},
hu(a){var s,r=this
if(a==null)return A.c3(r)
s=r.r
if(a instanceof A.i)return!!a[s]
return!!J.a7(a)[s]},
hp(a){var s,r=this
if(a==null)return A.c3(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.i)return!!a[s]
return!!J.a7(a)[s]},
hg(a){var s,r=this
if(a==null){s=A.b1(r)
if(s)return a}else if(r.b(a))return a
A.eI(a,r)},
hi(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.eI(a,s)},
eI(a,b){throw A.d(A.fY(A.er(a,A.u(b,null))))},
er(a,b){return A.cd(a)+": type '"+A.u(A.dR(a),null)+"' is not a subtype of type '"+b+"'"},
fY(a){return new A.aT("TypeError: "+a)},
r(a,b){return new A.aT("TypeError: "+A.er(a,b))},
hn(a){var s=this,r=s.x===6?s.y:s
return r.y.b(a)||A.dG(v.typeUniverse,r).b(a)},
hr(a){return a!=null},
h9(a){if(a!=null)return a
throw A.d(A.r(a,"Object"))},
hv(a){return!0},
ha(a){return a},
eM(a){return!1},
dP(a){return!0===a||!1===a},
iR(a){if(!0===a)return!0
if(!1===a)return!1
throw A.d(A.r(a,"bool"))},
iT(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.r(a,"bool"))},
iS(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.r(a,"bool?"))},
iU(a){if(typeof a=="number")return a
throw A.d(A.r(a,"double"))},
iW(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.r(a,"double"))},
iV(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.r(a,"double?"))},
eL(a){return typeof a=="number"&&Math.floor(a)===a},
iX(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.d(A.r(a,"int"))},
iZ(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.r(a,"int"))},
iY(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.r(a,"int?"))},
hq(a){return typeof a=="number"},
j_(a){if(typeof a=="number")return a
throw A.d(A.r(a,"num"))},
j1(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.r(a,"num"))},
j0(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.r(a,"num?"))},
ht(a){return typeof a=="string"},
j2(a){if(typeof a=="string")return a
throw A.d(A.r(a,"String"))},
j4(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.r(a,"String"))},
j3(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.r(a,"String?"))},
eP(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.u(a[q],b)
return s},
hz(a,b){var s,r,q,p,o,n,m=a.y,l=a.z
if(""===m)return"("+A.eP(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.u(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
eJ(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", "
if(a5!=null){s=a5.length
if(a4==null){a4=[]
r=null}else r=a4.length
q=a4.length
for(p=s;p>0;--p)a4.push("T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a2){m=B.f.b5(m+l,a4[a4.length-1-p])
k=a5[p]
j=k.x
if(!(j===2||j===3||j===4||j===5||k===o))if(!(k===n))i=!1
else i=!0
else i=!0
if(!i)m+=" extends "+A.u(k,a4)}m+=">"}else{m=""
r=null}o=a3.y
h=a3.z
g=h.a
f=g.length
e=h.b
d=e.length
c=h.c
b=c.length
a=A.u(o,a4)
for(a0="",a1="",p=0;p<f;++p,a1=a2)a0+=a1+A.u(g[p],a4)
if(d>0){a0+=a1+"["
for(a1="",p=0;p<d;++p,a1=a2)a0+=a1+A.u(e[p],a4)
a0+="]"}if(b>0){a0+=a1+"{"
for(a1="",p=0;p<b;p+=3,a1=a2){a0+=a1
if(c[p+1])a0+="required "
a0+=A.u(c[p+2],a4)+" "+c[p]}a0+="}"}if(r!=null){a4.toString
a4.length=r}return m+"("+a0+") => "+a},
u(a,b){var s,r,q,p,o,n,m=a.x
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){s=A.u(a.y,b)
return s}if(m===7){r=a.y
s=A.u(r,b)
q=r.x
return(q===12||q===13?"("+s+")":s)+"?"}if(m===8)return"FutureOr<"+A.u(a.y,b)+">"
if(m===9){p=A.hG(a.y)
o=a.z
return o.length>0?p+("<"+A.eP(o,b)+">"):p}if(m===11)return A.hz(a,b)
if(m===12)return A.eJ(a,b,null)
if(m===13)return A.eJ(a.y,b,a.z)
if(m===14){n=a.y
return b[b.length-1-n]}return"?"},
hG(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
h8(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
h7(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.c2(a,b,!1)
else if(typeof m=="number"){s=m
r=A.aW(a,5,"#")
q=A.dd(s)
for(p=0;p<s;++p)q[p]=r
o=A.aV(a,b,q)
n[b]=o
return o}else return m},
h6(a,b){return A.eD(a.tR,b)},
h5(a,b){return A.eD(a.eT,b)},
c2(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.ex(A.ev(a,null,b,c))
r.set(b,s)
return s},
aX(a,b,c){var s,r,q=b.Q
if(q==null)q=b.Q=new Map()
s=q.get(c)
if(s!=null)return s
r=A.ex(A.ev(a,b,c,!0))
q.set(c,r)
return r},
eC(a,b,c){var s,r,q,p=b.as
if(p==null)p=b.as=new Map()
s=c.at
r=p.get(s)
if(r!=null)return r
q=A.dL(a,b,c.x===10?c.z:[c])
p.set(s,q)
return q},
L(a,b){b.a=A.hk
b.b=A.hl
return b},
aW(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.w(null,null)
s.x=b
s.at=c
r=A.L(a,s)
a.eC.set(c,r)
return r},
eB(a,b,c){var s,r=b.at+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.h2(a,b,r,c)
a.eC.set(r,s)
return s},
h2(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.O(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.w(null,null)
q.x=6
q.y=b
q.at=c
return A.L(a,q)},
dN(a,b,c){var s,r=b.at+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.h1(a,b,r,c)
a.eC.set(r,s)
return s},
h1(a,b,c,d){var s,r,q,p
if(d){s=b.x
if(!A.O(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.b1(b.y)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.y
if(q.x===8&&A.b1(q.y))return q
else return A.ei(a,b)}}p=new A.w(null,null)
p.x=7
p.y=b
p.at=c
return A.L(a,p)},
eA(a,b,c){var s,r=b.at+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.h_(a,b,r,c)
a.eC.set(r,s)
return s},
h_(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.O(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.aV(a,"ae",[b])
else if(b===t.P||b===t.T)return t.O}q=new A.w(null,null)
q.x=8
q.y=b
q.at=c
return A.L(a,q)},
h3(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.w(null,null)
s.x=14
s.y=b
s.at=q
r=A.L(a,s)
a.eC.set(q,r)
return r},
aU(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].at
return s},
fZ(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].at}return s},
aV(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.aU(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.w(null,null)
r.x=9
r.y=b
r.z=c
if(c.length>0)r.c=c[0]
r.at=p
q=A.L(a,r)
a.eC.set(p,q)
return q},
dL(a,b,c){var s,r,q,p,o,n
if(b.x===10){s=b.y
r=b.z.concat(c)}else{r=c
s=b}q=s.at+(";<"+A.aU(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.w(null,null)
o.x=10
o.y=s
o.z=r
o.at=q
n=A.L(a,o)
a.eC.set(q,n)
return n},
h4(a,b,c){var s,r,q="+"+(b+"("+A.aU(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.w(null,null)
s.x=11
s.y=b
s.z=c
s.at=q
r=A.L(a,s)
a.eC.set(q,r)
return r},
ez(a,b,c){var s,r,q,p,o,n=b.at,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.aU(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.aU(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.fZ(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.w(null,null)
p.x=12
p.y=b
p.z=c
p.at=r
o=A.L(a,p)
a.eC.set(r,o)
return o},
dM(a,b,c,d){var s,r=b.at+("<"+A.aU(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.h0(a,b,c,r,d)
a.eC.set(r,s)
return s},
h0(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.dd(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.x===1){r[p]=o;++q}}if(q>0){n=A.Y(a,b,r,0)
m=A.b_(a,c,r,0)
return A.dM(a,n,m,c!==m)}}l=new A.w(null,null)
l.x=13
l.y=b
l.z=c
l.at=d
return A.L(a,l)},
ev(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
ex(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.fR(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.ew(a,r,l,k,!1)
else if(q===46)r=A.ew(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.X(a.u,a.e,k.pop()))
break
case 94:k.push(A.h3(a.u,k.pop()))
break
case 35:k.push(A.aW(a.u,5,"#"))
break
case 64:k.push(A.aW(a.u,2,"@"))
break
case 126:k.push(A.aW(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.fT(a,k)
break
case 38:A.fS(a,k)
break
case 42:p=a.u
k.push(A.eB(p,A.X(p,a.e,k.pop()),a.n))
break
case 63:p=a.u
k.push(A.dN(p,A.X(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.eA(p,A.X(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.fQ(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.ey(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.fV(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-2)
break
case 43:n=l.indexOf("(",r)
k.push(l.substring(r,n))
k.push(-4)
k.push(a.p)
a.p=k.length
r=n+1
break
default:throw"Bad character "+q}}}m=k.pop()
return A.X(a.u,a.e,m)},
fR(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
ew(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.x===10)o=o.y
n=A.h8(s,o.y)[p]
if(n==null)A.eZ('No "'+p+'" in "'+A.fF(o)+'"')
d.push(A.aX(s,o,n))}else d.push(p)
return m},
fT(a,b){var s,r=a.u,q=A.eu(a,b),p=b.pop()
if(typeof p=="string")b.push(A.aV(r,p,q))
else{s=A.X(r,a.e,p)
switch(s.x){case 12:b.push(A.dM(r,s,q,a.n))
break
default:b.push(A.dL(r,s,q))
break}}},
fQ(a,b){var s,r,q,p,o,n=null,m=a.u,l=b.pop()
if(typeof l=="number")switch(l){case-1:s=b.pop()
r=n
break
case-2:r=b.pop()
s=n
break
default:b.push(l)
r=n
s=r
break}else{b.push(l)
r=n
s=r}q=A.eu(a,b)
l=b.pop()
switch(l){case-3:l=b.pop()
if(s==null)s=m.sEA
if(r==null)r=m.sEA
p=A.X(m,a.e,l)
o=new A.bR()
o.a=q
o.b=s
o.c=r
b.push(A.ez(m,p,o))
return
case-4:b.push(A.h4(m,b.pop(),q))
return
default:throw A.d(A.b6("Unexpected state under `()`: "+A.e(l)))}},
fS(a,b){var s=b.pop()
if(0===s){b.push(A.aW(a.u,1,"0&"))
return}if(1===s){b.push(A.aW(a.u,4,"1&"))
return}throw A.d(A.b6("Unexpected extended operation "+A.e(s)))},
eu(a,b){var s=b.splice(a.p)
A.ey(a.u,a.e,s)
a.p=b.pop()
return s},
X(a,b,c){if(typeof c=="string")return A.aV(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.fU(a,b,c)}else return c},
ey(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.X(a,b,c[s])},
fV(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.X(a,b,c[s])},
fU(a,b,c){var s,r,q=b.x
if(q===10){if(c===0)return b.y
s=b.z
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.y
q=b.x}else if(c===0)return b
if(q!==9)throw A.d(A.b6("Indexed base must be an interface type"))
s=b.z
if(c<=s.length)return s[c-1]
throw A.d(A.b6("Bad index "+c+" for "+b.h(0)))},
k(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(!A.O(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.x
if(r===4)return!0
if(A.O(b))return!1
if(b.x!==1)s=!1
else s=!0
if(s)return!0
q=r===14
if(q)if(A.k(a,c[b.y],c,d,e))return!0
p=d.x
s=b===t.P||b===t.T
if(s){if(p===8)return A.k(a,b,c,d.y,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return A.k(a,b.y,c,d,e)
if(r===6)return A.k(a,b.y,c,d,e)
return r!==7}if(r===6)return A.k(a,b.y,c,d,e)
if(p===6){s=A.ei(a,d)
return A.k(a,b,c,s,e)}if(r===8){if(!A.k(a,b.y,c,d,e))return!1
return A.k(a,A.dG(a,b),c,d,e)}if(r===7){s=A.k(a,t.P,c,d,e)
return s&&A.k(a,b.y,c,d,e)}if(p===8){if(A.k(a,b,c,d.y,e))return!0
return A.k(a,b,c,A.dG(a,d),e)}if(p===7){s=A.k(a,b,c,t.P,e)
return s||A.k(a,b,c,d.y,e)}if(q)return!1
s=r!==12
if((!s||r===13)&&d===t.Z)return!0
o=r===11
if(o&&d===t.I)return!0
if(p===13){if(b===t.g)return!0
if(r!==13)return!1
n=b.z
m=d.z
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.k(a,j,c,i,e)||!A.k(a,i,e,j,c))return!1}return A.eK(a,b.y,c,d.y,e)}if(p===12){if(b===t.g)return!0
if(s)return!1
return A.eK(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.ho(a,b,c,d,e)}if(o&&p===11)return A.hs(a,b,c,d,e)
return!1},
eK(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.k(a3,a4.y,a5,a6.y,a7))return!1
s=a4.z
r=a6.z
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!A.k(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.k(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.k(a3,k[h],a7,g,a5))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;!0;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!A.k(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
ho(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.y,k=d.y
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.aX(a,b,r[o])
return A.eE(a,p,null,c,d.z,e)}n=b.z
m=d.z
return A.eE(a,n,null,c,m,e)},
eE(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.k(a,r,d,q,f))return!1}return!0},
hs(a,b,c,d,e){var s,r=b.z,q=d.z,p=r.length
if(p!==q.length)return!1
if(b.y!==d.y)return!1
for(s=0;s<p;++s)if(!A.k(a,r[s],c,q[s],e))return!1
return!0},
b1(a){var s,r=a.x
if(!(a===t.P||a===t.T))if(!A.O(a))if(r!==7)if(!(r===6&&A.b1(a.y)))s=r===8&&A.b1(a.y)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
i2(a){var s
if(!A.O(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
O(a){var s=a.x
return s===2||s===3||s===4||s===5||a===t.X},
eD(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
dd(a){return a>0?new Array(a):v.typeUniverse.sEA},
w:function w(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
bR:function bR(){this.c=this.b=this.a=null},
c1:function c1(a){this.a=a},
bP:function bP(){},
aT:function aT(a){this.a=a},
fJ(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.hK()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.b0(new A.cL(q),1)).observe(s,{childList:true})
return new A.cK(q,s,r)}else if(self.setImmediate!=null)return A.hL()
return A.hM()},
fK(a){self.scheduleImmediate(A.b0(new A.cM(a),0))},
fL(a){self.setImmediate(A.b0(new A.cN(a),0))},
fM(a){A.fW(0,a)},
eo(a,b){var s=B.a.v(a.a,1000)
return A.fX(s<0?0:s,b)},
fW(a,b){var s=new A.aS()
s.bd(a,b)
return s},
fX(a,b){var s=new A.aS()
s.be(a,b)
return s},
hx(a){return new A.bI(new A.l($.j,a.n("l<0>")),a.n("bI<0>"))},
hd(a,b){a.$2(0,null)
b.b=!0
return b.a},
j5(a,b){A.he(a,b)},
hc(a,b){var s,r=a==null?b.$ti.c.a(a):a
if(!b.b)b.a.bh(r)
else{s=b.a
if(b.$ti.n("ae<1>").b(r))s.aF(r)
else s.a8(r)}},
hb(a,b){var s=A.a0(a),r=A.Z(a),q=b.a
if(b.b)q.J(s,r)
else q.bi(s,r)},
he(a,b){var s,r,q=new A.df(b),p=new A.dg(b)
if(a instanceof A.l)a.aO(q,p,t.z)
else{s=t.z
if(a instanceof A.l)a.aA(q,p,s)
else{r=new A.l($.j,t.d)
r.a=8
r.c=a
r.aO(q,p,s)}}},
hI(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.j.b1(new A.dj(s))},
c8(a,b){var s=A.dk(a,"error",t.K)
return new A.b7(s,b==null?A.fo(a):b)},
fo(a){var s
if(t.Q.b(a)){s=a.gP()
if(s!=null)return s}return B.J},
es(a,b){var s,r
for(;s=a.a,(s&4)!==0;)a=a.c
if((s&24)!==0){r=b.ae()
b.S(a)
A.aN(b,r)}else{r=b.c
b.aM(a)
a.ad(r)}},
fP(a,b){var s,r,q={},p=q.a=a
for(;s=p.a,(s&4)!==0;){p=p.c
q.a=p}if((s&24)===0){r=b.c
b.aM(p)
q.a.ad(r)
return}if((s&16)===0&&b.c==null){b.S(p)
return}b.a^=2
A.a5(null,null,b.b,new A.cW(q,b))},
aN(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;!0;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){f=f.c
A.dh(f.a,f.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.aN(g.a,f)
s.a=o
n=o.a}r=g.a
m=r.c
s.b=p
s.c=m
if(q){l=f.c
l=(l&1)!==0||(l&15)===8}else l=!0
if(l){k=f.b.b
if(p){r=r.b===k
r=!(r||r)}else r=!1
if(r){A.dh(m.a,m.b)
return}j=$.j
if(j!==k)$.j=k
else j=null
f=f.c
if((f&15)===8)new A.d2(s,g,p).$0()
else if(q){if((f&1)!==0)new A.d1(s,m).$0()}else if((f&2)!==0)new A.d0(g,s).$0()
if(j!=null)$.j=j
f=s.c
if(f instanceof A.l){r=s.a.$ti
r=r.n("ae<2>").b(f)||!r.z[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.V(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.es(f,i)
return}}i=s.a.b
h=i.c
i.c=null
b=i.V(h)
f=s.b
r=s.c
if(!f){i.a=8
i.c=r}else{i.a=i.a&1|16
i.c=r}g.a=i
f=i}},
hA(a,b){if(t.C.b(a))return b.b1(a)
if(t.v.b(a))return a
throw A.d(A.e3(a,"onError",u.c))},
hy(){var s,r
for(s=$.ap;s!=null;s=$.ap){$.aZ=null
r=s.b
$.ap=r
if(r==null)$.aY=null
s.a.$0()}},
hD(){$.dQ=!0
try{A.hy()}finally{$.aZ=null
$.dQ=!1
if($.ap!=null)$.e0().$1(A.eS())}},
eQ(a){var s=new A.bK(a),r=$.aY
if(r==null){$.ap=$.aY=s
if(!$.dQ)$.e0().$1(A.eS())}else $.aY=r.b=s},
hC(a){var s,r,q,p=$.ap
if(p==null){A.eQ(a)
$.aZ=$.aY
return}s=new A.bK(a)
r=$.aZ
if(r==null){s.b=p
$.ap=$.aZ=s}else{q=r.b
s.b=q
$.aZ=r.b=s
if(q==null)$.aY=s}},
i7(a){var s,r=null,q=$.j
if(B.b===q){A.a5(r,r,B.b,a)
return}s=!1
if(s){A.a5(r,r,q,a)
return}A.a5(r,r,q,q.aR(a))},
iB(a){A.dk(a,"stream",t.K)
return new A.c_()},
dI(a){return new A.bJ(null,a.n("bJ<0>"))},
en(a,b){var s=$.j
if(s===B.b)return A.eo(a,b)
return A.eo(a,s.aS(b,t.G))},
dh(a,b){A.hC(new A.di(a,b))},
eN(a,b,c,d){var s,r=$.j
if(r===c)return d.$0()
$.j=c
s=r
try{r=d.$0()
return r}finally{$.j=s}},
eO(a,b,c,d,e){var s,r=$.j
if(r===c)return d.$1(e)
$.j=c
s=r
try{r=d.$1(e)
return r}finally{$.j=s}},
hB(a,b,c,d,e,f){var s,r=$.j
if(r===c)return d.$2(e,f)
$.j=c
s=r
try{r=d.$2(e,f)
return r}finally{$.j=s}},
a5(a,b,c,d){if(B.b!==c)d=c.aR(d)
A.eQ(d)},
cL:function cL(a){this.a=a},
cK:function cK(a,b,c){this.a=a
this.b=b
this.c=c},
cM:function cM(a){this.a=a},
cN:function cN(a){this.a=a},
aS:function aS(){this.c=0},
dc:function dc(a,b){this.a=a
this.b=b},
db:function db(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bI:function bI(a,b){this.a=a
this.b=!1
this.$ti=b},
df:function df(a){this.a=a},
dg:function dg(a){this.a=a},
dj:function dj(a){this.a=a},
b7:function b7(a,b){this.a=a
this.b=b},
bL:function bL(){},
bJ:function bJ(a,b){var _=this
_.b=a
_.c=0
_.e=_.d=null
_.$ti=b},
an:function an(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
l:function l(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
cT:function cT(a,b){this.a=a
this.b=b},
d_:function d_(a,b){this.a=a
this.b=b},
cX:function cX(a){this.a=a},
cY:function cY(a){this.a=a},
cZ:function cZ(a,b,c){this.a=a
this.b=b
this.c=c},
cW:function cW(a,b){this.a=a
this.b=b},
cV:function cV(a,b){this.a=a
this.b=b},
cU:function cU(a,b,c){this.a=a
this.b=b
this.c=c},
d2:function d2(a,b,c){this.a=a
this.b=b
this.c=c},
d3:function d3(a){this.a=a},
d1:function d1(a,b){this.a=a
this.b=b},
d0:function d0(a,b){this.a=a
this.b=b},
bK:function bK(a){this.a=a
this.b=null},
aH:function aH(){},
cx:function cx(a,b){this.a=a
this.b=b},
c_:function c_(){},
de:function de(){},
di:function di(a,b){this.a=a
this.b=b},
d8:function d8(){},
d9:function d9(a,b){this.a=a
this.b=b},
da:function da(a,b,c){this.a=a
this.b=b
this.c=c},
fC(){return new A.bU()},
dK(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
et(a,b){var s=new A.aO(a,b)
s.c=a.e
return s},
dD(a){var s,r={}
if(A.dW(a))return"{...}"
s=new A.bC("")
try{$.a9.push(a)
s.a+="{"
r.a=!0
a.an(0,new A.cj(r,s))
s.a+="}"}finally{$.a9.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
bU:function bU(){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0},
d6:function d6(a){this.a=a
this.c=this.b=null},
aO:function aO(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
a4:function a4(){},
bq:function bq(){},
cj:function cj(a,b){this.a=a
this.b=b},
bA:function bA(){},
bZ:function bZ(){},
fw(a,b){a=A.d(a)
a.stack=b.h(0)
throw a
throw A.d("unreachable")},
ci(a,b,c){var s,r=c?J.ec(a):J.fA(a)
if(a!==0&&!0)for(s=0;s<r.length;++s)r[s]=b
return r},
ee(a,b){var s,r=[]
for(s=J.c6(a);s.l();)r.push(s.gm())
if(b)return r
return J.dA(r)},
ek(a,b,c){var s=J.c6(b)
if(!s.l())return a
if(c.length===0){do a+=A.e(s.gm())
while(s.l())}else{a+=A.e(s.gm())
for(;s.l();)a=a+c+A.e(s.gm())}return a},
ea(a){return new A.bc(1000*a)},
cd(a){if(typeof a=="number"||A.dP(a)||a==null)return J.b2(a)
if(typeof a=="string")return JSON.stringify(a)
return A.eg(a)},
fx(a,b){A.dk(a,"error",t.K)
A.dk(b,"stackTrace",t.l)
A.fw(a,b)},
b6(a){return new A.b5(a)},
c7(a,b){return new A.E(!1,null,b,a)},
e3(a,b,c){return new A.E(!0,a,b,c)},
fE(a){var s=null
return new A.al(s,s,!1,s,s,a)},
dE(a,b,c,d,e){return new A.al(b,c,!0,a,d,"Invalid value")},
eh(a,b){if(a<0)throw A.d(A.dE(a,0,null,b,null))
return a},
bi(a,b,c,d){return new A.bh(b,!0,a,d,"Index out of range")},
aK(a){return new A.bF(a)},
eq(a){return new A.bD(a)},
ba(a){return new A.b9(a)},
fy(a){return new A.cS(a)},
fz(a,b,c){var s,r
if(A.dW(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=[]
$.a9.push(a)
try{A.hw(a,s)}finally{$.a9.pop()}r=A.ek(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
dz(a,b,c){var s,r
if(A.dW(a))return b+"..."+c
s=new A.bC(b)
$.a9.push(a)
try{r=s
r.a=A.ek(r.a,a,", ")}finally{$.a9.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
hw(a,b){var s,r,q,p,o,n,m,l=a.gq(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.l())return
s=A.e(l.gm())
b.push(s)
k+=s.length+2;++j}if(!l.l()){if(j<=5)return
r=b.pop()
q=b.pop()}else{p=l.gm();++j
if(!l.l()){if(j<=4){b.push(A.e(p))
return}r=A.e(p)
q=b.pop()
k+=r.length+2}else{o=l.gm();++j
for(;l.l();p=o,o=n){n=l.gm();++j
if(j>100){while(!0){if(!(k>75&&j>3))break
k-=b.pop().length+2;--j}b.push("...")
return}}q=A.e(p)
r=A.e(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
aE(a,b,c,d){var s
if(B.h===c)return A.el(B.c.gj(a),J.D(b),$.du())
if(B.h===d){s=B.c.gj(a)
b=J.D(b)
c=J.D(c)
return A.dJ(A.V(A.V(A.V($.du(),s),b),c))}s=A.em(B.c.gj(a),J.D(b),J.D(c),J.D(d),$.du())
return s},
bc:function bc(a){this.a=a},
cQ:function cQ(){},
h:function h(){},
b5:function b5(a){this.a=a},
I:function I(){},
E:function E(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
al:function al(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bh:function bh(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bF:function bF(a){this.a=a},
bD:function bD(a){this.a=a},
bB:function bB(a){this.a=a},
b9:function b9(a){this.a=a},
bv:function bv(){},
aG:function aG(){},
cS:function cS(a){this.a=a},
bj:function bj(){},
p:function p(){},
i:function i(){},
c0:function c0(){},
bC:function bC(a){this.a=a},
e8(a,b){var s=document.createElement("canvas")
s.width=b
s.height=a
return s},
fN(a,b){var s,r
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.dt)(b),++r)a.appendChild(b[r])},
W(a,b,c,d){var s=A.hJ(new A.cR(c),t.B),r=s!=null
if(r&&!0)if(r)J.fk(a,b,s,!1)
return new A.bQ(a,b,s,!1)},
eG(a){var s
if("postMessage" in a){s=A.fO(a)
return s}else return a},
fO(a){if(a===window)return a
else return new A.cP()},
hJ(a,b){var s=$.j
if(s===B.b)return a
return s.aS(a,b)},
c:function c(){},
b3:function b3(){},
b4:function b4(){},
b8:function b8(){},
z:function z(){},
ac:function ac(){},
cb:function cb(){},
cc:function cc(){},
at:function at(){},
cO:function cO(a,b){this.a=a
this.b=b},
n:function n(){},
a:function a(){},
ad:function ad(){},
bf:function bf(){},
a2:function a2(){},
A:function A(){},
t:function t(){},
bM:function bM(a){this.a=a},
f:function f(){},
aC:function aC(){},
bz:function bz(){},
C:function C(){},
aL:function aL(){},
dy:function dy(a,b){this.a=a
this.$ti=b},
aM:function aM(){},
q:function q(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bQ:function bQ(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
cR:function cR(a){this.a=a},
aw:function aw(){},
av:function av(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
cP:function cP(){},
bN:function bN(){},
bS:function bS(){},
bT:function bT(){},
bV:function bV(){},
bW:function bW(){},
dx(){return window.navigator.userAgent},
bd:function bd(a,b){this.a=a
this.b=b},
ce:function ce(){},
cf:function cf(){},
dF(a,b,c,d,e){var s,r
if(c<0)s=c===-1/0?0:-c*0
else s=c
if(d<0)r=d===-1/0?0:-d*0
else r=d
return new A.H(a,b,s,r,e.n("H<0>"))},
d4:function d4(){},
S:function S(a,b,c){this.a=a
this.b=b
this.$ti=c},
bY:function bY(){},
H:function H(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b:function b(){},
as:function as(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
R:function R(a){this.a=a},
ai:function ai(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ak:function ak(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=0},
fG(a,b,c,d,e,f,g){var s,r,q=g*f,p=d*e,o=A.e8(p,q)
q=A.e8(p,q)
p=[]
for(s=0;s<d;++s){r=B.a.v(g,32)
p.push(new Uint32Array(r+1))}q=new A.by(d,g,f,e,c,a,o,q,p)
q.ba(a,b,c,d,e,f,g)
return q},
dH(a){return new A.y(B.a.v(a,32),31-B.a.i(a,32))},
B:function B(a){this.b=a},
by:function by(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=!0},
cn:function cn(a){this.a=a},
co:function co(a){this.a=a},
cp:function cp(a){this.a=a},
cq:function cq(a){this.a=a},
cm:function cm(){},
fI(a,b,c,d,e,f,g){var s,r,q,p="white",o=null,n=A.fG("black",b,p,e*(8+d),2,2,a*8),m=[]
for(s=0;s<e;++s){r=[]
for(q=0;q<a;++q)r.push(new A.as(s,q," ",p))
m.push(r)}n=new A.aI(e,a,d,b,!0,n,new A.ak(e,a),new A.ak(e,a),new A.ak(e,a),!1,A.dI(t.N),A.dI(t.U),A.dI(t.m),B.z,m,A.fC(),B.dQ)
n.bc("black",a,b,p,o,!0,2,2,d,e,!1,g,o,o,o,o,o)
return n},
am:function am(a){this.b=a},
aI:function aI(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.a=a
_.b=b
_.c=c
_.f=d
_.r=e
_.w=f
_.x=g
_.y=h
_.z=i
_.Q=j
_.as=k
_.at=l
_.ax=m
_.ay=n
_.ch=o
_.CW=p
_.cx=q
_.cy=!1},
cG:function cG(a){this.a=a},
cF:function cF(){},
cE:function cE(a){this.a=a},
cz:function cz(a){this.a=a},
cA:function cA(a){this.a=a},
cB:function cB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cC:function cC(a,b,c){this.a=a
this.b=b
this.c=c},
cD:function cD(a){this.a=a},
fH(a,b,c){var s,r,q,p=[]
for(s=0;s<a;++s){r=[]
for(q=0;q<b;++q)r.push(B.d)
p.push(r)}p=new A.cs(a,b,[],p,B.o)
p.bb(a,b,c)
return p},
i4(){var s=document.getElementById("snake")
s.toString
A.fH(30,30,s)},
K:function K(a){this.b=a},
af:function af(a){this.b=a},
cs:function cs(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=$
_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=0
_.ax=_.at=$
_.ay=e
_.CW=_.ch=0
_.cx=!1},
ct:function ct(a){this.a=a},
cv:function cv(a){this.a=a},
cu:function cu(a){this.a=a},
ia(a){A.dZ(new A.ah("Field '"+a+"' has been assigned during initialization."),new Error())},
o(){A.dZ(new A.ah("Field '' has not been initialized."),new Error())},
ib(){A.dZ(new A.ah("Field '' has already been initialized."),new Error())}},J={
dX(a,b,c,d){return{i:a,p:b,e:c,x:d}},
dm(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.dV==null){A.hY()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.eq("Return interceptor for "+A.e(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.d5
if(o==null)o=$.d5=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.i3(a)
if(p!=null)return p
if(typeof a=="function")return B.L
s=Object.getPrototypeOf(a)
if(s==null)return B.y
if(s===Object.prototype)return B.y
if(typeof q=="function"){o=$.d5
if(o==null)o=$.d5=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.r,enumerable:false,writable:true,configurable:true})
return B.r}return B.r},
fA(a){if(a<0||a>4294967295)throw A.d(A.dE(a,0,4294967295,"length",null))
return J.fB(new Array(a))},
ec(a){if(a<0)throw A.d(A.c7("Length must be a non-negative integer: "+a,null))
return new Array(a)},
fB(a){return J.dA(a)},
dA(a){a.fixed$length=Array
return a},
a7(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ay.prototype
return J.bl.prototype}if(typeof a=="string")return J.ag.prototype
if(a==null)return J.az.prototype
if(typeof a=="boolean")return J.bk.prototype
if(Array.isArray(a))return J.F.prototype
if(typeof a!="object"){if(typeof a=="function")return J.G.prototype
return a}if(a instanceof A.i)return a
return J.dm(a)},
eU(a){if(typeof a=="string")return J.ag.prototype
if(a==null)return a
if(Array.isArray(a))return J.F.prototype
if(typeof a!="object"){if(typeof a=="function")return J.G.prototype
return a}if(a instanceof A.i)return a
return J.dm(a)},
dU(a){if(a==null)return a
if(Array.isArray(a))return J.F.prototype
if(typeof a!="object"){if(typeof a=="function")return J.G.prototype
return a}if(a instanceof A.i)return a
return J.dm(a)},
a8(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.G.prototype
return a}if(a instanceof A.i)return a
return J.dm(a)},
aa(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.a7(a).t(a,b)},
fj(a,b){if(typeof b==="number")if(Array.isArray(a)||A.i1(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.dU(a).p(a,b)},
fk(a,b,c,d){return J.a8(a).bg(a,b,c,d)},
e1(a){return J.a8(a).aH(a)},
e2(a,b){return J.dU(a).C(a,b)},
D(a){return J.a7(a).gj(a)},
c6(a){return J.dU(a).gq(a)},
dw(a){return J.eU(a).gk(a)},
fl(a){return J.a8(a).gbE(a)},
fm(a){return J.a7(a).gD(a)},
fn(a,b){return J.a8(a).sL(a,b)},
b2(a){return J.a7(a).h(a)},
ax:function ax(){},
bk:function bk(){},
az:function az(){},
v:function v(){},
a3:function a3(){},
bw:function bw(){},
aJ:function aJ(){},
G:function G(){},
F:function F(){},
cg:function cg(){},
ab:function ab(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
aA:function aA(){},
ay:function ay(){},
bl:function bl(){},
ag:function ag(){}},B={}
var w=[A,J,B]
var $={}
A.dB.prototype={}
J.ax.prototype={
t(a,b){return a===b},
gj(a){return A.aF(a)},
h(a){return"Instance of '"+A.cl(a)+"'"},
gD(a){return A.a6(A.dO(this))}}
J.bk.prototype={
h(a){return String(a)},
gj(a){return a?519018:218159},
gD(a){return A.a6(t.y)},
$ix:1}
J.az.prototype={
t(a,b){return null==b},
h(a){return"null"},
gj(a){return 0},
$ix:1,
$ip:1}
J.v.prototype={}
J.a3.prototype={
gj(a){return 0},
h(a){return String(a)}}
J.bw.prototype={}
J.aJ.prototype={}
J.G.prototype={
h(a){var s=a[$.f2()]
if(s==null)return this.b9(a)
return"JavaScript function for "+J.b2(s)}}
J.F.prototype={
bH(a,b){var s
if(!!a.fixed$length)A.eZ(A.aK("remove"))
for(s=0;s<a.length;++s)if(J.aa(a[s],b)){a.splice(s,1)
return!0}return!1},
bz(a,b){var s,r=A.ci(a.length,"",!1)
for(s=0;s<a.length;++s)r[s]=A.e(a[s])
return r.join(b)},
bu(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw A.d(A.ba(a))}return s},
bv(a,b,c){return this.bu(a,b,c,t.z)},
C(a,b){return a[b]},
gaV(a){if(a.length>0)return a[0]
throw A.d(A.eb())},
gbA(a){var s=a.length
if(s>0)return a[s-1]
throw A.d(A.eb())},
bt(a,b){var s
for(s=0;s<a.length;++s)if(J.aa(a[s],b))return!0
return!1},
h(a){return A.dz(a,"[","]")},
gq(a){return new J.ab(a,a.length)},
gj(a){return A.aF(a)},
gk(a){return a.length}}
J.cg.prototype={}
J.ab.prototype={
gm(){var s=this.d
return s==null?A.N(this).c.a(s):s},
l(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.d(A.dt(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.aA.prototype={
b4(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.d(A.aK(""+a+".toInt()"))},
h(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gj(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
i(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
E(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.aN(a,b)},
v(a,b){return(a|0)===a?a/b|0:this.aN(a,b)},
aN(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.aK("Result of truncating division is "+A.e(s)+": "+A.e(a)+" ~/ "+b))},
O(a,b){if(b<0)throw A.d(A.dS(b))
return b>31?0:a<<b>>>0},
bq(a,b){return b>31?0:a<<b>>>0},
b7(a,b){var s
if(b<0)throw A.d(A.dS(b))
if(a>0)s=this.ag(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
br(a,b){var s
if(a>0)s=this.ag(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
B(a,b){if(0>b)throw A.d(A.dS(b))
return this.ag(a,b)},
ag(a,b){return b>31?0:a>>>b},
gD(a){return A.a6(t.n)},
$iP:1}
J.ay.prototype={
gD(a){return A.a6(t.S)},
$ix:1,
$im:1}
J.bl.prototype={
gD(a){return A.a6(t.i)},
$ix:1}
J.ag.prototype={
b5(a,b){return a+b},
a5(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.H)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
bF(a,b,c){var s=b-a.length
if(s<=0)return a
return this.a5(c,s)+a},
ak(a,b,c){var s=a.length
if(c>s)throw A.d(A.dE(c,0,s,null,null))
return A.i8(a,b,c)},
h(a){return a},
gj(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gD(a){return A.a6(t.N)},
gk(a){return a.length},
$ix:1,
$iU:1}
A.ah.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.cr.prototype={}
A.bp.prototype={
gm(){var s=this.d
return s==null?A.N(this).c.a(s):s},
l(){var s,r=this,q=r.a,p=J.eU(q),o=p.gk(q)
if(r.b!==o)throw A.d(A.ba(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.C(q,s);++r.c
return!0}}
A.br.prototype={
gq(a){return new A.bs(J.c6(this.a),this.b)},
gk(a){return J.dw(this.a)},
C(a,b){return this.b.$1(J.e2(this.a,b))}}
A.bs.prototype={
l(){var s=this,r=s.b
if(r.l()){s.a=s.c.$1(r.gm())
return!0}s.a=null
return!1},
gm(){var s=this.a
return s==null?A.N(this).z[1].a(s):s}}
A.bG.prototype={
gq(a){return new A.bH(J.c6(this.a),this.b)}}
A.bH.prototype={
l(){var s,r
for(s=this.a,r=this.b;s.l();)if(r.$1(s.gm()))return!0
return!1},
gm(){return this.a.gm()}}
A.be.prototype={}
A.y.prototype={$r:"+(1,2)",$s:1}
A.bb.prototype={
h(a){return A.dD(this)}}
A.bg.prototype={
U(){var s=this.$map
if(s==null){s=new A.bm()
A.hS(this.a,s)
this.$map=s}return s},
al(a){return this.U().al(a)},
p(a,b){return this.U().p(0,b)},
an(a,b){this.U().an(0,b)},
gk(a){return this.U().a}}
A.cI.prototype={
A(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
A.aD.prototype={
h(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
A.bo.prototype={
h(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.bE.prototype={
h(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.ck.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.au.prototype={}
A.aR.prototype={
h(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iT:1}
A.a1.prototype={
h(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.f0(r==null?"unknown":r)+"'"},
gbT(){return this},
$C:"$1",
$R:1,
$D:null}
A.c9.prototype={$C:"$0",$R:0}
A.ca.prototype={$C:"$2",$R:2}
A.cy.prototype={}
A.cw.prototype={
h(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.f0(s)+"'"}}
A.ar.prototype={
t(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.ar))return!1
return this.$_target===b.$_target&&this.a===b.a},
gj(a){return(A.dY(this.a)^A.aF(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.cl(this.a)+"'")}}
A.bO.prototype={
h(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.bx.prototype={
h(a){return"RuntimeError: "+this.a}}
A.bn.prototype={
gk(a){return this.a},
al(a){var s=this.b
if(s==null)return!1
return s[a]!=null},
p(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.by(b)},
by(a){var s,r,q=this.d
if(q==null)return null
s=q[this.ao(a)]
r=this.ap(s,a)
if(r<0)return null
return s[r].b},
an(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw A.d(A.ba(s))
r=r.c}},
R(a,b){var s=this,r=new A.ch(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&1073741823
return r},
ao(a){return J.D(a)&1073741823},
ap(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aa(a[r].a,b))return r
return-1},
h(a){return A.dD(this)}}
A.ch.prototype={}
A.bm.prototype={
ao(a){return A.hN(a)&1073741823},
ap(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aa(a[r].a,b))return r
return-1}}
A.dn.prototype={
$1(a){return this.a(a)},
$S:6}
A.dp.prototype={
$2(a,b){return this.a(a,b)},
$S:7}
A.dq.prototype={
$1(a){return this.a(a)},
$S:8}
A.ao.prototype={
h(a){return this.aP(!1)},
aP(a){var s,r,q,p,o,n=this.bm(),m=this.aJ(),l=(a?""+"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
o=m[q]
l=a?l+A.eg(o):l+A.e(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
bm(){var s,r=this.$s
for(;$.d7.length<=r;)$.d7.push(null)
s=$.d7[r]
if(s==null){s=this.bl()
$.d7[r]=s}return s},
bl(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=new Array(l)
for(s=0;s<l;++s)k[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
k[q]=r[s]}}k=A.ee(k,!1)
k.fixed$length=Array
k.immutable$list=Array
return k}}
A.bX.prototype={
aJ(){return[this.a,this.b]},
t(a,b){if(b==null)return!1
return b instanceof A.bX&&this.$s===b.$s&&J.aa(this.a,b.a)&&J.aa(this.b,b.b)},
gj(a){return A.aE(this.$s,this.a,this.b,B.h)}}
A.bt.prototype={}
A.aj.prototype={
gk(a){return a.length},
$iQ:1}
A.aB.prototype={}
A.bu.prototype={
gD(a){return B.e0},
p(a,b){A.hf(b,a,a.length)
return a[b]},
$ix:1}
A.aP.prototype={}
A.aQ.prototype={}
A.w.prototype={
n(a){return A.aX(v.typeUniverse,this,a)},
aE(a){return A.eC(v.typeUniverse,this,a)}}
A.bR.prototype={}
A.c1.prototype={
h(a){return A.u(this.a,null)}}
A.bP.prototype={
h(a){return this.a}}
A.aT.prototype={$iI:1}
A.cL.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:4}
A.cK.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:9}
A.cM.prototype={
$0(){this.a.$0()},
$S:2}
A.cN.prototype={
$0(){this.a.$0()},
$S:2}
A.aS.prototype={
bd(a,b){if(self.setTimeout!=null)self.setTimeout(A.b0(new A.dc(this,b),0),a)
else throw A.d(A.aK("`setTimeout()` not found."))},
be(a,b){if(self.setTimeout!=null)self.setInterval(A.b0(new A.db(this,a,Date.now(),b),0),a)
else throw A.d(A.aK("Periodic timer."))},
$icH:1}
A.dc.prototype={
$0(){this.a.c=1
this.b.$0()},
$S:0}
A.db.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.a.E(s,o)}q.c=p
r.d.$1(q)},
$S:2}
A.bI.prototype={}
A.df.prototype={
$1(a){return this.a.$2(0,a)},
$S:10}
A.dg.prototype={
$2(a,b){this.a.$2(1,new A.au(a,b))},
$S:11}
A.dj.prototype={
$2(a,b){this.a(a,b)},
$S:12}
A.b7.prototype={
h(a){return A.e(this.a)},
$ih:1,
gP(){return this.b}}
A.bL.prototype={}
A.bJ.prototype={}
A.an.prototype={
bB(a){if((this.c&15)!==6)return!0
return this.b.b.az(this.d,a.a)},
bw(a){var s,r=this.e,q=null,p=a.a,o=this.b.b
if(t.C.b(r))q=o.bK(r,p,a.b)
else q=o.az(r,p)
try{p=q
return p}catch(s){if(t.c.b(A.a0(s))){if((this.c&1)!==0)throw A.d(A.c7("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.c7("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.l.prototype={
aM(a){this.a=this.a&1|4
this.c=a},
aA(a,b,c){var s,r,q=$.j
if(q===B.b){if(b!=null&&!t.C.b(b)&&!t.v.b(b))throw A.d(A.e3(b,"onError",u.c))}else if(b!=null)b=A.hA(b,q)
s=new A.l(q,c.n("l<0>"))
r=b==null?1:3
this.a6(new A.an(s,r,a,b,this.$ti.n("@<1>").aE(c).n("an<1,2>")))
return s},
bQ(a,b){return this.aA(a,null,b)},
aO(a,b,c){var s=new A.l($.j,c.n("l<0>"))
this.a6(new A.an(s,3,a,b,this.$ti.n("@<1>").aE(c).n("an<1,2>")))
return s},
bp(a){this.a=this.a&1|16
this.c=a},
S(a){this.a=a.a&30|this.a&1
this.c=a.c},
a6(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.a6(a)
return}s.S(r)}A.a5(null,null,s.b,new A.cT(s,a))}},
ad(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.ad(a)
return}n.S(s)}m.a=n.V(a)
A.a5(null,null,n.b,new A.d_(m,n))}},
ae(){var s=this.c
this.c=null
return this.V(s)},
V(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
bk(a){var s,r,q,p=this
p.a^=2
try{a.aA(new A.cX(p),new A.cY(p),t.P)}catch(q){s=A.a0(q)
r=A.Z(q)
A.i7(new A.cZ(p,s,r))}},
a8(a){var s=this,r=s.ae()
s.a=8
s.c=a
A.aN(s,r)},
J(a,b){var s=this.ae()
this.bp(A.c8(a,b))
A.aN(this,s)},
bh(a){if(this.$ti.n("ae<1>").b(a)){this.aF(a)
return}this.bj(a)},
bj(a){this.a^=2
A.a5(null,null,this.b,new A.cV(this,a))},
aF(a){if(this.$ti.b(a)){A.fP(a,this)
return}this.bk(a)},
bi(a,b){this.a^=2
A.a5(null,null,this.b,new A.cU(this,a,b))},
$iae:1}
A.cT.prototype={
$0(){A.aN(this.a,this.b)},
$S:0}
A.d_.prototype={
$0(){A.aN(this.b,this.a.a)},
$S:0}
A.cX.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.a8(p.$ti.c.a(a))}catch(q){s=A.a0(q)
r=A.Z(q)
p.J(s,r)}},
$S:4}
A.cY.prototype={
$2(a,b){this.a.J(a,b)},
$S:13}
A.cZ.prototype={
$0(){this.a.J(this.b,this.c)},
$S:0}
A.cW.prototype={
$0(){A.es(this.a.a,this.b)},
$S:0}
A.cV.prototype={
$0(){this.a.a8(this.b)},
$S:0}
A.cU.prototype={
$0(){this.a.J(this.b,this.c)},
$S:0}
A.d2.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.bI(q.d)}catch(p){s=A.a0(p)
r=A.Z(p)
q=m.c&&m.b.a.c.a===s
o=m.a
if(q)o.c=m.b.a.c
else o.c=A.c8(s,r)
o.b=!0
return}if(l instanceof A.l&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=l.c
q.b=!0}return}if(l instanceof A.l){n=m.b.a
q=m.a
q.c=l.bQ(new A.d3(n),t.z)
q.b=!1}},
$S:0}
A.d3.prototype={
$1(a){return this.a},
$S:14}
A.d1.prototype={
$0(){var s,r,q,p,o
try{q=this.a
p=q.a
q.c=p.b.b.az(p.d,this.b)}catch(o){s=A.a0(o)
r=A.Z(o)
q=this.a
q.c=A.c8(s,r)
q.b=!0}},
$S:0}
A.d0.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=m.a.a.c
p=m.b
if(p.a.bB(s)&&p.a.e!=null){p.c=p.a.bw(s)
p.b=!1}}catch(o){r=A.a0(o)
q=A.Z(o)
p=m.a.a.c
n=m.b
if(p.a===r)n.c=p
else n.c=A.c8(r,q)
n.b=!0}},
$S:0}
A.bK.prototype={}
A.aH.prototype={
gk(a){var s={},r=$.j
s.a=0
A.W(this.a,this.b,new A.cx(s,this),!1)
return new A.l(r,t.a)}}
A.cx.prototype={
$1(a){++this.a.a},
$S(){return A.N(this.b).n("~(1)")}}
A.c_.prototype={}
A.de.prototype={}
A.di.prototype={
$0(){A.fx(this.a,this.b)},
$S:0}
A.d8.prototype={
bM(a){var s,r,q
try{if(B.b===$.j){a.$0()
return}A.eN(null,null,this,a)}catch(q){s=A.a0(q)
r=A.Z(q)
A.dh(s,r)}},
bO(a,b){var s,r,q
try{if(B.b===$.j){a.$1(b)
return}A.eO(null,null,this,a,b)}catch(q){s=A.a0(q)
r=A.Z(q)
A.dh(s,r)}},
bP(a,b){return this.bO(a,b,t.z)},
aR(a){return new A.d9(this,a)},
aS(a,b){return new A.da(this,a,b)},
bJ(a){if($.j===B.b)return a.$0()
return A.eN(null,null,this,a)},
bI(a){return this.bJ(a,t.z)},
bN(a,b){if($.j===B.b)return a.$1(b)
return A.eO(null,null,this,a,b)},
az(a,b){return this.bN(a,b,t.z,t.z)},
bL(a,b,c){if($.j===B.b)return a.$2(b,c)
return A.hB(null,null,this,a,b,c)},
bK(a,b,c){return this.bL(a,b,c,t.z,t.z,t.z)},
bG(a){return a},
b1(a){return this.bG(a,t.z,t.z,t.z)}}
A.d9.prototype={
$0(){return this.a.bM(this.b)},
$S:0}
A.da.prototype={
$1(a){return this.a.bP(this.b,a)},
$S(){return this.c.n("~(0)")}}
A.bU.prototype={
gq(a){var s=new A.aO(this,this.r)
s.c=this.e
return s},
gk(a){return this.a},
Y(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.aD(s==null?q.b=A.dK():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.aD(r==null?q.c=A.dK():r,b)}else return q.bf(b)},
bf(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.dK()
s=J.D(a)&1073741823
r=p[s]
if(r==null)p[s]=[q.ac(a)]
else{if(q.bn(r,a)>=0)return!1
r.push(q.ac(a))}return!0},
aD(a,b){if(a[b]!=null)return!1
a[b]=this.ac(b)
return!0},
aL(){this.r=this.r+1&1073741823},
ac(a){var s,r=this,q=new A.d6(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.aL()
return q},
bn(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aa(a[r].a,b))return r
return-1}}
A.d6.prototype={}
A.aO.prototype={
gm(){var s=this.d
return s==null?A.N(this).c.a(s):s},
l(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.d(A.ba(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.a4.prototype={
gq(a){return new A.bp(a,this.gk(a))},
C(a,b){return this.p(a,b)},
gaW(a){return this.gk(a)===0},
bS(a){var s,r,q,p,o=this
if(o.gaW(a)){s=J.ec(0)
return s}r=o.p(a,0)
q=A.ci(o.gk(a),r,!0)
for(p=1;p<o.gk(a);++p)q[p]=o.p(a,p)
return q},
h(a){return A.dz(a,"[","]")}}
A.bq.prototype={
gk(a){return this.a},
h(a){return A.dD(this)}}
A.cj.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=A.e(a)
r.a=s+": "
r.a+=A.e(b)},
$S:15}
A.bA.prototype={
h(a){return A.dz(this,"{","}")},
C(a,b){var s,r,q
A.eh(b,"index")
s=A.et(this,this.r)
for(r=b;s.l();){if(r===0){q=s.d
return q==null?A.N(s).c.a(q):q}--r}throw A.d(A.bi(b,b-r,this,"index"))}}
A.bZ.prototype={}
A.bc.prototype={
t(a,b){if(b==null)return!1
return b instanceof A.bc&&this.a===b.a},
gj(a){return B.a.gj(this.a)},
h(a){var s,r,q,p,o,n=this.a,m=B.a.v(n,36e8),l=n%36e8
if(n<0){m=0-m
n=0-l
s="-"}else{n=l
s=""}r=B.a.v(n,6e7)
n%=6e7
q=r<10?"0":""
p=B.a.v(n,1e6)
o=p<10?"0":""
return s+m+":"+q+r+":"+o+p+"."+B.f.bF(B.a.h(n%1e6),6,"0")}}
A.cQ.prototype={
h(a){return this.T()}}
A.h.prototype={
gP(){return A.Z(this.$thrownJsError)}}
A.b5.prototype={
h(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.cd(s)
return"Assertion failed"}}
A.I.prototype={}
A.E.prototype={
gaa(){return"Invalid argument"+(!this.a?"(s)":"")},
ga9(){return""},
h(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.gaa()+q+o
if(!s.a)return n
return n+s.ga9()+": "+A.cd(s.gaq())},
gaq(){return this.b}}
A.al.prototype={
gaq(){return this.b},
gaa(){return"RangeError"},
ga9(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.e(q):""
else if(q==null)s=": Not greater than or equal to "+A.e(r)
else if(q>r)s=": Not in inclusive range "+A.e(r)+".."+A.e(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.e(r)
return s}}
A.bh.prototype={
gaq(){return this.b},
gaa(){return"RangeError"},
ga9(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gk(a){return this.f}}
A.bF.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.bD.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.bB.prototype={
h(a){return"Bad state: "+this.a}}
A.b9.prototype={
h(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.cd(s)+"."}}
A.bv.prototype={
h(a){return"Out of Memory"},
gP(){return null},
$ih:1}
A.aG.prototype={
h(a){return"Stack Overflow"},
gP(){return null},
$ih:1}
A.cS.prototype={
h(a){return"Exception: "+this.a}}
A.bj.prototype={
gk(a){var s,r=this.gq(this)
for(s=0;r.l();)++s
return s},
C(a,b){var s,r
A.eh(b,"index")
s=this.gq(this)
for(r=b;s.l();){if(r===0)return s.gm();--r}throw A.d(A.bi(b,b-r,this,"index"))},
h(a){return A.fz(this,"(",")")}}
A.p.prototype={
gj(a){return A.i.prototype.gj.call(this,this)},
h(a){return"null"}}
A.i.prototype={$ii:1,
t(a,b){return this===b},
gj(a){return A.aF(this)},
h(a){return"Instance of '"+A.cl(this)+"'"},
gD(a){return A.hV(this)},
toString(){return this.h(this)}}
A.c0.prototype={
h(a){return""},
$iT:1}
A.bC.prototype={
gk(a){return this.a.length},
h(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.c.prototype={}
A.b3.prototype={
h(a){return String(a)}}
A.b4.prototype={
h(a){return String(a)}}
A.b8.prototype={
gar(a){return new A.q(a,"blur",!1,t.E)},
gau(a){return new A.q(a,"focus",!1,t.E)}}
A.z.prototype={
gk(a){return a.length}}
A.ac.prototype={
a7(a,b){var s=$.f1(),r=s[b]
if(typeof r=="string")return r
r=this.bs(a,b)
s[b]=r
return r},
bs(a,b){var s
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
s=$.f3()+b
if(s in a)return s
return b},
af(a,b,c,d){a.setProperty(b,c,d)},
gk(a){return a.length}}
A.cb.prototype={}
A.cc.prototype={
h(a){return String(a)}}
A.at.prototype={
h(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return"Rectangle ("+A.e(p)+", "+A.e(s)+") "+A.e(r)+" x "+A.e(q)},
t(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=J.a8(b)
if(s===r.ga1(b)){s=a.top
s.toString
if(s===r.ga3(b)){s=a.width
s.toString
if(s===r.ga4(b)){s=a.height
s.toString
r=s===r.ga0(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gj(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return A.aE(p,s,r,q)},
gaT(a){var s=a.bottom
s.toString
return s},
ga0(a){var s=a.height
s.toString
return s},
ga1(a){var s=a.left
s.toString
return s},
gb2(a){var s=a.right
s.toString
return s},
ga3(a){var s=a.top
s.toString
return s},
ga4(a){var s=a.width
s.toString
return s},
$iH:1}
A.cO.prototype={
gaW(a){return this.a.firstElementChild==null},
gk(a){return this.b.length},
p(a,b){return t.h.a(this.b[b])},
gq(a){var s=this.bS(this)
return new J.ab(s,s.length)},
ai(a,b){A.fN(this.a,b)},
F(a){J.e1(this.a)}}
A.n.prototype={
gL(a){return new A.cO(a,a.children)},
sL(a,b){var s=b.slice(0),r=this.gL(a)
r.F(0)
r.ai(0,s)},
h(a){return a.localName},
gar(a){return new A.q(a,"blur",!1,t.E)},
gaX(a){return new A.q(a,"click",!1,t.R)},
gau(a){return new A.q(a,"focus",!1,t.E)},
gaY(a){return new A.q(a,"keydown",!1,t.L)},
$in:1}
A.a.prototype={$ia:1}
A.ad.prototype={
bg(a,b,c,d){return a.addEventListener(b,A.b0(c,1),!1)}}
A.bf.prototype={
gk(a){return a.length}}
A.a2.prototype={
gk(a){return a.length},
p(a,b){var s=a.length
if(b>>>0!==b||b>=s)throw A.d(A.bi(b,s,a,null))
return a[b]},
C(a,b){return a[b]},
$iQ:1}
A.A.prototype={$iA:1}
A.t.prototype={
gbE(a){var s,r,q,p,o
if(!!a.offsetX)return new A.S(a.offsetX,a.offsetY,t.H)
else{s=a.target
r=t.h
if(!r.b(A.eG(s)))throw A.d(A.aK("offsetX is only supported on elements"))
q=r.a(A.eG(s))
s=a.clientX
r=a.clientY
p=q.getBoundingClientRect()
o=p.left
o.toString
p=p.top
p.toString
return new A.S(B.c.b4(s-o),B.c.b4(r-p),t.H)}},
$it:1}
A.bM.prototype={
gq(a){var s=this.a.childNodes
return new A.av(s,s.length)},
gk(a){return this.a.childNodes.length},
p(a,b){return this.a.childNodes[b]}}
A.f.prototype={
aH(a){var s
for(;s=a.firstChild,s!=null;)a.removeChild(s)},
h(a){var s=a.nodeValue
return s==null?this.b8(a):s},
$if:1}
A.aC.prototype={
gk(a){return a.length},
p(a,b){var s=a.length
if(b>>>0!==b||b>=s)throw A.d(A.bi(b,s,a,null))
return a[b]},
C(a,b){return a[b]},
$iQ:1}
A.bz.prototype={
gk(a){return a.length}}
A.C.prototype={}
A.aL.prototype={
h(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return"Rectangle ("+A.e(p)+", "+A.e(s)+") "+A.e(r)+" x "+A.e(q)},
t(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=J.a8(b)
if(s===r.ga1(b)){s=a.top
s.toString
if(s===r.ga3(b)){s=a.width
s.toString
if(s===r.ga4(b)){s=a.height
s.toString
r=s===r.ga0(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gj(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return A.aE(p,s,r,q)},
ga0(a){var s=a.height
s.toString
return s},
ga4(a){var s=a.width
s.toString
return s}}
A.dy.prototype={}
A.aM.prototype={}
A.q.prototype={}
A.bQ.prototype={}
A.cR.prototype={
$1(a){return this.a.$1(a)},
$S:1}
A.aw.prototype={
gq(a){return new A.av(a,this.gk(a))}}
A.av.prototype={
l(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.fj(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gm(){var s=this.d
return s==null?A.N(this).c.a(s):s}}
A.cP.prototype={}
A.bN.prototype={}
A.bS.prototype={}
A.bT.prototype={}
A.bV.prototype={}
A.bW.prototype={}
A.bd.prototype={
gab(){return new A.br(new A.bG(this.b,new A.ce()),new A.cf())},
ai(a,b){var s,r,q
for(s=b.length,r=this.b.a,q=0;q<b.length;b.length===s||(0,A.dt)(b),++q)r.appendChild(b[q])},
F(a){J.e1(this.b.a)},
gk(a){return J.dw(this.gab().a)},
p(a,b){var s=this.gab()
return s.b.$1(J.e2(s.a,b))},
gq(a){var s=A.ee(this.gab(),!1)
return new J.ab(s,s.length)}}
A.ce.prototype={
$1(a){return t.h.b(a)},
$S:16}
A.cf.prototype={
$1(a){return t.h.a(a)},
$S:17}
A.d4.prototype={
N(a){if(a<=0||a>4294967296)throw A.d(A.fE("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
A.S.prototype={
h(a){return"Point("+A.e(this.a)+", "+A.e(this.b)+")"},
t(a,b){if(b==null)return!1
return b instanceof A.S&&this.a===b.a&&this.b===b.b},
gj(a){return A.el(B.c.gj(this.a),B.c.gj(this.b),0)}}
A.bY.prototype={
gb2(a){return this.$ti.c.a(this.a+this.c)},
gaT(a){return this.$ti.c.a(this.b+this.d)},
h(a){var s=this
return"Rectangle ("+s.a+", "+s.b+") "+s.c+" x "+s.d},
t(a,b){var s,r,q,p,o=this
if(b==null)return!1
if(t.q.b(b)){s=o.a
r=J.a8(b)
if(s===r.ga1(b)){q=o.b
if(q===r.ga3(b)){p=o.$ti.c
s=p.a(s+o.c)===r.gb2(b)&&p.a(q+o.d)===r.gaT(b)}else s=!1}else s=!1}else s=!1
return s},
gj(a){var s=this,r=s.a,q=s.b,p=s.$ti.c
return A.em(B.a.gj(r),B.a.gj(q),B.a.gj(p.a(r+s.c)),B.a.gj(p.a(q+s.d)),0)}}
A.H.prototype={
ga1(a){return this.a},
ga3(a){return this.b},
ga4(a){return this.c},
ga0(a){return this.d}}
A.b.prototype={
gL(a){return new A.bd(a,new A.bM(a))},
sL(a,b){this.aH(a)
new A.bd(a,new A.bM(a)).ai(0,b)},
gar(a){return new A.q(a,"blur",!1,t.E)},
gaX(a){return new A.q(a,"click",!1,t.R)},
gau(a){return new A.q(a,"focus",!1,t.E)},
gaY(a){return new A.q(a,"keydown",!1,t.L)}}
A.as.prototype={
gj(a){var s=this.a,r=this.b
return A.aE(new A.y(s,r).$s,s,r,B.h)},
t(a,b){var s,r,q,p
if(b==null)return!1
if(b instanceof A.as){s=b.a
r=b.b
q=this.a
p=this.b
p=A.aE(new A.y(s,r).$s,s,r,B.h)===A.aE(new A.y(q,p).$s,q,p,B.h)
s=p}else s=!1
return s},
h(a){var s=this
return"("+s.a+" "+s.b+") => '"+s.c+"' "+s.d}}
A.R.prototype={}
A.ai.prototype={
h(a){var s=this
return"               row: "+s.a+"\n            column: "+s.b+"\n         character: '"+s.c+"'\n    characterColor: "+s.d+"\n\n          pixelRow: "+s.e+"\n       pixelColumn: "+s.f+"\n         pixelIsOn: "+s.r+"\n    "}}
A.ak.prototype={
sZ(a){var s,r,q,p=this
if(a<0){s=p.d=a
for(r=p.b,q=p.a;s<0;){s+=r
p.d=s
p.c=B.a.i(p.c-1,q)}}else{s=p.b
p.c=B.a.i(p.c+B.a.E(a,s),p.a)
p.d=B.a.i(a,s)}},
gu(a){return this.c*this.b+this.d},
su(a,b){var s=this,r=s.b
s.c=B.a.i(B.a.E(b,r),s.a)
s.d=B.a.i(b,r)}}
A.B.prototype={
T(){return"Mode."+this.b}}
A.by.prototype={
ba(a,b,c,d,e,f,g){var s,r=this,q="fit-content",p=document
A.W(p,"focus",new A.cn(r),!1)
A.W(p,"blur",new A.co(r),!1)
p=r.r
p.tabIndex=-1
s=p.style
s.display="block"
s=p.style
s.outline="none"
p.getContext("2d").imageSmoothingEnabled=!1
A.W(p,"focus",new A.cp(r),!1)
A.W(p,"blur",new A.cq(r),!1)
s=b.style
s.display="flex"
s=b.style
B.i.af(s,B.i.a7(s,"align-items"),"flex-start","")
s=b.style
s.padding="0"
s=b.style
s.margin="0"
s=b.style
s.width=q
s=b.style
s.height=q
s=b.style
s.background="gray"
J.fn(b,[p])
r.F(0)},
W(a,b){return new A.y(B.a.i(a,this.a),B.a.i(b,this.b))},
aG(){var s,r=this.w,q=r.getContext("2d")
q.save()
q.beginPath()
s=r.width
s.toString
r=r.height
r.toString
q.clearRect(0,0,s,r)
q.restore()
return q},
aI(){var s=this.r.getContext("2d")
s.save()
s.beginPath()
s.drawImage(this.w,0,0)
s.restore()
return s},
H(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=a<0||a>=k.a||b<0||b>=k.b
if(j)return
s=k.W(a,b)
j=s.a
r=s.b
q=A.dH(r)
p=q.a
o=B.a.O(1,q.b)
n=k.x[j]
n[p]=(n[p]|o)>>>0
n[p]=(n[p]^o)>>>0
n=c.getContext("2d")
n.save()
n.beginPath()
n.fillStyle=k.f
m=k.c
l=k.d
n.fillRect(r*m,j*l,m,l)
n.restore()},
I(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=this,j=a<0||a>=k.a||b<0||b>=k.b
if(j)return
s=k.W(a,b)
j=s.a
r=s.b
q=A.dH(r)
p=q.a
o=B.a.O(1,q.b)
n=k.x[j]
n[p]=(n[p]|o)>>>0
n=d.getContext("2d")
n.save()
n.beginPath()
n.fillStyle=c
m=k.c
l=k.d
n.fillRect(r*m,j*l,m,l)
n.restore()},
b_(a,b){var s=this.W(b,a),r=A.dH(s.b),q=B.a.O(1,r.b)
return(this.x[s.a][r.a]&q)>>>0>0},
aU(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
if(b==null)b=A.dF(0,0,g.b,g.a,t.S)
g.aG()
s=b.a
if(s===0&&b.b===0&&b.c===g.b&&b.d===g.a){for(s=g.x,r=s.length,q=0;q<r;++q)for(p=0;o=s[q],p<o.length;++p)o[p]=0
s=g.w
r=s.getContext("2d")
r.save()
r.fillStyle=g.f
o=s.width
o.toString
s=s.height
s.toString
r.fillRect(0,0,o,s)
r.restore()}else{r=b.b
o=g.a
n=B.a.i(r,o)
m=g.b
l=B.a.i(s,m)
k=Math.abs(b.d)
j=Math.min(r+k,o)
i=Math.min(s+k,m)
for(s=g.w,q=n;q<j;++q){h=B.a.i(q,o)
for(p=l;p<i;++p)g.H(h,B.a.i(p,m),s,!1)}}g.aI()},
F(a){return this.aU(a,null)},
bo(a,b,c,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
d.aG()
s=d.W(a,b)
r=s.a
q=s.b
p=B.a.bq(1,a1)-1
for(o=a1-1,n=d.w,m=0;m<8;++m){l=c[m]
k=l&p
l=[]
for(j=r+m,i=0;i<a1;++i){h=d.b_(q+i,j)?1:0
l.push(B.a.O(h,o-i))}g=B.e.bv(l,0,new A.cm())
switch(a2){case B.x:for(i=0;i<a1;++i){l=q+i
if((B.a.B(k,o-i)&1)>0)d.I(j,l,a0,n,!1)
else d.H(j,l,n,!1)}break
case B.dR:for(i=0;i<a1;++i){l=q+i
if((B.a.B(k,o-i)&1)>0)d.H(j,l,n,!1)
else d.I(j,l,a0,n,!1)}break
case B.dT:for(i=0;i<a1;++i){f=o-i
if((B.a.B(k,f)&1)>0&&(B.a.b7(g,f)&1)===0)d.I(j,q+i,a0,n,!1)}break
case B.dS:for(i=0;i<a1;++i)if((B.a.B(k,o-i)&1)>0)d.I(j,q+i,a0,n,!1)
break
case B.dU:for(e=k&g,i=0;i<a1;++i)if((B.a.B(e,o-i)&1)>0)d.I(j,q+i,a0,n,!1)
break
case B.dV:for(e=k&g,i=0;i<a1;++i)if((B.a.B(e,o-i)&1)>0)d.H(j,q+i,n,!1)
break
case B.dW:for(e=k&g,i=0;i<a1;++i)if((B.a.B(e,o-i)&1)===0)d.H(j,q+i,n,!1)
break
case B.dX:for(e=k&g,i=0;i<a1;++i){l=q+i
if((B.a.B(e,o-i)&1)===0)d.H(j,l,n,!1)
else d.I(j,l,a0,n,!1)}break}}d.aI()},
b0(a,b,c){this.bo(c.a,c.b,b,a,8,B.x,!0,!1,!1)},
M(a){var s=this.r,r=s.style
B.i.af(r,B.i.a7(r,"opacity"),"1.0","")
s.focus()},
K(a){var s=this.r,r=s.style
B.i.af(r,B.i.a7(r,"opacity"),"0.5","")
s.blur()}}
A.cn.prototype={
$1(a){this.a.y=!0},
$S:1}
A.co.prototype={
$1(a){this.a.y=!1},
$S:1}
A.cp.prototype={
$1(a){this.a.M(0)},
$S:1}
A.cq.prototype={
$1(a){this.a.K(0)},
$S:1}
A.cm.prototype={
$2(a,b){return(a|b)>>>0},
$S:18}
A.am.prototype={
T(){return"State."+this.b}}
A.aI.prototype={
bc(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,a0,a1){var s,r,q=this,p=q.f
p.tabIndex=-1
s=J.a8(p)
r=s.gau(p)
A.W(r.a,r.b,new A.cz(q),!1)
r=s.gar(p)
A.W(r.a,r.b,new A.cA(q),!1)
r=s.gaY(p)
A.W(r.a,r.b,new A.cB(q,l,new A.cF(),new A.cE(q)),!1)
p=s.gaX(p)
A.W(p.a,p.b,new A.cC(q,new A.cG(q),o),!1)
A.en(A.ea(300),new A.cD(q))
q.K(0)
q.F(0)},
gam(a){var s=this.w
return s.gam(s)},
gaj(a){var s=this.w
return s.gaj(s)},
ah(a,b){return new A.y(B.a.i(a,this.a),B.a.i(b,this.b))},
aK(){var s=this,r=s.x
s.CW.Y(0,new A.as(r.c,r.d," ","white"))
s.X()
s.cy=!1},
X(){var s,r,q,p,o,n,m,l,k,j,i,h=this
for(s=h.CW,r=A.et(s,s.r),q=h.w,p=h.cx,o=8+h.c,n=A.N(r).c;r.l();){m=r.d
if(m==null)m=n.a(m)
l=m.a
k=m.b
if(p.al(m.c)){j=p.p(0,m.c)
j.toString
i=j}else i=$.f8()
q.b0(m.d,i,new A.y(l*o,k*8))}if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.aL()}},
aC(a,b){var s=this.ah(b,a)
return this.ch[s.a][s.b].c},
bD(){var s=this.x
s.sZ(0)
s.c=B.a.i(s.c+1,s.a)},
aw(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=this,i=e==null?j.x.c:e,h=j.ah(i,c==null?j.x.d:c)
i=j.x
i.c=B.a.i(h.a,i.a)
i.sZ(h.b)
if(b==null)b="white"
for(s=a.split(""),r=s.length,q=j.ch,p=j.CW,o=0;o<r;++o){n=s[o]
m=i.c
l=i.d
k=q[m][l]
k.c=n
k.d=b
p.Y(0,k)
i.sZ(i.d+1)}j.X()
if(d)j.bD()},
G(a,b,c,d){return this.aw(a,b,c,!0,d)},
av(a,b,c){return this.aw(a,null,b,!0,c)},
aZ(a,b){return this.aw(a,null,null,b,null)},
F(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=t.S,f=A.dF(0,0,h.b,h.a,g)
for(s=f.b,r=f.d,q=f.$ti.c,p=q.a(s+r),o=f.a,n=f.c,m=o+n,l=h.ch,k=s;k<p;++k)for(q.a(m),j=o;j<m;++j){i=l[k][j]
i.c=" "
i.d="white"}q=8+h.c
h.w.aU(0,A.dF(o*8,s*q,n*8,r*q,g))
g=h.x
g.c=B.a.i(s,g.a)
g.sZ(o)},
M(a){return this.gam(this).$0()},
K(a){return this.gaj(this).$0()}}
A.cG.prototype={
$1(a){var s=this.a,r=s.w,q=J.fl(a),p=Math.max(Math.min(B.c.E(q.b-1,r.d),r.a-1),0),o=Math.max(Math.min(B.c.E(q.a-1,r.c),r.b-1),0),n=B.a.E(p,8+s.c),m=B.a.v(o,8),l=s.aC(m,n),k=s.ah(n,m)
return new A.ai(n,m,l,s.ch[k.a][k.b].d,p,o,r.b_(o,p))},
$S:19}
A.cF.prototype={
$1(a){var s=a.keyCode
a.key
return new A.R(s)},
$S:20}
A.cE.prototype={
$0(){var s,r,q,p,o=this.a,n=o.a,m=o.b,l=new A.ak(n,m),k=o.y
l.su(0,k.gu(k))
k=[]
for(s=o.z,r=s.b;q=l.c,p=l.d,q*m+p<s.c*r+s.d;q=l.c*m+l.d+1,l.c=B.a.i(B.a.E(q,m),n),l.d=B.a.i(q,m))k.push(o.aC(p,q))
return B.e.bz(k,"")},
$S:21}
A.cz.prototype={
$1(a){this.a.w.M(0)},
$S:1}
A.cA.prototype={
$1(a){this.a.w.K(0)},
$S:1}
A.cB.prototype={
$1(a){var s,r,q,p,o
a.preventDefault()
s=this.a
switch(s.ay){case B.z:this.b.$2(s,this.c.$1(a))
break
case B.dY:break
case B.A:s.aK()
$label0$1:{r=a.keyCode
if(13===r)break $label0$1
if(8===r){q=s.x
p=s.y
if(q.gu(q)>p.gu(p)){q.su(0,q.gu(q)-1)
s.aZ(" ",!1)
q.su(0,q.gu(q)-1)}break $label0$1}q=a.key
if(q!=null){if(q.length===1){p=s.x
o=s.z
o=p.gu(p)<o.gu(o)
p=o}else p=!1
if(p)s.aZ(q,!1)}}break
case B.dZ:break}},
$S:22}
A.cC.prototype={
$1(a){a.preventDefault()},
$S:23}
A.cD.prototype={
$1(a){var s,r,q,p=this.a,o=p.w
if(o.y&&document.activeElement===o.r&&p.ay===B.A)if(p.cy)p.aK()
else{s=p.x
r=s.c
s=s.d
q=$.f7()
o.b0("white",q,new A.y(r*(8+p.c),s*8))
p.cy=!0}},
$S:5}
A.K.prototype={
T(){return"Value."+this.b}}
A.af.prototype={
T(){return"GameState."+this.b}}
A.cs.prototype={
bb(a,b,c){var s=this,r=A.fI(s.b,c,!0,0,s.a+1,!1,new A.ct(s))
s.e!==$&&A.ib()
s.e=r
A.en(A.ea(100),new A.cu(s))
r.M(0)},
b6(){var s,r,q,p,o=this
switch(o.ay){case B.o:o.a2(0,["Snake!","","Press any key to start!"])
o.ay=B.n
break
case B.q:s=o.e
s===$&&A.o()
r=o.f
s.G("#","red",o.r,r)
o.a2(0,[" Game Over! ",""," Press any key to "," play again! "])
o.ay=B.n
break
case B.p:s=o.c
if(s.length!==0){q=B.e.gaV(s)
B.e.bH(s,q)
s=q.a
if(s===o.y&&q.b===o.z)o.a_()
else{r=o.e
r===$&&A.o()
r.av(" ",q.b,s)}}s=o.ax
s===$&&A.o()
o.at=s
r=o.d
r[o.f][o.r]=s
s=o.ch
if(s>0)o.ch=s-1
else o.b3(!1)
o.bx()
s=o.f
r=r[s]
p=o.r
r[p]=o.at
r=o.e
r===$&&A.o()
r.G("#","lightgreen",p,s)
break
case B.n:break}},
b3(a){var s=this,r=s.w,q=s.d[r],p=s.x,o=q[p]
q[p]=B.d
q=s.e
if(a){q===$&&A.o()
q.G("+","red",p,r)
s.c.push(new A.S(s.w,s.x,t.D))}else{q===$&&A.o()
q.av(" ",p,r)}$label0$0:{if(B.j===o){s.w=B.a.i(s.w-1,s.a)
break $label0$0}if(B.k===o){s.w=B.a.i(s.w+1,s.a)
break $label0$0}if(B.l===o){s.x=B.a.i(s.x-1,s.b)
break $label0$0}if(B.m===o){s.x=B.a.i(s.x+1,s.b)
break $label0$0}break $label0$0}},
bx(){var s,r,q,p,o=this
$label0$0:{s=o.at
s===$&&A.o()
if(B.j===s){o.f=B.a.i(o.f-1,o.a)
break $label0$0}if(B.k===s){o.f=B.a.i(o.f+1,o.a)
break $label0$0}if(B.l===s){o.r=B.a.i(o.r-1,o.b)
break $label0$0}if(B.m===s){o.r=B.a.i(o.r+1,o.b)
break $label0$0}break $label0$0}$label1$1:{r=o.d[o.f][o.r]
if(B.t===r){s=o.cx
q=o.as
if(s){o.as=q+30
for(p=0;p<5;++p)o.b3(!0)}else{s=o.Q
o.as=q+(s<10?s:20);++o.ch}o.aB()
break $label1$1}if(B.u===r){o.ch+=3
break $label1$1}if(B.d===r)break $label1$1
o.ay=B.q}},
a2(a,b){return this.bR(0,b)},
bR(a,b){var s=0,r=A.hx(t.z),q=this,p,o,n,m,l,k
var $async$a2=A.hI(function(c,d){if(c===1)return A.hb(d,r)
while(true)switch(s){case 0:l=b.length
k=B.a.v(q.a-l,2)
for(p=q.b,o=0;o<b.length;b.length===l||(0,A.dt)(b),++o){n=b[o]
m=q.e
m===$&&A.o()
m.G(n,"white",B.a.v(p-n.length,2),k);++k}return A.hc(null,r)}})
return A.hd($async$a2,r)},
bC(){var s,r,q,p,o=this,n=o.a,m=n/2|0
o.f=m
s=o.b
r=s/2|0
o.r=r
o.w=m
o.x=r
o.CW=o.as=0
o.cx=!1
for(m=o.d,q=0;q<n;++q)for(p=0;p<s;++p)m[q][p]=B.d
n=[B.j,B.k,B.l,B.m][$.dv().N(4)]
o.ax=o.at=n
m[o.f][o.r]=n
o.aB()
o.ay=B.p},
aQ(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.a,d=f.b,c=f.d
do{s=$.dv()
r=s.N(e)
q=s.N(d)}while(c[r][q]!==B.d&&Math.abs(r-f.f)+Math.abs(q-f.r)<10)
for(s=[[-1,0],[1,0],[0,0],[0,-1],[0,1]],p=0;p<5;++p){o=s[p]
n=B.c.i(r+B.e.gaV(o),e)
m=B.c.i(q+B.e.gbA(o),d)
l=c[n]
if(l[m]===B.d)if(n===r||m===q){l[m]=B.u
l=f.e
l===$&&A.o()
k=B.a.i(n,l.a)
j=B.a.i(m,l.b)
i=l.ch
h=i[k][j]
h.c="x"
g=l.CW
g.Y(0,h)
l.X()
k=i[k][j]
k.d="red"
g.Y(0,k)
l.X()}}},
a_(){var s,r=this,q=r.cx,p=r.e
if(q){p===$&&A.o()
q=r.y
p.G("P","gold",r.z,q)}else{p===$&&A.o()
q=r.Q
q=q<10?""+q:"o"
s=r.y
p.G(q,"gold",r.z,s)}},
aB(){var s,r,q=this,p="Score: "+q.as,o=q.b,n=o-p.length,m=B.a.v(n,2),l=q.e
l===$&&A.o()
s=q.a
l.G(B.f.a5(" ",m)+p+B.f.a5(" ",n-m),"white",0,s)
n=q.d
do{l=$.dv()
q.y=l.N(s)
l=q.z=l.N(o)}while(r=n[q.y],r[l]!==B.d)
r[l]=B.t
if(++q.CW%10===0){q.cx=!0
q.Q=3
q.a_()}else{q.cx=!1
q.Q=11
q.a_()}if(B.a.i(q.CW,13)===0)q.aQ()}}
A.ct.prototype={
$2(a,b){var s,r,q,p=this.a,o=new A.cv(p)
$label0$0:{s=p.ay
if(B.q===s||B.o===s)break $label0$0
if(B.n===s){r=p.e
r===$&&A.o()
r.F(0)
p.bC()
break $label0$0}if(B.p===s){switch(b.a){case 38:r=p.ax
r===$&&A.o()
if(r!==B.k&&r!==B.j&&o.$2(p.f-1,p.r)){p.ax=B.j;--p.Q}break
case 40:r=p.ax
r===$&&A.o()
if(r!==B.j&&r!==B.k&&o.$2(p.f+1,p.r)){p.ax=B.k;--p.Q}break
case 37:r=p.ax
r===$&&A.o()
if(r!==B.m&&r!==B.l&&o.$2(p.f,p.r-1)){p.ax=B.l;--p.Q}break
case 39:r=p.ax
r===$&&A.o()
if(r!==B.l&&r!==B.m&&o.$2(p.f,p.r+1)){p.ax=B.m;--p.Q}break}if(p.Q===0){p.ch=p.cx?0:1
r=p.e
r===$&&A.o()
q=p.y
r.av(" ",p.z,q)
p.d[p.y][p.z]=B.d
if(!p.cx)p.aQ()
p.aB()}else p.a_()
break $label0$0}}},
$S:24}
A.cv.prototype={
$2(a,b){var s=this.a
return B.e.bt([B.t,B.u,B.d],s.d[B.a.i(a,s.a)][B.a.i(b,s.b)])},
$S:25}
A.cu.prototype={
$1(a){var s=this.a,r=s.e
r===$&&A.o()
r=r.w
if(r.y&&document.activeElement===r.r)s.b6()},
$S:5};(function aliases(){var s=J.ax.prototype
s.b8=s.h
s=J.a3.prototype
s.b9=s.h})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._instance_0i
s(A,"hK","fK",3)
s(A,"hL","fL",3)
s(A,"hM","fM",3)
r(A,"eS","hD",0)
var p
q(p=A.by.prototype,"gam","M",0)
q(p,"gaj","K",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.i,null)
q(A.i,[A.dB,J.ax,J.ab,A.h,A.cr,A.bp,A.bj,A.bs,A.bH,A.be,A.ao,A.bb,A.cI,A.ck,A.au,A.aR,A.a1,A.bq,A.ch,A.w,A.bR,A.c1,A.aS,A.bI,A.b7,A.bL,A.an,A.l,A.bK,A.aH,A.c_,A.de,A.bA,A.d6,A.aO,A.a4,A.bc,A.cQ,A.bv,A.aG,A.cS,A.p,A.c0,A.bC,A.cb,A.dy,A.bQ,A.aw,A.av,A.cP,A.d4,A.S,A.bY,A.as,A.R,A.ai,A.ak,A.by,A.aI,A.cs])
q(J.ax,[J.bk,J.az,J.v,J.aA,J.ag])
q(J.v,[J.a3,J.F,A.bt,A.ad,A.bN,A.cc,A.at,A.a,A.bS,A.bV])
q(J.a3,[J.bw,J.aJ,J.G])
r(J.cg,J.F)
q(J.aA,[J.ay,J.bl])
q(A.h,[A.ah,A.I,A.bo,A.bE,A.bO,A.bx,A.bP,A.b5,A.E,A.bF,A.bD,A.bB,A.b9])
q(A.bj,[A.br,A.bG])
r(A.bX,A.ao)
r(A.y,A.bX)
r(A.bg,A.bb)
r(A.aD,A.I)
q(A.a1,[A.c9,A.ca,A.cy,A.dn,A.dq,A.cL,A.cK,A.df,A.cX,A.d3,A.cx,A.da,A.cR,A.ce,A.cf,A.cn,A.co,A.cp,A.cq,A.cG,A.cF,A.cz,A.cA,A.cB,A.cC,A.cD,A.cu])
q(A.cy,[A.cw,A.ar])
r(A.bn,A.bq)
r(A.bm,A.bn)
q(A.ca,[A.dp,A.dg,A.dj,A.cY,A.cj,A.cm,A.ct,A.cv])
r(A.aj,A.bt)
r(A.aP,A.aj)
r(A.aQ,A.aP)
r(A.aB,A.aQ)
r(A.bu,A.aB)
r(A.aT,A.bP)
q(A.c9,[A.cM,A.cN,A.dc,A.db,A.cT,A.d_,A.cZ,A.cW,A.cV,A.cU,A.d2,A.d1,A.d0,A.di,A.d9,A.cE])
r(A.bJ,A.bL)
r(A.d8,A.de)
r(A.bZ,A.bA)
r(A.bU,A.bZ)
q(A.E,[A.al,A.bh])
r(A.f,A.ad)
q(A.f,[A.n,A.z])
q(A.n,[A.c,A.b])
q(A.c,[A.b3,A.b4,A.b8,A.bf,A.bz])
r(A.ac,A.bN)
q(A.a4,[A.cO,A.bM,A.bd])
r(A.bT,A.bS)
r(A.a2,A.bT)
r(A.C,A.a)
q(A.C,[A.A,A.t])
r(A.bW,A.bV)
r(A.aC,A.bW)
r(A.aL,A.at)
r(A.aM,A.aH)
r(A.q,A.aM)
r(A.H,A.bY)
q(A.cQ,[A.B,A.am,A.K,A.af])
s(A.aP,A.a4)
s(A.aQ,A.be)
s(A.bN,A.cb)
s(A.bS,A.a4)
s(A.bT,A.aw)
s(A.bV,A.a4)
s(A.bW,A.aw)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{m:"int",hQ:"double",P:"num",U:"String",c4:"bool",p:"Null",ed:"List"},mangledNames:{},types:["~()","~(a)","p()","~(~())","p(@)","~(cH)","@(@)","@(@,U)","@(U)","p(~())","~(@)","p(@,T)","~(m,@)","p(i,T)","l<@>(@)","~(i?,i?)","c4(f)","n(f)","m(m,m)","ai(t)","R(A)","U()","~(A)","~(t)","~(aI,R)","c4(m,m)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.y&&a.b(c.a)&&b.b(c.b)}}
A.h6(v.typeUniverse,JSON.parse('{"bw":"a3","aJ":"a3","G":"a3","ie":"a","is":"a","id":"b","iu":"b","ig":"c","iy":"c","iv":"f","ir":"f","iz":"t","ii":"C","ih":"z","iE":"z","ix":"n","iw":"a2","bk":{"x":[]},"az":{"p":[],"x":[]},"aA":{"P":[]},"ay":{"m":[],"P":[],"x":[]},"bl":{"P":[],"x":[]},"ag":{"U":[],"x":[]},"ah":{"h":[]},"aD":{"I":[],"h":[]},"bo":{"h":[]},"bE":{"h":[]},"aR":{"T":[]},"bO":{"h":[]},"bx":{"h":[]},"aj":{"Q":["1"]},"aB":{"Q":["m"]},"bu":{"Q":["m"],"x":[]},"bP":{"h":[]},"aT":{"I":[],"h":[]},"l":{"ae":["1"]},"aS":{"cH":[]},"b7":{"h":[]},"m":{"P":[]},"b5":{"h":[]},"I":{"h":[]},"E":{"h":[]},"al":{"h":[]},"bh":{"h":[]},"bF":{"h":[]},"bD":{"h":[]},"bB":{"h":[]},"b9":{"h":[]},"bv":{"h":[]},"aG":{"h":[]},"c0":{"T":[]},"n":{"f":[]},"A":{"a":[]},"t":{"a":[]},"c":{"n":[],"f":[]},"b3":{"n":[],"f":[]},"b4":{"n":[],"f":[]},"b8":{"n":[],"f":[]},"z":{"f":[]},"at":{"H":["P"]},"bf":{"n":[],"f":[]},"a2":{"Q":["f"]},"aC":{"Q":["f"]},"bz":{"n":[],"f":[]},"C":{"a":[]},"aL":{"H":["P"]},"aM":{"aH":["1"]},"q":{"aM":["1"],"aH":["1"]},"H":{"bY":["1"]},"b":{"n":[],"f":[]}}'))
A.h5(v.typeUniverse,JSON.parse('{"F":1,"cg":1,"ab":1,"bp":1,"br":2,"bs":2,"bG":1,"bH":1,"be":1,"bb":2,"bg":2,"bn":2,"bm":2,"aj":1,"bL":1,"c_":1,"bU":1,"aO":1,"a4":1,"bq":2,"bA":1,"bZ":1,"ed":1,"bj":1,"bQ":1,"aw":1,"av":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.hT
return{h:s("n"),Q:s("h"),B:s("a"),Z:s("it"),b:s("F<@>"),T:s("az"),g:s("G"),p:s("Q<@>"),U:s("R"),m:s("ai"),P:s("p"),K:s("i"),D:s("S<m>"),H:s("S<P>"),I:s("iA"),F:s("+()"),q:s("H<P>"),l:s("T"),N:s("U"),G:s("cH"),k:s("x"),c:s("I"),o:s("aJ"),E:s("q<a>"),L:s("q<A>"),R:s("q<t>"),d:s("l<@>"),a:s("l<m>"),y:s("c4"),i:s("hQ"),z:s("@"),v:s("@(i)"),C:s("@(i,T)"),S:s("m"),A:s("0&*"),_:s("i*"),O:s("ae<p>?"),X:s("i?"),n:s("P")}})();(function constants(){var s=hunkHelpers.makeConstList
B.i=A.ac.prototype
B.K=J.ax.prototype
B.e=J.F.prototype
B.a=J.ay.prototype
B.c=J.aA.prototype
B.f=J.ag.prototype
B.L=J.G.prototype
B.M=J.v.prototype
B.y=J.bw.prototype
B.r=J.aJ.prototype
B.v=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.B=function() {
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
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
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
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.G=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.C=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.D=function(hooks) {
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
B.F=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
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
B.E=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
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
B.w=function(hooks) { return hooks; }

B.H=new A.bv()
B.h=new A.cr()
B.I=new A.d4()
B.b=new A.d8()
B.J=new A.c0()
B.o=new A.af("titleScreen")
B.n=new A.af("wait")
B.p=new A.af("play")
B.q=new A.af("gameOver")
B.aa=s([126,129,165,129,189,153,129,126])
B.U=s([126,255,219,255,195,231,255,126])
B.ab=s([108,254,254,254,124,56,16,0])
B.ac=s([16,56,124,254,124,56,16,0])
B.bY=s([56,124,56,254,254,124,56,124])
B.cy=s([16,16,56,124,254,124,56,124])
B.cJ=s([0,0,24,60,60,24,0,0])
B.dO=s([255,255,231,195,195,231,255,255])
B.cU=s([0,60,102,66,66,102,60,0])
B.dN=s([255,195,153,189,189,153,195,255])
B.d4=s([15,7,15,125,204,204,204,120])
B.df=s([60,102,102,102,60,24,126,24])
B.dr=s([63,51,63,48,48,112,240,224])
B.dC=s([127,99,127,99,99,103,230,192])
B.a5=s([153,90,60,231,231,60,90,153])
B.ad=s([128,224,248,254,248,224,128,0])
B.ao=s([2,14,62,254,62,14,2,0])
B.az=s([24,60,126,24,24,126,60,24])
B.aK=s([102,102,102,102,102,0,102,0])
B.aV=s([127,219,219,123,27,27,27,0])
B.b5=s([62,99,56,108,108,56,204,120])
B.bg=s([0,0,0,0,126,126,126,0])
B.a8=s([24,60,126,24,126,60,24,255])
B.br=s([24,60,126,24,24,24,24,0])
B.bC=s([24,24,24,24,126,60,24,0])
B.bN=s([0,24,12,254,12,24,0,0])
B.bZ=s([0,48,96,254,96,48,0,0])
B.c9=s([0,0,192,192,192,254,0,0])
B.X=s([0,36,102,255,102,36,0,0])
B.a6=s([0,24,60,126,255,255,0,0])
B.V=s([0,255,255,126,60,24,0,0])
B.ck=s([0,0,0,0,0,0,0,0])
B.cr=s([48,120,120,48,48,0,48,0])
B.cs=s([108,108,108,0,0,0,0,0])
B.ct=s([108,108,254,108,254,108,108,0])
B.cu=s([48,124,192,120,12,248,48,0])
B.cv=s([0,198,204,24,48,102,198,0])
B.cw=s([56,108,56,118,220,204,118,0])
B.cx=s([96,96,192,0,0,0,0,0])
B.cz=s([24,48,96,96,96,48,24,0])
B.cA=s([96,48,24,24,24,48,96,0])
B.Y=s([0,102,60,255,60,102,0,0])
B.cB=s([0,48,48,252,48,48,0,0])
B.cC=s([0,0,0,0,0,48,48,96])
B.cD=s([0,0,0,252,0,0,0,0])
B.cE=s([0,0,0,0,0,48,48,0])
B.cF=s([6,12,24,48,96,192,128,0])
B.cG=s([124,198,206,222,246,230,124,0])
B.cH=s([48,112,48,48,48,48,252,0])
B.cI=s([120,204,12,56,96,204,252,0])
B.cK=s([120,204,12,56,12,204,120,0])
B.cL=s([28,60,108,204,254,12,30,0])
B.cM=s([252,192,248,12,12,204,120,0])
B.cN=s([56,96,192,248,204,204,120,0])
B.cO=s([252,204,12,24,48,48,48,0])
B.cP=s([120,204,204,120,204,204,120,0])
B.cQ=s([120,204,204,124,12,24,112,0])
B.cR=s([0,48,48,0,0,48,48,0])
B.cS=s([0,48,48,0,0,48,48,96])
B.cT=s([24,48,96,192,96,48,24,0])
B.cV=s([0,0,252,0,0,252,0,0])
B.cW=s([96,48,24,12,24,48,96,0])
B.cX=s([120,204,12,24,48,0,48,0])
B.cY=s([124,198,222,222,222,192,120,0])
B.cZ=s([48,120,204,204,252,204,204,0])
B.d_=s([252,102,102,124,102,102,252,0])
B.d0=s([60,102,192,192,192,102,60,0])
B.d1=s([248,108,102,102,102,108,248,0])
B.d2=s([254,98,104,120,104,98,254,0])
B.d3=s([254,98,104,120,104,96,240,0])
B.d5=s([60,102,192,192,206,102,62,0])
B.d6=s([204,204,204,252,204,204,204,0])
B.d7=s([120,48,48,48,48,48,120,0])
B.d8=s([30,12,12,12,204,204,120,0])
B.d9=s([230,102,108,120,108,102,230,0])
B.da=s([240,96,96,96,98,102,254,0])
B.db=s([198,238,254,254,214,198,198,0])
B.dc=s([198,230,246,222,206,198,198,0])
B.dd=s([56,108,198,198,198,108,56,0])
B.de=s([252,102,102,124,96,96,240,0])
B.dg=s([120,204,204,204,220,120,28,0])
B.dh=s([252,102,102,124,108,102,230,0])
B.di=s([120,204,224,112,28,204,120,0])
B.dj=s([252,180,48,48,48,48,120,0])
B.dk=s([204,204,204,204,204,204,252,0])
B.dl=s([204,204,204,204,204,120,48,0])
B.dm=s([198,198,198,214,254,238,198,0])
B.dn=s([198,198,108,56,56,108,198,0])
B.dp=s([204,204,204,120,48,48,120,0])
B.dq=s([254,198,140,24,50,102,254,0])
B.ds=s([120,96,96,96,96,96,120,0])
B.dt=s([192,96,48,24,12,6,2,0])
B.du=s([120,24,24,24,24,24,120,0])
B.dv=s([16,56,108,198,0,0,0,0])
B.a9=s([0,0,0,0,0,0,0,255])
B.dw=s([48,48,24,0,0,0,0,0])
B.dx=s([0,0,120,12,124,204,118,0])
B.dy=s([224,96,96,124,102,102,220,0])
B.dz=s([0,0,120,204,192,204,120,0])
B.dA=s([28,12,12,124,204,204,118,0])
B.dB=s([0,0,120,204,252,192,120,0])
B.dD=s([56,108,96,240,96,96,240,0])
B.dE=s([0,0,118,204,204,124,12,248])
B.dF=s([224,96,108,118,102,102,230,0])
B.dG=s([48,0,112,48,48,48,120,0])
B.dH=s([12,0,12,12,12,204,204,120])
B.dI=s([224,96,102,108,120,108,230,0])
B.dJ=s([112,48,48,48,48,48,120,0])
B.dK=s([0,0,204,254,254,214,198,0])
B.dL=s([0,0,248,204,204,204,204,0])
B.dM=s([0,0,120,204,204,204,120,0])
B.ae=s([0,0,220,102,102,124,96,240])
B.af=s([0,0,118,204,204,124,12,30])
B.ag=s([0,0,220,118,102,96,240,0])
B.ah=s([0,0,124,192,120,12,248,0])
B.ai=s([16,48,124,48,48,52,24,0])
B.aj=s([0,0,204,204,204,204,118,0])
B.ak=s([0,0,204,204,204,120,48,0])
B.al=s([0,0,198,214,254,254,108,0])
B.am=s([0,0,198,108,56,108,198,0])
B.an=s([0,0,204,204,204,124,12,248])
B.ap=s([0,0,252,152,48,100,252,0])
B.aq=s([28,48,48,224,48,48,28,0])
B.ar=s([24,24,24,0,24,24,24,0])
B.as=s([224,48,48,28,48,48,224,0])
B.at=s([118,220,0,0,0,0,0,0])
B.au=s([0,16,56,108,198,198,254,0])
B.av=s([120,204,192,204,120,24,12,120])
B.aw=s([0,204,0,204,204,204,126,0])
B.ax=s([28,0,120,204,252,192,120,0])
B.ay=s([126,195,60,6,62,102,63,0])
B.aA=s([204,0,120,12,124,204,126,0])
B.aB=s([224,0,120,12,124,204,126,0])
B.aC=s([48,48,120,12,124,204,126,0])
B.aD=s([0,0,120,192,192,120,12,56])
B.aE=s([126,195,60,102,126,96,60,0])
B.aF=s([204,0,120,204,252,192,120,0])
B.aG=s([224,0,120,204,252,192,120,0])
B.aH=s([204,0,112,48,48,48,120,0])
B.aI=s([124,198,56,24,24,24,60,0])
B.aJ=s([224,0,112,48,48,48,120,0])
B.aL=s([198,56,108,198,254,198,198,0])
B.aM=s([48,48,0,120,204,252,204,0])
B.aN=s([28,0,252,96,120,96,252,0])
B.aO=s([0,0,127,12,127,204,127,0])
B.aP=s([62,108,204,254,204,204,206,0])
B.aQ=s([120,204,0,120,204,204,120,0])
B.aR=s([0,204,0,120,204,204,120,0])
B.aS=s([0,224,0,120,204,204,120,0])
B.aT=s([120,204,0,204,204,204,126,0])
B.aU=s([0,224,0,204,204,204,126,0])
B.aW=s([0,204,0,204,204,124,12,248])
B.aX=s([195,24,60,102,102,60,24,0])
B.aY=s([204,0,204,204,204,204,120,0])
B.aZ=s([24,24,126,192,192,126,24,24])
B.b_=s([56,108,100,240,96,230,252,0])
B.b0=s([204,204,120,252,48,252,48,48])
B.b1=s([248,204,204,250,198,207,198,199])
B.b2=s([14,27,24,60,24,24,216,112])
B.b3=s([28,0,120,12,124,204,126,0])
B.b4=s([56,0,112,48,48,48,120,0])
B.b6=s([0,28,0,120,204,204,120,0])
B.b7=s([0,28,0,204,204,204,126,0])
B.b8=s([0,248,0,248,204,204,204,0])
B.b9=s([252,0,204,236,252,220,204,0])
B.ba=s([60,108,108,62,0,126,0,0])
B.bb=s([56,108,108,56,0,124,0,0])
B.bc=s([48,0,48,96,192,204,120,0])
B.bd=s([0,0,0,252,192,192,0,0])
B.be=s([0,0,0,252,12,12,0,0])
B.bf=s([195,198,204,222,51,102,204,15])
B.bh=s([195,198,204,219,55,111,207,3])
B.bi=s([24,24,0,24,24,24,24,0])
B.bj=s([0,51,102,204,102,51,0,0])
B.bk=s([0,204,102,51,102,204,0,0])
B.bl=s([34,136,34,136,34,136,34,136])
B.bm=s([85,170,85,170,85,170,85,170])
B.bn=s([219,119,219,238,219,119,219,238])
B.bo=s([24,24,24,24,24,24,24,24])
B.bp=s([24,24,24,24,248,24,24,24])
B.bq=s([24,24,248,24,248,24,24,24])
B.bs=s([54,54,54,54,246,54,54,54])
B.bt=s([0,0,0,0,254,54,54,54])
B.bu=s([0,0,248,24,248,24,24,24])
B.bv=s([54,54,246,6,246,54,54,54])
B.bw=s([54,54,54,54,54,54,54,54])
B.bx=s([0,0,254,6,246,54,54,54])
B.by=s([54,54,246,6,254,0,0,0])
B.bz=s([54,54,54,54,254,0,0,0])
B.bA=s([24,24,248,24,248,0,0,0])
B.bB=s([0,0,0,0,248,24,24,24])
B.bD=s([24,24,24,24,31,0,0,0])
B.N=s([24,24,24,24,255,0,0,0])
B.O=s([0,0,0,0,255,24,24,24])
B.bE=s([24,24,24,24,31,24,24,24])
B.P=s([0,0,0,0,255,0,0,0])
B.Q=s([24,24,24,24,255,24,24,24])
B.bF=s([24,24,31,24,31,24,24,24])
B.bG=s([54,54,54,54,55,54,54,54])
B.bH=s([54,54,55,48,63,0,0,0])
B.bI=s([0,0,63,48,55,54,54,54])
B.Z=s([54,54,247,0,255,0,0,0])
B.a_=s([0,0,255,0,247,54,54,54])
B.bJ=s([54,54,55,48,55,54,54,54])
B.a0=s([0,0,255,0,255,0,0,0])
B.a1=s([54,54,247,0,247,54,54,54])
B.a2=s([24,24,255,0,255,0,0,0])
B.R=s([54,54,54,54,255,0,0,0])
B.a3=s([0,0,255,0,255,24,24,24])
B.S=s([0,0,0,0,255,54,54,54])
B.bK=s([54,54,54,54,63,0,0,0])
B.bL=s([24,24,31,24,31,0,0,0])
B.bM=s([0,0,31,24,31,24,24,24])
B.bO=s([0,0,0,0,63,54,54,54])
B.T=s([54,54,54,54,255,54,54,54])
B.a4=s([24,24,255,24,255,24,24,24])
B.bP=s([24,24,24,24,248,0,0,0])
B.bQ=s([0,0,0,0,31,24,24,24])
B.dP=s([255,255,255,255,255,255,255,255])
B.a7=s([0,0,0,0,255,255,255,255])
B.bR=s([240,240,240,240,240,240,240,240])
B.bS=s([15,15,15,15,15,15,15,15])
B.W=s([255,255,255,255,0,0,0,0])
B.bT=s([0,0,118,220,200,220,118,0])
B.bU=s([0,120,204,248,204,248,192,192])
B.bV=s([0,252,204,192,192,192,192,0])
B.bW=s([0,254,108,108,108,108,108,0])
B.bX=s([252,204,96,48,96,204,252,0])
B.c_=s([0,0,126,216,216,216,112,0])
B.c0=s([0,102,102,102,102,124,96,192])
B.c1=s([0,118,220,24,24,24,24,0])
B.c2=s([252,48,120,204,204,120,48,252])
B.c3=s([56,108,198,254,198,108,56,0])
B.c4=s([56,108,198,198,108,108,238,0])
B.c5=s([28,48,24,124,204,204,120,0])
B.c6=s([0,0,126,219,219,126,0,0])
B.c7=s([6,12,126,219,219,126,96,192])
B.c8=s([56,96,192,248,192,96,56,0])
B.ca=s([120,204,204,204,204,204,204,0])
B.cb=s([0,252,0,252,0,252,0,0])
B.cc=s([48,48,252,48,48,0,252,0])
B.cd=s([96,48,24,48,96,0,252,0])
B.ce=s([24,48,96,48,24,0,252,0])
B.cf=s([14,27,27,24,24,24,24,24])
B.cg=s([24,24,24,24,24,216,216,112])
B.ch=s([48,48,0,252,0,48,48,0])
B.ci=s([0,118,220,0,118,220,0,0])
B.cj=s([56,108,108,56,0,0,0,0])
B.cl=s([0,0,0,24,24,0,0,0])
B.cm=s([0,0,0,0,24,0,0,0])
B.cn=s([15,12,12,12,236,108,60,28])
B.co=s([120,108,108,108,108,0,0,0])
B.cp=s([112,24,48,96,120,0,0,0])
B.cq=s([0,0,60,60,60,60,0,0])
B.dQ=new A.bg(["\u263a",B.aa,"\u263b",B.U,"\u2665",B.ab,"\u2666",B.ac,"\u2663",B.bY,"\u2660",B.cy,"\u2022",B.cJ,"\u25d8",B.dO,"\u25cb",B.cU,"\u25d9",B.dN,"\u2642",B.d4,"\u2640",B.df,"\u266a",B.dr,"\u266b",B.dC,"\u263c",B.a5,"\u25ba",B.ad,"\u25c4",B.ao,"\u2195",B.az,"\u203c",B.aK,"\xb6",B.aV,"\xa7",B.b5,"\u25ac",B.bg,"\u21a8",B.a8,"\u2191",B.br,"\u2193",B.bC,"\u2192",B.bN,"\u2190",B.bZ,"\u221f",B.c9,"\u2194",B.X,"\u25b2",B.a6,"\u25bc",B.V," ",B.ck,"!",B.cr,'"',B.cs,"#",B.ct,"$",B.cu,"%",B.cv,"&",B.cw,"'",B.cx,"(",B.cz,")",B.cA,"*",B.Y,"+",B.cB,",",B.cC,"-",B.cD,".",B.cE,"/",B.cF,"0",B.cG,"1",B.cH,"2",B.cI,"3",B.cK,"4",B.cL,"5",B.cM,"6",B.cN,"7",B.cO,"8",B.cP,"9",B.cQ,":",B.cR,";",B.cS,"<",B.cT,"=",B.cV,">",B.cW,"?",B.cX,"@",B.cY,"A",B.cZ,"B",B.d_,"C",B.d0,"D",B.d1,"E",B.d2,"F",B.d3,"G",B.d5,"H",B.d6,"I",B.d7,"J",B.d8,"K",B.d9,"L",B.da,"M",B.db,"N",B.dc,"O",B.dd,"P",B.de,"Q",B.dg,"R",B.dh,"S",B.di,"T",B.dj,"U",B.dk,"V",B.dl,"W",B.dm,"X",B.dn,"Y",B.dp,"Z",B.dq,"[",B.ds,"\\",B.dt,"]",B.du,"^",B.dv,"_",B.a9,"`",B.dw,"a",B.dx,"b",B.dy,"c",B.dz,"d",B.dA,"e",B.dB,"f",B.dD,"g",B.dE,"h",B.dF,"i",B.dG,"j",B.dH,"k",B.dI,"l",B.dJ,"m",B.dK,"n",B.dL,"o",B.dM,"p",B.ae,"q",B.af,"r",B.ag,"s",B.ah,"t",B.ai,"u",B.aj,"v",B.ak,"w",B.al,"x",B.am,"y",B.an,"z",B.ap,"{",B.aq,"|",B.ar,"}",B.as,"~",B.at,"\u2302",B.au,"\xc7",B.av,"\xfc",B.aw,"\xe9",B.ax,"\xe2",B.ay,"\xe4",B.aA,"\xe0",B.aB,"\xe5",B.aC,"\xe7",B.aD,"\xea",B.aE,"\xeb",B.aF,"\xe8",B.aG,"\xef",B.aH,"\xee",B.aI,"\xec",B.aJ,"\xc4",B.aL,"\xc5",B.aM,"\xc9",B.aN,"\xe6",B.aO,"\xc6",B.aP,"\xf4",B.aQ,"\xf6",B.aR,"\xf2",B.aS,"\xfb",B.aT,"\xf9",B.aU,"\xff",B.aW,"\xd6",B.aX,"\xdc",B.aY,"\xa2",B.aZ,"\xa3",B.b_,"\xa5",B.b0,"\u20a7",B.b1,"\u0192",B.b2,"\xe1",B.b3,"\xed",B.b4,"\xf3",B.b6,"\xfa",B.b7,"\xf1",B.b8,"\xd1",B.b9,"\xaa",B.ba,"\xba",B.bb,"\xbf",B.bc,"\u2310",B.bd,"\xac",B.be,"\xbd",B.bf,"\xbc",B.bh,"\xa1",B.bi,"\xab",B.bj,"\xbb",B.bk,"\u2591",B.bl,"\u2592",B.bm,"\u2593",B.bn,"\u2502",B.bo,"\u2524",B.bp,"\u2561",B.bq,"\u2562",B.bs,"\u2556",B.bt,"\u2555",B.bu,"\u2563",B.bv,"\u2551",B.bw,"\u2557",B.bx,"\u255d",B.by,"\u255c",B.bz,"\u255b",B.bA,"\u2510",B.bB,"\u2514",B.bD,"\u2534",B.N,"\u252c",B.O,"\u251c",B.bE,"\u2500",B.P,"\u253c",B.Q,"\u255e",B.bF,"\u255f",B.bG,"\u255a",B.bH,"\u2554",B.bI,"\u2569",B.Z,"\u2566",B.a_,"\u2560",B.bJ,"\u2550",B.a0,"\u256c",B.a1,"\u2567",B.a2,"\u2568",B.R,"\u2564",B.a3,"\u2565",B.S,"\u2559",B.bK,"\u2558",B.bL,"\u2552",B.bM,"\u2553",B.bO,"\u256b",B.T,"\u256a",B.a4,"\u2518",B.bP,"\u250c",B.bQ,"\u2588",B.dP,"\u2584",B.a7,"\u258c",B.bR,"\u2590",B.bS,"\u2580",B.W,"\u03b1",B.bT,"\xdf",B.bU,"\u0393",B.bV,"\u03c0",B.bW,"\u03a3",B.bX,"\u03c3",B.c_,"\xb5",B.c0,"\u03c4",B.c1,"\u03a6",B.c2,"\u0398",B.c3,"\u03a9",B.c4,"\u03b4",B.c5,"\u221e",B.c6,"\u03c6",B.c7,"\u03b5",B.c8,"\u2229",B.ca,"\u2261",B.cb,"\xb1",B.cc,"\u2265",B.cd,"\u2264",B.ce,"\u2320",B.cf,"\u2321",B.cg,"\xf7",B.ch,"\u2248",B.ci,"\xb0",B.cj,"\u2219",B.cl,"\xb7",B.cm,"\u221a",B.cn,"\u207f",B.co,"\xb2",B.cp,"\u25a0",B.cq])
B.x=new A.B("replace")
B.dR=new A.B("inverse")
B.dS=new A.B("over")
B.dT=new A.B("under")
B.dU=new A.B("stain")
B.dV=new A.B("delete")
B.dW=new A.B("maskDestination")
B.dX=new A.B("maskSource")
B.z=new A.am("ready")
B.dY=new A.am("awaitingKey")
B.A=new A.am("awaitingString")
B.dZ=new A.am("awaitingMouseClick")
B.e_=A.f_("i")
B.e0=A.f_("iP")
B.d=new A.K("nothing")
B.t=new A.K("apple")
B.j=new A.K("up")
B.k=new A.K("down")
B.l=new A.K("left")
B.m=new A.K("right")
B.u=new A.K("brick")})();(function staticFields(){$.d5=null
$.a9=[]
$.ef=null
$.e6=null
$.e5=null
$.eV=null
$.eR=null
$.eY=null
$.dl=null
$.dr=null
$.dV=null
$.d7=[]
$.ap=null
$.aY=null
$.aZ=null
$.dQ=!1
$.j=B.b})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"ik","f2",()=>A.hU("_$dart_dartClosure"))
s($,"iF","f9",()=>A.J(A.cJ({
toString:function(){return"$receiver$"}})))
s($,"iG","fa",()=>A.J(A.cJ({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"iH","fb",()=>A.J(A.cJ(null)))
s($,"iI","fc",()=>A.J(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"iL","ff",()=>A.J(A.cJ(void 0)))
s($,"iM","fg",()=>A.J(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"iK","fe",()=>A.J(A.ep(null)))
s($,"iJ","fd",()=>A.J(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"iO","fi",()=>A.J(A.ep(void 0)))
s($,"iN","fh",()=>A.J(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"iQ","e0",()=>A.fJ())
s($,"j6","du",()=>A.dY(B.e_))
s($,"ij","f1",()=>({}))
s($,"ip","e_",()=>B.f.ak(A.dx(),"Opera",0))
s($,"io","f5",()=>!$.e_()&&B.f.ak(A.dx(),"Trident/",0))
s($,"im","f4",()=>B.f.ak(A.dx(),"Firefox",0))
s($,"il","f3",()=>"-"+$.f6()+"-")
s($,"iq","f6",()=>{if($.f4())var r="moz"
else if($.f5())r="ms"
else r=$.e_()?"o":"webkit"
return r})
s($,"iD","f8",()=>A.ci(8,0,!1))
s($,"iC","f7",()=>A.ci(8,255,!1))
s($,"j9","dv",()=>B.I)})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasRenderingContext2D:J.v,DOMError:J.v,MediaError:J.v,Navigator:J.v,NavigatorConcurrentHardware:J.v,NavigatorUserMediaError:J.v,OverconstrainedError:J.v,PositionError:J.v,GeolocationPositionError:J.v,ArrayBufferView:A.bt,Uint32Array:A.bu,HTMLAudioElement:A.c,HTMLBRElement:A.c,HTMLBaseElement:A.c,HTMLButtonElement:A.c,HTMLCanvasElement:A.c,HTMLContentElement:A.c,HTMLDListElement:A.c,HTMLDataElement:A.c,HTMLDataListElement:A.c,HTMLDetailsElement:A.c,HTMLDialogElement:A.c,HTMLDivElement:A.c,HTMLEmbedElement:A.c,HTMLFieldSetElement:A.c,HTMLHRElement:A.c,HTMLHeadElement:A.c,HTMLHeadingElement:A.c,HTMLHtmlElement:A.c,HTMLIFrameElement:A.c,HTMLImageElement:A.c,HTMLInputElement:A.c,HTMLLIElement:A.c,HTMLLabelElement:A.c,HTMLLegendElement:A.c,HTMLLinkElement:A.c,HTMLMapElement:A.c,HTMLMediaElement:A.c,HTMLMenuElement:A.c,HTMLMetaElement:A.c,HTMLMeterElement:A.c,HTMLModElement:A.c,HTMLOListElement:A.c,HTMLObjectElement:A.c,HTMLOptGroupElement:A.c,HTMLOptionElement:A.c,HTMLOutputElement:A.c,HTMLParagraphElement:A.c,HTMLParamElement:A.c,HTMLPictureElement:A.c,HTMLPreElement:A.c,HTMLProgressElement:A.c,HTMLQuoteElement:A.c,HTMLScriptElement:A.c,HTMLShadowElement:A.c,HTMLSlotElement:A.c,HTMLSourceElement:A.c,HTMLSpanElement:A.c,HTMLStyleElement:A.c,HTMLTableCaptionElement:A.c,HTMLTableCellElement:A.c,HTMLTableDataCellElement:A.c,HTMLTableHeaderCellElement:A.c,HTMLTableColElement:A.c,HTMLTableElement:A.c,HTMLTableRowElement:A.c,HTMLTableSectionElement:A.c,HTMLTemplateElement:A.c,HTMLTextAreaElement:A.c,HTMLTimeElement:A.c,HTMLTitleElement:A.c,HTMLTrackElement:A.c,HTMLUListElement:A.c,HTMLUnknownElement:A.c,HTMLVideoElement:A.c,HTMLDirectoryElement:A.c,HTMLFontElement:A.c,HTMLFrameElement:A.c,HTMLFrameSetElement:A.c,HTMLMarqueeElement:A.c,HTMLElement:A.c,HTMLAnchorElement:A.b3,HTMLAreaElement:A.b4,HTMLBodyElement:A.b8,CDATASection:A.z,CharacterData:A.z,Comment:A.z,ProcessingInstruction:A.z,Text:A.z,CSSStyleDeclaration:A.ac,MSStyleCSSProperties:A.ac,CSS2Properties:A.ac,DOMException:A.cc,DOMRectReadOnly:A.at,MathMLElement:A.n,Element:A.n,AbortPaymentEvent:A.a,AnimationEvent:A.a,AnimationPlaybackEvent:A.a,ApplicationCacheErrorEvent:A.a,BackgroundFetchClickEvent:A.a,BackgroundFetchEvent:A.a,BackgroundFetchFailEvent:A.a,BackgroundFetchedEvent:A.a,BeforeInstallPromptEvent:A.a,BeforeUnloadEvent:A.a,BlobEvent:A.a,CanMakePaymentEvent:A.a,ClipboardEvent:A.a,CloseEvent:A.a,CustomEvent:A.a,DeviceMotionEvent:A.a,DeviceOrientationEvent:A.a,ErrorEvent:A.a,ExtendableEvent:A.a,ExtendableMessageEvent:A.a,FetchEvent:A.a,FontFaceSetLoadEvent:A.a,ForeignFetchEvent:A.a,GamepadEvent:A.a,HashChangeEvent:A.a,InstallEvent:A.a,MediaEncryptedEvent:A.a,MediaKeyMessageEvent:A.a,MediaQueryListEvent:A.a,MediaStreamEvent:A.a,MediaStreamTrackEvent:A.a,MessageEvent:A.a,MIDIConnectionEvent:A.a,MIDIMessageEvent:A.a,MutationEvent:A.a,NotificationEvent:A.a,PageTransitionEvent:A.a,PaymentRequestEvent:A.a,PaymentRequestUpdateEvent:A.a,PopStateEvent:A.a,PresentationConnectionAvailableEvent:A.a,PresentationConnectionCloseEvent:A.a,ProgressEvent:A.a,PromiseRejectionEvent:A.a,PushEvent:A.a,RTCDataChannelEvent:A.a,RTCDTMFToneChangeEvent:A.a,RTCPeerConnectionIceEvent:A.a,RTCTrackEvent:A.a,SecurityPolicyViolationEvent:A.a,SensorErrorEvent:A.a,SpeechRecognitionError:A.a,SpeechRecognitionEvent:A.a,SpeechSynthesisEvent:A.a,StorageEvent:A.a,SyncEvent:A.a,TrackEvent:A.a,TransitionEvent:A.a,WebKitTransitionEvent:A.a,VRDeviceEvent:A.a,VRDisplayEvent:A.a,VRSessionEvent:A.a,MojoInterfaceRequestEvent:A.a,ResourceProgressEvent:A.a,USBConnectionEvent:A.a,IDBVersionChangeEvent:A.a,AudioProcessingEvent:A.a,OfflineAudioCompletionEvent:A.a,WebGLContextEvent:A.a,Event:A.a,InputEvent:A.a,SubmitEvent:A.a,Window:A.ad,DOMWindow:A.ad,EventTarget:A.ad,HTMLFormElement:A.bf,HTMLCollection:A.a2,HTMLFormControlsCollection:A.a2,HTMLOptionsCollection:A.a2,KeyboardEvent:A.A,MouseEvent:A.t,DragEvent:A.t,PointerEvent:A.t,WheelEvent:A.t,Document:A.f,DocumentFragment:A.f,HTMLDocument:A.f,ShadowRoot:A.f,XMLDocument:A.f,Attr:A.f,DocumentType:A.f,Node:A.f,NodeList:A.aC,RadioNodeList:A.aC,HTMLSelectElement:A.bz,CompositionEvent:A.C,FocusEvent:A.C,TextEvent:A.C,TouchEvent:A.C,UIEvent:A.C,ClientRect:A.aL,DOMRect:A.aL,SVGAElement:A.b,SVGAnimateElement:A.b,SVGAnimateMotionElement:A.b,SVGAnimateTransformElement:A.b,SVGAnimationElement:A.b,SVGCircleElement:A.b,SVGClipPathElement:A.b,SVGDefsElement:A.b,SVGDescElement:A.b,SVGDiscardElement:A.b,SVGEllipseElement:A.b,SVGFEBlendElement:A.b,SVGFEColorMatrixElement:A.b,SVGFEComponentTransferElement:A.b,SVGFECompositeElement:A.b,SVGFEConvolveMatrixElement:A.b,SVGFEDiffuseLightingElement:A.b,SVGFEDisplacementMapElement:A.b,SVGFEDistantLightElement:A.b,SVGFEFloodElement:A.b,SVGFEFuncAElement:A.b,SVGFEFuncBElement:A.b,SVGFEFuncGElement:A.b,SVGFEFuncRElement:A.b,SVGFEGaussianBlurElement:A.b,SVGFEImageElement:A.b,SVGFEMergeElement:A.b,SVGFEMergeNodeElement:A.b,SVGFEMorphologyElement:A.b,SVGFEOffsetElement:A.b,SVGFEPointLightElement:A.b,SVGFESpecularLightingElement:A.b,SVGFESpotLightElement:A.b,SVGFETileElement:A.b,SVGFETurbulenceElement:A.b,SVGFilterElement:A.b,SVGForeignObjectElement:A.b,SVGGElement:A.b,SVGGeometryElement:A.b,SVGGraphicsElement:A.b,SVGImageElement:A.b,SVGLineElement:A.b,SVGLinearGradientElement:A.b,SVGMarkerElement:A.b,SVGMaskElement:A.b,SVGMetadataElement:A.b,SVGPathElement:A.b,SVGPatternElement:A.b,SVGPolygonElement:A.b,SVGPolylineElement:A.b,SVGRadialGradientElement:A.b,SVGRectElement:A.b,SVGScriptElement:A.b,SVGSetElement:A.b,SVGStopElement:A.b,SVGStyleElement:A.b,SVGElement:A.b,SVGSVGElement:A.b,SVGSwitchElement:A.b,SVGSymbolElement:A.b,SVGTSpanElement:A.b,SVGTextContentElement:A.b,SVGTextElement:A.b,SVGTextPathElement:A.b,SVGTextPositioningElement:A.b,SVGTitleElement:A.b,SVGUseElement:A.b,SVGViewElement:A.b,SVGGradientElement:A.b,SVGComponentTransferFunctionElement:A.b,SVGFEDropShadowElement:A.b,SVGMPathElement:A.b})
hunkHelpers.setOrUpdateLeafTags({CanvasRenderingContext2D:true,DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,ArrayBufferView:false,Uint32Array:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DOMException:true,DOMRectReadOnly:false,MathMLElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,Window:true,DOMWindow:true,EventTarget:false,HTMLFormElement:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,KeyboardEvent:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,HTMLSelectElement:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,ClientRect:true,DOMRect:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true})
A.aj.$nativeSuperclassTag="ArrayBufferView"
A.aP.$nativeSuperclassTag="ArrayBufferView"
A.aQ.$nativeSuperclassTag="ArrayBufferView"
A.aB.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=A.i4
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=snake.js.map
