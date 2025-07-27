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
if(a[b]!==s){A.iv(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.e1(b)
return new s(c,this)}:function(){if(s===null)s=A.e1(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.e1(a).prototype
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
e6(a,b,c,d){return{i:a,p:b,e:c,x:d}},
e3(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.e4==null){A.il()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.eq("Return interceptor for "+A.n(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.d5
if(o==null)o=$.d5=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.iq(a)
if(p!=null)return p
if(typeof a=="function")return B.J
s=Object.getPrototypeOf(a)
if(s==null)return B.u
if(s===Object.prototype)return B.u
if(typeof q=="function"){o=$.d5
if(o==null)o=$.d5=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.n,enumerable:false,writable:true,configurable:true})
return B.n}return B.n},
ei(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
fz(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.ei(r))break;++b}return b},
fA(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.b(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.ei(q))break}return b},
a8(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aG.prototype
return J.bx.prototype}if(typeof a=="string")return J.X.prototype
if(a==null)return J.aH.prototype
if(typeof a=="boolean")return J.bw.prototype
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.Q.prototype
if(typeof a=="symbol")return J.aK.prototype
if(typeof a=="bigint")return J.aI.prototype
return a}if(a instanceof A.e)return a
return J.e3(a)},
eV(a){if(typeof a=="string")return J.X.prototype
if(a==null)return a
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.Q.prototype
if(typeof a=="symbol")return J.aK.prototype
if(typeof a=="bigint")return J.aI.prototype
return a}if(a instanceof A.e)return a
return J.e3(a)},
id(a){if(a==null)return a
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.Q.prototype
if(typeof a=="symbol")return J.aK.prototype
if(typeof a=="bigint")return J.aI.prototype
return a}if(a instanceof A.e)return a
return J.e3(a)},
ie(a){if(typeof a=="number")return J.af.prototype
if(a==null)return a
if(!(a instanceof A.e))return J.a0.prototype
return a},
ig(a){if(typeof a=="string")return J.X.prototype
if(a==null)return a
if(!(a instanceof A.e))return J.a0.prototype
return a},
ac(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.a8(a).C(a,b)},
H(a){return J.a8(a).gj(a)},
fg(a){return J.id(a).gu(a)},
e9(a){return J.eV(a).gn(a)},
fh(a){return J.a8(a).gq(a)},
ea(a){return J.ie(a).bQ(a)},
bm(a){return J.a8(a).h(a)},
fi(a){return J.ig(a).bR(a)},
bv:function bv(){},
bw:function bw(){},
aH:function aH(){},
aJ:function aJ(){},
R:function R(){},
bL:function bL(){},
a0:function a0(){},
Q:function Q(){},
aI:function aI(){},
aK:function aK(){},
o:function o(a){this.$ti=a},
cd:function cd(a){this.$ti=a},
bn:function bn(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
af:function af(){},
aG:function aG(){},
bx:function bx(){},
X:function X(){}},A={dH:function dH(){},
fB(a){return new A.aM("Field '"+a+"' has not been initialized.")},
S(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
dO(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
e0(a,b,c){return a},
e5(a){var s,r
for(s=$.w.length,r=0;r<s;++r)if(a===$.w[r])return!0
return!1},
eh(){return new A.a_("No element")},
aM:function aM(a){this.a=a},
dy:function dy(){},
cs:function cs(){},
aC:function aC(){},
aN:function aN(){},
ai:function ai(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aD:function aD(a){this.$ti=a},
bs:function bs(){},
aF:function aF(){},
f1(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
iT(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
n(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.bm(a)
return s},
am(a){var s,r=$.ek
if(r==null)r=$.ek=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
cm(a){var s,r,q,p
if(a instanceof A.e)return A.v(A.bl(a),null)
s=J.a8(a)
if(s===B.H||s===B.K||t.A.b(a)){r=B.o(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.v(A.bl(a),null)},
el(a){if(a==null||typeof a=="number"||A.dW(a))return J.bm(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.W)return a.h(0)
if(a instanceof A.ar)return a.aR(!0)
return"Instance of '"+A.cm(a)+"'"},
fF(a){var s=a.$thrownJsError
if(s==null)return null
return A.a9(s)},
fG(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.r(a,s)
a.$thrownJsError=s
s.stack=""}},
b(a,b){if(a==null)J.e9(a)
throw A.d(A.eU(a,b))},
eU(a,b){var s,r="index",q=null
if(!A.eJ(b))return new A.D(!0,b,r,q)
s=J.e9(a)
if(b<0||b>=s)return A.dF(b,s,a,q,r)
return new A.an(q,q,!0,b,r,"Value not in range")},
dZ(a){return new A.D(!0,a,null,null)},
d(a){return A.r(a,new Error())},
r(a,b){var s
if(a==null)a=new A.J()
b.dartException=a
s=A.iw
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
iw(){return J.bm(this.dartException)},
ab(a,b){throw A.r(a,b==null?new Error():b)},
c7(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.ab(A.hx(a,b,c),s)},
hx(a,b,c){var s,r,q,p,o,n,m,l,k
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
dz(a){throw A.d(A.aA(a))},
K(a){var s,r,q,p,o,n
a=A.is(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.a([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.cK(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
cL(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
ep(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
dI(a,b){var s=b==null,r=s?null:b.method
return new A.by(a,r,s?null:b.receiver)},
ay(a){if(a==null)return new A.cj(a)
if(a instanceof A.aE)return A.V(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.V(a,a.dartException)
return A.i1(a)},
V(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
i1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.a.bv(r,16)&8191)===10)switch(q){case 438:return A.V(a,A.dI(A.n(s)+" (Error "+q+")",null))
case 445:case 5007:A.n(s)
return A.V(a,new A.aT())}}if(a instanceof TypeError){p=$.f4()
o=$.f5()
n=$.f6()
m=$.f7()
l=$.fa()
k=$.fb()
j=$.f9()
$.f8()
i=$.fd()
h=$.fc()
g=p.B(s)
if(g!=null)return A.V(a,A.dI(s,g))
else{g=o.B(s)
if(g!=null){g.method="call"
return A.V(a,A.dI(s,g))}else if(n.B(s)!=null||m.B(s)!=null||l.B(s)!=null||k.B(s)!=null||j.B(s)!=null||m.B(s)!=null||i.B(s)!=null||h.B(s)!=null)return A.V(a,new A.aT())}return A.V(a,new A.bQ(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.aV()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.V(a,new A.D(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.aV()
return a},
a9(a){var s
if(a instanceof A.aE)return a.b
if(a==null)return new A.b8(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.b8(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
e7(a){if(a==null)return J.H(a)
if(typeof a=="object")return A.am(a)
return J.H(a)},
i8(a){if(typeof a=="number")return B.I.gj(a)
if(a instanceof A.c3)return A.am(a)
if(a instanceof A.ar)return a.gj(a)
return A.e7(a)},
ic(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.a0(0,a[s],a[r])}return b},
hG(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(new A.cT("Unsupported number of arguments for wrapped closure"))},
c5(a,b){var s=a.$identity
if(!!s)return s
s=A.i9(a,b)
a.$identity=s
return s},
i9(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.hG)},
fp(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.ct().constructor.prototype):Object.create(new A.az(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.ef(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.fl(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.ef(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
fl(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.fj)}throw A.d("Error in functionType of tearoff")},
fm(a,b,c,d){var s=A.ee
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
ef(a,b,c,d){if(c)return A.fo(a,b,d)
return A.fm(b.length,d,a,b)},
fn(a,b,c,d){var s=A.ee,r=A.fk
switch(b?-1:a){case 0:throw A.d(new A.bM("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
fo(a,b,c){var s,r
if($.ec==null)$.ec=A.eb("interceptor")
if($.ed==null)$.ed=A.eb("receiver")
s=b.length
r=A.fn(s,c,a,b)
return r},
e1(a){return A.fp(a)},
fj(a,b){return A.bf(v.typeUniverse,A.bl(a.a),b)},
ee(a){return a.a},
fk(a){return a.b},
eb(a){var s,r,q,p=new A.az("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.d(A.ad("Field name "+a+" not found.",null))},
ih(a){return v.getIsolateTag(a)},
it(){return v.G},
iq(a){var s,r,q,p,o,n=$.eX.$1(a),m=$.dr[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.dw[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.eQ.$2(a,n)
if(q!=null){m=$.dr[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.dw[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.dx(s)
$.dr[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.dw[n]=s
return s}if(p==="-"){o=A.dx(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.eZ(a,s)
if(p==="*")throw A.d(A.eq(n))
if(v.leafTags[n]===true){o=A.dx(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.eZ(a,s)},
eZ(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.e6(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
dx(a){return J.e6(a,!1,null,!!a.$iu)},
ir(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.dx(s)
else return J.e6(s,c,null,null)},
il(){if(!0===$.e4)return
$.e4=!0
A.im()},
im(){var s,r,q,p,o,n,m,l
$.dr=Object.create(null)
$.dw=Object.create(null)
A.ik()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.f_.$1(o)
if(n!=null){m=A.ir(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
ik(){var s,r,q,p,o,n,m=B.y()
m=A.av(B.z,A.av(B.A,A.av(B.p,A.av(B.p,A.av(B.B,A.av(B.C,A.av(B.D(B.o),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.eX=new A.dt(p)
$.eQ=new A.du(o)
$.f_=new A.dv(n)},
av(a,b){return a(b)||b},
ia(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
iu(a,b,c){var s=a.indexOf(b,c)
return s>=0},
is(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
B:function B(a,b){this.a=a
this.b=b},
br:function br(){},
bt:function bt(a,b){this.a=a
this.$ti=b},
cK:function cK(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aT:function aT(){},
by:function by(a,b,c){this.a=a
this.b=b
this.c=c},
bQ:function bQ(a){this.a=a},
cj:function cj(a){this.a=a},
aE:function aE(a,b){this.a=a
this.b=b},
b8:function b8(a){this.a=a
this.b=null},
W:function W(){},
c8:function c8(){},
c9:function c9(){},
cy:function cy(){},
ct:function ct(){},
az:function az(a,b){this.a=a
this.b=b},
bM:function bM(a){this.a=a},
Y:function Y(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ce:function ce(a,b){this.a=a
this.b=b
this.c=null},
ah:function ah(a,b){this.a=a
this.$ti=b},
bz:function bz(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
aL:function aL(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dt:function dt(a){this.a=a},
du:function du(a){this.a=a},
dv:function dv(a){this.a=a},
ar:function ar(){},
c0:function c0(){},
a4(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.eU(b,a))},
bA:function bA(){},
aR:function aR(){},
bB:function bB(){},
ak:function ak(){},
aP:function aP(){},
aQ:function aQ(){},
bC:function bC(){},
bD:function bD(){},
bE:function bE(){},
bF:function bF(){},
bG:function bG(){},
bH:function bH(){},
bI:function bI(){},
aS:function aS(){},
bJ:function bJ(){},
b2:function b2(){},
b3:function b3(){},
b4:function b4(){},
b5:function b5(){},
dL(a,b){var s=b.c
return s==null?b.c=A.bd(a,"I",[b.x]):s},
em(a){var s=a.w
if(s===6||s===7)return A.em(a.x)
return s===11||s===12},
fK(a){return a.as},
e2(a){return A.dd(v.typeUniverse,a,!1)},
a6(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.a6(a1,s,a3,a4)
if(r===s)return a2
return A.eA(a1,r,!0)
case 7:s=a2.x
r=A.a6(a1,s,a3,a4)
if(r===s)return a2
return A.ez(a1,r,!0)
case 8:q=a2.y
p=A.au(a1,q,a3,a4)
if(p===q)return a2
return A.bd(a1,a2.x,p)
case 9:o=a2.x
n=A.a6(a1,o,a3,a4)
m=a2.y
l=A.au(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.dS(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.au(a1,j,a3,a4)
if(i===j)return a2
return A.eB(a1,k,i)
case 11:h=a2.x
g=A.a6(a1,h,a3,a4)
f=a2.y
e=A.hZ(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.ey(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.au(a1,d,a3,a4)
o=a2.x
n=A.a6(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.dT(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.d(A.bp("Attempted to substitute unexpected RTI kind "+a0))}},
au(a,b,c,d){var s,r,q,p,o=b.length,n=A.de(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.a6(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
i_(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.de(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.a6(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
hZ(a,b,c,d){var s,r=b.a,q=A.au(a,r,c,d),p=b.b,o=A.au(a,p,c,d),n=b.c,m=A.i_(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.bZ()
s.a=q
s.b=o
s.c=m
return s},
a(a,b){a[v.arrayRti]=b
return a},
eS(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.ij(s)
return a.$S()}return null},
io(a,b){var s
if(A.em(b))if(a instanceof A.W){s=A.eS(a)
if(s!=null)return s}return A.bl(a)},
bl(a){if(a instanceof A.e)return A.a5(a)
if(Array.isArray(a))return A.dU(a)
return A.dV(J.a8(a))},
dU(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
a5(a){var s=a.$ti
return s!=null?s:A.dV(a)},
dV(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.hE(a,s)},
hE(a,b){var s=a instanceof A.W?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.he(v.typeUniverse,s.name)
b.$ccache=r
return r},
ij(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.dd(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
eW(a){return A.a7(A.a5(a))},
dY(a){var s
if(a instanceof A.ar)return A.ib(a.$r,a.aK())
s=a instanceof A.W?A.eS(a):null
if(s!=null)return s
if(t.R.b(a))return J.fh(a).a
if(Array.isArray(a))return A.dU(a)
return A.bl(a)},
a7(a){var s=a.r
return s==null?a.r=new A.c3(a):s},
ib(a,b){var s,r,q=b,p=q.length
if(p===0)return t.F
if(0>=p)return A.b(q,0)
s=A.bf(v.typeUniverse,A.dY(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.b(q,r)
s=A.eC(v.typeUniverse,s,A.dY(q[r]))}return A.bf(v.typeUniverse,s,a)},
C(a){return A.a7(A.dd(v.typeUniverse,a,!1))},
hD(a){var s,r,q,p,o=this
if(o===t.K)return A.L(o,a,A.hL)
if(A.aa(o))return A.L(o,a,A.hP)
s=o.w
if(s===6)return A.L(o,a,A.hB)
if(s===1)return A.L(o,a,A.eK)
if(s===7)return A.L(o,a,A.hH)
if(o===t.S)r=A.eJ
else if(o===t.i||o===t.H)r=A.hK
else if(o===t.N)r=A.hN
else r=o===t.y?A.dW:null
if(r!=null)return A.L(o,a,r)
if(s===8){q=o.x
if(o.y.every(A.aa)){o.f="$i"+q
if(q==="i")return A.L(o,a,A.hJ)
return A.L(o,a,A.hO)}}else if(s===10){p=A.ia(o.x,o.y)
return A.L(o,a,p==null?A.eK:p)}return A.L(o,a,A.hz)},
L(a,b,c){a.b=c
return a.b(b)},
hC(a){var s=this,r=A.hy
if(A.aa(s))r=A.hr
else if(s===t.K)r=A.ho
else if(A.aw(s))r=A.hA
if(s===t.S)r=A.hk
else if(s===t.M)r=A.hl
else if(s===t.N)r=A.hp
else if(s===t.B)r=A.hq
else if(s===t.y)r=A.hg
else if(s===t.d)r=A.hh
else if(s===t.H)r=A.hm
else if(s===t.W)r=A.hn
else if(s===t.i)r=A.hi
else if(s===t.J)r=A.hj
s.a=r
return s.a(a)},
hz(a){var s=this
if(a==null)return A.aw(s)
return A.ip(v.typeUniverse,A.io(a,s),s)},
hB(a){if(a==null)return!0
return this.x.b(a)},
hO(a){var s,r=this
if(a==null)return A.aw(r)
s=r.f
if(a instanceof A.e)return!!a[s]
return!!J.a8(a)[s]},
hJ(a){var s,r=this
if(a==null)return A.aw(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.e)return!!a[s]
return!!J.a8(a)[s]},
hy(a){var s=this
if(a==null){if(A.aw(s))return a}else if(s.b(a))return a
throw A.r(A.eF(a,s),new Error())},
hA(a){var s=this
if(a==null||s.b(a))return a
throw A.r(A.eF(a,s),new Error())},
eF(a,b){return new A.bb("TypeError: "+A.es(a,A.v(b,null)))},
es(a,b){return A.ca(a)+": type '"+A.v(A.dY(a),null)+"' is not a subtype of type '"+b+"'"},
G(a,b){return new A.bb("TypeError: "+A.es(a,b))},
hH(a){var s=this
return s.x.b(a)||A.dL(v.typeUniverse,s).b(a)},
hL(a){return a!=null},
ho(a){if(a!=null)return a
throw A.r(A.G(a,"Object"),new Error())},
hP(a){return!0},
hr(a){return a},
eK(a){return!1},
dW(a){return!0===a||!1===a},
hg(a){if(!0===a)return!0
if(!1===a)return!1
throw A.r(A.G(a,"bool"),new Error())},
hh(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.r(A.G(a,"bool?"),new Error())},
hi(a){if(typeof a=="number")return a
throw A.r(A.G(a,"double"),new Error())},
hj(a){if(typeof a=="number")return a
if(a==null)return a
throw A.r(A.G(a,"double?"),new Error())},
eJ(a){return typeof a=="number"&&Math.floor(a)===a},
hk(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.r(A.G(a,"int"),new Error())},
hl(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.r(A.G(a,"int?"),new Error())},
hK(a){return typeof a=="number"},
hm(a){if(typeof a=="number")return a
throw A.r(A.G(a,"num"),new Error())},
hn(a){if(typeof a=="number")return a
if(a==null)return a
throw A.r(A.G(a,"num?"),new Error())},
hN(a){return typeof a=="string"},
hp(a){if(typeof a=="string")return a
throw A.r(A.G(a,"String"),new Error())},
hq(a){if(typeof a=="string")return a
if(a==null)return a
throw A.r(A.G(a,"String?"),new Error())},
eN(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.v(a[q],b)
return s},
hU(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.eN(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.v(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
eG(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.a([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)a4.push("T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.b(a4,l)
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
if(l===8){p=A.i0(a.x)
o=a.y
return o.length>0?p+("<"+A.eN(o,b)+">"):p}if(l===10)return A.hU(a,b)
if(l===11)return A.eG(a,b,null)
if(l===12)return A.eG(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.b(b,n)
return b[n]}return"?"},
i0(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
hf(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
he(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.dd(a,b,!1)
else if(typeof m=="number"){s=m
r=A.be(a,5,"#")
q=A.de(s)
for(p=0;p<s;++p)q[p]=r
o=A.bd(a,b,q)
n[b]=o
return o}else return m},
hd(a,b){return A.eD(a.tR,b)},
hc(a,b){return A.eD(a.eT,b)},
dd(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.ew(A.eu(a,null,b,!1))
r.set(b,s)
return s},
bf(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.ew(A.eu(a,b,c,!0))
q.set(c,r)
return r},
eC(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.dS(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
U(a,b){b.a=A.hC
b.b=A.hD
return b},
be(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.y(null,null)
s.w=b
s.as=c
r=A.U(a,s)
a.eC.set(c,r)
return r},
eA(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.ha(a,b,r,c)
a.eC.set(r,s)
return s},
ha(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.aa(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.aw(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.y(null,null)
q.w=6
q.x=b
q.as=c
return A.U(a,q)},
ez(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.h8(a,b,r,c)
a.eC.set(r,s)
return s},
h8(a,b,c,d){var s,r
if(d){s=b.w
if(A.aa(b)||b===t.K)return b
else if(s===1)return A.bd(a,"I",[b])
else if(b===t.P||b===t.T)return t.O}r=new A.y(null,null)
r.w=7
r.x=b
r.as=c
return A.U(a,r)},
hb(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.y(null,null)
s.w=13
s.x=b
s.as=q
r=A.U(a,s)
a.eC.set(q,r)
return r},
bc(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
h7(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
bd(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.bc(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.y(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.U(a,r)
a.eC.set(p,q)
return q},
dS(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.bc(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.y(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.U(a,o)
a.eC.set(q,n)
return n},
eB(a,b,c){var s,r,q="+"+(b+"("+A.bc(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.y(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.U(a,s)
a.eC.set(q,r)
return r},
ey(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.bc(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.bc(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.h7(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.y(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.U(a,p)
a.eC.set(r,o)
return o},
dT(a,b,c,d){var s,r=b.as+("<"+A.bc(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.h9(a,b,c,r,d)
a.eC.set(r,s)
return s},
h9(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.de(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.a6(a,b,r,0)
m=A.au(a,c,r,0)
return A.dT(a,n,m,c!==m)}}l=new A.y(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.U(a,l)},
eu(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
ew(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.h0(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.ev(a,r,l,k,!1)
else if(q===46)r=A.ev(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.a2(a.u,a.e,k.pop()))
break
case 94:k.push(A.hb(a.u,k.pop()))
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
case 62:A.h2(a,k)
break
case 38:A.h1(a,k)
break
case 63:p=a.u
k.push(A.eA(p,A.a2(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.ez(p,A.a2(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.h_(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.ex(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.h4(a.u,a.e,o)
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
return A.a2(a.u,a.e,m)},
h0(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
ev(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.hf(s,o.x)[p]
if(n==null)A.ab('No "'+p+'" in "'+A.fK(o)+'"')
d.push(A.bf(s,o,n))}else d.push(p)
return m},
h2(a,b){var s,r=a.u,q=A.et(a,b),p=b.pop()
if(typeof p=="string")b.push(A.bd(r,p,q))
else{s=A.a2(r,a.e,p)
switch(s.w){case 11:b.push(A.dT(r,s,q,a.n))
break
default:b.push(A.dS(r,s,q))
break}}},
h_(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.et(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.a2(p,a.e,o)
q=new A.bZ()
q.a=s
q.b=n
q.c=m
b.push(A.ey(p,r,q))
return
case-4:b.push(A.eB(p,b.pop(),s))
return
default:throw A.d(A.bp("Unexpected state under `()`: "+A.n(o)))}},
h1(a,b){var s=b.pop()
if(0===s){b.push(A.be(a.u,1,"0&"))
return}if(1===s){b.push(A.be(a.u,4,"1&"))
return}throw A.d(A.bp("Unexpected extended operation "+A.n(s)))},
et(a,b){var s=b.splice(a.p)
A.ex(a.u,a.e,s)
a.p=b.pop()
return s},
a2(a,b,c){if(typeof c=="string")return A.bd(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.h3(a,b,c)}else return c},
ex(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.a2(a,b,c[s])},
h4(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.a2(a,b,c[s])},
h3(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.d(A.bp("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.d(A.bp("Bad index "+c+" for "+b.h(0)))},
ip(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.p(a,b,null,c,null)
r.set(c,s)}return s},
p(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.aa(d))return!0
s=b.w
if(s===4)return!0
if(A.aa(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.p(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.p(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.p(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.p(a,b.x,c,d,e))return!1
return A.p(a,A.dL(a,b),c,d,e)}if(s===6)return A.p(a,p,c,d,e)&&A.p(a,b.x,c,d,e)
if(q===7){if(A.p(a,b,c,d.x,e))return!0
return A.p(a,b,c,A.dL(a,d),e)}if(q===6)return A.p(a,b,c,p,e)||A.p(a,b,c,d.x,e)
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
if(!A.p(a,j,c,i,e)||!A.p(a,i,e,j,c))return!1}return A.eI(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.eI(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.hI(a,b,c,d,e)}if(o&&q===10)return A.hM(a,b,c,d,e)
return!1},
eI(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
hI(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
for(;n!==m;){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.bf(a,b,r[o])
return A.eE(a,p,null,c,d.y,e)}return A.eE(a,b.y,null,c,d.y,e)},
eE(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.p(a,b[s],d,e[s],f))return!1
return!0},
hM(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.p(a,r[s],c,q[s],e))return!1
return!0},
aw(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.aa(a))if(s!==6)r=s===7&&A.aw(a.x)
return r},
aa(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
eD(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
de(a){return a>0?new Array(a):v.typeUniverse.sEA},
y:function y(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
bZ:function bZ(){this.c=this.b=this.a=null},
c3:function c3(a){this.a=a},
bY:function bY(){},
bb:function bb(a){this.a=a},
fT(){var s,r,q
if(self.scheduleImmediate!=null)return A.i3()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.c5(new A.cP(s),1)).observe(r,{childList:true})
return new A.cO(s,r,q)}else if(self.setImmediate!=null)return A.i4()
return A.i5()},
fU(a){self.scheduleImmediate(A.c5(new A.cQ(a),0))},
fV(a){self.setImmediate(A.c5(new A.cR(a),0))},
fW(a){A.dQ(B.G,a)},
dQ(a,b){var s=B.a.l(a.a,1000)
return A.h5(s,b)},
eo(a,b){var s=B.a.l(a.a,1000)
return A.h6(s,b)},
h5(a,b){var s=new A.ba()
s.ba(a,b)
return s},
h6(a,b){var s=new A.ba()
s.bb(a,b)
return s},
dm(a){return new A.bR(new A.j($.f,a.i("j<0>")),a.i("bR<0>"))},
di(a,b){a.$2(0,null)
b.b=!0
return b.a},
a3(a,b){A.hs(a,b)},
dh(a,b){var s,r=a==null?b.$ti.c.a(a):a
if(!b.b)b.a.a2(r)
else{s=b.a
if(b.$ti.i("I<1>").b(r))s.aG(r)
else s.aI(r)}},
dg(a,b){var s=A.ay(a),r=A.a9(a),q=b.a
if(b.b)q.J(new A.x(s,r))
else q.aF(new A.x(s,r))},
hs(a,b){var s,r,q=new A.dj(b),p=new A.dk(b)
if(a instanceof A.j)a.aQ(q,p,t.z)
else{s=t.z
if(a instanceof A.j)a.b4(q,p,s)
else{r=new A.j($.f,t.c)
r.a=8
r.c=a
r.aQ(q,p,s)}}},
dp(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.f.aw(new A.dq(s))},
dE(a){var s
if(t.Q.b(a)){s=a.gP()
if(s!=null)return s}return B.j},
fu(a,b){var s
if(!b.b(null))throw A.d(A.dD(null,"computation","The type parameter is not nullable"))
s=new A.j($.f,b.i("j<0>"))
A.fO(a,new A.cb(null,s,b))
return s},
hF(a,b){if($.f===B.b)return null
return null},
cX(a,b,c){var s,r,q,p={},o=p.a=a
for(;s=o.a,(s&4)!==0;){o=o.c
p.a=o}if(o===b){s=A.fM()
b.aF(new A.x(new A.D(!0,o,null,"Cannot complete a future with itself"),s))
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
A.a1(b,q)
return}b.a^=2
A.at(null,null,b.b,new A.cY(p,b))},
a1(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;!0;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){f=f.c
A.c4(f.a,f.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.a1(g.a,f)
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
if(r){A.c4(m.a,m.b)
return}j=$.f
if(j!==k)$.f=k
else j=null
f=f.c
if((f&15)===8)new A.d1(s,g,p).$0()
else if(q){if((f&1)!==0)new A.d0(s,m).$0()}else if((f&2)!==0)new A.d_(g,s).$0()
if(j!=null)$.f=j
f=s.c
if(f instanceof A.j){r=s.a.$ti
r=r.i("I<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.W(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.cX(f,i,!0)
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
hV(a,b){if(t.C.b(a))return b.aw(a)
if(t.v.b(a))return a
throw A.d(A.dD(a,"onError",u.c))},
hR(){var s,r
for(s=$.as;s!=null;s=$.as){$.bi=null
r=s.b
$.as=r
if(r==null)$.bh=null
s.a.$0()}},
hY(){$.dX=!0
try{A.hR()}finally{$.bi=null
$.dX=!1
if($.as!=null)$.e8().$1(A.eR())}},
eP(a){var s=new A.bS(a),r=$.bh
if(r==null){$.as=$.bh=s
if(!$.dX)$.e8().$1(A.eR())}else $.bh=r.b=s},
hX(a){var s,r,q,p=$.as
if(p==null){A.eP(a)
$.bi=$.bh
return}s=new A.bS(a)
r=$.bi
if(r==null){s.b=p
$.as=$.bi=s}else{q=r.b
s.b=q
$.bi=r.b=s
if(q==null)$.bh=s}},
f0(a){var s=null,r=$.f
if(B.b===r){A.at(s,s,B.b,a)
return}A.at(s,s,r,r.af(a))},
iE(a){A.e0(a,"stream",t.K)
return new A.c1()},
dN(a){return new A.aX(null,null,a.i("aX<0>"))},
eO(a){return},
er(a,b){return b==null?A.i6():b},
fX(a,b){if(b==null)b=A.i7()
if(t.k.b(b))return a.aw(b)
if(t.e.b(b))return b
throw A.d(A.ad("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
hS(a){},
hT(a,b){A.c4(a,b)},
hw(a,b,c){var s,r,q=a.aT()
if(q!==$.dB()){s=q.$ti
r=$.f
q.R(new A.T(new A.j(r,s),8,new A.dl(b,c),null,s.i("T<1,1>")))}else b.T(c)},
fO(a,b){var s=$.f
if(s===B.b)return A.dQ(a,b)
return A.dQ(a,s.af(b))},
fP(a,b){var s=$.f
if(s===B.b)return A.eo(a,b)
return A.eo(a,s.bx(b,t.E))},
c4(a,b){A.hX(new A.dn(a,b))},
eL(a,b,c,d){var s,r=$.f
if(r===c)return d.$0()
$.f=c
s=r
try{r=d.$0()
return r}finally{$.f=s}},
eM(a,b,c,d,e){var s,r=$.f
if(r===c)return d.$1(e)
$.f=c
s=r
try{r=d.$1(e)
return r}finally{$.f=s}},
hW(a,b,c,d,e,f){var s,r=$.f
if(r===c)return d.$2(e,f)
$.f=c
s=r
try{r=d.$2(e,f)
return r}finally{$.f=s}},
at(a,b,c,d){if(B.b!==c)d=c.af(d)
A.eP(d)},
cP:function cP(a){this.a=a},
cO:function cO(a,b,c){this.a=a
this.b=b
this.c=c},
cQ:function cQ(a){this.a=a},
cR:function cR(a){this.a=a},
ba:function ba(){this.c=0},
dc:function dc(a,b){this.a=a
this.b=b},
db:function db(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bR:function bR(a,b){this.a=a
this.b=!1
this.$ti=b},
dj:function dj(a){this.a=a},
dk:function dk(a){this.a=a},
dq:function dq(a){this.a=a},
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
bT:function bT(){},
aX:function aX(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null
_.$ti=c},
cb:function cb(a,b,c){this.a=a
this.b=b
this.c=c},
T:function T(a,b,c,d,e){var _=this
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
cU:function cU(a,b){this.a=a
this.b=b},
cZ:function cZ(a,b){this.a=a
this.b=b},
cY:function cY(a,b){this.a=a
this.b=b},
cW:function cW(a,b){this.a=a
this.b=b},
cV:function cV(a,b){this.a=a
this.b=b},
d1:function d1(a,b,c){this.a=a
this.b=b
this.c=c},
d2:function d2(a,b){this.a=a
this.b=b},
d3:function d3(a){this.a=a},
d0:function d0(a,b){this.a=a
this.b=b},
d_:function d_(a,b){this.a=a
this.b=b},
bS:function bS(a){this.a=a
this.b=null},
ap:function ap(){},
cw:function cw(a,b){this.a=a
this.b=b},
cx:function cx(a,b){this.a=a
this.b=b},
cu:function cu(a){this.a=a},
cv:function cv(a,b,c){this.a=a
this.b=b
this.c=c},
aZ:function aZ(){},
bV:function bV(){},
bU:function bU(){},
b9:function b9(){},
bX:function bX(){},
bW:function bW(a){this.b=a
this.a=null},
c_:function c_(){this.a=0
this.c=this.b=null},
d7:function d7(a,b){this.a=a
this.b=b},
b_:function b_(a){this.a=1
this.b=a
this.c=null},
c1:function c1(){},
dl:function dl(a,b){this.a=a
this.b=b},
df:function df(){},
dn:function dn(a,b){this.a=a
this.b=b},
d8:function d8(){},
d9:function d9(a,b){this.a=a
this.b=b},
da:function da(a,b,c){this.a=a
this.b=b
this.c=c},
fC(a,b){return new A.Y(a.i("@<0>").a3(b).i("Y<1,2>"))},
fD(a){return new A.b1(a.i("b1<0>"))},
dR(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
fZ(a,b,c){var s=new A.aq(a,b,c.i("aq<0>"))
s.c=a.e
return s},
dK(a){var s,r
if(A.e5(a))return"{...}"
s=new A.bO("")
try{r={}
$.w.push(a)
s.a+="{"
r.a=!0
a.ao(0,new A.cf(r,s))
s.a+="}"}finally{if(0>=$.w.length)return A.b($.w,-1)
$.w.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
b1:function b1(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
d6:function d6(a){this.a=a
this.c=this.b=null},
aq:function aq(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
m:function m(){},
aO:function aO(){},
cf:function cf(a,b){this.a=a
this.b=b},
aU:function aU(){},
b7:function b7(){},
fq(a,b){a=A.r(a,new Error())
a.stack=b.h(0)
throw a},
dJ(a,b,c){var s,r,q
if(a>4294967295)A.ab(A.fI(a,0,4294967295,"length",null))
s=A.a(new Array(a),c.i("o<0>"))
s.$flags=1
r=s
if(a!==0)for(s=r.length,q=0;q<s;++q)r[q]=b
return r},
fE(a,b,c){var s,r,q=A.a([],c.i("o<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.dz)(a),++r)q.push(a[r])
q.$flags=1
return q},
en(a,b,c){var s=J.fg(b)
if(!s.m())return a
if(c.length===0){do a+=A.n(s.gp())
while(s.m())}else{a+=A.n(s.gp())
for(;s.m();)a=a+c+A.n(s.gp())}return a},
fM(){return A.a9(new Error())},
eg(a){return new A.aB(1000*a)},
ca(a){if(typeof a=="number"||A.dW(a)||a==null)return J.bm(a)
if(typeof a=="string")return JSON.stringify(a)
return A.el(a)},
fr(a,b){A.e0(a,"error",t.K)
A.e0(b,"stackTrace",t.l)
A.fq(a,b)},
bp(a){return new A.bo(a)},
ad(a,b){return new A.D(!1,null,b,a)},
dD(a,b,c){return new A.D(!0,a,b,c)},
fH(a){var s=null
return new A.an(s,s,!1,s,s,a)},
fI(a,b,c,d,e){return new A.an(b,c,!0,a,d,"Invalid value")},
fJ(a,b){return a},
dF(a,b,c,d,e){return new A.bu(b,!0,a,e,"Index out of range")},
cN(a){return new A.aW(a)},
eq(a){return new A.bP(a)},
aA(a){return new A.bq(a)},
cc(a,b){if(a<=0)return new A.aD(b.i("aD<0>"))
if(!b.i("0(c)").b(A.eT()))throw A.d(A.ad("Generator must be supplied or element type must allow integers","generator"))
return new A.b0(a,A.eT(),b.i("b0<0>"))},
fy(a,b,c){var s,r
if(A.e5(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.a([],t.s)
$.w.push(a)
try{A.hQ(a,s)}finally{if(0>=$.w.length)return A.b($.w,-1)
$.w.pop()}r=A.en(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
dG(a,b,c){var s,r
if(A.e5(a))return b+"..."+c
s=new A.bO(b)
$.w.push(a)
try{r=s
r.a=A.en(r.a,a,", ")}finally{if(0>=$.w.length)return A.b($.w,-1)
$.w.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
fY(a){return a},
hQ(a,b){var s,r,q,p,o,n,m,l=a.gu(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.m())return
s=A.n(l.gp())
b.push(s)
k+=s.length+2;++j}if(!l.m()){if(j<=5)return
if(0>=b.length)return A.b(b,-1)
r=b.pop()
if(0>=b.length)return A.b(b,-1)
q=b.pop()}else{p=l.gp();++j
if(!l.m()){if(j<=4){b.push(A.n(p))
return}r=A.n(p)
if(0>=b.length)return A.b(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gp();++j
for(;l.m();p=o,o=n){n=l.gp();++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return A.b(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=A.n(p)
r=A.n(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.b(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
ck(a,b,c,d){var s
if(B.f===c){s=B.a.gj(a)
b=J.H(b)
return A.dO(A.S(A.S($.dC(),s),b))}if(B.f===d){s=B.a.gj(a)
b=J.H(b)
c=J.H(c)
return A.dO(A.S(A.S(A.S($.dC(),s),b),c))}s=B.a.gj(a)
b=J.H(b)
c=J.H(c)
d=J.H(d)
d=A.dO(A.S(A.S(A.S(A.S($.dC(),s),b),c),d))
return d},
aB:function aB(a){this.a=a},
cS:function cS(){},
k:function k(){},
bo:function bo(a){this.a=a},
J:function J(){},
D:function D(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
an:function an(a,b,c,d,e,f){var _=this
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
bP:function bP(a){this.a=a},
a_:function a_(a){this.a=a},
bq:function bq(a){this.a=a},
bK:function bK(){},
aV:function aV(){},
cT:function cT(a){this.a=a},
P:function P(){},
b0:function b0(a,b,c){this.a=a
this.b=b
this.$ti=c},
t:function t(){},
e:function e(){},
c2:function c2(){},
bO:function bO(a){this.a=a},
d4:function d4(){},
O:function O(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dP(a){return new A.cA(a)},
cl:function cl(){},
cA:function cA(a){this.a=a},
ag:function ag(a){this.b=a},
aj:function aj(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
al:function al(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=0},
fL(a,b,c,d,e,f,g,h){var s,r,q=v.G,p=q.document.createElement("canvas"),o=h*g
p.width=o
s=d*f
p.height=s
r=q.document.createElement("canvas")
r.width=o
r.height=s
s=A.a([],t.x)
for(q=A.cc(d,t.z),q=q.gu(q);q.m();){q.gp()
o=B.a.l(h,32)
s.push(new Uint32Array(o+1))}q=new A.bN(!0,d,h,g,f,c,a,p,r,s)
q.b8(a,b,c,d,!0,f,g,h)
return q},
dM(a){return new A.B(B.a.l(a,32),31-B.a.k(a,32))},
bN:function bN(a,b,c,d,e,f,g,h,i,j){var _=this
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
co:function co(a){this.a=a},
cp:function cp(a){this.a=a},
cq:function cq(a){this.a=a},
cr:function cr(a){this.a=a},
cn:function cn(){},
E:function E(a){this.b=a},
fN(a,b,c,d){var s,r,q,p,o="white",n=null,m=A.fL(a,c,o,d*10,!0,2,2,b*8),l=A.a([],t.G)
for(s=t.U,r=0;r<d;++r){q=A.a([],s)
for(p=0;p<b;++p)q.push(new A.O(r,p," ",o))
l.push(q)}m=new A.cz(d,b,c,m,new A.al(d,b),new A.al(d,b),new A.al(d,b),A.dN(t.N),A.dN(t.V),A.dN(t.q),B.e,l,A.fD(t.o),B.dO)
m.b9(a,b,c,o,n,!0,2,2,2,d,!0,n,n,n,n,n,n)
return m},
ao:function ao(a){this.b=a},
cz:function cz(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cI:function cI(a){this.a=a},
cH:function cH(){},
cG:function cG(a){this.a=a},
cB:function cB(a){this.a=a},
cC:function cC(a){this.a=a},
cD:function cD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cE:function cE(a,b,c){this.a=a
this.b=b
this.c=c},
cF:function cF(a){this.a=a},
ej(){var s,r,q,p,o,n=A.a([],t.w)
for(s=t.z,r=A.cc(6,s),r=r.gu(r),q=t.u;r.m();){r.gp()
p=A.a([],q)
for(o=A.cc(7,s),o=o.gu(o);o.m();){o.gp()
p.push(B.c)}n.push(p)}return new A.cg(n,B.d)},
bj(a,b,c){return A.i2(a,b,c)},
i2(a,b,c){var s=0,r=A.dm(t.n),q,p,o,n,m,l,k
var $async$bj=A.dp(function(d,e){if(d===1)return A.dg(e,r)
while(true)switch(s){case 0:k=$.N()
p=B.a.l(k.b-14,2)+b*2,o=a.a,n=t.z,m=0
case 3:if(!(m<6)){s=5
break}if(!(m<o.length)){q=A.b(o,m)
s=1
break}l=o[m]
if(!(b>=0&&b<l.length)){q=A.b(l,b)
s=1
break}s=l[b]===B.c?6:8
break
case 6:s=c?9:10
break
case 9:k.au(a.b.h(0),a.b.ah(),p,2+m)
s=11
return A.a3(A.fu(A.eg(200),n),$async$bj)
case 11:case 10:k.au(B.c.h(0),B.c.ah(),p,2+m)
s=7
break
case 8:s=5
break
case 7:case 4:++m
s=3
break
case 5:if(c)k.au(a.b.h(0),a.b.ah(),p,2+m)
k.A(""+(b+1),p,8)
case 1:return A.dh(q,r)}})
return A.di($async$bj,r)},
e_(a,b){var s=$.N()
s.A(a,B.a.l(s.b-a.length,2),b)},
ds(){var s=0,r=A.dm(t.y),q,p,o
var $async$ds=A.dp(function(a,b){if(a===1)return A.dg(b,r)
while(true)switch(s){case 0:o=$.N()
o.Y(0)
A.e_("Four-In-A-Line",0)
A.e_("Move first (y/n) ?",2)
case 3:s=6
return A.a3(o.bB(),$async$ds)
case 6:p=b.b
case 4:if(!A.iu("ynYN",p,0)){s=3
break}case 5:A.e_(B.h.N(" ",18),2)
q=p.toLowerCase()==="y"
s=1
break
case 1:return A.dh(q,r)}})
return A.di($async$ds,r)},
ax(){var s=0,r=A.dm(t.I),q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$ax=A.dp(function(a,b){if(a===1)return A.dg(b,r)
while(true)switch(s){case 0:s=3
return A.a3(A.ds(),$async$ax)
case 3:g=b
f=A.ej()
for(p=0;p<7;++p)A.bj(f,p,!1)
o=!0
case 4:if(!!0){s=6
break}if(f.gI().length===0){q=B.l
s=1
break}if(o)n=g
else n=!0
s=n?7:8
break
case 7:n="Your move ("+f.b.h(0)+")."
m=$.N()
l=m.b
m.A(n,B.a.l(l-n.length,2),10)
n=m.at,k=A.a5(n).i("F<1>"),j=!1,i=!1
case 9:if(!!j){s=10
break}if(m.ay!==B.e)A.ab(A.dP("Terminal already awaiting input."))
m.ay=B.k
e=B.h
s=11
return A.a3(new A.F(n,k).gak(0),$async$ax)
case 11:p=e.bA("1234567",b.b)
s=B.m.by(f.gI(),p)?12:13
break
case 12:i=f.a_(p)
s=14
return A.a3(A.bj(f,p,!0),$async$ax)
case 14:f.b=f.b===B.d?B.i:B.d
j=!0
case 13:s=9
break
case 10:n=B.h.N(" ",14)
m.A(n,B.a.l(l-n.length,2),10)
if(i){q=B.q
s=1
break}case 8:if(f.gI().length===0){q=B.l
s=1
break}h=f.bF(1000)
i=f.a_(h)
n="I choose "+(h+1)+"."
m=$.N()
l=m.b
m.A(n,B.a.l(l-n.length,2),10)
s=15
return A.a3(A.bj(f,h,!0),$async$ax)
case 15:n=B.h.N(" ",11)
m.A(n,B.a.l(l-n.length,2),10)
if(i){q=B.r
s=1
break}f.b=f.b===B.d?B.i:B.d
case 5:o=!1
s=4
break
case 6:case 1:return A.dh(q,r)}})
return A.di($async$ax,r)},
c6(){var s=0,r=A.dm(t.n),q,p
var $async$c6=A.dp(function(a,b){if(a===1)return A.dg(b,r)
while(true)switch(s){case 0:case 2:if(!!0){s=3
break}case 4:s=9
return A.a3(A.ax(),$async$c6)
case 9:switch(b){case B.r:s=6
break
case B.q:s=7
break
case B.l:s=8
break
default:s=5
break}break
case 6:q=$.N()
q.A("Computer wins!",B.a.l(q.b-14,2),10)
s=5
break
case 7:q=$.N()
q.A("You win!",B.a.l(q.b-8,2),10)
s=5
break
case 8:q=$.N()
q.A("A tie!",B.a.l(q.b-6,2),10)
s=5
break
case 5:q=$.N()
p=q.b
q.A("Press any key to",B.a.l(p-16,2),12)
q.A("play again!",B.a.l(p-11,2),13)
if(q.ay!==B.e)A.ab(A.dP("Terminal already awaiting input."))
q.ay=B.k
q=q.at
s=10
return A.a3(new A.F(q,A.a5(q).i("F<1>")).gak(0),$async$c6)
case 10:s=2
break
case 3:return A.dh(null,r)}})
return A.di($async$c6,r)},
Z:function Z(a){this.b=a},
cg:function cg(a,b){this.a=a
this.b=b},
ci:function ci(a,b,c){this.a=a
this.b=b
this.c=c},
ch:function ch(a){this.a=a},
ae:function ae(a){this.b=a},
iv(a){throw A.r(new A.aM("Field '"+a+"' has been assigned during initialization."),new Error())},
M(){throw A.r(A.fB(""),new Error())},
bg(a){var s
if(typeof a=="function")throw A.d(A.ad("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.ht,a)
s[$.dA()]=a
return s},
eH(a){var s
if(typeof a=="function")throw A.d(A.ad("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.hu,a)
s[$.dA()]=a
return s},
ht(a){return a.$0()},
hu(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
ii(a,b){return a[b]},
hv(a,b,c){return a[b](c)}},B={}
var w=[A,J,B]
var $={}
A.dH.prototype={}
J.bv.prototype={
C(a,b){return a===b},
gj(a){return A.am(a)},
h(a){return"Instance of '"+A.cm(a)+"'"},
gq(a){return A.a7(A.dV(this))}}
J.bw.prototype={
h(a){return String(a)},
gj(a){return a?519018:218159},
gq(a){return A.a7(t.y)},
$ih:1,
$ibk:1}
J.aH.prototype={
C(a,b){return null==b},
h(a){return"null"},
gj(a){return 0},
$ih:1}
J.aJ.prototype={$il:1}
J.R.prototype={
gj(a){return 0},
h(a){return String(a)}}
J.bL.prototype={}
J.a0.prototype={}
J.Q.prototype={
h(a){var s=a[$.dA()]
if(s==null)return this.b7(a)
return"JavaScript function for "+J.bm(s)}}
J.aI.prototype={
gj(a){return 0},
h(a){return String(a)}}
J.aK.prototype={
gj(a){return 0},
h(a){return String(a)}}
J.o.prototype={
bD(a,b){var s,r,q=a.length,p=A.dJ(q,"",t.N)
for(s=0;s<a.length;++s){r=A.n(a[s])
if(!(s<q))return A.b(p,s)
p[s]=r}return p.join(b)},
am(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw A.d(A.aA(a))}return s},
an(a,b,c){c.toString
return this.am(a,b,c,t.z)},
by(a,b){var s
for(s=0;s<a.length;++s)if(J.ac(a[s],b))return!0
return!1},
h(a){return A.dG(a,"[","]")},
gu(a){return new J.bn(a,a.length,A.dU(a).i("bn<1>"))},
gj(a){return A.am(a)},
gn(a){return a.length},
$ii:1}
J.cd.prototype={}
J.bn.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.d(A.dz(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.af.prototype={
bQ(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.d(A.cN(""+a+".toInt()"))},
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
throw A.d(A.cN("Result of truncating division is "+A.n(s)+": "+A.n(a)+" ~/ "+b))},
O(a,b){if(b<0)throw A.d(A.dZ(b))
return b>31?0:a<<b>>>0},
bu(a,b){return b>31?0:a<<b>>>0},
b6(a,b){var s
if(b<0)throw A.d(A.dZ(b))
if(a>0)s=this.ad(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
bv(a,b){var s
if(a>0)s=this.ad(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
D(a,b){if(0>b)throw A.d(A.dZ(b))
return this.ad(a,b)},
ad(a,b){return b>31?0:a>>>b},
gq(a){return A.a7(t.H)},
$iq:1}
J.aG.prototype={
gq(a){return A.a7(t.S)},
$ih:1,
$ic:1}
J.bx.prototype={
gq(a){return A.a7(t.i)},
$ih:1}
J.X.prototype={
bR(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.b(p,0)
if(p.charCodeAt(0)===133){s=J.fz(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.b(p,r)
q=p.charCodeAt(r)===133?J.fA(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
N(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.E)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
bH(a,b,c){var s=b-a.length
if(s<=0)return a
return this.N(c,s)+a},
bA(a,b){var s=a.indexOf(b,0)
return s},
h(a){return a},
gj(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gq(a){return A.a7(t.N)},
gn(a){return a.length},
$ih:1,
$iA:1}
A.aM.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.dy.prototype={
$0(){var s=new A.j($.f,t.D)
s.a2(null)
return s},
$S:8}
A.cs.prototype={}
A.aC.prototype={}
A.aN.prototype={
gu(a){var s=this
return new A.ai(s,s.gn(s),A.a5(s).i("ai<1>"))}}
A.ai.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.eV(q),o=p.gn(q)
if(r.b!==o)throw A.d(A.aA(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.aj(q,s);++r.c
return!0}}
A.aD.prototype={
gu(a){return B.x},
gn(a){return 0}}
A.bs.prototype={
m(){return!1},
gp(){throw A.d(A.eh())}}
A.aF.prototype={}
A.B.prototype={$r:"+(1,2)",$s:1}
A.br.prototype={
h(a){return A.dK(this)}}
A.bt.prototype={
V(){var s=this,r=s.$map
if(r==null){r=new A.aL(s.$ti.i("aL<1,2>"))
A.ic(s.a,r)
s.$map=r}return r},
ai(a){return this.V().ai(a)},
t(a,b){return this.V().t(0,b)},
ao(a,b){this.V().ao(0,b)},
gn(a){return this.V().a}}
A.cK.prototype={
B(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.aT.prototype={
h(a){return"Null check operator used on a null value"}}
A.by.prototype={
h(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.bQ.prototype={
h(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.cj.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.aE.prototype={}
A.b8.prototype={
h(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iz:1}
A.W.prototype={
h(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.f1(r==null?"unknown":r)+"'"},
gbT(){return this},
$C:"$1",
$R:1,
$D:null}
A.c8.prototype={$C:"$0",$R:0}
A.c9.prototype={$C:"$2",$R:2}
A.cy.prototype={}
A.ct.prototype={
h(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.f1(s)+"'"}}
A.az.prototype={
C(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.az))return!1
return this.$_target===b.$_target&&this.a===b.a},
gj(a){return(A.e7(this.a)^A.am(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.cm(this.a)+"'")}}
A.bM.prototype={
h(a){return"RuntimeError: "+this.a}}
A.Y.prototype={
gn(a){return this.a},
ai(a){var s=this.b
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
s=q[this.ap(a)]
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
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw A.d(A.aA(s))
r=r.c}},
aD(a,b,c){var s=a[b]
if(s==null)a[b]=this.a1(b,c)
else s.b=c},
a1(a,b){var s=this,r=new A.ce(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&1073741823
return r},
ap(a){return J.H(a)&1073741823},
aq(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ac(a[r].a,b))return r
return-1},
h(a){return A.dK(this)},
a8(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.ce.prototype={}
A.ah.prototype={
gn(a){return this.a.a},
gu(a){var s=this.a
return new A.bz(s,s.r,s.e)}}
A.bz.prototype={
gp(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.aA(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
A.aL.prototype={
ap(a){return A.i8(a)&1073741823},
aq(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ac(a[r].a,b))return r
return-1}}
A.dt.prototype={
$1(a){return this.a(a)},
$S:9}
A.du.prototype={
$2(a,b){return this.a(a,b)},
$S:10}
A.dv.prototype={
$1(a){return this.a(a)},
$S:11}
A.ar.prototype={
h(a){return this.aR(!1)},
aR(a){var s,r,q,p,o,n=this.bl(),m=this.aK(),l=(a?""+"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.b(m,q)
o=m[q]
l=a?l+A.el(o):l+A.n(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
bl(){var s,r=this.$s
for(;$.b6.length<=r;)$.b6.push(null)
s=$.b6[r]
if(s==null){s=this.bk()
if(!(r<$.b6.length))return A.b($.b6,r)
$.b6[r]=s}return s},
bk(){var s,r,q,p,o,n=this.$r,m=n.indexOf("("),l=n.substring(1,m),k=n.substring(m),j=k==="()"?0:k.replace(/[^,]/g,"").length+1,i=A.a(new Array(j),t.f)
for(s=0;s<j;++s)i[s]=s
if(l!==""){r=l.split(",")
s=r.length
for(q=i.length,p=j;s>0;){--p;--s
o=r[s]
if(!(p>=0&&p<q))return A.b(i,p)
i[p]=o}}i=A.fE(i,!1,t.K)
i.$flags=3
return i}}
A.c0.prototype={
aK(){return[this.a,this.b]},
C(a,b){if(b==null)return!1
return b instanceof A.c0&&this.$s===b.$s&&J.ac(this.a,b.a)&&J.ac(this.b,b.b)},
gj(a){return A.ck(this.$s,this.a,this.b,B.f)}}
A.bA.prototype={
gq(a){return B.dW},
$ih:1}
A.aR.prototype={}
A.bB.prototype={
gq(a){return B.dX},
$ih:1}
A.ak.prototype={
gn(a){return a.length},
$iu:1}
A.aP.prototype={
t(a,b){A.a4(b,a,a.length)
return a[b]},
$ii:1}
A.aQ.prototype={$ii:1}
A.bC.prototype={
gq(a){return B.dY},
$ih:1}
A.bD.prototype={
gq(a){return B.dZ},
$ih:1}
A.bE.prototype={
gq(a){return B.e_},
t(a,b){A.a4(b,a,a.length)
return a[b]},
$ih:1}
A.bF.prototype={
gq(a){return B.e0},
t(a,b){A.a4(b,a,a.length)
return a[b]},
$ih:1}
A.bG.prototype={
gq(a){return B.e1},
t(a,b){A.a4(b,a,a.length)
return a[b]},
$ih:1}
A.bH.prototype={
gq(a){return B.e3},
t(a,b){A.a4(b,a,a.length)
return a[b]},
$ih:1}
A.bI.prototype={
gq(a){return B.e4},
t(a,b){A.a4(b,a,a.length)
return a[b]},
$ih:1,
$icM:1}
A.aS.prototype={
gq(a){return B.e5},
gn(a){return a.length},
t(a,b){A.a4(b,a,a.length)
return a[b]},
$ih:1}
A.bJ.prototype={
gq(a){return B.e6},
gn(a){return a.length},
t(a,b){A.a4(b,a,a.length)
return a[b]},
$ih:1}
A.b2.prototype={}
A.b3.prototype={}
A.b4.prototype={}
A.b5.prototype={}
A.y.prototype={
i(a){return A.bf(v.typeUniverse,this,a)},
a3(a){return A.eC(v.typeUniverse,this,a)}}
A.bZ.prototype={}
A.c3.prototype={
h(a){return A.v(this.a,null)}}
A.bY.prototype={
h(a){return this.a}}
A.bb.prototype={$iJ:1}
A.cP.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:3}
A.cO.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:12}
A.cQ.prototype={
$0(){this.a.$0()},
$S:1}
A.cR.prototype={
$0(){this.a.$0()},
$S:1}
A.ba.prototype={
ba(a,b){if(self.setTimeout!=null)self.setTimeout(A.c5(new A.dc(this,b),0),a)
else throw A.d(A.cN("`setTimeout()` not found."))},
bb(a,b){if(self.setTimeout!=null)self.setInterval(A.c5(new A.db(this,a,Date.now(),b),0),a)
else throw A.d(A.cN("Periodic timer."))},
$icJ:1}
A.dc.prototype={
$0(){this.a.c=1
this.b.$0()},
$S:0}
A.db.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.a.E(s,o)}q.c=p
r.d.$1(q)},
$S:1}
A.bR.prototype={}
A.dj.prototype={
$1(a){return this.a.$2(0,a)},
$S:4}
A.dk.prototype={
$2(a,b){this.a.$2(1,new A.aE(a,b))},
$S:13}
A.dq.prototype={
$2(a,b){this.a(a,b)},
$S:14}
A.x.prototype={
h(a){return A.n(this.a)},
$ik:1,
gP(){return this.b}}
A.F.prototype={}
A.aY.prototype={
aa(){},
ab(){}}
A.bT.prototype={
gbn(){return this.c<4},
bs(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
bw(a,b,c,d){var s,r,q,p,o,n=this
if((n.c&4)!==0){s=new A.b_($.f)
A.f0(s.gbo())
s.c=c
return s}s=$.f
r=d?1:0
q=A.er(s,a)
A.fX(s,b)
p=new A.aY(n,q,s,r|32,A.a5(n).i("aY<1>"))
p.CW=p
p.ch=p
p.ay=n.c&1
o=n.e
n.e=p
p.ch=null
p.CW=o
if(o==null)n.d=p
else o.ch=p
if(n.d===p)A.eO(n.a)
return p},
br(a){var s,r=this
A.a5(r).i("aY<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.bs(a)
if((r.c&2)===0&&r.d==null)r.bg()}return null},
bd(){if((this.c&4)!==0)return new A.a_("Cannot add new events after calling close")
return new A.a_("Cannot add new events while doing an addStream")},
H(a,b){if(!this.gbn())throw A.d(this.bd())
this.ac(b)},
bg(){if((this.c&4)!==0)if(null.gbU())null.a2(null)
A.eO(this.b)}}
A.aX.prototype={
ac(a){var s
for(s=this.d;s!=null;s=s.ch)s.be(new A.bW(a))}}
A.cb.prototype={
$0(){this.c.a(null)
this.b.T(null)},
$S:0}
A.T.prototype={
bE(a){if((this.c&15)!==6)return!0
return this.b.b.az(this.d,a.a)},
bz(a){var s,r=this.e,q=null,p=a.a,o=this.b.b
if(t.C.b(r))q=o.bM(r,p,a.b)
else q=o.az(r,p)
try{p=q
return p}catch(s){if(t._.b(A.ay(s))){if((this.c&1)!==0)throw A.d(A.ad("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.ad("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.j.prototype={
b4(a,b,c){var s,r=$.f
if(r===B.b){if(!t.C.b(b)&&!t.v.b(b))throw A.d(A.dD(b,"onError",u.c))}else b=A.hV(b,r)
s=new A.j(r,c.i("j<0>"))
this.R(new A.T(s,3,a,b,this.$ti.i("@<1>").a3(c).i("T<1,2>")))
return s},
aQ(a,b,c){var s=new A.j($.f,c.i("j<0>"))
this.R(new A.T(s,19,a,b,this.$ti.i("@<1>").a3(c).i("T<1,2>")))
return s},
bt(a){this.a=this.a&1|16
this.c=a},
S(a){this.a=a.a&30|this.a&1
this.c=a.c},
R(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.R(a)
return}s.S(r)}A.at(null,null,s.b,new A.cU(s,a))}},
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
A.at(null,null,n.b,new A.cZ(m,n))}},
K(){var s=this.c
this.c=null
return this.W(s)},
W(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
T(a){var s,r=this
if(r.$ti.i("I<1>").b(a))A.cX(a,r,!0)
else{s=r.K()
r.a=8
r.c=a
A.a1(r,s)}},
aI(a){var s=this,r=s.K()
s.a=8
s.c=a
A.a1(s,r)},
bj(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.K()
q.S(a)
A.a1(q,r)},
J(a){var s=this.K()
this.bt(a)
A.a1(this,s)},
bi(a,b){this.J(new A.x(a,b))},
a2(a){if(this.$ti.i("I<1>").b(a)){this.aG(a)
return}this.bf(a)},
bf(a){this.a^=2
A.at(null,null,this.b,new A.cW(this,a))},
aG(a){A.cX(a,this,!1)
return},
aF(a){this.a^=2
A.at(null,null,this.b,new A.cV(this,a))},
$iI:1}
A.cU.prototype={
$0(){A.a1(this.a,this.b)},
$S:0}
A.cZ.prototype={
$0(){A.a1(this.b,this.a.a)},
$S:0}
A.cY.prototype={
$0(){A.cX(this.a.a,this.b,!0)},
$S:0}
A.cW.prototype={
$0(){this.a.aI(this.b)},
$S:0}
A.cV.prototype={
$0(){this.a.J(this.b)},
$S:0}
A.d1.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.b1(q.d)}catch(p){s=A.ay(p)
r=A.a9(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.dE(q)
n=k.a
n.c=new A.x(q,o)
q=n}q.b=!0
return}if(j instanceof A.j&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.j){m=k.b.a
l=new A.j(m.b,m.$ti)
j.b4(new A.d2(l,m),new A.d3(l),t.n)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.d2.prototype={
$1(a){this.a.bj(this.b)},
$S:3}
A.d3.prototype={
$2(a,b){this.a.J(new A.x(a,b))},
$S:15}
A.d0.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
q.c=p.b.b.az(p.d,this.b)}catch(o){s=A.ay(o)
r=A.a9(o)
q=s
p=r
if(p==null)p=A.dE(q)
n=this.a
n.c=new A.x(q,p)
n.b=!0}},
$S:0}
A.d_.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.bE(s)&&p.a.e!=null){p.c=p.a.bz(s)
p.b=!1}}catch(o){r=A.ay(o)
q=A.a9(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.dE(p)
m=l.b
m.c=new A.x(p,n)
p=m}p.b=!0}},
$S:0}
A.bS.prototype={}
A.ap.prototype={
gn(a){var s={},r=new A.j($.f,t.a)
s.a=0
this.aW(new A.cw(s,this),!0,new A.cx(s,r),r.gaH())
return r},
gak(a){var s=new A.j($.f,this.$ti.i("j<1>")),r=this.aW(null,!0,new A.cu(s),s.gaH())
r.aY(new A.cv(this,r,s))
return s}}
A.cw.prototype={
$1(a){++this.a.a},
$S(){return this.b.$ti.i("~(1)")}}
A.cx.prototype={
$0(){this.b.T(this.a.a)},
$S:0}
A.cu.prototype={
$0(){var s,r=new A.a_("No element")
A.fG(r,B.j)
s=A.hF(r,B.j)
s=new A.x(r,B.j)
this.a.J(s)},
$S:0}
A.cv.prototype={
$1(a){A.hw(this.b,this.c,a)},
$S(){return this.a.$ti.i("~(1)")}}
A.aZ.prototype={
gj(a){return(A.am(this.a)^892482866)>>>0},
C(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.F&&b.a===this.a}}
A.bV.prototype={
aN(){return this.w.br(this)},
aa(){},
ab(){}}
A.bU.prototype={
aY(a){this.a=A.er(this.d,a)},
aT(){var s,r=this,q=r.e&=4294967279
if((q&8)===0){q=r.e=q|8
if((q&128)!==0){s=r.r
if(s.a===1)s.a=3}if((q&64)===0)r.r=null
r.f=r.aN()}q=$.dB()
return q},
aa(){},
ab(){},
aN(){return null},
be(a){var s,r,q=this,p=q.r
if(p==null)p=q.r=new A.c_()
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
q.e=p}}for(;!0;a=r){if((p&8)!==0){q.r=null
return}r=(p&4)!==0
if(a===r)break
q.e=p^64
if(r)q.aa()
else q.ab()
p=q.e&=4294967231}if((p&128)!==0&&p<256)q.r.aB(q)}}
A.b9.prototype={
aW(a,b,c,d){return this.a.bw(a,d,c,!0)}}
A.bX.prototype={}
A.bW.prototype={}
A.c_.prototype={
aB(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.f0(new A.d7(s,a))
s.a=1}}
A.d7.prototype={
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
return $.dB()},
bp(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.b2(s)}}else r.a=q}}
A.c1.prototype={}
A.dl.prototype={
$0(){return this.a.T(this.b)},
$S:0}
A.df.prototype={}
A.dn.prototype={
$0(){A.fr(this.a,this.b)},
$S:0}
A.d8.prototype={
b2(a){var s,r,q
try{if(B.b===$.f){a.$0()
return}A.eL(null,null,this,a)}catch(q){s=A.ay(q)
r=A.a9(q)
A.c4(s,r)}},
bP(a,b){var s,r,q
try{if(B.b===$.f){a.$1(b)
return}A.eM(null,null,this,a,b)}catch(q){s=A.ay(q)
r=A.a9(q)
A.c4(s,r)}},
b3(a,b){a.toString
return this.bP(a,b,t.z)},
af(a){return new A.d9(this,a)},
bx(a,b){return new A.da(this,a,b)},
bL(a){if($.f===B.b)return a.$0()
return A.eL(null,null,this,a)},
b1(a){a.toString
return this.bL(a,t.z)},
bO(a,b){if($.f===B.b)return a.$1(b)
return A.eM(null,null,this,a,b)},
az(a,b){var s=t.z
a.toString
return this.bO(a,b,s,s)},
bN(a,b,c){if($.f===B.b)return a.$2(b,c)
return A.hW(null,null,this,a,b,c)},
bM(a,b,c){var s=t.z
a.toString
return this.bN(a,b,c,s,s,s)},
bK(a){return a},
aw(a){var s=t.z
a.toString
return this.bK(a,s,s,s)}}
A.d9.prototype={
$0(){return this.a.b2(this.b)},
$S:0}
A.da.prototype={
$1(a){return this.a.b3(this.b,a)},
$S(){return this.c.i("~(0)")}}
A.b1.prototype={
gu(a){var s=this,r=new A.aq(s,s.r,s.$ti.i("aq<1>"))
r.c=s.e
return r},
gn(a){return this.a},
H(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.aE(s==null?q.b=A.dR():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.aE(r==null?q.c=A.dR():r,b)}else return q.bc(b)},
bc(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.dR()
s=J.H(a)&1073741823
r=p[s]
if(r==null)p[s]=[q.a9(a)]
else{if(q.bm(r,a)>=0)return!1
r.push(q.a9(a))}return!0},
aE(a,b){if(a[b]!=null)return!1
a[b]=this.a9(b)
return!0},
aM(){this.r=this.r+1&1073741823},
a9(a){var s,r=this,q=new A.d6(a)
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
for(r=0;r<s;++r)if(J.ac(a[r].a,b))return r
return-1}}
A.d6.prototype={}
A.aq.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.d(A.aA(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.m.prototype={
gu(a){return new A.ai(a,this.gn(a),A.bl(a).i("ai<m.E>"))},
aj(a,b){return this.t(a,b)},
h(a){return A.dG(a,"[","]")}}
A.aO.prototype={
gn(a){return this.a},
h(a){return A.dK(this)}}
A.cf.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.n(a)
r.a=(r.a+=s)+": "
s=A.n(b)
r.a+=s},
$S:16}
A.aU.prototype={
h(a){return A.dG(this,"{","}")}}
A.b7.prototype={}
A.aB.prototype={
C(a,b){if(b==null)return!1
return b instanceof A.aB&&this.a===b.a},
gj(a){return B.a.gj(this.a)},
h(a){var s,r,q,p,o=this.a,n=B.a.l(o,36e8)
o%=36e8
s=B.a.l(o,6e7)
o%=6e7
r=s<10?"0":""
q=B.a.l(o,1e6)
p=q<10?"0":""
return""+n+":"+r+s+":"+p+q+"."+B.h.bH(B.a.h(o%1e6),6,"0")}}
A.cS.prototype={
h(a){return this.U()}}
A.k.prototype={
gP(){return A.fF(this)}}
A.bo.prototype={
h(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.ca(s)
return"Assertion failed"}}
A.J.prototype={}
A.D.prototype={
ga7(){return"Invalid argument"+(!this.a?"(s)":"")},
ga6(){return""},
h(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.ga7()+q+o
if(!s.a)return n
return n+s.ga6()+": "+A.ca(s.gar())},
gar(){return this.b}}
A.an.prototype={
gar(){return this.b},
ga7(){return"RangeError"},
ga6(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.n(q):""
else if(q==null)s=": Not greater than or equal to "+A.n(r)
else if(q>r)s=": Not in inclusive range "+A.n(r)+".."+A.n(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.n(r)
return s}}
A.bu.prototype={
gar(){return this.b},
ga7(){return"RangeError"},
ga6(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gn(a){return this.f}}
A.aW.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.bP.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.a_.prototype={
h(a){return"Bad state: "+this.a}}
A.bq.prototype={
h(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.ca(s)+"."}}
A.bK.prototype={
h(a){return"Out of Memory"},
gP(){return null},
$ik:1}
A.aV.prototype={
h(a){return"Stack Overflow"},
gP(){return null},
$ik:1}
A.cT.prototype={
h(a){return"Exception: "+this.a}}
A.P.prototype={
am(a,b,c){var s,r
for(s=this.gu(this),r=b;s.m();)r=c.$2(r,s.gp())
return r},
an(a,b,c){c.toString
return this.am(0,b,c,t.z)},
gn(a){var s,r=this.gu(this)
for(s=0;r.m();)++s
return s},
aj(a,b){var s,r
A.fJ(b,"index")
s=this.gu(this)
for(r=b;s.m();){if(r===0)return s.gp();--r}throw A.d(A.dF(b,b-r,this,null,"index"))},
h(a){return A.fy(this,"(",")")}}
A.b0.prototype={
aj(a,b){var s=this.a
if(b>=s)A.ab(A.dF(b,s,this,null,"index"))
return this.b.$1(b)},
gn(a){return this.a}}
A.t.prototype={
gj(a){return A.e.prototype.gj.call(this,0)},
h(a){return"null"}}
A.e.prototype={$ie:1,
C(a,b){return this===b},
gj(a){return A.am(this)},
h(a){return"Instance of '"+A.cm(this)+"'"},
gq(a){return A.eW(this)},
toString(){return this.h(this)}}
A.c2.prototype={
h(a){return""},
$iz:1}
A.bO.prototype={
gn(a){return this.a.length},
h(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.d4.prototype={
bG(a){if(a<=0||a>4294967296)throw A.d(A.fH("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
A.O.prototype={
gj(a){var s=this.a,r=this.b
return A.ck(new A.B(s,r).$s,s,r,B.f)},
C(a,b){var s,r,q,p
if(b==null)return!1
if(b instanceof A.O){s=b.a
r=b.b
q=this.a
p=this.b
p=A.ck(new A.B(s,r).$s,s,r,B.f)===A.ck(new A.B(q,p).$s,q,p,B.f)
s=p}else s=!1
return s},
h(a){var s=this
return"("+s.a+" "+s.b+") => '"+s.c+"' "+s.d}}
A.cl.prototype={
h(a){return A.eW(this).h(0)+": "+this.a}}
A.cA.prototype={}
A.ag.prototype={}
A.aj.prototype={
h(a){var s=this
return"               row: "+s.a+"\n            column: "+s.b+"\n         character: '"+s.c+"'\n    characterColor: "+s.d+"\n\n          pixelRow: "+s.e+"\n       pixelColumn: "+s.f+"\n         pixelIsOn: "+s.r+"\n    "}}
A.al.prototype={
sZ(a){var s,r,q,p=this
if(a<0){s=p.d=a
for(r=p.b,q=p.a;s<0;){s+=r
p.d=s
p.c=B.a.k(p.c-1,q)}}else{s=p.b
p.c=B.a.k(p.c+B.a.E(a,s),p.a)
p.d=B.a.k(a,s)}},
gv(){return this.c*this.b+this.d},
sv(a){var s=this,r=s.b
s.c=B.a.k(B.a.E(a,r),s.a)
s.d=B.a.k(a,r)}}
A.bN.prototype={
b8(a,b,c,d,e,f,g,h){var s,r=this,q=v.G.document
q.onfocus=A.bg(new A.co(r))
q.onblur=A.bg(new A.cp(r))
q=r.w
q.tabIndex=-1
q.style.display="block"
q.style.outline="none"
s=q.getContext("2d")
if(s==null)s=t.m.a(s)
s.imageSmoothingEnabled=!1
q.onfocus=A.bg(new A.cq(r))
q.onblur=A.bg(new A.cr(r))
b.style.display="flex"
b.style.alignItems="flex-start"
b.style.padding="0"
b.style.margin="0"
b.style.width="fit-content"
b.style.height="fit-content"
b.style.background="gray"
b.appendChild(q)
r.Y(0)},
X(a,b){return new A.B(B.a.k(a,this.b),B.a.k(b,this.c))},
a4(){var s=this.x,r=s.getContext("2d")
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
F(a,b,c,d){var s,r,q,p,o,n,m=this,l=a<0||a>=m.b||b<0||b>=m.c
if(l)return
s=m.X(a,b)
a=s.a
b=s.b
r=A.dM(b)
q=r.a
p=B.a.O(1,r.b)
l=m.y
if(!(a>=0&&a<l.length))return A.b(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.b(l,q)
o=l[q]
l.$flags&2&&A.c7(l)
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
s=m.X(a,b)
a=s.a
b=s.b
r=A.dM(b)
q=r.a
p=B.a.O(1,r.b)
l=m.y
if(!(a>=0&&a<l.length))return A.b(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.b(l,q)
o=l[q]
l.$flags&2&&A.c7(l)
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
b_(a,b){var s,r,q,p,o=this.X(b,a)
b=o.a
s=A.dM(o.b)
r=s.a
q=B.a.O(1,s.b)
p=this.y
if(!(b>=0&&b<p.length))return A.b(p,b)
p=p[b]
if(!(r>=0&&r<p.length))return A.b(p,r)
return(p[r]&q)>>>0>0},
aU(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=this
if(e==null)e=k.c-c
if(b==null)b=k.b-d
k.a4()
if(c===0&&d===0&&e===k.c&&b===k.b){for(s=k.y,r=s.length,q=0;q<r;++q)for(p=0;o=s[q],p<o.length;++p){o.$flags&2&&A.c7(o)
o[p]=0}s=k.x
r=s.getContext("2d")
if(r==null)r=t.m.a(r)
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
bq(a,b,c,d,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.a4()
s=e.X(a,b)
a=s.a
b=s.b
r=B.a.bu(1,a0)-1
for(q=a0-1,p=t.t,o=e.x,n=0;n<c.length;++n){m=c[n]
l=(m&r)>>>0
m=A.a([],p)
for(k=a+n,j=0;j<a0;++j){i=e.b_(b+j,k)?1:0
m.push(B.a.O(i,q-j))}h=B.m.an(m,0,new A.cn())
switch(a1){case B.t:for(j=0;j<a0;++j){m=b+j
if((B.a.D(l,q-j)&1)>0)e.G(k,m,d,o,!1)
else e.F(k,m,o,!1)}break
case B.dP:for(j=0;j<a0;++j){m=b+j
if((B.a.D(l,q-j)&1)>0)e.F(k,m,o,!1)
else e.G(k,m,d,o,!1)}break
case B.dR:for(j=0;j<a0;++j){g=q-j
if((B.a.D(l,g)&1)>0&&(B.a.b6(h,g)&1)===0)e.G(k,b+j,d,o,!1)}break
case B.dQ:for(j=0;j<a0;++j)if((B.a.D(l,q-j)&1)>0)e.G(k,b+j,d,o,!1)
break
case B.dS:for(f=(l&h)>>>0,j=0;j<a0;++j)if((B.a.D(f,q-j)&1)>0)e.G(k,b+j,d,o,!1)
break
case B.dT:for(f=(l&h)>>>0,j=0;j<a0;++j)if((B.a.D(f,q-j)&1)>0)e.F(k,b+j,o,!1)
break
case B.dU:for(f=(l&h)>>>0,j=0;j<a0;++j)if((B.a.D(f,q-j)&1)===0)e.F(k,b+j,o,!1)
break
case B.dV:for(f=(l&h)>>>0,j=0;j<a0;++j){m=b+j
if((B.a.D(f,q-j)&1)===0)e.F(k,m,o,!1)
else e.G(k,m,d,o,!1)}break}}e.a5()},
b0(a,b,c){this.bq(c.a,c.b,b,a,8,B.t,!0,!1,!1)},
b5(a){var s,r,q,p,o,n,m,l,k=this,j=k.b
a=B.a.k(a,j)
for(s=j-a,r=k.y,q=r.length,p=0;p<s;++p){if(!(p<q))return A.b(r,p)
o=p+a
n=0
for(;m=r[p],n<m.length;++n){if(!(o<q))return A.b(r,o)
l=r[o]
if(!(n<l.length))return A.b(l,n)
l=l[n]
m.$flags&2&&A.c7(m)
m[n]=l}}for(;p<j;++p){if(!(p<q))return A.b(r,p)
n=0
for(;o=r[p],n<o.length;++n){o.$flags&2&&A.c7(o)
o[n]=0}}k.a4()
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
M(){var s=this.w
s.style.opacity="1.0"
s.focus()},
L(){var s=this.w
s.style.opacity="0.5"
s.blur()}}
A.co.prototype={
$0(){this.a.z=!0},
$S:1}
A.cp.prototype={
$0(){this.a.z=!1},
$S:1}
A.cq.prototype={
$0(){this.a.M()},
$S:1}
A.cr.prototype={
$0(){this.a.L()},
$S:1}
A.cn.prototype={
$2(a,b){return(a|b)>>>0},
$S:6}
A.E.prototype={
U(){return"Mode."+this.b}}
A.ao.prototype={
U(){return"State."+this.b}}
A.cz.prototype={
b9(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=this,r=s.f
r.tabIndex=-1
r.onfocus=A.bg(new A.cB(s))
r.onblur=A.bg(new A.cC(s))
r.onkeydown=A.eH(new A.cD(s,l,new A.cH(),new A.cG(s)))
r.onclick=A.eH(new A.cE(s,new A.cI(s),o))
A.fP(A.eg(300),new A.cF(s))
s.L()
s.Y(0)},
gal(){var s=this.w
s===$&&A.M()
return s.gal()},
gag(){var s=this.w
s===$&&A.M()
return s.gag()},
ae(a,b){return new A.B(B.a.k(a,this.a),B.a.k(b,this.b))},
aL(){var s=this,r=s.x
s.CW.H(0,new A.O(r.c,r.d," ","white"))
s.aS()
s.cy=!1},
aS(){var s,r,q,p,o,n,m,l,k,j
for(s=this.CW,r=A.fZ(s,s.r,s.$ti.c),q=this.w,p=this.cx,o=r.$ti.c;r.m();){n=r.d
if(n==null)n=o.a(n)
m=n.a
l=n.b
if(p.ai(n.c)){k=p.t(0,n.c)
k.toString
j=k}else j=$.f3()
q===$&&A.M()
q.b0(n.d,j,new A.B(m*10,l*8))}if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.aM()}},
aA(a,b){var s,r=this.ae(b,a)
b=r.a
a=r.b
s=this.ch
if(!(b>=0&&b<s.length))return A.b(s,b)
s=s[b]
if(!(a>=0&&a<s.length))return A.b(s,a)
return s[a].c},
aX(){var s,r=this.x
r.sZ(0)
s=r.c
if(s===this.a-1)this.aC()
else r.c=B.a.k(s+1,r.a)},
aC(){var s,r,q,p,o,n,m,l,k=this
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
s===$&&A.M()
s.b5(10)},
av(a,b,c,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a1==null?f.x.c:a1,d=f.ae(e,c==null?f.x.d:c)
e=f.x
s=e.a
e.c=B.a.k(d.a,s)
e.sZ(d.b)
if(b==null)b="white"
for(r=a.split(""),q=r.length,p=f.ch,o=f.CW,n=f.a-1,m=f.b-1,l=0;l<q;++l){k=r[l]
j=e.c
i=e.d
if(!(j>=0&&j<p.length))return A.b(p,j)
h=p[j]
if(!(i>=0&&i<h.length))return A.b(h,i)
g=h[i]
g.c=k
g.d=b
o.H(0,g)
if(j===n&&i===m){f.aC()
e.c=B.a.k(e.c-1,s)}e.sZ(e.d+1)}f.aS()
if(a0)f.aX()},
A(a,b,c){return this.av(a,null,b,!0,c)},
aZ(a,b){return this.av(a,null,null,b,null)},
au(a,b,c,d){return this.av(a,b,c,!0,d)},
Y(a){var s,r,q,p,o=this,n=o.b,m=o.a
for(s=o.ch,r=0;r<m;++r)for(q=0;q<n;++q){if(!(r<s.length))return A.b(s,r)
p=s[r]
if(!(q<p.length))return A.b(p,q)
p=p[q]
p.c=" "
p.d="white"}s=o.w
s===$&&A.M()
s.aU(0,m*10,0,0,n*8)
s=o.x
s.c=0%s.a
s.sZ(0)},
bI(a,b,c){var s=this.w
s===$&&A.M()
s.b0("white",b,new A.B(c*10,a*8))},
bB(){if(this.ay!==B.e)A.ab(A.dP("Terminal already awaiting input."))
this.ay=B.k
var s=this.at
return new A.F(s,A.a5(s).i("F<1>")).gak(0)},
M(){return this.gal().$0()},
L(){return this.gag().$0()}}
A.cI.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.w
i===$&&A.M()
s=J.ea(a.offsetX)
r=Math.max(Math.min(B.a.E(J.ea(a.offsetY)-1,i.e),i.b-1),0)
q=Math.max(Math.min(B.a.E(s-1,i.d),i.c-1),0)
p=B.a.l(r,10)
o=B.a.l(q,8)
n=j.aA(o,p)
m=j.ae(p,o)
l=m.a
k=m.b
j=j.ch
if(!(l>=0&&l<j.length))return A.b(j,l)
j=j[l]
if(!(k>=0&&k<j.length))return A.b(j,k)
return new A.aj(p,o,n,j[k].d,r,q,i.b_(q,r))},
$S:17}
A.cH.prototype={
$1(a){var s=a.key
return new A.ag(s.length>1?"":s)},
$S:18}
A.cG.prototype={
$0(){var s,r,q,p,o,n=this.a,m=n.a,l=n.b,k=new A.al(m,l)
k.sv(n.y.gv())
s=A.a([],t.s)
for(r=n.z,q=r.b;p=k.c,o=k.d,p*l+o<r.c*q+r.d;p=k.c*l+k.d+1,k.c=B.a.k(B.a.E(p,l),m),k.d=B.a.k(p,l))s.push(n.aA(o,p))
return B.m.bD(s,"")},
$S:19}
A.cB.prototype={
$0(){var s=this.a.w
s===$&&A.M()
s.M()},
$S:1}
A.cC.prototype={
$0(){var s=this.a.w
s===$&&A.M()
s.L()},
$S:1}
A.cD.prototype={
$1(a){var s,r,q,p
a.preventDefault()
s=this.a
switch(s.ay){case B.e:break
case B.k:r=s.at
if(r.d!=null){r.H(0,this.c.$1(a))
s.ay=B.e}break
case B.v:s.aL()
$label0$1:{q=a.keyCode
if(13===q){r=s.as
if(r.d!=null){r.H(0,J.fi(this.d.$0()))
s.aX()
s.ay=B.e}break $label0$1}if(8===q){r=s.x
if(r.gv()>s.y.gv()){r.sv(r.gv()-1)
s.aZ(" ",!1)
r.sv(r.gv()-1)}break $label0$1}p=a.key
if(p.length===1&&s.x.gv()<s.z.gv())s.aZ(p,!1)}break
case B.w:break}},
$S:7}
A.cE.prototype={
$1(a){var s
a.preventDefault()
s=this.a
if(s.ay===B.w&&s.ax.d!=null){s.ax.H(0,this.b.$1(a))
s.ay=B.e}},
$S:7}
A.cF.prototype={
$1(a){var s,r=this.a,q=r.w
q===$&&A.M()
if(q.z&&J.ac(v.G.document.activeElement,q.w)&&r.ay===B.v)if(r.cy)r.aL()
else{q=r.x
s=q.c
r.bI(q.d,$.f2(),s)
r.cy=!0}},
$S:20}
A.Z.prototype={
U(){return"Position."+this.b},
h(a){var s
switch(this){case B.d:s="O"
break
case B.i:s="X"
break
case B.c:s="."
break
default:s=null}return s},
ah(){if(this===B.d)return"violet"
if(this===B.i)return"lightgreen"
return"gray"}}
A.cg.prototype={
gI(){var s,r,q,p=A.a([],t.t)
for(s=this.a,r=0;r<7;++r){if(0>=s.length)return A.b(s,0)
q=s[0]
if(!(r<q.length))return A.b(q,r)
if(q[r]===B.c)p.push(r)}return p},
aJ(a){var s,r,q,p=this.a,o=p.length
if(0>=o)return A.b(p,0)
s=p[0]
if(!(a>=0&&a<s.length))return A.b(s,a)
if(s[a]===B.c){r=0
while(!0){q=r+1
if(q<6){if(!(q<o))return A.b(p,q)
s=p[q]
if(!(a<s.length))return A.b(s,a)
s=s[a]===B.c}else s=!1
if(!s)break
r=q}return r}return-1},
bS(a){var s,r=this.aJ(a)
if(r===-1)throw A.d("Cannot move "+a+"...")
s=new A.ci(this,r,a)
if(s.$2(0,1))return!0
if(s.$2(1,0))return!0
if(s.$2(1,1))return!0
if(s.$2(-1,1))return!0
return!1},
a_(a){var s,r,q,p=this,o=p.a
if(0>=o.length)return A.b(o,0)
s=o[0]
if(!(a>=0&&a<s.length))return A.b(s,a)
if(s[a]===B.c){r=p.aJ(a)
q=p.bS(a)
if(!(r>=0&&r<o.length))return A.b(o,r)
o=o[r]
s=p.b
if(!(a<o.length))return A.b(o,a)
o[a]=s
return q}throw A.d("Cannot make move: "+a)},
aV(){var s,r,q,p,o,n,m,l,k=A.ej()
for(s=k.a,r=s.length,q=this.a,p=q.length,o=0;o<6;++o)for(n=0;n<7;++n){if(!(o<r))return A.b(s,o)
m=s[o]
if(!(o<p))return A.b(q,o)
l=q[o]
if(!(n<l.length))return A.b(l,n)
l=l[n]
if(!(n<m.length))return A.b(m,n)
m[n]=l}k.b=this.b
return k},
bJ(){var s,r,q=this.aV()
for(;!0;){s=q.gI()
r=s.length
if(r===0)break
r=$.ff().bG(r)
if(!(r>=0&&r<s.length))return A.b(s,r)
if(q.a_(s[r]))return q.b
else q.b=q.b===B.d?B.i:B.d}return B.c},
bF(a){var s,r,q,p,o,n,m,l,k,j=this,i=t.S
i=A.fC(i,i)
for(s=j.gI(),r=s.length,q=0;q<s.length;s.length===r||(0,A.dz)(s),++q)i.a0(0,s[q],0)
for(s=j.gI(),r=s.length,p=t.z,q=0;q<s.length;s.length===r||(0,A.dz)(s),++q){o=s[q]
n=j.aV()
if(n.a_(o))return o
for(m=A.cc(a,p),m=m.gu(m);m.m();){m.gp()
if(n.bJ()===j.b){l=i.t(0,o)
l.toString
i.a0(0,o,l+1)}}}s=i.$ti.i("ah<1>")
k=new A.ah(i,s).gu(0)
if(!k.m())A.ab(A.eh())
return new A.ah(i,s).an(0,k.gp(),new A.ch(i))},
h(a){var s,r,q,p,o
for(s=this.a,r=0,q="";r<6;++r){for(p=0;p<7;++p,q=o){if(!(r<s.length))return A.b(s,r)
o=s[r]
if(!(p<o.length))return A.b(o,p)
o=q+o[p].h(0)}q+="\n"}return q.charCodeAt(0)==0?q:q}}
A.ci.prototype={
$2(a,b){var s,r,q,p,o,n=this.b,m=this.c,l=this.a,k=l.a,j=k.length
l=l.b
s=m
r=n
q=1
while(!0){r+=a
p=!1
if(r>=0)if(r<6){o=s+b
if(o>=0)if(o<7){if(!(r<j))return A.b(k,r)
p=k[r]
if(!(o<p.length))return A.b(p,o)
o=p[o]===l
p=o}}if(!p)break;++q
s+=b}while(!0){n-=a
p=!1
if(n>=0)if(n<6){o=m-b
if(o>=0)if(o<7){if(!(n<j))return A.b(k,n)
p=k[n]
if(!(o<p.length))return A.b(p,o)
o=p[o]===l
p=o}}if(!p)break;++q
m-=b}return q===4},
$S:21}
A.ch.prototype={
$2(a,b){var s=this.a,r=s.t(0,a)
r.toString
s=s.t(0,b)
s.toString
return r>s?a:b},
$S:6}
A.ae.prototype={
U(){return"GameResult."+this.b}};(function aliases(){var s=J.R.prototype
s.b7=s.h})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._static_2,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u
s(A,"i3","fU",2)
s(A,"i4","fV",2)
s(A,"i5","fW",2)
r(A,"eR","hY",0)
s(A,"i6","hS",4)
q(A,"i7","hT",5)
p(A.j.prototype,"gaH","bi",5)
o(A.b_.prototype,"gbo","bp",0)
s(A,"eT","fY",22)
var n
o(n=A.bN.prototype,"gal","M",0)
o(n,"gag","L",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.e,null)
q(A.e,[A.dH,J.bv,J.bn,A.k,A.W,A.cs,A.P,A.ai,A.bs,A.aF,A.ar,A.br,A.cK,A.cj,A.aE,A.b8,A.aO,A.ce,A.bz,A.y,A.bZ,A.c3,A.ba,A.bR,A.x,A.ap,A.bU,A.bT,A.T,A.j,A.bS,A.bX,A.c_,A.b_,A.c1,A.df,A.aU,A.d6,A.aq,A.m,A.aB,A.cS,A.bK,A.aV,A.cT,A.t,A.c2,A.bO,A.d4,A.O,A.cl,A.ag,A.aj,A.al,A.bN,A.cz,A.cg])
q(J.bv,[J.bw,J.aH,J.aJ,J.aI,J.aK,J.af,J.X])
q(J.aJ,[J.R,J.o,A.bA,A.aR])
q(J.R,[J.bL,J.a0,J.Q])
r(J.cd,J.o)
q(J.af,[J.aG,J.bx])
q(A.k,[A.aM,A.J,A.by,A.bQ,A.bM,A.bY,A.bo,A.D,A.aW,A.bP,A.a_,A.bq])
q(A.W,[A.c8,A.c9,A.cy,A.dt,A.dv,A.cP,A.cO,A.dj,A.d2,A.cw,A.cv,A.da,A.cI,A.cH,A.cD,A.cE,A.cF])
q(A.c8,[A.dy,A.cQ,A.cR,A.dc,A.db,A.cb,A.cU,A.cZ,A.cY,A.cW,A.cV,A.d1,A.d0,A.d_,A.cx,A.cu,A.d7,A.dl,A.dn,A.d9,A.co,A.cp,A.cq,A.cr,A.cG,A.cB,A.cC])
r(A.aC,A.P)
q(A.aC,[A.aN,A.aD,A.ah])
r(A.c0,A.ar)
r(A.B,A.c0)
r(A.bt,A.br)
r(A.aT,A.J)
q(A.cy,[A.ct,A.az])
r(A.Y,A.aO)
r(A.aL,A.Y)
q(A.c9,[A.du,A.dk,A.dq,A.d3,A.cf,A.cn,A.ci,A.ch])
q(A.aR,[A.bB,A.ak])
q(A.ak,[A.b2,A.b4])
r(A.b3,A.b2)
r(A.aP,A.b3)
r(A.b5,A.b4)
r(A.aQ,A.b5)
q(A.aP,[A.bC,A.bD])
q(A.aQ,[A.bE,A.bF,A.bG,A.bH,A.bI,A.aS,A.bJ])
r(A.bb,A.bY)
r(A.b9,A.ap)
r(A.aZ,A.b9)
r(A.F,A.aZ)
r(A.bV,A.bU)
r(A.aY,A.bV)
r(A.aX,A.bT)
r(A.bW,A.bX)
r(A.d8,A.df)
r(A.b7,A.aU)
r(A.b1,A.b7)
q(A.D,[A.an,A.bu])
r(A.b0,A.aN)
r(A.cA,A.cl)
q(A.cS,[A.E,A.ao,A.Z,A.ae])
s(A.b2,A.m)
s(A.b3,A.aF)
s(A.b4,A.m)
s(A.b5,A.aF)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{c:"int",q:"double",eY:"num",A:"String",bk:"bool",t:"Null",i:"List",e:"Object",iC:"Map"},mangledNames:{},types:["~()","t()","~(~())","t(@)","~(@)","~(e,z)","c(c,c)","t(l)","I<~>()","@(@)","@(@,A)","@(A)","t(~())","t(@,z)","~(c,@)","t(e,z)","~(e?,e?)","aj(l)","ag(l)","A()","~(cJ)","bk(c,c)","c(c)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.B&&a.b(c.a)&&b.b(c.b)}}
A.hd(v.typeUniverse,JSON.parse('{"bL":"R","a0":"R","Q":"R","bw":{"bk":[],"h":[]},"aH":{"h":[]},"aJ":{"l":[]},"R":{"l":[]},"o":{"i":["1"],"l":[]},"cd":{"o":["1"],"i":["1"],"l":[]},"af":{"q":[]},"aG":{"q":[],"c":[],"h":[]},"bx":{"q":[],"h":[]},"X":{"A":[],"h":[]},"aM":{"k":[]},"aC":{"P":["1"]},"aN":{"P":["1"]},"aD":{"P":["1"]},"aT":{"J":[],"k":[]},"by":{"k":[]},"bQ":{"k":[]},"b8":{"z":[]},"bM":{"k":[]},"Y":{"aO":["1","2"]},"ah":{"P":["1"]},"aL":{"Y":["1","2"],"aO":["1","2"]},"bA":{"l":[],"h":[]},"aR":{"l":[]},"bB":{"l":[],"h":[]},"ak":{"u":["1"],"l":[]},"aP":{"m":["q"],"i":["q"],"u":["q"],"l":[]},"aQ":{"m":["c"],"i":["c"],"u":["c"],"l":[]},"bC":{"m":["q"],"i":["q"],"u":["q"],"l":[],"h":[],"m.E":"q"},"bD":{"m":["q"],"i":["q"],"u":["q"],"l":[],"h":[],"m.E":"q"},"bE":{"m":["c"],"i":["c"],"u":["c"],"l":[],"h":[],"m.E":"c"},"bF":{"m":["c"],"i":["c"],"u":["c"],"l":[],"h":[],"m.E":"c"},"bG":{"m":["c"],"i":["c"],"u":["c"],"l":[],"h":[],"m.E":"c"},"bH":{"m":["c"],"i":["c"],"u":["c"],"l":[],"h":[],"m.E":"c"},"bI":{"cM":[],"m":["c"],"i":["c"],"u":["c"],"l":[],"h":[],"m.E":"c"},"aS":{"m":["c"],"i":["c"],"u":["c"],"l":[],"h":[],"m.E":"c"},"bJ":{"m":["c"],"i":["c"],"u":["c"],"l":[],"h":[],"m.E":"c"},"bY":{"k":[]},"bb":{"J":[],"k":[]},"ba":{"cJ":[]},"x":{"k":[]},"F":{"ap":["1"]},"aX":{"bT":["1"]},"j":{"I":["1"]},"aZ":{"ap":["1"]},"b9":{"ap":["1"]},"b1":{"aU":["1"]},"b7":{"aU":["1"]},"bo":{"k":[]},"J":{"k":[]},"D":{"k":[]},"an":{"k":[]},"bu":{"k":[]},"aW":{"k":[]},"bP":{"k":[]},"a_":{"k":[]},"bq":{"k":[]},"bK":{"k":[]},"aV":{"k":[]},"b0":{"aN":["1"],"P":["1"]},"c2":{"z":[]},"fx":{"i":["c"]},"fS":{"i":["c"]},"fR":{"i":["c"]},"fv":{"i":["c"]},"fQ":{"i":["c"]},"fw":{"i":["c"]},"cM":{"i":["c"]},"fs":{"i":["q"]},"ft":{"i":["q"]}}'))
A.hc(v.typeUniverse,JSON.parse('{"aC":1,"bs":1,"aF":1,"br":2,"bz":1,"ak":1,"aZ":1,"bV":1,"bU":1,"b9":1,"bX":1,"bW":1,"c_":1,"b_":1,"c1":1,"b7":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.e2
return{o:s("O"),Q:s("k"),Z:s("iA"),I:s("ae"),U:s("o<O>"),G:s("o<i<O>>"),w:s("o<i<Z>>"),f:s("o<e>"),u:s("o<Z>"),s:s("o<A>"),x:s("o<cM>"),b:s("o<@>"),t:s("o<c>"),T:s("aH"),m:s("l"),g:s("Q"),p:s("u<@>"),V:s("ag"),j:s("i<@>"),q:s("aj"),P:s("t"),K:s("e"),L:s("iD"),F:s("+()"),l:s("z"),N:s("A"),E:s("cJ"),R:s("h"),_:s("J"),A:s("a0"),c:s("j<@>"),a:s("j<c>"),D:s("j<~>"),y:s("bk"),i:s("q"),z:s("@"),v:s("@(e)"),C:s("@(e,z)"),S:s("c"),O:s("I<t>?"),X:s("e?"),B:s("A?"),d:s("bk?"),J:s("q?"),M:s("c?"),W:s("eY?"),H:s("eY"),n:s("~"),e:s("~(e)"),k:s("~(e,z)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.H=J.bv.prototype
B.m=J.o.prototype
B.a=J.aG.prototype
B.I=J.af.prototype
B.h=J.X.prototype
B.J=J.Q.prototype
B.K=J.aJ.prototype
B.u=J.bL.prototype
B.n=J.a0.prototype
B.x=new A.bs()
B.o=function getTagFallback(o) {
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
B.p=function(hooks) { return hooks; }

B.E=new A.bK()
B.f=new A.cs()
B.F=new A.d4()
B.b=new A.d8()
B.j=new A.c2()
B.G=new A.aB(0)
B.q=new A.ae("human")
B.r=new A.ae("computer")
B.l=new A.ae("tie")
B.d9=A.a(s([126,129,165,129,189,153,129,126]),t.t)
B.ab=A.a(s([126,255,219,255,195,231,255,126]),t.t)
B.dG=A.a(s([108,254,254,254,124,56,16,0]),t.t)
B.c6=A.a(s([16,56,124,254,124,56,16,0]),t.t)
B.b4=A.a(s([56,124,56,254,254,124,56,124]),t.t)
B.bg=A.a(s([16,16,56,124,254,124,56,124]),t.t)
B.az=A.a(s([0,0,24,60,60,24,0,0]),t.t)
B.aC=A.a(s([255,255,231,195,195,231,255,255]),t.t)
B.aO=A.a(s([0,60,102,66,66,102,60,0]),t.t)
B.cU=A.a(s([255,195,153,189,189,153,195,255]),t.t)
B.dF=A.a(s([15,7,15,125,204,204,204,120]),t.t)
B.dE=A.a(s([60,102,102,102,60,24,126,24]),t.t)
B.cR=A.a(s([63,51,63,48,48,112,240,224]),t.t)
B.V=A.a(s([127,99,127,99,99,103,230,192]),t.t)
B.a_=A.a(s([153,90,60,231,231,60,90,153]),t.t)
B.aw=A.a(s([128,224,248,254,248,224,128,0]),t.t)
B.bC=A.a(s([2,14,62,254,62,14,2,0]),t.t)
B.ck=A.a(s([24,60,126,24,24,126,60,24]),t.t)
B.cg=A.a(s([102,102,102,102,102,0,102,0]),t.t)
B.cq=A.a(s([127,219,219,123,27,27,27,0]),t.t)
B.cr=A.a(s([62,99,56,108,108,56,204,120]),t.t)
B.bQ=A.a(s([0,0,0,0,126,126,126,0]),t.t)
B.bT=A.a(s([24,60,126,24,126,60,24,255]),t.t)
B.Q=A.a(s([24,60,126,24,24,24,24,0]),t.t)
B.de=A.a(s([24,24,24,24,126,60,24,0]),t.t)
B.d7=A.a(s([0,24,12,254,12,24,0,0]),t.t)
B.at=A.a(s([0,48,96,254,96,48,0,0]),t.t)
B.bY=A.a(s([0,0,192,192,192,254,0,0]),t.t)
B.bv=A.a(s([0,36,102,255,102,36,0,0]),t.t)
B.a9=A.a(s([0,24,60,126,255,255,0,0]),t.t)
B.bU=A.a(s([0,255,255,126,60,24,0,0]),t.t)
B.b_=A.a(s([0,0,0,0,0,0,0,0]),t.t)
B.bD=A.a(s([48,120,120,48,48,0,48,0]),t.t)
B.Y=A.a(s([108,108,108,0,0,0,0,0]),t.t)
B.an=A.a(s([108,108,254,108,254,108,108,0]),t.t)
B.c1=A.a(s([48,124,192,120,12,248,48,0]),t.t)
B.P=A.a(s([0,198,204,24,48,102,198,0]),t.t)
B.cD=A.a(s([56,108,56,118,220,204,118,0]),t.t)
B.am=A.a(s([96,96,192,0,0,0,0,0]),t.t)
B.U=A.a(s([24,48,96,96,96,48,24,0]),t.t)
B.bz=A.a(s([96,48,24,24,24,48,96,0]),t.t)
B.cu=A.a(s([0,102,60,255,60,102,0,0]),t.t)
B.dN=A.a(s([0,48,48,252,48,48,0,0]),t.t)
B.c3=A.a(s([0,0,0,0,0,48,48,96]),t.t)
B.bu=A.a(s([0,0,0,252,0,0,0,0]),t.t)
B.ci=A.a(s([0,0,0,0,0,48,48,0]),t.t)
B.a4=A.a(s([6,12,24,48,96,192,128,0]),t.t)
B.b7=A.a(s([124,198,206,222,246,230,124,0]),t.t)
B.cl=A.a(s([48,112,48,48,48,48,252,0]),t.t)
B.c_=A.a(s([120,204,12,56,96,204,252,0]),t.t)
B.dI=A.a(s([120,204,12,56,12,204,120,0]),t.t)
B.bB=A.a(s([28,60,108,204,254,12,30,0]),t.t)
B.d8=A.a(s([252,192,248,12,12,204,120,0]),t.t)
B.dq=A.a(s([56,96,192,248,204,204,120,0]),t.t)
B.c0=A.a(s([252,204,12,24,48,48,48,0]),t.t)
B.cx=A.a(s([120,204,204,120,204,204,120,0]),t.t)
B.be=A.a(s([120,204,204,124,12,24,112,0]),t.t)
B.d1=A.a(s([0,48,48,0,0,48,48,0]),t.t)
B.aR=A.a(s([0,48,48,0,0,48,48,96]),t.t)
B.bA=A.a(s([24,48,96,192,96,48,24,0]),t.t)
B.bp=A.a(s([0,0,252,0,0,252,0,0]),t.t)
B.aB=A.a(s([96,48,24,12,24,48,96,0]),t.t)
B.ar=A.a(s([120,204,12,24,48,0,48,0]),t.t)
B.dl=A.a(s([124,198,222,222,222,192,120,0]),t.t)
B.cc=A.a(s([48,120,204,204,252,204,204,0]),t.t)
B.aL=A.a(s([252,102,102,124,102,102,252,0]),t.t)
B.ad=A.a(s([60,102,192,192,192,102,60,0]),t.t)
B.a5=A.a(s([248,108,102,102,102,108,248,0]),t.t)
B.aj=A.a(s([254,98,104,120,104,98,254,0]),t.t)
B.co=A.a(s([254,98,104,120,104,96,240,0]),t.t)
B.ap=A.a(s([60,102,192,192,206,102,62,0]),t.t)
B.as=A.a(s([204,204,204,252,204,204,204,0]),t.t)
B.cM=A.a(s([120,48,48,48,48,48,120,0]),t.t)
B.bO=A.a(s([30,12,12,12,204,204,120,0]),t.t)
B.bG=A.a(s([230,102,108,120,108,102,230,0]),t.t)
B.bF=A.a(s([240,96,96,96,98,102,254,0]),t.t)
B.aM=A.a(s([198,238,254,254,214,198,198,0]),t.t)
B.X=A.a(s([198,230,246,222,206,198,198,0]),t.t)
B.cW=A.a(s([56,108,198,198,198,108,56,0]),t.t)
B.bk=A.a(s([252,102,102,124,96,96,240,0]),t.t)
B.cG=A.a(s([120,204,204,204,220,120,28,0]),t.t)
B.O=A.a(s([252,102,102,124,108,102,230,0]),t.t)
B.ag=A.a(s([120,204,224,112,28,204,120,0]),t.t)
B.dz=A.a(s([252,180,48,48,48,48,120,0]),t.t)
B.aJ=A.a(s([204,204,204,204,204,204,252,0]),t.t)
B.a1=A.a(s([204,204,204,204,204,120,48,0]),t.t)
B.cP=A.a(s([198,198,198,214,254,238,198,0]),t.t)
B.cJ=A.a(s([198,198,108,56,56,108,198,0]),t.t)
B.a3=A.a(s([204,204,204,120,48,48,120,0]),t.t)
B.S=A.a(s([254,198,140,24,50,102,254,0]),t.t)
B.bw=A.a(s([120,96,96,96,96,96,120,0]),t.t)
B.cB=A.a(s([192,96,48,24,12,6,2,0]),t.t)
B.by=A.a(s([120,24,24,24,24,24,120,0]),t.t)
B.dp=A.a(s([16,56,108,198,0,0,0,0]),t.t)
B.N=A.a(s([0,0,0,0,0,0,0,255]),t.t)
B.aK=A.a(s([48,48,24,0,0,0,0,0]),t.t)
B.df=A.a(s([0,0,120,12,124,204,118,0]),t.t)
B.cf=A.a(s([224,96,96,124,102,102,220,0]),t.t)
B.cI=A.a(s([0,0,120,204,192,204,120,0]),t.t)
B.b5=A.a(s([28,12,12,124,204,204,118,0]),t.t)
B.ds=A.a(s([0,0,120,204,252,192,120,0]),t.t)
B.aP=A.a(s([56,108,96,240,96,96,240,0]),t.t)
B.cF=A.a(s([0,0,118,204,204,124,12,248]),t.t)
B.aA=A.a(s([224,96,108,118,102,102,230,0]),t.t)
B.cv=A.a(s([48,0,112,48,48,48,120,0]),t.t)
B.bJ=A.a(s([12,0,12,12,12,204,204,120]),t.t)
B.bc=A.a(s([224,96,102,108,120,108,230,0]),t.t)
B.bL=A.a(s([112,48,48,48,48,48,120,0]),t.t)
B.bt=A.a(s([0,0,204,254,254,214,198,0]),t.t)
B.bM=A.a(s([0,0,248,204,204,204,204,0]),t.t)
B.bf=A.a(s([0,0,120,204,204,204,120,0]),t.t)
B.dw=A.a(s([0,0,220,102,102,124,96,240]),t.t)
B.dt=A.a(s([0,0,118,204,204,124,12,30]),t.t)
B.bq=A.a(s([0,0,220,118,102,96,240,0]),t.t)
B.cZ=A.a(s([0,0,124,192,120,12,248,0]),t.t)
B.cS=A.a(s([16,48,124,48,48,52,24,0]),t.t)
B.c9=A.a(s([0,0,204,204,204,204,118,0]),t.t)
B.b3=A.a(s([0,0,204,204,204,120,48,0]),t.t)
B.bj=A.a(s([0,0,198,214,254,254,108,0]),t.t)
B.bH=A.a(s([0,0,198,108,56,108,198,0]),t.t)
B.dC=A.a(s([0,0,204,204,204,124,12,248]),t.t)
B.dd=A.a(s([0,0,252,152,48,100,252,0]),t.t)
B.b9=A.a(s([28,48,48,224,48,48,28,0]),t.t)
B.cY=A.a(s([24,24,24,0,24,24,24,0]),t.t)
B.aE=A.a(s([224,48,48,28,48,48,224,0]),t.t)
B.dM=A.a(s([118,220,0,0,0,0,0,0]),t.t)
B.b2=A.a(s([0,16,56,108,198,198,254,0]),t.t)
B.av=A.a(s([120,204,192,204,120,24,12,120]),t.t)
B.db=A.a(s([0,204,0,204,204,204,126,0]),t.t)
B.dB=A.a(s([28,0,120,204,252,192,120,0]),t.t)
B.c2=A.a(s([126,195,60,6,62,102,63,0]),t.t)
B.ai=A.a(s([204,0,120,12,124,204,126,0]),t.t)
B.b6=A.a(s([224,0,120,12,124,204,126,0]),t.t)
B.a8=A.a(s([48,48,120,12,124,204,126,0]),t.t)
B.bm=A.a(s([0,0,120,192,192,120,12,56]),t.t)
B.dk=A.a(s([126,195,60,102,126,96,60,0]),t.t)
B.aN=A.a(s([204,0,120,204,252,192,120,0]),t.t)
B.d_=A.a(s([224,0,120,204,252,192,120,0]),t.t)
B.dc=A.a(s([204,0,112,48,48,48,120,0]),t.t)
B.cQ=A.a(s([124,198,56,24,24,24,60,0]),t.t)
B.aZ=A.a(s([224,0,112,48,48,48,120,0]),t.t)
B.dH=A.a(s([198,56,108,198,254,198,198,0]),t.t)
B.cX=A.a(s([48,48,0,120,204,252,204,0]),t.t)
B.bE=A.a(s([28,0,252,96,120,96,252,0]),t.t)
B.dA=A.a(s([0,0,127,12,127,204,127,0]),t.t)
B.aS=A.a(s([62,108,204,254,204,204,206,0]),t.t)
B.du=A.a(s([120,204,0,120,204,204,120,0]),t.t)
B.ae=A.a(s([0,204,0,120,204,204,120,0]),t.t)
B.dJ=A.a(s([0,224,0,120,204,204,120,0]),t.t)
B.aQ=A.a(s([120,204,0,204,204,204,126,0]),t.t)
B.cT=A.a(s([0,224,0,204,204,204,126,0]),t.t)
B.ay=A.a(s([0,204,0,204,204,124,12,248]),t.t)
B.ak=A.a(s([195,24,60,102,102,60,24,0]),t.t)
B.d5=A.a(s([204,0,204,204,204,204,120,0]),t.t)
B.Z=A.a(s([24,24,126,192,192,126,24,24]),t.t)
B.aH=A.a(s([56,108,100,240,96,230,252,0]),t.t)
B.b0=A.a(s([204,204,120,252,48,252,48,48]),t.t)
B.dg=A.a(s([248,204,204,250,198,207,198,199]),t.t)
B.bP=A.a(s([14,27,24,60,24,24,216,112]),t.t)
B.aD=A.a(s([28,0,120,12,124,204,126,0]),t.t)
B.ce=A.a(s([56,0,112,48,48,48,120,0]),t.t)
B.aG=A.a(s([0,28,0,120,204,204,120,0]),t.t)
B.cy=A.a(s([0,28,0,204,204,204,126,0]),t.t)
B.aW=A.a(s([0,248,0,248,204,204,204,0]),t.t)
B.cO=A.a(s([252,0,204,236,252,220,204,0]),t.t)
B.af=A.a(s([60,108,108,62,0,126,0,0]),t.t)
B.cb=A.a(s([56,108,108,56,0,124,0,0]),t.t)
B.d6=A.a(s([48,0,48,96,192,204,120,0]),t.t)
B.aY=A.a(s([0,0,0,252,192,192,0,0]),t.t)
B.aF=A.a(s([0,0,0,252,12,12,0,0]),t.t)
B.d0=A.a(s([195,198,204,222,51,102,204,15]),t.t)
B.ax=A.a(s([195,198,204,219,55,111,207,3]),t.t)
B.bS=A.a(s([24,24,0,24,24,24,24,0]),t.t)
B.bR=A.a(s([0,51,102,204,102,51,0,0]),t.t)
B.bb=A.a(s([0,204,102,51,102,204,0,0]),t.t)
B.cA=A.a(s([34,136,34,136,34,136,34,136]),t.t)
B.dv=A.a(s([85,170,85,170,85,170,85,170]),t.t)
B.bK=A.a(s([219,119,219,238,219,119,219,238]),t.t)
B.b1=A.a(s([24,24,24,24,24,24,24,24]),t.t)
B.aX=A.a(s([24,24,24,24,248,24,24,24]),t.t)
B.bZ=A.a(s([24,24,248,24,248,24,24,24]),t.t)
B.dL=A.a(s([54,54,54,54,246,54,54,54]),t.t)
B.cm=A.a(s([0,0,0,0,254,54,54,54]),t.t)
B.aT=A.a(s([0,0,248,24,248,24,24,24]),t.t)
B.ac=A.a(s([54,54,246,6,246,54,54,54]),t.t)
B.cs=A.a(s([54,54,54,54,54,54,54,54]),t.t)
B.ca=A.a(s([0,0,254,6,246,54,54,54]),t.t)
B.cw=A.a(s([54,54,246,6,254,0,0,0]),t.t)
B.aq=A.a(s([54,54,54,54,254,0,0,0]),t.t)
B.a2=A.a(s([24,24,248,24,248,0,0,0]),t.t)
B.a7=A.a(s([0,0,0,0,248,24,24,24]),t.t)
B.a0=A.a(s([24,24,24,24,31,0,0,0]),t.t)
B.bX=A.a(s([24,24,24,24,255,0,0,0]),t.t)
B.bo=A.a(s([0,0,0,0,255,24,24,24]),t.t)
B.d4=A.a(s([24,24,24,24,31,24,24,24]),t.t)
B.bV=A.a(s([0,0,0,0,255,0,0,0]),t.t)
B.ct=A.a(s([24,24,24,24,255,24,24,24]),t.t)
B.cE=A.a(s([24,24,31,24,31,24,24,24]),t.t)
B.bd=A.a(s([54,54,54,54,55,54,54,54]),t.t)
B.dr=A.a(s([54,54,55,48,63,0,0,0]),t.t)
B.dj=A.a(s([0,0,63,48,55,54,54,54]),t.t)
B.bI=A.a(s([54,54,247,0,255,0,0,0]),t.t)
B.bx=A.a(s([0,0,255,0,247,54,54,54]),t.t)
B.aV=A.a(s([54,54,55,48,55,54,54,54]),t.t)
B.aU=A.a(s([0,0,255,0,255,0,0,0]),t.t)
B.dD=A.a(s([54,54,247,0,247,54,54,54]),t.t)
B.cK=A.a(s([24,24,255,0,255,0,0,0]),t.t)
B.L=A.a(s([54,54,54,54,255,0,0,0]),t.t)
B.dx=A.a(s([0,0,255,0,255,24,24,24]),t.t)
B.c4=A.a(s([0,0,0,0,255,54,54,54]),t.t)
B.cn=A.a(s([54,54,54,54,63,0,0,0]),t.t)
B.bs=A.a(s([24,24,31,24,31,0,0,0]),t.t)
B.ch=A.a(s([0,0,31,24,31,24,24,24]),t.t)
B.cH=A.a(s([0,0,0,0,63,54,54,54]),t.t)
B.cN=A.a(s([54,54,54,54,255,54,54,54]),t.t)
B.bN=A.a(s([24,24,255,24,255,24,24,24]),t.t)
B.dh=A.a(s([24,24,24,24,248,0,0,0]),t.t)
B.b8=A.a(s([0,0,0,0,31,24,24,24]),t.t)
B.c5=A.a(s([255,255,255,255,255,255,255,255]),t.t)
B.c8=A.a(s([0,0,0,0,255,255,255,255]),t.t)
B.bi=A.a(s([240,240,240,240,240,240,240,240]),t.t)
B.cp=A.a(s([15,15,15,15,15,15,15,15]),t.t)
B.d3=A.a(s([255,255,255,255,0,0,0,0]),t.t)
B.dK=A.a(s([0,0,118,220,200,220,118,0]),t.t)
B.dm=A.a(s([0,120,204,248,204,248,192,192]),t.t)
B.ao=A.a(s([0,252,204,192,192,192,192,0]),t.t)
B.c7=A.a(s([0,254,108,108,108,108,108,0]),t.t)
B.di=A.a(s([252,204,96,48,96,204,252,0]),t.t)
B.bl=A.a(s([0,0,126,216,216,216,112,0]),t.t)
B.br=A.a(s([0,102,102,102,102,124,96,192]),t.t)
B.cC=A.a(s([0,118,220,24,24,24,24,0]),t.t)
B.ah=A.a(s([252,48,120,204,204,120,48,252]),t.t)
B.aI=A.a(s([56,108,198,254,198,108,56,0]),t.t)
B.al=A.a(s([56,108,198,198,108,108,238,0]),t.t)
B.M=A.a(s([28,48,24,124,204,204,120,0]),t.t)
B.dy=A.a(s([0,0,126,219,219,126,0,0]),t.t)
B.bn=A.a(s([6,12,126,219,219,126,96,192]),t.t)
B.aa=A.a(s([56,96,192,248,192,96,56,0]),t.t)
B.cj=A.a(s([120,204,204,204,204,204,204,0]),t.t)
B.cL=A.a(s([0,252,0,252,0,252,0,0]),t.t)
B.a6=A.a(s([48,48,252,48,48,0,252,0]),t.t)
B.ba=A.a(s([96,48,24,48,96,0,252,0]),t.t)
B.cV=A.a(s([24,48,96,48,24,0,252,0]),t.t)
B.bh=A.a(s([14,27,27,24,24,24,24,24]),t.t)
B.da=A.a(s([24,24,24,24,24,216,216,112]),t.t)
B.cd=A.a(s([48,48,0,252,0,48,48,0]),t.t)
B.R=A.a(s([0,118,220,0,118,220,0,0]),t.t)
B.cz=A.a(s([56,108,108,56,0,0,0,0]),t.t)
B.T=A.a(s([0,0,0,24,24,0,0,0]),t.t)
B.dn=A.a(s([0,0,0,0,24,0,0,0]),t.t)
B.W=A.a(s([15,12,12,12,236,108,60,28]),t.t)
B.bW=A.a(s([120,108,108,108,108,0,0,0]),t.t)
B.au=A.a(s([112,24,48,96,120,0,0,0]),t.t)
B.d2=A.a(s([0,0,60,60,60,60,0,0]),t.t)
B.dO=new A.bt(["\u263a",B.d9,"\u263b",B.ab,"\u2665",B.dG,"\u2666",B.c6,"\u2663",B.b4,"\u2660",B.bg,"\u2022",B.az,"\u25d8",B.aC,"\u25cb",B.aO,"\u25d9",B.cU,"\u2642",B.dF,"\u2640",B.dE,"\u266a",B.cR,"\u266b",B.V,"\u263c",B.a_,"\u25ba",B.aw,"\u25c4",B.bC,"\u2195",B.ck,"\u203c",B.cg,"\xb6",B.cq,"\xa7",B.cr,"\u25ac",B.bQ,"\u21a8",B.bT,"\u2191",B.Q,"\u2193",B.de,"\u2192",B.d7,"\u2190",B.at,"\u221f",B.bY,"\u2194",B.bv,"\u25b2",B.a9,"\u25bc",B.bU," ",B.b_,"!",B.bD,'"',B.Y,"#",B.an,"$",B.c1,"%",B.P,"&",B.cD,"'",B.am,"(",B.U,")",B.bz,"*",B.cu,"+",B.dN,",",B.c3,"-",B.bu,".",B.ci,"/",B.a4,"0",B.b7,"1",B.cl,"2",B.c_,"3",B.dI,"4",B.bB,"5",B.d8,"6",B.dq,"7",B.c0,"8",B.cx,"9",B.be,":",B.d1,";",B.aR,"<",B.bA,"=",B.bp,">",B.aB,"?",B.ar,"@",B.dl,"A",B.cc,"B",B.aL,"C",B.ad,"D",B.a5,"E",B.aj,"F",B.co,"G",B.ap,"H",B.as,"I",B.cM,"J",B.bO,"K",B.bG,"L",B.bF,"M",B.aM,"N",B.X,"O",B.cW,"P",B.bk,"Q",B.cG,"R",B.O,"S",B.ag,"T",B.dz,"U",B.aJ,"V",B.a1,"W",B.cP,"X",B.cJ,"Y",B.a3,"Z",B.S,"[",B.bw,"\\",B.cB,"]",B.by,"^",B.dp,"_",B.N,"`",B.aK,"a",B.df,"b",B.cf,"c",B.cI,"d",B.b5,"e",B.ds,"f",B.aP,"g",B.cF,"h",B.aA,"i",B.cv,"j",B.bJ,"k",B.bc,"l",B.bL,"m",B.bt,"n",B.bM,"o",B.bf,"p",B.dw,"q",B.dt,"r",B.bq,"s",B.cZ,"t",B.cS,"u",B.c9,"v",B.b3,"w",B.bj,"x",B.bH,"y",B.dC,"z",B.dd,"{",B.b9,"|",B.cY,"}",B.aE,"~",B.dM,"\u2302",B.b2,"\xc7",B.av,"\xfc",B.db,"\xe9",B.dB,"\xe2",B.c2,"\xe4",B.ai,"\xe0",B.b6,"\xe5",B.a8,"\xe7",B.bm,"\xea",B.dk,"\xeb",B.aN,"\xe8",B.d_,"\xef",B.dc,"\xee",B.cQ,"\xec",B.aZ,"\xc4",B.dH,"\xc5",B.cX,"\xc9",B.bE,"\xe6",B.dA,"\xc6",B.aS,"\xf4",B.du,"\xf6",B.ae,"\xf2",B.dJ,"\xfb",B.aQ,"\xf9",B.cT,"\xff",B.ay,"\xd6",B.ak,"\xdc",B.d5,"\xa2",B.Z,"\xa3",B.aH,"\xa5",B.b0,"\u20a7",B.dg,"\u0192",B.bP,"\xe1",B.aD,"\xed",B.ce,"\xf3",B.aG,"\xfa",B.cy,"\xf1",B.aW,"\xd1",B.cO,"\xaa",B.af,"\xba",B.cb,"\xbf",B.d6,"\u2310",B.aY,"\xac",B.aF,"\xbd",B.d0,"\xbc",B.ax,"\xa1",B.bS,"\xab",B.bR,"\xbb",B.bb,"\u2591",B.cA,"\u2592",B.dv,"\u2593",B.bK,"\u2502",B.b1,"\u2524",B.aX,"\u2561",B.bZ,"\u2562",B.dL,"\u2556",B.cm,"\u2555",B.aT,"\u2563",B.ac,"\u2551",B.cs,"\u2557",B.ca,"\u255d",B.cw,"\u255c",B.aq,"\u255b",B.a2,"\u2510",B.a7,"\u2514",B.a0,"\u2534",B.bX,"\u252c",B.bo,"\u251c",B.d4,"\u2500",B.bV,"\u253c",B.ct,"\u255e",B.cE,"\u255f",B.bd,"\u255a",B.dr,"\u2554",B.dj,"\u2569",B.bI,"\u2566",B.bx,"\u2560",B.aV,"\u2550",B.aU,"\u256c",B.dD,"\u2567",B.cK,"\u2568",B.L,"\u2564",B.dx,"\u2565",B.c4,"\u2559",B.cn,"\u2558",B.bs,"\u2552",B.ch,"\u2553",B.cH,"\u256b",B.cN,"\u256a",B.bN,"\u2518",B.dh,"\u250c",B.b8,"\u2588",B.c5,"\u2584",B.c8,"\u258c",B.bi,"\u2590",B.cp,"\u2580",B.d3,"\u03b1",B.dK,"\xdf",B.dm,"\u0393",B.ao,"\u03c0",B.c7,"\u03a3",B.di,"\u03c3",B.bl,"\xb5",B.br,"\u03c4",B.cC,"\u03a6",B.ah,"\u0398",B.aI,"\u03a9",B.al,"\u03b4",B.M,"\u221e",B.dy,"\u03c6",B.bn,"\u03b5",B.aa,"\u2229",B.cj,"\u2261",B.cL,"\xb1",B.a6,"\u2265",B.ba,"\u2264",B.cV,"\u2320",B.bh,"\u2321",B.da,"\xf7",B.cd,"\u2248",B.R,"\xb0",B.cz,"\u2219",B.T,"\xb7",B.dn,"\u221a",B.W,"\u207f",B.bW,"\xb2",B.au,"\u25a0",B.d2],A.e2("bt<A,i<c>>"))
B.t=new A.E("replace")
B.dP=new A.E("inverse")
B.dQ=new A.E("over")
B.dR=new A.E("under")
B.dS=new A.E("stain")
B.dT=new A.E("delete")
B.dU=new A.E("maskDestination")
B.dV=new A.E("maskSource")
B.d=new A.Z("o")
B.i=new A.Z("x")
B.c=new A.Z("empty")
B.e=new A.ao("ready")
B.k=new A.ao("awaitingKey")
B.v=new A.ao("awaitingString")
B.w=new A.ao("awaitingMouseClick")
B.dW=A.C("ix")
B.dX=A.C("iy")
B.dY=A.C("fs")
B.dZ=A.C("ft")
B.e_=A.C("fv")
B.e0=A.C("fw")
B.e1=A.C("fx")
B.e2=A.C("e")
B.e3=A.C("fQ")
B.e4=A.C("cM")
B.e5=A.C("fR")
B.e6=A.C("fS")})();(function staticFields(){$.d5=null
$.w=A.a([],t.f)
$.ek=null
$.ed=null
$.ec=null
$.eX=null
$.eQ=null
$.f_=null
$.dr=null
$.dw=null
$.e4=null
$.b6=A.a([],A.e2("o<i<e>?>"))
$.as=null
$.bh=null
$.bi=null
$.dX=!1
$.f=B.b})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"iz","dA",()=>A.ih("_$dart_dartClosure"))
s($,"iU","fe",()=>B.b.b1(new A.dy()))
s($,"iH","f4",()=>A.K(A.cL({
toString:function(){return"$receiver$"}})))
s($,"iI","f5",()=>A.K(A.cL({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"iJ","f6",()=>A.K(A.cL(null)))
s($,"iK","f7",()=>A.K(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"iN","fa",()=>A.K(A.cL(void 0)))
s($,"iO","fb",()=>A.K(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"iM","f9",()=>A.K(A.ep(null)))
s($,"iL","f8",()=>A.K(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"iQ","fd",()=>A.K(A.ep(void 0)))
s($,"iP","fc",()=>A.K(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"iR","e8",()=>A.fT())
s($,"iB","dB",()=>$.fe())
s($,"iS","dC",()=>A.e7(B.e2))
s($,"iG","f3",()=>A.dJ(8,0,t.S))
s($,"iF","f2",()=>A.dJ(8,255,t.S))
s($,"iV","ff",()=>B.F)
s($,"iW","N",()=>{var r=A.hv(A.ii(A.it(),"document"),"getElementById","four")
r.toString
r=A.fN("#1f1f1f",31,r,15)
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.bA,ArrayBufferView:A.aR,DataView:A.bB,Float32Array:A.bC,Float64Array:A.bD,Int16Array:A.bE,Int32Array:A.bF,Int8Array:A.bG,Uint16Array:A.bH,Uint32Array:A.bI,Uint8ClampedArray:A.aS,CanvasPixelArray:A.aS,Uint8Array:A.bJ})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.ak.$nativeSuperclassTag="ArrayBufferView"
A.b2.$nativeSuperclassTag="ArrayBufferView"
A.b3.$nativeSuperclassTag="ArrayBufferView"
A.aP.$nativeSuperclassTag="ArrayBufferView"
A.b4.$nativeSuperclassTag="ArrayBufferView"
A.b5.$nativeSuperclassTag="ArrayBufferView"
A.aQ.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.c6
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=four.js.map
