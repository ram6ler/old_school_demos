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
a[c]=function(){a[c]=function(){A.iL(b)}
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
if(a[b]!==s)A.iN(b)
a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.ef(b)
return new s(c,this)}:function(){if(s===null)s=A.ef(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.ef(a).prototype
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
a(hunkHelpers,v,w,$)}var A={dX:function dX(){},
X(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
e3(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
eK(a,b,c){return A.e3(A.X(A.X(c,a),b))},
eL(a,b,c,d,e){return A.e3(A.X(A.X(A.X(A.X(e,a),b),c),d))},
dB(a,b,c){return a},
ei(a){var s,r
for(s=$.x.length,r=0;r<s;++r)if(a===$.x[r])return!0
return!1},
h1(){return new A.a9("No element")},
bw:function bw(a){this.a=a},
dP:function dP(){},
cF:function cF(){},
by:function by(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bA:function bA(a,b){this.a=a
this.b=b},
bB:function bB(a,b){this.a=null
this.b=a
this.c=b},
bP:function bP(a,b){this.a=a
this.b=b},
bQ:function bQ(a,b){this.a=a
this.b=b},
bm:function bm(){},
ft(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
iF(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
f(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.b9(a)
return s},
ak(a){var s,r=$.eD
if(r==null)r=$.eD=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
cz(a){return A.hb(a)},
hb(a){var s,r,q,p
if(a instanceof A.h)return A.u(A.ch(a),null)
s=J.ab(a)
if(s===B.z||s===B.B||t.o.b(a)){r=B.l(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.u(A.ch(a),null)},
eE(a){if(a==null||typeof a=="number"||A.ea(a))return J.b9(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.a4)return a.h(0)
if(a instanceof A.ap)return a.aZ(!0)
return"Instance of '"+A.cz(a)+"'"},
e(a,b){if(a==null)J.cj(a)
throw A.d(A.fk(a,b))},
fk(a,b){var s,r="index"
if(!A.f9(b))return new A.I(!0,b,r,null)
s=J.cj(a)
if(b<0||b>=s)return A.bq(b,s,a,r)
return new A.aI(null,null,!0,b,r,"Value not in range")},
ed(a){return new A.I(!0,a,null,null)},
d(a){return A.fo(new Error(),a)},
fo(a,b){var s
if(b==null)b=new A.N()
a.dartException=b
s=A.iO
if("defineProperty" in Object){Object.defineProperty(a,"message",{get:s})
a.name=""}else a.toString=s
return a},
iO(){return J.b9(this.dartException)},
el(a){throw A.d(a)},
iM(a,b){throw A.fo(b,a)},
b7(a){throw A.d(A.ad(a))},
O(a){var s,r,q,p,o,n
a=A.iJ(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=[]
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.cW(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
cX(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
eN(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
dY(a,b){var s=b==null,r=s?null:b.method
return new A.bv(a,r,s?null:b.receiver)},
U(a){if(a==null)return new A.cy(a)
if(a instanceof A.aw)return A.a3(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.a3(a,a.dartException)
return A.ik(a)},
a3(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
ik(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.a.bP(r,16)&8191)===10)switch(q){case 438:return A.a3(a,A.dY(A.f(s)+" (Error "+q+")",e))
case 445:case 5007:p=A.f(s)
return A.a3(a,new A.aG(p+" (Error "+q+")",e))}}if(a instanceof TypeError){o=$.fC()
n=$.fD()
m=$.fE()
l=$.fF()
k=$.fI()
j=$.fJ()
i=$.fH()
$.fG()
h=$.fL()
g=$.fK()
f=o.v(s)
if(f!=null)return A.a3(a,A.dY(s,f))
else{f=n.v(s)
if(f!=null){f.method="call"
return A.a3(a,A.dY(s,f))}else{f=m.v(s)
if(f==null){f=l.v(s)
if(f==null){f=k.v(s)
if(f==null){f=j.v(s)
if(f==null){f=i.v(s)
if(f==null){f=l.v(s)
if(f==null){f=h.v(s)
if(f==null){f=g.v(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return A.a3(a,new A.aG(s,f==null?e:f.method))}}return A.a3(a,new A.bN(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.aJ()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return A.a3(a,new A.I(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.aJ()
return a},
R(a){var s
if(a instanceof A.aw)return a.b
if(a==null)return new A.aW(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new A.aW(a)},
ek(a){if(a==null)return J.H(a)
if(typeof a=="object")return A.ak(a)
return J.H(a)},
ir(a){if(typeof a=="number")return B.c.gi(a)
if(a instanceof A.ce)return A.ak(a)
if(a instanceof A.ap)return a.gi(a)
return A.ek(a)},
fl(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=a.length
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
iE(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(A.ey("Unsupported number of arguments for wrapped closure"))},
as(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.iE)
a.$identity=s
return s},
fZ(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.cG().constructor.prototype):Object.create(new A.at(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else r=function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.ex(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.fV(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.ex(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
fV(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.fT)}throw A.d("Error in functionType of tearoff")},
fW(a,b,c,d){var s=A.ev
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
ex(a,b,c,d){var s,r
if(c)return A.fY(a,b,d)
s=b.length
r=A.fW(s,d,a,b)
return r},
fX(a,b,c,d){var s=A.ev,r=A.fU
switch(b?-1:a){case 0:throw A.d(new A.bH("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
fY(a,b,c){var s,r
if($.et==null)$.et=A.es("interceptor")
if($.eu==null)$.eu=A.es("receiver")
s=b.length
r=A.fX(s,c,a,b)
return r},
ef(a){return A.fZ(a)},
fT(a,b){return A.b2(v.typeUniverse,A.ch(a.a),b)},
ev(a){return a.a},
fU(a){return a.b},
es(a){var s,r,q,p=new A.at("receiver","interceptor"),o=J.dW(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.d(A.bc("Field name "+a+" not found.",null))},
iL(a){throw A.d(new A.bY(a))},
ix(a){return v.getIsolateTag(a)},
h8(a,b){var s=new A.bx(a,b)
s.c=a.e
return s},
jI(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
iH(a){var s,r,q,p,o,n=$.fn.$1(a),m=$.dC[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.dH[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.fh.$2(a,n)
if(q!=null){m=$.dC[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.dH[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.dO(s)
$.dC[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.dH[n]=s
return s}if(p==="-"){o=A.dO(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.fp(a,s)
if(p==="*")throw A.d(A.eO(n))
if(v.leafTags[n]===true){o=A.dO(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.fp(a,s)},
fp(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.ej(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
dO(a){return J.ej(a,!1,null,!!a.$iV)},
iI(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.dO(s)
else return J.ej(s,c,null,null)},
iB(){if(!0===$.eh)return
$.eh=!0
A.iC()},
iC(){var s,r,q,p,o,n,m,l
$.dC=Object.create(null)
$.dH=Object.create(null)
A.iA()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.fq.$1(o)
if(n!=null){m=A.iI(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
iA(){var s,r,q,p,o,n,m=B.q()
m=A.ar(B.r,A.ar(B.t,A.ar(B.m,A.ar(B.m,A.ar(B.u,A.ar(B.v,A.ar(B.w(B.l),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.fn=new A.dE(p)
$.fh=new A.dF(o)
$.fq=new A.dG(n)},
ar(a,b){return a(b)||b},
is(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
h7(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw A.d(new A.cs("Illegal RegExp pattern ("+String(n)+")",a))},
iK(a,b,c){var s=a.indexOf(b,c)
return s>=0},
iJ(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
B:function B(a,b){this.a=a
this.b=b},
bi:function bi(){},
bo:function bo(a){this.a=a},
cW:function cW(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aG:function aG(a,b){this.a=a
this.b=b},
bv:function bv(a,b,c){this.a=a
this.b=b
this.c=c},
bN:function bN(a){this.a=a},
cy:function cy(a){this.a=a},
aw:function aw(a,b){this.a=a
this.b=b},
aW:function aW(a){this.a=a
this.b=null},
a4:function a4(){},
cl:function cl(){},
cm:function cm(){},
cL:function cL(){},
cG:function cG(){},
at:function at(a,b){this.a=a
this.b=b},
bY:function bY(a){this.a=a},
bH:function bH(a){this.a=a},
aD:function aD(){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0},
cv:function cv(a,b){this.a=a
this.b=b
this.c=null},
bx:function bx(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bu:function bu(){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0},
dE:function dE(a){this.a=a},
dF:function dF(a){this.a=a},
dG:function dG(a){this.a=a},
ap:function ap(){},
c9:function c9(){},
ct:function ct(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dl:function dl(a){this.b=a},
hR(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.fk(b,a))},
bC:function bC(){},
ah:function ah(){},
aE:function aE(){},
bD:function bD(){},
aT:function aT(){},
aU:function aU(){},
eH(a,b){var s=b.c
return s==null?b.c=A.e8(a,b.y,!0):s},
e0(a,b){var s=b.c
return s==null?b.c=A.b0(a,"J",[b.y]):s},
eI(a){var s=a.x
if(s===6||s===7||s===8)return A.eI(a.y)
return s===12||s===13},
hd(a){return a.at},
iv(a){return A.cf(v.typeUniverse,a,!1)},
a1(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.x
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.y
r=A.a1(a,s,a0,a1)
if(r===s)return b
return A.f_(a,r,!0)
case 7:s=b.y
r=A.a1(a,s,a0,a1)
if(r===s)return b
return A.e8(a,r,!0)
case 8:s=b.y
r=A.a1(a,s,a0,a1)
if(r===s)return b
return A.eZ(a,r,!0)
case 9:q=b.z
p=A.b5(a,q,a0,a1)
if(p===q)return b
return A.b0(a,b.y,p)
case 10:o=b.y
n=A.a1(a,o,a0,a1)
m=b.z
l=A.b5(a,m,a0,a1)
if(n===o&&l===m)return b
return A.e6(a,n,l)
case 12:k=b.y
j=A.a1(a,k,a0,a1)
i=b.z
h=A.ih(a,i,a0,a1)
if(j===k&&h===i)return b
return A.eY(a,j,h)
case 13:g=b.z
a1+=g.length
f=A.b5(a,g,a0,a1)
o=b.y
n=A.a1(a,o,a0,a1)
if(f===g&&n===o)return b
return A.e7(a,n,f,!0)
case 14:e=b.y
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.d(A.be("Attempted to substitute unexpected RTI kind "+c))}},
b5(a,b,c,d){var s,r,q,p,o=b.length,n=A.dt(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.a1(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
ii(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.dt(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.a1(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
ih(a,b,c,d){var s,r=b.a,q=A.b5(a,r,c,d),p=b.b,o=A.b5(a,p,c,d),n=b.c,m=A.ii(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.c2()
s.a=q
s.b=o
s.c=m
return s},
jH(a,b){a[v.arrayRti]=b
return a},
fj(a){var s,r=a.$S
if(r!=null){if(typeof r=="number")return A.iz(r)
s=a.$S()
return s}return null},
iD(a,b){var s
if(A.eI(b))if(a instanceof A.a4){s=A.fj(a)
if(s!=null)return s}return A.ch(a)},
ch(a){if(a instanceof A.h)return A.t(a)
if(Array.isArray(a))return A.f3(a)
return A.e9(J.ab(a))},
f3(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
t(a){var s=a.$ti
return s!=null?s:A.e9(a)},
e9(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.hY(a,s)},
hY(a,b){var s=a instanceof A.a4?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.hH(v.typeUniverse,s.name)
b.$ccache=r
return r},
iz(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.cf(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
iy(a){return A.aa(A.t(a))},
ec(a){var s
if(a instanceof A.ap)return A.iu(a.$r,a.aS())
s=a instanceof A.a4?A.fj(a):null
if(s!=null)return s
if(t.r.b(a))return J.fQ(a).a
if(Array.isArray(a))return A.f3(a)
return A.ch(a)},
aa(a){var s=a.w
return s==null?a.w=A.f5(a):s},
f5(a){var s,r,q=a.at,p=q.replace(/\*/g,"")
if(p===q)return a.w=new A.ce(a)
s=A.cf(v.typeUniverse,p,!0)
r=s.w
return r==null?s.w=A.f5(s):r},
iu(a,b){var s,r,q=b,p=q.length
if(p===0)return t.F
if(0>=p)return A.e(q,0)
s=A.b2(v.typeUniverse,A.ec(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.e(q,r)
s=A.f0(v.typeUniverse,s,A.ec(q[r]))}return A.b2(v.typeUniverse,s,a)},
fs(a){return A.aa(A.cf(v.typeUniverse,a,!1))},
hX(a){var s,r,q,p,o,n=this
if(n===t.K)return A.Q(n,a,A.i2)
if(!A.S(n))if(!(n===t._))s=!1
else s=!0
else s=!0
if(s)return A.Q(n,a,A.i6)
s=n.x
if(s===7)return A.Q(n,a,A.hV)
if(s===1)return A.Q(n,a,A.fa)
r=s===6?n.y:n
s=r.x
if(s===8)return A.Q(n,a,A.hZ)
if(r===t.S)q=A.f9
else if(r===t.i||r===t.n)q=A.i1
else if(r===t.N)q=A.i4
else q=r===t.y?A.ea:null
if(q!=null)return A.Q(n,a,q)
if(s===9){p=r.y
if(r.z.every(A.iG)){n.r="$i"+p
if(p==="eB")return A.Q(n,a,A.i0)
return A.Q(n,a,A.i5)}}else if(s===11){o=A.is(r.y,r.z)
return A.Q(n,a,o==null?A.fa:o)}return A.Q(n,a,A.hT)},
Q(a,b,c){a.b=c
return a.b(b)},
hW(a){var s,r=this,q=A.hS
if(!A.S(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.hK
else if(r===t.K)q=A.hJ
else{s=A.b6(r)
if(s)q=A.hU}r.a=q
return r.a(a)},
cg(a){var s,r=a.x
if(!A.S(a))if(!(a===t._))if(!(a===t.A))if(r!==7)if(!(r===6&&A.cg(a.y)))s=r===8&&A.cg(a.y)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
else s=!0
return s},
hT(a){var s=this
if(a==null)return A.cg(s)
return A.m(v.typeUniverse,A.iD(a,s),null,s,null)},
hV(a){if(a==null)return!0
return this.y.b(a)},
i5(a){var s,r=this
if(a==null)return A.cg(r)
s=r.r
if(a instanceof A.h)return!!a[s]
return!!J.ab(a)[s]},
i0(a){var s,r=this
if(a==null)return A.cg(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.h)return!!a[s]
return!!J.ab(a)[s]},
hS(a){var s,r=this
if(a==null){s=A.b6(r)
if(s)return a}else if(r.b(a))return a
A.f6(a,r)},
hU(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.f6(a,s)},
f6(a,b){throw A.d(A.hx(A.eR(a,A.u(b,null))))},
eR(a,b){return A.cp(a)+": type '"+A.u(A.ec(a),null)+"' is not a subtype of type '"+b+"'"},
hx(a){return new A.aZ("TypeError: "+a)},
q(a,b){return new A.aZ("TypeError: "+A.eR(a,b))},
hZ(a){var s=this,r=s.x===6?s.y:s
return r.y.b(a)||A.e0(v.typeUniverse,r).b(a)},
i2(a){return a!=null},
hJ(a){if(a!=null)return a
throw A.d(A.q(a,"Object"))},
i6(a){return!0},
hK(a){return a},
fa(a){return!1},
ea(a){return!0===a||!1===a},
jr(a){if(!0===a)return!0
if(!1===a)return!1
throw A.d(A.q(a,"bool"))},
jt(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.q(a,"bool"))},
js(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.q(a,"bool?"))},
ju(a){if(typeof a=="number")return a
throw A.d(A.q(a,"double"))},
jw(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.q(a,"double"))},
jv(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.q(a,"double?"))},
f9(a){return typeof a=="number"&&Math.floor(a)===a},
jx(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.d(A.q(a,"int"))},
jz(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.q(a,"int"))},
jy(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.q(a,"int?"))},
i1(a){return typeof a=="number"},
jA(a){if(typeof a=="number")return a
throw A.d(A.q(a,"num"))},
jC(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.q(a,"num"))},
jB(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.q(a,"num?"))},
i4(a){return typeof a=="string"},
jD(a){if(typeof a=="string")return a
throw A.d(A.q(a,"String"))},
jF(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.q(a,"String"))},
jE(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.q(a,"String?"))},
fd(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.u(a[q],b)
return s},
ib(a,b){var s,r,q,p,o,n,m=a.y,l=a.z
if(""===m)return"("+A.fd(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.u(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
f7(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=[]
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)a5.push("T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){k=a5.length
j=k-1-p
if(!(j>=0))return A.e(a5,j)
m=B.d.bj(m+l,a5[j])
i=a6[p]
h=i.x
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+A.u(i,a5)}m+=">"}else{m=""
r=null}o=a4.y
g=a4.z
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=A.u(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+A.u(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+A.u(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=A.u(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
u(a,b){var s,r,q,p,o,n,m,l=a.x
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=A.u(a.y,b)
return s}if(l===7){r=a.y
s=A.u(r,b)
q=r.x
return(q===12||q===13?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+A.u(a.y,b)+">"
if(l===9){p=A.ij(a.y)
o=a.z
return o.length>0?p+("<"+A.fd(o,b)+">"):p}if(l===11)return A.ib(a,b)
if(l===12)return A.f7(a,b,null)
if(l===13)return A.f7(a.y,b,a.z)
if(l===14){n=a.y
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.e(b,n)
return b[n]}return"?"},
ij(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
hI(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
hH(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.cf(a,b,!1)
else if(typeof m=="number"){s=m
r=A.b1(a,5,"#")
q=A.dt(s)
for(p=0;p<s;++p)q[p]=r
o=A.b0(a,b,q)
n[b]=o
return o}else return m},
hG(a,b){return A.f1(a.tR,b)},
hF(a,b){return A.f1(a.eT,b)},
cf(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.eW(A.eU(a,null,b,c))
r.set(b,s)
return s},
b2(a,b,c){var s,r,q=b.Q
if(q==null)q=b.Q=new Map()
s=q.get(c)
if(s!=null)return s
r=A.eW(A.eU(a,b,c,!0))
q.set(c,r)
return r},
f0(a,b,c){var s,r,q,p=b.as
if(p==null)p=b.as=new Map()
s=c.at
r=p.get(s)
if(r!=null)return r
q=A.e6(a,b,c.x===10?c.z:[c])
p.set(s,q)
return q},
P(a,b){b.a=A.hW
b.b=A.hX
return b},
b1(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.y(null,null)
s.x=b
s.at=c
r=A.P(a,s)
a.eC.set(c,r)
return r},
f_(a,b,c){var s,r=b.at+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.hC(a,b,r,c)
a.eC.set(r,s)
return s},
hC(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.S(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.y(null,null)
q.x=6
q.y=b
q.at=c
return A.P(a,q)},
e8(a,b,c){var s,r=b.at+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.hB(a,b,r,c)
a.eC.set(r,s)
return s},
hB(a,b,c,d){var s,r,q,p
if(d){s=b.x
if(!A.S(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.b6(b.y)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.y
if(q.x===8&&A.b6(q.y))return q
else return A.eH(a,b)}}p=new A.y(null,null)
p.x=7
p.y=b
p.at=c
return A.P(a,p)},
eZ(a,b,c){var s,r=b.at+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.hz(a,b,r,c)
a.eC.set(r,s)
return s},
hz(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.S(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.b0(a,"J",[b])
else if(b===t.P||b===t.T)return t.O}q=new A.y(null,null)
q.x=8
q.y=b
q.at=c
return A.P(a,q)},
hD(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.y(null,null)
s.x=14
s.y=b
s.at=q
r=A.P(a,s)
a.eC.set(q,r)
return r},
b_(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].at
return s},
hy(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].at}return s},
b0(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.b_(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.y(null,null)
r.x=9
r.y=b
r.z=c
if(c.length>0)r.c=c[0]
r.at=p
q=A.P(a,r)
a.eC.set(p,q)
return q},
e6(a,b,c){var s,r,q,p,o,n
if(b.x===10){s=b.y
r=b.z.concat(c)}else{r=c
s=b}q=s.at+(";<"+A.b_(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.y(null,null)
o.x=10
o.y=s
o.z=r
o.at=q
n=A.P(a,o)
a.eC.set(q,n)
return n},
hE(a,b,c){var s,r,q="+"+(b+"("+A.b_(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.y(null,null)
s.x=11
s.y=b
s.z=c
s.at=q
r=A.P(a,s)
a.eC.set(q,r)
return r},
eY(a,b,c){var s,r,q,p,o,n=b.at,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.b_(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.b_(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.hy(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.y(null,null)
p.x=12
p.y=b
p.z=c
p.at=r
o=A.P(a,p)
a.eC.set(r,o)
return o},
e7(a,b,c,d){var s,r=b.at+("<"+A.b_(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.hA(a,b,c,r,d)
a.eC.set(r,s)
return s},
hA(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.dt(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.x===1){r[p]=o;++q}}if(q>0){n=A.a1(a,b,r,0)
m=A.b5(a,c,r,0)
return A.e7(a,n,m,c!==m)}}l=new A.y(null,null)
l.x=13
l.y=b
l.z=c
l.at=d
return A.P(a,l)},
eU(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
eW(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.hq(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.eV(a,r,l,k,!1)
else if(q===46)r=A.eV(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.a_(a.u,a.e,k.pop()))
break
case 94:k.push(A.hD(a.u,k.pop()))
break
case 35:k.push(A.b1(a.u,5,"#"))
break
case 64:k.push(A.b1(a.u,2,"@"))
break
case 126:k.push(A.b1(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.hs(a,k)
break
case 38:A.hr(a,k)
break
case 42:p=a.u
k.push(A.f_(p,A.a_(p,a.e,k.pop()),a.n))
break
case 63:p=a.u
k.push(A.e8(p,A.a_(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.eZ(p,A.a_(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.hp(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.eX(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.hu(a.u,a.e,o)
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
return A.a_(a.u,a.e,m)},
hq(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
eV(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.x===10)o=o.y
n=A.hI(s,o.y)[p]
if(n==null)A.el('No "'+p+'" in "'+A.hd(o)+'"')
d.push(A.b2(s,o,n))}else d.push(p)
return m},
hs(a,b){var s,r=a.u,q=A.eT(a,b),p=b.pop()
if(typeof p=="string")b.push(A.b0(r,p,q))
else{s=A.a_(r,a.e,p)
switch(s.x){case 12:b.push(A.e7(r,s,q,a.n))
break
default:b.push(A.e6(r,s,q))
break}}},
hp(a,b){var s,r,q,p,o,n=null,m=a.u,l=b.pop()
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
s=r}q=A.eT(a,b)
l=b.pop()
switch(l){case-3:l=b.pop()
if(s==null)s=m.sEA
if(r==null)r=m.sEA
p=A.a_(m,a.e,l)
o=new A.c2()
o.a=q
o.b=s
o.c=r
b.push(A.eY(m,p,o))
return
case-4:b.push(A.hE(m,b.pop(),q))
return
default:throw A.d(A.be("Unexpected state under `()`: "+A.f(l)))}},
hr(a,b){var s=b.pop()
if(0===s){b.push(A.b1(a.u,1,"0&"))
return}if(1===s){b.push(A.b1(a.u,4,"1&"))
return}throw A.d(A.be("Unexpected extended operation "+A.f(s)))},
eT(a,b){var s=b.splice(a.p)
A.eX(a.u,a.e,s)
a.p=b.pop()
return s},
a_(a,b,c){if(typeof c=="string")return A.b0(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.ht(a,b,c)}else return c},
eX(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.a_(a,b,c[s])},
hu(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.a_(a,b,c[s])},
ht(a,b,c){var s,r,q=b.x
if(q===10){if(c===0)return b.y
s=b.z
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.y
q=b.x}else if(c===0)return b
if(q!==9)throw A.d(A.be("Indexed base must be an interface type"))
s=b.z
if(c<=s.length)return s[c-1]
throw A.d(A.be("Bad index "+c+" for "+b.h(0)))},
m(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(!A.S(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.x
if(r===4)return!0
if(A.S(b))return!1
if(b.x!==1)s=!1
else s=!0
if(s)return!0
q=r===14
if(q)if(A.m(a,c[b.y],c,d,e))return!0
p=d.x
s=b===t.P||b===t.T
if(s){if(p===8)return A.m(a,b,c,d.y,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return A.m(a,b.y,c,d,e)
if(r===6)return A.m(a,b.y,c,d,e)
return r!==7}if(r===6)return A.m(a,b.y,c,d,e)
if(p===6){s=A.eH(a,d)
return A.m(a,b,c,s,e)}if(r===8){if(!A.m(a,b.y,c,d,e))return!1
return A.m(a,A.e0(a,b),c,d,e)}if(r===7){s=A.m(a,t.P,c,d,e)
return s&&A.m(a,b.y,c,d,e)}if(p===8){if(A.m(a,b,c,d.y,e))return!0
return A.m(a,b,c,A.e0(a,d),e)}if(p===7){s=A.m(a,b,c,t.P,e)
return s||A.m(a,b,c,d.y,e)}if(q)return!1
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
if(!A.m(a,j,c,i,e)||!A.m(a,i,e,j,c))return!1}return A.f8(a,b.y,c,d.y,e)}if(p===12){if(b===t.g)return!0
if(s)return!1
return A.f8(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.i_(a,b,c,d,e)}if(o&&p===11)return A.i3(a,b,c,d,e)
return!1},
f8(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.m(a3,a4.y,a5,a6.y,a7))return!1
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
if(!A.m(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.m(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.m(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.m(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
i_(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.y,k=d.y
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.b2(a,b,r[o])
return A.f2(a,p,null,c,d.z,e)}n=b.z
m=d.z
return A.f2(a,n,null,c,m,e)},
f2(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.m(a,r,d,q,f))return!1}return!0},
i3(a,b,c,d,e){var s,r=b.z,q=d.z,p=r.length
if(p!==q.length)return!1
if(b.y!==d.y)return!1
for(s=0;s<p;++s)if(!A.m(a,r[s],c,q[s],e))return!1
return!0},
b6(a){var s,r=a.x
if(!(a===t.P||a===t.T))if(!A.S(a))if(r!==7)if(!(r===6&&A.b6(a.y)))s=r===8&&A.b6(a.y)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
iG(a){var s
if(!A.S(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
S(a){var s=a.x
return s===2||s===3||s===4||s===5||a===t.X},
f1(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
dt(a){return a>0?new Array(a):v.typeUniverse.sEA},
y:function y(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
c2:function c2(){this.c=this.b=this.a=null},
ce:function ce(a){this.a=a},
c0:function c0(){},
aZ:function aZ(a){this.a=a},
hi(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.im()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.as(new A.cZ(q),1)).observe(s,{childList:true})
return new A.cY(q,s,r)}else if(self.setImmediate!=null)return A.io()
return A.ip()},
hj(a){self.scheduleImmediate(A.as(new A.d_(a),0))},
hk(a){self.setImmediate(A.as(new A.d0(a),0))},
hl(a){A.hv(0,a)},
eM(a,b){var s=B.a.C(a.a,1000)
return A.hw(s<0?0:s,b)},
hv(a,b){var s=new A.aY()
s.br(a,b)
return s},
hw(a,b){var s=new A.aY()
s.bs(a,b)
return s},
i8(a){return new A.bR(new A.l($.i,a.l("l<0>")),a.l("bR<0>"))},
hO(a,b){a.$2(0,null)
b.b=!0
return b.a},
hL(a,b){A.hP(a,b)},
hN(a,b){var s,r=a==null?b.$ti.c.a(a):a
if(!b.b)b.a.a7(r)
else{s=b.a
if(b.$ti.l("J<1>").b(r))s.aO(r)
else s.ac(r)}},
hM(a,b){var s=A.U(a),r=A.R(a),q=b.a
if(b.b)q.G(s,r)
else q.by(s,r)},
hP(a,b){var s,r,q=new A.dv(b),p=new A.dw(b)
if(a instanceof A.l)a.aY(q,p,t.z)
else{s=t.z
if(a instanceof A.l)a.aI(q,p,s)
else{r=new A.l($.i,t.d)
r.a=8
r.c=a
r.aY(q,p,s)}}},
il(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.i.aG(new A.dA(s))},
ck(a,b){var s=A.dB(a,"error",t.K)
return new A.bf(s,b==null?A.er(a):b)},
er(a){var s
if(t.Q.b(a)){s=a.gU()
if(s!=null)return s}return B.y},
e4(a,b){var s,r
for(;s=a.a,(s&4)!==0;)a=a.c
if((s&24)!==0){r=b.Z()
b.X(a)
A.ao(b,r)}else{r=b.c
b.aW(a)
a.ak(r)}},
ho(a,b){var s,r,q={},p=q.a=a
for(;s=p.a,(s&4)!==0;){p=p.c
q.a=p}if((s&24)===0){r=b.c
b.aW(p)
q.a.ak(r)
return}if((s&16)===0&&b.c==null){b.X(p)
return}b.a^=2
A.a0(null,null,b.b,new A.da(q,b))},
ao(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;!0;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){f=f.c
A.dy(f.a,f.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.ao(g.a,f)
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
if(r){A.dy(m.a,m.b)
return}j=$.i
if(j!==k)$.i=k
else j=null
f=f.c
if((f&15)===8)new A.dh(s,g,p).$0()
else if(q){if((f&1)!==0)new A.dg(s,m).$0()}else if((f&2)!==0)new A.df(g,s).$0()
if(j!=null)$.i=j
f=s.c
if(f instanceof A.l){r=s.a.$ti
r=r.l("J<2>").b(f)||!r.z[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.a_(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.e4(f,i)
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
ic(a,b){if(t.C.b(a))return b.aG(a)
if(t.v.b(a))return a
throw A.d(A.eq(a,"onError",u.c))},
i9(){var s,r
for(s=$.aq;s!=null;s=$.aq){$.b4=null
r=s.b
$.aq=r
if(r==null)$.b3=null
s.a.$0()}},
ig(){$.eb=!0
try{A.i9()}finally{$.b4=null
$.eb=!1
if($.aq!=null)$.en().$1(A.fi())}},
ff(a){var s=new A.bS(a),r=$.b3
if(r==null){$.aq=$.b3=s
if(!$.eb)$.en().$1(A.fi())}else $.b3=r.b=s},
ie(a){var s,r,q,p=$.aq
if(p==null){A.ff(a)
$.b4=$.b3
return}s=new A.bS(a)
r=$.b4
if(r==null){s.b=p
$.aq=$.b4=s}else{q=r.b
s.b=q
$.b4=r.b=s
if(q==null)$.b3=s}},
fr(a){var s,r=null,q=$.i
if(B.b===q){A.a0(r,r,B.b,a)
return}s=!1
if(s){A.a0(r,r,q,a)
return}A.a0(r,r,q,q.b2(a))},
jb(a){A.dB(a,"stream",t.K)
return new A.cc()},
e2(a){return new A.aM(null,null,a.l("aM<0>"))},
fe(a){return},
eP(a,b){return b==null?A.iq():b},
hm(a,b){if(t.k.b(b))return a.aG(b)
if(t.u.b(b))return b
throw A.d(A.bc("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
ia(a){},
hQ(a,b,c){var s,r=a.aq(),q=$.dQ()
if(r!==q){q=r.$ti
s=$.i
r.W(new A.Z(new A.l(s,q),8,new A.dx(b,c),null,q.l("@<1>").a8(q.c).l("Z<1,2>")))}else b.ab(c)},
hh(a,b){var s=$.i
if(s===B.b)return A.eM(a,b)
return A.eM(a,s.b3(b,t.D))},
dy(a,b){A.ie(new A.dz(a,b))},
fb(a,b,c,d){var s,r=$.i
if(r===c)return d.$0()
$.i=c
s=r
try{r=d.$0()
return r}finally{$.i=s}},
fc(a,b,c,d,e){var s,r=$.i
if(r===c)return d.$1(e)
$.i=c
s=r
try{r=d.$1(e)
return r}finally{$.i=s}},
id(a,b,c,d,e,f){var s,r=$.i
if(r===c)return d.$2(e,f)
$.i=c
s=r
try{r=d.$2(e,f)
return r}finally{$.i=s}},
a0(a,b,c,d){if(B.b!==c)d=c.b2(d)
A.ff(d)},
cZ:function cZ(a){this.a=a},
cY:function cY(a,b,c){this.a=a
this.b=b
this.c=c},
d_:function d_(a){this.a=a},
d0:function d0(a){this.a=a},
aY:function aY(){this.c=0},
ds:function ds(a,b){this.a=a
this.b=b},
dr:function dr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bR:function bR(a,b){this.a=a
this.b=!1
this.$ti=b},
dv:function dv(a){this.a=a},
dw:function dw(a){this.a=a},
dA:function dA(a){this.a=a},
bf:function bf(a,b){this.a=a
this.b=b},
an:function an(a,b){this.a=a
this.$ti=b},
aN:function aN(a,b,c,d,e){var _=this
_.ay=0
_.CW=_.ch=null
_.w=a
_.a=b
_.d=c
_.e=d
_.r=_.f=null
_.$ti=e},
bT:function bT(){},
aM:function aM(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null
_.$ti=c},
Z:function Z(a,b,c,d,e){var _=this
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
d7:function d7(a,b){this.a=a
this.b=b},
de:function de(a,b){this.a=a
this.b=b},
db:function db(a){this.a=a},
dc:function dc(a){this.a=a},
dd:function dd(a,b,c){this.a=a
this.b=b
this.c=c},
da:function da(a,b){this.a=a
this.b=b},
d9:function d9(a,b){this.a=a
this.b=b},
d8:function d8(a,b,c){this.a=a
this.b=b
this.c=c},
dh:function dh(a,b,c){this.a=a
this.b=b
this.c=c},
di:function di(a){this.a=a},
dg:function dg(a,b){this.a=a
this.b=b},
df:function df(a,b){this.a=a
this.b=b},
bS:function bS(a){this.a=a
this.b=null},
W:function W(){},
cJ:function cJ(a,b){this.a=a
this.b=b},
cK:function cK(a,b){this.a=a
this.b=b},
cH:function cH(a){this.a=a},
cI:function cI(a,b,c){this.a=a
this.b=b
this.c=c},
aO:function aO(){},
bW:function bW(){},
bU:function bU(){},
aX:function aX(){},
c_:function c_(){},
bZ:function bZ(a){this.b=a
this.a=null},
c8:function c8(){this.a=0
this.c=this.b=null},
dm:function dm(a,b){this.a=a
this.b=b},
aQ:function aQ(a,b){this.a=a
this.b=0
this.c=b},
cc:function cc(){},
dx:function dx(a,b){this.a=a
this.b=b},
du:function du(){},
dz:function dz(a,b){this.a=a
this.b=b},
dn:function dn(){},
dp:function dp(a,b){this.a=a
this.b=b},
dq:function dq(a,b,c){this.a=a
this.b=b
this.c=c},
h9(a){return A.fl(a,new A.aD())},
ha(){return new A.c5()},
e5(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
eS(a,b){var s=new A.aS(a,b)
s.c=a.e
return s},
dZ(a){var s,r={}
if(A.ei(a))return"{...}"
s=new A.bL("")
try{$.x.push(a)
s.a+="{"
r.a=!0
a.av(0,new A.cx(r,s))
s.a+="}"}finally{if(0>=$.x.length)return A.e($.x,-1)
$.x.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
c5:function c5(){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0},
dk:function dk(a){this.a=a
this.c=this.b=null},
aS:function aS(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
a8:function a8(){},
bz:function bz(){},
cx:function cx(a,b){this.a=a
this.b=b},
bK:function bK(){},
cb:function cb(){},
h_(a,b){a=A.d(a)
a.stack=b.h(0)
throw a
throw A.d("unreachable")},
cw(a,b,c){var s,r=c?J.ez(a):J.h3(a)
if(a!==0&&!0)for(s=0;s<r.length;++s)r[s]=b
return r},
eC(a,b){var s,r=[]
for(s=J.ci(a);s.m();)r.push(s.gn())
if(b)return r
return J.dW(r)},
eG(a){return new A.ct(a,A.h7(a,!1,!0,!1,!1,!1))},
eJ(a,b,c){var s=J.ci(b)
if(!s.m())return a
if(c.length===0){do a+=A.f(s.gn())
while(s.m())}else{a+=A.f(s.gn())
for(;s.m();)a=a+c+A.f(s.gn())}return a},
cp(a){if(typeof a=="number"||A.ea(a)||a==null)return J.b9(a)
if(typeof a=="string")return JSON.stringify(a)
return A.eE(a)},
h0(a,b){A.dB(a,"error",t.K)
A.dB(b,"stackTrace",t.l)
A.h_(a,b)},
be(a){return new A.bd(a)},
bc(a,b){return new A.I(!1,null,b,a)},
eq(a,b,c){return new A.I(!0,a,b,c)},
bG(a,b,c,d,e){return new A.aI(b,c,!0,a,d,"Invalid value")},
hc(a,b,c){if(0>a||a>c)throw A.d(A.bG(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.d(A.bG(b,a,c,"end",null))
return b}return c},
eF(a,b){if(a<0)throw A.d(A.bG(a,0,null,b,null))
return a},
bq(a,b,c,d){return new A.bp(b,!0,a,d,"Index out of range")},
aK(a){return new A.bO(a)},
eO(a){return new A.bM(a)},
hf(a){return new A.a9(a)},
ad(a){return new A.bh(a)},
ey(a){return new A.d6(a)},
h2(a,b,c){var s,r
if(A.ei(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=[]
$.x.push(a)
try{A.i7(a,s)}finally{if(0>=$.x.length)return A.e($.x,-1)
$.x.pop()}r=A.eJ(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
dV(a,b,c){var s,r
if(A.ei(a))return b+"..."+c
s=new A.bL(b)
$.x.push(a)
try{r=s
r.a=A.eJ(r.a,a,", ")}finally{if(0>=$.x.length)return A.e($.x,-1)
$.x.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
i7(a,b){var s,r,q,p,o,n,m,l=a.gt(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.m())return
s=A.f(l.gn())
b.push(s)
k+=s.length+2;++j}if(!l.m()){if(j<=5)return
if(0>=b.length)return A.e(b,-1)
r=b.pop()
if(0>=b.length)return A.e(b,-1)
q=b.pop()}else{p=l.gn();++j
if(!l.m()){if(j<=4){b.push(A.f(p))
return}r=A.f(p)
if(0>=b.length)return A.e(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gn();++j
for(;l.m();p=o,o=n){n=l.gn();++j
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
aH(a,b,c,d){var s
if(B.e===c)return A.eK(B.c.gi(a),J.H(b),$.dR())
if(B.e===d){s=B.c.gi(a)
b=J.H(b)
c=J.H(c)
return A.e3(A.X(A.X(A.X($.dR(),s),b),c))}s=A.eL(B.c.gi(a),J.H(b),J.H(c),J.H(d),$.dR())
return s},
bj:function bj(a){this.a=a},
d3:function d3(){},
k:function k(){},
bd:function bd(a){this.a=a},
N:function N(){},
I:function I(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aI:function aI(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bp:function bp(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bO:function bO(a){this.a=a},
bM:function bM(a){this.a=a},
a9:function a9(a){this.a=a},
bh:function bh(a){this.a=a},
bE:function bE(){},
aJ:function aJ(){},
d6:function d6(a){this.a=a},
cs:function cs(a,b){this.a=a
this.b=b},
br:function br(){},
n:function n(){},
h:function h(){},
cd:function cd(){},
bL:function bL(a){this.a=a},
ew(a,b){var s=document.createElement("canvas")
s.width=b
s.height=a
return s},
hn(a,b){var s,r
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.b7)(b),++r)a.appendChild(b[r])},
Y(a,b,c,d){var s=new A.c1(a,b,c==null?null:A.fg(new A.d4(c),t.B),!1)
s.b_()
return s},
f4(a){var s
if("postMessage" in a){s=A.eQ(a)
return s}else return a},
eQ(a){if(a===window)return a
else return new A.d2()},
fg(a,b){var s=$.i
if(s===B.b)return a
return s.b3(a,b)},
c:function c(){},
ba:function ba(){},
bb:function bb(){},
bg:function bg(){},
C:function C(){},
ae:function ae(){},
cn:function cn(){},
co:function co(){},
av:function av(){},
d1:function d1(a,b){this.a=a
this.b=b},
o:function o(){},
a:function a(){},
bk:function bk(){},
bn:function bn(){},
a5:function a5(){},
D:function D(){},
r:function r(){},
bV:function bV(a){this.a=a},
j:function j(){},
aF:function aF(){},
bJ:function bJ(){},
G:function G(){},
aL:function aL(){},
aP:function aP(){},
dU:function dU(a,b){this.a=a
this.$ti=b},
aR:function aR(){},
p:function p(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
c1:function c1(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
d4:function d4(a){this.a=a},
d5:function d5(a){this.a=a},
ay:function ay(){},
ax:function ax(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
d2:function d2(){},
bX:function bX(){},
c3:function c3(){},
c4:function c4(){},
c6:function c6(){},
c7:function c7(){},
dT(){return window.navigator.userAgent},
bl:function bl(a,b){this.a=a
this.b=b},
cq:function cq(){},
cr:function cr(){},
e_(a,b,c,d,e){var s,r
if(c<0)s=c===-1/0?0:-c*0
else s=c
if(d<0)r=d===-1/0?0:-d*0
else r=d
return new A.M(a,b,s,r,e.l("M<0>"))},
ai:function ai(a,b,c){this.a=a
this.b=b
this.$ti=c},
ca:function ca(){},
M:function M(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b:function b(){},
au:function au(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
af:function af(){},
ag:function ag(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
aj:function aj(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=0},
he(a,b,c,d,e,f,g){var s,r,q=g*f,p=d*e,o=A.ew(p,q)
q=A.ew(p,q)
p=[]
for(s=0;s<d;++s){r=B.a.C(g,32)
p.push(new Uint32Array(r+1))}q=new A.bI(d,g,f,e,c,a,o,q,p)
q.bp(a,b,c,d,e,f,g)
return q},
e1(a){return new A.B(B.a.C(a,32),31-B.a.j(a,32))},
E:function E(a){this.b=a},
bI:function bI(a,b,c,d,e,f,g,h,i){var _=this
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
cB:function cB(a){this.a=a},
cC:function cC(a){this.a=a},
cD:function cD(a){this.a=a},
cE:function cE(a){this.a=a},
cA:function cA(){},
hg(a,b,c){var s,r,q,p="white",o=null,n=A.he("black",b,p,c*10,2,2,a*8),m=[]
for(s=0;s<c;++s){r=[]
for(q=0;q<a;++q)r.push(new A.au(s,q," ",p))
m.push(r)}n=new A.cM(c,a,b,n,new A.aj(c,a),new A.aj(c,a),new A.aj(c,a),A.e2(t.N),A.e2(t.V),A.e2(t.m),B.h,m,A.ha(),B.dF)
n.bq("black",a,b,p,o,!0,2,2,2,c,!0,o,o,o,o,o,o)
return n},
al:function al(a){this.b=a},
cM:function cM(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cU:function cU(a){this.a=a},
cT:function cT(){},
cS:function cS(a){this.a=a},
cN:function cN(a){this.a=a},
cO:function cO(a){this.a=a},
cP:function cP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cQ:function cQ(a,b,c){this.a=a
this.b=b
this.c=c},
cR:function cR(a){this.a=a},
dI(){var s=0,r=A.i8(t.z),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$dI=A.il(function(b4,b5){if(b4===1)return A.hM(b5,r)
while(true)switch(s){case 0:b3=document.getElementById("index")
b3.toString
p=A.hg(60,b3,35)
p.N(0)
p.S(0)
o=A.h9(["blockdude",["Block Dude is a game by Brandon Sterner and","Detached Solutions for the Texas Instruments family","of graphic display calculators. The graphics data for","this demo was pinched directly from the Z80 assembly","code for the calculator game."],"emotions",["Mixed Emotions is a little twist on the classic sliding","tiles game to demonstrate mouse support for the terminal.","Click on tiles to slide them to their correct positions,","but you only get to see the correct positions by sliding","the tiles!"],"sokoban",["Mother Hen is a Sokoban clone that demonstrates poking","simple sprite data into the terminal graphics memory."],"snake",["Snake is version of the infamous snake game that","demonstrates non interrupting keyboard input."],"wordle",["Word Logic is a Wordle clone that demonstrates a fairly","complex program running in the terminal."],"four",["This is the classic game of connect-four. The computer","uses background Monte Carlo simulations to play a fairly","intelligent game."]])
n=A.eG("^ *info +(.+) *$")
m=A.eG("^ *load +(.+) *$")
l=new A.dN(p)
k=new A.dJ(p)
j=new A.dL(o,p)
i=new A.dK(o,p)
h=new A.dM(o,p)
l.$0()
j.$0()
b3=m.b,g=n.b,f=p.y,e=p.x,d=e.b,c=f.b,b=f.a,a=p.z,a0=a.b,a1=a.a,a2=p.as,a3=A.t(a2).l("an<1>"),a4=p.a,a5=a4-1,a6=e.a,a7=p.b,a8=a7-4
case 3:if(!!0){s=4
break}p.c0(" > ","lightgreen",!1)
if(p.ay!==B.h)A.el(A.ey("Terminal already awaiting input."))
a9=e.c
b0=e.d
a9=B.a.j(a9,a4)
b0=B.a.j(b0,a7)
a9=B.a.j(a9,a6)
e.c=a9
e.sO(b0)
p.aF(B.d.aK(" ",a8),!1)
e.c=a9
e.sO(b0)
a9=e.c
if(a9===a5){p.a6(0)
a9=e.c=B.a.j(e.c-1,a6)}a9=a9*d+e.d
b0=B.a.j(B.a.A(a9,c),b)
f.c=b0
a9=B.a.j(a9,c)
f.d=a9
a9=b0*c+a9+a8
a.c=B.a.j(B.a.A(a9,a0),a1)
a.d=B.a.j(a9,a0)
p.ay=B.j
a9=new A.an(a2,a3)
s=5
return A.hL(a9.gbS(a9),$async$dI)
case 5:b1=b5
b2=B.d.bi(b1)
if("reset"===b2){l.$0()
s=3
break}if("help"===b2){k.$0()
s=3
break}if("list"===b2){j.$0()
s=3
break}if(g.test(b1)){a9=n.b6(b1).b
if(1>=a9.length){q=A.e(a9,1)
s=1
break}a9=a9[1]
a9.toString
i.$1(a9)}else if(b3.test(b1)){a9=m.b6(b1).b
if(1>=a9.length){q=A.e(a9,1)
s=1
break}a9=a9[1]
a9.toString
h.$1(a9)}else{p.E()
p.I(" Not understood. Type 'help' for help.","orange")
p.E()}s=3
break
case 4:case 1:return A.hN(q,r)}})
return A.hO($async$dI,r)},
dN:function dN(a){this.a=a},
dJ:function dJ(a){this.a=a},
dL:function dL(a,b){this.a=a
this.b=b},
dK:function dK(a,b){this.a=a
this.b=b},
dM:function dM(a,b){this.a=a
this.b=b},
iN(a){A.iM(new A.bw("Field '"+a+"' has been assigned during initialization."),new Error())}},J={
ej(a,b,c,d){return{i:a,p:b,e:c,x:d}},
dD(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.eh==null){A.iB()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.eO("Return interceptor for "+A.f(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.dj
if(o==null)o=$.dj=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.iH(a)
if(p!=null)return p
if(typeof a=="function")return B.A
s=Object.getPrototypeOf(a)
if(s==null)return B.o
if(s===Object.prototype)return B.o
if(typeof q=="function"){o=$.dj
if(o==null)o=$.dj=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.k,enumerable:false,writable:true,configurable:true})
return B.k}return B.k},
h3(a){if(a<0||a>4294967295)throw A.d(A.bG(a,0,4294967295,"length",null))
return J.h4(new Array(a))},
ez(a){if(a<0)throw A.d(A.bc("Length must be a non-negative integer: "+a,null))
return new Array(a)},
h4(a){return J.dW(a)},
dW(a){a.fixed$length=Array
return a},
eA(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
h5(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.eA(r))break;++b}return b},
h6(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.e(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.eA(q))break}return b},
ab(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aA.prototype
return J.bt.prototype}if(typeof a=="string")return J.a6.prototype
if(a==null)return J.aB.prototype
if(typeof a=="boolean")return J.bs.prototype
if(Array.isArray(a))return J.K.prototype
if(typeof a!="object"){if(typeof a=="function")return J.L.prototype
return a}if(a instanceof A.h)return a
return J.dD(a)},
fm(a){if(typeof a=="string")return J.a6.prototype
if(a==null)return a
if(Array.isArray(a))return J.K.prototype
if(typeof a!="object"){if(typeof a=="function")return J.L.prototype
return a}if(a instanceof A.h)return a
return J.dD(a)},
eg(a){if(a==null)return a
if(Array.isArray(a))return J.K.prototype
if(typeof a!="object"){if(typeof a=="function")return J.L.prototype
return a}if(a instanceof A.h)return a
return J.dD(a)},
iw(a){if(typeof a=="string")return J.a6.prototype
if(a==null)return a
if(!(a instanceof A.h))return J.am.prototype
return a},
a2(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.L.prototype
return a}if(a instanceof A.h)return a
return J.dD(a)},
b8(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ab(a).q(a,b)},
fM(a,b){if(typeof b==="number")if(Array.isArray(a)||A.iF(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.eg(a).p(a,b)},
fN(a,b,c,d){return J.a2(a).bw(a,b,c,d)},
eo(a){return J.a2(a).aP(a)},
fO(a,b,c,d){return J.a2(a).bI(a,b,c,d)},
ep(a,b){return J.eg(a).D(a,b)},
H(a){return J.ab(a).gi(a)},
ci(a){return J.eg(a).gt(a)},
cj(a){return J.fm(a).gk(a)},
fP(a){return J.a2(a).gbZ(a)},
fQ(a){return J.ab(a).gF(a)},
fR(a,b){return J.a2(a).sP(a,b)},
b9(a){return J.ab(a).h(a)},
fS(a){return J.iw(a).bi(a)},
az:function az(){},
bs:function bs(){},
aB:function aB(){},
w:function w(){},
a7:function a7(){},
bF:function bF(){},
am:function am(){},
L:function L(){},
K:function K(){},
cu:function cu(){},
ac:function ac(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
aC:function aC(){},
aA:function aA(){},
bt:function bt(){},
a6:function a6(){}},B={}
var w=[A,J,B]
var $={}
A.dX.prototype={}
J.az.prototype={
q(a,b){return a===b},
gi(a){return A.ak(a)},
h(a){return"Instance of '"+A.cz(a)+"'"},
gF(a){return A.aa(A.e9(this))}}
J.bs.prototype={
h(a){return String(a)},
gi(a){return a?519018:218159},
gF(a){return A.aa(t.y)},
$iA:1}
J.aB.prototype={
q(a,b){return null==b},
h(a){return"null"},
gi(a){return 0},
$iA:1,
$in:1}
J.w.prototype={}
J.a7.prototype={
gi(a){return 0},
h(a){return String(a)}}
J.bF.prototype={}
J.am.prototype={}
J.L.prototype={
h(a){var s=a[$.fv()]
if(s==null)return this.bo(a)
return"JavaScript function for "+J.b9(s)}}
J.K.prototype={
M(a,b){if(!!a.fixed$length)A.el(A.aK("addAll"))
this.bu(a,b)
return},
bu(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw A.d(A.ad(a))
for(s=0;s<r;++s)a.push(b[s])},
bX(a,b){var s,r,q=a.length,p=A.cw(q,"",!1)
for(s=0;s<a.length;++s){r=A.f(a[s])
if(!(s<q))return A.e(p,s)
p[s]=r}return p.join(b)},
bT(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw A.d(A.ad(a))}return s},
bU(a,b,c){return this.bT(a,b,c,t.z)},
D(a,b){if(!(b>=0&&b<a.length))return A.e(a,b)
return a[b]},
h(a){return A.dV(a,"[","]")},
gt(a){return new J.ac(a,a.length)},
gi(a){return A.ak(a)},
gk(a){return a.length}}
J.cu.prototype={}
J.ac.prototype={
gn(){var s=this.d
return s==null?A.t(this).c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.d(A.b7(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.aC.prototype={
bh(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.d(A.aK(""+a+".toInt()"))},
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
throw A.d(A.aK("Result of truncating division is "+A.f(s)+": "+A.f(a)+" ~/ "+b))},
T(a,b){if(b<0)throw A.d(A.ed(b))
return b>31?0:a<<b>>>0},
bO(a,b){return b>31?0:a<<b>>>0},
bl(a,b){var s
if(b<0)throw A.d(A.ed(b))
if(a>0)s=this.an(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
bP(a,b){var s
if(a>0)s=this.an(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
B(a,b){if(0>b)throw A.d(A.ed(b))
return this.an(a,b)},
an(a,b){return b>31?0:a>>>b},
gF(a){return A.aa(t.n)},
$iT:1}
J.aA.prototype={
gF(a){return A.aa(t.S)},
$iA:1,
$iv:1}
J.bt.prototype={
gF(a){return A.aa(t.i)},
$iA:1}
J.a6.prototype={
bj(a,b){return a+b},
bm(a,b,c){return a.substring(b,A.hc(b,c,a.length))},
bi(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.e(p,0)
if(p.charCodeAt(0)===133){s=J.h5(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.e(p,r)
q=p.charCodeAt(r)===133?J.h6(p,r):o
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
if(c>s)throw A.d(A.bG(c,0,s,null,null))
return A.iK(a,b,c)},
h(a){return a},
gi(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gF(a){return A.aa(t.N)},
gk(a){return a.length},
$iA:1,
$iF:1}
A.bw.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.dP.prototype={
$0(){var s=new A.l($.i,t.U)
s.a7(null)
return s},
$S:7}
A.cF.prototype={}
A.by.prototype={
gn(){var s=this.d
return s==null?A.t(this).c.a(s):s},
m(){var s,r=this,q=r.a,p=J.fm(q),o=p.gk(q)
if(r.b!==o)throw A.d(A.ad(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.D(q,s);++r.c
return!0}}
A.bA.prototype={
gt(a){return new A.bB(J.ci(this.a),this.b)},
gk(a){return J.cj(this.a)},
D(a,b){return this.b.$1(J.ep(this.a,b))}}
A.bB.prototype={
m(){var s=this,r=s.b
if(r.m()){s.a=s.c.$1(r.gn())
return!0}s.a=null
return!1},
gn(){var s=this.a
return s==null?A.t(this).z[1].a(s):s}}
A.bP.prototype={
gt(a){return new A.bQ(J.ci(this.a),this.b)}}
A.bQ.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(r.$1(s.gn()))return!0
return!1},
gn(){return this.a.gn()}}
A.bm.prototype={}
A.B.prototype={$r:"+(1,2)",$s:1}
A.bi.prototype={
h(a){return A.dZ(this)}}
A.bo.prototype={
Y(){var s=this.$map
if(s==null){s=new A.bu()
A.fl(this.a,s)
this.$map=s}return s},
R(a){return this.Y().R(a)},
p(a,b){return this.Y().p(0,b)},
av(a,b){this.Y().av(0,b)},
gk(a){return this.Y().a}}
A.cW.prototype={
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
A.aG.prototype={
h(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
A.bv.prototype={
h(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.bN.prototype={
h(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.cy.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.aw.prototype={}
A.aW.prototype={
h(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iz:1}
A.a4.prototype={
h(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.ft(r==null?"unknown":r)+"'"},
gca(){return this},
$C:"$1",
$R:1,
$D:null}
A.cl.prototype={$C:"$0",$R:0}
A.cm.prototype={$C:"$2",$R:2}
A.cL.prototype={}
A.cG.prototype={
h(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.ft(s)+"'"}}
A.at.prototype={
q(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.at))return!1
return this.$_target===b.$_target&&this.a===b.a},
gi(a){return(A.ek(this.a)^A.ak(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.cz(this.a)+"'")}}
A.bY.prototype={
h(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.bH.prototype={
h(a){return"RuntimeError: "+this.a}}
A.aD.prototype={
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
if(q!==s.r)throw A.d(A.ad(s))
r=r.c}},
V(a,b){var s=this,r=new A.cv(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&1073741823
return r},
aw(a){return J.H(a)&1073741823},
az(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.b8(a[r].a,b))return r
return-1},
h(a){return A.dZ(this)}}
A.cv.prototype={}
A.bx.prototype={
gn(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.ad(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
A.bu.prototype={
aw(a){return A.ir(a)&1073741823},
az(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.b8(a[r].a,b))return r
return-1}}
A.dE.prototype={
$1(a){return this.a(a)},
$S:8}
A.dF.prototype={
$2(a,b){return this.a(a,b)},
$S:9}
A.dG.prototype={
$1(a){return this.a(a)},
$S:10}
A.ap.prototype={
h(a){return this.aZ(!1)},
aZ(a){var s,r,q,p,o,n=this.bD(),m=this.aS(),l=(a?""+"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.e(m,q)
o=m[q]
l=a?l+A.eE(o):l+A.f(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
bD(){var s,r=this.$s
for(;$.aV.length<=r;)$.aV.push(null)
s=$.aV[r]
if(s==null){s=this.bC()
if(!(r<$.aV.length))return A.e($.aV,r)
$.aV[r]=s}return s},
bC(){var s,r,q,p,o,n=this.$r,m=n.indexOf("("),l=n.substring(1,m),k=n.substring(m),j=k==="()"?0:k.replace(/[^,]/g,"").length+1,i=new Array(j)
for(s=0;s<j;++s)i[s]=s
if(l!==""){r=l.split(",")
s=r.length
for(q=i.length,p=j;s>0;){--p;--s
o=r[s]
if(!(p>=0&&p<q))return A.e(i,p)
i[p]=o}}i=A.eC(i,!1)
i.fixed$length=Array
i.immutable$list=Array
return i}}
A.c9.prototype={
aS(){return[this.a,this.b]},
q(a,b){if(b==null)return!1
return b instanceof A.c9&&this.$s===b.$s&&J.b8(this.a,b.a)&&J.b8(this.b,b.b)},
gi(a){return A.aH(this.$s,this.a,this.b,B.e)}}
A.ct.prototype={
h(a){return"RegExp/"+this.a+"/"+this.b.flags},
b6(a){var s=this.b.exec(a)
if(s==null)return null
return new A.dl(s)}}
A.dl.prototype={}
A.bC.prototype={}
A.ah.prototype={
gk(a){return a.length},
$iV:1}
A.aE.prototype={}
A.bD.prototype={
gF(a){return B.dP},
p(a,b){A.hR(b,a,a.length)
return a[b]},
$iA:1}
A.aT.prototype={}
A.aU.prototype={}
A.y.prototype={
l(a){return A.b2(v.typeUniverse,this,a)},
a8(a){return A.f0(v.typeUniverse,this,a)}}
A.c2.prototype={}
A.ce.prototype={
h(a){return A.u(this.a,null)}}
A.c0.prototype={
h(a){return this.a}}
A.aZ.prototype={$iN:1}
A.cZ.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:4}
A.cY.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:11}
A.d_.prototype={
$0(){this.a.$0()},
$S:2}
A.d0.prototype={
$0(){this.a.$0()},
$S:2}
A.aY.prototype={
br(a,b){if(self.setTimeout!=null)self.setTimeout(A.as(new A.ds(this,b),0),a)
else throw A.d(A.aK("`setTimeout()` not found."))},
bs(a,b){if(self.setTimeout!=null)self.setInterval(A.as(new A.dr(this,a,Date.now(),b),0),a)
else throw A.d(A.aK("Periodic timer."))},
$icV:1}
A.ds.prototype={
$0(){this.a.c=1
this.b.$0()},
$S:0}
A.dr.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.a.A(s,o)}q.c=p
r.d.$1(q)},
$S:2}
A.bR.prototype={}
A.dv.prototype={
$1(a){return this.a.$2(0,a)},
$S:5}
A.dw.prototype={
$2(a,b){this.a.$2(1,new A.aw(a,b))},
$S:12}
A.dA.prototype={
$2(a,b){this.a(a,b)},
$S:13}
A.bf.prototype={
h(a){return A.f(this.a)},
$ik:1,
gU(){return this.b}}
A.an.prototype={}
A.aN.prototype={
ai(){},
aj(){}}
A.bT.prototype={
gbF(){return this.c<4},
bJ(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
bQ(a,b,c,d){var s,r,q,p,o,n=this
if((n.c&4)!==0){s=new A.aQ($.i,c)
s.bK()
return s}s=$.i
r=d?1:0
q=A.eP(s,a)
A.hm(s,b)
p=new A.aN(n,q,s,r,A.t(n).l("aN<1>"))
p.CW=p
p.ch=p
p.ay=n.c&1
o=n.e
n.e=p
p.ch=null
p.CW=o
if(o==null)n.d=p
else o.ch=p
if(n.d===p)A.fe(n.a)
return p},
bH(a){var s,r=this
A.t(r).l("aN<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.bJ(a)
if((r.c&2)===0&&r.d==null)r.bA()}return null},
bv(){if((this.c&4)!==0)return new A.a9("Cannot add new events after calling close")
return new A.a9("Cannot add new events while doing an addStream")},
L(a,b){if(!this.gbF())throw A.d(this.bv())
this.al(b)},
bA(){if((this.c&4)!==0)if(null.gcb())null.a7(null)
A.fe(this.b)}}
A.aM.prototype={
al(a){var s
for(s=this.d;s!=null;s=s.ch)s.bx(new A.bZ(a))}}
A.Z.prototype={
bY(a){if((this.c&15)!==6)return!0
return this.b.b.aH(this.d,a.a)},
bV(a){var s,r=this.e,q=null,p=a.a,o=this.b.b
if(t.C.b(r))q=o.c4(r,p,a.b)
else q=o.aH(r,p)
try{p=q
return p}catch(s){if(t.c.b(A.U(s))){if((this.c&1)!==0)throw A.d(A.bc("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.bc("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.l.prototype={
aW(a){this.a=this.a&1|4
this.c=a},
aI(a,b,c){var s,r,q=$.i
if(q===B.b){if(b!=null&&!t.C.b(b)&&!t.v.b(b))throw A.d(A.eq(b,"onError",u.c))}else if(b!=null)b=A.ic(b,q)
s=new A.l(q,c.l("l<0>"))
r=b==null?1:3
this.W(new A.Z(s,r,a,b,this.$ti.l("@<1>").a8(c).l("Z<1,2>")))
return s},
c8(a,b){return this.aI(a,null,b)},
aY(a,b,c){var s=new A.l($.i,c.l("l<0>"))
this.W(new A.Z(s,3,a,b,this.$ti.l("@<1>").a8(c).l("Z<1,2>")))
return s},
bN(a){this.a=this.a&1|16
this.c=a},
X(a){this.a=a.a&30|this.a&1
this.c=a.c},
W(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.W(a)
return}s.X(r)}A.a0(null,null,s.b,new A.d7(s,a))}},
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
A.a0(null,null,n.b,new A.de(m,n))}},
Z(){var s=this.c
this.c=null
return this.a_(s)},
a_(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
aN(a){var s,r,q,p=this
p.a^=2
try{a.aI(new A.db(p),new A.dc(p),t.P)}catch(q){s=A.U(q)
r=A.R(q)
A.fr(new A.dd(p,s,r))}},
ab(a){var s,r=this,q=r.$ti
if(q.l("J<1>").b(a))if(q.b(a))A.e4(a,r)
else r.aN(a)
else{s=r.Z()
r.a=8
r.c=a
A.ao(r,s)}},
ac(a){var s=this,r=s.Z()
s.a=8
s.c=a
A.ao(s,r)},
G(a,b){var s=this.Z()
this.bN(A.ck(a,b))
A.ao(this,s)},
a7(a){if(this.$ti.l("J<1>").b(a)){this.aO(a)
return}this.bz(a)},
bz(a){this.a^=2
A.a0(null,null,this.b,new A.d9(this,a))},
aO(a){if(this.$ti.b(a)){A.ho(a,this)
return}this.aN(a)},
by(a,b){this.a^=2
A.a0(null,null,this.b,new A.d8(this,a,b))},
$iJ:1}
A.d7.prototype={
$0(){A.ao(this.a,this.b)},
$S:0}
A.de.prototype={
$0(){A.ao(this.b,this.a.a)},
$S:0}
A.db.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.ac(p.$ti.c.a(a))}catch(q){s=A.U(q)
r=A.R(q)
p.G(s,r)}},
$S:4}
A.dc.prototype={
$2(a,b){this.a.G(a,b)},
$S:15}
A.dd.prototype={
$0(){this.a.G(this.b,this.c)},
$S:0}
A.da.prototype={
$0(){A.e4(this.a.a,this.b)},
$S:0}
A.d9.prototype={
$0(){this.a.ac(this.b)},
$S:0}
A.d8.prototype={
$0(){this.a.G(this.b,this.c)},
$S:0}
A.dh.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.be(q.d)}catch(p){s=A.U(p)
r=A.R(p)
q=m.c&&m.b.a.c.a===s
o=m.a
if(q)o.c=m.b.a.c
else o.c=A.ck(s,r)
o.b=!0
return}if(l instanceof A.l&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=l.c
q.b=!0}return}if(l instanceof A.l){n=m.b.a
q=m.a
q.c=l.c8(new A.di(n),t.z)
q.b=!1}},
$S:0}
A.di.prototype={
$1(a){return this.a},
$S:16}
A.dg.prototype={
$0(){var s,r,q,p,o
try{q=this.a
p=q.a
q.c=p.b.b.aH(p.d,this.b)}catch(o){s=A.U(o)
r=A.R(o)
q=this.a
q.c=A.ck(s,r)
q.b=!0}},
$S:0}
A.df.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=m.a.a.c
p=m.b
if(p.a.bY(s)&&p.a.e!=null){p.c=p.a.bV(s)
p.b=!1}}catch(o){r=A.U(o)
q=A.R(o)
p=m.a.a.c
n=m.b
if(p.a===r)n.c=p
else n.c=A.ck(r,q)
n.b=!0}},
$S:0}
A.bS.prototype={}
A.W.prototype={
gk(a){var s={},r=new A.l($.i,t.a)
s.a=0
this.aB(new A.cJ(s,this),!0,new A.cK(s,r),r.gaQ())
return r},
gbS(a){var s=new A.l($.i,A.t(this).l("l<1>")),r=this.aB(null,!0,new A.cH(s),s.gaQ())
r.aD(new A.cI(this,r,s))
return s}}
A.cJ.prototype={
$1(a){++this.a.a},
$S(){return A.t(this.b).l("~(1)")}}
A.cK.prototype={
$0(){this.b.ab(this.a.a)},
$S:0}
A.cH.prototype={
$0(){var s,r,q,p,o
try{q=A.h1()
throw A.d(q)}catch(p){s=A.U(p)
r=A.R(p)
q=s
o=r
if(o==null)o=A.er(q)
this.a.G(q,o)}},
$S:0}
A.cI.prototype={
$1(a){A.hQ(this.b,this.c,a)},
$S(){return A.t(this.a).l("~(1)")}}
A.aO.prototype={
gi(a){return(A.ak(this.a)^892482866)>>>0},
q(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.an&&b.a===this.a}}
A.bW.prototype={
aV(){return this.w.bH(this)},
ai(){},
aj(){}}
A.bU.prototype={
aD(a){this.a=A.eP(this.d,a)},
aq(){var s,r=this,q=r.e&=4294967279
if((q&8)===0){q=r.e=q|8
if((q&64)!==0){s=r.r
if(s.a===1)s.a=3}if((q&32)===0)r.r=null
r.f=r.aV()}q=$.dQ()
return q},
ai(){},
aj(){},
aV(){return null},
bx(a){var s,r,q=this,p=q.r
if(p==null)p=q.r=new A.c8()
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
A.aX.prototype={
aB(a,b,c,d){return this.a.bQ(a,d,c,!0)}}
A.c_.prototype={}
A.bZ.prototype={}
A.c8.prototype={
aL(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.fr(new A.dm(s,a))
s.a=1}}
A.dm.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.a
q.b=r
if(r==null)q.c=null
this.b.al(s.b)},
$S:0}
A.aQ.prototype={
bK(){var s=this
if((s.b&2)!==0)return
A.a0(null,null,s.a,s.gbL())
s.b|=2},
aD(a){},
aq(){return $.dQ()},
bM(){var s=this,r=s.b&=4294967293
if(r>=4)return
s.b=r|1
s.a.bf(s.c)}}
A.cc.prototype={}
A.dx.prototype={
$0(){return this.a.ab(this.b)},
$S:0}
A.du.prototype={}
A.dz.prototype={
$0(){A.h0(this.a,this.b)},
$S:0}
A.dn.prototype={
bf(a){var s,r,q
try{if(B.b===$.i){a.$0()
return}A.fb(null,null,this,a)}catch(q){s=A.U(q)
r=A.R(q)
A.dy(s,r)}},
c7(a,b){var s,r,q
try{if(B.b===$.i){a.$1(b)
return}A.fc(null,null,this,a,b)}catch(q){s=A.U(q)
r=A.R(q)
A.dy(s,r)}},
bg(a,b){return this.c7(a,b,t.z)},
b2(a){return new A.dp(this,a)},
b3(a,b){return new A.dq(this,a,b)},
c3(a){if($.i===B.b)return a.$0()
return A.fb(null,null,this,a)},
be(a){return this.c3(a,t.z)},
c6(a,b){if($.i===B.b)return a.$1(b)
return A.fc(null,null,this,a,b)},
aH(a,b){return this.c6(a,b,t.z,t.z)},
c5(a,b,c){if($.i===B.b)return a.$2(b,c)
return A.id(null,null,this,a,b,c)},
c4(a,b,c){return this.c5(a,b,c,t.z,t.z,t.z)},
c2(a){return a},
aG(a){return this.c2(a,t.z,t.z,t.z)}}
A.dp.prototype={
$0(){return this.a.bf(this.b)},
$S:0}
A.dq.prototype={
$1(a){return this.a.bg(this.b,a)},
$S(){return this.c.l("~(0)")}}
A.c5.prototype={
gt(a){var s=new A.aS(this,this.r)
s.c=this.e
return s},
gk(a){return this.a},
L(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.aM(s==null?q.b=A.e5():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.aM(r==null?q.c=A.e5():r,b)}else return q.bt(b)},
bt(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.e5()
s=J.H(a)&1073741823
r=p[s]
if(r==null)p[s]=[q.ah(a)]
else{if(q.bE(r,a)>=0)return!1
r.push(q.ah(a))}return!0},
aM(a,b){if(a[b]!=null)return!1
a[b]=this.ah(b)
return!0},
aU(){this.r=this.r+1&1073741823},
ah(a){var s,r=this,q=new A.dk(a)
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
for(r=0;r<s;++r)if(J.b8(a[r].a,b))return r
return-1}}
A.dk.prototype={}
A.aS.prototype={
gn(){var s=this.d
return s==null?A.t(this).c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.d(A.ad(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.a8.prototype={
gt(a){return new A.by(a,this.gk(a))},
D(a,b){return this.p(a,b)},
gb7(a){return this.gk(a)===0},
c9(a){var s,r,q,p,o=this
if(o.gb7(a)){s=J.ez(0)
return s}r=o.p(a,0)
q=A.cw(o.gk(a),r,!0)
for(p=1;p<o.gk(a);++p){s=o.p(a,p)
if(!(p<q.length))return A.e(q,p)
q[p]=s}return q},
h(a){return A.dV(a,"[","]")}}
A.bz.prototype={
gk(a){return this.a},
h(a){return A.dZ(this)}}
A.cx.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=A.f(a)
r.a=s+": "
r.a+=A.f(b)},
$S:17}
A.bK.prototype={
h(a){return A.dV(this,"{","}")},
D(a,b){var s,r,q
A.eF(b,"index")
s=A.eS(this,this.r)
for(r=b;s.m();){if(r===0){q=s.d
return q==null?A.t(s).c.a(q):q}--r}throw A.d(A.bq(b,b-r,this,"index"))}}
A.cb.prototype={}
A.bj.prototype={
q(a,b){if(b==null)return!1
return b instanceof A.bj&&this.a===b.a},
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
A.d3.prototype={
h(a){return this.aR()}}
A.k.prototype={
gU(){return A.R(this.$thrownJsError)}}
A.bd.prototype={
h(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.cp(s)
return"Assertion failed"}}
A.N.prototype={}
A.I.prototype={
gaf(){return"Invalid argument"+(!this.a?"(s)":"")},
gae(){return""},
h(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.gaf()+q+o
if(!s.a)return n
return n+s.gae()+": "+A.cp(s.gaA())},
gaA(){return this.b}}
A.aI.prototype={
gaA(){return this.b},
gaf(){return"RangeError"},
gae(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.f(q):""
else if(q==null)s=": Not greater than or equal to "+A.f(r)
else if(q>r)s=": Not in inclusive range "+A.f(r)+".."+A.f(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.f(r)
return s}}
A.bp.prototype={
gaA(){return this.b},
gaf(){return"RangeError"},
gae(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gk(a){return this.f}}
A.bO.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.bM.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.a9.prototype={
h(a){return"Bad state: "+this.a}}
A.bh.prototype={
h(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.cp(s)+"."}}
A.bE.prototype={
h(a){return"Out of Memory"},
gU(){return null},
$ik:1}
A.aJ.prototype={
h(a){return"Stack Overflow"},
gU(){return null},
$ik:1}
A.d6.prototype={
h(a){return"Exception: "+this.a}}
A.cs.prototype={
h(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=B.d.bm(q,0,75)+"..."
return r+"\n"+q}}
A.br.prototype={
gk(a){var s,r=this.gt(this)
for(s=0;r.m();)++s
return s},
D(a,b){var s,r
A.eF(b,"index")
s=this.gt(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.d(A.bq(b,b-r,this,"index"))},
h(a){return A.h2(this,"(",")")}}
A.n.prototype={
gi(a){return A.h.prototype.gi.call(this,this)},
h(a){return"null"}}
A.h.prototype={$ih:1,
q(a,b){return this===b},
gi(a){return A.ak(this)},
h(a){return"Instance of '"+A.cz(this)+"'"},
gF(a){return A.iy(this)},
toString(){return this.h(this)}}
A.cd.prototype={
h(a){return""},
$iz:1}
A.bL.prototype={
gk(a){return this.a.length},
h(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.c.prototype={}
A.ba.prototype={
h(a){return String(a)}}
A.bb.prototype={
h(a){return String(a)}}
A.bg.prototype={
gaC(a){return new A.p(a,"blur",!1,t.E)},
gaE(a){return new A.p(a,"focus",!1,t.E)}}
A.C.prototype={
gk(a){return a.length}}
A.ae.prototype={
a9(a,b){var s=$.fu(),r=s[b]
if(typeof r=="string")return r
r=this.bR(a,b)
s[b]=r
return r},
bR(a,b){var s
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
s=$.fw()+b
if(s in a)return s
return b},
am(a,b,c,d){a.setProperty(b,c,d)},
gk(a){return a.length}}
A.cn.prototype={}
A.co.prototype={
h(a){return String(a)}}
A.av.prototype={
h(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return"Rectangle ("+A.f(p)+", "+A.f(s)+") "+A.f(r)+" x "+A.f(q)},
q(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=J.a2(b)
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
return A.aH(p,s,r,q)},
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
$iM:1}
A.d1.prototype={
gb7(a){return this.a.firstElementChild==null},
gk(a){return this.b.length},
p(a,b){var s=this.b
if(!(b>=0&&b<s.length))return A.e(s,b)
return t.h.a(s[b])},
gt(a){var s=this.c9(this)
return new J.ac(s,s.length)},
M(a,b){A.hn(this.a,b)},
H(a){J.eo(this.a)}}
A.o.prototype={
gP(a){return new A.d1(a,a.children)},
sP(a,b){var s=b.slice(0),r=this.gP(a)
r.H(0)
r.M(0,s)},
h(a){return a.localName},
gaC(a){return new A.p(a,"blur",!1,t.E)},
gb8(a){return new A.p(a,"click",!1,t.R)},
gaE(a){return new A.p(a,"focus",!1,t.E)},
gb9(a){return new A.p(a,"keydown",!1,t.L)},
$io:1}
A.a.prototype={$ia:1}
A.bk.prototype={
bw(a,b,c,d){return a.addEventListener(b,A.as(c,1),!1)},
bI(a,b,c,d){return a.removeEventListener(b,A.as(c,1),!1)}}
A.bn.prototype={
gk(a){return a.length}}
A.a5.prototype={
gk(a){return a.length},
p(a,b){var s=a.length
if(b>>>0!==b||b>=s)throw A.d(A.bq(b,s,a,null))
return a[b]},
D(a,b){if(!(b>=0&&b<a.length))return A.e(a,b)
return a[b]},
$iV:1}
A.D.prototype={$iD:1}
A.r.prototype={
gbZ(a){var s,r,q,p,o
if(!!a.offsetX)return new A.ai(a.offsetX,a.offsetY,t.H)
else{s=a.target
r=t.h
if(!r.b(A.f4(s)))throw A.d(A.aK("offsetX is only supported on elements"))
q=r.a(A.f4(s))
s=a.clientX
r=a.clientY
p=q.getBoundingClientRect()
o=p.left
o.toString
p=p.top
p.toString
return new A.ai(B.c.bh(s-o),B.c.bh(r-p),t.H)}},
$ir:1}
A.bV.prototype={
gt(a){var s=this.a.childNodes
return new A.ax(s,s.length)},
gk(a){return this.a.childNodes.length},
p(a,b){var s=this.a.childNodes
if(!(b>=0&&b<s.length))return A.e(s,b)
return s[b]}}
A.j.prototype={
aP(a){var s
for(;s=a.firstChild,s!=null;)a.removeChild(s)},
h(a){var s=a.nodeValue
return s==null?this.bn(a):s},
$ij:1}
A.aF.prototype={
gk(a){return a.length},
p(a,b){var s=a.length
if(b>>>0!==b||b>=s)throw A.d(A.bq(b,s,a,null))
return a[b]},
D(a,b){if(!(b>=0&&b<a.length))return A.e(a,b)
return a[b]},
$iV:1}
A.bJ.prototype={
gk(a){return a.length}}
A.G.prototype={}
A.aL.prototype={
c_(a,b,c){var s=A.eQ(a.open(b,c))
return s}}
A.aP.prototype={
h(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return"Rectangle ("+A.f(p)+", "+A.f(s)+") "+A.f(r)+" x "+A.f(q)},
q(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=J.a2(b)
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
return A.aH(p,s,r,q)},
ga1(a){var s=a.height
s.toString
return s},
ga5(a){var s=a.width
s.toString
return s}}
A.dU.prototype={}
A.aR.prototype={
aB(a,b,c,d){return A.Y(this.a,this.b,a,!1)}}
A.p.prototype={}
A.c1.prototype={
aq(){var s=this
if(s.b==null)return $.dS()
s.b0()
s.d=s.b=null
return $.dS()},
aD(a){var s,r=this
if(r.b==null)throw A.d(A.hf("Subscription has been canceled."))
r.b0()
s=A.fg(new A.d5(a),t.B)
r.d=s
r.b_()},
b_(){var s,r=this.d,q=r!=null
if(q&&!0){s=this.b
s.toString
if(q)J.fN(s,this.c,r,!1)}},
b0(){var s,r=this.d
if(r!=null){s=this.b
s.toString
J.fO(s,this.c,r,!1)}}}
A.d4.prototype={
$1(a){return this.a.$1(a)},
$S:1}
A.d5.prototype={
$1(a){return this.a.$1(a)},
$S:1}
A.ay.prototype={
gt(a){return new A.ax(a,this.gk(a))}}
A.ax.prototype={
m(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.fM(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gn(){var s=this.d
return s==null?A.t(this).c.a(s):s}}
A.d2.prototype={}
A.bX.prototype={}
A.c3.prototype={}
A.c4.prototype={}
A.c6.prototype={}
A.c7.prototype={}
A.bl.prototype={
gag(){return new A.bA(new A.bP(this.b,new A.cq()),new A.cr())},
M(a,b){var s,r,q
for(s=b.length,r=this.b.a,q=0;q<b.length;b.length===s||(0,A.b7)(b),++q)r.appendChild(b[q])},
H(a){J.eo(this.b.a)},
gk(a){return J.cj(this.gag().a)},
p(a,b){var s=this.gag()
return s.b.$1(J.ep(s.a,b))},
gt(a){var s=A.eC(this.gag(),!1)
return new J.ac(s,s.length)}}
A.cq.prototype={
$1(a){return t.h.b(a)},
$S:18}
A.cr.prototype={
$1(a){return t.h.a(a)},
$S:19}
A.ai.prototype={
h(a){return"Point("+A.f(this.a)+", "+A.f(this.b)+")"},
q(a,b){if(b==null)return!1
return b instanceof A.ai&&this.a===b.a&&this.b===b.b},
gi(a){return A.eK(B.c.gi(this.a),B.c.gi(this.b),0)}}
A.ca.prototype={
gbd(a){return this.$ti.c.a(this.a+this.c)},
gb4(a){return this.$ti.c.a(this.b+this.d)},
h(a){var s=this
return"Rectangle ("+s.a+", "+s.b+") "+s.c+" x "+s.d},
q(a,b){var s,r,q,p,o=this
if(b==null)return!1
if(t.q.b(b)){s=o.a
r=J.a2(b)
if(s===r.ga2(b)){q=o.b
if(q===r.ga4(b)){p=o.$ti.c
s=p.a(s+o.c)===r.gbd(b)&&p.a(q+o.d)===r.gb4(b)}else s=!1}else s=!1}else s=!1
return s},
gi(a){var s=this,r=s.a,q=s.b,p=s.$ti.c
return A.eL(B.a.gi(r),B.a.gi(q),B.a.gi(p.a(r+s.c)),B.a.gi(p.a(q+s.d)),0)}}
A.M.prototype={
ga2(a){return this.a},
ga4(a){return this.b},
ga5(a){return this.c},
ga1(a){return this.d}}
A.b.prototype={
gP(a){return new A.bl(a,new A.bV(a))},
sP(a,b){this.aP(a)
new A.bl(a,new A.bV(a)).M(0,b)},
gaC(a){return new A.p(a,"blur",!1,t.E)},
gb8(a){return new A.p(a,"click",!1,t.R)},
gaE(a){return new A.p(a,"focus",!1,t.E)},
gb9(a){return new A.p(a,"keydown",!1,t.L)}}
A.au.prototype={
gi(a){var s=this.a,r=this.b
return A.aH(new A.B(s,r).$s,s,r,B.e)},
q(a,b){var s,r,q,p
if(b==null)return!1
if(b instanceof A.au){s=b.a
r=b.b
q=this.a
p=this.b
p=A.aH(new A.B(s,r).$s,s,r,B.e)===A.aH(new A.B(q,p).$s,q,p,B.e)
s=p}else s=!1
return s},
h(a){var s=this
return"("+s.a+" "+s.b+") => '"+s.c+"' "+s.d}}
A.af.prototype={}
A.ag.prototype={
h(a){var s=this
return"               row: "+s.a+"\n            column: "+s.b+"\n         character: '"+s.c+"'\n    characterColor: "+s.d+"\n\n          pixelRow: "+s.e+"\n       pixelColumn: "+s.f+"\n         pixelIsOn: "+s.r+"\n    "}}
A.aj.prototype={
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
A.E.prototype={
aR(){return"Mode."+this.b}}
A.bI.prototype={
bp(a,b,c,d,e,f,g){var s,r=this,q="fit-content",p=document
A.Y(p,"focus",new A.cB(r),!1)
A.Y(p,"blur",new A.cC(r),!1)
p=r.r
p.tabIndex=-1
s=p.style
s.display="block"
s=p.style
s.outline="none"
p.getContext("2d").imageSmoothingEnabled=!1
A.Y(p,"focus",new A.cD(r),!1)
A.Y(p,"blur",new A.cE(r),!1)
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
J.fR(b,[p])
r.H(0)},
a0(a,b){return new A.B(B.a.j(a,this.a),B.a.j(b,this.b))},
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
q=A.e1(r)
p=q.a
o=B.a.T(1,q.b)
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
K(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=this,j=a<0||a>=k.a||b<0||b>=k.b
if(j)return
s=k.a0(a,b)
j=s.a
r=s.b
q=A.e1(r)
p=q.a
o=B.a.T(1,q.b)
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
bb(a,b){var s=this.a0(b,a),r=s.a,q=A.e1(s.b),p=q.a,o=B.a.T(1,q.b),n=this.x
if(!(r>=0&&r<n.length))return A.e(n,r)
r=n[r]
if(!(p>=0&&p<r.length))return A.e(r,p)
return(r[p]&o)>>>0>0},
b5(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
if(b==null)b=A.e_(0,0,g.b,g.a,t.S)
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
l.push(B.a.T(h,o-i))}g=B.i.bU(l,0,new A.cA())
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
bk(a){var s,r,q,p,o,n,m,l,k=this,j=k.a
a=B.a.j(a,j)
for(s=j-a,r=k.x,q=r.length,p=0;p<s;++p){if(!(p<q))return A.e(r,p)
o=p+a
n=0
for(;m=r[p],n<m.length;++n){if(!(o<q))return A.e(r,o)
l=r[o]
if(!(n<l.length))return A.e(l,n)
m[n]=l[n]}}for(;p<j;++p){if(!(p<q))return A.e(r,p)
n=0
for(;o=r[p],n<o.length;++n)o[n]=0}k.aa()
j=k.w
r=j.getContext("2d")
r.save()
r.beginPath()
q=k.d
r.drawImage(k.r,0,-a*q)
r.fillStyle=k.f
j=j.width
j.toString
r.fillRect(0,s*q,j,a*q)
r.restore()
k.ad()},
S(a){var s=this.r,r=s.style
B.f.am(r,B.f.a9(r,"opacity"),"1.0","")
s.focus()},
N(a){var s=this.r,r=s.style
B.f.am(r,B.f.a9(r,"opacity"),"0.5","")
s.blur()}}
A.cB.prototype={
$1(a){this.a.y=!0},
$S:1}
A.cC.prototype={
$1(a){this.a.y=!1},
$S:1}
A.cD.prototype={
$1(a){this.a.S(0)},
$S:1}
A.cE.prototype={
$1(a){this.a.N(0)},
$S:1}
A.cA.prototype={
$2(a,b){return(a|b)>>>0},
$S:20}
A.al.prototype={
aR(){return"State."+this.b}}
A.cM.prototype={
bq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,a0,a1){var s,r,q=this,p=q.f
p.tabIndex=-1
s=J.a2(p)
r=s.gaE(p)
A.Y(r.a,r.b,new A.cN(q),!1)
r=s.gaC(p)
A.Y(r.a,r.b,new A.cO(q),!1)
r=s.gb9(p)
A.Y(r.a,r.b,new A.cP(q,l,new A.cT(),new A.cS(q)),!1)
p=s.gb8(p)
A.Y(p.a,p.b,new A.cQ(q,new A.cU(q),o),!1)
A.hh(new A.bj(3e5),new A.cR(q))
q.N(0)
q.H(0)},
gau(a){var s=this.w
return s.gau(s)},
gap(a){var s=this.w
return s.gap(s)},
ao(a,b){return new A.B(B.a.j(a,this.a),B.a.j(b,this.b))},
aT(){var s=this,r=s.x
s.CW.L(0,new A.au(r.c,r.d," ","white"))
s.b1()
s.cy=!1},
b1(){var s,r,q,p,o,n,m,l,k,j
for(s=this.CW,r=A.eS(s,s.r),q=this.w,p=this.cx,o=A.t(r).c;r.m();){n=r.d
if(n==null)n=o.a(n)
m=n.a
l=n.b
if(p.R(n.c)){k=p.p(0,n.c)
k.toString
j=k}else j=$.fB()
q.bc(n.d,j,new A.B(m*10,l*8))}if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.aU()}},
aJ(a,b){var s=this.ao(b,a),r=s.a,q=s.b,p=this.ch
if(!(r>=0&&r<p.length))return A.e(p,r)
r=p[r]
if(!(q>=0&&q<r.length))return A.e(r,q)
return r[q].c},
E(){var s,r=this.x
r.sO(0)
s=r.c
if(s===this.a-1)this.a6(0)
else r.c=B.a.j(s+1,r.a)},
a6(a){var s,r,q,p,o,n,m,l,k=this
for(s=k.a-1,r=k.b,q=k.ch,p=0;p<s;p=o)for(o=p+1,n=0;n<r;++n){m=q.length
if(!(p<m))return A.e(q,p)
l=q[p]
if(!(n<l.length))return A.e(l,n)
l=l[n]
if(!(o<m))return A.e(q,o)
m=q[o]
if(!(n<m.length))return A.e(m,n)
m=m[n]
l.c=m.c
l.d=m.d}for(n=0;n<r;++n){if(!(s>=0&&s<q.length))return A.e(q,s)
m=q[s]
if(!(n<m.length))return A.e(m,n)
m=m[n]
m.c=" "
m.d="white"}k.w.bk(10)},
a3(a,b,c,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a1==null?f.x.c:a1,d=f.ao(e,c==null?f.x.d:c)
e=f.x
s=e.a
e.c=B.a.j(d.a,s)
e.sO(d.b)
if(b==null)b="white"
for(r=a.split(""),q=r.length,p=f.ch,o=f.CW,n=f.a-1,m=f.b-1,l=0;l<q;++l){k=r[l]
j=e.c
i=e.d
if(!(j>=0&&j<p.length))return A.e(p,j)
h=p[j]
if(!(i>=0&&i<h.length))return A.e(h,i)
g=h[i]
g.c=k
g.d=b
o.L(0,g)
if(j===n&&i===m){f.a6(0)
e.c=B.a.j(e.c-1,s)}e.sO(e.d+1)}f.b1()
if(a0)f.E()},
c0(a,b,c){return this.a3(a,b,null,c,null)},
aF(a,b){return this.a3(a,null,null,b,null)},
I(a,b){return this.a3(a,b,null,!0,null)},
ba(a){return this.a3(a,null,null,!0,null)},
H(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=t.S,f=A.e_(0,0,h.b,h.a,g)
for(s=f.b,r=f.d,q=f.$ti.c,p=q.a(s+r),o=f.a,n=f.c,m=o+n,l=h.ch,k=s;k<p;++k)for(q.a(m),j=o;j<m;++j){if(!(k<l.length))return A.e(l,k)
i=l[k]
if(!(j<i.length))return A.e(i,j)
i=i[j]
i.c=" "
i.d="white"}h.w.b5(0,A.e_(o*8,s*10,n*8,r*10,g))
g=h.x
g.c=B.a.j(s,g.a)
g.sO(o)},
S(a){return this.gau(this).$0()},
N(a){return this.gap(this).$0()}}
A.cU.prototype={
$1(a){var s,r=this.a,q=r.w,p=J.fP(a),o=Math.max(Math.min(B.c.A(p.b-1,q.d),q.a-1),0),n=Math.max(Math.min(B.c.A(p.a-1,q.c),q.b-1),0),m=B.a.C(o,10),l=B.a.C(n,8),k=r.aJ(l,m),j=r.ao(m,l)
p=j.a
s=j.b
r=r.ch
if(!(p>=0&&p<r.length))return A.e(r,p)
p=r[p]
if(!(s>=0&&s<p.length))return A.e(p,s)
return new A.ag(m,l,k,p[s].d,o,n,q.bb(n,o))},
$S:21}
A.cT.prototype={
$1(a){a.keyCode
a.key
return new A.af()},
$S:22}
A.cS.prototype={
$0(){var s,r,q,p,o=this.a,n=o.a,m=o.b,l=new A.aj(n,m),k=o.y
l.su(0,k.gu(k))
k=[]
for(s=o.z,r=s.b;q=l.c,p=l.d,q*m+p<s.c*r+s.d;q=l.c*m+l.d+1,l.c=B.a.j(B.a.A(q,m),n),l.d=B.a.j(q,m))k.push(o.aJ(p,q))
return B.i.bX(k,"")},
$S:23}
A.cN.prototype={
$1(a){this.a.w.S(0)},
$S:1}
A.cO.prototype={
$1(a){this.a.w.N(0)},
$S:1}
A.cP.prototype={
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
if(r.d!=null){r.L(0,J.fS(this.d.$0()))
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
A.cQ.prototype={
$1(a){var s
a.preventDefault()
s=this.a
if(s.ay===B.p&&s.ax.d!=null){s.ax.L(0,this.b.$1(a))
s.ay=B.h}},
$S:25}
A.cR.prototype={
$1(a){var s,r,q,p=this.a,o=p.w
if(o.y&&document.activeElement===o.r&&p.ay===B.j)if(p.cy)p.aT()
else{s=p.x
r=s.c
s=s.d
q=$.fA()
o.bc("white",q,new A.B(r*10,s*8))
p.cy=!0}},
$S:26}
A.dN.prototype={
$0(){var s,r,q=this.a
q.H(0)
for(s=[" ","  _____ _   _    _____     _           _"," :     : :_: :  :   __:___: :_ ___ ___: :"," :  :  : : . :  :__   :  _:   : . : . : :"," :_____:_:___:  :_____:___:_:_:___:___:_:"," "," Welcome to Old School, a library for adding"," old school terminals to your html documents."," "," Input 'help' for help."," "],r=0;r<11;++r)q.I(s[r],"lightgreen")},
$S:0}
A.dJ.prototype={
$0(){var s,r,q
for(s=[" "," Commands"," --------"," "," reset        Resets this demo."," help         Shows this information."," list         Lists the demos available."," info [demo]  Gives a description of [demo]."," load [demo]  Loads [demo] into this page."," "],r=this.a,q=0;q<10;++q)r.I(s[q],"lightgreen")},
$S:0}
A.dL.prototype={
$0(){var s,r,q=[" "," Demos"," -----"," "],p=[]
for(s=this.a,s=A.h8(s,s.r);s.m();)p.push(" - "+s.d)
B.i.M(q,p)
q.push(" ")
p=q.length
s=this.b
r=0
for(;r<q.length;q.length===p||(0,A.b7)(q),++r)s.I(q[r],"lightgreen")},
$S:0}
A.dK.prototype={
$1(a){var s,r,q,p,o=this.a
if(o.R(a)){s=[" "]
r=[]
for(o=o.p(0,a),q=o.length,p=0;p<o.length;o.length===q||(0,A.b7)(o),++p)r.push(" "+o[p])
B.i.M(s,r)
s.push(" ")
o=s.length
r=this.b
p=0
for(;p<s.length;s.length===o||(0,A.b7)(s),++p)r.I(s[p],"lightgreen")}else{o=this.b
o.E()
o.I(" No demo called '"+a+"' found.","orange")
o.ba(" Input `list` to see available demos.")
o.E()}},
$S:6}
A.dM.prototype={
$1(a){var s
if(this.a.R(a))B.dQ.c_(window,a+".html","_self")
else{s=this.b
s.E()
s.I(" No demo called '"+a+"' found.","orange")
s.ba(" Input `list` to see available demos.")
s.E()}},
$S:6};(function aliases(){var s=J.az.prototype
s.bn=s.h
s=J.a7.prototype
s.bo=s.h})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_0i
s(A,"im","hj",3)
s(A,"io","hk",3)
s(A,"ip","hl",3)
r(A,"fi","ig",0)
s(A,"iq","ia",5)
q(A.l.prototype,"gaQ","G",14)
p(A.aQ.prototype,"gbL","bM",0)
var n
o(n=A.bI.prototype,"gau","S",0)
o(n,"gap","N",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.h,null)
q(A.h,[A.dX,J.az,J.ac,A.k,A.a4,A.cF,A.by,A.br,A.bB,A.bQ,A.bm,A.ap,A.bi,A.cW,A.cy,A.aw,A.aW,A.bz,A.cv,A.bx,A.ct,A.dl,A.y,A.c2,A.ce,A.aY,A.bR,A.bf,A.W,A.bU,A.bT,A.Z,A.l,A.bS,A.c_,A.c8,A.aQ,A.cc,A.du,A.bK,A.dk,A.aS,A.a8,A.bj,A.d3,A.bE,A.aJ,A.d6,A.cs,A.n,A.cd,A.bL,A.cn,A.dU,A.c1,A.ay,A.ax,A.d2,A.ai,A.ca,A.au,A.af,A.ag,A.aj,A.bI,A.cM])
q(J.az,[J.bs,J.aB,J.w,J.aC,J.a6])
q(J.w,[J.a7,J.K,A.bC,A.bk,A.bX,A.co,A.av,A.a,A.c3,A.c6])
q(J.a7,[J.bF,J.am,J.L])
r(J.cu,J.K)
q(J.aC,[J.aA,J.bt])
q(A.k,[A.bw,A.N,A.bv,A.bN,A.bY,A.bH,A.c0,A.bd,A.I,A.bO,A.bM,A.a9,A.bh])
q(A.a4,[A.cl,A.cm,A.cL,A.dE,A.dG,A.cZ,A.cY,A.dv,A.db,A.di,A.cJ,A.cI,A.dq,A.d4,A.d5,A.cq,A.cr,A.cB,A.cC,A.cD,A.cE,A.cU,A.cT,A.cN,A.cO,A.cP,A.cQ,A.cR,A.dK,A.dM])
q(A.cl,[A.dP,A.d_,A.d0,A.ds,A.dr,A.d7,A.de,A.dd,A.da,A.d9,A.d8,A.dh,A.dg,A.df,A.cK,A.cH,A.dm,A.dx,A.dz,A.dp,A.cS,A.dN,A.dJ,A.dL])
q(A.br,[A.bA,A.bP])
r(A.c9,A.ap)
r(A.B,A.c9)
r(A.bo,A.bi)
r(A.aG,A.N)
q(A.cL,[A.cG,A.at])
r(A.aD,A.bz)
r(A.bu,A.aD)
q(A.cm,[A.dF,A.dw,A.dA,A.dc,A.cx,A.cA])
r(A.ah,A.bC)
r(A.aT,A.ah)
r(A.aU,A.aT)
r(A.aE,A.aU)
r(A.bD,A.aE)
r(A.aZ,A.c0)
q(A.W,[A.aX,A.aR])
r(A.aO,A.aX)
r(A.an,A.aO)
r(A.bW,A.bU)
r(A.aN,A.bW)
r(A.aM,A.bT)
r(A.bZ,A.c_)
r(A.dn,A.du)
r(A.cb,A.bK)
r(A.c5,A.cb)
q(A.I,[A.aI,A.bp])
q(A.bk,[A.j,A.aL])
q(A.j,[A.o,A.C])
q(A.o,[A.c,A.b])
q(A.c,[A.ba,A.bb,A.bg,A.bn,A.bJ])
r(A.ae,A.bX)
q(A.a8,[A.d1,A.bV,A.bl])
r(A.c4,A.c3)
r(A.a5,A.c4)
r(A.G,A.a)
q(A.G,[A.D,A.r])
r(A.c7,A.c6)
r(A.aF,A.c7)
r(A.aP,A.av)
r(A.p,A.aR)
r(A.M,A.ca)
q(A.d3,[A.E,A.al])
s(A.aT,A.a8)
s(A.aU,A.bm)
s(A.bX,A.cn)
s(A.c3,A.a8)
s(A.c4,A.ay)
s(A.c6,A.a8)
s(A.c7,A.ay)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{v:"int",it:"double",T:"num",F:"String",ee:"bool",n:"Null",eB:"List"},mangledNames:{},types:["~()","~(a)","n()","~(~())","n(@)","~(@)","~(F)","J<n>()","@(@)","@(@,F)","@(F)","n(~())","n(@,z)","~(v,@)","~(h,z)","n(h,z)","l<@>(@)","~(h?,h?)","ee(j)","o(j)","v(v,v)","ag(r)","af(D)","F()","~(D)","~(r)","~(cV)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.B&&a.b(c.a)&&b.b(c.b)}}
A.hG(v.typeUniverse,JSON.parse('{"bF":"a7","am":"a7","L":"a7","iQ":"a","j1":"a","iP":"b","j4":"b","iR":"c","j8":"c","j5":"j","j0":"j","j9":"r","iT":"G","iS":"C","je":"C","j7":"o","j6":"a5","bs":{"A":[]},"aB":{"n":[],"A":[]},"aC":{"T":[]},"aA":{"v":[],"T":[],"A":[]},"bt":{"T":[],"A":[]},"a6":{"F":[],"A":[]},"bw":{"k":[]},"aG":{"N":[],"k":[]},"bv":{"k":[]},"bN":{"k":[]},"aW":{"z":[]},"bY":{"k":[]},"bH":{"k":[]},"ah":{"V":["1"]},"aE":{"V":["v"]},"bD":{"V":["v"],"A":[]},"c0":{"k":[]},"aZ":{"N":[],"k":[]},"l":{"J":["1"]},"aY":{"cV":[]},"bf":{"k":[]},"an":{"W":["1"]},"aM":{"bT":["1"]},"aO":{"W":["1"]},"aX":{"W":["1"]},"v":{"T":[]},"bd":{"k":[]},"N":{"k":[]},"I":{"k":[]},"aI":{"k":[]},"bp":{"k":[]},"bO":{"k":[]},"bM":{"k":[]},"a9":{"k":[]},"bh":{"k":[]},"bE":{"k":[]},"aJ":{"k":[]},"cd":{"z":[]},"o":{"j":[]},"D":{"a":[]},"r":{"a":[]},"c":{"o":[],"j":[]},"ba":{"o":[],"j":[]},"bb":{"o":[],"j":[]},"bg":{"o":[],"j":[]},"C":{"j":[]},"av":{"M":["T"]},"bn":{"o":[],"j":[]},"a5":{"V":["j"]},"aF":{"V":["j"]},"bJ":{"o":[],"j":[]},"G":{"a":[]},"aP":{"M":["T"]},"aR":{"W":["1"]},"p":{"aR":["1"],"W":["1"]},"M":{"ca":["1"]},"b":{"o":[],"j":[]}}'))
A.hF(v.typeUniverse,JSON.parse('{"K":1,"cu":1,"ac":1,"by":1,"bA":2,"bB":2,"bP":1,"bQ":1,"bm":1,"bi":2,"bo":2,"aD":2,"bx":1,"bu":2,"ah":1,"aO":1,"bW":1,"bU":1,"aX":1,"c_":1,"bZ":1,"c8":1,"aQ":1,"cc":1,"c5":1,"aS":1,"a8":1,"bz":2,"bK":1,"cb":1,"eB":1,"br":1,"c1":1,"ay":1,"ax":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.iv
return{h:s("o"),Q:s("k"),B:s("a"),Z:s("j2"),b:s("K<@>"),T:s("aB"),g:s("L"),p:s("V<@>"),V:s("af"),m:s("ag"),P:s("n"),K:s("h"),H:s("ai<T>"),I:s("ja"),F:s("+()"),q:s("M<T>"),l:s("z"),N:s("F"),D:s("cV"),r:s("A"),c:s("N"),o:s("am"),E:s("p<a>"),L:s("p<D>"),R:s("p<r>"),U:s("l<n>"),d:s("l<@>"),a:s("l<v>"),y:s("ee"),i:s("it"),z:s("@"),v:s("@(h)"),C:s("@(h,z)"),S:s("v"),A:s("0&*"),_:s("h*"),O:s("J<n>?"),X:s("h?"),n:s("T"),u:s("~(h)"),k:s("~(h,z)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.f=A.ae.prototype
B.z=J.az.prototype
B.i=J.K.prototype
B.a=J.aA.prototype
B.c=J.aC.prototype
B.d=J.a6.prototype
B.A=J.L.prototype
B.B=J.w.prototype
B.o=J.bF.prototype
B.k=J.am.prototype
B.dQ=A.aL.prototype
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

B.x=new A.bE()
B.e=new A.cF()
B.b=new A.dn()
B.y=new A.cd()
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
B.dF=new A.bo(["\u263a",B.a_,"\u263b",B.J,"\u2665",B.a0,"\u2666",B.a1,"\u2663",B.bN,"\u2660",B.cn,"\u2022",B.cy,"\u25d8",B.dD,"\u25cb",B.cJ,"\u25d9",B.dC,"\u2642",B.cU,"\u2640",B.d4,"\u266a",B.df,"\u266b",B.dr,"\u263c",B.V,"\u25ba",B.a2,"\u25c4",B.ad,"\u2195",B.ao,"\u203c",B.az,"\xb6",B.aK,"\xa7",B.aV,"\u25ac",B.b5,"\u21a8",B.Y,"\u2191",B.bg,"\u2193",B.br,"\u2192",B.bC,"\u2190",B.bO,"\u221f",B.bZ,"\u2194",B.M,"\u25b2",B.W,"\u25bc",B.K," ",B.c9,"!",B.cg,'"',B.ch,"#",B.ci,"$",B.cj,"%",B.ck,"&",B.cl,"'",B.cm,"(",B.co,")",B.cp,"*",B.N,"+",B.cq,",",B.cr,"-",B.cs,".",B.ct,"/",B.cu,"0",B.cv,"1",B.cw,"2",B.cx,"3",B.cz,"4",B.cA,"5",B.cB,"6",B.cC,"7",B.cD,"8",B.cE,"9",B.cF,":",B.cG,";",B.cH,"<",B.cI,"=",B.cK,">",B.cL,"?",B.cM,"@",B.cN,"A",B.cO,"B",B.cP,"C",B.cQ,"D",B.cR,"E",B.cS,"F",B.cT,"G",B.cV,"H",B.cW,"I",B.cX,"J",B.cY,"K",B.cZ,"L",B.d_,"M",B.d0,"N",B.d1,"O",B.d2,"P",B.d3,"Q",B.d5,"R",B.d6,"S",B.d7,"T",B.d8,"U",B.d9,"V",B.da,"W",B.db,"X",B.dc,"Y",B.dd,"Z",B.de,"[",B.dg,"\\",B.dh,"]",B.di,"^",B.dj,"_",B.Z,"`",B.dk,"a",B.dl,"b",B.dm,"c",B.dn,"d",B.dp,"e",B.dq,"f",B.ds,"g",B.dt,"h",B.du,"i",B.dv,"j",B.dw,"k",B.dx,"l",B.dy,"m",B.dz,"n",B.dA,"o",B.dB,"p",B.a3,"q",B.a4,"r",B.a5,"s",B.a6,"t",B.a7,"u",B.a8,"v",B.a9,"w",B.aa,"x",B.ab,"y",B.ac,"z",B.ae,"{",B.af,"|",B.ag,"}",B.ah,"~",B.ai,"\u2302",B.aj,"\xc7",B.ak,"\xfc",B.al,"\xe9",B.am,"\xe2",B.an,"\xe4",B.ap,"\xe0",B.aq,"\xe5",B.ar,"\xe7",B.as,"\xea",B.at,"\xeb",B.au,"\xe8",B.av,"\xef",B.aw,"\xee",B.ax,"\xec",B.ay,"\xc4",B.aA,"\xc5",B.aB,"\xc9",B.aC,"\xe6",B.aD,"\xc6",B.aE,"\xf4",B.aF,"\xf6",B.aG,"\xf2",B.aH,"\xfb",B.aI,"\xf9",B.aJ,"\xff",B.aL,"\xd6",B.aM,"\xdc",B.aN,"\xa2",B.aO,"\xa3",B.aP,"\xa5",B.aQ,"\u20a7",B.aR,"\u0192",B.aS,"\xe1",B.aT,"\xed",B.aU,"\xf3",B.aW,"\xfa",B.aX,"\xf1",B.aY,"\xd1",B.aZ,"\xaa",B.b_,"\xba",B.b0,"\xbf",B.b1,"\u2310",B.b2,"\xac",B.b3,"\xbd",B.b4,"\xbc",B.b6,"\xa1",B.b7,"\xab",B.b8,"\xbb",B.b9,"\u2591",B.ba,"\u2592",B.bb,"\u2593",B.bc,"\u2502",B.bd,"\u2524",B.be,"\u2561",B.bf,"\u2562",B.bh,"\u2556",B.bi,"\u2555",B.bj,"\u2563",B.bk,"\u2551",B.bl,"\u2557",B.bm,"\u255d",B.bn,"\u255c",B.bo,"\u255b",B.bp,"\u2510",B.bq,"\u2514",B.bs,"\u2534",B.C,"\u252c",B.D,"\u251c",B.bt,"\u2500",B.E,"\u253c",B.F,"\u255e",B.bu,"\u255f",B.bv,"\u255a",B.bw,"\u2554",B.bx,"\u2569",B.O,"\u2566",B.P,"\u2560",B.by,"\u2550",B.Q,"\u256c",B.R,"\u2567",B.S,"\u2568",B.G,"\u2564",B.T,"\u2565",B.H,"\u2559",B.bz,"\u2558",B.bA,"\u2552",B.bB,"\u2553",B.bD,"\u256b",B.I,"\u256a",B.U,"\u2518",B.bE,"\u250c",B.bF,"\u2588",B.dE,"\u2584",B.X,"\u258c",B.bG,"\u2590",B.bH,"\u2580",B.L,"\u03b1",B.bI,"\xdf",B.bJ,"\u0393",B.bK,"\u03c0",B.bL,"\u03a3",B.bM,"\u03c3",B.bP,"\xb5",B.bQ,"\u03c4",B.bR,"\u03a6",B.bS,"\u0398",B.bT,"\u03a9",B.bU,"\u03b4",B.bV,"\u221e",B.bW,"\u03c6",B.bX,"\u03b5",B.bY,"\u2229",B.c_,"\u2261",B.c0,"\xb1",B.c1,"\u2265",B.c2,"\u2264",B.c3,"\u2320",B.c4,"\u2321",B.c5,"\xf7",B.c6,"\u2248",B.c7,"\xb0",B.c8,"\u2219",B.ca,"\xb7",B.cb,"\u221a",B.cc,"\u207f",B.cd,"\xb2",B.ce,"\u25a0",B.cf])
B.n=new A.E("replace")
B.dG=new A.E("inverse")
B.dH=new A.E("over")
B.dI=new A.E("under")
B.dJ=new A.E("stain")
B.dK=new A.E("delete")
B.dL=new A.E("maskDestination")
B.dM=new A.E("maskSource")
B.h=new A.al("ready")
B.dN=new A.al("awaitingKey")
B.j=new A.al("awaitingString")
B.p=new A.al("awaitingMouseClick")
B.dO=A.fs("h")
B.dP=A.fs("jp")})();(function staticFields(){$.dj=null
$.x=[]
$.eD=null
$.eu=null
$.et=null
$.fn=null
$.fh=null
$.fq=null
$.dC=null
$.dH=null
$.eh=null
$.aV=[]
$.aq=null
$.b3=null
$.b4=null
$.eb=!1
$.i=B.b})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"iV","fv",()=>A.ix("_$dart_dartClosure"))
s($,"jJ","dS",()=>B.b.be(new A.dP()))
s($,"jf","fC",()=>A.O(A.cX({
toString:function(){return"$receiver$"}})))
s($,"jg","fD",()=>A.O(A.cX({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"jh","fE",()=>A.O(A.cX(null)))
s($,"ji","fF",()=>A.O(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"jl","fI",()=>A.O(A.cX(void 0)))
s($,"jm","fJ",()=>A.O(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"jk","fH",()=>A.O(A.eN(null)))
s($,"jj","fG",()=>A.O(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"jo","fL",()=>A.O(A.eN(void 0)))
s($,"jn","fK",()=>A.O(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"jq","en",()=>A.hi())
s($,"j3","dQ",()=>t.U.a($.dS()))
s($,"jG","dR",()=>A.ek(B.dO))
s($,"iU","fu",()=>({}))
s($,"iZ","em",()=>B.d.ar(A.dT(),"Opera",0))
s($,"iY","fy",()=>!$.em()&&B.d.ar(A.dT(),"Trident/",0))
s($,"iX","fx",()=>B.d.ar(A.dT(),"Firefox",0))
s($,"iW","fw",()=>"-"+$.fz()+"-")
s($,"j_","fz",()=>{if($.fx())var r="moz"
else if($.fy())r="ms"
else r=$.em()?"o":"webkit"
return r})
s($,"jd","fB",()=>A.cw(8,0,!1))
s($,"jc","fA",()=>A.cw(8,255,!1))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasRenderingContext2D:J.w,DOMError:J.w,MediaError:J.w,Navigator:J.w,NavigatorConcurrentHardware:J.w,NavigatorUserMediaError:J.w,OverconstrainedError:J.w,PositionError:J.w,GeolocationPositionError:J.w,ArrayBufferView:A.bC,Uint32Array:A.bD,HTMLAudioElement:A.c,HTMLBRElement:A.c,HTMLBaseElement:A.c,HTMLButtonElement:A.c,HTMLCanvasElement:A.c,HTMLContentElement:A.c,HTMLDListElement:A.c,HTMLDataElement:A.c,HTMLDataListElement:A.c,HTMLDetailsElement:A.c,HTMLDialogElement:A.c,HTMLDivElement:A.c,HTMLEmbedElement:A.c,HTMLFieldSetElement:A.c,HTMLHRElement:A.c,HTMLHeadElement:A.c,HTMLHeadingElement:A.c,HTMLHtmlElement:A.c,HTMLIFrameElement:A.c,HTMLImageElement:A.c,HTMLInputElement:A.c,HTMLLIElement:A.c,HTMLLabelElement:A.c,HTMLLegendElement:A.c,HTMLLinkElement:A.c,HTMLMapElement:A.c,HTMLMediaElement:A.c,HTMLMenuElement:A.c,HTMLMetaElement:A.c,HTMLMeterElement:A.c,HTMLModElement:A.c,HTMLOListElement:A.c,HTMLObjectElement:A.c,HTMLOptGroupElement:A.c,HTMLOptionElement:A.c,HTMLOutputElement:A.c,HTMLParagraphElement:A.c,HTMLParamElement:A.c,HTMLPictureElement:A.c,HTMLPreElement:A.c,HTMLProgressElement:A.c,HTMLQuoteElement:A.c,HTMLScriptElement:A.c,HTMLShadowElement:A.c,HTMLSlotElement:A.c,HTMLSourceElement:A.c,HTMLSpanElement:A.c,HTMLStyleElement:A.c,HTMLTableCaptionElement:A.c,HTMLTableCellElement:A.c,HTMLTableDataCellElement:A.c,HTMLTableHeaderCellElement:A.c,HTMLTableColElement:A.c,HTMLTableElement:A.c,HTMLTableRowElement:A.c,HTMLTableSectionElement:A.c,HTMLTemplateElement:A.c,HTMLTextAreaElement:A.c,HTMLTimeElement:A.c,HTMLTitleElement:A.c,HTMLTrackElement:A.c,HTMLUListElement:A.c,HTMLUnknownElement:A.c,HTMLVideoElement:A.c,HTMLDirectoryElement:A.c,HTMLFontElement:A.c,HTMLFrameElement:A.c,HTMLFrameSetElement:A.c,HTMLMarqueeElement:A.c,HTMLElement:A.c,HTMLAnchorElement:A.ba,HTMLAreaElement:A.bb,HTMLBodyElement:A.bg,CDATASection:A.C,CharacterData:A.C,Comment:A.C,ProcessingInstruction:A.C,Text:A.C,CSSStyleDeclaration:A.ae,MSStyleCSSProperties:A.ae,CSS2Properties:A.ae,DOMException:A.co,DOMRectReadOnly:A.av,MathMLElement:A.o,Element:A.o,AbortPaymentEvent:A.a,AnimationEvent:A.a,AnimationPlaybackEvent:A.a,ApplicationCacheErrorEvent:A.a,BackgroundFetchClickEvent:A.a,BackgroundFetchEvent:A.a,BackgroundFetchFailEvent:A.a,BackgroundFetchedEvent:A.a,BeforeInstallPromptEvent:A.a,BeforeUnloadEvent:A.a,BlobEvent:A.a,CanMakePaymentEvent:A.a,ClipboardEvent:A.a,CloseEvent:A.a,CustomEvent:A.a,DeviceMotionEvent:A.a,DeviceOrientationEvent:A.a,ErrorEvent:A.a,ExtendableEvent:A.a,ExtendableMessageEvent:A.a,FetchEvent:A.a,FontFaceSetLoadEvent:A.a,ForeignFetchEvent:A.a,GamepadEvent:A.a,HashChangeEvent:A.a,InstallEvent:A.a,MediaEncryptedEvent:A.a,MediaKeyMessageEvent:A.a,MediaQueryListEvent:A.a,MediaStreamEvent:A.a,MediaStreamTrackEvent:A.a,MessageEvent:A.a,MIDIConnectionEvent:A.a,MIDIMessageEvent:A.a,MutationEvent:A.a,NotificationEvent:A.a,PageTransitionEvent:A.a,PaymentRequestEvent:A.a,PaymentRequestUpdateEvent:A.a,PopStateEvent:A.a,PresentationConnectionAvailableEvent:A.a,PresentationConnectionCloseEvent:A.a,ProgressEvent:A.a,PromiseRejectionEvent:A.a,PushEvent:A.a,RTCDataChannelEvent:A.a,RTCDTMFToneChangeEvent:A.a,RTCPeerConnectionIceEvent:A.a,RTCTrackEvent:A.a,SecurityPolicyViolationEvent:A.a,SensorErrorEvent:A.a,SpeechRecognitionError:A.a,SpeechRecognitionEvent:A.a,SpeechSynthesisEvent:A.a,StorageEvent:A.a,SyncEvent:A.a,TrackEvent:A.a,TransitionEvent:A.a,WebKitTransitionEvent:A.a,VRDeviceEvent:A.a,VRDisplayEvent:A.a,VRSessionEvent:A.a,MojoInterfaceRequestEvent:A.a,ResourceProgressEvent:A.a,USBConnectionEvent:A.a,IDBVersionChangeEvent:A.a,AudioProcessingEvent:A.a,OfflineAudioCompletionEvent:A.a,WebGLContextEvent:A.a,Event:A.a,InputEvent:A.a,SubmitEvent:A.a,EventTarget:A.bk,HTMLFormElement:A.bn,HTMLCollection:A.a5,HTMLFormControlsCollection:A.a5,HTMLOptionsCollection:A.a5,KeyboardEvent:A.D,MouseEvent:A.r,DragEvent:A.r,PointerEvent:A.r,WheelEvent:A.r,Document:A.j,DocumentFragment:A.j,HTMLDocument:A.j,ShadowRoot:A.j,XMLDocument:A.j,Attr:A.j,DocumentType:A.j,Node:A.j,NodeList:A.aF,RadioNodeList:A.aF,HTMLSelectElement:A.bJ,CompositionEvent:A.G,FocusEvent:A.G,TextEvent:A.G,TouchEvent:A.G,UIEvent:A.G,Window:A.aL,DOMWindow:A.aL,ClientRect:A.aP,DOMRect:A.aP,SVGAElement:A.b,SVGAnimateElement:A.b,SVGAnimateMotionElement:A.b,SVGAnimateTransformElement:A.b,SVGAnimationElement:A.b,SVGCircleElement:A.b,SVGClipPathElement:A.b,SVGDefsElement:A.b,SVGDescElement:A.b,SVGDiscardElement:A.b,SVGEllipseElement:A.b,SVGFEBlendElement:A.b,SVGFEColorMatrixElement:A.b,SVGFEComponentTransferElement:A.b,SVGFECompositeElement:A.b,SVGFEConvolveMatrixElement:A.b,SVGFEDiffuseLightingElement:A.b,SVGFEDisplacementMapElement:A.b,SVGFEDistantLightElement:A.b,SVGFEFloodElement:A.b,SVGFEFuncAElement:A.b,SVGFEFuncBElement:A.b,SVGFEFuncGElement:A.b,SVGFEFuncRElement:A.b,SVGFEGaussianBlurElement:A.b,SVGFEImageElement:A.b,SVGFEMergeElement:A.b,SVGFEMergeNodeElement:A.b,SVGFEMorphologyElement:A.b,SVGFEOffsetElement:A.b,SVGFEPointLightElement:A.b,SVGFESpecularLightingElement:A.b,SVGFESpotLightElement:A.b,SVGFETileElement:A.b,SVGFETurbulenceElement:A.b,SVGFilterElement:A.b,SVGForeignObjectElement:A.b,SVGGElement:A.b,SVGGeometryElement:A.b,SVGGraphicsElement:A.b,SVGImageElement:A.b,SVGLineElement:A.b,SVGLinearGradientElement:A.b,SVGMarkerElement:A.b,SVGMaskElement:A.b,SVGMetadataElement:A.b,SVGPathElement:A.b,SVGPatternElement:A.b,SVGPolygonElement:A.b,SVGPolylineElement:A.b,SVGRadialGradientElement:A.b,SVGRectElement:A.b,SVGScriptElement:A.b,SVGSetElement:A.b,SVGStopElement:A.b,SVGStyleElement:A.b,SVGElement:A.b,SVGSVGElement:A.b,SVGSwitchElement:A.b,SVGSymbolElement:A.b,SVGTSpanElement:A.b,SVGTextContentElement:A.b,SVGTextElement:A.b,SVGTextPathElement:A.b,SVGTextPositioningElement:A.b,SVGTitleElement:A.b,SVGUseElement:A.b,SVGViewElement:A.b,SVGGradientElement:A.b,SVGComponentTransferFunctionElement:A.b,SVGFEDropShadowElement:A.b,SVGMPathElement:A.b})
hunkHelpers.setOrUpdateLeafTags({CanvasRenderingContext2D:true,DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,ArrayBufferView:false,Uint32Array:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DOMException:true,DOMRectReadOnly:false,MathMLElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,HTMLFormElement:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,KeyboardEvent:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,HTMLSelectElement:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,Window:true,DOMWindow:true,ClientRect:true,DOMRect:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true})
A.ah.$nativeSuperclassTag="ArrayBufferView"
A.aT.$nativeSuperclassTag="ArrayBufferView"
A.aU.$nativeSuperclassTag="ArrayBufferView"
A.aE.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=A.dI
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=index.js.map
