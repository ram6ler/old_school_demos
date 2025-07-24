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
return a?function(c){if(s===null)s=A.dE(b)
return new s(c,this)}:function(){if(s===null)s=A.dE(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.dE(a).prototype
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
dI(a,b,c,d){return{i:a,p:b,e:c,x:d}},
dG(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.dH==null){A.hU()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.c(A.e0("Return interceptor for "+A.p(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.cL
if(o==null)o=$.cL=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.hY(a)
if(p!=null)return p
if(typeof a=="function")return B.z
s=Object.getPrototypeOf(a)
if(s==null)return B.n
if(s===Object.prototype)return B.n
if(typeof q=="function"){o=$.cL
if(o==null)o=$.cL=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.j,enumerable:false,writable:true,configurable:true})
return B.j}return B.j},
dU(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
f8(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.dU(r))break;++b}return b},
f9(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.d(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.dU(q))break}return b},
a1(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.as.prototype
return J.bh.prototype}if(typeof a=="string")return J.U.prototype
if(a==null)return J.at.prototype
if(typeof a=="boolean")return J.bg.prototype
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.M.prototype
if(typeof a=="symbol")return J.aw.prototype
if(typeof a=="bigint")return J.au.prototype
return a}if(a instanceof A.e)return a
return J.dG(a)},
ew(a){if(typeof a=="string")return J.U.prototype
if(a==null)return a
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.M.prototype
if(typeof a=="symbol")return J.aw.prototype
if(typeof a=="bigint")return J.au.prototype
return a}if(a instanceof A.e)return a
return J.dG(a)},
hN(a){if(a==null)return a
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.M.prototype
if(typeof a=="symbol")return J.aw.prototype
if(typeof a=="bigint")return J.au.prototype
return a}if(a instanceof A.e)return a
return J.dG(a)},
hO(a){if(typeof a=="number")return J.a5.prototype
if(a==null)return a
if(!(a instanceof A.e))return J.W.prototype
return a},
hP(a){if(typeof a=="string")return J.U.prototype
if(a==null)return a
if(!(a instanceof A.e))return J.W.prototype
return a},
an(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.a1(a).t(a,b)},
F(a){return J.a1(a).gk(a)},
eR(a){return J.hN(a).gai(a)},
dL(a){return J.ew(a).gm(a)},
eS(a){return J.a1(a).gl(a)},
dM(a){return J.hO(a).bG(a)},
b6(a){return J.a1(a).h(a)},
eT(a){return J.hP(a).aW(a)},
bf:function bf(){},
bg:function bg(){},
at:function at(){},
av:function av(){},
N:function N(){},
bw:function bw(){},
W:function W(){},
M:function M(){},
au:function au(){},
aw:function aw(){},
o:function o(a){this.$ti=a},
bZ:function bZ(a){this.$ti=a},
b7:function b7(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
a5:function a5(){},
as:function as(){},
bh:function bh(){},
U:function U(){}},A={dk:function dk(){},
fb(a){return new A.ay("Field '"+a+"' has not been initialized.")},
O(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
dt(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
dD(a,b,c){return a},
ey(a){var s,r
for(s=$.K.length,r=0;r<s;++r)if(a===$.K[r])return!0
return!1},
ay:function ay(a){this.a=a},
dd:function dd(){},
c9:function c9(){},
bk:function bk(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ar:function ar(){},
eD(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
iq(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
p(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.b6(a)
return s},
aa(a){var s,r=$.dV
if(r==null)r=$.dV=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
c3(a){var s,r,q,p
if(a instanceof A.e)return A.w(A.b4(a),null)
s=J.a1(a)
if(s===B.x||s===B.A||t.A.b(a)){r=B.k(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.w(A.b4(a),null)},
dW(a){if(a==null||typeof a=="number"||A.dz(a))return J.b6(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.T)return a.h(0)
if(a instanceof A.ag)return a.aG(!0)
return"Instance of '"+A.c3(a)+"'"},
ff(a){var s=a.$thrownJsError
if(s==null)return null
return A.a2(s)},
fg(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.r(a,s)
a.$thrownJsError=s
s.stack=""}},
d(a,b){if(a==null)J.dL(a)
throw A.c(A.eu(a,b))},
eu(a,b){var s,r="index"
if(!A.ej(b))return new A.C(!0,b,r,null)
s=J.dL(a)
if(b<0||b>=s)return A.f4(b,s,a,r)
return new A.aF(null,null,!0,b,r,"Value not in range")},
dC(a){return new A.C(!0,a,null,null)},
c(a){return A.r(a,new Error())},
r(a,b){var s
if(a==null)a=new A.H()
b.dartException=a
s=A.i1
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
i1(){return J.b6(this.dartException)},
de(a,b){throw A.r(a,b==null?new Error():b)},
b5(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.de(A.h7(a,b,c),s)},
h7(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.aI("'"+s+"': Cannot "+o+" "+l+k+n)},
bT(a){throw A.c(A.a4(a))},
I(a){var s,r,q,p,o,n
a=A.i_(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.a([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.cq(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
cr(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
e_(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
dl(a,b){var s=b==null,r=s?null:b.method
return new A.bi(a,r,s?null:b.receiver)},
am(a){if(a==null)return new A.c1(a)
if(a instanceof A.aq)return A.R(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.R(a,a.dartException)
return A.hC(a)},
R(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
hC(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.a.bo(r,16)&8191)===10)switch(q){case 438:return A.R(a,A.dl(A.p(s)+" (Error "+q+")",null))
case 445:case 5007:A.p(s)
return A.R(a,new A.aE())}}if(a instanceof TypeError){p=$.eG()
o=$.eH()
n=$.eI()
m=$.eJ()
l=$.eM()
k=$.eN()
j=$.eL()
$.eK()
i=$.eP()
h=$.eO()
g=p.q(s)
if(g!=null)return A.R(a,A.dl(s,g))
else{g=o.q(s)
if(g!=null){g.method="call"
return A.R(a,A.dl(s,g))}else if(n.q(s)!=null||m.q(s)!=null||l.q(s)!=null||k.q(s)!=null||j.q(s)!=null||m.q(s)!=null||i.q(s)!=null||h.q(s)!=null)return A.R(a,new A.aE())}return A.R(a,new A.bB(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.aH()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.R(a,new A.C(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.aH()
return a},
a2(a){var s
if(a instanceof A.aq)return a.b
if(a==null)return new A.aU(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.aU(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
dJ(a){if(a==null)return J.F(a)
if(typeof a=="object")return A.aa(a)
return J.F(a)},
hJ(a){if(typeof a=="number")return B.y.gk(a)
if(a instanceof A.bP)return A.aa(a)
if(a instanceof A.ag)return a.gk(a)
return A.dJ(a)},
ev(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=a.length
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
k=n}j=b.af(q)
i=k[j]
if(i==null)k[j]=[b.R(q,p)]
else{r=b.ag(i,q)
if(r>=0)i[r].b=p
else i.push(b.R(q,p))}}}return b},
hg(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.c(A.dT("Unsupported number of arguments for wrapped closure"))},
bS(a,b){var s=a.$identity
if(!!s)return s
s=A.hK(a,b)
a.$identity=s
return s},
hK(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.hg)},
f_(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.ca().constructor.prototype):Object.create(new A.ap(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.dS(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.eW(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.dS(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
eW(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.c("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.eU)}throw A.c("Error in functionType of tearoff")},
eX(a,b,c,d){var s=A.dR
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
dS(a,b,c,d){if(c)return A.eZ(a,b,d)
return A.eX(b.length,d,a,b)},
eY(a,b,c,d){var s=A.dR,r=A.eV
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
eZ(a,b,c){var s,r
if($.dP==null)$.dP=A.dO("interceptor")
if($.dQ==null)$.dQ=A.dO("receiver")
s=b.length
r=A.eY(s,c,a,b)
return r},
dE(a){return A.f_(a)},
eU(a,b){return A.b0(v.typeUniverse,A.b4(a.a),b)},
dR(a){return a.a},
eV(a){return a.b},
dO(a){var s,r,q,p=new A.ap("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.c(A.ao("Field name "+a+" not found.",null))},
hQ(a){return v.getIsolateTag(a)},
hY(a){var s,r,q,p,o,n=$.ex.$1(a),m=$.d1[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.d5[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.eq.$2(a,n)
if(q!=null){m=$.d1[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.d5[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.dc(s)
$.d1[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.d5[n]=s
return s}if(p==="-"){o=A.dc(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.eA(a,s)
if(p==="*")throw A.c(A.e0(n))
if(v.leafTags[n]===true){o=A.dc(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.eA(a,s)},
eA(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.dI(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
dc(a){return J.dI(a,!1,null,!!a.$iv)},
hZ(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.dc(s)
else return J.dI(s,c,null,null)},
hU(){if(!0===$.dH)return
$.dH=!0
A.hV()},
hV(){var s,r,q,p,o,n,m,l
$.d1=Object.create(null)
$.d5=Object.create(null)
A.hT()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.eB.$1(o)
if(n!=null){m=A.hZ(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
hT(){var s,r,q,p,o,n,m=B.p()
m=A.ak(B.q,A.ak(B.r,A.ak(B.l,A.ak(B.l,A.ak(B.t,A.ak(B.u,A.ak(B.v(B.k),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.ex=new A.d2(p)
$.eq=new A.d3(o)
$.eB=new A.d4(n)},
ak(a,b){return a(b)||b},
hL(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
fa(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.c(new A.bX("Illegal RegExp pattern ("+String(o)+")",a))},
i_(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
A:function A(a,b){this.a=a
this.b=b},
bb:function bb(){},
bd:function bd(a,b){this.a=a
this.$ti=b},
cq:function cq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aE:function aE(){},
bi:function bi(a,b,c){this.a=a
this.b=b
this.c=c},
bB:function bB(a){this.a=a},
c1:function c1(a){this.a=a},
aq:function aq(a,b){this.a=a
this.b=b},
aU:function aU(a){this.a=a
this.b=null},
T:function T(){},
bU:function bU(){},
bV:function bV(){},
cf:function cf(){},
ca:function ca(){},
ap:function ap(a,b){this.a=a
this.b=b},
bx:function bx(a){this.a=a},
V:function V(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
c_:function c_(a,b){this.a=a
this.b=b
this.c=null},
bj:function bj(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
ax:function ax(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
d2:function d2(a){this.a=a},
d3:function d3(a){this.a=a},
d4:function d4(a){this.a=a},
ag:function ag(){},
bM:function bM(){},
bY:function bY(a,b){var _=this
_.a=a
_.b=b
_.e=_.c=null},
cN:function cN(a){this.b=a},
Z(a,b,c){if(a>>>0!==a||a>=c)throw A.c(A.eu(b,a))},
bl:function bl(){},
aC:function aC(){},
bm:function bm(){},
a8:function a8(){},
aA:function aA(){},
aB:function aB(){},
bn:function bn(){},
bo:function bo(){},
bp:function bp(){},
bq:function bq(){},
br:function br(){},
bs:function bs(){},
bt:function bt(){},
aD:function aD(){},
bu:function bu(){},
aO:function aO(){},
aP:function aP(){},
aQ:function aQ(){},
aR:function aR(){},
dq(a,b){var s=b.c
return s==null?b.c=A.aZ(a,"G",[b.x]):s},
dY(a){var s=a.w
if(s===6||s===7)return A.dY(a.x)
return s===11||s===12},
fi(a){return a.as},
dF(a){return A.cU(v.typeUniverse,a,!1)},
a_(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.a_(a1,s,a3,a4)
if(r===s)return a2
return A.ea(a1,r,!0)
case 7:s=a2.x
r=A.a_(a1,s,a3,a4)
if(r===s)return a2
return A.e9(a1,r,!0)
case 8:q=a2.y
p=A.aj(a1,q,a3,a4)
if(p===q)return a2
return A.aZ(a1,a2.x,p)
case 9:o=a2.x
n=A.a_(a1,o,a3,a4)
m=a2.y
l=A.aj(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.dv(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.aj(a1,j,a3,a4)
if(i===j)return a2
return A.eb(a1,k,i)
case 11:h=a2.x
g=A.a_(a1,h,a3,a4)
f=a2.y
e=A.hz(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.e8(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.aj(a1,d,a3,a4)
o=a2.x
n=A.a_(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.dw(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.c(A.b9("Attempted to substitute unexpected RTI kind "+a0))}},
aj(a,b,c,d){var s,r,q,p,o=b.length,n=A.cV(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.a_(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
hA(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.cV(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.a_(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
hz(a,b,c,d){var s,r=b.a,q=A.aj(a,r,c,d),p=b.b,o=A.aj(a,p,c,d),n=b.c,m=A.hA(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.bK()
s.a=q
s.b=o
s.c=m
return s},
a(a,b){a[v.arrayRti]=b
return a},
et(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.hS(s)
return a.$S()}return null},
hW(a,b){var s
if(A.dY(b))if(a instanceof A.T){s=A.et(a)
if(s!=null)return s}return A.b4(a)},
b4(a){if(a instanceof A.e)return A.bQ(a)
if(Array.isArray(a))return A.dx(a)
return A.dy(J.a1(a))},
dx(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
bQ(a){var s=a.$ti
return s!=null?s:A.dy(a)},
dy(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.he(a,s)},
he(a,b){var s=a instanceof A.T?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.fM(v.typeUniverse,s.name)
b.$ccache=r
return r},
hS(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.cU(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
hR(a){return A.a0(A.bQ(a))},
dB(a){var s
if(a instanceof A.ag)return A.hM(a.$r,a.az())
s=a instanceof A.T?A.et(a):null
if(s!=null)return s
if(t.R.b(a))return J.eS(a).a
if(Array.isArray(a))return A.dx(a)
return A.b4(a)},
a0(a){var s=a.r
return s==null?a.r=new A.bP(a):s},
hM(a,b){var s,r,q=b,p=q.length
if(p===0)return t.F
if(0>=p)return A.d(q,0)
s=A.b0(v.typeUniverse,A.dB(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.d(q,r)
s=A.ec(v.typeUniverse,s,A.dB(q[r]))}return A.b0(v.typeUniverse,s,a)},
B(a){return A.a0(A.cU(v.typeUniverse,a,!1))},
hd(a){var s,r,q,p,o=this
if(o===t.K)return A.J(o,a,A.hl)
if(A.a3(o))return A.J(o,a,A.hp)
s=o.w
if(s===6)return A.J(o,a,A.hb)
if(s===1)return A.J(o,a,A.ek)
if(s===7)return A.J(o,a,A.hh)
if(o===t.S)r=A.ej
else if(o===t.i||o===t.H)r=A.hk
else if(o===t.N)r=A.hn
else r=o===t.y?A.dz:null
if(r!=null)return A.J(o,a,r)
if(s===8){q=o.x
if(o.y.every(A.a3)){o.f="$i"+q
if(q==="h")return A.J(o,a,A.hj)
return A.J(o,a,A.ho)}}else if(s===10){p=A.hL(o.x,o.y)
return A.J(o,a,p==null?A.ek:p)}return A.J(o,a,A.h9)},
J(a,b,c){a.b=c
return a.b(b)},
hc(a){var s=this,r=A.h8
if(A.a3(s))r=A.fZ
else if(s===t.K)r=A.fW
else if(A.al(s))r=A.ha
if(s===t.S)r=A.fS
else if(s===t.B)r=A.fT
else if(s===t.N)r=A.fX
else if(s===t.x)r=A.fY
else if(s===t.y)r=A.fO
else if(s===t.u)r=A.fP
else if(s===t.H)r=A.fU
else if(s===t.J)r=A.fV
else if(s===t.i)r=A.fQ
else if(s===t.I)r=A.fR
s.a=r
return s.a(a)},
h9(a){var s=this
if(a==null)return A.al(s)
return A.hX(v.typeUniverse,A.hW(a,s),s)},
hb(a){if(a==null)return!0
return this.x.b(a)},
ho(a){var s,r=this
if(a==null)return A.al(r)
s=r.f
if(a instanceof A.e)return!!a[s]
return!!J.a1(a)[s]},
hj(a){var s,r=this
if(a==null)return A.al(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.e)return!!a[s]
return!!J.a1(a)[s]},
h8(a){var s=this
if(a==null){if(A.al(s))return a}else if(s.b(a))return a
throw A.r(A.ef(a,s),new Error())},
ha(a){var s=this
if(a==null||s.b(a))return a
throw A.r(A.ef(a,s),new Error())},
ef(a,b){return new A.aX("TypeError: "+A.e2(a,A.w(b,null)))},
e2(a,b){return A.bW(a)+": type '"+A.w(A.dB(a),null)+"' is not a subtype of type '"+b+"'"},
E(a,b){return new A.aX("TypeError: "+A.e2(a,b))},
hh(a){var s=this
return s.x.b(a)||A.dq(v.typeUniverse,s).b(a)},
hl(a){return a!=null},
fW(a){if(a!=null)return a
throw A.r(A.E(a,"Object"),new Error())},
hp(a){return!0},
fZ(a){return a},
ek(a){return!1},
dz(a){return!0===a||!1===a},
fO(a){if(!0===a)return!0
if(!1===a)return!1
throw A.r(A.E(a,"bool"),new Error())},
fP(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.r(A.E(a,"bool?"),new Error())},
fQ(a){if(typeof a=="number")return a
throw A.r(A.E(a,"double"),new Error())},
fR(a){if(typeof a=="number")return a
if(a==null)return a
throw A.r(A.E(a,"double?"),new Error())},
ej(a){return typeof a=="number"&&Math.floor(a)===a},
fS(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.r(A.E(a,"int"),new Error())},
fT(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.r(A.E(a,"int?"),new Error())},
hk(a){return typeof a=="number"},
fU(a){if(typeof a=="number")return a
throw A.r(A.E(a,"num"),new Error())},
fV(a){if(typeof a=="number")return a
if(a==null)return a
throw A.r(A.E(a,"num?"),new Error())},
hn(a){return typeof a=="string"},
fX(a){if(typeof a=="string")return a
throw A.r(A.E(a,"String"),new Error())},
fY(a){if(typeof a=="string")return a
if(a==null)return a
throw A.r(A.E(a,"String?"),new Error())},
en(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.w(a[q],b)
return s},
hu(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.en(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.w(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
eg(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.a([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)a4.push("T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.d(a4,l)
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
if(l===8){p=A.hB(a.x)
o=a.y
return o.length>0?p+("<"+A.en(o,b)+">"):p}if(l===10)return A.hu(a,b)
if(l===11)return A.eg(a,b,null)
if(l===12)return A.eg(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.d(b,n)
return b[n]}return"?"},
hB(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
fN(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
fM(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.cU(a,b,!1)
else if(typeof m=="number"){s=m
r=A.b_(a,5,"#")
q=A.cV(s)
for(p=0;p<s;++p)q[p]=r
o=A.aZ(a,b,q)
n[b]=o
return o}else return m},
fL(a,b){return A.ed(a.tR,b)},
fK(a,b){return A.ed(a.eT,b)},
cU(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.e6(A.e4(a,null,b,!1))
r.set(b,s)
return s},
b0(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.e6(A.e4(a,b,c,!0))
q.set(c,r)
return r},
ec(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.dv(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
Q(a,b){b.a=A.hc
b.b=A.hd
return b},
b_(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.y(null,null)
s.w=b
s.as=c
r=A.Q(a,s)
a.eC.set(c,r)
return r},
ea(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.fI(a,b,r,c)
a.eC.set(r,s)
return s},
fI(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.a3(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.al(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.y(null,null)
q.w=6
q.x=b
q.as=c
return A.Q(a,q)},
e9(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.fG(a,b,r,c)
a.eC.set(r,s)
return s},
fG(a,b,c,d){var s,r
if(d){s=b.w
if(A.a3(b)||b===t.K)return b
else if(s===1)return A.aZ(a,"G",[b])
else if(b===t.P||b===t.T)return t.O}r=new A.y(null,null)
r.w=7
r.x=b
r.as=c
return A.Q(a,r)},
fJ(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.y(null,null)
s.w=13
s.x=b
s.as=q
r=A.Q(a,s)
a.eC.set(q,r)
return r},
aY(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
fF(a){var s,r,q,p,o,n=a.length
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
q=A.Q(a,r)
a.eC.set(p,q)
return q},
dv(a,b,c){var s,r,q,p,o,n
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
n=A.Q(a,o)
a.eC.set(q,n)
return n},
eb(a,b,c){var s,r,q="+"+(b+"("+A.aY(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.y(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.Q(a,s)
a.eC.set(q,r)
return r},
e8(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.aY(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.aY(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.fF(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.y(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.Q(a,p)
a.eC.set(r,o)
return o},
dw(a,b,c,d){var s,r=b.as+("<"+A.aY(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.fH(a,b,c,r,d)
a.eC.set(r,s)
return s},
fH(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.cV(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.a_(a,b,r,0)
m=A.aj(a,c,r,0)
return A.dw(a,n,m,c!==m)}}l=new A.y(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.Q(a,l)},
e4(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
e6(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.fy(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.e5(a,r,l,k,!1)
else if(q===46)r=A.e5(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.Y(a.u,a.e,k.pop()))
break
case 94:k.push(A.fJ(a.u,k.pop()))
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
case 62:A.fA(a,k)
break
case 38:A.fz(a,k)
break
case 63:p=a.u
k.push(A.ea(p,A.Y(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.e9(p,A.Y(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.fx(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.e7(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.fC(a.u,a.e,o)
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
fy(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
e5(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.fN(s,o.x)[p]
if(n==null)A.de('No "'+p+'" in "'+A.fi(o)+'"')
d.push(A.b0(s,o,n))}else d.push(p)
return m},
fA(a,b){var s,r=a.u,q=A.e3(a,b),p=b.pop()
if(typeof p=="string")b.push(A.aZ(r,p,q))
else{s=A.Y(r,a.e,p)
switch(s.w){case 11:b.push(A.dw(r,s,q,a.n))
break
default:b.push(A.dv(r,s,q))
break}}},
fx(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.e3(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.Y(p,a.e,o)
q=new A.bK()
q.a=s
q.b=n
q.c=m
b.push(A.e8(p,r,q))
return
case-4:b.push(A.eb(p,b.pop(),s))
return
default:throw A.c(A.b9("Unexpected state under `()`: "+A.p(o)))}},
fz(a,b){var s=b.pop()
if(0===s){b.push(A.b_(a.u,1,"0&"))
return}if(1===s){b.push(A.b_(a.u,4,"1&"))
return}throw A.c(A.b9("Unexpected extended operation "+A.p(s)))},
e3(a,b){var s=b.splice(a.p)
A.e7(a.u,a.e,s)
a.p=b.pop()
return s},
Y(a,b,c){if(typeof c=="string")return A.aZ(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.fB(a,b,c)}else return c},
e7(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.Y(a,b,c[s])},
fC(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.Y(a,b,c[s])},
fB(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.c(A.b9("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.c(A.b9("Bad index "+c+" for "+b.h(0)))},
hX(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.n(a,b,null,c,null)
r.set(c,s)}return s},
n(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.a3(d))return!0
s=b.w
if(s===4)return!0
if(A.a3(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.n(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.n(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.n(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.n(a,b.x,c,d,e))return!1
return A.n(a,A.dq(a,b),c,d,e)}if(s===6)return A.n(a,p,c,d,e)&&A.n(a,b.x,c,d,e)
if(q===7){if(A.n(a,b,c,d.x,e))return!0
return A.n(a,b,c,A.dq(a,d),e)}if(q===6)return A.n(a,b,c,p,e)||A.n(a,b,c,d.x,e)
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
if(!A.n(a,j,c,i,e)||!A.n(a,i,e,j,c))return!1}return A.ei(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.ei(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.hi(a,b,c,d,e)}if(o&&q===10)return A.hm(a,b,c,d,e)
return!1},
ei(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.n(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.n(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.n(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.n(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.n(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
hi(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
for(;n!==m;){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.b0(a,b,r[o])
return A.ee(a,p,null,c,d.y,e)}return A.ee(a,b.y,null,c,d.y,e)},
ee(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.n(a,b[s],d,e[s],f))return!1
return!0},
hm(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.n(a,r[s],c,q[s],e))return!1
return!0},
al(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.a3(a))if(s!==6)r=s===7&&A.al(a.x)
return r},
a3(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
ed(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
cV(a){return a>0?new Array(a):v.typeUniverse.sEA},
y:function y(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
bK:function bK(){this.c=this.b=this.a=null},
bP:function bP(a){this.a=a},
bJ:function bJ(){},
aX:function aX(a){this.a=a},
fr(){var s,r,q
if(self.scheduleImmediate!=null)return A.hE()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.bS(new A.cv(s),1)).observe(r,{childList:true})
return new A.cu(s,r,q)}else if(self.setImmediate!=null)return A.hF()
return A.hG()},
fs(a){self.scheduleImmediate(A.bS(new A.cw(a),0))},
ft(a){self.setImmediate(A.bS(new A.cx(a),0))},
fu(a){A.fD(0,a)},
dZ(a,b){var s=B.a.A(a.a,1000)
return A.fE(s,b)},
fD(a,b){var s=new A.aW()
s.b2(a,b)
return s},
fE(a,b){var s=new A.aW()
s.b3(a,b)
return s},
hq(a){return new A.bC(new A.m($.i,a.i("m<0>")),a.i("bC<0>"))},
h2(a,b){a.$2(0,null)
b.b=!0
return b.a},
h_(a,b){A.h3(a,b)},
h1(a,b){var s,r=a==null?b.$ti.c.a(a):a
if(!b.b)b.a.a_(r)
else{s=b.a
if(b.$ti.i("G<1>").b(r))s.ar(r)
else s.av(r)}},
h0(a,b){var s=A.am(a),r=A.a2(a),q=b.a
if(b.b)q.J(new A.x(s,r))
else q.aq(new A.x(s,r))},
h3(a,b){var s,r,q=new A.cX(b),p=new A.cY(b)
if(a instanceof A.m)a.aF(q,p,t.z)
else{s=t.z
if(a instanceof A.m)a.aV(q,p,s)
else{r=new A.m($.i,t.c)
r.a=8
r.c=a
r.aF(q,p,s)}}},
hD(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.i.ak(new A.d0(s))},
di(a){var s
if(t.Q.b(a)){s=a.gP()
if(s!=null)return s}return B.e},
hf(a,b){if($.i===B.b)return null
return null},
cD(a,b,c){var s,r,q,p={},o=p.a=a
for(;s=o.a,(s&4)!==0;){o=o.c
p.a=o}if(o===b){s=A.fk()
b.aq(new A.x(new A.C(!0,o,null,"Cannot complete a future with itself"),s))
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.aD(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.K()
b.T(p.a)
A.X(b,q)
return}b.a^=2
A.ai(null,null,b.b,new A.cE(p,b))},
X(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;!0;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){f=f.c
A.bR(f.a,f.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.X(g.a,f)
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
if(r){A.bR(m.a,m.b)
return}j=$.i
if(j!==k)$.i=k
else j=null
f=f.c
if((f&15)===8)new A.cI(s,g,p).$0()
else if(q){if((f&1)!==0)new A.cH(s,m).$0()}else if((f&2)!==0)new A.cG(g,s).$0()
if(j!=null)$.i=j
f=s.c
if(f instanceof A.m){r=s.a.$ti
r=r.i("G<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.V(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.cD(f,i,!0)
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
hv(a,b){if(t.C.b(a))return b.ak(a)
if(t.v.b(a))return a
throw A.c(A.dN(a,"onError",u.c))},
hr(){var s,r
for(s=$.ah;s!=null;s=$.ah){$.b3=null
r=s.b
$.ah=r
if(r==null)$.b2=null
s.a.$0()}},
hy(){$.dA=!0
try{A.hr()}finally{$.b3=null
$.dA=!1
if($.ah!=null)$.dK().$1(A.er())}},
ep(a){var s=new A.bD(a),r=$.b2
if(r==null){$.ah=$.b2=s
if(!$.dA)$.dK().$1(A.er())}else $.b2=r.b=s},
hx(a){var s,r,q,p=$.ah
if(p==null){A.ep(a)
$.b3=$.b2
return}s=new A.bD(a)
r=$.b3
if(r==null){s.b=p
$.ah=$.b3=s}else{q=r.b
s.b=q
$.b3=r.b=s
if(q==null)$.b2=s}},
eC(a){var s=null,r=$.i
if(B.b===r){A.ai(s,s,B.b,a)
return}A.ai(s,s,r,r.aJ(a))},
i9(a){A.dD(a,"stream",t.K)
return new A.bN()},
ds(a){return new A.aJ(null,null,a.i("aJ<0>"))},
eo(a){return},
e1(a,b){return b==null?A.hH():b},
fv(a,b){if(b==null)b=A.hI()
if(t.k.b(b))return a.ak(b)
if(t.d.b(b))return b
throw A.c(A.ao("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
hs(a){},
ht(a,b){A.bR(a,b)},
h6(a,b,c){var s,r,q=a.aK()
if(q!==$.dg()){s=q.$ti
r=$.i
q.S(new A.P(new A.m(r,s),8,new A.cZ(b,c),null,s.i("P<1,1>")))}else b.a2(c)},
fn(a,b){var s=$.i
if(s===B.b)return A.dZ(a,b)
return A.dZ(a,s.bq(b,t.E))},
bR(a,b){A.hx(new A.d_(a,b))},
el(a,b,c,d){var s,r=$.i
if(r===c)return d.$0()
$.i=c
s=r
try{r=d.$0()
return r}finally{$.i=s}},
em(a,b,c,d,e){var s,r=$.i
if(r===c)return d.$1(e)
$.i=c
s=r
try{r=d.$1(e)
return r}finally{$.i=s}},
hw(a,b,c,d,e,f){var s,r=$.i
if(r===c)return d.$2(e,f)
$.i=c
s=r
try{r=d.$2(e,f)
return r}finally{$.i=s}},
ai(a,b,c,d){if(B.b!==c)d=c.aJ(d)
A.ep(d)},
cv:function cv(a){this.a=a},
cu:function cu(a,b,c){this.a=a
this.b=b
this.c=c},
cw:function cw(a){this.a=a},
cx:function cx(a){this.a=a},
aW:function aW(){this.c=0},
cT:function cT(a,b){this.a=a
this.b=b},
cS:function cS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bC:function bC(a,b){this.a=a
this.b=!1
this.$ti=b},
cX:function cX(a){this.a=a},
cY:function cY(a){this.a=a},
d0:function d0(a){this.a=a},
x:function x(a,b){this.a=a
this.b=b},
ae:function ae(a,b){this.a=a
this.$ti=b},
aK:function aK(a,b,c,d,e){var _=this
_.ay=0
_.CW=_.ch=null
_.w=a
_.a=b
_.d=c
_.e=d
_.r=_.f=null
_.$ti=e},
bE:function bE(){},
aJ:function aJ(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null
_.$ti=c},
P:function P(a,b,c,d,e){var _=this
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
cA:function cA(a,b){this.a=a
this.b=b},
cF:function cF(a,b){this.a=a
this.b=b},
cE:function cE(a,b){this.a=a
this.b=b},
cC:function cC(a,b){this.a=a
this.b=b},
cB:function cB(a,b){this.a=a
this.b=b},
cI:function cI(a,b,c){this.a=a
this.b=b
this.c=c},
cJ:function cJ(a,b){this.a=a
this.b=b},
cK:function cK(a){this.a=a},
cH:function cH(a,b){this.a=a
this.b=b},
cG:function cG(a,b){this.a=a
this.b=b},
bD:function bD(a){this.a=a
this.b=null},
ad:function ad(){},
cd:function cd(a,b){this.a=a
this.b=b},
ce:function ce(a,b){this.a=a
this.b=b},
cb:function cb(a){this.a=a},
cc:function cc(a,b,c){this.a=a
this.b=b
this.c=c},
aL:function aL(){},
bG:function bG(){},
bF:function bF(){},
aV:function aV(){},
bI:function bI(){},
bH:function bH(a){this.b=a
this.a=null},
bL:function bL(){this.a=0
this.c=this.b=null},
cO:function cO(a,b){this.a=a
this.b=b},
aM:function aM(a){this.a=1
this.b=a
this.c=null},
bN:function bN(){},
cZ:function cZ(a,b){this.a=a
this.b=b},
cW:function cW(){},
d_:function d_(a,b){this.a=a
this.b=b},
cP:function cP(){},
cQ:function cQ(a,b){this.a=a
this.b=b},
cR:function cR(a,b,c){this.a=a
this.b=b
this.c=c},
fc(a,b,c){return A.ev(a,new A.V(b.i("@<0>").a0(c).i("V<1,2>")))},
fd(a){return new A.aN(a.i("aN<0>"))},
du(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
fw(a,b,c){var s=new A.af(a,b,c.i("af<0>"))
s.c=a.e
return s},
dn(a){var s,r
if(A.ey(a))return"{...}"
s=new A.bz("")
try{r={}
$.K.push(a)
s.a+="{"
r.a=!0
a.ae(0,new A.c0(r,s))
s.a+="}"}finally{if(0>=$.K.length)return A.d($.K,-1)
$.K.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
aN:function aN(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cM:function cM(a){this.a=a
this.c=this.b=null},
af:function af(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
l:function l(){},
az:function az(){},
c0:function c0(a,b){this.a=a
this.b=b},
aG:function aG(){},
aT:function aT(){},
f0(a,b){a=A.r(a,new Error())
a.stack=b.h(0)
throw a},
dm(a,b,c){var s,r,q
if(a>4294967295)A.de(A.dp(a,0,4294967295,"length",null))
s=A.a(new Array(a),c.i("o<0>"))
s.$flags=1
r=s
if(a!==0)for(s=r.length,q=0;q<s;++q)r[q]=b
return r},
fe(a,b,c){var s,r,q=A.a([],c.i("o<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.bT)(a),++r)q.push(a[r])
q.$flags=1
return q},
dX(a){return new A.bY(a,A.fa(a,!1,!0,!1,!1,""))},
fl(a,b,c){var s=J.eR(b)
if(!s.B())return a
if(c.length===0){do a+=A.p(s.gM())
while(s.B())}else{a+=A.p(s.gM())
for(;s.B();)a=a+c+A.p(s.gM())}return a},
fk(){return A.a2(new Error())},
bW(a){if(typeof a=="number"||A.dz(a)||a==null)return J.b6(a)
if(typeof a=="string")return JSON.stringify(a)
return A.dW(a)},
f1(a,b){A.dD(a,"error",t.K)
A.dD(b,"stackTrace",t.l)
A.f0(a,b)},
b9(a){return new A.b8(a)},
ao(a,b){return new A.C(!1,null,b,a)},
dN(a,b,c){return new A.C(!0,a,b,c)},
dp(a,b,c,d,e){return new A.aF(b,c,!0,a,d,"Invalid value")},
fh(a,b,c){if(0>a||a>c)throw A.c(A.dp(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.c(A.dp(b,a,c,"end",null))
return b}return c},
f4(a,b,c,d){return new A.be(b,!0,a,d,"Index out of range")},
ct(a){return new A.aI(a)},
e0(a){return new A.bA(a)},
a4(a){return new A.ba(a)},
dT(a){return new A.cz(a)},
dj(a,b,c){var s,r
if(A.ey(a))return b+"..."+c
s=new A.bz(b)
$.K.push(a)
try{r=s
r.a=A.fl(r.a,a,", ")}finally{if(0>=$.K.length)return A.d($.K,-1)
$.K.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
c2(a,b,c,d){var s
if(B.c===c){s=B.a.gk(a)
b=J.F(b)
return A.dt(A.O(A.O($.dh(),s),b))}if(B.c===d){s=B.a.gk(a)
b=J.F(b)
c=J.F(c)
return A.dt(A.O(A.O(A.O($.dh(),s),b),c))}s=B.a.gk(a)
b=J.F(b)
c=J.F(c)
d=J.F(d)
d=A.dt(A.O(A.O(A.O(A.O($.dh(),s),b),c),d))
return d},
bc:function bc(a){this.a=a},
cy:function cy(){},
j:function j(){},
b8:function b8(a){this.a=a},
H:function H(){},
C:function C(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aF:function aF(a,b,c,d,e,f){var _=this
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
aI:function aI(a){this.a=a},
bA:function bA(a){this.a=a},
ac:function ac(a){this.a=a},
ba:function ba(a){this.a=a},
bv:function bv(){},
aH:function aH(){},
cz:function cz(a){this.a=a},
bX:function bX(a,b){this.a=a
this.b=b},
t:function t(){},
e:function e(){},
bO:function bO(){},
bz:function bz(a){this.a=a},
L:function L(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a6:function a6(){},
a7:function a7(a,b,c,d,e,f,g){var _=this
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
fj(a,b,c,d,e,f,g,h){var s,r,q,p=v.G,o=p.document.createElement("canvas"),n=h*g
o.width=n
s=d*f
o.height=s
r=p.document.createElement("canvas")
r.width=n
r.height=s
s=A.a([],t.w)
for(q=0;q<d;++q){p=B.a.A(h,32)
s.push(new Uint32Array(p+1))}p=new A.by(!0,d,h,g,f,c,a,o,r,s)
p.b0(a,b,c,d,!0,f,g,h)
return p},
dr(a){return new A.A(B.a.A(a,32),31-B.a.j(a,32))},
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
c5:function c5(a){this.a=a},
c6:function c6(a){this.a=a},
c7:function c7(a){this.a=a},
c8:function c8(a){this.a=a},
c4:function c4(){},
D:function D(a){this.b=a},
fm(a,b,c){var s,r,q,p,o="white",n=null,m=A.fj("black",b,o,c*10,!0,2,2,a*8),l=A.a([],t.G)
for(s=t.U,r=0;r<c;++r){q=A.a([],s)
for(p=0;p<a;++p)q.push(new A.L(r,p," ",o))
l.push(q)}m=new A.cg(c,a,b,m,new A.a9(c,a),new A.a9(c,a),new A.a9(c,a),A.ds(t.N),A.ds(t.V),A.ds(t.q),B.d,l,A.fd(t.o),B.dE)
m.b1("black",a,b,o,n,!0,2,2,2,c,!0,n,n,n,n,n,n)
return m},
ab:function ab(a){this.b=a},
cg:function cg(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
co:function co(a){this.a=a},
cn:function cn(){},
cm:function cm(a){this.a=a},
ch:function ch(a){this.a=a},
ci:function ci(a){this.a=a},
cj:function cj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ck:function ck(a,b,c){this.a=a
this.b=b
this.c=c},
cl:function cl(a){this.a=a},
d6(){var s=0,r=A.hq(t.n),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$d6=A.hD(function(b4,b5){if(b4===1)return A.h0(b5,r)
while(true)switch(s){case 0:b3=v.G.document.getElementById("index")
b3.toString
p=A.fm(60,b3,35)
p.H()
p.N()
b3=t.s
o=A.fc(["blockdude",A.a(["Block Dude is a game by Brandon Sterner and","Detached Solutions for the Texas Instruments family","of graphic display calculators. The graphics data for","this demo was pinched directly from the Z80 assembly","code for the calculator game."],b3),"bounce",A.a(["Capture the bouncing balls by enclosing them","with your trail."],b3),"emotions",A.a(["Mixed Emotions is a little twist on the classic sliding","tiles game to demonstrate mouse support for the terminal.","Click on tiles to slide them to their correct positions,","but you only get to see the correct positions by sliding","the tiles!"],b3),"four",A.a(["This is the classic game of connect-four. The computer","uses background Monte Carlo simulations to play a fairly","intelligent game."],b3),"mine",A.a(["A minesweep clone."],b3),"othello",A.a(["The game of Othello (Reversi)."],b3),"salad",A.a(["Given definitions, find the words in a grid","of letters."],b3),"snake",A.a(["Snake is version of the infamous snake game that","demonstrates non interrupting keyboard input."],b3),"sokoban",A.a(["Mother Hen is a Sokoban clone that demonstrates poking","simple sprite data into the terminal graphics memory."],b3),"wordle",A.a(["Word Logic is a Wordle clone that demonstrates a fairly","complex program running in the terminal."],b3)],t.N,t.a)
n=A.dX("^ *info +(.+) *$")
m=A.dX("^ *load +(.+) *$")
l=new A.db(p)
k=new A.d7(p)
j=new A.d9(o,p)
i=new A.d8(o,p)
h=new A.da(o,p)
l.$0()
j.$0()
b3=m.b,g=n.b,f=p.y,e=p.x,d=e.b,c=f.b,b=f.a,a=p.z,a0=a.b,a1=a.a,a2=p.as,a3=A.bQ(a2).i("ae<1>"),a4=p.a,a5=a4-1,a6=e.a,a7=p.b,a8=a7-4
case 3:if(!!0){s=4
break}p.by(" > ","lightgreen",!1)
if(p.ay!==B.d)A.de(A.dT("Terminal already awaiting input."))
a9=e.c
b0=e.d
a9=B.a.j(a9,a4)
b0=B.a.j(b0,a7)
a9=B.a.j(a9,a6)
e.c=a9
e.sI(b0)
p.aj(B.h.an(" ",a8),!1)
e.c=a9
e.sI(b0)
a9=e.c
if(a9===a5){p.Z()
a9=e.c=B.a.j(e.c-1,a6)}a9=a9*d+e.d
b0=B.a.j(B.a.u(a9,c),b)
f.c=b0
a9=B.a.j(a9,c)
f.d=a9
a9=b0*c+a9+a8
a.c=B.a.j(B.a.u(a9,a0),a1)
a.d=B.a.j(a9,a0)
p.ay=B.i
s=5
return A.h_(new A.ae(a2,a3).gbr(0),$async$d6)
case 5:b1=b5
b2=B.h.aW(b1)
if("reset"===b2){l.$0()
s=3
break}if("help"===b2){k.$0()
s=3
break}if("list"===b2){j.$0()
s=3
break}if(g.test(b1)){a9=n.aM(b1).b
if(1>=a9.length){q=A.d(a9,1)
s=1
break}a9=a9[1]
a9.toString
i.$1(a9)}else if(b3.test(b1)){a9=m.aM(b1).b
if(1>=a9.length){q=A.d(a9,1)
s=1
break}a9=a9[1]
a9.toString
h.$1(a9)}else{p.C()
p.D(" Not understood. Type 'help' for help.","orange")
p.C()}s=3
break
case 4:case 1:return A.h1(q,r)}})
return A.h2($async$d6,r)},
db:function db(a){this.a=a},
d7:function d7(a){this.a=a},
d9:function d9(a,b){this.a=a
this.b=b},
d8:function d8(a,b){this.a=a
this.b=b},
da:function da(a,b){this.a=a
this.b=b},
i0(a){throw A.r(new A.ay("Field '"+a+"' has been assigned during initialization."),new Error())},
S(){throw A.r(A.fb(""),new Error())},
b1(a){var s
if(typeof a=="function")throw A.c(A.ao("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.h4,a)
s[$.df()]=a
return s},
eh(a){var s
if(typeof a=="function")throw A.c(A.ao("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.h5,a)
s[$.df()]=a
return s},
h4(a){return a.$0()},
h5(a,b,c){if(c>=1)return a.$1(b)
return a.$0()}},B={}
var w=[A,J,B]
var $={}
A.dk.prototype={}
J.bf.prototype={
t(a,b){return a===b},
gk(a){return A.aa(a)},
h(a){return"Instance of '"+A.c3(a)+"'"},
gl(a){return A.a0(A.dy(this))}}
J.bg.prototype={
h(a){return String(a)},
gk(a){return a?519018:218159},
gl(a){return A.a0(t.y)},
$if:1}
J.at.prototype={
t(a,b){return null==b},
h(a){return"null"},
gk(a){return 0},
$if:1}
J.av.prototype={$ik:1}
J.N.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.bw.prototype={}
J.W.prototype={}
J.M.prototype={
h(a){var s=a[$.df()]
if(s==null)return this.b_(a)
return"JavaScript function for "+J.b6(s)}}
J.au.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.aw.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.o.prototype={
aI(a,b){a.$flags&1&&A.b5(a,"addAll",2)
this.b5(a,b)
return},
b5(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw A.c(A.a4(a))
for(s=0;s<r;++s)a.push(b[s])},
bw(a,b){var s,r,q=a.length,p=A.dm(q,"",t.N)
for(s=0;s<a.length;++s){r=A.p(a[s])
if(!(s<q))return A.d(p,s)
p[s]=r}return p.join(b)},
bs(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw A.c(A.a4(a))}return s},
bt(a,b,c){c.toString
return this.bs(a,b,c,t.z)},
h(a){return A.dj(a,"[","]")},
gai(a){return new J.b7(a,a.length,A.dx(a).i("b7<1>"))},
gk(a){return A.aa(a)},
gm(a){return a.length},
$ih:1}
J.bZ.prototype={}
J.b7.prototype={
gM(){var s=this.d
return s==null?this.$ti.c.a(s):s},
B(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.c(A.bT(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.a5.prototype={
bG(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.c(A.ct(""+a+".toInt()"))},
h(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gk(a){var s,r,q,p,o=a|0
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
u(a,b){if((a|0)===a)if(b>=1)return a/b|0
return this.aE(a,b)},
A(a,b){return(a|0)===a?a/b|0:this.aE(a,b)},
aE(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.c(A.ct("Result of truncating division is "+A.p(s)+": "+A.p(a)+" ~/ "+b))},
O(a,b){if(b<0)throw A.c(A.dC(b))
return b>31?0:a<<b>>>0},
bn(a,b){return b>31?0:a<<b>>>0},
aY(a,b){var s
if(b<0)throw A.c(A.dC(b))
if(a>0)s=this.aa(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
bo(a,b){var s
if(a>0)s=this.aa(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
v(a,b){if(0>b)throw A.c(A.dC(b))
return this.aa(a,b)},
aa(a,b){return b>31?0:a>>>b},
gl(a){return A.a0(t.H)},
$iq:1}
J.as.prototype={
gl(a){return A.a0(t.S)},
$if:1,
$ib:1}
J.bh.prototype={
gl(a){return A.a0(t.i)},
$if:1}
J.U.prototype={
aZ(a,b,c){return a.substring(b,A.fh(b,c,a.length))},
aW(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.d(p,0)
if(p.charCodeAt(0)===133){s=J.f8(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.d(p,r)
q=p.charCodeAt(r)===133?J.f9(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
an(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.c(B.w)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
bz(a,b,c){var s=b-a.length
if(s<=0)return a
return this.an(c,s)+a},
h(a){return a},
gk(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gl(a){return A.a0(t.N)},
gm(a){return a.length},
$if:1,
$iu:1}
A.ay.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.dd.prototype={
$0(){var s=new A.m($.i,t.D)
s.a_(null)
return s},
$S:8}
A.c9.prototype={}
A.bk.prototype={
gM(){var s=this.d
return s==null?this.$ti.c.a(s):s},
B(){var s,r=this,q=r.a,p=J.ew(q),o=p.gm(q)
if(r.b!==o)throw A.c(A.a4(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.n(q,s);++r.c
return!0}}
A.ar.prototype={}
A.A.prototype={$r:"+(1,2)",$s:1}
A.bb.prototype={
h(a){return A.dn(this)}}
A.bd.prototype={
U(){var s=this,r=s.$map
if(r==null){r=new A.ax(s.$ti.i("ax<1,2>"))
A.ev(s.a,r)
s.$map=r}return r},
L(a){return this.U().L(a)},
n(a,b){return this.U().n(0,b)},
ae(a,b){this.U().ae(0,b)},
gm(a){return this.U().a}}
A.cq.prototype={
q(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
h(a){return"Null check operator used on a null value"}}
A.bi.prototype={
h(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.bB.prototype={
h(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.c1.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.aq.prototype={}
A.aU.prototype={
h(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iz:1}
A.T.prototype={
h(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.eD(r==null?"unknown":r)+"'"},
gbH(){return this},
$C:"$1",
$R:1,
$D:null}
A.bU.prototype={$C:"$0",$R:0}
A.bV.prototype={$C:"$2",$R:2}
A.cf.prototype={}
A.ca.prototype={
h(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.eD(s)+"'"}}
A.ap.prototype={
t(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.ap))return!1
return this.$_target===b.$_target&&this.a===b.a},
gk(a){return(A.dJ(this.a)^A.aa(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.c3(this.a)+"'")}}
A.bx.prototype={
h(a){return"RuntimeError: "+this.a}}
A.V.prototype={
gm(a){return this.a},
L(a){var s=this.b
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
return q}else return this.bv(b)},
bv(a){var s,r,q=this.d
if(q==null)return null
s=q[this.af(a)]
r=this.ag(s,a)
if(r<0)return null
return s[r].b},
ae(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw A.c(A.a4(s))
r=r.c}},
R(a,b){var s=this,r=new A.c_(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&1073741823
return r},
af(a){return J.F(a)&1073741823},
ag(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.an(a[r].a,b))return r
return-1},
h(a){return A.dn(this)}}
A.c_.prototype={}
A.bj.prototype={
B(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.c(A.a4(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
A.ax.prototype={
af(a){return A.hJ(a)&1073741823},
ag(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.an(a[r].a,b))return r
return-1}}
A.d2.prototype={
$1(a){return this.a(a)},
$S:9}
A.d3.prototype={
$2(a,b){return this.a(a,b)},
$S:10}
A.d4.prototype={
$1(a){return this.a(a)},
$S:11}
A.ag.prototype={
h(a){return this.aG(!1)},
aG(a){var s,r,q,p,o,n=this.be(),m=this.az(),l=(a?""+"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.d(m,q)
o=m[q]
l=a?l+A.dW(o):l+A.p(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
be(){var s,r=this.$s
for(;$.aS.length<=r;)$.aS.push(null)
s=$.aS[r]
if(s==null){s=this.bd()
if(!(r<$.aS.length))return A.d($.aS,r)
$.aS[r]=s}return s},
bd(){var s,r,q,p,o,n=this.$r,m=n.indexOf("("),l=n.substring(1,m),k=n.substring(m),j=k==="()"?0:k.replace(/[^,]/g,"").length+1,i=A.a(new Array(j),t.f)
for(s=0;s<j;++s)i[s]=s
if(l!==""){r=l.split(",")
s=r.length
for(q=i.length,p=j;s>0;){--p;--s
o=r[s]
if(!(p>=0&&p<q))return A.d(i,p)
i[p]=o}}i=A.fe(i,!1,t.K)
i.$flags=3
return i}}
A.bM.prototype={
az(){return[this.a,this.b]},
t(a,b){if(b==null)return!1
return b instanceof A.bM&&this.$s===b.$s&&J.an(this.a,b.a)&&J.an(this.b,b.b)},
gk(a){return A.c2(this.$s,this.a,this.b,B.c)}}
A.bY.prototype={
h(a){return"RegExp/"+this.a+"/"+this.b.flags},
aM(a){var s=this.b.exec(a)
if(s==null)return null
return new A.cN(s)}}
A.cN.prototype={}
A.bl.prototype={
gl(a){return B.dN},
$if:1}
A.aC.prototype={}
A.bm.prototype={
gl(a){return B.dO},
$if:1}
A.a8.prototype={
gm(a){return a.length},
$iv:1}
A.aA.prototype={
n(a,b){A.Z(b,a,a.length)
return a[b]},
$ih:1}
A.aB.prototype={$ih:1}
A.bn.prototype={
gl(a){return B.dP},
$if:1}
A.bo.prototype={
gl(a){return B.dQ},
$if:1}
A.bp.prototype={
gl(a){return B.dR},
n(a,b){A.Z(b,a,a.length)
return a[b]},
$if:1}
A.bq.prototype={
gl(a){return B.dS},
n(a,b){A.Z(b,a,a.length)
return a[b]},
$if:1}
A.br.prototype={
gl(a){return B.dT},
n(a,b){A.Z(b,a,a.length)
return a[b]},
$if:1}
A.bs.prototype={
gl(a){return B.dV},
n(a,b){A.Z(b,a,a.length)
return a[b]},
$if:1}
A.bt.prototype={
gl(a){return B.dW},
n(a,b){A.Z(b,a,a.length)
return a[b]},
$if:1,
$ics:1}
A.aD.prototype={
gl(a){return B.dX},
gm(a){return a.length},
n(a,b){A.Z(b,a,a.length)
return a[b]},
$if:1}
A.bu.prototype={
gl(a){return B.dY},
gm(a){return a.length},
n(a,b){A.Z(b,a,a.length)
return a[b]},
$if:1}
A.aO.prototype={}
A.aP.prototype={}
A.aQ.prototype={}
A.aR.prototype={}
A.y.prototype={
i(a){return A.b0(v.typeUniverse,this,a)},
a0(a){return A.ec(v.typeUniverse,this,a)}}
A.bK.prototype={}
A.bP.prototype={
h(a){return A.w(this.a,null)}}
A.bJ.prototype={
h(a){return this.a}}
A.aX.prototype={$iH:1}
A.cv.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:3}
A.cu.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:12}
A.cw.prototype={
$0(){this.a.$0()},
$S:1}
A.cx.prototype={
$0(){this.a.$0()},
$S:1}
A.aW.prototype={
b2(a,b){if(self.setTimeout!=null)self.setTimeout(A.bS(new A.cT(this,b),0),a)
else throw A.c(A.ct("`setTimeout()` not found."))},
b3(a,b){if(self.setTimeout!=null)self.setInterval(A.bS(new A.cS(this,a,Date.now(),b),0),a)
else throw A.c(A.ct("Periodic timer."))},
$icp:1}
A.cT.prototype={
$0(){this.a.c=1
this.b.$0()},
$S:0}
A.cS.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.a.u(s,o)}q.c=p
r.d.$1(q)},
$S:1}
A.bC.prototype={}
A.cX.prototype={
$1(a){return this.a.$2(0,a)},
$S:4}
A.cY.prototype={
$2(a,b){this.a.$2(1,new A.aq(a,b))},
$S:13}
A.d0.prototype={
$2(a,b){this.a(a,b)},
$S:14}
A.x.prototype={
h(a){return A.p(this.a)},
$ij:1,
gP(){return this.b}}
A.ae.prototype={}
A.aK.prototype={
a7(){},
a8(){}}
A.bE.prototype={
gbg(){return this.c<4},
bl(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
bp(a,b,c,d){var s,r,q,p,o,n=this
if((n.c&4)!==0){s=new A.aM($.i)
A.eC(s.gbh())
s.c=c
return s}s=$.i
r=d?1:0
q=A.e1(s,a)
A.fv(s,b)
p=new A.aK(n,q,s,r|32,A.bQ(n).i("aK<1>"))
p.CW=p
p.ch=p
p.ay=n.c&1
o=n.e
n.e=p
p.ch=null
p.CW=o
if(o==null)n.d=p
else o.ch=p
if(n.d===p)A.eo(n.a)
return p},
bk(a){var s,r=this
A.bQ(r).i("aK<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.bl(a)
if((r.c&2)===0&&r.d==null)r.b9()}return null},
b6(){if((this.c&4)!==0)return new A.ac("Cannot add new events after calling close")
return new A.ac("Cannot add new events while doing an addStream")},
G(a,b){if(!this.gbg())throw A.c(this.b6())
this.a9(b)},
b9(){if((this.c&4)!==0)if(null.gbI())null.a_(null)
A.eo(this.b)}}
A.aJ.prototype={
a9(a){var s
for(s=this.d;s!=null;s=s.ch)s.b7(new A.bH(a))}}
A.P.prototype={
bx(a){if((this.c&15)!==6)return!0
return this.b.b.al(this.d,a.a)},
bu(a){var s,r=this.e,q=null,p=a.a,o=this.b.b
if(t.C.b(r))q=o.bC(r,p,a.b)
else q=o.al(r,p)
try{p=q
return p}catch(s){if(t._.b(A.am(s))){if((this.c&1)!==0)throw A.c(A.ao("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.c(A.ao("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.m.prototype={
aV(a,b,c){var s,r=$.i
if(r===B.b){if(!t.C.b(b)&&!t.v.b(b))throw A.c(A.dN(b,"onError",u.c))}else b=A.hv(b,r)
s=new A.m(r,c.i("m<0>"))
this.S(new A.P(s,3,a,b,this.$ti.i("@<1>").a0(c).i("P<1,2>")))
return s},
aF(a,b,c){var s=new A.m($.i,c.i("m<0>"))
this.S(new A.P(s,19,a,b,this.$ti.i("@<1>").a0(c).i("P<1,2>")))
return s},
bm(a){this.a=this.a&1|16
this.c=a},
T(a){this.a=a.a&30|this.a&1
this.c=a.c},
S(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.S(a)
return}s.T(r)}A.ai(null,null,s.b,new A.cA(s,a))}},
aD(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.aD(a)
return}n.T(s)}m.a=n.V(a)
A.ai(null,null,n.b,new A.cF(m,n))}},
K(){var s=this.c
this.c=null
return this.V(s)},
V(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
a2(a){var s,r=this
if(r.$ti.i("G<1>").b(a))A.cD(a,r,!0)
else{s=r.K()
r.a=8
r.c=a
A.X(r,s)}},
av(a){var s=this,r=s.K()
s.a=8
s.c=a
A.X(s,r)},
bc(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.K()
q.T(a)
A.X(q,r)},
J(a){var s=this.K()
this.bm(a)
A.X(this,s)},
bb(a,b){this.J(new A.x(a,b))},
a_(a){if(this.$ti.i("G<1>").b(a)){this.ar(a)
return}this.b8(a)},
b8(a){this.a^=2
A.ai(null,null,this.b,new A.cC(this,a))},
ar(a){A.cD(a,this,!1)
return},
aq(a){this.a^=2
A.ai(null,null,this.b,new A.cB(this,a))},
$iG:1}
A.cA.prototype={
$0(){A.X(this.a,this.b)},
$S:0}
A.cF.prototype={
$0(){A.X(this.b,this.a.a)},
$S:0}
A.cE.prototype={
$0(){A.cD(this.a.a,this.b,!0)},
$S:0}
A.cC.prototype={
$0(){this.a.av(this.b)},
$S:0}
A.cB.prototype={
$0(){this.a.J(this.b)},
$S:0}
A.cI.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.aS(q.d)}catch(p){s=A.am(p)
r=A.a2(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.di(q)
n=k.a
n.c=new A.x(q,o)
q=n}q.b=!0
return}if(j instanceof A.m&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.m){m=k.b.a
l=new A.m(m.b,m.$ti)
j.aV(new A.cJ(l,m),new A.cK(l),t.n)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.cJ.prototype={
$1(a){this.a.bc(this.b)},
$S:3}
A.cK.prototype={
$2(a,b){this.a.J(new A.x(a,b))},
$S:15}
A.cH.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
q.c=p.b.b.al(p.d,this.b)}catch(o){s=A.am(o)
r=A.a2(o)
q=s
p=r
if(p==null)p=A.di(q)
n=this.a
n.c=new A.x(q,p)
n.b=!0}},
$S:0}
A.cG.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.bx(s)&&p.a.e!=null){p.c=p.a.bu(s)
p.b=!1}}catch(o){r=A.am(o)
q=A.a2(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.di(p)
m=l.b
m.c=new A.x(p,n)
p=m}p.b=!0}},
$S:0}
A.bD.prototype={}
A.ad.prototype={
gm(a){var s={},r=new A.m($.i,t.h)
s.a=0
this.aN(new A.cd(s,this),!0,new A.ce(s,r),r.gau())
return r},
gbr(a){var s=new A.m($.i,this.$ti.i("m<1>")),r=this.aN(null,!0,new A.cb(s),s.gau())
r.aO(new A.cc(this,r,s))
return s}}
A.cd.prototype={
$1(a){++this.a.a},
$S(){return this.b.$ti.i("~(1)")}}
A.ce.prototype={
$0(){this.b.a2(this.a.a)},
$S:0}
A.cb.prototype={
$0(){var s,r=new A.ac("No element")
A.fg(r,B.e)
s=A.hf(r,B.e)
s=new A.x(r,B.e)
this.a.J(s)},
$S:0}
A.cc.prototype={
$1(a){A.h6(this.b,this.c,a)},
$S(){return this.a.$ti.i("~(1)")}}
A.aL.prototype={
gk(a){return(A.aa(this.a)^892482866)>>>0},
t(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.ae&&b.a===this.a}}
A.bG.prototype={
aC(){return this.w.bk(this)},
a7(){},
a8(){}}
A.bF.prototype={
aO(a){this.a=A.e1(this.d,a)},
aK(){var s,r=this,q=r.e&=4294967279
if((q&8)===0){q=r.e=q|8
if((q&128)!==0){s=r.r
if(s.a===1)s.a=3}if((q&64)===0)r.r=null
r.f=r.aC()}q=$.dg()
return q},
a7(){},
a8(){},
aC(){return null},
b7(a){var s,r,q=this,p=q.r
if(p==null)p=q.r=new A.bL()
s=p.c
if(s==null)p.b=p.c=a
else p.c=s.a=a
r=q.e
if((r&128)===0){r|=128
q.e=r
if(r<256)p.ao(q)}},
a9(a){var s=this,r=s.e
s.e=r|64
s.d.aU(s.a,a)
s.e&=4294967231
s.ba((r&4)!==0)},
ba(a){var s,r,q=this,p=q.e
if((p&128)!==0&&q.r.c==null){p=q.e=p&4294967167
s=!1
if((p&4)!==0)if(p<256){s=q.r
s=s==null?null:s.c==null
s=s!==!1}if(s){p&=4294967291
q.e=p}}for(;!0;a=r){if((p&8)!==0){q.r=null
return}r=(p&4)!==0
if(a===r)break
q.e=p^64
if(r)q.a7()
else q.a8()
p=q.e&=4294967231}if((p&128)!==0&&p<256)q.r.ao(q)}}
A.aV.prototype={
aN(a,b,c,d){return this.a.bp(a,d,c,!0)}}
A.bI.prototype={}
A.bH.prototype={}
A.bL.prototype={
ao(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.eC(new A.cO(s,a))
s.a=1}}
A.cO.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.a
q.b=r
if(r==null)q.c=null
this.b.a9(s.b)},
$S:0}
A.aM.prototype={
aO(a){},
aK(){this.a=-1
this.c=null
return $.dg()},
bi(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.aT(s)}}else r.a=q}}
A.bN.prototype={}
A.cZ.prototype={
$0(){return this.a.a2(this.b)},
$S:0}
A.cW.prototype={}
A.d_.prototype={
$0(){A.f1(this.a,this.b)},
$S:0}
A.cP.prototype={
aT(a){var s,r,q
try{if(B.b===$.i){a.$0()
return}A.el(null,null,this,a)}catch(q){s=A.am(q)
r=A.a2(q)
A.bR(s,r)}},
bF(a,b){var s,r,q
try{if(B.b===$.i){a.$1(b)
return}A.em(null,null,this,a,b)}catch(q){s=A.am(q)
r=A.a2(q)
A.bR(s,r)}},
aU(a,b){a.toString
return this.bF(a,b,t.z)},
aJ(a){return new A.cQ(this,a)},
bq(a,b){return new A.cR(this,a,b)},
bB(a){if($.i===B.b)return a.$0()
return A.el(null,null,this,a)},
aS(a){a.toString
return this.bB(a,t.z)},
bE(a,b){if($.i===B.b)return a.$1(b)
return A.em(null,null,this,a,b)},
al(a,b){var s=t.z
a.toString
return this.bE(a,b,s,s)},
bD(a,b,c){if($.i===B.b)return a.$2(b,c)
return A.hw(null,null,this,a,b,c)},
bC(a,b,c){var s=t.z
a.toString
return this.bD(a,b,c,s,s,s)},
bA(a){return a},
ak(a){var s=t.z
a.toString
return this.bA(a,s,s,s)}}
A.cQ.prototype={
$0(){return this.a.aT(this.b)},
$S:0}
A.cR.prototype={
$1(a){return this.a.aU(this.b,a)},
$S(){return this.c.i("~(0)")}}
A.aN.prototype={
gai(a){var s=this,r=new A.af(s,s.r,s.$ti.i("af<1>"))
r.c=s.e
return r},
gm(a){return this.a},
G(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.ap(s==null?q.b=A.du():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.ap(r==null?q.c=A.du():r,b)}else return q.b4(b)},
b4(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.du()
s=J.F(a)&1073741823
r=p[s]
if(r==null)p[s]=[q.a6(a)]
else{if(q.bf(r,a)>=0)return!1
r.push(q.a6(a))}return!0},
ap(a,b){if(a[b]!=null)return!1
a[b]=this.a6(b)
return!0},
aB(){this.r=this.r+1&1073741823},
a6(a){var s,r=this,q=new A.cM(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.aB()
return q},
bf(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.an(a[r].a,b))return r
return-1}}
A.cM.prototype={}
A.af.prototype={
gM(){var s=this.d
return s==null?this.$ti.c.a(s):s},
B(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.c(A.a4(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.l.prototype={
gai(a){return new A.bk(a,this.gm(a),A.b4(a).i("bk<l.E>"))},
h(a){return A.dj(a,"[","]")}}
A.az.prototype={
gm(a){return this.a},
h(a){return A.dn(this)}}
A.c0.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.p(a)
r.a=(r.a+=s)+": "
s=A.p(b)
r.a+=s},
$S:16}
A.aG.prototype={
h(a){return A.dj(this,"{","}")}}
A.aT.prototype={}
A.bc.prototype={
t(a,b){if(b==null)return!1
return b instanceof A.bc&&this.a===b.a},
gk(a){return B.a.gk(this.a)},
h(a){var s,r,q,p,o=this.a,n=B.a.A(o,36e8)
o%=36e8
s=B.a.A(o,6e7)
o%=6e7
r=s<10?"0":""
q=B.a.A(o,1e6)
p=q<10?"0":""
return""+n+":"+r+s+":"+p+q+"."+B.h.bz(B.a.h(o%1e6),6,"0")}}
A.cy.prototype={
h(a){return this.aw()}}
A.j.prototype={
gP(){return A.ff(this)}}
A.b8.prototype={
h(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.bW(s)
return"Assertion failed"}}
A.H.prototype={}
A.C.prototype={
ga5(){return"Invalid argument"+(!this.a?"(s)":"")},
ga4(){return""},
h(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.ga5()+q+o
if(!s.a)return n
return n+s.ga4()+": "+A.bW(s.gah())},
gah(){return this.b}}
A.aF.prototype={
gah(){return this.b},
ga5(){return"RangeError"},
ga4(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.p(q):""
else if(q==null)s=": Not greater than or equal to "+A.p(r)
else if(q>r)s=": Not in inclusive range "+A.p(r)+".."+A.p(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.p(r)
return s}}
A.be.prototype={
gah(){return this.b},
ga5(){return"RangeError"},
ga4(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gm(a){return this.f}}
A.aI.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.bA.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.ac.prototype={
h(a){return"Bad state: "+this.a}}
A.ba.prototype={
h(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.bW(s)+"."}}
A.bv.prototype={
h(a){return"Out of Memory"},
gP(){return null},
$ij:1}
A.aH.prototype={
h(a){return"Stack Overflow"},
gP(){return null},
$ij:1}
A.cz.prototype={
h(a){return"Exception: "+this.a}}
A.bX.prototype={
h(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=B.h.aZ(q,0,75)+"..."
return r+"\n"+q}}
A.t.prototype={
gk(a){return A.e.prototype.gk.call(this,0)},
h(a){return"null"}}
A.e.prototype={$ie:1,
t(a,b){return this===b},
gk(a){return A.aa(this)},
h(a){return"Instance of '"+A.c3(this)+"'"},
gl(a){return A.hR(this)},
toString(){return this.h(this)}}
A.bO.prototype={
h(a){return""},
$iz:1}
A.bz.prototype={
gm(a){return this.a.length},
h(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.L.prototype={
gk(a){var s=this.a,r=this.b
return A.c2(new A.A(s,r).$s,s,r,B.c)},
t(a,b){var s,r,q,p
if(b==null)return!1
if(b instanceof A.L){s=b.a
r=b.b
q=this.a
p=this.b
p=A.c2(new A.A(s,r).$s,s,r,B.c)===A.c2(new A.A(q,p).$s,q,p,B.c)
s=p}else s=!1
return s},
h(a){var s=this
return"("+s.a+" "+s.b+") => '"+s.c+"' "+s.d}}
A.a6.prototype={}
A.a7.prototype={
h(a){var s=this
return"               row: "+s.a+"\n            column: "+s.b+"\n         character: '"+s.c+"'\n    characterColor: "+s.d+"\n\n          pixelRow: "+s.e+"\n       pixelColumn: "+s.f+"\n         pixelIsOn: "+s.r+"\n    "}}
A.a9.prototype={
sI(a){var s,r,q,p=this
if(a<0){s=p.d=a
for(r=p.b,q=p.a;s<0;){s+=r
p.d=s
p.c=B.a.j(p.c-1,q)}}else{s=p.b
p.c=B.a.j(p.c+B.a.u(a,s),p.a)
p.d=B.a.j(a,s)}},
gp(){return this.c*this.b+this.d},
sp(a){var s=this,r=s.b
s.c=B.a.j(B.a.u(a,r),s.a)
s.d=B.a.j(a,r)}}
A.by.prototype={
b0(a,b,c,d,e,f,g,h){var s,r=this,q=v.G.document
q.onfocus=A.b1(new A.c5(r))
q.onblur=A.b1(new A.c6(r))
q=r.w
q.tabIndex=-1
q.style.display="block"
q.style.outline="none"
s=q.getContext("2d")
if(s==null)s=t.m.a(s)
s.imageSmoothingEnabled=!1
q.onfocus=A.b1(new A.c7(r))
q.onblur=A.b1(new A.c8(r))
b.style.display="flex"
b.style.alignItems="flex-start"
b.style.padding="0"
b.style.margin="0"
b.style.width="fit-content"
b.style.height="fit-content"
b.style.background="gray"
b.appendChild(q)
r.X(0)},
W(a,b){return new A.A(B.a.j(a,this.b),B.a.j(b,this.c))},
a1(){var s=this.x,r=s.getContext("2d")
if(r==null)r=t.m.a(r)
r.save()
r.beginPath()
r.clearRect(0,0,s.width,s.height)
r.restore()
return r},
a3(){var s=this.w.getContext("2d")
if(s==null)s=t.m.a(s)
s.save()
s.beginPath()
s.drawImage(this.x,0,0)
s.restore()
return s},
E(a,b,c,d){var s,r,q,p,o,n,m=this,l=a<0||a>=m.b||b<0||b>=m.c
if(l)return
s=m.W(a,b)
a=s.a
b=s.b
r=A.dr(b)
q=r.a
p=B.a.O(1,r.b)
l=m.y
if(!(a>=0&&a<l.length))return A.d(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.d(l,q)
o=l[q]
l.$flags&2&&A.b5(l)
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
F(a,b,c,d,e){var s,r,q,p,o,n,m=this,l=a<0||a>=m.b||b<0||b>=m.c
if(l)return
s=m.W(a,b)
a=s.a
b=s.b
r=A.dr(b)
q=r.a
p=B.a.O(1,r.b)
l=m.y
if(!(a>=0&&a<l.length))return A.d(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.d(l,q)
o=l[q]
l.$flags&2&&A.b5(l)
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
aQ(a,b){var s,r,q,p,o=this.W(b,a)
b=o.a
s=A.dr(o.b)
r=s.a
q=B.a.O(1,s.b)
p=this.y
if(!(b>=0&&b<p.length))return A.d(p,b)
p=p[b]
if(!(r>=0&&r<p.length))return A.d(p,r)
return(p[r]&q)>>>0>0},
aL(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=this
if(e==null)e=k.c-c
if(b==null)b=k.b-d
k.a1()
if(c===0&&d===0&&e===k.c&&b===k.b){for(s=k.y,r=s.length,q=0;q<r;++q)for(p=0;o=s[q],p<o.length;++p){o.$flags&2&&A.b5(o)
o[p]=0}s=k.x
r=s.getContext("2d")
if(r==null)r=t.m.a(r)
r.save()
r.fillStyle=k.r
r.fillRect(0,0,s.width,s.height)
r.restore()}else{s=k.b
d=B.a.j(d,s)
r=k.c
c=B.a.j(c,r)
o=Math.abs(b)
n=Math.min(d+o,s)
m=Math.min(c+o,r)
for(o=k.x,q=d;q<n;++q){l=B.a.j(q,s)
for(p=c;p<m;++p)k.E(l,B.a.j(p,r),o,!1)}}k.a3()},
X(a){return this.aL(0,null,0,0,null)},
bj(a,b,c,d,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.a1()
s=e.W(a,b)
a=s.a
b=s.b
r=B.a.bn(1,a0)-1
for(q=a0-1,p=t.t,o=e.x,n=0;n<8;++n){m=c[n]
l=m&r
m=A.a([],p)
for(k=a+n,j=0;j<a0;++j){i=e.aQ(b+j,k)?1:0
m.push(B.a.O(i,q-j))}h=B.f.bt(m,0,new A.c4())
switch(a1){case B.m:for(j=0;j<a0;++j){m=b+j
if((B.a.v(l,q-j)&1)>0)e.F(k,m,d,o,!1)
else e.E(k,m,o,!1)}break
case B.dF:for(j=0;j<a0;++j){m=b+j
if((B.a.v(l,q-j)&1)>0)e.E(k,m,o,!1)
else e.F(k,m,d,o,!1)}break
case B.dH:for(j=0;j<a0;++j){g=q-j
if((B.a.v(l,g)&1)>0&&(B.a.aY(h,g)&1)===0)e.F(k,b+j,d,o,!1)}break
case B.dG:for(j=0;j<a0;++j)if((B.a.v(l,q-j)&1)>0)e.F(k,b+j,d,o,!1)
break
case B.dI:for(f=l&h,j=0;j<a0;++j)if((B.a.v(f,q-j)&1)>0)e.F(k,b+j,d,o,!1)
break
case B.dJ:for(f=l&h,j=0;j<a0;++j)if((B.a.v(f,q-j)&1)>0)e.E(k,b+j,o,!1)
break
case B.dK:for(f=l&h,j=0;j<a0;++j)if((B.a.v(f,q-j)&1)===0)e.E(k,b+j,o,!1)
break
case B.dL:for(f=l&h,j=0;j<a0;++j){m=b+j
if((B.a.v(f,q-j)&1)===0)e.E(k,m,o,!1)
else e.F(k,m,d,o,!1)}break}}e.a3()},
aR(a,b,c){this.bj(c.a,c.b,b,a,8,B.m,!0,!1,!1)},
aX(a){var s,r,q,p,o,n,m,l,k=this,j=k.b
a=B.a.j(a,j)
for(s=j-a,r=k.y,q=r.length,p=0;p<s;++p){if(!(p<q))return A.d(r,p)
o=p+a
n=0
for(;m=r[p],n<m.length;++n){if(!(o<q))return A.d(r,o)
l=r[o]
if(!(n<l.length))return A.d(l,n)
l=l[n]
m.$flags&2&&A.b5(m)
m[n]=l}}for(;p<j;++p){if(!(p<q))return A.d(r,p)
n=0
for(;o=r[p],n<o.length;++n){o.$flags&2&&A.b5(o)
o[n]=0}}k.a1()
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
k.a3()},
N(){var s=this.w
s.style.opacity="1.0"
s.focus()},
H(){var s=this.w
s.style.opacity="0.5"
s.blur()}}
A.c5.prototype={
$0(){this.a.z=!0},
$S:1}
A.c6.prototype={
$0(){this.a.z=!1},
$S:1}
A.c7.prototype={
$0(){this.a.N()},
$S:1}
A.c8.prototype={
$0(){this.a.H()},
$S:1}
A.c4.prototype={
$2(a,b){return(a|b)>>>0},
$S:17}
A.D.prototype={
aw(){return"Mode."+this.b}}
A.ab.prototype={
aw(){return"State."+this.b}}
A.cg.prototype={
b1(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=this,r=s.f
r.tabIndex=-1
r.onfocus=A.b1(new A.ch(s))
r.onblur=A.b1(new A.ci(s))
r.onkeydown=A.eh(new A.cj(s,l,new A.cn(),new A.cm(s)))
r.onclick=A.eh(new A.ck(s,new A.co(s),o))
A.fn(new A.bc(3e5),new A.cl(s))
s.H()
s.X(0)},
gad(){var s=this.w
s===$&&A.S()
return s.gad()},
gac(){var s=this.w
s===$&&A.S()
return s.gac()},
ab(a,b){return new A.A(B.a.j(a,this.a),B.a.j(b,this.b))},
aA(){var s=this,r=s.x
s.CW.G(0,new A.L(r.c,r.d," ","white"))
s.aH()
s.cy=!1},
aH(){var s,r,q,p,o,n,m,l,k,j
for(s=this.CW,r=A.fw(s,s.r,s.$ti.c),q=this.w,p=this.cx,o=r.$ti.c;r.B();){n=r.d
if(n==null)n=o.a(n)
m=n.a
l=n.b
if(p.L(n.c)){k=p.n(0,n.c)
k.toString
j=k}else j=$.eF()
q===$&&A.S()
q.aR(n.d,j,new A.A(m*10,l*8))}if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.aB()}},
am(a,b){var s,r=this.ab(b,a)
b=r.a
a=r.b
s=this.ch
if(!(b>=0&&b<s.length))return A.d(s,b)
s=s[b]
if(!(a>=0&&a<s.length))return A.d(s,a)
return s[a].c},
C(){var s,r=this.x
r.sI(0)
s=r.c
if(s===this.a-1)this.Z()
else r.c=B.a.j(s+1,r.a)},
Z(){var s,r,q,p,o,n,m,l,k=this
for(s=k.a-1,r=k.b,q=k.ch,p=0;p<s;p=o)for(o=p+1,n=0;n<r;++n){m=q.length
if(!(p<m))return A.d(q,p)
l=q[p]
if(!(n<l.length))return A.d(l,n)
l=l[n]
if(!(o<m))return A.d(q,o)
m=q[o]
if(!(n<m.length))return A.d(m,n)
m=m[n]
l.c=m.c
l.d=m.d}for(n=0;n<r;++n){if(!(s>=0&&s<q.length))return A.d(q,s)
m=q[s]
if(!(n<m.length))return A.d(m,n)
m=m[n]
m.c=" "
m.d="white"}s=k.w
s===$&&A.S()
s.aX(10)},
Y(a,b,c,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a1==null?f.x.c:a1,d=f.ab(e,c==null?f.x.d:c)
e=f.x
s=e.a
e.c=B.a.j(d.a,s)
e.sI(d.b)
if(b==null)b="white"
for(r=a.split(""),q=r.length,p=f.ch,o=f.CW,n=f.a-1,m=f.b-1,l=0;l<q;++l){k=r[l]
j=e.c
i=e.d
if(!(j>=0&&j<p.length))return A.d(p,j)
h=p[j]
if(!(i>=0&&i<h.length))return A.d(h,i)
g=h[i]
g.c=k
g.d=b
o.G(0,g)
if(j===n&&i===m){f.Z()
e.c=B.a.j(e.c-1,s)}e.sI(e.d+1)}f.aH()
if(a0)f.C()},
by(a,b,c){return this.Y(a,b,null,c,null)},
aj(a,b){return this.Y(a,null,null,b,null)},
D(a,b){return this.Y(a,b,null,!0,null)},
aP(a){return this.Y(a,null,null,!0,null)},
X(a){var s,r,q,p,o=this,n=o.b,m=o.a
for(s=o.ch,r=0;r<m;++r)for(q=0;q<n;++q){if(!(r<s.length))return A.d(s,r)
p=s[r]
if(!(q<p.length))return A.d(p,q)
p=p[q]
p.c=" "
p.d="white"}s=o.w
s===$&&A.S()
s.aL(0,m*10,0,0,n*8)
s=o.x
s.c=0%s.a
s.sI(0)},
N(){return this.gad().$0()},
H(){return this.gac().$0()}}
A.co.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.w
i===$&&A.S()
s=J.dM(a.offsetX)
r=Math.max(Math.min(B.a.u(J.dM(a.offsetY)-1,i.e),i.b-1),0)
q=Math.max(Math.min(B.a.u(s-1,i.d),i.c-1),0)
p=B.a.A(r,10)
o=B.a.A(q,8)
n=j.am(o,p)
m=j.ab(p,o)
l=m.a
k=m.b
j=j.ch
if(!(l>=0&&l<j.length))return A.d(j,l)
j=j[l]
if(!(k>=0&&k<j.length))return A.d(j,k)
return new A.a7(p,o,n,j[k].d,r,q,i.aQ(q,r))},
$S:18}
A.cn.prototype={
$1(a){return new A.a6()},
$S:19}
A.cm.prototype={
$0(){var s,r,q,p,o,n=this.a,m=n.a,l=n.b,k=new A.a9(m,l)
k.sp(n.y.gp())
s=A.a([],t.s)
for(r=n.z,q=r.b;p=k.c,o=k.d,p*l+o<r.c*q+r.d;p=k.c*l+k.d+1,k.c=B.a.j(B.a.u(p,l),m),k.d=B.a.j(p,l))s.push(n.am(o,p))
return B.f.bw(s,"")},
$S:20}
A.ch.prototype={
$0(){var s=this.a.w
s===$&&A.S()
s.N()},
$S:1}
A.ci.prototype={
$0(){var s=this.a.w
s===$&&A.S()
s.H()},
$S:1}
A.cj.prototype={
$1(a){var s,r,q,p
a.preventDefault()
s=this.a
switch(s.ay){case B.d:break
case B.dM:r=s.at
if(r.d!=null){r.G(0,this.c.$1(a))
s.ay=B.d}break
case B.i:s.aA()
$label0$1:{q=a.keyCode
if(13===q){r=s.as
if(r.d!=null){r.G(0,J.eT(this.d.$0()))
s.C()
s.ay=B.d}break $label0$1}if(8===q){r=s.x
if(r.gp()>s.y.gp()){r.sp(r.gp()-1)
s.aj(" ",!1)
r.sp(r.gp()-1)}break $label0$1}p=a.key
if(p.length===1&&s.x.gp()<s.z.gp())s.aj(p,!1)}break
case B.o:break}},
$S:6}
A.ck.prototype={
$1(a){var s
a.preventDefault()
s=this.a
if(s.ay===B.o&&s.ax.d!=null){s.ax.G(0,this.b.$1(a))
s.ay=B.d}},
$S:6}
A.cl.prototype={
$1(a){var s,r,q,p=this.a,o=p.w
o===$&&A.S()
if(o.z&&J.an(v.G.document.activeElement,o.w)&&p.ay===B.i)if(p.cy)p.aA()
else{s=p.x
r=s.c
s=s.d
q=$.eE()
o.aR("white",q,new A.A(r*10,s*8))
p.cy=!0}},
$S:21}
A.db.prototype={
$0(){var s,r,q=this.a
q.X(0)
for(s=[" ","  _____ _   _    _____     _           _"," :     : :_: :  :   __:___: :_ ___ ___: :"," :  :  : : . :  :__   :  _:   : . : . : :"," :_____:_:___:  :_____:___:_:_:___:___:_:"," "," Welcome to Old School, a library for adding"," old school terminals to your html documents."," "," Input 'help' for help."," "],r=0;r<11;++r)q.D(s[r],"lightgreen")},
$S:0}
A.d7.prototype={
$0(){var s,r,q
for(s=[" "," Commands"," --------"," "," reset        Resets this demo."," help         Shows this information."," list         Lists the demos available."," info [demo]  Gives a description of [demo]."," load [demo]  Loads [demo] into this page."," "],r=this.a,q=0;q<10;++q)r.D(s[q],"lightgreen")},
$S:0}
A.d9.prototype={
$0(){var s,r,q=t.s,p=A.a([" "," Demos"," -----"," "],q)
q=A.a([],q)
for(s=this.a,s=new A.bj(s,s.r,s.e);s.B();)q.push(" - "+s.d)
B.f.aI(p,q)
p.push(" ")
q=p.length
s=this.b
r=0
for(;r<p.length;p.length===q||(0,A.bT)(p),++r)s.D(p[r],"lightgreen")},
$S:0}
A.d8.prototype={
$1(a){var s,r,q,p,o=this.a
if(o.L(a)){s=t.s
r=A.a([" "],s)
s=A.a([],s)
for(o=o.n(0,a),q=o.length,p=0;p<o.length;o.length===q||(0,A.bT)(o),++p)s.push(" "+o[p])
B.f.aI(r,s)
r.push(" ")
o=r.length
s=this.b
p=0
for(;p<r.length;r.length===o||(0,A.bT)(r),++p)s.D(r[p],"lightgreen")}else{o=this.b
o.C()
o.D(" No demo called '"+a+"' found.","orange")
o.aP(" Input `list` to see available demos.")
o.C()}},
$S:7}
A.da.prototype={
$1(a){var s
if(this.a.L(a))v.G.window.open(a+".html","_self")
else{s=this.b
s.C()
s.D(" No demo called '"+a+"' found.","orange")
s.aP(" Input `list` to see available demos.")
s.C()}},
$S:7};(function aliases(){var s=J.N.prototype
s.b_=s.h})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._static_2,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u
s(A,"hE","fs",2)
s(A,"hF","ft",2)
s(A,"hG","fu",2)
r(A,"er","hy",0)
s(A,"hH","hs",4)
q(A,"hI","ht",5)
p(A.m.prototype,"gau","bb",5)
o(A.aM.prototype,"gbh","bi",0)
var n
o(n=A.by.prototype,"gad","N",0)
o(n,"gac","H",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.e,null)
q(A.e,[A.dk,J.bf,J.b7,A.j,A.T,A.c9,A.bk,A.ar,A.ag,A.bb,A.cq,A.c1,A.aq,A.aU,A.az,A.c_,A.bj,A.bY,A.cN,A.y,A.bK,A.bP,A.aW,A.bC,A.x,A.ad,A.bF,A.bE,A.P,A.m,A.bD,A.bI,A.bL,A.aM,A.bN,A.cW,A.aG,A.cM,A.af,A.l,A.bc,A.cy,A.bv,A.aH,A.cz,A.bX,A.t,A.bO,A.bz,A.L,A.a6,A.a7,A.a9,A.by,A.cg])
q(J.bf,[J.bg,J.at,J.av,J.au,J.aw,J.a5,J.U])
q(J.av,[J.N,J.o,A.bl,A.aC])
q(J.N,[J.bw,J.W,J.M])
r(J.bZ,J.o)
q(J.a5,[J.as,J.bh])
q(A.j,[A.ay,A.H,A.bi,A.bB,A.bx,A.bJ,A.b8,A.C,A.aI,A.bA,A.ac,A.ba])
q(A.T,[A.bU,A.bV,A.cf,A.d2,A.d4,A.cv,A.cu,A.cX,A.cJ,A.cd,A.cc,A.cR,A.co,A.cn,A.cj,A.ck,A.cl,A.d8,A.da])
q(A.bU,[A.dd,A.cw,A.cx,A.cT,A.cS,A.cA,A.cF,A.cE,A.cC,A.cB,A.cI,A.cH,A.cG,A.ce,A.cb,A.cO,A.cZ,A.d_,A.cQ,A.c5,A.c6,A.c7,A.c8,A.cm,A.ch,A.ci,A.db,A.d7,A.d9])
r(A.bM,A.ag)
r(A.A,A.bM)
r(A.bd,A.bb)
r(A.aE,A.H)
q(A.cf,[A.ca,A.ap])
r(A.V,A.az)
r(A.ax,A.V)
q(A.bV,[A.d3,A.cY,A.d0,A.cK,A.c0,A.c4])
q(A.aC,[A.bm,A.a8])
q(A.a8,[A.aO,A.aQ])
r(A.aP,A.aO)
r(A.aA,A.aP)
r(A.aR,A.aQ)
r(A.aB,A.aR)
q(A.aA,[A.bn,A.bo])
q(A.aB,[A.bp,A.bq,A.br,A.bs,A.bt,A.aD,A.bu])
r(A.aX,A.bJ)
r(A.aV,A.ad)
r(A.aL,A.aV)
r(A.ae,A.aL)
r(A.bG,A.bF)
r(A.aK,A.bG)
r(A.aJ,A.bE)
r(A.bH,A.bI)
r(A.cP,A.cW)
r(A.aT,A.aG)
r(A.aN,A.aT)
q(A.C,[A.aF,A.be])
q(A.cy,[A.D,A.ab])
s(A.aO,A.l)
s(A.aP,A.ar)
s(A.aQ,A.l)
s(A.aR,A.ar)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{b:"int",q:"double",ez:"num",u:"String",es:"bool",t:"Null",h:"List",e:"Object",i7:"Map"},mangledNames:{},types:["~()","t()","~(~())","t(@)","~(@)","~(e,z)","t(k)","~(u)","G<~>()","@(@)","@(@,u)","@(u)","t(~())","t(@,z)","~(b,@)","t(e,z)","~(e?,e?)","b(b,b)","a7(k)","a6(k)","u()","~(cp)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.A&&a.b(c.a)&&b.b(c.b)}}
A.fL(v.typeUniverse,JSON.parse('{"bw":"N","W":"N","M":"N","bg":{"f":[]},"at":{"f":[]},"av":{"k":[]},"N":{"k":[]},"o":{"h":["1"],"k":[]},"bZ":{"o":["1"],"h":["1"],"k":[]},"a5":{"q":[]},"as":{"q":[],"b":[],"f":[]},"bh":{"q":[],"f":[]},"U":{"u":[],"f":[]},"ay":{"j":[]},"aE":{"H":[],"j":[]},"bi":{"j":[]},"bB":{"j":[]},"aU":{"z":[]},"bx":{"j":[]},"V":{"az":["1","2"]},"ax":{"V":["1","2"],"az":["1","2"]},"bl":{"k":[],"f":[]},"aC":{"k":[]},"bm":{"k":[],"f":[]},"a8":{"v":["1"],"k":[]},"aA":{"l":["q"],"h":["q"],"v":["q"],"k":[]},"aB":{"l":["b"],"h":["b"],"v":["b"],"k":[]},"bn":{"l":["q"],"h":["q"],"v":["q"],"k":[],"f":[],"l.E":"q"},"bo":{"l":["q"],"h":["q"],"v":["q"],"k":[],"f":[],"l.E":"q"},"bp":{"l":["b"],"h":["b"],"v":["b"],"k":[],"f":[],"l.E":"b"},"bq":{"l":["b"],"h":["b"],"v":["b"],"k":[],"f":[],"l.E":"b"},"br":{"l":["b"],"h":["b"],"v":["b"],"k":[],"f":[],"l.E":"b"},"bs":{"l":["b"],"h":["b"],"v":["b"],"k":[],"f":[],"l.E":"b"},"bt":{"cs":[],"l":["b"],"h":["b"],"v":["b"],"k":[],"f":[],"l.E":"b"},"aD":{"l":["b"],"h":["b"],"v":["b"],"k":[],"f":[],"l.E":"b"},"bu":{"l":["b"],"h":["b"],"v":["b"],"k":[],"f":[],"l.E":"b"},"bJ":{"j":[]},"aX":{"H":[],"j":[]},"aW":{"cp":[]},"x":{"j":[]},"ae":{"ad":["1"]},"aJ":{"bE":["1"]},"m":{"G":["1"]},"aL":{"ad":["1"]},"aV":{"ad":["1"]},"aN":{"aG":["1"]},"aT":{"aG":["1"]},"b8":{"j":[]},"H":{"j":[]},"C":{"j":[]},"aF":{"j":[]},"be":{"j":[]},"aI":{"j":[]},"bA":{"j":[]},"ac":{"j":[]},"ba":{"j":[]},"bv":{"j":[]},"aH":{"j":[]},"bO":{"z":[]},"f7":{"h":["b"]},"fq":{"h":["b"]},"fp":{"h":["b"]},"f5":{"h":["b"]},"fo":{"h":["b"]},"f6":{"h":["b"]},"cs":{"h":["b"]},"f2":{"h":["q"]},"f3":{"h":["q"]}}'))
A.fK(v.typeUniverse,JSON.parse('{"ar":1,"bb":2,"bj":1,"a8":1,"aL":1,"bG":1,"bF":1,"aV":1,"bI":1,"bH":1,"bL":1,"aM":1,"bN":1,"aT":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.dF
return{o:s("L"),Q:s("j"),Z:s("i5"),U:s("o<L>"),G:s("o<h<L>>"),f:s("o<e>"),s:s("o<u>"),w:s("o<cs>"),b:s("o<@>"),t:s("o<b>"),T:s("at"),m:s("k"),g:s("M"),p:s("v<@>"),V:s("a6"),a:s("h<u>"),j:s("h<@>"),q:s("a7"),P:s("t"),K:s("e"),L:s("i8"),F:s("+()"),l:s("z"),N:s("u"),E:s("cp"),R:s("f"),_:s("H"),A:s("W"),c:s("m<@>"),h:s("m<b>"),D:s("m<~>"),y:s("es"),i:s("q"),z:s("@"),v:s("@(e)"),C:s("@(e,z)"),S:s("b"),O:s("G<t>?"),X:s("e?"),x:s("u?"),u:s("es?"),I:s("q?"),B:s("b?"),J:s("ez?"),H:s("ez"),n:s("~"),d:s("~(e)"),k:s("~(e,z)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.x=J.bf.prototype
B.f=J.o.prototype
B.a=J.as.prototype
B.y=J.a5.prototype
B.h=J.U.prototype
B.z=J.M.prototype
B.A=J.av.prototype
B.n=J.bw.prototype
B.j=J.W.prototype
B.k=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.p=function() {
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
B.v=function(getTagFallback) {
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
B.q=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.u=function(hooks) {
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
B.t=function(hooks) {
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
B.r=function(hooks) {
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

B.w=new A.bv()
B.c=new A.c9()
B.b=new A.cP()
B.e=new A.bO()
B.d_=A.a(s([126,129,165,129,189,153,129,126]),t.t)
B.a1=A.a(s([126,255,219,255,195,231,255,126]),t.t)
B.dw=A.a(s([108,254,254,254,124,56,16,0]),t.t)
B.bX=A.a(s([16,56,124,254,124,56,16,0]),t.t)
B.aV=A.a(s([56,124,56,254,254,124,56,124]),t.t)
B.b6=A.a(s([16,16,56,124,254,124,56,124]),t.t)
B.ap=A.a(s([0,0,24,60,60,24,0,0]),t.t)
B.as=A.a(s([255,255,231,195,195,231,255,255]),t.t)
B.aE=A.a(s([0,60,102,66,66,102,60,0]),t.t)
B.cK=A.a(s([255,195,153,189,189,153,195,255]),t.t)
B.dv=A.a(s([15,7,15,125,204,204,204,120]),t.t)
B.du=A.a(s([60,102,102,102,60,24,126,24]),t.t)
B.cH=A.a(s([63,51,63,48,48,112,240,224]),t.t)
B.L=A.a(s([127,99,127,99,99,103,230,192]),t.t)
B.Q=A.a(s([153,90,60,231,231,60,90,153]),t.t)
B.am=A.a(s([128,224,248,254,248,224,128,0]),t.t)
B.bs=A.a(s([2,14,62,254,62,14,2,0]),t.t)
B.ca=A.a(s([24,60,126,24,24,126,60,24]),t.t)
B.c6=A.a(s([102,102,102,102,102,0,102,0]),t.t)
B.cg=A.a(s([127,219,219,123,27,27,27,0]),t.t)
B.ch=A.a(s([62,99,56,108,108,56,204,120]),t.t)
B.bG=A.a(s([0,0,0,0,126,126,126,0]),t.t)
B.bJ=A.a(s([24,60,126,24,126,60,24,255]),t.t)
B.G=A.a(s([24,60,126,24,24,24,24,0]),t.t)
B.d4=A.a(s([24,24,24,24,126,60,24,0]),t.t)
B.cY=A.a(s([0,24,12,254,12,24,0,0]),t.t)
B.aj=A.a(s([0,48,96,254,96,48,0,0]),t.t)
B.bO=A.a(s([0,0,192,192,192,254,0,0]),t.t)
B.bl=A.a(s([0,36,102,255,102,36,0,0]),t.t)
B.a_=A.a(s([0,24,60,126,255,255,0,0]),t.t)
B.bK=A.a(s([0,255,255,126,60,24,0,0]),t.t)
B.aQ=A.a(s([0,0,0,0,0,0,0,0]),t.t)
B.bt=A.a(s([48,120,120,48,48,0,48,0]),t.t)
B.O=A.a(s([108,108,108,0,0,0,0,0]),t.t)
B.ad=A.a(s([108,108,254,108,254,108,108,0]),t.t)
B.bS=A.a(s([48,124,192,120,12,248,48,0]),t.t)
B.F=A.a(s([0,198,204,24,48,102,198,0]),t.t)
B.ct=A.a(s([56,108,56,118,220,204,118,0]),t.t)
B.ac=A.a(s([96,96,192,0,0,0,0,0]),t.t)
B.K=A.a(s([24,48,96,96,96,48,24,0]),t.t)
B.bp=A.a(s([96,48,24,24,24,48,96,0]),t.t)
B.ck=A.a(s([0,102,60,255,60,102,0,0]),t.t)
B.dD=A.a(s([0,48,48,252,48,48,0,0]),t.t)
B.bU=A.a(s([0,0,0,0,0,48,48,96]),t.t)
B.bk=A.a(s([0,0,0,252,0,0,0,0]),t.t)
B.c8=A.a(s([0,0,0,0,0,48,48,0]),t.t)
B.V=A.a(s([6,12,24,48,96,192,128,0]),t.t)
B.aY=A.a(s([124,198,206,222,246,230,124,0]),t.t)
B.cb=A.a(s([48,112,48,48,48,48,252,0]),t.t)
B.bQ=A.a(s([120,204,12,56,96,204,252,0]),t.t)
B.dy=A.a(s([120,204,12,56,12,204,120,0]),t.t)
B.br=A.a(s([28,60,108,204,254,12,30,0]),t.t)
B.cZ=A.a(s([252,192,248,12,12,204,120,0]),t.t)
B.df=A.a(s([56,96,192,248,204,204,120,0]),t.t)
B.bR=A.a(s([252,204,12,24,48,48,48,0]),t.t)
B.cn=A.a(s([120,204,204,120,204,204,120,0]),t.t)
B.b4=A.a(s([120,204,204,124,12,24,112,0]),t.t)
B.cS=A.a(s([0,48,48,0,0,48,48,0]),t.t)
B.aH=A.a(s([0,48,48,0,0,48,48,96]),t.t)
B.bq=A.a(s([24,48,96,192,96,48,24,0]),t.t)
B.bf=A.a(s([0,0,252,0,0,252,0,0]),t.t)
B.ar=A.a(s([96,48,24,12,24,48,96,0]),t.t)
B.ah=A.a(s([120,204,12,24,48,0,48,0]),t.t)
B.db=A.a(s([124,198,222,222,222,192,120,0]),t.t)
B.c2=A.a(s([48,120,204,204,252,204,204,0]),t.t)
B.aB=A.a(s([252,102,102,124,102,102,252,0]),t.t)
B.a3=A.a(s([60,102,192,192,192,102,60,0]),t.t)
B.W=A.a(s([248,108,102,102,102,108,248,0]),t.t)
B.a9=A.a(s([254,98,104,120,104,98,254,0]),t.t)
B.ce=A.a(s([254,98,104,120,104,96,240,0]),t.t)
B.af=A.a(s([60,102,192,192,206,102,62,0]),t.t)
B.ai=A.a(s([204,204,204,252,204,204,204,0]),t.t)
B.cC=A.a(s([120,48,48,48,48,48,120,0]),t.t)
B.bE=A.a(s([30,12,12,12,204,204,120,0]),t.t)
B.bw=A.a(s([230,102,108,120,108,102,230,0]),t.t)
B.bv=A.a(s([240,96,96,96,98,102,254,0]),t.t)
B.aC=A.a(s([198,238,254,254,214,198,198,0]),t.t)
B.N=A.a(s([198,230,246,222,206,198,198,0]),t.t)
B.cM=A.a(s([56,108,198,198,198,108,56,0]),t.t)
B.ba=A.a(s([252,102,102,124,96,96,240,0]),t.t)
B.cw=A.a(s([120,204,204,204,220,120,28,0]),t.t)
B.E=A.a(s([252,102,102,124,108,102,230,0]),t.t)
B.a6=A.a(s([120,204,224,112,28,204,120,0]),t.t)
B.dp=A.a(s([252,180,48,48,48,48,120,0]),t.t)
B.az=A.a(s([204,204,204,204,204,204,252,0]),t.t)
B.S=A.a(s([204,204,204,204,204,120,48,0]),t.t)
B.cF=A.a(s([198,198,198,214,254,238,198,0]),t.t)
B.cz=A.a(s([198,198,108,56,56,108,198,0]),t.t)
B.U=A.a(s([204,204,204,120,48,48,120,0]),t.t)
B.I=A.a(s([254,198,140,24,50,102,254,0]),t.t)
B.bm=A.a(s([120,96,96,96,96,96,120,0]),t.t)
B.cr=A.a(s([192,96,48,24,12,6,2,0]),t.t)
B.bo=A.a(s([120,24,24,24,24,24,120,0]),t.t)
B.de=A.a(s([16,56,108,198,0,0,0,0]),t.t)
B.D=A.a(s([0,0,0,0,0,0,0,255]),t.t)
B.aA=A.a(s([48,48,24,0,0,0,0,0]),t.t)
B.d5=A.a(s([0,0,120,12,124,204,118,0]),t.t)
B.c5=A.a(s([224,96,96,124,102,102,220,0]),t.t)
B.cy=A.a(s([0,0,120,204,192,204,120,0]),t.t)
B.aW=A.a(s([28,12,12,124,204,204,118,0]),t.t)
B.dh=A.a(s([0,0,120,204,252,192,120,0]),t.t)
B.aF=A.a(s([56,108,96,240,96,96,240,0]),t.t)
B.cv=A.a(s([0,0,118,204,204,124,12,248]),t.t)
B.aq=A.a(s([224,96,108,118,102,102,230,0]),t.t)
B.cl=A.a(s([48,0,112,48,48,48,120,0]),t.t)
B.bz=A.a(s([12,0,12,12,12,204,204,120]),t.t)
B.b2=A.a(s([224,96,102,108,120,108,230,0]),t.t)
B.bB=A.a(s([112,48,48,48,48,48,120,0]),t.t)
B.bj=A.a(s([0,0,204,254,254,214,198,0]),t.t)
B.bC=A.a(s([0,0,248,204,204,204,204,0]),t.t)
B.b5=A.a(s([0,0,120,204,204,204,120,0]),t.t)
B.dl=A.a(s([0,0,220,102,102,124,96,240]),t.t)
B.di=A.a(s([0,0,118,204,204,124,12,30]),t.t)
B.bg=A.a(s([0,0,220,118,102,96,240,0]),t.t)
B.cP=A.a(s([0,0,124,192,120,12,248,0]),t.t)
B.cI=A.a(s([16,48,124,48,48,52,24,0]),t.t)
B.c_=A.a(s([0,0,204,204,204,204,118,0]),t.t)
B.aU=A.a(s([0,0,204,204,204,120,48,0]),t.t)
B.b9=A.a(s([0,0,198,214,254,254,108,0]),t.t)
B.bx=A.a(s([0,0,198,108,56,108,198,0]),t.t)
B.ds=A.a(s([0,0,204,204,204,124,12,248]),t.t)
B.d3=A.a(s([0,0,252,152,48,100,252,0]),t.t)
B.b_=A.a(s([28,48,48,224,48,48,28,0]),t.t)
B.cO=A.a(s([24,24,24,0,24,24,24,0]),t.t)
B.au=A.a(s([224,48,48,28,48,48,224,0]),t.t)
B.dC=A.a(s([118,220,0,0,0,0,0,0]),t.t)
B.aT=A.a(s([0,16,56,108,198,198,254,0]),t.t)
B.al=A.a(s([120,204,192,204,120,24,12,120]),t.t)
B.d1=A.a(s([0,204,0,204,204,204,126,0]),t.t)
B.dr=A.a(s([28,0,120,204,252,192,120,0]),t.t)
B.bT=A.a(s([126,195,60,6,62,102,63,0]),t.t)
B.a8=A.a(s([204,0,120,12,124,204,126,0]),t.t)
B.aX=A.a(s([224,0,120,12,124,204,126,0]),t.t)
B.Z=A.a(s([48,48,120,12,124,204,126,0]),t.t)
B.bc=A.a(s([0,0,120,192,192,120,12,56]),t.t)
B.da=A.a(s([126,195,60,102,126,96,60,0]),t.t)
B.aD=A.a(s([204,0,120,204,252,192,120,0]),t.t)
B.cQ=A.a(s([224,0,120,204,252,192,120,0]),t.t)
B.d2=A.a(s([204,0,112,48,48,48,120,0]),t.t)
B.cG=A.a(s([124,198,56,24,24,24,60,0]),t.t)
B.aP=A.a(s([224,0,112,48,48,48,120,0]),t.t)
B.dx=A.a(s([198,56,108,198,254,198,198,0]),t.t)
B.cN=A.a(s([48,48,0,120,204,252,204,0]),t.t)
B.bu=A.a(s([28,0,252,96,120,96,252,0]),t.t)
B.dq=A.a(s([0,0,127,12,127,204,127,0]),t.t)
B.aI=A.a(s([62,108,204,254,204,204,206,0]),t.t)
B.dj=A.a(s([120,204,0,120,204,204,120,0]),t.t)
B.a4=A.a(s([0,204,0,120,204,204,120,0]),t.t)
B.dz=A.a(s([0,224,0,120,204,204,120,0]),t.t)
B.aG=A.a(s([120,204,0,204,204,204,126,0]),t.t)
B.cJ=A.a(s([0,224,0,204,204,204,126,0]),t.t)
B.ao=A.a(s([0,204,0,204,204,124,12,248]),t.t)
B.aa=A.a(s([195,24,60,102,102,60,24,0]),t.t)
B.cW=A.a(s([204,0,204,204,204,204,120,0]),t.t)
B.P=A.a(s([24,24,126,192,192,126,24,24]),t.t)
B.ax=A.a(s([56,108,100,240,96,230,252,0]),t.t)
B.aR=A.a(s([204,204,120,252,48,252,48,48]),t.t)
B.d6=A.a(s([248,204,204,250,198,207,198,199]),t.t)
B.bF=A.a(s([14,27,24,60,24,24,216,112]),t.t)
B.at=A.a(s([28,0,120,12,124,204,126,0]),t.t)
B.c4=A.a(s([56,0,112,48,48,48,120,0]),t.t)
B.aw=A.a(s([0,28,0,120,204,204,120,0]),t.t)
B.co=A.a(s([0,28,0,204,204,204,126,0]),t.t)
B.aM=A.a(s([0,248,0,248,204,204,204,0]),t.t)
B.cE=A.a(s([252,0,204,236,252,220,204,0]),t.t)
B.a5=A.a(s([60,108,108,62,0,126,0,0]),t.t)
B.c1=A.a(s([56,108,108,56,0,124,0,0]),t.t)
B.cX=A.a(s([48,0,48,96,192,204,120,0]),t.t)
B.aO=A.a(s([0,0,0,252,192,192,0,0]),t.t)
B.av=A.a(s([0,0,0,252,12,12,0,0]),t.t)
B.cR=A.a(s([195,198,204,222,51,102,204,15]),t.t)
B.an=A.a(s([195,198,204,219,55,111,207,3]),t.t)
B.bI=A.a(s([24,24,0,24,24,24,24,0]),t.t)
B.bH=A.a(s([0,51,102,204,102,51,0,0]),t.t)
B.b1=A.a(s([0,204,102,51,102,204,0,0]),t.t)
B.cq=A.a(s([34,136,34,136,34,136,34,136]),t.t)
B.dk=A.a(s([85,170,85,170,85,170,85,170]),t.t)
B.bA=A.a(s([219,119,219,238,219,119,219,238]),t.t)
B.aS=A.a(s([24,24,24,24,24,24,24,24]),t.t)
B.aN=A.a(s([24,24,24,24,248,24,24,24]),t.t)
B.bP=A.a(s([24,24,248,24,248,24,24,24]),t.t)
B.dB=A.a(s([54,54,54,54,246,54,54,54]),t.t)
B.cc=A.a(s([0,0,0,0,254,54,54,54]),t.t)
B.aJ=A.a(s([0,0,248,24,248,24,24,24]),t.t)
B.a2=A.a(s([54,54,246,6,246,54,54,54]),t.t)
B.ci=A.a(s([54,54,54,54,54,54,54,54]),t.t)
B.c0=A.a(s([0,0,254,6,246,54,54,54]),t.t)
B.cm=A.a(s([54,54,246,6,254,0,0,0]),t.t)
B.ag=A.a(s([54,54,54,54,254,0,0,0]),t.t)
B.T=A.a(s([24,24,248,24,248,0,0,0]),t.t)
B.Y=A.a(s([0,0,0,0,248,24,24,24]),t.t)
B.R=A.a(s([24,24,24,24,31,0,0,0]),t.t)
B.bN=A.a(s([24,24,24,24,255,0,0,0]),t.t)
B.be=A.a(s([0,0,0,0,255,24,24,24]),t.t)
B.cV=A.a(s([24,24,24,24,31,24,24,24]),t.t)
B.bL=A.a(s([0,0,0,0,255,0,0,0]),t.t)
B.cj=A.a(s([24,24,24,24,255,24,24,24]),t.t)
B.cu=A.a(s([24,24,31,24,31,24,24,24]),t.t)
B.b3=A.a(s([54,54,54,54,55,54,54,54]),t.t)
B.dg=A.a(s([54,54,55,48,63,0,0,0]),t.t)
B.d9=A.a(s([0,0,63,48,55,54,54,54]),t.t)
B.by=A.a(s([54,54,247,0,255,0,0,0]),t.t)
B.bn=A.a(s([0,0,255,0,247,54,54,54]),t.t)
B.aL=A.a(s([54,54,55,48,55,54,54,54]),t.t)
B.aK=A.a(s([0,0,255,0,255,0,0,0]),t.t)
B.dt=A.a(s([54,54,247,0,247,54,54,54]),t.t)
B.cA=A.a(s([24,24,255,0,255,0,0,0]),t.t)
B.B=A.a(s([54,54,54,54,255,0,0,0]),t.t)
B.dm=A.a(s([0,0,255,0,255,24,24,24]),t.t)
B.bV=A.a(s([0,0,0,0,255,54,54,54]),t.t)
B.cd=A.a(s([54,54,54,54,63,0,0,0]),t.t)
B.bi=A.a(s([24,24,31,24,31,0,0,0]),t.t)
B.c7=A.a(s([0,0,31,24,31,24,24,24]),t.t)
B.cx=A.a(s([0,0,0,0,63,54,54,54]),t.t)
B.cD=A.a(s([54,54,54,54,255,54,54,54]),t.t)
B.bD=A.a(s([24,24,255,24,255,24,24,24]),t.t)
B.d7=A.a(s([24,24,24,24,248,0,0,0]),t.t)
B.aZ=A.a(s([0,0,0,0,31,24,24,24]),t.t)
B.bW=A.a(s([255,255,255,255,255,255,255,255]),t.t)
B.bZ=A.a(s([0,0,0,0,255,255,255,255]),t.t)
B.b8=A.a(s([240,240,240,240,240,240,240,240]),t.t)
B.cf=A.a(s([15,15,15,15,15,15,15,15]),t.t)
B.cU=A.a(s([255,255,255,255,0,0,0,0]),t.t)
B.dA=A.a(s([0,0,118,220,200,220,118,0]),t.t)
B.dc=A.a(s([0,120,204,248,204,248,192,192]),t.t)
B.ae=A.a(s([0,252,204,192,192,192,192,0]),t.t)
B.bY=A.a(s([0,254,108,108,108,108,108,0]),t.t)
B.d8=A.a(s([252,204,96,48,96,204,252,0]),t.t)
B.bb=A.a(s([0,0,126,216,216,216,112,0]),t.t)
B.bh=A.a(s([0,102,102,102,102,124,96,192]),t.t)
B.cs=A.a(s([0,118,220,24,24,24,24,0]),t.t)
B.a7=A.a(s([252,48,120,204,204,120,48,252]),t.t)
B.ay=A.a(s([56,108,198,254,198,108,56,0]),t.t)
B.ab=A.a(s([56,108,198,198,108,108,238,0]),t.t)
B.C=A.a(s([28,48,24,124,204,204,120,0]),t.t)
B.dn=A.a(s([0,0,126,219,219,126,0,0]),t.t)
B.bd=A.a(s([6,12,126,219,219,126,96,192]),t.t)
B.a0=A.a(s([56,96,192,248,192,96,56,0]),t.t)
B.c9=A.a(s([120,204,204,204,204,204,204,0]),t.t)
B.cB=A.a(s([0,252,0,252,0,252,0,0]),t.t)
B.X=A.a(s([48,48,252,48,48,0,252,0]),t.t)
B.b0=A.a(s([96,48,24,48,96,0,252,0]),t.t)
B.cL=A.a(s([24,48,96,48,24,0,252,0]),t.t)
B.b7=A.a(s([14,27,27,24,24,24,24,24]),t.t)
B.d0=A.a(s([24,24,24,24,24,216,216,112]),t.t)
B.c3=A.a(s([48,48,0,252,0,48,48,0]),t.t)
B.H=A.a(s([0,118,220,0,118,220,0,0]),t.t)
B.cp=A.a(s([56,108,108,56,0,0,0,0]),t.t)
B.J=A.a(s([0,0,0,24,24,0,0,0]),t.t)
B.dd=A.a(s([0,0,0,0,24,0,0,0]),t.t)
B.M=A.a(s([15,12,12,12,236,108,60,28]),t.t)
B.bM=A.a(s([120,108,108,108,108,0,0,0]),t.t)
B.ak=A.a(s([112,24,48,96,120,0,0,0]),t.t)
B.cT=A.a(s([0,0,60,60,60,60,0,0]),t.t)
B.dE=new A.bd(["\u263a",B.d_,"\u263b",B.a1,"\u2665",B.dw,"\u2666",B.bX,"\u2663",B.aV,"\u2660",B.b6,"\u2022",B.ap,"\u25d8",B.as,"\u25cb",B.aE,"\u25d9",B.cK,"\u2642",B.dv,"\u2640",B.du,"\u266a",B.cH,"\u266b",B.L,"\u263c",B.Q,"\u25ba",B.am,"\u25c4",B.bs,"\u2195",B.ca,"\u203c",B.c6,"\xb6",B.cg,"\xa7",B.ch,"\u25ac",B.bG,"\u21a8",B.bJ,"\u2191",B.G,"\u2193",B.d4,"\u2192",B.cY,"\u2190",B.aj,"\u221f",B.bO,"\u2194",B.bl,"\u25b2",B.a_,"\u25bc",B.bK," ",B.aQ,"!",B.bt,'"',B.O,"#",B.ad,"$",B.bS,"%",B.F,"&",B.ct,"'",B.ac,"(",B.K,")",B.bp,"*",B.ck,"+",B.dD,",",B.bU,"-",B.bk,".",B.c8,"/",B.V,"0",B.aY,"1",B.cb,"2",B.bQ,"3",B.dy,"4",B.br,"5",B.cZ,"6",B.df,"7",B.bR,"8",B.cn,"9",B.b4,":",B.cS,";",B.aH,"<",B.bq,"=",B.bf,">",B.ar,"?",B.ah,"@",B.db,"A",B.c2,"B",B.aB,"C",B.a3,"D",B.W,"E",B.a9,"F",B.ce,"G",B.af,"H",B.ai,"I",B.cC,"J",B.bE,"K",B.bw,"L",B.bv,"M",B.aC,"N",B.N,"O",B.cM,"P",B.ba,"Q",B.cw,"R",B.E,"S",B.a6,"T",B.dp,"U",B.az,"V",B.S,"W",B.cF,"X",B.cz,"Y",B.U,"Z",B.I,"[",B.bm,"\\",B.cr,"]",B.bo,"^",B.de,"_",B.D,"`",B.aA,"a",B.d5,"b",B.c5,"c",B.cy,"d",B.aW,"e",B.dh,"f",B.aF,"g",B.cv,"h",B.aq,"i",B.cl,"j",B.bz,"k",B.b2,"l",B.bB,"m",B.bj,"n",B.bC,"o",B.b5,"p",B.dl,"q",B.di,"r",B.bg,"s",B.cP,"t",B.cI,"u",B.c_,"v",B.aU,"w",B.b9,"x",B.bx,"y",B.ds,"z",B.d3,"{",B.b_,"|",B.cO,"}",B.au,"~",B.dC,"\u2302",B.aT,"\xc7",B.al,"\xfc",B.d1,"\xe9",B.dr,"\xe2",B.bT,"\xe4",B.a8,"\xe0",B.aX,"\xe5",B.Z,"\xe7",B.bc,"\xea",B.da,"\xeb",B.aD,"\xe8",B.cQ,"\xef",B.d2,"\xee",B.cG,"\xec",B.aP,"\xc4",B.dx,"\xc5",B.cN,"\xc9",B.bu,"\xe6",B.dq,"\xc6",B.aI,"\xf4",B.dj,"\xf6",B.a4,"\xf2",B.dz,"\xfb",B.aG,"\xf9",B.cJ,"\xff",B.ao,"\xd6",B.aa,"\xdc",B.cW,"\xa2",B.P,"\xa3",B.ax,"\xa5",B.aR,"\u20a7",B.d6,"\u0192",B.bF,"\xe1",B.at,"\xed",B.c4,"\xf3",B.aw,"\xfa",B.co,"\xf1",B.aM,"\xd1",B.cE,"\xaa",B.a5,"\xba",B.c1,"\xbf",B.cX,"\u2310",B.aO,"\xac",B.av,"\xbd",B.cR,"\xbc",B.an,"\xa1",B.bI,"\xab",B.bH,"\xbb",B.b1,"\u2591",B.cq,"\u2592",B.dk,"\u2593",B.bA,"\u2502",B.aS,"\u2524",B.aN,"\u2561",B.bP,"\u2562",B.dB,"\u2556",B.cc,"\u2555",B.aJ,"\u2563",B.a2,"\u2551",B.ci,"\u2557",B.c0,"\u255d",B.cm,"\u255c",B.ag,"\u255b",B.T,"\u2510",B.Y,"\u2514",B.R,"\u2534",B.bN,"\u252c",B.be,"\u251c",B.cV,"\u2500",B.bL,"\u253c",B.cj,"\u255e",B.cu,"\u255f",B.b3,"\u255a",B.dg,"\u2554",B.d9,"\u2569",B.by,"\u2566",B.bn,"\u2560",B.aL,"\u2550",B.aK,"\u256c",B.dt,"\u2567",B.cA,"\u2568",B.B,"\u2564",B.dm,"\u2565",B.bV,"\u2559",B.cd,"\u2558",B.bi,"\u2552",B.c7,"\u2553",B.cx,"\u256b",B.cD,"\u256a",B.bD,"\u2518",B.d7,"\u250c",B.aZ,"\u2588",B.bW,"\u2584",B.bZ,"\u258c",B.b8,"\u2590",B.cf,"\u2580",B.cU,"\u03b1",B.dA,"\xdf",B.dc,"\u0393",B.ae,"\u03c0",B.bY,"\u03a3",B.d8,"\u03c3",B.bb,"\xb5",B.bh,"\u03c4",B.cs,"\u03a6",B.a7,"\u0398",B.ay,"\u03a9",B.ab,"\u03b4",B.C,"\u221e",B.dn,"\u03c6",B.bd,"\u03b5",B.a0,"\u2229",B.c9,"\u2261",B.cB,"\xb1",B.X,"\u2265",B.b0,"\u2264",B.cL,"\u2320",B.b7,"\u2321",B.d0,"\xf7",B.c3,"\u2248",B.H,"\xb0",B.cp,"\u2219",B.J,"\xb7",B.dd,"\u221a",B.M,"\u207f",B.bM,"\xb2",B.ak,"\u25a0",B.cT],A.dF("bd<u,h<b>>"))
B.m=new A.D("replace")
B.dF=new A.D("inverse")
B.dG=new A.D("over")
B.dH=new A.D("under")
B.dI=new A.D("stain")
B.dJ=new A.D("delete")
B.dK=new A.D("maskDestination")
B.dL=new A.D("maskSource")
B.d=new A.ab("ready")
B.dM=new A.ab("awaitingKey")
B.i=new A.ab("awaitingString")
B.o=new A.ab("awaitingMouseClick")
B.dN=A.B("i2")
B.dO=A.B("i3")
B.dP=A.B("f2")
B.dQ=A.B("f3")
B.dR=A.B("f5")
B.dS=A.B("f6")
B.dT=A.B("f7")
B.dU=A.B("e")
B.dV=A.B("fo")
B.dW=A.B("cs")
B.dX=A.B("fp")
B.dY=A.B("fq")})();(function staticFields(){$.cL=null
$.K=A.a([],t.f)
$.dV=null
$.dQ=null
$.dP=null
$.ex=null
$.eq=null
$.eB=null
$.d1=null
$.d5=null
$.dH=null
$.aS=A.a([],A.dF("o<h<e>?>"))
$.ah=null
$.b2=null
$.b3=null
$.dA=!1
$.i=B.b})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"i4","df",()=>A.hQ("_$dart_dartClosure"))
s($,"ir","eQ",()=>B.b.aS(new A.dd()))
s($,"ic","eG",()=>A.I(A.cr({
toString:function(){return"$receiver$"}})))
s($,"id","eH",()=>A.I(A.cr({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"ie","eI",()=>A.I(A.cr(null)))
s($,"ig","eJ",()=>A.I(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"ij","eM",()=>A.I(A.cr(void 0)))
s($,"ik","eN",()=>A.I(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"ii","eL",()=>A.I(A.e_(null)))
s($,"ih","eK",()=>A.I(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"im","eP",()=>A.I(A.e_(void 0)))
s($,"il","eO",()=>A.I(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"io","dK",()=>A.fr())
s($,"i6","dg",()=>$.eQ())
s($,"ip","dh",()=>A.dJ(B.dU))
s($,"ib","eF",()=>A.dm(8,0,t.S))
s($,"ia","eE",()=>A.dm(8,255,t.S))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.bl,ArrayBufferView:A.aC,DataView:A.bm,Float32Array:A.bn,Float64Array:A.bo,Int16Array:A.bp,Int32Array:A.bq,Int8Array:A.br,Uint16Array:A.bs,Uint32Array:A.bt,Uint8ClampedArray:A.aD,CanvasPixelArray:A.aD,Uint8Array:A.bu})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.a8.$nativeSuperclassTag="ArrayBufferView"
A.aO.$nativeSuperclassTag="ArrayBufferView"
A.aP.$nativeSuperclassTag="ArrayBufferView"
A.aA.$nativeSuperclassTag="ArrayBufferView"
A.aQ.$nativeSuperclassTag="ArrayBufferView"
A.aR.$nativeSuperclassTag="ArrayBufferView"
A.aB.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.d6
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=index.js.map
