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
if(a[b]!==s){A.iu(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.t(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.dK(b)
return new s(c,this)}:function(){if(s===null)s=A.dK(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.dK(a).prototype
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
dO(a,b,c,d){return{i:a,p:b,e:c,x:d}},
dL(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.dM==null){A.ik()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.c(A.ec("Return interceptor for "+A.m(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.cW
if(o==null)o=$.cW=A.dc(n)
p=q[o]}if(p!=null)return p
p=A.ip(a)
if(p!=null)return p
if(typeof a=="function")return B.G
s=Object.getPrototypeOf(a)
if(s==null)return B.t
if(s===Object.prototype)return B.t
if(typeof q=="function"){o=$.cW
if(o==null)o=$.cW=A.dc(n)
Object.defineProperty(q,o,{value:B.l,enumerable:false,writable:true,configurable:true})
return B.l}return B.l},
fq(a,b){if(a>4294967295)throw A.c(A.e4(a,0,4294967295,"length",null))
return J.fr(new Array(a),b)},
fr(a,b){var s=A.t(a,b.i("n<0>"))
s.$flags=1
return s},
e0(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
fs(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.e0(r))break;++b}return b},
ft(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.b(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.e0(q))break}return b},
a1(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.at.prototype
return J.br.prototype}if(typeof a=="string")return J.T.prototype
if(a==null)return J.au.prototype
if(typeof a=="boolean")return J.bq.prototype
if(Array.isArray(a))return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.L.prototype
if(typeof a=="symbol")return J.ax.prototype
if(typeof a=="bigint")return J.av.prototype
return a}if(a instanceof A.d)return a
return J.dL(a)},
eJ(a){if(typeof a=="string")return J.T.prototype
if(a==null)return a
if(Array.isArray(a))return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.L.prototype
if(typeof a=="symbol")return J.ax.prototype
if(typeof a=="bigint")return J.av.prototype
return a}if(a instanceof A.d)return a
return J.dL(a)},
id(a){if(a==null)return a
if(Array.isArray(a))return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.L.prototype
if(typeof a=="symbol")return J.ax.prototype
if(typeof a=="bigint")return J.av.prototype
return a}if(a instanceof A.d)return a
return J.dL(a)},
ie(a){if(typeof a=="number")return J.a5.prototype
if(a==null)return a
if(!(a instanceof A.d))return J.V.prototype
return a},
ig(a){if(typeof a=="string")return J.T.prototype
if(a==null)return a
if(!(a instanceof A.d))return J.V.prototype
return a},
an(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.a1(a).B(a,b)},
G(a){return J.a1(a).gj(a)},
dR(a){return J.id(a).gv(a)},
dS(a){return J.eJ(a).gm(a)},
f7(a){return J.a1(a).gl(a)},
dT(a){return J.ie(a).bJ(a)},
bd(a){return J.a1(a).h(a)},
f8(a){return J.ig(a).bK(a)},
bo:function bo(){},
bq:function bq(){},
au:function au(){},
aw:function aw(){},
M:function M(){},
bE:function bE(){},
V:function V(){},
L:function L(){},
av:function av(){},
ax:function ax(){},
n:function n(a){this.$ti=a},
bp:function bp(){},
c7:function c7(a){this.$ti=a},
be:function be(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
a5:function a5(){},
at:function at(){},
br:function br(){},
T:function T(){}},A={ds:function ds(){},
fu(a){return new A.aA("Field '"+a+"' has not been initialized.")},
N(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
dz(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
dJ(a,b,c){return a},
dN(a){var s,r
for(s=$.w.length,r=0;r<s;++r)if(a===$.w[r])return!0
return!1},
fo(){return new A.U("No element")},
aA:function aA(a){this.a=a},
di:function di(){},
ci:function ci(){},
ap:function ap(){},
aB:function aB(){},
a7:function a7(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aq:function aq(a){this.$ti=a},
bl:function bl(){},
as:function as(){},
eS(a){var s=A.eR(a)
if(s!=null)return s
return"minified:"+a},
iV(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
m(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.bd(a)
return s},
ac(a){var s,r=$.e2
if(r==null)r=$.e2=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
bF(a){var s,r,q,p
if(a instanceof A.d)return A.v(A.ba(a),null)
s=J.a1(a)
if(s===B.E||s===B.H||t.A.b(a)){r=B.m(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.v(A.ba(a),null)},
e3(a){var s,r,q
if(a==null||typeof a=="number"||A.dF(a))return J.bd(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.R)return a.h(0)
if(a instanceof A.ag)return a.aI(!0)
s=$.f5()
for(r=0;r<1;++r){q=s[r].bL(a)
if(q!=null)return q}return"Instance of '"+A.bF(a)+"'"},
fx(a){var s=a.$thrownJsError
if(s==null)return null
return A.a2(s)},
fy(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.p(a,s)
a.$thrownJsError=s
s.stack=b.h(0)}},
b(a,b){if(a==null)J.dS(a)
throw A.c(A.ia(a,b))},
ia(a,b){var s,r="index"
if(!A.ev(b))return new A.E(!0,b,r,null)
s=J.dS(a)
if(b<0||b>=s)return A.dp(b,s,a,null,r)
return A.e5(b,r)},
dI(a){return new A.E(!0,a,null,null)},
c(a){return A.p(a,new Error())},
p(a,b){var s
if(a==null)a=new A.I()
b.dartException=a
s=A.iv
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
iv(){return J.bd(this.dartException)},
bb(a,b){throw A.p(a,b==null?new Error():b)},
bc(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.bb(A.hs(a,b,c),s)},
hs(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.aM("'"+s+"': Cannot "+o+" "+l+k+n)},
eQ(a){throw A.c(A.bi(a))},
J(a){var s,r,q,p,o,n
a=A.ir(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.t([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.cA(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
cB(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
eb(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
dt(a,b){var s=b==null,r=s?null:b.method
return new A.bs(a,r,s?null:b.receiver)},
am(a){if(a==null)return new A.ca(a)
if(a instanceof A.ar)return A.Q(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.Q(a,a.dartException)
return A.i0(a)},
Q(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
i0(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.a.bs(r,16)&8191)===10)switch(q){case 438:return A.Q(a,A.dt(A.m(s)+" (Error "+q+")",null))
case 445:case 5007:A.m(s)
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
g=p.A(s)
if(g!=null)return A.Q(a,A.dt(s,g))
else{g=o.A(s)
if(g!=null){g.method="call"
return A.Q(a,A.dt(s,g))}else if(n.A(s)!=null||m.A(s)!=null||l.A(s)!=null||k.A(s)!=null||j.A(s)!=null||m.A(s)!=null||i.A(s)!=null||h.A(s)!=null)return A.Q(a,new A.aH())}return A.Q(a,new A.bK(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.aK()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.Q(a,new A.E(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.aK()
return a},
a2(a){var s
if(a instanceof A.ar)return a.b
if(a==null)return new A.aZ(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.aZ(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
dP(a){if(a==null)return J.G(a)
if(typeof a=="object")return A.ac(a)
return J.G(a)},
i7(a){if(typeof a=="number")return B.F.gj(a)
if(a instanceof A.bY)return A.ac(a)
if(a instanceof A.ag)return a.gj(a)
return A.dP(a)},
ic(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=a.length
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
if(m==null)o[q]=b.N(q,p)
else m.b=p}else if(typeof q=="number"&&(q&0x3fffffff)===q){l=b.c
if(l==null){n=Object.create(null)
n["<non-identifier-key>"]=n
delete n["<non-identifier-key>"]
b.c=n
l=n}m=l[q]
if(m==null)l[q]=b.N(q,p)
else m.b=p}else{k=b.d
if(k==null){n=Object.create(null)
n["<non-identifier-key>"]=n
delete n["<non-identifier-key>"]
b.d=n
k=n}j=b.ae(q)
i=k[j]
if(i==null)k[j]=[b.N(q,p)]
else{r=b.af(i,q)
if(r>=0)i[r].b=p
else i.push(b.N(q,p))}}}return b},
hB(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.c(new A.cJ("Unsupported number of arguments for wrapped closure"))},
c_(a,b){var s=a.$identity
if(!!s)return s
s=A.i8(a,b)
a.$identity=s
return s},
i8(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.hB)},
fg(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.cj().constructor.prototype):Object.create(new A.ao(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.dZ(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.fc(a1,h,g)
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
fc(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.c("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.fa)}throw A.c("Error in functionType of tearoff")},
fd(a,b,c,d){var s=A.dY
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
dZ(a,b,c,d){if(c)return A.ff(a,b,d)
return A.fd(b.length,d,a,b)},
fe(a,b,c,d){var s=A.dY,r=A.fb
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
ff(a,b,c){var s,r
if($.dW==null)$.dW=A.dV("interceptor")
if($.dX==null)$.dX=A.dV("receiver")
s=b.length
r=A.fe(s,c,a,b)
return r},
dK(a){return A.fg(a)},
fa(a,b){return A.b5(v.typeUniverse,A.ba(a.a),b)},
dY(a){return a.a},
fb(a){return a.b},
dV(a){var s,r,q,p=new A.ao("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.c(A.a4("Field name "+a+" not found.",null))},
dc(a){return v.getIsolateTag(a)},
it(){return v.G},
ip(a){var s,r,q,p,o,n=$.eL.$1(a),m=$.db[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.dg[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.eD.$2(a,n)
if(q!=null){m=$.db[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.dg[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.dh(s)
$.db[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.dg[n]=s
return s}if(p==="-"){o=A.dh(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.eN(a,s)
if(p==="*")throw A.c(A.ec(n))
if(v.leafTags[n]===true){o=A.dh(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.eN(a,s)},
eN(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.dO(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
dh(a){return J.dO(a,!1,null,!!a.$iu)},
iq(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.dh(s)
else return J.dO(s,c,null,null)},
ik(){if(!0===$.dM)return
$.dM=!0
A.il()},
il(){var s,r,q,p,o,n,m,l
$.db=Object.create(null)
$.dg=Object.create(null)
A.ij()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.eO.$1(o)
if(n!=null){m=A.iq(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
ij(){var s,r,q,p,o,n,m=B.v()
m=A.ak(B.w,A.ak(B.x,A.ak(B.n,A.ak(B.n,A.ak(B.y,A.ak(B.z,A.ak(B.A(B.m),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.eL=new A.dd(p)
$.eD=new A.de(o)
$.eO=new A.df(n)},
ak(a,b){return a(b)||b},
i9(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
ir(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
C:function C(a,b){this.a=a
this.b=b},
bj:function bj(){},
bm:function bm(a,b){this.a=a
this.$ti=b},
aI:function aI(){},
cA:function cA(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aH:function aH(){},
bs:function bs(a,b,c){this.a=a
this.b=b
this.c=c},
bK:function bK(a){this.a=a},
ca:function ca(a){this.a=a},
ar:function ar(a,b){this.a=a
this.b=b},
aZ:function aZ(a){this.a=a
this.b=null},
R:function R(){},
c4:function c4(){},
c5:function c5(){},
co:function co(){},
cj:function cj(){},
ao:function ao(a,b){this.a=a
this.b=b},
bG:function bG(a){this.a=a},
az:function az(){},
c8:function c8(a,b){this.a=a
this.b=b
this.c=null},
ay:function ay(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dd:function dd(a){this.a=a},
de:function de(a){this.a=a},
df:function df(a){this.a=a},
ag:function ag(){},
bV:function bV(){},
a9:function a9(){},
aF:function aF(){},
bu:function bu(){},
aa:function aa(){},
aD:function aD(){},
aE:function aE(){},
bv:function bv(){},
bw:function bw(){},
bx:function bx(){},
by:function by(){},
bz:function bz(){},
bA:function bA(){},
bB:function bB(){},
aG:function aG(){},
bC:function bC(){},
aT:function aT(){},
aU:function aU(){},
aV:function aV(){},
aW:function aW(){},
dw(a,b){var s=b.c
return s==null?b.c=A.b3(a,"H",[b.x]):s},
e6(a){var s=a.w
if(s===6||s===7)return A.e6(a.x)
return s===11||s===12},
fB(a){return a.as},
c0(a){return A.d3(v.typeUniverse,a,!1)},
a_(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.a_(a1,s,a3,a4)
if(r===s)return a2
return A.ek(a1,r,!0)
case 7:s=a2.x
r=A.a_(a1,s,a3,a4)
if(r===s)return a2
return A.ej(a1,r,!0)
case 8:q=a2.y
p=A.aj(a1,q,a3,a4)
if(p===q)return a2
return A.b3(a1,a2.x,p)
case 9:o=a2.x
n=A.a_(a1,o,a3,a4)
m=a2.y
l=A.aj(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.dB(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.aj(a1,j,a3,a4)
if(i===j)return a2
return A.el(a1,k,i)
case 11:h=a2.x
g=A.a_(a1,h,a3,a4)
f=a2.y
e=A.hY(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.ei(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.aj(a1,d,a3,a4)
o=a2.x
n=A.a_(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.dC(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.c(A.bg("Attempted to substitute unexpected RTI kind "+a0))}},
aj(a,b,c,d){var s,r,q,p,o=b.length,n=A.d4(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.a_(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
hZ(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.d4(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.a_(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
hY(a,b,c,d){var s,r=b.a,q=A.aj(a,r,c,d),p=b.b,o=A.aj(a,p,c,d),n=b.c,m=A.hZ(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.bT()
s.a=q
s.b=o
s.c=m
return s},
t(a,b){a[v.arrayRti]=b
return a},
eG(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.ii(s)
return a.$S()}return null},
im(a,b){var s
if(A.e6(b))if(a instanceof A.R){s=A.eG(a)
if(s!=null)return s}return A.ba(a)},
ba(a){if(a instanceof A.d)return A.b7(a)
if(Array.isArray(a))return A.dD(a)
return A.dE(J.a1(a))},
dD(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
b7(a){var s=a.$ti
return s!=null?s:A.dE(a)},
dE(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.hz(a,s)},
hz(a,b){var s=a instanceof A.R?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.h5(v.typeUniverse,s.name)
b.$ccache=r
return r},
ii(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.d3(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
eK(a){return A.a0(A.b7(a))},
dH(a){var s
if(a instanceof A.ag)return A.ib(a.$r,a.aA())
s=a instanceof A.R?A.eG(a):null
if(s!=null)return s
if(t.R.b(a))return J.f7(a).a
if(Array.isArray(a))return A.dD(a)
return A.ba(a)},
a0(a){var s=a.r
return s==null?a.r=new A.bY(a):s},
ib(a,b){var s,r,q=b,p=q.length
if(p===0)return t.F
if(0>=p)return A.b(q,0)
s=A.b5(v.typeUniverse,A.dH(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.b(q,r)
s=A.en(v.typeUniverse,s,A.dH(q[r]))}return A.b5(v.typeUniverse,s,a)},
D(a){return A.a0(A.d3(v.typeUniverse,a,!1))},
hy(a){var s=this
s.b=A.hW(s)
return s.b(a)},
hW(a){var s,r,q,p
if(a===t.K)return A.hH
if(A.a3(a))return A.hL
s=a.w
if(s===6)return A.hw
if(s===1)return A.ex
if(s===7)return A.hC
r=A.hV(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.a3)){a.f="$i"+q
if(q==="f")return A.hF
if(a===t.m)return A.hE
return A.hK}}else if(s===10){p=A.i9(a.x,a.y)
return p==null?A.ex:p}return A.hu},
hV(a){if(a.w===8){if(a===t.S)return A.ev
if(a===t.i||a===t.H)return A.hG
if(a===t.N)return A.hJ
if(a===t.y)return A.dF}return null},
hx(a){var s=this,r=A.ht
if(A.a3(s))r=A.hj
else if(s===t.K)r=A.hg
else if(A.al(s)){r=A.hv
if(s===t.J)r=A.hc
else if(s===t.x)r=A.hi
else if(s===t.u)r=A.h8
else if(s===t.M)r=A.hf
else if(s===t.I)r=A.ha
else if(s===t.B)r=A.hd}else if(s===t.S)r=A.hb
else if(s===t.N)r=A.hh
else if(s===t.y)r=A.h7
else if(s===t.H)r=A.he
else if(s===t.i)r=A.h9
else if(s===t.m)r=A.Z
s.a=r
return s.a(a)},
hu(a){var s=this
if(a==null)return A.al(s)
return A.io(v.typeUniverse,A.im(a,s),s)},
hw(a){if(a==null)return!0
return this.x.b(a)},
hK(a){var s,r=this
if(a==null)return A.al(r)
s=r.f
if(a instanceof A.d)return!!a[s]
return!!J.a1(a)[s]},
hF(a){var s,r=this
if(a==null)return A.al(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.d)return!!a[s]
return!!J.a1(a)[s]},
hE(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.d)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
ew(a){if(typeof a=="object"){if(a instanceof A.d)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
ht(a){var s=this
if(a==null){if(A.al(s))return a}else if(s.b(a))return a
throw A.p(A.er(a,s),new Error())},
hv(a){var s=this
if(a==null||s.b(a))return a
throw A.p(A.er(a,s),new Error())},
er(a,b){return new A.b1("TypeError: "+A.ee(a,A.v(b,null)))},
ee(a,b){return A.c6(a)+": type '"+A.v(A.dH(a),null)+"' is not a subtype of type '"+b+"'"},
y(a,b){return new A.b1("TypeError: "+A.ee(a,b))},
hC(a){var s=this
return s.x.b(a)||A.dw(v.typeUniverse,s).b(a)},
hH(a){return a!=null},
hg(a){if(a!=null)return a
throw A.p(A.y(a,"Object"),new Error())},
hL(a){return!0},
hj(a){return a},
ex(a){return!1},
dF(a){return!0===a||!1===a},
h7(a){if(!0===a)return!0
if(!1===a)return!1
throw A.p(A.y(a,"bool"),new Error())},
h8(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.p(A.y(a,"bool?"),new Error())},
h9(a){if(typeof a=="number")return a
throw A.p(A.y(a,"double"),new Error())},
ha(a){if(typeof a=="number")return a
if(a==null)return a
throw A.p(A.y(a,"double?"),new Error())},
ev(a){return typeof a=="number"&&Math.floor(a)===a},
hb(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.p(A.y(a,"int"),new Error())},
hc(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.p(A.y(a,"int?"),new Error())},
hG(a){return typeof a=="number"},
he(a){if(typeof a=="number")return a
throw A.p(A.y(a,"num"),new Error())},
hf(a){if(typeof a=="number")return a
if(a==null)return a
throw A.p(A.y(a,"num?"),new Error())},
hJ(a){return typeof a=="string"},
hh(a){if(typeof a=="string")return a
throw A.p(A.y(a,"String"),new Error())},
hi(a){if(typeof a=="string")return a
if(a==null)return a
throw A.p(A.y(a,"String?"),new Error())},
Z(a){if(A.ew(a))return a
throw A.p(A.y(a,"JSObject"),new Error())},
hd(a){if(a==null)return a
if(A.ew(a))return a
throw A.p(A.y(a,"JSObject?"),new Error())},
eA(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.v(a[q],b)
return s},
hR(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.eA(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.v(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
es(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.t([],t.s)
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
if(l===8){p=A.i_(a.x)
o=a.y
return o.length>0?p+("<"+A.eA(o,b)+">"):p}if(l===10)return A.hR(a,b)
if(l===11)return A.es(a,b,null)
if(l===12)return A.es(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.b(b,n)
return b[n]}return"?"},
i_(a){var s=A.eR(a)
if(s!=null)return s
return"minified:"+a},
h6(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
h5(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.d3(a,b,!1)
else if(typeof m=="number"){s=m
r=A.b4(a,5,"#")
q=A.d4(s)
for(p=0;p<s;++p)q[p]=r
o=A.b3(a,b,q)
n[b]=o
return o}else return m},
h4(a,b){return A.eo(a.tR,b)},
h3(a,b){return A.eo(a.eT,b)},
d3(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.em(a,null,b,!1)
r.set(b,s)
return s},
b5(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.em(a,b,c,!0)
q.set(c,r)
return r},
en(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.dB(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
em(a,b,c,d){return A.fV(A.fP(a,b,c,d))},
P(a,b){b.a=A.hx
b.b=A.hy
return b},
b4(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.z(null,null)
s.w=b
s.as=c
r=A.P(a,s)
a.eC.set(c,r)
return r},
ek(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.h1(a,b,r,c)
a.eC.set(r,s)
return s},
h1(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.a3(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.al(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.z(null,null)
q.w=6
q.x=b
q.as=c
return A.P(a,q)},
ej(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.h_(a,b,r,c)
a.eC.set(r,s)
return s},
h_(a,b,c,d){var s,r
if(d){s=b.w
if(A.a3(b)||b===t.K)return b
else if(s===1)return A.b3(a,"H",[b])
else if(b===t.P||b===t.T)return t.O}r=new A.z(null,null)
r.w=7
r.x=b
r.as=c
return A.P(a,r)},
h2(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.z(null,null)
s.w=13
s.x=b
s.as=q
r=A.P(a,s)
a.eC.set(q,r)
return r},
b2(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
fZ(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
b3(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.b2(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.z(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.P(a,r)
a.eC.set(p,q)
return q},
dB(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.b2(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.z(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.P(a,o)
a.eC.set(q,n)
return n},
el(a,b,c){var s,r,q="+"+(b+"("+A.b2(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.z(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.P(a,s)
a.eC.set(q,r)
return r},
ei(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.b2(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.b2(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.fZ(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.z(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.P(a,p)
a.eC.set(r,o)
return o},
dC(a,b,c,d){var s,r=b.as+("<"+A.b2(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.h0(a,b,c,r,d)
a.eC.set(r,s)
return s},
h0(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.d4(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.a_(a,b,r,0)
m=A.aj(a,c,r,0)
return A.dC(a,n,m,c!==m)}}l=new A.z(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.P(a,l)},
fP(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
fV(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.fR(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.eg(a,r,l,k,!1)
else if(q===46)r=A.eg(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.Y(a.u,a.e,k.pop()))
break
case 94:k.push(A.h2(a.u,k.pop()))
break
case 35:k.push(A.b4(a.u,5,"#"))
break
case 64:k.push(A.b4(a.u,2,"@"))
break
case 126:k.push(A.b4(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.fT(a,k)
break
case 38:A.fS(a,k)
break
case 63:p=a.u
k.push(A.ek(p,A.Y(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.ej(p,A.Y(p,a.e,k.pop()),a.n))
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
A.eh(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.fW(a.u,a.e,o)
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
fR(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
eg(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.h6(s,o.x)[p]
if(n==null)A.bb('No "'+p+'" in "'+A.fB(o)+'"')
d.push(A.b5(s,o,n))}else d.push(p)
return m},
fT(a,b){var s,r=a.u,q=A.ef(a,b),p=b.pop()
if(typeof p=="string")b.push(A.b3(r,p,q))
else{s=A.Y(r,a.e,p)
switch(s.w){case 11:b.push(A.dC(r,s,q,a.n))
break
default:b.push(A.dB(r,s,q))
break}}},
fQ(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.ef(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.Y(p,a.e,o)
q=new A.bT()
q.a=s
q.b=n
q.c=m
b.push(A.ei(p,r,q))
return
case-4:b.push(A.el(p,b.pop(),s))
return
default:throw A.c(A.bg("Unexpected state under `()`: "+A.m(o)))}},
fS(a,b){var s=b.pop()
if(0===s){b.push(A.b4(a.u,1,"0&"))
return}if(1===s){b.push(A.b4(a.u,4,"1&"))
return}throw A.c(A.bg("Unexpected extended operation "+A.m(s)))},
ef(a,b){var s=b.splice(a.p)
A.eh(a.u,a.e,s)
a.p=b.pop()
return s},
Y(a,b,c){if(typeof c=="string")return A.b3(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.fU(a,b,c)}else return c},
eh(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.Y(a,b,c[s])},
fW(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.Y(a,b,c[s])},
fU(a,b,c){var s,r,q=b.w
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
if(s==null){s=A.o(a,b,null,c,null)
r.set(c,s)}return s},
o(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.a3(d))return!0
s=b.w
if(s===4)return!0
if(A.a3(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.o(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.o(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.o(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.o(a,b.x,c,d,e))return!1
return A.o(a,A.dw(a,b),c,d,e)}if(s===6)return A.o(a,p,c,d,e)&&A.o(a,b.x,c,d,e)
if(q===7){if(A.o(a,b,c,d.x,e))return!0
return A.o(a,b,c,A.dw(a,d),e)}if(q===6)return A.o(a,b,c,p,e)||A.o(a,b,c,d.x,e)
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
if(!A.o(a,j,c,i,e)||!A.o(a,i,e,j,c))return!1}return A.eu(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.eu(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.hD(a,b,c,d,e)}if(o&&q===10)return A.hI(a,b,c,d,e)
return!1},
eu(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
for(;;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!A.o(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
hD(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.b5(a,b,r[o])
return A.ep(a,p,null,c,d.y,e)}return A.ep(a,b.y,null,c,d.y,e)},
ep(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.o(a,b[s],d,e[s],f))return!1
return!0},
hI(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.o(a,r[s],c,q[s],e))return!1
return!0},
al(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.a3(a))if(s!==6)r=s===7&&A.al(a.x)
return r},
a3(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
eo(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
d4(a){return a>0?new Array(a):v.typeUniverse.sEA},
z:function z(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
bT:function bT(){this.c=this.b=this.a=null},
bY:function bY(a){this.a=a},
bS:function bS(){},
b1:function b1(a){this.a=a},
fI(){var s,r,q
if(self.scheduleImmediate!=null)return A.i2()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.c_(new A.cF(s),1)).observe(r,{childList:true})
return new A.cE(s,r,q)}else if(self.setImmediate!=null)return A.i3()
return A.i4()},
fJ(a){self.scheduleImmediate(A.c_(new A.cG(a),0))},
fK(a){self.setImmediate(A.c_(new A.cH(a),0))},
fL(a){A.fX(0,a)},
ea(a,b){var s=B.a.t(a.a,1000)
return A.fY(s,b)},
fX(a,b){var s=new A.b0()
s.b7(a,b)
return s},
fY(a,b){var s=new A.b0()
s.b8(a,b)
return s},
hN(a){return new A.bL(new A.l($.h,a.i("l<0>")),a.i("bL<0>"))},
hm(a,b){a.$2(0,null)
b.b=!0
return b.a},
eq(a,b){A.hn(a,b)},
hl(a,b){var s,r=a==null?b.$ti.c.a(a):a
if(!b.b)b.a.X(r)
else{s=b.a
if(b.$ti.i("H<1>").b(r))s.au(r)
else s.aw(r)}},
hk(a,b){var s=A.am(a),r=A.a2(a),q=b.a
if(b.b)q.H(new A.x(s,r))
else q.aq(new A.x(s,r))},
hn(a,b){var s,r,q=new A.d6(b),p=new A.d7(b)
if(a instanceof A.l)a.aH(q,p,t.z)
else{s=t.z
if(a instanceof A.l)a.b_(q,p,s)
else{r=new A.l($.h,t.c)
r.a=8
r.c=a
r.aH(q,p,s)}}},
i1(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.h.ai(new A.da(s))},
dn(a){var s
if(t.Q.b(a)){s=a.gM()
if(s!=null)return s}return B.D},
hA(a,b){if($.h===B.b)return null
return null},
cN(a,b,c){var s,r,q,p={},o=p.a=a
while(s=o.a,(s&4)!==0){o=o.c
p.a=o}if(o===b){s=A.e7()
b.aq(new A.x(new A.E(!0,o,null,"Cannot complete a future with itself"),s))
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.aF(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.I()
b.P(p.a)
A.X(b,q)
return}b.a^=2
A.ai(null,null,b.b,new A.cO(p,b))},
X(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){f=f.c
A.bZ(f.a,f.b)}return}s.a=b
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
if(r){A.bZ(m.a,m.b)
return}j=$.h
if(j!==k)$.h=k
else j=null
f=f.c
if((f&15)===8)new A.cS(s,g,p).$0()
else if(q){if((f&1)!==0)new A.cR(s,m).$0()}else if((f&2)!==0)new A.cQ(g,s).$0()
if(j!=null)$.h=j
f=s.c
if(f instanceof A.l){r=s.a.$ti
r=r.i("H<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.S(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.cN(f,i,!0)
return}}i=s.a.b
h=i.c
i.c=null
b=i.S(h)
f=s.b
r=s.c
if(!f){i.a=8
i.c=r}else{i.a=i.a&1|16
i.c=r}g.a=i
f=i}},
hS(a,b){if(t.C.b(a))return b.ai(a)
if(t.v.b(a))return a
throw A.c(A.dU(a,"onError",u.c))},
hO(){var s,r
for(s=$.ah;s!=null;s=$.ah){$.b9=null
r=s.b
$.ah=r
if(r==null)$.b8=null
s.a.$0()}},
hX(){$.dG=!0
try{A.hO()}finally{$.b9=null
$.dG=!1
if($.ah!=null)$.dQ().$1(A.eE())}},
eC(a){var s=new A.bM(a),r=$.b8
if(r==null){$.ah=$.b8=s
if(!$.dG)$.dQ().$1(A.eE())}else $.b8=r.b=s},
hU(a){var s,r,q,p=$.ah
if(p==null){A.eC(a)
$.b9=$.b8
return}s=new A.bM(a)
r=$.b9
if(r==null){s.b=p
$.ah=$.b9=s}else{q=r.b
s.b=q
$.b9=r.b=s
if(q==null)$.b8=s}},
eP(a){var s=null,r=$.h
if(B.b===r){A.ai(s,s,B.b,a)
return}A.ai(s,s,r,r.aK(a))},
iF(a){A.dJ(a,"stream",t.K)
return new A.bW()},
dy(a){return new A.aN(null,null,a.i("aN<0>"))},
eB(a){return},
ed(a,b){return b==null?A.i5():b},
fM(a,b){if(b==null)b=A.i6()
if(t.k.b(b))return a.ai(b)
if(t.d.b(b))return b
throw A.c(A.a4("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
hP(a){},
hQ(a,b){A.bZ(a,b)},
hr(a,b,c){var s,r,q=a.aL()
if(q!==$.dk()){s=q.$ti
r=$.h
q.O(new A.O(new A.l(r,s),8,new A.d8(b,c),null,s.i("O<1,1>")))}else b.Z(c)},
fE(a,b){var s=$.h
if(s===B.b)return A.ea(a,b)
return A.ea(a,s.bu(b,t.E))},
bZ(a,b){A.hU(new A.d9(a,b))},
ey(a,b,c,d){var s,r=$.h
if(r===c)return d.$0()
$.h=c
s=r
try{r=d.$0()
return r}finally{$.h=s}},
ez(a,b,c,d,e){var s,r=$.h
if(r===c)return d.$1(e)
$.h=c
s=r
try{r=d.$1(e)
return r}finally{$.h=s}},
hT(a,b,c,d,e,f){var s,r=$.h
if(r===c)return d.$2(e,f)
$.h=c
s=r
try{r=d.$2(e,f)
return r}finally{$.h=s}},
ai(a,b,c,d){if(B.b!==c){d=c.aK(d)
d=d}A.eC(d)},
cF:function cF(a){this.a=a},
cE:function cE(a,b,c){this.a=a
this.b=b
this.c=c},
cG:function cG(a){this.a=a},
cH:function cH(a){this.a=a},
b0:function b0(){this.c=0},
d2:function d2(a,b){this.a=a
this.b=b},
d1:function d1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bL:function bL(a,b){this.a=a
this.b=!1
this.$ti=b},
d6:function d6(a){this.a=a},
d7:function d7(a){this.a=a},
da:function da(a){this.a=a},
x:function x(a,b){this.a=a
this.b=b},
W:function W(a,b){this.a=a
this.$ti=b},
aO:function aO(a,b,c,d,e){var _=this
_.ay=0
_.CW=_.ch=null
_.w=a
_.a=b
_.d=c
_.e=d
_.r=_.f=null
_.$ti=e},
bN:function bN(){},
aN:function aN(a,b,c){var _=this
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
l:function l(a,b){var _=this
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
bM:function bM(a){this.a=a
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
aP:function aP(){},
bP:function bP(){},
bO:function bO(){},
b_:function b_(){},
bR:function bR(){},
bQ:function bQ(a){this.b=a
this.a=null},
bU:function bU(){this.a=0
this.c=this.b=null},
cY:function cY(a,b){this.a=a
this.b=b},
aQ:function aQ(a){this.a=1
this.b=a
this.c=null},
bW:function bW(){},
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
e1(a){return new A.aS(a.i("aS<0>"))},
dA(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
fO(a,b,c){var s=new A.af(a,b,c.i("af<0>"))
s.c=a.e
return s},
dv(a){var s,r
if(A.dN(a))return"{...}"
s=new A.bI("")
try{r={}
$.w.push(a)
s.a+="{"
r.a=!0
a.ad(0,new A.c9(r,s))
s.a+="}"}finally{if(0>=$.w.length)return A.b($.w,-1)
$.w.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
aS:function aS(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cX:function cX(a){this.a=a
this.c=this.b=null},
af:function af(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
k:function k(){},
aC:function aC(){},
c9:function c9(a,b){this.a=a
this.b=b},
aJ:function aJ(){},
aY:function aY(){},
fh(a,b){a=A.p(a,new Error())
a.stack=b.h(0)
throw a},
du(a,b,c,d){var s,r=J.fq(a,d)
if(a!==0&&b!=null)for(s=0;s<a;++s)r[s]=b
return r},
fw(a,b,c){var s,r,q=A.t([],c.i("n<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.eQ)(a),++r)q.push(a[r])
q.$flags=1
return q},
fv(a,b){var s,r
if(Array.isArray(a))return A.t(a.slice(0),b.i("n<0>"))
s=A.t([],b.i("n<0>"))
for(r=J.dR(a);r.n();)s.push(r.gq())
return s},
e8(a,b,c){var s=J.dR(b)
if(!s.n())return a
if(c.length===0){do a+=A.m(s.gq())
while(s.n())}else{a+=A.m(s.gq())
while(s.n())a=a+c+A.m(s.gq())}return a},
e7(){return A.a2(new Error())},
c6(a){if(typeof a=="number"||A.dF(a)||a==null)return J.bd(a)
if(typeof a=="string")return JSON.stringify(a)
return A.e3(a)},
fi(a,b){A.dJ(a,"error",t.K)
A.dJ(b,"stackTrace",t.l)
A.fh(a,b)},
bg(a){return new A.bf(a)},
a4(a,b){return new A.E(!1,null,b,a)},
dU(a,b,c){return new A.E(!0,a,b,c)},
fz(a){var s=null
return new A.ad(s,s,!1,s,s,a)},
e5(a,b){return new A.ad(null,null,!0,a,b,"Value not in range")},
e4(a,b,c,d,e){return new A.ad(b,c,!0,a,d,"Invalid value")},
fA(a,b){if(a<0)throw A.c(A.e4(a,0,null,b,null))
return a},
dp(a,b,c,d,e){return new A.bn(b,!0,a,e,"Index out of range")},
cD(a){return new A.aM(a)},
ec(a){return new A.bJ(a)},
bi(a){return new A.bh(a)},
dq(a,b){if(a<=0)return new A.aq(b.i("aq<0>"))
if(!b.i("0(a)").b(A.eH()))throw A.c(A.a4("Generator must be supplied or element type must allow integers","generator"))
return new A.aR(a,A.eH(),b.i("aR<0>"))},
fp(a,b,c){var s,r
if(A.dN(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.t([],t.s)
$.w.push(a)
try{A.hM(a,s)}finally{if(0>=$.w.length)return A.b($.w,-1)
$.w.pop()}r=A.e8(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
dr(a,b,c){var s,r
if(A.dN(a))return b+"..."+c
s=new A.bI(b)
$.w.push(a)
try{r=s
r.a=A.e8(r.a,a,", ")}finally{if(0>=$.w.length)return A.b($.w,-1)
$.w.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
fN(a){return a},
hM(a,b){var s,r,q,p,o,n,m,l=a.gv(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.n())return
s=A.m(l.gq())
b.push(s)
k+=s.length+2;++j}if(!l.n()){if(j<=5)return
if(0>=b.length)return A.b(b,-1)
r=b.pop()
if(0>=b.length)return A.b(b,-1)
q=b.pop()}else{p=l.gq();++j
if(!l.n()){if(j<=4){b.push(A.m(p))
return}r=A.m(p)
if(0>=b.length)return A.b(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gq();++j
for(;l.n();p=o,o=n){n=l.gq();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.b(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=A.m(p)
r=A.m(o)
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
if(B.c===c){s=B.a.gj(a)
b=J.G(b)
return A.dz(A.N(A.N($.dl(),s),b))}if(B.c===d){s=B.a.gj(a)
b=J.G(b)
c=J.G(c)
return A.dz(A.N(A.N(A.N($.dl(),s),b),c))}s=B.a.gj(a)
b=J.G(b)
c=J.G(c)
d=J.G(d)
d=A.dz(A.N(A.N(A.N(A.N($.dl(),s),b),c),d))
return d},
bk:function bk(a){this.a=a},
cI:function cI(){},
j:function j(){},
bf:function bf(a){this.a=a},
I:function I(){},
E:function E(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ad:function ad(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bn:function bn(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
aM:function aM(a){this.a=a},
bJ:function bJ(a){this.a=a},
U:function U(a){this.a=a},
bh:function bh(a){this.a=a},
bD:function bD(){},
aK:function aK(){},
cJ:function cJ(a){this.a=a},
S:function S(){},
aR:function aR(a,b,c){this.a=a
this.b=b
this.$ti=c},
r:function r(){},
d:function d(){},
bX:function bX(){},
bI:function bI(a){this.a=a},
cV:function cV(){},
K:function K(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e9(a){return new A.cq(a)},
cc:function cc(){},
cq:function cq(a){this.a=a},
a6:function a6(){},
a8:function a8(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ab:function ab(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=0},
fC(a,b,c,d,e,f,g,h){var s,r,q,p=A.e_(),o=h*g
p.width=o
s=d*f
p.height=s
r=A.e_()
r.width=o
r.height=s
s=A.t([],t.w)
for(o=A.dq(d,t.z),o=o.gv(o);o.n();){o.gq()
q=B.a.t(h,32)
s.push(new Uint32Array(q+1))}p=new A.bH(!0,d,h,g,f,c,a,p,r,s)
p.b5(a,b,c,d,!0,f,g,h)
return p},
dx(a){return new A.C(B.a.t(a,32),31-B.a.k(a,32))},
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
ce:function ce(a){this.a=a},
cf:function cf(a){this.a=a},
cg:function cg(a){this.a=a},
ch:function ch(a){this.a=a},
cd:function cd(){},
bt:function bt(a,b){this.a=a
this.b=b},
fD(a,b,c,d,e,f,g,h){var s,r,q,p,o=null,n=A.fC("black",b,c,h*(8+g),!0,e,f,a*8),m=A.t([],t.G)
for(s=t.U,r=0;r<h;++r){q=A.t([],s)
for(p=0;p<a;++p)q.push(new A.K(r,p," ",c))
m.push(q)}n=new A.cp(h,a,g,c,b,!0,n,new A.ab(h,a),new A.ab(h,a),new A.ab(h,a),A.dy(t.N),A.dy(t.V),A.dy(t.q),B.d,m,A.e1(t.o),B.e5)
n.b6("black",a,b,c,o,!0,e,f,g,h,!0,o,o,o,o,o,o)
return n},
aL:function aL(a,b){this.a=a
this.b=b},
cp:function cp(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
c1(){var s=0,r=A.hN(t.n),q,p,o,n,m,l,k
var $async$c1=A.i1(function(a,b){if(a===1)return A.hk(b,r)
for(;;)switch(s){case 0:k=$.c2()
k.K()
q=A.f9()
p=k.ax,o=A.b7(p).i("W<1>")
case 2:q.b2(0)
case 4:if(!!q.bz()){s=5
break}q.aN()
if(k.ay!==B.d)A.bb(A.e9("Terminal already awaiting input."))
k.ay=B.k
s=6
return A.eq(new A.W(p,o).gaO(0),$async$c1)
case 6:n=b
m=B.a.t(n.a-4,4)
l=B.a.t(n.b-2,4)
if(m>=0&&l>=0)q.ao(m,l)
s=4
break
case 5:q.aN()
k.ah("Congratulations!",2,-3)
if(k.ay!==B.d)A.bb(A.e9("Terminal already awaiting input."))
k.ay=B.k
s=7
return A.eq(new A.W(p,o).gaO(0),$async$c1)
case 7:k.ah(B.p.al(" ",16),2,-3)
s=2
break
case 3:return A.hl(null,r)}})
return A.hm($async$c1,r)},
is(){var s,r,q=t.S,p=A.e1(q)
while(p.a<15){s=$.dm().V(23)
if(s!==0)p.E(0,s)}q=A.fv(p,q)
r=$.dm().V(15)
q.$flags&1&&A.bc(q,"insert",2)
if(r<0||r>q.length)A.bb(A.e5(r,null))
q.splice(r,0,0)
return q},
eI(a,b,c,d,e){var s,r,q,p,o,n,m,l,k="lightgray",j=4+4*b,i=2+4*c,h=e?k:"gray",g=d?e?"black":k:k
if(d){s=$.c2()
s.p(h,i,B.cC,j)
r=i+1
s.p(h,r,B.h,j)
q=i+2
s.p(h,q,B.h,j)
p=i+3
s.p(h,p,B.cr,j)
o=j+1
s.p(h,i,B.i,o)
s.p(h,r,B.e,o)
s.p(h,q,B.e,o)
n=j+2
s.p(h,i,B.i,n)
s.p(h,p,B.f,o)
s.p(h,p,B.f,n)
s.p(h,r,B.e,n)
s.p(h,q,B.e,n)
n=j+3
s.p(h,i,B.aK,n)
s.p(h,r,B.j,n)
s.p(h,q,B.j,n)
s.p(h,p,B.cO,n)}else for(m=0;m<4;++m)for(s=j+m,l=0;l<4;++l)$.c2().aW(i+l,B.q,s)
s=$.c2().w
s===$&&A.F()
if(!(a>=0&&a<23))return A.b(B.r,a)
r=B.r[a]
s.aE((j+1)*8,(i+1)*8,r,g,16,B.e7,!0,!1,!1)},
f9(){var s,r=A.is(),q=A.t([],t.t)
for(s=A.dq(16,t.z),s=s.gv(s);s.n();){s.gq()
q.push(0)}r=new A.c3(r,q)
r.b4()
return r},
c3:function c3(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=0},
eR(a){return v.mangledGlobalNames[a]},
iu(a){throw A.p(new A.aA("Field '"+a+"' has been assigned during initialization."),new Error())},
F(){throw A.p(A.fu(""),new Error())},
b6(a){var s
if(typeof a=="function")throw A.c(A.a4("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.ho,a)
s[$.dj()]=a
return s},
et(a){var s
if(typeof a=="function")throw A.c(A.a4("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.hp,a)
s[$.dj()]=a
return s},
ho(a){return a.$0()},
hp(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
ih(a,b){return a[b]},
hq(a,b,c){return a[b](c)},
e_(){return v.G.document.createElement("canvas")}},B={}
var w=[A,J,B]
var $={}
A.ds.prototype={}
J.bo.prototype={
B(a,b){return a===b},
gj(a){return A.ac(a)},
h(a){return"Instance of '"+A.bF(a)+"'"},
gl(a){return A.a0(A.dE(this))}}
J.bq.prototype={
h(a){return String(a)},
gj(a){return a?519018:218159},
gl(a){return A.a0(t.y)},
$ie:1}
J.au.prototype={
B(a,b){return null==b},
h(a){return"null"},
gj(a){return 0},
$ie:1}
J.aw.prototype={$ii:1}
J.M.prototype={
gj(a){return 0},
h(a){return String(a)}}
J.bE.prototype={}
J.V.prototype={}
J.L.prototype={
h(a){var s=a[$.eT()]
if(s==null)s=a[$.dj()]
if(s==null)return this.b3(a)
return"JavaScript function for "+J.bd(s)}}
J.av.prototype={
gj(a){return 0},
h(a){return String(a)}}
J.ax.prototype={
gj(a){return 0},
h(a){return String(a)}}
J.n.prototype={
bA(a,b){var s,r,q=a.length,p=A.du(q,"",!1,t.N)
for(s=0;s<a.length;++s){r=A.m(a[s])
if(!(s<q))return A.b(p,s)
p[s]=r}return p.join(b)},
bv(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw A.c(A.bi(a))}return s},
bw(a,b,c){return this.bv(a,b,c,t.z)},
h(a){return A.dr(a,"[","]")},
gv(a){return new J.be(a,a.length,A.dD(a).i("be<1>"))},
gj(a){return A.ac(a)},
gm(a){return a.length},
$if:1}
J.bp.prototype={
bL(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.bF(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.c7.prototype={}
J.be.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
n(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.c(A.eQ(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.a5.prototype={
bJ(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.c(A.cD(""+a+".toInt()"))},
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
D(a,b){if((a|0)===a)if(b>=1)return a/b|0
return this.aG(a,b)},
t(a,b){return(a|0)===a?a/b|0:this.aG(a,b)},
aG(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.c(A.cD("Result of truncating division is "+A.m(s)+": "+A.m(a)+" ~/ "+b))},
L(a,b){if(b<0)throw A.c(A.dI(b))
return b>31?0:a<<b>>>0},
br(a,b){return b>31?0:a<<b>>>0},
b1(a,b){var s
if(b<0)throw A.c(A.dI(b))
if(a>0)s=this.a6(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
bs(a,b){var s
if(a>0)s=this.a6(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
C(a,b){if(0>b)throw A.c(A.dI(b))
return this.a6(a,b)},
a6(a,b){return b>31?0:a>>>b},
gl(a){return A.a0(t.H)},
$iq:1}
J.at.prototype={
gl(a){return A.a0(t.S)},
$ie:1,
$ia:1}
J.br.prototype={
gl(a){return A.a0(t.i)},
$ie:1}
J.T.prototype={
bK(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.b(p,0)
if(p.charCodeAt(0)===133){s=J.fs(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.b(p,r)
q=p.charCodeAt(r)===133?J.ft(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
al(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.c(B.B)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
bC(a,b,c){var s=b-a.length
if(s<=0)return a
return this.al(c,s)+a},
h(a){return a},
gj(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gl(a){return A.a0(t.N)},
gm(a){return a.length},
$ie:1,
$iB:1}
A.aA.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.di.prototype={
$0(){var s=new A.l($.h,t.D)
s.X(null)
return s},
$S:7}
A.ci.prototype={}
A.ap.prototype={}
A.aB.prototype={
gv(a){var s=this
return new A.a7(s,s.gm(s),A.b7(s).i("a7<1>"))}}
A.a7.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
n(){var s,r=this,q=r.a,p=J.eJ(q),o=p.gm(q)
if(r.b!==o)throw A.c(A.bi(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.ab(q,s);++r.c
return!0}}
A.aq.prototype={
gv(a){return B.u},
gm(a){return 0}}
A.bl.prototype={
n(){return!1},
gq(){throw A.c(A.fo())}}
A.as.prototype={}
A.C.prototype={$r:"+(1,2)",$s:1}
A.bj.prototype={
h(a){return A.dv(this)}}
A.bm.prototype={
R(){var s=this,r=s.$map
if(r==null){r=new A.ay(s.$ti.i("ay<1,2>"))
A.ic(s.a,r)
s.$map=r}return r},
aa(a){return this.R().aa(a)},
W(a,b){return this.R().W(0,b)},
ad(a,b){this.R().ad(0,b)},
gm(a){return this.R().a}}
A.aI.prototype={}
A.cA.prototype={
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
A.aH.prototype={
h(a){return"Null check operator used on a null value"}}
A.bs.prototype={
h(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.bK.prototype={
h(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.ca.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.ar.prototype={}
A.aZ.prototype={
h(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iA:1}
A.R.prototype={
h(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.eS(r==null?"unknown":r)+"'"},
gbM(){return this},
$C:"$1",
$R:1,
$D:null}
A.c4.prototype={$C:"$0",$R:0}
A.c5.prototype={$C:"$2",$R:2}
A.co.prototype={}
A.cj.prototype={
h(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.eS(s)+"'"}}
A.ao.prototype={
B(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.ao))return!1
return this.$_target===b.$_target&&this.a===b.a},
gj(a){return(A.dP(this.a)^A.ac(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.bF(this.a)+"'")}}
A.bG.prototype={
h(a){return"RuntimeError: "+this.a}}
A.az.prototype={
gm(a){return this.a},
aa(a){var s=this.b
if(s==null)return!1
return s[a]!=null},
W(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.by(b)},
by(a){var s,r,q=this.d
if(q==null)return null
s=this.bk(q,a)
r=this.af(s,a)
if(r<0)return null
return s[r].b},
ad(a,b){var s=this,r=s.e,q=s.r
while(r!=null){b.$2(r.a,r.b)
if(q!==s.r)throw A.c(A.bi(s))
r=r.c}},
N(a,b){var s=this,r=new A.c8(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&1073741823
return r},
ae(a){return J.G(a)&1073741823},
bk(a,b){return a[this.ae(b)]},
af(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.an(a[r].a,b))return r
return-1},
h(a){return A.dv(this)}}
A.c8.prototype={}
A.ay.prototype={
ae(a){return A.i7(a)&1073741823},
af(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.an(a[r].a,b))return r
return-1}}
A.dd.prototype={
$1(a){return this.a(a)},
$S:8}
A.de.prototype={
$2(a,b){return this.a(a,b)},
$S:9}
A.df.prototype={
$1(a){return this.a(a)},
$S:10}
A.ag.prototype={
h(a){return this.aI(!1)},
aI(a){var s,r,q,p,o,n=this.bi(),m=this.aA(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.b(m,q)
o=m[q]
l=a?l+A.e3(o):l+A.m(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
bi(){var s,r=this.$s
while($.aX.length<=r)$.aX.push(null)
s=$.aX[r]
if(s==null){s=this.bh()
if(!(r<$.aX.length))return A.b($.aX,r)
$.aX[r]=s}return s},
bh(){var s,r,q,p,o,n=this.$r,m=n.indexOf("("),l=n.substring(1,m),k=n.substring(m),j=k==="()"?0:k.replace(/[^,]/g,"").length+1,i=A.t(new Array(j),t.f)
for(s=0;s<j;++s)i[s]=s
if(l!==""){r=l.split(",")
s=r.length
for(q=i.length,p=j;s>0;){--p;--s
o=r[s]
if(!(p>=0&&p<q))return A.b(i,p)
i[p]=o}}i=A.fw(i,!1,t.K)
i.$flags=3
return i}}
A.bV.prototype={
aA(){return[this.a,this.b]},
B(a,b){if(b==null)return!1
return b instanceof A.bV&&this.$s===b.$s&&J.an(this.a,b.a)&&J.an(this.b,b.b)},
gj(a){return A.cb(this.$s,this.a,this.b,B.c)}}
A.a9.prototype={
gl(a){return B.e9},
$ie:1}
A.aF.prototype={}
A.bu.prototype={
gl(a){return B.ea},
$ie:1}
A.aa.prototype={
gm(a){return a.length},
$iu:1}
A.aD.prototype={$if:1}
A.aE.prototype={$if:1}
A.bv.prototype={
gl(a){return B.eb},
$ie:1}
A.bw.prototype={
gl(a){return B.ec},
$ie:1}
A.bx.prototype={
gl(a){return B.ed},
$ie:1}
A.by.prototype={
gl(a){return B.ee},
$ie:1}
A.bz.prototype={
gl(a){return B.ef},
$ie:1}
A.bA.prototype={
gl(a){return B.eh},
$ie:1}
A.bB.prototype={
gl(a){return B.ei},
$ie:1,
$icC:1}
A.aG.prototype={
gl(a){return B.ej},
gm(a){return a.length},
$ie:1}
A.bC.prototype={
gl(a){return B.ek},
gm(a){return a.length},
$ie:1}
A.aT.prototype={}
A.aU.prototype={}
A.aV.prototype={}
A.aW.prototype={}
A.z.prototype={
i(a){return A.b5(v.typeUniverse,this,a)},
ar(a){return A.en(v.typeUniverse,this,a)}}
A.bT.prototype={}
A.bY.prototype={
h(a){return A.v(this.a,null)}}
A.bS.prototype={
h(a){return this.a}}
A.b1.prototype={$iI:1}
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
$S:11}
A.cG.prototype={
$0(){this.a.$0()},
$S:1}
A.cH.prototype={
$0(){this.a.$0()},
$S:1}
A.b0.prototype={
b7(a,b){if(self.setTimeout!=null)self.setTimeout(A.c_(new A.d2(this,b),0),a)
else throw A.c(A.cD("`setTimeout()` not found."))},
b8(a,b){if(self.setTimeout!=null)self.setInterval(A.c_(new A.d1(this,a,Date.now(),b),0),a)
else throw A.c(A.cD("Periodic timer."))},
$icz:1}
A.d2.prototype={
$0(){this.a.c=1
this.b.$0()},
$S:0}
A.d1.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.a.D(s,o)}q.c=p
r.d.$1(q)},
$S:1}
A.bL.prototype={}
A.d6.prototype={
$1(a){return this.a.$2(0,a)},
$S:4}
A.d7.prototype={
$2(a,b){this.a.$2(1,new A.ar(a,b))},
$S:12}
A.da.prototype={
$2(a,b){this.a(a,b)},
$S:13}
A.x.prototype={
h(a){return A.m(this.a)},
$ij:1,
gM(){return this.b}}
A.W.prototype={}
A.aO.prototype={
a3(){},
a4(){}}
A.bN.prototype={
gbl(){return this.c<4},
bp(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
bt(a,b,c,d){var s,r,q,p,o,n=this
if((n.c&4)!==0){s=new A.aQ($.h)
A.eP(s.gbm())
s.c=c
return s}s=$.h
r=d?1:0
q=A.ed(s,a)
A.fM(s,b)
p=new A.aO(n,q,s,r|32,A.b7(n).i("aO<1>"))
p.CW=p
p.ch=p
p.ay=n.c&1
o=n.e
n.e=p
p.ch=null
p.CW=o
if(o==null)n.d=p
else o.ch=p
if(n.d===p)A.eB(n.a)
return p},
bo(a){var s,r=this
A.b7(r).i("aO<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.bp(a)
if((r.c&2)===0&&r.d==null)r.bd()}return null},
ba(){if((this.c&4)!==0)return new A.U("Cannot add new events after calling close")
return new A.U("Cannot add new events while doing an addStream")},
E(a,b){if(!this.gbl())throw A.c(this.ba())
this.a5(b)},
bd(){if((this.c&4)!==0)if(null.gbN())null.X(null)
A.eB(this.b)}}
A.aN.prototype={
a5(a){var s
for(s=this.d;s!=null;s=s.ch)s.bb(new A.bQ(a))}}
A.O.prototype={
bB(a){if((this.c&15)!==6)return!0
return this.b.b.aj(this.d,a.a)},
bx(a){var s,r=this.e,q=null,p=a.a,o=this.b.b
if(t.C.b(r))q=o.bF(r,p,a.b)
else q=o.aj(r,p)
try{p=q
return p}catch(s){if(t._.b(A.am(s))){if((this.c&1)!==0)throw A.c(A.a4("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.c(A.a4("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.l.prototype={
b_(a,b,c){var s,r=$.h
if(r===B.b){if(!t.C.b(b)&&!t.v.b(b))throw A.c(A.dU(b,"onError",u.c))}else b=A.hS(b,r)
s=new A.l(r,c.i("l<0>"))
this.O(new A.O(s,3,a,b,this.$ti.i("@<1>").ar(c).i("O<1,2>")))
return s},
aH(a,b,c){var s=new A.l($.h,c.i("l<0>"))
this.O(new A.O(s,19,a,b,this.$ti.i("@<1>").ar(c).i("O<1,2>")))
return s},
bq(a){this.a=this.a&1|16
this.c=a},
P(a){this.a=a.a&30|this.a&1
this.c=a.c},
O(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.O(a)
return}s.P(r)}A.ai(null,null,s.b,new A.cK(s,a))}},
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
return}n.P(s)}m.a=n.S(a)
A.ai(null,null,n.b,new A.cP(m,n))}},
I(){var s=this.c
this.c=null
return this.S(s)},
S(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
Z(a){var s,r=this
if(r.$ti.i("H<1>").b(a))A.cN(a,r,!0)
else{s=r.I()
r.a=8
r.c=a
A.X(r,s)}},
aw(a){var s=this,r=s.I()
s.a=8
s.c=a
A.X(s,r)},
bg(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.I()
q.P(a)
A.X(q,r)},
H(a){var s=this.I()
this.bq(a)
A.X(this,s)},
bf(a,b){this.H(new A.x(a,b))},
X(a){if(this.$ti.i("H<1>").b(a)){this.au(a)
return}this.bc(a)},
bc(a){this.a^=2
A.ai(null,null,this.b,new A.cM(this,a))},
au(a){A.cN(a,this,!1)
return},
aq(a){this.a^=2
A.ai(null,null,this.b,new A.cL(this,a))},
$iH:1}
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
$0(){this.a.H(this.b)},
$S:0}
A.cS.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.aX(q.d)}catch(p){s=A.am(p)
r=A.a2(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.dn(q)
n=k.a
n.c=new A.x(q,o)
q=n}q.b=!0
return}if(j instanceof A.l&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.l){m=k.b.a
l=new A.l(m.b,m.$ti)
j.b_(new A.cT(l,m),new A.cU(l),t.n)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.cT.prototype={
$1(a){this.a.bg(this.b)},
$S:3}
A.cU.prototype={
$2(a,b){this.a.H(new A.x(a,b))},
$S:14}
A.cR.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
q.c=p.b.b.aj(p.d,this.b)}catch(o){s=A.am(o)
r=A.a2(o)
q=s
p=r
if(p==null)p=A.dn(q)
n=this.a
n.c=new A.x(q,p)
n.b=!0}},
$S:0}
A.cQ.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.bB(s)&&p.a.e!=null){p.c=p.a.bx(s)
p.b=!1}}catch(o){r=A.am(o)
q=A.a2(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.dn(p)
m=l.b
m.c=new A.x(p,n)
p=m}p.b=!0}},
$S:0}
A.bM.prototype={}
A.ae.prototype={
gm(a){var s={},r=new A.l($.h,t.a)
s.a=0
this.aP(new A.cm(s,this),!0,new A.cn(s,r),r.gav())
return r},
gaO(a){var s=new A.l($.h,this.$ti.i("l<1>")),r=this.aP(null,!0,new A.ck(s),s.gav())
r.aR(new A.cl(this,r,s))
return s}}
A.cm.prototype={
$1(a){++this.a.a},
$S(){return this.b.$ti.i("~(1)")}}
A.cn.prototype={
$0(){this.b.Z(this.a.a)},
$S:0}
A.ck.prototype={
$0(){var s,r=A.e7(),q=new A.U("No element")
A.fy(q,r)
s=A.hA(q,r)
s=new A.x(q,r)
this.a.H(s)},
$S:0}
A.cl.prototype={
$1(a){A.hr(this.b,this.c,a)},
$S(){return this.a.$ti.i("~(1)")}}
A.aP.prototype={
gj(a){return(A.ac(this.a)^892482866)>>>0},
B(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.W&&b.a===this.a}}
A.bP.prototype={
aD(){return this.w.bo(this)},
a3(){},
a4(){}}
A.bO.prototype={
aR(a){this.a=A.ed(this.d,a)},
aL(){var s,r=this,q=r.e&=4294967279
if((q&8)===0){q=r.e=q|8
if((q&128)!==0){s=r.r
if(s.a===1)s.a=3}if((q&64)===0)r.r=null
r.f=r.aD()}q=$.dk()
return q},
a3(){},
a4(){},
aD(){return null},
bb(a){var s,r,q=this,p=q.r
if(p==null)p=q.r=new A.bU()
s=p.c
if(s==null)p.b=p.c=a
else p.c=s.a=a
r=q.e
if((r&128)===0){r|=128
q.e=r
if(r<256)p.am(q)}},
a5(a){var s=this,r=s.e
s.e=r|64
s.d.aZ(s.a,a)
s.e&=4294967231
s.be((r&4)!==0)},
be(a){var s,r,q=this,p=q.e
if((p&128)!==0&&q.r.c==null){p=q.e=p&4294967167
s=!1
if((p&4)!==0)if(p<256){s=q.r
s=s==null?null:s.c==null
s=s!==!1}if(s){p&=4294967291
q.e=p}}for(;;a=r){if((p&8)!==0){q.r=null
return}r=(p&4)!==0
if(a===r)break
q.e=p^64
if(r)q.a3()
else q.a4()
p=q.e&=4294967231}if((p&128)!==0&&p<256)q.r.am(q)}}
A.b_.prototype={
aP(a,b,c,d){return this.a.bt(a,d,c,!0)}}
A.bR.prototype={}
A.bQ.prototype={}
A.bU.prototype={
am(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.eP(new A.cY(s,a))
s.a=1}}
A.cY.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.a
q.b=r
if(r==null)q.c=null
this.b.a5(s.b)},
$S:0}
A.aQ.prototype={
aR(a){},
aL(){this.a=-1
this.c=null
return $.dk()},
bn(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.aY(s)}}else r.a=q}}
A.bW.prototype={}
A.d8.prototype={
$0(){return this.a.Z(this.b)},
$S:0}
A.d5.prototype={}
A.cZ.prototype={
aY(a){var s,r,q
try{if(B.b===$.h){a.$0()
return}A.ey(null,null,this,a)}catch(q){s=A.am(q)
r=A.a2(q)
A.bZ(s,r)}},
bI(a,b){var s,r,q
try{if(B.b===$.h){a.$1(b)
return}A.ez(null,null,this,a,b)}catch(q){s=A.am(q)
r=A.a2(q)
A.bZ(s,r)}},
aZ(a,b){return this.bI(a,b,t.z)},
aK(a){return new A.d_(this,a)},
bu(a,b){return new A.d0(this,a,b)},
bE(a){if($.h===B.b)return a.$0()
return A.ey(null,null,this,a)},
aX(a){return this.bE(a,t.z)},
bH(a,b){if($.h===B.b)return a.$1(b)
return A.ez(null,null,this,a,b)},
aj(a,b){var s=t.z
return this.bH(a,b,s,s)},
bG(a,b,c){if($.h===B.b)return a.$2(b,c)
return A.hT(null,null,this,a,b,c)},
bF(a,b,c){var s=t.z
return this.bG(a,b,c,s,s,s)},
bD(a){return a},
ai(a){var s=t.z
return this.bD(a,s,s,s)}}
A.d_.prototype={
$0(){return this.a.aY(this.b)},
$S:0}
A.d0.prototype={
$1(a){return this.a.aZ(this.b,a)},
$S(){return this.c.i("~(0)")}}
A.d9.prototype={
$0(){A.fi(this.a,this.b)},
$S:0}
A.aS.prototype={
gv(a){var s=this,r=new A.af(s,s.r,s.$ti.i("af<1>"))
r.c=s.e
return r},
gm(a){return this.a},
E(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.ap(s==null?q.b=A.dA():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.ap(r==null?q.c=A.dA():r,b)}else return q.b9(b)},
b9(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.dA()
s=J.G(a)&1073741823
r=p[s]
if(r==null)p[s]=[q.a2(a)]
else{if(q.bj(r,a)>=0)return!1
r.push(q.a2(a))}return!0},
ap(a,b){if(a[b]!=null)return!1
a[b]=this.a2(b)
return!0},
aC(){this.r=this.r+1&1073741823},
a2(a){var s,r=this,q=new A.cX(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.aC()
return q},
bj(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.an(a[r].a,b))return r
return-1}}
A.cX.prototype={}
A.af.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
n(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.c(A.bi(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.k.prototype={
gv(a){return new A.a7(a,a.length,A.ba(a).i("a7<k.E>"))},
ab(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
h(a){return A.dr(a,"[","]")}}
A.aC.prototype={
gm(a){return this.a},
h(a){return A.dv(this)}}
A.c9.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.m(a)
r.a=(r.a+=s)+": "
s=A.m(b)
r.a+=s},
$S:15}
A.aJ.prototype={
h(a){return A.dr(this,"{","}")}}
A.aY.prototype={}
A.bk.prototype={
B(a,b){if(b==null)return!1
return b instanceof A.bk&&this.a===b.a},
gj(a){return B.a.gj(this.a)},
h(a){var s,r,q,p,o=this.a,n=B.a.t(o,36e8)
o%=36e8
s=B.a.t(o,6e7)
o%=6e7
r=s<10?"0":""
q=B.a.t(o,1e6)
p=q<10?"0":""
return""+n+":"+r+s+":"+p+q+"."+B.p.bC(B.a.h(o%1e6),6,"0")}}
A.cI.prototype={
h(a){return this.az()}}
A.j.prototype={
gM(){return A.fx(this)}}
A.bf.prototype={
h(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.c6(s)
return"Assertion failed"}}
A.I.prototype={}
A.E.prototype={
ga1(){return"Invalid argument"+(!this.a?"(s)":"")},
ga0(){return""},
h(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.ga1()+q+o
if(!s.a)return n
return n+s.ga0()+": "+A.c6(s.gag())},
gag(){return this.b}}
A.ad.prototype={
gag(){return this.b},
ga1(){return"RangeError"},
ga0(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.m(q):""
else if(q==null)s=": Not greater than or equal to "+A.m(r)
else if(q>r)s=": Not in inclusive range "+A.m(r)+".."+A.m(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.m(r)
return s}}
A.bn.prototype={
gag(){return this.b},
ga1(){return"RangeError"},
ga0(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gm(a){return this.f}}
A.aM.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.bJ.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.U.prototype={
h(a){return"Bad state: "+this.a}}
A.bh.prototype={
h(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.c6(s)+"."}}
A.bD.prototype={
h(a){return"Out of Memory"},
gM(){return null},
$ij:1}
A.aK.prototype={
h(a){return"Stack Overflow"},
gM(){return null},
$ij:1}
A.cJ.prototype={
h(a){return"Exception: "+this.a}}
A.S.prototype={
gm(a){var s,r=this.gv(this)
for(s=0;r.n();)++s
return s},
ab(a,b){var s,r
A.fA(b,"index")
s=this.gv(this)
for(r=b;s.n();){if(r===0)return s.gq();--r}throw A.c(A.dp(b,b-r,this,null,"index"))},
h(a){return A.fp(this,"(",")")}}
A.aR.prototype={
ab(a,b){var s=this.a
if(0>b||b>=s)A.bb(A.dp(b,s,this,null,"index"))
return this.b.$1(b)},
gm(a){return this.a}}
A.r.prototype={
gj(a){return A.d.prototype.gj.call(this,0)},
h(a){return"null"}}
A.d.prototype={$id:1,
B(a,b){return this===b},
gj(a){return A.ac(this)},
h(a){return"Instance of '"+A.bF(this)+"'"},
gl(a){return A.eK(this)},
toString(){return this.h(this)}}
A.bX.prototype={
h(a){return""},
$iA:1}
A.bI.prototype={
gm(a){return this.a.length},
h(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.cV.prototype={
V(a){if(a<=0||a>4294967296)throw A.c(A.fz("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
A.K.prototype={
gj(a){var s=this.a,r=this.b
return A.cb(new A.C(s,r).$s,s,r,B.c)},
B(a,b){var s,r,q,p
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
h(a){return A.eK(this).h(0)+": "+this.a}}
A.cq.prototype={}
A.a6.prototype={}
A.a8.prototype={
h(a){var s=this
return"               row: "+s.a+"\n            column: "+s.b+"\n         character: '"+s.c+"'\n    characterColor: "+s.d+"\n\n          pixelRow: "+s.e+"\n       pixelColumn: "+s.f+"\n         pixelIsOn: "+s.r+"\n    "}}
A.ab.prototype={
sU(a){var s,r,q,p=this
if(a<0){s=p.d=a
for(r=p.b,q=p.a;s<0;){s+=r
p.d=s
p.c=B.a.k(p.c-1,q)}}else{s=p.b
p.c=B.a.k(p.c+B.a.D(a,s),p.a)
p.d=B.a.k(a,s)}},
gu(){return this.c*this.b+this.d},
su(a){var s=this,r=s.b
s.c=B.a.k(B.a.D(a,r),s.a)
s.d=B.a.k(a,r)}}
A.bH.prototype={
b5(a,b,c,d,e,f,g,h){var s,r=this,q=v.G.document
q.onfocus=A.b6(new A.ce(r))
q.onblur=A.b6(new A.cf(r))
q=r.w
q.tabIndex=-1
q.style.display="block"
q.style.outline="none"
s=q.getContext("2d")
if(s==null)s=A.Z(s)
s.imageSmoothingEnabled=!1
q.onfocus=A.b6(new A.cg(r))
q.onblur=A.b6(new A.ch(r))
b.style.display="flex"
b.style.alignItems="flex-start"
b.style.padding="0"
b.style.margin="0"
b.style.width="fit-content"
b.style.height="fit-content"
b.style.background="gray"
b.appendChild(q)
r.a9(0)},
T(a,b){return new A.C(B.a.k(a,this.b),B.a.k(b,this.c))},
Y(){var s=this.x,r=s.getContext("2d")
if(r==null)r=A.Z(r)
r.save()
r.beginPath()
r.clearRect(0,0,s.width,s.height)
r.restore()
return r},
a_(){var s=this.w.getContext("2d")
if(s==null)s=A.Z(s)
s.save()
s.beginPath()
s.drawImage(this.x,0,0)
s.restore()
return s},
F(a,b,c,d){var s,r,q,p,o,n,m=this,l=a<0||a>=m.b||b<0||b>=m.c
if(l)return
s=m.T(a,b)
a=s.a
b=s.b
r=A.dx(b)
q=r.a
p=B.a.L(1,r.b)
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
s=m.T(a,b)
a=s.a
b=s.b
r=A.dx(b)
q=r.a
p=B.a.L(1,r.b)
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
aU(a,b){var s,r,q,p,o=this.T(b,a)
b=o.a
s=A.dx(o.b)
r=s.a
q=B.a.L(1,s.b)
p=this.y
if(!(b>=0&&b<p.length))return A.b(p,b)
p=p[b]
if(!(r>=0&&r<p.length))return A.b(p,r)
return(p[r]&q)>>>0>0},
aM(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=this
if(e==null)e=k.c-c
if(b==null)b=k.b-d
k.Y()
if(c===0&&d===0&&e===k.c&&b===k.b){for(s=k.y,r=s.length,q=0;q<r;++q)for(p=0;o=s[q],p<o.length;++p){o.$flags&2&&A.bc(o)
o[p]=0}s=k.x
r=s.getContext("2d")
if(r==null)r=A.Z(r)
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
for(p=c;p<m;++p)k.F(l,B.a.k(p,r),o,!1)}}k.a_()},
a9(a){return this.aM(0,null,0,0,null)},
aE(a,b,c,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
d.Y()
s=d.T(a,b)
a=s.a
b=s.b
r=B.a.br(1,a1)-1
for(q=a2.a,p=a1-1,o=t.t,n=d.x,m=0;m<c.length;++m){l=c[m]
k=(l&r)>>>0
l=A.t([],o)
for(j=a+m,i=0;i<a1;++i){h=d.aU(b+i,j)?1:0
l.push(B.a.L(h,p-i))}g=B.o.bw(l,0,new A.cd())
switch(q){case 0:for(i=0;i<a1;++i){l=b+i
if((B.a.C(k,p-i)&1)>0)d.G(j,l,a0,n,!1)
else d.F(j,l,n,!1)}break
case 1:for(i=0;i<a1;++i){l=b+i
if((B.a.C(k,p-i)&1)>0)d.F(j,l,n,!1)
else d.G(j,l,a0,n,!1)}break
case 3:for(i=0;i<a1;++i){f=p-i
if((B.a.C(k,f)&1)>0&&(B.a.b1(g,f)&1)===0)d.G(j,b+i,a0,n,!1)}break
case 2:for(i=0;i<a1;++i)if((B.a.C(k,p-i)&1)>0)d.G(j,b+i,a0,n,!1)
break
case 4:for(e=(k&g)>>>0,i=0;i<a1;++i)if((B.a.C(e,p-i)&1)>0)d.G(j,b+i,a0,n,!1)
break
case 5:for(e=(k&g)>>>0,i=0;i<a1;++i)if((B.a.C(e,p-i)&1)>0)d.F(j,b+i,n,!1)
break
case 6:for(e=(k&g)>>>0,i=0;i<a1;++i)if((B.a.C(e,p-i)&1)===0)d.F(j,b+i,n,!1)
break
case 7:for(e=(k&g)>>>0,i=0;i<a1;++i){l=b+i
if((B.a.C(e,p-i)&1)===0)d.F(j,l,n,!1)
else d.G(j,l,a0,n,!1)}break}}d.a_()},
aV(a,b,c){this.aE(c.a,c.b,b,a,8,B.e6,!0,!1,!1)},
b0(a){var s,r,q,p,o,n,m,l,k=this,j=k.b
a=B.a.k(a,j)
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
o[n]=0}}k.Y()
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
k.a_()},
K(){var s=this.w
s.style.opacity="1.0"
s.focus()},
J(){var s=this.w,r=s.style
r.opacity="0.5"
s.blur()}}
A.ce.prototype={
$0(){this.a.z=!0},
$S:1}
A.cf.prototype={
$0(){this.a.z=!1},
$S:1}
A.cg.prototype={
$0(){this.a.K()},
$S:1}
A.ch.prototype={
$0(){this.a.J()},
$S:1}
A.cd.prototype={
$2(a,b){return(a|b)>>>0},
$S:16}
A.bt.prototype={
az(){return"Mode."+this.b}}
A.aL.prototype={
az(){return"State."+this.b}}
A.cp.prototype={
b6(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=this,r=s.f
r.tabIndex=-1
r.onfocus=A.b6(new A.cr(s))
r.onblur=A.b6(new A.cs(s))
r.onkeydown=A.et(new A.ct(s,l,new A.cx(),new A.cw(s)))
r.onclick=A.et(new A.cu(s,new A.cy(s),o))
A.fE(new A.bk(3e5),new A.cv(s))
s.J()
s.a9(0)},
gac(){var s=this.w
s===$&&A.F()
return s.gac()},
ga8(){var s=this.w
s===$&&A.F()
return s.ga8()},
a7(a,b){return new A.C(B.a.k(a,this.a),B.a.k(b,this.b))},
aB(){var s=this,r=s.x
s.CW.E(0,new A.K(r.c,r.d," ","white"))
s.aJ()
s.cy=!1},
aJ(){var s,r,q,p,o,n,m,l,k,j,i,h=this
for(s=h.CW,r=A.fO(s,s.r,s.$ti.c),q=h.w,p=h.cx,o=8+h.c,n=r.$ti.c;r.n();){m=r.d
if(m==null)m=n.a(m)
l=m.a
k=m.b
if(p.aa(m.c)){j=p.W(0,m.c)
j.toString
i=j}else i=$.eV()
q===$&&A.F()
q.aV(m.d,i,new A.C(l*o,k*8))}if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.aC()}},
ak(a,b){var s,r=this.a7(b,a)
b=r.a
a=r.b
s=this.ch
if(!(b>=0&&b<s.length))return A.b(s,b)
s=s[b]
if(!(a>=0&&a<s.length))return A.b(s,a)
return s[a].c},
aQ(){var s,r=this.x
r.sU(0)
s=r.c
if(s===this.a-1)this.an()
else r.c=B.a.k(s+1,r.a)},
an(){var s,r,q,p,o,n,m,l,k=this
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
s===$&&A.F()
s.b0(8+k.c)},
aT(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=d==null?g.x.c:d,e=g.a7(f,b==null?g.x.d:b)
f=g.x
s=f.a
f.c=B.a.k(e.a,s)
f.sU(e.b)
r=g.d
for(q=a.split(""),p=q.length,o=g.ch,n=g.CW,m=g.a-1,l=g.b-1,k=0;k<p;++k){j=q[k]
d=f.c
b=f.d
if(!(d>=0&&d<o.length))return A.b(o,d)
i=o[d]
if(!(b>=0&&b<i.length))return A.b(i,b)
h=i[b]
h.c=j
h.d=r
n.E(0,h)
if(d===m&&b===l){g.an()
f.c=B.a.k(f.c-1,s)}f.sU(f.d+1)}g.aJ()
if(c)g.aQ()},
ah(a,b,c){return this.aT(a,b,!0,c)},
aS(a,b){return this.aT(a,null,b,null)},
a9(a){var s,r,q,p,o,n=this,m=n.b,l=n.a
for(s=n.ch,r=n.d,q=0;q<l;++q)for(p=0;p<m;++p){if(!(q<s.length))return A.b(s,q)
o=s[q]
if(!(p<o.length))return A.b(o,p)
o=o[p]
o.c=" "
o.d=r}s=n.w
s===$&&A.F()
r=8+n.c
s.aM(0,l*r,0,0*r,m*8)
r=n.x
r.c=0%r.a
r.sU(0)},
p(a,b,c,d){var s
if(a==null)a=this.d
s=this.w
s===$&&A.F()
s.aV(a,c,new A.C(d*(8+this.c),b*8))},
aW(a,b,c){return this.p(null,a,b,c)},
K(){return this.gac().$0()},
J(){return this.ga8().$0()}}
A.cy.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.w
i===$&&A.F()
s=J.dT(a.offsetX)
r=Math.max(Math.min(B.a.D(J.dT(a.offsetY)-1,i.e),i.b-1),0)
q=Math.max(Math.min(B.a.D(s-1,i.d),i.c-1),0)
p=B.a.D(r,8+j.c)
o=B.a.t(q,8)
n=j.ak(o,p)
m=j.a7(p,o)
l=m.a
k=m.b
j=j.ch
if(!(l>=0&&l<j.length))return A.b(j,l)
j=j[l]
if(!(k>=0&&k<j.length))return A.b(j,k)
return new A.a8(p,o,n,j[k].d,r,q,i.aU(q,r))},
$S:17}
A.cx.prototype={
$1(a){return new A.a6()},
$S:18}
A.cw.prototype={
$0(){var s,r,q,p,o,n=this.a,m=n.a,l=n.b,k=new A.ab(m,l)
k.su(n.y.gu())
s=A.t([],t.s)
for(r=n.z,q=r.b;p=k.c,o=k.d,p*l+o<r.c*q+r.d;p=k.c*l+k.d+1,k.c=B.a.k(B.a.D(p,l),m),k.d=B.a.k(p,l))s.push(n.ak(o,p))
return B.o.bA(s,"")},
$S:19}
A.cr.prototype={
$0(){var s=this.a.w
s===$&&A.F()
s.K()},
$S:1}
A.cs.prototype={
$0(){var s=this.a.w
s===$&&A.F()
s.J()},
$S:1}
A.ct.prototype={
$1(a){var s,r,q,p
a.preventDefault()
s=this.a
switch(s.ay.a){case 0:break
case 1:r=s.at
if(r.d!=null){r.E(0,this.c.$1(a))
s.ay=B.d}break
case 2:s.aB()
A:{q=a.keyCode
if(13===q){r=s.as
if(r.d!=null){r.E(0,J.f8(this.d.$0()))
s.aQ()
s.ay=B.d}break A}if(8===q){r=s.x
if(r.gu()>s.y.gu()){r.su(r.gu()-1)
s.aS(" ",!1)
r.su(r.gu()-1)}break A}p=a.key
if(p.length===1&&s.x.gu()<s.z.gu())s.aS(p,!1)}break
case 3:break}},
$S:6}
A.cu.prototype={
$1(a){var s
a.preventDefault()
s=this.a
if(s.ay===B.k&&s.ax.d!=null){s.ax.E(0,this.b.$1(a))
s.ay=B.d}},
$S:6}
A.cv.prototype={
$1(a){var s,r=this.a,q=r.w
q===$&&A.F()
if(q.z&&J.an(v.G.document.activeElement,q.w)&&r.ay===B.e8)if(r.cy)r.aB()
else{q=r.x
s=q.c
r.aW(q.d,$.eU(),s)
r.cy=!0}},
$S:20}
A.c3.prototype={
b4(){var s,r,q,p,o=this
for(s=o.b,r=o.a,q=0;q<16;++q){if(!(q<r.length))return A.b(r,q)
p=r[q]
if(!(q<s.length))return A.b(s,q)
s[q]=p
if(p===0){o.c=B.a.t(q,4)
o.d=B.a.k(q,4)}}},
ao(a,b){var s,r,q,p,o,n,m,l,k=this,j=k.c,i=a===j
if(i||b===k.d){if(a<0||a>3||b<0||b>3)return
if(i){s=k.d
r=s>b?-1:1
for(i=k.b,q=a*4,p=i.length;s!==b;){o=q+s
n=o+r
if(!(o>=0&&o<p))return A.b(i,o)
m=i[o]
if(!(n>=0&&n<p))return A.b(i,n)
i[o]=i[n]
i[n]=m
s+=r}}else if(b===k.d){l=j>a?-1:1
for(i=k.b,q=i.length;j!==a;){p=j*4+b
j+=l
o=j*4+b
if(!(p>=0&&p<q))return A.b(i,p)
m=i[p]
if(!(o>=0&&o<q))return A.b(i,o)
i[p]=i[o]
i[o]=m}}k.c=a
k.d=b}},
b2(a){var s,r,q,p
for(s=A.dq(250,t.z),s=s.gv(s);s.n();){s.gq()
r=-1
q=-1
for(;;){if(!(r!==this.c&&q!==this.d))break
p=$.dm()
r=p.V(4)
q=p.V(4)}this.ao(r,q)}},
bz(){var s,r,q,p,o,n
for(s=this.b,r=s.length,q=this.a,p=q.length,o=0;o<16;++o){if(!(o<r))return A.b(s,o)
n=s[o]
if(!(o<p))return A.b(q,o)
if(n!==q[o])return!1}return!0},
aN(){var s,r,q,p,o,n,m,l,k=this
for(s=k.b,r=k.a,q=0;q<16;++q){p=B.a.t(q,4)
o=B.a.k(q,4)
n=p===k.c&&o===k.d
m=r.length
l=s.length
if(n){if(!(q<m))return A.b(r,q)
n=r[q]
if(!(q<l))return A.b(s,q)
A.eI(n,p,o,!1,s[q]===n)}else{if(!(q<l))return A.b(s,q)
n=s[q]
if(!(q<m))return A.b(r,q)
A.eI(n,p,o,!0,n===r[q])}}}};(function aliases(){var s=J.M.prototype
s.b3=s.h})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._static_2,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u
s(A,"i2","fJ",2)
s(A,"i3","fK",2)
s(A,"i4","fL",2)
r(A,"eE","hX",0)
s(A,"i5","hP",4)
q(A,"i6","hQ",5)
p(A.l.prototype,"gav","bf",5)
o(A.aQ.prototype,"gbm","bn",0)
s(A,"eH","fN",21)
var n
o(n=A.bH.prototype,"gac","K",0)
o(n,"ga8","J",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.d,null)
q(A.d,[A.ds,J.bo,A.aI,J.be,A.j,A.R,A.ci,A.S,A.a7,A.bl,A.as,A.ag,A.bj,A.cA,A.ca,A.ar,A.aZ,A.aC,A.c8,A.z,A.bT,A.bY,A.b0,A.bL,A.x,A.ae,A.bO,A.bN,A.O,A.l,A.bM,A.bR,A.bU,A.aQ,A.bW,A.d5,A.aJ,A.cX,A.af,A.k,A.bk,A.cI,A.bD,A.aK,A.cJ,A.r,A.bX,A.bI,A.cV,A.K,A.cc,A.a6,A.a8,A.ab,A.bH,A.cp,A.c3])
q(J.bo,[J.bq,J.au,J.aw,J.av,J.ax,J.a5,J.T])
q(J.aw,[J.M,J.n,A.a9,A.aF])
q(J.M,[J.bE,J.V,J.L])
r(J.bp,A.aI)
r(J.c7,J.n)
q(J.a5,[J.at,J.br])
q(A.j,[A.aA,A.I,A.bs,A.bK,A.bG,A.bS,A.bf,A.E,A.aM,A.bJ,A.U,A.bh])
q(A.R,[A.c4,A.c5,A.co,A.dd,A.df,A.cF,A.cE,A.d6,A.cT,A.cm,A.cl,A.d0,A.cy,A.cx,A.ct,A.cu,A.cv])
q(A.c4,[A.di,A.cG,A.cH,A.d2,A.d1,A.cK,A.cP,A.cO,A.cM,A.cL,A.cS,A.cR,A.cQ,A.cn,A.ck,A.cY,A.d8,A.d_,A.d9,A.ce,A.cf,A.cg,A.ch,A.cw,A.cr,A.cs])
r(A.ap,A.S)
q(A.ap,[A.aB,A.aq])
r(A.bV,A.ag)
r(A.C,A.bV)
r(A.bm,A.bj)
r(A.aH,A.I)
q(A.co,[A.cj,A.ao])
r(A.az,A.aC)
r(A.ay,A.az)
q(A.c5,[A.de,A.d7,A.da,A.cU,A.c9,A.cd])
q(A.aF,[A.bu,A.aa])
q(A.aa,[A.aT,A.aV])
r(A.aU,A.aT)
r(A.aD,A.aU)
r(A.aW,A.aV)
r(A.aE,A.aW)
q(A.aD,[A.bv,A.bw])
q(A.aE,[A.bx,A.by,A.bz,A.bA,A.bB,A.aG,A.bC])
r(A.b1,A.bS)
r(A.b_,A.ae)
r(A.aP,A.b_)
r(A.W,A.aP)
r(A.bP,A.bO)
r(A.aO,A.bP)
r(A.aN,A.bN)
r(A.bQ,A.bR)
r(A.cZ,A.d5)
r(A.aY,A.aJ)
r(A.aS,A.aY)
q(A.E,[A.ad,A.bn])
r(A.aR,A.aB)
r(A.cq,A.cc)
q(A.cI,[A.bt,A.aL])
s(A.aT,A.k)
s(A.aU,A.as)
s(A.aV,A.k)
s(A.aW,A.as)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{a:"int",q:"double",eM:"num",B:"String",eF:"bool",r:"Null",f:"List",d:"Object",iC:"Map",i:"JSObject"},mangledNames:{},types:["~()","r()","~(~())","r(@)","~(@)","~(d,A)","r(i)","H<~>()","@(@)","@(@,B)","@(B)","r(~())","r(@,A)","~(a,@)","r(d,A)","~(d?,d?)","a(a,a)","a8(i)","a6(i)","B()","~(cz)","a(a)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.C&&a.b(c.a)&&b.b(c.b)}}
A.h4(v.typeUniverse,JSON.parse('{"bE":"M","V":"M","L":"M","iD":"a9","bq":{"e":[]},"au":{"e":[]},"aw":{"i":[]},"M":{"i":[]},"n":{"f":["1"],"i":[]},"bp":{"aI":[]},"c7":{"n":["1"],"f":["1"],"i":[]},"a5":{"q":[]},"at":{"q":[],"a":[],"e":[]},"br":{"q":[],"e":[]},"T":{"B":[],"e":[]},"aA":{"j":[]},"ap":{"S":["1"]},"aB":{"S":["1"]},"aq":{"S":["1"]},"aH":{"I":[],"j":[]},"bs":{"j":[]},"bK":{"j":[]},"aZ":{"A":[]},"bG":{"j":[]},"az":{"aC":["1","2"]},"ay":{"az":["1","2"],"aC":["1","2"]},"a9":{"i":[],"e":[]},"aF":{"i":[]},"bu":{"i":[],"e":[]},"aa":{"u":["1"],"i":[]},"aD":{"k":["q"],"f":["q"],"u":["q"],"i":[]},"aE":{"k":["a"],"f":["a"],"u":["a"],"i":[]},"bv":{"k":["q"],"f":["q"],"u":["q"],"i":[],"e":[],"k.E":"q"},"bw":{"k":["q"],"f":["q"],"u":["q"],"i":[],"e":[],"k.E":"q"},"bx":{"k":["a"],"f":["a"],"u":["a"],"i":[],"e":[],"k.E":"a"},"by":{"k":["a"],"f":["a"],"u":["a"],"i":[],"e":[],"k.E":"a"},"bz":{"k":["a"],"f":["a"],"u":["a"],"i":[],"e":[],"k.E":"a"},"bA":{"k":["a"],"f":["a"],"u":["a"],"i":[],"e":[],"k.E":"a"},"bB":{"cC":[],"k":["a"],"f":["a"],"u":["a"],"i":[],"e":[],"k.E":"a"},"aG":{"k":["a"],"f":["a"],"u":["a"],"i":[],"e":[],"k.E":"a"},"bC":{"k":["a"],"f":["a"],"u":["a"],"i":[],"e":[],"k.E":"a"},"bS":{"j":[]},"b1":{"I":[],"j":[]},"b0":{"cz":[]},"x":{"j":[]},"W":{"ae":["1"]},"aN":{"bN":["1"]},"l":{"H":["1"]},"aP":{"ae":["1"]},"b_":{"ae":["1"]},"aS":{"aJ":["1"]},"aY":{"aJ":["1"]},"bf":{"j":[]},"I":{"j":[]},"E":{"j":[]},"ad":{"j":[]},"bn":{"j":[]},"aM":{"j":[]},"bJ":{"j":[]},"U":{"j":[]},"bh":{"j":[]},"bD":{"j":[]},"aK":{"j":[]},"aR":{"aB":["1"],"S":["1"]},"bX":{"A":[]},"fn":{"f":["a"]},"fH":{"f":["a"]},"fG":{"f":["a"]},"fl":{"f":["a"]},"fF":{"f":["a"]},"fm":{"f":["a"]},"cC":{"f":["a"]},"fj":{"f":["q"]},"fk":{"f":["q"]}}'))
A.h3(v.typeUniverse,JSON.parse('{"ap":1,"bl":1,"as":1,"bj":2,"aa":1,"aP":1,"bP":1,"bO":1,"b_":1,"bR":1,"bQ":1,"bU":1,"aQ":1,"bW":1,"aY":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.c0
return{o:s("K"),Q:s("j"),Z:s("iA"),U:s("n<K>"),G:s("n<f<K>>"),f:s("n<d>"),s:s("n<B>"),w:s("n<cC>"),b:s("n<@>"),t:s("n<a>"),T:s("au"),m:s("i"),g:s("L"),p:s("u<@>"),V:s("a6"),j:s("f<@>"),q:s("a8"),P:s("r"),K:s("d"),L:s("iE"),F:s("+()"),l:s("A"),N:s("B"),E:s("cz"),R:s("e"),_:s("I"),A:s("V"),c:s("l<@>"),a:s("l<a>"),D:s("l<~>"),y:s("eF"),i:s("q"),z:s("@"),v:s("@(d)"),C:s("@(d,A)"),S:s("a"),O:s("H<r>?"),B:s("i?"),X:s("d?"),x:s("B?"),u:s("eF?"),I:s("q?"),J:s("a?"),M:s("eM?"),H:s("eM"),n:s("~"),d:s("~(d)"),k:s("~(d,A)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.E=J.bo.prototype
B.o=J.n.prototype
B.a=J.at.prototype
B.F=J.a5.prototype
B.p=J.T.prototype
B.G=J.L.prototype
B.H=J.aw.prototype
B.t=J.bE.prototype
B.l=J.V.prototype
B.u=new A.bl()
B.m=function getTagFallback(o) {
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
B.n=function(hooks) { return hooks; }

B.B=new A.bD()
B.c=new A.ci()
B.C=new A.cV()
B.b=new A.cZ()
B.D=new A.bX()
B.aK=s([15,15,15,15,0,0,0,0],t.t)
B.q=s([0,0,0,0,0,0,0,0],t.t)
B.f=s([240,240,240,240,240,240,240,240],t.t)
B.e=s([255,255,255,255,255,255,255,255],t.t)
B.h=s([0,0,0,0,255,255,255,255],t.t)
B.cr=s([0,0,0,0,240,240,240,240],t.t)
B.i=s([15,15,15,15,15,15,15,15],t.t)
B.cC=s([0,0,0,0,15,15,15,15],t.t)
B.cO=s([240,240,240,240,0,0,0,0],t.t)
B.j=s([255,255,255,255,0,0,0,0],t.t)
B.dz=s([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t.t)
B.dN=s([2016,6168,8196,16386,18450,34833,32769,32769,34833,34833,33825,17346,16386,8196,6168,2016],t.t)
B.bh=s([2016,6168,8196,16386,18450,34833,32769,32769,32769,33153,33153,16770,16770,8196,6168,2016],t.t)
B.ci=s([2016,6168,8196,16386,21546,34833,37929,32769,32769,32769,32769,16770,16770,8196,6168,2016],t.t)
B.b3=s([2016,6168,8196,16386,16386,34833,34833,32769,32769,32769,32769,20466,16386,8196,6168,2016],t.t)
B.bi=s([2016,6168,8196,16386,16386,34817,34873,32769,32769,32801,32801,18370,16386,8196,6168,2016],t.t)
B.cN=s([2016,6168,8196,16386,16386,32769,34833,32769,32769,32769,38937,17442,17346,8196,6168,2016],t.t)
B.bH=s([2016,6168,8196,16386,16386,32769,38937,32769,32769,36273,36849,18402,17346,8196,6168,2016],t.t)
B.cq=s([2016,6168,8196,16386,32766,48765,40569,32769,32769,33729,32769,16386,16386,8196,6168,2016],t.t)
B.dk=s([2016,6168,8196,16386,16386,34833,32769,32769,32769,32769,32769,18018,18834,8196,6168,2016],t.t)
B.cJ=s([2016,6168,8196,16386,21546,34833,37929,32769,32769,32769,32769,17346,16386,8196,6168,2016],t.t)
B.cB=s([2016,6168,8196,16386,16386,35889,32769,32769,32769,32769,33825,17346,16386,8196,6168,2016],t.t)
B.dO=s([2016,6168,8196,16386,19506,35889,35889,32769,32769,32769,33729,17346,17346,8196,6168,2016],t.t)
B.b1=s([2016,6168,8196,16386,16386,34833,36873,32769,32769,33729,34785,20466,20466,8196,6168,2016],t.t)
B.ay=s([2016,6168,8196,16386,16386,34833,32769,32769,32769,32817,33217,17922,16386,8196,6168,2016],t.t)
B.Q=s([2016,6168,8196,16386,16386,34833,33825,32769,32769,32769,32769,18402,16386,8196,6168,2016],t.t)
B.b7=s([2016,6168,8196,16386,16386,34833,34833,32769,32769,33153,33345,16962,16770,8196,6168,2016],t.t)
B.dF=s([2016,6168,8196,16386,16386,35889,32769,32769,32769,34785,33345,16962,16770,8196,6168,2016],t.t)
B.e_=s([2016,6168,8196,16386,17442,35889,32769,36873,33729,38889,34785,22506,18402,8196,6168,2016],t.t)
B.aY=s([2016,6168,8196,16386,18450,33825,32769,32769,34785,34833,36849,18450,18402,8196,6168,2016],t.t)
B.aC=s([2016,6168,8196,16386,16386,35889,32769,32769,32769,32769,32785,16610,16386,8196,6168,2016],t.t)
B.aM=s([2016,6168,8196,16386,16386,34833,34833,32769,32769,36849,36849,18402,17346,8196,6168,2016],t.t)
B.d5=s([2016,6168,8196,16386,18450,33825,34833,32769,32769,36849,36849,18402,17346,8196,6168,2016],t.t)
B.r=s([B.dz,B.dN,B.bh,B.ci,B.b3,B.bi,B.cN,B.bH,B.cq,B.dk,B.cJ,B.cB,B.dO,B.b1,B.ay,B.Q,B.b7,B.dF,B.e_,B.aY,B.aC,B.aM,B.d5],A.c0("n<f<a>>"))
B.dm=s([126,129,165,129,189,153,129,126],t.t)
B.a9=s([126,255,219,255,195,231,255,126],t.t)
B.dX=s([108,254,254,254,124,56,16,0],t.t)
B.cc=s([16,56,124,254,124,56,16,0],t.t)
B.b9=s([56,124,56,254,254,124,56,124],t.t)
B.bn=s([16,16,56,124,254,124,56,124],t.t)
B.ax=s([0,0,24,60,60,24,0,0],t.t)
B.aB=s([255,255,231,195,195,231,255,255],t.t)
B.aQ=s([0,60,102,66,66,102,60,0],t.t)
B.d6=s([255,195,153,189,189,153,195,255],t.t)
B.dW=s([15,7,15,125,204,204,204,120],t.t)
B.dV=s([60,102,102,102,60,24,126,24],t.t)
B.d2=s([63,51,63,48,48,112,240,224],t.t)
B.T=s([127,99,127,99,99,103,230,192],t.t)
B.Y=s([153,90,60,231,231,60,90,153],t.t)
B.au=s([128,224,248,254,248,224,128,0],t.t)
B.bJ=s([2,14,62,254,62,14,2,0],t.t)
B.cs=s([24,60,126,24,24,126,60,24],t.t)
B.cm=s([102,102,102,102,102,0,102,0],t.t)
B.cx=s([127,219,219,123,27,27,27,0],t.t)
B.cy=s([62,99,56,108,108,56,204,120],t.t)
B.bX=s([0,0,0,0,126,126,126,0],t.t)
B.c_=s([24,60,126,24,126,60,24,255],t.t)
B.N=s([24,60,126,24,24,24,24,0],t.t)
B.ds=s([24,24,24,24,126,60,24,0],t.t)
B.dj=s([0,24,12,254,12,24,0,0],t.t)
B.ar=s([0,48,96,254,96,48,0,0],t.t)
B.c4=s([0,0,192,192,192,254,0,0],t.t)
B.bB=s([0,36,102,255,102,36,0,0],t.t)
B.a7=s([0,24,60,126,255,255,0,0],t.t)
B.c0=s([0,255,255,126,60,24,0,0],t.t)
B.bK=s([48,120,120,48,48,0,48,0],t.t)
B.W=s([108,108,108,0,0,0,0,0],t.t)
B.al=s([108,108,254,108,254,108,108,0],t.t)
B.c8=s([48,124,192,120,12,248,48,0],t.t)
B.M=s([0,198,204,24,48,102,198,0],t.t)
B.cP=s([56,108,56,118,220,204,118,0],t.t)
B.ak=s([96,96,192,0,0,0,0,0],t.t)
B.S=s([24,48,96,96,96,48,24,0],t.t)
B.bF=s([96,48,24,24,24,48,96,0],t.t)
B.cD=s([0,102,60,255,60,102,0,0],t.t)
B.e4=s([0,48,48,252,48,48,0,0],t.t)
B.ca=s([0,0,0,0,0,48,48,96],t.t)
B.bA=s([0,0,0,252,0,0,0,0],t.t)
B.co=s([0,0,0,0,0,48,48,0],t.t)
B.a2=s([6,12,24,48,96,192,128,0],t.t)
B.bc=s([124,198,206,222,246,230,124,0],t.t)
B.ct=s([48,112,48,48,48,48,252,0],t.t)
B.c6=s([120,204,12,56,96,204,252,0],t.t)
B.dZ=s([120,204,12,56,12,204,120,0],t.t)
B.bI=s([28,60,108,204,254,12,30,0],t.t)
B.dl=s([252,192,248,12,12,204,120,0],t.t)
B.dE=s([56,96,192,248,204,204,120,0],t.t)
B.c7=s([252,204,12,24,48,48,48,0],t.t)
B.cG=s([120,204,204,120,204,204,120,0],t.t)
B.bl=s([120,204,204,124,12,24,112,0],t.t)
B.de=s([0,48,48,0,0,48,48,0],t.t)
B.aT=s([0,48,48,0,0,48,48,96],t.t)
B.bG=s([24,48,96,192,96,48,24,0],t.t)
B.bv=s([0,0,252,0,0,252,0,0],t.t)
B.aA=s([96,48,24,12,24,48,96,0],t.t)
B.ap=s([120,204,12,24,48,0,48,0],t.t)
B.dA=s([124,198,222,222,222,192,120,0],t.t)
B.ch=s([48,120,204,204,252,204,204,0],t.t)
B.aN=s([252,102,102,124,102,102,252,0],t.t)
B.ab=s([60,102,192,192,192,102,60,0],t.t)
B.a3=s([248,108,102,102,102,108,248,0],t.t)
B.ah=s([254,98,104,120,104,98,254,0],t.t)
B.cw=s([254,98,104,120,104,96,240,0],t.t)
B.an=s([60,102,192,192,206,102,62,0],t.t)
B.aq=s([204,204,204,252,204,204,204,0],t.t)
B.cY=s([120,48,48,48,48,48,120,0],t.t)
B.bV=s([30,12,12,12,204,204,120,0],t.t)
B.bN=s([230,102,108,120,108,102,230,0],t.t)
B.bM=s([240,96,96,96,98,102,254,0],t.t)
B.aO=s([198,238,254,254,214,198,198,0],t.t)
B.V=s([198,230,246,222,206,198,198,0],t.t)
B.d8=s([56,108,198,198,198,108,56,0],t.t)
B.bq=s([252,102,102,124,96,96,240,0],t.t)
B.cS=s([120,204,204,204,220,120,28,0],t.t)
B.L=s([252,102,102,124,108,102,230,0],t.t)
B.ae=s([120,204,224,112,28,204,120,0],t.t)
B.dQ=s([252,180,48,48,48,48,120,0],t.t)
B.aJ=s([204,204,204,204,204,204,252,0],t.t)
B.a_=s([204,204,204,204,204,120,48,0],t.t)
B.d0=s([198,198,198,214,254,238,198,0],t.t)
B.cV=s([198,198,108,56,56,108,198,0],t.t)
B.a1=s([204,204,204,120,48,48,120,0],t.t)
B.P=s([254,198,140,24,50,102,254,0],t.t)
B.bC=s([120,96,96,96,96,96,120,0],t.t)
B.cL=s([192,96,48,24,12,6,2,0],t.t)
B.bE=s([120,24,24,24,24,24,120,0],t.t)
B.dD=s([16,56,108,198,0,0,0,0],t.t)
B.K=s([0,0,0,0,0,0,0,255],t.t)
B.aL=s([48,48,24,0,0,0,0,0],t.t)
B.dt=s([0,0,120,12,124,204,118,0],t.t)
B.cl=s([224,96,96,124,102,102,220,0],t.t)
B.cU=s([0,0,120,204,192,204,120,0],t.t)
B.ba=s([28,12,12,124,204,204,118,0],t.t)
B.dH=s([0,0,120,204,252,192,120,0],t.t)
B.aR=s([56,108,96,240,96,96,240,0],t.t)
B.cR=s([0,0,118,204,204,124,12,248],t.t)
B.az=s([224,96,108,118,102,102,230,0],t.t)
B.cE=s([48,0,112,48,48,48,120,0],t.t)
B.bQ=s([12,0,12,12,12,204,204,120],t.t)
B.bj=s([224,96,102,108,120,108,230,0],t.t)
B.bS=s([112,48,48,48,48,48,120,0],t.t)
B.bz=s([0,0,204,254,254,214,198,0],t.t)
B.bT=s([0,0,248,204,204,204,204,0],t.t)
B.bm=s([0,0,120,204,204,204,120,0],t.t)
B.dL=s([0,0,220,102,102,124,96,240],t.t)
B.dI=s([0,0,118,204,204,124,12,30],t.t)
B.bw=s([0,0,220,118,102,96,240,0],t.t)
B.db=s([0,0,124,192,120,12,248,0],t.t)
B.d3=s([16,48,124,48,48,52,24,0],t.t)
B.ce=s([0,0,204,204,204,204,118,0],t.t)
B.b8=s([0,0,204,204,204,120,48,0],t.t)
B.bp=s([0,0,198,214,254,254,108,0],t.t)
B.bO=s([0,0,198,108,56,108,198,0],t.t)
B.dT=s([0,0,204,204,204,124,12,248],t.t)
B.dr=s([0,0,252,152,48,100,252,0],t.t)
B.be=s([28,48,48,224,48,48,28,0],t.t)
B.da=s([24,24,24,0,24,24,24,0],t.t)
B.aE=s([224,48,48,28,48,48,224,0],t.t)
B.e3=s([118,220,0,0,0,0,0,0],t.t)
B.b6=s([0,16,56,108,198,198,254,0],t.t)
B.at=s([120,204,192,204,120,24,12,120],t.t)
B.dp=s([0,204,0,204,204,204,126,0],t.t)
B.dS=s([28,0,120,204,252,192,120,0],t.t)
B.c9=s([126,195,60,6,62,102,63,0],t.t)
B.ag=s([204,0,120,12,124,204,126,0],t.t)
B.bb=s([224,0,120,12,124,204,126,0],t.t)
B.a6=s([48,48,120,12,124,204,126,0],t.t)
B.bs=s([0,0,120,192,192,120,12,56],t.t)
B.dy=s([126,195,60,102,126,96,60,0],t.t)
B.aP=s([204,0,120,204,252,192,120,0],t.t)
B.dc=s([224,0,120,204,252,192,120,0],t.t)
B.dq=s([204,0,112,48,48,48,120,0],t.t)
B.d1=s([124,198,56,24,24,24,60,0],t.t)
B.b2=s([224,0,112,48,48,48,120,0],t.t)
B.dY=s([198,56,108,198,254,198,198,0],t.t)
B.d9=s([48,48,0,120,204,252,204,0],t.t)
B.bL=s([28,0,252,96,120,96,252,0],t.t)
B.dR=s([0,0,127,12,127,204,127,0],t.t)
B.aU=s([62,108,204,254,204,204,206,0],t.t)
B.dJ=s([120,204,0,120,204,204,120,0],t.t)
B.ac=s([0,204,0,120,204,204,120,0],t.t)
B.e0=s([0,224,0,120,204,204,120,0],t.t)
B.aS=s([120,204,0,204,204,204,126,0],t.t)
B.d4=s([0,224,0,204,204,204,126,0],t.t)
B.aw=s([0,204,0,204,204,124,12,248],t.t)
B.ai=s([195,24,60,102,102,60,24,0],t.t)
B.dh=s([204,0,204,204,204,204,120,0],t.t)
B.X=s([24,24,126,192,192,126,24,24],t.t)
B.aH=s([56,108,100,240,96,230,252,0],t.t)
B.b4=s([204,204,120,252,48,252,48,48],t.t)
B.du=s([248,204,204,250,198,207,198,199],t.t)
B.bW=s([14,27,24,60,24,24,216,112],t.t)
B.aD=s([28,0,120,12,124,204,126,0],t.t)
B.ck=s([56,0,112,48,48,48,120,0],t.t)
B.aG=s([0,28,0,120,204,204,120,0],t.t)
B.cH=s([0,28,0,204,204,204,126,0],t.t)
B.aZ=s([0,248,0,248,204,204,204,0],t.t)
B.d_=s([252,0,204,236,252,220,204,0],t.t)
B.ad=s([60,108,108,62,0,126,0,0],t.t)
B.cg=s([56,108,108,56,0,124,0,0],t.t)
B.di=s([48,0,48,96,192,204,120,0],t.t)
B.b0=s([0,0,0,252,192,192,0,0],t.t)
B.aF=s([0,0,0,252,12,12,0,0],t.t)
B.dd=s([195,198,204,222,51,102,204,15],t.t)
B.av=s([195,198,204,219,55,111,207,3],t.t)
B.bZ=s([24,24,0,24,24,24,24,0],t.t)
B.bY=s([0,51,102,204,102,51,0,0],t.t)
B.bg=s([0,204,102,51,102,204,0,0],t.t)
B.cK=s([34,136,34,136,34,136,34,136],t.t)
B.dK=s([85,170,85,170,85,170,85,170],t.t)
B.bR=s([219,119,219,238,219,119,219,238],t.t)
B.b5=s([24,24,24,24,24,24,24,24],t.t)
B.b_=s([24,24,24,24,248,24,24,24],t.t)
B.c5=s([24,24,248,24,248,24,24,24],t.t)
B.e2=s([54,54,54,54,246,54,54,54],t.t)
B.cu=s([0,0,0,0,254,54,54,54],t.t)
B.aV=s([0,0,248,24,248,24,24,24],t.t)
B.aa=s([54,54,246,6,246,54,54,54],t.t)
B.cz=s([54,54,54,54,54,54,54,54],t.t)
B.cf=s([0,0,254,6,246,54,54,54],t.t)
B.cF=s([54,54,246,6,254,0,0,0],t.t)
B.ao=s([54,54,54,54,254,0,0,0],t.t)
B.a0=s([24,24,248,24,248,0,0,0],t.t)
B.a5=s([0,0,0,0,248,24,24,24],t.t)
B.Z=s([24,24,24,24,31,0,0,0],t.t)
B.c3=s([24,24,24,24,255,0,0,0],t.t)
B.bu=s([0,0,0,0,255,24,24,24],t.t)
B.dg=s([24,24,24,24,31,24,24,24],t.t)
B.c1=s([0,0,0,0,255,0,0,0],t.t)
B.cA=s([24,24,24,24,255,24,24,24],t.t)
B.cQ=s([24,24,31,24,31,24,24,24],t.t)
B.bk=s([54,54,54,54,55,54,54,54],t.t)
B.dG=s([54,54,55,48,63,0,0,0],t.t)
B.dx=s([0,0,63,48,55,54,54,54],t.t)
B.bP=s([54,54,247,0,255,0,0,0],t.t)
B.bD=s([0,0,255,0,247,54,54,54],t.t)
B.aX=s([54,54,55,48,55,54,54,54],t.t)
B.aW=s([0,0,255,0,255,0,0,0],t.t)
B.dU=s([54,54,247,0,247,54,54,54],t.t)
B.cW=s([24,24,255,0,255,0,0,0],t.t)
B.I=s([54,54,54,54,255,0,0,0],t.t)
B.dM=s([0,0,255,0,255,24,24,24],t.t)
B.cb=s([0,0,0,0,255,54,54,54],t.t)
B.cv=s([54,54,54,54,63,0,0,0],t.t)
B.by=s([24,24,31,24,31,0,0,0],t.t)
B.cn=s([0,0,31,24,31,24,24,24],t.t)
B.cT=s([0,0,0,0,63,54,54,54],t.t)
B.cZ=s([54,54,54,54,255,54,54,54],t.t)
B.bU=s([24,24,255,24,255,24,24,24],t.t)
B.dv=s([24,24,24,24,248,0,0,0],t.t)
B.bd=s([0,0,0,0,31,24,24,24],t.t)
B.e1=s([0,0,118,220,200,220,118,0],t.t)
B.dB=s([0,120,204,248,204,248,192,192],t.t)
B.am=s([0,252,204,192,192,192,192,0],t.t)
B.cd=s([0,254,108,108,108,108,108,0],t.t)
B.dw=s([252,204,96,48,96,204,252,0],t.t)
B.br=s([0,0,126,216,216,216,112,0],t.t)
B.bx=s([0,102,102,102,102,124,96,192],t.t)
B.cM=s([0,118,220,24,24,24,24,0],t.t)
B.af=s([252,48,120,204,204,120,48,252],t.t)
B.aI=s([56,108,198,254,198,108,56,0],t.t)
B.aj=s([56,108,198,198,108,108,238,0],t.t)
B.J=s([28,48,24,124,204,204,120,0],t.t)
B.dP=s([0,0,126,219,219,126,0,0],t.t)
B.bt=s([6,12,126,219,219,126,96,192],t.t)
B.a8=s([56,96,192,248,192,96,56,0],t.t)
B.cp=s([120,204,204,204,204,204,204,0],t.t)
B.cX=s([0,252,0,252,0,252,0,0],t.t)
B.a4=s([48,48,252,48,48,0,252,0],t.t)
B.bf=s([96,48,24,48,96,0,252,0],t.t)
B.d7=s([24,48,96,48,24,0,252,0],t.t)
B.bo=s([14,27,27,24,24,24,24,24],t.t)
B.dn=s([24,24,24,24,24,216,216,112],t.t)
B.cj=s([48,48,0,252,0,48,48,0],t.t)
B.O=s([0,118,220,0,118,220,0,0],t.t)
B.cI=s([56,108,108,56,0,0,0,0],t.t)
B.R=s([0,0,0,24,24,0,0,0],t.t)
B.dC=s([0,0,0,0,24,0,0,0],t.t)
B.U=s([15,12,12,12,236,108,60,28],t.t)
B.c2=s([120,108,108,108,108,0,0,0],t.t)
B.as=s([112,24,48,96,120,0,0,0],t.t)
B.df=s([0,0,60,60,60,60,0,0],t.t)
B.e5=new A.bm(["\u263a",B.dm,"\u263b",B.a9,"\u2665",B.dX,"\u2666",B.cc,"\u2663",B.b9,"\u2660",B.bn,"\u2022",B.ax,"\u25d8",B.aB,"\u25cb",B.aQ,"\u25d9",B.d6,"\u2642",B.dW,"\u2640",B.dV,"\u266a",B.d2,"\u266b",B.T,"\u263c",B.Y,"\u25ba",B.au,"\u25c4",B.bJ,"\u2195",B.cs,"\u203c",B.cm,"\xb6",B.cx,"\xa7",B.cy,"\u25ac",B.bX,"\u21a8",B.c_,"\u2191",B.N,"\u2193",B.ds,"\u2192",B.dj,"\u2190",B.ar,"\u221f",B.c4,"\u2194",B.bB,"\u25b2",B.a7,"\u25bc",B.c0," ",B.q,"!",B.bK,'"',B.W,"#",B.al,"$",B.c8,"%",B.M,"&",B.cP,"'",B.ak,"(",B.S,")",B.bF,"*",B.cD,"+",B.e4,",",B.ca,"-",B.bA,".",B.co,"/",B.a2,"0",B.bc,"1",B.ct,"2",B.c6,"3",B.dZ,"4",B.bI,"5",B.dl,"6",B.dE,"7",B.c7,"8",B.cG,"9",B.bl,":",B.de,";",B.aT,"<",B.bG,"=",B.bv,">",B.aA,"?",B.ap,"@",B.dA,"A",B.ch,"B",B.aN,"C",B.ab,"D",B.a3,"E",B.ah,"F",B.cw,"G",B.an,"H",B.aq,"I",B.cY,"J",B.bV,"K",B.bN,"L",B.bM,"M",B.aO,"N",B.V,"O",B.d8,"P",B.bq,"Q",B.cS,"R",B.L,"S",B.ae,"T",B.dQ,"U",B.aJ,"V",B.a_,"W",B.d0,"X",B.cV,"Y",B.a1,"Z",B.P,"[",B.bC,"\\",B.cL,"]",B.bE,"^",B.dD,"_",B.K,"`",B.aL,"a",B.dt,"b",B.cl,"c",B.cU,"d",B.ba,"e",B.dH,"f",B.aR,"g",B.cR,"h",B.az,"i",B.cE,"j",B.bQ,"k",B.bj,"l",B.bS,"m",B.bz,"n",B.bT,"o",B.bm,"p",B.dL,"q",B.dI,"r",B.bw,"s",B.db,"t",B.d3,"u",B.ce,"v",B.b8,"w",B.bp,"x",B.bO,"y",B.dT,"z",B.dr,"{",B.be,"|",B.da,"}",B.aE,"~",B.e3,"\u2302",B.b6,"\xc7",B.at,"\xfc",B.dp,"\xe9",B.dS,"\xe2",B.c9,"\xe4",B.ag,"\xe0",B.bb,"\xe5",B.a6,"\xe7",B.bs,"\xea",B.dy,"\xeb",B.aP,"\xe8",B.dc,"\xef",B.dq,"\xee",B.d1,"\xec",B.b2,"\xc4",B.dY,"\xc5",B.d9,"\xc9",B.bL,"\xe6",B.dR,"\xc6",B.aU,"\xf4",B.dJ,"\xf6",B.ac,"\xf2",B.e0,"\xfb",B.aS,"\xf9",B.d4,"\xff",B.aw,"\xd6",B.ai,"\xdc",B.dh,"\xa2",B.X,"\xa3",B.aH,"\xa5",B.b4,"\u20a7",B.du,"\u0192",B.bW,"\xe1",B.aD,"\xed",B.ck,"\xf3",B.aG,"\xfa",B.cH,"\xf1",B.aZ,"\xd1",B.d_,"\xaa",B.ad,"\xba",B.cg,"\xbf",B.di,"\u2310",B.b0,"\xac",B.aF,"\xbd",B.dd,"\xbc",B.av,"\xa1",B.bZ,"\xab",B.bY,"\xbb",B.bg,"\u2591",B.cK,"\u2592",B.dK,"\u2593",B.bR,"\u2502",B.b5,"\u2524",B.b_,"\u2561",B.c5,"\u2562",B.e2,"\u2556",B.cu,"\u2555",B.aV,"\u2563",B.aa,"\u2551",B.cz,"\u2557",B.cf,"\u255d",B.cF,"\u255c",B.ao,"\u255b",B.a0,"\u2510",B.a5,"\u2514",B.Z,"\u2534",B.c3,"\u252c",B.bu,"\u251c",B.dg,"\u2500",B.c1,"\u253c",B.cA,"\u255e",B.cQ,"\u255f",B.bk,"\u255a",B.dG,"\u2554",B.dx,"\u2569",B.bP,"\u2566",B.bD,"\u2560",B.aX,"\u2550",B.aW,"\u256c",B.dU,"\u2567",B.cW,"\u2568",B.I,"\u2564",B.dM,"\u2565",B.cb,"\u2559",B.cv,"\u2558",B.by,"\u2552",B.cn,"\u2553",B.cT,"\u256b",B.cZ,"\u256a",B.bU,"\u2518",B.dv,"\u250c",B.bd,"\u2588",B.e,"\u2584",B.h,"\u258c",B.f,"\u2590",B.i,"\u2580",B.j,"\u03b1",B.e1,"\xdf",B.dB,"\u0393",B.am,"\u03c0",B.cd,"\u03a3",B.dw,"\u03c3",B.br,"\xb5",B.bx,"\u03c4",B.cM,"\u03a6",B.af,"\u0398",B.aI,"\u03a9",B.aj,"\u03b4",B.J,"\u221e",B.dP,"\u03c6",B.bt,"\u03b5",B.a8,"\u2229",B.cp,"\u2261",B.cX,"\xb1",B.a4,"\u2265",B.bf,"\u2264",B.d7,"\u2320",B.bo,"\u2321",B.dn,"\xf7",B.cj,"\u2248",B.O,"\xb0",B.cI,"\u2219",B.R,"\xb7",B.dC,"\u221a",B.U,"\u207f",B.c2,"\xb2",B.as,"\u25a0",B.df],A.c0("bm<B,f<a>>"))
B.e6=new A.bt(0,"replace")
B.e7=new A.bt(2,"over")
B.d=new A.aL(0,"ready")
B.e8=new A.aL(2,"awaitingString")
B.k=new A.aL(3,"awaitingMouseClick")
B.e9=A.D("iw")
B.ea=A.D("ix")
B.eb=A.D("fj")
B.ec=A.D("fk")
B.ed=A.D("fl")
B.ee=A.D("fm")
B.ef=A.D("fn")
B.eg=A.D("d")
B.eh=A.D("fF")
B.ei=A.D("cC")
B.ej=A.D("fG")
B.ek=A.D("fH")})();(function staticFields(){$.cW=null
$.w=A.t([],t.f)
$.e2=null
$.dX=null
$.dW=null
$.eL=null
$.eD=null
$.eO=null
$.db=null
$.dg=null
$.dM=null
$.aX=A.t([],A.c0("n<f<d>?>"))
$.ah=null
$.b8=null
$.b9=null
$.dG=!1
$.h=B.b})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"iz","eT",()=>A.dc("_$dart_dartClosure"))
s($,"iy","dj",()=>A.dc("_$dart_dartClosure_dartJSInterop"))
s($,"iW","f6",()=>B.b.aX(new A.di()))
s($,"iU","f5",()=>A.t([new J.bp()],A.c0("n<aI>")))
s($,"iI","eW",()=>A.J(A.cB({
toString:function(){return"$receiver$"}})))
s($,"iJ","eX",()=>A.J(A.cB({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"iK","eY",()=>A.J(A.cB(null)))
s($,"iL","eZ",()=>A.J(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"iO","f1",()=>A.J(A.cB(void 0)))
s($,"iP","f2",()=>A.J(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"iN","f0",()=>A.J(A.eb(null)))
s($,"iM","f_",()=>A.J(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"iR","f4",()=>A.J(A.eb(void 0)))
s($,"iQ","f3",()=>A.J(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"iS","dQ",()=>A.fI())
s($,"iB","dk",()=>$.f6())
s($,"iT","dl",()=>A.dP(B.eg))
s($,"iH","eV",()=>A.du(8,0,!1,t.S))
s($,"iG","eU",()=>A.du(8,255,!1,t.S))
s($,"iX","dm",()=>B.C)
s($,"iY","c2",()=>{var r=A.hq(A.ih(A.it(),"document"),"getElementById","emotions")
r.toString
r=A.fD(20,r,"lightgray",!0,3,3,0,24)
r.ah("Mixed Emotions!",3,2)
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.a9,SharedArrayBuffer:A.a9,ArrayBufferView:A.aF,DataView:A.bu,Float32Array:A.bv,Float64Array:A.bw,Int16Array:A.bx,Int32Array:A.by,Int8Array:A.bz,Uint16Array:A.bA,Uint32Array:A.bB,Uint8ClampedArray:A.aG,CanvasPixelArray:A.aG,Uint8Array:A.bC})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.aa.$nativeSuperclassTag="ArrayBufferView"
A.aT.$nativeSuperclassTag="ArrayBufferView"
A.aU.$nativeSuperclassTag="ArrayBufferView"
A.aD.$nativeSuperclassTag="ArrayBufferView"
A.aV.$nativeSuperclassTag="ArrayBufferView"
A.aW.$nativeSuperclassTag="ArrayBufferView"
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
var s=A.c1
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=emotions.js.map
