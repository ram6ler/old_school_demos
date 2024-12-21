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
if(a[b]!==s){A.ie(b)}a[b]=r}var q=a[b]
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
dR(a,b,c,d){return{i:a,p:b,e:c,x:d}},
dP(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.dQ==null){A.i5()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.b(A.ef("Return interceptor for "+A.p(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.cS
if(o==null)o=$.cS=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.ia(a)
if(p!=null)return p
if(typeof a=="function")return B.z
s=Object.getPrototypeOf(a)
if(s==null)return B.m
if(s===Object.prototype)return B.m
if(typeof q=="function"){o=$.cS
if(o==null)o=$.cS=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.i,enumerable:false,writable:true,configurable:true})
return B.i}return B.i},
e5(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
fq(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.e5(r))break;++b}return b},
fr(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.d(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.e5(q))break}return b},
a3(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ar.prototype
return J.bg.prototype}if(typeof a=="string")return J.X.prototype
if(a==null)return J.as.prototype
if(typeof a=="boolean")return J.bf.prototype
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.O.prototype
if(typeof a=="symbol")return J.av.prototype
if(typeof a=="bigint")return J.at.prototype
return a}if(a instanceof A.e)return a
return J.dP(a)},
eN(a){if(typeof a=="string")return J.X.prototype
if(a==null)return a
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.O.prototype
if(typeof a=="symbol")return J.av.prototype
if(typeof a=="bigint")return J.at.prototype
return a}if(a instanceof A.e)return a
return J.dP(a)},
hZ(a){if(a==null)return a
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.O.prototype
if(typeof a=="symbol")return J.av.prototype
if(typeof a=="bigint")return J.at.prototype
return a}if(a instanceof A.e)return a
return J.dP(a)},
i_(a){if(typeof a=="number")return J.a5.prototype
if(a==null)return a
if(!(a instanceof A.e))return J.a_.prototype
return a},
i0(a){if(typeof a=="string")return J.X.prototype
if(a==null)return a
if(!(a instanceof A.e))return J.a_.prototype
return a},
am(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.a3(a).t(a,b)},
E(a){return J.a3(a).gk(a)},
f7(a){return J.hZ(a).gam(a)},
dW(a){return J.eN(a).gm(a)},
f8(a){return J.a3(a).gl(a)},
dX(a){return J.i_(a).bJ(a)},
b5(a){return J.a3(a).h(a)},
f9(a){return J.i0(a).b0(a)},
be:function be(){},
bf:function bf(){},
as:function as(){},
au:function au(){},
P:function P(){},
bw:function bw(){},
a_:function a_(){},
O:function O(){},
at:function at(){},
av:function av(){},
o:function o(a){this.$ti=a},
c2:function c2(a){this.$ti=a},
b6:function b6(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
a5:function a5(){},
ar:function ar(){},
bg:function bg(){},
X:function X(){}},A={dr:function dr(){},
Q(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
dA(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
ec(a,b,c,d,e){return A.dA(A.Q(A.Q(A.Q(A.Q(e,a),b),c),d))},
dM(a,b,c){return a},
eQ(a){var s,r
for(s=$.L.length,r=0;r<s;++r)if(a===$.L[r])return!0
return!1},
fp(){return new A.Z("No element")},
bi:function bi(a){this.a=a},
dj:function dj(){},
cd:function cd(){},
bk:function bk(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aq:function aq(){},
eU(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
iT(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
p(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.b5(a)
return s},
aa(a){var s,r=$.e6
if(r==null)r=$.e6=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
c7(a){return A.fx(a)},
fx(a){var s,r,q,p
if(a instanceof A.e)return A.u(A.b2(a),null)
s=J.a3(a)
if(s===B.x||s===B.A||t.B.b(a)){r=B.j(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.u(A.b2(a),null)},
e7(a){if(a==null||typeof a=="number"||A.dI(a))return J.b5(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.W)return a.h(0)
if(a instanceof A.ah)return a.aL(!0)
return"Instance of '"+A.c7(a)+"'"},
fy(a){var s=a.$thrownJsError
if(s==null)return null
return A.D(s)},
d(a,b){if(a==null)J.dW(a)
throw A.b(A.eL(a,b))},
eL(a,b){var s,r="index"
if(!A.eA(b))return new A.y(!0,b,r,null)
s=J.dW(a)
if(b<0||b>=s)return A.fl(b,s,a,r)
return new A.aD(null,null,!0,b,r,"Value not in range")},
dL(a){return new A.y(!0,a,null,null)},
b(a){return A.eP(new Error(),a)},
eP(a,b){var s
if(b==null)b=new A.G()
a.dartException=b
s=A.ig
if("defineProperty" in Object){Object.defineProperty(a,"message",{get:s})
a.name=""}else a.toString=s
return a},
ig(){return J.b5(this.dartException)},
dU(a){throw A.b(a)},
eT(a,b){throw A.eP(b,a)},
b4(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.eT(A.hi(a,b,c),s)},
hi(a,b,c){var s,r,q,p,o,n,m,l,k
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
bX(a){throw A.b(A.a4(a))},
H(a){var s,r,q,p,o,n
a=A.id(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.a([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.cu(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
cv(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
ee(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
ds(a,b){var s=b==null,r=s?null:b.method
return new A.bh(a,r,s?null:b.receiver)},
M(a){if(a==null)return new A.c5(a)
if(a instanceof A.ap)return A.U(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.U(a,a.dartException)
return A.hN(a)},
U(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
hN(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.a.br(r,16)&8191)===10)switch(q){case 438:return A.U(a,A.ds(A.p(s)+" (Error "+q+")",null))
case 445:case 5007:A.p(s)
return A.U(a,new A.aC())}}if(a instanceof TypeError){p=$.eX()
o=$.eY()
n=$.eZ()
m=$.f_()
l=$.f2()
k=$.f3()
j=$.f1()
$.f0()
i=$.f5()
h=$.f4()
g=p.q(s)
if(g!=null)return A.U(a,A.ds(s,g))
else{g=o.q(s)
if(g!=null){g.method="call"
return A.U(a,A.ds(s,g))}else if(n.q(s)!=null||m.q(s)!=null||l.q(s)!=null||k.q(s)!=null||j.q(s)!=null||m.q(s)!=null||i.q(s)!=null||h.q(s)!=null)return A.U(a,new A.aC())}return A.U(a,new A.bB(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.aF()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.U(a,new A.y(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.aF()
return a},
D(a){var s
if(a instanceof A.ap)return a.b
if(a==null)return new A.aT(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.aT(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
dS(a){if(a==null)return J.E(a)
if(typeof a=="object")return A.aa(a)
return J.E(a)},
hV(a){if(typeof a=="number")return B.y.gk(a)
if(a instanceof A.bS)return A.aa(a)
if(a instanceof A.ah)return a.gk(a)
return A.dS(a)},
eM(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=a.length
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
if(m==null)o[q]=b.P(q,p)
else m.b=p}else if(typeof q=="number"&&(q&0x3fffffff)===q){l=b.c
if(l==null){n=Object.create(null)
n["<non-identifier-key>"]=n
delete n["<non-identifier-key>"]
b.c=n
l=n}m=l[q]
if(m==null)l[q]=b.P(q,p)
else m.b=p}else{k=b.d
if(k==null){n=Object.create(null)
n["<non-identifier-key>"]=n
delete n["<non-identifier-key>"]
b.d=n
k=n}j=b.aj(q)
i=k[j]
if(i==null)k[j]=[b.P(q,p)]
else{r=b.ak(i,q)
if(r>=0)i[r].b=p
else i.push(b.P(q,p))}}}return b},
hr(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.b(A.e3("Unsupported number of arguments for wrapped closure"))},
bW(a,b){var s=a.$identity
if(!!s)return s
s=A.hW(a,b)
a.$identity=s
return s},
hW(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.hr)},
fg(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.ce().constructor.prototype):Object.create(new A.ao(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.e2(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.fc(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.e2(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
fc(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.fa)}throw A.b("Error in functionType of tearoff")},
fd(a,b,c,d){var s=A.e1
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
e2(a,b,c,d){if(c)return A.ff(a,b,d)
return A.fd(b.length,d,a,b)},
fe(a,b,c,d){var s=A.e1,r=A.fb
switch(b?-1:a){case 0:throw A.b(new A.bx("Intercepted function with no arguments."))
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
if($.e_==null)$.e_=A.dZ("interceptor")
if($.e0==null)$.e0=A.dZ("receiver")
s=b.length
r=A.fe(s,c,a,b)
return r},
dN(a){return A.fg(a)},
fa(a,b){return A.b_(v.typeUniverse,A.b2(a.a),b)},
e1(a){return a.a},
fb(a){return a.b},
dZ(a){var s,r,q,p=new A.ao("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.b(A.an("Field name "+a+" not found.",null))},
iV(a){throw A.b(new A.bH(a))},
i1(a){return v.getIsolateTag(a)},
ft(a,b){var s=new A.bj(a,b)
s.c=a.e
return s},
ia(a){var s,r,q,p,o,n=$.eO.$1(a),m=$.d7[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.db[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.eI.$2(a,n)
if(q!=null){m=$.d7[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.db[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.di(s)
$.d7[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.db[n]=s
return s}if(p==="-"){o=A.di(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.eR(a,s)
if(p==="*")throw A.b(A.ef(n))
if(v.leafTags[n]===true){o=A.di(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.eR(a,s)},
eR(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.dR(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
di(a){return J.dR(a,!1,null,!!a.$iv)},
ib(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.di(s)
else return J.dR(s,c,null,null)},
i5(){if(!0===$.dQ)return
$.dQ=!0
A.i6()},
i6(){var s,r,q,p,o,n,m,l
$.d7=Object.create(null)
$.db=Object.create(null)
A.i4()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.eS.$1(o)
if(n!=null){m=A.ib(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
i4(){var s,r,q,p,o,n,m=B.o()
m=A.al(B.p,A.al(B.q,A.al(B.k,A.al(B.k,A.al(B.r,A.al(B.t,A.al(B.u(B.j),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.eO=new A.d8(p)
$.eI=new A.d9(o)
$.eS=new A.da(n)},
al(a,b){return a(b)||b},
hX(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
fs(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw A.b(new A.c0("Illegal RegExp pattern ("+String(n)+")",a))},
id(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
A:function A(a,b){this.a=a
this.b=b},
ba:function ba(){},
bc:function bc(a,b){this.a=a
this.$ti=b},
cu:function cu(a,b,c,d,e,f){var _=this
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
bB:function bB(a){this.a=a},
c5:function c5(a){this.a=a},
ap:function ap(a,b){this.a=a
this.b=b},
aT:function aT(a){this.a=a
this.b=null},
W:function W(){},
bY:function bY(){},
bZ:function bZ(){},
cj:function cj(){},
ce:function ce(){},
ao:function ao(a,b){this.a=a
this.b=b},
bH:function bH(a){this.a=a},
bx:function bx(a){this.a=a},
Y:function Y(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
c3:function c3(a,b){this.a=a
this.b=b
this.c=null},
bj:function bj(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
aw:function aw(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
d8:function d8(a){this.a=a},
d9:function d9(a){this.a=a},
da:function da(a){this.a=a},
ah:function ah(){},
bO:function bO(){},
c1:function c1(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cU:function cU(a){this.b=a},
a0(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.eL(b,a))},
bl:function bl(){},
aA:function aA(){},
bm:function bm(){},
a8:function a8(){},
ay:function ay(){},
az:function az(){},
bn:function bn(){},
bo:function bo(){},
bp:function bp(){},
bq:function bq(){},
br:function br(){},
bs:function bs(){},
bt:function bt(){},
aB:function aB(){},
bu:function bu(){},
aN:function aN(){},
aO:function aO(){},
aP:function aP(){},
aQ:function aQ(){},
e9(a,b){var s=b.c
return s==null?b.c=A.dF(a,b.x,!0):s},
dx(a,b){var s=b.c
return s==null?b.c=A.aY(a,"F",[b.x]):s},
ea(a){var s=a.w
if(s===6||s===7||s===8)return A.ea(a.x)
return s===12||s===13},
fA(a){return a.as},
dO(a){return A.bT(v.typeUniverse,a,!1)},
T(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.T(a1,s,a3,a4)
if(r===s)return a2
return A.eq(a1,r,!0)
case 7:s=a2.x
r=A.T(a1,s,a3,a4)
if(r===s)return a2
return A.dF(a1,r,!0)
case 8:s=a2.x
r=A.T(a1,s,a3,a4)
if(r===s)return a2
return A.eo(a1,r,!0)
case 9:q=a2.y
p=A.ak(a1,q,a3,a4)
if(p===q)return a2
return A.aY(a1,a2.x,p)
case 10:o=a2.x
n=A.T(a1,o,a3,a4)
m=a2.y
l=A.ak(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.dD(a1,n,l)
case 11:k=a2.x
j=a2.y
i=A.ak(a1,j,a3,a4)
if(i===j)return a2
return A.ep(a1,k,i)
case 12:h=a2.x
g=A.T(a1,h,a3,a4)
f=a2.y
e=A.hK(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.en(a1,g,e)
case 13:d=a2.y
a4+=d.length
c=A.ak(a1,d,a3,a4)
o=a2.x
n=A.T(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.dE(a1,n,c,!0)
case 14:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.b(A.b8("Attempted to substitute unexpected RTI kind "+a0))}},
ak(a,b,c,d){var s,r,q,p,o=b.length,n=A.d0(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.T(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
hL(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.d0(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.T(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
hK(a,b,c,d){var s,r=b.a,q=A.ak(a,r,c,d),p=b.b,o=A.ak(a,p,c,d),n=b.c,m=A.hL(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.bM()
s.a=q
s.b=o
s.c=m
return s},
a(a,b){a[v.arrayRti]=b
return a},
eK(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.i3(s)
return a.$S()}return null},
i7(a,b){var s
if(A.ea(b))if(a instanceof A.W){s=A.eK(a)
if(s!=null)return s}return A.b2(a)},
b2(a){if(a instanceof A.e)return A.a1(a)
if(Array.isArray(a))return A.dG(a)
return A.dH(J.a3(a))},
dG(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
a1(a){var s=a.$ti
return s!=null?s:A.dH(a)},
dH(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.hp(a,s)},
hp(a,b){var s=a instanceof A.W?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.h6(v.typeUniverse,s.name)
b.$ccache=r
return r},
i3(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.bT(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
i2(a){return A.a2(A.a1(a))},
dK(a){var s
if(a instanceof A.ah)return A.hY(a.$r,a.aE())
s=a instanceof A.W?A.eK(a):null
if(s!=null)return s
if(t.R.b(a))return J.f8(a).a
if(Array.isArray(a))return A.dG(a)
return A.b2(a)},
a2(a){var s=a.r
return s==null?a.r=A.eu(a):s},
eu(a){var s,r,q=a.as,p=q.replace(/\*/g,"")
if(p===q)return a.r=new A.bS(a)
s=A.bT(v.typeUniverse,p,!0)
r=s.r
return r==null?s.r=A.eu(s):r},
hY(a,b){var s,r,q=b,p=q.length
if(p===0)return t.F
if(0>=p)return A.d(q,0)
s=A.b_(v.typeUniverse,A.dK(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.d(q,r)
s=A.er(v.typeUniverse,s,A.dK(q[r]))}return A.b_(v.typeUniverse,s,a)},
B(a){return A.a2(A.bT(v.typeUniverse,a,!1))},
ho(a){var s,r,q,p,o,n,m=this
if(m===t.K)return A.J(m,a,A.hw)
if(!A.K(m))s=m===t._
else s=!0
if(s)return A.J(m,a,A.hA)
s=m.w
if(s===7)return A.J(m,a,A.hm)
if(s===1)return A.J(m,a,A.eB)
r=s===6?m.x:m
q=r.w
if(q===8)return A.J(m,a,A.hs)
if(r===t.S)p=A.eA
else if(r===t.i||r===t.n)p=A.hv
else if(r===t.N)p=A.hy
else p=r===t.y?A.dI:null
if(p!=null)return A.J(m,a,p)
if(q===9){o=r.x
if(r.y.every(A.i8)){m.f="$i"+o
if(o==="i")return A.J(m,a,A.hu)
return A.J(m,a,A.hz)}}else if(q===11){n=A.hX(r.x,r.y)
return A.J(m,a,n==null?A.eB:n)}return A.J(m,a,A.hk)},
J(a,b,c){a.b=c
return a.b(b)},
hn(a){var s,r=this,q=A.hj
if(!A.K(r))s=r===t._
else s=!0
if(s)q=A.h9
else if(r===t.K)q=A.h8
else{s=A.b3(r)
if(s)q=A.hl}r.a=q
return r.a(a)},
bU(a){var s=a.w,r=!0
if(!A.K(a))if(!(a===t._))if(!(a===t.A))if(s!==7)if(!(s===6&&A.bU(a.x)))r=s===8&&A.bU(a.x)||a===t.P||a===t.T
return r},
hk(a){var s=this
if(a==null)return A.bU(s)
return A.i9(v.typeUniverse,A.i7(a,s),s)},
hm(a){if(a==null)return!0
return this.x.b(a)},
hz(a){var s,r=this
if(a==null)return A.bU(r)
s=r.f
if(a instanceof A.e)return!!a[s]
return!!J.a3(a)[s]},
hu(a){var s,r=this
if(a==null)return A.bU(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.e)return!!a[s]
return!!J.a3(a)[s]},
hj(a){var s=this
if(a==null){if(A.b3(s))return a}else if(s.b(a))return a
A.ev(a,s)},
hl(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.ev(a,s)},
ev(a,b){throw A.b(A.fY(A.eh(a,A.u(b,null))))},
eh(a,b){return A.c_(a)+": type '"+A.u(A.dK(a),null)+"' is not a subtype of type '"+b+"'"},
fY(a){return new A.aW("TypeError: "+a)},
t(a,b){return new A.aW("TypeError: "+A.eh(a,b))},
hs(a){var s=this,r=s.w===6?s.x:s
return r.x.b(a)||A.dx(v.typeUniverse,r).b(a)},
hw(a){return a!=null},
h8(a){if(a!=null)return a
throw A.b(A.t(a,"Object"))},
hA(a){return!0},
h9(a){return a},
eB(a){return!1},
dI(a){return!0===a||!1===a},
iD(a){if(!0===a)return!0
if(!1===a)return!1
throw A.b(A.t(a,"bool"))},
iF(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b(A.t(a,"bool"))},
iE(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b(A.t(a,"bool?"))},
iG(a){if(typeof a=="number")return a
throw A.b(A.t(a,"double"))},
iI(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.t(a,"double"))},
iH(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.t(a,"double?"))},
eA(a){return typeof a=="number"&&Math.floor(a)===a},
iJ(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.b(A.t(a,"int"))},
iL(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b(A.t(a,"int"))},
iK(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b(A.t(a,"int?"))},
hv(a){return typeof a=="number"},
iM(a){if(typeof a=="number")return a
throw A.b(A.t(a,"num"))},
iO(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.t(a,"num"))},
iN(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.t(a,"num?"))},
hy(a){return typeof a=="string"},
iP(a){if(typeof a=="string")return a
throw A.b(A.t(a,"String"))},
iR(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b(A.t(a,"String"))},
iQ(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b(A.t(a,"String?"))},
eE(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.u(a[q],b)
return s},
hF(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.eE(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.u(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
ew(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", ",a3=null
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
if(l===9){p=A.hM(a.x)
o=a.y
return o.length>0?p+("<"+A.eE(o,b)+">"):p}if(l===11)return A.hF(a,b)
if(l===12)return A.ew(a,b,null)
if(l===13)return A.ew(a.x,b,a.y)
if(l===14){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.d(b,n)
return b[n]}return"?"},
hM(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
h7(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
h6(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.bT(a,b,!1)
else if(typeof m=="number"){s=m
r=A.aZ(a,5,"#")
q=A.d0(s)
for(p=0;p<s;++p)q[p]=r
o=A.aY(a,b,q)
n[b]=o
return o}else return m},
h5(a,b){return A.es(a.tR,b)},
h4(a,b){return A.es(a.eT,b)},
bT(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.el(A.ej(a,null,b,c))
r.set(b,s)
return s},
b_(a,b,c){var s,r,q=b.z
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
q=A.dD(a,b,c.w===10?c.y:[c])
p.set(s,q)
return q},
I(a,b){b.a=A.hn
b.b=A.ho
return b},
aZ(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.x(null,null)
s.w=b
s.as=c
r=A.I(a,s)
a.eC.set(c,r)
return r},
eq(a,b,c){var s,r=b.as+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.h2(a,b,r,c)
a.eC.set(r,s)
return s},
h2(a,b,c,d){var s,r,q
if(d){s=b.w
if(!A.K(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.x(null,null)
q.w=6
q.x=b
q.as=c
return A.I(a,q)},
dF(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.h1(a,b,r,c)
a.eC.set(r,s)
return s},
h1(a,b,c,d){var s,r,q,p
if(d){s=b.w
r=!0
if(!A.K(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.b3(b.x)
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.x
if(q.w===8&&A.b3(q.x))return q
else return A.e9(a,b)}}p=new A.x(null,null)
p.w=7
p.x=b
p.as=c
return A.I(a,p)},
eo(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.h_(a,b,r,c)
a.eC.set(r,s)
return s},
h_(a,b,c,d){var s,r
if(d){s=b.w
if(A.K(b)||b===t.K||b===t._)return b
else if(s===1)return A.aY(a,"F",[b])
else if(b===t.P||b===t.T)return t.O}r=new A.x(null,null)
r.w=8
r.x=b
r.as=c
return A.I(a,r)},
h3(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.x(null,null)
s.w=14
s.x=b
s.as=q
r=A.I(a,s)
a.eC.set(q,r)
return r},
aX(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
fZ(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
aY(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.aX(c)+">"
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
dD(a,b,c){var s,r,q,p,o,n
if(b.w===10){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.aX(r)+">")
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
ep(a,b,c){var s,r,q="+"+(b+"("+A.aX(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.x(null,null)
s.w=11
s.x=b
s.y=c
s.as=q
r=A.I(a,s)
a.eC.set(q,r)
return r},
en(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.aX(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.aX(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.fZ(i)+"}"}r=n+(g+")")
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
dE(a,b,c,d){var s,r=b.as+("<"+A.aX(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.h0(a,b,c,r,d)
a.eC.set(r,s)
return s},
h0(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.d0(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.T(a,b,r,0)
m=A.ak(a,c,r,0)
return A.dE(a,n,m,c!==m)}}l=new A.x(null,null)
l.w=13
l.x=b
l.y=c
l.as=d
return A.I(a,l)},
ej(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
el(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.fR(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.ek(a,r,l,k,!1)
else if(q===46)r=A.ek(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.S(a.u,a.e,k.pop()))
break
case 94:k.push(A.h3(a.u,k.pop()))
break
case 35:k.push(A.aZ(a.u,5,"#"))
break
case 64:k.push(A.aZ(a.u,2,"@"))
break
case 126:k.push(A.aZ(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.fT(a,k)
break
case 38:A.fS(a,k)
break
case 42:p=a.u
k.push(A.eq(p,A.S(p,a.e,k.pop()),a.n))
break
case 63:p=a.u
k.push(A.dF(p,A.S(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.eo(p,A.S(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.fQ(a,k)
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
A.fV(a.u,a.e,o)
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
fR(a,b,c,d){var s,r,q=b-48
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
n=A.h7(s,o.x)[p]
if(n==null)A.dU('No "'+p+'" in "'+A.fA(o)+'"')
d.push(A.b_(s,o,n))}else d.push(p)
return m},
fT(a,b){var s,r=a.u,q=A.ei(a,b),p=b.pop()
if(typeof p=="string")b.push(A.aY(r,p,q))
else{s=A.S(r,a.e,p)
switch(s.w){case 12:b.push(A.dE(r,s,q,a.n))
break
default:b.push(A.dD(r,s,q))
break}}},
fQ(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
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
r=A.S(p,a.e,o)
q=new A.bM()
q.a=s
q.b=n
q.c=m
b.push(A.en(p,r,q))
return
case-4:b.push(A.ep(p,b.pop(),s))
return
default:throw A.b(A.b8("Unexpected state under `()`: "+A.p(o)))}},
fS(a,b){var s=b.pop()
if(0===s){b.push(A.aZ(a.u,1,"0&"))
return}if(1===s){b.push(A.aZ(a.u,4,"1&"))
return}throw A.b(A.b8("Unexpected extended operation "+A.p(s)))},
ei(a,b){var s=b.splice(a.p)
A.em(a.u,a.e,s)
a.p=b.pop()
return s},
S(a,b,c){if(typeof c=="string")return A.aY(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.fU(a,b,c)}else return c},
em(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.S(a,b,c[s])},
fV(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.S(a,b,c[s])},
fU(a,b,c){var s,r,q=b.w
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
i9(a,b,c){var s,r=b.d
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
if(p===6){s=A.e9(a,d)
return A.n(a,b,c,s,e,!1)}if(r===8){if(!A.n(a,b.x,c,d,e,!1))return!1
return A.n(a,A.dx(a,b),c,d,e,!1)}if(r===7){s=A.n(a,t.P,c,d,e,!1)
return s&&A.n(a,b.x,c,d,e,!1)}if(p===8){if(A.n(a,b,c,d.x,e,!1))return!0
return A.n(a,b,c,A.dx(a,d),e,!1)}if(p===7){s=A.n(a,b,c,t.P,e,!1)
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
if(!A.n(a,j,c,i,e,!1)||!A.n(a,i,e,j,c,!1))return!1}return A.ez(a,b.x,c,d.x,e,!1)}if(p===12){if(b===t.g)return!0
if(s)return!1
return A.ez(a,b,c,d,e,!1)}if(r===9){if(p!==9)return!1
return A.ht(a,b,c,d,e,!1)}if(o&&p===11)return A.hx(a,b,c,d,e,!1)
return!1},
ez(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
ht(a,b,c,d,e,f){var s,r,q,p,o,n=b.x,m=d.x
for(;n!==m;){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.b_(a,b,r[o])
return A.et(a,p,null,c,d.y,e,!1)}return A.et(a,b.y,null,c,d.y,e,!1)},
et(a,b,c,d,e,f,g){var s,r=b.length
for(s=0;s<r;++s)if(!A.n(a,b[s],d,e[s],f,!1))return!1
return!0},
hx(a,b,c,d,e,f){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.n(a,r[s],c,q[s],e,!1))return!1
return!0},
b3(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.K(a))if(s!==7)if(!(s===6&&A.b3(a.x)))r=s===8&&A.b3(a.x)
return r},
i8(a){var s
if(!A.K(a))s=a===t._
else s=!0
return s},
K(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
es(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
d0(a){return a>0?new Array(a):v.typeUniverse.sEA},
x:function x(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
bM:function bM(){this.c=this.b=this.a=null},
bS:function bS(a){this.a=a},
bK:function bK(){},
aW:function aW(a){this.a=a},
fJ(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.hP()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.bW(new A.cz(q),1)).observe(s,{childList:true})
return new A.cy(q,s,r)}else if(self.setImmediate!=null)return A.hQ()
return A.hR()},
fK(a){self.scheduleImmediate(A.bW(new A.cA(a),0))},
fL(a){self.setImmediate(A.bW(new A.cB(a),0))},
fM(a){A.fW(0,a)},
ed(a,b){var s=B.a.A(a.a,1000)
return A.fX(s<0?0:s,b)},
fW(a,b){var s=new A.aV()
s.b7(a,b)
return s},
fX(a,b){var s=new A.aV()
s.b8(a,b)
return s},
hB(a){return new A.bC(new A.k($.h,a.i("k<0>")),a.i("bC<0>"))},
hd(a,b){a.$2(0,null)
b.b=!0
return b.a},
ha(a,b){A.he(a,b)},
hc(a,b){var s,r=a==null?b.$ti.c.a(a):a
if(!b.b)b.a.a_(r)
else{s=b.a
if(b.$ti.i("F<1>").b(r))s.aB(r)
else s.a4(r)}},
hb(a,b){var s=A.M(a),r=A.D(a),q=b.a
if(b.b)q.D(s,r)
else q.a0(s,r)},
he(a,b){var s,r,q=new A.d2(b),p=new A.d3(b)
if(a instanceof A.k)a.aK(q,p,t.z)
else{s=t.z
if(a instanceof A.k)a.ar(q,p,s)
else{r=new A.k($.h,t.d)
r.a=8
r.c=a
r.aK(q,p,s)}}},
hO(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.h.ap(new A.d6(s))},
dn(a){var s
if(t.Q.b(a)){s=a.gO()
if(s!=null)return s}return B.w},
e4(a,b){var s
b.a(a)
s=new A.k($.h,b.i("k<0>"))
s.a_(a)
return s},
hq(a,b){if($.h===B.b)return null
return null},
dB(a,b){var s,r
for(;s=a.a,(s&4)!==0;)a=a.c
if(a===b){b.a0(new A.y(!0,a,null,"Cannot complete a future with itself"),A.eb())
return}s|=b.a&1
a.a=s
if((s&24)!==0){r=b.U()
b.S(a)
A.af(b,r)}else{r=b.c
b.aI(a)
a.ab(r)}},
fO(a,b){var s,r,q={},p=q.a=a
for(;s=p.a,(s&4)!==0;){p=p.c
q.a=p}if(p===b){b.a0(new A.y(!0,p,null,"Cannot complete a future with itself"),A.eb())
return}if((s&24)===0){r=b.c
b.aI(p)
q.a.ab(r)
return}if((s&16)===0&&b.c==null){b.S(p)
return}b.a^=2
A.aj(null,null,b.b,new A.cJ(q,b))},
af(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;!0;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){f=f.c
A.bV(f.a,f.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.af(g.a,f)
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
if(r){A.bV(m.a,m.b)
return}j=$.h
if(j!==k)$.h=k
else j=null
f=f.c
if((f&15)===8)new A.cQ(s,g,p).$0()
else if(q){if((f&1)!==0)new A.cP(s,m).$0()}else if((f&2)!==0)new A.cO(g,s).$0()
if(j!=null)$.h=j
f=s.c
if(f instanceof A.k){r=s.a.$ti
r=r.i("F<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.V(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.dB(f,i)
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
hG(a,b){if(t.C.b(a))return b.ap(a)
if(t.v.b(a))return a
throw A.b(A.dY(a,"onError",u.c))},
hC(){var s,r
for(s=$.ai;s!=null;s=$.ai){$.b1=null
r=s.b
$.ai=r
if(r==null)$.b0=null
s.a.$0()}},
hJ(){$.dJ=!0
try{A.hC()}finally{$.b1=null
$.dJ=!1
if($.ai!=null)$.dV().$1(A.eJ())}},
eG(a){var s=new A.bD(a),r=$.b0
if(r==null){$.ai=$.b0=s
if(!$.dJ)$.dV().$1(A.eJ())}else $.b0=r.b=s},
hI(a){var s,r,q,p=$.ai
if(p==null){A.eG(a)
$.b1=$.b0
return}s=new A.bD(a)
r=$.b1
if(r==null){s.b=p
$.ai=$.b1=s}else{q=r.b
s.b=q
$.b1=r.b=s
if(q==null)$.b0=s}},
dT(a){var s=null,r=$.h
if(B.b===r){A.aj(s,s,B.b,a)
return}A.aj(s,s,r,r.aQ(a))},
ip(a){A.dM(a,"stream",t.K)
return new A.bQ()},
dz(a){return new A.aH(null,null,a.i("aH<0>"))},
eF(a){return},
eg(a,b){return b==null?A.hS():b},
fN(a,b){if(b==null)b=A.hT()
if(t.k.b(b))return a.ap(b)
if(t.u.b(b))return b
throw A.b(A.an("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
hD(a){},
hE(a,b){A.bV(a,b)},
hh(a,b,c){var s,r=a.ag(),q=$.dl()
if(r!==q){q=r.$ti
s=$.h
r.R(new A.R(new A.k(s,q),8,new A.d4(b,c),null,q.i("R<1,1>")))}else b.a3(c)},
fF(a,b){var s=$.h
if(s===B.b)return A.ed(a,b)
return A.ed(a,s.aR(b,t.D))},
bV(a,b){A.hI(new A.d5(a,b))},
eC(a,b,c,d){var s,r=$.h
if(r===c)return d.$0()
$.h=c
s=r
try{r=d.$0()
return r}finally{$.h=s}},
eD(a,b,c,d,e){var s,r=$.h
if(r===c)return d.$1(e)
$.h=c
s=r
try{r=d.$1(e)
return r}finally{$.h=s}},
hH(a,b,c,d,e,f){var s,r=$.h
if(r===c)return d.$2(e,f)
$.h=c
s=r
try{r=d.$2(e,f)
return r}finally{$.h=s}},
aj(a,b,c,d){if(B.b!==c)d=c.aQ(d)
A.eG(d)},
cz:function cz(a){this.a=a},
cy:function cy(a,b,c){this.a=a
this.b=b
this.c=c},
cA:function cA(a){this.a=a},
cB:function cB(a){this.a=a},
aV:function aV(){this.c=0},
d_:function d_(a,b){this.a=a
this.b=b},
cZ:function cZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bC:function bC(a,b){this.a=a
this.b=!1
this.$ti=b},
d2:function d2(a){this.a=a},
d3:function d3(a){this.a=a},
d6:function d6(a){this.a=a},
V:function V(a,b){this.a=a
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
bE:function bE(){},
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
k:function k(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
cG:function cG(a,b){this.a=a
this.b=b},
cN:function cN(a,b){this.a=a
this.b=b},
cK:function cK(a){this.a=a},
cL:function cL(a){this.a=a},
cM:function cM(a,b,c){this.a=a
this.b=b
this.c=c},
cJ:function cJ(a,b){this.a=a
this.b=b},
cI:function cI(a,b){this.a=a
this.b=b},
cH:function cH(a,b,c){this.a=a
this.b=b
this.c=c},
cQ:function cQ(a,b,c){this.a=a
this.b=b
this.c=c},
cR:function cR(a){this.a=a},
cP:function cP(a,b){this.a=a
this.b=b},
cO:function cO(a,b){this.a=a
this.b=b},
bD:function bD(a){this.a=a
this.b=null},
ad:function ad(){},
ch:function ch(a,b){this.a=a
this.b=b},
ci:function ci(a,b){this.a=a
this.b=b},
cf:function cf(a){this.a=a},
cg:function cg(a,b,c){this.a=a
this.b=b
this.c=c},
aJ:function aJ(){},
bG:function bG(){},
bF:function bF(){},
aU:function aU(){},
bJ:function bJ(){},
bI:function bI(a){this.b=a
this.a=null},
bN:function bN(){this.a=0
this.c=this.b=null},
cV:function cV(a,b){this.a=a
this.b=b},
aK:function aK(a){this.a=1
this.b=a
this.c=null},
bQ:function bQ(){},
d4:function d4(a,b){this.a=a
this.b=b},
d1:function d1(){},
d5:function d5(a,b){this.a=a
this.b=b},
cW:function cW(){},
cX:function cX(a,b){this.a=a
this.b=b},
cY:function cY(a,b,c){this.a=a
this.b=b
this.c=c},
fu(a,b,c){return A.eM(a,new A.Y(b.i("@<0>").a1(c).i("Y<1,2>")))},
fv(a){return new A.aM(a.i("aM<0>"))},
dC(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
fP(a,b,c){var s=new A.ag(a,b,c.i("ag<0>"))
s.c=a.e
return s},
du(a){var s,r={}
if(A.eQ(a))return"{...}"
s=new A.bz("")
try{$.L.push(a)
s.a+="{"
r.a=!0
a.ai(0,new A.c4(r,s))
s.a+="}"}finally{if(0>=$.L.length)return A.d($.L,-1)
$.L.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
aM:function aM(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cT:function cT(a){this.a=a
this.c=this.b=null},
ag:function ag(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
m:function m(){},
ax:function ax(){},
c4:function c4(a,b){this.a=a
this.b=b},
aE:function aE(){},
aS:function aS(){},
fh(a,b){a=A.b(a)
a.stack=b.h(0)
throw a
throw A.b("unreachable")},
dt(a,b,c){var s,r,q
if(a>4294967295)A.dU(A.dv(a,0,4294967295,"length",null))
s=A.a(new Array(a),c.i("o<0>"))
s.$flags=1
r=s
if(a!==0)for(s=r.length,q=0;q<s;++q)r[q]=b
return r},
fw(a,b,c){var s,r,q=A.a([],c.i("o<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.bX)(a),++r)q.push(a[r])
q.$flags=1
return q},
e8(a){return new A.c1(a,A.fs(a,!1,!0,!1,!1,!1))},
fD(a,b,c){var s=J.f7(b)
if(!s.B())return a
if(c.length===0){do a+=A.p(s.gL())
while(s.B())}else{a+=A.p(s.gL())
for(;s.B();)a=a+c+A.p(s.gL())}return a},
eb(){return A.D(new Error())},
c_(a){if(typeof a=="number"||A.dI(a)||a==null)return J.b5(a)
if(typeof a=="string")return JSON.stringify(a)
return A.e7(a)},
fi(a,b){A.dM(a,"error",t.K)
A.dM(b,"stackTrace",t.l)
A.fh(a,b)},
b8(a){return new A.b7(a)},
an(a,b){return new A.y(!1,null,b,a)},
dY(a,b,c){return new A.y(!0,a,b,c)},
dv(a,b,c,d,e){return new A.aD(b,c,!0,a,d,"Invalid value")},
fz(a,b,c){if(0>a||a>c)throw A.b(A.dv(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.b(A.dv(b,a,c,"end",null))
return b}return c},
fl(a,b,c,d){return new A.bd(b,!0,a,d,"Index out of range")},
cx(a){return new A.aG(a)},
ef(a){return new A.bA(a)},
fC(a){return new A.Z(a)},
a4(a){return new A.b9(a)},
e3(a){return new A.cF(a)},
dq(a,b,c){var s,r
if(A.eQ(a))return b+"..."+c
s=new A.bz(b)
$.L.push(a)
try{r=s
r.a=A.fD(r.a,a,", ")}finally{if(0>=$.L.length)return A.d($.L,-1)
$.L.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
c6(a,b,c,d){var s
if(B.c===c){s=B.a.gk(a)
b=J.E(b)
return A.dA(A.Q(A.Q($.dm(),s),b))}if(B.c===d){s=B.a.gk(a)
b=J.E(b)
c=J.E(c)
return A.dA(A.Q(A.Q(A.Q($.dm(),s),b),c))}s=A.ec(B.a.gk(a),J.E(b),J.E(c),J.E(d),$.dm())
return s},
bb:function bb(a){this.a=a},
cC:function cC(){},
j:function j(){},
b7:function b7(a){this.a=a},
G:function G(){},
y:function y(a,b,c,d){var _=this
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
bA:function bA(a){this.a=a},
Z:function Z(a){this.a=a},
b9:function b9(a){this.a=a},
bv:function bv(){},
aF:function aF(){},
cF:function cF(a){this.a=a},
c0:function c0(a,b){this.a=a
this.b=b},
q:function q(){},
e:function e(){},
bR:function bR(){},
bz:function bz(a){this.a=a},
dw(a,b,c,d,e){var s,r
if(c<0)s=c===-1/0?0:-c*0
else s=c
if(d<0)r=d===-1/0?0:-d*0
else r=d
return new A.ab(a,b,s,r,e.i("ab<0>"))},
bP:function bP(){},
ab:function ab(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
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
fB(a,b,c,d,e,f,g){var s,r,q,p=self,o=p.document.createElement("canvas"),n=g*f
o.width=n
s=d*e
o.height=s
r=p.document.createElement("canvas")
r.width=n
r.height=s
s=A.a([],t.w)
for(q=0;q<d;++q){p=B.a.A(g,32)
s.push(new Uint32Array(p+1))}p=new A.by(d,g,f,e,c,a,o,r,s)
p.b5(a,b,c,d,e,f,g)
return p},
dy(a){return new A.A(B.a.A(a,32),31-B.a.j(a,32))},
by:function by(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=!0},
c9:function c9(a){this.a=a},
ca:function ca(a){this.a=a},
cb:function cb(a){this.a=a},
cc:function cc(a){this.a=a},
c8:function c8(){},
C:function C(a){this.b=a},
fE(a,b,c){var s,r,q,p,o="white",n=null,m=A.fB("black",b,o,c*10,2,2,a*8),l=A.a([],t.G)
for(s=t.U,r=0;r<c;++r){q=A.a([],s)
for(p=0;p<a;++p)q.push(new A.N(r,p," ",o))
l.push(q)}m=new A.ck(c,a,b,m,new A.a9(c,a),new A.a9(c,a),new A.a9(c,a),A.dz(t.N),A.dz(t.V),A.dz(t.q),B.d,l,A.fv(t.o),B.dE)
m.b6("black",a,b,o,n,!0,2,2,2,c,!0,n,n,n,n,n,n)
return m},
ac:function ac(a){this.b=a},
ck:function ck(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cs:function cs(a){this.a=a},
cr:function cr(){},
cq:function cq(a){this.a=a},
cl:function cl(a){this.a=a},
cm:function cm(a){this.a=a},
cn:function cn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
co:function co(a,b,c){this.a=a
this.b=b
this.c=c},
cp:function cp(a){this.a=a},
aL(a,b,c,d){var s
if(c==null)s=null
else{s=A.eH(new A.cD(c),t.m)
s=s==null?null:A.ey(s)}s=new A.bL(a,b,s,!1)
s.aM()
return s},
eH(a,b){var s=$.h
if(s===B.b)return a
return s.aR(a,b)},
dp:function dp(a,b){this.a=a
this.$ti=b},
bL:function bL(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
cD:function cD(a){this.a=a},
cE:function cE(a){this.a=a},
dc(){var s=0,r=A.hB(t.H),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$dc=A.hO(function(b4,b5){if(b4===1)return A.hb(b5,r)
while(true)switch(s){case 0:b3=self.document.getElementById("index")
b3.toString
p=A.fE(60,b3,35)
p.I()
p.M()
b3=t.s
o=A.fu(["blockdude",A.a(["Block Dude is a game by Brandon Sterner and","Detached Solutions for the Texas Instruments family","of graphic display calculators. The graphics data for","this demo was pinched directly from the Z80 assembly","code for the calculator game."],b3),"emotions",A.a(["Mixed Emotions is a little twist on the classic sliding","tiles game to demonstrate mouse support for the terminal.","Click on tiles to slide them to their correct positions,","but you only get to see the correct positions by sliding","the tiles!"],b3),"sokoban",A.a(["Mother Hen is a Sokoban clone that demonstrates poking","simple sprite data into the terminal graphics memory."],b3),"snake",A.a(["Snake is version of the infamous snake game that","demonstrates non interrupting keyboard input."],b3),"wordle",A.a(["Word Logic is a Wordle clone that demonstrates a fairly","complex program running in the terminal."],b3),"four",A.a(["This is the classic game of connect-four. The computer","uses background Monte Carlo simulations to play a fairly","intelligent game."],b3)],t.N,t.a)
n=A.e8("^ *info +(.+) *$")
m=A.e8("^ *load +(.+) *$")
l=new A.dh(p)
k=new A.dd(p)
j=new A.df(o,p)
i=new A.de(o,p)
h=new A.dg(o,p)
l.$0()
j.$0()
b3=m.b,g=n.b,f=p.y,e=p.x,d=e.b,c=f.b,b=f.a,a=p.z,a0=a.b,a1=a.a,a2=p.as,a3=A.a1(a2).i("ae<1>"),a4=p.a,a5=a4-1,a6=e.a,a7=p.b,a8=a7-4
case 3:if(!!0){s=4
break}p.bA(" > ","lightgreen",!1)
if(p.ay!==B.d)A.dU(A.e3("Terminal already awaiting input."))
a9=e.c
b0=e.d
a9=B.a.j(a9,a4)
b0=B.a.j(b0,a7)
a9=B.a.j(a9,a6)
e.c=a9
e.sJ(b0)
p.ao(B.f.av(" ",a8),!1)
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
return A.ha(new A.ae(a2,a3).gbt(0),$async$dc)
case 5:b1=b5
b2=B.f.b0(b1)
if("reset"===b2){l.$0()
s=3
break}if("help"===b2){k.$0()
s=3
break}if("list"===b2){j.$0()
s=3
break}if(g.test(b1)){a9=n.aT(b1).b
if(1>=a9.length){q=A.d(a9,1)
s=1
break}a9=a9[1]
a9.toString
i.$1(a9)}else if(b3.test(b1)){a9=m.aT(b1).b
if(1>=a9.length){q=A.d(a9,1)
s=1
break}a9=a9[1]
a9.toString
h.$1(a9)}else{p.C()
p.E(" Not understood. Type 'help' for help.","orange")
p.C()}s=3
break
case 4:case 1:return A.hc(q,r)}})
return A.hd($async$dc,r)},
dh:function dh(a){this.a=a},
dd:function dd(a){this.a=a},
df:function df(a,b){this.a=a
this.b=b},
de:function de(a,b){this.a=a
this.b=b},
dg:function dg(a,b){this.a=a
this.b=b},
ie(a){A.eT(new A.bi("Field '"+a+"' has been assigned during initialization."),new Error())},
ex(a){var s
if(typeof a=="function")throw A.b(A.an("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.hf,a)
s[$.dk()]=a
return s},
ey(a){var s
if(typeof a=="function")throw A.b(A.an("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.hg,a)
s[$.dk()]=a
return s},
hf(a){return a.$0()},
hg(a,b,c){if(c>=1)return a.$1(b)
return a.$0()}},B={}
var w=[A,J,B]
var $={}
A.dr.prototype={}
J.be.prototype={
t(a,b){return a===b},
gk(a){return A.aa(a)},
h(a){return"Instance of '"+A.c7(a)+"'"},
gl(a){return A.a2(A.dH(this))}}
J.bf.prototype={
h(a){return String(a)},
gk(a){return a?519018:218159},
gl(a){return A.a2(t.y)},
$if:1}
J.as.prototype={
t(a,b){return null==b},
h(a){return"null"},
gk(a){return 0},
$if:1,
$iq:1}
J.au.prototype={$il:1}
J.P.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.bw.prototype={}
J.a_.prototype={}
J.O.prototype={
h(a){var s=a[$.dk()]
if(s==null)return this.b4(a)
return"JavaScript function for "+J.b5(s)}}
J.at.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.av.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.o.prototype={
aP(a,b){a.$flags&1&&A.b4(a,"addAll",2)
this.ba(a,b)
return},
ba(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw A.b(A.a4(a))
for(s=0;s<r;++s)a.push(b[s])},
by(a,b){var s,r,q=a.length,p=A.dt(q,"",t.N)
for(s=0;s<a.length;++s){r=A.p(a[s])
if(!(s<q))return A.d(p,s)
p[s]=r}return p.join(b)},
bu(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw A.b(A.a4(a))}return s},
bv(a,b,c){return this.bu(a,b,c,t.z)},
h(a){return A.dq(a,"[","]")},
gam(a){return new J.b6(a,a.length,A.dG(a).i("b6<1>"))},
gk(a){return A.aa(a)},
gm(a){return a.length},
$ii:1}
J.c2.prototype={}
J.b6.prototype={
gL(){var s=this.d
return s==null?this.$ti.c.a(s):s},
B(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.b(A.bX(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.a5.prototype={
bJ(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.b(A.cx(""+a+".toInt()"))},
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
u(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.aJ(a,b)},
A(a,b){return(a|0)===a?a/b|0:this.aJ(a,b)},
aJ(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.cx("Result of truncating division is "+A.p(s)+": "+A.p(a)+" ~/ "+b))},
N(a,b){if(b<0)throw A.b(A.dL(b))
return b>31?0:a<<b>>>0},
bq(a,b){return b>31?0:a<<b>>>0},
b2(a,b){var s
if(b<0)throw A.b(A.dL(b))
if(a>0)s=this.ad(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
br(a,b){var s
if(a>0)s=this.ad(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
v(a,b){if(0>b)throw A.b(A.dL(b))
return this.ad(a,b)},
ad(a,b){return b>31?0:a>>>b},
gl(a){return A.a2(t.n)},
$ir:1}
J.ar.prototype={
gl(a){return A.a2(t.S)},
$if:1,
$ic:1}
J.bg.prototype={
gl(a){return A.a2(t.i)},
$if:1}
J.X.prototype={
b3(a,b,c){return a.substring(b,A.fz(b,c,a.length))},
b0(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.d(p,0)
if(p.charCodeAt(0)===133){s=J.fq(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.d(p,r)
q=p.charCodeAt(r)===133?J.fr(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
av(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.v)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
bB(a,b,c){var s=b-a.length
if(s<=0)return a
return this.av(c,s)+a},
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
A.bi.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.dj.prototype={
$0(){return A.e4(null,t.H)},
$S:8}
A.cd.prototype={}
A.bk.prototype={
gL(){var s=this.d
return s==null?this.$ti.c.a(s):s},
B(){var s,r=this,q=r.a,p=J.eN(q),o=p.gm(q)
if(r.b!==o)throw A.b(A.a4(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.n(q,s);++r.c
return!0}}
A.aq.prototype={}
A.A.prototype={$r:"+(1,2)",$s:1}
A.ba.prototype={
h(a){return A.du(this)}}
A.bc.prototype={
T(){var s=this,r=s.$map
if(r==null){r=new A.aw(s.$ti.i("aw<1,2>"))
A.eM(s.a,r)
s.$map=r}return r},
K(a){return this.T().K(a)},
n(a,b){return this.T().n(0,b)},
ai(a,b){this.T().ai(0,b)},
gm(a){return this.T().a}}
A.cu.prototype={
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
A.bB.prototype={
h(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.c5.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.ap.prototype={}
A.aT.prototype={
h(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iz:1}
A.W.prototype={
h(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.eU(r==null?"unknown":r)+"'"},
gbK(){return this},
$C:"$1",
$R:1,
$D:null}
A.bY.prototype={$C:"$0",$R:0}
A.bZ.prototype={$C:"$2",$R:2}
A.cj.prototype={}
A.ce.prototype={
h(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.eU(s)+"'"}}
A.ao.prototype={
t(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.ao))return!1
return this.$_target===b.$_target&&this.a===b.a},
gk(a){return(A.dS(this.a)^A.aa(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.c7(this.a)+"'")}}
A.bH.prototype={
h(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.bx.prototype={
h(a){return"RuntimeError: "+this.a}}
A.Y.prototype={
gm(a){return this.a},
K(a){var s=this.b
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
return q}else return this.bx(b)},
bx(a){var s,r,q=this.d
if(q==null)return null
s=q[this.aj(a)]
r=this.ak(s,a)
if(r<0)return null
return s[r].b},
ai(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw A.b(A.a4(s))
r=r.c}},
P(a,b){var s=this,r=new A.c3(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&1073741823
return r},
aj(a){return J.E(a)&1073741823},
ak(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.am(a[r].a,b))return r
return-1},
h(a){return A.du(this)}}
A.c3.prototype={}
A.bj.prototype={
B(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.a4(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
A.aw.prototype={
aj(a){return A.hV(a)&1073741823},
ak(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.am(a[r].a,b))return r
return-1}}
A.d8.prototype={
$1(a){return this.a(a)},
$S:9}
A.d9.prototype={
$2(a,b){return this.a(a,b)},
$S:10}
A.da.prototype={
$1(a){return this.a(a)},
$S:11}
A.ah.prototype={
h(a){return this.aL(!1)},
aL(a){var s,r,q,p,o,n=this.bh(),m=this.aE(),l=(a?""+"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.d(m,q)
o=m[q]
l=a?l+A.e7(o):l+A.p(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
bh(){var s,r=this.$s
for(;$.aR.length<=r;)$.aR.push(null)
s=$.aR[r]
if(s==null){s=this.bg()
if(!(r<$.aR.length))return A.d($.aR,r)
$.aR[r]=s}return s},
bg(){var s,r,q,p,o,n=this.$r,m=n.indexOf("("),l=n.substring(1,m),k=n.substring(m),j=k==="()"?0:k.replace(/[^,]/g,"").length+1,i=A.a(new Array(j),t.f)
for(s=0;s<j;++s)i[s]=s
if(l!==""){r=l.split(",")
s=r.length
for(q=i.length,p=j;s>0;){--p;--s
o=r[s]
if(!(p>=0&&p<q))return A.d(i,p)
i[p]=o}}i=A.fw(i,!1,t.K)
i.$flags=3
return i}}
A.bO.prototype={
aE(){return[this.a,this.b]},
t(a,b){if(b==null)return!1
return b instanceof A.bO&&this.$s===b.$s&&J.am(this.a,b.a)&&J.am(this.b,b.b)},
gk(a){return A.c6(this.$s,this.a,this.b,B.c)}}
A.c1.prototype={
h(a){return"RegExp/"+this.a+"/"+this.b.flags},
aT(a){var s=this.b.exec(a)
if(s==null)return null
return new A.cU(s)}}
A.cU.prototype={}
A.bl.prototype={
gl(a){return B.dN},
$if:1}
A.aA.prototype={}
A.bm.prototype={
gl(a){return B.dO},
$if:1}
A.a8.prototype={
gm(a){return a.length},
$iv:1}
A.ay.prototype={
n(a,b){A.a0(b,a,a.length)
return a[b]},
$ii:1}
A.az.prototype={$ii:1}
A.bn.prototype={
gl(a){return B.dP},
$if:1}
A.bo.prototype={
gl(a){return B.dQ},
$if:1}
A.bp.prototype={
gl(a){return B.dR},
n(a,b){A.a0(b,a,a.length)
return a[b]},
$if:1}
A.bq.prototype={
gl(a){return B.dS},
n(a,b){A.a0(b,a,a.length)
return a[b]},
$if:1}
A.br.prototype={
gl(a){return B.dT},
n(a,b){A.a0(b,a,a.length)
return a[b]},
$if:1}
A.bs.prototype={
gl(a){return B.dV},
n(a,b){A.a0(b,a,a.length)
return a[b]},
$if:1}
A.bt.prototype={
gl(a){return B.dW},
n(a,b){A.a0(b,a,a.length)
return a[b]},
$if:1,
$icw:1}
A.aB.prototype={
gl(a){return B.dX},
gm(a){return a.length},
n(a,b){A.a0(b,a,a.length)
return a[b]},
$if:1}
A.bu.prototype={
gl(a){return B.dY},
gm(a){return a.length},
n(a,b){A.a0(b,a,a.length)
return a[b]},
$if:1}
A.aN.prototype={}
A.aO.prototype={}
A.aP.prototype={}
A.aQ.prototype={}
A.x.prototype={
i(a){return A.b_(v.typeUniverse,this,a)},
a1(a){return A.er(v.typeUniverse,this,a)}}
A.bM.prototype={}
A.bS.prototype={
h(a){return A.u(this.a,null)}}
A.bK.prototype={
h(a){return this.a}}
A.aW.prototype={$iG:1}
A.cz.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:4}
A.cy.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:12}
A.cA.prototype={
$0(){this.a.$0()},
$S:2}
A.cB.prototype={
$0(){this.a.$0()},
$S:2}
A.aV.prototype={
b7(a,b){if(self.setTimeout!=null)self.setTimeout(A.bW(new A.d_(this,b),0),a)
else throw A.b(A.cx("`setTimeout()` not found."))},
b8(a,b){if(self.setTimeout!=null)self.setInterval(A.bW(new A.cZ(this,a,Date.now(),b),0),a)
else throw A.b(A.cx("Periodic timer."))},
$ict:1}
A.d_.prototype={
$0(){this.a.c=1
this.b.$0()},
$S:0}
A.cZ.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.a.u(s,o)}q.c=p
r.d.$1(q)},
$S:2}
A.bC.prototype={}
A.d2.prototype={
$1(a){return this.a.$2(0,a)},
$S:5}
A.d3.prototype={
$2(a,b){this.a.$2(1,new A.ap(a,b))},
$S:13}
A.d6.prototype={
$2(a,b){this.a(a,b)},
$S:14}
A.V.prototype={
h(a){return A.p(this.a)},
$ij:1,
gO(){return this.b}}
A.ae.prototype={}
A.aI.prototype={
a9(){},
aa(){}}
A.bE.prototype={
gbj(){return this.c<4},
bo(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
bs(a,b,c,d){var s,r,q,p,o,n=this
if((n.c&4)!==0){s=new A.aK($.h)
A.dT(s.gbk())
s.c=c
return s}s=$.h
r=d?1:0
q=A.eg(s,a)
A.fN(s,b)
p=new A.aI(n,q,s,r|32,A.a1(n).i("aI<1>"))
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
bn(a){var s,r=this
A.a1(r).i("aI<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.bo(a)
if((r.c&2)===0&&r.d==null)r.be()}return null},
bb(){if((this.c&4)!==0)return new A.Z("Cannot add new events after calling close")
return new A.Z("Cannot add new events while doing an addStream")},
H(a,b){if(!this.gbj())throw A.b(this.bb())
this.ac(b)},
be(){if((this.c&4)!==0)if(null.gbL())null.a_(null)
A.eF(this.b)}}
A.aH.prototype={
ac(a){var s
for(s=this.d;s!=null;s=s.ch)s.bc(new A.bI(a))}}
A.R.prototype={
bz(a){if((this.c&15)!==6)return!0
return this.b.b.aq(this.d,a.a)},
bw(a){var s,r=this.e,q=null,p=a.a,o=this.b.b
if(t.C.b(r))q=o.bE(r,p,a.b)
else q=o.aq(r,p)
try{p=q
return p}catch(s){if(t.c.b(A.M(s))){if((this.c&1)!==0)throw A.b(A.an("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.b(A.an("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.k.prototype={
aI(a){this.a=this.a&1|4
this.c=a},
ar(a,b,c){var s,r,q=$.h
if(q===B.b){if(b!=null&&!t.C.b(b)&&!t.v.b(b))throw A.b(A.dY(b,"onError",u.c))}else if(b!=null)b=A.hG(b,q)
s=new A.k(q,c.i("k<0>"))
r=b==null?1:3
this.R(new A.R(s,r,a,b,this.$ti.i("@<1>").a1(c).i("R<1,2>")))
return s},
bI(a,b){return this.ar(a,null,b)},
aK(a,b,c){var s=new A.k($.h,c.i("k<0>"))
this.R(new A.R(s,19,a,b,this.$ti.i("@<1>").a1(c).i("R<1,2>")))
return s},
bp(a){this.a=this.a&1|16
this.c=a},
S(a){this.a=a.a&30|this.a&1
this.c=a.c},
R(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.R(a)
return}s.S(r)}A.aj(null,null,s.b,new A.cG(s,a))}},
ab(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.ab(a)
return}n.S(s)}m.a=n.V(a)
A.aj(null,null,n.b,new A.cN(m,n))}},
U(){var s=this.c
this.c=null
return this.V(s)},
V(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
aA(a){var s,r,q,p=this
p.a^=2
try{a.ar(new A.cK(p),new A.cL(p),t.P)}catch(q){s=A.M(q)
r=A.D(q)
A.dT(new A.cM(p,s,r))}},
a3(a){var s,r=this,q=r.$ti
if(q.i("F<1>").b(a))if(q.b(a))A.dB(a,r)
else r.aA(a)
else{s=r.U()
r.a=8
r.c=a
A.af(r,s)}},
a4(a){var s=this,r=s.U()
s.a=8
s.c=a
A.af(s,r)},
D(a,b){var s=this.U()
this.bp(new A.V(a,b))
A.af(this,s)},
a_(a){if(this.$ti.i("F<1>").b(a)){this.aB(a)
return}this.bd(a)},
bd(a){this.a^=2
A.aj(null,null,this.b,new A.cI(this,a))},
aB(a){if(this.$ti.b(a)){A.fO(a,this)
return}this.aA(a)},
a0(a,b){this.a^=2
A.aj(null,null,this.b,new A.cH(this,a,b))},
$iF:1}
A.cG.prototype={
$0(){A.af(this.a,this.b)},
$S:0}
A.cN.prototype={
$0(){A.af(this.b,this.a.a)},
$S:0}
A.cK.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.a4(p.$ti.c.a(a))}catch(q){s=A.M(q)
r=A.D(q)
p.D(s,r)}},
$S:4}
A.cL.prototype={
$2(a,b){this.a.D(a,b)},
$S:15}
A.cM.prototype={
$0(){this.a.D(this.b,this.c)},
$S:0}
A.cJ.prototype={
$0(){A.dB(this.a.a,this.b)},
$S:0}
A.cI.prototype={
$0(){this.a.a4(this.b)},
$S:0}
A.cH.prototype={
$0(){this.a.D(this.b,this.c)},
$S:0}
A.cQ.prototype={
$0(){var s,r,q,p,o,n,m,l=this,k=null
try{q=l.a.a
k=q.b.b.aY(q.d)}catch(p){s=A.M(p)
r=A.D(p)
if(l.c&&l.b.a.c.a===s){q=l.a
q.c=l.b.a.c}else{q=s
o=r
if(o==null)o=A.dn(q)
n=l.a
n.c=new A.V(q,o)
q=n}q.b=!0
return}if(k instanceof A.k&&(k.a&24)!==0){if((k.a&16)!==0){q=l.a
q.c=k.c
q.b=!0}return}if(k instanceof A.k){m=l.b.a
q=l.a
q.c=k.bI(new A.cR(m),t.z)
q.b=!1}},
$S:0}
A.cR.prototype={
$1(a){return this.a},
$S:16}
A.cP.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
q.c=p.b.b.aq(p.d,this.b)}catch(o){s=A.M(o)
r=A.D(o)
q=s
p=r
if(p==null)p=A.dn(q)
n=this.a
n.c=new A.V(q,p)
n.b=!0}},
$S:0}
A.cO.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.bz(s)&&p.a.e!=null){p.c=p.a.bw(s)
p.b=!1}}catch(o){r=A.M(o)
q=A.D(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.dn(p)
m=l.b
m.c=new A.V(p,n)
p=m}p.b=!0}},
$S:0}
A.bD.prototype={}
A.ad.prototype={
gm(a){var s={},r=new A.k($.h,t.h)
s.a=0
this.aU(new A.ch(s,this),!0,new A.ci(s,r),r.gaC())
return r},
gbt(a){var s=new A.k($.h,A.a1(this).i("k<1>")),r=this.aU(null,!0,new A.cf(s),s.gaC())
r.an(new A.cg(this,r,s))
return s}}
A.ch.prototype={
$1(a){++this.a.a},
$S(){return A.a1(this.b).i("~(1)")}}
A.ci.prototype={
$0(){this.b.a3(this.a.a)},
$S:0}
A.cf.prototype={
$0(){var s,r,q,p,o
try{q=A.fp()
throw A.b(q)}catch(p){s=A.M(p)
r=A.D(p)
q=s
o=r
A.hq(q,o)
this.a.D(q,o)}},
$S:0}
A.cg.prototype={
$1(a){A.hh(this.b,this.c,a)},
$S(){return A.a1(this.a).i("~(1)")}}
A.aJ.prototype={
gk(a){return(A.aa(this.a)^892482866)>>>0},
t(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.ae&&b.a===this.a}}
A.bG.prototype={
aH(){return this.w.bn(this)},
a9(){},
aa(){}}
A.bF.prototype={
an(a){this.a=A.eg(this.d,a)},
ag(){var s,r=this,q=r.e&=4294967279
if((q&8)===0){q=r.e=q|8
if((q&128)!==0){s=r.r
if(s.a===1)s.a=3}if((q&64)===0)r.r=null
r.f=r.aH()}q=$.dl()
return q},
a9(){},
aa(){},
aH(){return null},
bc(a){var s,r,q=this,p=q.r
if(p==null)p=q.r=new A.bN()
s=p.c
if(s==null)p.b=p.c=a
else p.c=s.a=a
r=q.e
if((r&128)===0){r|=128
q.e=r
if(r<256)p.aw(q)}},
ac(a){var s=this,r=s.e
s.e=r|64
s.d.b_(s.a,a)
s.e&=4294967231
s.bf((r&4)!==0)},
bf(a){var s,r,q=this,p=q.e
if((p&128)!==0&&q.r.c==null){p=q.e=p&4294967167
s=!1
if((p&4)!==0)if(p<256){s=q.r
s=s==null?null:s.c==null
s=s!==!1}if(s){p&=4294967291
q.e=p}}for(;!0;a=r){if((p&8)!==0){q.r=null
return}r=(p&4)!==0
if(a===r)break
q.e=p^64
if(r)q.a9()
else q.aa()
p=q.e&=4294967231}if((p&128)!==0&&p<256)q.r.aw(q)}}
A.aU.prototype={
aU(a,b,c,d){return this.a.bs(a,d,c,!0)}}
A.bJ.prototype={}
A.bI.prototype={}
A.bN.prototype={
aw(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.dT(new A.cV(s,a))
s.a=1}}
A.cV.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.a
q.b=r
if(r==null)q.c=null
this.b.ac(s.b)},
$S:0}
A.aK.prototype={
an(a){},
ag(){this.a=-1
this.c=null
return $.dl()},
bl(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.aZ(s)}}else r.a=q}}
A.bQ.prototype={}
A.d4.prototype={
$0(){return this.a.a3(this.b)},
$S:0}
A.d1.prototype={}
A.d5.prototype={
$0(){A.fi(this.a,this.b)},
$S:0}
A.cW.prototype={
aZ(a){var s,r,q
try{if(B.b===$.h){a.$0()
return}A.eC(null,null,this,a)}catch(q){s=A.M(q)
r=A.D(q)
A.bV(s,r)}},
bH(a,b){var s,r,q
try{if(B.b===$.h){a.$1(b)
return}A.eD(null,null,this,a,b)}catch(q){s=A.M(q)
r=A.D(q)
A.bV(s,r)}},
b_(a,b){return this.bH(a,b,t.z)},
aQ(a){return new A.cX(this,a)},
aR(a,b){return new A.cY(this,a,b)},
bD(a){if($.h===B.b)return a.$0()
return A.eC(null,null,this,a)},
aY(a){return this.bD(a,t.z)},
bG(a,b){if($.h===B.b)return a.$1(b)
return A.eD(null,null,this,a,b)},
aq(a,b){var s=t.z
return this.bG(a,b,s,s)},
bF(a,b,c){if($.h===B.b)return a.$2(b,c)
return A.hH(null,null,this,a,b,c)},
bE(a,b,c){var s=t.z
return this.bF(a,b,c,s,s,s)},
bC(a){return a},
ap(a){var s=t.z
return this.bC(a,s,s,s)}}
A.cX.prototype={
$0(){return this.a.aZ(this.b)},
$S:0}
A.cY.prototype={
$1(a){return this.a.b_(this.b,a)},
$S(){return this.c.i("~(0)")}}
A.aM.prototype={
gam(a){var s=this,r=new A.ag(s,s.r,s.$ti.i("ag<1>"))
r.c=s.e
return r},
gm(a){return this.a},
H(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.az(s==null?q.b=A.dC():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.az(r==null?q.c=A.dC():r,b)}else return q.b9(b)},
b9(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.dC()
s=J.E(a)&1073741823
r=p[s]
if(r==null)p[s]=[q.a8(a)]
else{if(q.bi(r,a)>=0)return!1
r.push(q.a8(a))}return!0},
az(a,b){if(a[b]!=null)return!1
a[b]=this.a8(b)
return!0},
aG(){this.r=this.r+1&1073741823},
a8(a){var s,r=this,q=new A.cT(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.aG()
return q},
bi(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.am(a[r].a,b))return r
return-1}}
A.cT.prototype={}
A.ag.prototype={
gL(){var s=this.d
return s==null?this.$ti.c.a(s):s},
B(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.b(A.a4(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.m.prototype={
gam(a){return new A.bk(a,this.gm(a),A.b2(a).i("bk<m.E>"))},
h(a){return A.dq(a,"[","]")}}
A.ax.prototype={
gm(a){return this.a},
h(a){return A.du(this)}}
A.c4.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.p(a)
s=r.a+=s
r.a=s+": "
s=A.p(b)
r.a+=s},
$S:17}
A.aE.prototype={
h(a){return A.dq(this,"{","}")}}
A.aS.prototype={}
A.bb.prototype={
t(a,b){if(b==null)return!1
return b instanceof A.bb&&this.a===b.a},
gk(a){return B.a.gk(this.a)},
h(a){var s,r,q,p,o,n=this.a,m=B.a.A(n,36e8),l=n%36e8
if(n<0){m=0-m
n=0-l
s="-"}else{n=l
s=""}r=B.a.A(n,6e7)
n%=6e7
q=r<10?"0":""
p=B.a.A(n,1e6)
o=p<10?"0":""
return s+m+":"+q+r+":"+o+p+"."+B.f.bB(B.a.h(n%1e6),6,"0")}}
A.cC.prototype={
h(a){return this.aD()}}
A.j.prototype={
gO(){return A.fy(this)}}
A.b7.prototype={
h(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.c_(s)
return"Assertion failed"}}
A.G.prototype={}
A.y.prototype={
ga7(){return"Invalid argument"+(!this.a?"(s)":"")},
ga6(){return""},
h(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.ga7()+q+o
if(!s.a)return n
return n+s.ga6()+": "+A.c_(s.gal())},
gal(){return this.b}}
A.aD.prototype={
gal(){return this.b},
ga7(){return"RangeError"},
ga6(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.p(q):""
else if(q==null)s=": Not greater than or equal to "+A.p(r)
else if(q>r)s=": Not in inclusive range "+A.p(r)+".."+A.p(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.p(r)
return s}}
A.bd.prototype={
gal(){return this.b},
ga7(){return"RangeError"},
ga6(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gm(a){return this.f}}
A.aG.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.bA.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.Z.prototype={
h(a){return"Bad state: "+this.a}}
A.b9.prototype={
h(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.c_(s)+"."}}
A.bv.prototype={
h(a){return"Out of Memory"},
gO(){return null},
$ij:1}
A.aF.prototype={
h(a){return"Stack Overflow"},
gO(){return null},
$ij:1}
A.cF.prototype={
h(a){return"Exception: "+this.a}}
A.c0.prototype={
h(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=B.f.b3(q,0,75)+"..."
return r+"\n"+q}}
A.q.prototype={
gk(a){return A.e.prototype.gk.call(this,0)},
h(a){return"null"}}
A.e.prototype={$ie:1,
t(a,b){return this===b},
gk(a){return A.aa(this)},
h(a){return"Instance of '"+A.c7(this)+"'"},
gl(a){return A.i2(this)},
toString(){return this.h(this)}}
A.bR.prototype={
h(a){return""},
$iz:1}
A.bz.prototype={
gm(a){return this.a.length},
h(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.bP.prototype={
h(a){var s=this
return"Rectangle ("+s.a+", "+s.b+") "+s.c+" x "+s.d},
t(a,b){var s,r,q,p,o,n,m=this
if(b==null)return!1
s=!1
if(b instanceof A.ab){r=m.a
q=b.a
if(r===q){p=m.b
o=b.b
if(p===o){s=m.$ti.c
n=b.$ti.c
s=s.a(r+m.c)===n.a(q+b.c)&&s.a(p+m.d)===n.a(o+b.d)}}}return s},
gk(a){var s=this,r=s.a,q=s.b,p=s.$ti.c
return A.ec(B.a.gk(r),B.a.gk(q),B.a.gk(p.a(r+s.c)),B.a.gk(p.a(q+s.d)),0)}}
A.ab.prototype={}
A.N.prototype={
gk(a){var s=this.a,r=this.b
return A.c6(new A.A(s,r).$s,s,r,B.c)},
t(a,b){var s,r,q,p
if(b==null)return!1
if(b instanceof A.N){s=b.a
r=b.b
q=this.a
p=this.b
p=A.c6(new A.A(s,r).$s,s,r,B.c)===A.c6(new A.A(q,p).$s,q,p,B.c)
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
A.by.prototype={
b5(a,b,c,d,e,f,g){var s,r=this,q=self.document
q.onfocus=A.ex(new A.c9(r))
q.onblur=A.ex(new A.ca(r))
q=r.r
q.tabIndex=-1
q.style.display="block"
q.style.outline="none"
s=q.getContext("2d")
if(s==null)s=t.m.a(s)
s.imageSmoothingEnabled=!1
A.aL(q,"focus",new A.cb(r),!1)
A.aL(q,"blur",new A.cc(r),!1)
b.style.display="flex"
b.style.alignItems="flex-start"
b.style.padding="0"
b.style.margin="0"
b.style.width="fit-content"
b.style.height="fit-content"
b.style.background="gray"
b.appendChild(q)
r.X(0)},
W(a,b){return new A.A(B.a.j(a,this.a),B.a.j(b,this.b))},
a2(){var s=this.w,r=s.getContext("2d")
if(r==null)r=t.m.a(r)
r.save()
r.beginPath()
r.clearRect(0,0,s.width,s.height)
r.restore()
return r},
a5(){var s=this.r.getContext("2d")
if(s==null)s=t.m.a(s)
s.save()
s.beginPath()
s.drawImage(this.w,0,0)
s.restore()
return s},
F(a,b,c,d){var s,r,q,p,o,n,m=this,l=a<0||a>=m.a||b<0||b>=m.b
if(l)return
s=m.W(a,b)
a=s.a
b=s.b
r=A.dy(b)
q=r.a
p=B.a.N(1,r.b)
l=m.x
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
l.fillStyle=m.f
o=m.c
n=m.d
l.fillRect(b*o,a*n,o,n)
l.restore()},
G(a,b,c,d,e){var s,r,q,p,o,n,m=this,l=a<0||a>=m.a||b<0||b>=m.b
if(l)return
s=m.W(a,b)
a=s.a
b=s.b
r=A.dy(b)
q=r.a
p=B.a.N(1,r.b)
l=m.x
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
o=m.c
n=m.d
l.fillRect(b*o,a*n,o,n)
l.restore()},
aW(a,b){var s,r,q,p,o=this.W(b,a)
b=o.a
s=A.dy(o.b)
r=s.a
q=B.a.N(1,s.b)
p=this.x
if(!(b>=0&&b<p.length))return A.d(p,b)
p=p[b]
if(!(r>=0&&r<p.length))return A.d(p,r)
return(p[r]&q)>>>0>0},
aS(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
if(b==null)b=A.dw(0,0,i.b,i.a,t.S)
i.a2()
s=b.a
if(s===0&&b.b===0&&b.c===i.b&&b.d===i.a){for(s=i.x,r=s.length,q=0;q<r;++q)for(p=0;o=s[q],p<o.length;++p){o.$flags&2&&A.b4(o)
o[p]=0}s=i.w
r=s.getContext("2d")
if(r==null)r=t.m.a(r)
r.save()
r.fillStyle=i.f
r.fillRect(0,0,s.width,s.height)
r.restore()}else{r=i.a
n=B.a.j(b.b,r)
o=i.b
m=B.a.j(s,o)
s=Math.abs(b.d)
l=Math.min(n+s,r)
k=Math.min(m+s,o)
for(s=i.w,q=n;q<l;++q){j=B.a.j(q,r)
for(p=m;p<k;++p)i.F(j,B.a.j(p,o),s,!1)}}i.a5()},
X(a){return this.aS(0,null)},
bm(a,b,c,d,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.a2()
s=e.W(a,b)
a=s.a
b=s.b
r=B.a.bq(1,a0)-1
for(q=a0-1,p=t.t,o=e.w,n=0;n<8;++n){m=c[n]
l=m&r
m=A.a([],p)
for(k=a+n,j=0;j<a0;++j){i=e.aW(b+j,k)?1:0
m.push(B.a.N(i,q-j))}h=B.e.bv(m,0,new A.c8())
switch(a1){case B.l:for(j=0;j<a0;++j){m=b+j
if((B.a.v(l,q-j)&1)>0)e.G(k,m,d,o,!1)
else e.F(k,m,o,!1)}break
case B.dF:for(j=0;j<a0;++j){m=b+j
if((B.a.v(l,q-j)&1)>0)e.F(k,m,o,!1)
else e.G(k,m,d,o,!1)}break
case B.dH:for(j=0;j<a0;++j){g=q-j
if((B.a.v(l,g)&1)>0&&(B.a.b2(h,g)&1)===0)e.G(k,b+j,d,o,!1)}break
case B.dG:for(j=0;j<a0;++j)if((B.a.v(l,q-j)&1)>0)e.G(k,b+j,d,o,!1)
break
case B.dI:for(f=l&h,j=0;j<a0;++j)if((B.a.v(f,q-j)&1)>0)e.G(k,b+j,d,o,!1)
break
case B.dJ:for(f=l&h,j=0;j<a0;++j)if((B.a.v(f,q-j)&1)>0)e.F(k,b+j,o,!1)
break
case B.dK:for(f=l&h,j=0;j<a0;++j)if((B.a.v(f,q-j)&1)===0)e.F(k,b+j,o,!1)
break
case B.dL:for(f=l&h,j=0;j<a0;++j){m=b+j
if((B.a.v(f,q-j)&1)===0)e.F(k,m,o,!1)
else e.G(k,m,d,o,!1)}break}}e.a5()},
aX(a,b,c){this.bm(c.a,c.b,b,a,8,B.l,!0,!1,!1)},
b1(a){var s,r,q,p,o,n,m,l,k=this,j=k.a
a=B.a.j(a,j)
for(s=j-a,r=k.x,q=r.length,p=0;p<s;++p){if(!(p<q))return A.d(r,p)
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
o[n]=0}}k.a2()
j=k.w
r=j.getContext("2d")
if(r==null)r=t.m.a(r)
r.save()
r.beginPath()
q=k.d
r.drawImage(k.r,0,-a*q)
r.fillStyle=k.f
r.fillRect(0,s*q,j.width,a*q)
r.restore()
k.a5()},
M(){var s=this.r
s.style.opacity="1.0"
s.focus()},
I(){var s=this.r
s.style.opacity="0.5"
s.blur()}}
A.c9.prototype={
$0(){this.a.y=!0},
$S:2}
A.ca.prototype={
$0(){this.a.y=!1},
$S:2}
A.cb.prototype={
$1(a){this.a.M()},
$S:1}
A.cc.prototype={
$1(a){this.a.I()},
$S:1}
A.c8.prototype={
$2(a,b){return(a|b)>>>0},
$S:18}
A.C.prototype={
aD(){return"Mode."+this.b}}
A.ac.prototype={
aD(){return"State."+this.b}}
A.ck.prototype={
b6(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=this,r=s.f
r.tabIndex=-1
A.aL(r,"focus",new A.cl(s),!1)
A.aL(r,"blur",new A.cm(s),!1)
A.aL(r,"keydown",new A.cn(s,l,new A.cr(),new A.cq(s)),!1)
A.aL(r,"click",new A.co(s,new A.cs(s),o),!1)
A.fF(new A.bb(3e5),new A.cp(s))
s.I()
s.X(0)},
gah(){return this.w.gah()},
gaf(){return this.w.gaf()},
ae(a,b){return new A.A(B.a.j(a,this.a),B.a.j(b,this.b))},
aF(){var s=this,r=s.x
s.CW.H(0,new A.N(r.c,r.d," ","white"))
s.aO()
s.cy=!1},
aO(){var s,r,q,p,o,n,m,l,k,j
for(s=this.CW,r=A.fP(s,s.r,s.$ti.c),q=this.w,p=this.cx,o=r.$ti.c;r.B();){n=r.d
if(n==null)n=o.a(n)
m=n.a
l=n.b
if(p.K(n.c)){k=p.n(0,n.c)
k.toString
j=k}else j=$.eW()
q.aX(n.d,j,new A.A(m*10,l*8))}if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.aG()}},
au(a,b){var s,r=this.ae(b,a)
b=r.a
a=r.b
s=this.ch
if(!(b>=0&&b<s.length))return A.d(s,b)
s=s[b]
if(!(a>=0&&a<s.length))return A.d(s,a)
return s[a].c},
C(){var s,r=this.x
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
m.d="white"}k.w.b1(10)},
Y(a,b,c,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a1==null?f.x.c:a1,d=f.ae(e,c==null?f.x.d:c)
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
e.c=B.a.j(e.c-1,s)}e.sJ(e.d+1)}f.aO()
if(a0)f.C()},
bA(a,b,c){return this.Y(a,b,null,c,null)},
ao(a,b){return this.Y(a,null,null,b,null)},
E(a,b){return this.Y(a,b,null,!0,null)},
aV(a){return this.Y(a,null,null,!0,null)},
X(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=t.S,f=A.dw(0,0,h.b,h.a,g)
for(s=f.b,r=f.d,q=f.$ti.c,p=q.a(s+r),o=f.a,n=f.c,m=o+n,l=h.ch,k=s;k<p;++k)for(q.a(m),j=o;j<m;++j){if(!(k<l.length))return A.d(l,k)
i=l[k]
if(!(j<i.length))return A.d(i,j)
i=i[j]
i.c=" "
i.d="white"}h.w.aS(0,A.dw(o*8,s*10,n*8,r*10,g))
g=h.x
g.c=B.a.j(s,g.a)
g.sJ(o)},
M(){return this.gah().$0()},
I(){return this.gaf().$0()}}
A.cs.prototype={
$1(a){var s=this.a,r=s.w,q=J.dX(a.offsetX),p=Math.max(Math.min(B.a.u(J.dX(a.offsetY)-1,r.d),r.a-1),0),o=Math.max(Math.min(B.a.u(q-1,r.c),r.b-1),0),n=B.a.A(p,10),m=B.a.A(o,8),l=s.au(m,n),k=s.ae(n,m),j=k.a,i=k.b
s=s.ch
if(!(j>=0&&j<s.length))return A.d(s,j)
s=s[j]
if(!(i>=0&&i<s.length))return A.d(s,i)
return new A.a7(n,m,l,s[i].d,p,o,r.aW(o,p))},
$S:19}
A.cr.prototype={
$1(a){return new A.a6()},
$S:20}
A.cq.prototype={
$0(){var s,r,q,p,o,n=this.a,m=n.a,l=n.b,k=new A.a9(m,l)
k.sp(n.y.gp())
s=A.a([],t.s)
for(r=n.z,q=r.b;p=k.c,o=k.d,p*l+o<r.c*q+r.d;p=k.c*l+k.d+1,k.c=B.a.j(B.a.u(p,l),m),k.d=B.a.j(p,l))s.push(n.au(o,p))
return B.e.by(s,"")},
$S:21}
A.cl.prototype={
$1(a){this.a.w.M()},
$S:1}
A.cm.prototype={
$1(a){this.a.w.I()},
$S:1}
A.cn.prototype={
$1(a){var s,r,q,p
a.preventDefault()
s=this.a
switch(s.ay){case B.d:break
case B.dM:r=s.at
if(r.d!=null){r.H(0,this.c.$1(a))
s.ay=B.d}break
case B.h:s.aF()
$label0$1:{q=a.keyCode
if(13===q){r=s.as
if(r.d!=null){r.H(0,J.f9(this.d.$0()))
s.C()
s.ay=B.d}break $label0$1}if(8===q){r=s.x
if(r.gp()>s.y.gp()){r.sp(r.gp()-1)
s.ao(" ",!1)
r.sp(r.gp()-1)}break $label0$1}p=a.key
if(p.length===1&&s.x.gp()<s.z.gp())s.ao(p,!1)}break
case B.n:break}},
$S:1}
A.co.prototype={
$1(a){var s
a.preventDefault()
s=this.a
if(s.ay===B.n&&s.ax.d!=null){s.ax.H(0,this.b.$1(a))
s.ay=B.d}},
$S:1}
A.cp.prototype={
$1(a){var s,r,q,p=this.a,o=p.w
if(o.y&&J.am(self.document.activeElement,o.r)&&p.ay===B.h)if(p.cy)p.aF()
else{s=p.x
r=s.c
s=s.d
q=$.eV()
o.aX("white",q,new A.A(r*10,s*8))
p.cy=!0}},
$S:22}
A.dp.prototype={}
A.bL.prototype={
ag(){var s=this,r=A.e4(null,t.H)
if(s.b==null)return r
s.aN()
s.d=s.b=null
return r},
an(a){var s,r=this
if(r.b==null)throw A.b(A.fC("Subscription has been canceled."))
r.aN()
s=A.eH(new A.cE(a),t.m)
s=s==null?null:A.ey(s)
r.d=s
r.aM()},
aM(){var s=this.d
if(s!=null)this.b.addEventListener(this.c,s,!1)},
aN(){var s=this.d
if(s!=null)this.b.removeEventListener(this.c,s,!1)}}
A.cD.prototype={
$1(a){return this.a.$1(a)},
$S:1}
A.cE.prototype={
$1(a){return this.a.$1(a)},
$S:1}
A.dh.prototype={
$0(){var s,r,q=this.a
q.X(0)
for(s=[" ","  _____ _   _    _____     _           _"," :     : :_: :  :   __:___: :_ ___ ___: :"," :  :  : : . :  :__   :  _:   : . : . : :"," :_____:_:___:  :_____:___:_:_:___:___:_:"," "," Welcome to Old School, a library for adding"," old school terminals to your html documents."," "," Input 'help' for help."," "],r=0;r<11;++r)q.E(s[r],"lightgreen")},
$S:0}
A.dd.prototype={
$0(){var s,r,q
for(s=[" "," Commands"," --------"," "," reset        Resets this demo."," help         Shows this information."," list         Lists the demos available."," info [demo]  Gives a description of [demo]."," load [demo]  Loads [demo] into this page."," "],r=this.a,q=0;q<10;++q)r.E(s[q],"lightgreen")},
$S:0}
A.df.prototype={
$0(){var s,r,q=t.s,p=A.a([" "," Demos"," -----"," "],q)
q=A.a([],q)
for(s=this.a,s=A.ft(s,s.r);s.B();)q.push(" - "+s.d)
B.e.aP(p,q)
p.push(" ")
q=p.length
s=this.b
r=0
for(;r<p.length;p.length===q||(0,A.bX)(p),++r)s.E(p[r],"lightgreen")},
$S:0}
A.de.prototype={
$1(a){var s,r,q,p,o=this.a
if(o.K(a)){s=t.s
r=A.a([" "],s)
s=A.a([],s)
for(o=o.n(0,a),q=o.length,p=0;p<o.length;o.length===q||(0,A.bX)(o),++p)s.push(" "+o[p])
B.e.aP(r,s)
r.push(" ")
o=r.length
s=this.b
p=0
for(;p<r.length;r.length===o||(0,A.bX)(r),++p)s.E(r[p],"lightgreen")}else{o=this.b
o.C()
o.E(" No demo called '"+a+"' found.","orange")
o.aV(" Input `list` to see available demos.")
o.C()}},
$S:7}
A.dg.prototype={
$1(a){var s
if(this.a.K(a))self.window.open(a+".html","_self")
else{s=this.b
s.C()
s.E(" No demo called '"+a+"' found.","orange")
s.aV(" Input `list` to see available demos.")
s.C()}},
$S:7};(function aliases(){var s=J.P.prototype
s.b4=s.h})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._static_2,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u
s(A,"hP","fK",3)
s(A,"hQ","fL",3)
s(A,"hR","fM",3)
r(A,"eJ","hJ",0)
s(A,"hS","hD",5)
q(A,"hT","hE",6)
p(A.k.prototype,"gaC","D",6)
o(A.aK.prototype,"gbk","bl",0)
var n
o(n=A.by.prototype,"gah","M",0)
o(n,"gaf","I",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.e,null)
q(A.e,[A.dr,J.be,J.b6,A.j,A.W,A.cd,A.bk,A.aq,A.ah,A.ba,A.cu,A.c5,A.ap,A.aT,A.ax,A.c3,A.bj,A.c1,A.cU,A.x,A.bM,A.bS,A.aV,A.bC,A.V,A.ad,A.bF,A.bE,A.R,A.k,A.bD,A.bJ,A.bN,A.aK,A.bQ,A.d1,A.aE,A.cT,A.ag,A.m,A.bb,A.cC,A.bv,A.aF,A.cF,A.c0,A.q,A.bR,A.bz,A.bP,A.N,A.a6,A.a7,A.a9,A.by,A.ck,A.dp,A.bL])
q(J.be,[J.bf,J.as,J.au,J.at,J.av,J.a5,J.X])
q(J.au,[J.P,J.o,A.bl,A.aA])
q(J.P,[J.bw,J.a_,J.O])
r(J.c2,J.o)
q(J.a5,[J.ar,J.bg])
q(A.j,[A.bi,A.G,A.bh,A.bB,A.bH,A.bx,A.bK,A.b7,A.y,A.aG,A.bA,A.Z,A.b9])
q(A.W,[A.bY,A.bZ,A.cj,A.d8,A.da,A.cz,A.cy,A.d2,A.cK,A.cR,A.ch,A.cg,A.cY,A.cb,A.cc,A.cs,A.cr,A.cl,A.cm,A.cn,A.co,A.cp,A.cD,A.cE,A.de,A.dg])
q(A.bY,[A.dj,A.cA,A.cB,A.d_,A.cZ,A.cG,A.cN,A.cM,A.cJ,A.cI,A.cH,A.cQ,A.cP,A.cO,A.ci,A.cf,A.cV,A.d4,A.d5,A.cX,A.c9,A.ca,A.cq,A.dh,A.dd,A.df])
r(A.bO,A.ah)
r(A.A,A.bO)
r(A.bc,A.ba)
r(A.aC,A.G)
q(A.cj,[A.ce,A.ao])
r(A.Y,A.ax)
r(A.aw,A.Y)
q(A.bZ,[A.d9,A.d3,A.d6,A.cL,A.c4,A.c8])
q(A.aA,[A.bm,A.a8])
q(A.a8,[A.aN,A.aP])
r(A.aO,A.aN)
r(A.ay,A.aO)
r(A.aQ,A.aP)
r(A.az,A.aQ)
q(A.ay,[A.bn,A.bo])
q(A.az,[A.bp,A.bq,A.br,A.bs,A.bt,A.aB,A.bu])
r(A.aW,A.bK)
r(A.aU,A.ad)
r(A.aJ,A.aU)
r(A.ae,A.aJ)
r(A.bG,A.bF)
r(A.aI,A.bG)
r(A.aH,A.bE)
r(A.bI,A.bJ)
r(A.cW,A.d1)
r(A.aS,A.aE)
r(A.aM,A.aS)
q(A.y,[A.aD,A.bd])
r(A.ab,A.bP)
q(A.cC,[A.C,A.ac])
s(A.aN,A.m)
s(A.aO,A.aq)
s(A.aP,A.m)
s(A.aQ,A.aq)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{c:"int",r:"double",ic:"num",w:"String",hU:"bool",q:"Null",i:"List",e:"Object",im:"Map"},mangledNames:{},types:["~()","~(l)","q()","~(~())","q(@)","~(@)","~(e,z)","~(w)","F<~>()","@(@)","@(@,w)","@(w)","q(~())","q(@,z)","~(c,@)","q(e,z)","k<@>(@)","~(e?,e?)","c(c,c)","a7(l)","a6(l)","w()","~(ct)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.A&&a.b(c.a)&&b.b(c.b)}}
A.h5(v.typeUniverse,JSON.parse('{"bw":"P","a_":"P","O":"P","bf":{"f":[]},"as":{"q":[],"f":[]},"au":{"l":[]},"P":{"l":[]},"o":{"i":["1"],"l":[]},"c2":{"o":["1"],"i":["1"],"l":[]},"a5":{"r":[]},"ar":{"r":[],"c":[],"f":[]},"bg":{"r":[],"f":[]},"X":{"w":[],"f":[]},"bi":{"j":[]},"aC":{"G":[],"j":[]},"bh":{"j":[]},"bB":{"j":[]},"aT":{"z":[]},"bH":{"j":[]},"bx":{"j":[]},"Y":{"ax":["1","2"]},"aw":{"Y":["1","2"],"ax":["1","2"]},"bl":{"l":[],"f":[]},"aA":{"l":[]},"bm":{"l":[],"f":[]},"a8":{"v":["1"],"l":[]},"ay":{"m":["r"],"i":["r"],"v":["r"],"l":[]},"az":{"m":["c"],"i":["c"],"v":["c"],"l":[]},"bn":{"m":["r"],"i":["r"],"v":["r"],"l":[],"f":[],"m.E":"r"},"bo":{"m":["r"],"i":["r"],"v":["r"],"l":[],"f":[],"m.E":"r"},"bp":{"m":["c"],"i":["c"],"v":["c"],"l":[],"f":[],"m.E":"c"},"bq":{"m":["c"],"i":["c"],"v":["c"],"l":[],"f":[],"m.E":"c"},"br":{"m":["c"],"i":["c"],"v":["c"],"l":[],"f":[],"m.E":"c"},"bs":{"m":["c"],"i":["c"],"v":["c"],"l":[],"f":[],"m.E":"c"},"bt":{"cw":[],"m":["c"],"i":["c"],"v":["c"],"l":[],"f":[],"m.E":"c"},"aB":{"m":["c"],"i":["c"],"v":["c"],"l":[],"f":[],"m.E":"c"},"bu":{"m":["c"],"i":["c"],"v":["c"],"l":[],"f":[],"m.E":"c"},"bK":{"j":[]},"aW":{"G":[],"j":[]},"k":{"F":["1"]},"aV":{"ct":[]},"V":{"j":[]},"ae":{"ad":["1"]},"aH":{"bE":["1"]},"aJ":{"ad":["1"]},"aU":{"ad":["1"]},"aM":{"aE":["1"]},"aS":{"aE":["1"]},"b7":{"j":[]},"G":{"j":[]},"y":{"j":[]},"aD":{"j":[]},"bd":{"j":[]},"aG":{"j":[]},"bA":{"j":[]},"Z":{"j":[]},"b9":{"j":[]},"bv":{"j":[]},"aF":{"j":[]},"bR":{"z":[]},"ab":{"bP":["1"]},"fo":{"i":["c"]},"fI":{"i":["c"]},"fH":{"i":["c"]},"fm":{"i":["c"]},"fG":{"i":["c"]},"fn":{"i":["c"]},"cw":{"i":["c"]},"fj":{"i":["r"]},"fk":{"i":["r"]}}'))
A.h4(v.typeUniverse,JSON.parse('{"aq":1,"ba":2,"bj":1,"a8":1,"aJ":1,"bG":1,"bF":1,"aU":1,"bJ":1,"bI":1,"bN":1,"aK":1,"bQ":1,"aS":1,"bL":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.dO
return{o:s("N"),Q:s("j"),Z:s("ik"),U:s("o<N>"),G:s("o<i<N>>"),f:s("o<e>"),s:s("o<w>"),w:s("o<cw>"),b:s("o<@>"),t:s("o<c>"),T:s("as"),m:s("l"),g:s("O"),p:s("v<@>"),V:s("a6"),a:s("i<w>"),j:s("i<@>"),q:s("a7"),P:s("q"),K:s("e"),L:s("io"),F:s("+()"),l:s("z"),N:s("w"),D:s("ct"),R:s("f"),c:s("G"),B:s("a_"),d:s("k<@>"),h:s("k<c>"),y:s("hU"),i:s("r"),z:s("@"),v:s("@(e)"),C:s("@(e,z)"),S:s("c"),A:s("0&*"),_:s("e*"),O:s("F<q>?"),X:s("e?"),n:s("ic"),H:s("~"),u:s("~(e)"),k:s("~(e,z)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.x=J.be.prototype
B.e=J.o.prototype
B.a=J.ar.prototype
B.y=J.a5.prototype
B.f=J.X.prototype
B.z=J.O.prototype
B.A=J.au.prototype
B.m=J.bw.prototype
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

B.v=new A.bv()
B.c=new A.cd()
B.b=new A.cW()
B.w=new A.bR()
B.Y=A.a(s([126,129,165,129,189,153,129,126]),t.t)
B.dB=A.a(s([126,255,219,255,195,231,255,126]),t.t)
B.Z=A.a(s([108,254,254,254,124,56,16,0]),t.t)
B.a_=A.a(s([16,56,124,254,124,56,16,0]),t.t)
B.bL=A.a(s([56,124,56,254,254,124,56,124]),t.t)
B.cl=A.a(s([16,16,56,124,254,124,56,124]),t.t)
B.cw=A.a(s([0,0,24,60,60,24,0,0]),t.t)
B.B=A.a(s([255,255,231,195,195,231,255,255]),t.t)
B.cH=A.a(s([0,60,102,66,66,102,60,0]),t.t)
B.dD=A.a(s([255,195,153,189,189,153,195,255]),t.t)
B.cS=A.a(s([15,7,15,125,204,204,204,120]),t.t)
B.d2=A.a(s([60,102,102,102,60,24,126,24]),t.t)
B.dd=A.a(s([63,51,63,48,48,112,240,224]),t.t)
B.dp=A.a(s([127,99,127,99,99,103,230,192]),t.t)
B.dC=A.a(s([153,90,60,231,231,60,90,153]),t.t)
B.a0=A.a(s([128,224,248,254,248,224,128,0]),t.t)
B.ab=A.a(s([2,14,62,254,62,14,2,0]),t.t)
B.am=A.a(s([24,60,126,24,24,126,60,24]),t.t)
B.ax=A.a(s([102,102,102,102,102,0,102,0]),t.t)
B.aI=A.a(s([127,219,219,123,27,27,27,0]),t.t)
B.aT=A.a(s([62,99,56,108,108,56,204,120]),t.t)
B.b3=A.a(s([0,0,0,0,126,126,126,0]),t.t)
B.F=A.a(s([24,60,126,24,126,60,24,255]),t.t)
B.be=A.a(s([24,60,126,24,24,24,24,0]),t.t)
B.bp=A.a(s([24,24,24,24,126,60,24,0]),t.t)
B.bA=A.a(s([0,24,12,254,12,24,0,0]),t.t)
B.bM=A.a(s([0,48,96,254,96,48,0,0]),t.t)
B.bX=A.a(s([0,0,192,192,192,254,0,0]),t.t)
B.D=A.a(s([0,36,102,255,102,36,0,0]),t.t)
B.dA=A.a(s([0,24,60,126,255,255,0,0]),t.t)
B.X=A.a(s([0,255,255,126,60,24,0,0]),t.t)
B.c7=A.a(s([0,0,0,0,0,0,0,0]),t.t)
B.ce=A.a(s([48,120,120,48,48,0,48,0]),t.t)
B.cf=A.a(s([108,108,108,0,0,0,0,0]),t.t)
B.cg=A.a(s([108,108,254,108,254,108,108,0]),t.t)
B.ch=A.a(s([48,124,192,120,12,248,48,0]),t.t)
B.ci=A.a(s([0,198,204,24,48,102,198,0]),t.t)
B.cj=A.a(s([56,108,56,118,220,204,118,0]),t.t)
B.ck=A.a(s([96,96,192,0,0,0,0,0]),t.t)
B.cm=A.a(s([24,48,96,96,96,48,24,0]),t.t)
B.cn=A.a(s([96,48,24,24,24,48,96,0]),t.t)
B.E=A.a(s([0,102,60,255,60,102,0,0]),t.t)
B.co=A.a(s([0,48,48,252,48,48,0,0]),t.t)
B.cp=A.a(s([0,0,0,0,0,48,48,96]),t.t)
B.cq=A.a(s([0,0,0,252,0,0,0,0]),t.t)
B.cr=A.a(s([0,0,0,0,0,48,48,0]),t.t)
B.cs=A.a(s([6,12,24,48,96,192,128,0]),t.t)
B.ct=A.a(s([124,198,206,222,246,230,124,0]),t.t)
B.cu=A.a(s([48,112,48,48,48,48,252,0]),t.t)
B.cv=A.a(s([120,204,12,56,96,204,252,0]),t.t)
B.cx=A.a(s([120,204,12,56,12,204,120,0]),t.t)
B.cy=A.a(s([28,60,108,204,254,12,30,0]),t.t)
B.cz=A.a(s([252,192,248,12,12,204,120,0]),t.t)
B.cA=A.a(s([56,96,192,248,204,204,120,0]),t.t)
B.cB=A.a(s([252,204,12,24,48,48,48,0]),t.t)
B.cC=A.a(s([120,204,204,120,204,204,120,0]),t.t)
B.cD=A.a(s([120,204,204,124,12,24,112,0]),t.t)
B.cE=A.a(s([0,48,48,0,0,48,48,0]),t.t)
B.cF=A.a(s([0,48,48,0,0,48,48,96]),t.t)
B.cG=A.a(s([24,48,96,192,96,48,24,0]),t.t)
B.cI=A.a(s([0,0,252,0,0,252,0,0]),t.t)
B.cJ=A.a(s([96,48,24,12,24,48,96,0]),t.t)
B.cK=A.a(s([120,204,12,24,48,0,48,0]),t.t)
B.cL=A.a(s([124,198,222,222,222,192,120,0]),t.t)
B.cM=A.a(s([48,120,204,204,252,204,204,0]),t.t)
B.cN=A.a(s([252,102,102,124,102,102,252,0]),t.t)
B.cO=A.a(s([60,102,192,192,192,102,60,0]),t.t)
B.cP=A.a(s([248,108,102,102,102,108,248,0]),t.t)
B.cQ=A.a(s([254,98,104,120,104,98,254,0]),t.t)
B.cR=A.a(s([254,98,104,120,104,96,240,0]),t.t)
B.cT=A.a(s([60,102,192,192,206,102,62,0]),t.t)
B.cU=A.a(s([204,204,204,252,204,204,204,0]),t.t)
B.cV=A.a(s([120,48,48,48,48,48,120,0]),t.t)
B.cW=A.a(s([30,12,12,12,204,204,120,0]),t.t)
B.cX=A.a(s([230,102,108,120,108,102,230,0]),t.t)
B.cY=A.a(s([240,96,96,96,98,102,254,0]),t.t)
B.cZ=A.a(s([198,238,254,254,214,198,198,0]),t.t)
B.d_=A.a(s([198,230,246,222,206,198,198,0]),t.t)
B.d0=A.a(s([56,108,198,198,198,108,56,0]),t.t)
B.d1=A.a(s([252,102,102,124,96,96,240,0]),t.t)
B.d3=A.a(s([120,204,204,204,220,120,28,0]),t.t)
B.d4=A.a(s([252,102,102,124,108,102,230,0]),t.t)
B.d5=A.a(s([120,204,224,112,28,204,120,0]),t.t)
B.d6=A.a(s([252,180,48,48,48,48,120,0]),t.t)
B.d7=A.a(s([204,204,204,204,204,204,252,0]),t.t)
B.d8=A.a(s([204,204,204,204,204,120,48,0]),t.t)
B.d9=A.a(s([198,198,198,214,254,238,198,0]),t.t)
B.da=A.a(s([198,198,108,56,56,108,198,0]),t.t)
B.db=A.a(s([204,204,204,120,48,48,120,0]),t.t)
B.dc=A.a(s([254,198,140,24,50,102,254,0]),t.t)
B.de=A.a(s([120,96,96,96,96,96,120,0]),t.t)
B.df=A.a(s([192,96,48,24,12,6,2,0]),t.t)
B.dg=A.a(s([120,24,24,24,24,24,120,0]),t.t)
B.dh=A.a(s([16,56,108,198,0,0,0,0]),t.t)
B.G=A.a(s([0,0,0,0,0,0,0,255]),t.t)
B.di=A.a(s([48,48,24,0,0,0,0,0]),t.t)
B.dj=A.a(s([0,0,120,12,124,204,118,0]),t.t)
B.dk=A.a(s([224,96,96,124,102,102,220,0]),t.t)
B.dl=A.a(s([0,0,120,204,192,204,120,0]),t.t)
B.dm=A.a(s([28,12,12,124,204,204,118,0]),t.t)
B.dn=A.a(s([0,0,120,204,252,192,120,0]),t.t)
B.dq=A.a(s([56,108,96,240,96,96,240,0]),t.t)
B.dr=A.a(s([0,0,118,204,204,124,12,248]),t.t)
B.ds=A.a(s([224,96,108,118,102,102,230,0]),t.t)
B.dt=A.a(s([48,0,112,48,48,48,120,0]),t.t)
B.du=A.a(s([12,0,12,12,12,204,204,120]),t.t)
B.dv=A.a(s([224,96,102,108,120,108,230,0]),t.t)
B.dw=A.a(s([112,48,48,48,48,48,120,0]),t.t)
B.dx=A.a(s([0,0,204,254,254,214,198,0]),t.t)
B.dy=A.a(s([0,0,248,204,204,204,204,0]),t.t)
B.dz=A.a(s([0,0,120,204,204,204,120,0]),t.t)
B.a1=A.a(s([0,0,220,102,102,124,96,240]),t.t)
B.a2=A.a(s([0,0,118,204,204,124,12,30]),t.t)
B.a3=A.a(s([0,0,220,118,102,96,240,0]),t.t)
B.a4=A.a(s([0,0,124,192,120,12,248,0]),t.t)
B.a5=A.a(s([16,48,124,48,48,52,24,0]),t.t)
B.a6=A.a(s([0,0,204,204,204,204,118,0]),t.t)
B.a7=A.a(s([0,0,204,204,204,120,48,0]),t.t)
B.a8=A.a(s([0,0,198,214,254,254,108,0]),t.t)
B.a9=A.a(s([0,0,198,108,56,108,198,0]),t.t)
B.aa=A.a(s([0,0,204,204,204,124,12,248]),t.t)
B.ac=A.a(s([0,0,252,152,48,100,252,0]),t.t)
B.ad=A.a(s([28,48,48,224,48,48,28,0]),t.t)
B.ae=A.a(s([24,24,24,0,24,24,24,0]),t.t)
B.af=A.a(s([224,48,48,28,48,48,224,0]),t.t)
B.ag=A.a(s([118,220,0,0,0,0,0,0]),t.t)
B.ah=A.a(s([0,16,56,108,198,198,254,0]),t.t)
B.ai=A.a(s([120,204,192,204,120,24,12,120]),t.t)
B.aj=A.a(s([0,204,0,204,204,204,126,0]),t.t)
B.ak=A.a(s([28,0,120,204,252,192,120,0]),t.t)
B.al=A.a(s([126,195,60,6,62,102,63,0]),t.t)
B.an=A.a(s([204,0,120,12,124,204,126,0]),t.t)
B.ao=A.a(s([224,0,120,12,124,204,126,0]),t.t)
B.ap=A.a(s([48,48,120,12,124,204,126,0]),t.t)
B.aq=A.a(s([0,0,120,192,192,120,12,56]),t.t)
B.ar=A.a(s([126,195,60,102,126,96,60,0]),t.t)
B.as=A.a(s([204,0,120,204,252,192,120,0]),t.t)
B.at=A.a(s([224,0,120,204,252,192,120,0]),t.t)
B.au=A.a(s([204,0,112,48,48,48,120,0]),t.t)
B.av=A.a(s([124,198,56,24,24,24,60,0]),t.t)
B.aw=A.a(s([224,0,112,48,48,48,120,0]),t.t)
B.ay=A.a(s([198,56,108,198,254,198,198,0]),t.t)
B.az=A.a(s([48,48,0,120,204,252,204,0]),t.t)
B.aA=A.a(s([28,0,252,96,120,96,252,0]),t.t)
B.aB=A.a(s([0,0,127,12,127,204,127,0]),t.t)
B.aC=A.a(s([62,108,204,254,204,204,206,0]),t.t)
B.aD=A.a(s([120,204,0,120,204,204,120,0]),t.t)
B.aE=A.a(s([0,204,0,120,204,204,120,0]),t.t)
B.aF=A.a(s([0,224,0,120,204,204,120,0]),t.t)
B.aG=A.a(s([120,204,0,204,204,204,126,0]),t.t)
B.aH=A.a(s([0,224,0,204,204,204,126,0]),t.t)
B.aJ=A.a(s([0,204,0,204,204,124,12,248]),t.t)
B.aK=A.a(s([195,24,60,102,102,60,24,0]),t.t)
B.aL=A.a(s([204,0,204,204,204,204,120,0]),t.t)
B.aM=A.a(s([24,24,126,192,192,126,24,24]),t.t)
B.aN=A.a(s([56,108,100,240,96,230,252,0]),t.t)
B.aO=A.a(s([204,204,120,252,48,252,48,48]),t.t)
B.aP=A.a(s([248,204,204,250,198,207,198,199]),t.t)
B.aQ=A.a(s([14,27,24,60,24,24,216,112]),t.t)
B.aR=A.a(s([28,0,120,12,124,204,126,0]),t.t)
B.aS=A.a(s([56,0,112,48,48,48,120,0]),t.t)
B.aU=A.a(s([0,28,0,120,204,204,120,0]),t.t)
B.aV=A.a(s([0,28,0,204,204,204,126,0]),t.t)
B.aW=A.a(s([0,248,0,248,204,204,204,0]),t.t)
B.aX=A.a(s([252,0,204,236,252,220,204,0]),t.t)
B.aY=A.a(s([60,108,108,62,0,126,0,0]),t.t)
B.aZ=A.a(s([56,108,108,56,0,124,0,0]),t.t)
B.b_=A.a(s([48,0,48,96,192,204,120,0]),t.t)
B.b0=A.a(s([0,0,0,252,192,192,0,0]),t.t)
B.b1=A.a(s([0,0,0,252,12,12,0,0]),t.t)
B.b2=A.a(s([195,198,204,222,51,102,204,15]),t.t)
B.b4=A.a(s([195,198,204,219,55,111,207,3]),t.t)
B.b5=A.a(s([24,24,0,24,24,24,24,0]),t.t)
B.b6=A.a(s([0,51,102,204,102,51,0,0]),t.t)
B.b7=A.a(s([0,204,102,51,102,204,0,0]),t.t)
B.b8=A.a(s([34,136,34,136,34,136,34,136]),t.t)
B.b9=A.a(s([85,170,85,170,85,170,85,170]),t.t)
B.ba=A.a(s([219,119,219,238,219,119,219,238]),t.t)
B.bb=A.a(s([24,24,24,24,24,24,24,24]),t.t)
B.bc=A.a(s([24,24,24,24,248,24,24,24]),t.t)
B.bd=A.a(s([24,24,248,24,248,24,24,24]),t.t)
B.bf=A.a(s([54,54,54,54,246,54,54,54]),t.t)
B.bg=A.a(s([0,0,0,0,254,54,54,54]),t.t)
B.bh=A.a(s([0,0,248,24,248,24,24,24]),t.t)
B.bi=A.a(s([54,54,246,6,246,54,54,54]),t.t)
B.bj=A.a(s([54,54,54,54,54,54,54,54]),t.t)
B.bk=A.a(s([0,0,254,6,246,54,54,54]),t.t)
B.bl=A.a(s([54,54,246,6,254,0,0,0]),t.t)
B.bm=A.a(s([54,54,54,54,254,0,0,0]),t.t)
B.bn=A.a(s([24,24,248,24,248,0,0,0]),t.t)
B.bo=A.a(s([0,0,0,0,248,24,24,24]),t.t)
B.bq=A.a(s([24,24,24,24,31,0,0,0]),t.t)
B.O=A.a(s([24,24,24,24,255,0,0,0]),t.t)
B.P=A.a(s([0,0,0,0,255,24,24,24]),t.t)
B.br=A.a(s([24,24,24,24,31,24,24,24]),t.t)
B.Q=A.a(s([0,0,0,0,255,0,0,0]),t.t)
B.R=A.a(s([24,24,24,24,255,24,24,24]),t.t)
B.bs=A.a(s([24,24,31,24,31,24,24,24]),t.t)
B.bt=A.a(s([54,54,54,54,55,54,54,54]),t.t)
B.bu=A.a(s([54,54,55,48,63,0,0,0]),t.t)
B.bv=A.a(s([0,0,63,48,55,54,54,54]),t.t)
B.H=A.a(s([54,54,247,0,255,0,0,0]),t.t)
B.I=A.a(s([0,0,255,0,247,54,54,54]),t.t)
B.bw=A.a(s([54,54,55,48,55,54,54,54]),t.t)
B.J=A.a(s([0,0,255,0,255,0,0,0]),t.t)
B.K=A.a(s([54,54,247,0,247,54,54,54]),t.t)
B.L=A.a(s([24,24,255,0,255,0,0,0]),t.t)
B.S=A.a(s([54,54,54,54,255,0,0,0]),t.t)
B.M=A.a(s([0,0,255,0,255,24,24,24]),t.t)
B.T=A.a(s([0,0,0,0,255,54,54,54]),t.t)
B.bx=A.a(s([54,54,54,54,63,0,0,0]),t.t)
B.by=A.a(s([24,24,31,24,31,0,0,0]),t.t)
B.bz=A.a(s([0,0,31,24,31,24,24,24]),t.t)
B.bB=A.a(s([0,0,0,0,63,54,54,54]),t.t)
B.U=A.a(s([54,54,54,54,255,54,54,54]),t.t)
B.N=A.a(s([24,24,255,24,255,24,24,24]),t.t)
B.bC=A.a(s([24,24,24,24,248,0,0,0]),t.t)
B.bD=A.a(s([0,0,0,0,31,24,24,24]),t.t)
B.C=A.a(s([255,255,255,255,255,255,255,255]),t.t)
B.W=A.a(s([0,0,0,0,255,255,255,255]),t.t)
B.bE=A.a(s([240,240,240,240,240,240,240,240]),t.t)
B.bF=A.a(s([15,15,15,15,15,15,15,15]),t.t)
B.V=A.a(s([255,255,255,255,0,0,0,0]),t.t)
B.bG=A.a(s([0,0,118,220,200,220,118,0]),t.t)
B.bH=A.a(s([0,120,204,248,204,248,192,192]),t.t)
B.bI=A.a(s([0,252,204,192,192,192,192,0]),t.t)
B.bJ=A.a(s([0,254,108,108,108,108,108,0]),t.t)
B.bK=A.a(s([252,204,96,48,96,204,252,0]),t.t)
B.bN=A.a(s([0,0,126,216,216,216,112,0]),t.t)
B.bO=A.a(s([0,102,102,102,102,124,96,192]),t.t)
B.bP=A.a(s([0,118,220,24,24,24,24,0]),t.t)
B.bQ=A.a(s([252,48,120,204,204,120,48,252]),t.t)
B.bR=A.a(s([56,108,198,254,198,108,56,0]),t.t)
B.bS=A.a(s([56,108,198,198,108,108,238,0]),t.t)
B.bT=A.a(s([28,48,24,124,204,204,120,0]),t.t)
B.bU=A.a(s([0,0,126,219,219,126,0,0]),t.t)
B.bV=A.a(s([6,12,126,219,219,126,96,192]),t.t)
B.bW=A.a(s([56,96,192,248,192,96,56,0]),t.t)
B.bY=A.a(s([120,204,204,204,204,204,204,0]),t.t)
B.bZ=A.a(s([0,252,0,252,0,252,0,0]),t.t)
B.c_=A.a(s([48,48,252,48,48,0,252,0]),t.t)
B.c0=A.a(s([96,48,24,48,96,0,252,0]),t.t)
B.c1=A.a(s([24,48,96,48,24,0,252,0]),t.t)
B.c2=A.a(s([14,27,27,24,24,24,24,24]),t.t)
B.c3=A.a(s([24,24,24,24,24,216,216,112]),t.t)
B.c4=A.a(s([48,48,0,252,0,48,48,0]),t.t)
B.c5=A.a(s([0,118,220,0,118,220,0,0]),t.t)
B.c6=A.a(s([56,108,108,56,0,0,0,0]),t.t)
B.c8=A.a(s([0,0,0,24,24,0,0,0]),t.t)
B.c9=A.a(s([0,0,0,0,24,0,0,0]),t.t)
B.ca=A.a(s([15,12,12,12,236,108,60,28]),t.t)
B.cb=A.a(s([120,108,108,108,108,0,0,0]),t.t)
B.cc=A.a(s([112,24,48,96,120,0,0,0]),t.t)
B.cd=A.a(s([0,0,60,60,60,60,0,0]),t.t)
B.dE=new A.bc(["\u263a",B.Y,"\u263b",B.dB,"\u2665",B.Z,"\u2666",B.a_,"\u2663",B.bL,"\u2660",B.cl,"\u2022",B.cw,"\u25d8",B.B,"\u25cb",B.cH,"\u25d9",B.dD,"\u2642",B.cS,"\u2640",B.d2,"\u266a",B.dd,"\u266b",B.dp,"\u263c",B.dC,"\u25ba",B.a0,"\u25c4",B.ab,"\u2195",B.am,"\u203c",B.ax,"\xb6",B.aI,"\xa7",B.aT,"\u25ac",B.b3,"\u21a8",B.F,"\u2191",B.be,"\u2193",B.bp,"\u2192",B.bA,"\u2190",B.bM,"\u221f",B.bX,"\u2194",B.D,"\u25b2",B.dA,"\u25bc",B.X," ",B.c7,"!",B.ce,'"',B.cf,"#",B.cg,"$",B.ch,"%",B.ci,"&",B.cj,"'",B.ck,"(",B.cm,")",B.cn,"*",B.E,"+",B.co,",",B.cp,"-",B.cq,".",B.cr,"/",B.cs,"0",B.ct,"1",B.cu,"2",B.cv,"3",B.cx,"4",B.cy,"5",B.cz,"6",B.cA,"7",B.cB,"8",B.cC,"9",B.cD,":",B.cE,";",B.cF,"<",B.cG,"=",B.cI,">",B.cJ,"?",B.cK,"@",B.cL,"A",B.cM,"B",B.cN,"C",B.cO,"D",B.cP,"E",B.cQ,"F",B.cR,"G",B.cT,"H",B.cU,"I",B.cV,"J",B.cW,"K",B.cX,"L",B.cY,"M",B.cZ,"N",B.d_,"O",B.d0,"P",B.d1,"Q",B.d3,"R",B.d4,"S",B.d5,"T",B.d6,"U",B.d7,"V",B.d8,"W",B.d9,"X",B.da,"Y",B.db,"Z",B.dc,"[",B.de,"\\",B.df,"]",B.dg,"^",B.dh,"_",B.G,"`",B.di,"a",B.dj,"b",B.dk,"c",B.dl,"d",B.dm,"e",B.dn,"f",B.dq,"g",B.dr,"h",B.ds,"i",B.dt,"j",B.du,"k",B.dv,"l",B.dw,"m",B.dx,"n",B.dy,"o",B.dz,"p",B.a1,"q",B.a2,"r",B.a3,"s",B.a4,"t",B.a5,"u",B.a6,"v",B.a7,"w",B.a8,"x",B.a9,"y",B.aa,"z",B.ac,"{",B.ad,"|",B.ae,"}",B.af,"~",B.ag,"\u2302",B.ah,"\xc7",B.ai,"\xfc",B.aj,"\xe9",B.ak,"\xe2",B.al,"\xe4",B.an,"\xe0",B.ao,"\xe5",B.ap,"\xe7",B.aq,"\xea",B.ar,"\xeb",B.as,"\xe8",B.at,"\xef",B.au,"\xee",B.av,"\xec",B.aw,"\xc4",B.ay,"\xc5",B.az,"\xc9",B.aA,"\xe6",B.aB,"\xc6",B.aC,"\xf4",B.aD,"\xf6",B.aE,"\xf2",B.aF,"\xfb",B.aG,"\xf9",B.aH,"\xff",B.aJ,"\xd6",B.aK,"\xdc",B.aL,"\xa2",B.aM,"\xa3",B.aN,"\xa5",B.aO,"\u20a7",B.aP,"\u0192",B.aQ,"\xe1",B.aR,"\xed",B.aS,"\xf3",B.aU,"\xfa",B.aV,"\xf1",B.aW,"\xd1",B.aX,"\xaa",B.aY,"\xba",B.aZ,"\xbf",B.b_,"\u2310",B.b0,"\xac",B.b1,"\xbd",B.b2,"\xbc",B.b4,"\xa1",B.b5,"\xab",B.b6,"\xbb",B.b7,"\u2591",B.b8,"\u2592",B.b9,"\u2593",B.ba,"\u2502",B.bb,"\u2524",B.bc,"\u2561",B.bd,"\u2562",B.bf,"\u2556",B.bg,"\u2555",B.bh,"\u2563",B.bi,"\u2551",B.bj,"\u2557",B.bk,"\u255d",B.bl,"\u255c",B.bm,"\u255b",B.bn,"\u2510",B.bo,"\u2514",B.bq,"\u2534",B.O,"\u252c",B.P,"\u251c",B.br,"\u2500",B.Q,"\u253c",B.R,"\u255e",B.bs,"\u255f",B.bt,"\u255a",B.bu,"\u2554",B.bv,"\u2569",B.H,"\u2566",B.I,"\u2560",B.bw,"\u2550",B.J,"\u256c",B.K,"\u2567",B.L,"\u2568",B.S,"\u2564",B.M,"\u2565",B.T,"\u2559",B.bx,"\u2558",B.by,"\u2552",B.bz,"\u2553",B.bB,"\u256b",B.U,"\u256a",B.N,"\u2518",B.bC,"\u250c",B.bD,"\u2588",B.C,"\u2584",B.W,"\u258c",B.bE,"\u2590",B.bF,"\u2580",B.V,"\u03b1",B.bG,"\xdf",B.bH,"\u0393",B.bI,"\u03c0",B.bJ,"\u03a3",B.bK,"\u03c3",B.bN,"\xb5",B.bO,"\u03c4",B.bP,"\u03a6",B.bQ,"\u0398",B.bR,"\u03a9",B.bS,"\u03b4",B.bT,"\u221e",B.bU,"\u03c6",B.bV,"\u03b5",B.bW,"\u2229",B.bY,"\u2261",B.bZ,"\xb1",B.c_,"\u2265",B.c0,"\u2264",B.c1,"\u2320",B.c2,"\u2321",B.c3,"\xf7",B.c4,"\u2248",B.c5,"\xb0",B.c6,"\u2219",B.c8,"\xb7",B.c9,"\u221a",B.ca,"\u207f",B.cb,"\xb2",B.cc,"\u25a0",B.cd],A.dO("bc<w,i<c>>"))
B.l=new A.C("replace")
B.dF=new A.C("inverse")
B.dG=new A.C("over")
B.dH=new A.C("under")
B.dI=new A.C("stain")
B.dJ=new A.C("delete")
B.dK=new A.C("maskDestination")
B.dL=new A.C("maskSource")
B.d=new A.ac("ready")
B.dM=new A.ac("awaitingKey")
B.h=new A.ac("awaitingString")
B.n=new A.ac("awaitingMouseClick")
B.dN=A.B("ih")
B.dO=A.B("ii")
B.dP=A.B("fj")
B.dQ=A.B("fk")
B.dR=A.B("fm")
B.dS=A.B("fn")
B.dT=A.B("fo")
B.dU=A.B("e")
B.dV=A.B("fG")
B.dW=A.B("cw")
B.dX=A.B("fH")
B.dY=A.B("fI")})();(function staticFields(){$.cS=null
$.L=A.a([],t.f)
$.e6=null
$.e0=null
$.e_=null
$.eO=null
$.eI=null
$.eS=null
$.d7=null
$.db=null
$.dQ=null
$.aR=A.a([],A.dO("o<i<e>?>"))
$.ai=null
$.b0=null
$.b1=null
$.dJ=!1
$.h=B.b})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"ij","dk",()=>A.i1("_$dart_dartClosure"))
s($,"iU","f6",()=>B.b.aY(new A.dj()))
s($,"is","eX",()=>A.H(A.cv({
toString:function(){return"$receiver$"}})))
s($,"it","eY",()=>A.H(A.cv({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"iu","eZ",()=>A.H(A.cv(null)))
s($,"iv","f_",()=>A.H(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"iy","f2",()=>A.H(A.cv(void 0)))
s($,"iz","f3",()=>A.H(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"ix","f1",()=>A.H(A.ee(null)))
s($,"iw","f0",()=>A.H(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"iB","f5",()=>A.H(A.ee(void 0)))
s($,"iA","f4",()=>A.H(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"iC","dV",()=>A.fJ())
s($,"il","dl",()=>$.f6())
s($,"iS","dm",()=>A.dS(B.dU))
s($,"ir","eW",()=>A.dt(8,0,t.S))
s($,"iq","eV",()=>A.dt(8,255,t.S))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.bl,ArrayBufferView:A.aA,DataView:A.bm,Float32Array:A.bn,Float64Array:A.bo,Int16Array:A.bp,Int32Array:A.bq,Int8Array:A.br,Uint16Array:A.bs,Uint32Array:A.bt,Uint8ClampedArray:A.aB,CanvasPixelArray:A.aB,Uint8Array:A.bu})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.a8.$nativeSuperclassTag="ArrayBufferView"
A.aN.$nativeSuperclassTag="ArrayBufferView"
A.aO.$nativeSuperclassTag="ArrayBufferView"
A.ay.$nativeSuperclassTag="ArrayBufferView"
A.aP.$nativeSuperclassTag="ArrayBufferView"
A.aQ.$nativeSuperclassTag="ArrayBufferView"
A.az.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$1$1=function(a){return this(a)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q){s[q].removeEventListener("load",onLoad,false)}a(b.target)}for(var r=0;r<s.length;++r){s[r].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var s=A.dc
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=index.js.map
