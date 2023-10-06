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
a[c]=function(){a[c]=function(){A.ib(b)}
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
if(a[b]!==s)A.ic(b)
a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.dU(b)
return new s(c,this)}:function(){if(s===null)s=A.dU(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.dU(a).prototype
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
a(hunkHelpers,v,w,$)}var A={dD:function dD(){},
X(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
dL(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
em(a,b,c){return A.dL(A.X(A.X(c,a),b))},
en(a,b,c,d,e){return A.dL(A.X(A.X(A.X(A.X(e,a),b),c),d))},
dn(a,b,c){return a},
dX(a){var s,r
for(s=$.x.length,r=0;r<s;++r)if(a===$.x[r])return!0
return!1},
ec(){return new A.bD("No element")},
ai:function ai(a){this.a=a},
cu:function cu(){},
br:function br(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bt:function bt(a,b){this.a=a
this.b=b},
bu:function bu(a,b){this.a=null
this.b=a
this.c=b},
bI:function bI(a,b){this.a=a
this.b=b},
bJ:function bJ(a,b){this.a=a
this.b=b},
bg:function bg(){},
f3(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
i3(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
f(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.b4(a)
return s},
aG(a){var s,r=$.eg
if(r==null)r=$.eg=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
co(a){return A.fG(a)},
fG(a){var s,r,q,p
if(a instanceof A.j)return A.v(A.c7(a),null)
s=J.a9(a)
if(s===B.K||s===B.M||t.o.b(a)){r=B.v(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.v(A.c7(a),null)},
eh(a){if(a==null||typeof a=="number"||A.dR(a))return J.b4(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.a3)return a.h(0)
if(a instanceof A.ap)return a.aP(!0)
return"Instance of '"+A.co(a)+"'"},
eY(a){throw A.d(A.dm(a))},
e(a,b){if(a==null)J.c9(a)
throw A.d(A.eV(a,b))},
eV(a,b){var s,r="index"
if(!A.eM(b))return new A.G(!0,b,r,null)
s=J.c9(a)
if(b<0||b>=s)return A.bk(b,s,a,r)
return new A.am(null,null,!0,b,r,"Value not in range")},
dm(a){return new A.G(!0,a,null,null)},
d(a){return A.eZ(new Error(),a)},
eZ(a,b){var s
if(b==null)b=new A.K()
a.dartException=b
s=A.ie
if("defineProperty" in Object){Object.defineProperty(a,"message",{get:s})
a.name=""}else a.toString=s
return a},
ie(){return J.b4(this.dartException)},
f1(a){throw A.d(a)},
e_(a,b){throw A.eZ(b,a)},
dw(a){throw A.d(A.bc(a))},
L(a){var s,r,q,p,o,n
a=A.i8(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=[]
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.cL(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
cM(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
eq(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
dE(a,b){var s=b==null,r=s?null:b.method
return new A.bq(a,r,s?null:b.receiver)},
a2(a){if(a==null)return new A.cn(a)
if(a instanceof A.av)return A.a1(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.a1(a,a.dartException)
return A.hK(a)},
a1(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
hK(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.a.br(r,16)&8191)===10)switch(q){case 438:return A.a1(a,A.dE(A.f(s)+" (Error "+q+")",e))
case 445:case 5007:p=A.f(s)
return A.a1(a,new A.aE(p+" (Error "+q+")",e))}}if(a instanceof TypeError){o=$.fc()
n=$.fd()
m=$.fe()
l=$.ff()
k=$.fi()
j=$.fj()
i=$.fh()
$.fg()
h=$.fl()
g=$.fk()
f=o.A(s)
if(f!=null)return A.a1(a,A.dE(s,f))
else{f=n.A(s)
if(f!=null){f.method="call"
return A.a1(a,A.dE(s,f))}else{f=m.A(s)
if(f==null){f=l.A(s)
if(f==null){f=k.A(s)
if(f==null){f=j.A(s)
if(f==null){f=i.A(s)
if(f==null){f=l.A(s)
if(f==null){f=h.A(s)
if(f==null){f=g.A(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return A.a1(a,new A.aE(s,f==null?e:f.method))}}return A.a1(a,new A.bG(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.aH()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return A.a1(a,new A.G(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.aH()
return a},
a0(a){var s
if(a instanceof A.av)return a.b
if(a==null)return new A.aT(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new A.aT(a)},
dZ(a){if(a==null)return J.F(a)
if(typeof a=="object")return A.aG(a)
return J.F(a)},
hQ(a){if(typeof a=="number")return B.c.gj(a)
if(a instanceof A.c3)return A.aG(a)
if(a instanceof A.ap)return a.gj(a)
return A.dZ(a)},
hU(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=a.length
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
i2(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(A.fB("Unsupported number of arguments for wrapped closure"))},
b2(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.i2)
a.$identity=s
return s},
fy(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.cz().constructor.prototype):Object.create(new A.as(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else r=function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.ea(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.fu(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.ea(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
fu(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.fs)}throw A.d("Error in functionType of tearoff")},
fv(a,b,c,d){var s=A.e8
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
ea(a,b,c,d){var s,r
if(c)return A.fx(a,b,d)
s=b.length
r=A.fv(s,d,a,b)
return r},
fw(a,b,c,d){var s=A.e8,r=A.ft
switch(b?-1:a){case 0:throw A.d(new A.bz("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
fx(a,b,c){var s,r
if($.e6==null)$.e6=A.e5("interceptor")
if($.e7==null)$.e7=A.e5("receiver")
s=b.length
r=A.fw(s,c,a,b)
return r},
dU(a){return A.fy(a)},
fs(a,b){return A.aZ(v.typeUniverse,A.c7(a.a),b)},
e8(a){return a.a},
ft(a){return a.b},
e5(a){var s,r,q,p=new A.as("receiver","interceptor"),o=J.dC(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.d(A.ca("Field name "+a+" not found.",null))},
ib(a){throw A.d(new A.bQ(a))},
hW(a){return v.getIsolateTag(a)},
ja(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
i5(a){var s,r,q,p,o,n=$.eX.$1(a),m=$.dp[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.du[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.eS.$2(a,n)
if(q!=null){m=$.dp[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.du[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.dv(s)
$.dp[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.du[n]=s
return s}if(p==="-"){o=A.dv(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.f_(a,s)
if(p==="*")throw A.d(A.er(n))
if(v.leafTags[n]===true){o=A.dv(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.f_(a,s)},
f_(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.dY(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
dv(a){return J.dY(a,!1,null,!!a.$iS)},
i7(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.dv(s)
else return J.dY(s,c,null,null)},
i_(){if(!0===$.dW)return
$.dW=!0
A.i0()},
i0(){var s,r,q,p,o,n,m,l
$.dp=Object.create(null)
$.du=Object.create(null)
A.hZ()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.f0.$1(o)
if(n!=null){m=A.i7(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
hZ(){var s,r,q,p,o,n,m=B.B()
m=A.ar(B.C,A.ar(B.D,A.ar(B.w,A.ar(B.w,A.ar(B.E,A.ar(B.F,A.ar(B.G(B.v),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.eX=new A.dr(p)
$.eS=new A.ds(o)
$.f0=new A.dt(n)},
ar(a,b){return a(b)||b},
hR(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
ia(a,b,c){var s=a.indexOf(b,c)
return s>=0},
i8(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
A:function A(a,b){this.a=a
this.b=b},
bd:function bd(){},
bi:function bi(a){this.a=a},
cL:function cL(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aE:function aE(a,b){this.a=a
this.b=b},
bq:function bq(a,b,c){this.a=a
this.b=b
this.c=c},
bG:function bG(a){this.a=a},
cn:function cn(a){this.a=a},
av:function av(a,b){this.a=a
this.b=b},
aT:function aT(a){this.a=a
this.b=null},
a3:function a3(){},
cc:function cc(){},
cd:function cd(){},
cB:function cB(){},
cz:function cz(){},
as:function as(a,b){this.a=a
this.b=b},
bQ:function bQ(a){this.a=a},
bz:function bz(a){this.a=a},
bp:function bp(){},
ck:function ck(a,b){this.a=a
this.b=b
this.c=null},
bo:function bo(){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0},
dr:function dr(a){this.a=a},
ds:function ds(a){this.a=a},
dt:function dt(a){this.a=a},
ap:function ap(){},
bZ:function bZ(){},
hi(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.eV(b,a))},
bv:function bv(){},
ak:function ak(){},
aC:function aC(){},
bw:function bw(){},
aQ:function aQ(){},
aR:function aR(){},
ej(a,b){var s=b.c
return s==null?b.c=A.dP(a,b.y,!0):s},
dI(a,b){var s=b.c
return s==null?b.c=A.aX(a,"af",[b.y]):s},
ek(a){var s=a.x
if(s===6||s===7||s===8)return A.ek(a.y)
return s===12||s===13},
fI(a){return a.at},
hV(a){return A.c4(v.typeUniverse,a,!1)},
a_(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.x
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.y
r=A.a_(a,s,a0,a1)
if(r===s)return b
return A.eC(a,r,!0)
case 7:s=b.y
r=A.a_(a,s,a0,a1)
if(r===s)return b
return A.dP(a,r,!0)
case 8:s=b.y
r=A.a_(a,s,a0,a1)
if(r===s)return b
return A.eB(a,r,!0)
case 9:q=b.z
p=A.b1(a,q,a0,a1)
if(p===q)return b
return A.aX(a,b.y,p)
case 10:o=b.y
n=A.a_(a,o,a0,a1)
m=b.z
l=A.b1(a,m,a0,a1)
if(n===o&&l===m)return b
return A.dN(a,n,l)
case 12:k=b.y
j=A.a_(a,k,a0,a1)
i=b.z
h=A.hH(a,i,a0,a1)
if(j===k&&h===i)return b
return A.eA(a,j,h)
case 13:g=b.z
a1+=g.length
f=A.b1(a,g,a0,a1)
o=b.y
n=A.a_(a,o,a0,a1)
if(f===g&&n===o)return b
return A.dO(a,n,f,!0)
case 14:e=b.y
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.d(A.b8("Attempted to substitute unexpected RTI kind "+c))}},
b1(a,b,c,d){var s,r,q,p,o=b.length,n=A.df(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.a_(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
hI(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.df(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.a_(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
hH(a,b,c,d){var s,r=b.a,q=A.b1(a,r,c,d),p=b.b,o=A.b1(a,p,c,d),n=b.c,m=A.hI(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.bT()
s.a=q
s.b=o
s.c=m
return s},
j9(a,b){a[v.arrayRti]=b
return a},
eU(a){var s,r=a.$S
if(r!=null){if(typeof r=="number")return A.hY(r)
s=a.$S()
return s}return null},
i1(a,b){var s
if(A.ek(b))if(a instanceof A.a3){s=A.eU(a)
if(s!=null)return s}return A.c7(a)},
c7(a){if(a instanceof A.j)return A.P(a)
if(Array.isArray(a))return A.eG(a)
return A.dQ(J.a9(a))},
eG(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
P(a){var s=a.$ti
return s!=null?s:A.dQ(a)},
dQ(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.hp(a,s)},
hp(a,b){var s=a instanceof A.a3?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.ha(v.typeUniverse,s.name)
b.$ccache=r
return r},
hY(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.c4(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
hX(a){return A.a8(A.P(a))},
dT(a){var s
if(a instanceof A.ap)return A.hT(a.$r,a.aJ())
s=a instanceof A.a3?A.eU(a):null
if(s!=null)return s
if(t.k.b(a))return J.fp(a).a
if(Array.isArray(a))return A.eG(a)
return A.c7(a)},
a8(a){var s=a.w
return s==null?a.w=A.eI(a):s},
eI(a){var s,r,q=a.at,p=q.replace(/\*/g,"")
if(p===q)return a.w=new A.c3(a)
s=A.c4(v.typeUniverse,p,!0)
r=s.w
return r==null?s.w=A.eI(s):r},
hT(a,b){var s,r,q=b,p=q.length
if(p===0)return t.F
if(0>=p)return A.e(q,0)
s=A.aZ(v.typeUniverse,A.dT(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.e(q,r)
s=A.eD(v.typeUniverse,s,A.dT(q[r]))}return A.aZ(v.typeUniverse,s,a)},
f2(a){return A.a8(A.c4(v.typeUniverse,a,!1))},
ho(a){var s,r,q,p,o,n=this
if(n===t.K)return A.O(n,a,A.hu)
if(!A.Q(n))if(!(n===t._))s=!1
else s=!0
else s=!0
if(s)return A.O(n,a,A.hy)
s=n.x
if(s===7)return A.O(n,a,A.hm)
if(s===1)return A.O(n,a,A.eN)
r=s===6?n.y:n
s=r.x
if(s===8)return A.O(n,a,A.hq)
if(r===t.S)q=A.eM
else if(r===t.i||r===t.n)q=A.ht
else if(r===t.N)q=A.hw
else q=r===t.y?A.dR:null
if(q!=null)return A.O(n,a,q)
if(s===9){p=r.y
if(r.z.every(A.i4)){n.r="$i"+p
if(p==="ee")return A.O(n,a,A.hs)
return A.O(n,a,A.hx)}}else if(s===11){o=A.hR(r.y,r.z)
return A.O(n,a,o==null?A.eN:o)}return A.O(n,a,A.hk)},
O(a,b,c){a.b=c
return a.b(b)},
hn(a){var s,r=this,q=A.hj
if(!A.Q(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.hd
else if(r===t.K)q=A.hc
else{s=A.b3(r)
if(s)q=A.hl}r.a=q
return r.a(a)},
c5(a){var s,r=a.x
if(!A.Q(a))if(!(a===t._))if(!(a===t.A))if(r!==7)if(!(r===6&&A.c5(a.y)))s=r===8&&A.c5(a.y)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
else s=!0
return s},
hk(a){var s=this
if(a==null)return A.c5(s)
return A.l(v.typeUniverse,A.i1(a,s),null,s,null)},
hm(a){if(a==null)return!0
return this.y.b(a)},
hx(a){var s,r=this
if(a==null)return A.c5(r)
s=r.r
if(a instanceof A.j)return!!a[s]
return!!J.a9(a)[s]},
hs(a){var s,r=this
if(a==null)return A.c5(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.j)return!!a[s]
return!!J.a9(a)[s]},
hj(a){var s,r=this
if(a==null){s=A.b3(r)
if(s)return a}else if(r.b(a))return a
A.eJ(a,r)},
hl(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.eJ(a,s)},
eJ(a,b){throw A.d(A.h0(A.es(a,A.v(b,null))))},
es(a,b){return A.cg(a)+": type '"+A.v(A.dT(a),null)+"' is not a subtype of type '"+b+"'"},
h0(a){return new A.aV("TypeError: "+a)},
t(a,b){return new A.aV("TypeError: "+A.es(a,b))},
hq(a){var s=this,r=s.x===6?s.y:s
return r.y.b(a)||A.dI(v.typeUniverse,r).b(a)},
hu(a){return a!=null},
hc(a){if(a!=null)return a
throw A.d(A.t(a,"Object"))},
hy(a){return!0},
hd(a){return a},
eN(a){return!1},
dR(a){return!0===a||!1===a},
iT(a){if(!0===a)return!0
if(!1===a)return!1
throw A.d(A.t(a,"bool"))},
iV(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.t(a,"bool"))},
iU(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.t(a,"bool?"))},
iW(a){if(typeof a=="number")return a
throw A.d(A.t(a,"double"))},
iY(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.t(a,"double"))},
iX(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.t(a,"double?"))},
eM(a){return typeof a=="number"&&Math.floor(a)===a},
iZ(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.d(A.t(a,"int"))},
j0(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.t(a,"int"))},
j_(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.t(a,"int?"))},
ht(a){return typeof a=="number"},
j1(a){if(typeof a=="number")return a
throw A.d(A.t(a,"num"))},
j3(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.t(a,"num"))},
j2(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.t(a,"num?"))},
hw(a){return typeof a=="string"},
j4(a){if(typeof a=="string")return a
throw A.d(A.t(a,"String"))},
j6(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.t(a,"String"))},
j5(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.t(a,"String?"))},
eQ(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.v(a[q],b)
return s},
hC(a,b){var s,r,q,p,o,n,m=a.y,l=a.z
if(""===m)return"("+A.eQ(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.v(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
eK(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=[]
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)a5.push("T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){k=a5.length
j=k-1-p
if(!(j>=0))return A.e(a5,j)
m=B.f.b5(m+l,a5[j])
i=a6[p]
h=i.x
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+A.v(i,a5)}m+=">"}else{m=""
r=null}o=a4.y
g=a4.z
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=A.v(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+A.v(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+A.v(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=A.v(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
v(a,b){var s,r,q,p,o,n,m,l=a.x
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=A.v(a.y,b)
return s}if(l===7){r=a.y
s=A.v(r,b)
q=r.x
return(q===12||q===13?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+A.v(a.y,b)+">"
if(l===9){p=A.hJ(a.y)
o=a.z
return o.length>0?p+("<"+A.eQ(o,b)+">"):p}if(l===11)return A.hC(a,b)
if(l===12)return A.eK(a,b,null)
if(l===13)return A.eK(a.y,b,a.z)
if(l===14){n=a.y
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.e(b,n)
return b[n]}return"?"},
hJ(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
hb(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
ha(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.c4(a,b,!1)
else if(typeof m=="number"){s=m
r=A.aY(a,5,"#")
q=A.df(s)
for(p=0;p<s;++p)q[p]=r
o=A.aX(a,b,q)
n[b]=o
return o}else return m},
h9(a,b){return A.eE(a.tR,b)},
h8(a,b){return A.eE(a.eT,b)},
c4(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.ey(A.ew(a,null,b,c))
r.set(b,s)
return s},
aZ(a,b,c){var s,r,q=b.Q
if(q==null)q=b.Q=new Map()
s=q.get(c)
if(s!=null)return s
r=A.ey(A.ew(a,b,c,!0))
q.set(c,r)
return r},
eD(a,b,c){var s,r,q,p=b.as
if(p==null)p=b.as=new Map()
s=c.at
r=p.get(s)
if(r!=null)return r
q=A.dN(a,b,c.x===10?c.z:[c])
p.set(s,q)
return q},
N(a,b){b.a=A.hn
b.b=A.ho
return b},
aY(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.y(null,null)
s.x=b
s.at=c
r=A.N(a,s)
a.eC.set(c,r)
return r},
eC(a,b,c){var s,r=b.at+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.h5(a,b,r,c)
a.eC.set(r,s)
return s},
h5(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.Q(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.y(null,null)
q.x=6
q.y=b
q.at=c
return A.N(a,q)},
dP(a,b,c){var s,r=b.at+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.h4(a,b,r,c)
a.eC.set(r,s)
return s},
h4(a,b,c,d){var s,r,q,p
if(d){s=b.x
if(!A.Q(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.b3(b.y)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.y
if(q.x===8&&A.b3(q.y))return q
else return A.ej(a,b)}}p=new A.y(null,null)
p.x=7
p.y=b
p.at=c
return A.N(a,p)},
eB(a,b,c){var s,r=b.at+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.h2(a,b,r,c)
a.eC.set(r,s)
return s},
h2(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.Q(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.aX(a,"af",[b])
else if(b===t.P||b===t.T)return t.O}q=new A.y(null,null)
q.x=8
q.y=b
q.at=c
return A.N(a,q)},
h6(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.y(null,null)
s.x=14
s.y=b
s.at=q
r=A.N(a,s)
a.eC.set(q,r)
return r},
aW(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].at
return s},
h1(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].at}return s},
aX(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.aW(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.y(null,null)
r.x=9
r.y=b
r.z=c
if(c.length>0)r.c=c[0]
r.at=p
q=A.N(a,r)
a.eC.set(p,q)
return q},
dN(a,b,c){var s,r,q,p,o,n
if(b.x===10){s=b.y
r=b.z.concat(c)}else{r=c
s=b}q=s.at+(";<"+A.aW(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.y(null,null)
o.x=10
o.y=s
o.z=r
o.at=q
n=A.N(a,o)
a.eC.set(q,n)
return n},
h7(a,b,c){var s,r,q="+"+(b+"("+A.aW(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.y(null,null)
s.x=11
s.y=b
s.z=c
s.at=q
r=A.N(a,s)
a.eC.set(q,r)
return r},
eA(a,b,c){var s,r,q,p,o,n=b.at,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.aW(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.aW(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.h1(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.y(null,null)
p.x=12
p.y=b
p.z=c
p.at=r
o=A.N(a,p)
a.eC.set(r,o)
return o},
dO(a,b,c,d){var s,r=b.at+("<"+A.aW(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.h3(a,b,c,r,d)
a.eC.set(r,s)
return s},
h3(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.df(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.x===1){r[p]=o;++q}}if(q>0){n=A.a_(a,b,r,0)
m=A.b1(a,c,r,0)
return A.dO(a,n,m,c!==m)}}l=new A.y(null,null)
l.x=13
l.y=b
l.z=c
l.at=d
return A.N(a,l)},
ew(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
ey(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.fU(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.ex(a,r,l,k,!1)
else if(q===46)r=A.ex(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.Z(a.u,a.e,k.pop()))
break
case 94:k.push(A.h6(a.u,k.pop()))
break
case 35:k.push(A.aY(a.u,5,"#"))
break
case 64:k.push(A.aY(a.u,2,"@"))
break
case 126:k.push(A.aY(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.fW(a,k)
break
case 38:A.fV(a,k)
break
case 42:p=a.u
k.push(A.eC(p,A.Z(p,a.e,k.pop()),a.n))
break
case 63:p=a.u
k.push(A.dP(p,A.Z(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.eB(p,A.Z(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.fT(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.ez(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.fY(a.u,a.e,o)
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
return A.Z(a.u,a.e,m)},
fU(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
ex(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.x===10)o=o.y
n=A.hb(s,o.y)[p]
if(n==null)A.f1('No "'+p+'" in "'+A.fI(o)+'"')
d.push(A.aZ(s,o,n))}else d.push(p)
return m},
fW(a,b){var s,r=a.u,q=A.ev(a,b),p=b.pop()
if(typeof p=="string")b.push(A.aX(r,p,q))
else{s=A.Z(r,a.e,p)
switch(s.x){case 12:b.push(A.dO(r,s,q,a.n))
break
default:b.push(A.dN(r,s,q))
break}}},
fT(a,b){var s,r,q,p,o,n=null,m=a.u,l=b.pop()
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
s=r}q=A.ev(a,b)
l=b.pop()
switch(l){case-3:l=b.pop()
if(s==null)s=m.sEA
if(r==null)r=m.sEA
p=A.Z(m,a.e,l)
o=new A.bT()
o.a=q
o.b=s
o.c=r
b.push(A.eA(m,p,o))
return
case-4:b.push(A.h7(m,b.pop(),q))
return
default:throw A.d(A.b8("Unexpected state under `()`: "+A.f(l)))}},
fV(a,b){var s=b.pop()
if(0===s){b.push(A.aY(a.u,1,"0&"))
return}if(1===s){b.push(A.aY(a.u,4,"1&"))
return}throw A.d(A.b8("Unexpected extended operation "+A.f(s)))},
ev(a,b){var s=b.splice(a.p)
A.ez(a.u,a.e,s)
a.p=b.pop()
return s},
Z(a,b,c){if(typeof c=="string")return A.aX(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.fX(a,b,c)}else return c},
ez(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.Z(a,b,c[s])},
fY(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.Z(a,b,c[s])},
fX(a,b,c){var s,r,q=b.x
if(q===10){if(c===0)return b.y
s=b.z
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.y
q=b.x}else if(c===0)return b
if(q!==9)throw A.d(A.b8("Indexed base must be an interface type"))
s=b.z
if(c<=s.length)return s[c-1]
throw A.d(A.b8("Bad index "+c+" for "+b.h(0)))},
l(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(!A.Q(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.x
if(r===4)return!0
if(A.Q(b))return!1
if(b.x!==1)s=!1
else s=!0
if(s)return!0
q=r===14
if(q)if(A.l(a,c[b.y],c,d,e))return!0
p=d.x
s=b===t.P||b===t.T
if(s){if(p===8)return A.l(a,b,c,d.y,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return A.l(a,b.y,c,d,e)
if(r===6)return A.l(a,b.y,c,d,e)
return r!==7}if(r===6)return A.l(a,b.y,c,d,e)
if(p===6){s=A.ej(a,d)
return A.l(a,b,c,s,e)}if(r===8){if(!A.l(a,b.y,c,d,e))return!1
return A.l(a,A.dI(a,b),c,d,e)}if(r===7){s=A.l(a,t.P,c,d,e)
return s&&A.l(a,b.y,c,d,e)}if(p===8){if(A.l(a,b,c,d.y,e))return!0
return A.l(a,b,c,A.dI(a,d),e)}if(p===7){s=A.l(a,b,c,t.P,e)
return s||A.l(a,b,c,d.y,e)}if(q)return!1
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
if(!A.l(a,j,c,i,e)||!A.l(a,i,e,j,c))return!1}return A.eL(a,b.y,c,d.y,e)}if(p===12){if(b===t.g)return!0
if(s)return!1
return A.eL(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.hr(a,b,c,d,e)}if(o&&p===11)return A.hv(a,b,c,d,e)
return!1},
eL(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.l(a3,a4.y,a5,a6.y,a7))return!1
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
if(!A.l(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.l(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.l(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.l(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
hr(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.y,k=d.y
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.aZ(a,b,r[o])
return A.eF(a,p,null,c,d.z,e)}n=b.z
m=d.z
return A.eF(a,n,null,c,m,e)},
eF(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.l(a,r,d,q,f))return!1}return!0},
hv(a,b,c,d,e){var s,r=b.z,q=d.z,p=r.length
if(p!==q.length)return!1
if(b.y!==d.y)return!1
for(s=0;s<p;++s)if(!A.l(a,r[s],c,q[s],e))return!1
return!0},
b3(a){var s,r=a.x
if(!(a===t.P||a===t.T))if(!A.Q(a))if(r!==7)if(!(r===6&&A.b3(a.y)))s=r===8&&A.b3(a.y)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
i4(a){var s
if(!A.Q(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
Q(a){var s=a.x
return s===2||s===3||s===4||s===5||a===t.X},
eE(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
df(a){return a>0?new Array(a):v.typeUniverse.sEA},
y:function y(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
bT:function bT(){this.c=this.b=this.a=null},
c3:function c3(a){this.a=a},
bR:function bR(){},
aV:function aV(a){this.a=a},
fM(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.hN()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.b2(new A.cO(q),1)).observe(s,{childList:true})
return new A.cN(q,s,r)}else if(self.setImmediate!=null)return A.hO()
return A.hP()},
fN(a){self.scheduleImmediate(A.b2(new A.cP(a),0))},
fO(a){self.setImmediate(A.b2(new A.cQ(a),0))},
fP(a){A.fZ(0,a)},
ep(a,b){var s=B.a.v(a.a,1000)
return A.h_(s<0?0:s,b)},
fZ(a,b){var s=new A.aU()
s.bd(a,b)
return s},
h_(a,b){var s=new A.aU()
s.be(a,b)
return s},
hA(a){return new A.bK(new A.m($.k,a.n("m<0>")),a.n("bK<0>"))},
hg(a,b){a.$2(0,null)
b.b=!0
return b.a},
j7(a,b){A.hh(a,b)},
hf(a,b){var s,r=a==null?b.$ti.c.a(a):a
if(!b.b)b.a.bh(r)
else{s=b.a
if(b.$ti.n("af<1>").b(r))s.aF(r)
else s.a8(r)}},
he(a,b){var s=A.a2(a),r=A.a0(a),q=b.a
if(b.b)q.J(s,r)
else q.bi(s,r)},
hh(a,b){var s,r,q=new A.dh(b),p=new A.di(b)
if(a instanceof A.m)a.aO(q,p,t.z)
else{s=t.z
if(a instanceof A.m)a.aA(q,p,s)
else{r=new A.m($.k,t.d)
r.a=8
r.c=a
r.aO(q,p,s)}}},
hL(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.k.b1(new A.dl(s))},
cb(a,b){var s=A.dn(a,"error",t.K)
return new A.b9(s,b==null?A.fr(a):b)},
fr(a){var s
if(t.Q.b(a)){s=a.gP()
if(s!=null)return s}return B.J},
et(a,b){var s,r
for(;s=a.a,(s&4)!==0;)a=a.c
if((s&24)!==0){r=b.ae()
b.S(a)
A.aO(b,r)}else{r=b.c
b.aM(a)
a.ad(r)}},
fS(a,b){var s,r,q={},p=q.a=a
for(;s=p.a,(s&4)!==0;){p=p.c
q.a=p}if((s&24)===0){r=b.c
b.aM(p)
q.a.ad(r)
return}if((s&16)===0&&b.c==null){b.S(p)
return}b.a^=2
A.a7(null,null,b.b,new A.cZ(q,b))},
aO(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;!0;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){f=f.c
A.dj(f.a,f.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.aO(g.a,f)
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
if(r){A.dj(m.a,m.b)
return}j=$.k
if(j!==k)$.k=k
else j=null
f=f.c
if((f&15)===8)new A.d5(s,g,p).$0()
else if(q){if((f&1)!==0)new A.d4(s,m).$0()}else if((f&2)!==0)new A.d3(g,s).$0()
if(j!=null)$.k=j
f=s.c
if(f instanceof A.m){r=s.a.$ti
r=r.n("af<2>").b(f)||!r.z[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.V(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.et(f,i)
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
hD(a,b){if(t.C.b(a))return b.b1(a)
if(t.v.b(a))return a
throw A.d(A.e4(a,"onError",u.c))},
hB(){var s,r
for(s=$.aq;s!=null;s=$.aq){$.b0=null
r=s.b
$.aq=r
if(r==null)$.b_=null
s.a.$0()}},
hG(){$.dS=!0
try{A.hB()}finally{$.b0=null
$.dS=!1
if($.aq!=null)$.e1().$1(A.eT())}},
eR(a){var s=new A.bM(a),r=$.b_
if(r==null){$.aq=$.b_=s
if(!$.dS)$.e1().$1(A.eT())}else $.b_=r.b=s},
hF(a){var s,r,q,p=$.aq
if(p==null){A.eR(a)
$.b0=$.b_
return}s=new A.bM(a)
r=$.b0
if(r==null){s.b=p
$.aq=$.b0=s}else{q=r.b
s.b=q
$.b0=r.b=s
if(q==null)$.b_=s}},
i9(a){var s,r=null,q=$.k
if(B.b===q){A.a7(r,r,B.b,a)
return}s=!1
if(s){A.a7(r,r,q,a)
return}A.a7(r,r,q,q.aR(a))},
iD(a){A.dn(a,"stream",t.K)
return new A.c1()},
dK(a){return new A.bL(null,a.n("bL<0>"))},
eo(a,b){var s=$.k
if(s===B.b)return A.ep(a,b)
return A.ep(a,s.aS(b,t.G))},
dj(a,b){A.hF(new A.dk(a,b))},
eO(a,b,c,d){var s,r=$.k
if(r===c)return d.$0()
$.k=c
s=r
try{r=d.$0()
return r}finally{$.k=s}},
eP(a,b,c,d,e){var s,r=$.k
if(r===c)return d.$1(e)
$.k=c
s=r
try{r=d.$1(e)
return r}finally{$.k=s}},
hE(a,b,c,d,e,f){var s,r=$.k
if(r===c)return d.$2(e,f)
$.k=c
s=r
try{r=d.$2(e,f)
return r}finally{$.k=s}},
a7(a,b,c,d){if(B.b!==c)d=c.aR(d)
A.eR(d)},
cO:function cO(a){this.a=a},
cN:function cN(a,b,c){this.a=a
this.b=b
this.c=c},
cP:function cP(a){this.a=a},
cQ:function cQ(a){this.a=a},
aU:function aU(){this.c=0},
de:function de(a,b){this.a=a
this.b=b},
dd:function dd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bK:function bK(a,b){this.a=a
this.b=!1
this.$ti=b},
dh:function dh(a){this.a=a},
di:function di(a){this.a=a},
dl:function dl(a){this.a=a},
b9:function b9(a,b){this.a=a
this.b=b},
bN:function bN(){},
bL:function bL(a,b){var _=this
_.b=a
_.c=0
_.e=_.d=null
_.$ti=b},
ao:function ao(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
m:function m(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
cW:function cW(a,b){this.a=a
this.b=b},
d2:function d2(a,b){this.a=a
this.b=b},
d_:function d_(a){this.a=a},
d0:function d0(a){this.a=a},
d1:function d1(a,b,c){this.a=a
this.b=b
this.c=c},
cZ:function cZ(a,b){this.a=a
this.b=b},
cY:function cY(a,b){this.a=a
this.b=b},
cX:function cX(a,b,c){this.a=a
this.b=b
this.c=c},
d5:function d5(a,b,c){this.a=a
this.b=b
this.c=c},
d6:function d6(a){this.a=a},
d4:function d4(a,b){this.a=a
this.b=b},
d3:function d3(a,b){this.a=a
this.b=b},
bM:function bM(a){this.a=a
this.b=null},
aI:function aI(){},
cA:function cA(a,b){this.a=a
this.b=b},
c1:function c1(){},
dg:function dg(){},
dk:function dk(a,b){this.a=a
this.b=b},
da:function da(){},
db:function db(a,b){this.a=a
this.b=b},
dc:function dc(a,b,c){this.a=a
this.b=b
this.c=c},
fF(){return new A.bW()},
dM(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
eu(a,b){var s=new A.aP(a,b)
s.c=a.e
return s},
dF(a){var s,r={}
if(A.dX(a))return"{...}"
s=new A.bE("")
try{$.x.push(a)
s.a+="{"
r.a=!0
a.an(0,new A.cm(r,s))
s.a+="}"}finally{if(0>=$.x.length)return A.e($.x,-1)
$.x.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
bW:function bW(){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0},
d9:function d9(a){this.a=a
this.c=this.b=null},
aP:function aP(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
a6:function a6(){},
bs:function bs(){},
cm:function cm(a,b){this.a=a
this.b=b},
bC:function bC(){},
c0:function c0(){},
fz(a,b){a=A.d(a)
a.stack=b.h(0)
throw a
throw A.d("unreachable")},
cl(a,b,c){var s,r=c?J.ed(a):J.fD(a)
if(a!==0&&!0)for(s=0;s<r.length;++s)r[s]=b
return r},
ef(a,b){var s,r=[]
for(s=J.c8(a);s.l();)r.push(s.gm())
if(b)return r
return J.dC(r)},
el(a,b,c){var s=J.c8(b)
if(!s.l())return a
if(c.length===0){do a+=A.f(s.gm())
while(s.l())}else{a+=A.f(s.gm())
for(;s.l();)a=a+c+A.f(s.gm())}return a},
eb(a){return new A.be(1000*a)},
cg(a){if(typeof a=="number"||A.dR(a)||a==null)return J.b4(a)
if(typeof a=="string")return JSON.stringify(a)
return A.eh(a)},
fA(a,b){A.dn(a,"error",t.K)
A.dn(b,"stackTrace",t.l)
A.fz(a,b)},
b8(a){return new A.b7(a)},
ca(a,b){return new A.G(!1,null,b,a)},
e4(a,b,c){return new A.G(!0,a,b,c)},
fH(a){var s=null
return new A.am(s,s,!1,s,s,a)},
dG(a,b,c,d,e){return new A.am(b,c,!0,a,d,"Invalid value")},
ei(a,b){if(a<0)throw A.d(A.dG(a,0,null,b,null))
return a},
bk(a,b,c,d){return new A.bj(b,!0,a,d,"Index out of range")},
aL(a){return new A.bH(a)},
er(a){return new A.bF(a)},
bc(a){return new A.bb(a)},
fB(a){return new A.cV(a)},
fC(a,b,c){var s,r
if(A.dX(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=[]
$.x.push(a)
try{A.hz(a,s)}finally{if(0>=$.x.length)return A.e($.x,-1)
$.x.pop()}r=A.el(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
dB(a,b,c){var s,r
if(A.dX(a))return b+"..."+c
s=new A.bE(b)
$.x.push(a)
try{r=s
r.a=A.el(r.a,a,", ")}finally{if(0>=$.x.length)return A.e($.x,-1)
$.x.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
hz(a,b){var s,r,q,p,o,n,m,l=a.gq(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.l())return
s=A.f(l.gm())
b.push(s)
k+=s.length+2;++j}if(!l.l()){if(j<=5)return
if(0>=b.length)return A.e(b,-1)
r=b.pop()
if(0>=b.length)return A.e(b,-1)
q=b.pop()}else{p=l.gm();++j
if(!l.l()){if(j<=4){b.push(A.f(p))
return}r=A.f(p)
if(0>=b.length)return A.e(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gm();++j
for(;l.l();p=o,o=n){n=l.gm();++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return A.e(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=A.f(p)
r=A.f(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.e(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
aF(a,b,c,d){var s
if(B.h===c)return A.em(B.c.gj(a),J.F(b),$.dx())
if(B.h===d){s=B.c.gj(a)
b=J.F(b)
c=J.F(c)
return A.dL(A.X(A.X(A.X($.dx(),s),b),c))}s=A.en(B.c.gj(a),J.F(b),J.F(c),J.F(d),$.dx())
return s},
be:function be(a){this.a=a},
cT:function cT(){},
i:function i(){},
b7:function b7(a){this.a=a},
K:function K(){},
G:function G(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
am:function am(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bj:function bj(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bH:function bH(a){this.a=a},
bF:function bF(a){this.a=a},
bD:function bD(a){this.a=a},
bb:function bb(a){this.a=a},
bx:function bx(){},
aH:function aH(){},
cV:function cV(a){this.a=a},
bl:function bl(){},
q:function q(){},
j:function j(){},
c2:function c2(){},
bE:function bE(a){this.a=a},
e9(a,b){var s=document.createElement("canvas")
s.width=b
s.height=a
return s},
fQ(a,b){var s,r
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.dw)(b),++r)a.appendChild(b[r])},
Y(a,b,c,d){var s=A.hM(new A.cU(c),t.B),r=s!=null
if(r&&!0)if(r)J.fn(a,b,s,!1)
return new A.bS(a,b,s,!1)},
eH(a){var s
if("postMessage" in a){s=A.fR(a)
return s}else return a},
fR(a){if(a===window)return a
else return new A.cS()},
hM(a,b){var s=$.k
if(s===B.b)return a
return s.aS(a,b)},
c:function c(){},
b5:function b5(){},
b6:function b6(){},
ba:function ba(){},
B:function B(){},
ad:function ad(){},
ce:function ce(){},
cf:function cf(){},
au:function au(){},
cR:function cR(a,b){this.a=a
this.b=b},
o:function o(){},
a:function a(){},
ae:function ae(){},
bh:function bh(){},
a4:function a4(){},
C:function C(){},
u:function u(){},
bO:function bO(a){this.a=a},
h:function h(){},
aD:function aD(){},
bB:function bB(){},
E:function E(){},
aM:function aM(){},
dA:function dA(a,b){this.a=a
this.$ti=b},
aN:function aN(){},
r:function r(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bS:function bS(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
cU:function cU(a){this.a=a},
ax:function ax(){},
aw:function aw(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
cS:function cS(){},
bP:function bP(){},
bU:function bU(){},
bV:function bV(){},
bX:function bX(){},
bY:function bY(){},
dz(){return window.navigator.userAgent},
bf:function bf(a,b){this.a=a
this.b=b},
ch:function ch(){},
ci:function ci(){},
dH(a,b,c,d,e){var s,r
if(c<0)s=c===-1/0?0:-c*0
else s=c
if(d<0)r=d===-1/0?0:-d*0
else r=d
return new A.J(a,b,s,r,e.n("J<0>"))},
d7:function d7(){},
U:function U(a,b,c){this.a=a
this.b=b
this.$ti=c},
c_:function c_(){},
J:function J(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b:function b(){},
at:function at(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
T:function T(a){this.a=a},
aj:function aj(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
al:function al(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=0},
fJ(a,b,c,d,e,f,g){var s,r,q=g*f,p=d*e,o=A.e9(p,q)
q=A.e9(p,q)
p=[]
for(s=0;s<d;++s){r=B.a.v(g,32)
p.push(new Uint32Array(r+1))}q=new A.bA(d,g,f,e,c,a,o,q,p)
q.ba(a,b,c,d,e,f,g)
return q},
dJ(a){return new A.A(B.a.v(a,32),31-B.a.i(a,32))},
D:function D(a){this.b=a},
bA:function bA(a,b,c,d,e,f,g,h,i){var _=this
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
cq:function cq(a){this.a=a},
cr:function cr(a){this.a=a},
cs:function cs(a){this.a=a},
ct:function ct(a){this.a=a},
cp:function cp(){},
fL(a,b,c,d,e,f,g){var s,r,q,p="white",o=null,n=A.fJ("black",b,p,e*(8+d),2,2,a*8),m=[]
for(s=0;s<e;++s){r=[]
for(q=0;q<a;++q)r.push(new A.at(s,q," ",p))
m.push(r)}n=new A.aJ(e,a,d,b,!0,n,new A.al(e,a),new A.al(e,a),new A.al(e,a),!1,A.dK(t.N),A.dK(t.U),A.dK(t.m),B.z,m,A.fF(),B.dQ)
n.bc("black",a,b,p,o,!0,2,2,d,e,!1,g,o,o,o,o,o)
return n},
an:function an(a){this.b=a},
aJ:function aJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
cJ:function cJ(a){this.a=a},
cI:function cI(){},
cH:function cH(a){this.a=a},
cC:function cC(a){this.a=a},
cD:function cD(a){this.a=a},
cE:function cE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cF:function cF(a,b,c){this.a=a
this.b=b
this.c=c},
cG:function cG(a){this.a=a},
fK(a,b,c){var s,r,q,p=[]
for(s=0;s<a;++s){r=[]
for(q=0;q<b;++q)r.push(B.d)
p.push(r)}p=new A.cv(a,b,[],p,B.o)
p.bb(a,b,c)
return p},
i6(){var s=document.getElementById("snake")
s.toString
A.fK(30,30,s)},
M:function M(a){this.b=a},
ag:function ag(a){this.b=a},
cv:function cv(a,b,c,d,e){var _=this
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
cw:function cw(a){this.a=a},
cy:function cy(a){this.a=a},
cx:function cx(a){this.a=a},
ic(a){A.e_(new A.ai("Field '"+a+"' has been assigned during initialization."),new Error())},
p(){A.e_(new A.ai("Field '' has not been initialized."),new Error())},
id(){A.e_(new A.ai("Field '' has already been initialized."),new Error())}},J={
dY(a,b,c,d){return{i:a,p:b,e:c,x:d}},
dq(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.dW==null){A.i_()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.er("Return interceptor for "+A.f(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.d8
if(o==null)o=$.d8=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.i5(a)
if(p!=null)return p
if(typeof a=="function")return B.L
s=Object.getPrototypeOf(a)
if(s==null)return B.y
if(s===Object.prototype)return B.y
if(typeof q=="function"){o=$.d8
if(o==null)o=$.d8=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.r,enumerable:false,writable:true,configurable:true})
return B.r}return B.r},
fD(a){if(a<0||a>4294967295)throw A.d(A.dG(a,0,4294967295,"length",null))
return J.fE(new Array(a))},
ed(a){if(a<0)throw A.d(A.ca("Length must be a non-negative integer: "+a,null))
return new Array(a)},
fE(a){return J.dC(a)},
dC(a){a.fixed$length=Array
return a},
a9(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.az.prototype
return J.bn.prototype}if(typeof a=="string")return J.ah.prototype
if(a==null)return J.aA.prototype
if(typeof a=="boolean")return J.bm.prototype
if(Array.isArray(a))return J.H.prototype
if(typeof a!="object"){if(typeof a=="function")return J.I.prototype
return a}if(a instanceof A.j)return a
return J.dq(a)},
eW(a){if(typeof a=="string")return J.ah.prototype
if(a==null)return a
if(Array.isArray(a))return J.H.prototype
if(typeof a!="object"){if(typeof a=="function")return J.I.prototype
return a}if(a instanceof A.j)return a
return J.dq(a)},
dV(a){if(a==null)return a
if(Array.isArray(a))return J.H.prototype
if(typeof a!="object"){if(typeof a=="function")return J.I.prototype
return a}if(a instanceof A.j)return a
return J.dq(a)},
aa(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.I.prototype
return a}if(a instanceof A.j)return a
return J.dq(a)},
ab(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.a9(a).t(a,b)},
fm(a,b){if(typeof b==="number")if(Array.isArray(a)||A.i3(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.dV(a).p(a,b)},
fn(a,b,c,d){return J.aa(a).bg(a,b,c,d)},
e2(a){return J.aa(a).aH(a)},
e3(a,b){return J.dV(a).C(a,b)},
F(a){return J.a9(a).gj(a)},
c8(a){return J.dV(a).gq(a)},
c9(a){return J.eW(a).gk(a)},
fo(a){return J.aa(a).gbE(a)},
fp(a){return J.a9(a).gD(a)},
fq(a,b){return J.aa(a).sL(a,b)},
b4(a){return J.a9(a).h(a)},
ay:function ay(){},
bm:function bm(){},
aA:function aA(){},
w:function w(){},
a5:function a5(){},
by:function by(){},
aK:function aK(){},
I:function I(){},
H:function H(){},
cj:function cj(){},
ac:function ac(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
aB:function aB(){},
az:function az(){},
bn:function bn(){},
ah:function ah(){}},B={}
var w=[A,J,B]
var $={}
A.dD.prototype={}
J.ay.prototype={
t(a,b){return a===b},
gj(a){return A.aG(a)},
h(a){return"Instance of '"+A.co(a)+"'"},
gD(a){return A.a8(A.dQ(this))}}
J.bm.prototype={
h(a){return String(a)},
gj(a){return a?519018:218159},
gD(a){return A.a8(t.y)},
$iz:1}
J.aA.prototype={
t(a,b){return null==b},
h(a){return"null"},
gj(a){return 0},
$iz:1,
$iq:1}
J.w.prototype={}
J.a5.prototype={
gj(a){return 0},
h(a){return String(a)}}
J.by.prototype={}
J.aK.prototype={}
J.I.prototype={
h(a){var s=a[$.f5()]
if(s==null)return this.b9(a)
return"JavaScript function for "+J.b4(s)}}
J.H.prototype={
bH(a,b){var s
if(!!a.fixed$length)A.f1(A.aL("remove"))
for(s=0;s<a.length;++s)if(J.ab(a[s],b)){a.splice(s,1)
return!0}return!1},
bz(a,b){var s,r,q=a.length,p=A.cl(q,"",!1)
for(s=0;s<a.length;++s){r=A.f(a[s])
if(!(s<q))return A.e(p,s)
p[s]=r}return p.join(b)},
bu(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw A.d(A.bc(a))}return s},
bv(a,b,c){return this.bu(a,b,c,t.z)},
C(a,b){if(!(b>=0&&b<a.length))return A.e(a,b)
return a[b]},
gaV(a){if(a.length>0)return a[0]
throw A.d(A.ec())},
gbA(a){var s=a.length
if(s>0)return a[s-1]
throw A.d(A.ec())},
bt(a,b){var s
for(s=0;s<a.length;++s)if(J.ab(a[s],b))return!0
return!1},
h(a){return A.dB(a,"[","]")},
gq(a){return new J.ac(a,a.length)},
gj(a){return A.aG(a)},
gk(a){return a.length}}
J.cj.prototype={}
J.ac.prototype={
gm(){var s=this.d
return s==null?A.P(this).c.a(s):s},
l(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.d(A.dw(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.aB.prototype={
b4(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.d(A.aL(""+a+".toInt()"))},
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
throw A.d(A.aL("Result of truncating division is "+A.f(s)+": "+A.f(a)+" ~/ "+b))},
O(a,b){if(b<0)throw A.d(A.dm(b))
return b>31?0:a<<b>>>0},
bq(a,b){return b>31?0:a<<b>>>0},
b7(a,b){var s
if(b<0)throw A.d(A.dm(b))
if(a>0)s=this.ag(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
br(a,b){var s
if(a>0)s=this.ag(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
B(a,b){if(0>b)throw A.d(A.dm(b))
return this.ag(a,b)},
ag(a,b){return b>31?0:a>>>b},
gD(a){return A.a8(t.n)},
$iR:1}
J.az.prototype={
gD(a){return A.a8(t.S)},
$iz:1,
$in:1}
J.bn.prototype={
gD(a){return A.a8(t.i)},
$iz:1}
J.ah.prototype={
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
if(c>s)throw A.d(A.dG(c,0,s,null,null))
return A.ia(a,b,c)},
h(a){return a},
gj(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gD(a){return A.a8(t.N)},
gk(a){return a.length},
$iz:1,
$iW:1}
A.ai.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.cu.prototype={}
A.br.prototype={
gm(){var s=this.d
return s==null?A.P(this).c.a(s):s},
l(){var s,r=this,q=r.a,p=J.eW(q),o=p.gk(q)
if(r.b!==o)throw A.d(A.bc(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.C(q,s);++r.c
return!0}}
A.bt.prototype={
gq(a){return new A.bu(J.c8(this.a),this.b)},
gk(a){return J.c9(this.a)},
C(a,b){return this.b.$1(J.e3(this.a,b))}}
A.bu.prototype={
l(){var s=this,r=s.b
if(r.l()){s.a=s.c.$1(r.gm())
return!0}s.a=null
return!1},
gm(){var s=this.a
return s==null?A.P(this).z[1].a(s):s}}
A.bI.prototype={
gq(a){return new A.bJ(J.c8(this.a),this.b)}}
A.bJ.prototype={
l(){var s,r
for(s=this.a,r=this.b;s.l();)if(r.$1(s.gm()))return!0
return!1},
gm(){return this.a.gm()}}
A.bg.prototype={}
A.A.prototype={$r:"+(1,2)",$s:1}
A.bd.prototype={
h(a){return A.dF(this)}}
A.bi.prototype={
U(){var s=this.$map
if(s==null){s=new A.bo()
A.hU(this.a,s)
this.$map=s}return s},
al(a){return this.U().al(a)},
p(a,b){return this.U().p(0,b)},
an(a,b){this.U().an(0,b)},
gk(a){return this.U().a}}
A.cL.prototype={
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
A.aE.prototype={
h(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
A.bq.prototype={
h(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.bG.prototype={
h(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.cn.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.av.prototype={}
A.aT.prototype={
h(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iV:1}
A.a3.prototype={
h(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.f3(r==null?"unknown":r)+"'"},
gbT(){return this},
$C:"$1",
$R:1,
$D:null}
A.cc.prototype={$C:"$0",$R:0}
A.cd.prototype={$C:"$2",$R:2}
A.cB.prototype={}
A.cz.prototype={
h(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.f3(s)+"'"}}
A.as.prototype={
t(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.as))return!1
return this.$_target===b.$_target&&this.a===b.a},
gj(a){return(A.dZ(this.a)^A.aG(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.co(this.a)+"'")}}
A.bQ.prototype={
h(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.bz.prototype={
h(a){return"RuntimeError: "+this.a}}
A.bp.prototype={
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
if(q!==s.r)throw A.d(A.bc(s))
r=r.c}},
R(a,b){var s=this,r=new A.ck(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&1073741823
return r},
ao(a){return J.F(a)&1073741823},
ap(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ab(a[r].a,b))return r
return-1},
h(a){return A.dF(this)}}
A.ck.prototype={}
A.bo.prototype={
ao(a){return A.hQ(a)&1073741823},
ap(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ab(a[r].a,b))return r
return-1}}
A.dr.prototype={
$1(a){return this.a(a)},
$S:6}
A.ds.prototype={
$2(a,b){return this.a(a,b)},
$S:7}
A.dt.prototype={
$1(a){return this.a(a)},
$S:8}
A.ap.prototype={
h(a){return this.aP(!1)},
aP(a){var s,r,q,p,o,n=this.bm(),m=this.aJ(),l=(a?""+"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.e(m,q)
o=m[q]
l=a?l+A.eh(o):l+A.f(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
bm(){var s,r=this.$s
for(;$.aS.length<=r;)$.aS.push(null)
s=$.aS[r]
if(s==null){s=this.bl()
if(!(r<$.aS.length))return A.e($.aS,r)
$.aS[r]=s}return s},
bl(){var s,r,q,p,o,n=this.$r,m=n.indexOf("("),l=n.substring(1,m),k=n.substring(m),j=k==="()"?0:k.replace(/[^,]/g,"").length+1,i=new Array(j)
for(s=0;s<j;++s)i[s]=s
if(l!==""){r=l.split(",")
s=r.length
for(q=i.length,p=j;s>0;){--p;--s
o=r[s]
if(!(p>=0&&p<q))return A.e(i,p)
i[p]=o}}i=A.ef(i,!1)
i.fixed$length=Array
i.immutable$list=Array
return i}}
A.bZ.prototype={
aJ(){return[this.a,this.b]},
t(a,b){if(b==null)return!1
return b instanceof A.bZ&&this.$s===b.$s&&J.ab(this.a,b.a)&&J.ab(this.b,b.b)},
gj(a){return A.aF(this.$s,this.a,this.b,B.h)}}
A.bv.prototype={}
A.ak.prototype={
gk(a){return a.length},
$iS:1}
A.aC.prototype={}
A.bw.prototype={
gD(a){return B.e0},
p(a,b){A.hi(b,a,a.length)
return a[b]},
$iz:1}
A.aQ.prototype={}
A.aR.prototype={}
A.y.prototype={
n(a){return A.aZ(v.typeUniverse,this,a)},
aE(a){return A.eD(v.typeUniverse,this,a)}}
A.bT.prototype={}
A.c3.prototype={
h(a){return A.v(this.a,null)}}
A.bR.prototype={
h(a){return this.a}}
A.aV.prototype={$iK:1}
A.cO.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:4}
A.cN.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:9}
A.cP.prototype={
$0(){this.a.$0()},
$S:2}
A.cQ.prototype={
$0(){this.a.$0()},
$S:2}
A.aU.prototype={
bd(a,b){if(self.setTimeout!=null)self.setTimeout(A.b2(new A.de(this,b),0),a)
else throw A.d(A.aL("`setTimeout()` not found."))},
be(a,b){if(self.setTimeout!=null)self.setInterval(A.b2(new A.dd(this,a,Date.now(),b),0),a)
else throw A.d(A.aL("Periodic timer."))},
$icK:1}
A.de.prototype={
$0(){this.a.c=1
this.b.$0()},
$S:0}
A.dd.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.a.E(s,o)}q.c=p
r.d.$1(q)},
$S:2}
A.bK.prototype={}
A.dh.prototype={
$1(a){return this.a.$2(0,a)},
$S:10}
A.di.prototype={
$2(a,b){this.a.$2(1,new A.av(a,b))},
$S:11}
A.dl.prototype={
$2(a,b){this.a(a,b)},
$S:12}
A.b9.prototype={
h(a){return A.f(this.a)},
$ii:1,
gP(){return this.b}}
A.bN.prototype={}
A.bL.prototype={}
A.ao.prototype={
bB(a){if((this.c&15)!==6)return!0
return this.b.b.az(this.d,a.a)},
bw(a){var s,r=this.e,q=null,p=a.a,o=this.b.b
if(t.C.b(r))q=o.bK(r,p,a.b)
else q=o.az(r,p)
try{p=q
return p}catch(s){if(t.c.b(A.a2(s))){if((this.c&1)!==0)throw A.d(A.ca("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.ca("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.m.prototype={
aM(a){this.a=this.a&1|4
this.c=a},
aA(a,b,c){var s,r,q=$.k
if(q===B.b){if(b!=null&&!t.C.b(b)&&!t.v.b(b))throw A.d(A.e4(b,"onError",u.c))}else if(b!=null)b=A.hD(b,q)
s=new A.m(q,c.n("m<0>"))
r=b==null?1:3
this.a6(new A.ao(s,r,a,b,this.$ti.n("@<1>").aE(c).n("ao<1,2>")))
return s},
bQ(a,b){return this.aA(a,null,b)},
aO(a,b,c){var s=new A.m($.k,c.n("m<0>"))
this.a6(new A.ao(s,3,a,b,this.$ti.n("@<1>").aE(c).n("ao<1,2>")))
return s},
bp(a){this.a=this.a&1|16
this.c=a},
S(a){this.a=a.a&30|this.a&1
this.c=a.c},
a6(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.a6(a)
return}s.S(r)}A.a7(null,null,s.b,new A.cW(s,a))}},
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
A.a7(null,null,n.b,new A.d2(m,n))}},
ae(){var s=this.c
this.c=null
return this.V(s)},
V(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
bk(a){var s,r,q,p=this
p.a^=2
try{a.aA(new A.d_(p),new A.d0(p),t.P)}catch(q){s=A.a2(q)
r=A.a0(q)
A.i9(new A.d1(p,s,r))}},
a8(a){var s=this,r=s.ae()
s.a=8
s.c=a
A.aO(s,r)},
J(a,b){var s=this.ae()
this.bp(A.cb(a,b))
A.aO(this,s)},
bh(a){if(this.$ti.n("af<1>").b(a)){this.aF(a)
return}this.bj(a)},
bj(a){this.a^=2
A.a7(null,null,this.b,new A.cY(this,a))},
aF(a){if(this.$ti.b(a)){A.fS(a,this)
return}this.bk(a)},
bi(a,b){this.a^=2
A.a7(null,null,this.b,new A.cX(this,a,b))},
$iaf:1}
A.cW.prototype={
$0(){A.aO(this.a,this.b)},
$S:0}
A.d2.prototype={
$0(){A.aO(this.b,this.a.a)},
$S:0}
A.d_.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.a8(p.$ti.c.a(a))}catch(q){s=A.a2(q)
r=A.a0(q)
p.J(s,r)}},
$S:4}
A.d0.prototype={
$2(a,b){this.a.J(a,b)},
$S:13}
A.d1.prototype={
$0(){this.a.J(this.b,this.c)},
$S:0}
A.cZ.prototype={
$0(){A.et(this.a.a,this.b)},
$S:0}
A.cY.prototype={
$0(){this.a.a8(this.b)},
$S:0}
A.cX.prototype={
$0(){this.a.J(this.b,this.c)},
$S:0}
A.d5.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.bI(q.d)}catch(p){s=A.a2(p)
r=A.a0(p)
q=m.c&&m.b.a.c.a===s
o=m.a
if(q)o.c=m.b.a.c
else o.c=A.cb(s,r)
o.b=!0
return}if(l instanceof A.m&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=l.c
q.b=!0}return}if(l instanceof A.m){n=m.b.a
q=m.a
q.c=l.bQ(new A.d6(n),t.z)
q.b=!1}},
$S:0}
A.d6.prototype={
$1(a){return this.a},
$S:14}
A.d4.prototype={
$0(){var s,r,q,p,o
try{q=this.a
p=q.a
q.c=p.b.b.az(p.d,this.b)}catch(o){s=A.a2(o)
r=A.a0(o)
q=this.a
q.c=A.cb(s,r)
q.b=!0}},
$S:0}
A.d3.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=m.a.a.c
p=m.b
if(p.a.bB(s)&&p.a.e!=null){p.c=p.a.bw(s)
p.b=!1}}catch(o){r=A.a2(o)
q=A.a0(o)
p=m.a.a.c
n=m.b
if(p.a===r)n.c=p
else n.c=A.cb(r,q)
n.b=!0}},
$S:0}
A.bM.prototype={}
A.aI.prototype={
gk(a){var s={},r=$.k
s.a=0
A.Y(this.a,this.b,new A.cA(s,this),!1)
return new A.m(r,t.a)}}
A.cA.prototype={
$1(a){++this.a.a},
$S(){return A.P(this.b).n("~(1)")}}
A.c1.prototype={}
A.dg.prototype={}
A.dk.prototype={
$0(){A.fA(this.a,this.b)},
$S:0}
A.da.prototype={
bM(a){var s,r,q
try{if(B.b===$.k){a.$0()
return}A.eO(null,null,this,a)}catch(q){s=A.a2(q)
r=A.a0(q)
A.dj(s,r)}},
bO(a,b){var s,r,q
try{if(B.b===$.k){a.$1(b)
return}A.eP(null,null,this,a,b)}catch(q){s=A.a2(q)
r=A.a0(q)
A.dj(s,r)}},
bP(a,b){return this.bO(a,b,t.z)},
aR(a){return new A.db(this,a)},
aS(a,b){return new A.dc(this,a,b)},
bJ(a){if($.k===B.b)return a.$0()
return A.eO(null,null,this,a)},
bI(a){return this.bJ(a,t.z)},
bN(a,b){if($.k===B.b)return a.$1(b)
return A.eP(null,null,this,a,b)},
az(a,b){return this.bN(a,b,t.z,t.z)},
bL(a,b,c){if($.k===B.b)return a.$2(b,c)
return A.hE(null,null,this,a,b,c)},
bK(a,b,c){return this.bL(a,b,c,t.z,t.z,t.z)},
bG(a){return a},
b1(a){return this.bG(a,t.z,t.z,t.z)}}
A.db.prototype={
$0(){return this.a.bM(this.b)},
$S:0}
A.dc.prototype={
$1(a){return this.a.bP(this.b,a)},
$S(){return this.c.n("~(0)")}}
A.bW.prototype={
gq(a){var s=new A.aP(this,this.r)
s.c=this.e
return s},
gk(a){return this.a},
Y(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.aD(s==null?q.b=A.dM():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.aD(r==null?q.c=A.dM():r,b)}else return q.bf(b)},
bf(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.dM()
s=J.F(a)&1073741823
r=p[s]
if(r==null)p[s]=[q.ac(a)]
else{if(q.bn(r,a)>=0)return!1
r.push(q.ac(a))}return!0},
aD(a,b){if(a[b]!=null)return!1
a[b]=this.ac(b)
return!0},
aL(){this.r=this.r+1&1073741823},
ac(a){var s,r=this,q=new A.d9(a)
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
for(r=0;r<s;++r)if(J.ab(a[r].a,b))return r
return-1}}
A.d9.prototype={}
A.aP.prototype={
gm(){var s=this.d
return s==null?A.P(this).c.a(s):s},
l(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.d(A.bc(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.a6.prototype={
gq(a){return new A.br(a,this.gk(a))},
C(a,b){return this.p(a,b)},
gaW(a){return this.gk(a)===0},
bS(a){var s,r,q,p,o=this
if(o.gaW(a)){s=J.ed(0)
return s}r=o.p(a,0)
q=A.cl(o.gk(a),r,!0)
for(p=1;p<o.gk(a);++p){s=o.p(a,p)
if(!(p<q.length))return A.e(q,p)
q[p]=s}return q},
h(a){return A.dB(a,"[","]")}}
A.bs.prototype={
gk(a){return this.a},
h(a){return A.dF(this)}}
A.cm.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=A.f(a)
r.a=s+": "
r.a+=A.f(b)},
$S:15}
A.bC.prototype={
h(a){return A.dB(this,"{","}")},
C(a,b){var s,r,q
A.ei(b,"index")
s=A.eu(this,this.r)
for(r=b;s.l();){if(r===0){q=s.d
return q==null?A.P(s).c.a(q):q}--r}throw A.d(A.bk(b,b-r,this,"index"))}}
A.c0.prototype={}
A.be.prototype={
t(a,b){if(b==null)return!1
return b instanceof A.be&&this.a===b.a},
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
A.cT.prototype={
h(a){return this.T()}}
A.i.prototype={
gP(){return A.a0(this.$thrownJsError)}}
A.b7.prototype={
h(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.cg(s)
return"Assertion failed"}}
A.K.prototype={}
A.G.prototype={
gaa(){return"Invalid argument"+(!this.a?"(s)":"")},
ga9(){return""},
h(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.gaa()+q+o
if(!s.a)return n
return n+s.ga9()+": "+A.cg(s.gaq())},
gaq(){return this.b}}
A.am.prototype={
gaq(){return this.b},
gaa(){return"RangeError"},
ga9(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.f(q):""
else if(q==null)s=": Not greater than or equal to "+A.f(r)
else if(q>r)s=": Not in inclusive range "+A.f(r)+".."+A.f(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.f(r)
return s}}
A.bj.prototype={
gaq(){return this.b},
gaa(){return"RangeError"},
ga9(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gk(a){return this.f}}
A.bH.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.bF.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.bD.prototype={
h(a){return"Bad state: "+this.a}}
A.bb.prototype={
h(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.cg(s)+"."}}
A.bx.prototype={
h(a){return"Out of Memory"},
gP(){return null},
$ii:1}
A.aH.prototype={
h(a){return"Stack Overflow"},
gP(){return null},
$ii:1}
A.cV.prototype={
h(a){return"Exception: "+this.a}}
A.bl.prototype={
gk(a){var s,r=this.gq(this)
for(s=0;r.l();)++s
return s},
C(a,b){var s,r
A.ei(b,"index")
s=this.gq(this)
for(r=b;s.l();){if(r===0)return s.gm();--r}throw A.d(A.bk(b,b-r,this,"index"))},
h(a){return A.fC(this,"(",")")}}
A.q.prototype={
gj(a){return A.j.prototype.gj.call(this,this)},
h(a){return"null"}}
A.j.prototype={$ij:1,
t(a,b){return this===b},
gj(a){return A.aG(this)},
h(a){return"Instance of '"+A.co(this)+"'"},
gD(a){return A.hX(this)},
toString(){return this.h(this)}}
A.c2.prototype={
h(a){return""},
$iV:1}
A.bE.prototype={
gk(a){return this.a.length},
h(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.c.prototype={}
A.b5.prototype={
h(a){return String(a)}}
A.b6.prototype={
h(a){return String(a)}}
A.ba.prototype={
gar(a){return new A.r(a,"blur",!1,t.E)},
gau(a){return new A.r(a,"focus",!1,t.E)}}
A.B.prototype={
gk(a){return a.length}}
A.ad.prototype={
a7(a,b){var s=$.f4(),r=s[b]
if(typeof r=="string")return r
r=this.bs(a,b)
s[b]=r
return r},
bs(a,b){var s
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
s=$.f6()+b
if(s in a)return s
return b},
af(a,b,c,d){a.setProperty(b,c,d)},
gk(a){return a.length}}
A.ce.prototype={}
A.cf.prototype={
h(a){return String(a)}}
A.au.prototype={
h(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return"Rectangle ("+A.f(p)+", "+A.f(s)+") "+A.f(r)+" x "+A.f(q)},
t(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=J.aa(b)
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
return A.aF(p,s,r,q)},
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
$iJ:1}
A.cR.prototype={
gaW(a){return this.a.firstElementChild==null},
gk(a){return this.b.length},
p(a,b){var s=this.b
if(!(b>=0&&b<s.length))return A.e(s,b)
return t.h.a(s[b])},
gq(a){var s=this.bS(this)
return new J.ac(s,s.length)},
ai(a,b){A.fQ(this.a,b)},
F(a){J.e2(this.a)}}
A.o.prototype={
gL(a){return new A.cR(a,a.children)},
sL(a,b){var s=b.slice(0),r=this.gL(a)
r.F(0)
r.ai(0,s)},
h(a){return a.localName},
gar(a){return new A.r(a,"blur",!1,t.E)},
gaX(a){return new A.r(a,"click",!1,t.R)},
gau(a){return new A.r(a,"focus",!1,t.E)},
gaY(a){return new A.r(a,"keydown",!1,t.L)},
$io:1}
A.a.prototype={$ia:1}
A.ae.prototype={
bg(a,b,c,d){return a.addEventListener(b,A.b2(c,1),!1)}}
A.bh.prototype={
gk(a){return a.length}}
A.a4.prototype={
gk(a){return a.length},
p(a,b){var s=a.length
if(b>>>0!==b||b>=s)throw A.d(A.bk(b,s,a,null))
return a[b]},
C(a,b){if(!(b>=0&&b<a.length))return A.e(a,b)
return a[b]},
$iS:1}
A.C.prototype={$iC:1}
A.u.prototype={
gbE(a){var s,r,q,p,o
if(!!a.offsetX)return new A.U(a.offsetX,a.offsetY,t.H)
else{s=a.target
r=t.h
if(!r.b(A.eH(s)))throw A.d(A.aL("offsetX is only supported on elements"))
q=r.a(A.eH(s))
s=a.clientX
r=a.clientY
p=q.getBoundingClientRect()
o=p.left
o.toString
p=p.top
p.toString
return new A.U(B.c.b4(s-o),B.c.b4(r-p),t.H)}},
$iu:1}
A.bO.prototype={
gq(a){var s=this.a.childNodes
return new A.aw(s,s.length)},
gk(a){return this.a.childNodes.length},
p(a,b){var s=this.a.childNodes
if(!(b>=0&&b<s.length))return A.e(s,b)
return s[b]}}
A.h.prototype={
aH(a){var s
for(;s=a.firstChild,s!=null;)a.removeChild(s)},
h(a){var s=a.nodeValue
return s==null?this.b8(a):s},
$ih:1}
A.aD.prototype={
gk(a){return a.length},
p(a,b){var s=a.length
if(b>>>0!==b||b>=s)throw A.d(A.bk(b,s,a,null))
return a[b]},
C(a,b){if(!(b>=0&&b<a.length))return A.e(a,b)
return a[b]},
$iS:1}
A.bB.prototype={
gk(a){return a.length}}
A.E.prototype={}
A.aM.prototype={
h(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return"Rectangle ("+A.f(p)+", "+A.f(s)+") "+A.f(r)+" x "+A.f(q)},
t(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=J.aa(b)
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
return A.aF(p,s,r,q)},
ga0(a){var s=a.height
s.toString
return s},
ga4(a){var s=a.width
s.toString
return s}}
A.dA.prototype={}
A.aN.prototype={}
A.r.prototype={}
A.bS.prototype={}
A.cU.prototype={
$1(a){return this.a.$1(a)},
$S:1}
A.ax.prototype={
gq(a){return new A.aw(a,this.gk(a))}}
A.aw.prototype={
l(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.fm(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gm(){var s=this.d
return s==null?A.P(this).c.a(s):s}}
A.cS.prototype={}
A.bP.prototype={}
A.bU.prototype={}
A.bV.prototype={}
A.bX.prototype={}
A.bY.prototype={}
A.bf.prototype={
gab(){return new A.bt(new A.bI(this.b,new A.ch()),new A.ci())},
ai(a,b){var s,r,q
for(s=b.length,r=this.b.a,q=0;q<b.length;b.length===s||(0,A.dw)(b),++q)r.appendChild(b[q])},
F(a){J.e2(this.b.a)},
gk(a){return J.c9(this.gab().a)},
p(a,b){var s=this.gab()
return s.b.$1(J.e3(s.a,b))},
gq(a){var s=A.ef(this.gab(),!1)
return new J.ac(s,s.length)}}
A.ch.prototype={
$1(a){return t.h.b(a)},
$S:16}
A.ci.prototype={
$1(a){return t.h.a(a)},
$S:17}
A.d7.prototype={
N(a){if(a<=0||a>4294967296)throw A.d(A.fH("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
A.U.prototype={
h(a){return"Point("+A.f(this.a)+", "+A.f(this.b)+")"},
t(a,b){if(b==null)return!1
return b instanceof A.U&&this.a===b.a&&this.b===b.b},
gj(a){return A.em(B.c.gj(this.a),B.c.gj(this.b),0)}}
A.c_.prototype={
gb2(a){return this.$ti.c.a(this.a+this.c)},
gaT(a){return this.$ti.c.a(this.b+this.d)},
h(a){var s=this
return"Rectangle ("+s.a+", "+s.b+") "+s.c+" x "+s.d},
t(a,b){var s,r,q,p,o=this
if(b==null)return!1
if(t.q.b(b)){s=o.a
r=J.aa(b)
if(s===r.ga1(b)){q=o.b
if(q===r.ga3(b)){p=o.$ti.c
s=p.a(s+o.c)===r.gb2(b)&&p.a(q+o.d)===r.gaT(b)}else s=!1}else s=!1}else s=!1
return s},
gj(a){var s=this,r=s.a,q=s.b,p=s.$ti.c
return A.en(B.a.gj(r),B.a.gj(q),B.a.gj(p.a(r+s.c)),B.a.gj(p.a(q+s.d)),0)}}
A.J.prototype={
ga1(a){return this.a},
ga3(a){return this.b},
ga4(a){return this.c},
ga0(a){return this.d}}
A.b.prototype={
gL(a){return new A.bf(a,new A.bO(a))},
sL(a,b){this.aH(a)
new A.bf(a,new A.bO(a)).ai(0,b)},
gar(a){return new A.r(a,"blur",!1,t.E)},
gaX(a){return new A.r(a,"click",!1,t.R)},
gau(a){return new A.r(a,"focus",!1,t.E)},
gaY(a){return new A.r(a,"keydown",!1,t.L)}}
A.at.prototype={
gj(a){var s=this.a,r=this.b
return A.aF(new A.A(s,r).$s,s,r,B.h)},
t(a,b){var s,r,q,p
if(b==null)return!1
if(b instanceof A.at){s=b.a
r=b.b
q=this.a
p=this.b
p=A.aF(new A.A(s,r).$s,s,r,B.h)===A.aF(new A.A(q,p).$s,q,p,B.h)
s=p}else s=!1
return s},
h(a){var s=this
return"("+s.a+" "+s.b+") => '"+s.c+"' "+s.d}}
A.T.prototype={}
A.aj.prototype={
h(a){var s=this
return"               row: "+s.a+"\n            column: "+s.b+"\n         character: '"+s.c+"'\n    characterColor: "+s.d+"\n\n          pixelRow: "+s.e+"\n       pixelColumn: "+s.f+"\n         pixelIsOn: "+s.r+"\n    "}}
A.al.prototype={
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
A.D.prototype={
T(){return"Mode."+this.b}}
A.bA.prototype={
ba(a,b,c,d,e,f,g){var s,r=this,q="fit-content",p=document
A.Y(p,"focus",new A.cq(r),!1)
A.Y(p,"blur",new A.cr(r),!1)
p=r.r
p.tabIndex=-1
s=p.style
s.display="block"
s=p.style
s.outline="none"
p.getContext("2d").imageSmoothingEnabled=!1
A.Y(p,"focus",new A.cs(r),!1)
A.Y(p,"blur",new A.ct(r),!1)
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
J.fq(b,[p])
r.F(0)},
W(a,b){return new A.A(B.a.i(a,this.a),B.a.i(b,this.b))},
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
q=A.dJ(r)
p=q.a
o=B.a.O(1,q.b)
n=k.x
if(!(j>=0&&j<n.length))return A.e(n,j)
n=n[j]
if(!(p>=0&&p<n.length))return A.e(n,p)
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
q=A.dJ(r)
p=q.a
o=B.a.O(1,q.b)
n=k.x
if(!(j>=0&&j<n.length))return A.e(n,j)
n=n[j]
if(!(p>=0&&p<n.length))return A.e(n,p)
n[p]=(n[p]|o)>>>0
n=d.getContext("2d")
n.save()
n.beginPath()
n.fillStyle=c
m=k.c
l=k.d
n.fillRect(r*m,j*l,m,l)
n.restore()},
b_(a,b){var s=this.W(b,a),r=s.a,q=A.dJ(s.b),p=q.a,o=B.a.O(1,q.b),n=this.x
if(!(r>=0&&r<n.length))return A.e(n,r)
r=n[r]
if(!(p>=0&&p<r.length))return A.e(r,p)
return(r[p]&o)>>>0>0},
aU(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
if(b==null)b=A.dH(0,0,g.b,g.a,t.S)
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
l.push(B.a.O(h,o-i))}g=B.e.bv(l,0,new A.cp())
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
A.cq.prototype={
$1(a){this.a.y=!0},
$S:1}
A.cr.prototype={
$1(a){this.a.y=!1},
$S:1}
A.cs.prototype={
$1(a){this.a.M(0)},
$S:1}
A.ct.prototype={
$1(a){this.a.K(0)},
$S:1}
A.cp.prototype={
$2(a,b){return(a|b)>>>0},
$S:18}
A.an.prototype={
T(){return"State."+this.b}}
A.aJ.prototype={
bc(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,a0,a1){var s,r,q=this,p=q.f
p.tabIndex=-1
s=J.aa(p)
r=s.gau(p)
A.Y(r.a,r.b,new A.cC(q),!1)
r=s.gar(p)
A.Y(r.a,r.b,new A.cD(q),!1)
r=s.gaY(p)
A.Y(r.a,r.b,new A.cE(q,l,new A.cI(),new A.cH(q)),!1)
p=s.gaX(p)
A.Y(p.a,p.b,new A.cF(q,new A.cJ(q),o),!1)
A.eo(A.eb(300),new A.cG(q))
q.K(0)
q.F(0)},
gam(a){var s=this.w
return s.gam(s)},
gaj(a){var s=this.w
return s.gaj(s)},
ah(a,b){return new A.A(B.a.i(a,this.a),B.a.i(b,this.b))},
aK(){var s=this,r=s.x
s.CW.Y(0,new A.at(r.c,r.d," ","white"))
s.X()
s.cy=!1},
X(){var s,r,q,p,o,n,m,l,k,j,i,h=this
for(s=h.CW,r=A.eu(s,s.r),q=h.w,p=h.cx,o=8+h.c,n=A.P(r).c;r.l();){m=r.d
if(m==null)m=n.a(m)
l=m.a
k=m.b
if(p.al(m.c)){j=p.p(0,m.c)
j.toString
i=j}else i=$.fb()
q.b0(m.d,i,new A.A(l*o,k*8))}if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.aL()}},
aC(a,b){var s=this.ah(b,a),r=s.a,q=s.b,p=this.ch
if(!(r>=0&&r<p.length))return A.e(p,r)
r=p[r]
if(!(q>=0&&q<r.length))return A.e(r,q)
return r[q].c},
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
if(!(m>=0&&m<q.length))return A.e(q,m)
m=q[m]
if(!(l>=0&&l<m.length))return A.e(m,l)
k=m[l]
k.c=n
k.d=b
p.Y(0,k)
i.sZ(i.d+1)}j.X()
if(d)j.bD()},
G(a,b,c,d){return this.aw(a,b,c,!0,d)},
av(a,b,c){return this.aw(a,null,b,!0,c)},
aZ(a,b){return this.aw(a,null,null,b,null)},
F(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=t.S,f=A.dH(0,0,h.b,h.a,g)
for(s=f.b,r=f.d,q=f.$ti.c,p=q.a(s+r),o=f.a,n=f.c,m=o+n,l=h.ch,k=s;k<p;++k)for(q.a(m),j=o;j<m;++j){if(!(k<l.length))return A.e(l,k)
i=l[k]
if(!(j<i.length))return A.e(i,j)
i=i[j]
i.c=" "
i.d="white"}q=8+h.c
h.w.aU(0,A.dH(o*8,s*q,n*8,r*q,g))
g=h.x
g.c=B.a.i(s,g.a)
g.sZ(o)},
M(a){return this.gam(this).$0()},
K(a){return this.gaj(this).$0()}}
A.cJ.prototype={
$1(a){var s,r=this.a,q=r.w,p=J.fo(a),o=Math.max(Math.min(B.c.E(p.b-1,q.d),q.a-1),0),n=Math.max(Math.min(B.c.E(p.a-1,q.c),q.b-1),0),m=B.a.E(o,8+r.c),l=B.a.v(n,8),k=r.aC(l,m),j=r.ah(m,l)
p=j.a
s=j.b
r=r.ch
if(!(p>=0&&p<r.length))return A.e(r,p)
p=r[p]
if(!(s>=0&&s<p.length))return A.e(p,s)
return new A.aj(m,l,k,p[s].d,o,n,q.b_(n,o))},
$S:19}
A.cI.prototype={
$1(a){var s=a.keyCode
a.key
return new A.T(s)},
$S:20}
A.cH.prototype={
$0(){var s,r,q,p,o=this.a,n=o.a,m=o.b,l=new A.al(n,m),k=o.y
l.su(0,k.gu(k))
k=[]
for(s=o.z,r=s.b;q=l.c,p=l.d,q*m+p<s.c*r+s.d;q=l.c*m+l.d+1,l.c=B.a.i(B.a.E(q,m),n),l.d=B.a.i(q,m))k.push(o.aC(p,q))
return B.e.bz(k,"")},
$S:21}
A.cC.prototype={
$1(a){this.a.w.M(0)},
$S:1}
A.cD.prototype={
$1(a){this.a.w.K(0)},
$S:1}
A.cE.prototype={
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
A.cF.prototype={
$1(a){a.preventDefault()},
$S:23}
A.cG.prototype={
$1(a){var s,r,q,p=this.a,o=p.w
if(o.y&&document.activeElement===o.r&&p.ay===B.A)if(p.cy)p.aK()
else{s=p.x
r=s.c
s=s.d
q=$.fa()
o.b0("white",q,new A.A(r*(8+p.c),s*8))
p.cy=!0}},
$S:5}
A.M.prototype={
T(){return"Value."+this.b}}
A.ag.prototype={
T(){return"GameState."+this.b}}
A.cv.prototype={
bb(a,b,c){var s=this,r=A.fL(s.b,c,!0,0,s.a+1,!1,new A.cw(s))
s.e!==$&&A.id()
s.e=r
A.eo(A.eb(100),new A.cx(s))
r.M(0)},
b6(){var s,r,q,p,o,n=this
switch(n.ay){case B.o:n.a2(0,["Snake!","","Press any key to start!"])
n.ay=B.n
break
case B.q:s=n.e
s===$&&A.p()
r=n.f
s.G("#","red",n.r,r)
n.a2(0,[" Game Over! ",""," Press any key to "," play again! "])
n.ay=B.n
break
case B.p:s=n.c
if(s.length!==0){q=B.e.gaV(s)
B.e.bH(s,q)
s=q.a
if(s===n.y&&q.b===n.z)n.a_()
else{r=n.e
r===$&&A.p()
r.av(" ",q.b,s)}}s=n.ax
s===$&&A.p()
n.at=s
r=n.d
p=n.f
if(!(p>=0&&p<r.length))return A.e(r,p)
p=r[p]
o=n.r
if(!(o>=0&&o<p.length))return A.e(p,o)
p[o]=s
s=n.ch
if(s>0)n.ch=s-1
else n.b3(!1)
n.bx()
s=n.f
if(!(s>=0&&s<r.length))return A.e(r,s)
r=r[s]
p=n.r
o=n.at
if(!(p>=0&&p<r.length))return A.e(r,p)
r[p]=o
o=n.e
o===$&&A.p()
o.G("#","lightgreen",p,s)
break
case B.n:break}},
b3(a){var s,r,q=this,p=q.d,o=q.w
if(!(o>=0&&o<p.length))return A.e(p,o)
p=p[o]
s=q.x
if(!(s>=0&&s<p.length))return A.e(p,s)
r=p[s]
p[s]=B.d
p=q.e
if(a){p===$&&A.p()
p.G("+","red",s,o)
q.c.push(new A.U(q.w,q.x,t.D))}else{p===$&&A.p()
p.av(" ",s,o)}$label0$0:{if(B.j===r){q.w=B.a.i(q.w-1,q.a)
break $label0$0}if(B.k===r){q.w=B.a.i(q.w+1,q.a)
break $label0$0}if(B.l===r){q.x=B.a.i(q.x-1,q.b)
break $label0$0}if(B.m===r){q.x=B.a.i(q.x+1,q.b)
break $label0$0}break $label0$0}},
bx(){var s,r,q,p,o=this
$label0$0:{s=o.at
s===$&&A.p()
if(B.j===s){o.f=B.a.i(o.f-1,o.a)
break $label0$0}if(B.k===s){o.f=B.a.i(o.f+1,o.a)
break $label0$0}if(B.l===s){o.r=B.a.i(o.r-1,o.b)
break $label0$0}if(B.m===s){o.r=B.a.i(o.r+1,o.b)
break $label0$0}break $label0$0}$label1$1:{s=o.d
r=o.f
if(!(r>=0&&r<s.length))return A.e(s,r)
r=s[r]
s=o.r
if(!(s>=0&&s<r.length))return A.e(r,s)
q=r[s]
if(B.t===q){s=o.cx
r=o.as
if(s){o.as=r+30
for(p=0;p<5;++p)o.b3(!0)}else{s=o.Q
o.as=r+(s<10?s:20);++o.ch}o.aB()
break $label1$1}if(B.u===q){o.ch+=3
break $label1$1}if(B.d===q)break $label1$1
o.ay=B.q}},
a2(a,b){return this.bR(0,b)},
bR(a,b){var s=0,r=A.hA(t.z),q=this,p,o,n,m,l,k
var $async$a2=A.hL(function(c,d){if(c===1)return A.he(d,r)
while(true)switch(s){case 0:l=b.length
k=B.a.v(q.a-l,2)
for(p=q.b,o=0;o<b.length;b.length===l||(0,A.dw)(b),++o){n=b[o]
m=q.e
m===$&&A.p()
m.G(n,"white",B.a.v(p-n.length,2),k);++k}return A.hf(null,r)}})
return A.hg($async$a2,r)},
bC(){var s,r,q,p,o,n=this,m=n.a,l=m/2|0
n.f=l
s=n.b
r=s/2|0
n.r=r
n.w=l
n.x=r
n.CW=n.as=0
n.cx=!1
for(l=n.d,r=l.length,q=0;q<m;++q)for(p=0;p<s;++p){if(!(q<r))return A.e(l,q)
o=l[q]
if(!(p<o.length))return A.e(o,p)
o[p]=B.d}m=[B.j,B.k,B.l,B.m]
s=$.dy().N(4)
if(!(s>=0&&s<4))return A.e(m,s)
s=m[s]
n.ax=n.at=s
m=n.f
if(!(m>=0&&m<l.length))return A.e(l,m)
m=l[m]
l=n.r
if(!(l>=0&&l<m.length))return A.e(m,l)
m[l]=s
n.aB()
n.ay=B.p},
aQ(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.a,d=f.b,c=f.d
do{s=$.dy()
r=s.N(e)
q=s.N(d)
if(!(r>=0&&r<c.length))return A.e(c,r)
s=c[r]
if(!(q>=0&&q<s.length))return A.e(s,q)}while(s[q]!==B.d&&Math.abs(r-f.f)+Math.abs(q-f.r)<10)
for(s=[[-1,0],[1,0],[0,0],[0,-1],[0,1]],p=0;p<5;++p){o=s[p]
n=B.e.gaV(o)
if(typeof n!=="number")return A.eY(n)
m=B.c.i(r+n,e)
n=B.e.gbA(o)
if(typeof n!=="number")return A.eY(n)
l=B.c.i(q+n,d)
if(m>>>0!==m||m>=c.length)return A.e(c,m)
n=c[m]
if(l>>>0!==l||l>=n.length)return A.e(n,l)
if(n[l]===B.d)if(m===r||l===q){n[l]=B.u
n=f.e
n===$&&A.p()
k=B.a.i(m,n.a)
j=B.a.i(l,n.b)
i=n.ch
if(!(k<i.length))return A.e(i,k)
h=i[k]
if(!(j<h.length))return A.e(h,j)
h=h[j]
h.c="x"
g=n.CW
g.Y(0,h)
n.X()
if(!(k<i.length))return A.e(i,k)
k=i[k]
if(!(j<k.length))return A.e(k,j)
j=k[j]
j.d="red"
g.Y(0,j)
n.X()}}},
a_(){var s,r=this,q=r.cx,p=r.e
if(q){p===$&&A.p()
q=r.y
p.G("P","gold",r.z,q)}else{p===$&&A.p()
q=r.Q
q=q<10?""+q:"o"
s=r.y
p.G(q,"gold",r.z,s)}},
aB(){var s,r,q=this,p="Score: "+q.as,o=q.b,n=o-p.length,m=B.a.v(n,2),l=q.e
l===$&&A.p()
s=q.a
l.G(B.f.a5(" ",m)+p+B.f.a5(" ",n-m),"white",0,s)
n=q.d
do{l=$.dy()
q.y=l.N(s)
l=l.N(o)
q.z=l
r=q.y
if(!(r>=0&&r<n.length))return A.e(n,r)
r=n[r]
if(!(l>=0&&l<r.length))return A.e(r,l)}while(r[l]!==B.d)
r[l]=B.t
if(++q.CW%10===0){q.cx=!0
q.Q=3
q.a_()}else{q.cx=!1
q.Q=11
q.a_()}if(B.a.i(q.CW,13)===0)q.aQ()}}
A.cw.prototype={
$2(a,b){var s,r,q,p=this.a,o=new A.cy(p)
$label0$0:{s=p.ay
if(B.q===s||B.o===s)break $label0$0
if(B.n===s){r=p.e
r===$&&A.p()
r.F(0)
p.bC()
break $label0$0}if(B.p===s){switch(b.a){case 38:r=p.ax
r===$&&A.p()
if(r!==B.k&&r!==B.j&&o.$2(p.f-1,p.r)){p.ax=B.j;--p.Q}break
case 40:r=p.ax
r===$&&A.p()
if(r!==B.j&&r!==B.k&&o.$2(p.f+1,p.r)){p.ax=B.k;--p.Q}break
case 37:r=p.ax
r===$&&A.p()
if(r!==B.m&&r!==B.l&&o.$2(p.f,p.r-1)){p.ax=B.l;--p.Q}break
case 39:r=p.ax
r===$&&A.p()
if(r!==B.l&&r!==B.m&&o.$2(p.f,p.r+1)){p.ax=B.m;--p.Q}break}if(p.Q===0){p.ch=p.cx?0:1
r=p.e
r===$&&A.p()
q=p.y
r.av(" ",p.z,q)
q=p.d
r=p.y
if(!(r>=0&&r<q.length))return A.e(q,r)
r=q[r]
q=p.z
if(!(q>=0&&q<r.length))return A.e(r,q)
r[q]=B.d
if(!p.cx)p.aQ()
p.aB()}else p.a_()
break $label0$0}}},
$S:24}
A.cy.prototype={
$2(a,b){var s=this.a,r=s.d,q=B.a.i(a,s.a)
if(!(q<r.length))return A.e(r,q)
q=r[q]
s=B.a.i(b,s.b)
if(!(s<q.length))return A.e(q,s)
return B.e.bt([B.t,B.u,B.d],q[s])},
$S:25}
A.cx.prototype={
$1(a){var s=this.a,r=s.e
r===$&&A.p()
r=r.w
if(r.y&&document.activeElement===r.r)s.b6()},
$S:5};(function aliases(){var s=J.ay.prototype
s.b8=s.h
s=J.a5.prototype
s.b9=s.h})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._instance_0i
s(A,"hN","fN",3)
s(A,"hO","fO",3)
s(A,"hP","fP",3)
r(A,"eT","hG",0)
var p
q(p=A.bA.prototype,"gam","M",0)
q(p,"gaj","K",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.j,null)
q(A.j,[A.dD,J.ay,J.ac,A.i,A.cu,A.br,A.bl,A.bu,A.bJ,A.bg,A.ap,A.bd,A.cL,A.cn,A.av,A.aT,A.a3,A.bs,A.ck,A.y,A.bT,A.c3,A.aU,A.bK,A.b9,A.bN,A.ao,A.m,A.bM,A.aI,A.c1,A.dg,A.bC,A.d9,A.aP,A.a6,A.be,A.cT,A.bx,A.aH,A.cV,A.q,A.c2,A.bE,A.ce,A.dA,A.bS,A.ax,A.aw,A.cS,A.d7,A.U,A.c_,A.at,A.T,A.aj,A.al,A.bA,A.aJ,A.cv])
q(J.ay,[J.bm,J.aA,J.w,J.aB,J.ah])
q(J.w,[J.a5,J.H,A.bv,A.ae,A.bP,A.cf,A.au,A.a,A.bU,A.bX])
q(J.a5,[J.by,J.aK,J.I])
r(J.cj,J.H)
q(J.aB,[J.az,J.bn])
q(A.i,[A.ai,A.K,A.bq,A.bG,A.bQ,A.bz,A.bR,A.b7,A.G,A.bH,A.bF,A.bD,A.bb])
q(A.bl,[A.bt,A.bI])
r(A.bZ,A.ap)
r(A.A,A.bZ)
r(A.bi,A.bd)
r(A.aE,A.K)
q(A.a3,[A.cc,A.cd,A.cB,A.dr,A.dt,A.cO,A.cN,A.dh,A.d_,A.d6,A.cA,A.dc,A.cU,A.ch,A.ci,A.cq,A.cr,A.cs,A.ct,A.cJ,A.cI,A.cC,A.cD,A.cE,A.cF,A.cG,A.cx])
q(A.cB,[A.cz,A.as])
r(A.bp,A.bs)
r(A.bo,A.bp)
q(A.cd,[A.ds,A.di,A.dl,A.d0,A.cm,A.cp,A.cw,A.cy])
r(A.ak,A.bv)
r(A.aQ,A.ak)
r(A.aR,A.aQ)
r(A.aC,A.aR)
r(A.bw,A.aC)
r(A.aV,A.bR)
q(A.cc,[A.cP,A.cQ,A.de,A.dd,A.cW,A.d2,A.d1,A.cZ,A.cY,A.cX,A.d5,A.d4,A.d3,A.dk,A.db,A.cH])
r(A.bL,A.bN)
r(A.da,A.dg)
r(A.c0,A.bC)
r(A.bW,A.c0)
q(A.G,[A.am,A.bj])
r(A.h,A.ae)
q(A.h,[A.o,A.B])
q(A.o,[A.c,A.b])
q(A.c,[A.b5,A.b6,A.ba,A.bh,A.bB])
r(A.ad,A.bP)
q(A.a6,[A.cR,A.bO,A.bf])
r(A.bV,A.bU)
r(A.a4,A.bV)
r(A.E,A.a)
q(A.E,[A.C,A.u])
r(A.bY,A.bX)
r(A.aD,A.bY)
r(A.aM,A.au)
r(A.aN,A.aI)
r(A.r,A.aN)
r(A.J,A.c_)
q(A.cT,[A.D,A.an,A.M,A.ag])
s(A.aQ,A.a6)
s(A.aR,A.bg)
s(A.bP,A.ce)
s(A.bU,A.a6)
s(A.bV,A.ax)
s(A.bX,A.a6)
s(A.bY,A.ax)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{n:"int",hS:"double",R:"num",W:"String",c6:"bool",q:"Null",ee:"List"},mangledNames:{},types:["~()","~(a)","q()","~(~())","q(@)","~(cK)","@(@)","@(@,W)","@(W)","q(~())","~(@)","q(@,V)","~(n,@)","q(j,V)","m<@>(@)","~(j?,j?)","c6(h)","o(h)","n(n,n)","aj(u)","T(C)","W()","~(C)","~(u)","~(aJ,T)","c6(n,n)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.A&&a.b(c.a)&&b.b(c.b)}}
A.h9(v.typeUniverse,JSON.parse('{"by":"a5","aK":"a5","I":"a5","ih":"a","iu":"a","ig":"b","iw":"b","ii":"c","iA":"c","ix":"h","it":"h","iB":"u","ik":"E","ij":"B","iG":"B","iz":"o","iy":"a4","bm":{"z":[]},"aA":{"q":[],"z":[]},"aB":{"R":[]},"az":{"n":[],"R":[],"z":[]},"bn":{"R":[],"z":[]},"ah":{"W":[],"z":[]},"ai":{"i":[]},"aE":{"K":[],"i":[]},"bq":{"i":[]},"bG":{"i":[]},"aT":{"V":[]},"bQ":{"i":[]},"bz":{"i":[]},"ak":{"S":["1"]},"aC":{"S":["n"]},"bw":{"S":["n"],"z":[]},"bR":{"i":[]},"aV":{"K":[],"i":[]},"m":{"af":["1"]},"aU":{"cK":[]},"b9":{"i":[]},"n":{"R":[]},"b7":{"i":[]},"K":{"i":[]},"G":{"i":[]},"am":{"i":[]},"bj":{"i":[]},"bH":{"i":[]},"bF":{"i":[]},"bD":{"i":[]},"bb":{"i":[]},"bx":{"i":[]},"aH":{"i":[]},"c2":{"V":[]},"o":{"h":[]},"C":{"a":[]},"u":{"a":[]},"c":{"o":[],"h":[]},"b5":{"o":[],"h":[]},"b6":{"o":[],"h":[]},"ba":{"o":[],"h":[]},"B":{"h":[]},"au":{"J":["R"]},"bh":{"o":[],"h":[]},"a4":{"S":["h"]},"aD":{"S":["h"]},"bB":{"o":[],"h":[]},"E":{"a":[]},"aM":{"J":["R"]},"aN":{"aI":["1"]},"r":{"aN":["1"],"aI":["1"]},"J":{"c_":["1"]},"b":{"o":[],"h":[]}}'))
A.h8(v.typeUniverse,JSON.parse('{"H":1,"cj":1,"ac":1,"br":1,"bt":2,"bu":2,"bI":1,"bJ":1,"bg":1,"bd":2,"bi":2,"bp":2,"bo":2,"ak":1,"bN":1,"c1":1,"bW":1,"aP":1,"a6":1,"bs":2,"bC":1,"c0":1,"ee":1,"bl":1,"bS":1,"ax":1,"aw":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.hV
return{h:s("o"),Q:s("i"),B:s("a"),Z:s("iv"),b:s("H<@>"),T:s("aA"),g:s("I"),p:s("S<@>"),U:s("T"),m:s("aj"),P:s("q"),K:s("j"),D:s("U<n>"),H:s("U<R>"),I:s("iC"),F:s("+()"),q:s("J<R>"),l:s("V"),N:s("W"),G:s("cK"),k:s("z"),c:s("K"),o:s("aK"),E:s("r<a>"),L:s("r<C>"),R:s("r<u>"),d:s("m<@>"),a:s("m<n>"),y:s("c6"),i:s("hS"),z:s("@"),v:s("@(j)"),C:s("@(j,V)"),S:s("n"),A:s("0&*"),_:s("j*"),O:s("af<q>?"),X:s("j?"),n:s("R")}})();(function constants(){var s=hunkHelpers.makeConstList
B.i=A.ad.prototype
B.K=J.ay.prototype
B.e=J.H.prototype
B.a=J.az.prototype
B.c=J.aB.prototype
B.f=J.ah.prototype
B.L=J.I.prototype
B.M=J.w.prototype
B.y=J.by.prototype
B.r=J.aK.prototype
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

B.H=new A.bx()
B.h=new A.cu()
B.I=new A.d7()
B.b=new A.da()
B.J=new A.c2()
B.o=new A.ag("titleScreen")
B.n=new A.ag("wait")
B.p=new A.ag("play")
B.q=new A.ag("gameOver")
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
B.dQ=new A.bi(["\u263a",B.aa,"\u263b",B.U,"\u2665",B.ab,"\u2666",B.ac,"\u2663",B.bY,"\u2660",B.cy,"\u2022",B.cJ,"\u25d8",B.dO,"\u25cb",B.cU,"\u25d9",B.dN,"\u2642",B.d4,"\u2640",B.df,"\u266a",B.dr,"\u266b",B.dC,"\u263c",B.a5,"\u25ba",B.ad,"\u25c4",B.ao,"\u2195",B.az,"\u203c",B.aK,"\xb6",B.aV,"\xa7",B.b5,"\u25ac",B.bg,"\u21a8",B.a8,"\u2191",B.br,"\u2193",B.bC,"\u2192",B.bN,"\u2190",B.bZ,"\u221f",B.c9,"\u2194",B.X,"\u25b2",B.a6,"\u25bc",B.V," ",B.ck,"!",B.cr,'"',B.cs,"#",B.ct,"$",B.cu,"%",B.cv,"&",B.cw,"'",B.cx,"(",B.cz,")",B.cA,"*",B.Y,"+",B.cB,",",B.cC,"-",B.cD,".",B.cE,"/",B.cF,"0",B.cG,"1",B.cH,"2",B.cI,"3",B.cK,"4",B.cL,"5",B.cM,"6",B.cN,"7",B.cO,"8",B.cP,"9",B.cQ,":",B.cR,";",B.cS,"<",B.cT,"=",B.cV,">",B.cW,"?",B.cX,"@",B.cY,"A",B.cZ,"B",B.d_,"C",B.d0,"D",B.d1,"E",B.d2,"F",B.d3,"G",B.d5,"H",B.d6,"I",B.d7,"J",B.d8,"K",B.d9,"L",B.da,"M",B.db,"N",B.dc,"O",B.dd,"P",B.de,"Q",B.dg,"R",B.dh,"S",B.di,"T",B.dj,"U",B.dk,"V",B.dl,"W",B.dm,"X",B.dn,"Y",B.dp,"Z",B.dq,"[",B.ds,"\\",B.dt,"]",B.du,"^",B.dv,"_",B.a9,"`",B.dw,"a",B.dx,"b",B.dy,"c",B.dz,"d",B.dA,"e",B.dB,"f",B.dD,"g",B.dE,"h",B.dF,"i",B.dG,"j",B.dH,"k",B.dI,"l",B.dJ,"m",B.dK,"n",B.dL,"o",B.dM,"p",B.ae,"q",B.af,"r",B.ag,"s",B.ah,"t",B.ai,"u",B.aj,"v",B.ak,"w",B.al,"x",B.am,"y",B.an,"z",B.ap,"{",B.aq,"|",B.ar,"}",B.as,"~",B.at,"\u2302",B.au,"\xc7",B.av,"\xfc",B.aw,"\xe9",B.ax,"\xe2",B.ay,"\xe4",B.aA,"\xe0",B.aB,"\xe5",B.aC,"\xe7",B.aD,"\xea",B.aE,"\xeb",B.aF,"\xe8",B.aG,"\xef",B.aH,"\xee",B.aI,"\xec",B.aJ,"\xc4",B.aL,"\xc5",B.aM,"\xc9",B.aN,"\xe6",B.aO,"\xc6",B.aP,"\xf4",B.aQ,"\xf6",B.aR,"\xf2",B.aS,"\xfb",B.aT,"\xf9",B.aU,"\xff",B.aW,"\xd6",B.aX,"\xdc",B.aY,"\xa2",B.aZ,"\xa3",B.b_,"\xa5",B.b0,"\u20a7",B.b1,"\u0192",B.b2,"\xe1",B.b3,"\xed",B.b4,"\xf3",B.b6,"\xfa",B.b7,"\xf1",B.b8,"\xd1",B.b9,"\xaa",B.ba,"\xba",B.bb,"\xbf",B.bc,"\u2310",B.bd,"\xac",B.be,"\xbd",B.bf,"\xbc",B.bh,"\xa1",B.bi,"\xab",B.bj,"\xbb",B.bk,"\u2591",B.bl,"\u2592",B.bm,"\u2593",B.bn,"\u2502",B.bo,"\u2524",B.bp,"\u2561",B.bq,"\u2562",B.bs,"\u2556",B.bt,"\u2555",B.bu,"\u2563",B.bv,"\u2551",B.bw,"\u2557",B.bx,"\u255d",B.by,"\u255c",B.bz,"\u255b",B.bA,"\u2510",B.bB,"\u2514",B.bD,"\u2534",B.N,"\u252c",B.O,"\u251c",B.bE,"\u2500",B.P,"\u253c",B.Q,"\u255e",B.bF,"\u255f",B.bG,"\u255a",B.bH,"\u2554",B.bI,"\u2569",B.Z,"\u2566",B.a_,"\u2560",B.bJ,"\u2550",B.a0,"\u256c",B.a1,"\u2567",B.a2,"\u2568",B.R,"\u2564",B.a3,"\u2565",B.S,"\u2559",B.bK,"\u2558",B.bL,"\u2552",B.bM,"\u2553",B.bO,"\u256b",B.T,"\u256a",B.a4,"\u2518",B.bP,"\u250c",B.bQ,"\u2588",B.dP,"\u2584",B.a7,"\u258c",B.bR,"\u2590",B.bS,"\u2580",B.W,"\u03b1",B.bT,"\xdf",B.bU,"\u0393",B.bV,"\u03c0",B.bW,"\u03a3",B.bX,"\u03c3",B.c_,"\xb5",B.c0,"\u03c4",B.c1,"\u03a6",B.c2,"\u0398",B.c3,"\u03a9",B.c4,"\u03b4",B.c5,"\u221e",B.c6,"\u03c6",B.c7,"\u03b5",B.c8,"\u2229",B.ca,"\u2261",B.cb,"\xb1",B.cc,"\u2265",B.cd,"\u2264",B.ce,"\u2320",B.cf,"\u2321",B.cg,"\xf7",B.ch,"\u2248",B.ci,"\xb0",B.cj,"\u2219",B.cl,"\xb7",B.cm,"\u221a",B.cn,"\u207f",B.co,"\xb2",B.cp,"\u25a0",B.cq])
B.x=new A.D("replace")
B.dR=new A.D("inverse")
B.dS=new A.D("over")
B.dT=new A.D("under")
B.dU=new A.D("stain")
B.dV=new A.D("delete")
B.dW=new A.D("maskDestination")
B.dX=new A.D("maskSource")
B.z=new A.an("ready")
B.dY=new A.an("awaitingKey")
B.A=new A.an("awaitingString")
B.dZ=new A.an("awaitingMouseClick")
B.e_=A.f2("j")
B.e0=A.f2("iR")
B.d=new A.M("nothing")
B.t=new A.M("apple")
B.j=new A.M("up")
B.k=new A.M("down")
B.l=new A.M("left")
B.m=new A.M("right")
B.u=new A.M("brick")})();(function staticFields(){$.d8=null
$.x=[]
$.eg=null
$.e7=null
$.e6=null
$.eX=null
$.eS=null
$.f0=null
$.dp=null
$.du=null
$.dW=null
$.aS=[]
$.aq=null
$.b_=null
$.b0=null
$.dS=!1
$.k=B.b})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"im","f5",()=>A.hW("_$dart_dartClosure"))
s($,"iH","fc",()=>A.L(A.cM({
toString:function(){return"$receiver$"}})))
s($,"iI","fd",()=>A.L(A.cM({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"iJ","fe",()=>A.L(A.cM(null)))
s($,"iK","ff",()=>A.L(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"iN","fi",()=>A.L(A.cM(void 0)))
s($,"iO","fj",()=>A.L(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"iM","fh",()=>A.L(A.eq(null)))
s($,"iL","fg",()=>A.L(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"iQ","fl",()=>A.L(A.eq(void 0)))
s($,"iP","fk",()=>A.L(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"iS","e1",()=>A.fM())
s($,"j8","dx",()=>A.dZ(B.e_))
s($,"il","f4",()=>({}))
s($,"ir","e0",()=>B.f.ak(A.dz(),"Opera",0))
s($,"iq","f8",()=>!$.e0()&&B.f.ak(A.dz(),"Trident/",0))
s($,"ip","f7",()=>B.f.ak(A.dz(),"Firefox",0))
s($,"io","f6",()=>"-"+$.f9()+"-")
s($,"is","f9",()=>{if($.f7())var r="moz"
else if($.f8())r="ms"
else r=$.e0()?"o":"webkit"
return r})
s($,"iF","fb",()=>A.cl(8,0,!1))
s($,"iE","fa",()=>A.cl(8,255,!1))
s($,"jb","dy",()=>B.I)})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasRenderingContext2D:J.w,DOMError:J.w,MediaError:J.w,Navigator:J.w,NavigatorConcurrentHardware:J.w,NavigatorUserMediaError:J.w,OverconstrainedError:J.w,PositionError:J.w,GeolocationPositionError:J.w,ArrayBufferView:A.bv,Uint32Array:A.bw,HTMLAudioElement:A.c,HTMLBRElement:A.c,HTMLBaseElement:A.c,HTMLButtonElement:A.c,HTMLCanvasElement:A.c,HTMLContentElement:A.c,HTMLDListElement:A.c,HTMLDataElement:A.c,HTMLDataListElement:A.c,HTMLDetailsElement:A.c,HTMLDialogElement:A.c,HTMLDivElement:A.c,HTMLEmbedElement:A.c,HTMLFieldSetElement:A.c,HTMLHRElement:A.c,HTMLHeadElement:A.c,HTMLHeadingElement:A.c,HTMLHtmlElement:A.c,HTMLIFrameElement:A.c,HTMLImageElement:A.c,HTMLInputElement:A.c,HTMLLIElement:A.c,HTMLLabelElement:A.c,HTMLLegendElement:A.c,HTMLLinkElement:A.c,HTMLMapElement:A.c,HTMLMediaElement:A.c,HTMLMenuElement:A.c,HTMLMetaElement:A.c,HTMLMeterElement:A.c,HTMLModElement:A.c,HTMLOListElement:A.c,HTMLObjectElement:A.c,HTMLOptGroupElement:A.c,HTMLOptionElement:A.c,HTMLOutputElement:A.c,HTMLParagraphElement:A.c,HTMLParamElement:A.c,HTMLPictureElement:A.c,HTMLPreElement:A.c,HTMLProgressElement:A.c,HTMLQuoteElement:A.c,HTMLScriptElement:A.c,HTMLShadowElement:A.c,HTMLSlotElement:A.c,HTMLSourceElement:A.c,HTMLSpanElement:A.c,HTMLStyleElement:A.c,HTMLTableCaptionElement:A.c,HTMLTableCellElement:A.c,HTMLTableDataCellElement:A.c,HTMLTableHeaderCellElement:A.c,HTMLTableColElement:A.c,HTMLTableElement:A.c,HTMLTableRowElement:A.c,HTMLTableSectionElement:A.c,HTMLTemplateElement:A.c,HTMLTextAreaElement:A.c,HTMLTimeElement:A.c,HTMLTitleElement:A.c,HTMLTrackElement:A.c,HTMLUListElement:A.c,HTMLUnknownElement:A.c,HTMLVideoElement:A.c,HTMLDirectoryElement:A.c,HTMLFontElement:A.c,HTMLFrameElement:A.c,HTMLFrameSetElement:A.c,HTMLMarqueeElement:A.c,HTMLElement:A.c,HTMLAnchorElement:A.b5,HTMLAreaElement:A.b6,HTMLBodyElement:A.ba,CDATASection:A.B,CharacterData:A.B,Comment:A.B,ProcessingInstruction:A.B,Text:A.B,CSSStyleDeclaration:A.ad,MSStyleCSSProperties:A.ad,CSS2Properties:A.ad,DOMException:A.cf,DOMRectReadOnly:A.au,MathMLElement:A.o,Element:A.o,AbortPaymentEvent:A.a,AnimationEvent:A.a,AnimationPlaybackEvent:A.a,ApplicationCacheErrorEvent:A.a,BackgroundFetchClickEvent:A.a,BackgroundFetchEvent:A.a,BackgroundFetchFailEvent:A.a,BackgroundFetchedEvent:A.a,BeforeInstallPromptEvent:A.a,BeforeUnloadEvent:A.a,BlobEvent:A.a,CanMakePaymentEvent:A.a,ClipboardEvent:A.a,CloseEvent:A.a,CustomEvent:A.a,DeviceMotionEvent:A.a,DeviceOrientationEvent:A.a,ErrorEvent:A.a,ExtendableEvent:A.a,ExtendableMessageEvent:A.a,FetchEvent:A.a,FontFaceSetLoadEvent:A.a,ForeignFetchEvent:A.a,GamepadEvent:A.a,HashChangeEvent:A.a,InstallEvent:A.a,MediaEncryptedEvent:A.a,MediaKeyMessageEvent:A.a,MediaQueryListEvent:A.a,MediaStreamEvent:A.a,MediaStreamTrackEvent:A.a,MessageEvent:A.a,MIDIConnectionEvent:A.a,MIDIMessageEvent:A.a,MutationEvent:A.a,NotificationEvent:A.a,PageTransitionEvent:A.a,PaymentRequestEvent:A.a,PaymentRequestUpdateEvent:A.a,PopStateEvent:A.a,PresentationConnectionAvailableEvent:A.a,PresentationConnectionCloseEvent:A.a,ProgressEvent:A.a,PromiseRejectionEvent:A.a,PushEvent:A.a,RTCDataChannelEvent:A.a,RTCDTMFToneChangeEvent:A.a,RTCPeerConnectionIceEvent:A.a,RTCTrackEvent:A.a,SecurityPolicyViolationEvent:A.a,SensorErrorEvent:A.a,SpeechRecognitionError:A.a,SpeechRecognitionEvent:A.a,SpeechSynthesisEvent:A.a,StorageEvent:A.a,SyncEvent:A.a,TrackEvent:A.a,TransitionEvent:A.a,WebKitTransitionEvent:A.a,VRDeviceEvent:A.a,VRDisplayEvent:A.a,VRSessionEvent:A.a,MojoInterfaceRequestEvent:A.a,ResourceProgressEvent:A.a,USBConnectionEvent:A.a,IDBVersionChangeEvent:A.a,AudioProcessingEvent:A.a,OfflineAudioCompletionEvent:A.a,WebGLContextEvent:A.a,Event:A.a,InputEvent:A.a,SubmitEvent:A.a,Window:A.ae,DOMWindow:A.ae,EventTarget:A.ae,HTMLFormElement:A.bh,HTMLCollection:A.a4,HTMLFormControlsCollection:A.a4,HTMLOptionsCollection:A.a4,KeyboardEvent:A.C,MouseEvent:A.u,DragEvent:A.u,PointerEvent:A.u,WheelEvent:A.u,Document:A.h,DocumentFragment:A.h,HTMLDocument:A.h,ShadowRoot:A.h,XMLDocument:A.h,Attr:A.h,DocumentType:A.h,Node:A.h,NodeList:A.aD,RadioNodeList:A.aD,HTMLSelectElement:A.bB,CompositionEvent:A.E,FocusEvent:A.E,TextEvent:A.E,TouchEvent:A.E,UIEvent:A.E,ClientRect:A.aM,DOMRect:A.aM,SVGAElement:A.b,SVGAnimateElement:A.b,SVGAnimateMotionElement:A.b,SVGAnimateTransformElement:A.b,SVGAnimationElement:A.b,SVGCircleElement:A.b,SVGClipPathElement:A.b,SVGDefsElement:A.b,SVGDescElement:A.b,SVGDiscardElement:A.b,SVGEllipseElement:A.b,SVGFEBlendElement:A.b,SVGFEColorMatrixElement:A.b,SVGFEComponentTransferElement:A.b,SVGFECompositeElement:A.b,SVGFEConvolveMatrixElement:A.b,SVGFEDiffuseLightingElement:A.b,SVGFEDisplacementMapElement:A.b,SVGFEDistantLightElement:A.b,SVGFEFloodElement:A.b,SVGFEFuncAElement:A.b,SVGFEFuncBElement:A.b,SVGFEFuncGElement:A.b,SVGFEFuncRElement:A.b,SVGFEGaussianBlurElement:A.b,SVGFEImageElement:A.b,SVGFEMergeElement:A.b,SVGFEMergeNodeElement:A.b,SVGFEMorphologyElement:A.b,SVGFEOffsetElement:A.b,SVGFEPointLightElement:A.b,SVGFESpecularLightingElement:A.b,SVGFESpotLightElement:A.b,SVGFETileElement:A.b,SVGFETurbulenceElement:A.b,SVGFilterElement:A.b,SVGForeignObjectElement:A.b,SVGGElement:A.b,SVGGeometryElement:A.b,SVGGraphicsElement:A.b,SVGImageElement:A.b,SVGLineElement:A.b,SVGLinearGradientElement:A.b,SVGMarkerElement:A.b,SVGMaskElement:A.b,SVGMetadataElement:A.b,SVGPathElement:A.b,SVGPatternElement:A.b,SVGPolygonElement:A.b,SVGPolylineElement:A.b,SVGRadialGradientElement:A.b,SVGRectElement:A.b,SVGScriptElement:A.b,SVGSetElement:A.b,SVGStopElement:A.b,SVGStyleElement:A.b,SVGElement:A.b,SVGSVGElement:A.b,SVGSwitchElement:A.b,SVGSymbolElement:A.b,SVGTSpanElement:A.b,SVGTextContentElement:A.b,SVGTextElement:A.b,SVGTextPathElement:A.b,SVGTextPositioningElement:A.b,SVGTitleElement:A.b,SVGUseElement:A.b,SVGViewElement:A.b,SVGGradientElement:A.b,SVGComponentTransferFunctionElement:A.b,SVGFEDropShadowElement:A.b,SVGMPathElement:A.b})
hunkHelpers.setOrUpdateLeafTags({CanvasRenderingContext2D:true,DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,ArrayBufferView:false,Uint32Array:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DOMException:true,DOMRectReadOnly:false,MathMLElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,Window:true,DOMWindow:true,EventTarget:false,HTMLFormElement:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,KeyboardEvent:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,HTMLSelectElement:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,ClientRect:true,DOMRect:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true})
A.ak.$nativeSuperclassTag="ArrayBufferView"
A.aQ.$nativeSuperclassTag="ArrayBufferView"
A.aR.$nativeSuperclassTag="ArrayBufferView"
A.aC.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=A.i6
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=snake.js.map
