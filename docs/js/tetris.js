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
if(a[b]!==s){A.iI(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.m(a,b)
a.$flags=7
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
dY(a,b,c,d){return{i:a,p:b,e:c,x:d}},
dV(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.dW==null){A.id()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.e(A.eg("Return interceptor for "+A.n(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.d2
if(o==null)o=$.d2=A.dg(n)
p=q[o]}if(p!=null)return p
p=A.ii(a)
if(p!=null)return p
if(typeof a=="function")return B.aj
s=Object.getPrototypeOf(a)
if(s==null)return B.a_
if(s===Object.prototype)return B.a_
if(typeof q=="function"){o=$.d2
if(o==null)o=$.d2=A.dg(n)
Object.defineProperty(q,o,{value:B.P,enumerable:false,writable:true,configurable:true})
return B.P}return B.P},
fm(a,b){return J.f4(a,b)},
a3(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aA.prototype
return J.bw.prototype}if(typeof a=="string")return J.X.prototype
if(a==null)return J.aB.prototype
if(typeof a=="boolean")return J.bv.prototype
if(Array.isArray(a))return J.k.prototype
if(typeof a!="object"){if(typeof a=="function")return J.O.prototype
if(typeof a=="symbol")return J.aE.prototype
if(typeof a=="bigint")return J.aC.prototype
return a}if(a instanceof A.h)return a
return J.dV(a)},
eH(a){if(typeof a=="string")return J.X.prototype
if(a==null)return a
if(Array.isArray(a))return J.k.prototype
if(typeof a!="object"){if(typeof a=="function")return J.O.prototype
if(typeof a=="symbol")return J.aE.prototype
if(typeof a=="bigint")return J.aC.prototype
return a}if(a instanceof A.h)return a
return J.dV(a)},
i7(a){if(a==null)return a
if(Array.isArray(a))return J.k.prototype
if(typeof a!="object"){if(typeof a=="function")return J.O.prototype
if(typeof a=="symbol")return J.aE.prototype
if(typeof a=="bigint")return J.aC.prototype
return a}if(a instanceof A.h)return a
return J.dV(a)},
i8(a){if(typeof a=="number")return J.W.prototype
if(a==null)return a
if(!(a instanceof A.h))return J.Z.prototype
return a},
i9(a){if(typeof a=="number")return J.W.prototype
if(typeof a=="string")return J.X.prototype
if(a==null)return a
if(!(a instanceof A.h))return J.Z.prototype
return a},
a8(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.a3(a).I(a,b)},
f4(a,b){return J.i9(a).a8(a,b)},
J(a){return J.a3(a).gk(a)},
ds(a){return J.i7(a).gv(a)},
dt(a){return J.eH(a).gp(a)},
f5(a){return J.a3(a).gm(a)},
e0(a){return J.i8(a).bW(a)},
bk(a){return J.a3(a).h(a)},
bt:function bt(){},
bv:function bv(){},
aB:function aB(){},
aD:function aD(){},
P:function P(){},
bI:function bI(){},
Z:function Z(){},
O:function O(){},
aC:function aC(){},
aE:function aE(){},
k:function k(a){this.$ti=a},
bu:function bu(){},
c7:function c7(a){this.$ti=a},
bl:function bl(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
W:function W(){},
aA:function aA(){},
bw:function bw(){},
X:function X(){}},A={dA:function dA(){},
fn(a){return new A.aH("Field '"+a+"' has not been initialized.")},
R(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
dH(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
dT(a,b,c){return a},
dX(a){var s,r
for(s=$.A.length,r=0;r<s;++r)if(a===$.A[r])return!0
return!1},
fh(a,b,c){return new A.as(a,b,c.i("as<0>"))},
dy(){return new A.bO("No element")},
aH:function aH(a){this.a=a},
ci:function ci(){},
at:function at(){},
aI:function aI(){},
ac:function ac(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
au:function au(a){this.$ti=a},
br:function br(){},
ay:function ay(a,b,c){this.a=a
this.b=b
this.$ti=c},
as:function as(a,b,c){this.a=a
this.b=b
this.$ti=c},
az:function az(a,b){this.a=a
this.b=b
this.c=-1},
aw:function aw(){},
eO(a){var s=A.eN(a)
if(s!=null)return s
return"minified:"+a},
j8(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.D.b(a)},
n(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.bk(a)
return s},
aP(a){var s,r=$.e9
if(r==null)r=$.e9=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
bJ(a){var s,r,q,p
if(a instanceof A.h)return A.z(A.bi(a),null)
s=J.a3(a)
if(s===B.ah||s===B.ak||t.B.b(a)){r=B.Q(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.z(A.bi(a),null)},
ea(a){var s,r,q
if(a==null||typeof a=="number"||A.dP(a))return J.bk(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.V)return a.h(0)
if(a instanceof A.ak)return a.aU(!0)
s=$.f2()
for(r=0;r<1;++r){q=s[r].bY(a)
if(q!=null)return q}return"Instance of '"+A.bJ(a)+"'"},
fr(a){var s=a.$thrownJsError
if(s==null)return null
return A.a4(s)},
b(a,b){if(a==null)J.dt(a)
throw A.e(A.i2(a,b))},
i2(a,b){var s,r="index",q=null
if(!A.ew(b))return new A.G(!0,b,r,q)
s=J.dt(a)
if(b<0||b>=s)return A.dx(b,s,a,q,r)
return new A.aQ(q,q,!0,b,r,"Value not in range")},
dS(a){return new A.G(!0,a,null,null)},
e(a){return A.q(a,new Error())},
q(a,b){var s
if(a==null)a=new A.L()
b.dartException=a
s=A.iJ
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
iJ(){return J.bk(this.dartException)},
bj(a,b){throw A.q(a,b==null?new Error():b)},
a7(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.bj(A.hk(a,b,c),s)},
hk(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.aW("'"+s+"': Cannot "+o+" "+l+k+n)},
a6(a){throw A.e(A.a9(a))},
M(a){var s,r,q,p,o,n
a=A.iv(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.m([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.cE(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
cF(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
ef(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
dB(a,b){var s=b==null,r=s?null:b.method
return new A.bx(a,r,s?null:b.receiver)},
ap(a){if(a==null)return new A.cb(a)
if(a instanceof A.av)return A.T(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.T(a,a.dartException)
return A.hS(a)},
T(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
hS(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.a.bE(r,16)&8191)===10)switch(q){case 438:return A.T(a,A.dB(A.n(s)+" (Error "+q+")",null))
case 445:case 5007:A.n(s)
return A.T(a,new A.aO())}}if(a instanceof TypeError){p=$.eS()
o=$.eT()
n=$.eU()
m=$.eV()
l=$.eY()
k=$.eZ()
j=$.eX()
$.eW()
i=$.f0()
h=$.f_()
g=p.A(s)
if(g!=null)return A.T(a,A.dB(s,g))
else{g=o.A(s)
if(g!=null){g.method="call"
return A.T(a,A.dB(s,g))}else if(n.A(s)!=null||m.A(s)!=null||l.A(s)!=null||k.A(s)!=null||j.A(s)!=null||m.A(s)!=null||i.A(s)!=null||h.A(s)!=null)return A.T(a,new A.aO())}return A.T(a,new A.bR(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.aT()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.T(a,new A.G(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.aT()
return a},
a4(a){var s
if(a instanceof A.av)return a.b
if(a==null)return new A.b4(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.b4(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
dZ(a){if(a==null)return J.J(a)
if(typeof a=="object")return A.aP(a)
return J.J(a)},
i_(a){if(typeof a=="number")return B.ai.gk(a)
if(a instanceof A.c2)return A.aP(a)
if(a instanceof A.ak)return a.gk(a)
return A.dZ(a)},
i6(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=a.length
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
if(m==null)o[q]=b.a_(q,p)
else m.b=p}else if(typeof q=="number"&&(q&0x3fffffff)===q){l=b.c
if(l==null){n=Object.create(null)
n["<non-identifier-key>"]=n
delete n["<non-identifier-key>"]
b.c=n
l=n}m=l[q]
if(m==null)l[q]=b.a_(q,p)
else m.b=p}else{k=b.d
if(k==null){n=Object.create(null)
n["<non-identifier-key>"]=n
delete n["<non-identifier-key>"]
b.d=n
k=n}j=b.ar(q)
i=k[j]
if(i==null)k[j]=[b.a_(q,p)]
else{r=b.au(i,q)
if(r>=0)i[r].b=p
else i.push(b.a_(q,p))}}}return b},
ht(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.e(new A.cR("Unsupported number of arguments for wrapped closure"))},
bg(a,b){var s=a.$identity
if(!!s)return s
s=A.i0(a,b)
a.$identity=s
return s},
i0(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.ht)},
fc(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.cj().constructor.prototype):Object.create(new A.ar(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.e6(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.f8(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.e6(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
f8(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.e("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.f6)}throw A.e("Error in functionType of tearoff")},
f9(a,b,c,d){var s=A.e5
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
e6(a,b,c,d){if(c)return A.fb(a,b,d)
return A.f9(b.length,d,a,b)},
fa(a,b,c,d){var s=A.e5,r=A.f7
switch(b?-1:a){case 0:throw A.e(new A.bL("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
fb(a,b,c){var s,r
if($.e3==null)$.e3=A.e2("interceptor")
if($.e4==null)$.e4=A.e2("receiver")
s=b.length
r=A.fa(s,c,a,b)
return r},
dU(a){return A.fc(a)},
f6(a,b){return A.ba(v.typeUniverse,A.bi(a.a),b)},
e5(a){return a.a},
f7(a){return a.b},
e2(a){var s,r,q,p=new A.ar("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.e(A.aq("Field name "+a+" not found.",null))},
dg(a){return v.getIsolateTag(a)},
ii(a){var s,r,q,p,o,n=$.eI.$1(a),m=$.de[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.dk[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.eB.$2(a,n)
if(q!=null){m=$.de[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.dk[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.dn(s)
$.de[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.dk[n]=s
return s}if(p==="-"){o=A.dn(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.eK(a,s)
if(p==="*")throw A.e(A.eg(n))
if(v.leafTags[n]===true){o=A.dn(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.eK(a,s)},
eK(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.dY(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
dn(a){return J.dY(a,!1,null,!!a.$ix)},
ik(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.dn(s)
else return J.dY(s,c,null,null)},
id(){if(!0===$.dW)return
$.dW=!0
A.ie()},
ie(){var s,r,q,p,o,n,m,l
$.de=Object.create(null)
$.dk=Object.create(null)
A.ic()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.eM.$1(o)
if(n!=null){m=A.ik(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
ic(){var s,r,q,p,o,n,m=B.a6()
m=A.an(B.a7,A.an(B.a8,A.an(B.R,A.an(B.R,A.an(B.a9,A.an(B.aa,A.an(B.ab(B.Q),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.eI=new A.dh(p)
$.eB=new A.di(o)
$.eM=new A.dj(n)},
an(a,b){return a(b)||b},
i1(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
iv(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
c:function c(a,b){this.a=a
this.b=b},
bp:function bp(){},
r:function r(a,b){this.a=a
this.$ti=b},
aR:function aR(){},
cE:function cE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aO:function aO(){},
bx:function bx(a,b,c){this.a=a
this.b=b
this.c=c},
bR:function bR(a){this.a=a},
cb:function cb(a){this.a=a},
av:function av(a,b){this.a=a
this.b=b},
b4:function b4(a){this.a=a
this.b=null},
V:function V(){},
c4:function c4(){},
c5:function c5(){},
ck:function ck(){},
cj:function cj(){},
ar:function ar(a,b){this.a=a
this.b=b},
bL:function bL(a){this.a=a},
aG:function aG(){},
c8:function c8(a,b){this.a=a
this.b=b
this.c=null},
aF:function aF(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dh:function dh(a){this.a=a},
di:function di(a){this.a=a},
dj:function dj(a){this.a=a},
ak:function ak(){},
c_:function c_(){},
ae:function ae(){},
aM:function aM(){},
by:function by(){},
af:function af(){},
aK:function aK(){},
aL:function aL(){},
bz:function bz(){},
bA:function bA(){},
bB:function bB(){},
bC:function bC(){},
bD:function bD(){},
bE:function bE(){},
bF:function bF(){},
aN:function aN(){},
bG:function bG(){},
aZ:function aZ(){},
b_:function b_(){},
b0:function b0(){},
b1:function b1(){},
dE(a,b){var s=b.c
return s==null?b.c=A.b8(a,"aa",[b.x]):s},
ec(a){var s=a.w
if(s===6||s===7)return A.ec(a.x)
return s===11||s===12},
ft(a){return a.as},
bh(a){return A.d6(v.typeUniverse,a,!1)},
a1(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.a1(a1,s,a3,a4)
if(r===s)return a2
return A.en(a1,r,!0)
case 7:s=a2.x
r=A.a1(a1,s,a3,a4)
if(r===s)return a2
return A.em(a1,r,!0)
case 8:q=a2.y
p=A.am(a1,q,a3,a4)
if(p===q)return a2
return A.b8(a1,a2.x,p)
case 9:o=a2.x
n=A.a1(a1,o,a3,a4)
m=a2.y
l=A.am(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.dL(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.am(a1,j,a3,a4)
if(i===j)return a2
return A.eo(a1,k,i)
case 11:h=a2.x
g=A.a1(a1,h,a3,a4)
f=a2.y
e=A.hP(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.el(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.am(a1,d,a3,a4)
o=a2.x
n=A.a1(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.dM(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.e(A.bn("Attempted to substitute unexpected RTI kind "+a0))}},
am(a,b,c,d){var s,r,q,p,o=b.length,n=A.d7(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.a1(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
hQ(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.d7(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.a1(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
hP(a,b,c,d){var s,r=b.a,q=A.am(a,r,c,d),p=b.b,o=A.am(a,p,c,d),n=b.c,m=A.hQ(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.bZ()
s.a=q
s.b=o
s.c=m
return s},
m(a,b){a[v.arrayRti]=b
return a},
eE(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.ib(s)
return a.$S()}return null},
ig(a,b){var s
if(A.ec(b))if(a instanceof A.V){s=A.eE(a)
if(s!=null)return s}return A.bi(a)},
bi(a){if(a instanceof A.h)return A.dN(a)
if(Array.isArray(a))return A.d8(a)
return A.dO(J.a3(a))},
d8(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
dN(a){var s=a.$ti
return s!=null?s:A.dO(a)},
dO(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.hr(a,s)},
hr(a,b){var s=a instanceof A.V?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.fZ(v.typeUniverse,s.name)
b.$ccache=r
return r},
ib(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.d6(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
ia(a){return A.a2(A.dN(a))},
dR(a){var s
if(a instanceof A.ak)return A.i5(a.$r,a.aI())
s=a instanceof A.V?A.eE(a):null
if(s!=null)return s
if(t.R.b(a))return J.f5(a).a
if(Array.isArray(a))return A.d8(a)
return A.bi(a)},
a2(a){var s=a.r
return s==null?a.r=new A.c2(a):s},
i5(a,b){var s,r,q=b,p=q.length
if(p===0)return t.F
if(0>=p)return A.b(q,0)
s=A.ba(v.typeUniverse,A.dR(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.b(q,r)
s=A.eq(v.typeUniverse,s,A.dR(q[r]))}return A.ba(v.typeUniverse,s,a)},
F(a){return A.a2(A.d6(v.typeUniverse,a,!1))},
hq(a){var s=this
s.b=A.hN(s)
return s.b(a)},
hN(a){var s,r,q,p
if(a===t.K)return A.hz
if(A.a5(a))return A.hD
s=a.w
if(s===6)return A.ho
if(s===1)return A.ey
if(s===7)return A.hu
r=A.hM(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.a5)){a.f="$i"+q
if(q==="d")return A.hx
if(a===t.m)return A.hw
return A.hC}}else if(s===10){p=A.i1(a.x,a.y)
return p==null?A.ey:p}return A.hm},
hM(a){if(a.w===8){if(a===t.S)return A.ew
if(a===t.i||a===t.o)return A.hy
if(a===t.N)return A.hB
if(a===t.y)return A.dP}return null},
hp(a){var s=this,r=A.hl
if(A.a5(s))r=A.hd
else if(s===t.K)r=A.ha
else if(A.ao(s)){r=A.hn
if(s===t.M)r=A.h6
else if(s===t.x)r=A.hc
else if(s===t.u)r=A.h2
else if(s===t.W)r=A.h9
else if(s===t.I)r=A.h4
else if(s===t.E)r=A.h7}else if(s===t.S)r=A.h5
else if(s===t.N)r=A.hb
else if(s===t.y)r=A.h1
else if(s===t.o)r=A.h8
else if(s===t.i)r=A.h3
else if(s===t.m)r=A.N
s.a=r
return s.a(a)},
hm(a){var s=this
if(a==null)return A.ao(s)
return A.ih(v.typeUniverse,A.ig(a,s),s)},
ho(a){if(a==null)return!0
return this.x.b(a)},
hC(a){var s,r=this
if(a==null)return A.ao(r)
s=r.f
if(a instanceof A.h)return!!a[s]
return!!J.a3(a)[s]},
hx(a){var s,r=this
if(a==null)return A.ao(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.h)return!!a[s]
return!!J.a3(a)[s]},
hw(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.h)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
ex(a){if(typeof a=="object"){if(a instanceof A.h)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
hl(a){var s=this
if(a==null){if(A.ao(s))return a}else if(s.b(a))return a
throw A.q(A.et(a,s),new Error())},
hn(a){var s=this
if(a==null||s.b(a))return a
throw A.q(A.et(a,s),new Error())},
et(a,b){return new A.b6("TypeError: "+A.eh(a,A.z(b,null)))},
eh(a,b){return A.c6(a)+": type '"+A.z(A.dR(a),null)+"' is not a subtype of type '"+b+"'"},
C(a,b){return new A.b6("TypeError: "+A.eh(a,b))},
hu(a){var s=this
return s.x.b(a)||A.dE(v.typeUniverse,s).b(a)},
hz(a){return a!=null},
ha(a){if(a!=null)return a
throw A.q(A.C(a,"Object"),new Error())},
hD(a){return!0},
hd(a){return a},
ey(a){return!1},
dP(a){return!0===a||!1===a},
h1(a){if(!0===a)return!0
if(!1===a)return!1
throw A.q(A.C(a,"bool"),new Error())},
h2(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.q(A.C(a,"bool?"),new Error())},
h3(a){if(typeof a=="number")return a
throw A.q(A.C(a,"double"),new Error())},
h4(a){if(typeof a=="number")return a
if(a==null)return a
throw A.q(A.C(a,"double?"),new Error())},
ew(a){return typeof a=="number"&&Math.floor(a)===a},
h5(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.q(A.C(a,"int"),new Error())},
h6(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.q(A.C(a,"int?"),new Error())},
hy(a){return typeof a=="number"},
h8(a){if(typeof a=="number")return a
throw A.q(A.C(a,"num"),new Error())},
h9(a){if(typeof a=="number")return a
if(a==null)return a
throw A.q(A.C(a,"num?"),new Error())},
hB(a){return typeof a=="string"},
hb(a){if(typeof a=="string")return a
throw A.q(A.C(a,"String"),new Error())},
hc(a){if(typeof a=="string")return a
if(a==null)return a
throw A.q(A.C(a,"String?"),new Error())},
N(a){if(A.ex(a))return a
throw A.q(A.C(a,"JSObject"),new Error())},
h7(a){if(a==null)return a
if(A.ex(a))return a
throw A.q(A.C(a,"JSObject?"),new Error())},
ez(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.z(a[q],b)
return s},
hH(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.ez(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.z(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
eu(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.m([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)a4.push("T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.b(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.z(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.z(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.z(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.z(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.z(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
z(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.z(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.z(a.x,b)+">"
if(l===8){p=A.hR(a.x)
o=a.y
return o.length>0?p+("<"+A.ez(o,b)+">"):p}if(l===10)return A.hH(a,b)
if(l===11)return A.eu(a,b,null)
if(l===12)return A.eu(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.b(b,n)
return b[n]}return"?"},
hR(a){var s=A.eN(a)
if(s!=null)return s
return"minified:"+a},
h_(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
fZ(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.d6(a,b,!1)
else if(typeof m=="number"){s=m
r=A.b9(a,5,"#")
q=A.d7(s)
for(p=0;p<s;++p)q[p]=r
o=A.b8(a,b,q)
n[b]=o
return o}else return m},
fY(a,b){return A.er(a.tR,b)},
fX(a,b){return A.er(a.eT,b)},
d6(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.ep(a,null,b,!1)
r.set(b,s)
return s},
ba(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.ep(a,b,c,!0)
q.set(c,r)
return r},
eq(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.dL(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
ep(a,b,c,d){return A.fO(A.fI(a,b,c,d))},
S(a,b){b.a=A.hp
b.b=A.hq
return b},
b9(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.D(null,null)
s.w=b
s.as=c
r=A.S(a,s)
a.eC.set(c,r)
return r},
en(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.fV(a,b,r,c)
a.eC.set(r,s)
return s},
fV(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.a5(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.ao(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.D(null,null)
q.w=6
q.x=b
q.as=c
return A.S(a,q)},
em(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.fT(a,b,r,c)
a.eC.set(r,s)
return s},
fT(a,b,c,d){var s,r
if(d){s=b.w
if(A.a5(b)||b===t.K)return b
else if(s===1)return A.b8(a,"aa",[b])
else if(b===t.P||b===t.T)return t.O}r=new A.D(null,null)
r.w=7
r.x=b
r.as=c
return A.S(a,r)},
fW(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.D(null,null)
s.w=13
s.x=b
s.as=q
r=A.S(a,s)
a.eC.set(q,r)
return r},
b7(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
fS(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
b8(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.b7(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.D(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.S(a,r)
a.eC.set(p,q)
return q},
dL(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.b7(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.D(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.S(a,o)
a.eC.set(q,n)
return n},
eo(a,b,c){var s,r,q="+"+(b+"("+A.b7(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.D(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.S(a,s)
a.eC.set(q,r)
return r},
el(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.b7(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.b7(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.fS(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.D(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.S(a,p)
a.eC.set(r,o)
return o},
dM(a,b,c,d){var s,r=b.as+("<"+A.b7(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.fU(a,b,c,r,d)
a.eC.set(r,s)
return s},
fU(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.d7(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.a1(a,b,r,0)
m=A.am(a,c,r,0)
return A.dM(a,n,m,c!==m)}}l=new A.D(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.S(a,l)},
fI(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
fO(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.fK(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.ej(a,r,l,k,!1)
else if(q===46)r=A.ej(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.a_(a.u,a.e,k.pop()))
break
case 94:k.push(A.fW(a.u,k.pop()))
break
case 35:k.push(A.b9(a.u,5,"#"))
break
case 64:k.push(A.b9(a.u,2,"@"))
break
case 126:k.push(A.b9(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.fM(a,k)
break
case 38:A.fL(a,k)
break
case 63:p=a.u
k.push(A.en(p,A.a_(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.em(p,A.a_(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.fJ(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.ek(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.fP(a.u,a.e,o)
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
return A.a_(a.u,a.e,m)},
fK(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
ej(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.h_(s,o.x)[p]
if(n==null)A.bj('No "'+p+'" in "'+A.ft(o)+'"')
d.push(A.ba(s,o,n))}else d.push(p)
return m},
fM(a,b){var s,r=a.u,q=A.ei(a,b),p=b.pop()
if(typeof p=="string")b.push(A.b8(r,p,q))
else{s=A.a_(r,a.e,p)
switch(s.w){case 11:b.push(A.dM(r,s,q,a.n))
break
default:b.push(A.dL(r,s,q))
break}}},
fJ(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
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
r=A.a_(p,a.e,o)
q=new A.bZ()
q.a=s
q.b=n
q.c=m
b.push(A.el(p,r,q))
return
case-4:b.push(A.eo(p,b.pop(),s))
return
default:throw A.e(A.bn("Unexpected state under `()`: "+A.n(o)))}},
fL(a,b){var s=b.pop()
if(0===s){b.push(A.b9(a.u,1,"0&"))
return}if(1===s){b.push(A.b9(a.u,4,"1&"))
return}throw A.e(A.bn("Unexpected extended operation "+A.n(s)))},
ei(a,b){var s=b.splice(a.p)
A.ek(a.u,a.e,s)
a.p=b.pop()
return s},
a_(a,b,c){if(typeof c=="string")return A.b8(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.fN(a,b,c)}else return c},
ek(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.a_(a,b,c[s])},
fP(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.a_(a,b,c[s])},
fN(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.e(A.bn("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.e(A.bn("Bad index "+c+" for "+b.h(0)))},
ih(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.p(a,b,null,c,null)
r.set(c,s)}return s},
p(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.a5(d))return!0
s=b.w
if(s===4)return!0
if(A.a5(b))return!1
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
if((!p||s===12)&&d===t.Y)return!0
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
return A.hv(a,b,c,d,e)}if(o&&q===10)return A.hA(a,b,c,d,e)
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
hv(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.ba(a,b,r[o])
return A.es(a,p,null,c,d.y,e)}return A.es(a,b.y,null,c,d.y,e)},
es(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.p(a,b[s],d,e[s],f))return!1
return!0},
hA(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.p(a,r[s],c,q[s],e))return!1
return!0},
ao(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.a5(a))if(s!==6)r=s===7&&A.ao(a.x)
return r},
a5(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
er(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
d7(a){return a>0?new Array(a):v.typeUniverse.sEA},
D:function D(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
bZ:function bZ(){this.c=this.b=this.a=null},
c2:function c2(a){this.a=a},
bX:function bX(){},
b6:function b6(a){this.a=a},
fB(){var s,r,q
if(self.scheduleImmediate!=null)return A.hV()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.bg(new A.cM(s),1)).observe(r,{childList:true})
return new A.cL(s,r,q)}else if(self.setImmediate!=null)return A.hW()
return A.hX()},
fC(a){self.scheduleImmediate(A.bg(new A.cN(a),0))},
fD(a){self.setImmediate(A.bg(new A.cO(a),0))},
fE(a){A.fQ(0,a)},
fQ(a,b){var s=new A.b5(!0)
s.be(a,b)
return s},
fR(a,b){var s=new A.b5(!1)
s.bf(a,b)
return s},
hF(a){return new A.bT(new A.v($.o,a.i("v<0>")),a.i("bT<0>"))},
hg(a,b){a.$2(0,null)
b.b=!0
return b.a},
j5(a,b){A.hh(a,b)},
hf(a,b){var s,r=a==null?b.$ti.c.a(a):a
if(!b.b)b.a.bi(r)
else{s=b.a
if(b.$ti.i("aa<1>").b(r))s.aF(r)
else s.aG(r)}},
he(a,b){var s=A.ap(a),r=A.a4(a),q=b.a
if(b.b)q.ac(new A.H(s,r))
else q.aE(new A.H(s,r))},
hh(a,b){var s,r,q=new A.d9(b),p=new A.da(b)
if(a instanceof A.v)a.aS(q,p,t.z)
else{s=t.z
if(a instanceof A.v)a.b4(q,p,s)
else{r=new A.v($.o,t.c)
r.a=8
r.c=a
r.aS(q,p,s)}}},
hT(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(q){e=q
d=c}}}}(a,1),r=$.o
return r.aN(r,new A.dc(s))},
du(a){var s
if(t.Q.b(a)){s=a.gZ()
if(s!=null)return s}return B.ae},
dJ(a,b,c){var s,r,q,p,o={},n=o.a=a
while(s=n.a,(s&4)!==0){n=n.c
o.a=n}if(n===b){s=A.fv()
b.aE(new A.H(new A.G(!0,n,null,"Cannot complete a future with itself"),s))
return}r=b.a&1
s=n.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=n
n.aM(q)
return}if(!c)if(b.c==null)n=(s&16)===0||r!==0
else n=!1
else n=!0
if(n){q=b.a3()
b.a0(o.a)
A.ai(b,q)
return}b.a^=2
p=b.b
p.S(p,new A.cV(o,b))},
ai(a,b){var s,r,q,p,o,n,m,l,k,j,i,h={},g=h.a=a
for(;;){s={}
r=g.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){r=g.c
g=g.b
g.ag(g,r.a,r.b)}return}s.a=b
o=b.a
for(g=b;o!=null;g=o,o=n){g.a=null
A.ai(h.a,g)
s.a=o
n=o.a}m=h.a.c
s.b=p
s.c=m
if(q){r=g.c
r=(r&1)!==0||(r&15)===8}else r=!0
if(r){l=g.b.b
k=$.o
if(k!==l)$.o=l
else k=null
g=g.c
if((g&15)===8)new A.cZ(s,h,p).$0()
else if(q){if((g&1)!==0)new A.cY(s,m).$0()}else if((g&2)!==0)new A.cX(h,s).$0()
if(k!=null)$.o=k
g=s.c
if(g instanceof A.v){r=s.a.$ti
r=r.i("aa<2>").b(g)||!r.y[1].b(g)}else r=!1
if(r){j=s.a.b
if((g.a&24)!==0){i=j.c
j.c=null
b=j.a4(i)
j.a=g.a&30|j.a&1
j.c=g.c
h.a=g
continue}else A.dJ(g,j,!0)
return}}j=s.a.b
i=j.c
j.c=null
b=j.a4(i)
g=s.b
r=s.c
if(!g){j.a=8
j.c=r}else{j.a=j.a&1|16
j.c=r}h.a=j
g=j}},
hI(a,b){if(t.C.b(a))return b.aN(b,a)
if(t.v.b(a))return b.a2(b,a)
throw A.e(A.e1(a,"onError",u.c))},
hG(){var s,r
for(s=$.al;s!=null;s=$.al){$.bd=null
r=s.b
$.al=r
if(r==null)$.bc=null
s.a.$0()}},
hO(){$.dQ=!0
try{A.hG()}finally{$.bd=null
$.dQ=!1
if($.al!=null)$.e_().$1(A.eC())}},
eA(a){var s=new A.bV(a),r=$.bc
if(r==null){$.al=$.bc=s
if(!$.dQ)$.e_().$1(A.eC())}else $.bc=r.b=s},
hL(a){var s,r,q,p=$.al
if(p==null){A.eA(a)
$.bd=$.bc
return}s=new A.bV(a)
r=$.bd
if(r==null){s.b=p
$.al=$.bd=s}else{q=r.b
s.b=q
$.bd=r.b=s
if(q==null)$.bc=s}},
iR(a){A.dT(a,"stream",t.K)
return new A.c0()},
dG(a){return new A.bU(null,a.i("bU<0>"))},
dI(a,b){var s=$.o
if(s===B.r)return s.aH(s,a,b)
return s.aH(s,a,s.aX(b,t.p))},
hJ(a,b){A.hL(new A.db(a,b))},
hK(a,b){if(B.r!==a)b=a.bG(b,t.H)
A.eA(b)},
cM:function cM(a){this.a=a},
cL:function cL(a,b,c){this.a=a
this.b=b
this.c=c},
cN:function cN(a){this.a=a},
cO:function cO(a){this.a=a},
b5:function b5(a){this.a=a
this.b=null
this.c=0},
d5:function d5(a,b){this.a=a
this.b=b},
d4:function d4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bT:function bT(a,b){this.a=a
this.b=!1
this.$ti=b},
d9:function d9(a){this.a=a},
da:function da(a){this.a=a},
dc:function dc(a){this.a=a},
H:function H(a,b){this.a=a
this.b=b},
bW:function bW(){},
bU:function bU(a,b){var _=this
_.b=a
_.c=0
_.e=_.d=null
_.$ti=b},
ah:function ah(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
v:function v(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
cS:function cS(a,b){this.a=a
this.b=b},
cW:function cW(a,b){this.a=a
this.b=b},
cV:function cV(a,b){this.a=a
this.b=b},
cU:function cU(a,b){this.a=a
this.b=b},
cT:function cT(a,b){this.a=a
this.b=b},
cZ:function cZ(a,b,c){this.a=a
this.b=b
this.c=c},
d_:function d_(a,b){this.a=a
this.b=b},
d0:function d0(a){this.a=a},
cY:function cY(a,b){this.a=a
this.b=b},
cX:function cX(a,b){this.a=a
this.b=b},
bV:function bV(a){this.a=a
this.b=null},
c0:function c0(){},
cH:function cH(){},
cI:function cI(a,b,c){this.a=a
this.b=b
this.c=c},
cK:function cK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cJ:function cJ(a,b,c){this.a=a
this.b=b
this.c=c},
db:function db(a,b){this.a=a
this.b=b},
fo(a){return new A.aY(a.i("aY<0>"))},
dK(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
fH(a,b,c){var s=new A.aj(a,b,c.i("aj<0>"))
s.c=a.e
return s},
dD(a){var s,r
if(A.dX(a))return"{...}"
s=new A.bP("")
try{r={}
$.A.push(a)
s.a+="{"
r.a=!0
a.aq(0,new A.c9(r,s))
s.a+="}"}finally{if(0>=$.A.length)return A.b($.A,-1)
$.A.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
aY:function aY(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
d3:function d3(a){this.a=a
this.c=this.b=null},
aj:function aj(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
l:function l(){},
aJ:function aJ(){},
c9:function c9(a,b){this.a=a
this.b=b},
aS:function aS(){},
b3:function b3(){},
h0(){if(typeof WeakRef=="function")return WeakRef
var s=function LeakRef(a){this._=a}
s.prototype={
deref(){return this._}}
return s},
fd(a,b){a=A.q(a,new Error())
a.stack=b.h(0)
throw a},
dC(a,b,c){var s,r,q
if(a>4294967295)A.bj(A.eb(a,0,4294967295,"length",null))
s=A.m(new Array(a),c.i("k<0>"))
s.$flags=1
r=s
if(a!==0)for(s=r.length,q=0;q<s;++q)r[q]=b
return r},
fp(a,b,c){var s,r,q=A.m([],c.i("k<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.a6)(a),++r)q.push(a[r])
q.$flags=1
return q},
ed(a,b,c){var s=J.ds(b)
if(!s.l())return a
if(c.length===0){do a+=A.n(s.gq())
while(s.l())}else{a+=A.n(s.gq())
while(s.l())a=a+c+A.n(s.gq())}return a},
fv(){return A.a4(new Error())},
dv(a){return new A.bq(1000*a)},
c6(a){if(typeof a=="number"||A.dP(a)||a==null)return J.bk(a)
if(typeof a=="string")return JSON.stringify(a)
return A.ea(a)},
fe(a,b){A.dT(a,"error",t.K)
A.dT(b,"stackTrace",t.l)
A.fd(a,b)},
bn(a){return new A.bm(a)},
aq(a,b){return new A.G(!1,null,b,a)},
e1(a,b,c){return new A.G(!0,a,b,c)},
eb(a,b,c,d,e){return new A.aQ(b,c,!0,a,d,"Invalid value")},
fs(a,b){if(a<0)throw A.e(A.eb(a,0,null,b,null))
return a},
dx(a,b,c,d,e){return new A.bs(b,!0,a,e,"Index out of range")},
bS(a){return new A.aW(a)},
eg(a){return new A.bQ(a)},
a9(a){return new A.bo(a)},
e8(a,b){if(a<=0)return new A.au(b.i("au<0>"))
if(!b.i("0(a)").b(A.eF()))throw A.e(A.aq("Generator must be supplied or element type must allow integers","generator"))
return new A.aX(a,A.eF(),b.i("aX<0>"))},
fl(a,b,c){var s,r
if(A.dX(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.m([],t.s)
$.A.push(a)
try{A.hE(a,s)}finally{if(0>=$.A.length)return A.b($.A,-1)
$.A.pop()}r=A.ed(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
dz(a,b,c){var s,r
if(A.dX(a))return b+"..."+c
s=new A.bP(b)
$.A.push(a)
try{r=s
r.a=A.ed(r.a,a,", ")}finally{if(0>=$.A.length)return A.b($.A,-1)
$.A.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
fG(a){return a},
hE(a,b){var s,r,q,p,o,n,m,l=a.gv(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.l())return
s=A.n(l.gq())
b.push(s)
k+=s.length+2;++j}if(!l.l()){if(j<=5)return
if(0>=b.length)return A.b(b,-1)
r=b.pop()
if(0>=b.length)return A.b(b,-1)
q=b.pop()}else{p=l.gq();++j
if(!l.l()){if(j<=4){b.push(A.n(p))
return}r=A.n(p)
if(0>=b.length)return A.b(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gq();++j
for(;l.l();p=o,o=n){n=l.gq();++j
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
cc(a,b,c,d){var s
if(B.q===c){s=B.a.gk(a)
b=J.J(b)
return A.dH(A.R(A.R($.dr(),s),b))}if(B.q===d){s=B.a.gk(a)
b=J.J(b)
c=J.J(c)
return A.dH(A.R(A.R(A.R($.dr(),s),b),c))}s=B.a.gk(a)
b=J.J(b)
c=J.J(c)
d=J.J(d)
d=A.dH(A.R(A.R(A.R(A.R($.dr(),s),b),c),d))
return d},
c3:function c3(a){this.a=a},
bq:function bq(a){this.a=a},
cP:function cP(){},
j:function j(){},
bm:function bm(a){this.a=a},
L:function L(){},
G:function G(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aQ:function aQ(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bs:function bs(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
aW:function aW(a){this.a=a},
bQ:function bQ(a){this.a=a},
bO:function bO(a){this.a=a},
bo:function bo(a){this.a=a},
bH:function bH(){},
aT:function aT(){},
cR:function cR(a){this.a=a},
K:function K(){},
aX:function aX(a,b,c){this.a=a
this.b=b
this.$ti=c},
u:function u(){},
h:function h(){},
c1:function c1(){},
bP:function bP(a){this.a=a},
d1:function d1(){},
U:function U(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ab:function ab(){},
ca:function ca(a,b){this.a=a
this.b=b},
ad:function ad(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ag:function ag(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=0},
fu(a,b,c,d,e,f,g,h){var s,r,q,p=A.e7(),o=h*g
p.width=o
s=d*f
p.height=s
r=A.e7()
r.width=o
r.height=s
s=A.m([],t.w)
for(o=A.e8(d,t.z),o=o.gv(o);o.l();){o.gq()
q=B.a.B(h,32)
s.push(new Uint32Array(q+1))}p=new A.bM(!0,d,h,g,f,c,a,p,r,s)
p.bb(a,b,c,d,!0,f,g,h)
return p},
dF(a){return new A.c(B.a.B(a,32),31-B.a.j(a,32))},
bM:function bM(a,b,c,d,e,f,g,h,i,j){var _=this
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
fw(a,b,c,d,e,f){var s,r,q,p,o,n="white",m=null,l=A.dG(t.N),k=A.dG(t.V),j=A.dG(t.q),i=v.G,h=i.document.getElementById(b)
if(h==null)h=A.N(h)
i=i.document.getElementById(b)
if(i==null)i=A.N(i)
i=A.fu("black",i,n,f*(8+e),!0,c,d,a*8)
s=A.m([],t.J)
for(r=t.U,q=0;q<f;++q){p=A.m([],r)
for(o=0;o<a;++o)p.push(new A.U(q,o," ",n))
s.push(p)}l=new A.cl(f,a,e,h,i,new A.ag(f,a),new A.ag(f,a),new A.ag(f,a),l,k,j,B.fc,s,A.fo(t.A),B.eR)
l.bc("black",a,b,n,m,!0,c,d,e,f,!0,m,m,m,m,m,m)
return l},
bN:function bN(a,b){this.a=a
this.b=b},
cl:function cl(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.a=a
_.b=b
_.c=c
_.f=d
_.w=e
_.x=f
_.y=g
_.z=h
_.as=i
_.at=j
_.ax=k
_.db=_.cy=_.cx=_.CW=_.ch=_.ay=null
_.dx=l
_.dy=m
_.fr=n
_.fx=o
_.fy=!1},
cy:function cy(a){this.a=a},
cx:function cx(){},
cw:function cw(a){this.a=a},
cm:function cm(a){this.a=a},
cn:function cn(a){this.a=a},
co:function co(a,b,c){this.a=a
this.b=b
this.c=c},
cp:function cp(a,b,c){this.a=a
this.b=b
this.c=c},
cq:function cq(a,b){this.a=a
this.b=b},
cr:function cr(a,b){this.a=a
this.b=b},
cs:function cs(a,b){this.a=a
this.b=b},
ct:function ct(a,b){this.a=a
this.b=b},
cu:function cu(a,b){this.a=a
this.b=b},
cv:function cv(a){this.a=a},
fF(a,b,c,d){var s=A.hU(new A.cQ(c),t.m)
s=s==null?null:A.a0(s)
if(s!=null)a.addEventListener(b,s,!1)
return new A.bY(a,b,s,!1)},
hU(a,b){var s=$.o
if(s===B.r)return a
return s.aX(a,b)},
dw:function dw(a){this.$ti=a},
bY:function bY(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
cQ:function cQ(a){this.a=a},
bK:function bK(a,b){this.a=a
this.b=b},
Y:function Y(){this.a="black"},
fx(a,b,c,d,e,f,g,h,i,j,k,l){var s,r,q,p,o=A.m([],t.Z),n=A.m([],t.d)
for(s=t.h,r=0;r<24;++r){q=A.m([],s)
for(p=0;p<12;++p)q.push(new A.Y())
n.push(q)}o=new A.cz(f,j,k,g,i,l,h,e,a,c,b,d,new A.aV(new A.aU(B.v,B.d)),new A.aV(new A.aU(B.v,B.d)),o,n)
o.bd(a,b,c,d,e,f,g,h,i,j,k,l)
return o},
cz:function cz(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o
_.ay=p
_.cx=_.CW=_.ch=0
_.cy=!1
_.db=10
_.dy=_.dx=0},
cB:function cB(a){this.a=a},
cA:function cA(a){this.a=a},
dp(a){var s=$.bf,r=-a.length
if(s.length!==0){$.bf=a+B.t.K(" ",$.be)+s
$.be=r}else{$.be=r-1
$.bf=a}},
ij(){A.dI(A.dv(100),new A.dl())
var s=A.fx(A.iw(),A.ix(),A.iy(),A.iz(),A.iA(),A.iB(),A.iC(),A.iD(),A.iE(),A.iF(),A.iG(),A.iH())
A.fF(v.G.window,"keydown",new A.dm(s),!1)
A.eL()},
eL(){var s,r,q,p,o=$.B()
o.C(0)
for(s=A.fh(A.m("  _____    _       _    _ \n |_   _|__| |_ _ _(_)__| |\n   | |/ -_)  _| '_| (_-<_|\n   |_|\\___|\\__|_| |_/__(_)\n   \n".split("\n"),t.s),0,t.N),r=J.ds(s.a),s=s.b,q=new A.az(r,s);q.l();){p=q.c
p=p>=0?new A.c(s+p,r.gq()):A.bj(A.dy())
o.bR(p.b,3,p.a+4)}o.H("Controls:",4)
o.az()
o.H("\u2190 Shift left",6)
o.H("\u2192 Shift right",6)
o.H("\u2193 Soft drop",6)
o.H("Z Rotate counter clockwise",6)
o.H("X Rotate clockwise",6)
o.H("C Hard drop",6)
o.az()
o.H("Press enter to begin!",6)},
iu(){var s,r,q="#333",p=$.B()
p.C(0)
p.O("\u250c"+B.t.K("\u252c",10)+"\u2510",q,3,!1,4)
for(s=0;s<20;++s){r=s+2+3
p.U(q,3,r)
p.t()
p.T("\u251c",3,r)
p.t()
p.U(q,14,r)
p.t()
p.T("\u2524",14,r)
p.t()}p.D("TETRIS!","white",15,1)
p.O("\u2514"+B.t.K("\u2534",10)+"\u2518",q,3,!1,25)
p.D("Next:","white",17,15)},
im(){$.df=B.ag
var s=$.B()
s.D("Game Over!","white",17,21)
s.D("Press enter!","white",17,23)},
ir(){},
is(a){var s,r,q=B.a.B(a,1e6),p=B.a.j(a,1e6),o=B.a.B(p,1000)
p=B.a.j(p,1000)
s=A.m([],t.s)
if(q>0)s.push(""+q)
if(o>0)s.push(""+o)
s.push(""+p)
r=B.m.b0(s,",")
s=$.B()
s.D("Score:","white",17,11)
s.D(r,"white",17,13)},
io(a){$.B().D("Level "+a,"white",17,7)
if(a!==1)A.dp(" -: Level up! :- ")},
iq(a){$.B().D("["+B.t.K("\u2588",a)+B.t.K("\u2592",10-a)+"]","white",17,9)},
it(a){var s,r,q,p,o,n
for(s=3;s<a.length-1;++s){r=s+2
q=1
for(;;){if(!(s<a.length))return A.b(a,s)
p=a[s]
if(!(q<p.length-1))break
o=$.B()
n=q+3
p=p[q].a
o.U(p!=="black"?p:"#333",n,r)
o.t()
if(!(s<a.length))return A.b(a,s)
p=a[s]
if(!(q<p.length))return A.b(p,q)
o.T(p[q].a!=="black"?"\u2592":"\u253c",n,r)
o.t();++q}}},
ip(a){if(a===4)A.dp(" -: Tetris! :- ")
else A.dp(" -: x"+a+" :-")},
il(){A.dp(" -: Board cleared! :- ")},
eD(a,b,c){var s,r,q,p,o,n
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.a6)(a),++r){q=a[r]
p=q.a
if(p>=3){o=$.B()
n=p+2+c
q=q.b+3
o.U("#333",q,n)
o.t()
o.T(b,q,n)
o.t()}}},
hY(a){return A.eD(a,"\u253c",0)},
hZ(a){return A.eD(a," ",13)},
eG(a,b,c){var s,r,q,p,o,n
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.a6)(a),++r){q=a[r]
p=q.a
if(p>=3){o=$.B()
n=p+2+c
q=q.b+3
o.U(b,q,n)
o.t()
o.T("\u2588",q,n)
o.t()}}},
i3(a,b){return A.eG(a,b,0)},
i4(a,b){return A.eG(a,b,13)},
ax:function ax(a,b){this.a=a
this.b=b},
dl:function dl(){},
dm:function dm(a){this.a=a},
aU:function aU(a,b){this.a=a
this.b=b},
aV:function aV(a){this.a=a
this.c=this.b=0},
E:function E(a,b){this.a=a
this.b=b},
ee(){var s,r=A.m([],t.Z)
for(s=0;s<7;++s)r.push(B.da[s])
B.m.b8(r,new A.cC())
return r},
w:function w(a,b){this.a=a
this.b=b},
cC:function cC(){},
eN(a){return v.mangledGlobalNames[a]},
iI(a){throw A.q(new A.aH("Field '"+a+"' has been assigned during initialization."),new Error())},
I(){throw A.q(A.fn(""),new Error())},
bb(a){var s
if(typeof a=="function")throw A.e(A.aq("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.hi,a)
s[$.dq()]=a
return s},
a0(a){var s
if(typeof a=="function")throw A.e(A.aq("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.hj,a)
s[$.dq()]=a
return s},
hi(a){return a.$0()},
hj(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
e7(){return v.G.document.createElement("canvas")}},B={}
var w=[A,J,B]
var $={}
A.dA.prototype={}
J.bt.prototype={
I(a,b){return a===b},
gk(a){return A.aP(a)},
h(a){return"Instance of '"+A.bJ(a)+"'"},
gm(a){return A.a2(A.dO(this))}}
J.bv.prototype={
h(a){return String(a)},
gk(a){return a?519018:218159},
gm(a){return A.a2(t.y)},
$if:1}
J.aB.prototype={
I(a,b){return null==b},
h(a){return"null"},
gk(a){return 0},
$if:1}
J.aD.prototype={$ii:1}
J.P.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.bI.prototype={}
J.Z.prototype={}
J.O.prototype={
h(a){var s=a[$.eP()]
if(s==null)s=a[$.dq()]
if(s==null)return this.ba(a)
return"JavaScript function for "+J.bk(s)}}
J.aC.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.aE.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.k.prototype={
aW(a,b){a.$flags&1&&A.a7(a,"addAll",2)
this.bh(a,b)
return},
bh(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw A.e(A.a9(a))
for(s=0;s<r;++s)a.push(b[s])},
C(a){a.$flags&1&&A.a7(a,"clear","clear")
a.length=0},
b0(a,b){var s,r,q=a.length,p=A.dC(q,"",t.N)
for(s=0;s<a.length;++s){r=A.n(a[s])
if(!(s<q))return A.b(p,s)
p[s]=r}return p.join(b)},
bJ(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw A.e(A.a9(a))}return s},
bK(a,b,c){return this.bJ(a,b,c,t.z)},
bF(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw A.e(A.a9(a))}return!1},
b8(a,b){var s,r,q,p,o,n
a.$flags&2&&A.a7(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.hs()
if(s===2){r=a[0]
q=a[1]
p=b.$2(r,q)
if(typeof p!=="number")return p.c0()
if(p>0){a[0]=q
a[1]=r}return}o=0
if(A.d8(a).c.b(null))for(n=0;n<a.length;++n)if(a[n]===void 0){a[n]=null;++o}a.sort(A.bg(b,2))
if(o>0)this.bx(a,o)},
bx(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
b_(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.b(a,s)
if(J.a8(a[s],b))return s}return-1},
h(a){return A.dz(a,"[","]")},
gv(a){return new J.bl(a,a.length,A.d8(a).i("bl<1>"))},
gk(a){return A.aP(a)},
gp(a){return a.length},
$id:1}
J.bu.prototype={
bY(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.bJ(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.c7.prototype={}
J.bl.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.e(A.a6(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.W.prototype={
a8(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gaw(b)
if(this.gaw(a)===s)return 0
if(this.gaw(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaw(a){return a===0?1/a<0:a<0},
bW(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.e(A.bS(""+a+".toInt()"))},
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
J(a,b){if((a|0)===a)if(b>=1)return a/b|0
return this.aR(a,b)},
B(a,b){return(a|0)===a?a/b|0:this.aR(a,b)},
aR(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.e(A.bS("Result of truncating division is "+A.n(s)+": "+A.n(a)+" ~/ "+b))},
Y(a,b){if(b<0)throw A.e(A.dS(b))
return b>31?0:a<<b>>>0},
bD(a,b){return b>31?0:a<<b>>>0},
b6(a,b){var s
if(b<0)throw A.e(A.dS(b))
if(a>0)s=this.ak(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
bE(a,b){var s
if(a>0)s=this.ak(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
F(a,b){if(0>b)throw A.e(A.dS(b))
return this.ak(a,b)},
ak(a,b){return b>31?0:a>>>b},
gm(a){return A.a2(t.o)},
$it:1}
J.aA.prototype={
gm(a){return A.a2(t.S)},
$if:1,
$ia:1}
J.bw.prototype={
gm(a){return A.a2(t.i)},
$if:1}
J.X.prototype={
K(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.e(B.ac)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
bS(a,b,c){var s=b-a.length
if(s<=0)return a
return this.K(c,s)+a},
a8(a,b){var s
if(a===b)s=0
else s=a<b?-1:1
return s},
h(a){return a},
gk(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gm(a){return A.a2(t.N)},
gp(a){return a.length},
$if:1,
$iy:1}
A.aH.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.ci.prototype={}
A.at.prototype={}
A.aI.prototype={
gv(a){var s=this
return new A.ac(s,s.gp(s),A.dN(s).i("ac<1>"))}}
A.ac.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s,r=this,q=r.a,p=J.eH(q),o=p.gp(q)
if(r.b!==o)throw A.e(A.a9(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.ao(q,s);++r.c
return!0}}
A.au.prototype={
gv(a){return B.a5},
gp(a){return 0}}
A.br.prototype={
l(){return!1},
gq(){throw A.e(A.dy())}}
A.ay.prototype={
gp(a){return J.dt(this.a)},
gv(a){return new A.az(J.ds(this.a),this.b)}}
A.as.prototype={}
A.az.prototype={
l(){if(++this.c>=0&&this.a.l())return!0
this.c=-2
return!1},
gq(){var s=this.c
return s>=0?new A.c(this.b+s,this.a.gq()):A.bj(A.dy())}}
A.aw.prototype={}
A.c.prototype={$r:"+(1,2)",$s:1}
A.bp.prototype={
h(a){return A.dD(this)}}
A.r.prototype={
a1(){var s=this,r=s.$map
if(r==null){r=new A.aF(s.$ti.i("aF<1,2>"))
A.i6(s.a,r)
s.$map=r}return r},
an(a){return this.a1().an(a)},
E(a,b){return this.a1().E(0,b)},
aq(a,b){this.a1().aq(0,b)},
gp(a){return this.a1().a}}
A.aR.prototype={}
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
A.bx.prototype={
h(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.bR.prototype={
h(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.cb.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.av.prototype={}
A.b4.prototype={
h(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iQ:1}
A.V.prototype={
h(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.eO(r==null?"unknown":r)+"'"},
gc_(){return this},
$C:"$1",
$R:1,
$D:null}
A.c4.prototype={$C:"$0",$R:0}
A.c5.prototype={$C:"$2",$R:2}
A.ck.prototype={}
A.cj.prototype={
h(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.eO(s)+"'"}}
A.ar.prototype={
I(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.ar))return!1
return this.$_target===b.$_target&&this.a===b.a},
gk(a){return(A.dZ(this.a)^A.aP(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.bJ(this.a)+"'")}}
A.bL.prototype={
h(a){return"RuntimeError: "+this.a}}
A.aG.prototype={
gp(a){return this.a},
an(a){var s=this.b
if(s==null)return!1
return s[a]!=null},
E(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.bO(b)},
bO(a){var s,r,q=this.d
if(q==null)return null
s=this.bp(q,a)
r=this.au(s,a)
if(r<0)return null
return s[r].b},
aq(a,b){var s=this,r=s.e,q=s.r
while(r!=null){b.$2(r.a,r.b)
if(q!==s.r)throw A.e(A.a9(s))
r=r.c}},
a_(a,b){var s=this,r=new A.c8(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&1073741823
return r},
ar(a){return J.J(a)&1073741823},
bp(a,b){return a[this.ar(b)]},
au(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a8(a[r].a,b))return r
return-1},
h(a){return A.dD(this)}}
A.c8.prototype={}
A.aF.prototype={
ar(a){return A.i_(a)&1073741823},
au(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a8(a[r].a,b))return r
return-1}}
A.dh.prototype={
$1(a){return this.a(a)},
$S:10}
A.di.prototype={
$2(a,b){return this.a(a,b)},
$S:11}
A.dj.prototype={
$1(a){return this.a(a)},
$S:12}
A.ak.prototype={
h(a){return this.aU(!1)},
aU(a){var s,r,q,p,o,n=this.bn(),m=this.aI(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.b(m,q)
o=m[q]
l=a?l+A.ea(o):l+A.n(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
bn(){var s,r=this.$s
while($.b2.length<=r)$.b2.push(null)
s=$.b2[r]
if(s==null){s=this.bm()
if(!(r<$.b2.length))return A.b($.b2,r)
$.b2[r]=s}return s},
bm(){var s,r,q,p,o,n=this.$r,m=n.indexOf("("),l=n.substring(1,m),k=n.substring(m),j=k==="()"?0:k.replace(/[^,]/g,"").length+1,i=A.m(new Array(j),t.f)
for(s=0;s<j;++s)i[s]=s
if(l!==""){r=l.split(",")
s=r.length
for(q=i.length,p=j;s>0;){--p;--s
o=r[s]
if(!(p>=0&&p<q))return A.b(i,p)
i[p]=o}}i=A.fp(i,!1,t.K)
i.$flags=3
return i}}
A.c_.prototype={
aI(){return[this.a,this.b]},
I(a,b){if(b==null)return!1
return b instanceof A.c_&&this.$s===b.$s&&J.a8(this.a,b.a)&&J.a8(this.b,b.b)},
gk(a){return A.cc(this.$s,this.a,this.b,B.q)}}
A.ae.prototype={
gm(a){return B.fe},
$if:1}
A.aM.prototype={}
A.by.prototype={
gm(a){return B.ff},
$if:1}
A.af.prototype={
gp(a){return a.length},
$ix:1}
A.aK.prototype={$id:1}
A.aL.prototype={$id:1}
A.bz.prototype={
gm(a){return B.fg},
$if:1}
A.bA.prototype={
gm(a){return B.fh},
$if:1}
A.bB.prototype={
gm(a){return B.fi},
$if:1}
A.bC.prototype={
gm(a){return B.fj},
$if:1}
A.bD.prototype={
gm(a){return B.fk},
$if:1}
A.bE.prototype={
gm(a){return B.fm},
$if:1}
A.bF.prototype={
gm(a){return B.fn},
$if:1,
$icG:1}
A.aN.prototype={
gm(a){return B.fo},
gp(a){return a.length},
$if:1}
A.bG.prototype={
gm(a){return B.fp},
gp(a){return a.length},
$if:1}
A.aZ.prototype={}
A.b_.prototype={}
A.b0.prototype={}
A.b1.prototype={}
A.D.prototype={
i(a){return A.ba(v.typeUniverse,this,a)},
aa(a){return A.eq(v.typeUniverse,this,a)}}
A.bZ.prototype={}
A.c2.prototype={
h(a){return A.z(this.a,null)}}
A.bX.prototype={
h(a){return this.a}}
A.b6.prototype={$iL:1}
A.cM.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:6}
A.cL.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:13}
A.cN.prototype={
$0(){this.a.$0()},
$S:1}
A.cO.prototype={
$0(){this.a.$0()},
$S:1}
A.b5.prototype={
be(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.bg(new A.d5(this,b),0),a)
else throw A.e(A.bS("`setTimeout()` not found."))},
bf(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.bg(new A.d4(this,a,Date.now(),b),0),a)
else throw A.e(A.bS("Periodic timer."))},
bI(){if(self.setTimeout!=null){var s=this.b
if(s==null)return
if(this.a)self.clearTimeout(s)
else self.clearInterval(s)
this.b=null}else throw A.e(A.bS("Canceling a timer."))},
$icD:1}
A.d5.prototype={
$0(){var s=this.a
s.b=null
s.c=1
this.b.$0()},
$S:0}
A.d4.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.a.J(s,o)}q.c=p
r.d.$1(q)},
$S:1}
A.bT.prototype={}
A.d9.prototype={
$1(a){return this.a.$2(0,a)},
$S:14}
A.da.prototype={
$2(a,b){this.a.$2(1,new A.av(a,b))},
$S:15}
A.dc.prototype={
$2(a,b){this.a(a,b)},
$S:16}
A.H.prototype={
h(a){return A.n(this.a)},
$ij:1,
gZ(){return this.b}}
A.bW.prototype={}
A.bU.prototype={}
A.ah.prototype={
bP(a){var s
if((this.c&15)!==6)return!0
s=this.b.b
return s.R(s,this.d,a.a)},
bM(a){var s,r=this.e,q=null,p=a.a,o=this.b.b
if(t.C.b(r))q=o.bz(o,r,p,a.b)
else q=o.R(o,r,p)
try{p=q
return p}catch(s){if(t._.b(A.ap(s))){if((this.c&1)!==0)throw A.e(A.aq("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.e(A.aq("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.v.prototype={
b4(a,b,c){var s,r,q=$.o
if(q===B.r){if(b!=null&&!t.C.b(b)&&!t.v.b(b))throw A.e(A.e1(b,"onError",u.c))}else{a=q.a2(q,a)
if(b!=null)b=A.hI(b,q)}s=new A.v(q,c.i("v<0>"))
r=b==null?1:3
this.a9(new A.ah(s,r,a,b,this.$ti.i("@<1>").aa(c).i("ah<1,2>")))
return s},
aS(a,b,c){var s=new A.v($.o,c.i("v<0>"))
this.a9(new A.ah(s,19,a,b,this.$ti.i("@<1>").aa(c).i("ah<1,2>")))
return s},
bC(a){this.a=this.a&1|16
this.c=a},
a0(a){this.a=a.a&30|this.a&1
this.c=a.c},
a9(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.a9(a)
return}s.a0(r)}r=s.b
r.S(r,new A.cS(s,a))}},
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
return}n.a0(s)}m.a=n.a4(a)
s=n.b
s.S(s,new A.cW(m,n))}},
a3(){var s=this.c
this.c=null
return this.a4(s)},
a4(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
aG(a){var s=this,r=s.a3()
s.a=8
s.c=a
A.ai(s,r)},
bl(a){var s=this.a3()
this.a0(a)
A.ai(this,s)},
ac(a){var s=this.a3()
this.bC(a)
A.ai(this,s)},
bi(a){if(this.$ti.i("aa<1>").b(a)){this.aF(a)
return}this.bj(a)},
bj(a){var s
this.a^=2
s=this.b
s.S(s,new A.cU(this,a))},
aF(a){A.dJ(a,this,!1)
return},
aE(a){var s
this.a^=2
s=this.b
s.S(s,new A.cT(this,a))},
$iaa:1}
A.cS.prototype={
$0(){A.ai(this.a,this.b)},
$S:0}
A.cW.prototype={
$0(){A.ai(this.b,this.a.a)},
$S:0}
A.cV.prototype={
$0(){A.dJ(this.a.a,this.b,!0)},
$S:0}
A.cU.prototype={
$0(){this.a.aG(this.b)},
$S:0}
A.cT.prototype={
$0(){this.a.ac(this.b)},
$S:0}
A.cZ.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
p=q.b.b
j=p.aP(p,q.d)}catch(o){s=A.ap(o)
r=A.a4(o)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
p=r
if(p==null)p=A.du(q)
n=k.a
n.c=new A.H(q,p)
q=n}q.b=!0
return}if(j instanceof A.v&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.v){m=k.b.a
l=new A.v(m.b,m.$ti)
j.b4(new A.d_(l,m),new A.d0(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.d_.prototype={
$1(a){this.a.bl(this.b)},
$S:6}
A.d0.prototype={
$2(a,b){this.a.ac(new A.H(a,b))},
$S:17}
A.cY.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
o=p.b.b
q.c=o.R(o,p.d,this.b)}catch(n){s=A.ap(n)
r=A.a4(n)
q=s
p=r
if(p==null)p=A.du(q)
o=this.a
o.c=new A.H(q,p)
o.b=!0}},
$S:0}
A.cX.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.bP(s)&&p.a.e!=null){p.c=p.a.bM(s)
p.b=!1}}catch(o){r=A.ap(o)
q=A.a4(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.du(p)
m=l.b
m.c=new A.H(p,n)
p=m}p.b=!0}},
$S:0}
A.bV.prototype={}
A.c0.prototype={}
A.cH.prototype={
bU(a,b){var s,r,q,p,o=this
try{q=o.R(o,a,b)
return q}catch(p){s=A.ap(p)
r=A.a4(p)
o.ag(o,s,r)}},
bV(a,b){return this.bU(a,b,t.z)},
bG(a,b){return new A.cI(this,this.bv(this,a),b)},
bH(a,b,c){return new A.cK(this,this.a2(this,a),c,b)},
aX(a,b){return new A.cJ(this,this.a2(this,a),b)},
ag(a,b,c){var s,r,q,p,o,n,m,l=null
if(l==null){A.hJ(b,c)
return}s=l.gaA()
r=s.gc1()
q=$.o
try{$.o=r
l.bL(s,s.gai(),a,b,c)
$.o=q}catch(n){p=A.ap(n)
o=A.a4(n)
$.o=q
m=b===p?c:o
r.ag(s,p,m)}},
bB(a,b){var s,r,q=$.o
if(q===a)return b.$0()
s=q
$.o=a
try{q=b.$0()
return q}finally{$.o=s}r=null.gaA()
return null.c2(r,r.gai(),a,b)},
aP(a,b){return this.bB(a,b,t.z)},
bA(a,b,c){var s,r,q=$.o
if(q===a)return b.$1(c)
s=q
$.o=a
try{q=b.$1(c)
return q}finally{$.o=s}r=null.gaA()
return null.bL(r,r.gai(),a,b,c)},
R(a,b,c){var s=t.z
return this.bA(a,b,c,s,s)},
by(a,b,c,d){var s,r,q=$.o
if(q===a)return b.$2(c,d)
s=q
$.o=a
try{q=b.$2(c,d)
return q}finally{$.o=s}r=null.gaA()
return null.c3(r,r.gai(),a,b,c,d)},
bz(a,b,c,d){var s=t.z
return this.by(a,b,c,d,s,s,s)},
bu(a,b){return b},
bv(a,b){return this.bu(a,b,t.z)},
bw(a,b){return b},
a2(a,b){var s=t.z
return this.bw(a,b,s,s)},
bt(a,b){return b},
aN(a,b){var s=t.z
return this.bt(a,b,s,s,s)},
S(a,b){A.hK(a,b)
return},
aH(a,b,c){var s
if(B.r!==a)c=a.bH(c,t.H,t.p)
s=B.a.B(b.a,1000)
return A.fR(s,c)}}
A.cI.prototype={
$0(){var s=this.a
return s.aP(s,this.b)},
$S(){return this.c.i("0()")}}
A.cK.prototype={
$1(a){var s=this.a
return s.R(s,this.b,a)},
$S(){return this.d.i("@<0>").aa(this.c).i("1(2)")}}
A.cJ.prototype={
$1(a){return this.a.bV(this.b,a)},
$S(){return this.c.i("~(0)")}}
A.db.prototype={
$0(){A.fe(this.a,this.b)},
$S:0}
A.aY.prototype={
gv(a){var s=this,r=new A.aj(s,s.r,s.$ti.i("aj<1>"))
r.c=s.e
return r},
gp(a){return this.a},
a6(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.aD(s==null?q.b=A.dK():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.aD(r==null?q.c=A.dK():r,b)}else return q.bg(b)},
bg(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.dK()
s=J.J(a)&1073741823
r=p[s]
if(r==null)p[s]=[q.ah(a)]
else{if(q.bo(r,a)>=0)return!1
r.push(q.ah(a))}return!0},
aD(a,b){if(a[b]!=null)return!1
a[b]=this.ah(b)
return!0},
aK(){this.r=this.r+1&1073741823},
ah(a){var s,r=this,q=new A.d3(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.aK()
return q},
bo(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a8(a[r].a,b))return r
return-1}}
A.d3.prototype={}
A.aj.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.e(A.a9(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.l.prototype={
gv(a){return new A.ac(a,a.length,A.bi(a).i("ac<l.E>"))},
ao(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
h(a){return A.dz(a,"[","]")}}
A.aJ.prototype={
gp(a){return this.a},
h(a){return A.dD(this)}}
A.c9.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.n(a)
r.a=(r.a+=s)+": "
s=A.n(b)
r.a+=s},
$S:18}
A.aS.prototype={
h(a){return A.dz(this,"{","}")}}
A.b3.prototype={}
A.c3.prototype={}
A.bq.prototype={
I(a,b){if(b==null)return!1
return b instanceof A.bq&&this.a===b.a},
gk(a){return B.a.gk(this.a)},
a8(a,b){return B.a.a8(this.a,b.a)},
h(a){var s,r,q,p,o=this.a,n=B.a.B(o,36e8)
o%=36e8
s=B.a.B(o,6e7)
o%=6e7
r=s<10?"0":""
q=B.a.B(o,1e6)
p=q<10?"0":""
return""+n+":"+r+s+":"+p+q+"."+B.t.bS(B.a.h(o%1e6),6,"0")}}
A.cP.prototype={
h(a){return this.L()}}
A.j.prototype={
gZ(){return A.fr(this)}}
A.bm.prototype={
h(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.c6(s)
return"Assertion failed"}}
A.L.prototype={}
A.G.prototype={
gaf(){return"Invalid argument"+(!this.a?"(s)":"")},
gae(){return""},
h(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.gaf()+q+o
if(!s.a)return n
return n+s.gae()+": "+A.c6(s.gav())},
gav(){return this.b}}
A.aQ.prototype={
gav(){return this.b},
gaf(){return"RangeError"},
gae(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.n(q):""
else if(q==null)s=": Not greater than or equal to "+A.n(r)
else if(q>r)s=": Not in inclusive range "+A.n(r)+".."+A.n(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.n(r)
return s}}
A.bs.prototype={
gav(){return this.b},
gaf(){return"RangeError"},
gae(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gp(a){return this.f}}
A.aW.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.bQ.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.bO.prototype={
h(a){return"Bad state: "+this.a}}
A.bo.prototype={
h(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.c6(s)+"."}}
A.bH.prototype={
h(a){return"Out of Memory"},
gZ(){return null},
$ij:1}
A.aT.prototype={
h(a){return"Stack Overflow"},
gZ(){return null},
$ij:1}
A.cR.prototype={
h(a){return"Exception: "+this.a}}
A.K.prototype={
gp(a){var s,r=this.gv(this)
for(s=0;r.l();)++s
return s},
ao(a,b){var s,r
A.fs(b,"index")
s=this.gv(this)
for(r=b;s.l();){if(r===0)return s.gq();--r}throw A.e(A.dx(b,b-r,this,null,"index"))},
h(a){return A.fl(this,"(",")")}}
A.aX.prototype={
ao(a,b){var s=this.a
if(0>b||b>=s)A.bj(A.dx(b,s,this,null,"index"))
return this.b.$1(b)},
gp(a){return this.a}}
A.u.prototype={
gk(a){return A.h.prototype.gk.call(this,0)},
h(a){return"null"}}
A.h.prototype={$ih:1,
I(a,b){return this===b},
gk(a){return A.aP(this)},
h(a){return"Instance of '"+A.bJ(this)+"'"},
gm(a){return A.ia(this)},
toString(){return this.h(this)}}
A.c1.prototype={
h(a){return""},
$iQ:1}
A.bP.prototype={
gp(a){return this.a.length},
h(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.d1.prototype={
bQ(){return Math.random()}}
A.U.prototype={
gk(a){var s=this.a,r=this.b
return A.cc(new A.c(s,r).$s,s,r,B.q)},
I(a,b){var s,r,q,p
if(b==null)return!1
if(b instanceof A.U){s=b.a
r=b.b
q=this.a
p=this.b
p=A.cc(new A.c(s,r).$s,s,r,B.q)===A.cc(new A.c(q,p).$s,q,p,B.q)
s=p}else s=!1
return s},
h(a){var s=this
return"("+s.a+" "+s.b+") => '"+s.c+"' "+s.d}}
A.ab.prototype={}
A.ca.prototype={
L(){return"Mode."+this.b}}
A.ad.prototype={
h(a){var s=this
return"               row: "+s.a+"\n            column: "+s.b+"\n         character: '"+s.c+"'\n    characterColor: "+s.d+"\n\n          pixelRow: "+s.e+"\n       pixelColumn: "+s.f+"\n         pixelIsOn: "+s.r+"\n    "}}
A.ag.prototype={
sa7(a){var s,r,q,p=this
if(a<0){s=p.d=a
for(r=p.b,q=p.a;s<0;){s+=r
p.d=s
p.c=B.a.j(p.c-1,q)}}else{s=p.b
p.c=B.a.j(p.c+B.a.J(a,s),p.a)
p.d=B.a.j(a,s)}},
gu(){return this.c*this.b+this.d},
su(a){var s=this,r=s.b
s.c=B.a.j(B.a.J(a,r),s.a)
s.d=B.a.j(a,r)}}
A.bM.prototype={
bb(a,b,c,d,e,f,g,h){var s,r=this,q=v.G.document
q.onfocus=A.bb(new A.ce(r))
q.onblur=A.bb(new A.cf(r))
q=r.w
q.tabIndex=-1
q.style.display="block"
q.style.outline="none"
s=q.getContext("2d")
if(s==null)s=A.N(s)
s.imageSmoothingEnabled=!1
q.onfocus=A.bb(new A.cg(r))
q.onblur=A.bb(new A.ch(r))
b.style.display="flex"
b.style.alignItems="flex-start"
b.style.padding="0"
b.style.margin="0"
b.style.width="fit-content"
b.style.height="fit-content"
b.style.background=r.r
b.appendChild(q)
r.C(0)},
a5(a,b){return new A.c(B.a.j(a,this.b),B.a.j(b,this.c))},
ab(){var s=this.x,r=s.getContext("2d")
if(r==null)r=A.N(r)
r.save()
r.beginPath()
r.clearRect(0,0,s.width,s.height)
r.restore()
return r},
ad(){var s=this.w.getContext("2d")
if(s==null)s=A.N(s)
s.save()
s.beginPath()
s.drawImage(this.x,0,0)
s.restore()
return s},
M(a,b,c,d){var s,r,q,p,o,n,m=this,l=a<0||a>=m.b||b<0||b>=m.c
if(l)return
s=m.a5(a,b)
a=s.a
b=s.b
r=A.dF(b)
q=r.a
p=B.a.Y(1,r.b)
l=m.y
if(!(a>=0&&a<l.length))return A.b(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.b(l,q)
o=l[q]
l.$flags&2&&A.a7(l)
l[q]=(o|p)>>>0
l[q]=(l[q]^p)>>>0
l=c.getContext("2d")
if(l==null)l=A.N(l)
l.save()
l.beginPath()
l.fillStyle=m.r
o=m.d
n=m.e
l.fillRect(b*o,a*n,o,n)
l.restore()},
N(a,b,c,d,e){var s,r,q,p,o,n,m=this,l=a<0||a>=m.b||b<0||b>=m.c
if(l)return
s=m.a5(a,b)
a=s.a
b=s.b
r=A.dF(b)
q=r.a
p=B.a.Y(1,r.b)
l=m.y
if(!(a>=0&&a<l.length))return A.b(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.b(l,q)
o=l[q]
l.$flags&2&&A.a7(l)
l[q]=(o|p)>>>0
o=d.getContext("2d")
l=o==null?A.N(o):o
l.save()
l.beginPath()
l.fillStyle=c
o=m.d
n=m.e
l.fillRect(b*o,a*n,o,n)
l.restore()},
b2(a,b){var s,r,q,p,o=this.a5(b,a)
b=o.a
s=A.dF(o.b)
r=s.a
q=B.a.Y(1,s.b)
p=this.y
if(!(b>=0&&b<p.length))return A.b(p,b)
p=p[b]
if(!(r>=0&&r<p.length))return A.b(p,r)
return(p[r]&q)>>>0>0},
aY(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=this
if(e==null)e=k.c-c
if(b==null)b=k.b-d
k.ab()
if(c===0&&d===0&&e===k.c&&b===k.b){for(s=k.y,r=s.length,q=0;q<r;++q)for(p=0;o=s[q],p<o.length;++p){o.$flags&2&&A.a7(o)
o[p]=0}s=k.x
r=s.getContext("2d")
if(r==null)r=A.N(r)
r.save()
r.fillStyle=k.r
r.fillRect(0,0,s.width,s.height)
r.restore()}else{s=k.b
d=B.a.j(d,s)
r=k.c
c=B.a.j(c,r)
n=Math.min(d+Math.abs(b),s)
m=Math.min(c+Math.abs(e),r)
for(o=k.x,q=d;q<n;++q){l=B.a.j(q,s)
for(p=c;p<m;++p)k.M(l,B.a.j(p,r),o,!1)}}k.ad()},
C(a){return this.aY(0,null,0,0,null)},
br(a,b,c,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
d.ab()
s=d.a5(a,b)
a=s.a
b=s.b
r=B.a.bD(1,a1)-1
for(q=a2.a,p=a1-1,o=t.t,n=d.x,m=0;m<c.length;++m){l=c[m]
k=(l&r)>>>0
l=A.m([],o)
for(j=a+m,i=0;i<a1;++i){h=d.b2(b+i,j)?1:0
l.push(B.a.Y(h,p-i))}g=B.m.bK(l,0,new A.cd())
switch(q){case 0:for(i=0;i<a1;++i){l=b+i
if((B.a.F(k,p-i)&1)>0)d.N(j,l,a0,n,!1)
else d.M(j,l,n,!1)}break
case 1:for(i=0;i<a1;++i){l=b+i
if((B.a.F(k,p-i)&1)>0)d.M(j,l,n,!1)
else d.N(j,l,a0,n,!1)}break
case 3:for(i=0;i<a1;++i){f=p-i
if((B.a.F(k,f)&1)>0&&(B.a.b6(g,f)&1)===0)d.N(j,b+i,a0,n,!1)}break
case 2:for(i=0;i<a1;++i)if((B.a.F(k,p-i)&1)>0)d.N(j,b+i,a0,n,!1)
break
case 4:for(e=(k&g)>>>0,i=0;i<a1;++i)if((B.a.F(e,p-i)&1)>0)d.N(j,b+i,a0,n,!1)
break
case 5:for(e=(k&g)>>>0,i=0;i<a1;++i)if((B.a.F(e,p-i)&1)>0)d.M(j,b+i,n,!1)
break
case 6:for(e=(k&g)>>>0,i=0;i<a1;++i)if((B.a.F(e,p-i)&1)===0)d.M(j,b+i,n,!1)
break
case 7:for(e=(k&g)>>>0,i=0;i<a1;++i){l=b+i
if((B.a.F(e,p-i)&1)===0)d.M(j,l,n,!1)
else d.N(j,l,a0,n,!1)}break}}d.ad()},
b3(a,b,c,d){this.br(d.a,d.b,b,a,8,c,!0,!1,!1)},
bT(a,b,c){return this.b3(a,b,B.Z,c)},
b5(a){var s,r,q,p,o,n,m,l,k=this,j=k.b
a=B.a.j(a,j)
for(s=j-a,r=k.y,q=r.length,p=0;p<s;++p){if(!(p<q))return A.b(r,p)
o=p+a
n=0
for(;m=r[p],n<m.length;++n){if(!(o<q))return A.b(r,o)
l=r[o]
if(!(n<l.length))return A.b(l,n)
l=l[n]
m.$flags&2&&A.a7(m)
m[n]=l}}for(;p<j;++p){if(!(p<q))return A.b(r,p)
n=0
for(;o=r[p],n<o.length;++n){o.$flags&2&&A.a7(o)
o[n]=0}}k.ab()
j=k.x
r=j.getContext("2d")
if(r==null)r=A.N(r)
r.save()
r.beginPath()
q=k.e
r.drawImage(k.w,0,-a*q)
r.fillStyle=k.r
r.fillRect(0,s*q,j.width,a*q)
r.restore()
k.ad()},
gaZ(){return this.z&&J.a8(v.G.document.activeElement,this.w)},
X(){var s=this.w
s.style.opacity="1.0"
s.focus()},
W(){var s=this.w,r=s.style
r.opacity="0.5"
s.blur()}}
A.ce.prototype={
$0(){this.a.z=!0},
$S:1}
A.cf.prototype={
$0(){this.a.z=!1},
$S:1}
A.cg.prototype={
$0(){this.a.X()},
$S:1}
A.ch.prototype={
$0(){this.a.W()},
$S:1}
A.cd.prototype={
$2(a,b){return(a|b)>>>0},
$S:19}
A.bN.prototype={
L(){return"State."+this.b}}
A.cl.prototype={
bc(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,a0,a1){var s,r=this,q=new A.cy(r),p=new A.cx()
r.cy=l
s=r.f
s.tabIndex=-1
s.onfocus=A.bb(new A.cm(r))
s.onblur=A.bb(new A.cn(r))
s.onkeydown=A.a0(new A.co(r,p,new A.cw(r)))
s.onclick=A.a0(new A.cp(r,q,o))
r.ay=o
s.onmouseup=A.a0(new A.cq(r,q))
r.ch=a0
s.onmousemove=A.a0(new A.cr(r,q))
r.CW=n
s.onmouseenter=A.a0(new A.cs(r,q))
r.cx=a1
s.onmouseleave=A.a0(new A.ct(r,q))
r.db=m
s.onkeyup=A.a0(new A.cu(r,p))
p=new ($.f1())(r)
A.dI(A.dv(300),new A.cv(new A.c3(p)))
r.W()
r.C(0)},
gap(){var s=this.w
s===$&&A.I()
return s.gap()},
gam(){var s=this.w
s===$&&A.I()
return s.gam()},
V(a,b){return new A.c(B.a.j(a,this.a),B.a.j(b,this.b))},
aJ(){var s=this,r=s.dy,q=s.x,p=q.c
if(!(p>=0&&p<r.length))return A.b(r,p)
p=r[p]
q=q.d
if(!(q>=0&&q<p.length))return A.b(p,q)
s.fr.a6(0,p[q])
s.t()
s.fy=!1},
aV(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
for(s=h.fr,r=A.fH(s,s.r,s.$ti.c),q=h.w,p=h.fx,o=8+h.c,n=r.$ti.c;r.l();){m=r.d
if(m==null)m=n.a(m)
l=m.a
k=m.b
if(p.an(m.c)){j=p.E(0,m.c)
j.toString
i=j}else i=$.eR()
q===$&&A.I()
m=m.d
q.b3(m,i,B.Z,new A.c(l*o,k*8))}if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.aK()}},
t(){return this.aV(null)},
aB(a,b){var s,r=this.V(b,a)
b=r.a
a=r.b
s=this.dy
if(!(b>=0&&b<s.length))return A.b(s,b)
s=s[b]
if(!(a>=0&&a<s.length))return A.b(s,a)
return s[a].c},
T(a,b,c){var s,r=this.V(c,b)
c=r.a
b=r.b
s=this.dy
if(!(c>=0&&c<s.length))return A.b(s,c)
s=s[c]
if(!(b>=0&&b<s.length))return A.b(s,b)
s=s[b]
s.c=a
this.fr.a6(0,s)},
U(a,b,c){var s,r=this.V(c,b)
c=r.a
b=r.b
s=this.dy
if(!(c>=0&&c<s.length))return A.b(s,c)
s=s[c]
if(!(b>=0&&b<s.length))return A.b(s,b)
s=s[b]
s.d=a
this.fr.a6(0,s)},
az(){var s,r=this.x
r.sa7(0)
s=r.c
if(s===this.a-1)this.aC()
else r.c=B.a.j(s+1,r.a)},
aC(){var s,r,q,p,o,n,m,l,k,j,i,h=this
for(s=A.e8(1,t.z),s=s.gv(s),r=h.w,q=8+h.c,p=h.b,o=h.dy,n=h.a-1;s.l();){s.gq()
for(m=0;m<n;m=l)for(l=m+1,k=0;k<p;++k){j=o.length
if(!(m<j))return A.b(o,m)
i=o[m]
if(!(k<i.length))return A.b(i,k)
i=i[k]
if(!(l<j))return A.b(o,l)
j=o[l]
if(!(k<j.length))return A.b(j,k)
j=j[k]
i.c=j.c
i.d=j.d}for(k=0;k<p;++k){if(!(n>=0&&n<o.length))return A.b(o,n)
j=o[n]
if(!(k<j.length))return A.b(j,k)
j=j[k]
j.c=" "
j.d="white"}r===$&&A.I()
r.b5(q)}},
O(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=e==null?h.x.c:e,f=h.V(g,c==null?h.x.d:c)
g=h.x
s=g.a
g.c=B.a.j(f.a,s)
g.sa7(f.b)
if(b==null)b="white"
for(r=a.split(""),q=r.length,p=h.dy,o=h.fr,n=h.a-1,m=h.b-1,l=0;l<q;++l){k=r[l]
e=g.c
c=g.d
if(!(e>=0&&e<p.length))return A.b(p,e)
j=p[e]
if(!(c>=0&&c<j.length))return A.b(j,c)
i=j[c]
i.c=k
i.d=b
o.a6(0,i)
if(e===n&&c===m){h.aC()
g.c=B.a.j(g.c-1,s)}g.sa7(g.d+1)}h.aV(null)
if(d)h.az()},
b1(a,b){return this.O(a,null,null,b,null)},
D(a,b,c,d){return this.O(a,b,c,!0,d)},
bR(a,b,c){return this.O(a,null,b,!0,c)},
H(a,b){return this.O(a,null,b,!0,null)},
C(a){var s,r,q,p,o=this,n=o.b,m=o.a
for(s=o.dy,r=0;r<m;++r)for(q=0;q<n;++q){if(!(r<s.length))return A.b(s,r)
p=s[r]
if(!(q<p.length))return A.b(p,q)
p=p[q]
p.c=" "
p.d="white"}s=o.w
s===$&&A.I()
p=8+o.c
s.aY(0,m*p,0,0*p,n*8)
p=o.x
p.c=0%p.a
p.sa7(0)},
bs(a,b,c){var s=this.w
s===$&&A.I()
s.bT("white",b,new A.c(c*(8+this.c),a*8))},
X(){return this.gap().$0()},
W(){return this.gam().$0()}}
A.cy.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.w
i===$&&A.I()
s=J.e0(a.offsetX)
r=Math.max(Math.min(B.a.J(J.e0(a.offsetY)-1,i.e),i.b-1),0)
q=Math.max(Math.min(B.a.J(s-1,i.d),i.c-1),0)
p=B.a.J(r,8+j.c)
o=B.a.B(q,8)
n=j.aB(o,p)
m=j.V(p,o)
l=m.a
k=m.b
j=j.dy
if(!(l>=0&&l<j.length))return A.b(j,l)
j=j[l]
if(!(k>=0&&k<j.length))return A.b(j,k)
return new A.ad(p,o,n,j[k].d,r,q,i.b2(q,r))},
$S:20}
A.cx.prototype={
$1(a){return new A.ab()},
$S:21}
A.cw.prototype={
$0(){var s,r,q,p,o,n=this.a,m=n.a,l=n.b,k=new A.ag(m,l)
k.su(n.y.gu())
s=A.m([],t.s)
for(r=n.z,q=r.b;p=k.c,o=k.d,p*l+o<r.c*q+r.d;p=k.c*l+k.d+1,k.c=B.a.j(B.a.J(p,l),m),k.d=B.a.j(p,l))s.push(n.aB(o,p))
return B.m.b0(s,"")},
$S:22}
A.cm.prototype={
$0(){var s=this.a.w
s===$&&A.I()
s.X()},
$S:1}
A.cn.prototype={
$0(){var s=this.a.w
s===$&&A.I()
s.W()},
$S:1}
A.co.prototype={
$1(a){var s,r,q,p
a.preventDefault()
s=this.a
switch(s.dx.a){case 0:break
case 1:break
case 2:s.aJ()
A:{r=a.keyCode
if(13===r)break A
if(8===r){q=s.x
if(q.gu()>s.y.gu()){q.su(q.gu()-1)
s.b1(" ",!1)
q.su(q.gu()-1)}break A}p=a.key
if(p.length===1&&s.x.gu()<s.z.gu())s.b1(p,!1)}break
case 3:break}},
$S:2}
A.cp.prototype={
$1(a){a.preventDefault()},
$S:2}
A.cq.prototype={
$1(a){a.preventDefault()},
$S:2}
A.cr.prototype={
$1(a){a.preventDefault()},
$S:2}
A.cs.prototype={
$1(a){a.preventDefault()},
$S:2}
A.ct.prototype={
$1(a){a.preventDefault()},
$S:2}
A.cu.prototype={
$1(a){a.preventDefault()},
$S:2}
A.cv.prototype={
$1(a){var s,r,q=this.a.a.deref()
if(q==null){a.bI()
return}s=q.w
s===$&&A.I()
if(s.gaZ()&&q.dx===B.fd)if(q.fy)q.aJ()
else{s=q.x
r=s.c
q.bs(s.d,$.eQ(),r)
q.fy=!0}},
$S:4}
A.dw.prototype={}
A.bY.prototype={}
A.cQ.prototype={
$1(a){return this.a.$1(a)},
$S:7}
A.bK.prototype={
L(){return"Rotation."+this.b}}
A.Y.prototype={}
A.cz.prototype={
bd(a,b,c,d,e,f,g,h,i,j,k,l){A.dI(A.dv(100),new A.cB(this))},
b9(){var s,r,q,p,o,n,m,l,k=this
for(s=k.ay,r=0;r<24;++r)for(q=r!==23,p=0;p<12;++p){if(!(r<s.length))return A.b(s,r)
o=s[r]
if(!(p<o.length))return A.b(o,p)
o=o[p]
o.a=!q||p===0||p===11?"white":"black"}q=k.ax
B.m.C(q)
B.m.aW(q,A.ee())
o=k.as
n=o.gn()
k.x.$1(n)
n=o.a
if(0>=q.length)return A.b(q,-1)
n.a=q.pop()
n.b=B.d
o.b=3
o.c=4
m=k.at
l=m.gn()
k.z.$1(l)
l=m.a
if(0>=q.length)return A.b(q,-1)
l.a=q.pop()
l.b=B.d
m.b=3
m.c=14
k.ch=0
k.CW=1
k.cx=0
k.cy=!0
k.db=10
k.dx=0
k.f.$1(s)
m=m.gn()
l=l.gG()
k.Q.$2(m,l)
o=o.gn()
n=n.gG()
k.y.$2(o,n)
n=k.cx
k.c.$1(n)
n=k.CW
k.d.$1(n)
n=k.ch
k.e.$1(n)
k.b.$0()},
al(){var s=0,r=A.hF(t.H),q=this
var $async$al=A.hT(function(a,b){if(a===1)return A.he(b,r)
for(;;)switch(s){case 0:if(++q.dx>=q.db){q.dx=0
q.aT()}return A.hf(null,r)}})
return A.hg($async$al,r)},
P(a){return B.m.bF(a,new A.cA(this))},
bq(){var s,r,q,p,o,n=this,m=n.ax
if(m.length===0){B.m.C(m)
B.m.aW(m,A.ee())}s=n.as
r=s.a
q=n.at
p=q.a
o=p.a
r.a=o
r.b=B.d
switch(o.a){case 0:o=2
break
default:o=3
break}s.b=o
s.c=4
n.f.$1(n.ay)
n.dy=n.dx=0
if(n.P(s.gn())){n.cy=!1
n.a.$0()}else{o=q.gn()
n.z.$1(o)
if(0>=m.length)return A.b(m,-1)
p.a=m.pop()
n.b.$0()
s=s.gn()
r=r.gG()
n.y.$2(s,r)
q=q.gn()
p=p.gG()
n.Q.$2(q,p)}},
aL(){var s,r,q,p,o,n,m,l,k,j,i,h=this
for(s=h.as,r=s.gn(),q=r.length,p=h.ay,s=s.a,o=0;o<q;++o){n=r[o]
m=n.a
l=n.b
if(!(m>=0&&m<p.length))return A.b(p,m)
n=p[m]
if(!(l>=0&&l<n.length))return A.b(n,l)
n[l].a=s.gG()}k=h.bk(0)
j=k.a
i=k.b
if(j>0){switch(j){case 1:s=h.cx
r=i?800:100
h.cx=s+r*h.CW
break
case 2:s=h.cx
r=i?1200:300
h.cx=s+r*h.CW
break
case 3:s=h.cx
r=i?1800:500
h.cx=s+r*h.CW
break
case 4:s=h.cx
r=i?2000:800
h.cx=s+r*h.CW
break}s=h.cx
h.c.$1(s)
h.r.$1(j)
if(i)h.w.$0()
if((h.ch+=j)>10){h.ch=0
s=++h.CW
if(--h.db<=0)h.db=1
h.d.$1(s)}s=h.ch
h.e.$1(s)}h.bq()},
bk(a){var s,r,q,p,o,n,m,l,k,j,i
for(s=this.ay,r=0,q=22;q>=0;--q){o=s.length
n=1
for(;;){if(!(n<11)){p=!0
break}if(!(q<o))return A.b(s,q)
m=s[q]
if(!(n<m.length))return A.b(m,n)
if(m[n].a==="black"){p=!1
break}++n}if(p){++r
for(l=q;l>0;l=k)for(k=l-1,j=1;j<11;++j){o=s.length
if(!(l<o))return A.b(s,l)
m=s[l]
if(!(j<m.length))return A.b(m,j)
m=m[j]
if(!(k<o))return A.b(s,k)
o=s[k]
if(!(j<o.length))return A.b(o,j)
m.a=o[j].a}for(j=1;j<11;++j){if(0>=s.length)return A.b(s,0)
o=s[0]
if(!(j<o.length))return A.b(o,j)
o[j].a="black"}++q}}for(o=s.length,i=0,q=3;q<23;++q)for(n=1;n<11;++n){if(!(q<o))return A.b(s,q)
m=s[q]
if(!(n<m.length))return A.b(m,n)
if(m[n].a!=="black")++i}this.f.$1(s)
return new A.c(r,i===0)},
aj(){if(++this.dy<=16)this.dx=0},
aT(){var s,r,q,p,o,n,m=this
if(!m.cy)return!1
s=A.m([],t.n)
for(r=m.as,q=r.gn(),p=q.length,o=0;o<q.length;q.length===p||(0,A.a6)(q),++o){n=q[o]
s.push(new A.c(n.a+1,n.b))}if(!m.P(s)){q=r.gn()
m.x.$1(q);++r.b
r=r.a.gG()
m.y.$2(s,r)
return!0}m.aL()
return!1},
aQ(a){var s,r,q,p,o,n=this,m=A.m([],t.n)
for(s=n.as,r=s.gn(),q=r.length,p=0;p<r.length;r.length===q||(0,A.a6)(r),++p){o=r[p]
m.push(new A.c(o.a,o.b+a))}if(!n.P(m)){n.aj()
r=s.gn()
n.x.$1(r)
s.c+=a
s=s.a.gG()
n.y.$2(m,s)
return!0}return!1},
b7(){var s,r,q=this
if(!q.cy)return!1
s=q.aT()
if(s){q.aj()
r=++q.cx
q.c.$1(r)}return s},
bN(){var s,r,q,p,o,n,m,l,k=this
if(!k.cy)return!1
for(s=k.as,r=t.n,q=0;;){p=A.m([],r)
for(o=s.gn(),n=o.length,m=0;m<o.length;o.length===n||(0,A.a6)(o),++m){l=o[m]
p.push(new A.c(l.a+1,l.b))}if(k.P(p))break;++s.b;++q}s=q>0
if(s){k.cx=k.cx+2*q
k.aj()
r=k.cx
k.c.$1(r)}k.aL()
return s},
aO(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.as,e=f.a,d=e.b,c=d.bX(a)
for(s=e.a.bZ(d,c),r=s.length,q=t.n,p=0;p<r;++p){o=s[p]
n=o.a
m=o.b
o=new A.aU(B.v,B.d)
l=new A.aV(o)
l.b=f.b
l.c=f.c
o.a=e.a
o.b=c
o=A.m([],q)
for(k=l.gn(),j=k.length,i=0;i<k.length;k.length===j||(0,A.a6)(k),++i){h=k[i]
o.push(new A.c(h.a+n,h.b+m))}if(!g.P(o)){s=f.gn()
g.x.$1(s)
f.b+=n
f.c+=m
e.b=c
s=f.gn()
r=e.gG()
g.y.$2(s,r)
if(++g.dy<=16)g.dx=0
return!0}}return!1}}
A.cB.prototype={
$1(a){return this.a.al()},
$S:4}
A.cA.prototype={
$1(a){var s=a.a,r=a.b,q=!0
if(s>=0)if(s<24)if(r>=0)if(r<12){q=this.a.ay
if(!(s>=0&&s<q.length))return A.b(q,s)
q=q[s]
if(!(r>=0&&r<q.length))return A.b(q,r)
q=q[r].a!=="black"}return q},
$S:23}
A.ax.prototype={
L(){return"GameState."+this.b}}
A.dl.prototype={
$1(a){var s,r,q,p,o
if($.bf.length!==0){for(s=-1;r=$.bf,q=r.length,s<q;++s){p=$.be+s
if(s===-1)o=" "
else{if(!(s>=0))return A.b(r,s)
o=r[s]}if(p>=0&&p<$.B().b)$.B().D(o,"white",p,2)}r=$.be+1
$.be=r
if(r>$.B().b)$.bf=""}},
$S:4}
A.dm.prototype={
$1(a){var s=this,r=$.B(),q=r.w
q===$&&A.I()
if(!q.gaZ())return
switch($.df.a){case 0:switch(a.keyCode){case 13:r.C(0)
A.iu()
s.a.b9()
$.df=B.af
break}break
case 1:switch(a.keyCode){case 37:r=s.a
if(r.cy)r.aQ(-1)
break
case 39:r=s.a
if(r.cy)r.aQ(1)
break
case 40:s.a.b7()
break
case 67:s.a.bN()
break
case 90:s.a.aO(B.fb)
break
case 88:r=s.a
if(r.cy)r.aO(B.fa)
break}break
case 2:switch(a.keyCode){case 13:A.eL()
$.df=B.S
break}break}},
$S:7}
A.aU.prototype={
gG(){switch(this.a.a){case 0:var s="turquoise"
break
case 1:s="blue"
break
case 2:s="orange"
break
case 3:s="yellow"
break
case 4:s="limegreen"
break
case 5:s="purple"
break
case 6:s="red"
break
default:s=null}return s}}
A.aV.prototype={
gn(){var s,r,q=A.m([],t.n),p=this.a
p=B.eZ.E(0,p.a).E(0,p.b)
p.toString
s=0
for(;s<4;++s){r=p[s]
q.push(new A.c(this.b+r.a,this.c+r.b))}return q}}
A.E.prototype={
L(){return"TetronimoState."+this.b},
bX(a){var s
switch(a.a){case 0:s=B.x[B.a.j(B.m.b_(B.x,this)+1,4)]
break
case 1:s=B.x[B.a.j(B.m.b_(B.x,this)-1,4)]
break
default:s=null}return s}}
A.w.prototype={
L(){return"TetronimoType."+this.b},
bZ(a,b){var s,r=this
A:{if(B.K===r||B.M===r||B.L===r||B.N===r||B.O===r){s=B.f_.E(0,new A.c(a,b))
s.toString
break A}if(B.J===r){s=B.f1.E(0,new A.c(a,b))
s.toString
break A}if(B.v===r){s=B.f0.E(0,new A.c(a,b))
s.toString
break A}s=null}return s}}
A.cC.prototype={
$2(a,b){return $.f3().bQ()>0.5?1:-1},
$S:24};(function aliases(){var s=J.P.prototype
s.ba=s.h})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers._instance_0u
s(J,"hs","fm",25)
r(A,"hV","fC",5)
r(A,"hW","fD",5)
r(A,"hX","fE",5)
q(A,"eC","hO",0)
r(A,"eF","fG",26)
var o
p(o=A.bM.prototype,"gap","X",0)
p(o,"gam","W",0)
q(A,"iB","im",0)
q(A,"iF","ir",0)
r(A,"iG","is",3)
r(A,"iC","io",3)
r(A,"iE","iq",3)
r(A,"iH","it",27)
r(A,"iD","ip",3)
q(A,"iA","il",0)
r(A,"iw","hY",8)
r(A,"ix","hZ",8)
s(A,"iy","i3",9)
s(A,"iz","i4",9)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.h,null)
q(A.h,[A.dA,J.bt,A.aR,J.bl,A.j,A.ci,A.K,A.ac,A.br,A.az,A.aw,A.ak,A.bp,A.cE,A.cb,A.av,A.b4,A.V,A.aJ,A.c8,A.D,A.bZ,A.c2,A.b5,A.bT,A.H,A.bW,A.ah,A.v,A.bV,A.c0,A.cH,A.aS,A.d3,A.aj,A.l,A.c3,A.bq,A.cP,A.bH,A.aT,A.cR,A.u,A.c1,A.bP,A.d1,A.U,A.ab,A.ad,A.ag,A.bM,A.cl,A.dw,A.bY,A.Y,A.cz,A.aU,A.aV])
q(J.bt,[J.bv,J.aB,J.aD,J.aC,J.aE,J.W,J.X])
q(J.aD,[J.P,J.k,A.ae,A.aM])
q(J.P,[J.bI,J.Z,J.O])
r(J.bu,A.aR)
r(J.c7,J.k)
q(J.W,[J.aA,J.bw])
q(A.j,[A.aH,A.L,A.bx,A.bR,A.bL,A.bX,A.bm,A.G,A.aW,A.bQ,A.bO,A.bo])
q(A.K,[A.at,A.ay])
q(A.at,[A.aI,A.au])
r(A.as,A.ay)
r(A.c_,A.ak)
r(A.c,A.c_)
r(A.r,A.bp)
r(A.aO,A.L)
q(A.V,[A.c4,A.c5,A.ck,A.dh,A.dj,A.cM,A.cL,A.d9,A.d_,A.cK,A.cJ,A.cy,A.cx,A.co,A.cp,A.cq,A.cr,A.cs,A.ct,A.cu,A.cv,A.cQ,A.cB,A.cA,A.dl,A.dm])
q(A.ck,[A.cj,A.ar])
r(A.aG,A.aJ)
r(A.aF,A.aG)
q(A.c5,[A.di,A.da,A.dc,A.d0,A.c9,A.cd,A.cC])
q(A.aM,[A.by,A.af])
q(A.af,[A.aZ,A.b0])
r(A.b_,A.aZ)
r(A.aK,A.b_)
r(A.b1,A.b0)
r(A.aL,A.b1)
q(A.aK,[A.bz,A.bA])
q(A.aL,[A.bB,A.bC,A.bD,A.bE,A.bF,A.aN,A.bG])
r(A.b6,A.bX)
q(A.c4,[A.cN,A.cO,A.d5,A.d4,A.cS,A.cW,A.cV,A.cU,A.cT,A.cZ,A.cY,A.cX,A.cI,A.db,A.ce,A.cf,A.cg,A.ch,A.cw,A.cm,A.cn])
r(A.bU,A.bW)
r(A.b3,A.aS)
r(A.aY,A.b3)
q(A.G,[A.aQ,A.bs])
r(A.aX,A.aI)
q(A.cP,[A.ca,A.bN,A.bK,A.ax,A.E,A.w])
s(A.aZ,A.l)
s(A.b_,A.aw)
s(A.b0,A.l)
s(A.b1,A.aw)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{a:"int",t:"double",eJ:"num",y:"String",dd:"bool",u:"Null",d:"List",h:"Object",fq:"Map",i:"JSObject"},mangledNames:{},types:["~()","u()","u(i)","~(a)","~(cD)","~(~())","u(@)","~(i)","~(d<+(a,a)>)","~(d<+(a,a)>,y)","@(@)","@(@,y)","@(y)","u(~())","~(@)","u(@,Q)","~(a,@)","u(h,Q)","~(h?,h?)","a(a,a)","ad(i)","ab(i)","y()","dd(+(a,a))","a(w,w)","a(@,@)","a(a)","~(d<d<Y>>)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.c&&a.b(c.a)&&b.b(c.b)}}
A.fY(v.typeUniverse,JSON.parse('{"bI":"P","Z":"P","O":"P","iP":"ae","bv":{"f":[]},"aB":{"f":[]},"aD":{"i":[]},"P":{"i":[]},"k":{"d":["1"],"i":[]},"bu":{"aR":[]},"c7":{"k":["1"],"d":["1"],"i":[]},"W":{"t":[]},"aA":{"t":[],"a":[],"f":[]},"bw":{"t":[],"f":[]},"X":{"y":[],"f":[]},"aH":{"j":[]},"at":{"K":["1"]},"aI":{"K":["1"]},"au":{"K":["1"]},"ay":{"K":["+(a,1)"]},"as":{"ay":["1"],"K":["+(a,1)"]},"aO":{"L":[],"j":[]},"bx":{"j":[]},"bR":{"j":[]},"b4":{"Q":[]},"bL":{"j":[]},"aG":{"aJ":["1","2"]},"aF":{"aG":["1","2"],"aJ":["1","2"]},"ae":{"i":[],"f":[]},"aM":{"i":[]},"by":{"i":[],"f":[]},"af":{"x":["1"],"i":[]},"aK":{"l":["t"],"d":["t"],"x":["t"],"i":[]},"aL":{"l":["a"],"d":["a"],"x":["a"],"i":[]},"bz":{"l":["t"],"d":["t"],"x":["t"],"i":[],"f":[],"l.E":"t"},"bA":{"l":["t"],"d":["t"],"x":["t"],"i":[],"f":[],"l.E":"t"},"bB":{"l":["a"],"d":["a"],"x":["a"],"i":[],"f":[],"l.E":"a"},"bC":{"l":["a"],"d":["a"],"x":["a"],"i":[],"f":[],"l.E":"a"},"bD":{"l":["a"],"d":["a"],"x":["a"],"i":[],"f":[],"l.E":"a"},"bE":{"l":["a"],"d":["a"],"x":["a"],"i":[],"f":[],"l.E":"a"},"bF":{"cG":[],"l":["a"],"d":["a"],"x":["a"],"i":[],"f":[],"l.E":"a"},"aN":{"l":["a"],"d":["a"],"x":["a"],"i":[],"f":[],"l.E":"a"},"bG":{"l":["a"],"d":["a"],"x":["a"],"i":[],"f":[],"l.E":"a"},"bX":{"j":[]},"b6":{"L":[],"j":[]},"b5":{"cD":[]},"H":{"j":[]},"v":{"aa":["1"]},"aY":{"aS":["1"]},"b3":{"aS":["1"]},"bm":{"j":[]},"L":{"j":[]},"G":{"j":[]},"aQ":{"j":[]},"bs":{"j":[]},"aW":{"j":[]},"bQ":{"j":[]},"bO":{"j":[]},"bo":{"j":[]},"bH":{"j":[]},"aT":{"j":[]},"aX":{"aI":["1"],"K":["1"]},"c1":{"Q":[]},"fk":{"d":["a"]},"fA":{"d":["a"]},"fz":{"d":["a"]},"fi":{"d":["a"]},"fy":{"d":["a"]},"fj":{"d":["a"]},"cG":{"d":["a"]},"ff":{"d":["t"]},"fg":{"d":["t"]}}'))
A.fX(v.typeUniverse,JSON.parse('{"at":1,"br":1,"az":1,"aw":1,"bp":2,"af":1,"bW":1,"c0":1,"b3":1,"c3":1,"bY":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.bh
return{A:s("U"),Q:s("j"),Y:s("iO"),G:s("r<+(E,E),d<+(a,a)>>"),k:s("r<E,d<+(a,a)>>"),U:s("k<U>"),J:s("k<d<U>>"),d:s("k<d<Y>>"),f:s("k<h>"),n:s("k<+(a,a)>"),h:s("k<Y>"),s:s("k<y>"),Z:s("k<w>"),w:s("k<cG>"),b:s("k<@>"),t:s("k<a>"),T:s("aB"),m:s("i"),g:s("O"),D:s("x<@>"),V:s("ab"),j:s("d<@>"),q:s("ad"),P:s("u"),K:s("h"),L:s("iQ"),F:s("+()"),l:s("Q"),N:s("y"),p:s("cD"),R:s("f"),_:s("L"),B:s("Z"),c:s("v<@>"),y:s("dd"),i:s("t"),z:s("@"),v:s("@(h)"),C:s("@(h,Q)"),S:s("a"),O:s("aa<u>?"),E:s("i?"),X:s("h?"),x:s("y?"),u:s("dd?"),I:s("t?"),M:s("a?"),W:s("eJ?"),o:s("eJ"),H:s("~")}})();(function constants(){var s=hunkHelpers.makeConstList
B.ah=J.bt.prototype
B.m=J.k.prototype
B.a=J.aA.prototype
B.ai=J.W.prototype
B.t=J.X.prototype
B.aj=J.O.prototype
B.ak=J.aD.prototype
B.a_=J.bI.prototype
B.P=J.Z.prototype
B.a5=new A.br()
B.Q=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.a6=function() {
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
B.ab=function(getTagFallback) {
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
B.a7=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.aa=function(hooks) {
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
B.a9=function(hooks) {
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
B.a8=function(hooks) {
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
B.R=function(hooks) { return hooks; }

B.ac=new A.bH()
B.q=new A.ci()
B.r=new A.cH()
B.ad=new A.d1()
B.ae=new A.c1()
B.S=new A.ax(0,"titleScreen")
B.af=new A.ax(1,"game")
B.ag=new A.ax(2,"gameOver")
B.d=new A.E(0,"spawned")
B.j=new A.E(1,"right")
B.k=new A.E(2,"inverted")
B.l=new A.E(3,"left")
B.x=s([B.d,B.j,B.k,B.l],A.bh("k<E>"))
B.J=new A.w(0,"I")
B.K=new A.w(1,"J")
B.L=new A.w(2,"L")
B.v=new A.w(3,"O")
B.M=new A.w(4,"S")
B.N=new A.w(5,"T")
B.O=new A.w(6,"Z")
B.da=s([B.J,B.K,B.L,B.v,B.M,B.N,B.O],t.Z)
B.e7=s([126,129,165,129,189,153,129,126],t.t)
B.aN=s([126,255,219,255,195,231,255,126],t.t)
B.eH=s([108,254,254,254,124,56,16,0],t.t)
B.cX=s([16,56,124,254,124,56,16,0],t.t)
B.bL=s([56,124,56,254,254,124,56,124],t.t)
B.bY=s([16,16,56,124,254,124,56,124],t.t)
B.bc=s([0,0,24,60,60,24,0,0],t.t)
B.bf=s([255,255,231,195,195,231,255,255],t.t)
B.bs=s([0,60,102,66,66,102,60,0],t.t)
B.dS=s([255,195,153,189,189,153,195,255],t.t)
B.eG=s([15,7,15,125,204,204,204,120],t.t)
B.eF=s([60,102,102,102,60,24,126,24],t.t)
B.dP=s([63,51,63,48,48,112,240,224],t.t)
B.av=s([127,99,127,99,99,103,230,192],t.t)
B.aA=s([153,90,60,231,231,60,90,153],t.t)
B.b8=s([128,224,248,254,248,224,128,0],t.t)
B.cq=s([2,14,62,254,62,14,2,0],t.t)
B.db=s([24,60,126,24,24,126,60,24],t.t)
B.d6=s([102,102,102,102,102,0,102,0],t.t)
B.dj=s([127,219,219,123,27,27,27,0],t.t)
B.dk=s([62,99,56,108,108,56,204,120],t.t)
B.cE=s([0,0,0,0,126,126,126,0],t.t)
B.cH=s([24,60,126,24,126,60,24,255],t.t)
B.aq=s([24,60,126,24,24,24,24,0],t.t)
B.ee=s([24,24,24,24,126,60,24,0],t.t)
B.e5=s([0,24,12,254,12,24,0,0],t.t)
B.b5=s([0,48,96,254,96,48,0,0],t.t)
B.cM=s([0,0,192,192,192,254,0,0],t.t)
B.ch=s([0,36,102,255,102,36,0,0],t.t)
B.aL=s([0,24,60,126,255,255,0,0],t.t)
B.cI=s([0,255,255,126,60,24,0,0],t.t)
B.bF=s([0,0,0,0,0,0,0,0],t.t)
B.cr=s([48,120,120,48,48,0,48,0],t.t)
B.ay=s([108,108,108,0,0,0,0,0],t.t)
B.aZ=s([108,108,254,108,254,108,108,0],t.t)
B.cR=s([48,124,192,120,12,248,48,0],t.t)
B.ap=s([0,198,204,24,48,102,198,0],t.t)
B.dA=s([56,108,56,118,220,204,118,0],t.t)
B.aY=s([96,96,192,0,0,0,0,0],t.t)
B.au=s([24,48,96,96,96,48,24,0],t.t)
B.cl=s([96,48,24,24,24,48,96,0],t.t)
B.dp=s([0,102,60,255,60,102,0,0],t.t)
B.eP=s([0,48,48,252,48,48,0,0],t.t)
B.cT=s([0,0,0,0,0,48,48,96],t.t)
B.cf=s([0,0,0,252,0,0,0,0],t.t)
B.d8=s([0,0,0,0,0,48,48,0],t.t)
B.aG=s([6,12,24,48,96,192,128,0],t.t)
B.bO=s([124,198,206,222,246,230,124,0],t.t)
B.dc=s([48,112,48,48,48,48,252,0],t.t)
B.cO=s([120,204,12,56,96,204,252,0],t.t)
B.eJ=s([120,204,12,56,12,204,120,0],t.t)
B.cn=s([28,60,108,204,254,12,30,0],t.t)
B.e6=s([252,192,248,12,12,204,120,0],t.t)
B.er=s([56,96,192,248,204,204,120,0],t.t)
B.cQ=s([252,204,12,24,48,48,48,0],t.t)
B.ds=s([120,204,204,120,204,204,120,0],t.t)
B.bV=s([120,204,204,124,12,24,112,0],t.t)
B.e_=s([0,48,48,0,0,48,48,0],t.t)
B.bw=s([0,48,48,0,0,48,48,96],t.t)
B.cm=s([24,48,96,192,96,48,24,0],t.t)
B.c7=s([0,0,252,0,0,252,0,0],t.t)
B.be=s([96,48,24,12,24,48,96,0],t.t)
B.b3=s([120,204,12,24,48,0,48,0],t.t)
B.em=s([124,198,222,222,222,192,120,0],t.t)
B.d2=s([48,120,204,204,252,204,204,0],t.t)
B.bp=s([252,102,102,124,102,102,252,0],t.t)
B.aP=s([60,102,192,192,192,102,60,0],t.t)
B.aH=s([248,108,102,102,102,108,248,0],t.t)
B.aV=s([254,98,104,120,104,98,254,0],t.t)
B.dg=s([254,98,104,120,104,96,240,0],t.t)
B.b1=s([60,102,192,192,206,102,62,0],t.t)
B.b4=s([204,204,204,252,204,204,204,0],t.t)
B.dK=s([120,48,48,48,48,48,120,0],t.t)
B.cC=s([30,12,12,12,204,204,120,0],t.t)
B.cu=s([230,102,108,120,108,102,230,0],t.t)
B.ct=s([240,96,96,96,98,102,254,0],t.t)
B.bq=s([198,238,254,254,214,198,198,0],t.t)
B.ax=s([198,230,246,222,206,198,198,0],t.t)
B.dU=s([56,108,198,198,198,108,56,0],t.t)
B.c1=s([252,102,102,124,96,96,240,0],t.t)
B.dE=s([120,204,204,204,220,120,28,0],t.t)
B.ao=s([252,102,102,124,108,102,230,0],t.t)
B.aS=s([120,204,224,112,28,204,120,0],t.t)
B.eA=s([252,180,48,48,48,48,120,0],t.t)
B.bn=s([204,204,204,204,204,204,252,0],t.t)
B.aD=s([204,204,204,204,204,120,48,0],t.t)
B.dN=s([198,198,198,214,254,238,198,0],t.t)
B.dH=s([198,198,108,56,56,108,198,0],t.t)
B.aF=s([204,204,204,120,48,48,120,0],t.t)
B.as=s([254,198,140,24,50,102,254,0],t.t)
B.ci=s([120,96,96,96,96,96,120,0],t.t)
B.dx=s([192,96,48,24,12,6,2,0],t.t)
B.ck=s([120,24,24,24,24,24,120,0],t.t)
B.eq=s([16,56,108,198,0,0,0,0],t.t)
B.an=s([0,0,0,0,0,0,0,255],t.t)
B.bo=s([48,48,24,0,0,0,0,0],t.t)
B.ef=s([0,0,120,12,124,204,118,0],t.t)
B.d5=s([224,96,96,124,102,102,220,0],t.t)
B.dG=s([0,0,120,204,192,204,120,0],t.t)
B.bM=s([28,12,12,124,204,204,118,0],t.t)
B.et=s([0,0,120,204,252,192,120,0],t.t)
B.bt=s([56,108,96,240,96,96,240,0],t.t)
B.dD=s([0,0,118,204,204,124,12,248],t.t)
B.bd=s([224,96,108,118,102,102,230,0],t.t)
B.dq=s([48,0,112,48,48,48,120,0],t.t)
B.cx=s([12,0,12,12,12,204,204,120],t.t)
B.bT=s([224,96,102,108,120,108,230,0],t.t)
B.cz=s([112,48,48,48,48,48,120,0],t.t)
B.cd=s([0,0,204,254,254,214,198,0],t.t)
B.cA=s([0,0,248,204,204,204,204,0],t.t)
B.bX=s([0,0,120,204,204,204,120,0],t.t)
B.ex=s([0,0,220,102,102,124,96,240],t.t)
B.eu=s([0,0,118,204,204,124,12,30],t.t)
B.c8=s([0,0,220,118,102,96,240,0],t.t)
B.dX=s([0,0,124,192,120,12,248,0],t.t)
B.dQ=s([16,48,124,48,48,52,24,0],t.t)
B.d_=s([0,0,204,204,204,204,118,0],t.t)
B.bK=s([0,0,204,204,204,120,48,0],t.t)
B.c0=s([0,0,198,214,254,254,108,0],t.t)
B.cv=s([0,0,198,108,56,108,198,0],t.t)
B.eD=s([0,0,204,204,204,124,12,248],t.t)
B.ed=s([0,0,252,152,48,100,252,0],t.t)
B.bQ=s([28,48,48,224,48,48,28,0],t.t)
B.dW=s([24,24,24,0,24,24,24,0],t.t)
B.bh=s([224,48,48,28,48,48,224,0],t.t)
B.eO=s([118,220,0,0,0,0,0,0],t.t)
B.bI=s([0,16,56,108,198,198,254,0],t.t)
B.b7=s([120,204,192,204,120,24,12,120],t.t)
B.ea=s([0,204,0,204,204,204,126,0],t.t)
B.eC=s([28,0,120,204,252,192,120,0],t.t)
B.cS=s([126,195,60,6,62,102,63,0],t.t)
B.aU=s([204,0,120,12,124,204,126,0],t.t)
B.bN=s([224,0,120,12,124,204,126,0],t.t)
B.aK=s([48,48,120,12,124,204,126,0],t.t)
B.c4=s([0,0,120,192,192,120,12,56],t.t)
B.el=s([126,195,60,102,126,96,60,0],t.t)
B.br=s([204,0,120,204,252,192,120,0],t.t)
B.dY=s([224,0,120,204,252,192,120,0],t.t)
B.ec=s([204,0,112,48,48,48,120,0],t.t)
B.dO=s([124,198,56,24,24,24,60,0],t.t)
B.bE=s([224,0,112,48,48,48,120,0],t.t)
B.eI=s([198,56,108,198,254,198,198,0],t.t)
B.dV=s([48,48,0,120,204,252,204,0],t.t)
B.cs=s([28,0,252,96,120,96,252,0],t.t)
B.eB=s([0,0,127,12,127,204,127,0],t.t)
B.bx=s([62,108,204,254,204,204,206,0],t.t)
B.ev=s([120,204,0,120,204,204,120,0],t.t)
B.aQ=s([0,204,0,120,204,204,120,0],t.t)
B.eK=s([0,224,0,120,204,204,120,0],t.t)
B.bu=s([120,204,0,204,204,204,126,0],t.t)
B.dR=s([0,224,0,204,204,204,126,0],t.t)
B.bb=s([0,204,0,204,204,124,12,248],t.t)
B.aW=s([195,24,60,102,102,60,24,0],t.t)
B.e3=s([204,0,204,204,204,204,120,0],t.t)
B.az=s([24,24,126,192,192,126,24,24],t.t)
B.bl=s([56,108,100,240,96,230,252,0],t.t)
B.bG=s([204,204,120,252,48,252,48,48],t.t)
B.eg=s([248,204,204,250,198,207,198,199],t.t)
B.cD=s([14,27,24,60,24,24,216,112],t.t)
B.bg=s([28,0,120,12,124,204,126,0],t.t)
B.d4=s([56,0,112,48,48,48,120,0],t.t)
B.bj=s([0,28,0,120,204,204,120,0],t.t)
B.dt=s([0,28,0,204,204,204,126,0],t.t)
B.bB=s([0,248,0,248,204,204,204,0],t.t)
B.dM=s([252,0,204,236,252,220,204,0],t.t)
B.aR=s([60,108,108,62,0,126,0,0],t.t)
B.d1=s([56,108,108,56,0,124,0,0],t.t)
B.e4=s([48,0,48,96,192,204,120,0],t.t)
B.bD=s([0,0,0,252,192,192,0,0],t.t)
B.bi=s([0,0,0,252,12,12,0,0],t.t)
B.dZ=s([195,198,204,222,51,102,204,15],t.t)
B.b9=s([195,198,204,219,55,111,207,3],t.t)
B.cG=s([24,24,0,24,24,24,24,0],t.t)
B.cF=s([0,51,102,204,102,51,0,0],t.t)
B.bS=s([0,204,102,51,102,204,0,0],t.t)
B.dw=s([34,136,34,136,34,136,34,136],t.t)
B.ew=s([85,170,85,170,85,170,85,170],t.t)
B.cy=s([219,119,219,238,219,119,219,238],t.t)
B.bH=s([24,24,24,24,24,24,24,24],t.t)
B.bC=s([24,24,24,24,248,24,24,24],t.t)
B.cN=s([24,24,248,24,248,24,24,24],t.t)
B.eN=s([54,54,54,54,246,54,54,54],t.t)
B.de=s([0,0,0,0,254,54,54,54],t.t)
B.by=s([0,0,248,24,248,24,24,24],t.t)
B.aO=s([54,54,246,6,246,54,54,54],t.t)
B.dl=s([54,54,54,54,54,54,54,54],t.t)
B.d0=s([0,0,254,6,246,54,54,54],t.t)
B.dr=s([54,54,246,6,254,0,0,0],t.t)
B.b2=s([54,54,54,54,254,0,0,0],t.t)
B.aE=s([24,24,248,24,248,0,0,0],t.t)
B.aJ=s([0,0,0,0,248,24,24,24],t.t)
B.aB=s([24,24,24,24,31,0,0,0],t.t)
B.cL=s([24,24,24,24,255,0,0,0],t.t)
B.c6=s([0,0,0,0,255,24,24,24],t.t)
B.e2=s([24,24,24,24,31,24,24,24],t.t)
B.cJ=s([0,0,0,0,255,0,0,0],t.t)
B.dn=s([24,24,24,24,255,24,24,24],t.t)
B.dC=s([24,24,31,24,31,24,24,24],t.t)
B.bU=s([54,54,54,54,55,54,54,54],t.t)
B.es=s([54,54,55,48,63,0,0,0],t.t)
B.ek=s([0,0,63,48,55,54,54,54],t.t)
B.cw=s([54,54,247,0,255,0,0,0],t.t)
B.cj=s([0,0,255,0,247,54,54,54],t.t)
B.bA=s([54,54,55,48,55,54,54,54],t.t)
B.bz=s([0,0,255,0,255,0,0,0],t.t)
B.eE=s([54,54,247,0,247,54,54,54],t.t)
B.dI=s([24,24,255,0,255,0,0,0],t.t)
B.al=s([54,54,54,54,255,0,0,0],t.t)
B.ey=s([0,0,255,0,255,24,24,24],t.t)
B.cV=s([0,0,0,0,255,54,54,54],t.t)
B.df=s([54,54,54,54,63,0,0,0],t.t)
B.cc=s([24,24,31,24,31,0,0,0],t.t)
B.d7=s([0,0,31,24,31,24,24,24],t.t)
B.dF=s([0,0,0,0,63,54,54,54],t.t)
B.dL=s([54,54,54,54,255,54,54,54],t.t)
B.cB=s([24,24,255,24,255,24,24,24],t.t)
B.eh=s([24,24,24,24,248,0,0,0],t.t)
B.bP=s([0,0,0,0,31,24,24,24],t.t)
B.cW=s([255,255,255,255,255,255,255,255],t.t)
B.cZ=s([0,0,0,0,255,255,255,255],t.t)
B.c_=s([240,240,240,240,240,240,240,240],t.t)
B.dh=s([15,15,15,15,15,15,15,15],t.t)
B.e1=s([255,255,255,255,0,0,0,0],t.t)
B.eM=s([0,0,118,220,200,220,118,0],t.t)
B.en=s([0,120,204,248,204,248,192,192],t.t)
B.b_=s([0,252,204,192,192,192,192,0],t.t)
B.cY=s([0,254,108,108,108,108,108,0],t.t)
B.ej=s([252,204,96,48,96,204,252,0],t.t)
B.c2=s([0,0,126,216,216,216,112,0],t.t)
B.ca=s([0,102,102,102,102,124,96,192],t.t)
B.dy=s([0,118,220,24,24,24,24,0],t.t)
B.aT=s([252,48,120,204,204,120,48,252],t.t)
B.bm=s([56,108,198,254,198,108,56,0],t.t)
B.aX=s([56,108,198,198,108,108,238,0],t.t)
B.am=s([28,48,24,124,204,204,120,0],t.t)
B.ez=s([0,0,126,219,219,126,0,0],t.t)
B.c5=s([6,12,126,219,219,126,96,192],t.t)
B.aM=s([56,96,192,248,192,96,56,0],t.t)
B.d9=s([120,204,204,204,204,204,204,0],t.t)
B.dJ=s([0,252,0,252,0,252,0,0],t.t)
B.aI=s([48,48,252,48,48,0,252,0],t.t)
B.bR=s([96,48,24,48,96,0,252,0],t.t)
B.dT=s([24,48,96,48,24,0,252,0],t.t)
B.bZ=s([14,27,27,24,24,24,24,24],t.t)
B.e9=s([24,24,24,24,24,216,216,112],t.t)
B.d3=s([48,48,0,252,0,48,48,0],t.t)
B.ar=s([0,118,220,0,118,220,0,0],t.t)
B.du=s([56,108,108,56,0,0,0,0],t.t)
B.at=s([0,0,0,24,24,0,0,0],t.t)
B.eo=s([0,0,0,0,24,0,0,0],t.t)
B.aw=s([15,12,12,12,236,108,60,28],t.t)
B.cK=s([120,108,108,108,108,0,0,0],t.t)
B.b6=s([112,24,48,96,120,0,0,0],t.t)
B.e0=s([0,0,60,60,60,60,0,0],t.t)
B.eR=new A.r(["\u263a",B.e7,"\u263b",B.aN,"\u2665",B.eH,"\u2666",B.cX,"\u2663",B.bL,"\u2660",B.bY,"\u2022",B.bc,"\u25d8",B.bf,"\u25cb",B.bs,"\u25d9",B.dS,"\u2642",B.eG,"\u2640",B.eF,"\u266a",B.dP,"\u266b",B.av,"\u263c",B.aA,"\u25ba",B.b8,"\u25c4",B.cq,"\u2195",B.db,"\u203c",B.d6,"\xb6",B.dj,"\xa7",B.dk,"\u25ac",B.cE,"\u21a8",B.cH,"\u2191",B.aq,"\u2193",B.ee,"\u2192",B.e5,"\u2190",B.b5,"\u221f",B.cM,"\u2194",B.ch,"\u25b2",B.aL,"\u25bc",B.cI," ",B.bF,"!",B.cr,'"',B.ay,"#",B.aZ,"$",B.cR,"%",B.ap,"&",B.dA,"'",B.aY,"(",B.au,")",B.cl,"*",B.dp,"+",B.eP,",",B.cT,"-",B.cf,".",B.d8,"/",B.aG,"0",B.bO,"1",B.dc,"2",B.cO,"3",B.eJ,"4",B.cn,"5",B.e6,"6",B.er,"7",B.cQ,"8",B.ds,"9",B.bV,":",B.e_,";",B.bw,"<",B.cm,"=",B.c7,">",B.be,"?",B.b3,"@",B.em,"A",B.d2,"B",B.bp,"C",B.aP,"D",B.aH,"E",B.aV,"F",B.dg,"G",B.b1,"H",B.b4,"I",B.dK,"J",B.cC,"K",B.cu,"L",B.ct,"M",B.bq,"N",B.ax,"O",B.dU,"P",B.c1,"Q",B.dE,"R",B.ao,"S",B.aS,"T",B.eA,"U",B.bn,"V",B.aD,"W",B.dN,"X",B.dH,"Y",B.aF,"Z",B.as,"[",B.ci,"\\",B.dx,"]",B.ck,"^",B.eq,"_",B.an,"`",B.bo,"a",B.ef,"b",B.d5,"c",B.dG,"d",B.bM,"e",B.et,"f",B.bt,"g",B.dD,"h",B.bd,"i",B.dq,"j",B.cx,"k",B.bT,"l",B.cz,"m",B.cd,"n",B.cA,"o",B.bX,"p",B.ex,"q",B.eu,"r",B.c8,"s",B.dX,"t",B.dQ,"u",B.d_,"v",B.bK,"w",B.c0,"x",B.cv,"y",B.eD,"z",B.ed,"{",B.bQ,"|",B.dW,"}",B.bh,"~",B.eO,"\u2302",B.bI,"\xc7",B.b7,"\xfc",B.ea,"\xe9",B.eC,"\xe2",B.cS,"\xe4",B.aU,"\xe0",B.bN,"\xe5",B.aK,"\xe7",B.c4,"\xea",B.el,"\xeb",B.br,"\xe8",B.dY,"\xef",B.ec,"\xee",B.dO,"\xec",B.bE,"\xc4",B.eI,"\xc5",B.dV,"\xc9",B.cs,"\xe6",B.eB,"\xc6",B.bx,"\xf4",B.ev,"\xf6",B.aQ,"\xf2",B.eK,"\xfb",B.bu,"\xf9",B.dR,"\xff",B.bb,"\xd6",B.aW,"\xdc",B.e3,"\xa2",B.az,"\xa3",B.bl,"\xa5",B.bG,"\u20a7",B.eg,"\u0192",B.cD,"\xe1",B.bg,"\xed",B.d4,"\xf3",B.bj,"\xfa",B.dt,"\xf1",B.bB,"\xd1",B.dM,"\xaa",B.aR,"\xba",B.d1,"\xbf",B.e4,"\u2310",B.bD,"\xac",B.bi,"\xbd",B.dZ,"\xbc",B.b9,"\xa1",B.cG,"\xab",B.cF,"\xbb",B.bS,"\u2591",B.dw,"\u2592",B.ew,"\u2593",B.cy,"\u2502",B.bH,"\u2524",B.bC,"\u2561",B.cN,"\u2562",B.eN,"\u2556",B.de,"\u2555",B.by,"\u2563",B.aO,"\u2551",B.dl,"\u2557",B.d0,"\u255d",B.dr,"\u255c",B.b2,"\u255b",B.aE,"\u2510",B.aJ,"\u2514",B.aB,"\u2534",B.cL,"\u252c",B.c6,"\u251c",B.e2,"\u2500",B.cJ,"\u253c",B.dn,"\u255e",B.dC,"\u255f",B.bU,"\u255a",B.es,"\u2554",B.ek,"\u2569",B.cw,"\u2566",B.cj,"\u2560",B.bA,"\u2550",B.bz,"\u256c",B.eE,"\u2567",B.dI,"\u2568",B.al,"\u2564",B.ey,"\u2565",B.cV,"\u2559",B.df,"\u2558",B.cc,"\u2552",B.d7,"\u2553",B.dF,"\u256b",B.dL,"\u256a",B.cB,"\u2518",B.eh,"\u250c",B.bP,"\u2588",B.cW,"\u2584",B.cZ,"\u258c",B.c_,"\u2590",B.dh,"\u2580",B.e1,"\u03b1",B.eM,"\xdf",B.en,"\u0393",B.b_,"\u03c0",B.cY,"\u03a3",B.ej,"\u03c3",B.c2,"\xb5",B.ca,"\u03c4",B.dy,"\u03a6",B.aT,"\u0398",B.bm,"\u03a9",B.aX,"\u03b4",B.am,"\u221e",B.ez,"\u03c6",B.c5,"\u03b5",B.aM,"\u2229",B.d9,"\u2261",B.dJ,"\xb1",B.aI,"\u2265",B.bR,"\u2264",B.dT,"\u2320",B.bZ,"\u2321",B.e9,"\xf7",B.d3,"\u2248",B.ar,"\xb0",B.du,"\u2219",B.at,"\xb7",B.eo,"\u221a",B.aw,"\u207f",B.cK,"\xb2",B.b6,"\u25a0",B.e0],A.bh("r<y,d<a>>"))
B.i=new A.c(1,0)
B.b=new A.c(1,1)
B.f=new A.c(1,2)
B.f2=new A.c(1,3)
B.cp=s([B.i,B.b,B.f,B.f2],t.n)
B.o=new A.c(0,2)
B.u=new A.c(2,2)
B.f6=new A.c(3,2)
B.c3=s([B.o,B.f,B.u,B.f6],t.n)
B.p=new A.c(2,0)
B.h=new A.c(2,1)
B.f4=new A.c(2,3)
B.eb=s([B.p,B.h,B.u,B.f4],t.n)
B.c=new A.c(0,1)
B.f5=new A.c(3,1)
B.bJ=s([B.c,B.b,B.h,B.f5],t.n)
B.eW=new A.r([B.d,B.cp,B.j,B.c3,B.k,B.eb,B.l,B.bJ],t.k)
B.e=new A.c(0,0)
B.di=s([B.e,B.i,B.b,B.f],t.n)
B.dd=s([B.c,B.o,B.b,B.h],t.n)
B.aC=s([B.i,B.b,B.f,B.u],t.n)
B.ep=s([B.c,B.b,B.p,B.h],t.n)
B.eU=new A.r([B.d,B.di,B.j,B.dd,B.k,B.aC,B.l,B.ep],t.k)
B.bk=s([B.o,B.i,B.b,B.f],t.n)
B.e8=s([B.c,B.b,B.h,B.u],t.n)
B.dv=s([B.i,B.b,B.f,B.p],t.n)
B.dm=s([B.e,B.c,B.b,B.h],t.n)
B.eY=new A.r([B.d,B.bk,B.j,B.e8,B.k,B.dv,B.l,B.dm],t.k)
B.y=s([B.c,B.o,B.b,B.f],t.n)
B.eV=new A.r([B.d,B.y,B.j,B.y,B.k,B.y,B.l,B.y],t.k)
B.cb=s([B.c,B.o,B.i,B.b],t.n)
B.bv=s([B.c,B.b,B.f,B.u],t.n)
B.ba=s([B.b,B.f,B.p,B.h],t.n)
B.cg=s([B.e,B.i,B.b,B.h],t.n)
B.eX=new A.r([B.d,B.cb,B.j,B.bv,B.k,B.ba,B.l,B.cg],t.k)
B.b0=s([B.c,B.i,B.b,B.f],t.n)
B.eL=s([B.c,B.b,B.f,B.h],t.n)
B.ei=s([B.i,B.b,B.f,B.h],t.n)
B.ce=s([B.c,B.i,B.b,B.h],t.n)
B.eT=new A.r([B.d,B.b0,B.j,B.eL,B.k,B.ei,B.l,B.ce],t.k)
B.cU=s([B.e,B.c,B.b,B.f],t.n)
B.bW=s([B.o,B.b,B.f,B.h],t.n)
B.eQ=s([B.i,B.b,B.h,B.u],t.n)
B.dz=s([B.c,B.i,B.b,B.p],t.n)
B.eS=new A.r([B.d,B.cU,B.j,B.bW,B.k,B.eQ,B.l,B.dz],t.k)
B.eZ=new A.r([B.J,B.eW,B.K,B.eU,B.L,B.eY,B.v,B.eV,B.M,B.eX,B.N,B.eT,B.O,B.eS],A.bh("r<w,fq<E,d<+(a,a)>>>"))
B.B=new A.c(B.d,B.j)
B.D=new A.c(B.j,B.d)
B.E=new A.c(B.j,B.k)
B.F=new A.c(B.k,B.j)
B.G=new A.c(B.k,B.l)
B.I=new A.c(B.l,B.k)
B.H=new A.c(B.l,B.d)
B.C=new A.c(B.d,B.l)
B.w=new A.c(0,-1)
B.a0=new A.c(1,-1)
B.A=new A.c(2,-1)
B.cP=s([B.e,B.w,B.a0,B.p,B.A],t.n)
B.a2=new A.c(-2,0)
B.a3=new A.c(-2,1)
B.U=s([B.e,B.c,B.b,B.a2,B.a3],t.n)
B.f9=new A.c(-1,-1)
B.dB=s([B.e,B.w,B.f9,B.p,B.A],t.n)
B.f7=new A.c(-1,1)
B.V=s([B.e,B.c,B.f7,B.p,B.h],t.n)
B.a4=new A.c(-2,-1)
B.W=s([B.e,B.w,B.a0,B.a2,B.a4],t.n)
B.f_=new A.r([B.B,B.cP,B.D,B.U,B.E,B.U,B.F,B.dB,B.G,B.V,B.I,B.W,B.H,B.W,B.C,B.V],t.G)
B.n=s([B.e],t.n)
B.f0=new A.r([B.B,B.n,B.D,B.n,B.E,B.n,B.F,B.n,B.G,B.n,B.I,B.n,B.H,B.n,B.C,B.n],t.G)
B.z=new A.c(0,-2)
B.f3=new A.c(1,-2)
B.T=s([B.e,B.z,B.c,B.f3,B.a3],t.n)
B.f8=new A.c(-1,2)
B.Y=s([B.e,B.o,B.w,B.f8,B.A],t.n)
B.X=s([B.e,B.w,B.o,B.a4,B.f],t.n)
B.a1=new A.c(-1,-2)
B.co=s([B.e,B.c,B.z,B.b,B.a1],t.n)
B.c9=s([B.e,B.c,B.z,B.h,B.a1],t.n)
B.f1=new A.r([B.B,B.T,B.D,B.Y,B.E,B.X,B.F,B.co,B.G,B.Y,B.I,B.T,B.H,B.c9,B.C,B.X],t.G)
B.Z=new A.ca(0,"replace")
B.fa=new A.bK(0,"clockwise")
B.fb=new A.bK(1,"counterClockwise")
B.fc=new A.bN(0,"ready")
B.fd=new A.bN(2,"awaitingString")
B.fe=A.F("iK")
B.ff=A.F("iL")
B.fg=A.F("ff")
B.fh=A.F("fg")
B.fi=A.F("fi")
B.fj=A.F("fj")
B.fk=A.F("fk")
B.fl=A.F("h")
B.fm=A.F("fy")
B.fn=A.F("cG")
B.fo=A.F("fz")
B.fp=A.F("fA")})();(function staticFields(){$.d2=null
$.A=A.m([],t.f)
$.e9=null
$.e4=null
$.e3=null
$.eI=null
$.eB=null
$.eM=null
$.de=null
$.dk=null
$.dW=null
$.b2=A.m([],A.bh("k<d<h>?>"))
$.al=null
$.bc=null
$.bd=null
$.dQ=!1
$.o=B.r
$.df=B.S
$.be=0
$.bf=""})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"iN","eP",()=>A.dg("_$dart_dartClosure"))
s($,"iM","dq",()=>A.dg("_$dart_dartClosure_dartJSInterop"))
s($,"j7","f2",()=>A.m([new J.bu()],A.bh("k<aR>")))
s($,"iU","eS",()=>A.M(A.cF({
toString:function(){return"$receiver$"}})))
s($,"iV","eT",()=>A.M(A.cF({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"iW","eU",()=>A.M(A.cF(null)))
s($,"iX","eV",()=>A.M(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"j_","eY",()=>A.M(A.cF(void 0)))
s($,"j0","eZ",()=>A.M(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"iZ","eX",()=>A.M(A.ef(null)))
s($,"iY","eW",()=>A.M(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"j2","f0",()=>A.M(A.ef(void 0)))
s($,"j1","f_",()=>A.M(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"j3","e_",()=>A.fB())
s($,"j4","f1",()=>A.h0())
s($,"j6","dr",()=>A.dZ(B.fl))
s($,"iT","eR",()=>A.dC(8,0,t.S))
s($,"iS","eQ",()=>A.dC(8,255,t.S))
s($,"ja","B",()=>{var r=A.fw(35,"tetris",3,3,0,28)
r.X()
return r})
s($,"j9","f3",()=>B.ad)})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.ae,SharedArrayBuffer:A.ae,ArrayBufferView:A.aM,DataView:A.by,Float32Array:A.bz,Float64Array:A.bA,Int16Array:A.bB,Int32Array:A.bC,Int8Array:A.bD,Uint16Array:A.bE,Uint32Array:A.bF,Uint8ClampedArray:A.aN,CanvasPixelArray:A.aN,Uint8Array:A.bG})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.af.$nativeSuperclassTag="ArrayBufferView"
A.aZ.$nativeSuperclassTag="ArrayBufferView"
A.b_.$nativeSuperclassTag="ArrayBufferView"
A.aK.$nativeSuperclassTag="ArrayBufferView"
A.b0.$nativeSuperclassTag="ArrayBufferView"
A.b1.$nativeSuperclassTag="ArrayBufferView"
A.aL.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$5=function(a,b,c,d,e){return this(a,b,c,d,e)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$6=function(a,b,c,d,e,f){return this(a,b,c,d,e,f)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q){s[q].removeEventListener("load",onLoad,false)}a(b.target)}for(var r=0;r<s.length;++r){s[r].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var s=A.ij
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=tetris.js.map
