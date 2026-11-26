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
if(a[b]!==s){A.hS(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.l(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.dA(b)
return new s(c,this)}:function(){if(s===null)s=A.dA(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.dA(a).prototype
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
dE(a,b,c,d){return{i:a,p:b,e:c,x:d}},
dB(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.dC==null){A.hK()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.c(A.dZ("Return interceptor for "+A.m(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.cO
if(o==null)o=$.cO=A.d0(n)
p=q[o]}if(p!=null)return p
p=A.hO(a)
if(p!=null)return p
if(typeof a=="function")return B.J
s=Object.getPrototypeOf(a)
if(s==null)return B.w
if(s===Object.prototype)return B.w
if(typeof q=="function"){o=$.cO
if(o==null)o=$.cO=A.d0(n)
Object.defineProperty(q,o,{value:B.m,enumerable:false,writable:true,configurable:true})
return B.m}return B.m},
Y(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.at.prototype
return J.bj.prototype}if(typeof a=="string")return J.a3.prototype
if(a==null)return J.au.prototype
if(typeof a=="boolean")return J.bi.prototype
if(Array.isArray(a))return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.J.prototype
if(typeof a=="symbol")return J.ax.prototype
if(typeof a=="bigint")return J.av.prototype
return a}if(a instanceof A.f)return a
return J.dB(a)},
en(a){if(typeof a=="string")return J.a3.prototype
if(a==null)return a
if(Array.isArray(a))return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.J.prototype
if(typeof a=="symbol")return J.ax.prototype
if(typeof a=="bigint")return J.av.prototype
return a}if(a instanceof A.f)return a
return J.dB(a)},
hF(a){if(a==null)return a
if(Array.isArray(a))return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.J.prototype
if(typeof a=="symbol")return J.ax.prototype
if(typeof a=="bigint")return J.av.prototype
return a}if(a instanceof A.f)return a
return J.dB(a)},
hG(a){if(typeof a=="number")return J.a2.prototype
if(a==null)return a
if(!(a instanceof A.f))return J.ac.prototype
return a},
R(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.Y(a).A(a,b)},
G(a){return J.Y(a).gk(a)},
eJ(a){return J.hF(a).gq(a)},
dI(a){return J.en(a).gn(a)},
eK(a){return J.Y(a).gl(a)},
dJ(a){return J.hG(a).bI(a)},
b5(a){return J.Y(a).h(a)},
bg:function bg(){},
bi:function bi(){},
au:function au(){},
aw:function aw(){},
L:function L(){},
bv:function bv(){},
ac:function ac(){},
J:function J(){},
av:function av(){},
ax:function ax(){},
n:function n(a){this.$ti=a},
bh:function bh(){},
bV:function bV(a){this.$ti=a},
b6:function b6(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
a2:function a2(){},
at:function at(){},
bj:function bj(){},
a3:function a3(){}},A={df:function df(){},
f0(a){return new A.a4("Field '"+a+"' has not been initialized.")},
f_(a){return new A.a4("Field '"+a+"' has already been initialized.")},
N(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
dm(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
dW(a,b,c){return A.dm(A.N(A.N(c,a),b))},
dz(a,b,c){return a},
dD(a){var s,r
for(s=$.x.length,r=0;r<s;++r)if(a===$.x[r])return!0
return!1},
dd(){return new A.bA("No element")},
a4:function a4(a){this.a=a},
c5:function c5(){},
ap:function ap(){},
aA:function aA(){},
a5:function a5(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aq:function aq(a){this.$ti=a},
bd:function bd(){},
as:function as(){},
et(a){var s=A.es(a)
if(s!=null)return s
return"minified:"+a},
il(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.E.b(a)},
m(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.b5(a)
return s},
aH(a){var s,r=$.dS
if(r==null)r=$.dS=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
bw(a){var s,r,q,p
if(a instanceof A.f)return A.w(A.b4(a),null)
s=J.Y(a)
if(s===B.H||s===B.K||t.A.b(a)){r=B.p(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.w(A.b4(a),null)},
dT(a){var s,r,q
if(a==null||typeof a=="number"||A.dv(a))return J.b5(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.T)return a.h(0)
if(a instanceof A.ag)return a.aJ(!0)
s=$.eI()
for(r=0;r<1;++r){q=s[r].bJ(a)
if(q!=null)return q}return"Instance of '"+A.bw(a)+"'"},
f3(a){var s=a.$thrownJsError
if(s==null)return null
return A.Z(s)},
b(a,b){if(a==null)J.dI(a)
throw A.c(A.hC(a,b))},
hC(a,b){var s,r="index",q=null
if(!A.ee(b))return new A.E(!0,b,r,q)
s=J.dI(a)
if(b<0||b>=s)return A.dc(b,s,a,q,r)
return new A.ab(q,q,!0,b,r,"Value not in range")},
dy(a){return new A.E(!0,a,null,null)},
c(a){return A.q(a,new Error())},
q(a,b){var s
if(a==null)a=new A.H()
b.dartException=a
s=A.hU
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
hU(){return J.b5(this.dartException)},
d6(a,b){throw A.q(a,b==null?new Error():b)},
d7(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.d6(A.fY(a,b,c),s)},
fY(a,b,c){var s,r,q,p,o,n,m,l,k
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
dG(a){throw A.c(A.ba(a))},
I(a){var s,r,q,p,o,n
a=A.hR(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.l([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.cq(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
cr(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
dY(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
dg(a,b){var s=b==null,r=s?null:b.method
return new A.bk(a,r,s?null:b.receiver)},
am(a){if(a==null)return new A.bZ(a)
if(a instanceof A.ar)return A.Q(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.Q(a,a.dartException)
return A.hu(a)},
Q(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
hu(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.a.bl(r,16)&8191)===10)switch(q){case 438:return A.Q(a,A.dg(A.m(s)+" (Error "+q+")",null))
case 445:case 5007:A.m(s)
return A.Q(a,new A.aG())}}if(a instanceof TypeError){p=$.ex()
o=$.ey()
n=$.ez()
m=$.eA()
l=$.eD()
k=$.eE()
j=$.eC()
$.eB()
i=$.eG()
h=$.eF()
g=p.v(s)
if(g!=null)return A.Q(a,A.dg(s,g))
else{g=o.v(s)
if(g!=null){g.method="call"
return A.Q(a,A.dg(s,g))}else if(n.v(s)!=null||m.v(s)!=null||l.v(s)!=null||k.v(s)!=null||j.v(s)!=null||m.v(s)!=null||i.v(s)!=null||h.v(s)!=null)return A.Q(a,new A.aG())}return A.Q(a,new A.bD(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.aK()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.Q(a,new A.E(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.aK()
return a},
Z(a){var s
if(a instanceof A.ar)return a.b
if(a==null)return new A.aV(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.aV(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
dF(a){if(a==null)return J.G(a)
if(typeof a=="object")return A.aH(a)
return J.G(a)},
hz(a){if(typeof a=="number")return B.I.gk(a)
if(a instanceof A.bO)return A.aH(a)
if(a instanceof A.ag)return a.gk(a)
return A.dF(a)},
hE(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=a.length
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
if(m==null)o[q]=b.N(q,p)
else m.b=p}else if(typeof q=="number"&&(q&0x3fffffff)===q){l=b.c
if(l==null){n=Object.create(null)
n["<non-identifier-key>"]=n
delete n["<non-identifier-key>"]
b.c=n
l=n}m=l[q]
if(m==null)l[q]=b.N(q,p)
else m.b=p}else{k=b.d
if(k==null){n=Object.create(null)
n["<non-identifier-key>"]=n
delete n["<non-identifier-key>"]
b.d=n
k=n}j=b.ai(q)
i=k[j]
if(i==null)k[j]=[b.N(q,p)]
else{r=b.aj(i,q)
if(r>=0)i[r].b=p
else i.push(b.N(q,p))}}}return b},
h5(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.c(new A.cC("Unsupported number of arguments for wrapped closure"))},
bQ(a,b){var s=a.$identity
if(!!s)return s
s=A.hA(a,b)
a.$identity=s
return s},
hA(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.h5)},
eR(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.ca().constructor.prototype):Object.create(new A.ao(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.dP(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.eN(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.dP(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
eN(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.c("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.eL)}throw A.c("Error in functionType of tearoff")},
eO(a,b,c,d){var s=A.dO
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
dP(a,b,c,d){if(c)return A.eQ(a,b,d)
return A.eO(b.length,d,a,b)},
eP(a,b,c,d){var s=A.dO,r=A.eM
switch(b?-1:a){case 0:throw A.c(new A.bx("Intercepted function with no arguments."))
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
if($.dM==null)$.dM=A.dL("interceptor")
if($.dN==null)$.dN=A.dL("receiver")
s=b.length
r=A.eP(s,c,a,b)
return r},
dA(a){return A.eR(a)},
eL(a,b){return A.b0(v.typeUniverse,A.b4(a.a),b)},
dO(a){return a.a},
eM(a){return a.b},
dL(a){var s,r,q,p=new A.ao("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.c(A.an("Field name "+a+" not found.",null))},
d0(a){return v.getIsolateTag(a)},
hO(a){var s,r,q,p,o,n=$.eo.$1(a),m=$.cZ[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.d4[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.ej.$2(a,n)
if(q!=null){m=$.cZ[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.d4[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.d5(s)
$.cZ[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.d4[n]=s
return s}if(p==="-"){o=A.d5(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.eq(a,s)
if(p==="*")throw A.c(A.dZ(n))
if(v.leafTags[n]===true){o=A.d5(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.eq(a,s)},
eq(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.dE(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
d5(a){return J.dE(a,!1,null,!!a.$iv)},
hQ(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.d5(s)
else return J.dE(s,c,null,null)},
hK(){if(!0===$.dC)return
$.dC=!0
A.hL()},
hL(){var s,r,q,p,o,n,m,l
$.cZ=Object.create(null)
$.d4=Object.create(null)
A.hJ()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.er.$1(o)
if(n!=null){m=A.hQ(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
hJ(){var s,r,q,p,o,n,m=B.y()
m=A.ak(B.z,A.ak(B.A,A.ak(B.q,A.ak(B.q,A.ak(B.B,A.ak(B.C,A.ak(B.D(B.p),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.eo=new A.d1(p)
$.ej=new A.d2(o)
$.er=new A.d3(n)},
ak(a,b){return a(b)||b},
hB(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
hR(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
C:function C(a,b){this.a=a
this.b=b},
bb:function bb(){},
be:function be(a,b){this.a=a
this.$ti=b},
aI:function aI(){},
cq:function cq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aG:function aG(){},
bk:function bk(a,b,c){this.a=a
this.b=b
this.c=c},
bD:function bD(a){this.a=a},
bZ:function bZ(a){this.a=a},
ar:function ar(a,b){this.a=a
this.b=b},
aV:function aV(a){this.a=a
this.b=null},
T:function T(){},
bR:function bR(){},
bS:function bS(){},
cb:function cb(){},
ca:function ca(){},
ao:function ao(a,b){this.a=a
this.b=b},
bx:function bx(a){this.a=a},
az:function az(){},
bW:function bW(a,b){this.a=a
this.b=b
this.c=null},
ay:function ay(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
d1:function d1(a){this.a=a},
d2:function d2(a){this.a=a},
d3:function d3(a){this.a=a},
ag:function ag(){},
bL:function bL(){},
a7:function a7(){},
aE:function aE(){},
bl:function bl(){},
a8:function a8(){},
aC:function aC(){},
aD:function aD(){},
bm:function bm(){},
bn:function bn(){},
bo:function bo(){},
bp:function bp(){},
bq:function bq(){},
br:function br(){},
bs:function bs(){},
aF:function aF(){},
bt:function bt(){},
aP:function aP(){},
aQ:function aQ(){},
aR:function aR(){},
aS:function aS(){},
dj(a,b){var s=b.c
return s==null?b.c=A.aZ(a,"a0",[b.x]):s},
dU(a){var s=a.w
if(s===6||s===7)return A.dU(a.x)
return s===11||s===12},
f7(a){return a.as},
d_(a){return A.cS(v.typeUniverse,a,!1)},
W(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.W(a1,s,a3,a4)
if(r===s)return a2
return A.e5(a1,r,!0)
case 7:s=a2.x
r=A.W(a1,s,a3,a4)
if(r===s)return a2
return A.e4(a1,r,!0)
case 8:q=a2.y
p=A.aj(a1,q,a3,a4)
if(p===q)return a2
return A.aZ(a1,a2.x,p)
case 9:o=a2.x
n=A.W(a1,o,a3,a4)
m=a2.y
l=A.aj(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.dq(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.aj(a1,j,a3,a4)
if(i===j)return a2
return A.e6(a1,k,i)
case 11:h=a2.x
g=A.W(a1,h,a3,a4)
f=a2.y
e=A.hr(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.e3(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.aj(a1,d,a3,a4)
o=a2.x
n=A.W(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.dr(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.c(A.b8("Attempted to substitute unexpected RTI kind "+a0))}},
aj(a,b,c,d){var s,r,q,p,o=b.length,n=A.cT(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.W(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
hs(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.cT(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.W(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
hr(a,b,c,d){var s,r=b.a,q=A.aj(a,r,c,d),p=b.b,o=A.aj(a,p,c,d),n=b.c,m=A.hs(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.bK()
s.a=q
s.b=o
s.c=m
return s},
l(a,b){a[v.arrayRti]=b
return a},
el(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.hI(s)
return a.$S()}return null},
hM(a,b){var s
if(A.dU(b))if(a instanceof A.T){s=A.el(a)
if(s!=null)return s}return A.b4(a)},
b4(a){if(a instanceof A.f)return A.dt(a)
if(Array.isArray(a))return A.ds(a)
return A.du(J.Y(a))},
ds(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
dt(a){var s=a.$ti
return s!=null?s:A.du(a)},
du(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.h4(a,s)},
h4(a,b){var s=a instanceof A.T?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.fC(v.typeUniverse,s.name)
b.$ccache=r
return r},
hI(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.cS(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
hH(a){return A.X(A.dt(a))},
dx(a){var s
if(a instanceof A.ag)return A.hD(a.$r,a.aB())
s=a instanceof A.T?A.el(a):null
if(s!=null)return s
if(t.R.b(a))return J.eK(a).a
if(Array.isArray(a))return A.ds(a)
return A.b4(a)},
X(a){var s=a.r
return s==null?a.r=new A.bO(a):s},
hD(a,b){var s,r,q=b,p=q.length
if(p===0)return t.F
if(0>=p)return A.b(q,0)
s=A.b0(v.typeUniverse,A.dx(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.b(q,r)
s=A.e8(v.typeUniverse,s,A.dx(q[r]))}return A.b0(v.typeUniverse,s,a)},
D(a){return A.X(A.cS(v.typeUniverse,a,!1))},
h3(a){var s=this
s.b=A.hp(s)
return s.b(a)},
hp(a){var s,r,q,p
if(a===t.K)return A.hb
if(A.a_(a))return A.hf
s=a.w
if(s===6)return A.h1
if(s===1)return A.eg
if(s===7)return A.h6
r=A.ho(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.a_)){a.f="$i"+q
if(q==="e")return A.h9
if(a===t.m)return A.h8
return A.he}}else if(s===10){p=A.hB(a.x,a.y)
return p==null?A.eg:p}return A.h_},
ho(a){if(a.w===8){if(a===t.S)return A.ee
if(a===t.i||a===t.n)return A.ha
if(a===t.N)return A.hd
if(a===t.y)return A.dv}return null},
h2(a){var s=this,r=A.fZ
if(A.a_(s))r=A.fR
else if(s===t.K)r=A.fO
else if(A.al(s)){r=A.h0
if(s===t.M)r=A.fK
else if(s===t.x)r=A.fQ
else if(s===t.u)r=A.fG
else if(s===t.Y)r=A.fN
else if(s===t.J)r=A.fI
else if(s===t.B)r=A.fL}else if(s===t.S)r=A.fJ
else if(s===t.N)r=A.fP
else if(s===t.y)r=A.fF
else if(s===t.n)r=A.fM
else if(s===t.i)r=A.fH
else if(s===t.m)r=A.P
s.a=r
return s.a(a)},
h_(a){var s=this
if(a==null)return A.al(s)
return A.hN(v.typeUniverse,A.hM(a,s),s)},
h1(a){if(a==null)return!0
return this.x.b(a)},
he(a){var s,r=this
if(a==null)return A.al(r)
s=r.f
if(a instanceof A.f)return!!a[s]
return!!J.Y(a)[s]},
h9(a){var s,r=this
if(a==null)return A.al(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.f)return!!a[s]
return!!J.Y(a)[s]},
h8(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.f)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
ef(a){if(typeof a=="object"){if(a instanceof A.f)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
fZ(a){var s=this
if(a==null){if(A.al(s))return a}else if(s.b(a))return a
throw A.q(A.eb(a,s),new Error())},
h0(a){var s=this
if(a==null||s.b(a))return a
throw A.q(A.eb(a,s),new Error())},
eb(a,b){return new A.aX("TypeError: "+A.e_(a,A.w(b,null)))},
e_(a,b){return A.bT(a)+": type '"+A.w(A.dx(a),null)+"' is not a subtype of type '"+b+"'"},
y(a,b){return new A.aX("TypeError: "+A.e_(a,b))},
h6(a){var s=this
return s.x.b(a)||A.dj(v.typeUniverse,s).b(a)},
hb(a){return a!=null},
fO(a){if(a!=null)return a
throw A.q(A.y(a,"Object"),new Error())},
hf(a){return!0},
fR(a){return a},
eg(a){return!1},
dv(a){return!0===a||!1===a},
fF(a){if(!0===a)return!0
if(!1===a)return!1
throw A.q(A.y(a,"bool"),new Error())},
fG(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.q(A.y(a,"bool?"),new Error())},
fH(a){if(typeof a=="number")return a
throw A.q(A.y(a,"double"),new Error())},
fI(a){if(typeof a=="number")return a
if(a==null)return a
throw A.q(A.y(a,"double?"),new Error())},
ee(a){return typeof a=="number"&&Math.floor(a)===a},
fJ(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.q(A.y(a,"int"),new Error())},
fK(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.q(A.y(a,"int?"),new Error())},
ha(a){return typeof a=="number"},
fM(a){if(typeof a=="number")return a
throw A.q(A.y(a,"num"),new Error())},
fN(a){if(typeof a=="number")return a
if(a==null)return a
throw A.q(A.y(a,"num?"),new Error())},
hd(a){return typeof a=="string"},
fP(a){if(typeof a=="string")return a
throw A.q(A.y(a,"String"),new Error())},
fQ(a){if(typeof a=="string")return a
if(a==null)return a
throw A.q(A.y(a,"String?"),new Error())},
P(a){if(A.ef(a))return a
throw A.q(A.y(a,"JSObject"),new Error())},
fL(a){if(a==null)return a
if(A.ef(a))return a
throw A.q(A.y(a,"JSObject?"),new Error())},
eh(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.w(a[q],b)
return s},
hj(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.eh(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.w(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
ec(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
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
if(l===8){p=A.ht(a.x)
o=a.y
return o.length>0?p+("<"+A.eh(o,b)+">"):p}if(l===10)return A.hj(a,b)
if(l===11)return A.ec(a,b,null)
if(l===12)return A.ec(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.b(b,n)
return b[n]}return"?"},
ht(a){var s=A.es(a)
if(s!=null)return s
return"minified:"+a},
fD(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
fC(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.cS(a,b,!1)
else if(typeof m=="number"){s=m
r=A.b_(a,5,"#")
q=A.cT(s)
for(p=0;p<s;++p)q[p]=r
o=A.aZ(a,b,q)
n[b]=o
return o}else return m},
fB(a,b){return A.e9(a.tR,b)},
fA(a,b){return A.e9(a.eT,b)},
cS(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.e7(a,null,b,!1)
r.set(b,s)
return s},
b0(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.e7(a,b,c,!0)
q.set(c,r)
return r},
e8(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.dq(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
e7(a,b,c,d){return A.fr(A.fl(a,b,c,d))},
O(a,b){b.a=A.h2
b.b=A.h3
return b},
b_(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.z(null,null)
s.w=b
s.as=c
r=A.O(a,s)
a.eC.set(c,r)
return r},
e5(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.fy(a,b,r,c)
a.eC.set(r,s)
return s},
fy(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.a_(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.al(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.z(null,null)
q.w=6
q.x=b
q.as=c
return A.O(a,q)},
e4(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.fw(a,b,r,c)
a.eC.set(r,s)
return s},
fw(a,b,c,d){var s,r
if(d){s=b.w
if(A.a_(b)||b===t.K)return b
else if(s===1)return A.aZ(a,"a0",[b])
else if(b===t.P||b===t.T)return t.O}r=new A.z(null,null)
r.w=7
r.x=b
r.as=c
return A.O(a,r)},
fz(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.z(null,null)
s.w=13
s.x=b
s.as=q
r=A.O(a,s)
a.eC.set(q,r)
return r},
aY(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
fv(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
aZ(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.aY(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.z(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.O(a,r)
a.eC.set(p,q)
return q},
dq(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.aY(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.z(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.O(a,o)
a.eC.set(q,n)
return n},
e6(a,b,c){var s,r,q="+"+(b+"("+A.aY(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.z(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.O(a,s)
a.eC.set(q,r)
return r},
e3(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.aY(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.aY(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.fv(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.z(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.O(a,p)
a.eC.set(r,o)
return o},
dr(a,b,c,d){var s,r=b.as+("<"+A.aY(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.fx(a,b,c,r,d)
a.eC.set(r,s)
return s},
fx(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.cT(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.W(a,b,r,0)
m=A.aj(a,c,r,0)
return A.dr(a,n,m,c!==m)}}l=new A.z(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.O(a,l)},
fl(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
fr(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.fn(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.e1(a,r,l,k,!1)
else if(q===46)r=A.e1(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.V(a.u,a.e,k.pop()))
break
case 94:k.push(A.fz(a.u,k.pop()))
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
case 62:A.fp(a,k)
break
case 38:A.fo(a,k)
break
case 63:p=a.u
k.push(A.e5(p,A.V(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.e4(p,A.V(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.fm(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.e2(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.fs(a.u,a.e,o)
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
return A.V(a.u,a.e,m)},
fn(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
e1(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.fD(s,o.x)[p]
if(n==null)A.d6('No "'+p+'" in "'+A.f7(o)+'"')
d.push(A.b0(s,o,n))}else d.push(p)
return m},
fp(a,b){var s,r=a.u,q=A.e0(a,b),p=b.pop()
if(typeof p=="string")b.push(A.aZ(r,p,q))
else{s=A.V(r,a.e,p)
switch(s.w){case 11:b.push(A.dr(r,s,q,a.n))
break
default:b.push(A.dq(r,s,q))
break}}},
fm(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.e0(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.V(p,a.e,o)
q=new A.bK()
q.a=s
q.b=n
q.c=m
b.push(A.e3(p,r,q))
return
case-4:b.push(A.e6(p,b.pop(),s))
return
default:throw A.c(A.b8("Unexpected state under `()`: "+A.m(o)))}},
fo(a,b){var s=b.pop()
if(0===s){b.push(A.b_(a.u,1,"0&"))
return}if(1===s){b.push(A.b_(a.u,4,"1&"))
return}throw A.c(A.b8("Unexpected extended operation "+A.m(s)))},
e0(a,b){var s=b.splice(a.p)
A.e2(a.u,a.e,s)
a.p=b.pop()
return s},
V(a,b,c){if(typeof c=="string")return A.aZ(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.fq(a,b,c)}else return c},
e2(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.V(a,b,c[s])},
fs(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.V(a,b,c[s])},
fq(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.c(A.b8("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.c(A.b8("Bad index "+c+" for "+b.h(0)))},
hN(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.p(a,b,null,c,null)
r.set(c,s)}return s},
p(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.a_(d))return!0
s=b.w
if(s===4)return!0
if(A.a_(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.p(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.p(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.p(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.p(a,b.x,c,d,e))return!1
return A.p(a,A.dj(a,b),c,d,e)}if(s===6)return A.p(a,p,c,d,e)&&A.p(a,b.x,c,d,e)
if(q===7){if(A.p(a,b,c,d.x,e))return!0
return A.p(a,b,c,A.dj(a,d),e)}if(q===6)return A.p(a,b,c,p,e)||A.p(a,b,c,d.x,e)
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
if(!A.p(a,j,c,i,e)||!A.p(a,i,e,j,c))return!1}return A.ed(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.ed(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.h7(a,b,c,d,e)}if(o&&q===10)return A.hc(a,b,c,d,e)
return!1},
ed(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
h7(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.b0(a,b,r[o])
return A.ea(a,p,null,c,d.y,e)}return A.ea(a,b.y,null,c,d.y,e)},
ea(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.p(a,b[s],d,e[s],f))return!1
return!0},
hc(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.p(a,r[s],c,q[s],e))return!1
return!0},
al(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.a_(a))if(s!==6)r=s===7&&A.al(a.x)
return r},
a_(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
e9(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
cT(a){return a>0?new Array(a):v.typeUniverse.sEA},
z:function z(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
bK:function bK(){this.c=this.b=this.a=null},
bO:function bO(a){this.a=a},
bJ:function bJ(){},
aX:function aX(a){this.a=a},
ff(){var s,r,q
if(self.scheduleImmediate!=null)return A.hw()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.bQ(new A.cy(s),1)).observe(r,{childList:true})
return new A.cx(s,r,q)}else if(self.setImmediate!=null)return A.hx()
return A.hy()},
fg(a){self.scheduleImmediate(A.bQ(new A.cz(a),0))},
fh(a){self.setImmediate(A.bQ(new A.cA(a),0))},
fi(a){A.ft(0,a)},
ft(a,b){var s=new A.aW(!0)
s.b_(a,b)
return s},
fu(a,b){var s=new A.aW(!1)
s.b0(a,b)
return s},
hh(a){return new A.bF(new A.u($.o,a.j("u<0>")),a.j("bF<0>"))},
fU(a,b){a.$2(0,null)
b.b=!0
return b.a},
ii(a,b){A.fV(a,b)},
fT(a,b){var s,r=a==null?b.$ti.c.a(a):a
if(!b.b)b.a.b2(r)
else{s=b.a
if(b.$ti.j("a0<1>").b(r))s.au(r)
else s.aw(r)}},
fS(a,b){var s=A.am(a),r=A.Z(a),q=b.a
if(b.b)q.a4(new A.F(s,r))
else q.ar(new A.F(s,r))},
fV(a,b){var s,r,q=new A.cU(b),p=new A.cV(b)
if(a instanceof A.u)a.aI(q,p,t.z)
else{s=t.z
if(a instanceof A.u)a.aT(q,p,s)
else{r=new A.u($.o,t.c)
r.a=8
r.c=a
r.aI(q,p,s)}}},
hv(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(q){e=q
d=c}}}}(a,1),r=$.o
return r.aF(r,new A.cX(s))},
db(a){var s
if(t.Q.b(a)){s=a.gM()
if(s!=null)return s}return B.G},
dn(a,b,c){var s,r,q,p,o={},n=o.a=a
while(s=n.a,(s&4)!==0){n=n.c
o.a=n}if(n===b){s=A.fa()
b.ar(new A.F(new A.E(!0,n,null,"Cannot complete a future with itself"),s))
return}r=b.a&1
s=n.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=n
n.aE(q)
return}if(!c)if(b.c==null)n=(s&16)===0||r!==0
else n=!1
else n=!0
if(n){q=b.T()
b.O(o.a)
A.ae(b,q)
return}b.a^=2
p=b.b
p.H(p,new A.cG(o,b))},
ae(a,b){var s,r,q,p,o,n,m,l,k,j,i,h={},g=h.a=a
for(;;){s={}
r=g.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){r=g.c
g=g.b
g.a7(g,r.a,r.b)}return}s.a=b
o=b.a
for(g=b;o!=null;g=o,o=n){g.a=null
A.ae(h.a,g)
s.a=o
n=o.a}m=h.a.c
s.b=p
s.c=m
if(q){r=g.c
r=(r&1)!==0||(r&15)===8}else r=!0
if(r){l=g.b.b
k=$.o
if(k!==l)$.o=l
else k=null
g=g.c
if((g&15)===8)new A.cK(s,h,p).$0()
else if(q){if((g&1)!==0)new A.cJ(s,m).$0()}else if((g&2)!==0)new A.cI(h,s).$0()
if(k!=null)$.o=k
g=s.c
if(g instanceof A.u){r=s.a.$ti
r=r.j("a0<2>").b(g)||!r.y[1].b(g)}else r=!1
if(r){j=s.a.b
if((g.a&24)!==0){i=j.c
j.c=null
b=j.U(i)
j.a=g.a&30|j.a&1
j.c=g.c
h.a=g
continue}else A.dn(g,j,!0)
return}}j=s.a.b
i=j.c
j.c=null
b=j.U(i)
g=s.b
r=s.c
if(!g){j.a=8
j.c=r}else{j.a=j.a&1|16
j.c=r}h.a=j
g=j}},
hk(a,b){if(t.C.b(a))return b.aF(b,a)
if(t.v.b(a))return b.S(b,a)
throw A.c(A.dK(a,"onError",u.c))},
hi(){var s,r
for(s=$.ai;s!=null;s=$.ai){$.b3=null
r=s.b
$.ai=r
if(r==null)$.b2=null
s.a.$0()}},
hq(){$.dw=!0
try{A.hi()}finally{$.b3=null
$.dw=!1
if($.ai!=null)$.dH().$1(A.ek())}},
ei(a){var s=new A.bH(a),r=$.b2
if(r==null){$.ai=$.b2=s
if(!$.dw)$.dH().$1(A.ek())}else $.b2=r.b=s},
hn(a){var s,r,q,p=$.ai
if(p==null){A.ei(a)
$.b3=$.b2
return}s=new A.bH(a)
r=$.b3
if(r==null){s.b=p
$.ai=$.b3=s}else{q=r.b
s.b=q
$.b3=r.b=s
if(q==null)$.b2=s}},
i2(a){A.dz(a,"stream",t.K)
return new A.bM()},
dl(a){return new A.bG(null,a.j("bG<0>"))},
dX(a,b){var s=$.o
if(s===B.j)return s.aA(s,a,b)
return s.aA(s,a,s.bo(b,t.p))},
hl(a,b){A.hn(new A.cW(a,b))},
hm(a,b){if(B.j!==a)b=a.bm(b,t.H)
A.ei(b)},
cy:function cy(a){this.a=a},
cx:function cx(a,b,c){this.a=a
this.b=b
this.c=c},
cz:function cz(a){this.a=a},
cA:function cA(a){this.a=a},
aW:function aW(a){this.a=a
this.b=null
this.c=0},
cR:function cR(a,b){this.a=a
this.b=b},
cQ:function cQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bF:function bF(a,b){this.a=a
this.b=!1
this.$ti=b},
cU:function cU(a){this.a=a},
cV:function cV(a){this.a=a},
cX:function cX(a){this.a=a},
F:function F(a,b){this.a=a
this.b=b},
bI:function bI(){},
bG:function bG(a,b){var _=this
_.b=a
_.c=0
_.e=_.d=null
_.$ti=b},
ad:function ad(a,b,c,d,e){var _=this
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
cD:function cD(a,b){this.a=a
this.b=b},
cH:function cH(a,b){this.a=a
this.b=b},
cG:function cG(a,b){this.a=a
this.b=b},
cF:function cF(a,b){this.a=a
this.b=b},
cE:function cE(a,b){this.a=a
this.b=b},
cK:function cK(a,b,c){this.a=a
this.b=b
this.c=c},
cL:function cL(a,b){this.a=a
this.b=b},
cM:function cM(a){this.a=a},
cJ:function cJ(a,b){this.a=a
this.b=b},
cI:function cI(a,b){this.a=a
this.b=b},
bH:function bH(a){this.a=a
this.b=null},
bM:function bM(){},
ct:function ct(){},
cu:function cu(a,b,c){this.a=a
this.b=b
this.c=c},
cw:function cw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cv:function cv(a,b,c){this.a=a
this.b=b
this.c=c},
cW:function cW(a,b){this.a=a
this.b=b},
f1(a){return new A.aO(a.j("aO<0>"))},
dp(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
fk(a,b,c){var s=new A.af(a,b,c.j("af<0>"))
s.c=a.e
return s},
di(a){var s,r
if(A.dD(a))return"{...}"
s=new A.bB("")
try{r={}
$.x.push(a)
s.a+="{"
r.a=!0
a.ah(0,new A.bX(r,s))
s.a+="}"}finally{if(0>=$.x.length)return A.b($.x,-1)
$.x.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
aO:function aO(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cP:function cP(a){this.a=a
this.c=this.b=null},
af:function af(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
k:function k(){},
aB:function aB(){},
bX:function bX(a,b){this.a=a
this.b=b},
aJ:function aJ(){},
aU:function aU(){},
fE(){if(typeof WeakRef=="function")return WeakRef
var s=function LeakRef(a){this._=a}
s.prototype={
deref(){return this._}}
return s},
eS(a,b){a=A.q(a,new Error())
a.stack=b.h(0)
throw a},
dh(a,b,c){var s,r,q
if(a>4294967295)A.d6(A.f5(a,0,4294967295,"length",null))
s=A.l(new Array(a),c.j("n<0>"))
s.$flags=1
r=s
if(a!==0)for(s=r.length,q=0;q<s;++q)r[q]=b
return r},
f2(a,b,c){var s,r,q=A.l([],c.j("n<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.dG)(a),++r)q.push(a[r])
q.$flags=1
return q},
dV(a,b,c){var s=J.eJ(b)
if(!s.m())return a
if(c.length===0){do a+=A.m(s.gp())
while(s.m())}else{a+=A.m(s.gp())
while(s.m())a=a+c+A.m(s.gp())}return a},
fa(){return A.Z(new Error())},
dQ(a){return new A.bc(1000*a)},
bT(a){if(typeof a=="number"||A.dv(a)||a==null)return J.b5(a)
if(typeof a=="string")return JSON.stringify(a)
return A.dT(a)},
eT(a,b){A.dz(a,"error",t.K)
A.dz(b,"stackTrace",t.l)
A.eS(a,b)},
b8(a){return new A.b7(a)},
an(a,b){return new A.E(!1,null,b,a)},
dK(a,b,c){return new A.E(!0,a,b,c)},
f4(a){var s=null
return new A.ab(s,s,!1,s,s,a)},
f5(a,b,c,d,e){return new A.ab(b,c,!0,a,d,"Invalid value")},
f6(a,b){return a},
dc(a,b,c,d,e){return new A.bf(b,!0,a,e,"Index out of range")},
bE(a){return new A.aM(a)},
dZ(a){return new A.bC(a)},
ba(a){return new A.b9(a)},
bU(a,b){if(a<=0)return new A.aq(b.j("aq<0>"))
if(!b.j("0(a)").b(A.em()))throw A.c(A.an("Generator must be supplied or element type must allow integers","generator"))
return new A.aN(a,A.em(),b.j("aN<0>"))},
eZ(a,b,c){var s,r
if(A.dD(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.l([],t.s)
$.x.push(a)
try{A.hg(a,s)}finally{if(0>=$.x.length)return A.b($.x,-1)
$.x.pop()}r=A.dV(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
de(a,b,c){var s,r
if(A.dD(a))return b+"..."+c
s=new A.bB(b)
$.x.push(a)
try{r=s
r.a=A.dV(r.a,a,", ")}finally{if(0>=$.x.length)return A.b($.x,-1)
$.x.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
fj(a){return a},
hg(a,b){var s,r,q,p,o,n,m,l=a.gq(a),k=0,j=0
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
c_(a,b,c,d){var s
if(B.d===c)return A.dW(B.a.gk(a),J.G(b),$.d9())
if(B.d===d){s=B.a.gk(a)
b=J.G(b)
c=J.G(c)
return A.dm(A.N(A.N(A.N($.d9(),s),b),c))}s=B.a.gk(a)
b=J.G(b)
c=J.G(c)
d=J.G(d)
d=A.dm(A.N(A.N(A.N(A.N($.d9(),s),b),c),d))
return d},
bP:function bP(a){this.a=a},
bc:function bc(a){this.a=a},
cB:function cB(){},
j:function j(){},
b7:function b7(a){this.a=a},
H:function H(){},
E:function E(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ab:function ab(a,b,c,d,e,f){var _=this
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
bC:function bC(a){this.a=a},
bA:function bA(a){this.a=a},
b9:function b9(a){this.a=a},
bu:function bu(){},
aK:function aK(){},
cC:function cC(a){this.a=a},
U:function U(){},
aN:function aN(a,b,c){this.a=a
this.b=b
this.$ti=c},
t:function t(){},
f:function f(){},
bN:function bN(){},
bB:function bB(a){this.a=a},
cN:function cN(){},
a9:function a9(a,b,c){this.a=a
this.b=b
this.$ti=c},
S:function S(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
K:function K(a){this.a=a},
bY:function bY(a,b){this.a=a
this.b=b},
a6:function a6(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
aa:function aa(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=0},
f8(a,b,c,d,e,f,g,h){var s,r,q,p=A.dR(),o=h*g
p.width=o
s=d*f
p.height=s
r=A.dR()
r.width=o
r.height=s
s=A.l([],t.w)
for(o=A.bU(d,t.z),o=o.gq(o);o.m();){o.gp()
q=B.a.u(h,32)
s.push(new Uint32Array(q+1))}p=new A.by(!0,d,h,g,f,c,a,p,r,s)
p.aX(a,b,c,d,!0,f,g,h)
return p},
dk(a){return new A.C(B.a.u(a,32),31-B.a.i(a,32))},
by:function by(a,b,c,d,e,f,g,h,i,j){var _=this
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
fb(a,b,c,d,e,f,g){var s,r,q,p,o,n="white",m=null,l=A.dl(t.N),k=A.dl(t.W),j=A.dl(t.r),i=v.G,h=i.document.getElementById(b)
if(h==null)h=A.P(h)
i=i.document.getElementById(b)
if(i==null)i=A.P(i)
i=A.f8("black",i,n,e*(8+d),!0,2,2,a*8)
s=A.l([],t.G)
for(r=t.V,q=0;q<e;++q){p=A.l([],r)
for(o=0;o<a;++o)p.push(new A.S(q,o," ",n))
s.push(p)}l=new A.aL(e,a,d,h,!0,i,new A.aa(e,a),new A.aa(e,a),new A.aa(e,a),!1,l,k,j,B.dP,s,A.f1(t.o),B.dO)
l.aZ("black",a,b,n,m,!0,2,2,d,e,!1,g,m,m,m,m,m)
return l},
bz:function bz(a,b){this.a=a
this.b=b},
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
_.db=_.cy=_.cx=_.CW=_.ch=_.ay=null
_.dx=n
_.dy=o
_.fr=p
_.fx=q
_.fy=!1},
co:function co(a){this.a=a},
cn:function cn(){},
cm:function cm(a){this.a=a},
cc:function cc(a){this.a=a},
cd:function cd(a){this.a=a},
ce:function ce(a,b,c){this.a=a
this.b=b
this.c=c},
cf:function cf(a,b,c){this.a=a
this.b=b
this.c=c},
cg:function cg(a,b){this.a=a
this.b=b},
ch:function ch(a,b){this.a=a
this.b=b},
ci:function ci(a,b){this.a=a
this.b=b},
cj:function cj(a,b){this.a=a
this.b=b},
ck:function ck(a,b){this.a=a
this.b=b},
cl:function cl(a){this.a=a},
f9(a,b,c){var s,r,q,p,o,n=A.l([],t.U),m=A.l([],t.I)
for(s=t.z,r=A.bU(a,s),r=r.gq(r),q=t.q;r.m();){r.gp()
p=A.l([],q)
for(o=A.bU(b,s),o=o.gq(o);o.m();){o.gp()
p.push(B.b)}m.push(p)}n=new A.c6(a,b,n,m,B.r)
n.aY(a,b,c)
return n},
hP(){return A.f9(30,30,"snake")},
B:function B(a,b){this.a=a
this.b=b},
a1:function a1(a,b){this.a=a
this.b=b},
c6:function c6(a,b,c,d,e){var _=this
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
c7:function c7(a){this.a=a},
c9:function c9(a){this.a=a},
c8:function c8(a){this.a=a},
es(a){return v.mangledGlobalNames[a]},
hS(a){throw A.q(new A.a4("Field '"+a+"' has been assigned during initialization."),new Error())},
h(){throw A.q(A.f0(""),new Error())},
hT(){throw A.q(A.f_(""),new Error())},
b1(a){var s
if(typeof a=="function")throw A.c(A.an("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.fW,a)
s[$.d8()]=a
return s},
ah(a){var s
if(typeof a=="function")throw A.c(A.an("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.fX,a)
s[$.d8()]=a
return s},
fW(a){return a.$0()},
fX(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
dR(){return v.G.document.createElement("canvas")}},B={}
var w=[A,J,B]
var $={}
A.df.prototype={}
J.bg.prototype={
A(a,b){return a===b},
gk(a){return A.aH(a)},
h(a){return"Instance of '"+A.bw(a)+"'"},
gl(a){return A.X(A.du(this))}}
J.bi.prototype={
h(a){return String(a)},
gk(a){return a?519018:218159},
gl(a){return A.X(t.y)},
$id:1}
J.au.prototype={
A(a,b){return null==b},
h(a){return"null"},
gk(a){return 0},
$id:1}
J.aw.prototype={$ii:1}
J.L.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.bv.prototype={}
J.ac.prototype={}
J.J.prototype={
h(a){var s=a[$.eu()]
if(s==null)s=a[$.d8()]
if(s==null)return this.aW(a)
return"JavaScript function for "+J.b5(s)}}
J.av.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.ax.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.n.prototype={
bE(a,b){var s
a.$flags&1&&A.d7(a,"remove",1)
for(s=0;s<a.length;++s)if(J.R(a[s],b)){a.splice(s,1)
return!0}return!1},
bx(a,b){var s,r,q=a.length,p=A.dh(q,"",t.N)
for(s=0;s<a.length;++s){r=A.m(a[s])
if(!(s<q))return A.b(p,s)
p[s]=r}return p.join(b)},
br(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw A.c(A.ba(a))}return s},
bs(a,b,c){return this.br(a,b,c,t.z)},
gaN(a){if(a.length>0)return a[0]
throw A.c(A.dd())},
gby(a){var s=a.length
if(s>0)return a[s-1]
throw A.c(A.dd())},
bq(a,b){var s
for(s=0;s<a.length;++s)if(J.R(a[s],b))return!0
return!1},
h(a){return A.de(a,"[","]")},
gq(a){return new J.b6(a,a.length,A.ds(a).j("b6<1>"))},
gk(a){return A.aH(a)},
gn(a){return a.length},
$ie:1}
J.bh.prototype={
bJ(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.bw(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.bV.prototype={}
J.b6.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.c(A.dG(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.a2.prototype={
bI(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.c(A.bE(""+a+".toInt()"))},
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
return this.aH(a,b)},
u(a,b){return(a|0)===a?a/b|0:this.aH(a,b)},
aH(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.c(A.bE("Result of truncating division is "+A.m(s)+": "+A.m(a)+" ~/ "+b))},
L(a,b){if(b<0)throw A.c(A.dy(b))
return b>31?0:a<<b>>>0},
bk(a,b){return b>31?0:a<<b>>>0},
aV(a,b){var s
if(b<0)throw A.c(A.dy(b))
if(a>0)s=this.aa(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
bl(a,b){var s
if(a>0)s=this.aa(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
B(a,b){if(0>b)throw A.c(A.dy(b))
return this.aa(a,b)},
aa(a,b){return b>31?0:a>>>b},
gl(a){return A.X(t.n)},
$ir:1}
J.at.prototype={
gl(a){return A.X(t.S)},
$id:1,
$ia:1}
J.bj.prototype={
gl(a){return A.X(t.i)},
$id:1}
J.a3.prototype={
a1(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.c(B.E)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
bC(a,b,c){var s=b-a.length
if(s<=0)return a
return this.a1(c,s)+a},
h(a){return a},
gk(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gl(a){return A.X(t.N)},
gn(a){return a.length},
$id:1,
$iA:1}
A.a4.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.c5.prototype={}
A.ap.prototype={}
A.aA.prototype={
gq(a){var s=this
return new A.a5(s,s.gn(s),A.dt(s).j("a5<1>"))}}
A.a5.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.en(q),o=p.gn(q)
if(r.b!==o)throw A.c(A.ba(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.af(q,s);++r.c
return!0}}
A.aq.prototype={
gq(a){return B.x},
gn(a){return 0}}
A.bd.prototype={
m(){return!1},
gp(){throw A.c(A.dd())}}
A.as.prototype={}
A.C.prototype={$r:"+(1,2)",$s:1}
A.bb.prototype={
h(a){return A.di(this)}}
A.be.prototype={
R(){var s=this,r=s.$map
if(r==null){r=new A.ay(s.$ti.j("ay<1,2>"))
A.hE(s.a,r)
s.$map=r}return r},
ae(a){return this.R().ae(a)},
a0(a,b){return this.R().a0(0,b)},
ah(a,b){this.R().ah(0,b)},
gn(a){return this.R().a}}
A.aI.prototype={}
A.cq.prototype={
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
h(a){return"Null check operator used on a null value"}}
A.bk.prototype={
h(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.bD.prototype={
h(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.bZ.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.ar.prototype={}
A.aV.prototype={
h(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iM:1}
A.T.prototype={
h(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.et(r==null?"unknown":r)+"'"},
gbK(){return this},
$C:"$1",
$R:1,
$D:null}
A.bR.prototype={$C:"$0",$R:0}
A.bS.prototype={$C:"$2",$R:2}
A.cb.prototype={}
A.ca.prototype={
h(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.et(s)+"'"}}
A.ao.prototype={
A(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.ao))return!1
return this.$_target===b.$_target&&this.a===b.a},
gk(a){return(A.dF(this.a)^A.aH(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.bw(this.a)+"'")}}
A.bx.prototype={
h(a){return"RuntimeError: "+this.a}}
A.az.prototype={
gn(a){return this.a},
ae(a){var s=this.b
if(s==null)return!1
return s[a]!=null},
a0(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.bw(b)},
bw(a){var s,r,q=this.d
if(q==null)return null
s=this.b8(q,a)
r=this.aj(s,a)
if(r<0)return null
return s[r].b},
ah(a,b){var s=this,r=s.e,q=s.r
while(r!=null){b.$2(r.a,r.b)
if(q!==s.r)throw A.c(A.ba(s))
r=r.c}},
N(a,b){var s=this,r=new A.bW(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&1073741823
return r},
ai(a){return J.G(a)&1073741823},
b8(a,b){return a[this.ai(b)]},
aj(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.R(a[r].a,b))return r
return-1},
h(a){return A.di(this)}}
A.bW.prototype={}
A.ay.prototype={
ai(a){return A.hz(a)&1073741823},
aj(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.R(a[r].a,b))return r
return-1}}
A.d1.prototype={
$1(a){return this.a(a)},
$S:6}
A.d2.prototype={
$2(a,b){return this.a(a,b)},
$S:7}
A.d3.prototype={
$1(a){return this.a(a)},
$S:8}
A.ag.prototype={
h(a){return this.aJ(!1)},
aJ(a){var s,r,q,p,o,n=this.b6(),m=this.aB(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.b(m,q)
o=m[q]
l=a?l+A.dT(o):l+A.m(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
b6(){var s,r=this.$s
while($.aT.length<=r)$.aT.push(null)
s=$.aT[r]
if(s==null){s=this.b5()
if(!(r<$.aT.length))return A.b($.aT,r)
$.aT[r]=s}return s},
b5(){var s,r,q,p,o,n=this.$r,m=n.indexOf("("),l=n.substring(1,m),k=n.substring(m),j=k==="()"?0:k.replace(/[^,]/g,"").length+1,i=A.l(new Array(j),t.f)
for(s=0;s<j;++s)i[s]=s
if(l!==""){r=l.split(",")
s=r.length
for(q=i.length,p=j;s>0;){--p;--s
o=r[s]
if(!(p>=0&&p<q))return A.b(i,p)
i[p]=o}}i=A.f2(i,!1,t.K)
i.$flags=3
return i}}
A.bL.prototype={
aB(){return[this.a,this.b]},
A(a,b){if(b==null)return!1
return b instanceof A.bL&&this.$s===b.$s&&J.R(this.a,b.a)&&J.R(this.b,b.b)},
gk(a){return A.c_(this.$s,this.a,this.b,B.d)}}
A.a7.prototype={
gl(a){return B.dR},
$id:1}
A.aE.prototype={}
A.bl.prototype={
gl(a){return B.dS},
$id:1}
A.a8.prototype={
gn(a){return a.length},
$iv:1}
A.aC.prototype={$ie:1}
A.aD.prototype={$ie:1}
A.bm.prototype={
gl(a){return B.dT},
$id:1}
A.bn.prototype={
gl(a){return B.dU},
$id:1}
A.bo.prototype={
gl(a){return B.dV},
$id:1}
A.bp.prototype={
gl(a){return B.dW},
$id:1}
A.bq.prototype={
gl(a){return B.dX},
$id:1}
A.br.prototype={
gl(a){return B.dZ},
$id:1}
A.bs.prototype={
gl(a){return B.e_},
$id:1,
$ics:1}
A.aF.prototype={
gl(a){return B.e0},
gn(a){return a.length},
$id:1}
A.bt.prototype={
gl(a){return B.e1},
gn(a){return a.length},
$id:1}
A.aP.prototype={}
A.aQ.prototype={}
A.aR.prototype={}
A.aS.prototype={}
A.z.prototype={
j(a){return A.b0(v.typeUniverse,this,a)},
a3(a){return A.e8(v.typeUniverse,this,a)}}
A.bK.prototype={}
A.bO.prototype={
h(a){return A.w(this.a,null)}}
A.bJ.prototype={
h(a){return this.a}}
A.aX.prototype={$iH:1}
A.cy.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:4}
A.cx.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:9}
A.cz.prototype={
$0(){this.a.$0()},
$S:1}
A.cA.prototype={
$0(){this.a.$0()},
$S:1}
A.aW.prototype={
b_(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.bQ(new A.cR(this,b),0),a)
else throw A.c(A.bE("`setTimeout()` not found."))},
b0(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.bQ(new A.cQ(this,a,Date.now(),b),0),a)
else throw A.c(A.bE("Periodic timer."))},
bp(){if(self.setTimeout!=null){var s=this.b
if(s==null)return
if(this.a)self.clearTimeout(s)
else self.clearInterval(s)
this.b=null}else throw A.c(A.bE("Canceling a timer."))},
$icp:1}
A.cR.prototype={
$0(){var s=this.a
s.b=null
s.c=1
this.b.$0()},
$S:0}
A.cQ.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.a.C(s,o)}q.c=p
r.d.$1(q)},
$S:1}
A.bF.prototype={}
A.cU.prototype={
$1(a){return this.a.$2(0,a)},
$S:10}
A.cV.prototype={
$2(a,b){this.a.$2(1,new A.ar(a,b))},
$S:11}
A.cX.prototype={
$2(a,b){this.a(a,b)},
$S:12}
A.F.prototype={
h(a){return A.m(this.a)},
$ij:1,
gM(){return this.b}}
A.bI.prototype={}
A.bG.prototype={}
A.ad.prototype={
bz(a){var s
if((this.c&15)!==6)return!0
s=this.b.b
return s.G(s,this.d,a.a)},
bu(a){var s,r=this.e,q=null,p=a.a,o=this.b.b
if(t.C.b(r))q=o.bg(o,r,p,a.b)
else q=o.G(o,r,p)
try{p=q
return p}catch(s){if(t._.b(A.am(s))){if((this.c&1)!==0)throw A.c(A.an("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.c(A.an("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.u.prototype={
aT(a,b,c){var s,r,q=$.o
if(q===B.j){if(b!=null&&!t.C.b(b)&&!t.v.b(b))throw A.c(A.dK(b,"onError",u.c))}else{a=q.S(q,a)
if(b!=null)b=A.hk(b,q)}s=new A.u(q,c.j("u<0>"))
r=b==null?1:3
this.a2(new A.ad(s,r,a,b,this.$ti.j("@<1>").a3(c).j("ad<1,2>")))
return s},
aI(a,b,c){var s=new A.u($.o,c.j("u<0>"))
this.a2(new A.ad(s,19,a,b,this.$ti.j("@<1>").a3(c).j("ad<1,2>")))
return s},
bj(a){this.a=this.a&1|16
this.c=a},
O(a){this.a=a.a&30|this.a&1
this.c=a.c},
a2(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.a2(a)
return}s.O(r)}r=s.b
r.H(r,new A.cD(s,a))}},
aE(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.aE(a)
return}n.O(s)}m.a=n.U(a)
s=n.b
s.H(s,new A.cH(m,n))}},
T(){var s=this.c
this.c=null
return this.U(s)},
U(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
aw(a){var s=this,r=s.T()
s.a=8
s.c=a
A.ae(s,r)},
b4(a){var s=this.T()
this.O(a)
A.ae(this,s)},
a4(a){var s=this.T()
this.bj(a)
A.ae(this,s)},
b2(a){if(this.$ti.j("a0<1>").b(a)){this.au(a)
return}this.b3(a)},
b3(a){var s
this.a^=2
s=this.b
s.H(s,new A.cF(this,a))},
au(a){A.dn(a,this,!1)
return},
ar(a){var s
this.a^=2
s=this.b
s.H(s,new A.cE(this,a))},
$ia0:1}
A.cD.prototype={
$0(){A.ae(this.a,this.b)},
$S:0}
A.cH.prototype={
$0(){A.ae(this.b,this.a.a)},
$S:0}
A.cG.prototype={
$0(){A.dn(this.a.a,this.b,!0)},
$S:0}
A.cF.prototype={
$0(){this.a.aw(this.b)},
$S:0}
A.cE.prototype={
$0(){this.a.a4(this.b)},
$S:0}
A.cK.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
p=q.b.b
j=p.aG(p,q.d)}catch(o){s=A.am(o)
r=A.Z(o)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
p=r
if(p==null)p=A.db(q)
n=k.a
n.c=new A.F(q,p)
q=n}q.b=!0
return}if(j instanceof A.u&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.u){m=k.b.a
l=new A.u(m.b,m.$ti)
j.aT(new A.cL(l,m),new A.cM(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.cL.prototype={
$1(a){this.a.b4(this.b)},
$S:4}
A.cM.prototype={
$2(a,b){this.a.a4(new A.F(a,b))},
$S:13}
A.cJ.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
o=p.b.b
q.c=o.G(o,p.d,this.b)}catch(n){s=A.am(n)
r=A.Z(n)
q=s
p=r
if(p==null)p=A.db(q)
o=this.a
o.c=new A.F(q,p)
o.b=!0}},
$S:0}
A.cI.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.bz(s)&&p.a.e!=null){p.c=p.a.bu(s)
p.b=!1}}catch(o){r=A.am(o)
q=A.Z(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.db(p)
m=l.b
m.c=new A.F(p,n)
p=m}p.b=!0}},
$S:0}
A.bH.prototype={}
A.bM.prototype={}
A.ct.prototype={
bF(a,b){var s,r,q,p,o=this
try{q=o.G(o,a,b)
return q}catch(p){s=A.am(p)
r=A.Z(p)
o.a7(o,s,r)}},
bG(a,b){return this.bF(a,b,t.z)},
bm(a,b){return new A.cu(this,this.bd(this,a),b)},
bn(a,b,c){return new A.cw(this,this.S(this,a),c,b)},
bo(a,b){return new A.cv(this,this.S(this,a),b)},
a7(a,b,c){var s,r,q,p,o,n,m,l=null
if(l==null){A.hl(b,c)
return}s=l.gao()
r=s.gbL()
q=$.o
try{$.o=r
l.bt(s,s.ga9(),a,b,c)
$.o=q}catch(n){p=A.am(n)
o=A.Z(n)
$.o=q
m=b===p?c:o
r.a7(s,p,m)}},
bi(a,b){var s,r,q=$.o
if(q===a)return b.$0()
s=q
$.o=a
try{q=b.$0()
return q}finally{$.o=s}r=null.gao()
return null.bM(r,r.ga9(),a,b)},
aG(a,b){return this.bi(a,b,t.z)},
bh(a,b,c){var s,r,q=$.o
if(q===a)return b.$1(c)
s=q
$.o=a
try{q=b.$1(c)
return q}finally{$.o=s}r=null.gao()
return null.bt(r,r.ga9(),a,b,c)},
G(a,b,c){var s=t.z
return this.bh(a,b,c,s,s)},
bf(a,b,c,d){var s,r,q=$.o
if(q===a)return b.$2(c,d)
s=q
$.o=a
try{q=b.$2(c,d)
return q}finally{$.o=s}r=null.gao()
return null.bN(r,r.ga9(),a,b,c,d)},
bg(a,b,c,d){var s=t.z
return this.bf(a,b,c,d,s,s,s)},
bc(a,b){return b},
bd(a,b){return this.bc(a,b,t.z)},
be(a,b){return b},
S(a,b){var s=t.z
return this.be(a,b,s,s)},
bb(a,b){return b},
aF(a,b){var s=t.z
return this.bb(a,b,s,s,s)},
H(a,b){A.hm(a,b)
return},
aA(a,b,c){var s
if(B.j!==a)c=a.bn(c,t.H,t.p)
s=B.a.u(b.a,1000)
return A.fu(s,c)}}
A.cu.prototype={
$0(){var s=this.a
return s.aG(s,this.b)},
$S(){return this.c.j("0()")}}
A.cw.prototype={
$1(a){var s=this.a
return s.G(s,this.b,a)},
$S(){return this.d.j("@<0>").a3(this.c).j("1(2)")}}
A.cv.prototype={
$1(a){return this.a.bG(this.b,a)},
$S(){return this.c.j("~(0)")}}
A.cW.prototype={
$0(){A.eT(this.a,this.b)},
$S:0}
A.aO.prototype={
gq(a){var s=this,r=new A.af(s,s.r,s.$ti.j("af<1>"))
r.c=s.e
return r},
gn(a){return this.a},
W(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.aq(s==null?q.b=A.dp():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.aq(r==null?q.c=A.dp():r,b)}else return q.b1(b)},
b1(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.dp()
s=J.G(a)&1073741823
r=p[s]
if(r==null)p[s]=[q.a8(a)]
else{if(q.b7(r,a)>=0)return!1
r.push(q.a8(a))}return!0},
aq(a,b){if(a[b]!=null)return!1
a[b]=this.a8(b)
return!0},
aD(){this.r=this.r+1&1073741823},
a8(a){var s,r=this,q=new A.cP(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.aD()
return q},
b7(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.R(a[r].a,b))return r
return-1}}
A.cP.prototype={}
A.af.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.c(A.ba(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.k.prototype={
gq(a){return new A.a5(a,a.length,A.b4(a).j("a5<k.E>"))},
af(a,b){if(!(b<a.length))return A.b(a,b)
return a[b]},
h(a){return A.de(a,"[","]")}}
A.aB.prototype={
gn(a){return this.a},
h(a){return A.di(this)}}
A.bX.prototype={
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
h(a){return A.de(this,"{","}")}}
A.aU.prototype={}
A.bP.prototype={}
A.bc.prototype={
A(a,b){if(b==null)return!1
return b instanceof A.bc&&this.a===b.a},
gk(a){return B.a.gk(this.a)},
h(a){var s,r,q,p,o=this.a,n=B.a.u(o,36e8)
o%=36e8
s=B.a.u(o,6e7)
o%=6e7
r=s<10?"0":""
q=B.a.u(o,1e6)
p=q<10?"0":""
return""+n+":"+r+s+":"+p+q+"."+B.l.bC(B.a.h(o%1e6),6,"0")}}
A.cB.prototype={
h(a){return this.P()}}
A.j.prototype={
gM(){return A.f3(this)}}
A.b7.prototype={
h(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.bT(s)
return"Assertion failed"}}
A.H.prototype={}
A.E.prototype={
ga6(){return"Invalid argument"+(!this.a?"(s)":"")},
ga5(){return""},
h(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.ga6()+q+o
if(!s.a)return n
return n+s.ga5()+": "+A.bT(s.gak())},
gak(){return this.b}}
A.ab.prototype={
gak(){return this.b},
ga6(){return"RangeError"},
ga5(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.m(q):""
else if(q==null)s=": Not greater than or equal to "+A.m(r)
else if(q>r)s=": Not in inclusive range "+A.m(r)+".."+A.m(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.m(r)
return s}}
A.bf.prototype={
gak(){return this.b},
ga6(){return"RangeError"},
ga5(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gn(a){return this.f}}
A.aM.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.bC.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.bA.prototype={
h(a){return"Bad state: "+this.a}}
A.b9.prototype={
h(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.bT(s)+"."}}
A.bu.prototype={
h(a){return"Out of Memory"},
gM(){return null},
$ij:1}
A.aK.prototype={
h(a){return"Stack Overflow"},
gM(){return null},
$ij:1}
A.cC.prototype={
h(a){return"Exception: "+this.a}}
A.U.prototype={
gn(a){var s,r=this.gq(this)
for(s=0;r.m();)++s
return s},
af(a,b){var s,r
A.f6(b,"index")
s=this.gq(this)
for(r=b;s.m();){if(r===0)return s.gp();--r}throw A.c(A.dc(b,b-r,this,null,"index"))},
h(a){return A.eZ(this,"(",")")}}
A.aN.prototype={
af(a,b){var s=this.a
if(b>=s)A.d6(A.dc(b,s,this,null,"index"))
return this.b.$1(b)},
gn(a){return this.a}}
A.t.prototype={
gk(a){return A.f.prototype.gk.call(this,0)},
h(a){return"null"}}
A.f.prototype={$if:1,
A(a,b){return this===b},
gk(a){return A.aH(this)},
h(a){return"Instance of '"+A.bw(this)+"'"},
gl(a){return A.hH(this)},
toString(){return this.h(this)}}
A.bN.prototype={
h(a){return""},
$iM:1}
A.bB.prototype={
gn(a){return this.a.length},
h(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.cN.prototype={
K(a){if(a<=0||a>4294967296)throw A.c(A.f4("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
A.a9.prototype={
h(a){return"Point("+this.a+", "+this.b+")"},
A(a,b){if(b==null)return!1
return b instanceof A.a9&&this.a===b.a&&this.b===b.b},
gk(a){return A.dW(B.a.gk(this.a),B.a.gk(this.b),0)}}
A.S.prototype={
gk(a){var s=this.a,r=this.b
return A.c_(new A.C(s,r).$s,s,r,B.d)},
A(a,b){var s,r,q,p
if(b==null)return!1
if(b instanceof A.S){s=b.a
r=b.b
q=this.a
p=this.b
p=A.c_(new A.C(s,r).$s,s,r,B.d)===A.c_(new A.C(q,p).$s,q,p,B.d)
s=p}else s=!1
return s},
h(a){var s=this
return"("+s.a+" "+s.b+") => '"+s.c+"' "+s.d}}
A.K.prototype={}
A.bY.prototype={
P(){return"Mode."+this.b}}
A.a6.prototype={
h(a){var s=this
return"               row: "+s.a+"\n            column: "+s.b+"\n         character: '"+s.c+"'\n    characterColor: "+s.d+"\n\n          pixelRow: "+s.e+"\n       pixelColumn: "+s.f+"\n         pixelIsOn: "+s.r+"\n    "}}
A.aa.prototype={
sY(a){var s,r,q,p=this
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
A.by.prototype={
aX(a,b,c,d,e,f,g,h){var s,r=this,q=v.G.document
q.onfocus=A.b1(new A.c1(r))
q.onblur=A.b1(new A.c2(r))
q=r.w
q.tabIndex=-1
q.style.display="block"
q.style.outline="none"
s=q.getContext("2d")
if(s==null)s=A.P(s)
s.imageSmoothingEnabled=!1
q.onfocus=A.b1(new A.c3(r))
q.onblur=A.b1(new A.c4(r))
b.style.display="flex"
b.style.alignItems="flex-start"
b.style.padding="0"
b.style.margin="0"
b.style.width="fit-content"
b.style.height="fit-content"
b.style.background=r.r
b.appendChild(q)
r.X(0)},
V(a,b){return new A.C(B.a.i(a,this.b),B.a.i(b,this.c))},
av(){var s=this.x,r=s.getContext("2d")
if(r==null)r=A.P(r)
r.save()
r.beginPath()
r.clearRect(0,0,s.width,s.height)
r.restore()
return r},
az(){var s=this.w.getContext("2d")
if(s==null)s=A.P(s)
s.save()
s.beginPath()
s.drawImage(this.x,0,0)
s.restore()
return s},
E(a,b,c,d){var s,r,q,p,o,n,m=this,l=a<0||a>=m.b||b<0||b>=m.c
if(l)return
s=m.V(a,b)
a=s.a
b=s.b
r=A.dk(b)
q=r.a
p=B.a.L(1,r.b)
l=m.y
if(!(a>=0&&a<l.length))return A.b(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.b(l,q)
o=l[q]
l.$flags&2&&A.d7(l)
l[q]=(o|p)>>>0
l[q]=(l[q]^p)>>>0
l=c.getContext("2d")
if(l==null)l=A.P(l)
l.save()
l.beginPath()
l.fillStyle=m.r
o=m.d
n=m.e
l.fillRect(b*o,a*n,o,n)
l.restore()},
F(a,b,c,d,e){var s,r,q,p,o,n,m=this,l=a<0||a>=m.b||b<0||b>=m.c
if(l)return
s=m.V(a,b)
a=s.a
b=s.b
r=A.dk(b)
q=r.a
p=B.a.L(1,r.b)
l=m.y
if(!(a>=0&&a<l.length))return A.b(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.b(l,q)
o=l[q]
l.$flags&2&&A.d7(l)
l[q]=(o|p)>>>0
o=d.getContext("2d")
l=o==null?A.P(o):o
l.save()
l.beginPath()
l.fillStyle=c
o=m.d
n=m.e
l.fillRect(b*o,a*n,o,n)
l.restore()},
aQ(a,b){var s,r,q,p,o=this.V(b,a)
b=o.a
s=A.dk(o.b)
r=s.a
q=B.a.L(1,s.b)
p=this.y
if(!(b>=0&&b<p.length))return A.b(p,b)
p=p[b]
if(!(r>=0&&r<p.length))return A.b(p,r)
return(p[r]&q)>>>0>0},
aM(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=this
if(e==null)e=k.c-c
if(b==null)b=k.b-d
k.av()
if(c===0&&d===0&&e===k.c&&b===k.b){for(s=k.y,r=s.length,q=0;q<r;++q)for(p=0;o=s[q],p<o.length;++p){o.$flags&2&&A.d7(o)
o[p]=0}s=k.x
r=s.getContext("2d")
if(r==null)r=A.P(r)
r.save()
r.fillStyle=k.r
r.fillRect(0,0,s.width,s.height)
r.restore()}else{s=k.b
d=B.a.i(d,s)
r=k.c
c=B.a.i(c,r)
n=Math.min(d+Math.abs(b),s)
m=Math.min(c+Math.abs(e),r)
for(o=k.x,q=d;q<n;++q){l=B.a.i(q,s)
for(p=c;p<m;++p)k.E(l,B.a.i(p,r),o,!1)}}k.az()},
X(a){return this.aM(0,null,0,0,null)},
b9(a,b,c,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
d.av()
s=d.V(a,b)
a=s.a
b=s.b
r=B.a.bk(1,a1)-1
for(q=a2.a,p=a1-1,o=t.t,n=d.x,m=0;m<c.length;++m){l=c[m]
k=(l&r)>>>0
l=A.l([],o)
for(j=a+m,i=0;i<a1;++i){h=d.aQ(b+i,j)?1:0
l.push(B.a.L(h,p-i))}g=B.c.bs(l,0,new A.c0())
switch(q){case 0:for(i=0;i<a1;++i){l=b+i
if((B.a.B(k,p-i)&1)>0)d.F(j,l,a0,n,!1)
else d.E(j,l,n,!1)}break
case 1:for(i=0;i<a1;++i){l=b+i
if((B.a.B(k,p-i)&1)>0)d.E(j,l,n,!1)
else d.F(j,l,a0,n,!1)}break
case 3:for(i=0;i<a1;++i){f=p-i
if((B.a.B(k,f)&1)>0&&(B.a.aV(g,f)&1)===0)d.F(j,b+i,a0,n,!1)}break
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
else d.F(j,l,a0,n,!1)}break}}d.az()},
aR(a,b,c,d){this.b9(d.a,d.b,b,a,8,c,!0,!1,!1)},
bD(a,b,c){return this.aR(a,b,B.v,c)},
gaO(){return this.z&&J.R(v.G.document.activeElement,this.w)},
J(){var s=this.w
s.style.opacity="1.0"
s.focus()},
I(){var s=this.w,r=s.style
r.opacity="0.5"
s.blur()}}
A.c1.prototype={
$0(){this.a.z=!0},
$S:1}
A.c2.prototype={
$0(){this.a.z=!1},
$S:1}
A.c3.prototype={
$0(){this.a.J()},
$S:1}
A.c4.prototype={
$0(){this.a.I()},
$S:1}
A.c0.prototype={
$2(a,b){return(a|b)>>>0},
$S:15}
A.bz.prototype={
P(){return"State."+this.b}}
A.aL.prototype={
aZ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,a0,a1){var s,r=this,q=new A.co(r),p=new A.cn()
r.cy=l
s=r.f
s.tabIndex=-1
s.onfocus=A.b1(new A.cc(r))
s.onblur=A.b1(new A.cd(r))
s.onkeydown=A.ah(new A.ce(r,p,new A.cm(r)))
s.onclick=A.ah(new A.cf(r,q,o))
r.ay=o
s.onmouseup=A.ah(new A.cg(r,q))
r.ch=a0
s.onmousemove=A.ah(new A.ch(r,q))
r.CW=n
s.onmouseenter=A.ah(new A.ci(r,q))
r.cx=a1
s.onmouseleave=A.ah(new A.cj(r,q))
r.db=m
s.onkeyup=A.ah(new A.ck(r,p))
p=new ($.eH())(r)
A.dX(A.dQ(300),new A.cl(new A.bP(p)))
r.I()
r.X(0)},
gag(){var s=this.w
s===$&&A.h()
return s.gag()},
gad(){var s=this.w
s===$&&A.h()
return s.gad()},
ac(a,b){return new A.C(B.a.i(a,this.a),B.a.i(b,this.b))},
aC(){var s=this,r=s.dy,q=s.x,p=q.c
if(!(p>=0&&p<r.length))return A.b(r,p)
p=r[p]
q=q.d
if(!(q>=0&&q<p.length))return A.b(p,q)
s.fr.W(0,p[q])
s.ab()
s.fy=!1},
aK(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
for(s=h.fr,r=A.fk(s,s.r,s.$ti.c),q=h.w,p=h.fx,o=8+h.c,n=r.$ti.c;r.m();){m=r.d
if(m==null)m=n.a(m)
l=m.a
k=m.b
if(p.ae(m.c)){j=p.a0(0,m.c)
j.toString
i=j}else i=$.ew()
q===$&&A.h()
m=m.d
q.aR(m,i,B.v,new A.C(l*o,k*8))}if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.aD()}},
ab(){return this.aK(null)},
ap(a,b){var s,r=this.ac(b,a)
b=r.a
a=r.b
s=this.dy
if(!(b>=0&&b<s.length))return A.b(s,b)
s=s[b]
if(!(a>=0&&a<s.length))return A.b(s,a)
return s[a].c},
bB(){var s=this.x
s.sY(0)
s.c=B.a.i(s.c+1,s.a)},
am(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=this,j=e==null?k.x.c:e,i=k.ac(j,c==null?k.x.d:c)
j=k.x
j.c=B.a.i(i.a,j.a)
j.sY(i.b)
if(b==null)b="white"
for(s=a.split(""),r=s.length,q=k.dy,p=k.fr,o=0;o<r;++o){n=s[o]
e=j.c
c=j.d
if(!(e>=0&&e<q.length))return A.b(q,e)
m=q[e]
if(!(c>=0&&c<m.length))return A.b(m,c)
l=m[c]
l.c=n
l.d=b
p.W(0,l)
j.sY(j.d+1)}k.aK(null)
if(d)k.bB()},
D(a,b,c,d){return this.am(a,b,c,!0,d)},
al(a,b,c){return this.am(a,null,b,!0,c)},
aP(a,b){return this.am(a,null,null,b,null)},
X(a){var s,r,q,p,o=this,n=o.b,m=o.a
for(s=o.dy,r=0;r<m;++r)for(q=0;q<n;++q){if(!(r<s.length))return A.b(s,r)
p=s[r]
if(!(q<p.length))return A.b(p,q)
p=p[q]
p.c=" "
p.d="white"}s=o.w
s===$&&A.h()
p=8+o.c
s.aM(0,m*p,0,0*p,n*8)
p=o.x
p.c=0%p.a
p.sY(0)},
ba(a,b,c){var s=this.w
s===$&&A.h()
s.bD("white",b,new A.C(c*(8+this.c),a*8))},
J(){return this.gag().$0()},
I(){return this.gad().$0()}}
A.co.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.w
i===$&&A.h()
s=J.dJ(a.offsetX)
r=Math.max(Math.min(B.a.C(J.dJ(a.offsetY)-1,i.e),i.b-1),0)
q=Math.max(Math.min(B.a.C(s-1,i.d),i.c-1),0)
p=B.a.C(r,8+j.c)
o=B.a.u(q,8)
n=j.ap(o,p)
m=j.ac(p,o)
l=m.a
k=m.b
j=j.dy
if(!(l>=0&&l<j.length))return A.b(j,l)
j=j[l]
if(!(k>=0&&k<j.length))return A.b(j,k)
return new A.a6(p,o,n,j[k].d,r,q,i.aQ(q,r))},
$S:16}
A.cn.prototype={
$1(a){var s=a.keyCode
return new A.K(s)},
$S:17}
A.cm.prototype={
$0(){var s,r,q,p,o,n=this.a,m=n.a,l=n.b,k=new A.aa(m,l)
k.st(n.y.gt())
s=A.l([],t.s)
for(r=n.z,q=r.b;p=k.c,o=k.d,p*l+o<r.c*q+r.d;p=k.c*l+k.d+1,k.c=B.a.i(B.a.C(p,l),m),k.d=B.a.i(p,l))s.push(n.ap(o,p))
return B.c.bx(s,"")},
$S:18}
A.cc.prototype={
$0(){var s=this.a.w
s===$&&A.h()
s.J()},
$S:1}
A.cd.prototype={
$0(){var s=this.a.w
s===$&&A.h()
s.I()},
$S:1}
A.ce.prototype={
$1(a){var s,r,q,p
a.preventDefault()
s=this.a
switch(s.dx.a){case 0:r=s.cy
if(r!=null)r.$2(s,this.b.$1(a))
break
case 1:break
case 2:s.aC()
A:{q=a.keyCode
if(13===q)break A
if(8===q){r=s.x
if(r.gt()>s.y.gt()){r.st(r.gt()-1)
s.aP(" ",!1)
r.st(r.gt()-1)}break A}p=a.key
if(p.length===1&&s.x.gt()<s.z.gt())s.aP(p,!1)}break
case 3:break}},
$S:2}
A.cf.prototype={
$1(a){a.preventDefault()},
$S:2}
A.cg.prototype={
$1(a){a.preventDefault()},
$S:2}
A.ch.prototype={
$1(a){a.preventDefault()},
$S:2}
A.ci.prototype={
$1(a){a.preventDefault()},
$S:2}
A.cj.prototype={
$1(a){a.preventDefault()},
$S:2}
A.ck.prototype={
$1(a){a.preventDefault()},
$S:2}
A.cl.prototype={
$1(a){var s,r,q=this.a.a.deref()
if(q==null){a.bp()
return}s=q.w
s===$&&A.h()
if(s.gaO()&&q.dx===B.dQ)if(q.fy)q.aC()
else{s=q.x
r=s.c
q.ba(s.d,$.ev(),r)
q.fy=!0}},
$S:5}
A.B.prototype={
P(){return"Value."+this.b}}
A.a1.prototype={
P(){return"GameState."+this.b}}
A.c6.prototype={
aY(a,b,c){var s=this,r=A.fb(s.b,c,!0,0,s.a+1,!1,new A.c7(s))
s.e!==$&&A.hT()
s.e=r
A.dX(A.dQ(100),new A.c8(s))
r.J()},
aU(){var s,r,q,p,o,n=this
switch(n.ay.a){case 0:n.a_(A.l(["Snake!","","Press any key to start!"],t.s))
n.ay=B.k
break
case 3:s=n.e
s===$&&A.h()
r=n.f
s.D("#","red",n.r,r)
n.a_(A.l([" Game Over! ",""," Press any key to "," play again! "],t.s))
n.ay=B.k
break
case 2:s=n.c
if(s.length!==0){q=B.c.gaN(s)
B.c.bE(s,q)
s=q.a
if(s===n.y&&q.b===n.z)n.Z()
else{r=n.e
r===$&&A.h()
r.al(" ",q.b,s)}}s=n.ax
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
else n.aS(!1)
n.bv()
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
aS(a){var s,r,q=this,p=q.d,o=q.w
if(!(o>=0&&o<p.length))return A.b(p,o)
p=p[o]
s=q.x
if(!(s>=0&&s<p.length))return A.b(p,s)
r=p[s]
p[s]=B.b
p=q.e
if(a){p===$&&A.h()
p.D("+","red",s,o)
q.c.push(new A.a9(q.w,q.x,t.D))}else{p===$&&A.h()
p.al(" ",s,o)}A:{if(B.e===r){q.w=B.a.i(q.w-1,q.a)
break A}if(B.f===r){q.w=B.a.i(q.w+1,q.a)
break A}if(B.h===r){q.x=B.a.i(q.x-1,q.b)
break A}if(B.i===r){q.x=B.a.i(q.x+1,q.b)
break A}break A}},
bv(){var s,r,q,p=this
A:{s=p.at
s===$&&A.h()
if(B.e===s){p.f=B.a.i(p.f-1,p.a)
break A}if(B.f===s){p.f=B.a.i(p.f+1,p.a)
break A}if(B.h===s){p.r=B.a.i(p.r-1,p.b)
break A}if(B.i===s){p.r=B.a.i(p.r+1,p.b)
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
for(s=A.bU(5,t.z),s=s.gq(s);s.m();){s.gp()
p.aS(!0)}}else{s=p.Q
p.as=r+(s<10?s:20);++p.ch}p.an()
break B}if(B.o===q){p.ch+=3
break B}if(B.b===q)break B
p.ay=B.u}},
a_(a){return this.bH(a)},
bH(a){var s=0,r=A.hh(t.H),q=this,p,o,n,m,l,k
var $async$a_=A.hv(function(b,c){if(b===1)return A.fS(c,r)
for(;;)switch(s){case 0:l=a.length
k=B.a.u(q.a-l,2)
for(p=q.b,o=0;o<a.length;a.length===l||(0,A.dG)(a),++o){n=a[o]
m=q.e
m===$&&A.h()
m.D(n,"white",B.a.u(p-n.length,2),k);++k}return A.fT(null,r)}})
return A.fU($async$a_,r)},
bA(){var s,r,q,p,o,n=this,m=n.a,l=m/2|0
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
o[p]=B.b}m=[B.e,B.f,B.h,B.i]
s=$.da().K(4)
if(!(s>=0&&s<m.length))return A.b(m,s)
s=m[s]
n.ax=n.at=s
m=n.f
if(!(m>=0&&m<l.length))return A.b(l,m)
m=l[m]
l=n.r
if(!(l>=0&&l<m.length))return A.b(m,l)
m[l]=s
n.an()
n.ay=B.t},
aL(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.a,c=e.b,b=e.d
do{s=$.da()
r=s.K(d)
q=s.K(c)
if(!(r>=0&&r<b.length))return A.b(b,r)
s=b[r]
if(!(q>=0&&q<s.length))return A.b(s,q)}while(s[q]!==B.b&&Math.abs(r-e.f)+Math.abs(q-e.r)<10)
for(s=t.t,s=[A.l([-1,0],s),A.l([1,0],s),A.l([0,0],s),A.l([0,-1],s),A.l([0,1],s)],p=s.length,o=0;o<p;++o){n=s[o]
m=B.a.i(r+B.c.gaN(n),d)
l=B.a.i(q+B.c.gby(n),c)
if(!(m<b.length))return A.b(b,m)
k=b[m]
if(!(l<k.length))return A.b(k,l)
if(k[l]===B.b)if(m===r||l===q){k[l]=B.o
k=e.e
k===$&&A.h()
j=B.a.i(m,k.a)
i=B.a.i(l,k.b)
h=k.dy
if(!(j<h.length))return A.b(h,j)
g=h[j]
if(!(i<g.length))return A.b(g,i)
g=g[i]
g.c="x"
f=k.fr
f.W(0,g)
k.ab()
if(!(j<h.length))return A.b(h,j)
h=h[j]
if(!(i<h.length))return A.b(h,i)
h=h[i]
h.d="red"
f.W(0,h)
k.ab()}}},
Z(){var s,r=this,q=r.cx,p=r.e
if(q){p===$&&A.h()
q=r.y
p.D("P","gold",r.z,q)}else{p===$&&A.h()
q=r.Q
q=q<10?""+q:"o"
s=r.y
p.D(q,"gold",r.z,s)}},
an(){var s,r,q=this,p="Score: "+q.as,o=q.b,n=o-p.length,m=B.a.u(n,2),l=q.e
l===$&&A.h()
s=q.a
l.D(B.l.a1(" ",m)+p+B.l.a1(" ",n-m),"white",0,s)
n=q.d
do{l=$.da()
q.y=l.K(s)
l=l.K(o)
q.z=l
r=q.y
if(!(r>=0&&r<n.length))return A.b(n,r)
r=n[r]
if(!(l>=0&&l<r.length))return A.b(r,l)}while(r[l]!==B.b)
r[l]=B.n
if(++q.CW%10===0){q.cx=!0
q.Q=3
q.Z()}else{q.cx=!1
q.Q=11
q.Z()}if(B.a.i(q.CW,13)===0)q.aL()}}
A.c7.prototype={
$2(a,b){var s,r,q,p=this.a,o=new A.c9(p)
A:{s=p.ay
if(B.u===s||B.r===s)break A
if(B.k===s){r=p.e
r===$&&A.h()
r.X(0)
p.bA()
break A}if(B.t===s){switch(b.a){case 38:r=p.ax
r===$&&A.h()
if(r!==B.f&&r!==B.e&&o.$2(p.f-1,p.r)){p.ax=B.e;--p.Q}break
case 40:r=p.ax
r===$&&A.h()
if(r!==B.e&&r!==B.f&&o.$2(p.f+1,p.r)){p.ax=B.f;--p.Q}break
case 37:r=p.ax
r===$&&A.h()
if(r!==B.i&&r!==B.h&&o.$2(p.f,p.r-1)){p.ax=B.h;--p.Q}break
case 39:r=p.ax
r===$&&A.h()
if(r!==B.h&&r!==B.i&&o.$2(p.f,p.r+1)){p.ax=B.i;--p.Q}break}if(p.Q===0){p.ch=p.cx?0:1
r=p.e
r===$&&A.h()
q=p.y
r.al(" ",p.z,q)
q=p.d
r=p.y
if(!(r>=0&&r<q.length))return A.b(q,r)
r=q[r]
q=p.z
if(!(q>=0&&q<r.length))return A.b(r,q)
r[q]=B.b
if(!p.cx)p.aL()
p.an()}else p.Z()
break A}}},
$S:19}
A.c9.prototype={
$2(a,b){var s=A.l([B.n,B.o,B.b],t.q),r=this.a,q=r.d,p=B.a.i(a,r.a)
if(!(p<q.length))return A.b(q,p)
p=q[p]
r=B.a.i(b,r.b)
if(!(r<p.length))return A.b(p,r)
return B.c.bq(s,p[r])},
$S:20}
A.c8.prototype={
$1(a){var s=this.a,r=s.e
r===$&&A.h()
r=r.w
r===$&&A.h()
if(r.gaO())s.aU()},
$S:5};(function aliases(){var s=J.L.prototype
s.aW=s.h})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._instance_0u
s(A,"hw","fg",3)
s(A,"hx","fh",3)
s(A,"hy","fi",3)
r(A,"ek","hq",0)
s(A,"em","fj",21)
var p
q(p=A.by.prototype,"gag","J",0)
q(p,"gad","I",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.f,null)
q(A.f,[A.df,J.bg,A.aI,J.b6,A.j,A.c5,A.U,A.a5,A.bd,A.as,A.ag,A.bb,A.cq,A.bZ,A.ar,A.aV,A.T,A.aB,A.bW,A.z,A.bK,A.bO,A.aW,A.bF,A.F,A.bI,A.ad,A.u,A.bH,A.bM,A.ct,A.aJ,A.cP,A.af,A.k,A.bP,A.bc,A.cB,A.bu,A.aK,A.cC,A.t,A.bN,A.bB,A.cN,A.a9,A.S,A.K,A.a6,A.aa,A.by,A.aL,A.c6])
q(J.bg,[J.bi,J.au,J.aw,J.av,J.ax,J.a2,J.a3])
q(J.aw,[J.L,J.n,A.a7,A.aE])
q(J.L,[J.bv,J.ac,J.J])
r(J.bh,A.aI)
r(J.bV,J.n)
q(J.a2,[J.at,J.bj])
q(A.j,[A.a4,A.H,A.bk,A.bD,A.bx,A.bJ,A.b7,A.E,A.aM,A.bC,A.bA,A.b9])
r(A.ap,A.U)
q(A.ap,[A.aA,A.aq])
r(A.bL,A.ag)
r(A.C,A.bL)
r(A.be,A.bb)
r(A.aG,A.H)
q(A.T,[A.bR,A.bS,A.cb,A.d1,A.d3,A.cy,A.cx,A.cU,A.cL,A.cw,A.cv,A.co,A.cn,A.ce,A.cf,A.cg,A.ch,A.ci,A.cj,A.ck,A.cl,A.c8])
q(A.cb,[A.ca,A.ao])
r(A.az,A.aB)
r(A.ay,A.az)
q(A.bS,[A.d2,A.cV,A.cX,A.cM,A.bX,A.c0,A.c7,A.c9])
q(A.aE,[A.bl,A.a8])
q(A.a8,[A.aP,A.aR])
r(A.aQ,A.aP)
r(A.aC,A.aQ)
r(A.aS,A.aR)
r(A.aD,A.aS)
q(A.aC,[A.bm,A.bn])
q(A.aD,[A.bo,A.bp,A.bq,A.br,A.bs,A.aF,A.bt])
r(A.aX,A.bJ)
q(A.bR,[A.cz,A.cA,A.cR,A.cQ,A.cD,A.cH,A.cG,A.cF,A.cE,A.cK,A.cJ,A.cI,A.cu,A.cW,A.c1,A.c2,A.c3,A.c4,A.cm,A.cc,A.cd])
r(A.bG,A.bI)
r(A.aU,A.aJ)
r(A.aO,A.aU)
q(A.E,[A.ab,A.bf])
r(A.aN,A.aA)
q(A.cB,[A.bY,A.bz,A.B,A.a1])
s(A.aP,A.k)
s(A.aQ,A.as)
s(A.aR,A.k)
s(A.aS,A.as)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{a:"int",r:"double",ep:"num",A:"String",cY:"bool",t:"Null",e:"List",f:"Object",i_:"Map",i:"JSObject"},mangledNames:{},types:["~()","t()","t(i)","~(~())","t(@)","~(cp)","@(@)","@(@,A)","@(A)","t(~())","~(@)","t(@,M)","~(a,@)","t(f,M)","~(f?,f?)","a(a,a)","a6(i)","K(i)","A()","~(aL,K)","cY(a,a)","a(a)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.C&&a.b(c.a)&&b.b(c.b)}}
A.fB(v.typeUniverse,JSON.parse('{"bv":"L","ac":"L","J":"L","i0":"a7","bi":{"d":[]},"au":{"d":[]},"aw":{"i":[]},"L":{"i":[]},"n":{"e":["1"],"i":[]},"bh":{"aI":[]},"bV":{"n":["1"],"e":["1"],"i":[]},"a2":{"r":[]},"at":{"r":[],"a":[],"d":[]},"bj":{"r":[],"d":[]},"a3":{"A":[],"d":[]},"a4":{"j":[]},"ap":{"U":["1"]},"aA":{"U":["1"]},"aq":{"U":["1"]},"aG":{"H":[],"j":[]},"bk":{"j":[]},"bD":{"j":[]},"aV":{"M":[]},"bx":{"j":[]},"az":{"aB":["1","2"]},"ay":{"az":["1","2"],"aB":["1","2"]},"a7":{"i":[],"d":[]},"aE":{"i":[]},"bl":{"i":[],"d":[]},"a8":{"v":["1"],"i":[]},"aC":{"k":["r"],"e":["r"],"v":["r"],"i":[]},"aD":{"k":["a"],"e":["a"],"v":["a"],"i":[]},"bm":{"k":["r"],"e":["r"],"v":["r"],"i":[],"d":[],"k.E":"r"},"bn":{"k":["r"],"e":["r"],"v":["r"],"i":[],"d":[],"k.E":"r"},"bo":{"k":["a"],"e":["a"],"v":["a"],"i":[],"d":[],"k.E":"a"},"bp":{"k":["a"],"e":["a"],"v":["a"],"i":[],"d":[],"k.E":"a"},"bq":{"k":["a"],"e":["a"],"v":["a"],"i":[],"d":[],"k.E":"a"},"br":{"k":["a"],"e":["a"],"v":["a"],"i":[],"d":[],"k.E":"a"},"bs":{"cs":[],"k":["a"],"e":["a"],"v":["a"],"i":[],"d":[],"k.E":"a"},"aF":{"k":["a"],"e":["a"],"v":["a"],"i":[],"d":[],"k.E":"a"},"bt":{"k":["a"],"e":["a"],"v":["a"],"i":[],"d":[],"k.E":"a"},"bJ":{"j":[]},"aX":{"H":[],"j":[]},"aW":{"cp":[]},"F":{"j":[]},"u":{"a0":["1"]},"aO":{"aJ":["1"]},"aU":{"aJ":["1"]},"b7":{"j":[]},"H":{"j":[]},"E":{"j":[]},"ab":{"j":[]},"bf":{"j":[]},"aM":{"j":[]},"bC":{"j":[]},"bA":{"j":[]},"b9":{"j":[]},"bu":{"j":[]},"aK":{"j":[]},"aN":{"aA":["1"],"U":["1"]},"bN":{"M":[]},"eY":{"e":["a"]},"fe":{"e":["a"]},"fd":{"e":["a"]},"eW":{"e":["a"]},"fc":{"e":["a"]},"eX":{"e":["a"]},"cs":{"e":["a"]},"eU":{"e":["r"]},"eV":{"e":["r"]}}'))
A.fA(v.typeUniverse,JSON.parse('{"ap":1,"bd":1,"as":1,"bb":2,"a8":1,"bI":1,"bM":1,"aU":1,"bP":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.d_
return{o:s("S"),Q:s("j"),Z:s("hZ"),V:s("n<S>"),G:s("n<e<S>>"),I:s("n<e<B>>"),f:s("n<f>"),U:s("n<a9<a>>"),s:s("n<A>"),w:s("n<cs>"),q:s("n<B>"),b:s("n<@>"),t:s("n<a>"),T:s("au"),m:s("i"),g:s("J"),E:s("v<@>"),W:s("K"),j:s("e<@>"),r:s("a6"),P:s("t"),K:s("f"),D:s("a9<a>"),L:s("i1"),F:s("+()"),l:s("M"),N:s("A"),p:s("cp"),R:s("d"),_:s("H"),A:s("ac"),c:s("u<@>"),y:s("cY"),i:s("r"),z:s("@"),v:s("@(f)"),C:s("@(f,M)"),S:s("a"),O:s("a0<t>?"),B:s("i?"),X:s("f?"),x:s("A?"),u:s("cY?"),J:s("r?"),M:s("a?"),Y:s("ep?"),n:s("ep"),H:s("~")}})();(function constants(){var s=hunkHelpers.makeConstList
B.H=J.bg.prototype
B.c=J.n.prototype
B.a=J.at.prototype
B.I=J.a2.prototype
B.l=J.a3.prototype
B.J=J.J.prototype
B.K=J.aw.prototype
B.w=J.bv.prototype
B.m=J.ac.prototype
B.x=new A.bd()
B.p=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.y=function() {
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
B.D=function(getTagFallback) {
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
B.z=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.C=function(hooks) {
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
B.B=function(hooks) {
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
B.A=function(hooks) {
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

B.E=new A.bu()
B.d=new A.c5()
B.j=new A.ct()
B.F=new A.cN()
B.G=new A.bN()
B.r=new A.a1(0,"titleScreen")
B.k=new A.a1(1,"wait")
B.t=new A.a1(2,"play")
B.u=new A.a1(3,"gameOver")
B.d9=s([126,129,165,129,189,153,129,126],t.t)
B.ab=s([126,255,219,255,195,231,255,126],t.t)
B.dG=s([108,254,254,254,124,56,16,0],t.t)
B.c6=s([16,56,124,254,124,56,16,0],t.t)
B.b4=s([56,124,56,254,254,124,56,124],t.t)
B.bg=s([16,16,56,124,254,124,56,124],t.t)
B.az=s([0,0,24,60,60,24,0,0],t.t)
B.aC=s([255,255,231,195,195,231,255,255],t.t)
B.aO=s([0,60,102,66,66,102,60,0],t.t)
B.cU=s([255,195,153,189,189,153,195,255],t.t)
B.dF=s([15,7,15,125,204,204,204,120],t.t)
B.dE=s([60,102,102,102,60,24,126,24],t.t)
B.cR=s([63,51,63,48,48,112,240,224],t.t)
B.V=s([127,99,127,99,99,103,230,192],t.t)
B.a_=s([153,90,60,231,231,60,90,153],t.t)
B.aw=s([128,224,248,254,248,224,128,0],t.t)
B.bC=s([2,14,62,254,62,14,2,0],t.t)
B.ck=s([24,60,126,24,24,126,60,24],t.t)
B.cg=s([102,102,102,102,102,0,102,0],t.t)
B.cq=s([127,219,219,123,27,27,27,0],t.t)
B.cr=s([62,99,56,108,108,56,204,120],t.t)
B.bQ=s([0,0,0,0,126,126,126,0],t.t)
B.bT=s([24,60,126,24,126,60,24,255],t.t)
B.Q=s([24,60,126,24,24,24,24,0],t.t)
B.de=s([24,24,24,24,126,60,24,0],t.t)
B.d7=s([0,24,12,254,12,24,0,0],t.t)
B.at=s([0,48,96,254,96,48,0,0],t.t)
B.bY=s([0,0,192,192,192,254,0,0],t.t)
B.bv=s([0,36,102,255,102,36,0,0],t.t)
B.a9=s([0,24,60,126,255,255,0,0],t.t)
B.bU=s([0,255,255,126,60,24,0,0],t.t)
B.b_=s([0,0,0,0,0,0,0,0],t.t)
B.bD=s([48,120,120,48,48,0,48,0],t.t)
B.Y=s([108,108,108,0,0,0,0,0],t.t)
B.an=s([108,108,254,108,254,108,108,0],t.t)
B.c1=s([48,124,192,120,12,248,48,0],t.t)
B.P=s([0,198,204,24,48,102,198,0],t.t)
B.cD=s([56,108,56,118,220,204,118,0],t.t)
B.am=s([96,96,192,0,0,0,0,0],t.t)
B.U=s([24,48,96,96,96,48,24,0],t.t)
B.bz=s([96,48,24,24,24,48,96,0],t.t)
B.cu=s([0,102,60,255,60,102,0,0],t.t)
B.dN=s([0,48,48,252,48,48,0,0],t.t)
B.c3=s([0,0,0,0,0,48,48,96],t.t)
B.bu=s([0,0,0,252,0,0,0,0],t.t)
B.ci=s([0,0,0,0,0,48,48,0],t.t)
B.a4=s([6,12,24,48,96,192,128,0],t.t)
B.b7=s([124,198,206,222,246,230,124,0],t.t)
B.cl=s([48,112,48,48,48,48,252,0],t.t)
B.c_=s([120,204,12,56,96,204,252,0],t.t)
B.dI=s([120,204,12,56,12,204,120,0],t.t)
B.bB=s([28,60,108,204,254,12,30,0],t.t)
B.d8=s([252,192,248,12,12,204,120,0],t.t)
B.dq=s([56,96,192,248,204,204,120,0],t.t)
B.c0=s([252,204,12,24,48,48,48,0],t.t)
B.cx=s([120,204,204,120,204,204,120,0],t.t)
B.be=s([120,204,204,124,12,24,112,0],t.t)
B.d1=s([0,48,48,0,0,48,48,0],t.t)
B.aR=s([0,48,48,0,0,48,48,96],t.t)
B.bA=s([24,48,96,192,96,48,24,0],t.t)
B.bp=s([0,0,252,0,0,252,0,0],t.t)
B.aB=s([96,48,24,12,24,48,96,0],t.t)
B.ar=s([120,204,12,24,48,0,48,0],t.t)
B.dl=s([124,198,222,222,222,192,120,0],t.t)
B.cc=s([48,120,204,204,252,204,204,0],t.t)
B.aL=s([252,102,102,124,102,102,252,0],t.t)
B.ad=s([60,102,192,192,192,102,60,0],t.t)
B.a5=s([248,108,102,102,102,108,248,0],t.t)
B.aj=s([254,98,104,120,104,98,254,0],t.t)
B.co=s([254,98,104,120,104,96,240,0],t.t)
B.ap=s([60,102,192,192,206,102,62,0],t.t)
B.as=s([204,204,204,252,204,204,204,0],t.t)
B.cM=s([120,48,48,48,48,48,120,0],t.t)
B.bO=s([30,12,12,12,204,204,120,0],t.t)
B.bG=s([230,102,108,120,108,102,230,0],t.t)
B.bF=s([240,96,96,96,98,102,254,0],t.t)
B.aM=s([198,238,254,254,214,198,198,0],t.t)
B.X=s([198,230,246,222,206,198,198,0],t.t)
B.cW=s([56,108,198,198,198,108,56,0],t.t)
B.bk=s([252,102,102,124,96,96,240,0],t.t)
B.cG=s([120,204,204,204,220,120,28,0],t.t)
B.O=s([252,102,102,124,108,102,230,0],t.t)
B.ag=s([120,204,224,112,28,204,120,0],t.t)
B.dz=s([252,180,48,48,48,48,120,0],t.t)
B.aJ=s([204,204,204,204,204,204,252,0],t.t)
B.a1=s([204,204,204,204,204,120,48,0],t.t)
B.cP=s([198,198,198,214,254,238,198,0],t.t)
B.cJ=s([198,198,108,56,56,108,198,0],t.t)
B.a3=s([204,204,204,120,48,48,120,0],t.t)
B.S=s([254,198,140,24,50,102,254,0],t.t)
B.bw=s([120,96,96,96,96,96,120,0],t.t)
B.cB=s([192,96,48,24,12,6,2,0],t.t)
B.by=s([120,24,24,24,24,24,120,0],t.t)
B.dp=s([16,56,108,198,0,0,0,0],t.t)
B.N=s([0,0,0,0,0,0,0,255],t.t)
B.aK=s([48,48,24,0,0,0,0,0],t.t)
B.df=s([0,0,120,12,124,204,118,0],t.t)
B.cf=s([224,96,96,124,102,102,220,0],t.t)
B.cI=s([0,0,120,204,192,204,120,0],t.t)
B.b5=s([28,12,12,124,204,204,118,0],t.t)
B.ds=s([0,0,120,204,252,192,120,0],t.t)
B.aP=s([56,108,96,240,96,96,240,0],t.t)
B.cF=s([0,0,118,204,204,124,12,248],t.t)
B.aA=s([224,96,108,118,102,102,230,0],t.t)
B.cv=s([48,0,112,48,48,48,120,0],t.t)
B.bJ=s([12,0,12,12,12,204,204,120],t.t)
B.bc=s([224,96,102,108,120,108,230,0],t.t)
B.bL=s([112,48,48,48,48,48,120,0],t.t)
B.bt=s([0,0,204,254,254,214,198,0],t.t)
B.bM=s([0,0,248,204,204,204,204,0],t.t)
B.bf=s([0,0,120,204,204,204,120,0],t.t)
B.dw=s([0,0,220,102,102,124,96,240],t.t)
B.dt=s([0,0,118,204,204,124,12,30],t.t)
B.bq=s([0,0,220,118,102,96,240,0],t.t)
B.cZ=s([0,0,124,192,120,12,248,0],t.t)
B.cS=s([16,48,124,48,48,52,24,0],t.t)
B.c9=s([0,0,204,204,204,204,118,0],t.t)
B.b3=s([0,0,204,204,204,120,48,0],t.t)
B.bj=s([0,0,198,214,254,254,108,0],t.t)
B.bH=s([0,0,198,108,56,108,198,0],t.t)
B.dC=s([0,0,204,204,204,124,12,248],t.t)
B.dd=s([0,0,252,152,48,100,252,0],t.t)
B.b9=s([28,48,48,224,48,48,28,0],t.t)
B.cY=s([24,24,24,0,24,24,24,0],t.t)
B.aE=s([224,48,48,28,48,48,224,0],t.t)
B.dM=s([118,220,0,0,0,0,0,0],t.t)
B.b2=s([0,16,56,108,198,198,254,0],t.t)
B.av=s([120,204,192,204,120,24,12,120],t.t)
B.db=s([0,204,0,204,204,204,126,0],t.t)
B.dB=s([28,0,120,204,252,192,120,0],t.t)
B.c2=s([126,195,60,6,62,102,63,0],t.t)
B.ai=s([204,0,120,12,124,204,126,0],t.t)
B.b6=s([224,0,120,12,124,204,126,0],t.t)
B.a8=s([48,48,120,12,124,204,126,0],t.t)
B.bm=s([0,0,120,192,192,120,12,56],t.t)
B.dk=s([126,195,60,102,126,96,60,0],t.t)
B.aN=s([204,0,120,204,252,192,120,0],t.t)
B.d_=s([224,0,120,204,252,192,120,0],t.t)
B.dc=s([204,0,112,48,48,48,120,0],t.t)
B.cQ=s([124,198,56,24,24,24,60,0],t.t)
B.aZ=s([224,0,112,48,48,48,120,0],t.t)
B.dH=s([198,56,108,198,254,198,198,0],t.t)
B.cX=s([48,48,0,120,204,252,204,0],t.t)
B.bE=s([28,0,252,96,120,96,252,0],t.t)
B.dA=s([0,0,127,12,127,204,127,0],t.t)
B.aS=s([62,108,204,254,204,204,206,0],t.t)
B.du=s([120,204,0,120,204,204,120,0],t.t)
B.ae=s([0,204,0,120,204,204,120,0],t.t)
B.dJ=s([0,224,0,120,204,204,120,0],t.t)
B.aQ=s([120,204,0,204,204,204,126,0],t.t)
B.cT=s([0,224,0,204,204,204,126,0],t.t)
B.ay=s([0,204,0,204,204,124,12,248],t.t)
B.ak=s([195,24,60,102,102,60,24,0],t.t)
B.d5=s([204,0,204,204,204,204,120,0],t.t)
B.Z=s([24,24,126,192,192,126,24,24],t.t)
B.aH=s([56,108,100,240,96,230,252,0],t.t)
B.b0=s([204,204,120,252,48,252,48,48],t.t)
B.dg=s([248,204,204,250,198,207,198,199],t.t)
B.bP=s([14,27,24,60,24,24,216,112],t.t)
B.aD=s([28,0,120,12,124,204,126,0],t.t)
B.ce=s([56,0,112,48,48,48,120,0],t.t)
B.aG=s([0,28,0,120,204,204,120,0],t.t)
B.cy=s([0,28,0,204,204,204,126,0],t.t)
B.aW=s([0,248,0,248,204,204,204,0],t.t)
B.cO=s([252,0,204,236,252,220,204,0],t.t)
B.af=s([60,108,108,62,0,126,0,0],t.t)
B.cb=s([56,108,108,56,0,124,0,0],t.t)
B.d6=s([48,0,48,96,192,204,120,0],t.t)
B.aY=s([0,0,0,252,192,192,0,0],t.t)
B.aF=s([0,0,0,252,12,12,0,0],t.t)
B.d0=s([195,198,204,222,51,102,204,15],t.t)
B.ax=s([195,198,204,219,55,111,207,3],t.t)
B.bS=s([24,24,0,24,24,24,24,0],t.t)
B.bR=s([0,51,102,204,102,51,0,0],t.t)
B.bb=s([0,204,102,51,102,204,0,0],t.t)
B.cA=s([34,136,34,136,34,136,34,136],t.t)
B.dv=s([85,170,85,170,85,170,85,170],t.t)
B.bK=s([219,119,219,238,219,119,219,238],t.t)
B.b1=s([24,24,24,24,24,24,24,24],t.t)
B.aX=s([24,24,24,24,248,24,24,24],t.t)
B.bZ=s([24,24,248,24,248,24,24,24],t.t)
B.dL=s([54,54,54,54,246,54,54,54],t.t)
B.cm=s([0,0,0,0,254,54,54,54],t.t)
B.aT=s([0,0,248,24,248,24,24,24],t.t)
B.ac=s([54,54,246,6,246,54,54,54],t.t)
B.cs=s([54,54,54,54,54,54,54,54],t.t)
B.ca=s([0,0,254,6,246,54,54,54],t.t)
B.cw=s([54,54,246,6,254,0,0,0],t.t)
B.aq=s([54,54,54,54,254,0,0,0],t.t)
B.a2=s([24,24,248,24,248,0,0,0],t.t)
B.a7=s([0,0,0,0,248,24,24,24],t.t)
B.a0=s([24,24,24,24,31,0,0,0],t.t)
B.bX=s([24,24,24,24,255,0,0,0],t.t)
B.bo=s([0,0,0,0,255,24,24,24],t.t)
B.d4=s([24,24,24,24,31,24,24,24],t.t)
B.bV=s([0,0,0,0,255,0,0,0],t.t)
B.ct=s([24,24,24,24,255,24,24,24],t.t)
B.cE=s([24,24,31,24,31,24,24,24],t.t)
B.bd=s([54,54,54,54,55,54,54,54],t.t)
B.dr=s([54,54,55,48,63,0,0,0],t.t)
B.dj=s([0,0,63,48,55,54,54,54],t.t)
B.bI=s([54,54,247,0,255,0,0,0],t.t)
B.bx=s([0,0,255,0,247,54,54,54],t.t)
B.aV=s([54,54,55,48,55,54,54,54],t.t)
B.aU=s([0,0,255,0,255,0,0,0],t.t)
B.dD=s([54,54,247,0,247,54,54,54],t.t)
B.cK=s([24,24,255,0,255,0,0,0],t.t)
B.L=s([54,54,54,54,255,0,0,0],t.t)
B.dx=s([0,0,255,0,255,24,24,24],t.t)
B.c4=s([0,0,0,0,255,54,54,54],t.t)
B.cn=s([54,54,54,54,63,0,0,0],t.t)
B.bs=s([24,24,31,24,31,0,0,0],t.t)
B.ch=s([0,0,31,24,31,24,24,24],t.t)
B.cH=s([0,0,0,0,63,54,54,54],t.t)
B.cN=s([54,54,54,54,255,54,54,54],t.t)
B.bN=s([24,24,255,24,255,24,24,24],t.t)
B.dh=s([24,24,24,24,248,0,0,0],t.t)
B.b8=s([0,0,0,0,31,24,24,24],t.t)
B.c5=s([255,255,255,255,255,255,255,255],t.t)
B.c8=s([0,0,0,0,255,255,255,255],t.t)
B.bi=s([240,240,240,240,240,240,240,240],t.t)
B.cp=s([15,15,15,15,15,15,15,15],t.t)
B.d3=s([255,255,255,255,0,0,0,0],t.t)
B.dK=s([0,0,118,220,200,220,118,0],t.t)
B.dm=s([0,120,204,248,204,248,192,192],t.t)
B.ao=s([0,252,204,192,192,192,192,0],t.t)
B.c7=s([0,254,108,108,108,108,108,0],t.t)
B.di=s([252,204,96,48,96,204,252,0],t.t)
B.bl=s([0,0,126,216,216,216,112,0],t.t)
B.br=s([0,102,102,102,102,124,96,192],t.t)
B.cC=s([0,118,220,24,24,24,24,0],t.t)
B.ah=s([252,48,120,204,204,120,48,252],t.t)
B.aI=s([56,108,198,254,198,108,56,0],t.t)
B.al=s([56,108,198,198,108,108,238,0],t.t)
B.M=s([28,48,24,124,204,204,120,0],t.t)
B.dy=s([0,0,126,219,219,126,0,0],t.t)
B.bn=s([6,12,126,219,219,126,96,192],t.t)
B.aa=s([56,96,192,248,192,96,56,0],t.t)
B.cj=s([120,204,204,204,204,204,204,0],t.t)
B.cL=s([0,252,0,252,0,252,0,0],t.t)
B.a6=s([48,48,252,48,48,0,252,0],t.t)
B.ba=s([96,48,24,48,96,0,252,0],t.t)
B.cV=s([24,48,96,48,24,0,252,0],t.t)
B.bh=s([14,27,27,24,24,24,24,24],t.t)
B.da=s([24,24,24,24,24,216,216,112],t.t)
B.cd=s([48,48,0,252,0,48,48,0],t.t)
B.R=s([0,118,220,0,118,220,0,0],t.t)
B.cz=s([56,108,108,56,0,0,0,0],t.t)
B.T=s([0,0,0,24,24,0,0,0],t.t)
B.dn=s([0,0,0,0,24,0,0,0],t.t)
B.W=s([15,12,12,12,236,108,60,28],t.t)
B.bW=s([120,108,108,108,108,0,0,0],t.t)
B.au=s([112,24,48,96,120,0,0,0],t.t)
B.d2=s([0,0,60,60,60,60,0,0],t.t)
B.dO=new A.be(["\u263a",B.d9,"\u263b",B.ab,"\u2665",B.dG,"\u2666",B.c6,"\u2663",B.b4,"\u2660",B.bg,"\u2022",B.az,"\u25d8",B.aC,"\u25cb",B.aO,"\u25d9",B.cU,"\u2642",B.dF,"\u2640",B.dE,"\u266a",B.cR,"\u266b",B.V,"\u263c",B.a_,"\u25ba",B.aw,"\u25c4",B.bC,"\u2195",B.ck,"\u203c",B.cg,"\xb6",B.cq,"\xa7",B.cr,"\u25ac",B.bQ,"\u21a8",B.bT,"\u2191",B.Q,"\u2193",B.de,"\u2192",B.d7,"\u2190",B.at,"\u221f",B.bY,"\u2194",B.bv,"\u25b2",B.a9,"\u25bc",B.bU," ",B.b_,"!",B.bD,'"',B.Y,"#",B.an,"$",B.c1,"%",B.P,"&",B.cD,"'",B.am,"(",B.U,")",B.bz,"*",B.cu,"+",B.dN,",",B.c3,"-",B.bu,".",B.ci,"/",B.a4,"0",B.b7,"1",B.cl,"2",B.c_,"3",B.dI,"4",B.bB,"5",B.d8,"6",B.dq,"7",B.c0,"8",B.cx,"9",B.be,":",B.d1,";",B.aR,"<",B.bA,"=",B.bp,">",B.aB,"?",B.ar,"@",B.dl,"A",B.cc,"B",B.aL,"C",B.ad,"D",B.a5,"E",B.aj,"F",B.co,"G",B.ap,"H",B.as,"I",B.cM,"J",B.bO,"K",B.bG,"L",B.bF,"M",B.aM,"N",B.X,"O",B.cW,"P",B.bk,"Q",B.cG,"R",B.O,"S",B.ag,"T",B.dz,"U",B.aJ,"V",B.a1,"W",B.cP,"X",B.cJ,"Y",B.a3,"Z",B.S,"[",B.bw,"\\",B.cB,"]",B.by,"^",B.dp,"_",B.N,"`",B.aK,"a",B.df,"b",B.cf,"c",B.cI,"d",B.b5,"e",B.ds,"f",B.aP,"g",B.cF,"h",B.aA,"i",B.cv,"j",B.bJ,"k",B.bc,"l",B.bL,"m",B.bt,"n",B.bM,"o",B.bf,"p",B.dw,"q",B.dt,"r",B.bq,"s",B.cZ,"t",B.cS,"u",B.c9,"v",B.b3,"w",B.bj,"x",B.bH,"y",B.dC,"z",B.dd,"{",B.b9,"|",B.cY,"}",B.aE,"~",B.dM,"\u2302",B.b2,"\xc7",B.av,"\xfc",B.db,"\xe9",B.dB,"\xe2",B.c2,"\xe4",B.ai,"\xe0",B.b6,"\xe5",B.a8,"\xe7",B.bm,"\xea",B.dk,"\xeb",B.aN,"\xe8",B.d_,"\xef",B.dc,"\xee",B.cQ,"\xec",B.aZ,"\xc4",B.dH,"\xc5",B.cX,"\xc9",B.bE,"\xe6",B.dA,"\xc6",B.aS,"\xf4",B.du,"\xf6",B.ae,"\xf2",B.dJ,"\xfb",B.aQ,"\xf9",B.cT,"\xff",B.ay,"\xd6",B.ak,"\xdc",B.d5,"\xa2",B.Z,"\xa3",B.aH,"\xa5",B.b0,"\u20a7",B.dg,"\u0192",B.bP,"\xe1",B.aD,"\xed",B.ce,"\xf3",B.aG,"\xfa",B.cy,"\xf1",B.aW,"\xd1",B.cO,"\xaa",B.af,"\xba",B.cb,"\xbf",B.d6,"\u2310",B.aY,"\xac",B.aF,"\xbd",B.d0,"\xbc",B.ax,"\xa1",B.bS,"\xab",B.bR,"\xbb",B.bb,"\u2591",B.cA,"\u2592",B.dv,"\u2593",B.bK,"\u2502",B.b1,"\u2524",B.aX,"\u2561",B.bZ,"\u2562",B.dL,"\u2556",B.cm,"\u2555",B.aT,"\u2563",B.ac,"\u2551",B.cs,"\u2557",B.ca,"\u255d",B.cw,"\u255c",B.aq,"\u255b",B.a2,"\u2510",B.a7,"\u2514",B.a0,"\u2534",B.bX,"\u252c",B.bo,"\u251c",B.d4,"\u2500",B.bV,"\u253c",B.ct,"\u255e",B.cE,"\u255f",B.bd,"\u255a",B.dr,"\u2554",B.dj,"\u2569",B.bI,"\u2566",B.bx,"\u2560",B.aV,"\u2550",B.aU,"\u256c",B.dD,"\u2567",B.cK,"\u2568",B.L,"\u2564",B.dx,"\u2565",B.c4,"\u2559",B.cn,"\u2558",B.bs,"\u2552",B.ch,"\u2553",B.cH,"\u256b",B.cN,"\u256a",B.bN,"\u2518",B.dh,"\u250c",B.b8,"\u2588",B.c5,"\u2584",B.c8,"\u258c",B.bi,"\u2590",B.cp,"\u2580",B.d3,"\u03b1",B.dK,"\xdf",B.dm,"\u0393",B.ao,"\u03c0",B.c7,"\u03a3",B.di,"\u03c3",B.bl,"\xb5",B.br,"\u03c4",B.cC,"\u03a6",B.ah,"\u0398",B.aI,"\u03a9",B.al,"\u03b4",B.M,"\u221e",B.dy,"\u03c6",B.bn,"\u03b5",B.aa,"\u2229",B.cj,"\u2261",B.cL,"\xb1",B.a6,"\u2265",B.ba,"\u2264",B.cV,"\u2320",B.bh,"\u2321",B.da,"\xf7",B.cd,"\u2248",B.R,"\xb0",B.cz,"\u2219",B.T,"\xb7",B.dn,"\u221a",B.W,"\u207f",B.bW,"\xb2",B.au,"\u25a0",B.d2],A.d_("be<A,e<a>>"))
B.v=new A.bY(0,"replace")
B.dP=new A.bz(0,"ready")
B.dQ=new A.bz(2,"awaitingString")
B.dR=A.D("hV")
B.dS=A.D("hW")
B.dT=A.D("eU")
B.dU=A.D("eV")
B.dV=A.D("eW")
B.dW=A.D("eX")
B.dX=A.D("eY")
B.dY=A.D("f")
B.dZ=A.D("fc")
B.e_=A.D("cs")
B.e0=A.D("fd")
B.e1=A.D("fe")
B.b=new A.B(0,"nothing")
B.n=new A.B(1,"apple")
B.e=new A.B(2,"up")
B.f=new A.B(3,"down")
B.h=new A.B(4,"left")
B.i=new A.B(5,"right")
B.o=new A.B(6,"brick")})();(function staticFields(){$.cO=null
$.x=A.l([],t.f)
$.dS=null
$.dN=null
$.dM=null
$.eo=null
$.ej=null
$.er=null
$.cZ=null
$.d4=null
$.dC=null
$.aT=A.l([],A.d_("n<e<f>?>"))
$.ai=null
$.b2=null
$.b3=null
$.dw=!1
$.o=B.j})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"hY","eu",()=>A.d0("_$dart_dartClosure"))
s($,"hX","d8",()=>A.d0("_$dart_dartClosure_dartJSInterop"))
s($,"ik","eI",()=>A.l([new J.bh()],A.d_("n<aI>")))
s($,"i5","ex",()=>A.I(A.cr({
toString:function(){return"$receiver$"}})))
s($,"i6","ey",()=>A.I(A.cr({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"i7","ez",()=>A.I(A.cr(null)))
s($,"i8","eA",()=>A.I(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"ib","eD",()=>A.I(A.cr(void 0)))
s($,"ic","eE",()=>A.I(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"ia","eC",()=>A.I(A.dY(null)))
s($,"i9","eB",()=>A.I(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"ie","eG",()=>A.I(A.dY(void 0)))
s($,"id","eF",()=>A.I(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"ig","dH",()=>A.ff())
s($,"ih","eH",()=>A.fE())
s($,"ij","d9",()=>A.dF(B.dY))
s($,"i4","ew",()=>A.dh(8,0,t.S))
s($,"i3","ev",()=>A.dh(8,255,t.S))
s($,"im","da",()=>B.F)})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.a7,SharedArrayBuffer:A.a7,ArrayBufferView:A.aE,DataView:A.bl,Float32Array:A.bm,Float64Array:A.bn,Int16Array:A.bo,Int32Array:A.bp,Int8Array:A.bq,Uint16Array:A.br,Uint32Array:A.bs,Uint8ClampedArray:A.aF,CanvasPixelArray:A.aF,Uint8Array:A.bt})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.a8.$nativeSuperclassTag="ArrayBufferView"
A.aP.$nativeSuperclassTag="ArrayBufferView"
A.aQ.$nativeSuperclassTag="ArrayBufferView"
A.aC.$nativeSuperclassTag="ArrayBufferView"
A.aR.$nativeSuperclassTag="ArrayBufferView"
A.aS.$nativeSuperclassTag="ArrayBufferView"
A.aD.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$5=function(a,b,c,d,e){return this(a,b,c,d,e)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$6=function(a,b,c,d,e,f){return this(a,b,c,d,e,f)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q){s[q].removeEventListener("load",onLoad,false)}a(b.target)}for(var r=0;r<s.length;++r){s[r].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var s=A.hP
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=snake.js.map
