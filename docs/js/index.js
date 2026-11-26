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
if(a[b]!==s){A.iy(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.f(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.dW(b)
return new s(c,this)}:function(){if(s===null)s=A.dW(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.dW(a).prototype
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
e_(a,b,c,d){return{i:a,p:b,e:c,x:d}},
dX(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.dY==null){A.ir()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.c(A.ek("Return interceptor for "+A.n(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.d3
if(o==null)o=$.d3=A.di(n)
p=q[o]}if(p!=null)return p
p=A.iv(a)
if(p!=null)return p
if(typeof a=="function")return B.z
s=Object.getPrototypeOf(a)
if(s==null)return B.l
if(s===Object.prototype)return B.l
if(typeof q=="function"){o=$.d3
if(o==null)o=$.d3=A.di(n)
Object.defineProperty(q,o,{value:B.h,enumerable:false,writable:true,configurable:true})
return B.h}return B.h},
ec(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
fu(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.ec(r))break;++b}return b},
fv(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.b(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.ec(q))break}return b},
a2(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.au.prototype
return J.bq.prototype}if(typeof a=="string")return J.V.prototype
if(a==null)return J.av.prototype
if(typeof a=="boolean")return J.bp.prototype
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.L.prototype
if(typeof a=="symbol")return J.ay.prototype
if(typeof a=="bigint")return J.aw.prototype
return a}if(a instanceof A.d)return a
return J.dX(a)},
eN(a){if(typeof a=="string")return J.V.prototype
if(a==null)return a
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.L.prototype
if(typeof a=="symbol")return J.ay.prototype
if(typeof a=="bigint")return J.aw.prototype
return a}if(a instanceof A.d)return a
return J.dX(a)},
il(a){if(a==null)return a
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.L.prototype
if(typeof a=="symbol")return J.ay.prototype
if(typeof a=="bigint")return J.aw.prototype
return a}if(a instanceof A.d)return a
return J.dX(a)},
im(a){if(typeof a=="number")return J.a7.prototype
if(a==null)return a
if(!(a instanceof A.d))return J.Y.prototype
return a},
io(a){if(typeof a=="string")return J.V.prototype
if(a==null)return a
if(!(a instanceof A.d))return J.Y.prototype
return a},
ao(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.a2(a).v(a,b)},
F(a){return J.a2(a).gk(a)},
fb(a){return J.il(a).gt(a)},
e2(a){return J.eN(a).gm(a)},
fc(a){return J.a2(a).gl(a)},
e3(a){return J.im(a).bX(a)},
bd(a){return J.a2(a).h(a)},
fd(a){return J.io(a).b1(a)},
bn:function bn(){},
bp:function bp(){},
av:function av(){},
ax:function ax(){},
M:function M(){},
bD:function bD(){},
Y:function Y(){},
L:function L(){},
aw:function aw(){},
ay:function ay(){},
o:function o(a){this.$ti=a},
bo:function bo(){},
c7:function c7(a){this.$ti=a},
be:function be(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
a7:function a7(){},
au:function au(){},
bq:function bq(){},
V:function V(){}},A={dC:function dC(){},
fx(a){return new A.aA("Field '"+a+"' has not been initialized.")},
N(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
dK(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
dV(a,b,c){return a},
dZ(a){var s,r
for(s=$.x.length,r=0;r<s;++r)if(a===$.x[r])return!0
return!1},
fs(){return new A.X("No element")},
aA:function aA(a){this.a=a},
dv:function dv(){},
cj:function cj(){},
aq:function aq(){},
aB:function aB(){},
a9:function a9(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ar:function ar(a){this.$ti=a},
bk:function bk(){},
at:function at(){},
eV(a){var s=A.eU(a)
if(s!=null)return s
return"minified:"+a},
j_(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.E.b(a)},
n(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.bd(a)
return s},
ae(a){var s,r=$.ed
if(r==null)r=$.ed=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
bE(a){var s,r,q,p
if(a instanceof A.d)return A.w(A.bb(a),null)
s=J.a2(a)
if(s===B.x||s===B.A||t.A.b(a)){r=B.i(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.w(A.bb(a),null)},
ee(a){var s,r,q
if(a==null||typeof a=="number"||A.dQ(a))return J.bd(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.T)return a.h(0)
if(a instanceof A.ai)return a.aQ(!0)
s=$.f9()
for(r=0;r<1;++r){q=s[r].bY(a)
if(q!=null)return q}return"Instance of '"+A.bE(a)+"'"},
fB(a){var s=a.$thrownJsError
if(s==null)return null
return A.Q(s)},
fC(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.q(a,s)
a.$thrownJsError=s
s.stack=b.h(0)}},
b(a,b){if(a==null)J.e2(a)
throw A.c(A.ij(a,b))},
ij(a,b){var s,r="index",q=null
if(!A.eB(b))return new A.E(!0,b,r,q)
s=J.e2(a)
if(b<0||b>=s)return A.dA(b,s,a,q,r)
return new A.aI(q,q,!0,b,r,"Value not in range")},
dU(a){return new A.E(!0,a,null,null)},
c(a){return A.q(a,new Error())},
q(a,b){var s
if(a==null)a=new A.H()
b.dartException=a
s=A.iz
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
iz(){return J.bd(this.dartException)},
c1(a,b){throw A.q(a,b==null?new Error():b)},
bc(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.c1(A.hy(a,b,c),s)},
hy(a,b,c){var s,r,q,p,o,n,m,l,k
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
c0(a){throw A.c(A.a6(a))},
I(a){var s,r,q,p,o,n
a=A.ix(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.f([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.cG(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
cH(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
ej(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
dD(a,b){var s=b==null,r=s?null:b.method
return new A.br(a,r,s?null:b.receiver)},
a4(a){if(a==null)return new A.cb(a)
if(a instanceof A.as)return A.R(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.R(a,a.dartException)
return A.i7(a)},
R(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
i7(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.a.bE(r,16)&8191)===10)switch(q){case 438:return A.R(a,A.dD(A.n(s)+" (Error "+q+")",null))
case 445:case 5007:A.n(s)
return A.R(a,new A.aH())}}if(a instanceof TypeError){p=$.eZ()
o=$.f_()
n=$.f0()
m=$.f1()
l=$.f4()
k=$.f5()
j=$.f3()
$.f2()
i=$.f7()
h=$.f6()
g=p.u(s)
if(g!=null)return A.R(a,A.dD(s,g))
else{g=o.u(s)
if(g!=null){g.method="call"
return A.R(a,A.dD(s,g))}else if(n.u(s)!=null||m.u(s)!=null||l.u(s)!=null||k.u(s)!=null||j.u(s)!=null||m.u(s)!=null||i.u(s)!=null||h.u(s)!=null)return A.R(a,new A.aH())}return A.R(a,new A.bJ(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.aL()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.R(a,new A.E(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.aL()
return a},
Q(a){var s
if(a instanceof A.as)return a.b
if(a==null)return new A.b_(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.b_(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
e0(a){if(a==null)return J.F(a)
if(typeof a=="object")return A.ae(a)
return J.F(a)},
ig(a){if(typeof a=="number")return B.y.gk(a)
if(a instanceof A.bY)return A.ae(a)
if(a instanceof A.ai)return a.gk(a)
return A.e0(a)},
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
if(m==null)o[q]=b.X(q,p)
else m.b=p}else if(typeof q=="number"&&(q&0x3fffffff)===q){l=b.c
if(l==null){n=Object.create(null)
n["<non-identifier-key>"]=n
delete n["<non-identifier-key>"]
b.c=n
l=n}m=l[q]
if(m==null)l[q]=b.X(q,p)
else m.b=p}else{k=b.d
if(k==null){n=Object.create(null)
n["<non-identifier-key>"]=n
delete n["<non-identifier-key>"]
b.d=n
k=n}j=b.aq(q)
i=k[j]
if(i==null)k[j]=[b.X(q,p)]
else{r=b.ar(i,q)
if(r>=0)i[r].b=p
else i.push(b.X(q,p))}}}return b},
hH(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.c(new A.cS("Unsupported number of arguments for wrapped closure"))},
c_(a,b){var s=a.$identity
if(!!s)return s
s=A.ih(a,b)
a.$identity=s
return s},
ih(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.hH)},
fk(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.ck().constructor.prototype):Object.create(new A.ap(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.e9(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.fg(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.e9(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
fg(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.c("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.fe)}throw A.c("Error in functionType of tearoff")},
fh(a,b,c,d){var s=A.e8
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
e9(a,b,c,d){if(c)return A.fj(a,b,d)
return A.fh(b.length,d,a,b)},
fi(a,b,c,d){var s=A.e8,r=A.ff
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
fj(a,b,c){var s,r
if($.e6==null)$.e6=A.e5("interceptor")
if($.e7==null)$.e7=A.e5("receiver")
s=b.length
r=A.fi(s,c,a,b)
return r},
dW(a){return A.fk(a)},
fe(a,b){return A.b6(v.typeUniverse,A.bb(a.a),b)},
e8(a){return a.a},
ff(a){return a.b},
e5(a){var s,r,q,p=new A.ap("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.c(A.a5("Field name "+a+" not found.",null))},
di(a){return v.getIsolateTag(a)},
iv(a){var s,r,q,p,o,n=$.eP.$1(a),m=$.dg[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.dm[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.eH.$2(a,n)
if(q!=null){m=$.dg[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.dm[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.du(s)
$.dg[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.dm[n]=s
return s}if(p==="-"){o=A.du(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.eR(a,s)
if(p==="*")throw A.c(A.ek(n))
if(v.leafTags[n]===true){o=A.du(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.eR(a,s)},
eR(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.e_(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
du(a){return J.e_(a,!1,null,!!a.$iv)},
iw(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.du(s)
else return J.e_(s,c,null,null)},
ir(){if(!0===$.dY)return
$.dY=!0
A.is()},
is(){var s,r,q,p,o,n,m,l
$.dg=Object.create(null)
$.dm=Object.create(null)
A.iq()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.eS.$1(o)
if(n!=null){m=A.iw(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
iq(){var s,r,q,p,o,n,m=B.o()
m=A.am(B.p,A.am(B.q,A.am(B.j,A.am(B.j,A.am(B.r,A.am(B.t,A.am(B.u(B.i),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.eP=new A.dj(p)
$.eH=new A.dk(o)
$.eS=new A.dl(n)},
am(a,b){return a(b)||b},
ii(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
fw(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.c(new A.c5("Illegal RegExp pattern ("+String(o)+")",a))},
ix(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
C:function C(a,b){this.a=a
this.b=b},
bi:function bi(){},
bl:function bl(a,b){this.a=a
this.$ti=b},
aJ:function aJ(){},
cG:function cG(a,b,c,d,e,f){var _=this
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
cb:function cb(a){this.a=a},
as:function as(a,b){this.a=a
this.b=b},
b_:function b_(a){this.a=a
this.b=null},
T:function T(){},
c2:function c2(){},
c3:function c3(){},
cp:function cp(){},
ck:function ck(){},
ap:function ap(a,b){this.a=a
this.b=b},
bF:function bF(a){this.a=a},
W:function W(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
c8:function c8(a,b){this.a=a
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
dj:function dj(a){this.a=a},
dk:function dk(a){this.a=a},
dl:function dl(a){this.a=a},
ai:function ai(){},
bV:function bV(){},
c6:function c6(a,b){var _=this
_.a=a
_.b=b
_.e=_.c=null},
d5:function d5(a){this.b=a},
ab:function ab(){},
aF:function aF(){},
bt:function bt(){},
ac:function ac(){},
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
dH(a,b){var s=b.c
return s==null?b.c=A.b4(a,"G",[b.x]):s},
eg(a){var s=a.w
if(s===6||s===7)return A.eg(a.x)
return s===11||s===12},
fF(a){return a.as},
dh(a){return A.d9(v.typeUniverse,a,!1)},
a0(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.a0(a1,s,a3,a4)
if(r===s)return a2
return A.es(a1,r,!0)
case 7:s=a2.x
r=A.a0(a1,s,a3,a4)
if(r===s)return a2
return A.er(a1,r,!0)
case 8:q=a2.y
p=A.al(a1,q,a3,a4)
if(p===q)return a2
return A.b4(a1,a2.x,p)
case 9:o=a2.x
n=A.a0(a1,o,a3,a4)
m=a2.y
l=A.al(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.dM(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.al(a1,j,a3,a4)
if(i===j)return a2
return A.et(a1,k,i)
case 11:h=a2.x
g=A.a0(a1,h,a3,a4)
f=a2.y
e=A.i4(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.eq(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.al(a1,d,a3,a4)
o=a2.x
n=A.a0(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.dN(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.c(A.bg("Attempted to substitute unexpected RTI kind "+a0))}},
al(a,b,c,d){var s,r,q,p,o=b.length,n=A.da(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.a0(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
i5(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.da(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.a0(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
i4(a,b,c,d){var s,r=b.a,q=A.al(a,r,c,d),p=b.b,o=A.al(a,p,c,d),n=b.c,m=A.i5(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.bT()
s.a=q
s.b=o
s.c=m
return s},
f(a,b){a[v.arrayRti]=b
return a},
eK(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.ip(s)
return a.$S()}return null},
it(a,b){var s
if(A.eg(b))if(a instanceof A.T){s=A.eK(a)
if(s!=null)return s}return A.bb(a)},
bb(a){if(a instanceof A.d)return A.b8(a)
if(Array.isArray(a))return A.dO(a)
return A.dP(J.a2(a))},
dO(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
b8(a){var s=a.$ti
return s!=null?s:A.dP(a)},
dP(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.hF(a,s)},
hF(a,b){var s=a instanceof A.T?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.ha(v.typeUniverse,s.name)
b.$ccache=r
return r},
ip(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.d9(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
eO(a){return A.a1(A.b8(a))},
dT(a){var s
if(a instanceof A.ai)return A.ik(a.$r,a.aJ())
s=a instanceof A.T?A.eK(a):null
if(s!=null)return s
if(t.R.b(a))return J.fc(a).a
if(Array.isArray(a))return A.dO(a)
return A.bb(a)},
a1(a){var s=a.r
return s==null?a.r=new A.bY(a):s},
ik(a,b){var s,r,q=b,p=q.length
if(p===0)return t.F
if(0>=p)return A.b(q,0)
s=A.b6(v.typeUniverse,A.dT(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.b(q,r)
s=A.ev(v.typeUniverse,s,A.dT(q[r]))}return A.b6(v.typeUniverse,s,a)},
D(a){return A.a1(A.d9(v.typeUniverse,a,!1))},
hE(a){var s=this
s.b=A.i2(s)
return s.b(a)},
i2(a){var s,r,q,p
if(a===t.K)return A.hN
if(A.a3(a))return A.hR
s=a.w
if(s===6)return A.hC
if(s===1)return A.eD
if(s===7)return A.hI
r=A.i1(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.a3)){a.f="$i"+q
if(q==="h")return A.hL
if(a===t.m)return A.hK
return A.hQ}}else if(s===10){p=A.ii(a.x,a.y)
return p==null?A.eD:p}return A.hA},
i1(a){if(a.w===8){if(a===t.S)return A.eB
if(a===t.i||a===t.n)return A.hM
if(a===t.N)return A.hP
if(a===t.y)return A.dQ}return null},
hD(a){var s=this,r=A.hz
if(A.a3(s))r=A.hp
else if(s===t.K)r=A.hm
else if(A.an(s)){r=A.hB
if(s===t.J)r=A.hi
else if(s===t.x)r=A.ho
else if(s===t.u)r=A.he
else if(s===t.M)r=A.hl
else if(s===t.I)r=A.hg
else if(s===t.B)r=A.hj}else if(s===t.S)r=A.hh
else if(s===t.N)r=A.hn
else if(s===t.y)r=A.hd
else if(s===t.n)r=A.hk
else if(s===t.i)r=A.hf
else if(s===t.m)r=A.J
s.a=r
return s.a(a)},
hA(a){var s=this
if(a==null)return A.an(s)
return A.iu(v.typeUniverse,A.it(a,s),s)},
hC(a){if(a==null)return!0
return this.x.b(a)},
hQ(a){var s,r=this
if(a==null)return A.an(r)
s=r.f
if(a instanceof A.d)return!!a[s]
return!!J.a2(a)[s]},
hL(a){var s,r=this
if(a==null)return A.an(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.d)return!!a[s]
return!!J.a2(a)[s]},
hK(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.d)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
eC(a){if(typeof a=="object"){if(a instanceof A.d)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
hz(a){var s=this
if(a==null){if(A.an(s))return a}else if(s.b(a))return a
throw A.q(A.ey(a,s),new Error())},
hB(a){var s=this
if(a==null||s.b(a))return a
throw A.q(A.ey(a,s),new Error())},
ey(a,b){return new A.b2("TypeError: "+A.em(a,A.w(b,null)))},
em(a,b){return A.c4(a)+": type '"+A.w(A.dT(a),null)+"' is not a subtype of type '"+b+"'"},
z(a,b){return new A.b2("TypeError: "+A.em(a,b))},
hI(a){var s=this
return s.x.b(a)||A.dH(v.typeUniverse,s).b(a)},
hN(a){return a!=null},
hm(a){if(a!=null)return a
throw A.q(A.z(a,"Object"),new Error())},
hR(a){return!0},
hp(a){return a},
eD(a){return!1},
dQ(a){return!0===a||!1===a},
hd(a){if(!0===a)return!0
if(!1===a)return!1
throw A.q(A.z(a,"bool"),new Error())},
he(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.q(A.z(a,"bool?"),new Error())},
hf(a){if(typeof a=="number")return a
throw A.q(A.z(a,"double"),new Error())},
hg(a){if(typeof a=="number")return a
if(a==null)return a
throw A.q(A.z(a,"double?"),new Error())},
eB(a){return typeof a=="number"&&Math.floor(a)===a},
hh(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.q(A.z(a,"int"),new Error())},
hi(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.q(A.z(a,"int?"),new Error())},
hM(a){return typeof a=="number"},
hk(a){if(typeof a=="number")return a
throw A.q(A.z(a,"num"),new Error())},
hl(a){if(typeof a=="number")return a
if(a==null)return a
throw A.q(A.z(a,"num?"),new Error())},
hP(a){return typeof a=="string"},
hn(a){if(typeof a=="string")return a
throw A.q(A.z(a,"String"),new Error())},
ho(a){if(typeof a=="string")return a
if(a==null)return a
throw A.q(A.z(a,"String?"),new Error())},
J(a){if(A.eC(a))return a
throw A.q(A.z(a,"JSObject"),new Error())},
hj(a){if(a==null)return a
if(A.eC(a))return a
throw A.q(A.z(a,"JSObject?"),new Error())},
eE(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.w(a[q],b)
return s},
hY(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.eE(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.w(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
ez(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
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
if(l===8){p=A.i6(a.x)
o=a.y
return o.length>0?p+("<"+A.eE(o,b)+">"):p}if(l===10)return A.hY(a,b)
if(l===11)return A.ez(a,b,null)
if(l===12)return A.ez(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.b(b,n)
return b[n]}return"?"},
i6(a){var s=A.eU(a)
if(s!=null)return s
return"minified:"+a},
hb(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
ha(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.d9(a,b,!1)
else if(typeof m=="number"){s=m
r=A.b5(a,5,"#")
q=A.da(s)
for(p=0;p<s;++p)q[p]=r
o=A.b4(a,b,q)
n[b]=o
return o}else return m},
h9(a,b){return A.ew(a.tR,b)},
h8(a,b){return A.ew(a.eT,b)},
d9(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.eu(a,null,b,!1)
r.set(b,s)
return s},
b6(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.eu(a,b,c,!0)
q.set(c,r)
return r},
ev(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.dM(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
eu(a,b,c,d){return A.h_(A.fU(a,b,c,d))},
P(a,b){b.a=A.hD
b.b=A.hE
return b},
b5(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.A(null,null)
s.w=b
s.as=c
r=A.P(a,s)
a.eC.set(c,r)
return r},
es(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.h6(a,b,r,c)
a.eC.set(r,s)
return s},
h6(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.a3(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.an(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.A(null,null)
q.w=6
q.x=b
q.as=c
return A.P(a,q)},
er(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.h4(a,b,r,c)
a.eC.set(r,s)
return s},
h4(a,b,c,d){var s,r
if(d){s=b.w
if(A.a3(b)||b===t.K)return b
else if(s===1)return A.b4(a,"G",[b])
else if(b===t.P||b===t.T)return t.O}r=new A.A(null,null)
r.w=7
r.x=b
r.as=c
return A.P(a,r)},
h7(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
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
h3(a){var s,r,q,p,o,n=a.length
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
dM(a,b,c){var s,r,q,p,o,n
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
et(a,b,c){var s,r,q="+"+(b+"("+A.b3(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.A(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.P(a,s)
a.eC.set(q,r)
return r},
eq(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.b3(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.b3(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.h3(i)+"}"}r=n+(g+")")
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
dN(a,b,c,d){var s,r=b.as+("<"+A.b3(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.h5(a,b,c,r,d)
a.eC.set(r,s)
return s},
h5(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.da(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.a0(a,b,r,0)
m=A.al(a,c,r,0)
return A.dN(a,n,m,c!==m)}}l=new A.A(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.P(a,l)},
fU(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
h_(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.fW(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.eo(a,r,l,k,!1)
else if(q===46)r=A.eo(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.a_(a.u,a.e,k.pop()))
break
case 94:k.push(A.h7(a.u,k.pop()))
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
case 62:A.fY(a,k)
break
case 38:A.fX(a,k)
break
case 63:p=a.u
k.push(A.es(p,A.a_(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.er(p,A.a_(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.fV(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.ep(a.u,a.e,o)
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
return A.a_(a.u,a.e,m)},
fW(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
eo(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.hb(s,o.x)[p]
if(n==null)A.c1('No "'+p+'" in "'+A.fF(o)+'"')
d.push(A.b6(s,o,n))}else d.push(p)
return m},
fY(a,b){var s,r=a.u,q=A.en(a,b),p=b.pop()
if(typeof p=="string")b.push(A.b4(r,p,q))
else{s=A.a_(r,a.e,p)
switch(s.w){case 11:b.push(A.dN(r,s,q,a.n))
break
default:b.push(A.dM(r,s,q))
break}}},
fV(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.en(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.a_(p,a.e,o)
q=new A.bT()
q.a=s
q.b=n
q.c=m
b.push(A.eq(p,r,q))
return
case-4:b.push(A.et(p,b.pop(),s))
return
default:throw A.c(A.bg("Unexpected state under `()`: "+A.n(o)))}},
fX(a,b){var s=b.pop()
if(0===s){b.push(A.b5(a.u,1,"0&"))
return}if(1===s){b.push(A.b5(a.u,4,"1&"))
return}throw A.c(A.bg("Unexpected extended operation "+A.n(s)))},
en(a,b){var s=b.splice(a.p)
A.ep(a.u,a.e,s)
a.p=b.pop()
return s},
a_(a,b,c){if(typeof c=="string")return A.b4(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.fZ(a,b,c)}else return c},
ep(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.a_(a,b,c[s])},
h0(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.a_(a,b,c[s])},
fZ(a,b,c){var s,r,q=b.w
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
iu(a,b,c){var s,r=b.d
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
return A.p(a,A.dH(a,b),c,d,e)}if(s===6)return A.p(a,p,c,d,e)&&A.p(a,b.x,c,d,e)
if(q===7){if(A.p(a,b,c,d.x,e))return!0
return A.p(a,b,c,A.dH(a,d),e)}if(q===6)return A.p(a,b,c,p,e)||A.p(a,b,c,d.x,e)
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
if(!A.p(a,j,c,i,e)||!A.p(a,i,e,j,c))return!1}return A.eA(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.eA(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.hJ(a,b,c,d,e)}if(o&&q===10)return A.hO(a,b,c,d,e)
return!1},
eA(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
hJ(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.b6(a,b,r[o])
return A.ex(a,p,null,c,d.y,e)}return A.ex(a,b.y,null,c,d.y,e)},
ex(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.p(a,b[s],d,e[s],f))return!1
return!0},
hO(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.p(a,r[s],c,q[s],e))return!1
return!0},
an(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.a3(a))if(s!==6)r=s===7&&A.an(a.x)
return r},
a3(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
ew(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
da(a){return a>0?new Array(a):v.typeUniverse.sEA},
A:function A(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
bT:function bT(){this.c=this.b=this.a=null},
bY:function bY(a){this.a=a},
bS:function bS(){},
b2:function b2(a){this.a=a},
fN(){var s,r,q
if(self.scheduleImmediate!=null)return A.i9()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.c_(new A.cO(s),1)).observe(r,{childList:true})
return new A.cN(s,r,q)}else if(self.setImmediate!=null)return A.ia()
return A.ib()},
fO(a){self.scheduleImmediate(A.c_(new A.cP(a),0))},
fP(a){self.setImmediate(A.c_(new A.cQ(a),0))},
fQ(a){A.h1(0,a)},
h1(a,b){var s=new A.b1(!0)
s.b8(a,b)
return s},
h2(a,b){var s=new A.b1(!1)
s.b9(a,b)
return s},
hT(a){return new A.bL(new A.m($.i,a.i("m<0>")),a.i("bL<0>"))},
ht(a,b){a.$2(0,null)
b.b=!0
return b.a},
hq(a,b){A.hu(a,b)},
hs(a,b){var s,r=a==null?b.$ti.c.a(a):a
if(!b.b)b.a.a8(r)
else{s=b.a
if(b.$ti.i("G<1>").b(r))s.aE(r)
else s.aG(r)}},
hr(a,b){var s=A.a4(a),r=A.Q(a),q=b.a
if(b.b)q.L(new A.y(s,r))
else q.aD(new A.y(s,r))},
hu(a,b){var s,r,q=new A.db(b),p=new A.dc(b)
if(a instanceof A.m)a.aP(q,p,t.z)
else{s=t.z
if(a instanceof A.m)a.b0(q,p,s)
else{r=new A.m($.i,t.c)
r.a=8
r.c=a
r.aP(q,p,s)}}},
i8(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(q){e=q
d=c}}}}(a,1),r=$.i
return r.ai(r,new A.df(s))},
dz(a){var s
if(t.Q.b(a)){s=a.gW()
if(s!=null)return s}return B.w},
hG(a,b){var s=$.i
if(s===B.b)return null
s.bk(s,a,b)
return null},
cW(a,b,c){var s,r,q,p,o={},n=o.a=a
while(s=n.a,(s&4)!==0){n=n.c
o.a=n}if(n===b){s=A.eh()
b.aD(new A.y(new A.E(!0,n,null,"Cannot complete a future with itself"),s))
return}r=b.a&1
s=n.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=n
n.aN(q)
return}if(!c)if(b.c==null)n=(s&16)===0||r!==0
else n=!1
else n=!0
if(n){q=b.O()
b.a_(o.a)
A.Z(b,q)
return}b.a^=2
p=b.b
p.R(p,new A.cX(o,b))},
Z(a,b){var s,r,q,p,o,n,m,l,k,j,i,h={},g=h.a=a
for(;;){s={}
r=g.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){r=g.c
g=g.b
g.M(g,r.a,r.b)}return}s.a=b
o=b.a
for(g=b;o!=null;g=o,o=n){g.a=null
A.Z(h.a,g)
s.a=o
n=o.a}m=h.a.c
s.b=p
s.c=m
if(q){r=g.c
r=(r&1)!==0||(r&15)===8}else r=!0
if(r){l=g.b.b
k=$.i
if(k!==l)$.i=l
else k=null
g=g.c
if((g&15)===8)new A.d0(s,h,p).$0()
else if(q){if((g&1)!==0)new A.d_(s,m).$0()}else if((g&2)!==0)new A.cZ(h,s).$0()
if(k!=null)$.i=k
g=s.c
if(g instanceof A.m){r=s.a.$ti
r=r.i("G<2>").b(g)||!r.y[1].b(g)}else r=!1
if(r){j=s.a.b
if((g.a&24)!==0){i=j.c
j.c=null
b=j.a1(i)
j.a=g.a&30|j.a&1
j.c=g.c
h.a=g
continue}else A.cW(g,j,!0)
return}}j=s.a.b
i=j.c
j.c=null
b=j.a1(i)
g=s.b
r=s.c
if(!g){j.a=8
j.c=r}else{j.a=j.a&1|16
j.c=r}h.a=j
g=j}},
hZ(a,b){if(t.C.b(a))return b.ai(b,a)
if(t.v.b(a))return b.F(b,a)
throw A.c(A.e4(a,"onError",u.c))},
hU(){var s,r
for(s=$.ak;s!=null;s=$.ak){$.ba=null
r=s.b
$.ak=r
if(r==null)$.b9=null
s.a.$0()}},
i3(){$.dR=!0
try{A.hU()}finally{$.ba=null
$.dR=!1
if($.ak!=null)$.e1().$1(A.eI())}},
eG(a){var s=new A.bM(a),r=$.b9
if(r==null){$.ak=$.b9=s
if(!$.dR)$.e1().$1(A.eI())}else $.b9=r.b=s},
i0(a){var s,r,q,p=$.ak
if(p==null){A.eG(a)
$.ba=$.b9
return}s=new A.bM(a)
r=$.ba
if(r==null){s.b=p
$.ak=$.ba=s}else{q=r.b
s.b=q
$.ba=r.b=s
if(q==null)$.b9=s}},
eT(a){var s=$.i
if(B.b===s){A.dS(B.b,a)
return}A.dS(s,s.N(s,a))
return},
iJ(a){A.dV(a,"stream",t.K)
return new A.bW()},
dJ(a){return new A.aO(null,null,a.i("aO<0>"))},
eF(a){return},
el(a,b){return a.F(a,b==null?A.ic():b)},
fR(a,b){if(b==null)b=A.ie()
if(t.k.b(b))return a.ai(a,b)
if(t.d.b(b))return a.F(a,b)
throw A.c(A.a5("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
hV(a){},
hX(a,b){var s=$.i
s.M(s,a,b)},
hW(){},
hx(a,b,c){var s,r,q,p=a.a4()
if(p!==$.dx()){s=new A.dd(b,c)
r=p.$ti
q=$.i
if(q!==B.b)s=q.N(q,s)
p.Y(new A.O(new A.m(q,r),8,s,null,r.i("O<1,1>")))}else b.aa(c)},
fJ(a,b){var s=$.i
if(s===B.b)return s.aH(s,a,b)
return s.aH(s,a,s.bJ(b,t.p))},
i_(a,b){A.i0(new A.de(a,b))},
dS(a,b){if(B.b!==a)b=a.bH(b,t.H)
A.eG(b)},
cO:function cO(a){this.a=a},
cN:function cN(a,b,c){this.a=a
this.b=b
this.c=c},
cP:function cP(a){this.a=a},
cQ:function cQ(a){this.a=a},
b1:function b1(a){this.a=a
this.b=null
this.c=0},
d8:function d8(a,b){this.a=a
this.b=b},
d7:function d7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bL:function bL(a,b){this.a=a
this.b=!1
this.$ti=b},
db:function db(a){this.a=a},
dc:function dc(a){this.a=a},
df:function df(a){this.a=a},
y:function y(a,b){this.a=a
this.b=b},
ag:function ag(a,b){this.a=a
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
bN:function bN(){},
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
cT:function cT(a,b){this.a=a
this.b=b},
cY:function cY(a,b){this.a=a
this.b=b},
cX:function cX(a,b){this.a=a
this.b=b},
cV:function cV(a,b){this.a=a
this.b=b},
cU:function cU(a,b){this.a=a
this.b=b},
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
af:function af(){},
cn:function cn(a,b){this.a=a
this.b=b},
co:function co(a,b){this.a=a
this.b=b},
cl:function cl(a){this.a=a},
cm:function cm(a,b,c){this.a=a
this.b=b
this.c=c},
aQ:function aQ(){},
bP:function bP(){},
bO:function bO(){},
b0:function b0(){},
bR:function bR(){},
bQ:function bQ(a){this.b=a
this.a=null},
bU:function bU(){this.a=0
this.c=this.b=null},
d6:function d6(a,b){this.a=a
this.b=b},
aR:function aR(a){this.a=1
this.b=a
this.c=null},
bW:function bW(){},
dd:function dd(a,b){this.a=a
this.b=b},
cJ:function cJ(){},
cK:function cK(a,b,c){this.a=a
this.b=b
this.c=c},
cM:function cM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cL:function cL(a,b,c){this.a=a
this.b=b
this.c=c},
de:function de(a,b){this.a=a
this.b=b},
fy(a,b,c){return A.eM(a,new A.W(b.i("@<0>").Z(c).i("W<1,2>")))},
fz(a){return new A.aT(a.i("aT<0>"))},
dL(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
fT(a,b,c){var s=new A.ah(a,b,c.i("ah<0>"))
s.c=a.e
return s},
dF(a){var s,r
if(A.dZ(a))return"{...}"
s=new A.bH("")
try{r={}
$.x.push(a)
s.a+="{"
r.a=!0
a.ap(0,new A.c9(r,s))
s.a+="}"}finally{if(0>=$.x.length)return A.b($.x,-1)
$.x.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
aT:function aT(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
d4:function d4(a){this.a=a
this.c=this.b=null},
ah:function ah(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
l:function l(){},
aC:function aC(){},
c9:function c9(a,b){this.a=a
this.b=b},
aK:function aK(){},
aZ:function aZ(){},
hc(){if(typeof WeakRef=="function")return WeakRef
var s=function LeakRef(a){this._=a}
s.prototype={
deref(){return this._}}
return s},
fl(a,b){a=A.q(a,new Error())
a.stack=b.h(0)
throw a},
dE(a,b,c){var s,r,q
if(a>4294967295)A.c1(A.dG(a,0,4294967295,"length",null))
s=A.f(new Array(a),c.i("o<0>"))
s.$flags=1
r=s
if(a!==0)for(s=r.length,q=0;q<s;++q)r[q]=b
return r},
fA(a,b,c){var s,r,q=A.f([],c.i("o<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.c0)(a),++r)q.push(a[r])
q.$flags=1
return q},
ef(a){return new A.c6(a,A.fw(a,!1,!0,!1,!1,""))},
ei(a,b,c){var s=J.fb(b)
if(!s.n())return a
if(c.length===0){do a+=A.n(s.gp())
while(s.n())}else{a+=A.n(s.gp())
while(s.n())a=a+c+A.n(s.gp())}return a},
eh(){return A.Q(new Error())},
c4(a){if(typeof a=="number"||A.dQ(a)||a==null)return J.bd(a)
if(typeof a=="string")return JSON.stringify(a)
return A.ee(a)},
fm(a,b){A.dV(a,"error",t.K)
A.dV(b,"stackTrace",t.l)
A.fl(a,b)},
bg(a){return new A.bf(a)},
a5(a,b){return new A.E(!1,null,b,a)},
e4(a,b,c){return new A.E(!0,a,b,c)},
dG(a,b,c,d,e){return new A.aI(b,c,!0,a,d,"Invalid value")},
fE(a,b,c){if(0>a||a>c)throw A.c(A.dG(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.c(A.dG(b,a,c,"end",null))
return b}return c},
fD(a,b){return a},
dA(a,b,c,d,e){return new A.bm(b,!0,a,e,"Index out of range")},
bK(a){return new A.aN(a)},
ek(a){return new A.bI(a)},
a6(a){return new A.bh(a)},
eb(a,b){if(a<=0)return new A.ar(b.i("ar<0>"))
if(!b.i("0(a)").b(A.eL()))throw A.c(A.a5("Generator must be supplied or element type must allow integers","generator"))
return new A.aS(a,A.eL(),b.i("aS<0>"))},
ft(a,b,c){var s,r
if(A.dZ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.f([],t.s)
$.x.push(a)
try{A.hS(a,s)}finally{if(0>=$.x.length)return A.b($.x,-1)
$.x.pop()}r=A.ei(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
dB(a,b,c){var s,r
if(A.dZ(a))return b+"..."+c
s=new A.bH(b)
$.x.push(a)
try{r=s
r.a=A.ei(r.a,a,", ")}finally{if(0>=$.x.length)return A.b($.x,-1)
$.x.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
fS(a){return a},
hS(a,b){var s,r,q,p,o,n,m,l=a.gt(a),k=0,j=0
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
cc(a,b,c,d){var s
if(B.c===c){s=B.a.gk(a)
b=J.F(b)
return A.dK(A.N(A.N($.dy(),s),b))}if(B.c===d){s=B.a.gk(a)
b=J.F(b)
c=J.F(c)
return A.dK(A.N(A.N(A.N($.dy(),s),b),c))}s=B.a.gk(a)
b=J.F(b)
c=J.F(c)
d=J.F(d)
d=A.dK(A.N(A.N(A.N(A.N($.dy(),s),b),c),d))
return d},
bZ:function bZ(a){this.a=a},
bj:function bj(a){this.a=a},
cR:function cR(){},
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
X:function X(a){this.a=a},
bh:function bh(a){this.a=a},
bC:function bC(){},
aL:function aL(){},
cS:function cS(a){this.a=a},
c5:function c5(a,b){this.a=a
this.b=b},
U:function U(){},
aS:function aS(a,b,c){this.a=a
this.b=b
this.$ti=c},
t:function t(){},
d:function d(){},
bX:function bX(){},
bH:function bH(a){this.a=a},
S:function S(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fI(a){return new A.cr(a)},
cd:function cd(){},
cr:function cr(a){this.a=a},
a8:function a8(){},
ca:function ca(a,b){this.a=a
this.b=b},
aa:function aa(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ad:function ad(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=0},
fG(a,b,c,d,e,f,g,h){var s,r,q,p=A.ea(),o=h*g
p.width=o
s=d*f
p.height=s
r=A.ea()
r.width=o
r.height=s
s=A.f([],t.w)
for(o=A.eb(d,t.z),o=o.gt(o);o.n();){o.gp()
q=B.a.C(h,32)
s.push(new Uint32Array(q+1))}p=new A.bG(!0,d,h,g,f,c,a,p,r,s)
p.b6(a,b,c,d,!0,f,g,h)
return p},
dI(a){return new A.C(B.a.C(a,32),31-B.a.j(a,32))},
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
cf:function cf(a){this.a=a},
cg:function cg(a){this.a=a},
ch:function ch(a){this.a=a},
ci:function ci(a){this.a=a},
ce:function ce(){},
fH(a,b,c){var s,r,q,p,o,n="white",m=null,l=A.dJ(t.N),k=A.dJ(t.V),j=A.dJ(t.q),i=v.G,h=i.document.getElementById(b)
if(h==null)h=A.J(h)
i=i.document.getElementById(b)
if(i==null)i=A.J(i)
i=A.fG("black",i,n,c*10,!0,2,2,a*8)
s=A.f([],t.G)
for(r=t.U,q=0;q<c;++q){p=A.f([],r)
for(o=0;o<a;++o)p.push(new A.S(q,o," ",n))
s.push(p)}l=new A.cq(c,a,h,i,new A.ad(c,a),new A.ad(c,a),new A.ad(c,a),l,k,j,B.d,s,A.fz(t.o),B.dE)
l.b7("black",a,b,n,m,!0,2,2,2,c,!0,m,m,m,m,m,m)
return l},
aM:function aM(a,b){this.a=a
this.b=b},
cq:function cq(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.db=_.cy=_.cx=_.CW=_.ch=_.ay=null
_.dx=k
_.dy=l
_.fr=m
_.fx=n
_.fy=!1},
cE:function cE(a){this.a=a},
cD:function cD(){},
cC:function cC(a){this.a=a},
cs:function cs(a){this.a=a},
ct:function ct(a){this.a=a},
cu:function cu(a,b,c){this.a=a
this.b=b
this.c=c},
cv:function cv(a,b,c){this.a=a
this.b=b
this.c=c},
cw:function cw(a,b){this.a=a
this.b=b},
cx:function cx(a,b){this.a=a
this.b=b},
cy:function cy(a,b){this.a=a
this.b=b},
cz:function cz(a,b){this.a=a
this.b=b},
cA:function cA(a,b){this.a=a
this.b=b},
cB:function cB(a){this.a=a},
dn(){var s=0,r=A.hT(t.H),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$dn=A.i8(function(b6,b7){if(b6===1)return A.hr(b7,r)
for(;;)switch(s){case 0:b5=A.fH(60,"index",35)
b5.J()
b5.T()
p=t.s
o=A.fy(["blockdude",A.f(["Block Dude is a game by Brandon Sterner and","Detached Solutions for the Texas Instruments family","of graphic display calculators. The graphics data for","this demo was pinched directly from the Z80 assembly","code for the calculator game."],p),"bounce",A.f(["Capture the bouncing balls by enclosing them","with your trail."],p),"emotions",A.f(["Mixed Emotions is a little twist on the classic sliding","tiles game to demonstrate mouse support for the terminal.","Click on tiles to slide them to their correct positions,","but you only get to see the correct positions by sliding","the tiles!"],p),"four",A.f(["This is the classic game of connect-four. The computer","uses background Monte Carlo simulations to play a fairly","intelligent game."],p),"mine",A.f(["A minesweep clone."],p),"othello",A.f(["The game of Othello (Reversi)."],p),"poker",A.f(["Poker squares. The computer uses background simulations","to make decisions using only the same information","available to the player."],p),"rainbow",A.f(["A solitaire puzzle similar to Hanoi Towers, but with","constraints based on colors."],p),"salad",A.f(["Given definitions, find the words in a grid","of letters."],p),"snake",A.f(["Snake is version of the infamous snake game that","demonstrates non interrupting keyboard input."],p),"sokoban",A.f(["Mother Hen is a Sokoban clone that demonstrates poking","simple sprite data into the terminal graphics memory."],p),"tetris",A.f(["The classic game of tetris!"],p),"wordle",A.f(["Word Logic is a Wordle clone that demonstrates a fairly","complex program running in the terminal."],p)],t.N,t.a)
n=A.ef("^ *info +(.+) *$")
m=A.ef("^ *load +(.+) *$")
l=new A.dt(b5)
k=new A.dp(b5)
j=new A.dr(o,b5)
i=new A.dq(o,b5)
h=new A.ds(o,b5)
l.$0()
j.$0()
p=m.b,g=n.b,f=b5.x,e=f.a,d=b5.y,c=f.b,b=d.b,a=d.a,a0=b5.z,a1=a0.b,a2=a0.a,a3=b5.as,a4=A.b8(a3).i("ag<1>"),a5=b5.a,a6=a5-1,a7=b5.b,a8=a7-4
case 3:b5.bS(" > ","lightgreen",!1)
if(b5.dx!==B.d)A.c1(A.fI("Terminal already awaiting input."))
a9=f.c
b0=f.d
b1=B.a.j(a9,a5)
b2=B.a.j(b0,a7)
f.c=B.a.j(b1,e)
f.sK(b2)
if(b1===a6){b5.a7();--b1
f.c=B.a.j(b1,e)}b5.av(B.f.aA(" ",a8),!1)
f.c=B.a.j(b1,e)
f.sK(b2)
a9=f.c*c+f.d
b0=B.a.j(B.a.A(a9,b),a)
d.c=b0
a9=B.a.j(a9,b)
d.d=a9
a9=b0*b+a9+a8
a0.c=B.a.j(B.a.A(a9,a1),a2)
a0.d=B.a.j(a9,a1)
b5.dx=B.m
s=5
return A.hq(new A.ag(a3,a4).gbK(0),$async$dn)
case 5:b3=b7
b4=B.f.b1(b3)
if("reset"===b4){l.$0()
s=3
break}if("help"===b4){k.$0()
s=3
break}if("list"===b4){j.$0()
s=3
break}if(g.test(b3)){a9=n.aU(b3).b
if(1>=a9.length){q=A.b(a9,1)
s=1
break}a9=a9[1]
a9.toString
i.$1(a9)}else if(p.test(b3)){a9=m.aU(b3).b
if(1>=a9.length){q=A.b(a9,1)
s=1
break}a9=a9[1]
a9.toString
h.$1(a9)}else{b5.D()
b5.E(" Not understood. Type 'help' for help.","orange")
b5.D()}s=3
break
case 4:case 1:return A.hs(q,r)}})
return A.ht($async$dn,r)},
dt:function dt(a){this.a=a},
dp:function dp(a){this.a=a},
dr:function dr(a,b){this.a=a
this.b=b},
dq:function dq(a,b){this.a=a
this.b=b},
ds:function ds(a,b){this.a=a
this.b=b},
eU(a){return v.mangledGlobalNames[a]},
iy(a){throw A.q(new A.aA("Field '"+a+"' has been assigned during initialization."),new Error())},
K(){throw A.q(A.fx(""),new Error())},
b7(a){var s
if(typeof a=="function")throw A.c(A.a5("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.hv,a)
s[$.dw()]=a
return s},
aj(a){var s
if(typeof a=="function")throw A.c(A.a5("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.hw,a)
s[$.dw()]=a
return s},
hv(a){return a.$0()},
hw(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
ea(){return v.G.document.createElement("canvas")}},B={}
var w=[A,J,B]
var $={}
A.dC.prototype={}
J.bn.prototype={
v(a,b){return a===b},
gk(a){return A.ae(a)},
h(a){return"Instance of '"+A.bE(a)+"'"},
gl(a){return A.a1(A.dP(this))}}
J.bp.prototype={
h(a){return String(a)},
gk(a){return a?519018:218159},
gl(a){return A.a1(t.y)},
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
J.Y.prototype={}
J.L.prototype={
h(a){var s=a[$.eW()]
if(s==null)s=a[$.dw()]
if(s==null)return this.b5(a)
return"JavaScript function for "+J.bd(s)}}
J.aw.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.ay.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.o.prototype={
aS(a,b){a.$flags&1&&A.bc(a,"addAll",2)
this.bb(a,b)
return},
bb(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw A.c(A.a6(a))
for(s=0;s<r;++s)a.push(b[s])},
bQ(a,b){var s,r,q=a.length,p=A.dE(q,"",t.N)
for(s=0;s<a.length;++s){r=A.n(a[s])
if(!(s<q))return A.b(p,s)
p[s]=r}return p.join(b)},
bL(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw A.c(A.a6(a))}return s},
bM(a,b,c){return this.bL(a,b,c,t.z)},
h(a){return A.dB(a,"[","]")},
gt(a){return new J.be(a,a.length,A.dO(a).i("be<1>"))},
gk(a){return A.ae(a)},
gm(a){return a.length},
$ih:1}
J.bo.prototype={
bY(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.bE(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.c7.prototype={}
J.be.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
n(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.c(A.c0(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.a7.prototype={
bX(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.c(A.bK(""+a+".toInt()"))},
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
return this.aO(a,b)},
C(a,b){return(a|0)===a?a/b|0:this.aO(a,b)},
aO(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.c(A.bK("Result of truncating division is "+A.n(s)+": "+A.n(a)+" ~/ "+b))},
V(a,b){if(b<0)throw A.c(A.dU(b))
return b>31?0:a<<b>>>0},
bD(a,b){return b>31?0:a<<b>>>0},
b3(a,b){var s
if(b<0)throw A.c(A.dU(b))
if(a>0)s=this.ak(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
bE(a,b){var s
if(a>0)s=this.ak(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
B(a,b){if(0>b)throw A.c(A.dU(b))
return this.ak(a,b)},
ak(a,b){return b>31?0:a>>>b},
gl(a){return A.a1(t.n)},
$ir:1}
J.au.prototype={
gl(a){return A.a1(t.S)},
$ie:1,
$ia:1}
J.bq.prototype={
gl(a){return A.a1(t.i)},
$ie:1}
J.V.prototype={
b4(a,b,c){return a.substring(b,A.fE(b,c,a.length))},
b1(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.b(p,0)
if(p.charCodeAt(0)===133){s=J.fu(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.b(p,r)
q=p.charCodeAt(r)===133?J.fv(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
aA(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.c(B.v)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
bT(a,b,c){var s=b-a.length
if(s<=0)return a
return this.aA(c,s)+a},
h(a){return a},
gk(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gl(a){return A.a1(t.N)},
gm(a){return a.length},
$ie:1,
$iu:1}
A.aA.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.dv.prototype={
$0(){var s=new A.m($.i,t.D)
s.a8(null)
return s},
$S:8}
A.cj.prototype={}
A.aq.prototype={}
A.aB.prototype={
gt(a){var s=this
return new A.a9(s,s.gm(s),A.b8(s).i("a9<1>"))}}
A.a9.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
n(){var s,r=this,q=r.a,p=J.eN(q),o=p.gm(q)
if(r.b!==o)throw A.c(A.a6(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.an(q,s);++r.c
return!0}}
A.ar.prototype={
gt(a){return B.n},
gm(a){return 0}}
A.bk.prototype={
n(){return!1},
gp(){throw A.c(A.fs())}}
A.at.prototype={}
A.C.prototype={$r:"+(1,2)",$s:1}
A.bi.prototype={
h(a){return A.dF(this)}}
A.bl.prototype={
a0(){var s=this,r=s.$map
if(r==null){r=new A.az(s.$ti.i("az<1,2>"))
A.eM(s.a,r)
s.$map=r}return r},
S(a){return this.a0().S(a)},
U(a,b){return this.a0().U(0,b)},
ap(a,b){this.a0().ap(0,b)},
gm(a){return this.a0().a}}
A.aJ.prototype={}
A.cG.prototype={
u(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.cb.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.as.prototype={}
A.b_.prototype={
h(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iB:1}
A.T.prototype={
h(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.eV(r==null?"unknown":r)+"'"},
gbZ(){return this},
$C:"$1",
$R:1,
$D:null}
A.c2.prototype={$C:"$0",$R:0}
A.c3.prototype={$C:"$2",$R:2}
A.cp.prototype={}
A.ck.prototype={
h(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.eV(s)+"'"}}
A.ap.prototype={
v(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.ap))return!1
return this.$_target===b.$_target&&this.a===b.a},
gk(a){return(A.e0(this.a)^A.ae(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.bE(this.a)+"'")}}
A.bF.prototype={
h(a){return"RuntimeError: "+this.a}}
A.W.prototype={
gm(a){return this.a},
S(a){var s=this.b
if(s==null)return!1
return s[a]!=null},
U(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.bP(b)},
bP(a){var s,r,q=this.d
if(q==null)return null
s=this.bn(q,a)
r=this.ar(s,a)
if(r<0)return null
return s[r].b},
ap(a,b){var s=this,r=s.e,q=s.r
while(r!=null){b.$2(r.a,r.b)
if(q!==s.r)throw A.c(A.a6(s))
r=r.c}},
X(a,b){var s=this,r=new A.c8(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&1073741823
return r},
aq(a){return J.F(a)&1073741823},
bn(a,b){return a[this.aq(b)]},
ar(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ao(a[r].a,b))return r
return-1},
h(a){return A.dF(this)}}
A.c8.prototype={}
A.bs.prototype={
gp(){return this.d},
n(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.c(A.a6(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
A.az.prototype={
aq(a){return A.ig(a)&1073741823},
ar(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ao(a[r].a,b))return r
return-1}}
A.dj.prototype={
$1(a){return this.a(a)},
$S:9}
A.dk.prototype={
$2(a,b){return this.a(a,b)},
$S:10}
A.dl.prototype={
$1(a){return this.a(a)},
$S:11}
A.ai.prototype={
h(a){return this.aQ(!1)},
aQ(a){var s,r,q,p,o,n=this.bl(),m=this.aJ(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.b(m,q)
o=m[q]
l=a?l+A.ee(o):l+A.n(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
bl(){var s,r=this.$s
while($.aY.length<=r)$.aY.push(null)
s=$.aY[r]
if(s==null){s=this.bj()
if(!(r<$.aY.length))return A.b($.aY,r)
$.aY[r]=s}return s},
bj(){var s,r,q,p,o,n=this.$r,m=n.indexOf("("),l=n.substring(1,m),k=n.substring(m),j=k==="()"?0:k.replace(/[^,]/g,"").length+1,i=A.f(new Array(j),t.f)
for(s=0;s<j;++s)i[s]=s
if(l!==""){r=l.split(",")
s=r.length
for(q=i.length,p=j;s>0;){--p;--s
o=r[s]
if(!(p>=0&&p<q))return A.b(i,p)
i[p]=o}}i=A.fA(i,!1,t.K)
i.$flags=3
return i}}
A.bV.prototype={
aJ(){return[this.a,this.b]},
v(a,b){if(b==null)return!1
return b instanceof A.bV&&this.$s===b.$s&&J.ao(this.a,b.a)&&J.ao(this.b,b.b)},
gk(a){return A.cc(this.$s,this.a,this.b,B.c)}}
A.c6.prototype={
h(a){return"RegExp/"+this.a+"/"+this.b.flags},
aU(a){var s=this.b.exec(a)
if(s==null)return null
return new A.d5(s)}}
A.d5.prototype={}
A.ab.prototype={
gl(a){return B.dG},
$ie:1}
A.aF.prototype={}
A.bt.prototype={
gl(a){return B.dH},
$ie:1}
A.ac.prototype={
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
$icI:1}
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
Z(a){return A.ev(v.typeUniverse,this,a)}}
A.bT.prototype={}
A.bY.prototype={
h(a){return A.w(this.a,null)}}
A.bS.prototype={
h(a){return this.a}}
A.b2.prototype={$iH:1}
A.cO.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:4}
A.cN.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:12}
A.cP.prototype={
$0(){this.a.$0()},
$S:1}
A.cQ.prototype={
$0(){this.a.$0()},
$S:1}
A.b1.prototype={
b8(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.c_(new A.d8(this,b),0),a)
else throw A.c(A.bK("`setTimeout()` not found."))},
b9(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.c_(new A.d7(this,a,Date.now(),b),0),a)
else throw A.c(A.bK("Periodic timer."))},
a4(){if(self.setTimeout!=null){var s=this.b
if(s==null)return
if(this.a)self.clearTimeout(s)
else self.clearInterval(s)
this.b=null}else throw A.c(A.bK("Canceling a timer."))},
$icF:1}
A.d8.prototype={
$0(){var s=this.a
s.b=null
s.c=1
this.b.$0()},
$S:0}
A.d7.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.a.A(s,o)}q.c=p
r.d.$1(q)},
$S:1}
A.bL.prototype={}
A.db.prototype={
$1(a){return this.a.$2(0,a)},
$S:5}
A.dc.prototype={
$2(a,b){this.a.$2(1,new A.as(a,b))},
$S:13}
A.df.prototype={
$2(a,b){this.a(a,b)},
$S:14}
A.y.prototype={
h(a){return A.n(this.a)},
$ik:1,
gW(){return this.b}}
A.ag.prototype={}
A.aP.prototype={
af(){},
ag(){}}
A.bN.prototype={
gbo(){return this.c<4},
bx(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
bF(a,b,c,d){var s,r,q,p,o,n,m=this
if((m.c&4)!==0){s=$.i
r=new A.aR(s)
A.eT(r.gbp())
if(c!=null)r.c=s.N(s,c)
return r}s=$.i
r=d?1:0
q=b!=null?32:0
p=A.el(s,a)
A.fR(s,b)
s.N(s,c==null?A.id():c)
o=new A.aP(m,p,s,r|q,A.b8(m).i("aP<1>"))
o.CW=o
o.ch=o
o.ay=m.c&1
n=m.e
m.e=o
o.ch=null
o.CW=n
if(n==null)m.d=o
else n.ch=o
if(m.d===o)A.eF(m.a)
return o},
bt(a){var s,r=this
A.b8(r).i("aP<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.bx(a)
if((r.c&2)===0&&r.d==null)r.bf()}return null},
bc(){if((this.c&4)!==0)return new A.X("Cannot add new events after calling close")
return new A.X("Cannot add new events while doing an addStream")},
I(a,b){if(!this.gbo())throw A.c(this.bc())
this.aj(b)},
bf(){if((this.c&4)!==0)if(null.gc_())null.a8(null)
A.eF(this.b)}}
A.aO.prototype={
aj(a){var s
for(s=this.d;s!=null;s=s.ch)s.bd(new A.bQ(a))}}
A.O.prototype={
bR(a){var s
if((this.c&15)!==6)return!0
s=this.b.b
return s.P(s,this.d,a.a)},
bO(a){var s,r=this.e,q=null,p=a.a,o=this.b.b
if(t.C.b(r))q=o.bz(o,r,p,a.b)
else q=o.P(o,r,p)
try{p=q
return p}catch(s){if(t._.b(A.a4(s))){if((this.c&1)!==0)throw A.c(A.a5("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.c(A.a5("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.m.prototype={
b0(a,b,c){var s,r,q=$.i
if(q===B.b){if(b!=null&&!t.C.b(b)&&!t.v.b(b))throw A.c(A.e4(b,"onError",u.c))}else{a=q.F(q,a)
if(b!=null)b=A.hZ(b,q)}s=new A.m(q,c.i("m<0>"))
r=b==null?1:3
this.Y(new A.O(s,r,a,b,this.$ti.i("@<1>").Z(c).i("O<1,2>")))
return s},
aP(a,b,c){var s=new A.m($.i,c.i("m<0>"))
this.Y(new A.O(s,19,a,b,this.$ti.i("@<1>").Z(c).i("O<1,2>")))
return s},
bC(a){this.a=this.a&1|16
this.c=a},
a_(a){this.a=a.a&30|this.a&1
this.c=a.c},
Y(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.Y(a)
return}s.a_(r)}r=s.b
r.R(r,new A.cT(s,a))}},
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
return}n.a_(s)}m.a=n.a1(a)
s=n.b
s.R(s,new A.cY(m,n))}},
O(){var s=this.c
this.c=null
return this.a1(s)},
a1(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
aa(a){var s,r=this
if(r.$ti.i("G<1>").b(a))A.cW(a,r,!0)
else{s=r.O()
r.a=8
r.c=a
A.Z(r,s)}},
aG(a){var s=this,r=s.O()
s.a=8
s.c=a
A.Z(s,r)},
bi(a){var s=this.O()
this.a_(a)
A.Z(this,s)},
L(a){var s=this.O()
this.bC(a)
A.Z(this,s)},
bh(a,b){this.L(new A.y(a,b))},
a8(a){if(this.$ti.i("G<1>").b(a)){this.aE(a)
return}this.be(a)},
be(a){var s
this.a^=2
s=this.b
s.R(s,new A.cV(this,a))},
aE(a){A.cW(a,this,!1)
return},
aD(a){var s
this.a^=2
s=this.b
s.R(s,new A.cU(this,a))},
$iG:1}
A.cT.prototype={
$0(){A.Z(this.a,this.b)},
$S:0}
A.cY.prototype={
$0(){A.Z(this.b,this.a.a)},
$S:0}
A.cX.prototype={
$0(){A.cW(this.a.a,this.b,!0)},
$S:0}
A.cV.prototype={
$0(){this.a.aG(this.b)},
$S:0}
A.cU.prototype={
$0(){this.a.L(this.b)},
$S:0}
A.d0.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
p=q.b.b
j=p.a2(p,q.d)}catch(o){s=A.a4(o)
r=A.Q(o)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
p=r
if(p==null)p=A.dz(q)
n=k.a
n.c=new A.y(q,p)
q=n}q.b=!0
return}if(j instanceof A.m&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.m){m=k.b.a
l=new A.m(m.b,m.$ti)
j.b0(new A.d1(l,m),new A.d2(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.d1.prototype={
$1(a){this.a.bi(this.b)},
$S:4}
A.d2.prototype={
$2(a,b){this.a.L(new A.y(a,b))},
$S:15}
A.d_.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
o=p.b.b
q.c=o.P(o,p.d,this.b)}catch(n){s=A.a4(n)
r=A.Q(n)
q=s
p=r
if(p==null)p=A.dz(q)
o=this.a
o.c=new A.y(q,p)
o.b=!0}},
$S:0}
A.cZ.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.bR(s)&&p.a.e!=null){p.c=p.a.bO(s)
p.b=!1}}catch(o){r=A.a4(o)
q=A.Q(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.dz(p)
m=l.b
m.c=new A.y(p,n)
p=m}p.b=!0}},
$S:0}
A.bM.prototype={}
A.af.prototype={
gm(a){var s={},r=new A.m($.i,t.h)
s.a=0
this.aV(new A.cn(s,this),!0,new A.co(s,r),r.gaF())
return r},
gbK(a){var s=new A.m($.i,this.$ti.i("m<1>")),r=this.aV(null,!0,new A.cl(s),s.gaF())
r.aW(new A.cm(this,r,s))
return s}}
A.cn.prototype={
$1(a){++this.a.a},
$S(){return this.b.$ti.i("~(1)")}}
A.co.prototype={
$0(){this.b.aa(this.a.a)},
$S:0}
A.cl.prototype={
$0(){var s,r=A.eh(),q=new A.X("No element")
A.fC(q,r)
s=A.hG(q,r)
s=new A.y(q,r)
this.a.L(s)},
$S:0}
A.cm.prototype={
$1(a){A.hx(this.b,this.c,a)},
$S(){return this.a.$ti.i("~(1)")}}
A.aQ.prototype={
gk(a){return(A.ae(this.a)^892482866)>>>0},
v(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.ag&&b.a===this.a}}
A.bP.prototype={
aM(){return this.w.bt(this)},
af(){},
ag(){}}
A.bO.prototype={
aW(a){this.a=A.el(this.d,a)},
a4(){var s,r=this,q=r.e&=4294967279
if((q&8)===0){q=r.e=q|8
if((q&128)!==0){s=r.r
if(s.a===1)s.a=3}if((q&64)===0)r.r=null
r.f=r.aM()}q=$.dx()
return q},
af(){},
ag(){},
aM(){return null},
bd(a){var s,r,q=this,p=q.r
if(p==null)p=q.r=new A.bU()
s=p.c
if(s==null)p.b=p.c=a
else p.c=s.a=a
r=q.e
if((r&128)===0){r|=128
q.e=r
if(r<256)p.aB(q)}},
aj(a){var s=this,r=s.e
s.e=r|64
s.d.b_(s.a,a)
s.e&=4294967231
s.bg((r&4)!==0)},
bg(a){var s,r,q=this,p=q.e
if((p&128)!==0&&q.r.c==null){p=q.e=p&4294967167
s=!1
if((p&4)!==0)if(p<256){s=q.r
s=s==null?null:s.c==null
s=s!==!1}if(s){p&=4294967291
q.e=p}}for(;;a=r){if((p&8)!==0){q.r=null
return}r=(p&4)!==0
if(a===r)break
q.e=p^64
if(r)q.af()
else q.ag()
p=q.e&=4294967231}if((p&128)!==0&&p<256)q.r.aB(q)}}
A.b0.prototype={
aV(a,b,c,d){return this.a.bF(a,d,c,b===!0)}}
A.bR.prototype={}
A.bQ.prototype={}
A.bU.prototype={
aB(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.eT(new A.d6(s,a))
s.a=1}}
A.d6.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.a
q.b=r
if(r==null)q.c=null
this.b.aj(s.b)},
$S:0}
A.aR.prototype={
aW(a){},
a4(){this.a=-1
this.c=null
return $.dx()},
bq(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.bV(s)}}else r.a=q}}
A.bW.prototype={}
A.dd.prototype={
$0(){return this.a.aa(this.b)},
$S:0}
A.cJ.prototype={
bV(a){var s,r,q,p,o=this
try{q=o.a2(o,a)
return q}catch(p){s=A.a4(p)
r=A.Q(p)
o.M(o,s,r)}},
bW(a,b){var s,r,q,p,o=this
try{q=o.P(o,a,b)
return q}catch(p){s=A.a4(p)
r=A.Q(p)
o.M(o,s,r)}},
b_(a,b){return this.bW(a,b,t.z)},
bH(a,b){return new A.cK(this,this.N(this,a),b)},
bI(a,b,c){return new A.cM(this,this.F(this,a),c,b)},
bJ(a,b){return new A.cL(this,this.F(this,a),b)},
M(a,b,c){var s,r,q,p,o,n,m,l=null
if(l==null){A.i_(b,c)
return}s=l.gaw()
r=s.gc0()
q=$.i
try{$.i=r
l.bN(s,s.gah(),a,b,c)
$.i=q}catch(n){p=A.a4(n)
o=A.Q(n)
$.i=q
m=b===p?c:o
r.M(s,p,m)}},
bB(a,b){var s,r,q=$.i
if(q===a)return b.$0()
s=q
$.i=a
try{q=b.$0()
return q}finally{$.i=s}r=null.gaw()
return null.c1(r,r.gah(),a,b)},
a2(a,b){return this.bB(a,b,t.z)},
bA(a,b,c){var s,r,q=$.i
if(q===a)return b.$1(c)
s=q
$.i=a
try{q=b.$1(c)
return q}finally{$.i=s}r=null.gaw()
return null.bN(r,r.gah(),a,b,c)},
P(a,b,c){var s=t.z
return this.bA(a,b,c,s,s)},
by(a,b,c,d){var s,r,q=$.i
if(q===a)return b.$2(c,d)
s=q
$.i=a
try{q=b.$2(c,d)
return q}finally{$.i=s}r=null.gaw()
return null.c2(r,r.gah(),a,b,c,d)},
bz(a,b,c,d){var s=t.z
return this.by(a,b,c,d,s,s,s)},
bv(a,b){return b},
N(a,b){return this.bv(a,b,t.z)},
bw(a,b){return b},
F(a,b){var s=t.z
return this.bw(a,b,s,s)},
bu(a,b){return b},
ai(a,b){var s=t.z
return this.bu(a,b,s,s,s)},
bk(a,b,c){return null},
R(a,b){A.dS(a,b)
return},
aH(a,b,c){var s
if(B.b!==a)c=a.bI(c,t.H,t.p)
s=B.a.C(b.a,1000)
return A.h2(s,c)}}
A.cK.prototype={
$0(){var s=this.a
return s.a2(s,this.b)},
$S(){return this.c.i("0()")}}
A.cM.prototype={
$1(a){var s=this.a
return s.P(s,this.b,a)},
$S(){return this.d.i("@<0>").Z(this.c).i("1(2)")}}
A.cL.prototype={
$1(a){return this.a.b_(this.b,a)},
$S(){return this.c.i("~(0)")}}
A.de.prototype={
$0(){A.fm(this.a,this.b)},
$S:0}
A.aT.prototype={
gt(a){var s=this,r=new A.ah(s,s.r,s.$ti.i("ah<1>"))
r.c=s.e
return r},
gm(a){return this.a},
I(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.aC(s==null?q.b=A.dL():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.aC(r==null?q.c=A.dL():r,b)}else return q.ba(b)},
ba(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.dL()
s=J.F(a)&1073741823
r=p[s]
if(r==null)p[s]=[q.ae(a)]
else{if(q.bm(r,a)>=0)return!1
r.push(q.ae(a))}return!0},
aC(a,b){if(a[b]!=null)return!1
a[b]=this.ae(b)
return!0},
aL(){this.r=this.r+1&1073741823},
ae(a){var s,r=this,q=new A.d4(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.aL()
return q},
bm(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ao(a[r].a,b))return r
return-1}}
A.d4.prototype={}
A.ah.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
n(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.c(A.a6(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.l.prototype={
gt(a){return new A.a9(a,a.length,A.bb(a).i("a9<l.E>"))},
an(a,b){if(!(b<a.length))return A.b(a,b)
return a[b]},
h(a){return A.dB(a,"[","]")}}
A.aC.prototype={
gm(a){return this.a},
h(a){return A.dF(this)}}
A.c9.prototype={
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
h(a){return A.dB(this,"{","}")}}
A.aZ.prototype={}
A.bZ.prototype={}
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
return""+n+":"+r+s+":"+p+q+"."+B.f.bT(B.a.h(o%1e6),6,"0")}}
A.cR.prototype={
h(a){return this.aI()}}
A.k.prototype={
gW(){return A.fB(this)}}
A.bf.prototype={
h(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.c4(s)
return"Assertion failed"}}
A.H.prototype={}
A.E.prototype={
gad(){return"Invalid argument"+(!this.a?"(s)":"")},
gac(){return""},
h(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.gad()+q+o
if(!s.a)return n
return n+s.gac()+": "+A.c4(s.gau())},
gau(){return this.b}}
A.aI.prototype={
gau(){return this.b},
gad(){return"RangeError"},
gac(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.n(q):""
else if(q==null)s=": Not greater than or equal to "+A.n(r)
else if(q>r)s=": Not in inclusive range "+A.n(r)+".."+A.n(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.n(r)
return s}}
A.bm.prototype={
gau(){return this.b},
gad(){return"RangeError"},
gac(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gm(a){return this.f}}
A.aN.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.bI.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.X.prototype={
h(a){return"Bad state: "+this.a}}
A.bh.prototype={
h(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.c4(s)+"."}}
A.bC.prototype={
h(a){return"Out of Memory"},
gW(){return null},
$ik:1}
A.aL.prototype={
h(a){return"Stack Overflow"},
gW(){return null},
$ik:1}
A.cS.prototype={
h(a){return"Exception: "+this.a}}
A.c5.prototype={
h(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=B.f.b4(q,0,75)+"..."
return r+"\n"+q}}
A.U.prototype={
gm(a){var s,r=this.gt(this)
for(s=0;r.n();)++s
return s},
an(a,b){var s,r
A.fD(b,"index")
s=this.gt(this)
for(r=b;s.n();){if(r===0)return s.gp();--r}throw A.c(A.dA(b,b-r,this,null,"index"))},
h(a){return A.ft(this,"(",")")}}
A.aS.prototype={
an(a,b){var s=this.a
if(b>=s)A.c1(A.dA(b,s,this,null,"index"))
return this.b.$1(b)},
gm(a){return this.a}}
A.t.prototype={
gk(a){return A.d.prototype.gk.call(this,0)},
h(a){return"null"}}
A.d.prototype={$id:1,
v(a,b){return this===b},
gk(a){return A.ae(this)},
h(a){return"Instance of '"+A.bE(this)+"'"},
gl(a){return A.eO(this)},
toString(){return this.h(this)}}
A.bX.prototype={
h(a){return""},
$iB:1}
A.bH.prototype={
gm(a){return this.a.length},
h(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.S.prototype={
gk(a){var s=this.a,r=this.b
return A.cc(new A.C(s,r).$s,s,r,B.c)},
v(a,b){var s,r,q,p
if(b==null)return!1
if(b instanceof A.S){s=b.a
r=b.b
q=this.a
p=this.b
p=A.cc(new A.C(s,r).$s,s,r,B.c)===A.cc(new A.C(q,p).$s,q,p,B.c)
s=p}else s=!1
return s},
h(a){var s=this
return"("+s.a+" "+s.b+") => '"+s.c+"' "+s.d}}
A.cd.prototype={
h(a){return A.eO(this).h(0)+": "+this.a}}
A.cr.prototype={}
A.a8.prototype={}
A.ca.prototype={
aI(){return"Mode."+this.b}}
A.aa.prototype={
h(a){var s=this
return"               row: "+s.a+"\n            column: "+s.b+"\n         character: '"+s.c+"'\n    characterColor: "+s.d+"\n\n          pixelRow: "+s.e+"\n       pixelColumn: "+s.f+"\n         pixelIsOn: "+s.r+"\n    "}}
A.ad.prototype={
sK(a){var s,r,q,p=this
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
b6(a,b,c,d,e,f,g,h){var s,r=this,q=v.G.document
q.onfocus=A.b7(new A.cf(r))
q.onblur=A.b7(new A.cg(r))
q=r.w
q.tabIndex=-1
q.style.display="block"
q.style.outline="none"
s=q.getContext("2d")
if(s==null)s=A.J(s)
s.imageSmoothingEnabled=!1
q.onfocus=A.b7(new A.ch(r))
q.onblur=A.b7(new A.ci(r))
b.style.display="flex"
b.style.alignItems="flex-start"
b.style.padding="0"
b.style.margin="0"
b.style.width="fit-content"
b.style.height="fit-content"
b.style.background=r.r
b.appendChild(q)
r.a5(0)},
a3(a,b){return new A.C(B.a.j(a,this.b),B.a.j(b,this.c))},
a9(){var s=this.x,r=s.getContext("2d")
if(r==null)r=A.J(r)
r.save()
r.beginPath()
r.clearRect(0,0,s.width,s.height)
r.restore()
return r},
ab(){var s=this.w.getContext("2d")
if(s==null)s=A.J(s)
s.save()
s.beginPath()
s.drawImage(this.x,0,0)
s.restore()
return s},
G(a,b,c,d){var s,r,q,p,o,n,m=this,l=a<0||a>=m.b||b<0||b>=m.c
if(l)return
s=m.a3(a,b)
a=s.a
b=s.b
r=A.dI(b)
q=r.a
p=B.a.V(1,r.b)
l=m.y
if(!(a>=0&&a<l.length))return A.b(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.b(l,q)
o=l[q]
l.$flags&2&&A.bc(l)
l[q]=(o|p)>>>0
l[q]=(l[q]^p)>>>0
l=c.getContext("2d")
if(l==null)l=A.J(l)
l.save()
l.beginPath()
l.fillStyle=m.r
o=m.d
n=m.e
l.fillRect(b*o,a*n,o,n)
l.restore()},
H(a,b,c,d,e){var s,r,q,p,o,n,m=this,l=a<0||a>=m.b||b<0||b>=m.c
if(l)return
s=m.a3(a,b)
a=s.a
b=s.b
r=A.dI(b)
q=r.a
p=B.a.V(1,r.b)
l=m.y
if(!(a>=0&&a<l.length))return A.b(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.b(l,q)
o=l[q]
l.$flags&2&&A.bc(l)
l[q]=(o|p)>>>0
o=d.getContext("2d")
l=o==null?A.J(o):o
l.save()
l.beginPath()
l.fillStyle=c
o=m.d
n=m.e
l.fillRect(b*o,a*n,o,n)
l.restore()},
aY(a,b){var s,r,q,p,o=this.a3(b,a)
b=o.a
s=A.dI(o.b)
r=s.a
q=B.a.V(1,s.b)
p=this.y
if(!(b>=0&&b<p.length))return A.b(p,b)
p=p[b]
if(!(r>=0&&r<p.length))return A.b(p,r)
return(p[r]&q)>>>0>0},
aT(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=this
if(e==null)e=k.c-c
if(b==null)b=k.b-d
k.a9()
if(c===0&&d===0&&e===k.c&&b===k.b){for(s=k.y,r=s.length,q=0;q<r;++q)for(p=0;o=s[q],p<o.length;++p){o.$flags&2&&A.bc(o)
o[p]=0}s=k.x
r=s.getContext("2d")
if(r==null)r=A.J(r)
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
for(p=c;p<m;++p)k.G(l,B.a.j(p,r),o,!1)}}k.ab()},
a5(a){return this.aT(0,null,0,0,null)},
br(a,b,c,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
d.a9()
s=d.a3(a,b)
a=s.a
b=s.b
r=B.a.bD(1,a1)-1
for(q=a2.a,p=a1-1,o=t.t,n=d.x,m=0;m<c.length;++m){l=c[m]
k=(l&r)>>>0
l=A.f([],o)
for(j=a+m,i=0;i<a1;++i){h=d.aY(b+i,j)?1:0
l.push(B.a.V(h,p-i))}g=B.e.bM(l,0,new A.ce())
switch(q){case 0:for(i=0;i<a1;++i){l=b+i
if((B.a.B(k,p-i)&1)>0)d.H(j,l,a0,n,!1)
else d.G(j,l,n,!1)}break
case 1:for(i=0;i<a1;++i){l=b+i
if((B.a.B(k,p-i)&1)>0)d.G(j,l,n,!1)
else d.H(j,l,a0,n,!1)}break
case 3:for(i=0;i<a1;++i){f=p-i
if((B.a.B(k,f)&1)>0&&(B.a.b3(g,f)&1)===0)d.H(j,b+i,a0,n,!1)}break
case 2:for(i=0;i<a1;++i)if((B.a.B(k,p-i)&1)>0)d.H(j,b+i,a0,n,!1)
break
case 4:for(e=(k&g)>>>0,i=0;i<a1;++i)if((B.a.B(e,p-i)&1)>0)d.H(j,b+i,a0,n,!1)
break
case 5:for(e=(k&g)>>>0,i=0;i<a1;++i)if((B.a.B(e,p-i)&1)>0)d.G(j,b+i,n,!1)
break
case 6:for(e=(k&g)>>>0,i=0;i<a1;++i)if((B.a.B(e,p-i)&1)===0)d.G(j,b+i,n,!1)
break
case 7:for(e=(k&g)>>>0,i=0;i<a1;++i){l=b+i
if((B.a.B(e,p-i)&1)===0)d.G(j,l,n,!1)
else d.H(j,l,a0,n,!1)}break}}d.ab()},
aZ(a,b,c,d){this.br(d.a,d.b,b,a,8,c,!0,!1,!1)},
bU(a,b,c){return this.aZ(a,b,B.k,c)},
b2(a){var s,r,q,p,o,n,m,l,k=this,j=k.b
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
o[n]=0}}k.a9()
j=k.x
r=j.getContext("2d")
if(r==null)r=A.J(r)
r.save()
r.beginPath()
q=k.e
r.drawImage(k.w,0,-a*q)
r.fillStyle=k.r
r.fillRect(0,s*q,j.width,a*q)
r.restore()
k.ab()},
T(){var s=this.w
s.style.opacity="1.0"
s.focus()},
J(){var s=this.w,r=s.style
r.opacity="0.5"
s.blur()}}
A.cf.prototype={
$0(){this.a.z=!0},
$S:1}
A.cg.prototype={
$0(){this.a.z=!1},
$S:1}
A.ch.prototype={
$0(){this.a.T()},
$S:1}
A.ci.prototype={
$0(){this.a.J()},
$S:1}
A.ce.prototype={
$2(a,b){return(a|b)>>>0},
$S:17}
A.aM.prototype={
aI(){return"State."+this.b}}
A.cq.prototype={
b7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,a0,a1){var s,r=this,q=new A.cE(r),p=new A.cD()
r.cy=l
s=r.f
s.tabIndex=-1
s.onfocus=A.b7(new A.cs(r))
s.onblur=A.b7(new A.ct(r))
s.onkeydown=A.aj(new A.cu(r,p,new A.cC(r)))
s.onclick=A.aj(new A.cv(r,q,o))
r.ay=o
s.onmouseup=A.aj(new A.cw(r,q))
r.ch=a0
s.onmousemove=A.aj(new A.cx(r,q))
r.CW=n
s.onmouseenter=A.aj(new A.cy(r,q))
r.cx=a1
s.onmouseleave=A.aj(new A.cz(r,q))
r.db=m
s.onkeyup=A.aj(new A.cA(r,p))
A.fJ(new A.bj(3e5),new A.cB(new A.bZ(new ($.f8())(r))))
r.J()
r.a5(0)},
gao(){var s=this.w
s===$&&A.K()
return s.gao()},
gam(){var s=this.w
s===$&&A.K()
return s.gam()},
al(a,b){return new A.C(B.a.j(a,this.a),B.a.j(b,this.b))},
aK(){var s=this,r=s.dy,q=s.x,p=q.c
if(!(p>=0&&p<r.length))return A.b(r,p)
p=r[p]
q=q.d
if(!(q>=0&&q<p.length))return A.b(p,q)
s.fr.I(0,p[q])
s.bG()
s.fy=!1},
aR(a){var s,r,q,p,o,n,m,l,k,j
for(s=this.fr,r=A.fT(s,s.r,s.$ti.c),q=this.w,p=this.fx,o=r.$ti.c;r.n();){n=r.d
if(n==null)n=o.a(n)
m=n.a
l=n.b
if(p.S(n.c)){k=p.U(0,n.c)
k.toString
j=k}else j=$.eY()
q===$&&A.K()
n=n.d
q.aZ(n,j,B.k,new A.C(m*10,l*8))}if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.aL()}},
bG(){return this.aR(null)},
az(a,b){var s,r=this.al(b,a)
b=r.a
a=r.b
s=this.dy
if(!(b>=0&&b<s.length))return A.b(s,b)
s=s[b]
if(!(a>=0&&a<s.length))return A.b(s,a)
return s[a].c},
D(){var s,r=this.x
r.sK(0)
s=r.c
if(s===this.a-1)this.a7()
else r.c=B.a.j(s+1,r.a)},
a7(){var s,r,q,p,o,n,m,l,k,j,i=this
for(s=A.eb(1,t.z),s=s.gt(s),r=i.w,q=i.b,p=i.dy,o=i.a-1;s.n();){s.gp()
for(n=0;n<o;n=m)for(m=n+1,l=0;l<q;++l){k=p.length
if(!(n<k))return A.b(p,n)
j=p[n]
if(!(l<j.length))return A.b(j,l)
j=j[l]
if(!(m<k))return A.b(p,m)
k=p[m]
if(!(l<k.length))return A.b(k,l)
k=k[l]
j.c=k.c
j.d=k.d}for(l=0;l<q;++l){if(!(o>=0&&o<p.length))return A.b(p,o)
k=p[o]
if(!(l<k.length))return A.b(k,l)
k=k[l]
k.c=" "
k.d="white"}r===$&&A.K()
r.b2(10)}},
a6(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=e==null?h.x.c:e,f=h.al(g,c==null?h.x.d:c)
g=h.x
s=g.a
g.c=B.a.j(f.a,s)
g.sK(f.b)
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
o.I(0,i)
if(e===n&&c===m){h.a7()
g.c=B.a.j(g.c-1,s)}g.sK(g.d+1)}h.aR(null)
if(d)h.D()},
bS(a,b,c){return this.a6(a,b,null,c,null)},
av(a,b){return this.a6(a,null,null,b,null)},
E(a,b){return this.a6(a,b,null,!0,null)},
aX(a){return this.a6(a,null,null,!0,null)},
a5(a){var s,r,q,p,o=this,n=o.b,m=o.a
for(s=o.dy,r=0;r<m;++r)for(q=0;q<n;++q){if(!(r<s.length))return A.b(s,r)
p=s[r]
if(!(q<p.length))return A.b(p,q)
p=p[q]
p.c=" "
p.d="white"}s=o.w
s===$&&A.K()
s.aT(0,m*10,0,0,n*8)
s=o.x
s.c=0%s.a
s.sK(0)},
bs(a,b,c){var s=this.w
s===$&&A.K()
s.bU("white",b,new A.C(c*10,a*8))},
T(){return this.gao().$0()},
J(){return this.gam().$0()}}
A.cE.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.w
i===$&&A.K()
s=J.e3(a.offsetX)
r=Math.max(Math.min(B.a.A(J.e3(a.offsetY)-1,i.e),i.b-1),0)
q=Math.max(Math.min(B.a.A(s-1,i.d),i.c-1),0)
p=B.a.C(r,10)
o=B.a.C(q,8)
n=j.az(o,p)
m=j.al(p,o)
l=m.a
k=m.b
j=j.dy
if(!(l>=0&&l<j.length))return A.b(j,l)
j=j[l]
if(!(k>=0&&k<j.length))return A.b(j,k)
return new A.aa(p,o,n,j[k].d,r,q,i.aY(q,r))},
$S:18}
A.cD.prototype={
$1(a){return new A.a8()},
$S:19}
A.cC.prototype={
$0(){var s,r,q,p,o,n=this.a,m=n.a,l=n.b,k=new A.ad(m,l)
k.sq(n.y.gq())
s=A.f([],t.s)
for(r=n.z,q=r.b;p=k.c,o=k.d,p*l+o<r.c*q+r.d;p=k.c*l+k.d+1,k.c=B.a.j(B.a.A(p,l),m),k.d=B.a.j(p,l))s.push(n.az(o,p))
return B.e.bQ(s,"")},
$S:20}
A.cs.prototype={
$0(){var s=this.a.w
s===$&&A.K()
s.T()},
$S:1}
A.ct.prototype={
$0(){var s=this.a.w
s===$&&A.K()
s.J()},
$S:1}
A.cu.prototype={
$1(a){var s,r,q,p
a.preventDefault()
s=this.a
switch(s.dx.a){case 0:break
case 1:r=s.at
if(r.d!=null){r.I(0,this.b.$1(a))
s.dx=B.d}break
case 2:s.aK()
A:{q=a.keyCode
if(13===q){r=s.as
if(r.d!=null){r.I(0,J.fd(this.c.$0()))
s.D()
s.dx=B.d}break A}if(8===q){r=s.x
if(r.gq()>s.y.gq()){r.sq(r.gq()-1)
s.av(" ",!1)
r.sq(r.gq()-1)}break A}p=a.key
if(p.length===1&&s.x.gq()<s.z.gq())s.av(p,!1)}break
case 3:break}},
$S:2}
A.cv.prototype={
$1(a){var s
a.preventDefault()
s=this.a
if(s.dx===B.dF&&s.ax.d!=null){s.ax.I(0,this.b.$1(a))
s.dx=B.d}},
$S:2}
A.cw.prototype={
$1(a){a.preventDefault()},
$S:2}
A.cx.prototype={
$1(a){a.preventDefault()},
$S:2}
A.cy.prototype={
$1(a){a.preventDefault()},
$S:2}
A.cz.prototype={
$1(a){a.preventDefault()},
$S:2}
A.cA.prototype={
$1(a){a.preventDefault()},
$S:2}
A.cB.prototype={
$1(a){var s,r,q=this.a.a.deref()
if(q==null){a.a4()
return}s=q.w
s===$&&A.K()
if(s.z&&J.ao(v.G.document.activeElement,s.w)&&q.dx===B.m)if(q.fy)q.aK()
else{s=q.x
r=s.c
q.bs(s.d,$.eX(),r)
q.fy=!0}},
$S:21}
A.dt.prototype={
$0(){var s,r,q,p=this.a
p.a5(0)
for(s="   _____ _   _    _____     _           _\n  :     : :_: :  :   __:___: :_ ___ ___: :\n  :  :  : : . :  :__   :  _:   : . : . : :\n  :_____:_:___:  :_____:___:_:_:___:___:_:\n  \n  Welcome to Old School, a library for adding\n  old school terminals to your html documents.\n  \n  Input 'help' for help.\n      ".split("\n"),r=s.length,q=0;q<r;++q)p.E(s[q],"lightgreen")},
$S:0}
A.dp.prototype={
$0(){var s,r,q,p
for(s="  Commands\n  --------\n  \n  reset        Resets this demo.\n  help         Shows this information.\n  list         Lists the demos available.\n  info [demo]  Gives a description of [demo].\n  load [demo]  Loads [demo] into this page.\n      ".split("\n"),r=s.length,q=this.a,p=0;p<r;++p)q.E(s[p],"lightgreen")},
$S:0}
A.dr.prototype={
$0(){var s,r,q=t.s,p=A.f([" "," Demos"," -----"," "],q)
q=A.f([],q)
for(s=this.a,s=new A.bs(s,s.r,s.e);s.n();)q.push(" - "+s.d)
B.e.aS(p,q)
p.push(" ")
q=p.length
s=this.b
r=0
for(;r<p.length;p.length===q||(0,A.c0)(p),++r)s.E(p[r],"lightgreen")},
$S:0}
A.dq.prototype={
$1(a){var s,r,q,p,o=this.a
if(o.S(a)){s=t.s
r=A.f([" "],s)
s=A.f([],s)
for(o=o.U(0,a),q=o.length,p=0;p<o.length;o.length===q||(0,A.c0)(o),++p)s.push(" "+o[p])
B.e.aS(r,s)
r.push(" ")
o=r.length
s=this.b
p=0
for(;p<r.length;r.length===o||(0,A.c0)(r),++p)s.E(r[p],"lightgreen")}else{o=this.b
o.D()
o.E(" No demo called '"+a+"' found.","orange")
o.aX(" Input `list` to see available demos.")
o.D()}},
$S:7}
A.ds.prototype={
$1(a){var s
if(this.a.S(a))v.G.window.open(a+".html","_self")
else{s=this.b
s.D()
s.E(" No demo called '"+a+"' found.","orange")
s.aX(" Input `list` to see available demos.")
s.D()}},
$S:7};(function aliases(){var s=J.M.prototype
s.b5=s.h})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._static_2,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u
s(A,"i9","fO",3)
s(A,"ia","fP",3)
s(A,"ib","fQ",3)
r(A,"eI","i3",0)
s(A,"ic","hV",5)
q(A,"ie","hX",6)
r(A,"id","hW",0)
p(A.m.prototype,"gaF","bh",6)
o(A.aR.prototype,"gbp","bq",0)
s(A,"eL","fS",22)
var n
o(n=A.bG.prototype,"gao","T",0)
o(n,"gam","J",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.d,null)
q(A.d,[A.dC,J.bn,A.aJ,J.be,A.k,A.T,A.cj,A.U,A.a9,A.bk,A.at,A.ai,A.bi,A.cG,A.cb,A.as,A.b_,A.aC,A.c8,A.bs,A.c6,A.d5,A.A,A.bT,A.bY,A.b1,A.bL,A.y,A.af,A.bO,A.bN,A.O,A.m,A.bM,A.bR,A.bU,A.aR,A.bW,A.cJ,A.aK,A.d4,A.ah,A.l,A.bZ,A.bj,A.cR,A.bC,A.aL,A.cS,A.c5,A.t,A.bX,A.bH,A.S,A.cd,A.a8,A.aa,A.ad,A.bG,A.cq])
q(J.bn,[J.bp,J.av,J.ax,J.aw,J.ay,J.a7,J.V])
q(J.ax,[J.M,J.o,A.ab,A.aF])
q(J.M,[J.bD,J.Y,J.L])
r(J.bo,A.aJ)
r(J.c7,J.o)
q(J.a7,[J.au,J.bq])
q(A.k,[A.aA,A.H,A.br,A.bJ,A.bF,A.bS,A.bf,A.E,A.aN,A.bI,A.X,A.bh])
q(A.T,[A.c2,A.c3,A.cp,A.dj,A.dl,A.cO,A.cN,A.db,A.d1,A.cn,A.cm,A.cM,A.cL,A.cE,A.cD,A.cu,A.cv,A.cw,A.cx,A.cy,A.cz,A.cA,A.cB,A.dq,A.ds])
q(A.c2,[A.dv,A.cP,A.cQ,A.d8,A.d7,A.cT,A.cY,A.cX,A.cV,A.cU,A.d0,A.d_,A.cZ,A.co,A.cl,A.d6,A.dd,A.cK,A.de,A.cf,A.cg,A.ch,A.ci,A.cC,A.cs,A.ct,A.dt,A.dp,A.dr])
r(A.aq,A.U)
q(A.aq,[A.aB,A.ar])
r(A.bV,A.ai)
r(A.C,A.bV)
r(A.bl,A.bi)
r(A.aH,A.H)
q(A.cp,[A.ck,A.ap])
r(A.W,A.aC)
r(A.az,A.W)
q(A.c3,[A.dk,A.dc,A.df,A.d2,A.c9,A.ce])
q(A.aF,[A.bt,A.ac])
q(A.ac,[A.aU,A.aW])
r(A.aV,A.aU)
r(A.aD,A.aV)
r(A.aX,A.aW)
r(A.aE,A.aX)
q(A.aD,[A.bu,A.bv])
q(A.aE,[A.bw,A.bx,A.by,A.bz,A.bA,A.aG,A.bB])
r(A.b2,A.bS)
r(A.b0,A.af)
r(A.aQ,A.b0)
r(A.ag,A.aQ)
r(A.bP,A.bO)
r(A.aP,A.bP)
r(A.aO,A.bN)
r(A.bQ,A.bR)
r(A.aZ,A.aK)
r(A.aT,A.aZ)
q(A.E,[A.aI,A.bm])
r(A.aS,A.aB)
r(A.cr,A.cd)
q(A.cR,[A.ca,A.aM])
s(A.aU,A.l)
s(A.aV,A.at)
s(A.aW,A.l)
s(A.aX,A.at)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{a:"int",r:"double",eQ:"num",u:"String",eJ:"bool",t:"Null",h:"List",d:"Object",iG:"Map",j:"JSObject"},mangledNames:{},types:["~()","t()","t(j)","~(~())","t(@)","~(@)","~(d,B)","~(u)","G<~>()","@(@)","@(@,u)","@(u)","t(~())","t(@,B)","~(a,@)","t(d,B)","~(d?,d?)","a(a,a)","aa(j)","a8(j)","u()","~(cF)","a(a)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.C&&a.b(c.a)&&b.b(c.b)}}
A.h9(v.typeUniverse,JSON.parse('{"bD":"M","Y":"M","L":"M","iH":"ab","bp":{"e":[]},"av":{"e":[]},"ax":{"j":[]},"M":{"j":[]},"o":{"h":["1"],"j":[]},"bo":{"aJ":[]},"c7":{"o":["1"],"h":["1"],"j":[]},"a7":{"r":[]},"au":{"r":[],"a":[],"e":[]},"bq":{"r":[],"e":[]},"V":{"u":[],"e":[]},"aA":{"k":[]},"aq":{"U":["1"]},"aB":{"U":["1"]},"ar":{"U":["1"]},"aH":{"H":[],"k":[]},"br":{"k":[]},"bJ":{"k":[]},"b_":{"B":[]},"bF":{"k":[]},"W":{"aC":["1","2"]},"az":{"W":["1","2"],"aC":["1","2"]},"ab":{"j":[],"e":[]},"aF":{"j":[]},"bt":{"j":[],"e":[]},"ac":{"v":["1"],"j":[]},"aD":{"l":["r"],"h":["r"],"v":["r"],"j":[]},"aE":{"l":["a"],"h":["a"],"v":["a"],"j":[]},"bu":{"l":["r"],"h":["r"],"v":["r"],"j":[],"e":[],"l.E":"r"},"bv":{"l":["r"],"h":["r"],"v":["r"],"j":[],"e":[],"l.E":"r"},"bw":{"l":["a"],"h":["a"],"v":["a"],"j":[],"e":[],"l.E":"a"},"bx":{"l":["a"],"h":["a"],"v":["a"],"j":[],"e":[],"l.E":"a"},"by":{"l":["a"],"h":["a"],"v":["a"],"j":[],"e":[],"l.E":"a"},"bz":{"l":["a"],"h":["a"],"v":["a"],"j":[],"e":[],"l.E":"a"},"bA":{"cI":[],"l":["a"],"h":["a"],"v":["a"],"j":[],"e":[],"l.E":"a"},"aG":{"l":["a"],"h":["a"],"v":["a"],"j":[],"e":[],"l.E":"a"},"bB":{"l":["a"],"h":["a"],"v":["a"],"j":[],"e":[],"l.E":"a"},"bS":{"k":[]},"b2":{"H":[],"k":[]},"b1":{"cF":[]},"y":{"k":[]},"ag":{"af":["1"]},"aO":{"bN":["1"]},"m":{"G":["1"]},"aQ":{"af":["1"]},"b0":{"af":["1"]},"aT":{"aK":["1"]},"aZ":{"aK":["1"]},"bf":{"k":[]},"H":{"k":[]},"E":{"k":[]},"aI":{"k":[]},"bm":{"k":[]},"aN":{"k":[]},"bI":{"k":[]},"X":{"k":[]},"bh":{"k":[]},"bC":{"k":[]},"aL":{"k":[]},"aS":{"aB":["1"],"U":["1"]},"bX":{"B":[]},"fr":{"h":["a"]},"fM":{"h":["a"]},"fL":{"h":["a"]},"fp":{"h":["a"]},"fK":{"h":["a"]},"fq":{"h":["a"]},"cI":{"h":["a"]},"fn":{"h":["r"]},"fo":{"h":["r"]}}'))
A.h8(v.typeUniverse,JSON.parse('{"aq":1,"bk":1,"at":1,"bi":2,"bs":1,"ac":1,"aQ":1,"bP":1,"bO":1,"b0":1,"bR":1,"bQ":1,"bU":1,"aR":1,"bW":1,"aZ":1,"bZ":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.dh
return{o:s("S"),Q:s("k"),Z:s("iE"),U:s("o<S>"),G:s("o<h<S>>"),f:s("o<d>"),s:s("o<u>"),w:s("o<cI>"),b:s("o<@>"),t:s("o<a>"),T:s("av"),m:s("j"),g:s("L"),E:s("v<@>"),V:s("a8"),a:s("h<u>"),j:s("h<@>"),q:s("aa"),P:s("t"),K:s("d"),L:s("iI"),F:s("+()"),l:s("B"),N:s("u"),p:s("cF"),R:s("e"),_:s("H"),A:s("Y"),c:s("m<@>"),h:s("m<a>"),D:s("m<~>"),y:s("eJ"),i:s("r"),z:s("@"),v:s("@(d)"),C:s("@(d,B)"),S:s("a"),O:s("G<t>?"),B:s("j?"),X:s("d?"),x:s("u?"),u:s("eJ?"),I:s("r?"),J:s("a?"),M:s("eQ?"),n:s("eQ"),H:s("~"),d:s("~(d)"),k:s("~(d,B)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.x=J.bn.prototype
B.e=J.o.prototype
B.a=J.au.prototype
B.y=J.a7.prototype
B.f=J.V.prototype
B.z=J.L.prototype
B.A=J.ax.prototype
B.l=J.bD.prototype
B.h=J.Y.prototype
B.n=new A.bk()
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

B.v=new A.bC()
B.c=new A.cj()
B.b=new A.cJ()
B.w=new A.bX()
B.d_=s([126,129,165,129,189,153,129,126],t.t)
B.a1=s([126,255,219,255,195,231,255,126],t.t)
B.dw=s([108,254,254,254,124,56,16,0],t.t)
B.bX=s([16,56,124,254,124,56,16,0],t.t)
B.aV=s([56,124,56,254,254,124,56,124],t.t)
B.b6=s([16,16,56,124,254,124,56,124],t.t)
B.ap=s([0,0,24,60,60,24,0,0],t.t)
B.as=s([255,255,231,195,195,231,255,255],t.t)
B.aE=s([0,60,102,66,66,102,60,0],t.t)
B.cK=s([255,195,153,189,189,153,195,255],t.t)
B.dv=s([15,7,15,125,204,204,204,120],t.t)
B.du=s([60,102,102,102,60,24,126,24],t.t)
B.cH=s([63,51,63,48,48,112,240,224],t.t)
B.L=s([127,99,127,99,99,103,230,192],t.t)
B.Q=s([153,90,60,231,231,60,90,153],t.t)
B.am=s([128,224,248,254,248,224,128,0],t.t)
B.bs=s([2,14,62,254,62,14,2,0],t.t)
B.ca=s([24,60,126,24,24,126,60,24],t.t)
B.c6=s([102,102,102,102,102,0,102,0],t.t)
B.cg=s([127,219,219,123,27,27,27,0],t.t)
B.ch=s([62,99,56,108,108,56,204,120],t.t)
B.bG=s([0,0,0,0,126,126,126,0],t.t)
B.bJ=s([24,60,126,24,126,60,24,255],t.t)
B.G=s([24,60,126,24,24,24,24,0],t.t)
B.d4=s([24,24,24,24,126,60,24,0],t.t)
B.cY=s([0,24,12,254,12,24,0,0],t.t)
B.aj=s([0,48,96,254,96,48,0,0],t.t)
B.bO=s([0,0,192,192,192,254,0,0],t.t)
B.bl=s([0,36,102,255,102,36,0,0],t.t)
B.a_=s([0,24,60,126,255,255,0,0],t.t)
B.bK=s([0,255,255,126,60,24,0,0],t.t)
B.aQ=s([0,0,0,0,0,0,0,0],t.t)
B.bt=s([48,120,120,48,48,0,48,0],t.t)
B.O=s([108,108,108,0,0,0,0,0],t.t)
B.ad=s([108,108,254,108,254,108,108,0],t.t)
B.bS=s([48,124,192,120,12,248,48,0],t.t)
B.F=s([0,198,204,24,48,102,198,0],t.t)
B.ct=s([56,108,56,118,220,204,118,0],t.t)
B.ac=s([96,96,192,0,0,0,0,0],t.t)
B.K=s([24,48,96,96,96,48,24,0],t.t)
B.bp=s([96,48,24,24,24,48,96,0],t.t)
B.ck=s([0,102,60,255,60,102,0,0],t.t)
B.dD=s([0,48,48,252,48,48,0,0],t.t)
B.bU=s([0,0,0,0,0,48,48,96],t.t)
B.bk=s([0,0,0,252,0,0,0,0],t.t)
B.c8=s([0,0,0,0,0,48,48,0],t.t)
B.V=s([6,12,24,48,96,192,128,0],t.t)
B.aY=s([124,198,206,222,246,230,124,0],t.t)
B.cb=s([48,112,48,48,48,48,252,0],t.t)
B.bQ=s([120,204,12,56,96,204,252,0],t.t)
B.dy=s([120,204,12,56,12,204,120,0],t.t)
B.br=s([28,60,108,204,254,12,30,0],t.t)
B.cZ=s([252,192,248,12,12,204,120,0],t.t)
B.df=s([56,96,192,248,204,204,120,0],t.t)
B.bR=s([252,204,12,24,48,48,48,0],t.t)
B.cn=s([120,204,204,120,204,204,120,0],t.t)
B.b4=s([120,204,204,124,12,24,112,0],t.t)
B.cS=s([0,48,48,0,0,48,48,0],t.t)
B.aH=s([0,48,48,0,0,48,48,96],t.t)
B.bq=s([24,48,96,192,96,48,24,0],t.t)
B.bf=s([0,0,252,0,0,252,0,0],t.t)
B.ar=s([96,48,24,12,24,48,96,0],t.t)
B.ah=s([120,204,12,24,48,0,48,0],t.t)
B.db=s([124,198,222,222,222,192,120,0],t.t)
B.c2=s([48,120,204,204,252,204,204,0],t.t)
B.aB=s([252,102,102,124,102,102,252,0],t.t)
B.a3=s([60,102,192,192,192,102,60,0],t.t)
B.W=s([248,108,102,102,102,108,248,0],t.t)
B.a9=s([254,98,104,120,104,98,254,0],t.t)
B.ce=s([254,98,104,120,104,96,240,0],t.t)
B.af=s([60,102,192,192,206,102,62,0],t.t)
B.ai=s([204,204,204,252,204,204,204,0],t.t)
B.cC=s([120,48,48,48,48,48,120,0],t.t)
B.bE=s([30,12,12,12,204,204,120,0],t.t)
B.bw=s([230,102,108,120,108,102,230,0],t.t)
B.bv=s([240,96,96,96,98,102,254,0],t.t)
B.aC=s([198,238,254,254,214,198,198,0],t.t)
B.N=s([198,230,246,222,206,198,198,0],t.t)
B.cM=s([56,108,198,198,198,108,56,0],t.t)
B.ba=s([252,102,102,124,96,96,240,0],t.t)
B.cw=s([120,204,204,204,220,120,28,0],t.t)
B.E=s([252,102,102,124,108,102,230,0],t.t)
B.a6=s([120,204,224,112,28,204,120,0],t.t)
B.dp=s([252,180,48,48,48,48,120,0],t.t)
B.az=s([204,204,204,204,204,204,252,0],t.t)
B.S=s([204,204,204,204,204,120,48,0],t.t)
B.cF=s([198,198,198,214,254,238,198,0],t.t)
B.cz=s([198,198,108,56,56,108,198,0],t.t)
B.U=s([204,204,204,120,48,48,120,0],t.t)
B.I=s([254,198,140,24,50,102,254,0],t.t)
B.bm=s([120,96,96,96,96,96,120,0],t.t)
B.cr=s([192,96,48,24,12,6,2,0],t.t)
B.bo=s([120,24,24,24,24,24,120,0],t.t)
B.de=s([16,56,108,198,0,0,0,0],t.t)
B.D=s([0,0,0,0,0,0,0,255],t.t)
B.aA=s([48,48,24,0,0,0,0,0],t.t)
B.d5=s([0,0,120,12,124,204,118,0],t.t)
B.c5=s([224,96,96,124,102,102,220,0],t.t)
B.cy=s([0,0,120,204,192,204,120,0],t.t)
B.aW=s([28,12,12,124,204,204,118,0],t.t)
B.dh=s([0,0,120,204,252,192,120,0],t.t)
B.aF=s([56,108,96,240,96,96,240,0],t.t)
B.cv=s([0,0,118,204,204,124,12,248],t.t)
B.aq=s([224,96,108,118,102,102,230,0],t.t)
B.cl=s([48,0,112,48,48,48,120,0],t.t)
B.bz=s([12,0,12,12,12,204,204,120],t.t)
B.b2=s([224,96,102,108,120,108,230,0],t.t)
B.bB=s([112,48,48,48,48,48,120,0],t.t)
B.bj=s([0,0,204,254,254,214,198,0],t.t)
B.bC=s([0,0,248,204,204,204,204,0],t.t)
B.b5=s([0,0,120,204,204,204,120,0],t.t)
B.dl=s([0,0,220,102,102,124,96,240],t.t)
B.di=s([0,0,118,204,204,124,12,30],t.t)
B.bg=s([0,0,220,118,102,96,240,0],t.t)
B.cP=s([0,0,124,192,120,12,248,0],t.t)
B.cI=s([16,48,124,48,48,52,24,0],t.t)
B.c_=s([0,0,204,204,204,204,118,0],t.t)
B.aU=s([0,0,204,204,204,120,48,0],t.t)
B.b9=s([0,0,198,214,254,254,108,0],t.t)
B.bx=s([0,0,198,108,56,108,198,0],t.t)
B.ds=s([0,0,204,204,204,124,12,248],t.t)
B.d3=s([0,0,252,152,48,100,252,0],t.t)
B.b_=s([28,48,48,224,48,48,28,0],t.t)
B.cO=s([24,24,24,0,24,24,24,0],t.t)
B.au=s([224,48,48,28,48,48,224,0],t.t)
B.dC=s([118,220,0,0,0,0,0,0],t.t)
B.aT=s([0,16,56,108,198,198,254,0],t.t)
B.al=s([120,204,192,204,120,24,12,120],t.t)
B.d1=s([0,204,0,204,204,204,126,0],t.t)
B.dr=s([28,0,120,204,252,192,120,0],t.t)
B.bT=s([126,195,60,6,62,102,63,0],t.t)
B.a8=s([204,0,120,12,124,204,126,0],t.t)
B.aX=s([224,0,120,12,124,204,126,0],t.t)
B.Z=s([48,48,120,12,124,204,126,0],t.t)
B.bc=s([0,0,120,192,192,120,12,56],t.t)
B.da=s([126,195,60,102,126,96,60,0],t.t)
B.aD=s([204,0,120,204,252,192,120,0],t.t)
B.cQ=s([224,0,120,204,252,192,120,0],t.t)
B.d2=s([204,0,112,48,48,48,120,0],t.t)
B.cG=s([124,198,56,24,24,24,60,0],t.t)
B.aP=s([224,0,112,48,48,48,120,0],t.t)
B.dx=s([198,56,108,198,254,198,198,0],t.t)
B.cN=s([48,48,0,120,204,252,204,0],t.t)
B.bu=s([28,0,252,96,120,96,252,0],t.t)
B.dq=s([0,0,127,12,127,204,127,0],t.t)
B.aI=s([62,108,204,254,204,204,206,0],t.t)
B.dj=s([120,204,0,120,204,204,120,0],t.t)
B.a4=s([0,204,0,120,204,204,120,0],t.t)
B.dz=s([0,224,0,120,204,204,120,0],t.t)
B.aG=s([120,204,0,204,204,204,126,0],t.t)
B.cJ=s([0,224,0,204,204,204,126,0],t.t)
B.ao=s([0,204,0,204,204,124,12,248],t.t)
B.aa=s([195,24,60,102,102,60,24,0],t.t)
B.cW=s([204,0,204,204,204,204,120,0],t.t)
B.P=s([24,24,126,192,192,126,24,24],t.t)
B.ax=s([56,108,100,240,96,230,252,0],t.t)
B.aR=s([204,204,120,252,48,252,48,48],t.t)
B.d6=s([248,204,204,250,198,207,198,199],t.t)
B.bF=s([14,27,24,60,24,24,216,112],t.t)
B.at=s([28,0,120,12,124,204,126,0],t.t)
B.c4=s([56,0,112,48,48,48,120,0],t.t)
B.aw=s([0,28,0,120,204,204,120,0],t.t)
B.co=s([0,28,0,204,204,204,126,0],t.t)
B.aM=s([0,248,0,248,204,204,204,0],t.t)
B.cE=s([252,0,204,236,252,220,204,0],t.t)
B.a5=s([60,108,108,62,0,126,0,0],t.t)
B.c1=s([56,108,108,56,0,124,0,0],t.t)
B.cX=s([48,0,48,96,192,204,120,0],t.t)
B.aO=s([0,0,0,252,192,192,0,0],t.t)
B.av=s([0,0,0,252,12,12,0,0],t.t)
B.cR=s([195,198,204,222,51,102,204,15],t.t)
B.an=s([195,198,204,219,55,111,207,3],t.t)
B.bI=s([24,24,0,24,24,24,24,0],t.t)
B.bH=s([0,51,102,204,102,51,0,0],t.t)
B.b1=s([0,204,102,51,102,204,0,0],t.t)
B.cq=s([34,136,34,136,34,136,34,136],t.t)
B.dk=s([85,170,85,170,85,170,85,170],t.t)
B.bA=s([219,119,219,238,219,119,219,238],t.t)
B.aS=s([24,24,24,24,24,24,24,24],t.t)
B.aN=s([24,24,24,24,248,24,24,24],t.t)
B.bP=s([24,24,248,24,248,24,24,24],t.t)
B.dB=s([54,54,54,54,246,54,54,54],t.t)
B.cc=s([0,0,0,0,254,54,54,54],t.t)
B.aJ=s([0,0,248,24,248,24,24,24],t.t)
B.a2=s([54,54,246,6,246,54,54,54],t.t)
B.ci=s([54,54,54,54,54,54,54,54],t.t)
B.c0=s([0,0,254,6,246,54,54,54],t.t)
B.cm=s([54,54,246,6,254,0,0,0],t.t)
B.ag=s([54,54,54,54,254,0,0,0],t.t)
B.T=s([24,24,248,24,248,0,0,0],t.t)
B.Y=s([0,0,0,0,248,24,24,24],t.t)
B.R=s([24,24,24,24,31,0,0,0],t.t)
B.bN=s([24,24,24,24,255,0,0,0],t.t)
B.be=s([0,0,0,0,255,24,24,24],t.t)
B.cV=s([24,24,24,24,31,24,24,24],t.t)
B.bL=s([0,0,0,0,255,0,0,0],t.t)
B.cj=s([24,24,24,24,255,24,24,24],t.t)
B.cu=s([24,24,31,24,31,24,24,24],t.t)
B.b3=s([54,54,54,54,55,54,54,54],t.t)
B.dg=s([54,54,55,48,63,0,0,0],t.t)
B.d9=s([0,0,63,48,55,54,54,54],t.t)
B.by=s([54,54,247,0,255,0,0,0],t.t)
B.bn=s([0,0,255,0,247,54,54,54],t.t)
B.aL=s([54,54,55,48,55,54,54,54],t.t)
B.aK=s([0,0,255,0,255,0,0,0],t.t)
B.dt=s([54,54,247,0,247,54,54,54],t.t)
B.cA=s([24,24,255,0,255,0,0,0],t.t)
B.B=s([54,54,54,54,255,0,0,0],t.t)
B.dm=s([0,0,255,0,255,24,24,24],t.t)
B.bV=s([0,0,0,0,255,54,54,54],t.t)
B.cd=s([54,54,54,54,63,0,0,0],t.t)
B.bi=s([24,24,31,24,31,0,0,0],t.t)
B.c7=s([0,0,31,24,31,24,24,24],t.t)
B.cx=s([0,0,0,0,63,54,54,54],t.t)
B.cD=s([54,54,54,54,255,54,54,54],t.t)
B.bD=s([24,24,255,24,255,24,24,24],t.t)
B.d7=s([24,24,24,24,248,0,0,0],t.t)
B.aZ=s([0,0,0,0,31,24,24,24],t.t)
B.bW=s([255,255,255,255,255,255,255,255],t.t)
B.bZ=s([0,0,0,0,255,255,255,255],t.t)
B.b8=s([240,240,240,240,240,240,240,240],t.t)
B.cf=s([15,15,15,15,15,15,15,15],t.t)
B.cU=s([255,255,255,255,0,0,0,0],t.t)
B.dA=s([0,0,118,220,200,220,118,0],t.t)
B.dc=s([0,120,204,248,204,248,192,192],t.t)
B.ae=s([0,252,204,192,192,192,192,0],t.t)
B.bY=s([0,254,108,108,108,108,108,0],t.t)
B.d8=s([252,204,96,48,96,204,252,0],t.t)
B.bb=s([0,0,126,216,216,216,112,0],t.t)
B.bh=s([0,102,102,102,102,124,96,192],t.t)
B.cs=s([0,118,220,24,24,24,24,0],t.t)
B.a7=s([252,48,120,204,204,120,48,252],t.t)
B.ay=s([56,108,198,254,198,108,56,0],t.t)
B.ab=s([56,108,198,198,108,108,238,0],t.t)
B.C=s([28,48,24,124,204,204,120,0],t.t)
B.dn=s([0,0,126,219,219,126,0,0],t.t)
B.bd=s([6,12,126,219,219,126,96,192],t.t)
B.a0=s([56,96,192,248,192,96,56,0],t.t)
B.c9=s([120,204,204,204,204,204,204,0],t.t)
B.cB=s([0,252,0,252,0,252,0,0],t.t)
B.X=s([48,48,252,48,48,0,252,0],t.t)
B.b0=s([96,48,24,48,96,0,252,0],t.t)
B.cL=s([24,48,96,48,24,0,252,0],t.t)
B.b7=s([14,27,27,24,24,24,24,24],t.t)
B.d0=s([24,24,24,24,24,216,216,112],t.t)
B.c3=s([48,48,0,252,0,48,48,0],t.t)
B.H=s([0,118,220,0,118,220,0,0],t.t)
B.cp=s([56,108,108,56,0,0,0,0],t.t)
B.J=s([0,0,0,24,24,0,0,0],t.t)
B.dd=s([0,0,0,0,24,0,0,0],t.t)
B.M=s([15,12,12,12,236,108,60,28],t.t)
B.bM=s([120,108,108,108,108,0,0,0],t.t)
B.ak=s([112,24,48,96,120,0,0,0],t.t)
B.cT=s([0,0,60,60,60,60,0,0],t.t)
B.dE=new A.bl(["\u263a",B.d_,"\u263b",B.a1,"\u2665",B.dw,"\u2666",B.bX,"\u2663",B.aV,"\u2660",B.b6,"\u2022",B.ap,"\u25d8",B.as,"\u25cb",B.aE,"\u25d9",B.cK,"\u2642",B.dv,"\u2640",B.du,"\u266a",B.cH,"\u266b",B.L,"\u263c",B.Q,"\u25ba",B.am,"\u25c4",B.bs,"\u2195",B.ca,"\u203c",B.c6,"\xb6",B.cg,"\xa7",B.ch,"\u25ac",B.bG,"\u21a8",B.bJ,"\u2191",B.G,"\u2193",B.d4,"\u2192",B.cY,"\u2190",B.aj,"\u221f",B.bO,"\u2194",B.bl,"\u25b2",B.a_,"\u25bc",B.bK," ",B.aQ,"!",B.bt,'"',B.O,"#",B.ad,"$",B.bS,"%",B.F,"&",B.ct,"'",B.ac,"(",B.K,")",B.bp,"*",B.ck,"+",B.dD,",",B.bU,"-",B.bk,".",B.c8,"/",B.V,"0",B.aY,"1",B.cb,"2",B.bQ,"3",B.dy,"4",B.br,"5",B.cZ,"6",B.df,"7",B.bR,"8",B.cn,"9",B.b4,":",B.cS,";",B.aH,"<",B.bq,"=",B.bf,">",B.ar,"?",B.ah,"@",B.db,"A",B.c2,"B",B.aB,"C",B.a3,"D",B.W,"E",B.a9,"F",B.ce,"G",B.af,"H",B.ai,"I",B.cC,"J",B.bE,"K",B.bw,"L",B.bv,"M",B.aC,"N",B.N,"O",B.cM,"P",B.ba,"Q",B.cw,"R",B.E,"S",B.a6,"T",B.dp,"U",B.az,"V",B.S,"W",B.cF,"X",B.cz,"Y",B.U,"Z",B.I,"[",B.bm,"\\",B.cr,"]",B.bo,"^",B.de,"_",B.D,"`",B.aA,"a",B.d5,"b",B.c5,"c",B.cy,"d",B.aW,"e",B.dh,"f",B.aF,"g",B.cv,"h",B.aq,"i",B.cl,"j",B.bz,"k",B.b2,"l",B.bB,"m",B.bj,"n",B.bC,"o",B.b5,"p",B.dl,"q",B.di,"r",B.bg,"s",B.cP,"t",B.cI,"u",B.c_,"v",B.aU,"w",B.b9,"x",B.bx,"y",B.ds,"z",B.d3,"{",B.b_,"|",B.cO,"}",B.au,"~",B.dC,"\u2302",B.aT,"\xc7",B.al,"\xfc",B.d1,"\xe9",B.dr,"\xe2",B.bT,"\xe4",B.a8,"\xe0",B.aX,"\xe5",B.Z,"\xe7",B.bc,"\xea",B.da,"\xeb",B.aD,"\xe8",B.cQ,"\xef",B.d2,"\xee",B.cG,"\xec",B.aP,"\xc4",B.dx,"\xc5",B.cN,"\xc9",B.bu,"\xe6",B.dq,"\xc6",B.aI,"\xf4",B.dj,"\xf6",B.a4,"\xf2",B.dz,"\xfb",B.aG,"\xf9",B.cJ,"\xff",B.ao,"\xd6",B.aa,"\xdc",B.cW,"\xa2",B.P,"\xa3",B.ax,"\xa5",B.aR,"\u20a7",B.d6,"\u0192",B.bF,"\xe1",B.at,"\xed",B.c4,"\xf3",B.aw,"\xfa",B.co,"\xf1",B.aM,"\xd1",B.cE,"\xaa",B.a5,"\xba",B.c1,"\xbf",B.cX,"\u2310",B.aO,"\xac",B.av,"\xbd",B.cR,"\xbc",B.an,"\xa1",B.bI,"\xab",B.bH,"\xbb",B.b1,"\u2591",B.cq,"\u2592",B.dk,"\u2593",B.bA,"\u2502",B.aS,"\u2524",B.aN,"\u2561",B.bP,"\u2562",B.dB,"\u2556",B.cc,"\u2555",B.aJ,"\u2563",B.a2,"\u2551",B.ci,"\u2557",B.c0,"\u255d",B.cm,"\u255c",B.ag,"\u255b",B.T,"\u2510",B.Y,"\u2514",B.R,"\u2534",B.bN,"\u252c",B.be,"\u251c",B.cV,"\u2500",B.bL,"\u253c",B.cj,"\u255e",B.cu,"\u255f",B.b3,"\u255a",B.dg,"\u2554",B.d9,"\u2569",B.by,"\u2566",B.bn,"\u2560",B.aL,"\u2550",B.aK,"\u256c",B.dt,"\u2567",B.cA,"\u2568",B.B,"\u2564",B.dm,"\u2565",B.bV,"\u2559",B.cd,"\u2558",B.bi,"\u2552",B.c7,"\u2553",B.cx,"\u256b",B.cD,"\u256a",B.bD,"\u2518",B.d7,"\u250c",B.aZ,"\u2588",B.bW,"\u2584",B.bZ,"\u258c",B.b8,"\u2590",B.cf,"\u2580",B.cU,"\u03b1",B.dA,"\xdf",B.dc,"\u0393",B.ae,"\u03c0",B.bY,"\u03a3",B.d8,"\u03c3",B.bb,"\xb5",B.bh,"\u03c4",B.cs,"\u03a6",B.a7,"\u0398",B.ay,"\u03a9",B.ab,"\u03b4",B.C,"\u221e",B.dn,"\u03c6",B.bd,"\u03b5",B.a0,"\u2229",B.c9,"\u2261",B.cB,"\xb1",B.X,"\u2265",B.b0,"\u2264",B.cL,"\u2320",B.b7,"\u2321",B.d0,"\xf7",B.c3,"\u2248",B.H,"\xb0",B.cp,"\u2219",B.J,"\xb7",B.dd,"\u221a",B.M,"\u207f",B.bM,"\xb2",B.ak,"\u25a0",B.cT],A.dh("bl<u,h<a>>"))
B.k=new A.ca(0,"replace")
B.d=new A.aM(0,"ready")
B.m=new A.aM(2,"awaitingString")
B.dF=new A.aM(3,"awaitingMouseClick")
B.dG=A.D("iA")
B.dH=A.D("iB")
B.dI=A.D("fn")
B.dJ=A.D("fo")
B.dK=A.D("fp")
B.dL=A.D("fq")
B.dM=A.D("fr")
B.dN=A.D("d")
B.dO=A.D("fK")
B.dP=A.D("cI")
B.dQ=A.D("fL")
B.dR=A.D("fM")})();(function staticFields(){$.d3=null
$.x=A.f([],t.f)
$.ed=null
$.e7=null
$.e6=null
$.eP=null
$.eH=null
$.eS=null
$.dg=null
$.dm=null
$.dY=null
$.aY=A.f([],A.dh("o<h<d>?>"))
$.ak=null
$.b9=null
$.ba=null
$.dR=!1
$.i=B.b})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"iD","eW",()=>A.di("_$dart_dartClosure"))
s($,"iC","dw",()=>A.di("_$dart_dartClosure_dartJSInterop"))
s($,"j0","fa",()=>B.b.a2(B.b,new A.dv()))
s($,"iZ","f9",()=>A.f([new J.bo()],A.dh("o<aJ>")))
s($,"iM","eZ",()=>A.I(A.cH({
toString:function(){return"$receiver$"}})))
s($,"iN","f_",()=>A.I(A.cH({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"iO","f0",()=>A.I(A.cH(null)))
s($,"iP","f1",()=>A.I(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"iS","f4",()=>A.I(A.cH(void 0)))
s($,"iT","f5",()=>A.I(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"iR","f3",()=>A.I(A.ej(null)))
s($,"iQ","f2",()=>A.I(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"iV","f7",()=>A.I(A.ej(void 0)))
s($,"iU","f6",()=>A.I(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"iW","e1",()=>A.fN())
s($,"iF","dx",()=>$.fa())
s($,"iX","f8",()=>A.hc())
s($,"iY","dy",()=>A.e0(B.dN))
s($,"iL","eY",()=>A.dE(8,0,t.S))
s($,"iK","eX",()=>A.dE(8,255,t.S))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.ab,SharedArrayBuffer:A.ab,ArrayBufferView:A.aF,DataView:A.bt,Float32Array:A.bu,Float64Array:A.bv,Int16Array:A.bw,Int32Array:A.bx,Int8Array:A.by,Uint16Array:A.bz,Uint32Array:A.bA,Uint8ClampedArray:A.aG,CanvasPixelArray:A.aG,Uint8Array:A.bB})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.ac.$nativeSuperclassTag="ArrayBufferView"
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
Function.prototype.$5=function(a,b,c,d,e){return this(a,b,c,d,e)}
Function.prototype.$6=function(a,b,c,d,e,f){return this(a,b,c,d,e,f)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q){s[q].removeEventListener("load",onLoad,false)}a(b.target)}for(var r=0;r<s.length;++r){s[r].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var s=A.dn
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=index.js.map
