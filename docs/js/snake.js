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
if(a[b]!==s){A.ht(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.dg(b)
return new s(c,this)}:function(){if(s===null)s=A.dg(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.dg(a).prototype
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
dk(a,b,c,d){return{i:a,p:b,e:c,x:d}},
di(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.dj==null){A.hl()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.dH("Return interceptor for "+A.p(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.cw
if(o==null)o=$.cw=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.hp(a)
if(p!=null)return p
if(typeof a=="function")return B.K
s=Object.getPrototypeOf(a)
if(s==null)return B.x
if(s===Object.prototype)return B.x
if(typeof q=="function"){o=$.cw
if(o==null)o=$.cw=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.q,enumerable:false,writable:true,configurable:true})
return B.q}return B.q},
Z(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ap.prototype
return J.bb.prototype}if(typeof a=="string")return J.a4.prototype
if(a==null)return J.aq.prototype
if(typeof a=="boolean")return J.ba.prototype
if(Array.isArray(a))return J.m.prototype
if(typeof a!="object"){if(typeof a=="function")return J.M.prototype
if(typeof a=="symbol")return J.at.prototype
if(typeof a=="bigint")return J.ar.prototype
return a}if(a instanceof A.h)return a
return J.di(a)},
e9(a){if(typeof a=="string")return J.a4.prototype
if(a==null)return a
if(Array.isArray(a))return J.m.prototype
if(typeof a!="object"){if(typeof a=="function")return J.M.prototype
if(typeof a=="symbol")return J.at.prototype
if(typeof a=="bigint")return J.ar.prototype
return a}if(a instanceof A.h)return a
return J.di(a)},
hf(a){if(a==null)return a
if(Array.isArray(a))return J.m.prototype
if(typeof a!="object"){if(typeof a=="function")return J.M.prototype
if(typeof a=="symbol")return J.at.prototype
if(typeof a=="bigint")return J.ar.prototype
return a}if(a instanceof A.h)return a
return J.di(a)},
hg(a){if(typeof a=="number")return J.a3.prototype
if(a==null)return a
if(!(a instanceof A.h))return J.ac.prototype
return a},
T(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.Z(a).u(a,b)},
G(a){return J.Z(a).gj(a)},
et(a){return J.hf(a).gad(a)},
dq(a){return J.e9(a).gm(a)},
eu(a){return J.Z(a).gl(a)},
dr(a){return J.hg(a).bs(a)},
aZ(a){return J.Z(a).h(a)},
b9:function b9(){},
ba:function ba(){},
aq:function aq(){},
as:function as(){},
O:function O(){},
bp:function bp(){},
ac:function ac(){},
M:function M(){},
ar:function ar(){},
at:function at(){},
m:function m(a){this.$ti=a},
bL:function bL(a){this.$ti=a},
b0:function b0(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
a3:function a3(){},
ap:function ap(){},
bb:function bb(){},
a4:function a4(){}},A={cZ:function cZ(){},
eM(a){return new A.a5("Field '"+a+"' has not been initialized.")},
eL(a){return new A.a5("Field '"+a+"' has already been initialized.")},
Q(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
d5(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
dD(a,b,c){return A.d5(A.Q(A.Q(c,a),b))},
df(a,b,c){return a},
ec(a){var s,r
for(s=$.K.length,r=0;r<s;++r)if(a===$.K[r])return!0
return!1},
dz(){return new A.bs("No element")},
a5:function a5(a){this.a=a},
bW:function bW(){},
bd:function bd(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ao:function ao(){},
eg(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
hS(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.E.b(a)},
p(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.aZ(a)
return s},
aC(a){var s,r=$.dA
if(r==null)r=$.dA=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
bQ(a){var s,r,q,p
if(a instanceof A.h)return A.w(A.aY(a),null)
s=J.Z(a)
if(s===B.J||s===B.L||t.A.b(a)){r=B.u(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.w(A.aY(a),null)},
dB(a){if(a==null||typeof a=="number"||A.dc(a))return J.aZ(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.U)return a.h(0)
if(a instanceof A.ag)return a.aA(!0)
return"Instance of '"+A.bQ(a)+"'"},
eP(a){var s=a.$thrownJsError
if(s==null)return null
return A.a_(s)},
eb(a){throw A.d(A.cL(a))},
c(a,b){if(a==null)J.dq(a)
throw A.d(A.e8(a,b))},
e8(a,b){var s,r="index"
if(!A.e_(b))return new A.C(!0,b,r,null)
s=J.dq(a)
if(b<0||b>=s)return A.eH(b,s,a,r)
return new A.aa(null,null,!0,b,r,"Value not in range")},
cL(a){return new A.C(!0,a,null,null)},
d(a){return A.r(a,new Error())},
r(a,b){var s
if(a==null)a=new A.H()
b.dartException=a
s=A.hv
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
hv(){return J.aZ(this.dartException)},
dn(a,b){throw A.r(a,b==null?new Error():b)},
cT(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.dn(A.fE(a,b,c),s)},
fE(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.aG("'"+s+"': Cannot "+o+" "+l+k+n)},
dm(a){throw A.d(A.b4(a))},
I(a){var s,r,q,p,o,n
a=A.hs(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.a([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.cb(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
cc(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
dG(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
d_(a,b){var s=b==null,r=s?null:b.method
return new A.bc(a,r,s?null:b.receiver)},
al(a){if(a==null)return new A.bO(a)
if(a instanceof A.an)return A.S(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.S(a,a.dartException)
return A.h5(a)},
S(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
h5(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.a.b2(r,16)&8191)===10)switch(q){case 438:return A.S(a,A.d_(A.p(s)+" (Error "+q+")",null))
case 445:case 5007:A.p(s)
return A.S(a,new A.aB())}}if(a instanceof TypeError){p=$.ej()
o=$.ek()
n=$.el()
m=$.em()
l=$.ep()
k=$.eq()
j=$.eo()
$.en()
i=$.es()
h=$.er()
g=p.t(s)
if(g!=null)return A.S(a,A.d_(s,g))
else{g=o.t(s)
if(g!=null){g.method="call"
return A.S(a,A.d_(s,g))}else if(n.t(s)!=null||m.t(s)!=null||l.t(s)!=null||k.t(s)!=null||j.t(s)!=null||m.t(s)!=null||i.t(s)!=null||h.t(s)!=null)return A.S(a,new A.aB())}return A.S(a,new A.bv(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.aE()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.S(a,new A.C(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.aE()
return a},
a_(a){var s
if(a instanceof A.an)return a.b
if(a==null)return new A.aO(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.aO(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
dl(a){if(a==null)return J.G(a)
if(typeof a=="object")return A.aC(a)
return J.G(a)},
ha(a){if(typeof a=="number")return B.o.gj(a)
if(a instanceof A.bF)return A.aC(a)
if(a instanceof A.ag)return a.gj(a)
return A.dl(a)},
he(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=a.length
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
if(m==null)o[q]=b.L(q,p)
else m.b=p}else if(typeof q=="number"&&(q&0x3fffffff)===q){l=b.c
if(l==null){n=Object.create(null)
n["<non-identifier-key>"]=n
delete n["<non-identifier-key>"]
b.c=n
l=n}m=l[q]
if(m==null)l[q]=b.L(q,p)
else m.b=p}else{k=b.d
if(k==null){n=Object.create(null)
n["<non-identifier-key>"]=n
delete n["<non-identifier-key>"]
b.d=n
k=n}j=b.aa(q)
i=k[j]
if(i==null)k[j]=[b.L(q,p)]
else{r=b.ab(i,q)
if(r>=0)i[r].b=p
else i.push(b.L(q,p))}}}return b},
fM(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(A.eE("Unsupported number of arguments for wrapped closure"))},
bH(a,b){var s=a.$identity
if(!!s)return s
s=A.hb(a,b)
a.$identity=s
return s},
hb(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.fM)},
eB(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.c0().constructor.prototype):Object.create(new A.am(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.dx(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.ex(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.dx(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
ex(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.ev)}throw A.d("Error in functionType of tearoff")},
ey(a,b,c,d){var s=A.dw
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
dx(a,b,c,d){if(c)return A.eA(a,b,d)
return A.ey(b.length,d,a,b)},
ez(a,b,c,d){var s=A.dw,r=A.ew
switch(b?-1:a){case 0:throw A.d(new A.bq("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
eA(a,b,c){var s,r
if($.du==null)$.du=A.dt("interceptor")
if($.dv==null)$.dv=A.dt("receiver")
s=b.length
r=A.ez(s,c,a,b)
return r},
dg(a){return A.eB(a)},
ev(a,b){return A.aU(v.typeUniverse,A.aY(a.a),b)},
dw(a){return a.a},
ew(a){return a.b},
dt(a){var s,r,q,p=new A.am("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.d(A.b_("Field name "+a+" not found.",null))},
hh(a){return v.getIsolateTag(a)},
hp(a){var s,r,q,p,o,n=$.ea.$1(a),m=$.cN[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.cR[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.e5.$2(a,n)
if(q!=null){m=$.cN[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.cR[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.cS(s)
$.cN[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.cR[n]=s
return s}if(p==="-"){o=A.cS(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.ee(a,s)
if(p==="*")throw A.d(A.dH(n))
if(v.leafTags[n]===true){o=A.cS(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.ee(a,s)},
ee(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.dk(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
cS(a){return J.dk(a,!1,null,!!a.$iv)},
hr(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.cS(s)
else return J.dk(s,c,null,null)},
hl(){if(!0===$.dj)return
$.dj=!0
A.hm()},
hm(){var s,r,q,p,o,n,m,l
$.cN=Object.create(null)
$.cR=Object.create(null)
A.hk()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.ef.$1(o)
if(n!=null){m=A.hr(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
hk(){var s,r,q,p,o,n,m=B.A()
m=A.aj(B.B,A.aj(B.C,A.aj(B.v,A.aj(B.v,A.aj(B.D,A.aj(B.E,A.aj(B.F(B.u),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.ea=new A.cO(p)
$.e5=new A.cP(o)
$.ef=new A.cQ(n)},
aj(a,b){return a(b)||b},
hc(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
hs(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
A:function A(a,b){this.a=a
this.b=b},
b5:function b5(){},
b7:function b7(a,b){this.a=a
this.$ti=b},
cb:function cb(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aB:function aB(){},
bc:function bc(a,b,c){this.a=a
this.b=b
this.c=c},
bv:function bv(a){this.a=a},
bO:function bO(a){this.a=a},
an:function an(a,b){this.a=a
this.b=b},
aO:function aO(a){this.a=a
this.b=null},
U:function U(){},
bI:function bI(){},
bJ:function bJ(){},
c1:function c1(){},
c0:function c0(){},
am:function am(a,b){this.a=a
this.b=b},
bq:function bq(a){this.a=a},
av:function av(){},
bM:function bM(a,b){this.a=a
this.b=b
this.c=null},
au:function au(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cO:function cO(a){this.a=a},
cP:function cP(a){this.a=a},
cQ:function cQ(a){this.a=a},
ag:function ag(){},
bC:function bC(){},
W(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.e8(b,a))},
be:function be(){},
az:function az(){},
bf:function bf(){},
a7:function a7(){},
ax:function ax(){},
ay:function ay(){},
bg:function bg(){},
bh:function bh(){},
bi:function bi(){},
bj:function bj(){},
bk:function bk(){},
bl:function bl(){},
bm:function bm(){},
aA:function aA(){},
bn:function bn(){},
aI:function aI(){},
aJ:function aJ(){},
aK:function aK(){},
aL:function aL(){},
d2(a,b){var s=b.c
return s==null?b.c=A.aS(a,"a1",[b.x]):s},
dC(a){var s=a.w
if(s===6||s===7)return A.dC(a.x)
return s===11||s===12},
eS(a){return a.as},
dh(a){return A.cD(v.typeUniverse,a,!1)},
X(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.X(a1,s,a3,a4)
if(r===s)return a2
return A.dQ(a1,r,!0)
case 7:s=a2.x
r=A.X(a1,s,a3,a4)
if(r===s)return a2
return A.dP(a1,r,!0)
case 8:q=a2.y
p=A.ai(a1,q,a3,a4)
if(p===q)return a2
return A.aS(a1,a2.x,p)
case 9:o=a2.x
n=A.X(a1,o,a3,a4)
m=a2.y
l=A.ai(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.d8(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.ai(a1,j,a3,a4)
if(i===j)return a2
return A.dR(a1,k,i)
case 11:h=a2.x
g=A.X(a1,h,a3,a4)
f=a2.y
e=A.h2(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.dO(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.ai(a1,d,a3,a4)
o=a2.x
n=A.X(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.d9(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.d(A.b2("Attempted to substitute unexpected RTI kind "+a0))}},
ai(a,b,c,d){var s,r,q,p,o=b.length,n=A.cE(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.X(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
h3(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.cE(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.X(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
h2(a,b,c,d){var s,r=b.a,q=A.ai(a,r,c,d),p=b.b,o=A.ai(a,p,c,d),n=b.c,m=A.h3(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.bB()
s.a=q
s.b=o
s.c=m
return s},
a(a,b){a[v.arrayRti]=b
return a},
e7(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.hj(s)
return a.$S()}return null},
hn(a,b){var s
if(A.dC(b))if(a instanceof A.U){s=A.e7(a)
if(s!=null)return s}return A.aY(a)},
aY(a){if(a instanceof A.h)return A.dY(a)
if(Array.isArray(a))return A.da(a)
return A.db(J.Z(a))},
da(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
dY(a){var s=a.$ti
return s!=null?s:A.db(a)},
db(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.fL(a,s)},
fL(a,b){var s=a instanceof A.U?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.fk(v.typeUniverse,s.name)
b.$ccache=r
return r},
hj(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.cD(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
hi(a){return A.Y(A.dY(a))},
de(a){var s
if(a instanceof A.ag)return A.hd(a.$r,a.aq())
s=a instanceof A.U?A.e7(a):null
if(s!=null)return s
if(t.R.b(a))return J.eu(a).a
if(Array.isArray(a))return A.da(a)
return A.aY(a)},
Y(a){var s=a.r
return s==null?a.r=new A.bF(a):s},
hd(a,b){var s,r,q=b,p=q.length
if(p===0)return t.F
if(0>=p)return A.c(q,0)
s=A.aU(v.typeUniverse,A.de(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.c(q,r)
s=A.dS(v.typeUniverse,s,A.de(q[r]))}return A.aU(v.typeUniverse,s,a)},
B(a){return A.Y(A.cD(v.typeUniverse,a,!1))},
fK(a){var s,r,q,p,o=this
if(o===t.K)return A.J(o,a,A.fR)
if(A.a0(o))return A.J(o,a,A.fV)
s=o.w
if(s===6)return A.J(o,a,A.fI)
if(s===1)return A.J(o,a,A.e0)
if(s===7)return A.J(o,a,A.fN)
if(o===t.S)r=A.e_
else if(o===t.i||o===t.H)r=A.fQ
else if(o===t.N)r=A.fT
else r=o===t.y?A.dc:null
if(r!=null)return A.J(o,a,r)
if(s===8){q=o.x
if(o.y.every(A.a0)){o.f="$i"+q
if(q==="f")return A.J(o,a,A.fP)
return A.J(o,a,A.fU)}}else if(s===10){p=A.hc(o.x,o.y)
return A.J(o,a,p==null?A.e0:p)}return A.J(o,a,A.fG)},
J(a,b,c){a.b=c
return a.b(b)},
fJ(a){var s=this,r=A.fF
if(A.a0(s))r=A.fx
else if(s===t.K)r=A.fu
else if(A.ak(s))r=A.fH
if(s===t.S)r=A.fq
else if(s===t.M)r=A.fr
else if(s===t.N)r=A.fv
else if(s===t.x)r=A.fw
else if(s===t.y)r=A.fm
else if(s===t.u)r=A.fn
else if(s===t.H)r=A.fs
else if(s===t.Y)r=A.ft
else if(s===t.i)r=A.fo
else if(s===t.B)r=A.fp
s.a=r
return s.a(a)},
fG(a){var s=this
if(a==null)return A.ak(s)
return A.ho(v.typeUniverse,A.hn(a,s),s)},
fI(a){if(a==null)return!0
return this.x.b(a)},
fU(a){var s,r=this
if(a==null)return A.ak(r)
s=r.f
if(a instanceof A.h)return!!a[s]
return!!J.Z(a)[s]},
fP(a){var s,r=this
if(a==null)return A.ak(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.h)return!!a[s]
return!!J.Z(a)[s]},
fF(a){var s=this
if(a==null){if(A.ak(s))return a}else if(s.b(a))return a
throw A.r(A.dV(a,s),new Error())},
fH(a){var s=this
if(a==null||s.b(a))return a
throw A.r(A.dV(a,s),new Error())},
dV(a,b){return new A.aQ("TypeError: "+A.dI(a,A.w(b,null)))},
dI(a,b){return A.bK(a)+": type '"+A.w(A.de(a),null)+"' is not a subtype of type '"+b+"'"},
F(a,b){return new A.aQ("TypeError: "+A.dI(a,b))},
fN(a){var s=this
return s.x.b(a)||A.d2(v.typeUniverse,s).b(a)},
fR(a){return a!=null},
fu(a){if(a!=null)return a
throw A.r(A.F(a,"Object"),new Error())},
fV(a){return!0},
fx(a){return a},
e0(a){return!1},
dc(a){return!0===a||!1===a},
fm(a){if(!0===a)return!0
if(!1===a)return!1
throw A.r(A.F(a,"bool"),new Error())},
fn(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.r(A.F(a,"bool?"),new Error())},
fo(a){if(typeof a=="number")return a
throw A.r(A.F(a,"double"),new Error())},
fp(a){if(typeof a=="number")return a
if(a==null)return a
throw A.r(A.F(a,"double?"),new Error())},
e_(a){return typeof a=="number"&&Math.floor(a)===a},
fq(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.r(A.F(a,"int"),new Error())},
fr(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.r(A.F(a,"int?"),new Error())},
fQ(a){return typeof a=="number"},
fs(a){if(typeof a=="number")return a
throw A.r(A.F(a,"num"),new Error())},
ft(a){if(typeof a=="number")return a
if(a==null)return a
throw A.r(A.F(a,"num?"),new Error())},
fT(a){return typeof a=="string"},
fv(a){if(typeof a=="string")return a
throw A.r(A.F(a,"String"),new Error())},
fw(a){if(typeof a=="string")return a
if(a==null)return a
throw A.r(A.F(a,"String?"),new Error())},
e3(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.w(a[q],b)
return s},
fY(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.e3(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.w(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
dW(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
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
if(l===8){p=A.h4(a.x)
o=a.y
return o.length>0?p+("<"+A.e3(o,b)+">"):p}if(l===10)return A.fY(a,b)
if(l===11)return A.dW(a,b,null)
if(l===12)return A.dW(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.c(b,n)
return b[n]}return"?"},
h4(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
fl(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
fk(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.cD(a,b,!1)
else if(typeof m=="number"){s=m
r=A.aT(a,5,"#")
q=A.cE(s)
for(p=0;p<s;++p)q[p]=r
o=A.aS(a,b,q)
n[b]=o
return o}else return m},
fj(a,b){return A.dT(a.tR,b)},
fi(a,b){return A.dT(a.eT,b)},
cD(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.dM(A.dK(a,null,b,!1))
r.set(b,s)
return s},
aU(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.dM(A.dK(a,b,c,!0))
q.set(c,r)
return r},
dS(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.d8(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
R(a,b){b.a=A.fJ
b.b=A.fK
return b},
aT(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.x(null,null)
s.w=b
s.as=c
r=A.R(a,s)
a.eC.set(c,r)
return r},
dQ(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.fg(a,b,r,c)
a.eC.set(r,s)
return s},
fg(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.a0(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.ak(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.x(null,null)
q.w=6
q.x=b
q.as=c
return A.R(a,q)},
dP(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.fe(a,b,r,c)
a.eC.set(r,s)
return s},
fe(a,b,c,d){var s,r
if(d){s=b.w
if(A.a0(b)||b===t.K)return b
else if(s===1)return A.aS(a,"a1",[b])
else if(b===t.P||b===t.T)return t.O}r=new A.x(null,null)
r.w=7
r.x=b
r.as=c
return A.R(a,r)},
fh(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.x(null,null)
s.w=13
s.x=b
s.as=q
r=A.R(a,s)
a.eC.set(q,r)
return r},
aR(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
fd(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
aS(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.aR(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.x(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.R(a,r)
a.eC.set(p,q)
return q},
d8(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.aR(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.x(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.R(a,o)
a.eC.set(q,n)
return n},
dR(a,b,c){var s,r,q="+"+(b+"("+A.aR(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.x(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.R(a,s)
a.eC.set(q,r)
return r},
dO(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.aR(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.aR(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.fd(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.x(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.R(a,p)
a.eC.set(r,o)
return o},
d9(a,b,c,d){var s,r=b.as+("<"+A.aR(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.ff(a,b,c,r,d)
a.eC.set(r,s)
return s},
ff(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.cE(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.X(a,b,r,0)
m=A.ai(a,c,r,0)
return A.d9(a,n,m,c!==m)}}l=new A.x(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.R(a,l)},
dK(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
dM(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.f6(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.dL(a,r,l,k,!1)
else if(q===46)r=A.dL(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.V(a.u,a.e,k.pop()))
break
case 94:k.push(A.fh(a.u,k.pop()))
break
case 35:k.push(A.aT(a.u,5,"#"))
break
case 64:k.push(A.aT(a.u,2,"@"))
break
case 126:k.push(A.aT(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.f8(a,k)
break
case 38:A.f7(a,k)
break
case 63:p=a.u
k.push(A.dQ(p,A.V(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.dP(p,A.V(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.f5(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.dN(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.fa(a.u,a.e,o)
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
f6(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
dL(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.fl(s,o.x)[p]
if(n==null)A.dn('No "'+p+'" in "'+A.eS(o)+'"')
d.push(A.aU(s,o,n))}else d.push(p)
return m},
f8(a,b){var s,r=a.u,q=A.dJ(a,b),p=b.pop()
if(typeof p=="string")b.push(A.aS(r,p,q))
else{s=A.V(r,a.e,p)
switch(s.w){case 11:b.push(A.d9(r,s,q,a.n))
break
default:b.push(A.d8(r,s,q))
break}}},
f5(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.dJ(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.V(p,a.e,o)
q=new A.bB()
q.a=s
q.b=n
q.c=m
b.push(A.dO(p,r,q))
return
case-4:b.push(A.dR(p,b.pop(),s))
return
default:throw A.d(A.b2("Unexpected state under `()`: "+A.p(o)))}},
f7(a,b){var s=b.pop()
if(0===s){b.push(A.aT(a.u,1,"0&"))
return}if(1===s){b.push(A.aT(a.u,4,"1&"))
return}throw A.d(A.b2("Unexpected extended operation "+A.p(s)))},
dJ(a,b){var s=b.splice(a.p)
A.dN(a.u,a.e,s)
a.p=b.pop()
return s},
V(a,b,c){if(typeof c=="string")return A.aS(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.f9(a,b,c)}else return c},
dN(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.V(a,b,c[s])},
fa(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.V(a,b,c[s])},
f9(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.d(A.b2("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.d(A.b2("Bad index "+c+" for "+b.h(0)))},
ho(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.o(a,b,null,c,null)
r.set(c,s)}return s},
o(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.a0(d))return!0
s=b.w
if(s===4)return!0
if(A.a0(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.o(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.o(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.o(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.o(a,b.x,c,d,e))return!1
return A.o(a,A.d2(a,b),c,d,e)}if(s===6)return A.o(a,p,c,d,e)&&A.o(a,b.x,c,d,e)
if(q===7){if(A.o(a,b,c,d.x,e))return!0
return A.o(a,b,c,A.d2(a,d),e)}if(q===6)return A.o(a,b,c,p,e)||A.o(a,b,c,d.x,e)
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
if(!A.o(a,j,c,i,e)||!A.o(a,i,e,j,c))return!1}return A.dZ(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.dZ(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.fO(a,b,c,d,e)}if(o&&q===10)return A.fS(a,b,c,d,e)
return!1},
dZ(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
fO(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
for(;n!==m;){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.aU(a,b,r[o])
return A.dU(a,p,null,c,d.y,e)}return A.dU(a,b.y,null,c,d.y,e)},
dU(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.o(a,b[s],d,e[s],f))return!1
return!0},
fS(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.o(a,r[s],c,q[s],e))return!1
return!0},
ak(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.a0(a))if(s!==6)r=s===7&&A.ak(a.x)
return r},
a0(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
dT(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
cE(a){return a>0?new Array(a):v.typeUniverse.sEA},
x:function x(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
bB:function bB(){this.c=this.b=this.a=null},
bF:function bF(a){this.a=a},
bA:function bA(){},
aQ:function aQ(a){this.a=a},
f0(){var s,r,q
if(self.scheduleImmediate!=null)return A.h7()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.bH(new A.cg(s),1)).observe(r,{childList:true})
return new A.cf(s,r,q)}else if(self.setImmediate!=null)return A.h8()
return A.h9()},
f1(a){self.scheduleImmediate(A.bH(new A.ch(a),0))},
f2(a){self.setImmediate(A.bH(new A.ci(a),0))},
f3(a){A.fb(0,a)},
dF(a,b){var s=B.a.q(a.a,1000)
return A.fc(s,b)},
fb(a,b){var s=new A.aP()
s.aR(a,b)
return s},
fc(a,b){var s=new A.aP()
s.aS(a,b)
return s},
fW(a){return new A.bw(new A.u($.n,a.k("u<0>")),a.k("bw<0>"))},
fA(a,b){a.$2(0,null)
b.b=!0
return b.a},
hQ(a,b){A.fB(a,b)},
fz(a,b){var s,r=a==null?b.$ti.c.a(a):a
if(!b.b)b.a.aU(r)
else{s=b.a
if(b.$ti.k("a1<1>").b(r))s.am(r)
else s.ao(r)}},
fy(a,b){var s=A.al(a),r=A.a_(a),q=b.a
if(b.b)q.a0(new A.D(s,r))
else q.ak(new A.D(s,r))},
fB(a,b){var s,r,q=new A.cG(b),p=new A.cH(b)
if(a instanceof A.u)a.az(q,p,t.z)
else{s=t.z
if(a instanceof A.u)a.aK(q,p,s)
else{r=new A.u($.n,t.c)
r.a=8
r.c=a
r.az(q,p,s)}}},
h6(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.n.aI(new A.cK(s))},
cX(a){var s
if(t.Q.b(a)){s=a.gK()
if(s!=null)return s}return B.I},
d6(a,b,c){var s,r,q,p={},o=p.a=a
for(;s=o.a,(s&4)!==0;){o=o.c
p.a=o}if(o===b){s=A.eV()
b.ak(new A.D(new A.C(!0,o,null,"Cannot complete a future with itself"),s))
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.av(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.P()
b.M(p.a)
A.ae(b,q)
return}b.a^=2
A.bG(null,null,b.b,new A.co(p,b))},
ae(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;!0;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){f=f.c
A.cI(f.a,f.b)}return}s.a=b
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
if(r){A.cI(m.a,m.b)
return}j=$.n
if(j!==k)$.n=k
else j=null
f=f.c
if((f&15)===8)new A.cs(s,g,p).$0()
else if(q){if((f&1)!==0)new A.cr(s,m).$0()}else if((f&2)!==0)new A.cq(g,s).$0()
if(j!=null)$.n=j
f=s.c
if(f instanceof A.u){r=s.a.$ti
r=r.k("a1<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.R(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.d6(f,i,!0)
return}}i=s.a.b
h=i.c
i.c=null
b=i.R(h)
f=s.b
r=s.c
if(!f){i.a=8
i.c=r}else{i.a=i.a&1|16
i.c=r}g.a=i
f=i}},
fZ(a,b){if(t.C.b(a))return b.aI(a)
if(t.v.b(a))return a
throw A.d(A.ds(a,"onError",u.c))},
fX(){var s,r
for(s=$.ah;s!=null;s=$.ah){$.aX=null
r=s.b
$.ah=r
if(r==null)$.aW=null
s.a.$0()}},
h1(){$.dd=!0
try{A.fX()}finally{$.aX=null
$.dd=!1
if($.ah!=null)$.dp().$1(A.e6())}},
e4(a){var s=new A.by(a),r=$.aW
if(r==null){$.ah=$.aW=s
if(!$.dd)$.dp().$1(A.e6())}else $.aW=r.b=s},
h0(a){var s,r,q,p=$.ah
if(p==null){A.e4(a)
$.aX=$.aW
return}s=new A.by(a)
r=$.aX
if(r==null){s.b=p
$.ah=$.aX=s}else{q=r.b
s.b=q
$.aX=r.b=s
if(q==null)$.aW=s}},
hC(a){A.df(a,"stream",t.K)
return new A.bD()},
d4(a){return new A.bx(null,a.k("bx<0>"))},
dE(a,b){var s=$.n
if(s===B.b)return A.dF(a,b)
return A.dF(a,s.b4(b,t.J))},
cI(a,b){A.h0(new A.cJ(a,b))},
e1(a,b,c,d){var s,r=$.n
if(r===c)return d.$0()
$.n=c
s=r
try{r=d.$0()
return r}finally{$.n=s}},
e2(a,b,c,d,e){var s,r=$.n
if(r===c)return d.$1(e)
$.n=c
s=r
try{r=d.$1(e)
return r}finally{$.n=s}},
h_(a,b,c,d,e,f){var s,r=$.n
if(r===c)return d.$2(e,f)
$.n=c
s=r
try{r=d.$2(e,f)
return r}finally{$.n=s}},
bG(a,b,c,d){if(B.b!==c)d=c.b3(d)
A.e4(d)},
cg:function cg(a){this.a=a},
cf:function cf(a,b,c){this.a=a
this.b=b
this.c=c},
ch:function ch(a){this.a=a},
ci:function ci(a){this.a=a},
aP:function aP(){this.c=0},
cC:function cC(a,b){this.a=a
this.b=b},
cB:function cB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bw:function bw(a,b){this.a=a
this.b=!1
this.$ti=b},
cG:function cG(a){this.a=a},
cH:function cH(a){this.a=a},
cK:function cK(a){this.a=a},
D:function D(a,b){this.a=a
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
u:function u(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
cl:function cl(a,b){this.a=a
this.b=b},
cp:function cp(a,b){this.a=a
this.b=b},
co:function co(a,b){this.a=a
this.b=b},
cn:function cn(a,b){this.a=a
this.b=b},
cm:function cm(a,b){this.a=a
this.b=b},
cs:function cs(a,b,c){this.a=a
this.b=b
this.c=c},
ct:function ct(a,b){this.a=a
this.b=b},
cu:function cu(a){this.a=a},
cr:function cr(a,b){this.a=a
this.b=b},
cq:function cq(a,b){this.a=a
this.b=b},
by:function by(a){this.a=a
this.b=null},
bD:function bD(){},
cF:function cF(){},
cJ:function cJ(a,b){this.a=a
this.b=b},
cy:function cy(){},
cz:function cz(a,b){this.a=a
this.b=b},
cA:function cA(a,b,c){this.a=a
this.b=b
this.c=c},
eN(a){return new A.aH(a.k("aH<0>"))},
d7(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
f4(a,b,c){var s=new A.af(a,b,c.k("af<0>"))
s.c=a.e
return s},
d1(a){var s,r
if(A.ec(a))return"{...}"
s=new A.bt("")
try{r={}
$.K.push(a)
s.a+="{"
r.a=!0
a.a9(0,new A.bN(r,s))
s.a+="}"}finally{if(0>=$.K.length)return A.c($.K,-1)
$.K.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
aH:function aH(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cx:function cx(a){this.a=a
this.c=this.b=null},
af:function af(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
l:function l(){},
aw:function aw(){},
bN:function bN(a,b){this.a=a
this.b=b},
aD:function aD(){},
aN:function aN(){},
eC(a,b){a=A.r(a,new Error())
a.stack=b.h(0)
throw a},
d0(a,b,c){var s,r,q
if(a>4294967295)A.dn(A.eR(a,0,4294967295,"length",null))
s=A.a(new Array(a),c.k("m<0>"))
s.$flags=1
r=s
if(a!==0)for(s=r.length,q=0;q<s;++q)r[q]=b
return r},
eO(a,b,c){var s,r,q=A.a([],c.k("m<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.dm)(a),++r)q.push(a[r])
q.$flags=1
return q},
eW(a,b,c){var s=J.et(b)
if(!s.E())return a
if(c.length===0){do a+=A.p(s.gG())
while(s.E())}else{a+=A.p(s.gG())
for(;s.E();)a=a+c+A.p(s.gG())}return a},
eV(){return A.a_(new Error())},
dy(a){return new A.b6(1000*a)},
bK(a){if(typeof a=="number"||A.dc(a)||a==null)return J.aZ(a)
if(typeof a=="string")return JSON.stringify(a)
return A.dB(a)},
eD(a,b){A.df(a,"error",t.K)
A.df(b,"stackTrace",t.l)
A.eC(a,b)},
b2(a){return new A.b1(a)},
b_(a,b){return new A.C(!1,null,b,a)},
ds(a,b,c){return new A.C(!0,a,b,c)},
eQ(a){var s=null
return new A.aa(s,s,!1,s,s,a)},
eR(a,b,c,d,e){return new A.aa(b,c,!0,a,d,"Invalid value")},
eH(a,b,c,d){return new A.b8(b,!0,a,d,"Index out of range")},
ce(a){return new A.aG(a)},
dH(a){return new A.bu(a)},
b4(a){return new A.b3(a)},
eE(a){return new A.ck(a)},
cY(a,b,c){var s,r
if(A.ec(a))return b+"..."+c
s=new A.bt(b)
$.K.push(a)
try{r=s
r.a=A.eW(r.a,a,", ")}finally{if(0>=$.K.length)return A.c($.K,-1)
$.K.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
bP(a,b,c,d){var s
if(B.e===c)return A.dD(B.a.gj(a),J.G(b),$.cV())
if(B.e===d){s=B.a.gj(a)
b=J.G(b)
c=J.G(c)
return A.d5(A.Q(A.Q(A.Q($.cV(),s),b),c))}s=B.a.gj(a)
b=J.G(b)
c=J.G(c)
d=J.G(d)
d=A.d5(A.Q(A.Q(A.Q(A.Q($.cV(),s),b),c),d))
return d},
b6:function b6(a){this.a=a},
cj:function cj(){},
j:function j(){},
b1:function b1(a){this.a=a},
H:function H(){},
C:function C(a,b,c,d){var _=this
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
aG:function aG(a){this.a=a},
bu:function bu(a){this.a=a},
bs:function bs(a){this.a=a},
b3:function b3(a){this.a=a},
bo:function bo(){},
aE:function aE(){},
ck:function ck(a){this.a=a},
t:function t(){},
h:function h(){},
bE:function bE(){},
bt:function bt(a){this.a=a},
cv:function cv(){},
a8:function a8(a,b,c){this.a=a
this.b=b
this.$ti=c},
L:function L(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
N:function N(a){this.a=a},
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
eT(a,b,c,d,e,f,g,h){var s,r,q,p=v.G,o=p.document.createElement("canvas"),n=h*g
o.width=n
s=d*f
o.height=s
r=p.document.createElement("canvas")
r.width=n
r.height=s
s=A.a([],t.w)
for(q=0;q<d;++q){p=B.a.q(h,32)
s.push(new Uint32Array(p+1))}p=new A.br(!0,d,h,g,f,c,a,o,r,s)
p.aO(a,b,c,d,!0,f,g,h)
return p},
d3(a){return new A.A(B.a.q(a,32),31-B.a.i(a,32))},
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
bS:function bS(a){this.a=a},
bT:function bT(a){this.a=a},
bU:function bU(a){this.a=a},
bV:function bV(a){this.a=a},
bR:function bR(){},
E:function E(a){this.b=a},
eX(a,b,c,d,e,f,g){var s,r,q,p,o="white",n=null,m=A.eT("black",b,o,e*(8+d),!0,2,2,a*8),l=A.a([],t.G)
for(s=t.V,r=0;r<e;++r){q=A.a([],s)
for(p=0;p<a;++p)q.push(new A.L(r,p," ",o))
l.push(q)}m=new A.aF(e,a,d,b,!0,m,new A.a9(e,a),new A.a9(e,a),new A.a9(e,a),!1,A.d4(t.N),A.d4(t.W),A.d4(t.q),B.y,l,A.eN(t.o),B.dP)
m.aQ("black",a,b,o,n,!0,2,2,d,e,!1,g,n,n,n,n,n)
return m},
ab:function ab(a){this.b=a},
aF:function aF(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
c9:function c9(a){this.a=a},
c8:function c8(){},
c7:function c7(a){this.a=a},
c2:function c2(a){this.a=a},
c3:function c3(a){this.a=a},
c4:function c4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c5:function c5(a,b,c){this.a=a
this.b=b
this.c=c},
c6:function c6(a){this.a=a},
eU(a,b,c){var s,r,q,p,o=A.a([],t.U),n=A.a([],t.I)
for(s=t.p,r=0;r<a;++r){q=A.a([],s)
for(p=0;p<b;++p)q.push(B.c)
n.push(q)}o=new A.bX(a,b,o,n,B.l)
o.aP(a,b,c)
return o},
hq(){var s=v.G.document.getElementById("snake")
s.toString
A.eU(30,30,s)},
z:function z(a){this.b=a},
a2:function a2(a){this.b=a},
bX:function bX(a,b,c,d,e){var _=this
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
bY:function bY(a){this.a=a},
c_:function c_(a){this.a=a},
bZ:function bZ(a){this.a=a},
ht(a){throw A.r(new A.a5("Field '"+a+"' has been assigned during initialization."),new Error())},
i(){throw A.r(A.eM(""),new Error())},
hu(){throw A.r(A.eL(""),new Error())},
aV(a){var s
if(typeof a=="function")throw A.d(A.b_("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.fC,a)
s[$.cU()]=a
return s},
dX(a){var s
if(typeof a=="function")throw A.d(A.b_("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.fD,a)
s[$.cU()]=a
return s},
fC(a){return a.$0()},
fD(a,b,c){if(c>=1)return a.$1(b)
return a.$0()}},B={}
var w=[A,J,B]
var $={}
A.cZ.prototype={}
J.b9.prototype={
u(a,b){return a===b},
gj(a){return A.aC(a)},
h(a){return"Instance of '"+A.bQ(a)+"'"},
gl(a){return A.Y(A.db(this))}}
J.ba.prototype={
h(a){return String(a)},
gj(a){return a?519018:218159},
gl(a){return A.Y(t.y)},
$ie:1}
J.aq.prototype={
u(a,b){return null==b},
h(a){return"null"},
gj(a){return 0},
$ie:1}
J.as.prototype={$ik:1}
J.O.prototype={
gj(a){return 0},
h(a){return String(a)}}
J.bp.prototype={}
J.ac.prototype={}
J.M.prototype={
h(a){var s=a[$.cU()]
if(s==null)return this.aN(a)
return"JavaScript function for "+J.aZ(s)}}
J.ar.prototype={
gj(a){return 0},
h(a){return String(a)}}
J.at.prototype={
gj(a){return 0},
h(a){return String(a)}}
J.m.prototype={
bi(a,b){var s
a.$flags&1&&A.cT(a,"remove",1)
for(s=0;s<a.length;++s)if(J.T(a[s],b)){a.splice(s,1)
return!0}return!1},
bb(a,b){var s,r,q=a.length,p=A.d0(q,"",t.N)
for(s=0;s<a.length;++s){r=A.p(a[s])
if(!(s<q))return A.c(p,s)
p[s]=r}return p.join(b)},
b6(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw A.d(A.b4(a))}return s},
b7(a,b,c){c.toString
return this.b6(a,b,c,t.z)},
gaD(a){if(a.length>0)return a[0]
throw A.d(A.dz())},
gbc(a){var s=a.length
if(s>0)return a[s-1]
throw A.d(A.dz())},
b5(a,b){var s
for(s=0;s<a.length;++s)if(J.T(a[s],b))return!0
return!1},
h(a){return A.cY(a,"[","]")},
gad(a){return new J.b0(a,a.length,A.da(a).k("b0<1>"))},
gj(a){return A.aC(a)},
gm(a){return a.length},
$if:1}
J.bL.prototype={}
J.b0.prototype={
gG(){var s=this.d
return s==null?this.$ti.c.a(s):s},
E(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.d(A.dm(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.a3.prototype={
bs(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.d(A.ce(""+a+".toInt()"))},
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
return this.aw(a,b)},
q(a,b){return(a|0)===a?a/b|0:this.aw(a,b)},
aw(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.ce("Result of truncating division is "+A.p(s)+": "+A.p(a)+" ~/ "+b))},
J(a,b){if(b<0)throw A.d(A.cL(b))
return b>31?0:a<<b>>>0},
b1(a,b){return b>31?0:a<<b>>>0},
aM(a,b){var s
if(b<0)throw A.d(A.cL(b))
if(a>0)s=this.a4(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
b2(a,b){var s
if(a>0)s=this.a4(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
v(a,b){if(0>b)throw A.d(A.cL(b))
return this.a4(a,b)},
a4(a,b){return b>31?0:a>>>b},
gl(a){return A.Y(t.H)},
$iq:1}
J.ap.prototype={
gl(a){return A.Y(t.S)},
$ie:1,
$ib:1}
J.bb.prototype={
gl(a){return A.Y(t.i)},
$ie:1}
J.a4.prototype={
Z(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.G)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
bg(a,b,c){var s=b-a.length
if(s<=0)return a
return this.Z(c,s)+a},
h(a){return a},
gj(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gl(a){return A.Y(t.N)},
gm(a){return a.length},
$ie:1,
$iy:1}
A.a5.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.bW.prototype={}
A.bd.prototype={
gG(){var s=this.d
return s==null?this.$ti.c.a(s):s},
E(){var s,r=this,q=r.a,p=J.e9(q),o=p.gm(q)
if(r.b!==o)throw A.d(A.b4(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.n(q,s);++r.c
return!0}}
A.ao.prototype={}
A.A.prototype={$r:"+(1,2)",$s:1}
A.b5.prototype={
h(a){return A.d1(this)}}
A.b7.prototype={
O(){var s=this,r=s.$map
if(r==null){r=new A.au(s.$ti.k("au<1,2>"))
A.he(s.a,r)
s.$map=r}return r},
a7(a){return this.O().a7(a)},
n(a,b){return this.O().n(0,b)},
a9(a,b){this.O().a9(0,b)},
gm(a){return this.O().a}}
A.cb.prototype={
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
A.aB.prototype={
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
A.bO.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.an.prototype={}
A.aO.prototype={
h(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iP:1}
A.U.prototype={
h(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.eg(r==null?"unknown":r)+"'"},
gbt(){return this},
$C:"$1",
$R:1,
$D:null}
A.bI.prototype={$C:"$0",$R:0}
A.bJ.prototype={$C:"$2",$R:2}
A.c1.prototype={}
A.c0.prototype={
h(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.eg(s)+"'"}}
A.am.prototype={
u(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.am))return!1
return this.$_target===b.$_target&&this.a===b.a},
gj(a){return(A.dl(this.a)^A.aC(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.bQ(this.a)+"'")}}
A.bq.prototype={
h(a){return"RuntimeError: "+this.a}}
A.av.prototype={
gm(a){return this.a},
a7(a){var s=this.b
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
return q}else return this.ba(b)},
ba(a){var s,r,q=this.d
if(q==null)return null
s=q[this.aa(a)]
r=this.ab(s,a)
if(r<0)return null
return s[r].b},
a9(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw A.d(A.b4(s))
r=r.c}},
L(a,b){var s=this,r=new A.bM(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&1073741823
return r},
aa(a){return J.G(a)&1073741823},
ab(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.T(a[r].a,b))return r
return-1},
h(a){return A.d1(this)}}
A.bM.prototype={}
A.au.prototype={
aa(a){return A.ha(a)&1073741823},
ab(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.T(a[r].a,b))return r
return-1}}
A.cO.prototype={
$1(a){return this.a(a)},
$S:6}
A.cP.prototype={
$2(a,b){return this.a(a,b)},
$S:7}
A.cQ.prototype={
$1(a){return this.a(a)},
$S:8}
A.ag.prototype={
h(a){return this.aA(!1)},
aA(a){var s,r,q,p,o,n=this.aY(),m=this.aq(),l=(a?""+"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.c(m,q)
o=m[q]
l=a?l+A.dB(o):l+A.p(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
aY(){var s,r=this.$s
for(;$.aM.length<=r;)$.aM.push(null)
s=$.aM[r]
if(s==null){s=this.aX()
if(!(r<$.aM.length))return A.c($.aM,r)
$.aM[r]=s}return s},
aX(){var s,r,q,p,o,n=this.$r,m=n.indexOf("("),l=n.substring(1,m),k=n.substring(m),j=k==="()"?0:k.replace(/[^,]/g,"").length+1,i=A.a(new Array(j),t.f)
for(s=0;s<j;++s)i[s]=s
if(l!==""){r=l.split(",")
s=r.length
for(q=i.length,p=j;s>0;){--p;--s
o=r[s]
if(!(p>=0&&p<q))return A.c(i,p)
i[p]=o}}i=A.eO(i,!1,t.K)
i.$flags=3
return i}}
A.bC.prototype={
aq(){return[this.a,this.b]},
u(a,b){if(b==null)return!1
return b instanceof A.bC&&this.$s===b.$s&&J.T(this.a,b.a)&&J.T(this.b,b.b)},
gj(a){return A.bP(this.$s,this.a,this.b,B.e)}}
A.be.prototype={
gl(a){return B.dZ},
$ie:1}
A.az.prototype={}
A.bf.prototype={
gl(a){return B.e_},
$ie:1}
A.a7.prototype={
gm(a){return a.length},
$iv:1}
A.ax.prototype={
n(a,b){A.W(b,a,a.length)
return a[b]},
$if:1}
A.ay.prototype={$if:1}
A.bg.prototype={
gl(a){return B.e0},
$ie:1}
A.bh.prototype={
gl(a){return B.e1},
$ie:1}
A.bi.prototype={
gl(a){return B.e2},
n(a,b){A.W(b,a,a.length)
return a[b]},
$ie:1}
A.bj.prototype={
gl(a){return B.e3},
n(a,b){A.W(b,a,a.length)
return a[b]},
$ie:1}
A.bk.prototype={
gl(a){return B.e4},
n(a,b){A.W(b,a,a.length)
return a[b]},
$ie:1}
A.bl.prototype={
gl(a){return B.e6},
n(a,b){A.W(b,a,a.length)
return a[b]},
$ie:1}
A.bm.prototype={
gl(a){return B.e7},
n(a,b){A.W(b,a,a.length)
return a[b]},
$ie:1,
$icd:1}
A.aA.prototype={
gl(a){return B.e8},
gm(a){return a.length},
n(a,b){A.W(b,a,a.length)
return a[b]},
$ie:1}
A.bn.prototype={
gl(a){return B.e9},
gm(a){return a.length},
n(a,b){A.W(b,a,a.length)
return a[b]},
$ie:1}
A.aI.prototype={}
A.aJ.prototype={}
A.aK.prototype={}
A.aL.prototype={}
A.x.prototype={
k(a){return A.aU(v.typeUniverse,this,a)},
al(a){return A.dS(v.typeUniverse,this,a)}}
A.bB.prototype={}
A.bF.prototype={
h(a){return A.w(this.a,null)}}
A.bA.prototype={
h(a){return this.a}}
A.aQ.prototype={$iH:1}
A.cg.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:3}
A.cf.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:9}
A.ch.prototype={
$0(){this.a.$0()},
$S:1}
A.ci.prototype={
$0(){this.a.$0()},
$S:1}
A.aP.prototype={
aR(a,b){if(self.setTimeout!=null)self.setTimeout(A.bH(new A.cC(this,b),0),a)
else throw A.d(A.ce("`setTimeout()` not found."))},
aS(a,b){if(self.setTimeout!=null)self.setInterval(A.bH(new A.cB(this,a,Date.now(),b),0),a)
else throw A.d(A.ce("Periodic timer."))},
$ica:1}
A.cC.prototype={
$0(){this.a.c=1
this.b.$0()},
$S:0}
A.cB.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.a.A(s,o)}q.c=p
r.d.$1(q)},
$S:1}
A.bw.prototype={}
A.cG.prototype={
$1(a){return this.a.$2(0,a)},
$S:10}
A.cH.prototype={
$2(a,b){this.a.$2(1,new A.an(a,b))},
$S:11}
A.cK.prototype={
$2(a,b){this.a(a,b)},
$S:12}
A.D.prototype={
h(a){return A.p(this.a)},
$ij:1,
gK(){return this.b}}
A.bz.prototype={}
A.bx.prototype={}
A.ad.prototype={
bd(a){if((this.c&15)!==6)return!0
return this.b.b.ag(this.d,a.a)},
b8(a){var s,r=this.e,q=null,p=a.a,o=this.b.b
if(t.C.b(r))q=o.bl(r,p,a.b)
else q=o.ag(r,p)
try{p=q
return p}catch(s){if(t._.b(A.al(s))){if((this.c&1)!==0)throw A.d(A.b_("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.b_("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.u.prototype={
aK(a,b,c){var s,r=$.n
if(r===B.b){if(!t.C.b(b)&&!t.v.b(b))throw A.d(A.ds(b,"onError",u.c))}else b=A.fZ(b,r)
s=new A.u(r,c.k("u<0>"))
this.a_(new A.ad(s,3,a,b,this.$ti.k("@<1>").al(c).k("ad<1,2>")))
return s},
az(a,b,c){var s=new A.u($.n,c.k("u<0>"))
this.a_(new A.ad(s,19,a,b,this.$ti.k("@<1>").al(c).k("ad<1,2>")))
return s},
b0(a){this.a=this.a&1|16
this.c=a},
M(a){this.a=a.a&30|this.a&1
this.c=a.c},
a_(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.a_(a)
return}s.M(r)}A.bG(null,null,s.b,new A.cl(s,a))}},
av(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.av(a)
return}n.M(s)}m.a=n.R(a)
A.bG(null,null,n.b,new A.cp(m,n))}},
P(){var s=this.c
this.c=null
return this.R(s)},
R(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
ao(a){var s=this,r=s.P()
s.a=8
s.c=a
A.ae(s,r)},
aW(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.P()
q.M(a)
A.ae(q,r)},
a0(a){var s=this.P()
this.b0(a)
A.ae(this,s)},
aU(a){if(this.$ti.k("a1<1>").b(a)){this.am(a)
return}this.aV(a)},
aV(a){this.a^=2
A.bG(null,null,this.b,new A.cn(this,a))},
am(a){A.d6(a,this,!1)
return},
ak(a){this.a^=2
A.bG(null,null,this.b,new A.cm(this,a))},
$ia1:1}
A.cl.prototype={
$0(){A.ae(this.a,this.b)},
$S:0}
A.cp.prototype={
$0(){A.ae(this.b,this.a.a)},
$S:0}
A.co.prototype={
$0(){A.d6(this.a.a,this.b,!0)},
$S:0}
A.cn.prototype={
$0(){this.a.ao(this.b)},
$S:0}
A.cm.prototype={
$0(){this.a.a0(this.b)},
$S:0}
A.cs.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.bj(q.d)}catch(p){s=A.al(p)
r=A.a_(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.cX(q)
n=k.a
n.c=new A.D(q,o)
q=n}q.b=!0
return}if(j instanceof A.u&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.u){m=k.b.a
l=new A.u(m.b,m.$ti)
j.aK(new A.ct(l,m),new A.cu(l),t.n)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.ct.prototype={
$1(a){this.a.aW(this.b)},
$S:3}
A.cu.prototype={
$2(a,b){this.a.a0(new A.D(a,b))},
$S:13}
A.cr.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
q.c=p.b.b.ag(p.d,this.b)}catch(o){s=A.al(o)
r=A.a_(o)
q=s
p=r
if(p==null)p=A.cX(q)
n=this.a
n.c=new A.D(q,p)
n.b=!0}},
$S:0}
A.cq.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.bd(s)&&p.a.e!=null){p.c=p.a.b8(s)
p.b=!1}}catch(o){r=A.al(o)
q=A.a_(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.cX(p)
m=l.b
m.c=new A.D(p,n)
p=m}p.b=!0}},
$S:0}
A.by.prototype={}
A.bD.prototype={}
A.cF.prototype={}
A.cJ.prototype={
$0(){A.eD(this.a,this.b)},
$S:0}
A.cy.prototype={
bn(a){var s,r,q
try{if(B.b===$.n){a.$0()
return}A.e1(null,null,this,a)}catch(q){s=A.al(q)
r=A.a_(q)
A.cI(s,r)}},
bp(a,b){var s,r,q
try{if(B.b===$.n){a.$1(b)
return}A.e2(null,null,this,a,b)}catch(q){s=A.al(q)
r=A.a_(q)
A.cI(s,r)}},
bq(a,b){a.toString
return this.bp(a,b,t.z)},
b3(a){return new A.cz(this,a)},
b4(a,b){return new A.cA(this,a,b)},
bk(a){if($.n===B.b)return a.$0()
return A.e1(null,null,this,a)},
bj(a){a.toString
return this.bk(a,t.z)},
bo(a,b){if($.n===B.b)return a.$1(b)
return A.e2(null,null,this,a,b)},
ag(a,b){var s=t.z
a.toString
return this.bo(a,b,s,s)},
bm(a,b,c){if($.n===B.b)return a.$2(b,c)
return A.h_(null,null,this,a,b,c)},
bl(a,b,c){var s=t.z
a.toString
return this.bm(a,b,c,s,s,s)},
bh(a){return a},
aI(a){var s=t.z
a.toString
return this.bh(a,s,s,s)}}
A.cz.prototype={
$0(){return this.a.bn(this.b)},
$S:0}
A.cA.prototype={
$1(a){return this.a.bq(this.b,a)},
$S(){return this.c.k("~(0)")}}
A.aH.prototype={
gad(a){var s=this,r=new A.af(s,s.r,s.$ti.k("af<1>"))
r.c=s.e
return r},
gm(a){return this.a},
U(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.aj(s==null?q.b=A.d7():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.aj(r==null?q.c=A.d7():r,b)}else return q.aT(b)},
aT(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.d7()
s=J.G(a)&1073741823
r=p[s]
if(r==null)p[s]=[q.a3(a)]
else{if(q.aZ(r,a)>=0)return!1
r.push(q.a3(a))}return!0},
aj(a,b){if(a[b]!=null)return!1
a[b]=this.a3(b)
return!0},
au(){this.r=this.r+1&1073741823},
a3(a){var s,r=this,q=new A.cx(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.au()
return q},
aZ(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.T(a[r].a,b))return r
return-1}}
A.cx.prototype={}
A.af.prototype={
gG(){var s=this.d
return s==null?this.$ti.c.a(s):s},
E(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.d(A.b4(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.l.prototype={
gad(a){return new A.bd(a,this.gm(a),A.aY(a).k("bd<l.E>"))},
h(a){return A.cY(a,"[","]")}}
A.aw.prototype={
gm(a){return this.a},
h(a){return A.d1(this)}}
A.bN.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.p(a)
r.a=(r.a+=s)+": "
s=A.p(b)
r.a+=s},
$S:14}
A.aD.prototype={
h(a){return A.cY(this,"{","}")}}
A.aN.prototype={}
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
return""+n+":"+r+s+":"+p+q+"."+B.p.bg(B.a.h(o%1e6),6,"0")}}
A.cj.prototype={
h(a){return this.N()}}
A.j.prototype={
gK(){return A.eP(this)}}
A.b1.prototype={
h(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.bK(s)
return"Assertion failed"}}
A.H.prototype={}
A.C.prototype={
ga2(){return"Invalid argument"+(!this.a?"(s)":"")},
ga1(){return""},
h(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.ga2()+q+o
if(!s.a)return n
return n+s.ga1()+": "+A.bK(s.gac())},
gac(){return this.b}}
A.aa.prototype={
gac(){return this.b},
ga2(){return"RangeError"},
ga1(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.p(q):""
else if(q==null)s=": Not greater than or equal to "+A.p(r)
else if(q>r)s=": Not in inclusive range "+A.p(r)+".."+A.p(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.p(r)
return s}}
A.b8.prototype={
gac(){return this.b},
ga2(){return"RangeError"},
ga1(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gm(a){return this.f}}
A.aG.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.bu.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.bs.prototype={
h(a){return"Bad state: "+this.a}}
A.b3.prototype={
h(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.bK(s)+"."}}
A.bo.prototype={
h(a){return"Out of Memory"},
gK(){return null},
$ij:1}
A.aE.prototype={
h(a){return"Stack Overflow"},
gK(){return null},
$ij:1}
A.ck.prototype={
h(a){return"Exception: "+this.a}}
A.t.prototype={
gj(a){return A.h.prototype.gj.call(this,0)},
h(a){return"null"}}
A.h.prototype={$ih:1,
u(a,b){return this===b},
gj(a){return A.aC(this)},
h(a){return"Instance of '"+A.bQ(this)+"'"},
gl(a){return A.hi(this)},
toString(){return this.h(this)}}
A.bE.prototype={
h(a){return""},
$iP:1}
A.bt.prototype={
gm(a){return this.a.length},
h(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.cv.prototype={
I(a){if(a<=0||a>4294967296)throw A.d(A.eQ("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
A.a8.prototype={
h(a){return"Point("+this.a+", "+this.b+")"},
u(a,b){if(b==null)return!1
return b instanceof A.a8&&this.a===b.a&&this.b===b.b},
gj(a){return A.dD(B.a.gj(this.a),B.a.gj(this.b),0)}}
A.L.prototype={
gj(a){var s=this.a,r=this.b
return A.bP(new A.A(s,r).$s,s,r,B.e)},
u(a,b){var s,r,q,p
if(b==null)return!1
if(b instanceof A.L){s=b.a
r=b.b
q=this.a
p=this.b
p=A.bP(new A.A(s,r).$s,s,r,B.e)===A.bP(new A.A(q,p).$s,q,p,B.e)
s=p}else s=!1
return s},
h(a){var s=this
return"("+s.a+" "+s.b+") => '"+s.c+"' "+s.d}}
A.N.prototype={}
A.a6.prototype={
h(a){var s=this
return"               row: "+s.a+"\n            column: "+s.b+"\n         character: '"+s.c+"'\n    characterColor: "+s.d+"\n\n          pixelRow: "+s.e+"\n       pixelColumn: "+s.f+"\n         pixelIsOn: "+s.r+"\n    "}}
A.a9.prototype={
sW(a){var s,r,q,p=this
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
aO(a,b,c,d,e,f,g,h){var s,r=this,q=v.G.document
q.onfocus=A.aV(new A.bS(r))
q.onblur=A.aV(new A.bT(r))
q=r.w
q.tabIndex=-1
q.style.display="block"
q.style.outline="none"
s=q.getContext("2d")
if(s==null)s=t.m.a(s)
s.imageSmoothingEnabled=!1
q.onfocus=A.aV(new A.bU(r))
q.onblur=A.aV(new A.bV(r))
b.style.display="flex"
b.style.alignItems="flex-start"
b.style.padding="0"
b.style.margin="0"
b.style.width="fit-content"
b.style.height="fit-content"
b.style.background="gray"
b.appendChild(q)
r.V(0)},
S(a,b){return new A.A(B.a.i(a,this.b),B.a.i(b,this.c))},
an(){var s=this.x,r=s.getContext("2d")
if(r==null)r=t.m.a(r)
r.save()
r.beginPath()
r.clearRect(0,0,s.width,s.height)
r.restore()
return r},
ap(){var s=this.w.getContext("2d")
if(s==null)s=t.m.a(s)
s.save()
s.beginPath()
s.drawImage(this.x,0,0)
s.restore()
return s},
C(a,b,c,d){var s,r,q,p,o,n,m=this,l=a<0||a>=m.b||b<0||b>=m.c
if(l)return
s=m.S(a,b)
a=s.a
b=s.b
r=A.d3(b)
q=r.a
p=B.a.J(1,r.b)
l=m.y
if(!(a>=0&&a<l.length))return A.c(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.c(l,q)
o=l[q]
l.$flags&2&&A.cT(l)
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
D(a,b,c,d,e){var s,r,q,p,o,n,m=this,l=a<0||a>=m.b||b<0||b>=m.c
if(l)return
s=m.S(a,b)
a=s.a
b=s.b
r=A.d3(b)
q=r.a
p=B.a.J(1,r.b)
l=m.y
if(!(a>=0&&a<l.length))return A.c(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.c(l,q)
o=l[q]
l.$flags&2&&A.cT(l)
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
aG(a,b){var s,r,q,p,o=this.S(b,a)
b=o.a
s=A.d3(o.b)
r=s.a
q=B.a.J(1,s.b)
p=this.y
if(!(b>=0&&b<p.length))return A.c(p,b)
p=p[b]
if(!(r>=0&&r<p.length))return A.c(p,r)
return(p[r]&q)>>>0>0},
aC(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=this
if(e==null)e=k.c-c
if(b==null)b=k.b-d
k.an()
if(c===0&&d===0&&e===k.c&&b===k.b){for(s=k.y,r=s.length,q=0;q<r;++q)for(p=0;o=s[q],p<o.length;++p){o.$flags&2&&A.cT(o)
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
for(p=c;p<m;++p)k.C(l,B.a.i(p,r),o,!1)}}k.ap()},
V(a){return this.aC(0,null,0,0,null)},
b_(a,b,c,d,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.an()
s=e.S(a,b)
a=s.a
b=s.b
r=B.a.b1(1,a0)-1
for(q=a0-1,p=t.t,o=e.x,n=0;n<8;++n){m=c[n]
l=m&r
m=A.a([],p)
for(k=a+n,j=0;j<a0;++j){i=e.aG(b+j,k)?1:0
m.push(B.a.J(i,q-j))}h=B.d.b7(m,0,new A.bR())
switch(a1){case B.w:for(j=0;j<a0;++j){m=b+j
if((B.a.v(l,q-j)&1)>0)e.D(k,m,d,o,!1)
else e.C(k,m,o,!1)}break
case B.dQ:for(j=0;j<a0;++j){m=b+j
if((B.a.v(l,q-j)&1)>0)e.C(k,m,o,!1)
else e.D(k,m,d,o,!1)}break
case B.dS:for(j=0;j<a0;++j){g=q-j
if((B.a.v(l,g)&1)>0&&(B.a.aM(h,g)&1)===0)e.D(k,b+j,d,o,!1)}break
case B.dR:for(j=0;j<a0;++j)if((B.a.v(l,q-j)&1)>0)e.D(k,b+j,d,o,!1)
break
case B.dT:for(f=l&h,j=0;j<a0;++j)if((B.a.v(f,q-j)&1)>0)e.D(k,b+j,d,o,!1)
break
case B.dU:for(f=l&h,j=0;j<a0;++j)if((B.a.v(f,q-j)&1)>0)e.C(k,b+j,o,!1)
break
case B.dV:for(f=l&h,j=0;j<a0;++j)if((B.a.v(f,q-j)&1)===0)e.C(k,b+j,o,!1)
break
case B.dW:for(f=l&h,j=0;j<a0;++j){m=b+j
if((B.a.v(f,q-j)&1)===0)e.C(k,m,o,!1)
else e.D(k,m,d,o,!1)}break}}e.ap()},
aH(a,b,c){this.b_(c.a,c.b,b,a,8,B.w,!0,!1,!1)},
gaE(){return this.z&&J.T(v.G.document.activeElement,this.w)},
H(){var s=this.w
s.style.opacity="1.0"
s.focus()},
F(){var s=this.w
s.style.opacity="0.5"
s.blur()}}
A.bS.prototype={
$0(){this.a.z=!0},
$S:1}
A.bT.prototype={
$0(){this.a.z=!1},
$S:1}
A.bU.prototype={
$0(){this.a.H()},
$S:1}
A.bV.prototype={
$0(){this.a.F()},
$S:1}
A.bR.prototype={
$2(a,b){return(a|b)>>>0},
$S:15}
A.E.prototype={
N(){return"Mode."+this.b}}
A.ab.prototype={
N(){return"State."+this.b}}
A.aF.prototype={
aQ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=this,r=s.f
r.tabIndex=-1
r.onfocus=A.aV(new A.c2(s))
r.onblur=A.aV(new A.c3(s))
r.onkeydown=A.dX(new A.c4(s,l,new A.c8(),new A.c7(s)))
r.onclick=A.dX(new A.c5(s,new A.c9(s),o))
A.dE(A.dy(300),new A.c6(s))
s.F()
s.V(0)},
ga8(){var s=this.w
s===$&&A.i()
return s.ga8()},
ga6(){var s=this.w
s===$&&A.i()
return s.ga6()},
a5(a,b){return new A.A(B.a.i(a,this.a),B.a.i(b,this.b))},
ar(){var s=this,r=s.x
s.CW.U(0,new A.L(r.c,r.d," ","white"))
s.T()
s.cy=!1},
T(){var s,r,q,p,o,n,m,l,k,j,i,h=this
for(s=h.CW,r=A.f4(s,s.r,s.$ti.c),q=h.w,p=h.cx,o=8+h.c,n=r.$ti.c;r.E();){m=r.d
if(m==null)m=n.a(m)
l=m.a
k=m.b
if(p.a7(m.c)){j=p.n(0,m.c)
j.toString
i=j}else i=$.ei()
q===$&&A.i()
q.aH(m.d,i,new A.A(l*o,k*8))}if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.au()}},
ai(a,b){var s,r=this.a5(b,a)
b=r.a
a=r.b
s=this.ch
if(!(b>=0&&b<s.length))return A.c(s,b)
s=s[b]
if(!(a>=0&&a<s.length))return A.c(s,a)
return s[a].c},
bf(){var s=this.x
s.sW(0)
s.c=B.a.i(s.c+1,s.a)},
af(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=this,i=e==null?j.x.c:e,h=j.a5(i,c==null?j.x.d:c)
i=j.x
i.c=B.a.i(h.a,i.a)
i.sW(h.b)
if(b==null)b="white"
for(s=a.split(""),r=s.length,q=j.ch,p=j.CW,o=0;o<r;++o){n=s[o]
m=i.c
l=i.d
if(!(m>=0&&m<q.length))return A.c(q,m)
m=q[m]
if(!(l>=0&&l<m.length))return A.c(m,l)
k=m[l]
k.c=n
k.d=b
p.U(0,k)
i.sW(i.d+1)}j.T()
if(d)j.bf()},
B(a,b,c,d){return this.af(a,b,c,!0,d)},
ae(a,b,c){return this.af(a,null,b,!0,c)},
aF(a,b){return this.af(a,null,null,b,null)},
V(a){var s,r,q,p,o=this,n=o.b,m=o.a
for(s=o.ch,r=0;r<m;++r)for(q=0;q<n;++q){if(!(r<s.length))return A.c(s,r)
p=s[r]
if(!(q<p.length))return A.c(p,q)
p=p[q]
p.c=" "
p.d="white"}s=o.w
s===$&&A.i()
p=8+o.c
s.aC(0,m*p,0,0*p,n*8)
p=o.x
p.c=0%p.a
p.sW(0)},
H(){return this.ga8().$0()},
F(){return this.ga6().$0()}}
A.c9.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.w
i===$&&A.i()
s=J.dr(a.offsetX)
r=Math.max(Math.min(B.a.A(J.dr(a.offsetY)-1,i.e),i.b-1),0)
q=Math.max(Math.min(B.a.A(s-1,i.d),i.c-1),0)
p=B.a.A(r,8+j.c)
o=B.a.q(q,8)
n=j.ai(o,p)
m=j.a5(p,o)
l=m.a
k=m.b
j=j.ch
if(!(l>=0&&l<j.length))return A.c(j,l)
j=j[l]
if(!(k>=0&&k<j.length))return A.c(j,k)
return new A.a6(p,o,n,j[k].d,r,q,i.aG(q,r))},
$S:16}
A.c8.prototype={
$1(a){var s=a.keyCode
return new A.N(s)},
$S:17}
A.c7.prototype={
$0(){var s,r,q,p,o,n=this.a,m=n.a,l=n.b,k=new A.a9(m,l)
k.sp(n.y.gp())
s=A.a([],t.s)
for(r=n.z,q=r.b;p=k.c,o=k.d,p*l+o<r.c*q+r.d;p=k.c*l+k.d+1,k.c=B.a.i(B.a.A(p,l),m),k.d=B.a.i(p,l))s.push(n.ai(o,p))
return B.d.bb(s,"")},
$S:18}
A.c2.prototype={
$0(){var s=this.a.w
s===$&&A.i()
s.H()},
$S:1}
A.c3.prototype={
$0(){var s=this.a.w
s===$&&A.i()
s.F()},
$S:1}
A.c4.prototype={
$1(a){var s,r,q,p
a.preventDefault()
s=this.a
switch(s.ay){case B.y:this.b.$2(s,this.c.$1(a))
break
case B.dX:break
case B.z:s.ar()
$label0$1:{r=a.keyCode
if(13===r)break $label0$1
if(8===r){q=s.x
if(q.gp()>s.y.gp()){q.sp(q.gp()-1)
s.aF(" ",!1)
q.sp(q.gp()-1)}break $label0$1}p=a.key
if(p.length===1&&s.x.gp()<s.z.gp())s.aF(p,!1)}break
case B.dY:break}},
$S:4}
A.c5.prototype={
$1(a){a.preventDefault()},
$S:4}
A.c6.prototype={
$1(a){var s,r,q,p=this.a,o=p.w
o===$&&A.i()
if(o.gaE()&&p.ay===B.z)if(p.cy)p.ar()
else{s=p.x
r=s.c
s=s.d
q=$.eh()
o.aH("white",q,new A.A(r*(8+p.c),s*8))
p.cy=!0}},
$S:5}
A.z.prototype={
N(){return"Value."+this.b}}
A.a2.prototype={
N(){return"GameState."+this.b}}
A.bX.prototype={
aP(a,b,c){var s=this,r=A.eX(s.b,c,!0,0,s.a+1,!1,new A.bY(s))
s.e!==$&&A.hu()
s.e=r
A.dE(A.dy(100),new A.bZ(s))
r.H()},
aL(){var s,r,q,p,o,n=this
switch(n.ay){case B.l:n.Y(A.a(["Snake!","","Press any key to start!"],t.s))
n.ay=B.k
break
case B.n:s=n.e
s===$&&A.i()
r=n.f
s.B("#","red",n.r,r)
n.Y(A.a([" Game Over! ",""," Press any key to "," play again! "],t.s))
n.ay=B.k
break
case B.m:s=n.c
if(s.length!==0){q=B.d.gaD(s)
B.d.bi(s,q)
s=q.a
if(s===n.y&&q.b===n.z)n.X()
else{r=n.e
r===$&&A.i()
r.ae(" ",q.b,s)}}s=n.ax
s===$&&A.i()
n.at=s
r=n.d
p=n.f
if(!(p>=0&&p<r.length))return A.c(r,p)
p=r[p]
o=n.r
if(!(o>=0&&o<p.length))return A.c(p,o)
p[o]=s
s=n.ch
if(s>0)n.ch=s-1
else n.aJ(!1)
n.b9()
s=n.f
if(!(s>=0&&s<r.length))return A.c(r,s)
r=r[s]
p=n.r
o=n.at
if(!(p>=0&&p<r.length))return A.c(r,p)
r[p]=o
o=n.e
o===$&&A.i()
o.B("#","lightgreen",p,s)
break
case B.k:break}},
aJ(a){var s,r,q=this,p=q.d,o=q.w
if(!(o>=0&&o<p.length))return A.c(p,o)
p=p[o]
s=q.x
if(!(s>=0&&s<p.length))return A.c(p,s)
r=p[s]
p[s]=B.c
p=q.e
if(a){p===$&&A.i()
p.B("+","red",s,o)
q.c.push(new A.a8(q.w,q.x,t.D))}else{p===$&&A.i()
p.ae(" ",s,o)}$label0$0:{if(B.f===r){q.w=B.a.i(q.w-1,q.a)
break $label0$0}if(B.h===r){q.w=B.a.i(q.w+1,q.a)
break $label0$0}if(B.i===r){q.x=B.a.i(q.x-1,q.b)
break $label0$0}if(B.j===r){q.x=B.a.i(q.x+1,q.b)
break $label0$0}break $label0$0}},
b9(){var s,r,q,p,o=this
$label0$0:{s=o.at
s===$&&A.i()
if(B.f===s){o.f=B.a.i(o.f-1,o.a)
break $label0$0}if(B.h===s){o.f=B.a.i(o.f+1,o.a)
break $label0$0}if(B.i===s){o.r=B.a.i(o.r-1,o.b)
break $label0$0}if(B.j===s){o.r=B.a.i(o.r+1,o.b)
break $label0$0}break $label0$0}$label1$1:{s=o.d
r=o.f
if(!(r>=0&&r<s.length))return A.c(s,r)
r=s[r]
s=o.r
if(!(s>=0&&s<r.length))return A.c(r,s)
q=r[s]
if(B.r===q){s=o.cx
r=o.as
if(s){o.as=r+30
for(p=0;p<5;++p)o.aJ(!0)}else{s=o.Q
o.as=r+(s<10?s:20);++o.ch}o.ah()
break $label1$1}if(B.t===q){o.ch+=3
break $label1$1}if(B.c===q)break $label1$1
o.ay=B.n}},
Y(a){return this.br(a)},
br(a){var s=0,r=A.fW(t.n),q=this,p,o,n,m,l,k
var $async$Y=A.h6(function(b,c){if(b===1)return A.fy(c,r)
while(true)switch(s){case 0:l=a.length
k=B.a.q(q.a-l,2)
for(p=q.b,o=0;o<a.length;a.length===l||(0,A.dm)(a),++o){n=a[o]
m=q.e
m===$&&A.i()
m.B(n,"white",B.a.q(p-n.length,2),k);++k}return A.fz(null,r)}})
return A.fA($async$Y,r)},
be(){var s,r,q,p,o,n=this,m=n.a,l=m/2|0
n.f=l
s=n.b
r=s/2|0
n.r=r
n.w=l
n.x=r
n.CW=n.as=0
n.cx=!1
for(l=n.d,r=l.length,q=0;q<m;++q)for(p=0;p<s;++p){if(!(q<r))return A.c(l,q)
o=l[q]
if(!(p<o.length))return A.c(o,p)
o[p]=B.c}m=[B.f,B.h,B.i,B.j]
s=$.cW().I(4)
if(!(s>=0&&s<4))return A.c(m,s)
s=m[s]
n.ax=n.at=s
m=n.f
if(!(m>=0&&m<l.length))return A.c(l,m)
m=l[m]
l=n.r
if(!(l>=0&&l<m.length))return A.c(m,l)
m[l]=s
n.ah()
n.ay=B.m},
aB(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.a,d=f.b,c=f.d
do{s=$.cW()
r=s.I(e)
q=s.I(d)
if(!(r>=0&&r<c.length))return A.c(c,r)
s=c[r]
if(!(q>=0&&q<s.length))return A.c(s,q)}while(s[q]!==B.c&&Math.abs(r-f.f)+Math.abs(q-f.r)<10)
for(s=t.t,s=[A.a([-1,0],s),A.a([1,0],s),A.a([0,0],s),A.a([0,-1],s),A.a([0,1],s)],p=0;p<5;++p){o=s[p]
n=B.d.gaD(o)
if(typeof n!=="number")return A.eb(n)
m=B.o.i(r+n,e)
n=B.d.gbc(o)
if(typeof n!=="number")return A.eb(n)
l=B.o.i(q+n,d)
if(m>>>0!==m||m>=c.length)return A.c(c,m)
n=c[m]
if(l>>>0!==l||l>=n.length)return A.c(n,l)
if(n[l]===B.c)if(m===r||l===q){n[l]=B.t
n=f.e
n===$&&A.i()
k=B.a.i(m,n.a)
j=B.a.i(l,n.b)
i=n.ch
if(!(k<i.length))return A.c(i,k)
h=i[k]
if(!(j<h.length))return A.c(h,j)
h=h[j]
h.c="x"
g=n.CW
g.U(0,h)
n.T()
if(!(k<i.length))return A.c(i,k)
k=i[k]
if(!(j<k.length))return A.c(k,j)
j=k[j]
j.d="red"
g.U(0,j)
n.T()}}},
X(){var s,r=this,q=r.cx,p=r.e
if(q){p===$&&A.i()
q=r.y
p.B("P","gold",r.z,q)}else{p===$&&A.i()
q=r.Q
q=q<10?""+q:"o"
s=r.y
p.B(q,"gold",r.z,s)}},
ah(){var s,r,q=this,p="Score: "+q.as,o=q.b,n=o-p.length,m=B.a.q(n,2),l=q.e
l===$&&A.i()
s=q.a
l.B(B.p.Z(" ",m)+p+B.p.Z(" ",n-m),"white",0,s)
n=q.d
do{l=$.cW()
q.y=l.I(s)
l=l.I(o)
q.z=l
r=q.y
if(!(r>=0&&r<n.length))return A.c(n,r)
r=n[r]
if(!(l>=0&&l<r.length))return A.c(r,l)}while(r[l]!==B.c)
r[l]=B.r
if(++q.CW%10===0){q.cx=!0
q.Q=3
q.X()}else{q.cx=!1
q.Q=11
q.X()}if(B.a.i(q.CW,13)===0)q.aB()}}
A.bY.prototype={
$2(a,b){var s,r,q,p=this.a,o=new A.c_(p)
$label0$0:{s=p.ay
if(B.n===s||B.l===s)break $label0$0
if(B.k===s){r=p.e
r===$&&A.i()
r.V(0)
p.be()
break $label0$0}if(B.m===s){switch(b.a){case 38:r=p.ax
r===$&&A.i()
if(r!==B.h&&r!==B.f&&o.$2(p.f-1,p.r)){p.ax=B.f;--p.Q}break
case 40:r=p.ax
r===$&&A.i()
if(r!==B.f&&r!==B.h&&o.$2(p.f+1,p.r)){p.ax=B.h;--p.Q}break
case 37:r=p.ax
r===$&&A.i()
if(r!==B.j&&r!==B.i&&o.$2(p.f,p.r-1)){p.ax=B.i;--p.Q}break
case 39:r=p.ax
r===$&&A.i()
if(r!==B.i&&r!==B.j&&o.$2(p.f,p.r+1)){p.ax=B.j;--p.Q}break}if(p.Q===0){p.ch=p.cx?0:1
r=p.e
r===$&&A.i()
q=p.y
r.ae(" ",p.z,q)
q=p.d
r=p.y
if(!(r>=0&&r<q.length))return A.c(q,r)
r=q[r]
q=p.z
if(!(q>=0&&q<r.length))return A.c(r,q)
r[q]=B.c
if(!p.cx)p.aB()
p.ah()}else p.X()
break $label0$0}}},
$S:19}
A.c_.prototype={
$2(a,b){var s=A.a([B.r,B.t,B.c],t.p),r=this.a,q=r.d,p=B.a.i(a,r.a)
if(!(p<q.length))return A.c(q,p)
p=q[p]
r=B.a.i(b,r.b)
if(!(r<p.length))return A.c(p,r)
return B.d.b5(s,p[r])},
$S:20}
A.bZ.prototype={
$1(a){var s=this.a,r=s.e
r===$&&A.i()
r=r.w
r===$&&A.i()
if(r.gaE())s.aL()},
$S:5};(function aliases(){var s=J.O.prototype
s.aN=s.h})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._instance_0u
s(A,"h7","f1",2)
s(A,"h8","f2",2)
s(A,"h9","f3",2)
r(A,"e6","h1",0)
var p
q(p=A.br.prototype,"ga8","H",0)
q(p,"ga6","F",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.h,null)
q(A.h,[A.cZ,J.b9,J.b0,A.j,A.bW,A.bd,A.ao,A.ag,A.b5,A.cb,A.bO,A.an,A.aO,A.U,A.aw,A.bM,A.x,A.bB,A.bF,A.aP,A.bw,A.D,A.bz,A.ad,A.u,A.by,A.bD,A.cF,A.aD,A.cx,A.af,A.l,A.b6,A.cj,A.bo,A.aE,A.ck,A.t,A.bE,A.bt,A.cv,A.a8,A.L,A.N,A.a6,A.a9,A.br,A.aF,A.bX])
q(J.b9,[J.ba,J.aq,J.as,J.ar,J.at,J.a3,J.a4])
q(J.as,[J.O,J.m,A.be,A.az])
q(J.O,[J.bp,J.ac,J.M])
r(J.bL,J.m)
q(J.a3,[J.ap,J.bb])
q(A.j,[A.a5,A.H,A.bc,A.bv,A.bq,A.bA,A.b1,A.C,A.aG,A.bu,A.bs,A.b3])
r(A.bC,A.ag)
r(A.A,A.bC)
r(A.b7,A.b5)
r(A.aB,A.H)
q(A.U,[A.bI,A.bJ,A.c1,A.cO,A.cQ,A.cg,A.cf,A.cG,A.ct,A.cA,A.c9,A.c8,A.c4,A.c5,A.c6,A.bZ])
q(A.c1,[A.c0,A.am])
r(A.av,A.aw)
r(A.au,A.av)
q(A.bJ,[A.cP,A.cH,A.cK,A.cu,A.bN,A.bR,A.bY,A.c_])
q(A.az,[A.bf,A.a7])
q(A.a7,[A.aI,A.aK])
r(A.aJ,A.aI)
r(A.ax,A.aJ)
r(A.aL,A.aK)
r(A.ay,A.aL)
q(A.ax,[A.bg,A.bh])
q(A.ay,[A.bi,A.bj,A.bk,A.bl,A.bm,A.aA,A.bn])
r(A.aQ,A.bA)
q(A.bI,[A.ch,A.ci,A.cC,A.cB,A.cl,A.cp,A.co,A.cn,A.cm,A.cs,A.cr,A.cq,A.cJ,A.cz,A.bS,A.bT,A.bU,A.bV,A.c7,A.c2,A.c3])
r(A.bx,A.bz)
r(A.cy,A.cF)
r(A.aN,A.aD)
r(A.aH,A.aN)
q(A.C,[A.aa,A.b8])
q(A.cj,[A.E,A.ab,A.z,A.a2])
s(A.aI,A.l)
s(A.aJ,A.ao)
s(A.aK,A.l)
s(A.aL,A.ao)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{b:"int",q:"double",ed:"num",y:"String",cM:"bool",t:"Null",f:"List",h:"Object",hA:"Map"},mangledNames:{},types:["~()","t()","~(~())","t(@)","t(k)","~(ca)","@(@)","@(@,y)","@(y)","t(~())","~(@)","t(@,P)","~(b,@)","t(h,P)","~(h?,h?)","b(b,b)","a6(k)","N(k)","y()","~(aF,N)","cM(b,b)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.A&&a.b(c.a)&&b.b(c.b)}}
A.fj(v.typeUniverse,JSON.parse('{"bp":"O","ac":"O","M":"O","ba":{"e":[]},"aq":{"e":[]},"as":{"k":[]},"O":{"k":[]},"m":{"f":["1"],"k":[]},"bL":{"m":["1"],"f":["1"],"k":[]},"a3":{"q":[]},"ap":{"q":[],"b":[],"e":[]},"bb":{"q":[],"e":[]},"a4":{"y":[],"e":[]},"a5":{"j":[]},"aB":{"H":[],"j":[]},"bc":{"j":[]},"bv":{"j":[]},"aO":{"P":[]},"bq":{"j":[]},"av":{"aw":["1","2"]},"au":{"av":["1","2"],"aw":["1","2"]},"be":{"k":[],"e":[]},"az":{"k":[]},"bf":{"k":[],"e":[]},"a7":{"v":["1"],"k":[]},"ax":{"l":["q"],"f":["q"],"v":["q"],"k":[]},"ay":{"l":["b"],"f":["b"],"v":["b"],"k":[]},"bg":{"l":["q"],"f":["q"],"v":["q"],"k":[],"e":[],"l.E":"q"},"bh":{"l":["q"],"f":["q"],"v":["q"],"k":[],"e":[],"l.E":"q"},"bi":{"l":["b"],"f":["b"],"v":["b"],"k":[],"e":[],"l.E":"b"},"bj":{"l":["b"],"f":["b"],"v":["b"],"k":[],"e":[],"l.E":"b"},"bk":{"l":["b"],"f":["b"],"v":["b"],"k":[],"e":[],"l.E":"b"},"bl":{"l":["b"],"f":["b"],"v":["b"],"k":[],"e":[],"l.E":"b"},"bm":{"cd":[],"l":["b"],"f":["b"],"v":["b"],"k":[],"e":[],"l.E":"b"},"aA":{"l":["b"],"f":["b"],"v":["b"],"k":[],"e":[],"l.E":"b"},"bn":{"l":["b"],"f":["b"],"v":["b"],"k":[],"e":[],"l.E":"b"},"bA":{"j":[]},"aQ":{"H":[],"j":[]},"aP":{"ca":[]},"D":{"j":[]},"u":{"a1":["1"]},"aH":{"aD":["1"]},"aN":{"aD":["1"]},"b1":{"j":[]},"H":{"j":[]},"C":{"j":[]},"aa":{"j":[]},"b8":{"j":[]},"aG":{"j":[]},"bu":{"j":[]},"bs":{"j":[]},"b3":{"j":[]},"bo":{"j":[]},"aE":{"j":[]},"bE":{"P":[]},"eK":{"f":["b"]},"f_":{"f":["b"]},"eZ":{"f":["b"]},"eI":{"f":["b"]},"eY":{"f":["b"]},"eJ":{"f":["b"]},"cd":{"f":["b"]},"eF":{"f":["q"]},"eG":{"f":["q"]}}'))
A.fi(v.typeUniverse,JSON.parse('{"ao":1,"b5":2,"a7":1,"bz":1,"bD":1,"aN":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.dh
return{o:s("L"),Q:s("j"),Z:s("hz"),V:s("m<L>"),G:s("m<f<L>>"),I:s("m<f<z>>"),f:s("m<h>"),U:s("m<a8<b>>"),s:s("m<y>"),w:s("m<cd>"),p:s("m<z>"),b:s("m<@>"),t:s("m<b>"),T:s("aq"),m:s("k"),g:s("M"),E:s("v<@>"),W:s("N"),j:s("f<@>"),q:s("a6"),P:s("t"),K:s("h"),D:s("a8<b>"),L:s("hB"),F:s("+()"),l:s("P"),N:s("y"),J:s("ca"),R:s("e"),_:s("H"),A:s("ac"),c:s("u<@>"),y:s("cM"),i:s("q"),z:s("@"),v:s("@(h)"),C:s("@(h,P)"),S:s("b"),O:s("a1<t>?"),X:s("h?"),x:s("y?"),u:s("cM?"),B:s("q?"),M:s("b?"),Y:s("ed?"),H:s("ed"),n:s("~")}})();(function constants(){var s=hunkHelpers.makeConstList
B.J=J.b9.prototype
B.d=J.m.prototype
B.a=J.ap.prototype
B.o=J.a3.prototype
B.p=J.a4.prototype
B.K=J.M.prototype
B.L=J.as.prototype
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
B.e=new A.bW()
B.H=new A.cv()
B.b=new A.cy()
B.I=new A.bE()
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
B.dP=new A.b7(["\u263a",B.da,"\u263b",B.ac,"\u2665",B.dH,"\u2666",B.c7,"\u2663",B.b5,"\u2660",B.bh,"\u2022",B.aA,"\u25d8",B.aD,"\u25cb",B.aP,"\u25d9",B.cV,"\u2642",B.dG,"\u2640",B.dF,"\u266a",B.cS,"\u266b",B.W,"\u263c",B.a0,"\u25ba",B.ax,"\u25c4",B.bD,"\u2195",B.cl,"\u203c",B.ch,"\xb6",B.cr,"\xa7",B.cs,"\u25ac",B.bR,"\u21a8",B.bU,"\u2191",B.R,"\u2193",B.df,"\u2192",B.d8,"\u2190",B.au,"\u221f",B.bZ,"\u2194",B.bw,"\u25b2",B.aa,"\u25bc",B.bV," ",B.b0,"!",B.bE,'"',B.Z,"#",B.ao,"$",B.c2,"%",B.Q,"&",B.cE,"'",B.an,"(",B.V,")",B.bA,"*",B.cv,"+",B.dO,",",B.c4,"-",B.bv,".",B.cj,"/",B.a5,"0",B.b8,"1",B.cm,"2",B.c0,"3",B.dJ,"4",B.bC,"5",B.d9,"6",B.dr,"7",B.c1,"8",B.cy,"9",B.bf,":",B.d2,";",B.aS,"<",B.bB,"=",B.bq,">",B.aC,"?",B.as,"@",B.dm,"A",B.cd,"B",B.aM,"C",B.ae,"D",B.a6,"E",B.ak,"F",B.cp,"G",B.aq,"H",B.at,"I",B.cN,"J",B.bP,"K",B.bH,"L",B.bG,"M",B.aN,"N",B.Y,"O",B.cX,"P",B.bl,"Q",B.cH,"R",B.P,"S",B.ah,"T",B.dA,"U",B.aK,"V",B.a2,"W",B.cQ,"X",B.cK,"Y",B.a4,"Z",B.T,"[",B.bx,"\\",B.cC,"]",B.bz,"^",B.dq,"_",B.O,"`",B.aL,"a",B.dg,"b",B.cg,"c",B.cJ,"d",B.b6,"e",B.dt,"f",B.aQ,"g",B.cG,"h",B.aB,"i",B.cw,"j",B.bK,"k",B.bd,"l",B.bM,"m",B.bu,"n",B.bN,"o",B.bg,"p",B.dx,"q",B.du,"r",B.br,"s",B.d_,"t",B.cT,"u",B.ca,"v",B.b4,"w",B.bk,"x",B.bI,"y",B.dD,"z",B.de,"{",B.ba,"|",B.cZ,"}",B.aF,"~",B.dN,"\u2302",B.b3,"\xc7",B.aw,"\xfc",B.dc,"\xe9",B.dC,"\xe2",B.c3,"\xe4",B.aj,"\xe0",B.b7,"\xe5",B.a9,"\xe7",B.bn,"\xea",B.dl,"\xeb",B.aO,"\xe8",B.d0,"\xef",B.dd,"\xee",B.cR,"\xec",B.b_,"\xc4",B.dI,"\xc5",B.cY,"\xc9",B.bF,"\xe6",B.dB,"\xc6",B.aT,"\xf4",B.dv,"\xf6",B.af,"\xf2",B.dK,"\xfb",B.aR,"\xf9",B.cU,"\xff",B.az,"\xd6",B.al,"\xdc",B.d6,"\xa2",B.a_,"\xa3",B.aI,"\xa5",B.b1,"\u20a7",B.dh,"\u0192",B.bQ,"\xe1",B.aE,"\xed",B.cf,"\xf3",B.aH,"\xfa",B.cz,"\xf1",B.aX,"\xd1",B.cP,"\xaa",B.ag,"\xba",B.cc,"\xbf",B.d7,"\u2310",B.aZ,"\xac",B.aG,"\xbd",B.d1,"\xbc",B.ay,"\xa1",B.bT,"\xab",B.bS,"\xbb",B.bc,"\u2591",B.cB,"\u2592",B.dw,"\u2593",B.bL,"\u2502",B.b2,"\u2524",B.aY,"\u2561",B.c_,"\u2562",B.dM,"\u2556",B.cn,"\u2555",B.aU,"\u2563",B.ad,"\u2551",B.ct,"\u2557",B.cb,"\u255d",B.cx,"\u255c",B.ar,"\u255b",B.a3,"\u2510",B.a8,"\u2514",B.a1,"\u2534",B.bY,"\u252c",B.bp,"\u251c",B.d5,"\u2500",B.bW,"\u253c",B.cu,"\u255e",B.cF,"\u255f",B.be,"\u255a",B.ds,"\u2554",B.dk,"\u2569",B.bJ,"\u2566",B.by,"\u2560",B.aW,"\u2550",B.aV,"\u256c",B.dE,"\u2567",B.cL,"\u2568",B.M,"\u2564",B.dy,"\u2565",B.c5,"\u2559",B.co,"\u2558",B.bt,"\u2552",B.ci,"\u2553",B.cI,"\u256b",B.cO,"\u256a",B.bO,"\u2518",B.di,"\u250c",B.b9,"\u2588",B.c6,"\u2584",B.c9,"\u258c",B.bj,"\u2590",B.cq,"\u2580",B.d4,"\u03b1",B.dL,"\xdf",B.dn,"\u0393",B.ap,"\u03c0",B.c8,"\u03a3",B.dj,"\u03c3",B.bm,"\xb5",B.bs,"\u03c4",B.cD,"\u03a6",B.ai,"\u0398",B.aJ,"\u03a9",B.am,"\u03b4",B.N,"\u221e",B.dz,"\u03c6",B.bo,"\u03b5",B.ab,"\u2229",B.ck,"\u2261",B.cM,"\xb1",B.a7,"\u2265",B.bb,"\u2264",B.cW,"\u2320",B.bi,"\u2321",B.db,"\xf7",B.ce,"\u2248",B.S,"\xb0",B.cA,"\u2219",B.U,"\xb7",B.dp,"\u221a",B.X,"\u207f",B.bX,"\xb2",B.av,"\u25a0",B.d3],A.dh("b7<y,f<b>>"))
B.w=new A.E("replace")
B.dQ=new A.E("inverse")
B.dR=new A.E("over")
B.dS=new A.E("under")
B.dT=new A.E("stain")
B.dU=new A.E("delete")
B.dV=new A.E("maskDestination")
B.dW=new A.E("maskSource")
B.y=new A.ab("ready")
B.dX=new A.ab("awaitingKey")
B.z=new A.ab("awaitingString")
B.dY=new A.ab("awaitingMouseClick")
B.dZ=A.B("hw")
B.e_=A.B("hx")
B.e0=A.B("eF")
B.e1=A.B("eG")
B.e2=A.B("eI")
B.e3=A.B("eJ")
B.e4=A.B("eK")
B.e5=A.B("h")
B.e6=A.B("eY")
B.e7=A.B("cd")
B.e8=A.B("eZ")
B.e9=A.B("f_")
B.c=new A.z("nothing")
B.r=new A.z("apple")
B.f=new A.z("up")
B.h=new A.z("down")
B.i=new A.z("left")
B.j=new A.z("right")
B.t=new A.z("brick")})();(function staticFields(){$.cw=null
$.K=A.a([],t.f)
$.dA=null
$.dv=null
$.du=null
$.ea=null
$.e5=null
$.ef=null
$.cN=null
$.cR=null
$.dj=null
$.aM=A.a([],A.dh("m<f<h>?>"))
$.ah=null
$.aW=null
$.aX=null
$.dd=!1
$.n=B.b})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"hy","cU",()=>A.hh("_$dart_dartClosure"))
s($,"hF","ej",()=>A.I(A.cc({
toString:function(){return"$receiver$"}})))
s($,"hG","ek",()=>A.I(A.cc({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"hH","el",()=>A.I(A.cc(null)))
s($,"hI","em",()=>A.I(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"hL","ep",()=>A.I(A.cc(void 0)))
s($,"hM","eq",()=>A.I(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"hK","eo",()=>A.I(A.dG(null)))
s($,"hJ","en",()=>A.I(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"hO","es",()=>A.I(A.dG(void 0)))
s($,"hN","er",()=>A.I(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"hP","dp",()=>A.f0())
s($,"hR","cV",()=>A.dl(B.e5))
s($,"hE","ei",()=>A.d0(8,0,t.S))
s($,"hD","eh",()=>A.d0(8,255,t.S))
s($,"hT","cW",()=>B.H)})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.be,ArrayBufferView:A.az,DataView:A.bf,Float32Array:A.bg,Float64Array:A.bh,Int16Array:A.bi,Int32Array:A.bj,Int8Array:A.bk,Uint16Array:A.bl,Uint32Array:A.bm,Uint8ClampedArray:A.aA,CanvasPixelArray:A.aA,Uint8Array:A.bn})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.a7.$nativeSuperclassTag="ArrayBufferView"
A.aI.$nativeSuperclassTag="ArrayBufferView"
A.aJ.$nativeSuperclassTag="ArrayBufferView"
A.ax.$nativeSuperclassTag="ArrayBufferView"
A.aK.$nativeSuperclassTag="ArrayBufferView"
A.aL.$nativeSuperclassTag="ArrayBufferView"
A.ay.$nativeSuperclassTag="ArrayBufferView"})()
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
