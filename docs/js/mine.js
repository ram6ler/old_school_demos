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
if(a[b]!==s){A.i0(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.dJ(b)
return new s(c,this)}:function(){if(s===null)s=A.dJ(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.dJ(a).prototype
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
dM(a,b,c,d){return{i:a,p:b,e:c,x:d}},
dK(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.dL==null){A.hR()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.c(A.e6("Return interceptor for "+A.r(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.cV
if(o==null)o=$.cV=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.hW(a)
if(p!=null)return p
if(typeof a=="function")return B.F
s=Object.getPrototypeOf(a)
if(s==null)return B.r
if(s===Object.prototype)return B.r
if(typeof q=="function"){o=$.cV
if(o==null)o=$.cV=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.j,enumerable:false,writable:true,configurable:true})
return B.j}return B.j},
e_(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
fe(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.e_(r))break;++b}return b},
ff(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.b(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.e_(q))break}return b},
a6(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.au.prototype
return J.bl.prototype}if(typeof a=="string")return J.a0.prototype
if(a==null)return J.av.prototype
if(typeof a=="boolean")return J.bk.prototype
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.Q.prototype
if(typeof a=="symbol")return J.ay.prototype
if(typeof a=="bigint")return J.aw.prototype
return a}if(a instanceof A.e)return a
return J.dK(a)},
eA(a){if(typeof a=="string")return J.a0.prototype
if(a==null)return a
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.Q.prototype
if(typeof a=="symbol")return J.ay.prototype
if(typeof a=="bigint")return J.aw.prototype
return a}if(a instanceof A.e)return a
return J.dK(a)},
hK(a){if(a==null)return a
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.Q.prototype
if(typeof a=="symbol")return J.ay.prototype
if(typeof a=="bigint")return J.aw.prototype
return a}if(a instanceof A.e)return a
return J.dK(a)},
hL(a){if(typeof a=="number")return J.a8.prototype
if(a==null)return a
if(!(a instanceof A.e))return J.a1.prototype
return a},
hM(a){if(typeof a=="string")return J.a0.prototype
if(a==null)return a
if(!(a instanceof A.e))return J.a1.prototype
return a},
ao(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.a6(a).A(a,b)},
G(a){return J.a6(a).gk(a)},
eV(a){return J.hK(a).gam(a)},
dR(a){return J.eA(a).gq(a)},
eW(a){return J.a6(a).gn(a)},
dS(a){return J.hL(a).bP(a)},
b9(a){return J.a6(a).h(a)},
eX(a){return J.hM(a).bQ(a)},
bj:function bj(){},
bk:function bk(){},
av:function av(){},
ax:function ax(){},
S:function S(){},
bz:function bz(){},
a1:function a1(){},
Q:function Q(){},
aw:function aw(){},
ay:function ay(){},
o:function o(a){this.$ti=a},
c5:function c5(a){this.$ti=a},
ba:function ba(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
a8:function a8(){},
au:function au(){},
bl:function bl(){},
a0:function a0(){}},A={dp:function dp(){},
T(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
dw(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
dI(a,b,c){return a},
eD(a){var s,r
for(s=$.N.length,r=0;r<s;++r)if(a===$.N[r])return!0
return!1},
dZ(){return new A.ag("No element")},
a9:function a9(a){this.a=a},
dh:function dh(){},
cg:function cg(){},
bn:function bn(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
at:function at(){},
eG(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
iG(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
r(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.b9(a)
return s},
ad(a){var s,r=$.e0
if(r==null)r=$.e0=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
ca(a){return A.fi(a)},
fi(a){var s,r,q,p
if(a instanceof A.e)return A.v(A.b6(a),null)
s=J.a6(a)
if(s===B.D||s===B.G||t.B.b(a)){r=B.k(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.v(A.b6(a),null)},
e1(a){if(a==null||typeof a=="number"||A.dE(a))return J.b9(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.Z)return a.h(0)
if(a instanceof A.aj)return a.aM(!0)
return"Instance of '"+A.ca(a)+"'"},
fj(a){var s=a.$thrownJsError
if(s==null)return null
return A.F(s)},
b(a,b){if(a==null)J.dR(a)
throw A.c(A.ez(a,b))},
ez(a,b){var s,r="index"
if(!A.ep(b))return new A.D(!0,b,r,null)
s=J.dR(a)
if(b<0||b>=s)return A.fa(b,s,a,r)
return new A.ae(null,null,!0,b,r,"Value not in range")},
dH(a){return new A.D(!0,a,null,null)},
c(a){return A.eC(new Error(),a)},
eC(a,b){var s
if(b==null)b=new A.I()
a.dartException=b
s=A.i2
if("defineProperty" in Object){Object.defineProperty(a,"message",{get:s})
a.name=""}else a.toString=s
return a},
i2(){return J.b9(this.dartException)},
b8(a){throw A.c(a)},
di(a,b){throw A.eC(b,a)},
bZ(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.di(A.h2(a,b,c),s)},
h2(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.aK("'"+s+"': Cannot "+o+" "+l+k+n)},
dP(a){throw A.c(A.be(a))},
J(a){var s,r,q,p,o,n
a=A.i_(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.a([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.cx(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
cy(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
e5(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
dq(a,b){var s=b==null,r=s?null:b.method
return new A.bm(a,r,s?null:b.receiver)},
O(a){if(a==null)return new A.c8(a)
if(a instanceof A.as)return A.X(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.X(a,a.dartException)
return A.hx(a)},
X(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
hx(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.a.bu(r,16)&8191)===10)switch(q){case 438:return A.X(a,A.dq(A.r(s)+" (Error "+q+")",null))
case 445:case 5007:A.r(s)
return A.X(a,new A.aG())}}if(a instanceof TypeError){p=$.eJ()
o=$.eK()
n=$.eL()
m=$.eM()
l=$.eP()
k=$.eQ()
j=$.eO()
$.eN()
i=$.eS()
h=$.eR()
g=p.v(s)
if(g!=null)return A.X(a,A.dq(s,g))
else{g=o.v(s)
if(g!=null){g.method="call"
return A.X(a,A.dq(s,g))}else if(n.v(s)!=null||m.v(s)!=null||l.v(s)!=null||k.v(s)!=null||j.v(s)!=null||m.v(s)!=null||i.v(s)!=null||h.v(s)!=null)return A.X(a,new A.aG())}return A.X(a,new A.bE(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.aI()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.X(a,new A.D(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.aI()
return a},
F(a){var s
if(a instanceof A.as)return a.b
if(a==null)return new A.aW(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.aW(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
dN(a){if(a==null)return J.G(a)
if(typeof a=="object")return A.ad(a)
return J.G(a)},
hF(a){if(typeof a=="number")return B.p.gk(a)
if(a instanceof A.bU)return A.ad(a)
if(a instanceof A.aj)return a.gk(a)
return A.dN(a)},
hJ(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=a.length
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
if(m==null)o[q]=b.T(q,p)
else m.b=p}else if(typeof q=="number"&&(q&0x3fffffff)===q){l=b.c
if(l==null){n=Object.create(null)
n["<non-identifier-key>"]=n
delete n["<non-identifier-key>"]
b.c=n
l=n}m=l[q]
if(m==null)l[q]=b.T(q,p)
else m.b=p}else{k=b.d
if(k==null){n=Object.create(null)
n["<non-identifier-key>"]=n
delete n["<non-identifier-key>"]
b.d=n
k=n}j=b.aj(q)
i=k[j]
if(i==null)k[j]=[b.T(q,p)]
else{r=b.ak(i,q)
if(r>=0)i[r].b=p
else i.push(b.T(q,p))}}}return b},
hb(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.c(A.bh("Unsupported number of arguments for wrapped closure"))},
bY(a,b){var s=a.$identity
if(!!s)return s
s=A.hG(a,b)
a.$identity=s
return s},
hG(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.hb)},
f3(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.ch().constructor.prototype):Object.create(new A.aq(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.dY(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.f_(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.dY(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
f_(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.c("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.eY)}throw A.c("Error in functionType of tearoff")},
f0(a,b,c,d){var s=A.dX
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
dY(a,b,c,d){if(c)return A.f2(a,b,d)
return A.f0(b.length,d,a,b)},
f1(a,b,c,d){var s=A.dX,r=A.eZ
switch(b?-1:a){case 0:throw A.c(new A.bA("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
f2(a,b,c){var s,r
if($.dV==null)$.dV=A.dU("interceptor")
if($.dW==null)$.dW=A.dU("receiver")
s=b.length
r=A.f1(s,c,a,b)
return r},
dJ(a){return A.f3(a)},
eY(a,b){return A.b2(v.typeUniverse,A.b6(a.a),b)},
dX(a){return a.a},
eZ(a){return a.b},
dU(a){var s,r,q,p=new A.aq("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.c(A.ap("Field name "+a+" not found.",null))},
iJ(a){throw A.c(new A.bL(a))},
hN(a){return v.getIsolateTag(a)},
hW(a){var s,r,q,p,o,n=$.eB.$1(a),m=$.da[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.df[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.ew.$2(a,n)
if(q!=null){m=$.da[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.df[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.dg(s)
$.da[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.df[n]=s
return s}if(p==="-"){o=A.dg(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.eE(a,s)
if(p==="*")throw A.c(A.e6(n))
if(v.leafTags[n]===true){o=A.dg(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.eE(a,s)},
eE(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.dM(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
dg(a){return J.dM(a,!1,null,!!a.$iw)},
hY(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.dg(s)
else return J.dM(s,c,null,null)},
hR(){if(!0===$.dL)return
$.dL=!0
A.hS()},
hS(){var s,r,q,p,o,n,m,l
$.da=Object.create(null)
$.df=Object.create(null)
A.hQ()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.eF.$1(o)
if(n!=null){m=A.hY(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
hQ(){var s,r,q,p,o,n,m=B.u()
m=A.an(B.v,A.an(B.w,A.an(B.l,A.an(B.l,A.an(B.x,A.an(B.y,A.an(B.z(B.k),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.eB=new A.dc(p)
$.ew=new A.dd(o)
$.eF=new A.de(n)},
an(a,b){return a(b)||b},
hH(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
i_(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
x:function x(a,b){this.a=a
this.b=b},
bf:function bf(){},
a7:function a7(a,b){this.a=a
this.$ti=b},
cx:function cx(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aG:function aG(){},
bm:function bm(a,b,c){this.a=a
this.b=b
this.c=c},
bE:function bE(a){this.a=a},
c8:function c8(a){this.a=a},
as:function as(a,b){this.a=a
this.b=b},
aW:function aW(a){this.a=a
this.b=null},
Z:function Z(){},
c_:function c_(){},
c0:function c0(){},
cm:function cm(){},
ch:function ch(){},
aq:function aq(a,b){this.a=a
this.b=b},
bL:function bL(a){this.a=a},
bA:function bA(a){this.a=a},
aA:function aA(){},
c6:function c6(a,b){this.a=a
this.b=b
this.c=null},
az:function az(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dc:function dc(a){this.a=a},
dd:function dd(a){this.a=a},
de:function de(a){this.a=a},
aj:function aj(){},
bR:function bR(){},
a3(a,b,c){if(a>>>0!==a||a>=c)throw A.c(A.ez(b,a))},
bo:function bo(){},
aE:function aE(){},
bp:function bp(){},
ab:function ab(){},
aC:function aC(){},
aD:function aD(){},
bq:function bq(){},
br:function br(){},
bs:function bs(){},
bt:function bt(){},
bu:function bu(){},
bv:function bv(){},
bw:function bw(){},
aF:function aF(){},
bx:function bx(){},
aQ:function aQ(){},
aR:function aR(){},
aS:function aS(){},
aT:function aT(){},
e2(a,b){var s=b.c
return s==null?b.c=A.dA(a,b.x,!0):s},
dt(a,b){var s=b.c
return s==null?b.c=A.b0(a,"H",[b.x]):s},
e3(a){var s=a.w
if(s===6||s===7||s===8)return A.e3(a.x)
return s===12||s===13},
fm(a){return a.as},
db(a){return A.bV(v.typeUniverse,a,!1)},
W(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.W(a1,s,a3,a4)
if(r===s)return a2
return A.eh(a1,r,!0)
case 7:s=a2.x
r=A.W(a1,s,a3,a4)
if(r===s)return a2
return A.dA(a1,r,!0)
case 8:s=a2.x
r=A.W(a1,s,a3,a4)
if(r===s)return a2
return A.ef(a1,r,!0)
case 9:q=a2.y
p=A.am(a1,q,a3,a4)
if(p===q)return a2
return A.b0(a1,a2.x,p)
case 10:o=a2.x
n=A.W(a1,o,a3,a4)
m=a2.y
l=A.am(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.dy(a1,n,l)
case 11:k=a2.x
j=a2.y
i=A.am(a1,j,a3,a4)
if(i===j)return a2
return A.eg(a1,k,i)
case 12:h=a2.x
g=A.W(a1,h,a3,a4)
f=a2.y
e=A.hu(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.ee(a1,g,e)
case 13:d=a2.y
a4+=d.length
c=A.am(a1,d,a3,a4)
o=a2.x
n=A.W(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.dz(a1,n,c,!0)
case 14:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.c(A.bc("Attempted to substitute unexpected RTI kind "+a0))}},
am(a,b,c,d){var s,r,q,p,o=b.length,n=A.d2(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.W(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
hv(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.d2(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.W(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
hu(a,b,c,d){var s,r=b.a,q=A.am(a,r,c,d),p=b.b,o=A.am(a,p,c,d),n=b.c,m=A.hv(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.bP()
s.a=q
s.b=o
s.c=m
return s},
a(a,b){a[v.arrayRti]=b
return a},
ey(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.hP(s)
return a.$S()}return null},
hT(a,b){var s
if(A.e3(b))if(a instanceof A.Z){s=A.ey(a)
if(s!=null)return s}return A.b6(a)},
b6(a){if(a instanceof A.e)return A.a4(a)
if(Array.isArray(a))return A.dB(a)
return A.dD(J.a6(a))},
dB(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
a4(a){var s=a.$ti
return s!=null?s:A.dD(a)},
dD(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.h9(a,s)},
h9(a,b){var s=a instanceof A.Z?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.fS(v.typeUniverse,s.name)
b.$ccache=r
return r},
hP(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.bV(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
hO(a){return A.a5(A.a4(a))},
dG(a){var s
if(a instanceof A.aj)return A.hI(a.$r,a.aF())
s=a instanceof A.Z?A.ey(a):null
if(s!=null)return s
if(t.R.b(a))return J.eW(a).a
if(Array.isArray(a))return A.dB(a)
return A.b6(a)},
a5(a){var s=a.r
return s==null?a.r=A.el(a):s},
el(a){var s,r,q=a.as,p=q.replace(/\*/g,"")
if(p===q)return a.r=new A.bU(a)
s=A.bV(v.typeUniverse,p,!0)
r=s.r
return r==null?s.r=A.el(s):r},
hI(a,b){var s,r,q=b,p=q.length
if(p===0)return t.F
if(0>=p)return A.b(q,0)
s=A.b2(v.typeUniverse,A.dG(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.b(q,r)
s=A.ei(v.typeUniverse,s,A.dG(q[r]))}return A.b2(v.typeUniverse,s,a)},
C(a){return A.a5(A.bV(v.typeUniverse,a,!1))},
h8(a){var s,r,q,p,o,n,m=this
if(m===t.K)return A.L(m,a,A.hg)
if(!A.M(m))s=m===t._
else s=!0
if(s)return A.L(m,a,A.hk)
s=m.w
if(s===7)return A.L(m,a,A.h6)
if(s===1)return A.L(m,a,A.eq)
r=s===6?m.x:m
q=r.w
if(q===8)return A.L(m,a,A.hc)
if(r===t.S)p=A.ep
else if(r===t.i||r===t.H)p=A.hf
else if(r===t.N)p=A.hi
else p=r===t.y?A.dE:null
if(p!=null)return A.L(m,a,p)
if(q===9){o=r.x
if(r.y.every(A.hU)){m.f="$i"+o
if(o==="h")return A.L(m,a,A.he)
return A.L(m,a,A.hj)}}else if(q===11){n=A.hH(r.x,r.y)
return A.L(m,a,n==null?A.eq:n)}return A.L(m,a,A.h4)},
L(a,b,c){a.b=c
return a.b(b)},
h7(a){var s,r=this,q=A.h3
if(!A.M(r))s=r===t._
else s=!0
if(s)q=A.fV
else if(r===t.K)q=A.fU
else{s=A.b7(r)
if(s)q=A.h5}r.a=q
return r.a(a)},
bW(a){var s=a.w,r=!0
if(!A.M(a))if(!(a===t._))if(!(a===t.A))if(s!==7)if(!(s===6&&A.bW(a.x)))r=s===8&&A.bW(a.x)||a===t.P||a===t.T
return r},
h4(a){var s=this
if(a==null)return A.bW(s)
return A.hV(v.typeUniverse,A.hT(a,s),s)},
h6(a){if(a==null)return!0
return this.x.b(a)},
hj(a){var s,r=this
if(a==null)return A.bW(r)
s=r.f
if(a instanceof A.e)return!!a[s]
return!!J.a6(a)[s]},
he(a){var s,r=this
if(a==null)return A.bW(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.e)return!!a[s]
return!!J.a6(a)[s]},
h3(a){var s=this
if(a==null){if(A.b7(s))return a}else if(s.b(a))return a
A.em(a,s)},
h5(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.em(a,s)},
em(a,b){throw A.c(A.fJ(A.e8(a,A.v(b,null))))},
e8(a,b){return A.c1(a)+": type '"+A.v(A.dG(a),null)+"' is not a subtype of type '"+b+"'"},
fJ(a){return new A.aZ("TypeError: "+a)},
u(a,b){return new A.aZ("TypeError: "+A.e8(a,b))},
hc(a){var s=this,r=s.w===6?s.x:s
return r.x.b(a)||A.dt(v.typeUniverse,r).b(a)},
hg(a){return a!=null},
fU(a){if(a!=null)return a
throw A.c(A.u(a,"Object"))},
hk(a){return!0},
fV(a){return a},
eq(a){return!1},
dE(a){return!0===a||!1===a},
iq(a){if(!0===a)return!0
if(!1===a)return!1
throw A.c(A.u(a,"bool"))},
is(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.c(A.u(a,"bool"))},
ir(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.c(A.u(a,"bool?"))},
it(a){if(typeof a=="number")return a
throw A.c(A.u(a,"double"))},
iv(a){if(typeof a=="number")return a
if(a==null)return a
throw A.c(A.u(a,"double"))},
iu(a){if(typeof a=="number")return a
if(a==null)return a
throw A.c(A.u(a,"double?"))},
ep(a){return typeof a=="number"&&Math.floor(a)===a},
iw(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.c(A.u(a,"int"))},
iy(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.c(A.u(a,"int"))},
ix(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.c(A.u(a,"int?"))},
hf(a){return typeof a=="number"},
iz(a){if(typeof a=="number")return a
throw A.c(A.u(a,"num"))},
iB(a){if(typeof a=="number")return a
if(a==null)return a
throw A.c(A.u(a,"num"))},
iA(a){if(typeof a=="number")return a
if(a==null)return a
throw A.c(A.u(a,"num?"))},
hi(a){return typeof a=="string"},
iC(a){if(typeof a=="string")return a
throw A.c(A.u(a,"String"))},
iE(a){if(typeof a=="string")return a
if(a==null)return a
throw A.c(A.u(a,"String"))},
iD(a){if(typeof a=="string")return a
if(a==null)return a
throw A.c(A.u(a,"String?"))},
et(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.v(a[q],b)
return s},
hp(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.et(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.v(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
en(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", ",a3=null
if(a6!=null){s=a6.length
if(a5==null)a5=A.a([],t.s)
else a3=a5.length
r=a5.length
for(q=s;q>0;--q)a5.push("T"+(r+q))
for(p=t.X,o=t._,n="<",m="",q=0;q<s;++q,m=a2){l=a5.length
k=l-1-q
if(!(k>=0))return A.b(a5,k)
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
if(l===9){p=A.hw(a.x)
o=a.y
return o.length>0?p+("<"+A.et(o,b)+">"):p}if(l===11)return A.hp(a,b)
if(l===12)return A.en(a,b,null)
if(l===13)return A.en(a.x,b,a.y)
if(l===14){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.b(b,n)
return b[n]}return"?"},
hw(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
fT(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
fS(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.bV(a,b,!1)
else if(typeof m=="number"){s=m
r=A.b1(a,5,"#")
q=A.d2(s)
for(p=0;p<s;++p)q[p]=r
o=A.b0(a,b,q)
n[b]=o
return o}else return m},
fR(a,b){return A.ej(a.tR,b)},
fQ(a,b){return A.ej(a.eT,b)},
bV(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.ec(A.ea(a,null,b,c))
r.set(b,s)
return s},
b2(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.ec(A.ea(a,b,c,!0))
q.set(c,r)
return r},
ei(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.dy(a,b,c.w===10?c.y:[c])
p.set(s,q)
return q},
K(a,b){b.a=A.h7
b.b=A.h8
return b},
b1(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.y(null,null)
s.w=b
s.as=c
r=A.K(a,s)
a.eC.set(c,r)
return r},
eh(a,b,c){var s,r=b.as+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.fO(a,b,r,c)
a.eC.set(r,s)
return s},
fO(a,b,c,d){var s,r,q
if(d){s=b.w
if(!A.M(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.y(null,null)
q.w=6
q.x=b
q.as=c
return A.K(a,q)},
dA(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.fN(a,b,r,c)
a.eC.set(r,s)
return s},
fN(a,b,c,d){var s,r,q,p
if(d){s=b.w
r=!0
if(!A.M(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.b7(b.x)
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.x
if(q.w===8&&A.b7(q.x))return q
else return A.e2(a,b)}}p=new A.y(null,null)
p.w=7
p.x=b
p.as=c
return A.K(a,p)},
ef(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.fL(a,b,r,c)
a.eC.set(r,s)
return s},
fL(a,b,c,d){var s,r
if(d){s=b.w
if(A.M(b)||b===t.K||b===t._)return b
else if(s===1)return A.b0(a,"H",[b])
else if(b===t.P||b===t.T)return t.O}r=new A.y(null,null)
r.w=8
r.x=b
r.as=c
return A.K(a,r)},
fP(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.y(null,null)
s.w=14
s.x=b
s.as=q
r=A.K(a,s)
a.eC.set(q,r)
return r},
b_(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
fK(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
b0(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.b_(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.y(null,null)
r.w=9
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.K(a,r)
a.eC.set(p,q)
return q},
dy(a,b,c){var s,r,q,p,o,n
if(b.w===10){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.b_(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.y(null,null)
o.w=10
o.x=s
o.y=r
o.as=q
n=A.K(a,o)
a.eC.set(q,n)
return n},
eg(a,b,c){var s,r,q="+"+(b+"("+A.b_(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.y(null,null)
s.w=11
s.x=b
s.y=c
s.as=q
r=A.K(a,s)
a.eC.set(q,r)
return r},
ee(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.b_(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.b_(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.fK(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.y(null,null)
p.w=12
p.x=b
p.y=c
p.as=r
o=A.K(a,p)
a.eC.set(r,o)
return o},
dz(a,b,c,d){var s,r=b.as+("<"+A.b_(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.fM(a,b,c,r,d)
a.eC.set(r,s)
return s},
fM(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.d2(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.W(a,b,r,0)
m=A.am(a,c,r,0)
return A.dz(a,n,m,c!==m)}}l=new A.y(null,null)
l.w=13
l.x=b
l.y=c
l.as=d
return A.K(a,l)},
ea(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
ec(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.fC(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.eb(a,r,l,k,!1)
else if(q===46)r=A.eb(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.V(a.u,a.e,k.pop()))
break
case 94:k.push(A.fP(a.u,k.pop()))
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
case 62:A.fE(a,k)
break
case 38:A.fD(a,k)
break
case 42:p=a.u
k.push(A.eh(p,A.V(p,a.e,k.pop()),a.n))
break
case 63:p=a.u
k.push(A.dA(p,A.V(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.ef(p,A.V(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.fB(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.ed(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.fG(a.u,a.e,o)
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
fC(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
eb(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===10)o=o.x
n=A.fT(s,o.x)[p]
if(n==null)A.b8('No "'+p+'" in "'+A.fm(o)+'"')
d.push(A.b2(s,o,n))}else d.push(p)
return m},
fE(a,b){var s,r=a.u,q=A.e9(a,b),p=b.pop()
if(typeof p=="string")b.push(A.b0(r,p,q))
else{s=A.V(r,a.e,p)
switch(s.w){case 12:b.push(A.dz(r,s,q,a.n))
break
default:b.push(A.dy(r,s,q))
break}}},
fB(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.e9(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.V(p,a.e,o)
q=new A.bP()
q.a=s
q.b=n
q.c=m
b.push(A.ee(p,r,q))
return
case-4:b.push(A.eg(p,b.pop(),s))
return
default:throw A.c(A.bc("Unexpected state under `()`: "+A.r(o)))}},
fD(a,b){var s=b.pop()
if(0===s){b.push(A.b1(a.u,1,"0&"))
return}if(1===s){b.push(A.b1(a.u,4,"1&"))
return}throw A.c(A.bc("Unexpected extended operation "+A.r(s)))},
e9(a,b){var s=b.splice(a.p)
A.ed(a.u,a.e,s)
a.p=b.pop()
return s},
V(a,b,c){if(typeof c=="string")return A.b0(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.fF(a,b,c)}else return c},
ed(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.V(a,b,c[s])},
fG(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.V(a,b,c[s])},
fF(a,b,c){var s,r,q=b.w
if(q===10){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==9)throw A.c(A.bc("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.c(A.bc("Bad index "+c+" for "+b.h(0)))},
hV(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.n(a,b,null,c,null,!1)?1:0
r.set(c,s)}if(0===s)return!1
if(1===s)return!0
return!0},
n(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(!A.M(d))s=d===t._
else s=!0
if(s)return!0
r=b.w
if(r===4)return!0
if(A.M(b))return!1
s=b.w
if(s===1)return!0
q=r===14
if(q)if(A.n(a,c[b.x],c,d,e,!1))return!0
p=d.w
s=b===t.P||b===t.T
if(s){if(p===8)return A.n(a,b,c,d.x,e,!1)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return A.n(a,b.x,c,d,e,!1)
if(r===6)return A.n(a,b.x,c,d,e,!1)
return r!==7}if(r===6)return A.n(a,b.x,c,d,e,!1)
if(p===6){s=A.e2(a,d)
return A.n(a,b,c,s,e,!1)}if(r===8){if(!A.n(a,b.x,c,d,e,!1))return!1
return A.n(a,A.dt(a,b),c,d,e,!1)}if(r===7){s=A.n(a,t.P,c,d,e,!1)
return s&&A.n(a,b.x,c,d,e,!1)}if(p===8){if(A.n(a,b,c,d.x,e,!1))return!0
return A.n(a,b,c,A.dt(a,d),e,!1)}if(p===7){s=A.n(a,b,c,t.P,e,!1)
return s||A.n(a,b,c,d.x,e,!1)}if(q)return!1
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
if(!A.n(a,j,c,i,e,!1)||!A.n(a,i,e,j,c,!1))return!1}return A.eo(a,b.x,c,d.x,e,!1)}if(p===12){if(b===t.g)return!0
if(s)return!1
return A.eo(a,b,c,d,e,!1)}if(r===9){if(p!==9)return!1
return A.hd(a,b,c,d,e,!1)}if(o&&p===11)return A.hh(a,b,c,d,e,!1)
return!1},
eo(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.n(a3,a4.x,a5,a6.x,a7,!1))return!1
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
if(!A.n(a3,p[h],a7,g,a5,!1))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.n(a3,p[o+h],a7,g,a5,!1))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.n(a3,k[h],a7,g,a5,!1))return!1}f=s.c
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
if(!A.n(a3,e[a+2],a7,g,a5,!1))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
hd(a,b,c,d,e,f){var s,r,q,p,o,n=b.x,m=d.x
for(;n!==m;){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.b2(a,b,r[o])
return A.ek(a,p,null,c,d.y,e,!1)}return A.ek(a,b.y,null,c,d.y,e,!1)},
ek(a,b,c,d,e,f,g){var s,r=b.length
for(s=0;s<r;++s)if(!A.n(a,b[s],d,e[s],f,!1))return!1
return!0},
hh(a,b,c,d,e,f){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.n(a,r[s],c,q[s],e,!1))return!1
return!0},
b7(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.M(a))if(s!==7)if(!(s===6&&A.b7(a.x)))r=s===8&&A.b7(a.x)
return r},
hU(a){var s
if(!A.M(a))s=a===t._
else s=!0
return s},
M(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
ej(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
d2(a){return a>0?new Array(a):v.typeUniverse.sEA},
y:function y(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
bP:function bP(){this.c=this.b=this.a=null},
bU:function bU(a){this.a=a},
bO:function bO(){},
aZ:function aZ(a){this.a=a},
fv(){var s,r,q
if(self.scheduleImmediate!=null)return A.hz()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.bY(new A.cB(s),1)).observe(r,{childList:true})
return new A.cA(s,r,q)}else if(self.setImmediate!=null)return A.hA()
return A.hB()},
fw(a){self.scheduleImmediate(A.bY(new A.cC(a),0))},
fx(a){self.setImmediate(A.bY(new A.cD(a),0))},
fy(a){A.fH(0,a)},
e4(a,b){var s=B.a.F(a.a,1000)
return A.fI(s,b)},
fH(a,b){var s=new A.aY()
s.b8(a,b)
return s},
fI(a,b){var s=new A.aY()
s.b9(a,b)
return s},
hl(a){return new A.bG(new A.m($.i,a.i("m<0>")),a.i("bG<0>"))},
fY(a,b){a.$2(0,null)
b.b=!0
return b.a},
d4(a,b){A.fZ(a,b)},
fX(a,b){var s,r=a==null?b.$ti.c.a(a):a
if(!b.b)b.a.a1(r)
else{s=b.a
if(b.$ti.i("H<1>").b(r))s.aD(r)
else s.a4(r)}},
fW(a,b){var s=A.O(a),r=A.F(a),q=b.a
if(b.b)q.B(s,r)
else q.aA(s,r)},
fZ(a,b){var s,r,q=new A.d5(b),p=new A.d6(b)
if(a instanceof A.m)a.aL(q,p,t.z)
else{s=t.z
if(a instanceof A.m)a.aq(q,p,s)
else{r=new A.m($.i,t.d)
r.a=8
r.c=a
r.aL(q,p,s)}}},
hy(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.i.ao(new A.d9(s))},
dm(a){var s
if(t.Q.b(a)){s=a.gS()
if(s!=null)return s}return B.C},
ha(a,b){if($.i===B.c)return null
return null},
cJ(a,b,c){var s,r,q,p={},o=p.a=a
for(;s=o.a,(s&4)!==0;){o=o.c
p.a=o}if(o===b){b.aA(new A.D(!0,o,null,"Cannot complete a future with itself"),A.fo())
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.aJ(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.M()
b.V(p.a)
A.a2(b,q)
return}b.a^=2
A.al(null,null,b.b,new A.cK(p,b))},
a2(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;!0;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){f=f.c
A.bX(f.a,f.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.a2(g.a,f)
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
if(r){A.bX(m.a,m.b)
return}j=$.i
if(j!==k)$.i=k
else j=null
f=f.c
if((f&15)===8)new A.cR(s,g,p).$0()
else if(q){if((f&1)!==0)new A.cQ(s,m).$0()}else if((f&2)!==0)new A.cP(g,s).$0()
if(j!=null)$.i=j
f=s.c
if(f instanceof A.m){r=s.a.$ti
r=r.i("H<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.X(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.cJ(f,i,!0)
return}}i=s.a.b
h=i.c
i.c=null
b=i.X(h)
f=s.b
r=s.c
if(!f){i.a=8
i.c=r}else{i.a=i.a&1|16
i.c=r}g.a=i
f=i}},
hq(a,b){if(t.C.b(a))return b.ao(a)
if(t.v.b(a))return a
throw A.c(A.dT(a,"onError",u.c))},
hm(){var s,r
for(s=$.ak;s!=null;s=$.ak){$.b5=null
r=s.b
$.ak=r
if(r==null)$.b4=null
s.a.$0()}},
ht(){$.dF=!0
try{A.hm()}finally{$.b5=null
$.dF=!1
if($.ak!=null)$.dQ().$1(A.ex())}},
ev(a){var s=new A.bH(a),r=$.b4
if(r==null){$.ak=$.b4=s
if(!$.dF)$.dQ().$1(A.ex())}else $.b4=r.b=s},
hs(a){var s,r,q,p=$.ak
if(p==null){A.ev(a)
$.b5=$.b4
return}s=new A.bH(a)
r=$.b5
if(r==null){s.b=p
$.ak=$.b5=s}else{q=r.b
s.b=q
$.b5=r.b=s
if(q==null)$.b4=s}},
dO(a){var s=null,r=$.i
if(B.c===r){A.al(s,s,B.c,a)
return}A.al(s,s,r,r.aN(a))},
ia(a){A.dI(a,"stream",t.K)
return new A.bS()},
dv(a){return new A.aL(null,null,a.i("aL<0>"))},
eu(a){return},
e7(a,b){return b==null?A.hC():b},
fz(a,b){if(b==null)b=A.hD()
if(t.k.b(b))return a.ao(b)
if(t.u.b(b))return b
throw A.c(A.ap("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
hn(a){},
ho(a,b){A.bX(a,b)},
h1(a,b,c){var s,r=a.aO(),q=$.dk()
if(r!==q){q=r.$ti
s=$.i
r.U(new A.U(new A.m(s,q),8,new A.d7(b,c),null,q.i("U<1,1>")))}else b.a3(c)},
fr(a,b){var s=$.i
if(s===B.c)return A.e4(a,b)
return A.e4(a,s.bw(b,t.E))},
bX(a,b){A.hs(new A.d8(a,b))},
er(a,b,c,d){var s,r=$.i
if(r===c)return d.$0()
$.i=c
s=r
try{r=d.$0()
return r}finally{$.i=s}},
es(a,b,c,d,e){var s,r=$.i
if(r===c)return d.$1(e)
$.i=c
s=r
try{r=d.$1(e)
return r}finally{$.i=s}},
hr(a,b,c,d,e,f){var s,r=$.i
if(r===c)return d.$2(e,f)
$.i=c
s=r
try{r=d.$2(e,f)
return r}finally{$.i=s}},
al(a,b,c,d){if(B.c!==c)d=c.aN(d)
A.ev(d)},
cB:function cB(a){this.a=a},
cA:function cA(a,b,c){this.a=a
this.b=b
this.c=c},
cC:function cC(a){this.a=a},
cD:function cD(a){this.a=a},
aY:function aY(){this.c=0},
d1:function d1(a,b){this.a=a
this.b=b},
d0:function d0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bG:function bG(a,b){this.a=a
this.b=!1
this.$ti=b},
d5:function d5(a){this.a=a},
d6:function d6(a){this.a=a},
d9:function d9(a){this.a=a},
Y:function Y(a,b){this.a=a
this.b=b},
A:function A(a,b){this.a=a
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
bI:function bI(){},
aL:function aL(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null
_.$ti=c},
U:function U(a,b,c,d,e){var _=this
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
cG:function cG(a,b){this.a=a
this.b=b},
cO:function cO(a,b){this.a=a
this.b=b},
cL:function cL(a){this.a=a},
cM:function cM(a){this.a=a},
cN:function cN(a,b,c){this.a=a
this.b=b
this.c=c},
cK:function cK(a,b){this.a=a
this.b=b},
cI:function cI(a,b){this.a=a
this.b=b},
cH:function cH(a,b,c){this.a=a
this.b=b
this.c=c},
cR:function cR(a,b,c){this.a=a
this.b=b
this.c=c},
cS:function cS(a,b){this.a=a
this.b=b},
cT:function cT(a){this.a=a},
cQ:function cQ(a,b){this.a=a
this.b=b},
cP:function cP(a,b){this.a=a
this.b=b},
bH:function bH(a){this.a=a
this.b=null},
ah:function ah(){},
ck:function ck(a,b){this.a=a
this.b=b},
cl:function cl(a,b){this.a=a
this.b=b},
ci:function ci(a){this.a=a},
cj:function cj(a,b,c){this.a=a
this.b=b
this.c=c},
aN:function aN(){},
bK:function bK(){},
bJ:function bJ(){},
aX:function aX(){},
bN:function bN(){},
bM:function bM(a){this.b=a
this.a=null},
bQ:function bQ(){this.a=0
this.c=this.b=null},
cX:function cX(a,b){this.a=a
this.b=b},
aO:function aO(a){this.a=1
this.b=a
this.c=null},
bS:function bS(){},
d7:function d7(a,b){this.a=a
this.b=b},
d3:function d3(){},
d8:function d8(a,b){this.a=a
this.b=b},
cY:function cY(){},
cZ:function cZ(a,b){this.a=a
this.b=b},
d_:function d_(a,b,c){this.a=a
this.b=b
this.c=c},
fg(a){return new A.aP(a.i("aP<0>"))},
dx(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
fA(a,b,c){var s=new A.ai(a,b,c.i("ai<0>"))
s.c=a.e
return s},
ds(a){var s,r
if(A.eD(a))return"{...}"
s=new A.bC("")
try{r={}
$.N.push(a)
s.a+="{"
r.a=!0
a.ai(0,new A.c7(r,s))
s.a+="}"}finally{if(0>=$.N.length)return A.b($.N,-1)
$.N.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
aP:function aP(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cW:function cW(a){this.a=a
this.c=this.b=null},
ai:function ai(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
l:function l(){},
aB:function aB(){},
c7:function c7(a,b){this.a=a
this.b=b},
aH:function aH(){},
aV:function aV(){},
f4(a,b){a=A.c(a)
a.stack=b.h(0)
throw a
throw A.c("unreachable")},
dr(a,b,c){var s,r,q
if(a>4294967295)A.b8(A.fl(a,0,4294967295,"length",null))
s=A.a(new Array(a),c.i("o<0>"))
s.$flags=1
r=s
if(a!==0)for(s=r.length,q=0;q<s;++q)r[q]=b
return r},
fh(a,b,c){var s,r,q=A.a([],c.i("o<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.dP)(a),++r)q.push(a[r])
q.$flags=1
return q},
fp(a,b,c){var s=J.eV(b)
if(!s.K())return a
if(c.length===0){do a+=A.r(s.gO())
while(s.K())}else{a+=A.r(s.gO())
for(;s.K();)a=a+c+A.r(s.gO())}return a},
fo(){return A.F(new Error())},
c1(a){if(typeof a=="number"||A.dE(a)||a==null)return J.b9(a)
if(typeof a=="string")return JSON.stringify(a)
return A.e1(a)},
f5(a,b){A.dI(a,"error",t.K)
A.dI(b,"stackTrace",t.l)
A.f4(a,b)},
bc(a){return new A.bb(a)},
ap(a,b){return new A.D(!1,null,b,a)},
dT(a,b,c){return new A.D(!0,a,b,c)},
fk(a){var s=null
return new A.ae(s,s,!1,s,s,a)},
fl(a,b,c,d,e){return new A.ae(b,c,!0,a,d,"Invalid value")},
fa(a,b,c,d){return new A.bi(b,!0,a,d,"Index out of range")},
bF(a){return new A.aK(a)},
e6(a){return new A.bD(a)},
be(a){return new A.bd(a)},
bh(a){return new A.cF(a)},
dn(a,b,c){var s,r
if(A.eD(a))return b+"..."+c
s=new A.bC(b)
$.N.push(a)
try{r=s
r.a=A.fp(r.a,a,", ")}finally{if(0>=$.N.length)return A.b($.N,-1)
$.N.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
c9(a,b,c,d){var s
if(B.e===c){s=B.a.gk(a)
b=J.G(b)
return A.dw(A.T(A.T($.dl(),s),b))}if(B.e===d){s=B.a.gk(a)
b=J.G(b)
c=J.G(c)
return A.dw(A.T(A.T(A.T($.dl(),s),b),c))}s=B.a.gk(a)
b=J.G(b)
c=J.G(c)
d=J.G(d)
d=A.dw(A.T(A.T(A.T(A.T($.dl(),s),b),c),d))
return d},
bg:function bg(a){this.a=a},
cE:function cE(){},
j:function j(){},
bb:function bb(a){this.a=a},
I:function I(){},
D:function D(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ae:function ae(a,b,c,d,e,f){var _=this
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
aK:function aK(a){this.a=a},
bD:function bD(a){this.a=a},
ag:function ag(a){this.a=a},
bd:function bd(a){this.a=a},
by:function by(){},
aI:function aI(){},
cF:function cF(a){this.a=a},
q:function q(){},
e:function e(){},
bT:function bT(){},
bC:function bC(a){this.a=a},
cU:function cU(){},
P:function P(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
R:function R(a){this.a=a},
aa:function aa(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ac:function ac(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=0},
fn(a,b,c,d,e,f,g,h){var s,r,q,p=self,o=p.document.createElement("canvas"),n=h*g
o.width=n
s=d*f
o.height=s
r=p.document.createElement("canvas")
r.width=n
r.height=s
s=A.a([],t.x)
for(q=0;q<d;++q){p=B.a.F(h,32)
s.push(new Uint32Array(p+1))}p=new A.bB(!0,d,h,g,f,c,a,o,r,s)
p.b6(a,b,c,d,!0,f,g,h)
return p},
du(a){return new A.x(B.a.F(a,32),31-B.a.l(a,32))},
bB:function bB(a,b,c,d,e,f,g,h,i,j){var _=this
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
cc:function cc(a){this.a=a},
cd:function cd(a){this.a=a},
ce:function ce(a){this.a=a},
cf:function cf(a){this.a=a},
cb:function cb(){},
E:function E(a){this.b=a},
fq(a,b,c,d,e){var s,r,q,p,o="white",n=null,m=A.fn("black",b,o,d*(8+c),!0,2,2,a*8),l=A.a([],t.I)
for(s=t.U,r=0;r<d;++r){q=A.a([],s)
for(p=0;p<a;++p)q.push(new A.P(r,p," ",o))
l.push(q)}m=new A.aJ(d,a,c,b,m,new A.ac(d,a),new A.ac(d,a),new A.ac(d,a),A.dv(t.N),A.dv(t.V),A.dv(t.r),B.d,l,A.fg(t.o),B.dL)
m.b7("black",a,b,o,n,!0,2,2,c,d,!0,n,e,n,n,n,n)
return m},
af:function af(a){this.b=a},
aJ:function aJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
cv:function cv(a){this.a=a},
cu:function cu(){},
ct:function ct(a){this.a=a},
cn:function cn(a){this.a=a},
co:function co(a){this.a=a},
cp:function cp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cq:function cq(a,b,c){this.a=a
this.b=b
this.c=c},
cr:function cr(a,b,c){this.a=a
this.b=b
this.c=c},
cs:function cs(a){this.a=a},
f6(a,b){var s,r,q,p,o=A.a([],t.G)
for(s=t.q,r=0;r<a;++r){q=A.a([],s)
for(p=0;p<b;++p)q.push(new A.ar())
o.push(q)}return new A.c2(o)},
f9(){var s=new A.c3(A.f6(17,35),B.h)
s.b5()
return s},
hX(){A.f9().H()},
ar:function ar(){this.c=this.b=this.a=!1},
c2:function c2(a){this.a=a},
a_:function a_(a){this.b=a},
c3:function c3(a,b){var _=this
_.a=!1
_.b=$
_.c=a
_.d=b},
c4:function c4(a){this.a=a},
i0(a){A.di(new A.a9("Field '"+a+"' has been assigned during initialization."),new Error())},
p(){A.di(new A.a9("Field '' has not been initialized."),new Error())},
i1(){A.di(new A.a9("Field '' has already been initialized."),new Error())},
b3(a){var s
if(typeof a=="function")throw A.c(A.ap("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.h_,a)
s[$.dj()]=a
return s},
dC(a){var s
if(typeof a=="function")throw A.c(A.ap("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.h0,a)
s[$.dj()]=a
return s},
h_(a){return a.$0()},
h0(a,b,c){if(c>=1)return a.$1(b)
return a.$0()}},B={}
var w=[A,J,B]
var $={}
A.dp.prototype={}
J.bj.prototype={
A(a,b){return a===b},
gk(a){return A.ad(a)},
h(a){return"Instance of '"+A.ca(a)+"'"},
gn(a){return A.a5(A.dD(this))}}
J.bk.prototype={
h(a){return String(a)},
gk(a){return a?519018:218159},
gn(a){return A.a5(t.y)},
$if:1}
J.av.prototype={
A(a,b){return null==b},
h(a){return"null"},
gk(a){return 0},
$if:1,
$iq:1}
J.ax.prototype={$ik:1}
J.S.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.bz.prototype={}
J.a1.prototype={}
J.Q.prototype={
h(a){var s=a[$.dj()]
if(s==null)return this.b4(a)
return"JavaScript function for "+J.b9(s)}}
J.aw.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.ay.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.o.prototype={
an(a,b){var s,r,q=a.length,p=A.dr(q,"",t.N)
for(s=0;s<a.length;++s){r=A.r(a[s])
if(!(s<q))return A.b(p,s)
p[s]=r}return p.join(b)},
bx(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw A.c(A.be(a))}return s},
by(a,b,c){return this.bx(a,b,c,t.z)},
gj(a){if(a.length>0)return a[0]
throw A.c(A.dZ())},
h(a){return A.dn(a,"[","]")},
gam(a){return new J.ba(a,a.length,A.dB(a).i("ba<1>"))},
gk(a){return A.ad(a)},
gq(a){return a.length},
$ih:1}
J.c5.prototype={}
J.ba.prototype={
gO(){var s=this.d
return s==null?this.$ti.c.a(s):s},
K(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.c(A.dP(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.a8.prototype={
bP(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.c(A.bF(""+a+".toInt()"))},
bJ(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.c(A.bF(""+a+".round()"))},
h(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gk(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
l(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
E(a,b){if((a|0)===a)if(b>=1)return a/b|0
return this.aK(a,b)},
F(a,b){return(a|0)===a?a/b|0:this.aK(a,b)},
aK(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.c(A.bF("Result of truncating division is "+A.r(s)+": "+A.r(a)+" ~/ "+b))},
R(a,b){if(b<0)throw A.c(A.dH(b))
return b>31?0:a<<b>>>0},
bt(a,b){return b>31?0:a<<b>>>0},
b3(a,b){var s
if(b<0)throw A.c(A.dH(b))
if(a>0)s=this.ae(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
bu(a,b){var s
if(a>0)s=this.ae(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
C(a,b){if(0>b)throw A.c(A.dH(b))
return this.ae(a,b)},
ae(a,b){return b>31?0:a>>>b},
gn(a){return A.a5(t.H)},
$it:1}
J.au.prototype={
gn(a){return A.a5(t.S)},
$if:1,
$id:1}
J.bl.prototype={
gn(a){return A.a5(t.i)},
$if:1}
J.a0.prototype={
bQ(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.b(p,0)
if(p.charCodeAt(0)===133){s=J.fe(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.b(p,r)
q=p.charCodeAt(r)===133?J.ff(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
b1(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.c(B.A)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
bH(a,b,c){var s=b-a.length
if(s<=0)return a
return this.b1(c,s)+a},
h(a){return a},
gk(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gn(a){return A.a5(t.N)},
gq(a){return a.length},
$if:1,
$iz:1}
A.a9.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.dh.prototype={
$0(){var s=new A.m($.i,t.D)
s.a1(null)
return s},
$S:8}
A.cg.prototype={}
A.bn.prototype={
gO(){var s=this.d
return s==null?this.$ti.c.a(s):s},
K(){var s,r=this,q=r.a,p=J.eA(q),o=p.gq(q)
if(r.b!==o)throw A.c(A.be(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.t(q,s);++r.c
return!0}}
A.at.prototype={}
A.x.prototype={$r:"+(1,2)",$s:1}
A.bf.prototype={
h(a){return A.ds(this)}}
A.a7.prototype={
W(){var s=this,r=s.$map
if(r==null){r=new A.az(s.$ti.i("az<1,2>"))
A.hJ(s.a,r)
s.$map=r}return r},
ag(a){return this.W().ag(a)},
t(a,b){return this.W().t(0,b)},
ai(a,b){this.W().ai(0,b)},
gq(a){return this.W().a}}
A.cx.prototype={
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
A.bm.prototype={
h(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.bE.prototype={
h(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.c8.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.as.prototype={}
A.aW.prototype={
h(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iB:1}
A.Z.prototype={
h(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.eG(r==null?"unknown":r)+"'"},
gbR(){return this},
$C:"$1",
$R:1,
$D:null}
A.c_.prototype={$C:"$0",$R:0}
A.c0.prototype={$C:"$2",$R:2}
A.cm.prototype={}
A.ch.prototype={
h(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.eG(s)+"'"}}
A.aq.prototype={
A(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.aq))return!1
return this.$_target===b.$_target&&this.a===b.a},
gk(a){return(A.dN(this.a)^A.ad(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.ca(this.a)+"'")}}
A.bL.prototype={
h(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.bA.prototype={
h(a){return"RuntimeError: "+this.a}}
A.aA.prototype={
gq(a){return this.a},
ag(a){var s=this.b
if(s==null)return!1
return s[a]!=null},
t(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.bC(b)},
bC(a){var s,r,q=this.d
if(q==null)return null
s=q[this.aj(a)]
r=this.ak(s,a)
if(r<0)return null
return s[r].b},
ai(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw A.c(A.be(s))
r=r.c}},
T(a,b){var s=this,r=new A.c6(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&1073741823
return r},
aj(a){return J.G(a)&1073741823},
ak(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ao(a[r].a,b))return r
return-1},
h(a){return A.ds(this)}}
A.c6.prototype={}
A.az.prototype={
aj(a){return A.hF(a)&1073741823},
ak(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ao(a[r].a,b))return r
return-1}}
A.dc.prototype={
$1(a){return this.a(a)},
$S:9}
A.dd.prototype={
$2(a,b){return this.a(a,b)},
$S:10}
A.de.prototype={
$1(a){return this.a(a)},
$S:11}
A.aj.prototype={
h(a){return this.aM(!1)},
aM(a){var s,r,q,p,o,n=this.bj(),m=this.aF(),l=(a?""+"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.b(m,q)
o=m[q]
l=a?l+A.e1(o):l+A.r(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
bj(){var s,r=this.$s
for(;$.aU.length<=r;)$.aU.push(null)
s=$.aU[r]
if(s==null){s=this.bi()
if(!(r<$.aU.length))return A.b($.aU,r)
$.aU[r]=s}return s},
bi(){var s,r,q,p,o,n=this.$r,m=n.indexOf("("),l=n.substring(1,m),k=n.substring(m),j=k==="()"?0:k.replace(/[^,]/g,"").length+1,i=A.a(new Array(j),t.f)
for(s=0;s<j;++s)i[s]=s
if(l!==""){r=l.split(",")
s=r.length
for(q=i.length,p=j;s>0;){--p;--s
o=r[s]
if(!(p>=0&&p<q))return A.b(i,p)
i[p]=o}}i=A.fh(i,!1,t.K)
i.$flags=3
return i}}
A.bR.prototype={
aF(){return[this.a,this.b]},
A(a,b){if(b==null)return!1
return b instanceof A.bR&&this.$s===b.$s&&J.ao(this.a,b.a)&&J.ao(this.b,b.b)},
gk(a){return A.c9(this.$s,this.a,this.b,B.e)}}
A.bo.prototype={
gn(a){return B.dU},
$if:1}
A.aE.prototype={}
A.bp.prototype={
gn(a){return B.dV},
$if:1}
A.ab.prototype={
gq(a){return a.length},
$iw:1}
A.aC.prototype={
t(a,b){A.a3(b,a,a.length)
return a[b]},
$ih:1}
A.aD.prototype={$ih:1}
A.bq.prototype={
gn(a){return B.dW},
$if:1}
A.br.prototype={
gn(a){return B.dX},
$if:1}
A.bs.prototype={
gn(a){return B.dY},
t(a,b){A.a3(b,a,a.length)
return a[b]},
$if:1}
A.bt.prototype={
gn(a){return B.dZ},
t(a,b){A.a3(b,a,a.length)
return a[b]},
$if:1}
A.bu.prototype={
gn(a){return B.e_},
t(a,b){A.a3(b,a,a.length)
return a[b]},
$if:1}
A.bv.prototype={
gn(a){return B.e1},
t(a,b){A.a3(b,a,a.length)
return a[b]},
$if:1}
A.bw.prototype={
gn(a){return B.e2},
t(a,b){A.a3(b,a,a.length)
return a[b]},
$if:1,
$icz:1}
A.aF.prototype={
gn(a){return B.e3},
gq(a){return a.length},
t(a,b){A.a3(b,a,a.length)
return a[b]},
$if:1}
A.bx.prototype={
gn(a){return B.e4},
gq(a){return a.length},
t(a,b){A.a3(b,a,a.length)
return a[b]},
$if:1}
A.aQ.prototype={}
A.aR.prototype={}
A.aS.prototype={}
A.aT.prototype={}
A.y.prototype={
i(a){return A.b2(v.typeUniverse,this,a)},
aB(a){return A.ei(v.typeUniverse,this,a)}}
A.bP.prototype={}
A.bU.prototype={
h(a){return A.v(this.a,null)}}
A.bO.prototype={
h(a){return this.a}}
A.aZ.prototype={$iI:1}
A.cB.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:2}
A.cA.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:12}
A.cC.prototype={
$0(){this.a.$0()},
$S:1}
A.cD.prototype={
$0(){this.a.$0()},
$S:1}
A.aY.prototype={
b8(a,b){if(self.setTimeout!=null)self.setTimeout(A.bY(new A.d1(this,b),0),a)
else throw A.c(A.bF("`setTimeout()` not found."))},
b9(a,b){if(self.setTimeout!=null)self.setInterval(A.bY(new A.d0(this,a,Date.now(),b),0),a)
else throw A.c(A.bF("Periodic timer."))},
$icw:1}
A.d1.prototype={
$0(){this.a.c=1
this.b.$0()},
$S:0}
A.d0.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.a.E(s,o)}q.c=p
r.d.$1(q)},
$S:1}
A.bG.prototype={}
A.d5.prototype={
$1(a){return this.a.$2(0,a)},
$S:5}
A.d6.prototype={
$2(a,b){this.a.$2(1,new A.as(a,b))},
$S:13}
A.d9.prototype={
$2(a,b){this.a(a,b)},
$S:14}
A.Y.prototype={
h(a){return A.r(this.a)},
$ij:1,
gS(){return this.b}}
A.A.prototype={}
A.aM.prototype={
ab(){},
ac(){}}
A.bI.prototype={
gbm(){return this.c<4},
br(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
bv(a,b,c,d){var s,r,q,p,o,n=this
if((n.c&4)!==0){s=new A.aO($.i)
A.dO(s.gbn())
s.c=c
return s}s=$.i
r=d?1:0
q=A.e7(s,a)
A.fz(s,b)
p=new A.aM(n,q,s,r|32,A.a4(n).i("aM<1>"))
p.CW=p
p.ch=p
p.ay=n.c&1
o=n.e
n.e=p
p.ch=null
p.CW=o
if(o==null)n.d=p
else o.ch=p
if(n.d===p)A.eu(n.a)
return p},
bq(a){var s,r=this
A.a4(r).i("aM<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.br(a)
if((r.c&2)===0&&r.d==null)r.be()}return null},
bb(){if((this.c&4)!==0)return new A.ag("Cannot add new events after calling close")
return new A.ag("Cannot add new events while doing an addStream")},
D(a,b){if(!this.gbm())throw A.c(this.bb())
this.ad(b)},
be(){if((this.c&4)!==0)if(null.gbS())null.a1(null)
A.eu(this.b)}}
A.aL.prototype={
ad(a){var s
for(s=this.d;s!=null;s=s.ch)s.bc(new A.bM(a))}}
A.U.prototype={
bE(a){if((this.c&15)!==6)return!0
return this.b.b.ap(this.d,a.a)},
bz(a){var s,r=this.e,q=null,p=a.a,o=this.b.b
if(t.C.b(r))q=o.bL(r,p,a.b)
else q=o.ap(r,p)
try{p=q
return p}catch(s){if(t.c.b(A.O(s))){if((this.c&1)!==0)throw A.c(A.ap("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.c(A.ap("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.m.prototype={
aq(a,b,c){var s,r=$.i
if(r===B.c){if(!t.C.b(b)&&!t.v.b(b))throw A.c(A.dT(b,"onError",u.c))}else b=A.hq(b,r)
s=new A.m(r,c.i("m<0>"))
this.U(new A.U(s,3,a,b,this.$ti.i("@<1>").aB(c).i("U<1,2>")))
return s},
aL(a,b,c){var s=new A.m($.i,c.i("m<0>"))
this.U(new A.U(s,19,a,b,this.$ti.i("@<1>").aB(c).i("U<1,2>")))
return s},
bs(a){this.a=this.a&1|16
this.c=a},
V(a){this.a=a.a&30|this.a&1
this.c=a.c},
U(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.U(a)
return}s.V(r)}A.al(null,null,s.b,new A.cG(s,a))}},
aJ(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.aJ(a)
return}n.V(s)}m.a=n.X(a)
A.al(null,null,n.b,new A.cO(m,n))}},
M(){var s=this.c
this.c=null
return this.X(s)},
X(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
aC(a){var s,r,q,p=this
p.a^=2
try{a.aq(new A.cL(p),new A.cM(p),t.P)}catch(q){s=A.O(q)
r=A.F(q)
A.dO(new A.cN(p,s,r))}},
a3(a){var s,r=this,q=r.$ti
if(q.i("H<1>").b(a))if(q.b(a))A.cJ(a,r,!0)
else r.aC(a)
else{s=r.M()
r.a=8
r.c=a
A.a2(r,s)}},
a4(a){var s=this,r=s.M()
s.a=8
s.c=a
A.a2(s,r)},
bh(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.M()
q.V(a)
A.a2(q,r)},
B(a,b){var s=this.M()
this.bs(new A.Y(a,b))
A.a2(this,s)},
a1(a){if(this.$ti.i("H<1>").b(a)){this.aD(a)
return}this.bd(a)},
bd(a){this.a^=2
A.al(null,null,this.b,new A.cI(this,a))},
aD(a){if(this.$ti.b(a)){A.cJ(a,this,!1)
return}this.aC(a)},
aA(a,b){this.a^=2
A.al(null,null,this.b,new A.cH(this,a,b))},
$iH:1}
A.cG.prototype={
$0(){A.a2(this.a,this.b)},
$S:0}
A.cO.prototype={
$0(){A.a2(this.b,this.a.a)},
$S:0}
A.cL.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.a4(p.$ti.c.a(a))}catch(q){s=A.O(q)
r=A.F(q)
p.B(s,r)}},
$S:2}
A.cM.prototype={
$2(a,b){this.a.B(a,b)},
$S:7}
A.cN.prototype={
$0(){this.a.B(this.b,this.c)},
$S:0}
A.cK.prototype={
$0(){A.cJ(this.a.a,this.b,!0)},
$S:0}
A.cI.prototype={
$0(){this.a.a4(this.b)},
$S:0}
A.cH.prototype={
$0(){this.a.B(this.b,this.c)},
$S:0}
A.cR.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.aY(q.d)}catch(p){s=A.O(p)
r=A.F(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.dm(q)
n=k.a
n.c=new A.Y(q,o)
q=n}q.b=!0
return}if(j instanceof A.m&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.m){m=k.b.a
l=new A.m(m.b,m.$ti)
j.aq(new A.cS(l,m),new A.cT(l),t.n)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.cS.prototype={
$1(a){this.a.bh(this.b)},
$S:2}
A.cT.prototype={
$2(a,b){this.a.B(a,b)},
$S:7}
A.cQ.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
q.c=p.b.b.ap(p.d,this.b)}catch(o){s=A.O(o)
r=A.F(o)
q=s
p=r
if(p==null)p=A.dm(q)
n=this.a
n.c=new A.Y(q,p)
n.b=!0}},
$S:0}
A.cP.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.bE(s)&&p.a.e!=null){p.c=p.a.bz(s)
p.b=!1}}catch(o){r=A.O(o)
q=A.F(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.dm(p)
m=l.b
m.c=new A.Y(p,n)
p=m}p.b=!0}},
$S:0}
A.bH.prototype={}
A.ah.prototype={
gq(a){var s={},r=new A.m($.i,t.a)
s.a=0
this.aR(new A.ck(s,this),!0,new A.cl(s,r),r.gaE())
return r},
gj(a){var s=new A.m($.i,this.$ti.i("m<1>")),r=this.aR(null,!0,new A.ci(s),s.gaE())
r.aU(new A.cj(this,r,s))
return s}}
A.ck.prototype={
$1(a){++this.a.a},
$S(){return this.b.$ti.i("~(1)")}}
A.cl.prototype={
$0(){this.b.a3(this.a.a)},
$S:0}
A.ci.prototype={
$0(){var s,r,q,p,o
try{q=A.dZ()
throw A.c(q)}catch(p){s=A.O(p)
r=A.F(p)
q=s
o=r
A.ha(q,o)
this.a.B(q,o)}},
$S:0}
A.cj.prototype={
$1(a){A.h1(this.b,this.c,a)},
$S(){return this.a.$ti.i("~(1)")}}
A.aN.prototype={
gk(a){return(A.ad(this.a)^892482866)>>>0},
A(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.A&&b.a===this.a}}
A.bK.prototype={
aI(){return this.w.bq(this)},
ab(){},
ac(){}}
A.bJ.prototype={
aU(a){this.a=A.e7(this.d,a)},
aO(){var s,r=this,q=r.e&=4294967279
if((q&8)===0){q=r.e=q|8
if((q&128)!==0){s=r.r
if(s.a===1)s.a=3}if((q&64)===0)r.r=null
r.f=r.aI()}q=$.dk()
return q},
ab(){},
ac(){},
aI(){return null},
bc(a){var s,r,q=this,p=q.r
if(p==null)p=q.r=new A.bQ()
s=p.c
if(s==null)p.b=p.c=a
else p.c=s.a=a
r=q.e
if((r&128)===0){r|=128
q.e=r
if(r<256)p.au(q)}},
ad(a){var s=this,r=s.e
s.e=r|64
s.d.b_(s.a,a)
s.e&=4294967231
s.bg((r&4)!==0)},
bg(a){var s,r,q=this,p=q.e
if((p&128)!==0&&q.r.c==null){p=q.e=p&4294967167
s=!1
if((p&4)!==0)if(p<256){s=q.r
s=s==null?null:s.c==null
s=s!==!1}if(s){p&=4294967291
q.e=p}}for(;!0;a=r){if((p&8)!==0){q.r=null
return}r=(p&4)!==0
if(a===r)break
q.e=p^64
if(r)q.ab()
else q.ac()
p=q.e&=4294967231}if((p&128)!==0&&p<256)q.r.au(q)}}
A.aX.prototype={
aR(a,b,c,d){return this.a.bv(a,d,c,!0)}}
A.bN.prototype={}
A.bM.prototype={}
A.bQ.prototype={
au(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.dO(new A.cX(s,a))
s.a=1}}
A.cX.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.a
q.b=r
if(r==null)q.c=null
this.b.ad(s.b)},
$S:0}
A.aO.prototype={
aU(a){},
aO(){this.a=-1
this.c=null
return $.dk()},
bo(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.aZ(s)}}else r.a=q}}
A.bS.prototype={}
A.d7.prototype={
$0(){return this.a.a3(this.b)},
$S:0}
A.d3.prototype={}
A.d8.prototype={
$0(){A.f5(this.a,this.b)},
$S:0}
A.cY.prototype={
aZ(a){var s,r,q
try{if(B.c===$.i){a.$0()
return}A.er(null,null,this,a)}catch(q){s=A.O(q)
r=A.F(q)
A.bX(s,r)}},
bO(a,b){var s,r,q
try{if(B.c===$.i){a.$1(b)
return}A.es(null,null,this,a,b)}catch(q){s=A.O(q)
r=A.F(q)
A.bX(s,r)}},
b_(a,b){return this.bO(a,b,t.z)},
aN(a){return new A.cZ(this,a)},
bw(a,b){return new A.d_(this,a,b)},
bK(a){if($.i===B.c)return a.$0()
return A.er(null,null,this,a)},
aY(a){return this.bK(a,t.z)},
bN(a,b){if($.i===B.c)return a.$1(b)
return A.es(null,null,this,a,b)},
ap(a,b){var s=t.z
return this.bN(a,b,s,s)},
bM(a,b,c){if($.i===B.c)return a.$2(b,c)
return A.hr(null,null,this,a,b,c)},
bL(a,b,c){var s=t.z
return this.bM(a,b,c,s,s,s)},
bI(a){return a},
ao(a){var s=t.z
return this.bI(a,s,s,s)}}
A.cZ.prototype={
$0(){return this.a.aZ(this.b)},
$S:0}
A.d_.prototype={
$1(a){return this.a.b_(this.b,a)},
$S(){return this.c.i("~(0)")}}
A.aP.prototype={
gam(a){var s=this,r=new A.ai(s,s.r,s.$ti.i("ai<1>"))
r.c=s.e
return r},
gq(a){return this.a},
D(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.az(s==null?q.b=A.dx():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.az(r==null?q.c=A.dx():r,b)}else return q.ba(b)},
ba(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.dx()
s=J.G(a)&1073741823
r=p[s]
if(r==null)p[s]=[q.aa(a)]
else{if(q.bk(r,a)>=0)return!1
r.push(q.aa(a))}return!0},
az(a,b){if(a[b]!=null)return!1
a[b]=this.aa(b)
return!0},
aH(){this.r=this.r+1&1073741823},
aa(a){var s,r=this,q=new A.cW(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.aH()
return q},
bk(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ao(a[r].a,b))return r
return-1}}
A.cW.prototype={}
A.ai.prototype={
gO(){var s=this.d
return s==null?this.$ti.c.a(s):s},
K(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.c(A.be(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.l.prototype={
gam(a){return new A.bn(a,this.gq(a),A.b6(a).i("bn<l.E>"))},
h(a){return A.dn(a,"[","]")}}
A.aB.prototype={
gq(a){return this.a},
h(a){return A.ds(this)}}
A.c7.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.r(a)
s=r.a+=s
r.a=s+": "
s=A.r(b)
r.a+=s},
$S:15}
A.aH.prototype={
h(a){return A.dn(this,"{","}")}}
A.aV.prototype={}
A.bg.prototype={
A(a,b){if(b==null)return!1
return b instanceof A.bg&&this.a===b.a},
gk(a){return B.a.gk(this.a)},
h(a){var s,r,q,p,o=this.a,n=B.a.F(o,36e8)
o%=36e8
s=B.a.F(o,6e7)
o%=6e7
r=s<10?"0":""
q=B.a.F(o,1e6)
p=q<10?"0":""
return""+n+":"+r+s+":"+p+q+"."+B.E.bH(B.a.h(o%1e6),6,"0")}}
A.cE.prototype={
h(a){return this.a7()}}
A.j.prototype={
gS(){return A.fj(this)}}
A.bb.prototype={
h(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.c1(s)
return"Assertion failed"}}
A.I.prototype={}
A.D.prototype={
ga9(){return"Invalid argument"+(!this.a?"(s)":"")},
ga8(){return""},
h(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.ga9()+q+o
if(!s.a)return n
return n+s.ga8()+": "+A.c1(s.gal())},
gal(){return this.b}}
A.ae.prototype={
gal(){return this.b},
ga9(){return"RangeError"},
ga8(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.r(q):""
else if(q==null)s=": Not greater than or equal to "+A.r(r)
else if(q>r)s=": Not in inclusive range "+A.r(r)+".."+A.r(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.r(r)
return s}}
A.bi.prototype={
gal(){return this.b},
ga9(){return"RangeError"},
ga8(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gq(a){return this.f}}
A.aK.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.bD.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.ag.prototype={
h(a){return"Bad state: "+this.a}}
A.bd.prototype={
h(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.c1(s)+"."}}
A.by.prototype={
h(a){return"Out of Memory"},
gS(){return null},
$ij:1}
A.aI.prototype={
h(a){return"Stack Overflow"},
gS(){return null},
$ij:1}
A.cF.prototype={
h(a){return"Exception: "+this.a}}
A.q.prototype={
gk(a){return A.e.prototype.gk.call(this,0)},
h(a){return"null"}}
A.e.prototype={$ie:1,
A(a,b){return this===b},
gk(a){return A.ad(this)},
h(a){return"Instance of '"+A.ca(this)+"'"},
gn(a){return A.hO(this)},
toString(){return this.h(this)}}
A.bT.prototype={
h(a){return""},
$iB:1}
A.bC.prototype={
gq(a){return this.a.length},
h(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.cU.prototype={
aT(a){if(a<=0||a>4294967296)throw A.c(A.fk("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
A.P.prototype={
gk(a){var s=this.a,r=this.b
return A.c9(new A.x(s,r).$s,s,r,B.e)},
A(a,b){var s,r,q,p
if(b==null)return!1
if(b instanceof A.P){s=b.a
r=b.b
q=this.a
p=this.b
p=A.c9(new A.x(s,r).$s,s,r,B.e)===A.c9(new A.x(q,p).$s,q,p,B.e)
s=p}else s=!1
return s},
h(a){var s=this
return"("+s.a+" "+s.b+") => '"+s.c+"' "+s.d}}
A.R.prototype={}
A.aa.prototype={
h(a){var s=this
return"               row: "+s.a+"\n            column: "+s.b+"\n         character: '"+s.c+"'\n    characterColor: "+s.d+"\n\n          pixelRow: "+s.e+"\n       pixelColumn: "+s.f+"\n         pixelIsOn: "+s.r+"\n    "}}
A.ac.prototype={
sa_(a){var s,r,q,p=this
if(a<0){s=p.d=a
for(r=p.b,q=p.a;s<0;){s+=r
p.d=s
p.c=B.a.l(p.c-1,q)}}else{s=p.b
p.c=B.a.l(p.c+B.a.E(a,s),p.a)
p.d=B.a.l(a,s)}},
gu(){return this.c*this.b+this.d},
su(a){var s=this,r=s.b
s.c=B.a.l(B.a.E(a,r),s.a)
s.d=B.a.l(a,r)}}
A.bB.prototype={
b6(a,b,c,d,e,f,g,h){var s,r=this,q=self.document
q.onfocus=A.b3(new A.cc(r))
q.onblur=A.b3(new A.cd(r))
q=r.w
q.tabIndex=-1
q.style.display="block"
q.style.outline="none"
s=q.getContext("2d")
if(s==null)s=t.m.a(s)
s.imageSmoothingEnabled=!1
q.onfocus=A.b3(new A.ce(r))
q.onblur=A.b3(new A.cf(r))
b.style.display="flex"
b.style.alignItems="flex-start"
b.style.padding="0"
b.style.margin="0"
b.style.width="fit-content"
b.style.height="fit-content"
b.style.background="gray"
b.appendChild(q)
r.G(0)},
Z(a,b){return new A.x(B.a.l(a,this.b),B.a.l(b,this.c))},
a2(){var s=this.x,r=s.getContext("2d")
if(r==null)r=t.m.a(r)
r.save()
r.beginPath()
r.clearRect(0,0,s.width,s.height)
r.restore()
return r},
a5(){var s=this.w.getContext("2d")
if(s==null)s=t.m.a(s)
s.save()
s.beginPath()
s.drawImage(this.x,0,0)
s.restore()
return s},
I(a,b,c,d){var s,r,q,p,o,n,m=this,l=a<0||a>=m.b||b<0||b>=m.c
if(l)return
s=m.Z(a,b)
a=s.a
b=s.b
r=A.du(b)
q=r.a
p=B.a.R(1,r.b)
l=m.y
if(!(a>=0&&a<l.length))return A.b(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.b(l,q)
o=l[q]
l.$flags&2&&A.bZ(l)
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
J(a,b,c,d,e){var s,r,q,p,o,n,m=this,l=a<0||a>=m.b||b<0||b>=m.c
if(l)return
s=m.Z(a,b)
a=s.a
b=s.b
r=A.du(b)
q=r.a
p=B.a.R(1,r.b)
l=m.y
if(!(a>=0&&a<l.length))return A.b(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.b(l,q)
o=l[q]
l.$flags&2&&A.bZ(l)
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
aW(a,b){var s,r,q,p,o=this.Z(b,a)
b=o.a
s=A.du(o.b)
r=s.a
q=B.a.R(1,s.b)
p=this.y
if(!(b>=0&&b<p.length))return A.b(p,b)
p=p[b]
if(!(r>=0&&r<p.length))return A.b(p,r)
return(p[r]&q)>>>0>0},
aQ(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=this
if(e==null)e=k.c-c
if(b==null)b=k.b-d
k.a2()
if(c===0&&d===0&&e===k.c&&b===k.b){for(s=k.y,r=s.length,q=0;q<r;++q)for(p=0;o=s[q],p<o.length;++p){o.$flags&2&&A.bZ(o)
o[p]=0}s=k.x
r=s.getContext("2d")
if(r==null)r=t.m.a(r)
r.save()
r.fillStyle=k.r
r.fillRect(0,0,s.width,s.height)
r.restore()}else{s=k.b
d=B.a.l(d,s)
r=k.c
c=B.a.l(c,r)
o=Math.abs(b)
n=Math.min(d+o,s)
m=Math.min(c+o,r)
for(o=k.x,q=d;q<n;++q){l=B.a.l(q,s)
for(p=c;p<m;++p)k.I(l,B.a.l(p,r),o,!1)}}k.a5()},
G(a){return this.aQ(0,null,0,0,null)},
bp(a,b,c,d,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.a2()
s=e.Z(a,b)
a=s.a
b=s.b
r=B.a.bt(1,a0)-1
for(q=a0-1,p=t.t,o=e.x,n=0;n<8;++n){m=c[n]
l=m&r
m=A.a([],p)
for(k=a+n,j=0;j<a0;++j){i=e.aW(b+j,k)?1:0
m.push(B.a.R(i,q-j))}h=B.b.by(m,0,new A.cb())
switch(a1){case B.q:for(j=0;j<a0;++j){m=b+j
if((B.a.C(l,q-j)&1)>0)e.J(k,m,d,o,!1)
else e.I(k,m,o,!1)}break
case B.dM:for(j=0;j<a0;++j){m=b+j
if((B.a.C(l,q-j)&1)>0)e.I(k,m,o,!1)
else e.J(k,m,d,o,!1)}break
case B.dO:for(j=0;j<a0;++j){g=q-j
if((B.a.C(l,g)&1)>0&&(B.a.b3(h,g)&1)===0)e.J(k,b+j,d,o,!1)}break
case B.dN:for(j=0;j<a0;++j)if((B.a.C(l,q-j)&1)>0)e.J(k,b+j,d,o,!1)
break
case B.dP:for(f=l&h,j=0;j<a0;++j)if((B.a.C(f,q-j)&1)>0)e.J(k,b+j,d,o,!1)
break
case B.dQ:for(f=l&h,j=0;j<a0;++j)if((B.a.C(f,q-j)&1)>0)e.I(k,b+j,o,!1)
break
case B.dR:for(f=l&h,j=0;j<a0;++j)if((B.a.C(f,q-j)&1)===0)e.I(k,b+j,o,!1)
break
case B.dS:for(f=l&h,j=0;j<a0;++j){m=b+j
if((B.a.C(f,q-j)&1)===0)e.I(k,m,o,!1)
else e.J(k,m,d,o,!1)}break}}e.a5()},
aX(a,b,c){this.bp(c.a,c.b,b,a,8,B.q,!0,!1,!1)},
b2(a){var s,r,q,p,o,n,m,l,k=this,j=k.b
a=B.a.l(a,j)
for(s=j-a,r=k.y,q=r.length,p=0;p<s;++p){if(!(p<q))return A.b(r,p)
o=p+a
n=0
for(;m=r[p],n<m.length;++n){if(!(o<q))return A.b(r,o)
l=r[o]
if(!(n<l.length))return A.b(l,n)
l=l[n]
m.$flags&2&&A.bZ(m)
m[n]=l}}for(;p<j;++p){if(!(p<q))return A.b(r,p)
n=0
for(;o=r[p],n<o.length;++n){o.$flags&2&&A.bZ(o)
o[n]=0}}k.a2()
j=k.x
r=j.getContext("2d")
if(r==null)r=t.m.a(r)
r.save()
r.beginPath()
q=k.e
r.drawImage(k.w,0,-a*q)
r.fillStyle=k.r
r.fillRect(0,s*q,j.width,a*q)
r.restore()
k.a5()},
P(){var s=this.w
s.style.opacity="1.0"
s.focus()},
N(){var s=this.w
s.style.opacity="0.5"
s.blur()}}
A.cc.prototype={
$0(){this.a.z=!0},
$S:1}
A.cd.prototype={
$0(){this.a.z=!1},
$S:1}
A.ce.prototype={
$0(){this.a.P()},
$S:1}
A.cf.prototype={
$0(){this.a.N()},
$S:1}
A.cb.prototype={
$2(a,b){return(a|b)>>>0},
$S:16}
A.E.prototype={
a7(){return"Mode."+this.b}}
A.af.prototype={
a7(){return"State."+this.b}}
A.aJ.prototype={
b7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,a0){var s=this,r=new A.cu(),q=s.f
q.tabIndex=-1
q.onfocus=A.b3(new A.cn(s))
q.onblur=A.b3(new A.co(s))
q.onkeydown=A.dC(new A.cp(s,l,r,new A.ct(s)))
q.onclick=A.dC(new A.cq(s,new A.cv(s),o))
r=A.dC(new A.cr(s,m,r))
q.onkeyup=r
A.fr(new A.bg(3e5),new A.cs(s))
s.N()
s.G(0)},
gah(){var s=this.w
s===$&&A.p()
return s.gah()},
gaf(){var s=this.w
s===$&&A.p()
return s.gaf()},
Y(a,b){return new A.x(B.a.l(a,this.a),B.a.l(b,this.b))},
aG(){var s=this,r=s.x
s.CW.D(0,new A.P(r.c,r.d," ","white"))
s.m()
s.cy=!1},
m(){var s,r,q,p,o,n,m,l,k,j,i,h=this
for(s=h.CW,r=A.fA(s,s.r,s.$ti.c),q=h.w,p=h.cx,o=8+h.c,n=r.$ti.c;r.K();){m=r.d
if(m==null)m=n.a(m)
l=m.a
k=m.b
if(p.ag(m.c)){j=p.t(0,m.c)
j.toString
i=j}else i=$.eI()
q===$&&A.p()
q.aX(m.d,i,new A.x(l*o,k*8))}if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.aH()}},
ar(a,b){var s,r=this.Y(b,a)
b=r.a
a=r.b
s=this.ch
if(!(b>=0&&b<s.length))return A.b(s,b)
s=s[b]
if(!(a>=0&&a<s.length))return A.b(s,a)
return s[a].c},
p(a,b,c){var s,r=this.Y(c,b)
c=r.a
b=r.b
s=this.ch
if(!(c>=0&&c<s.length))return A.b(s,c)
s=s[c]
if(!(b>=0&&b<s.length))return A.b(s,b)
s=s[b]
s.c=a
this.CW.D(0,s)},
aS(){var s,r=this.x
r.sa_(0)
s=r.c
if(s===this.a-1)this.av()
else r.c=B.a.l(s+1,r.a)},
av(){var s,r,q,p,o,n,m,l,k=this
for(s=k.a-1,r=k.b,q=k.ch,p=0;p<s;p=o)for(o=p+1,n=0;n<r;++n){m=q.length
if(!(p<m))return A.b(q,p)
l=q[p]
if(!(n<l.length))return A.b(l,n)
l=l[n]
if(!(o<m))return A.b(q,o)
m=q[o]
if(!(n<m.length))return A.b(m,n)
m=m[n]
l.c=m.c
l.d=m.d}for(n=0;n<r;++n){if(!(s>=0&&s<q.length))return A.b(q,s)
m=q[s]
if(!(n<m.length))return A.b(m,n)
m=m[n]
m.c=" "
m.d="white"}s=k.w
s===$&&A.p()
s.b2(8+k.c)},
a0(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0==null?f.x.c:a0,d=f.Y(e,b==null?f.x.d:b)
e=f.x
s=e.a
e.c=B.a.l(d.a,s)
e.sa_(d.b)
for(r=a.split(""),q=r.length,p=f.ch,o=f.CW,n=f.a-1,m=f.b-1,l=0;l<q;++l){k=r[l]
j=e.c
i=e.d
if(!(j>=0&&j<p.length))return A.b(p,j)
h=p[j]
if(!(i>=0&&i<h.length))return A.b(h,i)
g=h[i]
g.c=k
g.d="white"
o.D(0,g)
if(j===n&&i===m){f.av()
e.c=B.a.l(e.c-1,s)}e.sa_(e.d+1)}f.m()
if(c)f.aS()},
bG(a,b){return this.a0(a,null,!0,b)},
bF(a){return this.a0(a,null,!0,null)},
L(a,b,c){return this.a0(a,b,!0,c)},
aV(a,b){return this.a0(a,null,b,null)},
G(a){var s,r,q,p,o=this,n=o.b,m=o.a
for(s=o.ch,r=0;r<m;++r)for(q=0;q<n;++q){if(!(r<s.length))return A.b(s,r)
p=s[r]
if(!(q<p.length))return A.b(p,q)
p=p[q]
p.c=" "
p.d="white"}s=o.w
s===$&&A.p()
p=8+o.c
s.aQ(0,m*p,0,0*p,n*8)
p=o.x
p.c=0%p.a
p.sa_(0)},
P(){return this.gah().$0()},
N(){return this.gaf().$0()}}
A.cv.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.w
i===$&&A.p()
s=J.dS(a.offsetX)
r=Math.max(Math.min(B.a.E(J.dS(a.offsetY)-1,i.e),i.b-1),0)
q=Math.max(Math.min(B.a.E(s-1,i.d),i.c-1),0)
p=B.a.E(r,8+j.c)
o=B.a.F(q,8)
n=j.ar(o,p)
m=j.Y(p,o)
l=m.a
k=m.b
j=j.ch
if(!(l>=0&&l<j.length))return A.b(j,l)
j=j[l]
if(!(k>=0&&k<j.length))return A.b(j,k)
return new A.aa(p,o,n,j[k].d,r,q,i.aW(q,r))},
$S:17}
A.cu.prototype={
$1(a){var s=a.keyCode
return new A.R(s)},
$S:18}
A.ct.prototype={
$0(){var s,r,q,p,o,n=this.a,m=n.a,l=n.b,k=new A.ac(m,l)
k.su(n.y.gu())
s=A.a([],t.s)
r=n.z
q=r.b
while(p=k.c,o=k.d,p*l+o<r.c*q+r.d){s.push(n.ar(o,p))
p=k.c*l+k.d+1
k.c=B.a.l(B.a.E(p,l),m)
k.d=B.a.l(p,l)}return B.b.an(s,"")},
$S:19}
A.cn.prototype={
$0(){var s=this.a.w
s===$&&A.p()
s.P()},
$S:1}
A.co.prototype={
$0(){var s=this.a.w
s===$&&A.p()
s.N()},
$S:1}
A.cp.prototype={
$1(a){var s,r,q,p
a.preventDefault()
s=this.a
switch(s.ay){case B.d:break
case B.dT:r=s.at
if(r.d!=null){r.D(0,this.c.$1(a))
s.ay=B.d}break
case B.t:s.aG()
$label0$1:{q=a.keyCode
if(13===q){r=s.as
if(r.d!=null){r.D(0,J.eX(this.d.$0()))
s.aS()
s.ay=B.d}break $label0$1}if(8===q){r=s.x
if(r.gu()>s.y.gu()){r.su(r.gu()-1)
s.aV(" ",!1)
r.su(r.gu()-1)}break $label0$1}p=a.key
if(p.length===1&&s.x.gu()<s.z.gu())s.aV(p,!1)}break
case B.f:break}},
$S:3}
A.cq.prototype={
$1(a){var s
a.preventDefault()
s=this.a
if(s.ay===B.f&&s.ax.d!=null){s.ax.D(0,this.b.$1(a))
s.ay=B.d}},
$S:3}
A.cr.prototype={
$1(a){a.preventDefault()
this.b.$2(this.a,this.c.$1(a))},
$S:3}
A.cs.prototype={
$1(a){var s,r,q,p=this.a,o=p.w
o===$&&A.p()
if(o.z&&J.ao(self.document.activeElement,o.w)&&p.ay===B.t)if(p.cy)p.aG()
else{s=p.x
r=s.c
s=s.d
q=$.eH()
o.aX("white",q,new A.x(r*(8+p.c),s*8))
p.cy=!0}},
$S:20}
A.ar.prototype={}
A.c2.prototype={
G(a){var s,r,q,p,o,n
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.dP)(s),++q){p=s[q]
for(o=0;o<B.b.gj(s).length;++o){if(!(o<p.length))return A.b(p,o)
n=p[o]
n.c=n.b=n.a=!1}}},
bl(a,b){var s,r,q,p,o,n,m
for(s=this.a,r=-1;r<=1;++r)for(q=r===0,p=a+r,o=-1;o<=1;++o){n=b+o
if(q&&o===0||p<0||p>=s.length||n<0||n>=B.b.gj(s).length)continue
if(!(p>=0&&p<s.length))return A.b(s,p)
m=s[p]
if(!(n>=0&&n<m.length))return A.b(m,n)
if(!m[n].a)return!1}return!0},
a6(a,b){var s,r,q,p,o,n,m,l
for(s=this.a,r=0,q=-1;q<=1;++q)for(p=q===0,o=a+q,n=-1;n<=1;++n){m=b+n
if(p&&n===0||o<0||o>=s.length||m<0||m>=B.b.gj(s).length)continue
if(!(o>=0&&o<s.length))return A.b(s,o)
l=s[o]
if(!(m>=0&&m<l.length))return A.b(l,m)
r+=l[m].a?1:0}return r},
bB(a){var s,r,q,p,o=this.a,n=B.p.bJ(a*o.length*B.b.gj(o).length)
for(s=0;s<n;++s){for(r=0,q=0;!0;){p=$.eU()
r=p.aT(o.length)
q=p.aT(B.b.gj(o).length)
if(!(r>=0&&r<o.length))return A.b(o,r)
p=o[r]
if(!(q>=0&&q<p.length))return A.b(p,q)
if(!p[q].a&&!this.bl(r,q))break}if(!(r>=0&&r<o.length))return A.b(o,r)
p=o[r]
if(!(q>=0&&q<p.length))return A.b(p,q)
p[q].a=!0}},
aP(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a
if(!(a>=0&&a<g.length))return A.b(g,a)
s=g[a]
if(!(b>=0&&b<s.length))return A.b(s,b)
r=s[b]
if(r.a)return r.b=!0
q=A.a([new A.x(a,b)],t.w)
for(;s=q.length,s!==0;){if(0>=s)return A.b(q,-1)
p=q.pop()
o=p.a
n=p.b
if(!(o>=0&&o<g.length))return A.b(g,o)
s=g[o]
if(!(n>=0&&n<s.length))return A.b(s,n)
s[n].b=!0
if(this.a6(o,n)===0)for(m=-1;m<=1;++m)for(s=m===0,l=o+m,k=-1;k<=1;++k){j=n+k
if(s&&k===0||l<0||l>=g.length||j<0||j>=B.b.gj(g).length)continue
if(!(l>=0&&l<g.length))return A.b(g,l)
i=g[l]
if(!(j>=0&&j<i.length))return A.b(i,j)
h=i[j]
if(!h.b&&!h.a)q.push(new A.x(l,j))}}return!1},
bD(a,b){var s,r,q,p,o,n,m,l,k,j=this.a
if(!(a>=0&&a<j.length))return A.b(j,a)
s=j[a]
if(!(b>=0&&b<s.length))return A.b(s,b)
r=s[b]
if(r.b){for(q=0,p=-1;p<=1;++p)for(s=p===0,o=a+p,n=-1;n<=1;++n){m=b+n
if(s&&n===0||o<0||o>=j.length||m<0||m>=B.b.gj(j).length)continue
if(!(o>=0&&o<j.length))return A.b(j,o)
l=j[o]
if(!(m>=0&&m<l.length))return A.b(l,m)
if(l[m].c)++q}if(this.a6(a,b)===q)for(p=-1;p<=1;++p)for(s=p===0,o=a+p,n=-1;n<=1;++n){m=b+n
if(s&&n===0||o<0||o>=j.length||m<0||m>=B.b.gj(j).length)continue
if(!(o>=0&&o<j.length))return A.b(j,o)
l=j[o]
if(!(m>=0&&m<l.length))return A.b(l,m)
k=l[m]
if(!k.b&&!k.c)if(this.aP(o,m))return!0}return!1}else{r.c=!r.c
return!1}},
bA(){var s,r,q,p,o
for(s=this.a,r=0;r<s.length;++r)for(q=0;q<B.b.gj(s).length;++q){if(!(r<s.length))return A.b(s,r)
p=s[r]
if(!(q<p.length))return A.b(p,q)
o=p[q]
if(o.c!==o.a)return!1}return!0},
bf(a,b){var s,r,q=this.a
if(!(a<q.length))return A.b(q,a)
q=q[a]
if(!(b<q.length))return A.b(q,b)
s=q[b]
if(!s.b)return s.c?"\u263c":"\u25a0"
if(s.a)return"*"
r=this.a6(a,b)
if(r===0)return"."
return B.a.h(r)},
h(a){var s,r,q,p,o=t.s,n=A.a([],o)
for(s=this.a,r=0;r<s.length;++r){q=A.a([],o)
for(p=0;p<B.b.gj(s).length;++p)q.push(this.bf(r,p))
n.push(B.b.an(q,""))}return B.b.an(n,"\n")}}
A.a_.prototype={
a7(){return"GameState."+this.b}}
A.c3.prototype={
b0(){var s,r,q,p,o,n=this,m=" "
if(n.d!==B.i)return
if(n.a){for(s=n.c.a,r=0;r<s.length;++r){q=n.b
q===$&&A.p()
p=4+r
q.p(m,2,p)
q.m()
q.p(m,3+B.b.gj(s).length,p)
q.m()}for(o=0;o<B.b.gj(s).length;++o){q=n.b
q===$&&A.p()
p=3+o
q.p(m,p,3)
q.m()
q.p(m,p,4+s.length)
q.m()}q=n.b
q===$&&A.p()
q.p(m,2,3)
q.m()
q.p(m,3+B.b.gj(s).length,3)
q.m()
q.p(m,2,4+s.length)
q.m()
p=s.length
q.p(m,3+B.b.gj(s).length,4+p)
q.m()
q.L("Select",3,2)}else{for(s=n.c.a,r=0;r<s.length;++r){q=n.b
q===$&&A.p()
p=4+r
q.p("\u2502",2,p)
q.m()
q.p("\u2502",3+B.b.gj(s).length,p)
q.m()}for(o=0;o<B.b.gj(s).length;++o){q=n.b
q===$&&A.p()
p=3+o
q.p("\u2500",p,3)
q.m()
q.p("\u2500",p,4+s.length)
q.m()}q=n.b
q===$&&A.p()
q.p("\u250c",2,3)
q.m()
q.p("\u2510",3+B.b.gj(s).length,3)
q.m()
q.p("\u2514",2,4+s.length)
q.m()
p=s.length
q.p("\u2518",3+B.b.gj(s).length,4+p)
q.m()
q.L("Mark  ",3,2)}n.a=!n.a},
b5(){var s=self.document.querySelector("#mine")
if(s==null)s=t.m.a(s)
s=A.fq(41,s,0,25,new A.c4(this))
s.P()
this.b!==$&&A.i1()
this.b=s},
aw(){var s,r,q,p,o,n,m,l,k,j=this.c,i=j.h(0).split("\n")
for(j=j.a,s=0;s<i.length;++s)for(r=s+4,q=0;q<B.b.gj(j).length;++q){p=i[s]
if(!(q<p.length))return A.b(p,q)
o=p[q]
p=this.b
p===$&&A.p()
n=q+3
p.p(o,n,r)
p.m()
m=B.dK.t(0,o)
m.toString
l=r%p.a
n%=p.b
k=p.ch
if(!(l<k.length))return A.b(k,l)
l=k[l]
if(!(n<l.length))return A.b(l,n)
n=l[n]
n.d=m
p.CW.D(0,n)
p.m()}},
H(){var s=0,r=A.hl(t.n),q=this,p,o,n,m,l,k,j,i
var $async$H=A.hy(function(a,b){if(a===1)return A.fW(b,r)
while(true)switch(s){case 0:p=q.c,o=p.a
case 2:if(!!0){s=3
break}case 4:switch(q.d){case B.h:s=6
break
case B.m:s=7
break
case B.i:s=8
break
case B.n:s=9
break
case B.o:s=10
break
default:s=5
break}break
case 6:n=q.b
n===$&&A.p()
n.G(0)
n.bG(" ",2)
for(m='  _____ _                               \n |     |_|___ ___ ___ _ _ _ ___ ___ ___ \n | | | | |   | -_|_ -| | | | -_| -_| . |\n |_|_|_|_|_|_|___|___|_____|___|___|  _|\n                                   |_| \n\n  Controls:\n\n    SPACE\n\n      Toggle between "select" (no\n      border) and "mark" (border)\n      mode.\n      \n    CLICK CELL\n\n      Select or mark cells.\n           \n  Click anywhere to begin!\n'.split("\n"),l=m.length,k=0;k<l;++k)n.bF(m[k])
if(n.ay!==B.d)A.b8(A.bh("Terminal already awaiting input."))
n.ay=B.f
n=n.ax
s=11
return A.d4(new A.A(n,A.a4(n).i("A<1>")).gj(0),$async$H)
case 11:q.d=B.m
s=5
break
case 7:n=q.b
n===$&&A.p()
n.G(0)
p.G(0)
p.bB(0.1)
q.aw()
q.a=!0
q.d=B.i
q.b0()
s=5
break
case 8:n=q.b
n===$&&A.p()
if(n.ay!==B.d)A.b8(A.bh("Terminal already awaiting input."))
n.ay=B.f
n=n.ax
s=12
return A.d4(new A.A(n,A.a4(n).i("A<1>")).gj(0),$async$H)
case 12:j=b
n=j.a-4
m=j.b-3
if(n>=0&&n<o.length&&m>=0&&m<B.b.gj(o).length){i=q.a?p.bD(n,m):p.aP(n,m)
q.aw()
if(i)q.d=B.o
if(p.bA())q.d=B.n}s=5
break
case 9:n=q.b
n===$&&A.p()
n.L("Congratutations! You win!",8,1)
n.L("Click to continue.",11,23)
if(n.ay!==B.d)A.b8(A.bh("Terminal already awaiting input."))
n.ay=B.f
n=n.ax
s=13
return A.d4(new A.A(n,A.a4(n).i("A<1>")).gj(0),$async$H)
case 13:q.d=B.h
s=5
break
case 10:n=q.b
n===$&&A.p()
n.L("Boom! You lose!",13,1)
n.L("Click to continue.",11,23)
if(n.ay!==B.d)A.b8(A.bh("Terminal already awaiting input."))
n.ay=B.f
n=n.ax
s=14
return A.d4(new A.A(n,A.a4(n).i("A<1>")).gj(0),$async$H)
case 14:q.d=B.h
s=5
break
case 5:s=2
break
case 3:return A.fX(null,r)}})
return A.fY($async$H,r)}}
A.c4.prototype={
$2(a,b){if(b.a===32)this.a.b0()},
$S:21};(function aliases(){var s=J.S.prototype
s.b4=s.h})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._static_2,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u
s(A,"hz","fw",4)
s(A,"hA","fx",4)
s(A,"hB","fy",4)
r(A,"ex","ht",0)
s(A,"hC","hn",5)
q(A,"hD","ho",6)
p(A.m.prototype,"gaE","B",6)
o(A.aO.prototype,"gbn","bo",0)
var n
o(n=A.bB.prototype,"gah","P",0)
o(n,"gaf","N",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.e,null)
q(A.e,[A.dp,J.bj,J.ba,A.j,A.Z,A.cg,A.bn,A.at,A.aj,A.bf,A.cx,A.c8,A.as,A.aW,A.aB,A.c6,A.y,A.bP,A.bU,A.aY,A.bG,A.Y,A.ah,A.bJ,A.bI,A.U,A.m,A.bH,A.bN,A.bQ,A.aO,A.bS,A.d3,A.aH,A.cW,A.ai,A.l,A.bg,A.cE,A.by,A.aI,A.cF,A.q,A.bT,A.bC,A.cU,A.P,A.R,A.aa,A.ac,A.bB,A.aJ,A.ar,A.c2,A.c3])
q(J.bj,[J.bk,J.av,J.ax,J.aw,J.ay,J.a8,J.a0])
q(J.ax,[J.S,J.o,A.bo,A.aE])
q(J.S,[J.bz,J.a1,J.Q])
r(J.c5,J.o)
q(J.a8,[J.au,J.bl])
q(A.j,[A.a9,A.I,A.bm,A.bE,A.bL,A.bA,A.bO,A.bb,A.D,A.aK,A.bD,A.ag,A.bd])
q(A.Z,[A.c_,A.c0,A.cm,A.dc,A.de,A.cB,A.cA,A.d5,A.cL,A.cS,A.ck,A.cj,A.d_,A.cv,A.cu,A.cp,A.cq,A.cr,A.cs])
q(A.c_,[A.dh,A.cC,A.cD,A.d1,A.d0,A.cG,A.cO,A.cN,A.cK,A.cI,A.cH,A.cR,A.cQ,A.cP,A.cl,A.ci,A.cX,A.d7,A.d8,A.cZ,A.cc,A.cd,A.ce,A.cf,A.ct,A.cn,A.co])
r(A.bR,A.aj)
r(A.x,A.bR)
r(A.a7,A.bf)
r(A.aG,A.I)
q(A.cm,[A.ch,A.aq])
r(A.aA,A.aB)
r(A.az,A.aA)
q(A.c0,[A.dd,A.d6,A.d9,A.cM,A.cT,A.c7,A.cb,A.c4])
q(A.aE,[A.bp,A.ab])
q(A.ab,[A.aQ,A.aS])
r(A.aR,A.aQ)
r(A.aC,A.aR)
r(A.aT,A.aS)
r(A.aD,A.aT)
q(A.aC,[A.bq,A.br])
q(A.aD,[A.bs,A.bt,A.bu,A.bv,A.bw,A.aF,A.bx])
r(A.aZ,A.bO)
r(A.aX,A.ah)
r(A.aN,A.aX)
r(A.A,A.aN)
r(A.bK,A.bJ)
r(A.aM,A.bK)
r(A.aL,A.bI)
r(A.bM,A.bN)
r(A.cY,A.d3)
r(A.aV,A.aH)
r(A.aP,A.aV)
q(A.D,[A.ae,A.bi])
q(A.cE,[A.E,A.af,A.a_])
s(A.aQ,A.l)
s(A.aR,A.at)
s(A.aS,A.l)
s(A.aT,A.at)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{d:"int",t:"double",hZ:"num",z:"String",hE:"bool",q:"Null",h:"List",e:"Object",i8:"Map"},mangledNames:{},types:["~()","q()","q(@)","q(k)","~(~())","~(@)","~(e,B)","q(e,B)","H<~>()","@(@)","@(@,z)","@(z)","q(~())","q(@,B)","~(d,@)","~(e?,e?)","d(d,d)","aa(k)","R(k)","z()","~(cw)","~(aJ,R)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.x&&a.b(c.a)&&b.b(c.b)}}
A.fR(v.typeUniverse,JSON.parse('{"bz":"S","a1":"S","Q":"S","bk":{"f":[]},"av":{"q":[],"f":[]},"ax":{"k":[]},"S":{"k":[]},"o":{"h":["1"],"k":[]},"c5":{"o":["1"],"h":["1"],"k":[]},"a8":{"t":[]},"au":{"t":[],"d":[],"f":[]},"bl":{"t":[],"f":[]},"a0":{"z":[],"f":[]},"a9":{"j":[]},"aG":{"I":[],"j":[]},"bm":{"j":[]},"bE":{"j":[]},"aW":{"B":[]},"bL":{"j":[]},"bA":{"j":[]},"aA":{"aB":["1","2"]},"az":{"aA":["1","2"],"aB":["1","2"]},"bo":{"k":[],"f":[]},"aE":{"k":[]},"bp":{"k":[],"f":[]},"ab":{"w":["1"],"k":[]},"aC":{"l":["t"],"h":["t"],"w":["t"],"k":[]},"aD":{"l":["d"],"h":["d"],"w":["d"],"k":[]},"bq":{"l":["t"],"h":["t"],"w":["t"],"k":[],"f":[],"l.E":"t"},"br":{"l":["t"],"h":["t"],"w":["t"],"k":[],"f":[],"l.E":"t"},"bs":{"l":["d"],"h":["d"],"w":["d"],"k":[],"f":[],"l.E":"d"},"bt":{"l":["d"],"h":["d"],"w":["d"],"k":[],"f":[],"l.E":"d"},"bu":{"l":["d"],"h":["d"],"w":["d"],"k":[],"f":[],"l.E":"d"},"bv":{"l":["d"],"h":["d"],"w":["d"],"k":[],"f":[],"l.E":"d"},"bw":{"cz":[],"l":["d"],"h":["d"],"w":["d"],"k":[],"f":[],"l.E":"d"},"aF":{"l":["d"],"h":["d"],"w":["d"],"k":[],"f":[],"l.E":"d"},"bx":{"l":["d"],"h":["d"],"w":["d"],"k":[],"f":[],"l.E":"d"},"bO":{"j":[]},"aZ":{"I":[],"j":[]},"aY":{"cw":[]},"Y":{"j":[]},"A":{"ah":["1"]},"aL":{"bI":["1"]},"m":{"H":["1"]},"aN":{"ah":["1"]},"aX":{"ah":["1"]},"aP":{"aH":["1"]},"aV":{"aH":["1"]},"bb":{"j":[]},"I":{"j":[]},"D":{"j":[]},"ae":{"j":[]},"bi":{"j":[]},"aK":{"j":[]},"bD":{"j":[]},"ag":{"j":[]},"bd":{"j":[]},"by":{"j":[]},"aI":{"j":[]},"bT":{"B":[]},"fd":{"h":["d"]},"fu":{"h":["d"]},"ft":{"h":["d"]},"fb":{"h":["d"]},"fs":{"h":["d"]},"fc":{"h":["d"]},"cz":{"h":["d"]},"f7":{"h":["t"]},"f8":{"h":["t"]}}'))
A.fQ(v.typeUniverse,JSON.parse('{"at":1,"bf":2,"ab":1,"aN":1,"bK":1,"bJ":1,"aX":1,"bN":1,"bM":1,"bQ":1,"aO":1,"bS":1,"aV":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.db
return{o:s("P"),Q:s("j"),Z:s("i6"),U:s("o<P>"),q:s("o<ar>"),I:s("o<h<P>>"),G:s("o<h<ar>>"),f:s("o<e>"),w:s("o<+(d,d)>"),s:s("o<z>"),x:s("o<cz>"),b:s("o<@>"),t:s("o<d>"),T:s("av"),m:s("k"),g:s("Q"),p:s("w<@>"),V:s("R"),j:s("h<@>"),r:s("aa"),P:s("q"),K:s("e"),L:s("i9"),F:s("+()"),l:s("B"),N:s("z"),E:s("cw"),R:s("f"),c:s("I"),B:s("a1"),d:s("m<@>"),a:s("m<d>"),D:s("m<~>"),y:s("hE"),i:s("t"),z:s("@"),v:s("@(e)"),C:s("@(e,B)"),S:s("d"),A:s("0&*"),_:s("e*"),O:s("H<q>?"),X:s("e?"),H:s("hZ"),n:s("~"),u:s("~(e)"),k:s("~(e,B)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.D=J.bj.prototype
B.b=J.o.prototype
B.a=J.au.prototype
B.p=J.a8.prototype
B.E=J.a0.prototype
B.F=J.Q.prototype
B.G=J.ax.prototype
B.r=J.bz.prototype
B.j=J.a1.prototype
B.k=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.u=function() {
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
B.z=function(getTagFallback) {
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
B.v=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.y=function(hooks) {
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
B.x=function(hooks) {
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
B.w=function(hooks) {
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

B.A=new A.by()
B.e=new A.cg()
B.B=new A.cU()
B.c=new A.cY()
B.C=new A.bT()
B.h=new A.a_("title")
B.m=new A.a_("setup")
B.i=new A.a_("play")
B.n=new A.a_("win")
B.o=new A.a_("lose")
B.dK=new A.a7([".","rgb(150, 150, 150)","1","rgb(236, 192, 109)","2","rgb(234, 118, 67)","3","rgb(235, 108, 108)","4","rgb(229, 63, 63)","5","rgb(107, 193, 235)","6","rgb(23, 128, 234)","7","rgb(193, 106, 236)","8","rgb(130, 22, 236)","*","orangered","\u263c","rgb(150, 150, 150)","\u25a0","rgb(200,200,200)"],A.db("a7<z,z>"))
B.d5=A.a(s([126,129,165,129,189,153,129,126]),t.t)
B.a7=A.a(s([126,255,219,255,195,231,255,126]),t.t)
B.dC=A.a(s([108,254,254,254,124,56,16,0]),t.t)
B.c2=A.a(s([16,56,124,254,124,56,16,0]),t.t)
B.b0=A.a(s([56,124,56,254,254,124,56,124]),t.t)
B.bc=A.a(s([16,16,56,124,254,124,56,124]),t.t)
B.av=A.a(s([0,0,24,60,60,24,0,0]),t.t)
B.ay=A.a(s([255,255,231,195,195,231,255,255]),t.t)
B.aK=A.a(s([0,60,102,66,66,102,60,0]),t.t)
B.cQ=A.a(s([255,195,153,189,189,153,195,255]),t.t)
B.dB=A.a(s([15,7,15,125,204,204,204,120]),t.t)
B.dA=A.a(s([60,102,102,102,60,24,126,24]),t.t)
B.cN=A.a(s([63,51,63,48,48,112,240,224]),t.t)
B.R=A.a(s([127,99,127,99,99,103,230,192]),t.t)
B.W=A.a(s([153,90,60,231,231,60,90,153]),t.t)
B.as=A.a(s([128,224,248,254,248,224,128,0]),t.t)
B.by=A.a(s([2,14,62,254,62,14,2,0]),t.t)
B.cg=A.a(s([24,60,126,24,24,126,60,24]),t.t)
B.cc=A.a(s([102,102,102,102,102,0,102,0]),t.t)
B.cm=A.a(s([127,219,219,123,27,27,27,0]),t.t)
B.cn=A.a(s([62,99,56,108,108,56,204,120]),t.t)
B.bM=A.a(s([0,0,0,0,126,126,126,0]),t.t)
B.bP=A.a(s([24,60,126,24,126,60,24,255]),t.t)
B.M=A.a(s([24,60,126,24,24,24,24,0]),t.t)
B.da=A.a(s([24,24,24,24,126,60,24,0]),t.t)
B.d3=A.a(s([0,24,12,254,12,24,0,0]),t.t)
B.ap=A.a(s([0,48,96,254,96,48,0,0]),t.t)
B.bU=A.a(s([0,0,192,192,192,254,0,0]),t.t)
B.br=A.a(s([0,36,102,255,102,36,0,0]),t.t)
B.a5=A.a(s([0,24,60,126,255,255,0,0]),t.t)
B.bQ=A.a(s([0,255,255,126,60,24,0,0]),t.t)
B.aW=A.a(s([0,0,0,0,0,0,0,0]),t.t)
B.bz=A.a(s([48,120,120,48,48,0,48,0]),t.t)
B.U=A.a(s([108,108,108,0,0,0,0,0]),t.t)
B.aj=A.a(s([108,108,254,108,254,108,108,0]),t.t)
B.bY=A.a(s([48,124,192,120,12,248,48,0]),t.t)
B.L=A.a(s([0,198,204,24,48,102,198,0]),t.t)
B.cz=A.a(s([56,108,56,118,220,204,118,0]),t.t)
B.ai=A.a(s([96,96,192,0,0,0,0,0]),t.t)
B.Q=A.a(s([24,48,96,96,96,48,24,0]),t.t)
B.bv=A.a(s([96,48,24,24,24,48,96,0]),t.t)
B.cq=A.a(s([0,102,60,255,60,102,0,0]),t.t)
B.dJ=A.a(s([0,48,48,252,48,48,0,0]),t.t)
B.c_=A.a(s([0,0,0,0,0,48,48,96]),t.t)
B.bq=A.a(s([0,0,0,252,0,0,0,0]),t.t)
B.ce=A.a(s([0,0,0,0,0,48,48,0]),t.t)
B.a0=A.a(s([6,12,24,48,96,192,128,0]),t.t)
B.b3=A.a(s([124,198,206,222,246,230,124,0]),t.t)
B.ch=A.a(s([48,112,48,48,48,48,252,0]),t.t)
B.bW=A.a(s([120,204,12,56,96,204,252,0]),t.t)
B.dE=A.a(s([120,204,12,56,12,204,120,0]),t.t)
B.bx=A.a(s([28,60,108,204,254,12,30,0]),t.t)
B.d4=A.a(s([252,192,248,12,12,204,120,0]),t.t)
B.dl=A.a(s([56,96,192,248,204,204,120,0]),t.t)
B.bX=A.a(s([252,204,12,24,48,48,48,0]),t.t)
B.ct=A.a(s([120,204,204,120,204,204,120,0]),t.t)
B.ba=A.a(s([120,204,204,124,12,24,112,0]),t.t)
B.cY=A.a(s([0,48,48,0,0,48,48,0]),t.t)
B.aN=A.a(s([0,48,48,0,0,48,48,96]),t.t)
B.bw=A.a(s([24,48,96,192,96,48,24,0]),t.t)
B.bl=A.a(s([0,0,252,0,0,252,0,0]),t.t)
B.ax=A.a(s([96,48,24,12,24,48,96,0]),t.t)
B.an=A.a(s([120,204,12,24,48,0,48,0]),t.t)
B.dh=A.a(s([124,198,222,222,222,192,120,0]),t.t)
B.c8=A.a(s([48,120,204,204,252,204,204,0]),t.t)
B.aH=A.a(s([252,102,102,124,102,102,252,0]),t.t)
B.a9=A.a(s([60,102,192,192,192,102,60,0]),t.t)
B.a1=A.a(s([248,108,102,102,102,108,248,0]),t.t)
B.af=A.a(s([254,98,104,120,104,98,254,0]),t.t)
B.ck=A.a(s([254,98,104,120,104,96,240,0]),t.t)
B.al=A.a(s([60,102,192,192,206,102,62,0]),t.t)
B.ao=A.a(s([204,204,204,252,204,204,204,0]),t.t)
B.cI=A.a(s([120,48,48,48,48,48,120,0]),t.t)
B.bK=A.a(s([30,12,12,12,204,204,120,0]),t.t)
B.bC=A.a(s([230,102,108,120,108,102,230,0]),t.t)
B.bB=A.a(s([240,96,96,96,98,102,254,0]),t.t)
B.aI=A.a(s([198,238,254,254,214,198,198,0]),t.t)
B.T=A.a(s([198,230,246,222,206,198,198,0]),t.t)
B.cS=A.a(s([56,108,198,198,198,108,56,0]),t.t)
B.bg=A.a(s([252,102,102,124,96,96,240,0]),t.t)
B.cC=A.a(s([120,204,204,204,220,120,28,0]),t.t)
B.K=A.a(s([252,102,102,124,108,102,230,0]),t.t)
B.ac=A.a(s([120,204,224,112,28,204,120,0]),t.t)
B.dv=A.a(s([252,180,48,48,48,48,120,0]),t.t)
B.aF=A.a(s([204,204,204,204,204,204,252,0]),t.t)
B.Y=A.a(s([204,204,204,204,204,120,48,0]),t.t)
B.cL=A.a(s([198,198,198,214,254,238,198,0]),t.t)
B.cF=A.a(s([198,198,108,56,56,108,198,0]),t.t)
B.a_=A.a(s([204,204,204,120,48,48,120,0]),t.t)
B.O=A.a(s([254,198,140,24,50,102,254,0]),t.t)
B.bs=A.a(s([120,96,96,96,96,96,120,0]),t.t)
B.cx=A.a(s([192,96,48,24,12,6,2,0]),t.t)
B.bu=A.a(s([120,24,24,24,24,24,120,0]),t.t)
B.dk=A.a(s([16,56,108,198,0,0,0,0]),t.t)
B.J=A.a(s([0,0,0,0,0,0,0,255]),t.t)
B.aG=A.a(s([48,48,24,0,0,0,0,0]),t.t)
B.db=A.a(s([0,0,120,12,124,204,118,0]),t.t)
B.cb=A.a(s([224,96,96,124,102,102,220,0]),t.t)
B.cE=A.a(s([0,0,120,204,192,204,120,0]),t.t)
B.b1=A.a(s([28,12,12,124,204,204,118,0]),t.t)
B.dn=A.a(s([0,0,120,204,252,192,120,0]),t.t)
B.aL=A.a(s([56,108,96,240,96,96,240,0]),t.t)
B.cB=A.a(s([0,0,118,204,204,124,12,248]),t.t)
B.aw=A.a(s([224,96,108,118,102,102,230,0]),t.t)
B.cr=A.a(s([48,0,112,48,48,48,120,0]),t.t)
B.bF=A.a(s([12,0,12,12,12,204,204,120]),t.t)
B.b8=A.a(s([224,96,102,108,120,108,230,0]),t.t)
B.bH=A.a(s([112,48,48,48,48,48,120,0]),t.t)
B.bp=A.a(s([0,0,204,254,254,214,198,0]),t.t)
B.bI=A.a(s([0,0,248,204,204,204,204,0]),t.t)
B.bb=A.a(s([0,0,120,204,204,204,120,0]),t.t)
B.ds=A.a(s([0,0,220,102,102,124,96,240]),t.t)
B.dp=A.a(s([0,0,118,204,204,124,12,30]),t.t)
B.bm=A.a(s([0,0,220,118,102,96,240,0]),t.t)
B.cV=A.a(s([0,0,124,192,120,12,248,0]),t.t)
B.cO=A.a(s([16,48,124,48,48,52,24,0]),t.t)
B.c5=A.a(s([0,0,204,204,204,204,118,0]),t.t)
B.b_=A.a(s([0,0,204,204,204,120,48,0]),t.t)
B.bf=A.a(s([0,0,198,214,254,254,108,0]),t.t)
B.bD=A.a(s([0,0,198,108,56,108,198,0]),t.t)
B.dy=A.a(s([0,0,204,204,204,124,12,248]),t.t)
B.d9=A.a(s([0,0,252,152,48,100,252,0]),t.t)
B.b5=A.a(s([28,48,48,224,48,48,28,0]),t.t)
B.cU=A.a(s([24,24,24,0,24,24,24,0]),t.t)
B.aA=A.a(s([224,48,48,28,48,48,224,0]),t.t)
B.dI=A.a(s([118,220,0,0,0,0,0,0]),t.t)
B.aZ=A.a(s([0,16,56,108,198,198,254,0]),t.t)
B.ar=A.a(s([120,204,192,204,120,24,12,120]),t.t)
B.d7=A.a(s([0,204,0,204,204,204,126,0]),t.t)
B.dx=A.a(s([28,0,120,204,252,192,120,0]),t.t)
B.bZ=A.a(s([126,195,60,6,62,102,63,0]),t.t)
B.ae=A.a(s([204,0,120,12,124,204,126,0]),t.t)
B.b2=A.a(s([224,0,120,12,124,204,126,0]),t.t)
B.a4=A.a(s([48,48,120,12,124,204,126,0]),t.t)
B.bi=A.a(s([0,0,120,192,192,120,12,56]),t.t)
B.dg=A.a(s([126,195,60,102,126,96,60,0]),t.t)
B.aJ=A.a(s([204,0,120,204,252,192,120,0]),t.t)
B.cW=A.a(s([224,0,120,204,252,192,120,0]),t.t)
B.d8=A.a(s([204,0,112,48,48,48,120,0]),t.t)
B.cM=A.a(s([124,198,56,24,24,24,60,0]),t.t)
B.aV=A.a(s([224,0,112,48,48,48,120,0]),t.t)
B.dD=A.a(s([198,56,108,198,254,198,198,0]),t.t)
B.cT=A.a(s([48,48,0,120,204,252,204,0]),t.t)
B.bA=A.a(s([28,0,252,96,120,96,252,0]),t.t)
B.dw=A.a(s([0,0,127,12,127,204,127,0]),t.t)
B.aO=A.a(s([62,108,204,254,204,204,206,0]),t.t)
B.dq=A.a(s([120,204,0,120,204,204,120,0]),t.t)
B.aa=A.a(s([0,204,0,120,204,204,120,0]),t.t)
B.dF=A.a(s([0,224,0,120,204,204,120,0]),t.t)
B.aM=A.a(s([120,204,0,204,204,204,126,0]),t.t)
B.cP=A.a(s([0,224,0,204,204,204,126,0]),t.t)
B.au=A.a(s([0,204,0,204,204,124,12,248]),t.t)
B.ag=A.a(s([195,24,60,102,102,60,24,0]),t.t)
B.d1=A.a(s([204,0,204,204,204,204,120,0]),t.t)
B.V=A.a(s([24,24,126,192,192,126,24,24]),t.t)
B.aD=A.a(s([56,108,100,240,96,230,252,0]),t.t)
B.aX=A.a(s([204,204,120,252,48,252,48,48]),t.t)
B.dc=A.a(s([248,204,204,250,198,207,198,199]),t.t)
B.bL=A.a(s([14,27,24,60,24,24,216,112]),t.t)
B.az=A.a(s([28,0,120,12,124,204,126,0]),t.t)
B.ca=A.a(s([56,0,112,48,48,48,120,0]),t.t)
B.aC=A.a(s([0,28,0,120,204,204,120,0]),t.t)
B.cu=A.a(s([0,28,0,204,204,204,126,0]),t.t)
B.aS=A.a(s([0,248,0,248,204,204,204,0]),t.t)
B.cK=A.a(s([252,0,204,236,252,220,204,0]),t.t)
B.ab=A.a(s([60,108,108,62,0,126,0,0]),t.t)
B.c7=A.a(s([56,108,108,56,0,124,0,0]),t.t)
B.d2=A.a(s([48,0,48,96,192,204,120,0]),t.t)
B.aU=A.a(s([0,0,0,252,192,192,0,0]),t.t)
B.aB=A.a(s([0,0,0,252,12,12,0,0]),t.t)
B.cX=A.a(s([195,198,204,222,51,102,204,15]),t.t)
B.at=A.a(s([195,198,204,219,55,111,207,3]),t.t)
B.bO=A.a(s([24,24,0,24,24,24,24,0]),t.t)
B.bN=A.a(s([0,51,102,204,102,51,0,0]),t.t)
B.b7=A.a(s([0,204,102,51,102,204,0,0]),t.t)
B.cw=A.a(s([34,136,34,136,34,136,34,136]),t.t)
B.dr=A.a(s([85,170,85,170,85,170,85,170]),t.t)
B.bG=A.a(s([219,119,219,238,219,119,219,238]),t.t)
B.aY=A.a(s([24,24,24,24,24,24,24,24]),t.t)
B.aT=A.a(s([24,24,24,24,248,24,24,24]),t.t)
B.bV=A.a(s([24,24,248,24,248,24,24,24]),t.t)
B.dH=A.a(s([54,54,54,54,246,54,54,54]),t.t)
B.ci=A.a(s([0,0,0,0,254,54,54,54]),t.t)
B.aP=A.a(s([0,0,248,24,248,24,24,24]),t.t)
B.a8=A.a(s([54,54,246,6,246,54,54,54]),t.t)
B.co=A.a(s([54,54,54,54,54,54,54,54]),t.t)
B.c6=A.a(s([0,0,254,6,246,54,54,54]),t.t)
B.cs=A.a(s([54,54,246,6,254,0,0,0]),t.t)
B.am=A.a(s([54,54,54,54,254,0,0,0]),t.t)
B.Z=A.a(s([24,24,248,24,248,0,0,0]),t.t)
B.a3=A.a(s([0,0,0,0,248,24,24,24]),t.t)
B.X=A.a(s([24,24,24,24,31,0,0,0]),t.t)
B.bT=A.a(s([24,24,24,24,255,0,0,0]),t.t)
B.bk=A.a(s([0,0,0,0,255,24,24,24]),t.t)
B.d0=A.a(s([24,24,24,24,31,24,24,24]),t.t)
B.bR=A.a(s([0,0,0,0,255,0,0,0]),t.t)
B.cp=A.a(s([24,24,24,24,255,24,24,24]),t.t)
B.cA=A.a(s([24,24,31,24,31,24,24,24]),t.t)
B.b9=A.a(s([54,54,54,54,55,54,54,54]),t.t)
B.dm=A.a(s([54,54,55,48,63,0,0,0]),t.t)
B.df=A.a(s([0,0,63,48,55,54,54,54]),t.t)
B.bE=A.a(s([54,54,247,0,255,0,0,0]),t.t)
B.bt=A.a(s([0,0,255,0,247,54,54,54]),t.t)
B.aR=A.a(s([54,54,55,48,55,54,54,54]),t.t)
B.aQ=A.a(s([0,0,255,0,255,0,0,0]),t.t)
B.dz=A.a(s([54,54,247,0,247,54,54,54]),t.t)
B.cG=A.a(s([24,24,255,0,255,0,0,0]),t.t)
B.H=A.a(s([54,54,54,54,255,0,0,0]),t.t)
B.dt=A.a(s([0,0,255,0,255,24,24,24]),t.t)
B.c0=A.a(s([0,0,0,0,255,54,54,54]),t.t)
B.cj=A.a(s([54,54,54,54,63,0,0,0]),t.t)
B.bo=A.a(s([24,24,31,24,31,0,0,0]),t.t)
B.cd=A.a(s([0,0,31,24,31,24,24,24]),t.t)
B.cD=A.a(s([0,0,0,0,63,54,54,54]),t.t)
B.cJ=A.a(s([54,54,54,54,255,54,54,54]),t.t)
B.bJ=A.a(s([24,24,255,24,255,24,24,24]),t.t)
B.dd=A.a(s([24,24,24,24,248,0,0,0]),t.t)
B.b4=A.a(s([0,0,0,0,31,24,24,24]),t.t)
B.c1=A.a(s([255,255,255,255,255,255,255,255]),t.t)
B.c4=A.a(s([0,0,0,0,255,255,255,255]),t.t)
B.be=A.a(s([240,240,240,240,240,240,240,240]),t.t)
B.cl=A.a(s([15,15,15,15,15,15,15,15]),t.t)
B.d_=A.a(s([255,255,255,255,0,0,0,0]),t.t)
B.dG=A.a(s([0,0,118,220,200,220,118,0]),t.t)
B.di=A.a(s([0,120,204,248,204,248,192,192]),t.t)
B.ak=A.a(s([0,252,204,192,192,192,192,0]),t.t)
B.c3=A.a(s([0,254,108,108,108,108,108,0]),t.t)
B.de=A.a(s([252,204,96,48,96,204,252,0]),t.t)
B.bh=A.a(s([0,0,126,216,216,216,112,0]),t.t)
B.bn=A.a(s([0,102,102,102,102,124,96,192]),t.t)
B.cy=A.a(s([0,118,220,24,24,24,24,0]),t.t)
B.ad=A.a(s([252,48,120,204,204,120,48,252]),t.t)
B.aE=A.a(s([56,108,198,254,198,108,56,0]),t.t)
B.ah=A.a(s([56,108,198,198,108,108,238,0]),t.t)
B.I=A.a(s([28,48,24,124,204,204,120,0]),t.t)
B.du=A.a(s([0,0,126,219,219,126,0,0]),t.t)
B.bj=A.a(s([6,12,126,219,219,126,96,192]),t.t)
B.a6=A.a(s([56,96,192,248,192,96,56,0]),t.t)
B.cf=A.a(s([120,204,204,204,204,204,204,0]),t.t)
B.cH=A.a(s([0,252,0,252,0,252,0,0]),t.t)
B.a2=A.a(s([48,48,252,48,48,0,252,0]),t.t)
B.b6=A.a(s([96,48,24,48,96,0,252,0]),t.t)
B.cR=A.a(s([24,48,96,48,24,0,252,0]),t.t)
B.bd=A.a(s([14,27,27,24,24,24,24,24]),t.t)
B.d6=A.a(s([24,24,24,24,24,216,216,112]),t.t)
B.c9=A.a(s([48,48,0,252,0,48,48,0]),t.t)
B.N=A.a(s([0,118,220,0,118,220,0,0]),t.t)
B.cv=A.a(s([56,108,108,56,0,0,0,0]),t.t)
B.P=A.a(s([0,0,0,24,24,0,0,0]),t.t)
B.dj=A.a(s([0,0,0,0,24,0,0,0]),t.t)
B.S=A.a(s([15,12,12,12,236,108,60,28]),t.t)
B.bS=A.a(s([120,108,108,108,108,0,0,0]),t.t)
B.aq=A.a(s([112,24,48,96,120,0,0,0]),t.t)
B.cZ=A.a(s([0,0,60,60,60,60,0,0]),t.t)
B.dL=new A.a7(["\u263a",B.d5,"\u263b",B.a7,"\u2665",B.dC,"\u2666",B.c2,"\u2663",B.b0,"\u2660",B.bc,"\u2022",B.av,"\u25d8",B.ay,"\u25cb",B.aK,"\u25d9",B.cQ,"\u2642",B.dB,"\u2640",B.dA,"\u266a",B.cN,"\u266b",B.R,"\u263c",B.W,"\u25ba",B.as,"\u25c4",B.by,"\u2195",B.cg,"\u203c",B.cc,"\xb6",B.cm,"\xa7",B.cn,"\u25ac",B.bM,"\u21a8",B.bP,"\u2191",B.M,"\u2193",B.da,"\u2192",B.d3,"\u2190",B.ap,"\u221f",B.bU,"\u2194",B.br,"\u25b2",B.a5,"\u25bc",B.bQ," ",B.aW,"!",B.bz,'"',B.U,"#",B.aj,"$",B.bY,"%",B.L,"&",B.cz,"'",B.ai,"(",B.Q,")",B.bv,"*",B.cq,"+",B.dJ,",",B.c_,"-",B.bq,".",B.ce,"/",B.a0,"0",B.b3,"1",B.ch,"2",B.bW,"3",B.dE,"4",B.bx,"5",B.d4,"6",B.dl,"7",B.bX,"8",B.ct,"9",B.ba,":",B.cY,";",B.aN,"<",B.bw,"=",B.bl,">",B.ax,"?",B.an,"@",B.dh,"A",B.c8,"B",B.aH,"C",B.a9,"D",B.a1,"E",B.af,"F",B.ck,"G",B.al,"H",B.ao,"I",B.cI,"J",B.bK,"K",B.bC,"L",B.bB,"M",B.aI,"N",B.T,"O",B.cS,"P",B.bg,"Q",B.cC,"R",B.K,"S",B.ac,"T",B.dv,"U",B.aF,"V",B.Y,"W",B.cL,"X",B.cF,"Y",B.a_,"Z",B.O,"[",B.bs,"\\",B.cx,"]",B.bu,"^",B.dk,"_",B.J,"`",B.aG,"a",B.db,"b",B.cb,"c",B.cE,"d",B.b1,"e",B.dn,"f",B.aL,"g",B.cB,"h",B.aw,"i",B.cr,"j",B.bF,"k",B.b8,"l",B.bH,"m",B.bp,"n",B.bI,"o",B.bb,"p",B.ds,"q",B.dp,"r",B.bm,"s",B.cV,"t",B.cO,"u",B.c5,"v",B.b_,"w",B.bf,"x",B.bD,"y",B.dy,"z",B.d9,"{",B.b5,"|",B.cU,"}",B.aA,"~",B.dI,"\u2302",B.aZ,"\xc7",B.ar,"\xfc",B.d7,"\xe9",B.dx,"\xe2",B.bZ,"\xe4",B.ae,"\xe0",B.b2,"\xe5",B.a4,"\xe7",B.bi,"\xea",B.dg,"\xeb",B.aJ,"\xe8",B.cW,"\xef",B.d8,"\xee",B.cM,"\xec",B.aV,"\xc4",B.dD,"\xc5",B.cT,"\xc9",B.bA,"\xe6",B.dw,"\xc6",B.aO,"\xf4",B.dq,"\xf6",B.aa,"\xf2",B.dF,"\xfb",B.aM,"\xf9",B.cP,"\xff",B.au,"\xd6",B.ag,"\xdc",B.d1,"\xa2",B.V,"\xa3",B.aD,"\xa5",B.aX,"\u20a7",B.dc,"\u0192",B.bL,"\xe1",B.az,"\xed",B.ca,"\xf3",B.aC,"\xfa",B.cu,"\xf1",B.aS,"\xd1",B.cK,"\xaa",B.ab,"\xba",B.c7,"\xbf",B.d2,"\u2310",B.aU,"\xac",B.aB,"\xbd",B.cX,"\xbc",B.at,"\xa1",B.bO,"\xab",B.bN,"\xbb",B.b7,"\u2591",B.cw,"\u2592",B.dr,"\u2593",B.bG,"\u2502",B.aY,"\u2524",B.aT,"\u2561",B.bV,"\u2562",B.dH,"\u2556",B.ci,"\u2555",B.aP,"\u2563",B.a8,"\u2551",B.co,"\u2557",B.c6,"\u255d",B.cs,"\u255c",B.am,"\u255b",B.Z,"\u2510",B.a3,"\u2514",B.X,"\u2534",B.bT,"\u252c",B.bk,"\u251c",B.d0,"\u2500",B.bR,"\u253c",B.cp,"\u255e",B.cA,"\u255f",B.b9,"\u255a",B.dm,"\u2554",B.df,"\u2569",B.bE,"\u2566",B.bt,"\u2560",B.aR,"\u2550",B.aQ,"\u256c",B.dz,"\u2567",B.cG,"\u2568",B.H,"\u2564",B.dt,"\u2565",B.c0,"\u2559",B.cj,"\u2558",B.bo,"\u2552",B.cd,"\u2553",B.cD,"\u256b",B.cJ,"\u256a",B.bJ,"\u2518",B.dd,"\u250c",B.b4,"\u2588",B.c1,"\u2584",B.c4,"\u258c",B.be,"\u2590",B.cl,"\u2580",B.d_,"\u03b1",B.dG,"\xdf",B.di,"\u0393",B.ak,"\u03c0",B.c3,"\u03a3",B.de,"\u03c3",B.bh,"\xb5",B.bn,"\u03c4",B.cy,"\u03a6",B.ad,"\u0398",B.aE,"\u03a9",B.ah,"\u03b4",B.I,"\u221e",B.du,"\u03c6",B.bj,"\u03b5",B.a6,"\u2229",B.cf,"\u2261",B.cH,"\xb1",B.a2,"\u2265",B.b6,"\u2264",B.cR,"\u2320",B.bd,"\u2321",B.d6,"\xf7",B.c9,"\u2248",B.N,"\xb0",B.cv,"\u2219",B.P,"\xb7",B.dj,"\u221a",B.S,"\u207f",B.bS,"\xb2",B.aq,"\u25a0",B.cZ],A.db("a7<z,h<d>>"))
B.q=new A.E("replace")
B.dM=new A.E("inverse")
B.dN=new A.E("over")
B.dO=new A.E("under")
B.dP=new A.E("stain")
B.dQ=new A.E("delete")
B.dR=new A.E("maskDestination")
B.dS=new A.E("maskSource")
B.d=new A.af("ready")
B.dT=new A.af("awaitingKey")
B.t=new A.af("awaitingString")
B.f=new A.af("awaitingMouseClick")
B.dU=A.C("i3")
B.dV=A.C("i4")
B.dW=A.C("f7")
B.dX=A.C("f8")
B.dY=A.C("fb")
B.dZ=A.C("fc")
B.e_=A.C("fd")
B.e0=A.C("e")
B.e1=A.C("fs")
B.e2=A.C("cz")
B.e3=A.C("ft")
B.e4=A.C("fu")})();(function staticFields(){$.cV=null
$.N=A.a([],t.f)
$.e0=null
$.dW=null
$.dV=null
$.eB=null
$.ew=null
$.eF=null
$.da=null
$.df=null
$.dL=null
$.aU=A.a([],A.db("o<h<e>?>"))
$.ak=null
$.b4=null
$.b5=null
$.dF=!1
$.i=B.c})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"i5","dj",()=>A.hN("_$dart_dartClosure"))
s($,"iH","eT",()=>B.c.aY(new A.dh()))
s($,"id","eJ",()=>A.J(A.cy({
toString:function(){return"$receiver$"}})))
s($,"ie","eK",()=>A.J(A.cy({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"ig","eL",()=>A.J(A.cy(null)))
s($,"ih","eM",()=>A.J(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"ik","eP",()=>A.J(A.cy(void 0)))
s($,"il","eQ",()=>A.J(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"ij","eO",()=>A.J(A.e5(null)))
s($,"ii","eN",()=>A.J(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"io","eS",()=>A.J(A.e5(void 0)))
s($,"im","eR",()=>A.J(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"ip","dQ",()=>A.fv())
s($,"i7","dk",()=>$.eT())
s($,"iF","dl",()=>A.dN(B.e0))
s($,"ic","eI",()=>A.dr(8,0,t.S))
s($,"ib","eH",()=>A.dr(8,255,t.S))
s($,"iI","eU",()=>B.B)})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.bo,ArrayBufferView:A.aE,DataView:A.bp,Float32Array:A.bq,Float64Array:A.br,Int16Array:A.bs,Int32Array:A.bt,Int8Array:A.bu,Uint16Array:A.bv,Uint32Array:A.bw,Uint8ClampedArray:A.aF,CanvasPixelArray:A.aF,Uint8Array:A.bx})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.ab.$nativeSuperclassTag="ArrayBufferView"
A.aQ.$nativeSuperclassTag="ArrayBufferView"
A.aR.$nativeSuperclassTag="ArrayBufferView"
A.aC.$nativeSuperclassTag="ArrayBufferView"
A.aS.$nativeSuperclassTag="ArrayBufferView"
A.aT.$nativeSuperclassTag="ArrayBufferView"
A.aD.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.hX
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=mine.js.map
