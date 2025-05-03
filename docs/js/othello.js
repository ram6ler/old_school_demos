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
if(a[b]!==s){A.j8(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.eu(b)
return new s(c,this)}:function(){if(s===null)s=A.eu(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.eu(a).prototype
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
ex(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.ey==null){A.iZ()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.c(A.f_("Return interceptor for "+A.k(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.dx
if(o==null)o=$.dx=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.j3(a)
if(p!=null)return p
if(typeof a=="function")return B.O
s=Object.getPrototypeOf(a)
if(s==null)return B.A
if(s===Object.prototype)return B.A
if(typeof q=="function"){o=$.dx
if(o==null)o=$.dx=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.k,enumerable:false,writable:true,configurable:true})
return B.k}return B.k},
eS(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
hc(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.eS(r))break;++b}return b},
hd(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.b(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.eS(q))break}return b},
ah(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aP.prototype
return J.bK.prototype}if(typeof a=="string")return J.a9.prototype
if(a==null)return J.aQ.prototype
if(typeof a=="boolean")return J.bJ.prototype
if(Array.isArray(a))return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.X.prototype
if(typeof a=="symbol")return J.aT.prototype
if(typeof a=="bigint")return J.aR.prototype
return a}if(a instanceof A.e)return a
return J.ex(a)},
ew(a){if(typeof a=="string")return J.a9.prototype
if(a==null)return a
if(Array.isArray(a))return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.X.prototype
if(typeof a=="symbol")return J.aT.prototype
if(typeof a=="bigint")return J.aR.prototype
return a}if(a instanceof A.e)return a
return J.ex(a)},
iS(a){if(a==null)return a
if(Array.isArray(a))return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.X.prototype
if(typeof a=="symbol")return J.aT.prototype
if(typeof a=="bigint")return J.aR.prototype
return a}if(a instanceof A.e)return a
return J.ex(a)},
iT(a){if(typeof a=="number")return J.ak.prototype
if(a==null)return a
if(!(a instanceof A.e))return J.ad.prototype
return a},
iU(a){if(typeof a=="string")return J.a9.prototype
if(a==null)return a
if(!(a instanceof A.e))return J.ad.prototype
return a},
aj(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ah(a).J(a,b)},
O(a){return J.ah(a).gk(a)},
eI(a){return J.iS(a).gu(a)},
e_(a){return J.ew(a).gl(a)},
fU(a){return J.ah(a).gt(a)},
eJ(a){return J.iT(a).cq(a)},
bz(a){return J.ah(a).h(a)},
fV(a){return J.iU(a).cr(a)},
bI:function bI(){},
bJ:function bJ(){},
aQ:function aQ(){},
aS:function aS(){},
Y:function Y(){},
c_:function c_(){},
ad:function ad(){},
X:function X(){},
aR:function aR(){},
aT:function aT(){},
t:function t(a){this.$ti=a},
cC:function cC(a){this.$ti=a},
bA:function bA(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ak:function ak(){},
aP:function aP(){},
bK:function bK(){},
a9:function a9(){}},A={e3:function e3(){},
hf(a){return new A.am("Field '"+a+"' has not been initialized.")},
Z(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
ea(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
et(a,b,c){return a},
ez(a){var s,r
for(s=$.D.length,r=0;r<s;++r)if(a===$.D[r])return!0
return!1},
h7(a,b,c){return new A.aN(a,b,c.i("aN<0>"))},
cA(){return new A.au("No element")},
am:function am(a){this.a=a},
dV:function dV(){},
cN:function cN(){},
aJ:function aJ(){},
ab:function ab(){},
an:function an(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
b8:function b8(a,b,c){this.a=a
this.b=b
this.$ti=c},
c7:function c7(a,b){this.a=a
this.b=b},
aN:function aN(a,b,c){this.a=a
this.b=b
this.$ti=c},
aO:function aO(a,b){this.a=a
this.b=b
this.c=-1},
aL:function aL(){},
b4:function b4(a,b){this.a=a
this.$ti=b},
fF(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
jR(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
k(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.bz(a)
return s},
ar(a){var s,r=$.eT
if(r==null)r=$.eT=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
cH(a){return A.hj(a)},
hj(a){var s,r,q,p
if(a instanceof A.e)return A.B(A.bx(a),null)
s=J.ah(a)
if(s===B.N||s===B.P||t.J.b(a)){r=B.l(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.B(A.bx(a),null)},
eU(a){if(a==null||typeof a=="number"||A.eo(a))return J.bz(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.a7)return a.h(0)
if(a instanceof A.ax)return a.bf(!0)
return"Instance of '"+A.cH(a)+"'"},
hk(a){var s=a.$thrownJsError
if(s==null)return null
return A.N(s)},
b(a,b){if(a==null)J.e_(a)
throw A.c(A.fA(a,b))},
fA(a,b){var s,r="index"
if(!A.fq(b))return new A.J(!0,b,r,null)
s=J.e_(a)
if(b<0||b>=s)return A.eR(b,s,a,r)
return new A.as(null,null,!0,b,r,"Value not in range")},
er(a){return new A.J(!0,a,null,null)},
c(a){return A.fC(new Error(),a)},
fC(a,b){var s
if(b==null)b=new A.Q()
a.dartException=b
s=A.j9
if("defineProperty" in Object){Object.defineProperty(a,"message",{get:s})
a.name=""}else a.toString=s
return a},
j9(){return J.bz(this.dartException)},
a4(a){throw A.c(a)},
eD(a,b){throw A.fC(b,a)},
x(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.eD(A.ia(a,b,c),s)},
ia(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.b7("'"+s+"': Cannot "+o+" "+l+k+n)},
dW(a){throw A.c(A.a8(a))},
R(a){var s,r,q,p,o,n
a=A.j6(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.a([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.d3(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
d4(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
eZ(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
e4(a,b){var s=b==null,r=s?null:b.method
return new A.bL(a,r,s?null:b.receiver)},
V(a){if(a==null)return new A.cF(a)
if(a instanceof A.aK)return A.a3(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.a3(a,a.dartException)
return A.iH(a)},
a3(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
iH(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.a.aa(r,16)&8191)===10)switch(q){case 438:return A.a3(a,A.e4(A.k(s)+" (Error "+q+")",null))
case 445:case 5007:A.k(s)
return A.a3(a,new A.b2())}}if(a instanceof TypeError){p=$.fI()
o=$.fJ()
n=$.fK()
m=$.fL()
l=$.fO()
k=$.fP()
j=$.fN()
$.fM()
i=$.fR()
h=$.fQ()
g=p.I(s)
if(g!=null)return A.a3(a,A.e4(s,g))
else{g=o.I(s)
if(g!=null){g.method="call"
return A.a3(a,A.e4(s,g))}else if(n.I(s)!=null||m.I(s)!=null||l.I(s)!=null||k.I(s)!=null||j.I(s)!=null||m.I(s)!=null||i.I(s)!=null||h.I(s)!=null)return A.a3(a,new A.b2())}return A.a3(a,new A.c5(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.b6()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.a3(a,new A.J(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.b6()
return a},
N(a){var s
if(a instanceof A.aK)return a.b
if(a==null)return new A.bm(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.bm(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
eB(a){if(a==null)return J.O(a)
if(typeof a=="object")return A.ar(a)
return J.O(a)},
iN(a){if(typeof a=="number")return B.w.gk(a)
if(a instanceof A.co)return A.ar(a)
if(a instanceof A.ax)return a.gk(a)
return A.eB(a)},
iR(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.ag(0,a[s],a[r])}return b},
ik(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.c(A.bF("Unsupported number of arguments for wrapped closure"))},
cs(a,b){var s=a.$identity
if(!!s)return s
s=A.iO(a,b)
a.$identity=s
return s},
iO(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.ik)},
h1(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.cO().constructor.prototype):Object.create(new A.aH(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.eO(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.fY(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.eO(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
fY(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.c("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.fW)}throw A.c("Error in functionType of tearoff")},
fZ(a,b,c,d){var s=A.eN
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
eO(a,b,c,d){if(c)return A.h0(a,b,d)
return A.fZ(b.length,d,a,b)},
h_(a,b,c,d){var s=A.eN,r=A.fX
switch(b?-1:a){case 0:throw A.c(new A.c1("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
h0(a,b,c){var s,r
if($.eL==null)$.eL=A.eK("interceptor")
if($.eM==null)$.eM=A.eK("receiver")
s=b.length
r=A.h_(s,c,a,b)
return r},
eu(a){return A.h1(a)},
fW(a,b){return A.bt(v.typeUniverse,A.bx(a.a),b)},
eN(a){return a.a},
fX(a){return a.b},
eK(a){var s,r,q,p=new A.aH("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.c(A.a5("Field name "+a+" not found.",null))},
jT(a){throw A.c(new A.ce(a))},
iV(a){return v.getIsolateTag(a)},
j3(a){var s,r,q,p,o,n=$.fB.$1(a),m=$.dN[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.dS[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.fx.$2(a,n)
if(q!=null){m=$.dN[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.dS[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.dU(s)
$.dN[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.dS[n]=s
return s}if(p==="-"){o=A.dU(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.fD(a,s)
if(p==="*")throw A.c(A.f_(n))
if(v.leafTags[n]===true){o=A.dU(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.fD(a,s)},
fD(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.eA(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
dU(a){return J.eA(a,!1,null,!!a.$iC)},
j4(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.dU(s)
else return J.eA(s,c,null,null)},
iZ(){if(!0===$.ey)return
$.ey=!0
A.j_()},
j_(){var s,r,q,p,o,n,m,l
$.dN=Object.create(null)
$.dS=Object.create(null)
A.iY()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.fE.$1(o)
if(n!=null){m=A.j4(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
iY(){var s,r,q,p,o,n,m=B.D()
m=A.aG(B.E,A.aG(B.F,A.aG(B.m,A.aG(B.m,A.aG(B.G,A.aG(B.H,A.aG(B.I(B.l),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.fB=new A.dP(p)
$.fx=new A.dQ(o)
$.fE=new A.dR(n)},
aG(a,b){return a(b)||b},
iP(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
he(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw A.c(A.eQ("Illegal RegExp pattern ("+String(n)+")",a))},
j6(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
m:function m(a,b){this.a=a
this.b=b},
cl:function cl(a,b){this.a=a
this.b=b},
bE:function bE(){},
aM:function aM(a,b){this.a=a
this.$ti=b},
d3:function d3(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
b2:function b2(){},
bL:function bL(a,b,c){this.a=a
this.b=b
this.c=c},
c5:function c5(a){this.a=a},
cF:function cF(a){this.a=a},
aK:function aK(a,b){this.a=a
this.b=b},
bm:function bm(a){this.a=a
this.b=null},
a7:function a7(){},
ct:function ct(){},
cu:function cu(){},
cT:function cT(){},
cO:function cO(){},
aH:function aH(a,b){this.a=a
this.b=b},
ce:function ce(a){this.a=a},
c1:function c1(a){this.a=a},
aa:function aa(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cD:function cD(a,b){this.a=a
this.b=b
this.c=null},
aW:function aW(a,b){this.a=a
this.$ti=b},
bN:function bN(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
aV:function aV(a,b){this.a=a
this.$ti=b},
bM:function bM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aU:function aU(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dP:function dP(a){this.a=a},
dQ:function dQ(a){this.a=a},
dR:function dR(a){this.a=a},
ax:function ax(){},
ck:function ck(){},
cB:function cB(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dz:function dz(a){this.b=a},
j8(a){A.eD(new A.am("Field '"+a+"' has been assigned during initialization."),new Error())},
ai(){A.eD(new A.am("Field '' has not been initialized."),new Error())},
de(a){var s=new A.dd(a)
return s.b=s},
dd:function dd(a){this.a=a
this.b=null},
af(a,b,c){if(a>>>0!==a||a>=c)throw A.c(A.fA(b,a))},
bO:function bO(){},
b0:function b0(){},
bP:function bP(){},
ap:function ap(){},
aZ:function aZ(){},
b_:function b_(){},
bQ:function bQ(){},
bR:function bR(){},
bS:function bS(){},
bT:function bT(){},
bU:function bU(){},
bV:function bV(){},
bW:function bW(){},
b1:function b1(){},
bX:function bX(){},
bg:function bg(){},
bh:function bh(){},
bi:function bi(){},
bj:function bj(){},
eV(a,b){var s=b.c
return s==null?b.c=A.el(a,b.x,!0):s},
e7(a,b){var s=b.c
return s==null?b.c=A.br(a,"P",[b.x]):s},
eW(a){var s=a.w
if(s===6||s===7||s===8)return A.eW(a.x)
return s===12||s===13},
hp(a){return a.as},
dO(a){return A.cp(v.typeUniverse,a,!1)},
a2(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.a2(a1,s,a3,a4)
if(r===s)return a2
return A.fh(a1,r,!0)
case 7:s=a2.x
r=A.a2(a1,s,a3,a4)
if(r===s)return a2
return A.el(a1,r,!0)
case 8:s=a2.x
r=A.a2(a1,s,a3,a4)
if(r===s)return a2
return A.ff(a1,r,!0)
case 9:q=a2.y
p=A.aE(a1,q,a3,a4)
if(p===q)return a2
return A.br(a1,a2.x,p)
case 10:o=a2.x
n=A.a2(a1,o,a3,a4)
m=a2.y
l=A.aE(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.ej(a1,n,l)
case 11:k=a2.x
j=a2.y
i=A.aE(a1,j,a3,a4)
if(i===j)return a2
return A.fg(a1,k,i)
case 12:h=a2.x
g=A.a2(a1,h,a3,a4)
f=a2.y
e=A.iE(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.fe(a1,g,e)
case 13:d=a2.y
a4+=d.length
c=A.aE(a1,d,a3,a4)
o=a2.x
n=A.a2(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.ek(a1,n,c,!0)
case 14:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.c(A.bC("Attempted to substitute unexpected RTI kind "+a0))}},
aE(a,b,c,d){var s,r,q,p,o=b.length,n=A.dG(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.a2(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
iF(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.dG(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.a2(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
iE(a,b,c,d){var s,r=b.a,q=A.aE(a,r,c,d),p=b.b,o=A.aE(a,p,c,d),n=b.c,m=A.iF(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.ci()
s.a=q
s.b=o
s.c=m
return s},
a(a,b){a[v.arrayRti]=b
return a},
fz(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.iX(s)
return a.$S()}return null},
j0(a,b){var s
if(A.eW(b))if(a instanceof A.a7){s=A.fz(a)
if(s!=null)return s}return A.bx(a)},
bx(a){if(a instanceof A.e)return A.a1(a)
if(Array.isArray(a))return A.em(a)
return A.en(J.ah(a))},
em(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
a1(a){var s=a.$ti
return s!=null?s:A.en(a)},
en(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.ii(a,s)},
ii(a,b){var s=a instanceof A.a7?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.i1(v.typeUniverse,s.name)
b.$ccache=r
return r},
iX(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.cp(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
iW(a){return A.ag(A.a1(a))},
eq(a){var s
if(a instanceof A.ax)return A.iQ(a.$r,a.b8())
s=a instanceof A.a7?A.fz(a):null
if(s!=null)return s
if(t.I.b(a))return J.fU(a).a
if(Array.isArray(a))return A.em(a)
return A.bx(a)},
ag(a){var s=a.r
return s==null?a.r=A.fl(a):s},
fl(a){var s,r,q=a.as,p=q.replace(/\*/g,"")
if(p===q)return a.r=new A.co(a)
s=A.cp(v.typeUniverse,p,!0)
r=s.r
return r==null?s.r=A.fl(s):r},
iQ(a,b){var s,r,q=b,p=q.length
if(p===0)return t.F
if(0>=p)return A.b(q,0)
s=A.bt(v.typeUniverse,A.eq(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.b(q,r)
s=A.fi(v.typeUniverse,s,A.eq(q[r]))}return A.bt(v.typeUniverse,s,a)},
I(a){return A.ag(A.cp(v.typeUniverse,a,!1))},
ih(a){var s,r,q,p,o,n,m=this
if(m===t.K)return A.T(m,a,A.iq)
if(!A.U(m))s=m===t._
else s=!0
if(s)return A.T(m,a,A.iu)
s=m.w
if(s===7)return A.T(m,a,A.ie)
if(s===1)return A.T(m,a,A.fr)
r=s===6?m.x:m
q=r.w
if(q===8)return A.T(m,a,A.il)
if(r===t.S)p=A.fq
else if(r===t.i||r===t.n)p=A.ip
else if(r===t.N)p=A.is
else p=r===t.y?A.eo:null
if(p!=null)return A.T(m,a,p)
if(q===9){o=r.x
if(r.y.every(A.j1)){m.f="$i"+o
if(o==="j")return A.T(m,a,A.io)
return A.T(m,a,A.it)}}else if(q===11){n=A.iP(r.x,r.y)
return A.T(m,a,n==null?A.fr:n)}return A.T(m,a,A.ic)},
T(a,b,c){a.b=c
return a.b(b)},
ig(a){var s,r=this,q=A.ib
if(!A.U(r))s=r===t._
else s=!0
if(s)q=A.i4
else if(r===t.K)q=A.i3
else{s=A.by(r)
if(s)q=A.id}r.a=q
return r.a(a)},
cq(a){var s=a.w,r=!0
if(!A.U(a))if(!(a===t._))if(!(a===t.A))if(s!==7)if(!(s===6&&A.cq(a.x)))r=s===8&&A.cq(a.x)||a===t.P||a===t.T
return r},
ic(a){var s=this
if(a==null)return A.cq(s)
return A.j2(v.typeUniverse,A.j0(a,s),s)},
ie(a){if(a==null)return!0
return this.x.b(a)},
it(a){var s,r=this
if(a==null)return A.cq(r)
s=r.f
if(a instanceof A.e)return!!a[s]
return!!J.ah(a)[s]},
io(a){var s,r=this
if(a==null)return A.cq(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.e)return!!a[s]
return!!J.ah(a)[s]},
ib(a){var s=this
if(a==null){if(A.by(s))return a}else if(s.b(a))return a
A.fm(a,s)},
id(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.fm(a,s)},
fm(a,b){throw A.c(A.hT(A.f8(a,A.B(b,null))))},
f8(a,b){return A.cv(a)+": type '"+A.B(A.eq(a),null)+"' is not a subtype of type '"+b+"'"},
hT(a){return new A.bp("TypeError: "+a)},
z(a,b){return new A.bp("TypeError: "+A.f8(a,b))},
il(a){var s=this,r=s.w===6?s.x:s
return r.x.b(a)||A.e7(v.typeUniverse,r).b(a)},
iq(a){return a!=null},
i3(a){if(a!=null)return a
throw A.c(A.z(a,"Object"))},
iu(a){return!0},
i4(a){return a},
fr(a){return!1},
eo(a){return!0===a||!1===a},
jB(a){if(!0===a)return!0
if(!1===a)return!1
throw A.c(A.z(a,"bool"))},
jD(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.c(A.z(a,"bool"))},
jC(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.c(A.z(a,"bool?"))},
jE(a){if(typeof a=="number")return a
throw A.c(A.z(a,"double"))},
jG(a){if(typeof a=="number")return a
if(a==null)return a
throw A.c(A.z(a,"double"))},
jF(a){if(typeof a=="number")return a
if(a==null)return a
throw A.c(A.z(a,"double?"))},
fq(a){return typeof a=="number"&&Math.floor(a)===a},
jH(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.c(A.z(a,"int"))},
jJ(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.c(A.z(a,"int"))},
jI(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.c(A.z(a,"int?"))},
ip(a){return typeof a=="number"},
jK(a){if(typeof a=="number")return a
throw A.c(A.z(a,"num"))},
jM(a){if(typeof a=="number")return a
if(a==null)return a
throw A.c(A.z(a,"num"))},
jL(a){if(typeof a=="number")return a
if(a==null)return a
throw A.c(A.z(a,"num?"))},
is(a){return typeof a=="string"},
jN(a){if(typeof a=="string")return a
throw A.c(A.z(a,"String"))},
jP(a){if(typeof a=="string")return a
if(a==null)return a
throw A.c(A.z(a,"String"))},
jO(a){if(typeof a=="string")return a
if(a==null)return a
throw A.c(A.z(a,"String?"))},
fu(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.B(a[q],b)
return s},
iz(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.fu(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.B(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
fn(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", ",a3=null
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
if(!l)n+=" extends "+A.B(j,a5)}n+=">"}else n=""
p=a4.x
h=a4.y
g=h.a
f=g.length
e=h.b
d=e.length
c=h.c
b=c.length
a=A.B(p,a5)
for(a0="",a1="",q=0;q<f;++q,a1=a2)a0+=a1+A.B(g[q],a5)
if(d>0){a0+=a1+"["
for(a1="",q=0;q<d;++q,a1=a2)a0+=a1+A.B(e[q],a5)
a0+="]"}if(b>0){a0+=a1+"{"
for(a1="",q=0;q<b;q+=3,a1=a2){a0+=a1
if(c[q+1])a0+="required "
a0+=A.B(c[q+2],a5)+" "+c[q]}a0+="}"}if(a3!=null){a5.toString
a5.length=a3}return n+"("+a0+") => "+a},
B(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6)return A.B(a.x,b)
if(l===7){s=a.x
r=A.B(s,b)
q=s.w
return(q===12||q===13?"("+r+")":r)+"?"}if(l===8)return"FutureOr<"+A.B(a.x,b)+">"
if(l===9){p=A.iG(a.x)
o=a.y
return o.length>0?p+("<"+A.fu(o,b)+">"):p}if(l===11)return A.iz(a,b)
if(l===12)return A.fn(a,b,null)
if(l===13)return A.fn(a.x,b,a.y)
if(l===14){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.b(b,n)
return b[n]}return"?"},
iG(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
i2(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
i1(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.cp(a,b,!1)
else if(typeof m=="number"){s=m
r=A.bs(a,5,"#")
q=A.dG(s)
for(p=0;p<s;++p)q[p]=r
o=A.br(a,b,q)
n[b]=o
return o}else return m},
i0(a,b){return A.fj(a.tR,b)},
i_(a,b){return A.fj(a.eT,b)},
cp(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.fc(A.fa(a,null,b,c))
r.set(b,s)
return s},
bt(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.fc(A.fa(a,b,c,!0))
q.set(c,r)
return r},
fi(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.ej(a,b,c.w===10?c.y:[c])
p.set(s,q)
return q},
S(a,b){b.a=A.ig
b.b=A.ih
return b},
bs(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.E(null,null)
s.w=b
s.as=c
r=A.S(a,s)
a.eC.set(c,r)
return r},
fh(a,b,c){var s,r=b.as+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.hY(a,b,r,c)
a.eC.set(r,s)
return s},
hY(a,b,c,d){var s,r,q
if(d){s=b.w
if(!A.U(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.E(null,null)
q.w=6
q.x=b
q.as=c
return A.S(a,q)},
el(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.hX(a,b,r,c)
a.eC.set(r,s)
return s},
hX(a,b,c,d){var s,r,q,p
if(d){s=b.w
r=!0
if(!A.U(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.by(b.x)
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.x
if(q.w===8&&A.by(q.x))return q
else return A.eV(a,b)}}p=new A.E(null,null)
p.w=7
p.x=b
p.as=c
return A.S(a,p)},
ff(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.hV(a,b,r,c)
a.eC.set(r,s)
return s},
hV(a,b,c,d){var s,r
if(d){s=b.w
if(A.U(b)||b===t.K||b===t._)return b
else if(s===1)return A.br(a,"P",[b])
else if(b===t.P||b===t.T)return t.O}r=new A.E(null,null)
r.w=8
r.x=b
r.as=c
return A.S(a,r)},
hZ(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.E(null,null)
s.w=14
s.x=b
s.as=q
r=A.S(a,s)
a.eC.set(q,r)
return r},
bq(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
hU(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
br(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.bq(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.E(null,null)
r.w=9
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.S(a,r)
a.eC.set(p,q)
return q},
ej(a,b,c){var s,r,q,p,o,n
if(b.w===10){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.bq(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.E(null,null)
o.w=10
o.x=s
o.y=r
o.as=q
n=A.S(a,o)
a.eC.set(q,n)
return n},
fg(a,b,c){var s,r,q="+"+(b+"("+A.bq(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.E(null,null)
s.w=11
s.x=b
s.y=c
s.as=q
r=A.S(a,s)
a.eC.set(q,r)
return r},
fe(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.bq(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.bq(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.hU(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.E(null,null)
p.w=12
p.x=b
p.y=c
p.as=r
o=A.S(a,p)
a.eC.set(r,o)
return o},
ek(a,b,c,d){var s,r=b.as+("<"+A.bq(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.hW(a,b,c,r,d)
a.eC.set(r,s)
return s},
hW(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.dG(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.a2(a,b,r,0)
m=A.aE(a,c,r,0)
return A.ek(a,n,m,c!==m)}}l=new A.E(null,null)
l.w=13
l.x=b
l.y=c
l.as=d
return A.S(a,l)},
fa(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
fc(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.hM(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.fb(a,r,l,k,!1)
else if(q===46)r=A.fb(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.a0(a.u,a.e,k.pop()))
break
case 94:k.push(A.hZ(a.u,k.pop()))
break
case 35:k.push(A.bs(a.u,5,"#"))
break
case 64:k.push(A.bs(a.u,2,"@"))
break
case 126:k.push(A.bs(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.hO(a,k)
break
case 38:A.hN(a,k)
break
case 42:p=a.u
k.push(A.fh(p,A.a0(p,a.e,k.pop()),a.n))
break
case 63:p=a.u
k.push(A.el(p,A.a0(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.ff(p,A.a0(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.hL(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.fd(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.hQ(a.u,a.e,o)
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
hM(a,b,c,d){var s,r,q=b-48
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
if(o.w===10)o=o.x
n=A.i2(s,o.x)[p]
if(n==null)A.a4('No "'+p+'" in "'+A.hp(o)+'"')
d.push(A.bt(s,o,n))}else d.push(p)
return m},
hO(a,b){var s,r=a.u,q=A.f9(a,b),p=b.pop()
if(typeof p=="string")b.push(A.br(r,p,q))
else{s=A.a0(r,a.e,p)
switch(s.w){case 12:b.push(A.ek(r,s,q,a.n))
break
default:b.push(A.ej(r,s,q))
break}}},
hL(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.f9(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.a0(p,a.e,o)
q=new A.ci()
q.a=s
q.b=n
q.c=m
b.push(A.fe(p,r,q))
return
case-4:b.push(A.fg(p,b.pop(),s))
return
default:throw A.c(A.bC("Unexpected state under `()`: "+A.k(o)))}},
hN(a,b){var s=b.pop()
if(0===s){b.push(A.bs(a.u,1,"0&"))
return}if(1===s){b.push(A.bs(a.u,4,"1&"))
return}throw A.c(A.bC("Unexpected extended operation "+A.k(s)))},
f9(a,b){var s=b.splice(a.p)
A.fd(a.u,a.e,s)
a.p=b.pop()
return s},
a0(a,b,c){if(typeof c=="string")return A.br(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.hP(a,b,c)}else return c},
fd(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.a0(a,b,c[s])},
hQ(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.a0(a,b,c[s])},
hP(a,b,c){var s,r,q=b.w
if(q===10){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==9)throw A.c(A.bC("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.c(A.bC("Bad index "+c+" for "+b.h(0)))},
j2(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.q(a,b,null,c,null,!1)?1:0
r.set(c,s)}if(0===s)return!1
if(1===s)return!0
return!0},
q(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(!A.U(d))s=d===t._
else s=!0
if(s)return!0
r=b.w
if(r===4)return!0
if(A.U(b))return!1
s=b.w
if(s===1)return!0
q=r===14
if(q)if(A.q(a,c[b.x],c,d,e,!1))return!0
p=d.w
s=b===t.P||b===t.T
if(s){if(p===8)return A.q(a,b,c,d.x,e,!1)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return A.q(a,b.x,c,d,e,!1)
if(r===6)return A.q(a,b.x,c,d,e,!1)
return r!==7}if(r===6)return A.q(a,b.x,c,d,e,!1)
if(p===6){s=A.eV(a,d)
return A.q(a,b,c,s,e,!1)}if(r===8){if(!A.q(a,b.x,c,d,e,!1))return!1
return A.q(a,A.e7(a,b),c,d,e,!1)}if(r===7){s=A.q(a,t.P,c,d,e,!1)
return s&&A.q(a,b.x,c,d,e,!1)}if(p===8){if(A.q(a,b,c,d.x,e,!1))return!0
return A.q(a,b,c,A.e7(a,d),e,!1)}if(p===7){s=A.q(a,b,c,t.P,e,!1)
return s||A.q(a,b,c,d.x,e,!1)}if(q)return!1
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
if(!A.q(a,j,c,i,e,!1)||!A.q(a,i,e,j,c,!1))return!1}return A.fp(a,b.x,c,d.x,e,!1)}if(p===12){if(b===t.g)return!0
if(s)return!1
return A.fp(a,b,c,d,e,!1)}if(r===9){if(p!==9)return!1
return A.im(a,b,c,d,e,!1)}if(o&&p===11)return A.ir(a,b,c,d,e,!1)
return!1},
fp(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.q(a3,a4.x,a5,a6.x,a7,!1))return!1
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
if(!A.q(a3,p[h],a7,g,a5,!1))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.q(a3,p[o+h],a7,g,a5,!1))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.q(a3,k[h],a7,g,a5,!1))return!1}f=s.c
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
if(!A.q(a3,e[a+2],a7,g,a5,!1))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
im(a,b,c,d,e,f){var s,r,q,p,o,n=b.x,m=d.x
for(;n!==m;){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.bt(a,b,r[o])
return A.fk(a,p,null,c,d.y,e,!1)}return A.fk(a,b.y,null,c,d.y,e,!1)},
fk(a,b,c,d,e,f,g){var s,r=b.length
for(s=0;s<r;++s)if(!A.q(a,b[s],d,e[s],f,!1))return!1
return!0},
ir(a,b,c,d,e,f){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.q(a,r[s],c,q[s],e,!1))return!1
return!0},
by(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.U(a))if(s!==7)if(!(s===6&&A.by(a.x)))r=s===8&&A.by(a.x)
return r},
j1(a){var s
if(!A.U(a))s=a===t._
else s=!0
return s},
U(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
fj(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
dG(a){return a>0?new Array(a):v.typeUniverse.sEA},
E:function E(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
ci:function ci(){this.c=this.b=this.a=null},
co:function co(a){this.a=a},
ch:function ch(){},
bp:function bp(a){this.a=a},
hy(){var s,r,q
if(self.scheduleImmediate!=null)return A.iI()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.cs(new A.d7(s),1)).observe(r,{childList:true})
return new A.d6(s,r,q)}else if(self.setImmediate!=null)return A.iJ()
return A.iK()},
hz(a){self.scheduleImmediate(A.cs(new A.d8(a),0))},
hA(a){self.setImmediate(A.cs(new A.d9(a),0))},
hB(a){A.eb(B.M,a)},
eb(a,b){var s=B.a.n(a.a,1000)
return A.hR(s,b)},
eY(a,b){var s=B.a.n(a.a,1000)
return A.hS(s,b)},
hR(a,b){var s=new A.bo()
s.bG(a,b)
return s},
hS(a,b){var s=new A.bo()
s.bH(a,b)
return s},
aB(a){return new A.c8(new A.l($.f,a.i("l<0>")),a.i("c8<0>"))},
aA(a,b){a.$2(0,null)
b.b=!0
return b.a},
M(a,b){A.i5(a,b)},
az(a,b){var s,r=a==null?b.$ti.c.a(a):a
if(!b.b)b.a.an(r)
else{s=b.a
if(b.$ti.i("P<1>").b(r))s.b3(r)
else s.ap(r)}},
ay(a,b){var s=A.V(a),r=A.N(a),q=b.a
if(b.b)q.N(s,r)
else q.b1(s,r)},
i5(a,b){var s,r,q=new A.dI(b),p=new A.dJ(b)
if(a instanceof A.l)a.be(q,p,t.z)
else{s=t.z
if(a instanceof A.l)a.aR(q,p,s)
else{r=new A.l($.f,t.d)
r.a=8
r.c=a
r.be(q,p,s)}}},
aF(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.f.aP(new A.dM(s))},
e1(a){var s
if(t.Q.b(a)){s=a.gW()
if(s!=null)return s}return B.L},
h6(a,b){var s,r=!b.b(null)
if(r)throw A.c(A.e0(null,"computation","The type parameter is not nullable"))
s=new A.l($.f,b.i("l<0>"))
A.ht(a,new A.cx(null,s,b))
return s},
i9(a,b,c){A.ij(b,c)
a.N(b,c)},
ij(a,b){if($.f===B.d)return null
return null},
dk(a,b,c){var s,r,q,p={},o=p.a=a
for(;s=o.a,(s&4)!==0;){o=o.c
p.a=o}if(o===b){b.b1(new A.J(!0,o,null,"Cannot complete a future with itself"),A.hr())
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.bc(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.Y()
b.a5(p.a)
A.ae(b,q)
return}b.a^=2
A.aD(null,null,b.b,new A.dl(p,b))},
ae(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;!0;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){f=f.c
A.cr(f.a,f.b)}return}s.a=b
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
if(r){A.cr(m.a,m.b)
return}j=$.f
if(j!==k)$.f=k
else j=null
f=f.c
if((f&15)===8)new A.dt(s,g,p).$0()
else if(q){if((f&1)!==0)new A.ds(s,m).$0()}else if((f&2)!==0)new A.dr(g,s).$0()
if(j!=null)$.f=j
f=s.c
if(f instanceof A.l){r=s.a.$ti
r=r.i("P<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.a8(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.dk(f,i,!0)
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
iA(a,b){if(t.C.b(a))return b.aP(a)
if(t.v.b(a))return a
throw A.c(A.e0(a,"onError",u.c))},
iw(){var s,r
for(s=$.aC;s!=null;s=$.aC){$.bw=null
r=s.b
$.aC=r
if(r==null)$.bv=null
s.a.$0()}},
iD(){$.ep=!0
try{A.iw()}finally{$.bw=null
$.ep=!1
if($.aC!=null)$.eF().$1(A.fy())}},
fw(a){var s=new A.c9(a),r=$.bv
if(r==null){$.aC=$.bv=s
if(!$.ep)$.eF().$1(A.fy())}else $.bv=r.b=s},
iC(a){var s,r,q,p=$.aC
if(p==null){A.fw(a)
$.bw=$.bv
return}s=new A.c9(a)
r=$.bw
if(r==null){s.b=p
$.aC=$.bw=s}else{q=r.b
s.b=q
$.bw=r.b=s
if(q==null)$.bv=s}},
eC(a){var s=null,r=$.f
if(B.d===r){A.aD(s,s,B.d,a)
return}A.aD(s,s,r,r.aD(a))},
ji(a){A.et(a,"stream",t.K)
return new A.cm()},
e9(a){return new A.b9(null,null,a.i("b9<0>"))},
fv(a){return},
f7(a,b){return b==null?A.iL():b},
hJ(a,b){if(b==null)b=A.iM()
if(t.k.b(b))return a.aP(b)
if(t.u.b(b))return b
throw A.c(A.a5("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
ix(a){},
iy(a,b){A.cr(a,b)},
i8(a,b,c){var s,r=a.bi(),q=$.dY()
if(r!==q){q=r.$ti
s=$.f
r.a4(new A.a_(new A.l(s,q),8,new A.dK(b,c),null,q.i("a_<1,1>")))}else b.a6(c)},
ht(a,b){var s=$.f
if(s===B.d)return A.eb(a,b)
return A.eb(a,s.aD(b))},
hu(a,b){var s=$.f
if(s===B.d)return A.eY(a,b)
return A.eY(a,s.c5(b,t.E))},
cr(a,b){A.iC(new A.dL(a,b))},
fs(a,b,c,d){var s,r=$.f
if(r===c)return d.$0()
$.f=c
s=r
try{r=d.$0()
return r}finally{$.f=s}},
ft(a,b,c,d,e){var s,r=$.f
if(r===c)return d.$1(e)
$.f=c
s=r
try{r=d.$1(e)
return r}finally{$.f=s}},
iB(a,b,c,d,e,f){var s,r=$.f
if(r===c)return d.$2(e,f)
$.f=c
s=r
try{r=d.$2(e,f)
return r}finally{$.f=s}},
aD(a,b,c,d){if(B.d!==c)d=c.aD(d)
A.fw(d)},
d7:function d7(a){this.a=a},
d6:function d6(a,b,c){this.a=a
this.b=b
this.c=c},
d8:function d8(a){this.a=a},
d9:function d9(a){this.a=a},
bo:function bo(){this.c=0},
dF:function dF(a,b){this.a=a
this.b=b},
dE:function dE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c8:function c8(a,b){this.a=a
this.b=!1
this.$ti=b},
dI:function dI(a){this.a=a},
dJ:function dJ(a){this.a=a},
dM:function dM(a){this.a=a},
a6:function a6(a,b){this.a=a
this.b=b},
F:function F(a,b){this.a=a
this.$ti=b},
bc:function bc(a,b,c,d,e){var _=this
_.ay=0
_.CW=_.ch=null
_.w=a
_.a=b
_.d=c
_.e=d
_.r=_.f=null
_.$ti=e},
cb:function cb(){},
b9:function b9(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null
_.$ti=c},
cx:function cx(a,b,c){this.a=a
this.b=b
this.c=c},
a_:function a_(a,b,c,d,e){var _=this
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
dh:function dh(a,b){this.a=a
this.b=b},
dq:function dq(a,b){this.a=a
this.b=b},
dm:function dm(a){this.a=a},
dn:function dn(a){this.a=a},
dp:function dp(a,b,c){this.a=a
this.b=b
this.c=c},
dl:function dl(a,b){this.a=a
this.b=b},
dj:function dj(a,b){this.a=a
this.b=b},
di:function di(a,b,c){this.a=a
this.b=b
this.c=c},
dt:function dt(a,b,c){this.a=a
this.b=b
this.c=c},
du:function du(a,b){this.a=a
this.b=b},
dv:function dv(a){this.a=a},
ds:function ds(a,b){this.a=a
this.b=b},
dr:function dr(a,b){this.a=a
this.b=b},
c9:function c9(a){this.a=a
this.b=null},
av:function av(){},
cR:function cR(a,b){this.a=a
this.b=b},
cS:function cS(a,b){this.a=a
this.b=b},
cP:function cP(a){this.a=a},
cQ:function cQ(a,b,c){this.a=a
this.b=b
this.c=c},
bd:function bd(){},
cd:function cd(){},
cc:function cc(){},
bn:function bn(){},
cg:function cg(){},
cf:function cf(a){this.b=a
this.a=null},
cj:function cj(){this.a=0
this.c=this.b=null},
dA:function dA(a,b){this.a=a
this.b=b},
be:function be(a){this.a=1
this.b=a
this.c=null},
cm:function cm(){},
dK:function dK(a,b){this.a=a
this.b=b},
dH:function dH(){},
dL:function dL(a,b){this.a=a
this.b=b},
dB:function dB(){},
dC:function dC(a,b){this.a=a
this.b=b},
dD:function dD(a,b,c){this.a=a
this.b=b
this.c=c},
hg(a,b){return new A.aa(a.i("@<0>").ao(b).i("aa<1,2>"))},
hh(a){return new A.bf(a.i("bf<0>"))},
ei(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
hK(a,b,c){var s=new A.aw(a,b,c.i("aw<0>"))
s.c=a.e
return s},
e6(a){var s,r
if(A.ez(a))return"{...}"
s=new A.c3("")
try{r={}
$.D.push(a)
s.a+="{"
r.a=!0
a.aH(0,new A.cE(r,s))
s.a+="}"}finally{if(0>=$.D.length)return A.b($.D,-1)
$.D.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
bf:function bf(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dy:function dy(a){this.a=a
this.c=this.b=null},
aw:function aw(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
o:function o(){},
aX:function aX(){},
cE:function cE(a,b){this.a=a
this.b=b},
b5:function b5(){},
bl:function bl(){},
hE(a,b){var s,r,q=$.p(),p=a.length,o=4-p%4
if(o===4)o=0
for(s=0,r=0;r<p;++r){s=s*10+a.charCodeAt(r)-48;++o
if(o===4){q=q.a3(0,$.eG()).aS(0,A.ba(s))
s=0
o=0}}if(b)return q.K(0)
return q},
eg(a){if(48<=a&&a<=57)return a-48
return(a|32)-97+10},
hF(a,b,c){var s,r,q,p,o,n,m,l=a.length,k=l-b,j=B.w.c6(k/4),i=new Uint16Array(j),h=j-1,g=k-h*4
for(s=b,r=0,q=0;q<g;++q,s=p){p=s+1
if(!(s<l))return A.b(a,s)
o=A.eg(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}n=h-1
if(!(h>=0))return A.b(i,h)
i[h]=r
for(;s<l;n=m){for(r=0,q=0;q<4;++q,s=p){p=s+1
if(!(s>=0&&s<l))return A.b(a,s)
o=A.eg(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}m=n-1
if(!(n>=0))return A.b(i,n)
i[n]=r}if(j===1){if(0>=j)return A.b(i,0)
l=i[0]===0}else l=!1
if(l)return $.p()
l=A.w(j,i)
return new A.r(l===0?!1:c,i,l)},
hG(a,b,c){var s,r,q,p=$.p(),o=A.ba(b)
for(s=a.length,r=0;r<s;++r){q=A.eg(a.charCodeAt(r))
if(q>=b)return null
p=p.a3(0,o).aS(0,A.ba(q))}if(c)return p.K(0)
return p},
hI(a,b){var s,r,q,p,o,n,m,l=null
if(a==="")return l
s=$.fS().c8(a)
if(s==null)return l
r=s.b
q=r.length
if(1>=q)return A.b(r,1)
p=r[1]==="-"
if(4>=q)return A.b(r,4)
o=r[4]
n=r[3]
if(5>=q)return A.b(r,5)
m=r[5]
if(b<2||b>36)throw A.c(A.c0(b,2,36,"radix",l))
if(b===10&&o!=null)return A.hE(o,p)
if(b===16)r=o!=null||m!=null
else r=!1
if(r){if(o==null){m.toString
r=m}else r=o
return A.hF(r,0,p)}r=o==null?m:o
if(r==null){n.toString
r=n}return A.hG(r,b,p)},
w(a,b){var s,r=b.length
while(!0){if(a>0){s=a-1
if(!(s<r))return A.b(b,s)
s=b[s]===0}else s=!1
if(!s)break;--a}return a},
ef(a,b,c,d){var s,r,q,p=new Uint16Array(d),o=c-b
for(s=a.length,r=0;r<o;++r){q=b+r
if(!(q>=0&&q<s))return A.b(a,q)
q=a[q]
if(!(r<d))return A.b(p,r)
p[r]=q}return p},
ba(a){var s,r,q,p,o=a<0
if(o){if(a===-9223372036854776e3){s=new Uint16Array(4)
s[3]=32768
r=A.w(4,s)
return new A.r(r!==0,s,r)}a=-a}if(a<65536){s=new Uint16Array(1)
s[0]=a
r=A.w(1,s)
return new A.r(r===0?!1:o,s,r)}if(a<=4294967295){s=new Uint16Array(2)
s[0]=a&65535
s[1]=B.a.aa(a,16)
r=A.w(2,s)
return new A.r(r===0?!1:o,s,r)}r=B.a.n(B.a.gbh(a)-1,16)+1
s=new Uint16Array(r)
for(q=0;a!==0;q=p){p=q+1
if(!(q<r))return A.b(s,q)
s[q]=a&65535
a=B.a.n(a,65536)}r=A.w(r,s)
return new A.r(r===0?!1:o,s,r)},
eh(a,b,c,d){var s,r,q,p,o
if(b===0)return 0
if(c===0&&d===a)return b
for(s=b-1,r=a.length,q=d.$flags|0;s>=0;--s){p=s+c
if(!(s<r))return A.b(a,s)
o=a[s]
q&2&&A.x(d)
if(!(p>=0&&p<d.length))return A.b(d,p)
d[p]=o}for(s=c-1;s>=0;--s){q&2&&A.x(d)
if(!(s<d.length))return A.b(d,s)
d[s]=0}return b+c},
f5(a,b,c,d){var s,r,q,p,o,n,m,l=B.a.n(c,16),k=B.a.j(c,16),j=16-k,i=B.a.m(1,j)-1
for(s=b-1,r=a.length,q=d.$flags|0,p=0;s>=0;--s){if(!(s<r))return A.b(a,s)
o=a[s]
n=s+l+1
m=B.a.F(o,j)
q&2&&A.x(d)
if(!(n>=0&&n<d.length))return A.b(d,n)
d[n]=(m|p)>>>0
p=B.a.m(o&i,k)}q&2&&A.x(d)
if(!(l>=0&&l<d.length))return A.b(d,l)
d[l]=p},
f0(a,b,c,d){var s,r,q,p=B.a.n(c,16)
if(B.a.j(c,16)===0)return A.eh(a,b,p,d)
s=b+p+1
A.f5(a,b,c,d)
for(r=d.$flags|0,q=p;--q,q>=0;){r&2&&A.x(d)
if(!(q<d.length))return A.b(d,q)
d[q]=0}r=s-1
if(!(r>=0&&r<d.length))return A.b(d,r)
if(d[r]===0)s=r
return s},
hH(a,b,c,d){var s,r,q,p,o,n,m=B.a.n(c,16),l=B.a.j(c,16),k=16-l,j=B.a.m(1,l)-1,i=a.length
if(!(m>=0&&m<i))return A.b(a,m)
s=B.a.F(a[m],l)
r=b-m-1
for(q=d.$flags|0,p=0;p<r;++p){o=p+m+1
if(!(o<i))return A.b(a,o)
n=a[o]
o=B.a.m(n&j,k)
q&2&&A.x(d)
if(!(p<d.length))return A.b(d,p)
d[p]=(o|s)>>>0
s=B.a.F(n,l)}q&2&&A.x(d)
if(!(r>=0&&r<d.length))return A.b(d,r)
d[r]=s},
da(a,b,c,d){var s,r,q,p,o=b-d
if(o===0)for(s=b-1,r=a.length,q=c.length;s>=0;--s){if(!(s<r))return A.b(a,s)
p=a[s]
if(!(s<q))return A.b(c,s)
o=p-c[s]
if(o!==0)return o}return o},
hC(a,b,c,d,e){var s,r,q,p,o,n
for(s=a.length,r=c.length,q=e.$flags|0,p=0,o=0;o<d;++o){if(!(o<s))return A.b(a,o)
n=a[o]
if(!(o<r))return A.b(c,o)
p+=n+c[o]
q&2&&A.x(e)
if(!(o<e.length))return A.b(e,o)
e[o]=p&65535
p=p>>>16}for(o=d;o<b;++o){if(!(o>=0&&o<s))return A.b(a,o)
p+=a[o]
q&2&&A.x(e)
if(!(o<e.length))return A.b(e,o)
e[o]=p&65535
p=p>>>16}q&2&&A.x(e)
if(!(b>=0&&b<e.length))return A.b(e,b)
e[b]=p},
ca(a,b,c,d,e){var s,r,q,p,o,n
for(s=a.length,r=c.length,q=e.$flags|0,p=0,o=0;o<d;++o){if(!(o<s))return A.b(a,o)
n=a[o]
if(!(o<r))return A.b(c,o)
p+=n-c[o]
q&2&&A.x(e)
if(!(o<e.length))return A.b(e,o)
e[o]=p&65535
p=0-(B.a.aa(p,16)&1)}for(o=d;o<b;++o){if(!(o>=0&&o<s))return A.b(a,o)
p+=a[o]
q&2&&A.x(e)
if(!(o<e.length))return A.b(e,o)
e[o]=p&65535
p=0-(B.a.aa(p,16)&1)}},
f6(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k
if(a===0)return
for(s=b.length,r=d.length,q=d.$flags|0,p=0;--f,f>=0;e=l,c=o){o=c+1
if(!(c<s))return A.b(b,c)
n=b[c]
if(!(e>=0&&e<r))return A.b(d,e)
m=a*n+d[e]+p
l=e+1
q&2&&A.x(d)
d[e]=m&65535
p=B.a.n(m,65536)}for(;p!==0;e=l){if(!(e>=0&&e<r))return A.b(d,e)
k=d[e]+p
l=e+1
q&2&&A.x(d)
d[e]=k&65535
p=B.a.n(k,65536)}},
hD(a,b,c){var s,r,q,p=b.length
if(!(c>=0&&c<p))return A.b(b,c)
s=b[c]
if(s===a)return 65535
r=c-1
if(!(r>=0&&r<p))return A.b(b,r)
q=B.a.M((s<<16|b[r])>>>0,a)
if(q>65535)return 65535
return q},
h2(a,b){a=A.c(a)
a.stack=b.h(0)
throw a
throw A.c("unreachable")},
e5(a,b,c){var s,r,q
if(a>4294967295)A.a4(A.c0(a,0,4294967295,"length",null))
s=A.a(new Array(a),c.i("t<0>"))
s.$flags=1
r=s
if(a!==0)for(s=r.length,q=0;q<s;++q)r[q]=b
return r},
hi(a,b,c){var s,r,q=A.a([],c.i("t<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.dW)(a),++r)q.push(a[r])
q.$flags=1
return q},
ho(a,b){return new A.cB(a,A.he(a,!1,!1,!1,!1,!1))},
eX(a,b,c){var s=J.eI(b)
if(!s.p())return a
if(c.length===0){do a+=A.k(s.gq())
while(s.p())}else{a+=A.k(s.gq())
for(;s.p();)a=a+c+A.k(s.gq())}return a},
hr(){return A.N(new Error())},
eP(a){return new A.aI(1000*a)},
cv(a){if(typeof a=="number"||A.eo(a)||a==null)return J.bz(a)
if(typeof a=="string")return JSON.stringify(a)
return A.eU(a)},
h3(a,b){A.et(a,"error",t.K)
A.et(b,"stackTrace",t.l)
A.h2(a,b)},
bC(a){return new A.bB(a)},
a5(a,b){return new A.J(!1,null,b,a)},
e0(a,b,c){return new A.J(!0,a,b,c)},
hl(a){var s=null
return new A.as(s,s,!1,s,s,a)},
c0(a,b,c,d,e){return new A.as(b,c,!0,a,d,"Invalid value")},
hn(a,b,c){if(0>a||a>c)throw A.c(A.c0(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.c(A.c0(b,a,c,"end",null))
return b}return c},
hm(a,b){if(a<0)throw A.c(A.c0(a,0,null,b,null))
return a},
eR(a,b,c,d){return new A.bG(b,!0,a,d,"Index out of range")},
c6(a){return new A.b7(a)},
f_(a){return new A.c4(a)},
a8(a){return new A.bD(a)},
bF(a){return new A.dg(a)},
eQ(a,b){return new A.cw(a,b)},
hb(a,b,c){var s,r
if(A.ez(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.a([],t.s)
$.D.push(a)
try{A.iv(a,s)}finally{if(0>=$.D.length)return A.b($.D,-1)
$.D.pop()}r=A.eX(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
e2(a,b,c){var s,r
if(A.ez(a))return b+"..."+c
s=new A.c3(b)
$.D.push(a)
try{r=s
r.a=A.eX(r.a,a,", ")}finally{if(0>=$.D.length)return A.b($.D,-1)
$.D.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
iv(a,b){var s,r,q,p,o,n,m,l=a.gu(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.p())return
s=A.k(l.gq())
b.push(s)
k+=s.length+2;++j}if(!l.p()){if(j<=5)return
if(0>=b.length)return A.b(b,-1)
r=b.pop()
if(0>=b.length)return A.b(b,-1)
q=b.pop()}else{p=l.gq();++j
if(!l.p()){if(j<=4){b.push(A.k(p))
return}r=A.k(p)
if(0>=b.length)return A.b(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gq();++j
for(;l.p();p=o,o=n){n=l.gq();++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return A.b(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=A.k(p)
r=A.k(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.b(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
cG(a,b,c,d){var s
if(B.f===c){s=B.a.gk(a)
b=J.O(b)
return A.ea(A.Z(A.Z($.dZ(),s),b))}if(B.f===d){s=B.a.gk(a)
b=J.O(b)
c=J.O(c)
return A.ea(A.Z(A.Z(A.Z($.dZ(),s),b),c))}s=B.a.gk(a)
b=J.O(b)
c=J.O(c)
d=J.O(d)
d=A.ea(A.Z(A.Z(A.Z(A.Z($.dZ(),s),b),c),d))
return d},
r:function r(a,b,c){this.a=a
this.b=b
this.c=c},
db:function db(){},
dc:function dc(){},
aI:function aI(a){this.a=a},
df:function df(){},
i:function i(){},
bB:function bB(a){this.a=a},
Q:function Q(){},
J:function J(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
as:function as(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bG:function bG(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
b7:function b7(a){this.a=a},
c4:function c4(a){this.a=a},
au:function au(a){this.a=a},
bD:function bD(a){this.a=a},
bZ:function bZ(){},
b6:function b6(){},
dg:function dg(a){this.a=a},
cw:function cw(a,b){this.a=a
this.b=b},
bH:function bH(){},
K:function K(){},
aY:function aY(a,b,c){this.a=a
this.b=b
this.$ti=c},
u:function u(){},
e:function e(){},
cn:function cn(){},
c3:function c3(a){this.a=a},
dw:function dw(){},
W:function W(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
al:function al(a){this.b=a},
ao:function ao(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
aq:function aq(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=0},
hq(a,b,c,d,e,f,g,h){var s,r,q,p=self,o=p.document.createElement("canvas"),n=h*g
o.width=n
s=d*f
o.height=s
r=p.document.createElement("canvas")
r.width=n
r.height=s
s=A.a([],t.x)
for(q=0;q<d;++q){p=B.a.n(h,32)
s.push(new Uint32Array(p+1))}p=new A.c2(!0,d,h,g,f,c,a,o,r,s)
p.bE(a,b,c,d,!0,f,g,h)
return p},
e8(a){return new A.m(B.a.n(a,32),31-B.a.j(a,32))},
c2:function c2(a,b,c,d,e,f,g,h,i,j){var _=this
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
cJ:function cJ(a){this.a=a},
cK:function cK(a){this.a=a},
cL:function cL(a){this.a=a},
cM:function cM(a){this.a=a},
cI:function cI(){},
L:function L(a){this.b=a},
hs(a,b,c,d,e,f){var s,r,q,p,o=null,n=A.hq(a,c,d,e*10,!0,2,2,b*8),m=A.a([],t.G)
for(s=t.V,r=0;r<e;++r){q=A.a([],s)
for(p=0;p<b;++p)q.push(new A.W(r,p," ",d))
m.push(q)}n=new A.cU(e,b,d,c,n,new A.aq(e,b),new A.aq(e,b),new A.aq(e,b),!1,A.e9(t.N),A.e9(t.W),A.e9(t.q),B.e,m,A.hh(t.o),B.dT)
n.bF(a,b,c,d,o,!0,2,2,2,e,!1,o,o,o,o,o,o)
return n},
at:function at(a){this.b=a},
cU:function cU(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
d1:function d1(a){this.a=a},
d0:function d0(){},
d_:function d_(a){this.a=a},
cV:function cV(a){this.a=a},
cW:function cW(a){this.a=a},
cX:function cX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cY:function cY(a,b,c){this.a=a
this.b=b
this.c=c},
cZ:function cZ(a){this.a=a},
G:function G(a){this.b=a},
ac:function ac(a,b){this.c=a
this.b=b},
dT(){var s=0,r=A.aB(t.H),q,p
var $async$dT=A.aF(function(a,b){if(a===1)return A.ay(b,r)
while(true)switch(s){case 0:p=self.document.getElementById("othello")
p=A.hs("black",50,p==null?t.m.a(p):p,"white",29,!1)
q=$.p()
p.a0()
s=2
return A.M(new A.cy(p,new A.bY(q,q,B.b)).L(),$async$dT)
case 2:return A.az(null,r)}})
return A.aA($async$dT,r)},
cy:function cy(a,b){this.a=a
this.b=b},
cz:function cz(){},
bY:function bY(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0},
b3:function b3(a){this.b=a},
bu(a){var s
if(typeof a=="function")throw A.c(A.a5("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.i6,a)
s[$.dX()]=a
return s},
fo(a){var s
if(typeof a=="function")throw A.c(A.a5("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.i7,a)
s[$.dX()]=a
return s},
i6(a){return a.$0()},
i7(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
j7(a){var s,r,q
for(;!0;){s=a.gaf()
r=s.length
if(r===0)break
r=B.K.cg(r)
if(!(r>=0&&r<s.length))return A.b(s,r)
q=s[r]
a.aL(q.a,q.b)}r=a.d
return new A.cl(a.e,r)},
ev(a0,a1){var s=0,r=A.aB(t.R),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$ev=A.aF(function(a2,a3){if(a2===1)return A.ay(a3,r)
while(true)$async$outer:switch(s){case 0:b=a0.gaf()
a=A.hg(t.R,t.i)
for(p=b.length,o=0;n=b.length,o<n;b.length===p||(0,A.dW)(b),++o)a.ag(0,b[o],0)
for(p=a1.c,m=0;m<B.a.M(p,n);++m,n=l)for(o=0;l=b.length,o<l;b.length===n||(0,A.dW)(b),++o){l=b[o]
k=l.a
j=l.b
l=a0.c
i=$.p()
l=new A.bY(i,i,l)
l.d=a0.d
l.a=a0.a
l.e=a0.e
l.b=a0.b
l.aL(k,j)
h=A.j7(l)
g=h.b
f=h.a
l=a.A(0,new A.m(k,j))
l.toString
switch(a0.c){case B.b:i=g-f
break
case B.c:i=f-g
break
default:i=null}if(typeof i!=="number"){q=i.ct()
s=1
break $async$outer}a.ag(0,new A.m(k,j),l+i/p)}p=a.$ti
e=new A.aW(a,p.i("aW<1>")).gU(0)
for(p=new A.aV(a,p.i("aV<1,2>")).gu(0);p.p();){n=p.d
d=n.a
c=n.b
n=a.A(0,e)
n.toString
if(c>n)e=d}q=e
s=1
break
case 1:return A.az(q,r)}})
return A.aA($async$ev,r)}},B={}
var w=[A,J,B]
var $={}
A.e3.prototype={}
J.bI.prototype={
J(a,b){return a===b},
gk(a){return A.ar(a)},
h(a){return"Instance of '"+A.cH(a)+"'"},
gt(a){return A.ag(A.en(this))}}
J.bJ.prototype={
h(a){return String(a)},
gk(a){return a?519018:218159},
gt(a){return A.ag(t.y)},
$ih:1}
J.aQ.prototype={
J(a,b){return null==b},
h(a){return"null"},
gk(a){return 0},
$ih:1,
$iu:1}
J.aS.prototype={$in:1}
J.Y.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.c_.prototype={}
J.ad.prototype={}
J.X.prototype={
h(a){var s=a[$.dX()]
if(s==null)return this.bD(a)
return"JavaScript function for "+J.bz(s)}}
J.aR.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.aT.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.t.prototype={
bo(a,b){var s,r,q=a.length,p=A.e5(q,"",t.N)
for(s=0;s<a.length;++s){r=A.k(a[s])
if(!(s<q))return A.b(p,s)
p[s]=r}return p.join(b)},
c9(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw A.c(A.a8(a))}return s},
ca(a,b,c){return this.c9(a,b,c,t.z)},
T(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
c7(a,b){var s
for(s=0;s<a.length;++s)if(J.aj(a[s],b))return!0
return!1},
h(a){return A.e2(a,"[","]")},
gu(a){return new J.bA(a,a.length,A.em(a).i("bA<1>"))},
gk(a){return A.ar(a)},
gl(a){return a.length},
$ij:1}
J.cC.prototype={}
J.bA.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
p(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.c(A.dW(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.ak.prototype={
cq(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.c(A.c6(""+a+".toInt()"))},
c6(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.c(A.c6(""+a+".ceil()"))},
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
M(a,b){if((a|0)===a)if(b>=1)return a/b|0
return this.bd(a,b)},
n(a,b){return(a|0)===a?a/b|0:this.bd(a,b)},
bd(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.c(A.c6("Result of truncating division is "+A.k(s)+": "+A.k(a)+" ~/ "+b))},
m(a,b){if(b<0)throw A.c(A.er(b))
return b>31?0:a<<b>>>0},
c2(a,b){return b>31?0:a<<b>>>0},
ai(a,b){var s
if(b<0)throw A.c(A.er(b))
if(a>0)s=this.aB(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
aa(a,b){var s
if(a>0)s=this.aB(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
F(a,b){if(0>b)throw A.c(A.er(b))
return this.aB(a,b)},
aB(a,b){return b>31?0:a>>>b},
gt(a){return A.ag(t.n)},
$iy:1}
J.aP.prototype={
gbh(a){var s,r=a<0?-a-1:a,q=r
for(s=32;q>=4294967296;){q=this.n(q,4294967296)
s+=32}return s-Math.clz32(q)},
gt(a){return A.ag(t.S)},
$ih:1,
$id:1}
J.bK.prototype={
gt(a){return A.ag(t.i)},
$ih:1}
J.a9.prototype={
bC(a,b,c){return a.substring(b,A.hn(b,c,a.length))},
cr(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.b(p,0)
if(p.charCodeAt(0)===133){s=J.hc(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.b(p,r)
q=p.charCodeAt(r)===133?J.hd(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
a3(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.c(B.J)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
cj(a,b,c){var s=b-a.length
if(s<=0)return a
return this.a3(c,s)+a},
h(a){return a},
gk(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gt(a){return A.ag(t.N)},
gl(a){return a.length},
$ih:1,
$iA:1}
A.am.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.dV.prototype={
$0(){var s=new A.l($.f,t.D)
s.an(null)
return s},
$S:9}
A.cN.prototype={}
A.aJ.prototype={}
A.ab.prototype={
gu(a){var s=this
return new A.an(s,s.gl(s),A.a1(s).i("an<ab.E>"))},
ce(a){var s,r,q=this,p=q.gl(q)
for(s=0,r="";s<p;++s){r+=A.k(q.T(0,s))
if(p!==q.gl(q))throw A.c(A.a8(q))}return r.charCodeAt(0)==0?r:r}}
A.an.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
p(){var s,r=this,q=r.a,p=J.ew(q),o=p.gl(q)
if(r.b!==o)throw A.c(A.a8(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.T(q,s);++r.c
return!0}}
A.b8.prototype={
gu(a){return new A.c7(J.eI(this.a),this.b)}}
A.c7.prototype={
p(){var s,r
for(s=this.a,r=this.b;s.p();)if(r.$1(s.gq()))return!0
return!1},
gq(){return this.a.gq()}}
A.aN.prototype={
gl(a){var s=this.a
return s.gl(s)},
gu(a){var s=this.a
return new A.aO(s.gu(s),this.b)}}
A.aO.prototype={
p(){if(++this.c>=0&&this.a.p())return!0
this.c=-2
return!1},
gq(){var s=this.c
return s>=0?new A.m(this.b+s,this.a.gq()):A.a4(A.cA())}}
A.aL.prototype={}
A.b4.prototype={
gl(a){return J.e_(this.a)},
T(a,b){var s=this.a,r=J.ew(s)
return r.T(s,r.gl(s)-1-b)}}
A.m.prototype={$r:"+(1,2)",$s:1}
A.cl.prototype={$r:"+black,white(1,2)",$s:2}
A.bE.prototype={
h(a){return A.e6(this)}}
A.aM.prototype={
a7(){var s=this,r=s.$map
if(r==null){r=new A.aU(s.$ti.i("aU<1,2>"))
A.iR(s.a,r)
s.$map=r}return r},
aF(a){return this.a7().aF(a)},
A(a,b){return this.a7().A(0,b)},
aH(a,b){this.a7().aH(0,b)},
gl(a){return this.a7().a}}
A.d3.prototype={
I(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.b2.prototype={
h(a){return"Null check operator used on a null value"}}
A.bL.prototype={
h(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.c5.prototype={
h(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.cF.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.aK.prototype={}
A.bm.prototype={
h(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iH:1}
A.a7.prototype={
h(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.fF(r==null?"unknown":r)+"'"},
gcs(){return this},
$C:"$1",
$R:1,
$D:null}
A.ct.prototype={$C:"$0",$R:0}
A.cu.prototype={$C:"$2",$R:2}
A.cT.prototype={}
A.cO.prototype={
h(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.fF(s)+"'"}}
A.aH.prototype={
J(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.aH))return!1
return this.$_target===b.$_target&&this.a===b.a},
gk(a){return(A.eB(this.a)^A.ar(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.cH(this.a)+"'")}}
A.ce.prototype={
h(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.c1.prototype={
h(a){return"RuntimeError: "+this.a}}
A.aa.prototype={
gl(a){return this.a},
aF(a){var s=this.b
if(s==null)return!1
return s[a]!=null},
A(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.cd(b)},
cd(a){var s,r,q=this.d
if(q==null)return null
s=q[this.aI(a)]
r=this.aJ(s,a)
if(r<0)return null
return s[r].b},
ag(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.aX(s==null?m.b=m.au():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=m.c
m.aX(r==null?m.c=m.au():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.au()
p=m.aI(b)
o=q[p]
if(o==null)q[p]=[m.al(b,c)]
else{n=m.aJ(o,b)
if(n>=0)o[n].b=c
else o.push(m.al(b,c))}}},
aH(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw A.c(A.a8(s))
r=r.c}},
aX(a,b,c){var s=a[b]
if(s==null)a[b]=this.al(b,c)
else s.b=c},
al(a,b){var s=this,r=new A.cD(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&1073741823
return r},
aI(a){return J.O(a)&1073741823},
aJ(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aj(a[r].a,b))return r
return-1},
h(a){return A.e6(this)},
au(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.cD.prototype={}
A.aW.prototype={
gl(a){return this.a.a},
gu(a){var s=this.a
return new A.bN(s,s.r,s.e)}}
A.bN.prototype={
gq(){return this.d},
p(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.c(A.a8(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
A.aV.prototype={
gl(a){return this.a.a},
gu(a){var s=this.a
return new A.bM(s,s.r,s.e,this.$ti.i("bM<1,2>"))}}
A.bM.prototype={
gq(){var s=this.d
s.toString
return s},
p(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.c(A.a8(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.aY(s.a,s.b,r.$ti.i("aY<1,2>"))
r.c=s.c
return!0}}}
A.aU.prototype={
aI(a){return A.iN(a)&1073741823},
aJ(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aj(a[r].a,b))return r
return-1}}
A.dP.prototype={
$1(a){return this.a(a)},
$S:10}
A.dQ.prototype={
$2(a,b){return this.a(a,b)},
$S:11}
A.dR.prototype={
$1(a){return this.a(a)},
$S:12}
A.ax.prototype={
h(a){return this.bf(!1)},
bf(a){var s,r,q,p,o,n=this.bT(),m=this.b8(),l=(a?""+"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.b(m,q)
o=m[q]
l=a?l+A.eU(o):l+A.k(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
bT(){var s,r=this.$s
for(;$.bk.length<=r;)$.bk.push(null)
s=$.bk[r]
if(s==null){s=this.bP()
if(!(r<$.bk.length))return A.b($.bk,r)
$.bk[r]=s}return s},
bP(){var s,r,q,p,o,n=this.$r,m=n.indexOf("("),l=n.substring(1,m),k=n.substring(m),j=k==="()"?0:k.replace(/[^,]/g,"").length+1,i=A.a(new Array(j),t.f)
for(s=0;s<j;++s)i[s]=s
if(l!==""){r=l.split(",")
s=r.length
for(q=i.length,p=j;s>0;){--p;--s
o=r[s]
if(!(p>=0&&p<q))return A.b(i,p)
i[p]=o}}i=A.hi(i,!1,t.K)
i.$flags=3
return i}}
A.ck.prototype={
b8(){return[this.a,this.b]},
J(a,b){if(b==null)return!1
return b instanceof A.ck&&this.$s===b.$s&&J.aj(this.a,b.a)&&J.aj(this.b,b.b)},
gk(a){return A.cG(this.$s,this.a,this.b,B.f)}}
A.cB.prototype={
h(a){return"RegExp/"+this.a+"/"+this.b.flags},
c8(a){var s=this.b.exec(a)
if(s==null)return null
return new A.dz(s)}}
A.dz.prototype={}
A.dd.prototype={
E(){var s=this.b
if(s===this)throw A.c(A.hf(this.a))
return s}}
A.bO.prototype={
gt(a){return B.ec},
$ih:1}
A.b0.prototype={}
A.bP.prototype={
gt(a){return B.ed},
$ih:1}
A.ap.prototype={
gl(a){return a.length},
$iC:1}
A.aZ.prototype={
A(a,b){A.af(b,a,a.length)
return a[b]},
$ij:1}
A.b_.prototype={$ij:1}
A.bQ.prototype={
gt(a){return B.ee},
$ih:1}
A.bR.prototype={
gt(a){return B.ef},
$ih:1}
A.bS.prototype={
gt(a){return B.eg},
A(a,b){A.af(b,a,a.length)
return a[b]},
$ih:1}
A.bT.prototype={
gt(a){return B.eh},
A(a,b){A.af(b,a,a.length)
return a[b]},
$ih:1}
A.bU.prototype={
gt(a){return B.ei},
A(a,b){A.af(b,a,a.length)
return a[b]},
$ih:1}
A.bV.prototype={
gt(a){return B.ek},
A(a,b){A.af(b,a,a.length)
return a[b]},
$ih:1}
A.bW.prototype={
gt(a){return B.el},
A(a,b){A.af(b,a,a.length)
return a[b]},
$ih:1,
$id5:1}
A.b1.prototype={
gt(a){return B.em},
gl(a){return a.length},
A(a,b){A.af(b,a,a.length)
return a[b]},
$ih:1}
A.bX.prototype={
gt(a){return B.en},
gl(a){return a.length},
A(a,b){A.af(b,a,a.length)
return a[b]},
$ih:1}
A.bg.prototype={}
A.bh.prototype={}
A.bi.prototype={}
A.bj.prototype={}
A.E.prototype={
i(a){return A.bt(v.typeUniverse,this,a)},
ao(a){return A.fi(v.typeUniverse,this,a)}}
A.ci.prototype={}
A.co.prototype={
h(a){return A.B(this.a,null)}}
A.ch.prototype={
h(a){return this.a}}
A.bp.prototype={$iQ:1}
A.d7.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:2}
A.d6.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:13}
A.d8.prototype={
$0(){this.a.$0()},
$S:1}
A.d9.prototype={
$0(){this.a.$0()},
$S:1}
A.bo.prototype={
bG(a,b){if(self.setTimeout!=null)self.setTimeout(A.cs(new A.dF(this,b),0),a)
else throw A.c(A.c6("`setTimeout()` not found."))},
bH(a,b){if(self.setTimeout!=null)self.setInterval(A.cs(new A.dE(this,a,Date.now(),b),0),a)
else throw A.c(A.c6("Periodic timer."))},
$id2:1}
A.dF.prototype={
$0(){this.a.c=1
this.b.$0()},
$S:0}
A.dE.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.a.M(s,o)}q.c=p
r.d.$1(q)},
$S:1}
A.c8.prototype={}
A.dI.prototype={
$1(a){return this.a.$2(0,a)},
$S:4}
A.dJ.prototype={
$2(a,b){this.a.$2(1,new A.aK(a,b))},
$S:14}
A.dM.prototype={
$2(a,b){this.a(a,b)},
$S:15}
A.a6.prototype={
h(a){return A.k(this.a)},
$ii:1,
gW(){return this.b}}
A.F.prototype={}
A.bc.prototype={
aw(){},
az(){}}
A.cb.prototype={
gbV(){return this.c<4},
c0(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
c3(a,b,c,d){var s,r,q,p,o,n=this
if((n.c&4)!==0){s=new A.be($.f)
A.eC(s.gbW())
s.c=c
return s}s=$.f
r=d?1:0
q=A.f7(s,a)
A.hJ(s,b)
p=new A.bc(n,q,s,r|32,A.a1(n).i("bc<1>"))
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
bZ(a){var s,r=this
A.a1(r).i("bc<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.c0(a)
if((r.c&2)===0&&r.d==null)r.bM()}return null},
bJ(){if((this.c&4)!==0)return new A.au("Cannot add new events after calling close")
return new A.au("Cannot add new events while doing an addStream")},
S(a,b){if(!this.gbV())throw A.c(this.bJ())
this.aA(b)},
bM(){if((this.c&4)!==0)if(null.gcu())null.an(null)
A.fv(this.b)}}
A.b9.prototype={
aA(a){var s
for(s=this.d;s!=null;s=s.ch)s.bK(new A.cf(a))}}
A.cx.prototype={
$0(){this.c.a(null)
this.b.a6(null)},
$S:0}
A.a_.prototype={
cf(a){if((this.c&15)!==6)return!0
return this.b.b.aQ(this.d,a.a)},
cb(a){var s,r=this.e,q=null,p=a.a,o=this.b.b
if(t.C.b(r))q=o.cm(r,p,a.b)
else q=o.aQ(r,p)
try{p=q
return p}catch(s){if(t.c.b(A.V(s))){if((this.c&1)!==0)throw A.c(A.a5("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.c(A.a5("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.l.prototype={
aR(a,b,c){var s,r=$.f
if(r===B.d){if(!t.C.b(b)&&!t.v.b(b))throw A.c(A.e0(b,"onError",u.c))}else b=A.iA(b,r)
s=new A.l(r,c.i("l<0>"))
this.a4(new A.a_(s,3,a,b,this.$ti.i("@<1>").ao(c).i("a_<1,2>")))
return s},
be(a,b,c){var s=new A.l($.f,c.i("l<0>"))
this.a4(new A.a_(s,19,a,b,this.$ti.i("@<1>").ao(c).i("a_<1,2>")))
return s},
c1(a){this.a=this.a&1|16
this.c=a},
a5(a){this.a=a.a&30|this.a&1
this.c=a.c},
a4(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.a4(a)
return}s.a5(r)}A.aD(null,null,s.b,new A.dh(s,a))}},
bc(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.bc(a)
return}n.a5(s)}m.a=n.a8(a)
A.aD(null,null,n.b,new A.dq(m,n))}},
Y(){var s=this.c
this.c=null
return this.a8(s)},
a8(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
b2(a){var s,r,q,p=this
p.a^=2
try{a.aR(new A.dm(p),new A.dn(p),t.P)}catch(q){s=A.V(q)
r=A.N(q)
A.eC(new A.dp(p,s,r))}},
a6(a){var s,r=this,q=r.$ti
if(q.i("P<1>").b(a))if(q.b(a))A.dk(a,r,!0)
else r.b2(a)
else{s=r.Y()
r.a=8
r.c=a
A.ae(r,s)}},
ap(a){var s=this,r=s.Y()
s.a=8
s.c=a
A.ae(s,r)},
bO(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.Y()
q.a5(a)
A.ae(q,r)},
N(a,b){var s=this.Y()
this.c1(new A.a6(a,b))
A.ae(this,s)},
an(a){if(this.$ti.i("P<1>").b(a)){this.b3(a)
return}this.bL(a)},
bL(a){this.a^=2
A.aD(null,null,this.b,new A.dj(this,a))},
b3(a){if(this.$ti.b(a)){A.dk(a,this,!1)
return}this.b2(a)},
b1(a,b){this.a^=2
A.aD(null,null,this.b,new A.di(this,a,b))},
$iP:1}
A.dh.prototype={
$0(){A.ae(this.a,this.b)},
$S:0}
A.dq.prototype={
$0(){A.ae(this.b,this.a.a)},
$S:0}
A.dm.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.ap(p.$ti.c.a(a))}catch(q){s=A.V(q)
r=A.N(q)
p.N(s,r)}},
$S:2}
A.dn.prototype={
$2(a,b){this.a.N(a,b)},
$S:6}
A.dp.prototype={
$0(){this.a.N(this.b,this.c)},
$S:0}
A.dl.prototype={
$0(){A.dk(this.a.a,this.b,!0)},
$S:0}
A.dj.prototype={
$0(){this.a.ap(this.b)},
$S:0}
A.di.prototype={
$0(){this.a.N(this.b,this.c)},
$S:0}
A.dt.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.bx(q.d)}catch(p){s=A.V(p)
r=A.N(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.e1(q)
n=k.a
n.c=new A.a6(q,o)
q=n}q.b=!0
return}if(j instanceof A.l&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.l){m=k.b.a
l=new A.l(m.b,m.$ti)
j.aR(new A.du(l,m),new A.dv(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.du.prototype={
$1(a){this.a.bO(this.b)},
$S:2}
A.dv.prototype={
$2(a,b){this.a.N(a,b)},
$S:6}
A.ds.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
q.c=p.b.b.aQ(p.d,this.b)}catch(o){s=A.V(o)
r=A.N(o)
q=s
p=r
if(p==null)p=A.e1(q)
n=this.a
n.c=new A.a6(q,p)
n.b=!0}},
$S:0}
A.dr.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.cf(s)&&p.a.e!=null){p.c=p.a.cb(s)
p.b=!1}}catch(o){r=A.V(o)
q=A.N(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.e1(p)
m=l.b
m.c=new A.a6(p,n)
p=m}p.b=!0}},
$S:0}
A.c9.prototype={}
A.av.prototype={
gl(a){var s={},r=new A.l($.f,t.a)
s.a=0
this.bp(new A.cR(s,this),!0,new A.cS(s,r),r.gb5())
return r},
gU(a){var s=new A.l($.f,this.$ti.i("l<1>")),r=this.bp(null,!0,new A.cP(s),s.gb5())
r.bs(new A.cQ(this,r,s))
return s}}
A.cR.prototype={
$1(a){++this.a.a},
$S(){return this.b.$ti.i("~(1)")}}
A.cS.prototype={
$0(){this.b.a6(this.a.a)},
$S:0}
A.cP.prototype={
$0(){var s,r,q,p
try{q=A.cA()
throw A.c(q)}catch(p){s=A.V(p)
r=A.N(p)
A.i9(this.a,s,r)}},
$S:0}
A.cQ.prototype={
$1(a){A.i8(this.b,this.c,a)},
$S(){return this.a.$ti.i("~(1)")}}
A.bd.prototype={
gk(a){return(A.ar(this.a)^892482866)>>>0},
J(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.F&&b.a===this.a}}
A.cd.prototype={
bb(){return this.w.bZ(this)},
aw(){},
az(){}}
A.cc.prototype={
bs(a){this.a=A.f7(this.d,a)},
bi(){var s,r=this,q=r.e&=4294967279
if((q&8)===0){q=r.e=q|8
if((q&128)!==0){s=r.r
if(s.a===1)s.a=3}if((q&64)===0)r.r=null
r.f=r.bb()}q=$.dY()
return q},
aw(){},
az(){},
bb(){return null},
bK(a){var s,r,q=this,p=q.r
if(p==null)p=q.r=new A.cj()
s=p.c
if(s==null)p.b=p.c=a
else p.c=s.a=a
r=q.e
if((r&128)===0){r|=128
q.e=r
if(r<256)p.aU(q)}},
aA(a){var s=this,r=s.e
s.e=r|64
s.d.bz(s.a,a)
s.e&=4294967231
s.bN((r&4)!==0)},
bN(a){var s,r,q=this,p=q.e
if((p&128)!==0&&q.r.c==null){p=q.e=p&4294967167
s=!1
if((p&4)!==0)if(p<256){s=q.r
s=s==null?null:s.c==null
s=s!==!1}if(s){p&=4294967291
q.e=p}}for(;!0;a=r){if((p&8)!==0){q.r=null
return}r=(p&4)!==0
if(a===r)break
q.e=p^64
if(r)q.aw()
else q.az()
p=q.e&=4294967231}if((p&128)!==0&&p<256)q.r.aU(q)}}
A.bn.prototype={
bp(a,b,c,d){return this.a.c3(a,d,c,!0)}}
A.cg.prototype={}
A.cf.prototype={}
A.cj.prototype={
aU(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.eC(new A.dA(s,a))
s.a=1}}
A.dA.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.a
q.b=r
if(r==null)q.c=null
this.b.aA(s.b)},
$S:0}
A.be.prototype={
bs(a){},
bi(){this.a=-1
this.c=null
return $.dY()},
bX(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.by(s)}}else r.a=q}}
A.cm.prototype={}
A.dK.prototype={
$0(){return this.a.a6(this.b)},
$S:0}
A.dH.prototype={}
A.dL.prototype={
$0(){A.h3(this.a,this.b)},
$S:0}
A.dB.prototype={
by(a){var s,r,q
try{if(B.d===$.f){a.$0()
return}A.fs(null,null,this,a)}catch(q){s=A.V(q)
r=A.N(q)
A.cr(s,r)}},
cp(a,b){var s,r,q
try{if(B.d===$.f){a.$1(b)
return}A.ft(null,null,this,a,b)}catch(q){s=A.V(q)
r=A.N(q)
A.cr(s,r)}},
bz(a,b){return this.cp(a,b,t.z)},
aD(a){return new A.dC(this,a)},
c5(a,b){return new A.dD(this,a,b)},
cl(a){if($.f===B.d)return a.$0()
return A.fs(null,null,this,a)},
bx(a){return this.cl(a,t.z)},
co(a,b){if($.f===B.d)return a.$1(b)
return A.ft(null,null,this,a,b)},
aQ(a,b){var s=t.z
return this.co(a,b,s,s)},
cn(a,b,c){if($.f===B.d)return a.$2(b,c)
return A.iB(null,null,this,a,b,c)},
cm(a,b,c){var s=t.z
return this.cn(a,b,c,s,s,s)},
ck(a){return a},
aP(a){var s=t.z
return this.ck(a,s,s,s)}}
A.dC.prototype={
$0(){return this.a.by(this.b)},
$S:0}
A.dD.prototype={
$1(a){return this.a.bz(this.b,a)},
$S(){return this.c.i("~(0)")}}
A.bf.prototype={
gu(a){var s=this,r=new A.aw(s,s.r,s.$ti.i("aw<1>"))
r.c=s.e
return r},
gl(a){return this.a},
S(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.b0(s==null?q.b=A.ei():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.b0(r==null?q.c=A.ei():r,b)}else return q.bI(b)},
bI(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.ei()
s=J.O(a)&1073741823
r=p[s]
if(r==null)p[s]=[q.av(a)]
else{if(q.bU(r,a)>=0)return!1
r.push(q.av(a))}return!0},
b0(a,b){if(a[b]!=null)return!1
a[b]=this.av(b)
return!0},
ba(){this.r=this.r+1&1073741823},
av(a){var s,r=this,q=new A.dy(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.ba()
return q},
bU(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aj(a[r].a,b))return r
return-1}}
A.dy.prototype={}
A.aw.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
p(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.c(A.a8(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.o.prototype={
gu(a){return new A.an(a,this.gl(a),A.bx(a).i("an<o.E>"))},
T(a,b){return this.A(a,b)},
h(a){return A.e2(a,"[","]")}}
A.aX.prototype={
gl(a){return this.a},
h(a){return A.e6(this)}}
A.cE.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.k(a)
s=r.a+=s
r.a=s+": "
s=A.k(b)
r.a+=s},
$S:16}
A.b5.prototype={
h(a){return A.e2(this,"{","}")}}
A.bl.prototype={}
A.r.prototype={
K(a){var s,r,q=this,p=q.c
if(p===0)return q
s=!q.a
r=q.b
p=A.w(p,r)
return new A.r(p===0?!1:s,r,p)},
bR(a){var s,r,q,p,o,n,m,l=this.c
if(l===0)return $.p()
s=l+a
r=this.b
q=new Uint16Array(s)
for(p=l-1,o=r.length;p>=0;--p){n=p+a
if(!(p<o))return A.b(r,p)
m=r[p]
if(!(n>=0&&n<s))return A.b(q,n)
q[n]=m}o=this.a
n=A.w(s,q)
return new A.r(n===0?!1:o,q,n)},
bS(a){var s,r,q,p,o,n,m,l,k=this,j=k.c
if(j===0)return $.p()
s=j-a
if(s<=0)return k.a?$.eH():$.p()
r=k.b
q=new Uint16Array(s)
for(p=r.length,o=a;o<j;++o){n=o-a
if(!(o>=0&&o<p))return A.b(r,o)
m=r[o]
if(!(n<s))return A.b(q,n)
q[n]=m}n=k.a
m=A.w(s,q)
l=new A.r(m===0?!1:n,q,m)
if(n)for(o=0;o<a;++o){if(!(o<p))return A.b(r,o)
if(r[o]!==0)return l.aj(0,$.v())}return l},
m(a,b){var s,r,q,p,o,n=this
if(b<0)throw A.c(A.a5("shift-amount must be posititve "+b,null))
s=n.c
if(s===0)return n
r=B.a.n(b,16)
if(B.a.j(b,16)===0)return n.bR(r)
q=s+r+1
p=new Uint16Array(q)
A.f5(n.b,s,b,p)
s=n.a
o=A.w(q,p)
return new A.r(o===0?!1:s,p,o)},
ai(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(b<0)throw A.c(A.a5("shift-amount must be posititve "+b,null))
s=j.c
if(s===0)return j
r=B.a.n(b,16)
q=B.a.j(b,16)
if(q===0)return j.bS(r)
p=s-r
if(p<=0)return j.a?$.eH():$.p()
o=j.b
n=new Uint16Array(p)
A.hH(o,s,b,n)
s=j.a
m=A.w(p,n)
l=new A.r(m===0?!1:s,n,m)
if(s){s=o.length
if(!(r>=0&&r<s))return A.b(o,r)
if((o[r]&B.a.m(1,q)-1)!==0)return l.aj(0,$.v())
for(k=0;k<r;++k){if(!(k<s))return A.b(o,k)
if(o[k]!==0)return l.aj(0,$.v())}}return l},
D(a,b){var s,r=this.a
if(r===b.a){s=A.da(this.b,this.c,b.b,b.c)
return r?0-s:s}return r?-1:1},
O(a,b){var s,r,q,p=this,o=p.c,n=a.c
if(o<n)return a.O(p,b)
if(o===0)return $.p()
if(n===0)return p.a===b?p:p.K(0)
s=o+1
r=new Uint16Array(s)
A.hC(p.b,o,a.b,n,r)
q=A.w(s,r)
return new A.r(q===0?!1:b,r,q)},
C(a,b){var s,r,q,p=this,o=p.c
if(o===0)return $.p()
s=a.c
if(s===0)return p.a===b?p:p.K(0)
r=new Uint16Array(o)
A.ca(p.b,o,a.b,s,r)
q=A.w(o,r)
return new A.r(q===0?!1:b,r,q)},
aZ(a,b){var s,r,q,p,o,n,m,l,k=this.c,j=a.c
k=k<j?k:j
s=this.b
r=a.b
q=new Uint16Array(k)
for(p=s.length,o=r.length,n=0;n<k;++n){if(!(n<p))return A.b(s,n)
m=s[n]
if(!(n<o))return A.b(r,n)
l=r[n]
if(!(n<k))return A.b(q,n)
q[n]=m&l}p=A.w(k,q)
return new A.r(p===0?!1:b,q,p)},
aY(a,b){var s,r,q,p,o,n=this.c,m=this.b,l=a.b,k=new Uint16Array(n),j=a.c
if(n<j)j=n
for(s=m.length,r=l.length,q=0;q<j;++q){if(!(q<s))return A.b(m,q)
p=m[q]
if(!(q<r))return A.b(l,q)
o=l[q]
if(!(q<n))return A.b(k,q)
k[q]=p&~o}for(q=j;q<n;++q){if(!(q>=0&&q<s))return A.b(m,q)
k[q]=m[q]}s=A.w(n,k)
return new A.r(s===0?!1:b,k,s)},
b_(a,b){var s,r,q,p,o,n,m,l,k=this.c,j=a.c,i=k>j?k:j,h=this.b,g=a.b,f=new Uint16Array(i)
if(k<j){s=k
r=a}else{s=j
r=this}for(q=h.length,p=g.length,o=0;o<s;++o){if(!(o<q))return A.b(h,o)
n=h[o]
if(!(o<p))return A.b(g,o)
m=g[o]
if(!(o<i))return A.b(f,o)
f[o]=n|m}l=r.b
for(q=l.length,o=s;o<i;++o){if(!(o>=0&&o<q))return A.b(l,o)
p=l[o]
if(!(o<i))return A.b(f,o)
f[o]=p}q=A.w(i,f)
return new A.r(q===0?!1:b,f,q)},
am(a,b){var s,r,q,p,o,n,m,l,k=this.c,j=a.c,i=k>j?k:j,h=this.b,g=a.b,f=new Uint16Array(i)
if(k<j){s=k
r=a}else{s=j
r=this}for(q=h.length,p=g.length,o=0;o<s;++o){if(!(o<q))return A.b(h,o)
n=h[o]
if(!(o<p))return A.b(g,o)
m=g[o]
if(!(o<i))return A.b(f,o)
f[o]=n^m}l=r.b
for(q=l.length,o=s;o<i;++o){if(!(o>=0&&o<q))return A.b(l,o)
p=l[o]
if(!(o<i))return A.b(f,o)
f[o]=p}q=A.w(i,f)
return new A.r(q===0?!1:b,f,q)},
v(a,b){var s,r,q,p=this
if(p.c===0||b.c===0)return $.p()
s=p.a
if(s===b.a){if(s){s=$.v()
return p.C(s,!0).b_(b.C(s,!0),!0).O(s,!0)}return p.aZ(b,!1)}if(s){r=p
q=b}else{r=b
q=p}return q.aY(r.C($.v(),!1),!1)},
ah(a,b){var s,r,q,p=this
if(p.c===0)return b
if(b.c===0)return p
s=p.a
if(s===b.a){if(s){s=$.v()
return p.C(s,!0).aZ(b.C(s,!0),!0).O(s,!0)}return p.b_(b,!1)}if(s){r=p
q=b}else{r=b
q=p}s=$.v()
return r.C(s,!0).aY(q,!0).O(s,!0)},
aW(a,b){var s,r,q,p=this
if(p.c===0)return b
if(b.c===0)return p
s=p.a
if(s===b.a){if(s){s=$.v()
return p.C(s,!0).am(b.C(s,!0),!1)}return p.am(b,!1)}if(s){r=p
q=b}else{r=b
q=p}s=$.v()
return q.am(r.C(s,!0),!0).O(s,!0)},
aS(a,b){var s,r,q=this,p=q.c
if(p===0)return b
s=b.c
if(s===0)return q
r=q.a
if(r===b.a)return q.O(b,r)
if(A.da(q.b,p,b.b,s)>=0)return q.C(b,r)
return b.C(q,!r)},
aj(a,b){var s,r,q=this,p=q.c
if(p===0)return b.K(0)
s=b.c
if(s===0)return q
r=q.a
if(r!==b.a)return q.O(b,r)
if(A.da(q.b,p,b.b,s)>=0)return q.C(b,r)
return b.C(q,!r)},
a3(a,b){var s,r,q,p,o,n,m,l=this.c,k=b.c
if(l===0||k===0)return $.p()
s=l+k
r=this.b
q=b.b
p=new Uint16Array(s)
for(o=q.length,n=0;n<k;){if(!(n<o))return A.b(q,n)
A.f6(q[n],r,0,p,n,l);++n}o=this.a!==b.a
m=A.w(s,p)
return new A.r(m===0?!1:o,p,m)},
bQ(a){var s,r,q,p
if(this.c<a.c)return $.p()
this.b7(a)
s=$.ed.E()-$.bb.E()
r=A.ef($.ec.E(),$.bb.E(),$.ed.E(),s)
q=A.w(s,r)
p=new A.r(!1,r,q)
return this.a!==a.a&&q>0?p.K(0):p},
c_(a){var s,r,q,p=this
if(p.c<a.c)return p
p.b7(a)
s=A.ef($.ec.E(),0,$.bb.E(),$.bb.E())
r=A.w($.bb.E(),s)
q=new A.r(!1,s,r)
if($.ee.E()>0)q=q.ai(0,$.ee.E())
return p.a&&q.c>0?q.K(0):q},
b7(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.c
if(b===$.f2&&a.c===$.f4&&c.b===$.f1&&a.b===$.f3)return
s=a.b
r=a.c
q=r-1
if(!(q>=0&&q<s.length))return A.b(s,q)
p=16-B.a.gbh(s[q])
if(p>0){o=new Uint16Array(r+5)
n=A.f0(s,r,p,o)
m=new Uint16Array(b+5)
l=A.f0(c.b,b,p,m)}else{m=A.ef(c.b,0,b,b+2)
n=r
o=s
l=b}q=n-1
if(!(q>=0&&q<o.length))return A.b(o,q)
k=o[q]
j=l-n
i=new Uint16Array(l)
h=A.eh(o,n,j,i)
g=l+1
q=m.$flags|0
if(A.da(m,l,i,h)>=0){q&2&&A.x(m)
if(!(l>=0&&l<m.length))return A.b(m,l)
m[l]=1
A.ca(m,g,i,h,m)}else{q&2&&A.x(m)
if(!(l>=0&&l<m.length))return A.b(m,l)
m[l]=0}q=n+2
f=new Uint16Array(q)
if(!(n>=0&&n<q))return A.b(f,n)
f[n]=1
A.ca(f,n+1,o,n,f)
e=l-1
for(q=m.length;j>0;){d=A.hD(k,m,e);--j
A.f6(d,f,0,m,j,n)
if(!(e>=0&&e<q))return A.b(m,e)
if(m[e]<d){h=A.eh(f,n,j,i)
A.ca(m,g,i,h,m)
for(;--d,m[e]<d;)A.ca(m,g,i,h,m)}--e}$.f1=c.b
$.f2=b
$.f3=s
$.f4=r
$.ec.b=m
$.ed.b=g
$.bb.b=n
$.ee.b=p},
gk(a){var s,r,q,p,o=new A.db(),n=this.c
if(n===0)return 6707
s=this.a?83585:429689
for(r=this.b,q=r.length,p=0;p<n;++p){if(!(p<q))return A.b(r,p)
s=o.$2(s,r[p])}return new A.dc().$1(s)},
J(a,b){if(b==null)return!1
return b instanceof A.r&&this.D(0,b)===0},
h(a){var s,r,q,p,o,n=this,m=n.c
if(m===0)return"0"
if(m===1){if(n.a){m=n.b
if(0>=m.length)return A.b(m,0)
return B.a.h(-m[0])}m=n.b
if(0>=m.length)return A.b(m,0)
return B.a.h(m[0])}s=A.a([],t.s)
m=n.a
r=m?n.K(0):n
for(;r.c>1;){q=$.eG()
if(q.c===0)A.a4(B.C)
p=r.c_(q).h(0)
s.push(p)
o=p.length
if(o===1)s.push("000")
if(o===2)s.push("00")
if(o===3)s.push("0")
r=r.bQ(q)}q=r.b
if(0>=q.length)return A.b(q,0)
s.push(B.a.h(q[0]))
if(m)s.push("-")
return new A.b4(s,t.r).ce(0)}}
A.db.prototype={
$2(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
$S:7}
A.dc.prototype={
$1(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
$S:17}
A.aI.prototype={
J(a,b){if(b==null)return!1
return b instanceof A.aI&&this.a===b.a},
gk(a){return B.a.gk(this.a)},
h(a){var s,r,q,p,o=this.a,n=B.a.n(o,36e8)
o%=36e8
s=B.a.n(o,6e7)
o%=6e7
r=s<10?"0":""
q=B.a.n(o,1e6)
p=q<10?"0":""
return""+n+":"+r+s+":"+p+q+"."+B.x.cj(B.a.h(o%1e6),6,"0")}}
A.df.prototype={
h(a){return this.X()}}
A.i.prototype={
gW(){return A.hk(this)}}
A.bB.prototype={
h(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.cv(s)
return"Assertion failed"}}
A.Q.prototype={}
A.J.prototype={
gar(){return"Invalid argument"+(!this.a?"(s)":"")},
gaq(){return""},
h(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.gar()+q+o
if(!s.a)return n
return n+s.gaq()+": "+A.cv(s.gaK())},
gaK(){return this.b}}
A.as.prototype={
gaK(){return this.b},
gar(){return"RangeError"},
gaq(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.k(q):""
else if(q==null)s=": Not greater than or equal to "+A.k(r)
else if(q>r)s=": Not in inclusive range "+A.k(r)+".."+A.k(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.k(r)
return s}}
A.bG.prototype={
gaK(){return this.b},
gar(){return"RangeError"},
gaq(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gl(a){return this.f}}
A.b7.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.c4.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.au.prototype={
h(a){return"Bad state: "+this.a}}
A.bD.prototype={
h(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.cv(s)+"."}}
A.bZ.prototype={
h(a){return"Out of Memory"},
gW(){return null},
$ii:1}
A.b6.prototype={
h(a){return"Stack Overflow"},
gW(){return null},
$ii:1}
A.dg.prototype={
h(a){return"Exception: "+this.a}}
A.cw.prototype={
h(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=B.x.bC(q,0,75)+"..."
return r+"\n"+q}}
A.bH.prototype={
gW(){return null},
h(a){return"IntegerDivisionByZeroException"},
$ii:1}
A.K.prototype={
gl(a){var s,r=this.gu(this)
for(s=0;r.p();)++s
return s},
gU(a){var s=this.gu(this)
if(!s.p())throw A.c(A.cA())
return s.gq()},
T(a,b){var s,r
A.hm(b,"index")
s=this.gu(this)
for(r=b;s.p();){if(r===0)return s.gq();--r}throw A.c(A.eR(b,b-r,this,"index"))},
h(a){return A.hb(this,"(",")")}}
A.aY.prototype={
h(a){return"MapEntry("+A.k(this.a)+": "+A.k(this.b)+")"}}
A.u.prototype={
gk(a){return A.e.prototype.gk.call(this,0)},
h(a){return"null"}}
A.e.prototype={$ie:1,
J(a,b){return this===b},
gk(a){return A.ar(this)},
h(a){return"Instance of '"+A.cH(this)+"'"},
gt(a){return A.iW(this)},
toString(){return this.h(this)}}
A.cn.prototype={
h(a){return""},
$iH:1}
A.c3.prototype={
gl(a){return this.a.length},
h(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.dw.prototype={
cg(a){if(a<=0||a>4294967296)throw A.c(A.hl("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
A.W.prototype={
gk(a){var s=this.a,r=this.b
return A.cG(new A.m(s,r).$s,s,r,B.f)},
J(a,b){var s,r,q,p
if(b==null)return!1
if(b instanceof A.W){s=b.a
r=b.b
q=this.a
p=this.b
p=A.cG(new A.m(s,r).$s,s,r,B.f)===A.cG(new A.m(q,p).$s,q,p,B.f)
s=p}else s=!1
return s},
h(a){var s=this
return"("+s.a+" "+s.b+") => '"+s.c+"' "+s.d}}
A.al.prototype={}
A.ao.prototype={
h(a){var s=this
return"               row: "+s.a+"\n            column: "+s.b+"\n         character: '"+s.c+"'\n    characterColor: "+s.d+"\n\n          pixelRow: "+s.e+"\n       pixelColumn: "+s.f+"\n         pixelIsOn: "+s.r+"\n    "}}
A.aq.prototype={
sab(a){var s,r,q,p=this
if(a<0){s=p.d=a
for(r=p.b,q=p.a;s<0;){s+=r
p.d=s
p.c=B.a.j(p.c-1,q)}}else{s=p.b
p.c=B.a.j(p.c+B.a.M(a,s),p.a)
p.d=B.a.j(a,s)}},
gG(){return this.c*this.b+this.d},
sG(a){var s=this,r=s.b
s.c=B.a.j(B.a.M(a,r),s.a)
s.d=B.a.j(a,r)}}
A.c2.prototype={
bE(a,b,c,d,e,f,g,h){var s,r=this,q=self.document
q.onfocus=A.bu(new A.cJ(r))
q.onblur=A.bu(new A.cK(r))
q=r.w
q.tabIndex=-1
q.style.display="block"
q.style.outline="none"
s=q.getContext("2d")
if(s==null)s=t.m.a(s)
s.imageSmoothingEnabled=!1
q.onfocus=A.bu(new A.cL(r))
q.onblur=A.bu(new A.cM(r))
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
b4(){var s=this.x,r=s.getContext("2d")
if(r==null)r=t.m.a(r)
r.save()
r.beginPath()
r.clearRect(0,0,s.width,s.height)
r.restore()
return r},
b6(){var s=this.w.getContext("2d")
if(s==null)s=t.m.a(s)
s.save()
s.beginPath()
s.drawImage(this.x,0,0)
s.restore()
return s},
P(a,b,c,d){var s,r,q,p,o,n,m=this,l=a<0||a>=m.b||b<0||b>=m.c
if(l)return
s=m.a9(a,b)
a=s.a
b=s.b
r=A.e8(b)
q=r.a
p=B.a.m(1,r.b)
l=m.y
if(!(a>=0&&a<l.length))return A.b(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.b(l,q)
o=l[q]
l.$flags&2&&A.x(l)
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
R(a,b,c,d,e){var s,r,q,p,o,n,m=this,l=a<0||a>=m.b||b<0||b>=m.c
if(l)return
s=m.a9(a,b)
a=s.a
b=s.b
r=A.e8(b)
q=r.a
p=B.a.m(1,r.b)
l=m.y
if(!(a>=0&&a<l.length))return A.b(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.b(l,q)
o=l[q]
l.$flags&2&&A.x(l)
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
bu(a,b){var s,r,q,p,o=this.a9(b,a)
b=o.a
s=A.e8(o.b)
r=s.a
q=B.a.m(1,s.b)
p=this.y
if(!(b>=0&&b<p.length))return A.b(p,b)
p=p[b]
if(!(r>=0&&r<p.length))return A.b(p,r)
return(p[r]&q)>>>0>0},
bk(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=this
if(e==null)e=k.c-c
if(b==null)b=k.b-d
k.b4()
if(c===0&&d===0&&e===k.c&&b===k.b){for(s=k.y,r=s.length,q=0;q<r;++q)for(p=0;o=s[q],p<o.length;++p){o.$flags&2&&A.x(o)
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
for(p=c;p<m;++p)k.P(l,B.a.j(p,r),o,!1)}}k.b6()},
a_(a){return this.bk(0,null,0,0,null)},
bY(a,b,c,d,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.b4()
s=e.a9(a,b)
a=s.a
b=s.b
r=B.a.c2(1,a0)-1
for(q=a0-1,p=t.t,o=e.x,n=0;n<8;++n){m=c[n]
l=m&r
m=A.a([],p)
for(k=a+n,j=0;j<a0;++j){i=e.bu(b+j,k)?1:0
m.push(B.a.m(i,q-j))}h=B.h.ca(m,0,new A.cI())
switch(a1){case B.z:for(j=0;j<a0;++j){m=b+j
if((B.a.F(l,q-j)&1)>0)e.R(k,m,d,o,!1)
else e.P(k,m,o,!1)}break
case B.dU:for(j=0;j<a0;++j){m=b+j
if((B.a.F(l,q-j)&1)>0)e.P(k,m,o,!1)
else e.R(k,m,d,o,!1)}break
case B.dZ:for(j=0;j<a0;++j){g=q-j
if((B.a.F(l,g)&1)>0&&(B.a.ai(h,g)&1)===0)e.R(k,b+j,d,o,!1)}break
case B.dY:for(j=0;j<a0;++j)if((B.a.F(l,q-j)&1)>0)e.R(k,b+j,d,o,!1)
break
case B.e_:for(f=l&h,j=0;j<a0;++j)if((B.a.F(f,q-j)&1)>0)e.R(k,b+j,d,o,!1)
break
case B.e0:for(f=l&h,j=0;j<a0;++j)if((B.a.F(f,q-j)&1)>0)e.P(k,b+j,o,!1)
break
case B.e2:for(f=l&h,j=0;j<a0;++j)if((B.a.F(f,q-j)&1)===0)e.P(k,b+j,o,!1)
break
case B.e3:for(f=l&h,j=0;j<a0;++j){m=b+j
if((B.a.F(f,q-j)&1)===0)e.P(k,m,o,!1)
else e.R(k,m,d,o,!1)}break}}e.b6()},
bw(a,b,c){this.bY(c.a,c.b,b,a,8,B.z,!0,!1,!1)},
a0(){var s=this.w
s.style.opacity="1.0"
s.focus()},
Z(){var s=this.w
s.style.opacity="0.5"
s.blur()}}
A.cJ.prototype={
$0(){this.a.z=!0},
$S:1}
A.cK.prototype={
$0(){this.a.z=!1},
$S:1}
A.cL.prototype={
$0(){this.a.a0()},
$S:1}
A.cM.prototype={
$0(){this.a.Z()},
$S:1}
A.cI.prototype={
$2(a,b){return(a|b)>>>0},
$S:7}
A.L.prototype={
X(){return"Mode."+this.b}}
A.at.prototype={
X(){return"State."+this.b}}
A.cU.prototype={
bF(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=this,r=s.f
r.tabIndex=-1
r.onfocus=A.bu(new A.cV(s))
r.onblur=A.bu(new A.cW(s))
r.onkeydown=A.fo(new A.cX(s,l,new A.d0(),new A.d_(s)))
r.onclick=A.fo(new A.cY(s,new A.d1(s),o))
A.hu(A.eP(300),new A.cZ(s))
s.Z()
s.a_(0)},
gaG(){var s=this.w
s===$&&A.ai()
return s.gaG()},
gaE(){var s=this.w
s===$&&A.ai()
return s.gaE()},
aC(a,b){return new A.m(B.a.j(a,this.a),B.a.j(b,this.b))},
b9(){var s=this,r=s.x
s.CW.S(0,new A.W(r.c,r.d," ","white"))
s.bg()
s.cy=!1},
bg(){var s,r,q,p,o,n,m,l,k,j
for(s=this.CW,r=A.hK(s,s.r,s.$ti.c),q=this.w,p=this.cx,o=r.$ti.c;r.p();){n=r.d
if(n==null)n=o.a(n)
m=n.a
l=n.b
if(p.aF(n.c)){k=p.A(0,n.c)
k.toString
j=k}else j=$.fH()
q===$&&A.ai()
q.bw(n.d,j,new A.m(m*10,l*8))}if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.ba()}},
aT(a,b){var s,r=this.aC(b,a)
b=r.a
a=r.b
s=this.ch
if(!(b>=0&&b<s.length))return A.b(s,b)
s=s[b]
if(!(a>=0&&a<s.length))return A.b(s,a)
return s[a].c},
br(){var s=this.x
s.sab(0)
s.c=B.a.j(s.c+1,s.a)},
a1(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=this,i=e==null?j.x.c:e,h=j.aC(i,c==null?j.x.d:c)
i=j.x
i.c=B.a.j(h.a,i.a)
i.sab(h.b)
if(b==null)b=j.d
for(s=a.split(""),r=s.length,q=j.ch,p=j.CW,o=0;o<r;++o){n=s[o]
m=i.c
l=i.d
if(!(m>=0&&m<q.length))return A.b(q,m)
m=q[m]
if(!(l>=0&&l<m.length))return A.b(m,l)
k=m[l]
k.c=n
k.d=b
p.S(0,k)
i.sab(i.d+1)}j.bg()
if(d)j.br()},
B(a,b,c){return this.a1(a,null,b,!0,c)},
ci(a,b,c){return this.a1(a,b,c,!0,null)},
H(a,b){return this.a1(a,null,b,!0,null)},
aO(a,b,c,d){return this.a1(a,b,c,!0,d)},
bt(a,b){return this.a1(a,null,null,b,null)},
bj(a,b,c,d,e){var s,r,q,p,o,n,m,l=this
if(e==null)e=l.b-b
if(c==null)c=l.a-d
s=d+c
r=b+e
for(q=l.ch,p=l.d,o=d;o<s;++o)for(n=b;n<r;++n){if(!(o>=0&&o<q.length))return A.b(q,o)
m=q[o]
if(!(n>=0&&n<m.length))return A.b(m,n)
m=m[n]
m.c=" "
m.d=p}q=l.w
q===$&&A.ai()
q.bk(0,c*10,b*8,d*10,e*8)
q=l.x
q.c=B.a.j(d,q.a)
q.sab(b)},
a_(a){return this.bj(0,0,null,0,null)},
c4(){if(this.ay!==B.e)throw A.c(A.bF("Terminal already awaiting input."))},
cc(){this.c4()
this.ay=B.i
var s=this.at
return new A.F(s,A.a1(s).i("F<1>")).gU(0)},
a0(){return this.gaG().$0()},
Z(){return this.gaE().$0()}}
A.d1.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.w
i===$&&A.ai()
s=J.eJ(a.offsetX)
r=Math.max(Math.min(B.a.M(J.eJ(a.offsetY)-1,i.e),i.b-1),0)
q=Math.max(Math.min(B.a.M(s-1,i.d),i.c-1),0)
p=B.a.n(r,10)
o=B.a.n(q,8)
n=j.aT(o,p)
m=j.aC(p,o)
l=m.a
k=m.b
j=j.ch
if(!(l>=0&&l<j.length))return A.b(j,l)
j=j[l]
if(!(k>=0&&k<j.length))return A.b(j,k)
return new A.ao(p,o,n,j[k].d,r,q,i.bu(q,r))},
$S:18}
A.d0.prototype={
$1(a){var s=a.key
return new A.al(s.length>1?"":s)},
$S:19}
A.d_.prototype={
$0(){var s,r,q,p,o,n=this.a,m=n.a,l=n.b,k=new A.aq(m,l)
k.sG(n.y.gG())
s=A.a([],t.s)
r=n.z
q=r.b
while(p=k.c,o=k.d,p*l+o<r.c*q+r.d){s.push(n.aT(o,p))
p=k.c*l+k.d+1
k.c=B.a.j(B.a.M(p,l),m)
k.d=B.a.j(p,l)}return B.h.bo(s,"")},
$S:20}
A.cV.prototype={
$0(){var s=this.a.w
s===$&&A.ai()
s.a0()},
$S:1}
A.cW.prototype={
$0(){var s=this.a.w
s===$&&A.ai()
s.Z()},
$S:1}
A.cX.prototype={
$1(a){var s,r,q,p
a.preventDefault()
s=this.a
switch(s.ay){case B.e:break
case B.i:r=s.at
if(r.d!=null){r.S(0,this.c.$1(a))
s.ay=B.e}break
case B.B:s.b9()
$label0$1:{q=a.keyCode
if(13===q){r=s.as
if(r.d!=null){r.S(0,J.fV(this.d.$0()))
s.br()
s.ay=B.e}break $label0$1}if(8===q){r=s.x
if(r.gG()>s.y.gG()){r.sG(r.gG()-1)
s.bt(" ",!1)
r.sG(r.gG()-1)}break $label0$1}p=a.key
if(p.length===1&&s.x.gG()<s.z.gG())s.bt(p,!1)}break
case B.j:break}},
$S:8}
A.cY.prototype={
$1(a){var s
a.preventDefault()
s=this.a
if(s.ay===B.j&&s.ax.d!=null){s.ax.S(0,this.b.$1(a))
s.ay=B.e}},
$S:8}
A.cZ.prototype={
$1(a){var s,r,q,p=this.a,o=p.w
o===$&&A.ai()
if(o.z&&J.aj(self.document.activeElement,o.w)&&p.ay===B.B)if(p.cy)p.b9()
else{s=p.x
r=s.c
s=s.d
q=$.fG()
o.bw(p.d,q,new A.m(r*10,s*8))
p.cy=!0}},
$S:21}
A.G.prototype={
X(){return"Direction."+this.b},
gbq(){switch(this){case B.n:var s=B.e9
break
case B.o:s=B.e4
break
case B.p:s=B.e6
break
case B.q:s=B.e5
break
case B.r:s=B.ea
break
case B.t:s=B.eb
break
case B.u:s=B.e7
break
case B.v:s=B.e8
break
default:s=null}return s}}
A.ac.prototype={
X(){return"Mode."+this.b}}
A.cy.prototype={
bn(a,b,c){var s,r=a.gak()
switch(a){case B.b:s="orange"
break
case B.c:s="mediumorchid"
break
default:s=null}this.a.aO(r,s,c*3+3,b*3+3)},
bm(a){var s,r,q,p,o,n,m,l,k,j=this,i=j.a
i.bj(0,2,24,2,24)
for(s=j.b,r=0;r<8;++r)for(q=r*3+3,p=r*8,o=0;o<8;++o){n=s.a
m=$.v()
l=p+o
n=n.v(0,m.m(0,l))
k=$.p()
if(n.D(0,k)>0)j.bn(B.b,r,o)
else if(s.b.v(0,m.m(0,l)).D(0,k)>0)j.bn(B.c,r,o)
else i.aO("\u2022","lightgray",o*3+3,q)}if(a!=null){s=a.a*3+3
q=s-1
p=a.b*3+3
n=p-1
i.B("\u250c",n,q);++p
i.B("\u2510",p,q);++s
i.B("\u2514",n,s)
i.B("\u2518",p,s)}},
bl(){return this.bm(null)},
aV(){var s,r,q,p,o=this.a
o.a_(0)
for(s=A.h7(new A.b8(A.a("   ___  _   _        _ _     \n  / _ \\| |_| |_  ___| | |___ \n | (_) |  _| ' \\/ -_) | / _ \\\n  \\___/ \\__|_||_\\___|_|_\\___/\n".split("\n"),t.s),new A.cz(),t.U),0,t.N),r=s.a,r=r.gu(r),s=s.b,q=new A.aO(r,s);q.p();){p=q.c
p=p>=0?new A.m(s+p,r.gq()):A.a4(A.cA())
o.aO(p.b,"lightgreen",8,p.a+3)}},
ac(){var s=0,r=A.aB(t.B),q,p=this,o,n,m,l
var $async$ac=A.aF(function(a,b){if(a===1)return A.ay(b,r)
while(true)switch(s){case 0:p.aV()
o=p.a
o.B("Select a difficulty level:",10,10)
o.B("(A) Easy",12,12)
o.H("(B) Medium",12)
o.H("(C) Hard",12)
o.H("(D) Expert",12)
n=null
case 3:if(!(n==null)){s=5
break}if(o.ay!==B.e)A.a4(A.bF("Terminal already awaiting input."))
o.ay=B.i
m=o.at
s=6
return A.M(new A.F(m,A.a1(m).i("F<1>")).gU(0),$async$ac)
case 6:l=b.b.toLowerCase()
$label0$0:{if("a"===l){m=B.dW
break $label0$0}if("b"===l){m=B.dV
break $label0$0}if("c"===l){m=B.e1
break $label0$0}if("d"===l){m=B.dX
break $label0$0}m=null
break $label0$0}case 4:n=m
s=3
break
case 5:q=n
s=1
break
case 1:return A.az(q,r)}})
return A.aA($async$ac,r)},
ae(){var s=0,r=A.aB(t.h),q,p=this,o,n,m,l
var $async$ae=A.aF(function(a,b){if(a===1)return A.ay(b,r)
while(true)switch(s){case 0:p.aV()
o=p.a
o.B("Select your token:",10,10)
o.B("(A) Naught (Move First)",12,12)
o.H("(B) Cross (Move Second)",12)
n=null
case 3:if(!(n==null)){s=5
break}if(o.ay!==B.e)A.a4(A.bF("Terminal already awaiting input."))
o.ay=B.i
m=o.at
s=6
return A.M(new A.F(m,A.a1(m).i("F<1>")).gU(0),$async$ae)
case 6:l=b.b.toLowerCase()
$label0$0:{if("a"===l){m=B.b
break $label0$0}if("b"===l){m=B.c
break $label0$0}m=null
break $label0$0}case 4:n=m
s=3
break
case 5:q=n
s=1
break
case 1:return A.az(q,r)}})
return A.aA($async$ae,r)},
ad(){var s=0,r=A.aB(t.R),q,p=this,o,n,m,l,k,j
var $async$ad=A.aF(function(a,b){if(a===1)return A.ay(b,r)
while(true)switch(s){case 0:j=p.b.gaf()
o=p.a,n=-1,m=-1
case 3:if(!!B.h.c7(j,new A.m(n,m))){s=4
break}if(o.ay!==B.e)A.a4(A.bF("Terminal already awaiting input."))
o.ay=B.j
l=o.ax
s=5
return A.M(new A.F(l,A.a1(l).i("F<1>")).gU(0),$async$ad)
case 5:k=b
n=B.a.n(k.a-3,3)
m=B.a.n(k.b-3,3)
s=3
break
case 4:q=new A.m(n,m)
s=1
break
case 1:return A.az(q,r)}})
return A.aA($async$ad,r)},
a2(a){return this.bB(a)},
bB(a){var s=0,r=A.aB(t.H),q=this,p,o,n
var $async$a2=A.aF(function(b,c){if(b===1)return A.ay(c,r)
while(true)switch(s){case 0:n=q.a
n.B("Game Over!",30,15)
p=q.b
if(p.d===0||p.e===0)n.ci("Othello!","yellow",30)
o=p.d
p=p.e
if(o===p)n.H("A tie!",30)
else switch(a){case B.b:if(o>p)n.H("You win!",30)
else n.H("Computer wins!",30)
break
case B.c:if(o>p)n.H("Computer wins!",30)
else n.H("You win!",30)
break}n.H("Press any key!",30)
s=2
return A.M(n.cc(),$async$a2)
case 2:return A.az(null,r)}})
return A.aA($async$a2,r)},
bA(a){var s,r,q=this,p=a.gaM(),o=q.a
o.B("Score",30,3)
s=a.gak()
switch(a){case B.c:r=q.b.e
break
case B.b:r=q.b.d
break
default:r=null}o.B("  Human ("+s+"):    "+A.k(r)+" ",30,5)
r=p.gak()
switch(p){case B.c:s=q.b.e
break
case B.b:s=q.b.d
break
default:s=null}o.H("  Computer ("+r+"): "+A.k(s)+" ",30)},
L(){var s=0,r=A.aB(t.H),q=this,p,o,n,m,l,k,j,i,h,g
var $async$L=A.aF(function(a,b){if(a===1)return A.ay(b,r)
while(true)switch(s){case 0:p=q.b,o=q.a,n=t.z
case 2:if(!!0){s=3
break}s=4
return A.M(q.ac(),$async$L)
case 4:m=b
s=5
return A.M(q.ae(),$async$L)
case 5:l=b
o.a_(0)
p.a=p.b=$.p()
p.d=p.e=0
p.V(B.b,3,3)
p.V(B.b,4,4)
p.V(B.c,3,4)
p.V(B.c,4,3)
p.c=B.b
q.bl()
q.bA(l)
k=!1
case 6:if(!!0){s=8
break}j=p.gaf().length===0
s=!j?9:11
break
case 9:if(p.c===l)o.B("Your move...",3,27)
else o.B("Thinking...",3,27)
s=12
return A.M(A.h6(A.eP(100),n),$async$L)
case 12:s=p.c===l?13:15
break
case 13:s=16
return A.M(q.ad(),$async$L)
case 16:s=14
break
case 15:s=17
return A.M(A.ev(p,m),$async$L)
case 17:case 14:i=b
h=i.a
g=i.b
o.B("              ",3,27)
p.aL(h,g)
if(p.c===l)q.bm(new A.m(h,g))
else q.bl()
q.bA(l)
s=10
break
case 11:if(k){s=8
break}p.c=p.c.gaM()
case 10:case 7:k=j
s=6
break
case 8:s=18
return A.M(q.a2(l),$async$L)
case 18:s=2
break
case 3:return A.az(null,r)}})
return A.aA($async$L,r)}}
A.cz.prototype={
$1(a){return a.length!==0},
$S:22}
A.bY.prototype={
gbv(){switch(this.c){case B.b:var s=this.a
break
case B.c:s=this.b
break
default:s=null}return s},
gaN(){switch(this.c){case B.b:var s=this.b
break
case B.c:s=this.a
break
default:s=null}return s},
V(a,b,c){var s=this,r=$.v().m(0,b*8+c)
switch(a){case B.b:s.a=s.a.ah(0,r);++s.d
if(s.b.v(0,r).D(0,$.p())>0){--s.e
s.b=s.b.v(0,$.eE().aW(0,r))}break
case B.c:s.b=s.b.ah(0,r);++s.e
if(s.a.v(0,r).D(0,$.p())>0){--s.d
s.a=s.a.v(0,$.eE().aW(0,r))}break}},
gaf(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=A.a([],t.w)
for(s=0;s<8;++s)for(r=s*8,q=0;q<8;++q)if(g.a.ah(0,g.b).v(0,$.v().m(0,r+q)).D(0,$.p())<=0){for(p=0,o=0;o<8;++o){n=B.y[o].gbq()
m=n.a
l=n.b
k=s+m
j=q+l
i=0
while(!0){h=k>=0
if(!(h&&k<8&&j>=0&&j<8&&g.gaN().v(0,$.v().m(0,k*8+j)).D(0,$.p())>0))break;++i
k+=m
j+=l}if(i>0)h=h&&k<8&&j>=0&&j<8&&g.gbv().v(0,$.v().m(0,k*8+j)).D(0,$.p())>0
else h=!1
if(h)p+=i}if(p>0)f.push(new A.m(s,q))}return f},
aL(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
i.V(i.c,a,b)
for(s=0;s<8;++s){r=B.y[s].gbq()
q=r.a
p=r.b
o=a+q
n=b+p
m=n
l=o
k=0
while(!0){j=l>=0
if(!(j&&l<8&&m>=0&&m<8&&i.gaN().v(0,$.v().m(0,l*8+m)).D(0,$.p())>0))break;++k
l+=q
m+=p}if(k>0)j=j&&l<8&&m>=0&&m<8&&i.gbv().v(0,$.v().m(0,l*8+m)).D(0,$.p())>0
else j=!1
if(j)while(!0){if(!(o>=0&&o<8&&n>=0&&n<8&&i.gaN().v(0,$.v().m(0,o*8+n)).D(0,$.p())>0))break
i.V(i.c,o,n)
o+=q
n+=p}}i.c=i.c.gaM()},
h(a){var s,r,q,p,o,n,m,l=A.a([],t.s)
for(s=0;s<8;++s)l.push(B.a.h(s))
l="  "+B.h.bo(l," ")+"\n"
for(r=0;r<8;++r){l+=""+r+" "
for(q=r*8,s=0;s<8;++s){p=q+s
o=this.a
n=$.v()
o=o.v(0,n.m(0,p))
m=$.p()
if(o.D(0,m)>0)l+="o "
else l=this.b.v(0,n.m(0,p)).D(0,m)>0?l+"x ":l+". "}l+="\n"}return l.charCodeAt(0)==0?l:l}}
A.b3.prototype={
X(){return"Player."+this.b},
gaM(){switch(this){case B.c:var s=B.b
break
case B.b:s=B.c
break
default:s=null}return s},
gak(){switch(this){case B.c:var s="X"
break
case B.b:s="O"
break
default:s=null}return s}};(function aliases(){var s=J.Y.prototype
s.bD=s.h})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._static_2,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u
s(A,"iI","hz",3)
s(A,"iJ","hA",3)
s(A,"iK","hB",3)
r(A,"fy","iD",0)
s(A,"iL","ix",4)
q(A,"iM","iy",5)
p(A.l.prototype,"gb5","N",5)
o(A.be.prototype,"gbW","bX",0)
var n
o(n=A.c2.prototype,"gaG","a0",0)
o(n,"gaE","Z",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.e,null)
q(A.e,[A.e3,J.bI,J.bA,A.i,A.a7,A.cN,A.K,A.an,A.c7,A.aO,A.aL,A.ax,A.bE,A.d3,A.cF,A.aK,A.bm,A.aX,A.cD,A.bN,A.bM,A.cB,A.dz,A.dd,A.E,A.ci,A.co,A.bo,A.c8,A.a6,A.av,A.cc,A.cb,A.a_,A.l,A.c9,A.cg,A.cj,A.be,A.cm,A.dH,A.b5,A.dy,A.aw,A.o,A.r,A.aI,A.df,A.bZ,A.b6,A.dg,A.cw,A.bH,A.aY,A.u,A.cn,A.c3,A.dw,A.W,A.al,A.ao,A.aq,A.c2,A.cU,A.cy,A.bY])
q(J.bI,[J.bJ,J.aQ,J.aS,J.aR,J.aT,J.ak,J.a9])
q(J.aS,[J.Y,J.t,A.bO,A.b0])
q(J.Y,[J.c_,J.ad,J.X])
r(J.cC,J.t)
q(J.ak,[J.aP,J.bK])
q(A.i,[A.am,A.Q,A.bL,A.c5,A.ce,A.c1,A.ch,A.bB,A.J,A.b7,A.c4,A.au,A.bD])
q(A.a7,[A.ct,A.cu,A.cT,A.dP,A.dR,A.d7,A.d6,A.dI,A.dm,A.du,A.cR,A.cQ,A.dD,A.dc,A.d1,A.d0,A.cX,A.cY,A.cZ,A.cz])
q(A.ct,[A.dV,A.d8,A.d9,A.dF,A.dE,A.cx,A.dh,A.dq,A.dp,A.dl,A.dj,A.di,A.dt,A.ds,A.dr,A.cS,A.cP,A.dA,A.dK,A.dL,A.dC,A.cJ,A.cK,A.cL,A.cM,A.d_,A.cV,A.cW])
q(A.K,[A.aJ,A.b8,A.aN])
q(A.aJ,[A.ab,A.aW,A.aV])
r(A.b4,A.ab)
r(A.ck,A.ax)
q(A.ck,[A.m,A.cl])
r(A.aM,A.bE)
r(A.b2,A.Q)
q(A.cT,[A.cO,A.aH])
r(A.aa,A.aX)
r(A.aU,A.aa)
q(A.cu,[A.dQ,A.dJ,A.dM,A.dn,A.dv,A.cE,A.db,A.cI])
q(A.b0,[A.bP,A.ap])
q(A.ap,[A.bg,A.bi])
r(A.bh,A.bg)
r(A.aZ,A.bh)
r(A.bj,A.bi)
r(A.b_,A.bj)
q(A.aZ,[A.bQ,A.bR])
q(A.b_,[A.bS,A.bT,A.bU,A.bV,A.bW,A.b1,A.bX])
r(A.bp,A.ch)
r(A.bn,A.av)
r(A.bd,A.bn)
r(A.F,A.bd)
r(A.cd,A.cc)
r(A.bc,A.cd)
r(A.b9,A.cb)
r(A.cf,A.cg)
r(A.dB,A.dH)
r(A.bl,A.b5)
r(A.bf,A.bl)
q(A.J,[A.as,A.bG])
q(A.df,[A.L,A.at,A.G,A.ac,A.b3])
s(A.bg,A.o)
s(A.bh,A.aL)
s(A.bi,A.o)
s(A.bj,A.aL)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{d:"int",y:"double",j5:"num",A:"String",es:"bool",u:"Null",j:"List",e:"Object",jf:"Map"},mangledNames:{},types:["~()","u()","u(@)","~(~())","~(@)","~(e,H)","u(e,H)","d(d,d)","u(n)","P<~>()","@(@)","@(@,A)","@(A)","u(~())","u(@,H)","~(d,@)","~(e?,e?)","d(d)","ao(n)","al(n)","A()","~(d2)","es(A)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.m&&a.b(c.a)&&b.b(c.b),"2;black,white":(a,b)=>c=>c instanceof A.cl&&a.b(c.a)&&b.b(c.b)}}
A.i0(v.typeUniverse,JSON.parse('{"c_":"Y","ad":"Y","X":"Y","bJ":{"h":[]},"aQ":{"u":[],"h":[]},"aS":{"n":[]},"Y":{"n":[]},"t":{"j":["1"],"n":[]},"cC":{"t":["1"],"j":["1"],"n":[]},"ak":{"y":[]},"aP":{"y":[],"d":[],"h":[]},"bK":{"y":[],"h":[]},"a9":{"A":[],"h":[]},"am":{"i":[]},"aJ":{"K":["1"]},"ab":{"K":["1"]},"b8":{"K":["1"]},"aN":{"K":["+(d,1)"]},"b4":{"ab":["1"],"K":["1"],"ab.E":"1"},"aM":{"bE":["1","2"]},"b2":{"Q":[],"i":[]},"bL":{"i":[]},"c5":{"i":[]},"bm":{"H":[]},"ce":{"i":[]},"c1":{"i":[]},"aa":{"aX":["1","2"]},"aW":{"K":["1"]},"aV":{"K":["aY<1,2>"]},"aU":{"aa":["1","2"],"aX":["1","2"]},"bO":{"n":[],"h":[]},"b0":{"n":[]},"bP":{"n":[],"h":[]},"ap":{"C":["1"],"n":[]},"aZ":{"o":["y"],"j":["y"],"C":["y"],"n":[]},"b_":{"o":["d"],"j":["d"],"C":["d"],"n":[]},"bQ":{"o":["y"],"j":["y"],"C":["y"],"n":[],"h":[],"o.E":"y"},"bR":{"o":["y"],"j":["y"],"C":["y"],"n":[],"h":[],"o.E":"y"},"bS":{"o":["d"],"j":["d"],"C":["d"],"n":[],"h":[],"o.E":"d"},"bT":{"o":["d"],"j":["d"],"C":["d"],"n":[],"h":[],"o.E":"d"},"bU":{"o":["d"],"j":["d"],"C":["d"],"n":[],"h":[],"o.E":"d"},"bV":{"o":["d"],"j":["d"],"C":["d"],"n":[],"h":[],"o.E":"d"},"bW":{"d5":[],"o":["d"],"j":["d"],"C":["d"],"n":[],"h":[],"o.E":"d"},"b1":{"o":["d"],"j":["d"],"C":["d"],"n":[],"h":[],"o.E":"d"},"bX":{"o":["d"],"j":["d"],"C":["d"],"n":[],"h":[],"o.E":"d"},"ch":{"i":[]},"bp":{"Q":[],"i":[]},"bo":{"d2":[]},"a6":{"i":[]},"F":{"av":["1"]},"b9":{"cb":["1"]},"l":{"P":["1"]},"bd":{"av":["1"]},"bn":{"av":["1"]},"bf":{"b5":["1"]},"bl":{"b5":["1"]},"bB":{"i":[]},"Q":{"i":[]},"J":{"i":[]},"as":{"i":[]},"bG":{"i":[]},"b7":{"i":[]},"c4":{"i":[]},"au":{"i":[]},"bD":{"i":[]},"bZ":{"i":[]},"b6":{"i":[]},"bH":{"i":[]},"cn":{"H":[]},"ha":{"j":["d"]},"hx":{"j":["d"]},"hw":{"j":["d"]},"h8":{"j":["d"]},"hv":{"j":["d"]},"h9":{"j":["d"]},"d5":{"j":["d"]},"h4":{"j":["y"]},"h5":{"j":["y"]}}'))
A.i_(v.typeUniverse,JSON.parse('{"aJ":1,"c7":1,"aO":1,"aL":1,"bN":1,"ap":1,"bd":1,"cd":1,"cc":1,"bn":1,"cg":1,"cf":1,"cj":1,"be":1,"cm":1,"bl":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.dO
return{o:s("W"),Q:s("i"),Z:s("jd"),V:s("t<W>"),G:s("t<j<W>>"),f:s("t<e>"),w:s("t<+(d,d)>"),s:s("t<A>"),x:s("t<d5>"),b:s("t<@>"),t:s("t<d>"),T:s("aQ"),m:s("n"),g:s("X"),p:s("C<@>"),W:s("al"),j:s("j<@>"),B:s("ac"),q:s("ao"),P:s("u"),K:s("e"),h:s("b3"),L:s("jh"),F:s("+()"),R:s("+(d,d)"),r:s("b4<A>"),l:s("H"),N:s("A"),E:s("d2"),I:s("h"),c:s("Q"),J:s("ad"),U:s("b8<A>"),d:s("l<@>"),a:s("l<d>"),D:s("l<~>"),y:s("es"),i:s("y"),z:s("@"),v:s("@(e)"),C:s("@(e,H)"),S:s("d"),A:s("0&*"),_:s("e*"),O:s("P<u>?"),X:s("e?"),n:s("j5"),H:s("~"),u:s("~(e)"),k:s("~(e,H)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.N=J.bI.prototype
B.h=J.t.prototype
B.a=J.aP.prototype
B.w=J.ak.prototype
B.x=J.a9.prototype
B.O=J.X.prototype
B.P=J.aS.prototype
B.A=J.c_.prototype
B.k=J.ad.prototype
B.C=new A.bH()
B.l=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.D=function() {
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
B.I=function(getTagFallback) {
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
B.E=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.H=function(hooks) {
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
B.G=function(hooks) {
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
B.F=function(hooks) {
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
B.m=function(hooks) { return hooks; }

B.J=new A.bZ()
B.f=new A.cN()
B.K=new A.dw()
B.d=new A.dB()
B.L=new A.cn()
B.n=new A.G("n")
B.o=new A.G("e")
B.p=new A.G("s")
B.q=new A.G("w")
B.r=new A.G("ne")
B.t=new A.G("nw")
B.u=new A.G("se")
B.v=new A.G("sw")
B.M=new A.aI(0)
B.y=A.a(s([B.n,B.o,B.p,B.q,B.r,B.t,B.u,B.v]),A.dO("t<G>"))
B.de=A.a(s([126,129,165,129,189,153,129,126]),t.t)
B.ag=A.a(s([126,255,219,255,195,231,255,126]),t.t)
B.dL=A.a(s([108,254,254,254,124,56,16,0]),t.t)
B.cb=A.a(s([16,56,124,254,124,56,16,0]),t.t)
B.b9=A.a(s([56,124,56,254,254,124,56,124]),t.t)
B.bl=A.a(s([16,16,56,124,254,124,56,124]),t.t)
B.aE=A.a(s([0,0,24,60,60,24,0,0]),t.t)
B.aH=A.a(s([255,255,231,195,195,231,255,255]),t.t)
B.aT=A.a(s([0,60,102,66,66,102,60,0]),t.t)
B.cZ=A.a(s([255,195,153,189,189,153,195,255]),t.t)
B.dK=A.a(s([15,7,15,125,204,204,204,120]),t.t)
B.dJ=A.a(s([60,102,102,102,60,24,126,24]),t.t)
B.cW=A.a(s([63,51,63,48,48,112,240,224]),t.t)
B.a_=A.a(s([127,99,127,99,99,103,230,192]),t.t)
B.a4=A.a(s([153,90,60,231,231,60,90,153]),t.t)
B.aB=A.a(s([128,224,248,254,248,224,128,0]),t.t)
B.bH=A.a(s([2,14,62,254,62,14,2,0]),t.t)
B.cp=A.a(s([24,60,126,24,24,126,60,24]),t.t)
B.cl=A.a(s([102,102,102,102,102,0,102,0]),t.t)
B.cv=A.a(s([127,219,219,123,27,27,27,0]),t.t)
B.cw=A.a(s([62,99,56,108,108,56,204,120]),t.t)
B.bV=A.a(s([0,0,0,0,126,126,126,0]),t.t)
B.bY=A.a(s([24,60,126,24,126,60,24,255]),t.t)
B.V=A.a(s([24,60,126,24,24,24,24,0]),t.t)
B.dj=A.a(s([24,24,24,24,126,60,24,0]),t.t)
B.dc=A.a(s([0,24,12,254,12,24,0,0]),t.t)
B.ay=A.a(s([0,48,96,254,96,48,0,0]),t.t)
B.c2=A.a(s([0,0,192,192,192,254,0,0]),t.t)
B.bA=A.a(s([0,36,102,255,102,36,0,0]),t.t)
B.ae=A.a(s([0,24,60,126,255,255,0,0]),t.t)
B.bZ=A.a(s([0,255,255,126,60,24,0,0]),t.t)
B.b4=A.a(s([0,0,0,0,0,0,0,0]),t.t)
B.bI=A.a(s([48,120,120,48,48,0,48,0]),t.t)
B.a2=A.a(s([108,108,108,0,0,0,0,0]),t.t)
B.as=A.a(s([108,108,254,108,254,108,108,0]),t.t)
B.c6=A.a(s([48,124,192,120,12,248,48,0]),t.t)
B.U=A.a(s([0,198,204,24,48,102,198,0]),t.t)
B.cI=A.a(s([56,108,56,118,220,204,118,0]),t.t)
B.ar=A.a(s([96,96,192,0,0,0,0,0]),t.t)
B.Z=A.a(s([24,48,96,96,96,48,24,0]),t.t)
B.bE=A.a(s([96,48,24,24,24,48,96,0]),t.t)
B.cz=A.a(s([0,102,60,255,60,102,0,0]),t.t)
B.dS=A.a(s([0,48,48,252,48,48,0,0]),t.t)
B.c8=A.a(s([0,0,0,0,0,48,48,96]),t.t)
B.bz=A.a(s([0,0,0,252,0,0,0,0]),t.t)
B.cn=A.a(s([0,0,0,0,0,48,48,0]),t.t)
B.a9=A.a(s([6,12,24,48,96,192,128,0]),t.t)
B.bc=A.a(s([124,198,206,222,246,230,124,0]),t.t)
B.cq=A.a(s([48,112,48,48,48,48,252,0]),t.t)
B.c4=A.a(s([120,204,12,56,96,204,252,0]),t.t)
B.dN=A.a(s([120,204,12,56,12,204,120,0]),t.t)
B.bG=A.a(s([28,60,108,204,254,12,30,0]),t.t)
B.dd=A.a(s([252,192,248,12,12,204,120,0]),t.t)
B.dv=A.a(s([56,96,192,248,204,204,120,0]),t.t)
B.c5=A.a(s([252,204,12,24,48,48,48,0]),t.t)
B.cC=A.a(s([120,204,204,120,204,204,120,0]),t.t)
B.bj=A.a(s([120,204,204,124,12,24,112,0]),t.t)
B.d6=A.a(s([0,48,48,0,0,48,48,0]),t.t)
B.aW=A.a(s([0,48,48,0,0,48,48,96]),t.t)
B.bF=A.a(s([24,48,96,192,96,48,24,0]),t.t)
B.bu=A.a(s([0,0,252,0,0,252,0,0]),t.t)
B.aG=A.a(s([96,48,24,12,24,48,96,0]),t.t)
B.aw=A.a(s([120,204,12,24,48,0,48,0]),t.t)
B.dr=A.a(s([124,198,222,222,222,192,120,0]),t.t)
B.ch=A.a(s([48,120,204,204,252,204,204,0]),t.t)
B.aQ=A.a(s([252,102,102,124,102,102,252,0]),t.t)
B.ai=A.a(s([60,102,192,192,192,102,60,0]),t.t)
B.aa=A.a(s([248,108,102,102,102,108,248,0]),t.t)
B.ao=A.a(s([254,98,104,120,104,98,254,0]),t.t)
B.ct=A.a(s([254,98,104,120,104,96,240,0]),t.t)
B.au=A.a(s([60,102,192,192,206,102,62,0]),t.t)
B.ax=A.a(s([204,204,204,252,204,204,204,0]),t.t)
B.cR=A.a(s([120,48,48,48,48,48,120,0]),t.t)
B.bT=A.a(s([30,12,12,12,204,204,120,0]),t.t)
B.bL=A.a(s([230,102,108,120,108,102,230,0]),t.t)
B.bK=A.a(s([240,96,96,96,98,102,254,0]),t.t)
B.aR=A.a(s([198,238,254,254,214,198,198,0]),t.t)
B.a1=A.a(s([198,230,246,222,206,198,198,0]),t.t)
B.d0=A.a(s([56,108,198,198,198,108,56,0]),t.t)
B.bp=A.a(s([252,102,102,124,96,96,240,0]),t.t)
B.cL=A.a(s([120,204,204,204,220,120,28,0]),t.t)
B.T=A.a(s([252,102,102,124,108,102,230,0]),t.t)
B.al=A.a(s([120,204,224,112,28,204,120,0]),t.t)
B.dE=A.a(s([252,180,48,48,48,48,120,0]),t.t)
B.aO=A.a(s([204,204,204,204,204,204,252,0]),t.t)
B.a6=A.a(s([204,204,204,204,204,120,48,0]),t.t)
B.cU=A.a(s([198,198,198,214,254,238,198,0]),t.t)
B.cO=A.a(s([198,198,108,56,56,108,198,0]),t.t)
B.a8=A.a(s([204,204,204,120,48,48,120,0]),t.t)
B.X=A.a(s([254,198,140,24,50,102,254,0]),t.t)
B.bB=A.a(s([120,96,96,96,96,96,120,0]),t.t)
B.cG=A.a(s([192,96,48,24,12,6,2,0]),t.t)
B.bD=A.a(s([120,24,24,24,24,24,120,0]),t.t)
B.du=A.a(s([16,56,108,198,0,0,0,0]),t.t)
B.S=A.a(s([0,0,0,0,0,0,0,255]),t.t)
B.aP=A.a(s([48,48,24,0,0,0,0,0]),t.t)
B.dk=A.a(s([0,0,120,12,124,204,118,0]),t.t)
B.ck=A.a(s([224,96,96,124,102,102,220,0]),t.t)
B.cN=A.a(s([0,0,120,204,192,204,120,0]),t.t)
B.ba=A.a(s([28,12,12,124,204,204,118,0]),t.t)
B.dx=A.a(s([0,0,120,204,252,192,120,0]),t.t)
B.aU=A.a(s([56,108,96,240,96,96,240,0]),t.t)
B.cK=A.a(s([0,0,118,204,204,124,12,248]),t.t)
B.aF=A.a(s([224,96,108,118,102,102,230,0]),t.t)
B.cA=A.a(s([48,0,112,48,48,48,120,0]),t.t)
B.bO=A.a(s([12,0,12,12,12,204,204,120]),t.t)
B.bh=A.a(s([224,96,102,108,120,108,230,0]),t.t)
B.bQ=A.a(s([112,48,48,48,48,48,120,0]),t.t)
B.by=A.a(s([0,0,204,254,254,214,198,0]),t.t)
B.bR=A.a(s([0,0,248,204,204,204,204,0]),t.t)
B.bk=A.a(s([0,0,120,204,204,204,120,0]),t.t)
B.dB=A.a(s([0,0,220,102,102,124,96,240]),t.t)
B.dy=A.a(s([0,0,118,204,204,124,12,30]),t.t)
B.bv=A.a(s([0,0,220,118,102,96,240,0]),t.t)
B.d3=A.a(s([0,0,124,192,120,12,248,0]),t.t)
B.cX=A.a(s([16,48,124,48,48,52,24,0]),t.t)
B.ce=A.a(s([0,0,204,204,204,204,118,0]),t.t)
B.b8=A.a(s([0,0,204,204,204,120,48,0]),t.t)
B.bo=A.a(s([0,0,198,214,254,254,108,0]),t.t)
B.bM=A.a(s([0,0,198,108,56,108,198,0]),t.t)
B.dH=A.a(s([0,0,204,204,204,124,12,248]),t.t)
B.di=A.a(s([0,0,252,152,48,100,252,0]),t.t)
B.be=A.a(s([28,48,48,224,48,48,28,0]),t.t)
B.d2=A.a(s([24,24,24,0,24,24,24,0]),t.t)
B.aJ=A.a(s([224,48,48,28,48,48,224,0]),t.t)
B.dR=A.a(s([118,220,0,0,0,0,0,0]),t.t)
B.b7=A.a(s([0,16,56,108,198,198,254,0]),t.t)
B.aA=A.a(s([120,204,192,204,120,24,12,120]),t.t)
B.dg=A.a(s([0,204,0,204,204,204,126,0]),t.t)
B.dG=A.a(s([28,0,120,204,252,192,120,0]),t.t)
B.c7=A.a(s([126,195,60,6,62,102,63,0]),t.t)
B.an=A.a(s([204,0,120,12,124,204,126,0]),t.t)
B.bb=A.a(s([224,0,120,12,124,204,126,0]),t.t)
B.ad=A.a(s([48,48,120,12,124,204,126,0]),t.t)
B.br=A.a(s([0,0,120,192,192,120,12,56]),t.t)
B.dq=A.a(s([126,195,60,102,126,96,60,0]),t.t)
B.aS=A.a(s([204,0,120,204,252,192,120,0]),t.t)
B.d4=A.a(s([224,0,120,204,252,192,120,0]),t.t)
B.dh=A.a(s([204,0,112,48,48,48,120,0]),t.t)
B.cV=A.a(s([124,198,56,24,24,24,60,0]),t.t)
B.b3=A.a(s([224,0,112,48,48,48,120,0]),t.t)
B.dM=A.a(s([198,56,108,198,254,198,198,0]),t.t)
B.d1=A.a(s([48,48,0,120,204,252,204,0]),t.t)
B.bJ=A.a(s([28,0,252,96,120,96,252,0]),t.t)
B.dF=A.a(s([0,0,127,12,127,204,127,0]),t.t)
B.aX=A.a(s([62,108,204,254,204,204,206,0]),t.t)
B.dz=A.a(s([120,204,0,120,204,204,120,0]),t.t)
B.aj=A.a(s([0,204,0,120,204,204,120,0]),t.t)
B.dO=A.a(s([0,224,0,120,204,204,120,0]),t.t)
B.aV=A.a(s([120,204,0,204,204,204,126,0]),t.t)
B.cY=A.a(s([0,224,0,204,204,204,126,0]),t.t)
B.aD=A.a(s([0,204,0,204,204,124,12,248]),t.t)
B.ap=A.a(s([195,24,60,102,102,60,24,0]),t.t)
B.da=A.a(s([204,0,204,204,204,204,120,0]),t.t)
B.a3=A.a(s([24,24,126,192,192,126,24,24]),t.t)
B.aM=A.a(s([56,108,100,240,96,230,252,0]),t.t)
B.b5=A.a(s([204,204,120,252,48,252,48,48]),t.t)
B.dl=A.a(s([248,204,204,250,198,207,198,199]),t.t)
B.bU=A.a(s([14,27,24,60,24,24,216,112]),t.t)
B.aI=A.a(s([28,0,120,12,124,204,126,0]),t.t)
B.cj=A.a(s([56,0,112,48,48,48,120,0]),t.t)
B.aL=A.a(s([0,28,0,120,204,204,120,0]),t.t)
B.cD=A.a(s([0,28,0,204,204,204,126,0]),t.t)
B.b0=A.a(s([0,248,0,248,204,204,204,0]),t.t)
B.cT=A.a(s([252,0,204,236,252,220,204,0]),t.t)
B.ak=A.a(s([60,108,108,62,0,126,0,0]),t.t)
B.cg=A.a(s([56,108,108,56,0,124,0,0]),t.t)
B.db=A.a(s([48,0,48,96,192,204,120,0]),t.t)
B.b2=A.a(s([0,0,0,252,192,192,0,0]),t.t)
B.aK=A.a(s([0,0,0,252,12,12,0,0]),t.t)
B.d5=A.a(s([195,198,204,222,51,102,204,15]),t.t)
B.aC=A.a(s([195,198,204,219,55,111,207,3]),t.t)
B.bX=A.a(s([24,24,0,24,24,24,24,0]),t.t)
B.bW=A.a(s([0,51,102,204,102,51,0,0]),t.t)
B.bg=A.a(s([0,204,102,51,102,204,0,0]),t.t)
B.cF=A.a(s([34,136,34,136,34,136,34,136]),t.t)
B.dA=A.a(s([85,170,85,170,85,170,85,170]),t.t)
B.bP=A.a(s([219,119,219,238,219,119,219,238]),t.t)
B.b6=A.a(s([24,24,24,24,24,24,24,24]),t.t)
B.b1=A.a(s([24,24,24,24,248,24,24,24]),t.t)
B.c3=A.a(s([24,24,248,24,248,24,24,24]),t.t)
B.dQ=A.a(s([54,54,54,54,246,54,54,54]),t.t)
B.cr=A.a(s([0,0,0,0,254,54,54,54]),t.t)
B.aY=A.a(s([0,0,248,24,248,24,24,24]),t.t)
B.ah=A.a(s([54,54,246,6,246,54,54,54]),t.t)
B.cx=A.a(s([54,54,54,54,54,54,54,54]),t.t)
B.cf=A.a(s([0,0,254,6,246,54,54,54]),t.t)
B.cB=A.a(s([54,54,246,6,254,0,0,0]),t.t)
B.av=A.a(s([54,54,54,54,254,0,0,0]),t.t)
B.a7=A.a(s([24,24,248,24,248,0,0,0]),t.t)
B.ac=A.a(s([0,0,0,0,248,24,24,24]),t.t)
B.a5=A.a(s([24,24,24,24,31,0,0,0]),t.t)
B.c1=A.a(s([24,24,24,24,255,0,0,0]),t.t)
B.bt=A.a(s([0,0,0,0,255,24,24,24]),t.t)
B.d9=A.a(s([24,24,24,24,31,24,24,24]),t.t)
B.c_=A.a(s([0,0,0,0,255,0,0,0]),t.t)
B.cy=A.a(s([24,24,24,24,255,24,24,24]),t.t)
B.cJ=A.a(s([24,24,31,24,31,24,24,24]),t.t)
B.bi=A.a(s([54,54,54,54,55,54,54,54]),t.t)
B.dw=A.a(s([54,54,55,48,63,0,0,0]),t.t)
B.dp=A.a(s([0,0,63,48,55,54,54,54]),t.t)
B.bN=A.a(s([54,54,247,0,255,0,0,0]),t.t)
B.bC=A.a(s([0,0,255,0,247,54,54,54]),t.t)
B.b_=A.a(s([54,54,55,48,55,54,54,54]),t.t)
B.aZ=A.a(s([0,0,255,0,255,0,0,0]),t.t)
B.dI=A.a(s([54,54,247,0,247,54,54,54]),t.t)
B.cP=A.a(s([24,24,255,0,255,0,0,0]),t.t)
B.Q=A.a(s([54,54,54,54,255,0,0,0]),t.t)
B.dC=A.a(s([0,0,255,0,255,24,24,24]),t.t)
B.c9=A.a(s([0,0,0,0,255,54,54,54]),t.t)
B.cs=A.a(s([54,54,54,54,63,0,0,0]),t.t)
B.bx=A.a(s([24,24,31,24,31,0,0,0]),t.t)
B.cm=A.a(s([0,0,31,24,31,24,24,24]),t.t)
B.cM=A.a(s([0,0,0,0,63,54,54,54]),t.t)
B.cS=A.a(s([54,54,54,54,255,54,54,54]),t.t)
B.bS=A.a(s([24,24,255,24,255,24,24,24]),t.t)
B.dm=A.a(s([24,24,24,24,248,0,0,0]),t.t)
B.bd=A.a(s([0,0,0,0,31,24,24,24]),t.t)
B.ca=A.a(s([255,255,255,255,255,255,255,255]),t.t)
B.cd=A.a(s([0,0,0,0,255,255,255,255]),t.t)
B.bn=A.a(s([240,240,240,240,240,240,240,240]),t.t)
B.cu=A.a(s([15,15,15,15,15,15,15,15]),t.t)
B.d8=A.a(s([255,255,255,255,0,0,0,0]),t.t)
B.dP=A.a(s([0,0,118,220,200,220,118,0]),t.t)
B.ds=A.a(s([0,120,204,248,204,248,192,192]),t.t)
B.at=A.a(s([0,252,204,192,192,192,192,0]),t.t)
B.cc=A.a(s([0,254,108,108,108,108,108,0]),t.t)
B.dn=A.a(s([252,204,96,48,96,204,252,0]),t.t)
B.bq=A.a(s([0,0,126,216,216,216,112,0]),t.t)
B.bw=A.a(s([0,102,102,102,102,124,96,192]),t.t)
B.cH=A.a(s([0,118,220,24,24,24,24,0]),t.t)
B.am=A.a(s([252,48,120,204,204,120,48,252]),t.t)
B.aN=A.a(s([56,108,198,254,198,108,56,0]),t.t)
B.aq=A.a(s([56,108,198,198,108,108,238,0]),t.t)
B.R=A.a(s([28,48,24,124,204,204,120,0]),t.t)
B.dD=A.a(s([0,0,126,219,219,126,0,0]),t.t)
B.bs=A.a(s([6,12,126,219,219,126,96,192]),t.t)
B.af=A.a(s([56,96,192,248,192,96,56,0]),t.t)
B.co=A.a(s([120,204,204,204,204,204,204,0]),t.t)
B.cQ=A.a(s([0,252,0,252,0,252,0,0]),t.t)
B.ab=A.a(s([48,48,252,48,48,0,252,0]),t.t)
B.bf=A.a(s([96,48,24,48,96,0,252,0]),t.t)
B.d_=A.a(s([24,48,96,48,24,0,252,0]),t.t)
B.bm=A.a(s([14,27,27,24,24,24,24,24]),t.t)
B.df=A.a(s([24,24,24,24,24,216,216,112]),t.t)
B.ci=A.a(s([48,48,0,252,0,48,48,0]),t.t)
B.W=A.a(s([0,118,220,0,118,220,0,0]),t.t)
B.cE=A.a(s([56,108,108,56,0,0,0,0]),t.t)
B.Y=A.a(s([0,0,0,24,24,0,0,0]),t.t)
B.dt=A.a(s([0,0,0,0,24,0,0,0]),t.t)
B.a0=A.a(s([15,12,12,12,236,108,60,28]),t.t)
B.c0=A.a(s([120,108,108,108,108,0,0,0]),t.t)
B.az=A.a(s([112,24,48,96,120,0,0,0]),t.t)
B.d7=A.a(s([0,0,60,60,60,60,0,0]),t.t)
B.dT=new A.aM(["\u263a",B.de,"\u263b",B.ag,"\u2665",B.dL,"\u2666",B.cb,"\u2663",B.b9,"\u2660",B.bl,"\u2022",B.aE,"\u25d8",B.aH,"\u25cb",B.aT,"\u25d9",B.cZ,"\u2642",B.dK,"\u2640",B.dJ,"\u266a",B.cW,"\u266b",B.a_,"\u263c",B.a4,"\u25ba",B.aB,"\u25c4",B.bH,"\u2195",B.cp,"\u203c",B.cl,"\xb6",B.cv,"\xa7",B.cw,"\u25ac",B.bV,"\u21a8",B.bY,"\u2191",B.V,"\u2193",B.dj,"\u2192",B.dc,"\u2190",B.ay,"\u221f",B.c2,"\u2194",B.bA,"\u25b2",B.ae,"\u25bc",B.bZ," ",B.b4,"!",B.bI,'"',B.a2,"#",B.as,"$",B.c6,"%",B.U,"&",B.cI,"'",B.ar,"(",B.Z,")",B.bE,"*",B.cz,"+",B.dS,",",B.c8,"-",B.bz,".",B.cn,"/",B.a9,"0",B.bc,"1",B.cq,"2",B.c4,"3",B.dN,"4",B.bG,"5",B.dd,"6",B.dv,"7",B.c5,"8",B.cC,"9",B.bj,":",B.d6,";",B.aW,"<",B.bF,"=",B.bu,">",B.aG,"?",B.aw,"@",B.dr,"A",B.ch,"B",B.aQ,"C",B.ai,"D",B.aa,"E",B.ao,"F",B.ct,"G",B.au,"H",B.ax,"I",B.cR,"J",B.bT,"K",B.bL,"L",B.bK,"M",B.aR,"N",B.a1,"O",B.d0,"P",B.bp,"Q",B.cL,"R",B.T,"S",B.al,"T",B.dE,"U",B.aO,"V",B.a6,"W",B.cU,"X",B.cO,"Y",B.a8,"Z",B.X,"[",B.bB,"\\",B.cG,"]",B.bD,"^",B.du,"_",B.S,"`",B.aP,"a",B.dk,"b",B.ck,"c",B.cN,"d",B.ba,"e",B.dx,"f",B.aU,"g",B.cK,"h",B.aF,"i",B.cA,"j",B.bO,"k",B.bh,"l",B.bQ,"m",B.by,"n",B.bR,"o",B.bk,"p",B.dB,"q",B.dy,"r",B.bv,"s",B.d3,"t",B.cX,"u",B.ce,"v",B.b8,"w",B.bo,"x",B.bM,"y",B.dH,"z",B.di,"{",B.be,"|",B.d2,"}",B.aJ,"~",B.dR,"\u2302",B.b7,"\xc7",B.aA,"\xfc",B.dg,"\xe9",B.dG,"\xe2",B.c7,"\xe4",B.an,"\xe0",B.bb,"\xe5",B.ad,"\xe7",B.br,"\xea",B.dq,"\xeb",B.aS,"\xe8",B.d4,"\xef",B.dh,"\xee",B.cV,"\xec",B.b3,"\xc4",B.dM,"\xc5",B.d1,"\xc9",B.bJ,"\xe6",B.dF,"\xc6",B.aX,"\xf4",B.dz,"\xf6",B.aj,"\xf2",B.dO,"\xfb",B.aV,"\xf9",B.cY,"\xff",B.aD,"\xd6",B.ap,"\xdc",B.da,"\xa2",B.a3,"\xa3",B.aM,"\xa5",B.b5,"\u20a7",B.dl,"\u0192",B.bU,"\xe1",B.aI,"\xed",B.cj,"\xf3",B.aL,"\xfa",B.cD,"\xf1",B.b0,"\xd1",B.cT,"\xaa",B.ak,"\xba",B.cg,"\xbf",B.db,"\u2310",B.b2,"\xac",B.aK,"\xbd",B.d5,"\xbc",B.aC,"\xa1",B.bX,"\xab",B.bW,"\xbb",B.bg,"\u2591",B.cF,"\u2592",B.dA,"\u2593",B.bP,"\u2502",B.b6,"\u2524",B.b1,"\u2561",B.c3,"\u2562",B.dQ,"\u2556",B.cr,"\u2555",B.aY,"\u2563",B.ah,"\u2551",B.cx,"\u2557",B.cf,"\u255d",B.cB,"\u255c",B.av,"\u255b",B.a7,"\u2510",B.ac,"\u2514",B.a5,"\u2534",B.c1,"\u252c",B.bt,"\u251c",B.d9,"\u2500",B.c_,"\u253c",B.cy,"\u255e",B.cJ,"\u255f",B.bi,"\u255a",B.dw,"\u2554",B.dp,"\u2569",B.bN,"\u2566",B.bC,"\u2560",B.b_,"\u2550",B.aZ,"\u256c",B.dI,"\u2567",B.cP,"\u2568",B.Q,"\u2564",B.dC,"\u2565",B.c9,"\u2559",B.cs,"\u2558",B.bx,"\u2552",B.cm,"\u2553",B.cM,"\u256b",B.cS,"\u256a",B.bS,"\u2518",B.dm,"\u250c",B.bd,"\u2588",B.ca,"\u2584",B.cd,"\u258c",B.bn,"\u2590",B.cu,"\u2580",B.d8,"\u03b1",B.dP,"\xdf",B.ds,"\u0393",B.at,"\u03c0",B.cc,"\u03a3",B.dn,"\u03c3",B.bq,"\xb5",B.bw,"\u03c4",B.cH,"\u03a6",B.am,"\u0398",B.aN,"\u03a9",B.aq,"\u03b4",B.R,"\u221e",B.dD,"\u03c6",B.bs,"\u03b5",B.af,"\u2229",B.co,"\u2261",B.cQ,"\xb1",B.ab,"\u2265",B.bf,"\u2264",B.d_,"\u2320",B.bm,"\u2321",B.df,"\xf7",B.ci,"\u2248",B.W,"\xb0",B.cE,"\u2219",B.Y,"\xb7",B.dt,"\u221a",B.a0,"\u207f",B.c0,"\xb2",B.az,"\u25a0",B.d7],A.dO("aM<A,j<d>>"))
B.z=new A.L("replace")
B.dU=new A.L("inverse")
B.dV=new A.ac(100,"medium")
B.dW=new A.ac(10,"easy")
B.dX=new A.ac(1500,"expert")
B.dY=new A.L("over")
B.dZ=new A.L("under")
B.e_=new A.L("stain")
B.e0=new A.L("delete")
B.e1=new A.ac(500,"hard")
B.e2=new A.L("maskDestination")
B.e3=new A.L("maskSource")
B.c=new A.b3("cross")
B.b=new A.b3("naught")
B.e4=new A.m(0,1)
B.e5=new A.m(0,-1)
B.e6=new A.m(1,0)
B.e7=new A.m(1,1)
B.e8=new A.m(1,-1)
B.e9=new A.m(-1,0)
B.ea=new A.m(-1,1)
B.eb=new A.m(-1,-1)
B.e=new A.at("ready")
B.i=new A.at("awaitingKey")
B.B=new A.at("awaitingString")
B.j=new A.at("awaitingMouseClick")
B.ec=A.I("ja")
B.ed=A.I("jb")
B.ee=A.I("h4")
B.ef=A.I("h5")
B.eg=A.I("h8")
B.eh=A.I("h9")
B.ei=A.I("ha")
B.ej=A.I("e")
B.ek=A.I("hv")
B.el=A.I("d5")
B.em=A.I("hw")
B.en=A.I("hx")})();(function staticFields(){$.dx=null
$.D=A.a([],t.f)
$.eT=null
$.eM=null
$.eL=null
$.fB=null
$.fx=null
$.fE=null
$.dN=null
$.dS=null
$.ey=null
$.bk=A.a([],A.dO("t<j<e>?>"))
$.aC=null
$.bv=null
$.bw=null
$.ep=!1
$.f=B.d
$.f1=null
$.f2=null
$.f3=null
$.f4=null
$.ec=A.de("_lastQuoRemDigits")
$.ed=A.de("_lastQuoRemUsed")
$.bb=A.de("_lastRemUsed")
$.ee=A.de("_lastRem_nsh")})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"jc","dX",()=>A.iV("_$dart_dartClosure"))
s($,"jS","fT",()=>B.d.bx(new A.dV()))
s($,"jl","fI",()=>A.R(A.d4({
toString:function(){return"$receiver$"}})))
s($,"jm","fJ",()=>A.R(A.d4({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"jn","fK",()=>A.R(A.d4(null)))
s($,"jo","fL",()=>A.R(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"jr","fO",()=>A.R(A.d4(void 0)))
s($,"js","fP",()=>A.R(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"jq","fN",()=>A.R(A.eZ(null)))
s($,"jp","fM",()=>A.R(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"ju","fR",()=>A.R(A.eZ(void 0)))
s($,"jt","fQ",()=>A.R(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"jv","eF",()=>A.hy())
s($,"je","dY",()=>$.fT())
s($,"jA","p",()=>A.ba(0))
s($,"jz","v",()=>A.ba(1))
s($,"jx","eH",()=>$.v().K(0))
s($,"jw","eG",()=>A.ba(1e4))
r($,"jy","fS",()=>A.ho("^\\s*([+-]?)((0x[a-f0-9]+)|(\\d+)|([a-z0-9]+))\\s*$",!1))
s($,"jQ","dZ",()=>A.eB(B.ej))
s($,"jk","fH",()=>A.e5(8,0,t.S))
s($,"jj","fG",()=>A.e5(8,255,t.S))
s($,"jg","eE",()=>{var q="FFFFFFFFFFFFFFFF",p=A.hI(q,16)
if(p==null)A.a4(A.eQ("Could not parse BigInt",q))
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.bO,ArrayBufferView:A.b0,DataView:A.bP,Float32Array:A.bQ,Float64Array:A.bR,Int16Array:A.bS,Int32Array:A.bT,Int8Array:A.bU,Uint16Array:A.bV,Uint32Array:A.bW,Uint8ClampedArray:A.b1,CanvasPixelArray:A.b1,Uint8Array:A.bX})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.ap.$nativeSuperclassTag="ArrayBufferView"
A.bg.$nativeSuperclassTag="ArrayBufferView"
A.bh.$nativeSuperclassTag="ArrayBufferView"
A.aZ.$nativeSuperclassTag="ArrayBufferView"
A.bi.$nativeSuperclassTag="ArrayBufferView"
A.bj.$nativeSuperclassTag="ArrayBufferView"
A.b_.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.dT
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=othello.js.map
