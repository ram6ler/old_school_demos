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
dw(a,b,c,d){return{i:a,p:b,e:c,x:d}},
du(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.dv==null){A.ht()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.b(A.dV("Return interceptor for "+A.o(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.cF
if(o==null)o=$.cF=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.hy(a)
if(p!=null)return p
if(typeof a=="function")return B.K
s=Object.getPrototypeOf(a)
if(s==null)return B.x
if(s===Object.prototype)return B.x
if(typeof q=="function"){o=$.cF
if(o==null)o=$.cF=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.q,enumerable:false,writable:true,configurable:true})
return B.q}return B.q},
a0(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ao.prototype
return J.bc.prototype}if(typeof a=="string")return J.a4.prototype
if(a==null)return J.ap.prototype
if(typeof a=="boolean")return J.bb.prototype
if(Array.isArray(a))return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.N.prototype
if(typeof a=="symbol")return J.as.prototype
if(typeof a=="bigint")return J.aq.prototype
return a}if(a instanceof A.i)return a
return J.du(a)},
ep(a){if(typeof a=="string")return J.a4.prototype
if(a==null)return a
if(Array.isArray(a))return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.N.prototype
if(typeof a=="symbol")return J.as.prototype
if(typeof a=="bigint")return J.aq.prototype
return a}if(a instanceof A.i)return a
return J.du(a)},
hn(a){if(a==null)return a
if(Array.isArray(a))return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.N.prototype
if(typeof a=="symbol")return J.as.prototype
if(typeof a=="bigint")return J.aq.prototype
return a}if(a instanceof A.i)return a
return J.du(a)},
ho(a){if(typeof a=="number")return J.a3.prototype
if(a==null)return a
if(!(a instanceof A.i))return J.ad.prototype
return a},
W(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.a0(a).u(a,b)},
E(a){return J.a0(a).gj(a)},
eJ(a){return J.hn(a).gag(a)},
dB(a){return J.ep(a).gm(a)},
eK(a){return J.a0(a).gl(a)},
dC(a){return J.ho(a).bu(a)},
b_(a){return J.a0(a).h(a)},
ba:function ba(){},
bb:function bb(){},
ap:function ap(){},
ar:function ar(){},
P:function P(){},
bq:function bq(){},
ad:function ad(){},
N:function N(){},
aq:function aq(){},
as:function as(){},
n:function n(a){this.$ti=a},
bR:function bR(a){this.$ti=a},
b1:function b1(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
a3:function a3(){},
ao:function ao(){},
bc:function bc(){},
a4:function a4(){}},A={d7:function d7(){},
R(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
df(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
dQ(a,b,c){return A.df(A.R(A.R(c,a),b))},
dR(a,b,c,d,e){return A.df(A.R(A.R(A.R(A.R(e,a),b),c),d))},
dr(a,b,c){return a},
et(a){var s,r
for(s=$.L.length,r=0;r<s;++r)if(a===$.L[r])return!0
return!1},
dK(){return new A.bu("No element")},
a5:function a5(a){this.a=a},
br:function br(a){this.a=a},
c1:function c1(){},
be:function be(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
an:function an(){},
ew(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
ii(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.E.b(a)},
o(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.b_(a)
return s},
aB(a){var s,r=$.dL
if(r==null)r=$.dL=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
bW(a){return A.f2(a)},
f2(a){var s,r,q,p
if(a instanceof A.i)return A.v(A.aY(a),null)
s=J.a0(a)
if(s===B.J||s===B.L||t.B.b(a)){r=B.u(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.v(A.aY(a),null)},
dM(a){if(a==null||typeof a=="number"||A.dm(a))return J.b_(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.Y)return a.h(0)
if(a instanceof A.ag)return a.aC(!0)
return"Instance of '"+A.bW(a)+"'"},
f3(a){var s=a.$thrownJsError
if(s==null)return null
return A.J(s)},
er(a){throw A.b(A.cT(a))},
d(a,b){if(a==null)J.dB(a)
throw A.b(A.eo(a,b))},
eo(a,b){var s,r="index"
if(!A.ef(b))return new A.y(!0,b,r,null)
s=J.dB(a)
if(b<0||b>=s)return A.eX(b,s,a,r)
return new A.aa(null,null,!0,b,r,"Value not in range")},
cT(a){return new A.y(!0,a,null,null)},
b(a){return A.es(new Error(),a)},
es(a,b){var s
if(b==null)b=new A.F()
a.dartException=b
s=A.hG
if("defineProperty" in Object){Object.defineProperty(a,"message",{get:s})
a.name=""}else a.toString=s
return a},
hG(){return J.b_(this.dartException)},
dz(a){throw A.b(a)},
d_(a,b){throw A.es(b,a)},
d0(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.d_(A.fL(a,b,c),s)},
fL(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.aF("'"+s+"': Cannot "+o+" "+l+k+n)},
dy(a){throw A.b(A.b5(a))},
G(a){var s,r,q,p,o,n
a=A.hC(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.a([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.ch(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
ci(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
dU(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
d8(a,b){var s=b==null,r=s?null:b.method
return new A.bd(a,r,s?null:b.receiver)},
V(a){if(a==null)return new A.bU(a)
if(a instanceof A.am)return A.U(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.U(a,a.dartException)
return A.hc(a)},
U(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
hc(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.a.b5(r,16)&8191)===10)switch(q){case 438:return A.U(a,A.d8(A.o(s)+" (Error "+q+")",null))
case 445:case 5007:A.o(s)
return A.U(a,new A.aA())}}if(a instanceof TypeError){p=$.ez()
o=$.eA()
n=$.eB()
m=$.eC()
l=$.eF()
k=$.eG()
j=$.eE()
$.eD()
i=$.eI()
h=$.eH()
g=p.t(s)
if(g!=null)return A.U(a,A.d8(s,g))
else{g=o.t(s)
if(g!=null){g.method="call"
return A.U(a,A.d8(s,g))}else if(n.t(s)!=null||m.t(s)!=null||l.t(s)!=null||k.t(s)!=null||j.t(s)!=null||m.t(s)!=null||i.t(s)!=null||h.t(s)!=null)return A.U(a,new A.aA())}return A.U(a,new A.bx(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.aD()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.U(a,new A.y(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.aD()
return a},
J(a){var s
if(a instanceof A.am)return a.b
if(a==null)return new A.aP(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.aP(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
dx(a){if(a==null)return J.E(a)
if(typeof a=="object")return A.aB(a)
return J.E(a)},
hi(a){if(typeof a=="number")return B.o.gj(a)
if(a instanceof A.bK)return A.aB(a)
if(a instanceof A.ag)return a.gj(a)
return A.dx(a)},
hm(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=a.length
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
k=n}j=b.ad(q)
i=k[j]
if(i==null)k[j]=[b.M(q,p)]
else{r=b.ae(i,q)
if(r>=0)i[r].b=p
else i.push(b.M(q,p))}}}return b},
fT(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.b(A.eU("Unsupported number of arguments for wrapped closure"))},
bN(a,b){var s=a.$identity
if(!!s)return s
s=A.hj(a,b)
a.$identity=s
return s},
hj(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.fT)},
eR(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.c6().constructor.prototype):Object.create(new A.al(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.dI(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.eN(a1,h,g)
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
eN(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.eL)}throw A.b("Error in functionType of tearoff")},
eO(a,b,c,d){var s=A.dH
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
dI(a,b,c,d){if(c)return A.eQ(a,b,d)
return A.eO(b.length,d,a,b)},
eP(a,b,c,d){var s=A.dH,r=A.eM
switch(b?-1:a){case 0:throw A.b(new A.bs("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
eQ(a,b,c){var s,r
if($.dF==null)$.dF=A.dE("interceptor")
if($.dG==null)$.dG=A.dE("receiver")
s=b.length
r=A.eP(s,c,a,b)
return r},
ds(a){return A.eR(a)},
eL(a,b){return A.aV(v.typeUniverse,A.aY(a.a),b)},
dH(a){return a.a},
eM(a){return a.b},
dE(a){var s,r,q,p=new A.al("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.b(A.b0("Field name "+a+" not found.",null))},
ik(a){throw A.b(new A.bC(a))},
hp(a){return v.getIsolateTag(a)},
hy(a){var s,r,q,p,o,n=$.eq.$1(a),m=$.cU[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.cY[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.el.$2(a,n)
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
return o.i}if(p==="+")return A.eu(a,s)
if(p==="*")throw A.b(A.dV(n))
if(v.leafTags[n]===true){o=A.cZ(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.eu(a,s)},
eu(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.dw(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
cZ(a){return J.dw(a,!1,null,!!a.$iw)},
hA(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.cZ(s)
else return J.dw(s,c,null,null)},
ht(){if(!0===$.dv)return
$.dv=!0
A.hu()},
hu(){var s,r,q,p,o,n,m,l
$.cU=Object.create(null)
$.cY=Object.create(null)
A.hs()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.ev.$1(o)
if(n!=null){m=A.hA(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
hs(){var s,r,q,p,o,n,m=B.A()
m=A.ak(B.B,A.ak(B.C,A.ak(B.v,A.ak(B.v,A.ak(B.D,A.ak(B.E,A.ak(B.F(B.u),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.eq=new A.cV(p)
$.el=new A.cW(o)
$.ev=new A.cX(n)},
ak(a,b){return a(b)||b},
hk(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
hC(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
A:function A(a,b){this.a=a
this.b=b},
b6:function b6(){},
b8:function b8(a,b){this.a=a
this.$ti=b},
ch:function ch(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aA:function aA(){},
bd:function bd(a,b,c){this.a=a
this.b=b
this.c=c},
bx:function bx(a){this.a=a},
bU:function bU(a){this.a=a},
am:function am(a,b){this.a=a
this.b=b},
aP:function aP(a){this.a=a
this.b=null},
Y:function Y(){},
bO:function bO(){},
bP:function bP(){},
c7:function c7(){},
c6:function c6(){},
al:function al(a,b){this.a=a
this.b=b},
bC:function bC(a){this.a=a},
bs:function bs(a){this.a=a},
au:function au(){},
bS:function bS(a,b){this.a=a
this.b=b
this.c=null},
at:function at(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cV:function cV(a){this.a=a},
cW:function cW(a){this.a=a},
cX:function cX(a){this.a=a},
ag:function ag(){},
bG:function bG(){},
Z(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.eo(b,a))},
bf:function bf(){},
ay:function ay(){},
bg:function bg(){},
a7:function a7(){},
aw:function aw(){},
ax:function ax(){},
bh:function bh(){},
bi:function bi(){},
bj:function bj(){},
bk:function bk(){},
bl:function bl(){},
bm:function bm(){},
bn:function bn(){},
az:function az(){},
bo:function bo(){},
aJ:function aJ(){},
aK:function aK(){},
aL:function aL(){},
aM:function aM(){},
dN(a,b){var s=b.c
return s==null?b.c=A.dj(a,b.x,!0):s},
dc(a,b){var s=b.c
return s==null?b.c=A.aT(a,"a1",[b.x]):s},
dO(a){var s=a.w
if(s===6||s===7||s===8)return A.dO(a.x)
return s===12||s===13},
f6(a){return a.as},
dt(a){return A.bL(v.typeUniverse,a,!1)},
T(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.T(a1,s,a3,a4)
if(r===s)return a2
return A.e5(a1,r,!0)
case 7:s=a2.x
r=A.T(a1,s,a3,a4)
if(r===s)return a2
return A.dj(a1,r,!0)
case 8:s=a2.x
r=A.T(a1,s,a3,a4)
if(r===s)return a2
return A.e3(a1,r,!0)
case 9:q=a2.y
p=A.aj(a1,q,a3,a4)
if(p===q)return a2
return A.aT(a1,a2.x,p)
case 10:o=a2.x
n=A.T(a1,o,a3,a4)
m=a2.y
l=A.aj(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.dh(a1,n,l)
case 11:k=a2.x
j=a2.y
i=A.aj(a1,j,a3,a4)
if(i===j)return a2
return A.e4(a1,k,i)
case 12:h=a2.x
g=A.T(a1,h,a3,a4)
f=a2.y
e=A.h9(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.e2(a1,g,e)
case 13:d=a2.y
a4+=d.length
c=A.aj(a1,d,a3,a4)
o=a2.x
n=A.T(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.di(a1,n,c,!0)
case 14:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.b(A.b3("Attempted to substitute unexpected RTI kind "+a0))}},
aj(a,b,c,d){var s,r,q,p,o=b.length,n=A.cM(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.T(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
ha(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.cM(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.T(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
h9(a,b,c,d){var s,r=b.a,q=A.aj(a,r,c,d),p=b.b,o=A.aj(a,p,c,d),n=b.c,m=A.ha(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.bF()
s.a=q
s.b=o
s.c=m
return s},
a(a,b){a[v.arrayRti]=b
return a},
en(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.hr(s)
return a.$S()}return null},
hv(a,b){var s
if(A.dO(b))if(a instanceof A.Y){s=A.en(a)
if(s!=null)return s}return A.aY(a)},
aY(a){if(a instanceof A.i)return A.ed(a)
if(Array.isArray(a))return A.dk(a)
return A.dl(J.a0(a))},
dk(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
ed(a){var s=a.$ti
return s!=null?s:A.dl(a)},
dl(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.fS(a,s)},
fS(a,b){var s=a instanceof A.Y?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.fB(v.typeUniverse,s.name)
b.$ccache=r
return r},
hr(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.bL(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
hq(a){return A.a_(A.ed(a))},
dp(a){var s
if(a instanceof A.ag)return A.hl(a.$r,a.au())
s=a instanceof A.Y?A.en(a):null
if(s!=null)return s
if(t.R.b(a))return J.eK(a).a
if(Array.isArray(a))return A.dk(a)
return A.aY(a)},
a_(a){var s=a.r
return s==null?a.r=A.e9(a):s},
e9(a){var s,r,q=a.as,p=q.replace(/\*/g,"")
if(p===q)return a.r=new A.bK(a)
s=A.bL(v.typeUniverse,p,!0)
r=s.r
return r==null?s.r=A.e9(s):r},
hl(a,b){var s,r,q=b,p=q.length
if(p===0)return t.F
if(0>=p)return A.d(q,0)
s=A.aV(v.typeUniverse,A.dp(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.d(q,r)
s=A.e6(v.typeUniverse,s,A.dp(q[r]))}return A.aV(v.typeUniverse,s,a)},
B(a){return A.a_(A.bL(v.typeUniverse,a,!1))},
fR(a){var s,r,q,p,o,n,m=this
if(m===t.K)return A.I(m,a,A.fY)
if(!A.K(m))s=m===t._
else s=!0
if(s)return A.I(m,a,A.h1)
s=m.w
if(s===7)return A.I(m,a,A.fP)
if(s===1)return A.I(m,a,A.eg)
r=s===6?m.x:m
q=r.w
if(q===8)return A.I(m,a,A.fU)
if(r===t.S)p=A.ef
else if(r===t.i||r===t.H)p=A.fX
else if(r===t.N)p=A.h_
else p=r===t.y?A.dm:null
if(p!=null)return A.I(m,a,p)
if(q===9){o=r.x
if(r.y.every(A.hw)){m.f="$i"+o
if(o==="f")return A.I(m,a,A.fW)
return A.I(m,a,A.h0)}}else if(q===11){n=A.hk(r.x,r.y)
return A.I(m,a,n==null?A.eg:n)}return A.I(m,a,A.fN)},
I(a,b,c){a.b=c
return a.b(b)},
fQ(a){var s,r=this,q=A.fM
if(!A.K(r))s=r===t._
else s=!0
if(s)q=A.fE
else if(r===t.K)q=A.fD
else{s=A.aZ(r)
if(s)q=A.fO}r.a=q
return r.a(a)},
bM(a){var s=a.w,r=!0
if(!A.K(a))if(!(a===t._))if(!(a===t.A))if(s!==7)if(!(s===6&&A.bM(a.x)))r=s===8&&A.bM(a.x)||a===t.P||a===t.T
return r},
fN(a){var s=this
if(a==null)return A.bM(s)
return A.hx(v.typeUniverse,A.hv(a,s),s)},
fP(a){if(a==null)return!0
return this.x.b(a)},
h0(a){var s,r=this
if(a==null)return A.bM(r)
s=r.f
if(a instanceof A.i)return!!a[s]
return!!J.a0(a)[s]},
fW(a){var s,r=this
if(a==null)return A.bM(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.i)return!!a[s]
return!!J.a0(a)[s]},
fM(a){var s=this
if(a==null){if(A.aZ(s))return a}else if(s.b(a))return a
A.ea(a,s)},
fO(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.ea(a,s)},
ea(a,b){throw A.b(A.fs(A.dW(a,A.v(b,null))))},
dW(a,b){return A.bQ(a)+": type '"+A.v(A.dp(a),null)+"' is not a subtype of type '"+b+"'"},
fs(a){return new A.aR("TypeError: "+a)},
u(a,b){return new A.aR("TypeError: "+A.dW(a,b))},
fU(a){var s=this,r=s.w===6?s.x:s
return r.x.b(a)||A.dc(v.typeUniverse,r).b(a)},
fY(a){return a!=null},
fD(a){if(a!=null)return a
throw A.b(A.u(a,"Object"))},
h1(a){return!0},
fE(a){return a},
eg(a){return!1},
dm(a){return!0===a||!1===a},
i0(a){if(!0===a)return!0
if(!1===a)return!1
throw A.b(A.u(a,"bool"))},
i2(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b(A.u(a,"bool"))},
i1(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b(A.u(a,"bool?"))},
i3(a){if(typeof a=="number")return a
throw A.b(A.u(a,"double"))},
i5(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.u(a,"double"))},
i4(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.u(a,"double?"))},
ef(a){return typeof a=="number"&&Math.floor(a)===a},
i6(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.b(A.u(a,"int"))},
i8(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b(A.u(a,"int"))},
i7(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b(A.u(a,"int?"))},
fX(a){return typeof a=="number"},
i9(a){if(typeof a=="number")return a
throw A.b(A.u(a,"num"))},
ib(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.u(a,"num"))},
ia(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.u(a,"num?"))},
h_(a){return typeof a=="string"},
ic(a){if(typeof a=="string")return a
throw A.b(A.u(a,"String"))},
ie(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b(A.u(a,"String"))},
id(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b(A.u(a,"String?"))},
ej(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.v(a[q],b)
return s},
h4(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.ej(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.v(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
eb(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", ",a3=null
if(a6!=null){s=a6.length
if(a5==null)a5=A.a([],t.s)
else a3=a5.length
r=a5.length
for(q=s;q>0;--q)a5.push("T"+(r+q))
for(p=t.X,o=t._,n="<",m="",q=0;q<s;++q,m=a2){l=a5.length
k=l-1-q
if(!(k>=0))return A.d(a5,k)
n=n+m+a5[k]
j=a6[q]
i=j.w
if(!(i===2||i===3||i===4||i===5||j===p))l=j===o
else l=!0
if(!l)n+=" extends "+A.v(j,a5)}n+=">"}else n=""
p=a4.x
h=a4.y
g=h.a
f=g.length
e=h.b
d=e.length
c=h.c
b=c.length
a=A.v(p,a5)
for(a0="",a1="",q=0;q<f;++q,a1=a2)a0+=a1+A.v(g[q],a5)
if(d>0){a0+=a1+"["
for(a1="",q=0;q<d;++q,a1=a2)a0+=a1+A.v(e[q],a5)
a0+="]"}if(b>0){a0+=a1+"{"
for(a1="",q=0;q<b;q+=3,a1=a2){a0+=a1
if(c[q+1])a0+="required "
a0+=A.v(c[q+2],a5)+" "+c[q]}a0+="}"}if(a3!=null){a5.toString
a5.length=a3}return n+"("+a0+") => "+a},
v(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6)return A.v(a.x,b)
if(l===7){s=a.x
r=A.v(s,b)
q=s.w
return(q===12||q===13?"("+r+")":r)+"?"}if(l===8)return"FutureOr<"+A.v(a.x,b)+">"
if(l===9){p=A.hb(a.x)
o=a.y
return o.length>0?p+("<"+A.ej(o,b)+">"):p}if(l===11)return A.h4(a,b)
if(l===12)return A.eb(a,b,null)
if(l===13)return A.eb(a.x,b,a.y)
if(l===14){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.d(b,n)
return b[n]}return"?"},
hb(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
fC(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
fB(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.bL(a,b,!1)
else if(typeof m=="number"){s=m
r=A.aU(a,5,"#")
q=A.cM(s)
for(p=0;p<s;++p)q[p]=r
o=A.aT(a,b,q)
n[b]=o
return o}else return m},
fA(a,b){return A.e7(a.tR,b)},
fz(a,b){return A.e7(a.eT,b)},
bL(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.e0(A.dZ(a,null,b,c))
r.set(b,s)
return s},
aV(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.e0(A.dZ(a,b,c,!0))
q.set(c,r)
return r},
e6(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.dh(a,b,c.w===10?c.y:[c])
p.set(s,q)
return q},
H(a,b){b.a=A.fQ
b.b=A.fR
return b},
aU(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.x(null,null)
s.w=b
s.as=c
r=A.H(a,s)
a.eC.set(c,r)
return r},
e5(a,b,c){var s,r=b.as+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.fx(a,b,r,c)
a.eC.set(r,s)
return s},
fx(a,b,c,d){var s,r,q
if(d){s=b.w
if(!A.K(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.x(null,null)
q.w=6
q.x=b
q.as=c
return A.H(a,q)},
dj(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.fw(a,b,r,c)
a.eC.set(r,s)
return s},
fw(a,b,c,d){var s,r,q,p
if(d){s=b.w
r=!0
if(!A.K(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.aZ(b.x)
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.x
if(q.w===8&&A.aZ(q.x))return q
else return A.dN(a,b)}}p=new A.x(null,null)
p.w=7
p.x=b
p.as=c
return A.H(a,p)},
e3(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.fu(a,b,r,c)
a.eC.set(r,s)
return s},
fu(a,b,c,d){var s,r
if(d){s=b.w
if(A.K(b)||b===t.K||b===t._)return b
else if(s===1)return A.aT(a,"a1",[b])
else if(b===t.P||b===t.T)return t.O}r=new A.x(null,null)
r.w=8
r.x=b
r.as=c
return A.H(a,r)},
fy(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.x(null,null)
s.w=14
s.x=b
s.as=q
r=A.H(a,s)
a.eC.set(q,r)
return r},
aS(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
ft(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
aT(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.aS(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.x(null,null)
r.w=9
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.H(a,r)
a.eC.set(p,q)
return q},
dh(a,b,c){var s,r,q,p,o,n
if(b.w===10){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.aS(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.x(null,null)
o.w=10
o.x=s
o.y=r
o.as=q
n=A.H(a,o)
a.eC.set(q,n)
return n},
e4(a,b,c){var s,r,q="+"+(b+"("+A.aS(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.x(null,null)
s.w=11
s.x=b
s.y=c
s.as=q
r=A.H(a,s)
a.eC.set(q,r)
return r},
e2(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.aS(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.aS(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.ft(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.x(null,null)
p.w=12
p.x=b
p.y=c
p.as=r
o=A.H(a,p)
a.eC.set(r,o)
return o},
di(a,b,c,d){var s,r=b.as+("<"+A.aS(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.fv(a,b,c,r,d)
a.eC.set(r,s)
return s},
fv(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.cM(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.T(a,b,r,0)
m=A.aj(a,c,r,0)
return A.di(a,n,m,c!==m)}}l=new A.x(null,null)
l.w=13
l.x=b
l.y=c
l.as=d
return A.H(a,l)},
dZ(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
e0(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.fl(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.e_(a,r,l,k,!1)
else if(q===46)r=A.e_(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.S(a.u,a.e,k.pop()))
break
case 94:k.push(A.fy(a.u,k.pop()))
break
case 35:k.push(A.aU(a.u,5,"#"))
break
case 64:k.push(A.aU(a.u,2,"@"))
break
case 126:k.push(A.aU(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.fn(a,k)
break
case 38:A.fm(a,k)
break
case 42:p=a.u
k.push(A.e5(p,A.S(p,a.e,k.pop()),a.n))
break
case 63:p=a.u
k.push(A.dj(p,A.S(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.e3(p,A.S(p,a.e,k.pop()),a.n))
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
A.e1(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.fp(a.u,a.e,o)
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
return A.S(a.u,a.e,m)},
fl(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
e_(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===10)o=o.x
n=A.fC(s,o.x)[p]
if(n==null)A.dz('No "'+p+'" in "'+A.f6(o)+'"')
d.push(A.aV(s,o,n))}else d.push(p)
return m},
fn(a,b){var s,r=a.u,q=A.dY(a,b),p=b.pop()
if(typeof p=="string")b.push(A.aT(r,p,q))
else{s=A.S(r,a.e,p)
switch(s.w){case 12:b.push(A.di(r,s,q,a.n))
break
default:b.push(A.dh(r,s,q))
break}}},
fk(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.dY(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.S(p,a.e,o)
q=new A.bF()
q.a=s
q.b=n
q.c=m
b.push(A.e2(p,r,q))
return
case-4:b.push(A.e4(p,b.pop(),s))
return
default:throw A.b(A.b3("Unexpected state under `()`: "+A.o(o)))}},
fm(a,b){var s=b.pop()
if(0===s){b.push(A.aU(a.u,1,"0&"))
return}if(1===s){b.push(A.aU(a.u,4,"1&"))
return}throw A.b(A.b3("Unexpected extended operation "+A.o(s)))},
dY(a,b){var s=b.splice(a.p)
A.e1(a.u,a.e,s)
a.p=b.pop()
return s},
S(a,b,c){if(typeof c=="string")return A.aT(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.fo(a,b,c)}else return c},
e1(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.S(a,b,c[s])},
fp(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.S(a,b,c[s])},
fo(a,b,c){var s,r,q=b.w
if(q===10){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==9)throw A.b(A.b3("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.b(A.b3("Bad index "+c+" for "+b.h(0)))},
hx(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.m(a,b,null,c,null,!1)?1:0
r.set(c,s)}if(0===s)return!1
if(1===s)return!0
return!0},
m(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(!A.K(d))s=d===t._
else s=!0
if(s)return!0
r=b.w
if(r===4)return!0
if(A.K(b))return!1
s=b.w
if(s===1)return!0
q=r===14
if(q)if(A.m(a,c[b.x],c,d,e,!1))return!0
p=d.w
s=b===t.P||b===t.T
if(s){if(p===8)return A.m(a,b,c,d.x,e,!1)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return A.m(a,b.x,c,d,e,!1)
if(r===6)return A.m(a,b.x,c,d,e,!1)
return r!==7}if(r===6)return A.m(a,b.x,c,d,e,!1)
if(p===6){s=A.dN(a,d)
return A.m(a,b,c,s,e,!1)}if(r===8){if(!A.m(a,b.x,c,d,e,!1))return!1
return A.m(a,A.dc(a,b),c,d,e,!1)}if(r===7){s=A.m(a,t.P,c,d,e,!1)
return s&&A.m(a,b.x,c,d,e,!1)}if(p===8){if(A.m(a,b,c,d.x,e,!1))return!0
return A.m(a,b,c,A.dc(a,d),e,!1)}if(p===7){s=A.m(a,b,c,t.P,e,!1)
return s||A.m(a,b,c,d.x,e,!1)}if(q)return!1
s=r!==12
if((!s||r===13)&&d===t.Z)return!0
o=r===11
if(o&&d===t.L)return!0
if(p===13){if(b===t.g)return!0
if(r!==13)return!1
n=b.y
m=d.y
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.m(a,j,c,i,e,!1)||!A.m(a,i,e,j,c,!1))return!1}return A.ee(a,b.x,c,d.x,e,!1)}if(p===12){if(b===t.g)return!0
if(s)return!1
return A.ee(a,b,c,d,e,!1)}if(r===9){if(p!==9)return!1
return A.fV(a,b,c,d,e,!1)}if(o&&p===11)return A.fZ(a,b,c,d,e,!1)
return!1},
ee(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.m(a3,a4.x,a5,a6.x,a7,!1))return!1
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
if(!A.m(a3,p[h],a7,g,a5,!1))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.m(a3,p[o+h],a7,g,a5,!1))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.m(a3,k[h],a7,g,a5,!1))return!1}f=s.c
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
if(!A.m(a3,e[a+2],a7,g,a5,!1))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
fV(a,b,c,d,e,f){var s,r,q,p,o,n=b.x,m=d.x
for(;n!==m;){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.aV(a,b,r[o])
return A.e8(a,p,null,c,d.y,e,!1)}return A.e8(a,b.y,null,c,d.y,e,!1)},
e8(a,b,c,d,e,f,g){var s,r=b.length
for(s=0;s<r;++s)if(!A.m(a,b[s],d,e[s],f,!1))return!1
return!0},
fZ(a,b,c,d,e,f){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.m(a,r[s],c,q[s],e,!1))return!1
return!0},
aZ(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.K(a))if(s!==7)if(!(s===6&&A.aZ(a.x)))r=s===8&&A.aZ(a.x)
return r},
hw(a){var s
if(!A.K(a))s=a===t._
else s=!0
return s},
K(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
e7(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
cM(a){return a>0?new Array(a):v.typeUniverse.sEA},
x:function x(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
bF:function bF(){this.c=this.b=this.a=null},
bK:function bK(a){this.a=a},
bD:function bD(){},
aR:function aR(a){this.a=a},
fe(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.hf()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.bN(new A.cm(q),1)).observe(s,{childList:true})
return new A.cl(q,s,r)}else if(self.setImmediate!=null)return A.hg()
return A.hh()},
ff(a){self.scheduleImmediate(A.bN(new A.cn(a),0))},
fg(a){self.setImmediate(A.bN(new A.co(a),0))},
fh(a){A.fq(0,a)},
dT(a,b){var s=B.a.q(a.a,1000)
return A.fr(s<0?0:s,b)},
fq(a,b){var s=new A.aQ()
s.aU(a,b)
return s},
fr(a,b){var s=new A.aQ()
s.aV(a,b)
return s},
h2(a){return new A.by(new A.p($.l,a.k("p<0>")),a.k("by<0>"))},
fH(a,b){a.$2(0,null)
b.b=!0
return b.a},
ig(a,b){A.fI(a,b)},
fG(a,b){var s,r=a==null?b.$ti.c.a(a):a
if(!b.b)b.a.aX(r)
else{s=b.a
if(b.$ti.k("a1<1>").b(r))s.ap(r)
else s.a1(r)}},
fF(a,b){var s=A.V(a),r=A.J(a),q=b.a
if(b.b)q.F(s,r)
else q.a0(s,r)},
fI(a,b){var s,r,q=new A.cO(b),p=new A.cP(b)
if(a instanceof A.p)a.aB(q,p,t.z)
else{s=t.z
if(a instanceof A.p)a.ak(q,p,s)
else{r=new A.p($.l,t.d)
r.a=8
r.c=a
r.aB(q,p,s)}}},
hd(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.l.aM(new A.cS(s))},
d4(a){var s
if(t.Q.b(a)){s=a.gL()
if(s!=null)return s}return B.I},
dX(a,b){var s,r
for(;s=a.a,(s&4)!==0;)a=a.c
if(a===b){b.a0(new A.y(!0,a,null,"Cannot complete a future with itself"),A.dP())
return}s|=b.a&1
a.a=s
if((s&24)!==0){r=b.a6()
b.N(a)
A.aH(b,r)}else{r=b.c
b.az(a)
a.a5(r)}},
fi(a,b){var s,r,q={},p=q.a=a
for(;s=p.a,(s&4)!==0;){p=p.c
q.a=p}if(p===b){b.a0(new A.y(!0,p,null,"Cannot complete a future with itself"),A.dP())
return}if((s&24)===0){r=b.c
b.az(p)
q.a.a5(r)
return}if((s&16)===0&&b.c==null){b.N(p)
return}b.a^=2
A.ai(null,null,b.b,new A.cv(q,b))},
aH(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;!0;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){f=f.c
A.cQ(f.a,f.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.aH(g.a,f)
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
return}j=$.l
if(j!==k)$.l=k
else j=null
f=f.c
if((f&15)===8)new A.cC(s,g,p).$0()
else if(q){if((f&1)!==0)new A.cB(s,m).$0()}else if((f&2)!==0)new A.cA(g,s).$0()
if(j!=null)$.l=j
f=s.c
if(f instanceof A.p){r=s.a.$ti
r=r.k("a1<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.R(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.dX(f,i)
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
h5(a,b){if(t.C.b(a))return b.aM(a)
if(t.v.b(a))return a
throw A.b(A.dD(a,"onError",u.c))},
h3(){var s,r
for(s=$.ah;s!=null;s=$.ah){$.aX=null
r=s.b
$.ah=r
if(r==null)$.aW=null
s.a.$0()}},
h8(){$.dn=!0
try{A.h3()}finally{$.aX=null
$.dn=!1
if($.ah!=null)$.dA().$1(A.em())}},
ek(a){var s=new A.bA(a),r=$.aW
if(r==null){$.ah=$.aW=s
if(!$.dn)$.dA().$1(A.em())}else $.aW=r.b=s},
h7(a){var s,r,q,p=$.ah
if(p==null){A.ek(a)
$.aX=$.aW
return}s=new A.bA(a)
r=$.aX
if(r==null){s.b=p
$.ah=$.aX=s}else{q=r.b
s.b=q
$.aX=r.b=s
if(q==null)$.aW=s}},
hD(a){var s=null,r=$.l
if(B.b===r){A.ai(s,s,B.b,a)
return}A.ai(s,s,r,r.aE(a))},
hN(a){A.dr(a,"stream",t.K)
return new A.bI()},
de(a){return new A.bz(null,a.k("bz<0>"))},
dS(a,b){var s=$.l
if(s===B.b)return A.dT(a,b)
return A.dT(a,s.aF(b,t.J))},
cQ(a,b){A.h7(new A.cR(a,b))},
eh(a,b,c,d){var s,r=$.l
if(r===c)return d.$0()
$.l=c
s=r
try{r=d.$0()
return r}finally{$.l=s}},
ei(a,b,c,d,e){var s,r=$.l
if(r===c)return d.$1(e)
$.l=c
s=r
try{r=d.$1(e)
return r}finally{$.l=s}},
h6(a,b,c,d,e,f){var s,r=$.l
if(r===c)return d.$2(e,f)
$.l=c
s=r
try{r=d.$2(e,f)
return r}finally{$.l=s}},
ai(a,b,c,d){if(B.b!==c)d=c.aE(d)
A.ek(d)},
cm:function cm(a){this.a=a},
cl:function cl(a,b,c){this.a=a
this.b=b
this.c=c},
cn:function cn(a){this.a=a},
co:function co(a){this.a=a},
aQ:function aQ(){this.c=0},
cL:function cL(a,b){this.a=a
this.b=b},
cK:function cK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
by:function by(a,b){this.a=a
this.b=!1
this.$ti=b},
cO:function cO(a){this.a=a},
cP:function cP(a){this.a=a},
cS:function cS(a){this.a=a},
X:function X(a,b){this.a=a
this.b=b},
bB:function bB(){},
bz:function bz(a,b){var _=this
_.b=a
_.c=0
_.e=_.d=null
_.$ti=b},
ae:function ae(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
p:function p(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
cs:function cs(a,b){this.a=a
this.b=b},
cz:function cz(a,b){this.a=a
this.b=b},
cw:function cw(a){this.a=a},
cx:function cx(a){this.a=a},
cy:function cy(a,b,c){this.a=a
this.b=b
this.c=c},
cv:function cv(a,b){this.a=a
this.b=b},
cu:function cu(a,b){this.a=a
this.b=b},
ct:function ct(a,b,c){this.a=a
this.b=b
this.c=c},
cC:function cC(a,b,c){this.a=a
this.b=b
this.c=c},
cD:function cD(a){this.a=a},
cB:function cB(a,b){this.a=a
this.b=b},
cA:function cA(a,b){this.a=a
this.b=b},
bA:function bA(a){this.a=a
this.b=null},
bI:function bI(){},
cN:function cN(){},
cR:function cR(a,b){this.a=a
this.b=b},
cH:function cH(){},
cI:function cI(a,b){this.a=a
this.b=b},
cJ:function cJ(a,b,c){this.a=a
this.b=b
this.c=c},
f0(a){return new A.aI(a.k("aI<0>"))},
dg(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
fj(a,b,c){var s=new A.af(a,b,c.k("af<0>"))
s.c=a.e
return s},
da(a){var s,r={}
if(A.et(a))return"{...}"
s=new A.bv("")
try{$.L.push(a)
s.a+="{"
r.a=!0
a.ac(0,new A.bT(r,s))
s.a+="}"}finally{if(0>=$.L.length)return A.d($.L,-1)
$.L.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
aI:function aI(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cG:function cG(a){this.a=a
this.c=this.b=null},
af:function af(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
k:function k(){},
av:function av(){},
bT:function bT(a,b){this.a=a
this.b=b},
aC:function aC(){},
aO:function aO(){},
eS(a,b){a=A.b(a)
a.stack=b.h(0)
throw a
throw A.b("unreachable")},
d9(a,b,c){var s,r,q
if(a>4294967295)A.dz(A.f5(a,0,4294967295,"length",null))
s=A.a(new Array(a),c.k("n<0>"))
s.$flags=1
r=s
if(a!==0)for(s=r.length,q=0;q<s;++q)r[q]=b
return r},
f1(a,b,c){var s,r,q=A.a([],c.k("n<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.dy)(a),++r)q.push(a[r])
q.$flags=1
return q},
f9(a,b,c){var s=J.eJ(b)
if(!s.E())return a
if(c.length===0){do a+=A.o(s.gH())
while(s.E())}else{a+=A.o(s.gH())
for(;s.E();)a=a+c+A.o(s.gH())}return a},
dP(){return A.J(new Error())},
dJ(a){return new A.b7(1000*a)},
bQ(a){if(typeof a=="number"||A.dm(a)||a==null)return J.b_(a)
if(typeof a=="string")return JSON.stringify(a)
return A.dM(a)},
eT(a,b){A.dr(a,"error",t.K)
A.dr(b,"stackTrace",t.l)
A.eS(a,b)},
b3(a){return new A.b2(a)},
b0(a,b){return new A.y(!1,null,b,a)},
dD(a,b,c){return new A.y(!0,a,b,c)},
f4(a){var s=null
return new A.aa(s,s,!1,s,s,a)},
f5(a,b,c,d,e){return new A.aa(b,c,!0,a,d,"Invalid value")},
eX(a,b,c,d){return new A.b9(b,!0,a,d,"Index out of range")},
ck(a){return new A.aF(a)},
dV(a){return new A.bw(a)},
b5(a){return new A.b4(a)},
eU(a){return new A.cr(a)},
d6(a,b,c){var s,r
if(A.et(a))return b+"..."+c
s=new A.bv(b)
$.L.push(a)
try{r=s
r.a=A.f9(r.a,a,", ")}finally{if(0>=$.L.length)return A.d($.L,-1)
$.L.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
bV(a,b,c,d){var s
if(B.e===c)return A.dQ(B.a.gj(a),J.E(b),$.d2())
if(B.e===d){s=B.a.gj(a)
b=J.E(b)
c=J.E(c)
return A.df(A.R(A.R(A.R($.d2(),s),b),c))}s=A.dR(B.a.gj(a),J.E(b),J.E(c),J.E(d),$.d2())
return s},
b7:function b7(a){this.a=a},
cp:function cp(){},
h:function h(){},
b2:function b2(a){this.a=a},
F:function F(){},
y:function y(a,b,c,d){var _=this
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
b9:function b9(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
aF:function aF(a){this.a=a},
bw:function bw(a){this.a=a},
bu:function bu(a){this.a=a},
b4:function b4(a){this.a=a},
bp:function bp(){},
aD:function aD(){},
cr:function cr(a){this.a=a},
r:function r(){},
i:function i(){},
bJ:function bJ(){},
bv:function bv(a){this.a=a},
db(a,b,c,d,e){var s,r
if(c<0)s=c===-1/0?0:-c*0
else s=c
if(d<0)r=d===-1/0?0:-d*0
else r=d
return new A.ab(a,b,s,r,e.k("ab<0>"))},
cE:function cE(){},
a8:function a8(a,b,c){this.a=a
this.b=b
this.$ti=c},
bH:function bH(){},
ab:function ab(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
M:function M(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
O:function O(a){this.a=a},
a6:function a6(a,b,c,d,e,f,g){var _=this
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
f7(a,b,c,d,e,f,g){var s,r,q,p=self,o=p.document.createElement("canvas"),n=g*f
o.width=n
s=d*e
o.height=s
r=p.document.createElement("canvas")
r.width=n
r.height=s
s=A.a([],t.w)
for(q=0;q<d;++q){p=B.a.q(g,32)
s.push(new Uint32Array(p+1))}p=new A.bt(d,g,f,e,c,a,o,r,s)
p.aR(a,b,c,d,e,f,g)
return p},
dd(a){return new A.A(B.a.q(a,32),31-B.a.i(a,32))},
bt:function bt(a,b,c,d,e,f,g,h,i){var _=this
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
bY:function bY(a){this.a=a},
bZ:function bZ(a){this.a=a},
c_:function c_(a){this.a=a},
c0:function c0(a){this.a=a},
bX:function bX(){},
C:function C(a){this.b=a},
fa(a,b,c,d,e,f,g){var s,r,q,p,o="white",n=null,m=A.f7("black",b,o,e*(8+d),2,2,a*8),l=A.a([],t.G)
for(s=t.V,r=0;r<e;++r){q=A.a([],s)
for(p=0;p<a;++p)q.push(new A.M(r,p," ",o))
l.push(q)}m=new A.aE(e,a,d,b,!0,m,new A.a9(e,a),new A.a9(e,a),new A.a9(e,a),!1,A.de(t.N),A.de(t.W),A.de(t.n),B.y,l,A.f0(t.o),B.dP)
m.aT("black",a,b,o,n,!0,2,2,d,e,!1,g,n,n,n,n,n)
return m},
ac:function ac(a){this.b=a},
aE:function aE(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
cf:function cf(a){this.a=a},
ce:function ce(){},
cd:function cd(a){this.a=a},
c8:function c8(a){this.a=a},
c9:function c9(a){this.a=a},
ca:function ca(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cb:function cb(a,b,c){this.a=a
this.b=b
this.c=c},
cc:function cc(a){this.a=a},
aG(a,b,c,d){var s,r=A.he(new A.cq(c),t.m),q=null
if(r==null)r=q
else{if(typeof r=="function")A.dz(A.b0("Attempting to rewrap a JS function.",null))
s=function(e,f){return function(g){return e(f,g,arguments.length)}}(A.fK,r)
s[$.d1()]=r
r=s}if(r!=null)a.addEventListener(b,r,!1)
return new A.bE(a,b,r,!1)},
he(a,b){var s=$.l
if(s===B.b)return a
return s.aF(a,b)},
d5:function d5(a,b){this.a=a
this.$ti=b},
bE:function bE(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
cq:function cq(a){this.a=a},
f8(a,b,c){var s,r,q,p,o=A.a([],t.U),n=A.a([],t.I)
for(s=t.p,r=0;r<a;++r){q=A.a([],s)
for(p=0;p<b;++p)q.push(B.c)
n.push(q)}o=new A.c2(a,b,o,n,B.l)
o.aS(a,b,c)
return o},
hz(){var s=self.document.getElementById("snake")
s.toString
A.f8(30,30,s)},
z:function z(a){this.b=a},
a2:function a2(a){this.b=a},
c2:function c2(a,b,c,d,e){var _=this
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
c3:function c3(a){this.a=a},
c5:function c5(a){this.a=a},
c4:function c4(a){this.a=a},
hE(a){A.d_(new A.a5("Field '"+a+"' has been assigned during initialization."),new Error())},
q(){A.d_(new A.a5("Field '' has not been initialized."),new Error())},
hF(){A.d_(new A.a5("Field '' has already been initialized."),new Error())},
ec(a){var s
if(typeof a=="function")throw A.b(A.b0("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.fJ,a)
s[$.d1()]=a
return s},
fJ(a){return a.$0()},
fK(a,b,c){if(c>=1)return a.$1(b)
return a.$0()}},B={}
var w=[A,J,B]
var $={}
A.d7.prototype={}
J.ba.prototype={
u(a,b){return a===b},
gj(a){return A.aB(a)},
h(a){return"Instance of '"+A.bW(a)+"'"},
gl(a){return A.a_(A.dl(this))}}
J.bb.prototype={
h(a){return String(a)},
gj(a){return a?519018:218159},
gl(a){return A.a_(t.y)},
$ie:1}
J.ap.prototype={
u(a,b){return null==b},
h(a){return"null"},
gj(a){return 0},
$ie:1,
$ir:1}
J.ar.prototype={$ij:1}
J.P.prototype={
gj(a){return 0},
h(a){return String(a)}}
J.bq.prototype={}
J.ad.prototype={}
J.N.prototype={
h(a){var s=a[$.d1()]
if(s==null)return this.aQ(a)
return"JavaScript function for "+J.b_(s)}}
J.aq.prototype={
gj(a){return 0},
h(a){return String(a)}}
J.as.prototype={
gj(a){return 0},
h(a){return String(a)}}
J.n.prototype={
bj(a,b){var s
a.$flags&1&&A.d0(a,"remove",1)
for(s=0;s<a.length;++s)if(J.W(a[s],b)){a.splice(s,1)
return!0}return!1},
bc(a,b){var s,r,q=a.length,p=A.d9(q,"",t.N)
for(s=0;s<a.length;++s){r=A.o(a[s])
if(!(s<q))return A.d(p,s)
p[s]=r}return p.join(b)},
b7(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw A.b(A.b5(a))}return s},
b8(a,b,c){return this.b7(a,b,c,t.z)},
gaH(a){if(a.length>0)return a[0]
throw A.b(A.dK())},
gbd(a){var s=a.length
if(s>0)return a[s-1]
throw A.b(A.dK())},
b6(a,b){var s
for(s=0;s<a.length;++s)if(J.W(a[s],b))return!0
return!1},
h(a){return A.d6(a,"[","]")},
gag(a){return new J.b1(a,a.length,A.dk(a).k("b1<1>"))},
gj(a){return A.aB(a)},
gm(a){return a.length},
$if:1}
J.bR.prototype={}
J.b1.prototype={
gH(){var s=this.d
return s==null?this.$ti.c.a(s):s},
E(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.b(A.dy(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.a3.prototype={
bu(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.b(A.ck(""+a+".toInt()"))},
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
A(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.aA(a,b)},
q(a,b){return(a|0)===a?a/b|0:this.aA(a,b)},
aA(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.ck("Result of truncating division is "+A.o(s)+": "+A.o(a)+" ~/ "+b))},
K(a,b){if(b<0)throw A.b(A.cT(b))
return b>31?0:a<<b>>>0},
b4(a,b){return b>31?0:a<<b>>>0},
aP(a,b){var s
if(b<0)throw A.b(A.cT(b))
if(a>0)s=this.a7(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
b5(a,b){var s
if(a>0)s=this.a7(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
v(a,b){if(0>b)throw A.b(A.cT(b))
return this.a7(a,b)},
a7(a,b){return b>31?0:a>>>b},
gl(a){return A.a_(t.H)},
$it:1}
J.ao.prototype={
gl(a){return A.a_(t.S)},
$ie:1,
$ic:1}
J.bc.prototype={
gl(a){return A.a_(t.i)},
$ie:1}
J.a4.prototype={
Z(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.G)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
bh(a,b,c){var s=b-a.length
if(s<=0)return a
return this.Z(c,s)+a},
h(a){return a},
gj(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gl(a){return A.a_(t.N)},
gm(a){return a.length},
$ie:1,
$iD:1}
A.a5.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.br.prototype={
h(a){return"ReachabilityError: "+this.a}}
A.c1.prototype={}
A.be.prototype={
gH(){var s=this.d
return s==null?this.$ti.c.a(s):s},
E(){var s,r=this,q=r.a,p=J.ep(q),o=p.gm(q)
if(r.b!==o)throw A.b(A.b5(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.n(q,s);++r.c
return!0}}
A.an.prototype={}
A.A.prototype={$r:"+(1,2)",$s:1}
A.b6.prototype={
h(a){return A.da(this)}}
A.b8.prototype={
P(){var s=this,r=s.$map
if(r==null){r=new A.at(s.$ti.k("at<1,2>"))
A.hm(s.a,r)
s.$map=r}return r},
aa(a){return this.P().aa(a)},
n(a,b){return this.P().n(0,b)},
ac(a,b){this.P().ac(0,b)},
gm(a){return this.P().a}}
A.ch.prototype={
t(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.aA.prototype={
h(a){return"Null check operator used on a null value"}}
A.bd.prototype={
h(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.bx.prototype={
h(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.bU.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.am.prototype={}
A.aP.prototype={
h(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iQ:1}
A.Y.prototype={
h(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.ew(r==null?"unknown":r)+"'"},
gbv(){return this},
$C:"$1",
$R:1,
$D:null}
A.bO.prototype={$C:"$0",$R:0}
A.bP.prototype={$C:"$2",$R:2}
A.c7.prototype={}
A.c6.prototype={
h(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.ew(s)+"'"}}
A.al.prototype={
u(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.al))return!1
return this.$_target===b.$_target&&this.a===b.a},
gj(a){return(A.dx(this.a)^A.aB(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.bW(this.a)+"'")}}
A.bC.prototype={
h(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.bs.prototype={
h(a){return"RuntimeError: "+this.a}}
A.au.prototype={
gm(a){return this.a},
aa(a){var s=this.b
if(s==null)return!1
return s[a]!=null},
n(a,b){var s,r,q,p,o=null
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
s=q[this.ad(a)]
r=this.ae(s,a)
if(r<0)return null
return s[r].b},
ac(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw A.b(A.b5(s))
r=r.c}},
M(a,b){var s=this,r=new A.bS(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&1073741823
return r},
ad(a){return J.E(a)&1073741823},
ae(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.W(a[r].a,b))return r
return-1},
h(a){return A.da(this)}}
A.bS.prototype={}
A.at.prototype={
ad(a){return A.hi(a)&1073741823},
ae(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.W(a[r].a,b))return r
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
A.ag.prototype={
h(a){return this.aC(!1)},
aC(a){var s,r,q,p,o,n=this.b0(),m=this.au(),l=(a?""+"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.d(m,q)
o=m[q]
l=a?l+A.dM(o):l+A.o(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
b0(){var s,r=this.$s
for(;$.aN.length<=r;)$.aN.push(null)
s=$.aN[r]
if(s==null){s=this.b_()
if(!(r<$.aN.length))return A.d($.aN,r)
$.aN[r]=s}return s},
b_(){var s,r,q,p,o,n=this.$r,m=n.indexOf("("),l=n.substring(1,m),k=n.substring(m),j=k==="()"?0:k.replace(/[^,]/g,"").length+1,i=A.a(new Array(j),t.f)
for(s=0;s<j;++s)i[s]=s
if(l!==""){r=l.split(",")
s=r.length
for(q=i.length,p=j;s>0;){--p;--s
o=r[s]
if(!(p>=0&&p<q))return A.d(i,p)
i[p]=o}}i=A.f1(i,!1,t.K)
i.$flags=3
return i}}
A.bG.prototype={
au(){return[this.a,this.b]},
u(a,b){if(b==null)return!1
return b instanceof A.bG&&this.$s===b.$s&&J.W(this.a,b.a)&&J.W(this.b,b.b)},
gj(a){return A.bV(this.$s,this.a,this.b,B.e)}}
A.bf.prototype={
gl(a){return B.dZ},
$ie:1}
A.ay.prototype={}
A.bg.prototype={
gl(a){return B.e_},
$ie:1}
A.a7.prototype={
gm(a){return a.length},
$iw:1}
A.aw.prototype={
n(a,b){A.Z(b,a,a.length)
return a[b]},
$if:1}
A.ax.prototype={$if:1}
A.bh.prototype={
gl(a){return B.e0},
$ie:1}
A.bi.prototype={
gl(a){return B.e1},
$ie:1}
A.bj.prototype={
gl(a){return B.e2},
n(a,b){A.Z(b,a,a.length)
return a[b]},
$ie:1}
A.bk.prototype={
gl(a){return B.e3},
n(a,b){A.Z(b,a,a.length)
return a[b]},
$ie:1}
A.bl.prototype={
gl(a){return B.e4},
n(a,b){A.Z(b,a,a.length)
return a[b]},
$ie:1}
A.bm.prototype={
gl(a){return B.e6},
n(a,b){A.Z(b,a,a.length)
return a[b]},
$ie:1}
A.bn.prototype={
gl(a){return B.e7},
n(a,b){A.Z(b,a,a.length)
return a[b]},
$ie:1,
$icj:1}
A.az.prototype={
gl(a){return B.e8},
gm(a){return a.length},
n(a,b){A.Z(b,a,a.length)
return a[b]},
$ie:1}
A.bo.prototype={
gl(a){return B.e9},
gm(a){return a.length},
n(a,b){A.Z(b,a,a.length)
return a[b]},
$ie:1}
A.aJ.prototype={}
A.aK.prototype={}
A.aL.prototype={}
A.aM.prototype={}
A.x.prototype={
k(a){return A.aV(v.typeUniverse,this,a)},
ao(a){return A.e6(v.typeUniverse,this,a)}}
A.bF.prototype={}
A.bK.prototype={
h(a){return A.v(this.a,null)}}
A.bD.prototype={
h(a){return this.a}}
A.aR.prototype={$iF:1}
A.cm.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:4}
A.cl.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:9}
A.cn.prototype={
$0(){this.a.$0()},
$S:2}
A.co.prototype={
$0(){this.a.$0()},
$S:2}
A.aQ.prototype={
aU(a,b){if(self.setTimeout!=null)self.setTimeout(A.bN(new A.cL(this,b),0),a)
else throw A.b(A.ck("`setTimeout()` not found."))},
aV(a,b){if(self.setTimeout!=null)self.setInterval(A.bN(new A.cK(this,a,Date.now(),b),0),a)
else throw A.b(A.ck("Periodic timer."))},
$icg:1}
A.cL.prototype={
$0(){this.a.c=1
this.b.$0()},
$S:0}
A.cK.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.a.A(s,o)}q.c=p
r.d.$1(q)},
$S:2}
A.by.prototype={}
A.cO.prototype={
$1(a){return this.a.$2(0,a)},
$S:10}
A.cP.prototype={
$2(a,b){this.a.$2(1,new A.am(a,b))},
$S:11}
A.cS.prototype={
$2(a,b){this.a(a,b)},
$S:12}
A.X.prototype={
h(a){return A.o(this.a)},
$ih:1,
gL(){return this.b}}
A.bB.prototype={}
A.bz.prototype={}
A.ae.prototype={
be(a){if((this.c&15)!==6)return!0
return this.b.b.aj(this.d,a.a)},
b9(a){var s,r=this.e,q=null,p=a.a,o=this.b.b
if(t.C.b(r))q=o.bm(r,p,a.b)
else q=o.aj(r,p)
try{p=q
return p}catch(s){if(t.c.b(A.V(s))){if((this.c&1)!==0)throw A.b(A.b0("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.b(A.b0("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.p.prototype={
az(a){this.a=this.a&1|4
this.c=a},
ak(a,b,c){var s,r,q=$.l
if(q===B.b){if(b!=null&&!t.C.b(b)&&!t.v.b(b))throw A.b(A.dD(b,"onError",u.c))}else if(b!=null)b=A.h5(b,q)
s=new A.p(q,c.k("p<0>"))
r=b==null?1:3
this.a_(new A.ae(s,r,a,b,this.$ti.k("@<1>").ao(c).k("ae<1,2>")))
return s},
bs(a,b){return this.ak(a,null,b)},
aB(a,b,c){var s=new A.p($.l,c.k("p<0>"))
this.a_(new A.ae(s,19,a,b,this.$ti.k("@<1>").ao(c).k("ae<1,2>")))
return s},
b3(a){this.a=this.a&1|16
this.c=a},
N(a){this.a=a.a&30|this.a&1
this.c=a.c},
a_(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.a_(a)
return}s.N(r)}A.ai(null,null,s.b,new A.cs(s,a))}},
a5(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.a5(a)
return}n.N(s)}m.a=n.R(a)
A.ai(null,null,n.b,new A.cz(m,n))}},
a6(){var s=this.c
this.c=null
return this.R(s)},
R(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
aZ(a){var s,r,q,p=this
p.a^=2
try{a.ak(new A.cw(p),new A.cx(p),t.P)}catch(q){s=A.V(q)
r=A.J(q)
A.hD(new A.cy(p,s,r))}},
a1(a){var s=this,r=s.a6()
s.a=8
s.c=a
A.aH(s,r)},
F(a,b){var s=this.a6()
this.b3(new A.X(a,b))
A.aH(this,s)},
aX(a){if(this.$ti.k("a1<1>").b(a)){this.ap(a)
return}this.aY(a)},
aY(a){this.a^=2
A.ai(null,null,this.b,new A.cu(this,a))},
ap(a){if(this.$ti.b(a)){A.fi(a,this)
return}this.aZ(a)},
a0(a,b){this.a^=2
A.ai(null,null,this.b,new A.ct(this,a,b))},
$ia1:1}
A.cs.prototype={
$0(){A.aH(this.a,this.b)},
$S:0}
A.cz.prototype={
$0(){A.aH(this.b,this.a.a)},
$S:0}
A.cw.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.a1(p.$ti.c.a(a))}catch(q){s=A.V(q)
r=A.J(q)
p.F(s,r)}},
$S:4}
A.cx.prototype={
$2(a,b){this.a.F(a,b)},
$S:13}
A.cy.prototype={
$0(){this.a.F(this.b,this.c)},
$S:0}
A.cv.prototype={
$0(){A.dX(this.a.a,this.b)},
$S:0}
A.cu.prototype={
$0(){this.a.a1(this.b)},
$S:0}
A.ct.prototype={
$0(){this.a.F(this.b,this.c)},
$S:0}
A.cC.prototype={
$0(){var s,r,q,p,o,n,m,l=this,k=null
try{q=l.a.a
k=q.b.b.bk(q.d)}catch(p){s=A.V(p)
r=A.J(p)
if(l.c&&l.b.a.c.a===s){q=l.a
q.c=l.b.a.c}else{q=s
o=r
if(o==null)o=A.d4(q)
n=l.a
n.c=new A.X(q,o)
q=n}q.b=!0
return}if(k instanceof A.p&&(k.a&24)!==0){if((k.a&16)!==0){q=l.a
q.c=k.c
q.b=!0}return}if(k instanceof A.p){m=l.b.a
q=l.a
q.c=k.bs(new A.cD(m),t.z)
q.b=!1}},
$S:0}
A.cD.prototype={
$1(a){return this.a},
$S:14}
A.cB.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
q.c=p.b.b.aj(p.d,this.b)}catch(o){s=A.V(o)
r=A.J(o)
q=s
p=r
if(p==null)p=A.d4(q)
n=this.a
n.c=new A.X(q,p)
n.b=!0}},
$S:0}
A.cA.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.be(s)&&p.a.e!=null){p.c=p.a.b9(s)
p.b=!1}}catch(o){r=A.V(o)
q=A.J(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.d4(p)
m=l.b
m.c=new A.X(p,n)
p=m}p.b=!0}},
$S:0}
A.bA.prototype={}
A.bI.prototype={}
A.cN.prototype={}
A.cR.prototype={
$0(){A.eT(this.a,this.b)},
$S:0}
A.cH.prototype={
bo(a){var s,r,q
try{if(B.b===$.l){a.$0()
return}A.eh(null,null,this,a)}catch(q){s=A.V(q)
r=A.J(q)
A.cQ(s,r)}},
bq(a,b){var s,r,q
try{if(B.b===$.l){a.$1(b)
return}A.ei(null,null,this,a,b)}catch(q){s=A.V(q)
r=A.J(q)
A.cQ(s,r)}},
br(a,b){return this.bq(a,b,t.z)},
aE(a){return new A.cI(this,a)},
aF(a,b){return new A.cJ(this,a,b)},
bl(a){if($.l===B.b)return a.$0()
return A.eh(null,null,this,a)},
bk(a){return this.bl(a,t.z)},
bp(a,b){if($.l===B.b)return a.$1(b)
return A.ei(null,null,this,a,b)},
aj(a,b){var s=t.z
return this.bp(a,b,s,s)},
bn(a,b,c){if($.l===B.b)return a.$2(b,c)
return A.h6(null,null,this,a,b,c)},
bm(a,b,c){var s=t.z
return this.bn(a,b,c,s,s,s)},
bi(a){return a},
aM(a){var s=t.z
return this.bi(a,s,s,s)}}
A.cI.prototype={
$0(){return this.a.bo(this.b)},
$S:0}
A.cJ.prototype={
$1(a){return this.a.br(this.b,a)},
$S(){return this.c.k("~(0)")}}
A.aI.prototype={
gag(a){var s=this,r=new A.af(s,s.r,s.$ti.k("af<1>"))
r.c=s.e
return r},
gm(a){return this.a},
U(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.an(s==null?q.b=A.dg():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.an(r==null?q.c=A.dg():r,b)}else return q.aW(b)},
aW(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.dg()
s=J.E(a)&1073741823
r=p[s]
if(r==null)p[s]=[q.a4(a)]
else{if(q.b1(r,a)>=0)return!1
r.push(q.a4(a))}return!0},
an(a,b){if(a[b]!=null)return!1
a[b]=this.a4(b)
return!0},
aw(){this.r=this.r+1&1073741823},
a4(a){var s,r=this,q=new A.cG(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.aw()
return q},
b1(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.W(a[r].a,b))return r
return-1}}
A.cG.prototype={}
A.af.prototype={
gH(){var s=this.d
return s==null?this.$ti.c.a(s):s},
E(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.b(A.b5(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.k.prototype={
gag(a){return new A.be(a,this.gm(a),A.aY(a).k("be<k.E>"))},
h(a){return A.d6(a,"[","]")}}
A.av.prototype={
gm(a){return this.a},
h(a){return A.da(this)}}
A.bT.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.o(a)
s=r.a+=s
r.a=s+": "
s=A.o(b)
r.a+=s},
$S:15}
A.aC.prototype={
h(a){return A.d6(this,"{","}")}}
A.aO.prototype={}
A.b7.prototype={
u(a,b){if(b==null)return!1
return b instanceof A.b7&&this.a===b.a},
gj(a){return B.a.gj(this.a)},
h(a){var s,r,q,p,o,n=this.a,m=B.a.q(n,36e8),l=n%36e8
if(n<0){m=0-m
n=0-l
s="-"}else{n=l
s=""}r=B.a.q(n,6e7)
n%=6e7
q=r<10?"0":""
p=B.a.q(n,1e6)
o=p<10?"0":""
return s+m+":"+q+r+":"+o+p+"."+B.p.bh(B.a.h(n%1e6),6,"0")}}
A.cp.prototype={
h(a){return this.O()}}
A.h.prototype={
gL(){return A.f3(this)}}
A.b2.prototype={
h(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.bQ(s)
return"Assertion failed"}}
A.F.prototype={}
A.y.prototype={
ga3(){return"Invalid argument"+(!this.a?"(s)":"")},
ga2(){return""},
h(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.ga3()+q+o
if(!s.a)return n
return n+s.ga2()+": "+A.bQ(s.gaf())},
gaf(){return this.b}}
A.aa.prototype={
gaf(){return this.b},
ga3(){return"RangeError"},
ga2(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.o(q):""
else if(q==null)s=": Not greater than or equal to "+A.o(r)
else if(q>r)s=": Not in inclusive range "+A.o(r)+".."+A.o(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.o(r)
return s}}
A.b9.prototype={
gaf(){return this.b},
ga3(){return"RangeError"},
ga2(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gm(a){return this.f}}
A.aF.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.bw.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.bu.prototype={
h(a){return"Bad state: "+this.a}}
A.b4.prototype={
h(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.bQ(s)+"."}}
A.bp.prototype={
h(a){return"Out of Memory"},
gL(){return null},
$ih:1}
A.aD.prototype={
h(a){return"Stack Overflow"},
gL(){return null},
$ih:1}
A.cr.prototype={
h(a){return"Exception: "+this.a}}
A.r.prototype={
gj(a){return A.i.prototype.gj.call(this,0)},
h(a){return"null"}}
A.i.prototype={$ii:1,
u(a,b){return this===b},
gj(a){return A.aB(this)},
h(a){return"Instance of '"+A.bW(this)+"'"},
gl(a){return A.hq(this)},
toString(){return this.h(this)}}
A.bJ.prototype={
h(a){return""},
$iQ:1}
A.bv.prototype={
gm(a){return this.a.length},
h(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.cE.prototype={
J(a){if(a<=0||a>4294967296)throw A.b(A.f4("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
A.a8.prototype={
h(a){return"Point("+this.a+", "+this.b+")"},
u(a,b){if(b==null)return!1
return b instanceof A.a8&&this.a===b.a&&this.b===b.b},
gj(a){return A.dQ(B.a.gj(this.a),B.a.gj(this.b),0)}}
A.bH.prototype={
h(a){var s=this
return"Rectangle ("+s.a+", "+s.b+") "+s.c+" x "+s.d},
u(a,b){var s,r,q,p,o,n,m=this
if(b==null)return!1
s=!1
if(b instanceof A.ab){r=m.a
q=b.a
if(r===q){p=m.b
o=b.b
if(p===o){s=m.$ti.c
n=b.$ti.c
s=s.a(r+m.c)===n.a(q+b.c)&&s.a(p+m.d)===n.a(o+b.d)}}}return s},
gj(a){var s=this,r=s.a,q=s.b,p=s.$ti.c
return A.dR(B.a.gj(r),B.a.gj(q),B.a.gj(p.a(r+s.c)),B.a.gj(p.a(q+s.d)),0)}}
A.ab.prototype={}
A.M.prototype={
gj(a){var s=this.a,r=this.b
return A.bV(new A.A(s,r).$s,s,r,B.e)},
u(a,b){var s,r,q,p
if(b==null)return!1
if(b instanceof A.M){s=b.a
r=b.b
q=this.a
p=this.b
p=A.bV(new A.A(s,r).$s,s,r,B.e)===A.bV(new A.A(q,p).$s,q,p,B.e)
s=p}else s=!1
return s},
h(a){var s=this
return"("+s.a+" "+s.b+") => '"+s.c+"' "+s.d}}
A.O.prototype={}
A.a6.prototype={
h(a){var s=this
return"               row: "+s.a+"\n            column: "+s.b+"\n         character: '"+s.c+"'\n    characterColor: "+s.d+"\n\n          pixelRow: "+s.e+"\n       pixelColumn: "+s.f+"\n         pixelIsOn: "+s.r+"\n    "}}
A.a9.prototype={
sW(a){var s,r,q,p=this
if(a<0){s=p.d=a
for(r=p.b,q=p.a;s<0;){s+=r
p.d=s
p.c=B.a.i(p.c-1,q)}}else{s=p.b
p.c=B.a.i(p.c+B.a.A(a,s),p.a)
p.d=B.a.i(a,s)}},
gp(){return this.c*this.b+this.d},
sp(a){var s=this,r=s.b
s.c=B.a.i(B.a.A(a,r),s.a)
s.d=B.a.i(a,r)}}
A.bt.prototype={
aR(a,b,c,d,e,f,g){var s,r=this,q=self.document
q.onfocus=A.ec(new A.bY(r))
q.onblur=A.ec(new A.bZ(r))
q=r.r
q.tabIndex=-1
q.style.display="block"
q.style.outline="none"
s=q.getContext("2d")
if(s==null)s=t.m.a(s)
s.imageSmoothingEnabled=!1
A.aG(q,"focus",new A.c_(r),!1)
A.aG(q,"blur",new A.c0(r),!1)
b.style.display="flex"
b.style.alignItems="flex-start"
b.style.padding="0"
b.style.margin="0"
b.style.width="fit-content"
b.style.height="fit-content"
b.style.background="gray"
b.appendChild(q)
r.V(0)},
S(a,b){return new A.A(B.a.i(a,this.a),B.a.i(b,this.b))},
aq(){var s=this.w,r=s.getContext("2d")
if(r==null)r=t.m.a(r)
r.save()
r.beginPath()
r.clearRect(0,0,s.width,s.height)
r.restore()
return r},
ar(){var s=this.r.getContext("2d")
if(s==null)s=t.m.a(s)
s.save()
s.beginPath()
s.drawImage(this.w,0,0)
s.restore()
return s},
C(a,b,c,d){var s,r,q,p,o,n,m=this,l=a<0||a>=m.a||b<0||b>=m.b
if(l)return
s=m.S(a,b)
a=s.a
b=s.b
r=A.dd(b)
q=r.a
p=B.a.K(1,r.b)
l=m.x
if(!(a>=0&&a<l.length))return A.d(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.d(l,q)
o=l[q]
l.$flags&2&&A.d0(l)
l[q]=(o|p)>>>0
l[q]=(l[q]^p)>>>0
l=c.getContext("2d")
if(l==null)l=t.m.a(l)
l.save()
l.beginPath()
l.fillStyle=m.f
o=m.c
n=m.d
l.fillRect(b*o,a*n,o,n)
l.restore()},
D(a,b,c,d,e){var s,r,q,p,o,n,m=this,l=a<0||a>=m.a||b<0||b>=m.b
if(l)return
s=m.S(a,b)
a=s.a
b=s.b
r=A.dd(b)
q=r.a
p=B.a.K(1,r.b)
l=m.x
if(!(a>=0&&a<l.length))return A.d(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.d(l,q)
o=l[q]
l.$flags&2&&A.d0(l)
l[q]=(o|p)>>>0
o=d.getContext("2d")
l=o==null?t.m.a(o):o
l.save()
l.beginPath()
l.fillStyle=c
o=m.c
n=m.d
l.fillRect(b*o,a*n,o,n)
l.restore()},
aK(a,b){var s,r,q,p,o=this.S(b,a)
b=o.a
s=A.dd(o.b)
r=s.a
q=B.a.K(1,s.b)
p=this.x
if(!(b>=0&&b<p.length))return A.d(p,b)
p=p[b]
if(!(r>=0&&r<p.length))return A.d(p,r)
return(p[r]&q)>>>0>0},
aG(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
if(b==null)b=A.db(0,0,i.b,i.a,t.S)
i.aq()
s=b.a
if(s===0&&b.b===0&&b.c===i.b&&b.d===i.a){for(s=i.x,r=s.length,q=0;q<r;++q)for(p=0;o=s[q],p<o.length;++p){o.$flags&2&&A.d0(o)
o[p]=0}s=i.w
r=s.getContext("2d")
if(r==null)r=t.m.a(r)
r.save()
r.fillStyle=i.f
r.fillRect(0,0,s.width,s.height)
r.restore()}else{r=i.a
n=B.a.i(b.b,r)
o=i.b
m=B.a.i(s,o)
s=Math.abs(b.d)
l=Math.min(n+s,r)
k=Math.min(m+s,o)
for(s=i.w,q=n;q<l;++q){j=B.a.i(q,r)
for(p=m;p<k;++p)i.C(j,B.a.i(p,o),s,!1)}}i.ar()},
V(a){return this.aG(0,null)},
b2(a,b,c,d,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.aq()
s=e.S(a,b)
a=s.a
b=s.b
r=B.a.b4(1,a0)-1
for(q=a0-1,p=t.t,o=e.w,n=0;n<8;++n){m=c[n]
l=m&r
m=A.a([],p)
for(k=a+n,j=0;j<a0;++j){i=e.aK(b+j,k)?1:0
m.push(B.a.K(i,q-j))}h=B.d.b8(m,0,new A.bX())
switch(a1){case B.w:for(j=0;j<a0;++j){m=b+j
if((B.a.v(l,q-j)&1)>0)e.D(k,m,d,o,!1)
else e.C(k,m,o,!1)}break
case B.dQ:for(j=0;j<a0;++j){m=b+j
if((B.a.v(l,q-j)&1)>0)e.C(k,m,o,!1)
else e.D(k,m,d,o,!1)}break
case B.dS:for(j=0;j<a0;++j){g=q-j
if((B.a.v(l,g)&1)>0&&(B.a.aP(h,g)&1)===0)e.D(k,b+j,d,o,!1)}break
case B.dR:for(j=0;j<a0;++j)if((B.a.v(l,q-j)&1)>0)e.D(k,b+j,d,o,!1)
break
case B.dT:for(f=l&h,j=0;j<a0;++j)if((B.a.v(f,q-j)&1)>0)e.D(k,b+j,d,o,!1)
break
case B.dU:for(f=l&h,j=0;j<a0;++j)if((B.a.v(f,q-j)&1)>0)e.C(k,b+j,o,!1)
break
case B.dV:for(f=l&h,j=0;j<a0;++j)if((B.a.v(f,q-j)&1)===0)e.C(k,b+j,o,!1)
break
case B.dW:for(f=l&h,j=0;j<a0;++j){m=b+j
if((B.a.v(f,q-j)&1)===0)e.C(k,m,o,!1)
else e.D(k,m,d,o,!1)}break}}e.ar()},
aL(a,b,c){this.b2(c.a,c.b,b,a,8,B.w,!0,!1,!1)},
gaI(){return this.y&&J.W(self.document.activeElement,this.r)},
I(){var s=this.r
s.style.opacity="1.0"
s.focus()},
G(){var s=this.r
s.style.opacity="0.5"
s.blur()}}
A.bY.prototype={
$0(){this.a.y=!0},
$S:2}
A.bZ.prototype={
$0(){this.a.y=!1},
$S:2}
A.c_.prototype={
$1(a){this.a.I()},
$S:1}
A.c0.prototype={
$1(a){this.a.G()},
$S:1}
A.bX.prototype={
$2(a,b){return(a|b)>>>0},
$S:16}
A.C.prototype={
O(){return"Mode."+this.b}}
A.ac.prototype={
O(){return"State."+this.b}}
A.aE.prototype={
aT(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=this,r=s.f
r.tabIndex=-1
A.aG(r,"focus",new A.c8(s),!1)
A.aG(r,"blur",new A.c9(s),!1)
A.aG(r,"keydown",new A.ca(s,l,new A.ce(),new A.cd(s)),!1)
A.aG(r,"click",new A.cb(s,new A.cf(s),o),!1)
A.dS(A.dJ(300),new A.cc(s))
s.G()
s.V(0)},
gab(){return this.w.gab()},
ga9(){return this.w.ga9()},
a8(a,b){return new A.A(B.a.i(a,this.a),B.a.i(b,this.b))},
av(){var s=this,r=s.x
s.CW.U(0,new A.M(r.c,r.d," ","white"))
s.T()
s.cy=!1},
T(){var s,r,q,p,o,n,m,l,k,j,i,h=this
for(s=h.CW,r=A.fj(s,s.r,s.$ti.c),q=h.w,p=h.cx,o=8+h.c,n=r.$ti.c;r.E();){m=r.d
if(m==null)m=n.a(m)
l=m.a
k=m.b
if(p.aa(m.c)){j=p.n(0,m.c)
j.toString
i=j}else i=$.ey()
q.aL(m.d,i,new A.A(l*o,k*8))}if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.aw()}},
am(a,b){var s,r=this.a8(b,a)
b=r.a
a=r.b
s=this.ch
if(!(b>=0&&b<s.length))return A.d(s,b)
s=s[b]
if(!(a>=0&&a<s.length))return A.d(s,a)
return s[a].c},
bg(){var s=this.x
s.sW(0)
s.c=B.a.i(s.c+1,s.a)},
ai(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=this,i=e==null?j.x.c:e,h=j.a8(i,c==null?j.x.d:c)
i=j.x
i.c=B.a.i(h.a,i.a)
i.sW(h.b)
if(b==null)b="white"
for(s=a.split(""),r=s.length,q=j.ch,p=j.CW,o=0;o<r;++o){n=s[o]
m=i.c
l=i.d
if(!(m>=0&&m<q.length))return A.d(q,m)
m=q[m]
if(!(l>=0&&l<m.length))return A.d(m,l)
k=m[l]
k.c=n
k.d=b
p.U(0,k)
i.sW(i.d+1)}j.T()
if(d)j.bg()},
B(a,b,c,d){return this.ai(a,b,c,!0,d)},
ah(a,b,c){return this.ai(a,null,b,!0,c)},
aJ(a,b){return this.ai(a,null,null,b,null)},
V(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=t.S,f=A.db(0,0,h.b,h.a,g)
for(s=f.b,r=f.d,q=f.$ti.c,p=q.a(s+r),o=f.a,n=f.c,m=o+n,l=h.ch,k=s;k<p;++k)for(q.a(m),j=o;j<m;++j){if(!(k<l.length))return A.d(l,k)
i=l[k]
if(!(j<i.length))return A.d(i,j)
i=i[j]
i.c=" "
i.d="white"}q=8+h.c
h.w.aG(0,A.db(o*8,s*q,n*8,r*q,g))
g=h.x
g.c=B.a.i(s,g.a)
g.sW(o)},
I(){return this.gab().$0()},
G(){return this.ga9().$0()}}
A.cf.prototype={
$1(a){var s=this.a,r=s.w,q=J.dC(a.offsetX),p=Math.max(Math.min(B.a.A(J.dC(a.offsetY)-1,r.d),r.a-1),0),o=Math.max(Math.min(B.a.A(q-1,r.c),r.b-1),0),n=B.a.A(p,8+s.c),m=B.a.q(o,8),l=s.am(m,n),k=s.a8(n,m),j=k.a,i=k.b
s=s.ch
if(!(j>=0&&j<s.length))return A.d(s,j)
s=s[j]
if(!(i>=0&&i<s.length))return A.d(s,i)
return new A.a6(n,m,l,s[i].d,p,o,r.aK(o,p))},
$S:17}
A.ce.prototype={
$1(a){var s=a.keyCode
return new A.O(s)},
$S:18}
A.cd.prototype={
$0(){var s,r,q,p,o,n=this.a,m=n.a,l=n.b,k=new A.a9(m,l)
k.sp(n.y.gp())
s=A.a([],t.s)
for(r=n.z,q=r.b;p=k.c,o=k.d,p*l+o<r.c*q+r.d;p=k.c*l+k.d+1,k.c=B.a.i(B.a.A(p,l),m),k.d=B.a.i(p,l))s.push(n.am(o,p))
return B.d.bc(s,"")},
$S:19}
A.c8.prototype={
$1(a){this.a.w.I()},
$S:1}
A.c9.prototype={
$1(a){this.a.w.G()},
$S:1}
A.ca.prototype={
$1(a){var s,r,q,p
a.preventDefault()
s=this.a
switch(s.ay){case B.y:this.b.$2(s,this.c.$1(a))
break
case B.dX:break
case B.z:s.av()
$label0$1:{r=a.keyCode
if(13===r)break $label0$1
if(8===r){q=s.x
if(q.gp()>s.y.gp()){q.sp(q.gp()-1)
s.aJ(" ",!1)
q.sp(q.gp()-1)}break $label0$1}p=a.key
if(p.length===1&&s.x.gp()<s.z.gp())s.aJ(p,!1)}break
case B.dY:break}},
$S:1}
A.cb.prototype={
$1(a){a.preventDefault()},
$S:1}
A.cc.prototype={
$1(a){var s,r,q,p=this.a,o=p.w
if(o.gaI()&&p.ay===B.z)if(p.cy)p.av()
else{s=p.x
r=s.c
s=s.d
q=$.ex()
o.aL("white",q,new A.A(r*(8+p.c),s*8))
p.cy=!0}},
$S:5}
A.d5.prototype={}
A.bE.prototype={}
A.cq.prototype={
$1(a){return this.a.$1(a)},
$S:1}
A.z.prototype={
O(){return"Value."+this.b}}
A.a2.prototype={
O(){return"GameState."+this.b}}
A.c2.prototype={
aS(a,b,c){var s=this,r=A.fa(s.b,c,!0,0,s.a+1,!1,new A.c3(s))
s.e!==$&&A.hF()
s.e=r
A.dS(A.dJ(100),new A.c4(s))
r.I()},
aO(){var s,r,q,p,o,n=this
switch(n.ay){case B.l:n.Y(A.a(["Snake!","","Press any key to start!"],t.s))
n.ay=B.k
break
case B.n:s=n.e
s===$&&A.q()
r=n.f
s.B("#","red",n.r,r)
n.Y(A.a([" Game Over! ",""," Press any key to "," play again! "],t.s))
n.ay=B.k
break
case B.m:s=n.c
if(s.length!==0){q=B.d.gaH(s)
B.d.bj(s,q)
s=q.a
if(s===n.y&&q.b===n.z)n.X()
else{r=n.e
r===$&&A.q()
r.ah(" ",q.b,s)}}s=n.ax
s===$&&A.q()
n.at=s
r=n.d
p=n.f
if(!(p>=0&&p<r.length))return A.d(r,p)
p=r[p]
o=n.r
if(!(o>=0&&o<p.length))return A.d(p,o)
p[o]=s
s=n.ch
if(s>0)n.ch=s-1
else n.aN(!1)
n.ba()
s=n.f
if(!(s>=0&&s<r.length))return A.d(r,s)
r=r[s]
p=n.r
o=n.at
if(!(p>=0&&p<r.length))return A.d(r,p)
r[p]=o
o=n.e
o===$&&A.q()
o.B("#","lightgreen",p,s)
break
case B.k:break}},
aN(a){var s,r,q=this,p=q.d,o=q.w
if(!(o>=0&&o<p.length))return A.d(p,o)
p=p[o]
s=q.x
if(!(s>=0&&s<p.length))return A.d(p,s)
r=p[s]
p[s]=B.c
p=q.e
if(a){p===$&&A.q()
p.B("+","red",s,o)
q.c.push(new A.a8(q.w,q.x,t.D))}else{p===$&&A.q()
p.ah(" ",s,o)}$label0$0:{if(B.f===r){q.w=B.a.i(q.w-1,q.a)
break $label0$0}if(B.h===r){q.w=B.a.i(q.w+1,q.a)
break $label0$0}if(B.i===r){q.x=B.a.i(q.x-1,q.b)
break $label0$0}if(B.j===r){q.x=B.a.i(q.x+1,q.b)
break $label0$0}break $label0$0}},
ba(){var s,r,q,p,o=this
$label0$0:{s=o.at
s===$&&A.q()
if(B.f===s){o.f=B.a.i(o.f-1,o.a)
break $label0$0}if(B.h===s){o.f=B.a.i(o.f+1,o.a)
break $label0$0}if(B.i===s){o.r=B.a.i(o.r-1,o.b)
break $label0$0}if(B.j===s){o.r=B.a.i(o.r+1,o.b)
break $label0$0}break $label0$0}$label1$1:{s=o.d
r=o.f
if(!(r>=0&&r<s.length))return A.d(s,r)
r=s[r]
s=o.r
if(!(s>=0&&s<r.length))return A.d(r,s)
q=r[s]
if(B.r===q){s=o.cx
r=o.as
if(s){o.as=r+30
for(p=0;p<5;++p)o.aN(!0)}else{s=o.Q
o.as=r+(s<10?s:20);++o.ch}o.al()
break $label1$1}if(B.t===q){o.ch+=3
break $label1$1}if(B.c===q)break $label1$1
o.ay=B.n
break $label1$1}},
Y(a){return this.bt(a)},
bt(a){var s=0,r=A.h2(t.q),q=this,p,o,n,m,l,k
var $async$Y=A.hd(function(b,c){if(b===1)return A.fF(c,r)
while(true)switch(s){case 0:l=a.length
k=B.a.q(q.a-l,2)
for(p=q.b,o=0;o<a.length;a.length===l||(0,A.dy)(a),++o){n=a[o]
m=q.e
m===$&&A.q()
m.B(n,"white",B.a.q(p-n.length,2),k);++k}return A.fG(null,r)}})
return A.fH($async$Y,r)},
bf(){var s,r,q,p,o,n=this,m=n.a,l=m/2|0
n.f=l
s=n.b
r=s/2|0
n.r=r
n.w=l
n.x=r
n.CW=n.as=0
n.cx=!1
for(l=n.d,r=l.length,q=0;q<m;++q)for(p=0;p<s;++p){if(!(q<r))return A.d(l,q)
o=l[q]
if(!(p<o.length))return A.d(o,p)
o[p]=B.c}m=[B.f,B.h,B.i,B.j]
s=$.d3().J(4)
if(!(s>=0&&s<4))return A.d(m,s)
s=m[s]
n.ax=n.at=s
m=n.f
if(!(m>=0&&m<l.length))return A.d(l,m)
m=l[m]
l=n.r
if(!(l>=0&&l<m.length))return A.d(m,l)
m[l]=s
n.al()
n.ay=B.m},
aD(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.a,d=f.b,c=f.d
do{s=$.d3()
r=s.J(e)
q=s.J(d)
if(!(r>=0&&r<c.length))return A.d(c,r)
s=c[r]
if(!(q>=0&&q<s.length))return A.d(s,q)}while(s[q]!==B.c&&Math.abs(r-f.f)+Math.abs(q-f.r)<10)
for(s=t.t,s=[A.a([-1,0],s),A.a([1,0],s),A.a([0,0],s),A.a([0,-1],s),A.a([0,1],s)],p=0;p<5;++p){o=s[p]
n=B.d.gaH(o)
if(typeof n!=="number")return A.er(n)
m=B.o.i(r+n,e)
n=B.d.gbd(o)
if(typeof n!=="number")return A.er(n)
l=B.o.i(q+n,d)
if(m>>>0!==m||m>=c.length)return A.d(c,m)
n=c[m]
if(l>>>0!==l||l>=n.length)return A.d(n,l)
if(n[l]===B.c)if(m===r||l===q){n[l]=B.t
n=f.e
n===$&&A.q()
k=B.a.i(m,n.a)
j=B.a.i(l,n.b)
i=n.ch
if(!(k<i.length))return A.d(i,k)
h=i[k]
if(!(j<h.length))return A.d(h,j)
h=h[j]
h.c="x"
g=n.CW
g.U(0,h)
n.T()
if(!(k<i.length))return A.d(i,k)
k=i[k]
if(!(j<k.length))return A.d(k,j)
j=k[j]
j.d="red"
g.U(0,j)
n.T()}}},
X(){var s,r=this,q=r.cx,p=r.e
if(q){p===$&&A.q()
q=r.y
p.B("P","gold",r.z,q)}else{p===$&&A.q()
q=r.Q
q=q<10?""+q:"o"
s=r.y
p.B(q,"gold",r.z,s)}},
al(){var s,r,q=this,p="Score: "+q.as,o=q.b,n=o-p.length,m=B.a.q(n,2),l=q.e
l===$&&A.q()
s=q.a
l.B(B.p.Z(" ",m)+p+B.p.Z(" ",n-m),"white",0,s)
n=q.d
do{l=$.d3()
q.y=l.J(s)
l=l.J(o)
q.z=l
r=q.y
if(!(r>=0&&r<n.length))return A.d(n,r)
r=n[r]
if(!(l>=0&&l<r.length))return A.d(r,l)}while(r[l]!==B.c)
r[l]=B.r
if(++q.CW%10===0){q.cx=!0
q.Q=3
q.X()}else{q.cx=!1
q.Q=11
q.X()}if(B.a.i(q.CW,13)===0)q.aD()}}
A.c3.prototype={
$2(a,b){var s,r,q,p=this.a,o=new A.c5(p)
$label0$0:{s=p.ay
if(B.n===s||B.l===s)break $label0$0
if(B.k===s){r=p.e
r===$&&A.q()
r.V(0)
p.bf()
break $label0$0}if(B.m===s){switch(b.a){case 38:r=p.ax
r===$&&A.q()
if(r!==B.h&&r!==B.f&&o.$2(p.f-1,p.r)){p.ax=B.f;--p.Q}break
case 40:r=p.ax
r===$&&A.q()
if(r!==B.f&&r!==B.h&&o.$2(p.f+1,p.r)){p.ax=B.h;--p.Q}break
case 37:r=p.ax
r===$&&A.q()
if(r!==B.j&&r!==B.i&&o.$2(p.f,p.r-1)){p.ax=B.i;--p.Q}break
case 39:r=p.ax
r===$&&A.q()
if(r!==B.i&&r!==B.j&&o.$2(p.f,p.r+1)){p.ax=B.j;--p.Q}break}if(p.Q===0){p.ch=p.cx?0:1
r=p.e
r===$&&A.q()
q=p.y
r.ah(" ",p.z,q)
q=p.d
r=p.y
if(!(r>=0&&r<q.length))return A.d(q,r)
r=q[r]
q=p.z
if(!(q>=0&&q<r.length))return A.d(r,q)
r[q]=B.c
if(!p.cx)p.aD()
p.al()}else p.X()
break $label0$0}throw A.b(new A.br("None of the patterns in the exhaustive switch statement the matched input value. See https://github.com/dart-lang/language/issues/3488 for details."))}},
$S:20}
A.c5.prototype={
$2(a,b){var s=A.a([B.r,B.t,B.c],t.p),r=this.a,q=r.d,p=B.a.i(a,r.a)
if(!(p<q.length))return A.d(q,p)
p=q[p]
r=B.a.i(b,r.b)
if(!(r<p.length))return A.d(p,r)
return B.d.b6(s,p[r])},
$S:21}
A.c4.prototype={
$1(a){var s=this.a,r=s.e
r===$&&A.q()
if(r.w.gaI())s.aO()},
$S:5};(function aliases(){var s=J.P.prototype
s.aQ=s.h})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._instance_0u
s(A,"hf","ff",3)
s(A,"hg","fg",3)
s(A,"hh","fh",3)
r(A,"em","h8",0)
var p
q(p=A.bt.prototype,"gab","I",0)
q(p,"ga9","G",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.i,null)
q(A.i,[A.d7,J.ba,J.b1,A.h,A.c1,A.be,A.an,A.ag,A.b6,A.ch,A.bU,A.am,A.aP,A.Y,A.av,A.bS,A.x,A.bF,A.bK,A.aQ,A.by,A.X,A.bB,A.ae,A.p,A.bA,A.bI,A.cN,A.aC,A.cG,A.af,A.k,A.b7,A.cp,A.bp,A.aD,A.cr,A.r,A.bJ,A.bv,A.cE,A.a8,A.bH,A.M,A.O,A.a6,A.a9,A.bt,A.aE,A.d5,A.bE,A.c2])
q(J.ba,[J.bb,J.ap,J.ar,J.aq,J.as,J.a3,J.a4])
q(J.ar,[J.P,J.n,A.bf,A.ay])
q(J.P,[J.bq,J.ad,J.N])
r(J.bR,J.n)
q(J.a3,[J.ao,J.bc])
q(A.h,[A.a5,A.br,A.F,A.bd,A.bx,A.bC,A.bs,A.bD,A.b2,A.y,A.aF,A.bw,A.bu,A.b4])
r(A.bG,A.ag)
r(A.A,A.bG)
r(A.b8,A.b6)
r(A.aA,A.F)
q(A.Y,[A.bO,A.bP,A.c7,A.cV,A.cX,A.cm,A.cl,A.cO,A.cw,A.cD,A.cJ,A.c_,A.c0,A.cf,A.ce,A.c8,A.c9,A.ca,A.cb,A.cc,A.cq,A.c4])
q(A.c7,[A.c6,A.al])
r(A.au,A.av)
r(A.at,A.au)
q(A.bP,[A.cW,A.cP,A.cS,A.cx,A.bT,A.bX,A.c3,A.c5])
q(A.ay,[A.bg,A.a7])
q(A.a7,[A.aJ,A.aL])
r(A.aK,A.aJ)
r(A.aw,A.aK)
r(A.aM,A.aL)
r(A.ax,A.aM)
q(A.aw,[A.bh,A.bi])
q(A.ax,[A.bj,A.bk,A.bl,A.bm,A.bn,A.az,A.bo])
r(A.aR,A.bD)
q(A.bO,[A.cn,A.co,A.cL,A.cK,A.cs,A.cz,A.cy,A.cv,A.cu,A.ct,A.cC,A.cB,A.cA,A.cR,A.cI,A.bY,A.bZ,A.cd])
r(A.bz,A.bB)
r(A.cH,A.cN)
r(A.aO,A.aC)
r(A.aI,A.aO)
q(A.y,[A.aa,A.b9])
r(A.ab,A.bH)
q(A.cp,[A.C,A.ac,A.z,A.a2])
s(A.aJ,A.k)
s(A.aK,A.an)
s(A.aL,A.k)
s(A.aM,A.an)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{c:"int",t:"double",hB:"num",D:"String",dq:"bool",r:"Null",f:"List",i:"Object",hL:"Map"},mangledNames:{},types:["~()","~(j)","r()","~(~())","r(@)","~(cg)","@(@)","@(@,D)","@(D)","r(~())","~(@)","r(@,Q)","~(c,@)","r(i,Q)","p<@>(@)","~(i?,i?)","c(c,c)","a6(j)","O(j)","D()","~(aE,O)","dq(c,c)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.A&&a.b(c.a)&&b.b(c.b)}}
A.fA(v.typeUniverse,JSON.parse('{"bq":"P","ad":"P","N":"P","bb":{"e":[]},"ap":{"r":[],"e":[]},"ar":{"j":[]},"P":{"j":[]},"n":{"f":["1"],"j":[]},"bR":{"n":["1"],"f":["1"],"j":[]},"a3":{"t":[]},"ao":{"t":[],"c":[],"e":[]},"bc":{"t":[],"e":[]},"a4":{"D":[],"e":[]},"a5":{"h":[]},"br":{"h":[]},"aA":{"F":[],"h":[]},"bd":{"h":[]},"bx":{"h":[]},"aP":{"Q":[]},"bC":{"h":[]},"bs":{"h":[]},"au":{"av":["1","2"]},"at":{"au":["1","2"],"av":["1","2"]},"bf":{"j":[],"e":[]},"ay":{"j":[]},"bg":{"j":[],"e":[]},"a7":{"w":["1"],"j":[]},"aw":{"k":["t"],"f":["t"],"w":["t"],"j":[]},"ax":{"k":["c"],"f":["c"],"w":["c"],"j":[]},"bh":{"k":["t"],"f":["t"],"w":["t"],"j":[],"e":[],"k.E":"t"},"bi":{"k":["t"],"f":["t"],"w":["t"],"j":[],"e":[],"k.E":"t"},"bj":{"k":["c"],"f":["c"],"w":["c"],"j":[],"e":[],"k.E":"c"},"bk":{"k":["c"],"f":["c"],"w":["c"],"j":[],"e":[],"k.E":"c"},"bl":{"k":["c"],"f":["c"],"w":["c"],"j":[],"e":[],"k.E":"c"},"bm":{"k":["c"],"f":["c"],"w":["c"],"j":[],"e":[],"k.E":"c"},"bn":{"cj":[],"k":["c"],"f":["c"],"w":["c"],"j":[],"e":[],"k.E":"c"},"az":{"k":["c"],"f":["c"],"w":["c"],"j":[],"e":[],"k.E":"c"},"bo":{"k":["c"],"f":["c"],"w":["c"],"j":[],"e":[],"k.E":"c"},"bD":{"h":[]},"aR":{"F":[],"h":[]},"p":{"a1":["1"]},"aQ":{"cg":[]},"X":{"h":[]},"aI":{"aC":["1"]},"aO":{"aC":["1"]},"b2":{"h":[]},"F":{"h":[]},"y":{"h":[]},"aa":{"h":[]},"b9":{"h":[]},"aF":{"h":[]},"bw":{"h":[]},"bu":{"h":[]},"b4":{"h":[]},"bp":{"h":[]},"aD":{"h":[]},"bJ":{"Q":[]},"ab":{"bH":["1"]},"f_":{"f":["c"]},"fd":{"f":["c"]},"fc":{"f":["c"]},"eY":{"f":["c"]},"fb":{"f":["c"]},"eZ":{"f":["c"]},"cj":{"f":["c"]},"eV":{"f":["t"]},"eW":{"f":["t"]}}'))
A.fz(v.typeUniverse,JSON.parse('{"an":1,"b6":2,"a7":1,"bB":1,"bI":1,"aO":1,"bE":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.dt
return{o:s("M"),Q:s("h"),Z:s("hK"),V:s("n<M>"),G:s("n<f<M>>"),I:s("n<f<z>>"),f:s("n<i>"),U:s("n<a8<c>>"),s:s("n<D>"),w:s("n<cj>"),p:s("n<z>"),b:s("n<@>"),t:s("n<c>"),T:s("ap"),m:s("j"),g:s("N"),E:s("w<@>"),W:s("O"),j:s("f<@>"),n:s("a6"),P:s("r"),K:s("i"),D:s("a8<c>"),L:s("hM"),F:s("+()"),l:s("Q"),N:s("D"),J:s("cg"),R:s("e"),c:s("F"),B:s("ad"),d:s("p<@>"),y:s("dq"),i:s("t"),z:s("@"),v:s("@(i)"),C:s("@(i,Q)"),S:s("c"),A:s("0&*"),_:s("i*"),O:s("a1<r>?"),X:s("i?"),H:s("hB"),q:s("~")}})();(function constants(){var s=hunkHelpers.makeConstList
B.J=J.ba.prototype
B.d=J.n.prototype
B.a=J.ao.prototype
B.o=J.a3.prototype
B.p=J.a4.prototype
B.K=J.N.prototype
B.L=J.ar.prototype
B.x=J.bq.prototype
B.q=J.ad.prototype
B.u=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.A=function() {
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
B.F=function(getTagFallback) {
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
B.B=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.E=function(hooks) {
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
B.D=function(hooks) {
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
B.C=function(hooks) {
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

B.G=new A.bp()
B.e=new A.c1()
B.H=new A.cE()
B.b=new A.cH()
B.I=new A.bJ()
B.l=new A.a2("titleScreen")
B.k=new A.a2("wait")
B.m=new A.a2("play")
B.n=new A.a2("gameOver")
B.a8=A.a(s([126,129,165,129,189,153,129,126]),t.t)
B.dM=A.a(s([126,255,219,255,195,231,255,126]),t.t)
B.a9=A.a(s([108,254,254,254,124,56,16,0]),t.t)
B.aa=A.a(s([16,56,124,254,124,56,16,0]),t.t)
B.bW=A.a(s([56,124,56,254,254,124,56,124]),t.t)
B.cw=A.a(s([16,16,56,124,254,124,56,124]),t.t)
B.cH=A.a(s([0,0,24,60,60,24,0,0]),t.t)
B.M=A.a(s([255,255,231,195,195,231,255,255]),t.t)
B.cS=A.a(s([0,60,102,66,66,102,60,0]),t.t)
B.dO=A.a(s([255,195,153,189,189,153,195,255]),t.t)
B.d2=A.a(s([15,7,15,125,204,204,204,120]),t.t)
B.dd=A.a(s([60,102,102,102,60,24,126,24]),t.t)
B.dp=A.a(s([63,51,63,48,48,112,240,224]),t.t)
B.dA=A.a(s([127,99,127,99,99,103,230,192]),t.t)
B.dN=A.a(s([153,90,60,231,231,60,90,153]),t.t)
B.ab=A.a(s([128,224,248,254,248,224,128,0]),t.t)
B.am=A.a(s([2,14,62,254,62,14,2,0]),t.t)
B.ax=A.a(s([24,60,126,24,24,126,60,24]),t.t)
B.aI=A.a(s([102,102,102,102,102,0,102,0]),t.t)
B.aT=A.a(s([127,219,219,123,27,27,27,0]),t.t)
B.b3=A.a(s([62,99,56,108,108,56,204,120]),t.t)
B.be=A.a(s([0,0,0,0,126,126,126,0]),t.t)
B.Q=A.a(s([24,60,126,24,126,60,24,255]),t.t)
B.bp=A.a(s([24,60,126,24,24,24,24,0]),t.t)
B.bA=A.a(s([24,24,24,24,126,60,24,0]),t.t)
B.bL=A.a(s([0,24,12,254,12,24,0,0]),t.t)
B.bX=A.a(s([0,48,96,254,96,48,0,0]),t.t)
B.c7=A.a(s([0,0,192,192,192,254,0,0]),t.t)
B.O=A.a(s([0,36,102,255,102,36,0,0]),t.t)
B.dL=A.a(s([0,24,60,126,255,255,0,0]),t.t)
B.a7=A.a(s([0,255,255,126,60,24,0,0]),t.t)
B.ci=A.a(s([0,0,0,0,0,0,0,0]),t.t)
B.cp=A.a(s([48,120,120,48,48,0,48,0]),t.t)
B.cq=A.a(s([108,108,108,0,0,0,0,0]),t.t)
B.cr=A.a(s([108,108,254,108,254,108,108,0]),t.t)
B.cs=A.a(s([48,124,192,120,12,248,48,0]),t.t)
B.ct=A.a(s([0,198,204,24,48,102,198,0]),t.t)
B.cu=A.a(s([56,108,56,118,220,204,118,0]),t.t)
B.cv=A.a(s([96,96,192,0,0,0,0,0]),t.t)
B.cx=A.a(s([24,48,96,96,96,48,24,0]),t.t)
B.cy=A.a(s([96,48,24,24,24,48,96,0]),t.t)
B.P=A.a(s([0,102,60,255,60,102,0,0]),t.t)
B.cz=A.a(s([0,48,48,252,48,48,0,0]),t.t)
B.cA=A.a(s([0,0,0,0,0,48,48,96]),t.t)
B.cB=A.a(s([0,0,0,252,0,0,0,0]),t.t)
B.cC=A.a(s([0,0,0,0,0,48,48,0]),t.t)
B.cD=A.a(s([6,12,24,48,96,192,128,0]),t.t)
B.cE=A.a(s([124,198,206,222,246,230,124,0]),t.t)
B.cF=A.a(s([48,112,48,48,48,48,252,0]),t.t)
B.cG=A.a(s([120,204,12,56,96,204,252,0]),t.t)
B.cI=A.a(s([120,204,12,56,12,204,120,0]),t.t)
B.cJ=A.a(s([28,60,108,204,254,12,30,0]),t.t)
B.cK=A.a(s([252,192,248,12,12,204,120,0]),t.t)
B.cL=A.a(s([56,96,192,248,204,204,120,0]),t.t)
B.cM=A.a(s([252,204,12,24,48,48,48,0]),t.t)
B.cN=A.a(s([120,204,204,120,204,204,120,0]),t.t)
B.cO=A.a(s([120,204,204,124,12,24,112,0]),t.t)
B.cP=A.a(s([0,48,48,0,0,48,48,0]),t.t)
B.cQ=A.a(s([0,48,48,0,0,48,48,96]),t.t)
B.cR=A.a(s([24,48,96,192,96,48,24,0]),t.t)
B.cT=A.a(s([0,0,252,0,0,252,0,0]),t.t)
B.cU=A.a(s([96,48,24,12,24,48,96,0]),t.t)
B.cV=A.a(s([120,204,12,24,48,0,48,0]),t.t)
B.cW=A.a(s([124,198,222,222,222,192,120,0]),t.t)
B.cX=A.a(s([48,120,204,204,252,204,204,0]),t.t)
B.cY=A.a(s([252,102,102,124,102,102,252,0]),t.t)
B.cZ=A.a(s([60,102,192,192,192,102,60,0]),t.t)
B.d_=A.a(s([248,108,102,102,102,108,248,0]),t.t)
B.d0=A.a(s([254,98,104,120,104,98,254,0]),t.t)
B.d1=A.a(s([254,98,104,120,104,96,240,0]),t.t)
B.d3=A.a(s([60,102,192,192,206,102,62,0]),t.t)
B.d4=A.a(s([204,204,204,252,204,204,204,0]),t.t)
B.d5=A.a(s([120,48,48,48,48,48,120,0]),t.t)
B.d6=A.a(s([30,12,12,12,204,204,120,0]),t.t)
B.d7=A.a(s([230,102,108,120,108,102,230,0]),t.t)
B.d8=A.a(s([240,96,96,96,98,102,254,0]),t.t)
B.d9=A.a(s([198,238,254,254,214,198,198,0]),t.t)
B.da=A.a(s([198,230,246,222,206,198,198,0]),t.t)
B.db=A.a(s([56,108,198,198,198,108,56,0]),t.t)
B.dc=A.a(s([252,102,102,124,96,96,240,0]),t.t)
B.de=A.a(s([120,204,204,204,220,120,28,0]),t.t)
B.df=A.a(s([252,102,102,124,108,102,230,0]),t.t)
B.dg=A.a(s([120,204,224,112,28,204,120,0]),t.t)
B.dh=A.a(s([252,180,48,48,48,48,120,0]),t.t)
B.di=A.a(s([204,204,204,204,204,204,252,0]),t.t)
B.dj=A.a(s([204,204,204,204,204,120,48,0]),t.t)
B.dk=A.a(s([198,198,198,214,254,238,198,0]),t.t)
B.dl=A.a(s([198,198,108,56,56,108,198,0]),t.t)
B.dm=A.a(s([204,204,204,120,48,48,120,0]),t.t)
B.dn=A.a(s([254,198,140,24,50,102,254,0]),t.t)
B.dq=A.a(s([120,96,96,96,96,96,120,0]),t.t)
B.dr=A.a(s([192,96,48,24,12,6,2,0]),t.t)
B.ds=A.a(s([120,24,24,24,24,24,120,0]),t.t)
B.dt=A.a(s([16,56,108,198,0,0,0,0]),t.t)
B.R=A.a(s([0,0,0,0,0,0,0,255]),t.t)
B.du=A.a(s([48,48,24,0,0,0,0,0]),t.t)
B.dv=A.a(s([0,0,120,12,124,204,118,0]),t.t)
B.dw=A.a(s([224,96,96,124,102,102,220,0]),t.t)
B.dx=A.a(s([0,0,120,204,192,204,120,0]),t.t)
B.dy=A.a(s([28,12,12,124,204,204,118,0]),t.t)
B.dz=A.a(s([0,0,120,204,252,192,120,0]),t.t)
B.dB=A.a(s([56,108,96,240,96,96,240,0]),t.t)
B.dC=A.a(s([0,0,118,204,204,124,12,248]),t.t)
B.dD=A.a(s([224,96,108,118,102,102,230,0]),t.t)
B.dE=A.a(s([48,0,112,48,48,48,120,0]),t.t)
B.dF=A.a(s([12,0,12,12,12,204,204,120]),t.t)
B.dG=A.a(s([224,96,102,108,120,108,230,0]),t.t)
B.dH=A.a(s([112,48,48,48,48,48,120,0]),t.t)
B.dI=A.a(s([0,0,204,254,254,214,198,0]),t.t)
B.dJ=A.a(s([0,0,248,204,204,204,204,0]),t.t)
B.dK=A.a(s([0,0,120,204,204,204,120,0]),t.t)
B.ac=A.a(s([0,0,220,102,102,124,96,240]),t.t)
B.ad=A.a(s([0,0,118,204,204,124,12,30]),t.t)
B.ae=A.a(s([0,0,220,118,102,96,240,0]),t.t)
B.af=A.a(s([0,0,124,192,120,12,248,0]),t.t)
B.ag=A.a(s([16,48,124,48,48,52,24,0]),t.t)
B.ah=A.a(s([0,0,204,204,204,204,118,0]),t.t)
B.ai=A.a(s([0,0,204,204,204,120,48,0]),t.t)
B.aj=A.a(s([0,0,198,214,254,254,108,0]),t.t)
B.ak=A.a(s([0,0,198,108,56,108,198,0]),t.t)
B.al=A.a(s([0,0,204,204,204,124,12,248]),t.t)
B.an=A.a(s([0,0,252,152,48,100,252,0]),t.t)
B.ao=A.a(s([28,48,48,224,48,48,28,0]),t.t)
B.ap=A.a(s([24,24,24,0,24,24,24,0]),t.t)
B.aq=A.a(s([224,48,48,28,48,48,224,0]),t.t)
B.ar=A.a(s([118,220,0,0,0,0,0,0]),t.t)
B.as=A.a(s([0,16,56,108,198,198,254,0]),t.t)
B.at=A.a(s([120,204,192,204,120,24,12,120]),t.t)
B.au=A.a(s([0,204,0,204,204,204,126,0]),t.t)
B.av=A.a(s([28,0,120,204,252,192,120,0]),t.t)
B.aw=A.a(s([126,195,60,6,62,102,63,0]),t.t)
B.ay=A.a(s([204,0,120,12,124,204,126,0]),t.t)
B.az=A.a(s([224,0,120,12,124,204,126,0]),t.t)
B.aA=A.a(s([48,48,120,12,124,204,126,0]),t.t)
B.aB=A.a(s([0,0,120,192,192,120,12,56]),t.t)
B.aC=A.a(s([126,195,60,102,126,96,60,0]),t.t)
B.aD=A.a(s([204,0,120,204,252,192,120,0]),t.t)
B.aE=A.a(s([224,0,120,204,252,192,120,0]),t.t)
B.aF=A.a(s([204,0,112,48,48,48,120,0]),t.t)
B.aG=A.a(s([124,198,56,24,24,24,60,0]),t.t)
B.aH=A.a(s([224,0,112,48,48,48,120,0]),t.t)
B.aJ=A.a(s([198,56,108,198,254,198,198,0]),t.t)
B.aK=A.a(s([48,48,0,120,204,252,204,0]),t.t)
B.aL=A.a(s([28,0,252,96,120,96,252,0]),t.t)
B.aM=A.a(s([0,0,127,12,127,204,127,0]),t.t)
B.aN=A.a(s([62,108,204,254,204,204,206,0]),t.t)
B.aO=A.a(s([120,204,0,120,204,204,120,0]),t.t)
B.aP=A.a(s([0,204,0,120,204,204,120,0]),t.t)
B.aQ=A.a(s([0,224,0,120,204,204,120,0]),t.t)
B.aR=A.a(s([120,204,0,204,204,204,126,0]),t.t)
B.aS=A.a(s([0,224,0,204,204,204,126,0]),t.t)
B.aU=A.a(s([0,204,0,204,204,124,12,248]),t.t)
B.aV=A.a(s([195,24,60,102,102,60,24,0]),t.t)
B.aW=A.a(s([204,0,204,204,204,204,120,0]),t.t)
B.aX=A.a(s([24,24,126,192,192,126,24,24]),t.t)
B.aY=A.a(s([56,108,100,240,96,230,252,0]),t.t)
B.aZ=A.a(s([204,204,120,252,48,252,48,48]),t.t)
B.b_=A.a(s([248,204,204,250,198,207,198,199]),t.t)
B.b0=A.a(s([14,27,24,60,24,24,216,112]),t.t)
B.b1=A.a(s([28,0,120,12,124,204,126,0]),t.t)
B.b2=A.a(s([56,0,112,48,48,48,120,0]),t.t)
B.b4=A.a(s([0,28,0,120,204,204,120,0]),t.t)
B.b5=A.a(s([0,28,0,204,204,204,126,0]),t.t)
B.b6=A.a(s([0,248,0,248,204,204,204,0]),t.t)
B.b7=A.a(s([252,0,204,236,252,220,204,0]),t.t)
B.b8=A.a(s([60,108,108,62,0,126,0,0]),t.t)
B.b9=A.a(s([56,108,108,56,0,124,0,0]),t.t)
B.ba=A.a(s([48,0,48,96,192,204,120,0]),t.t)
B.bb=A.a(s([0,0,0,252,192,192,0,0]),t.t)
B.bc=A.a(s([0,0,0,252,12,12,0,0]),t.t)
B.bd=A.a(s([195,198,204,222,51,102,204,15]),t.t)
B.bf=A.a(s([195,198,204,219,55,111,207,3]),t.t)
B.bg=A.a(s([24,24,0,24,24,24,24,0]),t.t)
B.bh=A.a(s([0,51,102,204,102,51,0,0]),t.t)
B.bi=A.a(s([0,204,102,51,102,204,0,0]),t.t)
B.bj=A.a(s([34,136,34,136,34,136,34,136]),t.t)
B.bk=A.a(s([85,170,85,170,85,170,85,170]),t.t)
B.bl=A.a(s([219,119,219,238,219,119,219,238]),t.t)
B.bm=A.a(s([24,24,24,24,24,24,24,24]),t.t)
B.bn=A.a(s([24,24,24,24,248,24,24,24]),t.t)
B.bo=A.a(s([24,24,248,24,248,24,24,24]),t.t)
B.bq=A.a(s([54,54,54,54,246,54,54,54]),t.t)
B.br=A.a(s([0,0,0,0,254,54,54,54]),t.t)
B.bs=A.a(s([0,0,248,24,248,24,24,24]),t.t)
B.bt=A.a(s([54,54,246,6,246,54,54,54]),t.t)
B.bu=A.a(s([54,54,54,54,54,54,54,54]),t.t)
B.bv=A.a(s([0,0,254,6,246,54,54,54]),t.t)
B.bw=A.a(s([54,54,246,6,254,0,0,0]),t.t)
B.bx=A.a(s([54,54,54,54,254,0,0,0]),t.t)
B.by=A.a(s([24,24,248,24,248,0,0,0]),t.t)
B.bz=A.a(s([0,0,0,0,248,24,24,24]),t.t)
B.bB=A.a(s([24,24,24,24,31,0,0,0]),t.t)
B.Z=A.a(s([24,24,24,24,255,0,0,0]),t.t)
B.a_=A.a(s([0,0,0,0,255,24,24,24]),t.t)
B.bC=A.a(s([24,24,24,24,31,24,24,24]),t.t)
B.a0=A.a(s([0,0,0,0,255,0,0,0]),t.t)
B.a1=A.a(s([24,24,24,24,255,24,24,24]),t.t)
B.bD=A.a(s([24,24,31,24,31,24,24,24]),t.t)
B.bE=A.a(s([54,54,54,54,55,54,54,54]),t.t)
B.bF=A.a(s([54,54,55,48,63,0,0,0]),t.t)
B.bG=A.a(s([0,0,63,48,55,54,54,54]),t.t)
B.S=A.a(s([54,54,247,0,255,0,0,0]),t.t)
B.T=A.a(s([0,0,255,0,247,54,54,54]),t.t)
B.bH=A.a(s([54,54,55,48,55,54,54,54]),t.t)
B.U=A.a(s([0,0,255,0,255,0,0,0]),t.t)
B.V=A.a(s([54,54,247,0,247,54,54,54]),t.t)
B.W=A.a(s([24,24,255,0,255,0,0,0]),t.t)
B.a2=A.a(s([54,54,54,54,255,0,0,0]),t.t)
B.X=A.a(s([0,0,255,0,255,24,24,24]),t.t)
B.a3=A.a(s([0,0,0,0,255,54,54,54]),t.t)
B.bI=A.a(s([54,54,54,54,63,0,0,0]),t.t)
B.bJ=A.a(s([24,24,31,24,31,0,0,0]),t.t)
B.bK=A.a(s([0,0,31,24,31,24,24,24]),t.t)
B.bM=A.a(s([0,0,0,0,63,54,54,54]),t.t)
B.a4=A.a(s([54,54,54,54,255,54,54,54]),t.t)
B.Y=A.a(s([24,24,255,24,255,24,24,24]),t.t)
B.bN=A.a(s([24,24,24,24,248,0,0,0]),t.t)
B.bO=A.a(s([0,0,0,0,31,24,24,24]),t.t)
B.N=A.a(s([255,255,255,255,255,255,255,255]),t.t)
B.a6=A.a(s([0,0,0,0,255,255,255,255]),t.t)
B.bP=A.a(s([240,240,240,240,240,240,240,240]),t.t)
B.bQ=A.a(s([15,15,15,15,15,15,15,15]),t.t)
B.a5=A.a(s([255,255,255,255,0,0,0,0]),t.t)
B.bR=A.a(s([0,0,118,220,200,220,118,0]),t.t)
B.bS=A.a(s([0,120,204,248,204,248,192,192]),t.t)
B.bT=A.a(s([0,252,204,192,192,192,192,0]),t.t)
B.bU=A.a(s([0,254,108,108,108,108,108,0]),t.t)
B.bV=A.a(s([252,204,96,48,96,204,252,0]),t.t)
B.bY=A.a(s([0,0,126,216,216,216,112,0]),t.t)
B.bZ=A.a(s([0,102,102,102,102,124,96,192]),t.t)
B.c_=A.a(s([0,118,220,24,24,24,24,0]),t.t)
B.c0=A.a(s([252,48,120,204,204,120,48,252]),t.t)
B.c1=A.a(s([56,108,198,254,198,108,56,0]),t.t)
B.c2=A.a(s([56,108,198,198,108,108,238,0]),t.t)
B.c3=A.a(s([28,48,24,124,204,204,120,0]),t.t)
B.c4=A.a(s([0,0,126,219,219,126,0,0]),t.t)
B.c5=A.a(s([6,12,126,219,219,126,96,192]),t.t)
B.c6=A.a(s([56,96,192,248,192,96,56,0]),t.t)
B.c8=A.a(s([120,204,204,204,204,204,204,0]),t.t)
B.c9=A.a(s([0,252,0,252,0,252,0,0]),t.t)
B.ca=A.a(s([48,48,252,48,48,0,252,0]),t.t)
B.cb=A.a(s([96,48,24,48,96,0,252,0]),t.t)
B.cc=A.a(s([24,48,96,48,24,0,252,0]),t.t)
B.cd=A.a(s([14,27,27,24,24,24,24,24]),t.t)
B.ce=A.a(s([24,24,24,24,24,216,216,112]),t.t)
B.cf=A.a(s([48,48,0,252,0,48,48,0]),t.t)
B.cg=A.a(s([0,118,220,0,118,220,0,0]),t.t)
B.ch=A.a(s([56,108,108,56,0,0,0,0]),t.t)
B.cj=A.a(s([0,0,0,24,24,0,0,0]),t.t)
B.ck=A.a(s([0,0,0,0,24,0,0,0]),t.t)
B.cl=A.a(s([15,12,12,12,236,108,60,28]),t.t)
B.cm=A.a(s([120,108,108,108,108,0,0,0]),t.t)
B.cn=A.a(s([112,24,48,96,120,0,0,0]),t.t)
B.co=A.a(s([0,0,60,60,60,60,0,0]),t.t)
B.dP=new A.b8(["\u263a",B.a8,"\u263b",B.dM,"\u2665",B.a9,"\u2666",B.aa,"\u2663",B.bW,"\u2660",B.cw,"\u2022",B.cH,"\u25d8",B.M,"\u25cb",B.cS,"\u25d9",B.dO,"\u2642",B.d2,"\u2640",B.dd,"\u266a",B.dp,"\u266b",B.dA,"\u263c",B.dN,"\u25ba",B.ab,"\u25c4",B.am,"\u2195",B.ax,"\u203c",B.aI,"\xb6",B.aT,"\xa7",B.b3,"\u25ac",B.be,"\u21a8",B.Q,"\u2191",B.bp,"\u2193",B.bA,"\u2192",B.bL,"\u2190",B.bX,"\u221f",B.c7,"\u2194",B.O,"\u25b2",B.dL,"\u25bc",B.a7," ",B.ci,"!",B.cp,'"',B.cq,"#",B.cr,"$",B.cs,"%",B.ct,"&",B.cu,"'",B.cv,"(",B.cx,")",B.cy,"*",B.P,"+",B.cz,",",B.cA,"-",B.cB,".",B.cC,"/",B.cD,"0",B.cE,"1",B.cF,"2",B.cG,"3",B.cI,"4",B.cJ,"5",B.cK,"6",B.cL,"7",B.cM,"8",B.cN,"9",B.cO,":",B.cP,";",B.cQ,"<",B.cR,"=",B.cT,">",B.cU,"?",B.cV,"@",B.cW,"A",B.cX,"B",B.cY,"C",B.cZ,"D",B.d_,"E",B.d0,"F",B.d1,"G",B.d3,"H",B.d4,"I",B.d5,"J",B.d6,"K",B.d7,"L",B.d8,"M",B.d9,"N",B.da,"O",B.db,"P",B.dc,"Q",B.de,"R",B.df,"S",B.dg,"T",B.dh,"U",B.di,"V",B.dj,"W",B.dk,"X",B.dl,"Y",B.dm,"Z",B.dn,"[",B.dq,"\\",B.dr,"]",B.ds,"^",B.dt,"_",B.R,"`",B.du,"a",B.dv,"b",B.dw,"c",B.dx,"d",B.dy,"e",B.dz,"f",B.dB,"g",B.dC,"h",B.dD,"i",B.dE,"j",B.dF,"k",B.dG,"l",B.dH,"m",B.dI,"n",B.dJ,"o",B.dK,"p",B.ac,"q",B.ad,"r",B.ae,"s",B.af,"t",B.ag,"u",B.ah,"v",B.ai,"w",B.aj,"x",B.ak,"y",B.al,"z",B.an,"{",B.ao,"|",B.ap,"}",B.aq,"~",B.ar,"\u2302",B.as,"\xc7",B.at,"\xfc",B.au,"\xe9",B.av,"\xe2",B.aw,"\xe4",B.ay,"\xe0",B.az,"\xe5",B.aA,"\xe7",B.aB,"\xea",B.aC,"\xeb",B.aD,"\xe8",B.aE,"\xef",B.aF,"\xee",B.aG,"\xec",B.aH,"\xc4",B.aJ,"\xc5",B.aK,"\xc9",B.aL,"\xe6",B.aM,"\xc6",B.aN,"\xf4",B.aO,"\xf6",B.aP,"\xf2",B.aQ,"\xfb",B.aR,"\xf9",B.aS,"\xff",B.aU,"\xd6",B.aV,"\xdc",B.aW,"\xa2",B.aX,"\xa3",B.aY,"\xa5",B.aZ,"\u20a7",B.b_,"\u0192",B.b0,"\xe1",B.b1,"\xed",B.b2,"\xf3",B.b4,"\xfa",B.b5,"\xf1",B.b6,"\xd1",B.b7,"\xaa",B.b8,"\xba",B.b9,"\xbf",B.ba,"\u2310",B.bb,"\xac",B.bc,"\xbd",B.bd,"\xbc",B.bf,"\xa1",B.bg,"\xab",B.bh,"\xbb",B.bi,"\u2591",B.bj,"\u2592",B.bk,"\u2593",B.bl,"\u2502",B.bm,"\u2524",B.bn,"\u2561",B.bo,"\u2562",B.bq,"\u2556",B.br,"\u2555",B.bs,"\u2563",B.bt,"\u2551",B.bu,"\u2557",B.bv,"\u255d",B.bw,"\u255c",B.bx,"\u255b",B.by,"\u2510",B.bz,"\u2514",B.bB,"\u2534",B.Z,"\u252c",B.a_,"\u251c",B.bC,"\u2500",B.a0,"\u253c",B.a1,"\u255e",B.bD,"\u255f",B.bE,"\u255a",B.bF,"\u2554",B.bG,"\u2569",B.S,"\u2566",B.T,"\u2560",B.bH,"\u2550",B.U,"\u256c",B.V,"\u2567",B.W,"\u2568",B.a2,"\u2564",B.X,"\u2565",B.a3,"\u2559",B.bI,"\u2558",B.bJ,"\u2552",B.bK,"\u2553",B.bM,"\u256b",B.a4,"\u256a",B.Y,"\u2518",B.bN,"\u250c",B.bO,"\u2588",B.N,"\u2584",B.a6,"\u258c",B.bP,"\u2590",B.bQ,"\u2580",B.a5,"\u03b1",B.bR,"\xdf",B.bS,"\u0393",B.bT,"\u03c0",B.bU,"\u03a3",B.bV,"\u03c3",B.bY,"\xb5",B.bZ,"\u03c4",B.c_,"\u03a6",B.c0,"\u0398",B.c1,"\u03a9",B.c2,"\u03b4",B.c3,"\u221e",B.c4,"\u03c6",B.c5,"\u03b5",B.c6,"\u2229",B.c8,"\u2261",B.c9,"\xb1",B.ca,"\u2265",B.cb,"\u2264",B.cc,"\u2320",B.cd,"\u2321",B.ce,"\xf7",B.cf,"\u2248",B.cg,"\xb0",B.ch,"\u2219",B.cj,"\xb7",B.ck,"\u221a",B.cl,"\u207f",B.cm,"\xb2",B.cn,"\u25a0",B.co],A.dt("b8<D,f<c>>"))
B.w=new A.C("replace")
B.dQ=new A.C("inverse")
B.dR=new A.C("over")
B.dS=new A.C("under")
B.dT=new A.C("stain")
B.dU=new A.C("delete")
B.dV=new A.C("maskDestination")
B.dW=new A.C("maskSource")
B.y=new A.ac("ready")
B.dX=new A.ac("awaitingKey")
B.z=new A.ac("awaitingString")
B.dY=new A.ac("awaitingMouseClick")
B.dZ=A.B("hH")
B.e_=A.B("hI")
B.e0=A.B("eV")
B.e1=A.B("eW")
B.e2=A.B("eY")
B.e3=A.B("eZ")
B.e4=A.B("f_")
B.e5=A.B("i")
B.e6=A.B("fb")
B.e7=A.B("cj")
B.e8=A.B("fc")
B.e9=A.B("fd")
B.c=new A.z("nothing")
B.r=new A.z("apple")
B.f=new A.z("up")
B.h=new A.z("down")
B.i=new A.z("left")
B.j=new A.z("right")
B.t=new A.z("brick")})();(function staticFields(){$.cF=null
$.L=A.a([],t.f)
$.dL=null
$.dG=null
$.dF=null
$.eq=null
$.el=null
$.ev=null
$.cU=null
$.cY=null
$.dv=null
$.aN=A.a([],A.dt("n<f<i>?>"))
$.ah=null
$.aW=null
$.aX=null
$.dn=!1
$.l=B.b})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"hJ","d1",()=>A.hp("_$dart_dartClosure"))
s($,"hQ","ez",()=>A.G(A.ci({
toString:function(){return"$receiver$"}})))
s($,"hR","eA",()=>A.G(A.ci({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"hS","eB",()=>A.G(A.ci(null)))
s($,"hT","eC",()=>A.G(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"hW","eF",()=>A.G(A.ci(void 0)))
s($,"hX","eG",()=>A.G(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"hV","eE",()=>A.G(A.dU(null)))
s($,"hU","eD",()=>A.G(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"hZ","eI",()=>A.G(A.dU(void 0)))
s($,"hY","eH",()=>A.G(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"i_","dA",()=>A.fe())
s($,"ih","d2",()=>A.dx(B.e5))
s($,"hP","ey",()=>A.d9(8,0,t.S))
s($,"hO","ex",()=>A.d9(8,255,t.S))
s($,"ij","d3",()=>B.H)})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.bf,ArrayBufferView:A.ay,DataView:A.bg,Float32Array:A.bh,Float64Array:A.bi,Int16Array:A.bj,Int32Array:A.bk,Int8Array:A.bl,Uint16Array:A.bm,Uint32Array:A.bn,Uint8ClampedArray:A.az,CanvasPixelArray:A.az,Uint8Array:A.bo})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.a7.$nativeSuperclassTag="ArrayBufferView"
A.aJ.$nativeSuperclassTag="ArrayBufferView"
A.aK.$nativeSuperclassTag="ArrayBufferView"
A.aw.$nativeSuperclassTag="ArrayBufferView"
A.aL.$nativeSuperclassTag="ArrayBufferView"
A.aM.$nativeSuperclassTag="ArrayBufferView"
A.ax.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$1$1=function(a){return this(a)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q){s[q].removeEventListener("load",onLoad,false)}a(b.target)}for(var r=0;r<s.length;++r){s[r].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var s=A.hz
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=snake.js.map
