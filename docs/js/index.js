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
if(a[b]!==s){A.is(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.f(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.dQ(b)
return new s(c,this)}:function(){if(s===null)s=A.dQ(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.dQ(a).prototype
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
dR(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.dS==null){A.ik()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.c(A.ee("Return interceptor for "+A.n(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.cV
if(o==null)o=$.cV=A.dd(n)
p=q[o]}if(p!=null)return p
p=A.ip(a)
if(p!=null)return p
if(typeof a=="function")return B.y
s=Object.getPrototypeOf(a)
if(s==null)return B.k
if(s===Object.prototype)return B.k
if(typeof q=="function"){o=$.cV
if(o==null)o=$.cV=A.dd(n)
Object.defineProperty(q,o,{value:B.h,enumerable:false,writable:true,configurable:true})
return B.h}return B.h},
e5(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
fr(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.e5(r))break;++b}return b},
fs(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.b(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.e5(q))break}return b},
a1(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.au.prototype
return J.bq.prototype}if(typeof a=="string")return J.T.prototype
if(a==null)return J.av.prototype
if(typeof a=="boolean")return J.bp.prototype
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.L.prototype
if(typeof a=="symbol")return J.ay.prototype
if(typeof a=="bigint")return J.aw.prototype
return a}if(a instanceof A.d)return a
return J.dR(a)},
eK(a){if(typeof a=="string")return J.T.prototype
if(a==null)return a
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.L.prototype
if(typeof a=="symbol")return J.ay.prototype
if(typeof a=="bigint")return J.aw.prototype
return a}if(a instanceof A.d)return a
return J.dR(a)},
ie(a){if(a==null)return a
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.L.prototype
if(typeof a=="symbol")return J.ay.prototype
if(typeof a=="bigint")return J.aw.prototype
return a}if(a instanceof A.d)return a
return J.dR(a)},
ig(a){if(typeof a=="number")return J.a6.prototype
if(a==null)return a
if(!(a instanceof A.d))return J.W.prototype
return a},
ih(a){if(typeof a=="string")return J.T.prototype
if(a==null)return a
if(!(a instanceof A.d))return J.W.prototype
return a},
ao(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.a1(a).v(a,b)},
F(a){return J.a1(a).gk(a)},
f7(a){return J.ie(a).gu(a)},
dX(a){return J.eK(a).gm(a)},
f8(a){return J.a1(a).gl(a)},
dY(a){return J.ig(a).bJ(a)},
bd(a){return J.a1(a).h(a)},
f9(a){return J.ih(a).aX(a)},
bn:function bn(){},
bp:function bp(){},
av:function av(){},
ax:function ax(){},
M:function M(){},
bD:function bD(){},
W:function W(){},
L:function L(){},
aw:function aw(){},
ay:function ay(){},
o:function o(a){this.$ti=a},
bo:function bo(){},
c6:function c6(a){this.$ti=a},
be:function be(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
a6:function a6(){},
au:function au(){},
bq:function bq(){},
T:function T(){}},A={dx:function dx(){},
fu(a){return new A.aA("Field '"+a+"' has not been initialized.")},
N(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
dF(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
dP(a,b,c){return a},
dT(a){var s,r
for(s=$.x.length,r=0;r<s;++r)if(a===$.x[r])return!0
return!1},
fo(){return new A.V("No element")},
aA:function aA(a){this.a=a},
dq:function dq(){},
ci:function ci(){},
aq:function aq(){},
aB:function aB(){},
a8:function a8(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ar:function ar(a){this.$ti=a},
bk:function bk(){},
at:function at(){},
eS(a){var s=A.eR(a)
if(s!=null)return s
return"minified:"+a},
iT(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
n(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.bd(a)
return s},
ad(a){var s,r=$.e6
if(r==null)r=$.e6=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
bE(a){var s,r,q,p
if(a instanceof A.d)return A.w(A.bb(a),null)
s=J.a1(a)
if(s===B.w||s===B.z||t.A.b(a)){r=B.i(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.w(A.bb(a),null)},
e7(a){var s,r,q
if(a==null||typeof a=="number"||A.dL(a))return J.bd(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.R)return a.h(0)
if(a instanceof A.ah)return a.aH(!0)
s=$.f5()
for(r=0;r<1;++r){q=s[r].bK(a)
if(q!=null)return q}return"Instance of '"+A.bE(a)+"'"},
fy(a){var s=a.$thrownJsError
if(s==null)return null
return A.a2(s)},
fz(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.q(a,s)
a.$thrownJsError=s
s.stack=b.h(0)}},
b(a,b){if(a==null)J.dX(a)
throw A.c(A.ic(a,b))},
ic(a,b){var s,r="index",q=null
if(!A.ew(b))return new A.E(!0,b,r,q)
s=J.dX(a)
if(b<0||b>=s)return A.dv(b,s,a,q,r)
return new A.aI(q,q,!0,b,r,"Value not in range")},
dO(a){return new A.E(!0,a,null,null)},
c(a){return A.q(a,new Error())},
q(a,b){var s
if(a==null)a=new A.H()
b.dartException=a
s=A.it
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
it(){return J.bd(this.dartException)},
c0(a,b){throw A.q(a,b==null?new Error():b)},
bc(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.c0(A.hu(a,b,c),s)},
hu(a,b,c){var s,r,q,p,o,n,m,l,k
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
c_(a){throw A.c(A.a5(a))},
I(a){var s,r,q,p,o,n
a=A.ir(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.f([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.cA(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
cB(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
ed(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
dy(a,b){var s=b==null,r=s?null:b.method
return new A.br(a,r,s?null:b.receiver)},
an(a){if(a==null)return new A.ca(a)
if(a instanceof A.as)return A.Q(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.Q(a,a.dartException)
return A.i2(a)},
Q(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
i2(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.a.bq(r,16)&8191)===10)switch(q){case 438:return A.Q(a,A.dy(A.n(s)+" (Error "+q+")",null))
case 445:case 5007:A.n(s)
return A.Q(a,new A.aH())}}if(a instanceof TypeError){p=$.eW()
o=$.eX()
n=$.eY()
m=$.eZ()
l=$.f1()
k=$.f2()
j=$.f0()
$.f_()
i=$.f4()
h=$.f3()
g=p.t(s)
if(g!=null)return A.Q(a,A.dy(s,g))
else{g=o.t(s)
if(g!=null){g.method="call"
return A.Q(a,A.dy(s,g))}else if(n.t(s)!=null||m.t(s)!=null||l.t(s)!=null||k.t(s)!=null||j.t(s)!=null||m.t(s)!=null||i.t(s)!=null||h.t(s)!=null)return A.Q(a,new A.aH())}return A.Q(a,new A.bJ(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.aL()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.Q(a,new A.E(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.aL()
return a},
a2(a){var s
if(a instanceof A.as)return a.b
if(a==null)return new A.b_(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.b_(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
dV(a){if(a==null)return J.F(a)
if(typeof a=="object")return A.ad(a)
return J.F(a)},
i9(a){if(typeof a=="number")return B.x.gk(a)
if(a instanceof A.bX)return A.ad(a)
if(a instanceof A.ah)return a.gk(a)
return A.dV(a)},
eJ(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=a.length
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
hD(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.c(new A.cJ("Unsupported number of arguments for wrapped closure"))},
bZ(a,b){var s=a.$identity
if(!!s)return s
s=A.ia(a,b)
a.$identity=s
return s},
ia(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.hD)},
fg(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.cj().constructor.prototype):Object.create(new A.ap(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.e3(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.fc(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.e3(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
fc(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.c("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.fa)}throw A.c("Error in functionType of tearoff")},
fd(a,b,c,d){var s=A.e2
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
e3(a,b,c,d){if(c)return A.ff(a,b,d)
return A.fd(b.length,d,a,b)},
fe(a,b,c,d){var s=A.e2,r=A.fb
switch(b?-1:a){case 0:throw A.c(new A.bF("Intercepted function with no arguments."))
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
if($.e0==null)$.e0=A.e_("interceptor")
if($.e1==null)$.e1=A.e_("receiver")
s=b.length
r=A.fe(s,c,a,b)
return r},
dQ(a){return A.fg(a)},
fa(a,b){return A.b6(v.typeUniverse,A.bb(a.a),b)},
e2(a){return a.a},
fb(a){return a.b},
e_(a){var s,r,q,p=new A.ap("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.c(A.a4("Field name "+a+" not found.",null))},
dd(a){return v.getIsolateTag(a)},
ip(a){var s,r,q,p,o,n=$.eM.$1(a),m=$.db[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.dh[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.eE.$2(a,n)
if(q!=null){m=$.db[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.dh[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.dp(s)
$.db[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.dh[n]=s
return s}if(p==="-"){o=A.dp(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.eO(a,s)
if(p==="*")throw A.c(A.ee(n))
if(v.leafTags[n]===true){o=A.dp(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.eO(a,s)},
eO(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.dU(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
dp(a){return J.dU(a,!1,null,!!a.$iv)},
iq(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.dp(s)
else return J.dU(s,c,null,null)},
ik(){if(!0===$.dS)return
$.dS=!0
A.il()},
il(){var s,r,q,p,o,n,m,l
$.db=Object.create(null)
$.dh=Object.create(null)
A.ij()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.eP.$1(o)
if(n!=null){m=A.iq(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
ij(){var s,r,q,p,o,n,m=B.n()
m=A.al(B.o,A.al(B.p,A.al(B.j,A.al(B.j,A.al(B.q,A.al(B.r,A.al(B.t(B.i),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.eM=new A.de(p)
$.eE=new A.df(o)
$.eP=new A.dg(n)},
al(a,b){return a(b)||b},
ib(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
ft(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.c(new A.c4("Illegal RegExp pattern ("+String(o)+")",a))},
ir(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
C:function C(a,b){this.a=a
this.b=b},
bi:function bi(){},
bl:function bl(a,b){this.a=a
this.$ti=b},
aJ:function aJ(){},
cA:function cA(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aH:function aH(){},
br:function br(a,b,c){this.a=a
this.b=b
this.c=c},
bJ:function bJ(a){this.a=a},
ca:function ca(a){this.a=a},
as:function as(a,b){this.a=a
this.b=b},
b_:function b_(a){this.a=a
this.b=null},
R:function R(){},
c1:function c1(){},
c2:function c2(){},
co:function co(){},
cj:function cj(){},
ap:function ap(a,b){this.a=a
this.b=b},
bF:function bF(a){this.a=a},
U:function U(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
c7:function c7(a,b){this.a=a
this.b=b
this.c=null},
bs:function bs(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
az:function az(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
de:function de(a){this.a=a},
df:function df(a){this.a=a},
dg:function dg(a){this.a=a},
ah:function ah(){},
bU:function bU(){},
c5:function c5(a,b){var _=this
_.a=a
_.b=b
_.e=_.c=null},
cX:function cX(a){this.b=a},
aa:function aa(){},
aF:function aF(){},
bt:function bt(){},
ab:function ab(){},
aD:function aD(){},
aE:function aE(){},
bu:function bu(){},
bv:function bv(){},
bw:function bw(){},
bx:function bx(){},
by:function by(){},
bz:function bz(){},
bA:function bA(){},
aG:function aG(){},
bB:function bB(){},
aU:function aU(){},
aV:function aV(){},
aW:function aW(){},
aX:function aX(){},
dC(a,b){var s=b.c
return s==null?b.c=A.b4(a,"G",[b.x]):s},
e9(a){var s=a.w
if(s===6||s===7)return A.e9(a.x)
return s===11||s===12},
fC(a){return a.as},
dc(a){return A.d3(v.typeUniverse,a,!1)},
a_(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.a_(a1,s,a3,a4)
if(r===s)return a2
return A.em(a1,r,!0)
case 7:s=a2.x
r=A.a_(a1,s,a3,a4)
if(r===s)return a2
return A.el(a1,r,!0)
case 8:q=a2.y
p=A.ak(a1,q,a3,a4)
if(p===q)return a2
return A.b4(a1,a2.x,p)
case 9:o=a2.x
n=A.a_(a1,o,a3,a4)
m=a2.y
l=A.ak(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.dH(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.ak(a1,j,a3,a4)
if(i===j)return a2
return A.en(a1,k,i)
case 11:h=a2.x
g=A.a_(a1,h,a3,a4)
f=a2.y
e=A.i_(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.ek(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.ak(a1,d,a3,a4)
o=a2.x
n=A.a_(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.dI(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.c(A.bg("Attempted to substitute unexpected RTI kind "+a0))}},
ak(a,b,c,d){var s,r,q,p,o=b.length,n=A.d4(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.a_(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
i0(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.d4(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.a_(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
i_(a,b,c,d){var s,r=b.a,q=A.ak(a,r,c,d),p=b.b,o=A.ak(a,p,c,d),n=b.c,m=A.i0(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.bS()
s.a=q
s.b=o
s.c=m
return s},
f(a,b){a[v.arrayRti]=b
return a},
eH(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.ii(s)
return a.$S()}return null},
im(a,b){var s
if(A.e9(b))if(a instanceof A.R){s=A.eH(a)
if(s!=null)return s}return A.bb(a)},
bb(a){if(a instanceof A.d)return A.b8(a)
if(Array.isArray(a))return A.dJ(a)
return A.dK(J.a1(a))},
dJ(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
b8(a){var s=a.$ti
return s!=null?s:A.dK(a)},
dK(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.hB(a,s)},
hB(a,b){var s=a instanceof A.R?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.h7(v.typeUniverse,s.name)
b.$ccache=r
return r},
ii(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.d3(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
eL(a){return A.a0(A.b8(a))},
dN(a){var s
if(a instanceof A.ah)return A.id(a.$r,a.aA())
s=a instanceof A.R?A.eH(a):null
if(s!=null)return s
if(t.R.b(a))return J.f8(a).a
if(Array.isArray(a))return A.dJ(a)
return A.bb(a)},
a0(a){var s=a.r
return s==null?a.r=new A.bX(a):s},
id(a,b){var s,r,q=b,p=q.length
if(p===0)return t.F
if(0>=p)return A.b(q,0)
s=A.b6(v.typeUniverse,A.dN(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.b(q,r)
s=A.ep(v.typeUniverse,s,A.dN(q[r]))}return A.b6(v.typeUniverse,s,a)},
D(a){return A.a0(A.d3(v.typeUniverse,a,!1))},
hA(a){var s=this
s.b=A.hY(s)
return s.b(a)},
hY(a){var s,r,q,p
if(a===t.K)return A.hJ
if(A.a3(a))return A.hN
s=a.w
if(s===6)return A.hy
if(s===1)return A.ey
if(s===7)return A.hE
r=A.hX(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.a3)){a.f="$i"+q
if(q==="h")return A.hH
if(a===t.m)return A.hG
return A.hM}}else if(s===10){p=A.ib(a.x,a.y)
return p==null?A.ey:p}return A.hw},
hX(a){if(a.w===8){if(a===t.S)return A.ew
if(a===t.i||a===t.H)return A.hI
if(a===t.N)return A.hL
if(a===t.y)return A.dL}return null},
hz(a){var s=this,r=A.hv
if(A.a3(s))r=A.hl
else if(s===t.K)r=A.hi
else if(A.am(s)){r=A.hx
if(s===t.J)r=A.he
else if(s===t.x)r=A.hk
else if(s===t.u)r=A.ha
else if(s===t.M)r=A.hh
else if(s===t.I)r=A.hc
else if(s===t.B)r=A.hf}else if(s===t.S)r=A.hd
else if(s===t.N)r=A.hj
else if(s===t.y)r=A.h9
else if(s===t.H)r=A.hg
else if(s===t.i)r=A.hb
else if(s===t.m)r=A.Z
s.a=r
return s.a(a)},
hw(a){var s=this
if(a==null)return A.am(s)
return A.io(v.typeUniverse,A.im(a,s),s)},
hy(a){if(a==null)return!0
return this.x.b(a)},
hM(a){var s,r=this
if(a==null)return A.am(r)
s=r.f
if(a instanceof A.d)return!!a[s]
return!!J.a1(a)[s]},
hH(a){var s,r=this
if(a==null)return A.am(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.d)return!!a[s]
return!!J.a1(a)[s]},
hG(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.d)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
ex(a){if(typeof a=="object"){if(a instanceof A.d)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
hv(a){var s=this
if(a==null){if(A.am(s))return a}else if(s.b(a))return a
throw A.q(A.es(a,s),new Error())},
hx(a){var s=this
if(a==null||s.b(a))return a
throw A.q(A.es(a,s),new Error())},
es(a,b){return new A.b2("TypeError: "+A.eg(a,A.w(b,null)))},
eg(a,b){return A.c3(a)+": type '"+A.w(A.dN(a),null)+"' is not a subtype of type '"+b+"'"},
z(a,b){return new A.b2("TypeError: "+A.eg(a,b))},
hE(a){var s=this
return s.x.b(a)||A.dC(v.typeUniverse,s).b(a)},
hJ(a){return a!=null},
hi(a){if(a!=null)return a
throw A.q(A.z(a,"Object"),new Error())},
hN(a){return!0},
hl(a){return a},
ey(a){return!1},
dL(a){return!0===a||!1===a},
h9(a){if(!0===a)return!0
if(!1===a)return!1
throw A.q(A.z(a,"bool"),new Error())},
ha(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.q(A.z(a,"bool?"),new Error())},
hb(a){if(typeof a=="number")return a
throw A.q(A.z(a,"double"),new Error())},
hc(a){if(typeof a=="number")return a
if(a==null)return a
throw A.q(A.z(a,"double?"),new Error())},
ew(a){return typeof a=="number"&&Math.floor(a)===a},
hd(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.q(A.z(a,"int"),new Error())},
he(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.q(A.z(a,"int?"),new Error())},
hI(a){return typeof a=="number"},
hg(a){if(typeof a=="number")return a
throw A.q(A.z(a,"num"),new Error())},
hh(a){if(typeof a=="number")return a
if(a==null)return a
throw A.q(A.z(a,"num?"),new Error())},
hL(a){return typeof a=="string"},
hj(a){if(typeof a=="string")return a
throw A.q(A.z(a,"String"),new Error())},
hk(a){if(typeof a=="string")return a
if(a==null)return a
throw A.q(A.z(a,"String?"),new Error())},
Z(a){if(A.ex(a))return a
throw A.q(A.z(a,"JSObject"),new Error())},
hf(a){if(a==null)return a
if(A.ex(a))return a
throw A.q(A.z(a,"JSObject?"),new Error())},
eB(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.w(a[q],b)
return s},
hT(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.eB(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.w(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
et(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.f([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)a4.push("T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.b(a4,l)
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
if(l===8){p=A.i1(a.x)
o=a.y
return o.length>0?p+("<"+A.eB(o,b)+">"):p}if(l===10)return A.hT(a,b)
if(l===11)return A.et(a,b,null)
if(l===12)return A.et(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.b(b,n)
return b[n]}return"?"},
i1(a){var s=A.eR(a)
if(s!=null)return s
return"minified:"+a},
h8(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
h7(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.d3(a,b,!1)
else if(typeof m=="number"){s=m
r=A.b5(a,5,"#")
q=A.d4(s)
for(p=0;p<s;++p)q[p]=r
o=A.b4(a,b,q)
n[b]=o
return o}else return m},
h6(a,b){return A.eq(a.tR,b)},
h5(a,b){return A.eq(a.eT,b)},
d3(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.eo(a,null,b,!1)
r.set(b,s)
return s},
b6(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.eo(a,b,c,!0)
q.set(c,r)
return r},
ep(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.dH(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
eo(a,b,c,d){return A.fX(A.fR(a,b,c,d))},
P(a,b){b.a=A.hz
b.b=A.hA
return b},
b5(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.A(null,null)
s.w=b
s.as=c
r=A.P(a,s)
a.eC.set(c,r)
return r},
em(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.h3(a,b,r,c)
a.eC.set(r,s)
return s},
h3(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.a3(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.am(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.A(null,null)
q.w=6
q.x=b
q.as=c
return A.P(a,q)},
el(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.h1(a,b,r,c)
a.eC.set(r,s)
return s},
h1(a,b,c,d){var s,r
if(d){s=b.w
if(A.a3(b)||b===t.K)return b
else if(s===1)return A.b4(a,"G",[b])
else if(b===t.P||b===t.T)return t.O}r=new A.A(null,null)
r.w=7
r.x=b
r.as=c
return A.P(a,r)},
h4(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.A(null,null)
s.w=13
s.x=b
s.as=q
r=A.P(a,s)
a.eC.set(q,r)
return r},
b3(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
h0(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
b4(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.b3(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.A(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.P(a,r)
a.eC.set(p,q)
return q},
dH(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.b3(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.A(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.P(a,o)
a.eC.set(q,n)
return n},
en(a,b,c){var s,r,q="+"+(b+"("+A.b3(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.A(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.P(a,s)
a.eC.set(q,r)
return r},
ek(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.b3(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.b3(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.h0(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.A(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.P(a,p)
a.eC.set(r,o)
return o},
dI(a,b,c,d){var s,r=b.as+("<"+A.b3(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.h2(a,b,c,r,d)
a.eC.set(r,s)
return s},
h2(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.d4(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.a_(a,b,r,0)
m=A.ak(a,c,r,0)
return A.dI(a,n,m,c!==m)}}l=new A.A(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.P(a,l)},
fR(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
fX(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.fT(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.ei(a,r,l,k,!1)
else if(q===46)r=A.ei(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.Y(a.u,a.e,k.pop()))
break
case 94:k.push(A.h4(a.u,k.pop()))
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
case 62:A.fV(a,k)
break
case 38:A.fU(a,k)
break
case 63:p=a.u
k.push(A.em(p,A.Y(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.el(p,A.Y(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.fS(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.ej(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.fY(a.u,a.e,o)
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
return A.Y(a.u,a.e,m)},
fT(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
ei(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.h8(s,o.x)[p]
if(n==null)A.c0('No "'+p+'" in "'+A.fC(o)+'"')
d.push(A.b6(s,o,n))}else d.push(p)
return m},
fV(a,b){var s,r=a.u,q=A.eh(a,b),p=b.pop()
if(typeof p=="string")b.push(A.b4(r,p,q))
else{s=A.Y(r,a.e,p)
switch(s.w){case 11:b.push(A.dI(r,s,q,a.n))
break
default:b.push(A.dH(r,s,q))
break}}},
fS(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.eh(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.Y(p,a.e,o)
q=new A.bS()
q.a=s
q.b=n
q.c=m
b.push(A.ek(p,r,q))
return
case-4:b.push(A.en(p,b.pop(),s))
return
default:throw A.c(A.bg("Unexpected state under `()`: "+A.n(o)))}},
fU(a,b){var s=b.pop()
if(0===s){b.push(A.b5(a.u,1,"0&"))
return}if(1===s){b.push(A.b5(a.u,4,"1&"))
return}throw A.c(A.bg("Unexpected extended operation "+A.n(s)))},
eh(a,b){var s=b.splice(a.p)
A.ej(a.u,a.e,s)
a.p=b.pop()
return s},
Y(a,b,c){if(typeof c=="string")return A.b4(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.fW(a,b,c)}else return c},
ej(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.Y(a,b,c[s])},
fY(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.Y(a,b,c[s])},
fW(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.c(A.bg("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.c(A.bg("Bad index "+c+" for "+b.h(0)))},
io(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.p(a,b,null,c,null)
r.set(c,s)}return s},
p(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.a3(d))return!0
s=b.w
if(s===4)return!0
if(A.a3(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.p(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.p(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.p(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.p(a,b.x,c,d,e))return!1
return A.p(a,A.dC(a,b),c,d,e)}if(s===6)return A.p(a,p,c,d,e)&&A.p(a,b.x,c,d,e)
if(q===7){if(A.p(a,b,c,d.x,e))return!0
return A.p(a,b,c,A.dC(a,d),e)}if(q===6)return A.p(a,b,c,p,e)||A.p(a,b,c,d.x,e)
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
if(!A.p(a,j,c,i,e)||!A.p(a,i,e,j,c))return!1}return A.ev(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.ev(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.hF(a,b,c,d,e)}if(o&&q===10)return A.hK(a,b,c,d,e)
return!1},
ev(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
hF(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.b6(a,b,r[o])
return A.er(a,p,null,c,d.y,e)}return A.er(a,b.y,null,c,d.y,e)},
er(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.p(a,b[s],d,e[s],f))return!1
return!0},
hK(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.p(a,r[s],c,q[s],e))return!1
return!0},
am(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.a3(a))if(s!==6)r=s===7&&A.am(a.x)
return r},
a3(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
eq(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
d4(a){return a>0?new Array(a):v.typeUniverse.sEA},
A:function A(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
bS:function bS(){this.c=this.b=this.a=null},
bX:function bX(a){this.a=a},
bR:function bR(){},
b2:function b2(a){this.a=a},
fK(){var s,r,q
if(self.scheduleImmediate!=null)return A.i4()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.bZ(new A.cF(s),1)).observe(r,{childList:true})
return new A.cE(s,r,q)}else if(self.setImmediate!=null)return A.i5()
return A.i6()},
fL(a){self.scheduleImmediate(A.bZ(new A.cG(a),0))},
fM(a){self.setImmediate(A.bZ(new A.cH(a),0))},
fN(a){A.fZ(0,a)},
ec(a,b){var s=B.a.C(a.a,1000)
return A.h_(s,b)},
fZ(a,b){var s=new A.b1()
s.b3(a,b)
return s},
h_(a,b){var s=new A.b1()
s.b4(a,b)
return s},
hP(a){return new A.bK(new A.m($.i,a.i("m<0>")),a.i("bK<0>"))},
hp(a,b){a.$2(0,null)
b.b=!0
return b.a},
hm(a,b){A.hq(a,b)},
ho(a,b){var s,r=a==null?b.$ti.c.a(a):a
if(!b.b)b.a.a0(r)
else{s=b.a
if(b.$ti.i("G<1>").b(r))s.au(r)
else s.aw(r)}},
hn(a,b){var s=A.an(a),r=A.a2(a),q=b.a
if(b.b)q.K(new A.y(s,r))
else q.ar(new A.y(s,r))},
hq(a,b){var s,r,q=new A.d6(b),p=new A.d7(b)
if(a instanceof A.m)a.aG(q,p,t.z)
else{s=t.z
if(a instanceof A.m)a.aW(q,p,s)
else{r=new A.m($.i,t.c)
r.a=8
r.c=a
r.aG(q,p,s)}}},
i3(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.i.al(new A.da(s))},
du(a){var s
if(t.Q.b(a)){s=a.gR()
if(s!=null)return s}return B.v},
hC(a,b){if($.i===B.b)return null
return null},
cN(a,b,c){var s,r,q,p={},o=p.a=a
while(s=o.a,(s&4)!==0){o=o.c
p.a=o}if(o===b){s=A.ea()
b.ar(new A.y(new A.E(!0,o,null,"Cannot complete a future with itself"),s))
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.aE(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.L()
b.U(p.a)
A.X(b,q)
return}b.a^=2
A.aj(null,null,b.b,new A.cO(p,b))},
X(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){f=f.c
A.bY(f.a,f.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.X(g.a,f)
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
if(r){A.bY(m.a,m.b)
return}j=$.i
if(j!==k)$.i=k
else j=null
f=f.c
if((f&15)===8)new A.cS(s,g,p).$0()
else if(q){if((f&1)!==0)new A.cR(s,m).$0()}else if((f&2)!==0)new A.cQ(g,s).$0()
if(j!=null)$.i=j
f=s.c
if(f instanceof A.m){r=s.a.$ti
r=r.i("G<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.W(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.cN(f,i,!0)
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
hU(a,b){if(t.C.b(a))return b.al(a)
if(t.v.b(a))return a
throw A.c(A.dZ(a,"onError",u.c))},
hQ(){var s,r
for(s=$.ai;s!=null;s=$.ai){$.ba=null
r=s.b
$.ai=r
if(r==null)$.b9=null
s.a.$0()}},
hZ(){$.dM=!0
try{A.hQ()}finally{$.ba=null
$.dM=!1
if($.ai!=null)$.dW().$1(A.eF())}},
eD(a){var s=new A.bL(a),r=$.b9
if(r==null){$.ai=$.b9=s
if(!$.dM)$.dW().$1(A.eF())}else $.b9=r.b=s},
hW(a){var s,r,q,p=$.ai
if(p==null){A.eD(a)
$.ba=$.b9
return}s=new A.bL(a)
r=$.ba
if(r==null){s.b=p
$.ai=$.ba=s}else{q=r.b
s.b=q
$.ba=r.b=s
if(q==null)$.b9=s}},
eQ(a){var s=null,r=$.i
if(B.b===r){A.aj(s,s,B.b,a)
return}A.aj(s,s,r,r.aK(a))},
iD(a){A.dP(a,"stream",t.K)
return new A.bV()},
dE(a){return new A.aO(null,null,a.i("aO<0>"))},
eC(a){return},
ef(a,b){return b==null?A.i7():b},
fO(a,b){if(b==null)b=A.i8()
if(t.k.b(b))return a.al(b)
if(t.d.b(b))return b
throw A.c(A.a4("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
hR(a){},
hS(a,b){A.bY(a,b)},
ht(a,b,c){var s,r,q=a.aL()
if(q!==$.ds()){s=q.$ti
r=$.i
q.T(new A.O(new A.m(r,s),8,new A.d8(b,c),null,s.i("O<1,1>")))}else b.a3(c)},
fG(a,b){var s=$.i
if(s===B.b)return A.ec(a,b)
return A.ec(a,s.bs(b,t.E))},
bY(a,b){A.hW(new A.d9(a,b))},
ez(a,b,c,d){var s,r=$.i
if(r===c)return d.$0()
$.i=c
s=r
try{r=d.$0()
return r}finally{$.i=s}},
eA(a,b,c,d,e){var s,r=$.i
if(r===c)return d.$1(e)
$.i=c
s=r
try{r=d.$1(e)
return r}finally{$.i=s}},
hV(a,b,c,d,e,f){var s,r=$.i
if(r===c)return d.$2(e,f)
$.i=c
s=r
try{r=d.$2(e,f)
return r}finally{$.i=s}},
aj(a,b,c,d){if(B.b!==c){d=c.aK(d)
d=d}A.eD(d)},
cF:function cF(a){this.a=a},
cE:function cE(a,b,c){this.a=a
this.b=b
this.c=c},
cG:function cG(a){this.a=a},
cH:function cH(a){this.a=a},
b1:function b1(){this.c=0},
d2:function d2(a,b){this.a=a
this.b=b},
d1:function d1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bK:function bK(a,b){this.a=a
this.b=!1
this.$ti=b},
d6:function d6(a){this.a=a},
d7:function d7(a){this.a=a},
da:function da(a){this.a=a},
y:function y(a,b){this.a=a
this.b=b},
af:function af(a,b){this.a=a
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
bM:function bM(){},
aO:function aO(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null
_.$ti=c},
O:function O(a,b,c,d,e){var _=this
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
cK:function cK(a,b){this.a=a
this.b=b},
cP:function cP(a,b){this.a=a
this.b=b},
cO:function cO(a,b){this.a=a
this.b=b},
cM:function cM(a,b){this.a=a
this.b=b},
cL:function cL(a,b){this.a=a
this.b=b},
cS:function cS(a,b,c){this.a=a
this.b=b
this.c=c},
cT:function cT(a,b){this.a=a
this.b=b},
cU:function cU(a){this.a=a},
cR:function cR(a,b){this.a=a
this.b=b},
cQ:function cQ(a,b){this.a=a
this.b=b},
bL:function bL(a){this.a=a
this.b=null},
ae:function ae(){},
cm:function cm(a,b){this.a=a
this.b=b},
cn:function cn(a,b){this.a=a
this.b=b},
ck:function ck(a){this.a=a},
cl:function cl(a,b,c){this.a=a
this.b=b
this.c=c},
aQ:function aQ(){},
bO:function bO(){},
bN:function bN(){},
b0:function b0(){},
bQ:function bQ(){},
bP:function bP(a){this.b=a
this.a=null},
bT:function bT(){this.a=0
this.c=this.b=null},
cY:function cY(a,b){this.a=a
this.b=b},
aR:function aR(a){this.a=1
this.b=a
this.c=null},
bV:function bV(){},
d8:function d8(a,b){this.a=a
this.b=b},
d5:function d5(){},
cZ:function cZ(){},
d_:function d_(a,b){this.a=a
this.b=b},
d0:function d0(a,b,c){this.a=a
this.b=b
this.c=c},
d9:function d9(a,b){this.a=a
this.b=b},
fv(a,b,c){return A.eJ(a,new A.U(b.i("@<0>").a1(c).i("U<1,2>")))},
fw(a){return new A.aT(a.i("aT<0>"))},
dG(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
fQ(a,b,c){var s=new A.ag(a,b,c.i("ag<0>"))
s.c=a.e
return s},
dA(a){var s,r
if(A.dT(a))return"{...}"
s=new A.bH("")
try{r={}
$.x.push(a)
s.a+="{"
r.a=!0
a.ag(0,new A.c8(r,s))
s.a+="}"}finally{if(0>=$.x.length)return A.b($.x,-1)
$.x.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
aT:function aT(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cW:function cW(a){this.a=a
this.c=this.b=null},
ag:function ag(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
l:function l(){},
aC:function aC(){},
c8:function c8(a,b){this.a=a
this.b=b},
aK:function aK(){},
aZ:function aZ(){},
fh(a,b){a=A.q(a,new Error())
a.stack=b.h(0)
throw a},
dz(a,b,c){var s,r,q
if(a>4294967295)A.c0(A.dB(a,0,4294967295,"length",null))
s=A.f(new Array(a),c.i("o<0>"))
s.$flags=1
r=s
if(a!==0)for(s=r.length,q=0;q<s;++q)r[q]=b
return r},
fx(a,b,c){var s,r,q=A.f([],c.i("o<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.c_)(a),++r)q.push(a[r])
q.$flags=1
return q},
e8(a){return new A.c5(a,A.ft(a,!1,!0,!1,!1,""))},
eb(a,b,c){var s=J.f7(b)
if(!s.n())return a
if(c.length===0){do a+=A.n(s.gp())
while(s.n())}else{a+=A.n(s.gp())
while(s.n())a=a+c+A.n(s.gp())}return a},
ea(){return A.a2(new Error())},
c3(a){if(typeof a=="number"||A.dL(a)||a==null)return J.bd(a)
if(typeof a=="string")return JSON.stringify(a)
return A.e7(a)},
fi(a,b){A.dP(a,"error",t.K)
A.dP(b,"stackTrace",t.l)
A.fh(a,b)},
bg(a){return new A.bf(a)},
a4(a,b){return new A.E(!1,null,b,a)},
dZ(a,b,c){return new A.E(!0,a,b,c)},
dB(a,b,c,d,e){return new A.aI(b,c,!0,a,d,"Invalid value")},
fB(a,b,c){if(0>a||a>c)throw A.c(A.dB(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.c(A.dB(b,a,c,"end",null))
return b}return c},
fA(a,b){return a},
dv(a,b,c,d,e){return new A.bm(b,!0,a,e,"Index out of range")},
cD(a){return new A.aN(a)},
ee(a){return new A.bI(a)},
a5(a){return new A.bh(a)},
fp(a,b){if(a<=0)return new A.ar(b.i("ar<0>"))
if(!b.i("0(a)").b(A.eI()))throw A.c(A.a4("Generator must be supplied or element type must allow integers","generator"))
return new A.aS(a,A.eI(),b.i("aS<0>"))},
fq(a,b,c){var s,r
if(A.dT(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.f([],t.s)
$.x.push(a)
try{A.hO(a,s)}finally{if(0>=$.x.length)return A.b($.x,-1)
$.x.pop()}r=A.eb(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
dw(a,b,c){var s,r
if(A.dT(a))return b+"..."+c
s=new A.bH(b)
$.x.push(a)
try{r=s
r.a=A.eb(r.a,a,", ")}finally{if(0>=$.x.length)return A.b($.x,-1)
$.x.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
fP(a){return a},
hO(a,b){var s,r,q,p,o,n,m,l=a.gu(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.n())return
s=A.n(l.gp())
b.push(s)
k+=s.length+2;++j}if(!l.n()){if(j<=5)return
if(0>=b.length)return A.b(b,-1)
r=b.pop()
if(0>=b.length)return A.b(b,-1)
q=b.pop()}else{p=l.gp();++j
if(!l.n()){if(j<=4){b.push(A.n(p))
return}r=A.n(p)
if(0>=b.length)return A.b(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gp();++j
for(;l.n();p=o,o=n){n=l.gp();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.b(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=A.n(p)
r=A.n(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.b(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
cb(a,b,c,d){var s
if(B.c===c){s=B.a.gk(a)
b=J.F(b)
return A.dF(A.N(A.N($.dt(),s),b))}if(B.c===d){s=B.a.gk(a)
b=J.F(b)
c=J.F(c)
return A.dF(A.N(A.N(A.N($.dt(),s),b),c))}s=B.a.gk(a)
b=J.F(b)
c=J.F(c)
d=J.F(d)
d=A.dF(A.N(A.N(A.N(A.N($.dt(),s),b),c),d))
return d},
bj:function bj(a){this.a=a},
cI:function cI(){},
k:function k(){},
bf:function bf(a){this.a=a},
H:function H(){},
E:function E(a,b,c,d){var _=this
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
bm:function bm(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
aN:function aN(a){this.a=a},
bI:function bI(a){this.a=a},
V:function V(a){this.a=a},
bh:function bh(a){this.a=a},
bC:function bC(){},
aL:function aL(){},
cJ:function cJ(a){this.a=a},
c4:function c4(a,b){this.a=a
this.b=b},
S:function S(){},
aS:function aS(a,b,c){this.a=a
this.b=b
this.$ti=c},
t:function t(){},
d:function d(){},
bW:function bW(){},
bH:function bH(a){this.a=a},
K:function K(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fF(a){return new A.cq(a)},
cc:function cc(){},
cq:function cq(a){this.a=a},
a7:function a7(){},
a9:function a9(a,b,c,d,e,f,g){var _=this
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
fD(a,b,c,d,e,f,g,h){var s,r,q,p=A.e4(),o=h*g
p.width=o
s=d*f
p.height=s
r=A.e4()
r.width=o
r.height=s
s=A.f([],t.w)
for(o=A.fp(d,t.z),o=o.gu(o);o.n();){o.gp()
q=B.a.C(h,32)
s.push(new Uint32Array(q+1))}p=new A.bG(!0,d,h,g,f,c,a,p,r,s)
p.b1(a,b,c,d,!0,f,g,h)
return p},
dD(a){return new A.C(B.a.C(a,32),31-B.a.j(a,32))},
bG:function bG(a,b,c,d,e,f,g,h,i,j){var _=this
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
ce:function ce(a){this.a=a},
cf:function cf(a){this.a=a},
cg:function cg(a){this.a=a},
ch:function ch(a){this.a=a},
cd:function cd(){},
c9:function c9(a,b){this.a=a
this.b=b},
fE(a,b,c){var s,r,q,p,o="white",n=null,m=A.fD("black",b,o,c*10,!0,2,2,a*8),l=A.f([],t.G)
for(s=t.U,r=0;r<c;++r){q=A.f([],s)
for(p=0;p<a;++p)q.push(new A.K(r,p," ",o))
l.push(q)}m=new A.cp(c,a,b,m,new A.ac(c,a),new A.ac(c,a),new A.ac(c,a),A.dE(t.N),A.dE(t.V),A.dE(t.q),B.d,l,A.fw(t.o),B.dD)
m.b2("black",a,b,o,n,!0,2,2,2,c,!0,n,n,n,n,n,n)
return m},
aM:function aM(a,b){this.a=a
this.b=b},
cp:function cp(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cy:function cy(a){this.a=a},
cx:function cx(){},
cw:function cw(a){this.a=a},
cr:function cr(a){this.a=a},
cs:function cs(a){this.a=a},
ct:function ct(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cu:function cu(a,b,c){this.a=a
this.b=b
this.c=c},
cv:function cv(a){this.a=a},
di(){var s=0,r=A.hP(t.n),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$di=A.i3(function(b6,b7){if(b6===1)return A.hn(b7,r)
for(;;)switch(s){case 0:b5=v.G.document.getElementById("index")
b5.toString
p=A.fE(60,b5,35)
p.I()
p.N()
b5=t.s
o=A.fv(["blockdude",A.f(["Block Dude is a game by Brandon Sterner and","Detached Solutions for the Texas Instruments family","of graphic display calculators. The graphics data for","this demo was pinched directly from the Z80 assembly","code for the calculator game."],b5),"bounce",A.f(["Capture the bouncing balls by enclosing them","with your trail."],b5),"emotions",A.f(["Mixed Emotions is a little twist on the classic sliding","tiles game to demonstrate mouse support for the terminal.","Click on tiles to slide them to their correct positions,","but you only get to see the correct positions by sliding","the tiles!"],b5),"four",A.f(["This is the classic game of connect-four. The computer","uses background Monte Carlo simulations to play a fairly","intelligent game."],b5),"mine",A.f(["A minesweep clone."],b5),"othello",A.f(["The game of Othello (Reversi)."],b5),"poker",A.f(["Poker squares. The computer uses background simulations","to make decisions using only the same information","available to the player."],b5),"rainbow",A.f(["A solitaire puzzle similar to Hanoi Towers, but with","constraints based on colors."],b5),"salad",A.f(["Given definitions, find the words in a grid","of letters."],b5),"snake",A.f(["Snake is version of the infamous snake game that","demonstrates non interrupting keyboard input."],b5),"sokoban",A.f(["Mother Hen is a Sokoban clone that demonstrates poking","simple sprite data into the terminal graphics memory."],b5),"tetris",A.f(["The classic game of tetris!"],b5),"wordle",A.f(["Word Logic is a Wordle clone that demonstrates a fairly","complex program running in the terminal."],b5)],t.N,t.a)
n=A.e8("^ *info +(.+) *$")
m=A.e8("^ *load +(.+) *$")
l=new A.dn(p)
k=new A.dj(p)
j=new A.dl(o,p)
i=new A.dk(o,p)
h=new A.dm(o,p)
l.$0()
j.$0()
b5=m.b,g=n.b,f=p.y,e=p.x,d=e.b,c=f.b,b=f.a,a=p.z,a0=a.b,a1=a.a,a2=p.as,a3=A.b8(a2).i("af<1>"),a4=p.a,a5=a4-1,a6=e.a,a7=p.b,a8=a7-4
case 3:p.bA(" > ","lightgreen",!1)
if(p.ay!==B.d)A.c0(A.fF("Terminal already awaiting input."))
a9=e.c
b0=e.d
b1=B.a.j(a9,a4)
b2=B.a.j(b0,a7)
a9=B.a.j(b1,a6)
e.c=a9
e.sJ(b2)
p.ak(B.f.ao(" ",a8),!1)
e.c=a9
e.sJ(b2)
a9=e.c
if(a9===a5){p.a_()
a9=e.c=B.a.j(e.c-1,a6)}a9=a9*d+e.d
b0=B.a.j(B.a.A(a9,c),b)
f.c=b0
a9=B.a.j(a9,c)
f.d=a9
a9=b0*c+a9+a8
a.c=B.a.j(B.a.A(a9,a0),a1)
a.d=B.a.j(a9,a0)
p.ay=B.l
s=5
return A.hm(new A.af(a2,a3).gbt(0),$async$di)
case 5:b3=b7
b4=B.f.aX(b3)
if("reset"===b4){l.$0()
s=3
break}if("help"===b4){k.$0()
s=3
break}if("list"===b4){j.$0()
s=3
break}if(g.test(b3)){a9=n.aN(b3).b
if(1>=a9.length){q=A.b(a9,1)
s=1
break}a9=a9[1]
a9.toString
i.$1(a9)}else if(b5.test(b3)){a9=m.aN(b3).b
if(1>=a9.length){q=A.b(a9,1)
s=1
break}a9=a9[1]
a9.toString
h.$1(a9)}else{p.D()
p.E(" Not understood. Type 'help' for help.","orange")
p.D()}s=3
break
case 4:case 1:return A.ho(q,r)}})
return A.hp($async$di,r)},
dn:function dn(a){this.a=a},
dj:function dj(a){this.a=a},
dl:function dl(a,b){this.a=a
this.b=b},
dk:function dk(a,b){this.a=a
this.b=b},
dm:function dm(a,b){this.a=a
this.b=b},
eR(a){return v.mangledGlobalNames[a]},
is(a){throw A.q(new A.aA("Field '"+a+"' has been assigned during initialization."),new Error())},
J(){throw A.q(A.fu(""),new Error())},
b7(a){var s
if(typeof a=="function")throw A.c(A.a4("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.hr,a)
s[$.dr()]=a
return s},
eu(a){var s
if(typeof a=="function")throw A.c(A.a4("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.hs,a)
s[$.dr()]=a
return s},
hr(a){return a.$0()},
hs(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
e4(){return v.G.document.createElement("canvas")}},B={}
var w=[A,J,B]
var $={}
A.dx.prototype={}
J.bn.prototype={
v(a,b){return a===b},
gk(a){return A.ad(a)},
h(a){return"Instance of '"+A.bE(a)+"'"},
gl(a){return A.a0(A.dK(this))}}
J.bp.prototype={
h(a){return String(a)},
gk(a){return a?519018:218159},
gl(a){return A.a0(t.y)},
$ie:1}
J.av.prototype={
v(a,b){return null==b},
h(a){return"null"},
gk(a){return 0},
$ie:1}
J.ax.prototype={$ij:1}
J.M.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.bD.prototype={}
J.W.prototype={}
J.L.prototype={
h(a){var s=a[$.eT()]
if(s==null)s=a[$.dr()]
if(s==null)return this.b0(a)
return"JavaScript function for "+J.bd(s)}}
J.aw.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.ay.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.o.prototype={
aJ(a,b){a.$flags&1&&A.bc(a,"addAll",2)
this.b6(a,b)
return},
b6(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw A.c(A.a5(a))
for(s=0;s<r;++s)a.push(b[s])},
by(a,b){var s,r,q=a.length,p=A.dz(q,"",t.N)
for(s=0;s<a.length;++s){r=A.n(a[s])
if(!(s<q))return A.b(p,s)
p[s]=r}return p.join(b)},
bu(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw A.c(A.a5(a))}return s},
bv(a,b,c){return this.bu(a,b,c,t.z)},
h(a){return A.dw(a,"[","]")},
gu(a){return new J.be(a,a.length,A.dJ(a).i("be<1>"))},
gk(a){return A.ad(a)},
gm(a){return a.length},
$ih:1}
J.bo.prototype={
bK(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.bE(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.c6.prototype={}
J.be.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
n(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.c(A.c_(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.a6.prototype={
bJ(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.c(A.cD(""+a+".toInt()"))},
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
A(a,b){if((a|0)===a)if(b>=1)return a/b|0
return this.aF(a,b)},
C(a,b){return(a|0)===a?a/b|0:this.aF(a,b)},
aF(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.c(A.cD("Result of truncating division is "+A.n(s)+": "+A.n(a)+" ~/ "+b))},
P(a,b){if(b<0)throw A.c(A.dO(b))
return b>31?0:a<<b>>>0},
bp(a,b){return b>31?0:a<<b>>>0},
aZ(a,b){var s
if(b<0)throw A.c(A.dO(b))
if(a>0)s=this.ab(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
bq(a,b){var s
if(a>0)s=this.ab(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
B(a,b){if(0>b)throw A.c(A.dO(b))
return this.ab(a,b)},
ab(a,b){return b>31?0:a>>>b},
gl(a){return A.a0(t.H)},
$ir:1}
J.au.prototype={
gl(a){return A.a0(t.S)},
$ie:1,
$ia:1}
J.bq.prototype={
gl(a){return A.a0(t.i)},
$ie:1}
J.T.prototype={
b_(a,b,c){return a.substring(b,A.fB(b,c,a.length))},
aX(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.b(p,0)
if(p.charCodeAt(0)===133){s=J.fr(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.b(p,r)
q=p.charCodeAt(r)===133?J.fs(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
ao(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.c(B.u)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
bB(a,b,c){var s=b-a.length
if(s<=0)return a
return this.ao(c,s)+a},
h(a){return a},
gk(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gl(a){return A.a0(t.N)},
gm(a){return a.length},
$ie:1,
$iu:1}
A.aA.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.dq.prototype={
$0(){var s=new A.m($.i,t.D)
s.a0(null)
return s},
$S:8}
A.ci.prototype={}
A.aq.prototype={}
A.aB.prototype={
gu(a){var s=this
return new A.a8(s,s.gm(s),A.b8(s).i("a8<1>"))}}
A.a8.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
n(){var s,r=this,q=r.a,p=J.eK(q),o=p.gm(q)
if(r.b!==o)throw A.c(A.a5(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.ae(q,s);++r.c
return!0}}
A.ar.prototype={
gu(a){return B.m},
gm(a){return 0}}
A.bk.prototype={
n(){return!1},
gp(){throw A.c(A.fo())}}
A.at.prototype={}
A.C.prototype={$r:"+(1,2)",$s:1}
A.bi.prototype={
h(a){return A.dA(this)}}
A.bl.prototype={
V(){var s=this,r=s.$map
if(r==null){r=new A.az(s.$ti.i("az<1,2>"))
A.eJ(s.a,r)
s.$map=r}return r},
M(a){return this.V().M(a)},
O(a,b){return this.V().O(0,b)},
ag(a,b){this.V().ag(0,b)},
gm(a){return this.V().a}}
A.aJ.prototype={}
A.cA.prototype={
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
A.aH.prototype={
h(a){return"Null check operator used on a null value"}}
A.br.prototype={
h(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.bJ.prototype={
h(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.ca.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.as.prototype={}
A.b_.prototype={
h(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iB:1}
A.R.prototype={
h(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.eS(r==null?"unknown":r)+"'"},
gbL(){return this},
$C:"$1",
$R:1,
$D:null}
A.c1.prototype={$C:"$0",$R:0}
A.c2.prototype={$C:"$2",$R:2}
A.co.prototype={}
A.cj.prototype={
h(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.eS(s)+"'"}}
A.ap.prototype={
v(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.ap))return!1
return this.$_target===b.$_target&&this.a===b.a},
gk(a){return(A.dV(this.a)^A.ad(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.bE(this.a)+"'")}}
A.bF.prototype={
h(a){return"RuntimeError: "+this.a}}
A.U.prototype={
gm(a){return this.a},
M(a){var s=this.b
if(s==null)return!1
return s[a]!=null},
O(a,b){var s,r,q,p,o=null
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
s=this.bh(q,a)
r=this.ai(s,a)
if(r<0)return null
return s[r].b},
ag(a,b){var s=this,r=s.e,q=s.r
while(r!=null){b.$2(r.a,r.b)
if(q!==s.r)throw A.c(A.a5(s))
r=r.c}},
S(a,b){var s=this,r=new A.c7(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&1073741823
return r},
ah(a){return J.F(a)&1073741823},
bh(a,b){return a[this.ah(b)]},
ai(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ao(a[r].a,b))return r
return-1},
h(a){return A.dA(this)}}
A.c7.prototype={}
A.bs.prototype={
gp(){return this.d},
n(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.c(A.a5(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
A.az.prototype={
ah(a){return A.i9(a)&1073741823},
ai(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ao(a[r].a,b))return r
return-1}}
A.de.prototype={
$1(a){return this.a(a)},
$S:9}
A.df.prototype={
$2(a,b){return this.a(a,b)},
$S:10}
A.dg.prototype={
$1(a){return this.a(a)},
$S:11}
A.ah.prototype={
h(a){return this.aH(!1)},
aH(a){var s,r,q,p,o,n=this.bf(),m=this.aA(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.b(m,q)
o=m[q]
l=a?l+A.e7(o):l+A.n(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
bf(){var s,r=this.$s
while($.aY.length<=r)$.aY.push(null)
s=$.aY[r]
if(s==null){s=this.be()
if(!(r<$.aY.length))return A.b($.aY,r)
$.aY[r]=s}return s},
be(){var s,r,q,p,o,n=this.$r,m=n.indexOf("("),l=n.substring(1,m),k=n.substring(m),j=k==="()"?0:k.replace(/[^,]/g,"").length+1,i=A.f(new Array(j),t.f)
for(s=0;s<j;++s)i[s]=s
if(l!==""){r=l.split(",")
s=r.length
for(q=i.length,p=j;s>0;){--p;--s
o=r[s]
if(!(p>=0&&p<q))return A.b(i,p)
i[p]=o}}i=A.fx(i,!1,t.K)
i.$flags=3
return i}}
A.bU.prototype={
aA(){return[this.a,this.b]},
v(a,b){if(b==null)return!1
return b instanceof A.bU&&this.$s===b.$s&&J.ao(this.a,b.a)&&J.ao(this.b,b.b)},
gk(a){return A.cb(this.$s,this.a,this.b,B.c)}}
A.c5.prototype={
h(a){return"RegExp/"+this.a+"/"+this.b.flags},
aN(a){var s=this.b.exec(a)
if(s==null)return null
return new A.cX(s)}}
A.cX.prototype={}
A.aa.prototype={
gl(a){return B.dG},
$ie:1}
A.aF.prototype={}
A.bt.prototype={
gl(a){return B.dH},
$ie:1}
A.ab.prototype={
gm(a){return a.length},
$iv:1}
A.aD.prototype={$ih:1}
A.aE.prototype={$ih:1}
A.bu.prototype={
gl(a){return B.dI},
$ie:1}
A.bv.prototype={
gl(a){return B.dJ},
$ie:1}
A.bw.prototype={
gl(a){return B.dK},
$ie:1}
A.bx.prototype={
gl(a){return B.dL},
$ie:1}
A.by.prototype={
gl(a){return B.dM},
$ie:1}
A.bz.prototype={
gl(a){return B.dO},
$ie:1}
A.bA.prototype={
gl(a){return B.dP},
$ie:1,
$icC:1}
A.aG.prototype={
gl(a){return B.dQ},
gm(a){return a.length},
$ie:1}
A.bB.prototype={
gl(a){return B.dR},
gm(a){return a.length},
$ie:1}
A.aU.prototype={}
A.aV.prototype={}
A.aW.prototype={}
A.aX.prototype={}
A.A.prototype={
i(a){return A.b6(v.typeUniverse,this,a)},
a1(a){return A.ep(v.typeUniverse,this,a)}}
A.bS.prototype={}
A.bX.prototype={
h(a){return A.w(this.a,null)}}
A.bR.prototype={
h(a){return this.a}}
A.b2.prototype={$iH:1}
A.cF.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:3}
A.cE.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:12}
A.cG.prototype={
$0(){this.a.$0()},
$S:1}
A.cH.prototype={
$0(){this.a.$0()},
$S:1}
A.b1.prototype={
b3(a,b){if(self.setTimeout!=null)self.setTimeout(A.bZ(new A.d2(this,b),0),a)
else throw A.c(A.cD("`setTimeout()` not found."))},
b4(a,b){if(self.setTimeout!=null)self.setInterval(A.bZ(new A.d1(this,a,Date.now(),b),0),a)
else throw A.c(A.cD("Periodic timer."))},
$icz:1}
A.d2.prototype={
$0(){this.a.c=1
this.b.$0()},
$S:0}
A.d1.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.a.A(s,o)}q.c=p
r.d.$1(q)},
$S:1}
A.bK.prototype={}
A.d6.prototype={
$1(a){return this.a.$2(0,a)},
$S:4}
A.d7.prototype={
$2(a,b){this.a.$2(1,new A.as(a,b))},
$S:13}
A.da.prototype={
$2(a,b){this.a(a,b)},
$S:14}
A.y.prototype={
h(a){return A.n(this.a)},
$ik:1,
gR(){return this.b}}
A.af.prototype={}
A.aP.prototype={
a8(){},
a9(){}}
A.bM.prototype={
gbi(){return this.c<4},
bn(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
br(a,b,c,d){var s,r,q,p,o,n=this
if((n.c&4)!==0){s=new A.aR($.i)
A.eQ(s.gbj())
s.c=c
return s}s=$.i
r=d?1:0
q=A.ef(s,a)
A.fO(s,b)
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
if(n.d===p)A.eC(n.a)
return p},
bm(a){var s,r=this
A.b8(r).i("aP<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.bn(a)
if((r.c&2)===0&&r.d==null)r.ba()}return null},
b7(){if((this.c&4)!==0)return new A.V("Cannot add new events after calling close")
return new A.V("Cannot add new events while doing an addStream")},
H(a,b){if(!this.gbi())throw A.c(this.b7())
this.aa(b)},
ba(){if((this.c&4)!==0)if(null.gbM())null.a0(null)
A.eC(this.b)}}
A.aO.prototype={
aa(a){var s
for(s=this.d;s!=null;s=s.ch)s.b8(new A.bP(a))}}
A.O.prototype={
bz(a){if((this.c&15)!==6)return!0
return this.b.b.am(this.d,a.a)},
bw(a){var s,r=this.e,q=null,p=a.a,o=this.b.b
if(t.C.b(r))q=o.bF(r,p,a.b)
else q=o.am(r,p)
try{p=q
return p}catch(s){if(t._.b(A.an(s))){if((this.c&1)!==0)throw A.c(A.a4("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.c(A.a4("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.m.prototype={
aW(a,b,c){var s,r=$.i
if(r===B.b){if(!t.C.b(b)&&!t.v.b(b))throw A.c(A.dZ(b,"onError",u.c))}else b=A.hU(b,r)
s=new A.m(r,c.i("m<0>"))
this.T(new A.O(s,3,a,b,this.$ti.i("@<1>").a1(c).i("O<1,2>")))
return s},
aG(a,b,c){var s=new A.m($.i,c.i("m<0>"))
this.T(new A.O(s,19,a,b,this.$ti.i("@<1>").a1(c).i("O<1,2>")))
return s},
bo(a){this.a=this.a&1|16
this.c=a},
U(a){this.a=a.a&30|this.a&1
this.c=a.c},
T(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.T(a)
return}s.U(r)}A.aj(null,null,s.b,new A.cK(s,a))}},
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
A.aj(null,null,n.b,new A.cP(m,n))}},
L(){var s=this.c
this.c=null
return this.W(s)},
W(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
a3(a){var s,r=this
if(r.$ti.i("G<1>").b(a))A.cN(a,r,!0)
else{s=r.L()
r.a=8
r.c=a
A.X(r,s)}},
aw(a){var s=this,r=s.L()
s.a=8
s.c=a
A.X(s,r)},
bd(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.L()
q.U(a)
A.X(q,r)},
K(a){var s=this.L()
this.bo(a)
A.X(this,s)},
bc(a,b){this.K(new A.y(a,b))},
a0(a){if(this.$ti.i("G<1>").b(a)){this.au(a)
return}this.b9(a)},
b9(a){this.a^=2
A.aj(null,null,this.b,new A.cM(this,a))},
au(a){A.cN(a,this,!1)
return},
ar(a){this.a^=2
A.aj(null,null,this.b,new A.cL(this,a))},
$iG:1}
A.cK.prototype={
$0(){A.X(this.a,this.b)},
$S:0}
A.cP.prototype={
$0(){A.X(this.b,this.a.a)},
$S:0}
A.cO.prototype={
$0(){A.cN(this.a.a,this.b,!0)},
$S:0}
A.cM.prototype={
$0(){this.a.aw(this.b)},
$S:0}
A.cL.prototype={
$0(){this.a.K(this.b)},
$S:0}
A.cS.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.aT(q.d)}catch(p){s=A.an(p)
r=A.a2(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.du(q)
n=k.a
n.c=new A.y(q,o)
q=n}q.b=!0
return}if(j instanceof A.m&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.m){m=k.b.a
l=new A.m(m.b,m.$ti)
j.aW(new A.cT(l,m),new A.cU(l),t.n)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.cT.prototype={
$1(a){this.a.bd(this.b)},
$S:3}
A.cU.prototype={
$2(a,b){this.a.K(new A.y(a,b))},
$S:15}
A.cR.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
q.c=p.b.b.am(p.d,this.b)}catch(o){s=A.an(o)
r=A.a2(o)
q=s
p=r
if(p==null)p=A.du(q)
n=this.a
n.c=new A.y(q,p)
n.b=!0}},
$S:0}
A.cQ.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.bz(s)&&p.a.e!=null){p.c=p.a.bw(s)
p.b=!1}}catch(o){r=A.an(o)
q=A.a2(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.du(p)
m=l.b
m.c=new A.y(p,n)
p=m}p.b=!0}},
$S:0}
A.bL.prototype={}
A.ae.prototype={
gm(a){var s={},r=new A.m($.i,t.h)
s.a=0
this.aO(new A.cm(s,this),!0,new A.cn(s,r),r.gav())
return r},
gbt(a){var s=new A.m($.i,this.$ti.i("m<1>")),r=this.aO(null,!0,new A.ck(s),s.gav())
r.aP(new A.cl(this,r,s))
return s}}
A.cm.prototype={
$1(a){++this.a.a},
$S(){return this.b.$ti.i("~(1)")}}
A.cn.prototype={
$0(){this.b.a3(this.a.a)},
$S:0}
A.ck.prototype={
$0(){var s,r=A.ea(),q=new A.V("No element")
A.fz(q,r)
s=A.hC(q,r)
s=new A.y(q,r)
this.a.K(s)},
$S:0}
A.cl.prototype={
$1(a){A.ht(this.b,this.c,a)},
$S(){return this.a.$ti.i("~(1)")}}
A.aQ.prototype={
gk(a){return(A.ad(this.a)^892482866)>>>0},
v(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.af&&b.a===this.a}}
A.bO.prototype={
aD(){return this.w.bm(this)},
a8(){},
a9(){}}
A.bN.prototype={
aP(a){this.a=A.ef(this.d,a)},
aL(){var s,r=this,q=r.e&=4294967279
if((q&8)===0){q=r.e=q|8
if((q&128)!==0){s=r.r
if(s.a===1)s.a=3}if((q&64)===0)r.r=null
r.f=r.aD()}q=$.ds()
return q},
a8(){},
a9(){},
aD(){return null},
b8(a){var s,r,q=this,p=q.r
if(p==null)p=q.r=new A.bT()
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
q.e=p}}for(;;a=r){if((p&8)!==0){q.r=null
return}r=(p&4)!==0
if(a===r)break
q.e=p^64
if(r)q.a8()
else q.a9()
p=q.e&=4294967231}if((p&128)!==0&&p<256)q.r.ap(q)}}
A.b0.prototype={
aO(a,b,c,d){return this.a.br(a,d,c,!0)}}
A.bQ.prototype={}
A.bP.prototype={}
A.bT.prototype={
ap(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.eQ(new A.cY(s,a))
s.a=1}}
A.cY.prototype={
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
return $.ds()},
bk(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.aU(s)}}else r.a=q}}
A.bV.prototype={}
A.d8.prototype={
$0(){return this.a.a3(this.b)},
$S:0}
A.d5.prototype={}
A.cZ.prototype={
aU(a){var s,r,q
try{if(B.b===$.i){a.$0()
return}A.ez(null,null,this,a)}catch(q){s=A.an(q)
r=A.a2(q)
A.bY(s,r)}},
bI(a,b){var s,r,q
try{if(B.b===$.i){a.$1(b)
return}A.eA(null,null,this,a,b)}catch(q){s=A.an(q)
r=A.a2(q)
A.bY(s,r)}},
aV(a,b){return this.bI(a,b,t.z)},
aK(a){return new A.d_(this,a)},
bs(a,b){return new A.d0(this,a,b)},
bE(a){if($.i===B.b)return a.$0()
return A.ez(null,null,this,a)},
aT(a){return this.bE(a,t.z)},
bH(a,b){if($.i===B.b)return a.$1(b)
return A.eA(null,null,this,a,b)},
am(a,b){var s=t.z
return this.bH(a,b,s,s)},
bG(a,b,c){if($.i===B.b)return a.$2(b,c)
return A.hV(null,null,this,a,b,c)},
bF(a,b,c){var s=t.z
return this.bG(a,b,c,s,s,s)},
bD(a){return a},
al(a){var s=t.z
return this.bD(a,s,s,s)}}
A.d_.prototype={
$0(){return this.a.aU(this.b)},
$S:0}
A.d0.prototype={
$1(a){return this.a.aV(this.b,a)},
$S(){return this.c.i("~(0)")}}
A.d9.prototype={
$0(){A.fi(this.a,this.b)},
$S:0}
A.aT.prototype={
gu(a){var s=this,r=new A.ag(s,s.r,s.$ti.i("ag<1>"))
r.c=s.e
return r},
gm(a){return this.a},
H(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.aq(s==null?q.b=A.dG():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.aq(r==null?q.c=A.dG():r,b)}else return q.b5(b)},
b5(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.dG()
s=J.F(a)&1073741823
r=p[s]
if(r==null)p[s]=[q.a7(a)]
else{if(q.bg(r,a)>=0)return!1
r.push(q.a7(a))}return!0},
aq(a,b){if(a[b]!=null)return!1
a[b]=this.a7(b)
return!0},
aC(){this.r=this.r+1&1073741823},
a7(a){var s,r=this,q=new A.cW(a)
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
for(r=0;r<s;++r)if(J.ao(a[r].a,b))return r
return-1}}
A.cW.prototype={}
A.ag.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
n(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.c(A.a5(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.l.prototype={
gu(a){return new A.a8(a,a.length,A.bb(a).i("a8<l.E>"))},
ae(a,b){if(!(b<a.length))return A.b(a,b)
return a[b]},
h(a){return A.dw(a,"[","]")}}
A.aC.prototype={
gm(a){return this.a},
h(a){return A.dA(this)}}
A.c8.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.n(a)
r.a=(r.a+=s)+": "
s=A.n(b)
r.a+=s},
$S:16}
A.aK.prototype={
h(a){return A.dw(this,"{","}")}}
A.aZ.prototype={}
A.bj.prototype={
v(a,b){if(b==null)return!1
return b instanceof A.bj&&this.a===b.a},
gk(a){return B.a.gk(this.a)},
h(a){var s,r,q,p,o=this.a,n=B.a.C(o,36e8)
o%=36e8
s=B.a.C(o,6e7)
o%=6e7
r=s<10?"0":""
q=B.a.C(o,1e6)
p=q<10?"0":""
return""+n+":"+r+s+":"+p+q+"."+B.f.bB(B.a.h(o%1e6),6,"0")}}
A.cI.prototype={
h(a){return this.az()}}
A.k.prototype={
gR(){return A.fy(this)}}
A.bf.prototype={
h(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.c3(s)
return"Assertion failed"}}
A.H.prototype={}
A.E.prototype={
ga6(){return"Invalid argument"+(!this.a?"(s)":"")},
ga5(){return""},
h(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.ga6()+q+o
if(!s.a)return n
return n+s.ga5()+": "+A.c3(s.gaj())},
gaj(){return this.b}}
A.aI.prototype={
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
gm(a){return this.f}}
A.aN.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.bI.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.V.prototype={
h(a){return"Bad state: "+this.a}}
A.bh.prototype={
h(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.c3(s)+"."}}
A.bC.prototype={
h(a){return"Out of Memory"},
gR(){return null},
$ik:1}
A.aL.prototype={
h(a){return"Stack Overflow"},
gR(){return null},
$ik:1}
A.cJ.prototype={
h(a){return"Exception: "+this.a}}
A.c4.prototype={
h(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=B.f.b_(q,0,75)+"..."
return r+"\n"+q}}
A.S.prototype={
gm(a){var s,r=this.gu(this)
for(s=0;r.n();)++s
return s},
ae(a,b){var s,r
A.fA(b,"index")
s=this.gu(this)
for(r=b;s.n();){if(r===0)return s.gp();--r}throw A.c(A.dv(b,b-r,this,null,"index"))},
h(a){return A.fq(this,"(",")")}}
A.aS.prototype={
ae(a,b){var s=this.a
if(b>=s)A.c0(A.dv(b,s,this,null,"index"))
return this.b.$1(b)},
gm(a){return this.a}}
A.t.prototype={
gk(a){return A.d.prototype.gk.call(this,0)},
h(a){return"null"}}
A.d.prototype={$id:1,
v(a,b){return this===b},
gk(a){return A.ad(this)},
h(a){return"Instance of '"+A.bE(this)+"'"},
gl(a){return A.eL(this)},
toString(){return this.h(this)}}
A.bW.prototype={
h(a){return""},
$iB:1}
A.bH.prototype={
gm(a){return this.a.length},
h(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.K.prototype={
gk(a){var s=this.a,r=this.b
return A.cb(new A.C(s,r).$s,s,r,B.c)},
v(a,b){var s,r,q,p
if(b==null)return!1
if(b instanceof A.K){s=b.a
r=b.b
q=this.a
p=this.b
p=A.cb(new A.C(s,r).$s,s,r,B.c)===A.cb(new A.C(q,p).$s,q,p,B.c)
s=p}else s=!1
return s},
h(a){var s=this
return"("+s.a+" "+s.b+") => '"+s.c+"' "+s.d}}
A.cc.prototype={
h(a){return A.eL(this).h(0)+": "+this.a}}
A.cq.prototype={}
A.a7.prototype={}
A.a9.prototype={
h(a){var s=this
return"               row: "+s.a+"\n            column: "+s.b+"\n         character: '"+s.c+"'\n    characterColor: "+s.d+"\n\n          pixelRow: "+s.e+"\n       pixelColumn: "+s.f+"\n         pixelIsOn: "+s.r+"\n    "}}
A.ac.prototype={
sJ(a){var s,r,q,p=this
if(a<0){s=p.d=a
for(r=p.b,q=p.a;s<0;){s+=r
p.d=s
p.c=B.a.j(p.c-1,q)}}else{s=p.b
p.c=B.a.j(p.c+B.a.A(a,s),p.a)
p.d=B.a.j(a,s)}},
gq(){return this.c*this.b+this.d},
sq(a){var s=this,r=s.b
s.c=B.a.j(B.a.A(a,r),s.a)
s.d=B.a.j(a,r)}}
A.bG.prototype={
b1(a,b,c,d,e,f,g,h){var s,r=this,q=v.G.document
q.onfocus=A.b7(new A.ce(r))
q.onblur=A.b7(new A.cf(r))
q=r.w
q.tabIndex=-1
q.style.display="block"
q.style.outline="none"
s=q.getContext("2d")
if(s==null)s=A.Z(s)
s.imageSmoothingEnabled=!1
q.onfocus=A.b7(new A.cg(r))
q.onblur=A.b7(new A.ch(r))
b.style.display="flex"
b.style.alignItems="flex-start"
b.style.padding="0"
b.style.margin="0"
b.style.width="fit-content"
b.style.height="fit-content"
b.style.background="gray"
b.appendChild(q)
r.Y(0)},
X(a,b){return new A.C(B.a.j(a,this.b),B.a.j(b,this.c))},
a2(){var s=this.x,r=s.getContext("2d")
if(r==null)r=A.Z(r)
r.save()
r.beginPath()
r.clearRect(0,0,s.width,s.height)
r.restore()
return r},
a4(){var s=this.w.getContext("2d")
if(s==null)s=A.Z(s)
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
r=A.dD(b)
q=r.a
p=B.a.P(1,r.b)
l=m.y
if(!(a>=0&&a<l.length))return A.b(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.b(l,q)
o=l[q]
l.$flags&2&&A.bc(l)
l[q]=(o|p)>>>0
l[q]=(l[q]^p)>>>0
l=c.getContext("2d")
if(l==null)l=A.Z(l)
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
r=A.dD(b)
q=r.a
p=B.a.P(1,r.b)
l=m.y
if(!(a>=0&&a<l.length))return A.b(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.b(l,q)
o=l[q]
l.$flags&2&&A.bc(l)
l[q]=(o|p)>>>0
o=d.getContext("2d")
l=o==null?A.Z(o):o
l.save()
l.beginPath()
l.fillStyle=c
o=m.d
n=m.e
l.fillRect(b*o,a*n,o,n)
l.restore()},
aR(a,b){var s,r,q,p,o=this.X(b,a)
b=o.a
s=A.dD(o.b)
r=s.a
q=B.a.P(1,s.b)
p=this.y
if(!(b>=0&&b<p.length))return A.b(p,b)
p=p[b]
if(!(r>=0&&r<p.length))return A.b(p,r)
return(p[r]&q)>>>0>0},
aM(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=this
if(e==null)e=k.c-c
if(b==null)b=k.b-d
k.a2()
if(c===0&&d===0&&e===k.c&&b===k.b){for(s=k.y,r=s.length,q=0;q<r;++q)for(p=0;o=s[q],p<o.length;++p){o.$flags&2&&A.bc(o)
o[p]=0}s=k.x
r=s.getContext("2d")
if(r==null)r=A.Z(r)
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
Y(a){return this.aM(0,null,0,0,null)},
bl(a,b,c,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
d.a2()
s=d.X(a,b)
a=s.a
b=s.b
r=B.a.bp(1,a1)-1
for(q=a2.a,p=a1-1,o=t.t,n=d.x,m=0;m<c.length;++m){l=c[m]
k=(l&r)>>>0
l=A.f([],o)
for(j=a+m,i=0;i<a1;++i){h=d.aR(b+i,j)?1:0
l.push(B.a.P(h,p-i))}g=B.e.bv(l,0,new A.cd())
switch(q){case 0:for(i=0;i<a1;++i){l=b+i
if((B.a.B(k,p-i)&1)>0)d.G(j,l,a0,n,!1)
else d.F(j,l,n,!1)}break
case 1:for(i=0;i<a1;++i){l=b+i
if((B.a.B(k,p-i)&1)>0)d.F(j,l,n,!1)
else d.G(j,l,a0,n,!1)}break
case 3:for(i=0;i<a1;++i){f=p-i
if((B.a.B(k,f)&1)>0&&(B.a.aZ(g,f)&1)===0)d.G(j,b+i,a0,n,!1)}break
case 2:for(i=0;i<a1;++i)if((B.a.B(k,p-i)&1)>0)d.G(j,b+i,a0,n,!1)
break
case 4:for(e=(k&g)>>>0,i=0;i<a1;++i)if((B.a.B(e,p-i)&1)>0)d.G(j,b+i,a0,n,!1)
break
case 5:for(e=(k&g)>>>0,i=0;i<a1;++i)if((B.a.B(e,p-i)&1)>0)d.F(j,b+i,n,!1)
break
case 6:for(e=(k&g)>>>0,i=0;i<a1;++i)if((B.a.B(e,p-i)&1)===0)d.F(j,b+i,n,!1)
break
case 7:for(e=(k&g)>>>0,i=0;i<a1;++i){l=b+i
if((B.a.B(e,p-i)&1)===0)d.F(j,l,n,!1)
else d.G(j,l,a0,n,!1)}break}}d.a4()},
aS(a,b,c){this.bl(c.a,c.b,b,a,8,B.dE,!0,!1,!1)},
aY(a){var s,r,q,p,o,n,m,l,k=this,j=k.b
a=B.a.j(a,j)
for(s=j-a,r=k.y,q=r.length,p=0;p<s;++p){if(!(p<q))return A.b(r,p)
o=p+a
n=0
for(;m=r[p],n<m.length;++n){if(!(o<q))return A.b(r,o)
l=r[o]
if(!(n<l.length))return A.b(l,n)
l=l[n]
m.$flags&2&&A.bc(m)
m[n]=l}}for(;p<j;++p){if(!(p<q))return A.b(r,p)
n=0
for(;o=r[p],n<o.length;++n){o.$flags&2&&A.bc(o)
o[n]=0}}k.a2()
j=k.x
r=j.getContext("2d")
if(r==null)r=A.Z(r)
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
I(){var s=this.w,r=s.style
r.opacity="0.5"
s.blur()}}
A.ce.prototype={
$0(){this.a.z=!0},
$S:1}
A.cf.prototype={
$0(){this.a.z=!1},
$S:1}
A.cg.prototype={
$0(){this.a.N()},
$S:1}
A.ch.prototype={
$0(){this.a.I()},
$S:1}
A.cd.prototype={
$2(a,b){return(a|b)>>>0},
$S:17}
A.c9.prototype={
az(){return"Mode."+this.b}}
A.aM.prototype={
az(){return"State."+this.b}}
A.cp.prototype={
b2(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=this,r=s.f
r.tabIndex=-1
r.onfocus=A.b7(new A.cr(s))
r.onblur=A.b7(new A.cs(s))
r.onkeydown=A.eu(new A.ct(s,l,new A.cx(),new A.cw(s)))
r.onclick=A.eu(new A.cu(s,new A.cy(s),o))
A.fG(new A.bj(3e5),new A.cv(s))
s.I()
s.Y(0)},
gaf(){var s=this.w
s===$&&A.J()
return s.gaf()},
gad(){var s=this.w
s===$&&A.J()
return s.gad()},
ac(a,b){return new A.C(B.a.j(a,this.a),B.a.j(b,this.b))},
aB(){var s=this,r=s.x
s.CW.H(0,new A.K(r.c,r.d," ","white"))
s.aI()
s.cy=!1},
aI(){var s,r,q,p,o,n,m,l,k,j
for(s=this.CW,r=A.fQ(s,s.r,s.$ti.c),q=this.w,p=this.cx,o=r.$ti.c;r.n();){n=r.d
if(n==null)n=o.a(n)
m=n.a
l=n.b
if(p.M(n.c)){k=p.O(0,n.c)
k.toString
j=k}else j=$.eV()
q===$&&A.J()
q.aS(n.d,j,new A.C(m*10,l*8))}if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.aC()}},
an(a,b){var s,r=this.ac(b,a)
b=r.a
a=r.b
s=this.ch
if(!(b>=0&&b<s.length))return A.b(s,b)
s=s[b]
if(!(a>=0&&a<s.length))return A.b(s,a)
return s[a].c},
D(){var s,r=this.x
r.sJ(0)
s=r.c
if(s===this.a-1)this.a_()
else r.c=B.a.j(s+1,r.a)},
a_(){var s,r,q,p,o,n,m,l,k=this
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
s===$&&A.J()
s.aY(10)},
Z(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=e==null?h.x.c:e,f=h.ac(g,c==null?h.x.d:c)
g=h.x
s=g.a
g.c=B.a.j(f.a,s)
g.sJ(f.b)
if(b==null)b="white"
for(r=a.split(""),q=r.length,p=h.ch,o=h.CW,n=h.a-1,m=h.b-1,l=0;l<q;++l){k=r[l]
e=g.c
c=g.d
if(!(e>=0&&e<p.length))return A.b(p,e)
j=p[e]
if(!(c>=0&&c<j.length))return A.b(j,c)
i=j[c]
i.c=k
i.d=b
o.H(0,i)
if(e===n&&c===m){h.a_()
g.c=B.a.j(g.c-1,s)}g.sJ(g.d+1)}h.aI()
if(d)h.D()},
bA(a,b,c){return this.Z(a,b,null,c,null)},
ak(a,b){return this.Z(a,null,null,b,null)},
E(a,b){return this.Z(a,b,null,!0,null)},
aQ(a){return this.Z(a,null,null,!0,null)},
Y(a){var s,r,q,p,o=this,n=o.b,m=o.a
for(s=o.ch,r=0;r<m;++r)for(q=0;q<n;++q){if(!(r<s.length))return A.b(s,r)
p=s[r]
if(!(q<p.length))return A.b(p,q)
p=p[q]
p.c=" "
p.d="white"}s=o.w
s===$&&A.J()
s.aM(0,m*10,0,0,n*8)
s=o.x
s.c=0%s.a
s.sJ(0)},
bC(a,b,c){var s=this.w
s===$&&A.J()
s.aS("white",b,new A.C(c*10,a*8))},
N(){return this.gaf().$0()},
I(){return this.gad().$0()}}
A.cy.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.w
i===$&&A.J()
s=J.dY(a.offsetX)
r=Math.max(Math.min(B.a.A(J.dY(a.offsetY)-1,i.e),i.b-1),0)
q=Math.max(Math.min(B.a.A(s-1,i.d),i.c-1),0)
p=B.a.C(r,10)
o=B.a.C(q,8)
n=j.an(o,p)
m=j.ac(p,o)
l=m.a
k=m.b
j=j.ch
if(!(l>=0&&l<j.length))return A.b(j,l)
j=j[l]
if(!(k>=0&&k<j.length))return A.b(j,k)
return new A.a9(p,o,n,j[k].d,r,q,i.aR(q,r))},
$S:18}
A.cx.prototype={
$1(a){return new A.a7()},
$S:19}
A.cw.prototype={
$0(){var s,r,q,p,o,n=this.a,m=n.a,l=n.b,k=new A.ac(m,l)
k.sq(n.y.gq())
s=A.f([],t.s)
for(r=n.z,q=r.b;p=k.c,o=k.d,p*l+o<r.c*q+r.d;p=k.c*l+k.d+1,k.c=B.a.j(B.a.A(p,l),m),k.d=B.a.j(p,l))s.push(n.an(o,p))
return B.e.by(s,"")},
$S:20}
A.cr.prototype={
$0(){var s=this.a.w
s===$&&A.J()
s.N()},
$S:1}
A.cs.prototype={
$0(){var s=this.a.w
s===$&&A.J()
s.I()},
$S:1}
A.ct.prototype={
$1(a){var s,r,q,p
a.preventDefault()
s=this.a
switch(s.ay.a){case 0:break
case 1:r=s.at
if(r.d!=null){r.H(0,this.c.$1(a))
s.ay=B.d}break
case 2:s.aB()
A:{q=a.keyCode
if(13===q){r=s.as
if(r.d!=null){r.H(0,J.f9(this.d.$0()))
s.D()
s.ay=B.d}break A}if(8===q){r=s.x
if(r.gq()>s.y.gq()){r.sq(r.gq()-1)
s.ak(" ",!1)
r.sq(r.gq()-1)}break A}p=a.key
if(p.length===1&&s.x.gq()<s.z.gq())s.ak(p,!1)}break
case 3:break}},
$S:6}
A.cu.prototype={
$1(a){var s
a.preventDefault()
s=this.a
if(s.ay===B.dF&&s.ax.d!=null){s.ax.H(0,this.b.$1(a))
s.ay=B.d}},
$S:6}
A.cv.prototype={
$1(a){var s,r=this.a,q=r.w
q===$&&A.J()
if(q.z&&J.ao(v.G.document.activeElement,q.w)&&r.ay===B.l)if(r.cy)r.aB()
else{q=r.x
s=q.c
r.bC(q.d,$.eU(),s)
r.cy=!0}},
$S:21}
A.dn.prototype={
$0(){var s,r,q=this.a
q.Y(0)
for(s=[" ","  _____ _   _    _____     _           _"," :     : :_: :  :   __:___: :_ ___ ___: :"," :  :  : : . :  :__   :  _:   : . : . : :"," :_____:_:___:  :_____:___:_:_:___:___:_:"," "," Welcome to Old School, a library for adding"," old school terminals to your html documents."," "," Input 'help' for help."," "],r=0;r<11;++r)q.E(s[r],"lightgreen")},
$S:0}
A.dj.prototype={
$0(){var s,r,q
for(s=[" "," Commands"," --------"," "," reset        Resets this demo."," help         Shows this information."," list         Lists the demos available."," info [demo]  Gives a description of [demo]."," load [demo]  Loads [demo] into this page."," "],r=this.a,q=0;q<10;++q)r.E(s[q],"lightgreen")},
$S:0}
A.dl.prototype={
$0(){var s,r,q=t.s,p=A.f([" "," Demos"," -----"," "],q)
q=A.f([],q)
for(s=this.a,s=new A.bs(s,s.r,s.e);s.n();)q.push(" - "+s.d)
B.e.aJ(p,q)
p.push(" ")
q=p.length
s=this.b
r=0
for(;r<p.length;p.length===q||(0,A.c_)(p),++r)s.E(p[r],"lightgreen")},
$S:0}
A.dk.prototype={
$1(a){var s,r,q,p,o=this.a
if(o.M(a)){s=t.s
r=A.f([" "],s)
s=A.f([],s)
for(o=o.O(0,a),q=o.length,p=0;p<o.length;o.length===q||(0,A.c_)(o),++p)s.push(" "+o[p])
B.e.aJ(r,s)
r.push(" ")
o=r.length
s=this.b
p=0
for(;p<r.length;r.length===o||(0,A.c_)(r),++p)s.E(r[p],"lightgreen")}else{o=this.b
o.D()
o.E(" No demo called '"+a+"' found.","orange")
o.aQ(" Input `list` to see available demos.")
o.D()}},
$S:7}
A.dm.prototype={
$1(a){var s
if(this.a.M(a))v.G.window.open(a+".html","_self")
else{s=this.b
s.D()
s.E(" No demo called '"+a+"' found.","orange")
s.aQ(" Input `list` to see available demos.")
s.D()}},
$S:7};(function aliases(){var s=J.M.prototype
s.b0=s.h})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._static_2,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u
s(A,"i4","fL",2)
s(A,"i5","fM",2)
s(A,"i6","fN",2)
r(A,"eF","hZ",0)
s(A,"i7","hR",4)
q(A,"i8","hS",5)
p(A.m.prototype,"gav","bc",5)
o(A.aR.prototype,"gbj","bk",0)
s(A,"eI","fP",22)
var n
o(n=A.bG.prototype,"gaf","N",0)
o(n,"gad","I",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.d,null)
q(A.d,[A.dx,J.bn,A.aJ,J.be,A.k,A.R,A.ci,A.S,A.a8,A.bk,A.at,A.ah,A.bi,A.cA,A.ca,A.as,A.b_,A.aC,A.c7,A.bs,A.c5,A.cX,A.A,A.bS,A.bX,A.b1,A.bK,A.y,A.ae,A.bN,A.bM,A.O,A.m,A.bL,A.bQ,A.bT,A.aR,A.bV,A.d5,A.aK,A.cW,A.ag,A.l,A.bj,A.cI,A.bC,A.aL,A.cJ,A.c4,A.t,A.bW,A.bH,A.K,A.cc,A.a7,A.a9,A.ac,A.bG,A.cp])
q(J.bn,[J.bp,J.av,J.ax,J.aw,J.ay,J.a6,J.T])
q(J.ax,[J.M,J.o,A.aa,A.aF])
q(J.M,[J.bD,J.W,J.L])
r(J.bo,A.aJ)
r(J.c6,J.o)
q(J.a6,[J.au,J.bq])
q(A.k,[A.aA,A.H,A.br,A.bJ,A.bF,A.bR,A.bf,A.E,A.aN,A.bI,A.V,A.bh])
q(A.R,[A.c1,A.c2,A.co,A.de,A.dg,A.cF,A.cE,A.d6,A.cT,A.cm,A.cl,A.d0,A.cy,A.cx,A.ct,A.cu,A.cv,A.dk,A.dm])
q(A.c1,[A.dq,A.cG,A.cH,A.d2,A.d1,A.cK,A.cP,A.cO,A.cM,A.cL,A.cS,A.cR,A.cQ,A.cn,A.ck,A.cY,A.d8,A.d_,A.d9,A.ce,A.cf,A.cg,A.ch,A.cw,A.cr,A.cs,A.dn,A.dj,A.dl])
r(A.aq,A.S)
q(A.aq,[A.aB,A.ar])
r(A.bU,A.ah)
r(A.C,A.bU)
r(A.bl,A.bi)
r(A.aH,A.H)
q(A.co,[A.cj,A.ap])
r(A.U,A.aC)
r(A.az,A.U)
q(A.c2,[A.df,A.d7,A.da,A.cU,A.c8,A.cd])
q(A.aF,[A.bt,A.ab])
q(A.ab,[A.aU,A.aW])
r(A.aV,A.aU)
r(A.aD,A.aV)
r(A.aX,A.aW)
r(A.aE,A.aX)
q(A.aD,[A.bu,A.bv])
q(A.aE,[A.bw,A.bx,A.by,A.bz,A.bA,A.aG,A.bB])
r(A.b2,A.bR)
r(A.b0,A.ae)
r(A.aQ,A.b0)
r(A.af,A.aQ)
r(A.bO,A.bN)
r(A.aP,A.bO)
r(A.aO,A.bM)
r(A.bP,A.bQ)
r(A.cZ,A.d5)
r(A.aZ,A.aK)
r(A.aT,A.aZ)
q(A.E,[A.aI,A.bm])
r(A.aS,A.aB)
r(A.cq,A.cc)
q(A.cI,[A.c9,A.aM])
s(A.aU,A.l)
s(A.aV,A.at)
s(A.aW,A.l)
s(A.aX,A.at)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{a:"int",r:"double",eN:"num",u:"String",eG:"bool",t:"Null",h:"List",d:"Object",iA:"Map",j:"JSObject"},mangledNames:{},types:["~()","t()","~(~())","t(@)","~(@)","~(d,B)","t(j)","~(u)","G<~>()","@(@)","@(@,u)","@(u)","t(~())","t(@,B)","~(a,@)","t(d,B)","~(d?,d?)","a(a,a)","a9(j)","a7(j)","u()","~(cz)","a(a)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.C&&a.b(c.a)&&b.b(c.b)}}
A.h6(v.typeUniverse,JSON.parse('{"bD":"M","W":"M","L":"M","iB":"aa","bp":{"e":[]},"av":{"e":[]},"ax":{"j":[]},"M":{"j":[]},"o":{"h":["1"],"j":[]},"bo":{"aJ":[]},"c6":{"o":["1"],"h":["1"],"j":[]},"a6":{"r":[]},"au":{"r":[],"a":[],"e":[]},"bq":{"r":[],"e":[]},"T":{"u":[],"e":[]},"aA":{"k":[]},"aq":{"S":["1"]},"aB":{"S":["1"]},"ar":{"S":["1"]},"aH":{"H":[],"k":[]},"br":{"k":[]},"bJ":{"k":[]},"b_":{"B":[]},"bF":{"k":[]},"U":{"aC":["1","2"]},"az":{"U":["1","2"],"aC":["1","2"]},"aa":{"j":[],"e":[]},"aF":{"j":[]},"bt":{"j":[],"e":[]},"ab":{"v":["1"],"j":[]},"aD":{"l":["r"],"h":["r"],"v":["r"],"j":[]},"aE":{"l":["a"],"h":["a"],"v":["a"],"j":[]},"bu":{"l":["r"],"h":["r"],"v":["r"],"j":[],"e":[],"l.E":"r"},"bv":{"l":["r"],"h":["r"],"v":["r"],"j":[],"e":[],"l.E":"r"},"bw":{"l":["a"],"h":["a"],"v":["a"],"j":[],"e":[],"l.E":"a"},"bx":{"l":["a"],"h":["a"],"v":["a"],"j":[],"e":[],"l.E":"a"},"by":{"l":["a"],"h":["a"],"v":["a"],"j":[],"e":[],"l.E":"a"},"bz":{"l":["a"],"h":["a"],"v":["a"],"j":[],"e":[],"l.E":"a"},"bA":{"cC":[],"l":["a"],"h":["a"],"v":["a"],"j":[],"e":[],"l.E":"a"},"aG":{"l":["a"],"h":["a"],"v":["a"],"j":[],"e":[],"l.E":"a"},"bB":{"l":["a"],"h":["a"],"v":["a"],"j":[],"e":[],"l.E":"a"},"bR":{"k":[]},"b2":{"H":[],"k":[]},"b1":{"cz":[]},"y":{"k":[]},"af":{"ae":["1"]},"aO":{"bM":["1"]},"m":{"G":["1"]},"aQ":{"ae":["1"]},"b0":{"ae":["1"]},"aT":{"aK":["1"]},"aZ":{"aK":["1"]},"bf":{"k":[]},"H":{"k":[]},"E":{"k":[]},"aI":{"k":[]},"bm":{"k":[]},"aN":{"k":[]},"bI":{"k":[]},"V":{"k":[]},"bh":{"k":[]},"bC":{"k":[]},"aL":{"k":[]},"aS":{"aB":["1"],"S":["1"]},"bW":{"B":[]},"fn":{"h":["a"]},"fJ":{"h":["a"]},"fI":{"h":["a"]},"fl":{"h":["a"]},"fH":{"h":["a"]},"fm":{"h":["a"]},"cC":{"h":["a"]},"fj":{"h":["r"]},"fk":{"h":["r"]}}'))
A.h5(v.typeUniverse,JSON.parse('{"aq":1,"bk":1,"at":1,"bi":2,"bs":1,"ab":1,"aQ":1,"bO":1,"bN":1,"b0":1,"bQ":1,"bP":1,"bT":1,"aR":1,"bV":1,"aZ":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.dc
return{o:s("K"),Q:s("k"),Z:s("iy"),U:s("o<K>"),G:s("o<h<K>>"),f:s("o<d>"),s:s("o<u>"),w:s("o<cC>"),b:s("o<@>"),t:s("o<a>"),T:s("av"),m:s("j"),g:s("L"),p:s("v<@>"),V:s("a7"),a:s("h<u>"),j:s("h<@>"),q:s("a9"),P:s("t"),K:s("d"),L:s("iC"),F:s("+()"),l:s("B"),N:s("u"),E:s("cz"),R:s("e"),_:s("H"),A:s("W"),c:s("m<@>"),h:s("m<a>"),D:s("m<~>"),y:s("eG"),i:s("r"),z:s("@"),v:s("@(d)"),C:s("@(d,B)"),S:s("a"),O:s("G<t>?"),B:s("j?"),X:s("d?"),x:s("u?"),u:s("eG?"),I:s("r?"),J:s("a?"),M:s("eN?"),H:s("eN"),n:s("~"),d:s("~(d)"),k:s("~(d,B)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.w=J.bn.prototype
B.e=J.o.prototype
B.a=J.au.prototype
B.x=J.a6.prototype
B.f=J.T.prototype
B.y=J.L.prototype
B.z=J.ax.prototype
B.k=J.bD.prototype
B.h=J.W.prototype
B.m=new A.bk()
B.i=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.n=function() {
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
B.t=function(getTagFallback) {
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
B.o=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.r=function(hooks) {
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
B.q=function(hooks) {
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
B.p=function(hooks) {
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

B.u=new A.bC()
B.c=new A.ci()
B.b=new A.cZ()
B.v=new A.bW()
B.cZ=s([126,129,165,129,189,153,129,126],t.t)
B.a0=s([126,255,219,255,195,231,255,126],t.t)
B.dv=s([108,254,254,254,124,56,16,0],t.t)
B.bW=s([16,56,124,254,124,56,16,0],t.t)
B.aU=s([56,124,56,254,254,124,56,124],t.t)
B.b5=s([16,16,56,124,254,124,56,124],t.t)
B.ao=s([0,0,24,60,60,24,0,0],t.t)
B.ar=s([255,255,231,195,195,231,255,255],t.t)
B.aD=s([0,60,102,66,66,102,60,0],t.t)
B.cJ=s([255,195,153,189,189,153,195,255],t.t)
B.du=s([15,7,15,125,204,204,204,120],t.t)
B.dt=s([60,102,102,102,60,24,126,24],t.t)
B.cG=s([63,51,63,48,48,112,240,224],t.t)
B.K=s([127,99,127,99,99,103,230,192],t.t)
B.P=s([153,90,60,231,231,60,90,153],t.t)
B.al=s([128,224,248,254,248,224,128,0],t.t)
B.br=s([2,14,62,254,62,14,2,0],t.t)
B.c9=s([24,60,126,24,24,126,60,24],t.t)
B.c5=s([102,102,102,102,102,0,102,0],t.t)
B.cf=s([127,219,219,123,27,27,27,0],t.t)
B.cg=s([62,99,56,108,108,56,204,120],t.t)
B.bF=s([0,0,0,0,126,126,126,0],t.t)
B.bI=s([24,60,126,24,126,60,24,255],t.t)
B.F=s([24,60,126,24,24,24,24,0],t.t)
B.d3=s([24,24,24,24,126,60,24,0],t.t)
B.cX=s([0,24,12,254,12,24,0,0],t.t)
B.ai=s([0,48,96,254,96,48,0,0],t.t)
B.bN=s([0,0,192,192,192,254,0,0],t.t)
B.bk=s([0,36,102,255,102,36,0,0],t.t)
B.Z=s([0,24,60,126,255,255,0,0],t.t)
B.bJ=s([0,255,255,126,60,24,0,0],t.t)
B.aP=s([0,0,0,0,0,0,0,0],t.t)
B.bs=s([48,120,120,48,48,0,48,0],t.t)
B.N=s([108,108,108,0,0,0,0,0],t.t)
B.ac=s([108,108,254,108,254,108,108,0],t.t)
B.bR=s([48,124,192,120,12,248,48,0],t.t)
B.E=s([0,198,204,24,48,102,198,0],t.t)
B.cs=s([56,108,56,118,220,204,118,0],t.t)
B.ab=s([96,96,192,0,0,0,0,0],t.t)
B.J=s([24,48,96,96,96,48,24,0],t.t)
B.bo=s([96,48,24,24,24,48,96,0],t.t)
B.cj=s([0,102,60,255,60,102,0,0],t.t)
B.dC=s([0,48,48,252,48,48,0,0],t.t)
B.bT=s([0,0,0,0,0,48,48,96],t.t)
B.bj=s([0,0,0,252,0,0,0,0],t.t)
B.c7=s([0,0,0,0,0,48,48,0],t.t)
B.U=s([6,12,24,48,96,192,128,0],t.t)
B.aX=s([124,198,206,222,246,230,124,0],t.t)
B.ca=s([48,112,48,48,48,48,252,0],t.t)
B.bP=s([120,204,12,56,96,204,252,0],t.t)
B.dx=s([120,204,12,56,12,204,120,0],t.t)
B.bq=s([28,60,108,204,254,12,30,0],t.t)
B.cY=s([252,192,248,12,12,204,120,0],t.t)
B.de=s([56,96,192,248,204,204,120,0],t.t)
B.bQ=s([252,204,12,24,48,48,48,0],t.t)
B.cm=s([120,204,204,120,204,204,120,0],t.t)
B.b3=s([120,204,204,124,12,24,112,0],t.t)
B.cR=s([0,48,48,0,0,48,48,0],t.t)
B.aG=s([0,48,48,0,0,48,48,96],t.t)
B.bp=s([24,48,96,192,96,48,24,0],t.t)
B.be=s([0,0,252,0,0,252,0,0],t.t)
B.aq=s([96,48,24,12,24,48,96,0],t.t)
B.ag=s([120,204,12,24,48,0,48,0],t.t)
B.da=s([124,198,222,222,222,192,120,0],t.t)
B.c1=s([48,120,204,204,252,204,204,0],t.t)
B.aA=s([252,102,102,124,102,102,252,0],t.t)
B.a2=s([60,102,192,192,192,102,60,0],t.t)
B.V=s([248,108,102,102,102,108,248,0],t.t)
B.a8=s([254,98,104,120,104,98,254,0],t.t)
B.cd=s([254,98,104,120,104,96,240,0],t.t)
B.ae=s([60,102,192,192,206,102,62,0],t.t)
B.ah=s([204,204,204,252,204,204,204,0],t.t)
B.cB=s([120,48,48,48,48,48,120,0],t.t)
B.bD=s([30,12,12,12,204,204,120,0],t.t)
B.bv=s([230,102,108,120,108,102,230,0],t.t)
B.bu=s([240,96,96,96,98,102,254,0],t.t)
B.aB=s([198,238,254,254,214,198,198,0],t.t)
B.M=s([198,230,246,222,206,198,198,0],t.t)
B.cL=s([56,108,198,198,198,108,56,0],t.t)
B.b9=s([252,102,102,124,96,96,240,0],t.t)
B.cv=s([120,204,204,204,220,120,28,0],t.t)
B.D=s([252,102,102,124,108,102,230,0],t.t)
B.a5=s([120,204,224,112,28,204,120,0],t.t)
B.dn=s([252,180,48,48,48,48,120,0],t.t)
B.ay=s([204,204,204,204,204,204,252,0],t.t)
B.R=s([204,204,204,204,204,120,48,0],t.t)
B.cE=s([198,198,198,214,254,238,198,0],t.t)
B.cy=s([198,198,108,56,56,108,198,0],t.t)
B.T=s([204,204,204,120,48,48,120,0],t.t)
B.H=s([254,198,140,24,50,102,254,0],t.t)
B.bl=s([120,96,96,96,96,96,120,0],t.t)
B.cq=s([192,96,48,24,12,6,2,0],t.t)
B.bn=s([120,24,24,24,24,24,120,0],t.t)
B.dd=s([16,56,108,198,0,0,0,0],t.t)
B.C=s([0,0,0,0,0,0,0,255],t.t)
B.az=s([48,48,24,0,0,0,0,0],t.t)
B.d4=s([0,0,120,12,124,204,118,0],t.t)
B.c4=s([224,96,96,124,102,102,220,0],t.t)
B.cx=s([0,0,120,204,192,204,120,0],t.t)
B.aV=s([28,12,12,124,204,204,118,0],t.t)
B.dg=s([0,0,120,204,252,192,120,0],t.t)
B.aE=s([56,108,96,240,96,96,240,0],t.t)
B.cu=s([0,0,118,204,204,124,12,248],t.t)
B.ap=s([224,96,108,118,102,102,230,0],t.t)
B.ck=s([48,0,112,48,48,48,120,0],t.t)
B.by=s([12,0,12,12,12,204,204,120],t.t)
B.b1=s([224,96,102,108,120,108,230,0],t.t)
B.bA=s([112,48,48,48,48,48,120,0],t.t)
B.bi=s([0,0,204,254,254,214,198,0],t.t)
B.bB=s([0,0,248,204,204,204,204,0],t.t)
B.b4=s([0,0,120,204,204,204,120,0],t.t)
B.dk=s([0,0,220,102,102,124,96,240],t.t)
B.dh=s([0,0,118,204,204,124,12,30],t.t)
B.bf=s([0,0,220,118,102,96,240,0],t.t)
B.cO=s([0,0,124,192,120,12,248,0],t.t)
B.cH=s([16,48,124,48,48,52,24,0],t.t)
B.bZ=s([0,0,204,204,204,204,118,0],t.t)
B.aT=s([0,0,204,204,204,120,48,0],t.t)
B.b8=s([0,0,198,214,254,254,108,0],t.t)
B.bw=s([0,0,198,108,56,108,198,0],t.t)
B.dr=s([0,0,204,204,204,124,12,248],t.t)
B.d2=s([0,0,252,152,48,100,252,0],t.t)
B.aZ=s([28,48,48,224,48,48,28,0],t.t)
B.cN=s([24,24,24,0,24,24,24,0],t.t)
B.at=s([224,48,48,28,48,48,224,0],t.t)
B.dB=s([118,220,0,0,0,0,0,0],t.t)
B.aS=s([0,16,56,108,198,198,254,0],t.t)
B.ak=s([120,204,192,204,120,24,12,120],t.t)
B.d0=s([0,204,0,204,204,204,126,0],t.t)
B.dq=s([28,0,120,204,252,192,120,0],t.t)
B.bS=s([126,195,60,6,62,102,63,0],t.t)
B.a7=s([204,0,120,12,124,204,126,0],t.t)
B.aW=s([224,0,120,12,124,204,126,0],t.t)
B.Y=s([48,48,120,12,124,204,126,0],t.t)
B.bb=s([0,0,120,192,192,120,12,56],t.t)
B.d9=s([126,195,60,102,126,96,60,0],t.t)
B.aC=s([204,0,120,204,252,192,120,0],t.t)
B.cP=s([224,0,120,204,252,192,120,0],t.t)
B.d1=s([204,0,112,48,48,48,120,0],t.t)
B.cF=s([124,198,56,24,24,24,60,0],t.t)
B.aO=s([224,0,112,48,48,48,120,0],t.t)
B.dw=s([198,56,108,198,254,198,198,0],t.t)
B.cM=s([48,48,0,120,204,252,204,0],t.t)
B.bt=s([28,0,252,96,120,96,252,0],t.t)
B.dp=s([0,0,127,12,127,204,127,0],t.t)
B.aH=s([62,108,204,254,204,204,206,0],t.t)
B.di=s([120,204,0,120,204,204,120,0],t.t)
B.a3=s([0,204,0,120,204,204,120,0],t.t)
B.dy=s([0,224,0,120,204,204,120,0],t.t)
B.aF=s([120,204,0,204,204,204,126,0],t.t)
B.cI=s([0,224,0,204,204,204,126,0],t.t)
B.an=s([0,204,0,204,204,124,12,248],t.t)
B.a9=s([195,24,60,102,102,60,24,0],t.t)
B.cV=s([204,0,204,204,204,204,120,0],t.t)
B.O=s([24,24,126,192,192,126,24,24],t.t)
B.aw=s([56,108,100,240,96,230,252,0],t.t)
B.aQ=s([204,204,120,252,48,252,48,48],t.t)
B.d5=s([248,204,204,250,198,207,198,199],t.t)
B.bE=s([14,27,24,60,24,24,216,112],t.t)
B.as=s([28,0,120,12,124,204,126,0],t.t)
B.c3=s([56,0,112,48,48,48,120,0],t.t)
B.av=s([0,28,0,120,204,204,120,0],t.t)
B.cn=s([0,28,0,204,204,204,126,0],t.t)
B.aL=s([0,248,0,248,204,204,204,0],t.t)
B.cD=s([252,0,204,236,252,220,204,0],t.t)
B.a4=s([60,108,108,62,0,126,0,0],t.t)
B.c0=s([56,108,108,56,0,124,0,0],t.t)
B.cW=s([48,0,48,96,192,204,120,0],t.t)
B.aN=s([0,0,0,252,192,192,0,0],t.t)
B.au=s([0,0,0,252,12,12,0,0],t.t)
B.cQ=s([195,198,204,222,51,102,204,15],t.t)
B.am=s([195,198,204,219,55,111,207,3],t.t)
B.bH=s([24,24,0,24,24,24,24,0],t.t)
B.bG=s([0,51,102,204,102,51,0,0],t.t)
B.b0=s([0,204,102,51,102,204,0,0],t.t)
B.cp=s([34,136,34,136,34,136,34,136],t.t)
B.dj=s([85,170,85,170,85,170,85,170],t.t)
B.bz=s([219,119,219,238,219,119,219,238],t.t)
B.aR=s([24,24,24,24,24,24,24,24],t.t)
B.aM=s([24,24,24,24,248,24,24,24],t.t)
B.bO=s([24,24,248,24,248,24,24,24],t.t)
B.dA=s([54,54,54,54,246,54,54,54],t.t)
B.cb=s([0,0,0,0,254,54,54,54],t.t)
B.aI=s([0,0,248,24,248,24,24,24],t.t)
B.a1=s([54,54,246,6,246,54,54,54],t.t)
B.ch=s([54,54,54,54,54,54,54,54],t.t)
B.c_=s([0,0,254,6,246,54,54,54],t.t)
B.cl=s([54,54,246,6,254,0,0,0],t.t)
B.af=s([54,54,54,54,254,0,0,0],t.t)
B.S=s([24,24,248,24,248,0,0,0],t.t)
B.X=s([0,0,0,0,248,24,24,24],t.t)
B.Q=s([24,24,24,24,31,0,0,0],t.t)
B.bM=s([24,24,24,24,255,0,0,0],t.t)
B.bd=s([0,0,0,0,255,24,24,24],t.t)
B.cU=s([24,24,24,24,31,24,24,24],t.t)
B.bK=s([0,0,0,0,255,0,0,0],t.t)
B.ci=s([24,24,24,24,255,24,24,24],t.t)
B.ct=s([24,24,31,24,31,24,24,24],t.t)
B.b2=s([54,54,54,54,55,54,54,54],t.t)
B.df=s([54,54,55,48,63,0,0,0],t.t)
B.d8=s([0,0,63,48,55,54,54,54],t.t)
B.bx=s([54,54,247,0,255,0,0,0],t.t)
B.bm=s([0,0,255,0,247,54,54,54],t.t)
B.aK=s([54,54,55,48,55,54,54,54],t.t)
B.aJ=s([0,0,255,0,255,0,0,0],t.t)
B.ds=s([54,54,247,0,247,54,54,54],t.t)
B.cz=s([24,24,255,0,255,0,0,0],t.t)
B.A=s([54,54,54,54,255,0,0,0],t.t)
B.dl=s([0,0,255,0,255,24,24,24],t.t)
B.bU=s([0,0,0,0,255,54,54,54],t.t)
B.cc=s([54,54,54,54,63,0,0,0],t.t)
B.bh=s([24,24,31,24,31,0,0,0],t.t)
B.c6=s([0,0,31,24,31,24,24,24],t.t)
B.cw=s([0,0,0,0,63,54,54,54],t.t)
B.cC=s([54,54,54,54,255,54,54,54],t.t)
B.bC=s([24,24,255,24,255,24,24,24],t.t)
B.d6=s([24,24,24,24,248,0,0,0],t.t)
B.aY=s([0,0,0,0,31,24,24,24],t.t)
B.bV=s([255,255,255,255,255,255,255,255],t.t)
B.bY=s([0,0,0,0,255,255,255,255],t.t)
B.b7=s([240,240,240,240,240,240,240,240],t.t)
B.ce=s([15,15,15,15,15,15,15,15],t.t)
B.cT=s([255,255,255,255,0,0,0,0],t.t)
B.dz=s([0,0,118,220,200,220,118,0],t.t)
B.db=s([0,120,204,248,204,248,192,192],t.t)
B.ad=s([0,252,204,192,192,192,192,0],t.t)
B.bX=s([0,254,108,108,108,108,108,0],t.t)
B.d7=s([252,204,96,48,96,204,252,0],t.t)
B.ba=s([0,0,126,216,216,216,112,0],t.t)
B.bg=s([0,102,102,102,102,124,96,192],t.t)
B.cr=s([0,118,220,24,24,24,24,0],t.t)
B.a6=s([252,48,120,204,204,120,48,252],t.t)
B.ax=s([56,108,198,254,198,108,56,0],t.t)
B.aa=s([56,108,198,198,108,108,238,0],t.t)
B.B=s([28,48,24,124,204,204,120,0],t.t)
B.dm=s([0,0,126,219,219,126,0,0],t.t)
B.bc=s([6,12,126,219,219,126,96,192],t.t)
B.a_=s([56,96,192,248,192,96,56,0],t.t)
B.c8=s([120,204,204,204,204,204,204,0],t.t)
B.cA=s([0,252,0,252,0,252,0,0],t.t)
B.W=s([48,48,252,48,48,0,252,0],t.t)
B.b_=s([96,48,24,48,96,0,252,0],t.t)
B.cK=s([24,48,96,48,24,0,252,0],t.t)
B.b6=s([14,27,27,24,24,24,24,24],t.t)
B.d_=s([24,24,24,24,24,216,216,112],t.t)
B.c2=s([48,48,0,252,0,48,48,0],t.t)
B.G=s([0,118,220,0,118,220,0,0],t.t)
B.co=s([56,108,108,56,0,0,0,0],t.t)
B.I=s([0,0,0,24,24,0,0,0],t.t)
B.dc=s([0,0,0,0,24,0,0,0],t.t)
B.L=s([15,12,12,12,236,108,60,28],t.t)
B.bL=s([120,108,108,108,108,0,0,0],t.t)
B.aj=s([112,24,48,96,120,0,0,0],t.t)
B.cS=s([0,0,60,60,60,60,0,0],t.t)
B.dD=new A.bl(["\u263a",B.cZ,"\u263b",B.a0,"\u2665",B.dv,"\u2666",B.bW,"\u2663",B.aU,"\u2660",B.b5,"\u2022",B.ao,"\u25d8",B.ar,"\u25cb",B.aD,"\u25d9",B.cJ,"\u2642",B.du,"\u2640",B.dt,"\u266a",B.cG,"\u266b",B.K,"\u263c",B.P,"\u25ba",B.al,"\u25c4",B.br,"\u2195",B.c9,"\u203c",B.c5,"\xb6",B.cf,"\xa7",B.cg,"\u25ac",B.bF,"\u21a8",B.bI,"\u2191",B.F,"\u2193",B.d3,"\u2192",B.cX,"\u2190",B.ai,"\u221f",B.bN,"\u2194",B.bk,"\u25b2",B.Z,"\u25bc",B.bJ," ",B.aP,"!",B.bs,'"',B.N,"#",B.ac,"$",B.bR,"%",B.E,"&",B.cs,"'",B.ab,"(",B.J,")",B.bo,"*",B.cj,"+",B.dC,",",B.bT,"-",B.bj,".",B.c7,"/",B.U,"0",B.aX,"1",B.ca,"2",B.bP,"3",B.dx,"4",B.bq,"5",B.cY,"6",B.de,"7",B.bQ,"8",B.cm,"9",B.b3,":",B.cR,";",B.aG,"<",B.bp,"=",B.be,">",B.aq,"?",B.ag,"@",B.da,"A",B.c1,"B",B.aA,"C",B.a2,"D",B.V,"E",B.a8,"F",B.cd,"G",B.ae,"H",B.ah,"I",B.cB,"J",B.bD,"K",B.bv,"L",B.bu,"M",B.aB,"N",B.M,"O",B.cL,"P",B.b9,"Q",B.cv,"R",B.D,"S",B.a5,"T",B.dn,"U",B.ay,"V",B.R,"W",B.cE,"X",B.cy,"Y",B.T,"Z",B.H,"[",B.bl,"\\",B.cq,"]",B.bn,"^",B.dd,"_",B.C,"`",B.az,"a",B.d4,"b",B.c4,"c",B.cx,"d",B.aV,"e",B.dg,"f",B.aE,"g",B.cu,"h",B.ap,"i",B.ck,"j",B.by,"k",B.b1,"l",B.bA,"m",B.bi,"n",B.bB,"o",B.b4,"p",B.dk,"q",B.dh,"r",B.bf,"s",B.cO,"t",B.cH,"u",B.bZ,"v",B.aT,"w",B.b8,"x",B.bw,"y",B.dr,"z",B.d2,"{",B.aZ,"|",B.cN,"}",B.at,"~",B.dB,"\u2302",B.aS,"\xc7",B.ak,"\xfc",B.d0,"\xe9",B.dq,"\xe2",B.bS,"\xe4",B.a7,"\xe0",B.aW,"\xe5",B.Y,"\xe7",B.bb,"\xea",B.d9,"\xeb",B.aC,"\xe8",B.cP,"\xef",B.d1,"\xee",B.cF,"\xec",B.aO,"\xc4",B.dw,"\xc5",B.cM,"\xc9",B.bt,"\xe6",B.dp,"\xc6",B.aH,"\xf4",B.di,"\xf6",B.a3,"\xf2",B.dy,"\xfb",B.aF,"\xf9",B.cI,"\xff",B.an,"\xd6",B.a9,"\xdc",B.cV,"\xa2",B.O,"\xa3",B.aw,"\xa5",B.aQ,"\u20a7",B.d5,"\u0192",B.bE,"\xe1",B.as,"\xed",B.c3,"\xf3",B.av,"\xfa",B.cn,"\xf1",B.aL,"\xd1",B.cD,"\xaa",B.a4,"\xba",B.c0,"\xbf",B.cW,"\u2310",B.aN,"\xac",B.au,"\xbd",B.cQ,"\xbc",B.am,"\xa1",B.bH,"\xab",B.bG,"\xbb",B.b0,"\u2591",B.cp,"\u2592",B.dj,"\u2593",B.bz,"\u2502",B.aR,"\u2524",B.aM,"\u2561",B.bO,"\u2562",B.dA,"\u2556",B.cb,"\u2555",B.aI,"\u2563",B.a1,"\u2551",B.ch,"\u2557",B.c_,"\u255d",B.cl,"\u255c",B.af,"\u255b",B.S,"\u2510",B.X,"\u2514",B.Q,"\u2534",B.bM,"\u252c",B.bd,"\u251c",B.cU,"\u2500",B.bK,"\u253c",B.ci,"\u255e",B.ct,"\u255f",B.b2,"\u255a",B.df,"\u2554",B.d8,"\u2569",B.bx,"\u2566",B.bm,"\u2560",B.aK,"\u2550",B.aJ,"\u256c",B.ds,"\u2567",B.cz,"\u2568",B.A,"\u2564",B.dl,"\u2565",B.bU,"\u2559",B.cc,"\u2558",B.bh,"\u2552",B.c6,"\u2553",B.cw,"\u256b",B.cC,"\u256a",B.bC,"\u2518",B.d6,"\u250c",B.aY,"\u2588",B.bV,"\u2584",B.bY,"\u258c",B.b7,"\u2590",B.ce,"\u2580",B.cT,"\u03b1",B.dz,"\xdf",B.db,"\u0393",B.ad,"\u03c0",B.bX,"\u03a3",B.d7,"\u03c3",B.ba,"\xb5",B.bg,"\u03c4",B.cr,"\u03a6",B.a6,"\u0398",B.ax,"\u03a9",B.aa,"\u03b4",B.B,"\u221e",B.dm,"\u03c6",B.bc,"\u03b5",B.a_,"\u2229",B.c8,"\u2261",B.cA,"\xb1",B.W,"\u2265",B.b_,"\u2264",B.cK,"\u2320",B.b6,"\u2321",B.d_,"\xf7",B.c2,"\u2248",B.G,"\xb0",B.co,"\u2219",B.I,"\xb7",B.dc,"\u221a",B.L,"\u207f",B.bL,"\xb2",B.aj,"\u25a0",B.cS],A.dc("bl<u,h<a>>"))
B.dE=new A.c9(0,"replace")
B.d=new A.aM(0,"ready")
B.l=new A.aM(2,"awaitingString")
B.dF=new A.aM(3,"awaitingMouseClick")
B.dG=A.D("iu")
B.dH=A.D("iv")
B.dI=A.D("fj")
B.dJ=A.D("fk")
B.dK=A.D("fl")
B.dL=A.D("fm")
B.dM=A.D("fn")
B.dN=A.D("d")
B.dO=A.D("fH")
B.dP=A.D("cC")
B.dQ=A.D("fI")
B.dR=A.D("fJ")})();(function staticFields(){$.cV=null
$.x=A.f([],t.f)
$.e6=null
$.e1=null
$.e0=null
$.eM=null
$.eE=null
$.eP=null
$.db=null
$.dh=null
$.dS=null
$.aY=A.f([],A.dc("o<h<d>?>"))
$.ai=null
$.b9=null
$.ba=null
$.dM=!1
$.i=B.b})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"ix","eT",()=>A.dd("_$dart_dartClosure"))
s($,"iw","dr",()=>A.dd("_$dart_dartClosure_dartJSInterop"))
s($,"iU","f6",()=>B.b.aT(new A.dq()))
s($,"iS","f5",()=>A.f([new J.bo()],A.dc("o<aJ>")))
s($,"iG","eW",()=>A.I(A.cB({
toString:function(){return"$receiver$"}})))
s($,"iH","eX",()=>A.I(A.cB({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"iI","eY",()=>A.I(A.cB(null)))
s($,"iJ","eZ",()=>A.I(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"iM","f1",()=>A.I(A.cB(void 0)))
s($,"iN","f2",()=>A.I(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"iL","f0",()=>A.I(A.ed(null)))
s($,"iK","f_",()=>A.I(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"iP","f4",()=>A.I(A.ed(void 0)))
s($,"iO","f3",()=>A.I(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"iQ","dW",()=>A.fK())
s($,"iz","ds",()=>$.f6())
s($,"iR","dt",()=>A.dV(B.dN))
s($,"iF","eV",()=>A.dz(8,0,t.S))
s($,"iE","eU",()=>A.dz(8,255,t.S))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.aa,SharedArrayBuffer:A.aa,ArrayBufferView:A.aF,DataView:A.bt,Float32Array:A.bu,Float64Array:A.bv,Int16Array:A.bw,Int32Array:A.bx,Int8Array:A.by,Uint16Array:A.bz,Uint32Array:A.bA,Uint8ClampedArray:A.aG,CanvasPixelArray:A.aG,Uint8Array:A.bB})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.ab.$nativeSuperclassTag="ArrayBufferView"
A.aU.$nativeSuperclassTag="ArrayBufferView"
A.aV.$nativeSuperclassTag="ArrayBufferView"
A.aD.$nativeSuperclassTag="ArrayBufferView"
A.aW.$nativeSuperclassTag="ArrayBufferView"
A.aX.$nativeSuperclassTag="ArrayBufferView"
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
var s=A.di
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=index.js.map
