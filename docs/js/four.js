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
if(a[b]!==s){A.iF(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.t(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.e4(b)
return new s(c,this)}:function(){if(s===null)s=A.e4(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.e4(a).prototype
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
e8(a,b,c,d){return{i:a,p:b,e:c,x:d}},
e5(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.e6==null){A.iw()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.c(A.eu("Return interceptor for "+A.m(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.d6
if(o==null)o=$.d6=A.dv(n)
p=q[o]}if(p!=null)return p
p=A.iA(a)
if(p!=null)return p
if(typeof a=="function")return B.G
s=Object.getPrototypeOf(a)
if(s==null)return B.p
if(s===Object.prototype)return B.p
if(typeof q=="function"){o=$.d6
if(o==null)o=$.d6=A.dv(n)
Object.defineProperty(q,o,{value:B.l,enumerable:false,writable:true,configurable:true})
return B.l}return B.l},
el(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
fF(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.el(r))break;++b}return b},
fG(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.a(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.el(q))break}return b},
a6(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aF.prototype
return J.by.prototype}if(typeof a=="string")return J.V.prototype
if(a==null)return J.aG.prototype
if(typeof a=="boolean")return J.bx.prototype
if(Array.isArray(a))return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.O.prototype
if(typeof a=="symbol")return J.aJ.prototype
if(typeof a=="bigint")return J.aH.prototype
return a}if(a instanceof A.d)return a
return J.e5(a)},
eY(a){if(typeof a=="string")return J.V.prototype
if(a==null)return a
if(Array.isArray(a))return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.O.prototype
if(typeof a=="symbol")return J.aJ.prototype
if(typeof a=="bigint")return J.aH.prototype
return a}if(a instanceof A.d)return a
return J.e5(a)},
iq(a){if(a==null)return a
if(Array.isArray(a))return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.O.prototype
if(typeof a=="symbol")return J.aJ.prototype
if(typeof a=="bigint")return J.aH.prototype
return a}if(a instanceof A.d)return a
return J.e5(a)},
ir(a){if(typeof a=="number")return J.ad.prototype
if(a==null)return a
if(!(a instanceof A.d))return J.Z.prototype
return a},
is(a){if(typeof a=="string")return J.V.prototype
if(a==null)return a
if(!(a instanceof A.d))return J.Z.prototype
return a},
aa(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.a6(a).B(a,b)},
G(a){return J.a6(a).gj(a)},
fm(a){return J.iq(a).gt(a)},
eb(a){return J.eY(a).gp(a)},
fn(a){return J.a6(a).gq(a)},
ec(a){return J.ir(a).bR(a)},
bm(a){return J.a6(a).h(a)},
fo(a){return J.is(a).bS(a)},
bv:function bv(){},
bx:function bx(){},
aG:function aG(){},
aI:function aI(){},
P:function P(){},
bL:function bL(){},
Z:function Z(){},
O:function O(){},
aH:function aH(){},
aJ:function aJ(){},
n:function n(a){this.$ti=a},
bw:function bw(){},
ce:function ce(a){this.$ti=a},
bn:function bn(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ad:function ad(){},
aF:function aF(){},
by:function by(){},
V:function V(){}},A={dK:function dK(){},
fH(a){return new A.aL("Field '"+a+"' has not been initialized.")},
Q(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
dR(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
e3(a,b,c){return a},
e7(a){var s,r
for(s=$.w.length,r=0;r<s;++r)if(a===$.w[r])return!0
return!1},
ek(){return new A.Y("No element")},
aL:function aL(a){this.a=a},
dB:function dB(){},
ct:function ct(){},
aB:function aB(){},
aM:function aM(){},
ag:function ag(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aC:function aC(a){this.$ti=a},
bs:function bs(){},
aE:function aE(){},
f5(a){var s=A.f4(a)
if(s!=null)return s
return"minified:"+a},
j5(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
m(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.bm(a)
return s},
al(a){var s,r=$.en
if(r==null)r=$.en=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
bM(a){var s,r,q,p
if(a instanceof A.d)return A.v(A.bl(a),null)
s=J.a6(a)
if(s===B.E||s===B.H||t.A.b(a)){r=B.m(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.v(A.bl(a),null)},
eo(a){var s,r,q
if(a==null||typeof a=="number"||A.dZ(a))return J.bm(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.U)return a.h(0)
if(a instanceof A.aq)return a.aR(!0)
s=$.fj()
for(r=0;r<1;++r){q=s[r].bT(a)
if(q!=null)return q}return"Instance of '"+A.bM(a)+"'"},
fL(a){var s=a.$thrownJsError
if(s==null)return null
return A.a7(s)},
fM(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.p(a,s)
a.$thrownJsError=s
s.stack=b.h(0)}},
a(a,b){if(a==null)J.eb(a)
throw A.c(A.im(a,b))},
im(a,b){var s,r="index",q=null
if(!A.eM(b))return new A.E(!0,b,r,q)
s=J.eb(a)
if(b<0||b>=s)return A.dI(b,s,a,q,r)
return new A.am(q,q,!0,b,r,"Value not in range")},
e1(a){return new A.E(!0,a,null,null)},
c(a){return A.p(a,new Error())},
p(a,b){var s
if(a==null)a=new A.I()
b.dartException=a
s=A.iG
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
iG(){return J.bm(this.dartException)},
a9(a,b){throw A.p(a,b==null?new Error():b)},
c8(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.a9(A.hF(a,b,c),s)},
hF(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.aW("'"+s+"': Cannot "+o+" "+l+k+n)},
dC(a){throw A.c(A.az(a))},
J(a){var s,r,q,p,o,n
a=A.iC(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.t([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.cL(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
cM(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
et(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
dL(a,b){var s=b==null,r=s?null:b.method
return new A.bz(a,r,s?null:b.receiver)},
ax(a){if(a==null)return new A.cl(a)
if(a instanceof A.aD)return A.T(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.T(a,a.dartException)
return A.ic(a)},
T(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
ic(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.a.bw(r,16)&8191)===10)switch(q){case 438:return A.T(a,A.dL(A.m(s)+" (Error "+q+")",null))
case 445:case 5007:A.m(s)
return A.T(a,new A.aS())}}if(a instanceof TypeError){p=$.f9()
o=$.fa()
n=$.fb()
m=$.fc()
l=$.ff()
k=$.fg()
j=$.fe()
$.fd()
i=$.fi()
h=$.fh()
g=p.A(s)
if(g!=null)return A.T(a,A.dL(s,g))
else{g=o.A(s)
if(g!=null){g.method="call"
return A.T(a,A.dL(s,g))}else if(n.A(s)!=null||m.A(s)!=null||l.A(s)!=null||k.A(s)!=null||j.A(s)!=null||m.A(s)!=null||i.A(s)!=null||h.A(s)!=null)return A.T(a,new A.aS())}return A.T(a,new A.bR(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.aV()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.T(a,new A.E(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.aV()
return a},
a7(a){var s
if(a instanceof A.aD)return a.b
if(a==null)return new A.b8(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.b8(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
e9(a){if(a==null)return J.G(a)
if(typeof a=="object")return A.al(a)
return J.G(a)},
ij(a){if(typeof a=="number")return B.F.gj(a)
if(a instanceof A.c4)return A.al(a)
if(a instanceof A.aq)return a.gj(a)
return A.e9(a)},
ip(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.a0(0,a[s],a[r])}return b},
hO(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.c(new A.cU("Unsupported number of arguments for wrapped closure"))},
c6(a,b){var s=a.$identity
if(!!s)return s
s=A.ik(a,b)
a.$identity=s
return s},
ik(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.hO)},
fv(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.cu().constructor.prototype):Object.create(new A.ay(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.eh(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.fr(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.eh(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
fr(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.c("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.fp)}throw A.c("Error in functionType of tearoff")},
fs(a,b,c,d){var s=A.eg
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
eh(a,b,c,d){if(c)return A.fu(a,b,d)
return A.fs(b.length,d,a,b)},
ft(a,b,c,d){var s=A.eg,r=A.fq
switch(b?-1:a){case 0:throw A.c(new A.bN("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
fu(a,b,c){var s,r
if($.ee==null)$.ee=A.ed("interceptor")
if($.ef==null)$.ef=A.ed("receiver")
s=b.length
r=A.ft(s,c,a,b)
return r},
e4(a){return A.fv(a)},
fp(a,b){return A.bf(v.typeUniverse,A.bl(a.a),b)},
eg(a){return a.a},
fq(a){return a.b},
ed(a){var s,r,q,p=new A.ay("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.c(A.ab("Field name "+a+" not found.",null))},
dv(a){return v.getIsolateTag(a)},
iD(){return v.G},
iA(a){var s,r,q,p,o,n=$.f_.$1(a),m=$.ds[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.dz[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.eU.$2(a,n)
if(q!=null){m=$.ds[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.dz[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.dA(s)
$.ds[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.dz[n]=s
return s}if(p==="-"){o=A.dA(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.f1(a,s)
if(p==="*")throw A.c(A.eu(n))
if(v.leafTags[n]===true){o=A.dA(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.f1(a,s)},
f1(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.e8(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
dA(a){return J.e8(a,!1,null,!!a.$iu)},
iB(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.dA(s)
else return J.e8(s,c,null,null)},
iw(){if(!0===$.e6)return
$.e6=!0
A.ix()},
ix(){var s,r,q,p,o,n,m,l
$.ds=Object.create(null)
$.dz=Object.create(null)
A.iv()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.f2.$1(o)
if(n!=null){m=A.iB(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
iv(){var s,r,q,p,o,n,m=B.r()
m=A.au(B.t,A.au(B.u,A.au(B.n,A.au(B.n,A.au(B.v,A.au(B.w,A.au(B.x(B.m),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.f_=new A.dw(p)
$.eU=new A.dx(o)
$.f2=new A.dy(n)},
au(a,b){return a(b)||b},
il(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
iE(a,b,c){var s=a.indexOf(b,c)
return s>=0},
iC(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
C:function C(a,b){this.a=a
this.b=b},
br:function br(){},
bt:function bt(a,b){this.a=a
this.$ti=b},
aT:function aT(){},
cL:function cL(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aS:function aS(){},
bz:function bz(a,b,c){this.a=a
this.b=b
this.c=c},
bR:function bR(a){this.a=a},
cl:function cl(a){this.a=a},
aD:function aD(a,b){this.a=a
this.b=b},
b8:function b8(a){this.a=a
this.b=null},
U:function U(){},
c9:function c9(){},
ca:function ca(){},
cz:function cz(){},
cu:function cu(){},
ay:function ay(a,b){this.a=a
this.b=b},
bN:function bN(a){this.a=a},
W:function W(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cf:function cf(a,b){this.a=a
this.b=b
this.c=null},
af:function af(a,b){this.a=a
this.$ti=b},
bA:function bA(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
aK:function aK(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dw:function dw(a){this.a=a},
dx:function dx(a){this.a=a},
dy:function dy(a){this.a=a},
aq:function aq(){},
c1:function c1(){},
ai:function ai(){},
aQ:function aQ(){},
bB:function bB(){},
aj:function aj(){},
aO:function aO(){},
aP:function aP(){},
bC:function bC(){},
bD:function bD(){},
bE:function bE(){},
bF:function bF(){},
bG:function bG(){},
bH:function bH(){},
bI:function bI(){},
aR:function aR(){},
bJ:function bJ(){},
b2:function b2(){},
b3:function b3(){},
b4:function b4(){},
b5:function b5(){},
dO(a,b){var s=b.c
return s==null?b.c=A.bd(a,"H",[b.x]):s},
ep(a){var s=a.w
if(s===6||s===7)return A.ep(a.x)
return s===11||s===12},
fQ(a){return a.as},
dt(a){return A.de(v.typeUniverse,a,!1)},
a4(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.a4(a1,s,a3,a4)
if(r===s)return a2
return A.eC(a1,r,!0)
case 7:s=a2.x
r=A.a4(a1,s,a3,a4)
if(r===s)return a2
return A.eB(a1,r,!0)
case 8:q=a2.y
p=A.at(a1,q,a3,a4)
if(p===q)return a2
return A.bd(a1,a2.x,p)
case 9:o=a2.x
n=A.a4(a1,o,a3,a4)
m=a2.y
l=A.at(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.dV(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.at(a1,j,a3,a4)
if(i===j)return a2
return A.eD(a1,k,i)
case 11:h=a2.x
g=A.a4(a1,h,a3,a4)
f=a2.y
e=A.i9(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.eA(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.at(a1,d,a3,a4)
o=a2.x
n=A.a4(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.dW(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.c(A.bp("Attempted to substitute unexpected RTI kind "+a0))}},
at(a,b,c,d){var s,r,q,p,o=b.length,n=A.df(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.a4(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
ia(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.df(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.a4(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
i9(a,b,c,d){var s,r=b.a,q=A.at(a,r,c,d),p=b.b,o=A.at(a,p,c,d),n=b.c,m=A.ia(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.c_()
s.a=q
s.b=o
s.c=m
return s},
t(a,b){a[v.arrayRti]=b
return a},
eW(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.iu(s)
return a.$S()}return null},
iy(a,b){var s
if(A.ep(b))if(a instanceof A.U){s=A.eW(a)
if(s!=null)return s}return A.bl(a)},
bl(a){if(a instanceof A.d)return A.a3(a)
if(Array.isArray(a))return A.dX(a)
return A.dY(J.a6(a))},
dX(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
a3(a){var s=a.$ti
return s!=null?s:A.dY(a)},
dY(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.hM(a,s)},
hM(a,b){var s=a instanceof A.U?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.hl(v.typeUniverse,s.name)
b.$ccache=r
return r},
iu(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.de(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
eZ(a){return A.a5(A.a3(a))},
e0(a){var s
if(a instanceof A.aq)return A.io(a.$r,a.aK())
s=a instanceof A.U?A.eW(a):null
if(s!=null)return s
if(t.R.b(a))return J.fn(a).a
if(Array.isArray(a))return A.dX(a)
return A.bl(a)},
a5(a){var s=a.r
return s==null?a.r=new A.c4(a):s},
io(a,b){var s,r,q=b,p=q.length
if(p===0)return t.F
if(0>=p)return A.a(q,0)
s=A.bf(v.typeUniverse,A.e0(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.a(q,r)
s=A.eF(v.typeUniverse,s,A.e0(q[r]))}return A.bf(v.typeUniverse,s,a)},
D(a){return A.a5(A.de(v.typeUniverse,a,!1))},
hL(a){var s=this
s.b=A.i7(s)
return s.b(a)},
i7(a){var s,r,q,p
if(a===t.K)return A.hU
if(A.a8(a))return A.hY
s=a.w
if(s===6)return A.hJ
if(s===1)return A.eO
if(s===7)return A.hP
r=A.i6(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.a8)){a.f="$i"+q
if(q==="h")return A.hS
if(a===t.m)return A.hR
return A.hX}}else if(s===10){p=A.il(a.x,a.y)
return p==null?A.eO:p}return A.hH},
i6(a){if(a.w===8){if(a===t.S)return A.eM
if(a===t.i||a===t.H)return A.hT
if(a===t.N)return A.hW
if(a===t.y)return A.dZ}return null},
hK(a){var s=this,r=A.hG
if(A.a8(s))r=A.hz
else if(s===t.K)r=A.hw
else if(A.av(s)){r=A.hI
if(s===t.W)r=A.hs
else if(s===t.J)r=A.hy
else if(s===t.d)r=A.ho
else if(s===t.Y)r=A.hv
else if(s===t.M)r=A.hq
else if(s===t.B)r=A.ht}else if(s===t.S)r=A.hr
else if(s===t.N)r=A.hx
else if(s===t.y)r=A.hn
else if(s===t.H)r=A.hu
else if(s===t.i)r=A.hp
else if(s===t.m)r=A.a1
s.a=r
return s.a(a)},
hH(a){var s=this
if(a==null)return A.av(s)
return A.iz(v.typeUniverse,A.iy(a,s),s)},
hJ(a){if(a==null)return!0
return this.x.b(a)},
hX(a){var s,r=this
if(a==null)return A.av(r)
s=r.f
if(a instanceof A.d)return!!a[s]
return!!J.a6(a)[s]},
hS(a){var s,r=this
if(a==null)return A.av(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.d)return!!a[s]
return!!J.a6(a)[s]},
hR(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.d)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
eN(a){if(typeof a=="object"){if(a instanceof A.d)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
hG(a){var s=this
if(a==null){if(A.av(s))return a}else if(s.b(a))return a
throw A.p(A.eI(a,s),new Error())},
hI(a){var s=this
if(a==null||s.b(a))return a
throw A.p(A.eI(a,s),new Error())},
eI(a,b){return new A.bb("TypeError: "+A.ew(a,A.v(b,null)))},
ew(a,b){return A.cb(a)+": type '"+A.v(A.e0(a),null)+"' is not a subtype of type '"+b+"'"},
y(a,b){return new A.bb("TypeError: "+A.ew(a,b))},
hP(a){var s=this
return s.x.b(a)||A.dO(v.typeUniverse,s).b(a)},
hU(a){return a!=null},
hw(a){if(a!=null)return a
throw A.p(A.y(a,"Object"),new Error())},
hY(a){return!0},
hz(a){return a},
eO(a){return!1},
dZ(a){return!0===a||!1===a},
hn(a){if(!0===a)return!0
if(!1===a)return!1
throw A.p(A.y(a,"bool"),new Error())},
ho(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.p(A.y(a,"bool?"),new Error())},
hp(a){if(typeof a=="number")return a
throw A.p(A.y(a,"double"),new Error())},
hq(a){if(typeof a=="number")return a
if(a==null)return a
throw A.p(A.y(a,"double?"),new Error())},
eM(a){return typeof a=="number"&&Math.floor(a)===a},
hr(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.p(A.y(a,"int"),new Error())},
hs(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.p(A.y(a,"int?"),new Error())},
hT(a){return typeof a=="number"},
hu(a){if(typeof a=="number")return a
throw A.p(A.y(a,"num"),new Error())},
hv(a){if(typeof a=="number")return a
if(a==null)return a
throw A.p(A.y(a,"num?"),new Error())},
hW(a){return typeof a=="string"},
hx(a){if(typeof a=="string")return a
throw A.p(A.y(a,"String"),new Error())},
hy(a){if(typeof a=="string")return a
if(a==null)return a
throw A.p(A.y(a,"String?"),new Error())},
a1(a){if(A.eN(a))return a
throw A.p(A.y(a,"JSObject"),new Error())},
ht(a){if(a==null)return a
if(A.eN(a))return a
throw A.p(A.y(a,"JSObject?"),new Error())},
eR(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.v(a[q],b)
return s},
i2(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.eR(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.v(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
eJ(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.t([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)a4.push("T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.a(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.v(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.v(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.v(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.v(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.v(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
v(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.v(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.v(a.x,b)+">"
if(l===8){p=A.ib(a.x)
o=a.y
return o.length>0?p+("<"+A.eR(o,b)+">"):p}if(l===10)return A.i2(a,b)
if(l===11)return A.eJ(a,b,null)
if(l===12)return A.eJ(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.a(b,n)
return b[n]}return"?"},
ib(a){var s=A.f4(a)
if(s!=null)return s
return"minified:"+a},
hm(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
hl(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.de(a,b,!1)
else if(typeof m=="number"){s=m
r=A.be(a,5,"#")
q=A.df(s)
for(p=0;p<s;++p)q[p]=r
o=A.bd(a,b,q)
n[b]=o
return o}else return m},
hk(a,b){return A.eG(a.tR,b)},
hj(a,b){return A.eG(a.eT,b)},
de(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.eE(a,null,b,!1)
r.set(b,s)
return s},
bf(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.eE(a,b,c,!0)
q.set(c,r)
return r},
eF(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.dV(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
eE(a,b,c,d){return A.ha(A.h4(a,b,c,d))},
S(a,b){b.a=A.hK
b.b=A.hL
return b},
be(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.z(null,null)
s.w=b
s.as=c
r=A.S(a,s)
a.eC.set(c,r)
return r},
eC(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.hh(a,b,r,c)
a.eC.set(r,s)
return s},
hh(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.a8(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.av(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.z(null,null)
q.w=6
q.x=b
q.as=c
return A.S(a,q)},
eB(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.hf(a,b,r,c)
a.eC.set(r,s)
return s},
hf(a,b,c,d){var s,r
if(d){s=b.w
if(A.a8(b)||b===t.K)return b
else if(s===1)return A.bd(a,"H",[b])
else if(b===t.P||b===t.T)return t.O}r=new A.z(null,null)
r.w=7
r.x=b
r.as=c
return A.S(a,r)},
hi(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.z(null,null)
s.w=13
s.x=b
s.as=q
r=A.S(a,s)
a.eC.set(q,r)
return r},
bc(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
he(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
bd(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.bc(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.z(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.S(a,r)
a.eC.set(p,q)
return q},
dV(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.bc(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.z(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.S(a,o)
a.eC.set(q,n)
return n},
eD(a,b,c){var s,r,q="+"+(b+"("+A.bc(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.z(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.S(a,s)
a.eC.set(q,r)
return r},
eA(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.bc(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.bc(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.he(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.z(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.S(a,p)
a.eC.set(r,o)
return o},
dW(a,b,c,d){var s,r=b.as+("<"+A.bc(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.hg(a,b,c,r,d)
a.eC.set(r,s)
return s},
hg(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.df(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.a4(a,b,r,0)
m=A.at(a,c,r,0)
return A.dW(a,n,m,c!==m)}}l=new A.z(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.S(a,l)},
h4(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
ha(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.h6(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.ey(a,r,l,k,!1)
else if(q===46)r=A.ey(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.a0(a.u,a.e,k.pop()))
break
case 94:k.push(A.hi(a.u,k.pop()))
break
case 35:k.push(A.be(a.u,5,"#"))
break
case 64:k.push(A.be(a.u,2,"@"))
break
case 126:k.push(A.be(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.h8(a,k)
break
case 38:A.h7(a,k)
break
case 63:p=a.u
k.push(A.eC(p,A.a0(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.eB(p,A.a0(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.h5(a,k)
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
A.hb(a.u,a.e,o)
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
return A.a0(a.u,a.e,m)},
h6(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
ey(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.hm(s,o.x)[p]
if(n==null)A.a9('No "'+p+'" in "'+A.fQ(o)+'"')
d.push(A.bf(s,o,n))}else d.push(p)
return m},
h8(a,b){var s,r=a.u,q=A.ex(a,b),p=b.pop()
if(typeof p=="string")b.push(A.bd(r,p,q))
else{s=A.a0(r,a.e,p)
switch(s.w){case 11:b.push(A.dW(r,s,q,a.n))
break
default:b.push(A.dV(r,s,q))
break}}},
h5(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.ex(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.a0(p,a.e,o)
q=new A.c_()
q.a=s
q.b=n
q.c=m
b.push(A.eA(p,r,q))
return
case-4:b.push(A.eD(p,b.pop(),s))
return
default:throw A.c(A.bp("Unexpected state under `()`: "+A.m(o)))}},
h7(a,b){var s=b.pop()
if(0===s){b.push(A.be(a.u,1,"0&"))
return}if(1===s){b.push(A.be(a.u,4,"1&"))
return}throw A.c(A.bp("Unexpected extended operation "+A.m(s)))},
ex(a,b){var s=b.splice(a.p)
A.ez(a.u,a.e,s)
a.p=b.pop()
return s},
a0(a,b,c){if(typeof c=="string")return A.bd(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.h9(a,b,c)}else return c},
ez(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.a0(a,b,c[s])},
hb(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.a0(a,b,c[s])},
h9(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.c(A.bp("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.c(A.bp("Bad index "+c+" for "+b.h(0)))},
iz(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.o(a,b,null,c,null)
r.set(c,s)}return s},
o(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.a8(d))return!0
s=b.w
if(s===4)return!0
if(A.a8(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.o(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.o(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.o(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.o(a,b.x,c,d,e))return!1
return A.o(a,A.dO(a,b),c,d,e)}if(s===6)return A.o(a,p,c,d,e)&&A.o(a,b.x,c,d,e)
if(q===7){if(A.o(a,b,c,d.x,e))return!0
return A.o(a,b,c,A.dO(a,d),e)}if(q===6)return A.o(a,b,c,p,e)||A.o(a,b,c,d.x,e)
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
if(!A.o(a,j,c,i,e)||!A.o(a,i,e,j,c))return!1}return A.eL(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.eL(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.hQ(a,b,c,d,e)}if(o&&q===10)return A.hV(a,b,c,d,e)
return!1},
eL(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.o(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.o(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.o(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.o(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.o(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
hQ(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.bf(a,b,r[o])
return A.eH(a,p,null,c,d.y,e)}return A.eH(a,b.y,null,c,d.y,e)},
eH(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.o(a,b[s],d,e[s],f))return!1
return!0},
hV(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.o(a,r[s],c,q[s],e))return!1
return!0},
av(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.a8(a))if(s!==6)r=s===7&&A.av(a.x)
return r},
a8(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
eG(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
df(a){return a>0?new Array(a):v.typeUniverse.sEA},
z:function z(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
c_:function c_(){this.c=this.b=this.a=null},
c4:function c4(a){this.a=a},
bZ:function bZ(){},
bb:function bb(a){this.a=a},
fY(){var s,r,q
if(self.scheduleImmediate!=null)return A.id()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.c6(new A.cQ(s),1)).observe(r,{childList:true})
return new A.cP(s,r,q)}else if(self.setImmediate!=null)return A.ie()
return A.ig()},
fZ(a){self.scheduleImmediate(A.c6(new A.cR(a),0))},
h_(a){self.setImmediate(A.c6(new A.cS(a),0))},
h0(a){A.dT(B.B,a)},
dT(a,b){var s=B.a.l(a.a,1000)
return A.hc(s,b)},
es(a,b){var s=B.a.l(a.a,1000)
return A.hd(s,b)},
hc(a,b){var s=new A.ba()
s.ba(a,b)
return s},
hd(a,b){var s=new A.ba()
s.bb(a,b)
return s},
dn(a){return new A.bS(new A.j($.e,a.i("j<0>")),a.i("bS<0>"))},
dj(a,b){a.$2(0,null)
b.b=!0
return b.a},
a2(a,b){A.hA(a,b)},
di(a,b){var s,r=a==null?b.$ti.c.a(a):a
if(!b.b)b.a.a2(r)
else{s=b.a
if(b.$ti.i("H<1>").b(r))s.aG(r)
else s.aI(r)}},
dh(a,b){var s=A.ax(a),r=A.a7(a),q=b.a
if(b.b)q.J(new A.x(s,r))
else q.aF(new A.x(s,r))},
hA(a,b){var s,r,q=new A.dk(b),p=new A.dl(b)
if(a instanceof A.j)a.aQ(q,p,t.z)
else{s=t.z
if(a instanceof A.j)a.b4(q,p,s)
else{r=new A.j($.e,t.c)
r.a=8
r.c=a
r.aQ(q,p,s)}}},
dq(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.e.aw(new A.dr(s))},
dH(a){var s
if(t.Q.b(a)){s=a.gP()
if(s!=null)return s}return B.A},
fA(a,b){var s
if(!b.b(null))throw A.c(A.dG(null,"computation","The type parameter is not nullable"))
s=new A.j($.e,b.i("j<0>"))
A.fT(a,new A.cc(null,s,b))
return s},
hN(a,b){if($.e===B.b)return null
return null},
cY(a,b,c){var s,r,q,p={},o=p.a=a
while(s=o.a,(s&4)!==0){o=o.c
p.a=o}if(o===b){s=A.eq()
b.aF(new A.x(new A.E(!0,o,null,"Cannot complete a future with itself"),s))
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.aO(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.K()
b.S(p.a)
A.a_(b,q)
return}b.a^=2
A.as(null,null,b.b,new A.cZ(p,b))},
a_(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){f=f.c
A.c5(f.a,f.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.a_(g.a,f)
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
if(r){A.c5(m.a,m.b)
return}j=$.e
if(j!==k)$.e=k
else j=null
f=f.c
if((f&15)===8)new A.d2(s,g,p).$0()
else if(q){if((f&1)!==0)new A.d1(s,m).$0()}else if((f&2)!==0)new A.d0(g,s).$0()
if(j!=null)$.e=j
f=s.c
if(f instanceof A.j){r=s.a.$ti
r=r.i("H<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.W(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.cY(f,i,!0)
return}}i=s.a.b
h=i.c
i.c=null
b=i.W(h)
f=s.b
r=s.c
if(!f){i.a=8
i.c=r}else{i.a=i.a&1|16
i.c=r}g.a=i
f=i}},
i3(a,b){if(t.C.b(a))return b.aw(a)
if(t.v.b(a))return a
throw A.c(A.dG(a,"onError",u.c))},
i_(){var s,r
for(s=$.ar;s!=null;s=$.ar){$.bi=null
r=s.b
$.ar=r
if(r==null)$.bh=null
s.a.$0()}},
i8(){$.e_=!0
try{A.i_()}finally{$.bi=null
$.e_=!1
if($.ar!=null)$.ea().$1(A.eV())}},
eT(a){var s=new A.bT(a),r=$.bh
if(r==null){$.ar=$.bh=s
if(!$.e_)$.ea().$1(A.eV())}else $.bh=r.b=s},
i5(a){var s,r,q,p=$.ar
if(p==null){A.eT(a)
$.bi=$.bh
return}s=new A.bT(a)
r=$.bi
if(r==null){s.b=p
$.ar=$.bi=s}else{q=r.b
s.b=q
$.bi=r.b=s
if(q==null)$.bh=s}},
f3(a){var s=null,r=$.e
if(B.b===r){A.as(s,s,B.b,a)
return}A.as(s,s,r,r.af(a))},
iQ(a){A.e3(a,"stream",t.K)
return new A.c2()},
dQ(a){return new A.aX(null,null,a.i("aX<0>"))},
eS(a){return},
ev(a,b){return b==null?A.ih():b},
h1(a,b){if(b==null)b=A.ii()
if(t.k.b(b))return a.aw(b)
if(t.e.b(b))return b
throw A.c(A.ab("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
i0(a){},
i1(a,b){A.c5(a,b)},
hE(a,b,c){var s,r,q=a.aT()
if(q!==$.dE()){s=q.$ti
r=$.e
q.R(new A.R(new A.j(r,s),8,new A.dm(b,c),null,s.i("R<1,1>")))}else b.T(c)},
fT(a,b){var s=$.e
if(s===B.b)return A.dT(a,b)
return A.dT(a,s.af(b))},
fU(a,b){var s=$.e
if(s===B.b)return A.es(a,b)
return A.es(a,s.by(b,t.E))},
c5(a,b){A.i5(new A.dp(a,b))},
eP(a,b,c,d){var s,r=$.e
if(r===c)return d.$0()
$.e=c
s=r
try{r=d.$0()
return r}finally{$.e=s}},
eQ(a,b,c,d,e){var s,r=$.e
if(r===c)return d.$1(e)
$.e=c
s=r
try{r=d.$1(e)
return r}finally{$.e=s}},
i4(a,b,c,d,e,f){var s,r=$.e
if(r===c)return d.$2(e,f)
$.e=c
s=r
try{r=d.$2(e,f)
return r}finally{$.e=s}},
as(a,b,c,d){if(B.b!==c){d=c.af(d)
d=d}A.eT(d)},
cQ:function cQ(a){this.a=a},
cP:function cP(a,b,c){this.a=a
this.b=b
this.c=c},
cR:function cR(a){this.a=a},
cS:function cS(a){this.a=a},
ba:function ba(){this.c=0},
dd:function dd(a,b){this.a=a
this.b=b},
dc:function dc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bS:function bS(a,b){this.a=a
this.b=!1
this.$ti=b},
dk:function dk(a){this.a=a},
dl:function dl(a){this.a=a},
dr:function dr(a){this.a=a},
x:function x(a,b){this.a=a
this.b=b},
F:function F(a,b){this.a=a
this.$ti=b},
aY:function aY(a,b,c,d,e){var _=this
_.ay=0
_.CW=_.ch=null
_.w=a
_.a=b
_.d=c
_.e=d
_.r=_.f=null
_.$ti=e},
bU:function bU(){},
aX:function aX(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null
_.$ti=c},
cc:function cc(a,b,c){this.a=a
this.b=b
this.c=c},
R:function R(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
j:function j(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
cV:function cV(a,b){this.a=a
this.b=b},
d_:function d_(a,b){this.a=a
this.b=b},
cZ:function cZ(a,b){this.a=a
this.b=b},
cX:function cX(a,b){this.a=a
this.b=b},
cW:function cW(a,b){this.a=a
this.b=b},
d2:function d2(a,b,c){this.a=a
this.b=b
this.c=c},
d3:function d3(a,b){this.a=a
this.b=b},
d4:function d4(a){this.a=a},
d1:function d1(a,b){this.a=a
this.b=b},
d0:function d0(a,b){this.a=a
this.b=b},
bT:function bT(a){this.a=a
this.b=null},
ao:function ao(){},
cx:function cx(a,b){this.a=a
this.b=b},
cy:function cy(a,b){this.a=a
this.b=b},
cv:function cv(a){this.a=a},
cw:function cw(a,b,c){this.a=a
this.b=b
this.c=c},
aZ:function aZ(){},
bW:function bW(){},
bV:function bV(){},
b9:function b9(){},
bY:function bY(){},
bX:function bX(a){this.b=a
this.a=null},
c0:function c0(){this.a=0
this.c=this.b=null},
d8:function d8(a,b){this.a=a
this.b=b},
b_:function b_(a){this.a=1
this.b=a
this.c=null},
c2:function c2(){},
dm:function dm(a,b){this.a=a
this.b=b},
dg:function dg(){},
d9:function d9(){},
da:function da(a,b){this.a=a
this.b=b},
db:function db(a,b,c){this.a=a
this.b=b
this.c=c},
dp:function dp(a,b){this.a=a
this.b=b},
fI(a,b){return new A.W(a.i("@<0>").a3(b).i("W<1,2>"))},
fJ(a){return new A.b1(a.i("b1<0>"))},
dU(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
h3(a,b,c){var s=new A.ap(a,b,c.i("ap<0>"))
s.c=a.e
return s},
dN(a){var s,r
if(A.e7(a))return"{...}"
s=new A.bP("")
try{r={}
$.w.push(a)
s.a+="{"
r.a=!0
a.ao(0,new A.cg(r,s))
s.a+="}"}finally{if(0>=$.w.length)return A.a($.w,-1)
$.w.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
b1:function b1(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
d7:function d7(a){this.a=a
this.c=this.b=null},
ap:function ap(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
l:function l(){},
aN:function aN(){},
cg:function cg(a,b){this.a=a
this.b=b},
aU:function aU(){},
b7:function b7(){},
fw(a,b){a=A.p(a,new Error())
a.stack=b.h(0)
throw a},
dM(a,b,c){var s,r,q
if(a>4294967295)A.a9(A.fO(a,0,4294967295,"length",null))
s=A.t(new Array(a),c.i("n<0>"))
s.$flags=1
r=s
if(a!==0)for(s=r.length,q=0;q<s;++q)r[q]=b
return r},
fK(a,b,c){var s,r,q=A.t([],c.i("n<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.dC)(a),++r)q.push(a[r])
q.$flags=1
return q},
er(a,b,c){var s=J.fm(b)
if(!s.m())return a
if(c.length===0){do a+=A.m(s.gn())
while(s.m())}else{a+=A.m(s.gn())
while(s.m())a=a+c+A.m(s.gn())}return a},
eq(){return A.a7(new Error())},
ei(a){return new A.aA(1000*a)},
cb(a){if(typeof a=="number"||A.dZ(a)||a==null)return J.bm(a)
if(typeof a=="string")return JSON.stringify(a)
return A.eo(a)},
fx(a,b){A.e3(a,"error",t.K)
A.e3(b,"stackTrace",t.l)
A.fw(a,b)},
bp(a){return new A.bo(a)},
ab(a,b){return new A.E(!1,null,b,a)},
dG(a,b,c){return new A.E(!0,a,b,c)},
fN(a){var s=null
return new A.am(s,s,!1,s,s,a)},
fO(a,b,c,d,e){return new A.am(b,c,!0,a,d,"Invalid value")},
fP(a,b){return a},
dI(a,b,c,d,e){return new A.bu(b,!0,a,e,"Index out of range")},
cO(a){return new A.aW(a)},
eu(a){return new A.bQ(a)},
az(a){return new A.bq(a)},
cd(a,b){if(a<=0)return new A.aC(b.i("aC<0>"))
if(!b.i("0(b)").b(A.eX()))throw A.c(A.ab("Generator must be supplied or element type must allow integers","generator"))
return new A.b0(a,A.eX(),b.i("b0<0>"))},
fE(a,b,c){var s,r
if(A.e7(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.t([],t.s)
$.w.push(a)
try{A.hZ(a,s)}finally{if(0>=$.w.length)return A.a($.w,-1)
$.w.pop()}r=A.er(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
dJ(a,b,c){var s,r
if(A.e7(a))return b+"..."+c
s=new A.bP(b)
$.w.push(a)
try{r=s
r.a=A.er(r.a,a,", ")}finally{if(0>=$.w.length)return A.a($.w,-1)
$.w.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
h2(a){return a},
hZ(a,b){var s,r,q,p,o,n,m,l=a.gt(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.m())return
s=A.m(l.gn())
b.push(s)
k+=s.length+2;++j}if(!l.m()){if(j<=5)return
if(0>=b.length)return A.a(b,-1)
r=b.pop()
if(0>=b.length)return A.a(b,-1)
q=b.pop()}else{p=l.gn();++j
if(!l.m()){if(j<=4){b.push(A.m(p))
return}r=A.m(p)
if(0>=b.length)return A.a(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gn();++j
for(;l.m();p=o,o=n){n=l.gn();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.a(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=A.m(p)
r=A.m(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.a(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
cm(a,b,c,d){var s
if(B.f===c){s=B.a.gj(a)
b=J.G(b)
return A.dR(A.Q(A.Q($.dF(),s),b))}if(B.f===d){s=B.a.gj(a)
b=J.G(b)
c=J.G(c)
return A.dR(A.Q(A.Q(A.Q($.dF(),s),b),c))}s=B.a.gj(a)
b=J.G(b)
c=J.G(c)
d=J.G(d)
d=A.dR(A.Q(A.Q(A.Q(A.Q($.dF(),s),b),c),d))
return d},
aA:function aA(a){this.a=a},
cT:function cT(){},
k:function k(){},
bo:function bo(a){this.a=a},
I:function I(){},
E:function E(a,b,c,d){var _=this
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
bu:function bu(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
aW:function aW(a){this.a=a},
bQ:function bQ(a){this.a=a},
Y:function Y(a){this.a=a},
bq:function bq(a){this.a=a},
bK:function bK(){},
aV:function aV(){},
cU:function cU(a){this.a=a},
N:function N(){},
b0:function b0(a,b,c){this.a=a
this.b=b
this.$ti=c},
r:function r(){},
d:function d(){},
c3:function c3(){},
bP:function bP(a){this.a=a},
d5:function d5(){},
M:function M(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dS(a){return new A.cB(a)},
cn:function cn(){},
cB:function cB(a){this.a=a},
ae:function ae(a){this.b=a},
ah:function ah(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ak:function ak(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=0},
fR(a,b,c,d,e,f,g,h){var s,r,q,p=A.ej(),o=h*g
p.width=o
s=d*f
p.height=s
r=A.ej()
r.width=o
r.height=s
s=A.t([],t.x)
for(o=A.cd(d,t.z),o=o.gt(o);o.m();){o.gn()
q=B.a.l(h,32)
s.push(new Uint32Array(q+1))}p=new A.bO(!0,d,h,g,f,c,a,p,r,s)
p.b8(a,b,c,d,!0,f,g,h)
return p},
dP(a){return new A.C(B.a.l(a,32),31-B.a.k(a,32))},
bO:function bO(a,b,c,d,e,f,g,h,i,j){var _=this
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
cp:function cp(a){this.a=a},
cq:function cq(a){this.a=a},
cr:function cr(a){this.a=a},
cs:function cs(a){this.a=a},
co:function co(){},
ch:function ch(a,b){this.a=a
this.b=b},
fS(a,b,c,d){var s,r,q,p,o="white",n=null,m=A.fR(a,c,o,d*10,!0,2,2,b*8),l=A.t([],t.G)
for(s=t.U,r=0;r<d;++r){q=A.t([],s)
for(p=0;p<b;++p)q.push(new A.M(r,p," ",o))
l.push(q)}m=new A.cA(d,b,c,m,new A.ak(d,b),new A.ak(d,b),new A.ak(d,b),A.dQ(t.N),A.dQ(t.V),A.dQ(t.q),B.e,l,A.fJ(t.o),B.dL)
m.b9(a,b,c,o,n,!0,2,2,2,d,!0,n,n,n,n,n,n)
return m},
an:function an(a,b){this.a=a
this.b=b},
cA:function cA(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
em(){var s,r,q,p,o,n=A.t([],t.w)
for(s=t.z,r=A.cd(6,s),r=r.gt(r),q=t.u;r.m();){r.gn()
p=A.t([],q)
for(o=A.cd(7,s),o=o.gt(o);o.m();){o.gn()
p.push(B.c)}n.push(p)}return new A.ci(n,B.d)},
bj(a,b,c){var s=0,r=A.dn(t.n),q,p,o,n,m,l,k
var $async$bj=A.dq(function(d,e){if(d===1)return A.dh(e,r)
for(;;)switch(s){case 0:k=$.L()
p=B.a.l(k.b-14,2)+b*2,o=a.a,n=t.z,m=0
case 3:if(!(m<6)){s=5
break}if(!(m<o.length)){q=A.a(o,m)
s=1
break}l=o[m]
if(!(b>=0&&b<l.length)){q=A.a(l,b)
s=1
break}s=l[b]===B.c?6:8
break
case 6:s=c?9:10
break
case 9:l=a.b
k.au(l.h(0),l.ah(),p,2+m)
s=11
return A.a2(A.fA(A.ei(200),n),$async$bj)
case 11:case 10:k.au(B.c.h(0),B.c.ah(),p,2+m)
s=7
break
case 8:s=5
break
case 7:case 4:++m
s=3
break
case 5:if(c){o=a.b
k.au(o.h(0),o.ah(),p,2+m)}k.v(""+(b+1),p,8)
case 1:return A.di(q,r)}})
return A.dj($async$bj,r)},
e2(a,b){var s=$.L()
s.v(a,B.a.l(s.b-a.length,2),b)},
du(){var s=0,r=A.dn(t.y),q,p,o
var $async$du=A.dq(function(a,b){if(a===1)return A.dh(b,r)
for(;;)switch(s){case 0:o=$.L()
o.Y(0)
A.e2("Four-In-A-Line",0)
A.e2("Move first (y/n) ?",2)
case 3:s=6
return A.a2(o.bC(),$async$du)
case 6:p=b.b
case 4:if(!A.iE("ynYN",p,0)){s=3
break}case 5:A.e2(B.h.N(" ",18),2)
q=p.toLowerCase()==="y"
s=1
break
case 1:return A.di(q,r)}})
return A.dj($async$du,r)},
aw(){var s=0,r=A.dn(t.I),q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aw=A.dq(function(a,b){if(a===1)return A.dh(b,r)
for(;;)switch(s){case 0:s=3
return A.a2(A.du(),$async$aw)
case 3:g=b
f=A.em()
for(p=0;p<7;++p)A.bj(f,p,!1)
o=!0
case 4:if(f.gI().length===0){q=B.o
s=1
break}if(o)n=g
else n=!0
s=n?7:8
break
case 7:n="Your move ("+f.b.h(0)+")."
m=$.L()
l=m.b
m.v(n,B.a.l(l-n.length,2),10)
n=m.at,k=A.a3(n).i("F<1>"),j=!1,i=!1
case 9:if(!!j){s=10
break}if(m.ay!==B.e)A.a9(A.dS("Terminal already awaiting input."))
m.ay=B.k
e=B.h
s=11
return A.a2(new A.F(n,k).gak(0),$async$aw)
case 11:p=e.bB("1234567",b.b)
s=B.j.bz(f.gI(),p)?12:13
break
case 12:i=f.a_(p)
s=14
return A.a2(A.bj(f,p,!0),$async$aw)
case 14:f.b=f.b===B.d?B.i:B.d
j=!0
case 13:s=9
break
case 10:n=B.h.N(" ",14)
m.v(n,B.a.l(l-n.length,2),10)
if(i){q=B.C
s=1
break}case 8:if(f.gI().length===0){q=B.o
s=1
break}h=f.bG(1000)
i=f.a_(h)
n="I choose "+(h+1)+"."
m=$.L()
l=m.b
m.v(n,B.a.l(l-n.length,2),10)
s=15
return A.a2(A.bj(f,h,!0),$async$aw)
case 15:n=B.h.N(" ",11)
m.v(n,B.a.l(l-n.length,2),10)
if(i){q=B.D
s=1
break}f.b=f.b===B.d?B.i:B.d
case 5:o=!1
s=4
break
case 6:case 1:return A.di(q,r)}})
return A.dj($async$aw,r)},
c7(){var s=0,r=A.dn(t.n),q,p
var $async$c7=A.dq(function(a,b){if(a===1)return A.dh(b,r)
for(;;)switch(s){case 0:case 2:case 4:s=9
return A.a2(A.aw(),$async$c7)
case 9:switch(b.a){case 1:s=6
break
case 0:s=7
break
case 2:s=8
break
default:s=5
break}break
case 6:q=$.L()
q.v("Computer wins!",B.a.l(q.b-14,2),10)
s=5
break
case 7:q=$.L()
q.v("You win!",B.a.l(q.b-8,2),10)
s=5
break
case 8:q=$.L()
q.v("A tie!",B.a.l(q.b-6,2),10)
s=5
break
case 5:q=$.L()
p=q.b
q.v("Press any key to",B.a.l(p-16,2),12)
q.v("play again!",B.a.l(p-11,2),13)
if(q.ay!==B.e)A.a9(A.dS("Terminal already awaiting input."))
q.ay=B.k
q=q.at
s=10
return A.a2(new A.F(q,A.a3(q).i("F<1>")).gak(0),$async$c7)
case 10:s=2
break
case 3:return A.di(null,r)}})
return A.dj($async$c7,r)},
X:function X(a,b){this.a=a
this.b=b},
ci:function ci(a,b){this.a=a
this.b=b},
ck:function ck(a,b,c){this.a=a
this.b=b
this.c=c},
cj:function cj(a){this.a=a},
ac:function ac(a,b){this.a=a
this.b=b},
f4(a){return v.mangledGlobalNames[a]},
iF(a){throw A.p(new A.aL("Field '"+a+"' has been assigned during initialization."),new Error())},
K(){throw A.p(A.fH(""),new Error())},
bg(a){var s
if(typeof a=="function")throw A.c(A.ab("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.hB,a)
s[$.dD()]=a
return s},
eK(a){var s
if(typeof a=="function")throw A.c(A.ab("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.hC,a)
s[$.dD()]=a
return s},
hB(a){return a.$0()},
hC(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
it(a,b){return a[b]},
hD(a,b,c){return a[b](c)},
ej(){return v.G.document.createElement("canvas")}},B={}
var w=[A,J,B]
var $={}
A.dK.prototype={}
J.bv.prototype={
B(a,b){return a===b},
gj(a){return A.al(a)},
h(a){return"Instance of '"+A.bM(a)+"'"},
gq(a){return A.a5(A.dY(this))}}
J.bx.prototype={
h(a){return String(a)},
gj(a){return a?519018:218159},
gq(a){return A.a5(t.y)},
$if:1,
$ibk:1}
J.aG.prototype={
B(a,b){return null==b},
h(a){return"null"},
gj(a){return 0},
$if:1}
J.aI.prototype={$ii:1}
J.P.prototype={
gj(a){return 0},
h(a){return String(a)}}
J.bL.prototype={}
J.Z.prototype={}
J.O.prototype={
h(a){var s=a[$.f6()]
if(s==null)s=a[$.dD()]
if(s==null)return this.b7(a)
return"JavaScript function for "+J.bm(s)}}
J.aH.prototype={
gj(a){return 0},
h(a){return String(a)}}
J.aJ.prototype={
gj(a){return 0},
h(a){return String(a)}}
J.n.prototype={
bE(a,b){var s,r,q=a.length,p=A.dM(q,"",t.N)
for(s=0;s<a.length;++s){r=A.m(a[s])
if(!(s<q))return A.a(p,s)
p[s]=r}return p.join(b)},
am(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw A.c(A.az(a))}return s},
an(a,b,c){return this.am(a,b,c,t.z)},
bz(a,b){var s
for(s=0;s<a.length;++s)if(J.aa(a[s],b))return!0
return!1},
h(a){return A.dJ(a,"[","]")},
gt(a){return new J.bn(a,a.length,A.dX(a).i("bn<1>"))},
gj(a){return A.al(a)},
gp(a){return a.length},
$ih:1}
J.bw.prototype={
bT(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.bM(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.ce.prototype={}
J.bn.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.c(A.dC(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.ad.prototype={
bR(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.c(A.cO(""+a+".toInt()"))},
h(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gj(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
k(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
E(a,b){if((a|0)===a)if(b>=1)return a/b|0
return this.aP(a,b)},
l(a,b){return(a|0)===a?a/b|0:this.aP(a,b)},
aP(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.c(A.cO("Result of truncating division is "+A.m(s)+": "+A.m(a)+" ~/ "+b))},
O(a,b){if(b<0)throw A.c(A.e1(b))
return b>31?0:a<<b>>>0},
bv(a,b){return b>31?0:a<<b>>>0},
b6(a,b){var s
if(b<0)throw A.c(A.e1(b))
if(a>0)s=this.ad(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
bw(a,b){var s
if(a>0)s=this.ad(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
C(a,b){if(0>b)throw A.c(A.e1(b))
return this.ad(a,b)},
ad(a,b){return b>31?0:a>>>b},
gq(a){return A.a5(t.H)},
$iq:1}
J.aF.prototype={
gq(a){return A.a5(t.S)},
$if:1,
$ib:1}
J.by.prototype={
gq(a){return A.a5(t.i)},
$if:1}
J.V.prototype={
bS(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.a(p,0)
if(p.charCodeAt(0)===133){s=J.fF(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.a(p,r)
q=p.charCodeAt(r)===133?J.fG(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
N(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.c(B.y)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
bI(a,b,c){var s=b-a.length
if(s<=0)return a
return this.N(c,s)+a},
bB(a,b){var s=a.indexOf(b,0)
return s},
h(a){return a},
gj(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gq(a){return A.a5(t.N)},
gp(a){return a.length},
$if:1,
$iB:1}
A.aL.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.dB.prototype={
$0(){var s=new A.j($.e,t.D)
s.a2(null)
return s},
$S:8}
A.ct.prototype={}
A.aB.prototype={}
A.aM.prototype={
gt(a){var s=this
return new A.ag(s,s.gp(s),A.a3(s).i("ag<1>"))}}
A.ag.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.eY(q),o=p.gp(q)
if(r.b!==o)throw A.c(A.az(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.aj(q,s);++r.c
return!0}}
A.aC.prototype={
gt(a){return B.q},
gp(a){return 0}}
A.bs.prototype={
m(){return!1},
gn(){throw A.c(A.ek())}}
A.aE.prototype={}
A.C.prototype={$r:"+(1,2)",$s:1}
A.br.prototype={
h(a){return A.dN(this)}}
A.bt.prototype={
V(){var s=this,r=s.$map
if(r==null){r=new A.aK(s.$ti.i("aK<1,2>"))
A.ip(s.a,r)
s.$map=r}return r},
ai(a){return this.V().ai(a)},
D(a,b){return this.V().D(0,b)},
ao(a,b){this.V().ao(0,b)},
gp(a){return this.V().a}}
A.aT.prototype={}
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
A.aS.prototype={
h(a){return"Null check operator used on a null value"}}
A.bz.prototype={
h(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.bR.prototype={
h(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.cl.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.aD.prototype={}
A.b8.prototype={
h(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iA:1}
A.U.prototype={
h(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.f5(r==null?"unknown":r)+"'"},
gbV(){return this},
$C:"$1",
$R:1,
$D:null}
A.c9.prototype={$C:"$0",$R:0}
A.ca.prototype={$C:"$2",$R:2}
A.cz.prototype={}
A.cu.prototype={
h(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.f5(s)+"'"}}
A.ay.prototype={
B(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.ay))return!1
return this.$_target===b.$_target&&this.a===b.a},
gj(a){return(A.e9(this.a)^A.al(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.bM(this.a)+"'")}}
A.bN.prototype={
h(a){return"RuntimeError: "+this.a}}
A.W.prototype={
gp(a){return this.a},
ai(a){var s=this.b
if(s==null)return!1
return s[a]!=null},
D(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.bD(b)},
bD(a){var s,r,q=this.d
if(q==null)return null
s=this.bn(q,a)
r=this.aq(s,a)
if(r<0)return null
return s[r].b},
a0(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.aD(s==null?m.b=m.a8():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=m.c
m.aD(r==null?m.c=m.a8():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.a8()
p=m.ap(b)
o=q[p]
if(o==null)q[p]=[m.a1(b,c)]
else{n=m.aq(o,b)
if(n>=0)o[n].b=c
else o.push(m.a1(b,c))}}},
ao(a,b){var s=this,r=s.e,q=s.r
while(r!=null){b.$2(r.a,r.b)
if(q!==s.r)throw A.c(A.az(s))
r=r.c}},
aD(a,b,c){var s=a[b]
if(s==null)a[b]=this.a1(b,c)
else s.b=c},
a1(a,b){var s=this,r=new A.cf(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&1073741823
return r},
ap(a){return J.G(a)&1073741823},
bn(a,b){return a[this.ap(b)]},
aq(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aa(a[r].a,b))return r
return-1},
h(a){return A.dN(this)},
a8(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.cf.prototype={}
A.af.prototype={
gp(a){return this.a.a},
gt(a){var s=this.a
return new A.bA(s,s.r,s.e)}}
A.bA.prototype={
gn(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.c(A.az(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
A.aK.prototype={
ap(a){return A.ij(a)&1073741823},
aq(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aa(a[r].a,b))return r
return-1}}
A.dw.prototype={
$1(a){return this.a(a)},
$S:9}
A.dx.prototype={
$2(a,b){return this.a(a,b)},
$S:10}
A.dy.prototype={
$1(a){return this.a(a)},
$S:11}
A.aq.prototype={
h(a){return this.aR(!1)},
aR(a){var s,r,q,p,o,n=this.bl(),m=this.aK(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.a(m,q)
o=m[q]
l=a?l+A.eo(o):l+A.m(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
bl(){var s,r=this.$s
while($.b6.length<=r)$.b6.push(null)
s=$.b6[r]
if(s==null){s=this.bk()
if(!(r<$.b6.length))return A.a($.b6,r)
$.b6[r]=s}return s},
bk(){var s,r,q,p,o,n=this.$r,m=n.indexOf("("),l=n.substring(1,m),k=n.substring(m),j=k==="()"?0:k.replace(/[^,]/g,"").length+1,i=A.t(new Array(j),t.f)
for(s=0;s<j;++s)i[s]=s
if(l!==""){r=l.split(",")
s=r.length
for(q=i.length,p=j;s>0;){--p;--s
o=r[s]
if(!(p>=0&&p<q))return A.a(i,p)
i[p]=o}}i=A.fK(i,!1,t.K)
i.$flags=3
return i}}
A.c1.prototype={
aK(){return[this.a,this.b]},
B(a,b){if(b==null)return!1
return b instanceof A.c1&&this.$s===b.$s&&J.aa(this.a,b.a)&&J.aa(this.b,b.b)},
gj(a){return A.cm(this.$s,this.a,this.b,B.f)}}
A.ai.prototype={
gq(a){return B.dP},
$if:1}
A.aQ.prototype={}
A.bB.prototype={
gq(a){return B.dQ},
$if:1}
A.aj.prototype={
gp(a){return a.length},
$iu:1}
A.aO.prototype={$ih:1}
A.aP.prototype={$ih:1}
A.bC.prototype={
gq(a){return B.dR},
$if:1}
A.bD.prototype={
gq(a){return B.dS},
$if:1}
A.bE.prototype={
gq(a){return B.dT},
$if:1}
A.bF.prototype={
gq(a){return B.dU},
$if:1}
A.bG.prototype={
gq(a){return B.dV},
$if:1}
A.bH.prototype={
gq(a){return B.dX},
$if:1}
A.bI.prototype={
gq(a){return B.dY},
$if:1,
$icN:1}
A.aR.prototype={
gq(a){return B.dZ},
gp(a){return a.length},
$if:1}
A.bJ.prototype={
gq(a){return B.e_},
gp(a){return a.length},
$if:1}
A.b2.prototype={}
A.b3.prototype={}
A.b4.prototype={}
A.b5.prototype={}
A.z.prototype={
i(a){return A.bf(v.typeUniverse,this,a)},
a3(a){return A.eF(v.typeUniverse,this,a)}}
A.c_.prototype={}
A.c4.prototype={
h(a){return A.v(this.a,null)}}
A.bZ.prototype={
h(a){return this.a}}
A.bb.prototype={$iI:1}
A.cQ.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:3}
A.cP.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:12}
A.cR.prototype={
$0(){this.a.$0()},
$S:1}
A.cS.prototype={
$0(){this.a.$0()},
$S:1}
A.ba.prototype={
ba(a,b){if(self.setTimeout!=null)self.setTimeout(A.c6(new A.dd(this,b),0),a)
else throw A.c(A.cO("`setTimeout()` not found."))},
bb(a,b){if(self.setTimeout!=null)self.setInterval(A.c6(new A.dc(this,a,Date.now(),b),0),a)
else throw A.c(A.cO("Periodic timer."))},
$icK:1}
A.dd.prototype={
$0(){this.a.c=1
this.b.$0()},
$S:0}
A.dc.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.a.E(s,o)}q.c=p
r.d.$1(q)},
$S:1}
A.bS.prototype={}
A.dk.prototype={
$1(a){return this.a.$2(0,a)},
$S:4}
A.dl.prototype={
$2(a,b){this.a.$2(1,new A.aD(a,b))},
$S:13}
A.dr.prototype={
$2(a,b){this.a(a,b)},
$S:14}
A.x.prototype={
h(a){return A.m(this.a)},
$ik:1,
gP(){return this.b}}
A.F.prototype={}
A.aY.prototype={
aa(){},
ab(){}}
A.bU.prototype={
gbo(){return this.c<4},
bt(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
bx(a,b,c,d){var s,r,q,p,o,n=this
if((n.c&4)!==0){s=new A.b_($.e)
A.f3(s.gbp())
s.c=c
return s}s=$.e
r=d?1:0
q=A.ev(s,a)
A.h1(s,b)
p=new A.aY(n,q,s,r|32,A.a3(n).i("aY<1>"))
p.CW=p
p.ch=p
p.ay=n.c&1
o=n.e
n.e=p
p.ch=null
p.CW=o
if(o==null)n.d=p
else o.ch=p
if(n.d===p)A.eS(n.a)
return p},
bs(a){var s,r=this
A.a3(r).i("aY<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.bt(a)
if((r.c&2)===0&&r.d==null)r.bg()}return null},
bd(){if((this.c&4)!==0)return new A.Y("Cannot add new events after calling close")
return new A.Y("Cannot add new events while doing an addStream")},
H(a,b){if(!this.gbo())throw A.c(this.bd())
this.ac(b)},
bg(){if((this.c&4)!==0)if(null.gbW())null.a2(null)
A.eS(this.b)}}
A.aX.prototype={
ac(a){var s
for(s=this.d;s!=null;s=s.ch)s.be(new A.bX(a))}}
A.cc.prototype={
$0(){this.c.a(null)
this.b.T(null)},
$S:0}
A.R.prototype={
bF(a){if((this.c&15)!==6)return!0
return this.b.b.az(this.d,a.a)},
bA(a){var s,r=this.e,q=null,p=a.a,o=this.b.b
if(t.C.b(r))q=o.bN(r,p,a.b)
else q=o.az(r,p)
try{p=q
return p}catch(s){if(t._.b(A.ax(s))){if((this.c&1)!==0)throw A.c(A.ab("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.c(A.ab("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.j.prototype={
b4(a,b,c){var s,r=$.e
if(r===B.b){if(!t.C.b(b)&&!t.v.b(b))throw A.c(A.dG(b,"onError",u.c))}else b=A.i3(b,r)
s=new A.j(r,c.i("j<0>"))
this.R(new A.R(s,3,a,b,this.$ti.i("@<1>").a3(c).i("R<1,2>")))
return s},
aQ(a,b,c){var s=new A.j($.e,c.i("j<0>"))
this.R(new A.R(s,19,a,b,this.$ti.i("@<1>").a3(c).i("R<1,2>")))
return s},
bu(a){this.a=this.a&1|16
this.c=a},
S(a){this.a=a.a&30|this.a&1
this.c=a.c},
R(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.R(a)
return}s.S(r)}A.as(null,null,s.b,new A.cV(s,a))}},
aO(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.aO(a)
return}n.S(s)}m.a=n.W(a)
A.as(null,null,n.b,new A.d_(m,n))}},
K(){var s=this.c
this.c=null
return this.W(s)},
W(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
T(a){var s,r=this
if(r.$ti.i("H<1>").b(a))A.cY(a,r,!0)
else{s=r.K()
r.a=8
r.c=a
A.a_(r,s)}},
aI(a){var s=this,r=s.K()
s.a=8
s.c=a
A.a_(s,r)},
bj(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.K()
q.S(a)
A.a_(q,r)},
J(a){var s=this.K()
this.bu(a)
A.a_(this,s)},
bi(a,b){this.J(new A.x(a,b))},
a2(a){if(this.$ti.i("H<1>").b(a)){this.aG(a)
return}this.bf(a)},
bf(a){this.a^=2
A.as(null,null,this.b,new A.cX(this,a))},
aG(a){A.cY(a,this,!1)
return},
aF(a){this.a^=2
A.as(null,null,this.b,new A.cW(this,a))},
$iH:1}
A.cV.prototype={
$0(){A.a_(this.a,this.b)},
$S:0}
A.d_.prototype={
$0(){A.a_(this.b,this.a.a)},
$S:0}
A.cZ.prototype={
$0(){A.cY(this.a.a,this.b,!0)},
$S:0}
A.cX.prototype={
$0(){this.a.aI(this.b)},
$S:0}
A.cW.prototype={
$0(){this.a.J(this.b)},
$S:0}
A.d2.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.b1(q.d)}catch(p){s=A.ax(p)
r=A.a7(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.dH(q)
n=k.a
n.c=new A.x(q,o)
q=n}q.b=!0
return}if(j instanceof A.j&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.j){m=k.b.a
l=new A.j(m.b,m.$ti)
j.b4(new A.d3(l,m),new A.d4(l),t.n)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.d3.prototype={
$1(a){this.a.bj(this.b)},
$S:3}
A.d4.prototype={
$2(a,b){this.a.J(new A.x(a,b))},
$S:15}
A.d1.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
q.c=p.b.b.az(p.d,this.b)}catch(o){s=A.ax(o)
r=A.a7(o)
q=s
p=r
if(p==null)p=A.dH(q)
n=this.a
n.c=new A.x(q,p)
n.b=!0}},
$S:0}
A.d0.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.bF(s)&&p.a.e!=null){p.c=p.a.bA(s)
p.b=!1}}catch(o){r=A.ax(o)
q=A.a7(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.dH(p)
m=l.b
m.c=new A.x(p,n)
p=m}p.b=!0}},
$S:0}
A.bT.prototype={}
A.ao.prototype={
gp(a){var s={},r=new A.j($.e,t.a)
s.a=0
this.aW(new A.cx(s,this),!0,new A.cy(s,r),r.gaH())
return r},
gak(a){var s=new A.j($.e,this.$ti.i("j<1>")),r=this.aW(null,!0,new A.cv(s),s.gaH())
r.aY(new A.cw(this,r,s))
return s}}
A.cx.prototype={
$1(a){++this.a.a},
$S(){return this.b.$ti.i("~(1)")}}
A.cy.prototype={
$0(){this.b.T(this.a.a)},
$S:0}
A.cv.prototype={
$0(){var s,r=A.eq(),q=new A.Y("No element")
A.fM(q,r)
s=A.hN(q,r)
s=new A.x(q,r)
this.a.J(s)},
$S:0}
A.cw.prototype={
$1(a){A.hE(this.b,this.c,a)},
$S(){return this.a.$ti.i("~(1)")}}
A.aZ.prototype={
gj(a){return(A.al(this.a)^892482866)>>>0},
B(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.F&&b.a===this.a}}
A.bW.prototype={
aN(){return this.w.bs(this)},
aa(){},
ab(){}}
A.bV.prototype={
aY(a){this.a=A.ev(this.d,a)},
aT(){var s,r=this,q=r.e&=4294967279
if((q&8)===0){q=r.e=q|8
if((q&128)!==0){s=r.r
if(s.a===1)s.a=3}if((q&64)===0)r.r=null
r.f=r.aN()}q=$.dE()
return q},
aa(){},
ab(){},
aN(){return null},
be(a){var s,r,q=this,p=q.r
if(p==null)p=q.r=new A.c0()
s=p.c
if(s==null)p.b=p.c=a
else p.c=s.a=a
r=q.e
if((r&128)===0){r|=128
q.e=r
if(r<256)p.aB(q)}},
ac(a){var s=this,r=s.e
s.e=r|64
s.d.b3(s.a,a)
s.e&=4294967231
s.bh((r&4)!==0)},
bh(a){var s,r,q=this,p=q.e
if((p&128)!==0&&q.r.c==null){p=q.e=p&4294967167
s=!1
if((p&4)!==0)if(p<256){s=q.r
s=s==null?null:s.c==null
s=s!==!1}if(s){p&=4294967291
q.e=p}}for(;;a=r){if((p&8)!==0){q.r=null
return}r=(p&4)!==0
if(a===r)break
q.e=p^64
if(r)q.aa()
else q.ab()
p=q.e&=4294967231}if((p&128)!==0&&p<256)q.r.aB(q)}}
A.b9.prototype={
aW(a,b,c,d){return this.a.bx(a,d,c,!0)}}
A.bY.prototype={}
A.bX.prototype={}
A.c0.prototype={
aB(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.f3(new A.d8(s,a))
s.a=1}}
A.d8.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.a
q.b=r
if(r==null)q.c=null
this.b.ac(s.b)},
$S:0}
A.b_.prototype={
aY(a){},
aT(){this.a=-1
this.c=null
return $.dE()},
bq(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.b2(s)}}else r.a=q}}
A.c2.prototype={}
A.dm.prototype={
$0(){return this.a.T(this.b)},
$S:0}
A.dg.prototype={}
A.d9.prototype={
b2(a){var s,r,q
try{if(B.b===$.e){a.$0()
return}A.eP(null,null,this,a)}catch(q){s=A.ax(q)
r=A.a7(q)
A.c5(s,r)}},
bQ(a,b){var s,r,q
try{if(B.b===$.e){a.$1(b)
return}A.eQ(null,null,this,a,b)}catch(q){s=A.ax(q)
r=A.a7(q)
A.c5(s,r)}},
b3(a,b){return this.bQ(a,b,t.z)},
af(a){return new A.da(this,a)},
by(a,b){return new A.db(this,a,b)},
bM(a){if($.e===B.b)return a.$0()
return A.eP(null,null,this,a)},
b1(a){return this.bM(a,t.z)},
bP(a,b){if($.e===B.b)return a.$1(b)
return A.eQ(null,null,this,a,b)},
az(a,b){var s=t.z
return this.bP(a,b,s,s)},
bO(a,b,c){if($.e===B.b)return a.$2(b,c)
return A.i4(null,null,this,a,b,c)},
bN(a,b,c){var s=t.z
return this.bO(a,b,c,s,s,s)},
bL(a){return a},
aw(a){var s=t.z
return this.bL(a,s,s,s)}}
A.da.prototype={
$0(){return this.a.b2(this.b)},
$S:0}
A.db.prototype={
$1(a){return this.a.b3(this.b,a)},
$S(){return this.c.i("~(0)")}}
A.dp.prototype={
$0(){A.fx(this.a,this.b)},
$S:0}
A.b1.prototype={
gt(a){var s=this,r=new A.ap(s,s.r,s.$ti.i("ap<1>"))
r.c=s.e
return r},
gp(a){return this.a},
H(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.aE(s==null?q.b=A.dU():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.aE(r==null?q.c=A.dU():r,b)}else return q.bc(b)},
bc(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.dU()
s=J.G(a)&1073741823
r=p[s]
if(r==null)p[s]=[q.a9(a)]
else{if(q.bm(r,a)>=0)return!1
r.push(q.a9(a))}return!0},
aE(a,b){if(a[b]!=null)return!1
a[b]=this.a9(b)
return!0},
aM(){this.r=this.r+1&1073741823},
a9(a){var s,r=this,q=new A.d7(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.aM()
return q},
bm(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aa(a[r].a,b))return r
return-1}}
A.d7.prototype={}
A.ap.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.c(A.az(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.l.prototype={
gt(a){return new A.ag(a,a.length,A.bl(a).i("ag<l.E>"))},
aj(a,b){if(!(b<a.length))return A.a(a,b)
return a[b]},
h(a){return A.dJ(a,"[","]")}}
A.aN.prototype={
gp(a){return this.a},
h(a){return A.dN(this)}}
A.cg.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.m(a)
r.a=(r.a+=s)+": "
s=A.m(b)
r.a+=s},
$S:16}
A.aU.prototype={
h(a){return A.dJ(this,"{","}")}}
A.b7.prototype={}
A.aA.prototype={
B(a,b){if(b==null)return!1
return b instanceof A.aA&&this.a===b.a},
gj(a){return B.a.gj(this.a)},
h(a){var s,r,q,p,o=this.a,n=B.a.l(o,36e8)
o%=36e8
s=B.a.l(o,6e7)
o%=6e7
r=s<10?"0":""
q=B.a.l(o,1e6)
p=q<10?"0":""
return""+n+":"+r+s+":"+p+q+"."+B.h.bI(B.a.h(o%1e6),6,"0")}}
A.cT.prototype={
h(a){return this.U()}}
A.k.prototype={
gP(){return A.fL(this)}}
A.bo.prototype={
h(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.cb(s)
return"Assertion failed"}}
A.I.prototype={}
A.E.prototype={
ga7(){return"Invalid argument"+(!this.a?"(s)":"")},
ga6(){return""},
h(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.ga7()+q+o
if(!s.a)return n
return n+s.ga6()+": "+A.cb(s.gar())},
gar(){return this.b}}
A.am.prototype={
gar(){return this.b},
ga7(){return"RangeError"},
ga6(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.m(q):""
else if(q==null)s=": Not greater than or equal to "+A.m(r)
else if(q>r)s=": Not in inclusive range "+A.m(r)+".."+A.m(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.m(r)
return s}}
A.bu.prototype={
gar(){return this.b},
ga7(){return"RangeError"},
ga6(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gp(a){return this.f}}
A.aW.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.bQ.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.Y.prototype={
h(a){return"Bad state: "+this.a}}
A.bq.prototype={
h(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.cb(s)+"."}}
A.bK.prototype={
h(a){return"Out of Memory"},
gP(){return null},
$ik:1}
A.aV.prototype={
h(a){return"Stack Overflow"},
gP(){return null},
$ik:1}
A.cU.prototype={
h(a){return"Exception: "+this.a}}
A.N.prototype={
am(a,b,c){var s,r
for(s=this.gt(this),r=b;s.m();)r=c.$2(r,s.gn())
return r},
an(a,b,c){return this.am(0,b,c,t.z)},
gp(a){var s,r=this.gt(this)
for(s=0;r.m();)++s
return s},
aj(a,b){var s,r
A.fP(b,"index")
s=this.gt(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.c(A.dI(b,b-r,this,null,"index"))},
h(a){return A.fE(this,"(",")")}}
A.b0.prototype={
aj(a,b){var s=this.a
if(b>=s)A.a9(A.dI(b,s,this,null,"index"))
return this.b.$1(b)},
gp(a){return this.a}}
A.r.prototype={
gj(a){return A.d.prototype.gj.call(this,0)},
h(a){return"null"}}
A.d.prototype={$id:1,
B(a,b){return this===b},
gj(a){return A.al(this)},
h(a){return"Instance of '"+A.bM(this)+"'"},
gq(a){return A.eZ(this)},
toString(){return this.h(this)}}
A.c3.prototype={
h(a){return""},
$iA:1}
A.bP.prototype={
gp(a){return this.a.length},
h(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.d5.prototype={
bH(a){if(a<=0||a>4294967296)throw A.c(A.fN("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
A.M.prototype={
gj(a){var s=this.a,r=this.b
return A.cm(new A.C(s,r).$s,s,r,B.f)},
B(a,b){var s,r,q,p
if(b==null)return!1
if(b instanceof A.M){s=b.a
r=b.b
q=this.a
p=this.b
p=A.cm(new A.C(s,r).$s,s,r,B.f)===A.cm(new A.C(q,p).$s,q,p,B.f)
s=p}else s=!1
return s},
h(a){var s=this
return"("+s.a+" "+s.b+") => '"+s.c+"' "+s.d}}
A.cn.prototype={
h(a){return A.eZ(this).h(0)+": "+this.a}}
A.cB.prototype={}
A.ae.prototype={}
A.ah.prototype={
h(a){var s=this
return"               row: "+s.a+"\n            column: "+s.b+"\n         character: '"+s.c+"'\n    characterColor: "+s.d+"\n\n          pixelRow: "+s.e+"\n       pixelColumn: "+s.f+"\n         pixelIsOn: "+s.r+"\n    "}}
A.ak.prototype={
sZ(a){var s,r,q,p=this
if(a<0){s=p.d=a
for(r=p.b,q=p.a;s<0;){s+=r
p.d=s
p.c=B.a.k(p.c-1,q)}}else{s=p.b
p.c=B.a.k(p.c+B.a.E(a,s),p.a)
p.d=B.a.k(a,s)}},
gu(){return this.c*this.b+this.d},
su(a){var s=this,r=s.b
s.c=B.a.k(B.a.E(a,r),s.a)
s.d=B.a.k(a,r)}}
A.bO.prototype={
b8(a,b,c,d,e,f,g,h){var s,r=this,q=v.G.document
q.onfocus=A.bg(new A.cp(r))
q.onblur=A.bg(new A.cq(r))
q=r.w
q.tabIndex=-1
q.style.display="block"
q.style.outline="none"
s=q.getContext("2d")
if(s==null)s=A.a1(s)
s.imageSmoothingEnabled=!1
q.onfocus=A.bg(new A.cr(r))
q.onblur=A.bg(new A.cs(r))
b.style.display="flex"
b.style.alignItems="flex-start"
b.style.padding="0"
b.style.margin="0"
b.style.width="fit-content"
b.style.height="fit-content"
b.style.background="gray"
b.appendChild(q)
r.Y(0)},
X(a,b){return new A.C(B.a.k(a,this.b),B.a.k(b,this.c))},
a4(){var s=this.x,r=s.getContext("2d")
if(r==null)r=A.a1(r)
r.save()
r.beginPath()
r.clearRect(0,0,s.width,s.height)
r.restore()
return r},
a5(){var s=this.w.getContext("2d")
if(s==null)s=A.a1(s)
s.save()
s.beginPath()
s.drawImage(this.x,0,0)
s.restore()
return s},
F(a,b,c,d){var s,r,q,p,o,n,m=this,l=a<0||a>=m.b||b<0||b>=m.c
if(l)return
s=m.X(a,b)
a=s.a
b=s.b
r=A.dP(b)
q=r.a
p=B.a.O(1,r.b)
l=m.y
if(!(a>=0&&a<l.length))return A.a(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.a(l,q)
o=l[q]
l.$flags&2&&A.c8(l)
l[q]=(o|p)>>>0
l[q]=(l[q]^p)>>>0
l=c.getContext("2d")
if(l==null)l=A.a1(l)
l.save()
l.beginPath()
l.fillStyle=m.r
o=m.d
n=m.e
l.fillRect(b*o,a*n,o,n)
l.restore()},
G(a,b,c,d,e){var s,r,q,p,o,n,m=this,l=a<0||a>=m.b||b<0||b>=m.c
if(l)return
s=m.X(a,b)
a=s.a
b=s.b
r=A.dP(b)
q=r.a
p=B.a.O(1,r.b)
l=m.y
if(!(a>=0&&a<l.length))return A.a(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.a(l,q)
o=l[q]
l.$flags&2&&A.c8(l)
l[q]=(o|p)>>>0
o=d.getContext("2d")
l=o==null?A.a1(o):o
l.save()
l.beginPath()
l.fillStyle=c
o=m.d
n=m.e
l.fillRect(b*o,a*n,o,n)
l.restore()},
b_(a,b){var s,r,q,p,o=this.X(b,a)
b=o.a
s=A.dP(o.b)
r=s.a
q=B.a.O(1,s.b)
p=this.y
if(!(b>=0&&b<p.length))return A.a(p,b)
p=p[b]
if(!(r>=0&&r<p.length))return A.a(p,r)
return(p[r]&q)>>>0>0},
aU(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=this
if(e==null)e=k.c-c
if(b==null)b=k.b-d
k.a4()
if(c===0&&d===0&&e===k.c&&b===k.b){for(s=k.y,r=s.length,q=0;q<r;++q)for(p=0;o=s[q],p<o.length;++p){o.$flags&2&&A.c8(o)
o[p]=0}s=k.x
r=s.getContext("2d")
if(r==null)r=A.a1(r)
r.save()
r.fillStyle=k.r
r.fillRect(0,0,s.width,s.height)
r.restore()}else{s=k.b
d=B.a.k(d,s)
r=k.c
c=B.a.k(c,r)
o=Math.abs(b)
n=Math.min(d+o,s)
m=Math.min(c+o,r)
for(o=k.x,q=d;q<n;++q){l=B.a.k(q,s)
for(p=c;p<m;++p)k.F(l,B.a.k(p,r),o,!1)}}k.a5()},
Y(a){return this.aU(0,null,0,0,null)},
br(a,b,c,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
d.a4()
s=d.X(a,b)
a=s.a
b=s.b
r=B.a.bv(1,a1)-1
for(q=a2.a,p=a1-1,o=t.t,n=d.x,m=0;m<c.length;++m){l=c[m]
k=(l&r)>>>0
l=A.t([],o)
for(j=a+m,i=0;i<a1;++i){h=d.b_(b+i,j)?1:0
l.push(B.a.O(h,p-i))}g=B.j.an(l,0,new A.co())
switch(q){case 0:for(i=0;i<a1;++i){l=b+i
if((B.a.C(k,p-i)&1)>0)d.G(j,l,a0,n,!1)
else d.F(j,l,n,!1)}break
case 1:for(i=0;i<a1;++i){l=b+i
if((B.a.C(k,p-i)&1)>0)d.F(j,l,n,!1)
else d.G(j,l,a0,n,!1)}break
case 3:for(i=0;i<a1;++i){f=p-i
if((B.a.C(k,f)&1)>0&&(B.a.b6(g,f)&1)===0)d.G(j,b+i,a0,n,!1)}break
case 2:for(i=0;i<a1;++i)if((B.a.C(k,p-i)&1)>0)d.G(j,b+i,a0,n,!1)
break
case 4:for(e=(k&g)>>>0,i=0;i<a1;++i)if((B.a.C(e,p-i)&1)>0)d.G(j,b+i,a0,n,!1)
break
case 5:for(e=(k&g)>>>0,i=0;i<a1;++i)if((B.a.C(e,p-i)&1)>0)d.F(j,b+i,n,!1)
break
case 6:for(e=(k&g)>>>0,i=0;i<a1;++i)if((B.a.C(e,p-i)&1)===0)d.F(j,b+i,n,!1)
break
case 7:for(e=(k&g)>>>0,i=0;i<a1;++i){l=b+i
if((B.a.C(e,p-i)&1)===0)d.F(j,l,n,!1)
else d.G(j,l,a0,n,!1)}break}}d.a5()},
b0(a,b,c){this.br(c.a,c.b,b,a,8,B.dM,!0,!1,!1)},
b5(a){var s,r,q,p,o,n,m,l,k=this,j=k.b
a=B.a.k(a,j)
for(s=j-a,r=k.y,q=r.length,p=0;p<s;++p){if(!(p<q))return A.a(r,p)
o=p+a
n=0
for(;m=r[p],n<m.length;++n){if(!(o<q))return A.a(r,o)
l=r[o]
if(!(n<l.length))return A.a(l,n)
l=l[n]
m.$flags&2&&A.c8(m)
m[n]=l}}for(;p<j;++p){if(!(p<q))return A.a(r,p)
n=0
for(;o=r[p],n<o.length;++n){o.$flags&2&&A.c8(o)
o[n]=0}}k.a4()
j=k.x
r=j.getContext("2d")
if(r==null)r=A.a1(r)
r.save()
r.beginPath()
q=k.e
r.drawImage(k.w,0,-a*q)
r.fillStyle=k.r
r.fillRect(0,s*q,j.width,a*q)
r.restore()
k.a5()},
M(){var s=this.w
s.style.opacity="1.0"
s.focus()},
L(){var s=this.w,r=s.style
r.opacity="0.5"
s.blur()}}
A.cp.prototype={
$0(){this.a.z=!0},
$S:1}
A.cq.prototype={
$0(){this.a.z=!1},
$S:1}
A.cr.prototype={
$0(){this.a.M()},
$S:1}
A.cs.prototype={
$0(){this.a.L()},
$S:1}
A.co.prototype={
$2(a,b){return(a|b)>>>0},
$S:6}
A.ch.prototype={
U(){return"Mode."+this.b}}
A.an.prototype={
U(){return"State."+this.b}}
A.cA.prototype={
b9(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=this,r=s.f
r.tabIndex=-1
r.onfocus=A.bg(new A.cC(s))
r.onblur=A.bg(new A.cD(s))
r.onkeydown=A.eK(new A.cE(s,l,new A.cI(),new A.cH(s)))
r.onclick=A.eK(new A.cF(s,new A.cJ(s),o))
A.fU(A.ei(300),new A.cG(s))
s.L()
s.Y(0)},
gal(){var s=this.w
s===$&&A.K()
return s.gal()},
gag(){var s=this.w
s===$&&A.K()
return s.gag()},
ae(a,b){return new A.C(B.a.k(a,this.a),B.a.k(b,this.b))},
aL(){var s=this,r=s.x
s.CW.H(0,new A.M(r.c,r.d," ","white"))
s.aS()
s.cy=!1},
aS(){var s,r,q,p,o,n,m,l,k,j
for(s=this.CW,r=A.h3(s,s.r,s.$ti.c),q=this.w,p=this.cx,o=r.$ti.c;r.m();){n=r.d
if(n==null)n=o.a(n)
m=n.a
l=n.b
if(p.ai(n.c)){k=p.D(0,n.c)
k.toString
j=k}else j=$.f8()
q===$&&A.K()
q.b0(n.d,j,new A.C(m*10,l*8))}if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.aM()}},
aA(a,b){var s,r=this.ae(b,a)
b=r.a
a=r.b
s=this.ch
if(!(b>=0&&b<s.length))return A.a(s,b)
s=s[b]
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a].c},
aX(){var s,r=this.x
r.sZ(0)
s=r.c
if(s===this.a-1)this.aC()
else r.c=B.a.k(s+1,r.a)},
aC(){var s,r,q,p,o,n,m,l,k=this
for(s=k.a-1,r=k.b,q=k.ch,p=0;p<s;p=o)for(o=p+1,n=0;n<r;++n){m=q.length
if(!(p<m))return A.a(q,p)
l=q[p]
if(!(n<l.length))return A.a(l,n)
l=l[n]
if(!(o<m))return A.a(q,o)
m=q[o]
if(!(n<m.length))return A.a(m,n)
m=m[n]
l.c=m.c
l.d=m.d}for(n=0;n<r;++n){if(!(s>=0&&s<q.length))return A.a(q,s)
m=q[s]
if(!(n<m.length))return A.a(m,n)
m=m[n]
m.c=" "
m.d="white"}s=k.w
s===$&&A.K()
s.b5(10)},
av(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=e==null?h.x.c:e,f=h.ae(g,c==null?h.x.d:c)
g=h.x
s=g.a
g.c=B.a.k(f.a,s)
g.sZ(f.b)
if(b==null)b="white"
for(r=a.split(""),q=r.length,p=h.ch,o=h.CW,n=h.a-1,m=h.b-1,l=0;l<q;++l){k=r[l]
e=g.c
c=g.d
if(!(e>=0&&e<p.length))return A.a(p,e)
j=p[e]
if(!(c>=0&&c<j.length))return A.a(j,c)
i=j[c]
i.c=k
i.d=b
o.H(0,i)
if(e===n&&c===m){h.aC()
g.c=B.a.k(g.c-1,s)}g.sZ(g.d+1)}h.aS()
if(d)h.aX()},
v(a,b,c){return this.av(a,null,b,!0,c)},
aZ(a,b){return this.av(a,null,null,b,null)},
au(a,b,c,d){return this.av(a,b,c,!0,d)},
Y(a){var s,r,q,p,o=this,n=o.b,m=o.a
for(s=o.ch,r=0;r<m;++r)for(q=0;q<n;++q){if(!(r<s.length))return A.a(s,r)
p=s[r]
if(!(q<p.length))return A.a(p,q)
p=p[q]
p.c=" "
p.d="white"}s=o.w
s===$&&A.K()
s.aU(0,m*10,0,0,n*8)
s=o.x
s.c=0%s.a
s.sZ(0)},
bJ(a,b,c){var s=this.w
s===$&&A.K()
s.b0("white",b,new A.C(c*10,a*8))},
bC(){if(this.ay!==B.e)A.a9(A.dS("Terminal already awaiting input."))
this.ay=B.k
var s=this.at
return new A.F(s,A.a3(s).i("F<1>")).gak(0)},
M(){return this.gal().$0()},
L(){return this.gag().$0()}}
A.cJ.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.w
i===$&&A.K()
s=J.ec(a.offsetX)
r=Math.max(Math.min(B.a.E(J.ec(a.offsetY)-1,i.e),i.b-1),0)
q=Math.max(Math.min(B.a.E(s-1,i.d),i.c-1),0)
p=B.a.l(r,10)
o=B.a.l(q,8)
n=j.aA(o,p)
m=j.ae(p,o)
l=m.a
k=m.b
j=j.ch
if(!(l>=0&&l<j.length))return A.a(j,l)
j=j[l]
if(!(k>=0&&k<j.length))return A.a(j,k)
return new A.ah(p,o,n,j[k].d,r,q,i.b_(q,r))},
$S:17}
A.cI.prototype={
$1(a){var s=a.key
return new A.ae(s.length>1?"":s)},
$S:18}
A.cH.prototype={
$0(){var s,r,q,p,o,n=this.a,m=n.a,l=n.b,k=new A.ak(m,l)
k.su(n.y.gu())
s=A.t([],t.s)
for(r=n.z,q=r.b;p=k.c,o=k.d,p*l+o<r.c*q+r.d;p=k.c*l+k.d+1,k.c=B.a.k(B.a.E(p,l),m),k.d=B.a.k(p,l))s.push(n.aA(o,p))
return B.j.bE(s,"")},
$S:19}
A.cC.prototype={
$0(){var s=this.a.w
s===$&&A.K()
s.M()},
$S:1}
A.cD.prototype={
$0(){var s=this.a.w
s===$&&A.K()
s.L()},
$S:1}
A.cE.prototype={
$1(a){var s,r,q,p
a.preventDefault()
s=this.a
switch(s.ay.a){case 0:break
case 1:r=s.at
if(r.d!=null){r.H(0,this.c.$1(a))
s.ay=B.e}break
case 2:s.aL()
A:{q=a.keyCode
if(13===q){r=s.as
if(r.d!=null){r.H(0,J.fo(this.d.$0()))
s.aX()
s.ay=B.e}break A}if(8===q){r=s.x
if(r.gu()>s.y.gu()){r.su(r.gu()-1)
s.aZ(" ",!1)
r.su(r.gu()-1)}break A}p=a.key
if(p.length===1&&s.x.gu()<s.z.gu())s.aZ(p,!1)}break
case 3:break}},
$S:7}
A.cF.prototype={
$1(a){var s
a.preventDefault()
s=this.a
if(s.ay===B.dO&&s.ax.d!=null){s.ax.H(0,this.b.$1(a))
s.ay=B.e}},
$S:7}
A.cG.prototype={
$1(a){var s,r=this.a,q=r.w
q===$&&A.K()
if(q.z&&J.aa(v.G.document.activeElement,q.w)&&r.ay===B.dN)if(r.cy)r.aL()
else{q=r.x
s=q.c
r.bJ(q.d,$.f7(),s)
r.cy=!0}},
$S:20}
A.X.prototype={
U(){return"Position."+this.b},
h(a){var s
switch(this.a){case 0:s="O"
break
case 1:s="X"
break
case 2:s="."
break
default:s=null}return s},
ah(){if(this===B.d)return"violet"
if(this===B.i)return"lightgreen"
return"gray"}}
A.ci.prototype={
gI(){var s,r,q,p=A.t([],t.t)
for(s=this.a,r=0;r<7;++r){if(0>=s.length)return A.a(s,0)
q=s[0]
if(!(r<q.length))return A.a(q,r)
if(q[r]===B.c)p.push(r)}return p},
aJ(a){var s,r,q,p=this.a,o=p.length
if(0>=o)return A.a(p,0)
s=p[0]
if(!(a>=0&&a<s.length))return A.a(s,a)
if(s[a]===B.c){r=0
for(;;){q=r+1
if(q<6){if(!(q<o))return A.a(p,q)
s=p[q]
if(!(a<s.length))return A.a(s,a)
s=s[a]===B.c}else s=!1
if(!s)break
r=q}return r}return-1},
bU(a){var s,r=this.aJ(a)
if(r===-1)throw A.c("Cannot move "+a+"...")
s=new A.ck(this,r,a)
if(s.$2(0,1))return!0
if(s.$2(1,0))return!0
if(s.$2(1,1))return!0
if(s.$2(-1,1))return!0
return!1},
a_(a){var s,r,q,p=this,o=p.a
if(0>=o.length)return A.a(o,0)
s=o[0]
if(!(a>=0&&a<s.length))return A.a(s,a)
if(s[a]===B.c){r=p.aJ(a)
q=p.bU(a)
if(!(r>=0&&r<o.length))return A.a(o,r)
o=o[r]
s=p.b
if(!(a<o.length))return A.a(o,a)
o[a]=s
return q}throw A.c("Cannot make move: "+a)},
aV(){var s,r,q,p,o,n,m,l,k=A.em()
for(s=k.a,r=s.length,q=this.a,p=q.length,o=0;o<6;++o)for(n=0;n<7;++n){if(!(o<r))return A.a(s,o)
m=s[o]
if(!(o<p))return A.a(q,o)
l=q[o]
if(!(n<l.length))return A.a(l,n)
l=l[n]
if(!(n<m.length))return A.a(m,n)
m[n]=l}k.b=this.b
return k},
bK(){var s,r,q=this.aV()
for(;;){s=q.gI()
r=s.length
if(r===0)break
r=$.fl().bH(r)
if(!(r>=0&&r<s.length))return A.a(s,r)
if(q.a_(s[r]))return q.b
else q.b=q.b===B.d?B.i:B.d}return B.c},
bG(a){var s,r,q,p,o,n,m,l,k,j=this,i=t.S
i=A.fI(i,i)
for(s=j.gI(),r=s.length,q=0;q<s.length;s.length===r||(0,A.dC)(s),++q)i.a0(0,s[q],0)
for(s=j.gI(),r=s.length,p=t.z,q=0;q<s.length;s.length===r||(0,A.dC)(s),++q){o=s[q]
n=j.aV()
if(n.a_(o))return o
for(m=A.cd(a,p),m=m.gt(m);m.m();){m.gn()
if(n.bK()===j.b){l=i.D(0,o)
l.toString
i.a0(0,o,l+1)}}}s=i.$ti.i("af<1>")
k=new A.af(i,s).gt(0)
if(!k.m())A.a9(A.ek())
return new A.af(i,s).an(0,k.gn(),new A.cj(i))},
h(a){var s,r,q,p,o,n
for(s=this.a,r=s.length,q=0,p="";q<6;++q){for(o=0;o<7;++o,p=n){if(!(q<r))return A.a(s,q)
n=s[q]
if(!(o<n.length))return A.a(n,o)
n=p+n[o].h(0)}p+="\n"}return p.charCodeAt(0)==0?p:p}}
A.ck.prototype={
$2(a,b){var s,r,q,p,o,n=this.b,m=this.c,l=this.a,k=l.a,j=k.length
l=l.b
s=m
r=n
q=1
for(;;){r+=a
p=!1
if(r>=0)if(r<6){o=s+b
if(o>=0)if(o<7){if(!(r<j))return A.a(k,r)
p=k[r]
if(!(o<p.length))return A.a(p,o)
o=p[o]===l
p=o}}if(!p)break;++q
s+=b}for(;;){n-=a
p=!1
if(n>=0)if(n<6){o=m-b
if(o>=0)if(o<7){if(!(n<j))return A.a(k,n)
p=k[n]
if(!(o<p.length))return A.a(p,o)
o=p[o]===l
p=o}}if(!p)break;++q
m-=b}return q===4},
$S:21}
A.cj.prototype={
$2(a,b){var s=this.a,r=s.D(0,a)
r.toString
s=s.D(0,b)
s.toString
return r>s?a:b},
$S:6}
A.ac.prototype={
U(){return"GameResult."+this.b}};(function aliases(){var s=J.P.prototype
s.b7=s.h})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._static_2,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u
s(A,"id","fZ",2)
s(A,"ie","h_",2)
s(A,"ig","h0",2)
r(A,"eV","i8",0)
s(A,"ih","i0",4)
q(A,"ii","i1",5)
p(A.j.prototype,"gaH","bi",5)
o(A.b_.prototype,"gbp","bq",0)
s(A,"eX","h2",22)
var n
o(n=A.bO.prototype,"gal","M",0)
o(n,"gag","L",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.d,null)
q(A.d,[A.dK,J.bv,A.aT,J.bn,A.k,A.U,A.ct,A.N,A.ag,A.bs,A.aE,A.aq,A.br,A.cL,A.cl,A.aD,A.b8,A.aN,A.cf,A.bA,A.z,A.c_,A.c4,A.ba,A.bS,A.x,A.ao,A.bV,A.bU,A.R,A.j,A.bT,A.bY,A.c0,A.b_,A.c2,A.dg,A.aU,A.d7,A.ap,A.l,A.aA,A.cT,A.bK,A.aV,A.cU,A.r,A.c3,A.bP,A.d5,A.M,A.cn,A.ae,A.ah,A.ak,A.bO,A.cA,A.ci])
q(J.bv,[J.bx,J.aG,J.aI,J.aH,J.aJ,J.ad,J.V])
q(J.aI,[J.P,J.n,A.ai,A.aQ])
q(J.P,[J.bL,J.Z,J.O])
r(J.bw,A.aT)
r(J.ce,J.n)
q(J.ad,[J.aF,J.by])
q(A.k,[A.aL,A.I,A.bz,A.bR,A.bN,A.bZ,A.bo,A.E,A.aW,A.bQ,A.Y,A.bq])
q(A.U,[A.c9,A.ca,A.cz,A.dw,A.dy,A.cQ,A.cP,A.dk,A.d3,A.cx,A.cw,A.db,A.cJ,A.cI,A.cE,A.cF,A.cG])
q(A.c9,[A.dB,A.cR,A.cS,A.dd,A.dc,A.cc,A.cV,A.d_,A.cZ,A.cX,A.cW,A.d2,A.d1,A.d0,A.cy,A.cv,A.d8,A.dm,A.da,A.dp,A.cp,A.cq,A.cr,A.cs,A.cH,A.cC,A.cD])
r(A.aB,A.N)
q(A.aB,[A.aM,A.aC,A.af])
r(A.c1,A.aq)
r(A.C,A.c1)
r(A.bt,A.br)
r(A.aS,A.I)
q(A.cz,[A.cu,A.ay])
r(A.W,A.aN)
r(A.aK,A.W)
q(A.ca,[A.dx,A.dl,A.dr,A.d4,A.cg,A.co,A.ck,A.cj])
q(A.aQ,[A.bB,A.aj])
q(A.aj,[A.b2,A.b4])
r(A.b3,A.b2)
r(A.aO,A.b3)
r(A.b5,A.b4)
r(A.aP,A.b5)
q(A.aO,[A.bC,A.bD])
q(A.aP,[A.bE,A.bF,A.bG,A.bH,A.bI,A.aR,A.bJ])
r(A.bb,A.bZ)
r(A.b9,A.ao)
r(A.aZ,A.b9)
r(A.F,A.aZ)
r(A.bW,A.bV)
r(A.aY,A.bW)
r(A.aX,A.bU)
r(A.bX,A.bY)
r(A.d9,A.dg)
r(A.b7,A.aU)
r(A.b1,A.b7)
q(A.E,[A.am,A.bu])
r(A.b0,A.aM)
r(A.cB,A.cn)
q(A.cT,[A.ch,A.an,A.X,A.ac])
s(A.b2,A.l)
s(A.b3,A.aE)
s(A.b4,A.l)
s(A.b5,A.aE)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{b:"int",q:"double",f0:"num",B:"String",bk:"bool",r:"Null",h:"List",d:"Object",iN:"Map",i:"JSObject"},mangledNames:{},types:["~()","r()","~(~())","r(@)","~(@)","~(d,A)","b(b,b)","r(i)","H<~>()","@(@)","@(@,B)","@(B)","r(~())","r(@,A)","~(b,@)","r(d,A)","~(d?,d?)","ah(i)","ae(i)","B()","~(cK)","bk(b,b)","b(b)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.C&&a.b(c.a)&&b.b(c.b)}}
A.hk(v.typeUniverse,JSON.parse('{"bL":"P","Z":"P","O":"P","iO":"ai","bx":{"bk":[],"f":[]},"aG":{"f":[]},"aI":{"i":[]},"P":{"i":[]},"n":{"h":["1"],"i":[]},"bw":{"aT":[]},"ce":{"n":["1"],"h":["1"],"i":[]},"ad":{"q":[]},"aF":{"q":[],"b":[],"f":[]},"by":{"q":[],"f":[]},"V":{"B":[],"f":[]},"aL":{"k":[]},"aB":{"N":["1"]},"aM":{"N":["1"]},"aC":{"N":["1"]},"aS":{"I":[],"k":[]},"bz":{"k":[]},"bR":{"k":[]},"b8":{"A":[]},"bN":{"k":[]},"W":{"aN":["1","2"]},"af":{"N":["1"]},"aK":{"W":["1","2"],"aN":["1","2"]},"ai":{"i":[],"f":[]},"aQ":{"i":[]},"bB":{"i":[],"f":[]},"aj":{"u":["1"],"i":[]},"aO":{"l":["q"],"h":["q"],"u":["q"],"i":[]},"aP":{"l":["b"],"h":["b"],"u":["b"],"i":[]},"bC":{"l":["q"],"h":["q"],"u":["q"],"i":[],"f":[],"l.E":"q"},"bD":{"l":["q"],"h":["q"],"u":["q"],"i":[],"f":[],"l.E":"q"},"bE":{"l":["b"],"h":["b"],"u":["b"],"i":[],"f":[],"l.E":"b"},"bF":{"l":["b"],"h":["b"],"u":["b"],"i":[],"f":[],"l.E":"b"},"bG":{"l":["b"],"h":["b"],"u":["b"],"i":[],"f":[],"l.E":"b"},"bH":{"l":["b"],"h":["b"],"u":["b"],"i":[],"f":[],"l.E":"b"},"bI":{"cN":[],"l":["b"],"h":["b"],"u":["b"],"i":[],"f":[],"l.E":"b"},"aR":{"l":["b"],"h":["b"],"u":["b"],"i":[],"f":[],"l.E":"b"},"bJ":{"l":["b"],"h":["b"],"u":["b"],"i":[],"f":[],"l.E":"b"},"bZ":{"k":[]},"bb":{"I":[],"k":[]},"ba":{"cK":[]},"x":{"k":[]},"F":{"ao":["1"]},"aX":{"bU":["1"]},"j":{"H":["1"]},"aZ":{"ao":["1"]},"b9":{"ao":["1"]},"b1":{"aU":["1"]},"b7":{"aU":["1"]},"bo":{"k":[]},"I":{"k":[]},"E":{"k":[]},"am":{"k":[]},"bu":{"k":[]},"aW":{"k":[]},"bQ":{"k":[]},"Y":{"k":[]},"bq":{"k":[]},"bK":{"k":[]},"aV":{"k":[]},"b0":{"aM":["1"],"N":["1"]},"c3":{"A":[]},"fD":{"h":["b"]},"fX":{"h":["b"]},"fW":{"h":["b"]},"fB":{"h":["b"]},"fV":{"h":["b"]},"fC":{"h":["b"]},"cN":{"h":["b"]},"fy":{"h":["q"]},"fz":{"h":["q"]}}'))
A.hj(v.typeUniverse,JSON.parse('{"aB":1,"bs":1,"aE":1,"br":2,"bA":1,"aj":1,"aZ":1,"bW":1,"bV":1,"b9":1,"bY":1,"bX":1,"c0":1,"b_":1,"c2":1,"b7":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.dt
return{o:s("M"),Q:s("k"),Z:s("iL"),I:s("ac"),U:s("n<M>"),G:s("n<h<M>>"),w:s("n<h<X>>"),f:s("n<d>"),u:s("n<X>"),s:s("n<B>"),x:s("n<cN>"),b:s("n<@>"),t:s("n<b>"),T:s("aG"),m:s("i"),g:s("O"),p:s("u<@>"),V:s("ae"),j:s("h<@>"),q:s("ah"),P:s("r"),K:s("d"),L:s("iP"),F:s("+()"),l:s("A"),N:s("B"),E:s("cK"),R:s("f"),_:s("I"),A:s("Z"),c:s("j<@>"),a:s("j<b>"),D:s("j<~>"),y:s("bk"),i:s("q"),z:s("@"),v:s("@(d)"),C:s("@(d,A)"),S:s("b"),O:s("H<r>?"),B:s("i?"),X:s("d?"),J:s("B?"),d:s("bk?"),M:s("q?"),W:s("b?"),Y:s("f0?"),H:s("f0"),n:s("~"),e:s("~(d)"),k:s("~(d,A)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.E=J.bv.prototype
B.j=J.n.prototype
B.a=J.aF.prototype
B.F=J.ad.prototype
B.h=J.V.prototype
B.G=J.O.prototype
B.H=J.aI.prototype
B.p=J.bL.prototype
B.l=J.Z.prototype
B.q=new A.bs()
B.m=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.r=function() {
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
B.x=function(getTagFallback) {
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
B.t=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.w=function(hooks) {
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
B.v=function(hooks) {
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
B.u=function(hooks) {
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
B.n=function(hooks) { return hooks; }

B.y=new A.bK()
B.f=new A.ct()
B.z=new A.d5()
B.b=new A.d9()
B.A=new A.c3()
B.B=new A.aA(0)
B.C=new A.ac(0,"human")
B.D=new A.ac(1,"computer")
B.o=new A.ac(2,"tie")
B.d6=s([126,129,165,129,189,153,129,126],t.t)
B.a8=s([126,255,219,255,195,231,255,126],t.t)
B.dD=s([108,254,254,254,124,56,16,0],t.t)
B.c3=s([16,56,124,254,124,56,16,0],t.t)
B.b1=s([56,124,56,254,254,124,56,124],t.t)
B.bd=s([16,16,56,124,254,124,56,124],t.t)
B.aw=s([0,0,24,60,60,24,0,0],t.t)
B.az=s([255,255,231,195,195,231,255,255],t.t)
B.aL=s([0,60,102,66,66,102,60,0],t.t)
B.cR=s([255,195,153,189,189,153,195,255],t.t)
B.dC=s([15,7,15,125,204,204,204,120],t.t)
B.dB=s([60,102,102,102,60,24,126,24],t.t)
B.cO=s([63,51,63,48,48,112,240,224],t.t)
B.S=s([127,99,127,99,99,103,230,192],t.t)
B.X=s([153,90,60,231,231,60,90,153],t.t)
B.at=s([128,224,248,254,248,224,128,0],t.t)
B.bz=s([2,14,62,254,62,14,2,0],t.t)
B.ch=s([24,60,126,24,24,126,60,24],t.t)
B.cd=s([102,102,102,102,102,0,102,0],t.t)
B.cn=s([127,219,219,123,27,27,27,0],t.t)
B.co=s([62,99,56,108,108,56,204,120],t.t)
B.bN=s([0,0,0,0,126,126,126,0],t.t)
B.bQ=s([24,60,126,24,126,60,24,255],t.t)
B.N=s([24,60,126,24,24,24,24,0],t.t)
B.db=s([24,24,24,24,126,60,24,0],t.t)
B.d4=s([0,24,12,254,12,24,0,0],t.t)
B.aq=s([0,48,96,254,96,48,0,0],t.t)
B.bV=s([0,0,192,192,192,254,0,0],t.t)
B.bs=s([0,36,102,255,102,36,0,0],t.t)
B.a6=s([0,24,60,126,255,255,0,0],t.t)
B.bR=s([0,255,255,126,60,24,0,0],t.t)
B.aX=s([0,0,0,0,0,0,0,0],t.t)
B.bA=s([48,120,120,48,48,0,48,0],t.t)
B.V=s([108,108,108,0,0,0,0,0],t.t)
B.ak=s([108,108,254,108,254,108,108,0],t.t)
B.bZ=s([48,124,192,120,12,248,48,0],t.t)
B.M=s([0,198,204,24,48,102,198,0],t.t)
B.cA=s([56,108,56,118,220,204,118,0],t.t)
B.aj=s([96,96,192,0,0,0,0,0],t.t)
B.R=s([24,48,96,96,96,48,24,0],t.t)
B.bw=s([96,48,24,24,24,48,96,0],t.t)
B.cr=s([0,102,60,255,60,102,0,0],t.t)
B.dK=s([0,48,48,252,48,48,0,0],t.t)
B.c0=s([0,0,0,0,0,48,48,96],t.t)
B.br=s([0,0,0,252,0,0,0,0],t.t)
B.cf=s([0,0,0,0,0,48,48,0],t.t)
B.a1=s([6,12,24,48,96,192,128,0],t.t)
B.b4=s([124,198,206,222,246,230,124,0],t.t)
B.ci=s([48,112,48,48,48,48,252,0],t.t)
B.bX=s([120,204,12,56,96,204,252,0],t.t)
B.dF=s([120,204,12,56,12,204,120,0],t.t)
B.by=s([28,60,108,204,254,12,30,0],t.t)
B.d5=s([252,192,248,12,12,204,120,0],t.t)
B.dm=s([56,96,192,248,204,204,120,0],t.t)
B.bY=s([252,204,12,24,48,48,48,0],t.t)
B.cu=s([120,204,204,120,204,204,120,0],t.t)
B.bb=s([120,204,204,124,12,24,112,0],t.t)
B.cZ=s([0,48,48,0,0,48,48,0],t.t)
B.aO=s([0,48,48,0,0,48,48,96],t.t)
B.bx=s([24,48,96,192,96,48,24,0],t.t)
B.bm=s([0,0,252,0,0,252,0,0],t.t)
B.ay=s([96,48,24,12,24,48,96,0],t.t)
B.ao=s([120,204,12,24,48,0,48,0],t.t)
B.di=s([124,198,222,222,222,192,120,0],t.t)
B.c9=s([48,120,204,204,252,204,204,0],t.t)
B.aI=s([252,102,102,124,102,102,252,0],t.t)
B.aa=s([60,102,192,192,192,102,60,0],t.t)
B.a2=s([248,108,102,102,102,108,248,0],t.t)
B.ag=s([254,98,104,120,104,98,254,0],t.t)
B.cl=s([254,98,104,120,104,96,240,0],t.t)
B.am=s([60,102,192,192,206,102,62,0],t.t)
B.ap=s([204,204,204,252,204,204,204,0],t.t)
B.cJ=s([120,48,48,48,48,48,120,0],t.t)
B.bL=s([30,12,12,12,204,204,120,0],t.t)
B.bD=s([230,102,108,120,108,102,230,0],t.t)
B.bC=s([240,96,96,96,98,102,254,0],t.t)
B.aJ=s([198,238,254,254,214,198,198,0],t.t)
B.U=s([198,230,246,222,206,198,198,0],t.t)
B.cT=s([56,108,198,198,198,108,56,0],t.t)
B.bh=s([252,102,102,124,96,96,240,0],t.t)
B.cD=s([120,204,204,204,220,120,28,0],t.t)
B.L=s([252,102,102,124,108,102,230,0],t.t)
B.ad=s([120,204,224,112,28,204,120,0],t.t)
B.dw=s([252,180,48,48,48,48,120,0],t.t)
B.aG=s([204,204,204,204,204,204,252,0],t.t)
B.Z=s([204,204,204,204,204,120,48,0],t.t)
B.cM=s([198,198,198,214,254,238,198,0],t.t)
B.cG=s([198,198,108,56,56,108,198,0],t.t)
B.a0=s([204,204,204,120,48,48,120,0],t.t)
B.P=s([254,198,140,24,50,102,254,0],t.t)
B.bt=s([120,96,96,96,96,96,120,0],t.t)
B.cy=s([192,96,48,24,12,6,2,0],t.t)
B.bv=s([120,24,24,24,24,24,120,0],t.t)
B.dl=s([16,56,108,198,0,0,0,0],t.t)
B.K=s([0,0,0,0,0,0,0,255],t.t)
B.aH=s([48,48,24,0,0,0,0,0],t.t)
B.dc=s([0,0,120,12,124,204,118,0],t.t)
B.cc=s([224,96,96,124,102,102,220,0],t.t)
B.cF=s([0,0,120,204,192,204,120,0],t.t)
B.b2=s([28,12,12,124,204,204,118,0],t.t)
B.dp=s([0,0,120,204,252,192,120,0],t.t)
B.aM=s([56,108,96,240,96,96,240,0],t.t)
B.cC=s([0,0,118,204,204,124,12,248],t.t)
B.ax=s([224,96,108,118,102,102,230,0],t.t)
B.cs=s([48,0,112,48,48,48,120,0],t.t)
B.bG=s([12,0,12,12,12,204,204,120],t.t)
B.b9=s([224,96,102,108,120,108,230,0],t.t)
B.bI=s([112,48,48,48,48,48,120,0],t.t)
B.bq=s([0,0,204,254,254,214,198,0],t.t)
B.bJ=s([0,0,248,204,204,204,204,0],t.t)
B.bc=s([0,0,120,204,204,204,120,0],t.t)
B.dt=s([0,0,220,102,102,124,96,240],t.t)
B.dq=s([0,0,118,204,204,124,12,30],t.t)
B.bn=s([0,0,220,118,102,96,240,0],t.t)
B.cW=s([0,0,124,192,120,12,248,0],t.t)
B.cP=s([16,48,124,48,48,52,24,0],t.t)
B.c6=s([0,0,204,204,204,204,118,0],t.t)
B.b0=s([0,0,204,204,204,120,48,0],t.t)
B.bg=s([0,0,198,214,254,254,108,0],t.t)
B.bE=s([0,0,198,108,56,108,198,0],t.t)
B.dz=s([0,0,204,204,204,124,12,248],t.t)
B.da=s([0,0,252,152,48,100,252,0],t.t)
B.b6=s([28,48,48,224,48,48,28,0],t.t)
B.cV=s([24,24,24,0,24,24,24,0],t.t)
B.aB=s([224,48,48,28,48,48,224,0],t.t)
B.dJ=s([118,220,0,0,0,0,0,0],t.t)
B.b_=s([0,16,56,108,198,198,254,0],t.t)
B.as=s([120,204,192,204,120,24,12,120],t.t)
B.d8=s([0,204,0,204,204,204,126,0],t.t)
B.dy=s([28,0,120,204,252,192,120,0],t.t)
B.c_=s([126,195,60,6,62,102,63,0],t.t)
B.af=s([204,0,120,12,124,204,126,0],t.t)
B.b3=s([224,0,120,12,124,204,126,0],t.t)
B.a5=s([48,48,120,12,124,204,126,0],t.t)
B.bj=s([0,0,120,192,192,120,12,56],t.t)
B.dh=s([126,195,60,102,126,96,60,0],t.t)
B.aK=s([204,0,120,204,252,192,120,0],t.t)
B.cX=s([224,0,120,204,252,192,120,0],t.t)
B.d9=s([204,0,112,48,48,48,120,0],t.t)
B.cN=s([124,198,56,24,24,24,60,0],t.t)
B.aW=s([224,0,112,48,48,48,120,0],t.t)
B.dE=s([198,56,108,198,254,198,198,0],t.t)
B.cU=s([48,48,0,120,204,252,204,0],t.t)
B.bB=s([28,0,252,96,120,96,252,0],t.t)
B.dx=s([0,0,127,12,127,204,127,0],t.t)
B.aP=s([62,108,204,254,204,204,206,0],t.t)
B.dr=s([120,204,0,120,204,204,120,0],t.t)
B.ab=s([0,204,0,120,204,204,120,0],t.t)
B.dG=s([0,224,0,120,204,204,120,0],t.t)
B.aN=s([120,204,0,204,204,204,126,0],t.t)
B.cQ=s([0,224,0,204,204,204,126,0],t.t)
B.av=s([0,204,0,204,204,124,12,248],t.t)
B.ah=s([195,24,60,102,102,60,24,0],t.t)
B.d2=s([204,0,204,204,204,204,120,0],t.t)
B.W=s([24,24,126,192,192,126,24,24],t.t)
B.aE=s([56,108,100,240,96,230,252,0],t.t)
B.aY=s([204,204,120,252,48,252,48,48],t.t)
B.dd=s([248,204,204,250,198,207,198,199],t.t)
B.bM=s([14,27,24,60,24,24,216,112],t.t)
B.aA=s([28,0,120,12,124,204,126,0],t.t)
B.cb=s([56,0,112,48,48,48,120,0],t.t)
B.aD=s([0,28,0,120,204,204,120,0],t.t)
B.cv=s([0,28,0,204,204,204,126,0],t.t)
B.aT=s([0,248,0,248,204,204,204,0],t.t)
B.cL=s([252,0,204,236,252,220,204,0],t.t)
B.ac=s([60,108,108,62,0,126,0,0],t.t)
B.c8=s([56,108,108,56,0,124,0,0],t.t)
B.d3=s([48,0,48,96,192,204,120,0],t.t)
B.aV=s([0,0,0,252,192,192,0,0],t.t)
B.aC=s([0,0,0,252,12,12,0,0],t.t)
B.cY=s([195,198,204,222,51,102,204,15],t.t)
B.au=s([195,198,204,219,55,111,207,3],t.t)
B.bP=s([24,24,0,24,24,24,24,0],t.t)
B.bO=s([0,51,102,204,102,51,0,0],t.t)
B.b8=s([0,204,102,51,102,204,0,0],t.t)
B.cx=s([34,136,34,136,34,136,34,136],t.t)
B.ds=s([85,170,85,170,85,170,85,170],t.t)
B.bH=s([219,119,219,238,219,119,219,238],t.t)
B.aZ=s([24,24,24,24,24,24,24,24],t.t)
B.aU=s([24,24,24,24,248,24,24,24],t.t)
B.bW=s([24,24,248,24,248,24,24,24],t.t)
B.dI=s([54,54,54,54,246,54,54,54],t.t)
B.cj=s([0,0,0,0,254,54,54,54],t.t)
B.aQ=s([0,0,248,24,248,24,24,24],t.t)
B.a9=s([54,54,246,6,246,54,54,54],t.t)
B.cp=s([54,54,54,54,54,54,54,54],t.t)
B.c7=s([0,0,254,6,246,54,54,54],t.t)
B.ct=s([54,54,246,6,254,0,0,0],t.t)
B.an=s([54,54,54,54,254,0,0,0],t.t)
B.a_=s([24,24,248,24,248,0,0,0],t.t)
B.a4=s([0,0,0,0,248,24,24,24],t.t)
B.Y=s([24,24,24,24,31,0,0,0],t.t)
B.bU=s([24,24,24,24,255,0,0,0],t.t)
B.bl=s([0,0,0,0,255,24,24,24],t.t)
B.d1=s([24,24,24,24,31,24,24,24],t.t)
B.bS=s([0,0,0,0,255,0,0,0],t.t)
B.cq=s([24,24,24,24,255,24,24,24],t.t)
B.cB=s([24,24,31,24,31,24,24,24],t.t)
B.ba=s([54,54,54,54,55,54,54,54],t.t)
B.dn=s([54,54,55,48,63,0,0,0],t.t)
B.dg=s([0,0,63,48,55,54,54,54],t.t)
B.bF=s([54,54,247,0,255,0,0,0],t.t)
B.bu=s([0,0,255,0,247,54,54,54],t.t)
B.aS=s([54,54,55,48,55,54,54,54],t.t)
B.aR=s([0,0,255,0,255,0,0,0],t.t)
B.dA=s([54,54,247,0,247,54,54,54],t.t)
B.cH=s([24,24,255,0,255,0,0,0],t.t)
B.I=s([54,54,54,54,255,0,0,0],t.t)
B.du=s([0,0,255,0,255,24,24,24],t.t)
B.c1=s([0,0,0,0,255,54,54,54],t.t)
B.ck=s([54,54,54,54,63,0,0,0],t.t)
B.bp=s([24,24,31,24,31,0,0,0],t.t)
B.ce=s([0,0,31,24,31,24,24,24],t.t)
B.cE=s([0,0,0,0,63,54,54,54],t.t)
B.cK=s([54,54,54,54,255,54,54,54],t.t)
B.bK=s([24,24,255,24,255,24,24,24],t.t)
B.de=s([24,24,24,24,248,0,0,0],t.t)
B.b5=s([0,0,0,0,31,24,24,24],t.t)
B.c2=s([255,255,255,255,255,255,255,255],t.t)
B.c5=s([0,0,0,0,255,255,255,255],t.t)
B.bf=s([240,240,240,240,240,240,240,240],t.t)
B.cm=s([15,15,15,15,15,15,15,15],t.t)
B.d0=s([255,255,255,255,0,0,0,0],t.t)
B.dH=s([0,0,118,220,200,220,118,0],t.t)
B.dj=s([0,120,204,248,204,248,192,192],t.t)
B.al=s([0,252,204,192,192,192,192,0],t.t)
B.c4=s([0,254,108,108,108,108,108,0],t.t)
B.df=s([252,204,96,48,96,204,252,0],t.t)
B.bi=s([0,0,126,216,216,216,112,0],t.t)
B.bo=s([0,102,102,102,102,124,96,192],t.t)
B.cz=s([0,118,220,24,24,24,24,0],t.t)
B.ae=s([252,48,120,204,204,120,48,252],t.t)
B.aF=s([56,108,198,254,198,108,56,0],t.t)
B.ai=s([56,108,198,198,108,108,238,0],t.t)
B.J=s([28,48,24,124,204,204,120,0],t.t)
B.dv=s([0,0,126,219,219,126,0,0],t.t)
B.bk=s([6,12,126,219,219,126,96,192],t.t)
B.a7=s([56,96,192,248,192,96,56,0],t.t)
B.cg=s([120,204,204,204,204,204,204,0],t.t)
B.cI=s([0,252,0,252,0,252,0,0],t.t)
B.a3=s([48,48,252,48,48,0,252,0],t.t)
B.b7=s([96,48,24,48,96,0,252,0],t.t)
B.cS=s([24,48,96,48,24,0,252,0],t.t)
B.be=s([14,27,27,24,24,24,24,24],t.t)
B.d7=s([24,24,24,24,24,216,216,112],t.t)
B.ca=s([48,48,0,252,0,48,48,0],t.t)
B.O=s([0,118,220,0,118,220,0,0],t.t)
B.cw=s([56,108,108,56,0,0,0,0],t.t)
B.Q=s([0,0,0,24,24,0,0,0],t.t)
B.dk=s([0,0,0,0,24,0,0,0],t.t)
B.T=s([15,12,12,12,236,108,60,28],t.t)
B.bT=s([120,108,108,108,108,0,0,0],t.t)
B.ar=s([112,24,48,96,120,0,0,0],t.t)
B.d_=s([0,0,60,60,60,60,0,0],t.t)
B.dL=new A.bt(["\u263a",B.d6,"\u263b",B.a8,"\u2665",B.dD,"\u2666",B.c3,"\u2663",B.b1,"\u2660",B.bd,"\u2022",B.aw,"\u25d8",B.az,"\u25cb",B.aL,"\u25d9",B.cR,"\u2642",B.dC,"\u2640",B.dB,"\u266a",B.cO,"\u266b",B.S,"\u263c",B.X,"\u25ba",B.at,"\u25c4",B.bz,"\u2195",B.ch,"\u203c",B.cd,"\xb6",B.cn,"\xa7",B.co,"\u25ac",B.bN,"\u21a8",B.bQ,"\u2191",B.N,"\u2193",B.db,"\u2192",B.d4,"\u2190",B.aq,"\u221f",B.bV,"\u2194",B.bs,"\u25b2",B.a6,"\u25bc",B.bR," ",B.aX,"!",B.bA,'"',B.V,"#",B.ak,"$",B.bZ,"%",B.M,"&",B.cA,"'",B.aj,"(",B.R,")",B.bw,"*",B.cr,"+",B.dK,",",B.c0,"-",B.br,".",B.cf,"/",B.a1,"0",B.b4,"1",B.ci,"2",B.bX,"3",B.dF,"4",B.by,"5",B.d5,"6",B.dm,"7",B.bY,"8",B.cu,"9",B.bb,":",B.cZ,";",B.aO,"<",B.bx,"=",B.bm,">",B.ay,"?",B.ao,"@",B.di,"A",B.c9,"B",B.aI,"C",B.aa,"D",B.a2,"E",B.ag,"F",B.cl,"G",B.am,"H",B.ap,"I",B.cJ,"J",B.bL,"K",B.bD,"L",B.bC,"M",B.aJ,"N",B.U,"O",B.cT,"P",B.bh,"Q",B.cD,"R",B.L,"S",B.ad,"T",B.dw,"U",B.aG,"V",B.Z,"W",B.cM,"X",B.cG,"Y",B.a0,"Z",B.P,"[",B.bt,"\\",B.cy,"]",B.bv,"^",B.dl,"_",B.K,"`",B.aH,"a",B.dc,"b",B.cc,"c",B.cF,"d",B.b2,"e",B.dp,"f",B.aM,"g",B.cC,"h",B.ax,"i",B.cs,"j",B.bG,"k",B.b9,"l",B.bI,"m",B.bq,"n",B.bJ,"o",B.bc,"p",B.dt,"q",B.dq,"r",B.bn,"s",B.cW,"t",B.cP,"u",B.c6,"v",B.b0,"w",B.bg,"x",B.bE,"y",B.dz,"z",B.da,"{",B.b6,"|",B.cV,"}",B.aB,"~",B.dJ,"\u2302",B.b_,"\xc7",B.as,"\xfc",B.d8,"\xe9",B.dy,"\xe2",B.c_,"\xe4",B.af,"\xe0",B.b3,"\xe5",B.a5,"\xe7",B.bj,"\xea",B.dh,"\xeb",B.aK,"\xe8",B.cX,"\xef",B.d9,"\xee",B.cN,"\xec",B.aW,"\xc4",B.dE,"\xc5",B.cU,"\xc9",B.bB,"\xe6",B.dx,"\xc6",B.aP,"\xf4",B.dr,"\xf6",B.ab,"\xf2",B.dG,"\xfb",B.aN,"\xf9",B.cQ,"\xff",B.av,"\xd6",B.ah,"\xdc",B.d2,"\xa2",B.W,"\xa3",B.aE,"\xa5",B.aY,"\u20a7",B.dd,"\u0192",B.bM,"\xe1",B.aA,"\xed",B.cb,"\xf3",B.aD,"\xfa",B.cv,"\xf1",B.aT,"\xd1",B.cL,"\xaa",B.ac,"\xba",B.c8,"\xbf",B.d3,"\u2310",B.aV,"\xac",B.aC,"\xbd",B.cY,"\xbc",B.au,"\xa1",B.bP,"\xab",B.bO,"\xbb",B.b8,"\u2591",B.cx,"\u2592",B.ds,"\u2593",B.bH,"\u2502",B.aZ,"\u2524",B.aU,"\u2561",B.bW,"\u2562",B.dI,"\u2556",B.cj,"\u2555",B.aQ,"\u2563",B.a9,"\u2551",B.cp,"\u2557",B.c7,"\u255d",B.ct,"\u255c",B.an,"\u255b",B.a_,"\u2510",B.a4,"\u2514",B.Y,"\u2534",B.bU,"\u252c",B.bl,"\u251c",B.d1,"\u2500",B.bS,"\u253c",B.cq,"\u255e",B.cB,"\u255f",B.ba,"\u255a",B.dn,"\u2554",B.dg,"\u2569",B.bF,"\u2566",B.bu,"\u2560",B.aS,"\u2550",B.aR,"\u256c",B.dA,"\u2567",B.cH,"\u2568",B.I,"\u2564",B.du,"\u2565",B.c1,"\u2559",B.ck,"\u2558",B.bp,"\u2552",B.ce,"\u2553",B.cE,"\u256b",B.cK,"\u256a",B.bK,"\u2518",B.de,"\u250c",B.b5,"\u2588",B.c2,"\u2584",B.c5,"\u258c",B.bf,"\u2590",B.cm,"\u2580",B.d0,"\u03b1",B.dH,"\xdf",B.dj,"\u0393",B.al,"\u03c0",B.c4,"\u03a3",B.df,"\u03c3",B.bi,"\xb5",B.bo,"\u03c4",B.cz,"\u03a6",B.ae,"\u0398",B.aF,"\u03a9",B.ai,"\u03b4",B.J,"\u221e",B.dv,"\u03c6",B.bk,"\u03b5",B.a7,"\u2229",B.cg,"\u2261",B.cI,"\xb1",B.a3,"\u2265",B.b7,"\u2264",B.cS,"\u2320",B.be,"\u2321",B.d7,"\xf7",B.ca,"\u2248",B.O,"\xb0",B.cw,"\u2219",B.Q,"\xb7",B.dk,"\u221a",B.T,"\u207f",B.bT,"\xb2",B.ar,"\u25a0",B.d_],A.dt("bt<B,h<b>>"))
B.dM=new A.ch(0,"replace")
B.d=new A.X(0,"o")
B.i=new A.X(1,"x")
B.c=new A.X(2,"empty")
B.e=new A.an(0,"ready")
B.k=new A.an(1,"awaitingKey")
B.dN=new A.an(2,"awaitingString")
B.dO=new A.an(3,"awaitingMouseClick")
B.dP=A.D("iH")
B.dQ=A.D("iI")
B.dR=A.D("fy")
B.dS=A.D("fz")
B.dT=A.D("fB")
B.dU=A.D("fC")
B.dV=A.D("fD")
B.dW=A.D("d")
B.dX=A.D("fV")
B.dY=A.D("cN")
B.dZ=A.D("fW")
B.e_=A.D("fX")})();(function staticFields(){$.d6=null
$.w=A.t([],t.f)
$.en=null
$.ef=null
$.ee=null
$.f_=null
$.eU=null
$.f2=null
$.ds=null
$.dz=null
$.e6=null
$.b6=A.t([],A.dt("n<h<d>?>"))
$.ar=null
$.bh=null
$.bi=null
$.e_=!1
$.e=B.b})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"iK","f6",()=>A.dv("_$dart_dartClosure"))
s($,"iJ","dD",()=>A.dv("_$dart_dartClosure_dartJSInterop"))
s($,"j6","fk",()=>B.b.b1(new A.dB()))
s($,"j4","fj",()=>A.t([new J.bw()],A.dt("n<aT>")))
s($,"iT","f9",()=>A.J(A.cM({
toString:function(){return"$receiver$"}})))
s($,"iU","fa",()=>A.J(A.cM({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"iV","fb",()=>A.J(A.cM(null)))
s($,"iW","fc",()=>A.J(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"iZ","ff",()=>A.J(A.cM(void 0)))
s($,"j_","fg",()=>A.J(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"iY","fe",()=>A.J(A.et(null)))
s($,"iX","fd",()=>A.J(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"j1","fi",()=>A.J(A.et(void 0)))
s($,"j0","fh",()=>A.J(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"j2","ea",()=>A.fY())
s($,"iM","dE",()=>$.fk())
s($,"j3","dF",()=>A.e9(B.dW))
s($,"iS","f8",()=>A.dM(8,0,t.S))
s($,"iR","f7",()=>A.dM(8,255,t.S))
s($,"j7","fl",()=>B.z)
s($,"j8","L",()=>{var r=A.hD(A.it(A.iD(),"document"),"getElementById","four")
r.toString
r=A.fS("#1f1f1f",31,r,15)
r.M()
return r})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.ai,SharedArrayBuffer:A.ai,ArrayBufferView:A.aQ,DataView:A.bB,Float32Array:A.bC,Float64Array:A.bD,Int16Array:A.bE,Int32Array:A.bF,Int8Array:A.bG,Uint16Array:A.bH,Uint32Array:A.bI,Uint8ClampedArray:A.aR,CanvasPixelArray:A.aR,Uint8Array:A.bJ})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.aj.$nativeSuperclassTag="ArrayBufferView"
A.b2.$nativeSuperclassTag="ArrayBufferView"
A.b3.$nativeSuperclassTag="ArrayBufferView"
A.aO.$nativeSuperclassTag="ArrayBufferView"
A.b4.$nativeSuperclassTag="ArrayBufferView"
A.b5.$nativeSuperclassTag="ArrayBufferView"
A.aP.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.c7
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=four.js.map
