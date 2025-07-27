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
if(a[b]!==s){A.je(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.ev(b)
return new s(c,this)}:function(){if(s===null)s=A.ev(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.ev(a).prototype
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
eA(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ex(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.ey==null){A.j5()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.eY("Return interceptor for "+A.j(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.dx
if(o==null)o=$.dx=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.j9(a)
if(p!=null)return p
if(typeof a=="function")return B.P
s=Object.getPrototypeOf(a)
if(s==null)return B.C
if(s===Object.prototype)return B.C
if(typeof q=="function"){o=$.dx
if(o==null)o=$.dx=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.l,enumerable:false,writable:true,configurable:true})
return B.l}return B.l},
eQ(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
hc(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.eQ(r))break;++b}return b},
hd(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.b(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.eQ(q))break}return b},
ah(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aM.prototype
return J.bN.prototype}if(typeof a=="string")return J.a7.prototype
if(a==null)return J.aN.prototype
if(typeof a=="boolean")return J.bM.prototype
if(Array.isArray(a))return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.Y.prototype
if(typeof a=="symbol")return J.aQ.prototype
if(typeof a=="bigint")return J.aO.prototype
return a}if(a instanceof A.e)return a
return J.ex(a)},
ew(a){if(typeof a=="string")return J.a7.prototype
if(a==null)return a
if(Array.isArray(a))return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.Y.prototype
if(typeof a=="symbol")return J.aQ.prototype
if(typeof a=="bigint")return J.aO.prototype
return a}if(a instanceof A.e)return a
return J.ex(a)},
j_(a){if(a==null)return a
if(Array.isArray(a))return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.Y.prototype
if(typeof a=="symbol")return J.aQ.prototype
if(typeof a=="bigint")return J.aO.prototype
return a}if(a instanceof A.e)return a
return J.ex(a)},
j0(a){if(typeof a=="number")return J.al.prototype
if(a==null)return a
if(!(a instanceof A.e))return J.ab.prototype
return a},
j1(a){if(typeof a=="string")return J.a7.prototype
if(a==null)return a
if(!(a instanceof A.e))return J.ab.prototype
return a},
ak(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ah(a).J(a,b)},
Q(a){return J.ah(a).gl(a)},
eG(a){return J.j_(a).gu(a)},
e1(a){return J.ew(a).gj(a)},
fU(a){return J.ah(a).gt(a)},
eH(a){return J.j0(a).cr(a)},
bC(a){return J.ah(a).h(a)},
fV(a){return J.j1(a).cs(a)},
bL:function bL(){},
bM:function bM(){},
aN:function aN(){},
aP:function aP(){},
Z:function Z(){},
c2:function c2(){},
ab:function ab(){},
Y:function Y(){},
aO:function aO(){},
aQ:function aQ(){},
r:function r(a){this.$ti=a},
cC:function cC(a){this.$ti=a},
bD:function bD(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
al:function al(){},
aM:function aM(){},
bN:function bN(){},
a7:function a7(){}},A={e6:function e6(){},
eR(a){return new A.aS("Field '"+a+"' has not been initialized.")},
a_(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
ed(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
eu(a,b,c){return a},
ez(a){var s,r
for(s=$.D.length,r=0;r<s;++r)if(a===$.D[r])return!0
return!1},
h6(a,b,c){return new A.aK(a,b,c.i("aK<0>"))},
cA(){return new A.aa("No element")},
aS:function aS(a){this.a=a},
dX:function dX(){},
cO:function cO(){},
aF:function aF(){},
S:function S(){},
an:function an(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
b6:function b6(a,b,c){this.a=a
this.b=b
this.$ti=c},
ca:function ca(a,b){this.a=a
this.b=b},
aG:function aG(a){this.$ti=a},
bI:function bI(){},
aK:function aK(a,b,c){this.a=a
this.b=b
this.$ti=c},
aL:function aL(a,b){this.a=a
this.b=b
this.c=-1},
aI:function aI(){},
b2:function b2(a,b){this.a=a
this.$ti=b},
fF(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
jI(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
j(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.bC(a)
return s},
ar(a){var s,r=$.eS
if(r==null)r=$.eS=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
cI(a){var s,r,q,p
if(a instanceof A.e)return A.C(A.bB(a),null)
s=J.ah(a)
if(s===B.O||s===B.Q||t.J.b(a)){r=B.m(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.C(A.bB(a),null)},
eT(a){if(a==null||typeof a=="number"||A.eq(a))return J.bC(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.a5)return a.h(0)
if(a instanceof A.aw)return a.bd(!0)
return"Instance of '"+A.cI(a)+"'"},
hi(a){var s=a.$thrownJsError
if(s==null)return null
return A.ai(s)},
hj(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.x(a,s)
a.$thrownJsError=s
s.stack=""}},
b(a,b){if(a==null)J.e1(a)
throw A.d(A.fy(a,b))},
fy(a,b){var s,r="index",q=null
if(!A.fn(b))return new A.L(!0,b,r,q)
s=J.e1(a)
if(b<0||b>=s)return A.e4(b,s,a,q,r)
return new A.as(q,q,!0,b,r,"Value not in range")},
et(a){return new A.L(!0,a,null,null)},
d(a){return A.x(a,new Error())},
x(a,b){var s
if(a==null)a=new A.T()
b.dartException=a
s=A.jf
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
jf(){return J.bC(this.dartException)},
P(a,b){throw A.x(a,b==null?new Error():b)},
y(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.P(A.ii(a,b,c),s)},
ii(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.b5("'"+s+"': Cannot "+o+" "+l+k+n)},
dY(a){throw A.d(A.a6(a))},
U(a){var s,r,q,p,o,n
a=A.jc(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.a([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.d6(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
d7(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
eX(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
e7(a,b){var s=b==null,r=s?null:b.method
return new A.bO(a,r,s?null:b.receiver)},
aC(a){if(a==null)return new A.cF(a)
if(a instanceof A.aH)return A.a3(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.a3(a,a.dartException)
return A.iO(a)},
a3(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
iO(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.a.aa(r,16)&8191)===10)switch(q){case 438:return A.a3(a,A.e7(A.j(s)+" (Error "+q+")",null))
case 445:case 5007:A.j(s)
return A.a3(a,new A.b0())}}if(a instanceof TypeError){p=$.fI()
o=$.fJ()
n=$.fK()
m=$.fL()
l=$.fO()
k=$.fP()
j=$.fN()
$.fM()
i=$.fR()
h=$.fQ()
g=p.I(s)
if(g!=null)return A.a3(a,A.e7(s,g))
else{g=o.I(s)
if(g!=null){g.method="call"
return A.a3(a,A.e7(s,g))}else if(n.I(s)!=null||m.I(s)!=null||l.I(s)!=null||k.I(s)!=null||j.I(s)!=null||m.I(s)!=null||i.I(s)!=null||h.I(s)!=null)return A.a3(a,new A.b0())}return A.a3(a,new A.c8(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.b4()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.a3(a,new A.L(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.b4()
return a},
ai(a){var s
if(a instanceof A.aH)return a.b
if(a==null)return new A.bl(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.bl(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
eB(a){if(a==null)return J.Q(a)
if(typeof a=="object")return A.ar(a)
return J.Q(a)},
iU(a){if(typeof a=="number")return B.y.gl(a)
if(a instanceof A.cq)return A.ar(a)
if(a instanceof A.aw)return a.gl(a)
return A.eB(a)},
iY(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.ag(0,a[s],a[r])}return b},
is(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(new A.dj("Unsupported number of arguments for wrapped closure"))},
cs(a,b){var s=a.$identity
if(!!s)return s
s=A.iV(a,b)
a.$identity=s
return s},
iV(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.is)},
h1(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.cP().constructor.prototype):Object.create(new A.aD(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.eM(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.fY(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.eM(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
fY(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.fW)}throw A.d("Error in functionType of tearoff")},
fZ(a,b,c,d){var s=A.eL
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
eM(a,b,c,d){if(c)return A.h0(a,b,d)
return A.fZ(b.length,d,a,b)},
h_(a,b,c,d){var s=A.eL,r=A.fX
switch(b?-1:a){case 0:throw A.d(new A.c4("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
h0(a,b,c){var s,r
if($.eJ==null)$.eJ=A.eI("interceptor")
if($.eK==null)$.eK=A.eI("receiver")
s=b.length
r=A.h_(s,c,a,b)
return r},
ev(a){return A.h1(a)},
fW(a,b){return A.bs(v.typeUniverse,A.bB(a.a),b)},
eL(a){return a.a},
fX(a){return a.b},
eI(a){var s,r,q,p=new A.aD("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.d(A.W("Field name "+a+" not found.",null))},
j2(a){return v.getIsolateTag(a)},
j9(a){var s,r,q,p,o,n=$.fA.$1(a),m=$.dP[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.dV[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.fu.$2(a,n)
if(q!=null){m=$.dP[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.dV[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.dW(s)
$.dP[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.dV[n]=s
return s}if(p==="-"){o=A.dW(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.fC(a,s)
if(p==="*")throw A.d(A.eY(n))
if(v.leafTags[n]===true){o=A.dW(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.fC(a,s)},
fC(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.eA(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
dW(a){return J.eA(a,!1,null,!!a.$iB)},
jb(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.dW(s)
else return J.eA(s,c,null,null)},
j5(){if(!0===$.ey)return
$.ey=!0
A.j6()},
j6(){var s,r,q,p,o,n,m,l
$.dP=Object.create(null)
$.dV=Object.create(null)
A.j4()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.fD.$1(o)
if(n!=null){m=A.jb(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
j4(){var s,r,q,p,o,n,m=B.G()
m=A.aA(B.H,A.aA(B.I,A.aA(B.n,A.aA(B.n,A.aA(B.J,A.aA(B.K,A.aA(B.L(B.m),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.fA=new A.dS(p)
$.fu=new A.dT(o)
$.fD=new A.dU(n)},
aA(a,b){return a(b)||b},
iW(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
he(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.d(A.eO("Illegal RegExp pattern ("+String(o)+")",a))},
jc(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
m:function m(a,b){this.a=a
this.b=b},
cn:function cn(a,b){this.a=a
this.b=b},
bH:function bH(){},
aJ:function aJ(a,b){this.a=a
this.$ti=b},
d6:function d6(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
b0:function b0(){},
bO:function bO(a,b,c){this.a=a
this.b=b
this.c=c},
c8:function c8(a){this.a=a},
cF:function cF(a){this.a=a},
aH:function aH(a,b){this.a=a
this.b=b},
bl:function bl(a){this.a=a
this.b=null},
a5:function a5(){},
ct:function ct(){},
cu:function cu(){},
cU:function cU(){},
cP:function cP(){},
aD:function aD(a,b){this.a=a
this.b=b},
c4:function c4(a){this.a=a},
a8:function a8(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cD:function cD(a,b){this.a=a
this.b=b
this.c=null},
aU:function aU(a,b){this.a=a
this.$ti=b},
bQ:function bQ(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
aT:function aT(a,b){this.a=a
this.$ti=b},
bP:function bP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aR:function aR(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dS:function dS(a){this.a=a},
dT:function dT(a){this.a=a},
dU:function dU(a){this.a=a},
aw:function aw(){},
cm:function cm(){},
cB:function cB(a,b){var _=this
_.a=a
_.b=b
_.e=_.c=null},
dz:function dz(a){this.b=a},
je(a){throw A.x(new A.aS("Field '"+a+"' has been assigned during initialization."),new Error())},
a4(){throw A.x(A.eR(""),new Error())},
dh(a){var s=new A.dg(a)
return s.b=s},
dg:function dg(a){this.a=a
this.b=null},
ae(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.fy(b,a))},
bR:function bR(){},
aZ:function aZ(){},
bS:function bS(){},
ap:function ap(){},
aX:function aX(){},
aY:function aY(){},
bT:function bT(){},
bU:function bU(){},
bV:function bV(){},
bW:function bW(){},
bX:function bX(){},
bY:function bY(){},
bZ:function bZ(){},
b_:function b_(){},
c_:function c_(){},
bf:function bf(){},
bg:function bg(){},
bh:function bh(){},
bi:function bi(){},
ea(a,b){var s=b.c
return s==null?b.c=A.bq(a,"R",[b.x]):s},
eU(a){var s=a.w
if(s===6||s===7)return A.eU(a.x)
return s===11||s===12},
ho(a){return a.as},
dQ(a){return A.dG(v.typeUniverse,a,!1)},
af(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.af(a1,s,a3,a4)
if(r===s)return a2
return A.fe(a1,r,!0)
case 7:s=a2.x
r=A.af(a1,s,a3,a4)
if(r===s)return a2
return A.fd(a1,r,!0)
case 8:q=a2.y
p=A.az(a1,q,a3,a4)
if(p===q)return a2
return A.bq(a1,a2.x,p)
case 9:o=a2.x
n=A.af(a1,o,a3,a4)
m=a2.y
l=A.az(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.em(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.az(a1,j,a3,a4)
if(i===j)return a2
return A.ff(a1,k,i)
case 11:h=a2.x
g=A.af(a1,h,a3,a4)
f=a2.y
e=A.iL(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.fc(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.az(a1,d,a3,a4)
o=a2.x
n=A.af(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.en(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.d(A.bF("Attempted to substitute unexpected RTI kind "+a0))}},
az(a,b,c,d){var s,r,q,p,o=b.length,n=A.dH(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.af(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
iM(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.dH(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.af(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
iL(a,b,c,d){var s,r=b.a,q=A.az(a,r,c,d),p=b.b,o=A.az(a,p,c,d),n=b.c,m=A.iM(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.ck()
s.a=q
s.b=o
s.c=m
return s},
a(a,b){a[v.arrayRti]=b
return a},
fw(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.j3(s)
return a.$S()}return null},
j7(a,b){var s
if(A.eU(b))if(a instanceof A.a5){s=A.fw(a)
if(s!=null)return s}return A.bB(a)},
bB(a){if(a instanceof A.e)return A.a2(a)
if(Array.isArray(a))return A.eo(a)
return A.ep(J.ah(a))},
eo(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
a2(a){var s=a.$ti
return s!=null?s:A.ep(a)},
ep(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.iq(a,s)},
iq(a,b){var s=a instanceof A.a5?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.i_(v.typeUniverse,s.name)
b.$ccache=r
return r},
j3(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.dG(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
fz(a){return A.ag(A.a2(a))},
es(a){var s
if(a instanceof A.aw)return A.iX(a.$r,a.b6())
s=a instanceof A.a5?A.fw(a):null
if(s!=null)return s
if(t.B.b(a))return J.fU(a).a
if(Array.isArray(a))return A.eo(a)
return A.bB(a)},
ag(a){var s=a.r
return s==null?a.r=new A.cq(a):s},
iX(a,b){var s,r,q=b,p=q.length
if(p===0)return t.F
if(0>=p)return A.b(q,0)
s=A.bs(v.typeUniverse,A.es(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.b(q,r)
s=A.fg(v.typeUniverse,s,A.es(q[r]))}return A.bs(v.typeUniverse,s,a)},
K(a){return A.ag(A.dG(v.typeUniverse,a,!1))},
ip(a){var s,r,q,p,o=this
if(o===t.K)return A.V(o,a,A.ix)
if(A.aj(o))return A.V(o,a,A.iB)
s=o.w
if(s===6)return A.V(o,a,A.im)
if(s===1)return A.V(o,a,A.fo)
if(s===7)return A.V(o,a,A.it)
if(o===t.S)r=A.fn
else if(o===t.i||o===t.H)r=A.iw
else if(o===t.N)r=A.iz
else r=o===t.y?A.eq:null
if(r!=null)return A.V(o,a,r)
if(s===8){q=o.x
if(o.y.every(A.aj)){o.f="$i"+q
if(q==="i")return A.V(o,a,A.iv)
return A.V(o,a,A.iA)}}else if(s===10){p=A.iW(o.x,o.y)
return A.V(o,a,p==null?A.fo:p)}return A.V(o,a,A.ik)},
V(a,b,c){a.b=c
return a.b(b)},
io(a){var s=this,r=A.ij
if(A.aj(s))r=A.ic
else if(s===t.K)r=A.i9
else if(A.aB(s))r=A.il
if(s===t.S)r=A.i5
else if(s===t.Y)r=A.i6
else if(s===t.N)r=A.ia
else if(s===t.M)r=A.ib
else if(s===t.y)r=A.i1
else if(s===t.u)r=A.i2
else if(s===t.H)r=A.i7
else if(s===t.d)r=A.i8
else if(s===t.i)r=A.i3
else if(s===t.I)r=A.i4
s.a=r
return s.a(a)},
ik(a){var s=this
if(a==null)return A.aB(s)
return A.j8(v.typeUniverse,A.j7(a,s),s)},
im(a){if(a==null)return!0
return this.x.b(a)},
iA(a){var s,r=this
if(a==null)return A.aB(r)
s=r.f
if(a instanceof A.e)return!!a[s]
return!!J.ah(a)[s]},
iv(a){var s,r=this
if(a==null)return A.aB(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.e)return!!a[s]
return!!J.ah(a)[s]},
ij(a){var s=this
if(a==null){if(A.aB(s))return a}else if(s.b(a))return a
throw A.x(A.fj(a,s),new Error())},
il(a){var s=this
if(a==null||s.b(a))return a
throw A.x(A.fj(a,s),new Error())},
fj(a,b){return new A.bo("TypeError: "+A.f6(a,A.C(b,null)))},
f6(a,b){return A.cv(a)+": type '"+A.C(A.es(a),null)+"' is not a subtype of type '"+b+"'"},
N(a,b){return new A.bo("TypeError: "+A.f6(a,b))},
it(a){var s=this
return s.x.b(a)||A.ea(v.typeUniverse,s).b(a)},
ix(a){return a!=null},
i9(a){if(a!=null)return a
throw A.x(A.N(a,"Object"),new Error())},
iB(a){return!0},
ic(a){return a},
fo(a){return!1},
eq(a){return!0===a||!1===a},
i1(a){if(!0===a)return!0
if(!1===a)return!1
throw A.x(A.N(a,"bool"),new Error())},
i2(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.x(A.N(a,"bool?"),new Error())},
i3(a){if(typeof a=="number")return a
throw A.x(A.N(a,"double"),new Error())},
i4(a){if(typeof a=="number")return a
if(a==null)return a
throw A.x(A.N(a,"double?"),new Error())},
fn(a){return typeof a=="number"&&Math.floor(a)===a},
i5(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.x(A.N(a,"int"),new Error())},
i6(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.x(A.N(a,"int?"),new Error())},
iw(a){return typeof a=="number"},
i7(a){if(typeof a=="number")return a
throw A.x(A.N(a,"num"),new Error())},
i8(a){if(typeof a=="number")return a
if(a==null)return a
throw A.x(A.N(a,"num?"),new Error())},
iz(a){return typeof a=="string"},
ia(a){if(typeof a=="string")return a
throw A.x(A.N(a,"String"),new Error())},
ib(a){if(typeof a=="string")return a
if(a==null)return a
throw A.x(A.N(a,"String?"),new Error())},
fr(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.C(a[q],b)
return s},
iG(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.fr(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.C(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
fk(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.a([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)a4.push("T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.b(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.C(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.C(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.C(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.C(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.C(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
C(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.C(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.C(a.x,b)+">"
if(l===8){p=A.iN(a.x)
o=a.y
return o.length>0?p+("<"+A.fr(o,b)+">"):p}if(l===10)return A.iG(a,b)
if(l===11)return A.fk(a,b,null)
if(l===12)return A.fk(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.b(b,n)
return b[n]}return"?"},
iN(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
i0(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
i_(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.dG(a,b,!1)
else if(typeof m=="number"){s=m
r=A.br(a,5,"#")
q=A.dH(s)
for(p=0;p<s;++p)q[p]=r
o=A.bq(a,b,q)
n[b]=o
return o}else return m},
hZ(a,b){return A.fh(a.tR,b)},
hY(a,b){return A.fh(a.eT,b)},
dG(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.fa(A.f8(a,null,b,!1))
r.set(b,s)
return s},
bs(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.fa(A.f8(a,b,c,!0))
q.set(c,r)
return r},
fg(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.em(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
a1(a,b){b.a=A.io
b.b=A.ip
return b},
br(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.I(null,null)
s.w=b
s.as=c
r=A.a1(a,s)
a.eC.set(c,r)
return r},
fe(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.hW(a,b,r,c)
a.eC.set(r,s)
return s},
hW(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.aj(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.aB(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.I(null,null)
q.w=6
q.x=b
q.as=c
return A.a1(a,q)},
fd(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.hU(a,b,r,c)
a.eC.set(r,s)
return s},
hU(a,b,c,d){var s,r
if(d){s=b.w
if(A.aj(b)||b===t.K)return b
else if(s===1)return A.bq(a,"R",[b])
else if(b===t.P||b===t.T)return t.O}r=new A.I(null,null)
r.w=7
r.x=b
r.as=c
return A.a1(a,r)},
hX(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.I(null,null)
s.w=13
s.x=b
s.as=q
r=A.a1(a,s)
a.eC.set(q,r)
return r},
bp(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
hT(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
bq(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.bp(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.I(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.a1(a,r)
a.eC.set(p,q)
return q},
em(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.bp(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.I(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.a1(a,o)
a.eC.set(q,n)
return n},
ff(a,b,c){var s,r,q="+"+(b+"("+A.bp(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.I(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.a1(a,s)
a.eC.set(q,r)
return r},
fc(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.bp(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.bp(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.hT(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.I(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.a1(a,p)
a.eC.set(r,o)
return o},
en(a,b,c,d){var s,r=b.as+("<"+A.bp(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.hV(a,b,c,r,d)
a.eC.set(r,s)
return s},
hV(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.dH(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.af(a,b,r,0)
m=A.az(a,c,r,0)
return A.en(a,n,m,c!==m)}}l=new A.I(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.a1(a,l)},
f8(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
fa(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.hM(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.f9(a,r,l,k,!1)
else if(q===46)r=A.f9(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.ad(a.u,a.e,k.pop()))
break
case 94:k.push(A.hX(a.u,k.pop()))
break
case 35:k.push(A.br(a.u,5,"#"))
break
case 64:k.push(A.br(a.u,2,"@"))
break
case 126:k.push(A.br(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.hO(a,k)
break
case 38:A.hN(a,k)
break
case 63:p=a.u
k.push(A.fe(p,A.ad(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.fd(p,A.ad(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.hL(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.fb(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.hQ(a.u,a.e,o)
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
return A.ad(a.u,a.e,m)},
hM(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
f9(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.i0(s,o.x)[p]
if(n==null)A.P('No "'+p+'" in "'+A.ho(o)+'"')
d.push(A.bs(s,o,n))}else d.push(p)
return m},
hO(a,b){var s,r=a.u,q=A.f7(a,b),p=b.pop()
if(typeof p=="string")b.push(A.bq(r,p,q))
else{s=A.ad(r,a.e,p)
switch(s.w){case 11:b.push(A.en(r,s,q,a.n))
break
default:b.push(A.em(r,s,q))
break}}},
hL(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.f7(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.ad(p,a.e,o)
q=new A.ck()
q.a=s
q.b=n
q.c=m
b.push(A.fc(p,r,q))
return
case-4:b.push(A.ff(p,b.pop(),s))
return
default:throw A.d(A.bF("Unexpected state under `()`: "+A.j(o)))}},
hN(a,b){var s=b.pop()
if(0===s){b.push(A.br(a.u,1,"0&"))
return}if(1===s){b.push(A.br(a.u,4,"1&"))
return}throw A.d(A.bF("Unexpected extended operation "+A.j(s)))},
f7(a,b){var s=b.splice(a.p)
A.fb(a.u,a.e,s)
a.p=b.pop()
return s},
ad(a,b,c){if(typeof c=="string")return A.bq(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.hP(a,b,c)}else return c},
fb(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.ad(a,b,c[s])},
hQ(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.ad(a,b,c[s])},
hP(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.d(A.bF("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.d(A.bF("Bad index "+c+" for "+b.h(0)))},
j8(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.t(a,b,null,c,null)
r.set(c,s)}return s},
t(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.aj(d))return!0
s=b.w
if(s===4)return!0
if(A.aj(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.t(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.t(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.t(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.t(a,b.x,c,d,e))return!1
return A.t(a,A.ea(a,b),c,d,e)}if(s===6)return A.t(a,p,c,d,e)&&A.t(a,b.x,c,d,e)
if(q===7){if(A.t(a,b,c,d.x,e))return!0
return A.t(a,b,c,A.ea(a,d),e)}if(q===6)return A.t(a,b,c,p,e)||A.t(a,b,c,d.x,e)
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
if(!A.t(a,j,c,i,e)||!A.t(a,i,e,j,c))return!1}return A.fm(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.fm(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.iu(a,b,c,d,e)}if(o&&q===10)return A.iy(a,b,c,d,e)
return!1},
fm(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.t(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.t(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.t(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.t(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.t(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
iu(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
for(;n!==m;){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.bs(a,b,r[o])
return A.fi(a,p,null,c,d.y,e)}return A.fi(a,b.y,null,c,d.y,e)},
fi(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.t(a,b[s],d,e[s],f))return!1
return!0},
iy(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.t(a,r[s],c,q[s],e))return!1
return!0},
aB(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.aj(a))if(s!==6)r=s===7&&A.aB(a.x)
return r},
aj(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
fh(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
dH(a){return a>0?new Array(a):v.typeUniverse.sEA},
I:function I(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
ck:function ck(){this.c=this.b=this.a=null},
cq:function cq(a){this.a=a},
cj:function cj(){},
bo:function bo(a){this.a=a},
hx(){var s,r,q
if(self.scheduleImmediate!=null)return A.iP()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.cs(new A.da(s),1)).observe(r,{childList:true})
return new A.d9(s,r,q)}else if(self.setImmediate!=null)return A.iQ()
return A.iR()},
hy(a){self.scheduleImmediate(A.cs(new A.db(a),0))},
hz(a){self.setImmediate(A.cs(new A.dc(a),0))},
hA(a){A.ee(B.x,a)},
ee(a,b){var s=B.a.p(a.a,1000)
return A.hR(s,b)},
eW(a,b){var s=B.a.p(a.a,1000)
return A.hS(s,b)},
hR(a,b){var s=new A.bn()
s.bF(a,b)
return s},
hS(a,b){var s=new A.bn()
s.bG(a,b)
return s},
bz(a){return new A.cb(new A.l($.f,a.i("l<0>")),a.i("cb<0>"))},
bv(a,b){a.$2(0,null)
b.b=!0
return b.a},
O(a,b){A.id(a,b)},
bu(a,b){var s,r=a==null?b.$ti.c.a(a):a
if(!b.b)b.a.an(r)
else{s=b.a
if(b.$ti.i("R<1>").b(r))s.b0(r)
else s.b3(r)}},
bt(a,b){var s=A.aC(a),r=A.ai(a),q=b.a
if(b.b)q.W(new A.E(s,r))
else q.b_(new A.E(s,r))},
id(a,b){var s,r,q=new A.dJ(b),p=new A.dK(b)
if(a instanceof A.l)a.bc(q,p,t.z)
else{s=t.z
if(a instanceof A.l)a.by(q,p,s)
else{r=new A.l($.f,t.c)
r.a=8
r.c=a
r.bc(q,p,s)}}},
bA(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.f.aO(new A.dN(s))},
e3(a){var s
if(t.Q.b(a)){s=a.gV()
if(s!=null)return s}return B.h},
eP(a,b){var s
if(!b.b(null))throw A.d(A.e2(null,"computation","The type parameter is not nullable"))
s=new A.l($.f,b.i("l<0>"))
A.hs(a,new A.cx(null,s,b))
return s},
ir(a,b){if($.f===B.d)return null
return null},
dn(a,b,c){var s,r,q,p={},o=p.a=a
for(;s=o.a,(s&4)!==0;){o=o.c
p.a=o}if(o===b){s=A.hq()
b.b_(new A.E(new A.L(!0,o,null,"Cannot complete a future with itself"),s))
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.ba(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.Y()
b.a5(p.a)
A.ac(b,q)
return}b.a^=2
A.ay(null,null,b.b,new A.dp(p,b))},
ac(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;!0;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){f=f.c
A.cr(f.a,f.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.ac(g.a,f)
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
if(r){A.cr(m.a,m.b)
return}j=$.f
if(j!==k)$.f=k
else j=null
f=f.c
if((f&15)===8)new A.dt(s,g,p).$0()
else if(q){if((f&1)!==0)new A.ds(s,m).$0()}else if((f&2)!==0)new A.dr(g,s).$0()
if(j!=null)$.f=j
f=s.c
if(f instanceof A.l){r=s.a.$ti
r=r.i("R<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.a8(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.dn(f,i,!0)
return}}i=s.a.b
h=i.c
i.c=null
b=i.a8(h)
f=s.b
r=s.c
if(!f){i.a=8
i.c=r}else{i.a=i.a&1|16
i.c=r}g.a=i
f=i}},
iH(a,b){if(t.C.b(a))return b.aO(a)
if(t.v.b(a))return a
throw A.d(A.e2(a,"onError",u.c))},
iD(){var s,r
for(s=$.ax;s!=null;s=$.ax){$.by=null
r=s.b
$.ax=r
if(r==null)$.bx=null
s.a.$0()}},
iK(){$.er=!0
try{A.iD()}finally{$.by=null
$.er=!1
if($.ax!=null)$.eD().$1(A.fv())}},
ft(a){var s=new A.cc(a),r=$.bx
if(r==null){$.ax=$.bx=s
if(!$.er)$.eD().$1(A.fv())}else $.bx=r.b=s},
iJ(a){var s,r,q,p=$.ax
if(p==null){A.ft(a)
$.by=$.bx
return}s=new A.cc(a)
r=$.by
if(r==null){s.b=p
$.ax=$.by=s}else{q=r.b
s.b=q
$.by=r.b=s
if(q==null)$.bx=s}},
fE(a){var s=null,r=$.f
if(B.d===r){A.ay(s,s,B.d,a)
return}A.ay(s,s,r,r.aC(a))},
jo(a){A.eu(a,"stream",t.K)
return new A.co()},
ec(a){return new A.b7(null,null,a.i("b7<0>"))},
fs(a){return},
f5(a,b){return b==null?A.iS():b},
hI(a,b){if(b==null)b=A.iT()
if(t.k.b(b))return a.aO(b)
if(t.e.b(b))return b
throw A.d(A.W("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
iE(a){},
iF(a,b){A.cr(a,b)},
ih(a,b,c){var s,r,q=a.bg()
if(q!==$.e_()){s=q.$ti
r=$.f
q.a4(new A.a0(new A.l(r,s),8,new A.dL(b,c),null,s.i("a0<1,1>")))}else b.a6(c)},
hs(a,b){var s=$.f
if(s===B.d)return A.ee(a,b)
return A.ee(a,s.aC(b))},
ht(a,b){var s=$.f
if(s===B.d)return A.eW(a,b)
return A.eW(a,s.c5(b,t.E))},
cr(a,b){A.iJ(new A.dM(a,b))},
fp(a,b,c,d){var s,r=$.f
if(r===c)return d.$0()
$.f=c
s=r
try{r=d.$0()
return r}finally{$.f=s}},
fq(a,b,c,d,e){var s,r=$.f
if(r===c)return d.$1(e)
$.f=c
s=r
try{r=d.$1(e)
return r}finally{$.f=s}},
iI(a,b,c,d,e,f){var s,r=$.f
if(r===c)return d.$2(e,f)
$.f=c
s=r
try{r=d.$2(e,f)
return r}finally{$.f=s}},
ay(a,b,c,d){if(B.d!==c)d=c.aC(d)
A.ft(d)},
da:function da(a){this.a=a},
d9:function d9(a,b,c){this.a=a
this.b=b
this.c=c},
db:function db(a){this.a=a},
dc:function dc(a){this.a=a},
bn:function bn(){this.c=0},
dF:function dF(a,b){this.a=a
this.b=b},
dE:function dE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cb:function cb(a,b){this.a=a
this.b=!1
this.$ti=b},
dJ:function dJ(a){this.a=a},
dK:function dK(a){this.a=a},
dN:function dN(a){this.a=a},
E:function E(a,b){this.a=a
this.b=b},
G:function G(a,b){this.a=a
this.$ti=b},
ba:function ba(a,b,c,d,e){var _=this
_.ay=0
_.CW=_.ch=null
_.w=a
_.a=b
_.d=c
_.e=d
_.r=_.f=null
_.$ti=e},
ce:function ce(){},
b7:function b7(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null
_.$ti=c},
cx:function cx(a,b,c){this.a=a
this.b=b
this.c=c},
a0:function a0(a,b,c,d,e){var _=this
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
dk:function dk(a,b){this.a=a
this.b=b},
dq:function dq(a,b){this.a=a
this.b=b},
dp:function dp(a,b){this.a=a
this.b=b},
dm:function dm(a,b){this.a=a
this.b=b},
dl:function dl(a,b){this.a=a
this.b=b},
dt:function dt(a,b,c){this.a=a
this.b=b
this.c=c},
du:function du(a,b){this.a=a
this.b=b},
dv:function dv(a){this.a=a},
ds:function ds(a,b){this.a=a
this.b=b},
dr:function dr(a,b){this.a=a
this.b=b},
cc:function cc(a){this.a=a
this.b=null},
au:function au(){},
cS:function cS(a,b){this.a=a
this.b=b},
cT:function cT(a,b){this.a=a
this.b=b},
cQ:function cQ(a){this.a=a},
cR:function cR(a,b,c){this.a=a
this.b=b
this.c=c},
bb:function bb(){},
cg:function cg(){},
cf:function cf(){},
bm:function bm(){},
ci:function ci(){},
ch:function ch(a){this.b=a
this.a=null},
cl:function cl(){this.a=0
this.c=this.b=null},
dA:function dA(a,b){this.a=a
this.b=b},
bc:function bc(a){this.a=1
this.b=a
this.c=null},
co:function co(){},
dL:function dL(a,b){this.a=a
this.b=b},
dI:function dI(){},
dM:function dM(a,b){this.a=a
this.b=b},
dB:function dB(){},
dC:function dC(a,b){this.a=a
this.b=b},
dD:function dD(a,b,c){this.a=a
this.b=b
this.c=c},
hf(a,b){return new A.a8(a.i("@<0>").ao(b).i("a8<1,2>"))},
hg(a){return new A.be(a.i("be<0>"))},
el(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
hK(a,b,c){var s=new A.av(a,b,c.i("av<0>"))
s.c=a.e
return s},
e9(a){var s,r
if(A.ez(a))return"{...}"
s=new A.c6("")
try{r={}
$.D.push(a)
s.a+="{"
r.a=!0
a.aG(0,new A.cE(r,s))
s.a+="}"}finally{if(0>=$.D.length)return A.b($.D,-1)
$.D.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
be:function be(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dy:function dy(a){this.a=a
this.c=this.b=null},
av:function av(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
o:function o(){},
aV:function aV(){},
cE:function cE(a,b){this.a=a
this.b=b},
b3:function b3(){},
bk:function bk(){},
hD(a,b){var s,r,q=$.p(),p=a.length,o=4-p%4
if(o===4)o=0
for(s=0,r=0;r<p;++r){s=s*10+a.charCodeAt(r)-48;++o
if(o===4){q=q.a3(0,$.eE()).aQ(0,A.b8(s))
s=0
o=0}}if(b)return q.K(0)
return q},
ej(a){if(48<=a&&a<=57)return a-48
return(a|32)-97+10},
hE(a,b,c){var s,r,q,p,o,n,m,l=a.length,k=l-b,j=B.y.c6(k/4),i=new Uint16Array(j),h=j-1,g=k-h*4
for(s=b,r=0,q=0;q<g;++q,s=p){p=s+1
if(!(s<l))return A.b(a,s)
o=A.ej(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}n=h-1
if(!(h>=0))return A.b(i,h)
i[h]=r
for(;s<l;n=m){for(r=0,q=0;q<4;++q,s=p){p=s+1
if(!(s>=0&&s<l))return A.b(a,s)
o=A.ej(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}m=n-1
if(!(n>=0))return A.b(i,n)
i[n]=r}if(j===1){if(0>=j)return A.b(i,0)
l=i[0]===0}else l=!1
if(l)return $.p()
l=A.v(j,i)
return new A.q(l===0?!1:c,i,l)},
hF(a,b,c){var s,r,q,p=$.p(),o=A.b8(b)
for(s=a.length,r=0;r<s;++r){q=A.ej(a.charCodeAt(r))
if(q>=b)return null
p=p.a3(0,o).aQ(0,A.b8(q))}if(c)return p.K(0)
return p},
hH(a,b){var s,r,q,p,o,n,m,l=null
if(a==="")return l
s=$.fS().c8(a)
if(s==null)return l
r=s.b
q=r.length
if(1>=q)return A.b(r,1)
p=r[1]==="-"
if(4>=q)return A.b(r,4)
o=r[4]
n=r[3]
if(5>=q)return A.b(r,5)
m=r[5]
if(b<2||b>36)throw A.d(A.c3(b,2,36,"radix",l))
if(b===10&&o!=null)return A.hD(o,p)
if(b===16)r=o!=null||m!=null
else r=!1
if(r){if(o==null){m.toString
r=m}else r=o
return A.hE(r,0,p)}r=o==null?m:o
if(r==null){n.toString
r=n}return A.hF(r,b,p)},
v(a,b){var s,r=b.length
while(!0){if(a>0){s=a-1
if(!(s<r))return A.b(b,s)
s=b[s]===0}else s=!1
if(!s)break;--a}return a},
ei(a,b,c,d){var s,r,q,p=new Uint16Array(d),o=c-b
for(s=a.length,r=0;r<o;++r){q=b+r
if(!(q>=0&&q<s))return A.b(a,q)
q=a[q]
if(!(r<d))return A.b(p,r)
p[r]=q}return p},
b8(a){var s,r,q,p,o=a<0
if(o){if(a===-9223372036854776e3){s=new Uint16Array(4)
s[3]=32768
r=A.v(4,s)
return new A.q(r!==0,s,r)}a=-a}if(a<65536){s=new Uint16Array(1)
s[0]=a
r=A.v(1,s)
return new A.q(r===0?!1:o,s,r)}if(a<=4294967295){s=new Uint16Array(2)
s[0]=a&65535
s[1]=B.a.aa(a,16)
r=A.v(2,s)
return new A.q(r===0?!1:o,s,r)}r=B.a.p(B.a.gbf(a)-1,16)+1
s=new Uint16Array(r)
for(q=0;a!==0;q=p){p=q+1
if(!(q<r))return A.b(s,q)
s[q]=a&65535
a=B.a.p(a,65536)}r=A.v(r,s)
return new A.q(r===0?!1:o,s,r)},
ek(a,b,c,d){var s,r,q,p,o
if(b===0)return 0
if(c===0&&d===a)return b
for(s=b-1,r=a.length,q=d.$flags|0;s>=0;--s){p=s+c
if(!(s<r))return A.b(a,s)
o=a[s]
q&2&&A.y(d)
if(!(p>=0&&p<d.length))return A.b(d,p)
d[p]=o}for(s=c-1;s>=0;--s){q&2&&A.y(d)
if(!(s<d.length))return A.b(d,s)
d[s]=0}return b+c},
f3(a,b,c,d){var s,r,q,p,o,n,m,l=B.a.p(c,16),k=B.a.k(c,16),j=16-k,i=B.a.n(1,j)-1
for(s=b-1,r=a.length,q=d.$flags|0,p=0;s>=0;--s){if(!(s<r))return A.b(a,s)
o=a[s]
n=s+l+1
m=B.a.F(o,j)
q&2&&A.y(d)
if(!(n>=0&&n<d.length))return A.b(d,n)
d[n]=(m|p)>>>0
p=B.a.n(o&i,k)}q&2&&A.y(d)
if(!(l>=0&&l<d.length))return A.b(d,l)
d[l]=p},
eZ(a,b,c,d){var s,r,q,p=B.a.p(c,16)
if(B.a.k(c,16)===0)return A.ek(a,b,p,d)
s=b+p+1
A.f3(a,b,c,d)
for(r=d.$flags|0,q=p;--q,q>=0;){r&2&&A.y(d)
if(!(q<d.length))return A.b(d,q)
d[q]=0}r=s-1
if(!(r>=0&&r<d.length))return A.b(d,r)
if(d[r]===0)s=r
return s},
hG(a,b,c,d){var s,r,q,p,o,n,m=B.a.p(c,16),l=B.a.k(c,16),k=16-l,j=B.a.n(1,l)-1,i=a.length
if(!(m>=0&&m<i))return A.b(a,m)
s=B.a.F(a[m],l)
r=b-m-1
for(q=d.$flags|0,p=0;p<r;++p){o=p+m+1
if(!(o<i))return A.b(a,o)
n=a[o]
o=B.a.n(n&j,k)
q&2&&A.y(d)
if(!(p<d.length))return A.b(d,p)
d[p]=(o|s)>>>0
s=B.a.F(n,l)}q&2&&A.y(d)
if(!(r>=0&&r<d.length))return A.b(d,r)
d[r]=s},
dd(a,b,c,d){var s,r,q,p,o=b-d
if(o===0)for(s=b-1,r=a.length,q=c.length;s>=0;--s){if(!(s<r))return A.b(a,s)
p=a[s]
if(!(s<q))return A.b(c,s)
o=p-c[s]
if(o!==0)return o}return o},
hB(a,b,c,d,e){var s,r,q,p,o,n
for(s=a.length,r=c.length,q=e.$flags|0,p=0,o=0;o<d;++o){if(!(o<s))return A.b(a,o)
n=a[o]
if(!(o<r))return A.b(c,o)
p+=n+c[o]
q&2&&A.y(e)
if(!(o<e.length))return A.b(e,o)
e[o]=p&65535
p=p>>>16}for(o=d;o<b;++o){if(!(o>=0&&o<s))return A.b(a,o)
p+=a[o]
q&2&&A.y(e)
if(!(o<e.length))return A.b(e,o)
e[o]=p&65535
p=p>>>16}q&2&&A.y(e)
if(!(b>=0&&b<e.length))return A.b(e,b)
e[b]=p},
cd(a,b,c,d,e){var s,r,q,p,o,n
for(s=a.length,r=c.length,q=e.$flags|0,p=0,o=0;o<d;++o){if(!(o<s))return A.b(a,o)
n=a[o]
if(!(o<r))return A.b(c,o)
p+=n-c[o]
q&2&&A.y(e)
if(!(o<e.length))return A.b(e,o)
e[o]=p&65535
p=0-(B.a.aa(p,16)&1)}for(o=d;o<b;++o){if(!(o>=0&&o<s))return A.b(a,o)
p+=a[o]
q&2&&A.y(e)
if(!(o<e.length))return A.b(e,o)
e[o]=p&65535
p=0-(B.a.aa(p,16)&1)}},
f4(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k
if(a===0)return
for(s=b.length,r=d.length,q=d.$flags|0,p=0;--f,f>=0;e=l,c=o){o=c+1
if(!(c<s))return A.b(b,c)
n=b[c]
if(!(e>=0&&e<r))return A.b(d,e)
m=a*n+d[e]+p
l=e+1
q&2&&A.y(d)
d[e]=m&65535
p=B.a.p(m,65536)}for(;p!==0;e=l){if(!(e>=0&&e<r))return A.b(d,e)
k=d[e]+p
l=e+1
q&2&&A.y(d)
d[e]=k&65535
p=B.a.p(k,65536)}},
hC(a,b,c){var s,r,q,p=b.length
if(!(c>=0&&c<p))return A.b(b,c)
s=b[c]
if(s===a)return 65535
r=c-1
if(!(r>=0&&r<p))return A.b(b,r)
q=B.a.M((s<<16|b[r])>>>0,a)
if(q>65535)return 65535
return q},
h2(a,b){a=A.x(a,new Error())
a.stack=b.h(0)
throw a},
e8(a,b,c){var s,r,q
if(a>4294967295)A.P(A.c3(a,0,4294967295,"length",null))
s=A.a(new Array(a),c.i("r<0>"))
s.$flags=1
r=s
if(a!==0)for(s=r.length,q=0;q<s;++q)r[q]=b
return r},
hh(a,b,c){var s,r,q=A.a([],c.i("r<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.dY)(a),++r)q.push(a[r])
q.$flags=1
return q},
hn(a,b){return new A.cB(a,A.he(a,!1,!1,!1,!1,""))},
eV(a,b,c){var s=J.eG(b)
if(!s.m())return a
if(c.length===0){do a+=A.j(s.gq())
while(s.m())}else{a+=A.j(s.gq())
for(;s.m();)a=a+c+A.j(s.gq())}return a},
hq(){return A.ai(new Error())},
eN(a){return new A.aE(1000*a)},
cv(a){if(typeof a=="number"||A.eq(a)||a==null)return J.bC(a)
if(typeof a=="string")return JSON.stringify(a)
return A.eT(a)},
h3(a,b){A.eu(a,"error",t.K)
A.eu(b,"stackTrace",t.l)
A.h2(a,b)},
bF(a){return new A.bE(a)},
W(a,b){return new A.L(!1,null,b,a)},
e2(a,b,c){return new A.L(!0,a,b,c)},
hk(a){var s=null
return new A.as(s,s,!1,s,s,a)},
c3(a,b,c,d,e){return new A.as(b,c,!0,a,d,"Invalid value")},
hm(a,b,c){if(0>a||a>c)throw A.d(A.c3(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.d(A.c3(b,a,c,"end",null))
return b}return c},
hl(a,b){if(a<0)throw A.d(A.c3(a,0,null,b,null))
return a},
e4(a,b,c,d,e){return new A.bJ(b,!0,a,e,"Index out of range")},
c9(a){return new A.b5(a)},
eY(a){return new A.c7(a)},
a6(a){return new A.bG(a)},
eO(a,b){return new A.cw(a,b)},
ha(a,b){if(a<=0)return new A.aG(b.i("aG<0>"))
if(!b.i("0(c)").b(A.fx()))throw A.d(A.W("Generator must be supplied or element type must allow integers","generator"))
return new A.bd(a,A.fx(),b.i("bd<0>"))},
hb(a,b,c){var s,r
if(A.ez(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.a([],t.s)
$.D.push(a)
try{A.iC(a,s)}finally{if(0>=$.D.length)return A.b($.D,-1)
$.D.pop()}r=A.eV(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
e5(a,b,c){var s,r
if(A.ez(a))return b+"..."+c
s=new A.c6(b)
$.D.push(a)
try{r=s
r.a=A.eV(r.a,a,", ")}finally{if(0>=$.D.length)return A.b($.D,-1)
$.D.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
hJ(a){return a},
iC(a,b){var s,r,q,p,o,n,m,l=a.gu(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.m())return
s=A.j(l.gq())
b.push(s)
k+=s.length+2;++j}if(!l.m()){if(j<=5)return
if(0>=b.length)return A.b(b,-1)
r=b.pop()
if(0>=b.length)return A.b(b,-1)
q=b.pop()}else{p=l.gq();++j
if(!l.m()){if(j<=4){b.push(A.j(p))
return}r=A.j(p)
if(0>=b.length)return A.b(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gq();++j
for(;l.m();p=o,o=n){n=l.gq();++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return A.b(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=A.j(p)
r=A.j(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.b(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
cG(a,b,c,d){var s
if(B.f===c){s=B.a.gl(a)
b=J.Q(b)
return A.ed(A.a_(A.a_($.e0(),s),b))}if(B.f===d){s=B.a.gl(a)
b=J.Q(b)
c=J.Q(c)
return A.ed(A.a_(A.a_(A.a_($.e0(),s),b),c))}s=B.a.gl(a)
b=J.Q(b)
c=J.Q(c)
d=J.Q(d)
d=A.ed(A.a_(A.a_(A.a_(A.a_($.e0(),s),b),c),d))
return d},
q:function q(a,b,c){this.a=a
this.b=b
this.c=c},
de:function de(){},
df:function df(){},
aE:function aE(a){this.a=a},
di:function di(){},
k:function k(){},
bE:function bE(a){this.a=a},
T:function T(){},
L:function L(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
as:function as(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bJ:function bJ(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
b5:function b5(a){this.a=a},
c7:function c7(a){this.a=a},
aa:function aa(a){this.a=a},
bG:function bG(a){this.a=a},
c1:function c1(){},
b4:function b4(){},
dj:function dj(a){this.a=a},
cw:function cw(a,b){this.a=a
this.b=b},
bK:function bK(){},
F:function F(){},
bd:function bd(a,b,c){this.a=a
this.b=b
this.$ti=c},
aW:function aW(a,b,c){this.a=a
this.b=b
this.$ti=c},
z:function z(){},
e:function e(){},
cp:function cp(){},
c6:function c6(a){this.a=a},
dw:function dw(){},
X:function X(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cX(a){return new A.cW(a)},
cH:function cH(){},
cW:function cW(a){this.a=a},
am:function am(a){this.b=a},
ao:function ao(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
aq:function aq(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=0},
hp(a,b,c,d,e,f,g,h){var s,r,q=v.G,p=q.document.createElement("canvas"),o=h*g
p.width=o
s=d*f
p.height=s
r=q.document.createElement("canvas")
r.width=o
r.height=s
s=A.a([],t.x)
for(q=A.ha(d,t.z),q=q.gu(q);q.m();){q.gq()
o=B.a.p(h,32)
s.push(new Uint32Array(o+1))}q=new A.c5(!0,d,h,g,f,c,a,p,r,s)
q.bD(a,b,c,d,!0,f,g,h)
return q},
eb(a){return new A.m(B.a.p(a,32),31-B.a.k(a,32))},
c5:function c5(a,b,c,d,e,f,g,h,i,j){var _=this
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
cK:function cK(a){this.a=a},
cL:function cL(a){this.a=a},
cM:function cM(a){this.a=a},
cN:function cN(a){this.a=a},
cJ:function cJ(){},
M:function M(a){this.b=a},
hr(a,b,c,d,e,f){var s,r,q,p,o=null,n=A.hp(a,c,d,e*10,!0,2,2,b*8),m=A.a([],t.G)
for(s=t.V,r=0;r<e;++r){q=A.a([],s)
for(p=0;p<b;++p)q.push(new A.X(r,p," ",d))
m.push(q)}n=new A.cV(e,b,d,c,n,new A.aq(e,b),new A.aq(e,b),new A.aq(e,b),!1,A.ec(t.N),A.ec(t.W),A.ec(t.q),B.e,m,A.hg(t.o),B.dU)
n.bE(a,b,c,d,o,!0,2,2,2,e,!1,o,o,o,o,o,o)
return n},
at:function at(a){this.b=a},
cV:function cV(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.a=a
_.b=b
_.d=c
_.f=d
_.w=e
_.x=f
_.y=g
_.z=h
_.Q=i
_.as=j
_.at=k
_.ax=l
_.ay=m
_.ch=n
_.CW=o
_.cx=p
_.cy=!1},
d4:function d4(a){this.a=a},
d3:function d3(){},
d2:function d2(a){this.a=a},
cY:function cY(a){this.a=a},
cZ:function cZ(a){this.a=a},
d_:function d_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d0:function d0(a,b,c){this.a=a
this.b=b
this.c=c},
d1:function d1(a){this.a=a},
H:function H(a){this.b=a},
a9:function a9(a,b){this.c=a
this.b=b},
ja(){var s,r=v.G.document.getElementById("othello")
r=A.hr("black",50,r==null?t.m.a(r):r,"white",29,!1)
s=$.p()
r.a0()
return new A.cy(r,new A.c0(s,s,B.b)).L()},
cy:function cy(a,b){this.a=a
this.b=b},
cz:function cz(){},
c0:function c0(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0},
b1:function b1(a){this.b=a},
bw(a){var s
if(typeof a=="function")throw A.d(A.W("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.ie,a)
s[$.dZ()]=a
return s},
fl(a){var s
if(typeof a=="function")throw A.d(A.W("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.ig,a)
s[$.dZ()]=a
return s},
ie(a){return a.$0()},
ig(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
jd(a){var s,r,q
for(;!0;){s=a.gaf()
r=s.length
if(r===0)break
r=B.N.cg(r)
if(!(r>=0&&r<s.length))return A.b(s,r)
q=s[r]
a.aK(q.a,q.b)}r=a.d
return new A.cn(a.e,r)},
dR(a,b){return A.iZ(a,b)},
iZ(a1,a2){var s=0,r=A.bz(t.R),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$dR=A.bA(function(a3,a4){if(a3===1)return A.bt(a4,r)
while(true)$async$outer:switch(s){case 0:a=a1.gaf()
a0=A.hf(t.R,t.i)
for(p=a.length,o=0;n=a.length,o<n;a.length===p||(0,A.dY)(a),++o)a0.ag(0,a[o],0)
p=a2.c,m=t.z,l=0
case 3:if(!(l<B.a.M(p,n))){s=5
break}s=B.a.k(l,5)===0?6:7
break
case 6:s=8
return A.O(A.eP(B.x,m),$async$dR)
case 8:case 7:for(n=a.length,o=0;k=a.length,o<k;a.length===n||(0,A.dY)(a),++o){k=a[o]
j=k.a
i=k.b
k=a1.c
h=$.p()
k=new A.c0(h,h,k)
k.d=a1.d
k.a=a1.a
k.e=a1.e
k.b=a1.b
k.aK(j,i)
g=A.jd(k)
f=g.b
e=g.a
k=a0.A(0,new A.m(j,i))
k.toString
switch(a1.c){case B.b:h=f-e
break
case B.c:h=e-f
break
default:h=null}if(typeof h!=="number"){q=h.cu()
s=1
break $async$outer}a0.ag(0,new A.m(j,i),k+h/p)}case 4:++l,n=k
s=3
break
case 5:p=a0.$ti
d=new A.aU(a0,p.i("aU<1>")).gT(0)
for(p=new A.aT(a0,p.i("aT<1,2>")).gu(0);p.m();){n=p.d
c=n.a
b=n.b
n=a0.A(0,d)
n.toString
if(b>n)d=c}q=d
s=1
break
case 1:return A.bu(q,r)}})
return A.bv($async$dR,r)}},B={}
var w=[A,J,B]
var $={}
A.e6.prototype={}
J.bL.prototype={
J(a,b){return a===b},
gl(a){return A.ar(a)},
h(a){return"Instance of '"+A.cI(a)+"'"},
gt(a){return A.ag(A.ep(this))}}
J.bM.prototype={
h(a){return String(a)},
gl(a){return a?519018:218159},
gt(a){return A.ag(t.y)},
$ih:1}
J.aN.prototype={
J(a,b){return null==b},
h(a){return"null"},
gl(a){return 0},
$ih:1}
J.aP.prototype={$in:1}
J.Z.prototype={
gl(a){return 0},
h(a){return String(a)}}
J.c2.prototype={}
J.ab.prototype={}
J.Y.prototype={
h(a){var s=a[$.dZ()]
if(s==null)return this.bC(a)
return"JavaScript function for "+J.bC(s)}}
J.aO.prototype={
gl(a){return 0},
h(a){return String(a)}}
J.aQ.prototype={
gl(a){return 0},
h(a){return String(a)}}
J.r.prototype={
bm(a,b){var s,r,q=a.length,p=A.e8(q,"",t.N)
for(s=0;s<a.length;++s){r=A.j(a[s])
if(!(s<q))return A.b(p,s)
p[s]=r}return p.join(b)},
c9(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw A.d(A.a6(a))}return s},
ca(a,b,c){c.toString
return this.c9(a,b,c,t.z)},
O(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
c7(a,b){var s
for(s=0;s<a.length;++s)if(J.ak(a[s],b))return!0
return!1},
h(a){return A.e5(a,"[","]")},
gu(a){return new J.bD(a,a.length,A.eo(a).i("bD<1>"))},
gl(a){return A.ar(a)},
gj(a){return a.length},
$ii:1}
J.cC.prototype={}
J.bD.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.d(A.dY(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.al.prototype={
cr(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.d(A.c9(""+a+".toInt()"))},
c6(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.d(A.c9(""+a+".ceil()"))},
h(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gl(a){var s,r,q,p,o=a|0
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
M(a,b){if((a|0)===a)if(b>=1)return a/b|0
return this.bb(a,b)},
p(a,b){return(a|0)===a?a/b|0:this.bb(a,b)},
bb(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.c9("Result of truncating division is "+A.j(s)+": "+A.j(a)+" ~/ "+b))},
n(a,b){if(b<0)throw A.d(A.et(b))
return b>31?0:a<<b>>>0},
c2(a,b){return b>31?0:a<<b>>>0},
ai(a,b){var s
if(b<0)throw A.d(A.et(b))
if(a>0)s=this.aA(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
aa(a,b){var s
if(a>0)s=this.aA(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
F(a,b){if(0>b)throw A.d(A.et(b))
return this.aA(a,b)},
aA(a,b){return b>31?0:a>>>b},
gt(a){return A.ag(t.H)},
$iw:1}
J.aM.prototype={
gbf(a){var s,r=a<0?-a-1:a,q=r
for(s=32;q>=4294967296;){q=this.p(q,4294967296)
s+=32}return s-Math.clz32(q)},
gt(a){return A.ag(t.S)},
$ih:1,
$ic:1}
J.bN.prototype={
gt(a){return A.ag(t.i)},
$ih:1}
J.a7.prototype={
bB(a,b,c){return a.substring(b,A.hm(b,c,a.length))},
cs(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.b(p,0)
if(p.charCodeAt(0)===133){s=J.hc(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.b(p,r)
q=p.charCodeAt(r)===133?J.hd(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
a3(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.M)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
cj(a,b,c){var s=b-a.length
if(s<=0)return a
return this.a3(c,s)+a},
h(a){return a},
gl(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gt(a){return A.ag(t.N)},
gj(a){return a.length},
$ih:1,
$iA:1}
A.aS.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.dX.prototype={
$0(){var s=new A.l($.f,t.D)
s.an(null)
return s},
$S:9}
A.cO.prototype={}
A.aF.prototype={}
A.S.prototype={
gu(a){var s=this
return new A.an(s,s.gj(s),A.a2(s).i("an<S.E>"))},
ce(a){var s,r,q=this,p=q.gj(q)
for(s=0,r="";s<p;++s){r+=A.j(q.O(0,s))
if(p!==q.gj(q))throw A.d(A.a6(q))}return r.charCodeAt(0)==0?r:r}}
A.an.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.ew(q),o=p.gj(q)
if(r.b!==o)throw A.d(A.a6(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.O(q,s);++r.c
return!0}}
A.b6.prototype={
gu(a){return new A.ca(J.eG(this.a),this.b)}}
A.ca.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(r.$1(s.gq()))return!0
return!1},
gq(){return this.a.gq()}}
A.aG.prototype={
gu(a){return B.E},
gj(a){return 0}}
A.bI.prototype={
m(){return!1},
gq(){throw A.d(A.cA())}}
A.aK.prototype={
gj(a){var s=this.a
return s.gj(s)},
gu(a){var s=this.a
return new A.aL(s.gu(s),this.b)}}
A.aL.prototype={
m(){if(++this.c>=0&&this.a.m())return!0
this.c=-2
return!1},
gq(){var s=this.c
return s>=0?new A.m(this.b+s,this.a.gq()):A.P(A.cA())}}
A.aI.prototype={}
A.b2.prototype={
gj(a){return J.e1(this.a)},
O(a,b){var s=this.a,r=J.ew(s)
return r.O(s,r.gj(s)-1-b)}}
A.m.prototype={$r:"+(1,2)",$s:1}
A.cn.prototype={$r:"+black,white(1,2)",$s:2}
A.bH.prototype={
h(a){return A.e9(this)}}
A.aJ.prototype={
a7(){var s=this,r=s.$map
if(r==null){r=new A.aR(s.$ti.i("aR<1,2>"))
A.iY(s.a,r)
s.$map=r}return r},
aE(a){return this.a7().aE(a)},
A(a,b){return this.a7().A(0,b)},
aG(a,b){this.a7().aG(0,b)},
gj(a){return this.a7().a}}
A.d6.prototype={
I(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.b0.prototype={
h(a){return"Null check operator used on a null value"}}
A.bO.prototype={
h(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.c8.prototype={
h(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.cF.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.aH.prototype={}
A.bl.prototype={
h(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iJ:1}
A.a5.prototype={
h(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.fF(r==null?"unknown":r)+"'"},
gct(){return this},
$C:"$1",
$R:1,
$D:null}
A.ct.prototype={$C:"$0",$R:0}
A.cu.prototype={$C:"$2",$R:2}
A.cU.prototype={}
A.cP.prototype={
h(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.fF(s)+"'"}}
A.aD.prototype={
J(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.aD))return!1
return this.$_target===b.$_target&&this.a===b.a},
gl(a){return(A.eB(this.a)^A.ar(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.cI(this.a)+"'")}}
A.c4.prototype={
h(a){return"RuntimeError: "+this.a}}
A.a8.prototype={
gj(a){return this.a},
aE(a){var s=this.b
if(s==null)return!1
return s[a]!=null},
A(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.cd(b)},
cd(a){var s,r,q=this.d
if(q==null)return null
s=q[this.aH(a)]
r=this.aI(s,a)
if(r<0)return null
return s[r].b},
ag(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.aV(s==null?m.b=m.ar():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=m.c
m.aV(r==null?m.c=m.ar():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.ar()
p=m.aH(b)
o=q[p]
if(o==null)q[p]=[m.al(b,c)]
else{n=m.aI(o,b)
if(n>=0)o[n].b=c
else o.push(m.al(b,c))}}},
aG(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw A.d(A.a6(s))
r=r.c}},
aV(a,b,c){var s=a[b]
if(s==null)a[b]=this.al(b,c)
else s.b=c},
al(a,b){var s=this,r=new A.cD(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&1073741823
return r},
aH(a){return J.Q(a)&1073741823},
aI(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ak(a[r].a,b))return r
return-1},
h(a){return A.e9(this)},
ar(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.cD.prototype={}
A.aU.prototype={
gj(a){return this.a.a},
gu(a){var s=this.a
return new A.bQ(s,s.r,s.e)}}
A.bQ.prototype={
gq(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.a6(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
A.aT.prototype={
gj(a){return this.a.a},
gu(a){var s=this.a
return new A.bP(s,s.r,s.e,this.$ti.i("bP<1,2>"))}}
A.bP.prototype={
gq(){var s=this.d
s.toString
return s},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.a6(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.aW(s.a,s.b,r.$ti.i("aW<1,2>"))
r.c=s.c
return!0}}}
A.aR.prototype={
aH(a){return A.iU(a)&1073741823},
aI(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ak(a[r].a,b))return r
return-1}}
A.dS.prototype={
$1(a){return this.a(a)},
$S:10}
A.dT.prototype={
$2(a,b){return this.a(a,b)},
$S:11}
A.dU.prototype={
$1(a){return this.a(a)},
$S:12}
A.aw.prototype={
h(a){return this.bd(!1)},
bd(a){var s,r,q,p,o,n=this.bT(),m=this.b6(),l=(a?""+"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.b(m,q)
o=m[q]
l=a?l+A.eT(o):l+A.j(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
bT(){var s,r=this.$s
for(;$.bj.length<=r;)$.bj.push(null)
s=$.bj[r]
if(s==null){s=this.bP()
if(!(r<$.bj.length))return A.b($.bj,r)
$.bj[r]=s}return s},
bP(){var s,r,q,p,o,n=this.$r,m=n.indexOf("("),l=n.substring(1,m),k=n.substring(m),j=k==="()"?0:k.replace(/[^,]/g,"").length+1,i=A.a(new Array(j),t.f)
for(s=0;s<j;++s)i[s]=s
if(l!==""){r=l.split(",")
s=r.length
for(q=i.length,p=j;s>0;){--p;--s
o=r[s]
if(!(p>=0&&p<q))return A.b(i,p)
i[p]=o}}i=A.hh(i,!1,t.K)
i.$flags=3
return i}}
A.cm.prototype={
b6(){return[this.a,this.b]},
J(a,b){if(b==null)return!1
return b instanceof A.cm&&this.$s===b.$s&&J.ak(this.a,b.a)&&J.ak(this.b,b.b)},
gl(a){return A.cG(this.$s,this.a,this.b,B.f)}}
A.cB.prototype={
h(a){return"RegExp/"+this.a+"/"+this.b.flags},
c8(a){var s=this.b.exec(a)
if(s==null)return null
return new A.dz(s)}}
A.dz.prototype={}
A.dg.prototype={
E(){var s=this.b
if(s===this)throw A.d(A.eR(this.a))
return s}}
A.bR.prototype={
gt(a){return B.ed},
$ih:1}
A.aZ.prototype={}
A.bS.prototype={
gt(a){return B.ee},
$ih:1}
A.ap.prototype={
gj(a){return a.length},
$iB:1}
A.aX.prototype={
A(a,b){A.ae(b,a,a.length)
return a[b]},
$ii:1}
A.aY.prototype={$ii:1}
A.bT.prototype={
gt(a){return B.ef},
$ih:1}
A.bU.prototype={
gt(a){return B.eg},
$ih:1}
A.bV.prototype={
gt(a){return B.eh},
A(a,b){A.ae(b,a,a.length)
return a[b]},
$ih:1}
A.bW.prototype={
gt(a){return B.ei},
A(a,b){A.ae(b,a,a.length)
return a[b]},
$ih:1}
A.bX.prototype={
gt(a){return B.ej},
A(a,b){A.ae(b,a,a.length)
return a[b]},
$ih:1}
A.bY.prototype={
gt(a){return B.el},
A(a,b){A.ae(b,a,a.length)
return a[b]},
$ih:1}
A.bZ.prototype={
gt(a){return B.em},
A(a,b){A.ae(b,a,a.length)
return a[b]},
$ih:1,
$id8:1}
A.b_.prototype={
gt(a){return B.en},
gj(a){return a.length},
A(a,b){A.ae(b,a,a.length)
return a[b]},
$ih:1}
A.c_.prototype={
gt(a){return B.eo},
gj(a){return a.length},
A(a,b){A.ae(b,a,a.length)
return a[b]},
$ih:1}
A.bf.prototype={}
A.bg.prototype={}
A.bh.prototype={}
A.bi.prototype={}
A.I.prototype={
i(a){return A.bs(v.typeUniverse,this,a)},
ao(a){return A.fg(v.typeUniverse,this,a)}}
A.ck.prototype={}
A.cq.prototype={
h(a){return A.C(this.a,null)}}
A.cj.prototype={
h(a){return this.a}}
A.bo.prototype={$iT:1}
A.da.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:3}
A.d9.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:13}
A.db.prototype={
$0(){this.a.$0()},
$S:1}
A.dc.prototype={
$0(){this.a.$0()},
$S:1}
A.bn.prototype={
bF(a,b){if(self.setTimeout!=null)self.setTimeout(A.cs(new A.dF(this,b),0),a)
else throw A.d(A.c9("`setTimeout()` not found."))},
bG(a,b){if(self.setTimeout!=null)self.setInterval(A.cs(new A.dE(this,a,Date.now(),b),0),a)
else throw A.d(A.c9("Periodic timer."))},
$id5:1}
A.dF.prototype={
$0(){this.a.c=1
this.b.$0()},
$S:0}
A.dE.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.a.M(s,o)}q.c=p
r.d.$1(q)},
$S:1}
A.cb.prototype={}
A.dJ.prototype={
$1(a){return this.a.$2(0,a)},
$S:4}
A.dK.prototype={
$2(a,b){this.a.$2(1,new A.aH(a,b))},
$S:14}
A.dN.prototype={
$2(a,b){this.a(a,b)},
$S:15}
A.E.prototype={
h(a){return A.j(this.a)},
$ik:1,
gV(){return this.b}}
A.G.prototype={}
A.ba.prototype={
av(){},
aw(){}}
A.ce.prototype={
gbV(){return this.c<4},
c0(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
c3(a,b,c,d){var s,r,q,p,o,n=this
if((n.c&4)!==0){s=new A.bc($.f)
A.fE(s.gbW())
s.c=c
return s}s=$.f
r=d?1:0
q=A.f5(s,a)
A.hI(s,b)
p=new A.ba(n,q,s,r|32,A.a2(n).i("ba<1>"))
p.CW=p
p.ch=p
p.ay=n.c&1
o=n.e
n.e=p
p.ch=null
p.CW=o
if(o==null)n.d=p
else o.ch=p
if(n.d===p)A.fs(n.a)
return p},
bZ(a){var s,r=this
A.a2(r).i("ba<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.c0(a)
if((r.c&2)===0&&r.d==null)r.bL()}return null},
bI(){if((this.c&4)!==0)return new A.aa("Cannot add new events after calling close")
return new A.aa("Cannot add new events while doing an addStream")},
S(a,b){if(!this.gbV())throw A.d(this.bI())
this.az(b)},
bL(){if((this.c&4)!==0)if(null.gcv())null.an(null)
A.fs(this.b)}}
A.b7.prototype={
az(a){var s
for(s=this.d;s!=null;s=s.ch)s.bJ(new A.ch(a))}}
A.cx.prototype={
$0(){this.c.a(null)
this.b.a6(null)},
$S:0}
A.a0.prototype={
cf(a){if((this.c&15)!==6)return!0
return this.b.b.aP(this.d,a.a)},
cb(a){var s,r=this.e,q=null,p=a.a,o=this.b.b
if(t.C.b(r))q=o.cn(r,p,a.b)
else q=o.aP(r,p)
try{p=q
return p}catch(s){if(t._.b(A.aC(s))){if((this.c&1)!==0)throw A.d(A.W("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.W("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.l.prototype={
by(a,b,c){var s,r=$.f
if(r===B.d){if(!t.C.b(b)&&!t.v.b(b))throw A.d(A.e2(b,"onError",u.c))}else b=A.iH(b,r)
s=new A.l(r,c.i("l<0>"))
this.a4(new A.a0(s,3,a,b,this.$ti.i("@<1>").ao(c).i("a0<1,2>")))
return s},
bc(a,b,c){var s=new A.l($.f,c.i("l<0>"))
this.a4(new A.a0(s,19,a,b,this.$ti.i("@<1>").ao(c).i("a0<1,2>")))
return s},
c1(a){this.a=this.a&1|16
this.c=a},
a5(a){this.a=a.a&30|this.a&1
this.c=a.c},
a4(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.a4(a)
return}s.a5(r)}A.ay(null,null,s.b,new A.dk(s,a))}},
ba(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.ba(a)
return}n.a5(s)}m.a=n.a8(a)
A.ay(null,null,n.b,new A.dq(m,n))}},
Y(){var s=this.c
this.c=null
return this.a8(s)},
a8(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
a6(a){var s,r=this
if(r.$ti.i("R<1>").b(a))A.dn(a,r,!0)
else{s=r.Y()
r.a=8
r.c=a
A.ac(r,s)}},
b3(a){var s=this,r=s.Y()
s.a=8
s.c=a
A.ac(s,r)},
bO(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.Y()
q.a5(a)
A.ac(q,r)},
W(a){var s=this.Y()
this.c1(a)
A.ac(this,s)},
bN(a,b){this.W(new A.E(a,b))},
an(a){if(this.$ti.i("R<1>").b(a)){this.b0(a)
return}this.bK(a)},
bK(a){this.a^=2
A.ay(null,null,this.b,new A.dm(this,a))},
b0(a){A.dn(a,this,!1)
return},
b_(a){this.a^=2
A.ay(null,null,this.b,new A.dl(this,a))},
$iR:1}
A.dk.prototype={
$0(){A.ac(this.a,this.b)},
$S:0}
A.dq.prototype={
$0(){A.ac(this.b,this.a.a)},
$S:0}
A.dp.prototype={
$0(){A.dn(this.a.a,this.b,!0)},
$S:0}
A.dm.prototype={
$0(){this.a.b3(this.b)},
$S:0}
A.dl.prototype={
$0(){this.a.W(this.b)},
$S:0}
A.dt.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.bv(q.d)}catch(p){s=A.aC(p)
r=A.ai(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.e3(q)
n=k.a
n.c=new A.E(q,o)
q=n}q.b=!0
return}if(j instanceof A.l&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.l){m=k.b.a
l=new A.l(m.b,m.$ti)
j.by(new A.du(l,m),new A.dv(l),t.n)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.du.prototype={
$1(a){this.a.bO(this.b)},
$S:3}
A.dv.prototype={
$2(a,b){this.a.W(new A.E(a,b))},
$S:16}
A.ds.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
q.c=p.b.b.aP(p.d,this.b)}catch(o){s=A.aC(o)
r=A.ai(o)
q=s
p=r
if(p==null)p=A.e3(q)
n=this.a
n.c=new A.E(q,p)
n.b=!0}},
$S:0}
A.dr.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.cf(s)&&p.a.e!=null){p.c=p.a.cb(s)
p.b=!1}}catch(o){r=A.aC(o)
q=A.ai(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.e3(p)
m=l.b
m.c=new A.E(p,n)
p=m}p.b=!0}},
$S:0}
A.cc.prototype={}
A.au.prototype={
gj(a){var s={},r=new A.l($.f,t.a)
s.a=0
this.bn(new A.cS(s,this),!0,new A.cT(s,r),r.gb2())
return r},
gT(a){var s=new A.l($.f,this.$ti.i("l<1>")),r=this.bn(null,!0,new A.cQ(s),s.gb2())
r.bq(new A.cR(this,r,s))
return s}}
A.cS.prototype={
$1(a){++this.a.a},
$S(){return this.b.$ti.i("~(1)")}}
A.cT.prototype={
$0(){this.b.a6(this.a.a)},
$S:0}
A.cQ.prototype={
$0(){var s,r=new A.aa("No element")
A.hj(r,B.h)
s=A.ir(r,B.h)
s=new A.E(r,B.h)
this.a.W(s)},
$S:0}
A.cR.prototype={
$1(a){A.ih(this.b,this.c,a)},
$S(){return this.a.$ti.i("~(1)")}}
A.bb.prototype={
gl(a){return(A.ar(this.a)^892482866)>>>0},
J(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.G&&b.a===this.a}}
A.cg.prototype={
b9(){return this.w.bZ(this)},
av(){},
aw(){}}
A.cf.prototype={
bq(a){this.a=A.f5(this.d,a)},
bg(){var s,r=this,q=r.e&=4294967279
if((q&8)===0){q=r.e=q|8
if((q&128)!==0){s=r.r
if(s.a===1)s.a=3}if((q&64)===0)r.r=null
r.f=r.b9()}q=$.e_()
return q},
av(){},
aw(){},
b9(){return null},
bJ(a){var s,r,q=this,p=q.r
if(p==null)p=q.r=new A.cl()
s=p.c
if(s==null)p.b=p.c=a
else p.c=s.a=a
r=q.e
if((r&128)===0){r|=128
q.e=r
if(r<256)p.aS(q)}},
az(a){var s=this,r=s.e
s.e=r|64
s.d.bx(s.a,a)
s.e&=4294967231
s.bM((r&4)!==0)},
bM(a){var s,r,q=this,p=q.e
if((p&128)!==0&&q.r.c==null){p=q.e=p&4294967167
s=!1
if((p&4)!==0)if(p<256){s=q.r
s=s==null?null:s.c==null
s=s!==!1}if(s){p&=4294967291
q.e=p}}for(;!0;a=r){if((p&8)!==0){q.r=null
return}r=(p&4)!==0
if(a===r)break
q.e=p^64
if(r)q.av()
else q.aw()
p=q.e&=4294967231}if((p&128)!==0&&p<256)q.r.aS(q)}}
A.bm.prototype={
bn(a,b,c,d){return this.a.c3(a,d,c,!0)}}
A.ci.prototype={}
A.ch.prototype={}
A.cl.prototype={
aS(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.fE(new A.dA(s,a))
s.a=1}}
A.dA.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.a
q.b=r
if(r==null)q.c=null
this.b.az(s.b)},
$S:0}
A.bc.prototype={
bq(a){},
bg(){this.a=-1
this.c=null
return $.e_()},
bX(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.bw(s)}}else r.a=q}}
A.co.prototype={}
A.dL.prototype={
$0(){return this.a.a6(this.b)},
$S:0}
A.dI.prototype={}
A.dM.prototype={
$0(){A.h3(this.a,this.b)},
$S:0}
A.dB.prototype={
bw(a){var s,r,q
try{if(B.d===$.f){a.$0()
return}A.fp(null,null,this,a)}catch(q){s=A.aC(q)
r=A.ai(q)
A.cr(s,r)}},
cq(a,b){var s,r,q
try{if(B.d===$.f){a.$1(b)
return}A.fq(null,null,this,a,b)}catch(q){s=A.aC(q)
r=A.ai(q)
A.cr(s,r)}},
bx(a,b){a.toString
return this.cq(a,b,t.z)},
aC(a){return new A.dC(this,a)},
c5(a,b){return new A.dD(this,a,b)},
cm(a){if($.f===B.d)return a.$0()
return A.fp(null,null,this,a)},
bv(a){a.toString
return this.cm(a,t.z)},
cp(a,b){if($.f===B.d)return a.$1(b)
return A.fq(null,null,this,a,b)},
aP(a,b){var s=t.z
a.toString
return this.cp(a,b,s,s)},
co(a,b,c){if($.f===B.d)return a.$2(b,c)
return A.iI(null,null,this,a,b,c)},
cn(a,b,c){var s=t.z
a.toString
return this.co(a,b,c,s,s,s)},
cl(a){return a},
aO(a){var s=t.z
a.toString
return this.cl(a,s,s,s)}}
A.dC.prototype={
$0(){return this.a.bw(this.b)},
$S:0}
A.dD.prototype={
$1(a){return this.a.bx(this.b,a)},
$S(){return this.c.i("~(0)")}}
A.be.prototype={
gu(a){var s=this,r=new A.av(s,s.r,s.$ti.i("av<1>"))
r.c=s.e
return r},
gj(a){return this.a},
S(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.aZ(s==null?q.b=A.el():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.aZ(r==null?q.c=A.el():r,b)}else return q.bH(b)},
bH(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.el()
s=J.Q(a)&1073741823
r=p[s]
if(r==null)p[s]=[q.au(a)]
else{if(q.bU(r,a)>=0)return!1
r.push(q.au(a))}return!0},
aZ(a,b){if(a[b]!=null)return!1
a[b]=this.au(b)
return!0},
b8(){this.r=this.r+1&1073741823},
au(a){var s,r=this,q=new A.dy(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.b8()
return q},
bU(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ak(a[r].a,b))return r
return-1}}
A.dy.prototype={}
A.av.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.d(A.a6(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.o.prototype={
gu(a){return new A.an(a,this.gj(a),A.bB(a).i("an<o.E>"))},
O(a,b){return this.A(a,b)},
h(a){return A.e5(a,"[","]")}}
A.aV.prototype={
gj(a){return this.a},
h(a){return A.e9(this)}}
A.cE.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.j(a)
r.a=(r.a+=s)+": "
s=A.j(b)
r.a+=s},
$S:17}
A.b3.prototype={
h(a){return A.e5(this,"{","}")}}
A.bk.prototype={}
A.q.prototype={
K(a){var s,r,q=this,p=q.c
if(p===0)return q
s=!q.a
r=q.b
p=A.v(p,r)
return new A.q(p===0?!1:s,r,p)},
bR(a){var s,r,q,p,o,n,m,l=this.c
if(l===0)return $.p()
s=l+a
r=this.b
q=new Uint16Array(s)
for(p=l-1,o=r.length;p>=0;--p){n=p+a
if(!(p<o))return A.b(r,p)
m=r[p]
if(!(n>=0&&n<s))return A.b(q,n)
q[n]=m}o=this.a
n=A.v(s,q)
return new A.q(n===0?!1:o,q,n)},
bS(a){var s,r,q,p,o,n,m,l,k=this,j=k.c
if(j===0)return $.p()
s=j-a
if(s<=0)return k.a?$.eF():$.p()
r=k.b
q=new Uint16Array(s)
for(p=r.length,o=a;o<j;++o){n=o-a
if(!(o>=0&&o<p))return A.b(r,o)
m=r[o]
if(!(n<s))return A.b(q,n)
q[n]=m}n=k.a
m=A.v(s,q)
l=new A.q(m===0?!1:n,q,m)
if(n)for(o=0;o<a;++o){if(!(o<p))return A.b(r,o)
if(r[o]!==0)return l.aj(0,$.u())}return l},
n(a,b){var s,r,q,p,o,n=this
if(b<0)throw A.d(A.W("shift-amount must be posititve "+b,null))
s=n.c
if(s===0)return n
r=B.a.p(b,16)
if(B.a.k(b,16)===0)return n.bR(r)
q=s+r+1
p=new Uint16Array(q)
A.f3(n.b,s,b,p)
s=n.a
o=A.v(q,p)
return new A.q(o===0?!1:s,p,o)},
ai(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(b<0)throw A.d(A.W("shift-amount must be posititve "+b,null))
s=j.c
if(s===0)return j
r=B.a.p(b,16)
q=B.a.k(b,16)
if(q===0)return j.bS(r)
p=s-r
if(p<=0)return j.a?$.eF():$.p()
o=j.b
n=new Uint16Array(p)
A.hG(o,s,b,n)
s=j.a
m=A.v(p,n)
l=new A.q(m===0?!1:s,n,m)
if(s){s=o.length
if(!(r>=0&&r<s))return A.b(o,r)
if((o[r]&B.a.n(1,q)-1)!==0)return l.aj(0,$.u())
for(k=0;k<r;++k){if(!(k<s))return A.b(o,k)
if(o[k]!==0)return l.aj(0,$.u())}}return l},
D(a,b){var s,r=this.a
if(r===b.a){s=A.dd(this.b,this.c,b.b,b.c)
return r?0-s:s}return r?-1:1},
N(a,b){var s,r,q,p=this,o=p.c,n=a.c
if(o<n)return a.N(p,b)
if(o===0)return $.p()
if(n===0)return p.a===b?p:p.K(0)
s=o+1
r=new Uint16Array(s)
A.hB(p.b,o,a.b,n,r)
q=A.v(s,r)
return new A.q(q===0?!1:b,r,q)},
C(a,b){var s,r,q,p=this,o=p.c
if(o===0)return $.p()
s=a.c
if(s===0)return p.a===b?p:p.K(0)
r=new Uint16Array(o)
A.cd(p.b,o,a.b,s,r)
q=A.v(o,r)
return new A.q(q===0?!1:b,r,q)},
aX(a,b){var s,r,q,p,o,n,m,l,k=this.c,j=a.c
k=k<j?k:j
s=this.b
r=a.b
q=new Uint16Array(k)
for(p=s.length,o=r.length,n=0;n<k;++n){if(!(n<p))return A.b(s,n)
m=s[n]
if(!(n<o))return A.b(r,n)
l=r[n]
if(!(n<k))return A.b(q,n)
q[n]=m&l}p=A.v(k,q)
return new A.q(p===0?!1:b,q,p)},
aW(a,b){var s,r,q,p,o,n=this.c,m=this.b,l=a.b,k=new Uint16Array(n),j=a.c
if(n<j)j=n
for(s=m.length,r=l.length,q=0;q<j;++q){if(!(q<s))return A.b(m,q)
p=m[q]
if(!(q<r))return A.b(l,q)
o=l[q]
if(!(q<n))return A.b(k,q)
k[q]=p&~o}for(q=j;q<n;++q){if(!(q>=0&&q<s))return A.b(m,q)
k[q]=m[q]}s=A.v(n,k)
return new A.q(s===0?!1:b,k,s)},
aY(a,b){var s,r,q,p,o,n,m,l,k=this.c,j=a.c,i=k>j?k:j,h=this.b,g=a.b,f=new Uint16Array(i)
if(k<j){s=k
r=a}else{s=j
r=this}for(q=h.length,p=g.length,o=0;o<s;++o){if(!(o<q))return A.b(h,o)
n=h[o]
if(!(o<p))return A.b(g,o)
m=g[o]
if(!(o<i))return A.b(f,o)
f[o]=n|m}l=r.b
for(q=l.length,o=s;o<i;++o){if(!(o>=0&&o<q))return A.b(l,o)
p=l[o]
if(!(o<i))return A.b(f,o)
f[o]=p}q=A.v(i,f)
return new A.q(q===0?!1:b,f,q)},
am(a,b){var s,r,q,p,o,n,m,l,k=this.c,j=a.c,i=k>j?k:j,h=this.b,g=a.b,f=new Uint16Array(i)
if(k<j){s=k
r=a}else{s=j
r=this}for(q=h.length,p=g.length,o=0;o<s;++o){if(!(o<q))return A.b(h,o)
n=h[o]
if(!(o<p))return A.b(g,o)
m=g[o]
if(!(o<i))return A.b(f,o)
f[o]=n^m}l=r.b
for(q=l.length,o=s;o<i;++o){if(!(o>=0&&o<q))return A.b(l,o)
p=l[o]
if(!(o<i))return A.b(f,o)
f[o]=p}q=A.v(i,f)
return new A.q(q===0?!1:b,f,q)},
v(a,b){var s,r,q,p=this
if(p.c===0||b.c===0)return $.p()
s=p.a
if(s===b.a){if(s){s=$.u()
return p.C(s,!0).aY(b.C(s,!0),!0).N(s,!0)}return p.aX(b,!1)}if(s){r=p
q=b}else{r=b
q=p}return q.aW(r.C($.u(),!1),!1)},
ah(a,b){var s,r,q,p=this
if(p.c===0)return b
if(b.c===0)return p
s=p.a
if(s===b.a){if(s){s=$.u()
return p.C(s,!0).aX(b.C(s,!0),!0).N(s,!0)}return p.aY(b,!1)}if(s){r=p
q=b}else{r=b
q=p}s=$.u()
return r.C(s,!0).aW(q,!0).N(s,!0)},
aU(a,b){var s,r,q,p=this
if(p.c===0)return b
if(b.c===0)return p
s=p.a
if(s===b.a){if(s){s=$.u()
return p.C(s,!0).am(b.C(s,!0),!1)}return p.am(b,!1)}if(s){r=p
q=b}else{r=b
q=p}s=$.u()
return q.am(r.C(s,!0),!0).N(s,!0)},
aQ(a,b){var s,r,q=this,p=q.c
if(p===0)return b
s=b.c
if(s===0)return q
r=q.a
if(r===b.a)return q.N(b,r)
if(A.dd(q.b,p,b.b,s)>=0)return q.C(b,r)
return b.C(q,!r)},
aj(a,b){var s,r,q=this,p=q.c
if(p===0)return b.K(0)
s=b.c
if(s===0)return q
r=q.a
if(r!==b.a)return q.N(b,r)
if(A.dd(q.b,p,b.b,s)>=0)return q.C(b,r)
return b.C(q,!r)},
a3(a,b){var s,r,q,p,o,n,m,l=this.c,k=b.c
if(l===0||k===0)return $.p()
s=l+k
r=this.b
q=b.b
p=new Uint16Array(s)
for(o=q.length,n=0;n<k;){if(!(n<o))return A.b(q,n)
A.f4(q[n],r,0,p,n,l);++n}o=this.a!==b.a
m=A.v(s,p)
return new A.q(m===0?!1:o,p,m)},
bQ(a){var s,r,q,p
if(this.c<a.c)return $.p()
this.b5(a)
s=$.eg.E()-$.b9.E()
r=A.ei($.ef.E(),$.b9.E(),$.eg.E(),s)
q=A.v(s,r)
p=new A.q(!1,r,q)
return this.a!==a.a&&q>0?p.K(0):p},
c_(a){var s,r,q,p=this
if(p.c<a.c)return p
p.b5(a)
s=A.ei($.ef.E(),0,$.b9.E(),$.b9.E())
r=A.v($.b9.E(),s)
q=new A.q(!1,s,r)
if($.eh.E()>0)q=q.ai(0,$.eh.E())
return p.a&&q.c>0?q.K(0):q},
b5(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.c
if(b===$.f0&&a.c===$.f2&&c.b===$.f_&&a.b===$.f1)return
s=a.b
r=a.c
q=r-1
if(!(q>=0&&q<s.length))return A.b(s,q)
p=16-B.a.gbf(s[q])
if(p>0){o=new Uint16Array(r+5)
n=A.eZ(s,r,p,o)
m=new Uint16Array(b+5)
l=A.eZ(c.b,b,p,m)}else{m=A.ei(c.b,0,b,b+2)
n=r
o=s
l=b}q=n-1
if(!(q>=0&&q<o.length))return A.b(o,q)
k=o[q]
j=l-n
i=new Uint16Array(l)
h=A.ek(o,n,j,i)
g=l+1
q=m.$flags|0
if(A.dd(m,l,i,h)>=0){q&2&&A.y(m)
if(!(l>=0&&l<m.length))return A.b(m,l)
m[l]=1
A.cd(m,g,i,h,m)}else{q&2&&A.y(m)
if(!(l>=0&&l<m.length))return A.b(m,l)
m[l]=0}q=n+2
f=new Uint16Array(q)
if(!(n>=0&&n<q))return A.b(f,n)
f[n]=1
A.cd(f,n+1,o,n,f)
e=l-1
for(q=m.length;j>0;){d=A.hC(k,m,e);--j
A.f4(d,f,0,m,j,n)
if(!(e>=0&&e<q))return A.b(m,e)
if(m[e]<d){h=A.ek(f,n,j,i)
A.cd(m,g,i,h,m)
for(;--d,m[e]<d;)A.cd(m,g,i,h,m)}--e}$.f_=c.b
$.f0=b
$.f1=s
$.f2=r
$.ef.b=m
$.eg.b=g
$.b9.b=n
$.eh.b=p},
gl(a){var s,r,q,p,o=new A.de(),n=this.c
if(n===0)return 6707
s=this.a?83585:429689
for(r=this.b,q=r.length,p=0;p<n;++p){if(!(p<q))return A.b(r,p)
s=o.$2(s,r[p])}return new A.df().$1(s)},
J(a,b){if(b==null)return!1
return b instanceof A.q&&this.D(0,b)===0},
h(a){var s,r,q,p,o,n=this,m=n.c
if(m===0)return"0"
if(m===1){if(n.a){m=n.b
if(0>=m.length)return A.b(m,0)
return B.a.h(-m[0])}m=n.b
if(0>=m.length)return A.b(m,0)
return B.a.h(m[0])}s=A.a([],t.s)
m=n.a
r=m?n.K(0):n
for(;r.c>1;){q=$.eE()
if(q.c===0)A.P(B.F)
p=r.c_(q).h(0)
s.push(p)
o=p.length
if(o===1)s.push("000")
if(o===2)s.push("00")
if(o===3)s.push("0")
r=r.bQ(q)}q=r.b
if(0>=q.length)return A.b(q,0)
s.push(B.a.h(q[0]))
if(m)s.push("-")
return new A.b2(s,t.r).ce(0)}}
A.de.prototype={
$2(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
$S:6}
A.df.prototype={
$1(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
$S:7}
A.aE.prototype={
J(a,b){if(b==null)return!1
return b instanceof A.aE&&this.a===b.a},
gl(a){return B.a.gl(this.a)},
h(a){var s,r,q,p,o=this.a,n=B.a.p(o,36e8)
o%=36e8
s=B.a.p(o,6e7)
o%=6e7
r=s<10?"0":""
q=B.a.p(o,1e6)
p=q<10?"0":""
return""+n+":"+r+s+":"+p+q+"."+B.z.cj(B.a.h(o%1e6),6,"0")}}
A.di.prototype={
h(a){return this.X()}}
A.k.prototype={
gV(){return A.hi(this)}}
A.bE.prototype={
h(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.cv(s)
return"Assertion failed"}}
A.T.prototype={}
A.L.prototype={
gaq(){return"Invalid argument"+(!this.a?"(s)":"")},
gap(){return""},
h(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.gaq()+q+o
if(!s.a)return n
return n+s.gap()+": "+A.cv(s.gaJ())},
gaJ(){return this.b}}
A.as.prototype={
gaJ(){return this.b},
gaq(){return"RangeError"},
gap(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.j(q):""
else if(q==null)s=": Not greater than or equal to "+A.j(r)
else if(q>r)s=": Not in inclusive range "+A.j(r)+".."+A.j(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.j(r)
return s}}
A.bJ.prototype={
gaJ(){return this.b},
gaq(){return"RangeError"},
gap(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gj(a){return this.f}}
A.b5.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.c7.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.aa.prototype={
h(a){return"Bad state: "+this.a}}
A.bG.prototype={
h(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.cv(s)+"."}}
A.c1.prototype={
h(a){return"Out of Memory"},
gV(){return null},
$ik:1}
A.b4.prototype={
h(a){return"Stack Overflow"},
gV(){return null},
$ik:1}
A.dj.prototype={
h(a){return"Exception: "+this.a}}
A.cw.prototype={
h(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=B.z.bB(q,0,75)+"..."
return r+"\n"+q}}
A.bK.prototype={
gV(){return null},
h(a){return"IntegerDivisionByZeroException"},
$ik:1}
A.F.prototype={
gj(a){var s,r=this.gu(this)
for(s=0;r.m();)++s
return s},
gT(a){var s=this.gu(this)
if(!s.m())throw A.d(A.cA())
return s.gq()},
O(a,b){var s,r
A.hl(b,"index")
s=this.gu(this)
for(r=b;s.m();){if(r===0)return s.gq();--r}throw A.d(A.e4(b,b-r,this,null,"index"))},
h(a){return A.hb(this,"(",")")}}
A.bd.prototype={
O(a,b){var s=this.a
if(0>b||b>=s)A.P(A.e4(b,s,this,null,"index"))
return this.b.$1(b)},
gj(a){return this.a}}
A.aW.prototype={
h(a){return"MapEntry("+A.j(this.a)+": "+A.j(this.b)+")"}}
A.z.prototype={
gl(a){return A.e.prototype.gl.call(this,0)},
h(a){return"null"}}
A.e.prototype={$ie:1,
J(a,b){return this===b},
gl(a){return A.ar(this)},
h(a){return"Instance of '"+A.cI(this)+"'"},
gt(a){return A.fz(this)},
toString(){return this.h(this)}}
A.cp.prototype={
h(a){return""},
$iJ:1}
A.c6.prototype={
gj(a){return this.a.length},
h(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.dw.prototype={
cg(a){if(a<=0||a>4294967296)throw A.d(A.hk("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
A.X.prototype={
gl(a){var s=this.a,r=this.b
return A.cG(new A.m(s,r).$s,s,r,B.f)},
J(a,b){var s,r,q,p
if(b==null)return!1
if(b instanceof A.X){s=b.a
r=b.b
q=this.a
p=this.b
p=A.cG(new A.m(s,r).$s,s,r,B.f)===A.cG(new A.m(q,p).$s,q,p,B.f)
s=p}else s=!1
return s},
h(a){var s=this
return"("+s.a+" "+s.b+") => '"+s.c+"' "+s.d}}
A.cH.prototype={
h(a){return A.fz(this).h(0)+": "+this.a}}
A.cW.prototype={}
A.am.prototype={}
A.ao.prototype={
h(a){var s=this
return"               row: "+s.a+"\n            column: "+s.b+"\n         character: '"+s.c+"'\n    characterColor: "+s.d+"\n\n          pixelRow: "+s.e+"\n       pixelColumn: "+s.f+"\n         pixelIsOn: "+s.r+"\n    "}}
A.aq.prototype={
sab(a){var s,r,q,p=this
if(a<0){s=p.d=a
for(r=p.b,q=p.a;s<0;){s+=r
p.d=s
p.c=B.a.k(p.c-1,q)}}else{s=p.b
p.c=B.a.k(p.c+B.a.M(a,s),p.a)
p.d=B.a.k(a,s)}},
gG(){return this.c*this.b+this.d},
sG(a){var s=this,r=s.b
s.c=B.a.k(B.a.M(a,r),s.a)
s.d=B.a.k(a,r)}}
A.c5.prototype={
bD(a,b,c,d,e,f,g,h){var s,r=this,q=v.G.document
q.onfocus=A.bw(new A.cK(r))
q.onblur=A.bw(new A.cL(r))
q=r.w
q.tabIndex=-1
q.style.display="block"
q.style.outline="none"
s=q.getContext("2d")
if(s==null)s=t.m.a(s)
s.imageSmoothingEnabled=!1
q.onfocus=A.bw(new A.cM(r))
q.onblur=A.bw(new A.cN(r))
b.style.display="flex"
b.style.alignItems="flex-start"
b.style.padding="0"
b.style.margin="0"
b.style.width="fit-content"
b.style.height="fit-content"
b.style.background="gray"
b.appendChild(q)
r.a_(0)},
a9(a,b){return new A.m(B.a.k(a,this.b),B.a.k(b,this.c))},
b1(){var s=this.x,r=s.getContext("2d")
if(r==null)r=t.m.a(r)
r.save()
r.beginPath()
r.clearRect(0,0,s.width,s.height)
r.restore()
return r},
b4(){var s=this.w.getContext("2d")
if(s==null)s=t.m.a(s)
s.save()
s.beginPath()
s.drawImage(this.x,0,0)
s.restore()
return s},
P(a,b,c,d){var s,r,q,p,o,n,m=this,l=a<0||a>=m.b||b<0||b>=m.c
if(l)return
s=m.a9(a,b)
a=s.a
b=s.b
r=A.eb(b)
q=r.a
p=B.a.n(1,r.b)
l=m.y
if(!(a>=0&&a<l.length))return A.b(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.b(l,q)
o=l[q]
l.$flags&2&&A.y(l)
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
R(a,b,c,d,e){var s,r,q,p,o,n,m=this,l=a<0||a>=m.b||b<0||b>=m.c
if(l)return
s=m.a9(a,b)
a=s.a
b=s.b
r=A.eb(b)
q=r.a
p=B.a.n(1,r.b)
l=m.y
if(!(a>=0&&a<l.length))return A.b(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.b(l,q)
o=l[q]
l.$flags&2&&A.y(l)
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
bs(a,b){var s,r,q,p,o=this.a9(b,a)
b=o.a
s=A.eb(o.b)
r=s.a
q=B.a.n(1,s.b)
p=this.y
if(!(b>=0&&b<p.length))return A.b(p,b)
p=p[b]
if(!(r>=0&&r<p.length))return A.b(p,r)
return(p[r]&q)>>>0>0},
bi(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=this
if(e==null)e=k.c-c
if(b==null)b=k.b-d
k.b1()
if(c===0&&d===0&&e===k.c&&b===k.b){for(s=k.y,r=s.length,q=0;q<r;++q)for(p=0;o=s[q],p<o.length;++p){o.$flags&2&&A.y(o)
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
for(p=c;p<m;++p)k.P(l,B.a.k(p,r),o,!1)}}k.b4()},
a_(a){return this.bi(0,null,0,0,null)},
bY(a,b,c,d,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.b1()
s=e.a9(a,b)
a=s.a
b=s.b
r=B.a.c2(1,a0)-1
for(q=a0-1,p=t.t,o=e.x,n=0;n<c.length;++n){m=c[n]
l=(m&r)>>>0
m=A.a([],p)
for(k=a+n,j=0;j<a0;++j){i=e.bs(b+j,k)?1:0
m.push(B.a.n(i,q-j))}h=B.i.ca(m,0,new A.cJ())
switch(a1){case B.B:for(j=0;j<a0;++j){m=b+j
if((B.a.F(l,q-j)&1)>0)e.R(k,m,d,o,!1)
else e.P(k,m,o,!1)}break
case B.dV:for(j=0;j<a0;++j){m=b+j
if((B.a.F(l,q-j)&1)>0)e.P(k,m,o,!1)
else e.R(k,m,d,o,!1)}break
case B.e_:for(j=0;j<a0;++j){g=q-j
if((B.a.F(l,g)&1)>0&&(B.a.ai(h,g)&1)===0)e.R(k,b+j,d,o,!1)}break
case B.dZ:for(j=0;j<a0;++j)if((B.a.F(l,q-j)&1)>0)e.R(k,b+j,d,o,!1)
break
case B.e0:for(f=(l&h)>>>0,j=0;j<a0;++j)if((B.a.F(f,q-j)&1)>0)e.R(k,b+j,d,o,!1)
break
case B.e1:for(f=(l&h)>>>0,j=0;j<a0;++j)if((B.a.F(f,q-j)&1)>0)e.P(k,b+j,o,!1)
break
case B.e3:for(f=(l&h)>>>0,j=0;j<a0;++j)if((B.a.F(f,q-j)&1)===0)e.P(k,b+j,o,!1)
break
case B.e4:for(f=(l&h)>>>0,j=0;j<a0;++j){m=b+j
if((B.a.F(f,q-j)&1)===0)e.P(k,m,o,!1)
else e.R(k,m,d,o,!1)}break}}e.b4()},
bu(a,b,c){this.bY(c.a,c.b,b,a,8,B.B,!0,!1,!1)},
a0(){var s=this.w
s.style.opacity="1.0"
s.focus()},
Z(){var s=this.w
s.style.opacity="0.5"
s.blur()}}
A.cK.prototype={
$0(){this.a.z=!0},
$S:1}
A.cL.prototype={
$0(){this.a.z=!1},
$S:1}
A.cM.prototype={
$0(){this.a.a0()},
$S:1}
A.cN.prototype={
$0(){this.a.Z()},
$S:1}
A.cJ.prototype={
$2(a,b){return(a|b)>>>0},
$S:6}
A.M.prototype={
X(){return"Mode."+this.b}}
A.at.prototype={
X(){return"State."+this.b}}
A.cV.prototype={
bE(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=this,r=s.f
r.tabIndex=-1
r.onfocus=A.bw(new A.cY(s))
r.onblur=A.bw(new A.cZ(s))
r.onkeydown=A.fl(new A.d_(s,l,new A.d3(),new A.d2(s)))
r.onclick=A.fl(new A.d0(s,new A.d4(s),o))
A.ht(A.eN(300),new A.d1(s))
s.Z()
s.a_(0)},
gaF(){var s=this.w
s===$&&A.a4()
return s.gaF()},
gaD(){var s=this.w
s===$&&A.a4()
return s.gaD()},
aB(a,b){return new A.m(B.a.k(a,this.a),B.a.k(b,this.b))},
b7(){var s=this,r=s.x
s.CW.S(0,new A.X(r.c,r.d," ","white"))
s.be()
s.cy=!1},
be(){var s,r,q,p,o,n,m,l,k,j
for(s=this.CW,r=A.hK(s,s.r,s.$ti.c),q=this.w,p=this.cx,o=r.$ti.c;r.m();){n=r.d
if(n==null)n=o.a(n)
m=n.a
l=n.b
if(p.aE(n.c)){k=p.A(0,n.c)
k.toString
j=k}else j=$.fH()
q===$&&A.a4()
q.bu(n.d,j,new A.m(m*10,l*8))}if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.b8()}},
aR(a,b){var s,r=this.aB(b,a)
b=r.a
a=r.b
s=this.ch
if(!(b>=0&&b<s.length))return A.b(s,b)
s=s[b]
if(!(a>=0&&a<s.length))return A.b(s,a)
return s[a].c},
bp(){var s=this.x
s.sab(0)
s.c=B.a.k(s.c+1,s.a)},
a1(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=this,i=e==null?j.x.c:e,h=j.aB(i,c==null?j.x.d:c)
i=j.x
i.c=B.a.k(h.a,i.a)
i.sab(h.b)
if(b==null)b=j.d
for(s=a.split(""),r=s.length,q=j.ch,p=j.CW,o=0;o<r;++o){n=s[o]
m=i.c
l=i.d
if(!(m>=0&&m<q.length))return A.b(q,m)
m=q[m]
if(!(l>=0&&l<m.length))return A.b(m,l)
k=m[l]
k.c=n
k.d=b
p.S(0,k)
i.sab(i.d+1)}j.be()
if(d)j.bp()},
B(a,b,c){return this.a1(a,null,b,!0,c)},
ci(a,b,c){return this.a1(a,b,c,!0,null)},
H(a,b){return this.a1(a,null,b,!0,null)},
aN(a,b,c,d){return this.a1(a,b,c,!0,d)},
br(a,b){return this.a1(a,null,null,b,null)},
bh(a,b,c,d,e){var s,r,q,p,o,n,m,l=this
if(e==null)e=l.b-b
if(c==null)c=l.a-d
s=d+c
r=b+e
for(q=l.ch,p=l.d,o=d;o<s;++o)for(n=b;n<r;++n){if(!(o>=0&&o<q.length))return A.b(q,o)
m=q[o]
if(!(n>=0&&n<m.length))return A.b(m,n)
m=m[n]
m.c=" "
m.d=p}q=l.w
q===$&&A.a4()
q.bi(0,c*10,b*8,d*10,e*8)
q=l.x
q.c=B.a.k(d,q.a)
q.sab(b)},
a_(a){return this.bh(0,0,null,0,null)},
ck(a,b,c){var s=this.w
s===$&&A.a4()
s.bu(this.d,b,new A.m(c*10,a*8))},
c4(){if(this.ay!==B.e)throw A.d(A.cX("Terminal already awaiting input."))},
cc(){this.c4()
this.ay=B.j
var s=this.at
return new A.G(s,A.a2(s).i("G<1>")).gT(0)},
a0(){return this.gaF().$0()},
Z(){return this.gaD().$0()}}
A.d4.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.w
i===$&&A.a4()
s=J.eH(a.offsetX)
r=Math.max(Math.min(B.a.M(J.eH(a.offsetY)-1,i.e),i.b-1),0)
q=Math.max(Math.min(B.a.M(s-1,i.d),i.c-1),0)
p=B.a.p(r,10)
o=B.a.p(q,8)
n=j.aR(o,p)
m=j.aB(p,o)
l=m.a
k=m.b
j=j.ch
if(!(l>=0&&l<j.length))return A.b(j,l)
j=j[l]
if(!(k>=0&&k<j.length))return A.b(j,k)
return new A.ao(p,o,n,j[k].d,r,q,i.bs(q,r))},
$S:18}
A.d3.prototype={
$1(a){var s=a.key
return new A.am(s.length>1?"":s)},
$S:19}
A.d2.prototype={
$0(){var s,r,q,p,o,n=this.a,m=n.a,l=n.b,k=new A.aq(m,l)
k.sG(n.y.gG())
s=A.a([],t.s)
for(r=n.z,q=r.b;p=k.c,o=k.d,p*l+o<r.c*q+r.d;p=k.c*l+k.d+1,k.c=B.a.k(B.a.M(p,l),m),k.d=B.a.k(p,l))s.push(n.aR(o,p))
return B.i.bm(s,"")},
$S:20}
A.cY.prototype={
$0(){var s=this.a.w
s===$&&A.a4()
s.a0()},
$S:1}
A.cZ.prototype={
$0(){var s=this.a.w
s===$&&A.a4()
s.Z()},
$S:1}
A.d_.prototype={
$1(a){var s,r,q,p
a.preventDefault()
s=this.a
switch(s.ay){case B.e:break
case B.j:r=s.at
if(r.d!=null){r.S(0,this.c.$1(a))
s.ay=B.e}break
case B.D:s.b7()
$label0$1:{q=a.keyCode
if(13===q){r=s.as
if(r.d!=null){r.S(0,J.fV(this.d.$0()))
s.bp()
s.ay=B.e}break $label0$1}if(8===q){r=s.x
if(r.gG()>s.y.gG()){r.sG(r.gG()-1)
s.br(" ",!1)
r.sG(r.gG()-1)}break $label0$1}p=a.key
if(p.length===1&&s.x.gG()<s.z.gG())s.br(p,!1)}break
case B.k:break}},
$S:8}
A.d0.prototype={
$1(a){var s
a.preventDefault()
s=this.a
if(s.ay===B.k&&s.ax.d!=null){s.ax.S(0,this.b.$1(a))
s.ay=B.e}},
$S:8}
A.d1.prototype={
$1(a){var s,r=this.a,q=r.w
q===$&&A.a4()
if(q.z&&J.ak(v.G.document.activeElement,q.w)&&r.ay===B.D)if(r.cy)r.b7()
else{q=r.x
s=q.c
r.ck(q.d,$.fG(),s)
r.cy=!0}},
$S:21}
A.H.prototype={
X(){return"Direction."+this.b},
gbo(){switch(this){case B.o:var s=B.ea
break
case B.p:s=B.e5
break
case B.q:s=B.e7
break
case B.r:s=B.e6
break
case B.t:s=B.eb
break
case B.u:s=B.ec
break
case B.v:s=B.e8
break
case B.w:s=B.e9
break
default:s=null}return s}}
A.a9.prototype={
X(){return"Mode."+this.b}}
A.cy.prototype={
bl(a,b,c){var s,r=a.gak()
switch(a){case B.b:s="orange"
break
case B.c:s="mediumorchid"
break
default:s=null}this.a.aN(r,s,c*3+3,b*3+3)},
bk(a){var s,r,q,p,o,n,m,l,k,j=this,i=j.a
i.bh(0,2,24,2,24)
for(s=j.b,r=0;r<8;++r)for(q=r*3+3,p=r*8,o=0;o<8;++o){n=s.a
m=$.u()
l=p+o
n=n.v(0,m.n(0,l))
k=$.p()
if(n.D(0,k)>0)j.bl(B.b,r,o)
else if(s.b.v(0,m.n(0,l)).D(0,k)>0)j.bl(B.c,r,o)
else i.aN("\u2022","lightgray",o*3+3,q)}if(a!=null){s=a.a*3+3
q=s-1
p=a.b*3+3
n=p-1
i.B("\u250c",n,q);++p
i.B("\u2510",p,q);++s
i.B("\u2514",n,s)
i.B("\u2518",p,s)}},
bj(){return this.bk(null)},
aT(){var s,r,q,p,o=this.a
o.a_(0)
for(s=A.h6(new A.b6(A.a("   ___  _   _        _ _     \n  / _ \\| |_| |_  ___| | |___ \n | (_) |  _| ' \\/ -_) | / _ \\\n  \\___/ \\__|_||_\\___|_|_\\___/\n".split("\n"),t.s),new A.cz(),t.U),0,t.N),r=s.a,r=r.gu(r),s=s.b,q=new A.aL(r,s);q.m();){p=q.c
p=p>=0?new A.m(s+p,r.gq()):A.P(A.cA())
o.aN(p.b,"lightgreen",8,p.a+3)}},
ac(){var s=0,r=A.bz(t.A),q,p=this,o,n,m,l
var $async$ac=A.bA(function(a,b){if(a===1)return A.bt(b,r)
while(true)switch(s){case 0:p.aT()
o=p.a
o.B("Select a difficulty level:",10,10)
o.B("(A) Easy",12,12)
o.H("(B) Medium",12)
o.H("(C) Hard",12)
o.H("(D) Expert",12)
n=null
case 3:if(!(n==null)){s=5
break}if(o.ay!==B.e)A.P(A.cX("Terminal already awaiting input."))
o.ay=B.j
m=o.at
s=6
return A.O(new A.G(m,A.a2(m).i("G<1>")).gT(0),$async$ac)
case 6:l=b.b.toLowerCase()
$label0$0:{if("a"===l){m=B.dX
break $label0$0}if("b"===l){m=B.dW
break $label0$0}if("c"===l){m=B.e2
break $label0$0}if("d"===l){m=B.dY
break $label0$0}m=null
break $label0$0}case 4:n=m
s=3
break
case 5:q=n
s=1
break
case 1:return A.bu(q,r)}})
return A.bv($async$ac,r)},
ae(){var s=0,r=A.bz(t.h),q,p=this,o,n,m,l
var $async$ae=A.bA(function(a,b){if(a===1)return A.bt(b,r)
while(true)switch(s){case 0:p.aT()
o=p.a
o.B("Select your token:",10,10)
o.B("(A) Naught (Move First)",12,12)
o.H("(B) Cross (Move Second)",12)
n=null
case 3:if(!(n==null)){s=5
break}if(o.ay!==B.e)A.P(A.cX("Terminal already awaiting input."))
o.ay=B.j
m=o.at
s=6
return A.O(new A.G(m,A.a2(m).i("G<1>")).gT(0),$async$ae)
case 6:l=b.b.toLowerCase()
$label0$0:{if("a"===l){m=B.b
break $label0$0}if("b"===l){m=B.c
break $label0$0}m=null
break $label0$0}case 4:n=m
s=3
break
case 5:q=n
s=1
break
case 1:return A.bu(q,r)}})
return A.bv($async$ae,r)},
ad(){var s=0,r=A.bz(t.R),q,p=this,o,n,m,l,k,j
var $async$ad=A.bA(function(a,b){if(a===1)return A.bt(b,r)
while(true)switch(s){case 0:j=p.b.gaf()
o=p.a,n=-1,m=-1
case 3:if(!!B.i.c7(j,new A.m(n,m))){s=4
break}if(o.ay!==B.e)A.P(A.cX("Terminal already awaiting input."))
o.ay=B.k
l=o.ax
s=5
return A.O(new A.G(l,A.a2(l).i("G<1>")).gT(0),$async$ad)
case 5:k=b
n=B.a.p(k.a-3,3)
m=B.a.p(k.b-3,3)
s=3
break
case 4:q=new A.m(n,m)
s=1
break
case 1:return A.bu(q,r)}})
return A.bv($async$ad,r)},
a2(a){return this.bA(a)},
bA(a){var s=0,r=A.bz(t.n),q=this,p,o,n
var $async$a2=A.bA(function(b,c){if(b===1)return A.bt(c,r)
while(true)switch(s){case 0:n=q.a
n.B("Game Over!",30,15)
p=q.b
if(p.d===0||p.e===0)n.ci("Othello!","yellow",30)
o=p.d
p=p.e
if(o===p)n.H("A tie!",30)
else switch(a){case B.b:if(o>p)n.H("You win!",30)
else n.H("Computer wins!",30)
break
case B.c:if(o>p)n.H("Computer wins!",30)
else n.H("You win!",30)
break}n.H("Press any key!",30)
s=2
return A.O(n.cc(),$async$a2)
case 2:return A.bu(null,r)}})
return A.bv($async$a2,r)},
bz(a){var s,r,q=this,p=a.gaL(),o=q.a
o.B("Score",30,3)
s=a.gak()
switch(a){case B.c:r=q.b.e
break
case B.b:r=q.b.d
break
default:r=null}o.B("  Human ("+s+"):    "+A.j(r)+" ",30,5)
r=p.gak()
switch(p){case B.c:s=q.b.e
break
case B.b:s=q.b.d
break
default:s=null}o.H("  Computer ("+r+"): "+A.j(s)+" ",30)},
L(){var s=0,r=A.bz(t.n),q=this,p,o,n,m,l,k,j,i,h,g
var $async$L=A.bA(function(a,b){if(a===1)return A.bt(b,r)
while(true)switch(s){case 0:p=q.b,o=q.a,n=t.z
case 2:if(!!0){s=3
break}s=4
return A.O(q.ac(),$async$L)
case 4:m=b
s=5
return A.O(q.ae(),$async$L)
case 5:l=b
o.a_(0)
p.a=p.b=$.p()
p.d=p.e=0
p.U(B.b,3,3)
p.U(B.b,4,4)
p.U(B.c,3,4)
p.U(B.c,4,3)
p.c=B.b
q.bj()
q.bz(l)
k=!1
case 6:if(!!0){s=8
break}j=p.gaf().length===0
s=!j?9:11
break
case 9:if(p.c===l)o.B("Your move...",3,27)
else o.B("Thinking...",3,27)
s=12
return A.O(A.eP(A.eN(100),n),$async$L)
case 12:s=p.c===l?13:15
break
case 13:s=16
return A.O(q.ad(),$async$L)
case 16:s=14
break
case 15:s=17
return A.O(A.dR(p,m),$async$L)
case 17:case 14:i=b
h=i.a
g=i.b
o.B("              ",3,27)
p.aK(h,g)
if(p.c===l)q.bk(new A.m(h,g))
else q.bj()
q.bz(l)
s=10
break
case 11:if(k){s=8
break}p.c=p.c.gaL()
case 10:case 7:k=j
s=6
break
case 8:s=18
return A.O(q.a2(l),$async$L)
case 18:s=2
break
case 3:return A.bu(null,r)}})
return A.bv($async$L,r)}}
A.cz.prototype={
$1(a){return a.length!==0},
$S:22}
A.c0.prototype={
gbt(){switch(this.c){case B.b:var s=this.a
break
case B.c:s=this.b
break
default:s=null}return s},
gaM(){switch(this.c){case B.b:var s=this.b
break
case B.c:s=this.a
break
default:s=null}return s},
U(a,b,c){var s=this,r=$.u().n(0,b*8+c)
switch(a){case B.b:s.a=s.a.ah(0,r);++s.d
if(s.b.v(0,r).D(0,$.p())>0){--s.e
s.b=s.b.v(0,$.eC().aU(0,r))}break
case B.c:s.b=s.b.ah(0,r);++s.e
if(s.a.v(0,r).D(0,$.p())>0){--s.d
s.a=s.a.v(0,$.eC().aU(0,r))}break}},
gaf(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=A.a([],t.w)
for(s=0;s<8;++s)for(r=s*8,q=0;q<8;++q)if(g.a.ah(0,g.b).v(0,$.u().n(0,r+q)).D(0,$.p())<=0){for(p=0,o=0;o<8;++o){n=B.A[o].gbo()
m=n.a
l=n.b
k=s+m
j=q+l
i=0
while(!0){h=k>=0
if(!(h&&k<8&&j>=0&&j<8&&g.gaM().v(0,$.u().n(0,k*8+j)).D(0,$.p())>0))break;++i
k+=m
j+=l}if(i>0)h=h&&k<8&&j>=0&&j<8&&g.gbt().v(0,$.u().n(0,k*8+j)).D(0,$.p())>0
else h=!1
if(h)p+=i}if(p>0)f.push(new A.m(s,q))}return f},
aK(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
i.U(i.c,a,b)
for(s=0;s<8;++s){r=B.A[s].gbo()
q=r.a
p=r.b
o=a+q
n=b+p
m=n
l=o
k=0
while(!0){j=l>=0
if(!(j&&l<8&&m>=0&&m<8&&i.gaM().v(0,$.u().n(0,l*8+m)).D(0,$.p())>0))break;++k
l+=q
m+=p}if(k>0)j=j&&l<8&&m>=0&&m<8&&i.gbt().v(0,$.u().n(0,l*8+m)).D(0,$.p())>0
else j=!1
if(j)while(!0){if(!(o>=0&&o<8&&n>=0&&n<8&&i.gaM().v(0,$.u().n(0,o*8+n)).D(0,$.p())>0))break
i.U(i.c,o,n)
o+=q
n+=p}}i.c=i.c.gaL()},
h(a){var s,r,q,p,o,n,m,l=A.a([],t.s)
for(s=0;s<8;++s)l.push(B.a.h(s))
l="  "+B.i.bm(l," ")+"\n"
for(r=0;r<8;++r){l+=""+r+" "
for(q=r*8,s=0;s<8;++s){p=q+s
o=this.a
n=$.u()
o=o.v(0,n.n(0,p))
m=$.p()
if(o.D(0,m)>0)l+="o "
else l=this.b.v(0,n.n(0,p)).D(0,m)>0?l+"x ":l+". "}l+="\n"}return l.charCodeAt(0)==0?l:l}}
A.b1.prototype={
X(){return"Player."+this.b},
gaL(){switch(this){case B.c:var s=B.b
break
case B.b:s=B.c
break
default:s=null}return s},
gak(){switch(this){case B.c:var s="X"
break
case B.b:s="O"
break
default:s=null}return s}};(function aliases(){var s=J.Z.prototype
s.bC=s.h})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._static_2,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u
s(A,"iP","hy",2)
s(A,"iQ","hz",2)
s(A,"iR","hA",2)
r(A,"fv","iK",0)
s(A,"iS","iE",4)
q(A,"iT","iF",5)
p(A.l.prototype,"gb2","bN",5)
o(A.bc.prototype,"gbW","bX",0)
s(A,"fx","hJ",7)
var n
o(n=A.c5.prototype,"gaF","a0",0)
o(n,"gaD","Z",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.e,null)
q(A.e,[A.e6,J.bL,J.bD,A.k,A.a5,A.cO,A.F,A.an,A.ca,A.bI,A.aL,A.aI,A.aw,A.bH,A.d6,A.cF,A.aH,A.bl,A.aV,A.cD,A.bQ,A.bP,A.cB,A.dz,A.dg,A.I,A.ck,A.cq,A.bn,A.cb,A.E,A.au,A.cf,A.ce,A.a0,A.l,A.cc,A.ci,A.cl,A.bc,A.co,A.dI,A.b3,A.dy,A.av,A.o,A.q,A.aE,A.di,A.c1,A.b4,A.dj,A.cw,A.bK,A.aW,A.z,A.cp,A.c6,A.dw,A.X,A.cH,A.am,A.ao,A.aq,A.c5,A.cV,A.cy,A.c0])
q(J.bL,[J.bM,J.aN,J.aP,J.aO,J.aQ,J.al,J.a7])
q(J.aP,[J.Z,J.r,A.bR,A.aZ])
q(J.Z,[J.c2,J.ab,J.Y])
r(J.cC,J.r)
q(J.al,[J.aM,J.bN])
q(A.k,[A.aS,A.T,A.bO,A.c8,A.c4,A.cj,A.bE,A.L,A.b5,A.c7,A.aa,A.bG])
q(A.a5,[A.ct,A.cu,A.cU,A.dS,A.dU,A.da,A.d9,A.dJ,A.du,A.cS,A.cR,A.dD,A.df,A.d4,A.d3,A.d_,A.d0,A.d1,A.cz])
q(A.ct,[A.dX,A.db,A.dc,A.dF,A.dE,A.cx,A.dk,A.dq,A.dp,A.dm,A.dl,A.dt,A.ds,A.dr,A.cT,A.cQ,A.dA,A.dL,A.dM,A.dC,A.cK,A.cL,A.cM,A.cN,A.d2,A.cY,A.cZ])
q(A.F,[A.aF,A.b6,A.aK])
q(A.aF,[A.S,A.aG,A.aU,A.aT])
q(A.S,[A.b2,A.bd])
r(A.cm,A.aw)
q(A.cm,[A.m,A.cn])
r(A.aJ,A.bH)
r(A.b0,A.T)
q(A.cU,[A.cP,A.aD])
r(A.a8,A.aV)
r(A.aR,A.a8)
q(A.cu,[A.dT,A.dK,A.dN,A.dv,A.cE,A.de,A.cJ])
q(A.aZ,[A.bS,A.ap])
q(A.ap,[A.bf,A.bh])
r(A.bg,A.bf)
r(A.aX,A.bg)
r(A.bi,A.bh)
r(A.aY,A.bi)
q(A.aX,[A.bT,A.bU])
q(A.aY,[A.bV,A.bW,A.bX,A.bY,A.bZ,A.b_,A.c_])
r(A.bo,A.cj)
r(A.bm,A.au)
r(A.bb,A.bm)
r(A.G,A.bb)
r(A.cg,A.cf)
r(A.ba,A.cg)
r(A.b7,A.ce)
r(A.ch,A.ci)
r(A.dB,A.dI)
r(A.bk,A.b3)
r(A.be,A.bk)
q(A.L,[A.as,A.bJ])
r(A.cW,A.cH)
q(A.di,[A.M,A.at,A.H,A.a9,A.b1])
s(A.bf,A.o)
s(A.bg,A.aI)
s(A.bh,A.o)
s(A.bi,A.aI)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{c:"int",w:"double",fB:"num",A:"String",dO:"bool",z:"Null",i:"List",e:"Object",jl:"Map"},mangledNames:{},types:["~()","z()","~(~())","z(@)","~(@)","~(e,J)","c(c,c)","c(c)","z(n)","R<~>()","@(@)","@(@,A)","@(A)","z(~())","z(@,J)","~(c,@)","z(e,J)","~(e?,e?)","ao(n)","am(n)","A()","~(d5)","dO(A)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.m&&a.b(c.a)&&b.b(c.b),"2;black,white":(a,b)=>c=>c instanceof A.cn&&a.b(c.a)&&b.b(c.b)}}
A.hZ(v.typeUniverse,JSON.parse('{"c2":"Z","ab":"Z","Y":"Z","bM":{"h":[]},"aN":{"h":[]},"aP":{"n":[]},"Z":{"n":[]},"r":{"i":["1"],"n":[]},"cC":{"r":["1"],"i":["1"],"n":[]},"al":{"w":[]},"aM":{"w":[],"c":[],"h":[]},"bN":{"w":[],"h":[]},"a7":{"A":[],"h":[]},"aS":{"k":[]},"aF":{"F":["1"]},"S":{"F":["1"]},"b6":{"F":["1"]},"aG":{"F":["1"]},"aK":{"F":["+(c,1)"]},"b2":{"S":["1"],"F":["1"],"S.E":"1"},"aJ":{"bH":["1","2"]},"b0":{"T":[],"k":[]},"bO":{"k":[]},"c8":{"k":[]},"bl":{"J":[]},"c4":{"k":[]},"a8":{"aV":["1","2"]},"aU":{"F":["1"]},"aT":{"F":["aW<1,2>"]},"aR":{"a8":["1","2"],"aV":["1","2"]},"bR":{"n":[],"h":[]},"aZ":{"n":[]},"bS":{"n":[],"h":[]},"ap":{"B":["1"],"n":[]},"aX":{"o":["w"],"i":["w"],"B":["w"],"n":[]},"aY":{"o":["c"],"i":["c"],"B":["c"],"n":[]},"bT":{"o":["w"],"i":["w"],"B":["w"],"n":[],"h":[],"o.E":"w"},"bU":{"o":["w"],"i":["w"],"B":["w"],"n":[],"h":[],"o.E":"w"},"bV":{"o":["c"],"i":["c"],"B":["c"],"n":[],"h":[],"o.E":"c"},"bW":{"o":["c"],"i":["c"],"B":["c"],"n":[],"h":[],"o.E":"c"},"bX":{"o":["c"],"i":["c"],"B":["c"],"n":[],"h":[],"o.E":"c"},"bY":{"o":["c"],"i":["c"],"B":["c"],"n":[],"h":[],"o.E":"c"},"bZ":{"d8":[],"o":["c"],"i":["c"],"B":["c"],"n":[],"h":[],"o.E":"c"},"b_":{"o":["c"],"i":["c"],"B":["c"],"n":[],"h":[],"o.E":"c"},"c_":{"o":["c"],"i":["c"],"B":["c"],"n":[],"h":[],"o.E":"c"},"cj":{"k":[]},"bo":{"T":[],"k":[]},"bn":{"d5":[]},"E":{"k":[]},"G":{"au":["1"]},"b7":{"ce":["1"]},"l":{"R":["1"]},"bb":{"au":["1"]},"bm":{"au":["1"]},"be":{"b3":["1"]},"bk":{"b3":["1"]},"bE":{"k":[]},"T":{"k":[]},"L":{"k":[]},"as":{"k":[]},"bJ":{"k":[]},"b5":{"k":[]},"c7":{"k":[]},"aa":{"k":[]},"bG":{"k":[]},"c1":{"k":[]},"b4":{"k":[]},"bK":{"k":[]},"bd":{"S":["1"],"F":["1"],"S.E":"1"},"cp":{"J":[]},"h9":{"i":["c"]},"hw":{"i":["c"]},"hv":{"i":["c"]},"h7":{"i":["c"]},"hu":{"i":["c"]},"h8":{"i":["c"]},"d8":{"i":["c"]},"h4":{"i":["w"]},"h5":{"i":["w"]}}'))
A.hY(v.typeUniverse,JSON.parse('{"aF":1,"ca":1,"bI":1,"aL":1,"aI":1,"bQ":1,"ap":1,"bb":1,"cg":1,"cf":1,"bm":1,"ci":1,"ch":1,"cl":1,"bc":1,"co":1,"bk":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.dQ
return{o:s("X"),Q:s("k"),Z:s("jj"),V:s("r<X>"),G:s("r<i<X>>"),f:s("r<e>"),w:s("r<+(c,c)>"),s:s("r<A>"),x:s("r<d8>"),b:s("r<@>"),t:s("r<c>"),T:s("aN"),m:s("n"),g:s("Y"),p:s("B<@>"),W:s("am"),j:s("i<@>"),A:s("a9"),q:s("ao"),P:s("z"),K:s("e"),h:s("b1"),L:s("jn"),F:s("+()"),R:s("+(c,c)"),r:s("b2<A>"),l:s("J"),N:s("A"),E:s("d5"),B:s("h"),_:s("T"),J:s("ab"),U:s("b6<A>"),c:s("l<@>"),a:s("l<c>"),D:s("l<~>"),y:s("dO"),i:s("w"),z:s("@"),v:s("@(e)"),C:s("@(e,J)"),S:s("c"),O:s("R<z>?"),X:s("e?"),M:s("A?"),u:s("dO?"),I:s("w?"),Y:s("c?"),d:s("fB?"),H:s("fB"),n:s("~"),e:s("~(e)"),k:s("~(e,J)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.O=J.bL.prototype
B.i=J.r.prototype
B.a=J.aM.prototype
B.y=J.al.prototype
B.z=J.a7.prototype
B.P=J.Y.prototype
B.Q=J.aP.prototype
B.C=J.c2.prototype
B.l=J.ab.prototype
B.E=new A.bI()
B.F=new A.bK()
B.m=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.G=function() {
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
B.L=function(getTagFallback) {
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
B.H=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.K=function(hooks) {
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
B.J=function(hooks) {
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
B.I=function(hooks) {
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

B.M=new A.c1()
B.f=new A.cO()
B.N=new A.dw()
B.d=new A.dB()
B.h=new A.cp()
B.o=new A.H("n")
B.p=new A.H("e")
B.q=new A.H("s")
B.r=new A.H("w")
B.t=new A.H("ne")
B.u=new A.H("nw")
B.v=new A.H("se")
B.w=new A.H("sw")
B.x=new A.aE(0)
B.A=A.a(s([B.o,B.p,B.q,B.r,B.t,B.u,B.v,B.w]),A.dQ("r<H>"))
B.df=A.a(s([126,129,165,129,189,153,129,126]),t.t)
B.ah=A.a(s([126,255,219,255,195,231,255,126]),t.t)
B.dM=A.a(s([108,254,254,254,124,56,16,0]),t.t)
B.cc=A.a(s([16,56,124,254,124,56,16,0]),t.t)
B.ba=A.a(s([56,124,56,254,254,124,56,124]),t.t)
B.bm=A.a(s([16,16,56,124,254,124,56,124]),t.t)
B.aF=A.a(s([0,0,24,60,60,24,0,0]),t.t)
B.aI=A.a(s([255,255,231,195,195,231,255,255]),t.t)
B.aU=A.a(s([0,60,102,66,66,102,60,0]),t.t)
B.d_=A.a(s([255,195,153,189,189,153,195,255]),t.t)
B.dL=A.a(s([15,7,15,125,204,204,204,120]),t.t)
B.dK=A.a(s([60,102,102,102,60,24,126,24]),t.t)
B.cX=A.a(s([63,51,63,48,48,112,240,224]),t.t)
B.a0=A.a(s([127,99,127,99,99,103,230,192]),t.t)
B.a5=A.a(s([153,90,60,231,231,60,90,153]),t.t)
B.aC=A.a(s([128,224,248,254,248,224,128,0]),t.t)
B.bI=A.a(s([2,14,62,254,62,14,2,0]),t.t)
B.cq=A.a(s([24,60,126,24,24,126,60,24]),t.t)
B.cm=A.a(s([102,102,102,102,102,0,102,0]),t.t)
B.cw=A.a(s([127,219,219,123,27,27,27,0]),t.t)
B.cx=A.a(s([62,99,56,108,108,56,204,120]),t.t)
B.bW=A.a(s([0,0,0,0,126,126,126,0]),t.t)
B.bZ=A.a(s([24,60,126,24,126,60,24,255]),t.t)
B.W=A.a(s([24,60,126,24,24,24,24,0]),t.t)
B.dk=A.a(s([24,24,24,24,126,60,24,0]),t.t)
B.dd=A.a(s([0,24,12,254,12,24,0,0]),t.t)
B.az=A.a(s([0,48,96,254,96,48,0,0]),t.t)
B.c3=A.a(s([0,0,192,192,192,254,0,0]),t.t)
B.bB=A.a(s([0,36,102,255,102,36,0,0]),t.t)
B.af=A.a(s([0,24,60,126,255,255,0,0]),t.t)
B.c_=A.a(s([0,255,255,126,60,24,0,0]),t.t)
B.b5=A.a(s([0,0,0,0,0,0,0,0]),t.t)
B.bJ=A.a(s([48,120,120,48,48,0,48,0]),t.t)
B.a3=A.a(s([108,108,108,0,0,0,0,0]),t.t)
B.at=A.a(s([108,108,254,108,254,108,108,0]),t.t)
B.c7=A.a(s([48,124,192,120,12,248,48,0]),t.t)
B.V=A.a(s([0,198,204,24,48,102,198,0]),t.t)
B.cJ=A.a(s([56,108,56,118,220,204,118,0]),t.t)
B.as=A.a(s([96,96,192,0,0,0,0,0]),t.t)
B.a_=A.a(s([24,48,96,96,96,48,24,0]),t.t)
B.bF=A.a(s([96,48,24,24,24,48,96,0]),t.t)
B.cA=A.a(s([0,102,60,255,60,102,0,0]),t.t)
B.dT=A.a(s([0,48,48,252,48,48,0,0]),t.t)
B.c9=A.a(s([0,0,0,0,0,48,48,96]),t.t)
B.bA=A.a(s([0,0,0,252,0,0,0,0]),t.t)
B.co=A.a(s([0,0,0,0,0,48,48,0]),t.t)
B.aa=A.a(s([6,12,24,48,96,192,128,0]),t.t)
B.bd=A.a(s([124,198,206,222,246,230,124,0]),t.t)
B.cr=A.a(s([48,112,48,48,48,48,252,0]),t.t)
B.c5=A.a(s([120,204,12,56,96,204,252,0]),t.t)
B.dO=A.a(s([120,204,12,56,12,204,120,0]),t.t)
B.bH=A.a(s([28,60,108,204,254,12,30,0]),t.t)
B.de=A.a(s([252,192,248,12,12,204,120,0]),t.t)
B.dw=A.a(s([56,96,192,248,204,204,120,0]),t.t)
B.c6=A.a(s([252,204,12,24,48,48,48,0]),t.t)
B.cD=A.a(s([120,204,204,120,204,204,120,0]),t.t)
B.bk=A.a(s([120,204,204,124,12,24,112,0]),t.t)
B.d7=A.a(s([0,48,48,0,0,48,48,0]),t.t)
B.aX=A.a(s([0,48,48,0,0,48,48,96]),t.t)
B.bG=A.a(s([24,48,96,192,96,48,24,0]),t.t)
B.bv=A.a(s([0,0,252,0,0,252,0,0]),t.t)
B.aH=A.a(s([96,48,24,12,24,48,96,0]),t.t)
B.ax=A.a(s([120,204,12,24,48,0,48,0]),t.t)
B.ds=A.a(s([124,198,222,222,222,192,120,0]),t.t)
B.ci=A.a(s([48,120,204,204,252,204,204,0]),t.t)
B.aR=A.a(s([252,102,102,124,102,102,252,0]),t.t)
B.aj=A.a(s([60,102,192,192,192,102,60,0]),t.t)
B.ab=A.a(s([248,108,102,102,102,108,248,0]),t.t)
B.ap=A.a(s([254,98,104,120,104,98,254,0]),t.t)
B.cu=A.a(s([254,98,104,120,104,96,240,0]),t.t)
B.av=A.a(s([60,102,192,192,206,102,62,0]),t.t)
B.ay=A.a(s([204,204,204,252,204,204,204,0]),t.t)
B.cS=A.a(s([120,48,48,48,48,48,120,0]),t.t)
B.bU=A.a(s([30,12,12,12,204,204,120,0]),t.t)
B.bM=A.a(s([230,102,108,120,108,102,230,0]),t.t)
B.bL=A.a(s([240,96,96,96,98,102,254,0]),t.t)
B.aS=A.a(s([198,238,254,254,214,198,198,0]),t.t)
B.a2=A.a(s([198,230,246,222,206,198,198,0]),t.t)
B.d1=A.a(s([56,108,198,198,198,108,56,0]),t.t)
B.bq=A.a(s([252,102,102,124,96,96,240,0]),t.t)
B.cM=A.a(s([120,204,204,204,220,120,28,0]),t.t)
B.U=A.a(s([252,102,102,124,108,102,230,0]),t.t)
B.am=A.a(s([120,204,224,112,28,204,120,0]),t.t)
B.dF=A.a(s([252,180,48,48,48,48,120,0]),t.t)
B.aP=A.a(s([204,204,204,204,204,204,252,0]),t.t)
B.a7=A.a(s([204,204,204,204,204,120,48,0]),t.t)
B.cV=A.a(s([198,198,198,214,254,238,198,0]),t.t)
B.cP=A.a(s([198,198,108,56,56,108,198,0]),t.t)
B.a9=A.a(s([204,204,204,120,48,48,120,0]),t.t)
B.Y=A.a(s([254,198,140,24,50,102,254,0]),t.t)
B.bC=A.a(s([120,96,96,96,96,96,120,0]),t.t)
B.cH=A.a(s([192,96,48,24,12,6,2,0]),t.t)
B.bE=A.a(s([120,24,24,24,24,24,120,0]),t.t)
B.dv=A.a(s([16,56,108,198,0,0,0,0]),t.t)
B.T=A.a(s([0,0,0,0,0,0,0,255]),t.t)
B.aQ=A.a(s([48,48,24,0,0,0,0,0]),t.t)
B.dl=A.a(s([0,0,120,12,124,204,118,0]),t.t)
B.cl=A.a(s([224,96,96,124,102,102,220,0]),t.t)
B.cO=A.a(s([0,0,120,204,192,204,120,0]),t.t)
B.bb=A.a(s([28,12,12,124,204,204,118,0]),t.t)
B.dy=A.a(s([0,0,120,204,252,192,120,0]),t.t)
B.aV=A.a(s([56,108,96,240,96,96,240,0]),t.t)
B.cL=A.a(s([0,0,118,204,204,124,12,248]),t.t)
B.aG=A.a(s([224,96,108,118,102,102,230,0]),t.t)
B.cB=A.a(s([48,0,112,48,48,48,120,0]),t.t)
B.bP=A.a(s([12,0,12,12,12,204,204,120]),t.t)
B.bi=A.a(s([224,96,102,108,120,108,230,0]),t.t)
B.bR=A.a(s([112,48,48,48,48,48,120,0]),t.t)
B.bz=A.a(s([0,0,204,254,254,214,198,0]),t.t)
B.bS=A.a(s([0,0,248,204,204,204,204,0]),t.t)
B.bl=A.a(s([0,0,120,204,204,204,120,0]),t.t)
B.dC=A.a(s([0,0,220,102,102,124,96,240]),t.t)
B.dz=A.a(s([0,0,118,204,204,124,12,30]),t.t)
B.bw=A.a(s([0,0,220,118,102,96,240,0]),t.t)
B.d4=A.a(s([0,0,124,192,120,12,248,0]),t.t)
B.cY=A.a(s([16,48,124,48,48,52,24,0]),t.t)
B.cf=A.a(s([0,0,204,204,204,204,118,0]),t.t)
B.b9=A.a(s([0,0,204,204,204,120,48,0]),t.t)
B.bp=A.a(s([0,0,198,214,254,254,108,0]),t.t)
B.bN=A.a(s([0,0,198,108,56,108,198,0]),t.t)
B.dI=A.a(s([0,0,204,204,204,124,12,248]),t.t)
B.dj=A.a(s([0,0,252,152,48,100,252,0]),t.t)
B.bf=A.a(s([28,48,48,224,48,48,28,0]),t.t)
B.d3=A.a(s([24,24,24,0,24,24,24,0]),t.t)
B.aK=A.a(s([224,48,48,28,48,48,224,0]),t.t)
B.dS=A.a(s([118,220,0,0,0,0,0,0]),t.t)
B.b8=A.a(s([0,16,56,108,198,198,254,0]),t.t)
B.aB=A.a(s([120,204,192,204,120,24,12,120]),t.t)
B.dh=A.a(s([0,204,0,204,204,204,126,0]),t.t)
B.dH=A.a(s([28,0,120,204,252,192,120,0]),t.t)
B.c8=A.a(s([126,195,60,6,62,102,63,0]),t.t)
B.ao=A.a(s([204,0,120,12,124,204,126,0]),t.t)
B.bc=A.a(s([224,0,120,12,124,204,126,0]),t.t)
B.ae=A.a(s([48,48,120,12,124,204,126,0]),t.t)
B.bs=A.a(s([0,0,120,192,192,120,12,56]),t.t)
B.dr=A.a(s([126,195,60,102,126,96,60,0]),t.t)
B.aT=A.a(s([204,0,120,204,252,192,120,0]),t.t)
B.d5=A.a(s([224,0,120,204,252,192,120,0]),t.t)
B.di=A.a(s([204,0,112,48,48,48,120,0]),t.t)
B.cW=A.a(s([124,198,56,24,24,24,60,0]),t.t)
B.b4=A.a(s([224,0,112,48,48,48,120,0]),t.t)
B.dN=A.a(s([198,56,108,198,254,198,198,0]),t.t)
B.d2=A.a(s([48,48,0,120,204,252,204,0]),t.t)
B.bK=A.a(s([28,0,252,96,120,96,252,0]),t.t)
B.dG=A.a(s([0,0,127,12,127,204,127,0]),t.t)
B.aY=A.a(s([62,108,204,254,204,204,206,0]),t.t)
B.dA=A.a(s([120,204,0,120,204,204,120,0]),t.t)
B.ak=A.a(s([0,204,0,120,204,204,120,0]),t.t)
B.dP=A.a(s([0,224,0,120,204,204,120,0]),t.t)
B.aW=A.a(s([120,204,0,204,204,204,126,0]),t.t)
B.cZ=A.a(s([0,224,0,204,204,204,126,0]),t.t)
B.aE=A.a(s([0,204,0,204,204,124,12,248]),t.t)
B.aq=A.a(s([195,24,60,102,102,60,24,0]),t.t)
B.db=A.a(s([204,0,204,204,204,204,120,0]),t.t)
B.a4=A.a(s([24,24,126,192,192,126,24,24]),t.t)
B.aN=A.a(s([56,108,100,240,96,230,252,0]),t.t)
B.b6=A.a(s([204,204,120,252,48,252,48,48]),t.t)
B.dm=A.a(s([248,204,204,250,198,207,198,199]),t.t)
B.bV=A.a(s([14,27,24,60,24,24,216,112]),t.t)
B.aJ=A.a(s([28,0,120,12,124,204,126,0]),t.t)
B.ck=A.a(s([56,0,112,48,48,48,120,0]),t.t)
B.aM=A.a(s([0,28,0,120,204,204,120,0]),t.t)
B.cE=A.a(s([0,28,0,204,204,204,126,0]),t.t)
B.b1=A.a(s([0,248,0,248,204,204,204,0]),t.t)
B.cU=A.a(s([252,0,204,236,252,220,204,0]),t.t)
B.al=A.a(s([60,108,108,62,0,126,0,0]),t.t)
B.ch=A.a(s([56,108,108,56,0,124,0,0]),t.t)
B.dc=A.a(s([48,0,48,96,192,204,120,0]),t.t)
B.b3=A.a(s([0,0,0,252,192,192,0,0]),t.t)
B.aL=A.a(s([0,0,0,252,12,12,0,0]),t.t)
B.d6=A.a(s([195,198,204,222,51,102,204,15]),t.t)
B.aD=A.a(s([195,198,204,219,55,111,207,3]),t.t)
B.bY=A.a(s([24,24,0,24,24,24,24,0]),t.t)
B.bX=A.a(s([0,51,102,204,102,51,0,0]),t.t)
B.bh=A.a(s([0,204,102,51,102,204,0,0]),t.t)
B.cG=A.a(s([34,136,34,136,34,136,34,136]),t.t)
B.dB=A.a(s([85,170,85,170,85,170,85,170]),t.t)
B.bQ=A.a(s([219,119,219,238,219,119,219,238]),t.t)
B.b7=A.a(s([24,24,24,24,24,24,24,24]),t.t)
B.b2=A.a(s([24,24,24,24,248,24,24,24]),t.t)
B.c4=A.a(s([24,24,248,24,248,24,24,24]),t.t)
B.dR=A.a(s([54,54,54,54,246,54,54,54]),t.t)
B.cs=A.a(s([0,0,0,0,254,54,54,54]),t.t)
B.aZ=A.a(s([0,0,248,24,248,24,24,24]),t.t)
B.ai=A.a(s([54,54,246,6,246,54,54,54]),t.t)
B.cy=A.a(s([54,54,54,54,54,54,54,54]),t.t)
B.cg=A.a(s([0,0,254,6,246,54,54,54]),t.t)
B.cC=A.a(s([54,54,246,6,254,0,0,0]),t.t)
B.aw=A.a(s([54,54,54,54,254,0,0,0]),t.t)
B.a8=A.a(s([24,24,248,24,248,0,0,0]),t.t)
B.ad=A.a(s([0,0,0,0,248,24,24,24]),t.t)
B.a6=A.a(s([24,24,24,24,31,0,0,0]),t.t)
B.c2=A.a(s([24,24,24,24,255,0,0,0]),t.t)
B.bu=A.a(s([0,0,0,0,255,24,24,24]),t.t)
B.da=A.a(s([24,24,24,24,31,24,24,24]),t.t)
B.c0=A.a(s([0,0,0,0,255,0,0,0]),t.t)
B.cz=A.a(s([24,24,24,24,255,24,24,24]),t.t)
B.cK=A.a(s([24,24,31,24,31,24,24,24]),t.t)
B.bj=A.a(s([54,54,54,54,55,54,54,54]),t.t)
B.dx=A.a(s([54,54,55,48,63,0,0,0]),t.t)
B.dq=A.a(s([0,0,63,48,55,54,54,54]),t.t)
B.bO=A.a(s([54,54,247,0,255,0,0,0]),t.t)
B.bD=A.a(s([0,0,255,0,247,54,54,54]),t.t)
B.b0=A.a(s([54,54,55,48,55,54,54,54]),t.t)
B.b_=A.a(s([0,0,255,0,255,0,0,0]),t.t)
B.dJ=A.a(s([54,54,247,0,247,54,54,54]),t.t)
B.cQ=A.a(s([24,24,255,0,255,0,0,0]),t.t)
B.R=A.a(s([54,54,54,54,255,0,0,0]),t.t)
B.dD=A.a(s([0,0,255,0,255,24,24,24]),t.t)
B.ca=A.a(s([0,0,0,0,255,54,54,54]),t.t)
B.ct=A.a(s([54,54,54,54,63,0,0,0]),t.t)
B.by=A.a(s([24,24,31,24,31,0,0,0]),t.t)
B.cn=A.a(s([0,0,31,24,31,24,24,24]),t.t)
B.cN=A.a(s([0,0,0,0,63,54,54,54]),t.t)
B.cT=A.a(s([54,54,54,54,255,54,54,54]),t.t)
B.bT=A.a(s([24,24,255,24,255,24,24,24]),t.t)
B.dn=A.a(s([24,24,24,24,248,0,0,0]),t.t)
B.be=A.a(s([0,0,0,0,31,24,24,24]),t.t)
B.cb=A.a(s([255,255,255,255,255,255,255,255]),t.t)
B.ce=A.a(s([0,0,0,0,255,255,255,255]),t.t)
B.bo=A.a(s([240,240,240,240,240,240,240,240]),t.t)
B.cv=A.a(s([15,15,15,15,15,15,15,15]),t.t)
B.d9=A.a(s([255,255,255,255,0,0,0,0]),t.t)
B.dQ=A.a(s([0,0,118,220,200,220,118,0]),t.t)
B.dt=A.a(s([0,120,204,248,204,248,192,192]),t.t)
B.au=A.a(s([0,252,204,192,192,192,192,0]),t.t)
B.cd=A.a(s([0,254,108,108,108,108,108,0]),t.t)
B.dp=A.a(s([252,204,96,48,96,204,252,0]),t.t)
B.br=A.a(s([0,0,126,216,216,216,112,0]),t.t)
B.bx=A.a(s([0,102,102,102,102,124,96,192]),t.t)
B.cI=A.a(s([0,118,220,24,24,24,24,0]),t.t)
B.an=A.a(s([252,48,120,204,204,120,48,252]),t.t)
B.aO=A.a(s([56,108,198,254,198,108,56,0]),t.t)
B.ar=A.a(s([56,108,198,198,108,108,238,0]),t.t)
B.S=A.a(s([28,48,24,124,204,204,120,0]),t.t)
B.dE=A.a(s([0,0,126,219,219,126,0,0]),t.t)
B.bt=A.a(s([6,12,126,219,219,126,96,192]),t.t)
B.ag=A.a(s([56,96,192,248,192,96,56,0]),t.t)
B.cp=A.a(s([120,204,204,204,204,204,204,0]),t.t)
B.cR=A.a(s([0,252,0,252,0,252,0,0]),t.t)
B.ac=A.a(s([48,48,252,48,48,0,252,0]),t.t)
B.bg=A.a(s([96,48,24,48,96,0,252,0]),t.t)
B.d0=A.a(s([24,48,96,48,24,0,252,0]),t.t)
B.bn=A.a(s([14,27,27,24,24,24,24,24]),t.t)
B.dg=A.a(s([24,24,24,24,24,216,216,112]),t.t)
B.cj=A.a(s([48,48,0,252,0,48,48,0]),t.t)
B.X=A.a(s([0,118,220,0,118,220,0,0]),t.t)
B.cF=A.a(s([56,108,108,56,0,0,0,0]),t.t)
B.Z=A.a(s([0,0,0,24,24,0,0,0]),t.t)
B.du=A.a(s([0,0,0,0,24,0,0,0]),t.t)
B.a1=A.a(s([15,12,12,12,236,108,60,28]),t.t)
B.c1=A.a(s([120,108,108,108,108,0,0,0]),t.t)
B.aA=A.a(s([112,24,48,96,120,0,0,0]),t.t)
B.d8=A.a(s([0,0,60,60,60,60,0,0]),t.t)
B.dU=new A.aJ(["\u263a",B.df,"\u263b",B.ah,"\u2665",B.dM,"\u2666",B.cc,"\u2663",B.ba,"\u2660",B.bm,"\u2022",B.aF,"\u25d8",B.aI,"\u25cb",B.aU,"\u25d9",B.d_,"\u2642",B.dL,"\u2640",B.dK,"\u266a",B.cX,"\u266b",B.a0,"\u263c",B.a5,"\u25ba",B.aC,"\u25c4",B.bI,"\u2195",B.cq,"\u203c",B.cm,"\xb6",B.cw,"\xa7",B.cx,"\u25ac",B.bW,"\u21a8",B.bZ,"\u2191",B.W,"\u2193",B.dk,"\u2192",B.dd,"\u2190",B.az,"\u221f",B.c3,"\u2194",B.bB,"\u25b2",B.af,"\u25bc",B.c_," ",B.b5,"!",B.bJ,'"',B.a3,"#",B.at,"$",B.c7,"%",B.V,"&",B.cJ,"'",B.as,"(",B.a_,")",B.bF,"*",B.cA,"+",B.dT,",",B.c9,"-",B.bA,".",B.co,"/",B.aa,"0",B.bd,"1",B.cr,"2",B.c5,"3",B.dO,"4",B.bH,"5",B.de,"6",B.dw,"7",B.c6,"8",B.cD,"9",B.bk,":",B.d7,";",B.aX,"<",B.bG,"=",B.bv,">",B.aH,"?",B.ax,"@",B.ds,"A",B.ci,"B",B.aR,"C",B.aj,"D",B.ab,"E",B.ap,"F",B.cu,"G",B.av,"H",B.ay,"I",B.cS,"J",B.bU,"K",B.bM,"L",B.bL,"M",B.aS,"N",B.a2,"O",B.d1,"P",B.bq,"Q",B.cM,"R",B.U,"S",B.am,"T",B.dF,"U",B.aP,"V",B.a7,"W",B.cV,"X",B.cP,"Y",B.a9,"Z",B.Y,"[",B.bC,"\\",B.cH,"]",B.bE,"^",B.dv,"_",B.T,"`",B.aQ,"a",B.dl,"b",B.cl,"c",B.cO,"d",B.bb,"e",B.dy,"f",B.aV,"g",B.cL,"h",B.aG,"i",B.cB,"j",B.bP,"k",B.bi,"l",B.bR,"m",B.bz,"n",B.bS,"o",B.bl,"p",B.dC,"q",B.dz,"r",B.bw,"s",B.d4,"t",B.cY,"u",B.cf,"v",B.b9,"w",B.bp,"x",B.bN,"y",B.dI,"z",B.dj,"{",B.bf,"|",B.d3,"}",B.aK,"~",B.dS,"\u2302",B.b8,"\xc7",B.aB,"\xfc",B.dh,"\xe9",B.dH,"\xe2",B.c8,"\xe4",B.ao,"\xe0",B.bc,"\xe5",B.ae,"\xe7",B.bs,"\xea",B.dr,"\xeb",B.aT,"\xe8",B.d5,"\xef",B.di,"\xee",B.cW,"\xec",B.b4,"\xc4",B.dN,"\xc5",B.d2,"\xc9",B.bK,"\xe6",B.dG,"\xc6",B.aY,"\xf4",B.dA,"\xf6",B.ak,"\xf2",B.dP,"\xfb",B.aW,"\xf9",B.cZ,"\xff",B.aE,"\xd6",B.aq,"\xdc",B.db,"\xa2",B.a4,"\xa3",B.aN,"\xa5",B.b6,"\u20a7",B.dm,"\u0192",B.bV,"\xe1",B.aJ,"\xed",B.ck,"\xf3",B.aM,"\xfa",B.cE,"\xf1",B.b1,"\xd1",B.cU,"\xaa",B.al,"\xba",B.ch,"\xbf",B.dc,"\u2310",B.b3,"\xac",B.aL,"\xbd",B.d6,"\xbc",B.aD,"\xa1",B.bY,"\xab",B.bX,"\xbb",B.bh,"\u2591",B.cG,"\u2592",B.dB,"\u2593",B.bQ,"\u2502",B.b7,"\u2524",B.b2,"\u2561",B.c4,"\u2562",B.dR,"\u2556",B.cs,"\u2555",B.aZ,"\u2563",B.ai,"\u2551",B.cy,"\u2557",B.cg,"\u255d",B.cC,"\u255c",B.aw,"\u255b",B.a8,"\u2510",B.ad,"\u2514",B.a6,"\u2534",B.c2,"\u252c",B.bu,"\u251c",B.da,"\u2500",B.c0,"\u253c",B.cz,"\u255e",B.cK,"\u255f",B.bj,"\u255a",B.dx,"\u2554",B.dq,"\u2569",B.bO,"\u2566",B.bD,"\u2560",B.b0,"\u2550",B.b_,"\u256c",B.dJ,"\u2567",B.cQ,"\u2568",B.R,"\u2564",B.dD,"\u2565",B.ca,"\u2559",B.ct,"\u2558",B.by,"\u2552",B.cn,"\u2553",B.cN,"\u256b",B.cT,"\u256a",B.bT,"\u2518",B.dn,"\u250c",B.be,"\u2588",B.cb,"\u2584",B.ce,"\u258c",B.bo,"\u2590",B.cv,"\u2580",B.d9,"\u03b1",B.dQ,"\xdf",B.dt,"\u0393",B.au,"\u03c0",B.cd,"\u03a3",B.dp,"\u03c3",B.br,"\xb5",B.bx,"\u03c4",B.cI,"\u03a6",B.an,"\u0398",B.aO,"\u03a9",B.ar,"\u03b4",B.S,"\u221e",B.dE,"\u03c6",B.bt,"\u03b5",B.ag,"\u2229",B.cp,"\u2261",B.cR,"\xb1",B.ac,"\u2265",B.bg,"\u2264",B.d0,"\u2320",B.bn,"\u2321",B.dg,"\xf7",B.cj,"\u2248",B.X,"\xb0",B.cF,"\u2219",B.Z,"\xb7",B.du,"\u221a",B.a1,"\u207f",B.c1,"\xb2",B.aA,"\u25a0",B.d8],A.dQ("aJ<A,i<c>>"))
B.B=new A.M("replace")
B.dV=new A.M("inverse")
B.dW=new A.a9(100,"medium")
B.dX=new A.a9(10,"easy")
B.dY=new A.a9(1500,"expert")
B.dZ=new A.M("over")
B.e_=new A.M("under")
B.e0=new A.M("stain")
B.e1=new A.M("delete")
B.e2=new A.a9(500,"hard")
B.e3=new A.M("maskDestination")
B.e4=new A.M("maskSource")
B.c=new A.b1("cross")
B.b=new A.b1("naught")
B.e5=new A.m(0,1)
B.e6=new A.m(0,-1)
B.e7=new A.m(1,0)
B.e8=new A.m(1,1)
B.e9=new A.m(1,-1)
B.ea=new A.m(-1,0)
B.eb=new A.m(-1,1)
B.ec=new A.m(-1,-1)
B.e=new A.at("ready")
B.j=new A.at("awaitingKey")
B.D=new A.at("awaitingString")
B.k=new A.at("awaitingMouseClick")
B.ed=A.K("jg")
B.ee=A.K("jh")
B.ef=A.K("h4")
B.eg=A.K("h5")
B.eh=A.K("h7")
B.ei=A.K("h8")
B.ej=A.K("h9")
B.ek=A.K("e")
B.el=A.K("hu")
B.em=A.K("d8")
B.en=A.K("hv")
B.eo=A.K("hw")})();(function staticFields(){$.dx=null
$.D=A.a([],t.f)
$.eS=null
$.eK=null
$.eJ=null
$.fA=null
$.fu=null
$.fD=null
$.dP=null
$.dV=null
$.ey=null
$.bj=A.a([],A.dQ("r<i<e>?>"))
$.ax=null
$.bx=null
$.by=null
$.er=!1
$.f=B.d
$.f_=null
$.f0=null
$.f1=null
$.f2=null
$.ef=A.dh("_lastQuoRemDigits")
$.eg=A.dh("_lastQuoRemUsed")
$.b9=A.dh("_lastRemUsed")
$.eh=A.dh("_lastRem_nsh")})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"ji","dZ",()=>A.j2("_$dart_dartClosure"))
s($,"jJ","fT",()=>B.d.bv(new A.dX()))
s($,"jr","fI",()=>A.U(A.d7({
toString:function(){return"$receiver$"}})))
s($,"js","fJ",()=>A.U(A.d7({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"jt","fK",()=>A.U(A.d7(null)))
s($,"ju","fL",()=>A.U(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"jx","fO",()=>A.U(A.d7(void 0)))
s($,"jy","fP",()=>A.U(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"jw","fN",()=>A.U(A.eX(null)))
s($,"jv","fM",()=>A.U(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"jA","fR",()=>A.U(A.eX(void 0)))
s($,"jz","fQ",()=>A.U(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"jB","eD",()=>A.hx())
s($,"jk","e_",()=>$.fT())
s($,"jG","p",()=>A.b8(0))
s($,"jF","u",()=>A.b8(1))
s($,"jD","eF",()=>$.u().K(0))
s($,"jC","eE",()=>A.b8(1e4))
r($,"jE","fS",()=>A.hn("^\\s*([+-]?)((0x[a-f0-9]+)|(\\d+)|([a-z0-9]+))\\s*$",!1))
s($,"jH","e0",()=>A.eB(B.ek))
s($,"jq","fH",()=>A.e8(8,0,t.S))
s($,"jp","fG",()=>A.e8(8,255,t.S))
s($,"jm","eC",()=>{var q="FFFFFFFFFFFFFFFF",p=A.hH(q,16)
if(p==null)A.P(A.eO("Could not parse BigInt",q))
return p})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.bR,ArrayBufferView:A.aZ,DataView:A.bS,Float32Array:A.bT,Float64Array:A.bU,Int16Array:A.bV,Int32Array:A.bW,Int8Array:A.bX,Uint16Array:A.bY,Uint32Array:A.bZ,Uint8ClampedArray:A.b_,CanvasPixelArray:A.b_,Uint8Array:A.c_})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.ap.$nativeSuperclassTag="ArrayBufferView"
A.bf.$nativeSuperclassTag="ArrayBufferView"
A.bg.$nativeSuperclassTag="ArrayBufferView"
A.aX.$nativeSuperclassTag="ArrayBufferView"
A.bh.$nativeSuperclassTag="ArrayBufferView"
A.bi.$nativeSuperclassTag="ArrayBufferView"
A.aY.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.ja
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=othello.js.map
