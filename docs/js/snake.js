(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinPropertiesHard(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q)){b[q]=a[q]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var s=function(){}
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
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++){inherit(b[s],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s){A.hE(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.ds(b)
return new s(c,this)}:function(){if(s===null)s=A.ds(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.ds(a).prototype
return s}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var s=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
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
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
dx(a,b,c,d){return{i:a,p:b,e:c,x:d}},
du(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.dv==null){A.hw()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.dS("Return interceptor for "+A.m(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.cD
if(o==null)o=$.cD=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.hA(a)
if(p!=null)return p
if(typeof a=="function")return B.L
s=Object.getPrototypeOf(a)
if(s==null)return B.x
if(s===Object.prototype)return B.x
if(typeof q=="function"){o=$.cD
if(o==null)o=$.cD=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.q,enumerable:false,writable:true,configurable:true})
return B.q}return B.q},
a_(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.au.prototype
return J.bi.prototype}if(typeof a=="string")return J.a5.prototype
if(a==null)return J.av.prototype
if(typeof a=="boolean")return J.bh.prototype
if(Array.isArray(a))return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.M.prototype
if(typeof a=="symbol")return J.ay.prototype
if(typeof a=="bigint")return J.aw.prototype
return a}if(a instanceof A.i)return a
return J.du(a)},
ek(a){if(typeof a=="string")return J.a5.prototype
if(a==null)return a
if(Array.isArray(a))return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.M.prototype
if(typeof a=="symbol")return J.ay.prototype
if(typeof a=="bigint")return J.aw.prototype
return a}if(a instanceof A.i)return a
return J.du(a)},
hq(a){if(a==null)return a
if(Array.isArray(a))return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.M.prototype
if(typeof a=="symbol")return J.ay.prototype
if(typeof a=="bigint")return J.aw.prototype
return a}if(a instanceof A.i)return a
return J.du(a)},
hr(a){if(typeof a=="number")return J.a4.prototype
if(a==null)return a
if(!(a instanceof A.i))return J.ae.prototype
return a},
T(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.a_(a).B(a,b)},
H(a){return J.a_(a).gk(a)},
eD(a){return J.hq(a).gt(a)},
dB(a){return J.ek(a).gm(a)},
eE(a){return J.a_(a).gl(a)},
dC(a){return J.hr(a).bu(a)},
b5(a){return J.a_(a).h(a)},
bg:function bg(){},
bh:function bh(){},
av:function av(){},
ax:function ax(){},
O:function O(){},
bv:function bv(){},
ae:function ae(){},
M:function M(){},
aw:function aw(){},
ay:function ay(){},
n:function n(a){this.$ti=a},
bS:function bS(a){this.$ti=a},
b6:function b6(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
a4:function a4(){},
au:function au(){},
bi:function bi(){},
a5:function a5(){}},A={d8:function d8(){},
eV(a){return new A.a6("Field '"+a+"' has not been initialized.")},
eU(a){return new A.a6("Field '"+a+"' has already been initialized.")},
Q(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
df(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
dO(a,b,c){return A.df(A.Q(A.Q(c,a),b))},
dr(a,b,c){return a},
dw(a){var s,r
for(s=$.x.length,r=0;r<s;++r)if(a===$.x[r])return!0
return!1},
d6(){return new A.by("No element")},
a6:function a6(a){this.a=a},
c2:function c2(){},
aq:function aq(){},
aB:function aB(){},
a7:function a7(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ar:function ar(a){this.$ti=a},
bd:function bd(){},
at:function at(){},
eq(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
i2(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.E.b(a)},
m(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.b5(a)
return s},
aI(a){var s,r=$.dK
if(r==null)r=$.dK=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
bX(a){var s,r,q,p
if(a instanceof A.i)return A.w(A.b4(a),null)
s=J.a_(a)
if(s===B.K||s===B.M||t.A.b(a)){r=B.u(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.w(A.b4(a),null)},
dL(a){if(a==null||typeof a=="number"||A.dn(a))return J.b5(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.U)return a.h(0)
if(a instanceof A.ai)return a.aB(!0)
return"Instance of '"+A.bX(a)+"'"},
eY(a){var s=a.$thrownJsError
if(s==null)return null
return A.a0(s)},
em(a){throw A.d(A.cS(a))},
c(a,b){if(a==null)J.dB(a)
throw A.d(A.ej(a,b))},
ej(a,b){var s,r="index",q=null
if(!A.e9(b))return new A.D(!0,b,r,q)
s=J.dB(a)
if(b<0||b>=s)return A.d5(b,s,a,q,r)
return new A.ac(q,q,!0,b,r,"Value not in range")},
cS(a){return new A.D(!0,a,null,null)},
d(a){return A.r(a,new Error())},
r(a,b){var s
if(a==null)a=new A.I()
b.dartException=a
s=A.hG
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
hG(){return J.b5(this.dartException)},
d_(a,b){throw A.r(a,b==null?new Error():b)},
d0(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.d_(A.fO(a,b,c),s)},
fO(a,b,c){var s,r,q,p,o,n,m,l,k
if(typeof b=="string")s=b
else{r="[]=;add;removeWhere;retainWhere;removeRange;setRange;setInt8;setInt16;setInt32;setUint8;setUint16;setUint32;setFloat32;setFloat64".split(";")
q=r.length
p=b
if(p>q){c=p/q|0
p%=q}s=r[p]}o=typeof c=="string"?c:"modify;remove from;add to".split(";")[c]
n=t.j.b(a)?"list":"ByteData"
m=a.$flags|0
l="a "
if((m&4)!==0)k="constant "
else if((m&2)!==0){k="unmodifiable "
l="an "}else k=(m&1)!==0?"fixed-length ":""
return new A.aM("'"+s+"': Cannot "+o+" "+l+k+n)},
dz(a){throw A.d(A.ba(a))},
J(a){var s,r,q,p,o,n
a=A.hD(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.a([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.ci(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
cj(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
dR(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
d9(a,b){var s=b==null,r=s?null:b.method
return new A.bj(a,r,s?null:b.receiver)},
an(a){if(a==null)return new A.bV(a)
if(a instanceof A.as)return A.S(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.S(a,a.dartException)
return A.hg(a)},
S(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
hg(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.a.b3(r,16)&8191)===10)switch(q){case 438:return A.S(a,A.d9(A.m(s)+" (Error "+q+")",null))
case 445:case 5007:A.m(s)
return A.S(a,new A.aH())}}if(a instanceof TypeError){p=$.et()
o=$.eu()
n=$.ev()
m=$.ew()
l=$.ez()
k=$.eA()
j=$.ey()
$.ex()
i=$.eC()
h=$.eB()
g=p.A(s)
if(g!=null)return A.S(a,A.d9(s,g))
else{g=o.A(s)
if(g!=null){g.method="call"
return A.S(a,A.d9(s,g))}else if(n.A(s)!=null||m.A(s)!=null||l.A(s)!=null||k.A(s)!=null||j.A(s)!=null||m.A(s)!=null||i.A(s)!=null||h.A(s)!=null)return A.S(a,new A.aH())}return A.S(a,new A.bB(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.aK()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.S(a,new A.D(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.aK()
return a},
a0(a){var s
if(a instanceof A.as)return a.b
if(a==null)return new A.aV(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.aV(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
dy(a){if(a==null)return J.H(a)
if(typeof a=="object")return A.aI(a)
return J.H(a)},
hl(a){if(typeof a=="number")return B.o.gk(a)
if(a instanceof A.bL)return A.aI(a)
if(a instanceof A.ai)return a.gk(a)
return A.dy(a)},
hp(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=a.length
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
if(m==null)o[q]=b.M(q,p)
else m.b=p}else if(typeof q=="number"&&(q&0x3fffffff)===q){l=b.c
if(l==null){n=Object.create(null)
n["<non-identifier-key>"]=n
delete n["<non-identifier-key>"]
b.c=n
l=n}m=l[q]
if(m==null)l[q]=b.M(q,p)
else m.b=p}else{k=b.d
if(k==null){n=Object.create(null)
n["<non-identifier-key>"]=n
delete n["<non-identifier-key>"]
b.d=n
k=n}j=b.ac(q)
i=k[j]
if(i==null)k[j]=[b.M(q,p)]
else{r=b.ad(i,q)
if(r>=0)i[r].b=p
else i.push(b.M(q,p))}}}return b},
fW(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(new A.cr("Unsupported number of arguments for wrapped closure"))},
bN(a,b){var s=a.$identity
if(!!s)return s
s=A.hm(a,b)
a.$identity=s
return s},
hm(a,b){var s
switch(b){case 0:s=a.$0
break
case 1:s=a.$1
break
case 2:s=a.$2
break
case 3:s=a.$3
break
case 4:s=a.$4
break
default:s=null}if(s!=null)return s.bind(a)
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.fW)},
eL(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.c7().constructor.prototype):Object.create(new A.ap(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.dI(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.eH(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.dI(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
eH(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.eF)}throw A.d("Error in functionType of tearoff")},
eI(a,b,c,d){var s=A.dH
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
dI(a,b,c,d){if(c)return A.eK(a,b,d)
return A.eI(b.length,d,a,b)},
eJ(a,b,c,d){var s=A.dH,r=A.eG
switch(b?-1:a){case 0:throw A.d(new A.bw("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
eK(a,b,c){var s,r
if($.dF==null)$.dF=A.dE("interceptor")
if($.dG==null)$.dG=A.dE("receiver")
s=b.length
r=A.eJ(s,c,a,b)
return r},
ds(a){return A.eL(a)},
eF(a,b){return A.b0(v.typeUniverse,A.b4(a.a),b)},
dH(a){return a.a},
eG(a){return a.b},
dE(a){var s,r,q,p=new A.ap("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.d(A.ao("Field name "+a+" not found.",null))},
hs(a){return v.getIsolateTag(a)},
hA(a){var s,r,q,p,o,n=$.el.$1(a),m=$.cU[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.cY[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.ef.$2(a,n)
if(q!=null){m=$.cU[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.cY[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.cZ(s)
$.cU[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.cY[n]=s
return s}if(p==="-"){o=A.cZ(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.eo(a,s)
if(p==="*")throw A.d(A.dS(n))
if(v.leafTags[n]===true){o=A.cZ(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.eo(a,s)},
eo(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.dx(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
cZ(a){return J.dx(a,!1,null,!!a.$iv)},
hC(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.cZ(s)
else return J.dx(s,c,null,null)},
hw(){if(!0===$.dv)return
$.dv=!0
A.hx()},
hx(){var s,r,q,p,o,n,m,l
$.cU=Object.create(null)
$.cY=Object.create(null)
A.hv()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.ep.$1(o)
if(n!=null){m=A.hC(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
hv(){var s,r,q,p,o,n,m=B.B()
m=A.al(B.C,A.al(B.D,A.al(B.v,A.al(B.v,A.al(B.E,A.al(B.F,A.al(B.G(B.u),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.el=new A.cV(p)
$.ef=new A.cW(o)
$.ep=new A.cX(n)},
al(a,b){return a(b)||b},
hn(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
hD(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
B:function B(a,b){this.a=a
this.b=b},
bb:function bb(){},
be:function be(a,b){this.a=a
this.$ti=b},
ci:function ci(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aH:function aH(){},
bj:function bj(a,b,c){this.a=a
this.b=b
this.c=c},
bB:function bB(a){this.a=a},
bV:function bV(a){this.a=a},
as:function as(a,b){this.a=a
this.b=b},
aV:function aV(a){this.a=a
this.b=null},
U:function U(){},
bO:function bO(){},
bP:function bP(){},
c8:function c8(){},
c7:function c7(){},
ap:function ap(a,b){this.a=a
this.b=b},
bw:function bw(a){this.a=a},
aA:function aA(){},
bT:function bT(a,b){this.a=a
this.b=b
this.c=null},
az:function az(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cV:function cV(a){this.a=a},
cW:function cW(a){this.a=a},
cX:function cX(a){this.a=a},
ai:function ai(){},
bI:function bI(){},
X(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.ej(b,a))},
bk:function bk(){},
aF:function aF(){},
bl:function bl(){},
a9:function a9(){},
aD:function aD(){},
aE:function aE(){},
bm:function bm(){},
bn:function bn(){},
bo:function bo(){},
bp:function bp(){},
bq:function bq(){},
br:function br(){},
bs:function bs(){},
aG:function aG(){},
bt:function bt(){},
aP:function aP(){},
aQ:function aQ(){},
aR:function aR(){},
aS:function aS(){},
dc(a,b){var s=b.c
return s==null?b.c=A.aZ(a,"a2",[b.x]):s},
dM(a){var s=a.w
if(s===6||s===7)return A.dM(a.x)
return s===11||s===12},
f1(a){return a.as},
dt(a){return A.cK(v.typeUniverse,a,!1)},
Y(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.Y(a1,s,a3,a4)
if(r===s)return a2
return A.e0(a1,r,!0)
case 7:s=a2.x
r=A.Y(a1,s,a3,a4)
if(r===s)return a2
return A.e_(a1,r,!0)
case 8:q=a2.y
p=A.ak(a1,q,a3,a4)
if(p===q)return a2
return A.aZ(a1,a2.x,p)
case 9:o=a2.x
n=A.Y(a1,o,a3,a4)
m=a2.y
l=A.ak(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.di(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.ak(a1,j,a3,a4)
if(i===j)return a2
return A.e1(a1,k,i)
case 11:h=a2.x
g=A.Y(a1,h,a3,a4)
f=a2.y
e=A.hd(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.dZ(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.ak(a1,d,a3,a4)
o=a2.x
n=A.Y(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.dj(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.d(A.b8("Attempted to substitute unexpected RTI kind "+a0))}},
ak(a,b,c,d){var s,r,q,p,o=b.length,n=A.cL(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.Y(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
he(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.cL(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.Y(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
hd(a,b,c,d){var s,r=b.a,q=A.ak(a,r,c,d),p=b.b,o=A.ak(a,p,c,d),n=b.c,m=A.he(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.bH()
s.a=q
s.b=o
s.c=m
return s},
a(a,b){a[v.arrayRti]=b
return a},
eh(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.hu(s)
return a.$S()}return null},
hy(a,b){var s
if(A.dM(b))if(a instanceof A.U){s=A.eh(a)
if(s!=null)return s}return A.b4(a)},
b4(a){if(a instanceof A.i)return A.dl(a)
if(Array.isArray(a))return A.dk(a)
return A.dm(J.a_(a))},
dk(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
dl(a){var s=a.$ti
return s!=null?s:A.dm(a)},
dm(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.fV(a,s)},
fV(a,b){var s=a instanceof A.U?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.fu(v.typeUniverse,s.name)
b.$ccache=r
return r},
hu(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.cK(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
ht(a){return A.Z(A.dl(a))},
dq(a){var s
if(a instanceof A.ai)return A.ho(a.$r,a.ar())
s=a instanceof A.U?A.eh(a):null
if(s!=null)return s
if(t.R.b(a))return J.eE(a).a
if(Array.isArray(a))return A.dk(a)
return A.b4(a)},
Z(a){var s=a.r
return s==null?a.r=new A.bL(a):s},
ho(a,b){var s,r,q=b,p=q.length
if(p===0)return t.F
if(0>=p)return A.c(q,0)
s=A.b0(v.typeUniverse,A.dq(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.c(q,r)
s=A.e2(v.typeUniverse,s,A.dq(q[r]))}return A.b0(v.typeUniverse,s,a)},
C(a){return A.Z(A.cK(v.typeUniverse,a,!1))},
fU(a){var s,r,q,p,o=this
if(o===t.K)return A.K(o,a,A.h0)
if(A.a1(o))return A.K(o,a,A.h4)
s=o.w
if(s===6)return A.K(o,a,A.fS)
if(s===1)return A.K(o,a,A.ea)
if(s===7)return A.K(o,a,A.fX)
if(o===t.S)r=A.e9
else if(o===t.i||o===t.H)r=A.h_
else if(o===t.N)r=A.h2
else r=o===t.y?A.dn:null
if(r!=null)return A.K(o,a,r)
if(s===8){q=o.x
if(o.y.every(A.a1)){o.f="$i"+q
if(q==="f")return A.K(o,a,A.fZ)
return A.K(o,a,A.h3)}}else if(s===10){p=A.hn(o.x,o.y)
return A.K(o,a,p==null?A.ea:p)}return A.K(o,a,A.fQ)},
K(a,b,c){a.b=c
return a.b(b)},
fT(a){var s=this,r=A.fP
if(A.a1(s))r=A.fH
else if(s===t.K)r=A.fE
else if(A.am(s))r=A.fR
if(s===t.S)r=A.fA
else if(s===t.M)r=A.fB
else if(s===t.N)r=A.fF
else if(s===t.x)r=A.fG
else if(s===t.y)r=A.fw
else if(s===t.u)r=A.fx
else if(s===t.H)r=A.fC
else if(s===t.Y)r=A.fD
else if(s===t.i)r=A.fy
else if(s===t.B)r=A.fz
s.a=r
return s.a(a)},
fQ(a){var s=this
if(a==null)return A.am(s)
return A.hz(v.typeUniverse,A.hy(a,s),s)},
fS(a){if(a==null)return!0
return this.x.b(a)},
h3(a){var s,r=this
if(a==null)return A.am(r)
s=r.f
if(a instanceof A.i)return!!a[s]
return!!J.a_(a)[s]},
fZ(a){var s,r=this
if(a==null)return A.am(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.i)return!!a[s]
return!!J.a_(a)[s]},
fP(a){var s=this
if(a==null){if(A.am(s))return a}else if(s.b(a))return a
throw A.r(A.e5(a,s),new Error())},
fR(a){var s=this
if(a==null||s.b(a))return a
throw A.r(A.e5(a,s),new Error())},
e5(a,b){return new A.aX("TypeError: "+A.dT(a,A.w(b,null)))},
dT(a,b){return A.bQ(a)+": type '"+A.w(A.dq(a),null)+"' is not a subtype of type '"+b+"'"},
G(a,b){return new A.aX("TypeError: "+A.dT(a,b))},
fX(a){var s=this
return s.x.b(a)||A.dc(v.typeUniverse,s).b(a)},
h0(a){return a!=null},
fE(a){if(a!=null)return a
throw A.r(A.G(a,"Object"),new Error())},
h4(a){return!0},
fH(a){return a},
ea(a){return!1},
dn(a){return!0===a||!1===a},
fw(a){if(!0===a)return!0
if(!1===a)return!1
throw A.r(A.G(a,"bool"),new Error())},
fx(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.r(A.G(a,"bool?"),new Error())},
fy(a){if(typeof a=="number")return a
throw A.r(A.G(a,"double"),new Error())},
fz(a){if(typeof a=="number")return a
if(a==null)return a
throw A.r(A.G(a,"double?"),new Error())},
e9(a){return typeof a=="number"&&Math.floor(a)===a},
fA(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.r(A.G(a,"int"),new Error())},
fB(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.r(A.G(a,"int?"),new Error())},
h_(a){return typeof a=="number"},
fC(a){if(typeof a=="number")return a
throw A.r(A.G(a,"num"),new Error())},
fD(a){if(typeof a=="number")return a
if(a==null)return a
throw A.r(A.G(a,"num?"),new Error())},
h2(a){return typeof a=="string"},
fF(a){if(typeof a=="string")return a
throw A.r(A.G(a,"String"),new Error())},
fG(a){if(typeof a=="string")return a
if(a==null)return a
throw A.r(A.G(a,"String?"),new Error())},
ed(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.w(a[q],b)
return s},
h8(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.ed(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.w(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
e6(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.a([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)a4.push("T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.c(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.w(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.w(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.w(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.w(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.w(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
w(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.w(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.w(a.x,b)+">"
if(l===8){p=A.hf(a.x)
o=a.y
return o.length>0?p+("<"+A.ed(o,b)+">"):p}if(l===10)return A.h8(a,b)
if(l===11)return A.e6(a,b,null)
if(l===12)return A.e6(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.c(b,n)
return b[n]}return"?"},
hf(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
fv(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
fu(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.cK(a,b,!1)
else if(typeof m=="number"){s=m
r=A.b_(a,5,"#")
q=A.cL(s)
for(p=0;p<s;++p)q[p]=r
o=A.aZ(a,b,q)
n[b]=o
return o}else return m},
ft(a,b){return A.e3(a.tR,b)},
fs(a,b){return A.e3(a.eT,b)},
cK(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.dX(A.dV(a,null,b,!1))
r.set(b,s)
return s},
b0(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.dX(A.dV(a,b,c,!0))
q.set(c,r)
return r},
e2(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.di(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
R(a,b){b.a=A.fT
b.b=A.fU
return b},
b_(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.y(null,null)
s.w=b
s.as=c
r=A.R(a,s)
a.eC.set(c,r)
return r},
e0(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.fq(a,b,r,c)
a.eC.set(r,s)
return s},
fq(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.a1(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.am(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.y(null,null)
q.w=6
q.x=b
q.as=c
return A.R(a,q)},
e_(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.fo(a,b,r,c)
a.eC.set(r,s)
return s},
fo(a,b,c,d){var s,r
if(d){s=b.w
if(A.a1(b)||b===t.K)return b
else if(s===1)return A.aZ(a,"a2",[b])
else if(b===t.P||b===t.T)return t.O}r=new A.y(null,null)
r.w=7
r.x=b
r.as=c
return A.R(a,r)},
fr(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.y(null,null)
s.w=13
s.x=b
s.as=q
r=A.R(a,s)
a.eC.set(q,r)
return r},
aY(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
fn(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
aZ(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.aY(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.y(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.R(a,r)
a.eC.set(p,q)
return q},
di(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.aY(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.y(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.R(a,o)
a.eC.set(q,n)
return n},
e1(a,b,c){var s,r,q="+"+(b+"("+A.aY(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.y(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.R(a,s)
a.eC.set(q,r)
return r},
dZ(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.aY(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.aY(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.fn(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.y(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.R(a,p)
a.eC.set(r,o)
return o},
dj(a,b,c,d){var s,r=b.as+("<"+A.aY(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.fp(a,b,c,r,d)
a.eC.set(r,s)
return s},
fp(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.cL(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.Y(a,b,r,0)
m=A.ak(a,c,r,0)
return A.dj(a,n,m,c!==m)}}l=new A.y(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.R(a,l)},
dV(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
dX(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.fg(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.dW(a,r,l,k,!1)
else if(q===46)r=A.dW(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.W(a.u,a.e,k.pop()))
break
case 94:k.push(A.fr(a.u,k.pop()))
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
case 62:A.fi(a,k)
break
case 38:A.fh(a,k)
break
case 63:p=a.u
k.push(A.e0(p,A.W(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.e_(p,A.W(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.ff(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.dY(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.fk(a.u,a.e,o)
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
return A.W(a.u,a.e,m)},
fg(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
dW(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.fv(s,o.x)[p]
if(n==null)A.d_('No "'+p+'" in "'+A.f1(o)+'"')
d.push(A.b0(s,o,n))}else d.push(p)
return m},
fi(a,b){var s,r=a.u,q=A.dU(a,b),p=b.pop()
if(typeof p=="string")b.push(A.aZ(r,p,q))
else{s=A.W(r,a.e,p)
switch(s.w){case 11:b.push(A.dj(r,s,q,a.n))
break
default:b.push(A.di(r,s,q))
break}}},
ff(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.dU(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.W(p,a.e,o)
q=new A.bH()
q.a=s
q.b=n
q.c=m
b.push(A.dZ(p,r,q))
return
case-4:b.push(A.e1(p,b.pop(),s))
return
default:throw A.d(A.b8("Unexpected state under `()`: "+A.m(o)))}},
fh(a,b){var s=b.pop()
if(0===s){b.push(A.b_(a.u,1,"0&"))
return}if(1===s){b.push(A.b_(a.u,4,"1&"))
return}throw A.d(A.b8("Unexpected extended operation "+A.m(s)))},
dU(a,b){var s=b.splice(a.p)
A.dY(a.u,a.e,s)
a.p=b.pop()
return s},
W(a,b,c){if(typeof c=="string")return A.aZ(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.fj(a,b,c)}else return c},
dY(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.W(a,b,c[s])},
fk(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.W(a,b,c[s])},
fj(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.d(A.b8("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.d(A.b8("Bad index "+c+" for "+b.h(0)))},
hz(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.p(a,b,null,c,null)
r.set(c,s)}return s},
p(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.a1(d))return!0
s=b.w
if(s===4)return!0
if(A.a1(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.p(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.p(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.p(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.p(a,b.x,c,d,e))return!1
return A.p(a,A.dc(a,b),c,d,e)}if(s===6)return A.p(a,p,c,d,e)&&A.p(a,b.x,c,d,e)
if(q===7){if(A.p(a,b,c,d.x,e))return!0
return A.p(a,b,c,A.dc(a,d),e)}if(q===6)return A.p(a,b,c,p,e)||A.p(a,b,c,d.x,e)
if(r)return!1
p=s!==11
if((!p||s===12)&&d===t.Z)return!0
o=s===10
if(o&&d===t.L)return!0
if(q===12){if(b===t.g)return!0
if(s!==12)return!1
n=b.y
m=d.y
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.p(a,j,c,i,e)||!A.p(a,i,e,j,c))return!1}return A.e8(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.e8(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.fY(a,b,c,d,e)}if(o&&q===10)return A.h1(a,b,c,d,e)
return!1},
e8(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.p(a3,a4.x,a5,a6.x,a7))return!1
s=a4.y
r=a6.y
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
if(!A.p(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.p(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.p(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.p(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
fY(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
for(;n!==m;){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.b0(a,b,r[o])
return A.e4(a,p,null,c,d.y,e)}return A.e4(a,b.y,null,c,d.y,e)},
e4(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.p(a,b[s],d,e[s],f))return!1
return!0},
h1(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.p(a,r[s],c,q[s],e))return!1
return!0},
am(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.a1(a))if(s!==6)r=s===7&&A.am(a.x)
return r},
a1(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
e3(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
cL(a){return a>0?new Array(a):v.typeUniverse.sEA},
y:function y(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
bH:function bH(){this.c=this.b=this.a=null},
bL:function bL(a){this.a=a},
bG:function bG(){},
aX:function aX(a){this.a=a},
f9(){var s,r,q
if(self.scheduleImmediate!=null)return A.hi()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.bN(new A.cn(s),1)).observe(r,{childList:true})
return new A.cm(s,r,q)}else if(self.setImmediate!=null)return A.hj()
return A.hk()},
fa(a){self.scheduleImmediate(A.bN(new A.co(a),0))},
fb(a){self.setImmediate(A.bN(new A.cp(a),0))},
fc(a){A.fl(0,a)},
dQ(a,b){var s=B.a.v(a.a,1000)
return A.fm(s,b)},
fl(a,b){var s=new A.aW()
s.aS(a,b)
return s},
fm(a,b){var s=new A.aW()
s.aT(a,b)
return s},
h6(a){return new A.bC(new A.u($.o,a.j("u<0>")),a.j("bC<0>"))},
fK(a,b){a.$2(0,null)
b.b=!0
return b.a},
i0(a,b){A.fL(a,b)},
fJ(a,b){var s,r=a==null?b.$ti.c.a(a):a
if(!b.b)b.a.aV(r)
else{s=b.a
if(b.$ti.j("a2<1>").b(r))s.an(r)
else s.ap(r)}},
fI(a,b){var s=A.an(a),r=A.a0(a),q=b.a
if(b.b)q.a1(new A.E(s,r))
else q.al(new A.E(s,r))},
fL(a,b){var s,r,q=new A.cN(b),p=new A.cO(b)
if(a instanceof A.u)a.aA(q,p,t.z)
else{s=t.z
if(a instanceof A.u)a.aL(q,p,s)
else{r=new A.u($.o,t.c)
r.a=8
r.c=a
r.aA(q,p,s)}}},
hh(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.o.aJ(new A.cR(s))},
d4(a){var s
if(t.Q.b(a)){s=a.gL()
if(s!=null)return s}return B.J},
dg(a,b,c){var s,r,q,p={},o=p.a=a
for(;s=o.a,(s&4)!==0;){o=o.c
p.a=o}if(o===b){s=A.f4()
b.al(new A.E(new A.D(!0,o,null,"Cannot complete a future with itself"),s))
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.aw(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.R()
b.N(p.a)
A.ag(b,q)
return}b.a^=2
A.bM(null,null,b.b,new A.cv(p,b))},
ag(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;!0;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){f=f.c
A.cP(f.a,f.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.ag(g.a,f)
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
if(r){A.cP(m.a,m.b)
return}j=$.o
if(j!==k)$.o=k
else j=null
f=f.c
if((f&15)===8)new A.cz(s,g,p).$0()
else if(q){if((f&1)!==0)new A.cy(s,m).$0()}else if((f&2)!==0)new A.cx(g,s).$0()
if(j!=null)$.o=j
f=s.c
if(f instanceof A.u){r=s.a.$ti
r=r.j("a2<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.S(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.dg(f,i,!0)
return}}i=s.a.b
h=i.c
i.c=null
b=i.S(h)
f=s.b
r=s.c
if(!f){i.a=8
i.c=r}else{i.a=i.a&1|16
i.c=r}g.a=i
f=i}},
h9(a,b){if(t.C.b(a))return b.aJ(a)
if(t.v.b(a))return a
throw A.d(A.dD(a,"onError",u.c))},
h7(){var s,r
for(s=$.aj;s!=null;s=$.aj){$.b3=null
r=s.b
$.aj=r
if(r==null)$.b2=null
s.a.$0()}},
hc(){$.dp=!0
try{A.h7()}finally{$.b3=null
$.dp=!1
if($.aj!=null)$.dA().$1(A.eg())}},
ee(a){var s=new A.bE(a),r=$.b2
if(r==null){$.aj=$.b2=s
if(!$.dp)$.dA().$1(A.eg())}else $.b2=r.b=s},
hb(a){var s,r,q,p=$.aj
if(p==null){A.ee(a)
$.b3=$.b2
return}s=new A.bE(a)
r=$.b3
if(r==null){s.b=p
$.aj=$.b3=s}else{q=r.b
s.b=q
$.b3=r.b=s
if(q==null)$.b2=s}},
hN(a){A.dr(a,"stream",t.K)
return new A.bJ()},
de(a){return new A.bD(null,a.j("bD<0>"))},
dP(a,b){var s=$.o
if(s===B.b)return A.dQ(a,b)
return A.dQ(a,s.b5(b,t.J))},
cP(a,b){A.hb(new A.cQ(a,b))},
eb(a,b,c,d){var s,r=$.o
if(r===c)return d.$0()
$.o=c
s=r
try{r=d.$0()
return r}finally{$.o=s}},
ec(a,b,c,d,e){var s,r=$.o
if(r===c)return d.$1(e)
$.o=c
s=r
try{r=d.$1(e)
return r}finally{$.o=s}},
ha(a,b,c,d,e,f){var s,r=$.o
if(r===c)return d.$2(e,f)
$.o=c
s=r
try{r=d.$2(e,f)
return r}finally{$.o=s}},
bM(a,b,c,d){if(B.b!==c)d=c.b4(d)
A.ee(d)},
cn:function cn(a){this.a=a},
cm:function cm(a,b,c){this.a=a
this.b=b
this.c=c},
co:function co(a){this.a=a},
cp:function cp(a){this.a=a},
aW:function aW(){this.c=0},
cJ:function cJ(a,b){this.a=a
this.b=b},
cI:function cI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bC:function bC(a,b){this.a=a
this.b=!1
this.$ti=b},
cN:function cN(a){this.a=a},
cO:function cO(a){this.a=a},
cR:function cR(a){this.a=a},
E:function E(a,b){this.a=a
this.b=b},
bF:function bF(){},
bD:function bD(a,b){var _=this
_.b=a
_.c=0
_.e=_.d=null
_.$ti=b},
af:function af(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
u:function u(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
cs:function cs(a,b){this.a=a
this.b=b},
cw:function cw(a,b){this.a=a
this.b=b},
cv:function cv(a,b){this.a=a
this.b=b},
cu:function cu(a,b){this.a=a
this.b=b},
ct:function ct(a,b){this.a=a
this.b=b},
cz:function cz(a,b,c){this.a=a
this.b=b
this.c=c},
cA:function cA(a,b){this.a=a
this.b=b},
cB:function cB(a){this.a=a},
cy:function cy(a,b){this.a=a
this.b=b},
cx:function cx(a,b){this.a=a
this.b=b},
bE:function bE(a){this.a=a
this.b=null},
bJ:function bJ(){},
cM:function cM(){},
cQ:function cQ(a,b){this.a=a
this.b=b},
cF:function cF(){},
cG:function cG(a,b){this.a=a
this.b=b},
cH:function cH(a,b,c){this.a=a
this.b=b
this.c=c},
eW(a){return new A.aO(a.j("aO<0>"))},
dh(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
fe(a,b,c){var s=new A.ah(a,b,c.j("ah<0>"))
s.c=a.e
return s},
db(a){var s,r
if(A.dw(a))return"{...}"
s=new A.bz("")
try{r={}
$.x.push(a)
s.a+="{"
r.a=!0
a.ab(0,new A.bU(r,s))
s.a+="}"}finally{if(0>=$.x.length)return A.c($.x,-1)
$.x.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
aO:function aO(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cE:function cE(a){this.a=a
this.c=this.b=null},
ah:function ah(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
l:function l(){},
aC:function aC(){},
bU:function bU(a,b){this.a=a
this.b=b},
aJ:function aJ(){},
aU:function aU(){},
eM(a,b){a=A.r(a,new Error())
a.stack=b.h(0)
throw a},
da(a,b,c){var s,r,q
if(a>4294967295)A.d_(A.f_(a,0,4294967295,"length",null))
s=A.a(new Array(a),c.j("n<0>"))
s.$flags=1
r=s
if(a!==0)for(s=r.length,q=0;q<s;++q)r[q]=b
return r},
eX(a,b,c){var s,r,q=A.a([],c.j("n<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.dz)(a),++r)q.push(a[r])
q.$flags=1
return q},
dN(a,b,c){var s=J.eD(b)
if(!s.n())return a
if(c.length===0){do a+=A.m(s.gp())
while(s.n())}else{a+=A.m(s.gp())
for(;s.n();)a=a+c+A.m(s.gp())}return a},
f4(){return A.a0(new Error())},
dJ(a){return new A.bc(1000*a)},
bQ(a){if(typeof a=="number"||A.dn(a)||a==null)return J.b5(a)
if(typeof a=="string")return JSON.stringify(a)
return A.dL(a)},
eN(a,b){A.dr(a,"error",t.K)
A.dr(b,"stackTrace",t.l)
A.eM(a,b)},
b8(a){return new A.b7(a)},
ao(a,b){return new A.D(!1,null,b,a)},
dD(a,b,c){return new A.D(!0,a,b,c)},
eZ(a){var s=null
return new A.ac(s,s,!1,s,s,a)},
f_(a,b,c,d,e){return new A.ac(b,c,!0,a,d,"Invalid value")},
f0(a,b){return a},
d5(a,b,c,d,e){return new A.bf(b,!0,a,e,"Index out of range")},
cl(a){return new A.aM(a)},
dS(a){return new A.bA(a)},
ba(a){return new A.b9(a)},
bR(a,b){if(a<=0)return new A.ar(b.j("ar<0>"))
if(!b.j("0(b)").b(A.ei()))throw A.d(A.ao("Generator must be supplied or element type must allow integers","generator"))
return new A.aN(a,A.ei(),b.j("aN<0>"))},
eT(a,b,c){var s,r
if(A.dw(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.a([],t.s)
$.x.push(a)
try{A.h5(a,s)}finally{if(0>=$.x.length)return A.c($.x,-1)
$.x.pop()}r=A.dN(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
d7(a,b,c){var s,r
if(A.dw(a))return b+"..."+c
s=new A.bz(b)
$.x.push(a)
try{r=s
r.a=A.dN(r.a,a,", ")}finally{if(0>=$.x.length)return A.c($.x,-1)
$.x.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
fd(a){return a},
h5(a,b){var s,r,q,p,o,n,m,l=a.gt(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.n())return
s=A.m(l.gp())
b.push(s)
k+=s.length+2;++j}if(!l.n()){if(j<=5)return
if(0>=b.length)return A.c(b,-1)
r=b.pop()
if(0>=b.length)return A.c(b,-1)
q=b.pop()}else{p=l.gp();++j
if(!l.n()){if(j<=4){b.push(A.m(p))
return}r=A.m(p)
if(0>=b.length)return A.c(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gp();++j
for(;l.n();p=o,o=n){n=l.gp();++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return A.c(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=A.m(p)
r=A.m(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.c(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
bW(a,b,c,d){var s
if(B.e===c)return A.dO(B.a.gk(a),J.H(b),$.d2())
if(B.e===d){s=B.a.gk(a)
b=J.H(b)
c=J.H(c)
return A.df(A.Q(A.Q(A.Q($.d2(),s),b),c))}s=B.a.gk(a)
b=J.H(b)
c=J.H(c)
d=J.H(d)
d=A.df(A.Q(A.Q(A.Q(A.Q($.d2(),s),b),c),d))
return d},
bc:function bc(a){this.a=a},
cq:function cq(){},
j:function j(){},
b7:function b7(a){this.a=a},
I:function I(){},
D:function D(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ac:function ac(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bf:function bf(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
aM:function aM(a){this.a=a},
bA:function bA(a){this.a=a},
by:function by(a){this.a=a},
b9:function b9(a){this.a=a},
bu:function bu(){},
aK:function aK(){},
cr:function cr(a){this.a=a},
V:function V(){},
aN:function aN(a,b,c){this.a=a
this.b=b
this.$ti=c},
t:function t(){},
i:function i(){},
bK:function bK(){},
bz:function bz(a){this.a=a},
cC:function cC(){},
aa:function aa(a,b,c){this.a=a
this.b=b
this.$ti=c},
L:function L(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
N:function N(a){this.a=a},
a8:function a8(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ab:function ab(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=0},
f2(a,b,c,d,e,f,g,h){var s,r,q=v.G,p=q.document.createElement("canvas"),o=h*g
p.width=o
s=d*f
p.height=s
r=q.document.createElement("canvas")
r.width=o
r.height=s
s=A.a([],t.w)
for(q=A.bR(d,t.z),q=q.gt(q);q.n();){q.gp()
o=B.a.v(h,32)
s.push(new Uint32Array(o+1))}q=new A.bx(!0,d,h,g,f,c,a,p,r,s)
q.aP(a,b,c,d,!0,f,g,h)
return q},
dd(a){return new A.B(B.a.v(a,32),31-B.a.i(a,32))},
bx:function bx(a,b,c,d,e,f,g,h,i,j){var _=this
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
bZ:function bZ(a){this.a=a},
c_:function c_(a){this.a=a},
c0:function c0(a){this.a=a},
c1:function c1(a){this.a=a},
bY:function bY(){},
F:function F(a){this.b=a},
f5(a,b,c,d,e,f,g){var s,r,q,p,o="white",n=null,m=A.f2("black",b,o,e*(8+d),!0,2,2,a*8),l=A.a([],t.G)
for(s=t.V,r=0;r<e;++r){q=A.a([],s)
for(p=0;p<a;++p)q.push(new A.L(r,p," ",o))
l.push(q)}m=new A.aL(e,a,d,b,!0,m,new A.ab(e,a),new A.ab(e,a),new A.ab(e,a),!1,A.de(t.N),A.de(t.W),A.de(t.q),B.y,l,A.eW(t.o),B.dQ)
m.aR("black",a,b,o,n,!0,2,2,d,e,!1,g,n,n,n,n,n)
return m},
ad:function ad(a){this.b=a},
aL:function aL(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
cg:function cg(a){this.a=a},
cf:function cf(){},
ce:function ce(a){this.a=a},
c9:function c9(a){this.a=a},
ca:function ca(a){this.a=a},
cb:function cb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cc:function cc(a,b,c){this.a=a
this.b=b
this.c=c},
cd:function cd(a){this.a=a},
f3(a,b,c){var s,r,q,p,o,n=A.a([],t.U),m=A.a([],t.I)
for(s=t.z,r=A.bR(a,s),r=r.gt(r),q=t.p;r.n();){r.gp()
p=A.a([],q)
for(o=A.bR(b,s),o=o.gt(o);o.n();){o.gp()
p.push(B.c)}m.push(p)}n=new A.c3(a,b,n,m,B.l)
n.aQ(a,b,c)
return n},
hB(){var s=v.G.document.getElementById("snake")
s.toString
return A.f3(30,30,s)},
A:function A(a){this.b=a},
a3:function a3(a){this.b=a},
c3:function c3(a,b,c,d,e){var _=this
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
c4:function c4(a){this.a=a},
c6:function c6(a){this.a=a},
c5:function c5(a){this.a=a},
hE(a){throw A.r(new A.a6("Field '"+a+"' has been assigned during initialization."),new Error())},
h(){throw A.r(A.eV(""),new Error())},
hF(){throw A.r(A.eU(""),new Error())},
b1(a){var s
if(typeof a=="function")throw A.d(A.ao("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.fM,a)
s[$.d1()]=a
return s},
e7(a){var s
if(typeof a=="function")throw A.d(A.ao("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.fN,a)
s[$.d1()]=a
return s},
fM(a){return a.$0()},
fN(a,b,c){if(c>=1)return a.$1(b)
return a.$0()}},B={}
var w=[A,J,B]
var $={}
A.d8.prototype={}
J.bg.prototype={
B(a,b){return a===b},
gk(a){return A.aI(a)},
h(a){return"Instance of '"+A.bX(a)+"'"},
gl(a){return A.Z(A.dm(this))}}
J.bh.prototype={
h(a){return String(a)},
gk(a){return a?519018:218159},
gl(a){return A.Z(t.y)},
$ie:1}
J.av.prototype={
B(a,b){return null==b},
h(a){return"null"},
gk(a){return 0},
$ie:1}
J.ax.prototype={$ik:1}
J.O.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.bv.prototype={}
J.ae.prototype={}
J.M.prototype={
h(a){var s=a[$.d1()]
if(s==null)return this.aO(a)
return"JavaScript function for "+J.b5(s)}}
J.aw.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.ay.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.n.prototype={
bk(a,b){var s
a.$flags&1&&A.d0(a,"remove",1)
for(s=0;s<a.length;++s)if(J.T(a[s],b)){a.splice(s,1)
return!0}return!1},
bc(a,b){var s,r,q=a.length,p=A.da(q,"",t.N)
for(s=0;s<a.length;++s){r=A.m(a[s])
if(!(s<q))return A.c(p,s)
p[s]=r}return p.join(b)},
b7(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw A.d(A.ba(a))}return s},
b8(a,b,c){c.toString
return this.b7(a,b,c,t.z)},
gaE(a){if(a.length>0)return a[0]
throw A.d(A.d6())},
gbd(a){var s=a.length
if(s>0)return a[s-1]
throw A.d(A.d6())},
b6(a,b){var s
for(s=0;s<a.length;++s)if(J.T(a[s],b))return!0
return!1},
h(a){return A.d7(a,"[","]")},
gt(a){return new J.b6(a,a.length,A.dk(a).j("b6<1>"))},
gk(a){return A.aI(a)},
gm(a){return a.length},
$if:1}
J.bS.prototype={}
J.b6.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
n(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.d(A.dz(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.a4.prototype={
bu(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.d(A.cl(""+a+".toInt()"))},
h(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gk(a){var s,r,q,p,o=a|0
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
D(a,b){if((a|0)===a)if(b>=1)return a/b|0
return this.az(a,b)},
v(a,b){return(a|0)===a?a/b|0:this.az(a,b)},
az(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.cl("Result of truncating division is "+A.m(s)+": "+A.m(a)+" ~/ "+b))},
K(a,b){if(b<0)throw A.d(A.cS(b))
return b>31?0:a<<b>>>0},
b2(a,b){return b>31?0:a<<b>>>0},
aN(a,b){var s
if(b<0)throw A.d(A.cS(b))
if(a>0)s=this.a5(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
b3(a,b){var s
if(a>0)s=this.a5(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
C(a,b){if(0>b)throw A.d(A.cS(b))
return this.a5(a,b)},
a5(a,b){return b>31?0:a>>>b},
gl(a){return A.Z(t.H)},
$iq:1}
J.au.prototype={
gl(a){return A.Z(t.S)},
$ie:1,
$ib:1}
J.bi.prototype={
gl(a){return A.Z(t.i)},
$ie:1}
J.a5.prototype={
a_(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.H)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
bh(a,b,c){var s=b-a.length
if(s<=0)return a
return this.a_(c,s)+a},
h(a){return a},
gk(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gl(a){return A.Z(t.N)},
gm(a){return a.length},
$ie:1,
$iz:1}
A.a6.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.c2.prototype={}
A.aq.prototype={}
A.aB.prototype={
gt(a){var s=this
return new A.a7(s,s.gm(s),A.dl(s).j("a7<1>"))}}
A.a7.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
n(){var s,r=this,q=r.a,p=J.ek(q),o=p.gm(q)
if(r.b!==o)throw A.d(A.ba(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.a9(q,s);++r.c
return!0}}
A.ar.prototype={
gt(a){return B.A},
gm(a){return 0}}
A.bd.prototype={
n(){return!1},
gp(){throw A.d(A.d6())}}
A.at.prototype={}
A.B.prototype={$r:"+(1,2)",$s:1}
A.bb.prototype={
h(a){return A.db(this)}}
A.be.prototype={
P(){var s=this,r=s.$map
if(r==null){r=new A.az(s.$ti.j("az<1,2>"))
A.hp(s.a,r)
s.$map=r}return r},
a8(a){return this.P().a8(a)},
q(a,b){return this.P().q(0,b)},
ab(a,b){this.P().ab(0,b)},
gm(a){return this.P().a}}
A.ci.prototype={
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
A.aH.prototype={
h(a){return"Null check operator used on a null value"}}
A.bj.prototype={
h(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.bB.prototype={
h(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.bV.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.as.prototype={}
A.aV.prototype={
h(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iP:1}
A.U.prototype={
h(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.eq(r==null?"unknown":r)+"'"},
gbv(){return this},
$C:"$1",
$R:1,
$D:null}
A.bO.prototype={$C:"$0",$R:0}
A.bP.prototype={$C:"$2",$R:2}
A.c8.prototype={}
A.c7.prototype={
h(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.eq(s)+"'"}}
A.ap.prototype={
B(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.ap))return!1
return this.$_target===b.$_target&&this.a===b.a},
gk(a){return(A.dy(this.a)^A.aI(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.bX(this.a)+"'")}}
A.bw.prototype={
h(a){return"RuntimeError: "+this.a}}
A.aA.prototype={
gm(a){return this.a},
a8(a){var s=this.b
if(s==null)return!1
return s[a]!=null},
q(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.bb(b)},
bb(a){var s,r,q=this.d
if(q==null)return null
s=q[this.ac(a)]
r=this.ad(s,a)
if(r<0)return null
return s[r].b},
ab(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw A.d(A.ba(s))
r=r.c}},
M(a,b){var s=this,r=new A.bT(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&1073741823
return r},
ac(a){return J.H(a)&1073741823},
ad(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.T(a[r].a,b))return r
return-1},
h(a){return A.db(this)}}
A.bT.prototype={}
A.az.prototype={
ac(a){return A.hl(a)&1073741823},
ad(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.T(a[r].a,b))return r
return-1}}
A.cV.prototype={
$1(a){return this.a(a)},
$S:6}
A.cW.prototype={
$2(a,b){return this.a(a,b)},
$S:7}
A.cX.prototype={
$1(a){return this.a(a)},
$S:8}
A.ai.prototype={
h(a){return this.aB(!1)},
aB(a){var s,r,q,p,o,n=this.aZ(),m=this.ar(),l=(a?""+"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.c(m,q)
o=m[q]
l=a?l+A.dL(o):l+A.m(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
aZ(){var s,r=this.$s
for(;$.aT.length<=r;)$.aT.push(null)
s=$.aT[r]
if(s==null){s=this.aY()
if(!(r<$.aT.length))return A.c($.aT,r)
$.aT[r]=s}return s},
aY(){var s,r,q,p,o,n=this.$r,m=n.indexOf("("),l=n.substring(1,m),k=n.substring(m),j=k==="()"?0:k.replace(/[^,]/g,"").length+1,i=A.a(new Array(j),t.f)
for(s=0;s<j;++s)i[s]=s
if(l!==""){r=l.split(",")
s=r.length
for(q=i.length,p=j;s>0;){--p;--s
o=r[s]
if(!(p>=0&&p<q))return A.c(i,p)
i[p]=o}}i=A.eX(i,!1,t.K)
i.$flags=3
return i}}
A.bI.prototype={
ar(){return[this.a,this.b]},
B(a,b){if(b==null)return!1
return b instanceof A.bI&&this.$s===b.$s&&J.T(this.a,b.a)&&J.T(this.b,b.b)},
gk(a){return A.bW(this.$s,this.a,this.b,B.e)}}
A.bk.prototype={
gl(a){return B.e_},
$ie:1}
A.aF.prototype={}
A.bl.prototype={
gl(a){return B.e0},
$ie:1}
A.a9.prototype={
gm(a){return a.length},
$iv:1}
A.aD.prototype={
q(a,b){A.X(b,a,a.length)
return a[b]},
$if:1}
A.aE.prototype={$if:1}
A.bm.prototype={
gl(a){return B.e1},
$ie:1}
A.bn.prototype={
gl(a){return B.e2},
$ie:1}
A.bo.prototype={
gl(a){return B.e3},
q(a,b){A.X(b,a,a.length)
return a[b]},
$ie:1}
A.bp.prototype={
gl(a){return B.e4},
q(a,b){A.X(b,a,a.length)
return a[b]},
$ie:1}
A.bq.prototype={
gl(a){return B.e5},
q(a,b){A.X(b,a,a.length)
return a[b]},
$ie:1}
A.br.prototype={
gl(a){return B.e7},
q(a,b){A.X(b,a,a.length)
return a[b]},
$ie:1}
A.bs.prototype={
gl(a){return B.e8},
q(a,b){A.X(b,a,a.length)
return a[b]},
$ie:1,
$ick:1}
A.aG.prototype={
gl(a){return B.e9},
gm(a){return a.length},
q(a,b){A.X(b,a,a.length)
return a[b]},
$ie:1}
A.bt.prototype={
gl(a){return B.ea},
gm(a){return a.length},
q(a,b){A.X(b,a,a.length)
return a[b]},
$ie:1}
A.aP.prototype={}
A.aQ.prototype={}
A.aR.prototype={}
A.aS.prototype={}
A.y.prototype={
j(a){return A.b0(v.typeUniverse,this,a)},
am(a){return A.e2(v.typeUniverse,this,a)}}
A.bH.prototype={}
A.bL.prototype={
h(a){return A.w(this.a,null)}}
A.bG.prototype={
h(a){return this.a}}
A.aX.prototype={$iI:1}
A.cn.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:3}
A.cm.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:9}
A.co.prototype={
$0(){this.a.$0()},
$S:1}
A.cp.prototype={
$0(){this.a.$0()},
$S:1}
A.aW.prototype={
aS(a,b){if(self.setTimeout!=null)self.setTimeout(A.bN(new A.cJ(this,b),0),a)
else throw A.d(A.cl("`setTimeout()` not found."))},
aT(a,b){if(self.setTimeout!=null)self.setInterval(A.bN(new A.cI(this,a,Date.now(),b),0),a)
else throw A.d(A.cl("Periodic timer."))},
$ich:1}
A.cJ.prototype={
$0(){this.a.c=1
this.b.$0()},
$S:0}
A.cI.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.a.D(s,o)}q.c=p
r.d.$1(q)},
$S:1}
A.bC.prototype={}
A.cN.prototype={
$1(a){return this.a.$2(0,a)},
$S:10}
A.cO.prototype={
$2(a,b){this.a.$2(1,new A.as(a,b))},
$S:11}
A.cR.prototype={
$2(a,b){this.a(a,b)},
$S:12}
A.E.prototype={
h(a){return A.m(this.a)},
$ij:1,
gL(){return this.b}}
A.bF.prototype={}
A.bD.prototype={}
A.af.prototype={
be(a){if((this.c&15)!==6)return!0
return this.b.b.ah(this.d,a.a)},
b9(a){var s,r=this.e,q=null,p=a.a,o=this.b.b
if(t.C.b(r))q=o.bn(r,p,a.b)
else q=o.ah(r,p)
try{p=q
return p}catch(s){if(t._.b(A.an(s))){if((this.c&1)!==0)throw A.d(A.ao("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.ao("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.u.prototype={
aL(a,b,c){var s,r=$.o
if(r===B.b){if(!t.C.b(b)&&!t.v.b(b))throw A.d(A.dD(b,"onError",u.c))}else b=A.h9(b,r)
s=new A.u(r,c.j("u<0>"))
this.a0(new A.af(s,3,a,b,this.$ti.j("@<1>").am(c).j("af<1,2>")))
return s},
aA(a,b,c){var s=new A.u($.o,c.j("u<0>"))
this.a0(new A.af(s,19,a,b,this.$ti.j("@<1>").am(c).j("af<1,2>")))
return s},
b1(a){this.a=this.a&1|16
this.c=a},
N(a){this.a=a.a&30|this.a&1
this.c=a.c},
a0(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.a0(a)
return}s.N(r)}A.bM(null,null,s.b,new A.cs(s,a))}},
aw(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.aw(a)
return}n.N(s)}m.a=n.S(a)
A.bM(null,null,n.b,new A.cw(m,n))}},
R(){var s=this.c
this.c=null
return this.S(s)},
S(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
ap(a){var s=this,r=s.R()
s.a=8
s.c=a
A.ag(s,r)},
aX(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.R()
q.N(a)
A.ag(q,r)},
a1(a){var s=this.R()
this.b1(a)
A.ag(this,s)},
aV(a){if(this.$ti.j("a2<1>").b(a)){this.an(a)
return}this.aW(a)},
aW(a){this.a^=2
A.bM(null,null,this.b,new A.cu(this,a))},
an(a){A.dg(a,this,!1)
return},
al(a){this.a^=2
A.bM(null,null,this.b,new A.ct(this,a))},
$ia2:1}
A.cs.prototype={
$0(){A.ag(this.a,this.b)},
$S:0}
A.cw.prototype={
$0(){A.ag(this.b,this.a.a)},
$S:0}
A.cv.prototype={
$0(){A.dg(this.a.a,this.b,!0)},
$S:0}
A.cu.prototype={
$0(){this.a.ap(this.b)},
$S:0}
A.ct.prototype={
$0(){this.a.a1(this.b)},
$S:0}
A.cz.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.bl(q.d)}catch(p){s=A.an(p)
r=A.a0(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.d4(q)
n=k.a
n.c=new A.E(q,o)
q=n}q.b=!0
return}if(j instanceof A.u&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.u){m=k.b.a
l=new A.u(m.b,m.$ti)
j.aL(new A.cA(l,m),new A.cB(l),t.n)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.cA.prototype={
$1(a){this.a.aX(this.b)},
$S:3}
A.cB.prototype={
$2(a,b){this.a.a1(new A.E(a,b))},
$S:13}
A.cy.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
q.c=p.b.b.ah(p.d,this.b)}catch(o){s=A.an(o)
r=A.a0(o)
q=s
p=r
if(p==null)p=A.d4(q)
n=this.a
n.c=new A.E(q,p)
n.b=!0}},
$S:0}
A.cx.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.be(s)&&p.a.e!=null){p.c=p.a.b9(s)
p.b=!1}}catch(o){r=A.an(o)
q=A.a0(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.d4(p)
m=l.b
m.c=new A.E(p,n)
p=m}p.b=!0}},
$S:0}
A.bE.prototype={}
A.bJ.prototype={}
A.cM.prototype={}
A.cQ.prototype={
$0(){A.eN(this.a,this.b)},
$S:0}
A.cF.prototype={
bp(a){var s,r,q
try{if(B.b===$.o){a.$0()
return}A.eb(null,null,this,a)}catch(q){s=A.an(q)
r=A.a0(q)
A.cP(s,r)}},
br(a,b){var s,r,q
try{if(B.b===$.o){a.$1(b)
return}A.ec(null,null,this,a,b)}catch(q){s=A.an(q)
r=A.a0(q)
A.cP(s,r)}},
bs(a,b){a.toString
return this.br(a,b,t.z)},
b4(a){return new A.cG(this,a)},
b5(a,b){return new A.cH(this,a,b)},
bm(a){if($.o===B.b)return a.$0()
return A.eb(null,null,this,a)},
bl(a){a.toString
return this.bm(a,t.z)},
bq(a,b){if($.o===B.b)return a.$1(b)
return A.ec(null,null,this,a,b)},
ah(a,b){var s=t.z
a.toString
return this.bq(a,b,s,s)},
bo(a,b,c){if($.o===B.b)return a.$2(b,c)
return A.ha(null,null,this,a,b,c)},
bn(a,b,c){var s=t.z
a.toString
return this.bo(a,b,c,s,s,s)},
bj(a){return a},
aJ(a){var s=t.z
a.toString
return this.bj(a,s,s,s)}}
A.cG.prototype={
$0(){return this.a.bp(this.b)},
$S:0}
A.cH.prototype={
$1(a){return this.a.bs(this.b,a)},
$S(){return this.c.j("~(0)")}}
A.aO.prototype={
gt(a){var s=this,r=new A.ah(s,s.r,s.$ti.j("ah<1>"))
r.c=s.e
return r},
gm(a){return this.a},
V(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.ak(s==null?q.b=A.dh():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.ak(r==null?q.c=A.dh():r,b)}else return q.aU(b)},
aU(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.dh()
s=J.H(a)&1073741823
r=p[s]
if(r==null)p[s]=[q.a4(a)]
else{if(q.b_(r,a)>=0)return!1
r.push(q.a4(a))}return!0},
ak(a,b){if(a[b]!=null)return!1
a[b]=this.a4(b)
return!0},
av(){this.r=this.r+1&1073741823},
a4(a){var s,r=this,q=new A.cE(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.av()
return q},
b_(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.T(a[r].a,b))return r
return-1}}
A.cE.prototype={}
A.ah.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
n(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.d(A.ba(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.l.prototype={
gt(a){return new A.a7(a,this.gm(a),A.b4(a).j("a7<l.E>"))},
a9(a,b){return this.q(a,b)},
h(a){return A.d7(a,"[","]")}}
A.aC.prototype={
gm(a){return this.a},
h(a){return A.db(this)}}
A.bU.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.m(a)
r.a=(r.a+=s)+": "
s=A.m(b)
r.a+=s},
$S:14}
A.aJ.prototype={
h(a){return A.d7(this,"{","}")}}
A.aU.prototype={}
A.bc.prototype={
B(a,b){if(b==null)return!1
return b instanceof A.bc&&this.a===b.a},
gk(a){return B.a.gk(this.a)},
h(a){var s,r,q,p,o=this.a,n=B.a.v(o,36e8)
o%=36e8
s=B.a.v(o,6e7)
o%=6e7
r=s<10?"0":""
q=B.a.v(o,1e6)
p=q<10?"0":""
return""+n+":"+r+s+":"+p+q+"."+B.p.bh(B.a.h(o%1e6),6,"0")}}
A.cq.prototype={
h(a){return this.O()}}
A.j.prototype={
gL(){return A.eY(this)}}
A.b7.prototype={
h(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.bQ(s)
return"Assertion failed"}}
A.I.prototype={}
A.D.prototype={
ga3(){return"Invalid argument"+(!this.a?"(s)":"")},
ga2(){return""},
h(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.ga3()+q+o
if(!s.a)return n
return n+s.ga2()+": "+A.bQ(s.gae())},
gae(){return this.b}}
A.ac.prototype={
gae(){return this.b},
ga3(){return"RangeError"},
ga2(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.m(q):""
else if(q==null)s=": Not greater than or equal to "+A.m(r)
else if(q>r)s=": Not in inclusive range "+A.m(r)+".."+A.m(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.m(r)
return s}}
A.bf.prototype={
gae(){return this.b},
ga3(){return"RangeError"},
ga2(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gm(a){return this.f}}
A.aM.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.bA.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.by.prototype={
h(a){return"Bad state: "+this.a}}
A.b9.prototype={
h(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.bQ(s)+"."}}
A.bu.prototype={
h(a){return"Out of Memory"},
gL(){return null},
$ij:1}
A.aK.prototype={
h(a){return"Stack Overflow"},
gL(){return null},
$ij:1}
A.cr.prototype={
h(a){return"Exception: "+this.a}}
A.V.prototype={
gm(a){var s,r=this.gt(this)
for(s=0;r.n();)++s
return s},
a9(a,b){var s,r
A.f0(b,"index")
s=this.gt(this)
for(r=b;s.n();){if(r===0)return s.gp();--r}throw A.d(A.d5(b,b-r,this,null,"index"))},
h(a){return A.eT(this,"(",")")}}
A.aN.prototype={
a9(a,b){var s=this.a
if(b>=s)A.d_(A.d5(b,s,this,null,"index"))
return this.b.$1(b)},
gm(a){return this.a}}
A.t.prototype={
gk(a){return A.i.prototype.gk.call(this,0)},
h(a){return"null"}}
A.i.prototype={$ii:1,
B(a,b){return this===b},
gk(a){return A.aI(this)},
h(a){return"Instance of '"+A.bX(this)+"'"},
gl(a){return A.ht(this)},
toString(){return this.h(this)}}
A.bK.prototype={
h(a){return""},
$iP:1}
A.bz.prototype={
gm(a){return this.a.length},
h(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.cC.prototype={
J(a){if(a<=0||a>4294967296)throw A.d(A.eZ("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
A.aa.prototype={
h(a){return"Point("+this.a+", "+this.b+")"},
B(a,b){if(b==null)return!1
return b instanceof A.aa&&this.a===b.a&&this.b===b.b},
gk(a){return A.dO(B.a.gk(this.a),B.a.gk(this.b),0)}}
A.L.prototype={
gk(a){var s=this.a,r=this.b
return A.bW(new A.B(s,r).$s,s,r,B.e)},
B(a,b){var s,r,q,p
if(b==null)return!1
if(b instanceof A.L){s=b.a
r=b.b
q=this.a
p=this.b
p=A.bW(new A.B(s,r).$s,s,r,B.e)===A.bW(new A.B(q,p).$s,q,p,B.e)
s=p}else s=!1
return s},
h(a){var s=this
return"("+s.a+" "+s.b+") => '"+s.c+"' "+s.d}}
A.N.prototype={}
A.a8.prototype={
h(a){var s=this
return"               row: "+s.a+"\n            column: "+s.b+"\n         character: '"+s.c+"'\n    characterColor: "+s.d+"\n\n          pixelRow: "+s.e+"\n       pixelColumn: "+s.f+"\n         pixelIsOn: "+s.r+"\n    "}}
A.ab.prototype={
sX(a){var s,r,q,p=this
if(a<0){s=p.d=a
for(r=p.b,q=p.a;s<0;){s+=r
p.d=s
p.c=B.a.i(p.c-1,q)}}else{s=p.b
p.c=B.a.i(p.c+B.a.D(a,s),p.a)
p.d=B.a.i(a,s)}},
gu(){return this.c*this.b+this.d},
su(a){var s=this,r=s.b
s.c=B.a.i(B.a.D(a,r),s.a)
s.d=B.a.i(a,r)}}
A.bx.prototype={
aP(a,b,c,d,e,f,g,h){var s,r=this,q=v.G.document
q.onfocus=A.b1(new A.bZ(r))
q.onblur=A.b1(new A.c_(r))
q=r.w
q.tabIndex=-1
q.style.display="block"
q.style.outline="none"
s=q.getContext("2d")
if(s==null)s=t.m.a(s)
s.imageSmoothingEnabled=!1
q.onfocus=A.b1(new A.c0(r))
q.onblur=A.b1(new A.c1(r))
b.style.display="flex"
b.style.alignItems="flex-start"
b.style.padding="0"
b.style.margin="0"
b.style.width="fit-content"
b.style.height="fit-content"
b.style.background="gray"
b.appendChild(q)
r.W(0)},
T(a,b){return new A.B(B.a.i(a,this.b),B.a.i(b,this.c))},
ao(){var s=this.x,r=s.getContext("2d")
if(r==null)r=t.m.a(r)
r.save()
r.beginPath()
r.clearRect(0,0,s.width,s.height)
r.restore()
return r},
aq(){var s=this.w.getContext("2d")
if(s==null)s=t.m.a(s)
s.save()
s.beginPath()
s.drawImage(this.x,0,0)
s.restore()
return s},
F(a,b,c,d){var s,r,q,p,o,n,m=this,l=a<0||a>=m.b||b<0||b>=m.c
if(l)return
s=m.T(a,b)
a=s.a
b=s.b
r=A.dd(b)
q=r.a
p=B.a.K(1,r.b)
l=m.y
if(!(a>=0&&a<l.length))return A.c(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.c(l,q)
o=l[q]
l.$flags&2&&A.d0(l)
l[q]=(o|p)>>>0
l[q]=(l[q]^p)>>>0
l=c.getContext("2d")
if(l==null)l=t.m.a(l)
l.save()
l.beginPath()
l.fillStyle=m.r
o=m.d
n=m.e
l.fillRect(b*o,a*n,o,n)
l.restore()},
G(a,b,c,d,e){var s,r,q,p,o,n,m=this,l=a<0||a>=m.b||b<0||b>=m.c
if(l)return
s=m.T(a,b)
a=s.a
b=s.b
r=A.dd(b)
q=r.a
p=B.a.K(1,r.b)
l=m.y
if(!(a>=0&&a<l.length))return A.c(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.c(l,q)
o=l[q]
l.$flags&2&&A.d0(l)
l[q]=(o|p)>>>0
o=d.getContext("2d")
l=o==null?t.m.a(o):o
l.save()
l.beginPath()
l.fillStyle=c
o=m.d
n=m.e
l.fillRect(b*o,a*n,o,n)
l.restore()},
aH(a,b){var s,r,q,p,o=this.T(b,a)
b=o.a
s=A.dd(o.b)
r=s.a
q=B.a.K(1,s.b)
p=this.y
if(!(b>=0&&b<p.length))return A.c(p,b)
p=p[b]
if(!(r>=0&&r<p.length))return A.c(p,r)
return(p[r]&q)>>>0>0},
aD(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=this
if(e==null)e=k.c-c
if(b==null)b=k.b-d
k.ao()
if(c===0&&d===0&&e===k.c&&b===k.b){for(s=k.y,r=s.length,q=0;q<r;++q)for(p=0;o=s[q],p<o.length;++p){o.$flags&2&&A.d0(o)
o[p]=0}s=k.x
r=s.getContext("2d")
if(r==null)r=t.m.a(r)
r.save()
r.fillStyle=k.r
r.fillRect(0,0,s.width,s.height)
r.restore()}else{s=k.b
d=B.a.i(d,s)
r=k.c
c=B.a.i(c,r)
o=Math.abs(b)
n=Math.min(d+o,s)
m=Math.min(c+o,r)
for(o=k.x,q=d;q<n;++q){l=B.a.i(q,s)
for(p=c;p<m;++p)k.F(l,B.a.i(p,r),o,!1)}}k.aq()},
W(a){return this.aD(0,null,0,0,null)},
b0(a,b,c,d,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.ao()
s=e.T(a,b)
a=s.a
b=s.b
r=B.a.b2(1,a0)-1
for(q=a0-1,p=t.t,o=e.x,n=0;n<c.length;++n){m=c[n]
l=(m&r)>>>0
m=A.a([],p)
for(k=a+n,j=0;j<a0;++j){i=e.aH(b+j,k)?1:0
m.push(B.a.K(i,q-j))}h=B.d.b8(m,0,new A.bY())
switch(a1){case B.w:for(j=0;j<a0;++j){m=b+j
if((B.a.C(l,q-j)&1)>0)e.G(k,m,d,o,!1)
else e.F(k,m,o,!1)}break
case B.dR:for(j=0;j<a0;++j){m=b+j
if((B.a.C(l,q-j)&1)>0)e.F(k,m,o,!1)
else e.G(k,m,d,o,!1)}break
case B.dT:for(j=0;j<a0;++j){g=q-j
if((B.a.C(l,g)&1)>0&&(B.a.aN(h,g)&1)===0)e.G(k,b+j,d,o,!1)}break
case B.dS:for(j=0;j<a0;++j)if((B.a.C(l,q-j)&1)>0)e.G(k,b+j,d,o,!1)
break
case B.dU:for(f=(l&h)>>>0,j=0;j<a0;++j)if((B.a.C(f,q-j)&1)>0)e.G(k,b+j,d,o,!1)
break
case B.dV:for(f=(l&h)>>>0,j=0;j<a0;++j)if((B.a.C(f,q-j)&1)>0)e.F(k,b+j,o,!1)
break
case B.dW:for(f=(l&h)>>>0,j=0;j<a0;++j)if((B.a.C(f,q-j)&1)===0)e.F(k,b+j,o,!1)
break
case B.dX:for(f=(l&h)>>>0,j=0;j<a0;++j){m=b+j
if((B.a.C(f,q-j)&1)===0)e.F(k,m,o,!1)
else e.G(k,m,d,o,!1)}break}}e.aq()},
aI(a,b,c){this.b0(c.a,c.b,b,a,8,B.w,!0,!1,!1)},
gaF(){return this.z&&J.T(v.G.document.activeElement,this.w)},
I(){var s=this.w
s.style.opacity="1.0"
s.focus()},
H(){var s=this.w
s.style.opacity="0.5"
s.blur()}}
A.bZ.prototype={
$0(){this.a.z=!0},
$S:1}
A.c_.prototype={
$0(){this.a.z=!1},
$S:1}
A.c0.prototype={
$0(){this.a.I()},
$S:1}
A.c1.prototype={
$0(){this.a.H()},
$S:1}
A.bY.prototype={
$2(a,b){return(a|b)>>>0},
$S:15}
A.F.prototype={
O(){return"Mode."+this.b}}
A.ad.prototype={
O(){return"State."+this.b}}
A.aL.prototype={
aR(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=this,r=s.f
r.tabIndex=-1
r.onfocus=A.b1(new A.c9(s))
r.onblur=A.b1(new A.ca(s))
r.onkeydown=A.e7(new A.cb(s,l,new A.cf(),new A.ce(s)))
r.onclick=A.e7(new A.cc(s,new A.cg(s),o))
A.dP(A.dJ(300),new A.cd(s))
s.H()
s.W(0)},
gaa(){var s=this.w
s===$&&A.h()
return s.gaa()},
ga7(){var s=this.w
s===$&&A.h()
return s.ga7()},
a6(a,b){return new A.B(B.a.i(a,this.a),B.a.i(b,this.b))},
au(){var s=this,r=s.x
s.CW.V(0,new A.L(r.c,r.d," ","white"))
s.U()
s.cy=!1},
U(){var s,r,q,p,o,n,m,l,k,j,i,h=this
for(s=h.CW,r=A.fe(s,s.r,s.$ti.c),q=h.w,p=h.cx,o=8+h.c,n=r.$ti.c;r.n();){m=r.d
if(m==null)m=n.a(m)
l=m.a
k=m.b
if(p.a8(m.c)){j=p.q(0,m.c)
j.toString
i=j}else i=$.es()
q===$&&A.h()
q.aI(m.d,i,new A.B(l*o,k*8))}if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.av()}},
aj(a,b){var s,r=this.a6(b,a)
b=r.a
a=r.b
s=this.ch
if(!(b>=0&&b<s.length))return A.c(s,b)
s=s[b]
if(!(a>=0&&a<s.length))return A.c(s,a)
return s[a].c},
bg(){var s=this.x
s.sX(0)
s.c=B.a.i(s.c+1,s.a)},
ag(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=this,i=e==null?j.x.c:e,h=j.a6(i,c==null?j.x.d:c)
i=j.x
i.c=B.a.i(h.a,i.a)
i.sX(h.b)
if(b==null)b="white"
for(s=a.split(""),r=s.length,q=j.ch,p=j.CW,o=0;o<r;++o){n=s[o]
m=i.c
l=i.d
if(!(m>=0&&m<q.length))return A.c(q,m)
m=q[m]
if(!(l>=0&&l<m.length))return A.c(m,l)
k=m[l]
k.c=n
k.d=b
p.V(0,k)
i.sX(i.d+1)}j.U()
if(d)j.bg()},
E(a,b,c,d){return this.ag(a,b,c,!0,d)},
af(a,b,c){return this.ag(a,null,b,!0,c)},
aG(a,b){return this.ag(a,null,null,b,null)},
W(a){var s,r,q,p,o=this,n=o.b,m=o.a
for(s=o.ch,r=0;r<m;++r)for(q=0;q<n;++q){if(!(r<s.length))return A.c(s,r)
p=s[r]
if(!(q<p.length))return A.c(p,q)
p=p[q]
p.c=" "
p.d="white"}s=o.w
s===$&&A.h()
p=8+o.c
s.aD(0,m*p,0,0*p,n*8)
p=o.x
p.c=0%p.a
p.sX(0)},
bi(a,b,c){var s=this.w
s===$&&A.h()
s.aI("white",b,new A.B(c*(8+this.c),a*8))},
I(){return this.gaa().$0()},
H(){return this.ga7().$0()}}
A.cg.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.w
i===$&&A.h()
s=J.dC(a.offsetX)
r=Math.max(Math.min(B.a.D(J.dC(a.offsetY)-1,i.e),i.b-1),0)
q=Math.max(Math.min(B.a.D(s-1,i.d),i.c-1),0)
p=B.a.D(r,8+j.c)
o=B.a.v(q,8)
n=j.aj(o,p)
m=j.a6(p,o)
l=m.a
k=m.b
j=j.ch
if(!(l>=0&&l<j.length))return A.c(j,l)
j=j[l]
if(!(k>=0&&k<j.length))return A.c(j,k)
return new A.a8(p,o,n,j[k].d,r,q,i.aH(q,r))},
$S:16}
A.cf.prototype={
$1(a){var s=a.keyCode
return new A.N(s)},
$S:17}
A.ce.prototype={
$0(){var s,r,q,p,o,n=this.a,m=n.a,l=n.b,k=new A.ab(m,l)
k.su(n.y.gu())
s=A.a([],t.s)
for(r=n.z,q=r.b;p=k.c,o=k.d,p*l+o<r.c*q+r.d;p=k.c*l+k.d+1,k.c=B.a.i(B.a.D(p,l),m),k.d=B.a.i(p,l))s.push(n.aj(o,p))
return B.d.bc(s,"")},
$S:18}
A.c9.prototype={
$0(){var s=this.a.w
s===$&&A.h()
s.I()},
$S:1}
A.ca.prototype={
$0(){var s=this.a.w
s===$&&A.h()
s.H()},
$S:1}
A.cb.prototype={
$1(a){var s,r,q,p
a.preventDefault()
s=this.a
switch(s.ay){case B.y:this.b.$2(s,this.c.$1(a))
break
case B.dY:break
case B.z:s.au()
$label0$1:{r=a.keyCode
if(13===r)break $label0$1
if(8===r){q=s.x
if(q.gu()>s.y.gu()){q.su(q.gu()-1)
s.aG(" ",!1)
q.su(q.gu()-1)}break $label0$1}p=a.key
if(p.length===1&&s.x.gu()<s.z.gu())s.aG(p,!1)}break
case B.dZ:break}},
$S:4}
A.cc.prototype={
$1(a){a.preventDefault()},
$S:4}
A.cd.prototype={
$1(a){var s,r=this.a,q=r.w
q===$&&A.h()
if(q.gaF()&&r.ay===B.z)if(r.cy)r.au()
else{q=r.x
s=q.c
r.bi(q.d,$.er(),s)
r.cy=!0}},
$S:5}
A.A.prototype={
O(){return"Value."+this.b}}
A.a3.prototype={
O(){return"GameState."+this.b}}
A.c3.prototype={
aQ(a,b,c){var s=this,r=A.f5(s.b,c,!0,0,s.a+1,!1,new A.c4(s))
s.e!==$&&A.hF()
s.e=r
A.dP(A.dJ(100),new A.c5(s))
r.I()},
aM(){var s,r,q,p,o,n=this
switch(n.ay){case B.l:n.Z(A.a(["Snake!","","Press any key to start!"],t.s))
n.ay=B.k
break
case B.n:s=n.e
s===$&&A.h()
r=n.f
s.E("#","red",n.r,r)
n.Z(A.a([" Game Over! ",""," Press any key to "," play again! "],t.s))
n.ay=B.k
break
case B.m:s=n.c
if(s.length!==0){q=B.d.gaE(s)
B.d.bk(s,q)
s=q.a
if(s===n.y&&q.b===n.z)n.Y()
else{r=n.e
r===$&&A.h()
r.af(" ",q.b,s)}}s=n.ax
s===$&&A.h()
n.at=s
r=n.d
p=n.f
if(!(p>=0&&p<r.length))return A.c(r,p)
p=r[p]
o=n.r
if(!(o>=0&&o<p.length))return A.c(p,o)
p[o]=s
s=n.ch
if(s>0)n.ch=s-1
else n.aK(!1)
n.ba()
s=n.f
if(!(s>=0&&s<r.length))return A.c(r,s)
r=r[s]
p=n.r
o=n.at
if(!(p>=0&&p<r.length))return A.c(r,p)
r[p]=o
o=n.e
o===$&&A.h()
o.E("#","lightgreen",p,s)
break
case B.k:break}},
aK(a){var s,r,q=this,p=q.d,o=q.w
if(!(o>=0&&o<p.length))return A.c(p,o)
p=p[o]
s=q.x
if(!(s>=0&&s<p.length))return A.c(p,s)
r=p[s]
p[s]=B.c
p=q.e
if(a){p===$&&A.h()
p.E("+","red",s,o)
q.c.push(new A.aa(q.w,q.x,t.D))}else{p===$&&A.h()
p.af(" ",s,o)}$label0$0:{if(B.f===r){q.w=B.a.i(q.w-1,q.a)
break $label0$0}if(B.h===r){q.w=B.a.i(q.w+1,q.a)
break $label0$0}if(B.i===r){q.x=B.a.i(q.x-1,q.b)
break $label0$0}if(B.j===r){q.x=B.a.i(q.x+1,q.b)
break $label0$0}break $label0$0}},
ba(){var s,r,q,p=this
$label0$0:{s=p.at
s===$&&A.h()
if(B.f===s){p.f=B.a.i(p.f-1,p.a)
break $label0$0}if(B.h===s){p.f=B.a.i(p.f+1,p.a)
break $label0$0}if(B.i===s){p.r=B.a.i(p.r-1,p.b)
break $label0$0}if(B.j===s){p.r=B.a.i(p.r+1,p.b)
break $label0$0}break $label0$0}$label1$1:{s=p.d
r=p.f
if(!(r>=0&&r<s.length))return A.c(s,r)
r=s[r]
s=p.r
if(!(s>=0&&s<r.length))return A.c(r,s)
q=r[s]
if(B.r===q){s=p.cx
r=p.as
if(s){p.as=r+30
for(s=A.bR(5,t.z),s=s.gt(s);s.n();){s.gp()
p.aK(!0)}}else{s=p.Q
p.as=r+(s<10?s:20);++p.ch}p.ai()
break $label1$1}if(B.t===q){p.ch+=3
break $label1$1}if(B.c===q)break $label1$1
p.ay=B.n}},
Z(a){return this.bt(a)},
bt(a){var s=0,r=A.h6(t.n),q=this,p,o,n,m,l,k
var $async$Z=A.hh(function(b,c){if(b===1)return A.fI(c,r)
while(true)switch(s){case 0:l=a.length
k=B.a.v(q.a-l,2)
for(p=q.b,o=0;o<a.length;a.length===l||(0,A.dz)(a),++o){n=a[o]
m=q.e
m===$&&A.h()
m.E(n,"white",B.a.v(p-n.length,2),k);++k}return A.fJ(null,r)}})
return A.fK($async$Z,r)},
bf(){var s,r,q,p,o,n=this,m=n.a,l=m/2|0
n.f=l
s=n.b
r=s/2|0
n.r=r
n.w=l
n.x=r
n.CW=n.as=0
n.cx=!1
for(l=n.d,r=l.length,q=0;q<m;++q)for(p=0;p<s;++p){if(!(q<r))return A.c(l,q)
o=l[q]
if(!(p<o.length))return A.c(o,p)
o[p]=B.c}m=[B.f,B.h,B.i,B.j]
s=$.d3().J(4)
if(!(s>=0&&s<4))return A.c(m,s)
s=m[s]
n.ax=n.at=s
m=n.f
if(!(m>=0&&m<l.length))return A.c(l,m)
m=l[m]
l=n.r
if(!(l>=0&&l<m.length))return A.c(m,l)
m[l]=s
n.ai()
n.ay=B.m},
aC(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.a,d=f.b,c=f.d
do{s=$.d3()
r=s.J(e)
q=s.J(d)
if(!(r>=0&&r<c.length))return A.c(c,r)
s=c[r]
if(!(q>=0&&q<s.length))return A.c(s,q)}while(s[q]!==B.c&&Math.abs(r-f.f)+Math.abs(q-f.r)<10)
for(s=t.t,s=[A.a([-1,0],s),A.a([1,0],s),A.a([0,0],s),A.a([0,-1],s),A.a([0,1],s)],p=0;p<5;++p){o=s[p]
n=B.d.gaE(o)
if(typeof n!=="number")return A.em(n)
m=B.o.i(r+n,e)
n=B.d.gbd(o)
if(typeof n!=="number")return A.em(n)
l=B.o.i(q+n,d)
if(m>>>0!==m||m>=c.length)return A.c(c,m)
n=c[m]
if(l>>>0!==l||l>=n.length)return A.c(n,l)
if(n[l]===B.c)if(m===r||l===q){n[l]=B.t
n=f.e
n===$&&A.h()
k=B.a.i(m,n.a)
j=B.a.i(l,n.b)
i=n.ch
if(!(k<i.length))return A.c(i,k)
h=i[k]
if(!(j<h.length))return A.c(h,j)
h=h[j]
h.c="x"
g=n.CW
g.V(0,h)
n.U()
if(!(k<i.length))return A.c(i,k)
k=i[k]
if(!(j<k.length))return A.c(k,j)
j=k[j]
j.d="red"
g.V(0,j)
n.U()}}},
Y(){var s,r=this,q=r.cx,p=r.e
if(q){p===$&&A.h()
q=r.y
p.E("P","gold",r.z,q)}else{p===$&&A.h()
q=r.Q
q=q<10?""+q:"o"
s=r.y
p.E(q,"gold",r.z,s)}},
ai(){var s,r,q=this,p="Score: "+q.as,o=q.b,n=o-p.length,m=B.a.v(n,2),l=q.e
l===$&&A.h()
s=q.a
l.E(B.p.a_(" ",m)+p+B.p.a_(" ",n-m),"white",0,s)
n=q.d
do{l=$.d3()
q.y=l.J(s)
l=l.J(o)
q.z=l
r=q.y
if(!(r>=0&&r<n.length))return A.c(n,r)
r=n[r]
if(!(l>=0&&l<r.length))return A.c(r,l)}while(r[l]!==B.c)
r[l]=B.r
if(++q.CW%10===0){q.cx=!0
q.Q=3
q.Y()}else{q.cx=!1
q.Q=11
q.Y()}if(B.a.i(q.CW,13)===0)q.aC()}}
A.c4.prototype={
$2(a,b){var s,r,q,p=this.a,o=new A.c6(p)
$label0$0:{s=p.ay
if(B.n===s||B.l===s)break $label0$0
if(B.k===s){r=p.e
r===$&&A.h()
r.W(0)
p.bf()
break $label0$0}if(B.m===s){switch(b.a){case 38:r=p.ax
r===$&&A.h()
if(r!==B.h&&r!==B.f&&o.$2(p.f-1,p.r)){p.ax=B.f;--p.Q}break
case 40:r=p.ax
r===$&&A.h()
if(r!==B.f&&r!==B.h&&o.$2(p.f+1,p.r)){p.ax=B.h;--p.Q}break
case 37:r=p.ax
r===$&&A.h()
if(r!==B.j&&r!==B.i&&o.$2(p.f,p.r-1)){p.ax=B.i;--p.Q}break
case 39:r=p.ax
r===$&&A.h()
if(r!==B.i&&r!==B.j&&o.$2(p.f,p.r+1)){p.ax=B.j;--p.Q}break}if(p.Q===0){p.ch=p.cx?0:1
r=p.e
r===$&&A.h()
q=p.y
r.af(" ",p.z,q)
q=p.d
r=p.y
if(!(r>=0&&r<q.length))return A.c(q,r)
r=q[r]
q=p.z
if(!(q>=0&&q<r.length))return A.c(r,q)
r[q]=B.c
if(!p.cx)p.aC()
p.ai()}else p.Y()
break $label0$0}}},
$S:19}
A.c6.prototype={
$2(a,b){var s=A.a([B.r,B.t,B.c],t.p),r=this.a,q=r.d,p=B.a.i(a,r.a)
if(!(p<q.length))return A.c(q,p)
p=q[p]
r=B.a.i(b,r.b)
if(!(r<p.length))return A.c(p,r)
return B.d.b6(s,p[r])},
$S:20}
A.c5.prototype={
$1(a){var s=this.a,r=s.e
r===$&&A.h()
r=r.w
r===$&&A.h()
if(r.gaF())s.aM()},
$S:5};(function aliases(){var s=J.O.prototype
s.aO=s.h})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._instance_0u
s(A,"hi","fa",2)
s(A,"hj","fb",2)
s(A,"hk","fc",2)
r(A,"eg","hc",0)
s(A,"ei","fd",21)
var p
q(p=A.bx.prototype,"gaa","I",0)
q(p,"ga7","H",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.i,null)
q(A.i,[A.d8,J.bg,J.b6,A.j,A.c2,A.V,A.a7,A.bd,A.at,A.ai,A.bb,A.ci,A.bV,A.as,A.aV,A.U,A.aC,A.bT,A.y,A.bH,A.bL,A.aW,A.bC,A.E,A.bF,A.af,A.u,A.bE,A.bJ,A.cM,A.aJ,A.cE,A.ah,A.l,A.bc,A.cq,A.bu,A.aK,A.cr,A.t,A.bK,A.bz,A.cC,A.aa,A.L,A.N,A.a8,A.ab,A.bx,A.aL,A.c3])
q(J.bg,[J.bh,J.av,J.ax,J.aw,J.ay,J.a4,J.a5])
q(J.ax,[J.O,J.n,A.bk,A.aF])
q(J.O,[J.bv,J.ae,J.M])
r(J.bS,J.n)
q(J.a4,[J.au,J.bi])
q(A.j,[A.a6,A.I,A.bj,A.bB,A.bw,A.bG,A.b7,A.D,A.aM,A.bA,A.by,A.b9])
r(A.aq,A.V)
q(A.aq,[A.aB,A.ar])
r(A.bI,A.ai)
r(A.B,A.bI)
r(A.be,A.bb)
r(A.aH,A.I)
q(A.U,[A.bO,A.bP,A.c8,A.cV,A.cX,A.cn,A.cm,A.cN,A.cA,A.cH,A.cg,A.cf,A.cb,A.cc,A.cd,A.c5])
q(A.c8,[A.c7,A.ap])
r(A.aA,A.aC)
r(A.az,A.aA)
q(A.bP,[A.cW,A.cO,A.cR,A.cB,A.bU,A.bY,A.c4,A.c6])
q(A.aF,[A.bl,A.a9])
q(A.a9,[A.aP,A.aR])
r(A.aQ,A.aP)
r(A.aD,A.aQ)
r(A.aS,A.aR)
r(A.aE,A.aS)
q(A.aD,[A.bm,A.bn])
q(A.aE,[A.bo,A.bp,A.bq,A.br,A.bs,A.aG,A.bt])
r(A.aX,A.bG)
q(A.bO,[A.co,A.cp,A.cJ,A.cI,A.cs,A.cw,A.cv,A.cu,A.ct,A.cz,A.cy,A.cx,A.cQ,A.cG,A.bZ,A.c_,A.c0,A.c1,A.ce,A.c9,A.ca])
r(A.bD,A.bF)
r(A.cF,A.cM)
r(A.aU,A.aJ)
r(A.aO,A.aU)
q(A.D,[A.ac,A.bf])
r(A.aN,A.aB)
q(A.cq,[A.F,A.ad,A.A,A.a3])
s(A.aP,A.l)
s(A.aQ,A.at)
s(A.aR,A.l)
s(A.aS,A.at)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{b:"int",q:"double",en:"num",z:"String",cT:"bool",t:"Null",f:"List",i:"Object",hL:"Map"},mangledNames:{},types:["~()","t()","~(~())","t(@)","t(k)","~(ch)","@(@)","@(@,z)","@(z)","t(~())","~(@)","t(@,P)","~(b,@)","t(i,P)","~(i?,i?)","b(b,b)","a8(k)","N(k)","z()","~(aL,N)","cT(b,b)","b(b)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.B&&a.b(c.a)&&b.b(c.b)}}
A.ft(v.typeUniverse,JSON.parse('{"bv":"O","ae":"O","M":"O","bh":{"e":[]},"av":{"e":[]},"ax":{"k":[]},"O":{"k":[]},"n":{"f":["1"],"k":[]},"bS":{"n":["1"],"f":["1"],"k":[]},"a4":{"q":[]},"au":{"q":[],"b":[],"e":[]},"bi":{"q":[],"e":[]},"a5":{"z":[],"e":[]},"a6":{"j":[]},"aq":{"V":["1"]},"aB":{"V":["1"]},"ar":{"V":["1"]},"aH":{"I":[],"j":[]},"bj":{"j":[]},"bB":{"j":[]},"aV":{"P":[]},"bw":{"j":[]},"aA":{"aC":["1","2"]},"az":{"aA":["1","2"],"aC":["1","2"]},"bk":{"k":[],"e":[]},"aF":{"k":[]},"bl":{"k":[],"e":[]},"a9":{"v":["1"],"k":[]},"aD":{"l":["q"],"f":["q"],"v":["q"],"k":[]},"aE":{"l":["b"],"f":["b"],"v":["b"],"k":[]},"bm":{"l":["q"],"f":["q"],"v":["q"],"k":[],"e":[],"l.E":"q"},"bn":{"l":["q"],"f":["q"],"v":["q"],"k":[],"e":[],"l.E":"q"},"bo":{"l":["b"],"f":["b"],"v":["b"],"k":[],"e":[],"l.E":"b"},"bp":{"l":["b"],"f":["b"],"v":["b"],"k":[],"e":[],"l.E":"b"},"bq":{"l":["b"],"f":["b"],"v":["b"],"k":[],"e":[],"l.E":"b"},"br":{"l":["b"],"f":["b"],"v":["b"],"k":[],"e":[],"l.E":"b"},"bs":{"ck":[],"l":["b"],"f":["b"],"v":["b"],"k":[],"e":[],"l.E":"b"},"aG":{"l":["b"],"f":["b"],"v":["b"],"k":[],"e":[],"l.E":"b"},"bt":{"l":["b"],"f":["b"],"v":["b"],"k":[],"e":[],"l.E":"b"},"bG":{"j":[]},"aX":{"I":[],"j":[]},"aW":{"ch":[]},"E":{"j":[]},"u":{"a2":["1"]},"aO":{"aJ":["1"]},"aU":{"aJ":["1"]},"b7":{"j":[]},"I":{"j":[]},"D":{"j":[]},"ac":{"j":[]},"bf":{"j":[]},"aM":{"j":[]},"bA":{"j":[]},"by":{"j":[]},"b9":{"j":[]},"bu":{"j":[]},"aK":{"j":[]},"aN":{"aB":["1"],"V":["1"]},"bK":{"P":[]},"eS":{"f":["b"]},"f8":{"f":["b"]},"f7":{"f":["b"]},"eQ":{"f":["b"]},"f6":{"f":["b"]},"eR":{"f":["b"]},"ck":{"f":["b"]},"eO":{"f":["q"]},"eP":{"f":["q"]}}'))
A.fs(v.typeUniverse,JSON.parse('{"aq":1,"bd":1,"at":1,"bb":2,"a9":1,"bF":1,"bJ":1,"aU":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.dt
return{o:s("L"),Q:s("j"),Z:s("hK"),V:s("n<L>"),G:s("n<f<L>>"),I:s("n<f<A>>"),f:s("n<i>"),U:s("n<aa<b>>"),s:s("n<z>"),w:s("n<ck>"),p:s("n<A>"),b:s("n<@>"),t:s("n<b>"),T:s("av"),m:s("k"),g:s("M"),E:s("v<@>"),W:s("N"),j:s("f<@>"),q:s("a8"),P:s("t"),K:s("i"),D:s("aa<b>"),L:s("hM"),F:s("+()"),l:s("P"),N:s("z"),J:s("ch"),R:s("e"),_:s("I"),A:s("ae"),c:s("u<@>"),y:s("cT"),i:s("q"),z:s("@"),v:s("@(i)"),C:s("@(i,P)"),S:s("b"),O:s("a2<t>?"),X:s("i?"),x:s("z?"),u:s("cT?"),B:s("q?"),M:s("b?"),Y:s("en?"),H:s("en"),n:s("~")}})();(function constants(){var s=hunkHelpers.makeConstList
B.K=J.bg.prototype
B.d=J.n.prototype
B.a=J.au.prototype
B.o=J.a4.prototype
B.p=J.a5.prototype
B.L=J.M.prototype
B.M=J.ax.prototype
B.x=J.bv.prototype
B.q=J.ae.prototype
B.A=new A.bd()
B.u=function getTagFallback(o) {
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
B.G=function(getTagFallback) {
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
B.C=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.F=function(hooks) {
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
B.E=function(hooks) {
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
B.v=function(hooks) { return hooks; }

B.H=new A.bu()
B.e=new A.c2()
B.I=new A.cC()
B.b=new A.cF()
B.J=new A.bK()
B.l=new A.a3("titleScreen")
B.k=new A.a3("wait")
B.m=new A.a3("play")
B.n=new A.a3("gameOver")
B.db=A.a(s([126,129,165,129,189,153,129,126]),t.t)
B.ad=A.a(s([126,255,219,255,195,231,255,126]),t.t)
B.dI=A.a(s([108,254,254,254,124,56,16,0]),t.t)
B.c8=A.a(s([16,56,124,254,124,56,16,0]),t.t)
B.b6=A.a(s([56,124,56,254,254,124,56,124]),t.t)
B.bi=A.a(s([16,16,56,124,254,124,56,124]),t.t)
B.aB=A.a(s([0,0,24,60,60,24,0,0]),t.t)
B.aE=A.a(s([255,255,231,195,195,231,255,255]),t.t)
B.aQ=A.a(s([0,60,102,66,66,102,60,0]),t.t)
B.cW=A.a(s([255,195,153,189,189,153,195,255]),t.t)
B.dH=A.a(s([15,7,15,125,204,204,204,120]),t.t)
B.dG=A.a(s([60,102,102,102,60,24,126,24]),t.t)
B.cT=A.a(s([63,51,63,48,48,112,240,224]),t.t)
B.X=A.a(s([127,99,127,99,99,103,230,192]),t.t)
B.a1=A.a(s([153,90,60,231,231,60,90,153]),t.t)
B.ay=A.a(s([128,224,248,254,248,224,128,0]),t.t)
B.bE=A.a(s([2,14,62,254,62,14,2,0]),t.t)
B.cm=A.a(s([24,60,126,24,24,126,60,24]),t.t)
B.ci=A.a(s([102,102,102,102,102,0,102,0]),t.t)
B.cs=A.a(s([127,219,219,123,27,27,27,0]),t.t)
B.ct=A.a(s([62,99,56,108,108,56,204,120]),t.t)
B.bS=A.a(s([0,0,0,0,126,126,126,0]),t.t)
B.bV=A.a(s([24,60,126,24,126,60,24,255]),t.t)
B.S=A.a(s([24,60,126,24,24,24,24,0]),t.t)
B.dg=A.a(s([24,24,24,24,126,60,24,0]),t.t)
B.d9=A.a(s([0,24,12,254,12,24,0,0]),t.t)
B.av=A.a(s([0,48,96,254,96,48,0,0]),t.t)
B.c_=A.a(s([0,0,192,192,192,254,0,0]),t.t)
B.bx=A.a(s([0,36,102,255,102,36,0,0]),t.t)
B.ab=A.a(s([0,24,60,126,255,255,0,0]),t.t)
B.bW=A.a(s([0,255,255,126,60,24,0,0]),t.t)
B.b1=A.a(s([0,0,0,0,0,0,0,0]),t.t)
B.bF=A.a(s([48,120,120,48,48,0,48,0]),t.t)
B.a_=A.a(s([108,108,108,0,0,0,0,0]),t.t)
B.ap=A.a(s([108,108,254,108,254,108,108,0]),t.t)
B.c3=A.a(s([48,124,192,120,12,248,48,0]),t.t)
B.R=A.a(s([0,198,204,24,48,102,198,0]),t.t)
B.cF=A.a(s([56,108,56,118,220,204,118,0]),t.t)
B.ao=A.a(s([96,96,192,0,0,0,0,0]),t.t)
B.W=A.a(s([24,48,96,96,96,48,24,0]),t.t)
B.bB=A.a(s([96,48,24,24,24,48,96,0]),t.t)
B.cw=A.a(s([0,102,60,255,60,102,0,0]),t.t)
B.dP=A.a(s([0,48,48,252,48,48,0,0]),t.t)
B.c5=A.a(s([0,0,0,0,0,48,48,96]),t.t)
B.bw=A.a(s([0,0,0,252,0,0,0,0]),t.t)
B.ck=A.a(s([0,0,0,0,0,48,48,0]),t.t)
B.a6=A.a(s([6,12,24,48,96,192,128,0]),t.t)
B.b9=A.a(s([124,198,206,222,246,230,124,0]),t.t)
B.cn=A.a(s([48,112,48,48,48,48,252,0]),t.t)
B.c1=A.a(s([120,204,12,56,96,204,252,0]),t.t)
B.dK=A.a(s([120,204,12,56,12,204,120,0]),t.t)
B.bD=A.a(s([28,60,108,204,254,12,30,0]),t.t)
B.da=A.a(s([252,192,248,12,12,204,120,0]),t.t)
B.ds=A.a(s([56,96,192,248,204,204,120,0]),t.t)
B.c2=A.a(s([252,204,12,24,48,48,48,0]),t.t)
B.cz=A.a(s([120,204,204,120,204,204,120,0]),t.t)
B.bg=A.a(s([120,204,204,124,12,24,112,0]),t.t)
B.d3=A.a(s([0,48,48,0,0,48,48,0]),t.t)
B.aT=A.a(s([0,48,48,0,0,48,48,96]),t.t)
B.bC=A.a(s([24,48,96,192,96,48,24,0]),t.t)
B.br=A.a(s([0,0,252,0,0,252,0,0]),t.t)
B.aD=A.a(s([96,48,24,12,24,48,96,0]),t.t)
B.at=A.a(s([120,204,12,24,48,0,48,0]),t.t)
B.dn=A.a(s([124,198,222,222,222,192,120,0]),t.t)
B.ce=A.a(s([48,120,204,204,252,204,204,0]),t.t)
B.aN=A.a(s([252,102,102,124,102,102,252,0]),t.t)
B.af=A.a(s([60,102,192,192,192,102,60,0]),t.t)
B.a7=A.a(s([248,108,102,102,102,108,248,0]),t.t)
B.al=A.a(s([254,98,104,120,104,98,254,0]),t.t)
B.cq=A.a(s([254,98,104,120,104,96,240,0]),t.t)
B.ar=A.a(s([60,102,192,192,206,102,62,0]),t.t)
B.au=A.a(s([204,204,204,252,204,204,204,0]),t.t)
B.cO=A.a(s([120,48,48,48,48,48,120,0]),t.t)
B.bQ=A.a(s([30,12,12,12,204,204,120,0]),t.t)
B.bI=A.a(s([230,102,108,120,108,102,230,0]),t.t)
B.bH=A.a(s([240,96,96,96,98,102,254,0]),t.t)
B.aO=A.a(s([198,238,254,254,214,198,198,0]),t.t)
B.Z=A.a(s([198,230,246,222,206,198,198,0]),t.t)
B.cY=A.a(s([56,108,198,198,198,108,56,0]),t.t)
B.bm=A.a(s([252,102,102,124,96,96,240,0]),t.t)
B.cI=A.a(s([120,204,204,204,220,120,28,0]),t.t)
B.Q=A.a(s([252,102,102,124,108,102,230,0]),t.t)
B.ai=A.a(s([120,204,224,112,28,204,120,0]),t.t)
B.dB=A.a(s([252,180,48,48,48,48,120,0]),t.t)
B.aL=A.a(s([204,204,204,204,204,204,252,0]),t.t)
B.a3=A.a(s([204,204,204,204,204,120,48,0]),t.t)
B.cR=A.a(s([198,198,198,214,254,238,198,0]),t.t)
B.cL=A.a(s([198,198,108,56,56,108,198,0]),t.t)
B.a5=A.a(s([204,204,204,120,48,48,120,0]),t.t)
B.U=A.a(s([254,198,140,24,50,102,254,0]),t.t)
B.by=A.a(s([120,96,96,96,96,96,120,0]),t.t)
B.cD=A.a(s([192,96,48,24,12,6,2,0]),t.t)
B.bA=A.a(s([120,24,24,24,24,24,120,0]),t.t)
B.dr=A.a(s([16,56,108,198,0,0,0,0]),t.t)
B.P=A.a(s([0,0,0,0,0,0,0,255]),t.t)
B.aM=A.a(s([48,48,24,0,0,0,0,0]),t.t)
B.dh=A.a(s([0,0,120,12,124,204,118,0]),t.t)
B.ch=A.a(s([224,96,96,124,102,102,220,0]),t.t)
B.cK=A.a(s([0,0,120,204,192,204,120,0]),t.t)
B.b7=A.a(s([28,12,12,124,204,204,118,0]),t.t)
B.du=A.a(s([0,0,120,204,252,192,120,0]),t.t)
B.aR=A.a(s([56,108,96,240,96,96,240,0]),t.t)
B.cH=A.a(s([0,0,118,204,204,124,12,248]),t.t)
B.aC=A.a(s([224,96,108,118,102,102,230,0]),t.t)
B.cx=A.a(s([48,0,112,48,48,48,120,0]),t.t)
B.bL=A.a(s([12,0,12,12,12,204,204,120]),t.t)
B.be=A.a(s([224,96,102,108,120,108,230,0]),t.t)
B.bN=A.a(s([112,48,48,48,48,48,120,0]),t.t)
B.bv=A.a(s([0,0,204,254,254,214,198,0]),t.t)
B.bO=A.a(s([0,0,248,204,204,204,204,0]),t.t)
B.bh=A.a(s([0,0,120,204,204,204,120,0]),t.t)
B.dy=A.a(s([0,0,220,102,102,124,96,240]),t.t)
B.dv=A.a(s([0,0,118,204,204,124,12,30]),t.t)
B.bs=A.a(s([0,0,220,118,102,96,240,0]),t.t)
B.d0=A.a(s([0,0,124,192,120,12,248,0]),t.t)
B.cU=A.a(s([16,48,124,48,48,52,24,0]),t.t)
B.cb=A.a(s([0,0,204,204,204,204,118,0]),t.t)
B.b5=A.a(s([0,0,204,204,204,120,48,0]),t.t)
B.bl=A.a(s([0,0,198,214,254,254,108,0]),t.t)
B.bJ=A.a(s([0,0,198,108,56,108,198,0]),t.t)
B.dE=A.a(s([0,0,204,204,204,124,12,248]),t.t)
B.df=A.a(s([0,0,252,152,48,100,252,0]),t.t)
B.bb=A.a(s([28,48,48,224,48,48,28,0]),t.t)
B.d_=A.a(s([24,24,24,0,24,24,24,0]),t.t)
B.aG=A.a(s([224,48,48,28,48,48,224,0]),t.t)
B.dO=A.a(s([118,220,0,0,0,0,0,0]),t.t)
B.b4=A.a(s([0,16,56,108,198,198,254,0]),t.t)
B.ax=A.a(s([120,204,192,204,120,24,12,120]),t.t)
B.dd=A.a(s([0,204,0,204,204,204,126,0]),t.t)
B.dD=A.a(s([28,0,120,204,252,192,120,0]),t.t)
B.c4=A.a(s([126,195,60,6,62,102,63,0]),t.t)
B.ak=A.a(s([204,0,120,12,124,204,126,0]),t.t)
B.b8=A.a(s([224,0,120,12,124,204,126,0]),t.t)
B.aa=A.a(s([48,48,120,12,124,204,126,0]),t.t)
B.bo=A.a(s([0,0,120,192,192,120,12,56]),t.t)
B.dm=A.a(s([126,195,60,102,126,96,60,0]),t.t)
B.aP=A.a(s([204,0,120,204,252,192,120,0]),t.t)
B.d1=A.a(s([224,0,120,204,252,192,120,0]),t.t)
B.de=A.a(s([204,0,112,48,48,48,120,0]),t.t)
B.cS=A.a(s([124,198,56,24,24,24,60,0]),t.t)
B.b0=A.a(s([224,0,112,48,48,48,120,0]),t.t)
B.dJ=A.a(s([198,56,108,198,254,198,198,0]),t.t)
B.cZ=A.a(s([48,48,0,120,204,252,204,0]),t.t)
B.bG=A.a(s([28,0,252,96,120,96,252,0]),t.t)
B.dC=A.a(s([0,0,127,12,127,204,127,0]),t.t)
B.aU=A.a(s([62,108,204,254,204,204,206,0]),t.t)
B.dw=A.a(s([120,204,0,120,204,204,120,0]),t.t)
B.ag=A.a(s([0,204,0,120,204,204,120,0]),t.t)
B.dL=A.a(s([0,224,0,120,204,204,120,0]),t.t)
B.aS=A.a(s([120,204,0,204,204,204,126,0]),t.t)
B.cV=A.a(s([0,224,0,204,204,204,126,0]),t.t)
B.aA=A.a(s([0,204,0,204,204,124,12,248]),t.t)
B.am=A.a(s([195,24,60,102,102,60,24,0]),t.t)
B.d7=A.a(s([204,0,204,204,204,204,120,0]),t.t)
B.a0=A.a(s([24,24,126,192,192,126,24,24]),t.t)
B.aJ=A.a(s([56,108,100,240,96,230,252,0]),t.t)
B.b2=A.a(s([204,204,120,252,48,252,48,48]),t.t)
B.di=A.a(s([248,204,204,250,198,207,198,199]),t.t)
B.bR=A.a(s([14,27,24,60,24,24,216,112]),t.t)
B.aF=A.a(s([28,0,120,12,124,204,126,0]),t.t)
B.cg=A.a(s([56,0,112,48,48,48,120,0]),t.t)
B.aI=A.a(s([0,28,0,120,204,204,120,0]),t.t)
B.cA=A.a(s([0,28,0,204,204,204,126,0]),t.t)
B.aY=A.a(s([0,248,0,248,204,204,204,0]),t.t)
B.cQ=A.a(s([252,0,204,236,252,220,204,0]),t.t)
B.ah=A.a(s([60,108,108,62,0,126,0,0]),t.t)
B.cd=A.a(s([56,108,108,56,0,124,0,0]),t.t)
B.d8=A.a(s([48,0,48,96,192,204,120,0]),t.t)
B.b_=A.a(s([0,0,0,252,192,192,0,0]),t.t)
B.aH=A.a(s([0,0,0,252,12,12,0,0]),t.t)
B.d2=A.a(s([195,198,204,222,51,102,204,15]),t.t)
B.az=A.a(s([195,198,204,219,55,111,207,3]),t.t)
B.bU=A.a(s([24,24,0,24,24,24,24,0]),t.t)
B.bT=A.a(s([0,51,102,204,102,51,0,0]),t.t)
B.bd=A.a(s([0,204,102,51,102,204,0,0]),t.t)
B.cC=A.a(s([34,136,34,136,34,136,34,136]),t.t)
B.dx=A.a(s([85,170,85,170,85,170,85,170]),t.t)
B.bM=A.a(s([219,119,219,238,219,119,219,238]),t.t)
B.b3=A.a(s([24,24,24,24,24,24,24,24]),t.t)
B.aZ=A.a(s([24,24,24,24,248,24,24,24]),t.t)
B.c0=A.a(s([24,24,248,24,248,24,24,24]),t.t)
B.dN=A.a(s([54,54,54,54,246,54,54,54]),t.t)
B.co=A.a(s([0,0,0,0,254,54,54,54]),t.t)
B.aV=A.a(s([0,0,248,24,248,24,24,24]),t.t)
B.ae=A.a(s([54,54,246,6,246,54,54,54]),t.t)
B.cu=A.a(s([54,54,54,54,54,54,54,54]),t.t)
B.cc=A.a(s([0,0,254,6,246,54,54,54]),t.t)
B.cy=A.a(s([54,54,246,6,254,0,0,0]),t.t)
B.as=A.a(s([54,54,54,54,254,0,0,0]),t.t)
B.a4=A.a(s([24,24,248,24,248,0,0,0]),t.t)
B.a9=A.a(s([0,0,0,0,248,24,24,24]),t.t)
B.a2=A.a(s([24,24,24,24,31,0,0,0]),t.t)
B.bZ=A.a(s([24,24,24,24,255,0,0,0]),t.t)
B.bq=A.a(s([0,0,0,0,255,24,24,24]),t.t)
B.d6=A.a(s([24,24,24,24,31,24,24,24]),t.t)
B.bX=A.a(s([0,0,0,0,255,0,0,0]),t.t)
B.cv=A.a(s([24,24,24,24,255,24,24,24]),t.t)
B.cG=A.a(s([24,24,31,24,31,24,24,24]),t.t)
B.bf=A.a(s([54,54,54,54,55,54,54,54]),t.t)
B.dt=A.a(s([54,54,55,48,63,0,0,0]),t.t)
B.dl=A.a(s([0,0,63,48,55,54,54,54]),t.t)
B.bK=A.a(s([54,54,247,0,255,0,0,0]),t.t)
B.bz=A.a(s([0,0,255,0,247,54,54,54]),t.t)
B.aX=A.a(s([54,54,55,48,55,54,54,54]),t.t)
B.aW=A.a(s([0,0,255,0,255,0,0,0]),t.t)
B.dF=A.a(s([54,54,247,0,247,54,54,54]),t.t)
B.cM=A.a(s([24,24,255,0,255,0,0,0]),t.t)
B.N=A.a(s([54,54,54,54,255,0,0,0]),t.t)
B.dz=A.a(s([0,0,255,0,255,24,24,24]),t.t)
B.c6=A.a(s([0,0,0,0,255,54,54,54]),t.t)
B.cp=A.a(s([54,54,54,54,63,0,0,0]),t.t)
B.bu=A.a(s([24,24,31,24,31,0,0,0]),t.t)
B.cj=A.a(s([0,0,31,24,31,24,24,24]),t.t)
B.cJ=A.a(s([0,0,0,0,63,54,54,54]),t.t)
B.cP=A.a(s([54,54,54,54,255,54,54,54]),t.t)
B.bP=A.a(s([24,24,255,24,255,24,24,24]),t.t)
B.dj=A.a(s([24,24,24,24,248,0,0,0]),t.t)
B.ba=A.a(s([0,0,0,0,31,24,24,24]),t.t)
B.c7=A.a(s([255,255,255,255,255,255,255,255]),t.t)
B.ca=A.a(s([0,0,0,0,255,255,255,255]),t.t)
B.bk=A.a(s([240,240,240,240,240,240,240,240]),t.t)
B.cr=A.a(s([15,15,15,15,15,15,15,15]),t.t)
B.d5=A.a(s([255,255,255,255,0,0,0,0]),t.t)
B.dM=A.a(s([0,0,118,220,200,220,118,0]),t.t)
B.dp=A.a(s([0,120,204,248,204,248,192,192]),t.t)
B.aq=A.a(s([0,252,204,192,192,192,192,0]),t.t)
B.c9=A.a(s([0,254,108,108,108,108,108,0]),t.t)
B.dk=A.a(s([252,204,96,48,96,204,252,0]),t.t)
B.bn=A.a(s([0,0,126,216,216,216,112,0]),t.t)
B.bt=A.a(s([0,102,102,102,102,124,96,192]),t.t)
B.cE=A.a(s([0,118,220,24,24,24,24,0]),t.t)
B.aj=A.a(s([252,48,120,204,204,120,48,252]),t.t)
B.aK=A.a(s([56,108,198,254,198,108,56,0]),t.t)
B.an=A.a(s([56,108,198,198,108,108,238,0]),t.t)
B.O=A.a(s([28,48,24,124,204,204,120,0]),t.t)
B.dA=A.a(s([0,0,126,219,219,126,0,0]),t.t)
B.bp=A.a(s([6,12,126,219,219,126,96,192]),t.t)
B.ac=A.a(s([56,96,192,248,192,96,56,0]),t.t)
B.cl=A.a(s([120,204,204,204,204,204,204,0]),t.t)
B.cN=A.a(s([0,252,0,252,0,252,0,0]),t.t)
B.a8=A.a(s([48,48,252,48,48,0,252,0]),t.t)
B.bc=A.a(s([96,48,24,48,96,0,252,0]),t.t)
B.cX=A.a(s([24,48,96,48,24,0,252,0]),t.t)
B.bj=A.a(s([14,27,27,24,24,24,24,24]),t.t)
B.dc=A.a(s([24,24,24,24,24,216,216,112]),t.t)
B.cf=A.a(s([48,48,0,252,0,48,48,0]),t.t)
B.T=A.a(s([0,118,220,0,118,220,0,0]),t.t)
B.cB=A.a(s([56,108,108,56,0,0,0,0]),t.t)
B.V=A.a(s([0,0,0,24,24,0,0,0]),t.t)
B.dq=A.a(s([0,0,0,0,24,0,0,0]),t.t)
B.Y=A.a(s([15,12,12,12,236,108,60,28]),t.t)
B.bY=A.a(s([120,108,108,108,108,0,0,0]),t.t)
B.aw=A.a(s([112,24,48,96,120,0,0,0]),t.t)
B.d4=A.a(s([0,0,60,60,60,60,0,0]),t.t)
B.dQ=new A.be(["\u263a",B.db,"\u263b",B.ad,"\u2665",B.dI,"\u2666",B.c8,"\u2663",B.b6,"\u2660",B.bi,"\u2022",B.aB,"\u25d8",B.aE,"\u25cb",B.aQ,"\u25d9",B.cW,"\u2642",B.dH,"\u2640",B.dG,"\u266a",B.cT,"\u266b",B.X,"\u263c",B.a1,"\u25ba",B.ay,"\u25c4",B.bE,"\u2195",B.cm,"\u203c",B.ci,"\xb6",B.cs,"\xa7",B.ct,"\u25ac",B.bS,"\u21a8",B.bV,"\u2191",B.S,"\u2193",B.dg,"\u2192",B.d9,"\u2190",B.av,"\u221f",B.c_,"\u2194",B.bx,"\u25b2",B.ab,"\u25bc",B.bW," ",B.b1,"!",B.bF,'"',B.a_,"#",B.ap,"$",B.c3,"%",B.R,"&",B.cF,"'",B.ao,"(",B.W,")",B.bB,"*",B.cw,"+",B.dP,",",B.c5,"-",B.bw,".",B.ck,"/",B.a6,"0",B.b9,"1",B.cn,"2",B.c1,"3",B.dK,"4",B.bD,"5",B.da,"6",B.ds,"7",B.c2,"8",B.cz,"9",B.bg,":",B.d3,";",B.aT,"<",B.bC,"=",B.br,">",B.aD,"?",B.at,"@",B.dn,"A",B.ce,"B",B.aN,"C",B.af,"D",B.a7,"E",B.al,"F",B.cq,"G",B.ar,"H",B.au,"I",B.cO,"J",B.bQ,"K",B.bI,"L",B.bH,"M",B.aO,"N",B.Z,"O",B.cY,"P",B.bm,"Q",B.cI,"R",B.Q,"S",B.ai,"T",B.dB,"U",B.aL,"V",B.a3,"W",B.cR,"X",B.cL,"Y",B.a5,"Z",B.U,"[",B.by,"\\",B.cD,"]",B.bA,"^",B.dr,"_",B.P,"`",B.aM,"a",B.dh,"b",B.ch,"c",B.cK,"d",B.b7,"e",B.du,"f",B.aR,"g",B.cH,"h",B.aC,"i",B.cx,"j",B.bL,"k",B.be,"l",B.bN,"m",B.bv,"n",B.bO,"o",B.bh,"p",B.dy,"q",B.dv,"r",B.bs,"s",B.d0,"t",B.cU,"u",B.cb,"v",B.b5,"w",B.bl,"x",B.bJ,"y",B.dE,"z",B.df,"{",B.bb,"|",B.d_,"}",B.aG,"~",B.dO,"\u2302",B.b4,"\xc7",B.ax,"\xfc",B.dd,"\xe9",B.dD,"\xe2",B.c4,"\xe4",B.ak,"\xe0",B.b8,"\xe5",B.aa,"\xe7",B.bo,"\xea",B.dm,"\xeb",B.aP,"\xe8",B.d1,"\xef",B.de,"\xee",B.cS,"\xec",B.b0,"\xc4",B.dJ,"\xc5",B.cZ,"\xc9",B.bG,"\xe6",B.dC,"\xc6",B.aU,"\xf4",B.dw,"\xf6",B.ag,"\xf2",B.dL,"\xfb",B.aS,"\xf9",B.cV,"\xff",B.aA,"\xd6",B.am,"\xdc",B.d7,"\xa2",B.a0,"\xa3",B.aJ,"\xa5",B.b2,"\u20a7",B.di,"\u0192",B.bR,"\xe1",B.aF,"\xed",B.cg,"\xf3",B.aI,"\xfa",B.cA,"\xf1",B.aY,"\xd1",B.cQ,"\xaa",B.ah,"\xba",B.cd,"\xbf",B.d8,"\u2310",B.b_,"\xac",B.aH,"\xbd",B.d2,"\xbc",B.az,"\xa1",B.bU,"\xab",B.bT,"\xbb",B.bd,"\u2591",B.cC,"\u2592",B.dx,"\u2593",B.bM,"\u2502",B.b3,"\u2524",B.aZ,"\u2561",B.c0,"\u2562",B.dN,"\u2556",B.co,"\u2555",B.aV,"\u2563",B.ae,"\u2551",B.cu,"\u2557",B.cc,"\u255d",B.cy,"\u255c",B.as,"\u255b",B.a4,"\u2510",B.a9,"\u2514",B.a2,"\u2534",B.bZ,"\u252c",B.bq,"\u251c",B.d6,"\u2500",B.bX,"\u253c",B.cv,"\u255e",B.cG,"\u255f",B.bf,"\u255a",B.dt,"\u2554",B.dl,"\u2569",B.bK,"\u2566",B.bz,"\u2560",B.aX,"\u2550",B.aW,"\u256c",B.dF,"\u2567",B.cM,"\u2568",B.N,"\u2564",B.dz,"\u2565",B.c6,"\u2559",B.cp,"\u2558",B.bu,"\u2552",B.cj,"\u2553",B.cJ,"\u256b",B.cP,"\u256a",B.bP,"\u2518",B.dj,"\u250c",B.ba,"\u2588",B.c7,"\u2584",B.ca,"\u258c",B.bk,"\u2590",B.cr,"\u2580",B.d5,"\u03b1",B.dM,"\xdf",B.dp,"\u0393",B.aq,"\u03c0",B.c9,"\u03a3",B.dk,"\u03c3",B.bn,"\xb5",B.bt,"\u03c4",B.cE,"\u03a6",B.aj,"\u0398",B.aK,"\u03a9",B.an,"\u03b4",B.O,"\u221e",B.dA,"\u03c6",B.bp,"\u03b5",B.ac,"\u2229",B.cl,"\u2261",B.cN,"\xb1",B.a8,"\u2265",B.bc,"\u2264",B.cX,"\u2320",B.bj,"\u2321",B.dc,"\xf7",B.cf,"\u2248",B.T,"\xb0",B.cB,"\u2219",B.V,"\xb7",B.dq,"\u221a",B.Y,"\u207f",B.bY,"\xb2",B.aw,"\u25a0",B.d4],A.dt("be<z,f<b>>"))
B.w=new A.F("replace")
B.dR=new A.F("inverse")
B.dS=new A.F("over")
B.dT=new A.F("under")
B.dU=new A.F("stain")
B.dV=new A.F("delete")
B.dW=new A.F("maskDestination")
B.dX=new A.F("maskSource")
B.y=new A.ad("ready")
B.dY=new A.ad("awaitingKey")
B.z=new A.ad("awaitingString")
B.dZ=new A.ad("awaitingMouseClick")
B.e_=A.C("hH")
B.e0=A.C("hI")
B.e1=A.C("eO")
B.e2=A.C("eP")
B.e3=A.C("eQ")
B.e4=A.C("eR")
B.e5=A.C("eS")
B.e6=A.C("i")
B.e7=A.C("f6")
B.e8=A.C("ck")
B.e9=A.C("f7")
B.ea=A.C("f8")
B.c=new A.A("nothing")
B.r=new A.A("apple")
B.f=new A.A("up")
B.h=new A.A("down")
B.i=new A.A("left")
B.j=new A.A("right")
B.t=new A.A("brick")})();(function staticFields(){$.cD=null
$.x=A.a([],t.f)
$.dK=null
$.dG=null
$.dF=null
$.el=null
$.ef=null
$.ep=null
$.cU=null
$.cY=null
$.dv=null
$.aT=A.a([],A.dt("n<f<i>?>"))
$.aj=null
$.b2=null
$.b3=null
$.dp=!1
$.o=B.b})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"hJ","d1",()=>A.hs("_$dart_dartClosure"))
s($,"hQ","et",()=>A.J(A.cj({
toString:function(){return"$receiver$"}})))
s($,"hR","eu",()=>A.J(A.cj({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"hS","ev",()=>A.J(A.cj(null)))
s($,"hT","ew",()=>A.J(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"hW","ez",()=>A.J(A.cj(void 0)))
s($,"hX","eA",()=>A.J(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"hV","ey",()=>A.J(A.dR(null)))
s($,"hU","ex",()=>A.J(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"hZ","eC",()=>A.J(A.dR(void 0)))
s($,"hY","eB",()=>A.J(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"i_","dA",()=>A.f9())
s($,"i1","d2",()=>A.dy(B.e6))
s($,"hP","es",()=>A.da(8,0,t.S))
s($,"hO","er",()=>A.da(8,255,t.S))
s($,"i3","d3",()=>B.I)})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.bk,ArrayBufferView:A.aF,DataView:A.bl,Float32Array:A.bm,Float64Array:A.bn,Int16Array:A.bo,Int32Array:A.bp,Int8Array:A.bq,Uint16Array:A.br,Uint32Array:A.bs,Uint8ClampedArray:A.aG,CanvasPixelArray:A.aG,Uint8Array:A.bt})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.a9.$nativeSuperclassTag="ArrayBufferView"
A.aP.$nativeSuperclassTag="ArrayBufferView"
A.aQ.$nativeSuperclassTag="ArrayBufferView"
A.aD.$nativeSuperclassTag="ArrayBufferView"
A.aR.$nativeSuperclassTag="ArrayBufferView"
A.aS.$nativeSuperclassTag="ArrayBufferView"
A.aE.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q){s[q].removeEventListener("load",onLoad,false)}a(b.target)}for(var r=0;r<s.length;++r){s[r].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var s=A.hB
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=snake.js.map
