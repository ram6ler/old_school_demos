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
a[c]=function(){a[c]=function(){A.iK(b)}
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
if(a[b]!==s)A.iM(b)
a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.ee(b)
return new s(c,this)}:function(){if(s===null)s=A.ee(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.ee(a).prototype
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
a(hunkHelpers,v,w,$)}var A={dW:function dW(){},
V(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
e2(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
eJ(a,b,c){return A.e2(A.V(A.V(c,a),b))},
eK(a,b,c,d,e){return A.e2(A.V(A.V(A.V(A.V(e,a),b),c),d))},
dz(a,b,c){return a},
eh(a){var s,r
for(s=$.aa.length,r=0;r<s;++r)if(a===$.aa[r])return!0
return!1},
h_(){return new A.a7("No element")},
bu:function bu(a){this.a=a},
dN:function dN(){},
cC:function cC(){},
bw:function bw(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
by:function by(a,b){this.a=a
this.b=b},
bz:function bz(a,b){this.a=null
this.b=a
this.c=b},
bN:function bN(a,b){this.a=a
this.b=b},
bO:function bO(a,b){this.a=a
this.b=b},
bk:function bk(){},
fr(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
iE(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
e(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.b7(a)
return s},
aj(a){var s,r=$.eC
if(r==null)r=$.eC=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
cw(a){return A.h9(a)},
h9(a){var s,r,q,p
if(a instanceof A.f)return A.t(A.cf(a),null)
s=J.a9(a)
if(s===B.z||s===B.B||t.o.b(a)){r=B.l(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.t(A.cf(a),null)},
eD(a){if(a==null||typeof a=="number"||A.e9(a))return J.b7(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.a2)return a.h(0)
if(a instanceof A.ao)return a.aZ(!0)
return"Instance of '"+A.cw(a)+"'"},
ir(a,b){var s,r="index"
if(!A.f8(b))return new A.G(!0,b,r,null)
s=J.dR(a)
if(b<0||b>=s)return A.bo(b,s,a,r)
return new A.aH(null,null,!0,b,r,"Value not in range")},
ec(a){return new A.G(!0,a,null,null)},
d(a){return A.fm(new Error(),a)},
fm(a,b){var s
if(b==null)b=new A.L()
a.dartException=b
s=A.iN
if("defineProperty" in Object){Object.defineProperty(a,"message",{get:s})
a.name=""}else a.toString=s
return a},
iN(){return J.b7(this.dartException)},
ek(a){throw A.d(a)},
iL(a,b){throw A.fm(b,a)},
b5(a){throw A.d(A.ac(a))},
M(a){var s,r,q,p,o,n
a=A.iI(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=[]
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.cT(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
cU(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
eM(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
dX(a,b){var s=b==null,r=s?null:b.method
return new A.bt(a,r,s?null:b.receiver)},
S(a){if(a==null)return new A.cv(a)
if(a instanceof A.av)return A.a1(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.a1(a,a.dartException)
return A.ii(a)},
a1(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
ii(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.a.bP(r,16)&8191)===10)switch(q){case 438:return A.a1(a,A.dX(A.e(s)+" (Error "+q+")",e))
case 445:case 5007:p=A.e(s)
return A.a1(a,new A.aF(p+" (Error "+q+")",e))}}if(a instanceof TypeError){o=$.fA()
n=$.fB()
m=$.fC()
l=$.fD()
k=$.fG()
j=$.fH()
i=$.fF()
$.fE()
h=$.fJ()
g=$.fI()
f=o.v(s)
if(f!=null)return A.a1(a,A.dX(s,f))
else{f=n.v(s)
if(f!=null){f.method="call"
return A.a1(a,A.dX(s,f))}else{f=m.v(s)
if(f==null){f=l.v(s)
if(f==null){f=k.v(s)
if(f==null){f=j.v(s)
if(f==null){f=i.v(s)
if(f==null){f=l.v(s)
if(f==null){f=h.v(s)
if(f==null){f=g.v(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return A.a1(a,new A.aF(s,f==null?e:f.method))}}return A.a1(a,new A.bL(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.aI()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return A.a1(a,new A.G(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.aI()
return a},
P(a){var s
if(a instanceof A.av)return a.b
if(a==null)return new A.aU(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new A.aU(a)},
ej(a){if(a==null)return J.F(a)
if(typeof a=="object")return A.aj(a)
return J.F(a)},
ip(a){if(typeof a=="number")return B.c.gi(a)
if(a instanceof A.cc)return A.aj(a)
if(a instanceof A.ao)return a.gi(a)
return A.ej(a)},
fj(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=a.length
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
if(m==null)o[q]=b.V(q,p)
else m.b=p}else if(typeof q=="number"&&(q&0x3fffffff)===q){l=b.c
if(l==null){n=Object.create(null)
n["<non-identifier-key>"]=n
delete n["<non-identifier-key>"]
b.c=n
l=n}m=l[q]
if(m==null)l[q]=b.V(q,p)
else m.b=p}else{k=b.d
if(k==null){n=Object.create(null)
n["<non-identifier-key>"]=n
delete n["<non-identifier-key>"]
b.d=n
k=n}j=b.aw(q)
i=k[j]
if(i==null)k[j]=[b.V(q,p)]
else{r=b.az(i,q)
if(r>=0)i[r].b=p
else i.push(b.V(q,p))}}}return b},
iD(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(A.ex("Unsupported number of arguments for wrapped closure"))},
ar(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.iD)
a.$identity=s
return s},
fX(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.cD().constructor.prototype):Object.create(new A.as(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else r=function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.ew(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.fT(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.ew(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
fT(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.fR)}throw A.d("Error in functionType of tearoff")},
fU(a,b,c,d){var s=A.eu
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
ew(a,b,c,d){var s,r
if(c)return A.fW(a,b,d)
s=b.length
r=A.fU(s,d,a,b)
return r},
fV(a,b,c,d){var s=A.eu,r=A.fS
switch(b?-1:a){case 0:throw A.d(new A.bF("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
fW(a,b,c){var s,r
if($.es==null)$.es=A.er("interceptor")
if($.et==null)$.et=A.er("receiver")
s=b.length
r=A.fV(s,c,a,b)
return r},
ee(a){return A.fX(a)},
fR(a,b){return A.b0(v.typeUniverse,A.cf(a.a),b)},
eu(a){return a.a},
fS(a){return a.b},
er(a){var s,r,q,p=new A.as("receiver","interceptor"),o=J.dV(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.d(A.ba("Field name "+a+" not found.",null))},
iK(a){throw A.d(new A.bW(a))},
iw(a){return v.getIsolateTag(a)},
h6(a,b){var s=new A.bv(a,b)
s.c=a.e
return s},
jH(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
iG(a){var s,r,q,p,o,n=$.fl.$1(a),m=$.dA[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.dF[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.fg.$2(a,n)
if(q!=null){m=$.dA[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.dF[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.dM(s)
$.dA[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.dF[n]=s
return s}if(p==="-"){o=A.dM(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.fn(a,s)
if(p==="*")throw A.d(A.eN(n))
if(v.leafTags[n]===true){o=A.dM(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.fn(a,s)},
fn(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.ei(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
dM(a){return J.ei(a,!1,null,!!a.$iT)},
iH(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.dM(s)
else return J.ei(s,c,null,null)},
iA(){if(!0===$.eg)return
$.eg=!0
A.iB()},
iB(){var s,r,q,p,o,n,m,l
$.dA=Object.create(null)
$.dF=Object.create(null)
A.iz()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.fo.$1(o)
if(n!=null){m=A.iH(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
iz(){var s,r,q,p,o,n,m=B.q()
m=A.aq(B.r,A.aq(B.t,A.aq(B.m,A.aq(B.m,A.aq(B.u,A.aq(B.v,A.aq(B.w(B.l),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.fl=new A.dC(p)
$.fg=new A.dD(o)
$.fo=new A.dE(n)},
aq(a,b){return a(b)||b},
iq(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
h5(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw A.d(new A.cp("Illegal RegExp pattern ("+String(n)+")",a))},
iJ(a,b,c){var s=a.indexOf(b,c)
return s>=0},
iI(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
z:function z(a,b){this.a=a
this.b=b},
bg:function bg(){},
bm:function bm(a){this.a=a},
cT:function cT(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aF:function aF(a,b){this.a=a
this.b=b},
bt:function bt(a,b,c){this.a=a
this.b=b
this.c=c},
bL:function bL(a){this.a=a},
cv:function cv(a){this.a=a},
av:function av(a,b){this.a=a
this.b=b},
aU:function aU(a){this.a=a
this.b=null},
a2:function a2(){},
ci:function ci(){},
cj:function cj(){},
cI:function cI(){},
cD:function cD(){},
as:function as(a,b){this.a=a
this.b=b},
bW:function bW(a){this.a=a},
bF:function bF(a){this.a=a},
aC:function aC(){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0},
cs:function cs(a,b){this.a=a
this.b=b
this.c=null},
bv:function bv(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bs:function bs(){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0},
dC:function dC(a){this.a=a},
dD:function dD(a){this.a=a},
dE:function dE(a){this.a=a},
ao:function ao(){},
c7:function c7(){},
cq:function cq(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
di:function di(a){this.b=a},
hP(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.ir(b,a))},
bA:function bA(){},
ag:function ag(){},
aD:function aD(){},
bB:function bB(){},
aS:function aS(){},
aT:function aT(){},
eG(a,b){var s=b.c
return s==null?b.c=A.e7(a,b.y,!0):s},
e_(a,b){var s=b.c
return s==null?b.c=A.aZ(a,"H",[b.y]):s},
eH(a){var s=a.x
if(s===6||s===7||s===8)return A.eH(a.y)
return s===12||s===13},
hb(a){return a.at},
iu(a){return A.cd(v.typeUniverse,a,!1)},
a_(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.x
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.y
r=A.a_(a,s,a0,a1)
if(r===s)return b
return A.eZ(a,r,!0)
case 7:s=b.y
r=A.a_(a,s,a0,a1)
if(r===s)return b
return A.e7(a,r,!0)
case 8:s=b.y
r=A.a_(a,s,a0,a1)
if(r===s)return b
return A.eY(a,r,!0)
case 9:q=b.z
p=A.b3(a,q,a0,a1)
if(p===q)return b
return A.aZ(a,b.y,p)
case 10:o=b.y
n=A.a_(a,o,a0,a1)
m=b.z
l=A.b3(a,m,a0,a1)
if(n===o&&l===m)return b
return A.e5(a,n,l)
case 12:k=b.y
j=A.a_(a,k,a0,a1)
i=b.z
h=A.ie(a,i,a0,a1)
if(j===k&&h===i)return b
return A.eX(a,j,h)
case 13:g=b.z
a1+=g.length
f=A.b3(a,g,a0,a1)
o=b.y
n=A.a_(a,o,a0,a1)
if(f===g&&n===o)return b
return A.e6(a,n,f,!0)
case 14:e=b.y
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.d(A.bc("Attempted to substitute unexpected RTI kind "+c))}},
b3(a,b,c,d){var s,r,q,p,o=b.length,n=A.dr(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.a_(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
ig(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.dr(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.a_(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
ie(a,b,c,d){var s,r=b.a,q=A.b3(a,r,c,d),p=b.b,o=A.b3(a,p,c,d),n=b.c,m=A.ig(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.c0()
s.a=q
s.b=o
s.c=m
return s},
jG(a,b){a[v.arrayRti]=b
return a},
fi(a){var s,r=a.$S
if(r!=null){if(typeof r=="number")return A.iy(r)
s=a.$S()
return s}return null},
iC(a,b){var s
if(A.eH(b))if(a instanceof A.a2){s=A.fi(a)
if(s!=null)return s}return A.cf(a)},
cf(a){if(a instanceof A.f)return A.r(a)
if(Array.isArray(a))return A.f2(a)
return A.e8(J.a9(a))},
f2(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
r(a){var s=a.$ti
return s!=null?s:A.e8(a)},
e8(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.hW(a,s)},
hW(a,b){var s=a instanceof A.a2?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.hF(v.typeUniverse,s.name)
b.$ccache=r
return r},
iy(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.cd(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
ix(a){return A.a8(A.r(a))},
eb(a){var s
if(a instanceof A.ao)return A.it(a.$r,a.aS())
s=a instanceof A.a2?A.fi(a):null
if(s!=null)return s
if(t.r.b(a))return J.fO(a).a
if(Array.isArray(a))return A.f2(a)
return A.cf(a)},
a8(a){var s=a.w
return s==null?a.w=A.f4(a):s},
f4(a){var s,r,q=a.at,p=q.replace(/\*/g,"")
if(p===q)return a.w=new A.cc(a)
s=A.cd(v.typeUniverse,p,!0)
r=s.w
return r==null?s.w=A.f4(s):r},
it(a,b){var s,r,q=b,p=q.length
if(p===0)return t.F
s=A.b0(v.typeUniverse,A.eb(q[0]),"@<0>")
for(r=1;r<p;++r)s=A.f_(v.typeUniverse,s,A.eb(q[r]))
return A.b0(v.typeUniverse,s,a)},
fq(a){return A.a8(A.cd(v.typeUniverse,a,!1))},
hV(a){var s,r,q,p,o,n=this
if(n===t.K)return A.O(n,a,A.i0)
if(!A.Q(n))if(!(n===t._))s=!1
else s=!0
else s=!0
if(s)return A.O(n,a,A.i4)
s=n.x
if(s===7)return A.O(n,a,A.hT)
if(s===1)return A.O(n,a,A.f9)
r=s===6?n.y:n
s=r.x
if(s===8)return A.O(n,a,A.hX)
if(r===t.S)q=A.f8
else if(r===t.i||r===t.n)q=A.i_
else if(r===t.N)q=A.i2
else q=r===t.y?A.e9:null
if(q!=null)return A.O(n,a,q)
if(s===9){p=r.y
if(r.z.every(A.iF)){n.r="$i"+p
if(p==="eA")return A.O(n,a,A.hZ)
return A.O(n,a,A.i3)}}else if(s===11){o=A.iq(r.y,r.z)
return A.O(n,a,o==null?A.f9:o)}return A.O(n,a,A.hR)},
O(a,b,c){a.b=c
return a.b(b)},
hU(a){var s,r=this,q=A.hQ
if(!A.Q(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.hI
else if(r===t.K)q=A.hH
else{s=A.b4(r)
if(s)q=A.hS}r.a=q
return r.a(a)},
ce(a){var s,r=a.x
if(!A.Q(a))if(!(a===t._))if(!(a===t.A))if(r!==7)if(!(r===6&&A.ce(a.y)))s=r===8&&A.ce(a.y)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
else s=!0
return s},
hR(a){var s=this
if(a==null)return A.ce(s)
return A.l(v.typeUniverse,A.iC(a,s),null,s,null)},
hT(a){if(a==null)return!0
return this.y.b(a)},
i3(a){var s,r=this
if(a==null)return A.ce(r)
s=r.r
if(a instanceof A.f)return!!a[s]
return!!J.a9(a)[s]},
hZ(a){var s,r=this
if(a==null)return A.ce(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.f)return!!a[s]
return!!J.a9(a)[s]},
hQ(a){var s,r=this
if(a==null){s=A.b4(r)
if(s)return a}else if(r.b(a))return a
A.f5(a,r)},
hS(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.f5(a,s)},
f5(a,b){throw A.d(A.hv(A.eQ(a,A.t(b,null))))},
eQ(a,b){return A.cm(a)+": type '"+A.t(A.eb(a),null)+"' is not a subtype of type '"+b+"'"},
hv(a){return new A.aX("TypeError: "+a)},
p(a,b){return new A.aX("TypeError: "+A.eQ(a,b))},
hX(a){var s=this,r=s.x===6?s.y:s
return r.y.b(a)||A.e_(v.typeUniverse,r).b(a)},
i0(a){return a!=null},
hH(a){if(a!=null)return a
throw A.d(A.p(a,"Object"))},
i4(a){return!0},
hI(a){return a},
f9(a){return!1},
e9(a){return!0===a||!1===a},
jq(a){if(!0===a)return!0
if(!1===a)return!1
throw A.d(A.p(a,"bool"))},
js(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.p(a,"bool"))},
jr(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.p(a,"bool?"))},
jt(a){if(typeof a=="number")return a
throw A.d(A.p(a,"double"))},
jv(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.p(a,"double"))},
ju(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.p(a,"double?"))},
f8(a){return typeof a=="number"&&Math.floor(a)===a},
jw(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.d(A.p(a,"int"))},
jy(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.p(a,"int"))},
jx(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.p(a,"int?"))},
i_(a){return typeof a=="number"},
jz(a){if(typeof a=="number")return a
throw A.d(A.p(a,"num"))},
jB(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.p(a,"num"))},
jA(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.p(a,"num?"))},
i2(a){return typeof a=="string"},
jC(a){if(typeof a=="string")return a
throw A.d(A.p(a,"String"))},
jE(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.p(a,"String"))},
jD(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.p(a,"String?"))},
fc(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.t(a[q],b)
return s},
i9(a,b){var s,r,q,p,o,n,m=a.y,l=a.z
if(""===m)return"("+A.fc(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.t(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
f6(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", "
if(a5!=null){s=a5.length
if(a4==null){a4=[]
r=null}else r=a4.length
q=a4.length
for(p=s;p>0;--p)a4.push("T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a2){m=B.d.bj(m+l,a4[a4.length-1-p])
k=a5[p]
j=k.x
if(!(j===2||j===3||j===4||j===5||k===o))if(!(k===n))i=!1
else i=!0
else i=!0
if(!i)m+=" extends "+A.t(k,a4)}m+=">"}else{m=""
r=null}o=a3.y
h=a3.z
g=h.a
f=g.length
e=h.b
d=e.length
c=h.c
b=c.length
a=A.t(o,a4)
for(a0="",a1="",p=0;p<f;++p,a1=a2)a0+=a1+A.t(g[p],a4)
if(d>0){a0+=a1+"["
for(a1="",p=0;p<d;++p,a1=a2)a0+=a1+A.t(e[p],a4)
a0+="]"}if(b>0){a0+=a1+"{"
for(a1="",p=0;p<b;p+=3,a1=a2){a0+=a1
if(c[p+1])a0+="required "
a0+=A.t(c[p+2],a4)+" "+c[p]}a0+="}"}if(r!=null){a4.toString
a4.length=r}return m+"("+a0+") => "+a},
t(a,b){var s,r,q,p,o,n,m=a.x
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){s=A.t(a.y,b)
return s}if(m===7){r=a.y
s=A.t(r,b)
q=r.x
return(q===12||q===13?"("+s+")":s)+"?"}if(m===8)return"FutureOr<"+A.t(a.y,b)+">"
if(m===9){p=A.ih(a.y)
o=a.z
return o.length>0?p+("<"+A.fc(o,b)+">"):p}if(m===11)return A.i9(a,b)
if(m===12)return A.f6(a,b,null)
if(m===13)return A.f6(a.y,b,a.z)
if(m===14){n=a.y
return b[b.length-1-n]}return"?"},
ih(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
hG(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
hF(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.cd(a,b,!1)
else if(typeof m=="number"){s=m
r=A.b_(a,5,"#")
q=A.dr(s)
for(p=0;p<s;++p)q[p]=r
o=A.aZ(a,b,q)
n[b]=o
return o}else return m},
hE(a,b){return A.f0(a.tR,b)},
hD(a,b){return A.f0(a.eT,b)},
cd(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.eV(A.eT(a,null,b,c))
r.set(b,s)
return s},
b0(a,b,c){var s,r,q=b.Q
if(q==null)q=b.Q=new Map()
s=q.get(c)
if(s!=null)return s
r=A.eV(A.eT(a,b,c,!0))
q.set(c,r)
return r},
f_(a,b,c){var s,r,q,p=b.as
if(p==null)p=b.as=new Map()
s=c.at
r=p.get(s)
if(r!=null)return r
q=A.e5(a,b,c.x===10?c.z:[c])
p.set(s,q)
return q},
N(a,b){b.a=A.hU
b.b=A.hV
return b},
b_(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.w(null,null)
s.x=b
s.at=c
r=A.N(a,s)
a.eC.set(c,r)
return r},
eZ(a,b,c){var s,r=b.at+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.hA(a,b,r,c)
a.eC.set(r,s)
return s},
hA(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.Q(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.w(null,null)
q.x=6
q.y=b
q.at=c
return A.N(a,q)},
e7(a,b,c){var s,r=b.at+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.hz(a,b,r,c)
a.eC.set(r,s)
return s},
hz(a,b,c,d){var s,r,q,p
if(d){s=b.x
if(!A.Q(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.b4(b.y)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.y
if(q.x===8&&A.b4(q.y))return q
else return A.eG(a,b)}}p=new A.w(null,null)
p.x=7
p.y=b
p.at=c
return A.N(a,p)},
eY(a,b,c){var s,r=b.at+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.hx(a,b,r,c)
a.eC.set(r,s)
return s},
hx(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.Q(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.aZ(a,"H",[b])
else if(b===t.P||b===t.T)return t.O}q=new A.w(null,null)
q.x=8
q.y=b
q.at=c
return A.N(a,q)},
hB(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.w(null,null)
s.x=14
s.y=b
s.at=q
r=A.N(a,s)
a.eC.set(q,r)
return r},
aY(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].at
return s},
hw(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].at}return s},
aZ(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.aY(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.w(null,null)
r.x=9
r.y=b
r.z=c
if(c.length>0)r.c=c[0]
r.at=p
q=A.N(a,r)
a.eC.set(p,q)
return q},
e5(a,b,c){var s,r,q,p,o,n
if(b.x===10){s=b.y
r=b.z.concat(c)}else{r=c
s=b}q=s.at+(";<"+A.aY(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.w(null,null)
o.x=10
o.y=s
o.z=r
o.at=q
n=A.N(a,o)
a.eC.set(q,n)
return n},
hC(a,b,c){var s,r,q="+"+(b+"("+A.aY(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.w(null,null)
s.x=11
s.y=b
s.z=c
s.at=q
r=A.N(a,s)
a.eC.set(q,r)
return r},
eX(a,b,c){var s,r,q,p,o,n=b.at,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.aY(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.aY(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.hw(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.w(null,null)
p.x=12
p.y=b
p.z=c
p.at=r
o=A.N(a,p)
a.eC.set(r,o)
return o},
e6(a,b,c,d){var s,r=b.at+("<"+A.aY(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.hy(a,b,c,r,d)
a.eC.set(r,s)
return s},
hy(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.dr(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.x===1){r[p]=o;++q}}if(q>0){n=A.a_(a,b,r,0)
m=A.b3(a,c,r,0)
return A.e6(a,n,m,c!==m)}}l=new A.w(null,null)
l.x=13
l.y=b
l.z=c
l.at=d
return A.N(a,l)},
eT(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
eV(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.ho(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.eU(a,r,l,k,!1)
else if(q===46)r=A.eU(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.Y(a.u,a.e,k.pop()))
break
case 94:k.push(A.hB(a.u,k.pop()))
break
case 35:k.push(A.b_(a.u,5,"#"))
break
case 64:k.push(A.b_(a.u,2,"@"))
break
case 126:k.push(A.b_(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.hq(a,k)
break
case 38:A.hp(a,k)
break
case 42:p=a.u
k.push(A.eZ(p,A.Y(p,a.e,k.pop()),a.n))
break
case 63:p=a.u
k.push(A.e7(p,A.Y(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.eY(p,A.Y(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.hn(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.eW(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.hs(a.u,a.e,o)
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
return A.Y(a.u,a.e,m)},
ho(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
eU(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.x===10)o=o.y
n=A.hG(s,o.y)[p]
if(n==null)A.ek('No "'+p+'" in "'+A.hb(o)+'"')
d.push(A.b0(s,o,n))}else d.push(p)
return m},
hq(a,b){var s,r=a.u,q=A.eS(a,b),p=b.pop()
if(typeof p=="string")b.push(A.aZ(r,p,q))
else{s=A.Y(r,a.e,p)
switch(s.x){case 12:b.push(A.e6(r,s,q,a.n))
break
default:b.push(A.e5(r,s,q))
break}}},
hn(a,b){var s,r,q,p,o,n=null,m=a.u,l=b.pop()
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
s=r}q=A.eS(a,b)
l=b.pop()
switch(l){case-3:l=b.pop()
if(s==null)s=m.sEA
if(r==null)r=m.sEA
p=A.Y(m,a.e,l)
o=new A.c0()
o.a=q
o.b=s
o.c=r
b.push(A.eX(m,p,o))
return
case-4:b.push(A.hC(m,b.pop(),q))
return
default:throw A.d(A.bc("Unexpected state under `()`: "+A.e(l)))}},
hp(a,b){var s=b.pop()
if(0===s){b.push(A.b_(a.u,1,"0&"))
return}if(1===s){b.push(A.b_(a.u,4,"1&"))
return}throw A.d(A.bc("Unexpected extended operation "+A.e(s)))},
eS(a,b){var s=b.splice(a.p)
A.eW(a.u,a.e,s)
a.p=b.pop()
return s},
Y(a,b,c){if(typeof c=="string")return A.aZ(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.hr(a,b,c)}else return c},
eW(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.Y(a,b,c[s])},
hs(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.Y(a,b,c[s])},
hr(a,b,c){var s,r,q=b.x
if(q===10){if(c===0)return b.y
s=b.z
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.y
q=b.x}else if(c===0)return b
if(q!==9)throw A.d(A.bc("Indexed base must be an interface type"))
s=b.z
if(c<=s.length)return s[c-1]
throw A.d(A.bc("Bad index "+c+" for "+b.h(0)))},
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
if(p===6){s=A.eG(a,d)
return A.l(a,b,c,s,e)}if(r===8){if(!A.l(a,b.y,c,d,e))return!1
return A.l(a,A.e_(a,b),c,d,e)}if(r===7){s=A.l(a,t.P,c,d,e)
return s&&A.l(a,b.y,c,d,e)}if(p===8){if(A.l(a,b,c,d.y,e))return!0
return A.l(a,b,c,A.e_(a,d),e)}if(p===7){s=A.l(a,b,c,t.P,e)
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
if(!A.l(a,j,c,i,e)||!A.l(a,i,e,j,c))return!1}return A.f7(a,b.y,c,d.y,e)}if(p===12){if(b===t.g)return!0
if(s)return!1
return A.f7(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.hY(a,b,c,d,e)}if(o&&p===11)return A.i1(a,b,c,d,e)
return!1},
f7(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
hY(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.y,k=d.y
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.b0(a,b,r[o])
return A.f1(a,p,null,c,d.z,e)}n=b.z
m=d.z
return A.f1(a,n,null,c,m,e)},
f1(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.l(a,r,d,q,f))return!1}return!0},
i1(a,b,c,d,e){var s,r=b.z,q=d.z,p=r.length
if(p!==q.length)return!1
if(b.y!==d.y)return!1
for(s=0;s<p;++s)if(!A.l(a,r[s],c,q[s],e))return!1
return!0},
b4(a){var s,r=a.x
if(!(a===t.P||a===t.T))if(!A.Q(a))if(r!==7)if(!(r===6&&A.b4(a.y)))s=r===8&&A.b4(a.y)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
iF(a){var s
if(!A.Q(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
Q(a){var s=a.x
return s===2||s===3||s===4||s===5||a===t.X},
f0(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
dr(a){return a>0?new Array(a):v.typeUniverse.sEA},
w:function w(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
c0:function c0(){this.c=this.b=this.a=null},
cc:function cc(a){this.a=a},
bZ:function bZ(){},
aX:function aX(a){this.a=a},
hg(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.ik()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.ar(new A.cW(q),1)).observe(s,{childList:true})
return new A.cV(q,s,r)}else if(self.setImmediate!=null)return A.il()
return A.im()},
hh(a){self.scheduleImmediate(A.ar(new A.cX(a),0))},
hi(a){self.setImmediate(A.ar(new A.cY(a),0))},
hj(a){A.ht(0,a)},
eL(a,b){var s=B.a.C(a.a,1000)
return A.hu(s<0?0:s,b)},
ht(a,b){var s=new A.aW()
s.br(a,b)
return s},
hu(a,b){var s=new A.aW()
s.bs(a,b)
return s},
i6(a){return new A.bP(new A.k($.h,a.l("k<0>")),a.l("bP<0>"))},
hM(a,b){a.$2(0,null)
b.b=!0
return b.a},
hJ(a,b){A.hN(a,b)},
hL(a,b){var s,r=a==null?b.$ti.c.a(a):a
if(!b.b)b.a.a7(r)
else{s=b.a
if(b.$ti.l("H<1>").b(r))s.aO(r)
else s.ac(r)}},
hK(a,b){var s=A.S(a),r=A.P(a),q=b.a
if(b.b)q.G(s,r)
else q.by(s,r)},
hN(a,b){var s,r,q=new A.dt(b),p=new A.du(b)
if(a instanceof A.k)a.aY(q,p,t.z)
else{s=t.z
if(a instanceof A.k)a.aI(q,p,s)
else{r=new A.k($.h,t.d)
r.a=8
r.c=a
r.aY(q,p,s)}}},
ij(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.h.aG(new A.dy(s))},
ch(a,b){var s=A.dz(a,"error",t.K)
return new A.bd(s,b==null?A.eq(a):b)},
eq(a){var s
if(t.Q.b(a)){s=a.gU()
if(s!=null)return s}return B.y},
e3(a,b){var s,r
for(;s=a.a,(s&4)!==0;)a=a.c
if((s&24)!==0){r=b.Z()
b.X(a)
A.an(b,r)}else{r=b.c
b.aW(a)
a.ak(r)}},
hm(a,b){var s,r,q={},p=q.a=a
for(;s=p.a,(s&4)!==0;){p=p.c
q.a=p}if((s&24)===0){r=b.c
b.aW(p)
q.a.ak(r)
return}if((s&16)===0&&b.c==null){b.X(p)
return}b.a^=2
A.Z(null,null,b.b,new A.d7(q,b))},
an(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;!0;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){f=f.c
A.dw(f.a,f.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.an(g.a,f)
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
if(r){A.dw(m.a,m.b)
return}j=$.h
if(j!==k)$.h=k
else j=null
f=f.c
if((f&15)===8)new A.de(s,g,p).$0()
else if(q){if((f&1)!==0)new A.dd(s,m).$0()}else if((f&2)!==0)new A.dc(g,s).$0()
if(j!=null)$.h=j
f=s.c
if(f instanceof A.k){r=s.a.$ti
r=r.l("H<2>").b(f)||!r.z[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.a_(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.e3(f,i)
return}}i=s.a.b
h=i.c
i.c=null
b=i.a_(h)
f=s.b
r=s.c
if(!f){i.a=8
i.c=r}else{i.a=i.a&1|16
i.c=r}g.a=i
f=i}},
ia(a,b){if(t.C.b(a))return b.aG(a)
if(t.v.b(a))return a
throw A.d(A.ep(a,"onError",u.c))},
i7(){var s,r
for(s=$.ap;s!=null;s=$.ap){$.b2=null
r=s.b
$.ap=r
if(r==null)$.b1=null
s.a.$0()}},
id(){$.ea=!0
try{A.i7()}finally{$.b2=null
$.ea=!1
if($.ap!=null)$.em().$1(A.fh())}},
fe(a){var s=new A.bQ(a),r=$.b1
if(r==null){$.ap=$.b1=s
if(!$.ea)$.em().$1(A.fh())}else $.b1=r.b=s},
ic(a){var s,r,q,p=$.ap
if(p==null){A.fe(a)
$.b2=$.b1
return}s=new A.bQ(a)
r=$.b2
if(r==null){s.b=p
$.ap=$.b2=s}else{q=r.b
s.b=q
$.b2=r.b=s
if(q==null)$.b1=s}},
fp(a){var s,r=null,q=$.h
if(B.b===q){A.Z(r,r,B.b,a)
return}s=!1
if(s){A.Z(r,r,q,a)
return}A.Z(r,r,q,q.b2(a))},
ja(a){A.dz(a,"stream",t.K)
return new A.ca()},
e1(a){return new A.aL(null,null,a.l("aL<0>"))},
fd(a){return},
eO(a,b){return b==null?A.io():b},
hk(a,b){if(t.k.b(b))return a.aG(b)
if(t.u.b(b))return b
throw A.d(A.ba("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
i8(a){},
hO(a,b,c){var s,r=a.aq(),q=$.dO()
if(r!==q){q=r.$ti
s=$.h
r.W(new A.X(new A.k(s,q),8,new A.dv(b,c),null,q.l("@<1>").a8(q.c).l("X<1,2>")))}else b.ab(c)},
hf(a,b){var s=$.h
if(s===B.b)return A.eL(a,b)
return A.eL(a,s.b3(b,t.D))},
dw(a,b){A.ic(new A.dx(a,b))},
fa(a,b,c,d){var s,r=$.h
if(r===c)return d.$0()
$.h=c
s=r
try{r=d.$0()
return r}finally{$.h=s}},
fb(a,b,c,d,e){var s,r=$.h
if(r===c)return d.$1(e)
$.h=c
s=r
try{r=d.$1(e)
return r}finally{$.h=s}},
ib(a,b,c,d,e,f){var s,r=$.h
if(r===c)return d.$2(e,f)
$.h=c
s=r
try{r=d.$2(e,f)
return r}finally{$.h=s}},
Z(a,b,c,d){if(B.b!==c)d=c.b2(d)
A.fe(d)},
cW:function cW(a){this.a=a},
cV:function cV(a,b,c){this.a=a
this.b=b
this.c=c},
cX:function cX(a){this.a=a},
cY:function cY(a){this.a=a},
aW:function aW(){this.c=0},
dq:function dq(a,b){this.a=a
this.b=b},
dp:function dp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bP:function bP(a,b){this.a=a
this.b=!1
this.$ti=b},
dt:function dt(a){this.a=a},
du:function du(a){this.a=a},
dy:function dy(a){this.a=a},
bd:function bd(a,b){this.a=a
this.b=b},
am:function am(a,b){this.a=a
this.$ti=b},
aM:function aM(a,b,c,d,e){var _=this
_.ay=0
_.CW=_.ch=null
_.w=a
_.a=b
_.d=c
_.e=d
_.r=_.f=null
_.$ti=e},
bR:function bR(){},
aL:function aL(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null
_.$ti=c},
X:function X(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
k:function k(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
d4:function d4(a,b){this.a=a
this.b=b},
db:function db(a,b){this.a=a
this.b=b},
d8:function d8(a){this.a=a},
d9:function d9(a){this.a=a},
da:function da(a,b,c){this.a=a
this.b=b
this.c=c},
d7:function d7(a,b){this.a=a
this.b=b},
d6:function d6(a,b){this.a=a
this.b=b},
d5:function d5(a,b,c){this.a=a
this.b=b
this.c=c},
de:function de(a,b,c){this.a=a
this.b=b
this.c=c},
df:function df(a){this.a=a},
dd:function dd(a,b){this.a=a
this.b=b},
dc:function dc(a,b){this.a=a
this.b=b},
bQ:function bQ(a){this.a=a
this.b=null},
U:function U(){},
cG:function cG(a,b){this.a=a
this.b=b},
cH:function cH(a,b){this.a=a
this.b=b},
cE:function cE(a){this.a=a},
cF:function cF(a,b,c){this.a=a
this.b=b
this.c=c},
aN:function aN(){},
bU:function bU(){},
bS:function bS(){},
aV:function aV(){},
bY:function bY(){},
bX:function bX(a){this.b=a
this.a=null},
c6:function c6(){this.a=0
this.c=this.b=null},
dj:function dj(a,b){this.a=a
this.b=b},
aP:function aP(a,b){this.a=a
this.b=0
this.c=b},
ca:function ca(){},
dv:function dv(a,b){this.a=a
this.b=b},
ds:function ds(){},
dx:function dx(a,b){this.a=a
this.b=b},
dl:function dl(){},
dm:function dm(a,b){this.a=a
this.b=b},
dn:function dn(a,b,c){this.a=a
this.b=b
this.c=c},
h7(a){return A.fj(a,new A.aC())},
h8(){return new A.c3()},
e4(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
eR(a,b){var s=new A.aR(a,b)
s.c=a.e
return s},
dY(a){var s,r={}
if(A.eh(a))return"{...}"
s=new A.bJ("")
try{$.aa.push(a)
s.a+="{"
r.a=!0
a.av(0,new A.cu(r,s))
s.a+="}"}finally{$.aa.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
c3:function c3(){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0},
dh:function dh(a){this.a=a
this.c=this.b=null},
aR:function aR(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
a6:function a6(){},
bx:function bx(){},
cu:function cu(a,b){this.a=a
this.b=b},
bI:function bI(){},
c9:function c9(){},
fY(a,b){a=A.d(a)
a.stack=b.h(0)
throw a
throw A.d("unreachable")},
ct(a,b,c){var s,r=c?J.ey(a):J.h1(a)
if(a!==0&&!0)for(s=0;s<r.length;++s)r[s]=b
return r},
eB(a,b){var s,r=[]
for(s=J.cg(a);s.m();)r.push(s.gn())
if(b)return r
return J.dV(r)},
eF(a){return new A.cq(a,A.h5(a,!1,!0,!1,!1,!1))},
eI(a,b,c){var s=J.cg(b)
if(!s.m())return a
if(c.length===0){do a+=A.e(s.gn())
while(s.m())}else{a+=A.e(s.gn())
for(;s.m();)a=a+c+A.e(s.gn())}return a},
cm(a){if(typeof a=="number"||A.e9(a)||a==null)return J.b7(a)
if(typeof a=="string")return JSON.stringify(a)
return A.eD(a)},
fZ(a,b){A.dz(a,"error",t.K)
A.dz(b,"stackTrace",t.l)
A.fY(a,b)},
bc(a){return new A.bb(a)},
ba(a,b){return new A.G(!1,null,b,a)},
ep(a,b,c){return new A.G(!0,a,b,c)},
bE(a,b,c,d,e){return new A.aH(b,c,!0,a,d,"Invalid value")},
ha(a,b,c){if(0>a||a>c)throw A.d(A.bE(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.d(A.bE(b,a,c,"end",null))
return b}return c},
eE(a,b){if(a<0)throw A.d(A.bE(a,0,null,b,null))
return a},
bo(a,b,c,d){return new A.bn(b,!0,a,d,"Index out of range")},
aJ(a){return new A.bM(a)},
eN(a){return new A.bK(a)},
hd(a){return new A.a7(a)},
ac(a){return new A.bf(a)},
ex(a){return new A.d3(a)},
h0(a,b,c){var s,r
if(A.eh(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=[]
$.aa.push(a)
try{A.i5(a,s)}finally{$.aa.pop()}r=A.eI(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
dU(a,b,c){var s,r
if(A.eh(a))return b+"..."+c
s=new A.bJ(b)
$.aa.push(a)
try{r=s
r.a=A.eI(r.a,a,", ")}finally{$.aa.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
i5(a,b){var s,r,q,p,o,n,m,l=a.gt(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.m())return
s=A.e(l.gn())
b.push(s)
k+=s.length+2;++j}if(!l.m()){if(j<=5)return
r=b.pop()
q=b.pop()}else{p=l.gn();++j
if(!l.m()){if(j<=4){b.push(A.e(p))
return}r=A.e(p)
q=b.pop()
k+=r.length+2}else{o=l.gn();++j
for(;l.m();p=o,o=n){n=l.gn();++j
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
aG(a,b,c,d){var s
if(B.e===c)return A.eJ(B.c.gi(a),J.F(b),$.dP())
if(B.e===d){s=B.c.gi(a)
b=J.F(b)
c=J.F(c)
return A.e2(A.V(A.V(A.V($.dP(),s),b),c))}s=A.eK(B.c.gi(a),J.F(b),J.F(c),J.F(d),$.dP())
return s},
bh:function bh(a){this.a=a},
d0:function d0(){},
j:function j(){},
bb:function bb(a){this.a=a},
L:function L(){},
G:function G(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aH:function aH(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bn:function bn(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bM:function bM(a){this.a=a},
bK:function bK(a){this.a=a},
a7:function a7(a){this.a=a},
bf:function bf(a){this.a=a},
bC:function bC(){},
aI:function aI(){},
d3:function d3(a){this.a=a},
cp:function cp(a,b){this.a=a
this.b=b},
bp:function bp(){},
m:function m(){},
f:function f(){},
cb:function cb(){},
bJ:function bJ(a){this.a=a},
ev(a,b){var s=document.createElement("canvas")
s.width=b
s.height=a
return s},
hl(a,b){var s,r
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.b5)(b),++r)a.appendChild(b[r])},
W(a,b,c,d){var s=new A.c_(a,b,c==null?null:A.ff(new A.d1(c),t.B),!1)
s.b_()
return s},
f3(a){var s
if("postMessage" in a){s=A.eP(a)
return s}else return a},
eP(a){if(a===window)return a
else return new A.d_()},
ff(a,b){var s=$.h
if(s===B.b)return a
return s.b3(a,b)},
c:function c(){},
b8:function b8(){},
b9:function b9(){},
be:function be(){},
A:function A(){},
ad:function ad(){},
ck:function ck(){},
cl:function cl(){},
au:function au(){},
cZ:function cZ(a,b){this.a=a
this.b=b},
n:function n(){},
a:function a(){},
bi:function bi(){},
bl:function bl(){},
a3:function a3(){},
B:function B(){},
q:function q(){},
bT:function bT(a){this.a=a},
i:function i(){},
aE:function aE(){},
bH:function bH(){},
E:function E(){},
aK:function aK(){},
aO:function aO(){},
dT:function dT(a,b){this.a=a
this.$ti=b},
aQ:function aQ(){},
o:function o(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
c_:function c_(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
d1:function d1(a){this.a=a},
d2:function d2(a){this.a=a},
ax:function ax(){},
aw:function aw(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
d_:function d_(){},
bV:function bV(){},
c1:function c1(){},
c2:function c2(){},
c4:function c4(){},
c5:function c5(){},
dS(){return window.navigator.userAgent},
bj:function bj(a,b){this.a=a
this.b=b},
cn:function cn(){},
co:function co(){},
dZ(a,b,c,d,e){var s,r
if(c<0)s=c===-1/0?0:-c*0
else s=c
if(d<0)r=d===-1/0?0:-d*0
else r=d
return new A.K(a,b,s,r,e.l("K<0>"))},
ah:function ah(a,b,c){this.a=a
this.b=b
this.$ti=c},
c8:function c8(){},
K:function K(a,b,c,d,e){var _=this
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
ae:function ae(){},
af:function af(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ai:function ai(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=0},
hc(a,b,c,d,e,f,g){var s,r,q=g*f,p=d*e,o=A.ev(p,q)
q=A.ev(p,q)
p=[]
for(s=0;s<d;++s){r=B.a.C(g,32)
p.push(new Uint32Array(r+1))}q=new A.bG(d,g,f,e,c,a,o,q,p)
q.bp(a,b,c,d,e,f,g)
return q},
e0(a){return new A.z(B.a.C(a,32),31-B.a.j(a,32))},
C:function C(a){this.b=a},
bG:function bG(a,b,c,d,e,f,g,h,i){var _=this
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
cy:function cy(a){this.a=a},
cz:function cz(a){this.a=a},
cA:function cA(a){this.a=a},
cB:function cB(a){this.a=a},
cx:function cx(){},
he(a,b,c){var s,r,q,p="white",o=null,n=A.hc("black",b,p,c*10,2,2,a*8),m=[]
for(s=0;s<c;++s){r=[]
for(q=0;q<a;++q)r.push(new A.at(s,q," ",p))
m.push(r)}n=new A.cJ(c,a,b,n,new A.ai(c,a),new A.ai(c,a),new A.ai(c,a),A.e1(t.N),A.e1(t.V),A.e1(t.m),B.h,m,A.h8(),B.dF)
n.bq("black",a,b,p,o,!0,2,2,2,c,!0,o,o,o,o,o,o)
return n},
ak:function ak(a){this.b=a},
cJ:function cJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
_.a=a
_.b=b
_.f=c
_.w=d
_.x=e
_.y=f
_.z=g
_.as=h
_.at=i
_.ax=j
_.ay=k
_.ch=l
_.CW=m
_.cx=n
_.cy=!1},
cR:function cR(a){this.a=a},
cQ:function cQ(){},
cP:function cP(a){this.a=a},
cK:function cK(a){this.a=a},
cL:function cL(a){this.a=a},
cM:function cM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cN:function cN(a,b,c){this.a=a
this.b=b
this.c=c},
cO:function cO(a){this.a=a},
dG(){var s=0,r=A.i6(t.z),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
var $async$dG=A.ij(function(b3,b4){if(b3===1)return A.hK(b4,r)
while(true)switch(s){case 0:b2=document.getElementById("index")
b2.toString
q=A.he(60,b2,35)
q.N(0)
q.S(0)
p=A.h7(["blockdude",["Block Dude is a game by Brandon Sterner and","Detached Solutions for the Texas Instruments family","of graphic display calculators. The graphics data for","this demo was pinched directly from the Z80 assembly","code for the calculator game."],"emotions",["Mixed Emotions is a little twist on the classic sliding","tiles game to demonstrate mouse support for the terminal.","Click on tiles to slide them to their correct positions,","but you only get to see the correct positions by sliding","the tiles!"],"sokoban",["Mother Hen is a Sokoban clone that demonstrates poking","simple sprite data into the terminal graphics memory."],"snake",["Snake is version of the infamous snake game that","demonstrates non interrupting keyboard input."],"wordle",["Word Logic is a Wordle clone that demonstrates a fairly","complex program running in the terminal."]])
o=A.eF("^ *info +(.+) *$")
n=A.eF("^ *load +(.+) *$")
m=new A.dL(q)
l=new A.dH(q)
k=new A.dJ(p,q)
j=new A.dI(p,q)
i=new A.dK(p,q)
m.$0()
k.$0()
b2=n.b,h=o.b,g=q.y,f=q.x,e=f.b,d=g.b,c=g.a,b=q.z,a=b.b,a0=b.a,a1=q.as,a2=A.r(a1).l("am<1>"),a3=q.a,a4=a3-1,a5=f.a,a6=q.b,a7=a6-4
case 2:if(!!0){s=3
break}q.c0(" > ","lightgreen",!1)
if(q.ay!==B.h)A.ek(A.ex("Terminal already awaiting input."))
a8=f.c
a9=f.d
a8=B.a.j(a8,a3)
a9=B.a.j(a9,a6)
a8=B.a.j(a8,a5)
f.c=a8
f.sO(a9)
q.aF(B.d.aK(" ",a7),!1)
f.c=a8
f.sO(a9)
a8=f.c
if(a8===a4){q.a6(0)
a8=f.c=B.a.j(f.c-1,a5)}a8=a8*e+f.d
a9=B.a.j(B.a.A(a8,d),c)
g.c=a9
a8=B.a.j(a8,d)
g.d=a8
a8=a9*d+a8+a7
b.c=B.a.j(B.a.A(a8,a),a0)
b.d=B.a.j(a8,a)
q.ay=B.j
a8=new A.am(a1,a2)
s=4
return A.hJ(a8.gbS(a8),$async$dG)
case 4:b0=b4
b1=B.d.bi(b0)
if("reset"===b1){m.$0()
s=2
break}if("help"===b1){l.$0()
s=2
break}if("list"===b1){k.$0()
s=2
break}if(h.test(b0)){a8=o.b6(b0).b[1]
a8.toString
j.$1(a8)}else if(b2.test(b0)){a8=n.b6(b0).b[1]
a8.toString
i.$1(a8)}else{q.E()
q.I(" Not understood. Type 'help' for help.","orange")
q.E()}s=2
break
case 3:return A.hL(null,r)}})
return A.hM($async$dG,r)},
dL:function dL(a){this.a=a},
dH:function dH(a){this.a=a},
dJ:function dJ(a,b){this.a=a
this.b=b},
dI:function dI(a,b){this.a=a
this.b=b},
dK:function dK(a,b){this.a=a
this.b=b},
iM(a){A.iL(new A.bu("Field '"+a+"' has been assigned during initialization."),new Error())}},J={
ei(a,b,c,d){return{i:a,p:b,e:c,x:d}},
dB(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.eg==null){A.iA()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.eN("Return interceptor for "+A.e(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.dg
if(o==null)o=$.dg=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.iG(a)
if(p!=null)return p
if(typeof a=="function")return B.A
s=Object.getPrototypeOf(a)
if(s==null)return B.o
if(s===Object.prototype)return B.o
if(typeof q=="function"){o=$.dg
if(o==null)o=$.dg=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.k,enumerable:false,writable:true,configurable:true})
return B.k}return B.k},
h1(a){if(a<0||a>4294967295)throw A.d(A.bE(a,0,4294967295,"length",null))
return J.h2(new Array(a))},
ey(a){if(a<0)throw A.d(A.ba("Length must be a non-negative integer: "+a,null))
return new Array(a)},
h2(a){return J.dV(a)},
dV(a){a.fixed$length=Array
return a},
ez(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
h3(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.ez(r))break;++b}return b},
h4(a,b){var s,r
for(;b>0;b=s){s=b-1
r=a.charCodeAt(s)
if(r!==32&&r!==13&&!J.ez(r))break}return b},
a9(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.az.prototype
return J.br.prototype}if(typeof a=="string")return J.a4.prototype
if(a==null)return J.aA.prototype
if(typeof a=="boolean")return J.bq.prototype
if(Array.isArray(a))return J.I.prototype
if(typeof a!="object"){if(typeof a=="function")return J.J.prototype
return a}if(a instanceof A.f)return a
return J.dB(a)},
fk(a){if(typeof a=="string")return J.a4.prototype
if(a==null)return a
if(Array.isArray(a))return J.I.prototype
if(typeof a!="object"){if(typeof a=="function")return J.J.prototype
return a}if(a instanceof A.f)return a
return J.dB(a)},
ef(a){if(a==null)return a
if(Array.isArray(a))return J.I.prototype
if(typeof a!="object"){if(typeof a=="function")return J.J.prototype
return a}if(a instanceof A.f)return a
return J.dB(a)},
iv(a){if(typeof a=="string")return J.a4.prototype
if(a==null)return a
if(!(a instanceof A.f))return J.al.prototype
return a},
a0(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.J.prototype
return a}if(a instanceof A.f)return a
return J.dB(a)},
b6(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.a9(a).q(a,b)},
fK(a,b){if(typeof b==="number")if(Array.isArray(a)||A.iE(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ef(a).p(a,b)},
fL(a,b,c,d){return J.a0(a).bw(a,b,c,d)},
en(a){return J.a0(a).aP(a)},
fM(a,b,c,d){return J.a0(a).bI(a,b,c,d)},
eo(a,b){return J.ef(a).D(a,b)},
F(a){return J.a9(a).gi(a)},
cg(a){return J.ef(a).gt(a)},
dR(a){return J.fk(a).gk(a)},
fN(a){return J.a0(a).gbZ(a)},
fO(a){return J.a9(a).gF(a)},
fP(a,b){return J.a0(a).sP(a,b)},
b7(a){return J.a9(a).h(a)},
fQ(a){return J.iv(a).bi(a)},
ay:function ay(){},
bq:function bq(){},
aA:function aA(){},
v:function v(){},
a5:function a5(){},
bD:function bD(){},
al:function al(){},
J:function J(){},
I:function I(){},
cr:function cr(){},
ab:function ab(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
aB:function aB(){},
az:function az(){},
br:function br(){},
a4:function a4(){}},B={}
var w=[A,J,B]
var $={}
A.dW.prototype={}
J.ay.prototype={
q(a,b){return a===b},
gi(a){return A.aj(a)},
h(a){return"Instance of '"+A.cw(a)+"'"},
gF(a){return A.a8(A.e8(this))}}
J.bq.prototype={
h(a){return String(a)},
gi(a){return a?519018:218159},
gF(a){return A.a8(t.y)},
$iy:1}
J.aA.prototype={
q(a,b){return null==b},
h(a){return"null"},
gi(a){return 0},
$iy:1,
$im:1}
J.v.prototype={}
J.a5.prototype={
gi(a){return 0},
h(a){return String(a)}}
J.bD.prototype={}
J.al.prototype={}
J.J.prototype={
h(a){var s=a[$.ft()]
if(s==null)return this.bo(a)
return"JavaScript function for "+J.b7(s)}}
J.I.prototype={
M(a,b){if(!!a.fixed$length)A.ek(A.aJ("addAll"))
this.bu(a,b)
return},
bu(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw A.d(A.ac(a))
for(s=0;s<r;++s)a.push(b[s])},
bX(a,b){var s,r=A.ct(a.length,"",!1)
for(s=0;s<a.length;++s)r[s]=A.e(a[s])
return r.join(b)},
bT(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw A.d(A.ac(a))}return s},
bU(a,b,c){return this.bT(a,b,c,t.z)},
D(a,b){return a[b]},
h(a){return A.dU(a,"[","]")},
gt(a){return new J.ab(a,a.length)},
gi(a){return A.aj(a)},
gk(a){return a.length}}
J.cr.prototype={}
J.ab.prototype={
gn(){var s=this.d
return s==null?A.r(this).c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.d(A.b5(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.aB.prototype={
bh(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.d(A.aJ(""+a+".toInt()"))},
h(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gi(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
j(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
A(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.aX(a,b)},
C(a,b){return(a|0)===a?a/b|0:this.aX(a,b)},
aX(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.aJ("Result of truncating division is "+A.e(s)+": "+A.e(a)+" ~/ "+b))},
T(a,b){if(b<0)throw A.d(A.ec(b))
return b>31?0:a<<b>>>0},
bO(a,b){return b>31?0:a<<b>>>0},
bl(a,b){var s
if(b<0)throw A.d(A.ec(b))
if(a>0)s=this.an(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
bP(a,b){var s
if(a>0)s=this.an(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
B(a,b){if(0>b)throw A.d(A.ec(b))
return this.an(a,b)},
an(a,b){return b>31?0:a>>>b},
gF(a){return A.a8(t.n)},
$iR:1}
J.az.prototype={
gF(a){return A.a8(t.S)},
$iy:1,
$iu:1}
J.br.prototype={
gF(a){return A.a8(t.i)},
$iy:1}
J.a4.prototype={
bj(a,b){return a+b},
bm(a,b,c){return a.substring(b,A.ha(b,c,a.length))},
bi(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(p.charCodeAt(0)===133){s=J.h3(p,1)
if(s===o)return""}else s=0
r=o-1
q=p.charCodeAt(r)===133?J.h4(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
aK(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.x)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
c1(a,b,c){var s=b-a.length
if(s<=0)return a
return this.aK(c,s)+a},
ar(a,b,c){var s=a.length
if(c>s)throw A.d(A.bE(c,0,s,null,null))
return A.iJ(a,b,c)},
h(a){return a},
gi(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gF(a){return A.a8(t.N)},
gk(a){return a.length},
$iy:1,
$iD:1}
A.bu.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.dN.prototype={
$0(){var s=new A.k($.h,t.U)
s.a7(null)
return s},
$S:7}
A.cC.prototype={}
A.bw.prototype={
gn(){var s=this.d
return s==null?A.r(this).c.a(s):s},
m(){var s,r=this,q=r.a,p=J.fk(q),o=p.gk(q)
if(r.b!==o)throw A.d(A.ac(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.D(q,s);++r.c
return!0}}
A.by.prototype={
gt(a){return new A.bz(J.cg(this.a),this.b)},
gk(a){return J.dR(this.a)},
D(a,b){return this.b.$1(J.eo(this.a,b))}}
A.bz.prototype={
m(){var s=this,r=s.b
if(r.m()){s.a=s.c.$1(r.gn())
return!0}s.a=null
return!1},
gn(){var s=this.a
return s==null?A.r(this).z[1].a(s):s}}
A.bN.prototype={
gt(a){return new A.bO(J.cg(this.a),this.b)}}
A.bO.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(r.$1(s.gn()))return!0
return!1},
gn(){return this.a.gn()}}
A.bk.prototype={}
A.z.prototype={$r:"+(1,2)",$s:1}
A.bg.prototype={
h(a){return A.dY(this)}}
A.bm.prototype={
Y(){var s=this.$map
if(s==null){s=new A.bs()
A.fj(this.a,s)
this.$map=s}return s},
R(a){return this.Y().R(a)},
p(a,b){return this.Y().p(0,b)},
av(a,b){this.Y().av(0,b)},
gk(a){return this.Y().a}}
A.cT.prototype={
v(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.aF.prototype={
h(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
A.bt.prototype={
h(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.bL.prototype={
h(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.cv.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.av.prototype={}
A.aU.prototype={
h(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ix:1}
A.a2.prototype={
h(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.fr(r==null?"unknown":r)+"'"},
gca(){return this},
$C:"$1",
$R:1,
$D:null}
A.ci.prototype={$C:"$0",$R:0}
A.cj.prototype={$C:"$2",$R:2}
A.cI.prototype={}
A.cD.prototype={
h(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.fr(s)+"'"}}
A.as.prototype={
q(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.as))return!1
return this.$_target===b.$_target&&this.a===b.a},
gi(a){return(A.ej(this.a)^A.aj(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.cw(this.a)+"'")}}
A.bW.prototype={
h(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.bF.prototype={
h(a){return"RuntimeError: "+this.a}}
A.aC.prototype={
gk(a){return this.a},
R(a){var s=this.b
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
return q}else return this.bW(b)},
bW(a){var s,r,q=this.d
if(q==null)return null
s=q[this.aw(a)]
r=this.az(s,a)
if(r<0)return null
return s[r].b},
av(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw A.d(A.ac(s))
r=r.c}},
V(a,b){var s=this,r=new A.cs(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&1073741823
return r},
aw(a){return J.F(a)&1073741823},
az(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.b6(a[r].a,b))return r
return-1},
h(a){return A.dY(this)}}
A.cs.prototype={}
A.bv.prototype={
gn(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.ac(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
A.bs.prototype={
aw(a){return A.ip(a)&1073741823},
az(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.b6(a[r].a,b))return r
return-1}}
A.dC.prototype={
$1(a){return this.a(a)},
$S:8}
A.dD.prototype={
$2(a,b){return this.a(a,b)},
$S:9}
A.dE.prototype={
$1(a){return this.a(a)},
$S:10}
A.ao.prototype={
h(a){return this.aZ(!1)},
aZ(a){var s,r,q,p,o,n=this.bD(),m=this.aS(),l=(a?""+"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
o=m[q]
l=a?l+A.eD(o):l+A.e(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
bD(){var s,r=this.$s
for(;$.dk.length<=r;)$.dk.push(null)
s=$.dk[r]
if(s==null){s=this.bC()
$.dk[r]=s}return s},
bC(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=new Array(l)
for(s=0;s<l;++s)k[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
k[q]=r[s]}}k=A.eB(k,!1)
k.fixed$length=Array
k.immutable$list=Array
return k}}
A.c7.prototype={
aS(){return[this.a,this.b]},
q(a,b){if(b==null)return!1
return b instanceof A.c7&&this.$s===b.$s&&J.b6(this.a,b.a)&&J.b6(this.b,b.b)},
gi(a){return A.aG(this.$s,this.a,this.b,B.e)}}
A.cq.prototype={
h(a){return"RegExp/"+this.a+"/"+this.b.flags},
b6(a){var s=this.b.exec(a)
if(s==null)return null
return new A.di(s)}}
A.di.prototype={}
A.bA.prototype={}
A.ag.prototype={
gk(a){return a.length},
$iT:1}
A.aD.prototype={}
A.bB.prototype={
gF(a){return B.dP},
p(a,b){A.hP(b,a,a.length)
return a[b]},
$iy:1}
A.aS.prototype={}
A.aT.prototype={}
A.w.prototype={
l(a){return A.b0(v.typeUniverse,this,a)},
a8(a){return A.f_(v.typeUniverse,this,a)}}
A.c0.prototype={}
A.cc.prototype={
h(a){return A.t(this.a,null)}}
A.bZ.prototype={
h(a){return this.a}}
A.aX.prototype={$iL:1}
A.cW.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:4}
A.cV.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:11}
A.cX.prototype={
$0(){this.a.$0()},
$S:2}
A.cY.prototype={
$0(){this.a.$0()},
$S:2}
A.aW.prototype={
br(a,b){if(self.setTimeout!=null)self.setTimeout(A.ar(new A.dq(this,b),0),a)
else throw A.d(A.aJ("`setTimeout()` not found."))},
bs(a,b){if(self.setTimeout!=null)self.setInterval(A.ar(new A.dp(this,a,Date.now(),b),0),a)
else throw A.d(A.aJ("Periodic timer."))},
$icS:1}
A.dq.prototype={
$0(){this.a.c=1
this.b.$0()},
$S:0}
A.dp.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.a.A(s,o)}q.c=p
r.d.$1(q)},
$S:2}
A.bP.prototype={}
A.dt.prototype={
$1(a){return this.a.$2(0,a)},
$S:5}
A.du.prototype={
$2(a,b){this.a.$2(1,new A.av(a,b))},
$S:12}
A.dy.prototype={
$2(a,b){this.a(a,b)},
$S:13}
A.bd.prototype={
h(a){return A.e(this.a)},
$ij:1,
gU(){return this.b}}
A.am.prototype={}
A.aM.prototype={
ai(){},
aj(){}}
A.bR.prototype={
gbF(){return this.c<4},
bJ(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
bQ(a,b,c,d){var s,r,q,p,o,n=this
if((n.c&4)!==0){s=new A.aP($.h,c)
s.bK()
return s}s=$.h
r=d?1:0
q=A.eO(s,a)
A.hk(s,b)
p=new A.aM(n,q,s,r,A.r(n).l("aM<1>"))
p.CW=p
p.ch=p
p.ay=n.c&1
o=n.e
n.e=p
p.ch=null
p.CW=o
if(o==null)n.d=p
else o.ch=p
if(n.d===p)A.fd(n.a)
return p},
bH(a){var s,r=this
A.r(r).l("aM<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.bJ(a)
if((r.c&2)===0&&r.d==null)r.bA()}return null},
bv(){if((this.c&4)!==0)return new A.a7("Cannot add new events after calling close")
return new A.a7("Cannot add new events while doing an addStream")},
L(a,b){if(!this.gbF())throw A.d(this.bv())
this.al(b)},
bA(){if((this.c&4)!==0)if(null.gcb())null.a7(null)
A.fd(this.b)}}
A.aL.prototype={
al(a){var s
for(s=this.d;s!=null;s=s.ch)s.bx(new A.bX(a))}}
A.X.prototype={
bY(a){if((this.c&15)!==6)return!0
return this.b.b.aH(this.d,a.a)},
bV(a){var s,r=this.e,q=null,p=a.a,o=this.b.b
if(t.C.b(r))q=o.c4(r,p,a.b)
else q=o.aH(r,p)
try{p=q
return p}catch(s){if(t.c.b(A.S(s))){if((this.c&1)!==0)throw A.d(A.ba("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.ba("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.k.prototype={
aW(a){this.a=this.a&1|4
this.c=a},
aI(a,b,c){var s,r,q=$.h
if(q===B.b){if(b!=null&&!t.C.b(b)&&!t.v.b(b))throw A.d(A.ep(b,"onError",u.c))}else if(b!=null)b=A.ia(b,q)
s=new A.k(q,c.l("k<0>"))
r=b==null?1:3
this.W(new A.X(s,r,a,b,this.$ti.l("@<1>").a8(c).l("X<1,2>")))
return s},
c8(a,b){return this.aI(a,null,b)},
aY(a,b,c){var s=new A.k($.h,c.l("k<0>"))
this.W(new A.X(s,3,a,b,this.$ti.l("@<1>").a8(c).l("X<1,2>")))
return s},
bN(a){this.a=this.a&1|16
this.c=a},
X(a){this.a=a.a&30|this.a&1
this.c=a.c},
W(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.W(a)
return}s.X(r)}A.Z(null,null,s.b,new A.d4(s,a))}},
ak(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.ak(a)
return}n.X(s)}m.a=n.a_(a)
A.Z(null,null,n.b,new A.db(m,n))}},
Z(){var s=this.c
this.c=null
return this.a_(s)},
a_(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
aN(a){var s,r,q,p=this
p.a^=2
try{a.aI(new A.d8(p),new A.d9(p),t.P)}catch(q){s=A.S(q)
r=A.P(q)
A.fp(new A.da(p,s,r))}},
ab(a){var s,r=this,q=r.$ti
if(q.l("H<1>").b(a))if(q.b(a))A.e3(a,r)
else r.aN(a)
else{s=r.Z()
r.a=8
r.c=a
A.an(r,s)}},
ac(a){var s=this,r=s.Z()
s.a=8
s.c=a
A.an(s,r)},
G(a,b){var s=this.Z()
this.bN(A.ch(a,b))
A.an(this,s)},
a7(a){if(this.$ti.l("H<1>").b(a)){this.aO(a)
return}this.bz(a)},
bz(a){this.a^=2
A.Z(null,null,this.b,new A.d6(this,a))},
aO(a){if(this.$ti.b(a)){A.hm(a,this)
return}this.aN(a)},
by(a,b){this.a^=2
A.Z(null,null,this.b,new A.d5(this,a,b))},
$iH:1}
A.d4.prototype={
$0(){A.an(this.a,this.b)},
$S:0}
A.db.prototype={
$0(){A.an(this.b,this.a.a)},
$S:0}
A.d8.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.ac(p.$ti.c.a(a))}catch(q){s=A.S(q)
r=A.P(q)
p.G(s,r)}},
$S:4}
A.d9.prototype={
$2(a,b){this.a.G(a,b)},
$S:15}
A.da.prototype={
$0(){this.a.G(this.b,this.c)},
$S:0}
A.d7.prototype={
$0(){A.e3(this.a.a,this.b)},
$S:0}
A.d6.prototype={
$0(){this.a.ac(this.b)},
$S:0}
A.d5.prototype={
$0(){this.a.G(this.b,this.c)},
$S:0}
A.de.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.be(q.d)}catch(p){s=A.S(p)
r=A.P(p)
q=m.c&&m.b.a.c.a===s
o=m.a
if(q)o.c=m.b.a.c
else o.c=A.ch(s,r)
o.b=!0
return}if(l instanceof A.k&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=l.c
q.b=!0}return}if(l instanceof A.k){n=m.b.a
q=m.a
q.c=l.c8(new A.df(n),t.z)
q.b=!1}},
$S:0}
A.df.prototype={
$1(a){return this.a},
$S:16}
A.dd.prototype={
$0(){var s,r,q,p,o
try{q=this.a
p=q.a
q.c=p.b.b.aH(p.d,this.b)}catch(o){s=A.S(o)
r=A.P(o)
q=this.a
q.c=A.ch(s,r)
q.b=!0}},
$S:0}
A.dc.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=m.a.a.c
p=m.b
if(p.a.bY(s)&&p.a.e!=null){p.c=p.a.bV(s)
p.b=!1}}catch(o){r=A.S(o)
q=A.P(o)
p=m.a.a.c
n=m.b
if(p.a===r)n.c=p
else n.c=A.ch(r,q)
n.b=!0}},
$S:0}
A.bQ.prototype={}
A.U.prototype={
gk(a){var s={},r=new A.k($.h,t.a)
s.a=0
this.aB(new A.cG(s,this),!0,new A.cH(s,r),r.gaQ())
return r},
gbS(a){var s=new A.k($.h,A.r(this).l("k<1>")),r=this.aB(null,!0,new A.cE(s),s.gaQ())
r.aD(new A.cF(this,r,s))
return s}}
A.cG.prototype={
$1(a){++this.a.a},
$S(){return A.r(this.b).l("~(1)")}}
A.cH.prototype={
$0(){this.b.ab(this.a.a)},
$S:0}
A.cE.prototype={
$0(){var s,r,q,p,o
try{q=A.h_()
throw A.d(q)}catch(p){s=A.S(p)
r=A.P(p)
q=s
o=r
if(o==null)o=A.eq(q)
this.a.G(q,o)}},
$S:0}
A.cF.prototype={
$1(a){A.hO(this.b,this.c,a)},
$S(){return A.r(this.a).l("~(1)")}}
A.aN.prototype={
gi(a){return(A.aj(this.a)^892482866)>>>0},
q(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.am&&b.a===this.a}}
A.bU.prototype={
aV(){return this.w.bH(this)},
ai(){},
aj(){}}
A.bS.prototype={
aD(a){this.a=A.eO(this.d,a)},
aq(){var s,r=this,q=r.e&=4294967279
if((q&8)===0){q=r.e=q|8
if((q&64)!==0){s=r.r
if(s.a===1)s.a=3}if((q&32)===0)r.r=null
r.f=r.aV()}q=$.dO()
return q},
ai(){},
aj(){},
aV(){return null},
bx(a){var s,r,q=this,p=q.r
if(p==null)p=q.r=new A.c6()
s=p.c
if(s==null)p.b=p.c=a
else p.c=s.a=a
r=q.e
if((r&64)===0){r|=64
q.e=r
if(r<128)p.aL(q)}},
al(a){var s=this,r=s.e
s.e=r|32
s.d.bg(s.a,a)
s.e&=4294967263
s.bB((r&4)!==0)},
bB(a){var s,r,q=this,p=q.e
if((p&64)!==0&&q.r.c==null){p=q.e=p&4294967231
if((p&4)!==0)if(p<128){s=q.r
s=s==null?null:s.c==null
s=s!==!1}else s=!1
else s=!1
if(s){p&=4294967291
q.e=p}}for(;!0;a=r){if((p&8)!==0){q.r=null
return}r=(p&4)!==0
if(a===r)break
q.e=p^32
if(r)q.ai()
else q.aj()
p=q.e&=4294967263}if((p&64)!==0&&p<128)q.r.aL(q)}}
A.aV.prototype={
aB(a,b,c,d){return this.a.bQ(a,d,c,!0)}}
A.bY.prototype={}
A.bX.prototype={}
A.c6.prototype={
aL(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.fp(new A.dj(s,a))
s.a=1}}
A.dj.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.a
q.b=r
if(r==null)q.c=null
this.b.al(s.b)},
$S:0}
A.aP.prototype={
bK(){var s=this
if((s.b&2)!==0)return
A.Z(null,null,s.a,s.gbL())
s.b|=2},
aD(a){},
aq(){return $.dO()},
bM(){var s=this,r=s.b&=4294967293
if(r>=4)return
s.b=r|1
s.a.bf(s.c)}}
A.ca.prototype={}
A.dv.prototype={
$0(){return this.a.ab(this.b)},
$S:0}
A.ds.prototype={}
A.dx.prototype={
$0(){A.fZ(this.a,this.b)},
$S:0}
A.dl.prototype={
bf(a){var s,r,q
try{if(B.b===$.h){a.$0()
return}A.fa(null,null,this,a)}catch(q){s=A.S(q)
r=A.P(q)
A.dw(s,r)}},
c7(a,b){var s,r,q
try{if(B.b===$.h){a.$1(b)
return}A.fb(null,null,this,a,b)}catch(q){s=A.S(q)
r=A.P(q)
A.dw(s,r)}},
bg(a,b){return this.c7(a,b,t.z)},
b2(a){return new A.dm(this,a)},
b3(a,b){return new A.dn(this,a,b)},
c3(a){if($.h===B.b)return a.$0()
return A.fa(null,null,this,a)},
be(a){return this.c3(a,t.z)},
c6(a,b){if($.h===B.b)return a.$1(b)
return A.fb(null,null,this,a,b)},
aH(a,b){return this.c6(a,b,t.z,t.z)},
c5(a,b,c){if($.h===B.b)return a.$2(b,c)
return A.ib(null,null,this,a,b,c)},
c4(a,b,c){return this.c5(a,b,c,t.z,t.z,t.z)},
c2(a){return a},
aG(a){return this.c2(a,t.z,t.z,t.z)}}
A.dm.prototype={
$0(){return this.a.bf(this.b)},
$S:0}
A.dn.prototype={
$1(a){return this.a.bg(this.b,a)},
$S(){return this.c.l("~(0)")}}
A.c3.prototype={
gt(a){var s=new A.aR(this,this.r)
s.c=this.e
return s},
gk(a){return this.a},
L(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.aM(s==null?q.b=A.e4():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.aM(r==null?q.c=A.e4():r,b)}else return q.bt(b)},
bt(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.e4()
s=J.F(a)&1073741823
r=p[s]
if(r==null)p[s]=[q.ah(a)]
else{if(q.bE(r,a)>=0)return!1
r.push(q.ah(a))}return!0},
aM(a,b){if(a[b]!=null)return!1
a[b]=this.ah(b)
return!0},
aU(){this.r=this.r+1&1073741823},
ah(a){var s,r=this,q=new A.dh(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.aU()
return q},
bE(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.b6(a[r].a,b))return r
return-1}}
A.dh.prototype={}
A.aR.prototype={
gn(){var s=this.d
return s==null?A.r(this).c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.d(A.ac(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.a6.prototype={
gt(a){return new A.bw(a,this.gk(a))},
D(a,b){return this.p(a,b)},
gb7(a){return this.gk(a)===0},
c9(a){var s,r,q,p,o=this
if(o.gb7(a)){s=J.ey(0)
return s}r=o.p(a,0)
q=A.ct(o.gk(a),r,!0)
for(p=1;p<o.gk(a);++p)q[p]=o.p(a,p)
return q},
h(a){return A.dU(a,"[","]")}}
A.bx.prototype={
gk(a){return this.a},
h(a){return A.dY(this)}}
A.cu.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=A.e(a)
r.a=s+": "
r.a+=A.e(b)},
$S:17}
A.bI.prototype={
h(a){return A.dU(this,"{","}")},
D(a,b){var s,r,q
A.eE(b,"index")
s=A.eR(this,this.r)
for(r=b;s.m();){if(r===0){q=s.d
return q==null?A.r(s).c.a(q):q}--r}throw A.d(A.bo(b,b-r,this,"index"))}}
A.c9.prototype={}
A.bh.prototype={
q(a,b){if(b==null)return!1
return b instanceof A.bh&&this.a===b.a},
gi(a){return B.a.gi(this.a)},
h(a){var s,r,q,p,o,n=this.a,m=B.a.C(n,36e8),l=n%36e8
if(n<0){m=0-m
n=0-l
s="-"}else{n=l
s=""}r=B.a.C(n,6e7)
n%=6e7
q=r<10?"0":""
p=B.a.C(n,1e6)
o=p<10?"0":""
return s+m+":"+q+r+":"+o+p+"."+B.d.c1(B.a.h(n%1e6),6,"0")}}
A.d0.prototype={
h(a){return this.aR()}}
A.j.prototype={
gU(){return A.P(this.$thrownJsError)}}
A.bb.prototype={
h(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.cm(s)
return"Assertion failed"}}
A.L.prototype={}
A.G.prototype={
gaf(){return"Invalid argument"+(!this.a?"(s)":"")},
gae(){return""},
h(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.gaf()+q+o
if(!s.a)return n
return n+s.gae()+": "+A.cm(s.gaA())},
gaA(){return this.b}}
A.aH.prototype={
gaA(){return this.b},
gaf(){return"RangeError"},
gae(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.e(q):""
else if(q==null)s=": Not greater than or equal to "+A.e(r)
else if(q>r)s=": Not in inclusive range "+A.e(r)+".."+A.e(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.e(r)
return s}}
A.bn.prototype={
gaA(){return this.b},
gaf(){return"RangeError"},
gae(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gk(a){return this.f}}
A.bM.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.bK.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.a7.prototype={
h(a){return"Bad state: "+this.a}}
A.bf.prototype={
h(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.cm(s)+"."}}
A.bC.prototype={
h(a){return"Out of Memory"},
gU(){return null},
$ij:1}
A.aI.prototype={
h(a){return"Stack Overflow"},
gU(){return null},
$ij:1}
A.d3.prototype={
h(a){return"Exception: "+this.a}}
A.cp.prototype={
h(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=B.d.bm(q,0,75)+"..."
return r+"\n"+q}}
A.bp.prototype={
gk(a){var s,r=this.gt(this)
for(s=0;r.m();)++s
return s},
D(a,b){var s,r
A.eE(b,"index")
s=this.gt(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.d(A.bo(b,b-r,this,"index"))},
h(a){return A.h0(this,"(",")")}}
A.m.prototype={
gi(a){return A.f.prototype.gi.call(this,this)},
h(a){return"null"}}
A.f.prototype={$if:1,
q(a,b){return this===b},
gi(a){return A.aj(this)},
h(a){return"Instance of '"+A.cw(this)+"'"},
gF(a){return A.ix(this)},
toString(){return this.h(this)}}
A.cb.prototype={
h(a){return""},
$ix:1}
A.bJ.prototype={
gk(a){return this.a.length},
h(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.c.prototype={}
A.b8.prototype={
h(a){return String(a)}}
A.b9.prototype={
h(a){return String(a)}}
A.be.prototype={
gaC(a){return new A.o(a,"blur",!1,t.E)},
gaE(a){return new A.o(a,"focus",!1,t.E)}}
A.A.prototype={
gk(a){return a.length}}
A.ad.prototype={
a9(a,b){var s=$.fs(),r=s[b]
if(typeof r=="string")return r
r=this.bR(a,b)
s[b]=r
return r},
bR(a,b){var s
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
s=$.fu()+b
if(s in a)return s
return b},
am(a,b,c,d){a.setProperty(b,c,d)},
gk(a){return a.length}}
A.ck.prototype={}
A.cl.prototype={
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
return"Rectangle ("+A.e(p)+", "+A.e(s)+") "+A.e(r)+" x "+A.e(q)},
q(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=J.a0(b)
if(s===r.ga2(b)){s=a.top
s.toString
if(s===r.ga4(b)){s=a.width
s.toString
if(s===r.ga5(b)){s=a.height
s.toString
r=s===r.ga1(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gi(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return A.aG(p,s,r,q)},
gb4(a){var s=a.bottom
s.toString
return s},
ga1(a){var s=a.height
s.toString
return s},
ga2(a){var s=a.left
s.toString
return s},
gbd(a){var s=a.right
s.toString
return s},
ga4(a){var s=a.top
s.toString
return s},
ga5(a){var s=a.width
s.toString
return s},
$iK:1}
A.cZ.prototype={
gb7(a){return this.a.firstElementChild==null},
gk(a){return this.b.length},
p(a,b){return t.h.a(this.b[b])},
gt(a){var s=this.c9(this)
return new J.ab(s,s.length)},
M(a,b){A.hl(this.a,b)},
H(a){J.en(this.a)}}
A.n.prototype={
gP(a){return new A.cZ(a,a.children)},
sP(a,b){var s=b.slice(0),r=this.gP(a)
r.H(0)
r.M(0,s)},
h(a){return a.localName},
gaC(a){return new A.o(a,"blur",!1,t.E)},
gb8(a){return new A.o(a,"click",!1,t.R)},
gaE(a){return new A.o(a,"focus",!1,t.E)},
gb9(a){return new A.o(a,"keydown",!1,t.L)},
$in:1}
A.a.prototype={$ia:1}
A.bi.prototype={
bw(a,b,c,d){return a.addEventListener(b,A.ar(c,1),!1)},
bI(a,b,c,d){return a.removeEventListener(b,A.ar(c,1),!1)}}
A.bl.prototype={
gk(a){return a.length}}
A.a3.prototype={
gk(a){return a.length},
p(a,b){var s=a.length
if(b>>>0!==b||b>=s)throw A.d(A.bo(b,s,a,null))
return a[b]},
D(a,b){return a[b]},
$iT:1}
A.B.prototype={$iB:1}
A.q.prototype={
gbZ(a){var s,r,q,p,o
if(!!a.offsetX)return new A.ah(a.offsetX,a.offsetY,t.H)
else{s=a.target
r=t.h
if(!r.b(A.f3(s)))throw A.d(A.aJ("offsetX is only supported on elements"))
q=r.a(A.f3(s))
s=a.clientX
r=a.clientY
p=q.getBoundingClientRect()
o=p.left
o.toString
p=p.top
p.toString
return new A.ah(B.c.bh(s-o),B.c.bh(r-p),t.H)}},
$iq:1}
A.bT.prototype={
gt(a){var s=this.a.childNodes
return new A.aw(s,s.length)},
gk(a){return this.a.childNodes.length},
p(a,b){return this.a.childNodes[b]}}
A.i.prototype={
aP(a){var s
for(;s=a.firstChild,s!=null;)a.removeChild(s)},
h(a){var s=a.nodeValue
return s==null?this.bn(a):s},
$ii:1}
A.aE.prototype={
gk(a){return a.length},
p(a,b){var s=a.length
if(b>>>0!==b||b>=s)throw A.d(A.bo(b,s,a,null))
return a[b]},
D(a,b){return a[b]},
$iT:1}
A.bH.prototype={
gk(a){return a.length}}
A.E.prototype={}
A.aK.prototype={
c_(a,b,c){var s=A.eP(a.open(b,c))
return s}}
A.aO.prototype={
h(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return"Rectangle ("+A.e(p)+", "+A.e(s)+") "+A.e(r)+" x "+A.e(q)},
q(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=J.a0(b)
if(s===r.ga2(b)){s=a.top
s.toString
if(s===r.ga4(b)){s=a.width
s.toString
if(s===r.ga5(b)){s=a.height
s.toString
r=s===r.ga1(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gi(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return A.aG(p,s,r,q)},
ga1(a){var s=a.height
s.toString
return s},
ga5(a){var s=a.width
s.toString
return s}}
A.dT.prototype={}
A.aQ.prototype={
aB(a,b,c,d){return A.W(this.a,this.b,a,!1)}}
A.o.prototype={}
A.c_.prototype={
aq(){var s=this
if(s.b==null)return $.dQ()
s.b0()
s.d=s.b=null
return $.dQ()},
aD(a){var s,r=this
if(r.b==null)throw A.d(A.hd("Subscription has been canceled."))
r.b0()
s=A.ff(new A.d2(a),t.B)
r.d=s
r.b_()},
b_(){var s,r=this.d,q=r!=null
if(q&&!0){s=this.b
s.toString
if(q)J.fL(s,this.c,r,!1)}},
b0(){var s,r=this.d
if(r!=null){s=this.b
s.toString
J.fM(s,this.c,r,!1)}}}
A.d1.prototype={
$1(a){return this.a.$1(a)},
$S:1}
A.d2.prototype={
$1(a){return this.a.$1(a)},
$S:1}
A.ax.prototype={
gt(a){return new A.aw(a,this.gk(a))}}
A.aw.prototype={
m(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.fK(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gn(){var s=this.d
return s==null?A.r(this).c.a(s):s}}
A.d_.prototype={}
A.bV.prototype={}
A.c1.prototype={}
A.c2.prototype={}
A.c4.prototype={}
A.c5.prototype={}
A.bj.prototype={
gag(){return new A.by(new A.bN(this.b,new A.cn()),new A.co())},
M(a,b){var s,r,q
for(s=b.length,r=this.b.a,q=0;q<b.length;b.length===s||(0,A.b5)(b),++q)r.appendChild(b[q])},
H(a){J.en(this.b.a)},
gk(a){return J.dR(this.gag().a)},
p(a,b){var s=this.gag()
return s.b.$1(J.eo(s.a,b))},
gt(a){var s=A.eB(this.gag(),!1)
return new J.ab(s,s.length)}}
A.cn.prototype={
$1(a){return t.h.b(a)},
$S:18}
A.co.prototype={
$1(a){return t.h.a(a)},
$S:19}
A.ah.prototype={
h(a){return"Point("+A.e(this.a)+", "+A.e(this.b)+")"},
q(a,b){if(b==null)return!1
return b instanceof A.ah&&this.a===b.a&&this.b===b.b},
gi(a){return A.eJ(B.c.gi(this.a),B.c.gi(this.b),0)}}
A.c8.prototype={
gbd(a){return this.$ti.c.a(this.a+this.c)},
gb4(a){return this.$ti.c.a(this.b+this.d)},
h(a){var s=this
return"Rectangle ("+s.a+", "+s.b+") "+s.c+" x "+s.d},
q(a,b){var s,r,q,p,o=this
if(b==null)return!1
if(t.q.b(b)){s=o.a
r=J.a0(b)
if(s===r.ga2(b)){q=o.b
if(q===r.ga4(b)){p=o.$ti.c
s=p.a(s+o.c)===r.gbd(b)&&p.a(q+o.d)===r.gb4(b)}else s=!1}else s=!1}else s=!1
return s},
gi(a){var s=this,r=s.a,q=s.b,p=s.$ti.c
return A.eK(B.a.gi(r),B.a.gi(q),B.a.gi(p.a(r+s.c)),B.a.gi(p.a(q+s.d)),0)}}
A.K.prototype={
ga2(a){return this.a},
ga4(a){return this.b},
ga5(a){return this.c},
ga1(a){return this.d}}
A.b.prototype={
gP(a){return new A.bj(a,new A.bT(a))},
sP(a,b){this.aP(a)
new A.bj(a,new A.bT(a)).M(0,b)},
gaC(a){return new A.o(a,"blur",!1,t.E)},
gb8(a){return new A.o(a,"click",!1,t.R)},
gaE(a){return new A.o(a,"focus",!1,t.E)},
gb9(a){return new A.o(a,"keydown",!1,t.L)}}
A.at.prototype={
gi(a){var s=this.a,r=this.b
return A.aG(new A.z(s,r).$s,s,r,B.e)},
q(a,b){var s,r,q,p
if(b==null)return!1
if(b instanceof A.at){s=b.a
r=b.b
q=this.a
p=this.b
p=A.aG(new A.z(s,r).$s,s,r,B.e)===A.aG(new A.z(q,p).$s,q,p,B.e)
s=p}else s=!1
return s},
h(a){var s=this
return"("+s.a+" "+s.b+") => '"+s.c+"' "+s.d}}
A.ae.prototype={}
A.af.prototype={
h(a){var s=this
return"               row: "+s.a+"\n            column: "+s.b+"\n         character: '"+s.c+"'\n    characterColor: "+s.d+"\n\n          pixelRow: "+s.e+"\n       pixelColumn: "+s.f+"\n         pixelIsOn: "+s.r+"\n    "}}
A.ai.prototype={
sO(a){var s,r,q,p=this
if(a<0){s=p.d=a
for(r=p.b,q=p.a;s<0;){s+=r
p.d=s
p.c=B.a.j(p.c-1,q)}}else{s=p.b
p.c=B.a.j(p.c+B.a.A(a,s),p.a)
p.d=B.a.j(a,s)}},
gu(a){return this.c*this.b+this.d},
su(a,b){var s=this,r=s.b
s.c=B.a.j(B.a.A(b,r),s.a)
s.d=B.a.j(b,r)}}
A.C.prototype={
aR(){return"Mode."+this.b}}
A.bG.prototype={
bp(a,b,c,d,e,f,g){var s,r=this,q="fit-content",p=document
A.W(p,"focus",new A.cy(r),!1)
A.W(p,"blur",new A.cz(r),!1)
p=r.r
p.tabIndex=-1
s=p.style
s.display="block"
s=p.style
s.outline="none"
p.getContext("2d").imageSmoothingEnabled=!1
A.W(p,"focus",new A.cA(r),!1)
A.W(p,"blur",new A.cB(r),!1)
s=b.style
s.display="flex"
s=b.style
B.f.am(s,B.f.a9(s,"align-items"),"flex-start","")
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
J.fP(b,[p])
r.H(0)},
a0(a,b){return new A.z(B.a.j(a,this.a),B.a.j(b,this.b))},
aa(){var s,r=this.w,q=r.getContext("2d")
q.save()
q.beginPath()
s=r.width
s.toString
r=r.height
r.toString
q.clearRect(0,0,s,r)
q.restore()
return q},
ad(){var s=this.r.getContext("2d")
s.save()
s.beginPath()
s.drawImage(this.w,0,0)
s.restore()
return s},
J(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=a<0||a>=k.a||b<0||b>=k.b
if(j)return
s=k.a0(a,b)
j=s.a
r=s.b
q=A.e0(r)
p=q.a
o=B.a.T(1,q.b)
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
K(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=this,j=a<0||a>=k.a||b<0||b>=k.b
if(j)return
s=k.a0(a,b)
j=s.a
r=s.b
q=A.e0(r)
p=q.a
o=B.a.T(1,q.b)
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
bb(a,b){var s=this.a0(b,a),r=A.e0(s.b),q=B.a.T(1,r.b)
return(this.x[s.a][r.a]&q)>>>0>0},
b5(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
if(b==null)b=A.dZ(0,0,g.b,g.a,t.S)
g.aa()
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
n=B.a.j(r,o)
m=g.b
l=B.a.j(s,m)
k=Math.abs(b.d)
j=Math.min(r+k,o)
i=Math.min(s+k,m)
for(s=g.w,q=n;q<j;++q){h=B.a.j(q,o)
for(p=l;p<i;++p)g.J(h,B.a.j(p,m),s,!1)}}g.ad()},
H(a){return this.b5(a,null)},
bG(a,b,c,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
d.aa()
s=d.a0(a,b)
r=s.a
q=s.b
p=B.a.bO(1,a1)-1
for(o=a1-1,n=d.w,m=0;m<8;++m){l=c[m]
k=l&p
l=[]
for(j=r+m,i=0;i<a1;++i){h=d.bb(q+i,j)?1:0
l.push(B.a.T(h,o-i))}g=B.i.bU(l,0,new A.cx())
switch(a2){case B.n:for(i=0;i<a1;++i){l=q+i
if((B.a.B(k,o-i)&1)>0)d.K(j,l,a0,n,!1)
else d.J(j,l,n,!1)}break
case B.dG:for(i=0;i<a1;++i){l=q+i
if((B.a.B(k,o-i)&1)>0)d.J(j,l,n,!1)
else d.K(j,l,a0,n,!1)}break
case B.dI:for(i=0;i<a1;++i){f=o-i
if((B.a.B(k,f)&1)>0&&(B.a.bl(g,f)&1)===0)d.K(j,q+i,a0,n,!1)}break
case B.dH:for(i=0;i<a1;++i)if((B.a.B(k,o-i)&1)>0)d.K(j,q+i,a0,n,!1)
break
case B.dJ:for(e=k&g,i=0;i<a1;++i)if((B.a.B(e,o-i)&1)>0)d.K(j,q+i,a0,n,!1)
break
case B.dK:for(e=k&g,i=0;i<a1;++i)if((B.a.B(e,o-i)&1)>0)d.J(j,q+i,n,!1)
break
case B.dL:for(e=k&g,i=0;i<a1;++i)if((B.a.B(e,o-i)&1)===0)d.J(j,q+i,n,!1)
break
case B.dM:for(e=k&g,i=0;i<a1;++i){l=q+i
if((B.a.B(e,o-i)&1)===0)d.J(j,l,n,!1)
else d.K(j,l,a0,n,!1)}break}}d.ad()},
bc(a,b,c){this.bG(c.a,c.b,b,a,8,B.n,!0,!1,!1)},
bk(a){var s,r,q,p,o,n,m=this,l=m.a
a=B.a.j(a,l)
for(s=l-a,r=m.x,q=0;q<s;++q)for(p=q+a,o=0;n=r[q],o<n.length;++o)n[o]=r[p][o]
for(;q<l;++q)for(o=0;p=r[q],o<p.length;++o)p[o]=0
m.aa()
l=m.w
r=l.getContext("2d")
r.save()
r.beginPath()
p=m.d
r.drawImage(m.r,0,-a*p)
r.fillStyle=m.f
l=l.width
l.toString
r.fillRect(0,s*p,l,a*p)
r.restore()
m.ad()},
S(a){var s=this.r,r=s.style
B.f.am(r,B.f.a9(r,"opacity"),"1.0","")
s.focus()},
N(a){var s=this.r,r=s.style
B.f.am(r,B.f.a9(r,"opacity"),"0.5","")
s.blur()}}
A.cy.prototype={
$1(a){this.a.y=!0},
$S:1}
A.cz.prototype={
$1(a){this.a.y=!1},
$S:1}
A.cA.prototype={
$1(a){this.a.S(0)},
$S:1}
A.cB.prototype={
$1(a){this.a.N(0)},
$S:1}
A.cx.prototype={
$2(a,b){return(a|b)>>>0},
$S:20}
A.ak.prototype={
aR(){return"State."+this.b}}
A.cJ.prototype={
bq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,a0,a1){var s,r,q=this,p=q.f
p.tabIndex=-1
s=J.a0(p)
r=s.gaE(p)
A.W(r.a,r.b,new A.cK(q),!1)
r=s.gaC(p)
A.W(r.a,r.b,new A.cL(q),!1)
r=s.gb9(p)
A.W(r.a,r.b,new A.cM(q,l,new A.cQ(),new A.cP(q)),!1)
p=s.gb8(p)
A.W(p.a,p.b,new A.cN(q,new A.cR(q),o),!1)
A.hf(new A.bh(3e5),new A.cO(q))
q.N(0)
q.H(0)},
gau(a){var s=this.w
return s.gau(s)},
gap(a){var s=this.w
return s.gap(s)},
ao(a,b){return new A.z(B.a.j(a,this.a),B.a.j(b,this.b))},
aT(){var s=this,r=s.x
s.CW.L(0,new A.at(r.c,r.d," ","white"))
s.b1()
s.cy=!1},
b1(){var s,r,q,p,o,n,m,l,k,j
for(s=this.CW,r=A.eR(s,s.r),q=this.w,p=this.cx,o=A.r(r).c;r.m();){n=r.d
if(n==null)n=o.a(n)
m=n.a
l=n.b
if(p.R(n.c)){k=p.p(0,n.c)
k.toString
j=k}else j=$.fz()
q.bc(n.d,j,new A.z(m*10,l*8))}if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.aU()}},
aJ(a,b){var s=this.ao(b,a)
return this.ch[s.a][s.b].c},
E(){var s,r=this.x
r.sO(0)
s=r.c
if(s===this.a-1)this.a6(0)
else r.c=B.a.j(s+1,r.a)},
a6(a){var s,r,q,p,o,n,m,l,k=this
for(s=k.a-1,r=k.b,q=k.ch,p=0;p<s;p=o)for(o=p+1,n=0;n<r;++n){m=q[p][n]
l=q[o][n]
m.c=l.c
m.d=l.d}for(n=0;n<r;++n){m=q[s][n]
m.c=" "
m.d="white"}k.w.bk(10)},
a3(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=a0==null?g.x.c:a0,e=g.ao(f,c==null?g.x.d:c)
f=g.x
s=f.a
f.c=B.a.j(e.a,s)
f.sO(e.b)
if(b==null)b="white"
for(r=a.split(""),q=r.length,p=g.ch,o=g.CW,n=g.a-1,m=g.b-1,l=0;l<q;++l){k=r[l]
j=f.c
i=f.d
h=p[j][i]
h.c=k
h.d=b
o.L(0,h)
if(j===n&&i===m){g.a6(0)
f.c=B.a.j(f.c-1,s)}f.sO(f.d+1)}g.b1()
if(d)g.E()},
c0(a,b,c){return this.a3(a,b,null,c,null)},
aF(a,b){return this.a3(a,null,null,b,null)},
I(a,b){return this.a3(a,b,null,!0,null)},
ba(a){return this.a3(a,null,null,!0,null)},
H(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=t.S,f=A.dZ(0,0,h.b,h.a,g)
for(s=f.b,r=f.d,q=f.$ti.c,p=q.a(s+r),o=f.a,n=f.c,m=o+n,l=h.ch,k=s;k<p;++k)for(q.a(m),j=o;j<m;++j){i=l[k][j]
i.c=" "
i.d="white"}h.w.b5(0,A.dZ(o*8,s*10,n*8,r*10,g))
g=h.x
g.c=B.a.j(s,g.a)
g.sO(o)},
S(a){return this.gau(this).$0()},
N(a){return this.gap(this).$0()}}
A.cR.prototype={
$1(a){var s=this.a,r=s.w,q=J.fN(a),p=Math.max(Math.min(B.c.A(q.b-1,r.d),r.a-1),0),o=Math.max(Math.min(B.c.A(q.a-1,r.c),r.b-1),0),n=B.a.C(p,10),m=B.a.C(o,8),l=s.aJ(m,n),k=s.ao(n,m)
return new A.af(n,m,l,s.ch[k.a][k.b].d,p,o,r.bb(o,p))},
$S:21}
A.cQ.prototype={
$1(a){a.keyCode
a.key
return new A.ae()},
$S:22}
A.cP.prototype={
$0(){var s,r,q,p,o=this.a,n=o.a,m=o.b,l=new A.ai(n,m),k=o.y
l.su(0,k.gu(k))
k=[]
for(s=o.z,r=s.b;q=l.c,p=l.d,q*m+p<s.c*r+s.d;q=l.c*m+l.d+1,l.c=B.a.j(B.a.A(q,m),n),l.d=B.a.j(q,m))k.push(o.aJ(p,q))
return B.i.bX(k,"")},
$S:23}
A.cK.prototype={
$1(a){this.a.w.S(0)},
$S:1}
A.cL.prototype={
$1(a){this.a.w.N(0)},
$S:1}
A.cM.prototype={
$1(a){var s,r,q,p,o
a.preventDefault()
s=this.a
switch(s.ay){case B.h:break
case B.dN:r=s.at
if(r.d!=null){r.L(0,this.c.$1(a))
s.ay=B.h}break
case B.j:s.aT()
$label0$1:{q=a.keyCode
if(13===q){r=s.as
if(r.d!=null){r.L(0,J.fQ(this.d.$0()))
s.E()
s.ay=B.h}break $label0$1}if(8===q){r=s.x
p=s.y
if(r.gu(r)>p.gu(p)){r.su(0,r.gu(r)-1)
s.aF(" ",!1)
r.su(0,r.gu(r)-1)}break $label0$1}r=a.key
if(r!=null){if(r.length===1){p=s.x
o=s.z
o=p.gu(p)<o.gu(o)
p=o}else p=!1
if(p)s.aF(r,!1)}}break
case B.p:break}},
$S:24}
A.cN.prototype={
$1(a){var s
a.preventDefault()
s=this.a
if(s.ay===B.p&&s.ax.d!=null){s.ax.L(0,this.b.$1(a))
s.ay=B.h}},
$S:25}
A.cO.prototype={
$1(a){var s,r,q,p=this.a,o=p.w
if(o.y&&document.activeElement===o.r&&p.ay===B.j)if(p.cy)p.aT()
else{s=p.x
r=s.c
s=s.d
q=$.fy()
o.bc("white",q,new A.z(r*10,s*8))
p.cy=!0}},
$S:26}
A.dL.prototype={
$0(){var s,r,q=this.a
q.H(0)
for(s=[" ","  _____ _   _    _____     _           _"," :     : :_: :  :   __:___: :_ ___ ___: :"," :  :  : : . :  :__   :  _:   : . : . : :"," :_____:_:___:  :_____:___:_:_:___:___:_:"," "," Welcome to Old School, a library for adding"," old school terminals to your html documents."," "," Input 'help' for help."," "],r=0;r<11;++r)q.I(s[r],"lightgreen")},
$S:0}
A.dH.prototype={
$0(){var s,r,q
for(s=[" "," Commands"," --------"," "," reset        Resets this demo."," help         Shows this information."," list         Lists the demos available."," info [demo]  Gives a description of [demo]."," load [demo]  Loads [demo] into this page."," "],r=this.a,q=0;q<10;++q)r.I(s[q],"lightgreen")},
$S:0}
A.dJ.prototype={
$0(){var s,r,q=[" "," Demos"," -----"," "],p=[]
for(s=this.a,s=A.h6(s,s.r);s.m();)p.push(" - "+s.d)
B.i.M(q,p)
q.push(" ")
p=q.length
s=this.b
r=0
for(;r<q.length;q.length===p||(0,A.b5)(q),++r)s.I(q[r],"lightgreen")},
$S:0}
A.dI.prototype={
$1(a){var s,r,q,p,o=this.a
if(o.R(a)){s=[" "]
r=[]
for(o=o.p(0,a),q=o.length,p=0;p<o.length;o.length===q||(0,A.b5)(o),++p)r.push(" "+o[p])
B.i.M(s,r)
s.push(" ")
o=s.length
r=this.b
p=0
for(;p<s.length;s.length===o||(0,A.b5)(s),++p)r.I(s[p],"lightgreen")}else{o=this.b
o.E()
o.I(" No demo called '"+a+"' found.","orange")
o.ba(" Input `list` to see available demos.")
o.E()}},
$S:6}
A.dK.prototype={
$1(a){var s
if(this.a.R(a))B.dQ.c_(window,a+".html","_self")
else{s=this.b
s.E()
s.I(" No demo called '"+a+"' found.","orange")
s.ba(" Input `list` to see available demos.")
s.E()}},
$S:6};(function aliases(){var s=J.ay.prototype
s.bn=s.h
s=J.a5.prototype
s.bo=s.h})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_0i
s(A,"ik","hh",3)
s(A,"il","hi",3)
s(A,"im","hj",3)
r(A,"fh","id",0)
s(A,"io","i8",5)
q(A.k.prototype,"gaQ","G",14)
p(A.aP.prototype,"gbL","bM",0)
var n
o(n=A.bG.prototype,"gau","S",0)
o(n,"gap","N",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.f,null)
q(A.f,[A.dW,J.ay,J.ab,A.j,A.a2,A.cC,A.bw,A.bp,A.bz,A.bO,A.bk,A.ao,A.bg,A.cT,A.cv,A.av,A.aU,A.bx,A.cs,A.bv,A.cq,A.di,A.w,A.c0,A.cc,A.aW,A.bP,A.bd,A.U,A.bS,A.bR,A.X,A.k,A.bQ,A.bY,A.c6,A.aP,A.ca,A.ds,A.bI,A.dh,A.aR,A.a6,A.bh,A.d0,A.bC,A.aI,A.d3,A.cp,A.m,A.cb,A.bJ,A.ck,A.dT,A.c_,A.ax,A.aw,A.d_,A.ah,A.c8,A.at,A.ae,A.af,A.ai,A.bG,A.cJ])
q(J.ay,[J.bq,J.aA,J.v,J.aB,J.a4])
q(J.v,[J.a5,J.I,A.bA,A.bi,A.bV,A.cl,A.au,A.a,A.c1,A.c4])
q(J.a5,[J.bD,J.al,J.J])
r(J.cr,J.I)
q(J.aB,[J.az,J.br])
q(A.j,[A.bu,A.L,A.bt,A.bL,A.bW,A.bF,A.bZ,A.bb,A.G,A.bM,A.bK,A.a7,A.bf])
q(A.a2,[A.ci,A.cj,A.cI,A.dC,A.dE,A.cW,A.cV,A.dt,A.d8,A.df,A.cG,A.cF,A.dn,A.d1,A.d2,A.cn,A.co,A.cy,A.cz,A.cA,A.cB,A.cR,A.cQ,A.cK,A.cL,A.cM,A.cN,A.cO,A.dI,A.dK])
q(A.ci,[A.dN,A.cX,A.cY,A.dq,A.dp,A.d4,A.db,A.da,A.d7,A.d6,A.d5,A.de,A.dd,A.dc,A.cH,A.cE,A.dj,A.dv,A.dx,A.dm,A.cP,A.dL,A.dH,A.dJ])
q(A.bp,[A.by,A.bN])
r(A.c7,A.ao)
r(A.z,A.c7)
r(A.bm,A.bg)
r(A.aF,A.L)
q(A.cI,[A.cD,A.as])
r(A.aC,A.bx)
r(A.bs,A.aC)
q(A.cj,[A.dD,A.du,A.dy,A.d9,A.cu,A.cx])
r(A.ag,A.bA)
r(A.aS,A.ag)
r(A.aT,A.aS)
r(A.aD,A.aT)
r(A.bB,A.aD)
r(A.aX,A.bZ)
q(A.U,[A.aV,A.aQ])
r(A.aN,A.aV)
r(A.am,A.aN)
r(A.bU,A.bS)
r(A.aM,A.bU)
r(A.aL,A.bR)
r(A.bX,A.bY)
r(A.dl,A.ds)
r(A.c9,A.bI)
r(A.c3,A.c9)
q(A.G,[A.aH,A.bn])
q(A.bi,[A.i,A.aK])
q(A.i,[A.n,A.A])
q(A.n,[A.c,A.b])
q(A.c,[A.b8,A.b9,A.be,A.bl,A.bH])
r(A.ad,A.bV)
q(A.a6,[A.cZ,A.bT,A.bj])
r(A.c2,A.c1)
r(A.a3,A.c2)
r(A.E,A.a)
q(A.E,[A.B,A.q])
r(A.c5,A.c4)
r(A.aE,A.c5)
r(A.aO,A.au)
r(A.o,A.aQ)
r(A.K,A.c8)
q(A.d0,[A.C,A.ak])
s(A.aS,A.a6)
s(A.aT,A.bk)
s(A.bV,A.ck)
s(A.c1,A.a6)
s(A.c2,A.ax)
s(A.c4,A.a6)
s(A.c5,A.ax)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{u:"int",is:"double",R:"num",D:"String",ed:"bool",m:"Null",eA:"List"},mangledNames:{},types:["~()","~(a)","m()","~(~())","m(@)","~(@)","~(D)","H<m>()","@(@)","@(@,D)","@(D)","m(~())","m(@,x)","~(u,@)","~(f,x)","m(f,x)","k<@>(@)","~(f?,f?)","ed(i)","n(i)","u(u,u)","af(q)","ae(B)","D()","~(B)","~(q)","~(cS)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.z&&a.b(c.a)&&b.b(c.b)}}
A.hE(v.typeUniverse,JSON.parse('{"bD":"a5","al":"a5","J":"a5","iP":"a","j0":"a","iO":"b","j3":"b","iQ":"c","j7":"c","j4":"i","j_":"i","j8":"q","iS":"E","iR":"A","jd":"A","j6":"n","j5":"a3","bq":{"y":[]},"aA":{"m":[],"y":[]},"aB":{"R":[]},"az":{"u":[],"R":[],"y":[]},"br":{"R":[],"y":[]},"a4":{"D":[],"y":[]},"bu":{"j":[]},"aF":{"L":[],"j":[]},"bt":{"j":[]},"bL":{"j":[]},"aU":{"x":[]},"bW":{"j":[]},"bF":{"j":[]},"ag":{"T":["1"]},"aD":{"T":["u"]},"bB":{"T":["u"],"y":[]},"bZ":{"j":[]},"aX":{"L":[],"j":[]},"k":{"H":["1"]},"aW":{"cS":[]},"bd":{"j":[]},"am":{"U":["1"]},"aL":{"bR":["1"]},"aN":{"U":["1"]},"aV":{"U":["1"]},"u":{"R":[]},"bb":{"j":[]},"L":{"j":[]},"G":{"j":[]},"aH":{"j":[]},"bn":{"j":[]},"bM":{"j":[]},"bK":{"j":[]},"a7":{"j":[]},"bf":{"j":[]},"bC":{"j":[]},"aI":{"j":[]},"cb":{"x":[]},"n":{"i":[]},"B":{"a":[]},"q":{"a":[]},"c":{"n":[],"i":[]},"b8":{"n":[],"i":[]},"b9":{"n":[],"i":[]},"be":{"n":[],"i":[]},"A":{"i":[]},"au":{"K":["R"]},"bl":{"n":[],"i":[]},"a3":{"T":["i"]},"aE":{"T":["i"]},"bH":{"n":[],"i":[]},"E":{"a":[]},"aO":{"K":["R"]},"aQ":{"U":["1"]},"o":{"aQ":["1"],"U":["1"]},"K":{"c8":["1"]},"b":{"n":[],"i":[]}}'))
A.hD(v.typeUniverse,JSON.parse('{"I":1,"cr":1,"ab":1,"bw":1,"by":2,"bz":2,"bN":1,"bO":1,"bk":1,"bg":2,"bm":2,"aC":2,"bv":1,"bs":2,"ag":1,"aN":1,"bU":1,"bS":1,"aV":1,"bY":1,"bX":1,"c6":1,"aP":1,"ca":1,"c3":1,"aR":1,"a6":1,"bx":2,"bI":1,"c9":1,"eA":1,"bp":1,"c_":1,"ax":1,"aw":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.iu
return{h:s("n"),Q:s("j"),B:s("a"),Z:s("j1"),b:s("I<@>"),T:s("aA"),g:s("J"),p:s("T<@>"),V:s("ae"),m:s("af"),P:s("m"),K:s("f"),H:s("ah<R>"),I:s("j9"),F:s("+()"),q:s("K<R>"),l:s("x"),N:s("D"),D:s("cS"),r:s("y"),c:s("L"),o:s("al"),E:s("o<a>"),L:s("o<B>"),R:s("o<q>"),U:s("k<m>"),d:s("k<@>"),a:s("k<u>"),y:s("ed"),i:s("is"),z:s("@"),v:s("@(f)"),C:s("@(f,x)"),S:s("u"),A:s("0&*"),_:s("f*"),O:s("H<m>?"),X:s("f?"),n:s("R"),u:s("~(f)"),k:s("~(f,x)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.f=A.ad.prototype
B.z=J.ay.prototype
B.i=J.I.prototype
B.a=J.az.prototype
B.c=J.aB.prototype
B.d=J.a4.prototype
B.A=J.J.prototype
B.B=J.v.prototype
B.o=J.bD.prototype
B.k=J.al.prototype
B.dQ=A.aK.prototype
B.l=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.q=function() {
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
B.w=function(getTagFallback) {
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
B.r=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.t=function(hooks) {
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
B.v=function(hooks) {
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
B.u=function(hooks) {
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
B.m=function(hooks) { return hooks; }

B.x=new A.bC()
B.e=new A.cC()
B.b=new A.dl()
B.y=new A.cb()
B.a_=s([126,129,165,129,189,153,129,126])
B.J=s([126,255,219,255,195,231,255,126])
B.a0=s([108,254,254,254,124,56,16,0])
B.a1=s([16,56,124,254,124,56,16,0])
B.bN=s([56,124,56,254,254,124,56,124])
B.cn=s([16,16,56,124,254,124,56,124])
B.cy=s([0,0,24,60,60,24,0,0])
B.dD=s([255,255,231,195,195,231,255,255])
B.cJ=s([0,60,102,66,66,102,60,0])
B.dC=s([255,195,153,189,189,153,195,255])
B.cU=s([15,7,15,125,204,204,204,120])
B.d4=s([60,102,102,102,60,24,126,24])
B.df=s([63,51,63,48,48,112,240,224])
B.dr=s([127,99,127,99,99,103,230,192])
B.V=s([153,90,60,231,231,60,90,153])
B.a2=s([128,224,248,254,248,224,128,0])
B.ad=s([2,14,62,254,62,14,2,0])
B.ao=s([24,60,126,24,24,126,60,24])
B.az=s([102,102,102,102,102,0,102,0])
B.aK=s([127,219,219,123,27,27,27,0])
B.aV=s([62,99,56,108,108,56,204,120])
B.b5=s([0,0,0,0,126,126,126,0])
B.Y=s([24,60,126,24,126,60,24,255])
B.bg=s([24,60,126,24,24,24,24,0])
B.br=s([24,24,24,24,126,60,24,0])
B.bC=s([0,24,12,254,12,24,0,0])
B.bO=s([0,48,96,254,96,48,0,0])
B.bZ=s([0,0,192,192,192,254,0,0])
B.M=s([0,36,102,255,102,36,0,0])
B.W=s([0,24,60,126,255,255,0,0])
B.K=s([0,255,255,126,60,24,0,0])
B.c9=s([0,0,0,0,0,0,0,0])
B.cg=s([48,120,120,48,48,0,48,0])
B.ch=s([108,108,108,0,0,0,0,0])
B.ci=s([108,108,254,108,254,108,108,0])
B.cj=s([48,124,192,120,12,248,48,0])
B.ck=s([0,198,204,24,48,102,198,0])
B.cl=s([56,108,56,118,220,204,118,0])
B.cm=s([96,96,192,0,0,0,0,0])
B.co=s([24,48,96,96,96,48,24,0])
B.cp=s([96,48,24,24,24,48,96,0])
B.N=s([0,102,60,255,60,102,0,0])
B.cq=s([0,48,48,252,48,48,0,0])
B.cr=s([0,0,0,0,0,48,48,96])
B.cs=s([0,0,0,252,0,0,0,0])
B.ct=s([0,0,0,0,0,48,48,0])
B.cu=s([6,12,24,48,96,192,128,0])
B.cv=s([124,198,206,222,246,230,124,0])
B.cw=s([48,112,48,48,48,48,252,0])
B.cx=s([120,204,12,56,96,204,252,0])
B.cz=s([120,204,12,56,12,204,120,0])
B.cA=s([28,60,108,204,254,12,30,0])
B.cB=s([252,192,248,12,12,204,120,0])
B.cC=s([56,96,192,248,204,204,120,0])
B.cD=s([252,204,12,24,48,48,48,0])
B.cE=s([120,204,204,120,204,204,120,0])
B.cF=s([120,204,204,124,12,24,112,0])
B.cG=s([0,48,48,0,0,48,48,0])
B.cH=s([0,48,48,0,0,48,48,96])
B.cI=s([24,48,96,192,96,48,24,0])
B.cK=s([0,0,252,0,0,252,0,0])
B.cL=s([96,48,24,12,24,48,96,0])
B.cM=s([120,204,12,24,48,0,48,0])
B.cN=s([124,198,222,222,222,192,120,0])
B.cO=s([48,120,204,204,252,204,204,0])
B.cP=s([252,102,102,124,102,102,252,0])
B.cQ=s([60,102,192,192,192,102,60,0])
B.cR=s([248,108,102,102,102,108,248,0])
B.cS=s([254,98,104,120,104,98,254,0])
B.cT=s([254,98,104,120,104,96,240,0])
B.cV=s([60,102,192,192,206,102,62,0])
B.cW=s([204,204,204,252,204,204,204,0])
B.cX=s([120,48,48,48,48,48,120,0])
B.cY=s([30,12,12,12,204,204,120,0])
B.cZ=s([230,102,108,120,108,102,230,0])
B.d_=s([240,96,96,96,98,102,254,0])
B.d0=s([198,238,254,254,214,198,198,0])
B.d1=s([198,230,246,222,206,198,198,0])
B.d2=s([56,108,198,198,198,108,56,0])
B.d3=s([252,102,102,124,96,96,240,0])
B.d5=s([120,204,204,204,220,120,28,0])
B.d6=s([252,102,102,124,108,102,230,0])
B.d7=s([120,204,224,112,28,204,120,0])
B.d8=s([252,180,48,48,48,48,120,0])
B.d9=s([204,204,204,204,204,204,252,0])
B.da=s([204,204,204,204,204,120,48,0])
B.db=s([198,198,198,214,254,238,198,0])
B.dc=s([198,198,108,56,56,108,198,0])
B.dd=s([204,204,204,120,48,48,120,0])
B.de=s([254,198,140,24,50,102,254,0])
B.dg=s([120,96,96,96,96,96,120,0])
B.dh=s([192,96,48,24,12,6,2,0])
B.di=s([120,24,24,24,24,24,120,0])
B.dj=s([16,56,108,198,0,0,0,0])
B.Z=s([0,0,0,0,0,0,0,255])
B.dk=s([48,48,24,0,0,0,0,0])
B.dl=s([0,0,120,12,124,204,118,0])
B.dm=s([224,96,96,124,102,102,220,0])
B.dn=s([0,0,120,204,192,204,120,0])
B.dp=s([28,12,12,124,204,204,118,0])
B.dq=s([0,0,120,204,252,192,120,0])
B.ds=s([56,108,96,240,96,96,240,0])
B.dt=s([0,0,118,204,204,124,12,248])
B.du=s([224,96,108,118,102,102,230,0])
B.dv=s([48,0,112,48,48,48,120,0])
B.dw=s([12,0,12,12,12,204,204,120])
B.dx=s([224,96,102,108,120,108,230,0])
B.dy=s([112,48,48,48,48,48,120,0])
B.dz=s([0,0,204,254,254,214,198,0])
B.dA=s([0,0,248,204,204,204,204,0])
B.dB=s([0,0,120,204,204,204,120,0])
B.a3=s([0,0,220,102,102,124,96,240])
B.a4=s([0,0,118,204,204,124,12,30])
B.a5=s([0,0,220,118,102,96,240,0])
B.a6=s([0,0,124,192,120,12,248,0])
B.a7=s([16,48,124,48,48,52,24,0])
B.a8=s([0,0,204,204,204,204,118,0])
B.a9=s([0,0,204,204,204,120,48,0])
B.aa=s([0,0,198,214,254,254,108,0])
B.ab=s([0,0,198,108,56,108,198,0])
B.ac=s([0,0,204,204,204,124,12,248])
B.ae=s([0,0,252,152,48,100,252,0])
B.af=s([28,48,48,224,48,48,28,0])
B.ag=s([24,24,24,0,24,24,24,0])
B.ah=s([224,48,48,28,48,48,224,0])
B.ai=s([118,220,0,0,0,0,0,0])
B.aj=s([0,16,56,108,198,198,254,0])
B.ak=s([120,204,192,204,120,24,12,120])
B.al=s([0,204,0,204,204,204,126,0])
B.am=s([28,0,120,204,252,192,120,0])
B.an=s([126,195,60,6,62,102,63,0])
B.ap=s([204,0,120,12,124,204,126,0])
B.aq=s([224,0,120,12,124,204,126,0])
B.ar=s([48,48,120,12,124,204,126,0])
B.as=s([0,0,120,192,192,120,12,56])
B.at=s([126,195,60,102,126,96,60,0])
B.au=s([204,0,120,204,252,192,120,0])
B.av=s([224,0,120,204,252,192,120,0])
B.aw=s([204,0,112,48,48,48,120,0])
B.ax=s([124,198,56,24,24,24,60,0])
B.ay=s([224,0,112,48,48,48,120,0])
B.aA=s([198,56,108,198,254,198,198,0])
B.aB=s([48,48,0,120,204,252,204,0])
B.aC=s([28,0,252,96,120,96,252,0])
B.aD=s([0,0,127,12,127,204,127,0])
B.aE=s([62,108,204,254,204,204,206,0])
B.aF=s([120,204,0,120,204,204,120,0])
B.aG=s([0,204,0,120,204,204,120,0])
B.aH=s([0,224,0,120,204,204,120,0])
B.aI=s([120,204,0,204,204,204,126,0])
B.aJ=s([0,224,0,204,204,204,126,0])
B.aL=s([0,204,0,204,204,124,12,248])
B.aM=s([195,24,60,102,102,60,24,0])
B.aN=s([204,0,204,204,204,204,120,0])
B.aO=s([24,24,126,192,192,126,24,24])
B.aP=s([56,108,100,240,96,230,252,0])
B.aQ=s([204,204,120,252,48,252,48,48])
B.aR=s([248,204,204,250,198,207,198,199])
B.aS=s([14,27,24,60,24,24,216,112])
B.aT=s([28,0,120,12,124,204,126,0])
B.aU=s([56,0,112,48,48,48,120,0])
B.aW=s([0,28,0,120,204,204,120,0])
B.aX=s([0,28,0,204,204,204,126,0])
B.aY=s([0,248,0,248,204,204,204,0])
B.aZ=s([252,0,204,236,252,220,204,0])
B.b_=s([60,108,108,62,0,126,0,0])
B.b0=s([56,108,108,56,0,124,0,0])
B.b1=s([48,0,48,96,192,204,120,0])
B.b2=s([0,0,0,252,192,192,0,0])
B.b3=s([0,0,0,252,12,12,0,0])
B.b4=s([195,198,204,222,51,102,204,15])
B.b6=s([195,198,204,219,55,111,207,3])
B.b7=s([24,24,0,24,24,24,24,0])
B.b8=s([0,51,102,204,102,51,0,0])
B.b9=s([0,204,102,51,102,204,0,0])
B.ba=s([34,136,34,136,34,136,34,136])
B.bb=s([85,170,85,170,85,170,85,170])
B.bc=s([219,119,219,238,219,119,219,238])
B.bd=s([24,24,24,24,24,24,24,24])
B.be=s([24,24,24,24,248,24,24,24])
B.bf=s([24,24,248,24,248,24,24,24])
B.bh=s([54,54,54,54,246,54,54,54])
B.bi=s([0,0,0,0,254,54,54,54])
B.bj=s([0,0,248,24,248,24,24,24])
B.bk=s([54,54,246,6,246,54,54,54])
B.bl=s([54,54,54,54,54,54,54,54])
B.bm=s([0,0,254,6,246,54,54,54])
B.bn=s([54,54,246,6,254,0,0,0])
B.bo=s([54,54,54,54,254,0,0,0])
B.bp=s([24,24,248,24,248,0,0,0])
B.bq=s([0,0,0,0,248,24,24,24])
B.bs=s([24,24,24,24,31,0,0,0])
B.C=s([24,24,24,24,255,0,0,0])
B.D=s([0,0,0,0,255,24,24,24])
B.bt=s([24,24,24,24,31,24,24,24])
B.E=s([0,0,0,0,255,0,0,0])
B.F=s([24,24,24,24,255,24,24,24])
B.bu=s([24,24,31,24,31,24,24,24])
B.bv=s([54,54,54,54,55,54,54,54])
B.bw=s([54,54,55,48,63,0,0,0])
B.bx=s([0,0,63,48,55,54,54,54])
B.O=s([54,54,247,0,255,0,0,0])
B.P=s([0,0,255,0,247,54,54,54])
B.by=s([54,54,55,48,55,54,54,54])
B.Q=s([0,0,255,0,255,0,0,0])
B.R=s([54,54,247,0,247,54,54,54])
B.S=s([24,24,255,0,255,0,0,0])
B.G=s([54,54,54,54,255,0,0,0])
B.T=s([0,0,255,0,255,24,24,24])
B.H=s([0,0,0,0,255,54,54,54])
B.bz=s([54,54,54,54,63,0,0,0])
B.bA=s([24,24,31,24,31,0,0,0])
B.bB=s([0,0,31,24,31,24,24,24])
B.bD=s([0,0,0,0,63,54,54,54])
B.I=s([54,54,54,54,255,54,54,54])
B.U=s([24,24,255,24,255,24,24,24])
B.bE=s([24,24,24,24,248,0,0,0])
B.bF=s([0,0,0,0,31,24,24,24])
B.dE=s([255,255,255,255,255,255,255,255])
B.X=s([0,0,0,0,255,255,255,255])
B.bG=s([240,240,240,240,240,240,240,240])
B.bH=s([15,15,15,15,15,15,15,15])
B.L=s([255,255,255,255,0,0,0,0])
B.bI=s([0,0,118,220,200,220,118,0])
B.bJ=s([0,120,204,248,204,248,192,192])
B.bK=s([0,252,204,192,192,192,192,0])
B.bL=s([0,254,108,108,108,108,108,0])
B.bM=s([252,204,96,48,96,204,252,0])
B.bP=s([0,0,126,216,216,216,112,0])
B.bQ=s([0,102,102,102,102,124,96,192])
B.bR=s([0,118,220,24,24,24,24,0])
B.bS=s([252,48,120,204,204,120,48,252])
B.bT=s([56,108,198,254,198,108,56,0])
B.bU=s([56,108,198,198,108,108,238,0])
B.bV=s([28,48,24,124,204,204,120,0])
B.bW=s([0,0,126,219,219,126,0,0])
B.bX=s([6,12,126,219,219,126,96,192])
B.bY=s([56,96,192,248,192,96,56,0])
B.c_=s([120,204,204,204,204,204,204,0])
B.c0=s([0,252,0,252,0,252,0,0])
B.c1=s([48,48,252,48,48,0,252,0])
B.c2=s([96,48,24,48,96,0,252,0])
B.c3=s([24,48,96,48,24,0,252,0])
B.c4=s([14,27,27,24,24,24,24,24])
B.c5=s([24,24,24,24,24,216,216,112])
B.c6=s([48,48,0,252,0,48,48,0])
B.c7=s([0,118,220,0,118,220,0,0])
B.c8=s([56,108,108,56,0,0,0,0])
B.ca=s([0,0,0,24,24,0,0,0])
B.cb=s([0,0,0,0,24,0,0,0])
B.cc=s([15,12,12,12,236,108,60,28])
B.cd=s([120,108,108,108,108,0,0,0])
B.ce=s([112,24,48,96,120,0,0,0])
B.cf=s([0,0,60,60,60,60,0,0])
B.dF=new A.bm(["\u263a",B.a_,"\u263b",B.J,"\u2665",B.a0,"\u2666",B.a1,"\u2663",B.bN,"\u2660",B.cn,"\u2022",B.cy,"\u25d8",B.dD,"\u25cb",B.cJ,"\u25d9",B.dC,"\u2642",B.cU,"\u2640",B.d4,"\u266a",B.df,"\u266b",B.dr,"\u263c",B.V,"\u25ba",B.a2,"\u25c4",B.ad,"\u2195",B.ao,"\u203c",B.az,"\xb6",B.aK,"\xa7",B.aV,"\u25ac",B.b5,"\u21a8",B.Y,"\u2191",B.bg,"\u2193",B.br,"\u2192",B.bC,"\u2190",B.bO,"\u221f",B.bZ,"\u2194",B.M,"\u25b2",B.W,"\u25bc",B.K," ",B.c9,"!",B.cg,'"',B.ch,"#",B.ci,"$",B.cj,"%",B.ck,"&",B.cl,"'",B.cm,"(",B.co,")",B.cp,"*",B.N,"+",B.cq,",",B.cr,"-",B.cs,".",B.ct,"/",B.cu,"0",B.cv,"1",B.cw,"2",B.cx,"3",B.cz,"4",B.cA,"5",B.cB,"6",B.cC,"7",B.cD,"8",B.cE,"9",B.cF,":",B.cG,";",B.cH,"<",B.cI,"=",B.cK,">",B.cL,"?",B.cM,"@",B.cN,"A",B.cO,"B",B.cP,"C",B.cQ,"D",B.cR,"E",B.cS,"F",B.cT,"G",B.cV,"H",B.cW,"I",B.cX,"J",B.cY,"K",B.cZ,"L",B.d_,"M",B.d0,"N",B.d1,"O",B.d2,"P",B.d3,"Q",B.d5,"R",B.d6,"S",B.d7,"T",B.d8,"U",B.d9,"V",B.da,"W",B.db,"X",B.dc,"Y",B.dd,"Z",B.de,"[",B.dg,"\\",B.dh,"]",B.di,"^",B.dj,"_",B.Z,"`",B.dk,"a",B.dl,"b",B.dm,"c",B.dn,"d",B.dp,"e",B.dq,"f",B.ds,"g",B.dt,"h",B.du,"i",B.dv,"j",B.dw,"k",B.dx,"l",B.dy,"m",B.dz,"n",B.dA,"o",B.dB,"p",B.a3,"q",B.a4,"r",B.a5,"s",B.a6,"t",B.a7,"u",B.a8,"v",B.a9,"w",B.aa,"x",B.ab,"y",B.ac,"z",B.ae,"{",B.af,"|",B.ag,"}",B.ah,"~",B.ai,"\u2302",B.aj,"\xc7",B.ak,"\xfc",B.al,"\xe9",B.am,"\xe2",B.an,"\xe4",B.ap,"\xe0",B.aq,"\xe5",B.ar,"\xe7",B.as,"\xea",B.at,"\xeb",B.au,"\xe8",B.av,"\xef",B.aw,"\xee",B.ax,"\xec",B.ay,"\xc4",B.aA,"\xc5",B.aB,"\xc9",B.aC,"\xe6",B.aD,"\xc6",B.aE,"\xf4",B.aF,"\xf6",B.aG,"\xf2",B.aH,"\xfb",B.aI,"\xf9",B.aJ,"\xff",B.aL,"\xd6",B.aM,"\xdc",B.aN,"\xa2",B.aO,"\xa3",B.aP,"\xa5",B.aQ,"\u20a7",B.aR,"\u0192",B.aS,"\xe1",B.aT,"\xed",B.aU,"\xf3",B.aW,"\xfa",B.aX,"\xf1",B.aY,"\xd1",B.aZ,"\xaa",B.b_,"\xba",B.b0,"\xbf",B.b1,"\u2310",B.b2,"\xac",B.b3,"\xbd",B.b4,"\xbc",B.b6,"\xa1",B.b7,"\xab",B.b8,"\xbb",B.b9,"\u2591",B.ba,"\u2592",B.bb,"\u2593",B.bc,"\u2502",B.bd,"\u2524",B.be,"\u2561",B.bf,"\u2562",B.bh,"\u2556",B.bi,"\u2555",B.bj,"\u2563",B.bk,"\u2551",B.bl,"\u2557",B.bm,"\u255d",B.bn,"\u255c",B.bo,"\u255b",B.bp,"\u2510",B.bq,"\u2514",B.bs,"\u2534",B.C,"\u252c",B.D,"\u251c",B.bt,"\u2500",B.E,"\u253c",B.F,"\u255e",B.bu,"\u255f",B.bv,"\u255a",B.bw,"\u2554",B.bx,"\u2569",B.O,"\u2566",B.P,"\u2560",B.by,"\u2550",B.Q,"\u256c",B.R,"\u2567",B.S,"\u2568",B.G,"\u2564",B.T,"\u2565",B.H,"\u2559",B.bz,"\u2558",B.bA,"\u2552",B.bB,"\u2553",B.bD,"\u256b",B.I,"\u256a",B.U,"\u2518",B.bE,"\u250c",B.bF,"\u2588",B.dE,"\u2584",B.X,"\u258c",B.bG,"\u2590",B.bH,"\u2580",B.L,"\u03b1",B.bI,"\xdf",B.bJ,"\u0393",B.bK,"\u03c0",B.bL,"\u03a3",B.bM,"\u03c3",B.bP,"\xb5",B.bQ,"\u03c4",B.bR,"\u03a6",B.bS,"\u0398",B.bT,"\u03a9",B.bU,"\u03b4",B.bV,"\u221e",B.bW,"\u03c6",B.bX,"\u03b5",B.bY,"\u2229",B.c_,"\u2261",B.c0,"\xb1",B.c1,"\u2265",B.c2,"\u2264",B.c3,"\u2320",B.c4,"\u2321",B.c5,"\xf7",B.c6,"\u2248",B.c7,"\xb0",B.c8,"\u2219",B.ca,"\xb7",B.cb,"\u221a",B.cc,"\u207f",B.cd,"\xb2",B.ce,"\u25a0",B.cf])
B.n=new A.C("replace")
B.dG=new A.C("inverse")
B.dH=new A.C("over")
B.dI=new A.C("under")
B.dJ=new A.C("stain")
B.dK=new A.C("delete")
B.dL=new A.C("maskDestination")
B.dM=new A.C("maskSource")
B.h=new A.ak("ready")
B.dN=new A.ak("awaitingKey")
B.j=new A.ak("awaitingString")
B.p=new A.ak("awaitingMouseClick")
B.dO=A.fq("f")
B.dP=A.fq("jo")})();(function staticFields(){$.dg=null
$.aa=[]
$.eC=null
$.et=null
$.es=null
$.fl=null
$.fg=null
$.fo=null
$.dA=null
$.dF=null
$.eg=null
$.dk=[]
$.ap=null
$.b1=null
$.b2=null
$.ea=!1
$.h=B.b})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"iU","ft",()=>A.iw("_$dart_dartClosure"))
s($,"jI","dQ",()=>B.b.be(new A.dN()))
s($,"je","fA",()=>A.M(A.cU({
toString:function(){return"$receiver$"}})))
s($,"jf","fB",()=>A.M(A.cU({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"jg","fC",()=>A.M(A.cU(null)))
s($,"jh","fD",()=>A.M(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"jk","fG",()=>A.M(A.cU(void 0)))
s($,"jl","fH",()=>A.M(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"jj","fF",()=>A.M(A.eM(null)))
s($,"ji","fE",()=>A.M(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"jn","fJ",()=>A.M(A.eM(void 0)))
s($,"jm","fI",()=>A.M(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"jp","em",()=>A.hg())
s($,"j2","dO",()=>t.U.a($.dQ()))
s($,"jF","dP",()=>A.ej(B.dO))
s($,"iT","fs",()=>({}))
s($,"iY","el",()=>B.d.ar(A.dS(),"Opera",0))
s($,"iX","fw",()=>!$.el()&&B.d.ar(A.dS(),"Trident/",0))
s($,"iW","fv",()=>B.d.ar(A.dS(),"Firefox",0))
s($,"iV","fu",()=>"-"+$.fx()+"-")
s($,"iZ","fx",()=>{if($.fv())var r="moz"
else if($.fw())r="ms"
else r=$.el()?"o":"webkit"
return r})
s($,"jc","fz",()=>A.ct(8,0,!1))
s($,"jb","fy",()=>A.ct(8,255,!1))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasRenderingContext2D:J.v,DOMError:J.v,MediaError:J.v,Navigator:J.v,NavigatorConcurrentHardware:J.v,NavigatorUserMediaError:J.v,OverconstrainedError:J.v,PositionError:J.v,GeolocationPositionError:J.v,ArrayBufferView:A.bA,Uint32Array:A.bB,HTMLAudioElement:A.c,HTMLBRElement:A.c,HTMLBaseElement:A.c,HTMLButtonElement:A.c,HTMLCanvasElement:A.c,HTMLContentElement:A.c,HTMLDListElement:A.c,HTMLDataElement:A.c,HTMLDataListElement:A.c,HTMLDetailsElement:A.c,HTMLDialogElement:A.c,HTMLDivElement:A.c,HTMLEmbedElement:A.c,HTMLFieldSetElement:A.c,HTMLHRElement:A.c,HTMLHeadElement:A.c,HTMLHeadingElement:A.c,HTMLHtmlElement:A.c,HTMLIFrameElement:A.c,HTMLImageElement:A.c,HTMLInputElement:A.c,HTMLLIElement:A.c,HTMLLabelElement:A.c,HTMLLegendElement:A.c,HTMLLinkElement:A.c,HTMLMapElement:A.c,HTMLMediaElement:A.c,HTMLMenuElement:A.c,HTMLMetaElement:A.c,HTMLMeterElement:A.c,HTMLModElement:A.c,HTMLOListElement:A.c,HTMLObjectElement:A.c,HTMLOptGroupElement:A.c,HTMLOptionElement:A.c,HTMLOutputElement:A.c,HTMLParagraphElement:A.c,HTMLParamElement:A.c,HTMLPictureElement:A.c,HTMLPreElement:A.c,HTMLProgressElement:A.c,HTMLQuoteElement:A.c,HTMLScriptElement:A.c,HTMLShadowElement:A.c,HTMLSlotElement:A.c,HTMLSourceElement:A.c,HTMLSpanElement:A.c,HTMLStyleElement:A.c,HTMLTableCaptionElement:A.c,HTMLTableCellElement:A.c,HTMLTableDataCellElement:A.c,HTMLTableHeaderCellElement:A.c,HTMLTableColElement:A.c,HTMLTableElement:A.c,HTMLTableRowElement:A.c,HTMLTableSectionElement:A.c,HTMLTemplateElement:A.c,HTMLTextAreaElement:A.c,HTMLTimeElement:A.c,HTMLTitleElement:A.c,HTMLTrackElement:A.c,HTMLUListElement:A.c,HTMLUnknownElement:A.c,HTMLVideoElement:A.c,HTMLDirectoryElement:A.c,HTMLFontElement:A.c,HTMLFrameElement:A.c,HTMLFrameSetElement:A.c,HTMLMarqueeElement:A.c,HTMLElement:A.c,HTMLAnchorElement:A.b8,HTMLAreaElement:A.b9,HTMLBodyElement:A.be,CDATASection:A.A,CharacterData:A.A,Comment:A.A,ProcessingInstruction:A.A,Text:A.A,CSSStyleDeclaration:A.ad,MSStyleCSSProperties:A.ad,CSS2Properties:A.ad,DOMException:A.cl,DOMRectReadOnly:A.au,MathMLElement:A.n,Element:A.n,AbortPaymentEvent:A.a,AnimationEvent:A.a,AnimationPlaybackEvent:A.a,ApplicationCacheErrorEvent:A.a,BackgroundFetchClickEvent:A.a,BackgroundFetchEvent:A.a,BackgroundFetchFailEvent:A.a,BackgroundFetchedEvent:A.a,BeforeInstallPromptEvent:A.a,BeforeUnloadEvent:A.a,BlobEvent:A.a,CanMakePaymentEvent:A.a,ClipboardEvent:A.a,CloseEvent:A.a,CustomEvent:A.a,DeviceMotionEvent:A.a,DeviceOrientationEvent:A.a,ErrorEvent:A.a,ExtendableEvent:A.a,ExtendableMessageEvent:A.a,FetchEvent:A.a,FontFaceSetLoadEvent:A.a,ForeignFetchEvent:A.a,GamepadEvent:A.a,HashChangeEvent:A.a,InstallEvent:A.a,MediaEncryptedEvent:A.a,MediaKeyMessageEvent:A.a,MediaQueryListEvent:A.a,MediaStreamEvent:A.a,MediaStreamTrackEvent:A.a,MessageEvent:A.a,MIDIConnectionEvent:A.a,MIDIMessageEvent:A.a,MutationEvent:A.a,NotificationEvent:A.a,PageTransitionEvent:A.a,PaymentRequestEvent:A.a,PaymentRequestUpdateEvent:A.a,PopStateEvent:A.a,PresentationConnectionAvailableEvent:A.a,PresentationConnectionCloseEvent:A.a,ProgressEvent:A.a,PromiseRejectionEvent:A.a,PushEvent:A.a,RTCDataChannelEvent:A.a,RTCDTMFToneChangeEvent:A.a,RTCPeerConnectionIceEvent:A.a,RTCTrackEvent:A.a,SecurityPolicyViolationEvent:A.a,SensorErrorEvent:A.a,SpeechRecognitionError:A.a,SpeechRecognitionEvent:A.a,SpeechSynthesisEvent:A.a,StorageEvent:A.a,SyncEvent:A.a,TrackEvent:A.a,TransitionEvent:A.a,WebKitTransitionEvent:A.a,VRDeviceEvent:A.a,VRDisplayEvent:A.a,VRSessionEvent:A.a,MojoInterfaceRequestEvent:A.a,ResourceProgressEvent:A.a,USBConnectionEvent:A.a,IDBVersionChangeEvent:A.a,AudioProcessingEvent:A.a,OfflineAudioCompletionEvent:A.a,WebGLContextEvent:A.a,Event:A.a,InputEvent:A.a,SubmitEvent:A.a,EventTarget:A.bi,HTMLFormElement:A.bl,HTMLCollection:A.a3,HTMLFormControlsCollection:A.a3,HTMLOptionsCollection:A.a3,KeyboardEvent:A.B,MouseEvent:A.q,DragEvent:A.q,PointerEvent:A.q,WheelEvent:A.q,Document:A.i,DocumentFragment:A.i,HTMLDocument:A.i,ShadowRoot:A.i,XMLDocument:A.i,Attr:A.i,DocumentType:A.i,Node:A.i,NodeList:A.aE,RadioNodeList:A.aE,HTMLSelectElement:A.bH,CompositionEvent:A.E,FocusEvent:A.E,TextEvent:A.E,TouchEvent:A.E,UIEvent:A.E,Window:A.aK,DOMWindow:A.aK,ClientRect:A.aO,DOMRect:A.aO,SVGAElement:A.b,SVGAnimateElement:A.b,SVGAnimateMotionElement:A.b,SVGAnimateTransformElement:A.b,SVGAnimationElement:A.b,SVGCircleElement:A.b,SVGClipPathElement:A.b,SVGDefsElement:A.b,SVGDescElement:A.b,SVGDiscardElement:A.b,SVGEllipseElement:A.b,SVGFEBlendElement:A.b,SVGFEColorMatrixElement:A.b,SVGFEComponentTransferElement:A.b,SVGFECompositeElement:A.b,SVGFEConvolveMatrixElement:A.b,SVGFEDiffuseLightingElement:A.b,SVGFEDisplacementMapElement:A.b,SVGFEDistantLightElement:A.b,SVGFEFloodElement:A.b,SVGFEFuncAElement:A.b,SVGFEFuncBElement:A.b,SVGFEFuncGElement:A.b,SVGFEFuncRElement:A.b,SVGFEGaussianBlurElement:A.b,SVGFEImageElement:A.b,SVGFEMergeElement:A.b,SVGFEMergeNodeElement:A.b,SVGFEMorphologyElement:A.b,SVGFEOffsetElement:A.b,SVGFEPointLightElement:A.b,SVGFESpecularLightingElement:A.b,SVGFESpotLightElement:A.b,SVGFETileElement:A.b,SVGFETurbulenceElement:A.b,SVGFilterElement:A.b,SVGForeignObjectElement:A.b,SVGGElement:A.b,SVGGeometryElement:A.b,SVGGraphicsElement:A.b,SVGImageElement:A.b,SVGLineElement:A.b,SVGLinearGradientElement:A.b,SVGMarkerElement:A.b,SVGMaskElement:A.b,SVGMetadataElement:A.b,SVGPathElement:A.b,SVGPatternElement:A.b,SVGPolygonElement:A.b,SVGPolylineElement:A.b,SVGRadialGradientElement:A.b,SVGRectElement:A.b,SVGScriptElement:A.b,SVGSetElement:A.b,SVGStopElement:A.b,SVGStyleElement:A.b,SVGElement:A.b,SVGSVGElement:A.b,SVGSwitchElement:A.b,SVGSymbolElement:A.b,SVGTSpanElement:A.b,SVGTextContentElement:A.b,SVGTextElement:A.b,SVGTextPathElement:A.b,SVGTextPositioningElement:A.b,SVGTitleElement:A.b,SVGUseElement:A.b,SVGViewElement:A.b,SVGGradientElement:A.b,SVGComponentTransferFunctionElement:A.b,SVGFEDropShadowElement:A.b,SVGMPathElement:A.b})
hunkHelpers.setOrUpdateLeafTags({CanvasRenderingContext2D:true,DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,ArrayBufferView:false,Uint32Array:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DOMException:true,DOMRectReadOnly:false,MathMLElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,HTMLFormElement:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,KeyboardEvent:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,HTMLSelectElement:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,Window:true,DOMWindow:true,ClientRect:true,DOMRect:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true})
A.ag.$nativeSuperclassTag="ArrayBufferView"
A.aS.$nativeSuperclassTag="ArrayBufferView"
A.aT.$nativeSuperclassTag="ArrayBufferView"
A.aD.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=A.dG
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=index.js.map
