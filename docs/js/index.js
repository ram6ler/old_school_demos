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
if(a[b]!==s){A.i2(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.dI(b)
return new s(c,this)}:function(){if(s===null)s=A.dI(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.dI(a).prototype
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
dM(a,b,c,d){return{i:a,p:b,e:c,x:d}},
dK(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.dL==null){A.hU()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.b(A.e8("Return interceptor for "+A.q(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.cQ
if(o==null)o=$.cQ=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.hZ(a)
if(p!=null)return p
if(typeof a=="function")return B.z
s=Object.getPrototypeOf(a)
if(s==null)return B.m
if(s===Object.prototype)return B.m
if(typeof q=="function"){o=$.cQ
if(o==null)o=$.cQ=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.i,enumerable:false,writable:true,configurable:true})
return B.i}return B.i},
e0(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
fg(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.e0(r))break;++b}return b},
fh(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.d(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.e0(q))break}return b},
a3(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aq.prototype
return J.bg.prototype}if(typeof a=="string")return J.Y.prototype
if(a==null)return J.ar.prototype
if(typeof a=="boolean")return J.bf.prototype
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.O.prototype
if(typeof a=="symbol")return J.au.prototype
if(typeof a=="bigint")return J.as.prototype
return a}if(a instanceof A.e)return a
return J.dK(a)},
eE(a){if(typeof a=="string")return J.Y.prototype
if(a==null)return a
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.O.prototype
if(typeof a=="symbol")return J.au.prototype
if(typeof a=="bigint")return J.as.prototype
return a}if(a instanceof A.e)return a
return J.dK(a)},
hN(a){if(a==null)return a
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.O.prototype
if(typeof a=="symbol")return J.au.prototype
if(typeof a=="bigint")return J.as.prototype
return a}if(a instanceof A.e)return a
return J.dK(a)},
hO(a){if(typeof a=="number")return J.a5.prototype
if(a==null)return a
if(!(a instanceof A.e))return J.a_.prototype
return a},
hP(a){if(typeof a=="string")return J.Y.prototype
if(a==null)return a
if(!(a instanceof A.e))return J.a_.prototype
return a},
al(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.a3(a).t(a,b)},
E(a){return J.a3(a).gk(a)},
eY(a){return J.hN(a).gaj(a)},
dS(a){return J.eE(a).gm(a)},
eZ(a){return J.a3(a).gl(a)},
dT(a){return J.hO(a).bG(a)},
b5(a){return J.a3(a).h(a)},
f_(a){return J.hP(a).aX(a)},
be:function be(){},
bf:function bf(){},
ar:function ar(){},
at:function at(){},
P:function P(){},
bv:function bv(){},
a_:function a_(){},
O:function O(){},
as:function as(){},
au:function au(){},
o:function o(a){this.$ti=a},
c0:function c0(a){this.$ti=a},
b6:function b6(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
a5:function a5(){},
aq:function aq(){},
bg:function bg(){},
Y:function Y(){}},A={dn:function dn(){},
Q(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
dw(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
dH(a,b,c){return a},
eH(a){var s,r
for(s=$.L.length,r=0;r<s;++r)if(a===$.L[r])return!0
return!1},
ff(){return new A.ac("No element")},
aw:function aw(a){this.a=a},
dh:function dh(){},
cb:function cb(){},
bj:function bj(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ap:function ap(){},
eK(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
iH(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
q(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.b5(a)
return s},
aa(a){var s,r=$.e1
if(r==null)r=$.e1=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
c5(a){return A.fm(a)},
fm(a){var s,r,q,p
if(a instanceof A.e)return A.u(A.b2(a),null)
s=J.a3(a)
if(s===B.x||s===B.A||t.B.b(a)){r=B.j(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.u(A.b2(a),null)},
e2(a){if(a==null||typeof a=="number"||A.dD(a))return J.b5(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.X)return a.h(0)
if(a instanceof A.ag)return a.aI(!0)
return"Instance of '"+A.c5(a)+"'"},
fn(a){var s=a.$thrownJsError
if(s==null)return null
return A.D(s)},
d(a,b){if(a==null)J.dS(a)
throw A.b(A.eC(a,b))},
eC(a,b){var s,r="index"
if(!A.es(b))return new A.B(!0,b,r,null)
s=J.dS(a)
if(b<0||b>=s)return A.fb(b,s,a,r)
return new A.aD(null,null,!0,b,r,"Value not in range")},
dG(a){return new A.B(!0,a,null,null)},
b(a){return A.eG(new Error(),a)},
eG(a,b){var s
if(b==null)b=new A.G()
a.dartException=b
s=A.i3
if("defineProperty" in Object){Object.defineProperty(a,"message",{get:s})
a.name=""}else a.toString=s
return a},
i3(){return J.b5(this.dartException)},
dP(a){throw A.b(a)},
dQ(a,b){throw A.eG(b,a)},
b4(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.dQ(A.h6(a,b,c),s)},
h6(a,b,c){var s,r,q,p,o,n,m,l,k
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
bV(a){throw A.b(A.a4(a))},
H(a){var s,r,q,p,o,n
a=A.i1(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.a([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.cs(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
ct(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
e7(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
dp(a,b){var s=b==null,r=s?null:b.method
return new A.bh(a,r,s?null:b.receiver)},
M(a){if(a==null)return new A.c3(a)
if(a instanceof A.ao)return A.U(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.U(a,a.dartException)
return A.hB(a)},
U(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
hB(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.a.bo(r,16)&8191)===10)switch(q){case 438:return A.U(a,A.dp(A.q(s)+" (Error "+q+")",null))
case 445:case 5007:A.q(s)
return A.U(a,new A.aC())}}if(a instanceof TypeError){p=$.eN()
o=$.eO()
n=$.eP()
m=$.eQ()
l=$.eT()
k=$.eU()
j=$.eS()
$.eR()
i=$.eW()
h=$.eV()
g=p.q(s)
if(g!=null)return A.U(a,A.dp(s,g))
else{g=o.q(s)
if(g!=null){g.method="call"
return A.U(a,A.dp(s,g))}else if(n.q(s)!=null||m.q(s)!=null||l.q(s)!=null||k.q(s)!=null||j.q(s)!=null||m.q(s)!=null||i.q(s)!=null||h.q(s)!=null)return A.U(a,new A.aC())}return A.U(a,new A.bA(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.aF()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.U(a,new A.B(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.aF()
return a},
D(a){var s
if(a instanceof A.ao)return a.b
if(a==null)return new A.aS(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.aS(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
dN(a){if(a==null)return J.E(a)
if(typeof a=="object")return A.aa(a)
return J.E(a)},
hJ(a){if(typeof a=="number")return B.y.gk(a)
if(a instanceof A.bP)return A.aa(a)
if(a instanceof A.ag)return a.gk(a)
return A.dN(a)},
eD(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=a.length
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
if(m==null)o[q]=b.R(q,p)
else m.b=p}else if(typeof q=="number"&&(q&0x3fffffff)===q){l=b.c
if(l==null){n=Object.create(null)
n["<non-identifier-key>"]=n
delete n["<non-identifier-key>"]
b.c=n
l=n}m=l[q]
if(m==null)l[q]=b.R(q,p)
else m.b=p}else{k=b.d
if(k==null){n=Object.create(null)
n["<non-identifier-key>"]=n
delete n["<non-identifier-key>"]
b.d=n
k=n}j=b.ag(q)
i=k[j]
if(i==null)k[j]=[b.R(q,p)]
else{r=b.ah(i,q)
if(r>=0)i[r].b=p
else i.push(b.R(q,p))}}}return b},
hf(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.b(A.e_("Unsupported number of arguments for wrapped closure"))},
bU(a,b){var s=a.$identity
if(!!s)return s
s=A.hK(a,b)
a.$identity=s
return s},
hK(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.hf)},
f6(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.cc().constructor.prototype):Object.create(new A.an(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.dZ(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.f2(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.dZ(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
f2(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.f0)}throw A.b("Error in functionType of tearoff")},
f3(a,b,c,d){var s=A.dY
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
dZ(a,b,c,d){if(c)return A.f5(a,b,d)
return A.f3(b.length,d,a,b)},
f4(a,b,c,d){var s=A.dY,r=A.f1
switch(b?-1:a){case 0:throw A.b(new A.bw("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
f5(a,b,c){var s,r
if($.dW==null)$.dW=A.dV("interceptor")
if($.dX==null)$.dX=A.dV("receiver")
s=b.length
r=A.f4(s,c,a,b)
return r},
dI(a){return A.f6(a)},
f0(a,b){return A.aZ(v.typeUniverse,A.b2(a.a),b)},
dY(a){return a.a},
f1(a){return a.b},
dV(a){var s,r,q,p=new A.an("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.b(A.am("Field name "+a+" not found.",null))},
iJ(a){throw A.b(new A.bG(a))},
hQ(a){return v.getIsolateTag(a)},
hZ(a){var s,r,q,p,o,n=$.eF.$1(a),m=$.d5[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.d9[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.ez.$2(a,n)
if(q!=null){m=$.d5[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.d9[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.dg(s)
$.d5[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.d9[n]=s
return s}if(p==="-"){o=A.dg(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.eI(a,s)
if(p==="*")throw A.b(A.e8(n))
if(v.leafTags[n]===true){o=A.dg(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.eI(a,s)},
eI(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.dM(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
dg(a){return J.dM(a,!1,null,!!a.$iv)},
i_(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.dg(s)
else return J.dM(s,c,null,null)},
hU(){if(!0===$.dL)return
$.dL=!0
A.hV()},
hV(){var s,r,q,p,o,n,m,l
$.d5=Object.create(null)
$.d9=Object.create(null)
A.hT()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.eJ.$1(o)
if(n!=null){m=A.i_(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
hT(){var s,r,q,p,o,n,m=B.o()
m=A.ak(B.p,A.ak(B.q,A.ak(B.k,A.ak(B.k,A.ak(B.r,A.ak(B.t,A.ak(B.u(B.j),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.eF=new A.d6(p)
$.ez=new A.d7(o)
$.eJ=new A.d8(n)},
ak(a,b){return a(b)||b},
hL(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
fi(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw A.b(new A.bZ("Illegal RegExp pattern ("+String(n)+")",a))},
i1(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
z:function z(a,b){this.a=a
this.b=b},
ba:function ba(){},
bc:function bc(a,b){this.a=a
this.$ti=b},
cs:function cs(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aC:function aC(){},
bh:function bh(a,b,c){this.a=a
this.b=b
this.c=c},
bA:function bA(a){this.a=a},
c3:function c3(a){this.a=a},
ao:function ao(a,b){this.a=a
this.b=b},
aS:function aS(a){this.a=a
this.b=null},
X:function X(){},
bW:function bW(){},
bX:function bX(){},
ch:function ch(){},
cc:function cc(){},
an:function an(a,b){this.a=a
this.b=b},
bG:function bG(a){this.a=a},
bw:function bw(a){this.a=a},
Z:function Z(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
c1:function c1(a,b){this.a=a
this.b=b
this.c=null},
bi:function bi(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
av:function av(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
d6:function d6(a){this.a=a},
d7:function d7(a){this.a=a},
d8:function d8(a){this.a=a},
ag:function ag(){},
bM:function bM(){},
c_:function c_(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cS:function cS(a){this.b=a},
a1(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.eC(b,a))},
bk:function bk(){},
aA:function aA(){},
bl:function bl(){},
a8:function a8(){},
ay:function ay(){},
az:function az(){},
bm:function bm(){},
bn:function bn(){},
bo:function bo(){},
bp:function bp(){},
bq:function bq(){},
br:function br(){},
bs:function bs(){},
aB:function aB(){},
bt:function bt(){},
aM:function aM(){},
aN:function aN(){},
aO:function aO(){},
aP:function aP(){},
e4(a,b){var s=b.c
return s==null?b.c=A.dA(a,b.x,!0):s},
dt(a,b){var s=b.c
return s==null?b.c=A.aX(a,"F",[b.x]):s},
e5(a){var s=a.w
if(s===6||s===7||s===8)return A.e5(a.x)
return s===12||s===13},
fp(a){return a.as},
dJ(a){return A.bQ(v.typeUniverse,a,!1)},
T(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.T(a1,s,a3,a4)
if(r===s)return a2
return A.ej(a1,r,!0)
case 7:s=a2.x
r=A.T(a1,s,a3,a4)
if(r===s)return a2
return A.dA(a1,r,!0)
case 8:s=a2.x
r=A.T(a1,s,a3,a4)
if(r===s)return a2
return A.eh(a1,r,!0)
case 9:q=a2.y
p=A.aj(a1,q,a3,a4)
if(p===q)return a2
return A.aX(a1,a2.x,p)
case 10:o=a2.x
n=A.T(a1,o,a3,a4)
m=a2.y
l=A.aj(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.dy(a1,n,l)
case 11:k=a2.x
j=a2.y
i=A.aj(a1,j,a3,a4)
if(i===j)return a2
return A.ei(a1,k,i)
case 12:h=a2.x
g=A.T(a1,h,a3,a4)
f=a2.y
e=A.hy(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.eg(a1,g,e)
case 13:d=a2.y
a4+=d.length
c=A.aj(a1,d,a3,a4)
o=a2.x
n=A.T(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.dz(a1,n,c,!0)
case 14:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.b(A.b8("Attempted to substitute unexpected RTI kind "+a0))}},
aj(a,b,c,d){var s,r,q,p,o=b.length,n=A.cZ(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.T(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
hz(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.cZ(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.T(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
hy(a,b,c,d){var s,r=b.a,q=A.aj(a,r,c,d),p=b.b,o=A.aj(a,p,c,d),n=b.c,m=A.hz(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.bK()
s.a=q
s.b=o
s.c=m
return s},
a(a,b){a[v.arrayRti]=b
return a},
eB(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.hS(s)
return a.$S()}return null},
hW(a,b){var s
if(A.e5(b))if(a instanceof A.X){s=A.eB(a)
if(s!=null)return s}return A.b2(a)},
b2(a){if(a instanceof A.e)return A.bR(a)
if(Array.isArray(a))return A.dB(a)
return A.dC(J.a3(a))},
dB(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
bR(a){var s=a.$ti
return s!=null?s:A.dC(a)},
dC(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.hd(a,s)},
hd(a,b){var s=a instanceof A.X?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.fV(v.typeUniverse,s.name)
b.$ccache=r
return r},
hS(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.bQ(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
hR(a){return A.a2(A.bR(a))},
dF(a){var s
if(a instanceof A.ag)return A.hM(a.$r,a.aB())
s=a instanceof A.X?A.eB(a):null
if(s!=null)return s
if(t.R.b(a))return J.eZ(a).a
if(Array.isArray(a))return A.dB(a)
return A.b2(a)},
a2(a){var s=a.r
return s==null?a.r=A.en(a):s},
en(a){var s,r,q=a.as,p=q.replace(/\*/g,"")
if(p===q)return a.r=new A.bP(a)
s=A.bQ(v.typeUniverse,p,!0)
r=s.r
return r==null?s.r=A.en(s):r},
hM(a,b){var s,r,q=b,p=q.length
if(p===0)return t.F
if(0>=p)return A.d(q,0)
s=A.aZ(v.typeUniverse,A.dF(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.d(q,r)
s=A.ek(v.typeUniverse,s,A.dF(q[r]))}return A.aZ(v.typeUniverse,s,a)},
A(a){return A.a2(A.bQ(v.typeUniverse,a,!1))},
hc(a){var s,r,q,p,o,n,m=this
if(m===t.K)return A.J(m,a,A.hk)
if(!A.K(m))s=m===t._
else s=!0
if(s)return A.J(m,a,A.ho)
s=m.w
if(s===7)return A.J(m,a,A.ha)
if(s===1)return A.J(m,a,A.et)
r=s===6?m.x:m
q=r.w
if(q===8)return A.J(m,a,A.hg)
if(r===t.S)p=A.es
else if(r===t.i||r===t.H)p=A.hj
else if(r===t.N)p=A.hm
else p=r===t.y?A.dD:null
if(p!=null)return A.J(m,a,p)
if(q===9){o=r.x
if(r.y.every(A.hX)){m.f="$i"+o
if(o==="h")return A.J(m,a,A.hi)
return A.J(m,a,A.hn)}}else if(q===11){n=A.hL(r.x,r.y)
return A.J(m,a,n==null?A.et:n)}return A.J(m,a,A.h8)},
J(a,b,c){a.b=c
return a.b(b)},
hb(a){var s,r=this,q=A.h7
if(!A.K(r))s=r===t._
else s=!0
if(s)q=A.fY
else if(r===t.K)q=A.fX
else{s=A.b3(r)
if(s)q=A.h9}r.a=q
return r.a(a)},
bS(a){var s=a.w,r=!0
if(!A.K(a))if(!(a===t._))if(!(a===t.A))if(s!==7)if(!(s===6&&A.bS(a.x)))r=s===8&&A.bS(a.x)||a===t.P||a===t.T
return r},
h8(a){var s=this
if(a==null)return A.bS(s)
return A.hY(v.typeUniverse,A.hW(a,s),s)},
ha(a){if(a==null)return!0
return this.x.b(a)},
hn(a){var s,r=this
if(a==null)return A.bS(r)
s=r.f
if(a instanceof A.e)return!!a[s]
return!!J.a3(a)[s]},
hi(a){var s,r=this
if(a==null)return A.bS(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.e)return!!a[s]
return!!J.a3(a)[s]},
h7(a){var s=this
if(a==null){if(A.b3(s))return a}else if(s.b(a))return a
A.eo(a,s)},
h9(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.eo(a,s)},
eo(a,b){throw A.b(A.fM(A.ea(a,A.u(b,null))))},
ea(a,b){return A.bY(a)+": type '"+A.u(A.dF(a),null)+"' is not a subtype of type '"+b+"'"},
fM(a){return new A.aV("TypeError: "+a)},
t(a,b){return new A.aV("TypeError: "+A.ea(a,b))},
hg(a){var s=this,r=s.w===6?s.x:s
return r.x.b(a)||A.dt(v.typeUniverse,r).b(a)},
hk(a){return a!=null},
fX(a){if(a!=null)return a
throw A.b(A.t(a,"Object"))},
ho(a){return!0},
fY(a){return a},
et(a){return!1},
dD(a){return!0===a||!1===a},
ir(a){if(!0===a)return!0
if(!1===a)return!1
throw A.b(A.t(a,"bool"))},
it(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b(A.t(a,"bool"))},
is(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b(A.t(a,"bool?"))},
iu(a){if(typeof a=="number")return a
throw A.b(A.t(a,"double"))},
iw(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.t(a,"double"))},
iv(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.t(a,"double?"))},
es(a){return typeof a=="number"&&Math.floor(a)===a},
ix(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.b(A.t(a,"int"))},
iz(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b(A.t(a,"int"))},
iy(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b(A.t(a,"int?"))},
hj(a){return typeof a=="number"},
iA(a){if(typeof a=="number")return a
throw A.b(A.t(a,"num"))},
iC(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.t(a,"num"))},
iB(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.t(a,"num?"))},
hm(a){return typeof a=="string"},
iD(a){if(typeof a=="string")return a
throw A.b(A.t(a,"String"))},
iF(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b(A.t(a,"String"))},
iE(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b(A.t(a,"String?"))},
ew(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.u(a[q],b)
return s},
ht(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.ew(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.u(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
ep(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", ",a3=null
if(a6!=null){s=a6.length
if(a5==null)a5=A.a([],t.s)
else a3=a5.length
r=a5.length
for(q=s;q>0;--q)a5.push("T"+(r+q))
for(p=t.X,o=t._,n="<",m="",q=0;q<s;++q,m=a2){l=a5.length
k=l-1-q
if(!(k>=0))return A.d(a5,k)
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
if(l===9){p=A.hA(a.x)
o=a.y
return o.length>0?p+("<"+A.ew(o,b)+">"):p}if(l===11)return A.ht(a,b)
if(l===12)return A.ep(a,b,null)
if(l===13)return A.ep(a.x,b,a.y)
if(l===14){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.d(b,n)
return b[n]}return"?"},
hA(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
fW(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
fV(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.bQ(a,b,!1)
else if(typeof m=="number"){s=m
r=A.aY(a,5,"#")
q=A.cZ(s)
for(p=0;p<s;++p)q[p]=r
o=A.aX(a,b,q)
n[b]=o
return o}else return m},
fU(a,b){return A.el(a.tR,b)},
fT(a,b){return A.el(a.eT,b)},
bQ(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.ee(A.ec(a,null,b,c))
r.set(b,s)
return s},
aZ(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.ee(A.ec(a,b,c,!0))
q.set(c,r)
return r},
ek(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.dy(a,b,c.w===10?c.y:[c])
p.set(s,q)
return q},
I(a,b){b.a=A.hb
b.b=A.hc
return b},
aY(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.x(null,null)
s.w=b
s.as=c
r=A.I(a,s)
a.eC.set(c,r)
return r},
ej(a,b,c){var s,r=b.as+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.fR(a,b,r,c)
a.eC.set(r,s)
return s},
fR(a,b,c,d){var s,r,q
if(d){s=b.w
if(!A.K(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.x(null,null)
q.w=6
q.x=b
q.as=c
return A.I(a,q)},
dA(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.fQ(a,b,r,c)
a.eC.set(r,s)
return s},
fQ(a,b,c,d){var s,r,q,p
if(d){s=b.w
r=!0
if(!A.K(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.b3(b.x)
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.x
if(q.w===8&&A.b3(q.x))return q
else return A.e4(a,b)}}p=new A.x(null,null)
p.w=7
p.x=b
p.as=c
return A.I(a,p)},
eh(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.fO(a,b,r,c)
a.eC.set(r,s)
return s},
fO(a,b,c,d){var s,r
if(d){s=b.w
if(A.K(b)||b===t.K||b===t._)return b
else if(s===1)return A.aX(a,"F",[b])
else if(b===t.P||b===t.T)return t.O}r=new A.x(null,null)
r.w=8
r.x=b
r.as=c
return A.I(a,r)},
fS(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.x(null,null)
s.w=14
s.x=b
s.as=q
r=A.I(a,s)
a.eC.set(q,r)
return r},
aW(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
fN(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
aX(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.aW(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.x(null,null)
r.w=9
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.I(a,r)
a.eC.set(p,q)
return q},
dy(a,b,c){var s,r,q,p,o,n
if(b.w===10){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.aW(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.x(null,null)
o.w=10
o.x=s
o.y=r
o.as=q
n=A.I(a,o)
a.eC.set(q,n)
return n},
ei(a,b,c){var s,r,q="+"+(b+"("+A.aW(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.x(null,null)
s.w=11
s.x=b
s.y=c
s.as=q
r=A.I(a,s)
a.eC.set(q,r)
return r},
eg(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.aW(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.aW(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.fN(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.x(null,null)
p.w=12
p.x=b
p.y=c
p.as=r
o=A.I(a,p)
a.eC.set(r,o)
return o},
dz(a,b,c,d){var s,r=b.as+("<"+A.aW(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.fP(a,b,c,r,d)
a.eC.set(r,s)
return s},
fP(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.cZ(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.T(a,b,r,0)
m=A.aj(a,c,r,0)
return A.dz(a,n,m,c!==m)}}l=new A.x(null,null)
l.w=13
l.x=b
l.y=c
l.as=d
return A.I(a,l)},
ec(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
ee(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.fF(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.ed(a,r,l,k,!1)
else if(q===46)r=A.ed(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.S(a.u,a.e,k.pop()))
break
case 94:k.push(A.fS(a.u,k.pop()))
break
case 35:k.push(A.aY(a.u,5,"#"))
break
case 64:k.push(A.aY(a.u,2,"@"))
break
case 126:k.push(A.aY(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.fH(a,k)
break
case 38:A.fG(a,k)
break
case 42:p=a.u
k.push(A.ej(p,A.S(p,a.e,k.pop()),a.n))
break
case 63:p=a.u
k.push(A.dA(p,A.S(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.eh(p,A.S(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.fE(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.ef(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.fJ(a.u,a.e,o)
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
return A.S(a.u,a.e,m)},
fF(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
ed(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===10)o=o.x
n=A.fW(s,o.x)[p]
if(n==null)A.dP('No "'+p+'" in "'+A.fp(o)+'"')
d.push(A.aZ(s,o,n))}else d.push(p)
return m},
fH(a,b){var s,r=a.u,q=A.eb(a,b),p=b.pop()
if(typeof p=="string")b.push(A.aX(r,p,q))
else{s=A.S(r,a.e,p)
switch(s.w){case 12:b.push(A.dz(r,s,q,a.n))
break
default:b.push(A.dy(r,s,q))
break}}},
fE(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.eb(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.S(p,a.e,o)
q=new A.bK()
q.a=s
q.b=n
q.c=m
b.push(A.eg(p,r,q))
return
case-4:b.push(A.ei(p,b.pop(),s))
return
default:throw A.b(A.b8("Unexpected state under `()`: "+A.q(o)))}},
fG(a,b){var s=b.pop()
if(0===s){b.push(A.aY(a.u,1,"0&"))
return}if(1===s){b.push(A.aY(a.u,4,"1&"))
return}throw A.b(A.b8("Unexpected extended operation "+A.q(s)))},
eb(a,b){var s=b.splice(a.p)
A.ef(a.u,a.e,s)
a.p=b.pop()
return s},
S(a,b,c){if(typeof c=="string")return A.aX(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.fI(a,b,c)}else return c},
ef(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.S(a,b,c[s])},
fJ(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.S(a,b,c[s])},
fI(a,b,c){var s,r,q=b.w
if(q===10){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==9)throw A.b(A.b8("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.b(A.b8("Bad index "+c+" for "+b.h(0)))},
hY(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.n(a,b,null,c,null,!1)?1:0
r.set(c,s)}if(0===s)return!1
if(1===s)return!0
return!0},
n(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(!A.K(d))s=d===t._
else s=!0
if(s)return!0
r=b.w
if(r===4)return!0
if(A.K(b))return!1
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
if(p===6){s=A.e4(a,d)
return A.n(a,b,c,s,e,!1)}if(r===8){if(!A.n(a,b.x,c,d,e,!1))return!1
return A.n(a,A.dt(a,b),c,d,e,!1)}if(r===7){s=A.n(a,t.P,c,d,e,!1)
return s&&A.n(a,b.x,c,d,e,!1)}if(p===8){if(A.n(a,b,c,d.x,e,!1))return!0
return A.n(a,b,c,A.dt(a,d),e,!1)}if(p===7){s=A.n(a,b,c,t.P,e,!1)
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
if(!A.n(a,j,c,i,e,!1)||!A.n(a,i,e,j,c,!1))return!1}return A.er(a,b.x,c,d.x,e,!1)}if(p===12){if(b===t.g)return!0
if(s)return!1
return A.er(a,b,c,d,e,!1)}if(r===9){if(p!==9)return!1
return A.hh(a,b,c,d,e,!1)}if(o&&p===11)return A.hl(a,b,c,d,e,!1)
return!1},
er(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
hh(a,b,c,d,e,f){var s,r,q,p,o,n=b.x,m=d.x
for(;n!==m;){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.aZ(a,b,r[o])
return A.em(a,p,null,c,d.y,e,!1)}return A.em(a,b.y,null,c,d.y,e,!1)},
em(a,b,c,d,e,f,g){var s,r=b.length
for(s=0;s<r;++s)if(!A.n(a,b[s],d,e[s],f,!1))return!1
return!0},
hl(a,b,c,d,e,f){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.n(a,r[s],c,q[s],e,!1))return!1
return!0},
b3(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.K(a))if(s!==7)if(!(s===6&&A.b3(a.x)))r=s===8&&A.b3(a.x)
return r},
hX(a){var s
if(!A.K(a))s=a===t._
else s=!0
return s},
K(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
el(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
cZ(a){return a>0?new Array(a):v.typeUniverse.sEA},
x:function x(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
bK:function bK(){this.c=this.b=this.a=null},
bP:function bP(a){this.a=a},
bJ:function bJ(){},
aV:function aV(a){this.a=a},
fy(){var s,r,q
if(self.scheduleImmediate!=null)return A.hD()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.bU(new A.cx(s),1)).observe(r,{childList:true})
return new A.cw(s,r,q)}else if(self.setImmediate!=null)return A.hE()
return A.hF()},
fz(a){self.scheduleImmediate(A.bU(new A.cy(a),0))},
fA(a){self.setImmediate(A.bU(new A.cz(a),0))},
fB(a){A.fK(0,a)},
e6(a,b){var s=B.a.B(a.a,1000)
return A.fL(s,b)},
fK(a,b){var s=new A.aU()
s.b3(a,b)
return s},
fL(a,b){var s=new A.aU()
s.b4(a,b)
return s},
hp(a){return new A.bB(new A.m($.i,a.i("m<0>")),a.i("bB<0>"))},
h1(a,b){a.$2(0,null)
b.b=!0
return b.a},
fZ(a,b){A.h2(a,b)},
h0(a,b){var s,r=a==null?b.$ti.c.a(a):a
if(!b.b)b.a.a_(r)
else{s=b.a
if(b.$ti.i("F<1>").b(r))s.aw(r)
else s.a3(r)}},
h_(a,b){var s=A.M(a),r=A.D(a),q=b.a
if(b.b)q.v(s,r)
else q.au(s,r)},
h2(a,b){var s,r,q=new A.d0(b),p=new A.d1(b)
if(a instanceof A.m)a.aH(q,p,t.z)
else{s=t.z
if(a instanceof A.m)a.an(q,p,s)
else{r=new A.m($.i,t.d)
r.a=8
r.c=a
r.aH(q,p,s)}}},
hC(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.i.al(new A.d4(s))},
dl(a){var s
if(t.Q.b(a)){s=a.gP()
if(s!=null)return s}return B.w},
he(a,b){if($.i===B.b)return null
return null},
cF(a,b,c){var s,r,q,p={},o=p.a=a
for(;s=o.a,(s&4)!==0;){o=o.c
p.a=o}if(o===b){b.au(new A.B(!0,o,null,"Cannot complete a future with itself"),A.fr())
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.aF(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.K()
b.T(p.a)
A.a0(b,q)
return}b.a^=2
A.ai(null,null,b.b,new A.cG(p,b))},
a0(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;!0;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){f=f.c
A.bT(f.a,f.b)}return}s.a=b
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
if(r){A.bT(m.a,m.b)
return}j=$.i
if(j!==k)$.i=k
else j=null
f=f.c
if((f&15)===8)new A.cN(s,g,p).$0()
else if(q){if((f&1)!==0)new A.cM(s,m).$0()}else if((f&2)!==0)new A.cL(g,s).$0()
if(j!=null)$.i=j
f=s.c
if(f instanceof A.m){r=s.a.$ti
r=r.i("F<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.V(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.cF(f,i,!0)
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
hu(a,b){if(t.C.b(a))return b.al(a)
if(t.v.b(a))return a
throw A.b(A.dU(a,"onError",u.c))},
hq(){var s,r
for(s=$.ah;s!=null;s=$.ah){$.b1=null
r=s.b
$.ah=r
if(r==null)$.b0=null
s.a.$0()}},
hx(){$.dE=!0
try{A.hq()}finally{$.b1=null
$.dE=!1
if($.ah!=null)$.dR().$1(A.eA())}},
ey(a){var s=new A.bC(a),r=$.b0
if(r==null){$.ah=$.b0=s
if(!$.dE)$.dR().$1(A.eA())}else $.b0=r.b=s},
hw(a){var s,r,q,p=$.ah
if(p==null){A.ey(a)
$.b1=$.b0
return}s=new A.bC(a)
r=$.b1
if(r==null){s.b=p
$.ah=$.b1=s}else{q=r.b
s.b=q
$.b1=r.b=s
if(q==null)$.b0=s}},
dO(a){var s=null,r=$.i
if(B.b===r){A.ai(s,s,B.b,a)
return}A.ai(s,s,r,r.aL(a))},
ib(a){A.dH(a,"stream",t.K)
return new A.bN()},
dv(a){return new A.aH(null,null,a.i("aH<0>"))},
ex(a){return},
e9(a,b){return b==null?A.hG():b},
fC(a,b){if(b==null)b=A.hH()
if(t.k.b(b))return a.al(b)
if(t.u.b(b))return b
throw A.b(A.am("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
hr(a){},
hs(a,b){A.bT(a,b)},
h5(a,b,c){var s,r=a.aM(),q=$.dj()
if(r!==q){q=r.$ti
s=$.i
r.S(new A.R(new A.m(s,q),8,new A.d2(b,c),null,q.i("R<1,1>")))}else b.a2(c)},
fu(a,b){var s=$.i
if(s===B.b)return A.e6(a,b)
return A.e6(a,s.bq(b,t.E))},
bT(a,b){A.hw(new A.d3(a,b))},
eu(a,b,c,d){var s,r=$.i
if(r===c)return d.$0()
$.i=c
s=r
try{r=d.$0()
return r}finally{$.i=s}},
ev(a,b,c,d,e){var s,r=$.i
if(r===c)return d.$1(e)
$.i=c
s=r
try{r=d.$1(e)
return r}finally{$.i=s}},
hv(a,b,c,d,e,f){var s,r=$.i
if(r===c)return d.$2(e,f)
$.i=c
s=r
try{r=d.$2(e,f)
return r}finally{$.i=s}},
ai(a,b,c,d){if(B.b!==c)d=c.aL(d)
A.ey(d)},
cx:function cx(a){this.a=a},
cw:function cw(a,b,c){this.a=a
this.b=b
this.c=c},
cy:function cy(a){this.a=a},
cz:function cz(a){this.a=a},
aU:function aU(){this.c=0},
cY:function cY(a,b){this.a=a
this.b=b},
cX:function cX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bB:function bB(a,b){this.a=a
this.b=!1
this.$ti=b},
d0:function d0(a){this.a=a},
d1:function d1(a){this.a=a},
d4:function d4(a){this.a=a},
W:function W(a,b){this.a=a
this.b=b},
ae:function ae(a,b){this.a=a
this.$ti=b},
aI:function aI(a,b,c,d,e){var _=this
_.ay=0
_.CW=_.ch=null
_.w=a
_.a=b
_.d=c
_.e=d
_.r=_.f=null
_.$ti=e},
bD:function bD(){},
aH:function aH(a,b,c){var _=this
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
m:function m(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
cC:function cC(a,b){this.a=a
this.b=b},
cK:function cK(a,b){this.a=a
this.b=b},
cH:function cH(a){this.a=a},
cI:function cI(a){this.a=a},
cJ:function cJ(a,b,c){this.a=a
this.b=b
this.c=c},
cG:function cG(a,b){this.a=a
this.b=b},
cE:function cE(a,b){this.a=a
this.b=b},
cD:function cD(a,b,c){this.a=a
this.b=b
this.c=c},
cN:function cN(a,b,c){this.a=a
this.b=b
this.c=c},
cO:function cO(a,b){this.a=a
this.b=b},
cP:function cP(a){this.a=a},
cM:function cM(a,b){this.a=a
this.b=b},
cL:function cL(a,b){this.a=a
this.b=b},
bC:function bC(a){this.a=a
this.b=null},
ad:function ad(){},
cf:function cf(a,b){this.a=a
this.b=b},
cg:function cg(a,b){this.a=a
this.b=b},
cd:function cd(a){this.a=a},
ce:function ce(a,b,c){this.a=a
this.b=b
this.c=c},
aJ:function aJ(){},
bF:function bF(){},
bE:function bE(){},
aT:function aT(){},
bI:function bI(){},
bH:function bH(a){this.b=a
this.a=null},
bL:function bL(){this.a=0
this.c=this.b=null},
cT:function cT(a,b){this.a=a
this.b=b},
aK:function aK(a){this.a=1
this.b=a
this.c=null},
bN:function bN(){},
d2:function d2(a,b){this.a=a
this.b=b},
d_:function d_(){},
d3:function d3(a,b){this.a=a
this.b=b},
cU:function cU(){},
cV:function cV(a,b){this.a=a
this.b=b},
cW:function cW(a,b,c){this.a=a
this.b=b
this.c=c},
fj(a,b,c){return A.eD(a,new A.Z(b.i("@<0>").a0(c).i("Z<1,2>")))},
fk(a){return new A.aL(a.i("aL<0>"))},
dx(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
fD(a,b,c){var s=new A.af(a,b,c.i("af<0>"))
s.c=a.e
return s},
dr(a){var s,r
if(A.eH(a))return"{...}"
s=new A.by("")
try{r={}
$.L.push(a)
s.a+="{"
r.a=!0
a.af(0,new A.c2(r,s))
s.a+="}"}finally{if(0>=$.L.length)return A.d($.L,-1)
$.L.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
aL:function aL(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cR:function cR(a){this.a=a
this.c=this.b=null},
af:function af(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
l:function l(){},
ax:function ax(){},
c2:function c2(a,b){this.a=a
this.b=b},
aE:function aE(){},
aR:function aR(){},
f7(a,b){a=A.b(a)
a.stack=b.h(0)
throw a
throw A.b("unreachable")},
dq(a,b,c){var s,r,q
if(a>4294967295)A.dP(A.ds(a,0,4294967295,"length",null))
s=A.a(new Array(a),c.i("o<0>"))
s.$flags=1
r=s
if(a!==0)for(s=r.length,q=0;q<s;++q)r[q]=b
return r},
fl(a,b,c){var s,r,q=A.a([],c.i("o<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.bV)(a),++r)q.push(a[r])
q.$flags=1
return q},
e3(a){return new A.c_(a,A.fi(a,!1,!0,!1,!1,!1))},
fs(a,b,c){var s=J.eY(b)
if(!s.C())return a
if(c.length===0){do a+=A.q(s.gM())
while(s.C())}else{a+=A.q(s.gM())
for(;s.C();)a=a+c+A.q(s.gM())}return a},
fr(){return A.D(new Error())},
bY(a){if(typeof a=="number"||A.dD(a)||a==null)return J.b5(a)
if(typeof a=="string")return JSON.stringify(a)
return A.e2(a)},
f8(a,b){A.dH(a,"error",t.K)
A.dH(b,"stackTrace",t.l)
A.f7(a,b)},
b8(a){return new A.b7(a)},
am(a,b){return new A.B(!1,null,b,a)},
dU(a,b,c){return new A.B(!0,a,b,c)},
ds(a,b,c,d,e){return new A.aD(b,c,!0,a,d,"Invalid value")},
fo(a,b,c){if(0>a||a>c)throw A.b(A.ds(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.b(A.ds(b,a,c,"end",null))
return b}return c},
fb(a,b,c,d){return new A.bd(b,!0,a,d,"Index out of range")},
cv(a){return new A.aG(a)},
e8(a){return new A.bz(a)},
a4(a){return new A.b9(a)},
e_(a){return new A.cB(a)},
dm(a,b,c){var s,r
if(A.eH(a))return b+"..."+c
s=new A.by(b)
$.L.push(a)
try{r=s
r.a=A.fs(r.a,a,", ")}finally{if(0>=$.L.length)return A.d($.L,-1)
$.L.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
c4(a,b,c,d){var s
if(B.c===c){s=B.a.gk(a)
b=J.E(b)
return A.dw(A.Q(A.Q($.dk(),s),b))}if(B.c===d){s=B.a.gk(a)
b=J.E(b)
c=J.E(c)
return A.dw(A.Q(A.Q(A.Q($.dk(),s),b),c))}s=B.a.gk(a)
b=J.E(b)
c=J.E(c)
d=J.E(d)
d=A.dw(A.Q(A.Q(A.Q(A.Q($.dk(),s),b),c),d))
return d},
bb:function bb(a){this.a=a},
cA:function cA(){},
j:function j(){},
b7:function b7(a){this.a=a},
G:function G(){},
B:function B(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aD:function aD(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bd:function bd(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
aG:function aG(a){this.a=a},
bz:function bz(a){this.a=a},
ac:function ac(a){this.a=a},
b9:function b9(a){this.a=a},
bu:function bu(){},
aF:function aF(){},
cB:function cB(a){this.a=a},
bZ:function bZ(a,b){this.a=a
this.b=b},
p:function p(){},
e:function e(){},
bO:function bO(){},
by:function by(a){this.a=a},
N:function N(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a6:function a6(){},
a7:function a7(a,b,c,d,e,f,g){var _=this
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
fq(a,b,c,d,e,f,g,h){var s,r,q,p=self,o=p.document.createElement("canvas"),n=h*g
o.width=n
s=d*f
o.height=s
r=p.document.createElement("canvas")
r.width=n
r.height=s
s=A.a([],t.w)
for(q=0;q<d;++q){p=B.a.B(h,32)
s.push(new Uint32Array(p+1))}p=new A.bx(!0,d,h,g,f,c,a,o,r,s)
p.b1(a,b,c,d,!0,f,g,h)
return p},
du(a){return new A.z(B.a.B(a,32),31-B.a.j(a,32))},
bx:function bx(a,b,c,d,e,f,g,h,i,j){var _=this
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
c7:function c7(a){this.a=a},
c8:function c8(a){this.a=a},
c9:function c9(a){this.a=a},
ca:function ca(a){this.a=a},
c6:function c6(){},
C:function C(a){this.b=a},
ft(a,b,c){var s,r,q,p,o="white",n=null,m=A.fq("black",b,o,c*10,!0,2,2,a*8),l=A.a([],t.G)
for(s=t.U,r=0;r<c;++r){q=A.a([],s)
for(p=0;p<a;++p)q.push(new A.N(r,p," ",o))
l.push(q)}m=new A.ci(c,a,b,m,new A.a9(c,a),new A.a9(c,a),new A.a9(c,a),A.dv(t.N),A.dv(t.V),A.dv(t.q),B.d,l,A.fk(t.o),B.dE)
m.b2("black",a,b,o,n,!0,2,2,2,c,!0,n,n,n,n,n,n)
return m},
ab:function ab(a){this.b=a},
ci:function ci(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cq:function cq(a){this.a=a},
cp:function cp(){},
co:function co(a){this.a=a},
cj:function cj(a){this.a=a},
ck:function ck(a){this.a=a},
cl:function cl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cm:function cm(a,b,c){this.a=a
this.b=b
this.c=c},
cn:function cn(a){this.a=a},
da(){var s=0,r=A.hp(t.n),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$da=A.hC(function(b4,b5){if(b4===1)return A.h_(b5,r)
while(true)switch(s){case 0:b3=self.document.getElementById("index")
b3.toString
p=A.ft(60,b3,35)
p.I()
p.N()
b3=t.s
o=A.fj(["blockdude",A.a(["Block Dude is a game by Brandon Sterner and","Detached Solutions for the Texas Instruments family","of graphic display calculators. The graphics data for","this demo was pinched directly from the Z80 assembly","code for the calculator game."],b3),"bounce",A.a(["Capture the bouncing balls by enclosing them","with your trail."],b3),"emotions",A.a(["Mixed Emotions is a little twist on the classic sliding","tiles game to demonstrate mouse support for the terminal.","Click on tiles to slide them to their correct positions,","but you only get to see the correct positions by sliding","the tiles!"],b3),"four",A.a(["This is the classic game of connect-four. The computer","uses background Monte Carlo simulations to play a fairly","intelligent game."],b3),"mine",A.a(["A minesweep clone."],b3),"othello",A.a(["The game of Othello (Reversi)."],b3),"salad",A.a(["Given definitions, find the words in a grid","of letters."],b3),"snake",A.a(["Snake is version of the infamous snake game that","demonstrates non interrupting keyboard input."],b3),"sokoban",A.a(["Mother Hen is a Sokoban clone that demonstrates poking","simple sprite data into the terminal graphics memory."],b3),"wordle",A.a(["Word Logic is a Wordle clone that demonstrates a fairly","complex program running in the terminal."],b3)],t.N,t.a)
n=A.e3("^ *info +(.+) *$")
m=A.e3("^ *load +(.+) *$")
l=new A.df(p)
k=new A.db(p)
j=new A.dd(o,p)
i=new A.dc(o,p)
h=new A.de(o,p)
l.$0()
j.$0()
b3=m.b,g=n.b,f=p.y,e=p.x,d=e.b,c=f.b,b=f.a,a=p.z,a0=a.b,a1=a.a,a2=p.as,a3=A.bR(a2).i("ae<1>"),a4=p.a,a5=a4-1,a6=e.a,a7=p.b,a8=a7-4
case 3:if(!!0){s=4
break}p.by(" > ","lightgreen",!1)
if(p.ay!==B.d)A.dP(A.e_("Terminal already awaiting input."))
a9=e.c
b0=e.d
a9=B.a.j(a9,a4)
b0=B.a.j(b0,a7)
a9=B.a.j(a9,a6)
e.c=a9
e.sJ(b0)
p.ak(B.f.ap(" ",a8),!1)
e.c=a9
e.sJ(b0)
a9=e.c
if(a9===a5){p.Z()
a9=e.c=B.a.j(e.c-1,a6)}a9=a9*d+e.d
b0=B.a.j(B.a.u(a9,c),b)
f.c=b0
a9=B.a.j(a9,c)
f.d=a9
a9=b0*c+a9+a8
a.c=B.a.j(B.a.u(a9,a0),a1)
a.d=B.a.j(a9,a0)
p.ay=B.h
s=5
return A.fZ(new A.ae(a2,a3).gbr(0),$async$da)
case 5:b1=b5
b2=B.f.aX(b1)
if("reset"===b2){l.$0()
s=3
break}if("help"===b2){k.$0()
s=3
break}if("list"===b2){j.$0()
s=3
break}if(g.test(b1)){a9=n.aO(b1).b
if(1>=a9.length){q=A.d(a9,1)
s=1
break}a9=a9[1]
a9.toString
i.$1(a9)}else if(b3.test(b1)){a9=m.aO(b1).b
if(1>=a9.length){q=A.d(a9,1)
s=1
break}a9=a9[1]
a9.toString
h.$1(a9)}else{p.D()
p.E(" Not understood. Type 'help' for help.","orange")
p.D()}s=3
break
case 4:case 1:return A.h0(q,r)}})
return A.h1($async$da,r)},
df:function df(a){this.a=a},
db:function db(a){this.a=a},
dd:function dd(a,b){this.a=a
this.b=b},
dc:function dc(a,b){this.a=a
this.b=b},
de:function de(a,b){this.a=a
this.b=b},
i2(a){A.dQ(new A.aw("Field '"+a+"' has been assigned during initialization."),new Error())},
V(){A.dQ(new A.aw("Field '' has not been initialized."),new Error())},
b_(a){var s
if(typeof a=="function")throw A.b(A.am("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.h3,a)
s[$.di()]=a
return s},
eq(a){var s
if(typeof a=="function")throw A.b(A.am("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.h4,a)
s[$.di()]=a
return s},
h3(a){return a.$0()},
h4(a,b,c){if(c>=1)return a.$1(b)
return a.$0()}},B={}
var w=[A,J,B]
var $={}
A.dn.prototype={}
J.be.prototype={
t(a,b){return a===b},
gk(a){return A.aa(a)},
h(a){return"Instance of '"+A.c5(a)+"'"},
gl(a){return A.a2(A.dC(this))}}
J.bf.prototype={
h(a){return String(a)},
gk(a){return a?519018:218159},
gl(a){return A.a2(t.y)},
$if:1}
J.ar.prototype={
t(a,b){return null==b},
h(a){return"null"},
gk(a){return 0},
$if:1,
$ip:1}
J.at.prototype={$ik:1}
J.P.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.bv.prototype={}
J.a_.prototype={}
J.O.prototype={
h(a){var s=a[$.di()]
if(s==null)return this.b0(a)
return"JavaScript function for "+J.b5(s)}}
J.as.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.au.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.o.prototype={
aK(a,b){a.$flags&1&&A.b4(a,"addAll",2)
this.b6(a,b)
return},
b6(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw A.b(A.a4(a))
for(s=0;s<r;++s)a.push(b[s])},
bw(a,b){var s,r,q=a.length,p=A.dq(q,"",t.N)
for(s=0;s<a.length;++s){r=A.q(a[s])
if(!(s<q))return A.d(p,s)
p[s]=r}return p.join(b)},
bs(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw A.b(A.a4(a))}return s},
bt(a,b,c){return this.bs(a,b,c,t.z)},
h(a){return A.dm(a,"[","]")},
gaj(a){return new J.b6(a,a.length,A.dB(a).i("b6<1>"))},
gk(a){return A.aa(a)},
gm(a){return a.length},
$ih:1}
J.c0.prototype={}
J.b6.prototype={
gM(){var s=this.d
return s==null?this.$ti.c.a(s):s},
C(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.b(A.bV(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.a5.prototype={
bG(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.b(A.cv(""+a+".toInt()"))},
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
u(a,b){if((a|0)===a)if(b>=1)return a/b|0
return this.aG(a,b)},
B(a,b){return(a|0)===a?a/b|0:this.aG(a,b)},
aG(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.cv("Result of truncating division is "+A.q(s)+": "+A.q(a)+" ~/ "+b))},
O(a,b){if(b<0)throw A.b(A.dG(b))
return b>31?0:a<<b>>>0},
bn(a,b){return b>31?0:a<<b>>>0},
aZ(a,b){var s
if(b<0)throw A.b(A.dG(b))
if(a>0)s=this.ab(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
bo(a,b){var s
if(a>0)s=this.ab(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
A(a,b){if(0>b)throw A.b(A.dG(b))
return this.ab(a,b)},
ab(a,b){return b>31?0:a>>>b},
gl(a){return A.a2(t.H)},
$ir:1}
J.aq.prototype={
gl(a){return A.a2(t.S)},
$if:1,
$ic:1}
J.bg.prototype={
gl(a){return A.a2(t.i)},
$if:1}
J.Y.prototype={
b_(a,b,c){return a.substring(b,A.fo(b,c,a.length))},
aX(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.d(p,0)
if(p.charCodeAt(0)===133){s=J.fg(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.d(p,r)
q=p.charCodeAt(r)===133?J.fh(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
ap(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.v)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
bz(a,b,c){var s=b-a.length
if(s<=0)return a
return this.ap(c,s)+a},
h(a){return a},
gk(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gl(a){return A.a2(t.N)},
gm(a){return a.length},
$if:1,
$iw:1}
A.aw.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.dh.prototype={
$0(){var s=new A.m($.i,t.D)
s.a_(null)
return s},
$S:9}
A.cb.prototype={}
A.bj.prototype={
gM(){var s=this.d
return s==null?this.$ti.c.a(s):s},
C(){var s,r=this,q=r.a,p=J.eE(q),o=p.gm(q)
if(r.b!==o)throw A.b(A.a4(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.n(q,s);++r.c
return!0}}
A.ap.prototype={}
A.z.prototype={$r:"+(1,2)",$s:1}
A.ba.prototype={
h(a){return A.dr(this)}}
A.bc.prototype={
U(){var s=this,r=s.$map
if(r==null){r=new A.av(s.$ti.i("av<1,2>"))
A.eD(s.a,r)
s.$map=r}return r},
L(a){return this.U().L(a)},
n(a,b){return this.U().n(0,b)},
af(a,b){this.U().af(0,b)},
gm(a){return this.U().a}}
A.cs.prototype={
q(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.aC.prototype={
h(a){return"Null check operator used on a null value"}}
A.bh.prototype={
h(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.bA.prototype={
h(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.c3.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.ao.prototype={}
A.aS.prototype={
h(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iy:1}
A.X.prototype={
h(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.eK(r==null?"unknown":r)+"'"},
gbH(){return this},
$C:"$1",
$R:1,
$D:null}
A.bW.prototype={$C:"$0",$R:0}
A.bX.prototype={$C:"$2",$R:2}
A.ch.prototype={}
A.cc.prototype={
h(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.eK(s)+"'"}}
A.an.prototype={
t(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.an))return!1
return this.$_target===b.$_target&&this.a===b.a},
gk(a){return(A.dN(this.a)^A.aa(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.c5(this.a)+"'")}}
A.bG.prototype={
h(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.bw.prototype={
h(a){return"RuntimeError: "+this.a}}
A.Z.prototype={
gm(a){return this.a},
L(a){var s=this.b
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
return q}else return this.bv(b)},
bv(a){var s,r,q=this.d
if(q==null)return null
s=q[this.ag(a)]
r=this.ah(s,a)
if(r<0)return null
return s[r].b},
af(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw A.b(A.a4(s))
r=r.c}},
R(a,b){var s=this,r=new A.c1(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&1073741823
return r},
ag(a){return J.E(a)&1073741823},
ah(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.al(a[r].a,b))return r
return-1},
h(a){return A.dr(this)}}
A.c1.prototype={}
A.bi.prototype={
C(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.a4(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
A.av.prototype={
ag(a){return A.hJ(a)&1073741823},
ah(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.al(a[r].a,b))return r
return-1}}
A.d6.prototype={
$1(a){return this.a(a)},
$S:10}
A.d7.prototype={
$2(a,b){return this.a(a,b)},
$S:11}
A.d8.prototype={
$1(a){return this.a(a)},
$S:12}
A.ag.prototype={
h(a){return this.aI(!1)},
aI(a){var s,r,q,p,o,n=this.be(),m=this.aB(),l=(a?""+"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.d(m,q)
o=m[q]
l=a?l+A.e2(o):l+A.q(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
be(){var s,r=this.$s
for(;$.aQ.length<=r;)$.aQ.push(null)
s=$.aQ[r]
if(s==null){s=this.bd()
if(!(r<$.aQ.length))return A.d($.aQ,r)
$.aQ[r]=s}return s},
bd(){var s,r,q,p,o,n=this.$r,m=n.indexOf("("),l=n.substring(1,m),k=n.substring(m),j=k==="()"?0:k.replace(/[^,]/g,"").length+1,i=A.a(new Array(j),t.f)
for(s=0;s<j;++s)i[s]=s
if(l!==""){r=l.split(",")
s=r.length
for(q=i.length,p=j;s>0;){--p;--s
o=r[s]
if(!(p>=0&&p<q))return A.d(i,p)
i[p]=o}}i=A.fl(i,!1,t.K)
i.$flags=3
return i}}
A.bM.prototype={
aB(){return[this.a,this.b]},
t(a,b){if(b==null)return!1
return b instanceof A.bM&&this.$s===b.$s&&J.al(this.a,b.a)&&J.al(this.b,b.b)},
gk(a){return A.c4(this.$s,this.a,this.b,B.c)}}
A.c_.prototype={
h(a){return"RegExp/"+this.a+"/"+this.b.flags},
aO(a){var s=this.b.exec(a)
if(s==null)return null
return new A.cS(s)}}
A.cS.prototype={}
A.bk.prototype={
gl(a){return B.dN},
$if:1}
A.aA.prototype={}
A.bl.prototype={
gl(a){return B.dO},
$if:1}
A.a8.prototype={
gm(a){return a.length},
$iv:1}
A.ay.prototype={
n(a,b){A.a1(b,a,a.length)
return a[b]},
$ih:1}
A.az.prototype={$ih:1}
A.bm.prototype={
gl(a){return B.dP},
$if:1}
A.bn.prototype={
gl(a){return B.dQ},
$if:1}
A.bo.prototype={
gl(a){return B.dR},
n(a,b){A.a1(b,a,a.length)
return a[b]},
$if:1}
A.bp.prototype={
gl(a){return B.dS},
n(a,b){A.a1(b,a,a.length)
return a[b]},
$if:1}
A.bq.prototype={
gl(a){return B.dT},
n(a,b){A.a1(b,a,a.length)
return a[b]},
$if:1}
A.br.prototype={
gl(a){return B.dV},
n(a,b){A.a1(b,a,a.length)
return a[b]},
$if:1}
A.bs.prototype={
gl(a){return B.dW},
n(a,b){A.a1(b,a,a.length)
return a[b]},
$if:1,
$icu:1}
A.aB.prototype={
gl(a){return B.dX},
gm(a){return a.length},
n(a,b){A.a1(b,a,a.length)
return a[b]},
$if:1}
A.bt.prototype={
gl(a){return B.dY},
gm(a){return a.length},
n(a,b){A.a1(b,a,a.length)
return a[b]},
$if:1}
A.aM.prototype={}
A.aN.prototype={}
A.aO.prototype={}
A.aP.prototype={}
A.x.prototype={
i(a){return A.aZ(v.typeUniverse,this,a)},
a0(a){return A.ek(v.typeUniverse,this,a)}}
A.bK.prototype={}
A.bP.prototype={
h(a){return A.u(this.a,null)}}
A.bJ.prototype={
h(a){return this.a}}
A.aV.prototype={$iG:1}
A.cx.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:2}
A.cw.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:13}
A.cy.prototype={
$0(){this.a.$0()},
$S:1}
A.cz.prototype={
$0(){this.a.$0()},
$S:1}
A.aU.prototype={
b3(a,b){if(self.setTimeout!=null)self.setTimeout(A.bU(new A.cY(this,b),0),a)
else throw A.b(A.cv("`setTimeout()` not found."))},
b4(a,b){if(self.setTimeout!=null)self.setInterval(A.bU(new A.cX(this,a,Date.now(),b),0),a)
else throw A.b(A.cv("Periodic timer."))},
$icr:1}
A.cY.prototype={
$0(){this.a.c=1
this.b.$0()},
$S:0}
A.cX.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.a.u(s,o)}q.c=p
r.d.$1(q)},
$S:1}
A.bB.prototype={}
A.d0.prototype={
$1(a){return this.a.$2(0,a)},
$S:4}
A.d1.prototype={
$2(a,b){this.a.$2(1,new A.ao(a,b))},
$S:14}
A.d4.prototype={
$2(a,b){this.a(a,b)},
$S:15}
A.W.prototype={
h(a){return A.q(this.a)},
$ij:1,
gP(){return this.b}}
A.ae.prototype={}
A.aI.prototype={
a8(){},
a9(){}}
A.bD.prototype={
gbg(){return this.c<4},
bl(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
bp(a,b,c,d){var s,r,q,p,o,n=this
if((n.c&4)!==0){s=new A.aK($.i)
A.dO(s.gbh())
s.c=c
return s}s=$.i
r=d?1:0
q=A.e9(s,a)
A.fC(s,b)
p=new A.aI(n,q,s,r|32,A.bR(n).i("aI<1>"))
p.CW=p
p.ch=p
p.ay=n.c&1
o=n.e
n.e=p
p.ch=null
p.CW=o
if(o==null)n.d=p
else o.ch=p
if(n.d===p)A.ex(n.a)
return p},
bk(a){var s,r=this
A.bR(r).i("aI<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.bl(a)
if((r.c&2)===0&&r.d==null)r.ba()}return null},
b7(){if((this.c&4)!==0)return new A.ac("Cannot add new events after calling close")
return new A.ac("Cannot add new events while doing an addStream")},
H(a,b){if(!this.gbg())throw A.b(this.b7())
this.aa(b)},
ba(){if((this.c&4)!==0)if(null.gbI())null.a_(null)
A.ex(this.b)}}
A.aH.prototype={
aa(a){var s
for(s=this.d;s!=null;s=s.ch)s.b8(new A.bH(a))}}
A.R.prototype={
bx(a){if((this.c&15)!==6)return!0
return this.b.b.am(this.d,a.a)},
bu(a){var s,r=this.e,q=null,p=a.a,o=this.b.b
if(t.C.b(r))q=o.bC(r,p,a.b)
else q=o.am(r,p)
try{p=q
return p}catch(s){if(t.c.b(A.M(s))){if((this.c&1)!==0)throw A.b(A.am("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.b(A.am("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.m.prototype={
an(a,b,c){var s,r=$.i
if(r===B.b){if(!t.C.b(b)&&!t.v.b(b))throw A.b(A.dU(b,"onError",u.c))}else b=A.hu(b,r)
s=new A.m(r,c.i("m<0>"))
this.S(new A.R(s,3,a,b,this.$ti.i("@<1>").a0(c).i("R<1,2>")))
return s},
aH(a,b,c){var s=new A.m($.i,c.i("m<0>"))
this.S(new A.R(s,19,a,b,this.$ti.i("@<1>").a0(c).i("R<1,2>")))
return s},
bm(a){this.a=this.a&1|16
this.c=a},
T(a){this.a=a.a&30|this.a&1
this.c=a.c},
S(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.S(a)
return}s.T(r)}A.ai(null,null,s.b,new A.cC(s,a))}},
aF(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.aF(a)
return}n.T(s)}m.a=n.V(a)
A.ai(null,null,n.b,new A.cK(m,n))}},
K(){var s=this.c
this.c=null
return this.V(s)},
V(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
av(a){var s,r,q,p=this
p.a^=2
try{a.an(new A.cH(p),new A.cI(p),t.P)}catch(q){s=A.M(q)
r=A.D(q)
A.dO(new A.cJ(p,s,r))}},
a2(a){var s,r=this,q=r.$ti
if(q.i("F<1>").b(a))if(q.b(a))A.cF(a,r,!0)
else r.av(a)
else{s=r.K()
r.a=8
r.c=a
A.a0(r,s)}},
a3(a){var s=this,r=s.K()
s.a=8
s.c=a
A.a0(s,r)},
bc(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.K()
q.T(a)
A.a0(q,r)},
v(a,b){var s=this.K()
this.bm(new A.W(a,b))
A.a0(this,s)},
a_(a){if(this.$ti.i("F<1>").b(a)){this.aw(a)
return}this.b9(a)},
b9(a){this.a^=2
A.ai(null,null,this.b,new A.cE(this,a))},
aw(a){if(this.$ti.b(a)){A.cF(a,this,!1)
return}this.av(a)},
au(a,b){this.a^=2
A.ai(null,null,this.b,new A.cD(this,a,b))},
$iF:1}
A.cC.prototype={
$0(){A.a0(this.a,this.b)},
$S:0}
A.cK.prototype={
$0(){A.a0(this.b,this.a.a)},
$S:0}
A.cH.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.a3(p.$ti.c.a(a))}catch(q){s=A.M(q)
r=A.D(q)
p.v(s,r)}},
$S:2}
A.cI.prototype={
$2(a,b){this.a.v(a,b)},
$S:6}
A.cJ.prototype={
$0(){this.a.v(this.b,this.c)},
$S:0}
A.cG.prototype={
$0(){A.cF(this.a.a,this.b,!0)},
$S:0}
A.cE.prototype={
$0(){this.a.a3(this.b)},
$S:0}
A.cD.prototype={
$0(){this.a.v(this.b,this.c)},
$S:0}
A.cN.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.aU(q.d)}catch(p){s=A.M(p)
r=A.D(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.dl(q)
n=k.a
n.c=new A.W(q,o)
q=n}q.b=!0
return}if(j instanceof A.m&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.m){m=k.b.a
l=new A.m(m.b,m.$ti)
j.an(new A.cO(l,m),new A.cP(l),t.n)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.cO.prototype={
$1(a){this.a.bc(this.b)},
$S:2}
A.cP.prototype={
$2(a,b){this.a.v(a,b)},
$S:6}
A.cM.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
q.c=p.b.b.am(p.d,this.b)}catch(o){s=A.M(o)
r=A.D(o)
q=s
p=r
if(p==null)p=A.dl(q)
n=this.a
n.c=new A.W(q,p)
n.b=!0}},
$S:0}
A.cL.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.bx(s)&&p.a.e!=null){p.c=p.a.bu(s)
p.b=!1}}catch(o){r=A.M(o)
q=A.D(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.dl(p)
m=l.b
m.c=new A.W(p,n)
p=m}p.b=!0}},
$S:0}
A.bC.prototype={}
A.ad.prototype={
gm(a){var s={},r=new A.m($.i,t.h)
s.a=0
this.aP(new A.cf(s,this),!0,new A.cg(s,r),r.gaz())
return r},
gbr(a){var s=new A.m($.i,this.$ti.i("m<1>")),r=this.aP(null,!0,new A.cd(s),s.gaz())
r.aQ(new A.ce(this,r,s))
return s}}
A.cf.prototype={
$1(a){++this.a.a},
$S(){return this.b.$ti.i("~(1)")}}
A.cg.prototype={
$0(){this.b.a2(this.a.a)},
$S:0}
A.cd.prototype={
$0(){var s,r,q,p,o
try{q=A.ff()
throw A.b(q)}catch(p){s=A.M(p)
r=A.D(p)
q=s
o=r
A.he(q,o)
this.a.v(q,o)}},
$S:0}
A.ce.prototype={
$1(a){A.h5(this.b,this.c,a)},
$S(){return this.a.$ti.i("~(1)")}}
A.aJ.prototype={
gk(a){return(A.aa(this.a)^892482866)>>>0},
t(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.ae&&b.a===this.a}}
A.bF.prototype={
aE(){return this.w.bk(this)},
a8(){},
a9(){}}
A.bE.prototype={
aQ(a){this.a=A.e9(this.d,a)},
aM(){var s,r=this,q=r.e&=4294967279
if((q&8)===0){q=r.e=q|8
if((q&128)!==0){s=r.r
if(s.a===1)s.a=3}if((q&64)===0)r.r=null
r.f=r.aE()}q=$.dj()
return q},
a8(){},
a9(){},
aE(){return null},
b8(a){var s,r,q=this,p=q.r
if(p==null)p=q.r=new A.bL()
s=p.c
if(s==null)p.b=p.c=a
else p.c=s.a=a
r=q.e
if((r&128)===0){r|=128
q.e=r
if(r<256)p.aq(q)}},
aa(a){var s=this,r=s.e
s.e=r|64
s.d.aW(s.a,a)
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
p=q.e&=4294967231}if((p&128)!==0&&p<256)q.r.aq(q)}}
A.aT.prototype={
aP(a,b,c,d){return this.a.bp(a,d,c,!0)}}
A.bI.prototype={}
A.bH.prototype={}
A.bL.prototype={
aq(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.dO(new A.cT(s,a))
s.a=1}}
A.cT.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.a
q.b=r
if(r==null)q.c=null
this.b.aa(s.b)},
$S:0}
A.aK.prototype={
aQ(a){},
aM(){this.a=-1
this.c=null
return $.dj()},
bi(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.aV(s)}}else r.a=q}}
A.bN.prototype={}
A.d2.prototype={
$0(){return this.a.a2(this.b)},
$S:0}
A.d_.prototype={}
A.d3.prototype={
$0(){A.f8(this.a,this.b)},
$S:0}
A.cU.prototype={
aV(a){var s,r,q
try{if(B.b===$.i){a.$0()
return}A.eu(null,null,this,a)}catch(q){s=A.M(q)
r=A.D(q)
A.bT(s,r)}},
bF(a,b){var s,r,q
try{if(B.b===$.i){a.$1(b)
return}A.ev(null,null,this,a,b)}catch(q){s=A.M(q)
r=A.D(q)
A.bT(s,r)}},
aW(a,b){return this.bF(a,b,t.z)},
aL(a){return new A.cV(this,a)},
bq(a,b){return new A.cW(this,a,b)},
bB(a){if($.i===B.b)return a.$0()
return A.eu(null,null,this,a)},
aU(a){return this.bB(a,t.z)},
bE(a,b){if($.i===B.b)return a.$1(b)
return A.ev(null,null,this,a,b)},
am(a,b){var s=t.z
return this.bE(a,b,s,s)},
bD(a,b,c){if($.i===B.b)return a.$2(b,c)
return A.hv(null,null,this,a,b,c)},
bC(a,b,c){var s=t.z
return this.bD(a,b,c,s,s,s)},
bA(a){return a},
al(a){var s=t.z
return this.bA(a,s,s,s)}}
A.cV.prototype={
$0(){return this.a.aV(this.b)},
$S:0}
A.cW.prototype={
$1(a){return this.a.aW(this.b,a)},
$S(){return this.c.i("~(0)")}}
A.aL.prototype={
gaj(a){var s=this,r=new A.af(s,s.r,s.$ti.i("af<1>"))
r.c=s.e
return r},
gm(a){return this.a},
H(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.ar(s==null?q.b=A.dx():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.ar(r==null?q.c=A.dx():r,b)}else return q.b5(b)},
b5(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.dx()
s=J.E(a)&1073741823
r=p[s]
if(r==null)p[s]=[q.a7(a)]
else{if(q.bf(r,a)>=0)return!1
r.push(q.a7(a))}return!0},
ar(a,b){if(a[b]!=null)return!1
a[b]=this.a7(b)
return!0},
aD(){this.r=this.r+1&1073741823},
a7(a){var s,r=this,q=new A.cR(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.aD()
return q},
bf(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.al(a[r].a,b))return r
return-1}}
A.cR.prototype={}
A.af.prototype={
gM(){var s=this.d
return s==null?this.$ti.c.a(s):s},
C(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.b(A.a4(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.l.prototype={
gaj(a){return new A.bj(a,this.gm(a),A.b2(a).i("bj<l.E>"))},
h(a){return A.dm(a,"[","]")}}
A.ax.prototype={
gm(a){return this.a},
h(a){return A.dr(this)}}
A.c2.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.q(a)
s=r.a+=s
r.a=s+": "
s=A.q(b)
r.a+=s},
$S:16}
A.aE.prototype={
h(a){return A.dm(this,"{","}")}}
A.aR.prototype={}
A.bb.prototype={
t(a,b){if(b==null)return!1
return b instanceof A.bb&&this.a===b.a},
gk(a){return B.a.gk(this.a)},
h(a){var s,r,q,p,o=this.a,n=B.a.B(o,36e8)
o%=36e8
s=B.a.B(o,6e7)
o%=6e7
r=s<10?"0":""
q=B.a.B(o,1e6)
p=q<10?"0":""
return""+n+":"+r+s+":"+p+q+"."+B.f.bz(B.a.h(o%1e6),6,"0")}}
A.cA.prototype={
h(a){return this.aA()}}
A.j.prototype={
gP(){return A.fn(this)}}
A.b7.prototype={
h(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.bY(s)
return"Assertion failed"}}
A.G.prototype={}
A.B.prototype={
ga6(){return"Invalid argument"+(!this.a?"(s)":"")},
ga5(){return""},
h(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.ga6()+q+o
if(!s.a)return n
return n+s.ga5()+": "+A.bY(s.gai())},
gai(){return this.b}}
A.aD.prototype={
gai(){return this.b},
ga6(){return"RangeError"},
ga5(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.q(q):""
else if(q==null)s=": Not greater than or equal to "+A.q(r)
else if(q>r)s=": Not in inclusive range "+A.q(r)+".."+A.q(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.q(r)
return s}}
A.bd.prototype={
gai(){return this.b},
ga6(){return"RangeError"},
ga5(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gm(a){return this.f}}
A.aG.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.bz.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.ac.prototype={
h(a){return"Bad state: "+this.a}}
A.b9.prototype={
h(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.bY(s)+"."}}
A.bu.prototype={
h(a){return"Out of Memory"},
gP(){return null},
$ij:1}
A.aF.prototype={
h(a){return"Stack Overflow"},
gP(){return null},
$ij:1}
A.cB.prototype={
h(a){return"Exception: "+this.a}}
A.bZ.prototype={
h(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=B.f.b_(q,0,75)+"..."
return r+"\n"+q}}
A.p.prototype={
gk(a){return A.e.prototype.gk.call(this,0)},
h(a){return"null"}}
A.e.prototype={$ie:1,
t(a,b){return this===b},
gk(a){return A.aa(this)},
h(a){return"Instance of '"+A.c5(this)+"'"},
gl(a){return A.hR(this)},
toString(){return this.h(this)}}
A.bO.prototype={
h(a){return""},
$iy:1}
A.by.prototype={
gm(a){return this.a.length},
h(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.N.prototype={
gk(a){var s=this.a,r=this.b
return A.c4(new A.z(s,r).$s,s,r,B.c)},
t(a,b){var s,r,q,p
if(b==null)return!1
if(b instanceof A.N){s=b.a
r=b.b
q=this.a
p=this.b
p=A.c4(new A.z(s,r).$s,s,r,B.c)===A.c4(new A.z(q,p).$s,q,p,B.c)
s=p}else s=!1
return s},
h(a){var s=this
return"("+s.a+" "+s.b+") => '"+s.c+"' "+s.d}}
A.a6.prototype={}
A.a7.prototype={
h(a){var s=this
return"               row: "+s.a+"\n            column: "+s.b+"\n         character: '"+s.c+"'\n    characterColor: "+s.d+"\n\n          pixelRow: "+s.e+"\n       pixelColumn: "+s.f+"\n         pixelIsOn: "+s.r+"\n    "}}
A.a9.prototype={
sJ(a){var s,r,q,p=this
if(a<0){s=p.d=a
for(r=p.b,q=p.a;s<0;){s+=r
p.d=s
p.c=B.a.j(p.c-1,q)}}else{s=p.b
p.c=B.a.j(p.c+B.a.u(a,s),p.a)
p.d=B.a.j(a,s)}},
gp(){return this.c*this.b+this.d},
sp(a){var s=this,r=s.b
s.c=B.a.j(B.a.u(a,r),s.a)
s.d=B.a.j(a,r)}}
A.bx.prototype={
b1(a,b,c,d,e,f,g,h){var s,r=this,q=self.document
q.onfocus=A.b_(new A.c7(r))
q.onblur=A.b_(new A.c8(r))
q=r.w
q.tabIndex=-1
q.style.display="block"
q.style.outline="none"
s=q.getContext("2d")
if(s==null)s=t.m.a(s)
s.imageSmoothingEnabled=!1
q.onfocus=A.b_(new A.c9(r))
q.onblur=A.b_(new A.ca(r))
b.style.display="flex"
b.style.alignItems="flex-start"
b.style.padding="0"
b.style.margin="0"
b.style.width="fit-content"
b.style.height="fit-content"
b.style.background="gray"
b.appendChild(q)
r.X(0)},
W(a,b){return new A.z(B.a.j(a,this.b),B.a.j(b,this.c))},
a1(){var s=this.x,r=s.getContext("2d")
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
F(a,b,c,d){var s,r,q,p,o,n,m=this,l=a<0||a>=m.b||b<0||b>=m.c
if(l)return
s=m.W(a,b)
a=s.a
b=s.b
r=A.du(b)
q=r.a
p=B.a.O(1,r.b)
l=m.y
if(!(a>=0&&a<l.length))return A.d(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.d(l,q)
o=l[q]
l.$flags&2&&A.b4(l)
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
s=m.W(a,b)
a=s.a
b=s.b
r=A.du(b)
q=r.a
p=B.a.O(1,r.b)
l=m.y
if(!(a>=0&&a<l.length))return A.d(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.d(l,q)
o=l[q]
l.$flags&2&&A.b4(l)
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
aS(a,b){var s,r,q,p,o=this.W(b,a)
b=o.a
s=A.du(o.b)
r=s.a
q=B.a.O(1,s.b)
p=this.y
if(!(b>=0&&b<p.length))return A.d(p,b)
p=p[b]
if(!(r>=0&&r<p.length))return A.d(p,r)
return(p[r]&q)>>>0>0},
aN(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=this
if(e==null)e=k.c-c
if(b==null)b=k.b-d
k.a1()
if(c===0&&d===0&&e===k.c&&b===k.b){for(s=k.y,r=s.length,q=0;q<r;++q)for(p=0;o=s[q],p<o.length;++p){o.$flags&2&&A.b4(o)
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
for(p=c;p<m;++p)k.F(l,B.a.j(p,r),o,!1)}}k.a4()},
X(a){return this.aN(0,null,0,0,null)},
bj(a,b,c,d,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.a1()
s=e.W(a,b)
a=s.a
b=s.b
r=B.a.bn(1,a0)-1
for(q=a0-1,p=t.t,o=e.x,n=0;n<8;++n){m=c[n]
l=m&r
m=A.a([],p)
for(k=a+n,j=0;j<a0;++j){i=e.aS(b+j,k)?1:0
m.push(B.a.O(i,q-j))}h=B.e.bt(m,0,new A.c6())
switch(a1){case B.l:for(j=0;j<a0;++j){m=b+j
if((B.a.A(l,q-j)&1)>0)e.G(k,m,d,o,!1)
else e.F(k,m,o,!1)}break
case B.dF:for(j=0;j<a0;++j){m=b+j
if((B.a.A(l,q-j)&1)>0)e.F(k,m,o,!1)
else e.G(k,m,d,o,!1)}break
case B.dH:for(j=0;j<a0;++j){g=q-j
if((B.a.A(l,g)&1)>0&&(B.a.aZ(h,g)&1)===0)e.G(k,b+j,d,o,!1)}break
case B.dG:for(j=0;j<a0;++j)if((B.a.A(l,q-j)&1)>0)e.G(k,b+j,d,o,!1)
break
case B.dI:for(f=l&h,j=0;j<a0;++j)if((B.a.A(f,q-j)&1)>0)e.G(k,b+j,d,o,!1)
break
case B.dJ:for(f=l&h,j=0;j<a0;++j)if((B.a.A(f,q-j)&1)>0)e.F(k,b+j,o,!1)
break
case B.dK:for(f=l&h,j=0;j<a0;++j)if((B.a.A(f,q-j)&1)===0)e.F(k,b+j,o,!1)
break
case B.dL:for(f=l&h,j=0;j<a0;++j){m=b+j
if((B.a.A(f,q-j)&1)===0)e.F(k,m,o,!1)
else e.G(k,m,d,o,!1)}break}}e.a4()},
aT(a,b,c){this.bj(c.a,c.b,b,a,8,B.l,!0,!1,!1)},
aY(a){var s,r,q,p,o,n,m,l,k=this,j=k.b
a=B.a.j(a,j)
for(s=j-a,r=k.y,q=r.length,p=0;p<s;++p){if(!(p<q))return A.d(r,p)
o=p+a
n=0
for(;m=r[p],n<m.length;++n){if(!(o<q))return A.d(r,o)
l=r[o]
if(!(n<l.length))return A.d(l,n)
l=l[n]
m.$flags&2&&A.b4(m)
m[n]=l}}for(;p<j;++p){if(!(p<q))return A.d(r,p)
n=0
for(;o=r[p],n<o.length;++n){o.$flags&2&&A.b4(o)
o[n]=0}}k.a1()
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
N(){var s=this.w
s.style.opacity="1.0"
s.focus()},
I(){var s=this.w
s.style.opacity="0.5"
s.blur()}}
A.c7.prototype={
$0(){this.a.z=!0},
$S:1}
A.c8.prototype={
$0(){this.a.z=!1},
$S:1}
A.c9.prototype={
$0(){this.a.N()},
$S:1}
A.ca.prototype={
$0(){this.a.I()},
$S:1}
A.c6.prototype={
$2(a,b){return(a|b)>>>0},
$S:17}
A.C.prototype={
aA(){return"Mode."+this.b}}
A.ab.prototype={
aA(){return"State."+this.b}}
A.ci.prototype={
b2(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=this,r=s.f
r.tabIndex=-1
r.onfocus=A.b_(new A.cj(s))
r.onblur=A.b_(new A.ck(s))
r.onkeydown=A.eq(new A.cl(s,l,new A.cp(),new A.co(s)))
r.onclick=A.eq(new A.cm(s,new A.cq(s),o))
A.fu(new A.bb(3e5),new A.cn(s))
s.I()
s.X(0)},
gae(){var s=this.w
s===$&&A.V()
return s.gae()},
gad(){var s=this.w
s===$&&A.V()
return s.gad()},
ac(a,b){return new A.z(B.a.j(a,this.a),B.a.j(b,this.b))},
aC(){var s=this,r=s.x
s.CW.H(0,new A.N(r.c,r.d," ","white"))
s.aJ()
s.cy=!1},
aJ(){var s,r,q,p,o,n,m,l,k,j
for(s=this.CW,r=A.fD(s,s.r,s.$ti.c),q=this.w,p=this.cx,o=r.$ti.c;r.C();){n=r.d
if(n==null)n=o.a(n)
m=n.a
l=n.b
if(p.L(n.c)){k=p.n(0,n.c)
k.toString
j=k}else j=$.eM()
q===$&&A.V()
q.aT(n.d,j,new A.z(m*10,l*8))}if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.aD()}},
ao(a,b){var s,r=this.ac(b,a)
b=r.a
a=r.b
s=this.ch
if(!(b>=0&&b<s.length))return A.d(s,b)
s=s[b]
if(!(a>=0&&a<s.length))return A.d(s,a)
return s[a].c},
D(){var s,r=this.x
r.sJ(0)
s=r.c
if(s===this.a-1)this.Z()
else r.c=B.a.j(s+1,r.a)},
Z(){var s,r,q,p,o,n,m,l,k=this
for(s=k.a-1,r=k.b,q=k.ch,p=0;p<s;p=o)for(o=p+1,n=0;n<r;++n){m=q.length
if(!(p<m))return A.d(q,p)
l=q[p]
if(!(n<l.length))return A.d(l,n)
l=l[n]
if(!(o<m))return A.d(q,o)
m=q[o]
if(!(n<m.length))return A.d(m,n)
m=m[n]
l.c=m.c
l.d=m.d}for(n=0;n<r;++n){if(!(s>=0&&s<q.length))return A.d(q,s)
m=q[s]
if(!(n<m.length))return A.d(m,n)
m=m[n]
m.c=" "
m.d="white"}s=k.w
s===$&&A.V()
s.aY(10)},
Y(a,b,c,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a1==null?f.x.c:a1,d=f.ac(e,c==null?f.x.d:c)
e=f.x
s=e.a
e.c=B.a.j(d.a,s)
e.sJ(d.b)
if(b==null)b="white"
for(r=a.split(""),q=r.length,p=f.ch,o=f.CW,n=f.a-1,m=f.b-1,l=0;l<q;++l){k=r[l]
j=e.c
i=e.d
if(!(j>=0&&j<p.length))return A.d(p,j)
h=p[j]
if(!(i>=0&&i<h.length))return A.d(h,i)
g=h[i]
g.c=k
g.d=b
o.H(0,g)
if(j===n&&i===m){f.Z()
e.c=B.a.j(e.c-1,s)}e.sJ(e.d+1)}f.aJ()
if(a0)f.D()},
by(a,b,c){return this.Y(a,b,null,c,null)},
ak(a,b){return this.Y(a,null,null,b,null)},
E(a,b){return this.Y(a,b,null,!0,null)},
aR(a){return this.Y(a,null,null,!0,null)},
X(a){var s,r,q,p,o=this,n=o.b,m=o.a
for(s=o.ch,r=0;r<m;++r)for(q=0;q<n;++q){if(!(r<s.length))return A.d(s,r)
p=s[r]
if(!(q<p.length))return A.d(p,q)
p=p[q]
p.c=" "
p.d="white"}s=o.w
s===$&&A.V()
s.aN(0,m*10,0,0,n*8)
s=o.x
s.c=0%s.a
s.sJ(0)},
N(){return this.gae().$0()},
I(){return this.gad().$0()}}
A.cq.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.w
i===$&&A.V()
s=J.dT(a.offsetX)
r=Math.max(Math.min(B.a.u(J.dT(a.offsetY)-1,i.e),i.b-1),0)
q=Math.max(Math.min(B.a.u(s-1,i.d),i.c-1),0)
p=B.a.B(r,10)
o=B.a.B(q,8)
n=j.ao(o,p)
m=j.ac(p,o)
l=m.a
k=m.b
j=j.ch
if(!(l>=0&&l<j.length))return A.d(j,l)
j=j[l]
if(!(k>=0&&k<j.length))return A.d(j,k)
return new A.a7(p,o,n,j[k].d,r,q,i.aS(q,r))},
$S:18}
A.cp.prototype={
$1(a){return new A.a6()},
$S:19}
A.co.prototype={
$0(){var s,r,q,p,o,n=this.a,m=n.a,l=n.b,k=new A.a9(m,l)
k.sp(n.y.gp())
s=A.a([],t.s)
r=n.z
q=r.b
while(p=k.c,o=k.d,p*l+o<r.c*q+r.d){s.push(n.ao(o,p))
p=k.c*l+k.d+1
k.c=B.a.j(B.a.u(p,l),m)
k.d=B.a.j(p,l)}return B.e.bw(s,"")},
$S:20}
A.cj.prototype={
$0(){var s=this.a.w
s===$&&A.V()
s.N()},
$S:1}
A.ck.prototype={
$0(){var s=this.a.w
s===$&&A.V()
s.I()},
$S:1}
A.cl.prototype={
$1(a){var s,r,q,p
a.preventDefault()
s=this.a
switch(s.ay){case B.d:break
case B.dM:r=s.at
if(r.d!=null){r.H(0,this.c.$1(a))
s.ay=B.d}break
case B.h:s.aC()
$label0$1:{q=a.keyCode
if(13===q){r=s.as
if(r.d!=null){r.H(0,J.f_(this.d.$0()))
s.D()
s.ay=B.d}break $label0$1}if(8===q){r=s.x
if(r.gp()>s.y.gp()){r.sp(r.gp()-1)
s.ak(" ",!1)
r.sp(r.gp()-1)}break $label0$1}p=a.key
if(p.length===1&&s.x.gp()<s.z.gp())s.ak(p,!1)}break
case B.n:break}},
$S:7}
A.cm.prototype={
$1(a){var s
a.preventDefault()
s=this.a
if(s.ay===B.n&&s.ax.d!=null){s.ax.H(0,this.b.$1(a))
s.ay=B.d}},
$S:7}
A.cn.prototype={
$1(a){var s,r,q,p=this.a,o=p.w
o===$&&A.V()
if(o.z&&J.al(self.document.activeElement,o.w)&&p.ay===B.h)if(p.cy)p.aC()
else{s=p.x
r=s.c
s=s.d
q=$.eL()
o.aT("white",q,new A.z(r*10,s*8))
p.cy=!0}},
$S:21}
A.df.prototype={
$0(){var s,r,q=this.a
q.X(0)
for(s=[" ","  _____ _   _    _____     _           _"," :     : :_: :  :   __:___: :_ ___ ___: :"," :  :  : : . :  :__   :  _:   : . : . : :"," :_____:_:___:  :_____:___:_:_:___:___:_:"," "," Welcome to Old School, a library for adding"," old school terminals to your html documents."," "," Input 'help' for help."," "],r=0;r<11;++r)q.E(s[r],"lightgreen")},
$S:0}
A.db.prototype={
$0(){var s,r,q
for(s=[" "," Commands"," --------"," "," reset        Resets this demo."," help         Shows this information."," list         Lists the demos available."," info [demo]  Gives a description of [demo]."," load [demo]  Loads [demo] into this page."," "],r=this.a,q=0;q<10;++q)r.E(s[q],"lightgreen")},
$S:0}
A.dd.prototype={
$0(){var s,r,q=t.s,p=A.a([" "," Demos"," -----"," "],q)
q=A.a([],q)
for(s=this.a,s=new A.bi(s,s.r,s.e);s.C();)q.push(" - "+s.d)
B.e.aK(p,q)
p.push(" ")
q=p.length
s=this.b
r=0
for(;r<p.length;p.length===q||(0,A.bV)(p),++r)s.E(p[r],"lightgreen")},
$S:0}
A.dc.prototype={
$1(a){var s,r,q,p,o=this.a
if(o.L(a)){s=t.s
r=A.a([" "],s)
s=A.a([],s)
for(o=o.n(0,a),q=o.length,p=0;p<o.length;o.length===q||(0,A.bV)(o),++p)s.push(" "+o[p])
B.e.aK(r,s)
r.push(" ")
o=r.length
s=this.b
p=0
for(;p<r.length;r.length===o||(0,A.bV)(r),++p)s.E(r[p],"lightgreen")}else{o=this.b
o.D()
o.E(" No demo called '"+a+"' found.","orange")
o.aR(" Input `list` to see available demos.")
o.D()}},
$S:8}
A.de.prototype={
$1(a){var s
if(this.a.L(a))self.window.open(a+".html","_self")
else{s=this.b
s.D()
s.E(" No demo called '"+a+"' found.","orange")
s.aR(" Input `list` to see available demos.")
s.D()}},
$S:8};(function aliases(){var s=J.P.prototype
s.b0=s.h})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._static_2,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u
s(A,"hD","fz",3)
s(A,"hE","fA",3)
s(A,"hF","fB",3)
r(A,"eA","hx",0)
s(A,"hG","hr",4)
q(A,"hH","hs",5)
p(A.m.prototype,"gaz","v",5)
o(A.aK.prototype,"gbh","bi",0)
var n
o(n=A.bx.prototype,"gae","N",0)
o(n,"gad","I",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.e,null)
q(A.e,[A.dn,J.be,J.b6,A.j,A.X,A.cb,A.bj,A.ap,A.ag,A.ba,A.cs,A.c3,A.ao,A.aS,A.ax,A.c1,A.bi,A.c_,A.cS,A.x,A.bK,A.bP,A.aU,A.bB,A.W,A.ad,A.bE,A.bD,A.R,A.m,A.bC,A.bI,A.bL,A.aK,A.bN,A.d_,A.aE,A.cR,A.af,A.l,A.bb,A.cA,A.bu,A.aF,A.cB,A.bZ,A.p,A.bO,A.by,A.N,A.a6,A.a7,A.a9,A.bx,A.ci])
q(J.be,[J.bf,J.ar,J.at,J.as,J.au,J.a5,J.Y])
q(J.at,[J.P,J.o,A.bk,A.aA])
q(J.P,[J.bv,J.a_,J.O])
r(J.c0,J.o)
q(J.a5,[J.aq,J.bg])
q(A.j,[A.aw,A.G,A.bh,A.bA,A.bG,A.bw,A.bJ,A.b7,A.B,A.aG,A.bz,A.ac,A.b9])
q(A.X,[A.bW,A.bX,A.ch,A.d6,A.d8,A.cx,A.cw,A.d0,A.cH,A.cO,A.cf,A.ce,A.cW,A.cq,A.cp,A.cl,A.cm,A.cn,A.dc,A.de])
q(A.bW,[A.dh,A.cy,A.cz,A.cY,A.cX,A.cC,A.cK,A.cJ,A.cG,A.cE,A.cD,A.cN,A.cM,A.cL,A.cg,A.cd,A.cT,A.d2,A.d3,A.cV,A.c7,A.c8,A.c9,A.ca,A.co,A.cj,A.ck,A.df,A.db,A.dd])
r(A.bM,A.ag)
r(A.z,A.bM)
r(A.bc,A.ba)
r(A.aC,A.G)
q(A.ch,[A.cc,A.an])
r(A.Z,A.ax)
r(A.av,A.Z)
q(A.bX,[A.d7,A.d1,A.d4,A.cI,A.cP,A.c2,A.c6])
q(A.aA,[A.bl,A.a8])
q(A.a8,[A.aM,A.aO])
r(A.aN,A.aM)
r(A.ay,A.aN)
r(A.aP,A.aO)
r(A.az,A.aP)
q(A.ay,[A.bm,A.bn])
q(A.az,[A.bo,A.bp,A.bq,A.br,A.bs,A.aB,A.bt])
r(A.aV,A.bJ)
r(A.aT,A.ad)
r(A.aJ,A.aT)
r(A.ae,A.aJ)
r(A.bF,A.bE)
r(A.aI,A.bF)
r(A.aH,A.bD)
r(A.bH,A.bI)
r(A.cU,A.d_)
r(A.aR,A.aE)
r(A.aL,A.aR)
q(A.B,[A.aD,A.bd])
q(A.cA,[A.C,A.ab])
s(A.aM,A.l)
s(A.aN,A.ap)
s(A.aO,A.l)
s(A.aP,A.ap)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{c:"int",r:"double",i0:"num",w:"String",hI:"bool",p:"Null",h:"List",e:"Object",i9:"Map"},mangledNames:{},types:["~()","p()","p(@)","~(~())","~(@)","~(e,y)","p(e,y)","p(k)","~(w)","F<~>()","@(@)","@(@,w)","@(w)","p(~())","p(@,y)","~(c,@)","~(e?,e?)","c(c,c)","a7(k)","a6(k)","w()","~(cr)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.z&&a.b(c.a)&&b.b(c.b)}}
A.fU(v.typeUniverse,JSON.parse('{"bv":"P","a_":"P","O":"P","bf":{"f":[]},"ar":{"p":[],"f":[]},"at":{"k":[]},"P":{"k":[]},"o":{"h":["1"],"k":[]},"c0":{"o":["1"],"h":["1"],"k":[]},"a5":{"r":[]},"aq":{"r":[],"c":[],"f":[]},"bg":{"r":[],"f":[]},"Y":{"w":[],"f":[]},"aw":{"j":[]},"aC":{"G":[],"j":[]},"bh":{"j":[]},"bA":{"j":[]},"aS":{"y":[]},"bG":{"j":[]},"bw":{"j":[]},"Z":{"ax":["1","2"]},"av":{"Z":["1","2"],"ax":["1","2"]},"bk":{"k":[],"f":[]},"aA":{"k":[]},"bl":{"k":[],"f":[]},"a8":{"v":["1"],"k":[]},"ay":{"l":["r"],"h":["r"],"v":["r"],"k":[]},"az":{"l":["c"],"h":["c"],"v":["c"],"k":[]},"bm":{"l":["r"],"h":["r"],"v":["r"],"k":[],"f":[],"l.E":"r"},"bn":{"l":["r"],"h":["r"],"v":["r"],"k":[],"f":[],"l.E":"r"},"bo":{"l":["c"],"h":["c"],"v":["c"],"k":[],"f":[],"l.E":"c"},"bp":{"l":["c"],"h":["c"],"v":["c"],"k":[],"f":[],"l.E":"c"},"bq":{"l":["c"],"h":["c"],"v":["c"],"k":[],"f":[],"l.E":"c"},"br":{"l":["c"],"h":["c"],"v":["c"],"k":[],"f":[],"l.E":"c"},"bs":{"cu":[],"l":["c"],"h":["c"],"v":["c"],"k":[],"f":[],"l.E":"c"},"aB":{"l":["c"],"h":["c"],"v":["c"],"k":[],"f":[],"l.E":"c"},"bt":{"l":["c"],"h":["c"],"v":["c"],"k":[],"f":[],"l.E":"c"},"bJ":{"j":[]},"aV":{"G":[],"j":[]},"aU":{"cr":[]},"W":{"j":[]},"ae":{"ad":["1"]},"aH":{"bD":["1"]},"m":{"F":["1"]},"aJ":{"ad":["1"]},"aT":{"ad":["1"]},"aL":{"aE":["1"]},"aR":{"aE":["1"]},"b7":{"j":[]},"G":{"j":[]},"B":{"j":[]},"aD":{"j":[]},"bd":{"j":[]},"aG":{"j":[]},"bz":{"j":[]},"ac":{"j":[]},"b9":{"j":[]},"bu":{"j":[]},"aF":{"j":[]},"bO":{"y":[]},"fe":{"h":["c"]},"fx":{"h":["c"]},"fw":{"h":["c"]},"fc":{"h":["c"]},"fv":{"h":["c"]},"fd":{"h":["c"]},"cu":{"h":["c"]},"f9":{"h":["r"]},"fa":{"h":["r"]}}'))
A.fT(v.typeUniverse,JSON.parse('{"ap":1,"ba":2,"bi":1,"a8":1,"aJ":1,"bF":1,"bE":1,"aT":1,"bI":1,"bH":1,"bL":1,"aK":1,"bN":1,"aR":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.dJ
return{o:s("N"),Q:s("j"),Z:s("i7"),U:s("o<N>"),G:s("o<h<N>>"),f:s("o<e>"),s:s("o<w>"),w:s("o<cu>"),b:s("o<@>"),t:s("o<c>"),T:s("ar"),m:s("k"),g:s("O"),p:s("v<@>"),V:s("a6"),a:s("h<w>"),j:s("h<@>"),q:s("a7"),P:s("p"),K:s("e"),L:s("ia"),F:s("+()"),l:s("y"),N:s("w"),E:s("cr"),R:s("f"),c:s("G"),B:s("a_"),d:s("m<@>"),h:s("m<c>"),D:s("m<~>"),y:s("hI"),i:s("r"),z:s("@"),v:s("@(e)"),C:s("@(e,y)"),S:s("c"),A:s("0&*"),_:s("e*"),O:s("F<p>?"),X:s("e?"),H:s("i0"),n:s("~"),u:s("~(e)"),k:s("~(e,y)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.x=J.be.prototype
B.e=J.o.prototype
B.a=J.aq.prototype
B.y=J.a5.prototype
B.f=J.Y.prototype
B.z=J.O.prototype
B.A=J.at.prototype
B.m=J.bv.prototype
B.i=J.a_.prototype
B.j=function getTagFallback(o) {
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
B.k=function(hooks) { return hooks; }

B.v=new A.bu()
B.c=new A.cb()
B.b=new A.cU()
B.w=new A.bO()
B.d_=A.a(s([126,129,165,129,189,153,129,126]),t.t)
B.a1=A.a(s([126,255,219,255,195,231,255,126]),t.t)
B.dw=A.a(s([108,254,254,254,124,56,16,0]),t.t)
B.bX=A.a(s([16,56,124,254,124,56,16,0]),t.t)
B.aV=A.a(s([56,124,56,254,254,124,56,124]),t.t)
B.b6=A.a(s([16,16,56,124,254,124,56,124]),t.t)
B.ap=A.a(s([0,0,24,60,60,24,0,0]),t.t)
B.as=A.a(s([255,255,231,195,195,231,255,255]),t.t)
B.aE=A.a(s([0,60,102,66,66,102,60,0]),t.t)
B.cK=A.a(s([255,195,153,189,189,153,195,255]),t.t)
B.dv=A.a(s([15,7,15,125,204,204,204,120]),t.t)
B.du=A.a(s([60,102,102,102,60,24,126,24]),t.t)
B.cH=A.a(s([63,51,63,48,48,112,240,224]),t.t)
B.L=A.a(s([127,99,127,99,99,103,230,192]),t.t)
B.Q=A.a(s([153,90,60,231,231,60,90,153]),t.t)
B.am=A.a(s([128,224,248,254,248,224,128,0]),t.t)
B.bs=A.a(s([2,14,62,254,62,14,2,0]),t.t)
B.ca=A.a(s([24,60,126,24,24,126,60,24]),t.t)
B.c6=A.a(s([102,102,102,102,102,0,102,0]),t.t)
B.cg=A.a(s([127,219,219,123,27,27,27,0]),t.t)
B.ch=A.a(s([62,99,56,108,108,56,204,120]),t.t)
B.bG=A.a(s([0,0,0,0,126,126,126,0]),t.t)
B.bJ=A.a(s([24,60,126,24,126,60,24,255]),t.t)
B.G=A.a(s([24,60,126,24,24,24,24,0]),t.t)
B.d4=A.a(s([24,24,24,24,126,60,24,0]),t.t)
B.cY=A.a(s([0,24,12,254,12,24,0,0]),t.t)
B.aj=A.a(s([0,48,96,254,96,48,0,0]),t.t)
B.bO=A.a(s([0,0,192,192,192,254,0,0]),t.t)
B.bl=A.a(s([0,36,102,255,102,36,0,0]),t.t)
B.a_=A.a(s([0,24,60,126,255,255,0,0]),t.t)
B.bK=A.a(s([0,255,255,126,60,24,0,0]),t.t)
B.aQ=A.a(s([0,0,0,0,0,0,0,0]),t.t)
B.bt=A.a(s([48,120,120,48,48,0,48,0]),t.t)
B.O=A.a(s([108,108,108,0,0,0,0,0]),t.t)
B.ad=A.a(s([108,108,254,108,254,108,108,0]),t.t)
B.bS=A.a(s([48,124,192,120,12,248,48,0]),t.t)
B.F=A.a(s([0,198,204,24,48,102,198,0]),t.t)
B.ct=A.a(s([56,108,56,118,220,204,118,0]),t.t)
B.ac=A.a(s([96,96,192,0,0,0,0,0]),t.t)
B.K=A.a(s([24,48,96,96,96,48,24,0]),t.t)
B.bp=A.a(s([96,48,24,24,24,48,96,0]),t.t)
B.ck=A.a(s([0,102,60,255,60,102,0,0]),t.t)
B.dD=A.a(s([0,48,48,252,48,48,0,0]),t.t)
B.bU=A.a(s([0,0,0,0,0,48,48,96]),t.t)
B.bk=A.a(s([0,0,0,252,0,0,0,0]),t.t)
B.c8=A.a(s([0,0,0,0,0,48,48,0]),t.t)
B.V=A.a(s([6,12,24,48,96,192,128,0]),t.t)
B.aY=A.a(s([124,198,206,222,246,230,124,0]),t.t)
B.cb=A.a(s([48,112,48,48,48,48,252,0]),t.t)
B.bQ=A.a(s([120,204,12,56,96,204,252,0]),t.t)
B.dy=A.a(s([120,204,12,56,12,204,120,0]),t.t)
B.br=A.a(s([28,60,108,204,254,12,30,0]),t.t)
B.cZ=A.a(s([252,192,248,12,12,204,120,0]),t.t)
B.df=A.a(s([56,96,192,248,204,204,120,0]),t.t)
B.bR=A.a(s([252,204,12,24,48,48,48,0]),t.t)
B.cn=A.a(s([120,204,204,120,204,204,120,0]),t.t)
B.b4=A.a(s([120,204,204,124,12,24,112,0]),t.t)
B.cS=A.a(s([0,48,48,0,0,48,48,0]),t.t)
B.aH=A.a(s([0,48,48,0,0,48,48,96]),t.t)
B.bq=A.a(s([24,48,96,192,96,48,24,0]),t.t)
B.bf=A.a(s([0,0,252,0,0,252,0,0]),t.t)
B.ar=A.a(s([96,48,24,12,24,48,96,0]),t.t)
B.ah=A.a(s([120,204,12,24,48,0,48,0]),t.t)
B.db=A.a(s([124,198,222,222,222,192,120,0]),t.t)
B.c2=A.a(s([48,120,204,204,252,204,204,0]),t.t)
B.aB=A.a(s([252,102,102,124,102,102,252,0]),t.t)
B.a3=A.a(s([60,102,192,192,192,102,60,0]),t.t)
B.W=A.a(s([248,108,102,102,102,108,248,0]),t.t)
B.a9=A.a(s([254,98,104,120,104,98,254,0]),t.t)
B.ce=A.a(s([254,98,104,120,104,96,240,0]),t.t)
B.af=A.a(s([60,102,192,192,206,102,62,0]),t.t)
B.ai=A.a(s([204,204,204,252,204,204,204,0]),t.t)
B.cC=A.a(s([120,48,48,48,48,48,120,0]),t.t)
B.bE=A.a(s([30,12,12,12,204,204,120,0]),t.t)
B.bw=A.a(s([230,102,108,120,108,102,230,0]),t.t)
B.bv=A.a(s([240,96,96,96,98,102,254,0]),t.t)
B.aC=A.a(s([198,238,254,254,214,198,198,0]),t.t)
B.N=A.a(s([198,230,246,222,206,198,198,0]),t.t)
B.cM=A.a(s([56,108,198,198,198,108,56,0]),t.t)
B.ba=A.a(s([252,102,102,124,96,96,240,0]),t.t)
B.cw=A.a(s([120,204,204,204,220,120,28,0]),t.t)
B.E=A.a(s([252,102,102,124,108,102,230,0]),t.t)
B.a6=A.a(s([120,204,224,112,28,204,120,0]),t.t)
B.dp=A.a(s([252,180,48,48,48,48,120,0]),t.t)
B.az=A.a(s([204,204,204,204,204,204,252,0]),t.t)
B.S=A.a(s([204,204,204,204,204,120,48,0]),t.t)
B.cF=A.a(s([198,198,198,214,254,238,198,0]),t.t)
B.cz=A.a(s([198,198,108,56,56,108,198,0]),t.t)
B.U=A.a(s([204,204,204,120,48,48,120,0]),t.t)
B.I=A.a(s([254,198,140,24,50,102,254,0]),t.t)
B.bm=A.a(s([120,96,96,96,96,96,120,0]),t.t)
B.cr=A.a(s([192,96,48,24,12,6,2,0]),t.t)
B.bo=A.a(s([120,24,24,24,24,24,120,0]),t.t)
B.de=A.a(s([16,56,108,198,0,0,0,0]),t.t)
B.D=A.a(s([0,0,0,0,0,0,0,255]),t.t)
B.aA=A.a(s([48,48,24,0,0,0,0,0]),t.t)
B.d5=A.a(s([0,0,120,12,124,204,118,0]),t.t)
B.c5=A.a(s([224,96,96,124,102,102,220,0]),t.t)
B.cy=A.a(s([0,0,120,204,192,204,120,0]),t.t)
B.aW=A.a(s([28,12,12,124,204,204,118,0]),t.t)
B.dh=A.a(s([0,0,120,204,252,192,120,0]),t.t)
B.aF=A.a(s([56,108,96,240,96,96,240,0]),t.t)
B.cv=A.a(s([0,0,118,204,204,124,12,248]),t.t)
B.aq=A.a(s([224,96,108,118,102,102,230,0]),t.t)
B.cl=A.a(s([48,0,112,48,48,48,120,0]),t.t)
B.bz=A.a(s([12,0,12,12,12,204,204,120]),t.t)
B.b2=A.a(s([224,96,102,108,120,108,230,0]),t.t)
B.bB=A.a(s([112,48,48,48,48,48,120,0]),t.t)
B.bj=A.a(s([0,0,204,254,254,214,198,0]),t.t)
B.bC=A.a(s([0,0,248,204,204,204,204,0]),t.t)
B.b5=A.a(s([0,0,120,204,204,204,120,0]),t.t)
B.dl=A.a(s([0,0,220,102,102,124,96,240]),t.t)
B.di=A.a(s([0,0,118,204,204,124,12,30]),t.t)
B.bg=A.a(s([0,0,220,118,102,96,240,0]),t.t)
B.cP=A.a(s([0,0,124,192,120,12,248,0]),t.t)
B.cI=A.a(s([16,48,124,48,48,52,24,0]),t.t)
B.c_=A.a(s([0,0,204,204,204,204,118,0]),t.t)
B.aU=A.a(s([0,0,204,204,204,120,48,0]),t.t)
B.b9=A.a(s([0,0,198,214,254,254,108,0]),t.t)
B.bx=A.a(s([0,0,198,108,56,108,198,0]),t.t)
B.ds=A.a(s([0,0,204,204,204,124,12,248]),t.t)
B.d3=A.a(s([0,0,252,152,48,100,252,0]),t.t)
B.b_=A.a(s([28,48,48,224,48,48,28,0]),t.t)
B.cO=A.a(s([24,24,24,0,24,24,24,0]),t.t)
B.au=A.a(s([224,48,48,28,48,48,224,0]),t.t)
B.dC=A.a(s([118,220,0,0,0,0,0,0]),t.t)
B.aT=A.a(s([0,16,56,108,198,198,254,0]),t.t)
B.al=A.a(s([120,204,192,204,120,24,12,120]),t.t)
B.d1=A.a(s([0,204,0,204,204,204,126,0]),t.t)
B.dr=A.a(s([28,0,120,204,252,192,120,0]),t.t)
B.bT=A.a(s([126,195,60,6,62,102,63,0]),t.t)
B.a8=A.a(s([204,0,120,12,124,204,126,0]),t.t)
B.aX=A.a(s([224,0,120,12,124,204,126,0]),t.t)
B.Z=A.a(s([48,48,120,12,124,204,126,0]),t.t)
B.bc=A.a(s([0,0,120,192,192,120,12,56]),t.t)
B.da=A.a(s([126,195,60,102,126,96,60,0]),t.t)
B.aD=A.a(s([204,0,120,204,252,192,120,0]),t.t)
B.cQ=A.a(s([224,0,120,204,252,192,120,0]),t.t)
B.d2=A.a(s([204,0,112,48,48,48,120,0]),t.t)
B.cG=A.a(s([124,198,56,24,24,24,60,0]),t.t)
B.aP=A.a(s([224,0,112,48,48,48,120,0]),t.t)
B.dx=A.a(s([198,56,108,198,254,198,198,0]),t.t)
B.cN=A.a(s([48,48,0,120,204,252,204,0]),t.t)
B.bu=A.a(s([28,0,252,96,120,96,252,0]),t.t)
B.dq=A.a(s([0,0,127,12,127,204,127,0]),t.t)
B.aI=A.a(s([62,108,204,254,204,204,206,0]),t.t)
B.dj=A.a(s([120,204,0,120,204,204,120,0]),t.t)
B.a4=A.a(s([0,204,0,120,204,204,120,0]),t.t)
B.dz=A.a(s([0,224,0,120,204,204,120,0]),t.t)
B.aG=A.a(s([120,204,0,204,204,204,126,0]),t.t)
B.cJ=A.a(s([0,224,0,204,204,204,126,0]),t.t)
B.ao=A.a(s([0,204,0,204,204,124,12,248]),t.t)
B.aa=A.a(s([195,24,60,102,102,60,24,0]),t.t)
B.cW=A.a(s([204,0,204,204,204,204,120,0]),t.t)
B.P=A.a(s([24,24,126,192,192,126,24,24]),t.t)
B.ax=A.a(s([56,108,100,240,96,230,252,0]),t.t)
B.aR=A.a(s([204,204,120,252,48,252,48,48]),t.t)
B.d6=A.a(s([248,204,204,250,198,207,198,199]),t.t)
B.bF=A.a(s([14,27,24,60,24,24,216,112]),t.t)
B.at=A.a(s([28,0,120,12,124,204,126,0]),t.t)
B.c4=A.a(s([56,0,112,48,48,48,120,0]),t.t)
B.aw=A.a(s([0,28,0,120,204,204,120,0]),t.t)
B.co=A.a(s([0,28,0,204,204,204,126,0]),t.t)
B.aM=A.a(s([0,248,0,248,204,204,204,0]),t.t)
B.cE=A.a(s([252,0,204,236,252,220,204,0]),t.t)
B.a5=A.a(s([60,108,108,62,0,126,0,0]),t.t)
B.c1=A.a(s([56,108,108,56,0,124,0,0]),t.t)
B.cX=A.a(s([48,0,48,96,192,204,120,0]),t.t)
B.aO=A.a(s([0,0,0,252,192,192,0,0]),t.t)
B.av=A.a(s([0,0,0,252,12,12,0,0]),t.t)
B.cR=A.a(s([195,198,204,222,51,102,204,15]),t.t)
B.an=A.a(s([195,198,204,219,55,111,207,3]),t.t)
B.bI=A.a(s([24,24,0,24,24,24,24,0]),t.t)
B.bH=A.a(s([0,51,102,204,102,51,0,0]),t.t)
B.b1=A.a(s([0,204,102,51,102,204,0,0]),t.t)
B.cq=A.a(s([34,136,34,136,34,136,34,136]),t.t)
B.dk=A.a(s([85,170,85,170,85,170,85,170]),t.t)
B.bA=A.a(s([219,119,219,238,219,119,219,238]),t.t)
B.aS=A.a(s([24,24,24,24,24,24,24,24]),t.t)
B.aN=A.a(s([24,24,24,24,248,24,24,24]),t.t)
B.bP=A.a(s([24,24,248,24,248,24,24,24]),t.t)
B.dB=A.a(s([54,54,54,54,246,54,54,54]),t.t)
B.cc=A.a(s([0,0,0,0,254,54,54,54]),t.t)
B.aJ=A.a(s([0,0,248,24,248,24,24,24]),t.t)
B.a2=A.a(s([54,54,246,6,246,54,54,54]),t.t)
B.ci=A.a(s([54,54,54,54,54,54,54,54]),t.t)
B.c0=A.a(s([0,0,254,6,246,54,54,54]),t.t)
B.cm=A.a(s([54,54,246,6,254,0,0,0]),t.t)
B.ag=A.a(s([54,54,54,54,254,0,0,0]),t.t)
B.T=A.a(s([24,24,248,24,248,0,0,0]),t.t)
B.Y=A.a(s([0,0,0,0,248,24,24,24]),t.t)
B.R=A.a(s([24,24,24,24,31,0,0,0]),t.t)
B.bN=A.a(s([24,24,24,24,255,0,0,0]),t.t)
B.be=A.a(s([0,0,0,0,255,24,24,24]),t.t)
B.cV=A.a(s([24,24,24,24,31,24,24,24]),t.t)
B.bL=A.a(s([0,0,0,0,255,0,0,0]),t.t)
B.cj=A.a(s([24,24,24,24,255,24,24,24]),t.t)
B.cu=A.a(s([24,24,31,24,31,24,24,24]),t.t)
B.b3=A.a(s([54,54,54,54,55,54,54,54]),t.t)
B.dg=A.a(s([54,54,55,48,63,0,0,0]),t.t)
B.d9=A.a(s([0,0,63,48,55,54,54,54]),t.t)
B.by=A.a(s([54,54,247,0,255,0,0,0]),t.t)
B.bn=A.a(s([0,0,255,0,247,54,54,54]),t.t)
B.aL=A.a(s([54,54,55,48,55,54,54,54]),t.t)
B.aK=A.a(s([0,0,255,0,255,0,0,0]),t.t)
B.dt=A.a(s([54,54,247,0,247,54,54,54]),t.t)
B.cA=A.a(s([24,24,255,0,255,0,0,0]),t.t)
B.B=A.a(s([54,54,54,54,255,0,0,0]),t.t)
B.dm=A.a(s([0,0,255,0,255,24,24,24]),t.t)
B.bV=A.a(s([0,0,0,0,255,54,54,54]),t.t)
B.cd=A.a(s([54,54,54,54,63,0,0,0]),t.t)
B.bi=A.a(s([24,24,31,24,31,0,0,0]),t.t)
B.c7=A.a(s([0,0,31,24,31,24,24,24]),t.t)
B.cx=A.a(s([0,0,0,0,63,54,54,54]),t.t)
B.cD=A.a(s([54,54,54,54,255,54,54,54]),t.t)
B.bD=A.a(s([24,24,255,24,255,24,24,24]),t.t)
B.d7=A.a(s([24,24,24,24,248,0,0,0]),t.t)
B.aZ=A.a(s([0,0,0,0,31,24,24,24]),t.t)
B.bW=A.a(s([255,255,255,255,255,255,255,255]),t.t)
B.bZ=A.a(s([0,0,0,0,255,255,255,255]),t.t)
B.b8=A.a(s([240,240,240,240,240,240,240,240]),t.t)
B.cf=A.a(s([15,15,15,15,15,15,15,15]),t.t)
B.cU=A.a(s([255,255,255,255,0,0,0,0]),t.t)
B.dA=A.a(s([0,0,118,220,200,220,118,0]),t.t)
B.dc=A.a(s([0,120,204,248,204,248,192,192]),t.t)
B.ae=A.a(s([0,252,204,192,192,192,192,0]),t.t)
B.bY=A.a(s([0,254,108,108,108,108,108,0]),t.t)
B.d8=A.a(s([252,204,96,48,96,204,252,0]),t.t)
B.bb=A.a(s([0,0,126,216,216,216,112,0]),t.t)
B.bh=A.a(s([0,102,102,102,102,124,96,192]),t.t)
B.cs=A.a(s([0,118,220,24,24,24,24,0]),t.t)
B.a7=A.a(s([252,48,120,204,204,120,48,252]),t.t)
B.ay=A.a(s([56,108,198,254,198,108,56,0]),t.t)
B.ab=A.a(s([56,108,198,198,108,108,238,0]),t.t)
B.C=A.a(s([28,48,24,124,204,204,120,0]),t.t)
B.dn=A.a(s([0,0,126,219,219,126,0,0]),t.t)
B.bd=A.a(s([6,12,126,219,219,126,96,192]),t.t)
B.a0=A.a(s([56,96,192,248,192,96,56,0]),t.t)
B.c9=A.a(s([120,204,204,204,204,204,204,0]),t.t)
B.cB=A.a(s([0,252,0,252,0,252,0,0]),t.t)
B.X=A.a(s([48,48,252,48,48,0,252,0]),t.t)
B.b0=A.a(s([96,48,24,48,96,0,252,0]),t.t)
B.cL=A.a(s([24,48,96,48,24,0,252,0]),t.t)
B.b7=A.a(s([14,27,27,24,24,24,24,24]),t.t)
B.d0=A.a(s([24,24,24,24,24,216,216,112]),t.t)
B.c3=A.a(s([48,48,0,252,0,48,48,0]),t.t)
B.H=A.a(s([0,118,220,0,118,220,0,0]),t.t)
B.cp=A.a(s([56,108,108,56,0,0,0,0]),t.t)
B.J=A.a(s([0,0,0,24,24,0,0,0]),t.t)
B.dd=A.a(s([0,0,0,0,24,0,0,0]),t.t)
B.M=A.a(s([15,12,12,12,236,108,60,28]),t.t)
B.bM=A.a(s([120,108,108,108,108,0,0,0]),t.t)
B.ak=A.a(s([112,24,48,96,120,0,0,0]),t.t)
B.cT=A.a(s([0,0,60,60,60,60,0,0]),t.t)
B.dE=new A.bc(["\u263a",B.d_,"\u263b",B.a1,"\u2665",B.dw,"\u2666",B.bX,"\u2663",B.aV,"\u2660",B.b6,"\u2022",B.ap,"\u25d8",B.as,"\u25cb",B.aE,"\u25d9",B.cK,"\u2642",B.dv,"\u2640",B.du,"\u266a",B.cH,"\u266b",B.L,"\u263c",B.Q,"\u25ba",B.am,"\u25c4",B.bs,"\u2195",B.ca,"\u203c",B.c6,"\xb6",B.cg,"\xa7",B.ch,"\u25ac",B.bG,"\u21a8",B.bJ,"\u2191",B.G,"\u2193",B.d4,"\u2192",B.cY,"\u2190",B.aj,"\u221f",B.bO,"\u2194",B.bl,"\u25b2",B.a_,"\u25bc",B.bK," ",B.aQ,"!",B.bt,'"',B.O,"#",B.ad,"$",B.bS,"%",B.F,"&",B.ct,"'",B.ac,"(",B.K,")",B.bp,"*",B.ck,"+",B.dD,",",B.bU,"-",B.bk,".",B.c8,"/",B.V,"0",B.aY,"1",B.cb,"2",B.bQ,"3",B.dy,"4",B.br,"5",B.cZ,"6",B.df,"7",B.bR,"8",B.cn,"9",B.b4,":",B.cS,";",B.aH,"<",B.bq,"=",B.bf,">",B.ar,"?",B.ah,"@",B.db,"A",B.c2,"B",B.aB,"C",B.a3,"D",B.W,"E",B.a9,"F",B.ce,"G",B.af,"H",B.ai,"I",B.cC,"J",B.bE,"K",B.bw,"L",B.bv,"M",B.aC,"N",B.N,"O",B.cM,"P",B.ba,"Q",B.cw,"R",B.E,"S",B.a6,"T",B.dp,"U",B.az,"V",B.S,"W",B.cF,"X",B.cz,"Y",B.U,"Z",B.I,"[",B.bm,"\\",B.cr,"]",B.bo,"^",B.de,"_",B.D,"`",B.aA,"a",B.d5,"b",B.c5,"c",B.cy,"d",B.aW,"e",B.dh,"f",B.aF,"g",B.cv,"h",B.aq,"i",B.cl,"j",B.bz,"k",B.b2,"l",B.bB,"m",B.bj,"n",B.bC,"o",B.b5,"p",B.dl,"q",B.di,"r",B.bg,"s",B.cP,"t",B.cI,"u",B.c_,"v",B.aU,"w",B.b9,"x",B.bx,"y",B.ds,"z",B.d3,"{",B.b_,"|",B.cO,"}",B.au,"~",B.dC,"\u2302",B.aT,"\xc7",B.al,"\xfc",B.d1,"\xe9",B.dr,"\xe2",B.bT,"\xe4",B.a8,"\xe0",B.aX,"\xe5",B.Z,"\xe7",B.bc,"\xea",B.da,"\xeb",B.aD,"\xe8",B.cQ,"\xef",B.d2,"\xee",B.cG,"\xec",B.aP,"\xc4",B.dx,"\xc5",B.cN,"\xc9",B.bu,"\xe6",B.dq,"\xc6",B.aI,"\xf4",B.dj,"\xf6",B.a4,"\xf2",B.dz,"\xfb",B.aG,"\xf9",B.cJ,"\xff",B.ao,"\xd6",B.aa,"\xdc",B.cW,"\xa2",B.P,"\xa3",B.ax,"\xa5",B.aR,"\u20a7",B.d6,"\u0192",B.bF,"\xe1",B.at,"\xed",B.c4,"\xf3",B.aw,"\xfa",B.co,"\xf1",B.aM,"\xd1",B.cE,"\xaa",B.a5,"\xba",B.c1,"\xbf",B.cX,"\u2310",B.aO,"\xac",B.av,"\xbd",B.cR,"\xbc",B.an,"\xa1",B.bI,"\xab",B.bH,"\xbb",B.b1,"\u2591",B.cq,"\u2592",B.dk,"\u2593",B.bA,"\u2502",B.aS,"\u2524",B.aN,"\u2561",B.bP,"\u2562",B.dB,"\u2556",B.cc,"\u2555",B.aJ,"\u2563",B.a2,"\u2551",B.ci,"\u2557",B.c0,"\u255d",B.cm,"\u255c",B.ag,"\u255b",B.T,"\u2510",B.Y,"\u2514",B.R,"\u2534",B.bN,"\u252c",B.be,"\u251c",B.cV,"\u2500",B.bL,"\u253c",B.cj,"\u255e",B.cu,"\u255f",B.b3,"\u255a",B.dg,"\u2554",B.d9,"\u2569",B.by,"\u2566",B.bn,"\u2560",B.aL,"\u2550",B.aK,"\u256c",B.dt,"\u2567",B.cA,"\u2568",B.B,"\u2564",B.dm,"\u2565",B.bV,"\u2559",B.cd,"\u2558",B.bi,"\u2552",B.c7,"\u2553",B.cx,"\u256b",B.cD,"\u256a",B.bD,"\u2518",B.d7,"\u250c",B.aZ,"\u2588",B.bW,"\u2584",B.bZ,"\u258c",B.b8,"\u2590",B.cf,"\u2580",B.cU,"\u03b1",B.dA,"\xdf",B.dc,"\u0393",B.ae,"\u03c0",B.bY,"\u03a3",B.d8,"\u03c3",B.bb,"\xb5",B.bh,"\u03c4",B.cs,"\u03a6",B.a7,"\u0398",B.ay,"\u03a9",B.ab,"\u03b4",B.C,"\u221e",B.dn,"\u03c6",B.bd,"\u03b5",B.a0,"\u2229",B.c9,"\u2261",B.cB,"\xb1",B.X,"\u2265",B.b0,"\u2264",B.cL,"\u2320",B.b7,"\u2321",B.d0,"\xf7",B.c3,"\u2248",B.H,"\xb0",B.cp,"\u2219",B.J,"\xb7",B.dd,"\u221a",B.M,"\u207f",B.bM,"\xb2",B.ak,"\u25a0",B.cT],A.dJ("bc<w,h<c>>"))
B.l=new A.C("replace")
B.dF=new A.C("inverse")
B.dG=new A.C("over")
B.dH=new A.C("under")
B.dI=new A.C("stain")
B.dJ=new A.C("delete")
B.dK=new A.C("maskDestination")
B.dL=new A.C("maskSource")
B.d=new A.ab("ready")
B.dM=new A.ab("awaitingKey")
B.h=new A.ab("awaitingString")
B.n=new A.ab("awaitingMouseClick")
B.dN=A.A("i4")
B.dO=A.A("i5")
B.dP=A.A("f9")
B.dQ=A.A("fa")
B.dR=A.A("fc")
B.dS=A.A("fd")
B.dT=A.A("fe")
B.dU=A.A("e")
B.dV=A.A("fv")
B.dW=A.A("cu")
B.dX=A.A("fw")
B.dY=A.A("fx")})();(function staticFields(){$.cQ=null
$.L=A.a([],t.f)
$.e1=null
$.dX=null
$.dW=null
$.eF=null
$.ez=null
$.eJ=null
$.d5=null
$.d9=null
$.dL=null
$.aQ=A.a([],A.dJ("o<h<e>?>"))
$.ah=null
$.b0=null
$.b1=null
$.dE=!1
$.i=B.b})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"i6","di",()=>A.hQ("_$dart_dartClosure"))
s($,"iI","eX",()=>B.b.aU(new A.dh()))
s($,"ie","eN",()=>A.H(A.ct({
toString:function(){return"$receiver$"}})))
s($,"ig","eO",()=>A.H(A.ct({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"ih","eP",()=>A.H(A.ct(null)))
s($,"ii","eQ",()=>A.H(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"il","eT",()=>A.H(A.ct(void 0)))
s($,"im","eU",()=>A.H(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"ik","eS",()=>A.H(A.e7(null)))
s($,"ij","eR",()=>A.H(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"ip","eW",()=>A.H(A.e7(void 0)))
s($,"io","eV",()=>A.H(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"iq","dR",()=>A.fy())
s($,"i8","dj",()=>$.eX())
s($,"iG","dk",()=>A.dN(B.dU))
s($,"id","eM",()=>A.dq(8,0,t.S))
s($,"ic","eL",()=>A.dq(8,255,t.S))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.bk,ArrayBufferView:A.aA,DataView:A.bl,Float32Array:A.bm,Float64Array:A.bn,Int16Array:A.bo,Int32Array:A.bp,Int8Array:A.bq,Uint16Array:A.br,Uint32Array:A.bs,Uint8ClampedArray:A.aB,CanvasPixelArray:A.aB,Uint8Array:A.bt})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.a8.$nativeSuperclassTag="ArrayBufferView"
A.aM.$nativeSuperclassTag="ArrayBufferView"
A.aN.$nativeSuperclassTag="ArrayBufferView"
A.ay.$nativeSuperclassTag="ArrayBufferView"
A.aO.$nativeSuperclassTag="ArrayBufferView"
A.aP.$nativeSuperclassTag="ArrayBufferView"
A.az.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.da
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=index.js.map
