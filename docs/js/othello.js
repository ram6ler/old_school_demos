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
if(a[b]!==s){A.jp(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.w(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.ew(b)
return new s(c,this)}:function(){if(s===null)s=A.ew(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.ew(a).prototype
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
eA(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ex(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.ey==null){A.jg()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.c(A.f0("Return interceptor for "+A.i(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.dz
if(o==null)o=$.dz=A.dT(n)
p=q[o]}if(p!=null)return p
p=A.jk(a)
if(p!=null)return p
if(typeof a=="function")return B.N
s=Object.getPrototypeOf(a)
if(s==null)return B.q
if(s===Object.prototype)return B.q
if(typeof q=="function"){o=$.dz
if(o==null)o=$.dz=A.dT(n)
Object.defineProperty(q,o,{value:B.j,enumerable:false,writable:true,configurable:true})
return B.j}return B.j},
eS(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
hk(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.eS(r))break;++b}return b},
hl(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.a(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.eS(q))break}return b},
af(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aL.prototype
return J.bO.prototype}if(typeof a=="string")return J.a5.prototype
if(a==null)return J.aM.prototype
if(typeof a=="boolean")return J.bN.prototype
if(Array.isArray(a))return J.p.prototype
if(typeof a!="object"){if(typeof a=="function")return J.W.prototype
if(typeof a=="symbol")return J.aP.prototype
if(typeof a=="bigint")return J.aN.prototype
return a}if(a instanceof A.d)return a
return J.ex(a)},
fB(a){if(typeof a=="string")return J.a5.prototype
if(a==null)return a
if(Array.isArray(a))return J.p.prototype
if(typeof a!="object"){if(typeof a=="function")return J.W.prototype
if(typeof a=="symbol")return J.aP.prototype
if(typeof a=="bigint")return J.aN.prototype
return a}if(a instanceof A.d)return a
return J.ex(a)},
fC(a){if(a==null)return a
if(Array.isArray(a))return J.p.prototype
if(typeof a!="object"){if(typeof a=="function")return J.W.prototype
if(typeof a=="symbol")return J.aP.prototype
if(typeof a=="bigint")return J.aN.prototype
return a}if(a instanceof A.d)return a
return J.ex(a)},
jc(a){if(typeof a=="number")return J.aj.prototype
if(a==null)return a
if(!(a instanceof A.d))return J.a9.prototype
return a},
jd(a){if(typeof a=="string")return J.a5.prototype
if(a==null)return a
if(!(a instanceof A.d))return J.a9.prototype
return a},
ai(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.af(a).I(a,b)},
h0(a,b){return J.fC(a).N(a,b)},
P(a){return J.af(a).gk(a)},
eG(a){return J.fC(a).gu(a)},
eH(a){return J.fB(a).gl(a)},
h1(a){return J.af(a).gt(a)},
eI(a){return J.jc(a).cs(a)},
bC(a){return J.af(a).h(a)},
h2(a){return J.jd(a).ct(a)},
bL:function bL(){},
bN:function bN(){},
aM:function aM(){},
aO:function aO(){},
X:function X(){},
c2:function c2(){},
a9:function a9(){},
W:function W(){},
aN:function aN(){},
aP:function aP(){},
p:function p(a){this.$ti=a},
bM:function bM(){},
cE:function cE(a){this.$ti=a},
bD:function bD(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aj:function aj(){},
aL:function aL(){},
bO:function bO(){},
a5:function a5(){}},A={e7:function e7(){},
eT(a){return new A.aR("Field '"+a+"' has not been initialized.")},
Y(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
ee(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
ev(a,b,c){return a},
ez(a){var s,r
for(s=$.D.length,r=0;r<s;++r)if(a===$.D[r])return!0
return!1},
he(a,b,c){return new A.aJ(a,b,c.i("aJ<0>"))},
cC(){return new A.a8("No element")},
aR:function aR(a){this.a=a},
dZ:function dZ(){},
cQ:function cQ(){},
aE:function aE(){},
R:function R(){},
al:function al(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
b6:function b6(a,b,c){this.a=a
this.b=b
this.$ti=c},
cb:function cb(a,b){this.a=a
this.b=b},
aF:function aF(a){this.$ti=a},
bI:function bI(){},
aJ:function aJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
aK:function aK(a,b){this.a=a
this.b=b
this.c=-1},
aH:function aH(){},
b1:function b1(a,b){this.a=a
this.$ti=b},
fK(a){var s=A.fJ(a)
if(s!=null)return s
return"minified:"+a},
jW(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
i(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.bC(a)
return s},
aq(a){var s,r=$.eU
if(r==null)r=$.eU=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
c3(a){var s,r,q,p
if(a instanceof A.d)return A.C(A.bB(a),null)
s=J.af(a)
if(s===B.M||s===B.O||t.J.b(a)){r=B.k(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.C(A.bB(a),null)},
eV(a){var s,r,q
if(a==null||typeof a=="number"||A.er(a))return J.bC(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.a3)return a.h(0)
if(a instanceof A.av)return a.bd(!0)
s=$.fZ()
for(r=0;r<1;++r){q=s[r].cu(a)
if(q!=null)return q}return"Instance of '"+A.c3(a)+"'"},
hq(a){var s=a.$thrownJsError
if(s==null)return null
return A.ag(s)},
hr(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.t(a,s)
a.$thrownJsError=s
s.stack=b.h(0)}},
a(a,b){if(a==null)J.eH(a)
throw A.c(A.j9(a,b))},
j9(a,b){var s,r="index",q=null
if(!A.fp(b))return new A.M(!0,b,r,q)
s=J.eH(a)
if(b<0||b>=s)return A.e5(b,s,a,q,r)
return new A.ar(q,q,!0,b,r,"Value not in range")},
eu(a){return new A.M(!0,a,null,null)},
c(a){return A.t(a,new Error())},
t(a,b){var s
if(a==null)a=new A.S()
b.dartException=a
s=A.jq
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
jq(){return J.bC(this.dartException)},
O(a,b){throw A.t(a,b==null?new Error():b)},
y(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.O(A.it(a,b,c),s)},
it(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.b5("'"+s+"': Cannot "+o+" "+l+k+n)},
e_(a){throw A.c(A.a4(a))},
T(a){var s,r,q,p,o,n
a=A.jn(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.w([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.d8(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
d9(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
f_(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
e8(a,b){var s=b==null,r=s?null:b.method
return new A.bP(a,r,s?null:b.receiver)},
aB(a){if(a==null)return new A.cI(a)
if(a instanceof A.aG)return A.a1(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.a1(a,a.dartException)
return A.j0(a)},
a1(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
j0(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.a.aa(r,16)&8191)===10)switch(q){case 438:return A.a1(a,A.e8(A.i(s)+" (Error "+q+")",null))
case 445:case 5007:A.i(s)
return A.a1(a,new A.b_())}}if(a instanceof TypeError){p=$.fO()
o=$.fP()
n=$.fQ()
m=$.fR()
l=$.fU()
k=$.fV()
j=$.fT()
$.fS()
i=$.fX()
h=$.fW()
g=p.H(s)
if(g!=null)return A.a1(a,A.e8(s,g))
else{g=o.H(s)
if(g!=null){g.method="call"
return A.a1(a,A.e8(s,g))}else if(n.H(s)!=null||m.H(s)!=null||l.H(s)!=null||k.H(s)!=null||j.H(s)!=null||m.H(s)!=null||i.H(s)!=null||h.H(s)!=null)return A.a1(a,new A.b_())}return A.a1(a,new A.c9(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.b4()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.a1(a,new A.M(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.b4()
return a},
ag(a){var s
if(a instanceof A.aG)return a.b
if(a==null)return new A.bl(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.bl(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
eB(a){if(a==null)return J.P(a)
if(typeof a=="object")return A.aq(a)
return J.P(a)},
j6(a){if(typeof a=="number")return B.n.gk(a)
if(a instanceof A.cr)return A.aq(a)
if(a instanceof A.av)return a.gk(a)
return A.eB(a)},
jb(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.ag(0,a[s],a[r])}return b},
iC(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.c(new A.dl("Unsupported number of arguments for wrapped closure"))},
ct(a,b){var s=a.$identity
if(!!s)return s
s=A.j7(a,b)
a.$identity=s
return s},
j7(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.iC)},
h9(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.cR().constructor.prototype):Object.create(new A.aC(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.eN(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.h5(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.eN(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
h5(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.c("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.h3)}throw A.c("Error in functionType of tearoff")},
h6(a,b,c,d){var s=A.eM
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
eN(a,b,c,d){if(c)return A.h8(a,b,d)
return A.h6(b.length,d,a,b)},
h7(a,b,c,d){var s=A.eM,r=A.h4
switch(b?-1:a){case 0:throw A.c(new A.c5("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
h8(a,b,c){var s,r
if($.eK==null)$.eK=A.eJ("interceptor")
if($.eL==null)$.eL=A.eJ("receiver")
s=b.length
r=A.h7(s,c,a,b)
return r},
ew(a){return A.h9(a)},
h3(a,b){return A.bs(v.typeUniverse,A.bB(a.a),b)},
eM(a){return a.a},
h4(a){return a.b},
eJ(a){var s,r,q,p=new A.aC("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.c(A.U("Field name "+a+" not found.",null))},
dT(a){return v.getIsolateTag(a)},
jk(a){var s,r,q,p,o,n=$.fE.$1(a),m=$.dR[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.dX[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.fx.$2(a,n)
if(q!=null){m=$.dR[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.dX[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.dY(s)
$.dR[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.dX[n]=s
return s}if(p==="-"){o=A.dY(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.fG(a,s)
if(p==="*")throw A.c(A.f0(n))
if(v.leafTags[n]===true){o=A.dY(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.fG(a,s)},
fG(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.eA(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
dY(a){return J.eA(a,!1,null,!!a.$iB)},
jm(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.dY(s)
else return J.eA(s,c,null,null)},
jg(){if(!0===$.ey)return
$.ey=!0
A.jh()},
jh(){var s,r,q,p,o,n,m,l
$.dR=Object.create(null)
$.dX=Object.create(null)
A.jf()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.fH.$1(o)
if(n!=null){m=A.jm(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
jf(){var s,r,q,p,o,n,m=B.v()
m=A.az(B.w,A.az(B.x,A.az(B.l,A.az(B.l,A.az(B.y,A.az(B.z,A.az(B.A(B.k),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.fE=new A.dU(p)
$.fx=new A.dV(o)
$.fH=new A.dW(n)},
az(a,b){return a(b)||b},
j8(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
hm(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.c(A.eP("Illegal RegExp pattern ("+String(o)+")",a))},
jn(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
m:function m(a,b){this.a=a
this.b=b},
co:function co(a,b){this.a=a
this.b=b},
bH:function bH(){},
aI:function aI(a,b){this.a=a
this.$ti=b},
b2:function b2(){},
d8:function d8(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
b_:function b_(){},
bP:function bP(a,b,c){this.a=a
this.b=b
this.c=c},
c9:function c9(a){this.a=a},
cI:function cI(a){this.a=a},
aG:function aG(a,b){this.a=a
this.b=b},
bl:function bl(a){this.a=a
this.b=null},
a3:function a3(){},
cv:function cv(){},
cw:function cw(){},
cW:function cW(){},
cR:function cR(){},
aC:function aC(a,b){this.a=a
this.b=b},
c5:function c5(a){this.a=a},
a6:function a6(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cF:function cF(a,b){this.a=a
this.b=b
this.c=null},
aT:function aT(a,b){this.a=a
this.$ti=b},
bR:function bR(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
aS:function aS(a,b){this.a=a
this.$ti=b},
bQ:function bQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aQ:function aQ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dU:function dU(a){this.a=a},
dV:function dV(a){this.a=a},
dW:function dW(a){this.a=a},
av:function av(){},
cn:function cn(){},
cD:function cD(a,b){var _=this
_.a=a
_.b=b
_.e=_.c=null},
dB:function dB(a){this.b=a},
jp(a){throw A.t(new A.aR("Field '"+a+"' has been assigned during initialization."),new Error())},
a2(){throw A.t(A.eT(""),new Error())},
dj(a){var s=new A.di(a)
return s.b=s},
di:function di(a){this.a=a
this.b=null},
an:function an(){},
aY:function aY(){},
bS:function bS(){},
ao:function ao(){},
aW:function aW(){},
aX:function aX(){},
bT:function bT(){},
bU:function bU(){},
bV:function bV(){},
bW:function bW(){},
bX:function bX(){},
bY:function bY(){},
bZ:function bZ(){},
aZ:function aZ(){},
c_:function c_(){},
bf:function bf(){},
bg:function bg(){},
bh:function bh(){},
bi:function bi(){},
eb(a,b){var s=b.c
return s==null?b.c=A.bq(a,"Q",[b.x]):s},
eW(a){var s=a.w
if(s===6||s===7)return A.eW(a.x)
return s===11||s===12},
hw(a){return a.as},
cu(a){return A.dI(v.typeUniverse,a,!1)},
ad(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.ad(a1,s,a3,a4)
if(r===s)return a2
return A.ff(a1,r,!0)
case 7:s=a2.x
r=A.ad(a1,s,a3,a4)
if(r===s)return a2
return A.fe(a1,r,!0)
case 8:q=a2.y
p=A.ay(a1,q,a3,a4)
if(p===q)return a2
return A.bq(a1,a2.x,p)
case 9:o=a2.x
n=A.ad(a1,o,a3,a4)
m=a2.y
l=A.ay(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.en(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.ay(a1,j,a3,a4)
if(i===j)return a2
return A.fg(a1,k,i)
case 11:h=a2.x
g=A.ad(a1,h,a3,a4)
f=a2.y
e=A.iY(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.fd(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.ay(a1,d,a3,a4)
o=a2.x
n=A.ad(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.eo(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.c(A.bF("Attempted to substitute unexpected RTI kind "+a0))}},
ay(a,b,c,d){var s,r,q,p,o=b.length,n=A.dJ(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.ad(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
iZ(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.dJ(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.ad(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
iY(a,b,c,d){var s,r=b.a,q=A.ay(a,r,c,d),p=b.b,o=A.ay(a,p,c,d),n=b.c,m=A.iZ(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.cl()
s.a=q
s.b=o
s.c=m
return s},
w(a,b){a[v.arrayRti]=b
return a},
fz(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.je(s)
return a.$S()}return null},
ji(a,b){var s
if(A.eW(b))if(a instanceof A.a3){s=A.fz(a)
if(s!=null)return s}return A.bB(a)},
bB(a){if(a instanceof A.d)return A.a0(a)
if(Array.isArray(a))return A.ep(a)
return A.eq(J.af(a))},
ep(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
a0(a){var s=a.$ti
return s!=null?s:A.eq(a)},
eq(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.iA(a,s)},
iA(a,b){var s=a instanceof A.a3?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.i8(v.typeUniverse,s.name)
b.$ccache=r
return r},
je(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.dI(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
fD(a){return A.ae(A.a0(a))},
et(a){var s
if(a instanceof A.av)return A.ja(a.$r,a.b6())
s=a instanceof A.a3?A.fz(a):null
if(s!=null)return s
if(t.B.b(a))return J.h1(a).a
if(Array.isArray(a))return A.ep(a)
return A.bB(a)},
ae(a){var s=a.r
return s==null?a.r=new A.cr(a):s},
ja(a,b){var s,r,q=b,p=q.length
if(p===0)return t.F
if(0>=p)return A.a(q,0)
s=A.bs(v.typeUniverse,A.et(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.a(q,r)
s=A.fi(v.typeUniverse,s,A.et(q[r]))}return A.bs(v.typeUniverse,s,a)},
L(a){return A.ae(A.dI(v.typeUniverse,a,!1))},
iz(a){var s=this
s.b=A.iW(s)
return s.b(a)},
iW(a){var s,r,q,p
if(a===t.K)return A.iI
if(A.ah(a))return A.iM
s=a.w
if(s===6)return A.ix
if(s===1)return A.fr
if(s===7)return A.iD
r=A.iV(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.ah)){a.f="$i"+q
if(q==="h")return A.iG
if(a===t.m)return A.iF
return A.iL}}else if(s===10){p=A.j8(a.x,a.y)
return p==null?A.fr:p}return A.iv},
iV(a){if(a.w===8){if(a===t.S)return A.fp
if(a===t.i||a===t.H)return A.iH
if(a===t.N)return A.iK
if(a===t.y)return A.er}return null},
iy(a){var s=this,r=A.iu
if(A.ah(s))r=A.io
else if(s===t.K)r=A.ik
else if(A.aA(s)){r=A.iw
if(s===t.d)r=A.ig
else if(s===t.Y)r=A.im
else if(s===t.u)r=A.ib
else if(s===t.e)r=A.ij
else if(s===t.I)r=A.id
else if(s===t.M)r=A.ih}else if(s===t.S)r=A.ie
else if(s===t.N)r=A.il
else if(s===t.y)r=A.ia
else if(s===t.H)r=A.ii
else if(s===t.i)r=A.ic
else if(s===t.m)r=A.ac
s.a=r
return s.a(a)},
iv(a){var s=this
if(a==null)return A.aA(s)
return A.jj(v.typeUniverse,A.ji(a,s),s)},
ix(a){if(a==null)return!0
return this.x.b(a)},
iL(a){var s,r=this
if(a==null)return A.aA(r)
s=r.f
if(a instanceof A.d)return!!a[s]
return!!J.af(a)[s]},
iG(a){var s,r=this
if(a==null)return A.aA(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.d)return!!a[s]
return!!J.af(a)[s]},
iF(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.d)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
fq(a){if(typeof a=="object"){if(a instanceof A.d)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
iu(a){var s=this
if(a==null){if(A.aA(s))return a}else if(s.b(a))return a
throw A.t(A.fl(a,s),new Error())},
iw(a){var s=this
if(a==null||s.b(a))return a
throw A.t(A.fl(a,s),new Error())},
fl(a,b){return new A.bo("TypeError: "+A.f9(a,A.C(b,null)))},
f9(a,b){return A.cx(a)+": type '"+A.C(A.et(a),null)+"' is not a subtype of type '"+b+"'"},
H(a,b){return new A.bo("TypeError: "+A.f9(a,b))},
iD(a){var s=this
return s.x.b(a)||A.eb(v.typeUniverse,s).b(a)},
iI(a){return a!=null},
ik(a){if(a!=null)return a
throw A.t(A.H(a,"Object"),new Error())},
iM(a){return!0},
io(a){return a},
fr(a){return!1},
er(a){return!0===a||!1===a},
ia(a){if(!0===a)return!0
if(!1===a)return!1
throw A.t(A.H(a,"bool"),new Error())},
ib(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.t(A.H(a,"bool?"),new Error())},
ic(a){if(typeof a=="number")return a
throw A.t(A.H(a,"double"),new Error())},
id(a){if(typeof a=="number")return a
if(a==null)return a
throw A.t(A.H(a,"double?"),new Error())},
fp(a){return typeof a=="number"&&Math.floor(a)===a},
ie(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.t(A.H(a,"int"),new Error())},
ig(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.t(A.H(a,"int?"),new Error())},
iH(a){return typeof a=="number"},
ii(a){if(typeof a=="number")return a
throw A.t(A.H(a,"num"),new Error())},
ij(a){if(typeof a=="number")return a
if(a==null)return a
throw A.t(A.H(a,"num?"),new Error())},
iK(a){return typeof a=="string"},
il(a){if(typeof a=="string")return a
throw A.t(A.H(a,"String"),new Error())},
im(a){if(typeof a=="string")return a
if(a==null)return a
throw A.t(A.H(a,"String?"),new Error())},
ac(a){if(A.fq(a))return a
throw A.t(A.H(a,"JSObject"),new Error())},
ih(a){if(a==null)return a
if(A.fq(a))return a
throw A.t(A.H(a,"JSObject?"),new Error())},
fu(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.C(a[q],b)
return s},
iR(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.fu(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.C(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
fm(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.w([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)a4.push("T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.a(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.C(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.C(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.C(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.C(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.C(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
C(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.C(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.C(a.x,b)+">"
if(l===8){p=A.j_(a.x)
o=a.y
return o.length>0?p+("<"+A.fu(o,b)+">"):p}if(l===10)return A.iR(a,b)
if(l===11)return A.fm(a,b,null)
if(l===12)return A.fm(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.a(b,n)
return b[n]}return"?"},
j_(a){var s=A.fJ(a)
if(s!=null)return s
return"minified:"+a},
i9(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
i8(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.dI(a,b,!1)
else if(typeof m=="number"){s=m
r=A.br(a,5,"#")
q=A.dJ(s)
for(p=0;p<s;++p)q[p]=r
o=A.bq(a,b,q)
n[b]=o
return o}else return m},
i7(a,b){return A.fj(a.tR,b)},
i6(a,b){return A.fj(a.eT,b)},
dI(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.fh(a,null,b,!1)
r.set(b,s)
return s},
bs(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.fh(a,b,c,!0)
q.set(c,r)
return r},
fi(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.en(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
fh(a,b,c,d){return A.hY(A.hS(a,b,c,d))},
a_(a,b){b.a=A.iy
b.b=A.iz
return b},
br(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.J(null,null)
s.w=b
s.as=c
r=A.a_(a,s)
a.eC.set(c,r)
return r},
ff(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.i4(a,b,r,c)
a.eC.set(r,s)
return s},
i4(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.ah(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.aA(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.J(null,null)
q.w=6
q.x=b
q.as=c
return A.a_(a,q)},
fe(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.i2(a,b,r,c)
a.eC.set(r,s)
return s},
i2(a,b,c,d){var s,r
if(d){s=b.w
if(A.ah(b)||b===t.K)return b
else if(s===1)return A.bq(a,"Q",[b])
else if(b===t.P||b===t.T)return t.O}r=new A.J(null,null)
r.w=7
r.x=b
r.as=c
return A.a_(a,r)},
i5(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.J(null,null)
s.w=13
s.x=b
s.as=q
r=A.a_(a,s)
a.eC.set(q,r)
return r},
bp(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
i1(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
bq(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.bp(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.J(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.a_(a,r)
a.eC.set(p,q)
return q},
en(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.bp(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.J(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.a_(a,o)
a.eC.set(q,n)
return n},
fg(a,b,c){var s,r,q="+"+(b+"("+A.bp(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.J(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.a_(a,s)
a.eC.set(q,r)
return r},
fd(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.bp(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.bp(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.i1(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.J(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.a_(a,p)
a.eC.set(r,o)
return o},
eo(a,b,c,d){var s,r=b.as+("<"+A.bp(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.i3(a,b,c,r,d)
a.eC.set(r,s)
return s},
i3(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.dJ(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.ad(a,b,r,0)
m=A.ay(a,c,r,0)
return A.eo(a,n,m,c!==m)}}l=new A.J(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.a_(a,l)},
hS(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
hY(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.hU(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.fb(a,r,l,k,!1)
else if(q===46)r=A.fb(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.ab(a.u,a.e,k.pop()))
break
case 94:k.push(A.i5(a.u,k.pop()))
break
case 35:k.push(A.br(a.u,5,"#"))
break
case 64:k.push(A.br(a.u,2,"@"))
break
case 126:k.push(A.br(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.hW(a,k)
break
case 38:A.hV(a,k)
break
case 63:p=a.u
k.push(A.ff(p,A.ab(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.fe(p,A.ab(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.hT(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.fc(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.hZ(a.u,a.e,o)
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
return A.ab(a.u,a.e,m)},
hU(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
fb(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.i9(s,o.x)[p]
if(n==null)A.O('No "'+p+'" in "'+A.hw(o)+'"')
d.push(A.bs(s,o,n))}else d.push(p)
return m},
hW(a,b){var s,r=a.u,q=A.fa(a,b),p=b.pop()
if(typeof p=="string")b.push(A.bq(r,p,q))
else{s=A.ab(r,a.e,p)
switch(s.w){case 11:b.push(A.eo(r,s,q,a.n))
break
default:b.push(A.en(r,s,q))
break}}},
hT(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.fa(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.ab(p,a.e,o)
q=new A.cl()
q.a=s
q.b=n
q.c=m
b.push(A.fd(p,r,q))
return
case-4:b.push(A.fg(p,b.pop(),s))
return
default:throw A.c(A.bF("Unexpected state under `()`: "+A.i(o)))}},
hV(a,b){var s=b.pop()
if(0===s){b.push(A.br(a.u,1,"0&"))
return}if(1===s){b.push(A.br(a.u,4,"1&"))
return}throw A.c(A.bF("Unexpected extended operation "+A.i(s)))},
fa(a,b){var s=b.splice(a.p)
A.fc(a.u,a.e,s)
a.p=b.pop()
return s},
ab(a,b,c){if(typeof c=="string")return A.bq(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.hX(a,b,c)}else return c},
fc(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.ab(a,b,c[s])},
hZ(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.ab(a,b,c[s])},
hX(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.c(A.bF("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.c(A.bF("Bad index "+c+" for "+b.h(0)))},
jj(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.r(a,b,null,c,null)
r.set(c,s)}return s},
r(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.ah(d))return!0
s=b.w
if(s===4)return!0
if(A.ah(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.r(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.r(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.r(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.r(a,b.x,c,d,e))return!1
return A.r(a,A.eb(a,b),c,d,e)}if(s===6)return A.r(a,p,c,d,e)&&A.r(a,b.x,c,d,e)
if(q===7){if(A.r(a,b,c,d.x,e))return!0
return A.r(a,b,c,A.eb(a,d),e)}if(q===6)return A.r(a,b,c,p,e)||A.r(a,b,c,d.x,e)
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
if(!A.r(a,j,c,i,e)||!A.r(a,i,e,j,c))return!1}return A.fo(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.fo(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.iE(a,b,c,d,e)}if(o&&q===10)return A.iJ(a,b,c,d,e)
return!1},
fo(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.r(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.r(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.r(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.r(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.r(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
iE(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.bs(a,b,r[o])
return A.fk(a,p,null,c,d.y,e)}return A.fk(a,b.y,null,c,d.y,e)},
fk(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.r(a,b[s],d,e[s],f))return!1
return!0},
iJ(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.r(a,r[s],c,q[s],e))return!1
return!0},
aA(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.ah(a))if(s!==6)r=s===7&&A.aA(a.x)
return r},
ah(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
fj(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
dJ(a){return a>0?new Array(a):v.typeUniverse.sEA},
J:function J(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
cl:function cl(){this.c=this.b=this.a=null},
cr:function cr(a){this.a=a},
ck:function ck(){},
bo:function bo(a){this.a=a},
hE(){var s,r,q
if(self.scheduleImmediate!=null)return A.j1()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.ct(new A.dc(s),1)).observe(r,{childList:true})
return new A.db(s,r,q)}else if(self.setImmediate!=null)return A.j2()
return A.j3()},
hF(a){self.scheduleImmediate(A.ct(new A.dd(a),0))},
hG(a){self.setImmediate(A.ct(new A.de(a),0))},
hH(a){A.ef(B.m,a)},
ef(a,b){var s=B.a.p(a.a,1000)
return A.i_(s,b)},
eZ(a,b){var s=B.a.p(a.a,1000)
return A.i0(s,b)},
i_(a,b){var s=new A.bn()
s.bF(a,b)
return s},
i0(a,b){var s=new A.bn()
s.bG(a,b)
return s},
bz(a){return new A.cc(new A.l($.e,a.i("l<0>")),a.i("cc<0>"))},
bv(a,b){a.$2(0,null)
b.b=!0
return b.a},
N(a,b){A.ip(a,b)},
bu(a,b){var s,r=a==null?b.$ti.c.a(a):a
if(!b.b)b.a.an(r)
else{s=b.a
if(b.$ti.i("Q<1>").b(r))s.b0(r)
else s.b3(r)}},
bt(a,b){var s=A.aB(a),r=A.ag(a),q=b.a
if(b.b)q.W(new A.E(s,r))
else q.b_(new A.E(s,r))},
ip(a,b){var s,r,q=new A.dL(b),p=new A.dM(b)
if(a instanceof A.l)a.bc(q,p,t.z)
else{s=t.z
if(a instanceof A.l)a.by(q,p,s)
else{r=new A.l($.e,t.c)
r.a=8
r.c=a
r.bc(q,p,s)}}},
bA(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.e.aO(new A.dP(s))},
e4(a){var s
if(t.Q.b(a)){s=a.gV()
if(s!=null)return s}return B.D},
eQ(a,b){var s
if(!b.b(null))throw A.c(A.e3(null,"computation","The type parameter is not nullable"))
s=new A.l($.e,b.i("l<0>"))
A.hz(a,new A.cz(null,s,b))
return s},
iB(a,b){if($.e===B.b)return null
return null},
dq(a,b,c){var s,r,q,p={},o=p.a=a
while(s=o.a,(s&4)!==0){o=o.c
p.a=o}if(o===b){s=A.eX()
b.b_(new A.E(new A.M(!0,o,null,"Cannot complete a future with itself"),s))
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.ba(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.Y()
b.a5(p.a)
A.aa(b,q)
return}b.a^=2
A.ax(null,null,b.b,new A.dr(p,b))},
aa(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){f=f.c
A.cs(f.a,f.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.aa(g.a,f)
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
if(r){A.cs(m.a,m.b)
return}j=$.e
if(j!==k)$.e=k
else j=null
f=f.c
if((f&15)===8)new A.dv(s,g,p).$0()
else if(q){if((f&1)!==0)new A.du(s,m).$0()}else if((f&2)!==0)new A.dt(g,s).$0()
if(j!=null)$.e=j
f=s.c
if(f instanceof A.l){r=s.a.$ti
r=r.i("Q<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.a8(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.dq(f,i,!0)
return}}i=s.a.b
h=i.c
i.c=null
b=i.a8(h)
f=s.b
r=s.c
if(!f){i.a=8
i.c=r}else{i.a=i.a&1|16
i.c=r}g.a=i
f=i}},
iS(a,b){if(t.C.b(a))return b.aO(a)
if(t.v.b(a))return a
throw A.c(A.e3(a,"onError",u.c))},
iO(){var s,r
for(s=$.aw;s!=null;s=$.aw){$.by=null
r=s.b
$.aw=r
if(r==null)$.bx=null
s.a.$0()}},
iX(){$.es=!0
try{A.iO()}finally{$.by=null
$.es=!1
if($.aw!=null)$.eD().$1(A.fy())}},
fw(a){var s=new A.cd(a),r=$.bx
if(r==null){$.aw=$.bx=s
if(!$.es)$.eD().$1(A.fy())}else $.bx=r.b=s},
iU(a){var s,r,q,p=$.aw
if(p==null){A.fw(a)
$.by=$.bx
return}s=new A.cd(a)
r=$.by
if(r==null){s.b=p
$.aw=$.by=s}else{q=r.b
s.b=q
$.by=r.b=s
if(q==null)$.bx=s}},
fI(a){var s=null,r=$.e
if(B.b===r){A.ax(s,s,B.b,a)
return}A.ax(s,s,r,r.aC(a))},
jB(a){A.ev(a,"stream",t.K)
return new A.cp()},
ed(a){return new A.b7(null,null,a.i("b7<0>"))},
fv(a){return},
f8(a,b){return b==null?A.j4():b},
hP(a,b){if(b==null)b=A.j5()
if(t.k.b(b))return a.aO(b)
if(t.bo.b(b))return b
throw A.c(A.U("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
iP(a){},
iQ(a,b){A.cs(a,b)},
is(a,b,c){var s,r,q=a.bg()
if(q!==$.e1()){s=q.$ti
r=$.e
q.a4(new A.Z(new A.l(r,s),8,new A.dN(b,c),null,s.i("Z<1,1>")))}else b.a6(c)},
hz(a,b){var s=$.e
if(s===B.b)return A.ef(a,b)
return A.ef(a,s.aC(b))},
hA(a,b){var s=$.e
if(s===B.b)return A.eZ(a,b)
return A.eZ(a,s.c6(b,t.E))},
cs(a,b){A.iU(new A.dO(a,b))},
fs(a,b,c,d){var s,r=$.e
if(r===c)return d.$0()
$.e=c
s=r
try{r=d.$0()
return r}finally{$.e=s}},
ft(a,b,c,d,e){var s,r=$.e
if(r===c)return d.$1(e)
$.e=c
s=r
try{r=d.$1(e)
return r}finally{$.e=s}},
iT(a,b,c,d,e,f){var s,r=$.e
if(r===c)return d.$2(e,f)
$.e=c
s=r
try{r=d.$2(e,f)
return r}finally{$.e=s}},
ax(a,b,c,d){if(B.b!==c){d=c.aC(d)
d=d}A.fw(d)},
dc:function dc(a){this.a=a},
db:function db(a,b,c){this.a=a
this.b=b
this.c=c},
dd:function dd(a){this.a=a},
de:function de(a){this.a=a},
bn:function bn(){this.c=0},
dH:function dH(a,b){this.a=a
this.b=b},
dG:function dG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cc:function cc(a,b){this.a=a
this.b=!1
this.$ti=b},
dL:function dL(a){this.a=a},
dM:function dM(a){this.a=a},
dP:function dP(a){this.a=a},
E:function E(a,b){this.a=a
this.b=b},
G:function G(a,b){this.a=a
this.$ti=b},
ba:function ba(a,b,c,d,e){var _=this
_.ay=0
_.CW=_.ch=null
_.w=a
_.a=b
_.d=c
_.e=d
_.r=_.f=null
_.$ti=e},
cf:function cf(){},
b7:function b7(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null
_.$ti=c},
cz:function cz(a,b,c){this.a=a
this.b=b
this.c=c},
Z:function Z(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
l:function l(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
dm:function dm(a,b){this.a=a
this.b=b},
ds:function ds(a,b){this.a=a
this.b=b},
dr:function dr(a,b){this.a=a
this.b=b},
dp:function dp(a,b){this.a=a
this.b=b},
dn:function dn(a,b){this.a=a
this.b=b},
dv:function dv(a,b,c){this.a=a
this.b=b
this.c=c},
dw:function dw(a,b){this.a=a
this.b=b},
dx:function dx(a){this.a=a},
du:function du(a,b){this.a=a
this.b=b},
dt:function dt(a,b){this.a=a
this.b=b},
cd:function cd(a){this.a=a
this.b=null},
at:function at(){},
cU:function cU(a,b){this.a=a
this.b=b},
cV:function cV(a,b){this.a=a
this.b=b},
cS:function cS(a){this.a=a},
cT:function cT(a,b,c){this.a=a
this.b=b
this.c=c},
bb:function bb(){},
ch:function ch(){},
cg:function cg(){},
bm:function bm(){},
cj:function cj(){},
ci:function ci(a){this.b=a
this.a=null},
cm:function cm(){this.a=0
this.c=this.b=null},
dC:function dC(a,b){this.a=a
this.b=b},
bc:function bc(a){this.a=1
this.b=a
this.c=null},
cp:function cp(){},
dN:function dN(a,b){this.a=a
this.b=b},
dK:function dK(){},
dD:function dD(){},
dE:function dE(a,b){this.a=a
this.b=b},
dF:function dF(a,b,c){this.a=a
this.b=b
this.c=c},
dO:function dO(a,b){this.a=a
this.b=b},
hn(a,b){return new A.a6(a.i("@<0>").ao(b).i("a6<1,2>"))},
ho(a){return new A.be(a.i("be<0>"))},
em(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
hR(a,b,c){var s=new A.au(a,b,c.i("au<0>"))
s.c=a.e
return s},
ea(a){var s,r
if(A.ez(a))return"{...}"
s=new A.c7("")
try{r={}
$.D.push(a)
s.a+="{"
r.a=!0
a.aG(0,new A.cG(r,s))
s.a+="}"}finally{if(0>=$.D.length)return A.a($.D,-1)
$.D.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
be:function be(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dA:function dA(a){this.a=a
this.c=this.b=null},
au:function au(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
n:function n(){},
aU:function aU(){},
cG:function cG(a,b){this.a=a
this.b=b},
b3:function b3(){},
bk:function bk(){},
hK(a,b){var s,r,q=$.o(),p=a.length,o=4-p%4
if(o===4)o=0
for(s=0,r=0;r<p;++r){s=s*10+a.charCodeAt(r)-48;++o
if(o===4){q=q.a3(0,$.eE()).aQ(0,A.b8(s))
s=0
o=0}}if(b)return q.J(0)
return q},
ek(a){if(48<=a&&a<=57)return a-48
return(a|32)-97+10},
hL(a,b,c){var s,r,q,p,o,n,m,l=a.length,k=l-b,j=B.n.c7(k/4),i=new Uint16Array(j),h=j-1,g=k-h*4
for(s=b,r=0,q=0;q<g;++q,s=p){p=s+1
if(!(s<l))return A.a(a,s)
o=A.ek(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}n=h-1
if(!(h>=0))return A.a(i,h)
i[h]=r
for(;s<l;n=m){for(r=0,q=0;q<4;++q,s=p){p=s+1
if(!(s>=0&&s<l))return A.a(a,s)
o=A.ek(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}m=n-1
if(!(n>=0))return A.a(i,n)
i[n]=r}if(j===1){if(0>=j)return A.a(i,0)
l=i[0]===0}else l=!1
if(l)return $.o()
l=A.v(j,i)
return new A.q(l===0?!1:c,i,l)},
hM(a,b,c){var s,r,q,p=$.o(),o=A.b8(b)
for(s=a.length,r=0;r<s;++r){q=A.ek(a.charCodeAt(r))
if(q>=b)return null
p=p.a3(0,o).aQ(0,A.b8(q))}if(c)return p.J(0)
return p},
hO(a,b){var s,r,q,p,o,n,m,l=null
if(a==="")return l
s=$.fY().c9(a)
if(s==null)return l
r=s.b
q=r.length
if(1>=q)return A.a(r,1)
p=r[1]==="-"
if(4>=q)return A.a(r,4)
o=r[4]
n=r[3]
if(5>=q)return A.a(r,5)
m=r[5]
if(b<2||b>36)throw A.c(A.c4(b,2,36,"radix",l))
if(b===10&&o!=null)return A.hK(o,p)
if(b===16)r=o!=null||m!=null
else r=!1
if(r){if(o==null){m.toString
r=m}else r=o
return A.hL(r,0,p)}r=o==null?m:o
if(r==null){n.toString
r=n}return A.hM(r,b,p)},
v(a,b){var s,r=b.length
for(;;){if(a>0){s=a-1
if(!(s<r))return A.a(b,s)
s=b[s]===0}else s=!1
if(!s)break;--a}return a},
ej(a,b,c,d){var s,r,q,p=new Uint16Array(d),o=c-b
for(s=a.length,r=0;r<o;++r){q=b+r
if(!(q>=0&&q<s))return A.a(a,q)
q=a[q]
if(!(r<d))return A.a(p,r)
p[r]=q}return p},
b8(a){var s,r,q,p,o=a<0
if(o){if(a===-9223372036854776e3){s=new Uint16Array(4)
s[3]=32768
r=A.v(4,s)
return new A.q(r!==0,s,r)}a=-a}if(a<65536){s=new Uint16Array(1)
s[0]=a
r=A.v(1,s)
return new A.q(r===0?!1:o,s,r)}if(a<=4294967295){s=new Uint16Array(2)
s[0]=a&65535
s[1]=B.a.aa(a,16)
r=A.v(2,s)
return new A.q(r===0?!1:o,s,r)}r=B.a.p(B.a.gbf(a)-1,16)+1
s=new Uint16Array(r)
for(q=0;a!==0;q=p){p=q+1
if(!(q<r))return A.a(s,q)
s[q]=a&65535
a=B.a.p(a,65536)}r=A.v(r,s)
return new A.q(r===0?!1:o,s,r)},
el(a,b,c,d){var s,r,q,p,o
if(b===0)return 0
if(c===0&&d===a)return b
for(s=b-1,r=a.length,q=d.$flags|0;s>=0;--s){p=s+c
if(!(s<r))return A.a(a,s)
o=a[s]
q&2&&A.y(d)
if(!(p>=0&&p<d.length))return A.a(d,p)
d[p]=o}for(s=c-1;s>=0;--s){q&2&&A.y(d)
if(!(s<d.length))return A.a(d,s)
d[s]=0}return b+c},
f6(a,b,c,d){var s,r,q,p,o,n,m,l=B.a.p(c,16),k=B.a.j(c,16),j=16-k,i=B.a.n(1,j)-1
for(s=b-1,r=a.length,q=d.$flags|0,p=0;s>=0;--s){if(!(s<r))return A.a(a,s)
o=a[s]
n=s+l+1
m=B.a.E(o,j)
q&2&&A.y(d)
if(!(n>=0&&n<d.length))return A.a(d,n)
d[n]=(m|p)>>>0
p=B.a.n(o&i,k)}q&2&&A.y(d)
if(!(l>=0&&l<d.length))return A.a(d,l)
d[l]=p},
f1(a,b,c,d){var s,r,q,p=B.a.p(c,16)
if(B.a.j(c,16)===0)return A.el(a,b,p,d)
s=b+p+1
A.f6(a,b,c,d)
for(r=d.$flags|0,q=p;--q,q>=0;){r&2&&A.y(d)
if(!(q<d.length))return A.a(d,q)
d[q]=0}r=s-1
if(!(r>=0&&r<d.length))return A.a(d,r)
if(d[r]===0)s=r
return s},
hN(a,b,c,d){var s,r,q,p,o,n,m=B.a.p(c,16),l=B.a.j(c,16),k=16-l,j=B.a.n(1,l)-1,i=a.length
if(!(m>=0&&m<i))return A.a(a,m)
s=B.a.E(a[m],l)
r=b-m-1
for(q=d.$flags|0,p=0;p<r;++p){o=p+m+1
if(!(o<i))return A.a(a,o)
n=a[o]
o=B.a.n(n&j,k)
q&2&&A.y(d)
if(!(p<d.length))return A.a(d,p)
d[p]=(o|s)>>>0
s=B.a.E(n,l)}q&2&&A.y(d)
if(!(r>=0&&r<d.length))return A.a(d,r)
d[r]=s},
df(a,b,c,d){var s,r,q,p,o=b-d
if(o===0)for(s=b-1,r=a.length,q=c.length;s>=0;--s){if(!(s<r))return A.a(a,s)
p=a[s]
if(!(s<q))return A.a(c,s)
o=p-c[s]
if(o!==0)return o}return o},
hI(a,b,c,d,e){var s,r,q,p,o,n
for(s=a.length,r=c.length,q=e.$flags|0,p=0,o=0;o<d;++o){if(!(o<s))return A.a(a,o)
n=a[o]
if(!(o<r))return A.a(c,o)
p+=n+c[o]
q&2&&A.y(e)
if(!(o<e.length))return A.a(e,o)
e[o]=p&65535
p=p>>>16}for(o=d;o<b;++o){if(!(o>=0&&o<s))return A.a(a,o)
p+=a[o]
q&2&&A.y(e)
if(!(o<e.length))return A.a(e,o)
e[o]=p&65535
p=p>>>16}q&2&&A.y(e)
if(!(b>=0&&b<e.length))return A.a(e,b)
e[b]=p},
ce(a,b,c,d,e){var s,r,q,p,o,n
for(s=a.length,r=c.length,q=e.$flags|0,p=0,o=0;o<d;++o){if(!(o<s))return A.a(a,o)
n=a[o]
if(!(o<r))return A.a(c,o)
p+=n-c[o]
q&2&&A.y(e)
if(!(o<e.length))return A.a(e,o)
e[o]=p&65535
p=0-(B.a.aa(p,16)&1)}for(o=d;o<b;++o){if(!(o>=0&&o<s))return A.a(a,o)
p+=a[o]
q&2&&A.y(e)
if(!(o<e.length))return A.a(e,o)
e[o]=p&65535
p=0-(B.a.aa(p,16)&1)}},
f7(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k
if(a===0)return
for(s=b.length,r=d.length,q=d.$flags|0,p=0;--f,f>=0;e=l,c=o){o=c+1
if(!(c<s))return A.a(b,c)
n=b[c]
if(!(e>=0&&e<r))return A.a(d,e)
m=a*n+d[e]+p
l=e+1
q&2&&A.y(d)
d[e]=m&65535
p=B.a.p(m,65536)}for(;p!==0;e=l){if(!(e>=0&&e<r))return A.a(d,e)
k=d[e]+p
l=e+1
q&2&&A.y(d)
d[e]=k&65535
p=B.a.p(k,65536)}},
hJ(a,b,c){var s,r,q,p=b.length
if(!(c>=0&&c<p))return A.a(b,c)
s=b[c]
if(s===a)return 65535
r=c-1
if(!(r>=0&&r<p))return A.a(b,r)
q=B.a.L((s<<16|b[r])>>>0,a)
if(q>65535)return 65535
return q},
ha(a,b){a=A.t(a,new Error())
a.stack=b.h(0)
throw a},
e9(a,b,c){var s,r,q
if(a>4294967295)A.O(A.c4(a,0,4294967295,"length",null))
s=A.w(new Array(a),c.i("p<0>"))
s.$flags=1
r=s
if(a!==0)for(s=r.length,q=0;q<s;++q)r[q]=b
return r},
hp(a,b,c){var s,r,q=A.w([],c.i("p<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.e_)(a),++r)q.push(a[r])
q.$flags=1
return q},
hv(a,b){return new A.cD(a,A.hm(a,!1,!1,!1,!1,""))},
eY(a,b,c){var s=J.eG(b)
if(!s.m())return a
if(c.length===0){do a+=A.i(s.gq())
while(s.m())}else{a+=A.i(s.gq())
while(s.m())a=a+c+A.i(s.gq())}return a},
eX(){return A.ag(new Error())},
eO(a){return new A.aD(1000*a)},
cx(a){if(typeof a=="number"||A.er(a)||a==null)return J.bC(a)
if(typeof a=="string")return JSON.stringify(a)
return A.eV(a)},
hb(a,b){A.ev(a,"error",t.K)
A.ev(b,"stackTrace",t.l)
A.ha(a,b)},
bF(a){return new A.bE(a)},
U(a,b){return new A.M(!1,null,b,a)},
e3(a,b,c){return new A.M(!0,a,b,c)},
hs(a){var s=null
return new A.ar(s,s,!1,s,s,a)},
c4(a,b,c,d,e){return new A.ar(b,c,!0,a,d,"Invalid value")},
hu(a,b,c){if(0>a||a>c)throw A.c(A.c4(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.c(A.c4(b,a,c,"end",null))
return b}return c},
ht(a,b){if(a<0)throw A.c(A.c4(a,0,null,b,null))
return a},
e5(a,b,c,d,e){return new A.bJ(b,!0,a,e,"Index out of range")},
ca(a){return new A.b5(a)},
f0(a){return new A.c8(a)},
a4(a){return new A.bG(a)},
eP(a,b){return new A.cy(a,b)},
hi(a,b){if(a<=0)return new A.aF(b.i("aF<0>"))
if(!b.i("0(b)").b(A.fA()))throw A.c(A.U("Generator must be supplied or element type must allow integers","generator"))
return new A.bd(a,A.fA(),b.i("bd<0>"))},
hj(a,b,c){var s,r
if(A.ez(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.w([],t.s)
$.D.push(a)
try{A.iN(a,s)}finally{if(0>=$.D.length)return A.a($.D,-1)
$.D.pop()}r=A.eY(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
e6(a,b,c){var s,r
if(A.ez(a))return b+"..."+c
s=new A.c7(b)
$.D.push(a)
try{r=s
r.a=A.eY(r.a,a,", ")}finally{if(0>=$.D.length)return A.a($.D,-1)
$.D.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
hQ(a){return a},
iN(a,b){var s,r,q,p,o,n,m,l=a.gu(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.m())return
s=A.i(l.gq())
b.push(s)
k+=s.length+2;++j}if(!l.m()){if(j<=5)return
if(0>=b.length)return A.a(b,-1)
r=b.pop()
if(0>=b.length)return A.a(b,-1)
q=b.pop()}else{p=l.gq();++j
if(!l.m()){if(j<=4){b.push(A.i(p))
return}r=A.i(p)
if(0>=b.length)return A.a(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gq();++j
for(;l.m();p=o,o=n){n=l.gq();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.a(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=A.i(p)
r=A.i(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.a(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
cJ(a,b,c,d){var s
if(B.e===c){s=B.a.gk(a)
b=J.P(b)
return A.ee(A.Y(A.Y($.e2(),s),b))}if(B.e===d){s=B.a.gk(a)
b=J.P(b)
c=J.P(c)
return A.ee(A.Y(A.Y(A.Y($.e2(),s),b),c))}s=B.a.gk(a)
b=J.P(b)
c=J.P(c)
d=J.P(d)
d=A.ee(A.Y(A.Y(A.Y(A.Y($.e2(),s),b),c),d))
return d},
q:function q(a,b,c){this.a=a
this.b=b
this.c=c},
dg:function dg(){},
dh:function dh(){},
aD:function aD(a){this.a=a},
dk:function dk(){},
j:function j(){},
bE:function bE(a){this.a=a},
S:function S(){},
M:function M(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ar:function ar(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bJ:function bJ(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
b5:function b5(a){this.a=a},
c8:function c8(a){this.a=a},
a8:function a8(a){this.a=a},
bG:function bG(a){this.a=a},
c1:function c1(){},
b4:function b4(){},
dl:function dl(a){this.a=a},
cy:function cy(a,b){this.a=a
this.b=b},
bK:function bK(){},
F:function F(){},
bd:function bd(a,b,c){this.a=a
this.b=b
this.$ti=c},
aV:function aV(a,b,c){this.a=a
this.b=b
this.$ti=c},
z:function z(){},
d:function d(){},
cq:function cq(){},
c7:function c7(a){this.a=a},
dy:function dy(){},
V:function V(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cZ(a){return new A.cY(a)},
cK:function cK(){},
cY:function cY(a){this.a=a},
ak:function ak(a){this.b=a},
am:function am(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ap:function ap(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=0},
hx(a,b,c,d,e,f,g,h){var s,r,q,p=A.eR(),o=h*g
p.width=o
s=d*f
p.height=s
r=A.eR()
r.width=o
r.height=s
s=A.w([],t.x)
for(o=A.hi(d,t.z),o=o.gu(o);o.m();){o.gq()
q=B.a.p(h,32)
s.push(new Uint32Array(q+1))}p=new A.c6(!0,d,h,g,f,c,a,p,r,s)
p.bD(a,b,c,d,!0,f,g,h)
return p},
ec(a){return new A.m(B.a.p(a,32),31-B.a.j(a,32))},
c6:function c6(a,b,c,d,e,f,g,h,i,j){var _=this
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
cM:function cM(a){this.a=a},
cN:function cN(a){this.a=a},
cO:function cO(a){this.a=a},
cP:function cP(a){this.a=a},
cL:function cL(){},
cH:function cH(a,b){this.a=a
this.b=b},
hy(a,b,c,d,e,f){var s,r,q,p,o=null,n=A.hx(a,c,d,e*10,!0,2,2,b*8),m=A.w([],t.G)
for(s=t.V,r=0;r<e;++r){q=A.w([],s)
for(p=0;p<b;++p)q.push(new A.V(r,p," ",d))
m.push(q)}n=new A.cX(e,b,d,c,n,new A.ap(e,b),new A.ap(e,b),new A.ap(e,b),!1,A.ed(t.N),A.ed(t.W),A.ed(t.q),B.c,m,A.ho(t.o),B.dS)
n.bE(a,b,c,d,o,!0,2,2,2,e,!1,o,o,o,o,o,o)
return n},
as:function as(a,b){this.a=a
this.b=b},
cX:function cX(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.a=a
_.b=b
_.d=c
_.f=d
_.w=e
_.x=f
_.y=g
_.z=h
_.Q=i
_.as=j
_.at=k
_.ax=l
_.ay=m
_.ch=n
_.CW=o
_.cx=p
_.cy=!1},
d6:function d6(a){this.a=a},
d5:function d5(){},
d4:function d4(a){this.a=a},
d_:function d_(a){this.a=a},
d0:function d0(a){this.a=a},
d1:function d1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d2:function d2(a,b,c){this.a=a
this.b=b
this.c=c},
d3:function d3(a){this.a=a},
I:function I(a,b){this.a=a
this.b=b},
a7:function a7(a,b,c){this.c=a
this.a=b
this.b=c},
jl(){var s,r=v.G.document.getElementById("othello")
r=A.hy("black",50,r==null?A.ac(r):r,"white",29,!1)
s=$.o()
r.a0()
return new A.cA(r,new A.c0(s,s,B.d)).K()},
cA:function cA(a,b){this.a=a
this.b=b},
cB:function cB(){},
c0:function c0(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0},
b0:function b0(a,b){this.a=a
this.b=b},
fJ(a){return v.mangledGlobalNames[a]},
bw(a){var s
if(typeof a=="function")throw A.c(A.U("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.iq,a)
s[$.e0()]=a
return s},
fn(a){var s
if(typeof a=="function")throw A.c(A.U("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.ir,a)
s[$.e0()]=a
return s},
iq(a){return a.$0()},
ir(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
eR(){return v.G.document.createElement("canvas")},
jo(a){var s,r,q
for(;;){s=a.gaf()
r=s.length
if(r===0)break
r=B.C.ci(r)
if(!(r>=0&&r<s.length))return A.a(s,r)
q=s[r]
a.aK(q.a,q.b)}r=a.d
return new A.co(a.e,r)},
dS(a1,a2){var s=0,r=A.bz(t.R),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$dS=A.bA(function(a3,a4){if(a3===1)return A.bt(a4,r)
for(;;)A:switch(s){case 0:a=a1.gaf()
a0=A.hn(t.R,t.i)
for(p=a.length,o=0;n=a.length,o<n;a.length===p||(0,A.e_)(a),++o)a0.ag(0,a[o],0)
p=a2.c,m=t.z,l=0
case 3:if(!(l<B.a.L(p,n))){s=5
break}s=B.a.j(l,5)===0?6:7
break
case 6:s=8
return A.N(A.eQ(B.m,m),$async$dS)
case 8:case 7:for(n=a.length,o=0;k=a.length,o<k;a.length===n||(0,A.e_)(a),++o){k=a[o]
j=k.a
i=k.b
k=a1.c
h=$.o()
k=new A.c0(h,h,k)
k.d=a1.d
k.a=a1.a
k.e=a1.e
k.b=a1.b
k.aK(j,i)
g=A.jo(k)
f=g.b
e=g.a
k=a0.U(0,new A.m(j,i))
k.toString
switch(a1.c.a){case 1:h=f-e
break
case 0:h=e-f
break
default:h=null}if(typeof h!=="number"){q=h.cw()
s=1
break A}a0.ag(0,new A.m(j,i),k+h/p)}case 4:++l,n=k
s=3
break
case 5:p=a0.$ti
d=new A.aT(a0,p.i("aT<1>")).gS(0)
for(p=new A.aS(a0,p.i("aS<1,2>")).gu(0);p.m();){n=p.d
c=n.a
b=n.b
n=a0.U(0,d)
n.toString
if(b>n)d=c}q=d
s=1
break
case 1:return A.bu(q,r)}})
return A.bv($async$dS,r)}},B={}
var w=[A,J,B]
var $={}
A.e7.prototype={}
J.bL.prototype={
I(a,b){return a===b},
gk(a){return A.aq(a)},
h(a){return"Instance of '"+A.c3(a)+"'"},
gt(a){return A.ae(A.eq(this))}}
J.bN.prototype={
h(a){return String(a)},
gk(a){return a?519018:218159},
gt(a){return A.ae(t.y)},
$if:1}
J.aM.prototype={
I(a,b){return null==b},
h(a){return"null"},
gk(a){return 0},
$if:1}
J.aO.prototype={$ik:1}
J.X.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.c2.prototype={}
J.a9.prototype={}
J.W.prototype={
h(a){var s=a[$.fL()]
if(s==null)s=a[$.e0()]
if(s==null)return this.bC(a)
return"JavaScript function for "+J.bC(s)}}
J.aN.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.aP.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.p.prototype={
bm(a,b){var s,r,q=a.length,p=A.e9(q,"",t.N)
for(s=0;s<a.length;++s){r=A.i(a[s])
if(!(s<q))return A.a(p,s)
p[s]=r}return p.join(b)},
ca(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw A.c(A.a4(a))}return s},
cb(a,b,c){return this.ca(a,b,c,t.z)},
N(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
c8(a,b){var s
for(s=0;s<a.length;++s)if(J.ai(a[s],b))return!0
return!1},
h(a){return A.e6(a,"[","]")},
gu(a){return new J.bD(a,a.length,A.ep(a).i("bD<1>"))},
gk(a){return A.aq(a)},
gl(a){return a.length},
$ih:1}
J.bM.prototype={
cu(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.c3(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.cE.prototype={}
J.bD.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.c(A.e_(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.aj.prototype={
cs(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.c(A.ca(""+a+".toInt()"))},
c7(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.c(A.ca(""+a+".ceil()"))},
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
L(a,b){if((a|0)===a)if(b>=1)return a/b|0
return this.bb(a,b)},
p(a,b){return(a|0)===a?a/b|0:this.bb(a,b)},
bb(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.c(A.ca("Result of truncating division is "+A.i(s)+": "+A.i(a)+" ~/ "+b))},
n(a,b){if(b<0)throw A.c(A.eu(b))
return b>31?0:a<<b>>>0},
c3(a,b){return b>31?0:a<<b>>>0},
ai(a,b){var s
if(b<0)throw A.c(A.eu(b))
if(a>0)s=this.aA(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
aa(a,b){var s
if(a>0)s=this.aA(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
E(a,b){if(0>b)throw A.c(A.eu(b))
return this.aA(a,b)},
aA(a,b){return b>31?0:a>>>b},
gt(a){return A.ae(t.H)},
$ix:1}
J.aL.prototype={
gbf(a){var s,r=a<0?-a-1:a,q=r
for(s=32;q>=4294967296;){q=this.p(q,4294967296)
s+=32}return s-Math.clz32(q)},
gt(a){return A.ae(t.S)},
$if:1,
$ib:1}
J.bO.prototype={
gt(a){return A.ae(t.i)},
$if:1}
J.a5.prototype={
bB(a,b,c){return a.substring(b,A.hu(b,c,a.length))},
ct(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.a(p,0)
if(p.charCodeAt(0)===133){s=J.hk(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.a(p,r)
q=p.charCodeAt(r)===133?J.hl(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
a3(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.c(B.B)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ck(a,b,c){var s=b-a.length
if(s<=0)return a
return this.a3(c,s)+a},
h(a){return a},
gk(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gt(a){return A.ae(t.N)},
gl(a){return a.length},
$if:1,
$iA:1}
A.aR.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.dZ.prototype={
$0(){var s=new A.l($.e,t.D)
s.an(null)
return s},
$S:9}
A.cQ.prototype={}
A.aE.prototype={}
A.R.prototype={
gu(a){var s=this
return new A.al(s,s.gl(s),A.a0(s).i("al<R.E>"))},
cf(a){var s,r,q=this,p=q.gl(q)
for(s=0,r="";s<p;++s){r+=A.i(q.N(0,s))
if(p!==q.gl(q))throw A.c(A.a4(q))}return r.charCodeAt(0)==0?r:r}}
A.al.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.fB(q),o=p.gl(q)
if(r.b!==o)throw A.c(A.a4(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.N(q,s);++r.c
return!0}}
A.b6.prototype={
gu(a){return new A.cb(J.eG(this.a),this.b)}}
A.cb.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(r.$1(s.gq()))return!0
return!1},
gq(){return this.a.gq()}}
A.aF.prototype={
gu(a){return B.t},
gl(a){return 0}}
A.bI.prototype={
m(){return!1},
gq(){throw A.c(A.cC())}}
A.aJ.prototype={
gl(a){var s=this.a
return s.gl(s)},
gu(a){var s=this.a
return new A.aK(s.gu(s),this.b)}}
A.aK.prototype={
m(){if(++this.c>=0&&this.a.m())return!0
this.c=-2
return!1},
gq(){var s=this.c
return s>=0?new A.m(this.b+s,this.a.gq()):A.O(A.cC())}}
A.aH.prototype={}
A.b1.prototype={
gl(a){return this.a.length},
N(a,b){var s=this.a
return J.h0(s,s.length-1-b)}}
A.m.prototype={$r:"+(1,2)",$s:1}
A.co.prototype={$r:"+black,white(1,2)",$s:2}
A.bH.prototype={
h(a){return A.ea(this)}}
A.aI.prototype={
a7(){var s=this,r=s.$map
if(r==null){r=new A.aQ(s.$ti.i("aQ<1,2>"))
A.jb(s.a,r)
s.$map=r}return r},
aE(a){return this.a7().aE(a)},
U(a,b){return this.a7().U(0,b)},
aG(a,b){this.a7().aG(0,b)},
gl(a){return this.a7().a}}
A.b2.prototype={}
A.d8.prototype={
H(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.b_.prototype={
h(a){return"Null check operator used on a null value"}}
A.bP.prototype={
h(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.c9.prototype={
h(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.cI.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.aG.prototype={}
A.bl.prototype={
h(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iK:1}
A.a3.prototype={
h(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.fK(r==null?"unknown":r)+"'"},
gcv(){return this},
$C:"$1",
$R:1,
$D:null}
A.cv.prototype={$C:"$0",$R:0}
A.cw.prototype={$C:"$2",$R:2}
A.cW.prototype={}
A.cR.prototype={
h(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.fK(s)+"'"}}
A.aC.prototype={
I(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.aC))return!1
return this.$_target===b.$_target&&this.a===b.a},
gk(a){return(A.eB(this.a)^A.aq(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.c3(this.a)+"'")}}
A.c5.prototype={
h(a){return"RuntimeError: "+this.a}}
A.a6.prototype={
gl(a){return this.a},
aE(a){var s=this.b
if(s==null)return!1
return s[a]!=null},
U(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.ce(b)},
ce(a){var s,r,q=this.d
if(q==null)return null
s=this.bV(q,a)
r=this.aI(s,a)
if(r<0)return null
return s[r].b},
ag(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.aV(s==null?m.b=m.ar():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=m.c
m.aV(r==null?m.c=m.ar():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.ar()
p=m.aH(b)
o=q[p]
if(o==null)q[p]=[m.al(b,c)]
else{n=m.aI(o,b)
if(n>=0)o[n].b=c
else o.push(m.al(b,c))}}},
aG(a,b){var s=this,r=s.e,q=s.r
while(r!=null){b.$2(r.a,r.b)
if(q!==s.r)throw A.c(A.a4(s))
r=r.c}},
aV(a,b,c){var s=a[b]
if(s==null)a[b]=this.al(b,c)
else s.b=c},
al(a,b){var s=this,r=new A.cF(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&1073741823
return r},
aH(a){return J.P(a)&1073741823},
bV(a,b){return a[this.aH(b)]},
aI(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ai(a[r].a,b))return r
return-1},
h(a){return A.ea(this)},
ar(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.cF.prototype={}
A.aT.prototype={
gl(a){return this.a.a},
gu(a){var s=this.a
return new A.bR(s,s.r,s.e)}}
A.bR.prototype={
gq(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.c(A.a4(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
A.aS.prototype={
gl(a){return this.a.a},
gu(a){var s=this.a
return new A.bQ(s,s.r,s.e,this.$ti.i("bQ<1,2>"))}}
A.bQ.prototype={
gq(){var s=this.d
s.toString
return s},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.c(A.a4(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.aV(s.a,s.b,r.$ti.i("aV<1,2>"))
r.c=s.c
return!0}}}
A.aQ.prototype={
aH(a){return A.j6(a)&1073741823},
aI(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ai(a[r].a,b))return r
return-1}}
A.dU.prototype={
$1(a){return this.a(a)},
$S:10}
A.dV.prototype={
$2(a,b){return this.a(a,b)},
$S:11}
A.dW.prototype={
$1(a){return this.a(a)},
$S:12}
A.av.prototype={
h(a){return this.bd(!1)},
bd(a){var s,r,q,p,o,n=this.bT(),m=this.b6(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.a(m,q)
o=m[q]
l=a?l+A.eV(o):l+A.i(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
bT(){var s,r=this.$s
while($.bj.length<=r)$.bj.push(null)
s=$.bj[r]
if(s==null){s=this.bP()
if(!(r<$.bj.length))return A.a($.bj,r)
$.bj[r]=s}return s},
bP(){var s,r,q,p,o,n=this.$r,m=n.indexOf("("),l=n.substring(1,m),k=n.substring(m),j=k==="()"?0:k.replace(/[^,]/g,"").length+1,i=A.w(new Array(j),t.f)
for(s=0;s<j;++s)i[s]=s
if(l!==""){r=l.split(",")
s=r.length
for(q=i.length,p=j;s>0;){--p;--s
o=r[s]
if(!(p>=0&&p<q))return A.a(i,p)
i[p]=o}}i=A.hp(i,!1,t.K)
i.$flags=3
return i}}
A.cn.prototype={
b6(){return[this.a,this.b]},
I(a,b){if(b==null)return!1
return b instanceof A.cn&&this.$s===b.$s&&J.ai(this.a,b.a)&&J.ai(this.b,b.b)},
gk(a){return A.cJ(this.$s,this.a,this.b,B.e)}}
A.cD.prototype={
h(a){return"RegExp/"+this.a+"/"+this.b.flags},
c9(a){var s=this.b.exec(a)
if(s==null)return null
return new A.dB(s)}}
A.dB.prototype={}
A.di.prototype={
D(){var s=this.b
if(s===this)throw A.c(A.eT(this.a))
return s}}
A.an.prototype={
gt(a){return B.e6},
$if:1}
A.aY.prototype={}
A.bS.prototype={
gt(a){return B.e7},
$if:1}
A.ao.prototype={
gl(a){return a.length},
$iB:1}
A.aW.prototype={$ih:1}
A.aX.prototype={$ih:1}
A.bT.prototype={
gt(a){return B.e8},
$if:1}
A.bU.prototype={
gt(a){return B.e9},
$if:1}
A.bV.prototype={
gt(a){return B.ea},
$if:1}
A.bW.prototype={
gt(a){return B.eb},
$if:1}
A.bX.prototype={
gt(a){return B.ec},
$if:1}
A.bY.prototype={
gt(a){return B.ee},
$if:1}
A.bZ.prototype={
gt(a){return B.ef},
$if:1,
$ida:1}
A.aZ.prototype={
gt(a){return B.eg},
gl(a){return a.length},
$if:1}
A.c_.prototype={
gt(a){return B.eh},
gl(a){return a.length},
$if:1}
A.bf.prototype={}
A.bg.prototype={}
A.bh.prototype={}
A.bi.prototype={}
A.J.prototype={
i(a){return A.bs(v.typeUniverse,this,a)},
ao(a){return A.fi(v.typeUniverse,this,a)}}
A.cl.prototype={}
A.cr.prototype={
h(a){return A.C(this.a,null)}}
A.ck.prototype={
h(a){return this.a}}
A.bo.prototype={$iS:1}
A.dc.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:3}
A.db.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:13}
A.dd.prototype={
$0(){this.a.$0()},
$S:1}
A.de.prototype={
$0(){this.a.$0()},
$S:1}
A.bn.prototype={
bF(a,b){if(self.setTimeout!=null)self.setTimeout(A.ct(new A.dH(this,b),0),a)
else throw A.c(A.ca("`setTimeout()` not found."))},
bG(a,b){if(self.setTimeout!=null)self.setInterval(A.ct(new A.dG(this,a,Date.now(),b),0),a)
else throw A.c(A.ca("Periodic timer."))},
$id7:1}
A.dH.prototype={
$0(){this.a.c=1
this.b.$0()},
$S:0}
A.dG.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.a.L(s,o)}q.c=p
r.d.$1(q)},
$S:1}
A.cc.prototype={}
A.dL.prototype={
$1(a){return this.a.$2(0,a)},
$S:4}
A.dM.prototype={
$2(a,b){this.a.$2(1,new A.aG(a,b))},
$S:14}
A.dP.prototype={
$2(a,b){this.a(a,b)},
$S:15}
A.E.prototype={
h(a){return A.i(this.a)},
$ij:1,
gV(){return this.b}}
A.G.prototype={}
A.ba.prototype={
av(){},
aw(){}}
A.cf.prototype={
gbW(){return this.c<4},
c1(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
c4(a,b,c,d){var s,r,q,p,o,n=this
if((n.c&4)!==0){s=new A.bc($.e)
A.fI(s.gbX())
s.c=c
return s}s=$.e
r=d?1:0
q=A.f8(s,a)
A.hP(s,b)
p=new A.ba(n,q,s,r|32,A.a0(n).i("ba<1>"))
p.CW=p
p.ch=p
p.ay=n.c&1
o=n.e
n.e=p
p.ch=null
p.CW=o
if(o==null)n.d=p
else o.ch=p
if(n.d===p)A.fv(n.a)
return p},
c_(a){var s,r=this
A.a0(r).i("ba<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.c1(a)
if((r.c&2)===0&&r.d==null)r.bL()}return null},
bI(){if((this.c&4)!==0)return new A.a8("Cannot add new events after calling close")
return new A.a8("Cannot add new events while doing an addStream")},
R(a,b){if(!this.gbW())throw A.c(this.bI())
this.az(b)},
bL(){if((this.c&4)!==0)if(null.gcz())null.an(null)
A.fv(this.b)}}
A.b7.prototype={
az(a){var s
for(s=this.d;s!=null;s=s.ch)s.bJ(new A.ci(a))}}
A.cz.prototype={
$0(){this.c.a(null)
this.b.a6(null)},
$S:0}
A.Z.prototype={
cg(a){if((this.c&15)!==6)return!0
return this.b.b.aP(this.d,a.a)},
cc(a){var s,r=this.e,q=null,p=a.a,o=this.b.b
if(t.C.b(r))q=o.co(r,p,a.b)
else q=o.aP(r,p)
try{p=q
return p}catch(s){if(t._.b(A.aB(s))){if((this.c&1)!==0)throw A.c(A.U("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.c(A.U("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.l.prototype={
by(a,b,c){var s,r=$.e
if(r===B.b){if(!t.C.b(b)&&!t.v.b(b))throw A.c(A.e3(b,"onError",u.c))}else b=A.iS(b,r)
s=new A.l(r,c.i("l<0>"))
this.a4(new A.Z(s,3,a,b,this.$ti.i("@<1>").ao(c).i("Z<1,2>")))
return s},
bc(a,b,c){var s=new A.l($.e,c.i("l<0>"))
this.a4(new A.Z(s,19,a,b,this.$ti.i("@<1>").ao(c).i("Z<1,2>")))
return s},
c2(a){this.a=this.a&1|16
this.c=a},
a5(a){this.a=a.a&30|this.a&1
this.c=a.c},
a4(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.a4(a)
return}s.a5(r)}A.ax(null,null,s.b,new A.dm(s,a))}},
ba(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.ba(a)
return}n.a5(s)}m.a=n.a8(a)
A.ax(null,null,n.b,new A.ds(m,n))}},
Y(){var s=this.c
this.c=null
return this.a8(s)},
a8(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
a6(a){var s,r=this
if(r.$ti.i("Q<1>").b(a))A.dq(a,r,!0)
else{s=r.Y()
r.a=8
r.c=a
A.aa(r,s)}},
b3(a){var s=this,r=s.Y()
s.a=8
s.c=a
A.aa(s,r)},
bO(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.Y()
q.a5(a)
A.aa(q,r)},
W(a){var s=this.Y()
this.c2(a)
A.aa(this,s)},
bN(a,b){this.W(new A.E(a,b))},
an(a){if(this.$ti.i("Q<1>").b(a)){this.b0(a)
return}this.bK(a)},
bK(a){this.a^=2
A.ax(null,null,this.b,new A.dp(this,a))},
b0(a){A.dq(a,this,!1)
return},
b_(a){this.a^=2
A.ax(null,null,this.b,new A.dn(this,a))},
$iQ:1}
A.dm.prototype={
$0(){A.aa(this.a,this.b)},
$S:0}
A.ds.prototype={
$0(){A.aa(this.b,this.a.a)},
$S:0}
A.dr.prototype={
$0(){A.dq(this.a.a,this.b,!0)},
$S:0}
A.dp.prototype={
$0(){this.a.b3(this.b)},
$S:0}
A.dn.prototype={
$0(){this.a.W(this.b)},
$S:0}
A.dv.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.bv(q.d)}catch(p){s=A.aB(p)
r=A.ag(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.e4(q)
n=k.a
n.c=new A.E(q,o)
q=n}q.b=!0
return}if(j instanceof A.l&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.l){m=k.b.a
l=new A.l(m.b,m.$ti)
j.by(new A.dw(l,m),new A.dx(l),t.n)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.dw.prototype={
$1(a){this.a.bO(this.b)},
$S:3}
A.dx.prototype={
$2(a,b){this.a.W(new A.E(a,b))},
$S:16}
A.du.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
q.c=p.b.b.aP(p.d,this.b)}catch(o){s=A.aB(o)
r=A.ag(o)
q=s
p=r
if(p==null)p=A.e4(q)
n=this.a
n.c=new A.E(q,p)
n.b=!0}},
$S:0}
A.dt.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.cg(s)&&p.a.e!=null){p.c=p.a.cc(s)
p.b=!1}}catch(o){r=A.aB(o)
q=A.ag(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.e4(p)
m=l.b
m.c=new A.E(p,n)
p=m}p.b=!0}},
$S:0}
A.cd.prototype={}
A.at.prototype={
gl(a){var s={},r=new A.l($.e,t.a)
s.a=0
this.bn(new A.cU(s,this),!0,new A.cV(s,r),r.gb2())
return r},
gS(a){var s=new A.l($.e,this.$ti.i("l<1>")),r=this.bn(null,!0,new A.cS(s),s.gb2())
r.bq(new A.cT(this,r,s))
return s}}
A.cU.prototype={
$1(a){++this.a.a},
$S(){return this.b.$ti.i("~(1)")}}
A.cV.prototype={
$0(){this.b.a6(this.a.a)},
$S:0}
A.cS.prototype={
$0(){var s,r=A.eX(),q=new A.a8("No element")
A.hr(q,r)
s=A.iB(q,r)
s=new A.E(q,r)
this.a.W(s)},
$S:0}
A.cT.prototype={
$1(a){A.is(this.b,this.c,a)},
$S(){return this.a.$ti.i("~(1)")}}
A.bb.prototype={
gk(a){return(A.aq(this.a)^892482866)>>>0},
I(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.G&&b.a===this.a}}
A.ch.prototype={
b9(){return this.w.c_(this)},
av(){},
aw(){}}
A.cg.prototype={
bq(a){this.a=A.f8(this.d,a)},
bg(){var s,r=this,q=r.e&=4294967279
if((q&8)===0){q=r.e=q|8
if((q&128)!==0){s=r.r
if(s.a===1)s.a=3}if((q&64)===0)r.r=null
r.f=r.b9()}q=$.e1()
return q},
av(){},
aw(){},
b9(){return null},
bJ(a){var s,r,q=this,p=q.r
if(p==null)p=q.r=new A.cm()
s=p.c
if(s==null)p.b=p.c=a
else p.c=s.a=a
r=q.e
if((r&128)===0){r|=128
q.e=r
if(r<256)p.aS(q)}},
az(a){var s=this,r=s.e
s.e=r|64
s.d.bx(s.a,a)
s.e&=4294967231
s.bM((r&4)!==0)},
bM(a){var s,r,q=this,p=q.e
if((p&128)!==0&&q.r.c==null){p=q.e=p&4294967167
s=!1
if((p&4)!==0)if(p<256){s=q.r
s=s==null?null:s.c==null
s=s!==!1}if(s){p&=4294967291
q.e=p}}for(;;a=r){if((p&8)!==0){q.r=null
return}r=(p&4)!==0
if(a===r)break
q.e=p^64
if(r)q.av()
else q.aw()
p=q.e&=4294967231}if((p&128)!==0&&p<256)q.r.aS(q)}}
A.bm.prototype={
bn(a,b,c,d){return this.a.c4(a,d,c,!0)}}
A.cj.prototype={}
A.ci.prototype={}
A.cm.prototype={
aS(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.fI(new A.dC(s,a))
s.a=1}}
A.dC.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.a
q.b=r
if(r==null)q.c=null
this.b.az(s.b)},
$S:0}
A.bc.prototype={
bq(a){},
bg(){this.a=-1
this.c=null
return $.e1()},
bY(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.bw(s)}}else r.a=q}}
A.cp.prototype={}
A.dN.prototype={
$0(){return this.a.a6(this.b)},
$S:0}
A.dK.prototype={}
A.dD.prototype={
bw(a){var s,r,q
try{if(B.b===$.e){a.$0()
return}A.fs(null,null,this,a)}catch(q){s=A.aB(q)
r=A.ag(q)
A.cs(s,r)}},
cr(a,b){var s,r,q
try{if(B.b===$.e){a.$1(b)
return}A.ft(null,null,this,a,b)}catch(q){s=A.aB(q)
r=A.ag(q)
A.cs(s,r)}},
bx(a,b){return this.cr(a,b,t.z)},
aC(a){return new A.dE(this,a)},
c6(a,b){return new A.dF(this,a,b)},
cn(a){if($.e===B.b)return a.$0()
return A.fs(null,null,this,a)},
bv(a){return this.cn(a,t.z)},
cq(a,b){if($.e===B.b)return a.$1(b)
return A.ft(null,null,this,a,b)},
aP(a,b){var s=t.z
return this.cq(a,b,s,s)},
cp(a,b,c){if($.e===B.b)return a.$2(b,c)
return A.iT(null,null,this,a,b,c)},
co(a,b,c){var s=t.z
return this.cp(a,b,c,s,s,s)},
cm(a){return a},
aO(a){var s=t.z
return this.cm(a,s,s,s)}}
A.dE.prototype={
$0(){return this.a.bw(this.b)},
$S:0}
A.dF.prototype={
$1(a){return this.a.bx(this.b,a)},
$S(){return this.c.i("~(0)")}}
A.dO.prototype={
$0(){A.hb(this.a,this.b)},
$S:0}
A.be.prototype={
gu(a){var s=this,r=new A.au(s,s.r,s.$ti.i("au<1>"))
r.c=s.e
return r},
gl(a){return this.a},
R(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.aZ(s==null?q.b=A.em():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.aZ(r==null?q.c=A.em():r,b)}else return q.bH(b)},
bH(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.em()
s=J.P(a)&1073741823
r=p[s]
if(r==null)p[s]=[q.au(a)]
else{if(q.bU(r,a)>=0)return!1
r.push(q.au(a))}return!0},
aZ(a,b){if(a[b]!=null)return!1
a[b]=this.au(b)
return!0},
b8(){this.r=this.r+1&1073741823},
au(a){var s,r=this,q=new A.dA(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.b8()
return q},
bU(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ai(a[r].a,b))return r
return-1}}
A.dA.prototype={}
A.au.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.c(A.a4(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.n.prototype={
gu(a){return new A.al(a,a.length,A.bB(a).i("al<n.E>"))},
N(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
h(a){return A.e6(a,"[","]")}}
A.aU.prototype={
gl(a){return this.a},
h(a){return A.ea(this)}}
A.cG.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.i(a)
r.a=(r.a+=s)+": "
s=A.i(b)
r.a+=s},
$S:17}
A.b3.prototype={
h(a){return A.e6(this,"{","}")}}
A.bk.prototype={}
A.q.prototype={
J(a){var s,r,q=this,p=q.c
if(p===0)return q
s=!q.a
r=q.b
p=A.v(p,r)
return new A.q(p===0?!1:s,r,p)},
bR(a){var s,r,q,p,o,n,m,l=this.c
if(l===0)return $.o()
s=l+a
r=this.b
q=new Uint16Array(s)
for(p=l-1,o=r.length;p>=0;--p){n=p+a
if(!(p<o))return A.a(r,p)
m=r[p]
if(!(n>=0&&n<s))return A.a(q,n)
q[n]=m}o=this.a
n=A.v(s,q)
return new A.q(n===0?!1:o,q,n)},
bS(a){var s,r,q,p,o,n,m,l,k=this,j=k.c
if(j===0)return $.o()
s=j-a
if(s<=0)return k.a?$.eF():$.o()
r=k.b
q=new Uint16Array(s)
for(p=r.length,o=a;o<j;++o){n=o-a
if(!(o>=0&&o<p))return A.a(r,o)
m=r[o]
if(!(n<s))return A.a(q,n)
q[n]=m}n=k.a
m=A.v(s,q)
l=new A.q(m===0?!1:n,q,m)
if(n)for(o=0;o<a;++o){if(!(o<p))return A.a(r,o)
if(r[o]!==0)return l.aj(0,$.u())}return l},
n(a,b){var s,r,q,p,o,n=this
if(b<0)throw A.c(A.U("shift-amount must be posititve "+b,null))
s=n.c
if(s===0)return n
r=B.a.p(b,16)
if(B.a.j(b,16)===0)return n.bR(r)
q=s+r+1
p=new Uint16Array(q)
A.f6(n.b,s,b,p)
s=n.a
o=A.v(q,p)
return new A.q(o===0?!1:s,p,o)},
ai(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(b<0)throw A.c(A.U("shift-amount must be posititve "+b,null))
s=j.c
if(s===0)return j
r=B.a.p(b,16)
q=B.a.j(b,16)
if(q===0)return j.bS(r)
p=s-r
if(p<=0)return j.a?$.eF():$.o()
o=j.b
n=new Uint16Array(p)
A.hN(o,s,b,n)
s=j.a
m=A.v(p,n)
l=new A.q(m===0?!1:s,n,m)
if(s){s=o.length
if(!(r>=0&&r<s))return A.a(o,r)
if((o[r]&B.a.n(1,q)-1)!==0)return l.aj(0,$.u())
for(k=0;k<r;++k){if(!(k<s))return A.a(o,k)
if(o[k]!==0)return l.aj(0,$.u())}}return l},
C(a,b){var s,r=this.a
if(r===b.a){s=A.df(this.b,this.c,b.b,b.c)
return r?0-s:s}return r?-1:1},
M(a,b){var s,r,q,p=this,o=p.c,n=a.c
if(o<n)return a.M(p,b)
if(o===0)return $.o()
if(n===0)return p.a===b?p:p.J(0)
s=o+1
r=new Uint16Array(s)
A.hI(p.b,o,a.b,n,r)
q=A.v(s,r)
return new A.q(q===0?!1:b,r,q)},
B(a,b){var s,r,q,p=this,o=p.c
if(o===0)return $.o()
s=a.c
if(s===0)return p.a===b?p:p.J(0)
r=new Uint16Array(o)
A.ce(p.b,o,a.b,s,r)
q=A.v(o,r)
return new A.q(q===0?!1:b,r,q)},
aX(a,b){var s,r,q,p,o,n,m,l,k=this.c,j=a.c
k=k<j?k:j
s=this.b
r=a.b
q=new Uint16Array(k)
for(p=s.length,o=r.length,n=0;n<k;++n){if(!(n<p))return A.a(s,n)
m=s[n]
if(!(n<o))return A.a(r,n)
l=r[n]
if(!(n<k))return A.a(q,n)
q[n]=m&l}p=A.v(k,q)
return new A.q(p===0?!1:b,q,p)},
aW(a,b){var s,r,q,p,o,n=this.c,m=this.b,l=a.b,k=new Uint16Array(n),j=a.c
if(n<j)j=n
for(s=m.length,r=l.length,q=0;q<j;++q){if(!(q<s))return A.a(m,q)
p=m[q]
if(!(q<r))return A.a(l,q)
o=l[q]
if(!(q<n))return A.a(k,q)
k[q]=p&~o}for(q=j;q<n;++q){if(!(q>=0&&q<s))return A.a(m,q)
k[q]=m[q]}s=A.v(n,k)
return new A.q(s===0?!1:b,k,s)},
aY(a,b){var s,r,q,p,o,n,m,l,k=this.c,j=a.c,i=k>j?k:j,h=this.b,g=a.b,f=new Uint16Array(i)
if(k<j){s=k
r=a}else{s=j
r=this}for(q=h.length,p=g.length,o=0;o<s;++o){if(!(o<q))return A.a(h,o)
n=h[o]
if(!(o<p))return A.a(g,o)
m=g[o]
if(!(o<i))return A.a(f,o)
f[o]=n|m}l=r.b
for(q=l.length,o=s;o<i;++o){if(!(o>=0&&o<q))return A.a(l,o)
p=l[o]
if(!(o<i))return A.a(f,o)
f[o]=p}q=A.v(i,f)
return new A.q(q===0?!1:b,f,q)},
am(a,b){var s,r,q,p,o,n,m,l,k=this.c,j=a.c,i=k>j?k:j,h=this.b,g=a.b,f=new Uint16Array(i)
if(k<j){s=k
r=a}else{s=j
r=this}for(q=h.length,p=g.length,o=0;o<s;++o){if(!(o<q))return A.a(h,o)
n=h[o]
if(!(o<p))return A.a(g,o)
m=g[o]
if(!(o<i))return A.a(f,o)
f[o]=n^m}l=r.b
for(q=l.length,o=s;o<i;++o){if(!(o>=0&&o<q))return A.a(l,o)
p=l[o]
if(!(o<i))return A.a(f,o)
f[o]=p}q=A.v(i,f)
return new A.q(q===0?!1:b,f,q)},
v(a,b){var s,r,q,p=this
if(p.c===0||b.c===0)return $.o()
s=p.a
if(s===b.a){if(s){s=$.u()
return p.B(s,!0).aY(b.B(s,!0),!0).M(s,!0)}return p.aX(b,!1)}if(s){r=p
q=b}else{r=b
q=p}return q.aW(r.B($.u(),!1),!1)},
ah(a,b){var s,r,q,p=this
if(p.c===0)return b
if(b.c===0)return p
s=p.a
if(s===b.a){if(s){s=$.u()
return p.B(s,!0).aX(b.B(s,!0),!0).M(s,!0)}return p.aY(b,!1)}if(s){r=p
q=b}else{r=b
q=p}s=$.u()
return r.B(s,!0).aW(q,!0).M(s,!0)},
aU(a,b){var s,r,q,p=this
if(p.c===0)return b
if(b.c===0)return p
s=p.a
if(s===b.a){if(s){s=$.u()
return p.B(s,!0).am(b.B(s,!0),!1)}return p.am(b,!1)}if(s){r=p
q=b}else{r=b
q=p}s=$.u()
return q.am(r.B(s,!0),!0).M(s,!0)},
aQ(a,b){var s,r,q=this,p=q.c
if(p===0)return b
s=b.c
if(s===0)return q
r=q.a
if(r===b.a)return q.M(b,r)
if(A.df(q.b,p,b.b,s)>=0)return q.B(b,r)
return b.B(q,!r)},
aj(a,b){var s,r,q=this,p=q.c
if(p===0)return b.J(0)
s=b.c
if(s===0)return q
r=q.a
if(r!==b.a)return q.M(b,r)
if(A.df(q.b,p,b.b,s)>=0)return q.B(b,r)
return b.B(q,!r)},
a3(a,b){var s,r,q,p,o,n,m,l=this.c,k=b.c
if(l===0||k===0)return $.o()
s=l+k
r=this.b
q=b.b
p=new Uint16Array(s)
for(o=q.length,n=0;n<k;){if(!(n<o))return A.a(q,n)
A.f7(q[n],r,0,p,n,l);++n}o=this.a!==b.a
m=A.v(s,p)
return new A.q(m===0?!1:o,p,m)},
bQ(a){var s,r,q,p
if(this.c<a.c)return $.o()
this.b5(a)
s=$.eh.D()-$.b9.D()
r=A.ej($.eg.D(),$.b9.D(),$.eh.D(),s)
q=A.v(s,r)
p=new A.q(!1,r,q)
return this.a!==a.a&&q>0?p.J(0):p},
c0(a){var s,r,q,p=this
if(p.c<a.c)return p
p.b5(a)
s=A.ej($.eg.D(),0,$.b9.D(),$.b9.D())
r=A.v($.b9.D(),s)
q=new A.q(!1,s,r)
if($.ei.D()>0)q=q.ai(0,$.ei.D())
return p.a&&q.c>0?q.J(0):q},
b5(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.c
if(b===$.f3&&a.c===$.f5&&c.b===$.f2&&a.b===$.f4)return
s=a.b
r=a.c
q=r-1
if(!(q>=0&&q<s.length))return A.a(s,q)
p=16-B.a.gbf(s[q])
if(p>0){o=new Uint16Array(r+5)
n=A.f1(s,r,p,o)
m=new Uint16Array(b+5)
l=A.f1(c.b,b,p,m)}else{m=A.ej(c.b,0,b,b+2)
n=r
o=s
l=b}q=n-1
if(!(q>=0&&q<o.length))return A.a(o,q)
k=o[q]
j=l-n
i=new Uint16Array(l)
h=A.el(o,n,j,i)
g=l+1
q=m.$flags|0
if(A.df(m,l,i,h)>=0){q&2&&A.y(m)
if(!(l>=0&&l<m.length))return A.a(m,l)
m[l]=1
A.ce(m,g,i,h,m)}else{q&2&&A.y(m)
if(!(l>=0&&l<m.length))return A.a(m,l)
m[l]=0}q=n+2
f=new Uint16Array(q)
if(!(n>=0&&n<q))return A.a(f,n)
f[n]=1
A.ce(f,n+1,o,n,f)
e=l-1
for(q=m.length;j>0;){d=A.hJ(k,m,e);--j
A.f7(d,f,0,m,j,n)
if(!(e>=0&&e<q))return A.a(m,e)
if(m[e]<d){h=A.el(f,n,j,i)
A.ce(m,g,i,h,m)
while(--d,m[e]<d)A.ce(m,g,i,h,m)}--e}$.f2=c.b
$.f3=b
$.f4=s
$.f5=r
$.eg.b=m
$.eh.b=g
$.b9.b=n
$.ei.b=p},
gk(a){var s,r,q,p,o=new A.dg(),n=this.c
if(n===0)return 6707
s=this.a?83585:429689
for(r=this.b,q=r.length,p=0;p<n;++p){if(!(p<q))return A.a(r,p)
s=o.$2(s,r[p])}return new A.dh().$1(s)},
I(a,b){if(b==null)return!1
return b instanceof A.q&&this.C(0,b)===0},
h(a){var s,r,q,p,o,n=this,m=n.c
if(m===0)return"0"
if(m===1){if(n.a){m=n.b
if(0>=m.length)return A.a(m,0)
return B.a.h(-m[0])}m=n.b
if(0>=m.length)return A.a(m,0)
return B.a.h(m[0])}s=A.w([],t.s)
m=n.a
r=m?n.J(0):n
while(r.c>1){q=$.eE()
if(q.c===0)A.O(B.u)
p=r.c0(q).h(0)
s.push(p)
o=p.length
if(o===1)s.push("000")
if(o===2)s.push("00")
if(o===3)s.push("0")
r=r.bQ(q)}q=r.b
if(0>=q.length)return A.a(q,0)
s.push(B.a.h(q[0]))
if(m)s.push("-")
return new A.b1(s,t.r).cf(0)}}
A.dg.prototype={
$2(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
$S:6}
A.dh.prototype={
$1(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
$S:7}
A.aD.prototype={
I(a,b){if(b==null)return!1
return b instanceof A.aD&&this.a===b.a},
gk(a){return B.a.gk(this.a)},
h(a){var s,r,q,p,o=this.a,n=B.a.p(o,36e8)
o%=36e8
s=B.a.p(o,6e7)
o%=6e7
r=s<10?"0":""
q=B.a.p(o,1e6)
p=q<10?"0":""
return""+n+":"+r+s+":"+p+q+"."+B.o.ck(B.a.h(o%1e6),6,"0")}}
A.dk.prototype={
h(a){return this.X()}}
A.j.prototype={
gV(){return A.hq(this)}}
A.bE.prototype={
h(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.cx(s)
return"Assertion failed"}}
A.S.prototype={}
A.M.prototype={
gaq(){return"Invalid argument"+(!this.a?"(s)":"")},
gap(){return""},
h(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.gaq()+q+o
if(!s.a)return n
return n+s.gap()+": "+A.cx(s.gaJ())},
gaJ(){return this.b}}
A.ar.prototype={
gaJ(){return this.b},
gaq(){return"RangeError"},
gap(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.i(q):""
else if(q==null)s=": Not greater than or equal to "+A.i(r)
else if(q>r)s=": Not in inclusive range "+A.i(r)+".."+A.i(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.i(r)
return s}}
A.bJ.prototype={
gaJ(){return this.b},
gaq(){return"RangeError"},
gap(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gl(a){return this.f}}
A.b5.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.c8.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.a8.prototype={
h(a){return"Bad state: "+this.a}}
A.bG.prototype={
h(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.cx(s)+"."}}
A.c1.prototype={
h(a){return"Out of Memory"},
gV(){return null},
$ij:1}
A.b4.prototype={
h(a){return"Stack Overflow"},
gV(){return null},
$ij:1}
A.dl.prototype={
h(a){return"Exception: "+this.a}}
A.cy.prototype={
h(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=B.o.bB(q,0,75)+"..."
return r+"\n"+q}}
A.bK.prototype={
gV(){return null},
h(a){return"IntegerDivisionByZeroException"},
$ij:1}
A.F.prototype={
gl(a){var s,r=this.gu(this)
for(s=0;r.m();)++s
return s},
gS(a){var s=this.gu(this)
if(!s.m())throw A.c(A.cC())
return s.gq()},
N(a,b){var s,r
A.ht(b,"index")
s=this.gu(this)
for(r=b;s.m();){if(r===0)return s.gq();--r}throw A.c(A.e5(b,b-r,this,null,"index"))},
h(a){return A.hj(this,"(",")")}}
A.bd.prototype={
N(a,b){var s=this.a
if(0>b||b>=s)A.O(A.e5(b,s,this,null,"index"))
return this.b.$1(b)},
gl(a){return this.a}}
A.aV.prototype={
h(a){return"MapEntry("+A.i(this.a)+": "+A.i(this.b)+")"}}
A.z.prototype={
gk(a){return A.d.prototype.gk.call(this,0)},
h(a){return"null"}}
A.d.prototype={$id:1,
I(a,b){return this===b},
gk(a){return A.aq(this)},
h(a){return"Instance of '"+A.c3(this)+"'"},
gt(a){return A.fD(this)},
toString(){return this.h(this)}}
A.cq.prototype={
h(a){return""},
$iK:1}
A.c7.prototype={
gl(a){return this.a.length},
h(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.dy.prototype={
ci(a){if(a<=0||a>4294967296)throw A.c(A.hs("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
A.V.prototype={
gk(a){var s=this.a,r=this.b
return A.cJ(new A.m(s,r).$s,s,r,B.e)},
I(a,b){var s,r,q,p
if(b==null)return!1
if(b instanceof A.V){s=b.a
r=b.b
q=this.a
p=this.b
p=A.cJ(new A.m(s,r).$s,s,r,B.e)===A.cJ(new A.m(q,p).$s,q,p,B.e)
s=p}else s=!1
return s},
h(a){var s=this
return"("+s.a+" "+s.b+") => '"+s.c+"' "+s.d}}
A.cK.prototype={
h(a){return A.fD(this).h(0)+": "+this.a}}
A.cY.prototype={}
A.ak.prototype={}
A.am.prototype={
h(a){var s=this
return"               row: "+s.a+"\n            column: "+s.b+"\n         character: '"+s.c+"'\n    characterColor: "+s.d+"\n\n          pixelRow: "+s.e+"\n       pixelColumn: "+s.f+"\n         pixelIsOn: "+s.r+"\n    "}}
A.ap.prototype={
sab(a){var s,r,q,p=this
if(a<0){s=p.d=a
for(r=p.b,q=p.a;s<0;){s+=r
p.d=s
p.c=B.a.j(p.c-1,q)}}else{s=p.b
p.c=B.a.j(p.c+B.a.L(a,s),p.a)
p.d=B.a.j(a,s)}},
gF(){return this.c*this.b+this.d},
sF(a){var s=this,r=s.b
s.c=B.a.j(B.a.L(a,r),s.a)
s.d=B.a.j(a,r)}}
A.c6.prototype={
bD(a,b,c,d,e,f,g,h){var s,r=this,q=v.G.document
q.onfocus=A.bw(new A.cM(r))
q.onblur=A.bw(new A.cN(r))
q=r.w
q.tabIndex=-1
q.style.display="block"
q.style.outline="none"
s=q.getContext("2d")
if(s==null)s=A.ac(s)
s.imageSmoothingEnabled=!1
q.onfocus=A.bw(new A.cO(r))
q.onblur=A.bw(new A.cP(r))
b.style.display="flex"
b.style.alignItems="flex-start"
b.style.padding="0"
b.style.margin="0"
b.style.width="fit-content"
b.style.height="fit-content"
b.style.background="gray"
b.appendChild(q)
r.a_(0)},
a9(a,b){return new A.m(B.a.j(a,this.b),B.a.j(b,this.c))},
b1(){var s=this.x,r=s.getContext("2d")
if(r==null)r=A.ac(r)
r.save()
r.beginPath()
r.clearRect(0,0,s.width,s.height)
r.restore()
return r},
b4(){var s=this.w.getContext("2d")
if(s==null)s=A.ac(s)
s.save()
s.beginPath()
s.drawImage(this.x,0,0)
s.restore()
return s},
O(a,b,c,d){var s,r,q,p,o,n,m=this,l=a<0||a>=m.b||b<0||b>=m.c
if(l)return
s=m.a9(a,b)
a=s.a
b=s.b
r=A.ec(b)
q=r.a
p=B.a.n(1,r.b)
l=m.y
if(!(a>=0&&a<l.length))return A.a(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.a(l,q)
o=l[q]
l.$flags&2&&A.y(l)
l[q]=(o|p)>>>0
l[q]=(l[q]^p)>>>0
l=c.getContext("2d")
if(l==null)l=A.ac(l)
l.save()
l.beginPath()
l.fillStyle=m.r
o=m.d
n=m.e
l.fillRect(b*o,a*n,o,n)
l.restore()},
P(a,b,c,d,e){var s,r,q,p,o,n,m=this,l=a<0||a>=m.b||b<0||b>=m.c
if(l)return
s=m.a9(a,b)
a=s.a
b=s.b
r=A.ec(b)
q=r.a
p=B.a.n(1,r.b)
l=m.y
if(!(a>=0&&a<l.length))return A.a(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.a(l,q)
o=l[q]
l.$flags&2&&A.y(l)
l[q]=(o|p)>>>0
o=d.getContext("2d")
l=o==null?A.ac(o):o
l.save()
l.beginPath()
l.fillStyle=c
o=m.d
n=m.e
l.fillRect(b*o,a*n,o,n)
l.restore()},
bs(a,b){var s,r,q,p,o=this.a9(b,a)
b=o.a
s=A.ec(o.b)
r=s.a
q=B.a.n(1,s.b)
p=this.y
if(!(b>=0&&b<p.length))return A.a(p,b)
p=p[b]
if(!(r>=0&&r<p.length))return A.a(p,r)
return(p[r]&q)>>>0>0},
bi(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=this
if(e==null)e=k.c-c
if(b==null)b=k.b-d
k.b1()
if(c===0&&d===0&&e===k.c&&b===k.b){for(s=k.y,r=s.length,q=0;q<r;++q)for(p=0;o=s[q],p<o.length;++p){o.$flags&2&&A.y(o)
o[p]=0}s=k.x
r=s.getContext("2d")
if(r==null)r=A.ac(r)
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
for(p=c;p<m;++p)k.O(l,B.a.j(p,r),o,!1)}}k.b4()},
a_(a){return this.bi(0,null,0,0,null)},
bZ(a,b,c,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
d.b1()
s=d.a9(a,b)
a=s.a
b=s.b
r=B.a.c3(1,a1)-1
for(q=a2.a,p=a1-1,o=t.t,n=d.x,m=0;m<c.length;++m){l=c[m]
k=(l&r)>>>0
l=A.w([],o)
for(j=a+m,i=0;i<a1;++i){h=d.bs(b+i,j)?1:0
l.push(B.a.n(h,p-i))}g=B.h.cb(l,0,new A.cL())
switch(q){case 0:for(i=0;i<a1;++i){l=b+i
if((B.a.E(k,p-i)&1)>0)d.P(j,l,a0,n,!1)
else d.O(j,l,n,!1)}break
case 1:for(i=0;i<a1;++i){l=b+i
if((B.a.E(k,p-i)&1)>0)d.O(j,l,n,!1)
else d.P(j,l,a0,n,!1)}break
case 3:for(i=0;i<a1;++i){f=p-i
if((B.a.E(k,f)&1)>0&&(B.a.ai(g,f)&1)===0)d.P(j,b+i,a0,n,!1)}break
case 2:for(i=0;i<a1;++i)if((B.a.E(k,p-i)&1)>0)d.P(j,b+i,a0,n,!1)
break
case 4:for(e=(k&g)>>>0,i=0;i<a1;++i)if((B.a.E(e,p-i)&1)>0)d.P(j,b+i,a0,n,!1)
break
case 5:for(e=(k&g)>>>0,i=0;i<a1;++i)if((B.a.E(e,p-i)&1)>0)d.O(j,b+i,n,!1)
break
case 6:for(e=(k&g)>>>0,i=0;i<a1;++i)if((B.a.E(e,p-i)&1)===0)d.O(j,b+i,n,!1)
break
case 7:for(e=(k&g)>>>0,i=0;i<a1;++i){l=b+i
if((B.a.E(e,p-i)&1)===0)d.O(j,l,n,!1)
else d.P(j,l,a0,n,!1)}break}}d.b4()},
bu(a,b,c){this.bZ(c.a,c.b,b,a,8,B.dT,!0,!1,!1)},
a0(){var s=this.w
s.style.opacity="1.0"
s.focus()},
Z(){var s=this.w,r=s.style
r.opacity="0.5"
s.blur()}}
A.cM.prototype={
$0(){this.a.z=!0},
$S:1}
A.cN.prototype={
$0(){this.a.z=!1},
$S:1}
A.cO.prototype={
$0(){this.a.a0()},
$S:1}
A.cP.prototype={
$0(){this.a.Z()},
$S:1}
A.cL.prototype={
$2(a,b){return(a|b)>>>0},
$S:6}
A.cH.prototype={
X(){return"Mode."+this.b}}
A.as.prototype={
X(){return"State."+this.b}}
A.cX.prototype={
bE(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=this,r=s.f
r.tabIndex=-1
r.onfocus=A.bw(new A.d_(s))
r.onblur=A.bw(new A.d0(s))
r.onkeydown=A.fn(new A.d1(s,l,new A.d5(),new A.d4(s)))
r.onclick=A.fn(new A.d2(s,new A.d6(s),o))
A.hA(A.eO(300),new A.d3(s))
s.Z()
s.a_(0)},
gaF(){var s=this.w
s===$&&A.a2()
return s.gaF()},
gaD(){var s=this.w
s===$&&A.a2()
return s.gaD()},
aB(a,b){return new A.m(B.a.j(a,this.a),B.a.j(b,this.b))},
b7(){var s=this,r=s.x
s.CW.R(0,new A.V(r.c,r.d," ","white"))
s.be()
s.cy=!1},
be(){var s,r,q,p,o,n,m,l,k,j
for(s=this.CW,r=A.hR(s,s.r,s.$ti.c),q=this.w,p=this.cx,o=r.$ti.c;r.m();){n=r.d
if(n==null)n=o.a(n)
m=n.a
l=n.b
if(p.aE(n.c)){k=p.U(0,n.c)
k.toString
j=k}else j=$.fN()
q===$&&A.a2()
q.bu(n.d,j,new A.m(m*10,l*8))}if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.b8()}},
aR(a,b){var s,r=this.aB(b,a)
b=r.a
a=r.b
s=this.ch
if(!(b>=0&&b<s.length))return A.a(s,b)
s=s[b]
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a].c},
bp(){var s=this.x
s.sab(0)
s.c=B.a.j(s.c+1,s.a)},
a1(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=this,j=e==null?k.x.c:e,i=k.aB(j,c==null?k.x.d:c)
j=k.x
j.c=B.a.j(i.a,j.a)
j.sab(i.b)
if(b==null)b=k.d
for(s=a.split(""),r=s.length,q=k.ch,p=k.CW,o=0;o<r;++o){n=s[o]
e=j.c
c=j.d
if(!(e>=0&&e<q.length))return A.a(q,e)
m=q[e]
if(!(c>=0&&c<m.length))return A.a(m,c)
l=m[c]
l.c=n
l.d=b
p.R(0,l)
j.sab(j.d+1)}k.be()
if(d)k.bp()},
A(a,b,c){return this.a1(a,null,b,!0,c)},
cj(a,b,c){return this.a1(a,b,c,!0,null)},
G(a,b){return this.a1(a,null,b,!0,null)},
aN(a,b,c,d){return this.a1(a,b,c,!0,d)},
br(a,b){return this.a1(a,null,null,b,null)},
bh(a,b,c,d,e){var s,r,q,p,o,n,m,l=this
if(e==null)e=l.b-b
if(c==null)c=l.a-d
s=d+c
r=b+e
for(q=l.ch,p=l.d,o=d;o<s;++o)for(n=b;n<r;++n){if(!(o>=0&&o<q.length))return A.a(q,o)
m=q[o]
if(!(n>=0&&n<m.length))return A.a(m,n)
m=m[n]
m.c=" "
m.d=p}q=l.w
q===$&&A.a2()
q.bi(0,c*10,b*8,d*10,e*8)
q=l.x
q.c=B.a.j(d,q.a)
q.sab(b)},
a_(a){return this.bh(0,0,null,0,null)},
cl(a,b,c){var s=this.w
s===$&&A.a2()
s.bu(this.d,b,new A.m(c*10,a*8))},
c5(){if(this.ay!==B.c)throw A.c(A.cZ("Terminal already awaiting input."))},
cd(){this.c5()
this.ay=B.i
var s=this.at
return new A.G(s,A.a0(s).i("G<1>")).gS(0)},
a0(){return this.gaF().$0()},
Z(){return this.gaD().$0()}}
A.d6.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.w
i===$&&A.a2()
s=J.eI(a.offsetX)
r=Math.max(Math.min(B.a.L(J.eI(a.offsetY)-1,i.e),i.b-1),0)
q=Math.max(Math.min(B.a.L(s-1,i.d),i.c-1),0)
p=B.a.p(r,10)
o=B.a.p(q,8)
n=j.aR(o,p)
m=j.aB(p,o)
l=m.a
k=m.b
j=j.ch
if(!(l>=0&&l<j.length))return A.a(j,l)
j=j[l]
if(!(k>=0&&k<j.length))return A.a(j,k)
return new A.am(p,o,n,j[k].d,r,q,i.bs(q,r))},
$S:18}
A.d5.prototype={
$1(a){var s=a.key
return new A.ak(s.length>1?"":s)},
$S:19}
A.d4.prototype={
$0(){var s,r,q,p,o,n=this.a,m=n.a,l=n.b,k=new A.ap(m,l)
k.sF(n.y.gF())
s=A.w([],t.s)
for(r=n.z,q=r.b;p=k.c,o=k.d,p*l+o<r.c*q+r.d;p=k.c*l+k.d+1,k.c=B.a.j(B.a.L(p,l),m),k.d=B.a.j(p,l))s.push(n.aR(o,p))
return B.h.bm(s,"")},
$S:20}
A.d_.prototype={
$0(){var s=this.a.w
s===$&&A.a2()
s.a0()},
$S:1}
A.d0.prototype={
$0(){var s=this.a.w
s===$&&A.a2()
s.Z()},
$S:1}
A.d1.prototype={
$1(a){var s,r,q,p
a.preventDefault()
s=this.a
switch(s.ay.a){case 0:break
case 1:r=s.at
if(r.d!=null){r.R(0,this.c.$1(a))
s.ay=B.c}break
case 2:s.b7()
A:{q=a.keyCode
if(13===q){r=s.as
if(r.d!=null){r.R(0,J.h2(this.d.$0()))
s.bp()
s.ay=B.c}break A}if(8===q){r=s.x
if(r.gF()>s.y.gF()){r.sF(r.gF()-1)
s.br(" ",!1)
r.sF(r.gF()-1)}break A}p=a.key
if(p.length===1&&s.x.gF()<s.z.gF())s.br(p,!1)}break
case 3:break}},
$S:8}
A.d2.prototype={
$1(a){var s
a.preventDefault()
s=this.a
if(s.ay===B.r&&s.ax.d!=null){s.ax.R(0,this.b.$1(a))
s.ay=B.c}},
$S:8}
A.d3.prototype={
$1(a){var s,r=this.a,q=r.w
q===$&&A.a2()
if(q.z&&J.ai(v.G.document.activeElement,q.w)&&r.ay===B.e5)if(r.cy)r.b7()
else{q=r.x
s=q.c
r.cl(q.d,$.fM(),s)
r.cy=!0}},
$S:21}
A.I.prototype={
X(){return"Direction."+this.b},
gbo(){switch(this.a){case 0:var s=B.e2
break
case 1:s=B.dY
break
case 2:s=B.e_
break
case 3:s=B.dZ
break
case 4:s=B.e3
break
case 5:s=B.e4
break
case 6:s=B.e0
break
case 7:s=B.e1
break
default:s=null}return s}}
A.a7.prototype={
X(){return"Mode."+this.b}}
A.cA.prototype={
bl(a,b,c){var s,r=a.gak()
switch(a.a){case 1:s="orange"
break
case 0:s="mediumorchid"
break
default:s=null}this.a.aN(r,s,c*3+3,b*3+3)},
bk(a){var s,r,q,p,o,n,m,l,k,j=this,i=j.a
i.bh(0,2,24,2,24)
for(s=j.b,r=0;r<8;++r)for(q=r*3+3,p=r*8,o=0;o<8;++o){n=s.a
m=$.u()
l=p+o
n=n.v(0,m.n(0,l))
k=$.o()
if(n.C(0,k)>0)j.bl(B.d,r,o)
else if(s.b.v(0,m.n(0,l)).C(0,k)>0)j.bl(B.f,r,o)
else i.aN("\u2022","lightgray",o*3+3,q)}if(a!=null){s=a.a*3+3
q=s-1
p=a.b*3+3
n=p-1
i.A("\u250c",n,q);++p
i.A("\u2510",p,q);++s
i.A("\u2514",n,s)
i.A("\u2518",p,s)}},
bj(){return this.bk(null)},
aT(){var s,r,q,p,o=this.a
o.a_(0)
for(s=A.he(new A.b6(A.w("   ___  _   _        _ _     \n  / _ \\| |_| |_  ___| | |___ \n | (_) |  _| ' \\/ -_) | / _ \\\n  \\___/ \\__|_||_\\___|_|_\\___/\n".split("\n"),t.s),new A.cB(),t.U),0,t.N),r=s.a,r=r.gu(r),s=s.b,q=new A.aK(r,s);q.m();){p=q.c
p=p>=0?new A.m(s+p,r.gq()):A.O(A.cC())
o.aN(p.b,"lightgreen",8,p.a+3)}},
ac(){var s=0,r=A.bz(t.A),q,p=this,o,n,m,l
var $async$ac=A.bA(function(a,b){if(a===1)return A.bt(b,r)
for(;;)switch(s){case 0:p.aT()
o=p.a
o.A("Select a difficulty level:",10,10)
o.A("(A) Easy",12,12)
o.G("(B) Medium",12)
o.G("(C) Hard",12)
o.G("(D) Expert",12)
n=null
case 3:if(!(n==null)){s=5
break}if(o.ay!==B.c)A.O(A.cZ("Terminal already awaiting input."))
o.ay=B.i
m=o.at
s=6
return A.N(new A.G(m,A.a0(m).i("G<1>")).gS(0),$async$ac)
case 6:l=b.b.toLowerCase()
A:{if("a"===l){m=B.dV
break A}if("b"===l){m=B.dU
break A}if("c"===l){m=B.dX
break A}if("d"===l){m=B.dW
break A}m=null
break A}case 4:n=m
s=3
break
case 5:q=n
s=1
break
case 1:return A.bu(q,r)}})
return A.bv($async$ac,r)},
ae(){var s=0,r=A.bz(t.h),q,p=this,o,n,m,l
var $async$ae=A.bA(function(a,b){if(a===1)return A.bt(b,r)
for(;;)switch(s){case 0:p.aT()
o=p.a
o.A("Select your token:",10,10)
o.A("(A) Naught (Move First)",12,12)
o.G("(B) Cross (Move Second)",12)
n=null
case 3:if(!(n==null)){s=5
break}if(o.ay!==B.c)A.O(A.cZ("Terminal already awaiting input."))
o.ay=B.i
m=o.at
s=6
return A.N(new A.G(m,A.a0(m).i("G<1>")).gS(0),$async$ae)
case 6:l=b.b.toLowerCase()
A:{if("a"===l){m=B.d
break A}if("b"===l){m=B.f
break A}m=null
break A}case 4:n=m
s=3
break
case 5:q=n
s=1
break
case 1:return A.bu(q,r)}})
return A.bv($async$ae,r)},
ad(){var s=0,r=A.bz(t.R),q,p=this,o,n,m,l,k,j
var $async$ad=A.bA(function(a,b){if(a===1)return A.bt(b,r)
for(;;)switch(s){case 0:j=p.b.gaf()
o=p.a,n=-1,m=-1
case 3:if(!!B.h.c8(j,new A.m(n,m))){s=4
break}if(o.ay!==B.c)A.O(A.cZ("Terminal already awaiting input."))
o.ay=B.r
l=o.ax
s=5
return A.N(new A.G(l,A.a0(l).i("G<1>")).gS(0),$async$ad)
case 5:k=b
n=B.a.p(k.a-3,3)
m=B.a.p(k.b-3,3)
s=3
break
case 4:q=new A.m(n,m)
s=1
break
case 1:return A.bu(q,r)}})
return A.bv($async$ad,r)},
a2(a){return this.bA(a)},
bA(a){var s=0,r=A.bz(t.n),q=this,p,o,n
var $async$a2=A.bA(function(b,c){if(b===1)return A.bt(c,r)
for(;;)switch(s){case 0:n=q.a
n.A("Game Over!",30,15)
p=q.b
if(p.d===0||p.e===0)n.cj("Othello!","yellow",30)
o=p.d
p=p.e
if(o===p)n.G("A tie!",30)
else switch(a.a){case 1:if(o>p)n.G("You win!",30)
else n.G("Computer wins!",30)
break
case 0:if(o>p)n.G("Computer wins!",30)
else n.G("You win!",30)
break}n.G("Press any key!",30)
s=2
return A.N(n.cd(),$async$a2)
case 2:return A.bu(null,r)}})
return A.bv($async$a2,r)},
bz(a){var s,r,q=this,p=a.gaL(),o=q.a
o.A("Score",30,3)
s=a.gak()
switch(a.a){case 0:r=q.b.e
break
case 1:r=q.b.d
break
default:r=null}o.A("  Human ("+s+"):    "+A.i(r)+" ",30,5)
r=p.gak()
switch(p.a){case 0:s=q.b.e
break
case 1:s=q.b.d
break
default:s=null}o.G("  Computer ("+r+"): "+A.i(s)+" ",30)},
K(){var s=0,r=A.bz(t.n),q=this,p,o,n,m,l,k,j,i,h,g
var $async$K=A.bA(function(a,b){if(a===1)return A.bt(b,r)
for(;;)switch(s){case 0:p=q.b,o=q.a,n=t.z
case 2:s=4
return A.N(q.ac(),$async$K)
case 4:m=b
s=5
return A.N(q.ae(),$async$K)
case 5:l=b
o.a_(0)
p.a=p.b=$.o()
p.d=p.e=0
p.T(B.d,3,3)
p.T(B.d,4,4)
p.T(B.f,3,4)
p.T(B.f,4,3)
p.c=B.d
q.bj()
q.bz(l)
k=!1
case 6:j=p.gaf().length===0
s=!j?9:11
break
case 9:if(p.c===l)o.A("Your move...",3,27)
else o.A("Thinking...",3,27)
s=12
return A.N(A.eQ(A.eO(100),n),$async$K)
case 12:s=p.c===l?13:15
break
case 13:s=16
return A.N(q.ad(),$async$K)
case 16:s=14
break
case 15:s=17
return A.N(A.dS(p,m),$async$K)
case 17:case 14:i=b
h=i.a
g=i.b
o.A("              ",3,27)
p.aK(h,g)
if(p.c===l)q.bk(new A.m(h,g))
else q.bj()
q.bz(l)
s=10
break
case 11:if(k){s=8
break}p.c=p.c.gaL()
case 10:case 7:k=j
s=6
break
case 8:s=18
return A.N(q.a2(l),$async$K)
case 18:s=2
break
case 3:return A.bu(null,r)}})
return A.bv($async$K,r)}}
A.cB.prototype={
$1(a){return a.length!==0},
$S:22}
A.c0.prototype={
gbt(){switch(this.c.a){case 1:var s=this.a
break
case 0:s=this.b
break
default:s=null}return s},
gaM(){switch(this.c.a){case 1:var s=this.b
break
case 0:s=this.a
break
default:s=null}return s},
T(a,b,c){var s=this,r=$.u().n(0,b*8+c)
switch(a.a){case 1:s.a=s.a.ah(0,r);++s.d
if(s.b.v(0,r).C(0,$.o())>0){--s.e
s.b=s.b.v(0,$.eC().aU(0,r))}break
case 0:s.b=s.b.ah(0,r);++s.e
if(s.a.v(0,r).C(0,$.o())>0){--s.d
s.a=s.a.v(0,$.eC().aU(0,r))}break}},
gaf(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=A.w([],t.w)
for(s=0;s<8;++s)for(r=s*8,q=0;q<8;++q)if(g.a.ah(0,g.b).v(0,$.u().n(0,r+q)).C(0,$.o())<=0){for(p=0,o=0;o<8;++o){n=B.p[o].gbo()
m=n.a
l=n.b
k=s+m
j=q+l
i=0
for(;;){h=k>=0
if(!(h&&k<8&&j>=0&&j<8&&g.gaM().v(0,$.u().n(0,k*8+j)).C(0,$.o())>0))break;++i
k+=m
j+=l}if(i>0)h=h&&k<8&&j>=0&&j<8&&g.gbt().v(0,$.u().n(0,k*8+j)).C(0,$.o())>0
else h=!1
if(h)p+=i}if(p>0)f.push(new A.m(s,q))}return f},
aK(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
i.T(i.c,a,b)
for(s=0;s<8;++s){r=B.p[s].gbo()
q=r.a
p=r.b
o=a+q
n=b+p
m=n
l=o
k=0
for(;;){j=l>=0
if(!(j&&l<8&&m>=0&&m<8&&i.gaM().v(0,$.u().n(0,l*8+m)).C(0,$.o())>0))break;++k
l+=q
m+=p}if(k>0)j=j&&l<8&&m>=0&&m<8&&i.gbt().v(0,$.u().n(0,l*8+m)).C(0,$.o())>0
else j=!1
if(j)for(;;){if(!(o>=0&&o<8&&n>=0&&n<8&&i.gaM().v(0,$.u().n(0,o*8+n)).C(0,$.o())>0))break
i.T(i.c,o,n)
o+=q
n+=p}}i.c=i.c.gaL()},
h(a){var s,r,q,p,o,n,m,l=A.w([],t.s)
for(s=0;s<8;++s)l.push(B.a.h(s))
l="  "+B.h.bm(l," ")+"\n"
for(r=0;r<8;++r){l+=""+r+" "
for(q=r*8,s=0;s<8;++s){p=q+s
o=this.a
n=$.u()
o=o.v(0,n.n(0,p))
m=$.o()
if(o.C(0,m)>0)l+="o "
else l=this.b.v(0,n.n(0,p)).C(0,m)>0?l+"x ":l+". "}l+="\n"}return l.charCodeAt(0)==0?l:l}}
A.b0.prototype={
X(){return"Player."+this.b},
gaL(){switch(this.a){case 0:var s=B.d
break
case 1:s=B.f
break
default:s=null}return s},
gak(){switch(this.a){case 0:var s="X"
break
case 1:s="O"
break
default:s=null}return s}};(function aliases(){var s=J.X.prototype
s.bC=s.h})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._static_2,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u
s(A,"j1","hF",2)
s(A,"j2","hG",2)
s(A,"j3","hH",2)
r(A,"fy","iX",0)
s(A,"j4","iP",4)
q(A,"j5","iQ",5)
p(A.l.prototype,"gb2","bN",5)
o(A.bc.prototype,"gbX","bY",0)
s(A,"fA","hQ",7)
var n
o(n=A.c6.prototype,"gaF","a0",0)
o(n,"gaD","Z",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.d,null)
q(A.d,[A.e7,J.bL,A.b2,J.bD,A.j,A.a3,A.cQ,A.F,A.al,A.cb,A.bI,A.aK,A.aH,A.av,A.bH,A.d8,A.cI,A.aG,A.bl,A.aU,A.cF,A.bR,A.bQ,A.cD,A.dB,A.di,A.J,A.cl,A.cr,A.bn,A.cc,A.E,A.at,A.cg,A.cf,A.Z,A.l,A.cd,A.cj,A.cm,A.bc,A.cp,A.dK,A.b3,A.dA,A.au,A.n,A.q,A.aD,A.dk,A.c1,A.b4,A.dl,A.cy,A.bK,A.aV,A.z,A.cq,A.c7,A.dy,A.V,A.cK,A.ak,A.am,A.ap,A.c6,A.cX,A.cA,A.c0])
q(J.bL,[J.bN,J.aM,J.aO,J.aN,J.aP,J.aj,J.a5])
q(J.aO,[J.X,J.p,A.an,A.aY])
q(J.X,[J.c2,J.a9,J.W])
r(J.bM,A.b2)
r(J.cE,J.p)
q(J.aj,[J.aL,J.bO])
q(A.j,[A.aR,A.S,A.bP,A.c9,A.c5,A.ck,A.bE,A.M,A.b5,A.c8,A.a8,A.bG])
q(A.a3,[A.cv,A.cw,A.cW,A.dU,A.dW,A.dc,A.db,A.dL,A.dw,A.cU,A.cT,A.dF,A.dh,A.d6,A.d5,A.d1,A.d2,A.d3,A.cB])
q(A.cv,[A.dZ,A.dd,A.de,A.dH,A.dG,A.cz,A.dm,A.ds,A.dr,A.dp,A.dn,A.dv,A.du,A.dt,A.cV,A.cS,A.dC,A.dN,A.dE,A.dO,A.cM,A.cN,A.cO,A.cP,A.d4,A.d_,A.d0])
q(A.F,[A.aE,A.b6,A.aJ])
q(A.aE,[A.R,A.aF,A.aT,A.aS])
q(A.R,[A.b1,A.bd])
r(A.cn,A.av)
q(A.cn,[A.m,A.co])
r(A.aI,A.bH)
r(A.b_,A.S)
q(A.cW,[A.cR,A.aC])
r(A.a6,A.aU)
r(A.aQ,A.a6)
q(A.cw,[A.dV,A.dM,A.dP,A.dx,A.cG,A.dg,A.cL])
q(A.aY,[A.bS,A.ao])
q(A.ao,[A.bf,A.bh])
r(A.bg,A.bf)
r(A.aW,A.bg)
r(A.bi,A.bh)
r(A.aX,A.bi)
q(A.aW,[A.bT,A.bU])
q(A.aX,[A.bV,A.bW,A.bX,A.bY,A.bZ,A.aZ,A.c_])
r(A.bo,A.ck)
r(A.bm,A.at)
r(A.bb,A.bm)
r(A.G,A.bb)
r(A.ch,A.cg)
r(A.ba,A.ch)
r(A.b7,A.cf)
r(A.ci,A.cj)
r(A.dD,A.dK)
r(A.bk,A.b3)
r(A.be,A.bk)
q(A.M,[A.ar,A.bJ])
r(A.cY,A.cK)
q(A.dk,[A.cH,A.as,A.I,A.a7,A.b0])
s(A.bf,A.n)
s(A.bg,A.aH)
s(A.bh,A.n)
s(A.bi,A.aH)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{b:"int",x:"double",fF:"num",A:"String",dQ:"bool",z:"Null",h:"List",d:"Object",jx:"Map",k:"JSObject"},mangledNames:{},types:["~()","z()","~(~())","z(@)","~(@)","~(d,K)","b(b,b)","b(b)","z(k)","Q<~>()","@(@)","@(@,A)","@(A)","z(~())","z(@,K)","~(b,@)","z(d,K)","~(d?,d?)","am(k)","ak(k)","A()","~(d7)","dQ(A)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.m&&a.b(c.a)&&b.b(c.b),"2;black,white":(a,b)=>c=>c instanceof A.co&&a.b(c.a)&&b.b(c.b)}}
A.i7(v.typeUniverse,JSON.parse('{"c2":"X","a9":"X","W":"X","jy":"an","bN":{"f":[]},"aM":{"f":[]},"aO":{"k":[]},"X":{"k":[]},"p":{"h":["1"],"k":[]},"bM":{"b2":[]},"cE":{"p":["1"],"h":["1"],"k":[]},"aj":{"x":[]},"aL":{"x":[],"b":[],"f":[]},"bO":{"x":[],"f":[]},"a5":{"A":[],"f":[]},"aR":{"j":[]},"aE":{"F":["1"]},"R":{"F":["1"]},"b6":{"F":["1"]},"aF":{"F":["1"]},"aJ":{"F":["+(b,1)"]},"b1":{"R":["1"],"F":["1"],"R.E":"1"},"aI":{"bH":["1","2"]},"b_":{"S":[],"j":[]},"bP":{"j":[]},"c9":{"j":[]},"bl":{"K":[]},"c5":{"j":[]},"a6":{"aU":["1","2"]},"aT":{"F":["1"]},"aS":{"F":["aV<1,2>"]},"aQ":{"a6":["1","2"],"aU":["1","2"]},"an":{"k":[],"f":[]},"aY":{"k":[]},"bS":{"k":[],"f":[]},"ao":{"B":["1"],"k":[]},"aW":{"n":["x"],"h":["x"],"B":["x"],"k":[]},"aX":{"n":["b"],"h":["b"],"B":["b"],"k":[]},"bT":{"n":["x"],"h":["x"],"B":["x"],"k":[],"f":[],"n.E":"x"},"bU":{"n":["x"],"h":["x"],"B":["x"],"k":[],"f":[],"n.E":"x"},"bV":{"n":["b"],"h":["b"],"B":["b"],"k":[],"f":[],"n.E":"b"},"bW":{"n":["b"],"h":["b"],"B":["b"],"k":[],"f":[],"n.E":"b"},"bX":{"n":["b"],"h":["b"],"B":["b"],"k":[],"f":[],"n.E":"b"},"bY":{"n":["b"],"h":["b"],"B":["b"],"k":[],"f":[],"n.E":"b"},"bZ":{"da":[],"n":["b"],"h":["b"],"B":["b"],"k":[],"f":[],"n.E":"b"},"aZ":{"n":["b"],"h":["b"],"B":["b"],"k":[],"f":[],"n.E":"b"},"c_":{"n":["b"],"h":["b"],"B":["b"],"k":[],"f":[],"n.E":"b"},"ck":{"j":[]},"bo":{"S":[],"j":[]},"bn":{"d7":[]},"E":{"j":[]},"G":{"at":["1"]},"b7":{"cf":["1"]},"l":{"Q":["1"]},"bb":{"at":["1"]},"bm":{"at":["1"]},"be":{"b3":["1"]},"bk":{"b3":["1"]},"bE":{"j":[]},"S":{"j":[]},"M":{"j":[]},"ar":{"j":[]},"bJ":{"j":[]},"b5":{"j":[]},"c8":{"j":[]},"a8":{"j":[]},"bG":{"j":[]},"c1":{"j":[]},"b4":{"j":[]},"bK":{"j":[]},"bd":{"R":["1"],"F":["1"],"R.E":"1"},"cq":{"K":[]},"hh":{"h":["b"]},"hD":{"h":["b"]},"hC":{"h":["b"]},"hf":{"h":["b"]},"hB":{"h":["b"]},"hg":{"h":["b"]},"da":{"h":["b"]},"hc":{"h":["x"]},"hd":{"h":["x"]}}'))
A.i6(v.typeUniverse,JSON.parse('{"aE":1,"cb":1,"bI":1,"aK":1,"aH":1,"bR":1,"ao":1,"bb":1,"ch":1,"cg":1,"bm":1,"cj":1,"ci":1,"cm":1,"bc":1,"cp":1,"bk":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.cu
return{o:s("V"),Q:s("j"),Z:s("jv"),V:s("p<V>"),G:s("p<h<V>>"),f:s("p<d>"),w:s("p<+(b,b)>"),s:s("p<A>"),x:s("p<da>"),b:s("p<@>"),t:s("p<b>"),T:s("aM"),m:s("k"),g:s("W"),p:s("B<@>"),W:s("ak"),j:s("h<@>"),A:s("a7"),q:s("am"),P:s("z"),K:s("d"),h:s("b0"),L:s("jA"),F:s("+()"),R:s("+(b,b)"),r:s("b1<A>"),l:s("K"),N:s("A"),E:s("d7"),B:s("f"),_:s("S"),J:s("a9"),U:s("b6<A>"),c:s("l<@>"),a:s("l<b>"),D:s("l<~>"),y:s("dQ"),i:s("x"),z:s("@"),v:s("@(d)"),C:s("@(d,K)"),S:s("b"),O:s("Q<z>?"),M:s("k?"),X:s("d?"),Y:s("A?"),u:s("dQ?"),I:s("x?"),d:s("b?"),e:s("fF?"),H:s("fF"),n:s("~"),bo:s("~(d)"),k:s("~(d,K)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.M=J.bL.prototype
B.h=J.p.prototype
B.a=J.aL.prototype
B.n=J.aj.prototype
B.o=J.a5.prototype
B.N=J.W.prototype
B.O=J.aO.prototype
B.q=J.c2.prototype
B.j=J.a9.prototype
B.t=new A.bI()
B.u=new A.bK()
B.k=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.v=function() {
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
B.A=function(getTagFallback) {
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
B.w=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.z=function(hooks) {
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
B.y=function(hooks) {
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
B.x=function(hooks) {
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

B.B=new A.c1()
B.e=new A.cQ()
B.C=new A.dy()
B.b=new A.dD()
B.D=new A.cq()
B.m=new A.aD(0)
B.E=new A.I(0,"n")
B.F=new A.I(1,"e")
B.G=new A.I(2,"s")
B.H=new A.I(3,"w")
B.I=new A.I(4,"ne")
B.J=new A.I(5,"nw")
B.K=new A.I(6,"se")
B.L=new A.I(7,"sw")
B.p=s([B.E,B.F,B.G,B.H,B.I,B.J,B.K,B.L],A.cu("p<I>"))
B.dd=s([126,129,165,129,189,153,129,126],t.t)
B.af=s([126,255,219,255,195,231,255,126],t.t)
B.dK=s([108,254,254,254,124,56,16,0],t.t)
B.ca=s([16,56,124,254,124,56,16,0],t.t)
B.b8=s([56,124,56,254,254,124,56,124],t.t)
B.bk=s([16,16,56,124,254,124,56,124],t.t)
B.aD=s([0,0,24,60,60,24,0,0],t.t)
B.aG=s([255,255,231,195,195,231,255,255],t.t)
B.aS=s([0,60,102,66,66,102,60,0],t.t)
B.cY=s([255,195,153,189,189,153,195,255],t.t)
B.dJ=s([15,7,15,125,204,204,204,120],t.t)
B.dI=s([60,102,102,102,60,24,126,24],t.t)
B.cV=s([63,51,63,48,48,112,240,224],t.t)
B.Z=s([127,99,127,99,99,103,230,192],t.t)
B.a3=s([153,90,60,231,231,60,90,153],t.t)
B.aA=s([128,224,248,254,248,224,128,0],t.t)
B.bG=s([2,14,62,254,62,14,2,0],t.t)
B.co=s([24,60,126,24,24,126,60,24],t.t)
B.ck=s([102,102,102,102,102,0,102,0],t.t)
B.cu=s([127,219,219,123,27,27,27,0],t.t)
B.cv=s([62,99,56,108,108,56,204,120],t.t)
B.bU=s([0,0,0,0,126,126,126,0],t.t)
B.bX=s([24,60,126,24,126,60,24,255],t.t)
B.U=s([24,60,126,24,24,24,24,0],t.t)
B.di=s([24,24,24,24,126,60,24,0],t.t)
B.db=s([0,24,12,254,12,24,0,0],t.t)
B.ax=s([0,48,96,254,96,48,0,0],t.t)
B.c1=s([0,0,192,192,192,254,0,0],t.t)
B.bz=s([0,36,102,255,102,36,0,0],t.t)
B.ad=s([0,24,60,126,255,255,0,0],t.t)
B.bY=s([0,255,255,126,60,24,0,0],t.t)
B.b3=s([0,0,0,0,0,0,0,0],t.t)
B.bH=s([48,120,120,48,48,0,48,0],t.t)
B.a1=s([108,108,108,0,0,0,0,0],t.t)
B.ar=s([108,108,254,108,254,108,108,0],t.t)
B.c5=s([48,124,192,120,12,248,48,0],t.t)
B.T=s([0,198,204,24,48,102,198,0],t.t)
B.cH=s([56,108,56,118,220,204,118,0],t.t)
B.aq=s([96,96,192,0,0,0,0,0],t.t)
B.Y=s([24,48,96,96,96,48,24,0],t.t)
B.bD=s([96,48,24,24,24,48,96,0],t.t)
B.cy=s([0,102,60,255,60,102,0,0],t.t)
B.dR=s([0,48,48,252,48,48,0,0],t.t)
B.c7=s([0,0,0,0,0,48,48,96],t.t)
B.by=s([0,0,0,252,0,0,0,0],t.t)
B.cm=s([0,0,0,0,0,48,48,0],t.t)
B.a8=s([6,12,24,48,96,192,128,0],t.t)
B.bb=s([124,198,206,222,246,230,124,0],t.t)
B.cp=s([48,112,48,48,48,48,252,0],t.t)
B.c3=s([120,204,12,56,96,204,252,0],t.t)
B.dM=s([120,204,12,56,12,204,120,0],t.t)
B.bF=s([28,60,108,204,254,12,30,0],t.t)
B.dc=s([252,192,248,12,12,204,120,0],t.t)
B.du=s([56,96,192,248,204,204,120,0],t.t)
B.c4=s([252,204,12,24,48,48,48,0],t.t)
B.cB=s([120,204,204,120,204,204,120,0],t.t)
B.bi=s([120,204,204,124,12,24,112,0],t.t)
B.d5=s([0,48,48,0,0,48,48,0],t.t)
B.aV=s([0,48,48,0,0,48,48,96],t.t)
B.bE=s([24,48,96,192,96,48,24,0],t.t)
B.bt=s([0,0,252,0,0,252,0,0],t.t)
B.aF=s([96,48,24,12,24,48,96,0],t.t)
B.av=s([120,204,12,24,48,0,48,0],t.t)
B.dq=s([124,198,222,222,222,192,120,0],t.t)
B.cg=s([48,120,204,204,252,204,204,0],t.t)
B.aP=s([252,102,102,124,102,102,252,0],t.t)
B.ah=s([60,102,192,192,192,102,60,0],t.t)
B.a9=s([248,108,102,102,102,108,248,0],t.t)
B.an=s([254,98,104,120,104,98,254,0],t.t)
B.cs=s([254,98,104,120,104,96,240,0],t.t)
B.at=s([60,102,192,192,206,102,62,0],t.t)
B.aw=s([204,204,204,252,204,204,204,0],t.t)
B.cQ=s([120,48,48,48,48,48,120,0],t.t)
B.bS=s([30,12,12,12,204,204,120,0],t.t)
B.bK=s([230,102,108,120,108,102,230,0],t.t)
B.bJ=s([240,96,96,96,98,102,254,0],t.t)
B.aQ=s([198,238,254,254,214,198,198,0],t.t)
B.a0=s([198,230,246,222,206,198,198,0],t.t)
B.d_=s([56,108,198,198,198,108,56,0],t.t)
B.bo=s([252,102,102,124,96,96,240,0],t.t)
B.cK=s([120,204,204,204,220,120,28,0],t.t)
B.S=s([252,102,102,124,108,102,230,0],t.t)
B.ak=s([120,204,224,112,28,204,120,0],t.t)
B.dD=s([252,180,48,48,48,48,120,0],t.t)
B.aN=s([204,204,204,204,204,204,252,0],t.t)
B.a5=s([204,204,204,204,204,120,48,0],t.t)
B.cT=s([198,198,198,214,254,238,198,0],t.t)
B.cN=s([198,198,108,56,56,108,198,0],t.t)
B.a7=s([204,204,204,120,48,48,120,0],t.t)
B.W=s([254,198,140,24,50,102,254,0],t.t)
B.bA=s([120,96,96,96,96,96,120,0],t.t)
B.cF=s([192,96,48,24,12,6,2,0],t.t)
B.bC=s([120,24,24,24,24,24,120,0],t.t)
B.dt=s([16,56,108,198,0,0,0,0],t.t)
B.R=s([0,0,0,0,0,0,0,255],t.t)
B.aO=s([48,48,24,0,0,0,0,0],t.t)
B.dj=s([0,0,120,12,124,204,118,0],t.t)
B.cj=s([224,96,96,124,102,102,220,0],t.t)
B.cM=s([0,0,120,204,192,204,120,0],t.t)
B.b9=s([28,12,12,124,204,204,118,0],t.t)
B.dw=s([0,0,120,204,252,192,120,0],t.t)
B.aT=s([56,108,96,240,96,96,240,0],t.t)
B.cJ=s([0,0,118,204,204,124,12,248],t.t)
B.aE=s([224,96,108,118,102,102,230,0],t.t)
B.cz=s([48,0,112,48,48,48,120,0],t.t)
B.bN=s([12,0,12,12,12,204,204,120],t.t)
B.bg=s([224,96,102,108,120,108,230,0],t.t)
B.bP=s([112,48,48,48,48,48,120,0],t.t)
B.bx=s([0,0,204,254,254,214,198,0],t.t)
B.bQ=s([0,0,248,204,204,204,204,0],t.t)
B.bj=s([0,0,120,204,204,204,120,0],t.t)
B.dA=s([0,0,220,102,102,124,96,240],t.t)
B.dx=s([0,0,118,204,204,124,12,30],t.t)
B.bu=s([0,0,220,118,102,96,240,0],t.t)
B.d2=s([0,0,124,192,120,12,248,0],t.t)
B.cW=s([16,48,124,48,48,52,24,0],t.t)
B.cd=s([0,0,204,204,204,204,118,0],t.t)
B.b7=s([0,0,204,204,204,120,48,0],t.t)
B.bn=s([0,0,198,214,254,254,108,0],t.t)
B.bL=s([0,0,198,108,56,108,198,0],t.t)
B.dG=s([0,0,204,204,204,124,12,248],t.t)
B.dh=s([0,0,252,152,48,100,252,0],t.t)
B.bd=s([28,48,48,224,48,48,28,0],t.t)
B.d1=s([24,24,24,0,24,24,24,0],t.t)
B.aI=s([224,48,48,28,48,48,224,0],t.t)
B.dQ=s([118,220,0,0,0,0,0,0],t.t)
B.b6=s([0,16,56,108,198,198,254,0],t.t)
B.az=s([120,204,192,204,120,24,12,120],t.t)
B.df=s([0,204,0,204,204,204,126,0],t.t)
B.dF=s([28,0,120,204,252,192,120,0],t.t)
B.c6=s([126,195,60,6,62,102,63,0],t.t)
B.am=s([204,0,120,12,124,204,126,0],t.t)
B.ba=s([224,0,120,12,124,204,126,0],t.t)
B.ac=s([48,48,120,12,124,204,126,0],t.t)
B.bq=s([0,0,120,192,192,120,12,56],t.t)
B.dp=s([126,195,60,102,126,96,60,0],t.t)
B.aR=s([204,0,120,204,252,192,120,0],t.t)
B.d3=s([224,0,120,204,252,192,120,0],t.t)
B.dg=s([204,0,112,48,48,48,120,0],t.t)
B.cU=s([124,198,56,24,24,24,60,0],t.t)
B.b2=s([224,0,112,48,48,48,120,0],t.t)
B.dL=s([198,56,108,198,254,198,198,0],t.t)
B.d0=s([48,48,0,120,204,252,204,0],t.t)
B.bI=s([28,0,252,96,120,96,252,0],t.t)
B.dE=s([0,0,127,12,127,204,127,0],t.t)
B.aW=s([62,108,204,254,204,204,206,0],t.t)
B.dy=s([120,204,0,120,204,204,120,0],t.t)
B.ai=s([0,204,0,120,204,204,120,0],t.t)
B.dN=s([0,224,0,120,204,204,120,0],t.t)
B.aU=s([120,204,0,204,204,204,126,0],t.t)
B.cX=s([0,224,0,204,204,204,126,0],t.t)
B.aC=s([0,204,0,204,204,124,12,248],t.t)
B.ao=s([195,24,60,102,102,60,24,0],t.t)
B.d9=s([204,0,204,204,204,204,120,0],t.t)
B.a2=s([24,24,126,192,192,126,24,24],t.t)
B.aL=s([56,108,100,240,96,230,252,0],t.t)
B.b4=s([204,204,120,252,48,252,48,48],t.t)
B.dk=s([248,204,204,250,198,207,198,199],t.t)
B.bT=s([14,27,24,60,24,24,216,112],t.t)
B.aH=s([28,0,120,12,124,204,126,0],t.t)
B.ci=s([56,0,112,48,48,48,120,0],t.t)
B.aK=s([0,28,0,120,204,204,120,0],t.t)
B.cC=s([0,28,0,204,204,204,126,0],t.t)
B.b_=s([0,248,0,248,204,204,204,0],t.t)
B.cS=s([252,0,204,236,252,220,204,0],t.t)
B.aj=s([60,108,108,62,0,126,0,0],t.t)
B.cf=s([56,108,108,56,0,124,0,0],t.t)
B.da=s([48,0,48,96,192,204,120,0],t.t)
B.b1=s([0,0,0,252,192,192,0,0],t.t)
B.aJ=s([0,0,0,252,12,12,0,0],t.t)
B.d4=s([195,198,204,222,51,102,204,15],t.t)
B.aB=s([195,198,204,219,55,111,207,3],t.t)
B.bW=s([24,24,0,24,24,24,24,0],t.t)
B.bV=s([0,51,102,204,102,51,0,0],t.t)
B.bf=s([0,204,102,51,102,204,0,0],t.t)
B.cE=s([34,136,34,136,34,136,34,136],t.t)
B.dz=s([85,170,85,170,85,170,85,170],t.t)
B.bO=s([219,119,219,238,219,119,219,238],t.t)
B.b5=s([24,24,24,24,24,24,24,24],t.t)
B.b0=s([24,24,24,24,248,24,24,24],t.t)
B.c2=s([24,24,248,24,248,24,24,24],t.t)
B.dP=s([54,54,54,54,246,54,54,54],t.t)
B.cq=s([0,0,0,0,254,54,54,54],t.t)
B.aX=s([0,0,248,24,248,24,24,24],t.t)
B.ag=s([54,54,246,6,246,54,54,54],t.t)
B.cw=s([54,54,54,54,54,54,54,54],t.t)
B.ce=s([0,0,254,6,246,54,54,54],t.t)
B.cA=s([54,54,246,6,254,0,0,0],t.t)
B.au=s([54,54,54,54,254,0,0,0],t.t)
B.a6=s([24,24,248,24,248,0,0,0],t.t)
B.ab=s([0,0,0,0,248,24,24,24],t.t)
B.a4=s([24,24,24,24,31,0,0,0],t.t)
B.c0=s([24,24,24,24,255,0,0,0],t.t)
B.bs=s([0,0,0,0,255,24,24,24],t.t)
B.d8=s([24,24,24,24,31,24,24,24],t.t)
B.bZ=s([0,0,0,0,255,0,0,0],t.t)
B.cx=s([24,24,24,24,255,24,24,24],t.t)
B.cI=s([24,24,31,24,31,24,24,24],t.t)
B.bh=s([54,54,54,54,55,54,54,54],t.t)
B.dv=s([54,54,55,48,63,0,0,0],t.t)
B.dn=s([0,0,63,48,55,54,54,54],t.t)
B.bM=s([54,54,247,0,255,0,0,0],t.t)
B.bB=s([0,0,255,0,247,54,54,54],t.t)
B.aZ=s([54,54,55,48,55,54,54,54],t.t)
B.aY=s([0,0,255,0,255,0,0,0],t.t)
B.dH=s([54,54,247,0,247,54,54,54],t.t)
B.cO=s([24,24,255,0,255,0,0,0],t.t)
B.P=s([54,54,54,54,255,0,0,0],t.t)
B.dB=s([0,0,255,0,255,24,24,24],t.t)
B.c8=s([0,0,0,0,255,54,54,54],t.t)
B.cr=s([54,54,54,54,63,0,0,0],t.t)
B.bw=s([24,24,31,24,31,0,0,0],t.t)
B.cl=s([0,0,31,24,31,24,24,24],t.t)
B.cL=s([0,0,0,0,63,54,54,54],t.t)
B.cR=s([54,54,54,54,255,54,54,54],t.t)
B.bR=s([24,24,255,24,255,24,24,24],t.t)
B.dl=s([24,24,24,24,248,0,0,0],t.t)
B.bc=s([0,0,0,0,31,24,24,24],t.t)
B.c9=s([255,255,255,255,255,255,255,255],t.t)
B.cc=s([0,0,0,0,255,255,255,255],t.t)
B.bm=s([240,240,240,240,240,240,240,240],t.t)
B.ct=s([15,15,15,15,15,15,15,15],t.t)
B.d7=s([255,255,255,255,0,0,0,0],t.t)
B.dO=s([0,0,118,220,200,220,118,0],t.t)
B.dr=s([0,120,204,248,204,248,192,192],t.t)
B.as=s([0,252,204,192,192,192,192,0],t.t)
B.cb=s([0,254,108,108,108,108,108,0],t.t)
B.dm=s([252,204,96,48,96,204,252,0],t.t)
B.bp=s([0,0,126,216,216,216,112,0],t.t)
B.bv=s([0,102,102,102,102,124,96,192],t.t)
B.cG=s([0,118,220,24,24,24,24,0],t.t)
B.al=s([252,48,120,204,204,120,48,252],t.t)
B.aM=s([56,108,198,254,198,108,56,0],t.t)
B.ap=s([56,108,198,198,108,108,238,0],t.t)
B.Q=s([28,48,24,124,204,204,120,0],t.t)
B.dC=s([0,0,126,219,219,126,0,0],t.t)
B.br=s([6,12,126,219,219,126,96,192],t.t)
B.ae=s([56,96,192,248,192,96,56,0],t.t)
B.cn=s([120,204,204,204,204,204,204,0],t.t)
B.cP=s([0,252,0,252,0,252,0,0],t.t)
B.aa=s([48,48,252,48,48,0,252,0],t.t)
B.be=s([96,48,24,48,96,0,252,0],t.t)
B.cZ=s([24,48,96,48,24,0,252,0],t.t)
B.bl=s([14,27,27,24,24,24,24,24],t.t)
B.de=s([24,24,24,24,24,216,216,112],t.t)
B.ch=s([48,48,0,252,0,48,48,0],t.t)
B.V=s([0,118,220,0,118,220,0,0],t.t)
B.cD=s([56,108,108,56,0,0,0,0],t.t)
B.X=s([0,0,0,24,24,0,0,0],t.t)
B.ds=s([0,0,0,0,24,0,0,0],t.t)
B.a_=s([15,12,12,12,236,108,60,28],t.t)
B.c_=s([120,108,108,108,108,0,0,0],t.t)
B.ay=s([112,24,48,96,120,0,0,0],t.t)
B.d6=s([0,0,60,60,60,60,0,0],t.t)
B.dS=new A.aI(["\u263a",B.dd,"\u263b",B.af,"\u2665",B.dK,"\u2666",B.ca,"\u2663",B.b8,"\u2660",B.bk,"\u2022",B.aD,"\u25d8",B.aG,"\u25cb",B.aS,"\u25d9",B.cY,"\u2642",B.dJ,"\u2640",B.dI,"\u266a",B.cV,"\u266b",B.Z,"\u263c",B.a3,"\u25ba",B.aA,"\u25c4",B.bG,"\u2195",B.co,"\u203c",B.ck,"\xb6",B.cu,"\xa7",B.cv,"\u25ac",B.bU,"\u21a8",B.bX,"\u2191",B.U,"\u2193",B.di,"\u2192",B.db,"\u2190",B.ax,"\u221f",B.c1,"\u2194",B.bz,"\u25b2",B.ad,"\u25bc",B.bY," ",B.b3,"!",B.bH,'"',B.a1,"#",B.ar,"$",B.c5,"%",B.T,"&",B.cH,"'",B.aq,"(",B.Y,")",B.bD,"*",B.cy,"+",B.dR,",",B.c7,"-",B.by,".",B.cm,"/",B.a8,"0",B.bb,"1",B.cp,"2",B.c3,"3",B.dM,"4",B.bF,"5",B.dc,"6",B.du,"7",B.c4,"8",B.cB,"9",B.bi,":",B.d5,";",B.aV,"<",B.bE,"=",B.bt,">",B.aF,"?",B.av,"@",B.dq,"A",B.cg,"B",B.aP,"C",B.ah,"D",B.a9,"E",B.an,"F",B.cs,"G",B.at,"H",B.aw,"I",B.cQ,"J",B.bS,"K",B.bK,"L",B.bJ,"M",B.aQ,"N",B.a0,"O",B.d_,"P",B.bo,"Q",B.cK,"R",B.S,"S",B.ak,"T",B.dD,"U",B.aN,"V",B.a5,"W",B.cT,"X",B.cN,"Y",B.a7,"Z",B.W,"[",B.bA,"\\",B.cF,"]",B.bC,"^",B.dt,"_",B.R,"`",B.aO,"a",B.dj,"b",B.cj,"c",B.cM,"d",B.b9,"e",B.dw,"f",B.aT,"g",B.cJ,"h",B.aE,"i",B.cz,"j",B.bN,"k",B.bg,"l",B.bP,"m",B.bx,"n",B.bQ,"o",B.bj,"p",B.dA,"q",B.dx,"r",B.bu,"s",B.d2,"t",B.cW,"u",B.cd,"v",B.b7,"w",B.bn,"x",B.bL,"y",B.dG,"z",B.dh,"{",B.bd,"|",B.d1,"}",B.aI,"~",B.dQ,"\u2302",B.b6,"\xc7",B.az,"\xfc",B.df,"\xe9",B.dF,"\xe2",B.c6,"\xe4",B.am,"\xe0",B.ba,"\xe5",B.ac,"\xe7",B.bq,"\xea",B.dp,"\xeb",B.aR,"\xe8",B.d3,"\xef",B.dg,"\xee",B.cU,"\xec",B.b2,"\xc4",B.dL,"\xc5",B.d0,"\xc9",B.bI,"\xe6",B.dE,"\xc6",B.aW,"\xf4",B.dy,"\xf6",B.ai,"\xf2",B.dN,"\xfb",B.aU,"\xf9",B.cX,"\xff",B.aC,"\xd6",B.ao,"\xdc",B.d9,"\xa2",B.a2,"\xa3",B.aL,"\xa5",B.b4,"\u20a7",B.dk,"\u0192",B.bT,"\xe1",B.aH,"\xed",B.ci,"\xf3",B.aK,"\xfa",B.cC,"\xf1",B.b_,"\xd1",B.cS,"\xaa",B.aj,"\xba",B.cf,"\xbf",B.da,"\u2310",B.b1,"\xac",B.aJ,"\xbd",B.d4,"\xbc",B.aB,"\xa1",B.bW,"\xab",B.bV,"\xbb",B.bf,"\u2591",B.cE,"\u2592",B.dz,"\u2593",B.bO,"\u2502",B.b5,"\u2524",B.b0,"\u2561",B.c2,"\u2562",B.dP,"\u2556",B.cq,"\u2555",B.aX,"\u2563",B.ag,"\u2551",B.cw,"\u2557",B.ce,"\u255d",B.cA,"\u255c",B.au,"\u255b",B.a6,"\u2510",B.ab,"\u2514",B.a4,"\u2534",B.c0,"\u252c",B.bs,"\u251c",B.d8,"\u2500",B.bZ,"\u253c",B.cx,"\u255e",B.cI,"\u255f",B.bh,"\u255a",B.dv,"\u2554",B.dn,"\u2569",B.bM,"\u2566",B.bB,"\u2560",B.aZ,"\u2550",B.aY,"\u256c",B.dH,"\u2567",B.cO,"\u2568",B.P,"\u2564",B.dB,"\u2565",B.c8,"\u2559",B.cr,"\u2558",B.bw,"\u2552",B.cl,"\u2553",B.cL,"\u256b",B.cR,"\u256a",B.bR,"\u2518",B.dl,"\u250c",B.bc,"\u2588",B.c9,"\u2584",B.cc,"\u258c",B.bm,"\u2590",B.ct,"\u2580",B.d7,"\u03b1",B.dO,"\xdf",B.dr,"\u0393",B.as,"\u03c0",B.cb,"\u03a3",B.dm,"\u03c3",B.bp,"\xb5",B.bv,"\u03c4",B.cG,"\u03a6",B.al,"\u0398",B.aM,"\u03a9",B.ap,"\u03b4",B.Q,"\u221e",B.dC,"\u03c6",B.br,"\u03b5",B.ae,"\u2229",B.cn,"\u2261",B.cP,"\xb1",B.aa,"\u2265",B.be,"\u2264",B.cZ,"\u2320",B.bl,"\u2321",B.de,"\xf7",B.ch,"\u2248",B.V,"\xb0",B.cD,"\u2219",B.X,"\xb7",B.ds,"\u221a",B.a_,"\u207f",B.c_,"\xb2",B.ay,"\u25a0",B.d6],A.cu("aI<A,h<b>>"))
B.dT=new A.cH(0,"replace")
B.dU=new A.a7(100,1,"medium")
B.dV=new A.a7(10,0,"easy")
B.dW=new A.a7(1500,3,"expert")
B.dX=new A.a7(500,2,"hard")
B.f=new A.b0(0,"cross")
B.d=new A.b0(1,"naught")
B.dY=new A.m(0,1)
B.dZ=new A.m(0,-1)
B.e_=new A.m(1,0)
B.e0=new A.m(1,1)
B.e1=new A.m(1,-1)
B.e2=new A.m(-1,0)
B.e3=new A.m(-1,1)
B.e4=new A.m(-1,-1)
B.c=new A.as(0,"ready")
B.i=new A.as(1,"awaitingKey")
B.e5=new A.as(2,"awaitingString")
B.r=new A.as(3,"awaitingMouseClick")
B.e6=A.L("jr")
B.e7=A.L("js")
B.e8=A.L("hc")
B.e9=A.L("hd")
B.ea=A.L("hf")
B.eb=A.L("hg")
B.ec=A.L("hh")
B.ed=A.L("d")
B.ee=A.L("hB")
B.ef=A.L("da")
B.eg=A.L("hC")
B.eh=A.L("hD")})();(function staticFields(){$.dz=null
$.D=A.w([],t.f)
$.eU=null
$.eL=null
$.eK=null
$.fE=null
$.fx=null
$.fH=null
$.dR=null
$.dX=null
$.ey=null
$.bj=A.w([],A.cu("p<h<d>?>"))
$.aw=null
$.bx=null
$.by=null
$.es=!1
$.e=B.b
$.f2=null
$.f3=null
$.f4=null
$.f5=null
$.eg=A.dj("_lastQuoRemDigits")
$.eh=A.dj("_lastQuoRemUsed")
$.b9=A.dj("_lastRemUsed")
$.ei=A.dj("_lastRem_nsh")})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"ju","fL",()=>A.dT("_$dart_dartClosure"))
s($,"jt","e0",()=>A.dT("_$dart_dartClosure_dartJSInterop"))
s($,"jX","h_",()=>B.b.bv(new A.dZ()))
s($,"jV","fZ",()=>A.w([new J.bM()],A.cu("p<b2>")))
s($,"jE","fO",()=>A.T(A.d9({
toString:function(){return"$receiver$"}})))
s($,"jF","fP",()=>A.T(A.d9({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"jG","fQ",()=>A.T(A.d9(null)))
s($,"jH","fR",()=>A.T(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"jK","fU",()=>A.T(A.d9(void 0)))
s($,"jL","fV",()=>A.T(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"jJ","fT",()=>A.T(A.f_(null)))
s($,"jI","fS",()=>A.T(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"jN","fX",()=>A.T(A.f_(void 0)))
s($,"jM","fW",()=>A.T(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"jO","eD",()=>A.hE())
s($,"jw","e1",()=>$.h_())
s($,"jT","o",()=>A.b8(0))
s($,"jS","u",()=>A.b8(1))
s($,"jQ","eF",()=>$.u().J(0))
s($,"jP","eE",()=>A.b8(1e4))
r($,"jR","fY",()=>A.hv("^\\s*([+-]?)((0x[a-f0-9]+)|(\\d+)|([a-z0-9]+))\\s*$",!1))
s($,"jU","e2",()=>A.eB(B.ed))
s($,"jD","fN",()=>A.e9(8,0,t.S))
s($,"jC","fM",()=>A.e9(8,255,t.S))
s($,"jz","eC",()=>{var q="FFFFFFFFFFFFFFFF",p=A.hO(q,16)
if(p==null)A.O(A.eP("Could not parse BigInt",q))
return p})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.an,SharedArrayBuffer:A.an,ArrayBufferView:A.aY,DataView:A.bS,Float32Array:A.bT,Float64Array:A.bU,Int16Array:A.bV,Int32Array:A.bW,Int8Array:A.bX,Uint16Array:A.bY,Uint32Array:A.bZ,Uint8ClampedArray:A.aZ,CanvasPixelArray:A.aZ,Uint8Array:A.c_})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.ao.$nativeSuperclassTag="ArrayBufferView"
A.bf.$nativeSuperclassTag="ArrayBufferView"
A.bg.$nativeSuperclassTag="ArrayBufferView"
A.aW.$nativeSuperclassTag="ArrayBufferView"
A.bh.$nativeSuperclassTag="ArrayBufferView"
A.bi.$nativeSuperclassTag="ArrayBufferView"
A.aX.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.jl
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=othello.js.map
