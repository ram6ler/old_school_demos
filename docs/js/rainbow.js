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
if(a[b]!==s){A.iK(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.n(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.e_(b)
return new s(c,this)}:function(){if(s===null)s=A.e_(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.e_(a).prototype
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
e3(a,b,c,d){return{i:a,p:b,e:c,x:d}},
e0(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.e1==null){A.iB()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.b(A.es("Return interceptor for "+A.m(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.d6
if(o==null)o=$.d6=A.dr(n)
p=q[o]}if(p!=null)return p
p=A.iG(a)
if(p!=null)return p
if(typeof a=="function")return B.A
s=Object.getPrototypeOf(a)
if(s==null)return B.k
if(s===Object.prototype)return B.k
if(typeof q=="function"){o=$.d6
if(o==null)o=$.d6=A.dr(n)
Object.defineProperty(q,o,{value:B.h,enumerable:false,writable:true,configurable:true})
return B.h}return B.h},
ei(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
fE(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.ei(r))break;++b}return b},
fF(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.c(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.ei(q))break}return b},
a5(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aG.prototype
return J.bA.prototype}if(typeof a=="string")return J.X.prototype
if(a==null)return J.aH.prototype
if(typeof a=="boolean")return J.bz.prototype
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.O.prototype
if(typeof a=="symbol")return J.aK.prototype
if(typeof a=="bigint")return J.aI.prototype
return a}if(a instanceof A.d)return a
return J.e0(a)},
eW(a){if(typeof a=="string")return J.X.prototype
if(a==null)return a
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.O.prototype
if(typeof a=="symbol")return J.aK.prototype
if(typeof a=="bigint")return J.aI.prototype
return a}if(a instanceof A.d)return a
return J.e0(a)},
iw(a){if(a==null)return a
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.O.prototype
if(typeof a=="symbol")return J.aK.prototype
if(typeof a=="bigint")return J.aI.prototype
return a}if(a instanceof A.d)return a
return J.e0(a)},
ix(a){if(typeof a=="number")return J.ad.prototype
if(a==null)return a
if(!(a instanceof A.d))return J.a_.prototype
return a},
iy(a){if(typeof a=="string")return J.X.prototype
if(a==null)return a
if(!(a instanceof A.d))return J.a_.prototype
return a},
ax(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.a5(a).A(a,b)},
F(a){return J.a5(a).gk(a)},
dB(a){return J.iw(a).gt(a)},
dC(a){return J.eW(a).gm(a)},
fl(a){return J.a5(a).gn(a)},
e8(a){return J.ix(a).c_(a)},
bn(a){return J.a5(a).h(a)},
fm(a){return J.iy(a).b4(a)},
bx:function bx(){},
bz:function bz(){},
aH:function aH(){},
aJ:function aJ(){},
P:function P(){},
bM:function bM(){},
a_:function a_(){},
O:function O(){},
aI:function aI(){},
aK:function aK(){},
o:function o(a){this.$ti=a},
by:function by(){},
ch:function ch(a){this.$ti=a},
bo:function bo(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ad:function ad(){},
aG:function aG(){},
bA:function bA(){},
X:function X(){}},A={dH:function dH(){},
fH(a){return new A.aM("Field '"+a+"' has not been initialized.")},
Q(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
dO(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
dZ(a,b,c){return a},
e2(a){var s,r
for(s=$.y.length,r=0;r<s;++r)if(a===$.y[r])return!0
return!1},
eg(a,b,c){return new A.az(a,b,c.i("az<0>"))},
cf(){return new A.Z("No element")},
aM:function aM(a){this.a=a},
dx:function dx(){},
ct:function ct(){},
aA:function aA(){},
aN:function aN(){},
af:function af(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aB:function aB(a){this.$ti=a},
bu:function bu(){},
aE:function aE(a,b,c){this.a=a
this.b=b
this.$ti=c},
az:function az(a,b,c){this.a=a
this.b=b
this.$ti=c},
aF:function aF(a,b){this.a=a
this.b=b
this.c=-1},
aD:function aD(){},
f3(a){var s=A.f2(a)
if(s!=null)return s
return"minified:"+a},
jf(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
m(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.bn(a)
return s},
ak(a){var s,r=$.ek
if(r==null)r=$.ek=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
fN(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.c(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
bN(a){var s,r,q,p
if(a instanceof A.d)return A.x(A.bl(a),null)
s=J.a5(a)
if(s===B.y||s===B.B||t.A.b(a)){r=B.i(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.x(A.bl(a),null)},
el(a){var s,r,q
if(a==null||typeof a=="number"||A.dV(a))return J.bn(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.W)return a.h(0)
if(a instanceof A.ap)return a.aP(!0)
s=$.fj()
for(r=0;r<1;++r){q=s[r].c0(a)
if(q!=null)return q}return"Instance of '"+A.bN(a)+"'"},
fM(a){var s=a.$thrownJsError
if(s==null)return null
return A.a6(s)},
fO(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.q(a,s)
a.$thrownJsError=s
s.stack=b.h(0)}},
c(a,b){if(a==null)J.dC(a)
throw A.b(A.it(a,b))},
it(a,b){var s,r="index"
if(!A.eK(b))return new A.E(!0,b,r,null)
s=J.dC(a)
if(b<0||b>=s)return A.dF(b,s,a,null,r)
return A.em(b,r)},
dY(a){return new A.E(!0,a,null,null)},
b(a){return A.q(a,new Error())},
q(a,b){var s
if(a==null)a=new A.I()
b.dartException=a
s=A.iL
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
iL(){return J.bn(this.dartException)},
L(a,b){throw A.q(a,b==null?new Error():b)},
a9(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.L(A.hJ(a,b,c),s)},
hJ(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.aY("'"+s+"': Cannot "+o+" "+l+k+n)},
a8(a){throw A.b(A.ac(a))},
J(a){var s,r,q,p,o,n
a=A.iJ(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.n([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.cL(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
cM(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
er(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
dI(a,b){var s=b==null,r=s?null:b.method
return new A.bB(a,r,s?null:b.receiver)},
aw(a){if(a==null)return new A.cl(a)
if(a instanceof A.aC)return A.V(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.V(a,a.dartException)
return A.ii(a)},
V(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
ii(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.a.bC(r,16)&8191)===10)switch(q){case 438:return A.V(a,A.dI(A.m(s)+" (Error "+q+")",null))
case 445:case 5007:A.m(s)
return A.V(a,new A.aT())}}if(a instanceof TypeError){p=$.f9()
o=$.fa()
n=$.fb()
m=$.fc()
l=$.ff()
k=$.fg()
j=$.fe()
$.fd()
i=$.fi()
h=$.fh()
g=p.v(s)
if(g!=null)return A.V(a,A.dI(s,g))
else{g=o.v(s)
if(g!=null){g.method="call"
return A.V(a,A.dI(s,g))}else if(n.v(s)!=null||m.v(s)!=null||l.v(s)!=null||k.v(s)!=null||j.v(s)!=null||m.v(s)!=null||i.v(s)!=null||h.v(s)!=null)return A.V(a,new A.aT())}return A.V(a,new A.bS(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.aX()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.V(a,new A.E(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.aX()
return a},
a6(a){var s
if(a instanceof A.aC)return a.b
if(a==null)return new A.b9(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.b9(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
e4(a){if(a==null)return J.F(a)
if(typeof a=="object")return A.ak(a)
return J.F(a)},
iq(a){if(typeof a=="number")return B.z.gk(a)
if(a instanceof A.c5)return A.ak(a)
if(a instanceof A.ap)return a.gk(a)
return A.e4(a)},
iv(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.Y(0,a[s],a[r])}return b},
hS(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.b(new A.cU("Unsupported number of arguments for wrapped closure"))},
bk(a,b){var s=a.$identity
if(!!s)return s
s=A.ir(a,b)
a.$identity=s
return s},
ir(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.hS)},
fu(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.cu().constructor.prototype):Object.create(new A.ay(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.ed(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.fq(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.ed(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
fq(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.fo)}throw A.b("Error in functionType of tearoff")},
fr(a,b,c,d){var s=A.ec
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
ed(a,b,c,d){if(c)return A.ft(a,b,d)
return A.fr(b.length,d,a,b)},
fs(a,b,c,d){var s=A.ec,r=A.fp
switch(b?-1:a){case 0:throw A.b(new A.bO("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
ft(a,b,c){var s,r
if($.ea==null)$.ea=A.e9("interceptor")
if($.eb==null)$.eb=A.e9("receiver")
s=b.length
r=A.fs(s,c,a,b)
return r},
e_(a){return A.fu(a)},
fo(a,b){return A.bg(v.typeUniverse,A.bl(a.a),b)},
ec(a){return a.a},
fp(a){return a.b},
e9(a){var s,r,q,p=new A.ay("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.b(A.ab("Field name "+a+" not found.",null))},
dr(a){return v.getIsolateTag(a)},
iG(a){var s,r,q,p,o,n=$.eY.$1(a),m=$.dp[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.dv[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.eS.$2(a,n)
if(q!=null){m=$.dp[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.dv[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.dw(s)
$.dp[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.dv[n]=s
return s}if(p==="-"){o=A.dw(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.f_(a,s)
if(p==="*")throw A.b(A.es(n))
if(v.leafTags[n]===true){o=A.dw(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.f_(a,s)},
f_(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.e3(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
dw(a){return J.e3(a,!1,null,!!a.$iv)},
iH(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.dw(s)
else return J.e3(s,c,null,null)},
iB(){if(!0===$.e1)return
$.e1=!0
A.iC()},
iC(){var s,r,q,p,o,n,m,l
$.dp=Object.create(null)
$.dv=Object.create(null)
A.iA()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.f0.$1(o)
if(n!=null){m=A.iH(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
iA(){var s,r,q,p,o,n,m=B.o()
m=A.au(B.p,A.au(B.q,A.au(B.j,A.au(B.j,A.au(B.r,A.au(B.t,A.au(B.u(B.i),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.eY=new A.ds(p)
$.eS=new A.dt(o)
$.f0=new A.du(n)},
au(a,b){return a(b)||b},
is(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
fG(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.b(A.ee("Illegal RegExp pattern ("+String(o)+")",a))},
iJ(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
w:function w(a,b){this.a=a
this.b=b},
bs:function bs(){},
bv:function bv(a,b){this.a=a
this.$ti=b},
aV:function aV(){},
cL:function cL(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aT:function aT(){},
bB:function bB(a,b,c){this.a=a
this.b=b
this.c=c},
bS:function bS(a){this.a=a},
cl:function cl(a){this.a=a},
aC:function aC(a,b){this.a=a
this.b=b},
b9:function b9(a){this.a=a
this.b=null},
W:function W(){},
cb:function cb(){},
cc:function cc(){},
cz:function cz(){},
cu:function cu(){},
ay:function ay(a,b){this.a=a
this.b=b},
bO:function bO(a){this.a=a},
Y:function Y(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ci:function ci(a,b){this.a=a
this.b=b
this.c=null},
aL:function aL(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ds:function ds(a){this.a=a},
dt:function dt(a){this.a=a},
du:function du(a){this.a=a},
ap:function ap(){},
c2:function c2(){},
cg:function cg(a,b){var _=this
_.a=a
_.b=b
_.e=_.c=null},
d8:function d8(a){this.b=a},
ah:function ah(){},
aR:function aR(){},
bC:function bC(){},
ai:function ai(){},
aP:function aP(){},
aQ:function aQ(){},
bD:function bD(){},
bE:function bE(){},
bF:function bF(){},
bG:function bG(){},
bH:function bH(){},
bI:function bI(){},
bJ:function bJ(){},
aS:function aS(){},
bK:function bK(){},
b3:function b3(){},
b4:function b4(){},
b5:function b5(){},
b6:function b6(){},
dL(a,b){var s=b.c
return s==null?b.c=A.be(a,"G",[b.x]):s},
en(a){var s=a.w
if(s===6||s===7)return A.en(a.x)
return s===11||s===12},
fT(a){return a.as},
dq(a){return A.df(v.typeUniverse,a,!1)},
a3(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.a3(a1,s,a3,a4)
if(r===s)return a2
return A.eA(a1,r,!0)
case 7:s=a2.x
r=A.a3(a1,s,a3,a4)
if(r===s)return a2
return A.ez(a1,r,!0)
case 8:q=a2.y
p=A.at(a1,q,a3,a4)
if(p===q)return a2
return A.be(a1,a2.x,p)
case 9:o=a2.x
n=A.a3(a1,o,a3,a4)
m=a2.y
l=A.at(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.dR(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.at(a1,j,a3,a4)
if(i===j)return a2
return A.eB(a1,k,i)
case 11:h=a2.x
g=A.a3(a1,h,a3,a4)
f=a2.y
e=A.ie(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.ey(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.at(a1,d,a3,a4)
o=a2.x
n=A.a3(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.dS(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.b(A.bq("Attempted to substitute unexpected RTI kind "+a0))}},
at(a,b,c,d){var s,r,q,p,o=b.length,n=A.dg(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.a3(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
ig(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.dg(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.a3(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
ie(a,b,c,d){var s,r=b.a,q=A.at(a,r,c,d),p=b.b,o=A.at(a,p,c,d),n=b.c,m=A.ig(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.c0()
s.a=q
s.b=o
s.c=m
return s},
n(a,b){a[v.arrayRti]=b
return a},
eU(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.iz(s)
return a.$S()}return null},
iD(a,b){var s
if(A.en(b))if(a instanceof A.W){s=A.eU(a)
if(s!=null)return s}return A.bl(a)},
bl(a){if(a instanceof A.d)return A.U(a)
if(Array.isArray(a))return A.aq(a)
return A.dU(J.a5(a))},
aq(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
U(a){var s=a.$ti
return s!=null?s:A.dU(a)},
dU(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.hQ(a,s)},
hQ(a,b){var s=a instanceof A.W?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.hn(v.typeUniverse,s.name)
b.$ccache=r
return r},
iz(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.df(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
eX(a){return A.a4(A.U(a))},
dX(a){var s
if(a instanceof A.ap)return A.iu(a.$r,a.aI())
s=a instanceof A.W?A.eU(a):null
if(s!=null)return s
if(t.R.b(a))return J.fl(a).a
if(Array.isArray(a))return A.aq(a)
return A.bl(a)},
a4(a){var s=a.r
return s==null?a.r=new A.c5(a):s},
iu(a,b){var s,r,q=b,p=q.length
if(p===0)return t.F
if(0>=p)return A.c(q,0)
s=A.bg(v.typeUniverse,A.dX(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.c(q,r)
s=A.eD(v.typeUniverse,s,A.dX(q[r]))}return A.bg(v.typeUniverse,s,a)},
D(a){return A.a4(A.df(v.typeUniverse,a,!1))},
hP(a){var s=this
s.b=A.ic(s)
return s.b(a)},
ic(a){var s,r,q,p
if(a===t.K)return A.hY
if(A.a7(a))return A.i1
s=a.w
if(s===6)return A.hN
if(s===1)return A.eM
if(s===7)return A.hT
r=A.ib(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.a7)){a.f="$i"+q
if(q==="f")return A.hW
if(a===t.m)return A.hV
return A.i0}}else if(s===10){p=A.is(a.x,a.y)
return p==null?A.eM:p}return A.hL},
ib(a){if(a.w===8){if(a===t.S)return A.eK
if(a===t.i||a===t.H)return A.hX
if(a===t.N)return A.i_
if(a===t.y)return A.dV}return null},
hO(a){var s=this,r=A.hK
if(A.a7(s))r=A.hB
else if(s===t.K)r=A.hy
else if(A.av(s)){r=A.hM
if(s===t.J)r=A.hu
else if(s===t.x)r=A.hA
else if(s===t.u)r=A.hq
else if(s===t.M)r=A.hx
else if(s===t.I)r=A.hs
else if(s===t.B)r=A.hv}else if(s===t.S)r=A.ht
else if(s===t.N)r=A.hz
else if(s===t.y)r=A.hp
else if(s===t.H)r=A.hw
else if(s===t.i)r=A.hr
else if(s===t.m)r=A.T
s.a=r
return s.a(a)},
hL(a){var s=this
if(a==null)return A.av(s)
return A.iF(v.typeUniverse,A.iD(a,s),s)},
hN(a){if(a==null)return!0
return this.x.b(a)},
i0(a){var s,r=this
if(a==null)return A.av(r)
s=r.f
if(a instanceof A.d)return!!a[s]
return!!J.a5(a)[s]},
hW(a){var s,r=this
if(a==null)return A.av(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.d)return!!a[s]
return!!J.a5(a)[s]},
hV(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.d)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
eL(a){if(typeof a=="object"){if(a instanceof A.d)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
hK(a){var s=this
if(a==null){if(A.av(s))return a}else if(s.b(a))return a
throw A.q(A.eG(a,s),new Error())},
hM(a){var s=this
if(a==null||s.b(a))return a
throw A.q(A.eG(a,s),new Error())},
eG(a,b){return new A.bc("TypeError: "+A.eu(a,A.x(b,null)))},
eu(a,b){return A.cd(a)+": type '"+A.x(A.dX(a),null)+"' is not a subtype of type '"+b+"'"},
A(a,b){return new A.bc("TypeError: "+A.eu(a,b))},
hT(a){var s=this
return s.x.b(a)||A.dL(v.typeUniverse,s).b(a)},
hY(a){return a!=null},
hy(a){if(a!=null)return a
throw A.q(A.A(a,"Object"),new Error())},
i1(a){return!0},
hB(a){return a},
eM(a){return!1},
dV(a){return!0===a||!1===a},
hp(a){if(!0===a)return!0
if(!1===a)return!1
throw A.q(A.A(a,"bool"),new Error())},
hq(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.q(A.A(a,"bool?"),new Error())},
hr(a){if(typeof a=="number")return a
throw A.q(A.A(a,"double"),new Error())},
hs(a){if(typeof a=="number")return a
if(a==null)return a
throw A.q(A.A(a,"double?"),new Error())},
eK(a){return typeof a=="number"&&Math.floor(a)===a},
ht(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.q(A.A(a,"int"),new Error())},
hu(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.q(A.A(a,"int?"),new Error())},
hX(a){return typeof a=="number"},
hw(a){if(typeof a=="number")return a
throw A.q(A.A(a,"num"),new Error())},
hx(a){if(typeof a=="number")return a
if(a==null)return a
throw A.q(A.A(a,"num?"),new Error())},
i_(a){return typeof a=="string"},
hz(a){if(typeof a=="string")return a
throw A.q(A.A(a,"String"),new Error())},
hA(a){if(typeof a=="string")return a
if(a==null)return a
throw A.q(A.A(a,"String?"),new Error())},
T(a){if(A.eL(a))return a
throw A.q(A.A(a,"JSObject"),new Error())},
hv(a){if(a==null)return a
if(A.eL(a))return a
throw A.q(A.A(a,"JSObject?"),new Error())},
eP(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.x(a[q],b)
return s},
i7(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.eP(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.x(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
eH(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.n([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)a4.push("T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.c(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.x(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.x(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.x(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.x(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.x(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
x(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.x(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.x(a.x,b)+">"
if(l===8){p=A.ih(a.x)
o=a.y
return o.length>0?p+("<"+A.eP(o,b)+">"):p}if(l===10)return A.i7(a,b)
if(l===11)return A.eH(a,b,null)
if(l===12)return A.eH(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.c(b,n)
return b[n]}return"?"},
ih(a){var s=A.f2(a)
if(s!=null)return s
return"minified:"+a},
ho(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
hn(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.df(a,b,!1)
else if(typeof m=="number"){s=m
r=A.bf(a,5,"#")
q=A.dg(s)
for(p=0;p<s;++p)q[p]=r
o=A.be(a,b,q)
n[b]=o
return o}else return m},
hm(a,b){return A.eE(a.tR,b)},
hl(a,b){return A.eE(a.eT,b)},
df(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.eC(a,null,b,!1)
r.set(b,s)
return s},
bg(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.eC(a,b,c,!0)
q.set(c,r)
return r},
eD(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.dR(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
eC(a,b,c,d){return A.hc(A.h6(a,b,c,d))},
S(a,b){b.a=A.hO
b.b=A.hP
return b},
bf(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.B(null,null)
s.w=b
s.as=c
r=A.S(a,s)
a.eC.set(c,r)
return r},
eA(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.hj(a,b,r,c)
a.eC.set(r,s)
return s},
hj(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.a7(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.av(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.B(null,null)
q.w=6
q.x=b
q.as=c
return A.S(a,q)},
ez(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.hh(a,b,r,c)
a.eC.set(r,s)
return s},
hh(a,b,c,d){var s,r
if(d){s=b.w
if(A.a7(b)||b===t.K)return b
else if(s===1)return A.be(a,"G",[b])
else if(b===t.P||b===t.T)return t.O}r=new A.B(null,null)
r.w=7
r.x=b
r.as=c
return A.S(a,r)},
hk(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.B(null,null)
s.w=13
s.x=b
s.as=q
r=A.S(a,s)
a.eC.set(q,r)
return r},
bd(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
hg(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
be(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.bd(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.B(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.S(a,r)
a.eC.set(p,q)
return q},
dR(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.bd(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.B(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.S(a,o)
a.eC.set(q,n)
return n},
eB(a,b,c){var s,r,q="+"+(b+"("+A.bd(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.B(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.S(a,s)
a.eC.set(q,r)
return r},
ey(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.bd(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.bd(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.hg(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.B(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.S(a,p)
a.eC.set(r,o)
return o},
dS(a,b,c,d){var s,r=b.as+("<"+A.bd(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.hi(a,b,c,r,d)
a.eC.set(r,s)
return s},
hi(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.dg(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.a3(a,b,r,0)
m=A.at(a,c,r,0)
return A.dS(a,n,m,c!==m)}}l=new A.B(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.S(a,l)},
h6(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
hc(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.h8(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.ew(a,r,l,k,!1)
else if(q===46)r=A.ew(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.a2(a.u,a.e,k.pop()))
break
case 94:k.push(A.hk(a.u,k.pop()))
break
case 35:k.push(A.bf(a.u,5,"#"))
break
case 64:k.push(A.bf(a.u,2,"@"))
break
case 126:k.push(A.bf(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.ha(a,k)
break
case 38:A.h9(a,k)
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
case 41:A.h7(a,k)
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
A.hd(a.u,a.e,o)
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
h8(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
ew(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.ho(s,o.x)[p]
if(n==null)A.L('No "'+p+'" in "'+A.fT(o)+'"')
d.push(A.bg(s,o,n))}else d.push(p)
return m},
ha(a,b){var s,r=a.u,q=A.ev(a,b),p=b.pop()
if(typeof p=="string")b.push(A.be(r,p,q))
else{s=A.a2(r,a.e,p)
switch(s.w){case 11:b.push(A.dS(r,s,q,a.n))
break
default:b.push(A.dR(r,s,q))
break}}},
h7(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.ev(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.a2(p,a.e,o)
q=new A.c0()
q.a=s
q.b=n
q.c=m
b.push(A.ey(p,r,q))
return
case-4:b.push(A.eB(p,b.pop(),s))
return
default:throw A.b(A.bq("Unexpected state under `()`: "+A.m(o)))}},
h9(a,b){var s=b.pop()
if(0===s){b.push(A.bf(a.u,1,"0&"))
return}if(1===s){b.push(A.bf(a.u,4,"1&"))
return}throw A.b(A.bq("Unexpected extended operation "+A.m(s)))},
ev(a,b){var s=b.splice(a.p)
A.ex(a.u,a.e,s)
a.p=b.pop()
return s},
a2(a,b,c){if(typeof c=="string")return A.be(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.hb(a,b,c)}else return c},
ex(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.a2(a,b,c[s])},
hd(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.a2(a,b,c[s])},
hb(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.b(A.bq("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.b(A.bq("Bad index "+c+" for "+b.h(0)))},
iF(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.p(a,b,null,c,null)
r.set(c,s)}return s},
p(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.a7(d))return!0
s=b.w
if(s===4)return!0
if(A.a7(b))return!1
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
if(!A.p(a,j,c,i,e)||!A.p(a,i,e,j,c))return!1}return A.eJ(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.eJ(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.hU(a,b,c,d,e)}if(o&&q===10)return A.hZ(a,b,c,d,e)
return!1},
eJ(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
hU(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.bg(a,b,r[o])
return A.eF(a,p,null,c,d.y,e)}return A.eF(a,b.y,null,c,d.y,e)},
eF(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.p(a,b[s],d,e[s],f))return!1
return!0},
hZ(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.p(a,r[s],c,q[s],e))return!1
return!0},
av(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.a7(a))if(s!==6)r=s===7&&A.av(a.x)
return r},
a7(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
eE(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
dg(a){return a>0?new Array(a):v.typeUniverse.sEA},
B:function B(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
c0:function c0(){this.c=this.b=this.a=null},
c5:function c5(a){this.a=a},
c_:function c_(){},
bc:function bc(a){this.a=a},
h_(){var s,r,q
if(self.scheduleImmediate!=null)return A.ik()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.bk(new A.cQ(s),1)).observe(r,{childList:true})
return new A.cP(s,r,q)}else if(self.setImmediate!=null)return A.il()
return A.im()},
h0(a){self.scheduleImmediate(A.bk(new A.cR(a),0))},
h1(a){self.setImmediate(A.bk(new A.cS(a),0))},
h2(a){A.he(0,a)},
eq(a,b){var s=B.a.D(a.a,1000)
return A.hf(s,b)},
he(a,b){var s=new A.bb()
s.be(a,b)
return s},
hf(a,b){var s=new A.bb()
s.bf(a,b)
return s},
i3(a){return new A.bT(new A.l($.h,a.i("l<0>")),a.i("bT<0>"))},
hE(a,b){a.$2(0,null)
b.b=!0
return b.a},
dT(a,b){A.hF(a,b)},
hD(a,b){var s,r=a==null?b.$ti.c.a(a):a
if(!b.b)b.a.a0(r)
else{s=b.a
if(b.$ti.i("G<1>").b(r))s.aE(r)
else s.aG(r)}},
hC(a,b){var s=A.aw(a),r=A.a6(a),q=b.a
if(b.b)q.J(new A.z(s,r))
else q.aD(new A.z(s,r))},
hF(a,b){var s,r,q=new A.di(b),p=new A.dj(b)
if(a instanceof A.l)a.aO(q,p,t.z)
else{s=t.z
if(a instanceof A.l)a.b3(q,p,s)
else{r=new A.l($.h,t.c)
r.a=8
r.c=a
r.aO(q,p,s)}}},
ij(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.h.au(new A.dm(s))},
dE(a){var s
if(t.Q.b(a)){s=a.gR()
if(s!=null)return s}return B.x},
hR(a,b){if($.h===B.b)return null
return null},
cY(a,b,c){var s,r,q,p={},o=p.a=a
while(s=o.a,(s&4)!==0){o=o.c
p.a=o}if(o===b){s=A.eo()
b.aD(new A.z(new A.E(!0,o,null,"Cannot complete a future with itself"),s))
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.aM(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.K()
b.T(p.a)
A.a0(b,q)
return}b.a^=2
A.as(null,null,b.b,new A.cZ(p,b))},
a0(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){f=f.c
A.c6(f.a,f.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.a0(g.a,f)
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
if(r){A.c6(m.a,m.b)
return}j=$.h
if(j!==k)$.h=k
else j=null
f=f.c
if((f&15)===8)new A.d2(s,g,p).$0()
else if(q){if((f&1)!==0)new A.d1(s,m).$0()}else if((f&2)!==0)new A.d0(g,s).$0()
if(j!=null)$.h=j
f=s.c
if(f instanceof A.l){r=s.a.$ti
r=r.i("G<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.V(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.cY(f,i,!0)
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
i8(a,b){if(t.C.b(a))return b.au(a)
if(t.v.b(a))return a
throw A.b(A.dD(a,"onError",u.c))},
i4(){var s,r
for(s=$.ar;s!=null;s=$.ar){$.bj=null
r=s.b
$.ar=r
if(r==null)$.bi=null
s.a.$0()}},
id(){$.dW=!0
try{A.i4()}finally{$.bj=null
$.dW=!1
if($.ar!=null)$.e7().$1(A.eT())}},
eR(a){var s=new A.bU(a),r=$.bi
if(r==null){$.ar=$.bi=s
if(!$.dW)$.e7().$1(A.eT())}else $.bi=r.b=s},
ia(a){var s,r,q,p=$.ar
if(p==null){A.eR(a)
$.bj=$.bi
return}s=new A.bU(a)
r=$.bj
if(r==null){s.b=p
$.ar=$.bj=s}else{q=r.b
s.b=q
$.bj=r.b=s
if(q==null)$.bi=s}},
f1(a){var s=null,r=$.h
if(B.b===r){A.as(s,s,B.b,a)
return}A.as(s,s,r,r.aR(a))},
j_(a){A.dZ(a,"stream",t.K)
return new A.c3()},
dN(a){return new A.aZ(null,null,a.i("aZ<0>"))},
eQ(a){return},
et(a,b){return b==null?A.io():b},
h3(a,b){if(b==null)b=A.ip()
if(t.k.b(b))return a.au(b)
if(t.d.b(b))return b
throw A.b(A.ab("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
i5(a){},
i6(a,b){A.c6(a,b)},
hI(a,b,c){var s,r,q=a.aS()
if(q!==$.dz()){s=q.$ti
r=$.h
q.S(new A.R(new A.l(r,s),8,new A.dk(b,c),null,s.i("R<1,1>")))}else b.a3(c)},
fW(a,b){var s=$.h
if(s===B.b)return A.eq(a,b)
return A.eq(a,s.bF(b,t.E))},
c6(a,b){A.ia(new A.dl(a,b))},
eN(a,b,c,d){var s,r=$.h
if(r===c)return d.$0()
$.h=c
s=r
try{r=d.$0()
return r}finally{$.h=s}},
eO(a,b,c,d,e){var s,r=$.h
if(r===c)return d.$1(e)
$.h=c
s=r
try{r=d.$1(e)
return r}finally{$.h=s}},
i9(a,b,c,d,e,f){var s,r=$.h
if(r===c)return d.$2(e,f)
$.h=c
s=r
try{r=d.$2(e,f)
return r}finally{$.h=s}},
as(a,b,c,d){if(B.b!==c){d=c.aR(d)
d=d}A.eR(d)},
cQ:function cQ(a){this.a=a},
cP:function cP(a,b,c){this.a=a
this.b=b
this.c=c},
cR:function cR(a){this.a=a},
cS:function cS(a){this.a=a},
bb:function bb(){this.c=0},
de:function de(a,b){this.a=a
this.b=b},
dd:function dd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bT:function bT(a,b){this.a=a
this.b=!1
this.$ti=b},
di:function di(a){this.a=a},
dj:function dj(a){this.a=a},
dm:function dm(a){this.a=a},
z:function z(a,b){this.a=a
this.b=b},
K:function K(a,b){this.a=a
this.$ti=b},
b_:function b_(a,b,c,d,e){var _=this
_.ay=0
_.CW=_.ch=null
_.w=a
_.a=b
_.d=c
_.e=d
_.r=_.f=null
_.$ti=e},
bV:function bV(){},
aZ:function aZ(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null
_.$ti=c},
R:function R(a,b,c,d,e){var _=this
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
bU:function bU(a){this.a=a
this.b=null},
an:function an(){},
cx:function cx(a,b){this.a=a
this.b=b},
cy:function cy(a,b){this.a=a
this.b=b},
cv:function cv(a){this.a=a},
cw:function cw(a,b,c){this.a=a
this.b=b
this.c=c},
b0:function b0(){},
bX:function bX(){},
bW:function bW(){},
ba:function ba(){},
bZ:function bZ(){},
bY:function bY(a){this.b=a
this.a=null},
c1:function c1(){this.a=0
this.c=this.b=null},
d9:function d9(a,b){this.a=a
this.b=b},
b1:function b1(a){this.a=1
this.b=a
this.c=null},
c3:function c3(){},
dk:function dk(a,b){this.a=a
this.b=b},
dh:function dh(){},
da:function da(){},
db:function db(a,b){this.a=a
this.b=b},
dc:function dc(a,b,c){this.a=a
this.b=b
this.c=c},
dl:function dl(a,b){this.a=a
this.b=b},
ej(a,b){return new A.Y(a.i("@<0>").a1(b).i("Y<1,2>"))},
fI(a){return new A.a1(a.i("a1<0>"))},
fJ(a){return new A.a1(a.i("a1<0>"))},
dQ(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
h5(a,b,c){var s=new A.ao(a,b,c.i("ao<0>"))
s.c=a.e
return s},
fC(a,b){return A.eg(a,0,b)},
fK(a,b){var s,r,q=A.fI(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.a8)(a),++r)q.F(0,b.a(a[r]))
return q},
dK(a){var s,r
if(A.e2(a))return"{...}"
s=new A.bQ("")
try{r={}
$.y.push(a)
s.a+="{"
r.a=!0
a.aj(0,new A.cj(r,s))
s.a+="}"}finally{if(0>=$.y.length)return A.c($.y,-1)
$.y.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
a1:function a1(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
d7:function d7(a){this.a=a
this.c=this.b=null},
ao:function ao(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
k:function k(){},
aO:function aO(){},
cj:function cj(a,b){this.a=a
this.b=b},
aW:function aW(){},
b8:function b8(){},
iE(a){var s=A.fN(a,null)
if(s!=null)return s
throw A.b(A.ee(a,null))},
fv(a,b){a=A.q(a,new Error())
a.stack=b.h(0)
throw a},
dJ(a,b,c){var s,r,q
if(a>4294967295)A.L(A.aU(a,0,4294967295,"length",null))
s=A.n(new Array(a),c.i("o<0>"))
s.$flags=1
r=s
if(a!==0)for(s=r.length,q=0;q<s;++q)r[q]=b
return r},
fL(a,b,c){var s,r,q=A.n([],c.i("o<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.a8)(a),++r)q.push(a[r])
q.$flags=1
return q},
fS(a){return new A.cg(a,A.fG(a,!1,!0,!1,!1,""))},
ep(a,b,c){var s=J.dB(b)
if(!s.l())return a
if(c.length===0){do a+=A.m(s.gp())
while(s.l())}else{a+=A.m(s.gp())
while(s.l())a=a+c+A.m(s.gp())}return a},
eo(){return A.a6(new Error())},
cd(a){if(typeof a=="number"||A.dV(a)||a==null)return J.bn(a)
if(typeof a=="string")return JSON.stringify(a)
return A.el(a)},
fw(a,b){A.dZ(a,"error",t.K)
A.dZ(b,"stackTrace",t.l)
A.fv(a,b)},
bq(a){return new A.bp(a)},
ab(a,b){return new A.E(!1,null,b,a)},
dD(a,b,c){return new A.E(!0,a,b,c)},
fP(a){var s=null
return new A.al(s,s,!1,s,s,a)},
em(a,b){return new A.al(null,null,!0,a,b,"Value not in range")},
aU(a,b,c,d,e){return new A.al(b,c,!0,a,d,"Invalid value")},
fR(a,b,c){if(0>a||a>c)throw A.b(A.aU(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.b(A.aU(b,a,c,"end",null))
return b}return c},
fQ(a,b){if(a<0)throw A.b(A.aU(a,0,null,b,null))
return a},
dF(a,b,c,d,e){return new A.bw(b,!0,a,e,"Index out of range")},
cO(a){return new A.aY(a)},
es(a){return new A.bR(a)},
ac(a){return new A.br(a)},
ee(a,b){return new A.ce(a,b)},
eh(a,b){if(a<=0)return new A.aB(b.i("aB<0>"))
if(!b.i("0(a)").b(A.eV()))throw A.b(A.ab("Generator must be supplied or element type must allow integers","generator"))
return new A.b2(a,A.eV(),b.i("b2<0>"))},
fD(a,b,c){var s,r
if(A.e2(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.n([],t.s)
$.y.push(a)
try{A.i2(a,s)}finally{if(0>=$.y.length)return A.c($.y,-1)
$.y.pop()}r=A.ep(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
dG(a,b,c){var s,r
if(A.e2(a))return b+"..."+c
s=new A.bQ(b)
$.y.push(a)
try{r=s
r.a=A.ep(r.a,a,", ")}finally{if(0>=$.y.length)return A.c($.y,-1)
$.y.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
h4(a){return a},
i2(a,b){var s,r,q,p,o,n,m,l=a.gt(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.l())return
s=A.m(l.gp())
b.push(s)
k+=s.length+2;++j}if(!l.l()){if(j<=5)return
if(0>=b.length)return A.c(b,-1)
r=b.pop()
if(0>=b.length)return A.c(b,-1)
q=b.pop()}else{p=l.gp();++j
if(!l.l()){if(j<=4){b.push(A.m(p))
return}r=A.m(p)
if(0>=b.length)return A.c(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gp();++j
for(;l.l();p=o,o=n){n=l.gp();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.c(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=A.m(p)
r=A.m(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.c(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
cm(a,b,c,d){var s
if(B.e===c){s=B.a.gk(a)
b=J.F(b)
return A.dO(A.Q(A.Q($.dA(),s),b))}if(B.e===d){s=B.a.gk(a)
b=J.F(b)
c=J.F(c)
return A.dO(A.Q(A.Q(A.Q($.dA(),s),b),c))}s=B.a.gk(a)
b=J.F(b)
c=J.F(c)
d=J.F(d)
d=A.dO(A.Q(A.Q(A.Q(A.Q($.dA(),s),b),c),d))
return d},
bt:function bt(a){this.a=a},
cT:function cT(){},
j:function j(){},
bp:function bp(a){this.a=a},
I:function I(){},
E:function E(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
al:function al(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bw:function bw(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
aY:function aY(a){this.a=a},
bR:function bR(a){this.a=a},
Z:function Z(a){this.a=a},
br:function br(a){this.a=a},
bL:function bL(){},
aX:function aX(){},
cU:function cU(a){this.a=a},
ce:function ce(a,b){this.a=a
this.b=b},
H:function H(){},
b2:function b2(a,b,c){this.a=a
this.b=b
this.$ti=c},
t:function t(){},
d:function d(){},
c4:function c4(){},
bQ:function bQ(a){this.a=a},
d5:function d5(){},
N:function N(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dP(a){return new A.cB(a)},
cn:function cn(){},
cB:function cB(a){this.a=a},
ae:function ae(){},
ag:function ag(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
aj:function aj(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=0},
fU(a,b,c,d,e,f,g,h){var s,r,q,p=A.ef(),o=h*g
p.width=o
s=d*f
p.height=s
r=A.ef()
r.width=o
r.height=s
s=A.n([],t.w)
for(o=A.eh(d,t.z),o=o.gt(o);o.l();){o.gp()
q=B.a.D(h,32)
s.push(new Uint32Array(q+1))}p=new A.bP(!0,d,h,g,f,c,a,p,r,s)
p.bc(a,b,c,d,!0,f,g,h)
return p},
dM(a){return new A.w(B.a.D(a,32),31-B.a.j(a,32))},
bP:function bP(a,b,c,d,e,f,g,h,i,j){var _=this
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
ck:function ck(a,b){this.a=a
this.b=b},
fV(a,b,c){var s,r,q,p,o="white",n=null,m=A.fU("black",b,o,c*10,!0,2,2,a*8),l=A.n([],t.G)
for(s=t.U,r=0;r<c;++r){q=A.n([],s)
for(p=0;p<a;++p)q.push(new A.N(r,p," ",o))
l.push(q)}m=new A.cA(c,a,b,m,new A.aj(c,a),new A.aj(c,a),new A.aj(c,a),A.dN(t.N),A.dN(t.V),A.dN(t.q),B.d,l,A.fJ(t.o),B.dF)
m.bd("black",a,b,o,n,!0,2,2,2,c,!0,n,n,n,n,n,n)
return m},
am:function am(a,b){this.a=a
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
fn(){var s,r,q,p,o=A.ej(t.N,t.a)
for(s=$.aa(),r=s.length,q=t.s,p=0;p<s.length;s.length===r||(0,A.a8)(s),++p)o.Y(0,s[p],A.n([],q))
o=new A.c7(o)
o.av()
return o},
bm(){var s=0,r=A.i3(t.n),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$bm=A.ij(function(a7,a8){if(a7===1)return A.hC(a8,r)
for(;;)switch(s){case 0:a5=v.G.document.querySelector("#rainbow")
a6=A.fV(20,a5==null?A.T(a5):a5,20)
a6.ar("Rainbow!",6,1)
a6.N()
q=A.fn()
a5=a6.y,p=a6.x,o=p.b,n=a5.b,m=a5.a,l=a6.z,k=l.b,j=l.a,i=a6.as,h=A.U(i).i("K<1>"),g=a6.a,f=g-1,e=p.a,d=a6.b,c=a6.at,b=A.U(c).i("K<1>")
case 2:q.aU(a6,2,2)
a6.ar(B.f.O(" ",19),1,16)
a6.ar(B.f.O(" ",19),1,17)
if(a6.ay!==B.d)A.L(A.dP("Terminal already awaiting input."))
a=16%g
a0=1%d
a1=B.a.j(a,e)
p.c=a1
p.sI(a0)
a6.aq(B.f.O(" ",12),!1)
a6.E("Move: ","white",a0,!1,a)
p.c=a1
p.sI(a0+6)
a1=p.c
if(a1===f){a6.Z()
a1=p.c=B.a.j(p.c-1,e)}a1=a1*o+p.d
a2=B.a.j(B.a.B(a1,n),m)
a5.c=a2
a1=B.a.j(a1,n)
a5.d=a1
a1=a2*n+a1+6
l.c=B.a.j(B.a.B(a1,k),j)
l.d=B.a.j(a1,k)
a6.ay=B.m
s=4
return A.dT(new A.K(i,h).gah(0),$async$bm)
case 4:a3=a8
if("reset"===B.f.b4(a3.toLowerCase())){q.av()
s=2
break}a4=q.bP(a3)
s=a4.length!==0?5:7
break
case 5:a6.X(a4,"orangered",1,17)
if(a6.ay!==B.d)A.L(A.dP("Terminal already awaiting input."))
a6.ay=B.l
s=8
return A.dT(new A.K(c,b).gah(0),$async$bm)
case 8:s=6
break
case 7:s=q.gbN()?9:10
break
case 9:q.aU(a6,2,2)
a6.X("Congratulations!","white",1,17)
if(a6.ay!==B.d)A.L(A.dP("Terminal already awaiting input."))
a6.ay=B.l
s=11
return A.dT(new A.K(c,b).gah(0),$async$bm)
case 11:q.av()
case 10:case 6:s=2
break
case 3:return A.hD(null,r)}})
return A.hE($async$bm,r)},
c7:function c7(a){this.a=a},
ca:function ca(){},
c8:function c8(){},
c9:function c9(){},
f2(a){return v.mangledGlobalNames[a]},
iI(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
iK(a){throw A.q(new A.aM("Field '"+a+"' has been assigned during initialization."),new Error())},
M(){throw A.q(A.fH(""),new Error())},
bh(a){var s
if(typeof a=="function")throw A.b(A.ab("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.hG,a)
s[$.dy()]=a
return s},
eI(a){var s
if(typeof a=="function")throw A.b(A.ab("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.hH,a)
s[$.dy()]=a
return s},
hG(a){return a.$0()},
hH(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
ef(){return v.G.document.createElement("canvas")}},B={}
var w=[A,J,B]
var $={}
A.dH.prototype={}
J.bx.prototype={
A(a,b){return a===b},
gk(a){return A.ak(a)},
h(a){return"Instance of '"+A.bN(a)+"'"},
gn(a){return A.a4(A.dU(this))}}
J.bz.prototype={
h(a){return String(a)},
gk(a){return a?519018:218159},
gn(a){return A.a4(t.y)},
$ie:1}
J.aH.prototype={
A(a,b){return null==b},
h(a){return"null"},
gk(a){return 0},
$ie:1}
J.aJ.prototype={$ii:1}
J.P.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.bM.prototype={}
J.a_.prototype={}
J.O.prototype={
h(a){var s=a[$.f6()]
if(s==null)s=a[$.dy()]
if(s==null)return this.bb(a)
return"JavaScript function for "+J.bn(s)}}
J.aI.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.aK.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.o.prototype={
M(a){a.$flags&1&&A.a9(a,"clear","clear")
a.length=0},
ao(a,b){var s,r,q=a.length,p=A.dJ(q,"",t.N)
for(s=0;s<a.length;++s){r=A.m(a[s])
if(!(s<q))return A.c(p,s)
p[s]=r}return p.join(b)},
bJ(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw A.b(A.ac(a))}return s},
bK(a,b,c){return this.bJ(a,b,c,t.z)},
b9(a,b,c){var s=a.length
if(b>s)throw A.b(A.aU(b,0,s,"start",null))
if(c==null)c=s
else if(c<b||c>s)throw A.b(A.aU(c,b,s,"end",null))
if(b===c)return A.n([],A.aq(a))
return A.n(a.slice(b,c),A.aq(a))},
b8(a,b){return this.b9(a,b,null)},
gbO(a){var s=a.length
if(s>0)return a[s-1]
throw A.b(A.cf())},
bE(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw A.b(A.ac(a))}return!1},
bH(a,b){var s,r=a.length
for(s=0;s<r;++s){if(!b.$1(a[s]))return!1
if(a.length!==r)throw A.b(A.ac(a))}return!0},
b7(a,b){var s,r,q,p,o,n
a.$flags&2&&A.a9(a,"sort")
s=a.length
if(s<2)return
if(s===2){r=a[0]
q=a[1]
p=b.$2(r,q)
if(typeof p!=="number")return p.c2()
if(p>0){a[0]=q
a[1]=r}return}o=0
if(A.aq(a).c.b(null))for(n=0;n<a.length;++n)if(a[n]===void 0){a[n]=null;++o}a.sort(A.bk(b,2))
if(o>0)this.bz(a,o)},
bz(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
h(a){return A.dG(a,"[","]")},
gt(a){return new J.bo(a,a.length,A.aq(a).i("bo<1>"))},
gk(a){return A.ak(a)},
gm(a){return a.length},
$if:1}
J.by.prototype={
c0(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.bN(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.ch.prototype={}
J.bo.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.b(A.a8(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.ad.prototype={
bG(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gan(b)
if(this.gan(a)===s)return 0
if(this.gan(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gan(a){return a===0?1/a<0:a<0},
c_(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.b(A.cO(""+a+".toInt()"))},
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
return this.aN(a,b)},
D(a,b){return(a|0)===a?a/b|0:this.aN(a,b)},
aN(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.cO("Result of truncating division is "+A.m(s)+": "+A.m(a)+" ~/ "+b))},
P(a,b){if(b<0)throw A.b(A.dY(b))
return b>31?0:a<<b>>>0},
bB(a,b){return b>31?0:a<<b>>>0},
b6(a,b){var s
if(b<0)throw A.b(A.dY(b))
if(a>0)s=this.ac(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
bC(a,b){var s
if(a>0)s=this.ac(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
C(a,b){if(0>b)throw A.b(A.dY(b))
return this.ac(a,b)},
ac(a,b){return b>31?0:a>>>b},
gn(a){return A.a4(t.H)},
$ir:1}
J.aG.prototype={
gn(a){return A.a4(t.S)},
$ie:1,
$ia:1}
J.bA.prototype={
gn(a){return A.a4(t.i)},
$ie:1}
J.X.prototype={
ba(a,b,c){return a.substring(b,A.fR(b,c,a.length))},
b4(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.c(p,0)
if(p.charCodeAt(0)===133){s=J.fE(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.c(p,r)
q=p.charCodeAt(r)===133?J.fF(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
O(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.v)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
bS(a,b,c){var s=b-a.length
if(s<=0)return a
return this.O(c,s)+a},
h(a){return a},
gk(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gn(a){return A.a4(t.N)},
gm(a){return a.length},
$ie:1,
$iu:1}
A.aM.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.dx.prototype={
$0(){var s=new A.l($.h,t.D)
s.a0(null)
return s},
$S:8}
A.ct.prototype={}
A.aA.prototype={}
A.aN.prototype={
gt(a){var s=this
return new A.af(s,s.gm(s),A.U(s).i("af<1>"))}}
A.af.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s,r=this,q=r.a,p=J.eW(q),o=p.gm(q)
if(r.b!==o)throw A.b(A.ac(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.ag(q,s);++r.c
return!0}}
A.aB.prototype={
gt(a){return B.n},
gm(a){return 0}}
A.bu.prototype={
l(){return!1},
gp(){throw A.b(A.cf())}}
A.aE.prototype={
gm(a){return J.dC(this.a)},
gt(a){return new A.aF(J.dB(this.a),this.b)}}
A.az.prototype={}
A.aF.prototype={
l(){if(++this.c>=0&&this.a.l())return!0
this.c=-2
return!1},
gp(){var s=this.c
return s>=0?new A.w(this.b+s,this.a.gp()):A.L(A.cf())}}
A.aD.prototype={}
A.w.prototype={$r:"+(1,2)",$s:1}
A.bs.prototype={
h(a){return A.dK(this)}}
A.bv.prototype={
U(){var s=this,r=s.$map
if(r==null){r=new A.aL(s.$ti.i("aL<1,2>"))
A.iv(s.a,r)
s.$map=r}return r},
af(a){return this.U().af(a)},
q(a,b){return this.U().q(0,b)},
aj(a,b){this.U().aj(0,b)},
gm(a){return this.U().a}}
A.aV.prototype={}
A.cL.prototype={
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
A.aT.prototype={
h(a){return"Null check operator used on a null value"}}
A.bB.prototype={
h(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.bS.prototype={
h(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.cl.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.aC.prototype={}
A.b9.prototype={
h(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iC:1}
A.W.prototype={
h(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.f3(r==null?"unknown":r)+"'"},
gc1(){return this},
$C:"$1",
$R:1,
$D:null}
A.cb.prototype={$C:"$0",$R:0}
A.cc.prototype={$C:"$2",$R:2}
A.cz.prototype={}
A.cu.prototype={
h(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.f3(s)+"'"}}
A.ay.prototype={
A(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.ay))return!1
return this.$_target===b.$_target&&this.a===b.a},
gk(a){return(A.e4(this.a)^A.ak(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.bN(this.a)+"'")}}
A.bO.prototype={
h(a){return"RuntimeError: "+this.a}}
A.Y.prototype={
gm(a){return this.a},
af(a){var s=this.b
if(s==null)return!1
return s[a]!=null},
q(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.bM(b)},
bM(a){var s,r,q=this.d
if(q==null)return null
s=this.bs(q,a)
r=this.al(s,a)
if(r<0)return null
return s[r].b},
Y(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.aB(s==null?m.b=m.a7():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=m.c
m.aB(r==null?m.c=m.a7():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.a7()
p=m.ak(b)
o=q[p]
if(o==null)q[p]=[m.a_(b,c)]
else{n=m.al(o,b)
if(n>=0)o[n].b=c
else o.push(m.a_(b,c))}}},
aj(a,b){var s=this,r=s.e,q=s.r
while(r!=null){b.$2(r.a,r.b)
if(q!==s.r)throw A.b(A.ac(s))
r=r.c}},
aB(a,b,c){var s=a[b]
if(s==null)a[b]=this.a_(b,c)
else s.b=c},
a_(a,b){var s=this,r=new A.ci(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&1073741823
return r},
ak(a){return J.F(a)&1073741823},
bs(a,b){return a[this.ak(b)]},
al(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ax(a[r].a,b))return r
return-1},
h(a){return A.dK(this)},
a7(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.ci.prototype={}
A.aL.prototype={
ak(a){return A.iq(a)&1073741823},
al(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ax(a[r].a,b))return r
return-1}}
A.ds.prototype={
$1(a){return this.a(a)},
$S:9}
A.dt.prototype={
$2(a,b){return this.a(a,b)},
$S:10}
A.du.prototype={
$1(a){return this.a(a)},
$S:11}
A.ap.prototype={
h(a){return this.aP(!1)},
aP(a){var s,r,q,p,o,n=this.bq(),m=this.aI(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.c(m,q)
o=m[q]
l=a?l+A.el(o):l+A.m(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
bq(){var s,r=this.$s
while($.b7.length<=r)$.b7.push(null)
s=$.b7[r]
if(s==null){s=this.bo()
if(!(r<$.b7.length))return A.c($.b7,r)
$.b7[r]=s}return s},
bo(){var s,r,q,p,o,n=this.$r,m=n.indexOf("("),l=n.substring(1,m),k=n.substring(m),j=k==="()"?0:k.replace(/[^,]/g,"").length+1,i=A.n(new Array(j),t.f)
for(s=0;s<j;++s)i[s]=s
if(l!==""){r=l.split(",")
s=r.length
for(q=i.length,p=j;s>0;){--p;--s
o=r[s]
if(!(p>=0&&p<q))return A.c(i,p)
i[p]=o}}i=A.fL(i,!1,t.K)
i.$flags=3
return i}}
A.c2.prototype={
aI(){return[this.a,this.b]},
A(a,b){if(b==null)return!1
return b instanceof A.c2&&this.$s===b.$s&&J.ax(this.a,b.a)&&J.ax(this.b,b.b)},
gk(a){return A.cm(this.$s,this.a,this.b,B.e)}}
A.cg.prototype={
h(a){return"RegExp/"+this.a+"/"+this.b.flags},
bI(a){var s=this.b.exec(a)
if(s==null)return null
return new A.d8(s)}}
A.d8.prototype={
ap(a){var s,r=this.b.groups
if(r!=null){s=r[a]
if(s!=null||a in r)return s}throw A.b(A.dD(a,"name","Not a capture group name"))}}
A.ah.prototype={
gn(a){return B.dI},
$ie:1}
A.aR.prototype={}
A.bC.prototype={
gn(a){return B.dJ},
$ie:1}
A.ai.prototype={
gm(a){return a.length},
$iv:1}
A.aP.prototype={$if:1}
A.aQ.prototype={$if:1}
A.bD.prototype={
gn(a){return B.dK},
$ie:1}
A.bE.prototype={
gn(a){return B.dL},
$ie:1}
A.bF.prototype={
gn(a){return B.dM},
$ie:1}
A.bG.prototype={
gn(a){return B.dN},
$ie:1}
A.bH.prototype={
gn(a){return B.dO},
$ie:1}
A.bI.prototype={
gn(a){return B.dQ},
$ie:1}
A.bJ.prototype={
gn(a){return B.dR},
$ie:1,
$icN:1}
A.aS.prototype={
gn(a){return B.dS},
gm(a){return a.length},
$ie:1}
A.bK.prototype={
gn(a){return B.dT},
gm(a){return a.length},
$ie:1}
A.b3.prototype={}
A.b4.prototype={}
A.b5.prototype={}
A.b6.prototype={}
A.B.prototype={
i(a){return A.bg(v.typeUniverse,this,a)},
a1(a){return A.eD(v.typeUniverse,this,a)}}
A.c0.prototype={}
A.c5.prototype={
h(a){return A.x(this.a,null)}}
A.c_.prototype={
h(a){return this.a}}
A.bc.prototype={$iI:1}
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
A.bb.prototype={
be(a,b){if(self.setTimeout!=null)self.setTimeout(A.bk(new A.de(this,b),0),a)
else throw A.b(A.cO("`setTimeout()` not found."))},
bf(a,b){if(self.setTimeout!=null)self.setInterval(A.bk(new A.dd(this,a,Date.now(),b),0),a)
else throw A.b(A.cO("Periodic timer."))},
$icK:1}
A.de.prototype={
$0(){this.a.c=1
this.b.$0()},
$S:0}
A.dd.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.a.B(s,o)}q.c=p
r.d.$1(q)},
$S:1}
A.bT.prototype={}
A.di.prototype={
$1(a){return this.a.$2(0,a)},
$S:4}
A.dj.prototype={
$2(a,b){this.a.$2(1,new A.aC(a,b))},
$S:13}
A.dm.prototype={
$2(a,b){this.a(a,b)},
$S:14}
A.z.prototype={
h(a){return A.m(this.a)},
$ij:1,
gR(){return this.b}}
A.K.prototype={}
A.b_.prototype={
a9(){},
aa(){}}
A.bV.prototype={
gbt(){return this.c<4},
by(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
bD(a,b,c,d){var s,r,q,p,o,n=this
if((n.c&4)!==0){s=new A.b1($.h)
A.f1(s.gbu())
s.c=c
return s}s=$.h
r=d?1:0
q=A.et(s,a)
A.h3(s,b)
p=new A.b_(n,q,s,r|32,A.U(n).i("b_<1>"))
p.CW=p
p.ch=p
p.ay=n.c&1
o=n.e
n.e=p
p.ch=null
p.CW=o
if(o==null)n.d=p
else o.ch=p
if(n.d===p)A.eQ(n.a)
return p},
bx(a){var s,r=this
A.U(r).i("b_<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.by(a)
if((r.c&2)===0&&r.d==null)r.bk()}return null},
bh(){if((this.c&4)!==0)return new A.Z("Cannot add new events after calling close")
return new A.Z("Cannot add new events while doing an addStream")},
F(a,b){if(!this.gbt())throw A.b(this.bh())
this.ab(b)},
bk(){if((this.c&4)!==0)if(null.gc3())null.a0(null)
A.eQ(this.b)}}
A.aZ.prototype={
ab(a){var s
for(s=this.d;s!=null;s=s.ch)s.bi(new A.bY(a))}}
A.R.prototype={
bQ(a){if((this.c&15)!==6)return!0
return this.b.b.aw(this.d,a.a)},
bL(a){var s,r=this.e,q=null,p=a.a,o=this.b.b
if(t.C.b(r))q=o.bW(r,p,a.b)
else q=o.aw(r,p)
try{p=q
return p}catch(s){if(t._.b(A.aw(s))){if((this.c&1)!==0)throw A.b(A.ab("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.b(A.ab("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.l.prototype={
b3(a,b,c){var s,r=$.h
if(r===B.b){if(!t.C.b(b)&&!t.v.b(b))throw A.b(A.dD(b,"onError",u.c))}else b=A.i8(b,r)
s=new A.l(r,c.i("l<0>"))
this.S(new A.R(s,3,a,b,this.$ti.i("@<1>").a1(c).i("R<1,2>")))
return s},
aO(a,b,c){var s=new A.l($.h,c.i("l<0>"))
this.S(new A.R(s,19,a,b,this.$ti.i("@<1>").a1(c).i("R<1,2>")))
return s},
bA(a){this.a=this.a&1|16
this.c=a},
T(a){this.a=a.a&30|this.a&1
this.c=a.c},
S(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.S(a)
return}s.T(r)}A.as(null,null,s.b,new A.cV(s,a))}},
aM(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.aM(a)
return}n.T(s)}m.a=n.V(a)
A.as(null,null,n.b,new A.d_(m,n))}},
K(){var s=this.c
this.c=null
return this.V(s)},
V(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
a3(a){var s,r=this
if(r.$ti.i("G<1>").b(a))A.cY(a,r,!0)
else{s=r.K()
r.a=8
r.c=a
A.a0(r,s)}},
aG(a){var s=this,r=s.K()
s.a=8
s.c=a
A.a0(s,r)},
bn(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.K()
q.T(a)
A.a0(q,r)},
J(a){var s=this.K()
this.bA(a)
A.a0(this,s)},
bm(a,b){this.J(new A.z(a,b))},
a0(a){if(this.$ti.i("G<1>").b(a)){this.aE(a)
return}this.bj(a)},
bj(a){this.a^=2
A.as(null,null,this.b,new A.cX(this,a))},
aE(a){A.cY(a,this,!1)
return},
aD(a){this.a^=2
A.as(null,null,this.b,new A.cW(this,a))},
$iG:1}
A.cV.prototype={
$0(){A.a0(this.a,this.b)},
$S:0}
A.d_.prototype={
$0(){A.a0(this.b,this.a.a)},
$S:0}
A.cZ.prototype={
$0(){A.cY(this.a.a,this.b,!0)},
$S:0}
A.cX.prototype={
$0(){this.a.aG(this.b)},
$S:0}
A.cW.prototype={
$0(){this.a.J(this.b)},
$S:0}
A.d2.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.b0(q.d)}catch(p){s=A.aw(p)
r=A.a6(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.dE(q)
n=k.a
n.c=new A.z(q,o)
q=n}q.b=!0
return}if(j instanceof A.l&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.l){m=k.b.a
l=new A.l(m.b,m.$ti)
j.b3(new A.d3(l,m),new A.d4(l),t.n)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.d3.prototype={
$1(a){this.a.bn(this.b)},
$S:3}
A.d4.prototype={
$2(a,b){this.a.J(new A.z(a,b))},
$S:15}
A.d1.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
q.c=p.b.b.aw(p.d,this.b)}catch(o){s=A.aw(o)
r=A.a6(o)
q=s
p=r
if(p==null)p=A.dE(q)
n=this.a
n.c=new A.z(q,p)
n.b=!0}},
$S:0}
A.d0.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.bQ(s)&&p.a.e!=null){p.c=p.a.bL(s)
p.b=!1}}catch(o){r=A.aw(o)
q=A.a6(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.dE(p)
m=l.b
m.c=new A.z(p,n)
p=m}p.b=!0}},
$S:0}
A.bU.prototype={}
A.an.prototype={
gm(a){var s={},r=new A.l($.h,t.h)
s.a=0
this.aV(new A.cx(s,this),!0,new A.cy(s,r),r.gaF())
return r},
gah(a){var s=new A.l($.h,this.$ti.i("l<1>")),r=this.aV(null,!0,new A.cv(s),s.gaF())
r.aY(new A.cw(this,r,s))
return s}}
A.cx.prototype={
$1(a){++this.a.a},
$S(){return this.b.$ti.i("~(1)")}}
A.cy.prototype={
$0(){this.b.a3(this.a.a)},
$S:0}
A.cv.prototype={
$0(){var s,r=A.eo(),q=new A.Z("No element")
A.fO(q,r)
s=A.hR(q,r)
s=new A.z(q,r)
this.a.J(s)},
$S:0}
A.cw.prototype={
$1(a){A.hI(this.b,this.c,a)},
$S(){return this.a.$ti.i("~(1)")}}
A.b0.prototype={
gk(a){return(A.ak(this.a)^892482866)>>>0},
A(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.K&&b.a===this.a}}
A.bX.prototype={
aL(){return this.w.bx(this)},
a9(){},
aa(){}}
A.bW.prototype={
aY(a){this.a=A.et(this.d,a)},
aS(){var s,r=this,q=r.e&=4294967279
if((q&8)===0){q=r.e=q|8
if((q&128)!==0){s=r.r
if(s.a===1)s.a=3}if((q&64)===0)r.r=null
r.f=r.aL()}q=$.dz()
return q},
a9(){},
aa(){},
aL(){return null},
bi(a){var s,r,q=this,p=q.r
if(p==null)p=q.r=new A.c1()
s=p.c
if(s==null)p.b=p.c=a
else p.c=s.a=a
r=q.e
if((r&128)===0){r|=128
q.e=r
if(r<256)p.aA(q)}},
ab(a){var s=this,r=s.e
s.e=r|64
s.d.b2(s.a,a)
s.e&=4294967231
s.bl((r&4)!==0)},
bl(a){var s,r,q=this,p=q.e
if((p&128)!==0&&q.r.c==null){p=q.e=p&4294967167
s=!1
if((p&4)!==0)if(p<256){s=q.r
s=s==null?null:s.c==null
s=s!==!1}if(s){p&=4294967291
q.e=p}}for(;;a=r){if((p&8)!==0){q.r=null
return}r=(p&4)!==0
if(a===r)break
q.e=p^64
if(r)q.a9()
else q.aa()
p=q.e&=4294967231}if((p&128)!==0&&p<256)q.r.aA(q)}}
A.ba.prototype={
aV(a,b,c,d){return this.a.bD(a,d,c,!0)}}
A.bZ.prototype={}
A.bY.prototype={}
A.c1.prototype={
aA(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.f1(new A.d9(s,a))
s.a=1}}
A.d9.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.a
q.b=r
if(r==null)q.c=null
this.b.ab(s.b)},
$S:0}
A.b1.prototype={
aY(a){},
aS(){this.a=-1
this.c=null
return $.dz()},
bv(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.b1(s)}}else r.a=q}}
A.c3.prototype={}
A.dk.prototype={
$0(){return this.a.a3(this.b)},
$S:0}
A.dh.prototype={}
A.da.prototype={
b1(a){var s,r,q
try{if(B.b===$.h){a.$0()
return}A.eN(null,null,this,a)}catch(q){s=A.aw(q)
r=A.a6(q)
A.c6(s,r)}},
bZ(a,b){var s,r,q
try{if(B.b===$.h){a.$1(b)
return}A.eO(null,null,this,a,b)}catch(q){s=A.aw(q)
r=A.a6(q)
A.c6(s,r)}},
b2(a,b){return this.bZ(a,b,t.z)},
aR(a){return new A.db(this,a)},
bF(a,b){return new A.dc(this,a,b)},
bV(a){if($.h===B.b)return a.$0()
return A.eN(null,null,this,a)},
b0(a){return this.bV(a,t.z)},
bY(a,b){if($.h===B.b)return a.$1(b)
return A.eO(null,null,this,a,b)},
aw(a,b){var s=t.z
return this.bY(a,b,s,s)},
bX(a,b,c){if($.h===B.b)return a.$2(b,c)
return A.i9(null,null,this,a,b,c)},
bW(a,b,c){var s=t.z
return this.bX(a,b,c,s,s,s)},
bU(a){return a},
au(a){var s=t.z
return this.bU(a,s,s,s)}}
A.db.prototype={
$0(){return this.a.b1(this.b)},
$S:0}
A.dc.prototype={
$1(a){return this.a.b2(this.b,a)},
$S(){return this.c.i("~(0)")}}
A.dl.prototype={
$0(){A.fw(this.a,this.b)},
$S:0}
A.a1.prototype={
gt(a){var s=this,r=new A.ao(s,s.r,A.U(s).i("ao<1>"))
r.c=s.e
return r},
gm(a){return this.a},
F(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.aC(s==null?q.b=A.dQ():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.aC(r==null?q.c=A.dQ():r,b)}else return q.bg(b)},
bg(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.dQ()
s=q.bp(a)
r=p[s]
if(r==null)p[s]=[q.a8(a)]
else{if(q.br(r,a)>=0)return!1
r.push(q.a8(a))}return!0},
aC(a,b){if(a[b]!=null)return!1
a[b]=this.a8(b)
return!0},
aK(){this.r=this.r+1&1073741823},
a8(a){var s,r=this,q=new A.d7(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.aK()
return q},
bp(a){return J.F(a)&1073741823},
br(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ax(a[r].a,b))return r
return-1}}
A.d7.prototype={}
A.ao.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.b(A.ac(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.k.prototype={
gt(a){return new A.af(a,a.length,A.bl(a).i("af<k.E>"))},
ag(a,b){if(!(b>=0&&b<a.length))return A.c(a,b)
return a[b]},
h(a){return A.dG(a,"[","]")}}
A.aO.prototype={
gm(a){return this.a},
h(a){return A.dK(this)}}
A.cj.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.m(a)
r.a=(r.a+=s)+": "
s=A.m(b)
r.a+=s},
$S:16}
A.aW.prototype={
h(a){return A.dG(this,"{","}")}}
A.b8.prototype={}
A.bt.prototype={
A(a,b){if(b==null)return!1
return b instanceof A.bt&&this.a===b.a},
gk(a){return B.a.gk(this.a)},
h(a){var s,r,q,p,o=this.a,n=B.a.D(o,36e8)
o%=36e8
s=B.a.D(o,6e7)
o%=6e7
r=s<10?"0":""
q=B.a.D(o,1e6)
p=q<10?"0":""
return""+n+":"+r+s+":"+p+q+"."+B.f.bS(B.a.h(o%1e6),6,"0")}}
A.cT.prototype={
h(a){return this.aH()}}
A.j.prototype={
gR(){return A.fM(this)}}
A.bp.prototype={
h(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.cd(s)
return"Assertion failed"}}
A.I.prototype={}
A.E.prototype={
ga6(){return"Invalid argument"+(!this.a?"(s)":"")},
ga5(){return""},
h(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.ga6()+q+o
if(!s.a)return n
return n+s.ga5()+": "+A.cd(s.gam())},
gam(){return this.b}}
A.al.prototype={
gam(){return this.b},
ga6(){return"RangeError"},
ga5(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.m(q):""
else if(q==null)s=": Not greater than or equal to "+A.m(r)
else if(q>r)s=": Not in inclusive range "+A.m(r)+".."+A.m(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.m(r)
return s}}
A.bw.prototype={
gam(){return this.b},
ga6(){return"RangeError"},
ga5(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gm(a){return this.f}}
A.aY.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.bR.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.Z.prototype={
h(a){return"Bad state: "+this.a}}
A.br.prototype={
h(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.cd(s)+"."}}
A.bL.prototype={
h(a){return"Out of Memory"},
gR(){return null},
$ij:1}
A.aX.prototype={
h(a){return"Stack Overflow"},
gR(){return null},
$ij:1}
A.cU.prototype={
h(a){return"Exception: "+this.a}}
A.ce.prototype={
h(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(typeof q=="string"){if(q.length>78)q=B.f.ba(q,0,75)+"..."
return r+"\n"+q}else return r}}
A.H.prototype={
gm(a){var s,r=this.gt(this)
for(s=0;r.l();)++s
return s},
ag(a,b){var s,r
A.fQ(b,"index")
s=this.gt(this)
for(r=b;s.l();){if(r===0)return s.gp();--r}throw A.b(A.dF(b,b-r,this,null,"index"))},
h(a){return A.fD(this,"(",")")}}
A.b2.prototype={
ag(a,b){var s=this.a
if(0>b||b>=s)A.L(A.dF(b,s,this,null,"index"))
return this.b.$1(b)},
gm(a){return this.a}}
A.t.prototype={
gk(a){return A.d.prototype.gk.call(this,0)},
h(a){return"null"}}
A.d.prototype={$id:1,
A(a,b){return this===b},
gk(a){return A.ak(this)},
h(a){return"Instance of '"+A.bN(this)+"'"},
gn(a){return A.eX(this)},
toString(){return this.h(this)}}
A.c4.prototype={
h(a){return""},
$iC:1}
A.bQ.prototype={
gm(a){return this.a.length},
h(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.d5.prototype={
aX(a){if(a<=0||a>4294967296)throw A.b(A.fP("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
A.N.prototype={
gk(a){var s=this.a,r=this.b
return A.cm(new A.w(s,r).$s,s,r,B.e)},
A(a,b){var s,r,q,p
if(b==null)return!1
if(b instanceof A.N){s=b.a
r=b.b
q=this.a
p=this.b
p=A.cm(new A.w(s,r).$s,s,r,B.e)===A.cm(new A.w(q,p).$s,q,p,B.e)
s=p}else s=!1
return s},
h(a){var s=this
return"("+s.a+" "+s.b+") => '"+s.c+"' "+s.d}}
A.cn.prototype={
h(a){return A.eX(this).h(0)+": "+this.a}}
A.cB.prototype={}
A.ae.prototype={}
A.ag.prototype={
h(a){var s=this
return"               row: "+s.a+"\n            column: "+s.b+"\n         character: '"+s.c+"'\n    characterColor: "+s.d+"\n\n          pixelRow: "+s.e+"\n       pixelColumn: "+s.f+"\n         pixelIsOn: "+s.r+"\n    "}}
A.aj.prototype={
sI(a){var s,r,q,p=this
if(a<0){s=p.d=a
for(r=p.b,q=p.a;s<0;){s+=r
p.d=s
p.c=B.a.j(p.c-1,q)}}else{s=p.b
p.c=B.a.j(p.c+B.a.B(a,s),p.a)
p.d=B.a.j(a,s)}},
gu(){return this.c*this.b+this.d},
su(a){var s=this,r=s.b
s.c=B.a.j(B.a.B(a,r),s.a)
s.d=B.a.j(a,r)}}
A.bP.prototype={
bc(a,b,c,d,e,f,g,h){var s,r=this,q=v.G.document
q.onfocus=A.bh(new A.cp(r))
q.onblur=A.bh(new A.cq(r))
q=r.w
q.tabIndex=-1
q.style.display="block"
q.style.outline="none"
s=q.getContext("2d")
if(s==null)s=A.T(s)
s.imageSmoothingEnabled=!1
q.onfocus=A.bh(new A.cr(r))
q.onblur=A.bh(new A.cs(r))
b.style.display="flex"
b.style.alignItems="flex-start"
b.style.padding="0"
b.style.margin="0"
b.style.width="fit-content"
b.style.height="fit-content"
b.style.background="gray"
b.appendChild(q)
r.M(0)},
W(a,b){return new A.w(B.a.j(a,this.b),B.a.j(b,this.c))},
a2(){var s=this.x,r=s.getContext("2d")
if(r==null)r=A.T(r)
r.save()
r.beginPath()
r.clearRect(0,0,s.width,s.height)
r.restore()
return r},
a4(){var s=this.w.getContext("2d")
if(s==null)s=A.T(s)
s.save()
s.beginPath()
s.drawImage(this.x,0,0)
s.restore()
return s},
G(a,b,c,d){var s,r,q,p,o,n,m=this,l=a<0||a>=m.b||b<0||b>=m.c
if(l)return
s=m.W(a,b)
a=s.a
b=s.b
r=A.dM(b)
q=r.a
p=B.a.P(1,r.b)
l=m.y
if(!(a>=0&&a<l.length))return A.c(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.c(l,q)
o=l[q]
l.$flags&2&&A.a9(l)
l[q]=(o|p)>>>0
l[q]=(l[q]^p)>>>0
l=c.getContext("2d")
if(l==null)l=A.T(l)
l.save()
l.beginPath()
l.fillStyle=m.r
o=m.d
n=m.e
l.fillRect(b*o,a*n,o,n)
l.restore()},
H(a,b,c,d,e){var s,r,q,p,o,n,m=this,l=a<0||a>=m.b||b<0||b>=m.c
if(l)return
s=m.W(a,b)
a=s.a
b=s.b
r=A.dM(b)
q=r.a
p=B.a.P(1,r.b)
l=m.y
if(!(a>=0&&a<l.length))return A.c(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.c(l,q)
o=l[q]
l.$flags&2&&A.a9(l)
l[q]=(o|p)>>>0
o=d.getContext("2d")
l=o==null?A.T(o):o
l.save()
l.beginPath()
l.fillStyle=c
o=m.d
n=m.e
l.fillRect(b*o,a*n,o,n)
l.restore()},
aZ(a,b){var s,r,q,p,o=this.W(b,a)
b=o.a
s=A.dM(o.b)
r=s.a
q=B.a.P(1,s.b)
p=this.y
if(!(b>=0&&b<p.length))return A.c(p,b)
p=p[b]
if(!(r>=0&&r<p.length))return A.c(p,r)
return(p[r]&q)>>>0>0},
aT(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=this
if(e==null)e=k.c-c
if(b==null)b=k.b-d
k.a2()
if(c===0&&d===0&&e===k.c&&b===k.b){for(s=k.y,r=s.length,q=0;q<r;++q)for(p=0;o=s[q],p<o.length;++p){o.$flags&2&&A.a9(o)
o[p]=0}s=k.x
r=s.getContext("2d")
if(r==null)r=A.T(r)
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
M(a){return this.aT(0,null,0,0,null)},
bw(a,b,c,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
d.a2()
s=d.W(a,b)
a=s.a
b=s.b
r=B.a.bB(1,a1)-1
for(q=a2.a,p=a1-1,o=t.t,n=d.x,m=0;m<c.length;++m){l=c[m]
k=(l&r)>>>0
l=A.n([],o)
for(j=a+m,i=0;i<a1;++i){h=d.aZ(b+i,j)?1:0
l.push(B.a.P(h,p-i))}g=B.c.bK(l,0,new A.co())
switch(q){case 0:for(i=0;i<a1;++i){l=b+i
if((B.a.C(k,p-i)&1)>0)d.H(j,l,a0,n,!1)
else d.G(j,l,n,!1)}break
case 1:for(i=0;i<a1;++i){l=b+i
if((B.a.C(k,p-i)&1)>0)d.G(j,l,n,!1)
else d.H(j,l,a0,n,!1)}break
case 3:for(i=0;i<a1;++i){f=p-i
if((B.a.C(k,f)&1)>0&&(B.a.b6(g,f)&1)===0)d.H(j,b+i,a0,n,!1)}break
case 2:for(i=0;i<a1;++i)if((B.a.C(k,p-i)&1)>0)d.H(j,b+i,a0,n,!1)
break
case 4:for(e=(k&g)>>>0,i=0;i<a1;++i)if((B.a.C(e,p-i)&1)>0)d.H(j,b+i,a0,n,!1)
break
case 5:for(e=(k&g)>>>0,i=0;i<a1;++i)if((B.a.C(e,p-i)&1)>0)d.G(j,b+i,n,!1)
break
case 6:for(e=(k&g)>>>0,i=0;i<a1;++i)if((B.a.C(e,p-i)&1)===0)d.G(j,b+i,n,!1)
break
case 7:for(e=(k&g)>>>0,i=0;i<a1;++i){l=b+i
if((B.a.C(e,p-i)&1)===0)d.G(j,l,n,!1)
else d.H(j,l,a0,n,!1)}break}}d.a4()},
b_(a,b,c){this.bw(c.a,c.b,b,a,8,B.dG,!0,!1,!1)},
b5(a){var s,r,q,p,o,n,m,l,k=this,j=k.b
a=B.a.j(a,j)
for(s=j-a,r=k.y,q=r.length,p=0;p<s;++p){if(!(p<q))return A.c(r,p)
o=p+a
n=0
for(;m=r[p],n<m.length;++n){if(!(o<q))return A.c(r,o)
l=r[o]
if(!(n<l.length))return A.c(l,n)
l=l[n]
m.$flags&2&&A.a9(m)
m[n]=l}}for(;p<j;++p){if(!(p<q))return A.c(r,p)
n=0
for(;o=r[p],n<o.length;++n){o.$flags&2&&A.a9(o)
o[n]=0}}k.a2()
j=k.x
r=j.getContext("2d")
if(r==null)r=A.T(r)
r.save()
r.beginPath()
q=k.e
r.drawImage(k.w,0,-a*q)
r.fillStyle=k.r
r.fillRect(0,s*q,j.width,a*q)
r.restore()
k.a4()},
N(){var s=this.w
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
$0(){this.a.N()},
$S:1}
A.cs.prototype={
$0(){this.a.L()},
$S:1}
A.co.prototype={
$2(a,b){return(a|b)>>>0},
$S:17}
A.ck.prototype={
aH(){return"Mode."+this.b}}
A.am.prototype={
aH(){return"State."+this.b}}
A.cA.prototype={
bd(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=this,r=s.f
r.tabIndex=-1
r.onfocus=A.bh(new A.cC(s))
r.onblur=A.bh(new A.cD(s))
r.onkeydown=A.eI(new A.cE(s,l,new A.cI(),new A.cH(s)))
r.onclick=A.eI(new A.cF(s,new A.cJ(s),o))
A.fW(new A.bt(3e5),new A.cG(s))
s.L()
s.M(0)},
gai(){var s=this.w
s===$&&A.M()
return s.gai()},
gae(){var s=this.w
s===$&&A.M()
return s.gae()},
ad(a,b){return new A.w(B.a.j(a,this.a),B.a.j(b,this.b))},
aJ(){var s=this,r=s.x
s.CW.F(0,new A.N(r.c,r.d," ","white"))
s.aQ()
s.cy=!1},
aQ(){var s,r,q,p,o,n,m,l,k,j
for(s=this.CW,r=A.h5(s,s.r,A.U(s).c),q=this.w,p=this.cx,o=r.$ti.c;r.l();){n=r.d
if(n==null)n=o.a(n)
m=n.a
l=n.b
if(p.af(n.c)){k=p.q(0,n.c)
k.toString
j=k}else j=$.f8()
q===$&&A.M()
q.b_(n.d,j,new A.w(m*10,l*8))}if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.aK()}},
az(a,b){var s,r=this.ad(b,a)
b=r.a
a=r.b
s=this.ch
if(!(b>=0&&b<s.length))return A.c(s,b)
s=s[b]
if(!(a>=0&&a<s.length))return A.c(s,a)
return s[a].c},
aW(){var s,r=this.x
r.sI(0)
s=r.c
if(s===this.a-1)this.Z()
else r.c=B.a.j(s+1,r.a)},
Z(){var s,r,q,p,o,n,m,l,k=this
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
s===$&&A.M()
s.b5(10)},
E(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=e==null?h.x.c:e,f=h.ad(g,c==null?h.x.d:c)
g=h.x
s=g.a
g.c=B.a.j(f.a,s)
g.sI(f.b)
if(b==null)b="white"
for(r=a.split(""),q=r.length,p=h.ch,o=h.CW,n=h.a-1,m=h.b-1,l=0;l<q;++l){k=r[l]
e=g.c
c=g.d
if(!(e>=0&&e<p.length))return A.c(p,e)
j=p[e]
if(!(c>=0&&c<j.length))return A.c(j,c)
i=j[c]
i.c=k
i.d=b
o.F(0,i)
if(e===n&&c===m){h.Z()
g.c=B.a.j(g.c-1,s)}g.sI(g.d+1)}h.aQ()
if(d)h.aW()},
ar(a,b,c){return this.E(a,null,b,!0,c)},
aq(a,b){return this.E(a,null,null,b,null)},
X(a,b,c,d){return this.E(a,b,c,!0,d)},
bR(a,b,c,d){return this.E(a,null,b,c,d)},
M(a){var s,r,q,p,o=this,n=o.b,m=o.a
for(s=o.ch,r=0;r<m;++r)for(q=0;q<n;++q){if(!(r<s.length))return A.c(s,r)
p=s[r]
if(!(q<p.length))return A.c(p,q)
p=p[q]
p.c=" "
p.d="white"}s=o.w
s===$&&A.M()
s.aT(0,m*10,0,0,n*8)
s=o.x
s.c=0%s.a
s.sI(0)},
bT(a,b,c){var s=this.w
s===$&&A.M()
s.b_("white",b,new A.w(c*10,a*8))},
N(){return this.gai().$0()},
L(){return this.gae().$0()}}
A.cJ.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.w
i===$&&A.M()
s=J.e8(a.offsetX)
r=Math.max(Math.min(B.a.B(J.e8(a.offsetY)-1,i.e),i.b-1),0)
q=Math.max(Math.min(B.a.B(s-1,i.d),i.c-1),0)
p=B.a.D(r,10)
o=B.a.D(q,8)
n=j.az(o,p)
m=j.ad(p,o)
l=m.a
k=m.b
j=j.ch
if(!(l>=0&&l<j.length))return A.c(j,l)
j=j[l]
if(!(k>=0&&k<j.length))return A.c(j,k)
return new A.ag(p,o,n,j[k].d,r,q,i.aZ(q,r))},
$S:18}
A.cI.prototype={
$1(a){return new A.ae()},
$S:19}
A.cH.prototype={
$0(){var s,r,q,p,o,n=this.a,m=n.a,l=n.b,k=new A.aj(m,l)
k.su(n.y.gu())
s=A.n([],t.s)
for(r=n.z,q=r.b;p=k.c,o=k.d,p*l+o<r.c*q+r.d;p=k.c*l+k.d+1,k.c=B.a.j(B.a.B(p,l),m),k.d=B.a.j(p,l))s.push(n.az(o,p))
return B.c.ao(s,"")},
$S:20}
A.cC.prototype={
$0(){var s=this.a.w
s===$&&A.M()
s.N()},
$S:1}
A.cD.prototype={
$0(){var s=this.a.w
s===$&&A.M()
s.L()},
$S:1}
A.cE.prototype={
$1(a){var s,r,q,p
a.preventDefault()
s=this.a
switch(s.ay.a){case 0:break
case 1:r=s.at
if(r.d!=null){r.F(0,this.c.$1(a))
s.ay=B.d}break
case 2:s.aJ()
A:{q=a.keyCode
if(13===q){r=s.as
if(r.d!=null){r.F(0,J.fm(this.d.$0()))
s.aW()
s.ay=B.d}break A}if(8===q){r=s.x
if(r.gu()>s.y.gu()){r.su(r.gu()-1)
s.aq(" ",!1)
r.su(r.gu()-1)}break A}p=a.key
if(p.length===1&&s.x.gu()<s.z.gu())s.aq(p,!1)}break
case 3:break}},
$S:6}
A.cF.prototype={
$1(a){var s
a.preventDefault()
s=this.a
if(s.ay===B.dH&&s.ax.d!=null){s.ax.F(0,this.b.$1(a))
s.ay=B.d}},
$S:6}
A.cG.prototype={
$1(a){var s,r=this.a,q=r.w
q===$&&A.M()
if(q.z&&J.ax(v.G.document.activeElement,q.w)&&r.ay===B.m)if(r.cy)r.aJ()
else{q=r.x
s=q.c
r.bT(q.d,$.f7(),s)
r.cy=!0}},
$S:21}
A.c7.prototype={
av(){var s,r,q,p,o,n,m,l
for(s=$.aa(),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,A.a8)(s),++p){o=q.q(0,s[p])
o.toString
B.c.M(o)}s=A.n([],t.s)
for(r=A.eh(9,t.z),r=r.gt(r);r.l();){r.gp()
for(o=$.e5(),n=o.length,p=0;p<o.length;o.length===n||(0,A.a8)(o),++p)s.push(o[p])}B.c.b7(s,new A.ca())
for(r=s.length,p=0;p<s.length;s.length===r||(0,A.a8)(s),++p){m=s[p]
for(;;){o=B.c.b8($.aa(),1)
n=$.e6().aX(q.a-1)
if(!(n>=0&&n<o.length))return A.c(o,n)
l=o[n]
if(q.q(0,l).length<9){q.q(0,l).push(m)
break}}}},
bP(a){var s,r,q,p,o,n,m,l,k,j=$.f5().bI(a)
if(j!=null){s=j.ap("source")
s.toString
r=this.a
s=r.q(0,s)
s.toString
q=j.ap("index")
q.toString
p=A.iE(q)
q=j.ap("destination")
q.toString
q=r.q(0,q)
q.toString
r=s.length
o=r-p
n=!1
if(o>0)if(r>=o){m=q.length
if(m<=10-o)if(m!==0){if(!(p>=0&&p<r))return A.c(s,p)
r=s[p]===B.c.gbO(q)}else r=!0
else r=n}else r=n
else r=n
if(r){for(r=p>=0,l=s.$flags|0,k=0;k<o;++k){l&1&&A.a9(s,"removeAt",1)
if(!r||p>=s.length)A.L(A.em(p,null))
q.push(s.splice(p,1)[0])}return""}else return"Bad move..."}else return"Not understood..."},
gbN(){var s,r,q,p,o,n=A.n([],t.t)
for(s=$.aa(),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,A.a8)(s),++p){o=q.q(0,s[p])
o.toString
n.push(A.fK(o,A.aq(o).c).a)}return B.c.bH(n,new A.c8())&&B.c.bE(n,new A.c9())},
aU(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="white"
a.X("\u250c "+B.c.ao($.aa()," ")+" \u2510",e,c,b+1)
for(s=t.N,r=this.a,q=b+11,p=c+16,o=9;o>=0;--o){n=""+o
A.iI(n)
m=q-o
a.E(n,e,c,!1,m)
a.E(n,e,p,!1,m)
for(l=A.eg($.aa(),0,s),k=J.dB(l.a),l=l.b,j=new A.aF(k,l);j.l();){i=j.c
i=i>=0?new A.w(l+i,k.gp()):A.L(A.cf())
h=i.b
g=c+(i.a+1)*2
if(o<r.q(0,h).length){i=$.f4()
f=r.q(0,h)
if(!(o<f.length))return A.c(f,o)
f=i.q(0,f[o])
f.toString
a.E("\u2588",f,g,!1,m)}else a.bR(".",g,!1,m)}}a.X("\u2514 "+B.c.ao($.aa()," ")+" \u2518",e,c,b+12)}}
A.ca.prototype={
$2(a,b){return B.a.bG(1,$.e6().aX(2))},
$S:22}
A.c8.prototype={
$1(a){return a<=1},
$S:7}
A.c9.prototype={
$1(a){return a===0},
$S:7};(function aliases(){var s=J.P.prototype
s.bb=s.h})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._static_2,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u
s(A,"ik","h0",2)
s(A,"il","h1",2)
s(A,"im","h2",2)
r(A,"eT","id",0)
s(A,"io","i5",4)
q(A,"ip","i6",5)
p(A.l.prototype,"gaF","bm",5)
o(A.b1.prototype,"gbu","bv",0)
s(A,"eV","h4",23)
var n
o(n=A.bP.prototype,"gai","N",0)
o(n,"gae","L",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.d,null)
q(A.d,[A.dH,J.bx,A.aV,J.bo,A.j,A.W,A.ct,A.H,A.af,A.bu,A.aF,A.aD,A.ap,A.bs,A.cL,A.cl,A.aC,A.b9,A.aO,A.ci,A.cg,A.d8,A.B,A.c0,A.c5,A.bb,A.bT,A.z,A.an,A.bW,A.bV,A.R,A.l,A.bU,A.bZ,A.c1,A.b1,A.c3,A.dh,A.aW,A.d7,A.ao,A.k,A.bt,A.cT,A.bL,A.aX,A.cU,A.ce,A.t,A.c4,A.bQ,A.d5,A.N,A.cn,A.ae,A.ag,A.aj,A.bP,A.cA,A.c7])
q(J.bx,[J.bz,J.aH,J.aJ,J.aI,J.aK,J.ad,J.X])
q(J.aJ,[J.P,J.o,A.ah,A.aR])
q(J.P,[J.bM,J.a_,J.O])
r(J.by,A.aV)
r(J.ch,J.o)
q(J.ad,[J.aG,J.bA])
q(A.j,[A.aM,A.I,A.bB,A.bS,A.bO,A.c_,A.bp,A.E,A.aY,A.bR,A.Z,A.br])
q(A.W,[A.cb,A.cc,A.cz,A.ds,A.du,A.cQ,A.cP,A.di,A.d3,A.cx,A.cw,A.dc,A.cJ,A.cI,A.cE,A.cF,A.cG,A.c8,A.c9])
q(A.cb,[A.dx,A.cR,A.cS,A.de,A.dd,A.cV,A.d_,A.cZ,A.cX,A.cW,A.d2,A.d1,A.d0,A.cy,A.cv,A.d9,A.dk,A.db,A.dl,A.cp,A.cq,A.cr,A.cs,A.cH,A.cC,A.cD])
q(A.H,[A.aA,A.aE])
q(A.aA,[A.aN,A.aB])
r(A.az,A.aE)
r(A.c2,A.ap)
r(A.w,A.c2)
r(A.bv,A.bs)
r(A.aT,A.I)
q(A.cz,[A.cu,A.ay])
r(A.Y,A.aO)
r(A.aL,A.Y)
q(A.cc,[A.dt,A.dj,A.dm,A.d4,A.cj,A.co,A.ca])
q(A.aR,[A.bC,A.ai])
q(A.ai,[A.b3,A.b5])
r(A.b4,A.b3)
r(A.aP,A.b4)
r(A.b6,A.b5)
r(A.aQ,A.b6)
q(A.aP,[A.bD,A.bE])
q(A.aQ,[A.bF,A.bG,A.bH,A.bI,A.bJ,A.aS,A.bK])
r(A.bc,A.c_)
r(A.ba,A.an)
r(A.b0,A.ba)
r(A.K,A.b0)
r(A.bX,A.bW)
r(A.b_,A.bX)
r(A.aZ,A.bV)
r(A.bY,A.bZ)
r(A.da,A.dh)
r(A.b8,A.aW)
r(A.a1,A.b8)
q(A.E,[A.al,A.bw])
r(A.b2,A.aN)
r(A.cB,A.cn)
q(A.cT,[A.ck,A.am])
s(A.b3,A.k)
s(A.b4,A.aD)
s(A.b5,A.k)
s(A.b6,A.aD)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{a:"int",r:"double",eZ:"num",u:"String",dn:"bool",t:"Null",f:"List",d:"Object",iX:"Map",i:"JSObject"},mangledNames:{},types:["~()","t()","~(~())","t(@)","~(@)","~(d,C)","t(i)","dn(a)","G<~>()","@(@)","@(@,u)","@(u)","t(~())","t(@,C)","~(a,@)","t(d,C)","~(d?,d?)","a(a,a)","ag(i)","ae(i)","u()","~(cK)","a(u,u)","a(a)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.w&&a.b(c.a)&&b.b(c.b)}}
A.hm(v.typeUniverse,JSON.parse('{"bM":"P","a_":"P","O":"P","iY":"ah","bz":{"e":[]},"aH":{"e":[]},"aJ":{"i":[]},"P":{"i":[]},"o":{"f":["1"],"i":[]},"by":{"aV":[]},"ch":{"o":["1"],"f":["1"],"i":[]},"ad":{"r":[]},"aG":{"r":[],"a":[],"e":[]},"bA":{"r":[],"e":[]},"X":{"u":[],"e":[]},"aM":{"j":[]},"aA":{"H":["1"]},"aN":{"H":["1"]},"aB":{"H":["1"]},"aE":{"H":["+(a,1)"]},"az":{"aE":["1"],"H":["+(a,1)"]},"aT":{"I":[],"j":[]},"bB":{"j":[]},"bS":{"j":[]},"b9":{"C":[]},"bO":{"j":[]},"Y":{"aO":["1","2"]},"aL":{"Y":["1","2"],"aO":["1","2"]},"ah":{"i":[],"e":[]},"aR":{"i":[]},"bC":{"i":[],"e":[]},"ai":{"v":["1"],"i":[]},"aP":{"k":["r"],"f":["r"],"v":["r"],"i":[]},"aQ":{"k":["a"],"f":["a"],"v":["a"],"i":[]},"bD":{"k":["r"],"f":["r"],"v":["r"],"i":[],"e":[],"k.E":"r"},"bE":{"k":["r"],"f":["r"],"v":["r"],"i":[],"e":[],"k.E":"r"},"bF":{"k":["a"],"f":["a"],"v":["a"],"i":[],"e":[],"k.E":"a"},"bG":{"k":["a"],"f":["a"],"v":["a"],"i":[],"e":[],"k.E":"a"},"bH":{"k":["a"],"f":["a"],"v":["a"],"i":[],"e":[],"k.E":"a"},"bI":{"k":["a"],"f":["a"],"v":["a"],"i":[],"e":[],"k.E":"a"},"bJ":{"cN":[],"k":["a"],"f":["a"],"v":["a"],"i":[],"e":[],"k.E":"a"},"aS":{"k":["a"],"f":["a"],"v":["a"],"i":[],"e":[],"k.E":"a"},"bK":{"k":["a"],"f":["a"],"v":["a"],"i":[],"e":[],"k.E":"a"},"c_":{"j":[]},"bc":{"I":[],"j":[]},"bb":{"cK":[]},"z":{"j":[]},"K":{"an":["1"]},"aZ":{"bV":["1"]},"l":{"G":["1"]},"b0":{"an":["1"]},"ba":{"an":["1"]},"a1":{"aW":["1"]},"b8":{"aW":["1"]},"bp":{"j":[]},"I":{"j":[]},"E":{"j":[]},"al":{"j":[]},"bw":{"j":[]},"aY":{"j":[]},"bR":{"j":[]},"Z":{"j":[]},"br":{"j":[]},"bL":{"j":[]},"aX":{"j":[]},"b2":{"aN":["1"],"H":["1"]},"c4":{"C":[]},"fB":{"f":["a"]},"fZ":{"f":["a"]},"fY":{"f":["a"]},"fz":{"f":["a"]},"fX":{"f":["a"]},"fA":{"f":["a"]},"cN":{"f":["a"]},"fx":{"f":["r"]},"fy":{"f":["r"]}}'))
A.hl(v.typeUniverse,JSON.parse('{"aA":1,"bu":1,"aF":1,"aD":1,"bs":2,"ai":1,"b0":1,"bX":1,"bW":1,"ba":1,"bZ":1,"bY":1,"c1":1,"b1":1,"c3":1,"b8":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.dq
return{o:s("N"),Q:s("j"),Z:s("iV"),U:s("o<N>"),G:s("o<f<N>>"),f:s("o<d>"),s:s("o<u>"),w:s("o<cN>"),b:s("o<@>"),t:s("o<a>"),T:s("aH"),m:s("i"),g:s("O"),p:s("v<@>"),V:s("ae"),a:s("f<u>"),j:s("f<@>"),q:s("ag"),P:s("t"),K:s("d"),L:s("iZ"),F:s("+()"),l:s("C"),N:s("u"),E:s("cK"),R:s("e"),_:s("I"),A:s("a_"),c:s("l<@>"),h:s("l<a>"),D:s("l<~>"),y:s("dn"),i:s("r"),z:s("@"),v:s("@(d)"),C:s("@(d,C)"),S:s("a"),O:s("G<t>?"),B:s("i?"),X:s("d?"),x:s("u?"),u:s("dn?"),I:s("r?"),J:s("a?"),M:s("eZ?"),H:s("eZ"),n:s("~"),d:s("~(d)"),k:s("~(d,C)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.y=J.bx.prototype
B.c=J.o.prototype
B.a=J.aG.prototype
B.z=J.ad.prototype
B.f=J.X.prototype
B.A=J.O.prototype
B.B=J.aJ.prototype
B.k=J.bM.prototype
B.h=J.a_.prototype
B.n=new A.bu()
B.i=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.o=function() {
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
B.u=function(getTagFallback) {
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
B.p=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.t=function(hooks) {
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
B.r=function(hooks) {
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
B.q=function(hooks) {
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
B.j=function(hooks) { return hooks; }

B.v=new A.bL()
B.e=new A.ct()
B.w=new A.d5()
B.b=new A.da()
B.x=new A.c4()
B.d0=s([126,129,165,129,189,153,129,126],t.t)
B.a2=s([126,255,219,255,195,231,255,126],t.t)
B.dx=s([108,254,254,254,124,56,16,0],t.t)
B.bY=s([16,56,124,254,124,56,16,0],t.t)
B.aW=s([56,124,56,254,254,124,56,124],t.t)
B.b7=s([16,16,56,124,254,124,56,124],t.t)
B.aq=s([0,0,24,60,60,24,0,0],t.t)
B.at=s([255,255,231,195,195,231,255,255],t.t)
B.aF=s([0,60,102,66,66,102,60,0],t.t)
B.cL=s([255,195,153,189,189,153,195,255],t.t)
B.dw=s([15,7,15,125,204,204,204,120],t.t)
B.dv=s([60,102,102,102,60,24,126,24],t.t)
B.cI=s([63,51,63,48,48,112,240,224],t.t)
B.M=s([127,99,127,99,99,103,230,192],t.t)
B.R=s([153,90,60,231,231,60,90,153],t.t)
B.an=s([128,224,248,254,248,224,128,0],t.t)
B.bt=s([2,14,62,254,62,14,2,0],t.t)
B.cb=s([24,60,126,24,24,126,60,24],t.t)
B.c7=s([102,102,102,102,102,0,102,0],t.t)
B.ch=s([127,219,219,123,27,27,27,0],t.t)
B.ci=s([62,99,56,108,108,56,204,120],t.t)
B.bH=s([0,0,0,0,126,126,126,0],t.t)
B.bK=s([24,60,126,24,126,60,24,255],t.t)
B.H=s([24,60,126,24,24,24,24,0],t.t)
B.d5=s([24,24,24,24,126,60,24,0],t.t)
B.cZ=s([0,24,12,254,12,24,0,0],t.t)
B.ak=s([0,48,96,254,96,48,0,0],t.t)
B.bP=s([0,0,192,192,192,254,0,0],t.t)
B.bm=s([0,36,102,255,102,36,0,0],t.t)
B.a0=s([0,24,60,126,255,255,0,0],t.t)
B.bL=s([0,255,255,126,60,24,0,0],t.t)
B.aR=s([0,0,0,0,0,0,0,0],t.t)
B.bu=s([48,120,120,48,48,0,48,0],t.t)
B.P=s([108,108,108,0,0,0,0,0],t.t)
B.ae=s([108,108,254,108,254,108,108,0],t.t)
B.bT=s([48,124,192,120,12,248,48,0],t.t)
B.G=s([0,198,204,24,48,102,198,0],t.t)
B.cu=s([56,108,56,118,220,204,118,0],t.t)
B.ad=s([96,96,192,0,0,0,0,0],t.t)
B.L=s([24,48,96,96,96,48,24,0],t.t)
B.bq=s([96,48,24,24,24,48,96,0],t.t)
B.cl=s([0,102,60,255,60,102,0,0],t.t)
B.dE=s([0,48,48,252,48,48,0,0],t.t)
B.bV=s([0,0,0,0,0,48,48,96],t.t)
B.bl=s([0,0,0,252,0,0,0,0],t.t)
B.c9=s([0,0,0,0,0,48,48,0],t.t)
B.W=s([6,12,24,48,96,192,128,0],t.t)
B.aZ=s([124,198,206,222,246,230,124,0],t.t)
B.cc=s([48,112,48,48,48,48,252,0],t.t)
B.bR=s([120,204,12,56,96,204,252,0],t.t)
B.dz=s([120,204,12,56,12,204,120,0],t.t)
B.bs=s([28,60,108,204,254,12,30,0],t.t)
B.d_=s([252,192,248,12,12,204,120,0],t.t)
B.dg=s([56,96,192,248,204,204,120,0],t.t)
B.bS=s([252,204,12,24,48,48,48,0],t.t)
B.co=s([120,204,204,120,204,204,120,0],t.t)
B.b5=s([120,204,204,124,12,24,112,0],t.t)
B.cT=s([0,48,48,0,0,48,48,0],t.t)
B.aI=s([0,48,48,0,0,48,48,96],t.t)
B.br=s([24,48,96,192,96,48,24,0],t.t)
B.bg=s([0,0,252,0,0,252,0,0],t.t)
B.as=s([96,48,24,12,24,48,96,0],t.t)
B.ai=s([120,204,12,24,48,0,48,0],t.t)
B.dc=s([124,198,222,222,222,192,120,0],t.t)
B.c3=s([48,120,204,204,252,204,204,0],t.t)
B.aC=s([252,102,102,124,102,102,252,0],t.t)
B.a4=s([60,102,192,192,192,102,60,0],t.t)
B.X=s([248,108,102,102,102,108,248,0],t.t)
B.aa=s([254,98,104,120,104,98,254,0],t.t)
B.cf=s([254,98,104,120,104,96,240,0],t.t)
B.ag=s([60,102,192,192,206,102,62,0],t.t)
B.aj=s([204,204,204,252,204,204,204,0],t.t)
B.cD=s([120,48,48,48,48,48,120,0],t.t)
B.bF=s([30,12,12,12,204,204,120,0],t.t)
B.bx=s([230,102,108,120,108,102,230,0],t.t)
B.bw=s([240,96,96,96,98,102,254,0],t.t)
B.aD=s([198,238,254,254,214,198,198,0],t.t)
B.O=s([198,230,246,222,206,198,198,0],t.t)
B.cN=s([56,108,198,198,198,108,56,0],t.t)
B.bb=s([252,102,102,124,96,96,240,0],t.t)
B.cx=s([120,204,204,204,220,120,28,0],t.t)
B.F=s([252,102,102,124,108,102,230,0],t.t)
B.a7=s([120,204,224,112,28,204,120,0],t.t)
B.dq=s([252,180,48,48,48,48,120,0],t.t)
B.aA=s([204,204,204,204,204,204,252,0],t.t)
B.T=s([204,204,204,204,204,120,48,0],t.t)
B.cG=s([198,198,198,214,254,238,198,0],t.t)
B.cA=s([198,198,108,56,56,108,198,0],t.t)
B.V=s([204,204,204,120,48,48,120,0],t.t)
B.J=s([254,198,140,24,50,102,254,0],t.t)
B.bn=s([120,96,96,96,96,96,120,0],t.t)
B.cs=s([192,96,48,24,12,6,2,0],t.t)
B.bp=s([120,24,24,24,24,24,120,0],t.t)
B.df=s([16,56,108,198,0,0,0,0],t.t)
B.E=s([0,0,0,0,0,0,0,255],t.t)
B.aB=s([48,48,24,0,0,0,0,0],t.t)
B.d6=s([0,0,120,12,124,204,118,0],t.t)
B.c6=s([224,96,96,124,102,102,220,0],t.t)
B.cz=s([0,0,120,204,192,204,120,0],t.t)
B.aX=s([28,12,12,124,204,204,118,0],t.t)
B.di=s([0,0,120,204,252,192,120,0],t.t)
B.aG=s([56,108,96,240,96,96,240,0],t.t)
B.cw=s([0,0,118,204,204,124,12,248],t.t)
B.ar=s([224,96,108,118,102,102,230,0],t.t)
B.cm=s([48,0,112,48,48,48,120,0],t.t)
B.bA=s([12,0,12,12,12,204,204,120],t.t)
B.b3=s([224,96,102,108,120,108,230,0],t.t)
B.bC=s([112,48,48,48,48,48,120,0],t.t)
B.bk=s([0,0,204,254,254,214,198,0],t.t)
B.bD=s([0,0,248,204,204,204,204,0],t.t)
B.b6=s([0,0,120,204,204,204,120,0],t.t)
B.dm=s([0,0,220,102,102,124,96,240],t.t)
B.dj=s([0,0,118,204,204,124,12,30],t.t)
B.bh=s([0,0,220,118,102,96,240,0],t.t)
B.cQ=s([0,0,124,192,120,12,248,0],t.t)
B.cJ=s([16,48,124,48,48,52,24,0],t.t)
B.c0=s([0,0,204,204,204,204,118,0],t.t)
B.aV=s([0,0,204,204,204,120,48,0],t.t)
B.ba=s([0,0,198,214,254,254,108,0],t.t)
B.by=s([0,0,198,108,56,108,198,0],t.t)
B.dt=s([0,0,204,204,204,124,12,248],t.t)
B.d4=s([0,0,252,152,48,100,252,0],t.t)
B.b0=s([28,48,48,224,48,48,28,0],t.t)
B.cP=s([24,24,24,0,24,24,24,0],t.t)
B.av=s([224,48,48,28,48,48,224,0],t.t)
B.dD=s([118,220,0,0,0,0,0,0],t.t)
B.aU=s([0,16,56,108,198,198,254,0],t.t)
B.am=s([120,204,192,204,120,24,12,120],t.t)
B.d2=s([0,204,0,204,204,204,126,0],t.t)
B.ds=s([28,0,120,204,252,192,120,0],t.t)
B.bU=s([126,195,60,6,62,102,63,0],t.t)
B.a9=s([204,0,120,12,124,204,126,0],t.t)
B.aY=s([224,0,120,12,124,204,126,0],t.t)
B.a_=s([48,48,120,12,124,204,126,0],t.t)
B.bd=s([0,0,120,192,192,120,12,56],t.t)
B.db=s([126,195,60,102,126,96,60,0],t.t)
B.aE=s([204,0,120,204,252,192,120,0],t.t)
B.cR=s([224,0,120,204,252,192,120,0],t.t)
B.d3=s([204,0,112,48,48,48,120,0],t.t)
B.cH=s([124,198,56,24,24,24,60,0],t.t)
B.aQ=s([224,0,112,48,48,48,120,0],t.t)
B.dy=s([198,56,108,198,254,198,198,0],t.t)
B.cO=s([48,48,0,120,204,252,204,0],t.t)
B.bv=s([28,0,252,96,120,96,252,0],t.t)
B.dr=s([0,0,127,12,127,204,127,0],t.t)
B.aJ=s([62,108,204,254,204,204,206,0],t.t)
B.dk=s([120,204,0,120,204,204,120,0],t.t)
B.a5=s([0,204,0,120,204,204,120,0],t.t)
B.dA=s([0,224,0,120,204,204,120,0],t.t)
B.aH=s([120,204,0,204,204,204,126,0],t.t)
B.cK=s([0,224,0,204,204,204,126,0],t.t)
B.ap=s([0,204,0,204,204,124,12,248],t.t)
B.ab=s([195,24,60,102,102,60,24,0],t.t)
B.cX=s([204,0,204,204,204,204,120,0],t.t)
B.Q=s([24,24,126,192,192,126,24,24],t.t)
B.ay=s([56,108,100,240,96,230,252,0],t.t)
B.aS=s([204,204,120,252,48,252,48,48],t.t)
B.d7=s([248,204,204,250,198,207,198,199],t.t)
B.bG=s([14,27,24,60,24,24,216,112],t.t)
B.au=s([28,0,120,12,124,204,126,0],t.t)
B.c5=s([56,0,112,48,48,48,120,0],t.t)
B.ax=s([0,28,0,120,204,204,120,0],t.t)
B.cp=s([0,28,0,204,204,204,126,0],t.t)
B.aN=s([0,248,0,248,204,204,204,0],t.t)
B.cF=s([252,0,204,236,252,220,204,0],t.t)
B.a6=s([60,108,108,62,0,126,0,0],t.t)
B.c2=s([56,108,108,56,0,124,0,0],t.t)
B.cY=s([48,0,48,96,192,204,120,0],t.t)
B.aP=s([0,0,0,252,192,192,0,0],t.t)
B.aw=s([0,0,0,252,12,12,0,0],t.t)
B.cS=s([195,198,204,222,51,102,204,15],t.t)
B.ao=s([195,198,204,219,55,111,207,3],t.t)
B.bJ=s([24,24,0,24,24,24,24,0],t.t)
B.bI=s([0,51,102,204,102,51,0,0],t.t)
B.b2=s([0,204,102,51,102,204,0,0],t.t)
B.cr=s([34,136,34,136,34,136,34,136],t.t)
B.dl=s([85,170,85,170,85,170,85,170],t.t)
B.bB=s([219,119,219,238,219,119,219,238],t.t)
B.aT=s([24,24,24,24,24,24,24,24],t.t)
B.aO=s([24,24,24,24,248,24,24,24],t.t)
B.bQ=s([24,24,248,24,248,24,24,24],t.t)
B.dC=s([54,54,54,54,246,54,54,54],t.t)
B.cd=s([0,0,0,0,254,54,54,54],t.t)
B.aK=s([0,0,248,24,248,24,24,24],t.t)
B.a3=s([54,54,246,6,246,54,54,54],t.t)
B.cj=s([54,54,54,54,54,54,54,54],t.t)
B.c1=s([0,0,254,6,246,54,54,54],t.t)
B.cn=s([54,54,246,6,254,0,0,0],t.t)
B.ah=s([54,54,54,54,254,0,0,0],t.t)
B.U=s([24,24,248,24,248,0,0,0],t.t)
B.Z=s([0,0,0,0,248,24,24,24],t.t)
B.S=s([24,24,24,24,31,0,0,0],t.t)
B.bO=s([24,24,24,24,255,0,0,0],t.t)
B.bf=s([0,0,0,0,255,24,24,24],t.t)
B.cW=s([24,24,24,24,31,24,24,24],t.t)
B.bM=s([0,0,0,0,255,0,0,0],t.t)
B.ck=s([24,24,24,24,255,24,24,24],t.t)
B.cv=s([24,24,31,24,31,24,24,24],t.t)
B.b4=s([54,54,54,54,55,54,54,54],t.t)
B.dh=s([54,54,55,48,63,0,0,0],t.t)
B.da=s([0,0,63,48,55,54,54,54],t.t)
B.bz=s([54,54,247,0,255,0,0,0],t.t)
B.bo=s([0,0,255,0,247,54,54,54],t.t)
B.aM=s([54,54,55,48,55,54,54,54],t.t)
B.aL=s([0,0,255,0,255,0,0,0],t.t)
B.du=s([54,54,247,0,247,54,54,54],t.t)
B.cB=s([24,24,255,0,255,0,0,0],t.t)
B.C=s([54,54,54,54,255,0,0,0],t.t)
B.dn=s([0,0,255,0,255,24,24,24],t.t)
B.bW=s([0,0,0,0,255,54,54,54],t.t)
B.ce=s([54,54,54,54,63,0,0,0],t.t)
B.bj=s([24,24,31,24,31,0,0,0],t.t)
B.c8=s([0,0,31,24,31,24,24,24],t.t)
B.cy=s([0,0,0,0,63,54,54,54],t.t)
B.cE=s([54,54,54,54,255,54,54,54],t.t)
B.bE=s([24,24,255,24,255,24,24,24],t.t)
B.d8=s([24,24,24,24,248,0,0,0],t.t)
B.b_=s([0,0,0,0,31,24,24,24],t.t)
B.bX=s([255,255,255,255,255,255,255,255],t.t)
B.c_=s([0,0,0,0,255,255,255,255],t.t)
B.b9=s([240,240,240,240,240,240,240,240],t.t)
B.cg=s([15,15,15,15,15,15,15,15],t.t)
B.cV=s([255,255,255,255,0,0,0,0],t.t)
B.dB=s([0,0,118,220,200,220,118,0],t.t)
B.dd=s([0,120,204,248,204,248,192,192],t.t)
B.af=s([0,252,204,192,192,192,192,0],t.t)
B.bZ=s([0,254,108,108,108,108,108,0],t.t)
B.d9=s([252,204,96,48,96,204,252,0],t.t)
B.bc=s([0,0,126,216,216,216,112,0],t.t)
B.bi=s([0,102,102,102,102,124,96,192],t.t)
B.ct=s([0,118,220,24,24,24,24,0],t.t)
B.a8=s([252,48,120,204,204,120,48,252],t.t)
B.az=s([56,108,198,254,198,108,56,0],t.t)
B.ac=s([56,108,198,198,108,108,238,0],t.t)
B.D=s([28,48,24,124,204,204,120,0],t.t)
B.dp=s([0,0,126,219,219,126,0,0],t.t)
B.be=s([6,12,126,219,219,126,96,192],t.t)
B.a1=s([56,96,192,248,192,96,56,0],t.t)
B.ca=s([120,204,204,204,204,204,204,0],t.t)
B.cC=s([0,252,0,252,0,252,0,0],t.t)
B.Y=s([48,48,252,48,48,0,252,0],t.t)
B.b1=s([96,48,24,48,96,0,252,0],t.t)
B.cM=s([24,48,96,48,24,0,252,0],t.t)
B.b8=s([14,27,27,24,24,24,24,24],t.t)
B.d1=s([24,24,24,24,24,216,216,112],t.t)
B.c4=s([48,48,0,252,0,48,48,0],t.t)
B.I=s([0,118,220,0,118,220,0,0],t.t)
B.cq=s([56,108,108,56,0,0,0,0],t.t)
B.K=s([0,0,0,24,24,0,0,0],t.t)
B.de=s([0,0,0,0,24,0,0,0],t.t)
B.N=s([15,12,12,12,236,108,60,28],t.t)
B.bN=s([120,108,108,108,108,0,0,0],t.t)
B.al=s([112,24,48,96,120,0,0,0],t.t)
B.cU=s([0,0,60,60,60,60,0,0],t.t)
B.dF=new A.bv(["\u263a",B.d0,"\u263b",B.a2,"\u2665",B.dx,"\u2666",B.bY,"\u2663",B.aW,"\u2660",B.b7,"\u2022",B.aq,"\u25d8",B.at,"\u25cb",B.aF,"\u25d9",B.cL,"\u2642",B.dw,"\u2640",B.dv,"\u266a",B.cI,"\u266b",B.M,"\u263c",B.R,"\u25ba",B.an,"\u25c4",B.bt,"\u2195",B.cb,"\u203c",B.c7,"\xb6",B.ch,"\xa7",B.ci,"\u25ac",B.bH,"\u21a8",B.bK,"\u2191",B.H,"\u2193",B.d5,"\u2192",B.cZ,"\u2190",B.ak,"\u221f",B.bP,"\u2194",B.bm,"\u25b2",B.a0,"\u25bc",B.bL," ",B.aR,"!",B.bu,'"',B.P,"#",B.ae,"$",B.bT,"%",B.G,"&",B.cu,"'",B.ad,"(",B.L,")",B.bq,"*",B.cl,"+",B.dE,",",B.bV,"-",B.bl,".",B.c9,"/",B.W,"0",B.aZ,"1",B.cc,"2",B.bR,"3",B.dz,"4",B.bs,"5",B.d_,"6",B.dg,"7",B.bS,"8",B.co,"9",B.b5,":",B.cT,";",B.aI,"<",B.br,"=",B.bg,">",B.as,"?",B.ai,"@",B.dc,"A",B.c3,"B",B.aC,"C",B.a4,"D",B.X,"E",B.aa,"F",B.cf,"G",B.ag,"H",B.aj,"I",B.cD,"J",B.bF,"K",B.bx,"L",B.bw,"M",B.aD,"N",B.O,"O",B.cN,"P",B.bb,"Q",B.cx,"R",B.F,"S",B.a7,"T",B.dq,"U",B.aA,"V",B.T,"W",B.cG,"X",B.cA,"Y",B.V,"Z",B.J,"[",B.bn,"\\",B.cs,"]",B.bp,"^",B.df,"_",B.E,"`",B.aB,"a",B.d6,"b",B.c6,"c",B.cz,"d",B.aX,"e",B.di,"f",B.aG,"g",B.cw,"h",B.ar,"i",B.cm,"j",B.bA,"k",B.b3,"l",B.bC,"m",B.bk,"n",B.bD,"o",B.b6,"p",B.dm,"q",B.dj,"r",B.bh,"s",B.cQ,"t",B.cJ,"u",B.c0,"v",B.aV,"w",B.ba,"x",B.by,"y",B.dt,"z",B.d4,"{",B.b0,"|",B.cP,"}",B.av,"~",B.dD,"\u2302",B.aU,"\xc7",B.am,"\xfc",B.d2,"\xe9",B.ds,"\xe2",B.bU,"\xe4",B.a9,"\xe0",B.aY,"\xe5",B.a_,"\xe7",B.bd,"\xea",B.db,"\xeb",B.aE,"\xe8",B.cR,"\xef",B.d3,"\xee",B.cH,"\xec",B.aQ,"\xc4",B.dy,"\xc5",B.cO,"\xc9",B.bv,"\xe6",B.dr,"\xc6",B.aJ,"\xf4",B.dk,"\xf6",B.a5,"\xf2",B.dA,"\xfb",B.aH,"\xf9",B.cK,"\xff",B.ap,"\xd6",B.ab,"\xdc",B.cX,"\xa2",B.Q,"\xa3",B.ay,"\xa5",B.aS,"\u20a7",B.d7,"\u0192",B.bG,"\xe1",B.au,"\xed",B.c5,"\xf3",B.ax,"\xfa",B.cp,"\xf1",B.aN,"\xd1",B.cF,"\xaa",B.a6,"\xba",B.c2,"\xbf",B.cY,"\u2310",B.aP,"\xac",B.aw,"\xbd",B.cS,"\xbc",B.ao,"\xa1",B.bJ,"\xab",B.bI,"\xbb",B.b2,"\u2591",B.cr,"\u2592",B.dl,"\u2593",B.bB,"\u2502",B.aT,"\u2524",B.aO,"\u2561",B.bQ,"\u2562",B.dC,"\u2556",B.cd,"\u2555",B.aK,"\u2563",B.a3,"\u2551",B.cj,"\u2557",B.c1,"\u255d",B.cn,"\u255c",B.ah,"\u255b",B.U,"\u2510",B.Z,"\u2514",B.S,"\u2534",B.bO,"\u252c",B.bf,"\u251c",B.cW,"\u2500",B.bM,"\u253c",B.ck,"\u255e",B.cv,"\u255f",B.b4,"\u255a",B.dh,"\u2554",B.da,"\u2569",B.bz,"\u2566",B.bo,"\u2560",B.aM,"\u2550",B.aL,"\u256c",B.du,"\u2567",B.cB,"\u2568",B.C,"\u2564",B.dn,"\u2565",B.bW,"\u2559",B.ce,"\u2558",B.bj,"\u2552",B.c8,"\u2553",B.cy,"\u256b",B.cE,"\u256a",B.bE,"\u2518",B.d8,"\u250c",B.b_,"\u2588",B.bX,"\u2584",B.c_,"\u258c",B.b9,"\u2590",B.cg,"\u2580",B.cV,"\u03b1",B.dB,"\xdf",B.dd,"\u0393",B.af,"\u03c0",B.bZ,"\u03a3",B.d9,"\u03c3",B.bc,"\xb5",B.bi,"\u03c4",B.ct,"\u03a6",B.a8,"\u0398",B.az,"\u03a9",B.ac,"\u03b4",B.D,"\u221e",B.dp,"\u03c6",B.be,"\u03b5",B.a1,"\u2229",B.ca,"\u2261",B.cC,"\xb1",B.Y,"\u2265",B.b1,"\u2264",B.cM,"\u2320",B.b8,"\u2321",B.d1,"\xf7",B.c4,"\u2248",B.I,"\xb0",B.cq,"\u2219",B.K,"\xb7",B.de,"\u221a",B.N,"\u207f",B.bN,"\xb2",B.al,"\u25a0",B.cU],A.dq("bv<u,f<a>>"))
B.dG=new A.ck(0,"replace")
B.d=new A.am(0,"ready")
B.l=new A.am(1,"awaitingKey")
B.m=new A.am(2,"awaitingString")
B.dH=new A.am(3,"awaitingMouseClick")
B.dI=A.D("iR")
B.dJ=A.D("iS")
B.dK=A.D("fx")
B.dL=A.D("fy")
B.dM=A.D("fz")
B.dN=A.D("fA")
B.dO=A.D("fB")
B.dP=A.D("d")
B.dQ=A.D("fX")
B.dR=A.D("cN")
B.dS=A.D("fY")
B.dT=A.D("fZ")})();(function staticFields(){$.d6=null
$.y=A.n([],t.f)
$.ek=null
$.eb=null
$.ea=null
$.eY=null
$.eS=null
$.f0=null
$.dp=null
$.dv=null
$.e1=null
$.b7=A.n([],A.dq("o<f<d>?>"))
$.ar=null
$.bi=null
$.bj=null
$.dW=!1
$.h=B.b})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"iU","f6",()=>A.dr("_$dart_dartClosure"))
s($,"iT","dy",()=>A.dr("_$dart_dartClosure_dartJSInterop"))
s($,"jg","fk",()=>B.b.b0(new A.dx()))
s($,"je","fj",()=>A.n([new J.by()],A.dq("o<aV>")))
s($,"j2","f9",()=>A.J(A.cM({
toString:function(){return"$receiver$"}})))
s($,"j3","fa",()=>A.J(A.cM({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"j4","fb",()=>A.J(A.cM(null)))
s($,"j5","fc",()=>A.J(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"j8","ff",()=>A.J(A.cM(void 0)))
s($,"j9","fg",()=>A.J(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"j7","fe",()=>A.J(A.er(null)))
s($,"j6","fd",()=>A.J(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"jb","fi",()=>A.J(A.er(void 0)))
s($,"ja","fh",()=>A.J(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"jc","e7",()=>A.h_())
s($,"iW","dz",()=>$.fk())
s($,"jd","dA",()=>A.e4(B.dP))
s($,"j1","f8",()=>A.dJ(8,0,t.S))
s($,"j0","f7",()=>A.dJ(8,255,t.S))
s($,"iQ","e6",()=>B.w)
s($,"iN","e5",()=>A.n("ABCDEF".split(""),t.s))
s($,"iM","f4",()=>{var r,q,p,o=t.N,n=A.ej(o,o)
for(o=A.fC($.e5(),o).gt(0);o.l();){r=o.gp()
q=r.a
p=["#ff3311","#ff9933","#d0c310","#69d025","#4444dd","#12bdb9"]
if(!(q>=0&&q<6))return A.c(p,q)
n.Y(0,r.b,p[q])}return n})
s($,"iO","aa",()=>A.n("abcdefg".split(""),t.s))
s($,"iP","f5",()=>A.fS("^\\s*(?<source>[a-gA-G])\\s*(?<index>\\d)\\s*(?<destination>[a-gA-G])\\s*$"))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.ah,SharedArrayBuffer:A.ah,ArrayBufferView:A.aR,DataView:A.bC,Float32Array:A.bD,Float64Array:A.bE,Int16Array:A.bF,Int32Array:A.bG,Int8Array:A.bH,Uint16Array:A.bI,Uint32Array:A.bJ,Uint8ClampedArray:A.aS,CanvasPixelArray:A.aS,Uint8Array:A.bK})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.ai.$nativeSuperclassTag="ArrayBufferView"
A.b3.$nativeSuperclassTag="ArrayBufferView"
A.b4.$nativeSuperclassTag="ArrayBufferView"
A.aP.$nativeSuperclassTag="ArrayBufferView"
A.b5.$nativeSuperclassTag="ArrayBufferView"
A.b6.$nativeSuperclassTag="ArrayBufferView"
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
var s=A.bm
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=rainbow.js.map
