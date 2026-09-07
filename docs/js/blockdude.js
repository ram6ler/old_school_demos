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
return q}}function makeConstList(a,b){if(b!=null)A.i(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.dV(b)
return new s(c,this)}:function(){if(s===null)s=A.dV(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.dV(a).prototype
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
dW(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.dX==null){A.ip()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.c(A.el("Return interceptor for "+A.n(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.d4
if(o==null)o=$.d4=A.dn(n)
p=q[o]}if(p!=null)return p
p=A.it(a)
if(p!=null)return p
if(typeof a=="function")return B.K
s=Object.getPrototypeOf(a)
if(s==null)return B.x
if(s===Object.prototype)return B.x
if(typeof q=="function"){o=$.d4
if(o==null)o=$.d4=A.dn(n)
Object.defineProperty(q,o,{value:B.k,enumerable:false,writable:true,configurable:true})
return B.k}return B.k},
ed(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
fA(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.ed(r))break;++b}return b},
fB(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.a(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.ed(q))break}return b},
a5(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.az.prototype
return J.bx.prototype}if(typeof a=="string")return J.W.prototype
if(a==null)return J.aA.prototype
if(typeof a=="boolean")return J.bw.prototype
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.N.prototype
if(typeof a=="symbol")return J.aD.prototype
if(typeof a=="bigint")return J.aB.prototype
return a}if(a instanceof A.d)return a
return J.dW(a)},
eU(a){if(typeof a=="string")return J.W.prototype
if(a==null)return a
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.N.prototype
if(typeof a=="symbol")return J.aD.prototype
if(typeof a=="bigint")return J.aB.prototype
return a}if(a instanceof A.d)return a
return J.dW(a)},
ii(a){if(a==null)return a
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.N.prototype
if(typeof a=="symbol")return J.aD.prototype
if(typeof a=="bigint")return J.aB.prototype
return a}if(a instanceof A.d)return a
return J.dW(a)},
ij(a){if(typeof a=="number")return J.ab.prototype
if(a==null)return a
if(!(a instanceof A.d))return J.Y.prototype
return a},
ik(a){if(typeof a=="string")return J.W.prototype
if(a==null)return a
if(!(a instanceof A.d))return J.Y.prototype
return a},
a9(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.a5(a).D(a,b)},
G(a){return J.a5(a).gk(a)},
fi(a){return J.ii(a).gv(a)},
e2(a){return J.eU(a).gn(a)},
fj(a){return J.a5(a).gm(a)},
e3(a){return J.ij(a).bP(a)},
bi(a){return J.a5(a).h(a)},
fk(a){return J.ik(a).bQ(a)},
bu:function bu(){},
bw:function bw(){},
aA:function aA(){},
aC:function aC(){},
O:function O(){},
bK:function bK(){},
Y:function Y(){},
N:function N(){},
aB:function aB(){},
aD:function aD(){},
o:function o(a){this.$ti=a},
bv:function bv(){},
ce:function ce(a){this.$ti=a},
bj:function bj(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ab:function ab(){},
az:function az(){},
bx:function bx(){},
W:function W(){}},A={dC:function dC(){},
fC(a){return new A.aG("Field '"+a+"' has not been initialized.")},
P(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
dJ(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
dU(a,b,c){return a},
dY(a){var s,r
for(s=$.x.length,r=0;r<s;++r)if(a===$.x[r])return!0
return!1},
eb(){return new A.X("No element")},
aG:function aG(a){this.a=a},
du:function du(){},
cs:function cs(){},
av:function av(){},
aH:function aH(){},
ad:function ad(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aw:function aw(a){this.$ti=a},
br:function br(){},
ay:function ay(){},
f2(a){var s=A.f1(a)
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
s=J.bi(a)
return s},
ai(a){var s,r=$.ee
if(r==null)r=$.ee=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
bL(a){var s,r,q,p
if(a instanceof A.d)return A.w(A.bg(a),null)
s=J.a5(a)
if(s===B.I||s===B.L||t.A.b(a)){r=B.t(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.w(A.bg(a),null)},
ef(a){var s,r,q
if(a==null||typeof a=="number"||A.dQ(a))return J.bi(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.U)return a.h(0)
if(a instanceof A.am)return a.aO(!0)
s=$.fg()
for(r=0;r<1;++r){q=s[r].bR(a)
if(q!=null)return q}return"Instance of '"+A.bL(a)+"'"},
fG(a){var s=a.$thrownJsError
if(s==null)return null
return A.a6(s)},
fH(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.q(a,s)
a.$thrownJsError=s
s.stack=b.h(0)}},
a(a,b){if(a==null)J.e2(a)
throw A.c(A.ie(a,b))},
ie(a,b){var s,r="index",q=null
if(!A.eG(b))return new A.F(!0,b,r,q)
s=J.e2(a)
if(b<0||b>=s)return A.dA(b,s,a,q,r)
return new A.aO(q,q,!0,b,r,"Value not in range")},
dT(a){return new A.F(!0,a,null,null)},
c(a){return A.q(a,new Error())},
q(a,b){var s
if(a==null)a=new A.J()
b.dartException=a
s=A.iz
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
iz(){return J.bi(this.dartException)},
bh(a,b){throw A.q(a,b==null?new Error():b)},
c9(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.bh(A.hy(a,b,c),s)},
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
return new A.aS("'"+s+"': Cannot "+o+" "+l+k+n)},
e0(a){throw A.c(A.bn(a))},
K(a){var s,r,q,p,o,n
a=A.iv(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.i([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.cK(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
cL(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
ek(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
dD(a,b){var s=b==null,r=s?null:b.method
return new A.by(a,r,s?null:b.receiver)},
at(a){if(a==null)return new A.ck(a)
if(a instanceof A.ax)return A.T(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.T(a,a.dartException)
return A.i5(a)},
T(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
i5(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.a.bv(r,16)&8191)===10)switch(q){case 438:return A.T(a,A.dD(A.n(s)+" (Error "+q+")",null))
case 445:case 5007:A.n(s)
return A.T(a,new A.aN())}}if(a instanceof TypeError){p=$.f6()
o=$.f7()
n=$.f8()
m=$.f9()
l=$.fc()
k=$.fd()
j=$.fb()
$.fa()
i=$.ff()
h=$.fe()
g=p.A(s)
if(g!=null)return A.T(a,A.dD(s,g))
else{g=o.A(s)
if(g!=null){g.method="call"
return A.T(a,A.dD(s,g))}else if(n.A(s)!=null||m.A(s)!=null||l.A(s)!=null||k.A(s)!=null||j.A(s)!=null||m.A(s)!=null||i.A(s)!=null||h.A(s)!=null)return A.T(a,new A.aN())}return A.T(a,new A.bQ(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.aR()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.T(a,new A.F(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.aR()
return a},
a6(a){var s
if(a instanceof A.ax)return a.b
if(a==null)return new A.b4(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.b4(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
e_(a){if(a==null)return J.G(a)
if(typeof a=="object")return A.ai(a)
return J.G(a)},
ib(a){if(typeof a=="number")return B.J.gk(a)
if(a instanceof A.c3)return A.ai(a)
if(a instanceof A.am)return a.gk(a)
return A.e_(a)},
ih(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=a.length
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
if(m==null)o[q]=b.V(q,p)
else m.b=p}else if(typeof q=="number"&&(q&0x3fffffff)===q){l=b.c
if(l==null){n=Object.create(null)
n["<non-identifier-key>"]=n
delete n["<non-identifier-key>"]
b.c=n
l=n}m=l[q]
if(m==null)l[q]=b.V(q,p)
else m.b=p}else{k=b.d
if(k==null){n=Object.create(null)
n["<non-identifier-key>"]=n
delete n["<non-identifier-key>"]
b.d=n
k=n}j=b.am(q)
i=k[j]
if(i==null)k[j]=[b.V(q,p)]
else{r=b.an(i,q)
if(r>=0)i[r].b=p
else i.push(b.V(q,p))}}}return b},
hH(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.c(new A.cT("Unsupported number of arguments for wrapped closure"))},
c5(a,b){var s=a.$identity
if(!!s)return s
s=A.ic(a,b)
a.$identity=s
return s},
ic(a,b){var s
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
fr(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.ct().constructor.prototype):Object.create(new A.au(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.e9(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.fn(a1,h,g)
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
fn(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.c("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.fl)}throw A.c("Error in functionType of tearoff")},
fo(a,b,c,d){var s=A.e8
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
e9(a,b,c,d){if(c)return A.fq(a,b,d)
return A.fo(b.length,d,a,b)},
fp(a,b,c,d){var s=A.e8,r=A.fm
switch(b?-1:a){case 0:throw A.c(new A.bM("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
fq(a,b,c){var s,r
if($.e6==null)$.e6=A.e5("interceptor")
if($.e7==null)$.e7=A.e5("receiver")
s=b.length
r=A.fp(s,c,a,b)
return r},
dV(a){return A.fr(a)},
fl(a,b){return A.bb(v.typeUniverse,A.bg(a.a),b)},
e8(a){return a.a},
fm(a){return a.b},
e5(a){var s,r,q,p=new A.au("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.c(A.aa("Field name "+a+" not found.",null))},
dn(a){return v.getIsolateTag(a)},
ix(){return v.G},
it(a){var s,r,q,p,o,n=$.eW.$1(a),m=$.dk[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.ds[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.eQ.$2(a,n)
if(q!=null){m=$.dk[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.ds[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.dt(s)
$.dk[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.ds[n]=s
return s}if(p==="-"){o=A.dt(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.eZ(a,s)
if(p==="*")throw A.c(A.el(n))
if(v.leafTags[n]===true){o=A.dt(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.eZ(a,s)},
eZ(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.dZ(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
dt(a){return J.dZ(a,!1,null,!!a.$iv)},
iu(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.dt(s)
else return J.dZ(s,c,null,null)},
ip(){if(!0===$.dX)return
$.dX=!0
A.iq()},
iq(){var s,r,q,p,o,n,m,l
$.dk=Object.create(null)
$.ds=Object.create(null)
A.io()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.f_.$1(o)
if(n!=null){m=A.iu(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
io(){var s,r,q,p,o,n,m=B.A()
m=A.aq(B.B,A.aq(B.C,A.aq(B.u,A.aq(B.u,A.aq(B.D,A.aq(B.E,A.aq(B.F(B.t),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.eW=new A.dp(p)
$.eQ=new A.dq(o)
$.f_=new A.dr(n)},
aq(a,b){return a(b)||b},
id(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
iv(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
D:function D(a,b){this.a=a
this.b=b},
bo:function bo(){},
bs:function bs(a,b){this.a=a
this.$ti=b},
aP:function aP(){},
cK:function cK(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aN:function aN(){},
by:function by(a,b,c){this.a=a
this.b=b
this.c=c},
bQ:function bQ(a){this.a=a},
ck:function ck(a){this.a=a},
ax:function ax(a,b){this.a=a
this.b=b},
b4:function b4(a){this.a=a
this.b=null},
U:function U(){},
ca:function ca(){},
cb:function cb(){},
cy:function cy(){},
ct:function ct(){},
au:function au(a,b){this.a=a
this.b=b},
bM:function bM(a){this.a=a},
aF:function aF(){},
ch:function ch(a,b){this.a=a
this.b=b
this.c=null},
aE:function aE(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dp:function dp(a){this.a=a},
dq:function dq(a){this.a=a},
dr:function dr(a){this.a=a},
am:function am(){},
c0:function c0(){},
af:function af(){},
aL:function aL(){},
bA:function bA(){},
ag:function ag(){},
aJ:function aJ(){},
aK:function aK(){},
bB:function bB(){},
bC:function bC(){},
bD:function bD(){},
bE:function bE(){},
bF:function bF(){},
bG:function bG(){},
bH:function bH(){},
aM:function aM(){},
bI:function bI(){},
aZ:function aZ(){},
b_:function b_(){},
b0:function b0(){},
b1:function b1(){},
dG(a,b){var s=b.c
return s==null?b.c=A.b9(a,"I",[b.x]):s},
eg(a){var s=a.w
if(s===6||s===7)return A.eg(a.x)
return s===11||s===12},
fK(a){return a.as},
c7(a){return A.dc(v.typeUniverse,a,!1)},
a2(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.a2(a1,s,a3,a4)
if(r===s)return a2
return A.et(a1,r,!0)
case 7:s=a2.x
r=A.a2(a1,s,a3,a4)
if(r===s)return a2
return A.es(a1,r,!0)
case 8:q=a2.y
p=A.ap(a1,q,a3,a4)
if(p===q)return a2
return A.b9(a1,a2.x,p)
case 9:o=a2.x
n=A.a2(a1,o,a3,a4)
m=a2.y
l=A.ap(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.dM(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.ap(a1,j,a3,a4)
if(i===j)return a2
return A.eu(a1,k,i)
case 11:h=a2.x
g=A.a2(a1,h,a3,a4)
f=a2.y
e=A.i2(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.er(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.ap(a1,d,a3,a4)
o=a2.x
n=A.a2(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.dN(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.c(A.bl("Attempted to substitute unexpected RTI kind "+a0))}},
ap(a,b,c,d){var s,r,q,p,o=b.length,n=A.dd(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.a2(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
i3(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.dd(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.a2(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
i2(a,b,c,d){var s,r=b.a,q=A.ap(a,r,c,d),p=b.b,o=A.ap(a,p,c,d),n=b.c,m=A.i3(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.bZ()
s.a=q
s.b=o
s.c=m
return s},
i(a,b){a[v.arrayRti]=b
return a},
eS(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.im(s)
return a.$S()}return null},
ir(a,b){var s
if(A.eg(b))if(a instanceof A.U){s=A.eS(a)
if(s!=null)return s}return A.bg(a)},
bg(a){if(a instanceof A.d)return A.a1(a)
if(Array.isArray(a))return A.dO(a)
return A.dP(J.a5(a))},
dO(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
a1(a){var s=a.$ti
return s!=null?s:A.dP(a)},
dP(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.hF(a,s)},
hF(a,b){var s=a instanceof A.U?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.he(v.typeUniverse,s.name)
b.$ccache=r
return r},
im(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.dc(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
eV(a){return A.a4(A.a1(a))},
dS(a){var s
if(a instanceof A.am)return A.ig(a.$r,a.aF())
s=a instanceof A.U?A.eS(a):null
if(s!=null)return s
if(t.R.b(a))return J.fj(a).a
if(Array.isArray(a))return A.dO(a)
return A.bg(a)},
a4(a){var s=a.r
return s==null?a.r=new A.c3(a):s},
ig(a,b){var s,r,q=b,p=q.length
if(p===0)return t.F
if(0>=p)return A.a(q,0)
s=A.bb(v.typeUniverse,A.dS(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.a(q,r)
s=A.ew(v.typeUniverse,s,A.dS(q[r]))}return A.bb(v.typeUniverse,s,a)},
E(a){return A.a4(A.dc(v.typeUniverse,a,!1))},
hE(a){var s=this
s.b=A.i0(s)
return s.b(a)},
i0(a){var s,r,q,p
if(a===t.K)return A.hN
if(A.a7(a))return A.hR
s=a.w
if(s===6)return A.hC
if(s===1)return A.eI
if(s===7)return A.hI
r=A.i_(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.a7)){a.f="$i"+q
if(q==="e")return A.hL
if(a===t.m)return A.hK
return A.hQ}}else if(s===10){p=A.id(a.x,a.y)
return p==null?A.eI:p}return A.hA},
i_(a){if(a.w===8){if(a===t.S)return A.eG
if(a===t.i||a===t.H)return A.hM
if(a===t.N)return A.hP
if(a===t.y)return A.dQ}return null},
hD(a){var s=this,r=A.hz
if(A.a7(s))r=A.hs
else if(s===t.K)r=A.hp
else if(A.ar(s)){r=A.hB
if(s===t.M)r=A.hl
else if(s===t.x)r=A.hr
else if(s===t.u)r=A.hh
else if(s===t.W)r=A.ho
else if(s===t.I)r=A.hj
else if(s===t.B)r=A.hm}else if(s===t.S)r=A.hk
else if(s===t.N)r=A.hq
else if(s===t.y)r=A.hg
else if(s===t.H)r=A.hn
else if(s===t.i)r=A.hi
else if(s===t.m)r=A.a0
s.a=r
return s.a(a)},
hA(a){var s=this
if(a==null)return A.ar(s)
return A.is(v.typeUniverse,A.ir(a,s),s)},
hC(a){if(a==null)return!0
return this.x.b(a)},
hQ(a){var s,r=this
if(a==null)return A.ar(r)
s=r.f
if(a instanceof A.d)return!!a[s]
return!!J.a5(a)[s]},
hL(a){var s,r=this
if(a==null)return A.ar(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.d)return!!a[s]
return!!J.a5(a)[s]},
hK(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.d)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
eH(a){if(typeof a=="object"){if(a instanceof A.d)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
hz(a){var s=this
if(a==null){if(A.ar(s))return a}else if(s.b(a))return a
throw A.q(A.eC(a,s),new Error())},
hB(a){var s=this
if(a==null||s.b(a))return a
throw A.q(A.eC(a,s),new Error())},
eC(a,b){return new A.b7("TypeError: "+A.en(a,A.w(b,null)))},
en(a,b){return A.cd(a)+": type '"+A.w(A.dS(a),null)+"' is not a subtype of type '"+b+"'"},
z(a,b){return new A.b7("TypeError: "+A.en(a,b))},
hI(a){var s=this
return s.x.b(a)||A.dG(v.typeUniverse,s).b(a)},
hN(a){return a!=null},
hp(a){if(a!=null)return a
throw A.q(A.z(a,"Object"),new Error())},
hR(a){return!0},
hs(a){return a},
eI(a){return!1},
dQ(a){return!0===a||!1===a},
hg(a){if(!0===a)return!0
if(!1===a)return!1
throw A.q(A.z(a,"bool"),new Error())},
hh(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.q(A.z(a,"bool?"),new Error())},
hi(a){if(typeof a=="number")return a
throw A.q(A.z(a,"double"),new Error())},
hj(a){if(typeof a=="number")return a
if(a==null)return a
throw A.q(A.z(a,"double?"),new Error())},
eG(a){return typeof a=="number"&&Math.floor(a)===a},
hk(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.q(A.z(a,"int"),new Error())},
hl(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.q(A.z(a,"int?"),new Error())},
hM(a){return typeof a=="number"},
hn(a){if(typeof a=="number")return a
throw A.q(A.z(a,"num"),new Error())},
ho(a){if(typeof a=="number")return a
if(a==null)return a
throw A.q(A.z(a,"num?"),new Error())},
hP(a){return typeof a=="string"},
hq(a){if(typeof a=="string")return a
throw A.q(A.z(a,"String"),new Error())},
hr(a){if(typeof a=="string")return a
if(a==null)return a
throw A.q(A.z(a,"String?"),new Error())},
a0(a){if(A.eH(a))return a
throw A.q(A.z(a,"JSObject"),new Error())},
hm(a){if(a==null)return a
if(A.eH(a))return a
throw A.q(A.z(a,"JSObject?"),new Error())},
eM(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.w(a[q],b)
return s},
hW(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.eM(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.w(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
eD(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.i([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)a4.push("T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.a(a4,l)
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
if(l===8){p=A.i4(a.x)
o=a.y
return o.length>0?p+("<"+A.eM(o,b)+">"):p}if(l===10)return A.hW(a,b)
if(l===11)return A.eD(a,b,null)
if(l===12)return A.eD(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.a(b,n)
return b[n]}return"?"},
i4(a){var s=A.f1(a)
if(s!=null)return s
return"minified:"+a},
hf(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
he(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.dc(a,b,!1)
else if(typeof m=="number"){s=m
r=A.ba(a,5,"#")
q=A.dd(s)
for(p=0;p<s;++p)q[p]=r
o=A.b9(a,b,q)
n[b]=o
return o}else return m},
hd(a,b){return A.ex(a.tR,b)},
hc(a,b){return A.ex(a.eT,b)},
dc(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.ev(a,null,b,!1)
r.set(b,s)
return s},
bb(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.ev(a,b,c,!0)
q.set(c,r)
return r},
ew(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.dM(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
ev(a,b,c,d){return A.h3(A.fY(a,b,c,d))},
R(a,b){b.a=A.hD
b.b=A.hE
return b},
ba(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.A(null,null)
s.w=b
s.as=c
r=A.R(a,s)
a.eC.set(c,r)
return r},
et(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.ha(a,b,r,c)
a.eC.set(r,s)
return s},
ha(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.a7(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.ar(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.A(null,null)
q.w=6
q.x=b
q.as=c
return A.R(a,q)},
es(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.h8(a,b,r,c)
a.eC.set(r,s)
return s},
h8(a,b,c,d){var s,r
if(d){s=b.w
if(A.a7(b)||b===t.K)return b
else if(s===1)return A.b9(a,"I",[b])
else if(b===t.P||b===t.T)return t.O}r=new A.A(null,null)
r.w=7
r.x=b
r.as=c
return A.R(a,r)},
hb(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.A(null,null)
s.w=13
s.x=b
s.as=q
r=A.R(a,s)
a.eC.set(q,r)
return r},
b8(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
h7(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
b9(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.b8(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.A(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.R(a,r)
a.eC.set(p,q)
return q},
dM(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.b8(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.A(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.R(a,o)
a.eC.set(q,n)
return n},
eu(a,b,c){var s,r,q="+"+(b+"("+A.b8(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.A(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.R(a,s)
a.eC.set(q,r)
return r},
er(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.b8(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.b8(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.h7(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.A(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.R(a,p)
a.eC.set(r,o)
return o},
dN(a,b,c,d){var s,r=b.as+("<"+A.b8(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.h9(a,b,c,r,d)
a.eC.set(r,s)
return s},
h9(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.dd(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.a2(a,b,r,0)
m=A.ap(a,c,r,0)
return A.dN(a,n,m,c!==m)}}l=new A.A(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.R(a,l)},
fY(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
h3(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.h_(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.ep(a,r,l,k,!1)
else if(q===46)r=A.ep(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.a_(a.u,a.e,k.pop()))
break
case 94:k.push(A.hb(a.u,k.pop()))
break
case 35:k.push(A.ba(a.u,5,"#"))
break
case 64:k.push(A.ba(a.u,2,"@"))
break
case 126:k.push(A.ba(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.h1(a,k)
break
case 38:A.h0(a,k)
break
case 63:p=a.u
k.push(A.et(p,A.a_(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.es(p,A.a_(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.fZ(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.eq(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.h4(a.u,a.e,o)
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
h_(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
ep(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.hf(s,o.x)[p]
if(n==null)A.bh('No "'+p+'" in "'+A.fK(o)+'"')
d.push(A.bb(s,o,n))}else d.push(p)
return m},
h1(a,b){var s,r=a.u,q=A.eo(a,b),p=b.pop()
if(typeof p=="string")b.push(A.b9(r,p,q))
else{s=A.a_(r,a.e,p)
switch(s.w){case 11:b.push(A.dN(r,s,q,a.n))
break
default:b.push(A.dM(r,s,q))
break}}},
fZ(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.eo(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.a_(p,a.e,o)
q=new A.bZ()
q.a=s
q.b=n
q.c=m
b.push(A.er(p,r,q))
return
case-4:b.push(A.eu(p,b.pop(),s))
return
default:throw A.c(A.bl("Unexpected state under `()`: "+A.n(o)))}},
h0(a,b){var s=b.pop()
if(0===s){b.push(A.ba(a.u,1,"0&"))
return}if(1===s){b.push(A.ba(a.u,4,"1&"))
return}throw A.c(A.bl("Unexpected extended operation "+A.n(s)))},
eo(a,b){var s=b.splice(a.p)
A.eq(a.u,a.e,s)
a.p=b.pop()
return s},
a_(a,b,c){if(typeof c=="string")return A.b9(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.h2(a,b,c)}else return c},
eq(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.a_(a,b,c[s])},
h4(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.a_(a,b,c[s])},
h2(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.c(A.bl("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.c(A.bl("Bad index "+c+" for "+b.h(0)))},
is(a,b,c){var s,r=b.d
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
return A.p(a,A.dG(a,b),c,d,e)}if(s===6)return A.p(a,p,c,d,e)&&A.p(a,b.x,c,d,e)
if(q===7){if(A.p(a,b,c,d.x,e))return!0
return A.p(a,b,c,A.dG(a,d),e)}if(q===6)return A.p(a,b,c,p,e)||A.p(a,b,c,d.x,e)
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
if(!A.p(a,j,c,i,e)||!A.p(a,i,e,j,c))return!1}return A.eF(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.eF(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.hJ(a,b,c,d,e)}if(o&&q===10)return A.hO(a,b,c,d,e)
return!1},
eF(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
for(o=0;o<q;++o)p[o]=A.bb(a,b,r[o])
return A.ey(a,p,null,c,d.y,e)}return A.ey(a,b.y,null,c,d.y,e)},
ey(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.p(a,b[s],d,e[s],f))return!1
return!0},
hO(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.p(a,r[s],c,q[s],e))return!1
return!0},
ar(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.a7(a))if(s!==6)r=s===7&&A.ar(a.x)
return r},
a7(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
ex(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
dd(a){return a>0?new Array(a):v.typeUniverse.sEA},
A:function A(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
bZ:function bZ(){this.c=this.b=this.a=null},
c3:function c3(a){this.a=a},
bY:function bY(){},
b7:function b7(a){this.a=a},
fR(){var s,r,q
if(self.scheduleImmediate!=null)return A.i6()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.c5(new A.cP(s),1)).observe(r,{childList:true})
return new A.cO(s,r,q)}else if(self.setImmediate!=null)return A.i7()
return A.i8()},
fS(a){self.scheduleImmediate(A.c5(new A.cQ(a),0))},
fT(a){self.setImmediate(A.c5(new A.cR(a),0))},
fU(a){A.h5(0,a)},
ej(a,b){var s=B.a.u(a.a,1000)
return A.h6(s,b)},
h5(a,b){var s=new A.b6()
s.b9(a,b)
return s},
h6(a,b){var s=new A.b6()
s.ba(a,b)
return s},
eJ(a){return new A.bR(new A.m($.h,a.i("m<0>")),a.i("bR<0>"))},
eB(a,b){a.$2(0,null)
b.b=!0
return b.a},
bc(a,b){A.ht(a,b)},
eA(a,b){var s,r=a==null?b.$ti.c.a(a):a
if(!b.b)b.a.a6(r)
else{s=b.a
if(b.$ti.i("I<1>").b(r))s.aC(r)
else s.aE(r)}},
ez(a,b){var s=A.at(a),r=A.a6(a),q=b.a
if(b.b)q.O(new A.y(s,r))
else q.aA(new A.y(s,r))},
ht(a,b){var s,r,q=new A.df(b),p=new A.dg(b)
if(a instanceof A.m)a.aM(q,p,t.z)
else{s=t.z
if(a instanceof A.m)a.b3(q,p,s)
else{r=new A.m($.h,t.c)
r.a=8
r.c=a
r.aM(q,p,s)}}},
eP(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.h.ar(new A.dj(s))},
dz(a){var s
if(t.Q.b(a)){s=a.gU()
if(s!=null)return s}return B.H},
hG(a,b){if($.h===B.b)return null
return null},
cX(a,b,c){var s,r,q,p={},o=p.a=a
while(s=o.a,(s&4)!==0){o=o.c
p.a=o}if(o===b){s=A.eh()
b.aA(new A.y(new A.F(!0,o,null,"Cannot complete a future with itself"),s))
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.aK(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.P()
b.X(p.a)
A.Z(b,q)
return}b.a^=2
A.ao(null,null,b.b,new A.cY(p,b))},
Z(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){f=f.c
A.c4(f.a,f.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.Z(g.a,f)
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
if(r){A.c4(m.a,m.b)
return}j=$.h
if(j!==k)$.h=k
else j=null
f=f.c
if((f&15)===8)new A.d1(s,g,p).$0()
else if(q){if((f&1)!==0)new A.d0(s,m).$0()}else if((f&2)!==0)new A.d_(g,s).$0()
if(j!=null)$.h=j
f=s.c
if(f instanceof A.m){r=s.a.$ti
r=r.i("I<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.a_(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.cX(f,i,!0)
return}}i=s.a.b
h=i.c
i.c=null
b=i.a_(h)
f=s.b
r=s.c
if(!f){i.a=8
i.c=r}else{i.a=i.a&1|16
i.c=r}g.a=i
f=i}},
hX(a,b){if(t.C.b(a))return b.ar(a)
if(t.v.b(a))return a
throw A.c(A.e4(a,"onError",u.c))},
hT(){var s,r
for(s=$.an;s!=null;s=$.an){$.bf=null
r=s.b
$.an=r
if(r==null)$.be=null
s.a.$0()}},
i1(){$.dR=!0
try{A.hT()}finally{$.bf=null
$.dR=!1
if($.an!=null)$.e1().$1(A.eR())}},
eO(a){var s=new A.bS(a),r=$.be
if(r==null){$.an=$.be=s
if(!$.dR)$.e1().$1(A.eR())}else $.be=r.b=s},
hZ(a){var s,r,q,p=$.an
if(p==null){A.eO(a)
$.bf=$.be
return}s=new A.bS(a)
r=$.bf
if(r==null){s.b=p
$.an=$.bf=s}else{q=r.b
s.b=q
$.bf=r.b=s
if(q==null)$.be=s}},
f0(a){var s=null,r=$.h
if(B.b===r){A.ao(s,s,B.b,a)
return}A.ao(s,s,r,r.aQ(a))},
iJ(a){A.dU(a,"stream",t.K)
return new A.c1()},
dI(a){return new A.aT(null,null,a.i("aT<0>"))},
eN(a){return},
em(a,b){return b==null?A.i9():b},
fV(a,b){if(b==null)b=A.ia()
if(t.k.b(b))return a.ar(b)
if(t.d.b(b))return b
throw A.c(A.aa("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
hU(a){},
hV(a,b){A.c4(a,b)},
hx(a,b,c){var s,r,q=a.aR()
if(q!==$.dw()){s=q.$ti
r=$.h
q.W(new A.Q(new A.m(r,s),8,new A.dh(b,c),null,s.i("Q<1,1>")))}else b.a8(c)},
fN(a,b){var s=$.h
if(s===B.b)return A.ej(a,b)
return A.ej(a,s.bx(b,t.J))},
c4(a,b){A.hZ(new A.di(a,b))},
eK(a,b,c,d){var s,r=$.h
if(r===c)return d.$0()
$.h=c
s=r
try{r=d.$0()
return r}finally{$.h=s}},
eL(a,b,c,d,e){var s,r=$.h
if(r===c)return d.$1(e)
$.h=c
s=r
try{r=d.$1(e)
return r}finally{$.h=s}},
hY(a,b,c,d,e,f){var s,r=$.h
if(r===c)return d.$2(e,f)
$.h=c
s=r
try{r=d.$2(e,f)
return r}finally{$.h=s}},
ao(a,b,c,d){if(B.b!==c){d=c.aQ(d)
d=d}A.eO(d)},
cP:function cP(a){this.a=a},
cO:function cO(a,b,c){this.a=a
this.b=b
this.c=c},
cQ:function cQ(a){this.a=a},
cR:function cR(a){this.a=a},
b6:function b6(){this.c=0},
db:function db(a,b){this.a=a
this.b=b},
da:function da(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bR:function bR(a,b){this.a=a
this.b=!1
this.$ti=b},
df:function df(a){this.a=a},
dg:function dg(a){this.a=a},
dj:function dj(a){this.a=a},
y:function y(a,b){this.a=a
this.b=b},
C:function C(a,b){this.a=a
this.$ti=b},
aU:function aU(a,b,c,d,e){var _=this
_.ay=0
_.CW=_.ch=null
_.w=a
_.a=b
_.d=c
_.e=d
_.r=_.f=null
_.$ti=e},
bT:function bT(){},
aT:function aT(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null
_.$ti=c},
Q:function Q(a,b,c,d,e){var _=this
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
cU:function cU(a,b){this.a=a
this.b=b},
cZ:function cZ(a,b){this.a=a
this.b=b},
cY:function cY(a,b){this.a=a
this.b=b},
cW:function cW(a,b){this.a=a
this.b=b},
cV:function cV(a,b){this.a=a
this.b=b},
d1:function d1(a,b,c){this.a=a
this.b=b
this.c=c},
d2:function d2(a,b){this.a=a
this.b=b},
d3:function d3(a){this.a=a},
d0:function d0(a,b){this.a=a
this.b=b},
d_:function d_(a,b){this.a=a
this.b=b},
bS:function bS(a){this.a=a
this.b=null},
ak:function ak(){},
cw:function cw(a,b){this.a=a
this.b=b},
cx:function cx(a,b){this.a=a
this.b=b},
cu:function cu(a){this.a=a},
cv:function cv(a,b,c){this.a=a
this.b=b
this.c=c},
aV:function aV(){},
bV:function bV(){},
bU:function bU(){},
b5:function b5(){},
bX:function bX(){},
bW:function bW(a){this.b=a
this.a=null},
c_:function c_(){this.a=0
this.c=this.b=null},
d6:function d6(a,b){this.a=a
this.b=b},
aW:function aW(a){this.a=1
this.b=a
this.c=null},
c1:function c1(){},
dh:function dh(a,b){this.a=a
this.b=b},
de:function de(){},
d7:function d7(){},
d8:function d8(a,b){this.a=a
this.b=b},
d9:function d9(a,b,c){this.a=a
this.b=b
this.c=c},
di:function di(a,b){this.a=a
this.b=b},
fE(a){return new A.aY(a.i("aY<0>"))},
dL(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
fX(a,b,c){var s=new A.al(a,b,c.i("al<0>"))
s.c=a.e
return s},
dF(a){var s,r
if(A.dY(a))return"{...}"
s=new A.bO("")
try{r={}
$.x.push(a)
s.a+="{"
r.a=!0
a.al(0,new A.ci(r,s))
s.a+="}"}finally{if(0>=$.x.length)return A.a($.x,-1)
$.x.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
aY:function aY(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
d5:function d5(a){this.a=a
this.c=this.b=null},
al:function al(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
l:function l(){},
aI:function aI(){},
ci:function ci(a,b){this.a=a
this.b=b},
aQ:function aQ(){},
b3:function b3(){},
fs(a,b){a=A.q(a,new Error())
a.stack=b.h(0)
throw a},
dE(a,b,c){var s,r,q
if(a>4294967295)A.bh(A.fI(a,0,4294967295,"length",null))
s=A.i(new Array(a),c.i("o<0>"))
s.$flags=1
r=s
if(a!==0)for(s=r.length,q=0;q<s;++q)r[q]=b
return r},
fF(a,b,c){var s,r,q=A.i([],c.i("o<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.e0)(a),++r)q.push(a[r])
q.$flags=1
return q},
ei(a,b,c){var s=J.fi(b)
if(!s.q())return a
if(c.length===0){do a+=A.n(s.gt())
while(s.q())}else{a+=A.n(s.gt())
while(s.q())a=a+c+A.n(s.gt())}return a},
eh(){return A.a6(new Error())},
cd(a){if(typeof a=="number"||A.dQ(a)||a==null)return J.bi(a)
if(typeof a=="string")return JSON.stringify(a)
return A.ef(a)},
ft(a,b){A.dU(a,"error",t.K)
A.dU(b,"stackTrace",t.l)
A.fs(a,b)},
bl(a){return new A.bk(a)},
aa(a,b){return new A.F(!1,null,b,a)},
e4(a,b,c){return new A.F(!0,a,b,c)},
fI(a,b,c,d,e){return new A.aO(b,c,!0,a,d,"Invalid value")},
fJ(a,b){return a},
dA(a,b,c,d,e){return new A.bt(b,!0,a,e,"Index out of range")},
cN(a){return new A.aS(a)},
el(a){return new A.bP(a)},
bn(a){return new A.bm(a)},
ec(a,b){if(a<=0)return new A.aw(b.i("aw<0>"))
if(!b.i("0(b)").b(A.eT()))throw A.c(A.aa("Generator must be supplied or element type must allow integers","generator"))
return new A.aX(a,A.eT(),b.i("aX<0>"))},
fz(a,b,c){var s,r
if(A.dY(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.i([],t.s)
$.x.push(a)
try{A.hS(a,s)}finally{if(0>=$.x.length)return A.a($.x,-1)
$.x.pop()}r=A.ei(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
dB(a,b,c){var s,r
if(A.dY(a))return b+"..."+c
s=new A.bO(b)
$.x.push(a)
try{r=s
r.a=A.ei(r.a,a,", ")}finally{if(0>=$.x.length)return A.a($.x,-1)
$.x.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
fW(a){return a},
hS(a,b){var s,r,q,p,o,n,m,l=a.gv(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.q())return
s=A.n(l.gt())
b.push(s)
k+=s.length+2;++j}if(!l.q()){if(j<=5)return
if(0>=b.length)return A.a(b,-1)
r=b.pop()
if(0>=b.length)return A.a(b,-1)
q=b.pop()}else{p=l.gt();++j
if(!l.q()){if(j<=4){b.push(A.n(p))
return}r=A.n(p)
if(0>=b.length)return A.a(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gt();++j
for(;l.q();p=o,o=n){n=l.gt();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.a(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=A.n(p)
r=A.n(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.a(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
cl(a,b,c,d){var s
if(B.f===c){s=B.a.gk(a)
b=J.G(b)
return A.dJ(A.P(A.P($.dx(),s),b))}if(B.f===d){s=B.a.gk(a)
b=J.G(b)
c=J.G(c)
return A.dJ(A.P(A.P(A.P($.dx(),s),b),c))}s=B.a.gk(a)
b=J.G(b)
c=J.G(c)
d=J.G(d)
d=A.dJ(A.P(A.P(A.P(A.P($.dx(),s),b),c),d))
return d},
bq:function bq(a){this.a=a},
cS:function cS(){},
k:function k(){},
bk:function bk(a){this.a=a},
J:function J(){},
F:function F(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aO:function aO(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bt:function bt(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
aS:function aS(a){this.a=a},
bP:function bP(a){this.a=a},
X:function X(a){this.a=a},
bm:function bm(a){this.a=a},
bJ:function bJ(){},
aR:function aR(){},
cT:function cT(a){this.a=a},
V:function V(){},
aX:function aX(a,b,c){this.a=a
this.b=b
this.$ti=c},
t:function t(){},
d:function d(){},
c2:function c2(){},
bO:function bO(a){this.a=a},
M:function M(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dK(a){return new A.cA(a)},
cm:function cm(){},
cA:function cA(a){this.a=a},
ac:function ac(a){this.a=a},
ae:function ae(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ah:function ah(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=0},
fL(a,b,c,d,e,f,g,h){var s,r,q,p=A.ea(),o=h*g
p.width=o
s=d*f
p.height=s
r=A.ea()
r.width=o
r.height=s
s=A.i([],t.w)
for(o=A.ec(d,t.z),o=o.gv(o);o.q();){o.gt()
q=B.a.u(h,32)
s.push(new Uint32Array(q+1))}p=new A.bN(!0,d,h,g,f,c,a,p,r,s)
p.b7(a,b,c,d,!0,f,g,h)
return p},
dH(a){return new A.D(B.a.u(a,32),31-B.a.j(a,32))},
bN:function bN(a,b,c,d,e,f,g,h,i,j){var _=this
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
co:function co(a){this.a=a},
cp:function cp(a){this.a=a},
cq:function cq(a){this.a=a},
cr:function cr(a){this.a=a},
cn:function cn(){},
cj:function cj(a,b){this.a=a
this.b=b},
fM(a,b,c,d,e,f,g,h,i){var s,r,q,p,o=null,n=A.fL(a,c,d,i*(8+h),!0,f,g,b*8),m=A.i([],t.G)
for(s=t.U,r=0;r<i;++r){q=A.i([],s)
for(p=0;p<b;++p)q.push(new A.M(r,p," ",d))
m.push(q)}n=new A.cz(i,b,h,d,c,!0,n,new A.ah(i,b),new A.ah(i,b),new A.ah(i,b),A.dI(t.N),A.dI(t.V),A.dI(t.q),B.e,m,A.fE(t.o),B.dT)
n.b8(a,b,c,d,o,!0,f,g,h,i,!0,o,o,o,o,o,o)
return n},
aj:function aj(a,b){this.a=a
this.b=b},
cz:function cz(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
cI:function cI(a){this.a=a},
cH:function cH(){},
cG:function cG(a){this.a=a},
cB:function cB(a){this.a=a},
cC:function cC(a){this.a=a},
cD:function cD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cE:function cE(a,b,c){this.a=a
this.b=b
this.c=c},
cF:function cF(a){this.a=a},
c6(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=$.dy()
if(!(a9>=0&&a9<a8.length))return A.a(a8,a9)
s=a8[a9].by()
a8=s.a
r=B.d.gB(a8).length
q=a8.length
p=$.a8()
p.aS(0,1,q,2,r)
o=""+(a9+1)
n=1+r
m=n+3
p.l("Level "+o,m,3)
if(!(a9<11))return A.a(B.i,a9)
p.l("Password: "+B.i[a9],m,4)
l=""+s.b
p.l("Moves: "+l,m,5)
k=new A.dl()
m=["\u250c","\u252c","\u251c","\u253c"]
j=s.d
i=s.f
h=k.$2(j,i)
if(h>>>0!==h||h>=4)return A.a(m,h)
g=m[h]
h=["\u2510","\u252c","\u2524","\u253c"]
m=s.e
f=k.$2(m,i)
if(f>>>0!==f||f>=4)return A.a(h,f)
e=h[f]
f=["\u2514","\u2534","\u251c","\u253c"]
h=s.r
d=k.$2(j,h)
if(d>>>0!==d||d>=4)return A.a(f,d)
c=f[d]
d=["\u2518","\u2534","\u2524","\u253c"]
f=k.$2(m,h)
if(f>>>0!==f||f>=4)return A.a(d,f)
b=d[f]
a=i?"\u2550":"\u2500"
a0=h?"\u2550":"\u2500"
a1=j?"\u2551":"\u2502"
a2=m?"\u2551":"\u2502"
p.I(0)
p.l("L"+o,2,1)
p.l(B.i[a9],n-2,1)
o=2+r+2
p.l(l,2,o)
l=r/2|0
f=1+l
if(i)p.l("\u25b2",f+1,1)
else p.l(" ",f+1,1)
i=1+l
if(h)p.l("\u25bc",i+1,o)
else p.l(" ",i+1,o)
o=2+l
if(j)p.l("\u25c4",0,o)
else p.l(" ",0,o)
o=n+2
l=2+l
if(m)p.l("\u25ba",o,l)
else p.l(" ",o,l)
p.l(g+B.h.J(a,r)+e,1,2)
for(a3=1;a3<=q;++a3)p.l(a1+B.h.J(" ",r)+a2,1,2+a3)
p.l(c+B.h.J(a0,r)+b,1,2+q+1)
a4=new A.dm(1,1)
for(a3=0;a3<q;++a3){if(!(a3<a8.length))return A.a(a8,a3)
a5=a8[a3]
for(a6=0;a6<r;++a6){if(!(a6<a5.length))return A.a(a5,a6)
a7=a5[a6]
if("B"===a7){a4.$3(a3,a6,B.du)
continue}if("O"===a7){a4.$3(a3,a6,B.N)
continue}if("D"===a7){a4.$3(a3,a6,B.ce)
continue}if("<"===a7){a4.$3(a3,a6,B.dv)
continue}if(">"===a7){a4.$3(a3,a6,B.cw)
continue}a4.$3(a3,a6,B.w)}}return s.c},
S(a,b){var s=$.a8()
s.l(a,B.a.u(s.b-a.length,2),b)},
eX(a){var s=$.a8()
s.bH(B.h.J("\u2500",s.b),0,!1,a)},
c8(){var s=0,r=A.eJ(t.S),q,p,o,n,m,l,k,j,i,h,g
var $async$c8=A.eP(function(a,b){if(a===1)return A.ez(b,r)
for(;;)switch(s){case 0:i=$.a8()
i.I(0)
A.S("Input",5)
A.S("Password:",6)
p=B.a.u(i.b-9,2)
i.aN()
o=i.a1(8,p)
n=o.b
m=i.x
l=m.a
k=B.a.j(o.a,l)
m.c=k
m.sN(n)
i.ap(B.h.J(" ",3),!1)
m.c=k
m.sN(n)
k=m.c
if(k===i.a-1){i.a5()
m.c=B.a.j(m.c-1,l)}l=i.y
l.sp(m.gp())
i.z.sp(l.gp()+3)
i.ay=B.y
l=i.as
h=B.d
g=B.i
s=3
return A.bc(new A.C(l,A.a1(l).i("C<1>")).gB(0),$async$c8)
case 3:j=h.bC(g,b)
s=j===-1?4:5
break
case 4:A.S("Bad Password!",10)
A.S("Press any key",11)
A.S("to continue.",12)
s=6
return A.bc(i.aU(),$async$c8)
case 6:case 5:q=j
s=1
break
case 1:return A.eA(q,r)}})
return A.eB($async$c8,r)},
iw(a,b){var s,r,q,p=["Level "+(a+1),"Complete!","","Moves: "+b,"","Press","any key!"],o=$.a8()
o.I(0)
for(s=3,r=0;r<7;++r){q=p[r]
o.l(q,B.a.u(o.b-q.length,2),s);++s}},
as(){var s=0,r=A.eJ(t.n),q,p,o,n,m,l,k,j,i
var $async$as=A.eP(function(a,b){if(a===1)return A.ez(b,r)
for(;;)switch(s){case 0:A.S("Welcome to",3)
A.S("Block Dude!",5)
A.eX(2)
A.eX(6)
A.S("Press",8)
A.S("any key!",10)
p=$.a8()
p.S()
s=3
return A.bc(p.aU(),$async$as)
case 3:A.c6(0)
o=p.at,n=A.a1(o).i("C<1>"),m=0
case 4:if(p.ay!==B.e)A.bh(A.dK("Terminal already awaiting input."))
p.ay=B.j
s=6
return A.bc(new A.C(o,n).gB(0),$async$as)
case 6:l=b.a
s=l===27?7:9
break
case 7:s=10
return A.bc(A.c8(),$async$as)
case 10:k=b
if(k===-1)A.c6(m)
else{j=$.dy()
if(k>>>0!==k||k>=j.length){q=A.a(j,k)
s=1
break}j[k].a3()
p.I(0)
A.c6(k)
m=k}s=8
break
case 9:j=$.dy()
if(!(m>=0&&m<j.length)){q=A.a(j,m)
s=1
break}j[m].bD(l)
s=A.c6(m)?11:12
break
case 11:if(!(m<j.length)){q=A.a(j,m)
s=1
break}A.iw(m,j[m].w)
if(p.ay!==B.e)A.bh(A.dK("Terminal already awaiting input."))
p.ay=B.j
s=13
return A.bc(new A.C(o,n).gB(0),$async$as)
case 13:++m
i=j.length
if(m===i){s=5
break}if(!(m<i)){q=A.a(j,m)
s=1
break}j[m].a3()
A.c6(m)
case 12:case 8:s=4
break
case 5:case 1:return A.eA(q,r)}})
return A.eB($async$as,r)},
dl:function dl(){},
dm:function dm(a,b){this.a=a
this.b=b},
fD(a){var s,r,q,p,o,n,m,l=A.i([],t.E)
for(s=a.length,r=t.z,q=t.s,p=0;p<a.length;a.length===s||(0,A.e0)(a),++p){o=a[p]
n=A.i([],q)
for(m=A.ec(o.length,r),m=m.gv(m);m.q();){m.gt()
n.push(" ")}l.push(n)}l=new A.bz(a,B.c,l)
l.a3()
return l},
bp:function bp(a,b){this.a=a
this.b=b},
H:function H(a,b){this.a=a
this.b=b},
cc:function cc(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bz:function bz(a,b,c){var _=this
_.a=a
_.w=_.r=_.f=_.e=_.d=_.c=_.b=0
_.x=b
_.y=!1
_.z=c},
cg:function cg(a){this.a=a},
cf:function cf(a){this.a=a},
f1(a){return v.mangledGlobalNames[a]},
iy(a){throw A.q(new A.aG("Field '"+a+"' has been assigned during initialization."),new Error())},
L(){throw A.q(A.fC(""),new Error())},
bd(a){var s
if(typeof a=="function")throw A.c(A.aa("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.hu,a)
s[$.dv()]=a
return s},
eE(a){var s
if(typeof a=="function")throw A.c(A.aa("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.hv,a)
s[$.dv()]=a
return s},
hu(a){return a.$0()},
hv(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
il(a,b){return a[b]},
hw(a,b,c){return a[b](c)},
ea(){return v.G.document.createElement("canvas")}},B={}
var w=[A,J,B]
var $={}
A.dC.prototype={}
J.bu.prototype={
D(a,b){return a===b},
gk(a){return A.ai(a)},
h(a){return"Instance of '"+A.bL(a)+"'"},
gm(a){return A.a4(A.dP(this))}}
J.bw.prototype={
h(a){return String(a)},
gk(a){return a?519018:218159},
gm(a){return A.a4(t.y)},
$if:1,
$ia3:1}
J.aA.prototype={
D(a,b){return null==b},
h(a){return"null"},
gk(a){return 0},
$if:1}
J.aC.prototype={$ij:1}
J.O.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.bK.prototype={}
J.Y.prototype={}
J.N.prototype={
h(a){var s=a[$.f3()]
if(s==null)s=a[$.dv()]
if(s==null)return this.b6(a)
return"JavaScript function for "+J.bi(s)}}
J.aB.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.aD.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.o.prototype={
bF(a,b){var s,r,q=a.length,p=A.dE(q,"",t.N)
for(s=0;s<a.length;++s){r=A.n(a[s])
if(!(s<q))return A.a(p,s)
p[s]=r}return p.join(b)},
bz(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw A.c(A.bn(a))}return s},
bA(a,b,c){return this.bz(a,b,c,t.z)},
gB(a){if(a.length>0)return a[0]
throw A.c(A.eb())},
bC(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.a(a,s)
if(J.a9(a[s],b))return s}return-1},
h(a){return A.dB(a,"[","]")},
gv(a){return new J.bj(a,a.length,A.dO(a).i("bj<1>"))},
gk(a){return A.ai(a)},
gn(a){return a.length},
$ie:1}
J.bv.prototype={
bR(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.bL(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.ce.prototype={}
J.bj.prototype={
gt(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.c(A.e0(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.ab.prototype={
bP(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.c(A.cN(""+a+".toInt()"))},
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
G(a,b){if((a|0)===a)if(b>=1)return a/b|0
return this.aL(a,b)},
u(a,b){return(a|0)===a?a/b|0:this.aL(a,b)},
aL(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.c(A.cN("Result of truncating division is "+A.n(s)+": "+A.n(a)+" ~/ "+b))},
T(a,b){if(b<0)throw A.c(A.dT(b))
return b>31?0:a<<b>>>0},
bu(a,b){return b>31?0:a<<b>>>0},
b5(a,b){var s
if(b<0)throw A.c(A.dT(b))
if(a>0)s=this.ag(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
bv(a,b){var s
if(a>0)s=this.ag(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
E(a,b){if(0>b)throw A.c(A.dT(b))
return this.ag(a,b)},
ag(a,b){return b>31?0:a>>>b},
gm(a){return A.a4(t.H)},
$ir:1}
J.az.prototype={
gm(a){return A.a4(t.S)},
$if:1,
$ib:1}
J.bx.prototype={
gm(a){return A.a4(t.i)},
$if:1}
J.W.prototype={
bQ(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.a(p,0)
if(p.charCodeAt(0)===133){s=J.fA(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.a(p,r)
q=p.charCodeAt(r)===133?J.fB(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
J(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.c(B.G)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
bI(a,b,c){var s=b-a.length
if(s<=0)return a
return this.J(c,s)+a},
h(a){return a},
gk(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gm(a){return A.a4(t.N)},
gn(a){return a.length},
$if:1,
$iu:1}
A.aG.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.du.prototype={
$0(){var s=new A.m($.h,t.D)
s.a6(null)
return s},
$S:7}
A.cs.prototype={}
A.av.prototype={}
A.aH.prototype={
gv(a){var s=this
return new A.ad(s,s.gn(s),A.a1(s).i("ad<1>"))}}
A.ad.prototype={
gt(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s,r=this,q=r.a,p=J.eU(q),o=p.gn(q)
if(r.b!==o)throw A.c(A.bn(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.aj(q,s);++r.c
return!0}}
A.aw.prototype={
gv(a){return B.z},
gn(a){return 0}}
A.br.prototype={
q(){return!1},
gt(){throw A.c(A.eb())}}
A.ay.prototype={}
A.D.prototype={$r:"+(1,2)",$s:1}
A.bo.prototype={
h(a){return A.dF(this)}}
A.bs.prototype={
Z(){var s=this,r=s.$map
if(r==null){r=new A.aE(s.$ti.i("aE<1,2>"))
A.ih(s.a,r)
s.$map=r}return r},
ai(a){return this.Z().ai(a)},
a4(a,b){return this.Z().a4(0,b)},
al(a,b){this.Z().al(0,b)},
gn(a){return this.Z().a}}
A.aP.prototype={}
A.cK.prototype={
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
A.aN.prototype={
h(a){return"Null check operator used on a null value"}}
A.by.prototype={
h(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.bQ.prototype={
h(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.ck.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.ax.prototype={}
A.b4.prototype={
h(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iB:1}
A.U.prototype={
h(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.f2(r==null?"unknown":r)+"'"},
gbS(){return this},
$C:"$1",
$R:1,
$D:null}
A.ca.prototype={$C:"$0",$R:0}
A.cb.prototype={$C:"$2",$R:2}
A.cy.prototype={}
A.ct.prototype={
h(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.f2(s)+"'"}}
A.au.prototype={
D(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.au))return!1
return this.$_target===b.$_target&&this.a===b.a},
gk(a){return(A.e_(this.a)^A.ai(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.bL(this.a)+"'")}}
A.bM.prototype={
h(a){return"RuntimeError: "+this.a}}
A.aF.prototype={
gn(a){return this.a},
ai(a){var s=this.b
if(s==null)return!1
return s[a]!=null},
a4(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.bE(b)},
bE(a){var s,r,q=this.d
if(q==null)return null
s=this.bm(q,a)
r=this.an(s,a)
if(r<0)return null
return s[r].b},
al(a,b){var s=this,r=s.e,q=s.r
while(r!=null){b.$2(r.a,r.b)
if(q!==s.r)throw A.c(A.bn(s))
r=r.c}},
V(a,b){var s=this,r=new A.ch(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&1073741823
return r},
am(a){return J.G(a)&1073741823},
bm(a,b){return a[this.am(b)]},
an(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a9(a[r].a,b))return r
return-1},
h(a){return A.dF(this)}}
A.ch.prototype={}
A.aE.prototype={
am(a){return A.ib(a)&1073741823},
an(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a9(a[r].a,b))return r
return-1}}
A.dp.prototype={
$1(a){return this.a(a)},
$S:8}
A.dq.prototype={
$2(a,b){return this.a(a,b)},
$S:9}
A.dr.prototype={
$1(a){return this.a(a)},
$S:10}
A.am.prototype={
h(a){return this.aO(!1)},
aO(a){var s,r,q,p,o,n=this.bk(),m=this.aF(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.a(m,q)
o=m[q]
l=a?l+A.ef(o):l+A.n(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
bk(){var s,r=this.$s
while($.b2.length<=r)$.b2.push(null)
s=$.b2[r]
if(s==null){s=this.bj()
if(!(r<$.b2.length))return A.a($.b2,r)
$.b2[r]=s}return s},
bj(){var s,r,q,p,o,n=this.$r,m=n.indexOf("("),l=n.substring(1,m),k=n.substring(m),j=k==="()"?0:k.replace(/[^,]/g,"").length+1,i=A.i(new Array(j),t.f)
for(s=0;s<j;++s)i[s]=s
if(l!==""){r=l.split(",")
s=r.length
for(q=i.length,p=j;s>0;){--p;--s
o=r[s]
if(!(p>=0&&p<q))return A.a(i,p)
i[p]=o}}i=A.fF(i,!1,t.K)
i.$flags=3
return i}}
A.c0.prototype={
aF(){return[this.a,this.b]},
D(a,b){if(b==null)return!1
return b instanceof A.c0&&this.$s===b.$s&&J.a9(this.a,b.a)&&J.a9(this.b,b.b)},
gk(a){return A.cl(this.$s,this.a,this.b,B.f)}}
A.af.prototype={
gm(a){return B.dW},
$if:1}
A.aL.prototype={}
A.bA.prototype={
gm(a){return B.dX},
$if:1}
A.ag.prototype={
gn(a){return a.length},
$iv:1}
A.aJ.prototype={$ie:1}
A.aK.prototype={$ie:1}
A.bB.prototype={
gm(a){return B.dY},
$if:1}
A.bC.prototype={
gm(a){return B.dZ},
$if:1}
A.bD.prototype={
gm(a){return B.e_},
$if:1}
A.bE.prototype={
gm(a){return B.e0},
$if:1}
A.bF.prototype={
gm(a){return B.e1},
$if:1}
A.bG.prototype={
gm(a){return B.e3},
$if:1}
A.bH.prototype={
gm(a){return B.e4},
$if:1,
$icM:1}
A.aM.prototype={
gm(a){return B.e5},
gn(a){return a.length},
$if:1}
A.bI.prototype={
gm(a){return B.e6},
gn(a){return a.length},
$if:1}
A.aZ.prototype={}
A.b_.prototype={}
A.b0.prototype={}
A.b1.prototype={}
A.A.prototype={
i(a){return A.bb(v.typeUniverse,this,a)},
aB(a){return A.ew(v.typeUniverse,this,a)}}
A.bZ.prototype={}
A.c3.prototype={
h(a){return A.w(this.a,null)}}
A.bY.prototype={
h(a){return this.a}}
A.b7.prototype={$iJ:1}
A.cP.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:3}
A.cO.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:11}
A.cQ.prototype={
$0(){this.a.$0()},
$S:1}
A.cR.prototype={
$0(){this.a.$0()},
$S:1}
A.b6.prototype={
b9(a,b){if(self.setTimeout!=null)self.setTimeout(A.c5(new A.db(this,b),0),a)
else throw A.c(A.cN("`setTimeout()` not found."))},
ba(a,b){if(self.setTimeout!=null)self.setInterval(A.c5(new A.da(this,a,Date.now(),b),0),a)
else throw A.c(A.cN("Periodic timer."))},
$icJ:1}
A.db.prototype={
$0(){this.a.c=1
this.b.$0()},
$S:0}
A.da.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.a.G(s,o)}q.c=p
r.d.$1(q)},
$S:1}
A.bR.prototype={}
A.df.prototype={
$1(a){return this.a.$2(0,a)},
$S:4}
A.dg.prototype={
$2(a,b){this.a.$2(1,new A.ax(a,b))},
$S:12}
A.dj.prototype={
$2(a,b){this.a(a,b)},
$S:13}
A.y.prototype={
h(a){return A.n(this.a)},
$ik:1,
gU(){return this.b}}
A.C.prototype={}
A.aU.prototype={
ad(){},
ae(){}}
A.bT.prototype={
gbn(){return this.c<4},
bs(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
bw(a,b,c,d){var s,r,q,p,o,n=this
if((n.c&4)!==0){s=new A.aW($.h)
A.f0(s.gbo())
s.c=c
return s}s=$.h
r=d?1:0
q=A.em(s,a)
A.fV(s,b)
p=new A.aU(n,q,s,r|32,A.a1(n).i("aU<1>"))
p.CW=p
p.ch=p
p.ay=n.c&1
o=n.e
n.e=p
p.ch=null
p.CW=o
if(o==null)n.d=p
else o.ch=p
if(n.d===p)A.eN(n.a)
return p},
br(a){var s,r=this
A.a1(r).i("aU<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.bs(a)
if((r.c&2)===0&&r.d==null)r.bf()}return null},
bc(){if((this.c&4)!==0)return new A.X("Cannot add new events after calling close")
return new A.X("Cannot add new events while doing an addStream")},
M(a,b){if(!this.gbn())throw A.c(this.bc())
this.af(b)},
bf(){if((this.c&4)!==0)if(null.gbT())null.a6(null)
A.eN(this.b)}}
A.aT.prototype={
af(a){var s
for(s=this.d;s!=null;s=s.ch)s.bd(new A.bW(a))}}
A.Q.prototype={
bG(a){if((this.c&15)!==6)return!0
return this.b.b.au(this.d,a.a)},
bB(a){var s,r=this.e,q=null,p=a.a,o=this.b.b
if(t.C.b(r))q=o.bL(r,p,a.b)
else q=o.au(r,p)
try{p=q
return p}catch(s){if(t._.b(A.at(s))){if((this.c&1)!==0)throw A.c(A.aa("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.c(A.aa("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.m.prototype={
b3(a,b,c){var s,r=$.h
if(r===B.b){if(!t.C.b(b)&&!t.v.b(b))throw A.c(A.e4(b,"onError",u.c))}else b=A.hX(b,r)
s=new A.m(r,c.i("m<0>"))
this.W(new A.Q(s,3,a,b,this.$ti.i("@<1>").aB(c).i("Q<1,2>")))
return s},
aM(a,b,c){var s=new A.m($.h,c.i("m<0>"))
this.W(new A.Q(s,19,a,b,this.$ti.i("@<1>").aB(c).i("Q<1,2>")))
return s},
bt(a){this.a=this.a&1|16
this.c=a},
X(a){this.a=a.a&30|this.a&1
this.c=a.c},
W(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.W(a)
return}s.X(r)}A.ao(null,null,s.b,new A.cU(s,a))}},
aK(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.aK(a)
return}n.X(s)}m.a=n.a_(a)
A.ao(null,null,n.b,new A.cZ(m,n))}},
P(){var s=this.c
this.c=null
return this.a_(s)},
a_(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
a8(a){var s,r=this
if(r.$ti.i("I<1>").b(a))A.cX(a,r,!0)
else{s=r.P()
r.a=8
r.c=a
A.Z(r,s)}},
aE(a){var s=this,r=s.P()
s.a=8
s.c=a
A.Z(s,r)},
bi(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.P()
q.X(a)
A.Z(q,r)},
O(a){var s=this.P()
this.bt(a)
A.Z(this,s)},
bh(a,b){this.O(new A.y(a,b))},
a6(a){if(this.$ti.i("I<1>").b(a)){this.aC(a)
return}this.be(a)},
be(a){this.a^=2
A.ao(null,null,this.b,new A.cW(this,a))},
aC(a){A.cX(a,this,!1)
return},
aA(a){this.a^=2
A.ao(null,null,this.b,new A.cV(this,a))},
$iI:1}
A.cU.prototype={
$0(){A.Z(this.a,this.b)},
$S:0}
A.cZ.prototype={
$0(){A.Z(this.b,this.a.a)},
$S:0}
A.cY.prototype={
$0(){A.cX(this.a.a,this.b,!0)},
$S:0}
A.cW.prototype={
$0(){this.a.aE(this.b)},
$S:0}
A.cV.prototype={
$0(){this.a.O(this.b)},
$S:0}
A.d1.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.b0(q.d)}catch(p){s=A.at(p)
r=A.a6(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.dz(q)
n=k.a
n.c=new A.y(q,o)
q=n}q.b=!0
return}if(j instanceof A.m&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.m){m=k.b.a
l=new A.m(m.b,m.$ti)
j.b3(new A.d2(l,m),new A.d3(l),t.n)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.d2.prototype={
$1(a){this.a.bi(this.b)},
$S:3}
A.d3.prototype={
$2(a,b){this.a.O(new A.y(a,b))},
$S:14}
A.d0.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
q.c=p.b.b.au(p.d,this.b)}catch(o){s=A.at(o)
r=A.a6(o)
q=s
p=r
if(p==null)p=A.dz(q)
n=this.a
n.c=new A.y(q,p)
n.b=!0}},
$S:0}
A.d_.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.bG(s)&&p.a.e!=null){p.c=p.a.bB(s)
p.b=!1}}catch(o){r=A.at(o)
q=A.a6(o)
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
A.bS.prototype={}
A.ak.prototype={
gn(a){var s={},r=new A.m($.h,t.a)
s.a=0
this.aV(new A.cw(s,this),!0,new A.cx(s,r),r.gaD())
return r},
gB(a){var s=new A.m($.h,this.$ti.i("m<1>")),r=this.aV(null,!0,new A.cu(s),s.gaD())
r.aX(new A.cv(this,r,s))
return s}}
A.cw.prototype={
$1(a){++this.a.a},
$S(){return this.b.$ti.i("~(1)")}}
A.cx.prototype={
$0(){this.b.a8(this.a.a)},
$S:0}
A.cu.prototype={
$0(){var s,r=A.eh(),q=new A.X("No element")
A.fH(q,r)
s=A.hG(q,r)
s=new A.y(q,r)
this.a.O(s)},
$S:0}
A.cv.prototype={
$1(a){A.hx(this.b,this.c,a)},
$S(){return this.a.$ti.i("~(1)")}}
A.aV.prototype={
gk(a){return(A.ai(this.a)^892482866)>>>0},
D(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.C&&b.a===this.a}}
A.bV.prototype={
aJ(){return this.w.br(this)},
ad(){},
ae(){}}
A.bU.prototype={
aX(a){this.a=A.em(this.d,a)},
aR(){var s,r=this,q=r.e&=4294967279
if((q&8)===0){q=r.e=q|8
if((q&128)!==0){s=r.r
if(s.a===1)s.a=3}if((q&64)===0)r.r=null
r.f=r.aJ()}q=$.dw()
return q},
ad(){},
ae(){},
aJ(){return null},
bd(a){var s,r,q=this,p=q.r
if(p==null)p=q.r=new A.c_()
s=p.c
if(s==null)p.b=p.c=a
else p.c=s.a=a
r=q.e
if((r&128)===0){r|=128
q.e=r
if(r<256)p.aw(q)}},
af(a){var s=this,r=s.e
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
q.e=p}}for(;;a=r){if((p&8)!==0){q.r=null
return}r=(p&4)!==0
if(a===r)break
q.e=p^64
if(r)q.ad()
else q.ae()
p=q.e&=4294967231}if((p&128)!==0&&p<256)q.r.aw(q)}}
A.b5.prototype={
aV(a,b,c,d){return this.a.bw(a,d,c,!0)}}
A.bX.prototype={}
A.bW.prototype={}
A.c_.prototype={
aw(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.f0(new A.d6(s,a))
s.a=1}}
A.d6.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.a
q.b=r
if(r==null)q.c=null
this.b.af(s.b)},
$S:0}
A.aW.prototype={
aX(a){},
aR(){this.a=-1
this.c=null
return $.dw()},
bp(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.b1(s)}}else r.a=q}}
A.c1.prototype={}
A.dh.prototype={
$0(){return this.a.a8(this.b)},
$S:0}
A.de.prototype={}
A.d7.prototype={
b1(a){var s,r,q
try{if(B.b===$.h){a.$0()
return}A.eK(null,null,this,a)}catch(q){s=A.at(q)
r=A.a6(q)
A.c4(s,r)}},
bO(a,b){var s,r,q
try{if(B.b===$.h){a.$1(b)
return}A.eL(null,null,this,a,b)}catch(q){s=A.at(q)
r=A.a6(q)
A.c4(s,r)}},
b2(a,b){return this.bO(a,b,t.z)},
aQ(a){return new A.d8(this,a)},
bx(a,b){return new A.d9(this,a,b)},
bK(a){if($.h===B.b)return a.$0()
return A.eK(null,null,this,a)},
b0(a){return this.bK(a,t.z)},
bN(a,b){if($.h===B.b)return a.$1(b)
return A.eL(null,null,this,a,b)},
au(a,b){var s=t.z
return this.bN(a,b,s,s)},
bM(a,b,c){if($.h===B.b)return a.$2(b,c)
return A.hY(null,null,this,a,b,c)},
bL(a,b,c){var s=t.z
return this.bM(a,b,c,s,s,s)},
bJ(a){return a},
ar(a){var s=t.z
return this.bJ(a,s,s,s)}}
A.d8.prototype={
$0(){return this.a.b1(this.b)},
$S:0}
A.d9.prototype={
$1(a){return this.a.b2(this.b,a)},
$S(){return this.c.i("~(0)")}}
A.di.prototype={
$0(){A.ft(this.a,this.b)},
$S:0}
A.aY.prototype={
gv(a){var s=this,r=new A.al(s,s.r,s.$ti.i("al<1>"))
r.c=s.e
return r},
gn(a){return this.a},
M(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.az(s==null?q.b=A.dL():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.az(r==null?q.c=A.dL():r,b)}else return q.bb(b)},
bb(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.dL()
s=J.G(a)&1073741823
r=p[s]
if(r==null)p[s]=[q.ac(a)]
else{if(q.bl(r,a)>=0)return!1
r.push(q.ac(a))}return!0},
az(a,b){if(a[b]!=null)return!1
a[b]=this.ac(b)
return!0},
aI(){this.r=this.r+1&1073741823},
ac(a){var s,r=this,q=new A.d5(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.aI()
return q},
bl(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a9(a[r].a,b))return r
return-1}}
A.d5.prototype={}
A.al.prototype={
gt(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.c(A.bn(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.l.prototype={
gv(a){return new A.ad(a,a.length,A.bg(a).i("ad<l.E>"))},
aj(a,b){if(!(b<a.length))return A.a(a,b)
return a[b]},
h(a){return A.dB(a,"[","]")}}
A.aI.prototype={
gn(a){return this.a},
h(a){return A.dF(this)}}
A.ci.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.n(a)
r.a=(r.a+=s)+": "
s=A.n(b)
r.a+=s},
$S:15}
A.aQ.prototype={
h(a){return A.dB(this,"{","}")}}
A.b3.prototype={}
A.bq.prototype={
D(a,b){if(b==null)return!1
return b instanceof A.bq&&this.a===b.a},
gk(a){return B.a.gk(this.a)},
h(a){var s,r,q,p,o=this.a,n=B.a.u(o,36e8)
o%=36e8
s=B.a.u(o,6e7)
o%=6e7
r=s<10?"0":""
q=B.a.u(o,1e6)
p=q<10?"0":""
return""+n+":"+r+s+":"+p+q+"."+B.h.bI(B.a.h(o%1e6),6,"0")}}
A.cS.prototype={
h(a){return this.Y()}}
A.k.prototype={
gU(){return A.fG(this)}}
A.bk.prototype={
h(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.cd(s)
return"Assertion failed"}}
A.J.prototype={}
A.F.prototype={
gab(){return"Invalid argument"+(!this.a?"(s)":"")},
gaa(){return""},
h(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.gab()+q+o
if(!s.a)return n
return n+s.gaa()+": "+A.cd(s.gao())},
gao(){return this.b}}
A.aO.prototype={
gao(){return this.b},
gab(){return"RangeError"},
gaa(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.n(q):""
else if(q==null)s=": Not greater than or equal to "+A.n(r)
else if(q>r)s=": Not in inclusive range "+A.n(r)+".."+A.n(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.n(r)
return s}}
A.bt.prototype={
gao(){return this.b},
gab(){return"RangeError"},
gaa(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gn(a){return this.f}}
A.aS.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.bP.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.X.prototype={
h(a){return"Bad state: "+this.a}}
A.bm.prototype={
h(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.cd(s)+"."}}
A.bJ.prototype={
h(a){return"Out of Memory"},
gU(){return null},
$ik:1}
A.aR.prototype={
h(a){return"Stack Overflow"},
gU(){return null},
$ik:1}
A.cT.prototype={
h(a){return"Exception: "+this.a}}
A.V.prototype={
gn(a){var s,r=this.gv(this)
for(s=0;r.q();)++s
return s},
aj(a,b){var s,r
A.fJ(b,"index")
s=this.gv(this)
for(r=b;s.q();){if(r===0)return s.gt();--r}throw A.c(A.dA(b,b-r,this,null,"index"))},
h(a){return A.fz(this,"(",")")}}
A.aX.prototype={
aj(a,b){var s=this.a
if(b>=s)A.bh(A.dA(b,s,this,null,"index"))
return this.b.$1(b)},
gn(a){return this.a}}
A.t.prototype={
gk(a){return A.d.prototype.gk.call(this,0)},
h(a){return"null"}}
A.d.prototype={$id:1,
D(a,b){return this===b},
gk(a){return A.ai(this)},
h(a){return"Instance of '"+A.bL(this)+"'"},
gm(a){return A.eV(this)},
toString(){return this.h(this)}}
A.c2.prototype={
h(a){return""},
$iB:1}
A.bO.prototype={
gn(a){return this.a.length},
h(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.M.prototype={
gk(a){var s=this.a,r=this.b
return A.cl(new A.D(s,r).$s,s,r,B.f)},
D(a,b){var s,r,q,p
if(b==null)return!1
if(b instanceof A.M){s=b.a
r=b.b
q=this.a
p=this.b
p=A.cl(new A.D(s,r).$s,s,r,B.f)===A.cl(new A.D(q,p).$s,q,p,B.f)
s=p}else s=!1
return s},
h(a){var s=this
return"("+s.a+" "+s.b+") => '"+s.c+"' "+s.d}}
A.cm.prototype={
h(a){return A.eV(this).h(0)+": "+this.a}}
A.cA.prototype={}
A.ac.prototype={}
A.ae.prototype={
h(a){var s=this
return"               row: "+s.a+"\n            column: "+s.b+"\n         character: '"+s.c+"'\n    characterColor: "+s.d+"\n\n          pixelRow: "+s.e+"\n       pixelColumn: "+s.f+"\n         pixelIsOn: "+s.r+"\n    "}}
A.ah.prototype={
sN(a){var s,r,q,p=this
if(a<0){s=p.d=a
for(r=p.b,q=p.a;s<0;){s+=r
p.d=s
p.c=B.a.j(p.c-1,q)}}else{s=p.b
p.c=B.a.j(p.c+B.a.G(a,s),p.a)
p.d=B.a.j(a,s)}},
gp(){return this.c*this.b+this.d},
sp(a){var s=this,r=s.b
s.c=B.a.j(B.a.G(a,r),s.a)
s.d=B.a.j(a,r)}}
A.bN.prototype={
b7(a,b,c,d,e,f,g,h){var s,r=this,q=v.G.document
q.onfocus=A.bd(new A.co(r))
q.onblur=A.bd(new A.cp(r))
q=r.w
q.tabIndex=-1
q.style.display="block"
q.style.outline="none"
s=q.getContext("2d")
if(s==null)s=A.a0(s)
s.imageSmoothingEnabled=!1
q.onfocus=A.bd(new A.cq(r))
q.onblur=A.bd(new A.cr(r))
b.style.display="flex"
b.style.alignItems="flex-start"
b.style.padding="0"
b.style.margin="0"
b.style.width="fit-content"
b.style.height="fit-content"
b.style.background="gray"
b.appendChild(q)
r.I(0)},
a0(a,b){return new A.D(B.a.j(a,this.b),B.a.j(b,this.c))},
a7(){var s=this.x,r=s.getContext("2d")
if(r==null)r=A.a0(r)
r.save()
r.beginPath()
r.clearRect(0,0,s.width,s.height)
r.restore()
return r},
a9(){var s=this.w.getContext("2d")
if(s==null)s=A.a0(s)
s.save()
s.beginPath()
s.drawImage(this.x,0,0)
s.restore()
return s},
K(a,b,c,d){var s,r,q,p,o,n,m=this,l=a<0||a>=m.b||b<0||b>=m.c
if(l)return
s=m.a0(a,b)
a=s.a
b=s.b
r=A.dH(b)
q=r.a
p=B.a.T(1,r.b)
l=m.y
if(!(a>=0&&a<l.length))return A.a(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.a(l,q)
o=l[q]
l.$flags&2&&A.c9(l)
l[q]=(o|p)>>>0
l[q]=(l[q]^p)>>>0
l=c.getContext("2d")
if(l==null)l=A.a0(l)
l.save()
l.beginPath()
l.fillStyle=m.r
o=m.d
n=m.e
l.fillRect(b*o,a*n,o,n)
l.restore()},
L(a,b,c,d,e){var s,r,q,p,o,n,m=this,l=a<0||a>=m.b||b<0||b>=m.c
if(l)return
s=m.a0(a,b)
a=s.a
b=s.b
r=A.dH(b)
q=r.a
p=B.a.T(1,r.b)
l=m.y
if(!(a>=0&&a<l.length))return A.a(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.a(l,q)
o=l[q]
l.$flags&2&&A.c9(l)
l[q]=(o|p)>>>0
o=d.getContext("2d")
l=o==null?A.a0(o):o
l.save()
l.beginPath()
l.fillStyle=c
o=m.d
n=m.e
l.fillRect(b*o,a*n,o,n)
l.restore()},
aY(a,b){var s,r,q,p,o=this.a0(b,a)
b=o.a
s=A.dH(o.b)
r=s.a
q=B.a.T(1,s.b)
p=this.y
if(!(b>=0&&b<p.length))return A.a(p,b)
p=p[b]
if(!(r>=0&&r<p.length))return A.a(p,r)
return(p[r]&q)>>>0>0},
aT(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=this
if(e==null)e=k.c-c
if(b==null)b=k.b-d
k.a7()
if(c===0&&d===0&&e===k.c&&b===k.b){for(s=k.y,r=s.length,q=0;q<r;++q)for(p=0;o=s[q],p<o.length;++p){o.$flags&2&&A.c9(o)
o[p]=0}s=k.x
r=s.getContext("2d")
if(r==null)r=A.a0(r)
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
for(p=c;p<m;++p)k.K(l,B.a.j(p,r),o,!1)}}k.a9()},
I(a){return this.aT(0,null,0,0,null)},
bq(a,b,c,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
d.a7()
s=d.a0(a,b)
a=s.a
b=s.b
r=B.a.bu(1,a1)-1
for(q=a2.a,p=a1-1,o=t.t,n=d.x,m=0;m<c.length;++m){l=c[m]
k=(l&r)>>>0
l=A.i([],o)
for(j=a+m,i=0;i<a1;++i){h=d.aY(b+i,j)?1:0
l.push(B.a.T(h,p-i))}g=B.d.bA(l,0,new A.cn())
switch(q){case 0:for(i=0;i<a1;++i){l=b+i
if((B.a.E(k,p-i)&1)>0)d.L(j,l,a0,n,!1)
else d.K(j,l,n,!1)}break
case 1:for(i=0;i<a1;++i){l=b+i
if((B.a.E(k,p-i)&1)>0)d.K(j,l,n,!1)
else d.L(j,l,a0,n,!1)}break
case 3:for(i=0;i<a1;++i){f=p-i
if((B.a.E(k,f)&1)>0&&(B.a.b5(g,f)&1)===0)d.L(j,b+i,a0,n,!1)}break
case 2:for(i=0;i<a1;++i)if((B.a.E(k,p-i)&1)>0)d.L(j,b+i,a0,n,!1)
break
case 4:for(e=(k&g)>>>0,i=0;i<a1;++i)if((B.a.E(e,p-i)&1)>0)d.L(j,b+i,a0,n,!1)
break
case 5:for(e=(k&g)>>>0,i=0;i<a1;++i)if((B.a.E(e,p-i)&1)>0)d.K(j,b+i,n,!1)
break
case 6:for(e=(k&g)>>>0,i=0;i<a1;++i)if((B.a.E(e,p-i)&1)===0)d.K(j,b+i,n,!1)
break
case 7:for(e=(k&g)>>>0,i=0;i<a1;++i){l=b+i
if((B.a.E(e,p-i)&1)===0)d.K(j,l,n,!1)
else d.L(j,l,a0,n,!1)}break}}d.a9()},
aZ(a,b,c){this.bq(c.a,c.b,b,a,8,B.dU,!0,!1,!1)},
b4(a){var s,r,q,p,o,n,m,l,k=this,j=k.b
a=B.a.j(a,j)
for(s=j-a,r=k.y,q=r.length,p=0;p<s;++p){if(!(p<q))return A.a(r,p)
o=p+a
n=0
for(;m=r[p],n<m.length;++n){if(!(o<q))return A.a(r,o)
l=r[o]
if(!(n<l.length))return A.a(l,n)
l=l[n]
m.$flags&2&&A.c9(m)
m[n]=l}}for(;p<j;++p){if(!(p<q))return A.a(r,p)
n=0
for(;o=r[p],n<o.length;++n){o.$flags&2&&A.c9(o)
o[n]=0}}k.a7()
j=k.x
r=j.getContext("2d")
if(r==null)r=A.a0(r)
r.save()
r.beginPath()
q=k.e
r.drawImage(k.w,0,-a*q)
r.fillStyle=k.r
r.fillRect(0,s*q,j.width,a*q)
r.restore()
k.a9()},
S(){var s=this.w
s.style.opacity="1.0"
s.focus()},
R(){var s=this.w,r=s.style
r.opacity="0.5"
s.blur()}}
A.co.prototype={
$0(){this.a.z=!0},
$S:1}
A.cp.prototype={
$0(){this.a.z=!1},
$S:1}
A.cq.prototype={
$0(){this.a.S()},
$S:1}
A.cr.prototype={
$0(){this.a.R()},
$S:1}
A.cn.prototype={
$2(a,b){return(a|b)>>>0},
$S:16}
A.cj.prototype={
Y(){return"Mode."+this.b}}
A.aj.prototype={
Y(){return"State."+this.b}}
A.cz.prototype={
b8(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=this,r=s.f
r.tabIndex=-1
r.onfocus=A.bd(new A.cB(s))
r.onblur=A.bd(new A.cC(s))
r.onkeydown=A.eE(new A.cD(s,l,new A.cH(),new A.cG(s)))
r.onclick=A.eE(new A.cE(s,new A.cI(s),o))
A.fN(new A.bq(3e5),new A.cF(s))
s.R()
s.I(0)},
gak(){var s=this.w
s===$&&A.L()
return s.gak()},
gah(){var s=this.w
s===$&&A.L()
return s.gah()},
a1(a,b){return new A.D(B.a.j(a,this.a),B.a.j(b,this.b))},
aG(){var s=this,r=s.x
s.CW.M(0,new A.M(r.c,r.d," ","white"))
s.aP()
s.cy=!1},
aP(){var s,r,q,p,o,n,m,l,k,j,i,h=this
for(s=h.CW,r=A.fX(s,s.r,s.$ti.c),q=h.w,p=h.cx,o=8+h.c,n=r.$ti.c;r.q();){m=r.d
if(m==null)m=n.a(m)
l=m.a
k=m.b
if(p.ai(m.c)){j=p.a4(0,m.c)
j.toString
i=j}else i=$.f5()
q===$&&A.L()
q.aZ(m.d,i,new A.D(l*o,k*8))}if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.aI()}},
av(a,b){var s,r=this.a1(b,a)
b=r.a
a=r.b
s=this.ch
if(!(b>=0&&b<s.length))return A.a(s,b)
s=s[b]
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a].c},
aW(){var s,r=this.x
r.sN(0)
s=r.c
if(s===this.a-1)this.a5()
else r.c=B.a.j(s+1,r.a)},
a5(){var s,r,q,p,o,n,m,l,k=this
for(s=k.a-1,r=k.b,q=k.ch,p=0;p<s;p=o)for(o=p+1,n=0;n<r;++n){m=q.length
if(!(p<m))return A.a(q,p)
l=q[p]
if(!(n<l.length))return A.a(l,n)
l=l[n]
if(!(o<m))return A.a(q,o)
m=q[o]
if(!(n<m.length))return A.a(m,n)
m=m[n]
l.c=m.c
l.d=m.d}for(m=k.d,n=0;n<r;++n){if(!(s>=0&&s<q.length))return A.a(q,s)
l=q[s]
if(!(n<l.length))return A.a(l,n)
l=l[n]
l.c=" "
l.d=m}s=k.w
s===$&&A.L()
s.b4(8+k.c)},
aq(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=e==null?h.x.c:e,f=h.a1(g,c==null?h.x.d:c)
g=h.x
s=g.a
g.c=B.a.j(f.a,s)
g.sN(f.b)
if(b==null)b=h.d
for(r=a.split(""),q=r.length,p=h.ch,o=h.CW,n=h.a-1,m=h.b-1,l=0;l<q;++l){k=r[l]
e=g.c
c=g.d
if(!(e>=0&&e<p.length))return A.a(p,e)
j=p[e]
if(!(c>=0&&c<j.length))return A.a(j,c)
i=j[c]
i.c=k
i.d=b
o.M(0,i)
if(e===n&&c===m){h.a5()
g.c=B.a.j(g.c-1,s)}g.sN(g.d+1)}h.aP()
if(d)h.aW()},
l(a,b,c){return this.aq(a,null,b,!0,c)},
ap(a,b){return this.aq(a,null,null,b,null)},
bH(a,b,c,d){return this.aq(a,null,b,c,d)},
aS(a,b,c,d,e){var s,r,q,p,o,n,m,l=this
if(e==null)e=l.b-b
if(c==null)c=l.a-d
s=d+c
r=b+e
for(q=l.ch,p=l.d,o=d;o<s;++o)for(n=b;n<r;++n){if(!(o<q.length))return A.a(q,o)
m=q[o]
if(!(n<m.length))return A.a(m,n)
m=m[n]
m.c=" "
m.d=p}q=l.w
q===$&&A.L()
p=8+l.c
q.aT(0,c*p,b*8,d*p,e*8)
p=l.x
p.c=B.a.j(d,p.a)
p.sN(b)},
I(a){return this.aS(0,0,null,0,null)},
b_(a,b,c){var s=this.w
s===$&&A.L()
s.aZ(this.d,b,new A.D(c*(8+this.c),a*8))},
aN(){if(this.ay!==B.e)throw A.c(A.dK("Terminal already awaiting input."))},
aU(){this.aN()
this.ay=B.j
var s=this.at
return new A.C(s,A.a1(s).i("C<1>")).gB(0)},
S(){return this.gak().$0()},
R(){return this.gah().$0()}}
A.cI.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.w
i===$&&A.L()
s=J.e3(a.offsetX)
r=Math.max(Math.min(B.a.G(J.e3(a.offsetY)-1,i.e),i.b-1),0)
q=Math.max(Math.min(B.a.G(s-1,i.d),i.c-1),0)
p=B.a.G(r,8+j.c)
o=B.a.u(q,8)
n=j.av(o,p)
m=j.a1(p,o)
l=m.a
k=m.b
j=j.ch
if(!(l>=0&&l<j.length))return A.a(j,l)
j=j[l]
if(!(k>=0&&k<j.length))return A.a(j,k)
return new A.ae(p,o,n,j[k].d,r,q,i.aY(q,r))},
$S:17}
A.cH.prototype={
$1(a){var s=a.keyCode
return new A.ac(s)},
$S:18}
A.cG.prototype={
$0(){var s,r,q,p,o,n=this.a,m=n.a,l=n.b,k=new A.ah(m,l)
k.sp(n.y.gp())
s=A.i([],t.s)
for(r=n.z,q=r.b;p=k.c,o=k.d,p*l+o<r.c*q+r.d;p=k.c*l+k.d+1,k.c=B.a.j(B.a.G(p,l),m),k.d=B.a.j(p,l))s.push(n.av(o,p))
return B.d.bF(s,"")},
$S:19}
A.cB.prototype={
$0(){var s=this.a.w
s===$&&A.L()
s.S()},
$S:1}
A.cC.prototype={
$0(){var s=this.a.w
s===$&&A.L()
s.R()},
$S:1}
A.cD.prototype={
$1(a){var s,r,q,p
a.preventDefault()
s=this.a
switch(s.ay.a){case 0:break
case 1:r=s.at
if(r.d!=null){r.M(0,this.c.$1(a))
s.ay=B.e}break
case 2:s.aG()
A:{q=a.keyCode
if(13===q){r=s.as
if(r.d!=null){r.M(0,J.fk(this.d.$0()))
s.aW()
s.ay=B.e}break A}if(8===q){r=s.x
if(r.gp()>s.y.gp()){r.sp(r.gp()-1)
s.ap(" ",!1)
r.sp(r.gp()-1)}break A}p=a.key
if(p.length===1&&s.x.gp()<s.z.gp())s.ap(p,!1)}break
case 3:break}},
$S:6}
A.cE.prototype={
$1(a){var s
a.preventDefault()
s=this.a
if(s.ay===B.dV&&s.ax.d!=null){s.ax.M(0,this.b.$1(a))
s.ay=B.e}},
$S:6}
A.cF.prototype={
$1(a){var s,r=this.a,q=r.w
q===$&&A.L()
if(q.z&&J.a9(v.G.document.activeElement,q.w)&&r.ay===B.y)if(r.cy)r.aG()
else{q=r.x
s=q.c
r.b_(q.d,$.f4(),s)
r.cy=!0}},
$S:20}
A.dl.prototype={
$2(a,b){var s=a?1:0
return s+2*(b?1:0)},
$S:21}
A.dm.prototype={
$3(a,b,c){$.a8().b_(1+b+this.b,c,2+a+this.a)},
$S:22}
A.bp.prototype={
Y(){return"Direction."+this.b}}
A.H.prototype={
Y(){return"Action."+this.b}}
A.cc.prototype={}
A.bz.prototype={
a3(){var s,r,q,p,o,n,m=this
m.x=B.c
m.y=!1
m.w=0
for(s=m.a,r=m.z,q=0;q<s.length;++q)for(p=0;o=s[q],p<o.length;++p){n=o[p]
if("M"===n){m.d=q
m.e=p
if(!(q<r.length))return A.a(r,q)
o=r[q]
if(!(p<o.length))return A.a(o,p)
o[p]=" "
continue}if("D"===n){m.f=q
m.r=p
if(!(q<r.length))return A.a(r,q)
o=r[q]
if(!(p<o.length))return A.a(o,p)
o[p]=" "
continue}if(!(q<r.length))return A.a(r,q)
o=r[q]
if(!(p<o.length))return A.a(o,p)
o[p]=n}m.C()},
aH(){var s,r,q=this,p=q.b
if(p<5)p=q.b=5
s=q.z
r=s.length-5
if(p>r)q.b=r
p=q.c
if(p<5)p=q.c=5
if(p>B.d.gB(s).length-5)q.c=B.d.gB(s).length-5},
a2(a,b){this.b+=a
this.c+=b
this.aH()},
C(){var s=this
s.b=s.d
s.c=s.e
s.aH()},
H(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.z,g=i.d,f=g-2,e=h.length
if(!(f>=0&&f<e))return A.a(h,f)
f=h[f]
s=i.e
r=i.x===B.c
q=s+(r?-1:1)
if(!(q>=0&&q<f.length))return A.a(f,q)
p=f[q]
q=g-1
if(!(q>=0&&q<e))return A.a(h,q)
q=h[q]
f=s+(r?-1:1)
o=q.length
if(!(f>=0&&f<o))return A.a(q,f)
n=q[f]
if(!(s>=0&&s<o))return A.a(q,s)
m=q[s]
if(!(g>=0&&g<e))return A.a(h,g)
q=h[g]
f=s+(r?-1:1)
if(!(f>=0&&f<q.length))return A.a(q,f)
l=q[f];++g
if(!(g<e))return A.a(h,g)
g=h[g]
h=s+(r?-1:1)
if(!(h>=0&&h<g.length))return A.a(g,h)
k=g[h]
j=!0
switch(a.a){case 6:break
case 1:j=(!i.y||n===" ")&&l===" "&&k!==" "
break
case 3:j=(!i.y||n===" ")&&l===" "&&k===" "
break
case 2:j=(!i.y||p===" ")&&n===" "&&l!==" "
break
case 4:j=!i.y&&l==="O"&&n===" "&&m===" "
break
case 5:j=i.y&&n===" "
break
case 0:break
default:j=!1}return j},
F(a){var s,r,q,p,o,n,m,l,k,j=this,i=j.H(a)
if(i)switch(a.a){case 6:j.a3()
break
case 1:s=j.e
j.e=s+(j.x===B.c?-1:1)
break
case 3:s=j.e
s+=j.x===B.c?-1:1
j.e=s
r=j.d+1
q=j.z
p=q.length
for(;;){o=r+1
if(!(o>=0&&o<p))return A.a(q,o)
n=q[o]
if(!(s>=0&&s<n.length))return A.a(n,s)
if(!(n[s]===" "))break
r=o}j.d=r
break
case 2:s=j.e
j.e=s+(j.x===B.c?-1:1);--j.d
break
case 4:s=j.z
q=j.d
if(!(q>=0&&q<s.length))return A.a(s,q)
q=s[q]
s=j.e
s+=j.x===B.c?-1:1
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=" "
j.y=!0
break
case 5:s=j.y=!1
r=j.d-1
q=j.z
p=q.length
n=j.x===B.c
m=j.e
for(;;){o=r+1
if(o<p){if(!(o>=0))return A.a(q,o)
l=q[o]
k=m+(n?-1:1)
if(!(k>=0&&k<l.length))return A.a(l,k)
k=l[k]===" "
l=k}else l=s
if(!l)break
r=o}if(!(r>=0&&r<p))return A.a(q,r)
s=q[r]
q=m+(n?-1:1)
if(!(q>=0&&q<s.length))return A.a(s,q)
s[q]="O"
break
case 0:j.x=j.x===B.c?B.v:B.c
break}return i},
bD(a){var s=this,r=new A.cg(s)
switch(a){case 37:if(s.x===B.v){s.F(B.l)
s.C()}else{r.$0()
s.C()}break
case 39:if(s.x===B.c){s.F(B.l)
s.C()}else{r.$0()
s.C()}break
case 32:if(s.H(B.p)){s.F(B.p)
s.C();++s.w}else if(s.H(B.q)){s.F(B.q)
s.C();++s.w}break
case 82:if(s.H(B.r)){s.F(B.r)
s.C()}break
case 65:s.a2(0,-1)
break
case 68:s.a2(0,1)
break
case 83:s.C()
break
case 87:s.a2(-1,0)
break
case 88:s.a2(1,0)
break}},
by(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.b,f=g-5,e=g+5
g=h.c
s=g-5
r=g+5
q=new A.cf(h)
g=A.i([],t.E)
for(p=t.s,o=f;o<e;++o){n=A.i([],p)
for(m=s;m<r;++m)n.push(q.$2(o,m))
g.push(n)}p=h.w
n=h.d===h.f&&h.e===h.r
l=h.c
k=h.z
j=B.d.gB(k).length
i=h.b
return new A.cc(g,p,n,l>5,l<j-5,i>5,i<k.length-5)}}
A.cg.prototype={
$0(){var s=this.a
if(s.H(B.n)){s.F(B.n);++s.w}else if(s.H(B.o)){s.F(B.o);++s.w}else if(s.H(B.m)){s.F(B.m);++s.w}},
$S:0}
A.cf.prototype={
$2(a,b){var s,r=this.a,q=r.z
if(!(a>=0&&a<q.length))return A.a(q,a)
q=q[a]
if(!(b>=0&&b<q.length))return A.a(q,b)
s=q[b]
q=r.d
if(a===q-1&&b===r.e&&r.y)s="O"
else if(a===r.f&&b===r.r)s="D"
else if(a===q&&b===r.e)s=r.x===B.c?"<":">"
return s},
$S:23};(function aliases(){var s=J.O.prototype
s.b6=s.h})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._static_2,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u
s(A,"i6","fS",2)
s(A,"i7","fT",2)
s(A,"i8","fU",2)
r(A,"eR","i1",0)
s(A,"i9","hU",4)
q(A,"ia","hV",5)
p(A.m.prototype,"gaD","bh",5)
o(A.aW.prototype,"gbo","bp",0)
s(A,"eT","fW",24)
var n
o(n=A.bN.prototype,"gak","S",0)
o(n,"gah","R",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.d,null)
q(A.d,[A.dC,J.bu,A.aP,J.bj,A.k,A.U,A.cs,A.V,A.ad,A.br,A.ay,A.am,A.bo,A.cK,A.ck,A.ax,A.b4,A.aI,A.ch,A.A,A.bZ,A.c3,A.b6,A.bR,A.y,A.ak,A.bU,A.bT,A.Q,A.m,A.bS,A.bX,A.c_,A.aW,A.c1,A.de,A.aQ,A.d5,A.al,A.l,A.bq,A.cS,A.bJ,A.aR,A.cT,A.t,A.c2,A.bO,A.M,A.cm,A.ac,A.ae,A.ah,A.bN,A.cz,A.cc,A.bz])
q(J.bu,[J.bw,J.aA,J.aC,J.aB,J.aD,J.ab,J.W])
q(J.aC,[J.O,J.o,A.af,A.aL])
q(J.O,[J.bK,J.Y,J.N])
r(J.bv,A.aP)
r(J.ce,J.o)
q(J.ab,[J.az,J.bx])
q(A.k,[A.aG,A.J,A.by,A.bQ,A.bM,A.bY,A.bk,A.F,A.aS,A.bP,A.X,A.bm])
q(A.U,[A.ca,A.cb,A.cy,A.dp,A.dr,A.cP,A.cO,A.df,A.d2,A.cw,A.cv,A.d9,A.cI,A.cH,A.cD,A.cE,A.cF,A.dm])
q(A.ca,[A.du,A.cQ,A.cR,A.db,A.da,A.cU,A.cZ,A.cY,A.cW,A.cV,A.d1,A.d0,A.d_,A.cx,A.cu,A.d6,A.dh,A.d8,A.di,A.co,A.cp,A.cq,A.cr,A.cG,A.cB,A.cC,A.cg])
r(A.av,A.V)
q(A.av,[A.aH,A.aw])
r(A.c0,A.am)
r(A.D,A.c0)
r(A.bs,A.bo)
r(A.aN,A.J)
q(A.cy,[A.ct,A.au])
r(A.aF,A.aI)
r(A.aE,A.aF)
q(A.cb,[A.dq,A.dg,A.dj,A.d3,A.ci,A.cn,A.dl,A.cf])
q(A.aL,[A.bA,A.ag])
q(A.ag,[A.aZ,A.b0])
r(A.b_,A.aZ)
r(A.aJ,A.b_)
r(A.b1,A.b0)
r(A.aK,A.b1)
q(A.aJ,[A.bB,A.bC])
q(A.aK,[A.bD,A.bE,A.bF,A.bG,A.bH,A.aM,A.bI])
r(A.b7,A.bY)
r(A.b5,A.ak)
r(A.aV,A.b5)
r(A.C,A.aV)
r(A.bV,A.bU)
r(A.aU,A.bV)
r(A.aT,A.bT)
r(A.bW,A.bX)
r(A.d7,A.de)
r(A.b3,A.aQ)
r(A.aY,A.b3)
q(A.F,[A.aO,A.bt])
r(A.aX,A.aH)
r(A.cA,A.cm)
q(A.cS,[A.cj,A.aj,A.bp,A.H])
s(A.aZ,A.l)
s(A.b_,A.ay)
s(A.b0,A.l)
s(A.b1,A.ay)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{b:"int",r:"double",eY:"num",u:"String",a3:"bool",t:"Null",e:"List",d:"Object",iG:"Map",j:"JSObject"},mangledNames:{},types:["~()","t()","~(~())","t(@)","~(@)","~(d,B)","t(j)","I<~>()","@(@)","@(@,u)","@(u)","t(~())","t(@,B)","~(b,@)","t(d,B)","~(d?,d?)","b(b,b)","ae(j)","ac(j)","u()","~(cJ)","b(a3,a3)","~(b,b,e<b>)","u(b,b)","b(b)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.D&&a.b(c.a)&&b.b(c.b)}}
A.hd(v.typeUniverse,JSON.parse('{"bK":"O","Y":"O","N":"O","iH":"af","bw":{"a3":[],"f":[]},"aA":{"f":[]},"aC":{"j":[]},"O":{"j":[]},"o":{"e":["1"],"j":[]},"bv":{"aP":[]},"ce":{"o":["1"],"e":["1"],"j":[]},"ab":{"r":[]},"az":{"r":[],"b":[],"f":[]},"bx":{"r":[],"f":[]},"W":{"u":[],"f":[]},"aG":{"k":[]},"av":{"V":["1"]},"aH":{"V":["1"]},"aw":{"V":["1"]},"aN":{"J":[],"k":[]},"by":{"k":[]},"bQ":{"k":[]},"b4":{"B":[]},"bM":{"k":[]},"aF":{"aI":["1","2"]},"aE":{"aF":["1","2"],"aI":["1","2"]},"af":{"j":[],"f":[]},"aL":{"j":[]},"bA":{"j":[],"f":[]},"ag":{"v":["1"],"j":[]},"aJ":{"l":["r"],"e":["r"],"v":["r"],"j":[]},"aK":{"l":["b"],"e":["b"],"v":["b"],"j":[]},"bB":{"l":["r"],"e":["r"],"v":["r"],"j":[],"f":[],"l.E":"r"},"bC":{"l":["r"],"e":["r"],"v":["r"],"j":[],"f":[],"l.E":"r"},"bD":{"l":["b"],"e":["b"],"v":["b"],"j":[],"f":[],"l.E":"b"},"bE":{"l":["b"],"e":["b"],"v":["b"],"j":[],"f":[],"l.E":"b"},"bF":{"l":["b"],"e":["b"],"v":["b"],"j":[],"f":[],"l.E":"b"},"bG":{"l":["b"],"e":["b"],"v":["b"],"j":[],"f":[],"l.E":"b"},"bH":{"cM":[],"l":["b"],"e":["b"],"v":["b"],"j":[],"f":[],"l.E":"b"},"aM":{"l":["b"],"e":["b"],"v":["b"],"j":[],"f":[],"l.E":"b"},"bI":{"l":["b"],"e":["b"],"v":["b"],"j":[],"f":[],"l.E":"b"},"bY":{"k":[]},"b7":{"J":[],"k":[]},"b6":{"cJ":[]},"y":{"k":[]},"C":{"ak":["1"]},"aT":{"bT":["1"]},"m":{"I":["1"]},"aV":{"ak":["1"]},"b5":{"ak":["1"]},"aY":{"aQ":["1"]},"b3":{"aQ":["1"]},"bk":{"k":[]},"J":{"k":[]},"F":{"k":[]},"aO":{"k":[]},"bt":{"k":[]},"aS":{"k":[]},"bP":{"k":[]},"X":{"k":[]},"bm":{"k":[]},"bJ":{"k":[]},"aR":{"k":[]},"aX":{"aH":["1"],"V":["1"]},"c2":{"B":[]},"fy":{"e":["b"]},"fQ":{"e":["b"]},"fP":{"e":["b"]},"fw":{"e":["b"]},"fO":{"e":["b"]},"fx":{"e":["b"]},"cM":{"e":["b"]},"fu":{"e":["r"]},"fv":{"e":["r"]}}'))
A.hc(v.typeUniverse,JSON.parse('{"av":1,"br":1,"ay":1,"bo":2,"ag":1,"aV":1,"bV":1,"bU":1,"b5":1,"bX":1,"bW":1,"c_":1,"aW":1,"c1":1,"b3":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.c7
return{o:s("M"),Q:s("k"),Z:s("iE"),U:s("o<M>"),G:s("o<e<M>>"),E:s("o<e<u>>"),f:s("o<d>"),s:s("o<u>"),w:s("o<cM>"),b:s("o<@>"),t:s("o<b>"),T:s("aA"),m:s("j"),g:s("N"),p:s("v<@>"),V:s("ac"),j:s("e<@>"),q:s("ae"),P:s("t"),K:s("d"),L:s("iI"),F:s("+()"),l:s("B"),N:s("u"),J:s("cJ"),R:s("f"),_:s("J"),A:s("Y"),c:s("m<@>"),a:s("m<b>"),D:s("m<~>"),y:s("a3"),i:s("r"),z:s("@"),v:s("@(d)"),C:s("@(d,B)"),S:s("b"),O:s("I<t>?"),B:s("j?"),X:s("d?"),x:s("u?"),u:s("a3?"),I:s("r?"),M:s("b?"),W:s("eY?"),H:s("eY"),n:s("~"),d:s("~(d)"),k:s("~(d,B)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.I=J.bu.prototype
B.d=J.o.prototype
B.a=J.az.prototype
B.J=J.ab.prototype
B.h=J.W.prototype
B.K=J.N.prototype
B.L=J.aC.prototype
B.x=J.bK.prototype
B.k=J.Y.prototype
B.l=new A.H(0,"turn")
B.m=new A.H(1,"stepForward")
B.n=new A.H(2,"stepUp")
B.o=new A.H(3,"stepDown")
B.p=new A.H(4,"pickUp")
B.q=new A.H(5,"putDown")
B.r=new A.H(6,"reset")
B.z=new A.br()
B.t=function getTagFallback(o) {
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
B.u=function(hooks) { return hooks; }

B.G=new A.bJ()
B.f=new A.cs()
B.b=new A.d7()
B.H=new A.c2()
B.c=new A.bp(0,"left")
B.v=new A.bp(1,"right")
B.N=s([255,129,129,129,129,129,129,255],t.t)
B.w=s([0,0,0,0,0,0,0,0],t.t)
B.i=s(["tcP","ARo","CKs","daN","BAH","Ion","Twe","nTy","iRC","JmK","wTF"],t.s)
B.ce=s([126,66,66,66,70,66,66,126],t.t)
B.cw=s([56,126,72,68,40,84,16,108],t.t)
B.du=s([251,251,0,254,254,0,251,251],t.t)
B.dv=s([28,126,18,34,20,42,8,54],t.t)
B.dc=s([126,129,165,129,189,153,129,126],t.t)
B.ad=s([126,255,219,255,195,231,255,126],t.t)
B.dL=s([108,254,254,254,124,56,16,0],t.t)
B.c7=s([16,56,124,254,124,56,16,0],t.t)
B.b5=s([56,124,56,254,254,124,56,124],t.t)
B.bh=s([16,16,56,124,254,124,56,124],t.t)
B.aB=s([0,0,24,60,60,24,0,0],t.t)
B.aE=s([255,255,231,195,195,231,255,255],t.t)
B.aQ=s([0,60,102,66,66,102,60,0],t.t)
B.cX=s([255,195,153,189,189,153,195,255],t.t)
B.dK=s([15,7,15,125,204,204,204,120],t.t)
B.dJ=s([60,102,102,102,60,24,126,24],t.t)
B.cU=s([63,51,63,48,48,112,240,224],t.t)
B.X=s([127,99,127,99,99,103,230,192],t.t)
B.a1=s([153,90,60,231,231,60,90,153],t.t)
B.ay=s([128,224,248,254,248,224,128,0],t.t)
B.bD=s([2,14,62,254,62,14,2,0],t.t)
B.cm=s([24,60,126,24,24,126,60,24],t.t)
B.ci=s([102,102,102,102,102,0,102,0],t.t)
B.cs=s([127,219,219,123,27,27,27,0],t.t)
B.ct=s([62,99,56,108,108,56,204,120],t.t)
B.bR=s([0,0,0,0,126,126,126,0],t.t)
B.bU=s([24,60,126,24,126,60,24,255],t.t)
B.S=s([24,60,126,24,24,24,24,0],t.t)
B.dh=s([24,24,24,24,126,60,24,0],t.t)
B.da=s([0,24,12,254,12,24,0,0],t.t)
B.av=s([0,48,96,254,96,48,0,0],t.t)
B.bZ=s([0,0,192,192,192,254,0,0],t.t)
B.bw=s([0,36,102,255,102,36,0,0],t.t)
B.ab=s([0,24,60,126,255,255,0,0],t.t)
B.bV=s([0,255,255,126,60,24,0,0],t.t)
B.bE=s([48,120,120,48,48,0,48,0],t.t)
B.a_=s([108,108,108,0,0,0,0,0],t.t)
B.ap=s([108,108,254,108,254,108,108,0],t.t)
B.c2=s([48,124,192,120,12,248,48,0],t.t)
B.R=s([0,198,204,24,48,102,198,0],t.t)
B.cG=s([56,108,56,118,220,204,118,0],t.t)
B.ao=s([96,96,192,0,0,0,0,0],t.t)
B.W=s([24,48,96,96,96,48,24,0],t.t)
B.bA=s([96,48,24,24,24,48,96,0],t.t)
B.cx=s([0,102,60,255,60,102,0,0],t.t)
B.dS=s([0,48,48,252,48,48,0,0],t.t)
B.c4=s([0,0,0,0,0,48,48,96],t.t)
B.bv=s([0,0,0,252,0,0,0,0],t.t)
B.ck=s([0,0,0,0,0,48,48,0],t.t)
B.a6=s([6,12,24,48,96,192,128,0],t.t)
B.b8=s([124,198,206,222,246,230,124,0],t.t)
B.cn=s([48,112,48,48,48,48,252,0],t.t)
B.c0=s([120,204,12,56,96,204,252,0],t.t)
B.dN=s([120,204,12,56,12,204,120,0],t.t)
B.bC=s([28,60,108,204,254,12,30,0],t.t)
B.db=s([252,192,248,12,12,204,120,0],t.t)
B.dt=s([56,96,192,248,204,204,120,0],t.t)
B.c1=s([252,204,12,24,48,48,48,0],t.t)
B.cA=s([120,204,204,120,204,204,120,0],t.t)
B.bf=s([120,204,204,124,12,24,112,0],t.t)
B.d4=s([0,48,48,0,0,48,48,0],t.t)
B.aT=s([0,48,48,0,0,48,48,96],t.t)
B.bB=s([24,48,96,192,96,48,24,0],t.t)
B.bq=s([0,0,252,0,0,252,0,0],t.t)
B.aD=s([96,48,24,12,24,48,96,0],t.t)
B.at=s([120,204,12,24,48,0,48,0],t.t)
B.dp=s([124,198,222,222,222,192,120,0],t.t)
B.cd=s([48,120,204,204,252,204,204,0],t.t)
B.aN=s([252,102,102,124,102,102,252,0],t.t)
B.af=s([60,102,192,192,192,102,60,0],t.t)
B.a7=s([248,108,102,102,102,108,248,0],t.t)
B.al=s([254,98,104,120,104,98,254,0],t.t)
B.cq=s([254,98,104,120,104,96,240,0],t.t)
B.ar=s([60,102,192,192,206,102,62,0],t.t)
B.au=s([204,204,204,252,204,204,204,0],t.t)
B.cP=s([120,48,48,48,48,48,120,0],t.t)
B.bP=s([30,12,12,12,204,204,120,0],t.t)
B.bH=s([230,102,108,120,108,102,230,0],t.t)
B.bG=s([240,96,96,96,98,102,254,0],t.t)
B.aO=s([198,238,254,254,214,198,198,0],t.t)
B.Z=s([198,230,246,222,206,198,198,0],t.t)
B.cZ=s([56,108,198,198,198,108,56,0],t.t)
B.bl=s([252,102,102,124,96,96,240,0],t.t)
B.cJ=s([120,204,204,204,220,120,28,0],t.t)
B.Q=s([252,102,102,124,108,102,230,0],t.t)
B.ai=s([120,204,224,112,28,204,120,0],t.t)
B.dE=s([252,180,48,48,48,48,120,0],t.t)
B.aL=s([204,204,204,204,204,204,252,0],t.t)
B.a3=s([204,204,204,204,204,120,48,0],t.t)
B.cS=s([198,198,198,214,254,238,198,0],t.t)
B.cM=s([198,198,108,56,56,108,198,0],t.t)
B.a5=s([204,204,204,120,48,48,120,0],t.t)
B.U=s([254,198,140,24,50,102,254,0],t.t)
B.bx=s([120,96,96,96,96,96,120,0],t.t)
B.cE=s([192,96,48,24,12,6,2,0],t.t)
B.bz=s([120,24,24,24,24,24,120,0],t.t)
B.ds=s([16,56,108,198,0,0,0,0],t.t)
B.P=s([0,0,0,0,0,0,0,255],t.t)
B.aM=s([48,48,24,0,0,0,0,0],t.t)
B.di=s([0,0,120,12,124,204,118,0],t.t)
B.ch=s([224,96,96,124,102,102,220,0],t.t)
B.cL=s([0,0,120,204,192,204,120,0],t.t)
B.b6=s([28,12,12,124,204,204,118,0],t.t)
B.dx=s([0,0,120,204,252,192,120,0],t.t)
B.aR=s([56,108,96,240,96,96,240,0],t.t)
B.cI=s([0,0,118,204,204,124,12,248],t.t)
B.aC=s([224,96,108,118,102,102,230,0],t.t)
B.cy=s([48,0,112,48,48,48,120,0],t.t)
B.bK=s([12,0,12,12,12,204,204,120],t.t)
B.bd=s([224,96,102,108,120,108,230,0],t.t)
B.bM=s([112,48,48,48,48,48,120,0],t.t)
B.bu=s([0,0,204,254,254,214,198,0],t.t)
B.bN=s([0,0,248,204,204,204,204,0],t.t)
B.bg=s([0,0,120,204,204,204,120,0],t.t)
B.dB=s([0,0,220,102,102,124,96,240],t.t)
B.dy=s([0,0,118,204,204,124,12,30],t.t)
B.br=s([0,0,220,118,102,96,240,0],t.t)
B.d1=s([0,0,124,192,120,12,248,0],t.t)
B.cV=s([16,48,124,48,48,52,24,0],t.t)
B.ca=s([0,0,204,204,204,204,118,0],t.t)
B.b4=s([0,0,204,204,204,120,48,0],t.t)
B.bk=s([0,0,198,214,254,254,108,0],t.t)
B.bI=s([0,0,198,108,56,108,198,0],t.t)
B.dH=s([0,0,204,204,204,124,12,248],t.t)
B.dg=s([0,0,252,152,48,100,252,0],t.t)
B.ba=s([28,48,48,224,48,48,28,0],t.t)
B.d0=s([24,24,24,0,24,24,24,0],t.t)
B.aG=s([224,48,48,28,48,48,224,0],t.t)
B.dR=s([118,220,0,0,0,0,0,0],t.t)
B.b3=s([0,16,56,108,198,198,254,0],t.t)
B.ax=s([120,204,192,204,120,24,12,120],t.t)
B.de=s([0,204,0,204,204,204,126,0],t.t)
B.dG=s([28,0,120,204,252,192,120,0],t.t)
B.c3=s([126,195,60,6,62,102,63,0],t.t)
B.ak=s([204,0,120,12,124,204,126,0],t.t)
B.b7=s([224,0,120,12,124,204,126,0],t.t)
B.aa=s([48,48,120,12,124,204,126,0],t.t)
B.bn=s([0,0,120,192,192,120,12,56],t.t)
B.dn=s([126,195,60,102,126,96,60,0],t.t)
B.aP=s([204,0,120,204,252,192,120,0],t.t)
B.d2=s([224,0,120,204,252,192,120,0],t.t)
B.df=s([204,0,112,48,48,48,120,0],t.t)
B.cT=s([124,198,56,24,24,24,60,0],t.t)
B.b0=s([224,0,112,48,48,48,120,0],t.t)
B.dM=s([198,56,108,198,254,198,198,0],t.t)
B.d_=s([48,48,0,120,204,252,204,0],t.t)
B.bF=s([28,0,252,96,120,96,252,0],t.t)
B.dF=s([0,0,127,12,127,204,127,0],t.t)
B.aU=s([62,108,204,254,204,204,206,0],t.t)
B.dz=s([120,204,0,120,204,204,120,0],t.t)
B.ag=s([0,204,0,120,204,204,120,0],t.t)
B.dO=s([0,224,0,120,204,204,120,0],t.t)
B.aS=s([120,204,0,204,204,204,126,0],t.t)
B.cW=s([0,224,0,204,204,204,126,0],t.t)
B.aA=s([0,204,0,204,204,124,12,248],t.t)
B.am=s([195,24,60,102,102,60,24,0],t.t)
B.d8=s([204,0,204,204,204,204,120,0],t.t)
B.a0=s([24,24,126,192,192,126,24,24],t.t)
B.aJ=s([56,108,100,240,96,230,252,0],t.t)
B.b1=s([204,204,120,252,48,252,48,48],t.t)
B.dj=s([248,204,204,250,198,207,198,199],t.t)
B.bQ=s([14,27,24,60,24,24,216,112],t.t)
B.aF=s([28,0,120,12,124,204,126,0],t.t)
B.cg=s([56,0,112,48,48,48,120,0],t.t)
B.aI=s([0,28,0,120,204,204,120,0],t.t)
B.cB=s([0,28,0,204,204,204,126,0],t.t)
B.aY=s([0,248,0,248,204,204,204,0],t.t)
B.cR=s([252,0,204,236,252,220,204,0],t.t)
B.ah=s([60,108,108,62,0,126,0,0],t.t)
B.cc=s([56,108,108,56,0,124,0,0],t.t)
B.d9=s([48,0,48,96,192,204,120,0],t.t)
B.b_=s([0,0,0,252,192,192,0,0],t.t)
B.aH=s([0,0,0,252,12,12,0,0],t.t)
B.d3=s([195,198,204,222,51,102,204,15],t.t)
B.az=s([195,198,204,219,55,111,207,3],t.t)
B.bT=s([24,24,0,24,24,24,24,0],t.t)
B.bS=s([0,51,102,204,102,51,0,0],t.t)
B.bc=s([0,204,102,51,102,204,0,0],t.t)
B.cD=s([34,136,34,136,34,136,34,136],t.t)
B.dA=s([85,170,85,170,85,170,85,170],t.t)
B.bL=s([219,119,219,238,219,119,219,238],t.t)
B.b2=s([24,24,24,24,24,24,24,24],t.t)
B.aZ=s([24,24,24,24,248,24,24,24],t.t)
B.c_=s([24,24,248,24,248,24,24,24],t.t)
B.dQ=s([54,54,54,54,246,54,54,54],t.t)
B.co=s([0,0,0,0,254,54,54,54],t.t)
B.aV=s([0,0,248,24,248,24,24,24],t.t)
B.ae=s([54,54,246,6,246,54,54,54],t.t)
B.cu=s([54,54,54,54,54,54,54,54],t.t)
B.cb=s([0,0,254,6,246,54,54,54],t.t)
B.cz=s([54,54,246,6,254,0,0,0],t.t)
B.as=s([54,54,54,54,254,0,0,0],t.t)
B.a4=s([24,24,248,24,248,0,0,0],t.t)
B.a9=s([0,0,0,0,248,24,24,24],t.t)
B.a2=s([24,24,24,24,31,0,0,0],t.t)
B.bY=s([24,24,24,24,255,0,0,0],t.t)
B.bp=s([0,0,0,0,255,24,24,24],t.t)
B.d7=s([24,24,24,24,31,24,24,24],t.t)
B.bW=s([0,0,0,0,255,0,0,0],t.t)
B.cv=s([24,24,24,24,255,24,24,24],t.t)
B.cH=s([24,24,31,24,31,24,24,24],t.t)
B.be=s([54,54,54,54,55,54,54,54],t.t)
B.dw=s([54,54,55,48,63,0,0,0],t.t)
B.dm=s([0,0,63,48,55,54,54,54],t.t)
B.bJ=s([54,54,247,0,255,0,0,0],t.t)
B.by=s([0,0,255,0,247,54,54,54],t.t)
B.aX=s([54,54,55,48,55,54,54,54],t.t)
B.aW=s([0,0,255,0,255,0,0,0],t.t)
B.dI=s([54,54,247,0,247,54,54,54],t.t)
B.cN=s([24,24,255,0,255,0,0,0],t.t)
B.M=s([54,54,54,54,255,0,0,0],t.t)
B.dC=s([0,0,255,0,255,24,24,24],t.t)
B.c5=s([0,0,0,0,255,54,54,54],t.t)
B.cp=s([54,54,54,54,63,0,0,0],t.t)
B.bt=s([24,24,31,24,31,0,0,0],t.t)
B.cj=s([0,0,31,24,31,24,24,24],t.t)
B.cK=s([0,0,0,0,63,54,54,54],t.t)
B.cQ=s([54,54,54,54,255,54,54,54],t.t)
B.bO=s([24,24,255,24,255,24,24,24],t.t)
B.dk=s([24,24,24,24,248,0,0,0],t.t)
B.b9=s([0,0,0,0,31,24,24,24],t.t)
B.c6=s([255,255,255,255,255,255,255,255],t.t)
B.c9=s([0,0,0,0,255,255,255,255],t.t)
B.bj=s([240,240,240,240,240,240,240,240],t.t)
B.cr=s([15,15,15,15,15,15,15,15],t.t)
B.d6=s([255,255,255,255,0,0,0,0],t.t)
B.dP=s([0,0,118,220,200,220,118,0],t.t)
B.dq=s([0,120,204,248,204,248,192,192],t.t)
B.aq=s([0,252,204,192,192,192,192,0],t.t)
B.c8=s([0,254,108,108,108,108,108,0],t.t)
B.dl=s([252,204,96,48,96,204,252,0],t.t)
B.bm=s([0,0,126,216,216,216,112,0],t.t)
B.bs=s([0,102,102,102,102,124,96,192],t.t)
B.cF=s([0,118,220,24,24,24,24,0],t.t)
B.aj=s([252,48,120,204,204,120,48,252],t.t)
B.aK=s([56,108,198,254,198,108,56,0],t.t)
B.an=s([56,108,198,198,108,108,238,0],t.t)
B.O=s([28,48,24,124,204,204,120,0],t.t)
B.dD=s([0,0,126,219,219,126,0,0],t.t)
B.bo=s([6,12,126,219,219,126,96,192],t.t)
B.ac=s([56,96,192,248,192,96,56,0],t.t)
B.cl=s([120,204,204,204,204,204,204,0],t.t)
B.cO=s([0,252,0,252,0,252,0,0],t.t)
B.a8=s([48,48,252,48,48,0,252,0],t.t)
B.bb=s([96,48,24,48,96,0,252,0],t.t)
B.cY=s([24,48,96,48,24,0,252,0],t.t)
B.bi=s([14,27,27,24,24,24,24,24],t.t)
B.dd=s([24,24,24,24,24,216,216,112],t.t)
B.cf=s([48,48,0,252,0,48,48,0],t.t)
B.T=s([0,118,220,0,118,220,0,0],t.t)
B.cC=s([56,108,108,56,0,0,0,0],t.t)
B.V=s([0,0,0,24,24,0,0,0],t.t)
B.dr=s([0,0,0,0,24,0,0,0],t.t)
B.Y=s([15,12,12,12,236,108,60,28],t.t)
B.bX=s([120,108,108,108,108,0,0,0],t.t)
B.aw=s([112,24,48,96,120,0,0,0],t.t)
B.d5=s([0,0,60,60,60,60,0,0],t.t)
B.dT=new A.bs(["\u263a",B.dc,"\u263b",B.ad,"\u2665",B.dL,"\u2666",B.c7,"\u2663",B.b5,"\u2660",B.bh,"\u2022",B.aB,"\u25d8",B.aE,"\u25cb",B.aQ,"\u25d9",B.cX,"\u2642",B.dK,"\u2640",B.dJ,"\u266a",B.cU,"\u266b",B.X,"\u263c",B.a1,"\u25ba",B.ay,"\u25c4",B.bD,"\u2195",B.cm,"\u203c",B.ci,"\xb6",B.cs,"\xa7",B.ct,"\u25ac",B.bR,"\u21a8",B.bU,"\u2191",B.S,"\u2193",B.dh,"\u2192",B.da,"\u2190",B.av,"\u221f",B.bZ,"\u2194",B.bw,"\u25b2",B.ab,"\u25bc",B.bV," ",B.w,"!",B.bE,'"',B.a_,"#",B.ap,"$",B.c2,"%",B.R,"&",B.cG,"'",B.ao,"(",B.W,")",B.bA,"*",B.cx,"+",B.dS,",",B.c4,"-",B.bv,".",B.ck,"/",B.a6,"0",B.b8,"1",B.cn,"2",B.c0,"3",B.dN,"4",B.bC,"5",B.db,"6",B.dt,"7",B.c1,"8",B.cA,"9",B.bf,":",B.d4,";",B.aT,"<",B.bB,"=",B.bq,">",B.aD,"?",B.at,"@",B.dp,"A",B.cd,"B",B.aN,"C",B.af,"D",B.a7,"E",B.al,"F",B.cq,"G",B.ar,"H",B.au,"I",B.cP,"J",B.bP,"K",B.bH,"L",B.bG,"M",B.aO,"N",B.Z,"O",B.cZ,"P",B.bl,"Q",B.cJ,"R",B.Q,"S",B.ai,"T",B.dE,"U",B.aL,"V",B.a3,"W",B.cS,"X",B.cM,"Y",B.a5,"Z",B.U,"[",B.bx,"\\",B.cE,"]",B.bz,"^",B.ds,"_",B.P,"`",B.aM,"a",B.di,"b",B.ch,"c",B.cL,"d",B.b6,"e",B.dx,"f",B.aR,"g",B.cI,"h",B.aC,"i",B.cy,"j",B.bK,"k",B.bd,"l",B.bM,"m",B.bu,"n",B.bN,"o",B.bg,"p",B.dB,"q",B.dy,"r",B.br,"s",B.d1,"t",B.cV,"u",B.ca,"v",B.b4,"w",B.bk,"x",B.bI,"y",B.dH,"z",B.dg,"{",B.ba,"|",B.d0,"}",B.aG,"~",B.dR,"\u2302",B.b3,"\xc7",B.ax,"\xfc",B.de,"\xe9",B.dG,"\xe2",B.c3,"\xe4",B.ak,"\xe0",B.b7,"\xe5",B.aa,"\xe7",B.bn,"\xea",B.dn,"\xeb",B.aP,"\xe8",B.d2,"\xef",B.df,"\xee",B.cT,"\xec",B.b0,"\xc4",B.dM,"\xc5",B.d_,"\xc9",B.bF,"\xe6",B.dF,"\xc6",B.aU,"\xf4",B.dz,"\xf6",B.ag,"\xf2",B.dO,"\xfb",B.aS,"\xf9",B.cW,"\xff",B.aA,"\xd6",B.am,"\xdc",B.d8,"\xa2",B.a0,"\xa3",B.aJ,"\xa5",B.b1,"\u20a7",B.dj,"\u0192",B.bQ,"\xe1",B.aF,"\xed",B.cg,"\xf3",B.aI,"\xfa",B.cB,"\xf1",B.aY,"\xd1",B.cR,"\xaa",B.ah,"\xba",B.cc,"\xbf",B.d9,"\u2310",B.b_,"\xac",B.aH,"\xbd",B.d3,"\xbc",B.az,"\xa1",B.bT,"\xab",B.bS,"\xbb",B.bc,"\u2591",B.cD,"\u2592",B.dA,"\u2593",B.bL,"\u2502",B.b2,"\u2524",B.aZ,"\u2561",B.c_,"\u2562",B.dQ,"\u2556",B.co,"\u2555",B.aV,"\u2563",B.ae,"\u2551",B.cu,"\u2557",B.cb,"\u255d",B.cz,"\u255c",B.as,"\u255b",B.a4,"\u2510",B.a9,"\u2514",B.a2,"\u2534",B.bY,"\u252c",B.bp,"\u251c",B.d7,"\u2500",B.bW,"\u253c",B.cv,"\u255e",B.cH,"\u255f",B.be,"\u255a",B.dw,"\u2554",B.dm,"\u2569",B.bJ,"\u2566",B.by,"\u2560",B.aX,"\u2550",B.aW,"\u256c",B.dI,"\u2567",B.cN,"\u2568",B.M,"\u2564",B.dC,"\u2565",B.c5,"\u2559",B.cp,"\u2558",B.bt,"\u2552",B.cj,"\u2553",B.cK,"\u256b",B.cQ,"\u256a",B.bO,"\u2518",B.dk,"\u250c",B.b9,"\u2588",B.c6,"\u2584",B.c9,"\u258c",B.bj,"\u2590",B.cr,"\u2580",B.d6,"\u03b1",B.dP,"\xdf",B.dq,"\u0393",B.aq,"\u03c0",B.c8,"\u03a3",B.dl,"\u03c3",B.bm,"\xb5",B.bs,"\u03c4",B.cF,"\u03a6",B.aj,"\u0398",B.aK,"\u03a9",B.an,"\u03b4",B.O,"\u221e",B.dD,"\u03c6",B.bo,"\u03b5",B.ac,"\u2229",B.cl,"\u2261",B.cO,"\xb1",B.a8,"\u2265",B.bb,"\u2264",B.cY,"\u2320",B.bi,"\u2321",B.dd,"\xf7",B.cf,"\u2248",B.T,"\xb0",B.cC,"\u2219",B.V,"\xb7",B.dr,"\u221a",B.Y,"\u207f",B.bX,"\xb2",B.aw,"\u25a0",B.d5],A.c7("bs<u,e<b>>"))
B.dU=new A.cj(0,"replace")
B.e=new A.aj(0,"ready")
B.j=new A.aj(1,"awaitingKey")
B.y=new A.aj(2,"awaitingString")
B.dV=new A.aj(3,"awaitingMouseClick")
B.dW=A.E("iA")
B.dX=A.E("iB")
B.dY=A.E("fu")
B.dZ=A.E("fv")
B.e_=A.E("fw")
B.e0=A.E("fx")
B.e1=A.E("fy")
B.e2=A.E("d")
B.e3=A.E("fO")
B.e4=A.E("cM")
B.e5=A.E("fP")
B.e6=A.E("fQ")})();(function staticFields(){$.d4=null
$.x=A.i([],t.f)
$.ee=null
$.e7=null
$.e6=null
$.eW=null
$.eQ=null
$.f_=null
$.dk=null
$.ds=null
$.dX=null
$.b2=A.i([],A.c7("o<e<d>?>"))
$.an=null
$.be=null
$.bf=null
$.dR=!1
$.h=B.b})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"iD","f3",()=>A.dn("_$dart_dartClosure"))
s($,"iC","dv",()=>A.dn("_$dart_dartClosure_dartJSInterop"))
s($,"j0","fh",()=>B.b.b0(new A.du()))
s($,"iY","fg",()=>A.i([new J.bv()],A.c7("o<aP>")))
s($,"iM","f6",()=>A.K(A.cL({
toString:function(){return"$receiver$"}})))
s($,"iN","f7",()=>A.K(A.cL({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"iO","f8",()=>A.K(A.cL(null)))
s($,"iP","f9",()=>A.K(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"iS","fc",()=>A.K(A.cL(void 0)))
s($,"iT","fd",()=>A.K(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"iR","fb",()=>A.K(A.ek(null)))
s($,"iQ","fa",()=>A.K(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"iV","ff",()=>A.K(A.ek(void 0)))
s($,"iU","fe",()=>A.K(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"iW","e1",()=>A.fR())
s($,"iF","dw",()=>$.fh())
s($,"iX","dx",()=>A.e_(B.e2))
s($,"iL","f5",()=>A.dE(8,0,t.S))
s($,"iK","f4",()=>A.dE(8,255,t.S))
s($,"j1","a8",()=>{var r=A.hw(A.il(A.ix(),"document"),"getElementById","blockdude")
r.toString
return A.fM("rgb(158,172,135)",14,r,"#121",!0,3,3,0,16)})
s($,"j_","dy",()=>{var r,q,p="                    ",o="B                  B",n=" B                    OB",m="B                    B",l="B     B              B",k="BB                  B",j="BBBBBBBBBBBBBBBBBBBBBBBBBBBBB",i=A.i([],A.c7("o<bz>"))
for(r=t.s,r=[A.i([p,o,o,o,o,o,"B   B       B      B","BD  B   B O B O M  B","BBBBBBBBBBBBBBBBBBBB",p],r),A.i([" B    BB        BB    "," B                B   ","BB                 B  ","BD                  B ","BB                   B"," B           B  O    B"," B           BO OOM  B"," BBBBB   BBBBBBBBBBBBB","     B  OB            ","     BBBBB            "],r),A.i([" B                 "," B   BBBBBBBBBBBBB ","B B B             B","B  B              B","B                OB","B               OOB","B BBB    M   BO BB ","B B B    B  BBBBB  ","B B BOO BB  B      ","BDB BBBBBB BB      ","BBB BB   BBB       "],r),A.i(["                  B     ","                 B B    ","       B        B   B   ","      B B      B     B  ","   BBB   B    B       B ","  B       B  B         B"," B         BB          B",n," B                   OOB"," B               M   BBB","BB    B          B   B  ","BD    B O        BBBBB  ","BBBBB B O   O  BBB      ","    B B O B BO B        ","    B BBBBBBBBBB        ","    BBB                 "],r),A.i(["     BBB    BBBBBBBBB "," BBBB   BBBB         B",m,m,m,l,l,"B     BOOOO          B","BD   BBBBBBBM        B","BB BBB     BB B     OB"," B B        B BB   OOB"," B B        B BB  OOOB"," BBB        B BBBBBBBB","            BBB       "],r),A.i([" BBB             BBBB"," B  BBBBBBBBBBBBB   B",k,"BD                  B",k," B                OOB"," BOO        B  O  BBB"," BOOO       BMOOO B  "," BOOOO      BBBBB B  "," BBBBB    BBB   BBB  ","     B   OB          ","     BB BBB          ","      BBB            "],r),A.i(["  B   BBBBB   BB   BBB  "," B B B     B B  B B   B "," B  BB      BB   BB    B"," B   B       B    B    B",n,n,"BB                   OOB","BD   O               BBB","BB   B O     B    BB B  "," B   B O    BB O MBBBB  "," BB  B OOO  BB OOOB     ","  B  BBBBBB BBBBBBB     ","  BB B    BBB           ","   BBB                  "],r),A.i([" BBB       BBBB   BBBBBBB  ","B   B     B    B B       B ","B    B   B     BB         B","BO    BBB    B B     BBB  B","BOO         BB      BB B  B","BBBB       BB          BD B","   BB            BB    BB B","  B    O B      B  B      B","  B    OB B    B   B      B"," B   BBB   B    B  B     OB"," B      B B      BB     OOB","B        B           BBBBBB","B            O            B","B    O      BBB          OB","B   BBB                 OOB","B        O       O  M  OOOB","BBBBBBBBBBBBBBBBBBBBBBBBBBB"],r),A.i(["        BBB         ","       B   B        ","      B     B  BBBBB","     B       BB    B","    B     O        B","   B      OO      OB","  B       BBB    OOB"," B            M BBBB","B             O    B","BD           BBB   B","BB    BB   B      OB"," B    BBO  BB   BBBB"," B    BBBBBBB  BB   "," BBB  B     B BB    ","   B BB     BBB     ","   BBB              "],r),A.i(["   BBBBBBBBBBBBBBBBBBBBB   "," BB           B         B  ","BBBBO       OOBO   OOO OBB ","B  BB  B   BBBBB  OBBB BB B","B   B  BB        BBB BBB  B","B   BB  BBOOOO            B","BD       BBBBBBB          B","BB        B   BBB        BB"," B     O   B B  BB        B"," B     B    B    BB       B"," BBBB  BB             BBBBB","   BBBBB      M           B","   B          B           B","   B         BB    BBBBBBBB","   B        BB           B ","   B          O         OB ","   BO    BBBBBBBBBBB   OOB ","   BOO  BB         BB OOOB ","   BBBBBB           BBBBBB "],r),A.i([j,"B  B   B                    B","B     OBOO            BBBBB B","BO   BBB OBB     O  BB  D B B","BOO    BBB   M  O       B B B","BBB  OOB     B O          B B","B   BBBB      B  BBB   BBB  B","BO            B B      B  O B","BOO       BBB B BO    B  BBBB","BBBB O   BBB  B BBO  B O B  B","B           O BBB  OB   B   B","B   O     OO B   BBBB       B","B    BBBBBBBBB        BBBBB B","B              O   OBB    B B","BBBB           O   B    OOB B","BOBB   B    B          BBBB B","BBOBBB B    B   OOO O       B","BOBOBOBB    B        OOO    B",j],r)],q=0;q<11;++q)i.push(A.fD(r[q]))
return i})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.af,SharedArrayBuffer:A.af,ArrayBufferView:A.aL,DataView:A.bA,Float32Array:A.bB,Float64Array:A.bC,Int16Array:A.bD,Int32Array:A.bE,Int8Array:A.bF,Uint16Array:A.bG,Uint32Array:A.bH,Uint8ClampedArray:A.aM,CanvasPixelArray:A.aM,Uint8Array:A.bI})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.ag.$nativeSuperclassTag="ArrayBufferView"
A.aZ.$nativeSuperclassTag="ArrayBufferView"
A.b_.$nativeSuperclassTag="ArrayBufferView"
A.aJ.$nativeSuperclassTag="ArrayBufferView"
A.b0.$nativeSuperclassTag="ArrayBufferView"
A.b1.$nativeSuperclassTag="ArrayBufferView"
A.aK.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.as
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=blockdude.js.map
