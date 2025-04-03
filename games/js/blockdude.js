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
if(a[b]!==s){A.i8(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.dP(b)
return new s(c,this)}:function(){if(s===null)s=A.dP(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.dP(a).prototype
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
dU(a,b,c,d){return{i:a,p:b,e:c,x:d}},
dS(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.dT==null){A.hY()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.ef("Return interceptor for "+A.q(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.d_
if(o==null)o=$.d_=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.i2(a)
if(p!=null)return p
if(typeof a=="function")return B.L
s=Object.getPrototypeOf(a)
if(s==null)return B.z
if(s===Object.prototype)return B.z
if(typeof q=="function"){o=$.d_
if(o==null)o=$.d_=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.t,enumerable:false,writable:true,configurable:true})
return B.t}return B.t},
e8(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
fp(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.e8(r))break;++b}return b},
fq(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.b(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.e8(q))break}return b},
a5(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.au.prototype
return J.bn.prototype}if(typeof a=="string")return J.a0.prototype
if(a==null)return J.av.prototype
if(typeof a=="boolean")return J.bm.prototype
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.R.prototype
if(typeof a=="symbol")return J.ay.prototype
if(typeof a=="bigint")return J.aw.prototype
return a}if(a instanceof A.e)return a
return J.dS(a)},
dR(a){if(typeof a=="string")return J.a0.prototype
if(a==null)return a
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.R.prototype
if(typeof a=="symbol")return J.ay.prototype
if(typeof a=="bigint")return J.aw.prototype
return a}if(a instanceof A.e)return a
return J.dS(a)},
hQ(a){if(a==null)return a
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.R.prototype
if(typeof a=="symbol")return J.ay.prototype
if(typeof a=="bigint")return J.aw.prototype
return a}if(a instanceof A.e)return a
return J.dS(a)},
hR(a){if(typeof a=="number")return J.a8.prototype
if(a==null)return a
if(!(a instanceof A.e))return J.a1.prototype
return a},
hS(a){if(typeof a=="string")return J.a0.prototype
if(a==null)return a
if(!(a instanceof A.e))return J.a1.prototype
return a},
a7(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.a5(a).B(a,b)},
F(a){return J.a5(a).gk(a)},
dZ(a){return J.hQ(a).gao(a)},
e_(a){return J.dR(a).gq(a)},
f8(a){return J.a5(a).gm(a)},
e0(a){return J.hR(a).bN(a)},
ba(a){return J.a5(a).h(a)},
f9(a){return J.hS(a).bO(a)},
bl:function bl(){},
bm:function bm(){},
av:function av(){},
ax:function ax(){},
S:function S(){},
bC:function bC(){},
a1:function a1(){},
R:function R(){},
aw:function aw(){},
ay:function ay(){},
o:function o(a){this.$ti=a},
c8:function c8(a){this.$ti=a},
bb:function bb(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
a8:function a8(){},
au:function au(){},
bn:function bn(){},
a0:function a0(){}},A={dw:function dw(){},
T(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
dD(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
dO(a,b,c){return a},
eQ(a){var s,r
for(s=$.O.length,r=0;r<s;++r)if(a===$.O[r])return!0
return!1},
e7(){return new A.af("No element")},
aB:function aB(a){this.a=a},
dn:function dn(){},
cl:function cl(){},
bq:function bq(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
at:function at(){},
eV(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
iN(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
q(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.ba(a)
return s},
ad(a){var s,r=$.e9
if(r==null)r=$.e9=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
cf(a){return A.fu(a)},
fu(a){var s,r,q,p
if(a instanceof A.e)return A.u(A.b8(a),null)
s=J.a5(a)
if(s===B.J||s===B.M||t.B.b(a)){r=B.u(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.u(A.b8(a),null)},
ea(a){if(a==null||typeof a=="number"||A.dK(a))return J.ba(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.a_)return a.h(0)
if(a instanceof A.ai)return a.aP(!0)
return"Instance of '"+A.cf(a)+"'"},
fv(a){var s=a.$thrownJsError
if(s==null)return null
return A.E(s)},
b(a,b){if(a==null)J.e_(a)
throw A.d(A.dQ(a,b))},
dQ(a,b){var s,r="index"
if(!A.eC(b))return new A.C(!0,b,r,null)
s=J.e_(a)
if(b<0||b>=s)return A.fl(b,s,a,r)
return new A.aI(null,null,!0,b,r,"Value not in range")},
dN(a){return new A.C(!0,a,null,null)},
d(a){return A.eP(new Error(),a)},
eP(a,b){var s
if(b==null)b=new A.I()
a.dartException=b
s=A.i9
if("defineProperty" in Object){Object.defineProperty(a,"message",{get:s})
a.name=""}else a.toString=s
return a},
i9(){return J.ba(this.dartException)},
dp(a){throw A.d(a)},
dX(a,b){throw A.eP(b,a)},
c2(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.dX(A.hb(a,b,c),s)},
hb(a,b,c){var s,r,q,p,o,n,m,l,k
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
eU(a){throw A.d(A.bf(a))},
J(a){var s,r,q,p,o,n
a=A.i5(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.a([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.cC(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
cD(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
ee(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
dx(a,b){var s=b==null,r=s?null:b.method
return new A.bo(a,r,s?null:b.receiver)},
P(a){if(a==null)return new A.cd(a)
if(a instanceof A.as)return A.Y(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.Y(a,a.dartException)
return A.hF(a)},
Y(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
hF(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.a.bt(r,16)&8191)===10)switch(q){case 438:return A.Y(a,A.dx(A.q(s)+" (Error "+q+")",null))
case 445:case 5007:A.q(s)
return A.Y(a,new A.aH())}}if(a instanceof TypeError){p=$.eY()
o=$.eZ()
n=$.f_()
m=$.f0()
l=$.f3()
k=$.f4()
j=$.f2()
$.f1()
i=$.f6()
h=$.f5()
g=p.u(s)
if(g!=null)return A.Y(a,A.dx(s,g))
else{g=o.u(s)
if(g!=null){g.method="call"
return A.Y(a,A.dx(s,g))}else if(n.u(s)!=null||m.u(s)!=null||l.u(s)!=null||k.u(s)!=null||j.u(s)!=null||m.u(s)!=null||i.u(s)!=null||h.u(s)!=null)return A.Y(a,new A.aH())}return A.Y(a,new A.bH(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.aK()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.Y(a,new A.C(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.aK()
return a},
E(a){var s
if(a instanceof A.as)return a.b
if(a==null)return new A.aX(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.aX(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
dV(a){if(a==null)return J.F(a)
if(typeof a=="object")return A.ad(a)
return J.F(a)},
hL(a){if(typeof a=="number")return B.K.gk(a)
if(a instanceof A.bW)return A.ad(a)
if(a instanceof A.ai)return a.gk(a)
return A.dV(a)},
hP(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=a.length
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
if(m==null)o[q]=b.V(q,p)
else m.b=p}else if(typeof q=="number"&&(q&0x3fffffff)===q){l=b.c
if(l==null){n=Object.create(null)
n["<non-identifier-key>"]=n
delete n["<non-identifier-key>"]
b.c=n
l=n}m=l[q]
if(m==null)l[q]=b.V(q,p)
else m.b=p}else{k=b.d
if(k==null){n=Object.create(null)
n["<non-identifier-key>"]=n
delete n["<non-identifier-key>"]
b.d=n
k=n}j=b.al(q)
i=k[j]
if(i==null)k[j]=[b.V(q,p)]
else{r=b.am(i,q)
if(r>=0)i[r].b=p
else i.push(b.V(q,p))}}}return b},
hk(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(A.c7("Unsupported number of arguments for wrapped closure"))},
c_(a,b){var s=a.$identity
if(!!s)return s
s=A.hM(a,b)
a.$identity=s
return s},
hM(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.hk)},
fg(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.cm().constructor.prototype):Object.create(new A.ar(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.e6(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.fc(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.e6(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
fc(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.fa)}throw A.d("Error in functionType of tearoff")},
fd(a,b,c,d){var s=A.e5
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
e6(a,b,c,d){if(c)return A.ff(a,b,d)
return A.fd(b.length,d,a,b)},
fe(a,b,c,d){var s=A.e5,r=A.fb
switch(b?-1:a){case 0:throw A.d(new A.bD("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
ff(a,b,c){var s,r
if($.e3==null)$.e3=A.e2("interceptor")
if($.e4==null)$.e4=A.e2("receiver")
s=b.length
r=A.fe(s,c,a,b)
return r},
dP(a){return A.fg(a)},
fa(a,b){return A.b3(v.typeUniverse,A.b8(a.a),b)},
e5(a){return a.a},
fb(a){return a.b},
e2(a){var s,r,q,p=new A.ar("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.d(A.aq("Field name "+a+" not found.",null))},
iR(a){throw A.d(new A.bN(a))},
hT(a){return v.getIsolateTag(a)},
i7(){return self},
i2(a){var s,r,q,p,o,n=$.eO.$1(a),m=$.de[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.dl[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.eL.$2(a,n)
if(q!=null){m=$.de[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.dl[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.dm(s)
$.de[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.dl[n]=s
return s}if(p==="-"){o=A.dm(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.eS(a,s)
if(p==="*")throw A.d(A.ef(n))
if(v.leafTags[n]===true){o=A.dm(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.eS(a,s)},
eS(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.dU(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
dm(a){return J.dU(a,!1,null,!!a.$iv)},
i3(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.dm(s)
else return J.dU(s,c,null,null)},
hY(){if(!0===$.dT)return
$.dT=!0
A.hZ()},
hZ(){var s,r,q,p,o,n,m,l
$.de=Object.create(null)
$.dl=Object.create(null)
A.hX()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.eT.$1(o)
if(n!=null){m=A.i3(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
hX(){var s,r,q,p,o,n,m=B.B()
m=A.an(B.C,A.an(B.D,A.an(B.v,A.an(B.v,A.an(B.E,A.an(B.F,A.an(B.G(B.u),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.eO=new A.di(p)
$.eL=new A.dj(o)
$.eT=new A.dk(n)},
an(a,b){return a(b)||b},
hN(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
i5(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
A:function A(a,b){this.a=a
this.b=b},
bg:function bg(){},
bj:function bj(a,b){this.a=a
this.$ti=b},
cC:function cC(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aH:function aH(){},
bo:function bo(a,b,c){this.a=a
this.b=b
this.c=c},
bH:function bH(a){this.a=a},
cd:function cd(a){this.a=a},
as:function as(a,b){this.a=a
this.b=b},
aX:function aX(a){this.a=a
this.b=null},
a_:function a_(){},
c3:function c3(){},
c4:function c4(){},
cr:function cr(){},
cm:function cm(){},
ar:function ar(a,b){this.a=a
this.b=b},
bN:function bN(a){this.a=a},
bD:function bD(a){this.a=a},
aA:function aA(){},
cb:function cb(a,b){this.a=a
this.b=b
this.c=null},
az:function az(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
di:function di(a){this.a=a},
dj:function dj(a){this.a=a},
dk:function dk(a){this.a=a},
ai:function ai(){},
bT:function bT(){},
a3(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.dQ(b,a))},
br:function br(){},
aF:function aF(){},
bs:function bs(){},
ab:function ab(){},
aD:function aD(){},
aE:function aE(){},
bt:function bt(){},
bu:function bu(){},
bv:function bv(){},
bw:function bw(){},
bx:function bx(){},
by:function by(){},
bz:function bz(){},
aG:function aG(){},
bA:function bA(){},
aR:function aR(){},
aS:function aS(){},
aT:function aT(){},
aU:function aU(){},
eb(a,b){var s=b.c
return s==null?b.c=A.dH(a,b.x,!0):s},
dA(a,b){var s=b.c
return s==null?b.c=A.b1(a,"H",[b.x]):s},
ec(a){var s=a.w
if(s===6||s===7||s===8)return A.ec(a.x)
return s===12||s===13},
fx(a){return a.as},
dh(a){return A.bX(v.typeUniverse,a,!1)},
W(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.W(a1,s,a3,a4)
if(r===s)return a2
return A.eq(a1,r,!0)
case 7:s=a2.x
r=A.W(a1,s,a3,a4)
if(r===s)return a2
return A.dH(a1,r,!0)
case 8:s=a2.x
r=A.W(a1,s,a3,a4)
if(r===s)return a2
return A.eo(a1,r,!0)
case 9:q=a2.y
p=A.am(a1,q,a3,a4)
if(p===q)return a2
return A.b1(a1,a2.x,p)
case 10:o=a2.x
n=A.W(a1,o,a3,a4)
m=a2.y
l=A.am(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.dF(a1,n,l)
case 11:k=a2.x
j=a2.y
i=A.am(a1,j,a3,a4)
if(i===j)return a2
return A.ep(a1,k,i)
case 12:h=a2.x
g=A.W(a1,h,a3,a4)
f=a2.y
e=A.hC(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.en(a1,g,e)
case 13:d=a2.y
a4+=d.length
c=A.am(a1,d,a3,a4)
o=a2.x
n=A.W(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.dG(a1,n,c,!0)
case 14:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.d(A.bd("Attempted to substitute unexpected RTI kind "+a0))}},
am(a,b,c,d){var s,r,q,p,o=b.length,n=A.d7(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.W(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
hD(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.d7(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.W(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
hC(a,b,c,d){var s,r=b.a,q=A.am(a,r,c,d),p=b.b,o=A.am(a,p,c,d),n=b.c,m=A.hD(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.bR()
s.a=q
s.b=o
s.c=m
return s},
a(a,b){a[v.arrayRti]=b
return a},
eN(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.hW(s)
return a.$S()}return null},
i_(a,b){var s
if(A.ec(b))if(a instanceof A.a_){s=A.eN(a)
if(s!=null)return s}return A.b8(a)},
b8(a){if(a instanceof A.e)return A.aj(a)
if(Array.isArray(a))return A.dI(a)
return A.dJ(J.a5(a))},
dI(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
aj(a){var s=a.$ti
return s!=null?s:A.dJ(a)},
dJ(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.hi(a,s)},
hi(a,b){var s=a instanceof A.a_?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.h2(v.typeUniverse,s.name)
b.$ccache=r
return r},
hW(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.bX(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
hV(a){return A.a4(A.aj(a))},
dM(a){var s
if(a instanceof A.ai)return A.hO(a.$r,a.aG())
s=a instanceof A.a_?A.eN(a):null
if(s!=null)return s
if(t.R.b(a))return J.f8(a).a
if(Array.isArray(a))return A.dI(a)
return A.b8(a)},
a4(a){var s=a.r
return s==null?a.r=A.ex(a):s},
ex(a){var s,r,q=a.as,p=q.replace(/\*/g,"")
if(p===q)return a.r=new A.bW(a)
s=A.bX(v.typeUniverse,p,!0)
r=s.r
return r==null?s.r=A.ex(s):r},
hO(a,b){var s,r,q=b,p=q.length
if(p===0)return t.F
if(0>=p)return A.b(q,0)
s=A.b3(v.typeUniverse,A.dM(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.b(q,r)
s=A.er(v.typeUniverse,s,A.dM(q[r]))}return A.b3(v.typeUniverse,s,a)},
B(a){return A.a4(A.bX(v.typeUniverse,a,!1))},
hh(a){var s,r,q,p,o,n,m=this
if(m===t.K)return A.L(m,a,A.hp)
if(!A.M(m))s=m===t._
else s=!0
if(s)return A.L(m,a,A.ht)
s=m.w
if(s===7)return A.L(m,a,A.hf)
if(s===1)return A.L(m,a,A.eD)
r=s===6?m.x:m
q=r.w
if(q===8)return A.L(m,a,A.hl)
if(r===t.S)p=A.eC
else if(r===t.i||r===t.H)p=A.ho
else if(r===t.N)p=A.hr
else p=r===t.y?A.dK:null
if(p!=null)return A.L(m,a,p)
if(q===9){o=r.x
if(r.y.every(A.i0)){m.f="$i"+o
if(o==="f")return A.L(m,a,A.hn)
return A.L(m,a,A.hs)}}else if(q===11){n=A.hN(r.x,r.y)
return A.L(m,a,n==null?A.eD:n)}return A.L(m,a,A.hd)},
L(a,b,c){a.b=c
return a.b(b)},
hg(a){var s,r=this,q=A.hc
if(!A.M(r))s=r===t._
else s=!0
if(s)q=A.h5
else if(r===t.K)q=A.h4
else{s=A.b9(r)
if(s)q=A.he}r.a=q
return r.a(a)},
bY(a){var s=a.w,r=!0
if(!A.M(a))if(!(a===t._))if(!(a===t.A))if(s!==7)if(!(s===6&&A.bY(a.x)))r=s===8&&A.bY(a.x)||a===t.P||a===t.T
return r},
hd(a){var s=this
if(a==null)return A.bY(s)
return A.i1(v.typeUniverse,A.i_(a,s),s)},
hf(a){if(a==null)return!0
return this.x.b(a)},
hs(a){var s,r=this
if(a==null)return A.bY(r)
s=r.f
if(a instanceof A.e)return!!a[s]
return!!J.a5(a)[s]},
hn(a){var s,r=this
if(a==null)return A.bY(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.e)return!!a[s]
return!!J.a5(a)[s]},
hc(a){var s=this
if(a==null){if(A.b9(s))return a}else if(s.b(a))return a
A.ey(a,s)},
he(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.ey(a,s)},
ey(a,b){throw A.d(A.fU(A.eh(a,A.u(b,null))))},
eh(a,b){return A.c6(a)+": type '"+A.u(A.dM(a),null)+"' is not a subtype of type '"+b+"'"},
fU(a){return new A.b_("TypeError: "+a)},
t(a,b){return new A.b_("TypeError: "+A.eh(a,b))},
hl(a){var s=this,r=s.w===6?s.x:s
return r.x.b(a)||A.dA(v.typeUniverse,r).b(a)},
hp(a){return a!=null},
h4(a){if(a!=null)return a
throw A.d(A.t(a,"Object"))},
ht(a){return!0},
h5(a){return a},
eD(a){return!1},
dK(a){return!0===a||!1===a},
ix(a){if(!0===a)return!0
if(!1===a)return!1
throw A.d(A.t(a,"bool"))},
iz(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.t(a,"bool"))},
iy(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.t(a,"bool?"))},
iA(a){if(typeof a=="number")return a
throw A.d(A.t(a,"double"))},
iC(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.t(a,"double"))},
iB(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.t(a,"double?"))},
eC(a){return typeof a=="number"&&Math.floor(a)===a},
iD(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.d(A.t(a,"int"))},
iF(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.t(a,"int"))},
iE(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.t(a,"int?"))},
ho(a){return typeof a=="number"},
iG(a){if(typeof a=="number")return a
throw A.d(A.t(a,"num"))},
iI(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.t(a,"num"))},
iH(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.t(a,"num?"))},
hr(a){return typeof a=="string"},
iJ(a){if(typeof a=="string")return a
throw A.d(A.t(a,"String"))},
iL(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.t(a,"String"))},
iK(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.t(a,"String?"))},
eH(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.u(a[q],b)
return s},
hx(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.eH(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.u(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
ez(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", ",a3=null
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
if(!l)n+=" extends "+A.u(j,a5)}n+=">"}else n=""
p=a4.x
h=a4.y
g=h.a
f=g.length
e=h.b
d=e.length
c=h.c
b=c.length
a=A.u(p,a5)
for(a0="",a1="",q=0;q<f;++q,a1=a2)a0+=a1+A.u(g[q],a5)
if(d>0){a0+=a1+"["
for(a1="",q=0;q<d;++q,a1=a2)a0+=a1+A.u(e[q],a5)
a0+="]"}if(b>0){a0+=a1+"{"
for(a1="",q=0;q<b;q+=3,a1=a2){a0+=a1
if(c[q+1])a0+="required "
a0+=A.u(c[q+2],a5)+" "+c[q]}a0+="}"}if(a3!=null){a5.toString
a5.length=a3}return n+"("+a0+") => "+a},
u(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6)return A.u(a.x,b)
if(l===7){s=a.x
r=A.u(s,b)
q=s.w
return(q===12||q===13?"("+r+")":r)+"?"}if(l===8)return"FutureOr<"+A.u(a.x,b)+">"
if(l===9){p=A.hE(a.x)
o=a.y
return o.length>0?p+("<"+A.eH(o,b)+">"):p}if(l===11)return A.hx(a,b)
if(l===12)return A.ez(a,b,null)
if(l===13)return A.ez(a.x,b,a.y)
if(l===14){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.b(b,n)
return b[n]}return"?"},
hE(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
h3(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
h2(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.bX(a,b,!1)
else if(typeof m=="number"){s=m
r=A.b2(a,5,"#")
q=A.d7(s)
for(p=0;p<s;++p)q[p]=r
o=A.b1(a,b,q)
n[b]=o
return o}else return m},
h1(a,b){return A.es(a.tR,b)},
h0(a,b){return A.es(a.eT,b)},
bX(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.el(A.ej(a,null,b,c))
r.set(b,s)
return s},
b3(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.el(A.ej(a,b,c,!0))
q.set(c,r)
return r},
er(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.dF(a,b,c.w===10?c.y:[c])
p.set(s,q)
return q},
K(a,b){b.a=A.hg
b.b=A.hh
return b},
b2(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.x(null,null)
s.w=b
s.as=c
r=A.K(a,s)
a.eC.set(c,r)
return r},
eq(a,b,c){var s,r=b.as+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.fZ(a,b,r,c)
a.eC.set(r,s)
return s},
fZ(a,b,c,d){var s,r,q
if(d){s=b.w
if(!A.M(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.x(null,null)
q.w=6
q.x=b
q.as=c
return A.K(a,q)},
dH(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.fY(a,b,r,c)
a.eC.set(r,s)
return s},
fY(a,b,c,d){var s,r,q,p
if(d){s=b.w
r=!0
if(!A.M(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.b9(b.x)
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.x
if(q.w===8&&A.b9(q.x))return q
else return A.eb(a,b)}}p=new A.x(null,null)
p.w=7
p.x=b
p.as=c
return A.K(a,p)},
eo(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.fW(a,b,r,c)
a.eC.set(r,s)
return s},
fW(a,b,c,d){var s,r
if(d){s=b.w
if(A.M(b)||b===t.K||b===t._)return b
else if(s===1)return A.b1(a,"H",[b])
else if(b===t.P||b===t.T)return t.O}r=new A.x(null,null)
r.w=8
r.x=b
r.as=c
return A.K(a,r)},
h_(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.x(null,null)
s.w=14
s.x=b
s.as=q
r=A.K(a,s)
a.eC.set(q,r)
return r},
b0(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
fV(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
b1(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.b0(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.x(null,null)
r.w=9
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.K(a,r)
a.eC.set(p,q)
return q},
dF(a,b,c){var s,r,q,p,o,n
if(b.w===10){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.b0(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.x(null,null)
o.w=10
o.x=s
o.y=r
o.as=q
n=A.K(a,o)
a.eC.set(q,n)
return n},
ep(a,b,c){var s,r,q="+"+(b+"("+A.b0(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.x(null,null)
s.w=11
s.x=b
s.y=c
s.as=q
r=A.K(a,s)
a.eC.set(q,r)
return r},
en(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.b0(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.b0(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.fV(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.x(null,null)
p.w=12
p.x=b
p.y=c
p.as=r
o=A.K(a,p)
a.eC.set(r,o)
return o},
dG(a,b,c,d){var s,r=b.as+("<"+A.b0(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.fX(a,b,c,r,d)
a.eC.set(r,s)
return s},
fX(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.d7(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.W(a,b,r,0)
m=A.am(a,c,r,0)
return A.dG(a,n,m,c!==m)}}l=new A.x(null,null)
l.w=13
l.x=b
l.y=c
l.as=d
return A.K(a,l)},
ej(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
el(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.fN(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.ek(a,r,l,k,!1)
else if(q===46)r=A.ek(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.V(a.u,a.e,k.pop()))
break
case 94:k.push(A.h_(a.u,k.pop()))
break
case 35:k.push(A.b2(a.u,5,"#"))
break
case 64:k.push(A.b2(a.u,2,"@"))
break
case 126:k.push(A.b2(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.fP(a,k)
break
case 38:A.fO(a,k)
break
case 42:p=a.u
k.push(A.eq(p,A.V(p,a.e,k.pop()),a.n))
break
case 63:p=a.u
k.push(A.dH(p,A.V(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.eo(p,A.V(p,a.e,k.pop()),a.n))
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
A.em(a.u,a.e,o)
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
return A.V(a.u,a.e,m)},
fN(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
ek(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===10)o=o.x
n=A.h3(s,o.x)[p]
if(n==null)A.dp('No "'+p+'" in "'+A.fx(o)+'"')
d.push(A.b3(s,o,n))}else d.push(p)
return m},
fP(a,b){var s,r=a.u,q=A.ei(a,b),p=b.pop()
if(typeof p=="string")b.push(A.b1(r,p,q))
else{s=A.V(r,a.e,p)
switch(s.w){case 12:b.push(A.dG(r,s,q,a.n))
break
default:b.push(A.dF(r,s,q))
break}}},
fM(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.ei(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.V(p,a.e,o)
q=new A.bR()
q.a=s
q.b=n
q.c=m
b.push(A.en(p,r,q))
return
case-4:b.push(A.ep(p,b.pop(),s))
return
default:throw A.d(A.bd("Unexpected state under `()`: "+A.q(o)))}},
fO(a,b){var s=b.pop()
if(0===s){b.push(A.b2(a.u,1,"0&"))
return}if(1===s){b.push(A.b2(a.u,4,"1&"))
return}throw A.d(A.bd("Unexpected extended operation "+A.q(s)))},
ei(a,b){var s=b.splice(a.p)
A.em(a.u,a.e,s)
a.p=b.pop()
return s},
V(a,b,c){if(typeof c=="string")return A.b1(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.fQ(a,b,c)}else return c},
em(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.V(a,b,c[s])},
fR(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.V(a,b,c[s])},
fQ(a,b,c){var s,r,q=b.w
if(q===10){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==9)throw A.d(A.bd("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.d(A.bd("Bad index "+c+" for "+b.h(0)))},
i1(a,b,c){var s,r=b.d
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
if(p===6){s=A.eb(a,d)
return A.n(a,b,c,s,e,!1)}if(r===8){if(!A.n(a,b.x,c,d,e,!1))return!1
return A.n(a,A.dA(a,b),c,d,e,!1)}if(r===7){s=A.n(a,t.P,c,d,e,!1)
return s&&A.n(a,b.x,c,d,e,!1)}if(p===8){if(A.n(a,b,c,d.x,e,!1))return!0
return A.n(a,b,c,A.dA(a,d),e,!1)}if(p===7){s=A.n(a,b,c,t.P,e,!1)
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
if(!A.n(a,j,c,i,e,!1)||!A.n(a,i,e,j,c,!1))return!1}return A.eB(a,b.x,c,d.x,e,!1)}if(p===12){if(b===t.g)return!0
if(s)return!1
return A.eB(a,b,c,d,e,!1)}if(r===9){if(p!==9)return!1
return A.hm(a,b,c,d,e,!1)}if(o&&p===11)return A.hq(a,b,c,d,e,!1)
return!1},
eB(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
hm(a,b,c,d,e,f){var s,r,q,p,o,n=b.x,m=d.x
for(;n!==m;){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.b3(a,b,r[o])
return A.et(a,p,null,c,d.y,e,!1)}return A.et(a,b.y,null,c,d.y,e,!1)},
et(a,b,c,d,e,f,g){var s,r=b.length
for(s=0;s<r;++s)if(!A.n(a,b[s],d,e[s],f,!1))return!1
return!0},
hq(a,b,c,d,e,f){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.n(a,r[s],c,q[s],e,!1))return!1
return!0},
b9(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.M(a))if(s!==7)if(!(s===6&&A.b9(a.x)))r=s===8&&A.b9(a.x)
return r},
i0(a){var s
if(!A.M(a))s=a===t._
else s=!0
return s},
M(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
es(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
d7(a){return a>0?new Array(a):v.typeUniverse.sEA},
x:function x(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
bR:function bR(){this.c=this.b=this.a=null},
bW:function bW(a){this.a=a},
bQ:function bQ(){},
b_:function b_(a){this.a=a},
fG(){var s,r,q
if(self.scheduleImmediate!=null)return A.hG()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.c_(new A.cH(s),1)).observe(r,{childList:true})
return new A.cG(s,r,q)}else if(self.setImmediate!=null)return A.hH()
return A.hI()},
fH(a){self.scheduleImmediate(A.c_(new A.cI(a),0))},
fI(a){self.setImmediate(A.c_(new A.cJ(a),0))},
fJ(a){A.fS(0,a)},
ed(a,b){var s=B.a.t(a.a,1000)
return A.fT(s,b)},
fS(a,b){var s=new A.aZ()
s.b9(a,b)
return s},
fT(a,b){var s=new A.aZ()
s.ba(a,b)
return s},
eE(a){return new A.bI(new A.m($.i,a.i("m<0>")),a.i("bI<0>"))},
ew(a,b){a.$2(0,null)
b.b=!0
return b.a},
b4(a,b){A.h6(a,b)},
ev(a,b){var s,r=a==null?b.$ti.c.a(a):a
if(!b.b)b.a.a5(r)
else{s=b.a
if(b.$ti.i("H<1>").b(r))s.aE(r)
else s.a8(r)}},
eu(a,b){var s=A.P(a),r=A.E(a),q=b.a
if(b.b)q.C(s,r)
else q.aB(s,r)},
h6(a,b){var s,r,q=new A.d9(b),p=new A.da(b)
if(a instanceof A.m)a.aN(q,p,t.z)
else{s=t.z
if(a instanceof A.m)a.av(q,p,s)
else{r=new A.m($.i,t.d)
r.a=8
r.c=a
r.aN(q,p,s)}}},
eK(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.i.ar(new A.dd(s))},
du(a){var s
if(t.Q.b(a)){s=a.gU()
if(s!=null)return s}return B.I},
hj(a,b){if($.i===B.b)return null
return null},
cP(a,b,c){var s,r,q,p={},o=p.a=a
for(;s=o.a,(s&4)!==0;){o=o.c
p.a=o}if(o===b){b.aB(new A.C(!0,o,null,"Cannot complete a future with itself"),A.fz())
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.aL(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.P()
b.X(p.a)
A.a2(b,q)
return}b.a^=2
A.al(null,null,b.b,new A.cQ(p,b))},
a2(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;!0;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){f=f.c
A.bZ(f.a,f.b)}return}s.a=b
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
if(r){A.bZ(m.a,m.b)
return}j=$.i
if(j!==k)$.i=k
else j=null
f=f.c
if((f&15)===8)new A.cX(s,g,p).$0()
else if(q){if((f&1)!==0)new A.cW(s,m).$0()}else if((f&2)!==0)new A.cV(g,s).$0()
if(j!=null)$.i=j
f=s.c
if(f instanceof A.m){r=s.a.$ti
r=r.i("H<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.a_(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.cP(f,i,!0)
return}}i=s.a.b
h=i.c
i.c=null
b=i.a_(h)
f=s.b
r=s.c
if(!f){i.a=8
i.c=r}else{i.a=i.a&1|16
i.c=r}g.a=i
f=i}},
hy(a,b){if(t.C.b(a))return b.ar(a)
if(t.v.b(a))return a
throw A.d(A.e1(a,"onError",u.c))},
hu(){var s,r
for(s=$.ak;s!=null;s=$.ak){$.b7=null
r=s.b
$.ak=r
if(r==null)$.b6=null
s.a.$0()}},
hB(){$.dL=!0
try{A.hu()}finally{$.b7=null
$.dL=!1
if($.ak!=null)$.dY().$1(A.eM())}},
eJ(a){var s=new A.bJ(a),r=$.b6
if(r==null){$.ak=$.b6=s
if(!$.dL)$.dY().$1(A.eM())}else $.b6=r.b=s},
hA(a){var s,r,q,p=$.ak
if(p==null){A.eJ(a)
$.b7=$.b6
return}s=new A.bJ(a)
r=$.b7
if(r==null){s.b=p
$.ak=$.b7=s}else{q=r.b
s.b=q
$.b7=r.b=s
if(q==null)$.b6=s}},
dW(a){var s=null,r=$.i
if(B.b===r){A.al(s,s,B.b,a)
return}A.al(s,s,r,r.aR(a))},
ii(a){A.dO(a,"stream",t.K)
return new A.bU()},
dC(a){return new A.aM(null,null,a.i("aM<0>"))},
eI(a){return},
eg(a,b){return b==null?A.hJ():b},
fK(a,b){if(b==null)b=A.hK()
if(t.k.b(b))return a.ar(b)
if(t.u.b(b))return b
throw A.d(A.aq("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
hv(a){},
hw(a,b){A.bZ(a,b)},
ha(a,b,c){var s,r=a.aS(),q=$.dr()
if(r!==q){q=r.$ti
s=$.i
r.W(new A.U(new A.m(s,q),8,new A.db(b,c),null,q.i("U<1,1>")))}else b.a7(c)},
fC(a,b){var s=$.i
if(s===B.b)return A.ed(a,b)
return A.ed(a,s.bv(b,t.I))},
bZ(a,b){A.hA(new A.dc(a,b))},
eF(a,b,c,d){var s,r=$.i
if(r===c)return d.$0()
$.i=c
s=r
try{r=d.$0()
return r}finally{$.i=s}},
eG(a,b,c,d,e){var s,r=$.i
if(r===c)return d.$1(e)
$.i=c
s=r
try{r=d.$1(e)
return r}finally{$.i=s}},
hz(a,b,c,d,e,f){var s,r=$.i
if(r===c)return d.$2(e,f)
$.i=c
s=r
try{r=d.$2(e,f)
return r}finally{$.i=s}},
al(a,b,c,d){if(B.b!==c)d=c.aR(d)
A.eJ(d)},
cH:function cH(a){this.a=a},
cG:function cG(a,b,c){this.a=a
this.b=b
this.c=c},
cI:function cI(a){this.a=a},
cJ:function cJ(a){this.a=a},
aZ:function aZ(){this.c=0},
d6:function d6(a,b){this.a=a
this.b=b},
d5:function d5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bI:function bI(a,b){this.a=a
this.b=!1
this.$ti=b},
d9:function d9(a){this.a=a},
da:function da(a){this.a=a},
dd:function dd(a){this.a=a},
Z:function Z(a,b){this.a=a
this.b=b},
z:function z(a,b){this.a=a
this.$ti=b},
aN:function aN(a,b,c,d,e){var _=this
_.ay=0
_.CW=_.ch=null
_.w=a
_.a=b
_.d=c
_.e=d
_.r=_.f=null
_.$ti=e},
bK:function bK(){},
aM:function aM(a,b,c){var _=this
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
cM:function cM(a,b){this.a=a
this.b=b},
cU:function cU(a,b){this.a=a
this.b=b},
cR:function cR(a){this.a=a},
cS:function cS(a){this.a=a},
cT:function cT(a,b,c){this.a=a
this.b=b
this.c=c},
cQ:function cQ(a,b){this.a=a
this.b=b},
cO:function cO(a,b){this.a=a
this.b=b},
cN:function cN(a,b,c){this.a=a
this.b=b
this.c=c},
cX:function cX(a,b,c){this.a=a
this.b=b
this.c=c},
cY:function cY(a,b){this.a=a
this.b=b},
cZ:function cZ(a){this.a=a},
cW:function cW(a,b){this.a=a
this.b=b},
cV:function cV(a,b){this.a=a
this.b=b},
bJ:function bJ(a){this.a=a
this.b=null},
ag:function ag(){},
cp:function cp(a,b){this.a=a
this.b=b},
cq:function cq(a,b){this.a=a
this.b=b},
cn:function cn(a){this.a=a},
co:function co(a,b,c){this.a=a
this.b=b
this.c=c},
aO:function aO(){},
bM:function bM(){},
bL:function bL(){},
aY:function aY(){},
bP:function bP(){},
bO:function bO(a){this.b=a
this.a=null},
bS:function bS(){this.a=0
this.c=this.b=null},
d1:function d1(a,b){this.a=a
this.b=b},
aP:function aP(a){this.a=1
this.b=a
this.c=null},
bU:function bU(){},
db:function db(a,b){this.a=a
this.b=b},
d8:function d8(){},
dc:function dc(a,b){this.a=a
this.b=b},
d2:function d2(){},
d3:function d3(a,b){this.a=a
this.b=b},
d4:function d4(a,b,c){this.a=a
this.b=b
this.c=c},
fs(a){return new A.aQ(a.i("aQ<0>"))},
dE(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
fL(a,b,c){var s=new A.ah(a,b,c.i("ah<0>"))
s.c=a.e
return s},
dz(a){var s,r
if(A.eQ(a))return"{...}"
s=new A.bF("")
try{r={}
$.O.push(a)
s.a+="{"
r.a=!0
a.ak(0,new A.cc(r,s))
s.a+="}"}finally{if(0>=$.O.length)return A.b($.O,-1)
$.O.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
aQ:function aQ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
d0:function d0(a){this.a=a
this.c=this.b=null},
ah:function ah(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
l:function l(){},
aC:function aC(){},
cc:function cc(a,b){this.a=a
this.b=b},
aJ:function aJ(){},
aW:function aW(){},
fh(a,b){a=A.d(a)
a.stack=b.h(0)
throw a
throw A.d("unreachable")},
dy(a,b,c){var s,r,q
if(a>4294967295)A.dp(A.fw(a,0,4294967295,"length",null))
s=A.a(new Array(a),c.i("o<0>"))
s.$flags=1
r=s
if(a!==0)for(s=r.length,q=0;q<s;++q)r[q]=b
return r},
ft(a,b,c){var s,r,q=A.a([],c.i("o<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.eU)(a),++r)q.push(a[r])
q.$flags=1
return q},
fA(a,b,c){var s=J.dZ(b)
if(!s.I())return a
if(c.length===0){do a+=A.q(s.gO())
while(s.I())}else{a+=A.q(s.gO())
for(;s.I();)a=a+c+A.q(s.gO())}return a},
fz(){return A.E(new Error())},
c6(a){if(typeof a=="number"||A.dK(a)||a==null)return J.ba(a)
if(typeof a=="string")return JSON.stringify(a)
return A.ea(a)},
fi(a,b){A.dO(a,"error",t.K)
A.dO(b,"stackTrace",t.l)
A.fh(a,b)},
bd(a){return new A.bc(a)},
aq(a,b){return new A.C(!1,null,b,a)},
e1(a,b,c){return new A.C(!0,a,b,c)},
fw(a,b,c,d,e){return new A.aI(b,c,!0,a,d,"Invalid value")},
fl(a,b,c,d){return new A.bk(b,!0,a,d,"Index out of range")},
cF(a){return new A.aL(a)},
ef(a){return new A.bG(a)},
bf(a){return new A.be(a)},
c7(a){return new A.cL(a)},
dv(a,b,c){var s,r
if(A.eQ(a))return b+"..."+c
s=new A.bF(b)
$.O.push(a)
try{r=s
r.a=A.fA(r.a,a,", ")}finally{if(0>=$.O.length)return A.b($.O,-1)
$.O.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
ce(a,b,c,d){var s
if(B.f===c){s=B.a.gk(a)
b=J.F(b)
return A.dD(A.T(A.T($.ds(),s),b))}if(B.f===d){s=B.a.gk(a)
b=J.F(b)
c=J.F(c)
return A.dD(A.T(A.T(A.T($.ds(),s),b),c))}s=B.a.gk(a)
b=J.F(b)
c=J.F(c)
d=J.F(d)
d=A.dD(A.T(A.T(A.T(A.T($.ds(),s),b),c),d))
return d},
bi:function bi(a){this.a=a},
cK:function cK(){},
j:function j(){},
bc:function bc(a){this.a=a},
I:function I(){},
C:function C(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aI:function aI(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bk:function bk(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
aL:function aL(a){this.a=a},
bG:function bG(a){this.a=a},
af:function af(a){this.a=a},
be:function be(a){this.a=a},
bB:function bB(){},
aK:function aK(){},
cL:function cL(a){this.a=a},
p:function p(){},
e:function e(){},
bV:function bV(){},
bF:function bF(a){this.a=a},
Q:function Q(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a9:function a9(a){this.a=a},
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
fy(a,b,c,d,e,f,g,h){var s,r,q,p=self,o=p.document.createElement("canvas"),n=h*g
o.width=n
s=d*f
o.height=s
r=p.document.createElement("canvas")
r.width=n
r.height=s
s=A.a([],t.w)
for(q=0;q<d;++q){p=B.a.t(h,32)
s.push(new Uint32Array(p+1))}p=new A.bE(!0,d,h,g,f,c,a,o,r,s)
p.b7(a,b,c,d,!0,f,g,h)
return p},
dB(a){return new A.A(B.a.t(a,32),31-B.a.j(a,32))},
bE:function bE(a,b,c,d,e,f,g,h,i,j){var _=this
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
ch:function ch(a){this.a=a},
ci:function ci(a){this.a=a},
cj:function cj(a){this.a=a},
ck:function ck(a){this.a=a},
cg:function cg(){},
D:function D(a){this.b=a},
fB(a,b,c,d,e,f,g,h,i){var s,r,q,p,o=null,n=A.fy(a,c,d,i*(8+h),!0,f,g,b*8),m=A.a([],t.G)
for(s=t.U,r=0;r<i;++r){q=A.a([],s)
for(p=0;p<b;++p)q.push(new A.Q(r,p," ",d))
m.push(q)}n=new A.cs(i,b,h,d,c,!0,n,new A.ac(i,b),new A.ac(i,b),new A.ac(i,b),A.dC(t.N),A.dC(t.V),A.dC(t.n),B.d,m,A.fs(t.o),B.dU)
n.b8(a,b,c,d,o,!0,f,g,h,i,!0,o,o,o,o,o,o)
return n},
ae:function ae(a){this.b=a},
cs:function cs(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f
_.w=g
_.x=h
_.y=i
_.z=j
_.as=k
_.at=l
_.ax=m
_.ay=n
_.ch=o
_.CW=p
_.cx=q
_.cy=!1},
cA:function cA(a){this.a=a},
cz:function cz(){},
cy:function cy(a){this.a=a},
ct:function ct(a){this.a=a},
cu:function cu(a){this.a=a},
cv:function cv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cw:function cw(a,b,c){this.a=a
this.b=b
this.c=c},
cx:function cx(a){this.a=a},
c0(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=$.dt()
if(!(a9>=0&&a9<a8.length))return A.b(a8,a9)
s=a8[a9].bw()
a8=s.a
r=B.e.gv(a8).length
q=a8.length
p=$.a6()
p.aT(0,1,q,2,r)
o=""+(a9+1)
n=1+r
m=n+3
p.l("Level "+o,m,3)
if(!(a9<11))return A.b(B.p,a9)
p.l("Password: "+B.p[a9],m,4)
l=""+s.b
p.l("Moves: "+l,m,5)
k=new A.df()
m=["\u250c","\u252c","\u251c","\u253c"]
j=s.d
i=s.f
h=k.$2(j,i)
if(h>>>0!==h||h>=4)return A.b(m,h)
g=m[h]
h=["\u2510","\u252c","\u2524","\u253c"]
m=s.e
f=k.$2(m,i)
if(f>>>0!==f||f>=4)return A.b(h,f)
e=h[f]
f=["\u2514","\u2534","\u251c","\u253c"]
h=s.r
d=k.$2(j,h)
if(d>>>0!==d||d>=4)return A.b(f,d)
c=f[d]
d=["\u2518","\u2534","\u2524","\u253c"]
f=k.$2(m,h)
if(f>>>0!==f||f>=4)return A.b(d,f)
b=d[f]
a=i?"\u2550":"\u2500"
a0=h?"\u2550":"\u2500"
a1=j?"\u2551":"\u2502"
a2=m?"\u2551":"\u2502"
p.H(0)
p.l("L"+o,2,1)
p.l(B.p[a9],n-2,1)
o=2+r+2
p.l(l,2,o)
l=r/2|0
f=1+l
if(i)p.l("\u25b2",f+1,1)
else p.l(" ",f+1,1)
i=1+l
if(h)p.l("\u25bc",i+1,o)
else p.l(" ",i+1,o)
o=2+l
if(j)p.l("\u25c4",0,o)
else p.l(" ",0,o)
o=n+2
l=2+l
if(m)p.l("\u25ba",o,l)
else p.l(" ",o,l)
p.l(g+B.h.J(a,r)+e,1,2)
for(a3=1;a3<=q;++a3)p.l(a1+B.h.J(" ",r)+a2,1,2+a3)
p.l(c+B.h.J(a0,r)+b,1,2+q+1)
a4=new A.dg(1,1)
for(a3=0;a3<q;++a3){if(!(a3<a8.length))return A.b(a8,a3)
a5=a8[a3]
for(a6=0;a6<r;++a6){if(!(a6<a5.length))return A.b(a5,a6)
a7=a5[a6]
if("B"===a7){a4.$3(a3,a6,B.dv)
continue}if("O"===a7){a4.$3(a3,a6,B.O)
continue}if("D"===a7){a4.$3(a3,a6,B.cf)
continue}if("<"===a7){a4.$3(a3,a6,B.dw)
continue}if(">"===a7){a4.$3(a3,a6,B.cx)
continue}a4.$3(a3,a6,B.x)}}return s.c},
X(a,b){var s=$.a6()
s.l(a,B.a.t(s.b-a.length,2),b)},
eR(a){var s=$.a6()
s.bF(B.h.J("\u2500",s.b),0,!1,a)},
c1(){var s=0,r=A.eE(t.S),q,p,o,n,m,l,k,j,i,h,g
var $async$c1=A.eK(function(a,b){if(a===1)return A.eu(b,r)
while(true)switch(s){case 0:i=$.a6()
i.H(0)
A.X("Input",5)
A.X("Password:",6)
p=B.a.t(i.b-9,2)
i.aO()
o=i.a1(8,p)
n=o.b
m=i.x
l=m.a
k=B.a.j(o.a,l)
m.c=k
m.sN(n)
i.ap(B.h.J(" ",3),!1)
m.c=k
m.sN(n)
k=m.c
if(k===i.a-1){i.a4()
m.c=B.a.j(m.c-1,l)}l=i.y
l.sp(m.gp())
i.z.sp(l.gp()+3)
i.ay=B.r
l=i.as
h=B.e
g=B.p
s=3
return A.b4(new A.z(l,A.aj(l).i("z<1>")).gv(0),$async$c1)
case 3:j=h.bA(g,b)
s=j===-1?4:5
break
case 4:A.X("Bad Password!",10)
A.X("Press any key",11)
A.X("to continue.",12)
s=6
return A.b4(i.aV(),$async$c1)
case 6:case 5:q=j
s=1
break
case 1:return A.ev(q,r)}})
return A.ew($async$c1,r)},
i6(a,b){var s,r,q,p=["Level "+(a+1),"Complete!","","Moves: "+b,"","Press","any key!"],o=$.a6()
o.H(0)
for(s=3,r=0;r<7;++r){q=p[r]
o.l(q,B.a.t(o.b-q.length,2),s);++s}},
ap(){var s=0,r=A.eE(t.z),q,p,o,n,m,l,k,j,i
var $async$ap=A.eK(function(a,b){if(a===1)return A.eu(b,r)
while(true)switch(s){case 0:A.X("Welcome to",3)
A.X("Block Dude!",5)
A.eR(2)
A.eR(6)
A.X("Press",8)
A.X("any key!",10)
p=$.a6()
p.S()
s=3
return A.b4(p.aV(),$async$ap)
case 3:A.c0(0)
o=p.at,n=A.aj(o).i("z<1>"),m=0
case 4:if(!!0){s=5
break}if(p.ay!==B.d)A.dp(A.c7("Terminal already awaiting input."))
p.ay=B.q
s=6
return A.b4(new A.z(o,n).gv(0),$async$ap)
case 6:l=b.a
s=l===27?7:9
break
case 7:s=10
return A.b4(A.c1(),$async$ap)
case 10:k=b
if(k===-1)A.c0(m)
else{j=$.dt()
if(k>>>0!==k||k>=j.length){q=A.b(j,k)
s=1
break}j[k].a3()
p.H(0)
A.c0(k)
m=k}s=8
break
case 9:j=$.dt()
if(!(m>=0&&m<j.length)){q=A.b(j,m)
s=1
break}j[m].bB(l)
s=A.c0(m)?11:12
break
case 11:if(!(m<j.length)){q=A.b(j,m)
s=1
break}A.i6(m,j[m].w)
if(p.ay!==B.d)A.dp(A.c7("Terminal already awaiting input."))
p.ay=B.q
s=13
return A.b4(new A.z(o,n).gv(0),$async$ap)
case 13:++m
i=j.length
if(m===i){s=5
break}if(!(m<i)){q=A.b(j,m)
s=1
break}j[m].a3()
A.c0(m)
case 12:case 8:s=4
break
case 5:case 1:return A.ev(q,r)}})
return A.ew($async$ap,r)},
df:function df(){},
dg:function dg(a,b){this.a=a
this.b=b},
fr(a){var s,r,q,p,o,n=A.a([],t.E)
for(s=J.dZ(a),r=t.s;s.I();){q=s.gO()
p=A.a([],r)
for(q=q.length,o=0;o<q;++o)p.push(" ")
n.push(p)}n=new A.bp(a,B.c,n)
n.a3()
return n},
bh:function bh(a){this.b=a},
G:function G(a){this.b=a},
c5:function c5(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bp:function bp(a,b,c){var _=this
_.a=a
_.w=_.r=_.f=_.e=_.d=_.c=_.b=0
_.x=b
_.y=!1
_.z=c},
ca:function ca(a){this.a=a},
c9:function c9(a){this.a=a},
i8(a){A.dX(new A.aB("Field '"+a+"' has been assigned during initialization."),new Error())},
N(){A.dX(new A.aB("Field '' has not been initialized."),new Error())},
b5(a){var s
if(typeof a=="function")throw A.d(A.aq("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.h7,a)
s[$.dq()]=a
return s},
eA(a){var s
if(typeof a=="function")throw A.d(A.aq("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.h8,a)
s[$.dq()]=a
return s},
h7(a){return a.$0()},
h8(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
hU(a,b){return a[b]},
h9(a,b,c){return a[b](c)}},B={}
var w=[A,J,B]
var $={}
A.dw.prototype={}
J.bl.prototype={
B(a,b){return a===b},
gk(a){return A.ad(a)},
h(a){return"Instance of '"+A.cf(a)+"'"},
gm(a){return A.a4(A.dJ(this))}}
J.bm.prototype={
h(a){return String(a)},
gk(a){return a?519018:218159},
gm(a){return A.a4(t.y)},
$ih:1,
$iao:1}
J.av.prototype={
B(a,b){return null==b},
h(a){return"null"},
gk(a){return 0},
$ih:1,
$ip:1}
J.ax.prototype={$ik:1}
J.S.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.bC.prototype={}
J.a1.prototype={}
J.R.prototype={
h(a){var s=a[$.dq()]
if(s==null)return this.b6(a)
return"JavaScript function for "+J.ba(s)}}
J.aw.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.ay.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.o.prototype={
bD(a,b){var s,r,q=a.length,p=A.dy(q,"",t.N)
for(s=0;s<a.length;++s){r=A.q(a[s])
if(!(s<q))return A.b(p,s)
p[s]=r}return p.join(b)},
bx(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw A.d(A.bf(a))}return s},
by(a,b,c){return this.bx(a,b,c,t.z)},
gv(a){if(a.length>0)return a[0]
throw A.d(A.e7())},
bA(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.b(a,s)
if(J.a7(a[s],b))return s}return-1},
h(a){return A.dv(a,"[","]")},
gao(a){return new J.bb(a,a.length,A.dI(a).i("bb<1>"))},
gk(a){return A.ad(a)},
gq(a){return a.length},
n(a,b){if(!(b>=0&&b<a.length))throw A.d(A.dQ(a,b))
return a[b]},
$if:1}
J.c8.prototype={}
J.bb.prototype={
gO(){var s=this.d
return s==null?this.$ti.c.a(s):s},
I(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.d(A.eU(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.a8.prototype={
bN(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.d(A.cF(""+a+".toInt()"))},
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
F(a,b){if((a|0)===a)if(b>=1)return a/b|0
return this.aM(a,b)},
t(a,b){return(a|0)===a?a/b|0:this.aM(a,b)},
aM(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.cF("Result of truncating division is "+A.q(s)+": "+A.q(a)+" ~/ "+b))},
T(a,b){if(b<0)throw A.d(A.dN(b))
return b>31?0:a<<b>>>0},
bs(a,b){return b>31?0:a<<b>>>0},
b5(a,b){var s
if(b<0)throw A.d(A.dN(b))
if(a>0)s=this.ag(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
bt(a,b){var s
if(a>0)s=this.ag(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
D(a,b){if(0>b)throw A.d(A.dN(b))
return this.ag(a,b)},
ag(a,b){return b>31?0:a>>>b},
gm(a){return A.a4(t.H)},
$ir:1}
J.au.prototype={
gm(a){return A.a4(t.S)},
$ih:1,
$ic:1}
J.bn.prototype={
gm(a){return A.a4(t.i)},
$ih:1}
J.a0.prototype={
bO(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.b(p,0)
if(p.charCodeAt(0)===133){s=J.fp(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.b(p,r)
q=p.charCodeAt(r)===133?J.fq(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
J(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.H)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
bG(a,b,c){var s=b-a.length
if(s<=0)return a
return this.J(c,s)+a},
h(a){return a},
gk(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gm(a){return A.a4(t.N)},
gq(a){return a.length},
$ih:1,
$iw:1}
A.aB.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.dn.prototype={
$0(){var s=new A.m($.i,t.D)
s.a5(null)
return s},
$S:8}
A.cl.prototype={}
A.bq.prototype={
gO(){var s=this.d
return s==null?this.$ti.c.a(s):s},
I(){var s,r=this,q=r.a,p=J.dR(q),o=p.gq(q)
if(r.b!==o)throw A.d(A.bf(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.n(q,s);++r.c
return!0}}
A.at.prototype={}
A.A.prototype={$r:"+(1,2)",$s:1}
A.bg.prototype={
h(a){return A.dz(this)}}
A.bj.prototype={
Z(){var s=this,r=s.$map
if(r==null){r=new A.az(s.$ti.i("az<1,2>"))
A.hP(s.a,r)
s.$map=r}return r},
ai(a){return this.Z().ai(a)},
n(a,b){return this.Z().n(0,b)},
ak(a,b){this.Z().ak(0,b)},
gq(a){return this.Z().a}}
A.cC.prototype={
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
A.aH.prototype={
h(a){return"Null check operator used on a null value"}}
A.bo.prototype={
h(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.bH.prototype={
h(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.cd.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.as.prototype={}
A.aX.prototype={
h(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iy:1}
A.a_.prototype={
h(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.eV(r==null?"unknown":r)+"'"},
gbP(){return this},
$C:"$1",
$R:1,
$D:null}
A.c3.prototype={$C:"$0",$R:0}
A.c4.prototype={$C:"$2",$R:2}
A.cr.prototype={}
A.cm.prototype={
h(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.eV(s)+"'"}}
A.ar.prototype={
B(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.ar))return!1
return this.$_target===b.$_target&&this.a===b.a},
gk(a){return(A.dV(this.a)^A.ad(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.cf(this.a)+"'")}}
A.bN.prototype={
h(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.bD.prototype={
h(a){return"RuntimeError: "+this.a}}
A.aA.prototype={
gq(a){return this.a},
ai(a){var s=this.b
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
return q}else return this.bC(b)},
bC(a){var s,r,q=this.d
if(q==null)return null
s=q[this.al(a)]
r=this.am(s,a)
if(r<0)return null
return s[r].b},
ak(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw A.d(A.bf(s))
r=r.c}},
V(a,b){var s=this,r=new A.cb(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&1073741823
return r},
al(a){return J.F(a)&1073741823},
am(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a7(a[r].a,b))return r
return-1},
h(a){return A.dz(this)}}
A.cb.prototype={}
A.az.prototype={
al(a){return A.hL(a)&1073741823},
am(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a7(a[r].a,b))return r
return-1}}
A.di.prototype={
$1(a){return this.a(a)},
$S:9}
A.dj.prototype={
$2(a,b){return this.a(a,b)},
$S:10}
A.dk.prototype={
$1(a){return this.a(a)},
$S:11}
A.ai.prototype={
h(a){return this.aP(!1)},
aP(a){var s,r,q,p,o,n=this.bj(),m=this.aG(),l=(a?""+"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.b(m,q)
o=m[q]
l=a?l+A.ea(o):l+A.q(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
bj(){var s,r=this.$s
for(;$.aV.length<=r;)$.aV.push(null)
s=$.aV[r]
if(s==null){s=this.bi()
if(!(r<$.aV.length))return A.b($.aV,r)
$.aV[r]=s}return s},
bi(){var s,r,q,p,o,n=this.$r,m=n.indexOf("("),l=n.substring(1,m),k=n.substring(m),j=k==="()"?0:k.replace(/[^,]/g,"").length+1,i=A.a(new Array(j),t.f)
for(s=0;s<j;++s)i[s]=s
if(l!==""){r=l.split(",")
s=r.length
for(q=i.length,p=j;s>0;){--p;--s
o=r[s]
if(!(p>=0&&p<q))return A.b(i,p)
i[p]=o}}i=A.ft(i,!1,t.K)
i.$flags=3
return i}}
A.bT.prototype={
aG(){return[this.a,this.b]},
B(a,b){if(b==null)return!1
return b instanceof A.bT&&this.$s===b.$s&&J.a7(this.a,b.a)&&J.a7(this.b,b.b)},
gk(a){return A.ce(this.$s,this.a,this.b,B.f)}}
A.br.prototype={
gm(a){return B.e1},
$ih:1}
A.aF.prototype={}
A.bs.prototype={
gm(a){return B.e2},
$ih:1}
A.ab.prototype={
gq(a){return a.length},
$iv:1}
A.aD.prototype={
n(a,b){A.a3(b,a,a.length)
return a[b]},
$if:1}
A.aE.prototype={$if:1}
A.bt.prototype={
gm(a){return B.e3},
$ih:1}
A.bu.prototype={
gm(a){return B.e4},
$ih:1}
A.bv.prototype={
gm(a){return B.e5},
n(a,b){A.a3(b,a,a.length)
return a[b]},
$ih:1}
A.bw.prototype={
gm(a){return B.e6},
n(a,b){A.a3(b,a,a.length)
return a[b]},
$ih:1}
A.bx.prototype={
gm(a){return B.e7},
n(a,b){A.a3(b,a,a.length)
return a[b]},
$ih:1}
A.by.prototype={
gm(a){return B.e9},
n(a,b){A.a3(b,a,a.length)
return a[b]},
$ih:1}
A.bz.prototype={
gm(a){return B.ea},
n(a,b){A.a3(b,a,a.length)
return a[b]},
$ih:1,
$icE:1}
A.aG.prototype={
gm(a){return B.eb},
gq(a){return a.length},
n(a,b){A.a3(b,a,a.length)
return a[b]},
$ih:1}
A.bA.prototype={
gm(a){return B.ec},
gq(a){return a.length},
n(a,b){A.a3(b,a,a.length)
return a[b]},
$ih:1}
A.aR.prototype={}
A.aS.prototype={}
A.aT.prototype={}
A.aU.prototype={}
A.x.prototype={
i(a){return A.b3(v.typeUniverse,this,a)},
aC(a){return A.er(v.typeUniverse,this,a)}}
A.bR.prototype={}
A.bW.prototype={
h(a){return A.u(this.a,null)}}
A.bQ.prototype={
h(a){return this.a}}
A.b_.prototype={$iI:1}
A.cH.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:2}
A.cG.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:12}
A.cI.prototype={
$0(){this.a.$0()},
$S:1}
A.cJ.prototype={
$0(){this.a.$0()},
$S:1}
A.aZ.prototype={
b9(a,b){if(self.setTimeout!=null)self.setTimeout(A.c_(new A.d6(this,b),0),a)
else throw A.d(A.cF("`setTimeout()` not found."))},
ba(a,b){if(self.setTimeout!=null)self.setInterval(A.c_(new A.d5(this,a,Date.now(),b),0),a)
else throw A.d(A.cF("Periodic timer."))},
$icB:1}
A.d6.prototype={
$0(){this.a.c=1
this.b.$0()},
$S:0}
A.d5.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.a.F(s,o)}q.c=p
r.d.$1(q)},
$S:1}
A.bI.prototype={}
A.d9.prototype={
$1(a){return this.a.$2(0,a)},
$S:4}
A.da.prototype={
$2(a,b){this.a.$2(1,new A.as(a,b))},
$S:13}
A.dd.prototype={
$2(a,b){this.a(a,b)},
$S:14}
A.Z.prototype={
h(a){return A.q(this.a)},
$ij:1,
gU(){return this.b}}
A.z.prototype={}
A.aN.prototype={
ad(){},
ae(){}}
A.bK.prototype={
gbl(){return this.c<4},
bq(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
bu(a,b,c,d){var s,r,q,p,o,n=this
if((n.c&4)!==0){s=new A.aP($.i)
A.dW(s.gbm())
s.c=c
return s}s=$.i
r=d?1:0
q=A.eg(s,a)
A.fK(s,b)
p=new A.aN(n,q,s,r|32,A.aj(n).i("aN<1>"))
p.CW=p
p.ch=p
p.ay=n.c&1
o=n.e
n.e=p
p.ch=null
p.CW=o
if(o==null)n.d=p
else o.ch=p
if(n.d===p)A.eI(n.a)
return p},
bp(a){var s,r=this
A.aj(r).i("aN<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.bq(a)
if((r.c&2)===0&&r.d==null)r.bf()}return null},
bc(){if((this.c&4)!==0)return new A.af("Cannot add new events after calling close")
return new A.af("Cannot add new events while doing an addStream")},
M(a,b){if(!this.gbl())throw A.d(this.bc())
this.af(b)},
bf(){if((this.c&4)!==0)if(null.gbQ())null.a5(null)
A.eI(this.b)}}
A.aM.prototype={
af(a){var s
for(s=this.d;s!=null;s=s.ch)s.bd(new A.bO(a))}}
A.U.prototype={
bE(a){if((this.c&15)!==6)return!0
return this.b.b.au(this.d,a.a)},
bz(a){var s,r=this.e,q=null,p=a.a,o=this.b.b
if(t.C.b(r))q=o.bJ(r,p,a.b)
else q=o.au(r,p)
try{p=q
return p}catch(s){if(t.c.b(A.P(s))){if((this.c&1)!==0)throw A.d(A.aq("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.aq("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.m.prototype={
av(a,b,c){var s,r=$.i
if(r===B.b){if(!t.C.b(b)&&!t.v.b(b))throw A.d(A.e1(b,"onError",u.c))}else b=A.hy(b,r)
s=new A.m(r,c.i("m<0>"))
this.W(new A.U(s,3,a,b,this.$ti.i("@<1>").aC(c).i("U<1,2>")))
return s},
aN(a,b,c){var s=new A.m($.i,c.i("m<0>"))
this.W(new A.U(s,19,a,b,this.$ti.i("@<1>").aC(c).i("U<1,2>")))
return s},
br(a){this.a=this.a&1|16
this.c=a},
X(a){this.a=a.a&30|this.a&1
this.c=a.c},
W(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.W(a)
return}s.X(r)}A.al(null,null,s.b,new A.cM(s,a))}},
aL(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.aL(a)
return}n.X(s)}m.a=n.a_(a)
A.al(null,null,n.b,new A.cU(m,n))}},
P(){var s=this.c
this.c=null
return this.a_(s)},
a_(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
aD(a){var s,r,q,p=this
p.a^=2
try{a.av(new A.cR(p),new A.cS(p),t.P)}catch(q){s=A.P(q)
r=A.E(q)
A.dW(new A.cT(p,s,r))}},
a7(a){var s,r=this,q=r.$ti
if(q.i("H<1>").b(a))if(q.b(a))A.cP(a,r,!0)
else r.aD(a)
else{s=r.P()
r.a=8
r.c=a
A.a2(r,s)}},
a8(a){var s=this,r=s.P()
s.a=8
s.c=a
A.a2(s,r)},
bh(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.P()
q.X(a)
A.a2(q,r)},
C(a,b){var s=this.P()
this.br(new A.Z(a,b))
A.a2(this,s)},
a5(a){if(this.$ti.i("H<1>").b(a)){this.aE(a)
return}this.be(a)},
be(a){this.a^=2
A.al(null,null,this.b,new A.cO(this,a))},
aE(a){if(this.$ti.b(a)){A.cP(a,this,!1)
return}this.aD(a)},
aB(a,b){this.a^=2
A.al(null,null,this.b,new A.cN(this,a,b))},
$iH:1}
A.cM.prototype={
$0(){A.a2(this.a,this.b)},
$S:0}
A.cU.prototype={
$0(){A.a2(this.b,this.a.a)},
$S:0}
A.cR.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.a8(p.$ti.c.a(a))}catch(q){s=A.P(q)
r=A.E(q)
p.C(s,r)}},
$S:2}
A.cS.prototype={
$2(a,b){this.a.C(a,b)},
$S:6}
A.cT.prototype={
$0(){this.a.C(this.b,this.c)},
$S:0}
A.cQ.prototype={
$0(){A.cP(this.a.a,this.b,!0)},
$S:0}
A.cO.prototype={
$0(){this.a.a8(this.b)},
$S:0}
A.cN.prototype={
$0(){this.a.C(this.b,this.c)},
$S:0}
A.cX.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.b1(q.d)}catch(p){s=A.P(p)
r=A.E(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.du(q)
n=k.a
n.c=new A.Z(q,o)
q=n}q.b=!0
return}if(j instanceof A.m&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.m){m=k.b.a
l=new A.m(m.b,m.$ti)
j.av(new A.cY(l,m),new A.cZ(l),t.q)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.cY.prototype={
$1(a){this.a.bh(this.b)},
$S:2}
A.cZ.prototype={
$2(a,b){this.a.C(a,b)},
$S:6}
A.cW.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
q.c=p.b.b.au(p.d,this.b)}catch(o){s=A.P(o)
r=A.E(o)
q=s
p=r
if(p==null)p=A.du(q)
n=this.a
n.c=new A.Z(q,p)
n.b=!0}},
$S:0}
A.cV.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.bE(s)&&p.a.e!=null){p.c=p.a.bz(s)
p.b=!1}}catch(o){r=A.P(o)
q=A.E(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.du(p)
m=l.b
m.c=new A.Z(p,n)
p=m}p.b=!0}},
$S:0}
A.bJ.prototype={}
A.ag.prototype={
gq(a){var s={},r=new A.m($.i,t.a)
s.a=0
this.aW(new A.cp(s,this),!0,new A.cq(s,r),r.gaF())
return r},
gv(a){var s=new A.m($.i,this.$ti.i("m<1>")),r=this.aW(null,!0,new A.cn(s),s.gaF())
r.aY(new A.co(this,r,s))
return s}}
A.cp.prototype={
$1(a){++this.a.a},
$S(){return this.b.$ti.i("~(1)")}}
A.cq.prototype={
$0(){this.b.a7(this.a.a)},
$S:0}
A.cn.prototype={
$0(){var s,r,q,p,o
try{q=A.e7()
throw A.d(q)}catch(p){s=A.P(p)
r=A.E(p)
q=s
o=r
A.hj(q,o)
this.a.C(q,o)}},
$S:0}
A.co.prototype={
$1(a){A.ha(this.b,this.c,a)},
$S(){return this.a.$ti.i("~(1)")}}
A.aO.prototype={
gk(a){return(A.ad(this.a)^892482866)>>>0},
B(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.z&&b.a===this.a}}
A.bM.prototype={
aK(){return this.w.bp(this)},
ad(){},
ae(){}}
A.bL.prototype={
aY(a){this.a=A.eg(this.d,a)},
aS(){var s,r=this,q=r.e&=4294967279
if((q&8)===0){q=r.e=q|8
if((q&128)!==0){s=r.r
if(s.a===1)s.a=3}if((q&64)===0)r.r=null
r.f=r.aK()}q=$.dr()
return q},
ad(){},
ae(){},
aK(){return null},
bd(a){var s,r,q=this,p=q.r
if(p==null)p=q.r=new A.bS()
s=p.c
if(s==null)p.b=p.c=a
else p.c=s.a=a
r=q.e
if((r&128)===0){r|=128
q.e=r
if(r<256)p.az(q)}},
af(a){var s=this,r=s.e
s.e=r|64
s.d.b3(s.a,a)
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
if(r)q.ad()
else q.ae()
p=q.e&=4294967231}if((p&128)!==0&&p<256)q.r.az(q)}}
A.aY.prototype={
aW(a,b,c,d){return this.a.bu(a,d,c,!0)}}
A.bP.prototype={}
A.bO.prototype={}
A.bS.prototype={
az(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.dW(new A.d1(s,a))
s.a=1}}
A.d1.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.a
q.b=r
if(r==null)q.c=null
this.b.af(s.b)},
$S:0}
A.aP.prototype={
aY(a){},
aS(){this.a=-1
this.c=null
return $.dr()},
bn(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.b2(s)}}else r.a=q}}
A.bU.prototype={}
A.db.prototype={
$0(){return this.a.a7(this.b)},
$S:0}
A.d8.prototype={}
A.dc.prototype={
$0(){A.fi(this.a,this.b)},
$S:0}
A.d2.prototype={
b2(a){var s,r,q
try{if(B.b===$.i){a.$0()
return}A.eF(null,null,this,a)}catch(q){s=A.P(q)
r=A.E(q)
A.bZ(s,r)}},
bM(a,b){var s,r,q
try{if(B.b===$.i){a.$1(b)
return}A.eG(null,null,this,a,b)}catch(q){s=A.P(q)
r=A.E(q)
A.bZ(s,r)}},
b3(a,b){return this.bM(a,b,t.z)},
aR(a){return new A.d3(this,a)},
bv(a,b){return new A.d4(this,a,b)},
bI(a){if($.i===B.b)return a.$0()
return A.eF(null,null,this,a)},
b1(a){return this.bI(a,t.z)},
bL(a,b){if($.i===B.b)return a.$1(b)
return A.eG(null,null,this,a,b)},
au(a,b){var s=t.z
return this.bL(a,b,s,s)},
bK(a,b,c){if($.i===B.b)return a.$2(b,c)
return A.hz(null,null,this,a,b,c)},
bJ(a,b,c){var s=t.z
return this.bK(a,b,c,s,s,s)},
bH(a){return a},
ar(a){var s=t.z
return this.bH(a,s,s,s)}}
A.d3.prototype={
$0(){return this.a.b2(this.b)},
$S:0}
A.d4.prototype={
$1(a){return this.a.b3(this.b,a)},
$S(){return this.c.i("~(0)")}}
A.aQ.prototype={
gao(a){var s=this,r=new A.ah(s,s.r,s.$ti.i("ah<1>"))
r.c=s.e
return r},
gq(a){return this.a},
M(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.aA(s==null?q.b=A.dE():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.aA(r==null?q.c=A.dE():r,b)}else return q.bb(b)},
bb(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.dE()
s=J.F(a)&1073741823
r=p[s]
if(r==null)p[s]=[q.ac(a)]
else{if(q.bk(r,a)>=0)return!1
r.push(q.ac(a))}return!0},
aA(a,b){if(a[b]!=null)return!1
a[b]=this.ac(b)
return!0},
aJ(){this.r=this.r+1&1073741823},
ac(a){var s,r=this,q=new A.d0(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.aJ()
return q},
bk(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a7(a[r].a,b))return r
return-1}}
A.d0.prototype={}
A.ah.prototype={
gO(){var s=this.d
return s==null?this.$ti.c.a(s):s},
I(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.d(A.bf(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.l.prototype={
gao(a){return new A.bq(a,this.gq(a),A.b8(a).i("bq<l.E>"))},
h(a){return A.dv(a,"[","]")}}
A.aC.prototype={
gq(a){return this.a},
h(a){return A.dz(this)}}
A.cc.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.q(a)
s=r.a+=s
r.a=s+": "
s=A.q(b)
r.a+=s},
$S:15}
A.aJ.prototype={
h(a){return A.dv(this,"{","}")}}
A.aW.prototype={}
A.bi.prototype={
B(a,b){if(b==null)return!1
return b instanceof A.bi&&this.a===b.a},
gk(a){return B.a.gk(this.a)},
h(a){var s,r,q,p,o=this.a,n=B.a.t(o,36e8)
o%=36e8
s=B.a.t(o,6e7)
o%=6e7
r=s<10?"0":""
q=B.a.t(o,1e6)
p=q<10?"0":""
return""+n+":"+r+s+":"+p+q+"."+B.h.bG(B.a.h(o%1e6),6,"0")}}
A.cK.prototype={
h(a){return this.Y()}}
A.j.prototype={
gU(){return A.fv(this)}}
A.bc.prototype={
h(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.c6(s)
return"Assertion failed"}}
A.I.prototype={}
A.C.prototype={
gab(){return"Invalid argument"+(!this.a?"(s)":"")},
gaa(){return""},
h(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.gab()+q+o
if(!s.a)return n
return n+s.gaa()+": "+A.c6(s.gan())},
gan(){return this.b}}
A.aI.prototype={
gan(){return this.b},
gab(){return"RangeError"},
gaa(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.q(q):""
else if(q==null)s=": Not greater than or equal to "+A.q(r)
else if(q>r)s=": Not in inclusive range "+A.q(r)+".."+A.q(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.q(r)
return s}}
A.bk.prototype={
gan(){return this.b},
gab(){return"RangeError"},
gaa(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gq(a){return this.f}}
A.aL.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.bG.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.af.prototype={
h(a){return"Bad state: "+this.a}}
A.be.prototype={
h(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.c6(s)+"."}}
A.bB.prototype={
h(a){return"Out of Memory"},
gU(){return null},
$ij:1}
A.aK.prototype={
h(a){return"Stack Overflow"},
gU(){return null},
$ij:1}
A.cL.prototype={
h(a){return"Exception: "+this.a}}
A.p.prototype={
gk(a){return A.e.prototype.gk.call(this,0)},
h(a){return"null"}}
A.e.prototype={$ie:1,
B(a,b){return this===b},
gk(a){return A.ad(this)},
h(a){return"Instance of '"+A.cf(this)+"'"},
gm(a){return A.hV(this)},
toString(){return this.h(this)}}
A.bV.prototype={
h(a){return""},
$iy:1}
A.bF.prototype={
gq(a){return this.a.length},
h(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.Q.prototype={
gk(a){var s=this.a,r=this.b
return A.ce(new A.A(s,r).$s,s,r,B.f)},
B(a,b){var s,r,q,p
if(b==null)return!1
if(b instanceof A.Q){s=b.a
r=b.b
q=this.a
p=this.b
p=A.ce(new A.A(s,r).$s,s,r,B.f)===A.ce(new A.A(q,p).$s,q,p,B.f)
s=p}else s=!1
return s},
h(a){var s=this
return"("+s.a+" "+s.b+") => '"+s.c+"' "+s.d}}
A.a9.prototype={}
A.aa.prototype={
h(a){var s=this
return"               row: "+s.a+"\n            column: "+s.b+"\n         character: '"+s.c+"'\n    characterColor: "+s.d+"\n\n          pixelRow: "+s.e+"\n       pixelColumn: "+s.f+"\n         pixelIsOn: "+s.r+"\n    "}}
A.ac.prototype={
sN(a){var s,r,q,p=this
if(a<0){s=p.d=a
for(r=p.b,q=p.a;s<0;){s+=r
p.d=s
p.c=B.a.j(p.c-1,q)}}else{s=p.b
p.c=B.a.j(p.c+B.a.F(a,s),p.a)
p.d=B.a.j(a,s)}},
gp(){return this.c*this.b+this.d},
sp(a){var s=this,r=s.b
s.c=B.a.j(B.a.F(a,r),s.a)
s.d=B.a.j(a,r)}}
A.bE.prototype={
b7(a,b,c,d,e,f,g,h){var s,r=this,q=self.document
q.onfocus=A.b5(new A.ch(r))
q.onblur=A.b5(new A.ci(r))
q=r.w
q.tabIndex=-1
q.style.display="block"
q.style.outline="none"
s=q.getContext("2d")
if(s==null)s=t.m.a(s)
s.imageSmoothingEnabled=!1
q.onfocus=A.b5(new A.cj(r))
q.onblur=A.b5(new A.ck(r))
b.style.display="flex"
b.style.alignItems="flex-start"
b.style.padding="0"
b.style.margin="0"
b.style.width="fit-content"
b.style.height="fit-content"
b.style.background="gray"
b.appendChild(q)
r.H(0)},
a0(a,b){return new A.A(B.a.j(a,this.b),B.a.j(b,this.c))},
a6(){var s=this.x,r=s.getContext("2d")
if(r==null)r=t.m.a(r)
r.save()
r.beginPath()
r.clearRect(0,0,s.width,s.height)
r.restore()
return r},
a9(){var s=this.w.getContext("2d")
if(s==null)s=t.m.a(s)
s.save()
s.beginPath()
s.drawImage(this.x,0,0)
s.restore()
return s},
K(a,b,c,d){var s,r,q,p,o,n,m=this,l=a<0||a>=m.b||b<0||b>=m.c
if(l)return
s=m.a0(a,b)
a=s.a
b=s.b
r=A.dB(b)
q=r.a
p=B.a.T(1,r.b)
l=m.y
if(!(a>=0&&a<l.length))return A.b(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.b(l,q)
o=l[q]
l.$flags&2&&A.c2(l)
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
L(a,b,c,d,e){var s,r,q,p,o,n,m=this,l=a<0||a>=m.b||b<0||b>=m.c
if(l)return
s=m.a0(a,b)
a=s.a
b=s.b
r=A.dB(b)
q=r.a
p=B.a.T(1,r.b)
l=m.y
if(!(a>=0&&a<l.length))return A.b(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.b(l,q)
o=l[q]
l.$flags&2&&A.c2(l)
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
aZ(a,b){var s,r,q,p,o=this.a0(b,a)
b=o.a
s=A.dB(o.b)
r=s.a
q=B.a.T(1,s.b)
p=this.y
if(!(b>=0&&b<p.length))return A.b(p,b)
p=p[b]
if(!(r>=0&&r<p.length))return A.b(p,r)
return(p[r]&q)>>>0>0},
aU(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=this
if(e==null)e=k.c-c
if(b==null)b=k.b-d
k.a6()
if(c===0&&d===0&&e===k.c&&b===k.b){for(s=k.y,r=s.length,q=0;q<r;++q)for(p=0;o=s[q],p<o.length;++p){o.$flags&2&&A.c2(o)
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
for(p=c;p<m;++p)k.K(l,B.a.j(p,r),o,!1)}}k.a9()},
H(a){return this.aU(0,null,0,0,null)},
bo(a,b,c,d,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.a6()
s=e.a0(a,b)
a=s.a
b=s.b
r=B.a.bs(1,a0)-1
for(q=a0-1,p=t.t,o=e.x,n=0;n<8;++n){m=c[n]
l=m&r
m=A.a([],p)
for(k=a+n,j=0;j<a0;++j){i=e.aZ(b+j,k)?1:0
m.push(B.a.T(i,q-j))}h=B.e.by(m,0,new A.cg())
switch(a1){case B.y:for(j=0;j<a0;++j){m=b+j
if((B.a.D(l,q-j)&1)>0)e.L(k,m,d,o,!1)
else e.K(k,m,o,!1)}break
case B.dV:for(j=0;j<a0;++j){m=b+j
if((B.a.D(l,q-j)&1)>0)e.K(k,m,o,!1)
else e.L(k,m,d,o,!1)}break
case B.dX:for(j=0;j<a0;++j){g=q-j
if((B.a.D(l,g)&1)>0&&(B.a.b5(h,g)&1)===0)e.L(k,b+j,d,o,!1)}break
case B.dW:for(j=0;j<a0;++j)if((B.a.D(l,q-j)&1)>0)e.L(k,b+j,d,o,!1)
break
case B.dY:for(f=l&h,j=0;j<a0;++j)if((B.a.D(f,q-j)&1)>0)e.L(k,b+j,d,o,!1)
break
case B.dZ:for(f=l&h,j=0;j<a0;++j)if((B.a.D(f,q-j)&1)>0)e.K(k,b+j,o,!1)
break
case B.e_:for(f=l&h,j=0;j<a0;++j)if((B.a.D(f,q-j)&1)===0)e.K(k,b+j,o,!1)
break
case B.e0:for(f=l&h,j=0;j<a0;++j){m=b+j
if((B.a.D(f,q-j)&1)===0)e.K(k,m,o,!1)
else e.L(k,m,d,o,!1)}break}}e.a9()},
b_(a,b,c){this.bo(c.a,c.b,b,a,8,B.y,!0,!1,!1)},
b4(a){var s,r,q,p,o,n,m,l,k=this,j=k.b
a=B.a.j(a,j)
for(s=j-a,r=k.y,q=r.length,p=0;p<s;++p){if(!(p<q))return A.b(r,p)
o=p+a
n=0
for(;m=r[p],n<m.length;++n){if(!(o<q))return A.b(r,o)
l=r[o]
if(!(n<l.length))return A.b(l,n)
l=l[n]
m.$flags&2&&A.c2(m)
m[n]=l}}for(;p<j;++p){if(!(p<q))return A.b(r,p)
n=0
for(;o=r[p],n<o.length;++n){o.$flags&2&&A.c2(o)
o[n]=0}}k.a6()
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
k.a9()},
S(){var s=this.w
s.style.opacity="1.0"
s.focus()},
R(){var s=this.w
s.style.opacity="0.5"
s.blur()}}
A.ch.prototype={
$0(){this.a.z=!0},
$S:1}
A.ci.prototype={
$0(){this.a.z=!1},
$S:1}
A.cj.prototype={
$0(){this.a.S()},
$S:1}
A.ck.prototype={
$0(){this.a.R()},
$S:1}
A.cg.prototype={
$2(a,b){return(a|b)>>>0},
$S:16}
A.D.prototype={
Y(){return"Mode."+this.b}}
A.ae.prototype={
Y(){return"State."+this.b}}
A.cs.prototype={
b8(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=this,r=s.f
r.tabIndex=-1
r.onfocus=A.b5(new A.ct(s))
r.onblur=A.b5(new A.cu(s))
r.onkeydown=A.eA(new A.cv(s,l,new A.cz(),new A.cy(s)))
r.onclick=A.eA(new A.cw(s,new A.cA(s),o))
A.fC(new A.bi(3e5),new A.cx(s))
s.R()
s.H(0)},
gaj(){var s=this.w
s===$&&A.N()
return s.gaj()},
gah(){var s=this.w
s===$&&A.N()
return s.gah()},
a1(a,b){return new A.A(B.a.j(a,this.a),B.a.j(b,this.b))},
aH(){var s=this,r=s.x
s.CW.M(0,new A.Q(r.c,r.d," ","white"))
s.aQ()
s.cy=!1},
aQ(){var s,r,q,p,o,n,m,l,k,j,i,h=this
for(s=h.CW,r=A.fL(s,s.r,s.$ti.c),q=h.w,p=h.cx,o=8+h.c,n=r.$ti.c;r.I();){m=r.d
if(m==null)m=n.a(m)
l=m.a
k=m.b
if(p.ai(m.c)){j=p.n(0,m.c)
j.toString
i=j}else i=$.eX()
q===$&&A.N()
q.b_(m.d,i,new A.A(l*o,k*8))}if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.aJ()}},
aw(a,b){var s,r=this.a1(b,a)
b=r.a
a=r.b
s=this.ch
if(!(b>=0&&b<s.length))return A.b(s,b)
s=s[b]
if(!(a>=0&&a<s.length))return A.b(s,a)
return s[a].c},
aX(){var s,r=this.x
r.sN(0)
s=r.c
if(s===this.a-1)this.a4()
else r.c=B.a.j(s+1,r.a)},
a4(){var s,r,q,p,o,n,m,l,k=this
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
l.d=m.d}for(m=k.d,n=0;n<r;++n){if(!(s>=0&&s<q.length))return A.b(q,s)
l=q[s]
if(!(n<l.length))return A.b(l,n)
l=l[n]
l.c=" "
l.d=m}s=k.w
s===$&&A.N()
s.b4(8+k.c)},
aq(a,b,c,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a1==null?f.x.c:a1,d=f.a1(e,c==null?f.x.d:c)
e=f.x
s=e.a
e.c=B.a.j(d.a,s)
e.sN(d.b)
if(b==null)b=f.d
for(r=a.split(""),q=r.length,p=f.ch,o=f.CW,n=f.a-1,m=f.b-1,l=0;l<q;++l){k=r[l]
j=e.c
i=e.d
if(!(j>=0&&j<p.length))return A.b(p,j)
h=p[j]
if(!(i>=0&&i<h.length))return A.b(h,i)
g=h[i]
g.c=k
g.d=b
o.M(0,g)
if(j===n&&i===m){f.a4()
e.c=B.a.j(e.c-1,s)}e.sN(e.d+1)}f.aQ()
if(a0)f.aX()},
l(a,b,c){return this.aq(a,null,b,!0,c)},
ap(a,b){return this.aq(a,null,null,b,null)},
bF(a,b,c,d){return this.aq(a,null,b,c,d)},
aT(a,b,c,d,e){var s,r,q,p,o,n,m,l=this
if(e==null)e=l.b-b
if(c==null)c=l.a-d
s=d+c
r=b+e
for(q=l.ch,p=l.d,o=d;o<s;++o)for(n=b;n<r;++n){if(!(o<q.length))return A.b(q,o)
m=q[o]
if(!(n<m.length))return A.b(m,n)
m=m[n]
m.c=" "
m.d=p}q=l.w
q===$&&A.N()
p=8+l.c
q.aU(0,c*p,b*8,d*p,e*8)
p=l.x
p.c=B.a.j(d,p.a)
p.sN(b)},
H(a){return this.aT(0,0,null,0,null)},
b0(a,b,c){var s=this.w
s===$&&A.N()
s.b_(this.d,b,new A.A(c*(8+this.c),a*8))},
aO(){if(this.ay!==B.d)throw A.d(A.c7("Terminal already awaiting input."))},
aV(){this.aO()
this.ay=B.q
var s=this.at
return new A.z(s,A.aj(s).i("z<1>")).gv(0)},
S(){return this.gaj().$0()},
R(){return this.gah().$0()}}
A.cA.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.w
i===$&&A.N()
s=J.e0(a.offsetX)
r=Math.max(Math.min(B.a.F(J.e0(a.offsetY)-1,i.e),i.b-1),0)
q=Math.max(Math.min(B.a.F(s-1,i.d),i.c-1),0)
p=B.a.F(r,8+j.c)
o=B.a.t(q,8)
n=j.aw(o,p)
m=j.a1(p,o)
l=m.a
k=m.b
j=j.ch
if(!(l>=0&&l<j.length))return A.b(j,l)
j=j[l]
if(!(k>=0&&k<j.length))return A.b(j,k)
return new A.aa(p,o,n,j[k].d,r,q,i.aZ(q,r))},
$S:17}
A.cz.prototype={
$1(a){var s=a.keyCode
return new A.a9(s)},
$S:18}
A.cy.prototype={
$0(){var s,r,q,p,o,n=this.a,m=n.a,l=n.b,k=new A.ac(m,l)
k.sp(n.y.gp())
s=A.a([],t.s)
r=n.z
q=r.b
while(p=k.c,o=k.d,p*l+o<r.c*q+r.d){s.push(n.aw(o,p))
p=k.c*l+k.d+1
k.c=B.a.j(B.a.F(p,l),m)
k.d=B.a.j(p,l)}return B.e.bD(s,"")},
$S:19}
A.ct.prototype={
$0(){var s=this.a.w
s===$&&A.N()
s.S()},
$S:1}
A.cu.prototype={
$0(){var s=this.a.w
s===$&&A.N()
s.R()},
$S:1}
A.cv.prototype={
$1(a){var s,r,q,p
a.preventDefault()
s=this.a
switch(s.ay){case B.d:break
case B.q:r=s.at
if(r.d!=null){r.M(0,this.c.$1(a))
s.ay=B.d}break
case B.r:s.aH()
$label0$1:{q=a.keyCode
if(13===q){r=s.as
if(r.d!=null){r.M(0,J.f9(this.d.$0()))
s.aX()
s.ay=B.d}break $label0$1}if(8===q){r=s.x
if(r.gp()>s.y.gp()){r.sp(r.gp()-1)
s.ap(" ",!1)
r.sp(r.gp()-1)}break $label0$1}p=a.key
if(p.length===1&&s.x.gp()<s.z.gp())s.ap(p,!1)}break
case B.A:break}},
$S:7}
A.cw.prototype={
$1(a){var s
a.preventDefault()
s=this.a
if(s.ay===B.A&&s.ax.d!=null){s.ax.M(0,this.b.$1(a))
s.ay=B.d}},
$S:7}
A.cx.prototype={
$1(a){var s,r=this.a,q=r.w
q===$&&A.N()
if(q.z&&J.a7(self.document.activeElement,q.w)&&r.ay===B.r)if(r.cy)r.aH()
else{q=r.x
s=q.c
r.b0(q.d,$.eW(),s)
r.cy=!0}},
$S:20}
A.df.prototype={
$2(a,b){var s=a?1:0
return s+2*(b?1:0)},
$S:21}
A.dg.prototype={
$3(a,b,c){$.a6().b0(1+b+this.b,c,2+a+this.a)},
$S:22}
A.bh.prototype={
Y(){return"Direction."+this.b}}
A.G.prototype={
Y(){return"Action."+this.b}}
A.c5.prototype={}
A.bp.prototype={
a3(){var s,r,q,p,o,n,m,l=this
l.x=B.c
l.y=!1
l.w=0
for(s=l.a,r=J.dR(s),q=l.z,p=0;p<r.gq(s);++p)for(o=0;o<r.n(s,p).length;++o){n=r.n(s,p)
if(!(o<n.length))return A.b(n,o)
m=n[o]
if("M"===m){l.d=p
l.e=o
if(!(p<q.length))return A.b(q,p)
n=q[p]
if(!(o<n.length))return A.b(n,o)
n[o]=" "
continue}if("D"===m){l.f=p
l.r=o
if(!(p<q.length))return A.b(q,p)
n=q[p]
if(!(o<n.length))return A.b(n,o)
n[o]=" "
continue}if(!(p<q.length))return A.b(q,p)
n=q[p]
if(!(o<n.length))return A.b(n,o)
n[o]=m}l.A()},
aI(){var s,r,q=this,p=q.b
if(p<5)p=q.b=5
s=q.z
r=s.length-5
if(p>r)q.b=r
p=q.c
if(p<5)p=q.c=5
if(p>B.e.gv(s).length-5)q.c=B.e.gv(s).length-5},
a2(a,b){this.b+=a
this.c+=b
this.aI()},
A(){var s=this
s.b=s.d
s.c=s.e
s.aI()},
G(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.z,g=i.d,f=g-2,e=h.length
if(!(f>=0&&f<e))return A.b(h,f)
f=h[f]
s=i.e
r=i.x===B.c
q=s+(r?-1:1)
if(!(q>=0&&q<f.length))return A.b(f,q)
p=f[q]
q=g-1
if(!(q>=0&&q<e))return A.b(h,q)
q=h[q]
f=s+(r?-1:1)
o=q.length
if(!(f>=0&&f<o))return A.b(q,f)
n=q[f]
if(!(s>=0&&s<o))return A.b(q,s)
m=q[s]
if(!(g>=0&&g<e))return A.b(h,g)
q=h[g]
f=s+(r?-1:1)
if(!(f>=0&&f<q.length))return A.b(q,f)
l=q[f];++g
if(!(g<e))return A.b(h,g)
g=h[g]
h=s+(r?-1:1)
if(!(h>=0&&h<g.length))return A.b(g,h)
k=g[h]
j=!0
switch(a){case B.o:break
case B.j:j=(!i.y||n===" ")&&l===" "&&k!==" "
break
case B.l:j=(!i.y||n===" ")&&l===" "&&k===" "
break
case B.k:j=(!i.y||p===" ")&&n===" "&&l!==" "
break
case B.m:j=!i.y&&l==="O"&&n===" "&&m===" "
break
case B.n:j=i.y&&n===" "
break
case B.i:break
default:j=!1}return j},
E(a){var s,r,q,p,o,n,m,l,k,j=this,i=j.G(a)
if(i)switch(a){case B.o:j.a3()
break
case B.j:s=j.e
j.e=s+(j.x===B.c?-1:1)
break
case B.l:s=j.e
s+=j.x===B.c?-1:1
j.e=s
r=j.d+1
q=j.z
p=q.length
while(!0){o=r+1
if(!(o>=0&&o<p))return A.b(q,o)
n=q[o]
if(!(s>=0&&s<n.length))return A.b(n,s)
if(!(n[s]===" "))break
r=o}j.d=r
break
case B.k:s=j.e
j.e=s+(j.x===B.c?-1:1);--j.d
break
case B.m:s=j.z
q=j.d
if(!(q>=0&&q<s.length))return A.b(s,q)
q=s[q]
s=j.e
s+=j.x===B.c?-1:1
if(!(s>=0&&s<q.length))return A.b(q,s)
q[s]=" "
j.y=!0
break
case B.n:s=j.y=!1
r=j.d-1
q=j.z
p=q.length
n=j.x===B.c
m=j.e
while(!0){o=r+1
if(o<p){if(!(o>=0))return A.b(q,o)
l=q[o]
k=m+(n?-1:1)
if(!(k>=0&&k<l.length))return A.b(l,k)
k=l[k]===" "
l=k}else l=s
if(!l)break
r=o}if(!(r>=0&&r<p))return A.b(q,r)
s=q[r]
q=m+(n?-1:1)
if(!(q>=0&&q<s.length))return A.b(s,q)
s[q]="O"
break
case B.i:j.x=j.x===B.c?B.w:B.c
break}return i},
bB(a){var s=this,r=new A.ca(s)
switch(a){case 37:if(s.x===B.w){s.E(B.i)
s.A()}else{r.$0()
s.A()}break
case 39:if(s.x===B.c){s.E(B.i)
s.A()}else{r.$0()
s.A()}break
case 32:if(s.G(B.m)){s.E(B.m)
s.A();++s.w}else if(s.G(B.n)){s.E(B.n)
s.A();++s.w}break
case 82:if(s.G(B.o)){s.E(B.o)
s.A()}break
case 65:s.a2(0,-1)
break
case 68:s.a2(0,1)
break
case 83:s.A()
break
case 87:s.a2(-1,0)
break
case 88:s.a2(1,0)
break}},
bw(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.b,f=g-5,e=g+5
g=h.c
s=g-5
r=g+5
q=new A.c9(h)
g=A.a([],t.E)
for(p=t.s,o=f;o<e;++o){n=A.a([],p)
for(m=s;m<r;++m)n.push(q.$2(o,m))
g.push(n)}p=h.w
n=h.d===h.f&&h.e===h.r
l=h.c
k=h.z
j=B.e.gv(k).length
i=h.b
return new A.c5(g,p,n,l>5,l<j-5,i>5,i<k.length-5)}}
A.ca.prototype={
$0(){var s=this.a
if(s.G(B.k)){s.E(B.k);++s.w}else if(s.G(B.l)){s.E(B.l);++s.w}else if(s.G(B.j)){s.E(B.j);++s.w}},
$S:0}
A.c9.prototype={
$2(a,b){var s,r=this.a,q=r.z
if(!(a>=0&&a<q.length))return A.b(q,a)
q=q[a]
if(!(b>=0&&b<q.length))return A.b(q,b)
s=q[b]
q=r.d
if(a===q-1&&b===r.e&&r.y)s="O"
else if(a===r.f&&b===r.r)s="D"
else if(a===q&&b===r.e)s=r.x===B.c?"<":">"
return s},
$S:23};(function aliases(){var s=J.S.prototype
s.b6=s.h})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._static_2,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u
s(A,"hG","fH",3)
s(A,"hH","fI",3)
s(A,"hI","fJ",3)
r(A,"eM","hB",0)
s(A,"hJ","hv",4)
q(A,"hK","hw",5)
p(A.m.prototype,"gaF","C",5)
o(A.aP.prototype,"gbm","bn",0)
var n
o(n=A.bE.prototype,"gaj","S",0)
o(n,"gah","R",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.e,null)
q(A.e,[A.dw,J.bl,J.bb,A.j,A.a_,A.cl,A.bq,A.at,A.ai,A.bg,A.cC,A.cd,A.as,A.aX,A.aC,A.cb,A.x,A.bR,A.bW,A.aZ,A.bI,A.Z,A.ag,A.bL,A.bK,A.U,A.m,A.bJ,A.bP,A.bS,A.aP,A.bU,A.d8,A.aJ,A.d0,A.ah,A.l,A.bi,A.cK,A.bB,A.aK,A.cL,A.p,A.bV,A.bF,A.Q,A.a9,A.aa,A.ac,A.bE,A.cs,A.c5,A.bp])
q(J.bl,[J.bm,J.av,J.ax,J.aw,J.ay,J.a8,J.a0])
q(J.ax,[J.S,J.o,A.br,A.aF])
q(J.S,[J.bC,J.a1,J.R])
r(J.c8,J.o)
q(J.a8,[J.au,J.bn])
q(A.j,[A.aB,A.I,A.bo,A.bH,A.bN,A.bD,A.bQ,A.bc,A.C,A.aL,A.bG,A.af,A.be])
q(A.a_,[A.c3,A.c4,A.cr,A.di,A.dk,A.cH,A.cG,A.d9,A.cR,A.cY,A.cp,A.co,A.d4,A.cA,A.cz,A.cv,A.cw,A.cx,A.dg])
q(A.c3,[A.dn,A.cI,A.cJ,A.d6,A.d5,A.cM,A.cU,A.cT,A.cQ,A.cO,A.cN,A.cX,A.cW,A.cV,A.cq,A.cn,A.d1,A.db,A.dc,A.d3,A.ch,A.ci,A.cj,A.ck,A.cy,A.ct,A.cu,A.ca])
r(A.bT,A.ai)
r(A.A,A.bT)
r(A.bj,A.bg)
r(A.aH,A.I)
q(A.cr,[A.cm,A.ar])
r(A.aA,A.aC)
r(A.az,A.aA)
q(A.c4,[A.dj,A.da,A.dd,A.cS,A.cZ,A.cc,A.cg,A.df,A.c9])
q(A.aF,[A.bs,A.ab])
q(A.ab,[A.aR,A.aT])
r(A.aS,A.aR)
r(A.aD,A.aS)
r(A.aU,A.aT)
r(A.aE,A.aU)
q(A.aD,[A.bt,A.bu])
q(A.aE,[A.bv,A.bw,A.bx,A.by,A.bz,A.aG,A.bA])
r(A.b_,A.bQ)
r(A.aY,A.ag)
r(A.aO,A.aY)
r(A.z,A.aO)
r(A.bM,A.bL)
r(A.aN,A.bM)
r(A.aM,A.bK)
r(A.bO,A.bP)
r(A.d2,A.d8)
r(A.aW,A.aJ)
r(A.aQ,A.aW)
q(A.C,[A.aI,A.bk])
q(A.cK,[A.D,A.ae,A.bh,A.G])
s(A.aR,A.l)
s(A.aS,A.at)
s(A.aT,A.l)
s(A.aU,A.at)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{c:"int",r:"double",i4:"num",w:"String",ao:"bool",p:"Null",f:"List",e:"Object",ig:"Map"},mangledNames:{},types:["~()","p()","p(@)","~(~())","~(@)","~(e,y)","p(e,y)","p(k)","H<~>()","@(@)","@(@,w)","@(w)","p(~())","p(@,y)","~(c,@)","~(e?,e?)","c(c,c)","aa(k)","a9(k)","w()","~(cB)","c(ao,ao)","~(c,c,f<c>)","w(c,c)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.A&&a.b(c.a)&&b.b(c.b)}}
A.h1(v.typeUniverse,JSON.parse('{"bC":"S","a1":"S","R":"S","bm":{"ao":[],"h":[]},"av":{"p":[],"h":[]},"ax":{"k":[]},"S":{"k":[]},"o":{"f":["1"],"k":[]},"c8":{"o":["1"],"f":["1"],"k":[]},"a8":{"r":[]},"au":{"r":[],"c":[],"h":[]},"bn":{"r":[],"h":[]},"a0":{"w":[],"h":[]},"aB":{"j":[]},"aH":{"I":[],"j":[]},"bo":{"j":[]},"bH":{"j":[]},"aX":{"y":[]},"bN":{"j":[]},"bD":{"j":[]},"aA":{"aC":["1","2"]},"az":{"aA":["1","2"],"aC":["1","2"]},"br":{"k":[],"h":[]},"aF":{"k":[]},"bs":{"k":[],"h":[]},"ab":{"v":["1"],"k":[]},"aD":{"l":["r"],"f":["r"],"v":["r"],"k":[]},"aE":{"l":["c"],"f":["c"],"v":["c"],"k":[]},"bt":{"l":["r"],"f":["r"],"v":["r"],"k":[],"h":[],"l.E":"r"},"bu":{"l":["r"],"f":["r"],"v":["r"],"k":[],"h":[],"l.E":"r"},"bv":{"l":["c"],"f":["c"],"v":["c"],"k":[],"h":[],"l.E":"c"},"bw":{"l":["c"],"f":["c"],"v":["c"],"k":[],"h":[],"l.E":"c"},"bx":{"l":["c"],"f":["c"],"v":["c"],"k":[],"h":[],"l.E":"c"},"by":{"l":["c"],"f":["c"],"v":["c"],"k":[],"h":[],"l.E":"c"},"bz":{"cE":[],"l":["c"],"f":["c"],"v":["c"],"k":[],"h":[],"l.E":"c"},"aG":{"l":["c"],"f":["c"],"v":["c"],"k":[],"h":[],"l.E":"c"},"bA":{"l":["c"],"f":["c"],"v":["c"],"k":[],"h":[],"l.E":"c"},"bQ":{"j":[]},"b_":{"I":[],"j":[]},"aZ":{"cB":[]},"Z":{"j":[]},"z":{"ag":["1"]},"aM":{"bK":["1"]},"m":{"H":["1"]},"aO":{"ag":["1"]},"aY":{"ag":["1"]},"aQ":{"aJ":["1"]},"aW":{"aJ":["1"]},"bc":{"j":[]},"I":{"j":[]},"C":{"j":[]},"aI":{"j":[]},"bk":{"j":[]},"aL":{"j":[]},"bG":{"j":[]},"af":{"j":[]},"be":{"j":[]},"bB":{"j":[]},"aK":{"j":[]},"bV":{"y":[]},"fo":{"f":["c"]},"fF":{"f":["c"]},"fE":{"f":["c"]},"fm":{"f":["c"]},"fD":{"f":["c"]},"fn":{"f":["c"]},"cE":{"f":["c"]},"fj":{"f":["r"]},"fk":{"f":["r"]}}'))
A.h0(v.typeUniverse,JSON.parse('{"at":1,"bg":2,"ab":1,"aO":1,"bM":1,"bL":1,"aY":1,"bP":1,"bO":1,"bS":1,"aP":1,"bU":1,"aW":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.dh
return{o:s("Q"),Q:s("j"),Z:s("id"),U:s("o<Q>"),G:s("o<f<Q>>"),E:s("o<f<w>>"),f:s("o<e>"),s:s("o<w>"),w:s("o<cE>"),b:s("o<@>"),t:s("o<c>"),T:s("av"),m:s("k"),g:s("R"),p:s("v<@>"),V:s("a9"),j:s("f<@>"),n:s("aa"),P:s("p"),K:s("e"),L:s("ih"),F:s("+()"),l:s("y"),N:s("w"),I:s("cB"),R:s("h"),c:s("I"),B:s("a1"),d:s("m<@>"),a:s("m<c>"),D:s("m<~>"),y:s("ao"),i:s("r"),z:s("@"),v:s("@(e)"),C:s("@(e,y)"),S:s("c"),A:s("0&*"),_:s("e*"),O:s("H<p>?"),X:s("e?"),H:s("i4"),q:s("~"),u:s("~(e)"),k:s("~(e,y)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.J=J.bl.prototype
B.e=J.o.prototype
B.a=J.au.prototype
B.K=J.a8.prototype
B.h=J.a0.prototype
B.L=J.R.prototype
B.M=J.ax.prototype
B.z=J.bC.prototype
B.t=J.a1.prototype
B.i=new A.G("turn")
B.j=new A.G("stepForward")
B.k=new A.G("stepUp")
B.l=new A.G("stepDown")
B.m=new A.G("pickUp")
B.n=new A.G("putDown")
B.o=new A.G("reset")
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

B.H=new A.bB()
B.f=new A.cl()
B.b=new A.d2()
B.I=new A.bV()
B.c=new A.bh("left")
B.w=new A.bh("right")
B.O=A.a(s([255,129,129,129,129,129,129,255]),t.t)
B.x=A.a(s([0,0,0,0,0,0,0,0]),t.t)
B.p=A.a(s(["tcP","ARo","CKs","daN","BAH","Ion","Twe","nTy","iRC","JmK","wTF"]),t.s)
B.cf=A.a(s([126,66,66,66,70,66,66,126]),t.t)
B.cx=A.a(s([56,126,72,68,40,84,16,108]),t.t)
B.dv=A.a(s([251,251,0,254,254,0,251,251]),t.t)
B.dw=A.a(s([28,126,18,34,20,42,8,54]),t.t)
B.dd=A.a(s([126,129,165,129,189,153,129,126]),t.t)
B.ae=A.a(s([126,255,219,255,195,231,255,126]),t.t)
B.dM=A.a(s([108,254,254,254,124,56,16,0]),t.t)
B.c8=A.a(s([16,56,124,254,124,56,16,0]),t.t)
B.b6=A.a(s([56,124,56,254,254,124,56,124]),t.t)
B.bi=A.a(s([16,16,56,124,254,124,56,124]),t.t)
B.aC=A.a(s([0,0,24,60,60,24,0,0]),t.t)
B.aF=A.a(s([255,255,231,195,195,231,255,255]),t.t)
B.aR=A.a(s([0,60,102,66,66,102,60,0]),t.t)
B.cY=A.a(s([255,195,153,189,189,153,195,255]),t.t)
B.dL=A.a(s([15,7,15,125,204,204,204,120]),t.t)
B.dK=A.a(s([60,102,102,102,60,24,126,24]),t.t)
B.cV=A.a(s([63,51,63,48,48,112,240,224]),t.t)
B.Y=A.a(s([127,99,127,99,99,103,230,192]),t.t)
B.a2=A.a(s([153,90,60,231,231,60,90,153]),t.t)
B.az=A.a(s([128,224,248,254,248,224,128,0]),t.t)
B.bE=A.a(s([2,14,62,254,62,14,2,0]),t.t)
B.cn=A.a(s([24,60,126,24,24,126,60,24]),t.t)
B.cj=A.a(s([102,102,102,102,102,0,102,0]),t.t)
B.ct=A.a(s([127,219,219,123,27,27,27,0]),t.t)
B.cu=A.a(s([62,99,56,108,108,56,204,120]),t.t)
B.bS=A.a(s([0,0,0,0,126,126,126,0]),t.t)
B.bV=A.a(s([24,60,126,24,126,60,24,255]),t.t)
B.T=A.a(s([24,60,126,24,24,24,24,0]),t.t)
B.di=A.a(s([24,24,24,24,126,60,24,0]),t.t)
B.db=A.a(s([0,24,12,254,12,24,0,0]),t.t)
B.aw=A.a(s([0,48,96,254,96,48,0,0]),t.t)
B.c_=A.a(s([0,0,192,192,192,254,0,0]),t.t)
B.bx=A.a(s([0,36,102,255,102,36,0,0]),t.t)
B.ac=A.a(s([0,24,60,126,255,255,0,0]),t.t)
B.bW=A.a(s([0,255,255,126,60,24,0,0]),t.t)
B.bF=A.a(s([48,120,120,48,48,0,48,0]),t.t)
B.a0=A.a(s([108,108,108,0,0,0,0,0]),t.t)
B.aq=A.a(s([108,108,254,108,254,108,108,0]),t.t)
B.c3=A.a(s([48,124,192,120,12,248,48,0]),t.t)
B.S=A.a(s([0,198,204,24,48,102,198,0]),t.t)
B.cH=A.a(s([56,108,56,118,220,204,118,0]),t.t)
B.ap=A.a(s([96,96,192,0,0,0,0,0]),t.t)
B.X=A.a(s([24,48,96,96,96,48,24,0]),t.t)
B.bB=A.a(s([96,48,24,24,24,48,96,0]),t.t)
B.cy=A.a(s([0,102,60,255,60,102,0,0]),t.t)
B.dT=A.a(s([0,48,48,252,48,48,0,0]),t.t)
B.c5=A.a(s([0,0,0,0,0,48,48,96]),t.t)
B.bw=A.a(s([0,0,0,252,0,0,0,0]),t.t)
B.cl=A.a(s([0,0,0,0,0,48,48,0]),t.t)
B.a7=A.a(s([6,12,24,48,96,192,128,0]),t.t)
B.b9=A.a(s([124,198,206,222,246,230,124,0]),t.t)
B.co=A.a(s([48,112,48,48,48,48,252,0]),t.t)
B.c1=A.a(s([120,204,12,56,96,204,252,0]),t.t)
B.dO=A.a(s([120,204,12,56,12,204,120,0]),t.t)
B.bD=A.a(s([28,60,108,204,254,12,30,0]),t.t)
B.dc=A.a(s([252,192,248,12,12,204,120,0]),t.t)
B.du=A.a(s([56,96,192,248,204,204,120,0]),t.t)
B.c2=A.a(s([252,204,12,24,48,48,48,0]),t.t)
B.cB=A.a(s([120,204,204,120,204,204,120,0]),t.t)
B.bg=A.a(s([120,204,204,124,12,24,112,0]),t.t)
B.d5=A.a(s([0,48,48,0,0,48,48,0]),t.t)
B.aU=A.a(s([0,48,48,0,0,48,48,96]),t.t)
B.bC=A.a(s([24,48,96,192,96,48,24,0]),t.t)
B.br=A.a(s([0,0,252,0,0,252,0,0]),t.t)
B.aE=A.a(s([96,48,24,12,24,48,96,0]),t.t)
B.au=A.a(s([120,204,12,24,48,0,48,0]),t.t)
B.dq=A.a(s([124,198,222,222,222,192,120,0]),t.t)
B.ce=A.a(s([48,120,204,204,252,204,204,0]),t.t)
B.aO=A.a(s([252,102,102,124,102,102,252,0]),t.t)
B.ag=A.a(s([60,102,192,192,192,102,60,0]),t.t)
B.a8=A.a(s([248,108,102,102,102,108,248,0]),t.t)
B.am=A.a(s([254,98,104,120,104,98,254,0]),t.t)
B.cr=A.a(s([254,98,104,120,104,96,240,0]),t.t)
B.as=A.a(s([60,102,192,192,206,102,62,0]),t.t)
B.av=A.a(s([204,204,204,252,204,204,204,0]),t.t)
B.cQ=A.a(s([120,48,48,48,48,48,120,0]),t.t)
B.bQ=A.a(s([30,12,12,12,204,204,120,0]),t.t)
B.bI=A.a(s([230,102,108,120,108,102,230,0]),t.t)
B.bH=A.a(s([240,96,96,96,98,102,254,0]),t.t)
B.aP=A.a(s([198,238,254,254,214,198,198,0]),t.t)
B.a_=A.a(s([198,230,246,222,206,198,198,0]),t.t)
B.d_=A.a(s([56,108,198,198,198,108,56,0]),t.t)
B.bm=A.a(s([252,102,102,124,96,96,240,0]),t.t)
B.cK=A.a(s([120,204,204,204,220,120,28,0]),t.t)
B.R=A.a(s([252,102,102,124,108,102,230,0]),t.t)
B.aj=A.a(s([120,204,224,112,28,204,120,0]),t.t)
B.dF=A.a(s([252,180,48,48,48,48,120,0]),t.t)
B.aM=A.a(s([204,204,204,204,204,204,252,0]),t.t)
B.a4=A.a(s([204,204,204,204,204,120,48,0]),t.t)
B.cT=A.a(s([198,198,198,214,254,238,198,0]),t.t)
B.cN=A.a(s([198,198,108,56,56,108,198,0]),t.t)
B.a6=A.a(s([204,204,204,120,48,48,120,0]),t.t)
B.V=A.a(s([254,198,140,24,50,102,254,0]),t.t)
B.by=A.a(s([120,96,96,96,96,96,120,0]),t.t)
B.cF=A.a(s([192,96,48,24,12,6,2,0]),t.t)
B.bA=A.a(s([120,24,24,24,24,24,120,0]),t.t)
B.dt=A.a(s([16,56,108,198,0,0,0,0]),t.t)
B.Q=A.a(s([0,0,0,0,0,0,0,255]),t.t)
B.aN=A.a(s([48,48,24,0,0,0,0,0]),t.t)
B.dj=A.a(s([0,0,120,12,124,204,118,0]),t.t)
B.ci=A.a(s([224,96,96,124,102,102,220,0]),t.t)
B.cM=A.a(s([0,0,120,204,192,204,120,0]),t.t)
B.b7=A.a(s([28,12,12,124,204,204,118,0]),t.t)
B.dy=A.a(s([0,0,120,204,252,192,120,0]),t.t)
B.aS=A.a(s([56,108,96,240,96,96,240,0]),t.t)
B.cJ=A.a(s([0,0,118,204,204,124,12,248]),t.t)
B.aD=A.a(s([224,96,108,118,102,102,230,0]),t.t)
B.cz=A.a(s([48,0,112,48,48,48,120,0]),t.t)
B.bL=A.a(s([12,0,12,12,12,204,204,120]),t.t)
B.be=A.a(s([224,96,102,108,120,108,230,0]),t.t)
B.bN=A.a(s([112,48,48,48,48,48,120,0]),t.t)
B.bv=A.a(s([0,0,204,254,254,214,198,0]),t.t)
B.bO=A.a(s([0,0,248,204,204,204,204,0]),t.t)
B.bh=A.a(s([0,0,120,204,204,204,120,0]),t.t)
B.dC=A.a(s([0,0,220,102,102,124,96,240]),t.t)
B.dz=A.a(s([0,0,118,204,204,124,12,30]),t.t)
B.bs=A.a(s([0,0,220,118,102,96,240,0]),t.t)
B.d2=A.a(s([0,0,124,192,120,12,248,0]),t.t)
B.cW=A.a(s([16,48,124,48,48,52,24,0]),t.t)
B.cb=A.a(s([0,0,204,204,204,204,118,0]),t.t)
B.b5=A.a(s([0,0,204,204,204,120,48,0]),t.t)
B.bl=A.a(s([0,0,198,214,254,254,108,0]),t.t)
B.bJ=A.a(s([0,0,198,108,56,108,198,0]),t.t)
B.dI=A.a(s([0,0,204,204,204,124,12,248]),t.t)
B.dh=A.a(s([0,0,252,152,48,100,252,0]),t.t)
B.bb=A.a(s([28,48,48,224,48,48,28,0]),t.t)
B.d1=A.a(s([24,24,24,0,24,24,24,0]),t.t)
B.aH=A.a(s([224,48,48,28,48,48,224,0]),t.t)
B.dS=A.a(s([118,220,0,0,0,0,0,0]),t.t)
B.b4=A.a(s([0,16,56,108,198,198,254,0]),t.t)
B.ay=A.a(s([120,204,192,204,120,24,12,120]),t.t)
B.df=A.a(s([0,204,0,204,204,204,126,0]),t.t)
B.dH=A.a(s([28,0,120,204,252,192,120,0]),t.t)
B.c4=A.a(s([126,195,60,6,62,102,63,0]),t.t)
B.al=A.a(s([204,0,120,12,124,204,126,0]),t.t)
B.b8=A.a(s([224,0,120,12,124,204,126,0]),t.t)
B.ab=A.a(s([48,48,120,12,124,204,126,0]),t.t)
B.bo=A.a(s([0,0,120,192,192,120,12,56]),t.t)
B.dp=A.a(s([126,195,60,102,126,96,60,0]),t.t)
B.aQ=A.a(s([204,0,120,204,252,192,120,0]),t.t)
B.d3=A.a(s([224,0,120,204,252,192,120,0]),t.t)
B.dg=A.a(s([204,0,112,48,48,48,120,0]),t.t)
B.cU=A.a(s([124,198,56,24,24,24,60,0]),t.t)
B.b1=A.a(s([224,0,112,48,48,48,120,0]),t.t)
B.dN=A.a(s([198,56,108,198,254,198,198,0]),t.t)
B.d0=A.a(s([48,48,0,120,204,252,204,0]),t.t)
B.bG=A.a(s([28,0,252,96,120,96,252,0]),t.t)
B.dG=A.a(s([0,0,127,12,127,204,127,0]),t.t)
B.aV=A.a(s([62,108,204,254,204,204,206,0]),t.t)
B.dA=A.a(s([120,204,0,120,204,204,120,0]),t.t)
B.ah=A.a(s([0,204,0,120,204,204,120,0]),t.t)
B.dP=A.a(s([0,224,0,120,204,204,120,0]),t.t)
B.aT=A.a(s([120,204,0,204,204,204,126,0]),t.t)
B.cX=A.a(s([0,224,0,204,204,204,126,0]),t.t)
B.aB=A.a(s([0,204,0,204,204,124,12,248]),t.t)
B.an=A.a(s([195,24,60,102,102,60,24,0]),t.t)
B.d9=A.a(s([204,0,204,204,204,204,120,0]),t.t)
B.a1=A.a(s([24,24,126,192,192,126,24,24]),t.t)
B.aK=A.a(s([56,108,100,240,96,230,252,0]),t.t)
B.b2=A.a(s([204,204,120,252,48,252,48,48]),t.t)
B.dk=A.a(s([248,204,204,250,198,207,198,199]),t.t)
B.bR=A.a(s([14,27,24,60,24,24,216,112]),t.t)
B.aG=A.a(s([28,0,120,12,124,204,126,0]),t.t)
B.ch=A.a(s([56,0,112,48,48,48,120,0]),t.t)
B.aJ=A.a(s([0,28,0,120,204,204,120,0]),t.t)
B.cC=A.a(s([0,28,0,204,204,204,126,0]),t.t)
B.aZ=A.a(s([0,248,0,248,204,204,204,0]),t.t)
B.cS=A.a(s([252,0,204,236,252,220,204,0]),t.t)
B.ai=A.a(s([60,108,108,62,0,126,0,0]),t.t)
B.cd=A.a(s([56,108,108,56,0,124,0,0]),t.t)
B.da=A.a(s([48,0,48,96,192,204,120,0]),t.t)
B.b0=A.a(s([0,0,0,252,192,192,0,0]),t.t)
B.aI=A.a(s([0,0,0,252,12,12,0,0]),t.t)
B.d4=A.a(s([195,198,204,222,51,102,204,15]),t.t)
B.aA=A.a(s([195,198,204,219,55,111,207,3]),t.t)
B.bU=A.a(s([24,24,0,24,24,24,24,0]),t.t)
B.bT=A.a(s([0,51,102,204,102,51,0,0]),t.t)
B.bd=A.a(s([0,204,102,51,102,204,0,0]),t.t)
B.cE=A.a(s([34,136,34,136,34,136,34,136]),t.t)
B.dB=A.a(s([85,170,85,170,85,170,85,170]),t.t)
B.bM=A.a(s([219,119,219,238,219,119,219,238]),t.t)
B.b3=A.a(s([24,24,24,24,24,24,24,24]),t.t)
B.b_=A.a(s([24,24,24,24,248,24,24,24]),t.t)
B.c0=A.a(s([24,24,248,24,248,24,24,24]),t.t)
B.dR=A.a(s([54,54,54,54,246,54,54,54]),t.t)
B.cp=A.a(s([0,0,0,0,254,54,54,54]),t.t)
B.aW=A.a(s([0,0,248,24,248,24,24,24]),t.t)
B.af=A.a(s([54,54,246,6,246,54,54,54]),t.t)
B.cv=A.a(s([54,54,54,54,54,54,54,54]),t.t)
B.cc=A.a(s([0,0,254,6,246,54,54,54]),t.t)
B.cA=A.a(s([54,54,246,6,254,0,0,0]),t.t)
B.at=A.a(s([54,54,54,54,254,0,0,0]),t.t)
B.a5=A.a(s([24,24,248,24,248,0,0,0]),t.t)
B.aa=A.a(s([0,0,0,0,248,24,24,24]),t.t)
B.a3=A.a(s([24,24,24,24,31,0,0,0]),t.t)
B.bZ=A.a(s([24,24,24,24,255,0,0,0]),t.t)
B.bq=A.a(s([0,0,0,0,255,24,24,24]),t.t)
B.d8=A.a(s([24,24,24,24,31,24,24,24]),t.t)
B.bX=A.a(s([0,0,0,0,255,0,0,0]),t.t)
B.cw=A.a(s([24,24,24,24,255,24,24,24]),t.t)
B.cI=A.a(s([24,24,31,24,31,24,24,24]),t.t)
B.bf=A.a(s([54,54,54,54,55,54,54,54]),t.t)
B.dx=A.a(s([54,54,55,48,63,0,0,0]),t.t)
B.dn=A.a(s([0,0,63,48,55,54,54,54]),t.t)
B.bK=A.a(s([54,54,247,0,255,0,0,0]),t.t)
B.bz=A.a(s([0,0,255,0,247,54,54,54]),t.t)
B.aY=A.a(s([54,54,55,48,55,54,54,54]),t.t)
B.aX=A.a(s([0,0,255,0,255,0,0,0]),t.t)
B.dJ=A.a(s([54,54,247,0,247,54,54,54]),t.t)
B.cO=A.a(s([24,24,255,0,255,0,0,0]),t.t)
B.N=A.a(s([54,54,54,54,255,0,0,0]),t.t)
B.dD=A.a(s([0,0,255,0,255,24,24,24]),t.t)
B.c6=A.a(s([0,0,0,0,255,54,54,54]),t.t)
B.cq=A.a(s([54,54,54,54,63,0,0,0]),t.t)
B.bu=A.a(s([24,24,31,24,31,0,0,0]),t.t)
B.ck=A.a(s([0,0,31,24,31,24,24,24]),t.t)
B.cL=A.a(s([0,0,0,0,63,54,54,54]),t.t)
B.cR=A.a(s([54,54,54,54,255,54,54,54]),t.t)
B.bP=A.a(s([24,24,255,24,255,24,24,24]),t.t)
B.dl=A.a(s([24,24,24,24,248,0,0,0]),t.t)
B.ba=A.a(s([0,0,0,0,31,24,24,24]),t.t)
B.c7=A.a(s([255,255,255,255,255,255,255,255]),t.t)
B.ca=A.a(s([0,0,0,0,255,255,255,255]),t.t)
B.bk=A.a(s([240,240,240,240,240,240,240,240]),t.t)
B.cs=A.a(s([15,15,15,15,15,15,15,15]),t.t)
B.d7=A.a(s([255,255,255,255,0,0,0,0]),t.t)
B.dQ=A.a(s([0,0,118,220,200,220,118,0]),t.t)
B.dr=A.a(s([0,120,204,248,204,248,192,192]),t.t)
B.ar=A.a(s([0,252,204,192,192,192,192,0]),t.t)
B.c9=A.a(s([0,254,108,108,108,108,108,0]),t.t)
B.dm=A.a(s([252,204,96,48,96,204,252,0]),t.t)
B.bn=A.a(s([0,0,126,216,216,216,112,0]),t.t)
B.bt=A.a(s([0,102,102,102,102,124,96,192]),t.t)
B.cG=A.a(s([0,118,220,24,24,24,24,0]),t.t)
B.ak=A.a(s([252,48,120,204,204,120,48,252]),t.t)
B.aL=A.a(s([56,108,198,254,198,108,56,0]),t.t)
B.ao=A.a(s([56,108,198,198,108,108,238,0]),t.t)
B.P=A.a(s([28,48,24,124,204,204,120,0]),t.t)
B.dE=A.a(s([0,0,126,219,219,126,0,0]),t.t)
B.bp=A.a(s([6,12,126,219,219,126,96,192]),t.t)
B.ad=A.a(s([56,96,192,248,192,96,56,0]),t.t)
B.cm=A.a(s([120,204,204,204,204,204,204,0]),t.t)
B.cP=A.a(s([0,252,0,252,0,252,0,0]),t.t)
B.a9=A.a(s([48,48,252,48,48,0,252,0]),t.t)
B.bc=A.a(s([96,48,24,48,96,0,252,0]),t.t)
B.cZ=A.a(s([24,48,96,48,24,0,252,0]),t.t)
B.bj=A.a(s([14,27,27,24,24,24,24,24]),t.t)
B.de=A.a(s([24,24,24,24,24,216,216,112]),t.t)
B.cg=A.a(s([48,48,0,252,0,48,48,0]),t.t)
B.U=A.a(s([0,118,220,0,118,220,0,0]),t.t)
B.cD=A.a(s([56,108,108,56,0,0,0,0]),t.t)
B.W=A.a(s([0,0,0,24,24,0,0,0]),t.t)
B.ds=A.a(s([0,0,0,0,24,0,0,0]),t.t)
B.Z=A.a(s([15,12,12,12,236,108,60,28]),t.t)
B.bY=A.a(s([120,108,108,108,108,0,0,0]),t.t)
B.ax=A.a(s([112,24,48,96,120,0,0,0]),t.t)
B.d6=A.a(s([0,0,60,60,60,60,0,0]),t.t)
B.dU=new A.bj(["\u263a",B.dd,"\u263b",B.ae,"\u2665",B.dM,"\u2666",B.c8,"\u2663",B.b6,"\u2660",B.bi,"\u2022",B.aC,"\u25d8",B.aF,"\u25cb",B.aR,"\u25d9",B.cY,"\u2642",B.dL,"\u2640",B.dK,"\u266a",B.cV,"\u266b",B.Y,"\u263c",B.a2,"\u25ba",B.az,"\u25c4",B.bE,"\u2195",B.cn,"\u203c",B.cj,"\xb6",B.ct,"\xa7",B.cu,"\u25ac",B.bS,"\u21a8",B.bV,"\u2191",B.T,"\u2193",B.di,"\u2192",B.db,"\u2190",B.aw,"\u221f",B.c_,"\u2194",B.bx,"\u25b2",B.ac,"\u25bc",B.bW," ",B.x,"!",B.bF,'"',B.a0,"#",B.aq,"$",B.c3,"%",B.S,"&",B.cH,"'",B.ap,"(",B.X,")",B.bB,"*",B.cy,"+",B.dT,",",B.c5,"-",B.bw,".",B.cl,"/",B.a7,"0",B.b9,"1",B.co,"2",B.c1,"3",B.dO,"4",B.bD,"5",B.dc,"6",B.du,"7",B.c2,"8",B.cB,"9",B.bg,":",B.d5,";",B.aU,"<",B.bC,"=",B.br,">",B.aE,"?",B.au,"@",B.dq,"A",B.ce,"B",B.aO,"C",B.ag,"D",B.a8,"E",B.am,"F",B.cr,"G",B.as,"H",B.av,"I",B.cQ,"J",B.bQ,"K",B.bI,"L",B.bH,"M",B.aP,"N",B.a_,"O",B.d_,"P",B.bm,"Q",B.cK,"R",B.R,"S",B.aj,"T",B.dF,"U",B.aM,"V",B.a4,"W",B.cT,"X",B.cN,"Y",B.a6,"Z",B.V,"[",B.by,"\\",B.cF,"]",B.bA,"^",B.dt,"_",B.Q,"`",B.aN,"a",B.dj,"b",B.ci,"c",B.cM,"d",B.b7,"e",B.dy,"f",B.aS,"g",B.cJ,"h",B.aD,"i",B.cz,"j",B.bL,"k",B.be,"l",B.bN,"m",B.bv,"n",B.bO,"o",B.bh,"p",B.dC,"q",B.dz,"r",B.bs,"s",B.d2,"t",B.cW,"u",B.cb,"v",B.b5,"w",B.bl,"x",B.bJ,"y",B.dI,"z",B.dh,"{",B.bb,"|",B.d1,"}",B.aH,"~",B.dS,"\u2302",B.b4,"\xc7",B.ay,"\xfc",B.df,"\xe9",B.dH,"\xe2",B.c4,"\xe4",B.al,"\xe0",B.b8,"\xe5",B.ab,"\xe7",B.bo,"\xea",B.dp,"\xeb",B.aQ,"\xe8",B.d3,"\xef",B.dg,"\xee",B.cU,"\xec",B.b1,"\xc4",B.dN,"\xc5",B.d0,"\xc9",B.bG,"\xe6",B.dG,"\xc6",B.aV,"\xf4",B.dA,"\xf6",B.ah,"\xf2",B.dP,"\xfb",B.aT,"\xf9",B.cX,"\xff",B.aB,"\xd6",B.an,"\xdc",B.d9,"\xa2",B.a1,"\xa3",B.aK,"\xa5",B.b2,"\u20a7",B.dk,"\u0192",B.bR,"\xe1",B.aG,"\xed",B.ch,"\xf3",B.aJ,"\xfa",B.cC,"\xf1",B.aZ,"\xd1",B.cS,"\xaa",B.ai,"\xba",B.cd,"\xbf",B.da,"\u2310",B.b0,"\xac",B.aI,"\xbd",B.d4,"\xbc",B.aA,"\xa1",B.bU,"\xab",B.bT,"\xbb",B.bd,"\u2591",B.cE,"\u2592",B.dB,"\u2593",B.bM,"\u2502",B.b3,"\u2524",B.b_,"\u2561",B.c0,"\u2562",B.dR,"\u2556",B.cp,"\u2555",B.aW,"\u2563",B.af,"\u2551",B.cv,"\u2557",B.cc,"\u255d",B.cA,"\u255c",B.at,"\u255b",B.a5,"\u2510",B.aa,"\u2514",B.a3,"\u2534",B.bZ,"\u252c",B.bq,"\u251c",B.d8,"\u2500",B.bX,"\u253c",B.cw,"\u255e",B.cI,"\u255f",B.bf,"\u255a",B.dx,"\u2554",B.dn,"\u2569",B.bK,"\u2566",B.bz,"\u2560",B.aY,"\u2550",B.aX,"\u256c",B.dJ,"\u2567",B.cO,"\u2568",B.N,"\u2564",B.dD,"\u2565",B.c6,"\u2559",B.cq,"\u2558",B.bu,"\u2552",B.ck,"\u2553",B.cL,"\u256b",B.cR,"\u256a",B.bP,"\u2518",B.dl,"\u250c",B.ba,"\u2588",B.c7,"\u2584",B.ca,"\u258c",B.bk,"\u2590",B.cs,"\u2580",B.d7,"\u03b1",B.dQ,"\xdf",B.dr,"\u0393",B.ar,"\u03c0",B.c9,"\u03a3",B.dm,"\u03c3",B.bn,"\xb5",B.bt,"\u03c4",B.cG,"\u03a6",B.ak,"\u0398",B.aL,"\u03a9",B.ao,"\u03b4",B.P,"\u221e",B.dE,"\u03c6",B.bp,"\u03b5",B.ad,"\u2229",B.cm,"\u2261",B.cP,"\xb1",B.a9,"\u2265",B.bc,"\u2264",B.cZ,"\u2320",B.bj,"\u2321",B.de,"\xf7",B.cg,"\u2248",B.U,"\xb0",B.cD,"\u2219",B.W,"\xb7",B.ds,"\u221a",B.Z,"\u207f",B.bY,"\xb2",B.ax,"\u25a0",B.d6],A.dh("bj<w,f<c>>"))
B.y=new A.D("replace")
B.dV=new A.D("inverse")
B.dW=new A.D("over")
B.dX=new A.D("under")
B.dY=new A.D("stain")
B.dZ=new A.D("delete")
B.e_=new A.D("maskDestination")
B.e0=new A.D("maskSource")
B.d=new A.ae("ready")
B.q=new A.ae("awaitingKey")
B.r=new A.ae("awaitingString")
B.A=new A.ae("awaitingMouseClick")
B.e1=A.B("ia")
B.e2=A.B("ib")
B.e3=A.B("fj")
B.e4=A.B("fk")
B.e5=A.B("fm")
B.e6=A.B("fn")
B.e7=A.B("fo")
B.e8=A.B("e")
B.e9=A.B("fD")
B.ea=A.B("cE")
B.eb=A.B("fE")
B.ec=A.B("fF")})();(function staticFields(){$.d_=null
$.O=A.a([],t.f)
$.e9=null
$.e4=null
$.e3=null
$.eO=null
$.eL=null
$.eT=null
$.de=null
$.dl=null
$.dT=null
$.aV=A.a([],A.dh("o<f<e>?>"))
$.ak=null
$.b6=null
$.b7=null
$.dL=!1
$.i=B.b})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"ic","dq",()=>A.hT("_$dart_dartClosure"))
s($,"iP","f7",()=>B.b.b1(new A.dn()))
s($,"il","eY",()=>A.J(A.cD({
toString:function(){return"$receiver$"}})))
s($,"im","eZ",()=>A.J(A.cD({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"io","f_",()=>A.J(A.cD(null)))
s($,"ip","f0",()=>A.J(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"is","f3",()=>A.J(A.cD(void 0)))
s($,"it","f4",()=>A.J(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"ir","f2",()=>A.J(A.ee(null)))
s($,"iq","f1",()=>A.J(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"iv","f6",()=>A.J(A.ee(void 0)))
s($,"iu","f5",()=>A.J(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"iw","dY",()=>A.fG())
s($,"ie","dr",()=>$.f7())
s($,"iM","ds",()=>A.dV(B.e8))
s($,"ik","eX",()=>A.dy(8,0,t.S))
s($,"ij","eW",()=>A.dy(8,255,t.S))
s($,"iQ","a6",()=>{var r=A.h9(A.hU(A.i7(),"document"),"getElementById","blockdude")
r.toString
return A.fB("rgb(158,172,135)",14,r,"#121",!0,3,3,0,16)})
s($,"iO","dt",()=>{var r,q,p="                    ",o="B                  B",n=" B                    OB",m="B                    B",l="B     B              B",k="BB                  B",j="BBBBBBBBBBBBBBBBBBBBBBBBBBBBB",i=A.a([],A.dh("o<bp>"))
for(r=t.s,r=[A.a([p,o,o,o,o,o,"B   B       B      B","BD  B   B O B O M  B","BBBBBBBBBBBBBBBBBBBB",p],r),A.a([" B    BB        BB    "," B                B   ","BB                 B  ","BD                  B ","BB                   B"," B           B  O    B"," B           BO OOM  B"," BBBBB   BBBBBBBBBBBBB","     B  OB            ","     BBBBB            "],r),A.a([" B                 "," B   BBBBBBBBBBBBB ","B B B             B","B  B              B","B                OB","B               OOB","B BBB    M   BO BB ","B B B    B  BBBBB  ","B B BOO BB  B      ","BDB BBBBBB BB      ","BBB BB   BBB       "],r),A.a(["                  B     ","                 B B    ","       B        B   B   ","      B B      B     B  ","   BBB   B    B       B ","  B       B  B         B"," B         BB          B",n," B                   OOB"," B               M   BBB","BB    B          B   B  ","BD    B O        BBBBB  ","BBBBB B O   O  BBB      ","    B B O B BO B        ","    B BBBBBBBBBB        ","    BBB                 "],r),A.a(["     BBB    BBBBBBBBB "," BBBB   BBBB         B",m,m,m,l,l,"B     BOOOO          B","BD   BBBBBBBM        B","BB BBB     BB B     OB"," B B        B BB   OOB"," B B        B BB  OOOB"," BBB        B BBBBBBBB","            BBB       "],r),A.a([" BBB             BBBB"," B  BBBBBBBBBBBBB   B",k,"BD                  B",k," B                OOB"," BOO        B  O  BBB"," BOOO       BMOOO B  "," BOOOO      BBBBB B  "," BBBBB    BBB   BBB  ","     B   OB          ","     BB BBB          ","      BBB            "],r),A.a(["  B   BBBBB   BB   BBB  "," B B B     B B  B B   B "," B  BB      BB   BB    B"," B   B       B    B    B",n,n,"BB                   OOB","BD   O               BBB","BB   B O     B    BB B  "," B   B O    BB O MBBBB  "," BB  B OOO  BB OOOB     ","  B  BBBBBB BBBBBBB     ","  BB B    BBB           ","   BBB                  "],r),A.a([" BBB       BBBB   BBBBBBB  ","B   B     B    B B       B ","B    B   B     BB         B","BO    BBB    B B     BBB  B","BOO         BB      BB B  B","BBBB       BB          BD B","   BB            BB    BB B","  B    O B      B  B      B","  B    OB B    B   B      B"," B   BBB   B    B  B     OB"," B      B B      BB     OOB","B        B           BBBBBB","B            O            B","B    O      BBB          OB","B   BBB                 OOB","B        O       O  M  OOOB","BBBBBBBBBBBBBBBBBBBBBBBBBBB"],r),A.a(["        BBB         ","       B   B        ","      B     B  BBBBB","     B       BB    B","    B     O        B","   B      OO      OB","  B       BBB    OOB"," B            M BBBB","B             O    B","BD           BBB   B","BB    BB   B      OB"," B    BBO  BB   BBBB"," B    BBBBBBB  BB   "," BBB  B     B BB    ","   B BB     BBB     ","   BBB              "],r),A.a(["   BBBBBBBBBBBBBBBBBBBBB   "," BB           B         B  ","BBBBO       OOBO   OOO OBB ","B  BB  B   BBBBB  OBBB BB B","B   B  BB        BBB BBB  B","B   BB  BBOOOO            B","BD       BBBBBBB          B","BB        B   BBB        BB"," B     O   B B  BB        B"," B     B    B    BB       B"," BBBB  BB             BBBBB","   BBBBB      M           B","   B          B           B","   B         BB    BBBBBBBB","   B        BB           B ","   B          O         OB ","   BO    BBBBBBBBBBB   OOB ","   BOO  BB         BB OOOB ","   BBBBBB           BBBBBB "],r),A.a([j,"B  B   B                    B","B     OBOO            BBBBB B","BO   BBB OBB     O  BB  D B B","BOO    BBB   M  O       B B B","BBB  OOB     B O          B B","B   BBBB      B  BBB   BBB  B","BO            B B      B  O B","BOO       BBB B BO    B  BBBB","BBBB O   BBB  B BBO  B O B  B","B           O BBB  OB   B   B","B   O     OO B   BBBB       B","B    BBBBBBBBB        BBBBB B","B              O   OBB    B B","BBBB           O   B    OOB B","BOBB   B    B          BBBB B","BBOBBB B    B   OOO O       B","BOBOBOBB    B        OOO    B",j],r)],q=0;q<11;++q)i.push(A.fr(r[q]))
return i})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.br,ArrayBufferView:A.aF,DataView:A.bs,Float32Array:A.bt,Float64Array:A.bu,Int16Array:A.bv,Int32Array:A.bw,Int8Array:A.bx,Uint16Array:A.by,Uint32Array:A.bz,Uint8ClampedArray:A.aG,CanvasPixelArray:A.aG,Uint8Array:A.bA})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.ab.$nativeSuperclassTag="ArrayBufferView"
A.aR.$nativeSuperclassTag="ArrayBufferView"
A.aS.$nativeSuperclassTag="ArrayBufferView"
A.aD.$nativeSuperclassTag="ArrayBufferView"
A.aT.$nativeSuperclassTag="ArrayBufferView"
A.aU.$nativeSuperclassTag="ArrayBufferView"
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
var s=A.ap
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=blockdude.js.map
