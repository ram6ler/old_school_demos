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
if(a[b]!==s){A.hv(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.dm(b)
return new s(c,this)}:function(){if(s===null)s=A.dm(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.dm(a).prototype
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
dr(a,b,c,d){return{i:a,p:b,e:c,x:d}},
dp(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.dq==null){A.hk()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.b(A.dN("Return interceptor for "+A.q(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.cB
if(o==null)o=$.cB=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.hp(a)
if(p!=null)return p
if(typeof a=="function")return B.K
s=Object.getPrototypeOf(a)
if(s==null)return B.x
if(s===Object.prototype)return B.x
if(typeof q=="function"){o=$.cB
if(o==null)o=$.cB=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.q,enumerable:false,writable:true,configurable:true})
return B.q}return B.q},
a0(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ao.prototype
return J.bb.prototype}if(typeof a=="string")return J.a4.prototype
if(a==null)return J.ap.prototype
if(typeof a=="boolean")return J.ba.prototype
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.N.prototype
if(typeof a=="symbol")return J.as.prototype
if(typeof a=="bigint")return J.aq.prototype
return a}if(a instanceof A.h)return a
return J.dp(a)},
eg(a){if(typeof a=="string")return J.a4.prototype
if(a==null)return a
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.N.prototype
if(typeof a=="symbol")return J.as.prototype
if(typeof a=="bigint")return J.aq.prototype
return a}if(a instanceof A.h)return a
return J.dp(a)},
he(a){if(a==null)return a
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.N.prototype
if(typeof a=="symbol")return J.as.prototype
if(typeof a=="bigint")return J.aq.prototype
return a}if(a instanceof A.h)return a
return J.dp(a)},
hf(a){if(typeof a=="number")return J.a3.prototype
if(a==null)return a
if(!(a instanceof A.h))return J.ac.prototype
return a},
W(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.a0(a).u(a,b)},
E(a){return J.a0(a).gj(a)},
eB(a){return J.he(a).gae(a)},
dv(a){return J.eg(a).gm(a)},
eC(a){return J.a0(a).gl(a)},
dw(a){return J.hf(a).bt(a)},
aZ(a){return J.a0(a).h(a)},
b9:function b9(){},
ba:function ba(){},
ap:function ap(){},
ar:function ar(){},
P:function P(){},
bp:function bp(){},
ac:function ac(){},
N:function N(){},
aq:function aq(){},
as:function as(){},
o:function o(a){this.$ti=a},
bN:function bN(a){this.$ti=a},
b0:function b0(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
a3:function a3(){},
ao:function ao(){},
bb:function bb(){},
a4:function a4(){}},A={d2:function d2(){},
R(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
d9(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
dJ(a,b,c){return A.d9(A.R(A.R(c,a),b))},
dl(a,b,c){return a},
ek(a){var s,r
for(s=$.L.length,r=0;r<s;++r)if(a===$.L[r])return!0
return!1},
dE(){return new A.bs("No element")},
a5:function a5(a){this.a=a},
bY:function bY(){},
bd:function bd(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
an:function an(){},
eo(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
i8(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.E.b(a)},
q(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.aZ(a)
return s},
aB(a){var s,r=$.dF
if(r==null)r=$.dF=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
bS(a){return A.eV(a)},
eV(a){var s,r,q,p
if(a instanceof A.h)return A.v(A.aX(a),null)
s=J.a0(a)
if(s===B.J||s===B.L||t.B.b(a)){r=B.u(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.v(A.aX(a),null)},
dG(a){if(a==null||typeof a=="number"||A.dh(a))return J.aZ(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.Y)return a.h(0)
if(a instanceof A.ag)return a.aB(!0)
return"Instance of '"+A.bS(a)+"'"},
eW(a){var s=a.$thrownJsError
if(s==null)return null
return A.J(s)},
ei(a){throw A.b(A.cP(a))},
d(a,b){if(a==null)J.dv(a)
throw A.b(A.ef(a,b))},
ef(a,b){var s,r="index"
if(!A.e6(b))return new A.B(!0,b,r,null)
s=J.dv(a)
if(b<0||b>=s)return A.eP(b,s,a,r)
return new A.aa(null,null,!0,b,r,"Value not in range")},
cP(a){return new A.B(!0,a,null,null)},
b(a){return A.ej(new Error(),a)},
ej(a,b){var s
if(b==null)b=new A.F()
a.dartException=b
s=A.hx
if("defineProperty" in Object){Object.defineProperty(a,"message",{get:s})
a.name=""}else a.toString=s
return a},
hx(){return J.aZ(this.dartException)},
en(a){throw A.b(a)},
cW(a,b){throw A.ej(b,a)},
cX(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.cW(A.fD(a,b,c),s)},
fD(a,b,c){var s,r,q,p,o,n,m,l,k
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
dt(a){throw A.b(A.b4(a))},
G(a){var s,r,q,p,o,n
a=A.ht(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.a([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.cd(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
ce(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
dM(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
d3(a,b){var s=b==null,r=s?null:b.method
return new A.bc(a,r,s?null:b.receiver)},
V(a){if(a==null)return new A.bQ(a)
if(a instanceof A.am)return A.U(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.U(a,a.dartException)
return A.h4(a)},
U(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
h4(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.a.b4(r,16)&8191)===10)switch(q){case 438:return A.U(a,A.d3(A.q(s)+" (Error "+q+")",null))
case 445:case 5007:A.q(s)
return A.U(a,new A.aA())}}if(a instanceof TypeError){p=$.er()
o=$.es()
n=$.et()
m=$.eu()
l=$.ex()
k=$.ey()
j=$.ew()
$.ev()
i=$.eA()
h=$.ez()
g=p.t(s)
if(g!=null)return A.U(a,A.d3(s,g))
else{g=o.t(s)
if(g!=null){g.method="call"
return A.U(a,A.d3(s,g))}else if(n.t(s)!=null||m.t(s)!=null||l.t(s)!=null||k.t(s)!=null||j.t(s)!=null||m.t(s)!=null||i.t(s)!=null||h.t(s)!=null)return A.U(a,new A.aA())}return A.U(a,new A.bv(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.aD()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.U(a,new A.B(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.aD()
return a},
J(a){var s
if(a instanceof A.am)return a.b
if(a==null)return new A.aN(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.aN(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
ds(a){if(a==null)return J.E(a)
if(typeof a=="object")return A.aB(a)
return J.E(a)},
h9(a){if(typeof a=="number")return B.o.gj(a)
if(a instanceof A.bG)return A.aB(a)
if(a instanceof A.ag)return a.gj(a)
return A.ds(a)},
hd(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=a.length
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
k=n}j=b.ab(q)
i=k[j]
if(i==null)k[j]=[b.M(q,p)]
else{r=b.ac(i,q)
if(r>=0)i[r].b=p
else i.push(b.M(q,p))}}}return b},
fL(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.b(A.eM("Unsupported number of arguments for wrapped closure"))},
bJ(a,b){var s=a.$identity
if(!!s)return s
s=A.ha(a,b)
a.$identity=s
return s},
ha(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.fL)},
eJ(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.c2().constructor.prototype):Object.create(new A.al(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.dC(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.eF(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.dC(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
eF(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.eD)}throw A.b("Error in functionType of tearoff")},
eG(a,b,c,d){var s=A.dB
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
dC(a,b,c,d){if(c)return A.eI(a,b,d)
return A.eG(b.length,d,a,b)},
eH(a,b,c,d){var s=A.dB,r=A.eE
switch(b?-1:a){case 0:throw A.b(new A.bq("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
eI(a,b,c){var s,r
if($.dz==null)$.dz=A.dy("interceptor")
if($.dA==null)$.dA=A.dy("receiver")
s=b.length
r=A.eH(s,c,a,b)
return r},
dm(a){return A.eJ(a)},
eD(a,b){return A.aT(v.typeUniverse,A.aX(a.a),b)},
dB(a){return a.a},
eE(a){return a.b},
dy(a){var s,r,q,p=new A.al("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.b(A.b_("Field name "+a+" not found.",null))},
ia(a){throw A.b(new A.bA(a))},
hg(a){return v.getIsolateTag(a)},
hp(a){var s,r,q,p,o,n=$.eh.$1(a),m=$.cQ[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.cU[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.ec.$2(a,n)
if(q!=null){m=$.cQ[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.cU[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.cV(s)
$.cQ[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.cU[n]=s
return s}if(p==="-"){o=A.cV(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.el(a,s)
if(p==="*")throw A.b(A.dN(n))
if(v.leafTags[n]===true){o=A.cV(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.el(a,s)},
el(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.dr(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
cV(a){return J.dr(a,!1,null,!!a.$iw)},
hr(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.cV(s)
else return J.dr(s,c,null,null)},
hk(){if(!0===$.dq)return
$.dq=!0
A.hl()},
hl(){var s,r,q,p,o,n,m,l
$.cQ=Object.create(null)
$.cU=Object.create(null)
A.hj()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.em.$1(o)
if(n!=null){m=A.hr(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
hj(){var s,r,q,p,o,n,m=B.A()
m=A.ak(B.B,A.ak(B.C,A.ak(B.v,A.ak(B.v,A.ak(B.D,A.ak(B.E,A.ak(B.F(B.u),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.eh=new A.cR(p)
$.ec=new A.cS(o)
$.em=new A.cT(n)},
ak(a,b){return a(b)||b},
hb(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
ht(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
z:function z(a,b){this.a=a
this.b=b},
b5:function b5(){},
b7:function b7(a,b){this.a=a
this.$ti=b},
cd:function cd(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aA:function aA(){},
bc:function bc(a,b,c){this.a=a
this.b=b
this.c=c},
bv:function bv(a){this.a=a},
bQ:function bQ(a){this.a=a},
am:function am(a,b){this.a=a
this.b=b},
aN:function aN(a){this.a=a
this.b=null},
Y:function Y(){},
bK:function bK(){},
bL:function bL(){},
c3:function c3(){},
c2:function c2(){},
al:function al(a,b){this.a=a
this.b=b},
bA:function bA(a){this.a=a},
bq:function bq(a){this.a=a},
au:function au(){},
bO:function bO(a,b){this.a=a
this.b=b
this.c=null},
at:function at(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cR:function cR(a){this.a=a},
cS:function cS(a){this.a=a},
cT:function cT(a){this.a=a},
ag:function ag(){},
bD:function bD(){},
Z(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.ef(b,a))},
be:function be(){},
ay:function ay(){},
bf:function bf(){},
a7:function a7(){},
aw:function aw(){},
ax:function ax(){},
bg:function bg(){},
bh:function bh(){},
bi:function bi(){},
bj:function bj(){},
bk:function bk(){},
bl:function bl(){},
bm:function bm(){},
az:function az(){},
bn:function bn(){},
aH:function aH(){},
aI:function aI(){},
aJ:function aJ(){},
aK:function aK(){},
dH(a,b){var s=b.c
return s==null?b.c=A.de(a,b.x,!0):s},
d6(a,b){var s=b.c
return s==null?b.c=A.aR(a,"a1",[b.x]):s},
dI(a){var s=a.w
if(s===6||s===7||s===8)return A.dI(a.x)
return s===12||s===13},
eZ(a){return a.as},
dn(a){return A.bH(v.typeUniverse,a,!1)},
T(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.T(a1,s,a3,a4)
if(r===s)return a2
return A.dX(a1,r,!0)
case 7:s=a2.x
r=A.T(a1,s,a3,a4)
if(r===s)return a2
return A.de(a1,r,!0)
case 8:s=a2.x
r=A.T(a1,s,a3,a4)
if(r===s)return a2
return A.dV(a1,r,!0)
case 9:q=a2.y
p=A.aj(a1,q,a3,a4)
if(p===q)return a2
return A.aR(a1,a2.x,p)
case 10:o=a2.x
n=A.T(a1,o,a3,a4)
m=a2.y
l=A.aj(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.dc(a1,n,l)
case 11:k=a2.x
j=a2.y
i=A.aj(a1,j,a3,a4)
if(i===j)return a2
return A.dW(a1,k,i)
case 12:h=a2.x
g=A.T(a1,h,a3,a4)
f=a2.y
e=A.h1(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.dU(a1,g,e)
case 13:d=a2.y
a4+=d.length
c=A.aj(a1,d,a3,a4)
o=a2.x
n=A.T(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.dd(a1,n,c,!0)
case 14:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.b(A.b2("Attempted to substitute unexpected RTI kind "+a0))}},
aj(a,b,c,d){var s,r,q,p,o=b.length,n=A.cI(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.T(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
h2(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.cI(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.T(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
h1(a,b,c,d){var s,r=b.a,q=A.aj(a,r,c,d),p=b.b,o=A.aj(a,p,c,d),n=b.c,m=A.h2(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.bC()
s.a=q
s.b=o
s.c=m
return s},
a(a,b){a[v.arrayRti]=b
return a},
ee(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.hi(s)
return a.$S()}return null},
hm(a,b){var s
if(A.dI(b))if(a instanceof A.Y){s=A.ee(a)
if(s!=null)return s}return A.aX(a)},
aX(a){if(a instanceof A.h)return A.e4(a)
if(Array.isArray(a))return A.df(a)
return A.dg(J.a0(a))},
df(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
e4(a){var s=a.$ti
return s!=null?s:A.dg(a)},
dg(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.fK(a,s)},
fK(a,b){var s=a instanceof A.Y?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.ft(v.typeUniverse,s.name)
b.$ccache=r
return r},
hi(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.bH(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
hh(a){return A.a_(A.e4(a))},
dj(a){var s
if(a instanceof A.ag)return A.hc(a.$r,a.ar())
s=a instanceof A.Y?A.ee(a):null
if(s!=null)return s
if(t.R.b(a))return J.eC(a).a
if(Array.isArray(a))return A.df(a)
return A.aX(a)},
a_(a){var s=a.r
return s==null?a.r=A.e0(a):s},
e0(a){var s,r,q=a.as,p=q.replace(/\*/g,"")
if(p===q)return a.r=new A.bG(a)
s=A.bH(v.typeUniverse,p,!0)
r=s.r
return r==null?s.r=A.e0(s):r},
hc(a,b){var s,r,q=b,p=q.length
if(p===0)return t.F
if(0>=p)return A.d(q,0)
s=A.aT(v.typeUniverse,A.dj(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.d(q,r)
s=A.dY(v.typeUniverse,s,A.dj(q[r]))}return A.aT(v.typeUniverse,s,a)},
A(a){return A.a_(A.bH(v.typeUniverse,a,!1))},
fJ(a){var s,r,q,p,o,n,m=this
if(m===t.K)return A.I(m,a,A.fQ)
if(!A.K(m))s=m===t._
else s=!0
if(s)return A.I(m,a,A.fU)
s=m.w
if(s===7)return A.I(m,a,A.fH)
if(s===1)return A.I(m,a,A.e7)
r=s===6?m.x:m
q=r.w
if(q===8)return A.I(m,a,A.fM)
if(r===t.S)p=A.e6
else if(r===t.i||r===t.H)p=A.fP
else if(r===t.N)p=A.fS
else p=r===t.y?A.dh:null
if(p!=null)return A.I(m,a,p)
if(q===9){o=r.x
if(r.y.every(A.hn)){m.f="$i"+o
if(o==="f")return A.I(m,a,A.fO)
return A.I(m,a,A.fT)}}else if(q===11){n=A.hb(r.x,r.y)
return A.I(m,a,n==null?A.e7:n)}return A.I(m,a,A.fF)},
I(a,b,c){a.b=c
return a.b(b)},
fI(a){var s,r=this,q=A.fE
if(!A.K(r))s=r===t._
else s=!0
if(s)q=A.fw
else if(r===t.K)q=A.fv
else{s=A.aY(r)
if(s)q=A.fG}r.a=q
return r.a(a)},
bI(a){var s=a.w,r=!0
if(!A.K(a))if(!(a===t._))if(!(a===t.A))if(s!==7)if(!(s===6&&A.bI(a.x)))r=s===8&&A.bI(a.x)||a===t.P||a===t.T
return r},
fF(a){var s=this
if(a==null)return A.bI(s)
return A.ho(v.typeUniverse,A.hm(a,s),s)},
fH(a){if(a==null)return!0
return this.x.b(a)},
fT(a){var s,r=this
if(a==null)return A.bI(r)
s=r.f
if(a instanceof A.h)return!!a[s]
return!!J.a0(a)[s]},
fO(a){var s,r=this
if(a==null)return A.bI(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.h)return!!a[s]
return!!J.a0(a)[s]},
fE(a){var s=this
if(a==null){if(A.aY(s))return a}else if(s.b(a))return a
A.e1(a,s)},
fG(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.e1(a,s)},
e1(a,b){throw A.b(A.fk(A.dO(a,A.v(b,null))))},
dO(a,b){return A.bM(a)+": type '"+A.v(A.dj(a),null)+"' is not a subtype of type '"+b+"'"},
fk(a){return new A.aP("TypeError: "+a)},
u(a,b){return new A.aP("TypeError: "+A.dO(a,b))},
fM(a){var s=this,r=s.w===6?s.x:s
return r.x.b(a)||A.d6(v.typeUniverse,r).b(a)},
fQ(a){return a!=null},
fv(a){if(a!=null)return a
throw A.b(A.u(a,"Object"))},
fU(a){return!0},
fw(a){return a},
e7(a){return!1},
dh(a){return!0===a||!1===a},
hS(a){if(!0===a)return!0
if(!1===a)return!1
throw A.b(A.u(a,"bool"))},
hU(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b(A.u(a,"bool"))},
hT(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b(A.u(a,"bool?"))},
hV(a){if(typeof a=="number")return a
throw A.b(A.u(a,"double"))},
hX(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.u(a,"double"))},
hW(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.u(a,"double?"))},
e6(a){return typeof a=="number"&&Math.floor(a)===a},
hY(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.b(A.u(a,"int"))},
i_(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b(A.u(a,"int"))},
hZ(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b(A.u(a,"int?"))},
fP(a){return typeof a=="number"},
i0(a){if(typeof a=="number")return a
throw A.b(A.u(a,"num"))},
i2(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.u(a,"num"))},
i1(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.u(a,"num?"))},
fS(a){return typeof a=="string"},
i3(a){if(typeof a=="string")return a
throw A.b(A.u(a,"String"))},
i5(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b(A.u(a,"String"))},
i4(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b(A.u(a,"String?"))},
ea(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.v(a[q],b)
return s},
fX(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.ea(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.v(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
e2(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", ",a3=null
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
if(l===9){p=A.h3(a.x)
o=a.y
return o.length>0?p+("<"+A.ea(o,b)+">"):p}if(l===11)return A.fX(a,b)
if(l===12)return A.e2(a,b,null)
if(l===13)return A.e2(a.x,b,a.y)
if(l===14){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.d(b,n)
return b[n]}return"?"},
h3(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
fu(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
ft(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.bH(a,b,!1)
else if(typeof m=="number"){s=m
r=A.aS(a,5,"#")
q=A.cI(s)
for(p=0;p<s;++p)q[p]=r
o=A.aR(a,b,q)
n[b]=o
return o}else return m},
fs(a,b){return A.dZ(a.tR,b)},
fr(a,b){return A.dZ(a.eT,b)},
bH(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.dS(A.dQ(a,null,b,c))
r.set(b,s)
return s},
aT(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.dS(A.dQ(a,b,c,!0))
q.set(c,r)
return r},
dY(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.dc(a,b,c.w===10?c.y:[c])
p.set(s,q)
return q},
H(a,b){b.a=A.fI
b.b=A.fJ
return b},
aS(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.x(null,null)
s.w=b
s.as=c
r=A.H(a,s)
a.eC.set(c,r)
return r},
dX(a,b,c){var s,r=b.as+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.fp(a,b,r,c)
a.eC.set(r,s)
return s},
fp(a,b,c,d){var s,r,q
if(d){s=b.w
if(!A.K(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.x(null,null)
q.w=6
q.x=b
q.as=c
return A.H(a,q)},
de(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.fo(a,b,r,c)
a.eC.set(r,s)
return s},
fo(a,b,c,d){var s,r,q,p
if(d){s=b.w
r=!0
if(!A.K(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.aY(b.x)
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.x
if(q.w===8&&A.aY(q.x))return q
else return A.dH(a,b)}}p=new A.x(null,null)
p.w=7
p.x=b
p.as=c
return A.H(a,p)},
dV(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.fm(a,b,r,c)
a.eC.set(r,s)
return s},
fm(a,b,c,d){var s,r
if(d){s=b.w
if(A.K(b)||b===t.K||b===t._)return b
else if(s===1)return A.aR(a,"a1",[b])
else if(b===t.P||b===t.T)return t.O}r=new A.x(null,null)
r.w=8
r.x=b
r.as=c
return A.H(a,r)},
fq(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.x(null,null)
s.w=14
s.x=b
s.as=q
r=A.H(a,s)
a.eC.set(q,r)
return r},
aQ(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
fl(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
aR(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.aQ(c)+">"
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
dc(a,b,c){var s,r,q,p,o,n
if(b.w===10){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.aQ(r)+">")
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
dW(a,b,c){var s,r,q="+"+(b+"("+A.aQ(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.x(null,null)
s.w=11
s.x=b
s.y=c
s.as=q
r=A.H(a,s)
a.eC.set(q,r)
return r},
dU(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.aQ(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.aQ(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.fl(i)+"}"}r=n+(g+")")
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
dd(a,b,c,d){var s,r=b.as+("<"+A.aQ(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.fn(a,b,c,r,d)
a.eC.set(r,s)
return s},
fn(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.cI(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.T(a,b,r,0)
m=A.aj(a,c,r,0)
return A.dd(a,n,m,c!==m)}}l=new A.x(null,null)
l.w=13
l.x=b
l.y=c
l.as=d
return A.H(a,l)},
dQ(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
dS(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.fd(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.dR(a,r,l,k,!1)
else if(q===46)r=A.dR(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.S(a.u,a.e,k.pop()))
break
case 94:k.push(A.fq(a.u,k.pop()))
break
case 35:k.push(A.aS(a.u,5,"#"))
break
case 64:k.push(A.aS(a.u,2,"@"))
break
case 126:k.push(A.aS(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.ff(a,k)
break
case 38:A.fe(a,k)
break
case 42:p=a.u
k.push(A.dX(p,A.S(p,a.e,k.pop()),a.n))
break
case 63:p=a.u
k.push(A.de(p,A.S(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.dV(p,A.S(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.fc(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.dT(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.fh(a.u,a.e,o)
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
fd(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
dR(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===10)o=o.x
n=A.fu(s,o.x)[p]
if(n==null)A.en('No "'+p+'" in "'+A.eZ(o)+'"')
d.push(A.aT(s,o,n))}else d.push(p)
return m},
ff(a,b){var s,r=a.u,q=A.dP(a,b),p=b.pop()
if(typeof p=="string")b.push(A.aR(r,p,q))
else{s=A.S(r,a.e,p)
switch(s.w){case 12:b.push(A.dd(r,s,q,a.n))
break
default:b.push(A.dc(r,s,q))
break}}},
fc(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.dP(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.S(p,a.e,o)
q=new A.bC()
q.a=s
q.b=n
q.c=m
b.push(A.dU(p,r,q))
return
case-4:b.push(A.dW(p,b.pop(),s))
return
default:throw A.b(A.b2("Unexpected state under `()`: "+A.q(o)))}},
fe(a,b){var s=b.pop()
if(0===s){b.push(A.aS(a.u,1,"0&"))
return}if(1===s){b.push(A.aS(a.u,4,"1&"))
return}throw A.b(A.b2("Unexpected extended operation "+A.q(s)))},
dP(a,b){var s=b.splice(a.p)
A.dT(a.u,a.e,s)
a.p=b.pop()
return s},
S(a,b,c){if(typeof c=="string")return A.aR(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.fg(a,b,c)}else return c},
dT(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.S(a,b,c[s])},
fh(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.S(a,b,c[s])},
fg(a,b,c){var s,r,q=b.w
if(q===10){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==9)throw A.b(A.b2("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.b(A.b2("Bad index "+c+" for "+b.h(0)))},
ho(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.n(a,b,null,c,null,!1)?1:0
r.set(c,s)}if(0===s)return!1
if(1===s)return!0
return!0},
n(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i
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
if(q)if(A.n(a,c[b.x],c,d,e,!1))return!0
p=d.w
s=b===t.P||b===t.T
if(s){if(p===8)return A.n(a,b,c,d.x,e,!1)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return A.n(a,b.x,c,d,e,!1)
if(r===6)return A.n(a,b.x,c,d,e,!1)
return r!==7}if(r===6)return A.n(a,b.x,c,d,e,!1)
if(p===6){s=A.dH(a,d)
return A.n(a,b,c,s,e,!1)}if(r===8){if(!A.n(a,b.x,c,d,e,!1))return!1
return A.n(a,A.d6(a,b),c,d,e,!1)}if(r===7){s=A.n(a,t.P,c,d,e,!1)
return s&&A.n(a,b.x,c,d,e,!1)}if(p===8){if(A.n(a,b,c,d.x,e,!1))return!0
return A.n(a,b,c,A.d6(a,d),e,!1)}if(p===7){s=A.n(a,b,c,t.P,e,!1)
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
if(!A.n(a,j,c,i,e,!1)||!A.n(a,i,e,j,c,!1))return!1}return A.e5(a,b.x,c,d.x,e,!1)}if(p===12){if(b===t.g)return!0
if(s)return!1
return A.e5(a,b,c,d,e,!1)}if(r===9){if(p!==9)return!1
return A.fN(a,b,c,d,e,!1)}if(o&&p===11)return A.fR(a,b,c,d,e,!1)
return!1},
e5(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
fN(a,b,c,d,e,f){var s,r,q,p,o,n=b.x,m=d.x
for(;n!==m;){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.aT(a,b,r[o])
return A.e_(a,p,null,c,d.y,e,!1)}return A.e_(a,b.y,null,c,d.y,e,!1)},
e_(a,b,c,d,e,f,g){var s,r=b.length
for(s=0;s<r;++s)if(!A.n(a,b[s],d,e[s],f,!1))return!1
return!0},
fR(a,b,c,d,e,f){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.n(a,r[s],c,q[s],e,!1))return!1
return!0},
aY(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.K(a))if(s!==7)if(!(s===6&&A.aY(a.x)))r=s===8&&A.aY(a.x)
return r},
hn(a){var s
if(!A.K(a))s=a===t._
else s=!0
return s},
K(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
dZ(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
cI(a){return a>0?new Array(a):v.typeUniverse.sEA},
x:function x(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
bC:function bC(){this.c=this.b=this.a=null},
bG:function bG(a){this.a=a},
bB:function bB(){},
aP:function aP(a){this.a=a},
f7(){var s,r,q
if(self.scheduleImmediate!=null)return A.h6()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.bJ(new A.ci(s),1)).observe(r,{childList:true})
return new A.ch(s,r,q)}else if(self.setImmediate!=null)return A.h7()
return A.h8()},
f8(a){self.scheduleImmediate(A.bJ(new A.cj(a),0))},
f9(a){self.setImmediate(A.bJ(new A.ck(a),0))},
fa(a){A.fi(0,a)},
dL(a,b){var s=B.a.q(a.a,1000)
return A.fj(s,b)},
fi(a,b){var s=new A.aO()
s.aS(a,b)
return s},
fj(a,b){var s=new A.aO()
s.aT(a,b)
return s},
fV(a){return new A.bw(new A.r($.m,a.k("r<0>")),a.k("bw<0>"))},
fz(a,b){a.$2(0,null)
b.b=!0
return b.a},
i6(a,b){A.fA(a,b)},
fy(a,b){var s,r=a==null?b.$ti.c.a(a):a
if(!b.b)b.a.aV(r)
else{s=b.a
if(b.$ti.k("a1<1>").b(r))s.ao(r)
else s.a1(r)}},
fx(a,b){var s=A.V(a),r=A.J(a),q=b.a
if(b.b)q.C(s,r)
else q.am(s,r)},
fA(a,b){var s,r,q=new A.cK(b),p=new A.cL(b)
if(a instanceof A.r)a.aA(q,p,t.z)
else{s=t.z
if(a instanceof A.r)a.ai(q,p,s)
else{r=new A.r($.m,t.d)
r.a=8
r.c=a
r.aA(q,p,s)}}},
h5(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.m.aK(new A.cO(s))},
d0(a){var s
if(t.Q.b(a)){s=a.gL()
if(s!=null)return s}return B.I},
da(a,b,c){var s,r,q,p={},o=p.a=a
for(;s=o.a,(s&4)!==0;){o=o.c
p.a=o}if(o===b){b.am(new A.B(!0,o,null,"Cannot complete a future with itself"),A.f1())
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
A.ae(b,q)
return}b.a^=2
A.ai(null,null,b.b,new A.cq(p,b))},
ae(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;!0;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){f=f.c
A.cM(f.a,f.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.ae(g.a,f)
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
if(r){A.cM(m.a,m.b)
return}j=$.m
if(j!==k)$.m=k
else j=null
f=f.c
if((f&15)===8)new A.cx(s,g,p).$0()
else if(q){if((f&1)!==0)new A.cw(s,m).$0()}else if((f&2)!==0)new A.cv(g,s).$0()
if(j!=null)$.m=j
f=s.c
if(f instanceof A.r){r=s.a.$ti
r=r.k("a1<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.S(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.da(f,i,!0)
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
fY(a,b){if(t.C.b(a))return b.aK(a)
if(t.v.b(a))return a
throw A.b(A.dx(a,"onError",u.c))},
fW(){var s,r
for(s=$.ah;s!=null;s=$.ah){$.aW=null
r=s.b
$.ah=r
if(r==null)$.aV=null
s.a.$0()}},
h0(){$.di=!0
try{A.fW()}finally{$.aW=null
$.di=!1
if($.ah!=null)$.du().$1(A.ed())}},
eb(a){var s=new A.by(a),r=$.aV
if(r==null){$.ah=$.aV=s
if(!$.di)$.du().$1(A.ed())}else $.aV=r.b=s},
h_(a){var s,r,q,p=$.ah
if(p==null){A.eb(a)
$.aW=$.aV
return}s=new A.by(a)
r=$.aW
if(r==null){s.b=p
$.ah=$.aW=s}else{q=r.b
s.b=q
$.aW=r.b=s
if(q==null)$.aV=s}},
hu(a){var s=null,r=$.m
if(B.b===r){A.ai(s,s,B.b,a)
return}A.ai(s,s,r,r.aD(a))},
hE(a){A.dl(a,"stream",t.K)
return new A.bE()},
d8(a){return new A.bx(null,a.k("bx<0>"))},
dK(a,b){var s=$.m
if(s===B.b)return A.dL(a,b)
return A.dL(a,s.b5(b,t.J))},
cM(a,b){A.h_(new A.cN(a,b))},
e8(a,b,c,d){var s,r=$.m
if(r===c)return d.$0()
$.m=c
s=r
try{r=d.$0()
return r}finally{$.m=s}},
e9(a,b,c,d,e){var s,r=$.m
if(r===c)return d.$1(e)
$.m=c
s=r
try{r=d.$1(e)
return r}finally{$.m=s}},
fZ(a,b,c,d,e,f){var s,r=$.m
if(r===c)return d.$2(e,f)
$.m=c
s=r
try{r=d.$2(e,f)
return r}finally{$.m=s}},
ai(a,b,c,d){if(B.b!==c)d=c.aD(d)
A.eb(d)},
ci:function ci(a){this.a=a},
ch:function ch(a,b,c){this.a=a
this.b=b
this.c=c},
cj:function cj(a){this.a=a},
ck:function ck(a){this.a=a},
aO:function aO(){this.c=0},
cH:function cH(a,b){this.a=a
this.b=b},
cG:function cG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bw:function bw(a,b){this.a=a
this.b=!1
this.$ti=b},
cK:function cK(a){this.a=a},
cL:function cL(a){this.a=a},
cO:function cO(a){this.a=a},
X:function X(a,b){this.a=a
this.b=b},
bz:function bz(){},
bx:function bx(a,b){var _=this
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
r:function r(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
cn:function cn(a,b){this.a=a
this.b=b},
cu:function cu(a,b){this.a=a
this.b=b},
cr:function cr(a){this.a=a},
cs:function cs(a){this.a=a},
ct:function ct(a,b,c){this.a=a
this.b=b
this.c=c},
cq:function cq(a,b){this.a=a
this.b=b},
cp:function cp(a,b){this.a=a
this.b=b},
co:function co(a,b,c){this.a=a
this.b=b
this.c=c},
cx:function cx(a,b,c){this.a=a
this.b=b
this.c=c},
cy:function cy(a,b){this.a=a
this.b=b},
cz:function cz(a){this.a=a},
cw:function cw(a,b){this.a=a
this.b=b},
cv:function cv(a,b){this.a=a
this.b=b},
by:function by(a){this.a=a
this.b=null},
bE:function bE(){},
cJ:function cJ(){},
cN:function cN(a,b){this.a=a
this.b=b},
cD:function cD(){},
cE:function cE(a,b){this.a=a
this.b=b},
cF:function cF(a,b,c){this.a=a
this.b=b
this.c=c},
eT(a){return new A.aG(a.k("aG<0>"))},
db(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
fb(a,b,c){var s=new A.af(a,b,c.k("af<0>"))
s.c=a.e
return s},
d5(a){var s,r
if(A.ek(a))return"{...}"
s=new A.bt("")
try{r={}
$.L.push(a)
s.a+="{"
r.a=!0
a.aa(0,new A.bP(r,s))
s.a+="}"}finally{if(0>=$.L.length)return A.d($.L,-1)
$.L.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
aG:function aG(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cC:function cC(a){this.a=a
this.c=this.b=null},
af:function af(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
l:function l(){},
av:function av(){},
bP:function bP(a,b){this.a=a
this.b=b},
aC:function aC(){},
aM:function aM(){},
eK(a,b){a=A.b(a)
a.stack=b.h(0)
throw a
throw A.b("unreachable")},
d4(a,b,c){var s,r,q
if(a>4294967295)A.en(A.eY(a,0,4294967295,"length",null))
s=A.a(new Array(a),c.k("o<0>"))
s.$flags=1
r=s
if(a!==0)for(s=r.length,q=0;q<s;++q)r[q]=b
return r},
eU(a,b,c){var s,r,q=A.a([],c.k("o<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.dt)(a),++r)q.push(a[r])
q.$flags=1
return q},
f2(a,b,c){var s=J.eB(b)
if(!s.F())return a
if(c.length===0){do a+=A.q(s.gH())
while(s.F())}else{a+=A.q(s.gH())
for(;s.F();)a=a+c+A.q(s.gH())}return a},
f1(){return A.J(new Error())},
dD(a){return new A.b6(1000*a)},
bM(a){if(typeof a=="number"||A.dh(a)||a==null)return J.aZ(a)
if(typeof a=="string")return JSON.stringify(a)
return A.dG(a)},
eL(a,b){A.dl(a,"error",t.K)
A.dl(b,"stackTrace",t.l)
A.eK(a,b)},
b2(a){return new A.b1(a)},
b_(a,b){return new A.B(!1,null,b,a)},
dx(a,b,c){return new A.B(!0,a,b,c)},
eX(a){var s=null
return new A.aa(s,s,!1,s,s,a)},
eY(a,b,c,d,e){return new A.aa(b,c,!0,a,d,"Invalid value")},
eP(a,b,c,d){return new A.b8(b,!0,a,d,"Index out of range")},
cg(a){return new A.aF(a)},
dN(a){return new A.bu(a)},
b4(a){return new A.b3(a)},
eM(a){return new A.cm(a)},
d1(a,b,c){var s,r
if(A.ek(a))return b+"..."+c
s=new A.bt(b)
$.L.push(a)
try{r=s
r.a=A.f2(r.a,a,", ")}finally{if(0>=$.L.length)return A.d($.L,-1)
$.L.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
bR(a,b,c,d){var s
if(B.e===c)return A.dJ(B.a.gj(a),J.E(b),$.cZ())
if(B.e===d){s=B.a.gj(a)
b=J.E(b)
c=J.E(c)
return A.d9(A.R(A.R(A.R($.cZ(),s),b),c))}s=B.a.gj(a)
b=J.E(b)
c=J.E(c)
d=J.E(d)
d=A.d9(A.R(A.R(A.R(A.R($.cZ(),s),b),c),d))
return d},
b6:function b6(a){this.a=a},
cl:function cl(){},
i:function i(){},
b1:function b1(a){this.a=a},
F:function F(){},
B:function B(a,b,c,d){var _=this
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
b8:function b8(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
aF:function aF(a){this.a=a},
bu:function bu(a){this.a=a},
bs:function bs(a){this.a=a},
b3:function b3(a){this.a=a},
bo:function bo(){},
aD:function aD(){},
cm:function cm(a){this.a=a},
p:function p(){},
h:function h(){},
bF:function bF(){},
bt:function bt(a){this.a=a},
cA:function cA(){},
a8:function a8(a,b,c){this.a=a
this.b=b
this.$ti=c},
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
f_(a,b,c,d,e,f,g,h){var s,r,q,p=self,o=p.document.createElement("canvas"),n=h*g
o.width=n
s=d*f
o.height=s
r=p.document.createElement("canvas")
r.width=n
r.height=s
s=A.a([],t.w)
for(q=0;q<d;++q){p=B.a.q(h,32)
s.push(new Uint32Array(p+1))}p=new A.br(!0,d,h,g,f,c,a,o,r,s)
p.aP(a,b,c,d,!0,f,g,h)
return p},
d7(a){return new A.z(B.a.q(a,32),31-B.a.i(a,32))},
br:function br(a,b,c,d,e,f,g,h,i,j){var _=this
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
bU:function bU(a){this.a=a},
bV:function bV(a){this.a=a},
bW:function bW(a){this.a=a},
bX:function bX(a){this.a=a},
bT:function bT(){},
C:function C(a){this.b=a},
f3(a,b,c,d,e,f,g){var s,r,q,p,o="white",n=null,m=A.f_("black",b,o,e*(8+d),!0,2,2,a*8),l=A.a([],t.G)
for(s=t.V,r=0;r<e;++r){q=A.a([],s)
for(p=0;p<a;++p)q.push(new A.M(r,p," ",o))
l.push(q)}m=new A.aE(e,a,d,b,!0,m,new A.a9(e,a),new A.a9(e,a),new A.a9(e,a),!1,A.d8(t.N),A.d8(t.W),A.d8(t.q),B.y,l,A.eT(t.o),B.dP)
m.aR("black",a,b,o,n,!0,2,2,d,e,!1,g,n,n,n,n,n)
return m},
ab:function ab(a){this.b=a},
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
cb:function cb(a){this.a=a},
ca:function ca(){},
c9:function c9(a){this.a=a},
c4:function c4(a){this.a=a},
c5:function c5(a){this.a=a},
c6:function c6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c7:function c7(a,b,c){this.a=a
this.b=b
this.c=c},
c8:function c8(a){this.a=a},
f0(a,b,c){var s,r,q,p,o=A.a([],t.U),n=A.a([],t.I)
for(s=t.p,r=0;r<a;++r){q=A.a([],s)
for(p=0;p<b;++p)q.push(B.c)
n.push(q)}o=new A.bZ(a,b,o,n,B.l)
o.aQ(a,b,c)
return o},
hq(){var s=self.document.getElementById("snake")
s.toString
A.f0(30,30,s)},
y:function y(a){this.b=a},
a2:function a2(a){this.b=a},
bZ:function bZ(a,b,c,d,e){var _=this
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
c_:function c_(a){this.a=a},
c1:function c1(a){this.a=a},
c0:function c0(a){this.a=a},
hv(a){A.cW(new A.a5("Field '"+a+"' has been assigned during initialization."),new Error())},
j(){A.cW(new A.a5("Field '' has not been initialized."),new Error())},
hw(){A.cW(new A.a5("Field '' has already been initialized."),new Error())},
aU(a){var s
if(typeof a=="function")throw A.b(A.b_("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.fB,a)
s[$.cY()]=a
return s},
e3(a){var s
if(typeof a=="function")throw A.b(A.b_("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.fC,a)
s[$.cY()]=a
return s},
fB(a){return a.$0()},
fC(a,b,c){if(c>=1)return a.$1(b)
return a.$0()}},B={}
var w=[A,J,B]
var $={}
A.d2.prototype={}
J.b9.prototype={
u(a,b){return a===b},
gj(a){return A.aB(a)},
h(a){return"Instance of '"+A.bS(a)+"'"},
gl(a){return A.a_(A.dg(this))}}
J.ba.prototype={
h(a){return String(a)},
gj(a){return a?519018:218159},
gl(a){return A.a_(t.y)},
$ie:1}
J.ap.prototype={
u(a,b){return null==b},
h(a){return"null"},
gj(a){return 0},
$ie:1,
$ip:1}
J.ar.prototype={$ik:1}
J.P.prototype={
gj(a){return 0},
h(a){return String(a)}}
J.bp.prototype={}
J.ac.prototype={}
J.N.prototype={
h(a){var s=a[$.cY()]
if(s==null)return this.aO(a)
return"JavaScript function for "+J.aZ(s)}}
J.aq.prototype={
gj(a){return 0},
h(a){return String(a)}}
J.as.prototype={
gj(a){return 0},
h(a){return String(a)}}
J.o.prototype={
bj(a,b){var s
a.$flags&1&&A.cX(a,"remove",1)
for(s=0;s<a.length;++s)if(J.W(a[s],b)){a.splice(s,1)
return!0}return!1},
bc(a,b){var s,r,q=a.length,p=A.d4(q,"",t.N)
for(s=0;s<a.length;++s){r=A.q(a[s])
if(!(s<q))return A.d(p,s)
p[s]=r}return p.join(b)},
b7(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw A.b(A.b4(a))}return s},
b8(a,b,c){return this.b7(a,b,c,t.z)},
gaF(a){if(a.length>0)return a[0]
throw A.b(A.dE())},
gbd(a){var s=a.length
if(s>0)return a[s-1]
throw A.b(A.dE())},
b6(a,b){var s
for(s=0;s<a.length;++s)if(J.W(a[s],b))return!0
return!1},
h(a){return A.d1(a,"[","]")},
gae(a){return new J.b0(a,a.length,A.df(a).k("b0<1>"))},
gj(a){return A.aB(a)},
gm(a){return a.length},
$if:1}
J.bN.prototype={}
J.b0.prototype={
gH(){var s=this.d
return s==null?this.$ti.c.a(s):s},
F(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.b(A.dt(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.a3.prototype={
bt(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.b(A.cg(""+a+".toInt()"))},
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
A(a,b){if((a|0)===a)if(b>=1)return a/b|0
return this.az(a,b)},
q(a,b){return(a|0)===a?a/b|0:this.az(a,b)},
az(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.cg("Result of truncating division is "+A.q(s)+": "+A.q(a)+" ~/ "+b))},
K(a,b){if(b<0)throw A.b(A.cP(b))
return b>31?0:a<<b>>>0},
b3(a,b){return b>31?0:a<<b>>>0},
aN(a,b){var s
if(b<0)throw A.b(A.cP(b))
if(a>0)s=this.a5(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
b4(a,b){var s
if(a>0)s=this.a5(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
v(a,b){if(0>b)throw A.b(A.cP(b))
return this.a5(a,b)},
a5(a,b){return b>31?0:a>>>b},
gl(a){return A.a_(t.H)},
$it:1}
J.ao.prototype={
gl(a){return A.a_(t.S)},
$ie:1,
$ic:1}
J.bb.prototype={
gl(a){return A.a_(t.i)},
$ie:1}
J.a4.prototype={
a_(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.G)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
bh(a,b,c){var s=b-a.length
if(s<=0)return a
return this.a_(c,s)+a},
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
A.bY.prototype={}
A.bd.prototype={
gH(){var s=this.d
return s==null?this.$ti.c.a(s):s},
F(){var s,r=this,q=r.a,p=J.eg(q),o=p.gm(q)
if(r.b!==o)throw A.b(A.b4(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.n(q,s);++r.c
return!0}}
A.an.prototype={}
A.z.prototype={$r:"+(1,2)",$s:1}
A.b5.prototype={
h(a){return A.d5(this)}}
A.b7.prototype={
P(){var s=this,r=s.$map
if(r==null){r=new A.at(s.$ti.k("at<1,2>"))
A.hd(s.a,r)
s.$map=r}return r},
a8(a){return this.P().a8(a)},
n(a,b){return this.P().n(0,b)},
aa(a,b){this.P().aa(0,b)},
gm(a){return this.P().a}}
A.cd.prototype={
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
A.bc.prototype={
h(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.bv.prototype={
h(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.bQ.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.am.prototype={}
A.aN.prototype={
h(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iQ:1}
A.Y.prototype={
h(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.eo(r==null?"unknown":r)+"'"},
gbu(){return this},
$C:"$1",
$R:1,
$D:null}
A.bK.prototype={$C:"$0",$R:0}
A.bL.prototype={$C:"$2",$R:2}
A.c3.prototype={}
A.c2.prototype={
h(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.eo(s)+"'"}}
A.al.prototype={
u(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.al))return!1
return this.$_target===b.$_target&&this.a===b.a},
gj(a){return(A.ds(this.a)^A.aB(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.bS(this.a)+"'")}}
A.bA.prototype={
h(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.bq.prototype={
h(a){return"RuntimeError: "+this.a}}
A.au.prototype={
gm(a){return this.a},
a8(a){var s=this.b
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
s=q[this.ab(a)]
r=this.ac(s,a)
if(r<0)return null
return s[r].b},
aa(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw A.b(A.b4(s))
r=r.c}},
M(a,b){var s=this,r=new A.bO(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&1073741823
return r},
ab(a){return J.E(a)&1073741823},
ac(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.W(a[r].a,b))return r
return-1},
h(a){return A.d5(this)}}
A.bO.prototype={}
A.at.prototype={
ab(a){return A.h9(a)&1073741823},
ac(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.W(a[r].a,b))return r
return-1}}
A.cR.prototype={
$1(a){return this.a(a)},
$S:7}
A.cS.prototype={
$2(a,b){return this.a(a,b)},
$S:8}
A.cT.prototype={
$1(a){return this.a(a)},
$S:9}
A.ag.prototype={
h(a){return this.aB(!1)},
aB(a){var s,r,q,p,o,n=this.b_(),m=this.ar(),l=(a?""+"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.d(m,q)
o=m[q]
l=a?l+A.dG(o):l+A.q(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
b_(){var s,r=this.$s
for(;$.aL.length<=r;)$.aL.push(null)
s=$.aL[r]
if(s==null){s=this.aZ()
if(!(r<$.aL.length))return A.d($.aL,r)
$.aL[r]=s}return s},
aZ(){var s,r,q,p,o,n=this.$r,m=n.indexOf("("),l=n.substring(1,m),k=n.substring(m),j=k==="()"?0:k.replace(/[^,]/g,"").length+1,i=A.a(new Array(j),t.f)
for(s=0;s<j;++s)i[s]=s
if(l!==""){r=l.split(",")
s=r.length
for(q=i.length,p=j;s>0;){--p;--s
o=r[s]
if(!(p>=0&&p<q))return A.d(i,p)
i[p]=o}}i=A.eU(i,!1,t.K)
i.$flags=3
return i}}
A.bD.prototype={
ar(){return[this.a,this.b]},
u(a,b){if(b==null)return!1
return b instanceof A.bD&&this.$s===b.$s&&J.W(this.a,b.a)&&J.W(this.b,b.b)},
gj(a){return A.bR(this.$s,this.a,this.b,B.e)}}
A.be.prototype={
gl(a){return B.dZ},
$ie:1}
A.ay.prototype={}
A.bf.prototype={
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
A.bg.prototype={
gl(a){return B.e0},
$ie:1}
A.bh.prototype={
gl(a){return B.e1},
$ie:1}
A.bi.prototype={
gl(a){return B.e2},
n(a,b){A.Z(b,a,a.length)
return a[b]},
$ie:1}
A.bj.prototype={
gl(a){return B.e3},
n(a,b){A.Z(b,a,a.length)
return a[b]},
$ie:1}
A.bk.prototype={
gl(a){return B.e4},
n(a,b){A.Z(b,a,a.length)
return a[b]},
$ie:1}
A.bl.prototype={
gl(a){return B.e6},
n(a,b){A.Z(b,a,a.length)
return a[b]},
$ie:1}
A.bm.prototype={
gl(a){return B.e7},
n(a,b){A.Z(b,a,a.length)
return a[b]},
$ie:1,
$icf:1}
A.az.prototype={
gl(a){return B.e8},
gm(a){return a.length},
n(a,b){A.Z(b,a,a.length)
return a[b]},
$ie:1}
A.bn.prototype={
gl(a){return B.e9},
gm(a){return a.length},
n(a,b){A.Z(b,a,a.length)
return a[b]},
$ie:1}
A.aH.prototype={}
A.aI.prototype={}
A.aJ.prototype={}
A.aK.prototype={}
A.x.prototype={
k(a){return A.aT(v.typeUniverse,this,a)},
an(a){return A.dY(v.typeUniverse,this,a)}}
A.bC.prototype={}
A.bG.prototype={
h(a){return A.v(this.a,null)}}
A.bB.prototype={
h(a){return this.a}}
A.aP.prototype={$iF:1}
A.ci.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:2}
A.ch.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:10}
A.cj.prototype={
$0(){this.a.$0()},
$S:1}
A.ck.prototype={
$0(){this.a.$0()},
$S:1}
A.aO.prototype={
aS(a,b){if(self.setTimeout!=null)self.setTimeout(A.bJ(new A.cH(this,b),0),a)
else throw A.b(A.cg("`setTimeout()` not found."))},
aT(a,b){if(self.setTimeout!=null)self.setInterval(A.bJ(new A.cG(this,a,Date.now(),b),0),a)
else throw A.b(A.cg("Periodic timer."))},
$icc:1}
A.cH.prototype={
$0(){this.a.c=1
this.b.$0()},
$S:0}
A.cG.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.a.A(s,o)}q.c=p
r.d.$1(q)},
$S:1}
A.bw.prototype={}
A.cK.prototype={
$1(a){return this.a.$2(0,a)},
$S:11}
A.cL.prototype={
$2(a,b){this.a.$2(1,new A.am(a,b))},
$S:12}
A.cO.prototype={
$2(a,b){this.a(a,b)},
$S:13}
A.X.prototype={
h(a){return A.q(this.a)},
$ii:1,
gL(){return this.b}}
A.bz.prototype={}
A.bx.prototype={}
A.ad.prototype={
be(a){if((this.c&15)!==6)return!0
return this.b.b.ah(this.d,a.a)},
b9(a){var s,r=this.e,q=null,p=a.a,o=this.b.b
if(t.C.b(r))q=o.bm(r,p,a.b)
else q=o.ah(r,p)
try{p=q
return p}catch(s){if(t.c.b(A.V(s))){if((this.c&1)!==0)throw A.b(A.b_("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.b(A.b_("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.r.prototype={
ai(a,b,c){var s,r=$.m
if(r===B.b){if(!t.C.b(b)&&!t.v.b(b))throw A.b(A.dx(b,"onError",u.c))}else b=A.fY(b,r)
s=new A.r(r,c.k("r<0>"))
this.a0(new A.ad(s,3,a,b,this.$ti.k("@<1>").an(c).k("ad<1,2>")))
return s},
aA(a,b,c){var s=new A.r($.m,c.k("r<0>"))
this.a0(new A.ad(s,19,a,b,this.$ti.k("@<1>").an(c).k("ad<1,2>")))
return s},
b2(a){this.a=this.a&1|16
this.c=a},
N(a){this.a=a.a&30|this.a&1
this.c=a.c},
a0(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.a0(a)
return}s.N(r)}A.ai(null,null,s.b,new A.cn(s,a))}},
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
A.ai(null,null,n.b,new A.cu(m,n))}},
R(){var s=this.c
this.c=null
return this.S(s)},
S(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
aX(a){var s,r,q,p=this
p.a^=2
try{a.ai(new A.cr(p),new A.cs(p),t.P)}catch(q){s=A.V(q)
r=A.J(q)
A.hu(new A.ct(p,s,r))}},
a1(a){var s=this,r=s.R()
s.a=8
s.c=a
A.ae(s,r)},
aY(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.R()
q.N(a)
A.ae(q,r)},
C(a,b){var s=this.R()
this.b2(new A.X(a,b))
A.ae(this,s)},
aV(a){if(this.$ti.k("a1<1>").b(a)){this.ao(a)
return}this.aW(a)},
aW(a){this.a^=2
A.ai(null,null,this.b,new A.cp(this,a))},
ao(a){if(this.$ti.b(a)){A.da(a,this,!1)
return}this.aX(a)},
am(a,b){this.a^=2
A.ai(null,null,this.b,new A.co(this,a,b))},
$ia1:1}
A.cn.prototype={
$0(){A.ae(this.a,this.b)},
$S:0}
A.cu.prototype={
$0(){A.ae(this.b,this.a.a)},
$S:0}
A.cr.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.a1(p.$ti.c.a(a))}catch(q){s=A.V(q)
r=A.J(q)
p.C(s,r)}},
$S:2}
A.cs.prototype={
$2(a,b){this.a.C(a,b)},
$S:4}
A.ct.prototype={
$0(){this.a.C(this.b,this.c)},
$S:0}
A.cq.prototype={
$0(){A.da(this.a.a,this.b,!0)},
$S:0}
A.cp.prototype={
$0(){this.a.a1(this.b)},
$S:0}
A.co.prototype={
$0(){this.a.C(this.b,this.c)},
$S:0}
A.cx.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.bk(q.d)}catch(p){s=A.V(p)
r=A.J(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.d0(q)
n=k.a
n.c=new A.X(q,o)
q=n}q.b=!0
return}if(j instanceof A.r&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.r){m=k.b.a
l=new A.r(m.b,m.$ti)
j.ai(new A.cy(l,m),new A.cz(l),t.n)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.cy.prototype={
$1(a){this.a.aY(this.b)},
$S:2}
A.cz.prototype={
$2(a,b){this.a.C(a,b)},
$S:4}
A.cw.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
q.c=p.b.b.ah(p.d,this.b)}catch(o){s=A.V(o)
r=A.J(o)
q=s
p=r
if(p==null)p=A.d0(q)
n=this.a
n.c=new A.X(q,p)
n.b=!0}},
$S:0}
A.cv.prototype={
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
if(n==null)n=A.d0(p)
m=l.b
m.c=new A.X(p,n)
p=m}p.b=!0}},
$S:0}
A.by.prototype={}
A.bE.prototype={}
A.cJ.prototype={}
A.cN.prototype={
$0(){A.eL(this.a,this.b)},
$S:0}
A.cD.prototype={
bo(a){var s,r,q
try{if(B.b===$.m){a.$0()
return}A.e8(null,null,this,a)}catch(q){s=A.V(q)
r=A.J(q)
A.cM(s,r)}},
bq(a,b){var s,r,q
try{if(B.b===$.m){a.$1(b)
return}A.e9(null,null,this,a,b)}catch(q){s=A.V(q)
r=A.J(q)
A.cM(s,r)}},
br(a,b){return this.bq(a,b,t.z)},
aD(a){return new A.cE(this,a)},
b5(a,b){return new A.cF(this,a,b)},
bl(a){if($.m===B.b)return a.$0()
return A.e8(null,null,this,a)},
bk(a){return this.bl(a,t.z)},
bp(a,b){if($.m===B.b)return a.$1(b)
return A.e9(null,null,this,a,b)},
ah(a,b){var s=t.z
return this.bp(a,b,s,s)},
bn(a,b,c){if($.m===B.b)return a.$2(b,c)
return A.fZ(null,null,this,a,b,c)},
bm(a,b,c){var s=t.z
return this.bn(a,b,c,s,s,s)},
bi(a){return a},
aK(a){var s=t.z
return this.bi(a,s,s,s)}}
A.cE.prototype={
$0(){return this.a.bo(this.b)},
$S:0}
A.cF.prototype={
$1(a){return this.a.br(this.b,a)},
$S(){return this.c.k("~(0)")}}
A.aG.prototype={
gae(a){var s=this,r=new A.af(s,s.r,s.$ti.k("af<1>"))
r.c=s.e
return r},
gm(a){return this.a},
V(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.al(s==null?q.b=A.db():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.al(r==null?q.c=A.db():r,b)}else return q.aU(b)},
aU(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.db()
s=J.E(a)&1073741823
r=p[s]
if(r==null)p[s]=[q.a4(a)]
else{if(q.b0(r,a)>=0)return!1
r.push(q.a4(a))}return!0},
al(a,b){if(a[b]!=null)return!1
a[b]=this.a4(b)
return!0},
av(){this.r=this.r+1&1073741823},
a4(a){var s,r=this,q=new A.cC(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.av()
return q},
b0(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.W(a[r].a,b))return r
return-1}}
A.cC.prototype={}
A.af.prototype={
gH(){var s=this.d
return s==null?this.$ti.c.a(s):s},
F(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.b(A.b4(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.l.prototype={
gae(a){return new A.bd(a,this.gm(a),A.aX(a).k("bd<l.E>"))},
h(a){return A.d1(a,"[","]")}}
A.av.prototype={
gm(a){return this.a},
h(a){return A.d5(this)}}
A.bP.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.q(a)
s=r.a+=s
r.a=s+": "
s=A.q(b)
r.a+=s},
$S:14}
A.aC.prototype={
h(a){return A.d1(this,"{","}")}}
A.aM.prototype={}
A.b6.prototype={
u(a,b){if(b==null)return!1
return b instanceof A.b6&&this.a===b.a},
gj(a){return B.a.gj(this.a)},
h(a){var s,r,q,p,o=this.a,n=B.a.q(o,36e8)
o%=36e8
s=B.a.q(o,6e7)
o%=6e7
r=s<10?"0":""
q=B.a.q(o,1e6)
p=q<10?"0":""
return""+n+":"+r+s+":"+p+q+"."+B.p.bh(B.a.h(o%1e6),6,"0")}}
A.cl.prototype={
h(a){return this.O()}}
A.i.prototype={
gL(){return A.eW(this)}}
A.b1.prototype={
h(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.bM(s)
return"Assertion failed"}}
A.F.prototype={}
A.B.prototype={
ga3(){return"Invalid argument"+(!this.a?"(s)":"")},
ga2(){return""},
h(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.ga3()+q+o
if(!s.a)return n
return n+s.ga2()+": "+A.bM(s.gad())},
gad(){return this.b}}
A.aa.prototype={
gad(){return this.b},
ga3(){return"RangeError"},
ga2(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.q(q):""
else if(q==null)s=": Not greater than or equal to "+A.q(r)
else if(q>r)s=": Not in inclusive range "+A.q(r)+".."+A.q(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.q(r)
return s}}
A.b8.prototype={
gad(){return this.b},
ga3(){return"RangeError"},
ga2(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gm(a){return this.f}}
A.aF.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.bu.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.bs.prototype={
h(a){return"Bad state: "+this.a}}
A.b3.prototype={
h(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.bM(s)+"."}}
A.bo.prototype={
h(a){return"Out of Memory"},
gL(){return null},
$ii:1}
A.aD.prototype={
h(a){return"Stack Overflow"},
gL(){return null},
$ii:1}
A.cm.prototype={
h(a){return"Exception: "+this.a}}
A.p.prototype={
gj(a){return A.h.prototype.gj.call(this,0)},
h(a){return"null"}}
A.h.prototype={$ih:1,
u(a,b){return this===b},
gj(a){return A.aB(this)},
h(a){return"Instance of '"+A.bS(this)+"'"},
gl(a){return A.hh(this)},
toString(){return this.h(this)}}
A.bF.prototype={
h(a){return""},
$iQ:1}
A.bt.prototype={
gm(a){return this.a.length},
h(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.cA.prototype={
J(a){if(a<=0||a>4294967296)throw A.b(A.eX("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
A.a8.prototype={
h(a){return"Point("+this.a+", "+this.b+")"},
u(a,b){if(b==null)return!1
return b instanceof A.a8&&this.a===b.a&&this.b===b.b},
gj(a){return A.dJ(B.a.gj(this.a),B.a.gj(this.b),0)}}
A.M.prototype={
gj(a){var s=this.a,r=this.b
return A.bR(new A.z(s,r).$s,s,r,B.e)},
u(a,b){var s,r,q,p
if(b==null)return!1
if(b instanceof A.M){s=b.a
r=b.b
q=this.a
p=this.b
p=A.bR(new A.z(s,r).$s,s,r,B.e)===A.bR(new A.z(q,p).$s,q,p,B.e)
s=p}else s=!1
return s},
h(a){var s=this
return"("+s.a+" "+s.b+") => '"+s.c+"' "+s.d}}
A.O.prototype={}
A.a6.prototype={
h(a){var s=this
return"               row: "+s.a+"\n            column: "+s.b+"\n         character: '"+s.c+"'\n    characterColor: "+s.d+"\n\n          pixelRow: "+s.e+"\n       pixelColumn: "+s.f+"\n         pixelIsOn: "+s.r+"\n    "}}
A.a9.prototype={
sX(a){var s,r,q,p=this
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
A.br.prototype={
aP(a,b,c,d,e,f,g,h){var s,r=this,q=self.document
q.onfocus=A.aU(new A.bU(r))
q.onblur=A.aU(new A.bV(r))
q=r.w
q.tabIndex=-1
q.style.display="block"
q.style.outline="none"
s=q.getContext("2d")
if(s==null)s=t.m.a(s)
s.imageSmoothingEnabled=!1
q.onfocus=A.aU(new A.bW(r))
q.onblur=A.aU(new A.bX(r))
b.style.display="flex"
b.style.alignItems="flex-start"
b.style.padding="0"
b.style.margin="0"
b.style.width="fit-content"
b.style.height="fit-content"
b.style.background="gray"
b.appendChild(q)
r.W(0)},
T(a,b){return new A.z(B.a.i(a,this.b),B.a.i(b,this.c))},
ap(){var s=this.x,r=s.getContext("2d")
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
D(a,b,c,d){var s,r,q,p,o,n,m=this,l=a<0||a>=m.b||b<0||b>=m.c
if(l)return
s=m.T(a,b)
a=s.a
b=s.b
r=A.d7(b)
q=r.a
p=B.a.K(1,r.b)
l=m.y
if(!(a>=0&&a<l.length))return A.d(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.d(l,q)
o=l[q]
l.$flags&2&&A.cX(l)
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
E(a,b,c,d,e){var s,r,q,p,o,n,m=this,l=a<0||a>=m.b||b<0||b>=m.c
if(l)return
s=m.T(a,b)
a=s.a
b=s.b
r=A.d7(b)
q=r.a
p=B.a.K(1,r.b)
l=m.y
if(!(a>=0&&a<l.length))return A.d(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.d(l,q)
o=l[q]
l.$flags&2&&A.cX(l)
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
aI(a,b){var s,r,q,p,o=this.T(b,a)
b=o.a
s=A.d7(o.b)
r=s.a
q=B.a.K(1,s.b)
p=this.y
if(!(b>=0&&b<p.length))return A.d(p,b)
p=p[b]
if(!(r>=0&&r<p.length))return A.d(p,r)
return(p[r]&q)>>>0>0},
aE(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=this
if(e==null)e=k.c-c
if(b==null)b=k.b-d
k.ap()
if(c===0&&d===0&&e===k.c&&b===k.b){for(s=k.y,r=s.length,q=0;q<r;++q)for(p=0;o=s[q],p<o.length;++p){o.$flags&2&&A.cX(o)
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
for(p=c;p<m;++p)k.D(l,B.a.i(p,r),o,!1)}}k.aq()},
W(a){return this.aE(0,null,0,0,null)},
b1(a,b,c,d,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.ap()
s=e.T(a,b)
a=s.a
b=s.b
r=B.a.b3(1,a0)-1
for(q=a0-1,p=t.t,o=e.x,n=0;n<8;++n){m=c[n]
l=m&r
m=A.a([],p)
for(k=a+n,j=0;j<a0;++j){i=e.aI(b+j,k)?1:0
m.push(B.a.K(i,q-j))}h=B.d.b8(m,0,new A.bT())
switch(a1){case B.w:for(j=0;j<a0;++j){m=b+j
if((B.a.v(l,q-j)&1)>0)e.E(k,m,d,o,!1)
else e.D(k,m,o,!1)}break
case B.dQ:for(j=0;j<a0;++j){m=b+j
if((B.a.v(l,q-j)&1)>0)e.D(k,m,o,!1)
else e.E(k,m,d,o,!1)}break
case B.dS:for(j=0;j<a0;++j){g=q-j
if((B.a.v(l,g)&1)>0&&(B.a.aN(h,g)&1)===0)e.E(k,b+j,d,o,!1)}break
case B.dR:for(j=0;j<a0;++j)if((B.a.v(l,q-j)&1)>0)e.E(k,b+j,d,o,!1)
break
case B.dT:for(f=l&h,j=0;j<a0;++j)if((B.a.v(f,q-j)&1)>0)e.E(k,b+j,d,o,!1)
break
case B.dU:for(f=l&h,j=0;j<a0;++j)if((B.a.v(f,q-j)&1)>0)e.D(k,b+j,o,!1)
break
case B.dV:for(f=l&h,j=0;j<a0;++j)if((B.a.v(f,q-j)&1)===0)e.D(k,b+j,o,!1)
break
case B.dW:for(f=l&h,j=0;j<a0;++j){m=b+j
if((B.a.v(f,q-j)&1)===0)e.D(k,m,o,!1)
else e.E(k,m,d,o,!1)}break}}e.aq()},
aJ(a,b,c){this.b1(c.a,c.b,b,a,8,B.w,!0,!1,!1)},
gaG(){return this.z&&J.W(self.document.activeElement,this.w)},
I(){var s=this.w
s.style.opacity="1.0"
s.focus()},
G(){var s=this.w
s.style.opacity="0.5"
s.blur()}}
A.bU.prototype={
$0(){this.a.z=!0},
$S:1}
A.bV.prototype={
$0(){this.a.z=!1},
$S:1}
A.bW.prototype={
$0(){this.a.I()},
$S:1}
A.bX.prototype={
$0(){this.a.G()},
$S:1}
A.bT.prototype={
$2(a,b){return(a|b)>>>0},
$S:15}
A.C.prototype={
O(){return"Mode."+this.b}}
A.ab.prototype={
O(){return"State."+this.b}}
A.aE.prototype={
aR(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=this,r=s.f
r.tabIndex=-1
r.onfocus=A.aU(new A.c4(s))
r.onblur=A.aU(new A.c5(s))
r.onkeydown=A.e3(new A.c6(s,l,new A.ca(),new A.c9(s)))
r.onclick=A.e3(new A.c7(s,new A.cb(s),o))
A.dK(A.dD(300),new A.c8(s))
s.G()
s.W(0)},
ga9(){var s=this.w
s===$&&A.j()
return s.ga9()},
ga7(){var s=this.w
s===$&&A.j()
return s.ga7()},
a6(a,b){return new A.z(B.a.i(a,this.a),B.a.i(b,this.b))},
au(){var s=this,r=s.x
s.CW.V(0,new A.M(r.c,r.d," ","white"))
s.U()
s.cy=!1},
U(){var s,r,q,p,o,n,m,l,k,j,i,h=this
for(s=h.CW,r=A.fb(s,s.r,s.$ti.c),q=h.w,p=h.cx,o=8+h.c,n=r.$ti.c;r.F();){m=r.d
if(m==null)m=n.a(m)
l=m.a
k=m.b
if(p.a8(m.c)){j=p.n(0,m.c)
j.toString
i=j}else i=$.eq()
q===$&&A.j()
q.aJ(m.d,i,new A.z(l*o,k*8))}if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.av()}},
ak(a,b){var s,r=this.a6(b,a)
b=r.a
a=r.b
s=this.ch
if(!(b>=0&&b<s.length))return A.d(s,b)
s=s[b]
if(!(a>=0&&a<s.length))return A.d(s,a)
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
if(!(m>=0&&m<q.length))return A.d(q,m)
m=q[m]
if(!(l>=0&&l<m.length))return A.d(m,l)
k=m[l]
k.c=n
k.d=b
p.V(0,k)
i.sX(i.d+1)}j.U()
if(d)j.bg()},
B(a,b,c,d){return this.ag(a,b,c,!0,d)},
af(a,b,c){return this.ag(a,null,b,!0,c)},
aH(a,b){return this.ag(a,null,null,b,null)},
W(a){var s,r,q,p,o=this,n=o.b,m=o.a
for(s=o.ch,r=0;r<m;++r)for(q=0;q<n;++q){if(!(r<s.length))return A.d(s,r)
p=s[r]
if(!(q<p.length))return A.d(p,q)
p=p[q]
p.c=" "
p.d="white"}s=o.w
s===$&&A.j()
p=8+o.c
s.aE(0,m*p,0,0*p,n*8)
p=o.x
p.c=0%p.a
p.sX(0)},
I(){return this.ga9().$0()},
G(){return this.ga7().$0()}}
A.cb.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.w
i===$&&A.j()
s=J.dw(a.offsetX)
r=Math.max(Math.min(B.a.A(J.dw(a.offsetY)-1,i.e),i.b-1),0)
q=Math.max(Math.min(B.a.A(s-1,i.d),i.c-1),0)
p=B.a.A(r,8+j.c)
o=B.a.q(q,8)
n=j.ak(o,p)
m=j.a6(p,o)
l=m.a
k=m.b
j=j.ch
if(!(l>=0&&l<j.length))return A.d(j,l)
j=j[l]
if(!(k>=0&&k<j.length))return A.d(j,k)
return new A.a6(p,o,n,j[k].d,r,q,i.aI(q,r))},
$S:16}
A.ca.prototype={
$1(a){var s=a.keyCode
return new A.O(s)},
$S:17}
A.c9.prototype={
$0(){var s,r,q,p,o,n=this.a,m=n.a,l=n.b,k=new A.a9(m,l)
k.sp(n.y.gp())
s=A.a([],t.s)
r=n.z
q=r.b
while(p=k.c,o=k.d,p*l+o<r.c*q+r.d){s.push(n.ak(o,p))
p=k.c*l+k.d+1
k.c=B.a.i(B.a.A(p,l),m)
k.d=B.a.i(p,l)}return B.d.bc(s,"")},
$S:18}
A.c4.prototype={
$0(){var s=this.a.w
s===$&&A.j()
s.I()},
$S:1}
A.c5.prototype={
$0(){var s=this.a.w
s===$&&A.j()
s.G()},
$S:1}
A.c6.prototype={
$1(a){var s,r,q,p
a.preventDefault()
s=this.a
switch(s.ay){case B.y:this.b.$2(s,this.c.$1(a))
break
case B.dX:break
case B.z:s.au()
$label0$1:{r=a.keyCode
if(13===r)break $label0$1
if(8===r){q=s.x
if(q.gp()>s.y.gp()){q.sp(q.gp()-1)
s.aH(" ",!1)
q.sp(q.gp()-1)}break $label0$1}p=a.key
if(p.length===1&&s.x.gp()<s.z.gp())s.aH(p,!1)}break
case B.dY:break}},
$S:5}
A.c7.prototype={
$1(a){a.preventDefault()},
$S:5}
A.c8.prototype={
$1(a){var s,r,q,p=this.a,o=p.w
o===$&&A.j()
if(o.gaG()&&p.ay===B.z)if(p.cy)p.au()
else{s=p.x
r=s.c
s=s.d
q=$.ep()
o.aJ("white",q,new A.z(r*(8+p.c),s*8))
p.cy=!0}},
$S:6}
A.y.prototype={
O(){return"Value."+this.b}}
A.a2.prototype={
O(){return"GameState."+this.b}}
A.bZ.prototype={
aQ(a,b,c){var s=this,r=A.f3(s.b,c,!0,0,s.a+1,!1,new A.c_(s))
s.e!==$&&A.hw()
s.e=r
A.dK(A.dD(100),new A.c0(s))
r.I()},
aM(){var s,r,q,p,o,n=this
switch(n.ay){case B.l:n.Z(A.a(["Snake!","","Press any key to start!"],t.s))
n.ay=B.k
break
case B.n:s=n.e
s===$&&A.j()
r=n.f
s.B("#","red",n.r,r)
n.Z(A.a([" Game Over! ",""," Press any key to "," play again! "],t.s))
n.ay=B.k
break
case B.m:s=n.c
if(s.length!==0){q=B.d.gaF(s)
B.d.bj(s,q)
s=q.a
if(s===n.y&&q.b===n.z)n.Y()
else{r=n.e
r===$&&A.j()
r.af(" ",q.b,s)}}s=n.ax
s===$&&A.j()
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
else n.aL(!1)
n.ba()
s=n.f
if(!(s>=0&&s<r.length))return A.d(r,s)
r=r[s]
p=n.r
o=n.at
if(!(p>=0&&p<r.length))return A.d(r,p)
r[p]=o
o=n.e
o===$&&A.j()
o.B("#","lightgreen",p,s)
break
case B.k:break}},
aL(a){var s,r,q=this,p=q.d,o=q.w
if(!(o>=0&&o<p.length))return A.d(p,o)
p=p[o]
s=q.x
if(!(s>=0&&s<p.length))return A.d(p,s)
r=p[s]
p[s]=B.c
p=q.e
if(a){p===$&&A.j()
p.B("+","red",s,o)
q.c.push(new A.a8(q.w,q.x,t.D))}else{p===$&&A.j()
p.af(" ",s,o)}$label0$0:{if(B.f===r){q.w=B.a.i(q.w-1,q.a)
break $label0$0}if(B.h===r){q.w=B.a.i(q.w+1,q.a)
break $label0$0}if(B.i===r){q.x=B.a.i(q.x-1,q.b)
break $label0$0}if(B.j===r){q.x=B.a.i(q.x+1,q.b)
break $label0$0}break $label0$0}},
ba(){var s,r,q,p,o=this
$label0$0:{s=o.at
s===$&&A.j()
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
for(p=0;p<5;++p)o.aL(!0)}else{s=o.Q
o.as=r+(s<10?s:20);++o.ch}o.aj()
break $label1$1}if(B.t===q){o.ch+=3
break $label1$1}if(B.c===q)break $label1$1
o.ay=B.n}},
Z(a){return this.bs(a)},
bs(a){var s=0,r=A.fV(t.n),q=this,p,o,n,m,l,k
var $async$Z=A.h5(function(b,c){if(b===1)return A.fx(c,r)
while(true)switch(s){case 0:l=a.length
k=B.a.q(q.a-l,2)
for(p=q.b,o=0;o<a.length;a.length===l||(0,A.dt)(a),++o){n=a[o]
m=q.e
m===$&&A.j()
m.B(n,"white",B.a.q(p-n.length,2),k);++k}return A.fy(null,r)}})
return A.fz($async$Z,r)},
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
s=$.d_().J(4)
if(!(s>=0&&s<4))return A.d(m,s)
s=m[s]
n.ax=n.at=s
m=n.f
if(!(m>=0&&m<l.length))return A.d(l,m)
m=l[m]
l=n.r
if(!(l>=0&&l<m.length))return A.d(m,l)
m[l]=s
n.aj()
n.ay=B.m},
aC(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.a,d=f.b,c=f.d
do{s=$.d_()
r=s.J(e)
q=s.J(d)
if(!(r>=0&&r<c.length))return A.d(c,r)
s=c[r]
if(!(q>=0&&q<s.length))return A.d(s,q)}while(s[q]!==B.c&&Math.abs(r-f.f)+Math.abs(q-f.r)<10)
for(s=t.t,s=[A.a([-1,0],s),A.a([1,0],s),A.a([0,0],s),A.a([0,-1],s),A.a([0,1],s)],p=0;p<5;++p){o=s[p]
n=B.d.gaF(o)
if(typeof n!=="number")return A.ei(n)
m=B.o.i(r+n,e)
n=B.d.gbd(o)
if(typeof n!=="number")return A.ei(n)
l=B.o.i(q+n,d)
if(m>>>0!==m||m>=c.length)return A.d(c,m)
n=c[m]
if(l>>>0!==l||l>=n.length)return A.d(n,l)
if(n[l]===B.c)if(m===r||l===q){n[l]=B.t
n=f.e
n===$&&A.j()
k=B.a.i(m,n.a)
j=B.a.i(l,n.b)
i=n.ch
if(!(k<i.length))return A.d(i,k)
h=i[k]
if(!(j<h.length))return A.d(h,j)
h=h[j]
h.c="x"
g=n.CW
g.V(0,h)
n.U()
if(!(k<i.length))return A.d(i,k)
k=i[k]
if(!(j<k.length))return A.d(k,j)
j=k[j]
j.d="red"
g.V(0,j)
n.U()}}},
Y(){var s,r=this,q=r.cx,p=r.e
if(q){p===$&&A.j()
q=r.y
p.B("P","gold",r.z,q)}else{p===$&&A.j()
q=r.Q
q=q<10?""+q:"o"
s=r.y
p.B(q,"gold",r.z,s)}},
aj(){var s,r,q=this,p="Score: "+q.as,o=q.b,n=o-p.length,m=B.a.q(n,2),l=q.e
l===$&&A.j()
s=q.a
l.B(B.p.a_(" ",m)+p+B.p.a_(" ",n-m),"white",0,s)
n=q.d
do{l=$.d_()
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
q.Y()}else{q.cx=!1
q.Q=11
q.Y()}if(B.a.i(q.CW,13)===0)q.aC()}}
A.c_.prototype={
$2(a,b){var s,r,q,p=this.a,o=new A.c1(p)
$label0$0:{s=p.ay
if(B.n===s||B.l===s)break $label0$0
if(B.k===s){r=p.e
r===$&&A.j()
r.W(0)
p.bf()
break $label0$0}if(B.m===s){switch(b.a){case 38:r=p.ax
r===$&&A.j()
if(r!==B.h&&r!==B.f&&o.$2(p.f-1,p.r)){p.ax=B.f;--p.Q}break
case 40:r=p.ax
r===$&&A.j()
if(r!==B.f&&r!==B.h&&o.$2(p.f+1,p.r)){p.ax=B.h;--p.Q}break
case 37:r=p.ax
r===$&&A.j()
if(r!==B.j&&r!==B.i&&o.$2(p.f,p.r-1)){p.ax=B.i;--p.Q}break
case 39:r=p.ax
r===$&&A.j()
if(r!==B.i&&r!==B.j&&o.$2(p.f,p.r+1)){p.ax=B.j;--p.Q}break}if(p.Q===0){p.ch=p.cx?0:1
r=p.e
r===$&&A.j()
q=p.y
r.af(" ",p.z,q)
q=p.d
r=p.y
if(!(r>=0&&r<q.length))return A.d(q,r)
r=q[r]
q=p.z
if(!(q>=0&&q<r.length))return A.d(r,q)
r[q]=B.c
if(!p.cx)p.aC()
p.aj()}else p.Y()
break $label0$0}}},
$S:19}
A.c1.prototype={
$2(a,b){var s=A.a([B.r,B.t,B.c],t.p),r=this.a,q=r.d,p=B.a.i(a,r.a)
if(!(p<q.length))return A.d(q,p)
p=q[p]
r=B.a.i(b,r.b)
if(!(r<p.length))return A.d(p,r)
return B.d.b6(s,p[r])},
$S:20}
A.c0.prototype={
$1(a){var s=this.a,r=s.e
r===$&&A.j()
r=r.w
r===$&&A.j()
if(r.gaG())s.aM()},
$S:6};(function aliases(){var s=J.P.prototype
s.aO=s.h})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._instance_0u
s(A,"h6","f8",3)
s(A,"h7","f9",3)
s(A,"h8","fa",3)
r(A,"ed","h0",0)
var p
q(p=A.br.prototype,"ga9","I",0)
q(p,"ga7","G",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.h,null)
q(A.h,[A.d2,J.b9,J.b0,A.i,A.bY,A.bd,A.an,A.ag,A.b5,A.cd,A.bQ,A.am,A.aN,A.Y,A.av,A.bO,A.x,A.bC,A.bG,A.aO,A.bw,A.X,A.bz,A.ad,A.r,A.by,A.bE,A.cJ,A.aC,A.cC,A.af,A.l,A.b6,A.cl,A.bo,A.aD,A.cm,A.p,A.bF,A.bt,A.cA,A.a8,A.M,A.O,A.a6,A.a9,A.br,A.aE,A.bZ])
q(J.b9,[J.ba,J.ap,J.ar,J.aq,J.as,J.a3,J.a4])
q(J.ar,[J.P,J.o,A.be,A.ay])
q(J.P,[J.bp,J.ac,J.N])
r(J.bN,J.o)
q(J.a3,[J.ao,J.bb])
q(A.i,[A.a5,A.F,A.bc,A.bv,A.bA,A.bq,A.bB,A.b1,A.B,A.aF,A.bu,A.bs,A.b3])
r(A.bD,A.ag)
r(A.z,A.bD)
r(A.b7,A.b5)
r(A.aA,A.F)
q(A.Y,[A.bK,A.bL,A.c3,A.cR,A.cT,A.ci,A.ch,A.cK,A.cr,A.cy,A.cF,A.cb,A.ca,A.c6,A.c7,A.c8,A.c0])
q(A.c3,[A.c2,A.al])
r(A.au,A.av)
r(A.at,A.au)
q(A.bL,[A.cS,A.cL,A.cO,A.cs,A.cz,A.bP,A.bT,A.c_,A.c1])
q(A.ay,[A.bf,A.a7])
q(A.a7,[A.aH,A.aJ])
r(A.aI,A.aH)
r(A.aw,A.aI)
r(A.aK,A.aJ)
r(A.ax,A.aK)
q(A.aw,[A.bg,A.bh])
q(A.ax,[A.bi,A.bj,A.bk,A.bl,A.bm,A.az,A.bn])
r(A.aP,A.bB)
q(A.bK,[A.cj,A.ck,A.cH,A.cG,A.cn,A.cu,A.ct,A.cq,A.cp,A.co,A.cx,A.cw,A.cv,A.cN,A.cE,A.bU,A.bV,A.bW,A.bX,A.c9,A.c4,A.c5])
r(A.bx,A.bz)
r(A.cD,A.cJ)
r(A.aM,A.aC)
r(A.aG,A.aM)
q(A.B,[A.aa,A.b8])
q(A.cl,[A.C,A.ab,A.y,A.a2])
s(A.aH,A.l)
s(A.aI,A.an)
s(A.aJ,A.l)
s(A.aK,A.an)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{c:"int",t:"double",hs:"num",D:"String",dk:"bool",p:"Null",f:"List",h:"Object",hC:"Map"},mangledNames:{},types:["~()","p()","p(@)","~(~())","p(h,Q)","p(k)","~(cc)","@(@)","@(@,D)","@(D)","p(~())","~(@)","p(@,Q)","~(c,@)","~(h?,h?)","c(c,c)","a6(k)","O(k)","D()","~(aE,O)","dk(c,c)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.z&&a.b(c.a)&&b.b(c.b)}}
A.fs(v.typeUniverse,JSON.parse('{"bp":"P","ac":"P","N":"P","ba":{"e":[]},"ap":{"p":[],"e":[]},"ar":{"k":[]},"P":{"k":[]},"o":{"f":["1"],"k":[]},"bN":{"o":["1"],"f":["1"],"k":[]},"a3":{"t":[]},"ao":{"t":[],"c":[],"e":[]},"bb":{"t":[],"e":[]},"a4":{"D":[],"e":[]},"a5":{"i":[]},"aA":{"F":[],"i":[]},"bc":{"i":[]},"bv":{"i":[]},"aN":{"Q":[]},"bA":{"i":[]},"bq":{"i":[]},"au":{"av":["1","2"]},"at":{"au":["1","2"],"av":["1","2"]},"be":{"k":[],"e":[]},"ay":{"k":[]},"bf":{"k":[],"e":[]},"a7":{"w":["1"],"k":[]},"aw":{"l":["t"],"f":["t"],"w":["t"],"k":[]},"ax":{"l":["c"],"f":["c"],"w":["c"],"k":[]},"bg":{"l":["t"],"f":["t"],"w":["t"],"k":[],"e":[],"l.E":"t"},"bh":{"l":["t"],"f":["t"],"w":["t"],"k":[],"e":[],"l.E":"t"},"bi":{"l":["c"],"f":["c"],"w":["c"],"k":[],"e":[],"l.E":"c"},"bj":{"l":["c"],"f":["c"],"w":["c"],"k":[],"e":[],"l.E":"c"},"bk":{"l":["c"],"f":["c"],"w":["c"],"k":[],"e":[],"l.E":"c"},"bl":{"l":["c"],"f":["c"],"w":["c"],"k":[],"e":[],"l.E":"c"},"bm":{"cf":[],"l":["c"],"f":["c"],"w":["c"],"k":[],"e":[],"l.E":"c"},"az":{"l":["c"],"f":["c"],"w":["c"],"k":[],"e":[],"l.E":"c"},"bn":{"l":["c"],"f":["c"],"w":["c"],"k":[],"e":[],"l.E":"c"},"bB":{"i":[]},"aP":{"F":[],"i":[]},"aO":{"cc":[]},"X":{"i":[]},"r":{"a1":["1"]},"aG":{"aC":["1"]},"aM":{"aC":["1"]},"b1":{"i":[]},"F":{"i":[]},"B":{"i":[]},"aa":{"i":[]},"b8":{"i":[]},"aF":{"i":[]},"bu":{"i":[]},"bs":{"i":[]},"b3":{"i":[]},"bo":{"i":[]},"aD":{"i":[]},"bF":{"Q":[]},"eS":{"f":["c"]},"f6":{"f":["c"]},"f5":{"f":["c"]},"eQ":{"f":["c"]},"f4":{"f":["c"]},"eR":{"f":["c"]},"cf":{"f":["c"]},"eN":{"f":["t"]},"eO":{"f":["t"]}}'))
A.fr(v.typeUniverse,JSON.parse('{"an":1,"b5":2,"a7":1,"bz":1,"bE":1,"aM":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.dn
return{o:s("M"),Q:s("i"),Z:s("hB"),V:s("o<M>"),G:s("o<f<M>>"),I:s("o<f<y>>"),f:s("o<h>"),U:s("o<a8<c>>"),s:s("o<D>"),w:s("o<cf>"),p:s("o<y>"),b:s("o<@>"),t:s("o<c>"),T:s("ap"),m:s("k"),g:s("N"),E:s("w<@>"),W:s("O"),j:s("f<@>"),q:s("a6"),P:s("p"),K:s("h"),D:s("a8<c>"),L:s("hD"),F:s("+()"),l:s("Q"),N:s("D"),J:s("cc"),R:s("e"),c:s("F"),B:s("ac"),d:s("r<@>"),y:s("dk"),i:s("t"),z:s("@"),v:s("@(h)"),C:s("@(h,Q)"),S:s("c"),A:s("0&*"),_:s("h*"),O:s("a1<p>?"),X:s("h?"),H:s("hs"),n:s("~")}})();(function constants(){var s=hunkHelpers.makeConstList
B.J=J.b9.prototype
B.d=J.o.prototype
B.a=J.ao.prototype
B.o=J.a3.prototype
B.p=J.a4.prototype
B.K=J.N.prototype
B.L=J.ar.prototype
B.x=J.bp.prototype
B.q=J.ac.prototype
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

B.G=new A.bo()
B.e=new A.bY()
B.H=new A.cA()
B.b=new A.cD()
B.I=new A.bF()
B.l=new A.a2("titleScreen")
B.k=new A.a2("wait")
B.m=new A.a2("play")
B.n=new A.a2("gameOver")
B.da=A.a(s([126,129,165,129,189,153,129,126]),t.t)
B.ac=A.a(s([126,255,219,255,195,231,255,126]),t.t)
B.dH=A.a(s([108,254,254,254,124,56,16,0]),t.t)
B.c7=A.a(s([16,56,124,254,124,56,16,0]),t.t)
B.b5=A.a(s([56,124,56,254,254,124,56,124]),t.t)
B.bh=A.a(s([16,16,56,124,254,124,56,124]),t.t)
B.aA=A.a(s([0,0,24,60,60,24,0,0]),t.t)
B.aD=A.a(s([255,255,231,195,195,231,255,255]),t.t)
B.aP=A.a(s([0,60,102,66,66,102,60,0]),t.t)
B.cV=A.a(s([255,195,153,189,189,153,195,255]),t.t)
B.dG=A.a(s([15,7,15,125,204,204,204,120]),t.t)
B.dF=A.a(s([60,102,102,102,60,24,126,24]),t.t)
B.cS=A.a(s([63,51,63,48,48,112,240,224]),t.t)
B.W=A.a(s([127,99,127,99,99,103,230,192]),t.t)
B.a0=A.a(s([153,90,60,231,231,60,90,153]),t.t)
B.ax=A.a(s([128,224,248,254,248,224,128,0]),t.t)
B.bD=A.a(s([2,14,62,254,62,14,2,0]),t.t)
B.cl=A.a(s([24,60,126,24,24,126,60,24]),t.t)
B.ch=A.a(s([102,102,102,102,102,0,102,0]),t.t)
B.cr=A.a(s([127,219,219,123,27,27,27,0]),t.t)
B.cs=A.a(s([62,99,56,108,108,56,204,120]),t.t)
B.bR=A.a(s([0,0,0,0,126,126,126,0]),t.t)
B.bU=A.a(s([24,60,126,24,126,60,24,255]),t.t)
B.R=A.a(s([24,60,126,24,24,24,24,0]),t.t)
B.df=A.a(s([24,24,24,24,126,60,24,0]),t.t)
B.d8=A.a(s([0,24,12,254,12,24,0,0]),t.t)
B.au=A.a(s([0,48,96,254,96,48,0,0]),t.t)
B.bZ=A.a(s([0,0,192,192,192,254,0,0]),t.t)
B.bw=A.a(s([0,36,102,255,102,36,0,0]),t.t)
B.aa=A.a(s([0,24,60,126,255,255,0,0]),t.t)
B.bV=A.a(s([0,255,255,126,60,24,0,0]),t.t)
B.b0=A.a(s([0,0,0,0,0,0,0,0]),t.t)
B.bE=A.a(s([48,120,120,48,48,0,48,0]),t.t)
B.Z=A.a(s([108,108,108,0,0,0,0,0]),t.t)
B.ao=A.a(s([108,108,254,108,254,108,108,0]),t.t)
B.c2=A.a(s([48,124,192,120,12,248,48,0]),t.t)
B.Q=A.a(s([0,198,204,24,48,102,198,0]),t.t)
B.cE=A.a(s([56,108,56,118,220,204,118,0]),t.t)
B.an=A.a(s([96,96,192,0,0,0,0,0]),t.t)
B.V=A.a(s([24,48,96,96,96,48,24,0]),t.t)
B.bA=A.a(s([96,48,24,24,24,48,96,0]),t.t)
B.cv=A.a(s([0,102,60,255,60,102,0,0]),t.t)
B.dO=A.a(s([0,48,48,252,48,48,0,0]),t.t)
B.c4=A.a(s([0,0,0,0,0,48,48,96]),t.t)
B.bv=A.a(s([0,0,0,252,0,0,0,0]),t.t)
B.cj=A.a(s([0,0,0,0,0,48,48,0]),t.t)
B.a5=A.a(s([6,12,24,48,96,192,128,0]),t.t)
B.b8=A.a(s([124,198,206,222,246,230,124,0]),t.t)
B.cm=A.a(s([48,112,48,48,48,48,252,0]),t.t)
B.c0=A.a(s([120,204,12,56,96,204,252,0]),t.t)
B.dJ=A.a(s([120,204,12,56,12,204,120,0]),t.t)
B.bC=A.a(s([28,60,108,204,254,12,30,0]),t.t)
B.d9=A.a(s([252,192,248,12,12,204,120,0]),t.t)
B.dr=A.a(s([56,96,192,248,204,204,120,0]),t.t)
B.c1=A.a(s([252,204,12,24,48,48,48,0]),t.t)
B.cy=A.a(s([120,204,204,120,204,204,120,0]),t.t)
B.bf=A.a(s([120,204,204,124,12,24,112,0]),t.t)
B.d2=A.a(s([0,48,48,0,0,48,48,0]),t.t)
B.aS=A.a(s([0,48,48,0,0,48,48,96]),t.t)
B.bB=A.a(s([24,48,96,192,96,48,24,0]),t.t)
B.bq=A.a(s([0,0,252,0,0,252,0,0]),t.t)
B.aC=A.a(s([96,48,24,12,24,48,96,0]),t.t)
B.as=A.a(s([120,204,12,24,48,0,48,0]),t.t)
B.dm=A.a(s([124,198,222,222,222,192,120,0]),t.t)
B.cd=A.a(s([48,120,204,204,252,204,204,0]),t.t)
B.aM=A.a(s([252,102,102,124,102,102,252,0]),t.t)
B.ae=A.a(s([60,102,192,192,192,102,60,0]),t.t)
B.a6=A.a(s([248,108,102,102,102,108,248,0]),t.t)
B.ak=A.a(s([254,98,104,120,104,98,254,0]),t.t)
B.cp=A.a(s([254,98,104,120,104,96,240,0]),t.t)
B.aq=A.a(s([60,102,192,192,206,102,62,0]),t.t)
B.at=A.a(s([204,204,204,252,204,204,204,0]),t.t)
B.cN=A.a(s([120,48,48,48,48,48,120,0]),t.t)
B.bP=A.a(s([30,12,12,12,204,204,120,0]),t.t)
B.bH=A.a(s([230,102,108,120,108,102,230,0]),t.t)
B.bG=A.a(s([240,96,96,96,98,102,254,0]),t.t)
B.aN=A.a(s([198,238,254,254,214,198,198,0]),t.t)
B.Y=A.a(s([198,230,246,222,206,198,198,0]),t.t)
B.cX=A.a(s([56,108,198,198,198,108,56,0]),t.t)
B.bl=A.a(s([252,102,102,124,96,96,240,0]),t.t)
B.cH=A.a(s([120,204,204,204,220,120,28,0]),t.t)
B.P=A.a(s([252,102,102,124,108,102,230,0]),t.t)
B.ah=A.a(s([120,204,224,112,28,204,120,0]),t.t)
B.dA=A.a(s([252,180,48,48,48,48,120,0]),t.t)
B.aK=A.a(s([204,204,204,204,204,204,252,0]),t.t)
B.a2=A.a(s([204,204,204,204,204,120,48,0]),t.t)
B.cQ=A.a(s([198,198,198,214,254,238,198,0]),t.t)
B.cK=A.a(s([198,198,108,56,56,108,198,0]),t.t)
B.a4=A.a(s([204,204,204,120,48,48,120,0]),t.t)
B.T=A.a(s([254,198,140,24,50,102,254,0]),t.t)
B.bx=A.a(s([120,96,96,96,96,96,120,0]),t.t)
B.cC=A.a(s([192,96,48,24,12,6,2,0]),t.t)
B.bz=A.a(s([120,24,24,24,24,24,120,0]),t.t)
B.dq=A.a(s([16,56,108,198,0,0,0,0]),t.t)
B.O=A.a(s([0,0,0,0,0,0,0,255]),t.t)
B.aL=A.a(s([48,48,24,0,0,0,0,0]),t.t)
B.dg=A.a(s([0,0,120,12,124,204,118,0]),t.t)
B.cg=A.a(s([224,96,96,124,102,102,220,0]),t.t)
B.cJ=A.a(s([0,0,120,204,192,204,120,0]),t.t)
B.b6=A.a(s([28,12,12,124,204,204,118,0]),t.t)
B.dt=A.a(s([0,0,120,204,252,192,120,0]),t.t)
B.aQ=A.a(s([56,108,96,240,96,96,240,0]),t.t)
B.cG=A.a(s([0,0,118,204,204,124,12,248]),t.t)
B.aB=A.a(s([224,96,108,118,102,102,230,0]),t.t)
B.cw=A.a(s([48,0,112,48,48,48,120,0]),t.t)
B.bK=A.a(s([12,0,12,12,12,204,204,120]),t.t)
B.bd=A.a(s([224,96,102,108,120,108,230,0]),t.t)
B.bM=A.a(s([112,48,48,48,48,48,120,0]),t.t)
B.bu=A.a(s([0,0,204,254,254,214,198,0]),t.t)
B.bN=A.a(s([0,0,248,204,204,204,204,0]),t.t)
B.bg=A.a(s([0,0,120,204,204,204,120,0]),t.t)
B.dx=A.a(s([0,0,220,102,102,124,96,240]),t.t)
B.du=A.a(s([0,0,118,204,204,124,12,30]),t.t)
B.br=A.a(s([0,0,220,118,102,96,240,0]),t.t)
B.d_=A.a(s([0,0,124,192,120,12,248,0]),t.t)
B.cT=A.a(s([16,48,124,48,48,52,24,0]),t.t)
B.ca=A.a(s([0,0,204,204,204,204,118,0]),t.t)
B.b4=A.a(s([0,0,204,204,204,120,48,0]),t.t)
B.bk=A.a(s([0,0,198,214,254,254,108,0]),t.t)
B.bI=A.a(s([0,0,198,108,56,108,198,0]),t.t)
B.dD=A.a(s([0,0,204,204,204,124,12,248]),t.t)
B.de=A.a(s([0,0,252,152,48,100,252,0]),t.t)
B.ba=A.a(s([28,48,48,224,48,48,28,0]),t.t)
B.cZ=A.a(s([24,24,24,0,24,24,24,0]),t.t)
B.aF=A.a(s([224,48,48,28,48,48,224,0]),t.t)
B.dN=A.a(s([118,220,0,0,0,0,0,0]),t.t)
B.b3=A.a(s([0,16,56,108,198,198,254,0]),t.t)
B.aw=A.a(s([120,204,192,204,120,24,12,120]),t.t)
B.dc=A.a(s([0,204,0,204,204,204,126,0]),t.t)
B.dC=A.a(s([28,0,120,204,252,192,120,0]),t.t)
B.c3=A.a(s([126,195,60,6,62,102,63,0]),t.t)
B.aj=A.a(s([204,0,120,12,124,204,126,0]),t.t)
B.b7=A.a(s([224,0,120,12,124,204,126,0]),t.t)
B.a9=A.a(s([48,48,120,12,124,204,126,0]),t.t)
B.bn=A.a(s([0,0,120,192,192,120,12,56]),t.t)
B.dl=A.a(s([126,195,60,102,126,96,60,0]),t.t)
B.aO=A.a(s([204,0,120,204,252,192,120,0]),t.t)
B.d0=A.a(s([224,0,120,204,252,192,120,0]),t.t)
B.dd=A.a(s([204,0,112,48,48,48,120,0]),t.t)
B.cR=A.a(s([124,198,56,24,24,24,60,0]),t.t)
B.b_=A.a(s([224,0,112,48,48,48,120,0]),t.t)
B.dI=A.a(s([198,56,108,198,254,198,198,0]),t.t)
B.cY=A.a(s([48,48,0,120,204,252,204,0]),t.t)
B.bF=A.a(s([28,0,252,96,120,96,252,0]),t.t)
B.dB=A.a(s([0,0,127,12,127,204,127,0]),t.t)
B.aT=A.a(s([62,108,204,254,204,204,206,0]),t.t)
B.dv=A.a(s([120,204,0,120,204,204,120,0]),t.t)
B.af=A.a(s([0,204,0,120,204,204,120,0]),t.t)
B.dK=A.a(s([0,224,0,120,204,204,120,0]),t.t)
B.aR=A.a(s([120,204,0,204,204,204,126,0]),t.t)
B.cU=A.a(s([0,224,0,204,204,204,126,0]),t.t)
B.az=A.a(s([0,204,0,204,204,124,12,248]),t.t)
B.al=A.a(s([195,24,60,102,102,60,24,0]),t.t)
B.d6=A.a(s([204,0,204,204,204,204,120,0]),t.t)
B.a_=A.a(s([24,24,126,192,192,126,24,24]),t.t)
B.aI=A.a(s([56,108,100,240,96,230,252,0]),t.t)
B.b1=A.a(s([204,204,120,252,48,252,48,48]),t.t)
B.dh=A.a(s([248,204,204,250,198,207,198,199]),t.t)
B.bQ=A.a(s([14,27,24,60,24,24,216,112]),t.t)
B.aE=A.a(s([28,0,120,12,124,204,126,0]),t.t)
B.cf=A.a(s([56,0,112,48,48,48,120,0]),t.t)
B.aH=A.a(s([0,28,0,120,204,204,120,0]),t.t)
B.cz=A.a(s([0,28,0,204,204,204,126,0]),t.t)
B.aX=A.a(s([0,248,0,248,204,204,204,0]),t.t)
B.cP=A.a(s([252,0,204,236,252,220,204,0]),t.t)
B.ag=A.a(s([60,108,108,62,0,126,0,0]),t.t)
B.cc=A.a(s([56,108,108,56,0,124,0,0]),t.t)
B.d7=A.a(s([48,0,48,96,192,204,120,0]),t.t)
B.aZ=A.a(s([0,0,0,252,192,192,0,0]),t.t)
B.aG=A.a(s([0,0,0,252,12,12,0,0]),t.t)
B.d1=A.a(s([195,198,204,222,51,102,204,15]),t.t)
B.ay=A.a(s([195,198,204,219,55,111,207,3]),t.t)
B.bT=A.a(s([24,24,0,24,24,24,24,0]),t.t)
B.bS=A.a(s([0,51,102,204,102,51,0,0]),t.t)
B.bc=A.a(s([0,204,102,51,102,204,0,0]),t.t)
B.cB=A.a(s([34,136,34,136,34,136,34,136]),t.t)
B.dw=A.a(s([85,170,85,170,85,170,85,170]),t.t)
B.bL=A.a(s([219,119,219,238,219,119,219,238]),t.t)
B.b2=A.a(s([24,24,24,24,24,24,24,24]),t.t)
B.aY=A.a(s([24,24,24,24,248,24,24,24]),t.t)
B.c_=A.a(s([24,24,248,24,248,24,24,24]),t.t)
B.dM=A.a(s([54,54,54,54,246,54,54,54]),t.t)
B.cn=A.a(s([0,0,0,0,254,54,54,54]),t.t)
B.aU=A.a(s([0,0,248,24,248,24,24,24]),t.t)
B.ad=A.a(s([54,54,246,6,246,54,54,54]),t.t)
B.ct=A.a(s([54,54,54,54,54,54,54,54]),t.t)
B.cb=A.a(s([0,0,254,6,246,54,54,54]),t.t)
B.cx=A.a(s([54,54,246,6,254,0,0,0]),t.t)
B.ar=A.a(s([54,54,54,54,254,0,0,0]),t.t)
B.a3=A.a(s([24,24,248,24,248,0,0,0]),t.t)
B.a8=A.a(s([0,0,0,0,248,24,24,24]),t.t)
B.a1=A.a(s([24,24,24,24,31,0,0,0]),t.t)
B.bY=A.a(s([24,24,24,24,255,0,0,0]),t.t)
B.bp=A.a(s([0,0,0,0,255,24,24,24]),t.t)
B.d5=A.a(s([24,24,24,24,31,24,24,24]),t.t)
B.bW=A.a(s([0,0,0,0,255,0,0,0]),t.t)
B.cu=A.a(s([24,24,24,24,255,24,24,24]),t.t)
B.cF=A.a(s([24,24,31,24,31,24,24,24]),t.t)
B.be=A.a(s([54,54,54,54,55,54,54,54]),t.t)
B.ds=A.a(s([54,54,55,48,63,0,0,0]),t.t)
B.dk=A.a(s([0,0,63,48,55,54,54,54]),t.t)
B.bJ=A.a(s([54,54,247,0,255,0,0,0]),t.t)
B.by=A.a(s([0,0,255,0,247,54,54,54]),t.t)
B.aW=A.a(s([54,54,55,48,55,54,54,54]),t.t)
B.aV=A.a(s([0,0,255,0,255,0,0,0]),t.t)
B.dE=A.a(s([54,54,247,0,247,54,54,54]),t.t)
B.cL=A.a(s([24,24,255,0,255,0,0,0]),t.t)
B.M=A.a(s([54,54,54,54,255,0,0,0]),t.t)
B.dy=A.a(s([0,0,255,0,255,24,24,24]),t.t)
B.c5=A.a(s([0,0,0,0,255,54,54,54]),t.t)
B.co=A.a(s([54,54,54,54,63,0,0,0]),t.t)
B.bt=A.a(s([24,24,31,24,31,0,0,0]),t.t)
B.ci=A.a(s([0,0,31,24,31,24,24,24]),t.t)
B.cI=A.a(s([0,0,0,0,63,54,54,54]),t.t)
B.cO=A.a(s([54,54,54,54,255,54,54,54]),t.t)
B.bO=A.a(s([24,24,255,24,255,24,24,24]),t.t)
B.di=A.a(s([24,24,24,24,248,0,0,0]),t.t)
B.b9=A.a(s([0,0,0,0,31,24,24,24]),t.t)
B.c6=A.a(s([255,255,255,255,255,255,255,255]),t.t)
B.c9=A.a(s([0,0,0,0,255,255,255,255]),t.t)
B.bj=A.a(s([240,240,240,240,240,240,240,240]),t.t)
B.cq=A.a(s([15,15,15,15,15,15,15,15]),t.t)
B.d4=A.a(s([255,255,255,255,0,0,0,0]),t.t)
B.dL=A.a(s([0,0,118,220,200,220,118,0]),t.t)
B.dn=A.a(s([0,120,204,248,204,248,192,192]),t.t)
B.ap=A.a(s([0,252,204,192,192,192,192,0]),t.t)
B.c8=A.a(s([0,254,108,108,108,108,108,0]),t.t)
B.dj=A.a(s([252,204,96,48,96,204,252,0]),t.t)
B.bm=A.a(s([0,0,126,216,216,216,112,0]),t.t)
B.bs=A.a(s([0,102,102,102,102,124,96,192]),t.t)
B.cD=A.a(s([0,118,220,24,24,24,24,0]),t.t)
B.ai=A.a(s([252,48,120,204,204,120,48,252]),t.t)
B.aJ=A.a(s([56,108,198,254,198,108,56,0]),t.t)
B.am=A.a(s([56,108,198,198,108,108,238,0]),t.t)
B.N=A.a(s([28,48,24,124,204,204,120,0]),t.t)
B.dz=A.a(s([0,0,126,219,219,126,0,0]),t.t)
B.bo=A.a(s([6,12,126,219,219,126,96,192]),t.t)
B.ab=A.a(s([56,96,192,248,192,96,56,0]),t.t)
B.ck=A.a(s([120,204,204,204,204,204,204,0]),t.t)
B.cM=A.a(s([0,252,0,252,0,252,0,0]),t.t)
B.a7=A.a(s([48,48,252,48,48,0,252,0]),t.t)
B.bb=A.a(s([96,48,24,48,96,0,252,0]),t.t)
B.cW=A.a(s([24,48,96,48,24,0,252,0]),t.t)
B.bi=A.a(s([14,27,27,24,24,24,24,24]),t.t)
B.db=A.a(s([24,24,24,24,24,216,216,112]),t.t)
B.ce=A.a(s([48,48,0,252,0,48,48,0]),t.t)
B.S=A.a(s([0,118,220,0,118,220,0,0]),t.t)
B.cA=A.a(s([56,108,108,56,0,0,0,0]),t.t)
B.U=A.a(s([0,0,0,24,24,0,0,0]),t.t)
B.dp=A.a(s([0,0,0,0,24,0,0,0]),t.t)
B.X=A.a(s([15,12,12,12,236,108,60,28]),t.t)
B.bX=A.a(s([120,108,108,108,108,0,0,0]),t.t)
B.av=A.a(s([112,24,48,96,120,0,0,0]),t.t)
B.d3=A.a(s([0,0,60,60,60,60,0,0]),t.t)
B.dP=new A.b7(["\u263a",B.da,"\u263b",B.ac,"\u2665",B.dH,"\u2666",B.c7,"\u2663",B.b5,"\u2660",B.bh,"\u2022",B.aA,"\u25d8",B.aD,"\u25cb",B.aP,"\u25d9",B.cV,"\u2642",B.dG,"\u2640",B.dF,"\u266a",B.cS,"\u266b",B.W,"\u263c",B.a0,"\u25ba",B.ax,"\u25c4",B.bD,"\u2195",B.cl,"\u203c",B.ch,"\xb6",B.cr,"\xa7",B.cs,"\u25ac",B.bR,"\u21a8",B.bU,"\u2191",B.R,"\u2193",B.df,"\u2192",B.d8,"\u2190",B.au,"\u221f",B.bZ,"\u2194",B.bw,"\u25b2",B.aa,"\u25bc",B.bV," ",B.b0,"!",B.bE,'"',B.Z,"#",B.ao,"$",B.c2,"%",B.Q,"&",B.cE,"'",B.an,"(",B.V,")",B.bA,"*",B.cv,"+",B.dO,",",B.c4,"-",B.bv,".",B.cj,"/",B.a5,"0",B.b8,"1",B.cm,"2",B.c0,"3",B.dJ,"4",B.bC,"5",B.d9,"6",B.dr,"7",B.c1,"8",B.cy,"9",B.bf,":",B.d2,";",B.aS,"<",B.bB,"=",B.bq,">",B.aC,"?",B.as,"@",B.dm,"A",B.cd,"B",B.aM,"C",B.ae,"D",B.a6,"E",B.ak,"F",B.cp,"G",B.aq,"H",B.at,"I",B.cN,"J",B.bP,"K",B.bH,"L",B.bG,"M",B.aN,"N",B.Y,"O",B.cX,"P",B.bl,"Q",B.cH,"R",B.P,"S",B.ah,"T",B.dA,"U",B.aK,"V",B.a2,"W",B.cQ,"X",B.cK,"Y",B.a4,"Z",B.T,"[",B.bx,"\\",B.cC,"]",B.bz,"^",B.dq,"_",B.O,"`",B.aL,"a",B.dg,"b",B.cg,"c",B.cJ,"d",B.b6,"e",B.dt,"f",B.aQ,"g",B.cG,"h",B.aB,"i",B.cw,"j",B.bK,"k",B.bd,"l",B.bM,"m",B.bu,"n",B.bN,"o",B.bg,"p",B.dx,"q",B.du,"r",B.br,"s",B.d_,"t",B.cT,"u",B.ca,"v",B.b4,"w",B.bk,"x",B.bI,"y",B.dD,"z",B.de,"{",B.ba,"|",B.cZ,"}",B.aF,"~",B.dN,"\u2302",B.b3,"\xc7",B.aw,"\xfc",B.dc,"\xe9",B.dC,"\xe2",B.c3,"\xe4",B.aj,"\xe0",B.b7,"\xe5",B.a9,"\xe7",B.bn,"\xea",B.dl,"\xeb",B.aO,"\xe8",B.d0,"\xef",B.dd,"\xee",B.cR,"\xec",B.b_,"\xc4",B.dI,"\xc5",B.cY,"\xc9",B.bF,"\xe6",B.dB,"\xc6",B.aT,"\xf4",B.dv,"\xf6",B.af,"\xf2",B.dK,"\xfb",B.aR,"\xf9",B.cU,"\xff",B.az,"\xd6",B.al,"\xdc",B.d6,"\xa2",B.a_,"\xa3",B.aI,"\xa5",B.b1,"\u20a7",B.dh,"\u0192",B.bQ,"\xe1",B.aE,"\xed",B.cf,"\xf3",B.aH,"\xfa",B.cz,"\xf1",B.aX,"\xd1",B.cP,"\xaa",B.ag,"\xba",B.cc,"\xbf",B.d7,"\u2310",B.aZ,"\xac",B.aG,"\xbd",B.d1,"\xbc",B.ay,"\xa1",B.bT,"\xab",B.bS,"\xbb",B.bc,"\u2591",B.cB,"\u2592",B.dw,"\u2593",B.bL,"\u2502",B.b2,"\u2524",B.aY,"\u2561",B.c_,"\u2562",B.dM,"\u2556",B.cn,"\u2555",B.aU,"\u2563",B.ad,"\u2551",B.ct,"\u2557",B.cb,"\u255d",B.cx,"\u255c",B.ar,"\u255b",B.a3,"\u2510",B.a8,"\u2514",B.a1,"\u2534",B.bY,"\u252c",B.bp,"\u251c",B.d5,"\u2500",B.bW,"\u253c",B.cu,"\u255e",B.cF,"\u255f",B.be,"\u255a",B.ds,"\u2554",B.dk,"\u2569",B.bJ,"\u2566",B.by,"\u2560",B.aW,"\u2550",B.aV,"\u256c",B.dE,"\u2567",B.cL,"\u2568",B.M,"\u2564",B.dy,"\u2565",B.c5,"\u2559",B.co,"\u2558",B.bt,"\u2552",B.ci,"\u2553",B.cI,"\u256b",B.cO,"\u256a",B.bO,"\u2518",B.di,"\u250c",B.b9,"\u2588",B.c6,"\u2584",B.c9,"\u258c",B.bj,"\u2590",B.cq,"\u2580",B.d4,"\u03b1",B.dL,"\xdf",B.dn,"\u0393",B.ap,"\u03c0",B.c8,"\u03a3",B.dj,"\u03c3",B.bm,"\xb5",B.bs,"\u03c4",B.cD,"\u03a6",B.ai,"\u0398",B.aJ,"\u03a9",B.am,"\u03b4",B.N,"\u221e",B.dz,"\u03c6",B.bo,"\u03b5",B.ab,"\u2229",B.ck,"\u2261",B.cM,"\xb1",B.a7,"\u2265",B.bb,"\u2264",B.cW,"\u2320",B.bi,"\u2321",B.db,"\xf7",B.ce,"\u2248",B.S,"\xb0",B.cA,"\u2219",B.U,"\xb7",B.dp,"\u221a",B.X,"\u207f",B.bX,"\xb2",B.av,"\u25a0",B.d3],A.dn("b7<D,f<c>>"))
B.w=new A.C("replace")
B.dQ=new A.C("inverse")
B.dR=new A.C("over")
B.dS=new A.C("under")
B.dT=new A.C("stain")
B.dU=new A.C("delete")
B.dV=new A.C("maskDestination")
B.dW=new A.C("maskSource")
B.y=new A.ab("ready")
B.dX=new A.ab("awaitingKey")
B.z=new A.ab("awaitingString")
B.dY=new A.ab("awaitingMouseClick")
B.dZ=A.A("hy")
B.e_=A.A("hz")
B.e0=A.A("eN")
B.e1=A.A("eO")
B.e2=A.A("eQ")
B.e3=A.A("eR")
B.e4=A.A("eS")
B.e5=A.A("h")
B.e6=A.A("f4")
B.e7=A.A("cf")
B.e8=A.A("f5")
B.e9=A.A("f6")
B.c=new A.y("nothing")
B.r=new A.y("apple")
B.f=new A.y("up")
B.h=new A.y("down")
B.i=new A.y("left")
B.j=new A.y("right")
B.t=new A.y("brick")})();(function staticFields(){$.cB=null
$.L=A.a([],t.f)
$.dF=null
$.dA=null
$.dz=null
$.eh=null
$.ec=null
$.em=null
$.cQ=null
$.cU=null
$.dq=null
$.aL=A.a([],A.dn("o<f<h>?>"))
$.ah=null
$.aV=null
$.aW=null
$.di=!1
$.m=B.b})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"hA","cY",()=>A.hg("_$dart_dartClosure"))
s($,"hH","er",()=>A.G(A.ce({
toString:function(){return"$receiver$"}})))
s($,"hI","es",()=>A.G(A.ce({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"hJ","et",()=>A.G(A.ce(null)))
s($,"hK","eu",()=>A.G(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"hN","ex",()=>A.G(A.ce(void 0)))
s($,"hO","ey",()=>A.G(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"hM","ew",()=>A.G(A.dM(null)))
s($,"hL","ev",()=>A.G(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"hQ","eA",()=>A.G(A.dM(void 0)))
s($,"hP","ez",()=>A.G(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"hR","du",()=>A.f7())
s($,"i7","cZ",()=>A.ds(B.e5))
s($,"hG","eq",()=>A.d4(8,0,t.S))
s($,"hF","ep",()=>A.d4(8,255,t.S))
s($,"i9","d_",()=>B.H)})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.be,ArrayBufferView:A.ay,DataView:A.bf,Float32Array:A.bg,Float64Array:A.bh,Int16Array:A.bi,Int32Array:A.bj,Int8Array:A.bk,Uint16Array:A.bl,Uint32Array:A.bm,Uint8ClampedArray:A.az,CanvasPixelArray:A.az,Uint8Array:A.bn})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.a7.$nativeSuperclassTag="ArrayBufferView"
A.aH.$nativeSuperclassTag="ArrayBufferView"
A.aI.$nativeSuperclassTag="ArrayBufferView"
A.aw.$nativeSuperclassTag="ArrayBufferView"
A.aJ.$nativeSuperclassTag="ArrayBufferView"
A.aK.$nativeSuperclassTag="ArrayBufferView"
A.ax.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.hq
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=snake.js.map
