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
if(a[b]!==s){A.hO(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.l(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.dv(b)
return new s(c,this)}:function(){if(s===null)s=A.dv(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.dv(a).prototype
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
dz(a,b,c,d){return{i:a,p:b,e:c,x:d}},
dw(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.dx==null){A.hG()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.c(A.dV("Return interceptor for "+A.m(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.cE
if(o==null)o=$.cE=A.cW(n)
p=q[o]}if(p!=null)return p
p=A.hK(a)
if(p!=null)return p
if(typeof a=="function")return B.I
s=Object.getPrototypeOf(a)
if(s==null)return B.v
if(s===Object.prototype)return B.v
if(typeof q=="function"){o=$.cE
if(o==null)o=$.cE=A.cW(n)
Object.defineProperty(q,o,{value:B.m,enumerable:false,writable:true,configurable:true})
return B.m}return B.m},
X(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.as.prototype
return J.bi.prototype}if(typeof a=="string")return J.a2.prototype
if(a==null)return J.at.prototype
if(typeof a=="boolean")return J.bh.prototype
if(Array.isArray(a))return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.K.prototype
if(typeof a=="symbol")return J.aw.prototype
if(typeof a=="bigint")return J.au.prototype
return a}if(a instanceof A.f)return a
return J.dw(a)},
em(a){if(typeof a=="string")return J.a2.prototype
if(a==null)return a
if(Array.isArray(a))return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.K.prototype
if(typeof a=="symbol")return J.aw.prototype
if(typeof a=="bigint")return J.au.prototype
return a}if(a instanceof A.f)return a
return J.dw(a)},
hB(a){if(a==null)return a
if(Array.isArray(a))return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.K.prototype
if(typeof a=="symbol")return J.aw.prototype
if(typeof a=="bigint")return J.au.prototype
return a}if(a instanceof A.f)return a
return J.dw(a)},
hC(a){if(typeof a=="number")return J.a1.prototype
if(a==null)return a
if(!(a instanceof A.f))return J.ab.prototype
return a},
R(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.X(a).A(a,b)},
G(a){return J.X(a).gk(a)},
eH(a){return J.hB(a).gq(a)},
dD(a){return J.em(a).gn(a)},
eI(a){return J.X(a).gl(a)},
dE(a){return J.hC(a).bv(a)},
b4(a){return J.X(a).h(a)},
bf:function bf(){},
bh:function bh(){},
at:function at(){},
av:function av(){},
M:function M(){},
bu:function bu(){},
ab:function ab(){},
K:function K(){},
au:function au(){},
aw:function aw(){},
n:function n(a){this.$ti=a},
bg:function bg(){},
bT:function bT(a){this.$ti=a},
b5:function b5(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
a1:function a1(){},
as:function as(){},
bi:function bi(){},
a2:function a2(){}},A={da:function da(){},
eZ(a){return new A.a3("Field '"+a+"' has not been initialized.")},
eY(a){return new A.a3("Field '"+a+"' has already been initialized.")},
O(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
dh(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
dR(a,b,c){return A.dh(A.O(A.O(c,a),b))},
du(a,b,c){return a},
dy(a){var s,r
for(s=$.x.length,r=0;r<s;++r)if(a===$.x[r])return!0
return!1},
d8(){return new A.bz("No element")},
a3:function a3(a){this.a=a},
c3:function c3(){},
ao:function ao(){},
az:function az(){},
a4:function a4(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ap:function ap(a){this.$ti=a},
bc:function bc(){},
ar:function ar(){},
es(a){var s=A.er(a)
if(s!=null)return s
return"minified:"+a},
ig(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.E.b(a)},
m(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.b4(a)
return s},
aG(a){var s,r=$.dN
if(r==null)r=$.dN=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
bv(a){var s,r,q,p
if(a instanceof A.f)return A.w(A.b3(a),null)
s=J.X(a)
if(s===B.G||s===B.J||t.A.b(a)){r=B.p(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.w(A.b3(a),null)},
dO(a){var s,r,q
if(a==null||typeof a=="number"||A.dq(a))return J.b4(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.S)return a.h(0)
if(a instanceof A.af)return a.aB(!0)
s=$.eG()
for(r=0;r<1;++r){q=s[r].bw(a)
if(q!=null)return q}return"Instance of '"+A.bv(a)+"'"},
f1(a){var s=a.$thrownJsError
if(s==null)return null
return A.Y(s)},
b(a,b){if(a==null)J.dD(a)
throw A.c(A.hy(a,b))},
hy(a,b){var s,r="index",q=null
if(!A.eb(b))return new A.E(!0,b,r,q)
s=J.dD(a)
if(b<0||b>=s)return A.d7(b,s,a,q,r)
return new A.aa(q,q,!0,b,r,"Value not in range")},
dt(a){return new A.E(!0,a,null,null)},
c(a){return A.q(a,new Error())},
q(a,b){var s
if(a==null)a=new A.H()
b.dartException=a
s=A.hQ
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
hQ(){return J.b4(this.dartException)},
d1(a,b){throw A.q(a,b==null?new Error():b)},
d2(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.d1(A.fV(a,b,c),s)},
fV(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.aL("'"+s+"': Cannot "+o+" "+l+k+n)},
dB(a){throw A.c(A.b9(a))},
I(a){var s,r,q,p,o,n
a=A.hN(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.l([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.cj(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
ck(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
dU(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
db(a,b){var s=b==null,r=s?null:b.method
return new A.bj(a,r,s?null:b.receiver)},
al(a){if(a==null)return new A.bX(a)
if(a instanceof A.aq)return A.Q(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.Q(a,a.dartException)
return A.hq(a)},
Q(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
hq(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.a.b4(r,16)&8191)===10)switch(q){case 438:return A.Q(a,A.db(A.m(s)+" (Error "+q+")",null))
case 445:case 5007:A.m(s)
return A.Q(a,new A.aF())}}if(a instanceof TypeError){p=$.ew()
o=$.ex()
n=$.ey()
m=$.ez()
l=$.eC()
k=$.eD()
j=$.eB()
$.eA()
i=$.eF()
h=$.eE()
g=p.v(s)
if(g!=null)return A.Q(a,A.db(s,g))
else{g=o.v(s)
if(g!=null){g.method="call"
return A.Q(a,A.db(s,g))}else if(n.v(s)!=null||m.v(s)!=null||l.v(s)!=null||k.v(s)!=null||j.v(s)!=null||m.v(s)!=null||i.v(s)!=null||h.v(s)!=null)return A.Q(a,new A.aF())}return A.Q(a,new A.bC(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.aJ()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.Q(a,new A.E(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.aJ()
return a},
Y(a){var s
if(a instanceof A.aq)return a.b
if(a==null)return new A.aU(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.aU(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
dA(a){if(a==null)return J.G(a)
if(typeof a=="object")return A.aG(a)
return J.G(a)},
hv(a){if(typeof a=="number")return B.H.gk(a)
if(a instanceof A.bM)return A.aG(a)
if(a instanceof A.af)return a.gk(a)
return A.dA(a)},
hA(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=a.length
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
if(m==null)o[q]=b.L(q,p)
else m.b=p}else if(typeof q=="number"&&(q&0x3fffffff)===q){l=b.c
if(l==null){n=Object.create(null)
n["<non-identifier-key>"]=n
delete n["<non-identifier-key>"]
b.c=n
l=n}m=l[q]
if(m==null)l[q]=b.L(q,p)
else m.b=p}else{k=b.d
if(k==null){n=Object.create(null)
n["<non-identifier-key>"]=n
delete n["<non-identifier-key>"]
b.d=n
k=n}j=b.ac(q)
i=k[j]
if(i==null)k[j]=[b.L(q,p)]
else{r=b.ad(i,q)
if(r>=0)i[r].b=p
else i.push(b.L(q,p))}}}return b},
h2(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.c(new A.cs("Unsupported number of arguments for wrapped closure"))},
bO(a,b){var s=a.$identity
if(!!s)return s
s=A.hw(a,b)
a.$identity=s
return s},
hw(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.h2)},
eP(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.c8().constructor.prototype):Object.create(new A.an(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.dK(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.eL(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.dK(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
eL(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.c("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.eJ)}throw A.c("Error in functionType of tearoff")},
eM(a,b,c,d){var s=A.dJ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
dK(a,b,c,d){if(c)return A.eO(a,b,d)
return A.eM(b.length,d,a,b)},
eN(a,b,c,d){var s=A.dJ,r=A.eK
switch(b?-1:a){case 0:throw A.c(new A.bw("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
eO(a,b,c){var s,r
if($.dH==null)$.dH=A.dG("interceptor")
if($.dI==null)$.dI=A.dG("receiver")
s=b.length
r=A.eN(s,c,a,b)
return r},
dv(a){return A.eP(a)},
eJ(a,b){return A.b_(v.typeUniverse,A.b3(a.a),b)},
dJ(a){return a.a},
eK(a){return a.b},
dG(a){var s,r,q,p=new A.an("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.c(A.am("Field name "+a+" not found.",null))},
cW(a){return v.getIsolateTag(a)},
hK(a){var s,r,q,p,o,n=$.en.$1(a),m=$.cU[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.d_[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.ei.$2(a,n)
if(q!=null){m=$.cU[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.d_[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.d0(s)
$.cU[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.d_[n]=s
return s}if(p==="-"){o=A.d0(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.ep(a,s)
if(p==="*")throw A.c(A.dV(n))
if(v.leafTags[n]===true){o=A.d0(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.ep(a,s)},
ep(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.dz(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
d0(a){return J.dz(a,!1,null,!!a.$iv)},
hM(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.d0(s)
else return J.dz(s,c,null,null)},
hG(){if(!0===$.dx)return
$.dx=!0
A.hH()},
hH(){var s,r,q,p,o,n,m,l
$.cU=Object.create(null)
$.d_=Object.create(null)
A.hF()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.eq.$1(o)
if(n!=null){m=A.hM(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
hF(){var s,r,q,p,o,n,m=B.x()
m=A.aj(B.y,A.aj(B.z,A.aj(B.q,A.aj(B.q,A.aj(B.A,A.aj(B.B,A.aj(B.C(B.p),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.en=new A.cX(p)
$.ei=new A.cY(o)
$.eq=new A.cZ(n)},
aj(a,b){return a(b)||b},
hx(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
hN(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
C:function C(a,b){this.a=a
this.b=b},
ba:function ba(){},
bd:function bd(a,b){this.a=a
this.$ti=b},
aH:function aH(){},
cj:function cj(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aF:function aF(){},
bj:function bj(a,b,c){this.a=a
this.b=b
this.c=c},
bC:function bC(a){this.a=a},
bX:function bX(a){this.a=a},
aq:function aq(a,b){this.a=a
this.b=b},
aU:function aU(a){this.a=a
this.b=null},
S:function S(){},
bP:function bP(){},
bQ:function bQ(){},
c9:function c9(){},
c8:function c8(){},
an:function an(a,b){this.a=a
this.b=b},
bw:function bw(a){this.a=a},
ay:function ay(){},
bU:function bU(a,b){this.a=a
this.b=b
this.c=null},
ax:function ax(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cX:function cX(a){this.a=a},
cY:function cY(a){this.a=a},
cZ:function cZ(a){this.a=a},
af:function af(){},
bJ:function bJ(){},
a6:function a6(){},
aD:function aD(){},
bk:function bk(){},
a7:function a7(){},
aB:function aB(){},
aC:function aC(){},
bl:function bl(){},
bm:function bm(){},
bn:function bn(){},
bo:function bo(){},
bp:function bp(){},
bq:function bq(){},
br:function br(){},
aE:function aE(){},
bs:function bs(){},
aO:function aO(){},
aP:function aP(){},
aQ:function aQ(){},
aR:function aR(){},
de(a,b){var s=b.c
return s==null?b.c=A.aY(a,"a_",[b.x]):s},
dP(a){var s=a.w
if(s===6||s===7)return A.dP(a.x)
return s===11||s===12},
f5(a){return a.as},
cV(a){return A.cL(v.typeUniverse,a,!1)},
V(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.V(a1,s,a3,a4)
if(r===s)return a2
return A.e1(a1,r,!0)
case 7:s=a2.x
r=A.V(a1,s,a3,a4)
if(r===s)return a2
return A.e0(a1,r,!0)
case 8:q=a2.y
p=A.ai(a1,q,a3,a4)
if(p===q)return a2
return A.aY(a1,a2.x,p)
case 9:o=a2.x
n=A.V(a1,o,a3,a4)
m=a2.y
l=A.ai(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.dk(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.ai(a1,j,a3,a4)
if(i===j)return a2
return A.e2(a1,k,i)
case 11:h=a2.x
g=A.V(a1,h,a3,a4)
f=a2.y
e=A.hn(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.e_(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.ai(a1,d,a3,a4)
o=a2.x
n=A.V(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.dl(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.c(A.b7("Attempted to substitute unexpected RTI kind "+a0))}},
ai(a,b,c,d){var s,r,q,p,o=b.length,n=A.cM(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.V(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
ho(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.cM(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.V(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
hn(a,b,c,d){var s,r=b.a,q=A.ai(a,r,c,d),p=b.b,o=A.ai(a,p,c,d),n=b.c,m=A.ho(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.bI()
s.a=q
s.b=o
s.c=m
return s},
l(a,b){a[v.arrayRti]=b
return a},
ek(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.hE(s)
return a.$S()}return null},
hI(a,b){var s
if(A.dP(b))if(a instanceof A.S){s=A.ek(a)
if(s!=null)return s}return A.b3(a)},
b3(a){if(a instanceof A.f)return A.dn(a)
if(Array.isArray(a))return A.dm(a)
return A.dp(J.X(a))},
dm(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
dn(a){var s=a.$ti
return s!=null?s:A.dp(a)},
dp(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.h1(a,s)},
h1(a,b){var s=a instanceof A.S?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.fA(v.typeUniverse,s.name)
b.$ccache=r
return r},
hE(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.cL(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
hD(a){return A.W(A.dn(a))},
ds(a){var s
if(a instanceof A.af)return A.hz(a.$r,a.ar())
s=a instanceof A.S?A.ek(a):null
if(s!=null)return s
if(t.R.b(a))return J.eI(a).a
if(Array.isArray(a))return A.dm(a)
return A.b3(a)},
W(a){var s=a.r
return s==null?a.r=new A.bM(a):s},
hz(a,b){var s,r,q=b,p=q.length
if(p===0)return t.F
if(0>=p)return A.b(q,0)
s=A.b_(v.typeUniverse,A.ds(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.b(q,r)
s=A.e4(v.typeUniverse,s,A.ds(q[r]))}return A.b_(v.typeUniverse,s,a)},
D(a){return A.W(A.cL(v.typeUniverse,a,!1))},
h0(a){var s=this
s.b=A.hl(s)
return s.b(a)},
hl(a){var s,r,q,p
if(a===t.K)return A.h8
if(A.Z(a))return A.hc
s=a.w
if(s===6)return A.fZ
if(s===1)return A.ed
if(s===7)return A.h3
r=A.hk(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.Z)){a.f="$i"+q
if(q==="e")return A.h6
if(a===t.m)return A.h5
return A.hb}}else if(s===10){p=A.hx(a.x,a.y)
return p==null?A.ed:p}return A.fX},
hk(a){if(a.w===8){if(a===t.S)return A.eb
if(a===t.i||a===t.H)return A.h7
if(a===t.N)return A.ha
if(a===t.y)return A.dq}return null},
h_(a){var s=this,r=A.fW
if(A.Z(s))r=A.fO
else if(s===t.K)r=A.fL
else if(A.ak(s)){r=A.fY
if(s===t.Y)r=A.fH
else if(s===t.x)r=A.fN
else if(s===t.u)r=A.fD
else if(s===t.a)r=A.fK
else if(s===t.M)r=A.fF
else if(s===t.B)r=A.fI}else if(s===t.S)r=A.fG
else if(s===t.N)r=A.fM
else if(s===t.y)r=A.fC
else if(s===t.H)r=A.fJ
else if(s===t.i)r=A.fE
else if(s===t.m)r=A.ag
s.a=r
return s.a(a)},
fX(a){var s=this
if(a==null)return A.ak(s)
return A.hJ(v.typeUniverse,A.hI(a,s),s)},
fZ(a){if(a==null)return!0
return this.x.b(a)},
hb(a){var s,r=this
if(a==null)return A.ak(r)
s=r.f
if(a instanceof A.f)return!!a[s]
return!!J.X(a)[s]},
h6(a){var s,r=this
if(a==null)return A.ak(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.f)return!!a[s]
return!!J.X(a)[s]},
h5(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.f)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
ec(a){if(typeof a=="object"){if(a instanceof A.f)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
fW(a){var s=this
if(a==null){if(A.ak(s))return a}else if(s.b(a))return a
throw A.q(A.e7(a,s),new Error())},
fY(a){var s=this
if(a==null||s.b(a))return a
throw A.q(A.e7(a,s),new Error())},
e7(a,b){return new A.aW("TypeError: "+A.dW(a,A.w(b,null)))},
dW(a,b){return A.bR(a)+": type '"+A.w(A.ds(a),null)+"' is not a subtype of type '"+b+"'"},
y(a,b){return new A.aW("TypeError: "+A.dW(a,b))},
h3(a){var s=this
return s.x.b(a)||A.de(v.typeUniverse,s).b(a)},
h8(a){return a!=null},
fL(a){if(a!=null)return a
throw A.q(A.y(a,"Object"),new Error())},
hc(a){return!0},
fO(a){return a},
ed(a){return!1},
dq(a){return!0===a||!1===a},
fC(a){if(!0===a)return!0
if(!1===a)return!1
throw A.q(A.y(a,"bool"),new Error())},
fD(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.q(A.y(a,"bool?"),new Error())},
fE(a){if(typeof a=="number")return a
throw A.q(A.y(a,"double"),new Error())},
fF(a){if(typeof a=="number")return a
if(a==null)return a
throw A.q(A.y(a,"double?"),new Error())},
eb(a){return typeof a=="number"&&Math.floor(a)===a},
fG(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.q(A.y(a,"int"),new Error())},
fH(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.q(A.y(a,"int?"),new Error())},
h7(a){return typeof a=="number"},
fJ(a){if(typeof a=="number")return a
throw A.q(A.y(a,"num"),new Error())},
fK(a){if(typeof a=="number")return a
if(a==null)return a
throw A.q(A.y(a,"num?"),new Error())},
ha(a){return typeof a=="string"},
fM(a){if(typeof a=="string")return a
throw A.q(A.y(a,"String"),new Error())},
fN(a){if(typeof a=="string")return a
if(a==null)return a
throw A.q(A.y(a,"String?"),new Error())},
ag(a){if(A.ec(a))return a
throw A.q(A.y(a,"JSObject"),new Error())},
fI(a){if(a==null)return a
if(A.ec(a))return a
throw A.q(A.y(a,"JSObject?"),new Error())},
eg(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.w(a[q],b)
return s},
hg(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.eg(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.w(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
e8(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.l([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)a4.push("T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.b(a4,l)
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
if(l===8){p=A.hp(a.x)
o=a.y
return o.length>0?p+("<"+A.eg(o,b)+">"):p}if(l===10)return A.hg(a,b)
if(l===11)return A.e8(a,b,null)
if(l===12)return A.e8(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.b(b,n)
return b[n]}return"?"},
hp(a){var s=A.er(a)
if(s!=null)return s
return"minified:"+a},
fB(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
fA(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.cL(a,b,!1)
else if(typeof m=="number"){s=m
r=A.aZ(a,5,"#")
q=A.cM(s)
for(p=0;p<s;++p)q[p]=r
o=A.aY(a,b,q)
n[b]=o
return o}else return m},
fz(a,b){return A.e5(a.tR,b)},
fy(a,b){return A.e5(a.eT,b)},
cL(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.e3(a,null,b,!1)
r.set(b,s)
return s},
b_(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.e3(a,b,c,!0)
q.set(c,r)
return r},
e4(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.dk(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
e3(a,b,c,d){return A.fp(A.fj(a,b,c,d))},
P(a,b){b.a=A.h_
b.b=A.h0
return b},
aZ(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.z(null,null)
s.w=b
s.as=c
r=A.P(a,s)
a.eC.set(c,r)
return r},
e1(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.fw(a,b,r,c)
a.eC.set(r,s)
return s},
fw(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.Z(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.ak(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.z(null,null)
q.w=6
q.x=b
q.as=c
return A.P(a,q)},
e0(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.fu(a,b,r,c)
a.eC.set(r,s)
return s},
fu(a,b,c,d){var s,r
if(d){s=b.w
if(A.Z(b)||b===t.K)return b
else if(s===1)return A.aY(a,"a_",[b])
else if(b===t.P||b===t.T)return t.O}r=new A.z(null,null)
r.w=7
r.x=b
r.as=c
return A.P(a,r)},
fx(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.z(null,null)
s.w=13
s.x=b
s.as=q
r=A.P(a,s)
a.eC.set(q,r)
return r},
aX(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
ft(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
aY(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.aX(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.z(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.P(a,r)
a.eC.set(p,q)
return q},
dk(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.aX(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.z(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.P(a,o)
a.eC.set(q,n)
return n},
e2(a,b,c){var s,r,q="+"+(b+"("+A.aX(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.z(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.P(a,s)
a.eC.set(q,r)
return r},
e_(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.aX(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.aX(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.ft(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.z(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.P(a,p)
a.eC.set(r,o)
return o},
dl(a,b,c,d){var s,r=b.as+("<"+A.aX(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.fv(a,b,c,r,d)
a.eC.set(r,s)
return s},
fv(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.cM(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.V(a,b,r,0)
m=A.ai(a,c,r,0)
return A.dl(a,n,m,c!==m)}}l=new A.z(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.P(a,l)},
fj(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
fp(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.fl(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.dY(a,r,l,k,!1)
else if(q===46)r=A.dY(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.U(a.u,a.e,k.pop()))
break
case 94:k.push(A.fx(a.u,k.pop()))
break
case 35:k.push(A.aZ(a.u,5,"#"))
break
case 64:k.push(A.aZ(a.u,2,"@"))
break
case 126:k.push(A.aZ(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.fn(a,k)
break
case 38:A.fm(a,k)
break
case 63:p=a.u
k.push(A.e1(p,A.U(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.e0(p,A.U(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.fk(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.dZ(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.fq(a.u,a.e,o)
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
return A.U(a.u,a.e,m)},
fl(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
dY(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.fB(s,o.x)[p]
if(n==null)A.d1('No "'+p+'" in "'+A.f5(o)+'"')
d.push(A.b_(s,o,n))}else d.push(p)
return m},
fn(a,b){var s,r=a.u,q=A.dX(a,b),p=b.pop()
if(typeof p=="string")b.push(A.aY(r,p,q))
else{s=A.U(r,a.e,p)
switch(s.w){case 11:b.push(A.dl(r,s,q,a.n))
break
default:b.push(A.dk(r,s,q))
break}}},
fk(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.dX(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.U(p,a.e,o)
q=new A.bI()
q.a=s
q.b=n
q.c=m
b.push(A.e_(p,r,q))
return
case-4:b.push(A.e2(p,b.pop(),s))
return
default:throw A.c(A.b7("Unexpected state under `()`: "+A.m(o)))}},
fm(a,b){var s=b.pop()
if(0===s){b.push(A.aZ(a.u,1,"0&"))
return}if(1===s){b.push(A.aZ(a.u,4,"1&"))
return}throw A.c(A.b7("Unexpected extended operation "+A.m(s)))},
dX(a,b){var s=b.splice(a.p)
A.dZ(a.u,a.e,s)
a.p=b.pop()
return s},
U(a,b,c){if(typeof c=="string")return A.aY(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.fo(a,b,c)}else return c},
dZ(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.U(a,b,c[s])},
fq(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.U(a,b,c[s])},
fo(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.c(A.b7("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.c(A.b7("Bad index "+c+" for "+b.h(0)))},
hJ(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.p(a,b,null,c,null)
r.set(c,s)}return s},
p(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.Z(d))return!0
s=b.w
if(s===4)return!0
if(A.Z(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.p(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.p(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.p(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.p(a,b.x,c,d,e))return!1
return A.p(a,A.de(a,b),c,d,e)}if(s===6)return A.p(a,p,c,d,e)&&A.p(a,b.x,c,d,e)
if(q===7){if(A.p(a,b,c,d.x,e))return!0
return A.p(a,b,c,A.de(a,d),e)}if(q===6)return A.p(a,b,c,p,e)||A.p(a,b,c,d.x,e)
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
if(!A.p(a,j,c,i,e)||!A.p(a,i,e,j,c))return!1}return A.ea(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.ea(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.h4(a,b,c,d,e)}if(o&&q===10)return A.h9(a,b,c,d,e)
return!1},
ea(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
for(;;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!A.p(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
h4(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.b_(a,b,r[o])
return A.e6(a,p,null,c,d.y,e)}return A.e6(a,b.y,null,c,d.y,e)},
e6(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.p(a,b[s],d,e[s],f))return!1
return!0},
h9(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.p(a,r[s],c,q[s],e))return!1
return!0},
ak(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.Z(a))if(s!==6)r=s===7&&A.ak(a.x)
return r},
Z(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
e5(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
cM(a){return a>0?new Array(a):v.typeUniverse.sEA},
z:function z(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
bI:function bI(){this.c=this.b=this.a=null},
bM:function bM(a){this.a=a},
bH:function bH(){},
aW:function aW(a){this.a=a},
fd(){var s,r,q
if(self.scheduleImmediate!=null)return A.hs()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.bO(new A.co(s),1)).observe(r,{childList:true})
return new A.cn(s,r,q)}else if(self.setImmediate!=null)return A.ht()
return A.hu()},
fe(a){self.scheduleImmediate(A.bO(new A.cp(a),0))},
ff(a){self.setImmediate(A.bO(new A.cq(a),0))},
fg(a){A.fr(0,a)},
dT(a,b){var s=B.a.u(a.a,1000)
return A.fs(s,b)},
fr(a,b){var s=new A.aV()
s.aS(a,b)
return s},
fs(a,b){var s=new A.aV()
s.aT(a,b)
return s},
he(a){return new A.bD(new A.u($.o,a.j("u<0>")),a.j("bD<0>"))},
fR(a,b){a.$2(0,null)
b.b=!0
return b.a},
ic(a,b){A.fS(a,b)},
fQ(a,b){var s,r=a==null?b.$ti.c.a(a):a
if(!b.b)b.a.aV(r)
else{s=b.a
if(b.$ti.j("a_<1>").b(r))s.an(r)
else s.ap(r)}},
fP(a,b){var s=A.al(a),r=A.Y(a),q=b.a
if(b.b)q.a1(new A.F(s,r))
else q.al(new A.F(s,r))},
fS(a,b){var s,r,q=new A.cO(b),p=new A.cP(b)
if(a instanceof A.u)a.aA(q,p,t.z)
else{s=t.z
if(a instanceof A.u)a.aL(q,p,s)
else{r=new A.u($.o,t.c)
r.a=8
r.c=a
r.aA(q,p,s)}}},
hr(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.o.aJ(new A.cS(s))},
d6(a){var s
if(t.Q.b(a)){s=a.gK()
if(s!=null)return s}return B.F},
di(a,b,c){var s,r,q,p={},o=p.a=a
while(s=o.a,(s&4)!==0){o=o.c
p.a=o}if(o===b){s=A.f8()
b.al(new A.F(new A.E(!0,o,null,"Cannot complete a future with itself"),s))
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.aw(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.P()
b.M(p.a)
A.ad(b,q)
return}b.a^=2
A.bN(null,null,b.b,new A.cw(p,b))},
ad(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){f=f.c
A.cQ(f.a,f.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.ad(g.a,f)
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
if(r){A.cQ(m.a,m.b)
return}j=$.o
if(j!==k)$.o=k
else j=null
f=f.c
if((f&15)===8)new A.cA(s,g,p).$0()
else if(q){if((f&1)!==0)new A.cz(s,m).$0()}else if((f&2)!==0)new A.cy(g,s).$0()
if(j!=null)$.o=j
f=s.c
if(f instanceof A.u){r=s.a.$ti
r=r.j("a_<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.R(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.di(f,i,!0)
return}}i=s.a.b
h=i.c
i.c=null
b=i.R(h)
f=s.b
r=s.c
if(!f){i.a=8
i.c=r}else{i.a=i.a&1|16
i.c=r}g.a=i
f=i}},
hh(a,b){if(t.C.b(a))return b.aJ(a)
if(t.v.b(a))return a
throw A.c(A.dF(a,"onError",u.c))},
hf(){var s,r
for(s=$.ah;s!=null;s=$.ah){$.b2=null
r=s.b
$.ah=r
if(r==null)$.b1=null
s.a.$0()}},
hm(){$.dr=!0
try{A.hf()}finally{$.b2=null
$.dr=!1
if($.ah!=null)$.dC().$1(A.ej())}},
eh(a){var s=new A.bF(a),r=$.b1
if(r==null){$.ah=$.b1=s
if(!$.dr)$.dC().$1(A.ej())}else $.b1=r.b=s},
hj(a){var s,r,q,p=$.ah
if(p==null){A.eh(a)
$.b2=$.b1
return}s=new A.bF(a)
r=$.b2
if(r==null){s.b=p
$.ah=$.b2=s}else{q=r.b
s.b=q
$.b2=r.b=s
if(q==null)$.b1=s}},
hZ(a){A.du(a,"stream",t.K)
return new A.bK()},
dg(a){return new A.bE(null,a.j("bE<0>"))},
dS(a,b){var s=$.o
if(s===B.b)return A.dT(a,b)
return A.dT(a,s.b6(b,t.J))},
cQ(a,b){A.hj(new A.cR(a,b))},
ee(a,b,c,d){var s,r=$.o
if(r===c)return d.$0()
$.o=c
s=r
try{r=d.$0()
return r}finally{$.o=s}},
ef(a,b,c,d,e){var s,r=$.o
if(r===c)return d.$1(e)
$.o=c
s=r
try{r=d.$1(e)
return r}finally{$.o=s}},
hi(a,b,c,d,e,f){var s,r=$.o
if(r===c)return d.$2(e,f)
$.o=c
s=r
try{r=d.$2(e,f)
return r}finally{$.o=s}},
bN(a,b,c,d){if(B.b!==c){d=c.b5(d)
d=d}A.eh(d)},
co:function co(a){this.a=a},
cn:function cn(a,b,c){this.a=a
this.b=b
this.c=c},
cp:function cp(a){this.a=a},
cq:function cq(a){this.a=a},
aV:function aV(){this.c=0},
cK:function cK(a,b){this.a=a
this.b=b},
cJ:function cJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bD:function bD(a,b){this.a=a
this.b=!1
this.$ti=b},
cO:function cO(a){this.a=a},
cP:function cP(a){this.a=a},
cS:function cS(a){this.a=a},
F:function F(a,b){this.a=a
this.b=b},
bG:function bG(){},
bE:function bE(a,b){var _=this
_.b=a
_.c=0
_.e=_.d=null
_.$ti=b},
ac:function ac(a,b,c,d,e){var _=this
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
ct:function ct(a,b){this.a=a
this.b=b},
cx:function cx(a,b){this.a=a
this.b=b},
cw:function cw(a,b){this.a=a
this.b=b},
cv:function cv(a,b){this.a=a
this.b=b},
cu:function cu(a,b){this.a=a
this.b=b},
cA:function cA(a,b,c){this.a=a
this.b=b
this.c=c},
cB:function cB(a,b){this.a=a
this.b=b},
cC:function cC(a){this.a=a},
cz:function cz(a,b){this.a=a
this.b=b},
cy:function cy(a,b){this.a=a
this.b=b},
bF:function bF(a){this.a=a
this.b=null},
bK:function bK(){},
cN:function cN(){},
cG:function cG(){},
cH:function cH(a,b){this.a=a
this.b=b},
cI:function cI(a,b,c){this.a=a
this.b=b
this.c=c},
cR:function cR(a,b){this.a=a
this.b=b},
f_(a){return new A.aN(a.j("aN<0>"))},
dj(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
fi(a,b,c){var s=new A.ae(a,b,c.j("ae<0>"))
s.c=a.e
return s},
dd(a){var s,r
if(A.dy(a))return"{...}"
s=new A.bA("")
try{r={}
$.x.push(a)
s.a+="{"
r.a=!0
a.ab(0,new A.bV(r,s))
s.a+="}"}finally{if(0>=$.x.length)return A.b($.x,-1)
$.x.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
aN:function aN(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cF:function cF(a){this.a=a
this.c=this.b=null},
ae:function ae(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
k:function k(){},
aA:function aA(){},
bV:function bV(a,b){this.a=a
this.b=b},
aI:function aI(){},
aT:function aT(){},
eQ(a,b){a=A.q(a,new Error())
a.stack=b.h(0)
throw a},
dc(a,b,c){var s,r,q
if(a>4294967295)A.d1(A.f3(a,0,4294967295,"length",null))
s=A.l(new Array(a),c.j("n<0>"))
s.$flags=1
r=s
if(a!==0)for(s=r.length,q=0;q<s;++q)r[q]=b
return r},
f0(a,b,c){var s,r,q=A.l([],c.j("n<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.dB)(a),++r)q.push(a[r])
q.$flags=1
return q},
dQ(a,b,c){var s=J.eH(b)
if(!s.m())return a
if(c.length===0){do a+=A.m(s.gp())
while(s.m())}else{a+=A.m(s.gp())
while(s.m())a=a+c+A.m(s.gp())}return a},
f8(){return A.Y(new Error())},
dL(a){return new A.bb(1000*a)},
bR(a){if(typeof a=="number"||A.dq(a)||a==null)return J.b4(a)
if(typeof a=="string")return JSON.stringify(a)
return A.dO(a)},
eR(a,b){A.du(a,"error",t.K)
A.du(b,"stackTrace",t.l)
A.eQ(a,b)},
b7(a){return new A.b6(a)},
am(a,b){return new A.E(!1,null,b,a)},
dF(a,b,c){return new A.E(!0,a,b,c)},
f2(a){var s=null
return new A.aa(s,s,!1,s,s,a)},
f3(a,b,c,d,e){return new A.aa(b,c,!0,a,d,"Invalid value")},
f4(a,b){return a},
d7(a,b,c,d,e){return new A.be(b,!0,a,e,"Index out of range")},
cm(a){return new A.aL(a)},
dV(a){return new A.bB(a)},
b9(a){return new A.b8(a)},
bS(a,b){if(a<=0)return new A.ap(b.j("ap<0>"))
if(!b.j("0(a)").b(A.el()))throw A.c(A.am("Generator must be supplied or element type must allow integers","generator"))
return new A.aM(a,A.el(),b.j("aM<0>"))},
eX(a,b,c){var s,r
if(A.dy(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.l([],t.s)
$.x.push(a)
try{A.hd(a,s)}finally{if(0>=$.x.length)return A.b($.x,-1)
$.x.pop()}r=A.dQ(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
d9(a,b,c){var s,r
if(A.dy(a))return b+"..."+c
s=new A.bA(b)
$.x.push(a)
try{r=s
r.a=A.dQ(r.a,a,", ")}finally{if(0>=$.x.length)return A.b($.x,-1)
$.x.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
fh(a){return a},
hd(a,b){var s,r,q,p,o,n,m,l=a.gq(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.m())return
s=A.m(l.gp())
b.push(s)
k+=s.length+2;++j}if(!l.m()){if(j<=5)return
if(0>=b.length)return A.b(b,-1)
r=b.pop()
if(0>=b.length)return A.b(b,-1)
q=b.pop()}else{p=l.gp();++j
if(!l.m()){if(j<=4){b.push(A.m(p))
return}r=A.m(p)
if(0>=b.length)return A.b(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gp();++j
for(;l.m();p=o,o=n){n=l.gp();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.b(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=A.m(p)
r=A.m(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.b(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
bY(a,b,c,d){var s
if(B.e===c)return A.dR(B.a.gk(a),J.G(b),$.d4())
if(B.e===d){s=B.a.gk(a)
b=J.G(b)
c=J.G(c)
return A.dh(A.O(A.O(A.O($.d4(),s),b),c))}s=B.a.gk(a)
b=J.G(b)
c=J.G(c)
d=J.G(d)
d=A.dh(A.O(A.O(A.O(A.O($.d4(),s),b),c),d))
return d},
bb:function bb(a){this.a=a},
cr:function cr(){},
j:function j(){},
b6:function b6(a){this.a=a},
H:function H(){},
E:function E(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aa:function aa(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
be:function be(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
aL:function aL(a){this.a=a},
bB:function bB(a){this.a=a},
bz:function bz(a){this.a=a},
b8:function b8(a){this.a=a},
bt:function bt(){},
aJ:function aJ(){},
cs:function cs(a){this.a=a},
T:function T(){},
aM:function aM(a,b,c){this.a=a
this.b=b
this.$ti=c},
t:function t(){},
f:function f(){},
bL:function bL(){},
bA:function bA(a){this.a=a},
cD:function cD(){},
a8:function a8(a,b,c){this.a=a
this.b=b
this.$ti=c},
J:function J(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
L:function L(a){this.a=a},
a5:function a5(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
a9:function a9(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=0},
f6(a,b,c,d,e,f,g,h){var s,r,q,p=A.dM(),o=h*g
p.width=o
s=d*f
p.height=s
r=A.dM()
r.width=o
r.height=s
s=A.l([],t.w)
for(o=A.bS(d,t.z),o=o.gq(o);o.m();){o.gp()
q=B.a.u(h,32)
s.push(new Uint32Array(q+1))}p=new A.bx(!0,d,h,g,f,c,a,p,r,s)
p.aP(a,b,c,d,!0,f,g,h)
return p},
df(a){return new A.C(B.a.u(a,32),31-B.a.i(a,32))},
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
c_:function c_(a){this.a=a},
c0:function c0(a){this.a=a},
c1:function c1(a){this.a=a},
c2:function c2(a){this.a=a},
bZ:function bZ(){},
bW:function bW(a,b){this.a=a
this.b=b},
f9(a,b,c,d,e,f,g){var s,r,q,p,o="white",n=null,m=A.f6("black",b,o,e*(8+d),!0,2,2,a*8),l=A.l([],t.G)
for(s=t.V,r=0;r<e;++r){q=A.l([],s)
for(p=0;p<a;++p)q.push(new A.J(r,p," ",o))
l.push(q)}m=new A.aK(e,a,d,b,!0,m,new A.a9(e,a),new A.a9(e,a),new A.a9(e,a),!1,A.dg(t.N),A.dg(t.W),A.dg(t.q),B.dP,l,A.f_(t.o),B.dN)
m.aR("black",a,b,o,n,!0,2,2,d,e,!1,g,n,n,n,n,n)
return m},
by:function by(a,b){this.a=a
this.b=b},
aK:function aK(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
ch:function ch(a){this.a=a},
cg:function cg(){},
cf:function cf(a){this.a=a},
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
ce:function ce(a){this.a=a},
f7(a,b,c){var s,r,q,p,o,n=A.l([],t.U),m=A.l([],t.I)
for(s=t.z,r=A.bS(a,s),r=r.gq(r),q=t.p;r.m();){r.gp()
p=A.l([],q)
for(o=A.bS(b,s),o=o.gq(o);o.m();){o.gp()
p.push(B.c)}m.push(p)}n=new A.c4(a,b,n,m,B.r)
n.aQ(a,b,c)
return n},
hL(){var s=v.G.document.getElementById("snake")
s.toString
return A.f7(30,30,s)},
B:function B(a,b){this.a=a
this.b=b},
a0:function a0(a,b){this.a=a
this.b=b},
c4:function c4(a,b,c,d,e){var _=this
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
c5:function c5(a){this.a=a},
c7:function c7(a){this.a=a},
c6:function c6(a){this.a=a},
er(a){return v.mangledGlobalNames[a]},
hO(a){throw A.q(new A.a3("Field '"+a+"' has been assigned during initialization."),new Error())},
h(){throw A.q(A.eZ(""),new Error())},
hP(){throw A.q(A.eY(""),new Error())},
b0(a){var s
if(typeof a=="function")throw A.c(A.am("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.fT,a)
s[$.d3()]=a
return s},
e9(a){var s
if(typeof a=="function")throw A.c(A.am("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.fU,a)
s[$.d3()]=a
return s},
fT(a){return a.$0()},
fU(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
dM(){return v.G.document.createElement("canvas")}},B={}
var w=[A,J,B]
var $={}
A.da.prototype={}
J.bf.prototype={
A(a,b){return a===b},
gk(a){return A.aG(a)},
h(a){return"Instance of '"+A.bv(a)+"'"},
gl(a){return A.W(A.dp(this))}}
J.bh.prototype={
h(a){return String(a)},
gk(a){return a?519018:218159},
gl(a){return A.W(t.y)},
$id:1}
J.at.prototype={
A(a,b){return null==b},
h(a){return"null"},
gk(a){return 0},
$id:1}
J.av.prototype={$ii:1}
J.M.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.bu.prototype={}
J.ab.prototype={}
J.K.prototype={
h(a){var s=a[$.et()]
if(s==null)s=a[$.d3()]
if(s==null)return this.aO(a)
return"JavaScript function for "+J.b4(s)}}
J.au.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.aw.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.n.prototype={
bl(a,b){var s
a.$flags&1&&A.d2(a,"remove",1)
for(s=0;s<a.length;++s)if(J.R(a[s],b)){a.splice(s,1)
return!0}return!1},
bd(a,b){var s,r,q=a.length,p=A.dc(q,"",t.N)
for(s=0;s<a.length;++s){r=A.m(a[s])
if(!(s<q))return A.b(p,s)
p[s]=r}return p.join(b)},
b8(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw A.c(A.b9(a))}return s},
b9(a,b,c){return this.b8(a,b,c,t.z)},
gaE(a){if(a.length>0)return a[0]
throw A.c(A.d8())},
gbe(a){var s=a.length
if(s>0)return a[s-1]
throw A.c(A.d8())},
b7(a,b){var s
for(s=0;s<a.length;++s)if(J.R(a[s],b))return!0
return!1},
h(a){return A.d9(a,"[","]")},
gq(a){return new J.b5(a,a.length,A.dm(a).j("b5<1>"))},
gk(a){return A.aG(a)},
gn(a){return a.length},
$ie:1}
J.bg.prototype={
bw(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.bv(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.bT.prototype={}
J.b5.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.c(A.dB(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.a1.prototype={
bv(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.c(A.cm(""+a+".toInt()"))},
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
C(a,b){if((a|0)===a)if(b>=1)return a/b|0
return this.az(a,b)},
u(a,b){return(a|0)===a?a/b|0:this.az(a,b)},
az(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.c(A.cm("Result of truncating division is "+A.m(s)+": "+A.m(a)+" ~/ "+b))},
J(a,b){if(b<0)throw A.c(A.dt(b))
return b>31?0:a<<b>>>0},
b3(a,b){return b>31?0:a<<b>>>0},
aN(a,b){var s
if(b<0)throw A.c(A.dt(b))
if(a>0)s=this.a5(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
b4(a,b){var s
if(a>0)s=this.a5(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
B(a,b){if(0>b)throw A.c(A.dt(b))
return this.a5(a,b)},
a5(a,b){return b>31?0:a>>>b},
gl(a){return A.W(t.H)},
$ir:1}
J.as.prototype={
gl(a){return A.W(t.S)},
$id:1,
$ia:1}
J.bi.prototype={
gl(a){return A.W(t.i)},
$id:1}
J.a2.prototype={
a_(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.c(B.D)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
bi(a,b,c){var s=b-a.length
if(s<=0)return a
return this.a_(c,s)+a},
h(a){return a},
gk(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gl(a){return A.W(t.N)},
gn(a){return a.length},
$id:1,
$iA:1}
A.a3.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.c3.prototype={}
A.ao.prototype={}
A.az.prototype={
gq(a){var s=this
return new A.a4(s,s.gn(s),A.dn(s).j("a4<1>"))}}
A.a4.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.em(q),o=p.gn(q)
if(r.b!==o)throw A.c(A.b9(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.a9(q,s);++r.c
return!0}}
A.ap.prototype={
gq(a){return B.w},
gn(a){return 0}}
A.bc.prototype={
m(){return!1},
gp(){throw A.c(A.d8())}}
A.ar.prototype={}
A.C.prototype={$r:"+(1,2)",$s:1}
A.ba.prototype={
h(a){return A.dd(this)}}
A.bd.prototype={
O(){var s=this,r=s.$map
if(r==null){r=new A.ax(s.$ti.j("ax<1,2>"))
A.hA(s.a,r)
s.$map=r}return r},
a8(a){return this.O().a8(a)},
Z(a,b){return this.O().Z(0,b)},
ab(a,b){this.O().ab(0,b)},
gn(a){return this.O().a}}
A.aH.prototype={}
A.cj.prototype={
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
h(a){return"Null check operator used on a null value"}}
A.bj.prototype={
h(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.bC.prototype={
h(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.bX.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.aq.prototype={}
A.aU.prototype={
h(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iN:1}
A.S.prototype={
h(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.es(r==null?"unknown":r)+"'"},
gbx(){return this},
$C:"$1",
$R:1,
$D:null}
A.bP.prototype={$C:"$0",$R:0}
A.bQ.prototype={$C:"$2",$R:2}
A.c9.prototype={}
A.c8.prototype={
h(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.es(s)+"'"}}
A.an.prototype={
A(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.an))return!1
return this.$_target===b.$_target&&this.a===b.a},
gk(a){return(A.dA(this.a)^A.aG(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.bv(this.a)+"'")}}
A.bw.prototype={
h(a){return"RuntimeError: "+this.a}}
A.ay.prototype={
gn(a){return this.a},
a8(a){var s=this.b
if(s==null)return!1
return s[a]!=null},
Z(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.bc(b)},
bc(a){var s,r,q=this.d
if(q==null)return null
s=this.b0(q,a)
r=this.ad(s,a)
if(r<0)return null
return s[r].b},
ab(a,b){var s=this,r=s.e,q=s.r
while(r!=null){b.$2(r.a,r.b)
if(q!==s.r)throw A.c(A.b9(s))
r=r.c}},
L(a,b){var s=this,r=new A.bU(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&1073741823
return r},
ac(a){return J.G(a)&1073741823},
b0(a,b){return a[this.ac(b)]},
ad(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.R(a[r].a,b))return r
return-1},
h(a){return A.dd(this)}}
A.bU.prototype={}
A.ax.prototype={
ac(a){return A.hv(a)&1073741823},
ad(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.R(a[r].a,b))return r
return-1}}
A.cX.prototype={
$1(a){return this.a(a)},
$S:6}
A.cY.prototype={
$2(a,b){return this.a(a,b)},
$S:7}
A.cZ.prototype={
$1(a){return this.a(a)},
$S:8}
A.af.prototype={
h(a){return this.aB(!1)},
aB(a){var s,r,q,p,o,n=this.aZ(),m=this.ar(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.b(m,q)
o=m[q]
l=a?l+A.dO(o):l+A.m(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
aZ(){var s,r=this.$s
while($.aS.length<=r)$.aS.push(null)
s=$.aS[r]
if(s==null){s=this.aY()
if(!(r<$.aS.length))return A.b($.aS,r)
$.aS[r]=s}return s},
aY(){var s,r,q,p,o,n=this.$r,m=n.indexOf("("),l=n.substring(1,m),k=n.substring(m),j=k==="()"?0:k.replace(/[^,]/g,"").length+1,i=A.l(new Array(j),t.f)
for(s=0;s<j;++s)i[s]=s
if(l!==""){r=l.split(",")
s=r.length
for(q=i.length,p=j;s>0;){--p;--s
o=r[s]
if(!(p>=0&&p<q))return A.b(i,p)
i[p]=o}}i=A.f0(i,!1,t.K)
i.$flags=3
return i}}
A.bJ.prototype={
ar(){return[this.a,this.b]},
A(a,b){if(b==null)return!1
return b instanceof A.bJ&&this.$s===b.$s&&J.R(this.a,b.a)&&J.R(this.b,b.b)},
gk(a){return A.bY(this.$s,this.a,this.b,B.e)}}
A.a6.prototype={
gl(a){return B.dR},
$id:1}
A.aD.prototype={}
A.bk.prototype={
gl(a){return B.dS},
$id:1}
A.a7.prototype={
gn(a){return a.length},
$iv:1}
A.aB.prototype={$ie:1}
A.aC.prototype={$ie:1}
A.bl.prototype={
gl(a){return B.dT},
$id:1}
A.bm.prototype={
gl(a){return B.dU},
$id:1}
A.bn.prototype={
gl(a){return B.dV},
$id:1}
A.bo.prototype={
gl(a){return B.dW},
$id:1}
A.bp.prototype={
gl(a){return B.dX},
$id:1}
A.bq.prototype={
gl(a){return B.dZ},
$id:1}
A.br.prototype={
gl(a){return B.e_},
$id:1,
$icl:1}
A.aE.prototype={
gl(a){return B.e0},
gn(a){return a.length},
$id:1}
A.bs.prototype={
gl(a){return B.e1},
gn(a){return a.length},
$id:1}
A.aO.prototype={}
A.aP.prototype={}
A.aQ.prototype={}
A.aR.prototype={}
A.z.prototype={
j(a){return A.b_(v.typeUniverse,this,a)},
am(a){return A.e4(v.typeUniverse,this,a)}}
A.bI.prototype={}
A.bM.prototype={
h(a){return A.w(this.a,null)}}
A.bH.prototype={
h(a){return this.a}}
A.aW.prototype={$iH:1}
A.co.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:3}
A.cn.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:9}
A.cp.prototype={
$0(){this.a.$0()},
$S:1}
A.cq.prototype={
$0(){this.a.$0()},
$S:1}
A.aV.prototype={
aS(a,b){if(self.setTimeout!=null)self.setTimeout(A.bO(new A.cK(this,b),0),a)
else throw A.c(A.cm("`setTimeout()` not found."))},
aT(a,b){if(self.setTimeout!=null)self.setInterval(A.bO(new A.cJ(this,a,Date.now(),b),0),a)
else throw A.c(A.cm("Periodic timer."))},
$ici:1}
A.cK.prototype={
$0(){this.a.c=1
this.b.$0()},
$S:0}
A.cJ.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.a.C(s,o)}q.c=p
r.d.$1(q)},
$S:1}
A.bD.prototype={}
A.cO.prototype={
$1(a){return this.a.$2(0,a)},
$S:10}
A.cP.prototype={
$2(a,b){this.a.$2(1,new A.aq(a,b))},
$S:11}
A.cS.prototype={
$2(a,b){this.a(a,b)},
$S:12}
A.F.prototype={
h(a){return A.m(this.a)},
$ij:1,
gK(){return this.b}}
A.bG.prototype={}
A.bE.prototype={}
A.ac.prototype={
bf(a){if((this.c&15)!==6)return!0
return this.b.b.ah(this.d,a.a)},
ba(a){var s,r=this.e,q=null,p=a.a,o=this.b.b
if(t.C.b(r))q=o.bo(r,p,a.b)
else q=o.ah(r,p)
try{p=q
return p}catch(s){if(t._.b(A.al(s))){if((this.c&1)!==0)throw A.c(A.am("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.c(A.am("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.u.prototype={
aL(a,b,c){var s,r=$.o
if(r===B.b){if(!t.C.b(b)&&!t.v.b(b))throw A.c(A.dF(b,"onError",u.c))}else b=A.hh(b,r)
s=new A.u(r,c.j("u<0>"))
this.a0(new A.ac(s,3,a,b,this.$ti.j("@<1>").am(c).j("ac<1,2>")))
return s},
aA(a,b,c){var s=new A.u($.o,c.j("u<0>"))
this.a0(new A.ac(s,19,a,b,this.$ti.j("@<1>").am(c).j("ac<1,2>")))
return s},
b2(a){this.a=this.a&1|16
this.c=a},
M(a){this.a=a.a&30|this.a&1
this.c=a.c},
a0(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.a0(a)
return}s.M(r)}A.bN(null,null,s.b,new A.ct(s,a))}},
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
return}n.M(s)}m.a=n.R(a)
A.bN(null,null,n.b,new A.cx(m,n))}},
P(){var s=this.c
this.c=null
return this.R(s)},
R(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
ap(a){var s=this,r=s.P()
s.a=8
s.c=a
A.ad(s,r)},
aX(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.P()
q.M(a)
A.ad(q,r)},
a1(a){var s=this.P()
this.b2(a)
A.ad(this,s)},
aV(a){if(this.$ti.j("a_<1>").b(a)){this.an(a)
return}this.aW(a)},
aW(a){this.a^=2
A.bN(null,null,this.b,new A.cv(this,a))},
an(a){A.di(a,this,!1)
return},
al(a){this.a^=2
A.bN(null,null,this.b,new A.cu(this,a))},
$ia_:1}
A.ct.prototype={
$0(){A.ad(this.a,this.b)},
$S:0}
A.cx.prototype={
$0(){A.ad(this.b,this.a.a)},
$S:0}
A.cw.prototype={
$0(){A.di(this.a.a,this.b,!0)},
$S:0}
A.cv.prototype={
$0(){this.a.ap(this.b)},
$S:0}
A.cu.prototype={
$0(){this.a.a1(this.b)},
$S:0}
A.cA.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.bm(q.d)}catch(p){s=A.al(p)
r=A.Y(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.d6(q)
n=k.a
n.c=new A.F(q,o)
q=n}q.b=!0
return}if(j instanceof A.u&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.u){m=k.b.a
l=new A.u(m.b,m.$ti)
j.aL(new A.cB(l,m),new A.cC(l),t.n)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.cB.prototype={
$1(a){this.a.aX(this.b)},
$S:3}
A.cC.prototype={
$2(a,b){this.a.a1(new A.F(a,b))},
$S:13}
A.cz.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
q.c=p.b.b.ah(p.d,this.b)}catch(o){s=A.al(o)
r=A.Y(o)
q=s
p=r
if(p==null)p=A.d6(q)
n=this.a
n.c=new A.F(q,p)
n.b=!0}},
$S:0}
A.cy.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.bf(s)&&p.a.e!=null){p.c=p.a.ba(s)
p.b=!1}}catch(o){r=A.al(o)
q=A.Y(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.d6(p)
m=l.b
m.c=new A.F(p,n)
p=m}p.b=!0}},
$S:0}
A.bF.prototype={}
A.bK.prototype={}
A.cN.prototype={}
A.cG.prototype={
bq(a){var s,r,q
try{if(B.b===$.o){a.$0()
return}A.ee(null,null,this,a)}catch(q){s=A.al(q)
r=A.Y(q)
A.cQ(s,r)}},
bs(a,b){var s,r,q
try{if(B.b===$.o){a.$1(b)
return}A.ef(null,null,this,a,b)}catch(q){s=A.al(q)
r=A.Y(q)
A.cQ(s,r)}},
bt(a,b){return this.bs(a,b,t.z)},
b5(a){return new A.cH(this,a)},
b6(a,b){return new A.cI(this,a,b)},
bn(a){if($.o===B.b)return a.$0()
return A.ee(null,null,this,a)},
bm(a){return this.bn(a,t.z)},
br(a,b){if($.o===B.b)return a.$1(b)
return A.ef(null,null,this,a,b)},
ah(a,b){var s=t.z
return this.br(a,b,s,s)},
bp(a,b,c){if($.o===B.b)return a.$2(b,c)
return A.hi(null,null,this,a,b,c)},
bo(a,b,c){var s=t.z
return this.bp(a,b,c,s,s,s)},
bk(a){return a},
aJ(a){var s=t.z
return this.bk(a,s,s,s)}}
A.cH.prototype={
$0(){return this.a.bq(this.b)},
$S:0}
A.cI.prototype={
$1(a){return this.a.bt(this.b,a)},
$S(){return this.c.j("~(0)")}}
A.cR.prototype={
$0(){A.eR(this.a,this.b)},
$S:0}
A.aN.prototype={
gq(a){var s=this,r=new A.ae(s,s.r,s.$ti.j("ae<1>"))
r.c=s.e
return r},
gn(a){return this.a},
U(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.ak(s==null?q.b=A.dj():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.ak(r==null?q.c=A.dj():r,b)}else return q.aU(b)},
aU(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.dj()
s=J.G(a)&1073741823
r=p[s]
if(r==null)p[s]=[q.a4(a)]
else{if(q.b_(r,a)>=0)return!1
r.push(q.a4(a))}return!0},
ak(a,b){if(a[b]!=null)return!1
a[b]=this.a4(b)
return!0},
av(){this.r=this.r+1&1073741823},
a4(a){var s,r=this,q=new A.cF(a)
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
for(r=0;r<s;++r)if(J.R(a[r].a,b))return r
return-1}}
A.cF.prototype={}
A.ae.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.c(A.b9(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.k.prototype={
gq(a){return new A.a4(a,a.length,A.b3(a).j("a4<k.E>"))},
a9(a,b){if(!(b<a.length))return A.b(a,b)
return a[b]},
h(a){return A.d9(a,"[","]")}}
A.aA.prototype={
gn(a){return this.a},
h(a){return A.dd(this)}}
A.bV.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.m(a)
r.a=(r.a+=s)+": "
s=A.m(b)
r.a+=s},
$S:14}
A.aI.prototype={
h(a){return A.d9(this,"{","}")}}
A.aT.prototype={}
A.bb.prototype={
A(a,b){if(b==null)return!1
return b instanceof A.bb&&this.a===b.a},
gk(a){return B.a.gk(this.a)},
h(a){var s,r,q,p,o=this.a,n=B.a.u(o,36e8)
o%=36e8
s=B.a.u(o,6e7)
o%=6e7
r=s<10?"0":""
q=B.a.u(o,1e6)
p=q<10?"0":""
return""+n+":"+r+s+":"+p+q+"."+B.l.bi(B.a.h(o%1e6),6,"0")}}
A.cr.prototype={
h(a){return this.N()}}
A.j.prototype={
gK(){return A.f1(this)}}
A.b6.prototype={
h(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.bR(s)
return"Assertion failed"}}
A.H.prototype={}
A.E.prototype={
ga3(){return"Invalid argument"+(!this.a?"(s)":"")},
ga2(){return""},
h(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.ga3()+q+o
if(!s.a)return n
return n+s.ga2()+": "+A.bR(s.gae())},
gae(){return this.b}}
A.aa.prototype={
gae(){return this.b},
ga3(){return"RangeError"},
ga2(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.m(q):""
else if(q==null)s=": Not greater than or equal to "+A.m(r)
else if(q>r)s=": Not in inclusive range "+A.m(r)+".."+A.m(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.m(r)
return s}}
A.be.prototype={
gae(){return this.b},
ga3(){return"RangeError"},
ga2(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gn(a){return this.f}}
A.aL.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.bB.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.bz.prototype={
h(a){return"Bad state: "+this.a}}
A.b8.prototype={
h(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.bR(s)+"."}}
A.bt.prototype={
h(a){return"Out of Memory"},
gK(){return null},
$ij:1}
A.aJ.prototype={
h(a){return"Stack Overflow"},
gK(){return null},
$ij:1}
A.cs.prototype={
h(a){return"Exception: "+this.a}}
A.T.prototype={
gn(a){var s,r=this.gq(this)
for(s=0;r.m();)++s
return s},
a9(a,b){var s,r
A.f4(b,"index")
s=this.gq(this)
for(r=b;s.m();){if(r===0)return s.gp();--r}throw A.c(A.d7(b,b-r,this,null,"index"))},
h(a){return A.eX(this,"(",")")}}
A.aM.prototype={
a9(a,b){var s=this.a
if(b>=s)A.d1(A.d7(b,s,this,null,"index"))
return this.b.$1(b)},
gn(a){return this.a}}
A.t.prototype={
gk(a){return A.f.prototype.gk.call(this,0)},
h(a){return"null"}}
A.f.prototype={$if:1,
A(a,b){return this===b},
gk(a){return A.aG(this)},
h(a){return"Instance of '"+A.bv(this)+"'"},
gl(a){return A.hD(this)},
toString(){return this.h(this)}}
A.bL.prototype={
h(a){return""},
$iN:1}
A.bA.prototype={
gn(a){return this.a.length},
h(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.cD.prototype={
I(a){if(a<=0||a>4294967296)throw A.c(A.f2("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
A.a8.prototype={
h(a){return"Point("+this.a+", "+this.b+")"},
A(a,b){if(b==null)return!1
return b instanceof A.a8&&this.a===b.a&&this.b===b.b},
gk(a){return A.dR(B.a.gk(this.a),B.a.gk(this.b),0)}}
A.J.prototype={
gk(a){var s=this.a,r=this.b
return A.bY(new A.C(s,r).$s,s,r,B.e)},
A(a,b){var s,r,q,p
if(b==null)return!1
if(b instanceof A.J){s=b.a
r=b.b
q=this.a
p=this.b
p=A.bY(new A.C(s,r).$s,s,r,B.e)===A.bY(new A.C(q,p).$s,q,p,B.e)
s=p}else s=!1
return s},
h(a){var s=this
return"("+s.a+" "+s.b+") => '"+s.c+"' "+s.d}}
A.L.prototype={}
A.a5.prototype={
h(a){var s=this
return"               row: "+s.a+"\n            column: "+s.b+"\n         character: '"+s.c+"'\n    characterColor: "+s.d+"\n\n          pixelRow: "+s.e+"\n       pixelColumn: "+s.f+"\n         pixelIsOn: "+s.r+"\n    "}}
A.a9.prototype={
sW(a){var s,r,q,p=this
if(a<0){s=p.d=a
for(r=p.b,q=p.a;s<0;){s+=r
p.d=s
p.c=B.a.i(p.c-1,q)}}else{s=p.b
p.c=B.a.i(p.c+B.a.C(a,s),p.a)
p.d=B.a.i(a,s)}},
gt(){return this.c*this.b+this.d},
st(a){var s=this,r=s.b
s.c=B.a.i(B.a.C(a,r),s.a)
s.d=B.a.i(a,r)}}
A.bx.prototype={
aP(a,b,c,d,e,f,g,h){var s,r=this,q=v.G.document
q.onfocus=A.b0(new A.c_(r))
q.onblur=A.b0(new A.c0(r))
q=r.w
q.tabIndex=-1
q.style.display="block"
q.style.outline="none"
s=q.getContext("2d")
if(s==null)s=A.ag(s)
s.imageSmoothingEnabled=!1
q.onfocus=A.b0(new A.c1(r))
q.onblur=A.b0(new A.c2(r))
b.style.display="flex"
b.style.alignItems="flex-start"
b.style.padding="0"
b.style.margin="0"
b.style.width="fit-content"
b.style.height="fit-content"
b.style.background="gray"
b.appendChild(q)
r.V(0)},
S(a,b){return new A.C(B.a.i(a,this.b),B.a.i(b,this.c))},
ao(){var s=this.x,r=s.getContext("2d")
if(r==null)r=A.ag(r)
r.save()
r.beginPath()
r.clearRect(0,0,s.width,s.height)
r.restore()
return r},
aq(){var s=this.w.getContext("2d")
if(s==null)s=A.ag(s)
s.save()
s.beginPath()
s.drawImage(this.x,0,0)
s.restore()
return s},
E(a,b,c,d){var s,r,q,p,o,n,m=this,l=a<0||a>=m.b||b<0||b>=m.c
if(l)return
s=m.S(a,b)
a=s.a
b=s.b
r=A.df(b)
q=r.a
p=B.a.J(1,r.b)
l=m.y
if(!(a>=0&&a<l.length))return A.b(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.b(l,q)
o=l[q]
l.$flags&2&&A.d2(l)
l[q]=(o|p)>>>0
l[q]=(l[q]^p)>>>0
l=c.getContext("2d")
if(l==null)l=A.ag(l)
l.save()
l.beginPath()
l.fillStyle=m.r
o=m.d
n=m.e
l.fillRect(b*o,a*n,o,n)
l.restore()},
F(a,b,c,d,e){var s,r,q,p,o,n,m=this,l=a<0||a>=m.b||b<0||b>=m.c
if(l)return
s=m.S(a,b)
a=s.a
b=s.b
r=A.df(b)
q=r.a
p=B.a.J(1,r.b)
l=m.y
if(!(a>=0&&a<l.length))return A.b(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.b(l,q)
o=l[q]
l.$flags&2&&A.d2(l)
l[q]=(o|p)>>>0
o=d.getContext("2d")
l=o==null?A.ag(o):o
l.save()
l.beginPath()
l.fillStyle=c
o=m.d
n=m.e
l.fillRect(b*o,a*n,o,n)
l.restore()},
aH(a,b){var s,r,q,p,o=this.S(b,a)
b=o.a
s=A.df(o.b)
r=s.a
q=B.a.J(1,s.b)
p=this.y
if(!(b>=0&&b<p.length))return A.b(p,b)
p=p[b]
if(!(r>=0&&r<p.length))return A.b(p,r)
return(p[r]&q)>>>0>0},
aD(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=this
if(e==null)e=k.c-c
if(b==null)b=k.b-d
k.ao()
if(c===0&&d===0&&e===k.c&&b===k.b){for(s=k.y,r=s.length,q=0;q<r;++q)for(p=0;o=s[q],p<o.length;++p){o.$flags&2&&A.d2(o)
o[p]=0}s=k.x
r=s.getContext("2d")
if(r==null)r=A.ag(r)
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
for(p=c;p<m;++p)k.E(l,B.a.i(p,r),o,!1)}}k.aq()},
V(a){return this.aD(0,null,0,0,null)},
b1(a,b,c,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
d.ao()
s=d.S(a,b)
a=s.a
b=s.b
r=B.a.b3(1,a1)-1
for(q=a2.a,p=a1-1,o=t.t,n=d.x,m=0;m<c.length;++m){l=c[m]
k=(l&r)>>>0
l=A.l([],o)
for(j=a+m,i=0;i<a1;++i){h=d.aH(b+i,j)?1:0
l.push(B.a.J(h,p-i))}g=B.d.b9(l,0,new A.bZ())
switch(q){case 0:for(i=0;i<a1;++i){l=b+i
if((B.a.B(k,p-i)&1)>0)d.F(j,l,a0,n,!1)
else d.E(j,l,n,!1)}break
case 1:for(i=0;i<a1;++i){l=b+i
if((B.a.B(k,p-i)&1)>0)d.E(j,l,n,!1)
else d.F(j,l,a0,n,!1)}break
case 3:for(i=0;i<a1;++i){f=p-i
if((B.a.B(k,f)&1)>0&&(B.a.aN(g,f)&1)===0)d.F(j,b+i,a0,n,!1)}break
case 2:for(i=0;i<a1;++i)if((B.a.B(k,p-i)&1)>0)d.F(j,b+i,a0,n,!1)
break
case 4:for(e=(k&g)>>>0,i=0;i<a1;++i)if((B.a.B(e,p-i)&1)>0)d.F(j,b+i,a0,n,!1)
break
case 5:for(e=(k&g)>>>0,i=0;i<a1;++i)if((B.a.B(e,p-i)&1)>0)d.E(j,b+i,n,!1)
break
case 6:for(e=(k&g)>>>0,i=0;i<a1;++i)if((B.a.B(e,p-i)&1)===0)d.E(j,b+i,n,!1)
break
case 7:for(e=(k&g)>>>0,i=0;i<a1;++i){l=b+i
if((B.a.B(e,p-i)&1)===0)d.E(j,l,n,!1)
else d.F(j,l,a0,n,!1)}break}}d.aq()},
aI(a,b,c){this.b1(c.a,c.b,b,a,8,B.dO,!0,!1,!1)},
gaF(){return this.z&&J.R(v.G.document.activeElement,this.w)},
H(){var s=this.w
s.style.opacity="1.0"
s.focus()},
G(){var s=this.w,r=s.style
r.opacity="0.5"
s.blur()}}
A.c_.prototype={
$0(){this.a.z=!0},
$S:1}
A.c0.prototype={
$0(){this.a.z=!1},
$S:1}
A.c1.prototype={
$0(){this.a.H()},
$S:1}
A.c2.prototype={
$0(){this.a.G()},
$S:1}
A.bZ.prototype={
$2(a,b){return(a|b)>>>0},
$S:15}
A.bW.prototype={
N(){return"Mode."+this.b}}
A.by.prototype={
N(){return"State."+this.b}}
A.aK.prototype={
aR(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=this,r=s.f
r.tabIndex=-1
r.onfocus=A.b0(new A.ca(s))
r.onblur=A.b0(new A.cb(s))
r.onkeydown=A.e9(new A.cc(s,l,new A.cg(),new A.cf(s)))
r.onclick=A.e9(new A.cd(s,new A.ch(s),o))
A.dS(A.dL(300),new A.ce(s))
s.G()
s.V(0)},
gaa(){var s=this.w
s===$&&A.h()
return s.gaa()},
ga7(){var s=this.w
s===$&&A.h()
return s.ga7()},
a6(a,b){return new A.C(B.a.i(a,this.a),B.a.i(b,this.b))},
au(){var s=this,r=s.x
s.CW.U(0,new A.J(r.c,r.d," ","white"))
s.T()
s.cy=!1},
T(){var s,r,q,p,o,n,m,l,k,j,i,h=this
for(s=h.CW,r=A.fi(s,s.r,s.$ti.c),q=h.w,p=h.cx,o=8+h.c,n=r.$ti.c;r.m();){m=r.d
if(m==null)m=n.a(m)
l=m.a
k=m.b
if(p.a8(m.c)){j=p.Z(0,m.c)
j.toString
i=j}else i=$.ev()
q===$&&A.h()
q.aI(m.d,i,new A.C(l*o,k*8))}if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.av()}},
aj(a,b){var s,r=this.a6(b,a)
b=r.a
a=r.b
s=this.ch
if(!(b>=0&&b<s.length))return A.b(s,b)
s=s[b]
if(!(a>=0&&a<s.length))return A.b(s,a)
return s[a].c},
bh(){var s=this.x
s.sW(0)
s.c=B.a.i(s.c+1,s.a)},
ag(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=this,j=e==null?k.x.c:e,i=k.a6(j,c==null?k.x.d:c)
j=k.x
j.c=B.a.i(i.a,j.a)
j.sW(i.b)
if(b==null)b="white"
for(s=a.split(""),r=s.length,q=k.ch,p=k.CW,o=0;o<r;++o){n=s[o]
e=j.c
c=j.d
if(!(e>=0&&e<q.length))return A.b(q,e)
m=q[e]
if(!(c>=0&&c<m.length))return A.b(m,c)
l=m[c]
l.c=n
l.d=b
p.U(0,l)
j.sW(j.d+1)}k.T()
if(d)k.bh()},
D(a,b,c,d){return this.ag(a,b,c,!0,d)},
af(a,b,c){return this.ag(a,null,b,!0,c)},
aG(a,b){return this.ag(a,null,null,b,null)},
V(a){var s,r,q,p,o=this,n=o.b,m=o.a
for(s=o.ch,r=0;r<m;++r)for(q=0;q<n;++q){if(!(r<s.length))return A.b(s,r)
p=s[r]
if(!(q<p.length))return A.b(p,q)
p=p[q]
p.c=" "
p.d="white"}s=o.w
s===$&&A.h()
p=8+o.c
s.aD(0,m*p,0,0*p,n*8)
p=o.x
p.c=0%p.a
p.sW(0)},
bj(a,b,c){var s=this.w
s===$&&A.h()
s.aI("white",b,new A.C(c*(8+this.c),a*8))},
H(){return this.gaa().$0()},
G(){return this.ga7().$0()}}
A.ch.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.w
i===$&&A.h()
s=J.dE(a.offsetX)
r=Math.max(Math.min(B.a.C(J.dE(a.offsetY)-1,i.e),i.b-1),0)
q=Math.max(Math.min(B.a.C(s-1,i.d),i.c-1),0)
p=B.a.C(r,8+j.c)
o=B.a.u(q,8)
n=j.aj(o,p)
m=j.a6(p,o)
l=m.a
k=m.b
j=j.ch
if(!(l>=0&&l<j.length))return A.b(j,l)
j=j[l]
if(!(k>=0&&k<j.length))return A.b(j,k)
return new A.a5(p,o,n,j[k].d,r,q,i.aH(q,r))},
$S:16}
A.cg.prototype={
$1(a){var s=a.keyCode
return new A.L(s)},
$S:17}
A.cf.prototype={
$0(){var s,r,q,p,o,n=this.a,m=n.a,l=n.b,k=new A.a9(m,l)
k.st(n.y.gt())
s=A.l([],t.s)
for(r=n.z,q=r.b;p=k.c,o=k.d,p*l+o<r.c*q+r.d;p=k.c*l+k.d+1,k.c=B.a.i(B.a.C(p,l),m),k.d=B.a.i(p,l))s.push(n.aj(o,p))
return B.d.bd(s,"")},
$S:18}
A.ca.prototype={
$0(){var s=this.a.w
s===$&&A.h()
s.H()},
$S:1}
A.cb.prototype={
$0(){var s=this.a.w
s===$&&A.h()
s.G()},
$S:1}
A.cc.prototype={
$1(a){var s,r,q,p
a.preventDefault()
s=this.a
switch(s.ay.a){case 0:this.b.$2(s,this.c.$1(a))
break
case 1:break
case 2:s.au()
A:{r=a.keyCode
if(13===r)break A
if(8===r){q=s.x
if(q.gt()>s.y.gt()){q.st(q.gt()-1)
s.aG(" ",!1)
q.st(q.gt()-1)}break A}p=a.key
if(p.length===1&&s.x.gt()<s.z.gt())s.aG(p,!1)}break
case 3:break}},
$S:4}
A.cd.prototype={
$1(a){a.preventDefault()},
$S:4}
A.ce.prototype={
$1(a){var s,r=this.a,q=r.w
q===$&&A.h()
if(q.gaF()&&r.ay===B.dQ)if(r.cy)r.au()
else{q=r.x
s=q.c
r.bj(q.d,$.eu(),s)
r.cy=!0}},
$S:5}
A.B.prototype={
N(){return"Value."+this.b}}
A.a0.prototype={
N(){return"GameState."+this.b}}
A.c4.prototype={
aQ(a,b,c){var s=this,r=A.f9(s.b,c,!0,0,s.a+1,!1,new A.c5(s))
s.e!==$&&A.hP()
s.e=r
A.dS(A.dL(100),new A.c6(s))
r.H()},
aM(){var s,r,q,p,o,n=this
switch(n.ay.a){case 0:n.Y(A.l(["Snake!","","Press any key to start!"],t.s))
n.ay=B.k
break
case 3:s=n.e
s===$&&A.h()
r=n.f
s.D("#","red",n.r,r)
n.Y(A.l([" Game Over! ",""," Press any key to "," play again! "],t.s))
n.ay=B.k
break
case 2:s=n.c
if(s.length!==0){q=B.d.gaE(s)
B.d.bl(s,q)
s=q.a
if(s===n.y&&q.b===n.z)n.X()
else{r=n.e
r===$&&A.h()
r.af(" ",q.b,s)}}s=n.ax
s===$&&A.h()
n.at=s
r=n.d
p=n.f
if(!(p>=0&&p<r.length))return A.b(r,p)
p=r[p]
o=n.r
if(!(o>=0&&o<p.length))return A.b(p,o)
p[o]=s
s=n.ch
if(s>0)n.ch=s-1
else n.aK(!1)
n.bb()
s=n.f
if(!(s>=0&&s<r.length))return A.b(r,s)
r=r[s]
p=n.r
o=n.at
if(!(p>=0&&p<r.length))return A.b(r,p)
r[p]=o
o=n.e
o===$&&A.h()
o.D("#","lightgreen",p,s)
break
case 1:break}},
aK(a){var s,r,q=this,p=q.d,o=q.w
if(!(o>=0&&o<p.length))return A.b(p,o)
p=p[o]
s=q.x
if(!(s>=0&&s<p.length))return A.b(p,s)
r=p[s]
p[s]=B.c
p=q.e
if(a){p===$&&A.h()
p.D("+","red",s,o)
q.c.push(new A.a8(q.w,q.x,t.D))}else{p===$&&A.h()
p.af(" ",s,o)}A:{if(B.f===r){q.w=B.a.i(q.w-1,q.a)
break A}if(B.h===r){q.w=B.a.i(q.w+1,q.a)
break A}if(B.i===r){q.x=B.a.i(q.x-1,q.b)
break A}if(B.j===r){q.x=B.a.i(q.x+1,q.b)
break A}break A}},
bb(){var s,r,q,p=this
A:{s=p.at
s===$&&A.h()
if(B.f===s){p.f=B.a.i(p.f-1,p.a)
break A}if(B.h===s){p.f=B.a.i(p.f+1,p.a)
break A}if(B.i===s){p.r=B.a.i(p.r-1,p.b)
break A}if(B.j===s){p.r=B.a.i(p.r+1,p.b)
break A}break A}B:{s=p.d
r=p.f
if(!(r>=0&&r<s.length))return A.b(s,r)
r=s[r]
s=p.r
if(!(s>=0&&s<r.length))return A.b(r,s)
q=r[s]
if(B.n===q){s=p.cx
r=p.as
if(s){p.as=r+30
for(s=A.bS(5,t.z),s=s.gq(s);s.m();){s.gp()
p.aK(!0)}}else{s=p.Q
p.as=r+(s<10?s:20);++p.ch}p.ai()
break B}if(B.o===q){p.ch+=3
break B}if(B.c===q)break B
p.ay=B.u}},
Y(a){return this.bu(a)},
bu(a){var s=0,r=A.he(t.n),q=this,p,o,n,m,l,k
var $async$Y=A.hr(function(b,c){if(b===1)return A.fP(c,r)
for(;;)switch(s){case 0:l=a.length
k=B.a.u(q.a-l,2)
for(p=q.b,o=0;o<a.length;a.length===l||(0,A.dB)(a),++o){n=a[o]
m=q.e
m===$&&A.h()
m.D(n,"white",B.a.u(p-n.length,2),k);++k}return A.fQ(null,r)}})
return A.fR($async$Y,r)},
bg(){var s,r,q,p,o,n=this,m=n.a,l=m/2|0
n.f=l
s=n.b
r=s/2|0
n.r=r
n.w=l
n.x=r
n.CW=n.as=0
n.cx=!1
for(l=n.d,r=l.length,q=0;q<m;++q)for(p=0;p<s;++p){if(!(q<r))return A.b(l,q)
o=l[q]
if(!(p<o.length))return A.b(o,p)
o[p]=B.c}m=[B.f,B.h,B.i,B.j]
s=$.d5().I(4)
if(!(s>=0&&s<4))return A.b(m,s)
s=m[s]
n.ax=n.at=s
m=n.f
if(!(m>=0&&m<l.length))return A.b(l,m)
m=l[m]
l=n.r
if(!(l>=0&&l<m.length))return A.b(m,l)
m[l]=s
n.ai()
n.ay=B.t},
aC(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.a,d=f.b,c=f.d
do{s=$.d5()
r=s.I(e)
q=s.I(d)
if(!(r>=0&&r<c.length))return A.b(c,r)
s=c[r]
if(!(q>=0&&q<s.length))return A.b(s,q)}while(s[q]!==B.c&&Math.abs(r-f.f)+Math.abs(q-f.r)<10)
for(s=t.t,s=[A.l([-1,0],s),A.l([1,0],s),A.l([0,0],s),A.l([0,-1],s),A.l([0,1],s)],p=0;p<5;++p){o=s[p]
n=B.a.i(r+B.d.gaE(o),e)
m=B.a.i(q+B.d.gbe(o),d)
if(!(n<c.length))return A.b(c,n)
l=c[n]
if(!(m<l.length))return A.b(l,m)
if(l[m]===B.c)if(n===r||m===q){l[m]=B.o
l=f.e
l===$&&A.h()
k=B.a.i(n,l.a)
j=B.a.i(m,l.b)
i=l.ch
if(!(k<i.length))return A.b(i,k)
h=i[k]
if(!(j<h.length))return A.b(h,j)
h=h[j]
h.c="x"
g=l.CW
g.U(0,h)
l.T()
if(!(k<i.length))return A.b(i,k)
i=i[k]
if(!(j<i.length))return A.b(i,j)
i=i[j]
i.d="red"
g.U(0,i)
l.T()}}},
X(){var s,r=this,q=r.cx,p=r.e
if(q){p===$&&A.h()
q=r.y
p.D("P","gold",r.z,q)}else{p===$&&A.h()
q=r.Q
q=q<10?""+q:"o"
s=r.y
p.D(q,"gold",r.z,s)}},
ai(){var s,r,q=this,p="Score: "+q.as,o=q.b,n=o-p.length,m=B.a.u(n,2),l=q.e
l===$&&A.h()
s=q.a
l.D(B.l.a_(" ",m)+p+B.l.a_(" ",n-m),"white",0,s)
n=q.d
do{l=$.d5()
q.y=l.I(s)
l=l.I(o)
q.z=l
r=q.y
if(!(r>=0&&r<n.length))return A.b(n,r)
r=n[r]
if(!(l>=0&&l<r.length))return A.b(r,l)}while(r[l]!==B.c)
r[l]=B.n
if(++q.CW%10===0){q.cx=!0
q.Q=3
q.X()}else{q.cx=!1
q.Q=11
q.X()}if(B.a.i(q.CW,13)===0)q.aC()}}
A.c5.prototype={
$2(a,b){var s,r,q,p=this.a,o=new A.c7(p)
A:{s=p.ay
if(B.u===s||B.r===s)break A
if(B.k===s){r=p.e
r===$&&A.h()
r.V(0)
p.bg()
break A}if(B.t===s){switch(b.a){case 38:r=p.ax
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
if(!(r>=0&&r<q.length))return A.b(q,r)
r=q[r]
q=p.z
if(!(q>=0&&q<r.length))return A.b(r,q)
r[q]=B.c
if(!p.cx)p.aC()
p.ai()}else p.X()
break A}}},
$S:19}
A.c7.prototype={
$2(a,b){var s=A.l([B.n,B.o,B.c],t.p),r=this.a,q=r.d,p=B.a.i(a,r.a)
if(!(p<q.length))return A.b(q,p)
p=q[p]
r=B.a.i(b,r.b)
if(!(r<p.length))return A.b(p,r)
return B.d.b7(s,p[r])},
$S:20}
A.c6.prototype={
$1(a){var s=this.a,r=s.e
r===$&&A.h()
r=r.w
r===$&&A.h()
if(r.gaF())s.aM()},
$S:5};(function aliases(){var s=J.M.prototype
s.aO=s.h})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._instance_0u
s(A,"hs","fe",2)
s(A,"ht","ff",2)
s(A,"hu","fg",2)
r(A,"ej","hm",0)
s(A,"el","fh",21)
var p
q(p=A.bx.prototype,"gaa","H",0)
q(p,"ga7","G",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.f,null)
q(A.f,[A.da,J.bf,A.aH,J.b5,A.j,A.c3,A.T,A.a4,A.bc,A.ar,A.af,A.ba,A.cj,A.bX,A.aq,A.aU,A.S,A.aA,A.bU,A.z,A.bI,A.bM,A.aV,A.bD,A.F,A.bG,A.ac,A.u,A.bF,A.bK,A.cN,A.aI,A.cF,A.ae,A.k,A.bb,A.cr,A.bt,A.aJ,A.cs,A.t,A.bL,A.bA,A.cD,A.a8,A.J,A.L,A.a5,A.a9,A.bx,A.aK,A.c4])
q(J.bf,[J.bh,J.at,J.av,J.au,J.aw,J.a1,J.a2])
q(J.av,[J.M,J.n,A.a6,A.aD])
q(J.M,[J.bu,J.ab,J.K])
r(J.bg,A.aH)
r(J.bT,J.n)
q(J.a1,[J.as,J.bi])
q(A.j,[A.a3,A.H,A.bj,A.bC,A.bw,A.bH,A.b6,A.E,A.aL,A.bB,A.bz,A.b8])
r(A.ao,A.T)
q(A.ao,[A.az,A.ap])
r(A.bJ,A.af)
r(A.C,A.bJ)
r(A.bd,A.ba)
r(A.aF,A.H)
q(A.S,[A.bP,A.bQ,A.c9,A.cX,A.cZ,A.co,A.cn,A.cO,A.cB,A.cI,A.ch,A.cg,A.cc,A.cd,A.ce,A.c6])
q(A.c9,[A.c8,A.an])
r(A.ay,A.aA)
r(A.ax,A.ay)
q(A.bQ,[A.cY,A.cP,A.cS,A.cC,A.bV,A.bZ,A.c5,A.c7])
q(A.aD,[A.bk,A.a7])
q(A.a7,[A.aO,A.aQ])
r(A.aP,A.aO)
r(A.aB,A.aP)
r(A.aR,A.aQ)
r(A.aC,A.aR)
q(A.aB,[A.bl,A.bm])
q(A.aC,[A.bn,A.bo,A.bp,A.bq,A.br,A.aE,A.bs])
r(A.aW,A.bH)
q(A.bP,[A.cp,A.cq,A.cK,A.cJ,A.ct,A.cx,A.cw,A.cv,A.cu,A.cA,A.cz,A.cy,A.cH,A.cR,A.c_,A.c0,A.c1,A.c2,A.cf,A.ca,A.cb])
r(A.bE,A.bG)
r(A.cG,A.cN)
r(A.aT,A.aI)
r(A.aN,A.aT)
q(A.E,[A.aa,A.be])
r(A.aM,A.az)
q(A.cr,[A.bW,A.by,A.B,A.a0])
s(A.aO,A.k)
s(A.aP,A.ar)
s(A.aQ,A.k)
s(A.aR,A.ar)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{a:"int",r:"double",eo:"num",A:"String",cT:"bool",t:"Null",e:"List",f:"Object",hW:"Map",i:"JSObject"},mangledNames:{},types:["~()","t()","~(~())","t(@)","t(i)","~(ci)","@(@)","@(@,A)","@(A)","t(~())","~(@)","t(@,N)","~(a,@)","t(f,N)","~(f?,f?)","a(a,a)","a5(i)","L(i)","A()","~(aK,L)","cT(a,a)","a(a)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.C&&a.b(c.a)&&b.b(c.b)}}
A.fz(v.typeUniverse,JSON.parse('{"bu":"M","ab":"M","K":"M","hX":"a6","bh":{"d":[]},"at":{"d":[]},"av":{"i":[]},"M":{"i":[]},"n":{"e":["1"],"i":[]},"bg":{"aH":[]},"bT":{"n":["1"],"e":["1"],"i":[]},"a1":{"r":[]},"as":{"r":[],"a":[],"d":[]},"bi":{"r":[],"d":[]},"a2":{"A":[],"d":[]},"a3":{"j":[]},"ao":{"T":["1"]},"az":{"T":["1"]},"ap":{"T":["1"]},"aF":{"H":[],"j":[]},"bj":{"j":[]},"bC":{"j":[]},"aU":{"N":[]},"bw":{"j":[]},"ay":{"aA":["1","2"]},"ax":{"ay":["1","2"],"aA":["1","2"]},"a6":{"i":[],"d":[]},"aD":{"i":[]},"bk":{"i":[],"d":[]},"a7":{"v":["1"],"i":[]},"aB":{"k":["r"],"e":["r"],"v":["r"],"i":[]},"aC":{"k":["a"],"e":["a"],"v":["a"],"i":[]},"bl":{"k":["r"],"e":["r"],"v":["r"],"i":[],"d":[],"k.E":"r"},"bm":{"k":["r"],"e":["r"],"v":["r"],"i":[],"d":[],"k.E":"r"},"bn":{"k":["a"],"e":["a"],"v":["a"],"i":[],"d":[],"k.E":"a"},"bo":{"k":["a"],"e":["a"],"v":["a"],"i":[],"d":[],"k.E":"a"},"bp":{"k":["a"],"e":["a"],"v":["a"],"i":[],"d":[],"k.E":"a"},"bq":{"k":["a"],"e":["a"],"v":["a"],"i":[],"d":[],"k.E":"a"},"br":{"cl":[],"k":["a"],"e":["a"],"v":["a"],"i":[],"d":[],"k.E":"a"},"aE":{"k":["a"],"e":["a"],"v":["a"],"i":[],"d":[],"k.E":"a"},"bs":{"k":["a"],"e":["a"],"v":["a"],"i":[],"d":[],"k.E":"a"},"bH":{"j":[]},"aW":{"H":[],"j":[]},"aV":{"ci":[]},"F":{"j":[]},"u":{"a_":["1"]},"aN":{"aI":["1"]},"aT":{"aI":["1"]},"b6":{"j":[]},"H":{"j":[]},"E":{"j":[]},"aa":{"j":[]},"be":{"j":[]},"aL":{"j":[]},"bB":{"j":[]},"bz":{"j":[]},"b8":{"j":[]},"bt":{"j":[]},"aJ":{"j":[]},"aM":{"az":["1"],"T":["1"]},"bL":{"N":[]},"eW":{"e":["a"]},"fc":{"e":["a"]},"fb":{"e":["a"]},"eU":{"e":["a"]},"fa":{"e":["a"]},"eV":{"e":["a"]},"cl":{"e":["a"]},"eS":{"e":["r"]},"eT":{"e":["r"]}}'))
A.fy(v.typeUniverse,JSON.parse('{"ao":1,"bc":1,"ar":1,"ba":2,"a7":1,"bG":1,"bK":1,"aT":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.cV
return{o:s("J"),Q:s("j"),Z:s("hV"),V:s("n<J>"),G:s("n<e<J>>"),I:s("n<e<B>>"),f:s("n<f>"),U:s("n<a8<a>>"),s:s("n<A>"),w:s("n<cl>"),p:s("n<B>"),b:s("n<@>"),t:s("n<a>"),T:s("at"),m:s("i"),g:s("K"),E:s("v<@>"),W:s("L"),j:s("e<@>"),q:s("a5"),P:s("t"),K:s("f"),D:s("a8<a>"),L:s("hY"),F:s("+()"),l:s("N"),N:s("A"),J:s("ci"),R:s("d"),_:s("H"),A:s("ab"),c:s("u<@>"),y:s("cT"),i:s("r"),z:s("@"),v:s("@(f)"),C:s("@(f,N)"),S:s("a"),O:s("a_<t>?"),B:s("i?"),X:s("f?"),x:s("A?"),u:s("cT?"),M:s("r?"),Y:s("a?"),a:s("eo?"),H:s("eo"),n:s("~")}})();(function constants(){var s=hunkHelpers.makeConstList
B.G=J.bf.prototype
B.d=J.n.prototype
B.a=J.as.prototype
B.H=J.a1.prototype
B.l=J.a2.prototype
B.I=J.K.prototype
B.J=J.av.prototype
B.v=J.bu.prototype
B.m=J.ab.prototype
B.w=new A.bc()
B.p=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.x=function() {
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
B.C=function(getTagFallback) {
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
B.y=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.B=function(hooks) {
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
B.A=function(hooks) {
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
B.z=function(hooks) {
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
B.q=function(hooks) { return hooks; }

B.D=new A.bt()
B.e=new A.c3()
B.E=new A.cD()
B.b=new A.cG()
B.F=new A.bL()
B.r=new A.a0(0,"titleScreen")
B.k=new A.a0(1,"wait")
B.t=new A.a0(2,"play")
B.u=new A.a0(3,"gameOver")
B.d8=s([126,129,165,129,189,153,129,126],t.t)
B.aa=s([126,255,219,255,195,231,255,126],t.t)
B.dF=s([108,254,254,254,124,56,16,0],t.t)
B.c5=s([16,56,124,254,124,56,16,0],t.t)
B.b3=s([56,124,56,254,254,124,56,124],t.t)
B.bf=s([16,16,56,124,254,124,56,124],t.t)
B.ay=s([0,0,24,60,60,24,0,0],t.t)
B.aB=s([255,255,231,195,195,231,255,255],t.t)
B.aN=s([0,60,102,66,66,102,60,0],t.t)
B.cT=s([255,195,153,189,189,153,195,255],t.t)
B.dE=s([15,7,15,125,204,204,204,120],t.t)
B.dD=s([60,102,102,102,60,24,126,24],t.t)
B.cQ=s([63,51,63,48,48,112,240,224],t.t)
B.U=s([127,99,127,99,99,103,230,192],t.t)
B.Z=s([153,90,60,231,231,60,90,153],t.t)
B.av=s([128,224,248,254,248,224,128,0],t.t)
B.bB=s([2,14,62,254,62,14,2,0],t.t)
B.cj=s([24,60,126,24,24,126,60,24],t.t)
B.cf=s([102,102,102,102,102,0,102,0],t.t)
B.cp=s([127,219,219,123,27,27,27,0],t.t)
B.cq=s([62,99,56,108,108,56,204,120],t.t)
B.bP=s([0,0,0,0,126,126,126,0],t.t)
B.bS=s([24,60,126,24,126,60,24,255],t.t)
B.P=s([24,60,126,24,24,24,24,0],t.t)
B.dd=s([24,24,24,24,126,60,24,0],t.t)
B.d6=s([0,24,12,254,12,24,0,0],t.t)
B.as=s([0,48,96,254,96,48,0,0],t.t)
B.bX=s([0,0,192,192,192,254,0,0],t.t)
B.bu=s([0,36,102,255,102,36,0,0],t.t)
B.a8=s([0,24,60,126,255,255,0,0],t.t)
B.bT=s([0,255,255,126,60,24,0,0],t.t)
B.aZ=s([0,0,0,0,0,0,0,0],t.t)
B.bC=s([48,120,120,48,48,0,48,0],t.t)
B.X=s([108,108,108,0,0,0,0,0],t.t)
B.am=s([108,108,254,108,254,108,108,0],t.t)
B.c0=s([48,124,192,120,12,248,48,0],t.t)
B.O=s([0,198,204,24,48,102,198,0],t.t)
B.cC=s([56,108,56,118,220,204,118,0],t.t)
B.al=s([96,96,192,0,0,0,0,0],t.t)
B.T=s([24,48,96,96,96,48,24,0],t.t)
B.by=s([96,48,24,24,24,48,96,0],t.t)
B.ct=s([0,102,60,255,60,102,0,0],t.t)
B.dM=s([0,48,48,252,48,48,0,0],t.t)
B.c2=s([0,0,0,0,0,48,48,96],t.t)
B.bt=s([0,0,0,252,0,0,0,0],t.t)
B.ch=s([0,0,0,0,0,48,48,0],t.t)
B.a3=s([6,12,24,48,96,192,128,0],t.t)
B.b6=s([124,198,206,222,246,230,124,0],t.t)
B.ck=s([48,112,48,48,48,48,252,0],t.t)
B.bZ=s([120,204,12,56,96,204,252,0],t.t)
B.dH=s([120,204,12,56,12,204,120,0],t.t)
B.bA=s([28,60,108,204,254,12,30,0],t.t)
B.d7=s([252,192,248,12,12,204,120,0],t.t)
B.dp=s([56,96,192,248,204,204,120,0],t.t)
B.c_=s([252,204,12,24,48,48,48,0],t.t)
B.cw=s([120,204,204,120,204,204,120,0],t.t)
B.bd=s([120,204,204,124,12,24,112,0],t.t)
B.d0=s([0,48,48,0,0,48,48,0],t.t)
B.aQ=s([0,48,48,0,0,48,48,96],t.t)
B.bz=s([24,48,96,192,96,48,24,0],t.t)
B.bo=s([0,0,252,0,0,252,0,0],t.t)
B.aA=s([96,48,24,12,24,48,96,0],t.t)
B.aq=s([120,204,12,24,48,0,48,0],t.t)
B.dk=s([124,198,222,222,222,192,120,0],t.t)
B.cb=s([48,120,204,204,252,204,204,0],t.t)
B.aK=s([252,102,102,124,102,102,252,0],t.t)
B.ac=s([60,102,192,192,192,102,60,0],t.t)
B.a4=s([248,108,102,102,102,108,248,0],t.t)
B.ai=s([254,98,104,120,104,98,254,0],t.t)
B.cn=s([254,98,104,120,104,96,240,0],t.t)
B.ao=s([60,102,192,192,206,102,62,0],t.t)
B.ar=s([204,204,204,252,204,204,204,0],t.t)
B.cL=s([120,48,48,48,48,48,120,0],t.t)
B.bN=s([30,12,12,12,204,204,120,0],t.t)
B.bF=s([230,102,108,120,108,102,230,0],t.t)
B.bE=s([240,96,96,96,98,102,254,0],t.t)
B.aL=s([198,238,254,254,214,198,198,0],t.t)
B.W=s([198,230,246,222,206,198,198,0],t.t)
B.cV=s([56,108,198,198,198,108,56,0],t.t)
B.bj=s([252,102,102,124,96,96,240,0],t.t)
B.cF=s([120,204,204,204,220,120,28,0],t.t)
B.N=s([252,102,102,124,108,102,230,0],t.t)
B.af=s([120,204,224,112,28,204,120,0],t.t)
B.dy=s([252,180,48,48,48,48,120,0],t.t)
B.aI=s([204,204,204,204,204,204,252,0],t.t)
B.a0=s([204,204,204,204,204,120,48,0],t.t)
B.cO=s([198,198,198,214,254,238,198,0],t.t)
B.cI=s([198,198,108,56,56,108,198,0],t.t)
B.a2=s([204,204,204,120,48,48,120,0],t.t)
B.R=s([254,198,140,24,50,102,254,0],t.t)
B.bv=s([120,96,96,96,96,96,120,0],t.t)
B.cA=s([192,96,48,24,12,6,2,0],t.t)
B.bx=s([120,24,24,24,24,24,120,0],t.t)
B.dn=s([16,56,108,198,0,0,0,0],t.t)
B.M=s([0,0,0,0,0,0,0,255],t.t)
B.aJ=s([48,48,24,0,0,0,0,0],t.t)
B.de=s([0,0,120,12,124,204,118,0],t.t)
B.ce=s([224,96,96,124,102,102,220,0],t.t)
B.cH=s([0,0,120,204,192,204,120,0],t.t)
B.b4=s([28,12,12,124,204,204,118,0],t.t)
B.dr=s([0,0,120,204,252,192,120,0],t.t)
B.aO=s([56,108,96,240,96,96,240,0],t.t)
B.cE=s([0,0,118,204,204,124,12,248],t.t)
B.az=s([224,96,108,118,102,102,230,0],t.t)
B.cu=s([48,0,112,48,48,48,120,0],t.t)
B.bI=s([12,0,12,12,12,204,204,120],t.t)
B.bb=s([224,96,102,108,120,108,230,0],t.t)
B.bK=s([112,48,48,48,48,48,120,0],t.t)
B.bs=s([0,0,204,254,254,214,198,0],t.t)
B.bL=s([0,0,248,204,204,204,204,0],t.t)
B.be=s([0,0,120,204,204,204,120,0],t.t)
B.dv=s([0,0,220,102,102,124,96,240],t.t)
B.ds=s([0,0,118,204,204,124,12,30],t.t)
B.bp=s([0,0,220,118,102,96,240,0],t.t)
B.cY=s([0,0,124,192,120,12,248,0],t.t)
B.cR=s([16,48,124,48,48,52,24,0],t.t)
B.c8=s([0,0,204,204,204,204,118,0],t.t)
B.b2=s([0,0,204,204,204,120,48,0],t.t)
B.bi=s([0,0,198,214,254,254,108,0],t.t)
B.bG=s([0,0,198,108,56,108,198,0],t.t)
B.dB=s([0,0,204,204,204,124,12,248],t.t)
B.dc=s([0,0,252,152,48,100,252,0],t.t)
B.b8=s([28,48,48,224,48,48,28,0],t.t)
B.cX=s([24,24,24,0,24,24,24,0],t.t)
B.aD=s([224,48,48,28,48,48,224,0],t.t)
B.dL=s([118,220,0,0,0,0,0,0],t.t)
B.b1=s([0,16,56,108,198,198,254,0],t.t)
B.au=s([120,204,192,204,120,24,12,120],t.t)
B.da=s([0,204,0,204,204,204,126,0],t.t)
B.dA=s([28,0,120,204,252,192,120,0],t.t)
B.c1=s([126,195,60,6,62,102,63,0],t.t)
B.ah=s([204,0,120,12,124,204,126,0],t.t)
B.b5=s([224,0,120,12,124,204,126,0],t.t)
B.a7=s([48,48,120,12,124,204,126,0],t.t)
B.bl=s([0,0,120,192,192,120,12,56],t.t)
B.dj=s([126,195,60,102,126,96,60,0],t.t)
B.aM=s([204,0,120,204,252,192,120,0],t.t)
B.cZ=s([224,0,120,204,252,192,120,0],t.t)
B.db=s([204,0,112,48,48,48,120,0],t.t)
B.cP=s([124,198,56,24,24,24,60,0],t.t)
B.aY=s([224,0,112,48,48,48,120,0],t.t)
B.dG=s([198,56,108,198,254,198,198,0],t.t)
B.cW=s([48,48,0,120,204,252,204,0],t.t)
B.bD=s([28,0,252,96,120,96,252,0],t.t)
B.dz=s([0,0,127,12,127,204,127,0],t.t)
B.aR=s([62,108,204,254,204,204,206,0],t.t)
B.dt=s([120,204,0,120,204,204,120,0],t.t)
B.ad=s([0,204,0,120,204,204,120,0],t.t)
B.dI=s([0,224,0,120,204,204,120,0],t.t)
B.aP=s([120,204,0,204,204,204,126,0],t.t)
B.cS=s([0,224,0,204,204,204,126,0],t.t)
B.ax=s([0,204,0,204,204,124,12,248],t.t)
B.aj=s([195,24,60,102,102,60,24,0],t.t)
B.d4=s([204,0,204,204,204,204,120,0],t.t)
B.Y=s([24,24,126,192,192,126,24,24],t.t)
B.aG=s([56,108,100,240,96,230,252,0],t.t)
B.b_=s([204,204,120,252,48,252,48,48],t.t)
B.df=s([248,204,204,250,198,207,198,199],t.t)
B.bO=s([14,27,24,60,24,24,216,112],t.t)
B.aC=s([28,0,120,12,124,204,126,0],t.t)
B.cd=s([56,0,112,48,48,48,120,0],t.t)
B.aF=s([0,28,0,120,204,204,120,0],t.t)
B.cx=s([0,28,0,204,204,204,126,0],t.t)
B.aV=s([0,248,0,248,204,204,204,0],t.t)
B.cN=s([252,0,204,236,252,220,204,0],t.t)
B.ae=s([60,108,108,62,0,126,0,0],t.t)
B.ca=s([56,108,108,56,0,124,0,0],t.t)
B.d5=s([48,0,48,96,192,204,120,0],t.t)
B.aX=s([0,0,0,252,192,192,0,0],t.t)
B.aE=s([0,0,0,252,12,12,0,0],t.t)
B.d_=s([195,198,204,222,51,102,204,15],t.t)
B.aw=s([195,198,204,219,55,111,207,3],t.t)
B.bR=s([24,24,0,24,24,24,24,0],t.t)
B.bQ=s([0,51,102,204,102,51,0,0],t.t)
B.ba=s([0,204,102,51,102,204,0,0],t.t)
B.cz=s([34,136,34,136,34,136,34,136],t.t)
B.du=s([85,170,85,170,85,170,85,170],t.t)
B.bJ=s([219,119,219,238,219,119,219,238],t.t)
B.b0=s([24,24,24,24,24,24,24,24],t.t)
B.aW=s([24,24,24,24,248,24,24,24],t.t)
B.bY=s([24,24,248,24,248,24,24,24],t.t)
B.dK=s([54,54,54,54,246,54,54,54],t.t)
B.cl=s([0,0,0,0,254,54,54,54],t.t)
B.aS=s([0,0,248,24,248,24,24,24],t.t)
B.ab=s([54,54,246,6,246,54,54,54],t.t)
B.cr=s([54,54,54,54,54,54,54,54],t.t)
B.c9=s([0,0,254,6,246,54,54,54],t.t)
B.cv=s([54,54,246,6,254,0,0,0],t.t)
B.ap=s([54,54,54,54,254,0,0,0],t.t)
B.a1=s([24,24,248,24,248,0,0,0],t.t)
B.a6=s([0,0,0,0,248,24,24,24],t.t)
B.a_=s([24,24,24,24,31,0,0,0],t.t)
B.bW=s([24,24,24,24,255,0,0,0],t.t)
B.bn=s([0,0,0,0,255,24,24,24],t.t)
B.d3=s([24,24,24,24,31,24,24,24],t.t)
B.bU=s([0,0,0,0,255,0,0,0],t.t)
B.cs=s([24,24,24,24,255,24,24,24],t.t)
B.cD=s([24,24,31,24,31,24,24,24],t.t)
B.bc=s([54,54,54,54,55,54,54,54],t.t)
B.dq=s([54,54,55,48,63,0,0,0],t.t)
B.di=s([0,0,63,48,55,54,54,54],t.t)
B.bH=s([54,54,247,0,255,0,0,0],t.t)
B.bw=s([0,0,255,0,247,54,54,54],t.t)
B.aU=s([54,54,55,48,55,54,54,54],t.t)
B.aT=s([0,0,255,0,255,0,0,0],t.t)
B.dC=s([54,54,247,0,247,54,54,54],t.t)
B.cJ=s([24,24,255,0,255,0,0,0],t.t)
B.K=s([54,54,54,54,255,0,0,0],t.t)
B.dw=s([0,0,255,0,255,24,24,24],t.t)
B.c3=s([0,0,0,0,255,54,54,54],t.t)
B.cm=s([54,54,54,54,63,0,0,0],t.t)
B.br=s([24,24,31,24,31,0,0,0],t.t)
B.cg=s([0,0,31,24,31,24,24,24],t.t)
B.cG=s([0,0,0,0,63,54,54,54],t.t)
B.cM=s([54,54,54,54,255,54,54,54],t.t)
B.bM=s([24,24,255,24,255,24,24,24],t.t)
B.dg=s([24,24,24,24,248,0,0,0],t.t)
B.b7=s([0,0,0,0,31,24,24,24],t.t)
B.c4=s([255,255,255,255,255,255,255,255],t.t)
B.c7=s([0,0,0,0,255,255,255,255],t.t)
B.bh=s([240,240,240,240,240,240,240,240],t.t)
B.co=s([15,15,15,15,15,15,15,15],t.t)
B.d2=s([255,255,255,255,0,0,0,0],t.t)
B.dJ=s([0,0,118,220,200,220,118,0],t.t)
B.dl=s([0,120,204,248,204,248,192,192],t.t)
B.an=s([0,252,204,192,192,192,192,0],t.t)
B.c6=s([0,254,108,108,108,108,108,0],t.t)
B.dh=s([252,204,96,48,96,204,252,0],t.t)
B.bk=s([0,0,126,216,216,216,112,0],t.t)
B.bq=s([0,102,102,102,102,124,96,192],t.t)
B.cB=s([0,118,220,24,24,24,24,0],t.t)
B.ag=s([252,48,120,204,204,120,48,252],t.t)
B.aH=s([56,108,198,254,198,108,56,0],t.t)
B.ak=s([56,108,198,198,108,108,238,0],t.t)
B.L=s([28,48,24,124,204,204,120,0],t.t)
B.dx=s([0,0,126,219,219,126,0,0],t.t)
B.bm=s([6,12,126,219,219,126,96,192],t.t)
B.a9=s([56,96,192,248,192,96,56,0],t.t)
B.ci=s([120,204,204,204,204,204,204,0],t.t)
B.cK=s([0,252,0,252,0,252,0,0],t.t)
B.a5=s([48,48,252,48,48,0,252,0],t.t)
B.b9=s([96,48,24,48,96,0,252,0],t.t)
B.cU=s([24,48,96,48,24,0,252,0],t.t)
B.bg=s([14,27,27,24,24,24,24,24],t.t)
B.d9=s([24,24,24,24,24,216,216,112],t.t)
B.cc=s([48,48,0,252,0,48,48,0],t.t)
B.Q=s([0,118,220,0,118,220,0,0],t.t)
B.cy=s([56,108,108,56,0,0,0,0],t.t)
B.S=s([0,0,0,24,24,0,0,0],t.t)
B.dm=s([0,0,0,0,24,0,0,0],t.t)
B.V=s([15,12,12,12,236,108,60,28],t.t)
B.bV=s([120,108,108,108,108,0,0,0],t.t)
B.at=s([112,24,48,96,120,0,0,0],t.t)
B.d1=s([0,0,60,60,60,60,0,0],t.t)
B.dN=new A.bd(["\u263a",B.d8,"\u263b",B.aa,"\u2665",B.dF,"\u2666",B.c5,"\u2663",B.b3,"\u2660",B.bf,"\u2022",B.ay,"\u25d8",B.aB,"\u25cb",B.aN,"\u25d9",B.cT,"\u2642",B.dE,"\u2640",B.dD,"\u266a",B.cQ,"\u266b",B.U,"\u263c",B.Z,"\u25ba",B.av,"\u25c4",B.bB,"\u2195",B.cj,"\u203c",B.cf,"\xb6",B.cp,"\xa7",B.cq,"\u25ac",B.bP,"\u21a8",B.bS,"\u2191",B.P,"\u2193",B.dd,"\u2192",B.d6,"\u2190",B.as,"\u221f",B.bX,"\u2194",B.bu,"\u25b2",B.a8,"\u25bc",B.bT," ",B.aZ,"!",B.bC,'"',B.X,"#",B.am,"$",B.c0,"%",B.O,"&",B.cC,"'",B.al,"(",B.T,")",B.by,"*",B.ct,"+",B.dM,",",B.c2,"-",B.bt,".",B.ch,"/",B.a3,"0",B.b6,"1",B.ck,"2",B.bZ,"3",B.dH,"4",B.bA,"5",B.d7,"6",B.dp,"7",B.c_,"8",B.cw,"9",B.bd,":",B.d0,";",B.aQ,"<",B.bz,"=",B.bo,">",B.aA,"?",B.aq,"@",B.dk,"A",B.cb,"B",B.aK,"C",B.ac,"D",B.a4,"E",B.ai,"F",B.cn,"G",B.ao,"H",B.ar,"I",B.cL,"J",B.bN,"K",B.bF,"L",B.bE,"M",B.aL,"N",B.W,"O",B.cV,"P",B.bj,"Q",B.cF,"R",B.N,"S",B.af,"T",B.dy,"U",B.aI,"V",B.a0,"W",B.cO,"X",B.cI,"Y",B.a2,"Z",B.R,"[",B.bv,"\\",B.cA,"]",B.bx,"^",B.dn,"_",B.M,"`",B.aJ,"a",B.de,"b",B.ce,"c",B.cH,"d",B.b4,"e",B.dr,"f",B.aO,"g",B.cE,"h",B.az,"i",B.cu,"j",B.bI,"k",B.bb,"l",B.bK,"m",B.bs,"n",B.bL,"o",B.be,"p",B.dv,"q",B.ds,"r",B.bp,"s",B.cY,"t",B.cR,"u",B.c8,"v",B.b2,"w",B.bi,"x",B.bG,"y",B.dB,"z",B.dc,"{",B.b8,"|",B.cX,"}",B.aD,"~",B.dL,"\u2302",B.b1,"\xc7",B.au,"\xfc",B.da,"\xe9",B.dA,"\xe2",B.c1,"\xe4",B.ah,"\xe0",B.b5,"\xe5",B.a7,"\xe7",B.bl,"\xea",B.dj,"\xeb",B.aM,"\xe8",B.cZ,"\xef",B.db,"\xee",B.cP,"\xec",B.aY,"\xc4",B.dG,"\xc5",B.cW,"\xc9",B.bD,"\xe6",B.dz,"\xc6",B.aR,"\xf4",B.dt,"\xf6",B.ad,"\xf2",B.dI,"\xfb",B.aP,"\xf9",B.cS,"\xff",B.ax,"\xd6",B.aj,"\xdc",B.d4,"\xa2",B.Y,"\xa3",B.aG,"\xa5",B.b_,"\u20a7",B.df,"\u0192",B.bO,"\xe1",B.aC,"\xed",B.cd,"\xf3",B.aF,"\xfa",B.cx,"\xf1",B.aV,"\xd1",B.cN,"\xaa",B.ae,"\xba",B.ca,"\xbf",B.d5,"\u2310",B.aX,"\xac",B.aE,"\xbd",B.d_,"\xbc",B.aw,"\xa1",B.bR,"\xab",B.bQ,"\xbb",B.ba,"\u2591",B.cz,"\u2592",B.du,"\u2593",B.bJ,"\u2502",B.b0,"\u2524",B.aW,"\u2561",B.bY,"\u2562",B.dK,"\u2556",B.cl,"\u2555",B.aS,"\u2563",B.ab,"\u2551",B.cr,"\u2557",B.c9,"\u255d",B.cv,"\u255c",B.ap,"\u255b",B.a1,"\u2510",B.a6,"\u2514",B.a_,"\u2534",B.bW,"\u252c",B.bn,"\u251c",B.d3,"\u2500",B.bU,"\u253c",B.cs,"\u255e",B.cD,"\u255f",B.bc,"\u255a",B.dq,"\u2554",B.di,"\u2569",B.bH,"\u2566",B.bw,"\u2560",B.aU,"\u2550",B.aT,"\u256c",B.dC,"\u2567",B.cJ,"\u2568",B.K,"\u2564",B.dw,"\u2565",B.c3,"\u2559",B.cm,"\u2558",B.br,"\u2552",B.cg,"\u2553",B.cG,"\u256b",B.cM,"\u256a",B.bM,"\u2518",B.dg,"\u250c",B.b7,"\u2588",B.c4,"\u2584",B.c7,"\u258c",B.bh,"\u2590",B.co,"\u2580",B.d2,"\u03b1",B.dJ,"\xdf",B.dl,"\u0393",B.an,"\u03c0",B.c6,"\u03a3",B.dh,"\u03c3",B.bk,"\xb5",B.bq,"\u03c4",B.cB,"\u03a6",B.ag,"\u0398",B.aH,"\u03a9",B.ak,"\u03b4",B.L,"\u221e",B.dx,"\u03c6",B.bm,"\u03b5",B.a9,"\u2229",B.ci,"\u2261",B.cK,"\xb1",B.a5,"\u2265",B.b9,"\u2264",B.cU,"\u2320",B.bg,"\u2321",B.d9,"\xf7",B.cc,"\u2248",B.Q,"\xb0",B.cy,"\u2219",B.S,"\xb7",B.dm,"\u221a",B.V,"\u207f",B.bV,"\xb2",B.at,"\u25a0",B.d1],A.cV("bd<A,e<a>>"))
B.dO=new A.bW(0,"replace")
B.dP=new A.by(0,"ready")
B.dQ=new A.by(2,"awaitingString")
B.dR=A.D("hR")
B.dS=A.D("hS")
B.dT=A.D("eS")
B.dU=A.D("eT")
B.dV=A.D("eU")
B.dW=A.D("eV")
B.dX=A.D("eW")
B.dY=A.D("f")
B.dZ=A.D("fa")
B.e_=A.D("cl")
B.e0=A.D("fb")
B.e1=A.D("fc")
B.c=new A.B(0,"nothing")
B.n=new A.B(1,"apple")
B.f=new A.B(2,"up")
B.h=new A.B(3,"down")
B.i=new A.B(4,"left")
B.j=new A.B(5,"right")
B.o=new A.B(6,"brick")})();(function staticFields(){$.cE=null
$.x=A.l([],t.f)
$.dN=null
$.dI=null
$.dH=null
$.en=null
$.ei=null
$.eq=null
$.cU=null
$.d_=null
$.dx=null
$.aS=A.l([],A.cV("n<e<f>?>"))
$.ah=null
$.b1=null
$.b2=null
$.dr=!1
$.o=B.b})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"hU","et",()=>A.cW("_$dart_dartClosure"))
s($,"hT","d3",()=>A.cW("_$dart_dartClosure_dartJSInterop"))
s($,"ie","eG",()=>A.l([new J.bg()],A.cV("n<aH>")))
s($,"i1","ew",()=>A.I(A.ck({
toString:function(){return"$receiver$"}})))
s($,"i2","ex",()=>A.I(A.ck({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"i3","ey",()=>A.I(A.ck(null)))
s($,"i4","ez",()=>A.I(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"i7","eC",()=>A.I(A.ck(void 0)))
s($,"i8","eD",()=>A.I(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"i6","eB",()=>A.I(A.dU(null)))
s($,"i5","eA",()=>A.I(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"ia","eF",()=>A.I(A.dU(void 0)))
s($,"i9","eE",()=>A.I(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"ib","dC",()=>A.fd())
s($,"id","d4",()=>A.dA(B.dY))
s($,"i0","ev",()=>A.dc(8,0,t.S))
s($,"i_","eu",()=>A.dc(8,255,t.S))
s($,"ih","d5",()=>B.E)})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.a6,SharedArrayBuffer:A.a6,ArrayBufferView:A.aD,DataView:A.bk,Float32Array:A.bl,Float64Array:A.bm,Int16Array:A.bn,Int32Array:A.bo,Int8Array:A.bp,Uint16Array:A.bq,Uint32Array:A.br,Uint8ClampedArray:A.aE,CanvasPixelArray:A.aE,Uint8Array:A.bs})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.a7.$nativeSuperclassTag="ArrayBufferView"
A.aO.$nativeSuperclassTag="ArrayBufferView"
A.aP.$nativeSuperclassTag="ArrayBufferView"
A.aB.$nativeSuperclassTag="ArrayBufferView"
A.aQ.$nativeSuperclassTag="ArrayBufferView"
A.aR.$nativeSuperclassTag="ArrayBufferView"
A.aC.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.hL
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=snake.js.map
