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
if(a[b]!==s){A.iD(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.m(a,b)
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
if(m==null)if($.dS==null){A.i7()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.e(A.ec("Return interceptor for "+A.n(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.cT
if(o==null)o=$.cT=A.db(n)
p=q[o]}if(p!=null)return p
p=A.ib(a)
if(p!=null)return p
if(typeof a=="function")return B.ai
s=Object.getPrototypeOf(a)
if(s==null)return B.Z
if(s===Object.prototype)return B.Z
if(typeof q=="function"){o=$.cT
if(o==null)o=$.cT=A.db(n)
Object.defineProperty(q,o,{value:B.P,enumerable:false,writable:true,configurable:true})
return B.P}return B.P},
a_(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.az.prototype
return J.bv.prototype}if(typeof a=="string")return J.a8.prototype
if(a==null)return J.aA.prototype
if(typeof a=="boolean")return J.bu.prototype
if(Array.isArray(a))return J.k.prototype
if(typeof a!="object"){if(typeof a=="function")return J.O.prototype
if(typeof a=="symbol")return J.aD.prototype
if(typeof a=="bigint")return J.aB.prototype
return a}if(a instanceof A.i)return a
return J.dR(a)},
eF(a){if(typeof a=="string")return J.a8.prototype
if(a==null)return a
if(Array.isArray(a))return J.k.prototype
if(typeof a!="object"){if(typeof a=="function")return J.O.prototype
if(typeof a=="symbol")return J.aD.prototype
if(typeof a=="bigint")return J.aB.prototype
return a}if(a instanceof A.i)return a
return J.dR(a)},
i1(a){if(a==null)return a
if(Array.isArray(a))return J.k.prototype
if(typeof a!="object"){if(typeof a=="function")return J.O.prototype
if(typeof a=="symbol")return J.aD.prototype
if(typeof a=="bigint")return J.aB.prototype
return a}if(a instanceof A.i)return a
return J.dR(a)},
i2(a){if(typeof a=="number")return J.a7.prototype
if(a==null)return a
if(!(a instanceof A.i))return J.af.prototype
return a},
a4(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.a_(a).I(a,b)},
J(a){return J.a_(a).gk(a)},
dm(a){return J.i1(a).gv(a)},
dn(a){return J.eF(a).gn(a)},
f1(a){return J.a_(a).gl(a)},
dX(a){return J.i2(a).bH(a)},
bj(a){return J.a_(a).h(a)},
bs:function bs(){},
bu:function bu(){},
aA:function aA(){},
aC:function aC(){},
P:function P(){},
bH:function bH(){},
af:function af(){},
O:function O(){},
aB:function aB(){},
aD:function aD(){},
k:function k(a){this.$ti=a},
bt:function bt(){},
c5:function c5(a){this.$ti=a},
bk:function bk(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
a7:function a7(){},
az:function az(){},
bv:function bv(){},
a8:function a8(){}},A={dv:function dv(){},
fj(a){return new A.aG("Field '"+a+"' has not been initialized.")},
R(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
dC(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
dP(a,b,c){return a},
dT(a){var s,r
for(s=$.A.length,r=0;r<s;++r)if(a===$.A[r])return!0
return!1},
fd(a,b,c){return new A.ar(a,b,c.i("ar<0>"))},
dt(){return new A.bN("No element")},
aG:function aG(a){this.a=a},
cg:function cg(){},
as:function as(){},
aH:function aH(){},
aa:function aa(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
at:function at(a){this.$ti=a},
bq:function bq(){},
ax:function ax(a,b,c){this.a=a
this.b=b
this.$ti=c},
ar:function ar(a,b,c){this.a=a
this.b=b
this.$ti=c},
ay:function ay(a,b){this.a=a
this.b=b
this.c=-1},
av:function av(){},
eM(a){var s=A.eL(a)
if(s!=null)return s
return"minified:"+a},
j2(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
n(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.bj(a)
return s},
aO(a){var s,r=$.e4
if(r==null)r=$.e4=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
bI(a){var s,r,q,p
if(a instanceof A.i)return A.z(A.bh(a),null)
s=J.a_(a)
if(s===B.ag||s===B.aj||t.B.b(a)){r=B.Q(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.z(A.bh(a),null)},
e5(a){var s,r,q
if(a==null||typeof a=="number"||A.dL(a))return J.bj(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.V)return a.h(0)
if(a instanceof A.aj)return a.aK(!0)
s=$.f_()
for(r=0;r<1;++r){q=s[r].bJ(a)
if(q!=null)return q}return"Instance of '"+A.bI(a)+"'"},
fn(a){var s=a.$thrownJsError
if(s==null)return null
return A.a0(s)},
b(a,b){if(a==null)J.dn(a)
throw A.e(A.hX(a,b))},
hX(a,b){var s,r="index",q=null
if(!A.es(b))return new A.G(!0,b,r,q)
s=J.dn(a)
if(b<0||b>=s)return A.ds(b,s,a,q,r)
return new A.aP(q,q,!0,b,r,"Value not in range")},
dO(a){return new A.G(!0,a,null,null)},
e(a){return A.q(a,new Error())},
q(a,b){var s
if(a==null)a=new A.L()
b.dartException=a
s=A.iE
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
iE(){return J.bj(this.dartException)},
bi(a,b){throw A.q(a,b==null?new Error():b)},
a3(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.bi(A.hg(a,b,c),s)},
hg(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.aV("'"+s+"': Cannot "+o+" "+l+k+n)},
a2(a){throw A.e(A.a5(a))},
M(a){var s,r,q,p,o,n
a=A.ip(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.m([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.cx(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
cy(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
eb(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
dw(a,b){var s=b==null,r=s?null:b.method
return new A.bw(a,r,s?null:b.receiver)},
ao(a){if(a==null)return new A.c9(a)
if(a instanceof A.au)return A.U(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.U(a,a.dartException)
return A.hM(a)},
U(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
hM(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.a.bl(r,16)&8191)===10)switch(q){case 438:return A.U(a,A.dw(A.n(s)+" (Error "+q+")",null))
case 445:case 5007:A.n(s)
return A.U(a,new A.aN())}}if(a instanceof TypeError){p=$.eQ()
o=$.eR()
n=$.eS()
m=$.eT()
l=$.eW()
k=$.eX()
j=$.eV()
$.eU()
i=$.eZ()
h=$.eY()
g=p.A(s)
if(g!=null)return A.U(a,A.dw(s,g))
else{g=o.A(s)
if(g!=null){g.method="call"
return A.U(a,A.dw(s,g))}else if(n.A(s)!=null||m.A(s)!=null||l.A(s)!=null||k.A(s)!=null||j.A(s)!=null||m.A(s)!=null||i.A(s)!=null||h.A(s)!=null)return A.U(a,new A.aN())}return A.U(a,new A.bQ(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.aS()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.U(a,new A.G(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.aS()
return a},
a0(a){var s
if(a instanceof A.au)return a.b
if(a==null)return new A.b3(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.b3(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
dV(a){if(a==null)return J.J(a)
if(typeof a=="object")return A.aO(a)
return J.J(a)},
hU(a){if(typeof a=="number")return B.ah.gk(a)
if(a instanceof A.c0)return A.aO(a)
if(a instanceof A.aj)return a.gk(a)
return A.dV(a)},
i0(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=a.length
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
if(m==null)o[q]=b.Y(q,p)
else m.b=p}else if(typeof q=="number"&&(q&0x3fffffff)===q){l=b.c
if(l==null){n=Object.create(null)
n["<non-identifier-key>"]=n
delete n["<non-identifier-key>"]
b.c=n
l=n}m=l[q]
if(m==null)l[q]=b.Y(q,p)
else m.b=p}else{k=b.d
if(k==null){n=Object.create(null)
n["<non-identifier-key>"]=n
delete n["<non-identifier-key>"]
b.d=n
k=n}j=b.ak(q)
i=k[j]
if(i==null)k[j]=[b.Y(q,p)]
else{r=b.al(i,q)
if(r>=0)i[r].b=p
else i.push(b.Y(q,p))}}}return b},
ho(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.e(new A.cH("Unsupported number of arguments for wrapped closure"))},
bf(a,b){var s=a.$identity
if(!!s)return s
s=A.hV(a,b)
a.$identity=s
return s},
hV(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.ho)},
f8(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.ch().constructor.prototype):Object.create(new A.aq(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.e2(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.f4(a1,h,g)
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
f4(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.e("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.f2)}throw A.e("Error in functionType of tearoff")},
f5(a,b,c,d){var s=A.e1
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
e2(a,b,c,d){if(c)return A.f7(a,b,d)
return A.f5(b.length,d,a,b)},
f6(a,b,c,d){var s=A.e1,r=A.f3
switch(b?-1:a){case 0:throw A.e(new A.bK("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
f7(a,b,c){var s,r
if($.e_==null)$.e_=A.dZ("interceptor")
if($.e0==null)$.e0=A.dZ("receiver")
s=b.length
r=A.f6(s,c,a,b)
return r},
dQ(a){return A.f8(a)},
f2(a,b){return A.b9(v.typeUniverse,A.bh(a.a),b)},
e1(a){return a.a},
f3(a){return a.b},
dZ(a){var s,r,q,p=new A.aq("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.e(A.ap("Field name "+a+" not found.",null))},
db(a){return v.getIsolateTag(a)},
iq(){return v.G},
ib(a){var s,r,q,p,o,n=$.eG.$1(a),m=$.d9[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.df[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.ez.$2(a,n)
if(q!=null){m=$.d9[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.df[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.di(s)
$.d9[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.df[n]=s
return s}if(p==="-"){o=A.di(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.eI(a,s)
if(p==="*")throw A.e(A.ec(n))
if(v.leafTags[n]===true){o=A.di(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.eI(a,s)},
eI(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.dU(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
di(a){return J.dU(a,!1,null,!!a.$ix)},
id(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.di(s)
else return J.dU(s,c,null,null)},
i7(){if(!0===$.dS)return
$.dS=!0
A.i8()},
i8(){var s,r,q,p,o,n,m,l
$.d9=Object.create(null)
$.df=Object.create(null)
A.i6()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.eK.$1(o)
if(n!=null){m=A.id(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
i6(){var s,r,q,p,o,n,m=B.a5()
m=A.am(B.a6,A.am(B.a7,A.am(B.R,A.am(B.R,A.am(B.a8,A.am(B.a9,A.am(B.aa(B.Q),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.eG=new A.dc(p)
$.ez=new A.dd(o)
$.eK=new A.de(n)},
am(a,b){return a(b)||b},
hW(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
ip(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
c:function c(a,b){this.a=a
this.b=b},
bo:function bo(){},
r:function r(a,b){this.a=a
this.$ti=b},
aQ:function aQ(){},
cx:function cx(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aN:function aN(){},
bw:function bw(a,b,c){this.a=a
this.b=b
this.c=c},
bQ:function bQ(a){this.a=a},
c9:function c9(a){this.a=a},
au:function au(a,b){this.a=a
this.b=b},
b3:function b3(a){this.a=a
this.b=null},
V:function V(){},
c2:function c2(){},
c3:function c3(){},
ci:function ci(){},
ch:function ch(){},
aq:function aq(a,b){this.a=a
this.b=b},
bK:function bK(a){this.a=a},
aF:function aF(){},
c6:function c6(a,b){this.a=a
this.b=b
this.c=null},
aE:function aE(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dc:function dc(a){this.a=a},
dd:function dd(a){this.a=a},
de:function de(a){this.a=a},
aj:function aj(){},
bY:function bY(){},
ac:function ac(){},
aL:function aL(){},
bx:function bx(){},
ad:function ad(){},
aJ:function aJ(){},
aK:function aK(){},
by:function by(){},
bz:function bz(){},
bA:function bA(){},
bB:function bB(){},
bC:function bC(){},
bD:function bD(){},
bE:function bE(){},
aM:function aM(){},
bF:function bF(){},
aY:function aY(){},
aZ:function aZ(){},
b_:function b_(){},
b0:function b0(){},
dz(a,b){var s=b.c
return s==null?b.c=A.b7(a,"a6",[b.x]):s},
e7(a){var s=a.w
if(s===6||s===7)return A.e7(a.x)
return s===11||s===12},
fp(a){return a.as},
bg(a){return A.d_(v.typeUniverse,a,!1)},
Y(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.Y(a1,s,a3,a4)
if(r===s)return a2
return A.ej(a1,r,!0)
case 7:s=a2.x
r=A.Y(a1,s,a3,a4)
if(r===s)return a2
return A.ei(a1,r,!0)
case 8:q=a2.y
p=A.al(a1,q,a3,a4)
if(p===q)return a2
return A.b7(a1,a2.x,p)
case 9:o=a2.x
n=A.Y(a1,o,a3,a4)
m=a2.y
l=A.al(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.dG(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.al(a1,j,a3,a4)
if(i===j)return a2
return A.ek(a1,k,i)
case 11:h=a2.x
g=A.Y(a1,h,a3,a4)
f=a2.y
e=A.hJ(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.eh(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.al(a1,d,a3,a4)
o=a2.x
n=A.Y(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.dH(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.e(A.bm("Attempted to substitute unexpected RTI kind "+a0))}},
al(a,b,c,d){var s,r,q,p,o=b.length,n=A.d0(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.Y(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
hK(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.d0(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.Y(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
hJ(a,b,c,d){var s,r=b.a,q=A.al(a,r,c,d),p=b.b,o=A.al(a,p,c,d),n=b.c,m=A.hK(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.bX()
s.a=q
s.b=o
s.c=m
return s},
m(a,b){a[v.arrayRti]=b
return a},
eC(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.i5(s)
return a.$S()}return null},
i9(a,b){var s
if(A.e7(b))if(a instanceof A.V){s=A.eC(a)
if(s!=null)return s}return A.bh(a)},
bh(a){if(a instanceof A.i)return A.dJ(a)
if(Array.isArray(a))return A.d2(a)
return A.dK(J.a_(a))},
d2(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
dJ(a){var s=a.$ti
return s!=null?s:A.dK(a)},
dK(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.hn(a,s)},
hn(a,b){var s=a instanceof A.V?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.fV(v.typeUniverse,s.name)
b.$ccache=r
return r},
i5(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.d_(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
i4(a){return A.Z(A.dJ(a))},
dN(a){var s
if(a instanceof A.aj)return A.i_(a.$r,a.aA())
s=a instanceof A.V?A.eC(a):null
if(s!=null)return s
if(t.R.b(a))return J.f1(a).a
if(Array.isArray(a))return A.d2(a)
return A.bh(a)},
Z(a){var s=a.r
return s==null?a.r=new A.c0(a):s},
i_(a,b){var s,r,q=b,p=q.length
if(p===0)return t.F
if(0>=p)return A.b(q,0)
s=A.b9(v.typeUniverse,A.dN(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.b(q,r)
s=A.em(v.typeUniverse,s,A.dN(q[r]))}return A.b9(v.typeUniverse,s,a)},
F(a){return A.Z(A.d_(v.typeUniverse,a,!1))},
hm(a){var s=this
s.b=A.hH(s)
return s.b(a)},
hH(a){var s,r,q,p
if(a===t.K)return A.hu
if(A.a1(a))return A.hy
s=a.w
if(s===6)return A.hk
if(s===1)return A.eu
if(s===7)return A.hp
r=A.hG(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.a1)){a.f="$i"+q
if(q==="d")return A.hs
if(a===t.m)return A.hr
return A.hx}}else if(s===10){p=A.hW(a.x,a.y)
return p==null?A.eu:p}return A.hi},
hG(a){if(a.w===8){if(a===t.S)return A.es
if(a===t.i||a===t.H)return A.ht
if(a===t.N)return A.hw
if(a===t.y)return A.dL}return null},
hl(a){var s=this,r=A.hh
if(A.a1(s))r=A.h8
else if(s===t.K)r=A.h5
else if(A.an(s)){r=A.hj
if(s===t.M)r=A.h1
else if(s===t.x)r=A.h7
else if(s===t.u)r=A.fY
else if(s===t.W)r=A.h4
else if(s===t.I)r=A.h_
else if(s===t.E)r=A.h2}else if(s===t.S)r=A.h0
else if(s===t.N)r=A.h6
else if(s===t.y)r=A.fX
else if(s===t.H)r=A.h3
else if(s===t.i)r=A.fZ
else if(s===t.m)r=A.T
s.a=r
return s.a(a)},
hi(a){var s=this
if(a==null)return A.an(s)
return A.ia(v.typeUniverse,A.i9(a,s),s)},
hk(a){if(a==null)return!0
return this.x.b(a)},
hx(a){var s,r=this
if(a==null)return A.an(r)
s=r.f
if(a instanceof A.i)return!!a[s]
return!!J.a_(a)[s]},
hs(a){var s,r=this
if(a==null)return A.an(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.i)return!!a[s]
return!!J.a_(a)[s]},
hr(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.i)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
et(a){if(typeof a=="object"){if(a instanceof A.i)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
hh(a){var s=this
if(a==null){if(A.an(s))return a}else if(s.b(a))return a
throw A.q(A.ep(a,s),new Error())},
hj(a){var s=this
if(a==null||s.b(a))return a
throw A.q(A.ep(a,s),new Error())},
ep(a,b){return new A.b5("TypeError: "+A.ed(a,A.z(b,null)))},
ed(a,b){return A.c4(a)+": type '"+A.z(A.dN(a),null)+"' is not a subtype of type '"+b+"'"},
C(a,b){return new A.b5("TypeError: "+A.ed(a,b))},
hp(a){var s=this
return s.x.b(a)||A.dz(v.typeUniverse,s).b(a)},
hu(a){return a!=null},
h5(a){if(a!=null)return a
throw A.q(A.C(a,"Object"),new Error())},
hy(a){return!0},
h8(a){return a},
eu(a){return!1},
dL(a){return!0===a||!1===a},
fX(a){if(!0===a)return!0
if(!1===a)return!1
throw A.q(A.C(a,"bool"),new Error())},
fY(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.q(A.C(a,"bool?"),new Error())},
fZ(a){if(typeof a=="number")return a
throw A.q(A.C(a,"double"),new Error())},
h_(a){if(typeof a=="number")return a
if(a==null)return a
throw A.q(A.C(a,"double?"),new Error())},
es(a){return typeof a=="number"&&Math.floor(a)===a},
h0(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.q(A.C(a,"int"),new Error())},
h1(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.q(A.C(a,"int?"),new Error())},
ht(a){return typeof a=="number"},
h3(a){if(typeof a=="number")return a
throw A.q(A.C(a,"num"),new Error())},
h4(a){if(typeof a=="number")return a
if(a==null)return a
throw A.q(A.C(a,"num?"),new Error())},
hw(a){return typeof a=="string"},
h6(a){if(typeof a=="string")return a
throw A.q(A.C(a,"String"),new Error())},
h7(a){if(typeof a=="string")return a
if(a==null)return a
throw A.q(A.C(a,"String?"),new Error())},
T(a){if(A.et(a))return a
throw A.q(A.C(a,"JSObject"),new Error())},
h2(a){if(a==null)return a
if(A.et(a))return a
throw A.q(A.C(a,"JSObject?"),new Error())},
ex(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.z(a[q],b)
return s},
hC(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.ex(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.z(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
eq(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
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
if(l===8){p=A.hL(a.x)
o=a.y
return o.length>0?p+("<"+A.ex(o,b)+">"):p}if(l===10)return A.hC(a,b)
if(l===11)return A.eq(a,b,null)
if(l===12)return A.eq(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.b(b,n)
return b[n]}return"?"},
hL(a){var s=A.eL(a)
if(s!=null)return s
return"minified:"+a},
fW(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
fV(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.d_(a,b,!1)
else if(typeof m=="number"){s=m
r=A.b8(a,5,"#")
q=A.d0(s)
for(p=0;p<s;++p)q[p]=r
o=A.b7(a,b,q)
n[b]=o
return o}else return m},
fU(a,b){return A.en(a.tR,b)},
fT(a,b){return A.en(a.eT,b)},
d_(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.el(a,null,b,!1)
r.set(b,s)
return s},
b9(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.el(a,b,c,!0)
q.set(c,r)
return r},
em(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.dG(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
el(a,b,c,d){return A.fK(A.fE(a,b,c,d))},
S(a,b){b.a=A.hl
b.b=A.hm
return b},
b8(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.D(null,null)
s.w=b
s.as=c
r=A.S(a,s)
a.eC.set(c,r)
return r},
ej(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.fR(a,b,r,c)
a.eC.set(r,s)
return s},
fR(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.a1(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.an(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.D(null,null)
q.w=6
q.x=b
q.as=c
return A.S(a,q)},
ei(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.fP(a,b,r,c)
a.eC.set(r,s)
return s},
fP(a,b,c,d){var s,r
if(d){s=b.w
if(A.a1(b)||b===t.K)return b
else if(s===1)return A.b7(a,"a6",[b])
else if(b===t.P||b===t.T)return t.O}r=new A.D(null,null)
r.w=7
r.x=b
r.as=c
return A.S(a,r)},
fS(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.D(null,null)
s.w=13
s.x=b
s.as=q
r=A.S(a,s)
a.eC.set(q,r)
return r},
b6(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
fO(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
b7(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.b6(c)+">"
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
dG(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.b6(r)+">")
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
ek(a,b,c){var s,r,q="+"+(b+"("+A.b6(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.D(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.S(a,s)
a.eC.set(q,r)
return r},
eh(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.b6(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.b6(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.fO(i)+"}"}r=n+(g+")")
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
dH(a,b,c,d){var s,r=b.as+("<"+A.b6(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.fQ(a,b,c,r,d)
a.eC.set(r,s)
return s},
fQ(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.d0(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.Y(a,b,r,0)
m=A.al(a,c,r,0)
return A.dH(a,n,m,c!==m)}}l=new A.D(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.S(a,l)},
fE(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
fK(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.fG(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.ef(a,r,l,k,!1)
else if(q===46)r=A.ef(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.X(a.u,a.e,k.pop()))
break
case 94:k.push(A.fS(a.u,k.pop()))
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
case 62:A.fI(a,k)
break
case 38:A.fH(a,k)
break
case 63:p=a.u
k.push(A.ej(p,A.X(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.ei(p,A.X(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.fF(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.eg(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.fL(a.u,a.e,o)
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
return A.X(a.u,a.e,m)},
fG(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
ef(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.fW(s,o.x)[p]
if(n==null)A.bi('No "'+p+'" in "'+A.fp(o)+'"')
d.push(A.b9(s,o,n))}else d.push(p)
return m},
fI(a,b){var s,r=a.u,q=A.ee(a,b),p=b.pop()
if(typeof p=="string")b.push(A.b7(r,p,q))
else{s=A.X(r,a.e,p)
switch(s.w){case 11:b.push(A.dH(r,s,q,a.n))
break
default:b.push(A.dG(r,s,q))
break}}},
fF(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.ee(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.X(p,a.e,o)
q=new A.bX()
q.a=s
q.b=n
q.c=m
b.push(A.eh(p,r,q))
return
case-4:b.push(A.ek(p,b.pop(),s))
return
default:throw A.e(A.bm("Unexpected state under `()`: "+A.n(o)))}},
fH(a,b){var s=b.pop()
if(0===s){b.push(A.b8(a.u,1,"0&"))
return}if(1===s){b.push(A.b8(a.u,4,"1&"))
return}throw A.e(A.bm("Unexpected extended operation "+A.n(s)))},
ee(a,b){var s=b.splice(a.p)
A.eg(a.u,a.e,s)
a.p=b.pop()
return s},
X(a,b,c){if(typeof c=="string")return A.b7(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.fJ(a,b,c)}else return c},
eg(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.X(a,b,c[s])},
fL(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.X(a,b,c[s])},
fJ(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.e(A.bm("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.e(A.bm("Bad index "+c+" for "+b.h(0)))},
ia(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.p(a,b,null,c,null)
r.set(c,s)}return s},
p(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.a1(d))return!0
s=b.w
if(s===4)return!0
if(A.a1(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.p(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.p(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.p(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.p(a,b.x,c,d,e))return!1
return A.p(a,A.dz(a,b),c,d,e)}if(s===6)return A.p(a,p,c,d,e)&&A.p(a,b.x,c,d,e)
if(q===7){if(A.p(a,b,c,d.x,e))return!0
return A.p(a,b,c,A.dz(a,d),e)}if(q===6)return A.p(a,b,c,p,e)||A.p(a,b,c,d.x,e)
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
if(!A.p(a,j,c,i,e)||!A.p(a,i,e,j,c))return!1}return A.er(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.er(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.hq(a,b,c,d,e)}if(o&&q===10)return A.hv(a,b,c,d,e)
return!1},
er(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
hq(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.b9(a,b,r[o])
return A.eo(a,p,null,c,d.y,e)}return A.eo(a,b.y,null,c,d.y,e)},
eo(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.p(a,b[s],d,e[s],f))return!1
return!0},
hv(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.p(a,r[s],c,q[s],e))return!1
return!0},
an(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.a1(a))if(s!==6)r=s===7&&A.an(a.x)
return r},
a1(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
en(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
d0(a){return a>0?new Array(a):v.typeUniverse.sEA},
D:function D(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
bX:function bX(){this.c=this.b=this.a=null},
c0:function c0(a){this.a=a},
bV:function bV(){},
b5:function b5(a){this.a=a},
fx(){var s,r,q
if(self.scheduleImmediate!=null)return A.hP()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.bf(new A.cC(s),1)).observe(r,{childList:true})
return new A.cB(s,r,q)}else if(self.setImmediate!=null)return A.hQ()
return A.hR()},
fy(a){self.scheduleImmediate(A.bf(new A.cD(a),0))},
fz(a){self.setImmediate(A.bf(new A.cE(a),0))},
fA(a){A.fM(0,a)},
ea(a,b){var s=B.a.B(a.a,1000)
return A.fN(s,b)},
fM(a,b){var s=new A.b4()
s.b4(a,b)
return s},
fN(a,b){var s=new A.b4()
s.b5(a,b)
return s},
hA(a){return new A.bR(new A.v($.o,a.i("v<0>")),a.i("bR<0>"))},
hb(a,b){a.$2(0,null)
b.b=!0
return b.a},
j_(a,b){A.hc(a,b)},
ha(a,b){var s,r=a==null?b.$ti.c.a(a):a
if(!b.b)b.a.b8(r)
else{s=b.a
if(b.$ti.i("a6<1>").b(r))s.aw(r)
else s.az(r)}},
h9(a,b){var s=A.ao(a),r=A.a0(a),q=b.a
if(b.b)q.a7(new A.H(s,r))
else q.au(new A.H(s,r))},
hc(a,b){var s,r,q=new A.d3(b),p=new A.d4(b)
if(a instanceof A.v)a.aI(q,p,t.z)
else{s=t.z
if(a instanceof A.v)a.aV(q,p,s)
else{r=new A.v($.o,t.c)
r.a=8
r.c=a
r.aI(q,p,s)}}},
hN(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.o.aU(new A.d7(s))},
dp(a){var s
if(t.Q.b(a)){s=a.gX()
if(s!=null)return s}return B.ad},
dE(a,b,c){var s,r,q,p={},o=p.a=a
while(s=o.a,(s&4)!==0){o=o.c
p.a=o}if(o===b){s=A.fr()
b.au(new A.H(new A.G(!0,o,null,"Cannot complete a future with itself"),s))
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.aE(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.a0()
b.Z(p.a)
A.ah(b,q)
return}b.a^=2
A.c1(null,null,b.b,new A.cL(p,b))},
ah(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){f=f.c
A.d5(f.a,f.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.ah(g.a,f)
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
if(r){A.d5(m.a,m.b)
return}j=$.o
if(j!==k)$.o=k
else j=null
f=f.c
if((f&15)===8)new A.cP(s,g,p).$0()
else if(q){if((f&1)!==0)new A.cO(s,m).$0()}else if((f&2)!==0)new A.cN(g,s).$0()
if(j!=null)$.o=j
f=s.c
if(f instanceof A.v){r=s.a.$ti
r=r.i("a6<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.a1(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.dE(f,i,!0)
return}}i=s.a.b
h=i.c
i.c=null
b=i.a1(h)
f=s.b
r=s.c
if(!f){i.a=8
i.c=r}else{i.a=i.a&1|16
i.c=r}g.a=i
f=i}},
hD(a,b){if(t.C.b(a))return b.aU(a)
if(t.v.b(a))return a
throw A.e(A.dY(a,"onError",u.c))},
hB(){var s,r
for(s=$.ak;s!=null;s=$.ak){$.bc=null
r=s.b
$.ak=r
if(r==null)$.bb=null
s.a.$0()}},
hI(){$.dM=!0
try{A.hB()}finally{$.bc=null
$.dM=!1
if($.ak!=null)$.dW().$1(A.eA())}},
ey(a){var s=new A.bT(a),r=$.bb
if(r==null){$.ak=$.bb=s
if(!$.dM)$.dW().$1(A.eA())}else $.bb=r.b=s},
hF(a){var s,r,q,p=$.ak
if(p==null){A.ey(a)
$.bc=$.bb
return}s=new A.bT(a)
r=$.bc
if(r==null){s.b=p
$.ak=$.bc=s}else{q=r.b
s.b=q
$.bc=r.b=s
if(q==null)$.bb=s}},
iM(a){A.dP(a,"stream",t.K)
return new A.bZ()},
dB(a){return new A.bS(null,a.i("bS<0>"))},
dD(a,b){var s=$.o
if(s===B.n)return A.ea(a,b)
return A.ea(a,s.aM(b,t.D))},
d5(a,b){A.hF(new A.d6(a,b))},
ev(a,b,c,d){var s,r=$.o
if(r===c)return d.$0()
$.o=c
s=r
try{r=d.$0()
return r}finally{$.o=s}},
ew(a,b,c,d,e){var s,r=$.o
if(r===c)return d.$1(e)
$.o=c
s=r
try{r=d.$1(e)
return r}finally{$.o=s}},
hE(a,b,c,d,e,f){var s,r=$.o
if(r===c)return d.$2(e,f)
$.o=c
s=r
try{r=d.$2(e,f)
return r}finally{$.o=s}},
c1(a,b,c,d){if(B.n!==c){d=c.bn(d)
d=d}A.ey(d)},
cC:function cC(a){this.a=a},
cB:function cB(a,b,c){this.a=a
this.b=b
this.c=c},
cD:function cD(a){this.a=a},
cE:function cE(a){this.a=a},
b4:function b4(){this.c=0},
cZ:function cZ(a,b){this.a=a
this.b=b},
cY:function cY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bR:function bR(a,b){this.a=a
this.b=!1
this.$ti=b},
d3:function d3(a){this.a=a},
d4:function d4(a){this.a=a},
d7:function d7(a){this.a=a},
H:function H(a,b){this.a=a
this.b=b},
bU:function bU(){},
bS:function bS(a,b){var _=this
_.b=a
_.c=0
_.e=_.d=null
_.$ti=b},
ag:function ag(a,b,c,d,e){var _=this
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
cI:function cI(a,b){this.a=a
this.b=b},
cM:function cM(a,b){this.a=a
this.b=b},
cL:function cL(a,b){this.a=a
this.b=b},
cK:function cK(a,b){this.a=a
this.b=b},
cJ:function cJ(a,b){this.a=a
this.b=b},
cP:function cP(a,b,c){this.a=a
this.b=b
this.c=c},
cQ:function cQ(a,b){this.a=a
this.b=b},
cR:function cR(a){this.a=a},
cO:function cO(a,b){this.a=a
this.b=b},
cN:function cN(a,b){this.a=a
this.b=b},
bT:function bT(a){this.a=a
this.b=null},
bZ:function bZ(){},
d1:function d1(){},
cV:function cV(){},
cW:function cW(a,b){this.a=a
this.b=b},
cX:function cX(a,b,c){this.a=a
this.b=b
this.c=c},
d6:function d6(a,b){this.a=a
this.b=b},
fk(a){return new A.aX(a.i("aX<0>"))},
dF(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
fD(a,b,c){var s=new A.ai(a,b,c.i("ai<0>"))
s.c=a.e
return s},
dy(a){var s,r
if(A.dT(a))return"{...}"
s=new A.bO("")
try{r={}
$.A.push(a)
s.a+="{"
r.a=!0
a.aj(0,new A.c7(r,s))
s.a+="}"}finally{if(0>=$.A.length)return A.b($.A,-1)
$.A.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
aX:function aX(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cU:function cU(a){this.a=a
this.c=this.b=null},
ai:function ai(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
l:function l(){},
aI:function aI(){},
c7:function c7(a,b){this.a=a
this.b=b},
aR:function aR(){},
b2:function b2(){},
f9(a,b){a=A.q(a,new Error())
a.stack=b.h(0)
throw a},
dx(a,b,c){var s,r,q
if(a>4294967295)A.bi(A.e6(a,0,4294967295,"length",null))
s=A.m(new Array(a),c.i("k<0>"))
s.$flags=1
r=s
if(a!==0)for(s=r.length,q=0;q<s;++q)r[q]=b
return r},
fl(a,b,c){var s,r,q=A.m([],c.i("k<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.a2)(a),++r)q.push(a[r])
q.$flags=1
return q},
e8(a,b,c){var s=J.dm(b)
if(!s.p())return a
if(c.length===0){do a+=A.n(s.gq())
while(s.p())}else{a+=A.n(s.gq())
while(s.p())a=a+c+A.n(s.gq())}return a},
fr(){return A.a0(new Error())},
dq(a){return new A.bp(1000*a)},
c4(a){if(typeof a=="number"||A.dL(a)||a==null)return J.bj(a)
if(typeof a=="string")return JSON.stringify(a)
return A.e5(a)},
fa(a,b){A.dP(a,"error",t.K)
A.dP(b,"stackTrace",t.l)
A.f9(a,b)},
bm(a){return new A.bl(a)},
ap(a,b){return new A.G(!1,null,b,a)},
dY(a,b,c){return new A.G(!0,a,b,c)},
e6(a,b,c,d,e){return new A.aP(b,c,!0,a,d,"Invalid value")},
fo(a,b){if(a<0)throw A.e(A.e6(a,0,null,b,null))
return a},
ds(a,b,c,d,e){return new A.br(b,!0,a,e,"Index out of range")},
cA(a){return new A.aV(a)},
ec(a){return new A.bP(a)},
a5(a){return new A.bn(a)},
fh(a,b){if(a<=0)return new A.at(b.i("at<0>"))
if(!b.i("0(a)").b(A.eD()))throw A.e(A.ap("Generator must be supplied or element type must allow integers","generator"))
return new A.aW(a,A.eD(),b.i("aW<0>"))},
fi(a,b,c){var s,r
if(A.dT(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.m([],t.s)
$.A.push(a)
try{A.hz(a,s)}finally{if(0>=$.A.length)return A.b($.A,-1)
$.A.pop()}r=A.e8(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
du(a,b,c){var s,r
if(A.dT(a))return b+"..."+c
s=new A.bO(b)
$.A.push(a)
try{r=s
r.a=A.e8(r.a,a,", ")}finally{if(0>=$.A.length)return A.b($.A,-1)
$.A.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
fC(a){return a},
hz(a,b){var s,r,q,p,o,n,m,l=a.gv(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.p())return
s=A.n(l.gq())
b.push(s)
k+=s.length+2;++j}if(!l.p()){if(j<=5)return
if(0>=b.length)return A.b(b,-1)
r=b.pop()
if(0>=b.length)return A.b(b,-1)
q=b.pop()}else{p=l.gq();++j
if(!l.p()){if(j<=4){b.push(A.n(p))
return}r=A.n(p)
if(0>=b.length)return A.b(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gq();++j
for(;l.p();p=o,o=n){n=l.gq();++j
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
ca(a,b,c,d){var s
if(B.r===c){s=B.a.gk(a)
b=J.J(b)
return A.dC(A.R(A.R($.dl(),s),b))}if(B.r===d){s=B.a.gk(a)
b=J.J(b)
c=J.J(c)
return A.dC(A.R(A.R(A.R($.dl(),s),b),c))}s=B.a.gk(a)
b=J.J(b)
c=J.J(c)
d=J.J(d)
d=A.dC(A.R(A.R(A.R(A.R($.dl(),s),b),c),d))
return d},
bp:function bp(a){this.a=a},
cF:function cF(){},
j:function j(){},
bl:function bl(a){this.a=a},
L:function L(){},
G:function G(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aP:function aP(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
br:function br(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
aV:function aV(a){this.a=a},
bP:function bP(a){this.a=a},
bN:function bN(a){this.a=a},
bn:function bn(a){this.a=a},
bG:function bG(){},
aS:function aS(){},
cH:function cH(a){this.a=a},
K:function K(){},
aW:function aW(a,b,c){this.a=a
this.b=b
this.$ti=c},
u:function u(){},
i:function i(){},
c_:function c_(){},
bO:function bO(a){this.a=a},
cS:function cS(){},
N:function N(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a9:function a9(){},
ab:function ab(a,b,c,d,e,f,g){var _=this
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
fq(a,b,c,d,e,f,g,h){var s,r,q,p=A.e3(),o=h*g
p.width=o
s=d*f
p.height=s
r=A.e3()
r.width=o
r.height=s
s=A.m([],t.w)
for(o=A.fh(d,t.z),o=o.gv(o);o.p();){o.gq()
q=B.a.B(h,32)
s.push(new Uint32Array(q+1))}p=new A.bL(!0,d,h,g,f,c,a,p,r,s)
p.b1(a,b,c,d,!0,f,g,h)
return p},
dA(a){return new A.c(B.a.B(a,32),31-B.a.j(a,32))},
bL:function bL(a,b,c,d,e,f,g,h,i,j){var _=this
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
cc:function cc(a){this.a=a},
cd:function cd(a){this.a=a},
ce:function ce(a){this.a=a},
cf:function cf(a){this.a=a},
cb:function cb(){},
c8:function c8(a,b){this.a=a
this.b=b},
fs(a,b,c,d,e,f){var s,r,q,p,o="white",n=null,m=A.fq("black",b,o,f*(8+e),!0,c,d,a*8),l=A.m([],t.J)
for(s=t.U,r=0;r<f;++r){q=A.m([],s)
for(p=0;p<a;++p)q.push(new A.N(r,p," ",o))
l.push(q)}m=new A.cj(f,a,e,b,m,new A.ae(f,a),new A.ae(f,a),new A.ae(f,a),A.dB(t.N),A.dB(t.V),A.dB(t.q),B.fc,l,A.fk(t.A),B.eQ)
m.b2("black",a,b,o,n,!0,c,d,e,f,!0,n,n,n,n,n,n)
return m},
bM:function bM(a,b){this.a=a
this.b=b},
cj:function cj(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.ay=l
_.ch=m
_.CW=n
_.cx=o
_.cy=!1},
cr:function cr(a){this.a=a},
cq:function cq(){},
cp:function cp(a){this.a=a},
ck:function ck(a){this.a=a},
cl:function cl(a){this.a=a},
cm:function cm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cn:function cn(a,b,c){this.a=a
this.b=b
this.c=c},
co:function co(a){this.a=a},
fB(a,b,c,d){var s=A.hO(new A.cG(c),t.m)
s=s==null?null:A.dI(s)
if(s!=null)a.addEventListener(b,s,!1)
return new A.bW(a,b,s,!1)},
hO(a,b){var s=$.o
if(s===B.n)return a
return s.aM(a,b)},
dr:function dr(a){this.$ti=a},
bW:function bW(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
cG:function cG(a){this.a=a},
bJ:function bJ(a,b){this.a=a
this.b=b},
W:function W(){this.a="black"},
ft(a,b,c,d,e,f,g,h,i,j,k,l){var s,r,q,p,o=A.m([],t.Z),n=A.m([],t.d)
for(s=t.h,r=0;r<24;++r){q=A.m([],s)
for(p=0;p<12;++p)q.push(new A.W())
n.push(q)}o=new A.cs(f,j,k,g,i,l,h,e,a,c,b,d,new A.aU(new A.aT(B.v,B.d)),new A.aU(new A.aT(B.v,B.d)),o,n)
o.b3(a,b,c,d,e,f,g,h,i,j,k,l)
return o},
cs:function cs(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cu:function cu(a){this.a=a},
ct:function ct(a){this.a=a},
dj(a){var s=$.be,r=-a.length
if(s.length!==0){$.be=a+B.t.K(" ",$.bd)+s
$.bd=r}else{$.bd=r-1
$.be=a}},
ic(){A.dD(A.dq(100),new A.dg())
var s=A.ft(A.ir(),A.is(),A.it(),A.iu(),A.iv(),A.iw(),A.ix(),A.iy(),A.iz(),A.iA(),A.iB(),A.iC())
A.fB(v.G.window,"keydown",new A.dh(s),!1)
A.eJ()},
eJ(){var s,r,q,p,o=$.B()
o.C(0)
for(s=A.fd(A.m("  _____    _       _    _ \n |_   _|__| |_ _ _(_)__| |\n   | |/ -_)  _| '_| (_-<_|\n   |_|\\___|\\__|_| |_/__(_)\n   \n".split("\n"),t.s),0,t.N),r=J.dm(s.a),s=s.b,q=new A.ay(r,s);q.p();){p=q.c
p=p>=0?new A.c(s+p,r.gq()):A.bi(A.dt())
o.bv(p.b,3,p.a+4)}o.H("Controls:",4)
o.an()
o.H("\u2190 Shift left",6)
o.H("\u2192 Shift right",6)
o.H("\u2193 Soft drop",6)
o.H("Z Rotate counter clockwise",6)
o.H("X Rotate clockwise",6)
o.H("C Hard drop",6)
o.an()
o.H("Press enter to begin!",6)},
io(){var s,r,q="#333",p=$.B()
p.C(0)
p.O("\u250c"+B.t.K("\u252c",10)+"\u2510",q,3,!1,4)
for(s=0;s<20;++s){r=s+2+3
p.S(q,3,r)
p.t()
p.R("\u251c",3,r)
p.t()
p.S(q,14,r)
p.t()
p.R("\u2524",14,r)
p.t()}p.D("TETRIS!","white",15,1)
p.O("\u2514"+B.t.K("\u2534",10)+"\u2518",q,3,!1,25)
p.D("Next:","white",17,15)},
ig(){$.da=B.af
var s=$.B()
s.D("Game Over!","white",17,21)
s.D("Press enter!","white",17,23)},
ik(){},
il(a){var s,r,q=B.a.B(a,1e6),p=B.a.j(a,1e6),o=B.a.B(p,1000)
p=B.a.j(p,1000)
s=A.m([],t.s)
if(q>0)s.push(""+q)
if(o>0)s.push(""+o)
s.push(""+p)
r=B.m.aQ(s,",")
s=$.B()
s.D("Score:","white",17,11)
s.D(r,"white",17,13)},
ih(a){$.B().D("Level "+a,"white",17,7)
if(a!==1)A.dj(" -: Level up! :- ")},
ij(a){$.B().D("["+B.t.K("\u2588",a)+B.t.K("\u2592",10-a)+"]","white",17,9)},
im(a){var s,r,q,p,o,n
for(s=3;s<a.length-1;++s){r=s+2
q=1
for(;;){if(!(s<a.length))return A.b(a,s)
p=a[s]
if(!(q<p.length-1))break
o=$.B()
n=q+3
p=p[q].a
o.S(p!=="black"?p:"#333",n,r)
o.t()
if(!(s<a.length))return A.b(a,s)
p=a[s]
if(!(q<p.length))return A.b(p,q)
o.R(p[q].a!=="black"?"\u2592":"\u253c",n,r)
o.t();++q}}},
ii(a){if(a===4)A.dj(" -: Tetris! :- ")
else A.dj(" -: x"+a+" :-")},
ie(){A.dj(" -: Board cleared! :- ")},
eB(a,b,c){var s,r,q,p,o,n
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.a2)(a),++r){q=a[r]
p=q.a
if(p>=3){o=$.B()
n=p+2+c
q=q.b+3
o.S("#333",q,n)
o.t()
o.R(b,q,n)
o.t()}}},
hS(a){return A.eB(a,"\u253c",0)},
hT(a){return A.eB(a," ",13)},
eE(a,b,c){var s,r,q,p,o,n
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.a2)(a),++r){q=a[r]
p=q.a
if(p>=3){o=$.B()
n=p+2+c
q=q.b+3
o.S(b,q,n)
o.t()
o.R("\u2588",q,n)
o.t()}}},
hY(a,b){return A.eE(a,b,0)},
hZ(a,b){return A.eE(a,b,13)},
aw:function aw(a,b){this.a=a
this.b=b},
dg:function dg(){},
dh:function dh(a){this.a=a},
aT:function aT(a,b){this.a=a
this.b=b},
aU:function aU(a){this.a=a
this.c=this.b=0},
E:function E(a,b){this.a=a
this.b=b},
e9(){var s,r=A.m([],t.Z)
for(s=0;s<7;++s)r.push(B.d9[s])
B.m.aZ(r,new A.cv())
return r},
w:function w(a,b){this.a=a
this.b=b},
cv:function cv(){},
eL(a){return v.mangledGlobalNames[a]},
iD(a){throw A.q(new A.aG("Field '"+a+"' has been assigned during initialization."),new Error())},
I(){throw A.q(A.fj(""),new Error())},
ba(a){var s
if(typeof a=="function")throw A.e(A.ap("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.hd,a)
s[$.dk()]=a
return s},
dI(a){var s
if(typeof a=="function")throw A.e(A.ap("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.he,a)
s[$.dk()]=a
return s},
hd(a){return a.$0()},
he(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
i3(a,b){return a[b]},
hf(a,b,c){return a[b](c)},
e3(){return v.G.document.createElement("canvas")}},B={}
var w=[A,J,B]
var $={}
A.dv.prototype={}
J.bs.prototype={
I(a,b){return a===b},
gk(a){return A.aO(a)},
h(a){return"Instance of '"+A.bI(a)+"'"},
gl(a){return A.Z(A.dK(this))}}
J.bu.prototype={
h(a){return String(a)},
gk(a){return a?519018:218159},
gl(a){return A.Z(t.y)},
$if:1}
J.aA.prototype={
I(a,b){return null==b},
h(a){return"null"},
gk(a){return 0},
$if:1}
J.aC.prototype={$ih:1}
J.P.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.bH.prototype={}
J.af.prototype={}
J.O.prototype={
h(a){var s=a[$.eN()]
if(s==null)s=a[$.dk()]
if(s==null)return this.b0(a)
return"JavaScript function for "+J.bj(s)}}
J.aB.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.aD.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.k.prototype={
aL(a,b){a.$flags&1&&A.a3(a,"addAll",2)
this.b7(a,b)
return},
b7(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw A.e(A.a5(a))
for(s=0;s<r;++s)a.push(b[s])},
C(a){a.$flags&1&&A.a3(a,"clear","clear")
a.length=0},
aQ(a,b){var s,r,q=a.length,p=A.dx(q,"",t.N)
for(s=0;s<a.length;++s){r=A.n(a[s])
if(!(s<q))return A.b(p,s)
p[s]=r}return p.join(b)},
bo(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw A.e(A.a5(a))}return s},
bp(a,b,c){return this.bo(a,b,c,t.z)},
bm(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw A.e(A.a5(a))}return!1},
aZ(a,b){var s,r,q,p,o,n
a.$flags&2&&A.a3(a,"sort")
s=a.length
if(s<2)return
if(s===2){r=a[0]
q=a[1]
p=b.$2(r,q)
if(typeof p!=="number")return p.bM()
if(p>0){a[0]=q
a[1]=r}return}o=0
if(A.d2(a).c.b(null))for(n=0;n<a.length;++n)if(a[n]===void 0){a[n]=null;++o}a.sort(A.bf(b,2))
if(o>0)this.bi(a,o)},
bi(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
aP(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.b(a,s)
if(J.a4(a[s],b))return s}return-1},
h(a){return A.du(a,"[","]")},
gv(a){return new J.bk(a,a.length,A.d2(a).i("bk<1>"))},
gk(a){return A.aO(a)},
gn(a){return a.length},
$id:1}
J.bt.prototype={
bJ(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.bI(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.c5.prototype={}
J.bk.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
p(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.e(A.a2(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.a7.prototype={
bH(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.e(A.cA(""+a+".toInt()"))},
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
return this.aH(a,b)},
B(a,b){return(a|0)===a?a/b|0:this.aH(a,b)},
aH(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.e(A.cA("Result of truncating division is "+A.n(s)+": "+A.n(a)+" ~/ "+b))},
W(a,b){if(b<0)throw A.e(A.dO(b))
return b>31?0:a<<b>>>0},
bk(a,b){return b>31?0:a<<b>>>0},
aX(a,b){var s
if(b<0)throw A.e(A.dO(b))
if(a>0)s=this.ad(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
bl(a,b){var s
if(a>0)s=this.ad(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
F(a,b){if(0>b)throw A.e(A.dO(b))
return this.ad(a,b)},
ad(a,b){return b>31?0:a>>>b},
gl(a){return A.Z(t.H)},
$it:1}
J.az.prototype={
gl(a){return A.Z(t.S)},
$if:1,
$ia:1}
J.bv.prototype={
gl(a){return A.Z(t.i)},
$if:1}
J.a8.prototype={
K(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.e(B.ab)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
bw(a,b,c){var s=b-a.length
if(s<=0)return a
return this.K(c,s)+a},
h(a){return a},
gk(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gl(a){return A.Z(t.N)},
gn(a){return a.length},
$if:1,
$iy:1}
A.aG.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.cg.prototype={}
A.as.prototype={}
A.aH.prototype={
gv(a){var s=this
return new A.aa(s,s.gn(s),A.dJ(s).i("aa<1>"))}}
A.aa.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
p(){var s,r=this,q=r.a,p=J.eF(q),o=p.gn(q)
if(r.b!==o)throw A.e(A.a5(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.ah(q,s);++r.c
return!0}}
A.at.prototype={
gv(a){return B.a4},
gn(a){return 0}}
A.bq.prototype={
p(){return!1},
gq(){throw A.e(A.dt())}}
A.ax.prototype={
gn(a){return J.dn(this.a)},
gv(a){return new A.ay(J.dm(this.a),this.b)}}
A.ar.prototype={}
A.ay.prototype={
p(){if(++this.c>=0&&this.a.p())return!0
this.c=-2
return!1},
gq(){var s=this.c
return s>=0?new A.c(this.b+s,this.a.gq()):A.bi(A.dt())}}
A.av.prototype={}
A.c.prototype={$r:"+(1,2)",$s:1}
A.bo.prototype={
h(a){return A.dy(this)}}
A.r.prototype={
a_(){var s=this,r=s.$map
if(r==null){r=new A.aE(s.$ti.i("aE<1,2>"))
A.i0(s.a,r)
s.$map=r}return r},
ag(a){return this.a_().ag(a)},
E(a,b){return this.a_().E(0,b)},
aj(a,b){this.a_().aj(0,b)},
gn(a){return this.a_().a}}
A.aQ.prototype={}
A.cx.prototype={
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
A.bw.prototype={
h(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.bQ.prototype={
h(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.c9.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.au.prototype={}
A.b3.prototype={
h(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iQ:1}
A.V.prototype={
h(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.eM(r==null?"unknown":r)+"'"},
gbL(){return this},
$C:"$1",
$R:1,
$D:null}
A.c2.prototype={$C:"$0",$R:0}
A.c3.prototype={$C:"$2",$R:2}
A.ci.prototype={}
A.ch.prototype={
h(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.eM(s)+"'"}}
A.aq.prototype={
I(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.aq))return!1
return this.$_target===b.$_target&&this.a===b.a},
gk(a){return(A.dV(this.a)^A.aO(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.bI(this.a)+"'")}}
A.bK.prototype={
h(a){return"RuntimeError: "+this.a}}
A.aF.prototype={
gn(a){return this.a},
ag(a){var s=this.b
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
return q}else return this.bs(b)},
bs(a){var s,r,q=this.d
if(q==null)return null
s=this.bf(q,a)
r=this.al(s,a)
if(r<0)return null
return s[r].b},
aj(a,b){var s=this,r=s.e,q=s.r
while(r!=null){b.$2(r.a,r.b)
if(q!==s.r)throw A.e(A.a5(s))
r=r.c}},
Y(a,b){var s=this,r=new A.c6(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&1073741823
return r},
ak(a){return J.J(a)&1073741823},
bf(a,b){return a[this.ak(b)]},
al(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a4(a[r].a,b))return r
return-1},
h(a){return A.dy(this)}}
A.c6.prototype={}
A.aE.prototype={
ak(a){return A.hU(a)&1073741823},
al(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a4(a[r].a,b))return r
return-1}}
A.dc.prototype={
$1(a){return this.a(a)},
$S:10}
A.dd.prototype={
$2(a,b){return this.a(a,b)},
$S:11}
A.de.prototype={
$1(a){return this.a(a)},
$S:12}
A.aj.prototype={
h(a){return this.aK(!1)},
aK(a){var s,r,q,p,o,n=this.bd(),m=this.aA(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.b(m,q)
o=m[q]
l=a?l+A.e5(o):l+A.n(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
bd(){var s,r=this.$s
while($.b1.length<=r)$.b1.push(null)
s=$.b1[r]
if(s==null){s=this.bc()
if(!(r<$.b1.length))return A.b($.b1,r)
$.b1[r]=s}return s},
bc(){var s,r,q,p,o,n=this.$r,m=n.indexOf("("),l=n.substring(1,m),k=n.substring(m),j=k==="()"?0:k.replace(/[^,]/g,"").length+1,i=A.m(new Array(j),t.f)
for(s=0;s<j;++s)i[s]=s
if(l!==""){r=l.split(",")
s=r.length
for(q=i.length,p=j;s>0;){--p;--s
o=r[s]
if(!(p>=0&&p<q))return A.b(i,p)
i[p]=o}}i=A.fl(i,!1,t.K)
i.$flags=3
return i}}
A.bY.prototype={
aA(){return[this.a,this.b]},
I(a,b){if(b==null)return!1
return b instanceof A.bY&&this.$s===b.$s&&J.a4(this.a,b.a)&&J.a4(this.b,b.b)},
gk(a){return A.ca(this.$s,this.a,this.b,B.r)}}
A.ac.prototype={
gl(a){return B.fe},
$if:1}
A.aL.prototype={}
A.bx.prototype={
gl(a){return B.ff},
$if:1}
A.ad.prototype={
gn(a){return a.length},
$ix:1}
A.aJ.prototype={$id:1}
A.aK.prototype={$id:1}
A.by.prototype={
gl(a){return B.fg},
$if:1}
A.bz.prototype={
gl(a){return B.fh},
$if:1}
A.bA.prototype={
gl(a){return B.fi},
$if:1}
A.bB.prototype={
gl(a){return B.fj},
$if:1}
A.bC.prototype={
gl(a){return B.fk},
$if:1}
A.bD.prototype={
gl(a){return B.fm},
$if:1}
A.bE.prototype={
gl(a){return B.fn},
$if:1,
$icz:1}
A.aM.prototype={
gl(a){return B.fo},
gn(a){return a.length},
$if:1}
A.bF.prototype={
gl(a){return B.fp},
gn(a){return a.length},
$if:1}
A.aY.prototype={}
A.aZ.prototype={}
A.b_.prototype={}
A.b0.prototype={}
A.D.prototype={
i(a){return A.b9(v.typeUniverse,this,a)},
av(a){return A.em(v.typeUniverse,this,a)}}
A.bX.prototype={}
A.c0.prototype={
h(a){return A.z(this.a,null)}}
A.bV.prototype={
h(a){return this.a}}
A.b5.prototype={$iL:1}
A.cC.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:5}
A.cB.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:13}
A.cD.prototype={
$0(){this.a.$0()},
$S:1}
A.cE.prototype={
$0(){this.a.$0()},
$S:1}
A.b4.prototype={
b4(a,b){if(self.setTimeout!=null)self.setTimeout(A.bf(new A.cZ(this,b),0),a)
else throw A.e(A.cA("`setTimeout()` not found."))},
b5(a,b){if(self.setTimeout!=null)self.setInterval(A.bf(new A.cY(this,a,Date.now(),b),0),a)
else throw A.e(A.cA("Periodic timer."))},
$icw:1}
A.cZ.prototype={
$0(){this.a.c=1
this.b.$0()},
$S:0}
A.cY.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.a.J(s,o)}q.c=p
r.d.$1(q)},
$S:1}
A.bR.prototype={}
A.d3.prototype={
$1(a){return this.a.$2(0,a)},
$S:14}
A.d4.prototype={
$2(a,b){this.a.$2(1,new A.au(a,b))},
$S:15}
A.d7.prototype={
$2(a,b){this.a(a,b)},
$S:16}
A.H.prototype={
h(a){return A.n(this.a)},
$ij:1,
gX(){return this.b}}
A.bU.prototype={}
A.bS.prototype={}
A.ag.prototype={
bt(a){if((this.c&15)!==6)return!0
return this.b.b.ao(this.d,a.a)},
bq(a){var s,r=this.e,q=null,p=a.a,o=this.b.b
if(t.C.b(r))q=o.bB(r,p,a.b)
else q=o.ao(r,p)
try{p=q
return p}catch(s){if(t._.b(A.ao(s))){if((this.c&1)!==0)throw A.e(A.ap("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.e(A.ap("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.v.prototype={
aV(a,b,c){var s,r=$.o
if(r===B.n){if(!t.C.b(b)&&!t.v.b(b))throw A.e(A.dY(b,"onError",u.c))}else b=A.hD(b,r)
s=new A.v(r,c.i("v<0>"))
this.a5(new A.ag(s,3,a,b,this.$ti.i("@<1>").av(c).i("ag<1,2>")))
return s},
aI(a,b,c){var s=new A.v($.o,c.i("v<0>"))
this.a5(new A.ag(s,19,a,b,this.$ti.i("@<1>").av(c).i("ag<1,2>")))
return s},
bj(a){this.a=this.a&1|16
this.c=a},
Z(a){this.a=a.a&30|this.a&1
this.c=a.c},
a5(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.a5(a)
return}s.Z(r)}A.c1(null,null,s.b,new A.cI(s,a))}},
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
return}n.Z(s)}m.a=n.a1(a)
A.c1(null,null,n.b,new A.cM(m,n))}},
a0(){var s=this.c
this.c=null
return this.a1(s)},
a1(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
az(a){var s=this,r=s.a0()
s.a=8
s.c=a
A.ah(s,r)},
bb(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.a0()
q.Z(a)
A.ah(q,r)},
a7(a){var s=this.a0()
this.bj(a)
A.ah(this,s)},
b8(a){if(this.$ti.i("a6<1>").b(a)){this.aw(a)
return}this.b9(a)},
b9(a){this.a^=2
A.c1(null,null,this.b,new A.cK(this,a))},
aw(a){A.dE(a,this,!1)
return},
au(a){this.a^=2
A.c1(null,null,this.b,new A.cJ(this,a))},
$ia6:1}
A.cI.prototype={
$0(){A.ah(this.a,this.b)},
$S:0}
A.cM.prototype={
$0(){A.ah(this.b,this.a.a)},
$S:0}
A.cL.prototype={
$0(){A.dE(this.a.a,this.b,!0)},
$S:0}
A.cK.prototype={
$0(){this.a.az(this.b)},
$S:0}
A.cJ.prototype={
$0(){this.a.a7(this.b)},
$S:0}
A.cP.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.bz(q.d)}catch(p){s=A.ao(p)
r=A.a0(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.dp(q)
n=k.a
n.c=new A.H(q,o)
q=n}q.b=!0
return}if(j instanceof A.v&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.v){m=k.b.a
l=new A.v(m.b,m.$ti)
j.aV(new A.cQ(l,m),new A.cR(l),t.o)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.cQ.prototype={
$1(a){this.a.bb(this.b)},
$S:5}
A.cR.prototype={
$2(a,b){this.a.a7(new A.H(a,b))},
$S:17}
A.cO.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
q.c=p.b.b.ao(p.d,this.b)}catch(o){s=A.ao(o)
r=A.a0(o)
q=s
p=r
if(p==null)p=A.dp(q)
n=this.a
n.c=new A.H(q,p)
n.b=!0}},
$S:0}
A.cN.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.bt(s)&&p.a.e!=null){p.c=p.a.bq(s)
p.b=!1}}catch(o){r=A.ao(o)
q=A.a0(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.dp(p)
m=l.b
m.c=new A.H(p,n)
p=m}p.b=!0}},
$S:0}
A.bT.prototype={}
A.bZ.prototype={}
A.d1.prototype={}
A.cV.prototype={
bD(a){var s,r,q
try{if(B.n===$.o){a.$0()
return}A.ev(null,null,this,a)}catch(q){s=A.ao(q)
r=A.a0(q)
A.d5(s,r)}},
bF(a,b){var s,r,q
try{if(B.n===$.o){a.$1(b)
return}A.ew(null,null,this,a,b)}catch(q){s=A.ao(q)
r=A.a0(q)
A.d5(s,r)}},
bG(a,b){return this.bF(a,b,t.z)},
bn(a){return new A.cW(this,a)},
aM(a,b){return new A.cX(this,a,b)},
bA(a){if($.o===B.n)return a.$0()
return A.ev(null,null,this,a)},
bz(a){return this.bA(a,t.z)},
bE(a,b){if($.o===B.n)return a.$1(b)
return A.ew(null,null,this,a,b)},
ao(a,b){var s=t.z
return this.bE(a,b,s,s)},
bC(a,b,c){if($.o===B.n)return a.$2(b,c)
return A.hE(null,null,this,a,b,c)},
bB(a,b,c){var s=t.z
return this.bC(a,b,c,s,s,s)},
by(a){return a},
aU(a){var s=t.z
return this.by(a,s,s,s)}}
A.cW.prototype={
$0(){return this.a.bD(this.b)},
$S:0}
A.cX.prototype={
$1(a){return this.a.bG(this.b,a)},
$S(){return this.c.i("~(0)")}}
A.d6.prototype={
$0(){A.fa(this.a,this.b)},
$S:0}
A.aX.prototype={
gv(a){var s=this,r=new A.ai(s,s.r,s.$ti.i("ai<1>"))
r.c=s.e
return r},
gn(a){return this.a},
a3(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.ar(s==null?q.b=A.dF():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.ar(r==null?q.c=A.dF():r,b)}else return q.b6(b)},
b6(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.dF()
s=J.J(a)&1073741823
r=p[s]
if(r==null)p[s]=[q.ab(a)]
else{if(q.be(r,a)>=0)return!1
r.push(q.ab(a))}return!0},
ar(a,b){if(a[b]!=null)return!1
a[b]=this.ab(b)
return!0},
aC(){this.r=this.r+1&1073741823},
ab(a){var s,r=this,q=new A.cU(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.aC()
return q},
be(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a4(a[r].a,b))return r
return-1}}
A.cU.prototype={}
A.ai.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
p(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.e(A.a5(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.l.prototype={
gv(a){return new A.aa(a,a.length,A.bh(a).i("aa<l.E>"))},
ah(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
h(a){return A.du(a,"[","]")}}
A.aI.prototype={
gn(a){return this.a},
h(a){return A.dy(this)}}
A.c7.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.n(a)
r.a=(r.a+=s)+": "
s=A.n(b)
r.a+=s},
$S:18}
A.aR.prototype={
h(a){return A.du(this,"{","}")}}
A.b2.prototype={}
A.bp.prototype={
I(a,b){if(b==null)return!1
return b instanceof A.bp&&this.a===b.a},
gk(a){return B.a.gk(this.a)},
h(a){var s,r,q,p,o=this.a,n=B.a.B(o,36e8)
o%=36e8
s=B.a.B(o,6e7)
o%=6e7
r=s<10?"0":""
q=B.a.B(o,1e6)
p=q<10?"0":""
return""+n+":"+r+s+":"+p+q+"."+B.t.bw(B.a.h(o%1e6),6,"0")}}
A.cF.prototype={
h(a){return this.L()}}
A.j.prototype={
gX(){return A.fn(this)}}
A.bl.prototype={
h(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.c4(s)
return"Assertion failed"}}
A.L.prototype={}
A.G.prototype={
gaa(){return"Invalid argument"+(!this.a?"(s)":"")},
ga9(){return""},
h(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.gaa()+q+o
if(!s.a)return n
return n+s.ga9()+": "+A.c4(s.gam())},
gam(){return this.b}}
A.aP.prototype={
gam(){return this.b},
gaa(){return"RangeError"},
ga9(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.n(q):""
else if(q==null)s=": Not greater than or equal to "+A.n(r)
else if(q>r)s=": Not in inclusive range "+A.n(r)+".."+A.n(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.n(r)
return s}}
A.br.prototype={
gam(){return this.b},
gaa(){return"RangeError"},
ga9(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gn(a){return this.f}}
A.aV.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.bP.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.bN.prototype={
h(a){return"Bad state: "+this.a}}
A.bn.prototype={
h(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.c4(s)+"."}}
A.bG.prototype={
h(a){return"Out of Memory"},
gX(){return null},
$ij:1}
A.aS.prototype={
h(a){return"Stack Overflow"},
gX(){return null},
$ij:1}
A.cH.prototype={
h(a){return"Exception: "+this.a}}
A.K.prototype={
gn(a){var s,r=this.gv(this)
for(s=0;r.p();)++s
return s},
ah(a,b){var s,r
A.fo(b,"index")
s=this.gv(this)
for(r=b;s.p();){if(r===0)return s.gq();--r}throw A.e(A.ds(b,b-r,this,null,"index"))},
h(a){return A.fi(this,"(",")")}}
A.aW.prototype={
ah(a,b){var s=this.a
if(0>b||b>=s)A.bi(A.ds(b,s,this,null,"index"))
return this.b.$1(b)},
gn(a){return this.a}}
A.u.prototype={
gk(a){return A.i.prototype.gk.call(this,0)},
h(a){return"null"}}
A.i.prototype={$ii:1,
I(a,b){return this===b},
gk(a){return A.aO(this)},
h(a){return"Instance of '"+A.bI(this)+"'"},
gl(a){return A.i4(this)},
toString(){return this.h(this)}}
A.c_.prototype={
h(a){return""},
$iQ:1}
A.bO.prototype={
gn(a){return this.a.length},
h(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.cS.prototype={
bu(){return Math.random()}}
A.N.prototype={
gk(a){var s=this.a,r=this.b
return A.ca(new A.c(s,r).$s,s,r,B.r)},
I(a,b){var s,r,q,p
if(b==null)return!1
if(b instanceof A.N){s=b.a
r=b.b
q=this.a
p=this.b
p=A.ca(new A.c(s,r).$s,s,r,B.r)===A.ca(new A.c(q,p).$s,q,p,B.r)
s=p}else s=!1
return s},
h(a){var s=this
return"("+s.a+" "+s.b+") => '"+s.c+"' "+s.d}}
A.a9.prototype={}
A.ab.prototype={
h(a){var s=this
return"               row: "+s.a+"\n            column: "+s.b+"\n         character: '"+s.c+"'\n    characterColor: "+s.d+"\n\n          pixelRow: "+s.e+"\n       pixelColumn: "+s.f+"\n         pixelIsOn: "+s.r+"\n    "}}
A.ae.prototype={
sa4(a){var s,r,q,p=this
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
A.bL.prototype={
b1(a,b,c,d,e,f,g,h){var s,r=this,q=v.G.document
q.onfocus=A.ba(new A.cc(r))
q.onblur=A.ba(new A.cd(r))
q=r.w
q.tabIndex=-1
q.style.display="block"
q.style.outline="none"
s=q.getContext("2d")
if(s==null)s=A.T(s)
s.imageSmoothingEnabled=!1
q.onfocus=A.ba(new A.ce(r))
q.onblur=A.ba(new A.cf(r))
b.style.display="flex"
b.style.alignItems="flex-start"
b.style.padding="0"
b.style.margin="0"
b.style.width="fit-content"
b.style.height="fit-content"
b.style.background="gray"
b.appendChild(q)
r.C(0)},
a2(a,b){return new A.c(B.a.j(a,this.b),B.a.j(b,this.c))},
a6(){var s=this.x,r=s.getContext("2d")
if(r==null)r=A.T(r)
r.save()
r.beginPath()
r.clearRect(0,0,s.width,s.height)
r.restore()
return r},
a8(){var s=this.w.getContext("2d")
if(s==null)s=A.T(s)
s.save()
s.beginPath()
s.drawImage(this.x,0,0)
s.restore()
return s},
M(a,b,c,d){var s,r,q,p,o,n,m=this,l=a<0||a>=m.b||b<0||b>=m.c
if(l)return
s=m.a2(a,b)
a=s.a
b=s.b
r=A.dA(b)
q=r.a
p=B.a.W(1,r.b)
l=m.y
if(!(a>=0&&a<l.length))return A.b(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.b(l,q)
o=l[q]
l.$flags&2&&A.a3(l)
l[q]=(o|p)>>>0
l[q]=(l[q]^p)>>>0
l=c.getContext("2d")
if(l==null)l=A.T(l)
l.save()
l.beginPath()
l.fillStyle=m.r
o=m.d
n=m.e
l.fillRect(b*o,a*n,o,n)
l.restore()},
N(a,b,c,d,e){var s,r,q,p,o,n,m=this,l=a<0||a>=m.b||b<0||b>=m.c
if(l)return
s=m.a2(a,b)
a=s.a
b=s.b
r=A.dA(b)
q=r.a
p=B.a.W(1,r.b)
l=m.y
if(!(a>=0&&a<l.length))return A.b(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.b(l,q)
o=l[q]
l.$flags&2&&A.a3(l)
l[q]=(o|p)>>>0
o=d.getContext("2d")
l=o==null?A.T(o):o
l.save()
l.beginPath()
l.fillStyle=c
o=m.d
n=m.e
l.fillRect(b*o,a*n,o,n)
l.restore()},
aS(a,b){var s,r,q,p,o=this.a2(b,a)
b=o.a
s=A.dA(o.b)
r=s.a
q=B.a.W(1,s.b)
p=this.y
if(!(b>=0&&b<p.length))return A.b(p,b)
p=p[b]
if(!(r>=0&&r<p.length))return A.b(p,r)
return(p[r]&q)>>>0>0},
aN(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=this
if(e==null)e=k.c-c
if(b==null)b=k.b-d
k.a6()
if(c===0&&d===0&&e===k.c&&b===k.b){for(s=k.y,r=s.length,q=0;q<r;++q)for(p=0;o=s[q],p<o.length;++p){o.$flags&2&&A.a3(o)
o[p]=0}s=k.x
r=s.getContext("2d")
if(r==null)r=A.T(r)
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
for(p=c;p<m;++p)k.M(l,B.a.j(p,r),o,!1)}}k.a8()},
C(a){return this.aN(0,null,0,0,null)},
bh(a,b,c,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
d.a6()
s=d.a2(a,b)
a=s.a
b=s.b
r=B.a.bk(1,a1)-1
for(q=a2.a,p=a1-1,o=t.t,n=d.x,m=0;m<c.length;++m){l=c[m]
k=(l&r)>>>0
l=A.m([],o)
for(j=a+m,i=0;i<a1;++i){h=d.aS(b+i,j)?1:0
l.push(B.a.W(h,p-i))}g=B.m.bp(l,0,new A.cb())
switch(q){case 0:for(i=0;i<a1;++i){l=b+i
if((B.a.F(k,p-i)&1)>0)d.N(j,l,a0,n,!1)
else d.M(j,l,n,!1)}break
case 1:for(i=0;i<a1;++i){l=b+i
if((B.a.F(k,p-i)&1)>0)d.M(j,l,n,!1)
else d.N(j,l,a0,n,!1)}break
case 3:for(i=0;i<a1;++i){f=p-i
if((B.a.F(k,f)&1)>0&&(B.a.aX(g,f)&1)===0)d.N(j,b+i,a0,n,!1)}break
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
else d.N(j,l,a0,n,!1)}break}}d.a8()},
aT(a,b,c){this.bh(c.a,c.b,b,a,8,B.f1,!0,!1,!1)},
aW(a){var s,r,q,p,o,n,m,l,k=this,j=k.b
a=B.a.j(a,j)
for(s=j-a,r=k.y,q=r.length,p=0;p<s;++p){if(!(p<q))return A.b(r,p)
o=p+a
n=0
for(;m=r[p],n<m.length;++n){if(!(o<q))return A.b(r,o)
l=r[o]
if(!(n<l.length))return A.b(l,n)
l=l[n]
m.$flags&2&&A.a3(m)
m[n]=l}}for(;p<j;++p){if(!(p<q))return A.b(r,p)
n=0
for(;o=r[p],n<o.length;++n){o.$flags&2&&A.a3(o)
o[n]=0}}k.a6()
j=k.x
r=j.getContext("2d")
if(r==null)r=A.T(r)
r.save()
r.beginPath()
q=k.e
r.drawImage(k.w,0,-a*q)
r.fillStyle=k.r
r.fillRect(0,s*q,j.width,a*q)
r.restore()
k.a8()},
gaO(){return this.z&&J.a4(v.G.document.activeElement,this.w)},
V(){var s=this.w
s.style.opacity="1.0"
s.focus()},
U(){var s=this.w,r=s.style
r.opacity="0.5"
s.blur()}}
A.cc.prototype={
$0(){this.a.z=!0},
$S:1}
A.cd.prototype={
$0(){this.a.z=!1},
$S:1}
A.ce.prototype={
$0(){this.a.V()},
$S:1}
A.cf.prototype={
$0(){this.a.U()},
$S:1}
A.cb.prototype={
$2(a,b){return(a|b)>>>0},
$S:19}
A.c8.prototype={
L(){return"Mode."+this.b}}
A.bM.prototype={
L(){return"State."+this.b}}
A.cj.prototype={
b2(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=this,r=s.f
r.tabIndex=-1
r.onfocus=A.ba(new A.ck(s))
r.onblur=A.ba(new A.cl(s))
r.onkeydown=A.dI(new A.cm(s,l,new A.cq(),new A.cp(s)))
r.onclick=A.dI(new A.cn(s,new A.cr(s),o))
A.dD(A.dq(300),new A.co(s))
s.U()
s.C(0)},
gai(){var s=this.w
s===$&&A.I()
return s.gai()},
gaf(){var s=this.w
s===$&&A.I()
return s.gaf()},
T(a,b){return new A.c(B.a.j(a,this.a),B.a.j(b,this.b))},
aB(){var s=this,r=s.x
s.CW.a3(0,new A.N(r.c,r.d," ","white"))
s.t()
s.cy=!1},
t(){var s,r,q,p,o,n,m,l,k,j,i,h=this
for(s=h.CW,r=A.fD(s,s.r,s.$ti.c),q=h.w,p=h.cx,o=8+h.c,n=r.$ti.c;r.p();){m=r.d
if(m==null)m=n.a(m)
l=m.a
k=m.b
if(p.ag(m.c)){j=p.E(0,m.c)
j.toString
i=j}else i=$.eP()
q===$&&A.I()
q.aT(m.d,i,new A.c(l*o,k*8))}if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.aC()}},
ap(a,b){var s,r=this.T(b,a)
b=r.a
a=r.b
s=this.ch
if(!(b>=0&&b<s.length))return A.b(s,b)
s=s[b]
if(!(a>=0&&a<s.length))return A.b(s,a)
return s[a].c},
R(a,b,c){var s,r=this.T(c,b)
c=r.a
b=r.b
s=this.ch
if(!(c>=0&&c<s.length))return A.b(s,c)
s=s[c]
if(!(b>=0&&b<s.length))return A.b(s,b)
s=s[b]
s.c=a
this.CW.a3(0,s)},
S(a,b,c){var s,r=this.T(c,b)
c=r.a
b=r.b
s=this.ch
if(!(c>=0&&c<s.length))return A.b(s,c)
s=s[c]
if(!(b>=0&&b<s.length))return A.b(s,b)
s=s[b]
s.d=a
this.CW.a3(0,s)},
an(){var s,r=this.x
r.sa4(0)
s=r.c
if(s===this.a-1)this.aq()
else r.c=B.a.j(s+1,r.a)},
aq(){var s,r,q,p,o,n,m,l,k=this
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
s===$&&A.I()
s.aW(8+k.c)},
O(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=e==null?h.x.c:e,f=h.T(g,c==null?h.x.d:c)
g=h.x
s=g.a
g.c=B.a.j(f.a,s)
g.sa4(f.b)
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
o.a3(0,i)
if(e===n&&c===m){h.aq()
g.c=B.a.j(g.c-1,s)}g.sa4(g.d+1)}h.t()
if(d)h.an()},
aR(a,b){return this.O(a,null,null,b,null)},
D(a,b,c,d){return this.O(a,b,c,!0,d)},
bv(a,b,c){return this.O(a,null,b,!0,c)},
H(a,b){return this.O(a,null,b,!0,null)},
C(a){var s,r,q,p,o=this,n=o.b,m=o.a
for(s=o.ch,r=0;r<m;++r)for(q=0;q<n;++q){if(!(r<s.length))return A.b(s,r)
p=s[r]
if(!(q<p.length))return A.b(p,q)
p=p[q]
p.c=" "
p.d="white"}s=o.w
s===$&&A.I()
p=8+o.c
s.aN(0,m*p,0,0*p,n*8)
p=o.x
p.c=0%p.a
p.sa4(0)},
bx(a,b,c){var s=this.w
s===$&&A.I()
s.aT("white",b,new A.c(c*(8+this.c),a*8))},
V(){return this.gai().$0()},
U(){return this.gaf().$0()}}
A.cr.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.w
i===$&&A.I()
s=J.dX(a.offsetX)
r=Math.max(Math.min(B.a.J(J.dX(a.offsetY)-1,i.e),i.b-1),0)
q=Math.max(Math.min(B.a.J(s-1,i.d),i.c-1),0)
p=B.a.J(r,8+j.c)
o=B.a.B(q,8)
n=j.ap(o,p)
m=j.T(p,o)
l=m.a
k=m.b
j=j.ch
if(!(l>=0&&l<j.length))return A.b(j,l)
j=j[l]
if(!(k>=0&&k<j.length))return A.b(j,k)
return new A.ab(p,o,n,j[k].d,r,q,i.aS(q,r))},
$S:20}
A.cq.prototype={
$1(a){return new A.a9()},
$S:21}
A.cp.prototype={
$0(){var s,r,q,p,o,n=this.a,m=n.a,l=n.b,k=new A.ae(m,l)
k.su(n.y.gu())
s=A.m([],t.s)
for(r=n.z,q=r.b;p=k.c,o=k.d,p*l+o<r.c*q+r.d;p=k.c*l+k.d+1,k.c=B.a.j(B.a.J(p,l),m),k.d=B.a.j(p,l))s.push(n.ap(o,p))
return B.m.aQ(s,"")},
$S:22}
A.ck.prototype={
$0(){var s=this.a.w
s===$&&A.I()
s.V()},
$S:1}
A.cl.prototype={
$0(){var s=this.a.w
s===$&&A.I()
s.U()},
$S:1}
A.cm.prototype={
$1(a){var s,r,q,p
a.preventDefault()
s=this.a
switch(s.ay.a){case 0:break
case 1:break
case 2:s.aB()
A:{r=a.keyCode
if(13===r)break A
if(8===r){q=s.x
if(q.gu()>s.y.gu()){q.su(q.gu()-1)
s.aR(" ",!1)
q.su(q.gu()-1)}break A}p=a.key
if(p.length===1&&s.x.gu()<s.z.gu())s.aR(p,!1)}break
case 3:break}},
$S:6}
A.cn.prototype={
$1(a){a.preventDefault()},
$S:6}
A.co.prototype={
$1(a){var s,r=this.a,q=r.w
q===$&&A.I()
if(q.gaO()&&r.ay===B.fd)if(r.cy)r.aB()
else{q=r.x
s=q.c
r.bx(q.d,$.eO(),s)
r.cy=!0}},
$S:3}
A.dr.prototype={}
A.bW.prototype={}
A.cG.prototype={
$1(a){return this.a.$1(a)},
$S:7}
A.bJ.prototype={
L(){return"Rotation."+this.b}}
A.W.prototype={}
A.cs.prototype={
b3(a,b,c,d,e,f,g,h,i,j,k,l){A.dD(A.dq(100),new A.cu(this))},
b_(){var s,r,q,p,o,n,m,l,k=this
for(s=k.ay,r=0;r<24;++r)for(q=r!==23,p=0;p<12;++p){if(!(r<s.length))return A.b(s,r)
o=s[r]
if(!(p<o.length))return A.b(o,p)
o=o[p]
o.a=!q||p===0||p===11?"white":"black"}q=k.ax
B.m.C(q)
B.m.aL(q,A.e9())
o=k.as
n=o.gm()
k.x.$1(n)
n=o.a
if(0>=q.length)return A.b(q,-1)
n.a=q.pop()
n.b=B.d
o.b=3
o.c=4
m=k.at
l=m.gm()
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
m=m.gm()
l=l.gG()
k.Q.$2(m,l)
o=o.gm()
n=n.gG()
k.y.$2(o,n)
n=k.cx
k.c.$1(n)
n=k.CW
k.d.$1(n)
n=k.ch
k.e.$1(n)
k.b.$0()},
ae(){var s=0,r=A.hA(t.o),q=this
var $async$ae=A.hN(function(a,b){if(a===1)return A.h9(b,r)
for(;;)switch(s){case 0:if(++q.dx>=q.db){q.dx=0
q.aJ()}return A.ha(null,r)}})
return A.hb($async$ae,r)},
P(a){return B.m.bm(a,new A.ct(this))},
bg(){var s,r,q,p,o,n=this,m=n.ax
if(m.length===0){B.m.C(m)
B.m.aL(m,A.e9())}s=n.as
r=s.a
q=n.at
p=q.a
o=p.a
r.a=o
r.b=B.d
A:{if(B.z===o){o=2
break A}o=3
break A}s.b=o
s.c=4
n.f.$1(n.ay)
n.dy=n.dx=0
if(n.P(s.gm())){n.cy=!1
n.a.$0()}else{o=q.gm()
n.z.$1(o)
if(0>=m.length)return A.b(m,-1)
p.a=m.pop()
n.b.$0()
s=s.gm()
r=r.gG()
n.y.$2(s,r)
q=q.gm()
p=p.gG()
n.Q.$2(q,p)}},
aD(){var s,r,q,p,o,n,m,l,k,j,i,h=this
for(s=h.as,r=s.gm(),q=r.length,p=h.ay,s=s.a,o=0;o<q;++o){n=r[o]
m=n.a
l=n.b
if(!(m>=0&&m<p.length))return A.b(p,m)
n=p[m]
if(!(l>=0&&l<n.length))return A.b(n,l)
n[l].a=s.gG()}k=h.ba(0)
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
h.e.$1(s)}h.bg()},
ba(a){var s,r,q,p,o,n,m,l,k,j,i
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
ac(){if(++this.dy<=16)this.dx=0},
aJ(){var s,r,q,p,o,n,m=this
if(!m.cy)return!1
s=A.m([],t.n)
for(r=m.as,q=r.gm(),p=q.length,o=0;o<q.length;q.length===p||(0,A.a2)(q),++o){n=q[o]
s.push(new A.c(n.a+1,n.b))}if(!m.P(s)){q=r.gm()
m.x.$1(q);++r.b
r=r.a.gG()
m.y.$2(s,r)
return!0}m.aD()
return!1},
aG(a){var s,r,q,p,o,n=this,m=A.m([],t.n)
for(s=n.as,r=s.gm(),q=r.length,p=0;p<r.length;r.length===q||(0,A.a2)(r),++p){o=r[p]
m.push(new A.c(o.a,o.b+a))}if(!n.P(m)){n.ac()
r=s.gm()
n.x.$1(r)
s.c+=a
s=s.a.gG()
n.y.$2(m,s)
return!0}return!1},
aY(){var s,r,q=this
if(!q.cy)return!1
s=q.aJ()
if(s){q.ac()
r=++q.cx
q.c.$1(r)}return s},
br(){var s,r,q,p,o,n,m,l,k=this
if(!k.cy)return!1
for(s=k.as,r=t.n,q=0;;){p=A.m([],r)
for(o=s.gm(),n=o.length,m=0;m<o.length;o.length===n||(0,A.a2)(o),++m){l=o[m]
p.push(new A.c(l.a+1,l.b))}if(k.P(p))break;++s.b;++q}s=q>0
if(s){k.cx=k.cx+2*q
k.ac()
r=k.cx
k.c.$1(r)}k.aD()
return s},
aF(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.as,e=f.a,d=e.b,c=d.bI(a)
for(s=e.a.bK(d,c),r=s.length,q=t.n,p=0;p<r;++p){o=s[p]
n=o.a
m=o.b
o=new A.aT(B.v,B.d)
l=new A.aU(o)
l.b=f.b
l.c=f.c
o.a=e.a
o.b=c
o=A.m([],q)
for(k=l.gm(),j=k.length,i=0;i<k.length;k.length===j||(0,A.a2)(k),++i){h=k[i]
o.push(new A.c(h.a+n,h.b+m))}if(!g.P(o)){s=f.gm()
g.x.$1(s)
f.b+=n
f.c+=m
e.b=c
s=f.gm()
r=e.gG()
g.y.$2(s,r)
if(++g.dy<=16)g.dx=0
return!0}}return!1}}
A.cu.prototype={
$1(a){return this.a.ae()},
$S:3}
A.ct.prototype={
$1(a){var s=a.a,r=a.b,q=!0
if(s>=0)if(s<24)if(r>=0)if(r<12){q=this.a.ay
if(!(s>=0&&s<q.length))return A.b(q,s)
q=q[s]
if(!(r>=0&&r<q.length))return A.b(q,r)
q=q[r].a!=="black"}return q},
$S:23}
A.aw.prototype={
L(){return"GameState."+this.b}}
A.dg.prototype={
$1(a){var s,r,q,p,o
if($.be.length!==0){for(s=-1;r=$.be,q=r.length,s<q;++s){p=$.bd+s
if(s===-1)o=" "
else{if(!(s>=0))return A.b(r,s)
o=r[s]}if(p>=0&&p<$.B().b)$.B().D(o,"white",p,2)}r=$.bd+1
$.bd=r
if(r>$.B().b)$.be=""}},
$S:3}
A.dh.prototype={
$1(a){var s=this,r=$.B(),q=r.w
q===$&&A.I()
if(!q.gaO())return
switch($.da.a){case 0:switch(a.keyCode){case 13:r.C(0)
A.io()
s.a.b_()
$.da=B.ae
break}break
case 1:switch(a.keyCode){case 37:r=s.a
if(r.cy)r.aG(-1)
break
case 39:r=s.a
if(r.cy)r.aG(1)
break
case 40:s.a.aY()
break
case 67:s.a.br()
break
case 90:s.a.aF(B.fb)
break
case 88:r=s.a
if(r.cy)r.aF(B.fa)
break}break
case 2:switch(a.keyCode){case 13:A.eJ()
$.da=B.S
break}break}},
$S:7}
A.aT.prototype={
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
A.aU.prototype={
gm(){var s,r,q=A.m([],t.n),p=this.a
p=B.eY.E(0,p.a).E(0,p.b)
p.toString
s=0
for(;s<4;++s){r=p[s]
q.push(new A.c(this.b+r.a,this.c+r.b))}return q}}
A.E.prototype={
L(){return"TetronimoState."+this.b},
bI(a){var s
switch(a.a){case 0:s=B.x[B.a.j(B.m.aP(B.x,this)+1,4)]
break
case 1:s=B.x[B.a.j(B.m.aP(B.x,this)-1,4)]
break
default:s=null}return s}}
A.w.prototype={
L(){return"TetronimoType."+this.b},
bK(a,b){var s,r=this
A:{if(B.K===r||B.M===r||B.L===r||B.N===r||B.O===r){s=B.eZ.E(0,new A.c(a,b))
s.toString
break A}if(B.z===r){s=B.f0.E(0,new A.c(a,b))
s.toString
break A}if(B.v===r){s=B.f_.E(0,new A.c(a,b))
s.toString
break A}s=null}return s}}
A.cv.prototype={
$2(a,b){return $.f0().bu()>0.5?1:-1},
$S:24};(function aliases(){var s=J.P.prototype
s.b0=s.h})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._instance_0u,p=hunkHelpers._static_2
s(A,"hP","fy",4)
s(A,"hQ","fz",4)
s(A,"hR","fA",4)
r(A,"eA","hI",0)
s(A,"eD","fC",25)
var o
q(o=A.bL.prototype,"gai","V",0)
q(o,"gaf","U",0)
r(A,"iw","ig",0)
r(A,"iA","ik",0)
s(A,"iB","il",2)
s(A,"ix","ih",2)
s(A,"iz","ij",2)
s(A,"iC","im",26)
s(A,"iy","ii",2)
r(A,"iv","ie",0)
s(A,"ir","hS",8)
s(A,"is","hT",8)
p(A,"it","hY",9)
p(A,"iu","hZ",9)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.i,null)
q(A.i,[A.dv,J.bs,A.aQ,J.bk,A.j,A.cg,A.K,A.aa,A.bq,A.ay,A.av,A.aj,A.bo,A.cx,A.c9,A.au,A.b3,A.V,A.aI,A.c6,A.D,A.bX,A.c0,A.b4,A.bR,A.H,A.bU,A.ag,A.v,A.bT,A.bZ,A.d1,A.aR,A.cU,A.ai,A.l,A.bp,A.cF,A.bG,A.aS,A.cH,A.u,A.c_,A.bO,A.cS,A.N,A.a9,A.ab,A.ae,A.bL,A.cj,A.dr,A.bW,A.W,A.cs,A.aT,A.aU])
q(J.bs,[J.bu,J.aA,J.aC,J.aB,J.aD,J.a7,J.a8])
q(J.aC,[J.P,J.k,A.ac,A.aL])
q(J.P,[J.bH,J.af,J.O])
r(J.bt,A.aQ)
r(J.c5,J.k)
q(J.a7,[J.az,J.bv])
q(A.j,[A.aG,A.L,A.bw,A.bQ,A.bK,A.bV,A.bl,A.G,A.aV,A.bP,A.bN,A.bn])
q(A.K,[A.as,A.ax])
q(A.as,[A.aH,A.at])
r(A.ar,A.ax)
r(A.bY,A.aj)
r(A.c,A.bY)
r(A.r,A.bo)
r(A.aN,A.L)
q(A.V,[A.c2,A.c3,A.ci,A.dc,A.de,A.cC,A.cB,A.d3,A.cQ,A.cX,A.cr,A.cq,A.cm,A.cn,A.co,A.cG,A.cu,A.ct,A.dg,A.dh])
q(A.ci,[A.ch,A.aq])
r(A.aF,A.aI)
r(A.aE,A.aF)
q(A.c3,[A.dd,A.d4,A.d7,A.cR,A.c7,A.cb,A.cv])
q(A.aL,[A.bx,A.ad])
q(A.ad,[A.aY,A.b_])
r(A.aZ,A.aY)
r(A.aJ,A.aZ)
r(A.b0,A.b_)
r(A.aK,A.b0)
q(A.aJ,[A.by,A.bz])
q(A.aK,[A.bA,A.bB,A.bC,A.bD,A.bE,A.aM,A.bF])
r(A.b5,A.bV)
q(A.c2,[A.cD,A.cE,A.cZ,A.cY,A.cI,A.cM,A.cL,A.cK,A.cJ,A.cP,A.cO,A.cN,A.cW,A.d6,A.cc,A.cd,A.ce,A.cf,A.cp,A.ck,A.cl])
r(A.bS,A.bU)
r(A.cV,A.d1)
r(A.b2,A.aR)
r(A.aX,A.b2)
q(A.G,[A.aP,A.br])
r(A.aW,A.aH)
q(A.cF,[A.c8,A.bM,A.bJ,A.aw,A.E,A.w])
s(A.aY,A.l)
s(A.aZ,A.av)
s(A.b_,A.l)
s(A.b0,A.av)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{a:"int",t:"double",eH:"num",y:"String",d8:"bool",u:"Null",d:"List",i:"Object",fm:"Map",h:"JSObject"},mangledNames:{},types:["~()","u()","~(a)","~(cw)","~(~())","u(@)","u(h)","~(h)","~(d<+(a,a)>)","~(d<+(a,a)>,y)","@(@)","@(@,y)","@(y)","u(~())","~(@)","u(@,Q)","~(a,@)","u(i,Q)","~(i?,i?)","a(a,a)","ab(h)","a9(h)","y()","d8(+(a,a))","a(w,w)","a(a)","~(d<d<W>>)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.c&&a.b(c.a)&&b.b(c.b)}}
A.fU(v.typeUniverse,JSON.parse('{"bH":"P","af":"P","O":"P","iK":"ac","bu":{"f":[]},"aA":{"f":[]},"aC":{"h":[]},"P":{"h":[]},"k":{"d":["1"],"h":[]},"bt":{"aQ":[]},"c5":{"k":["1"],"d":["1"],"h":[]},"a7":{"t":[]},"az":{"t":[],"a":[],"f":[]},"bv":{"t":[],"f":[]},"a8":{"y":[],"f":[]},"aG":{"j":[]},"as":{"K":["1"]},"aH":{"K":["1"]},"at":{"K":["1"]},"ax":{"K":["+(a,1)"]},"ar":{"ax":["1"],"K":["+(a,1)"]},"aN":{"L":[],"j":[]},"bw":{"j":[]},"bQ":{"j":[]},"b3":{"Q":[]},"bK":{"j":[]},"aF":{"aI":["1","2"]},"aE":{"aF":["1","2"],"aI":["1","2"]},"ac":{"h":[],"f":[]},"aL":{"h":[]},"bx":{"h":[],"f":[]},"ad":{"x":["1"],"h":[]},"aJ":{"l":["t"],"d":["t"],"x":["t"],"h":[]},"aK":{"l":["a"],"d":["a"],"x":["a"],"h":[]},"by":{"l":["t"],"d":["t"],"x":["t"],"h":[],"f":[],"l.E":"t"},"bz":{"l":["t"],"d":["t"],"x":["t"],"h":[],"f":[],"l.E":"t"},"bA":{"l":["a"],"d":["a"],"x":["a"],"h":[],"f":[],"l.E":"a"},"bB":{"l":["a"],"d":["a"],"x":["a"],"h":[],"f":[],"l.E":"a"},"bC":{"l":["a"],"d":["a"],"x":["a"],"h":[],"f":[],"l.E":"a"},"bD":{"l":["a"],"d":["a"],"x":["a"],"h":[],"f":[],"l.E":"a"},"bE":{"cz":[],"l":["a"],"d":["a"],"x":["a"],"h":[],"f":[],"l.E":"a"},"aM":{"l":["a"],"d":["a"],"x":["a"],"h":[],"f":[],"l.E":"a"},"bF":{"l":["a"],"d":["a"],"x":["a"],"h":[],"f":[],"l.E":"a"},"bV":{"j":[]},"b5":{"L":[],"j":[]},"b4":{"cw":[]},"H":{"j":[]},"v":{"a6":["1"]},"aX":{"aR":["1"]},"b2":{"aR":["1"]},"bl":{"j":[]},"L":{"j":[]},"G":{"j":[]},"aP":{"j":[]},"br":{"j":[]},"aV":{"j":[]},"bP":{"j":[]},"bN":{"j":[]},"bn":{"j":[]},"bG":{"j":[]},"aS":{"j":[]},"aW":{"aH":["1"],"K":["1"]},"c_":{"Q":[]},"fg":{"d":["a"]},"fw":{"d":["a"]},"fv":{"d":["a"]},"fe":{"d":["a"]},"fu":{"d":["a"]},"ff":{"d":["a"]},"cz":{"d":["a"]},"fb":{"d":["t"]},"fc":{"d":["t"]}}'))
A.fT(v.typeUniverse,JSON.parse('{"as":1,"bq":1,"ay":1,"av":1,"bo":2,"ad":1,"bU":1,"bZ":1,"b2":1,"bW":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.bg
return{A:s("N"),Q:s("j"),Y:s("iJ"),G:s("r<+(E,E),d<+(a,a)>>"),k:s("r<E,d<+(a,a)>>"),U:s("k<N>"),J:s("k<d<N>>"),d:s("k<d<W>>"),f:s("k<i>"),n:s("k<+(a,a)>"),h:s("k<W>"),s:s("k<y>"),Z:s("k<w>"),w:s("k<cz>"),b:s("k<@>"),t:s("k<a>"),T:s("aA"),m:s("h"),g:s("O"),p:s("x<@>"),V:s("a9"),j:s("d<@>"),q:s("ab"),P:s("u"),K:s("i"),L:s("iL"),F:s("+()"),l:s("Q"),N:s("y"),D:s("cw"),R:s("f"),_:s("L"),B:s("af"),c:s("v<@>"),y:s("d8"),i:s("t"),z:s("@"),v:s("@(i)"),C:s("@(i,Q)"),S:s("a"),O:s("a6<u>?"),E:s("h?"),X:s("i?"),x:s("y?"),u:s("d8?"),I:s("t?"),M:s("a?"),W:s("eH?"),H:s("eH"),o:s("~")}})();(function constants(){var s=hunkHelpers.makeConstList
B.ag=J.bs.prototype
B.m=J.k.prototype
B.a=J.az.prototype
B.ah=J.a7.prototype
B.t=J.a8.prototype
B.ai=J.O.prototype
B.aj=J.aC.prototype
B.Z=J.bH.prototype
B.P=J.af.prototype
B.a4=new A.bq()
B.Q=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.a5=function() {
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
B.aa=function(getTagFallback) {
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
B.a6=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.a9=function(hooks) {
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
B.a8=function(hooks) {
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
B.a7=function(hooks) {
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

B.ab=new A.bG()
B.r=new A.cg()
B.ac=new A.cS()
B.n=new A.cV()
B.ad=new A.c_()
B.S=new A.aw(0,"titleScreen")
B.ae=new A.aw(1,"game")
B.af=new A.aw(2,"gameOver")
B.d=new A.E(0,"spawned")
B.j=new A.E(1,"right")
B.k=new A.E(2,"inverted")
B.l=new A.E(3,"left")
B.x=s([B.d,B.j,B.k,B.l],A.bg("k<E>"))
B.z=new A.w(0,"I")
B.K=new A.w(1,"J")
B.L=new A.w(2,"L")
B.v=new A.w(3,"O")
B.M=new A.w(4,"S")
B.N=new A.w(5,"T")
B.O=new A.w(6,"Z")
B.d9=s([B.z,B.K,B.L,B.v,B.M,B.N,B.O],t.Z)
B.e6=s([126,129,165,129,189,153,129,126],t.t)
B.aM=s([126,255,219,255,195,231,255,126],t.t)
B.eG=s([108,254,254,254,124,56,16,0],t.t)
B.cW=s([16,56,124,254,124,56,16,0],t.t)
B.bK=s([56,124,56,254,254,124,56,124],t.t)
B.bX=s([16,16,56,124,254,124,56,124],t.t)
B.bb=s([0,0,24,60,60,24,0,0],t.t)
B.be=s([255,255,231,195,195,231,255,255],t.t)
B.br=s([0,60,102,66,66,102,60,0],t.t)
B.dR=s([255,195,153,189,189,153,195,255],t.t)
B.eF=s([15,7,15,125,204,204,204,120],t.t)
B.eE=s([60,102,102,102,60,24,126,24],t.t)
B.dO=s([63,51,63,48,48,112,240,224],t.t)
B.au=s([127,99,127,99,99,103,230,192],t.t)
B.az=s([153,90,60,231,231,60,90,153],t.t)
B.b7=s([128,224,248,254,248,224,128,0],t.t)
B.cp=s([2,14,62,254,62,14,2,0],t.t)
B.da=s([24,60,126,24,24,126,60,24],t.t)
B.d5=s([102,102,102,102,102,0,102,0],t.t)
B.di=s([127,219,219,123,27,27,27,0],t.t)
B.dj=s([62,99,56,108,108,56,204,120],t.t)
B.cD=s([0,0,0,0,126,126,126,0],t.t)
B.cG=s([24,60,126,24,126,60,24,255],t.t)
B.ap=s([24,60,126,24,24,24,24,0],t.t)
B.ed=s([24,24,24,24,126,60,24,0],t.t)
B.e4=s([0,24,12,254,12,24,0,0],t.t)
B.b4=s([0,48,96,254,96,48,0,0],t.t)
B.cL=s([0,0,192,192,192,254,0,0],t.t)
B.cg=s([0,36,102,255,102,36,0,0],t.t)
B.aK=s([0,24,60,126,255,255,0,0],t.t)
B.cH=s([0,255,255,126,60,24,0,0],t.t)
B.bE=s([0,0,0,0,0,0,0,0],t.t)
B.cq=s([48,120,120,48,48,0,48,0],t.t)
B.ax=s([108,108,108,0,0,0,0,0],t.t)
B.aY=s([108,108,254,108,254,108,108,0],t.t)
B.cQ=s([48,124,192,120,12,248,48,0],t.t)
B.ao=s([0,198,204,24,48,102,198,0],t.t)
B.dz=s([56,108,56,118,220,204,118,0],t.t)
B.aX=s([96,96,192,0,0,0,0,0],t.t)
B.at=s([24,48,96,96,96,48,24,0],t.t)
B.ck=s([96,48,24,24,24,48,96,0],t.t)
B.dn=s([0,102,60,255,60,102,0,0],t.t)
B.eO=s([0,48,48,252,48,48,0,0],t.t)
B.cS=s([0,0,0,0,0,48,48,96],t.t)
B.ce=s([0,0,0,252,0,0,0,0],t.t)
B.d7=s([0,0,0,0,0,48,48,0],t.t)
B.aF=s([6,12,24,48,96,192,128,0],t.t)
B.bN=s([124,198,206,222,246,230,124,0],t.t)
B.db=s([48,112,48,48,48,48,252,0],t.t)
B.cN=s([120,204,12,56,96,204,252,0],t.t)
B.eI=s([120,204,12,56,12,204,120,0],t.t)
B.cm=s([28,60,108,204,254,12,30,0],t.t)
B.e5=s([252,192,248,12,12,204,120,0],t.t)
B.eq=s([56,96,192,248,204,204,120,0],t.t)
B.cP=s([252,204,12,24,48,48,48,0],t.t)
B.dr=s([120,204,204,120,204,204,120,0],t.t)
B.bU=s([120,204,204,124,12,24,112,0],t.t)
B.dZ=s([0,48,48,0,0,48,48,0],t.t)
B.bv=s([0,48,48,0,0,48,48,96],t.t)
B.cl=s([24,48,96,192,96,48,24,0],t.t)
B.c6=s([0,0,252,0,0,252,0,0],t.t)
B.bd=s([96,48,24,12,24,48,96,0],t.t)
B.b2=s([120,204,12,24,48,0,48,0],t.t)
B.el=s([124,198,222,222,222,192,120,0],t.t)
B.d1=s([48,120,204,204,252,204,204,0],t.t)
B.bo=s([252,102,102,124,102,102,252,0],t.t)
B.aO=s([60,102,192,192,192,102,60,0],t.t)
B.aG=s([248,108,102,102,102,108,248,0],t.t)
B.aU=s([254,98,104,120,104,98,254,0],t.t)
B.df=s([254,98,104,120,104,96,240,0],t.t)
B.b0=s([60,102,192,192,206,102,62,0],t.t)
B.b3=s([204,204,204,252,204,204,204,0],t.t)
B.dJ=s([120,48,48,48,48,48,120,0],t.t)
B.cB=s([30,12,12,12,204,204,120,0],t.t)
B.ct=s([230,102,108,120,108,102,230,0],t.t)
B.cs=s([240,96,96,96,98,102,254,0],t.t)
B.bp=s([198,238,254,254,214,198,198,0],t.t)
B.aw=s([198,230,246,222,206,198,198,0],t.t)
B.dT=s([56,108,198,198,198,108,56,0],t.t)
B.c0=s([252,102,102,124,96,96,240,0],t.t)
B.dD=s([120,204,204,204,220,120,28,0],t.t)
B.an=s([252,102,102,124,108,102,230,0],t.t)
B.aR=s([120,204,224,112,28,204,120,0],t.t)
B.ez=s([252,180,48,48,48,48,120,0],t.t)
B.bm=s([204,204,204,204,204,204,252,0],t.t)
B.aC=s([204,204,204,204,204,120,48,0],t.t)
B.dM=s([198,198,198,214,254,238,198,0],t.t)
B.dG=s([198,198,108,56,56,108,198,0],t.t)
B.aE=s([204,204,204,120,48,48,120,0],t.t)
B.ar=s([254,198,140,24,50,102,254,0],t.t)
B.ch=s([120,96,96,96,96,96,120,0],t.t)
B.dw=s([192,96,48,24,12,6,2,0],t.t)
B.cj=s([120,24,24,24,24,24,120,0],t.t)
B.ep=s([16,56,108,198,0,0,0,0],t.t)
B.am=s([0,0,0,0,0,0,0,255],t.t)
B.bn=s([48,48,24,0,0,0,0,0],t.t)
B.ee=s([0,0,120,12,124,204,118,0],t.t)
B.d4=s([224,96,96,124,102,102,220,0],t.t)
B.dF=s([0,0,120,204,192,204,120,0],t.t)
B.bL=s([28,12,12,124,204,204,118,0],t.t)
B.es=s([0,0,120,204,252,192,120,0],t.t)
B.bs=s([56,108,96,240,96,96,240,0],t.t)
B.dC=s([0,0,118,204,204,124,12,248],t.t)
B.bc=s([224,96,108,118,102,102,230,0],t.t)
B.dp=s([48,0,112,48,48,48,120,0],t.t)
B.cw=s([12,0,12,12,12,204,204,120],t.t)
B.bS=s([224,96,102,108,120,108,230,0],t.t)
B.cy=s([112,48,48,48,48,48,120,0],t.t)
B.cc=s([0,0,204,254,254,214,198,0],t.t)
B.cz=s([0,0,248,204,204,204,204,0],t.t)
B.bW=s([0,0,120,204,204,204,120,0],t.t)
B.ew=s([0,0,220,102,102,124,96,240],t.t)
B.et=s([0,0,118,204,204,124,12,30],t.t)
B.c7=s([0,0,220,118,102,96,240,0],t.t)
B.dW=s([0,0,124,192,120,12,248,0],t.t)
B.dP=s([16,48,124,48,48,52,24,0],t.t)
B.cZ=s([0,0,204,204,204,204,118,0],t.t)
B.bJ=s([0,0,204,204,204,120,48,0],t.t)
B.c_=s([0,0,198,214,254,254,108,0],t.t)
B.cu=s([0,0,198,108,56,108,198,0],t.t)
B.eC=s([0,0,204,204,204,124,12,248],t.t)
B.ec=s([0,0,252,152,48,100,252,0],t.t)
B.bP=s([28,48,48,224,48,48,28,0],t.t)
B.dV=s([24,24,24,0,24,24,24,0],t.t)
B.bg=s([224,48,48,28,48,48,224,0],t.t)
B.eN=s([118,220,0,0,0,0,0,0],t.t)
B.bH=s([0,16,56,108,198,198,254,0],t.t)
B.b6=s([120,204,192,204,120,24,12,120],t.t)
B.e9=s([0,204,0,204,204,204,126,0],t.t)
B.eB=s([28,0,120,204,252,192,120,0],t.t)
B.cR=s([126,195,60,6,62,102,63,0],t.t)
B.aT=s([204,0,120,12,124,204,126,0],t.t)
B.bM=s([224,0,120,12,124,204,126,0],t.t)
B.aJ=s([48,48,120,12,124,204,126,0],t.t)
B.c3=s([0,0,120,192,192,120,12,56],t.t)
B.ek=s([126,195,60,102,126,96,60,0],t.t)
B.bq=s([204,0,120,204,252,192,120,0],t.t)
B.dX=s([224,0,120,204,252,192,120,0],t.t)
B.eb=s([204,0,112,48,48,48,120,0],t.t)
B.dN=s([124,198,56,24,24,24,60,0],t.t)
B.bD=s([224,0,112,48,48,48,120,0],t.t)
B.eH=s([198,56,108,198,254,198,198,0],t.t)
B.dU=s([48,48,0,120,204,252,204,0],t.t)
B.cr=s([28,0,252,96,120,96,252,0],t.t)
B.eA=s([0,0,127,12,127,204,127,0],t.t)
B.bw=s([62,108,204,254,204,204,206,0],t.t)
B.eu=s([120,204,0,120,204,204,120,0],t.t)
B.aP=s([0,204,0,120,204,204,120,0],t.t)
B.eJ=s([0,224,0,120,204,204,120,0],t.t)
B.bt=s([120,204,0,204,204,204,126,0],t.t)
B.dQ=s([0,224,0,204,204,204,126,0],t.t)
B.ba=s([0,204,0,204,204,124,12,248],t.t)
B.aV=s([195,24,60,102,102,60,24,0],t.t)
B.e2=s([204,0,204,204,204,204,120,0],t.t)
B.ay=s([24,24,126,192,192,126,24,24],t.t)
B.bk=s([56,108,100,240,96,230,252,0],t.t)
B.bF=s([204,204,120,252,48,252,48,48],t.t)
B.ef=s([248,204,204,250,198,207,198,199],t.t)
B.cC=s([14,27,24,60,24,24,216,112],t.t)
B.bf=s([28,0,120,12,124,204,126,0],t.t)
B.d3=s([56,0,112,48,48,48,120,0],t.t)
B.bi=s([0,28,0,120,204,204,120,0],t.t)
B.ds=s([0,28,0,204,204,204,126,0],t.t)
B.bA=s([0,248,0,248,204,204,204,0],t.t)
B.dL=s([252,0,204,236,252,220,204,0],t.t)
B.aQ=s([60,108,108,62,0,126,0,0],t.t)
B.d0=s([56,108,108,56,0,124,0,0],t.t)
B.e3=s([48,0,48,96,192,204,120,0],t.t)
B.bC=s([0,0,0,252,192,192,0,0],t.t)
B.bh=s([0,0,0,252,12,12,0,0],t.t)
B.dY=s([195,198,204,222,51,102,204,15],t.t)
B.b8=s([195,198,204,219,55,111,207,3],t.t)
B.cF=s([24,24,0,24,24,24,24,0],t.t)
B.cE=s([0,51,102,204,102,51,0,0],t.t)
B.bR=s([0,204,102,51,102,204,0,0],t.t)
B.dv=s([34,136,34,136,34,136,34,136],t.t)
B.ev=s([85,170,85,170,85,170,85,170],t.t)
B.cx=s([219,119,219,238,219,119,219,238],t.t)
B.bG=s([24,24,24,24,24,24,24,24],t.t)
B.bB=s([24,24,24,24,248,24,24,24],t.t)
B.cM=s([24,24,248,24,248,24,24,24],t.t)
B.eM=s([54,54,54,54,246,54,54,54],t.t)
B.dd=s([0,0,0,0,254,54,54,54],t.t)
B.bx=s([0,0,248,24,248,24,24,24],t.t)
B.aN=s([54,54,246,6,246,54,54,54],t.t)
B.dk=s([54,54,54,54,54,54,54,54],t.t)
B.d_=s([0,0,254,6,246,54,54,54],t.t)
B.dq=s([54,54,246,6,254,0,0,0],t.t)
B.b1=s([54,54,54,54,254,0,0,0],t.t)
B.aD=s([24,24,248,24,248,0,0,0],t.t)
B.aI=s([0,0,0,0,248,24,24,24],t.t)
B.aA=s([24,24,24,24,31,0,0,0],t.t)
B.cK=s([24,24,24,24,255,0,0,0],t.t)
B.c5=s([0,0,0,0,255,24,24,24],t.t)
B.e1=s([24,24,24,24,31,24,24,24],t.t)
B.cI=s([0,0,0,0,255,0,0,0],t.t)
B.dm=s([24,24,24,24,255,24,24,24],t.t)
B.dB=s([24,24,31,24,31,24,24,24],t.t)
B.bT=s([54,54,54,54,55,54,54,54],t.t)
B.er=s([54,54,55,48,63,0,0,0],t.t)
B.ej=s([0,0,63,48,55,54,54,54],t.t)
B.cv=s([54,54,247,0,255,0,0,0],t.t)
B.ci=s([0,0,255,0,247,54,54,54],t.t)
B.bz=s([54,54,55,48,55,54,54,54],t.t)
B.by=s([0,0,255,0,255,0,0,0],t.t)
B.eD=s([54,54,247,0,247,54,54,54],t.t)
B.dH=s([24,24,255,0,255,0,0,0],t.t)
B.ak=s([54,54,54,54,255,0,0,0],t.t)
B.ex=s([0,0,255,0,255,24,24,24],t.t)
B.cU=s([0,0,0,0,255,54,54,54],t.t)
B.de=s([54,54,54,54,63,0,0,0],t.t)
B.cb=s([24,24,31,24,31,0,0,0],t.t)
B.d6=s([0,0,31,24,31,24,24,24],t.t)
B.dE=s([0,0,0,0,63,54,54,54],t.t)
B.dK=s([54,54,54,54,255,54,54,54],t.t)
B.cA=s([24,24,255,24,255,24,24,24],t.t)
B.eg=s([24,24,24,24,248,0,0,0],t.t)
B.bO=s([0,0,0,0,31,24,24,24],t.t)
B.cV=s([255,255,255,255,255,255,255,255],t.t)
B.cY=s([0,0,0,0,255,255,255,255],t.t)
B.bZ=s([240,240,240,240,240,240,240,240],t.t)
B.dg=s([15,15,15,15,15,15,15,15],t.t)
B.e0=s([255,255,255,255,0,0,0,0],t.t)
B.eL=s([0,0,118,220,200,220,118,0],t.t)
B.em=s([0,120,204,248,204,248,192,192],t.t)
B.aZ=s([0,252,204,192,192,192,192,0],t.t)
B.cX=s([0,254,108,108,108,108,108,0],t.t)
B.ei=s([252,204,96,48,96,204,252,0],t.t)
B.c1=s([0,0,126,216,216,216,112,0],t.t)
B.c9=s([0,102,102,102,102,124,96,192],t.t)
B.dx=s([0,118,220,24,24,24,24,0],t.t)
B.aS=s([252,48,120,204,204,120,48,252],t.t)
B.bl=s([56,108,198,254,198,108,56,0],t.t)
B.aW=s([56,108,198,198,108,108,238,0],t.t)
B.al=s([28,48,24,124,204,204,120,0],t.t)
B.ey=s([0,0,126,219,219,126,0,0],t.t)
B.c4=s([6,12,126,219,219,126,96,192],t.t)
B.aL=s([56,96,192,248,192,96,56,0],t.t)
B.d8=s([120,204,204,204,204,204,204,0],t.t)
B.dI=s([0,252,0,252,0,252,0,0],t.t)
B.aH=s([48,48,252,48,48,0,252,0],t.t)
B.bQ=s([96,48,24,48,96,0,252,0],t.t)
B.dS=s([24,48,96,48,24,0,252,0],t.t)
B.bY=s([14,27,27,24,24,24,24,24],t.t)
B.e8=s([24,24,24,24,24,216,216,112],t.t)
B.d2=s([48,48,0,252,0,48,48,0],t.t)
B.aq=s([0,118,220,0,118,220,0,0],t.t)
B.dt=s([56,108,108,56,0,0,0,0],t.t)
B.as=s([0,0,0,24,24,0,0,0],t.t)
B.en=s([0,0,0,0,24,0,0,0],t.t)
B.av=s([15,12,12,12,236,108,60,28],t.t)
B.cJ=s([120,108,108,108,108,0,0,0],t.t)
B.b5=s([112,24,48,96,120,0,0,0],t.t)
B.e_=s([0,0,60,60,60,60,0,0],t.t)
B.eQ=new A.r(["\u263a",B.e6,"\u263b",B.aM,"\u2665",B.eG,"\u2666",B.cW,"\u2663",B.bK,"\u2660",B.bX,"\u2022",B.bb,"\u25d8",B.be,"\u25cb",B.br,"\u25d9",B.dR,"\u2642",B.eF,"\u2640",B.eE,"\u266a",B.dO,"\u266b",B.au,"\u263c",B.az,"\u25ba",B.b7,"\u25c4",B.cp,"\u2195",B.da,"\u203c",B.d5,"\xb6",B.di,"\xa7",B.dj,"\u25ac",B.cD,"\u21a8",B.cG,"\u2191",B.ap,"\u2193",B.ed,"\u2192",B.e4,"\u2190",B.b4,"\u221f",B.cL,"\u2194",B.cg,"\u25b2",B.aK,"\u25bc",B.cH," ",B.bE,"!",B.cq,'"',B.ax,"#",B.aY,"$",B.cQ,"%",B.ao,"&",B.dz,"'",B.aX,"(",B.at,")",B.ck,"*",B.dn,"+",B.eO,",",B.cS,"-",B.ce,".",B.d7,"/",B.aF,"0",B.bN,"1",B.db,"2",B.cN,"3",B.eI,"4",B.cm,"5",B.e5,"6",B.eq,"7",B.cP,"8",B.dr,"9",B.bU,":",B.dZ,";",B.bv,"<",B.cl,"=",B.c6,">",B.bd,"?",B.b2,"@",B.el,"A",B.d1,"B",B.bo,"C",B.aO,"D",B.aG,"E",B.aU,"F",B.df,"G",B.b0,"H",B.b3,"I",B.dJ,"J",B.cB,"K",B.ct,"L",B.cs,"M",B.bp,"N",B.aw,"O",B.dT,"P",B.c0,"Q",B.dD,"R",B.an,"S",B.aR,"T",B.ez,"U",B.bm,"V",B.aC,"W",B.dM,"X",B.dG,"Y",B.aE,"Z",B.ar,"[",B.ch,"\\",B.dw,"]",B.cj,"^",B.ep,"_",B.am,"`",B.bn,"a",B.ee,"b",B.d4,"c",B.dF,"d",B.bL,"e",B.es,"f",B.bs,"g",B.dC,"h",B.bc,"i",B.dp,"j",B.cw,"k",B.bS,"l",B.cy,"m",B.cc,"n",B.cz,"o",B.bW,"p",B.ew,"q",B.et,"r",B.c7,"s",B.dW,"t",B.dP,"u",B.cZ,"v",B.bJ,"w",B.c_,"x",B.cu,"y",B.eC,"z",B.ec,"{",B.bP,"|",B.dV,"}",B.bg,"~",B.eN,"\u2302",B.bH,"\xc7",B.b6,"\xfc",B.e9,"\xe9",B.eB,"\xe2",B.cR,"\xe4",B.aT,"\xe0",B.bM,"\xe5",B.aJ,"\xe7",B.c3,"\xea",B.ek,"\xeb",B.bq,"\xe8",B.dX,"\xef",B.eb,"\xee",B.dN,"\xec",B.bD,"\xc4",B.eH,"\xc5",B.dU,"\xc9",B.cr,"\xe6",B.eA,"\xc6",B.bw,"\xf4",B.eu,"\xf6",B.aP,"\xf2",B.eJ,"\xfb",B.bt,"\xf9",B.dQ,"\xff",B.ba,"\xd6",B.aV,"\xdc",B.e2,"\xa2",B.ay,"\xa3",B.bk,"\xa5",B.bF,"\u20a7",B.ef,"\u0192",B.cC,"\xe1",B.bf,"\xed",B.d3,"\xf3",B.bi,"\xfa",B.ds,"\xf1",B.bA,"\xd1",B.dL,"\xaa",B.aQ,"\xba",B.d0,"\xbf",B.e3,"\u2310",B.bC,"\xac",B.bh,"\xbd",B.dY,"\xbc",B.b8,"\xa1",B.cF,"\xab",B.cE,"\xbb",B.bR,"\u2591",B.dv,"\u2592",B.ev,"\u2593",B.cx,"\u2502",B.bG,"\u2524",B.bB,"\u2561",B.cM,"\u2562",B.eM,"\u2556",B.dd,"\u2555",B.bx,"\u2563",B.aN,"\u2551",B.dk,"\u2557",B.d_,"\u255d",B.dq,"\u255c",B.b1,"\u255b",B.aD,"\u2510",B.aI,"\u2514",B.aA,"\u2534",B.cK,"\u252c",B.c5,"\u251c",B.e1,"\u2500",B.cI,"\u253c",B.dm,"\u255e",B.dB,"\u255f",B.bT,"\u255a",B.er,"\u2554",B.ej,"\u2569",B.cv,"\u2566",B.ci,"\u2560",B.bz,"\u2550",B.by,"\u256c",B.eD,"\u2567",B.dH,"\u2568",B.ak,"\u2564",B.ex,"\u2565",B.cU,"\u2559",B.de,"\u2558",B.cb,"\u2552",B.d6,"\u2553",B.dE,"\u256b",B.dK,"\u256a",B.cA,"\u2518",B.eg,"\u250c",B.bO,"\u2588",B.cV,"\u2584",B.cY,"\u258c",B.bZ,"\u2590",B.dg,"\u2580",B.e0,"\u03b1",B.eL,"\xdf",B.em,"\u0393",B.aZ,"\u03c0",B.cX,"\u03a3",B.ei,"\u03c3",B.c1,"\xb5",B.c9,"\u03c4",B.dx,"\u03a6",B.aS,"\u0398",B.bl,"\u03a9",B.aW,"\u03b4",B.al,"\u221e",B.ey,"\u03c6",B.c4,"\u03b5",B.aL,"\u2229",B.d8,"\u2261",B.dI,"\xb1",B.aH,"\u2265",B.bQ,"\u2264",B.dS,"\u2320",B.bY,"\u2321",B.e8,"\xf7",B.d2,"\u2248",B.aq,"\xb0",B.dt,"\u2219",B.as,"\xb7",B.en,"\u221a",B.av,"\u207f",B.cJ,"\xb2",B.b5,"\u25a0",B.e_],A.bg("r<y,d<a>>"))
B.i=new A.c(1,0)
B.b=new A.c(1,1)
B.f=new A.c(1,2)
B.f2=new A.c(1,3)
B.co=s([B.i,B.b,B.f,B.f2],t.n)
B.p=new A.c(0,2)
B.u=new A.c(2,2)
B.f6=new A.c(3,2)
B.c2=s([B.p,B.f,B.u,B.f6],t.n)
B.q=new A.c(2,0)
B.h=new A.c(2,1)
B.f4=new A.c(2,3)
B.ea=s([B.q,B.h,B.u,B.f4],t.n)
B.c=new A.c(0,1)
B.f5=new A.c(3,1)
B.bI=s([B.c,B.b,B.h,B.f5],t.n)
B.eV=new A.r([B.d,B.co,B.j,B.c2,B.k,B.ea,B.l,B.bI],t.k)
B.e=new A.c(0,0)
B.dh=s([B.e,B.i,B.b,B.f],t.n)
B.dc=s([B.c,B.p,B.b,B.h],t.n)
B.aB=s([B.i,B.b,B.f,B.u],t.n)
B.eo=s([B.c,B.b,B.q,B.h],t.n)
B.eT=new A.r([B.d,B.dh,B.j,B.dc,B.k,B.aB,B.l,B.eo],t.k)
B.bj=s([B.p,B.i,B.b,B.f],t.n)
B.e7=s([B.c,B.b,B.h,B.u],t.n)
B.du=s([B.i,B.b,B.f,B.q],t.n)
B.dl=s([B.e,B.c,B.b,B.h],t.n)
B.eX=new A.r([B.d,B.bj,B.j,B.e7,B.k,B.du,B.l,B.dl],t.k)
B.y=s([B.c,B.p,B.b,B.f],t.n)
B.eU=new A.r([B.d,B.y,B.j,B.y,B.k,B.y,B.l,B.y],t.k)
B.ca=s([B.c,B.p,B.i,B.b],t.n)
B.bu=s([B.c,B.b,B.f,B.u],t.n)
B.b9=s([B.b,B.f,B.q,B.h],t.n)
B.cf=s([B.e,B.i,B.b,B.h],t.n)
B.eW=new A.r([B.d,B.ca,B.j,B.bu,B.k,B.b9,B.l,B.cf],t.k)
B.b_=s([B.c,B.i,B.b,B.f],t.n)
B.eK=s([B.c,B.b,B.f,B.h],t.n)
B.eh=s([B.i,B.b,B.f,B.h],t.n)
B.cd=s([B.c,B.i,B.b,B.h],t.n)
B.eS=new A.r([B.d,B.b_,B.j,B.eK,B.k,B.eh,B.l,B.cd],t.k)
B.cT=s([B.e,B.c,B.b,B.f],t.n)
B.bV=s([B.p,B.b,B.f,B.h],t.n)
B.eP=s([B.i,B.b,B.h,B.u],t.n)
B.dy=s([B.c,B.i,B.b,B.q],t.n)
B.eR=new A.r([B.d,B.cT,B.j,B.bV,B.k,B.eP,B.l,B.dy],t.k)
B.eY=new A.r([B.z,B.eV,B.K,B.eT,B.L,B.eX,B.v,B.eU,B.M,B.eW,B.N,B.eS,B.O,B.eR],A.bg("r<w,fm<E,d<+(a,a)>>>"))
B.C=new A.c(B.d,B.j)
B.E=new A.c(B.j,B.d)
B.F=new A.c(B.j,B.k)
B.G=new A.c(B.k,B.j)
B.H=new A.c(B.k,B.l)
B.J=new A.c(B.l,B.k)
B.I=new A.c(B.l,B.d)
B.D=new A.c(B.d,B.l)
B.w=new A.c(0,-1)
B.a_=new A.c(1,-1)
B.B=new A.c(2,-1)
B.cO=s([B.e,B.w,B.a_,B.q,B.B],t.n)
B.a1=new A.c(-2,0)
B.a2=new A.c(-2,1)
B.U=s([B.e,B.c,B.b,B.a1,B.a2],t.n)
B.f9=new A.c(-1,-1)
B.dA=s([B.e,B.w,B.f9,B.q,B.B],t.n)
B.f7=new A.c(-1,1)
B.V=s([B.e,B.c,B.f7,B.q,B.h],t.n)
B.a3=new A.c(-2,-1)
B.W=s([B.e,B.w,B.a_,B.a1,B.a3],t.n)
B.eZ=new A.r([B.C,B.cO,B.E,B.U,B.F,B.U,B.G,B.dA,B.H,B.V,B.J,B.W,B.I,B.W,B.D,B.V],t.G)
B.o=s([B.e],t.n)
B.f_=new A.r([B.C,B.o,B.E,B.o,B.F,B.o,B.G,B.o,B.H,B.o,B.J,B.o,B.I,B.o,B.D,B.o],t.G)
B.A=new A.c(0,-2)
B.f3=new A.c(1,-2)
B.T=s([B.e,B.A,B.c,B.f3,B.a2],t.n)
B.f8=new A.c(-1,2)
B.Y=s([B.e,B.p,B.w,B.f8,B.B],t.n)
B.X=s([B.e,B.w,B.p,B.a3,B.f],t.n)
B.a0=new A.c(-1,-2)
B.cn=s([B.e,B.c,B.A,B.b,B.a0],t.n)
B.c8=s([B.e,B.c,B.A,B.h,B.a0],t.n)
B.f0=new A.r([B.C,B.T,B.E,B.Y,B.F,B.X,B.G,B.cn,B.H,B.Y,B.J,B.T,B.I,B.c8,B.D,B.X],t.G)
B.f1=new A.c8(0,"replace")
B.fa=new A.bJ(0,"clockwise")
B.fb=new A.bJ(1,"counterClockwise")
B.fc=new A.bM(0,"ready")
B.fd=new A.bM(2,"awaitingString")
B.fe=A.F("iF")
B.ff=A.F("iG")
B.fg=A.F("fb")
B.fh=A.F("fc")
B.fi=A.F("fe")
B.fj=A.F("ff")
B.fk=A.F("fg")
B.fl=A.F("i")
B.fm=A.F("fu")
B.fn=A.F("cz")
B.fo=A.F("fv")
B.fp=A.F("fw")})();(function staticFields(){$.cT=null
$.A=A.m([],t.f)
$.e4=null
$.e0=null
$.e_=null
$.eG=null
$.ez=null
$.eK=null
$.d9=null
$.df=null
$.dS=null
$.b1=A.m([],A.bg("k<d<i>?>"))
$.ak=null
$.bb=null
$.bc=null
$.dM=!1
$.o=B.n
$.da=B.S
$.bd=0
$.be=""})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"iI","eN",()=>A.db("_$dart_dartClosure"))
s($,"iH","dk",()=>A.db("_$dart_dartClosure_dartJSInterop"))
s($,"j1","f_",()=>A.m([new J.bt()],A.bg("k<aQ>")))
s($,"iP","eQ",()=>A.M(A.cy({
toString:function(){return"$receiver$"}})))
s($,"iQ","eR",()=>A.M(A.cy({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"iR","eS",()=>A.M(A.cy(null)))
s($,"iS","eT",()=>A.M(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"iV","eW",()=>A.M(A.cy(void 0)))
s($,"iW","eX",()=>A.M(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"iU","eV",()=>A.M(A.eb(null)))
s($,"iT","eU",()=>A.M(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"iY","eZ",()=>A.M(A.eb(void 0)))
s($,"iX","eY",()=>A.M(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"iZ","dW",()=>A.fx())
s($,"j0","dl",()=>A.dV(B.fl))
s($,"iO","eP",()=>A.dx(8,0,t.S))
s($,"iN","eO",()=>A.dx(8,255,t.S))
s($,"j4","B",()=>{var r=A.hf(A.i3(A.iq(),"document"),"querySelector","#tetris")
r=A.fs(35,r==null?A.T(r):r,3,3,0,28)
r.V()
return r})
s($,"j3","f0",()=>B.ac)})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.ac,SharedArrayBuffer:A.ac,ArrayBufferView:A.aL,DataView:A.bx,Float32Array:A.by,Float64Array:A.bz,Int16Array:A.bA,Int32Array:A.bB,Int8Array:A.bC,Uint16Array:A.bD,Uint32Array:A.bE,Uint8ClampedArray:A.aM,CanvasPixelArray:A.aM,Uint8Array:A.bF})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.ad.$nativeSuperclassTag="ArrayBufferView"
A.aY.$nativeSuperclassTag="ArrayBufferView"
A.aZ.$nativeSuperclassTag="ArrayBufferView"
A.aJ.$nativeSuperclassTag="ArrayBufferView"
A.b_.$nativeSuperclassTag="ArrayBufferView"
A.b0.$nativeSuperclassTag="ArrayBufferView"
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
var s=A.ic
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=tetris.js.map
