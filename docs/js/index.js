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
if(a[b]!==s){A.ig(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.dN(b)
return new s(c,this)}:function(){if(s===null)s=A.dN(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.dN(a).prototype
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
dS(a,b,c,d){return{i:a,p:b,e:c,x:d}},
dP(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.dQ==null){A.i8()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.ea("Return interceptor for "+A.n(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.cU
if(o==null)o=$.cU=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.ic(a)
if(p!=null)return p
if(typeof a=="function")return B.A
s=Object.getPrototypeOf(a)
if(s==null)return B.n
if(s===Object.prototype)return B.n
if(typeof q=="function"){o=$.cU
if(o==null)o=$.cU=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.j,enumerable:false,writable:true,configurable:true})
return B.j}return B.j},
e2(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
fl(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.e2(r))break;++b}return b},
fm(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.c(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.e2(q))break}return b},
a3(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aw.prototype
return J.bp.prototype}if(typeof a=="string")return J.V.prototype
if(a==null)return J.ax.prototype
if(typeof a=="boolean")return J.bo.prototype
if(Array.isArray(a))return J.p.prototype
if(typeof a!="object"){if(typeof a=="function")return J.N.prototype
if(typeof a=="symbol")return J.aA.prototype
if(typeof a=="bigint")return J.ay.prototype
return a}if(a instanceof A.e)return a
return J.dP(a)},
eH(a){if(typeof a=="string")return J.V.prototype
if(a==null)return a
if(Array.isArray(a))return J.p.prototype
if(typeof a!="object"){if(typeof a=="function")return J.N.prototype
if(typeof a=="symbol")return J.aA.prototype
if(typeof a=="bigint")return J.ay.prototype
return a}if(a instanceof A.e)return a
return J.dP(a)},
i2(a){if(a==null)return a
if(Array.isArray(a))return J.p.prototype
if(typeof a!="object"){if(typeof a=="function")return J.N.prototype
if(typeof a=="symbol")return J.aA.prototype
if(typeof a=="bigint")return J.ay.prototype
return a}if(a instanceof A.e)return a
return J.dP(a)},
i3(a){if(typeof a=="number")return J.a8.prototype
if(a==null)return a
if(!(a instanceof A.e))return J.Y.prototype
return a},
i4(a){if(typeof a=="string")return J.V.prototype
if(a==null)return a
if(!(a instanceof A.e))return J.Y.prototype
return a},
aq(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.a3(a).A(a,b)},
G(a){return J.a3(a).gk(a)},
f1(a){return J.i2(a).gv(a)},
dV(a){return J.eH(a).gl(a)},
f2(a){return J.a3(a).gm(a)},
dW(a){return J.i3(a).bI(a)},
bd(a){return J.a3(a).h(a)},
f3(a){return J.i4(a).aX(a)},
bn:function bn(){},
bo:function bo(){},
ax:function ax(){},
az:function az(){},
O:function O(){},
bD:function bD(){},
Y:function Y(){},
N:function N(){},
ay:function ay(){},
aA:function aA(){},
p:function p(a){this.$ti=a},
c5:function c5(a){this.$ti=a},
be:function be(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
a8:function a8(){},
aw:function aw(){},
bp:function bp(){},
V:function V(){}},A={du:function du(){},
fo(a){return new A.aC("Field '"+a+"' has not been initialized.")},
P(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
dC(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
dM(a,b,c){return a},
dR(a){var s,r
for(s=$.x.length,r=0;r<s;++r)if(a===$.x[r])return!0
return!1},
fi(){return new A.X("No element")},
aC:function aC(a){this.a=a},
dm:function dm(){},
ch:function ch(){},
as:function as(){},
aD:function aD(){},
aa:function aa(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
at:function at(a){this.$ti=a},
bk:function bk(){},
av:function av(){},
eO(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
iF(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
n(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.bd(a)
return s},
ae(a){var s,r=$.e3
if(r==null)r=$.e3=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
cb(a){var s,r,q,p
if(a instanceof A.e)return A.w(A.bb(a),null)
s=J.a3(a)
if(s===B.y||s===B.B||t.A.b(a)){r=B.k(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.w(A.bb(a),null)},
e4(a){if(a==null||typeof a=="number"||A.dI(a))return J.bd(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.T)return a.h(0)
if(a instanceof A.aj)return a.aH(!0)
return"Instance of '"+A.cb(a)+"'"},
fs(a){var s=a.$thrownJsError
if(s==null)return null
return A.a4(s)},
ft(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.r(a,s)
a.$thrownJsError=s
s.stack=""}},
c(a,b){if(a==null)J.dV(a)
throw A.d(A.eF(a,b))},
eF(a,b){var s,r="index",q=null
if(!A.et(b))return new A.D(!0,b,r,q)
s=J.dV(a)
if(b<0||b>=s)return A.ds(b,s,a,q,r)
return new A.aK(q,q,!0,b,r,"Value not in range")},
dL(a){return new A.D(!0,a,null,null)},
d(a){return A.r(a,new Error())},
r(a,b){var s
if(a==null)a=new A.I()
b.dartException=a
s=A.ih
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
ih(){return J.bd(this.dartException)},
c_(a,b){throw A.r(a,b==null?new Error():b)},
bc(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.c_(A.hm(a,b,c),s)},
hm(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.aN("'"+s+"': Cannot "+o+" "+l+k+n)},
bZ(a){throw A.d(A.a7(a))},
J(a){var s,r,q,p,o,n
a=A.ie(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.a([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.cz(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
cA(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
e9(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
dv(a,b){var s=b==null,r=s?null:b.method
return new A.bq(a,r,s?null:b.receiver)},
ap(a){if(a==null)return new A.c8(a)
if(a instanceof A.au)return A.S(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.S(a,a.dartException)
return A.hS(a)},
S(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
hS(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.a.bp(r,16)&8191)===10)switch(q){case 438:return A.S(a,A.dv(A.n(s)+" (Error "+q+")",null))
case 445:case 5007:A.n(s)
return A.S(a,new A.aJ())}}if(a instanceof TypeError){p=$.eR()
o=$.eS()
n=$.eT()
m=$.eU()
l=$.eX()
k=$.eY()
j=$.eW()
$.eV()
i=$.f_()
h=$.eZ()
g=p.u(s)
if(g!=null)return A.S(a,A.dv(s,g))
else{g=o.u(s)
if(g!=null){g.method="call"
return A.S(a,A.dv(s,g))}else if(n.u(s)!=null||m.u(s)!=null||l.u(s)!=null||k.u(s)!=null||j.u(s)!=null||m.u(s)!=null||i.u(s)!=null||h.u(s)!=null)return A.S(a,new A.aJ())}return A.S(a,new A.bI(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.aM()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.S(a,new A.D(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.aM()
return a},
a4(a){var s
if(a instanceof A.au)return a.b
if(a==null)return new A.b_(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.b_(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
dT(a){if(a==null)return J.G(a)
if(typeof a=="object")return A.ae(a)
return J.G(a)},
hZ(a){if(typeof a=="number")return B.z.gk(a)
if(a instanceof A.bW)return A.ae(a)
if(a instanceof A.aj)return a.gk(a)
return A.dT(a)},
eG(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=a.length
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
if(m==null)o[q]=b.S(q,p)
else m.b=p}else if(typeof q=="number"&&(q&0x3fffffff)===q){l=b.c
if(l==null){n=Object.create(null)
n["<non-identifier-key>"]=n
delete n["<non-identifier-key>"]
b.c=n
l=n}m=l[q]
if(m==null)l[q]=b.S(q,p)
else m.b=p}else{k=b.d
if(k==null){n=Object.create(null)
n["<non-identifier-key>"]=n
delete n["<non-identifier-key>"]
b.d=n
k=n}j=b.ah(q)
i=k[j]
if(i==null)k[j]=[b.S(q,p)]
else{r=b.ai(i,q)
if(r>=0)i[r].b=p
else i.push(b.S(q,p))}}}return b},
hv(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(new A.cI("Unsupported number of arguments for wrapped closure"))},
bY(a,b){var s=a.$identity
if(!!s)return s
s=A.i_(a,b)
a.$identity=s
return s},
i_(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.hv)},
fa(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.ci().constructor.prototype):Object.create(new A.ar(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.e1(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.f6(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.e1(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
f6(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.f4)}throw A.d("Error in functionType of tearoff")},
f7(a,b,c,d){var s=A.e0
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
e1(a,b,c,d){if(c)return A.f9(a,b,d)
return A.f7(b.length,d,a,b)},
f8(a,b,c,d){var s=A.e0,r=A.f5
switch(b?-1:a){case 0:throw A.d(new A.bE("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
f9(a,b,c){var s,r
if($.dZ==null)$.dZ=A.dY("interceptor")
if($.e_==null)$.e_=A.dY("receiver")
s=b.length
r=A.f8(s,c,a,b)
return r},
dN(a){return A.fa(a)},
f4(a,b){return A.b6(v.typeUniverse,A.bb(a.a),b)},
e0(a){return a.a},
f5(a){return a.b},
dY(a){var s,r,q,p=new A.ar("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.d(A.a6("Field name "+a+" not found.",null))},
i5(a){return v.getIsolateTag(a)},
ic(a){var s,r,q,p,o,n=$.eJ.$1(a),m=$.da[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.de[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.eA.$2(a,n)
if(q!=null){m=$.da[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.de[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.dl(s)
$.da[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.de[n]=s
return s}if(p==="-"){o=A.dl(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.eL(a,s)
if(p==="*")throw A.d(A.ea(n))
if(v.leafTags[n]===true){o=A.dl(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.eL(a,s)},
eL(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.dS(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
dl(a){return J.dS(a,!1,null,!!a.$iv)},
id(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.dl(s)
else return J.dS(s,c,null,null)},
i8(){if(!0===$.dQ)return
$.dQ=!0
A.i9()},
i9(){var s,r,q,p,o,n,m,l
$.da=Object.create(null)
$.de=Object.create(null)
A.i7()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.eM.$1(o)
if(n!=null){m=A.id(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
i7(){var s,r,q,p,o,n,m=B.q()
m=A.an(B.r,A.an(B.t,A.an(B.l,A.an(B.l,A.an(B.u,A.an(B.v,A.an(B.w(B.k),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.eJ=new A.db(p)
$.eA=new A.dc(o)
$.eM=new A.dd(n)},
an(a,b){return a(b)||b},
i0(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
fn(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.d(new A.c3("Illegal RegExp pattern ("+String(o)+")",a))},
ie(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
B:function B(a,b){this.a=a
this.b=b},
bi:function bi(){},
bl:function bl(a,b){this.a=a
this.$ti=b},
cz:function cz(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aJ:function aJ(){},
bq:function bq(a,b,c){this.a=a
this.b=b
this.c=c},
bI:function bI(a){this.a=a},
c8:function c8(a){this.a=a},
au:function au(a,b){this.a=a
this.b=b},
b_:function b_(a){this.a=a
this.b=null},
T:function T(){},
c0:function c0(){},
c1:function c1(){},
cn:function cn(){},
ci:function ci(){},
ar:function ar(a,b){this.a=a
this.b=b},
bE:function bE(a){this.a=a},
W:function W(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
c6:function c6(a,b){this.a=a
this.b=b
this.c=null},
br:function br(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
aB:function aB(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
db:function db(a){this.a=a},
dc:function dc(a){this.a=a},
dd:function dd(a){this.a=a},
aj:function aj(){},
bT:function bT(){},
c4:function c4(a,b){var _=this
_.a=a
_.b=b
_.e=_.c=null},
cW:function cW(a){this.b=a},
a0(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.eF(b,a))},
bs:function bs(){},
aH:function aH(){},
bt:function bt(){},
ac:function ac(){},
aF:function aF(){},
aG:function aG(){},
bu:function bu(){},
bv:function bv(){},
bw:function bw(){},
bx:function bx(){},
by:function by(){},
bz:function bz(){},
bA:function bA(){},
aI:function aI(){},
bB:function bB(){},
aU:function aU(){},
aV:function aV(){},
aW:function aW(){},
aX:function aX(){},
dz(a,b){var s=b.c
return s==null?b.c=A.b4(a,"H",[b.x]):s},
e6(a){var s=a.w
if(s===6||s===7)return A.e6(a.x)
return s===11||s===12},
fw(a){return a.as},
dO(a){return A.d2(v.typeUniverse,a,!1)},
a1(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.a1(a1,s,a3,a4)
if(r===s)return a2
return A.ek(a1,r,!0)
case 7:s=a2.x
r=A.a1(a1,s,a3,a4)
if(r===s)return a2
return A.ej(a1,r,!0)
case 8:q=a2.y
p=A.am(a1,q,a3,a4)
if(p===q)return a2
return A.b4(a1,a2.x,p)
case 9:o=a2.x
n=A.a1(a1,o,a3,a4)
m=a2.y
l=A.am(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.dE(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.am(a1,j,a3,a4)
if(i===j)return a2
return A.el(a1,k,i)
case 11:h=a2.x
g=A.a1(a1,h,a3,a4)
f=a2.y
e=A.hP(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.ei(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.am(a1,d,a3,a4)
o=a2.x
n=A.a1(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.dF(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.d(A.bg("Attempted to substitute unexpected RTI kind "+a0))}},
am(a,b,c,d){var s,r,q,p,o=b.length,n=A.d3(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.a1(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
hQ(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.d3(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.a1(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
hP(a,b,c,d){var s,r=b.a,q=A.am(a,r,c,d),p=b.b,o=A.am(a,p,c,d),n=b.c,m=A.hQ(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.bR()
s.a=q
s.b=o
s.c=m
return s},
a(a,b){a[v.arrayRti]=b
return a},
eD(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.i6(s)
return a.$S()}return null},
ia(a,b){var s
if(A.e6(b))if(a instanceof A.T){s=A.eD(a)
if(s!=null)return s}return A.bb(a)},
bb(a){if(a instanceof A.e)return A.b8(a)
if(Array.isArray(a))return A.dG(a)
return A.dH(J.a3(a))},
dG(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
b8(a){var s=a.$ti
return s!=null?s:A.dH(a)},
dH(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.ht(a,s)},
ht(a,b){var s=a instanceof A.T?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.h0(v.typeUniverse,s.name)
b.$ccache=r
return r},
i6(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.d2(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
eI(a){return A.a2(A.b8(a))},
dK(a){var s
if(a instanceof A.aj)return A.i1(a.$r,a.aA())
s=a instanceof A.T?A.eD(a):null
if(s!=null)return s
if(t.R.b(a))return J.f2(a).a
if(Array.isArray(a))return A.dG(a)
return A.bb(a)},
a2(a){var s=a.r
return s==null?a.r=new A.bW(a):s},
i1(a,b){var s,r,q=b,p=q.length
if(p===0)return t.F
if(0>=p)return A.c(q,0)
s=A.b6(v.typeUniverse,A.dK(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.c(q,r)
s=A.em(v.typeUniverse,s,A.dK(q[r]))}return A.b6(v.typeUniverse,s,a)},
C(a){return A.a2(A.d2(v.typeUniverse,a,!1))},
hs(a){var s,r,q,p,o=this
if(o===t.K)return A.K(o,a,A.hA)
if(A.a5(o))return A.K(o,a,A.hE)
s=o.w
if(s===6)return A.K(o,a,A.hq)
if(s===1)return A.K(o,a,A.eu)
if(s===7)return A.K(o,a,A.hw)
if(o===t.S)r=A.et
else if(o===t.i||o===t.H)r=A.hz
else if(o===t.N)r=A.hC
else r=o===t.y?A.dI:null
if(r!=null)return A.K(o,a,r)
if(s===8){q=o.x
if(o.y.every(A.a5)){o.f="$i"+q
if(q==="h")return A.K(o,a,A.hy)
return A.K(o,a,A.hD)}}else if(s===10){p=A.i0(o.x,o.y)
return A.K(o,a,p==null?A.eu:p)}return A.K(o,a,A.ho)},
K(a,b,c){a.b=c
return a.b(b)},
hr(a){var s=this,r=A.hn
if(A.a5(s))r=A.hd
else if(s===t.K)r=A.ha
else if(A.ao(s))r=A.hp
if(s===t.S)r=A.h6
else if(s===t.B)r=A.h7
else if(s===t.N)r=A.hb
else if(s===t.x)r=A.hc
else if(s===t.y)r=A.h2
else if(s===t.u)r=A.h3
else if(s===t.H)r=A.h8
else if(s===t.J)r=A.h9
else if(s===t.i)r=A.h4
else if(s===t.I)r=A.h5
s.a=r
return s.a(a)},
ho(a){var s=this
if(a==null)return A.ao(s)
return A.ib(v.typeUniverse,A.ia(a,s),s)},
hq(a){if(a==null)return!0
return this.x.b(a)},
hD(a){var s,r=this
if(a==null)return A.ao(r)
s=r.f
if(a instanceof A.e)return!!a[s]
return!!J.a3(a)[s]},
hy(a){var s,r=this
if(a==null)return A.ao(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.e)return!!a[s]
return!!J.a3(a)[s]},
hn(a){var s=this
if(a==null){if(A.ao(s))return a}else if(s.b(a))return a
throw A.r(A.ep(a,s),new Error())},
hp(a){var s=this
if(a==null||s.b(a))return a
throw A.r(A.ep(a,s),new Error())},
ep(a,b){return new A.b2("TypeError: "+A.ec(a,A.w(b,null)))},
ec(a,b){return A.c2(a)+": type '"+A.w(A.dK(a),null)+"' is not a subtype of type '"+b+"'"},
F(a,b){return new A.b2("TypeError: "+A.ec(a,b))},
hw(a){var s=this
return s.x.b(a)||A.dz(v.typeUniverse,s).b(a)},
hA(a){return a!=null},
ha(a){if(a!=null)return a
throw A.r(A.F(a,"Object"),new Error())},
hE(a){return!0},
hd(a){return a},
eu(a){return!1},
dI(a){return!0===a||!1===a},
h2(a){if(!0===a)return!0
if(!1===a)return!1
throw A.r(A.F(a,"bool"),new Error())},
h3(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.r(A.F(a,"bool?"),new Error())},
h4(a){if(typeof a=="number")return a
throw A.r(A.F(a,"double"),new Error())},
h5(a){if(typeof a=="number")return a
if(a==null)return a
throw A.r(A.F(a,"double?"),new Error())},
et(a){return typeof a=="number"&&Math.floor(a)===a},
h6(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.r(A.F(a,"int"),new Error())},
h7(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.r(A.F(a,"int?"),new Error())},
hz(a){return typeof a=="number"},
h8(a){if(typeof a=="number")return a
throw A.r(A.F(a,"num"),new Error())},
h9(a){if(typeof a=="number")return a
if(a==null)return a
throw A.r(A.F(a,"num?"),new Error())},
hC(a){return typeof a=="string"},
hb(a){if(typeof a=="string")return a
throw A.r(A.F(a,"String"),new Error())},
hc(a){if(typeof a=="string")return a
if(a==null)return a
throw A.r(A.F(a,"String?"),new Error())},
ex(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.w(a[q],b)
return s},
hK(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.ex(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.w(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
eq(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
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
if(l===8){p=A.hR(a.x)
o=a.y
return o.length>0?p+("<"+A.ex(o,b)+">"):p}if(l===10)return A.hK(a,b)
if(l===11)return A.eq(a,b,null)
if(l===12)return A.eq(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.c(b,n)
return b[n]}return"?"},
hR(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
h1(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
h0(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.d2(a,b,!1)
else if(typeof m=="number"){s=m
r=A.b5(a,5,"#")
q=A.d3(s)
for(p=0;p<s;++p)q[p]=r
o=A.b4(a,b,q)
n[b]=o
return o}else return m},
h_(a,b){return A.en(a.tR,b)},
fZ(a,b){return A.en(a.eT,b)},
d2(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.eg(A.ee(a,null,b,!1))
r.set(b,s)
return s},
b6(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.eg(A.ee(a,b,c,!0))
q.set(c,r)
return r},
em(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.dE(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
R(a,b){b.a=A.hr
b.b=A.hs
return b},
b5(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.z(null,null)
s.w=b
s.as=c
r=A.R(a,s)
a.eC.set(c,r)
return r},
ek(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.fX(a,b,r,c)
a.eC.set(r,s)
return s},
fX(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.a5(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.ao(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.z(null,null)
q.w=6
q.x=b
q.as=c
return A.R(a,q)},
ej(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.fV(a,b,r,c)
a.eC.set(r,s)
return s},
fV(a,b,c,d){var s,r
if(d){s=b.w
if(A.a5(b)||b===t.K)return b
else if(s===1)return A.b4(a,"H",[b])
else if(b===t.P||b===t.T)return t.O}r=new A.z(null,null)
r.w=7
r.x=b
r.as=c
return A.R(a,r)},
fY(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.z(null,null)
s.w=13
s.x=b
s.as=q
r=A.R(a,s)
a.eC.set(q,r)
return r},
b3(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
fU(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
b4(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.b3(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.z(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.R(a,r)
a.eC.set(p,q)
return q},
dE(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.b3(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.z(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.R(a,o)
a.eC.set(q,n)
return n},
el(a,b,c){var s,r,q="+"+(b+"("+A.b3(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.z(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.R(a,s)
a.eC.set(q,r)
return r},
ei(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.b3(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.b3(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.fU(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.z(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.R(a,p)
a.eC.set(r,o)
return o},
dF(a,b,c,d){var s,r=b.as+("<"+A.b3(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.fW(a,b,c,r,d)
a.eC.set(r,s)
return s},
fW(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.d3(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.a1(a,b,r,0)
m=A.am(a,c,r,0)
return A.dF(a,n,m,c!==m)}}l=new A.z(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.R(a,l)},
ee(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
eg(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.fN(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.ef(a,r,l,k,!1)
else if(q===46)r=A.ef(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.a_(a.u,a.e,k.pop()))
break
case 94:k.push(A.fY(a.u,k.pop()))
break
case 35:k.push(A.b5(a.u,5,"#"))
break
case 64:k.push(A.b5(a.u,2,"@"))
break
case 126:k.push(A.b5(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.fP(a,k)
break
case 38:A.fO(a,k)
break
case 63:p=a.u
k.push(A.ek(p,A.a_(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.ej(p,A.a_(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.fM(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.eh(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.fR(a.u,a.e,o)
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
fN(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
ef(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.h1(s,o.x)[p]
if(n==null)A.c_('No "'+p+'" in "'+A.fw(o)+'"')
d.push(A.b6(s,o,n))}else d.push(p)
return m},
fP(a,b){var s,r=a.u,q=A.ed(a,b),p=b.pop()
if(typeof p=="string")b.push(A.b4(r,p,q))
else{s=A.a_(r,a.e,p)
switch(s.w){case 11:b.push(A.dF(r,s,q,a.n))
break
default:b.push(A.dE(r,s,q))
break}}},
fM(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.ed(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.a_(p,a.e,o)
q=new A.bR()
q.a=s
q.b=n
q.c=m
b.push(A.ei(p,r,q))
return
case-4:b.push(A.el(p,b.pop(),s))
return
default:throw A.d(A.bg("Unexpected state under `()`: "+A.n(o)))}},
fO(a,b){var s=b.pop()
if(0===s){b.push(A.b5(a.u,1,"0&"))
return}if(1===s){b.push(A.b5(a.u,4,"1&"))
return}throw A.d(A.bg("Unexpected extended operation "+A.n(s)))},
ed(a,b){var s=b.splice(a.p)
A.eh(a.u,a.e,s)
a.p=b.pop()
return s},
a_(a,b,c){if(typeof c=="string")return A.b4(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.fQ(a,b,c)}else return c},
eh(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.a_(a,b,c[s])},
fR(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.a_(a,b,c[s])},
fQ(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.d(A.bg("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.d(A.bg("Bad index "+c+" for "+b.h(0)))},
ib(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.o(a,b,null,c,null)
r.set(c,s)}return s},
o(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.a5(d))return!0
s=b.w
if(s===4)return!0
if(A.a5(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.o(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.o(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.o(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.o(a,b.x,c,d,e))return!1
return A.o(a,A.dz(a,b),c,d,e)}if(s===6)return A.o(a,p,c,d,e)&&A.o(a,b.x,c,d,e)
if(q===7){if(A.o(a,b,c,d.x,e))return!0
return A.o(a,b,c,A.dz(a,d),e)}if(q===6)return A.o(a,b,c,p,e)||A.o(a,b,c,d.x,e)
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
if(!A.o(a,j,c,i,e)||!A.o(a,i,e,j,c))return!1}return A.es(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.es(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.hx(a,b,c,d,e)}if(o&&q===10)return A.hB(a,b,c,d,e)
return!1},
es(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
for(;!0;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!A.o(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
hx(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
for(;n!==m;){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.b6(a,b,r[o])
return A.eo(a,p,null,c,d.y,e)}return A.eo(a,b.y,null,c,d.y,e)},
eo(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.o(a,b[s],d,e[s],f))return!1
return!0},
hB(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.o(a,r[s],c,q[s],e))return!1
return!0},
ao(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.a5(a))if(s!==6)r=s===7&&A.ao(a.x)
return r},
a5(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
en(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
d3(a){return a>0?new Array(a):v.typeUniverse.sEA},
z:function z(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
bR:function bR(){this.c=this.b=this.a=null},
bW:function bW(a){this.a=a},
bQ:function bQ(){},
b2:function b2(a){this.a=a},
fF(){var s,r,q
if(self.scheduleImmediate!=null)return A.hU()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.bY(new A.cE(s),1)).observe(r,{childList:true})
return new A.cD(s,r,q)}else if(self.setImmediate!=null)return A.hV()
return A.hW()},
fG(a){self.scheduleImmediate(A.bY(new A.cF(a),0))},
fH(a){self.setImmediate(A.bY(new A.cG(a),0))},
fI(a){A.fS(0,a)},
e8(a,b){var s=B.a.D(a.a,1000)
return A.fT(s,b)},
fS(a,b){var s=new A.b1()
s.b3(a,b)
return s},
fT(a,b){var s=new A.b1()
s.b4(a,b)
return s},
hG(a){return new A.bJ(new A.m($.i,a.i("m<0>")),a.i("bJ<0>"))},
hh(a,b){a.$2(0,null)
b.b=!0
return b.a},
he(a,b){A.hi(a,b)},
hg(a,b){var s,r=a==null?b.$ti.c.a(a):a
if(!b.b)b.a.a0(r)
else{s=b.a
if(b.$ti.i("H<1>").b(r))s.au(r)
else s.aw(r)}},
hf(a,b){var s=A.ap(a),r=A.a4(a),q=b.a
if(b.b)q.L(new A.y(s,r))
else q.ar(new A.y(s,r))},
hi(a,b){var s,r,q=new A.d5(b),p=new A.d6(b)
if(a instanceof A.m)a.aG(q,p,t.z)
else{s=t.z
if(a instanceof A.m)a.aW(q,p,s)
else{r=new A.m($.i,t.c)
r.a=8
r.c=a
r.aG(q,p,s)}}},
hT(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.i.al(new A.d9(s))},
dr(a){var s
if(t.Q.b(a)){s=a.gR()
if(s!=null)return s}return B.e},
hu(a,b){if($.i===B.b)return null
return null},
cM(a,b,c){var s,r,q,p={},o=p.a=a
for(;s=o.a,(s&4)!==0;){o=o.c
p.a=o}if(o===b){s=A.fy()
b.ar(new A.y(new A.D(!0,o,null,"Cannot complete a future with itself"),s))
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.aE(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.M()
b.U(p.a)
A.Z(b,q)
return}b.a^=2
A.al(null,null,b.b,new A.cN(p,b))},
Z(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;!0;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){f=f.c
A.bX(f.a,f.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.Z(g.a,f)
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
b=i.W(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.cM(f,i,!0)
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
hL(a,b){if(t.C.b(a))return b.al(a)
if(t.v.b(a))return a
throw A.d(A.dX(a,"onError",u.c))},
hH(){var s,r
for(s=$.ak;s!=null;s=$.ak){$.ba=null
r=s.b
$.ak=r
if(r==null)$.b9=null
s.a.$0()}},
hO(){$.dJ=!0
try{A.hH()}finally{$.ba=null
$.dJ=!1
if($.ak!=null)$.dU().$1(A.eB())}},
ez(a){var s=new A.bK(a),r=$.b9
if(r==null){$.ak=$.b9=s
if(!$.dJ)$.dU().$1(A.eB())}else $.b9=r.b=s},
hN(a){var s,r,q,p=$.ak
if(p==null){A.ez(a)
$.ba=$.b9
return}s=new A.bK(a)
r=$.ba
if(r==null){s.b=p
$.ak=$.ba=s}else{q=r.b
s.b=q
$.ba=r.b=s
if(q==null)$.b9=s}},
eN(a){var s=null,r=$.i
if(B.b===r){A.al(s,s,B.b,a)
return}A.al(s,s,r,r.aK(a))},
iq(a){A.dM(a,"stream",t.K)
return new A.bU()},
dB(a){return new A.aO(null,null,a.i("aO<0>"))},
ey(a){return},
eb(a,b){return b==null?A.hX():b},
fJ(a,b){if(b==null)b=A.hY()
if(t.k.b(b))return a.al(b)
if(t.d.b(b))return b
throw A.d(A.a6("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
hI(a){},
hJ(a,b){A.bX(a,b)},
hl(a,b,c){var s,r,q=a.aL()
if(q!==$.dp()){s=q.$ti
r=$.i
q.T(new A.Q(new A.m(r,s),8,new A.d7(b,c),null,s.i("Q<1,1>")))}else b.a3(c)},
fB(a,b){var s=$.i
if(s===B.b)return A.e8(a,b)
return A.e8(a,s.br(b,t.E))},
bX(a,b){A.hN(new A.d8(a,b))},
ev(a,b,c,d){var s,r=$.i
if(r===c)return d.$0()
$.i=c
s=r
try{r=d.$0()
return r}finally{$.i=s}},
ew(a,b,c,d,e){var s,r=$.i
if(r===c)return d.$1(e)
$.i=c
s=r
try{r=d.$1(e)
return r}finally{$.i=s}},
hM(a,b,c,d,e,f){var s,r=$.i
if(r===c)return d.$2(e,f)
$.i=c
s=r
try{r=d.$2(e,f)
return r}finally{$.i=s}},
al(a,b,c,d){if(B.b!==c)d=c.aK(d)
A.ez(d)},
cE:function cE(a){this.a=a},
cD:function cD(a,b,c){this.a=a
this.b=b
this.c=c},
cF:function cF(a){this.a=a},
cG:function cG(a){this.a=a},
b1:function b1(){this.c=0},
d1:function d1(a,b){this.a=a
this.b=b},
d0:function d0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bJ:function bJ(a,b){this.a=a
this.b=!1
this.$ti=b},
d5:function d5(a){this.a=a},
d6:function d6(a){this.a=a},
d9:function d9(a){this.a=a},
y:function y(a,b){this.a=a
this.b=b},
ah:function ah(a,b){this.a=a
this.$ti=b},
aP:function aP(a,b,c,d,e){var _=this
_.ay=0
_.CW=_.ch=null
_.w=a
_.a=b
_.d=c
_.e=d
_.r=_.f=null
_.$ti=e},
bL:function bL(){},
aO:function aO(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null
_.$ti=c},
Q:function Q(a,b,c,d,e){var _=this
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
cJ:function cJ(a,b){this.a=a
this.b=b},
cO:function cO(a,b){this.a=a
this.b=b},
cN:function cN(a,b){this.a=a
this.b=b},
cL:function cL(a,b){this.a=a
this.b=b},
cK:function cK(a,b){this.a=a
this.b=b},
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
bK:function bK(a){this.a=a
this.b=null},
ag:function ag(){},
cl:function cl(a,b){this.a=a
this.b=b},
cm:function cm(a,b){this.a=a
this.b=b},
cj:function cj(a){this.a=a},
ck:function ck(a,b,c){this.a=a
this.b=b
this.c=c},
aQ:function aQ(){},
bN:function bN(){},
bM:function bM(){},
b0:function b0(){},
bP:function bP(){},
bO:function bO(a){this.b=a
this.a=null},
bS:function bS(){this.a=0
this.c=this.b=null},
cX:function cX(a,b){this.a=a
this.b=b},
aR:function aR(a){this.a=1
this.b=a
this.c=null},
bU:function bU(){},
d7:function d7(a,b){this.a=a
this.b=b},
d4:function d4(){},
d8:function d8(a,b){this.a=a
this.b=b},
cY:function cY(){},
cZ:function cZ(a,b){this.a=a
this.b=b},
d_:function d_(a,b,c){this.a=a
this.b=b
this.c=c},
fp(a,b,c){return A.eG(a,new A.W(b.i("@<0>").a1(c).i("W<1,2>")))},
fq(a){return new A.aT(a.i("aT<0>"))},
dD(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
fL(a,b,c){var s=new A.ai(a,b,c.i("ai<0>"))
s.c=a.e
return s},
dx(a){var s,r
if(A.dR(a))return"{...}"
s=new A.bG("")
try{r={}
$.x.push(a)
s.a+="{"
r.a=!0
a.ag(0,new A.c7(r,s))
s.a+="}"}finally{if(0>=$.x.length)return A.c($.x,-1)
$.x.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
aT:function aT(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cV:function cV(a){this.a=a
this.c=this.b=null},
ai:function ai(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
l:function l(){},
aE:function aE(){},
c7:function c7(a,b){this.a=a
this.b=b},
aL:function aL(){},
aZ:function aZ(){},
fb(a,b){a=A.r(a,new Error())
a.stack=b.h(0)
throw a},
dw(a,b,c){var s,r,q
if(a>4294967295)A.c_(A.dy(a,0,4294967295,"length",null))
s=A.a(new Array(a),c.i("p<0>"))
s.$flags=1
r=s
if(a!==0)for(s=r.length,q=0;q<s;++q)r[q]=b
return r},
fr(a,b,c){var s,r,q=A.a([],c.i("p<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.bZ)(a),++r)q.push(a[r])
q.$flags=1
return q},
e5(a){return new A.c4(a,A.fn(a,!1,!0,!1,!1,""))},
e7(a,b,c){var s=J.f1(b)
if(!s.n())return a
if(c.length===0){do a+=A.n(s.gq())
while(s.n())}else{a+=A.n(s.gq())
for(;s.n();)a=a+c+A.n(s.gq())}return a},
fy(){return A.a4(new Error())},
c2(a){if(typeof a=="number"||A.dI(a)||a==null)return J.bd(a)
if(typeof a=="string")return JSON.stringify(a)
return A.e4(a)},
fc(a,b){A.dM(a,"error",t.K)
A.dM(b,"stackTrace",t.l)
A.fb(a,b)},
bg(a){return new A.bf(a)},
a6(a,b){return new A.D(!1,null,b,a)},
dX(a,b,c){return new A.D(!0,a,b,c)},
dy(a,b,c,d,e){return new A.aK(b,c,!0,a,d,"Invalid value")},
fv(a,b,c){if(0>a||a>c)throw A.d(A.dy(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.d(A.dy(b,a,c,"end",null))
return b}return c},
fu(a,b){return a},
ds(a,b,c,d,e){return new A.bm(b,!0,a,e,"Index out of range")},
cC(a){return new A.aN(a)},
ea(a){return new A.bH(a)},
a7(a){return new A.bh(a)},
fj(a,b){if(a<=0)return new A.at(b.i("at<0>"))
if(!b.i("0(b)").b(A.eE()))throw A.d(A.a6("Generator must be supplied or element type must allow integers","generator"))
return new A.aS(a,A.eE(),b.i("aS<0>"))},
fk(a,b,c){var s,r
if(A.dR(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.a([],t.s)
$.x.push(a)
try{A.hF(a,s)}finally{if(0>=$.x.length)return A.c($.x,-1)
$.x.pop()}r=A.e7(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
dt(a,b,c){var s,r
if(A.dR(a))return b+"..."+c
s=new A.bG(b)
$.x.push(a)
try{r=s
r.a=A.e7(r.a,a,", ")}finally{if(0>=$.x.length)return A.c($.x,-1)
$.x.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
fK(a){return a},
hF(a,b){var s,r,q,p,o,n,m,l=a.gv(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.n())return
s=A.n(l.gq())
b.push(s)
k+=s.length+2;++j}if(!l.n()){if(j<=5)return
if(0>=b.length)return A.c(b,-1)
r=b.pop()
if(0>=b.length)return A.c(b,-1)
q=b.pop()}else{p=l.gq();++j
if(!l.n()){if(j<=4){b.push(A.n(p))
return}r=A.n(p)
if(0>=b.length)return A.c(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gq();++j
for(;l.n();p=o,o=n){n=l.gq();++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return A.c(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=A.n(p)
r=A.n(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.c(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
c9(a,b,c,d){var s
if(B.c===c){s=B.a.gk(a)
b=J.G(b)
return A.dC(A.P(A.P($.dq(),s),b))}if(B.c===d){s=B.a.gk(a)
b=J.G(b)
c=J.G(c)
return A.dC(A.P(A.P(A.P($.dq(),s),b),c))}s=B.a.gk(a)
b=J.G(b)
c=J.G(c)
d=J.G(d)
d=A.dC(A.P(A.P(A.P(A.P($.dq(),s),b),c),d))
return d},
bj:function bj(a){this.a=a},
cH:function cH(){},
j:function j(){},
bf:function bf(a){this.a=a},
I:function I(){},
D:function D(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aK:function aK(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bm:function bm(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
aN:function aN(a){this.a=a},
bH:function bH(a){this.a=a},
X:function X(a){this.a=a},
bh:function bh(a){this.a=a},
bC:function bC(){},
aM:function aM(){},
cI:function cI(a){this.a=a},
c3:function c3(a,b){this.a=a
this.b=b},
U:function U(){},
aS:function aS(a,b,c){this.a=a
this.b=b
this.$ti=c},
t:function t(){},
e:function e(){},
bV:function bV(){},
bG:function bG(a){this.a=a},
M:function M(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fA(a){return new A.cp(a)},
ca:function ca(){},
cp:function cp(a){this.a=a},
a9:function a9(){},
ab:function ab(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ad:function ad(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=0},
fx(a,b,c,d,e,f,g,h){var s,r,q=v.G,p=q.document.createElement("canvas"),o=h*g
p.width=o
s=d*f
p.height=s
r=q.document.createElement("canvas")
r.width=o
r.height=s
s=A.a([],t.w)
for(q=A.fj(d,t.z),q=q.gv(q);q.n();){q.gq()
o=B.a.D(h,32)
s.push(new Uint32Array(o+1))}q=new A.bF(!0,d,h,g,f,c,a,p,r,s)
q.b1(a,b,c,d,!0,f,g,h)
return q},
dA(a){return new A.B(B.a.D(a,32),31-B.a.j(a,32))},
bF:function bF(a,b,c,d,e,f,g,h,i,j){var _=this
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
cd:function cd(a){this.a=a},
ce:function ce(a){this.a=a},
cf:function cf(a){this.a=a},
cg:function cg(a){this.a=a},
cc:function cc(){},
E:function E(a){this.b=a},
fz(a,b,c){var s,r,q,p,o="white",n=null,m=A.fx("black",b,o,c*10,!0,2,2,a*8),l=A.a([],t.G)
for(s=t.U,r=0;r<c;++r){q=A.a([],s)
for(p=0;p<a;++p)q.push(new A.M(r,p," ",o))
l.push(q)}m=new A.co(c,a,b,m,new A.ad(c,a),new A.ad(c,a),new A.ad(c,a),A.dB(t.N),A.dB(t.V),A.dB(t.q),B.d,l,A.fq(t.o),B.dF)
m.b2("black",a,b,o,n,!0,2,2,2,c,!0,n,n,n,n,n,n)
return m},
af:function af(a){this.b=a},
co:function co(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cx:function cx(a){this.a=a},
cw:function cw(){},
cv:function cv(a){this.a=a},
cq:function cq(a){this.a=a},
cr:function cr(a){this.a=a},
cs:function cs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ct:function ct(a,b,c){this.a=a
this.b=b
this.c=c},
cu:function cu(a){this.a=a},
df(){var s=0,r=A.hG(t.n),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$df=A.hT(function(b4,b5){if(b4===1)return A.hf(b5,r)
while(true)switch(s){case 0:b3=v.G.document.getElementById("index")
b3.toString
p=A.fz(60,b3,35)
p.J()
p.O()
b3=t.s
o=A.fp(["blockdude",A.a(["Block Dude is a game by Brandon Sterner and","Detached Solutions for the Texas Instruments family","of graphic display calculators. The graphics data for","this demo was pinched directly from the Z80 assembly","code for the calculator game."],b3),"bounce",A.a(["Capture the bouncing balls by enclosing them","with your trail."],b3),"emotions",A.a(["Mixed Emotions is a little twist on the classic sliding","tiles game to demonstrate mouse support for the terminal.","Click on tiles to slide them to their correct positions,","but you only get to see the correct positions by sliding","the tiles!"],b3),"four",A.a(["This is the classic game of connect-four. The computer","uses background Monte Carlo simulations to play a fairly","intelligent game."],b3),"mine",A.a(["A minesweep clone."],b3),"othello",A.a(["The game of Othello (Reversi)."],b3),"poker",A.a(["Poker squares. The computer uses background simulations","to make decisions using only the same information","available to the player."],b3),"salad",A.a(["Given definitions, find the words in a grid","of letters."],b3),"snake",A.a(["Snake is version of the infamous snake game that","demonstrates non interrupting keyboard input."],b3),"sokoban",A.a(["Mother Hen is a Sokoban clone that demonstrates poking","simple sprite data into the terminal graphics memory."],b3),"wordle",A.a(["Word Logic is a Wordle clone that demonstrates a fairly","complex program running in the terminal."],b3)],t.N,t.a)
n=A.e5("^ *info +(.+) *$")
m=A.e5("^ *load +(.+) *$")
l=new A.dk(p)
k=new A.dg(p)
j=new A.di(o,p)
i=new A.dh(o,p)
h=new A.dj(o,p)
l.$0()
j.$0()
b3=m.b,g=n.b,f=p.y,e=p.x,d=e.b,c=f.b,b=f.a,a=p.z,a0=a.b,a1=a.a,a2=p.as,a3=A.b8(a2).i("ah<1>"),a4=p.a,a5=a4-1,a6=e.a,a7=p.b,a8=a7-4
case 3:if(!!0){s=4
break}p.bz(" > ","lightgreen",!1)
if(p.ay!==B.d)A.c_(A.fA("Terminal already awaiting input."))
a9=e.c
b0=e.d
a9=B.a.j(a9,a4)
b0=B.a.j(b0,a7)
a9=B.a.j(a9,a6)
e.c=a9
e.sK(b0)
p.ak(B.h.ao(" ",a8),!1)
e.c=a9
e.sK(b0)
a9=e.c
if(a9===a5){p.a_()
a9=e.c=B.a.j(e.c-1,a6)}a9=a9*d+e.d
b0=B.a.j(B.a.B(a9,c),b)
f.c=b0
a9=B.a.j(a9,c)
f.d=a9
a9=b0*c+a9+a8
a.c=B.a.j(B.a.B(a9,a0),a1)
a.d=B.a.j(a9,a0)
p.ay=B.i
s=5
return A.he(new A.ah(a2,a3).gbs(0),$async$df)
case 5:b1=b5
b2=B.h.aX(b1)
if("reset"===b2){l.$0()
s=3
break}if("help"===b2){k.$0()
s=3
break}if("list"===b2){j.$0()
s=3
break}if(g.test(b1)){a9=n.aN(b1).b
if(1>=a9.length){q=A.c(a9,1)
s=1
break}a9=a9[1]
a9.toString
i.$1(a9)}else if(b3.test(b1)){a9=m.aN(b1).b
if(1>=a9.length){q=A.c(a9,1)
s=1
break}a9=a9[1]
a9.toString
h.$1(a9)}else{p.E()
p.F(" Not understood. Type 'help' for help.","orange")
p.E()}s=3
break
case 4:case 1:return A.hg(q,r)}})
return A.hh($async$df,r)},
dk:function dk(a){this.a=a},
dg:function dg(a){this.a=a},
di:function di(a,b){this.a=a
this.b=b},
dh:function dh(a,b){this.a=a
this.b=b},
dj:function dj(a,b){this.a=a
this.b=b},
ig(a){throw A.r(new A.aC("Field '"+a+"' has been assigned during initialization."),new Error())},
L(){throw A.r(A.fo(""),new Error())},
b7(a){var s
if(typeof a=="function")throw A.d(A.a6("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.hj,a)
s[$.dn()]=a
return s},
er(a){var s
if(typeof a=="function")throw A.d(A.a6("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.hk,a)
s[$.dn()]=a
return s},
hj(a){return a.$0()},
hk(a,b,c){if(c>=1)return a.$1(b)
return a.$0()}},B={}
var w=[A,J,B]
var $={}
A.du.prototype={}
J.bn.prototype={
A(a,b){return a===b},
gk(a){return A.ae(a)},
h(a){return"Instance of '"+A.cb(a)+"'"},
gm(a){return A.a2(A.dH(this))}}
J.bo.prototype={
h(a){return String(a)},
gk(a){return a?519018:218159},
gm(a){return A.a2(t.y)},
$if:1}
J.ax.prototype={
A(a,b){return null==b},
h(a){return"null"},
gk(a){return 0},
$if:1}
J.az.prototype={$ik:1}
J.O.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.bD.prototype={}
J.Y.prototype={}
J.N.prototype={
h(a){var s=a[$.dn()]
if(s==null)return this.b0(a)
return"JavaScript function for "+J.bd(s)}}
J.ay.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.aA.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.p.prototype={
aJ(a,b){a.$flags&1&&A.bc(a,"addAll",2)
this.b6(a,b)
return},
b6(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw A.d(A.a7(a))
for(s=0;s<r;++s)a.push(b[s])},
bx(a,b){var s,r,q=a.length,p=A.dw(q,"",t.N)
for(s=0;s<a.length;++s){r=A.n(a[s])
if(!(s<q))return A.c(p,s)
p[s]=r}return p.join(b)},
bt(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw A.d(A.a7(a))}return s},
bu(a,b,c){c.toString
return this.bt(a,b,c,t.z)},
h(a){return A.dt(a,"[","]")},
gv(a){return new J.be(a,a.length,A.dG(a).i("be<1>"))},
gk(a){return A.ae(a)},
gl(a){return a.length},
$ih:1}
J.c5.prototype={}
J.be.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
n(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.d(A.bZ(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.a8.prototype={
bI(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.d(A.cC(""+a+".toInt()"))},
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
B(a,b){if((a|0)===a)if(b>=1)return a/b|0
return this.aF(a,b)},
D(a,b){return(a|0)===a?a/b|0:this.aF(a,b)},
aF(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.cC("Result of truncating division is "+A.n(s)+": "+A.n(a)+" ~/ "+b))},
P(a,b){if(b<0)throw A.d(A.dL(b))
return b>31?0:a<<b>>>0},
bo(a,b){return b>31?0:a<<b>>>0},
aZ(a,b){var s
if(b<0)throw A.d(A.dL(b))
if(a>0)s=this.ab(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
bp(a,b){var s
if(a>0)s=this.ab(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
C(a,b){if(0>b)throw A.d(A.dL(b))
return this.ab(a,b)},
ab(a,b){return b>31?0:a>>>b},
gm(a){return A.a2(t.H)},
$iq:1}
J.aw.prototype={
gm(a){return A.a2(t.S)},
$if:1,
$ib:1}
J.bp.prototype={
gm(a){return A.a2(t.i)},
$if:1}
J.V.prototype={
b_(a,b,c){return a.substring(b,A.fv(b,c,a.length))},
aX(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.c(p,0)
if(p.charCodeAt(0)===133){s=J.fl(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.c(p,r)
q=p.charCodeAt(r)===133?J.fm(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
ao(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.x)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
bA(a,b,c){var s=b-a.length
if(s<=0)return a
return this.ao(c,s)+a},
h(a){return a},
gk(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gm(a){return A.a2(t.N)},
gl(a){return a.length},
$if:1,
$iu:1}
A.aC.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.dm.prototype={
$0(){var s=new A.m($.i,t.D)
s.a0(null)
return s},
$S:8}
A.ch.prototype={}
A.as.prototype={}
A.aD.prototype={
gv(a){var s=this
return new A.aa(s,s.gl(s),A.b8(s).i("aa<1>"))}}
A.aa.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
n(){var s,r=this,q=r.a,p=J.eH(q),o=p.gl(q)
if(r.b!==o)throw A.d(A.a7(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.ae(q,s);++r.c
return!0}}
A.at.prototype={
gv(a){return B.p},
gl(a){return 0}}
A.bk.prototype={
n(){return!1},
gq(){throw A.d(A.fi())}}
A.av.prototype={}
A.B.prototype={$r:"+(1,2)",$s:1}
A.bi.prototype={
h(a){return A.dx(this)}}
A.bl.prototype={
V(){var s=this,r=s.$map
if(r==null){r=new A.aB(s.$ti.i("aB<1,2>"))
A.eG(s.a,r)
s.$map=r}return r},
N(a){return this.V().N(a)},
p(a,b){return this.V().p(0,b)},
ag(a,b){this.V().ag(0,b)},
gl(a){return this.V().a}}
A.cz.prototype={
u(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.aJ.prototype={
h(a){return"Null check operator used on a null value"}}
A.bq.prototype={
h(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.bI.prototype={
h(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.c8.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.au.prototype={}
A.b_.prototype={
h(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iA:1}
A.T.prototype={
h(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.eO(r==null?"unknown":r)+"'"},
gbJ(){return this},
$C:"$1",
$R:1,
$D:null}
A.c0.prototype={$C:"$0",$R:0}
A.c1.prototype={$C:"$2",$R:2}
A.cn.prototype={}
A.ci.prototype={
h(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.eO(s)+"'"}}
A.ar.prototype={
A(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.ar))return!1
return this.$_target===b.$_target&&this.a===b.a},
gk(a){return(A.dT(this.a)^A.ae(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.cb(this.a)+"'")}}
A.bE.prototype={
h(a){return"RuntimeError: "+this.a}}
A.W.prototype={
gl(a){return this.a},
N(a){var s=this.b
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
return q}else return this.bw(b)},
bw(a){var s,r,q=this.d
if(q==null)return null
s=q[this.ah(a)]
r=this.ai(s,a)
if(r<0)return null
return s[r].b},
ag(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw A.d(A.a7(s))
r=r.c}},
S(a,b){var s=this,r=new A.c6(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&1073741823
return r},
ah(a){return J.G(a)&1073741823},
ai(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aq(a[r].a,b))return r
return-1},
h(a){return A.dx(this)}}
A.c6.prototype={}
A.br.prototype={
gq(){return this.d},
n(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.a7(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
A.aB.prototype={
ah(a){return A.hZ(a)&1073741823},
ai(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aq(a[r].a,b))return r
return-1}}
A.db.prototype={
$1(a){return this.a(a)},
$S:9}
A.dc.prototype={
$2(a,b){return this.a(a,b)},
$S:10}
A.dd.prototype={
$1(a){return this.a(a)},
$S:11}
A.aj.prototype={
h(a){return this.aH(!1)},
aH(a){var s,r,q,p,o,n=this.bf(),m=this.aA(),l=(a?""+"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.c(m,q)
o=m[q]
l=a?l+A.e4(o):l+A.n(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
bf(){var s,r=this.$s
for(;$.aY.length<=r;)$.aY.push(null)
s=$.aY[r]
if(s==null){s=this.be()
if(!(r<$.aY.length))return A.c($.aY,r)
$.aY[r]=s}return s},
be(){var s,r,q,p,o,n=this.$r,m=n.indexOf("("),l=n.substring(1,m),k=n.substring(m),j=k==="()"?0:k.replace(/[^,]/g,"").length+1,i=A.a(new Array(j),t.f)
for(s=0;s<j;++s)i[s]=s
if(l!==""){r=l.split(",")
s=r.length
for(q=i.length,p=j;s>0;){--p;--s
o=r[s]
if(!(p>=0&&p<q))return A.c(i,p)
i[p]=o}}i=A.fr(i,!1,t.K)
i.$flags=3
return i}}
A.bT.prototype={
aA(){return[this.a,this.b]},
A(a,b){if(b==null)return!1
return b instanceof A.bT&&this.$s===b.$s&&J.aq(this.a,b.a)&&J.aq(this.b,b.b)},
gk(a){return A.c9(this.$s,this.a,this.b,B.c)}}
A.c4.prototype={
h(a){return"RegExp/"+this.a+"/"+this.b.flags},
aN(a){var s=this.b.exec(a)
if(s==null)return null
return new A.cW(s)}}
A.cW.prototype={}
A.bs.prototype={
gm(a){return B.dO},
$if:1}
A.aH.prototype={}
A.bt.prototype={
gm(a){return B.dP},
$if:1}
A.ac.prototype={
gl(a){return a.length},
$iv:1}
A.aF.prototype={
p(a,b){A.a0(b,a,a.length)
return a[b]},
$ih:1}
A.aG.prototype={$ih:1}
A.bu.prototype={
gm(a){return B.dQ},
$if:1}
A.bv.prototype={
gm(a){return B.dR},
$if:1}
A.bw.prototype={
gm(a){return B.dS},
p(a,b){A.a0(b,a,a.length)
return a[b]},
$if:1}
A.bx.prototype={
gm(a){return B.dT},
p(a,b){A.a0(b,a,a.length)
return a[b]},
$if:1}
A.by.prototype={
gm(a){return B.dU},
p(a,b){A.a0(b,a,a.length)
return a[b]},
$if:1}
A.bz.prototype={
gm(a){return B.dW},
p(a,b){A.a0(b,a,a.length)
return a[b]},
$if:1}
A.bA.prototype={
gm(a){return B.dX},
p(a,b){A.a0(b,a,a.length)
return a[b]},
$if:1,
$icB:1}
A.aI.prototype={
gm(a){return B.dY},
gl(a){return a.length},
p(a,b){A.a0(b,a,a.length)
return a[b]},
$if:1}
A.bB.prototype={
gm(a){return B.dZ},
gl(a){return a.length},
p(a,b){A.a0(b,a,a.length)
return a[b]},
$if:1}
A.aU.prototype={}
A.aV.prototype={}
A.aW.prototype={}
A.aX.prototype={}
A.z.prototype={
i(a){return A.b6(v.typeUniverse,this,a)},
a1(a){return A.em(v.typeUniverse,this,a)}}
A.bR.prototype={}
A.bW.prototype={
h(a){return A.w(this.a,null)}}
A.bQ.prototype={
h(a){return this.a}}
A.b2.prototype={$iI:1}
A.cE.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:3}
A.cD.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:12}
A.cF.prototype={
$0(){this.a.$0()},
$S:1}
A.cG.prototype={
$0(){this.a.$0()},
$S:1}
A.b1.prototype={
b3(a,b){if(self.setTimeout!=null)self.setTimeout(A.bY(new A.d1(this,b),0),a)
else throw A.d(A.cC("`setTimeout()` not found."))},
b4(a,b){if(self.setTimeout!=null)self.setInterval(A.bY(new A.d0(this,a,Date.now(),b),0),a)
else throw A.d(A.cC("Periodic timer."))},
$icy:1}
A.d1.prototype={
$0(){this.a.c=1
this.b.$0()},
$S:0}
A.d0.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.a.B(s,o)}q.c=p
r.d.$1(q)},
$S:1}
A.bJ.prototype={}
A.d5.prototype={
$1(a){return this.a.$2(0,a)},
$S:4}
A.d6.prototype={
$2(a,b){this.a.$2(1,new A.au(a,b))},
$S:13}
A.d9.prototype={
$2(a,b){this.a(a,b)},
$S:14}
A.y.prototype={
h(a){return A.n(this.a)},
$ij:1,
gR(){return this.b}}
A.ah.prototype={}
A.aP.prototype={
a8(){},
a9(){}}
A.bL.prototype={
gbh(){return this.c<4},
bm(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
bq(a,b,c,d){var s,r,q,p,o,n=this
if((n.c&4)!==0){s=new A.aR($.i)
A.eN(s.gbi())
s.c=c
return s}s=$.i
r=d?1:0
q=A.eb(s,a)
A.fJ(s,b)
p=new A.aP(n,q,s,r|32,A.b8(n).i("aP<1>"))
p.CW=p
p.ch=p
p.ay=n.c&1
o=n.e
n.e=p
p.ch=null
p.CW=o
if(o==null)n.d=p
else o.ch=p
if(n.d===p)A.ey(n.a)
return p},
bl(a){var s,r=this
A.b8(r).i("aP<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.bm(a)
if((r.c&2)===0&&r.d==null)r.ba()}return null},
b7(){if((this.c&4)!==0)return new A.X("Cannot add new events after calling close")
return new A.X("Cannot add new events while doing an addStream")},
I(a,b){if(!this.gbh())throw A.d(this.b7())
this.aa(b)},
ba(){if((this.c&4)!==0)if(null.gbK())null.a0(null)
A.ey(this.b)}}
A.aO.prototype={
aa(a){var s
for(s=this.d;s!=null;s=s.ch)s.b8(new A.bO(a))}}
A.Q.prototype={
by(a){if((this.c&15)!==6)return!0
return this.b.b.am(this.d,a.a)},
bv(a){var s,r=this.e,q=null,p=a.a,o=this.b.b
if(t.C.b(r))q=o.bE(r,p,a.b)
else q=o.am(r,p)
try{p=q
return p}catch(s){if(t._.b(A.ap(s))){if((this.c&1)!==0)throw A.d(A.a6("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.a6("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.m.prototype={
aW(a,b,c){var s,r=$.i
if(r===B.b){if(!t.C.b(b)&&!t.v.b(b))throw A.d(A.dX(b,"onError",u.c))}else b=A.hL(b,r)
s=new A.m(r,c.i("m<0>"))
this.T(new A.Q(s,3,a,b,this.$ti.i("@<1>").a1(c).i("Q<1,2>")))
return s},
aG(a,b,c){var s=new A.m($.i,c.i("m<0>"))
this.T(new A.Q(s,19,a,b,this.$ti.i("@<1>").a1(c).i("Q<1,2>")))
return s},
bn(a){this.a=this.a&1|16
this.c=a},
U(a){this.a=a.a&30|this.a&1
this.c=a.c},
T(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.T(a)
return}s.U(r)}A.al(null,null,s.b,new A.cJ(s,a))}},
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
return}n.U(s)}m.a=n.W(a)
A.al(null,null,n.b,new A.cO(m,n))}},
M(){var s=this.c
this.c=null
return this.W(s)},
W(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
a3(a){var s,r=this
if(r.$ti.i("H<1>").b(a))A.cM(a,r,!0)
else{s=r.M()
r.a=8
r.c=a
A.Z(r,s)}},
aw(a){var s=this,r=s.M()
s.a=8
s.c=a
A.Z(s,r)},
bd(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.M()
q.U(a)
A.Z(q,r)},
L(a){var s=this.M()
this.bn(a)
A.Z(this,s)},
bc(a,b){this.L(new A.y(a,b))},
a0(a){if(this.$ti.i("H<1>").b(a)){this.au(a)
return}this.b9(a)},
b9(a){this.a^=2
A.al(null,null,this.b,new A.cL(this,a))},
au(a){A.cM(a,this,!1)
return},
ar(a){this.a^=2
A.al(null,null,this.b,new A.cK(this,a))},
$iH:1}
A.cJ.prototype={
$0(){A.Z(this.a,this.b)},
$S:0}
A.cO.prototype={
$0(){A.Z(this.b,this.a.a)},
$S:0}
A.cN.prototype={
$0(){A.cM(this.a.a,this.b,!0)},
$S:0}
A.cL.prototype={
$0(){this.a.aw(this.b)},
$S:0}
A.cK.prototype={
$0(){this.a.L(this.b)},
$S:0}
A.cR.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.aT(q.d)}catch(p){s=A.ap(p)
r=A.a4(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.dr(q)
n=k.a
n.c=new A.y(q,o)
q=n}q.b=!0
return}if(j instanceof A.m&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.m){m=k.b.a
l=new A.m(m.b,m.$ti)
j.aW(new A.cS(l,m),new A.cT(l),t.n)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.cS.prototype={
$1(a){this.a.bd(this.b)},
$S:3}
A.cT.prototype={
$2(a,b){this.a.L(new A.y(a,b))},
$S:15}
A.cQ.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
q.c=p.b.b.am(p.d,this.b)}catch(o){s=A.ap(o)
r=A.a4(o)
q=s
p=r
if(p==null)p=A.dr(q)
n=this.a
n.c=new A.y(q,p)
n.b=!0}},
$S:0}
A.cP.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.by(s)&&p.a.e!=null){p.c=p.a.bv(s)
p.b=!1}}catch(o){r=A.ap(o)
q=A.a4(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.dr(p)
m=l.b
m.c=new A.y(p,n)
p=m}p.b=!0}},
$S:0}
A.bK.prototype={}
A.ag.prototype={
gl(a){var s={},r=new A.m($.i,t.h)
s.a=0
this.aO(new A.cl(s,this),!0,new A.cm(s,r),r.gav())
return r},
gbs(a){var s=new A.m($.i,this.$ti.i("m<1>")),r=this.aO(null,!0,new A.cj(s),s.gav())
r.aP(new A.ck(this,r,s))
return s}}
A.cl.prototype={
$1(a){++this.a.a},
$S(){return this.b.$ti.i("~(1)")}}
A.cm.prototype={
$0(){this.b.a3(this.a.a)},
$S:0}
A.cj.prototype={
$0(){var s,r=new A.X("No element")
A.ft(r,B.e)
s=A.hu(r,B.e)
s=new A.y(r,B.e)
this.a.L(s)},
$S:0}
A.ck.prototype={
$1(a){A.hl(this.b,this.c,a)},
$S(){return this.a.$ti.i("~(1)")}}
A.aQ.prototype={
gk(a){return(A.ae(this.a)^892482866)>>>0},
A(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.ah&&b.a===this.a}}
A.bN.prototype={
aD(){return this.w.bl(this)},
a8(){},
a9(){}}
A.bM.prototype={
aP(a){this.a=A.eb(this.d,a)},
aL(){var s,r=this,q=r.e&=4294967279
if((q&8)===0){q=r.e=q|8
if((q&128)!==0){s=r.r
if(s.a===1)s.a=3}if((q&64)===0)r.r=null
r.f=r.aD()}q=$.dp()
return q},
a8(){},
a9(){},
aD(){return null},
b8(a){var s,r,q=this,p=q.r
if(p==null)p=q.r=new A.bS()
s=p.c
if(s==null)p.b=p.c=a
else p.c=s.a=a
r=q.e
if((r&128)===0){r|=128
q.e=r
if(r<256)p.ap(q)}},
aa(a){var s=this,r=s.e
s.e=r|64
s.d.aV(s.a,a)
s.e&=4294967231
s.bb((r&4)!==0)},
bb(a){var s,r,q=this,p=q.e
if((p&128)!==0&&q.r.c==null){p=q.e=p&4294967167
s=!1
if((p&4)!==0)if(p<256){s=q.r
s=s==null?null:s.c==null
s=s!==!1}if(s){p&=4294967291
q.e=p}}for(;!0;a=r){if((p&8)!==0){q.r=null
return}r=(p&4)!==0
if(a===r)break
q.e=p^64
if(r)q.a8()
else q.a9()
p=q.e&=4294967231}if((p&128)!==0&&p<256)q.r.ap(q)}}
A.b0.prototype={
aO(a,b,c,d){return this.a.bq(a,d,c,!0)}}
A.bP.prototype={}
A.bO.prototype={}
A.bS.prototype={
ap(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.eN(new A.cX(s,a))
s.a=1}}
A.cX.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.a
q.b=r
if(r==null)q.c=null
this.b.aa(s.b)},
$S:0}
A.aR.prototype={
aP(a){},
aL(){this.a=-1
this.c=null
return $.dp()},
bj(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.aU(s)}}else r.a=q}}
A.bU.prototype={}
A.d7.prototype={
$0(){return this.a.a3(this.b)},
$S:0}
A.d4.prototype={}
A.d8.prototype={
$0(){A.fc(this.a,this.b)},
$S:0}
A.cY.prototype={
aU(a){var s,r,q
try{if(B.b===$.i){a.$0()
return}A.ev(null,null,this,a)}catch(q){s=A.ap(q)
r=A.a4(q)
A.bX(s,r)}},
bH(a,b){var s,r,q
try{if(B.b===$.i){a.$1(b)
return}A.ew(null,null,this,a,b)}catch(q){s=A.ap(q)
r=A.a4(q)
A.bX(s,r)}},
aV(a,b){a.toString
return this.bH(a,b,t.z)},
aK(a){return new A.cZ(this,a)},
br(a,b){return new A.d_(this,a,b)},
bD(a){if($.i===B.b)return a.$0()
return A.ev(null,null,this,a)},
aT(a){a.toString
return this.bD(a,t.z)},
bG(a,b){if($.i===B.b)return a.$1(b)
return A.ew(null,null,this,a,b)},
am(a,b){var s=t.z
a.toString
return this.bG(a,b,s,s)},
bF(a,b,c){if($.i===B.b)return a.$2(b,c)
return A.hM(null,null,this,a,b,c)},
bE(a,b,c){var s=t.z
a.toString
return this.bF(a,b,c,s,s,s)},
bC(a){return a},
al(a){var s=t.z
a.toString
return this.bC(a,s,s,s)}}
A.cZ.prototype={
$0(){return this.a.aU(this.b)},
$S:0}
A.d_.prototype={
$1(a){return this.a.aV(this.b,a)},
$S(){return this.c.i("~(0)")}}
A.aT.prototype={
gv(a){var s=this,r=new A.ai(s,s.r,s.$ti.i("ai<1>"))
r.c=s.e
return r},
gl(a){return this.a},
I(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.aq(s==null?q.b=A.dD():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.aq(r==null?q.c=A.dD():r,b)}else return q.b5(b)},
b5(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.dD()
s=J.G(a)&1073741823
r=p[s]
if(r==null)p[s]=[q.a7(a)]
else{if(q.bg(r,a)>=0)return!1
r.push(q.a7(a))}return!0},
aq(a,b){if(a[b]!=null)return!1
a[b]=this.a7(b)
return!0},
aC(){this.r=this.r+1&1073741823},
a7(a){var s,r=this,q=new A.cV(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.aC()
return q},
bg(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aq(a[r].a,b))return r
return-1}}
A.cV.prototype={}
A.ai.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
n(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.d(A.a7(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.l.prototype={
gv(a){return new A.aa(a,this.gl(a),A.bb(a).i("aa<l.E>"))},
ae(a,b){return this.p(a,b)},
h(a){return A.dt(a,"[","]")}}
A.aE.prototype={
gl(a){return this.a},
h(a){return A.dx(this)}}
A.c7.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.n(a)
r.a=(r.a+=s)+": "
s=A.n(b)
r.a+=s},
$S:16}
A.aL.prototype={
h(a){return A.dt(this,"{","}")}}
A.aZ.prototype={}
A.bj.prototype={
A(a,b){if(b==null)return!1
return b instanceof A.bj&&this.a===b.a},
gk(a){return B.a.gk(this.a)},
h(a){var s,r,q,p,o=this.a,n=B.a.D(o,36e8)
o%=36e8
s=B.a.D(o,6e7)
o%=6e7
r=s<10?"0":""
q=B.a.D(o,1e6)
p=q<10?"0":""
return""+n+":"+r+s+":"+p+q+"."+B.h.bA(B.a.h(o%1e6),6,"0")}}
A.cH.prototype={
h(a){return this.az()}}
A.j.prototype={
gR(){return A.fs(this)}}
A.bf.prototype={
h(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.c2(s)
return"Assertion failed"}}
A.I.prototype={}
A.D.prototype={
ga6(){return"Invalid argument"+(!this.a?"(s)":"")},
ga5(){return""},
h(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.ga6()+q+o
if(!s.a)return n
return n+s.ga5()+": "+A.c2(s.gaj())},
gaj(){return this.b}}
A.aK.prototype={
gaj(){return this.b},
ga6(){return"RangeError"},
ga5(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.n(q):""
else if(q==null)s=": Not greater than or equal to "+A.n(r)
else if(q>r)s=": Not in inclusive range "+A.n(r)+".."+A.n(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.n(r)
return s}}
A.bm.prototype={
gaj(){return this.b},
ga6(){return"RangeError"},
ga5(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gl(a){return this.f}}
A.aN.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.bH.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.X.prototype={
h(a){return"Bad state: "+this.a}}
A.bh.prototype={
h(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.c2(s)+"."}}
A.bC.prototype={
h(a){return"Out of Memory"},
gR(){return null},
$ij:1}
A.aM.prototype={
h(a){return"Stack Overflow"},
gR(){return null},
$ij:1}
A.cI.prototype={
h(a){return"Exception: "+this.a}}
A.c3.prototype={
h(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=B.h.b_(q,0,75)+"..."
return r+"\n"+q}}
A.U.prototype={
gl(a){var s,r=this.gv(this)
for(s=0;r.n();)++s
return s},
ae(a,b){var s,r
A.fu(b,"index")
s=this.gv(this)
for(r=b;s.n();){if(r===0)return s.gq();--r}throw A.d(A.ds(b,b-r,this,null,"index"))},
h(a){return A.fk(this,"(",")")}}
A.aS.prototype={
ae(a,b){var s=this.a
if(b>=s)A.c_(A.ds(b,s,this,null,"index"))
return this.b.$1(b)},
gl(a){return this.a}}
A.t.prototype={
gk(a){return A.e.prototype.gk.call(this,0)},
h(a){return"null"}}
A.e.prototype={$ie:1,
A(a,b){return this===b},
gk(a){return A.ae(this)},
h(a){return"Instance of '"+A.cb(this)+"'"},
gm(a){return A.eI(this)},
toString(){return this.h(this)}}
A.bV.prototype={
h(a){return""},
$iA:1}
A.bG.prototype={
gl(a){return this.a.length},
h(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.M.prototype={
gk(a){var s=this.a,r=this.b
return A.c9(new A.B(s,r).$s,s,r,B.c)},
A(a,b){var s,r,q,p
if(b==null)return!1
if(b instanceof A.M){s=b.a
r=b.b
q=this.a
p=this.b
p=A.c9(new A.B(s,r).$s,s,r,B.c)===A.c9(new A.B(q,p).$s,q,p,B.c)
s=p}else s=!1
return s},
h(a){var s=this
return"("+s.a+" "+s.b+") => '"+s.c+"' "+s.d}}
A.ca.prototype={
h(a){return A.eI(this).h(0)+": "+this.a}}
A.cp.prototype={}
A.a9.prototype={}
A.ab.prototype={
h(a){var s=this
return"               row: "+s.a+"\n            column: "+s.b+"\n         character: '"+s.c+"'\n    characterColor: "+s.d+"\n\n          pixelRow: "+s.e+"\n       pixelColumn: "+s.f+"\n         pixelIsOn: "+s.r+"\n    "}}
A.ad.prototype={
sK(a){var s,r,q,p=this
if(a<0){s=p.d=a
for(r=p.b,q=p.a;s<0;){s+=r
p.d=s
p.c=B.a.j(p.c-1,q)}}else{s=p.b
p.c=B.a.j(p.c+B.a.B(a,s),p.a)
p.d=B.a.j(a,s)}},
gt(){return this.c*this.b+this.d},
st(a){var s=this,r=s.b
s.c=B.a.j(B.a.B(a,r),s.a)
s.d=B.a.j(a,r)}}
A.bF.prototype={
b1(a,b,c,d,e,f,g,h){var s,r=this,q=v.G.document
q.onfocus=A.b7(new A.cd(r))
q.onblur=A.b7(new A.ce(r))
q=r.w
q.tabIndex=-1
q.style.display="block"
q.style.outline="none"
s=q.getContext("2d")
if(s==null)s=t.m.a(s)
s.imageSmoothingEnabled=!1
q.onfocus=A.b7(new A.cf(r))
q.onblur=A.b7(new A.cg(r))
b.style.display="flex"
b.style.alignItems="flex-start"
b.style.padding="0"
b.style.margin="0"
b.style.width="fit-content"
b.style.height="fit-content"
b.style.background="gray"
b.appendChild(q)
r.Y(0)},
X(a,b){return new A.B(B.a.j(a,this.b),B.a.j(b,this.c))},
a2(){var s=this.x,r=s.getContext("2d")
if(r==null)r=t.m.a(r)
r.save()
r.beginPath()
r.clearRect(0,0,s.width,s.height)
r.restore()
return r},
a4(){var s=this.w.getContext("2d")
if(s==null)s=t.m.a(s)
s.save()
s.beginPath()
s.drawImage(this.x,0,0)
s.restore()
return s},
G(a,b,c,d){var s,r,q,p,o,n,m=this,l=a<0||a>=m.b||b<0||b>=m.c
if(l)return
s=m.X(a,b)
a=s.a
b=s.b
r=A.dA(b)
q=r.a
p=B.a.P(1,r.b)
l=m.y
if(!(a>=0&&a<l.length))return A.c(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.c(l,q)
o=l[q]
l.$flags&2&&A.bc(l)
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
H(a,b,c,d,e){var s,r,q,p,o,n,m=this,l=a<0||a>=m.b||b<0||b>=m.c
if(l)return
s=m.X(a,b)
a=s.a
b=s.b
r=A.dA(b)
q=r.a
p=B.a.P(1,r.b)
l=m.y
if(!(a>=0&&a<l.length))return A.c(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.c(l,q)
o=l[q]
l.$flags&2&&A.bc(l)
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
aR(a,b){var s,r,q,p,o=this.X(b,a)
b=o.a
s=A.dA(o.b)
r=s.a
q=B.a.P(1,s.b)
p=this.y
if(!(b>=0&&b<p.length))return A.c(p,b)
p=p[b]
if(!(r>=0&&r<p.length))return A.c(p,r)
return(p[r]&q)>>>0>0},
aM(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=this
if(e==null)e=k.c-c
if(b==null)b=k.b-d
k.a2()
if(c===0&&d===0&&e===k.c&&b===k.b){for(s=k.y,r=s.length,q=0;q<r;++q)for(p=0;o=s[q],p<o.length;++p){o.$flags&2&&A.bc(o)
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
for(p=c;p<m;++p)k.G(l,B.a.j(p,r),o,!1)}}k.a4()},
Y(a){return this.aM(0,null,0,0,null)},
bk(a,b,c,d,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.a2()
s=e.X(a,b)
a=s.a
b=s.b
r=B.a.bo(1,a0)-1
for(q=a0-1,p=t.t,o=e.x,n=0;n<c.length;++n){m=c[n]
l=(m&r)>>>0
m=A.a([],p)
for(k=a+n,j=0;j<a0;++j){i=e.aR(b+j,k)?1:0
m.push(B.a.P(i,q-j))}h=B.f.bu(m,0,new A.cc())
switch(a1){case B.m:for(j=0;j<a0;++j){m=b+j
if((B.a.C(l,q-j)&1)>0)e.H(k,m,d,o,!1)
else e.G(k,m,o,!1)}break
case B.dG:for(j=0;j<a0;++j){m=b+j
if((B.a.C(l,q-j)&1)>0)e.G(k,m,o,!1)
else e.H(k,m,d,o,!1)}break
case B.dI:for(j=0;j<a0;++j){g=q-j
if((B.a.C(l,g)&1)>0&&(B.a.aZ(h,g)&1)===0)e.H(k,b+j,d,o,!1)}break
case B.dH:for(j=0;j<a0;++j)if((B.a.C(l,q-j)&1)>0)e.H(k,b+j,d,o,!1)
break
case B.dJ:for(f=(l&h)>>>0,j=0;j<a0;++j)if((B.a.C(f,q-j)&1)>0)e.H(k,b+j,d,o,!1)
break
case B.dK:for(f=(l&h)>>>0,j=0;j<a0;++j)if((B.a.C(f,q-j)&1)>0)e.G(k,b+j,o,!1)
break
case B.dL:for(f=(l&h)>>>0,j=0;j<a0;++j)if((B.a.C(f,q-j)&1)===0)e.G(k,b+j,o,!1)
break
case B.dM:for(f=(l&h)>>>0,j=0;j<a0;++j){m=b+j
if((B.a.C(f,q-j)&1)===0)e.G(k,m,o,!1)
else e.H(k,m,d,o,!1)}break}}e.a4()},
aS(a,b,c){this.bk(c.a,c.b,b,a,8,B.m,!0,!1,!1)},
aY(a){var s,r,q,p,o,n,m,l,k=this,j=k.b
a=B.a.j(a,j)
for(s=j-a,r=k.y,q=r.length,p=0;p<s;++p){if(!(p<q))return A.c(r,p)
o=p+a
n=0
for(;m=r[p],n<m.length;++n){if(!(o<q))return A.c(r,o)
l=r[o]
if(!(n<l.length))return A.c(l,n)
l=l[n]
m.$flags&2&&A.bc(m)
m[n]=l}}for(;p<j;++p){if(!(p<q))return A.c(r,p)
n=0
for(;o=r[p],n<o.length;++n){o.$flags&2&&A.bc(o)
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
k.a4()},
O(){var s=this.w
s.style.opacity="1.0"
s.focus()},
J(){var s=this.w
s.style.opacity="0.5"
s.blur()}}
A.cd.prototype={
$0(){this.a.z=!0},
$S:1}
A.ce.prototype={
$0(){this.a.z=!1},
$S:1}
A.cf.prototype={
$0(){this.a.O()},
$S:1}
A.cg.prototype={
$0(){this.a.J()},
$S:1}
A.cc.prototype={
$2(a,b){return(a|b)>>>0},
$S:17}
A.E.prototype={
az(){return"Mode."+this.b}}
A.af.prototype={
az(){return"State."+this.b}}
A.co.prototype={
b2(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=this,r=s.f
r.tabIndex=-1
r.onfocus=A.b7(new A.cq(s))
r.onblur=A.b7(new A.cr(s))
r.onkeydown=A.er(new A.cs(s,l,new A.cw(),new A.cv(s)))
r.onclick=A.er(new A.ct(s,new A.cx(s),o))
A.fB(new A.bj(3e5),new A.cu(s))
s.J()
s.Y(0)},
gaf(){var s=this.w
s===$&&A.L()
return s.gaf()},
gad(){var s=this.w
s===$&&A.L()
return s.gad()},
ac(a,b){return new A.B(B.a.j(a,this.a),B.a.j(b,this.b))},
aB(){var s=this,r=s.x
s.CW.I(0,new A.M(r.c,r.d," ","white"))
s.aI()
s.cy=!1},
aI(){var s,r,q,p,o,n,m,l,k,j
for(s=this.CW,r=A.fL(s,s.r,s.$ti.c),q=this.w,p=this.cx,o=r.$ti.c;r.n();){n=r.d
if(n==null)n=o.a(n)
m=n.a
l=n.b
if(p.N(n.c)){k=p.p(0,n.c)
k.toString
j=k}else j=$.eQ()
q===$&&A.L()
q.aS(n.d,j,new A.B(m*10,l*8))}if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.aC()}},
an(a,b){var s,r=this.ac(b,a)
b=r.a
a=r.b
s=this.ch
if(!(b>=0&&b<s.length))return A.c(s,b)
s=s[b]
if(!(a>=0&&a<s.length))return A.c(s,a)
return s[a].c},
E(){var s,r=this.x
r.sK(0)
s=r.c
if(s===this.a-1)this.a_()
else r.c=B.a.j(s+1,r.a)},
a_(){var s,r,q,p,o,n,m,l,k=this
for(s=k.a-1,r=k.b,q=k.ch,p=0;p<s;p=o)for(o=p+1,n=0;n<r;++n){m=q.length
if(!(p<m))return A.c(q,p)
l=q[p]
if(!(n<l.length))return A.c(l,n)
l=l[n]
if(!(o<m))return A.c(q,o)
m=q[o]
if(!(n<m.length))return A.c(m,n)
m=m[n]
l.c=m.c
l.d=m.d}for(n=0;n<r;++n){if(!(s>=0&&s<q.length))return A.c(q,s)
m=q[s]
if(!(n<m.length))return A.c(m,n)
m=m[n]
m.c=" "
m.d="white"}s=k.w
s===$&&A.L()
s.aY(10)},
Z(a,b,c,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a1==null?f.x.c:a1,d=f.ac(e,c==null?f.x.d:c)
e=f.x
s=e.a
e.c=B.a.j(d.a,s)
e.sK(d.b)
if(b==null)b="white"
for(r=a.split(""),q=r.length,p=f.ch,o=f.CW,n=f.a-1,m=f.b-1,l=0;l<q;++l){k=r[l]
j=e.c
i=e.d
if(!(j>=0&&j<p.length))return A.c(p,j)
h=p[j]
if(!(i>=0&&i<h.length))return A.c(h,i)
g=h[i]
g.c=k
g.d=b
o.I(0,g)
if(j===n&&i===m){f.a_()
e.c=B.a.j(e.c-1,s)}e.sK(e.d+1)}f.aI()
if(a0)f.E()},
bz(a,b,c){return this.Z(a,b,null,c,null)},
ak(a,b){return this.Z(a,null,null,b,null)},
F(a,b){return this.Z(a,b,null,!0,null)},
aQ(a){return this.Z(a,null,null,!0,null)},
Y(a){var s,r,q,p,o=this,n=o.b,m=o.a
for(s=o.ch,r=0;r<m;++r)for(q=0;q<n;++q){if(!(r<s.length))return A.c(s,r)
p=s[r]
if(!(q<p.length))return A.c(p,q)
p=p[q]
p.c=" "
p.d="white"}s=o.w
s===$&&A.L()
s.aM(0,m*10,0,0,n*8)
s=o.x
s.c=0%s.a
s.sK(0)},
bB(a,b,c){var s=this.w
s===$&&A.L()
s.aS("white",b,new A.B(c*10,a*8))},
O(){return this.gaf().$0()},
J(){return this.gad().$0()}}
A.cx.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.w
i===$&&A.L()
s=J.dW(a.offsetX)
r=Math.max(Math.min(B.a.B(J.dW(a.offsetY)-1,i.e),i.b-1),0)
q=Math.max(Math.min(B.a.B(s-1,i.d),i.c-1),0)
p=B.a.D(r,10)
o=B.a.D(q,8)
n=j.an(o,p)
m=j.ac(p,o)
l=m.a
k=m.b
j=j.ch
if(!(l>=0&&l<j.length))return A.c(j,l)
j=j[l]
if(!(k>=0&&k<j.length))return A.c(j,k)
return new A.ab(p,o,n,j[k].d,r,q,i.aR(q,r))},
$S:18}
A.cw.prototype={
$1(a){return new A.a9()},
$S:19}
A.cv.prototype={
$0(){var s,r,q,p,o,n=this.a,m=n.a,l=n.b,k=new A.ad(m,l)
k.st(n.y.gt())
s=A.a([],t.s)
for(r=n.z,q=r.b;p=k.c,o=k.d,p*l+o<r.c*q+r.d;p=k.c*l+k.d+1,k.c=B.a.j(B.a.B(p,l),m),k.d=B.a.j(p,l))s.push(n.an(o,p))
return B.f.bx(s,"")},
$S:20}
A.cq.prototype={
$0(){var s=this.a.w
s===$&&A.L()
s.O()},
$S:1}
A.cr.prototype={
$0(){var s=this.a.w
s===$&&A.L()
s.J()},
$S:1}
A.cs.prototype={
$1(a){var s,r,q,p
a.preventDefault()
s=this.a
switch(s.ay){case B.d:break
case B.dN:r=s.at
if(r.d!=null){r.I(0,this.c.$1(a))
s.ay=B.d}break
case B.i:s.aB()
$label0$1:{q=a.keyCode
if(13===q){r=s.as
if(r.d!=null){r.I(0,J.f3(this.d.$0()))
s.E()
s.ay=B.d}break $label0$1}if(8===q){r=s.x
if(r.gt()>s.y.gt()){r.st(r.gt()-1)
s.ak(" ",!1)
r.st(r.gt()-1)}break $label0$1}p=a.key
if(p.length===1&&s.x.gt()<s.z.gt())s.ak(p,!1)}break
case B.o:break}},
$S:6}
A.ct.prototype={
$1(a){var s
a.preventDefault()
s=this.a
if(s.ay===B.o&&s.ax.d!=null){s.ax.I(0,this.b.$1(a))
s.ay=B.d}},
$S:6}
A.cu.prototype={
$1(a){var s,r=this.a,q=r.w
q===$&&A.L()
if(q.z&&J.aq(v.G.document.activeElement,q.w)&&r.ay===B.i)if(r.cy)r.aB()
else{q=r.x
s=q.c
r.bB(q.d,$.eP(),s)
r.cy=!0}},
$S:21}
A.dk.prototype={
$0(){var s,r,q=this.a
q.Y(0)
for(s=[" ","  _____ _   _    _____     _           _"," :     : :_: :  :   __:___: :_ ___ ___: :"," :  :  : : . :  :__   :  _:   : . : . : :"," :_____:_:___:  :_____:___:_:_:___:___:_:"," "," Welcome to Old School, a library for adding"," old school terminals to your html documents."," "," Input 'help' for help."," "],r=0;r<11;++r)q.F(s[r],"lightgreen")},
$S:0}
A.dg.prototype={
$0(){var s,r,q
for(s=[" "," Commands"," --------"," "," reset        Resets this demo."," help         Shows this information."," list         Lists the demos available."," info [demo]  Gives a description of [demo]."," load [demo]  Loads [demo] into this page."," "],r=this.a,q=0;q<10;++q)r.F(s[q],"lightgreen")},
$S:0}
A.di.prototype={
$0(){var s,r,q=t.s,p=A.a([" "," Demos"," -----"," "],q)
q=A.a([],q)
for(s=this.a,s=new A.br(s,s.r,s.e);s.n();)q.push(" - "+s.d)
B.f.aJ(p,q)
p.push(" ")
q=p.length
s=this.b
r=0
for(;r<p.length;p.length===q||(0,A.bZ)(p),++r)s.F(p[r],"lightgreen")},
$S:0}
A.dh.prototype={
$1(a){var s,r,q,p,o=this.a
if(o.N(a)){s=t.s
r=A.a([" "],s)
s=A.a([],s)
for(o=o.p(0,a),q=o.length,p=0;p<o.length;o.length===q||(0,A.bZ)(o),++p)s.push(" "+o[p])
B.f.aJ(r,s)
r.push(" ")
o=r.length
s=this.b
p=0
for(;p<r.length;r.length===o||(0,A.bZ)(r),++p)s.F(r[p],"lightgreen")}else{o=this.b
o.E()
o.F(" No demo called '"+a+"' found.","orange")
o.aQ(" Input `list` to see available demos.")
o.E()}},
$S:7}
A.dj.prototype={
$1(a){var s
if(this.a.N(a))v.G.window.open(a+".html","_self")
else{s=this.b
s.E()
s.F(" No demo called '"+a+"' found.","orange")
s.aQ(" Input `list` to see available demos.")
s.E()}},
$S:7};(function aliases(){var s=J.O.prototype
s.b0=s.h})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._static_2,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u
s(A,"hU","fG",2)
s(A,"hV","fH",2)
s(A,"hW","fI",2)
r(A,"eB","hO",0)
s(A,"hX","hI",4)
q(A,"hY","hJ",5)
p(A.m.prototype,"gav","bc",5)
o(A.aR.prototype,"gbi","bj",0)
s(A,"eE","fK",22)
var n
o(n=A.bF.prototype,"gaf","O",0)
o(n,"gad","J",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.e,null)
q(A.e,[A.du,J.bn,J.be,A.j,A.T,A.ch,A.U,A.aa,A.bk,A.av,A.aj,A.bi,A.cz,A.c8,A.au,A.b_,A.aE,A.c6,A.br,A.c4,A.cW,A.z,A.bR,A.bW,A.b1,A.bJ,A.y,A.ag,A.bM,A.bL,A.Q,A.m,A.bK,A.bP,A.bS,A.aR,A.bU,A.d4,A.aL,A.cV,A.ai,A.l,A.bj,A.cH,A.bC,A.aM,A.cI,A.c3,A.t,A.bV,A.bG,A.M,A.ca,A.a9,A.ab,A.ad,A.bF,A.co])
q(J.bn,[J.bo,J.ax,J.az,J.ay,J.aA,J.a8,J.V])
q(J.az,[J.O,J.p,A.bs,A.aH])
q(J.O,[J.bD,J.Y,J.N])
r(J.c5,J.p)
q(J.a8,[J.aw,J.bp])
q(A.j,[A.aC,A.I,A.bq,A.bI,A.bE,A.bQ,A.bf,A.D,A.aN,A.bH,A.X,A.bh])
q(A.T,[A.c0,A.c1,A.cn,A.db,A.dd,A.cE,A.cD,A.d5,A.cS,A.cl,A.ck,A.d_,A.cx,A.cw,A.cs,A.ct,A.cu,A.dh,A.dj])
q(A.c0,[A.dm,A.cF,A.cG,A.d1,A.d0,A.cJ,A.cO,A.cN,A.cL,A.cK,A.cR,A.cQ,A.cP,A.cm,A.cj,A.cX,A.d7,A.d8,A.cZ,A.cd,A.ce,A.cf,A.cg,A.cv,A.cq,A.cr,A.dk,A.dg,A.di])
r(A.as,A.U)
q(A.as,[A.aD,A.at])
r(A.bT,A.aj)
r(A.B,A.bT)
r(A.bl,A.bi)
r(A.aJ,A.I)
q(A.cn,[A.ci,A.ar])
r(A.W,A.aE)
r(A.aB,A.W)
q(A.c1,[A.dc,A.d6,A.d9,A.cT,A.c7,A.cc])
q(A.aH,[A.bt,A.ac])
q(A.ac,[A.aU,A.aW])
r(A.aV,A.aU)
r(A.aF,A.aV)
r(A.aX,A.aW)
r(A.aG,A.aX)
q(A.aF,[A.bu,A.bv])
q(A.aG,[A.bw,A.bx,A.by,A.bz,A.bA,A.aI,A.bB])
r(A.b2,A.bQ)
r(A.b0,A.ag)
r(A.aQ,A.b0)
r(A.ah,A.aQ)
r(A.bN,A.bM)
r(A.aP,A.bN)
r(A.aO,A.bL)
r(A.bO,A.bP)
r(A.cY,A.d4)
r(A.aZ,A.aL)
r(A.aT,A.aZ)
q(A.D,[A.aK,A.bm])
r(A.aS,A.aD)
r(A.cp,A.ca)
q(A.cH,[A.E,A.af])
s(A.aU,A.l)
s(A.aV,A.av)
s(A.aW,A.l)
s(A.aX,A.av)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{b:"int",q:"double",eK:"num",u:"String",eC:"bool",t:"Null",h:"List",e:"Object",io:"Map"},mangledNames:{},types:["~()","t()","~(~())","t(@)","~(@)","~(e,A)","t(k)","~(u)","H<~>()","@(@)","@(@,u)","@(u)","t(~())","t(@,A)","~(b,@)","t(e,A)","~(e?,e?)","b(b,b)","ab(k)","a9(k)","u()","~(cy)","b(b)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.B&&a.b(c.a)&&b.b(c.b)}}
A.h_(v.typeUniverse,JSON.parse('{"bD":"O","Y":"O","N":"O","bo":{"f":[]},"ax":{"f":[]},"az":{"k":[]},"O":{"k":[]},"p":{"h":["1"],"k":[]},"c5":{"p":["1"],"h":["1"],"k":[]},"a8":{"q":[]},"aw":{"q":[],"b":[],"f":[]},"bp":{"q":[],"f":[]},"V":{"u":[],"f":[]},"aC":{"j":[]},"as":{"U":["1"]},"aD":{"U":["1"]},"at":{"U":["1"]},"aJ":{"I":[],"j":[]},"bq":{"j":[]},"bI":{"j":[]},"b_":{"A":[]},"bE":{"j":[]},"W":{"aE":["1","2"]},"aB":{"W":["1","2"],"aE":["1","2"]},"bs":{"k":[],"f":[]},"aH":{"k":[]},"bt":{"k":[],"f":[]},"ac":{"v":["1"],"k":[]},"aF":{"l":["q"],"h":["q"],"v":["q"],"k":[]},"aG":{"l":["b"],"h":["b"],"v":["b"],"k":[]},"bu":{"l":["q"],"h":["q"],"v":["q"],"k":[],"f":[],"l.E":"q"},"bv":{"l":["q"],"h":["q"],"v":["q"],"k":[],"f":[],"l.E":"q"},"bw":{"l":["b"],"h":["b"],"v":["b"],"k":[],"f":[],"l.E":"b"},"bx":{"l":["b"],"h":["b"],"v":["b"],"k":[],"f":[],"l.E":"b"},"by":{"l":["b"],"h":["b"],"v":["b"],"k":[],"f":[],"l.E":"b"},"bz":{"l":["b"],"h":["b"],"v":["b"],"k":[],"f":[],"l.E":"b"},"bA":{"cB":[],"l":["b"],"h":["b"],"v":["b"],"k":[],"f":[],"l.E":"b"},"aI":{"l":["b"],"h":["b"],"v":["b"],"k":[],"f":[],"l.E":"b"},"bB":{"l":["b"],"h":["b"],"v":["b"],"k":[],"f":[],"l.E":"b"},"bQ":{"j":[]},"b2":{"I":[],"j":[]},"b1":{"cy":[]},"y":{"j":[]},"ah":{"ag":["1"]},"aO":{"bL":["1"]},"m":{"H":["1"]},"aQ":{"ag":["1"]},"b0":{"ag":["1"]},"aT":{"aL":["1"]},"aZ":{"aL":["1"]},"bf":{"j":[]},"I":{"j":[]},"D":{"j":[]},"aK":{"j":[]},"bm":{"j":[]},"aN":{"j":[]},"bH":{"j":[]},"X":{"j":[]},"bh":{"j":[]},"bC":{"j":[]},"aM":{"j":[]},"aS":{"aD":["1"],"U":["1"]},"bV":{"A":[]},"fh":{"h":["b"]},"fE":{"h":["b"]},"fD":{"h":["b"]},"ff":{"h":["b"]},"fC":{"h":["b"]},"fg":{"h":["b"]},"cB":{"h":["b"]},"fd":{"h":["q"]},"fe":{"h":["q"]}}'))
A.fZ(v.typeUniverse,JSON.parse('{"as":1,"bk":1,"av":1,"bi":2,"br":1,"ac":1,"aQ":1,"bN":1,"bM":1,"b0":1,"bP":1,"bO":1,"bS":1,"aR":1,"bU":1,"aZ":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.dO
return{o:s("M"),Q:s("j"),Z:s("il"),U:s("p<M>"),G:s("p<h<M>>"),f:s("p<e>"),s:s("p<u>"),w:s("p<cB>"),b:s("p<@>"),t:s("p<b>"),T:s("ax"),m:s("k"),g:s("N"),p:s("v<@>"),V:s("a9"),a:s("h<u>"),j:s("h<@>"),q:s("ab"),P:s("t"),K:s("e"),L:s("ip"),F:s("+()"),l:s("A"),N:s("u"),E:s("cy"),R:s("f"),_:s("I"),A:s("Y"),c:s("m<@>"),h:s("m<b>"),D:s("m<~>"),y:s("eC"),i:s("q"),z:s("@"),v:s("@(e)"),C:s("@(e,A)"),S:s("b"),O:s("H<t>?"),X:s("e?"),x:s("u?"),u:s("eC?"),I:s("q?"),B:s("b?"),J:s("eK?"),H:s("eK"),n:s("~"),d:s("~(e)"),k:s("~(e,A)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.y=J.bn.prototype
B.f=J.p.prototype
B.a=J.aw.prototype
B.z=J.a8.prototype
B.h=J.V.prototype
B.A=J.N.prototype
B.B=J.az.prototype
B.n=J.bD.prototype
B.j=J.Y.prototype
B.p=new A.bk()
B.k=function getTagFallback(o) {
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
B.w=function(getTagFallback) {
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
B.r=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.v=function(hooks) {
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
B.u=function(hooks) {
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
B.l=function(hooks) { return hooks; }

B.x=new A.bC()
B.c=new A.ch()
B.b=new A.cY()
B.e=new A.bV()
B.d0=A.a(s([126,129,165,129,189,153,129,126]),t.t)
B.a2=A.a(s([126,255,219,255,195,231,255,126]),t.t)
B.dx=A.a(s([108,254,254,254,124,56,16,0]),t.t)
B.bY=A.a(s([16,56,124,254,124,56,16,0]),t.t)
B.aW=A.a(s([56,124,56,254,254,124,56,124]),t.t)
B.b7=A.a(s([16,16,56,124,254,124,56,124]),t.t)
B.aq=A.a(s([0,0,24,60,60,24,0,0]),t.t)
B.at=A.a(s([255,255,231,195,195,231,255,255]),t.t)
B.aF=A.a(s([0,60,102,66,66,102,60,0]),t.t)
B.cL=A.a(s([255,195,153,189,189,153,195,255]),t.t)
B.dw=A.a(s([15,7,15,125,204,204,204,120]),t.t)
B.dv=A.a(s([60,102,102,102,60,24,126,24]),t.t)
B.cI=A.a(s([63,51,63,48,48,112,240,224]),t.t)
B.M=A.a(s([127,99,127,99,99,103,230,192]),t.t)
B.R=A.a(s([153,90,60,231,231,60,90,153]),t.t)
B.an=A.a(s([128,224,248,254,248,224,128,0]),t.t)
B.bt=A.a(s([2,14,62,254,62,14,2,0]),t.t)
B.cb=A.a(s([24,60,126,24,24,126,60,24]),t.t)
B.c7=A.a(s([102,102,102,102,102,0,102,0]),t.t)
B.ch=A.a(s([127,219,219,123,27,27,27,0]),t.t)
B.ci=A.a(s([62,99,56,108,108,56,204,120]),t.t)
B.bH=A.a(s([0,0,0,0,126,126,126,0]),t.t)
B.bK=A.a(s([24,60,126,24,126,60,24,255]),t.t)
B.H=A.a(s([24,60,126,24,24,24,24,0]),t.t)
B.d5=A.a(s([24,24,24,24,126,60,24,0]),t.t)
B.cZ=A.a(s([0,24,12,254,12,24,0,0]),t.t)
B.ak=A.a(s([0,48,96,254,96,48,0,0]),t.t)
B.bP=A.a(s([0,0,192,192,192,254,0,0]),t.t)
B.bm=A.a(s([0,36,102,255,102,36,0,0]),t.t)
B.a0=A.a(s([0,24,60,126,255,255,0,0]),t.t)
B.bL=A.a(s([0,255,255,126,60,24,0,0]),t.t)
B.aR=A.a(s([0,0,0,0,0,0,0,0]),t.t)
B.bu=A.a(s([48,120,120,48,48,0,48,0]),t.t)
B.P=A.a(s([108,108,108,0,0,0,0,0]),t.t)
B.ae=A.a(s([108,108,254,108,254,108,108,0]),t.t)
B.bT=A.a(s([48,124,192,120,12,248,48,0]),t.t)
B.G=A.a(s([0,198,204,24,48,102,198,0]),t.t)
B.cu=A.a(s([56,108,56,118,220,204,118,0]),t.t)
B.ad=A.a(s([96,96,192,0,0,0,0,0]),t.t)
B.L=A.a(s([24,48,96,96,96,48,24,0]),t.t)
B.bq=A.a(s([96,48,24,24,24,48,96,0]),t.t)
B.cl=A.a(s([0,102,60,255,60,102,0,0]),t.t)
B.dE=A.a(s([0,48,48,252,48,48,0,0]),t.t)
B.bV=A.a(s([0,0,0,0,0,48,48,96]),t.t)
B.bl=A.a(s([0,0,0,252,0,0,0,0]),t.t)
B.c9=A.a(s([0,0,0,0,0,48,48,0]),t.t)
B.W=A.a(s([6,12,24,48,96,192,128,0]),t.t)
B.aZ=A.a(s([124,198,206,222,246,230,124,0]),t.t)
B.cc=A.a(s([48,112,48,48,48,48,252,0]),t.t)
B.bR=A.a(s([120,204,12,56,96,204,252,0]),t.t)
B.dz=A.a(s([120,204,12,56,12,204,120,0]),t.t)
B.bs=A.a(s([28,60,108,204,254,12,30,0]),t.t)
B.d_=A.a(s([252,192,248,12,12,204,120,0]),t.t)
B.dg=A.a(s([56,96,192,248,204,204,120,0]),t.t)
B.bS=A.a(s([252,204,12,24,48,48,48,0]),t.t)
B.co=A.a(s([120,204,204,120,204,204,120,0]),t.t)
B.b5=A.a(s([120,204,204,124,12,24,112,0]),t.t)
B.cT=A.a(s([0,48,48,0,0,48,48,0]),t.t)
B.aI=A.a(s([0,48,48,0,0,48,48,96]),t.t)
B.br=A.a(s([24,48,96,192,96,48,24,0]),t.t)
B.bg=A.a(s([0,0,252,0,0,252,0,0]),t.t)
B.as=A.a(s([96,48,24,12,24,48,96,0]),t.t)
B.ai=A.a(s([120,204,12,24,48,0,48,0]),t.t)
B.dc=A.a(s([124,198,222,222,222,192,120,0]),t.t)
B.c3=A.a(s([48,120,204,204,252,204,204,0]),t.t)
B.aC=A.a(s([252,102,102,124,102,102,252,0]),t.t)
B.a4=A.a(s([60,102,192,192,192,102,60,0]),t.t)
B.X=A.a(s([248,108,102,102,102,108,248,0]),t.t)
B.aa=A.a(s([254,98,104,120,104,98,254,0]),t.t)
B.cf=A.a(s([254,98,104,120,104,96,240,0]),t.t)
B.ag=A.a(s([60,102,192,192,206,102,62,0]),t.t)
B.aj=A.a(s([204,204,204,252,204,204,204,0]),t.t)
B.cD=A.a(s([120,48,48,48,48,48,120,0]),t.t)
B.bF=A.a(s([30,12,12,12,204,204,120,0]),t.t)
B.bx=A.a(s([230,102,108,120,108,102,230,0]),t.t)
B.bw=A.a(s([240,96,96,96,98,102,254,0]),t.t)
B.aD=A.a(s([198,238,254,254,214,198,198,0]),t.t)
B.O=A.a(s([198,230,246,222,206,198,198,0]),t.t)
B.cN=A.a(s([56,108,198,198,198,108,56,0]),t.t)
B.bb=A.a(s([252,102,102,124,96,96,240,0]),t.t)
B.cx=A.a(s([120,204,204,204,220,120,28,0]),t.t)
B.F=A.a(s([252,102,102,124,108,102,230,0]),t.t)
B.a7=A.a(s([120,204,224,112,28,204,120,0]),t.t)
B.dq=A.a(s([252,180,48,48,48,48,120,0]),t.t)
B.aA=A.a(s([204,204,204,204,204,204,252,0]),t.t)
B.T=A.a(s([204,204,204,204,204,120,48,0]),t.t)
B.cG=A.a(s([198,198,198,214,254,238,198,0]),t.t)
B.cA=A.a(s([198,198,108,56,56,108,198,0]),t.t)
B.V=A.a(s([204,204,204,120,48,48,120,0]),t.t)
B.J=A.a(s([254,198,140,24,50,102,254,0]),t.t)
B.bn=A.a(s([120,96,96,96,96,96,120,0]),t.t)
B.cs=A.a(s([192,96,48,24,12,6,2,0]),t.t)
B.bp=A.a(s([120,24,24,24,24,24,120,0]),t.t)
B.df=A.a(s([16,56,108,198,0,0,0,0]),t.t)
B.E=A.a(s([0,0,0,0,0,0,0,255]),t.t)
B.aB=A.a(s([48,48,24,0,0,0,0,0]),t.t)
B.d6=A.a(s([0,0,120,12,124,204,118,0]),t.t)
B.c6=A.a(s([224,96,96,124,102,102,220,0]),t.t)
B.cz=A.a(s([0,0,120,204,192,204,120,0]),t.t)
B.aX=A.a(s([28,12,12,124,204,204,118,0]),t.t)
B.di=A.a(s([0,0,120,204,252,192,120,0]),t.t)
B.aG=A.a(s([56,108,96,240,96,96,240,0]),t.t)
B.cw=A.a(s([0,0,118,204,204,124,12,248]),t.t)
B.ar=A.a(s([224,96,108,118,102,102,230,0]),t.t)
B.cm=A.a(s([48,0,112,48,48,48,120,0]),t.t)
B.bA=A.a(s([12,0,12,12,12,204,204,120]),t.t)
B.b3=A.a(s([224,96,102,108,120,108,230,0]),t.t)
B.bC=A.a(s([112,48,48,48,48,48,120,0]),t.t)
B.bk=A.a(s([0,0,204,254,254,214,198,0]),t.t)
B.bD=A.a(s([0,0,248,204,204,204,204,0]),t.t)
B.b6=A.a(s([0,0,120,204,204,204,120,0]),t.t)
B.dm=A.a(s([0,0,220,102,102,124,96,240]),t.t)
B.dj=A.a(s([0,0,118,204,204,124,12,30]),t.t)
B.bh=A.a(s([0,0,220,118,102,96,240,0]),t.t)
B.cQ=A.a(s([0,0,124,192,120,12,248,0]),t.t)
B.cJ=A.a(s([16,48,124,48,48,52,24,0]),t.t)
B.c0=A.a(s([0,0,204,204,204,204,118,0]),t.t)
B.aV=A.a(s([0,0,204,204,204,120,48,0]),t.t)
B.ba=A.a(s([0,0,198,214,254,254,108,0]),t.t)
B.by=A.a(s([0,0,198,108,56,108,198,0]),t.t)
B.dt=A.a(s([0,0,204,204,204,124,12,248]),t.t)
B.d4=A.a(s([0,0,252,152,48,100,252,0]),t.t)
B.b0=A.a(s([28,48,48,224,48,48,28,0]),t.t)
B.cP=A.a(s([24,24,24,0,24,24,24,0]),t.t)
B.av=A.a(s([224,48,48,28,48,48,224,0]),t.t)
B.dD=A.a(s([118,220,0,0,0,0,0,0]),t.t)
B.aU=A.a(s([0,16,56,108,198,198,254,0]),t.t)
B.am=A.a(s([120,204,192,204,120,24,12,120]),t.t)
B.d2=A.a(s([0,204,0,204,204,204,126,0]),t.t)
B.ds=A.a(s([28,0,120,204,252,192,120,0]),t.t)
B.bU=A.a(s([126,195,60,6,62,102,63,0]),t.t)
B.a9=A.a(s([204,0,120,12,124,204,126,0]),t.t)
B.aY=A.a(s([224,0,120,12,124,204,126,0]),t.t)
B.a_=A.a(s([48,48,120,12,124,204,126,0]),t.t)
B.bd=A.a(s([0,0,120,192,192,120,12,56]),t.t)
B.db=A.a(s([126,195,60,102,126,96,60,0]),t.t)
B.aE=A.a(s([204,0,120,204,252,192,120,0]),t.t)
B.cR=A.a(s([224,0,120,204,252,192,120,0]),t.t)
B.d3=A.a(s([204,0,112,48,48,48,120,0]),t.t)
B.cH=A.a(s([124,198,56,24,24,24,60,0]),t.t)
B.aQ=A.a(s([224,0,112,48,48,48,120,0]),t.t)
B.dy=A.a(s([198,56,108,198,254,198,198,0]),t.t)
B.cO=A.a(s([48,48,0,120,204,252,204,0]),t.t)
B.bv=A.a(s([28,0,252,96,120,96,252,0]),t.t)
B.dr=A.a(s([0,0,127,12,127,204,127,0]),t.t)
B.aJ=A.a(s([62,108,204,254,204,204,206,0]),t.t)
B.dk=A.a(s([120,204,0,120,204,204,120,0]),t.t)
B.a5=A.a(s([0,204,0,120,204,204,120,0]),t.t)
B.dA=A.a(s([0,224,0,120,204,204,120,0]),t.t)
B.aH=A.a(s([120,204,0,204,204,204,126,0]),t.t)
B.cK=A.a(s([0,224,0,204,204,204,126,0]),t.t)
B.ap=A.a(s([0,204,0,204,204,124,12,248]),t.t)
B.ab=A.a(s([195,24,60,102,102,60,24,0]),t.t)
B.cX=A.a(s([204,0,204,204,204,204,120,0]),t.t)
B.Q=A.a(s([24,24,126,192,192,126,24,24]),t.t)
B.ay=A.a(s([56,108,100,240,96,230,252,0]),t.t)
B.aS=A.a(s([204,204,120,252,48,252,48,48]),t.t)
B.d7=A.a(s([248,204,204,250,198,207,198,199]),t.t)
B.bG=A.a(s([14,27,24,60,24,24,216,112]),t.t)
B.au=A.a(s([28,0,120,12,124,204,126,0]),t.t)
B.c5=A.a(s([56,0,112,48,48,48,120,0]),t.t)
B.ax=A.a(s([0,28,0,120,204,204,120,0]),t.t)
B.cp=A.a(s([0,28,0,204,204,204,126,0]),t.t)
B.aN=A.a(s([0,248,0,248,204,204,204,0]),t.t)
B.cF=A.a(s([252,0,204,236,252,220,204,0]),t.t)
B.a6=A.a(s([60,108,108,62,0,126,0,0]),t.t)
B.c2=A.a(s([56,108,108,56,0,124,0,0]),t.t)
B.cY=A.a(s([48,0,48,96,192,204,120,0]),t.t)
B.aP=A.a(s([0,0,0,252,192,192,0,0]),t.t)
B.aw=A.a(s([0,0,0,252,12,12,0,0]),t.t)
B.cS=A.a(s([195,198,204,222,51,102,204,15]),t.t)
B.ao=A.a(s([195,198,204,219,55,111,207,3]),t.t)
B.bJ=A.a(s([24,24,0,24,24,24,24,0]),t.t)
B.bI=A.a(s([0,51,102,204,102,51,0,0]),t.t)
B.b2=A.a(s([0,204,102,51,102,204,0,0]),t.t)
B.cr=A.a(s([34,136,34,136,34,136,34,136]),t.t)
B.dl=A.a(s([85,170,85,170,85,170,85,170]),t.t)
B.bB=A.a(s([219,119,219,238,219,119,219,238]),t.t)
B.aT=A.a(s([24,24,24,24,24,24,24,24]),t.t)
B.aO=A.a(s([24,24,24,24,248,24,24,24]),t.t)
B.bQ=A.a(s([24,24,248,24,248,24,24,24]),t.t)
B.dC=A.a(s([54,54,54,54,246,54,54,54]),t.t)
B.cd=A.a(s([0,0,0,0,254,54,54,54]),t.t)
B.aK=A.a(s([0,0,248,24,248,24,24,24]),t.t)
B.a3=A.a(s([54,54,246,6,246,54,54,54]),t.t)
B.cj=A.a(s([54,54,54,54,54,54,54,54]),t.t)
B.c1=A.a(s([0,0,254,6,246,54,54,54]),t.t)
B.cn=A.a(s([54,54,246,6,254,0,0,0]),t.t)
B.ah=A.a(s([54,54,54,54,254,0,0,0]),t.t)
B.U=A.a(s([24,24,248,24,248,0,0,0]),t.t)
B.Z=A.a(s([0,0,0,0,248,24,24,24]),t.t)
B.S=A.a(s([24,24,24,24,31,0,0,0]),t.t)
B.bO=A.a(s([24,24,24,24,255,0,0,0]),t.t)
B.bf=A.a(s([0,0,0,0,255,24,24,24]),t.t)
B.cW=A.a(s([24,24,24,24,31,24,24,24]),t.t)
B.bM=A.a(s([0,0,0,0,255,0,0,0]),t.t)
B.ck=A.a(s([24,24,24,24,255,24,24,24]),t.t)
B.cv=A.a(s([24,24,31,24,31,24,24,24]),t.t)
B.b4=A.a(s([54,54,54,54,55,54,54,54]),t.t)
B.dh=A.a(s([54,54,55,48,63,0,0,0]),t.t)
B.da=A.a(s([0,0,63,48,55,54,54,54]),t.t)
B.bz=A.a(s([54,54,247,0,255,0,0,0]),t.t)
B.bo=A.a(s([0,0,255,0,247,54,54,54]),t.t)
B.aM=A.a(s([54,54,55,48,55,54,54,54]),t.t)
B.aL=A.a(s([0,0,255,0,255,0,0,0]),t.t)
B.du=A.a(s([54,54,247,0,247,54,54,54]),t.t)
B.cB=A.a(s([24,24,255,0,255,0,0,0]),t.t)
B.C=A.a(s([54,54,54,54,255,0,0,0]),t.t)
B.dn=A.a(s([0,0,255,0,255,24,24,24]),t.t)
B.bW=A.a(s([0,0,0,0,255,54,54,54]),t.t)
B.ce=A.a(s([54,54,54,54,63,0,0,0]),t.t)
B.bj=A.a(s([24,24,31,24,31,0,0,0]),t.t)
B.c8=A.a(s([0,0,31,24,31,24,24,24]),t.t)
B.cy=A.a(s([0,0,0,0,63,54,54,54]),t.t)
B.cE=A.a(s([54,54,54,54,255,54,54,54]),t.t)
B.bE=A.a(s([24,24,255,24,255,24,24,24]),t.t)
B.d8=A.a(s([24,24,24,24,248,0,0,0]),t.t)
B.b_=A.a(s([0,0,0,0,31,24,24,24]),t.t)
B.bX=A.a(s([255,255,255,255,255,255,255,255]),t.t)
B.c_=A.a(s([0,0,0,0,255,255,255,255]),t.t)
B.b9=A.a(s([240,240,240,240,240,240,240,240]),t.t)
B.cg=A.a(s([15,15,15,15,15,15,15,15]),t.t)
B.cV=A.a(s([255,255,255,255,0,0,0,0]),t.t)
B.dB=A.a(s([0,0,118,220,200,220,118,0]),t.t)
B.dd=A.a(s([0,120,204,248,204,248,192,192]),t.t)
B.af=A.a(s([0,252,204,192,192,192,192,0]),t.t)
B.bZ=A.a(s([0,254,108,108,108,108,108,0]),t.t)
B.d9=A.a(s([252,204,96,48,96,204,252,0]),t.t)
B.bc=A.a(s([0,0,126,216,216,216,112,0]),t.t)
B.bi=A.a(s([0,102,102,102,102,124,96,192]),t.t)
B.ct=A.a(s([0,118,220,24,24,24,24,0]),t.t)
B.a8=A.a(s([252,48,120,204,204,120,48,252]),t.t)
B.az=A.a(s([56,108,198,254,198,108,56,0]),t.t)
B.ac=A.a(s([56,108,198,198,108,108,238,0]),t.t)
B.D=A.a(s([28,48,24,124,204,204,120,0]),t.t)
B.dp=A.a(s([0,0,126,219,219,126,0,0]),t.t)
B.be=A.a(s([6,12,126,219,219,126,96,192]),t.t)
B.a1=A.a(s([56,96,192,248,192,96,56,0]),t.t)
B.ca=A.a(s([120,204,204,204,204,204,204,0]),t.t)
B.cC=A.a(s([0,252,0,252,0,252,0,0]),t.t)
B.Y=A.a(s([48,48,252,48,48,0,252,0]),t.t)
B.b1=A.a(s([96,48,24,48,96,0,252,0]),t.t)
B.cM=A.a(s([24,48,96,48,24,0,252,0]),t.t)
B.b8=A.a(s([14,27,27,24,24,24,24,24]),t.t)
B.d1=A.a(s([24,24,24,24,24,216,216,112]),t.t)
B.c4=A.a(s([48,48,0,252,0,48,48,0]),t.t)
B.I=A.a(s([0,118,220,0,118,220,0,0]),t.t)
B.cq=A.a(s([56,108,108,56,0,0,0,0]),t.t)
B.K=A.a(s([0,0,0,24,24,0,0,0]),t.t)
B.de=A.a(s([0,0,0,0,24,0,0,0]),t.t)
B.N=A.a(s([15,12,12,12,236,108,60,28]),t.t)
B.bN=A.a(s([120,108,108,108,108,0,0,0]),t.t)
B.al=A.a(s([112,24,48,96,120,0,0,0]),t.t)
B.cU=A.a(s([0,0,60,60,60,60,0,0]),t.t)
B.dF=new A.bl(["\u263a",B.d0,"\u263b",B.a2,"\u2665",B.dx,"\u2666",B.bY,"\u2663",B.aW,"\u2660",B.b7,"\u2022",B.aq,"\u25d8",B.at,"\u25cb",B.aF,"\u25d9",B.cL,"\u2642",B.dw,"\u2640",B.dv,"\u266a",B.cI,"\u266b",B.M,"\u263c",B.R,"\u25ba",B.an,"\u25c4",B.bt,"\u2195",B.cb,"\u203c",B.c7,"\xb6",B.ch,"\xa7",B.ci,"\u25ac",B.bH,"\u21a8",B.bK,"\u2191",B.H,"\u2193",B.d5,"\u2192",B.cZ,"\u2190",B.ak,"\u221f",B.bP,"\u2194",B.bm,"\u25b2",B.a0,"\u25bc",B.bL," ",B.aR,"!",B.bu,'"',B.P,"#",B.ae,"$",B.bT,"%",B.G,"&",B.cu,"'",B.ad,"(",B.L,")",B.bq,"*",B.cl,"+",B.dE,",",B.bV,"-",B.bl,".",B.c9,"/",B.W,"0",B.aZ,"1",B.cc,"2",B.bR,"3",B.dz,"4",B.bs,"5",B.d_,"6",B.dg,"7",B.bS,"8",B.co,"9",B.b5,":",B.cT,";",B.aI,"<",B.br,"=",B.bg,">",B.as,"?",B.ai,"@",B.dc,"A",B.c3,"B",B.aC,"C",B.a4,"D",B.X,"E",B.aa,"F",B.cf,"G",B.ag,"H",B.aj,"I",B.cD,"J",B.bF,"K",B.bx,"L",B.bw,"M",B.aD,"N",B.O,"O",B.cN,"P",B.bb,"Q",B.cx,"R",B.F,"S",B.a7,"T",B.dq,"U",B.aA,"V",B.T,"W",B.cG,"X",B.cA,"Y",B.V,"Z",B.J,"[",B.bn,"\\",B.cs,"]",B.bp,"^",B.df,"_",B.E,"`",B.aB,"a",B.d6,"b",B.c6,"c",B.cz,"d",B.aX,"e",B.di,"f",B.aG,"g",B.cw,"h",B.ar,"i",B.cm,"j",B.bA,"k",B.b3,"l",B.bC,"m",B.bk,"n",B.bD,"o",B.b6,"p",B.dm,"q",B.dj,"r",B.bh,"s",B.cQ,"t",B.cJ,"u",B.c0,"v",B.aV,"w",B.ba,"x",B.by,"y",B.dt,"z",B.d4,"{",B.b0,"|",B.cP,"}",B.av,"~",B.dD,"\u2302",B.aU,"\xc7",B.am,"\xfc",B.d2,"\xe9",B.ds,"\xe2",B.bU,"\xe4",B.a9,"\xe0",B.aY,"\xe5",B.a_,"\xe7",B.bd,"\xea",B.db,"\xeb",B.aE,"\xe8",B.cR,"\xef",B.d3,"\xee",B.cH,"\xec",B.aQ,"\xc4",B.dy,"\xc5",B.cO,"\xc9",B.bv,"\xe6",B.dr,"\xc6",B.aJ,"\xf4",B.dk,"\xf6",B.a5,"\xf2",B.dA,"\xfb",B.aH,"\xf9",B.cK,"\xff",B.ap,"\xd6",B.ab,"\xdc",B.cX,"\xa2",B.Q,"\xa3",B.ay,"\xa5",B.aS,"\u20a7",B.d7,"\u0192",B.bG,"\xe1",B.au,"\xed",B.c5,"\xf3",B.ax,"\xfa",B.cp,"\xf1",B.aN,"\xd1",B.cF,"\xaa",B.a6,"\xba",B.c2,"\xbf",B.cY,"\u2310",B.aP,"\xac",B.aw,"\xbd",B.cS,"\xbc",B.ao,"\xa1",B.bJ,"\xab",B.bI,"\xbb",B.b2,"\u2591",B.cr,"\u2592",B.dl,"\u2593",B.bB,"\u2502",B.aT,"\u2524",B.aO,"\u2561",B.bQ,"\u2562",B.dC,"\u2556",B.cd,"\u2555",B.aK,"\u2563",B.a3,"\u2551",B.cj,"\u2557",B.c1,"\u255d",B.cn,"\u255c",B.ah,"\u255b",B.U,"\u2510",B.Z,"\u2514",B.S,"\u2534",B.bO,"\u252c",B.bf,"\u251c",B.cW,"\u2500",B.bM,"\u253c",B.ck,"\u255e",B.cv,"\u255f",B.b4,"\u255a",B.dh,"\u2554",B.da,"\u2569",B.bz,"\u2566",B.bo,"\u2560",B.aM,"\u2550",B.aL,"\u256c",B.du,"\u2567",B.cB,"\u2568",B.C,"\u2564",B.dn,"\u2565",B.bW,"\u2559",B.ce,"\u2558",B.bj,"\u2552",B.c8,"\u2553",B.cy,"\u256b",B.cE,"\u256a",B.bE,"\u2518",B.d8,"\u250c",B.b_,"\u2588",B.bX,"\u2584",B.c_,"\u258c",B.b9,"\u2590",B.cg,"\u2580",B.cV,"\u03b1",B.dB,"\xdf",B.dd,"\u0393",B.af,"\u03c0",B.bZ,"\u03a3",B.d9,"\u03c3",B.bc,"\xb5",B.bi,"\u03c4",B.ct,"\u03a6",B.a8,"\u0398",B.az,"\u03a9",B.ac,"\u03b4",B.D,"\u221e",B.dp,"\u03c6",B.be,"\u03b5",B.a1,"\u2229",B.ca,"\u2261",B.cC,"\xb1",B.Y,"\u2265",B.b1,"\u2264",B.cM,"\u2320",B.b8,"\u2321",B.d1,"\xf7",B.c4,"\u2248",B.I,"\xb0",B.cq,"\u2219",B.K,"\xb7",B.de,"\u221a",B.N,"\u207f",B.bN,"\xb2",B.al,"\u25a0",B.cU],A.dO("bl<u,h<b>>"))
B.m=new A.E("replace")
B.dG=new A.E("inverse")
B.dH=new A.E("over")
B.dI=new A.E("under")
B.dJ=new A.E("stain")
B.dK=new A.E("delete")
B.dL=new A.E("maskDestination")
B.dM=new A.E("maskSource")
B.d=new A.af("ready")
B.dN=new A.af("awaitingKey")
B.i=new A.af("awaitingString")
B.o=new A.af("awaitingMouseClick")
B.dO=A.C("ii")
B.dP=A.C("ij")
B.dQ=A.C("fd")
B.dR=A.C("fe")
B.dS=A.C("ff")
B.dT=A.C("fg")
B.dU=A.C("fh")
B.dV=A.C("e")
B.dW=A.C("fC")
B.dX=A.C("cB")
B.dY=A.C("fD")
B.dZ=A.C("fE")})();(function staticFields(){$.cU=null
$.x=A.a([],t.f)
$.e3=null
$.e_=null
$.dZ=null
$.eJ=null
$.eA=null
$.eM=null
$.da=null
$.de=null
$.dQ=null
$.aY=A.a([],A.dO("p<h<e>?>"))
$.ak=null
$.b9=null
$.ba=null
$.dJ=!1
$.i=B.b})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"ik","dn",()=>A.i5("_$dart_dartClosure"))
s($,"iG","f0",()=>B.b.aT(new A.dm()))
s($,"it","eR",()=>A.J(A.cA({
toString:function(){return"$receiver$"}})))
s($,"iu","eS",()=>A.J(A.cA({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"iv","eT",()=>A.J(A.cA(null)))
s($,"iw","eU",()=>A.J(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"iz","eX",()=>A.J(A.cA(void 0)))
s($,"iA","eY",()=>A.J(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"iy","eW",()=>A.J(A.e9(null)))
s($,"ix","eV",()=>A.J(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"iC","f_",()=>A.J(A.e9(void 0)))
s($,"iB","eZ",()=>A.J(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"iD","dU",()=>A.fF())
s($,"im","dp",()=>$.f0())
s($,"iE","dq",()=>A.dT(B.dV))
s($,"is","eQ",()=>A.dw(8,0,t.S))
s($,"ir","eP",()=>A.dw(8,255,t.S))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.bs,ArrayBufferView:A.aH,DataView:A.bt,Float32Array:A.bu,Float64Array:A.bv,Int16Array:A.bw,Int32Array:A.bx,Int8Array:A.by,Uint16Array:A.bz,Uint32Array:A.bA,Uint8ClampedArray:A.aI,CanvasPixelArray:A.aI,Uint8Array:A.bB})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.ac.$nativeSuperclassTag="ArrayBufferView"
A.aU.$nativeSuperclassTag="ArrayBufferView"
A.aV.$nativeSuperclassTag="ArrayBufferView"
A.aF.$nativeSuperclassTag="ArrayBufferView"
A.aW.$nativeSuperclassTag="ArrayBufferView"
A.aX.$nativeSuperclassTag="ArrayBufferView"
A.aG.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.df
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=index.js.map
