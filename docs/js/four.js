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
if(a[b]!==s){A.ik(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.dU(b)
return new s(c,this)}:function(){if(s===null)s=A.dU(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.dU(a).prototype
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
dZ(a,b,c,d){return{i:a,p:b,e:c,x:d}},
dW(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.dX==null){A.ia()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.eh("Return interceptor for "+A.n(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.d_
if(o==null)o=$.d_=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.ie(a)
if(p!=null)return p
if(typeof a=="function")return B.I
s=Object.getPrototypeOf(a)
if(s==null)return B.u
if(s===Object.prototype)return B.u
if(typeof q=="function"){o=$.d_
if(o==null)o=$.d_=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.n,enumerable:false,writable:true,configurable:true})
return B.n}return B.n},
e9(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
fq(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.e9(r))break;++b}return b},
fr(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.b(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.e9(q))break}return b},
a6(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aB.prototype
return J.bs.prototype}if(typeof a=="string")return J.W.prototype
if(a==null)return J.aC.prototype
if(typeof a=="boolean")return J.br.prototype
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.O.prototype
if(typeof a=="symbol")return J.aF.prototype
if(typeof a=="bigint")return J.aD.prototype
return a}if(a instanceof A.e)return a
return J.dW(a)},
eL(a){if(typeof a=="string")return J.W.prototype
if(a==null)return a
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.O.prototype
if(typeof a=="symbol")return J.aF.prototype
if(typeof a=="bigint")return J.aD.prototype
return a}if(a instanceof A.e)return a
return J.dW(a)},
i2(a){if(a==null)return a
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.O.prototype
if(typeof a=="symbol")return J.aF.prototype
if(typeof a=="bigint")return J.aD.prototype
return a}if(a instanceof A.e)return a
return J.dW(a)},
i3(a){if(typeof a=="number")return J.ab.prototype
if(a==null)return a
if(!(a instanceof A.e))return J.a_.prototype
return a},
i4(a){if(typeof a=="string")return J.W.prototype
if(a==null)return a
if(!(a instanceof A.e))return J.a_.prototype
return a},
a9(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.a6(a).B(a,b)},
H(a){return J.a6(a).gj(a)},
f5(a){return J.i2(a).gD(a)},
e1(a){return J.eL(a).gn(a)},
f6(a){return J.a6(a).gm(a)},
e2(a){return J.i3(a).bO(a)},
bg(a){return J.a6(a).h(a)},
f7(a){return J.i4(a).bP(a)},
bp:function bp(){},
br:function br(){},
aC:function aC(){},
aE:function aE(){},
P:function P(){},
bH:function bH(){},
a_:function a_(){},
O:function O(){},
aD:function aD(){},
aF:function aF(){},
o:function o(a){this.$ti=a},
c9:function c9(a){this.$ti=a},
bh:function bh(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ab:function ab(){},
aB:function aB(){},
bs:function bs(){},
W:function W(){}},A={dA:function dA(){},
fs(a){return new A.aH("Field '"+a+"' has not been initialized.")},
Q(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
dH(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
dT(a,b,c){return a},
dY(a){var s,r
for(s=$.w.length,r=0;r<s;++r)if(a===$.w[r])return!0
return!1},
fo(){return new A.Z("No element")},
aH:function aH(a){this.a=a},
ds:function ds(){},
cn:function cn(){},
bm:function bm(){},
bv:function bv(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aA:function aA(){},
eR(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
iJ(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
n(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.bg(a)
return s},
ag(a){var s,r=$.eb
if(r==null)r=$.eb=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
ch(a){var s,r,q,p
if(a instanceof A.e)return A.v(A.bf(a),null)
s=J.a6(a)
if(s===B.G||s===B.J||t.A.b(a)){r=B.o(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.v(A.bf(a),null)},
ec(a){if(a==null||typeof a=="number"||A.dO(a))return J.bg(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.V)return a.h(0)
if(a instanceof A.al)return a.aQ(!0)
return"Instance of '"+A.ch(a)+"'"},
fw(a){var s=a.$thrownJsError
if(s==null)return null
return A.a7(s)},
fx(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.r(a,s)
a.$thrownJsError=s
s.stack=""}},
b(a,b){if(a==null)J.e1(a)
throw A.d(A.eK(a,b))},
eK(a,b){var s,r="index"
if(!A.eA(b))return new A.D(!0,b,r,null)
s=J.e1(a)
if(b<0||b>=s)return A.fk(b,s,a,r)
return new A.ah(null,null,!0,b,r,"Value not in range")},
dR(a){return new A.D(!0,a,null,null)},
d(a){return A.r(a,new Error())},
r(a,b){var s
if(a==null)a=new A.J()
b.dartException=a
s=A.il
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
il(){return J.bg(this.dartException)},
at(a,b){throw A.r(a,b==null?new Error():b)},
c3(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.at(A.hm(a,b,c),s)},
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
return new A.aR("'"+s+"': Cannot "+o+" "+l+k+n)},
dt(a){throw A.d(A.ax(a))},
K(a){var s,r,q,p,o,n
a=A.ih(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.a([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.cE(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
cF(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
eg(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
dB(a,b){var s=b==null,r=s?null:b.method
return new A.bt(a,r,s?null:b.receiver)},
au(a){if(a==null)return new A.cf(a)
if(a instanceof A.az)return A.T(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.T(a,a.dartException)
return A.hR(a)},
T(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
hR(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.a.bu(r,16)&8191)===10)switch(q){case 438:return A.T(a,A.dB(A.n(s)+" (Error "+q+")",null))
case 445:case 5007:A.n(s)
return A.T(a,new A.aO())}}if(a instanceof TypeError){p=$.eU()
o=$.eV()
n=$.eW()
m=$.eX()
l=$.f_()
k=$.f0()
j=$.eZ()
$.eY()
i=$.f2()
h=$.f1()
g=p.A(s)
if(g!=null)return A.T(a,A.dB(s,g))
else{g=o.A(s)
if(g!=null){g.method="call"
return A.T(a,A.dB(s,g))}else if(n.A(s)!=null||m.A(s)!=null||l.A(s)!=null||k.A(s)!=null||j.A(s)!=null||m.A(s)!=null||i.A(s)!=null||h.A(s)!=null)return A.T(a,new A.aO())}return A.T(a,new A.bM(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.aQ()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.T(a,new A.D(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.aQ()
return a},
a7(a){var s
if(a instanceof A.az)return a.b
if(a==null)return new A.b2(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.b2(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
e_(a){if(a==null)return J.H(a)
if(typeof a=="object")return A.ag(a)
return J.H(a)},
hY(a){if(typeof a=="number")return B.H.gj(a)
if(a instanceof A.c_)return A.ag(a)
if(a instanceof A.al)return a.gj(a)
return A.e_(a)},
i1(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.a0(0,a[s],a[r])}return b},
hv(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(A.c7("Unsupported number of arguments for wrapped closure"))},
c1(a,b){var s=a.$identity
if(!!s)return s
s=A.hZ(a,b)
a.$identity=s
return s},
hZ(a,b){var s
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
fe(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.co().constructor.prototype):Object.create(new A.aw(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.e7(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.fa(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.e7(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
fa(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.f8)}throw A.d("Error in functionType of tearoff")},
fb(a,b,c,d){var s=A.e6
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
e7(a,b,c,d){if(c)return A.fd(a,b,d)
return A.fb(b.length,d,a,b)},
fc(a,b,c,d){var s=A.e6,r=A.f9
switch(b?-1:a){case 0:throw A.d(new A.bI("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
fd(a,b,c){var s,r
if($.e4==null)$.e4=A.e3("interceptor")
if($.e5==null)$.e5=A.e3("receiver")
s=b.length
r=A.fc(s,c,a,b)
return r},
dU(a){return A.fe(a)},
f8(a,b){return A.b9(v.typeUniverse,A.bf(a.a),b)},
e6(a){return a.a},
f9(a){return a.b},
e3(a){var s,r,q,p=new A.aw("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.d(A.av("Field name "+a+" not found.",null))},
i5(a){return v.getIsolateTag(a)},
ii(){return v.G},
ie(a){var s,r,q,p,o,n=$.eM.$1(a),m=$.dk[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.dq[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.eH.$2(a,n)
if(q!=null){m=$.dk[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.dq[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.dr(s)
$.dk[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.dq[n]=s
return s}if(p==="-"){o=A.dr(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.eO(a,s)
if(p==="*")throw A.d(A.eh(n))
if(v.leafTags[n]===true){o=A.dr(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.eO(a,s)},
eO(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.dZ(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
dr(a){return J.dZ(a,!1,null,!!a.$iu)},
ig(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.dr(s)
else return J.dZ(s,c,null,null)},
ia(){if(!0===$.dX)return
$.dX=!0
A.ib()},
ib(){var s,r,q,p,o,n,m,l
$.dk=Object.create(null)
$.dq=Object.create(null)
A.i9()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.eP.$1(o)
if(n!=null){m=A.ig(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
i9(){var s,r,q,p,o,n,m=B.x()
m=A.aq(B.y,A.aq(B.z,A.aq(B.p,A.aq(B.p,A.aq(B.A,A.aq(B.B,A.aq(B.C(B.o),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.eM=new A.dm(p)
$.eH=new A.dn(o)
$.eP=new A.dp(n)},
aq(a,b){return a(b)||b},
i_(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
ij(a,b,c){var s=a.indexOf(b,c)
return s>=0},
ih(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
B:function B(a,b){this.a=a
this.b=b},
bl:function bl(){},
bn:function bn(a,b){this.a=a
this.$ti=b},
cE:function cE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aO:function aO(){},
bt:function bt(a,b,c){this.a=a
this.b=b
this.c=c},
bM:function bM(a){this.a=a},
cf:function cf(a){this.a=a},
az:function az(a,b){this.a=a
this.b=b},
b2:function b2(a){this.a=a
this.b=null},
V:function V(){},
c4:function c4(){},
c5:function c5(){},
ct:function ct(){},
co:function co(){},
aw:function aw(a,b){this.a=a
this.b=b},
bI:function bI(a){this.a=a},
X:function X(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ca:function ca(a,b){this.a=a
this.b=b
this.c=null},
aI:function aI(a){this.a=a},
bu:function bu(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
aG:function aG(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dm:function dm(a){this.a=a},
dn:function dn(a){this.a=a},
dp:function dp(a){this.a=a},
al:function al(){},
bX:function bX(){},
a3(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.eK(b,a))},
bw:function bw(){},
aM:function aM(){},
bx:function bx(){},
ae:function ae(){},
aK:function aK(){},
aL:function aL(){},
by:function by(){},
bz:function bz(){},
bA:function bA(){},
bB:function bB(){},
bC:function bC(){},
bD:function bD(){},
bE:function bE(){},
aN:function aN(){},
bF:function bF(){},
aX:function aX(){},
aY:function aY(){},
aZ:function aZ(){},
b_:function b_(){},
dE(a,b){var s=b.c
return s==null?b.c=A.b7(a,"I",[b.x]):s},
ed(a){var s=a.w
if(s===6||s===7)return A.ed(a.x)
return s===11||s===12},
fA(a){return a.as},
dV(a){return A.d7(v.typeUniverse,a,!1)},
a4(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.a4(a1,s,a3,a4)
if(r===s)return a2
return A.er(a1,r,!0)
case 7:s=a2.x
r=A.a4(a1,s,a3,a4)
if(r===s)return a2
return A.eq(a1,r,!0)
case 8:q=a2.y
p=A.ap(a1,q,a3,a4)
if(p===q)return a2
return A.b7(a1,a2.x,p)
case 9:o=a2.x
n=A.a4(a1,o,a3,a4)
m=a2.y
l=A.ap(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.dK(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.ap(a1,j,a3,a4)
if(i===j)return a2
return A.es(a1,k,i)
case 11:h=a2.x
g=A.a4(a1,h,a3,a4)
f=a2.y
e=A.hO(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.ep(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.ap(a1,d,a3,a4)
o=a2.x
n=A.a4(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.dL(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.d(A.bj("Attempted to substitute unexpected RTI kind "+a0))}},
ap(a,b,c,d){var s,r,q,p,o=b.length,n=A.d8(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.a4(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
hP(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.d8(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.a4(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
hO(a,b,c,d){var s,r=b.a,q=A.ap(a,r,c,d),p=b.b,o=A.ap(a,p,c,d),n=b.c,m=A.hP(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.bV()
s.a=q
s.b=o
s.c=m
return s},
a(a,b){a[v.arrayRti]=b
return a},
eJ(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.i8(s)
return a.$S()}return null},
ic(a,b){var s
if(A.ed(b))if(a instanceof A.V){s=A.eJ(a)
if(s!=null)return s}return A.bf(a)},
bf(a){if(a instanceof A.e)return A.am(a)
if(Array.isArray(a))return A.dM(a)
return A.dN(J.a6(a))},
dM(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
am(a){var s=a.$ti
return s!=null?s:A.dN(a)},
dN(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.ht(a,s)},
ht(a,b){var s=a instanceof A.V?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.h3(v.typeUniverse,s.name)
b.$ccache=r
return r},
i8(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.d7(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
i7(a){return A.a5(A.am(a))},
dQ(a){var s
if(a instanceof A.al)return A.i0(a.$r,a.aJ())
s=a instanceof A.V?A.eJ(a):null
if(s!=null)return s
if(t.R.b(a))return J.f6(a).a
if(Array.isArray(a))return A.dM(a)
return A.bf(a)},
a5(a){var s=a.r
return s==null?a.r=new A.c_(a):s},
i0(a,b){var s,r,q=b,p=q.length
if(p===0)return t.F
if(0>=p)return A.b(q,0)
s=A.b9(v.typeUniverse,A.dQ(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.b(q,r)
s=A.et(v.typeUniverse,s,A.dQ(q[r]))}return A.b9(v.typeUniverse,s,a)},
C(a){return A.a5(A.d7(v.typeUniverse,a,!1))},
hs(a){var s,r,q,p,o=this
if(o===t.K)return A.L(o,a,A.hA)
if(A.a8(o))return A.L(o,a,A.hE)
s=o.w
if(s===6)return A.L(o,a,A.hq)
if(s===1)return A.L(o,a,A.eB)
if(s===7)return A.L(o,a,A.hw)
if(o===t.S)r=A.eA
else if(o===t.i||o===t.H)r=A.hz
else if(o===t.N)r=A.hC
else r=o===t.y?A.dO:null
if(r!=null)return A.L(o,a,r)
if(s===8){q=o.x
if(o.y.every(A.a8)){o.f="$i"+q
if(q==="i")return A.L(o,a,A.hy)
return A.L(o,a,A.hD)}}else if(s===10){p=A.i_(o.x,o.y)
return A.L(o,a,p==null?A.eB:p)}return A.L(o,a,A.ho)},
L(a,b,c){a.b=c
return a.b(b)},
hr(a){var s=this,r=A.hn
if(A.a8(s))r=A.hg
else if(s===t.K)r=A.hd
else if(A.ar(s))r=A.hp
if(s===t.S)r=A.h9
else if(s===t.M)r=A.ha
else if(s===t.N)r=A.he
else if(s===t.B)r=A.hf
else if(s===t.y)r=A.h5
else if(s===t.d)r=A.h6
else if(s===t.H)r=A.hb
else if(s===t.W)r=A.hc
else if(s===t.i)r=A.h7
else if(s===t.J)r=A.h8
s.a=r
return s.a(a)},
ho(a){var s=this
if(a==null)return A.ar(s)
return A.id(v.typeUniverse,A.ic(a,s),s)},
hq(a){if(a==null)return!0
return this.x.b(a)},
hD(a){var s,r=this
if(a==null)return A.ar(r)
s=r.f
if(a instanceof A.e)return!!a[s]
return!!J.a6(a)[s]},
hy(a){var s,r=this
if(a==null)return A.ar(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.e)return!!a[s]
return!!J.a6(a)[s]},
hn(a){var s=this
if(a==null){if(A.ar(s))return a}else if(s.b(a))return a
throw A.r(A.ew(a,s),new Error())},
hp(a){var s=this
if(a==null||s.b(a))return a
throw A.r(A.ew(a,s),new Error())},
ew(a,b){return new A.b5("TypeError: "+A.ej(a,A.v(b,null)))},
ej(a,b){return A.c6(a)+": type '"+A.v(A.dQ(a),null)+"' is not a subtype of type '"+b+"'"},
G(a,b){return new A.b5("TypeError: "+A.ej(a,b))},
hw(a){var s=this
return s.x.b(a)||A.dE(v.typeUniverse,s).b(a)},
hA(a){return a!=null},
hd(a){if(a!=null)return a
throw A.r(A.G(a,"Object"),new Error())},
hE(a){return!0},
hg(a){return a},
eB(a){return!1},
dO(a){return!0===a||!1===a},
h5(a){if(!0===a)return!0
if(!1===a)return!1
throw A.r(A.G(a,"bool"),new Error())},
h6(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.r(A.G(a,"bool?"),new Error())},
h7(a){if(typeof a=="number")return a
throw A.r(A.G(a,"double"),new Error())},
h8(a){if(typeof a=="number")return a
if(a==null)return a
throw A.r(A.G(a,"double?"),new Error())},
eA(a){return typeof a=="number"&&Math.floor(a)===a},
h9(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.r(A.G(a,"int"),new Error())},
ha(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.r(A.G(a,"int?"),new Error())},
hz(a){return typeof a=="number"},
hb(a){if(typeof a=="number")return a
throw A.r(A.G(a,"num"),new Error())},
hc(a){if(typeof a=="number")return a
if(a==null)return a
throw A.r(A.G(a,"num?"),new Error())},
hC(a){return typeof a=="string"},
he(a){if(typeof a=="string")return a
throw A.r(A.G(a,"String"),new Error())},
hf(a){if(typeof a=="string")return a
if(a==null)return a
throw A.r(A.G(a,"String?"),new Error())},
eE(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.v(a[q],b)
return s},
hJ(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.eE(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.v(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
ex(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
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
if(l===8){p=A.hQ(a.x)
o=a.y
return o.length>0?p+("<"+A.eE(o,b)+">"):p}if(l===10)return A.hJ(a,b)
if(l===11)return A.ex(a,b,null)
if(l===12)return A.ex(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.b(b,n)
return b[n]}return"?"},
hQ(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
h4(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
h3(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.d7(a,b,!1)
else if(typeof m=="number"){s=m
r=A.b8(a,5,"#")
q=A.d8(s)
for(p=0;p<s;++p)q[p]=r
o=A.b7(a,b,q)
n[b]=o
return o}else return m},
h2(a,b){return A.eu(a.tR,b)},
h1(a,b){return A.eu(a.eT,b)},
d7(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.en(A.el(a,null,b,!1))
r.set(b,s)
return s},
b9(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.en(A.el(a,b,c,!0))
q.set(c,r)
return r},
et(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.dK(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
S(a,b){b.a=A.hr
b.b=A.hs
return b},
b8(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.y(null,null)
s.w=b
s.as=c
r=A.S(a,s)
a.eC.set(c,r)
return r},
er(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.h_(a,b,r,c)
a.eC.set(r,s)
return s},
h_(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.a8(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.ar(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.y(null,null)
q.w=6
q.x=b
q.as=c
return A.S(a,q)},
eq(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.fY(a,b,r,c)
a.eC.set(r,s)
return s},
fY(a,b,c,d){var s,r
if(d){s=b.w
if(A.a8(b)||b===t.K)return b
else if(s===1)return A.b7(a,"I",[b])
else if(b===t.P||b===t.T)return t.O}r=new A.y(null,null)
r.w=7
r.x=b
r.as=c
return A.S(a,r)},
h0(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.y(null,null)
s.w=13
s.x=b
s.as=q
r=A.S(a,s)
a.eC.set(q,r)
return r},
b6(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
fX(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
b7(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.b6(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.y(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.S(a,r)
a.eC.set(p,q)
return q},
dK(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.b6(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.y(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.S(a,o)
a.eC.set(q,n)
return n},
es(a,b,c){var s,r,q="+"+(b+"("+A.b6(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.y(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.S(a,s)
a.eC.set(q,r)
return r},
ep(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.b6(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.b6(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.fX(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.y(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.S(a,p)
a.eC.set(r,o)
return o},
dL(a,b,c,d){var s,r=b.as+("<"+A.b6(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.fZ(a,b,c,r,d)
a.eC.set(r,s)
return s},
fZ(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.d8(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.a4(a,b,r,0)
m=A.ap(a,c,r,0)
return A.dL(a,n,m,c!==m)}}l=new A.y(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.S(a,l)},
el(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
en(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.fQ(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.em(a,r,l,k,!1)
else if(q===46)r=A.em(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.a1(a.u,a.e,k.pop()))
break
case 94:k.push(A.h0(a.u,k.pop()))
break
case 35:k.push(A.b8(a.u,5,"#"))
break
case 64:k.push(A.b8(a.u,2,"@"))
break
case 126:k.push(A.b8(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.fS(a,k)
break
case 38:A.fR(a,k)
break
case 63:p=a.u
k.push(A.er(p,A.a1(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.eq(p,A.a1(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.fP(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.eo(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.fU(a.u,a.e,o)
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
return A.a1(a.u,a.e,m)},
fQ(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
em(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.h4(s,o.x)[p]
if(n==null)A.at('No "'+p+'" in "'+A.fA(o)+'"')
d.push(A.b9(s,o,n))}else d.push(p)
return m},
fS(a,b){var s,r=a.u,q=A.ek(a,b),p=b.pop()
if(typeof p=="string")b.push(A.b7(r,p,q))
else{s=A.a1(r,a.e,p)
switch(s.w){case 11:b.push(A.dL(r,s,q,a.n))
break
default:b.push(A.dK(r,s,q))
break}}},
fP(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.ek(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.a1(p,a.e,o)
q=new A.bV()
q.a=s
q.b=n
q.c=m
b.push(A.ep(p,r,q))
return
case-4:b.push(A.es(p,b.pop(),s))
return
default:throw A.d(A.bj("Unexpected state under `()`: "+A.n(o)))}},
fR(a,b){var s=b.pop()
if(0===s){b.push(A.b8(a.u,1,"0&"))
return}if(1===s){b.push(A.b8(a.u,4,"1&"))
return}throw A.d(A.bj("Unexpected extended operation "+A.n(s)))},
ek(a,b){var s=b.splice(a.p)
A.eo(a.u,a.e,s)
a.p=b.pop()
return s},
a1(a,b,c){if(typeof c=="string")return A.b7(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.fT(a,b,c)}else return c},
eo(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.a1(a,b,c[s])},
fU(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.a1(a,b,c[s])},
fT(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.d(A.bj("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.d(A.bj("Bad index "+c+" for "+b.h(0)))},
id(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.p(a,b,null,c,null)
r.set(c,s)}return s},
p(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.a8(d))return!0
s=b.w
if(s===4)return!0
if(A.a8(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.p(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.p(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.p(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.p(a,b.x,c,d,e))return!1
return A.p(a,A.dE(a,b),c,d,e)}if(s===6)return A.p(a,p,c,d,e)&&A.p(a,b.x,c,d,e)
if(q===7){if(A.p(a,b,c,d.x,e))return!0
return A.p(a,b,c,A.dE(a,d),e)}if(q===6)return A.p(a,b,c,p,e)||A.p(a,b,c,d.x,e)
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
if(!A.p(a,j,c,i,e)||!A.p(a,i,e,j,c))return!1}return A.ez(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.ez(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.hx(a,b,c,d,e)}if(o&&q===10)return A.hB(a,b,c,d,e)
return!1},
ez(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
hx(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
for(;n!==m;){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.b9(a,b,r[o])
return A.ev(a,p,null,c,d.y,e)}return A.ev(a,b.y,null,c,d.y,e)},
ev(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.p(a,b[s],d,e[s],f))return!1
return!0},
hB(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.p(a,r[s],c,q[s],e))return!1
return!0},
ar(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.a8(a))if(s!==6)r=s===7&&A.ar(a.x)
return r},
a8(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
eu(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
d8(a){return a>0?new Array(a):v.typeUniverse.sEA},
y:function y(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
bV:function bV(){this.c=this.b=this.a=null},
c_:function c_(a){this.a=a},
bU:function bU(){},
b5:function b5(a){this.a=a},
fJ(){var s,r,q
if(self.scheduleImmediate!=null)return A.hT()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.c1(new A.cJ(s),1)).observe(r,{childList:true})
return new A.cI(s,r,q)}else if(self.setImmediate!=null)return A.hU()
return A.hV()},
fK(a){self.scheduleImmediate(A.c1(new A.cK(a),0))},
fL(a){self.setImmediate(A.c1(new A.cL(a),0))},
fM(a){A.dI(B.F,a)},
dI(a,b){var s=B.a.l(a.a,1000)
return A.fV(s,b)},
ef(a,b){var s=B.a.l(a.a,1000)
return A.fW(s,b)},
fV(a,b){var s=new A.b4()
s.b9(a,b)
return s},
fW(a,b){var s=new A.b4()
s.ba(a,b)
return s},
dg(a){return new A.bN(new A.j($.f,a.i("j<0>")),a.i("bN<0>"))},
dc(a,b){a.$2(0,null)
b.b=!0
return b.a},
a2(a,b){A.hh(a,b)},
db(a,b){var s,r=a==null?b.$ti.c.a(a):a
if(!b.b)b.a.a2(r)
else{s=b.a
if(b.$ti.i("I<1>").b(r))s.aF(r)
else s.aH(r)}},
da(a,b){var s=A.au(a),r=A.a7(a),q=b.a
if(b.b)q.J(new A.x(s,r))
else q.aE(new A.x(s,r))},
hh(a,b){var s,r,q=new A.dd(b),p=new A.de(b)
if(a instanceof A.j)a.aP(q,p,t.z)
else{s=t.z
if(a instanceof A.j)a.b3(q,p,s)
else{r=new A.j($.f,t.c)
r.a=8
r.c=a
r.aP(q,p,s)}}},
di(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.f.av(new A.dj(s))},
dy(a){var s
if(t.Q.b(a)){s=a.gP()
if(s!=null)return s}return B.j},
fj(a,b){var s
if(!b.b(null))throw A.d(A.dx(null,"computation","The type parameter is not nullable"))
s=new A.j($.f,b.i("j<0>"))
A.fE(a,new A.c8(null,s,b))
return s},
hu(a,b){if($.f===B.b)return null
return null},
cR(a,b,c){var s,r,q,p={},o=p.a=a
for(;s=o.a,(s&4)!==0;){o=o.c
p.a=o}if(o===b){s=A.fC()
b.aE(new A.x(new A.D(!0,o,null,"Cannot complete a future with itself"),s))
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.aN(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.K()
b.S(p.a)
A.a0(b,q)
return}b.a^=2
A.ao(null,null,b.b,new A.cS(p,b))},
a0(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;!0;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){f=f.c
A.c0(f.a,f.b)}return}s.a=b
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
if(r){A.c0(m.a,m.b)
return}j=$.f
if(j!==k)$.f=k
else j=null
f=f.c
if((f&15)===8)new A.cW(s,g,p).$0()
else if(q){if((f&1)!==0)new A.cV(s,m).$0()}else if((f&2)!==0)new A.cU(g,s).$0()
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
continue}else A.cR(f,i,!0)
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
hK(a,b){if(t.C.b(a))return b.av(a)
if(t.v.b(a))return a
throw A.d(A.dx(a,"onError",u.c))},
hG(){var s,r
for(s=$.an;s!=null;s=$.an){$.bc=null
r=s.b
$.an=r
if(r==null)$.bb=null
s.a.$0()}},
hN(){$.dP=!0
try{A.hG()}finally{$.bc=null
$.dP=!1
if($.an!=null)$.e0().$1(A.eI())}},
eG(a){var s=new A.bO(a),r=$.bb
if(r==null){$.an=$.bb=s
if(!$.dP)$.e0().$1(A.eI())}else $.bb=r.b=s},
hM(a){var s,r,q,p=$.an
if(p==null){A.eG(a)
$.bc=$.bb
return}s=new A.bO(a)
r=$.bc
if(r==null){s.b=p
$.an=$.bc=s}else{q=r.b
s.b=q
$.bc=r.b=s
if(q==null)$.bb=s}},
eQ(a){var s=null,r=$.f
if(B.b===r){A.ao(s,s,B.b,a)
return}A.ao(s,s,r,r.af(a))},
iu(a){A.dT(a,"stream",t.K)
return new A.bY()},
dG(a){return new A.aS(null,null,a.i("aS<0>"))},
eF(a){return},
ei(a,b){return b==null?A.hW():b},
fN(a,b){if(b==null)b=A.hX()
if(t.k.b(b))return a.av(b)
if(t.e.b(b))return b
throw A.d(A.av("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
hH(a){},
hI(a,b){A.c0(a,b)},
hl(a,b,c){var s,r,q=a.aS()
if(q!==$.dv()){s=q.$ti
r=$.f
q.R(new A.R(new A.j(r,s),8,new A.df(b,c),null,s.i("R<1,1>")))}else b.T(c)},
fE(a,b){var s=$.f
if(s===B.b)return A.dI(a,b)
return A.dI(a,s.af(b))},
fF(a,b){var s=$.f
if(s===B.b)return A.ef(a,b)
return A.ef(a,s.bw(b,t.E))},
c0(a,b){A.hM(new A.dh(a,b))},
eC(a,b,c,d){var s,r=$.f
if(r===c)return d.$0()
$.f=c
s=r
try{r=d.$0()
return r}finally{$.f=s}},
eD(a,b,c,d,e){var s,r=$.f
if(r===c)return d.$1(e)
$.f=c
s=r
try{r=d.$1(e)
return r}finally{$.f=s}},
hL(a,b,c,d,e,f){var s,r=$.f
if(r===c)return d.$2(e,f)
$.f=c
s=r
try{r=d.$2(e,f)
return r}finally{$.f=s}},
ao(a,b,c,d){if(B.b!==c)d=c.af(d)
A.eG(d)},
cJ:function cJ(a){this.a=a},
cI:function cI(a,b,c){this.a=a
this.b=b
this.c=c},
cK:function cK(a){this.a=a},
cL:function cL(a){this.a=a},
b4:function b4(){this.c=0},
d6:function d6(a,b){this.a=a
this.b=b},
d5:function d5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bN:function bN(a,b){this.a=a
this.b=!1
this.$ti=b},
dd:function dd(a){this.a=a},
de:function de(a){this.a=a},
dj:function dj(a){this.a=a},
x:function x(a,b){this.a=a
this.b=b},
F:function F(a,b){this.a=a
this.$ti=b},
aT:function aT(a,b,c,d,e){var _=this
_.ay=0
_.CW=_.ch=null
_.w=a
_.a=b
_.d=c
_.e=d
_.r=_.f=null
_.$ti=e},
bP:function bP(){},
aS:function aS(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null
_.$ti=c},
c8:function c8(a,b,c){this.a=a
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
cO:function cO(a,b){this.a=a
this.b=b},
cT:function cT(a,b){this.a=a
this.b=b},
cS:function cS(a,b){this.a=a
this.b=b},
cQ:function cQ(a,b){this.a=a
this.b=b},
cP:function cP(a,b){this.a=a
this.b=b},
cW:function cW(a,b,c){this.a=a
this.b=b
this.c=c},
cX:function cX(a,b){this.a=a
this.b=b},
cY:function cY(a){this.a=a},
cV:function cV(a,b){this.a=a
this.b=b},
cU:function cU(a,b){this.a=a
this.b=b},
bO:function bO(a){this.a=a
this.b=null},
aj:function aj(){},
cr:function cr(a,b){this.a=a
this.b=b},
cs:function cs(a,b){this.a=a
this.b=b},
cp:function cp(a){this.a=a},
cq:function cq(a,b,c){this.a=a
this.b=b
this.c=c},
aU:function aU(){},
bR:function bR(){},
bQ:function bQ(){},
b3:function b3(){},
bT:function bT(){},
bS:function bS(a){this.b=a
this.a=null},
bW:function bW(){this.a=0
this.c=this.b=null},
d1:function d1(a,b){this.a=a
this.b=b},
aV:function aV(a){this.a=1
this.b=a
this.c=null},
bY:function bY(){},
df:function df(a,b){this.a=a
this.b=b},
d9:function d9(){},
dh:function dh(a,b){this.a=a
this.b=b},
d2:function d2(){},
d3:function d3(a,b){this.a=a
this.b=b},
d4:function d4(a,b,c){this.a=a
this.b=b
this.c=c},
ft(a,b){return new A.X(a.i("@<0>").a3(b).i("X<1,2>"))},
fu(a){return new A.aW(a.i("aW<0>"))},
dJ(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
fO(a,b,c){var s=new A.ak(a,b,c.i("ak<0>"))
s.c=a.e
return s},
dD(a){var s,r
if(A.dY(a))return"{...}"
s=new A.bK("")
try{r={}
$.w.push(a)
s.a+="{"
r.a=!0
a.an(0,new A.cb(r,s))
s.a+="}"}finally{if(0>=$.w.length)return A.b($.w,-1)
$.w.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
aW:function aW(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
d0:function d0(a){this.a=a
this.c=this.b=null},
ak:function ak(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
m:function m(){},
aJ:function aJ(){},
cb:function cb(a,b){this.a=a
this.b=b},
aP:function aP(){},
b1:function b1(){},
ff(a,b){a=A.r(a,new Error())
a.stack=b.h(0)
throw a},
dC(a,b,c){var s,r,q
if(a>4294967295)A.at(A.fz(a,0,4294967295,"length",null))
s=A.a(new Array(a),c.i("o<0>"))
s.$flags=1
r=s
if(a!==0)for(s=r.length,q=0;q<s;++q)r[q]=b
return r},
fv(a,b,c){var s,r,q=A.a([],c.i("o<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.dt)(a),++r)q.push(a[r])
q.$flags=1
return q},
ee(a,b,c){var s=J.f5(b)
if(!s.q())return a
if(c.length===0){do a+=A.n(s.gt())
while(s.q())}else{a+=A.n(s.gt())
for(;s.q();)a=a+c+A.n(s.gt())}return a},
fC(){return A.a7(new Error())},
e8(a){return new A.ay(1000*a)},
c6(a){if(typeof a=="number"||A.dO(a)||a==null)return J.bg(a)
if(typeof a=="string")return JSON.stringify(a)
return A.ec(a)},
fg(a,b){A.dT(a,"error",t.K)
A.dT(b,"stackTrace",t.l)
A.ff(a,b)},
bj(a){return new A.bi(a)},
av(a,b){return new A.D(!1,null,b,a)},
dx(a,b,c){return new A.D(!0,a,b,c)},
fy(a){var s=null
return new A.ah(s,s,!1,s,s,a)},
fz(a,b,c,d,e){return new A.ah(b,c,!0,a,d,"Invalid value")},
fk(a,b,c,d){return new A.bo(b,!0,a,d,"Index out of range")},
cH(a){return new A.aR(a)},
eh(a){return new A.bL(a)},
ax(a){return new A.bk(a)},
c7(a){return new A.cN(a)},
fp(a,b,c){var s,r
if(A.dY(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.a([],t.s)
$.w.push(a)
try{A.hF(a,s)}finally{if(0>=$.w.length)return A.b($.w,-1)
$.w.pop()}r=A.ee(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
dz(a,b,c){var s,r
if(A.dY(a))return b+"..."+c
s=new A.bK(b)
$.w.push(a)
try{r=s
r.a=A.ee(r.a,a,", ")}finally{if(0>=$.w.length)return A.b($.w,-1)
$.w.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
hF(a,b){var s,r,q,p,o,n,m,l=a.gD(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.q())return
s=A.n(l.gt())
b.push(s)
k+=s.length+2;++j}if(!l.q()){if(j<=5)return
if(0>=b.length)return A.b(b,-1)
r=b.pop()
if(0>=b.length)return A.b(b,-1)
q=b.pop()}else{p=l.gt();++j
if(!l.q()){if(j<=4){b.push(A.n(p))
return}r=A.n(p)
if(0>=b.length)return A.b(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gt();++j
for(;l.q();p=o,o=n){n=l.gt();++j
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
cg(a,b,c,d){var s
if(B.f===c){s=B.a.gj(a)
b=J.H(b)
return A.dH(A.Q(A.Q($.dw(),s),b))}if(B.f===d){s=B.a.gj(a)
b=J.H(b)
c=J.H(c)
return A.dH(A.Q(A.Q(A.Q($.dw(),s),b),c))}s=B.a.gj(a)
b=J.H(b)
c=J.H(c)
d=J.H(d)
d=A.dH(A.Q(A.Q(A.Q(A.Q($.dw(),s),b),c),d))
return d},
ay:function ay(a){this.a=a},
cM:function cM(){},
k:function k(){},
bi:function bi(a){this.a=a},
J:function J(){},
D:function D(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ah:function ah(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bo:function bo(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
aR:function aR(a){this.a=a},
bL:function bL(a){this.a=a},
Z:function Z(a){this.a=a},
bk:function bk(a){this.a=a},
bG:function bG(){},
aQ:function aQ(){},
cN:function cN(a){this.a=a},
bq:function bq(){},
t:function t(){},
e:function e(){},
bZ:function bZ(){},
bK:function bK(a){this.a=a},
cZ:function cZ(){},
N:function N(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ac:function ac(a){this.b=a},
ad:function ad(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
af:function af(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=0},
fB(a,b,c,d,e,f,g,h){var s,r,q,p=v.G,o=p.document.createElement("canvas"),n=h*g
o.width=n
s=d*f
o.height=s
r=p.document.createElement("canvas")
r.width=n
r.height=s
s=A.a([],t.x)
for(q=0;q<d;++q){p=B.a.l(h,32)
s.push(new Uint32Array(p+1))}p=new A.bJ(!0,d,h,g,f,c,a,o,r,s)
p.b7(a,b,c,d,!0,f,g,h)
return p},
dF(a){return new A.B(B.a.l(a,32),31-B.a.k(a,32))},
bJ:function bJ(a,b,c,d,e,f,g,h,i,j){var _=this
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
cj:function cj(a){this.a=a},
ck:function ck(a){this.a=a},
cl:function cl(a){this.a=a},
cm:function cm(a){this.a=a},
ci:function ci(){},
E:function E(a){this.b=a},
fD(a,b,c,d){var s,r,q,p,o="white",n=null,m=A.fB(a,c,o,d*10,!0,2,2,b*8),l=A.a([],t.G)
for(s=t.U,r=0;r<d;++r){q=A.a([],s)
for(p=0;p<b;++p)q.push(new A.N(r,p," ",o))
l.push(q)}m=new A.cu(d,b,c,m,new A.af(d,b),new A.af(d,b),new A.af(d,b),A.dG(t.N),A.dG(t.V),A.dG(t.q),B.e,l,A.fu(t.o),B.dN)
m.b8(a,b,c,o,n,!0,2,2,2,d,!0,n,n,n,n,n,n)
return m},
ai:function ai(a){this.b=a},
cu:function cu(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cC:function cC(a){this.a=a},
cB:function cB(){},
cA:function cA(a){this.a=a},
cv:function cv(a){this.a=a},
cw:function cw(a){this.a=a},
cx:function cx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cy:function cy(a,b,c){this.a=a
this.b=b
this.c=c},
cz:function cz(a){this.a=a},
ea(){var s,r,q,p,o=A.a([],t.w)
for(s=t.u,r=0;r<6;++r){q=A.a([],s)
for(p=0;p<7;++p)q.push(B.c)
o.push(q)}return new A.cc(o,B.d)},
bd(a,b,c){return A.hS(a,b,c)},
hS(a,b,c){var s=0,r=A.dg(t.n),q,p,o,n,m,l,k
var $async$bd=A.di(function(d,e){if(d===1)return A.da(e,r)
while(true)switch(s){case 0:k=$.M()
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
case 9:k.ar(a.b.h(0),a.b.ah(),p,2+m)
s=11
return A.a2(A.fj(A.e8(200),n),$async$bd)
case 11:case 10:k.ar(B.c.h(0),B.c.ah(),p,2+m)
s=7
break
case 8:s=5
break
case 7:case 4:++m
s=3
break
case 5:if(c)k.ar(a.b.h(0),a.b.ah(),p,2+m)
k.v(""+(b+1),p,8)
case 1:return A.db(q,r)}})
return A.dc($async$bd,r)},
dS(a,b){var s=$.M()
s.v(a,B.a.l(s.b-a.length,2),b)},
dl(){var s=0,r=A.dg(t.y),q,p,o
var $async$dl=A.di(function(a,b){if(a===1)return A.da(b,r)
while(true)switch(s){case 0:o=$.M()
o.Y(0)
A.dS("Four-In-A-Line",0)
A.dS("Move first (y/n) ?",2)
case 3:s=6
return A.a2(o.bA(),$async$dl)
case 6:p=b.b
case 4:if(!A.ij("ynYN",p,0)){s=3
break}case 5:A.dS(B.h.N(" ",18),2)
q=p.toLowerCase()==="y"
s=1
break
case 1:return A.db(q,r)}})
return A.dc($async$dl,r)},
as(){var s=0,r=A.dg(t.I),q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$as=A.di(function(a,b){if(a===1)return A.da(b,r)
while(true)switch(s){case 0:s=3
return A.a2(A.dl(),$async$as)
case 3:g=b
f=A.ea()
for(p=0;p<7;++p)A.bd(f,p,!1)
o=!0
case 4:if(!!0){s=6
break}if(f.gI().length===0){q=B.l
s=1
break}if(o)n=g
else n=!0
s=n?7:8
break
case 7:n="Your move ("+f.b.h(0)+")."
m=$.M()
l=m.b
m.v(n,B.a.l(l-n.length,2),10)
n=m.at,k=A.am(n).i("F<1>"),j=!1,i=!1
case 9:if(!!j){s=10
break}if(m.ay!==B.e)A.at(A.c7("Terminal already awaiting input."))
m.ay=B.k
e=B.h
s=11
return A.a2(new A.F(n,k).gaj(0),$async$as)
case 11:p=e.bz("1234567",b.b)
s=B.m.bx(f.gI(),p)?12:13
break
case 12:i=f.a_(p)
s=14
return A.a2(A.bd(f,p,!0),$async$as)
case 14:f.b=f.b===B.d?B.i:B.d
j=!0
case 13:s=9
break
case 10:n=B.h.N(" ",14)
m.v(n,B.a.l(l-n.length,2),10)
if(i){q=B.q
s=1
break}case 8:if(f.gI().length===0){q=B.l
s=1
break}h=f.bE(1000)
i=f.a_(h)
n="I choose "+(h+1)+"."
m=$.M()
l=m.b
m.v(n,B.a.l(l-n.length,2),10)
s=15
return A.a2(A.bd(f,h,!0),$async$as)
case 15:n=B.h.N(" ",11)
m.v(n,B.a.l(l-n.length,2),10)
if(i){q=B.r
s=1
break}f.b=f.b===B.d?B.i:B.d
case 5:o=!1
s=4
break
case 6:case 1:return A.db(q,r)}})
return A.dc($async$as,r)},
c2(){var s=0,r=A.dg(t.z),q,p
var $async$c2=A.di(function(a,b){if(a===1)return A.da(b,r)
while(true)switch(s){case 0:case 2:if(!!0){s=3
break}case 4:s=9
return A.a2(A.as(),$async$c2)
case 9:switch(b){case B.r:s=6
break
case B.q:s=7
break
case B.l:s=8
break
default:s=5
break}break
case 6:q=$.M()
q.v("Computer wins!",B.a.l(q.b-14,2),10)
s=5
break
case 7:q=$.M()
q.v("You win!",B.a.l(q.b-8,2),10)
s=5
break
case 8:q=$.M()
q.v("A tie!",B.a.l(q.b-6,2),10)
s=5
break
case 5:q=$.M()
p=q.b
q.v("Press any key to",B.a.l(p-16,2),12)
q.v("play again!",B.a.l(p-11,2),13)
if(q.ay!==B.e)A.at(A.c7("Terminal already awaiting input."))
q.ay=B.k
q=q.at
s=10
return A.a2(new A.F(q,A.am(q).i("F<1>")).gaj(0),$async$c2)
case 10:s=2
break
case 3:return A.db(null,r)}})
return A.dc($async$c2,r)},
Y:function Y(a){this.b=a},
cc:function cc(a,b){this.a=a
this.b=b},
ce:function ce(a,b,c){this.a=a
this.b=b
this.c=c},
cd:function cd(a){this.a=a},
aa:function aa(a){this.b=a},
ik(a){throw A.r(new A.aH("Field '"+a+"' has been assigned during initialization."),new Error())},
U(){throw A.r(A.fs(""),new Error())},
ba(a){var s
if(typeof a=="function")throw A.d(A.av("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.hi,a)
s[$.du()]=a
return s},
ey(a){var s
if(typeof a=="function")throw A.d(A.av("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.hj,a)
s[$.du()]=a
return s},
hi(a){return a.$0()},
hj(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
i6(a,b){return a[b]},
hk(a,b,c){return a[b](c)}},B={}
var w=[A,J,B]
var $={}
A.dA.prototype={}
J.bp.prototype={
B(a,b){return a===b},
gj(a){return A.ag(a)},
h(a){return"Instance of '"+A.ch(a)+"'"},
gm(a){return A.a5(A.dN(this))}}
J.br.prototype={
h(a){return String(a)},
gj(a){return a?519018:218159},
gm(a){return A.a5(t.y)},
$ih:1,
$ibe:1}
J.aC.prototype={
B(a,b){return null==b},
h(a){return"null"},
gj(a){return 0},
$ih:1}
J.aE.prototype={$il:1}
J.P.prototype={
gj(a){return 0},
h(a){return String(a)}}
J.bH.prototype={}
J.a_.prototype={}
J.O.prototype={
h(a){var s=a[$.du()]
if(s==null)return this.b6(a)
return"JavaScript function for "+J.bg(s)}}
J.aD.prototype={
gj(a){return 0},
h(a){return String(a)}}
J.aF.prototype={
gj(a){return 0},
h(a){return String(a)}}
J.o.prototype={
bC(a,b){var s,r,q=a.length,p=A.dC(q,"",t.N)
for(s=0;s<a.length;++s){r=A.n(a[s])
if(!(s<q))return A.b(p,s)
p[s]=r}return p.join(b)},
al(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw A.d(A.ax(a))}return s},
am(a,b,c){c.toString
return this.al(a,b,c,t.z)},
bx(a,b){var s
for(s=0;s<a.length;++s)if(J.a9(a[s],b))return!0
return!1},
h(a){return A.dz(a,"[","]")},
gD(a){return new J.bh(a,a.length,A.dM(a).i("bh<1>"))},
gj(a){return A.ag(a)},
gn(a){return a.length},
$ii:1}
J.c9.prototype={}
J.bh.prototype={
gt(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.d(A.dt(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.ab.prototype={
bO(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.d(A.cH(""+a+".toInt()"))},
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
return this.aO(a,b)},
l(a,b){return(a|0)===a?a/b|0:this.aO(a,b)},
aO(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.cH("Result of truncating division is "+A.n(s)+": "+A.n(a)+" ~/ "+b))},
O(a,b){if(b<0)throw A.d(A.dR(b))
return b>31?0:a<<b>>>0},
bt(a,b){return b>31?0:a<<b>>>0},
b5(a,b){var s
if(b<0)throw A.d(A.dR(b))
if(a>0)s=this.ad(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
bu(a,b){var s
if(a>0)s=this.ad(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
C(a,b){if(0>b)throw A.d(A.dR(b))
return this.ad(a,b)},
ad(a,b){return b>31?0:a>>>b},
gm(a){return A.a5(t.H)},
$iq:1}
J.aB.prototype={
gm(a){return A.a5(t.S)},
$ih:1,
$ic:1}
J.bs.prototype={
gm(a){return A.a5(t.i)},
$ih:1}
J.W.prototype={
bP(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.b(p,0)
if(p.charCodeAt(0)===133){s=J.fq(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.b(p,r)
q=p.charCodeAt(r)===133?J.fr(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
N(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.D)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
bG(a,b,c){var s=b-a.length
if(s<=0)return a
return this.N(c,s)+a},
bz(a,b){var s=a.indexOf(b,0)
return s},
h(a){return a},
gj(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gm(a){return A.a5(t.N)},
gn(a){return a.length},
$ih:1,
$iA:1}
A.aH.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.ds.prototype={
$0(){var s=new A.j($.f,t.D)
s.a2(null)
return s},
$S:8}
A.cn.prototype={}
A.bm.prototype={}
A.bv.prototype={
gt(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s,r=this,q=r.a,p=J.eL(q),o=p.gn(q)
if(r.b!==o)throw A.d(A.ax(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.p(q,s);++r.c
return!0}}
A.aA.prototype={}
A.B.prototype={$r:"+(1,2)",$s:1}
A.bl.prototype={
h(a){return A.dD(this)}}
A.bn.prototype={
V(){var s=this,r=s.$map
if(r==null){r=new A.aG(s.$ti.i("aG<1,2>"))
A.i1(s.a,r)
s.$map=r}return r},
ai(a){return this.V().ai(a)},
p(a,b){return this.V().p(0,b)},
an(a,b){this.V().an(0,b)},
gn(a){return this.V().a}}
A.cE.prototype={
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
A.aO.prototype={
h(a){return"Null check operator used on a null value"}}
A.bt.prototype={
h(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.bM.prototype={
h(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.cf.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.az.prototype={}
A.b2.prototype={
h(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iz:1}
A.V.prototype={
h(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.eR(r==null?"unknown":r)+"'"},
gbR(){return this},
$C:"$1",
$R:1,
$D:null}
A.c4.prototype={$C:"$0",$R:0}
A.c5.prototype={$C:"$2",$R:2}
A.ct.prototype={}
A.co.prototype={
h(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.eR(s)+"'"}}
A.aw.prototype={
B(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.aw))return!1
return this.$_target===b.$_target&&this.a===b.a},
gj(a){return(A.e_(this.a)^A.ag(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.ch(this.a)+"'")}}
A.bI.prototype={
h(a){return"RuntimeError: "+this.a}}
A.X.prototype={
gn(a){return this.a},
ai(a){var s=this.b
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
return q}else return this.bB(b)},
bB(a){var s,r,q=this.d
if(q==null)return null
s=q[this.ao(a)]
r=this.ap(s,a)
if(r<0)return null
return s[r].b},
a0(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.aC(s==null?m.b=m.a8():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=m.c
m.aC(r==null?m.c=m.a8():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.a8()
p=m.ao(b)
o=q[p]
if(o==null)q[p]=[m.a1(b,c)]
else{n=m.ap(o,b)
if(n>=0)o[n].b=c
else o.push(m.a1(b,c))}}},
an(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw A.d(A.ax(s))
r=r.c}},
aC(a,b,c){var s=a[b]
if(s==null)a[b]=this.a1(b,c)
else s.b=c},
a1(a,b){var s=this,r=new A.ca(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&1073741823
return r},
ao(a){return J.H(a)&1073741823},
ap(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a9(a[r].a,b))return r
return-1},
h(a){return A.dD(this)},
a8(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.ca.prototype={}
A.aI.prototype={
gn(a){return this.a.a},
gD(a){var s=this.a
return new A.bu(s,s.r,s.e)}}
A.bu.prototype={
gt(){return this.d},
q(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.ax(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
A.aG.prototype={
ao(a){return A.hY(a)&1073741823},
ap(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a9(a[r].a,b))return r
return-1}}
A.dm.prototype={
$1(a){return this.a(a)},
$S:9}
A.dn.prototype={
$2(a,b){return this.a(a,b)},
$S:10}
A.dp.prototype={
$1(a){return this.a(a)},
$S:11}
A.al.prototype={
h(a){return this.aQ(!1)},
aQ(a){var s,r,q,p,o,n=this.bk(),m=this.aJ(),l=(a?""+"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.b(m,q)
o=m[q]
l=a?l+A.ec(o):l+A.n(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
bk(){var s,r=this.$s
for(;$.b0.length<=r;)$.b0.push(null)
s=$.b0[r]
if(s==null){s=this.bj()
if(!(r<$.b0.length))return A.b($.b0,r)
$.b0[r]=s}return s},
bj(){var s,r,q,p,o,n=this.$r,m=n.indexOf("("),l=n.substring(1,m),k=n.substring(m),j=k==="()"?0:k.replace(/[^,]/g,"").length+1,i=A.a(new Array(j),t.f)
for(s=0;s<j;++s)i[s]=s
if(l!==""){r=l.split(",")
s=r.length
for(q=i.length,p=j;s>0;){--p;--s
o=r[s]
if(!(p>=0&&p<q))return A.b(i,p)
i[p]=o}}i=A.fv(i,!1,t.K)
i.$flags=3
return i}}
A.bX.prototype={
aJ(){return[this.a,this.b]},
B(a,b){if(b==null)return!1
return b instanceof A.bX&&this.$s===b.$s&&J.a9(this.a,b.a)&&J.a9(this.b,b.b)},
gj(a){return A.cg(this.$s,this.a,this.b,B.f)}}
A.bw.prototype={
gm(a){return B.dV},
$ih:1}
A.aM.prototype={}
A.bx.prototype={
gm(a){return B.dW},
$ih:1}
A.ae.prototype={
gn(a){return a.length},
$iu:1}
A.aK.prototype={
p(a,b){A.a3(b,a,a.length)
return a[b]},
$ii:1}
A.aL.prototype={$ii:1}
A.by.prototype={
gm(a){return B.dX},
$ih:1}
A.bz.prototype={
gm(a){return B.dY},
$ih:1}
A.bA.prototype={
gm(a){return B.dZ},
p(a,b){A.a3(b,a,a.length)
return a[b]},
$ih:1}
A.bB.prototype={
gm(a){return B.e_},
p(a,b){A.a3(b,a,a.length)
return a[b]},
$ih:1}
A.bC.prototype={
gm(a){return B.e0},
p(a,b){A.a3(b,a,a.length)
return a[b]},
$ih:1}
A.bD.prototype={
gm(a){return B.e2},
p(a,b){A.a3(b,a,a.length)
return a[b]},
$ih:1}
A.bE.prototype={
gm(a){return B.e3},
p(a,b){A.a3(b,a,a.length)
return a[b]},
$ih:1,
$icG:1}
A.aN.prototype={
gm(a){return B.e4},
gn(a){return a.length},
p(a,b){A.a3(b,a,a.length)
return a[b]},
$ih:1}
A.bF.prototype={
gm(a){return B.e5},
gn(a){return a.length},
p(a,b){A.a3(b,a,a.length)
return a[b]},
$ih:1}
A.aX.prototype={}
A.aY.prototype={}
A.aZ.prototype={}
A.b_.prototype={}
A.y.prototype={
i(a){return A.b9(v.typeUniverse,this,a)},
a3(a){return A.et(v.typeUniverse,this,a)}}
A.bV.prototype={}
A.c_.prototype={
h(a){return A.v(this.a,null)}}
A.bU.prototype={
h(a){return this.a}}
A.b5.prototype={$iJ:1}
A.cJ.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:3}
A.cI.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:12}
A.cK.prototype={
$0(){this.a.$0()},
$S:1}
A.cL.prototype={
$0(){this.a.$0()},
$S:1}
A.b4.prototype={
b9(a,b){if(self.setTimeout!=null)self.setTimeout(A.c1(new A.d6(this,b),0),a)
else throw A.d(A.cH("`setTimeout()` not found."))},
ba(a,b){if(self.setTimeout!=null)self.setInterval(A.c1(new A.d5(this,a,Date.now(),b),0),a)
else throw A.d(A.cH("Periodic timer."))},
$icD:1}
A.d6.prototype={
$0(){this.a.c=1
this.b.$0()},
$S:0}
A.d5.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.a.E(s,o)}q.c=p
r.d.$1(q)},
$S:1}
A.bN.prototype={}
A.dd.prototype={
$1(a){return this.a.$2(0,a)},
$S:4}
A.de.prototype={
$2(a,b){this.a.$2(1,new A.az(a,b))},
$S:13}
A.dj.prototype={
$2(a,b){this.a(a,b)},
$S:14}
A.x.prototype={
h(a){return A.n(this.a)},
$ik:1,
gP(){return this.b}}
A.F.prototype={}
A.aT.prototype={
aa(){},
ab(){}}
A.bP.prototype={
gbm(){return this.c<4},
br(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
bv(a,b,c,d){var s,r,q,p,o,n=this
if((n.c&4)!==0){s=new A.aV($.f)
A.eQ(s.gbn())
s.c=c
return s}s=$.f
r=d?1:0
q=A.ei(s,a)
A.fN(s,b)
p=new A.aT(n,q,s,r|32,A.am(n).i("aT<1>"))
p.CW=p
p.ch=p
p.ay=n.c&1
o=n.e
n.e=p
p.ch=null
p.CW=o
if(o==null)n.d=p
else o.ch=p
if(n.d===p)A.eF(n.a)
return p},
bq(a){var s,r=this
A.am(r).i("aT<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.br(a)
if((r.c&2)===0&&r.d==null)r.bf()}return null},
bc(){if((this.c&4)!==0)return new A.Z("Cannot add new events after calling close")
return new A.Z("Cannot add new events while doing an addStream")},
H(a,b){if(!this.gbm())throw A.d(this.bc())
this.ac(b)},
bf(){if((this.c&4)!==0)if(null.gbS())null.a2(null)
A.eF(this.b)}}
A.aS.prototype={
ac(a){var s
for(s=this.d;s!=null;s=s.ch)s.bd(new A.bS(a))}}
A.c8.prototype={
$0(){this.c.a(null)
this.b.T(null)},
$S:0}
A.R.prototype={
bD(a){if((this.c&15)!==6)return!0
return this.b.b.aw(this.d,a.a)},
by(a){var s,r=this.e,q=null,p=a.a,o=this.b.b
if(t.C.b(r))q=o.bK(r,p,a.b)
else q=o.aw(r,p)
try{p=q
return p}catch(s){if(t._.b(A.au(s))){if((this.c&1)!==0)throw A.d(A.av("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.av("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.j.prototype={
b3(a,b,c){var s,r=$.f
if(r===B.b){if(!t.C.b(b)&&!t.v.b(b))throw A.d(A.dx(b,"onError",u.c))}else b=A.hK(b,r)
s=new A.j(r,c.i("j<0>"))
this.R(new A.R(s,3,a,b,this.$ti.i("@<1>").a3(c).i("R<1,2>")))
return s},
aP(a,b,c){var s=new A.j($.f,c.i("j<0>"))
this.R(new A.R(s,19,a,b,this.$ti.i("@<1>").a3(c).i("R<1,2>")))
return s},
bs(a){this.a=this.a&1|16
this.c=a},
S(a){this.a=a.a&30|this.a&1
this.c=a.c},
R(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.R(a)
return}s.S(r)}A.ao(null,null,s.b,new A.cO(s,a))}},
aN(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.aN(a)
return}n.S(s)}m.a=n.W(a)
A.ao(null,null,n.b,new A.cT(m,n))}},
K(){var s=this.c
this.c=null
return this.W(s)},
W(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
T(a){var s,r=this
if(r.$ti.i("I<1>").b(a))A.cR(a,r,!0)
else{s=r.K()
r.a=8
r.c=a
A.a0(r,s)}},
aH(a){var s=this,r=s.K()
s.a=8
s.c=a
A.a0(s,r)},
bi(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.K()
q.S(a)
A.a0(q,r)},
J(a){var s=this.K()
this.bs(a)
A.a0(this,s)},
bh(a,b){this.J(new A.x(a,b))},
a2(a){if(this.$ti.i("I<1>").b(a)){this.aF(a)
return}this.be(a)},
be(a){this.a^=2
A.ao(null,null,this.b,new A.cQ(this,a))},
aF(a){A.cR(a,this,!1)
return},
aE(a){this.a^=2
A.ao(null,null,this.b,new A.cP(this,a))},
$iI:1}
A.cO.prototype={
$0(){A.a0(this.a,this.b)},
$S:0}
A.cT.prototype={
$0(){A.a0(this.b,this.a.a)},
$S:0}
A.cS.prototype={
$0(){A.cR(this.a.a,this.b,!0)},
$S:0}
A.cQ.prototype={
$0(){this.a.aH(this.b)},
$S:0}
A.cP.prototype={
$0(){this.a.J(this.b)},
$S:0}
A.cW.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.b0(q.d)}catch(p){s=A.au(p)
r=A.a7(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.dy(q)
n=k.a
n.c=new A.x(q,o)
q=n}q.b=!0
return}if(j instanceof A.j&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.j){m=k.b.a
l=new A.j(m.b,m.$ti)
j.b3(new A.cX(l,m),new A.cY(l),t.n)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.cX.prototype={
$1(a){this.a.bi(this.b)},
$S:3}
A.cY.prototype={
$2(a,b){this.a.J(new A.x(a,b))},
$S:15}
A.cV.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
q.c=p.b.b.aw(p.d,this.b)}catch(o){s=A.au(o)
r=A.a7(o)
q=s
p=r
if(p==null)p=A.dy(q)
n=this.a
n.c=new A.x(q,p)
n.b=!0}},
$S:0}
A.cU.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.bD(s)&&p.a.e!=null){p.c=p.a.by(s)
p.b=!1}}catch(o){r=A.au(o)
q=A.a7(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.dy(p)
m=l.b
m.c=new A.x(p,n)
p=m}p.b=!0}},
$S:0}
A.bO.prototype={}
A.aj.prototype={
gn(a){var s={},r=new A.j($.f,t.a)
s.a=0
this.aV(new A.cr(s,this),!0,new A.cs(s,r),r.gaG())
return r},
gaj(a){var s=new A.j($.f,this.$ti.i("j<1>")),r=this.aV(null,!0,new A.cp(s),s.gaG())
r.aX(new A.cq(this,r,s))
return s}}
A.cr.prototype={
$1(a){++this.a.a},
$S(){return this.b.$ti.i("~(1)")}}
A.cs.prototype={
$0(){this.b.T(this.a.a)},
$S:0}
A.cp.prototype={
$0(){var s,r=new A.Z("No element")
A.fx(r,B.j)
s=A.hu(r,B.j)
s=new A.x(r,B.j)
this.a.J(s)},
$S:0}
A.cq.prototype={
$1(a){A.hl(this.b,this.c,a)},
$S(){return this.a.$ti.i("~(1)")}}
A.aU.prototype={
gj(a){return(A.ag(this.a)^892482866)>>>0},
B(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.F&&b.a===this.a}}
A.bR.prototype={
aM(){return this.w.bq(this)},
aa(){},
ab(){}}
A.bQ.prototype={
aX(a){this.a=A.ei(this.d,a)},
aS(){var s,r=this,q=r.e&=4294967279
if((q&8)===0){q=r.e=q|8
if((q&128)!==0){s=r.r
if(s.a===1)s.a=3}if((q&64)===0)r.r=null
r.f=r.aM()}q=$.dv()
return q},
aa(){},
ab(){},
aM(){return null},
bd(a){var s,r,q=this,p=q.r
if(p==null)p=q.r=new A.bW()
s=p.c
if(s==null)p.b=p.c=a
else p.c=s.a=a
r=q.e
if((r&128)===0){r|=128
q.e=r
if(r<256)p.aA(q)}},
ac(a){var s=this,r=s.e
s.e=r|64
s.d.b2(s.a,a)
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
if(r)q.aa()
else q.ab()
p=q.e&=4294967231}if((p&128)!==0&&p<256)q.r.aA(q)}}
A.b3.prototype={
aV(a,b,c,d){return this.a.bv(a,d,c,!0)}}
A.bT.prototype={}
A.bS.prototype={}
A.bW.prototype={
aA(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.eQ(new A.d1(s,a))
s.a=1}}
A.d1.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.a
q.b=r
if(r==null)q.c=null
this.b.ac(s.b)},
$S:0}
A.aV.prototype={
aX(a){},
aS(){this.a=-1
this.c=null
return $.dv()},
bo(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.b1(s)}}else r.a=q}}
A.bY.prototype={}
A.df.prototype={
$0(){return this.a.T(this.b)},
$S:0}
A.d9.prototype={}
A.dh.prototype={
$0(){A.fg(this.a,this.b)},
$S:0}
A.d2.prototype={
b1(a){var s,r,q
try{if(B.b===$.f){a.$0()
return}A.eC(null,null,this,a)}catch(q){s=A.au(q)
r=A.a7(q)
A.c0(s,r)}},
bN(a,b){var s,r,q
try{if(B.b===$.f){a.$1(b)
return}A.eD(null,null,this,a,b)}catch(q){s=A.au(q)
r=A.a7(q)
A.c0(s,r)}},
b2(a,b){a.toString
return this.bN(a,b,t.z)},
af(a){return new A.d3(this,a)},
bw(a,b){return new A.d4(this,a,b)},
bJ(a){if($.f===B.b)return a.$0()
return A.eC(null,null,this,a)},
b0(a){a.toString
return this.bJ(a,t.z)},
bM(a,b){if($.f===B.b)return a.$1(b)
return A.eD(null,null,this,a,b)},
aw(a,b){var s=t.z
a.toString
return this.bM(a,b,s,s)},
bL(a,b,c){if($.f===B.b)return a.$2(b,c)
return A.hL(null,null,this,a,b,c)},
bK(a,b,c){var s=t.z
a.toString
return this.bL(a,b,c,s,s,s)},
bI(a){return a},
av(a){var s=t.z
a.toString
return this.bI(a,s,s,s)}}
A.d3.prototype={
$0(){return this.a.b1(this.b)},
$S:0}
A.d4.prototype={
$1(a){return this.a.b2(this.b,a)},
$S(){return this.c.i("~(0)")}}
A.aW.prototype={
gD(a){var s=this,r=new A.ak(s,s.r,s.$ti.i("ak<1>"))
r.c=s.e
return r},
gn(a){return this.a},
H(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.aD(s==null?q.b=A.dJ():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.aD(r==null?q.c=A.dJ():r,b)}else return q.bb(b)},
bb(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.dJ()
s=J.H(a)&1073741823
r=p[s]
if(r==null)p[s]=[q.a9(a)]
else{if(q.bl(r,a)>=0)return!1
r.push(q.a9(a))}return!0},
aD(a,b){if(a[b]!=null)return!1
a[b]=this.a9(b)
return!0},
aL(){this.r=this.r+1&1073741823},
a9(a){var s,r=this,q=new A.d0(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.aL()
return q},
bl(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a9(a[r].a,b))return r
return-1}}
A.d0.prototype={}
A.ak.prototype={
gt(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.d(A.ax(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.m.prototype={
gD(a){return new A.bv(a,this.gn(a),A.bf(a).i("bv<m.E>"))},
h(a){return A.dz(a,"[","]")}}
A.aJ.prototype={
gn(a){return this.a},
h(a){return A.dD(this)}}
A.cb.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.n(a)
r.a=(r.a+=s)+": "
s=A.n(b)
r.a+=s},
$S:16}
A.aP.prototype={
h(a){return A.dz(this,"{","}")}}
A.b1.prototype={}
A.ay.prototype={
B(a,b){if(b==null)return!1
return b instanceof A.ay&&this.a===b.a},
gj(a){return B.a.gj(this.a)},
h(a){var s,r,q,p,o=this.a,n=B.a.l(o,36e8)
o%=36e8
s=B.a.l(o,6e7)
o%=6e7
r=s<10?"0":""
q=B.a.l(o,1e6)
p=q<10?"0":""
return""+n+":"+r+s+":"+p+q+"."+B.h.bG(B.a.h(o%1e6),6,"0")}}
A.cM.prototype={
h(a){return this.U()}}
A.k.prototype={
gP(){return A.fw(this)}}
A.bi.prototype={
h(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.c6(s)
return"Assertion failed"}}
A.J.prototype={}
A.D.prototype={
ga7(){return"Invalid argument"+(!this.a?"(s)":"")},
ga6(){return""},
h(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.ga7()+q+o
if(!s.a)return n
return n+s.ga6()+": "+A.c6(s.gaq())},
gaq(){return this.b}}
A.ah.prototype={
gaq(){return this.b},
ga7(){return"RangeError"},
ga6(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.n(q):""
else if(q==null)s=": Not greater than or equal to "+A.n(r)
else if(q>r)s=": Not in inclusive range "+A.n(r)+".."+A.n(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.n(r)
return s}}
A.bo.prototype={
gaq(){return this.b},
ga7(){return"RangeError"},
ga6(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gn(a){return this.f}}
A.aR.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.bL.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.Z.prototype={
h(a){return"Bad state: "+this.a}}
A.bk.prototype={
h(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.c6(s)+"."}}
A.bG.prototype={
h(a){return"Out of Memory"},
gP(){return null},
$ik:1}
A.aQ.prototype={
h(a){return"Stack Overflow"},
gP(){return null},
$ik:1}
A.cN.prototype={
h(a){return"Exception: "+this.a}}
A.bq.prototype={
al(a,b,c){var s,r
for(s=this.gD(this),r=b;s.q();)r=c.$2(r,s.gt())
return r},
am(a,b,c){c.toString
return this.al(0,b,c,t.z)},
gn(a){var s,r=this.gD(this)
for(s=0;r.q();)++s
return s},
h(a){return A.fp(this,"(",")")}}
A.t.prototype={
gj(a){return A.e.prototype.gj.call(this,0)},
h(a){return"null"}}
A.e.prototype={$ie:1,
B(a,b){return this===b},
gj(a){return A.ag(this)},
h(a){return"Instance of '"+A.ch(this)+"'"},
gm(a){return A.i7(this)},
toString(){return this.h(this)}}
A.bZ.prototype={
h(a){return""},
$iz:1}
A.bK.prototype={
gn(a){return this.a.length},
h(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.cZ.prototype={
bF(a){if(a<=0||a>4294967296)throw A.d(A.fy("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
A.N.prototype={
gj(a){var s=this.a,r=this.b
return A.cg(new A.B(s,r).$s,s,r,B.f)},
B(a,b){var s,r,q,p
if(b==null)return!1
if(b instanceof A.N){s=b.a
r=b.b
q=this.a
p=this.b
p=A.cg(new A.B(s,r).$s,s,r,B.f)===A.cg(new A.B(q,p).$s,q,p,B.f)
s=p}else s=!1
return s},
h(a){var s=this
return"("+s.a+" "+s.b+") => '"+s.c+"' "+s.d}}
A.ac.prototype={}
A.ad.prototype={
h(a){var s=this
return"               row: "+s.a+"\n            column: "+s.b+"\n         character: '"+s.c+"'\n    characterColor: "+s.d+"\n\n          pixelRow: "+s.e+"\n       pixelColumn: "+s.f+"\n         pixelIsOn: "+s.r+"\n    "}}
A.af.prototype={
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
A.bJ.prototype={
b7(a,b,c,d,e,f,g,h){var s,r=this,q=v.G.document
q.onfocus=A.ba(new A.cj(r))
q.onblur=A.ba(new A.ck(r))
q=r.w
q.tabIndex=-1
q.style.display="block"
q.style.outline="none"
s=q.getContext("2d")
if(s==null)s=t.m.a(s)
s.imageSmoothingEnabled=!1
q.onfocus=A.ba(new A.cl(r))
q.onblur=A.ba(new A.cm(r))
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
r=A.dF(b)
q=r.a
p=B.a.O(1,r.b)
l=m.y
if(!(a>=0&&a<l.length))return A.b(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.b(l,q)
o=l[q]
l.$flags&2&&A.c3(l)
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
r=A.dF(b)
q=r.a
p=B.a.O(1,r.b)
l=m.y
if(!(a>=0&&a<l.length))return A.b(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.b(l,q)
o=l[q]
l.$flags&2&&A.c3(l)
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
aZ(a,b){var s,r,q,p,o=this.X(b,a)
b=o.a
s=A.dF(o.b)
r=s.a
q=B.a.O(1,s.b)
p=this.y
if(!(b>=0&&b<p.length))return A.b(p,b)
p=p[b]
if(!(r>=0&&r<p.length))return A.b(p,r)
return(p[r]&q)>>>0>0},
aT(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=this
if(e==null)e=k.c-c
if(b==null)b=k.b-d
k.a4()
if(c===0&&d===0&&e===k.c&&b===k.b){for(s=k.y,r=s.length,q=0;q<r;++q)for(p=0;o=s[q],p<o.length;++p){o.$flags&2&&A.c3(o)
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
Y(a){return this.aT(0,null,0,0,null)},
bp(a,b,c,d,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.a4()
s=e.X(a,b)
a=s.a
b=s.b
r=B.a.bt(1,a0)-1
for(q=a0-1,p=t.t,o=e.x,n=0;n<8;++n){m=c[n]
l=m&r
m=A.a([],p)
for(k=a+n,j=0;j<a0;++j){i=e.aZ(b+j,k)?1:0
m.push(B.a.O(i,q-j))}h=B.m.am(m,0,new A.ci())
switch(a1){case B.t:for(j=0;j<a0;++j){m=b+j
if((B.a.C(l,q-j)&1)>0)e.G(k,m,d,o,!1)
else e.F(k,m,o,!1)}break
case B.dO:for(j=0;j<a0;++j){m=b+j
if((B.a.C(l,q-j)&1)>0)e.F(k,m,o,!1)
else e.G(k,m,d,o,!1)}break
case B.dQ:for(j=0;j<a0;++j){g=q-j
if((B.a.C(l,g)&1)>0&&(B.a.b5(h,g)&1)===0)e.G(k,b+j,d,o,!1)}break
case B.dP:for(j=0;j<a0;++j)if((B.a.C(l,q-j)&1)>0)e.G(k,b+j,d,o,!1)
break
case B.dR:for(f=l&h,j=0;j<a0;++j)if((B.a.C(f,q-j)&1)>0)e.G(k,b+j,d,o,!1)
break
case B.dS:for(f=l&h,j=0;j<a0;++j)if((B.a.C(f,q-j)&1)>0)e.F(k,b+j,o,!1)
break
case B.dT:for(f=l&h,j=0;j<a0;++j)if((B.a.C(f,q-j)&1)===0)e.F(k,b+j,o,!1)
break
case B.dU:for(f=l&h,j=0;j<a0;++j){m=b+j
if((B.a.C(f,q-j)&1)===0)e.F(k,m,o,!1)
else e.G(k,m,d,o,!1)}break}}e.a5()},
b_(a,b,c){this.bp(c.a,c.b,b,a,8,B.t,!0,!1,!1)},
b4(a){var s,r,q,p,o,n,m,l,k=this,j=k.b
a=B.a.k(a,j)
for(s=j-a,r=k.y,q=r.length,p=0;p<s;++p){if(!(p<q))return A.b(r,p)
o=p+a
n=0
for(;m=r[p],n<m.length;++n){if(!(o<q))return A.b(r,o)
l=r[o]
if(!(n<l.length))return A.b(l,n)
l=l[n]
m.$flags&2&&A.c3(m)
m[n]=l}}for(;p<j;++p){if(!(p<q))return A.b(r,p)
n=0
for(;o=r[p],n<o.length;++n){o.$flags&2&&A.c3(o)
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
A.cj.prototype={
$0(){this.a.z=!0},
$S:1}
A.ck.prototype={
$0(){this.a.z=!1},
$S:1}
A.cl.prototype={
$0(){this.a.M()},
$S:1}
A.cm.prototype={
$0(){this.a.L()},
$S:1}
A.ci.prototype={
$2(a,b){return(a|b)>>>0},
$S:6}
A.E.prototype={
U(){return"Mode."+this.b}}
A.ai.prototype={
U(){return"State."+this.b}}
A.cu.prototype={
b8(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=this,r=s.f
r.tabIndex=-1
r.onfocus=A.ba(new A.cv(s))
r.onblur=A.ba(new A.cw(s))
r.onkeydown=A.ey(new A.cx(s,l,new A.cB(),new A.cA(s)))
r.onclick=A.ey(new A.cy(s,new A.cC(s),o))
A.fF(A.e8(300),new A.cz(s))
s.L()
s.Y(0)},
gak(){var s=this.w
s===$&&A.U()
return s.gak()},
gag(){var s=this.w
s===$&&A.U()
return s.gag()},
ae(a,b){return new A.B(B.a.k(a,this.a),B.a.k(b,this.b))},
aK(){var s=this,r=s.x
s.CW.H(0,new A.N(r.c,r.d," ","white"))
s.aR()
s.cy=!1},
aR(){var s,r,q,p,o,n,m,l,k,j
for(s=this.CW,r=A.fO(s,s.r,s.$ti.c),q=this.w,p=this.cx,o=r.$ti.c;r.q();){n=r.d
if(n==null)n=o.a(n)
m=n.a
l=n.b
if(p.ai(n.c)){k=p.p(0,n.c)
k.toString
j=k}else j=$.eT()
q===$&&A.U()
q.b_(n.d,j,new A.B(m*10,l*8))}if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.aL()}},
az(a,b){var s,r=this.ae(b,a)
b=r.a
a=r.b
s=this.ch
if(!(b>=0&&b<s.length))return A.b(s,b)
s=s[b]
if(!(a>=0&&a<s.length))return A.b(s,a)
return s[a].c},
aW(){var s,r=this.x
r.sZ(0)
s=r.c
if(s===this.a-1)this.aB()
else r.c=B.a.k(s+1,r.a)},
aB(){var s,r,q,p,o,n,m,l,k=this
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
s===$&&A.U()
s.b4(10)},
au(a,b,c,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a1==null?f.x.c:a1,d=f.ae(e,c==null?f.x.d:c)
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
if(j===n&&i===m){f.aB()
e.c=B.a.k(e.c-1,s)}e.sZ(e.d+1)}f.aR()
if(a0)f.aW()},
v(a,b,c){return this.au(a,null,b,!0,c)},
aY(a,b){return this.au(a,null,null,b,null)},
ar(a,b,c,d){return this.au(a,b,c,!0,d)},
Y(a){var s,r,q,p,o=this,n=o.b,m=o.a
for(s=o.ch,r=0;r<m;++r)for(q=0;q<n;++q){if(!(r<s.length))return A.b(s,r)
p=s[r]
if(!(q<p.length))return A.b(p,q)
p=p[q]
p.c=" "
p.d="white"}s=o.w
s===$&&A.U()
s.aT(0,m*10,0,0,n*8)
s=o.x
s.c=0%s.a
s.sZ(0)},
bA(){if(this.ay!==B.e)A.at(A.c7("Terminal already awaiting input."))
this.ay=B.k
var s=this.at
return new A.F(s,A.am(s).i("F<1>")).gaj(0)},
M(){return this.gak().$0()},
L(){return this.gag().$0()}}
A.cC.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.w
i===$&&A.U()
s=J.e2(a.offsetX)
r=Math.max(Math.min(B.a.E(J.e2(a.offsetY)-1,i.e),i.b-1),0)
q=Math.max(Math.min(B.a.E(s-1,i.d),i.c-1),0)
p=B.a.l(r,10)
o=B.a.l(q,8)
n=j.az(o,p)
m=j.ae(p,o)
l=m.a
k=m.b
j=j.ch
if(!(l>=0&&l<j.length))return A.b(j,l)
j=j[l]
if(!(k>=0&&k<j.length))return A.b(j,k)
return new A.ad(p,o,n,j[k].d,r,q,i.aZ(q,r))},
$S:17}
A.cB.prototype={
$1(a){var s=a.key
return new A.ac(s.length>1?"":s)},
$S:18}
A.cA.prototype={
$0(){var s,r,q,p,o,n=this.a,m=n.a,l=n.b,k=new A.af(m,l)
k.su(n.y.gu())
s=A.a([],t.s)
for(r=n.z,q=r.b;p=k.c,o=k.d,p*l+o<r.c*q+r.d;p=k.c*l+k.d+1,k.c=B.a.k(B.a.E(p,l),m),k.d=B.a.k(p,l))s.push(n.az(o,p))
return B.m.bC(s,"")},
$S:19}
A.cv.prototype={
$0(){var s=this.a.w
s===$&&A.U()
s.M()},
$S:1}
A.cw.prototype={
$0(){var s=this.a.w
s===$&&A.U()
s.L()},
$S:1}
A.cx.prototype={
$1(a){var s,r,q,p
a.preventDefault()
s=this.a
switch(s.ay){case B.e:break
case B.k:r=s.at
if(r.d!=null){r.H(0,this.c.$1(a))
s.ay=B.e}break
case B.v:s.aK()
$label0$1:{q=a.keyCode
if(13===q){r=s.as
if(r.d!=null){r.H(0,J.f7(this.d.$0()))
s.aW()
s.ay=B.e}break $label0$1}if(8===q){r=s.x
if(r.gu()>s.y.gu()){r.su(r.gu()-1)
s.aY(" ",!1)
r.su(r.gu()-1)}break $label0$1}p=a.key
if(p.length===1&&s.x.gu()<s.z.gu())s.aY(p,!1)}break
case B.w:break}},
$S:7}
A.cy.prototype={
$1(a){var s
a.preventDefault()
s=this.a
if(s.ay===B.w&&s.ax.d!=null){s.ax.H(0,this.b.$1(a))
s.ay=B.e}},
$S:7}
A.cz.prototype={
$1(a){var s,r,q,p=this.a,o=p.w
o===$&&A.U()
if(o.z&&J.a9(v.G.document.activeElement,o.w)&&p.ay===B.v)if(p.cy)p.aK()
else{s=p.x
r=s.c
s=s.d
q=$.eS()
o.b_("white",q,new A.B(r*10,s*8))
p.cy=!0}},
$S:20}
A.Y.prototype={
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
A.cc.prototype={
gI(){var s,r,q,p=A.a([],t.t)
for(s=this.a,r=0;r<7;++r){if(0>=s.length)return A.b(s,0)
q=s[0]
if(!(r<q.length))return A.b(q,r)
if(q[r]===B.c)p.push(r)}return p},
aI(a){var s,r,q,p=this.a,o=p.length
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
bQ(a){var s,r=this.aI(a)
if(r===-1)throw A.d("Cannot move "+a+"...")
s=new A.ce(this,r,a)
if(s.$2(0,1))return!0
if(s.$2(1,0))return!0
if(s.$2(1,1))return!0
if(s.$2(-1,1))return!0
return!1},
a_(a){var s,r,q,p=this,o=p.a
if(0>=o.length)return A.b(o,0)
s=o[0]
if(!(a>=0&&a<s.length))return A.b(s,a)
if(s[a]===B.c){r=p.aI(a)
q=p.bQ(a)
if(!(r>=0&&r<o.length))return A.b(o,r)
o=o[r]
s=p.b
if(!(a<o.length))return A.b(o,a)
o[a]=s
return q}throw A.d("Cannot make move: "+a)},
aU(){var s,r,q,p,o,n,m,l,k=A.ea()
for(s=k.a,r=s.length,q=this.a,p=q.length,o=0;o<6;++o)for(n=0;n<7;++n){if(!(o<r))return A.b(s,o)
m=s[o]
if(!(o<p))return A.b(q,o)
l=q[o]
if(!(n<l.length))return A.b(l,n)
l=l[n]
if(!(n<m.length))return A.b(m,n)
m[n]=l}k.b=this.b
return k},
bH(){var s,r,q=this.aU()
for(;!0;){s=q.gI()
r=s.length
if(r===0)break
r=$.f4().bF(r)
if(!(r>=0&&r<s.length))return A.b(s,r)
if(q.a_(s[r]))return q.b
else q.b=q.b===B.d?B.i:B.d}return B.c},
bE(a){var s,r,q,p,o,n,m,l,k=this,j=t.S
j=A.ft(j,j)
for(s=k.gI(),r=s.length,q=0;q<s.length;s.length===r||(0,A.dt)(s),++q)j.a0(0,s[q],0)
for(s=k.gI(),r=s.length,q=0;q<s.length;s.length===r||(0,A.dt)(s),++q){p=s[q]
o=k.aU()
if(o.a_(p))return p
for(n=0;n<a;++n)if(o.bH()===k.b){m=j.p(0,p)
m.toString
j.a0(0,p,m+1)}}l=new A.aI(j).gD(0)
if(!l.q())A.at(A.fo())
return new A.aI(j).am(0,l.gt(),new A.cd(j))},
h(a){var s,r,q,p,o
for(s=this.a,r=0,q="";r<6;++r){for(p=0;p<7;++p,q=o){if(!(r<s.length))return A.b(s,r)
o=s[r]
if(!(p<o.length))return A.b(o,p)
o=q+o[p].h(0)}q+="\n"}return q.charCodeAt(0)==0?q:q}}
A.ce.prototype={
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
A.cd.prototype={
$2(a,b){var s=this.a,r=s.p(0,a)
r.toString
s=s.p(0,b)
s.toString
return r>s?a:b},
$S:6}
A.aa.prototype={
U(){return"GameResult."+this.b}};(function aliases(){var s=J.P.prototype
s.b6=s.h})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._static_2,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u
s(A,"hT","fK",2)
s(A,"hU","fL",2)
s(A,"hV","fM",2)
r(A,"eI","hN",0)
s(A,"hW","hH",4)
q(A,"hX","hI",5)
p(A.j.prototype,"gaG","bh",5)
o(A.aV.prototype,"gbn","bo",0)
var n
o(n=A.bJ.prototype,"gak","M",0)
o(n,"gag","L",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.e,null)
q(A.e,[A.dA,J.bp,J.bh,A.k,A.V,A.cn,A.bq,A.bv,A.aA,A.al,A.bl,A.cE,A.cf,A.az,A.b2,A.aJ,A.ca,A.bu,A.y,A.bV,A.c_,A.b4,A.bN,A.x,A.aj,A.bQ,A.bP,A.R,A.j,A.bO,A.bT,A.bW,A.aV,A.bY,A.d9,A.aP,A.d0,A.ak,A.m,A.ay,A.cM,A.bG,A.aQ,A.cN,A.t,A.bZ,A.bK,A.cZ,A.N,A.ac,A.ad,A.af,A.bJ,A.cu,A.cc])
q(J.bp,[J.br,J.aC,J.aE,J.aD,J.aF,J.ab,J.W])
q(J.aE,[J.P,J.o,A.bw,A.aM])
q(J.P,[J.bH,J.a_,J.O])
r(J.c9,J.o)
q(J.ab,[J.aB,J.bs])
q(A.k,[A.aH,A.J,A.bt,A.bM,A.bI,A.bU,A.bi,A.D,A.aR,A.bL,A.Z,A.bk])
q(A.V,[A.c4,A.c5,A.ct,A.dm,A.dp,A.cJ,A.cI,A.dd,A.cX,A.cr,A.cq,A.d4,A.cC,A.cB,A.cx,A.cy,A.cz])
q(A.c4,[A.ds,A.cK,A.cL,A.d6,A.d5,A.c8,A.cO,A.cT,A.cS,A.cQ,A.cP,A.cW,A.cV,A.cU,A.cs,A.cp,A.d1,A.df,A.dh,A.d3,A.cj,A.ck,A.cl,A.cm,A.cA,A.cv,A.cw])
r(A.bm,A.bq)
r(A.bX,A.al)
r(A.B,A.bX)
r(A.bn,A.bl)
r(A.aO,A.J)
q(A.ct,[A.co,A.aw])
r(A.X,A.aJ)
r(A.aI,A.bm)
r(A.aG,A.X)
q(A.c5,[A.dn,A.de,A.dj,A.cY,A.cb,A.ci,A.ce,A.cd])
q(A.aM,[A.bx,A.ae])
q(A.ae,[A.aX,A.aZ])
r(A.aY,A.aX)
r(A.aK,A.aY)
r(A.b_,A.aZ)
r(A.aL,A.b_)
q(A.aK,[A.by,A.bz])
q(A.aL,[A.bA,A.bB,A.bC,A.bD,A.bE,A.aN,A.bF])
r(A.b5,A.bU)
r(A.b3,A.aj)
r(A.aU,A.b3)
r(A.F,A.aU)
r(A.bR,A.bQ)
r(A.aT,A.bR)
r(A.aS,A.bP)
r(A.bS,A.bT)
r(A.d2,A.d9)
r(A.b1,A.aP)
r(A.aW,A.b1)
q(A.D,[A.ah,A.bo])
q(A.cM,[A.E,A.ai,A.Y,A.aa])
s(A.aX,A.m)
s(A.aY,A.aA)
s(A.aZ,A.m)
s(A.b_,A.aA)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{c:"int",q:"double",eN:"num",A:"String",be:"bool",t:"Null",i:"List",e:"Object",is:"Map"},mangledNames:{},types:["~()","t()","~(~())","t(@)","~(@)","~(e,z)","c(c,c)","t(l)","I<~>()","@(@)","@(@,A)","@(A)","t(~())","t(@,z)","~(c,@)","t(e,z)","~(e?,e?)","ad(l)","ac(l)","A()","~(cD)","be(c,c)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.B&&a.b(c.a)&&b.b(c.b)}}
A.h2(v.typeUniverse,JSON.parse('{"bH":"P","a_":"P","O":"P","br":{"be":[],"h":[]},"aC":{"h":[]},"aE":{"l":[]},"P":{"l":[]},"o":{"i":["1"],"l":[]},"c9":{"o":["1"],"i":["1"],"l":[]},"ab":{"q":[]},"aB":{"q":[],"c":[],"h":[]},"bs":{"q":[],"h":[]},"W":{"A":[],"h":[]},"aH":{"k":[]},"aO":{"J":[],"k":[]},"bt":{"k":[]},"bM":{"k":[]},"b2":{"z":[]},"bI":{"k":[]},"X":{"aJ":["1","2"]},"aG":{"X":["1","2"],"aJ":["1","2"]},"bw":{"l":[],"h":[]},"aM":{"l":[]},"bx":{"l":[],"h":[]},"ae":{"u":["1"],"l":[]},"aK":{"m":["q"],"i":["q"],"u":["q"],"l":[]},"aL":{"m":["c"],"i":["c"],"u":["c"],"l":[]},"by":{"m":["q"],"i":["q"],"u":["q"],"l":[],"h":[],"m.E":"q"},"bz":{"m":["q"],"i":["q"],"u":["q"],"l":[],"h":[],"m.E":"q"},"bA":{"m":["c"],"i":["c"],"u":["c"],"l":[],"h":[],"m.E":"c"},"bB":{"m":["c"],"i":["c"],"u":["c"],"l":[],"h":[],"m.E":"c"},"bC":{"m":["c"],"i":["c"],"u":["c"],"l":[],"h":[],"m.E":"c"},"bD":{"m":["c"],"i":["c"],"u":["c"],"l":[],"h":[],"m.E":"c"},"bE":{"cG":[],"m":["c"],"i":["c"],"u":["c"],"l":[],"h":[],"m.E":"c"},"aN":{"m":["c"],"i":["c"],"u":["c"],"l":[],"h":[],"m.E":"c"},"bF":{"m":["c"],"i":["c"],"u":["c"],"l":[],"h":[],"m.E":"c"},"bU":{"k":[]},"b5":{"J":[],"k":[]},"b4":{"cD":[]},"x":{"k":[]},"F":{"aj":["1"]},"aS":{"bP":["1"]},"j":{"I":["1"]},"aU":{"aj":["1"]},"b3":{"aj":["1"]},"aW":{"aP":["1"]},"b1":{"aP":["1"]},"bi":{"k":[]},"J":{"k":[]},"D":{"k":[]},"ah":{"k":[]},"bo":{"k":[]},"aR":{"k":[]},"bL":{"k":[]},"Z":{"k":[]},"bk":{"k":[]},"bG":{"k":[]},"aQ":{"k":[]},"bZ":{"z":[]},"fn":{"i":["c"]},"fI":{"i":["c"]},"fH":{"i":["c"]},"fl":{"i":["c"]},"fG":{"i":["c"]},"fm":{"i":["c"]},"cG":{"i":["c"]},"fh":{"i":["q"]},"fi":{"i":["q"]}}'))
A.h1(v.typeUniverse,JSON.parse('{"bm":1,"aA":1,"bl":2,"aI":1,"bu":1,"ae":1,"aU":1,"bR":1,"bQ":1,"b3":1,"bT":1,"bS":1,"bW":1,"aV":1,"bY":1,"b1":1,"bq":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.dV
return{o:s("N"),Q:s("k"),Z:s("iq"),I:s("aa"),U:s("o<N>"),G:s("o<i<N>>"),w:s("o<i<Y>>"),f:s("o<e>"),u:s("o<Y>"),s:s("o<A>"),x:s("o<cG>"),b:s("o<@>"),t:s("o<c>"),T:s("aC"),m:s("l"),g:s("O"),p:s("u<@>"),V:s("ac"),j:s("i<@>"),q:s("ad"),P:s("t"),K:s("e"),L:s("it"),F:s("+()"),l:s("z"),N:s("A"),E:s("cD"),R:s("h"),_:s("J"),A:s("a_"),c:s("j<@>"),a:s("j<c>"),D:s("j<~>"),y:s("be"),i:s("q"),z:s("@"),v:s("@(e)"),C:s("@(e,z)"),S:s("c"),O:s("I<t>?"),X:s("e?"),B:s("A?"),d:s("be?"),J:s("q?"),M:s("c?"),W:s("eN?"),H:s("eN"),n:s("~"),e:s("~(e)"),k:s("~(e,z)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.G=J.bp.prototype
B.m=J.o.prototype
B.a=J.aB.prototype
B.H=J.ab.prototype
B.h=J.W.prototype
B.I=J.O.prototype
B.J=J.aE.prototype
B.u=J.bH.prototype
B.n=J.a_.prototype
B.o=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.x=function() {
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
B.C=function(getTagFallback) {
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
B.y=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.B=function(hooks) {
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
B.A=function(hooks) {
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
B.z=function(hooks) {
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

B.D=new A.bG()
B.f=new A.cn()
B.E=new A.cZ()
B.b=new A.d2()
B.j=new A.bZ()
B.F=new A.ay(0)
B.q=new A.aa("human")
B.r=new A.aa("computer")
B.l=new A.aa("tie")
B.d8=A.a(s([126,129,165,129,189,153,129,126]),t.t)
B.aa=A.a(s([126,255,219,255,195,231,255,126]),t.t)
B.dF=A.a(s([108,254,254,254,124,56,16,0]),t.t)
B.c5=A.a(s([16,56,124,254,124,56,16,0]),t.t)
B.b3=A.a(s([56,124,56,254,254,124,56,124]),t.t)
B.bf=A.a(s([16,16,56,124,254,124,56,124]),t.t)
B.ay=A.a(s([0,0,24,60,60,24,0,0]),t.t)
B.aB=A.a(s([255,255,231,195,195,231,255,255]),t.t)
B.aN=A.a(s([0,60,102,66,66,102,60,0]),t.t)
B.cT=A.a(s([255,195,153,189,189,153,195,255]),t.t)
B.dE=A.a(s([15,7,15,125,204,204,204,120]),t.t)
B.dD=A.a(s([60,102,102,102,60,24,126,24]),t.t)
B.cQ=A.a(s([63,51,63,48,48,112,240,224]),t.t)
B.U=A.a(s([127,99,127,99,99,103,230,192]),t.t)
B.Z=A.a(s([153,90,60,231,231,60,90,153]),t.t)
B.av=A.a(s([128,224,248,254,248,224,128,0]),t.t)
B.bB=A.a(s([2,14,62,254,62,14,2,0]),t.t)
B.cj=A.a(s([24,60,126,24,24,126,60,24]),t.t)
B.cf=A.a(s([102,102,102,102,102,0,102,0]),t.t)
B.cp=A.a(s([127,219,219,123,27,27,27,0]),t.t)
B.cq=A.a(s([62,99,56,108,108,56,204,120]),t.t)
B.bP=A.a(s([0,0,0,0,126,126,126,0]),t.t)
B.bS=A.a(s([24,60,126,24,126,60,24,255]),t.t)
B.P=A.a(s([24,60,126,24,24,24,24,0]),t.t)
B.dd=A.a(s([24,24,24,24,126,60,24,0]),t.t)
B.d6=A.a(s([0,24,12,254,12,24,0,0]),t.t)
B.as=A.a(s([0,48,96,254,96,48,0,0]),t.t)
B.bX=A.a(s([0,0,192,192,192,254,0,0]),t.t)
B.bu=A.a(s([0,36,102,255,102,36,0,0]),t.t)
B.a8=A.a(s([0,24,60,126,255,255,0,0]),t.t)
B.bT=A.a(s([0,255,255,126,60,24,0,0]),t.t)
B.aZ=A.a(s([0,0,0,0,0,0,0,0]),t.t)
B.bC=A.a(s([48,120,120,48,48,0,48,0]),t.t)
B.X=A.a(s([108,108,108,0,0,0,0,0]),t.t)
B.am=A.a(s([108,108,254,108,254,108,108,0]),t.t)
B.c0=A.a(s([48,124,192,120,12,248,48,0]),t.t)
B.O=A.a(s([0,198,204,24,48,102,198,0]),t.t)
B.cC=A.a(s([56,108,56,118,220,204,118,0]),t.t)
B.al=A.a(s([96,96,192,0,0,0,0,0]),t.t)
B.T=A.a(s([24,48,96,96,96,48,24,0]),t.t)
B.by=A.a(s([96,48,24,24,24,48,96,0]),t.t)
B.ct=A.a(s([0,102,60,255,60,102,0,0]),t.t)
B.dM=A.a(s([0,48,48,252,48,48,0,0]),t.t)
B.c2=A.a(s([0,0,0,0,0,48,48,96]),t.t)
B.bt=A.a(s([0,0,0,252,0,0,0,0]),t.t)
B.ch=A.a(s([0,0,0,0,0,48,48,0]),t.t)
B.a3=A.a(s([6,12,24,48,96,192,128,0]),t.t)
B.b6=A.a(s([124,198,206,222,246,230,124,0]),t.t)
B.ck=A.a(s([48,112,48,48,48,48,252,0]),t.t)
B.bZ=A.a(s([120,204,12,56,96,204,252,0]),t.t)
B.dH=A.a(s([120,204,12,56,12,204,120,0]),t.t)
B.bA=A.a(s([28,60,108,204,254,12,30,0]),t.t)
B.d7=A.a(s([252,192,248,12,12,204,120,0]),t.t)
B.dp=A.a(s([56,96,192,248,204,204,120,0]),t.t)
B.c_=A.a(s([252,204,12,24,48,48,48,0]),t.t)
B.cw=A.a(s([120,204,204,120,204,204,120,0]),t.t)
B.bd=A.a(s([120,204,204,124,12,24,112,0]),t.t)
B.d0=A.a(s([0,48,48,0,0,48,48,0]),t.t)
B.aQ=A.a(s([0,48,48,0,0,48,48,96]),t.t)
B.bz=A.a(s([24,48,96,192,96,48,24,0]),t.t)
B.bo=A.a(s([0,0,252,0,0,252,0,0]),t.t)
B.aA=A.a(s([96,48,24,12,24,48,96,0]),t.t)
B.aq=A.a(s([120,204,12,24,48,0,48,0]),t.t)
B.dk=A.a(s([124,198,222,222,222,192,120,0]),t.t)
B.cb=A.a(s([48,120,204,204,252,204,204,0]),t.t)
B.aK=A.a(s([252,102,102,124,102,102,252,0]),t.t)
B.ac=A.a(s([60,102,192,192,192,102,60,0]),t.t)
B.a4=A.a(s([248,108,102,102,102,108,248,0]),t.t)
B.ai=A.a(s([254,98,104,120,104,98,254,0]),t.t)
B.cn=A.a(s([254,98,104,120,104,96,240,0]),t.t)
B.ao=A.a(s([60,102,192,192,206,102,62,0]),t.t)
B.ar=A.a(s([204,204,204,252,204,204,204,0]),t.t)
B.cL=A.a(s([120,48,48,48,48,48,120,0]),t.t)
B.bN=A.a(s([30,12,12,12,204,204,120,0]),t.t)
B.bF=A.a(s([230,102,108,120,108,102,230,0]),t.t)
B.bE=A.a(s([240,96,96,96,98,102,254,0]),t.t)
B.aL=A.a(s([198,238,254,254,214,198,198,0]),t.t)
B.W=A.a(s([198,230,246,222,206,198,198,0]),t.t)
B.cV=A.a(s([56,108,198,198,198,108,56,0]),t.t)
B.bj=A.a(s([252,102,102,124,96,96,240,0]),t.t)
B.cF=A.a(s([120,204,204,204,220,120,28,0]),t.t)
B.N=A.a(s([252,102,102,124,108,102,230,0]),t.t)
B.af=A.a(s([120,204,224,112,28,204,120,0]),t.t)
B.dy=A.a(s([252,180,48,48,48,48,120,0]),t.t)
B.aI=A.a(s([204,204,204,204,204,204,252,0]),t.t)
B.a0=A.a(s([204,204,204,204,204,120,48,0]),t.t)
B.cO=A.a(s([198,198,198,214,254,238,198,0]),t.t)
B.cI=A.a(s([198,198,108,56,56,108,198,0]),t.t)
B.a2=A.a(s([204,204,204,120,48,48,120,0]),t.t)
B.R=A.a(s([254,198,140,24,50,102,254,0]),t.t)
B.bv=A.a(s([120,96,96,96,96,96,120,0]),t.t)
B.cA=A.a(s([192,96,48,24,12,6,2,0]),t.t)
B.bx=A.a(s([120,24,24,24,24,24,120,0]),t.t)
B.dn=A.a(s([16,56,108,198,0,0,0,0]),t.t)
B.M=A.a(s([0,0,0,0,0,0,0,255]),t.t)
B.aJ=A.a(s([48,48,24,0,0,0,0,0]),t.t)
B.de=A.a(s([0,0,120,12,124,204,118,0]),t.t)
B.ce=A.a(s([224,96,96,124,102,102,220,0]),t.t)
B.cH=A.a(s([0,0,120,204,192,204,120,0]),t.t)
B.b4=A.a(s([28,12,12,124,204,204,118,0]),t.t)
B.dr=A.a(s([0,0,120,204,252,192,120,0]),t.t)
B.aO=A.a(s([56,108,96,240,96,96,240,0]),t.t)
B.cE=A.a(s([0,0,118,204,204,124,12,248]),t.t)
B.az=A.a(s([224,96,108,118,102,102,230,0]),t.t)
B.cu=A.a(s([48,0,112,48,48,48,120,0]),t.t)
B.bI=A.a(s([12,0,12,12,12,204,204,120]),t.t)
B.bb=A.a(s([224,96,102,108,120,108,230,0]),t.t)
B.bK=A.a(s([112,48,48,48,48,48,120,0]),t.t)
B.bs=A.a(s([0,0,204,254,254,214,198,0]),t.t)
B.bL=A.a(s([0,0,248,204,204,204,204,0]),t.t)
B.be=A.a(s([0,0,120,204,204,204,120,0]),t.t)
B.dv=A.a(s([0,0,220,102,102,124,96,240]),t.t)
B.ds=A.a(s([0,0,118,204,204,124,12,30]),t.t)
B.bp=A.a(s([0,0,220,118,102,96,240,0]),t.t)
B.cY=A.a(s([0,0,124,192,120,12,248,0]),t.t)
B.cR=A.a(s([16,48,124,48,48,52,24,0]),t.t)
B.c8=A.a(s([0,0,204,204,204,204,118,0]),t.t)
B.b2=A.a(s([0,0,204,204,204,120,48,0]),t.t)
B.bi=A.a(s([0,0,198,214,254,254,108,0]),t.t)
B.bG=A.a(s([0,0,198,108,56,108,198,0]),t.t)
B.dB=A.a(s([0,0,204,204,204,124,12,248]),t.t)
B.dc=A.a(s([0,0,252,152,48,100,252,0]),t.t)
B.b8=A.a(s([28,48,48,224,48,48,28,0]),t.t)
B.cX=A.a(s([24,24,24,0,24,24,24,0]),t.t)
B.aD=A.a(s([224,48,48,28,48,48,224,0]),t.t)
B.dL=A.a(s([118,220,0,0,0,0,0,0]),t.t)
B.b1=A.a(s([0,16,56,108,198,198,254,0]),t.t)
B.au=A.a(s([120,204,192,204,120,24,12,120]),t.t)
B.da=A.a(s([0,204,0,204,204,204,126,0]),t.t)
B.dA=A.a(s([28,0,120,204,252,192,120,0]),t.t)
B.c1=A.a(s([126,195,60,6,62,102,63,0]),t.t)
B.ah=A.a(s([204,0,120,12,124,204,126,0]),t.t)
B.b5=A.a(s([224,0,120,12,124,204,126,0]),t.t)
B.a7=A.a(s([48,48,120,12,124,204,126,0]),t.t)
B.bl=A.a(s([0,0,120,192,192,120,12,56]),t.t)
B.dj=A.a(s([126,195,60,102,126,96,60,0]),t.t)
B.aM=A.a(s([204,0,120,204,252,192,120,0]),t.t)
B.cZ=A.a(s([224,0,120,204,252,192,120,0]),t.t)
B.db=A.a(s([204,0,112,48,48,48,120,0]),t.t)
B.cP=A.a(s([124,198,56,24,24,24,60,0]),t.t)
B.aY=A.a(s([224,0,112,48,48,48,120,0]),t.t)
B.dG=A.a(s([198,56,108,198,254,198,198,0]),t.t)
B.cW=A.a(s([48,48,0,120,204,252,204,0]),t.t)
B.bD=A.a(s([28,0,252,96,120,96,252,0]),t.t)
B.dz=A.a(s([0,0,127,12,127,204,127,0]),t.t)
B.aR=A.a(s([62,108,204,254,204,204,206,0]),t.t)
B.dt=A.a(s([120,204,0,120,204,204,120,0]),t.t)
B.ad=A.a(s([0,204,0,120,204,204,120,0]),t.t)
B.dI=A.a(s([0,224,0,120,204,204,120,0]),t.t)
B.aP=A.a(s([120,204,0,204,204,204,126,0]),t.t)
B.cS=A.a(s([0,224,0,204,204,204,126,0]),t.t)
B.ax=A.a(s([0,204,0,204,204,124,12,248]),t.t)
B.aj=A.a(s([195,24,60,102,102,60,24,0]),t.t)
B.d4=A.a(s([204,0,204,204,204,204,120,0]),t.t)
B.Y=A.a(s([24,24,126,192,192,126,24,24]),t.t)
B.aG=A.a(s([56,108,100,240,96,230,252,0]),t.t)
B.b_=A.a(s([204,204,120,252,48,252,48,48]),t.t)
B.df=A.a(s([248,204,204,250,198,207,198,199]),t.t)
B.bO=A.a(s([14,27,24,60,24,24,216,112]),t.t)
B.aC=A.a(s([28,0,120,12,124,204,126,0]),t.t)
B.cd=A.a(s([56,0,112,48,48,48,120,0]),t.t)
B.aF=A.a(s([0,28,0,120,204,204,120,0]),t.t)
B.cx=A.a(s([0,28,0,204,204,204,126,0]),t.t)
B.aV=A.a(s([0,248,0,248,204,204,204,0]),t.t)
B.cN=A.a(s([252,0,204,236,252,220,204,0]),t.t)
B.ae=A.a(s([60,108,108,62,0,126,0,0]),t.t)
B.ca=A.a(s([56,108,108,56,0,124,0,0]),t.t)
B.d5=A.a(s([48,0,48,96,192,204,120,0]),t.t)
B.aX=A.a(s([0,0,0,252,192,192,0,0]),t.t)
B.aE=A.a(s([0,0,0,252,12,12,0,0]),t.t)
B.d_=A.a(s([195,198,204,222,51,102,204,15]),t.t)
B.aw=A.a(s([195,198,204,219,55,111,207,3]),t.t)
B.bR=A.a(s([24,24,0,24,24,24,24,0]),t.t)
B.bQ=A.a(s([0,51,102,204,102,51,0,0]),t.t)
B.ba=A.a(s([0,204,102,51,102,204,0,0]),t.t)
B.cz=A.a(s([34,136,34,136,34,136,34,136]),t.t)
B.du=A.a(s([85,170,85,170,85,170,85,170]),t.t)
B.bJ=A.a(s([219,119,219,238,219,119,219,238]),t.t)
B.b0=A.a(s([24,24,24,24,24,24,24,24]),t.t)
B.aW=A.a(s([24,24,24,24,248,24,24,24]),t.t)
B.bY=A.a(s([24,24,248,24,248,24,24,24]),t.t)
B.dK=A.a(s([54,54,54,54,246,54,54,54]),t.t)
B.cl=A.a(s([0,0,0,0,254,54,54,54]),t.t)
B.aS=A.a(s([0,0,248,24,248,24,24,24]),t.t)
B.ab=A.a(s([54,54,246,6,246,54,54,54]),t.t)
B.cr=A.a(s([54,54,54,54,54,54,54,54]),t.t)
B.c9=A.a(s([0,0,254,6,246,54,54,54]),t.t)
B.cv=A.a(s([54,54,246,6,254,0,0,0]),t.t)
B.ap=A.a(s([54,54,54,54,254,0,0,0]),t.t)
B.a1=A.a(s([24,24,248,24,248,0,0,0]),t.t)
B.a6=A.a(s([0,0,0,0,248,24,24,24]),t.t)
B.a_=A.a(s([24,24,24,24,31,0,0,0]),t.t)
B.bW=A.a(s([24,24,24,24,255,0,0,0]),t.t)
B.bn=A.a(s([0,0,0,0,255,24,24,24]),t.t)
B.d3=A.a(s([24,24,24,24,31,24,24,24]),t.t)
B.bU=A.a(s([0,0,0,0,255,0,0,0]),t.t)
B.cs=A.a(s([24,24,24,24,255,24,24,24]),t.t)
B.cD=A.a(s([24,24,31,24,31,24,24,24]),t.t)
B.bc=A.a(s([54,54,54,54,55,54,54,54]),t.t)
B.dq=A.a(s([54,54,55,48,63,0,0,0]),t.t)
B.di=A.a(s([0,0,63,48,55,54,54,54]),t.t)
B.bH=A.a(s([54,54,247,0,255,0,0,0]),t.t)
B.bw=A.a(s([0,0,255,0,247,54,54,54]),t.t)
B.aU=A.a(s([54,54,55,48,55,54,54,54]),t.t)
B.aT=A.a(s([0,0,255,0,255,0,0,0]),t.t)
B.dC=A.a(s([54,54,247,0,247,54,54,54]),t.t)
B.cJ=A.a(s([24,24,255,0,255,0,0,0]),t.t)
B.K=A.a(s([54,54,54,54,255,0,0,0]),t.t)
B.dw=A.a(s([0,0,255,0,255,24,24,24]),t.t)
B.c3=A.a(s([0,0,0,0,255,54,54,54]),t.t)
B.cm=A.a(s([54,54,54,54,63,0,0,0]),t.t)
B.br=A.a(s([24,24,31,24,31,0,0,0]),t.t)
B.cg=A.a(s([0,0,31,24,31,24,24,24]),t.t)
B.cG=A.a(s([0,0,0,0,63,54,54,54]),t.t)
B.cM=A.a(s([54,54,54,54,255,54,54,54]),t.t)
B.bM=A.a(s([24,24,255,24,255,24,24,24]),t.t)
B.dg=A.a(s([24,24,24,24,248,0,0,0]),t.t)
B.b7=A.a(s([0,0,0,0,31,24,24,24]),t.t)
B.c4=A.a(s([255,255,255,255,255,255,255,255]),t.t)
B.c7=A.a(s([0,0,0,0,255,255,255,255]),t.t)
B.bh=A.a(s([240,240,240,240,240,240,240,240]),t.t)
B.co=A.a(s([15,15,15,15,15,15,15,15]),t.t)
B.d2=A.a(s([255,255,255,255,0,0,0,0]),t.t)
B.dJ=A.a(s([0,0,118,220,200,220,118,0]),t.t)
B.dl=A.a(s([0,120,204,248,204,248,192,192]),t.t)
B.an=A.a(s([0,252,204,192,192,192,192,0]),t.t)
B.c6=A.a(s([0,254,108,108,108,108,108,0]),t.t)
B.dh=A.a(s([252,204,96,48,96,204,252,0]),t.t)
B.bk=A.a(s([0,0,126,216,216,216,112,0]),t.t)
B.bq=A.a(s([0,102,102,102,102,124,96,192]),t.t)
B.cB=A.a(s([0,118,220,24,24,24,24,0]),t.t)
B.ag=A.a(s([252,48,120,204,204,120,48,252]),t.t)
B.aH=A.a(s([56,108,198,254,198,108,56,0]),t.t)
B.ak=A.a(s([56,108,198,198,108,108,238,0]),t.t)
B.L=A.a(s([28,48,24,124,204,204,120,0]),t.t)
B.dx=A.a(s([0,0,126,219,219,126,0,0]),t.t)
B.bm=A.a(s([6,12,126,219,219,126,96,192]),t.t)
B.a9=A.a(s([56,96,192,248,192,96,56,0]),t.t)
B.ci=A.a(s([120,204,204,204,204,204,204,0]),t.t)
B.cK=A.a(s([0,252,0,252,0,252,0,0]),t.t)
B.a5=A.a(s([48,48,252,48,48,0,252,0]),t.t)
B.b9=A.a(s([96,48,24,48,96,0,252,0]),t.t)
B.cU=A.a(s([24,48,96,48,24,0,252,0]),t.t)
B.bg=A.a(s([14,27,27,24,24,24,24,24]),t.t)
B.d9=A.a(s([24,24,24,24,24,216,216,112]),t.t)
B.cc=A.a(s([48,48,0,252,0,48,48,0]),t.t)
B.Q=A.a(s([0,118,220,0,118,220,0,0]),t.t)
B.cy=A.a(s([56,108,108,56,0,0,0,0]),t.t)
B.S=A.a(s([0,0,0,24,24,0,0,0]),t.t)
B.dm=A.a(s([0,0,0,0,24,0,0,0]),t.t)
B.V=A.a(s([15,12,12,12,236,108,60,28]),t.t)
B.bV=A.a(s([120,108,108,108,108,0,0,0]),t.t)
B.at=A.a(s([112,24,48,96,120,0,0,0]),t.t)
B.d1=A.a(s([0,0,60,60,60,60,0,0]),t.t)
B.dN=new A.bn(["\u263a",B.d8,"\u263b",B.aa,"\u2665",B.dF,"\u2666",B.c5,"\u2663",B.b3,"\u2660",B.bf,"\u2022",B.ay,"\u25d8",B.aB,"\u25cb",B.aN,"\u25d9",B.cT,"\u2642",B.dE,"\u2640",B.dD,"\u266a",B.cQ,"\u266b",B.U,"\u263c",B.Z,"\u25ba",B.av,"\u25c4",B.bB,"\u2195",B.cj,"\u203c",B.cf,"\xb6",B.cp,"\xa7",B.cq,"\u25ac",B.bP,"\u21a8",B.bS,"\u2191",B.P,"\u2193",B.dd,"\u2192",B.d6,"\u2190",B.as,"\u221f",B.bX,"\u2194",B.bu,"\u25b2",B.a8,"\u25bc",B.bT," ",B.aZ,"!",B.bC,'"',B.X,"#",B.am,"$",B.c0,"%",B.O,"&",B.cC,"'",B.al,"(",B.T,")",B.by,"*",B.ct,"+",B.dM,",",B.c2,"-",B.bt,".",B.ch,"/",B.a3,"0",B.b6,"1",B.ck,"2",B.bZ,"3",B.dH,"4",B.bA,"5",B.d7,"6",B.dp,"7",B.c_,"8",B.cw,"9",B.bd,":",B.d0,";",B.aQ,"<",B.bz,"=",B.bo,">",B.aA,"?",B.aq,"@",B.dk,"A",B.cb,"B",B.aK,"C",B.ac,"D",B.a4,"E",B.ai,"F",B.cn,"G",B.ao,"H",B.ar,"I",B.cL,"J",B.bN,"K",B.bF,"L",B.bE,"M",B.aL,"N",B.W,"O",B.cV,"P",B.bj,"Q",B.cF,"R",B.N,"S",B.af,"T",B.dy,"U",B.aI,"V",B.a0,"W",B.cO,"X",B.cI,"Y",B.a2,"Z",B.R,"[",B.bv,"\\",B.cA,"]",B.bx,"^",B.dn,"_",B.M,"`",B.aJ,"a",B.de,"b",B.ce,"c",B.cH,"d",B.b4,"e",B.dr,"f",B.aO,"g",B.cE,"h",B.az,"i",B.cu,"j",B.bI,"k",B.bb,"l",B.bK,"m",B.bs,"n",B.bL,"o",B.be,"p",B.dv,"q",B.ds,"r",B.bp,"s",B.cY,"t",B.cR,"u",B.c8,"v",B.b2,"w",B.bi,"x",B.bG,"y",B.dB,"z",B.dc,"{",B.b8,"|",B.cX,"}",B.aD,"~",B.dL,"\u2302",B.b1,"\xc7",B.au,"\xfc",B.da,"\xe9",B.dA,"\xe2",B.c1,"\xe4",B.ah,"\xe0",B.b5,"\xe5",B.a7,"\xe7",B.bl,"\xea",B.dj,"\xeb",B.aM,"\xe8",B.cZ,"\xef",B.db,"\xee",B.cP,"\xec",B.aY,"\xc4",B.dG,"\xc5",B.cW,"\xc9",B.bD,"\xe6",B.dz,"\xc6",B.aR,"\xf4",B.dt,"\xf6",B.ad,"\xf2",B.dI,"\xfb",B.aP,"\xf9",B.cS,"\xff",B.ax,"\xd6",B.aj,"\xdc",B.d4,"\xa2",B.Y,"\xa3",B.aG,"\xa5",B.b_,"\u20a7",B.df,"\u0192",B.bO,"\xe1",B.aC,"\xed",B.cd,"\xf3",B.aF,"\xfa",B.cx,"\xf1",B.aV,"\xd1",B.cN,"\xaa",B.ae,"\xba",B.ca,"\xbf",B.d5,"\u2310",B.aX,"\xac",B.aE,"\xbd",B.d_,"\xbc",B.aw,"\xa1",B.bR,"\xab",B.bQ,"\xbb",B.ba,"\u2591",B.cz,"\u2592",B.du,"\u2593",B.bJ,"\u2502",B.b0,"\u2524",B.aW,"\u2561",B.bY,"\u2562",B.dK,"\u2556",B.cl,"\u2555",B.aS,"\u2563",B.ab,"\u2551",B.cr,"\u2557",B.c9,"\u255d",B.cv,"\u255c",B.ap,"\u255b",B.a1,"\u2510",B.a6,"\u2514",B.a_,"\u2534",B.bW,"\u252c",B.bn,"\u251c",B.d3,"\u2500",B.bU,"\u253c",B.cs,"\u255e",B.cD,"\u255f",B.bc,"\u255a",B.dq,"\u2554",B.di,"\u2569",B.bH,"\u2566",B.bw,"\u2560",B.aU,"\u2550",B.aT,"\u256c",B.dC,"\u2567",B.cJ,"\u2568",B.K,"\u2564",B.dw,"\u2565",B.c3,"\u2559",B.cm,"\u2558",B.br,"\u2552",B.cg,"\u2553",B.cG,"\u256b",B.cM,"\u256a",B.bM,"\u2518",B.dg,"\u250c",B.b7,"\u2588",B.c4,"\u2584",B.c7,"\u258c",B.bh,"\u2590",B.co,"\u2580",B.d2,"\u03b1",B.dJ,"\xdf",B.dl,"\u0393",B.an,"\u03c0",B.c6,"\u03a3",B.dh,"\u03c3",B.bk,"\xb5",B.bq,"\u03c4",B.cB,"\u03a6",B.ag,"\u0398",B.aH,"\u03a9",B.ak,"\u03b4",B.L,"\u221e",B.dx,"\u03c6",B.bm,"\u03b5",B.a9,"\u2229",B.ci,"\u2261",B.cK,"\xb1",B.a5,"\u2265",B.b9,"\u2264",B.cU,"\u2320",B.bg,"\u2321",B.d9,"\xf7",B.cc,"\u2248",B.Q,"\xb0",B.cy,"\u2219",B.S,"\xb7",B.dm,"\u221a",B.V,"\u207f",B.bV,"\xb2",B.at,"\u25a0",B.d1],A.dV("bn<A,i<c>>"))
B.t=new A.E("replace")
B.dO=new A.E("inverse")
B.dP=new A.E("over")
B.dQ=new A.E("under")
B.dR=new A.E("stain")
B.dS=new A.E("delete")
B.dT=new A.E("maskDestination")
B.dU=new A.E("maskSource")
B.d=new A.Y("o")
B.i=new A.Y("x")
B.c=new A.Y("empty")
B.e=new A.ai("ready")
B.k=new A.ai("awaitingKey")
B.v=new A.ai("awaitingString")
B.w=new A.ai("awaitingMouseClick")
B.dV=A.C("im")
B.dW=A.C("io")
B.dX=A.C("fh")
B.dY=A.C("fi")
B.dZ=A.C("fl")
B.e_=A.C("fm")
B.e0=A.C("fn")
B.e1=A.C("e")
B.e2=A.C("fG")
B.e3=A.C("cG")
B.e4=A.C("fH")
B.e5=A.C("fI")})();(function staticFields(){$.d_=null
$.w=A.a([],t.f)
$.eb=null
$.e5=null
$.e4=null
$.eM=null
$.eH=null
$.eP=null
$.dk=null
$.dq=null
$.dX=null
$.b0=A.a([],A.dV("o<i<e>?>"))
$.an=null
$.bb=null
$.bc=null
$.dP=!1
$.f=B.b})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"ip","du",()=>A.i5("_$dart_dartClosure"))
s($,"iK","f3",()=>B.b.b0(new A.ds()))
s($,"ix","eU",()=>A.K(A.cF({
toString:function(){return"$receiver$"}})))
s($,"iy","eV",()=>A.K(A.cF({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"iz","eW",()=>A.K(A.cF(null)))
s($,"iA","eX",()=>A.K(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"iD","f_",()=>A.K(A.cF(void 0)))
s($,"iE","f0",()=>A.K(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"iC","eZ",()=>A.K(A.eg(null)))
s($,"iB","eY",()=>A.K(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"iG","f2",()=>A.K(A.eg(void 0)))
s($,"iF","f1",()=>A.K(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"iH","e0",()=>A.fJ())
s($,"ir","dv",()=>$.f3())
s($,"iI","dw",()=>A.e_(B.e1))
s($,"iw","eT",()=>A.dC(8,0,t.S))
s($,"iv","eS",()=>A.dC(8,255,t.S))
s($,"iL","f4",()=>B.E)
s($,"iM","M",()=>{var r=A.hk(A.i6(A.ii(),"document"),"getElementById","four")
r.toString
r=A.fD("#1f1f1f",31,r,15)
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.bw,ArrayBufferView:A.aM,DataView:A.bx,Float32Array:A.by,Float64Array:A.bz,Int16Array:A.bA,Int32Array:A.bB,Int8Array:A.bC,Uint16Array:A.bD,Uint32Array:A.bE,Uint8ClampedArray:A.aN,CanvasPixelArray:A.aN,Uint8Array:A.bF})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.ae.$nativeSuperclassTag="ArrayBufferView"
A.aX.$nativeSuperclassTag="ArrayBufferView"
A.aY.$nativeSuperclassTag="ArrayBufferView"
A.aK.$nativeSuperclassTag="ArrayBufferView"
A.aZ.$nativeSuperclassTag="ArrayBufferView"
A.b_.$nativeSuperclassTag="ArrayBufferView"
A.aL.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.c2
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=four.js.map
