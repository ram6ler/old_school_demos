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
if(a[b]!==s){A.il(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.dZ(b)
return new s(c,this)}:function(){if(s===null)s=A.dZ(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.dZ(a).prototype
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
e0(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.e1==null){A.i9()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.c(A.eq("Return interceptor for "+A.n(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.d4
if(o==null)o=$.d4=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.ie(a)
if(p!=null)return p
if(typeof a=="function")return B.I
s=Object.getPrototypeOf(a)
if(s==null)return B.t
if(s===Object.prototype)return B.t
if(typeof q=="function"){o=$.d4
if(o==null)o=$.d4=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.m,enumerable:false,writable:true,configurable:true})
return B.m}return B.m},
eh(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
fy(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.eh(r))break;++b}return b},
fz(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.b(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.eh(q))break}return b},
a7(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ay.prototype
return J.bq.prototype}if(typeof a=="string")return J.a_.prototype
if(a==null)return J.az.prototype
if(typeof a=="boolean")return J.bp.prototype
if(Array.isArray(a))return J.p.prototype
if(typeof a!="object"){if(typeof a=="function")return J.Q.prototype
if(typeof a=="symbol")return J.aC.prototype
if(typeof a=="bigint")return J.aA.prototype
return a}if(a instanceof A.e)return a
return J.e0(a)},
eV(a){if(typeof a=="string")return J.a_.prototype
if(a==null)return a
if(Array.isArray(a))return J.p.prototype
if(typeof a!="object"){if(typeof a=="function")return J.Q.prototype
if(typeof a=="symbol")return J.aC.prototype
if(typeof a=="bigint")return J.aA.prototype
return a}if(a instanceof A.e)return a
return J.e0(a)},
i1(a){if(a==null)return a
if(Array.isArray(a))return J.p.prototype
if(typeof a!="object"){if(typeof a=="function")return J.Q.prototype
if(typeof a=="symbol")return J.aC.prototype
if(typeof a=="bigint")return J.aA.prototype
return a}if(a instanceof A.e)return a
return J.e0(a)},
i2(a){if(typeof a=="number")return J.aa.prototype
if(a==null)return a
if(!(a instanceof A.e))return J.a2.prototype
return a},
i3(a){if(typeof a=="string")return J.a_.prototype
if(a==null)return a
if(!(a instanceof A.e))return J.a2.prototype
return a},
a8(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.a7(a).B(a,b)},
G(a){return J.a7(a).gj(a)},
fe(a){return J.i1(a).gE(a)},
e8(a){return J.eV(a).gn(a)},
ff(a){return J.a7(a).gm(a)},
e9(a){return J.i2(a).bO(a)},
be(a){return J.a7(a).h(a)},
fg(a){return J.i3(a).bP(a)},
bn:function bn(){},
bp:function bp(){},
az:function az(){},
aB:function aB(){},
R:function R(){},
bF:function bF(){},
a2:function a2(){},
Q:function Q(){},
aA:function aA(){},
aC:function aC(){},
p:function p(a){this.$ti=a},
cb:function cb(a){this.$ti=a},
bf:function bf(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aa:function aa(){},
ay:function ay(){},
bq:function bq(){},
a_:function a_(){}},A={dE:function dE(){},
S(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
dL(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
dY(a,b,c){return a},
e2(a){var s,r
for(s=$.w.length,r=0;r<s;++r)if(a===$.w[r])return!0
return!1},
eg(){return new A.ai("No element")},
aE:function aE(a){this.a=a},
dw:function dw(){},
cp:function cp(){},
bk:function bk(){},
bt:function bt(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ax:function ax(){},
f_(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
iZ(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
n(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.be(a)
return s},
af(a){var s,r=$.ej
if(r==null)r=$.ej=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
cj(a){return A.fD(a)},
fD(a){var s,r,q,p
if(a instanceof A.e)return A.u(A.bb(a),null)
s=J.a7(a)
if(s===B.G||s===B.J||t.B.b(a)){r=B.n(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.u(A.bb(a),null)},
ek(a){if(a==null||typeof a=="number"||A.dT(a))return J.be(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.Z)return a.h(0)
if(a instanceof A.al)return a.aS(!0)
return"Instance of '"+A.cj(a)+"'"},
fE(a){var s=a.$thrownJsError
if(s==null)return null
return A.F(s)},
b(a,b){if(a==null)J.e8(a)
throw A.c(A.eU(a,b))},
eU(a,b){var s,r="index"
if(!A.eK(b))return new A.B(!0,b,r,null)
s=J.e8(a)
if(b<0||b>=s)return A.ft(b,s,a,r)
return new A.ag(null,null,!0,b,r,"Value not in range")},
dW(a){return new A.B(!0,a,null,null)},
c(a){return A.eX(new Error(),a)},
eX(a,b){var s
if(b==null)b=new A.I()
a.dartException=b
s=A.im
if("defineProperty" in Object){Object.defineProperty(a,"message",{get:s})
a.name=""}else a.toString=s
return a},
im(){return J.be(this.dartException)},
bd(a){throw A.c(a)},
e6(a,b){throw A.eX(b,a)},
c5(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.e6(A.hm(a,b,c),s)},
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
return new A.aO("'"+s+"': Cannot "+o+" "+l+k+n)},
dx(a){throw A.c(A.au(a))},
J(a){var s,r,q,p,o,n
a=A.ii(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.a([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.cG(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
cH(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
ep(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
dF(a,b){var s=b==null,r=s?null:b.method
return new A.br(a,r,s?null:b.receiver)},
N(a){if(a==null)return new A.ch(a)
if(a instanceof A.aw)return A.W(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.W(a,a.dartException)
return A.hR(a)},
W(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
hR(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.a.bu(r,16)&8191)===10)switch(q){case 438:return A.W(a,A.dF(A.n(s)+" (Error "+q+")",null))
case 445:case 5007:A.n(s)
return A.W(a,new A.aL())}}if(a instanceof TypeError){p=$.f2()
o=$.f3()
n=$.f4()
m=$.f5()
l=$.f8()
k=$.f9()
j=$.f7()
$.f6()
i=$.fb()
h=$.fa()
g=p.A(s)
if(g!=null)return A.W(a,A.dF(s,g))
else{g=o.A(s)
if(g!=null){g.method="call"
return A.W(a,A.dF(s,g))}else if(n.A(s)!=null||m.A(s)!=null||l.A(s)!=null||k.A(s)!=null||j.A(s)!=null||m.A(s)!=null||i.A(s)!=null||h.A(s)!=null)return A.W(a,new A.aL())}return A.W(a,new A.bK(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.aN()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.W(a,new A.B(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.aN()
return a},
F(a){var s
if(a instanceof A.aw)return a.b
if(a==null)return new A.b_(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.b_(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
e4(a){if(a==null)return J.G(a)
if(typeof a=="object")return A.af(a)
return J.G(a)},
hX(a){if(typeof a=="number")return B.H.gj(a)
if(a instanceof A.bZ)return A.af(a)
if(a instanceof A.al)return a.gj(a)
return A.e4(a)},
i0(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.a0(0,a[s],a[r])}return b},
hv(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.c(A.c9("Unsupported number of arguments for wrapped closure"))},
c3(a,b){var s=a.$identity
if(!!s)return s
s=A.hY(a,b)
a.$identity=s
return s},
hY(a,b){var s
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
fn(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.cq().constructor.prototype):Object.create(new A.at(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.ee(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.fj(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.ee(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
fj(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.c("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.fh)}throw A.c("Error in functionType of tearoff")},
fk(a,b,c,d){var s=A.ed
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
ee(a,b,c,d){if(c)return A.fm(a,b,d)
return A.fk(b.length,d,a,b)},
fl(a,b,c,d){var s=A.ed,r=A.fi
switch(b?-1:a){case 0:throw A.c(new A.bG("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
fm(a,b,c){var s,r
if($.eb==null)$.eb=A.ea("interceptor")
if($.ec==null)$.ec=A.ea("receiver")
s=b.length
r=A.fl(s,c,a,b)
return r},
dZ(a){return A.fn(a)},
fh(a,b){return A.b6(v.typeUniverse,A.bb(a.a),b)},
ed(a){return a.a},
fi(a){return a.b},
ea(a){var s,r,q,p=new A.at("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.c(A.as("Field name "+a+" not found.",null))},
j2(a){throw A.c(new A.bQ(a))},
i4(a){return v.getIsolateTag(a)},
ij(){return self},
ie(a){var s,r,q,p,o,n=$.eW.$1(a),m=$.dp[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.du[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.eR.$2(a,n)
if(q!=null){m=$.dp[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.du[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.dv(s)
$.dp[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.du[n]=s
return s}if(p==="-"){o=A.dv(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.eY(a,s)
if(p==="*")throw A.c(A.eq(n))
if(v.leafTags[n]===true){o=A.dv(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.eY(a,s)},
eY(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.e3(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
dv(a){return J.e3(a,!1,null,!!a.$iv)},
ig(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.dv(s)
else return J.e3(s,c,null,null)},
i9(){if(!0===$.e1)return
$.e1=!0
A.ia()},
ia(){var s,r,q,p,o,n,m,l
$.dp=Object.create(null)
$.du=Object.create(null)
A.i8()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.eZ.$1(o)
if(n!=null){m=A.ig(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
i8(){var s,r,q,p,o,n,m=B.w()
m=A.aq(B.x,A.aq(B.y,A.aq(B.o,A.aq(B.o,A.aq(B.z,A.aq(B.A,A.aq(B.B(B.n),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.eW=new A.dr(p)
$.eR=new A.ds(o)
$.eZ=new A.dt(n)},
aq(a,b){return a(b)||b},
hZ(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
ik(a,b,c){var s=a.indexOf(b,c)
return s>=0},
ii(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
z:function z(a,b){this.a=a
this.b=b},
bj:function bj(){},
bl:function bl(a,b){this.a=a
this.$ti=b},
cG:function cG(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aL:function aL(){},
br:function br(a,b,c){this.a=a
this.b=b
this.c=c},
bK:function bK(a){this.a=a},
ch:function ch(a){this.a=a},
aw:function aw(a,b){this.a=a
this.b=b},
b_:function b_(a){this.a=a
this.b=null},
Z:function Z(){},
c6:function c6(){},
c7:function c7(){},
cv:function cv(){},
cq:function cq(){},
at:function at(a,b){this.a=a
this.b=b},
bQ:function bQ(a){this.a=a},
bG:function bG(a){this.a=a},
a0:function a0(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cc:function cc(a,b){this.a=a
this.b=b
this.c=null},
aF:function aF(a){this.a=a},
bs:function bs(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
aD:function aD(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dr:function dr(a){this.a=a},
ds:function ds(a){this.a=a},
dt:function dt(a){this.a=a},
al:function al(){},
bW:function bW(){},
a5(a,b,c){if(a>>>0!==a||a>=c)throw A.c(A.eU(b,a))},
bu:function bu(){},
aJ:function aJ(){},
bv:function bv(){},
ad:function ad(){},
aH:function aH(){},
aI:function aI(){},
bw:function bw(){},
bx:function bx(){},
by:function by(){},
bz:function bz(){},
bA:function bA(){},
bB:function bB(){},
bC:function bC(){},
aK:function aK(){},
bD:function bD(){},
aU:function aU(){},
aV:function aV(){},
aW:function aW(){},
aX:function aX(){},
el(a,b){var s=b.c
return s==null?b.c=A.dQ(a,b.x,!0):s},
dI(a,b){var s=b.c
return s==null?b.c=A.b4(a,"H",[b.x]):s},
em(a){var s=a.w
if(s===6||s===7||s===8)return A.em(a.x)
return s===12||s===13},
fH(a){return a.as},
e_(a){return A.c_(v.typeUniverse,a,!1)},
V(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.V(a1,s,a3,a4)
if(r===s)return a2
return A.eB(a1,r,!0)
case 7:s=a2.x
r=A.V(a1,s,a3,a4)
if(r===s)return a2
return A.dQ(a1,r,!0)
case 8:s=a2.x
r=A.V(a1,s,a3,a4)
if(r===s)return a2
return A.ez(a1,r,!0)
case 9:q=a2.y
p=A.ap(a1,q,a3,a4)
if(p===q)return a2
return A.b4(a1,a2.x,p)
case 10:o=a2.x
n=A.V(a1,o,a3,a4)
m=a2.y
l=A.ap(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.dO(a1,n,l)
case 11:k=a2.x
j=a2.y
i=A.ap(a1,j,a3,a4)
if(i===j)return a2
return A.eA(a1,k,i)
case 12:h=a2.x
g=A.V(a1,h,a3,a4)
f=a2.y
e=A.hO(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.ey(a1,g,e)
case 13:d=a2.y
a4+=d.length
c=A.ap(a1,d,a3,a4)
o=a2.x
n=A.V(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.dP(a1,n,c,!0)
case 14:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.c(A.bh("Attempted to substitute unexpected RTI kind "+a0))}},
ap(a,b,c,d){var s,r,q,p,o=b.length,n=A.dc(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.V(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
hP(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.dc(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.V(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
hO(a,b,c,d){var s,r=b.a,q=A.ap(a,r,c,d),p=b.b,o=A.ap(a,p,c,d),n=b.c,m=A.hP(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.bU()
s.a=q
s.b=o
s.c=m
return s},
a(a,b){a[v.arrayRti]=b
return a},
eT(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.i7(s)
return a.$S()}return null},
ib(a,b){var s
if(A.em(b))if(a instanceof A.Z){s=A.eT(a)
if(s!=null)return s}return A.bb(a)},
bb(a){if(a instanceof A.e)return A.am(a)
if(Array.isArray(a))return A.dR(a)
return A.dS(J.a7(a))},
dR(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
am(a){var s=a.$ti
return s!=null?s:A.dS(a)},
dS(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.ht(a,s)},
ht(a,b){var s=a instanceof A.Z?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.hc(v.typeUniverse,s.name)
b.$ccache=r
return r},
i7(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.c_(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
i6(a){return A.a6(A.am(a))},
dV(a){var s
if(a instanceof A.al)return A.i_(a.$r,a.aL())
s=a instanceof A.Z?A.eT(a):null
if(s!=null)return s
if(t.R.b(a))return J.ff(a).a
if(Array.isArray(a))return A.dR(a)
return A.bb(a)},
a6(a){var s=a.r
return s==null?a.r=A.eF(a):s},
eF(a){var s,r,q=a.as,p=q.replace(/\*/g,"")
if(p===q)return a.r=new A.bZ(a)
s=A.c_(v.typeUniverse,p,!0)
r=s.r
return r==null?s.r=A.eF(s):r},
i_(a,b){var s,r,q=b,p=q.length
if(p===0)return t.F
if(0>=p)return A.b(q,0)
s=A.b6(v.typeUniverse,A.dV(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.b(q,r)
s=A.eC(v.typeUniverse,s,A.dV(q[r]))}return A.b6(v.typeUniverse,s,a)},
A(a){return A.a6(A.c_(v.typeUniverse,a,!1))},
hs(a){var s,r,q,p,o,n,m=this
if(m===t.K)return A.L(m,a,A.hA)
if(!A.M(m))s=m===t._
else s=!0
if(s)return A.L(m,a,A.hE)
s=m.w
if(s===7)return A.L(m,a,A.hq)
if(s===1)return A.L(m,a,A.eL)
r=s===6?m.x:m
q=r.w
if(q===8)return A.L(m,a,A.hw)
if(r===t.S)p=A.eK
else if(r===t.i||r===t.H)p=A.hz
else if(r===t.N)p=A.hC
else p=r===t.y?A.dT:null
if(p!=null)return A.L(m,a,p)
if(q===9){o=r.x
if(r.y.every(A.ic)){m.f="$i"+o
if(o==="i")return A.L(m,a,A.hy)
return A.L(m,a,A.hD)}}else if(q===11){n=A.hZ(r.x,r.y)
return A.L(m,a,n==null?A.eL:n)}return A.L(m,a,A.ho)},
L(a,b,c){a.b=c
return a.b(b)},
hr(a){var s,r=this,q=A.hn
if(!A.M(r))s=r===t._
else s=!0
if(s)q=A.hf
else if(r===t.K)q=A.he
else{s=A.bc(r)
if(s)q=A.hp}r.a=q
return r.a(a)},
c0(a){var s=a.w,r=!0
if(!A.M(a))if(!(a===t._))if(!(a===t.A))if(s!==7)if(!(s===6&&A.c0(a.x)))r=s===8&&A.c0(a.x)||a===t.P||a===t.T
return r},
ho(a){var s=this
if(a==null)return A.c0(s)
return A.id(v.typeUniverse,A.ib(a,s),s)},
hq(a){if(a==null)return!0
return this.x.b(a)},
hD(a){var s,r=this
if(a==null)return A.c0(r)
s=r.f
if(a instanceof A.e)return!!a[s]
return!!J.a7(a)[s]},
hy(a){var s,r=this
if(a==null)return A.c0(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.e)return!!a[s]
return!!J.a7(a)[s]},
hn(a){var s=this
if(a==null){if(A.bc(s))return a}else if(s.b(a))return a
A.eG(a,s)},
hp(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.eG(a,s)},
eG(a,b){throw A.c(A.h3(A.es(a,A.u(b,null))))},
es(a,b){return A.c8(a)+": type '"+A.u(A.dV(a),null)+"' is not a subtype of type '"+b+"'"},
h3(a){return new A.b2("TypeError: "+a)},
t(a,b){return new A.b2("TypeError: "+A.es(a,b))},
hw(a){var s=this,r=s.w===6?s.x:s
return r.x.b(a)||A.dI(v.typeUniverse,r).b(a)},
hA(a){return a!=null},
he(a){if(a!=null)return a
throw A.c(A.t(a,"Object"))},
hE(a){return!0},
hf(a){return a},
eL(a){return!1},
dT(a){return!0===a||!1===a},
iJ(a){if(!0===a)return!0
if(!1===a)return!1
throw A.c(A.t(a,"bool"))},
iL(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.c(A.t(a,"bool"))},
iK(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.c(A.t(a,"bool?"))},
iM(a){if(typeof a=="number")return a
throw A.c(A.t(a,"double"))},
iO(a){if(typeof a=="number")return a
if(a==null)return a
throw A.c(A.t(a,"double"))},
iN(a){if(typeof a=="number")return a
if(a==null)return a
throw A.c(A.t(a,"double?"))},
eK(a){return typeof a=="number"&&Math.floor(a)===a},
iP(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.c(A.t(a,"int"))},
iR(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.c(A.t(a,"int"))},
iQ(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.c(A.t(a,"int?"))},
hz(a){return typeof a=="number"},
iS(a){if(typeof a=="number")return a
throw A.c(A.t(a,"num"))},
iU(a){if(typeof a=="number")return a
if(a==null)return a
throw A.c(A.t(a,"num"))},
iT(a){if(typeof a=="number")return a
if(a==null)return a
throw A.c(A.t(a,"num?"))},
hC(a){return typeof a=="string"},
iV(a){if(typeof a=="string")return a
throw A.c(A.t(a,"String"))},
iX(a){if(typeof a=="string")return a
if(a==null)return a
throw A.c(A.t(a,"String"))},
iW(a){if(typeof a=="string")return a
if(a==null)return a
throw A.c(A.t(a,"String?"))},
eO(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.u(a[q],b)
return s},
hJ(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.eO(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.u(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
eH(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", ",a3=null
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
if(l===9){p=A.hQ(a.x)
o=a.y
return o.length>0?p+("<"+A.eO(o,b)+">"):p}if(l===11)return A.hJ(a,b)
if(l===12)return A.eH(a,b,null)
if(l===13)return A.eH(a.x,b,a.y)
if(l===14){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.b(b,n)
return b[n]}return"?"},
hQ(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
hd(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
hc(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.c_(a,b,!1)
else if(typeof m=="number"){s=m
r=A.b5(a,5,"#")
q=A.dc(s)
for(p=0;p<s;++p)q[p]=r
o=A.b4(a,b,q)
n[b]=o
return o}else return m},
hb(a,b){return A.eD(a.tR,b)},
ha(a,b){return A.eD(a.eT,b)},
c_(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.ew(A.eu(a,null,b,c))
r.set(b,s)
return s},
b6(a,b,c){var s,r,q=b.z
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
q=A.dO(a,b,c.w===10?c.y:[c])
p.set(s,q)
return q},
K(a,b){b.a=A.hr
b.b=A.hs
return b},
b5(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.x(null,null)
s.w=b
s.as=c
r=A.K(a,s)
a.eC.set(c,r)
return r},
eB(a,b,c){var s,r=b.as+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.h8(a,b,r,c)
a.eC.set(r,s)
return s},
h8(a,b,c,d){var s,r,q
if(d){s=b.w
if(!A.M(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.x(null,null)
q.w=6
q.x=b
q.as=c
return A.K(a,q)},
dQ(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.h7(a,b,r,c)
a.eC.set(r,s)
return s},
h7(a,b,c,d){var s,r,q,p
if(d){s=b.w
r=!0
if(!A.M(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.bc(b.x)
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.x
if(q.w===8&&A.bc(q.x))return q
else return A.el(a,b)}}p=new A.x(null,null)
p.w=7
p.x=b
p.as=c
return A.K(a,p)},
ez(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.h5(a,b,r,c)
a.eC.set(r,s)
return s},
h5(a,b,c,d){var s,r
if(d){s=b.w
if(A.M(b)||b===t.K||b===t._)return b
else if(s===1)return A.b4(a,"H",[b])
else if(b===t.P||b===t.T)return t.O}r=new A.x(null,null)
r.w=8
r.x=b
r.as=c
return A.K(a,r)},
h9(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.x(null,null)
s.w=14
s.x=b
s.as=q
r=A.K(a,s)
a.eC.set(q,r)
return r},
b3(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
h4(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
b4(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.b3(c)+">"
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
dO(a,b,c){var s,r,q,p,o,n
if(b.w===10){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.b3(r)+">")
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
eA(a,b,c){var s,r,q="+"+(b+"("+A.b3(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.x(null,null)
s.w=11
s.x=b
s.y=c
s.as=q
r=A.K(a,s)
a.eC.set(q,r)
return r},
ey(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.b3(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.b3(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.h4(i)+"}"}r=n+(g+")")
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
dP(a,b,c,d){var s,r=b.as+("<"+A.b3(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.h6(a,b,c,r,d)
a.eC.set(r,s)
return s},
h6(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.dc(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.V(a,b,r,0)
m=A.ap(a,c,r,0)
return A.dP(a,n,m,c!==m)}}l=new A.x(null,null)
l.w=13
l.x=b
l.y=c
l.as=d
return A.K(a,l)},
eu(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
ew(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.fX(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.ev(a,r,l,k,!1)
else if(q===46)r=A.ev(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.U(a.u,a.e,k.pop()))
break
case 94:k.push(A.h9(a.u,k.pop()))
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
case 62:A.fZ(a,k)
break
case 38:A.fY(a,k)
break
case 42:p=a.u
k.push(A.eB(p,A.U(p,a.e,k.pop()),a.n))
break
case 63:p=a.u
k.push(A.dQ(p,A.U(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.ez(p,A.U(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.fW(a,k)
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
A.h0(a.u,a.e,o)
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
return A.U(a.u,a.e,m)},
fX(a,b,c,d){var s,r,q=b-48
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
if(o.w===10)o=o.x
n=A.hd(s,o.x)[p]
if(n==null)A.bd('No "'+p+'" in "'+A.fH(o)+'"')
d.push(A.b6(s,o,n))}else d.push(p)
return m},
fZ(a,b){var s,r=a.u,q=A.et(a,b),p=b.pop()
if(typeof p=="string")b.push(A.b4(r,p,q))
else{s=A.U(r,a.e,p)
switch(s.w){case 12:b.push(A.dP(r,s,q,a.n))
break
default:b.push(A.dO(r,s,q))
break}}},
fW(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
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
r=A.U(p,a.e,o)
q=new A.bU()
q.a=s
q.b=n
q.c=m
b.push(A.ey(p,r,q))
return
case-4:b.push(A.eA(p,b.pop(),s))
return
default:throw A.c(A.bh("Unexpected state under `()`: "+A.n(o)))}},
fY(a,b){var s=b.pop()
if(0===s){b.push(A.b5(a.u,1,"0&"))
return}if(1===s){b.push(A.b5(a.u,4,"1&"))
return}throw A.c(A.bh("Unexpected extended operation "+A.n(s)))},
et(a,b){var s=b.splice(a.p)
A.ex(a.u,a.e,s)
a.p=b.pop()
return s},
U(a,b,c){if(typeof c=="string")return A.b4(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.h_(a,b,c)}else return c},
ex(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.U(a,b,c[s])},
h0(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.U(a,b,c[s])},
h_(a,b,c){var s,r,q=b.w
if(q===10){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==9)throw A.c(A.bh("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.c(A.bh("Bad index "+c+" for "+b.h(0)))},
id(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.o(a,b,null,c,null,!1)?1:0
r.set(c,s)}if(0===s)return!1
if(1===s)return!0
return!0},
o(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i
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
if(q)if(A.o(a,c[b.x],c,d,e,!1))return!0
p=d.w
s=b===t.P||b===t.T
if(s){if(p===8)return A.o(a,b,c,d.x,e,!1)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return A.o(a,b.x,c,d,e,!1)
if(r===6)return A.o(a,b.x,c,d,e,!1)
return r!==7}if(r===6)return A.o(a,b.x,c,d,e,!1)
if(p===6){s=A.el(a,d)
return A.o(a,b,c,s,e,!1)}if(r===8){if(!A.o(a,b.x,c,d,e,!1))return!1
return A.o(a,A.dI(a,b),c,d,e,!1)}if(r===7){s=A.o(a,t.P,c,d,e,!1)
return s&&A.o(a,b.x,c,d,e,!1)}if(p===8){if(A.o(a,b,c,d.x,e,!1))return!0
return A.o(a,b,c,A.dI(a,d),e,!1)}if(p===7){s=A.o(a,b,c,t.P,e,!1)
return s||A.o(a,b,c,d.x,e,!1)}if(q)return!1
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
if(!A.o(a,j,c,i,e,!1)||!A.o(a,i,e,j,c,!1))return!1}return A.eJ(a,b.x,c,d.x,e,!1)}if(p===12){if(b===t.g)return!0
if(s)return!1
return A.eJ(a,b,c,d,e,!1)}if(r===9){if(p!==9)return!1
return A.hx(a,b,c,d,e,!1)}if(o&&p===11)return A.hB(a,b,c,d,e,!1)
return!1},
eJ(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.o(a3,a4.x,a5,a6.x,a7,!1))return!1
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
if(!A.o(a3,p[h],a7,g,a5,!1))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.o(a3,p[o+h],a7,g,a5,!1))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.o(a3,k[h],a7,g,a5,!1))return!1}f=s.c
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
if(!A.o(a3,e[a+2],a7,g,a5,!1))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
hx(a,b,c,d,e,f){var s,r,q,p,o,n=b.x,m=d.x
for(;n!==m;){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.b6(a,b,r[o])
return A.eE(a,p,null,c,d.y,e,!1)}return A.eE(a,b.y,null,c,d.y,e,!1)},
eE(a,b,c,d,e,f,g){var s,r=b.length
for(s=0;s<r;++s)if(!A.o(a,b[s],d,e[s],f,!1))return!1
return!0},
hB(a,b,c,d,e,f){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.o(a,r[s],c,q[s],e,!1))return!1
return!0},
bc(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.M(a))if(s!==7)if(!(s===6&&A.bc(a.x)))r=s===8&&A.bc(a.x)
return r},
ic(a){var s
if(!A.M(a))s=a===t._
else s=!0
return s},
M(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
eD(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
dc(a){return a>0?new Array(a):v.typeUniverse.sEA},
x:function x(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
bU:function bU(){this.c=this.b=this.a=null},
bZ:function bZ(a){this.a=a},
bT:function bT(){},
b2:function b2(a){this.a=a},
fQ(){var s,r,q
if(self.scheduleImmediate!=null)return A.hS()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.c3(new A.cL(s),1)).observe(r,{childList:true})
return new A.cK(s,r,q)}else if(self.setImmediate!=null)return A.hT()
return A.hU()},
fR(a){self.scheduleImmediate(A.c3(new A.cM(a),0))},
fS(a){self.setImmediate(A.c3(new A.cN(a),0))},
fT(a){A.dM(B.F,a)},
dM(a,b){var s=B.a.l(a.a,1000)
return A.h1(s,b)},
eo(a,b){var s=B.a.l(a.a,1000)
return A.h2(s,b)},
h1(a,b){var s=new A.b1()
s.ba(a,b)
return s},
h2(a,b){var s=new A.b1()
s.bb(a,b)
return s},
dk(a){return new A.bL(new A.k($.f,a.i("k<0>")),a.i("bL<0>"))},
dg(a,b){a.$2(0,null)
b.b=!0
return b.a},
a4(a,b){A.hg(a,b)},
df(a,b){var s,r=a==null?b.$ti.c.a(a):a
if(!b.b)b.a.a2(r)
else{s=b.a
if(b.$ti.i("H<1>").b(r))s.aI(r)
else s.a5(r)}},
de(a,b){var s=A.N(a),r=A.F(a),q=b.a
if(b.b)q.C(s,r)
else q.aG(s,r)},
hg(a,b){var s,r,q=new A.dh(b),p=new A.di(b)
if(a instanceof A.k)a.aR(q,p,t.z)
else{s=t.z
if(a instanceof A.k)a.aA(q,p,s)
else{r=new A.k($.f,t.d)
r.a=8
r.c=a
r.aR(q,p,s)}}},
dm(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.f.aw(new A.dn(s))},
dC(a){var s
if(t.Q.b(a)){s=a.gP()
if(s!=null)return s}return B.E},
fs(a,b){var s,r=!b.b(null)
if(r)throw A.c(A.dB(null,"computation","The type parameter is not nullable"))
s=new A.k($.f,b.i("k<0>"))
A.fL(a,new A.ca(null,s,b))
return s},
hl(a,b,c){A.hu(b,c)
a.C(b,c)},
hu(a,b){if($.f===B.b)return null
return null},
cT(a,b,c){var s,r,q,p={},o=p.a=a
for(;s=o.a,(s&4)!==0;){o=o.c
p.a=o}if(o===b){b.aG(new A.B(!0,o,null,"Cannot complete a future with itself"),A.fJ())
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.aP(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.K()
b.S(p.a)
A.a3(b,q)
return}b.a^=2
A.ao(null,null,b.b,new A.cU(p,b))},
a3(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;!0;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){f=f.c
A.c1(f.a,f.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.a3(g.a,f)
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
if(r){A.c1(m.a,m.b)
return}j=$.f
if(j!==k)$.f=k
else j=null
f=f.c
if((f&15)===8)new A.d0(s,g,p).$0()
else if(q){if((f&1)!==0)new A.d_(s,m).$0()}else if((f&2)!==0)new A.cZ(g,s).$0()
if(j!=null)$.f=j
f=s.c
if(f instanceof A.k){r=s.a.$ti
r=r.i("H<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.W(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.cT(f,i,!0)
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
hK(a,b){if(t.C.b(a))return b.aw(a)
if(t.v.b(a))return a
throw A.c(A.dB(a,"onError",u.c))},
hG(){var s,r
for(s=$.an;s!=null;s=$.an){$.b9=null
r=s.b
$.an=r
if(r==null)$.b8=null
s.a.$0()}},
hN(){$.dU=!0
try{A.hG()}finally{$.b9=null
$.dU=!1
if($.an!=null)$.e7().$1(A.eS())}},
eQ(a){var s=new A.bM(a),r=$.b8
if(r==null){$.an=$.b8=s
if(!$.dU)$.e7().$1(A.eS())}else $.b8=r.b=s},
hM(a){var s,r,q,p=$.an
if(p==null){A.eQ(a)
$.b9=$.b8
return}s=new A.bM(a)
r=$.b9
if(r==null){s.b=p
$.an=$.b9=s}else{q=r.b
s.b=q
$.b9=r.b=s
if(q==null)$.b8=s}},
e5(a){var s=null,r=$.f
if(B.b===r){A.ao(s,s,B.b,a)
return}A.ao(s,s,r,r.ag(a))},
iv(a){A.dY(a,"stream",t.K)
return new A.bX()},
dK(a){return new A.aP(null,null,a.i("aP<0>"))},
eP(a){return},
er(a,b){return b==null?A.hV():b},
fU(a,b){if(b==null)b=A.hW()
if(t.k.b(b))return a.aw(b)
if(t.e.b(b))return b
throw A.c(A.as("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
hH(a){},
hI(a,b){A.c1(a,b)},
hk(a,b,c){var s,r=a.aU(),q=$.dz()
if(r!==q){q=r.$ti
s=$.f
r.R(new A.T(new A.k(s,q),8,new A.dj(b,c),null,q.i("T<1,1>")))}else b.T(c)},
fL(a,b){var s=$.f
if(s===B.b)return A.dM(a,b)
return A.dM(a,s.ag(b))},
fM(a,b){var s=$.f
if(s===B.b)return A.eo(a,b)
return A.eo(a,s.bw(b,t.E))},
c1(a,b){A.hM(new A.dl(a,b))},
eM(a,b,c,d){var s,r=$.f
if(r===c)return d.$0()
$.f=c
s=r
try{r=d.$0()
return r}finally{$.f=s}},
eN(a,b,c,d,e){var s,r=$.f
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
ao(a,b,c,d){if(B.b!==c)d=c.ag(d)
A.eQ(d)},
cL:function cL(a){this.a=a},
cK:function cK(a,b,c){this.a=a
this.b=b
this.c=c},
cM:function cM(a){this.a=a},
cN:function cN(a){this.a=a},
b1:function b1(){this.c=0},
db:function db(a,b){this.a=a
this.b=b},
da:function da(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bL:function bL(a,b){this.a=a
this.b=!1
this.$ti=b},
dh:function dh(a){this.a=a},
di:function di(a){this.a=a},
dn:function dn(a){this.a=a},
Y:function Y(a,b){this.a=a
this.b=b},
E:function E(a,b){this.a=a
this.$ti=b},
aQ:function aQ(a,b,c,d,e){var _=this
_.ay=0
_.CW=_.ch=null
_.w=a
_.a=b
_.d=c
_.e=d
_.r=_.f=null
_.$ti=e},
bN:function bN(){},
aP:function aP(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null
_.$ti=c},
ca:function ca(a,b,c){this.a=a
this.b=b
this.c=c},
T:function T(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
k:function k(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
cQ:function cQ(a,b){this.a=a
this.b=b},
cY:function cY(a,b){this.a=a
this.b=b},
cV:function cV(a){this.a=a},
cW:function cW(a){this.a=a},
cX:function cX(a,b,c){this.a=a
this.b=b
this.c=c},
cU:function cU(a,b){this.a=a
this.b=b},
cS:function cS(a,b){this.a=a
this.b=b},
cR:function cR(a,b,c){this.a=a
this.b=b
this.c=c},
d0:function d0(a,b,c){this.a=a
this.b=b
this.c=c},
d1:function d1(a,b){this.a=a
this.b=b},
d2:function d2(a){this.a=a},
d_:function d_(a,b){this.a=a
this.b=b},
cZ:function cZ(a,b){this.a=a
this.b=b},
bM:function bM(a){this.a=a
this.b=null},
aj:function aj(){},
ct:function ct(a,b){this.a=a
this.b=b},
cu:function cu(a,b){this.a=a
this.b=b},
cr:function cr(a){this.a=a},
cs:function cs(a,b,c){this.a=a
this.b=b
this.c=c},
aR:function aR(){},
bP:function bP(){},
bO:function bO(){},
b0:function b0(){},
bS:function bS(){},
bR:function bR(a){this.b=a
this.a=null},
bV:function bV(){this.a=0
this.c=this.b=null},
d6:function d6(a,b){this.a=a
this.b=b},
aS:function aS(a){this.a=1
this.b=a
this.c=null},
bX:function bX(){},
dj:function dj(a,b){this.a=a
this.b=b},
dd:function dd(){},
dl:function dl(a,b){this.a=a
this.b=b},
d7:function d7(){},
d8:function d8(a,b){this.a=a
this.b=b},
d9:function d9(a,b,c){this.a=a
this.b=b
this.c=c},
fA(a,b){return new A.a0(a.i("@<0>").a3(b).i("a0<1,2>"))},
fB(a){return new A.aT(a.i("aT<0>"))},
dN(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
fV(a,b,c){var s=new A.ak(a,b,c.i("ak<0>"))
s.c=a.e
return s},
dH(a){var s,r
if(A.e2(a))return"{...}"
s=new A.bI("")
try{r={}
$.w.push(a)
s.a+="{"
r.a=!0
a.ao(0,new A.cd(r,s))
s.a+="}"}finally{if(0>=$.w.length)return A.b($.w,-1)
$.w.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
aT:function aT(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
d5:function d5(a){this.a=a
this.c=this.b=null},
ak:function ak(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
m:function m(){},
aG:function aG(){},
cd:function cd(a,b){this.a=a
this.b=b},
aM:function aM(){},
aZ:function aZ(){},
fo(a,b){a=A.c(a)
a.stack=b.h(0)
throw a
throw A.c("unreachable")},
dG(a,b,c){var s,r,q
if(a>4294967295)A.bd(A.fG(a,0,4294967295,"length",null))
s=A.a(new Array(a),c.i("p<0>"))
s.$flags=1
r=s
if(a!==0)for(s=r.length,q=0;q<s;++q)r[q]=b
return r},
fC(a,b,c){var s,r,q=A.a([],c.i("p<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.dx)(a),++r)q.push(a[r])
q.$flags=1
return q},
en(a,b,c){var s=J.fe(b)
if(!s.q())return a
if(c.length===0){do a+=A.n(s.gt())
while(s.q())}else{a+=A.n(s.gt())
for(;s.q();)a=a+c+A.n(s.gt())}return a},
fJ(){return A.F(new Error())},
ef(a){return new A.av(1000*a)},
c8(a){if(typeof a=="number"||A.dT(a)||a==null)return J.be(a)
if(typeof a=="string")return JSON.stringify(a)
return A.ek(a)},
fp(a,b){A.dY(a,"error",t.K)
A.dY(b,"stackTrace",t.l)
A.fo(a,b)},
bh(a){return new A.bg(a)},
as(a,b){return new A.B(!1,null,b,a)},
dB(a,b,c){return new A.B(!0,a,b,c)},
fF(a){var s=null
return new A.ag(s,s,!1,s,s,a)},
fG(a,b,c,d,e){return new A.ag(b,c,!0,a,d,"Invalid value")},
ft(a,b,c,d){return new A.bm(b,!0,a,d,"Index out of range")},
cJ(a){return new A.aO(a)},
eq(a){return new A.bJ(a)},
au(a){return new A.bi(a)},
c9(a){return new A.cP(a)},
fx(a,b,c){var s,r
if(A.e2(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.a([],t.s)
$.w.push(a)
try{A.hF(a,s)}finally{if(0>=$.w.length)return A.b($.w,-1)
$.w.pop()}r=A.en(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
dD(a,b,c){var s,r
if(A.e2(a))return b+"..."+c
s=new A.bI(b)
$.w.push(a)
try{r=s
r.a=A.en(r.a,a,", ")}finally{if(0>=$.w.length)return A.b($.w,-1)
$.w.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
hF(a,b){var s,r,q,p,o,n,m,l=a.gE(a),k=0,j=0
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
ci(a,b,c,d){var s
if(B.f===c){s=B.a.gj(a)
b=J.G(b)
return A.dL(A.S(A.S($.dA(),s),b))}if(B.f===d){s=B.a.gj(a)
b=J.G(b)
c=J.G(c)
return A.dL(A.S(A.S(A.S($.dA(),s),b),c))}s=B.a.gj(a)
b=J.G(b)
c=J.G(c)
d=J.G(d)
d=A.dL(A.S(A.S(A.S(A.S($.dA(),s),b),c),d))
return d},
av:function av(a){this.a=a},
cO:function cO(){},
j:function j(){},
bg:function bg(a){this.a=a},
I:function I(){},
B:function B(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ag:function ag(a,b,c,d,e,f){var _=this
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
aO:function aO(a){this.a=a},
bJ:function bJ(a){this.a=a},
ai:function ai(a){this.a=a},
bi:function bi(a){this.a=a},
bE:function bE(){},
aN:function aN(){},
cP:function cP(a){this.a=a},
bo:function bo(){},
q:function q(){},
e:function e(){},
bY:function bY(){},
bI:function bI(a){this.a=a},
d3:function d3(){},
P:function P(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ab:function ab(a){this.b=a},
ac:function ac(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ae:function ae(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=0},
fI(a,b,c,d,e,f,g,h){var s,r,q,p=self,o=p.document.createElement("canvas"),n=h*g
o.width=n
s=d*f
o.height=s
r=p.document.createElement("canvas")
r.width=n
r.height=s
s=A.a([],t.x)
for(q=0;q<d;++q){p=B.a.l(h,32)
s.push(new Uint32Array(p+1))}p=new A.bH(!0,d,h,g,f,c,a,o,r,s)
p.b8(a,b,c,d,!0,f,g,h)
return p},
dJ(a){return new A.z(B.a.l(a,32),31-B.a.k(a,32))},
bH:function bH(a,b,c,d,e,f,g,h,i,j){var _=this
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
cl:function cl(a){this.a=a},
cm:function cm(a){this.a=a},
cn:function cn(a){this.a=a},
co:function co(a){this.a=a},
ck:function ck(){},
C:function C(a){this.b=a},
fK(a,b,c,d){var s,r,q,p,o="white",n=null,m=A.fI(a,c,o,d*10,!0,2,2,b*8),l=A.a([],t.G)
for(s=t.U,r=0;r<d;++r){q=A.a([],s)
for(p=0;p<b;++p)q.push(new A.P(r,p," ",o))
l.push(q)}m=new A.cw(d,b,c,m,new A.ae(d,b),new A.ae(d,b),new A.ae(d,b),A.dK(t.N),A.dK(t.V),A.dK(t.q),B.e,l,A.fB(t.o),B.dN)
m.b9(a,b,c,o,n,!0,2,2,2,d,!0,n,n,n,n,n,n)
return m},
ah:function ah(a){this.b=a},
cw:function cw(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cE:function cE(a){this.a=a},
cD:function cD(){},
cC:function cC(a){this.a=a},
cx:function cx(a){this.a=a},
cy:function cy(a){this.a=a},
cz:function cz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cA:function cA(a,b,c){this.a=a
this.b=b
this.c=c},
cB:function cB(a){this.a=a},
ei(){var s,r,q,p,o=A.a([],t.w)
for(s=t.u,r=0;r<6;++r){q=A.a([],s)
for(p=0;p<7;++p)q.push(B.c)
o.push(q)}return new A.ce(o,B.d)},
ba(a,b,c){var s=0,r=A.dk(t.n),q,p,o,n,m,l,k
var $async$ba=A.dm(function(d,e){if(d===1)return A.de(e,r)
while(true)switch(s){case 0:k=$.O()
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
case 9:k.au(a.b.h(0),a.b.ai(),p,2+m)
s=11
return A.a4(A.fs(A.ef(200),n),$async$ba)
case 11:case 10:k.au(B.c.h(0),B.c.ai(),p,2+m)
s=7
break
case 8:s=5
break
case 7:case 4:++m
s=3
break
case 5:if(c)k.au(a.b.h(0),a.b.ai(),p,2+m)
k.v(""+(b+1),p,8)
case 1:return A.df(q,r)}})
return A.dg($async$ba,r)},
dX(a,b){var s=$.O()
s.v(a,B.a.l(s.b-a.length,2),b)},
dq(){var s=0,r=A.dk(t.y),q,p,o
var $async$dq=A.dm(function(a,b){if(a===1)return A.de(b,r)
while(true)switch(s){case 0:o=$.O()
o.Y(0)
A.dX("Four-In-A-Line",0)
A.dX("Move first (y/n) ?",2)
case 3:s=6
return A.a4(o.bA(),$async$dq)
case 6:p=b.b
case 4:if(!A.ik("ynYN",p,0)){s=3
break}case 5:A.dX(B.h.N(" ",18),2)
q=p.toLowerCase()==="y"
s=1
break
case 1:return A.df(q,r)}})
return A.dg($async$dq,r)},
ar(){var s=0,r=A.dk(t.I),q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$ar=A.dm(function(a,b){if(a===1)return A.de(b,r)
while(true)switch(s){case 0:s=3
return A.a4(A.dq(),$async$ar)
case 3:g=b
f=A.ei()
for(p=0;p<7;++p)A.ba(f,p,!1)
o=!0
case 4:if(!!0){s=6
break}if(f.gJ().length===0){q=B.k
s=1
break}if(o)n=g
else n=!0
s=n?7:8
break
case 7:n="Your move ("+f.b.h(0)+")."
m=$.O()
l=m.b
m.v(n,B.a.l(l-n.length,2),10)
n=m.at,k=A.am(n).i("E<1>"),j=!1,i=!1
case 9:if(!!j){s=10
break}if(m.ay!==B.e)A.bd(A.c9("Terminal already awaiting input."))
m.ay=B.j
e=B.h
s=11
return A.a4(new A.E(n,k).gak(0),$async$ar)
case 11:p=e.bz("1234567",b.b)
s=B.l.bx(f.gJ(),p)?12:13
break
case 12:i=f.a_(p)
s=14
return A.a4(A.ba(f,p,!0),$async$ar)
case 14:f.b=f.b===B.d?B.i:B.d
j=!0
case 13:s=9
break
case 10:n=B.h.N(" ",14)
m.v(n,B.a.l(l-n.length,2),10)
if(i){q=B.p
s=1
break}case 8:if(f.gJ().length===0){q=B.k
s=1
break}h=f.bE(1000)
i=f.a_(h)
n="I choose "+(h+1)+"."
m=$.O()
l=m.b
m.v(n,B.a.l(l-n.length,2),10)
s=15
return A.a4(A.ba(f,h,!0),$async$ar)
case 15:n=B.h.N(" ",11)
m.v(n,B.a.l(l-n.length,2),10)
if(i){q=B.q
s=1
break}f.b=f.b===B.d?B.i:B.d
case 5:o=!1
s=4
break
case 6:case 1:return A.df(q,r)}})
return A.dg($async$ar,r)},
c4(){var s=0,r=A.dk(t.z),q,p
var $async$c4=A.dm(function(a,b){if(a===1)return A.de(b,r)
while(true)switch(s){case 0:case 2:if(!!0){s=3
break}case 4:s=9
return A.a4(A.ar(),$async$c4)
case 9:switch(b){case B.q:s=6
break
case B.p:s=7
break
case B.k:s=8
break
default:s=5
break}break
case 6:q=$.O()
q.v("Computer wins!",B.a.l(q.b-14,2),10)
s=5
break
case 7:q=$.O()
q.v("You win!",B.a.l(q.b-8,2),10)
s=5
break
case 8:q=$.O()
q.v("A tie!",B.a.l(q.b-6,2),10)
s=5
break
case 5:q=$.O()
p=q.b
q.v("Press any key to",B.a.l(p-16,2),12)
q.v("play again!",B.a.l(p-11,2),13)
if(q.ay!==B.e)A.bd(A.c9("Terminal already awaiting input."))
q.ay=B.j
q=q.at
s=10
return A.a4(new A.E(q,A.am(q).i("E<1>")).gak(0),$async$c4)
case 10:s=2
break
case 3:return A.df(null,r)}})
return A.dg($async$c4,r)},
a1:function a1(a){this.b=a},
ce:function ce(a,b){this.a=a
this.b=b},
cg:function cg(a,b,c){this.a=a
this.b=b
this.c=c},
cf:function cf(a){this.a=a},
a9:function a9(a){this.b=a},
il(a){A.e6(new A.aE("Field '"+a+"' has been assigned during initialization."),new Error())},
X(){A.e6(new A.aE("Field '' has not been initialized."),new Error())},
b7(a){var s
if(typeof a=="function")throw A.c(A.as("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.hh,a)
s[$.dy()]=a
return s},
eI(a){var s
if(typeof a=="function")throw A.c(A.as("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.hi,a)
s[$.dy()]=a
return s},
hh(a){return a.$0()},
hi(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
i5(a,b){return a[b]},
hj(a,b,c){return a[b](c)}},B={}
var w=[A,J,B]
var $={}
A.dE.prototype={}
J.bn.prototype={
B(a,b){return a===b},
gj(a){return A.af(a)},
h(a){return"Instance of '"+A.cj(a)+"'"},
gm(a){return A.a6(A.dS(this))}}
J.bp.prototype={
h(a){return String(a)},
gj(a){return a?519018:218159},
gm(a){return A.a6(t.y)},
$ih:1,
$ic2:1}
J.az.prototype={
B(a,b){return null==b},
h(a){return"null"},
gj(a){return 0},
$ih:1,
$iq:1}
J.aB.prototype={$il:1}
J.R.prototype={
gj(a){return 0},
h(a){return String(a)}}
J.bF.prototype={}
J.a2.prototype={}
J.Q.prototype={
h(a){var s=a[$.dy()]
if(s==null)return this.b7(a)
return"JavaScript function for "+J.be(s)}}
J.aA.prototype={
gj(a){return 0},
h(a){return String(a)}}
J.aC.prototype={
gj(a){return 0},
h(a){return String(a)}}
J.p.prototype={
bC(a,b){var s,r,q=a.length,p=A.dG(q,"",t.N)
for(s=0;s<a.length;++s){r=A.n(a[s])
if(!(s<q))return A.b(p,s)
p[s]=r}return p.join(b)},
am(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw A.c(A.au(a))}return s},
an(a,b,c){return this.am(a,b,c,t.z)},
bx(a,b){var s
for(s=0;s<a.length;++s)if(J.a8(a[s],b))return!0
return!1},
h(a){return A.dD(a,"[","]")},
gE(a){return new J.bf(a,a.length,A.dR(a).i("bf<1>"))},
gj(a){return A.af(a)},
gn(a){return a.length},
$ii:1}
J.cb.prototype={}
J.bf.prototype={
gt(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.c(A.dx(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.aa.prototype={
bO(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.c(A.cJ(""+a+".toInt()"))},
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
F(a,b){if((a|0)===a)if(b>=1)return a/b|0
return this.aQ(a,b)},
l(a,b){return(a|0)===a?a/b|0:this.aQ(a,b)},
aQ(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.c(A.cJ("Result of truncating division is "+A.n(s)+": "+A.n(a)+" ~/ "+b))},
O(a,b){if(b<0)throw A.c(A.dW(b))
return b>31?0:a<<b>>>0},
bt(a,b){return b>31?0:a<<b>>>0},
b6(a,b){var s
if(b<0)throw A.c(A.dW(b))
if(a>0)s=this.ae(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
bu(a,b){var s
if(a>0)s=this.ae(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
D(a,b){if(0>b)throw A.c(A.dW(b))
return this.ae(a,b)},
ae(a,b){return b>31?0:a>>>b},
gm(a){return A.a6(t.H)},
$ir:1}
J.ay.prototype={
gm(a){return A.a6(t.S)},
$ih:1,
$id:1}
J.bq.prototype={
gm(a){return A.a6(t.i)},
$ih:1}
J.a_.prototype={
bP(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.b(p,0)
if(p.charCodeAt(0)===133){s=J.fy(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.b(p,r)
q=p.charCodeAt(r)===133?J.fz(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
N(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.c(B.C)
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
gm(a){return A.a6(t.N)},
gn(a){return a.length},
$ih:1,
$iD:1}
A.aE.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.dw.prototype={
$0(){var s=new A.k($.f,t.D)
s.a2(null)
return s},
$S:9}
A.cp.prototype={}
A.bk.prototype={}
A.bt.prototype={
gt(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s,r=this,q=r.a,p=J.eV(q),o=p.gn(q)
if(r.b!==o)throw A.c(A.au(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.p(q,s);++r.c
return!0}}
A.ax.prototype={}
A.z.prototype={$r:"+(1,2)",$s:1}
A.bj.prototype={
h(a){return A.dH(this)}}
A.bl.prototype={
V(){var s=this,r=s.$map
if(r==null){r=new A.aD(s.$ti.i("aD<1,2>"))
A.i0(s.a,r)
s.$map=r}return r},
aj(a){return this.V().aj(a)},
p(a,b){return this.V().p(0,b)},
ao(a,b){this.V().ao(0,b)},
gn(a){return this.V().a}}
A.cG.prototype={
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
A.aL.prototype={
h(a){return"Null check operator used on a null value"}}
A.br.prototype={
h(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.bK.prototype={
h(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.ch.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.aw.prototype={}
A.b_.prototype={
h(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iy:1}
A.Z.prototype={
h(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.f_(r==null?"unknown":r)+"'"},
gbR(){return this},
$C:"$1",
$R:1,
$D:null}
A.c6.prototype={$C:"$0",$R:0}
A.c7.prototype={$C:"$2",$R:2}
A.cv.prototype={}
A.cq.prototype={
h(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.f_(s)+"'"}}
A.at.prototype={
B(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.at))return!1
return this.$_target===b.$_target&&this.a===b.a},
gj(a){return(A.e4(this.a)^A.af(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.cj(this.a)+"'")}}
A.bQ.prototype={
h(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.bG.prototype={
h(a){return"RuntimeError: "+this.a}}
A.a0.prototype={
gn(a){return this.a},
aj(a){var s=this.b
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
s=q[this.ap(a)]
r=this.aq(s,a)
if(r<0)return null
return s[r].b},
a0(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.aE(s==null?m.b=m.a9():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=m.c
m.aE(r==null?m.c=m.a9():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.a9()
p=m.ap(b)
o=q[p]
if(o==null)q[p]=[m.a1(b,c)]
else{n=m.aq(o,b)
if(n>=0)o[n].b=c
else o.push(m.a1(b,c))}}},
ao(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw A.c(A.au(s))
r=r.c}},
aE(a,b,c){var s=a[b]
if(s==null)a[b]=this.a1(b,c)
else s.b=c},
a1(a,b){var s=this,r=new A.cc(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&1073741823
return r},
ap(a){return J.G(a)&1073741823},
aq(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a8(a[r].a,b))return r
return-1},
h(a){return A.dH(this)},
a9(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.cc.prototype={}
A.aF.prototype={
gn(a){return this.a.a},
gE(a){var s=this.a
return new A.bs(s,s.r,s.e)}}
A.bs.prototype={
gt(){return this.d},
q(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.c(A.au(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
A.aD.prototype={
ap(a){return A.hX(a)&1073741823},
aq(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a8(a[r].a,b))return r
return-1}}
A.dr.prototype={
$1(a){return this.a(a)},
$S:10}
A.ds.prototype={
$2(a,b){return this.a(a,b)},
$S:11}
A.dt.prototype={
$1(a){return this.a(a)},
$S:12}
A.al.prototype={
h(a){return this.aS(!1)},
aS(a){var s,r,q,p,o,n=this.bk(),m=this.aL(),l=(a?""+"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.b(m,q)
o=m[q]
l=a?l+A.ek(o):l+A.n(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
bk(){var s,r=this.$s
for(;$.aY.length<=r;)$.aY.push(null)
s=$.aY[r]
if(s==null){s=this.bj()
if(!(r<$.aY.length))return A.b($.aY,r)
$.aY[r]=s}return s},
bj(){var s,r,q,p,o,n=this.$r,m=n.indexOf("("),l=n.substring(1,m),k=n.substring(m),j=k==="()"?0:k.replace(/[^,]/g,"").length+1,i=A.a(new Array(j),t.f)
for(s=0;s<j;++s)i[s]=s
if(l!==""){r=l.split(",")
s=r.length
for(q=i.length,p=j;s>0;){--p;--s
o=r[s]
if(!(p>=0&&p<q))return A.b(i,p)
i[p]=o}}i=A.fC(i,!1,t.K)
i.$flags=3
return i}}
A.bW.prototype={
aL(){return[this.a,this.b]},
B(a,b){if(b==null)return!1
return b instanceof A.bW&&this.$s===b.$s&&J.a8(this.a,b.a)&&J.a8(this.b,b.b)},
gj(a){return A.ci(this.$s,this.a,this.b,B.f)}}
A.bu.prototype={
gm(a){return B.dV},
$ih:1}
A.aJ.prototype={}
A.bv.prototype={
gm(a){return B.dW},
$ih:1}
A.ad.prototype={
gn(a){return a.length},
$iv:1}
A.aH.prototype={
p(a,b){A.a5(b,a,a.length)
return a[b]},
$ii:1}
A.aI.prototype={$ii:1}
A.bw.prototype={
gm(a){return B.dX},
$ih:1}
A.bx.prototype={
gm(a){return B.dY},
$ih:1}
A.by.prototype={
gm(a){return B.dZ},
p(a,b){A.a5(b,a,a.length)
return a[b]},
$ih:1}
A.bz.prototype={
gm(a){return B.e_},
p(a,b){A.a5(b,a,a.length)
return a[b]},
$ih:1}
A.bA.prototype={
gm(a){return B.e0},
p(a,b){A.a5(b,a,a.length)
return a[b]},
$ih:1}
A.bB.prototype={
gm(a){return B.e2},
p(a,b){A.a5(b,a,a.length)
return a[b]},
$ih:1}
A.bC.prototype={
gm(a){return B.e3},
p(a,b){A.a5(b,a,a.length)
return a[b]},
$ih:1,
$icI:1}
A.aK.prototype={
gm(a){return B.e4},
gn(a){return a.length},
p(a,b){A.a5(b,a,a.length)
return a[b]},
$ih:1}
A.bD.prototype={
gm(a){return B.e5},
gn(a){return a.length},
p(a,b){A.a5(b,a,a.length)
return a[b]},
$ih:1}
A.aU.prototype={}
A.aV.prototype={}
A.aW.prototype={}
A.aX.prototype={}
A.x.prototype={
i(a){return A.b6(v.typeUniverse,this,a)},
a3(a){return A.eC(v.typeUniverse,this,a)}}
A.bU.prototype={}
A.bZ.prototype={
h(a){return A.u(this.a,null)}}
A.bT.prototype={
h(a){return this.a}}
A.b2.prototype={$iI:1}
A.cL.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:2}
A.cK.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:13}
A.cM.prototype={
$0(){this.a.$0()},
$S:1}
A.cN.prototype={
$0(){this.a.$0()},
$S:1}
A.b1.prototype={
ba(a,b){if(self.setTimeout!=null)self.setTimeout(A.c3(new A.db(this,b),0),a)
else throw A.c(A.cJ("`setTimeout()` not found."))},
bb(a,b){if(self.setTimeout!=null)self.setInterval(A.c3(new A.da(this,a,Date.now(),b),0),a)
else throw A.c(A.cJ("Periodic timer."))},
$icF:1}
A.db.prototype={
$0(){this.a.c=1
this.b.$0()},
$S:0}
A.da.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.a.F(s,o)}q.c=p
r.d.$1(q)},
$S:1}
A.bL.prototype={}
A.dh.prototype={
$1(a){return this.a.$2(0,a)},
$S:4}
A.di.prototype={
$2(a,b){this.a.$2(1,new A.aw(a,b))},
$S:14}
A.dn.prototype={
$2(a,b){this.a(a,b)},
$S:15}
A.Y.prototype={
h(a){return A.n(this.a)},
$ij:1,
gP(){return this.b}}
A.E.prototype={}
A.aQ.prototype={
ab(){},
ac(){}}
A.bN.prototype={
gbm(){return this.c<4},
br(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
bv(a,b,c,d){var s,r,q,p,o,n=this
if((n.c&4)!==0){s=new A.aS($.f)
A.e5(s.gbn())
s.c=c
return s}s=$.f
r=d?1:0
q=A.er(s,a)
A.fU(s,b)
p=new A.aQ(n,q,s,r|32,A.am(n).i("aQ<1>"))
p.CW=p
p.ch=p
p.ay=n.c&1
o=n.e
n.e=p
p.ch=null
p.CW=o
if(o==null)n.d=p
else o.ch=p
if(n.d===p)A.eP(n.a)
return p},
bq(a){var s,r=this
A.am(r).i("aQ<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.br(a)
if((r.c&2)===0&&r.d==null)r.bg()}return null},
bd(){if((this.c&4)!==0)return new A.ai("Cannot add new events after calling close")
return new A.ai("Cannot add new events while doing an addStream")},
I(a,b){if(!this.gbm())throw A.c(this.bd())
this.ad(b)},
bg(){if((this.c&4)!==0)if(null.gbS())null.a2(null)
A.eP(this.b)}}
A.aP.prototype={
ad(a){var s
for(s=this.d;s!=null;s=s.ch)s.be(new A.bR(a))}}
A.ca.prototype={
$0(){this.c.a(null)
this.b.T(null)},
$S:0}
A.T.prototype={
bD(a){if((this.c&15)!==6)return!0
return this.b.b.az(this.d,a.a)},
by(a){var s,r=this.e,q=null,p=a.a,o=this.b.b
if(t.C.b(r))q=o.bK(r,p,a.b)
else q=o.az(r,p)
try{p=q
return p}catch(s){if(t.c.b(A.N(s))){if((this.c&1)!==0)throw A.c(A.as("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.c(A.as("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.k.prototype={
aA(a,b,c){var s,r=$.f
if(r===B.b){if(!t.C.b(b)&&!t.v.b(b))throw A.c(A.dB(b,"onError",u.c))}else b=A.hK(b,r)
s=new A.k(r,c.i("k<0>"))
this.R(new A.T(s,3,a,b,this.$ti.i("@<1>").a3(c).i("T<1,2>")))
return s},
aR(a,b,c){var s=new A.k($.f,c.i("k<0>"))
this.R(new A.T(s,19,a,b,this.$ti.i("@<1>").a3(c).i("T<1,2>")))
return s},
bs(a){this.a=this.a&1|16
this.c=a},
S(a){this.a=a.a&30|this.a&1
this.c=a.c},
R(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.R(a)
return}s.S(r)}A.ao(null,null,s.b,new A.cQ(s,a))}},
aP(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.aP(a)
return}n.S(s)}m.a=n.W(a)
A.ao(null,null,n.b,new A.cY(m,n))}},
K(){var s=this.c
this.c=null
return this.W(s)},
W(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
aH(a){var s,r,q,p=this
p.a^=2
try{a.aA(new A.cV(p),new A.cW(p),t.P)}catch(q){s=A.N(q)
r=A.F(q)
A.e5(new A.cX(p,s,r))}},
T(a){var s,r=this,q=r.$ti
if(q.i("H<1>").b(a))if(q.b(a))A.cT(a,r,!0)
else r.aH(a)
else{s=r.K()
r.a=8
r.c=a
A.a3(r,s)}},
a5(a){var s=this,r=s.K()
s.a=8
s.c=a
A.a3(s,r)},
bi(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.K()
q.S(a)
A.a3(q,r)},
C(a,b){var s=this.K()
this.bs(new A.Y(a,b))
A.a3(this,s)},
a2(a){if(this.$ti.i("H<1>").b(a)){this.aI(a)
return}this.bf(a)},
bf(a){this.a^=2
A.ao(null,null,this.b,new A.cS(this,a))},
aI(a){if(this.$ti.b(a)){A.cT(a,this,!1)
return}this.aH(a)},
aG(a,b){this.a^=2
A.ao(null,null,this.b,new A.cR(this,a,b))},
$iH:1}
A.cQ.prototype={
$0(){A.a3(this.a,this.b)},
$S:0}
A.cY.prototype={
$0(){A.a3(this.b,this.a.a)},
$S:0}
A.cV.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.a5(p.$ti.c.a(a))}catch(q){s=A.N(q)
r=A.F(q)
p.C(s,r)}},
$S:2}
A.cW.prototype={
$2(a,b){this.a.C(a,b)},
$S:6}
A.cX.prototype={
$0(){this.a.C(this.b,this.c)},
$S:0}
A.cU.prototype={
$0(){A.cT(this.a.a,this.b,!0)},
$S:0}
A.cS.prototype={
$0(){this.a.a5(this.b)},
$S:0}
A.cR.prototype={
$0(){this.a.C(this.b,this.c)},
$S:0}
A.d0.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.b2(q.d)}catch(p){s=A.N(p)
r=A.F(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.dC(q)
n=k.a
n.c=new A.Y(q,o)
q=n}q.b=!0
return}if(j instanceof A.k&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.k){m=k.b.a
l=new A.k(m.b,m.$ti)
j.aA(new A.d1(l,m),new A.d2(l),t.n)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.d1.prototype={
$1(a){this.a.bi(this.b)},
$S:2}
A.d2.prototype={
$2(a,b){this.a.C(a,b)},
$S:6}
A.d_.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
q.c=p.b.b.az(p.d,this.b)}catch(o){s=A.N(o)
r=A.F(o)
q=s
p=r
if(p==null)p=A.dC(q)
n=this.a
n.c=new A.Y(q,p)
n.b=!0}},
$S:0}
A.cZ.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.bD(s)&&p.a.e!=null){p.c=p.a.by(s)
p.b=!1}}catch(o){r=A.N(o)
q=A.F(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.dC(p)
m=l.b
m.c=new A.Y(p,n)
p=m}p.b=!0}},
$S:0}
A.bM.prototype={}
A.aj.prototype={
gn(a){var s={},r=new A.k($.f,t.a)
s.a=0
this.aX(new A.ct(s,this),!0,new A.cu(s,r),r.gaJ())
return r},
gak(a){var s=new A.k($.f,this.$ti.i("k<1>")),r=this.aX(null,!0,new A.cr(s),s.gaJ())
r.aZ(new A.cs(this,r,s))
return s}}
A.ct.prototype={
$1(a){++this.a.a},
$S(){return this.b.$ti.i("~(1)")}}
A.cu.prototype={
$0(){this.b.T(this.a.a)},
$S:0}
A.cr.prototype={
$0(){var s,r,q,p
try{q=A.eg()
throw A.c(q)}catch(p){s=A.N(p)
r=A.F(p)
A.hl(this.a,s,r)}},
$S:0}
A.cs.prototype={
$1(a){A.hk(this.b,this.c,a)},
$S(){return this.a.$ti.i("~(1)")}}
A.aR.prototype={
gj(a){return(A.af(this.a)^892482866)>>>0},
B(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.E&&b.a===this.a}}
A.bP.prototype={
aO(){return this.w.bq(this)},
ab(){},
ac(){}}
A.bO.prototype={
aZ(a){this.a=A.er(this.d,a)},
aU(){var s,r=this,q=r.e&=4294967279
if((q&8)===0){q=r.e=q|8
if((q&128)!==0){s=r.r
if(s.a===1)s.a=3}if((q&64)===0)r.r=null
r.f=r.aO()}q=$.dz()
return q},
ab(){},
ac(){},
aO(){return null},
be(a){var s,r,q=this,p=q.r
if(p==null)p=q.r=new A.bV()
s=p.c
if(s==null)p.b=p.c=a
else p.c=s.a=a
r=q.e
if((r&128)===0){r|=128
q.e=r
if(r<256)p.aC(q)}},
ad(a){var s=this,r=s.e
s.e=r|64
s.d.b4(s.a,a)
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
if(r)q.ab()
else q.ac()
p=q.e&=4294967231}if((p&128)!==0&&p<256)q.r.aC(q)}}
A.b0.prototype={
aX(a,b,c,d){return this.a.bv(a,d,c,!0)}}
A.bS.prototype={}
A.bR.prototype={}
A.bV.prototype={
aC(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.e5(new A.d6(s,a))
s.a=1}}
A.d6.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.a
q.b=r
if(r==null)q.c=null
this.b.ad(s.b)},
$S:0}
A.aS.prototype={
aZ(a){},
aU(){this.a=-1
this.c=null
return $.dz()},
bo(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.b3(s)}}else r.a=q}}
A.bX.prototype={}
A.dj.prototype={
$0(){return this.a.T(this.b)},
$S:0}
A.dd.prototype={}
A.dl.prototype={
$0(){A.fp(this.a,this.b)},
$S:0}
A.d7.prototype={
b3(a){var s,r,q
try{if(B.b===$.f){a.$0()
return}A.eM(null,null,this,a)}catch(q){s=A.N(q)
r=A.F(q)
A.c1(s,r)}},
bN(a,b){var s,r,q
try{if(B.b===$.f){a.$1(b)
return}A.eN(null,null,this,a,b)}catch(q){s=A.N(q)
r=A.F(q)
A.c1(s,r)}},
b4(a,b){return this.bN(a,b,t.z)},
ag(a){return new A.d8(this,a)},
bw(a,b){return new A.d9(this,a,b)},
bJ(a){if($.f===B.b)return a.$0()
return A.eM(null,null,this,a)},
b2(a){return this.bJ(a,t.z)},
bM(a,b){if($.f===B.b)return a.$1(b)
return A.eN(null,null,this,a,b)},
az(a,b){var s=t.z
return this.bM(a,b,s,s)},
bL(a,b,c){if($.f===B.b)return a.$2(b,c)
return A.hL(null,null,this,a,b,c)},
bK(a,b,c){var s=t.z
return this.bL(a,b,c,s,s,s)},
bI(a){return a},
aw(a){var s=t.z
return this.bI(a,s,s,s)}}
A.d8.prototype={
$0(){return this.a.b3(this.b)},
$S:0}
A.d9.prototype={
$1(a){return this.a.b4(this.b,a)},
$S(){return this.c.i("~(0)")}}
A.aT.prototype={
gE(a){var s=this,r=new A.ak(s,s.r,s.$ti.i("ak<1>"))
r.c=s.e
return r},
gn(a){return this.a},
I(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.aF(s==null?q.b=A.dN():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.aF(r==null?q.c=A.dN():r,b)}else return q.bc(b)},
bc(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.dN()
s=J.G(a)&1073741823
r=p[s]
if(r==null)p[s]=[q.aa(a)]
else{if(q.bl(r,a)>=0)return!1
r.push(q.aa(a))}return!0},
aF(a,b){if(a[b]!=null)return!1
a[b]=this.aa(b)
return!0},
aN(){this.r=this.r+1&1073741823},
aa(a){var s,r=this,q=new A.d5(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.aN()
return q},
bl(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a8(a[r].a,b))return r
return-1}}
A.d5.prototype={}
A.ak.prototype={
gt(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.c(A.au(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.m.prototype={
gE(a){return new A.bt(a,this.gn(a),A.bb(a).i("bt<m.E>"))},
h(a){return A.dD(a,"[","]")}}
A.aG.prototype={
gn(a){return this.a},
h(a){return A.dH(this)}}
A.cd.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.n(a)
s=r.a+=s
r.a=s+": "
s=A.n(b)
r.a+=s},
$S:16}
A.aM.prototype={
h(a){return A.dD(this,"{","}")}}
A.aZ.prototype={}
A.av.prototype={
B(a,b){if(b==null)return!1
return b instanceof A.av&&this.a===b.a},
gj(a){return B.a.gj(this.a)},
h(a){var s,r,q,p,o=this.a,n=B.a.l(o,36e8)
o%=36e8
s=B.a.l(o,6e7)
o%=6e7
r=s<10?"0":""
q=B.a.l(o,1e6)
p=q<10?"0":""
return""+n+":"+r+s+":"+p+q+"."+B.h.bG(B.a.h(o%1e6),6,"0")}}
A.cO.prototype={
h(a){return this.U()}}
A.j.prototype={
gP(){return A.fE(this)}}
A.bg.prototype={
h(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.c8(s)
return"Assertion failed"}}
A.I.prototype={}
A.B.prototype={
ga8(){return"Invalid argument"+(!this.a?"(s)":"")},
ga7(){return""},
h(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.ga8()+q+o
if(!s.a)return n
return n+s.ga7()+": "+A.c8(s.gar())},
gar(){return this.b}}
A.ag.prototype={
gar(){return this.b},
ga8(){return"RangeError"},
ga7(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.n(q):""
else if(q==null)s=": Not greater than or equal to "+A.n(r)
else if(q>r)s=": Not in inclusive range "+A.n(r)+".."+A.n(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.n(r)
return s}}
A.bm.prototype={
gar(){return this.b},
ga8(){return"RangeError"},
ga7(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gn(a){return this.f}}
A.aO.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.bJ.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.ai.prototype={
h(a){return"Bad state: "+this.a}}
A.bi.prototype={
h(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.c8(s)+"."}}
A.bE.prototype={
h(a){return"Out of Memory"},
gP(){return null},
$ij:1}
A.aN.prototype={
h(a){return"Stack Overflow"},
gP(){return null},
$ij:1}
A.cP.prototype={
h(a){return"Exception: "+this.a}}
A.bo.prototype={
am(a,b,c){var s,r
for(s=this.gE(this),r=b;s.q();)r=c.$2(r,s.gt())
return r},
an(a,b,c){return this.am(0,b,c,t.z)},
gn(a){var s,r=this.gE(this)
for(s=0;r.q();)++s
return s},
h(a){return A.fx(this,"(",")")}}
A.q.prototype={
gj(a){return A.e.prototype.gj.call(this,0)},
h(a){return"null"}}
A.e.prototype={$ie:1,
B(a,b){return this===b},
gj(a){return A.af(this)},
h(a){return"Instance of '"+A.cj(this)+"'"},
gm(a){return A.i6(this)},
toString(){return this.h(this)}}
A.bY.prototype={
h(a){return""},
$iy:1}
A.bI.prototype={
gn(a){return this.a.length},
h(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.d3.prototype={
bF(a){if(a<=0||a>4294967296)throw A.c(A.fF("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
A.P.prototype={
gj(a){var s=this.a,r=this.b
return A.ci(new A.z(s,r).$s,s,r,B.f)},
B(a,b){var s,r,q,p
if(b==null)return!1
if(b instanceof A.P){s=b.a
r=b.b
q=this.a
p=this.b
p=A.ci(new A.z(s,r).$s,s,r,B.f)===A.ci(new A.z(q,p).$s,q,p,B.f)
s=p}else s=!1
return s},
h(a){var s=this
return"("+s.a+" "+s.b+") => '"+s.c+"' "+s.d}}
A.ab.prototype={}
A.ac.prototype={
h(a){var s=this
return"               row: "+s.a+"\n            column: "+s.b+"\n         character: '"+s.c+"'\n    characterColor: "+s.d+"\n\n          pixelRow: "+s.e+"\n       pixelColumn: "+s.f+"\n         pixelIsOn: "+s.r+"\n    "}}
A.ae.prototype={
sZ(a){var s,r,q,p=this
if(a<0){s=p.d=a
for(r=p.b,q=p.a;s<0;){s+=r
p.d=s
p.c=B.a.k(p.c-1,q)}}else{s=p.b
p.c=B.a.k(p.c+B.a.F(a,s),p.a)
p.d=B.a.k(a,s)}},
gu(){return this.c*this.b+this.d},
su(a){var s=this,r=s.b
s.c=B.a.k(B.a.F(a,r),s.a)
s.d=B.a.k(a,r)}}
A.bH.prototype={
b8(a,b,c,d,e,f,g,h){var s,r=this,q=self.document
q.onfocus=A.b7(new A.cl(r))
q.onblur=A.b7(new A.cm(r))
q=r.w
q.tabIndex=-1
q.style.display="block"
q.style.outline="none"
s=q.getContext("2d")
if(s==null)s=t.m.a(s)
s.imageSmoothingEnabled=!1
q.onfocus=A.b7(new A.cn(r))
q.onblur=A.b7(new A.co(r))
b.style.display="flex"
b.style.alignItems="flex-start"
b.style.padding="0"
b.style.margin="0"
b.style.width="fit-content"
b.style.height="fit-content"
b.style.background="gray"
b.appendChild(q)
r.Y(0)},
X(a,b){return new A.z(B.a.k(a,this.b),B.a.k(b,this.c))},
a4(){var s=this.x,r=s.getContext("2d")
if(r==null)r=t.m.a(r)
r.save()
r.beginPath()
r.clearRect(0,0,s.width,s.height)
r.restore()
return r},
a6(){var s=this.w.getContext("2d")
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
r=A.dJ(b)
q=r.a
p=B.a.O(1,r.b)
l=m.y
if(!(a>=0&&a<l.length))return A.b(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.b(l,q)
o=l[q]
l.$flags&2&&A.c5(l)
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
r=A.dJ(b)
q=r.a
p=B.a.O(1,r.b)
l=m.y
if(!(a>=0&&a<l.length))return A.b(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.b(l,q)
o=l[q]
l.$flags&2&&A.c5(l)
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
b0(a,b){var s,r,q,p,o=this.X(b,a)
b=o.a
s=A.dJ(o.b)
r=s.a
q=B.a.O(1,s.b)
p=this.y
if(!(b>=0&&b<p.length))return A.b(p,b)
p=p[b]
if(!(r>=0&&r<p.length))return A.b(p,r)
return(p[r]&q)>>>0>0},
aV(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=this
if(e==null)e=k.c-c
if(b==null)b=k.b-d
k.a4()
if(c===0&&d===0&&e===k.c&&b===k.b){for(s=k.y,r=s.length,q=0;q<r;++q)for(p=0;o=s[q],p<o.length;++p){o.$flags&2&&A.c5(o)
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
for(p=c;p<m;++p)k.G(l,B.a.k(p,r),o,!1)}}k.a6()},
Y(a){return this.aV(0,null,0,0,null)},
bp(a,b,c,d,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.a4()
s=e.X(a,b)
a=s.a
b=s.b
r=B.a.bt(1,a0)-1
for(q=a0-1,p=t.t,o=e.x,n=0;n<8;++n){m=c[n]
l=m&r
m=A.a([],p)
for(k=a+n,j=0;j<a0;++j){i=e.b0(b+j,k)?1:0
m.push(B.a.O(i,q-j))}h=B.l.an(m,0,new A.ck())
switch(a1){case B.r:for(j=0;j<a0;++j){m=b+j
if((B.a.D(l,q-j)&1)>0)e.H(k,m,d,o,!1)
else e.G(k,m,o,!1)}break
case B.dO:for(j=0;j<a0;++j){m=b+j
if((B.a.D(l,q-j)&1)>0)e.G(k,m,o,!1)
else e.H(k,m,d,o,!1)}break
case B.dQ:for(j=0;j<a0;++j){g=q-j
if((B.a.D(l,g)&1)>0&&(B.a.b6(h,g)&1)===0)e.H(k,b+j,d,o,!1)}break
case B.dP:for(j=0;j<a0;++j)if((B.a.D(l,q-j)&1)>0)e.H(k,b+j,d,o,!1)
break
case B.dR:for(f=l&h,j=0;j<a0;++j)if((B.a.D(f,q-j)&1)>0)e.H(k,b+j,d,o,!1)
break
case B.dS:for(f=l&h,j=0;j<a0;++j)if((B.a.D(f,q-j)&1)>0)e.G(k,b+j,o,!1)
break
case B.dT:for(f=l&h,j=0;j<a0;++j)if((B.a.D(f,q-j)&1)===0)e.G(k,b+j,o,!1)
break
case B.dU:for(f=l&h,j=0;j<a0;++j){m=b+j
if((B.a.D(f,q-j)&1)===0)e.G(k,m,o,!1)
else e.H(k,m,d,o,!1)}break}}e.a6()},
b1(a,b,c){this.bp(c.a,c.b,b,a,8,B.r,!0,!1,!1)},
b5(a){var s,r,q,p,o,n,m,l,k=this,j=k.b
a=B.a.k(a,j)
for(s=j-a,r=k.y,q=r.length,p=0;p<s;++p){if(!(p<q))return A.b(r,p)
o=p+a
n=0
for(;m=r[p],n<m.length;++n){if(!(o<q))return A.b(r,o)
l=r[o]
if(!(n<l.length))return A.b(l,n)
l=l[n]
m.$flags&2&&A.c5(m)
m[n]=l}}for(;p<j;++p){if(!(p<q))return A.b(r,p)
n=0
for(;o=r[p],n<o.length;++n){o.$flags&2&&A.c5(o)
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
k.a6()},
M(){var s=this.w
s.style.opacity="1.0"
s.focus()},
L(){var s=this.w
s.style.opacity="0.5"
s.blur()}}
A.cl.prototype={
$0(){this.a.z=!0},
$S:1}
A.cm.prototype={
$0(){this.a.z=!1},
$S:1}
A.cn.prototype={
$0(){this.a.M()},
$S:1}
A.co.prototype={
$0(){this.a.L()},
$S:1}
A.ck.prototype={
$2(a,b){return(a|b)>>>0},
$S:7}
A.C.prototype={
U(){return"Mode."+this.b}}
A.ah.prototype={
U(){return"State."+this.b}}
A.cw.prototype={
b9(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=this,r=s.f
r.tabIndex=-1
r.onfocus=A.b7(new A.cx(s))
r.onblur=A.b7(new A.cy(s))
r.onkeydown=A.eI(new A.cz(s,l,new A.cD(),new A.cC(s)))
r.onclick=A.eI(new A.cA(s,new A.cE(s),o))
A.fM(A.ef(300),new A.cB(s))
s.L()
s.Y(0)},
gal(){var s=this.w
s===$&&A.X()
return s.gal()},
gah(){var s=this.w
s===$&&A.X()
return s.gah()},
af(a,b){return new A.z(B.a.k(a,this.a),B.a.k(b,this.b))},
aM(){var s=this,r=s.x
s.CW.I(0,new A.P(r.c,r.d," ","white"))
s.aT()
s.cy=!1},
aT(){var s,r,q,p,o,n,m,l,k,j
for(s=this.CW,r=A.fV(s,s.r,s.$ti.c),q=this.w,p=this.cx,o=r.$ti.c;r.q();){n=r.d
if(n==null)n=o.a(n)
m=n.a
l=n.b
if(p.aj(n.c)){k=p.p(0,n.c)
k.toString
j=k}else j=$.f1()
q===$&&A.X()
q.b1(n.d,j,new A.z(m*10,l*8))}if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.aN()}},
aB(a,b){var s,r=this.af(b,a)
b=r.a
a=r.b
s=this.ch
if(!(b>=0&&b<s.length))return A.b(s,b)
s=s[b]
if(!(a>=0&&a<s.length))return A.b(s,a)
return s[a].c},
aY(){var s,r=this.x
r.sZ(0)
s=r.c
if(s===this.a-1)this.aD()
else r.c=B.a.k(s+1,r.a)},
aD(){var s,r,q,p,o,n,m,l,k=this
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
s===$&&A.X()
s.b5(10)},
av(a,b,c,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a1==null?f.x.c:a1,d=f.af(e,c==null?f.x.d:c)
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
o.I(0,g)
if(j===n&&i===m){f.aD()
e.c=B.a.k(e.c-1,s)}e.sZ(e.d+1)}f.aT()
if(a0)f.aY()},
v(a,b,c){return this.av(a,null,b,!0,c)},
b_(a,b){return this.av(a,null,null,b,null)},
au(a,b,c,d){return this.av(a,b,c,!0,d)},
Y(a){var s,r,q,p,o=this,n=o.b,m=o.a
for(s=o.ch,r=0;r<m;++r)for(q=0;q<n;++q){if(!(r<s.length))return A.b(s,r)
p=s[r]
if(!(q<p.length))return A.b(p,q)
p=p[q]
p.c=" "
p.d="white"}s=o.w
s===$&&A.X()
s.aV(0,m*10,0,0,n*8)
s=o.x
s.c=0%s.a
s.sZ(0)},
bA(){if(this.ay!==B.e)A.bd(A.c9("Terminal already awaiting input."))
this.ay=B.j
var s=this.at
return new A.E(s,A.am(s).i("E<1>")).gak(0)},
M(){return this.gal().$0()},
L(){return this.gah().$0()}}
A.cE.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.w
i===$&&A.X()
s=J.e9(a.offsetX)
r=Math.max(Math.min(B.a.F(J.e9(a.offsetY)-1,i.e),i.b-1),0)
q=Math.max(Math.min(B.a.F(s-1,i.d),i.c-1),0)
p=B.a.l(r,10)
o=B.a.l(q,8)
n=j.aB(o,p)
m=j.af(p,o)
l=m.a
k=m.b
j=j.ch
if(!(l>=0&&l<j.length))return A.b(j,l)
j=j[l]
if(!(k>=0&&k<j.length))return A.b(j,k)
return new A.ac(p,o,n,j[k].d,r,q,i.b0(q,r))},
$S:17}
A.cD.prototype={
$1(a){var s=a.key
return new A.ab(s.length>1?"":s)},
$S:18}
A.cC.prototype={
$0(){var s,r,q,p,o,n=this.a,m=n.a,l=n.b,k=new A.ae(m,l)
k.su(n.y.gu())
s=A.a([],t.s)
r=n.z
q=r.b
while(p=k.c,o=k.d,p*l+o<r.c*q+r.d){s.push(n.aB(o,p))
p=k.c*l+k.d+1
k.c=B.a.k(B.a.F(p,l),m)
k.d=B.a.k(p,l)}return B.l.bC(s,"")},
$S:19}
A.cx.prototype={
$0(){var s=this.a.w
s===$&&A.X()
s.M()},
$S:1}
A.cy.prototype={
$0(){var s=this.a.w
s===$&&A.X()
s.L()},
$S:1}
A.cz.prototype={
$1(a){var s,r,q,p
a.preventDefault()
s=this.a
switch(s.ay){case B.e:break
case B.j:r=s.at
if(r.d!=null){r.I(0,this.c.$1(a))
s.ay=B.e}break
case B.u:s.aM()
$label0$1:{q=a.keyCode
if(13===q){r=s.as
if(r.d!=null){r.I(0,J.fg(this.d.$0()))
s.aY()
s.ay=B.e}break $label0$1}if(8===q){r=s.x
if(r.gu()>s.y.gu()){r.su(r.gu()-1)
s.b_(" ",!1)
r.su(r.gu()-1)}break $label0$1}p=a.key
if(p.length===1&&s.x.gu()<s.z.gu())s.b_(p,!1)}break
case B.v:break}},
$S:8}
A.cA.prototype={
$1(a){var s
a.preventDefault()
s=this.a
if(s.ay===B.v&&s.ax.d!=null){s.ax.I(0,this.b.$1(a))
s.ay=B.e}},
$S:8}
A.cB.prototype={
$1(a){var s,r,q,p=this.a,o=p.w
o===$&&A.X()
if(o.z&&J.a8(self.document.activeElement,o.w)&&p.ay===B.u)if(p.cy)p.aM()
else{s=p.x
r=s.c
s=s.d
q=$.f0()
o.b1("white",q,new A.z(r*10,s*8))
p.cy=!0}},
$S:20}
A.a1.prototype={
U(){return"Position."+this.b},
h(a){var s
switch(this){case B.d:s="O"
break
case B.i:s="X"
break
case B.c:s="."
break
default:s=null}return s},
ai(){if(this===B.d)return"violet"
if(this===B.i)return"lightgreen"
return"gray"}}
A.ce.prototype={
gJ(){var s,r,q,p=A.a([],t.t)
for(s=this.a,r=0;r<7;++r){if(0>=s.length)return A.b(s,0)
q=s[0]
if(!(r<q.length))return A.b(q,r)
if(q[r]===B.c)p.push(r)}return p},
aK(a){var s,r,q,p=this.a,o=p.length
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
bQ(a){var s,r=this.aK(a)
if(r===-1)throw A.c("Cannot move "+a+"...")
s=new A.cg(this,r,a)
if(s.$2(0,1))return!0
if(s.$2(1,0))return!0
if(s.$2(1,1))return!0
if(s.$2(-1,1))return!0
return!1},
a_(a){var s,r,q,p=this,o=p.a
if(0>=o.length)return A.b(o,0)
s=o[0]
if(!(a>=0&&a<s.length))return A.b(s,a)
if(s[a]===B.c){r=p.aK(a)
q=p.bQ(a)
if(!(r>=0&&r<o.length))return A.b(o,r)
o=o[r]
s=p.b
if(!(a<o.length))return A.b(o,a)
o[a]=s
return q}throw A.c("Cannot make move: "+a)},
aW(){var s,r,q,p,o,n,m,l,k=A.ei()
for(s=k.a,r=s.length,q=this.a,p=q.length,o=0;o<6;++o)for(n=0;n<7;++n){if(!(o<r))return A.b(s,o)
m=s[o]
if(!(o<p))return A.b(q,o)
l=q[o]
if(!(n<l.length))return A.b(l,n)
l=l[n]
if(!(n<m.length))return A.b(m,n)
m[n]=l}k.b=this.b
return k},
bH(){var s,r,q=this.aW()
for(;!0;){s=q.gJ()
r=s.length
if(r===0)break
r=$.fd().bF(r)
if(!(r>=0&&r<s.length))return A.b(s,r)
if(q.a_(s[r]))return q.b
else q.b=q.b===B.d?B.i:B.d}return B.c},
bE(a){var s,r,q,p,o,n,m,l,k=this,j=t.S
j=A.fA(j,j)
for(s=k.gJ(),r=s.length,q=0;q<s.length;s.length===r||(0,A.dx)(s),++q)j.a0(0,s[q],0)
for(s=k.gJ(),r=s.length,q=0;q<s.length;s.length===r||(0,A.dx)(s),++q){p=s[q]
o=k.aW()
if(o.a_(p))return p
for(n=0;n<a;++n)if(o.bH()===k.b){m=j.p(0,p)
m.toString
j.a0(0,p,m+1)}}l=new A.aF(j).gE(0)
if(!l.q())A.bd(A.eg())
return new A.aF(j).an(0,l.gt(),new A.cf(j))},
h(a){var s,r,q,p,o
for(s=this.a,r=0,q="";r<6;++r){for(p=0;p<7;++p,q=o){if(!(r<s.length))return A.b(s,r)
o=s[r]
if(!(p<o.length))return A.b(o,p)
o=q+o[p].h(0)}q+="\n"}return q.charCodeAt(0)==0?q:q}}
A.cg.prototype={
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
A.cf.prototype={
$2(a,b){var s=this.a,r=s.p(0,a)
r.toString
s=s.p(0,b)
s.toString
return r>s?a:b},
$S:7}
A.a9.prototype={
U(){return"GameResult."+this.b}};(function aliases(){var s=J.R.prototype
s.b7=s.h})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._static_2,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u
s(A,"hS","fR",3)
s(A,"hT","fS",3)
s(A,"hU","fT",3)
r(A,"eS","hN",0)
s(A,"hV","hH",4)
q(A,"hW","hI",5)
p(A.k.prototype,"gaJ","C",5)
o(A.aS.prototype,"gbn","bo",0)
var n
o(n=A.bH.prototype,"gal","M",0)
o(n,"gah","L",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.e,null)
q(A.e,[A.dE,J.bn,J.bf,A.j,A.Z,A.cp,A.bo,A.bt,A.ax,A.al,A.bj,A.cG,A.ch,A.aw,A.b_,A.aG,A.cc,A.bs,A.x,A.bU,A.bZ,A.b1,A.bL,A.Y,A.aj,A.bO,A.bN,A.T,A.k,A.bM,A.bS,A.bV,A.aS,A.bX,A.dd,A.aM,A.d5,A.ak,A.m,A.av,A.cO,A.bE,A.aN,A.cP,A.q,A.bY,A.bI,A.d3,A.P,A.ab,A.ac,A.ae,A.bH,A.cw,A.ce])
q(J.bn,[J.bp,J.az,J.aB,J.aA,J.aC,J.aa,J.a_])
q(J.aB,[J.R,J.p,A.bu,A.aJ])
q(J.R,[J.bF,J.a2,J.Q])
r(J.cb,J.p)
q(J.aa,[J.ay,J.bq])
q(A.j,[A.aE,A.I,A.br,A.bK,A.bQ,A.bG,A.bT,A.bg,A.B,A.aO,A.bJ,A.ai,A.bi])
q(A.Z,[A.c6,A.c7,A.cv,A.dr,A.dt,A.cL,A.cK,A.dh,A.cV,A.d1,A.ct,A.cs,A.d9,A.cE,A.cD,A.cz,A.cA,A.cB])
q(A.c6,[A.dw,A.cM,A.cN,A.db,A.da,A.ca,A.cQ,A.cY,A.cX,A.cU,A.cS,A.cR,A.d0,A.d_,A.cZ,A.cu,A.cr,A.d6,A.dj,A.dl,A.d8,A.cl,A.cm,A.cn,A.co,A.cC,A.cx,A.cy])
r(A.bk,A.bo)
r(A.bW,A.al)
r(A.z,A.bW)
r(A.bl,A.bj)
r(A.aL,A.I)
q(A.cv,[A.cq,A.at])
r(A.a0,A.aG)
r(A.aF,A.bk)
r(A.aD,A.a0)
q(A.c7,[A.ds,A.di,A.dn,A.cW,A.d2,A.cd,A.ck,A.cg,A.cf])
q(A.aJ,[A.bv,A.ad])
q(A.ad,[A.aU,A.aW])
r(A.aV,A.aU)
r(A.aH,A.aV)
r(A.aX,A.aW)
r(A.aI,A.aX)
q(A.aH,[A.bw,A.bx])
q(A.aI,[A.by,A.bz,A.bA,A.bB,A.bC,A.aK,A.bD])
r(A.b2,A.bT)
r(A.b0,A.aj)
r(A.aR,A.b0)
r(A.E,A.aR)
r(A.bP,A.bO)
r(A.aQ,A.bP)
r(A.aP,A.bN)
r(A.bR,A.bS)
r(A.d7,A.dd)
r(A.aZ,A.aM)
r(A.aT,A.aZ)
q(A.B,[A.ag,A.bm])
q(A.cO,[A.C,A.ah,A.a1,A.a9])
s(A.aU,A.m)
s(A.aV,A.ax)
s(A.aW,A.m)
s(A.aX,A.ax)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{d:"int",r:"double",ih:"num",D:"String",c2:"bool",q:"Null",i:"List",e:"Object",it:"Map"},mangledNames:{},types:["~()","q()","q(@)","~(~())","~(@)","~(e,y)","q(e,y)","d(d,d)","q(l)","H<~>()","@(@)","@(@,D)","@(D)","q(~())","q(@,y)","~(d,@)","~(e?,e?)","ac(l)","ab(l)","D()","~(cF)","c2(d,d)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.z&&a.b(c.a)&&b.b(c.b)}}
A.hb(v.typeUniverse,JSON.parse('{"bF":"R","a2":"R","Q":"R","bp":{"c2":[],"h":[]},"az":{"q":[],"h":[]},"aB":{"l":[]},"R":{"l":[]},"p":{"i":["1"],"l":[]},"cb":{"p":["1"],"i":["1"],"l":[]},"aa":{"r":[]},"ay":{"r":[],"d":[],"h":[]},"bq":{"r":[],"h":[]},"a_":{"D":[],"h":[]},"aE":{"j":[]},"aL":{"I":[],"j":[]},"br":{"j":[]},"bK":{"j":[]},"b_":{"y":[]},"bQ":{"j":[]},"bG":{"j":[]},"a0":{"aG":["1","2"]},"aD":{"a0":["1","2"],"aG":["1","2"]},"bu":{"l":[],"h":[]},"aJ":{"l":[]},"bv":{"l":[],"h":[]},"ad":{"v":["1"],"l":[]},"aH":{"m":["r"],"i":["r"],"v":["r"],"l":[]},"aI":{"m":["d"],"i":["d"],"v":["d"],"l":[]},"bw":{"m":["r"],"i":["r"],"v":["r"],"l":[],"h":[],"m.E":"r"},"bx":{"m":["r"],"i":["r"],"v":["r"],"l":[],"h":[],"m.E":"r"},"by":{"m":["d"],"i":["d"],"v":["d"],"l":[],"h":[],"m.E":"d"},"bz":{"m":["d"],"i":["d"],"v":["d"],"l":[],"h":[],"m.E":"d"},"bA":{"m":["d"],"i":["d"],"v":["d"],"l":[],"h":[],"m.E":"d"},"bB":{"m":["d"],"i":["d"],"v":["d"],"l":[],"h":[],"m.E":"d"},"bC":{"cI":[],"m":["d"],"i":["d"],"v":["d"],"l":[],"h":[],"m.E":"d"},"aK":{"m":["d"],"i":["d"],"v":["d"],"l":[],"h":[],"m.E":"d"},"bD":{"m":["d"],"i":["d"],"v":["d"],"l":[],"h":[],"m.E":"d"},"bT":{"j":[]},"b2":{"I":[],"j":[]},"b1":{"cF":[]},"Y":{"j":[]},"E":{"aj":["1"]},"aP":{"bN":["1"]},"k":{"H":["1"]},"aR":{"aj":["1"]},"b0":{"aj":["1"]},"aT":{"aM":["1"]},"aZ":{"aM":["1"]},"bg":{"j":[]},"I":{"j":[]},"B":{"j":[]},"ag":{"j":[]},"bm":{"j":[]},"aO":{"j":[]},"bJ":{"j":[]},"ai":{"j":[]},"bi":{"j":[]},"bE":{"j":[]},"aN":{"j":[]},"bY":{"y":[]},"fw":{"i":["d"]},"fP":{"i":["d"]},"fO":{"i":["d"]},"fu":{"i":["d"]},"fN":{"i":["d"]},"fv":{"i":["d"]},"cI":{"i":["d"]},"fq":{"i":["r"]},"fr":{"i":["r"]}}'))
A.ha(v.typeUniverse,JSON.parse('{"bk":1,"ax":1,"bj":2,"aF":1,"bs":1,"ad":1,"aR":1,"bP":1,"bO":1,"b0":1,"bS":1,"bR":1,"bV":1,"aS":1,"bX":1,"aZ":1,"bo":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.e_
return{o:s("P"),Q:s("j"),Z:s("ir"),I:s("a9"),U:s("p<P>"),G:s("p<i<P>>"),w:s("p<i<a1>>"),f:s("p<e>"),u:s("p<a1>"),s:s("p<D>"),x:s("p<cI>"),b:s("p<@>"),t:s("p<d>"),T:s("az"),m:s("l"),g:s("Q"),p:s("v<@>"),V:s("ab"),j:s("i<@>"),q:s("ac"),P:s("q"),K:s("e"),L:s("iu"),F:s("+()"),l:s("y"),N:s("D"),E:s("cF"),R:s("h"),c:s("I"),B:s("a2"),d:s("k<@>"),a:s("k<d>"),D:s("k<~>"),y:s("c2"),i:s("r"),z:s("@"),v:s("@(e)"),C:s("@(e,y)"),S:s("d"),A:s("0&*"),_:s("e*"),O:s("H<q>?"),X:s("e?"),H:s("ih"),n:s("~"),e:s("~(e)"),k:s("~(e,y)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.G=J.bn.prototype
B.l=J.p.prototype
B.a=J.ay.prototype
B.H=J.aa.prototype
B.h=J.a_.prototype
B.I=J.Q.prototype
B.J=J.aB.prototype
B.t=J.bF.prototype
B.m=J.a2.prototype
B.n=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.w=function() {
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
B.B=function(getTagFallback) {
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
B.x=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.A=function(hooks) {
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
B.z=function(hooks) {
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
B.y=function(hooks) {
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
B.o=function(hooks) { return hooks; }

B.C=new A.bE()
B.f=new A.cp()
B.D=new A.d3()
B.b=new A.d7()
B.E=new A.bY()
B.F=new A.av(0)
B.p=new A.a9("human")
B.q=new A.a9("computer")
B.k=new A.a9("tie")
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
B.dN=new A.bl(["\u263a",B.d8,"\u263b",B.aa,"\u2665",B.dF,"\u2666",B.c5,"\u2663",B.b3,"\u2660",B.bf,"\u2022",B.ay,"\u25d8",B.aB,"\u25cb",B.aN,"\u25d9",B.cT,"\u2642",B.dE,"\u2640",B.dD,"\u266a",B.cQ,"\u266b",B.U,"\u263c",B.Z,"\u25ba",B.av,"\u25c4",B.bB,"\u2195",B.cj,"\u203c",B.cf,"\xb6",B.cp,"\xa7",B.cq,"\u25ac",B.bP,"\u21a8",B.bS,"\u2191",B.P,"\u2193",B.dd,"\u2192",B.d6,"\u2190",B.as,"\u221f",B.bX,"\u2194",B.bu,"\u25b2",B.a8,"\u25bc",B.bT," ",B.aZ,"!",B.bC,'"',B.X,"#",B.am,"$",B.c0,"%",B.O,"&",B.cC,"'",B.al,"(",B.T,")",B.by,"*",B.ct,"+",B.dM,",",B.c2,"-",B.bt,".",B.ch,"/",B.a3,"0",B.b6,"1",B.ck,"2",B.bZ,"3",B.dH,"4",B.bA,"5",B.d7,"6",B.dp,"7",B.c_,"8",B.cw,"9",B.bd,":",B.d0,";",B.aQ,"<",B.bz,"=",B.bo,">",B.aA,"?",B.aq,"@",B.dk,"A",B.cb,"B",B.aK,"C",B.ac,"D",B.a4,"E",B.ai,"F",B.cn,"G",B.ao,"H",B.ar,"I",B.cL,"J",B.bN,"K",B.bF,"L",B.bE,"M",B.aL,"N",B.W,"O",B.cV,"P",B.bj,"Q",B.cF,"R",B.N,"S",B.af,"T",B.dy,"U",B.aI,"V",B.a0,"W",B.cO,"X",B.cI,"Y",B.a2,"Z",B.R,"[",B.bv,"\\",B.cA,"]",B.bx,"^",B.dn,"_",B.M,"`",B.aJ,"a",B.de,"b",B.ce,"c",B.cH,"d",B.b4,"e",B.dr,"f",B.aO,"g",B.cE,"h",B.az,"i",B.cu,"j",B.bI,"k",B.bb,"l",B.bK,"m",B.bs,"n",B.bL,"o",B.be,"p",B.dv,"q",B.ds,"r",B.bp,"s",B.cY,"t",B.cR,"u",B.c8,"v",B.b2,"w",B.bi,"x",B.bG,"y",B.dB,"z",B.dc,"{",B.b8,"|",B.cX,"}",B.aD,"~",B.dL,"\u2302",B.b1,"\xc7",B.au,"\xfc",B.da,"\xe9",B.dA,"\xe2",B.c1,"\xe4",B.ah,"\xe0",B.b5,"\xe5",B.a7,"\xe7",B.bl,"\xea",B.dj,"\xeb",B.aM,"\xe8",B.cZ,"\xef",B.db,"\xee",B.cP,"\xec",B.aY,"\xc4",B.dG,"\xc5",B.cW,"\xc9",B.bD,"\xe6",B.dz,"\xc6",B.aR,"\xf4",B.dt,"\xf6",B.ad,"\xf2",B.dI,"\xfb",B.aP,"\xf9",B.cS,"\xff",B.ax,"\xd6",B.aj,"\xdc",B.d4,"\xa2",B.Y,"\xa3",B.aG,"\xa5",B.b_,"\u20a7",B.df,"\u0192",B.bO,"\xe1",B.aC,"\xed",B.cd,"\xf3",B.aF,"\xfa",B.cx,"\xf1",B.aV,"\xd1",B.cN,"\xaa",B.ae,"\xba",B.ca,"\xbf",B.d5,"\u2310",B.aX,"\xac",B.aE,"\xbd",B.d_,"\xbc",B.aw,"\xa1",B.bR,"\xab",B.bQ,"\xbb",B.ba,"\u2591",B.cz,"\u2592",B.du,"\u2593",B.bJ,"\u2502",B.b0,"\u2524",B.aW,"\u2561",B.bY,"\u2562",B.dK,"\u2556",B.cl,"\u2555",B.aS,"\u2563",B.ab,"\u2551",B.cr,"\u2557",B.c9,"\u255d",B.cv,"\u255c",B.ap,"\u255b",B.a1,"\u2510",B.a6,"\u2514",B.a_,"\u2534",B.bW,"\u252c",B.bn,"\u251c",B.d3,"\u2500",B.bU,"\u253c",B.cs,"\u255e",B.cD,"\u255f",B.bc,"\u255a",B.dq,"\u2554",B.di,"\u2569",B.bH,"\u2566",B.bw,"\u2560",B.aU,"\u2550",B.aT,"\u256c",B.dC,"\u2567",B.cJ,"\u2568",B.K,"\u2564",B.dw,"\u2565",B.c3,"\u2559",B.cm,"\u2558",B.br,"\u2552",B.cg,"\u2553",B.cG,"\u256b",B.cM,"\u256a",B.bM,"\u2518",B.dg,"\u250c",B.b7,"\u2588",B.c4,"\u2584",B.c7,"\u258c",B.bh,"\u2590",B.co,"\u2580",B.d2,"\u03b1",B.dJ,"\xdf",B.dl,"\u0393",B.an,"\u03c0",B.c6,"\u03a3",B.dh,"\u03c3",B.bk,"\xb5",B.bq,"\u03c4",B.cB,"\u03a6",B.ag,"\u0398",B.aH,"\u03a9",B.ak,"\u03b4",B.L,"\u221e",B.dx,"\u03c6",B.bm,"\u03b5",B.a9,"\u2229",B.ci,"\u2261",B.cK,"\xb1",B.a5,"\u2265",B.b9,"\u2264",B.cU,"\u2320",B.bg,"\u2321",B.d9,"\xf7",B.cc,"\u2248",B.Q,"\xb0",B.cy,"\u2219",B.S,"\xb7",B.dm,"\u221a",B.V,"\u207f",B.bV,"\xb2",B.at,"\u25a0",B.d1],A.e_("bl<D,i<d>>"))
B.r=new A.C("replace")
B.dO=new A.C("inverse")
B.dP=new A.C("over")
B.dQ=new A.C("under")
B.dR=new A.C("stain")
B.dS=new A.C("delete")
B.dT=new A.C("maskDestination")
B.dU=new A.C("maskSource")
B.d=new A.a1("o")
B.i=new A.a1("x")
B.c=new A.a1("empty")
B.e=new A.ah("ready")
B.j=new A.ah("awaitingKey")
B.u=new A.ah("awaitingString")
B.v=new A.ah("awaitingMouseClick")
B.dV=A.A("io")
B.dW=A.A("ip")
B.dX=A.A("fq")
B.dY=A.A("fr")
B.dZ=A.A("fu")
B.e_=A.A("fv")
B.e0=A.A("fw")
B.e1=A.A("e")
B.e2=A.A("fN")
B.e3=A.A("cI")
B.e4=A.A("fO")
B.e5=A.A("fP")})();(function staticFields(){$.d4=null
$.w=A.a([],t.f)
$.ej=null
$.ec=null
$.eb=null
$.eW=null
$.eR=null
$.eZ=null
$.dp=null
$.du=null
$.e1=null
$.aY=A.a([],A.e_("p<i<e>?>"))
$.an=null
$.b8=null
$.b9=null
$.dU=!1
$.f=B.b})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"iq","dy",()=>A.i4("_$dart_dartClosure"))
s($,"j_","fc",()=>B.b.b2(new A.dw()))
s($,"iy","f2",()=>A.J(A.cH({
toString:function(){return"$receiver$"}})))
s($,"iz","f3",()=>A.J(A.cH({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"iA","f4",()=>A.J(A.cH(null)))
s($,"iB","f5",()=>A.J(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"iE","f8",()=>A.J(A.cH(void 0)))
s($,"iF","f9",()=>A.J(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"iD","f7",()=>A.J(A.ep(null)))
s($,"iC","f6",()=>A.J(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"iH","fb",()=>A.J(A.ep(void 0)))
s($,"iG","fa",()=>A.J(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"iI","e7",()=>A.fQ())
s($,"is","dz",()=>$.fc())
s($,"iY","dA",()=>A.e4(B.e1))
s($,"ix","f1",()=>A.dG(8,0,t.S))
s($,"iw","f0",()=>A.dG(8,255,t.S))
s($,"j0","fd",()=>B.D)
s($,"j1","O",()=>{var r=A.hj(A.i5(A.ij(),"document"),"getElementById","four")
r.toString
r=A.fK("#1f1f1f",31,r,15)
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.bu,ArrayBufferView:A.aJ,DataView:A.bv,Float32Array:A.bw,Float64Array:A.bx,Int16Array:A.by,Int32Array:A.bz,Int8Array:A.bA,Uint16Array:A.bB,Uint32Array:A.bC,Uint8ClampedArray:A.aK,CanvasPixelArray:A.aK,Uint8Array:A.bD})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.ad.$nativeSuperclassTag="ArrayBufferView"
A.aU.$nativeSuperclassTag="ArrayBufferView"
A.aV.$nativeSuperclassTag="ArrayBufferView"
A.aH.$nativeSuperclassTag="ArrayBufferView"
A.aW.$nativeSuperclassTag="ArrayBufferView"
A.aX.$nativeSuperclassTag="ArrayBufferView"
A.aI.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.c4
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=four.js.map
