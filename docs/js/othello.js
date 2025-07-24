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
if(a[b]!==s){A.j6(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.ep(b)
return new s(c,this)}:function(){if(s===null)s=A.ep(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.ep(a).prototype
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
eu(a,b,c,d){return{i:a,p:b,e:c,x:d}},
er(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.es==null){A.iY()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.eT("Return interceptor for "+A.j(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.dr
if(o==null)o=$.dr=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.j1(a)
if(p!=null)return p
if(typeof a=="function")return B.O
s=Object.getPrototypeOf(a)
if(s==null)return B.C
if(s===Object.prototype)return B.C
if(typeof q=="function"){o=$.dr
if(o==null)o=$.dr=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.l,enumerable:false,writable:true,configurable:true})
return B.l}return B.l},
eL(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
h4(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.eL(r))break;++b}return b},
h5(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.b(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.eL(q))break}return b},
ag(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aL.prototype
return J.bL.prototype}if(typeof a=="string")return J.a5.prototype
if(a==null)return J.aM.prototype
if(typeof a=="boolean")return J.bK.prototype
if(Array.isArray(a))return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.W.prototype
if(typeof a=="symbol")return J.aP.prototype
if(typeof a=="bigint")return J.aN.prototype
return a}if(a instanceof A.e)return a
return J.er(a)},
eq(a){if(typeof a=="string")return J.a5.prototype
if(a==null)return a
if(Array.isArray(a))return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.W.prototype
if(typeof a=="symbol")return J.aP.prototype
if(typeof a=="bigint")return J.aN.prototype
return a}if(a instanceof A.e)return a
return J.er(a)},
iR(a){if(a==null)return a
if(Array.isArray(a))return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.W.prototype
if(typeof a=="symbol")return J.aP.prototype
if(typeof a=="bigint")return J.aN.prototype
return a}if(a instanceof A.e)return a
return J.er(a)},
iS(a){if(typeof a=="number")return J.al.prototype
if(a==null)return a
if(!(a instanceof A.e))return J.aa.prototype
return a},
iT(a){if(typeof a=="string")return J.a5.prototype
if(a==null)return a
if(!(a instanceof A.e))return J.aa.prototype
return a},
ak(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ag(a).J(a,b)},
P(a){return J.ag(a).gk(a)},
eA(a){return J.iR(a).gu(a)},
dW(a){return J.eq(a).gl(a)},
fN(a){return J.ag(a).gt(a)},
eB(a){return J.iS(a).cq(a)},
bA(a){return J.ag(a).h(a)},
fO(a){return J.iT(a).cr(a)},
bJ:function bJ(){},
bK:function bK(){},
aM:function aM(){},
aO:function aO(){},
X:function X(){},
c0:function c0(){},
aa:function aa(){},
W:function W(){},
aN:function aN(){},
aP:function aP(){},
r:function r(a){this.$ti=a},
cz:function cz(a){this.$ti=a},
bB:function bB(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
al:function al(){},
aL:function aL(){},
bL:function bL(){},
a5:function a5(){}},A={e0:function e0(){},
eM(a){return new A.aR("Field '"+a+"' has not been initialized.")},
Y(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
e7(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
eo(a,b,c){return a},
et(a){var s,r
for(s=$.D.length,r=0;r<s;++r)if(a===$.D[r])return!0
return!1},
h_(a,b,c){return new A.aJ(a,b,c.i("aJ<0>"))},
dZ(){return new A.a9("No element")},
aR:function aR(a){this.a=a},
dR:function dR(){},
cK:function cK(){},
aF:function aF(){},
a7:function a7(){},
an:function an(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
b5:function b5(a,b,c){this.a=a
this.b=b
this.$ti=c},
c8:function c8(a,b){this.a=a
this.b=b},
aJ:function aJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
aK:function aK(a,b){this.a=a
this.b=b
this.c=-1},
aH:function aH(){},
b1:function b1(a,b){this.a=a
this.$ti=b},
fy(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
jA(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
j(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.bA(a)
return s},
ar(a){var s,r=$.eN
if(r==null)r=$.eN=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
cE(a){var s,r,q,p
if(a instanceof A.e)return A.C(A.bz(a),null)
s=J.ag(a)
if(s===B.N||s===B.P||t.J.b(a)){r=B.m(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.C(A.bz(a),null)},
eO(a){if(a==null||typeof a=="number"||A.ek(a))return J.bA(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.a3)return a.h(0)
if(a instanceof A.aw)return a.bd(!0)
return"Instance of '"+A.cE(a)+"'"},
ha(a){var s=a.$thrownJsError
if(s==null)return null
return A.ah(s)},
hb(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.x(a,s)
a.$thrownJsError=s
s.stack=""}},
b(a,b){if(a==null)J.dW(a)
throw A.d(A.fs(a,b))},
fs(a,b){var s,r="index"
if(!A.fi(b))return new A.K(!0,b,r,null)
s=J.dW(a)
if(b<0||b>=s)return A.eK(b,s,a,r)
return new A.as(null,null,!0,b,r,"Value not in range")},
en(a){return new A.K(!0,a,null,null)},
d(a){return A.x(a,new Error())},
x(a,b){var s
if(a==null)a=new A.R()
b.dartException=a
s=A.j7
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
j7(){return J.bA(this.dartException)},
U(a,b){throw A.x(a,b==null?new Error():b)},
y(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.U(A.i8(a,b,c),s)},
i8(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.b4("'"+s+"': Cannot "+o+" "+l+k+n)},
dS(a){throw A.d(A.a4(a))},
S(a){var s,r,q,p,o,n
a=A.j4(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.a([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.d0(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
d1(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
eS(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
e1(a,b){var s=b==null,r=s?null:b.method
return new A.bM(a,r,s?null:b.receiver)},
aC(a){if(a==null)return new A.cC(a)
if(a instanceof A.aG)return A.a1(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.a1(a,a.dartException)
return A.iF(a)},
a1(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
iF(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.a.aa(r,16)&8191)===10)switch(q){case 438:return A.a1(a,A.e1(A.j(s)+" (Error "+q+")",null))
case 445:case 5007:A.j(s)
return A.a1(a,new A.b_())}}if(a instanceof TypeError){p=$.fB()
o=$.fC()
n=$.fD()
m=$.fE()
l=$.fH()
k=$.fI()
j=$.fG()
$.fF()
i=$.fK()
h=$.fJ()
g=p.I(s)
if(g!=null)return A.a1(a,A.e1(s,g))
else{g=o.I(s)
if(g!=null){g.method="call"
return A.a1(a,A.e1(s,g))}else if(n.I(s)!=null||m.I(s)!=null||l.I(s)!=null||k.I(s)!=null||j.I(s)!=null||m.I(s)!=null||i.I(s)!=null||h.I(s)!=null)return A.a1(a,new A.b_())}return A.a1(a,new A.c6(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.b3()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.a1(a,new A.K(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.b3()
return a},
ah(a){var s
if(a instanceof A.aG)return a.b
if(a==null)return new A.bj(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.bj(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
ev(a){if(a==null)return J.P(a)
if(typeof a=="object")return A.ar(a)
return J.P(a)},
iL(a){if(typeof a=="number")return B.y.gk(a)
if(a instanceof A.co)return A.ar(a)
if(a instanceof A.aw)return a.gk(a)
return A.ev(a)},
iP(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.ag(0,a[s],a[r])}return b},
ii(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(A.bG("Unsupported number of arguments for wrapped closure"))},
cq(a,b){var s=a.$identity
if(!!s)return s
s=A.iM(a,b)
a.$identity=s
return s},
iM(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.ii)},
fV(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.cL().constructor.prototype):Object.create(new A.aD(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.eG(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.fR(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.eG(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
fR(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.fP)}throw A.d("Error in functionType of tearoff")},
fS(a,b,c,d){var s=A.eF
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
eG(a,b,c,d){if(c)return A.fU(a,b,d)
return A.fS(b.length,d,a,b)},
fT(a,b,c,d){var s=A.eF,r=A.fQ
switch(b?-1:a){case 0:throw A.d(new A.c2("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
fU(a,b,c){var s,r
if($.eD==null)$.eD=A.eC("interceptor")
if($.eE==null)$.eE=A.eC("receiver")
s=b.length
r=A.fT(s,c,a,b)
return r},
ep(a){return A.fV(a)},
fP(a,b){return A.bq(v.typeUniverse,A.bz(a.a),b)},
eF(a){return a.a},
fQ(a){return a.b},
eC(a){var s,r,q,p=new A.aD("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.d(A.a2("Field name "+a+" not found.",null))},
iU(a){return v.getIsolateTag(a)},
j1(a){var s,r,q,p,o,n=$.ft.$1(a),m=$.dJ[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.dP[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.fp.$2(a,n)
if(q!=null){m=$.dJ[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.dP[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.dQ(s)
$.dJ[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.dP[n]=s
return s}if(p==="-"){o=A.dQ(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.fv(a,s)
if(p==="*")throw A.d(A.eT(n))
if(v.leafTags[n]===true){o=A.dQ(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.fv(a,s)},
fv(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.eu(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
dQ(a){return J.eu(a,!1,null,!!a.$iB)},
j3(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.dQ(s)
else return J.eu(s,c,null,null)},
iY(){if(!0===$.es)return
$.es=!0
A.iZ()},
iZ(){var s,r,q,p,o,n,m,l
$.dJ=Object.create(null)
$.dP=Object.create(null)
A.iX()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.fw.$1(o)
if(n!=null){m=A.j3(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
iX(){var s,r,q,p,o,n,m=B.F()
m=A.aA(B.G,A.aA(B.H,A.aA(B.n,A.aA(B.n,A.aA(B.I,A.aA(B.J,A.aA(B.K(B.m),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.ft=new A.dM(p)
$.fp=new A.dN(o)
$.fw=new A.dO(n)},
aA(a,b){return a(b)||b},
iN(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
h6(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.d(A.eI("Illegal RegExp pattern ("+String(o)+")",a))},
j4(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
m:function m(a,b){this.a=a
this.b=b},
cl:function cl(a,b){this.a=a
this.b=b},
bF:function bF(){},
aI:function aI(a,b){this.a=a
this.$ti=b},
d0:function d0(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
b_:function b_(){},
bM:function bM(a,b,c){this.a=a
this.b=b
this.c=c},
c6:function c6(a){this.a=a},
cC:function cC(a){this.a=a},
aG:function aG(a,b){this.a=a
this.b=b},
bj:function bj(a){this.a=a
this.b=null},
a3:function a3(){},
cr:function cr(){},
cs:function cs(){},
cQ:function cQ(){},
cL:function cL(){},
aD:function aD(a,b){this.a=a
this.b=b},
c2:function c2(a){this.a=a},
a6:function a6(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cA:function cA(a,b){this.a=a
this.b=b
this.c=null},
aT:function aT(a,b){this.a=a
this.$ti=b},
bO:function bO(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
aS:function aS(a,b){this.a=a
this.$ti=b},
bN:function bN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aQ:function aQ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dM:function dM(a){this.a=a},
dN:function dN(a){this.a=a},
dO:function dO(a){this.a=a},
aw:function aw(){},
ck:function ck(){},
cy:function cy(a,b){var _=this
_.a=a
_.b=b
_.e=_.c=null},
dt:function dt(a){this.b=a},
j6(a){throw A.x(new A.aR("Field '"+a+"' has been assigned during initialization."),new Error())},
aj(){throw A.x(A.eM(""),new Error())},
db(a){var s=new A.da(a)
return s.b=s},
da:function da(a){this.a=a
this.b=null},
ad(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.fs(b,a))},
bP:function bP(){},
aY:function aY(){},
bQ:function bQ(){},
ap:function ap(){},
aW:function aW(){},
aX:function aX(){},
bR:function bR(){},
bS:function bS(){},
bT:function bT(){},
bU:function bU(){},
bV:function bV(){},
bW:function bW(){},
bX:function bX(){},
aZ:function aZ(){},
bY:function bY(){},
bd:function bd(){},
be:function be(){},
bf:function bf(){},
bg:function bg(){},
e4(a,b){var s=b.c
return s==null?b.c=A.bo(a,"Q",[b.x]):s},
eP(a){var s=a.w
if(s===6||s===7)return A.eP(a.x)
return s===11||s===12},
hg(a){return a.as},
dK(a){return A.dA(v.typeUniverse,a,!1)},
ae(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.ae(a1,s,a3,a4)
if(r===s)return a2
return A.f9(a1,r,!0)
case 7:s=a2.x
r=A.ae(a1,s,a3,a4)
if(r===s)return a2
return A.f8(a1,r,!0)
case 8:q=a2.y
p=A.az(a1,q,a3,a4)
if(p===q)return a2
return A.bo(a1,a2.x,p)
case 9:o=a2.x
n=A.ae(a1,o,a3,a4)
m=a2.y
l=A.az(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.eg(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.az(a1,j,a3,a4)
if(i===j)return a2
return A.fa(a1,k,i)
case 11:h=a2.x
g=A.ae(a1,h,a3,a4)
f=a2.y
e=A.iC(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.f7(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.az(a1,d,a3,a4)
o=a2.x
n=A.ae(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.eh(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.d(A.bD("Attempted to substitute unexpected RTI kind "+a0))}},
az(a,b,c,d){var s,r,q,p,o=b.length,n=A.dB(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.ae(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
iD(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.dB(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.ae(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
iC(a,b,c,d){var s,r=b.a,q=A.az(a,r,c,d),p=b.b,o=A.az(a,p,c,d),n=b.c,m=A.iD(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.ci()
s.a=q
s.b=o
s.c=m
return s},
a(a,b){a[v.arrayRti]=b
return a},
fr(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.iW(s)
return a.$S()}return null},
j_(a,b){var s
if(A.eP(b))if(a instanceof A.a3){s=A.fr(a)
if(s!=null)return s}return A.bz(a)},
bz(a){if(a instanceof A.e)return A.a0(a)
if(Array.isArray(a))return A.ei(a)
return A.ej(J.ag(a))},
ei(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
a0(a){var s=a.$ti
return s!=null?s:A.ej(a)},
ej(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.ig(a,s)},
ig(a,b){var s=a instanceof A.a3?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.hR(v.typeUniverse,s.name)
b.$ccache=r
return r},
iW(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.dA(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
iV(a){return A.af(A.a0(a))},
em(a){var s
if(a instanceof A.aw)return A.iO(a.$r,a.b6())
s=a instanceof A.a3?A.fr(a):null
if(s!=null)return s
if(t.B.b(a))return J.fN(a).a
if(Array.isArray(a))return A.ei(a)
return A.bz(a)},
af(a){var s=a.r
return s==null?a.r=new A.co(a):s},
iO(a,b){var s,r,q=b,p=q.length
if(p===0)return t.F
if(0>=p)return A.b(q,0)
s=A.bq(v.typeUniverse,A.em(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.b(q,r)
s=A.fb(v.typeUniverse,s,A.em(q[r]))}return A.bq(v.typeUniverse,s,a)},
J(a){return A.af(A.dA(v.typeUniverse,a,!1))},
ie(a){var s,r,q,p,o=this
if(o===t.K)return A.T(o,a,A.io)
if(A.ai(o))return A.T(o,a,A.is)
s=o.w
if(s===6)return A.T(o,a,A.ic)
if(s===1)return A.T(o,a,A.fj)
if(s===7)return A.T(o,a,A.ij)
if(o===t.S)r=A.fi
else if(o===t.i||o===t.H)r=A.im
else if(o===t.N)r=A.iq
else r=o===t.y?A.ek:null
if(r!=null)return A.T(o,a,r)
if(s===8){q=o.x
if(o.y.every(A.ai)){o.f="$i"+q
if(q==="i")return A.T(o,a,A.il)
return A.T(o,a,A.ir)}}else if(s===10){p=A.iN(o.x,o.y)
return A.T(o,a,p==null?A.fj:p)}return A.T(o,a,A.ia)},
T(a,b,c){a.b=c
return a.b(b)},
id(a){var s=this,r=A.i9
if(A.ai(s))r=A.i3
else if(s===t.K)r=A.i0
else if(A.aB(s))r=A.ib
if(s===t.S)r=A.hX
else if(s===t.Y)r=A.hY
else if(s===t.N)r=A.i1
else if(s===t.M)r=A.i2
else if(s===t.y)r=A.hT
else if(s===t.u)r=A.hU
else if(s===t.H)r=A.hZ
else if(s===t.d)r=A.i_
else if(s===t.i)r=A.hV
else if(s===t.I)r=A.hW
s.a=r
return s.a(a)},
ia(a){var s=this
if(a==null)return A.aB(s)
return A.j0(v.typeUniverse,A.j_(a,s),s)},
ic(a){if(a==null)return!0
return this.x.b(a)},
ir(a){var s,r=this
if(a==null)return A.aB(r)
s=r.f
if(a instanceof A.e)return!!a[s]
return!!J.ag(a)[s]},
il(a){var s,r=this
if(a==null)return A.aB(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.e)return!!a[s]
return!!J.ag(a)[s]},
i9(a){var s=this
if(a==null){if(A.aB(s))return a}else if(s.b(a))return a
throw A.x(A.fe(a,s),new Error())},
ib(a){var s=this
if(a==null||s.b(a))return a
throw A.x(A.fe(a,s),new Error())},
fe(a,b){return new A.bm("TypeError: "+A.f1(a,A.C(b,null)))},
f1(a,b){return A.ct(a)+": type '"+A.C(A.em(a),null)+"' is not a subtype of type '"+b+"'"},
N(a,b){return new A.bm("TypeError: "+A.f1(a,b))},
ij(a){var s=this
return s.x.b(a)||A.e4(v.typeUniverse,s).b(a)},
io(a){return a!=null},
i0(a){if(a!=null)return a
throw A.x(A.N(a,"Object"),new Error())},
is(a){return!0},
i3(a){return a},
fj(a){return!1},
ek(a){return!0===a||!1===a},
hT(a){if(!0===a)return!0
if(!1===a)return!1
throw A.x(A.N(a,"bool"),new Error())},
hU(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.x(A.N(a,"bool?"),new Error())},
hV(a){if(typeof a=="number")return a
throw A.x(A.N(a,"double"),new Error())},
hW(a){if(typeof a=="number")return a
if(a==null)return a
throw A.x(A.N(a,"double?"),new Error())},
fi(a){return typeof a=="number"&&Math.floor(a)===a},
hX(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.x(A.N(a,"int"),new Error())},
hY(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.x(A.N(a,"int?"),new Error())},
im(a){return typeof a=="number"},
hZ(a){if(typeof a=="number")return a
throw A.x(A.N(a,"num"),new Error())},
i_(a){if(typeof a=="number")return a
if(a==null)return a
throw A.x(A.N(a,"num?"),new Error())},
iq(a){return typeof a=="string"},
i1(a){if(typeof a=="string")return a
throw A.x(A.N(a,"String"),new Error())},
i2(a){if(typeof a=="string")return a
if(a==null)return a
throw A.x(A.N(a,"String?"),new Error())},
fm(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.C(a[q],b)
return s},
ix(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.fm(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.C(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
ff(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
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
if(l===8){p=A.iE(a.x)
o=a.y
return o.length>0?p+("<"+A.fm(o,b)+">"):p}if(l===10)return A.ix(a,b)
if(l===11)return A.ff(a,b,null)
if(l===12)return A.ff(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.b(b,n)
return b[n]}return"?"},
iE(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
hS(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
hR(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.dA(a,b,!1)
else if(typeof m=="number"){s=m
r=A.bp(a,5,"#")
q=A.dB(s)
for(p=0;p<s;++p)q[p]=r
o=A.bo(a,b,q)
n[b]=o
return o}else return m},
hQ(a,b){return A.fc(a.tR,b)},
hP(a,b){return A.fc(a.eT,b)},
dA(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.f5(A.f3(a,null,b,!1))
r.set(b,s)
return s},
bq(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.f5(A.f3(a,b,c,!0))
q.set(c,r)
return r},
fb(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.eg(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
a_(a,b){b.a=A.id
b.b=A.ie
return b},
bp(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.H(null,null)
s.w=b
s.as=c
r=A.a_(a,s)
a.eC.set(c,r)
return r},
f9(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.hN(a,b,r,c)
a.eC.set(r,s)
return s},
hN(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.ai(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.aB(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.H(null,null)
q.w=6
q.x=b
q.as=c
return A.a_(a,q)},
f8(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.hL(a,b,r,c)
a.eC.set(r,s)
return s},
hL(a,b,c,d){var s,r
if(d){s=b.w
if(A.ai(b)||b===t.K)return b
else if(s===1)return A.bo(a,"Q",[b])
else if(b===t.P||b===t.T)return t.O}r=new A.H(null,null)
r.w=7
r.x=b
r.as=c
return A.a_(a,r)},
hO(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.H(null,null)
s.w=13
s.x=b
s.as=q
r=A.a_(a,s)
a.eC.set(q,r)
return r},
bn(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
hK(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
bo(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.bn(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.H(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.a_(a,r)
a.eC.set(p,q)
return q},
eg(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.bn(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.H(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.a_(a,o)
a.eC.set(q,n)
return n},
fa(a,b,c){var s,r,q="+"+(b+"("+A.bn(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.H(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.a_(a,s)
a.eC.set(q,r)
return r},
f7(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.bn(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.bn(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.hK(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.H(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.a_(a,p)
a.eC.set(r,o)
return o},
eh(a,b,c,d){var s,r=b.as+("<"+A.bn(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.hM(a,b,c,r,d)
a.eC.set(r,s)
return s},
hM(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.dB(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.ae(a,b,r,0)
m=A.az(a,c,r,0)
return A.eh(a,n,m,c!==m)}}l=new A.H(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.a_(a,l)},
f3(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
f5(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.hD(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.f4(a,r,l,k,!1)
else if(q===46)r=A.f4(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.ac(a.u,a.e,k.pop()))
break
case 94:k.push(A.hO(a.u,k.pop()))
break
case 35:k.push(A.bp(a.u,5,"#"))
break
case 64:k.push(A.bp(a.u,2,"@"))
break
case 126:k.push(A.bp(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.hF(a,k)
break
case 38:A.hE(a,k)
break
case 63:p=a.u
k.push(A.f9(p,A.ac(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.f8(p,A.ac(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.hC(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.f6(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.hH(a.u,a.e,o)
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
return A.ac(a.u,a.e,m)},
hD(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
f4(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.hS(s,o.x)[p]
if(n==null)A.U('No "'+p+'" in "'+A.hg(o)+'"')
d.push(A.bq(s,o,n))}else d.push(p)
return m},
hF(a,b){var s,r=a.u,q=A.f2(a,b),p=b.pop()
if(typeof p=="string")b.push(A.bo(r,p,q))
else{s=A.ac(r,a.e,p)
switch(s.w){case 11:b.push(A.eh(r,s,q,a.n))
break
default:b.push(A.eg(r,s,q))
break}}},
hC(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.f2(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.ac(p,a.e,o)
q=new A.ci()
q.a=s
q.b=n
q.c=m
b.push(A.f7(p,r,q))
return
case-4:b.push(A.fa(p,b.pop(),s))
return
default:throw A.d(A.bD("Unexpected state under `()`: "+A.j(o)))}},
hE(a,b){var s=b.pop()
if(0===s){b.push(A.bp(a.u,1,"0&"))
return}if(1===s){b.push(A.bp(a.u,4,"1&"))
return}throw A.d(A.bD("Unexpected extended operation "+A.j(s)))},
f2(a,b){var s=b.splice(a.p)
A.f6(a.u,a.e,s)
a.p=b.pop()
return s},
ac(a,b,c){if(typeof c=="string")return A.bo(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.hG(a,b,c)}else return c},
f6(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.ac(a,b,c[s])},
hH(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.ac(a,b,c[s])},
hG(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.d(A.bD("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.d(A.bD("Bad index "+c+" for "+b.h(0)))},
j0(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.t(a,b,null,c,null)
r.set(c,s)}return s},
t(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.ai(d))return!0
s=b.w
if(s===4)return!0
if(A.ai(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.t(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.t(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.t(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.t(a,b.x,c,d,e))return!1
return A.t(a,A.e4(a,b),c,d,e)}if(s===6)return A.t(a,p,c,d,e)&&A.t(a,b.x,c,d,e)
if(q===7){if(A.t(a,b,c,d.x,e))return!0
return A.t(a,b,c,A.e4(a,d),e)}if(q===6)return A.t(a,b,c,p,e)||A.t(a,b,c,d.x,e)
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
if(!A.t(a,j,c,i,e)||!A.t(a,i,e,j,c))return!1}return A.fh(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.fh(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.ik(a,b,c,d,e)}if(o&&q===10)return A.ip(a,b,c,d,e)
return!1},
fh(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
ik(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
for(;n!==m;){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.bq(a,b,r[o])
return A.fd(a,p,null,c,d.y,e)}return A.fd(a,b.y,null,c,d.y,e)},
fd(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.t(a,b[s],d,e[s],f))return!1
return!0},
ip(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.t(a,r[s],c,q[s],e))return!1
return!0},
aB(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.ai(a))if(s!==6)r=s===7&&A.aB(a.x)
return r},
ai(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
fc(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
dB(a){return a>0?new Array(a):v.typeUniverse.sEA},
H:function H(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
ci:function ci(){this.c=this.b=this.a=null},
co:function co(a){this.a=a},
ch:function ch(){},
bm:function bm(a){this.a=a},
hp(){var s,r,q
if(self.scheduleImmediate!=null)return A.iG()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.cq(new A.d4(s),1)).observe(r,{childList:true})
return new A.d3(s,r,q)}else if(self.setImmediate!=null)return A.iH()
return A.iI()},
hq(a){self.scheduleImmediate(A.cq(new A.d5(a),0))},
hr(a){self.setImmediate(A.cq(new A.d6(a),0))},
hs(a){A.e8(B.x,a)},
e8(a,b){var s=B.a.n(a.a,1000)
return A.hI(s,b)},
eR(a,b){var s=B.a.n(a.a,1000)
return A.hJ(s,b)},
hI(a,b){var s=new A.bl()
s.bF(a,b)
return s},
hJ(a,b){var s=new A.bl()
s.bG(a,b)
return s},
bx(a){return new A.c9(new A.l($.f,a.i("l<0>")),a.i("c9<0>"))},
bt(a,b){a.$2(0,null)
b.b=!0
return b.a},
O(a,b){A.i4(a,b)},
bs(a,b){var s,r=a==null?b.$ti.c.a(a):a
if(!b.b)b.a.an(r)
else{s=b.a
if(b.$ti.i("Q<1>").b(r))s.b0(r)
else s.b3(r)}},
br(a,b){var s=A.aC(a),r=A.ah(a),q=b.a
if(b.b)q.W(new A.E(s,r))
else q.b_(new A.E(s,r))},
i4(a,b){var s,r,q=new A.dD(b),p=new A.dE(b)
if(a instanceof A.l)a.bc(q,p,t.z)
else{s=t.z
if(a instanceof A.l)a.by(q,p,s)
else{r=new A.l($.f,t.c)
r.a=8
r.c=a
r.bc(q,p,s)}}},
by(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.f.aO(new A.dH(s))},
dY(a){var s
if(t.Q.b(a)){s=a.gV()
if(s!=null)return s}return B.h},
eJ(a,b){var s
if(!b.b(null))throw A.d(A.dX(null,"computation","The type parameter is not nullable"))
s=new A.l($.f,b.i("l<0>"))
A.hk(a,new A.cv(null,s,b))
return s},
ih(a,b){if($.f===B.d)return null
return null},
dh(a,b,c){var s,r,q,p={},o=p.a=a
for(;s=o.a,(s&4)!==0;){o=o.c
p.a=o}if(o===b){s=A.hi()
b.b_(new A.E(new A.K(!0,o,null,"Cannot complete a future with itself"),s))
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
A.ab(b,q)
return}b.a^=2
A.ay(null,null,b.b,new A.di(p,b))},
ab(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;!0;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){f=f.c
A.cp(f.a,f.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.ab(g.a,f)
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
if(r){A.cp(m.a,m.b)
return}j=$.f
if(j!==k)$.f=k
else j=null
f=f.c
if((f&15)===8)new A.dm(s,g,p).$0()
else if(q){if((f&1)!==0)new A.dl(s,m).$0()}else if((f&2)!==0)new A.dk(g,s).$0()
if(j!=null)$.f=j
f=s.c
if(f instanceof A.l){r=s.a.$ti
r=r.i("Q<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.a8(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.dh(f,i,!0)
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
iy(a,b){if(t.C.b(a))return b.aO(a)
if(t.v.b(a))return a
throw A.d(A.dX(a,"onError",u.c))},
iu(){var s,r
for(s=$.ax;s!=null;s=$.ax){$.bw=null
r=s.b
$.ax=r
if(r==null)$.bv=null
s.a.$0()}},
iB(){$.el=!0
try{A.iu()}finally{$.bw=null
$.el=!1
if($.ax!=null)$.ex().$1(A.fq())}},
fo(a){var s=new A.ca(a),r=$.bv
if(r==null){$.ax=$.bv=s
if(!$.el)$.ex().$1(A.fq())}else $.bv=r.b=s},
iA(a){var s,r,q,p=$.ax
if(p==null){A.fo(a)
$.bw=$.bv
return}s=new A.ca(a)
r=$.bw
if(r==null){s.b=p
$.ax=$.bw=s}else{q=r.b
s.b=q
$.bw=r.b=s
if(q==null)$.bv=s}},
fx(a){var s=null,r=$.f
if(B.d===r){A.ay(s,s,B.d,a)
return}A.ay(s,s,r,r.aC(a))},
jg(a){A.eo(a,"stream",t.K)
return new A.cm()},
e6(a){return new A.b6(null,null,a.i("b6<0>"))},
fn(a){return},
f0(a,b){return b==null?A.iJ():b},
hA(a,b){if(b==null)b=A.iK()
if(t.k.b(b))return a.aO(b)
if(t.e.b(b))return b
throw A.d(A.a2("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
iv(a){},
iw(a,b){A.cp(a,b)},
i7(a,b,c){var s,r,q=a.bg()
if(q!==$.dU()){s=q.$ti
r=$.f
q.a4(new A.Z(new A.l(r,s),8,new A.dF(b,c),null,s.i("Z<1,1>")))}else b.a6(c)},
hk(a,b){var s=$.f
if(s===B.d)return A.e8(a,b)
return A.e8(a,s.aC(b))},
hl(a,b){var s=$.f
if(s===B.d)return A.eR(a,b)
return A.eR(a,s.c5(b,t.E))},
cp(a,b){A.iA(new A.dG(a,b))},
fk(a,b,c,d){var s,r=$.f
if(r===c)return d.$0()
$.f=c
s=r
try{r=d.$0()
return r}finally{$.f=s}},
fl(a,b,c,d,e){var s,r=$.f
if(r===c)return d.$1(e)
$.f=c
s=r
try{r=d.$1(e)
return r}finally{$.f=s}},
iz(a,b,c,d,e,f){var s,r=$.f
if(r===c)return d.$2(e,f)
$.f=c
s=r
try{r=d.$2(e,f)
return r}finally{$.f=s}},
ay(a,b,c,d){if(B.d!==c)d=c.aC(d)
A.fo(d)},
d4:function d4(a){this.a=a},
d3:function d3(a,b,c){this.a=a
this.b=b
this.c=c},
d5:function d5(a){this.a=a},
d6:function d6(a){this.a=a},
bl:function bl(){this.c=0},
dz:function dz(a,b){this.a=a
this.b=b},
dy:function dy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c9:function c9(a,b){this.a=a
this.b=!1
this.$ti=b},
dD:function dD(a){this.a=a},
dE:function dE(a){this.a=a},
dH:function dH(a){this.a=a},
E:function E(a,b){this.a=a
this.b=b},
F:function F(a,b){this.a=a
this.$ti=b},
b9:function b9(a,b,c,d,e){var _=this
_.ay=0
_.CW=_.ch=null
_.w=a
_.a=b
_.d=c
_.e=d
_.r=_.f=null
_.$ti=e},
cc:function cc(){},
b6:function b6(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null
_.$ti=c},
cv:function cv(a,b,c){this.a=a
this.b=b
this.c=c},
Z:function Z(a,b,c,d,e){var _=this
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
de:function de(a,b){this.a=a
this.b=b},
dj:function dj(a,b){this.a=a
this.b=b},
di:function di(a,b){this.a=a
this.b=b},
dg:function dg(a,b){this.a=a
this.b=b},
df:function df(a,b){this.a=a
this.b=b},
dm:function dm(a,b,c){this.a=a
this.b=b
this.c=c},
dn:function dn(a,b){this.a=a
this.b=b},
dp:function dp(a){this.a=a},
dl:function dl(a,b){this.a=a
this.b=b},
dk:function dk(a,b){this.a=a
this.b=b},
ca:function ca(a){this.a=a
this.b=null},
au:function au(){},
cO:function cO(a,b){this.a=a
this.b=b},
cP:function cP(a,b){this.a=a
this.b=b},
cM:function cM(a){this.a=a},
cN:function cN(a,b,c){this.a=a
this.b=b
this.c=c},
ba:function ba(){},
ce:function ce(){},
cd:function cd(){},
bk:function bk(){},
cg:function cg(){},
cf:function cf(a){this.b=a
this.a=null},
cj:function cj(){this.a=0
this.c=this.b=null},
du:function du(a,b){this.a=a
this.b=b},
bb:function bb(a){this.a=1
this.b=a
this.c=null},
cm:function cm(){},
dF:function dF(a,b){this.a=a
this.b=b},
dC:function dC(){},
dG:function dG(a,b){this.a=a
this.b=b},
dv:function dv(){},
dw:function dw(a,b){this.a=a
this.b=b},
dx:function dx(a,b,c){this.a=a
this.b=b
this.c=c},
h7(a,b){return new A.a6(a.i("@<0>").ao(b).i("a6<1,2>"))},
h8(a){return new A.bc(a.i("bc<0>"))},
ef(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
hB(a,b,c){var s=new A.av(a,b,c.i("av<0>"))
s.c=a.e
return s},
e3(a){var s,r
if(A.et(a))return"{...}"
s=new A.c4("")
try{r={}
$.D.push(a)
s.a+="{"
r.a=!0
a.aG(0,new A.cB(r,s))
s.a+="}"}finally{if(0>=$.D.length)return A.b($.D,-1)
$.D.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
bc:function bc(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ds:function ds(a){this.a=a
this.c=this.b=null},
av:function av(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
o:function o(){},
aU:function aU(){},
cB:function cB(a,b){this.a=a
this.b=b},
b2:function b2(){},
bi:function bi(){},
hv(a,b){var s,r,q=$.p(),p=a.length,o=4-p%4
if(o===4)o=0
for(s=0,r=0;r<p;++r){s=s*10+a.charCodeAt(r)-48;++o
if(o===4){q=q.a3(0,$.ey()).aQ(0,A.b7(s))
s=0
o=0}}if(b)return q.K(0)
return q},
ed(a){if(48<=a&&a<=57)return a-48
return(a|32)-97+10},
hw(a,b,c){var s,r,q,p,o,n,m,l=a.length,k=l-b,j=B.y.c6(k/4),i=new Uint16Array(j),h=j-1,g=k-h*4
for(s=b,r=0,q=0;q<g;++q,s=p){p=s+1
if(!(s<l))return A.b(a,s)
o=A.ed(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}n=h-1
if(!(h>=0))return A.b(i,h)
i[h]=r
for(;s<l;n=m){for(r=0,q=0;q<4;++q,s=p){p=s+1
if(!(s>=0&&s<l))return A.b(a,s)
o=A.ed(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}m=n-1
if(!(n>=0))return A.b(i,n)
i[n]=r}if(j===1){if(0>=j)return A.b(i,0)
l=i[0]===0}else l=!1
if(l)return $.p()
l=A.v(j,i)
return new A.q(l===0?!1:c,i,l)},
hx(a,b,c){var s,r,q,p=$.p(),o=A.b7(b)
for(s=a.length,r=0;r<s;++r){q=A.ed(a.charCodeAt(r))
if(q>=b)return null
p=p.a3(0,o).aQ(0,A.b7(q))}if(c)return p.K(0)
return p},
hz(a,b){var s,r,q,p,o,n,m,l=null
if(a==="")return l
s=$.fL().c8(a)
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
if(b<2||b>36)throw A.d(A.c1(b,2,36,"radix",l))
if(b===10&&o!=null)return A.hv(o,p)
if(b===16)r=o!=null||m!=null
else r=!1
if(r){if(o==null){m.toString
r=m}else r=o
return A.hw(r,0,p)}r=o==null?m:o
if(r==null){n.toString
r=n}return A.hx(r,b,p)},
v(a,b){var s,r=b.length
while(!0){if(a>0){s=a-1
if(!(s<r))return A.b(b,s)
s=b[s]===0}else s=!1
if(!s)break;--a}return a},
ec(a,b,c,d){var s,r,q,p=new Uint16Array(d),o=c-b
for(s=a.length,r=0;r<o;++r){q=b+r
if(!(q>=0&&q<s))return A.b(a,q)
q=a[q]
if(!(r<d))return A.b(p,r)
p[r]=q}return p},
b7(a){var s,r,q,p,o=a<0
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
return new A.q(r===0?!1:o,s,r)}r=B.a.n(B.a.gbf(a)-1,16)+1
s=new Uint16Array(r)
for(q=0;a!==0;q=p){p=q+1
if(!(q<r))return A.b(s,q)
s[q]=a&65535
a=B.a.n(a,65536)}r=A.v(r,s)
return new A.q(r===0?!1:o,s,r)},
ee(a,b,c,d){var s,r,q,p,o
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
eZ(a,b,c,d){var s,r,q,p,o,n,m,l=B.a.n(c,16),k=B.a.j(c,16),j=16-k,i=B.a.m(1,j)-1
for(s=b-1,r=a.length,q=d.$flags|0,p=0;s>=0;--s){if(!(s<r))return A.b(a,s)
o=a[s]
n=s+l+1
m=B.a.F(o,j)
q&2&&A.y(d)
if(!(n>=0&&n<d.length))return A.b(d,n)
d[n]=(m|p)>>>0
p=B.a.m(o&i,k)}q&2&&A.y(d)
if(!(l>=0&&l<d.length))return A.b(d,l)
d[l]=p},
eU(a,b,c,d){var s,r,q,p=B.a.n(c,16)
if(B.a.j(c,16)===0)return A.ee(a,b,p,d)
s=b+p+1
A.eZ(a,b,c,d)
for(r=d.$flags|0,q=p;--q,q>=0;){r&2&&A.y(d)
if(!(q<d.length))return A.b(d,q)
d[q]=0}r=s-1
if(!(r>=0&&r<d.length))return A.b(d,r)
if(d[r]===0)s=r
return s},
hy(a,b,c,d){var s,r,q,p,o,n,m=B.a.n(c,16),l=B.a.j(c,16),k=16-l,j=B.a.m(1,l)-1,i=a.length
if(!(m>=0&&m<i))return A.b(a,m)
s=B.a.F(a[m],l)
r=b-m-1
for(q=d.$flags|0,p=0;p<r;++p){o=p+m+1
if(!(o<i))return A.b(a,o)
n=a[o]
o=B.a.m(n&j,k)
q&2&&A.y(d)
if(!(p<d.length))return A.b(d,p)
d[p]=(o|s)>>>0
s=B.a.F(n,l)}q&2&&A.y(d)
if(!(r>=0&&r<d.length))return A.b(d,r)
d[r]=s},
d7(a,b,c,d){var s,r,q,p,o=b-d
if(o===0)for(s=b-1,r=a.length,q=c.length;s>=0;--s){if(!(s<r))return A.b(a,s)
p=a[s]
if(!(s<q))return A.b(c,s)
o=p-c[s]
if(o!==0)return o}return o},
ht(a,b,c,d,e){var s,r,q,p,o,n
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
cb(a,b,c,d,e){var s,r,q,p,o,n
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
f_(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k
if(a===0)return
for(s=b.length,r=d.length,q=d.$flags|0,p=0;--f,f>=0;e=l,c=o){o=c+1
if(!(c<s))return A.b(b,c)
n=b[c]
if(!(e>=0&&e<r))return A.b(d,e)
m=a*n+d[e]+p
l=e+1
q&2&&A.y(d)
d[e]=m&65535
p=B.a.n(m,65536)}for(;p!==0;e=l){if(!(e>=0&&e<r))return A.b(d,e)
k=d[e]+p
l=e+1
q&2&&A.y(d)
d[e]=k&65535
p=B.a.n(k,65536)}},
hu(a,b,c){var s,r,q,p=b.length
if(!(c>=0&&c<p))return A.b(b,c)
s=b[c]
if(s===a)return 65535
r=c-1
if(!(r>=0&&r<p))return A.b(b,r)
q=B.a.M((s<<16|b[r])>>>0,a)
if(q>65535)return 65535
return q},
fW(a,b){a=A.x(a,new Error())
a.stack=b.h(0)
throw a},
e2(a,b,c){var s,r,q
if(a>4294967295)A.U(A.c1(a,0,4294967295,"length",null))
s=A.a(new Array(a),c.i("r<0>"))
s.$flags=1
r=s
if(a!==0)for(s=r.length,q=0;q<s;++q)r[q]=b
return r},
h9(a,b,c){var s,r,q=A.a([],c.i("r<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.dS)(a),++r)q.push(a[r])
q.$flags=1
return q},
hf(a,b){return new A.cy(a,A.h6(a,!1,!1,!1,!1,""))},
eQ(a,b,c){var s=J.eA(b)
if(!s.p())return a
if(c.length===0){do a+=A.j(s.gq())
while(s.p())}else{a+=A.j(s.gq())
for(;s.p();)a=a+c+A.j(s.gq())}return a},
hi(){return A.ah(new Error())},
eH(a){return new A.aE(1000*a)},
ct(a){if(typeof a=="number"||A.ek(a)||a==null)return J.bA(a)
if(typeof a=="string")return JSON.stringify(a)
return A.eO(a)},
fX(a,b){A.eo(a,"error",t.K)
A.eo(b,"stackTrace",t.l)
A.fW(a,b)},
bD(a){return new A.bC(a)},
a2(a,b){return new A.K(!1,null,b,a)},
dX(a,b,c){return new A.K(!0,a,b,c)},
hc(a){var s=null
return new A.as(s,s,!1,s,s,a)},
c1(a,b,c,d,e){return new A.as(b,c,!0,a,d,"Invalid value")},
he(a,b,c){if(0>a||a>c)throw A.d(A.c1(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.d(A.c1(b,a,c,"end",null))
return b}return c},
hd(a,b){if(a<0)throw A.d(A.c1(a,0,null,b,null))
return a},
eK(a,b,c,d){return new A.bH(b,!0,a,d,"Index out of range")},
c7(a){return new A.b4(a)},
eT(a){return new A.c5(a)},
a4(a){return new A.bE(a)},
bG(a){return new A.dd(a)},
eI(a,b){return new A.cu(a,b)},
h3(a,b,c){var s,r
if(A.et(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.a([],t.s)
$.D.push(a)
try{A.it(a,s)}finally{if(0>=$.D.length)return A.b($.D,-1)
$.D.pop()}r=A.eQ(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
e_(a,b,c){var s,r
if(A.et(a))return b+"..."+c
s=new A.c4(b)
$.D.push(a)
try{r=s
r.a=A.eQ(r.a,a,", ")}finally{if(0>=$.D.length)return A.b($.D,-1)
$.D.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
it(a,b){var s,r,q,p,o,n,m,l=a.gu(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.p())return
s=A.j(l.gq())
b.push(s)
k+=s.length+2;++j}if(!l.p()){if(j<=5)return
if(0>=b.length)return A.b(b,-1)
r=b.pop()
if(0>=b.length)return A.b(b,-1)
q=b.pop()}else{p=l.gq();++j
if(!l.p()){if(j<=4){b.push(A.j(p))
return}r=A.j(p)
if(0>=b.length)return A.b(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gq();++j
for(;l.p();p=o,o=n){n=l.gq();++j
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
cD(a,b,c,d){var s
if(B.f===c){s=B.a.gk(a)
b=J.P(b)
return A.e7(A.Y(A.Y($.dV(),s),b))}if(B.f===d){s=B.a.gk(a)
b=J.P(b)
c=J.P(c)
return A.e7(A.Y(A.Y(A.Y($.dV(),s),b),c))}s=B.a.gk(a)
b=J.P(b)
c=J.P(c)
d=J.P(d)
d=A.e7(A.Y(A.Y(A.Y(A.Y($.dV(),s),b),c),d))
return d},
q:function q(a,b,c){this.a=a
this.b=b
this.c=c},
d8:function d8(){},
d9:function d9(){},
aE:function aE(a){this.a=a},
dc:function dc(){},
k:function k(){},
bC:function bC(a){this.a=a},
R:function R(){},
K:function K(a,b,c,d){var _=this
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
bH:function bH(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
b4:function b4(a){this.a=a},
c5:function c5(a){this.a=a},
a9:function a9(a){this.a=a},
bE:function bE(a){this.a=a},
c_:function c_(){},
b3:function b3(){},
dd:function dd(a){this.a=a},
cu:function cu(a,b){this.a=a
this.b=b},
bI:function bI(){},
L:function L(){},
aV:function aV(a,b,c){this.a=a
this.b=b
this.$ti=c},
z:function z(){},
e:function e(){},
cn:function cn(){},
c4:function c4(a){this.a=a},
dq:function dq(){},
V:function V(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
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
hh(a,b,c,d,e,f,g,h){var s,r,q,p=v.G,o=p.document.createElement("canvas"),n=h*g
o.width=n
s=d*f
o.height=s
r=p.document.createElement("canvas")
r.width=n
r.height=s
s=A.a([],t.x)
for(q=0;q<d;++q){p=B.a.n(h,32)
s.push(new Uint32Array(p+1))}p=new A.c3(!0,d,h,g,f,c,a,o,r,s)
p.bD(a,b,c,d,!0,f,g,h)
return p},
e5(a){return new A.m(B.a.n(a,32),31-B.a.j(a,32))},
c3:function c3(a,b,c,d,e,f,g,h,i,j){var _=this
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
cG:function cG(a){this.a=a},
cH:function cH(a){this.a=a},
cI:function cI(a){this.a=a},
cJ:function cJ(a){this.a=a},
cF:function cF(){},
M:function M(a){this.b=a},
hj(a,b,c,d,e,f){var s,r,q,p,o=null,n=A.hh(a,c,d,e*10,!0,2,2,b*8),m=A.a([],t.G)
for(s=t.V,r=0;r<e;++r){q=A.a([],s)
for(p=0;p<b;++p)q.push(new A.V(r,p," ",d))
m.push(q)}n=new A.cR(e,b,d,c,n,new A.aq(e,b),new A.aq(e,b),new A.aq(e,b),!1,A.e6(t.N),A.e6(t.W),A.e6(t.q),B.e,m,A.h8(t.o),B.dT)
n.bE(a,b,c,d,o,!0,2,2,2,e,!1,o,o,o,o,o,o)
return n},
at:function at(a){this.b=a},
cR:function cR(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cZ:function cZ(a){this.a=a},
cY:function cY(){},
cX:function cX(a){this.a=a},
cS:function cS(a){this.a=a},
cT:function cT(a){this.a=a},
cU:function cU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cV:function cV(a,b,c){this.a=a
this.b=b
this.c=c},
cW:function cW(a){this.a=a},
G:function G(a){this.b=a},
a8:function a8(a,b){this.c=a
this.b=b},
j2(){var s,r=v.G.document.getElementById("othello")
r=A.hj("black",50,r==null?t.m.a(r):r,"white",29,!1)
s=$.p()
r.a0()
return new A.cw(r,new A.bZ(s,s,B.b)).L()},
cw:function cw(a,b){this.a=a
this.b=b},
cx:function cx(){},
bZ:function bZ(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0},
b0:function b0(a){this.b=a},
bu(a){var s
if(typeof a=="function")throw A.d(A.a2("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.i5,a)
s[$.dT()]=a
return s},
fg(a){var s
if(typeof a=="function")throw A.d(A.a2("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.i6,a)
s[$.dT()]=a
return s},
i5(a){return a.$0()},
i6(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
j5(a){var s,r,q
for(;!0;){s=a.gaf()
r=s.length
if(r===0)break
r=B.M.cg(r)
if(!(r>=0&&r<s.length))return A.b(s,r)
q=s[r]
a.aK(q.a,q.b)}r=a.d
return new A.cl(a.e,r)},
dL(a,b){return A.iQ(a,b)},
iQ(a1,a2){var s=0,r=A.bx(t.R),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$dL=A.by(function(a3,a4){if(a3===1)return A.br(a4,r)
while(true)$async$outer:switch(s){case 0:a=a1.gaf()
a0=A.h7(t.R,t.i)
for(p=a.length,o=0;n=a.length,o<n;a.length===p||(0,A.dS)(a),++o)a0.ag(0,a[o],0)
p=a2.c,m=t.z,l=0
case 3:if(!(l<B.a.M(p,n))){s=5
break}s=B.a.j(l,5)===0?6:7
break
case 6:s=8
return A.O(A.eJ(B.x,m),$async$dL)
case 8:case 7:for(n=a.length,o=0;k=a.length,o<k;a.length===n||(0,A.dS)(a),++o){k=a[o]
j=k.a
i=k.b
k=a1.c
h=$.p()
k=new A.bZ(h,h,k)
k.d=a1.d
k.a=a1.a
k.e=a1.e
k.b=a1.b
k.aK(j,i)
g=A.j5(k)
f=g.b
e=g.a
k=a0.A(0,new A.m(j,i))
k.toString
switch(a1.c){case B.b:h=f-e
break
case B.c:h=e-f
break
default:h=null}if(typeof h!=="number"){q=h.ct()
s=1
break $async$outer}a0.ag(0,new A.m(j,i),k+h/p)}case 4:++l,n=k
s=3
break
case 5:p=a0.$ti
d=new A.aT(a0,p.i("aT<1>")).gT(0)
for(p=new A.aS(a0,p.i("aS<1,2>")).gu(0);p.p();){n=p.d
c=n.a
b=n.b
n=a0.A(0,d)
n.toString
if(b>n)d=c}q=d
s=1
break
case 1:return A.bs(q,r)}})
return A.bt($async$dL,r)}},B={}
var w=[A,J,B]
var $={}
A.e0.prototype={}
J.bJ.prototype={
J(a,b){return a===b},
gk(a){return A.ar(a)},
h(a){return"Instance of '"+A.cE(a)+"'"},
gt(a){return A.af(A.ej(this))}}
J.bK.prototype={
h(a){return String(a)},
gk(a){return a?519018:218159},
gt(a){return A.af(t.y)},
$ih:1}
J.aM.prototype={
J(a,b){return null==b},
h(a){return"null"},
gk(a){return 0},
$ih:1}
J.aO.prototype={$in:1}
J.X.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.c0.prototype={}
J.aa.prototype={}
J.W.prototype={
h(a){var s=a[$.dT()]
if(s==null)return this.bC(a)
return"JavaScript function for "+J.bA(s)}}
J.aN.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.aP.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.r.prototype={
bm(a,b){var s,r,q=a.length,p=A.e2(q,"",t.N)
for(s=0;s<a.length;++s){r=A.j(a[s])
if(!(s<q))return A.b(p,s)
p[s]=r}return p.join(b)},
c9(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw A.d(A.a4(a))}return s},
ca(a,b,c){c.toString
return this.c9(a,b,c,t.z)},
S(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
c7(a,b){var s
for(s=0;s<a.length;++s)if(J.ak(a[s],b))return!0
return!1},
h(a){return A.e_(a,"[","]")},
gu(a){return new J.bB(a,a.length,A.ei(a).i("bB<1>"))},
gk(a){return A.ar(a)},
gl(a){return a.length},
$ii:1}
J.cz.prototype={}
J.bB.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
p(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.d(A.dS(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.al.prototype={
cq(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.d(A.c7(""+a+".toInt()"))},
c6(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.d(A.c7(""+a+".ceil()"))},
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
M(a,b){if((a|0)===a)if(b>=1)return a/b|0
return this.bb(a,b)},
n(a,b){return(a|0)===a?a/b|0:this.bb(a,b)},
bb(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.c7("Result of truncating division is "+A.j(s)+": "+A.j(a)+" ~/ "+b))},
m(a,b){if(b<0)throw A.d(A.en(b))
return b>31?0:a<<b>>>0},
c2(a,b){return b>31?0:a<<b>>>0},
ai(a,b){var s
if(b<0)throw A.d(A.en(b))
if(a>0)s=this.aA(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
aa(a,b){var s
if(a>0)s=this.aA(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
F(a,b){if(0>b)throw A.d(A.en(b))
return this.aA(a,b)},
aA(a,b){return b>31?0:a>>>b},
gt(a){return A.af(t.H)},
$iw:1}
J.aL.prototype={
gbf(a){var s,r=a<0?-a-1:a,q=r
for(s=32;q>=4294967296;){q=this.n(q,4294967296)
s+=32}return s-Math.clz32(q)},
gt(a){return A.af(t.S)},
$ih:1,
$ic:1}
J.bL.prototype={
gt(a){return A.af(t.i)},
$ih:1}
J.a5.prototype={
bB(a,b,c){return a.substring(b,A.he(b,c,a.length))},
cr(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.b(p,0)
if(p.charCodeAt(0)===133){s=J.h4(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.b(p,r)
q=p.charCodeAt(r)===133?J.h5(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
a3(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.L)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
cj(a,b,c){var s=b-a.length
if(s<=0)return a
return this.a3(c,s)+a},
h(a){return a},
gk(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gt(a){return A.af(t.N)},
gl(a){return a.length},
$ih:1,
$iA:1}
A.aR.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.dR.prototype={
$0(){var s=new A.l($.f,t.D)
s.an(null)
return s},
$S:8}
A.cK.prototype={}
A.aF.prototype={}
A.a7.prototype={
gu(a){var s=this
return new A.an(s,s.gl(s),A.a0(s).i("an<a7.E>"))},
ce(a){var s,r,q=this,p=q.gl(q)
for(s=0,r="";s<p;++s){r+=A.j(q.S(0,s))
if(p!==q.gl(q))throw A.d(A.a4(q))}return r.charCodeAt(0)==0?r:r}}
A.an.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
p(){var s,r=this,q=r.a,p=J.eq(q),o=p.gl(q)
if(r.b!==o)throw A.d(A.a4(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.S(q,s);++r.c
return!0}}
A.b5.prototype={
gu(a){return new A.c8(J.eA(this.a),this.b)}}
A.c8.prototype={
p(){var s,r
for(s=this.a,r=this.b;s.p();)if(r.$1(s.gq()))return!0
return!1},
gq(){return this.a.gq()}}
A.aJ.prototype={
gl(a){var s=this.a
return s.gl(s)},
gu(a){var s=this.a
return new A.aK(s.gu(s),this.b)}}
A.aK.prototype={
p(){if(++this.c>=0&&this.a.p())return!0
this.c=-2
return!1},
gq(){var s=this.c
return s>=0?new A.m(this.b+s,this.a.gq()):A.U(A.dZ())}}
A.aH.prototype={}
A.b1.prototype={
gl(a){return J.dW(this.a)},
S(a,b){var s=this.a,r=J.eq(s)
return r.S(s,r.gl(s)-1-b)}}
A.m.prototype={$r:"+(1,2)",$s:1}
A.cl.prototype={$r:"+black,white(1,2)",$s:2}
A.bF.prototype={
h(a){return A.e3(this)}}
A.aI.prototype={
a7(){var s=this,r=s.$map
if(r==null){r=new A.aQ(s.$ti.i("aQ<1,2>"))
A.iP(s.a,r)
s.$map=r}return r},
aE(a){return this.a7().aE(a)},
A(a,b){return this.a7().A(0,b)},
aG(a,b){this.a7().aG(0,b)},
gl(a){return this.a7().a}}
A.d0.prototype={
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
A.b_.prototype={
h(a){return"Null check operator used on a null value"}}
A.bM.prototype={
h(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.c6.prototype={
h(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.cC.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.aG.prototype={}
A.bj.prototype={
h(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iI:1}
A.a3.prototype={
h(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.fy(r==null?"unknown":r)+"'"},
gcs(){return this},
$C:"$1",
$R:1,
$D:null}
A.cr.prototype={$C:"$0",$R:0}
A.cs.prototype={$C:"$2",$R:2}
A.cQ.prototype={}
A.cL.prototype={
h(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.fy(s)+"'"}}
A.aD.prototype={
J(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.aD))return!1
return this.$_target===b.$_target&&this.a===b.a},
gk(a){return(A.ev(this.a)^A.ar(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.cE(this.a)+"'")}}
A.c2.prototype={
h(a){return"RuntimeError: "+this.a}}
A.a6.prototype={
gl(a){return this.a},
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
if(q!==s.r)throw A.d(A.a4(s))
r=r.c}},
aV(a,b,c){var s=a[b]
if(s==null)a[b]=this.al(b,c)
else s.b=c},
al(a,b){var s=this,r=new A.cA(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&1073741823
return r},
aH(a){return J.P(a)&1073741823},
aI(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ak(a[r].a,b))return r
return-1},
h(a){return A.e3(this)},
ar(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.cA.prototype={}
A.aT.prototype={
gl(a){return this.a.a},
gu(a){var s=this.a
return new A.bO(s,s.r,s.e)}}
A.bO.prototype={
gq(){return this.d},
p(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.a4(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
A.aS.prototype={
gl(a){return this.a.a},
gu(a){var s=this.a
return new A.bN(s,s.r,s.e,this.$ti.i("bN<1,2>"))}}
A.bN.prototype={
gq(){var s=this.d
s.toString
return s},
p(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.a4(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.aV(s.a,s.b,r.$ti.i("aV<1,2>"))
r.c=s.c
return!0}}}
A.aQ.prototype={
aH(a){return A.iL(a)&1073741823},
aI(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ak(a[r].a,b))return r
return-1}}
A.dM.prototype={
$1(a){return this.a(a)},
$S:9}
A.dN.prototype={
$2(a,b){return this.a(a,b)},
$S:10}
A.dO.prototype={
$1(a){return this.a(a)},
$S:11}
A.aw.prototype={
h(a){return this.bd(!1)},
bd(a){var s,r,q,p,o,n=this.bT(),m=this.b6(),l=(a?""+"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.b(m,q)
o=m[q]
l=a?l+A.eO(o):l+A.j(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
bT(){var s,r=this.$s
for(;$.bh.length<=r;)$.bh.push(null)
s=$.bh[r]
if(s==null){s=this.bP()
if(!(r<$.bh.length))return A.b($.bh,r)
$.bh[r]=s}return s},
bP(){var s,r,q,p,o,n=this.$r,m=n.indexOf("("),l=n.substring(1,m),k=n.substring(m),j=k==="()"?0:k.replace(/[^,]/g,"").length+1,i=A.a(new Array(j),t.f)
for(s=0;s<j;++s)i[s]=s
if(l!==""){r=l.split(",")
s=r.length
for(q=i.length,p=j;s>0;){--p;--s
o=r[s]
if(!(p>=0&&p<q))return A.b(i,p)
i[p]=o}}i=A.h9(i,!1,t.K)
i.$flags=3
return i}}
A.ck.prototype={
b6(){return[this.a,this.b]},
J(a,b){if(b==null)return!1
return b instanceof A.ck&&this.$s===b.$s&&J.ak(this.a,b.a)&&J.ak(this.b,b.b)},
gk(a){return A.cD(this.$s,this.a,this.b,B.f)}}
A.cy.prototype={
h(a){return"RegExp/"+this.a+"/"+this.b.flags},
c8(a){var s=this.b.exec(a)
if(s==null)return null
return new A.dt(s)}}
A.dt.prototype={}
A.da.prototype={
E(){var s=this.b
if(s===this)throw A.d(A.eM(this.a))
return s}}
A.bP.prototype={
gt(a){return B.ec},
$ih:1}
A.aY.prototype={}
A.bQ.prototype={
gt(a){return B.ed},
$ih:1}
A.ap.prototype={
gl(a){return a.length},
$iB:1}
A.aW.prototype={
A(a,b){A.ad(b,a,a.length)
return a[b]},
$ii:1}
A.aX.prototype={$ii:1}
A.bR.prototype={
gt(a){return B.ee},
$ih:1}
A.bS.prototype={
gt(a){return B.ef},
$ih:1}
A.bT.prototype={
gt(a){return B.eg},
A(a,b){A.ad(b,a,a.length)
return a[b]},
$ih:1}
A.bU.prototype={
gt(a){return B.eh},
A(a,b){A.ad(b,a,a.length)
return a[b]},
$ih:1}
A.bV.prototype={
gt(a){return B.ei},
A(a,b){A.ad(b,a,a.length)
return a[b]},
$ih:1}
A.bW.prototype={
gt(a){return B.ek},
A(a,b){A.ad(b,a,a.length)
return a[b]},
$ih:1}
A.bX.prototype={
gt(a){return B.el},
A(a,b){A.ad(b,a,a.length)
return a[b]},
$ih:1,
$id2:1}
A.aZ.prototype={
gt(a){return B.em},
gl(a){return a.length},
A(a,b){A.ad(b,a,a.length)
return a[b]},
$ih:1}
A.bY.prototype={
gt(a){return B.en},
gl(a){return a.length},
A(a,b){A.ad(b,a,a.length)
return a[b]},
$ih:1}
A.bd.prototype={}
A.be.prototype={}
A.bf.prototype={}
A.bg.prototype={}
A.H.prototype={
i(a){return A.bq(v.typeUniverse,this,a)},
ao(a){return A.fb(v.typeUniverse,this,a)}}
A.ci.prototype={}
A.co.prototype={
h(a){return A.C(this.a,null)}}
A.ch.prototype={
h(a){return this.a}}
A.bm.prototype={$iR:1}
A.d4.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:3}
A.d3.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:12}
A.d5.prototype={
$0(){this.a.$0()},
$S:1}
A.d6.prototype={
$0(){this.a.$0()},
$S:1}
A.bl.prototype={
bF(a,b){if(self.setTimeout!=null)self.setTimeout(A.cq(new A.dz(this,b),0),a)
else throw A.d(A.c7("`setTimeout()` not found."))},
bG(a,b){if(self.setTimeout!=null)self.setInterval(A.cq(new A.dy(this,a,Date.now(),b),0),a)
else throw A.d(A.c7("Periodic timer."))},
$id_:1}
A.dz.prototype={
$0(){this.a.c=1
this.b.$0()},
$S:0}
A.dy.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.a.M(s,o)}q.c=p
r.d.$1(q)},
$S:1}
A.c9.prototype={}
A.dD.prototype={
$1(a){return this.a.$2(0,a)},
$S:4}
A.dE.prototype={
$2(a,b){this.a.$2(1,new A.aG(a,b))},
$S:13}
A.dH.prototype={
$2(a,b){this.a(a,b)},
$S:14}
A.E.prototype={
h(a){return A.j(this.a)},
$ik:1,
gV(){return this.b}}
A.F.prototype={}
A.b9.prototype={
av(){},
aw(){}}
A.cc.prototype={
gbV(){return this.c<4},
c0(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
c3(a,b,c,d){var s,r,q,p,o,n=this
if((n.c&4)!==0){s=new A.bb($.f)
A.fx(s.gbW())
s.c=c
return s}s=$.f
r=d?1:0
q=A.f0(s,a)
A.hA(s,b)
p=new A.b9(n,q,s,r|32,A.a0(n).i("b9<1>"))
p.CW=p
p.ch=p
p.ay=n.c&1
o=n.e
n.e=p
p.ch=null
p.CW=o
if(o==null)n.d=p
else o.ch=p
if(n.d===p)A.fn(n.a)
return p},
bZ(a){var s,r=this
A.a0(r).i("b9<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.c0(a)
if((r.c&2)===0&&r.d==null)r.bL()}return null},
bI(){if((this.c&4)!==0)return new A.a9("Cannot add new events after calling close")
return new A.a9("Cannot add new events while doing an addStream")},
R(a,b){if(!this.gbV())throw A.d(this.bI())
this.az(b)},
bL(){if((this.c&4)!==0)if(null.gcu())null.an(null)
A.fn(this.b)}}
A.b6.prototype={
az(a){var s
for(s=this.d;s!=null;s=s.ch)s.bJ(new A.cf(a))}}
A.cv.prototype={
$0(){this.c.a(null)
this.b.a6(null)},
$S:0}
A.Z.prototype={
cf(a){if((this.c&15)!==6)return!0
return this.b.b.aP(this.d,a.a)},
cb(a){var s,r=this.e,q=null,p=a.a,o=this.b.b
if(t.C.b(r))q=o.cm(r,p,a.b)
else q=o.aP(r,p)
try{p=q
return p}catch(s){if(t._.b(A.aC(s))){if((this.c&1)!==0)throw A.d(A.a2("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.a2("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.l.prototype={
by(a,b,c){var s,r=$.f
if(r===B.d){if(!t.C.b(b)&&!t.v.b(b))throw A.d(A.dX(b,"onError",u.c))}else b=A.iy(b,r)
s=new A.l(r,c.i("l<0>"))
this.a4(new A.Z(s,3,a,b,this.$ti.i("@<1>").ao(c).i("Z<1,2>")))
return s},
bc(a,b,c){var s=new A.l($.f,c.i("l<0>"))
this.a4(new A.Z(s,19,a,b,this.$ti.i("@<1>").ao(c).i("Z<1,2>")))
return s},
c1(a){this.a=this.a&1|16
this.c=a},
a5(a){this.a=a.a&30|this.a&1
this.c=a.c},
a4(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.a4(a)
return}s.a5(r)}A.ay(null,null,s.b,new A.de(s,a))}},
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
A.ay(null,null,n.b,new A.dj(m,n))}},
Y(){var s=this.c
this.c=null
return this.a8(s)},
a8(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
a6(a){var s,r=this
if(r.$ti.i("Q<1>").b(a))A.dh(a,r,!0)
else{s=r.Y()
r.a=8
r.c=a
A.ab(r,s)}},
b3(a){var s=this,r=s.Y()
s.a=8
s.c=a
A.ab(s,r)},
bO(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.Y()
q.a5(a)
A.ab(q,r)},
W(a){var s=this.Y()
this.c1(a)
A.ab(this,s)},
bN(a,b){this.W(new A.E(a,b))},
an(a){if(this.$ti.i("Q<1>").b(a)){this.b0(a)
return}this.bK(a)},
bK(a){this.a^=2
A.ay(null,null,this.b,new A.dg(this,a))},
b0(a){A.dh(a,this,!1)
return},
b_(a){this.a^=2
A.ay(null,null,this.b,new A.df(this,a))},
$iQ:1}
A.de.prototype={
$0(){A.ab(this.a,this.b)},
$S:0}
A.dj.prototype={
$0(){A.ab(this.b,this.a.a)},
$S:0}
A.di.prototype={
$0(){A.dh(this.a.a,this.b,!0)},
$S:0}
A.dg.prototype={
$0(){this.a.b3(this.b)},
$S:0}
A.df.prototype={
$0(){this.a.W(this.b)},
$S:0}
A.dm.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.bv(q.d)}catch(p){s=A.aC(p)
r=A.ah(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.dY(q)
n=k.a
n.c=new A.E(q,o)
q=n}q.b=!0
return}if(j instanceof A.l&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.l){m=k.b.a
l=new A.l(m.b,m.$ti)
j.by(new A.dn(l,m),new A.dp(l),t.n)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.dn.prototype={
$1(a){this.a.bO(this.b)},
$S:3}
A.dp.prototype={
$2(a,b){this.a.W(new A.E(a,b))},
$S:15}
A.dl.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
q.c=p.b.b.aP(p.d,this.b)}catch(o){s=A.aC(o)
r=A.ah(o)
q=s
p=r
if(p==null)p=A.dY(q)
n=this.a
n.c=new A.E(q,p)
n.b=!0}},
$S:0}
A.dk.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.cf(s)&&p.a.e!=null){p.c=p.a.cb(s)
p.b=!1}}catch(o){r=A.aC(o)
q=A.ah(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.dY(p)
m=l.b
m.c=new A.E(p,n)
p=m}p.b=!0}},
$S:0}
A.ca.prototype={}
A.au.prototype={
gl(a){var s={},r=new A.l($.f,t.a)
s.a=0
this.bn(new A.cO(s,this),!0,new A.cP(s,r),r.gb2())
return r},
gT(a){var s=new A.l($.f,this.$ti.i("l<1>")),r=this.bn(null,!0,new A.cM(s),s.gb2())
r.bq(new A.cN(this,r,s))
return s}}
A.cO.prototype={
$1(a){++this.a.a},
$S(){return this.b.$ti.i("~(1)")}}
A.cP.prototype={
$0(){this.b.a6(this.a.a)},
$S:0}
A.cM.prototype={
$0(){var s,r=new A.a9("No element")
A.hb(r,B.h)
s=A.ih(r,B.h)
s=new A.E(r,B.h)
this.a.W(s)},
$S:0}
A.cN.prototype={
$1(a){A.i7(this.b,this.c,a)},
$S(){return this.a.$ti.i("~(1)")}}
A.ba.prototype={
gk(a){return(A.ar(this.a)^892482866)>>>0},
J(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.F&&b.a===this.a}}
A.ce.prototype={
b9(){return this.w.bZ(this)},
av(){},
aw(){}}
A.cd.prototype={
bq(a){this.a=A.f0(this.d,a)},
bg(){var s,r=this,q=r.e&=4294967279
if((q&8)===0){q=r.e=q|8
if((q&128)!==0){s=r.r
if(s.a===1)s.a=3}if((q&64)===0)r.r=null
r.f=r.b9()}q=$.dU()
return q},
av(){},
aw(){},
b9(){return null},
bJ(a){var s,r,q=this,p=q.r
if(p==null)p=q.r=new A.cj()
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
A.bk.prototype={
bn(a,b,c,d){return this.a.c3(a,d,c,!0)}}
A.cg.prototype={}
A.cf.prototype={}
A.cj.prototype={
aS(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.fx(new A.du(s,a))
s.a=1}}
A.du.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.a
q.b=r
if(r==null)q.c=null
this.b.az(s.b)},
$S:0}
A.bb.prototype={
bq(a){},
bg(){this.a=-1
this.c=null
return $.dU()},
bX(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.bw(s)}}else r.a=q}}
A.cm.prototype={}
A.dF.prototype={
$0(){return this.a.a6(this.b)},
$S:0}
A.dC.prototype={}
A.dG.prototype={
$0(){A.fX(this.a,this.b)},
$S:0}
A.dv.prototype={
bw(a){var s,r,q
try{if(B.d===$.f){a.$0()
return}A.fk(null,null,this,a)}catch(q){s=A.aC(q)
r=A.ah(q)
A.cp(s,r)}},
cp(a,b){var s,r,q
try{if(B.d===$.f){a.$1(b)
return}A.fl(null,null,this,a,b)}catch(q){s=A.aC(q)
r=A.ah(q)
A.cp(s,r)}},
bx(a,b){a.toString
return this.cp(a,b,t.z)},
aC(a){return new A.dw(this,a)},
c5(a,b){return new A.dx(this,a,b)},
cl(a){if($.f===B.d)return a.$0()
return A.fk(null,null,this,a)},
bv(a){a.toString
return this.cl(a,t.z)},
co(a,b){if($.f===B.d)return a.$1(b)
return A.fl(null,null,this,a,b)},
aP(a,b){var s=t.z
a.toString
return this.co(a,b,s,s)},
cn(a,b,c){if($.f===B.d)return a.$2(b,c)
return A.iz(null,null,this,a,b,c)},
cm(a,b,c){var s=t.z
a.toString
return this.cn(a,b,c,s,s,s)},
ck(a){return a},
aO(a){var s=t.z
a.toString
return this.ck(a,s,s,s)}}
A.dw.prototype={
$0(){return this.a.bw(this.b)},
$S:0}
A.dx.prototype={
$1(a){return this.a.bx(this.b,a)},
$S(){return this.c.i("~(0)")}}
A.bc.prototype={
gu(a){var s=this,r=new A.av(s,s.r,s.$ti.i("av<1>"))
r.c=s.e
return r},
gl(a){return this.a},
R(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.aZ(s==null?q.b=A.ef():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.aZ(r==null?q.c=A.ef():r,b)}else return q.bH(b)},
bH(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.ef()
s=J.P(a)&1073741823
r=p[s]
if(r==null)p[s]=[q.au(a)]
else{if(q.bU(r,a)>=0)return!1
r.push(q.au(a))}return!0},
aZ(a,b){if(a[b]!=null)return!1
a[b]=this.au(b)
return!0},
b8(){this.r=this.r+1&1073741823},
au(a){var s,r=this,q=new A.ds(a)
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
A.ds.prototype={}
A.av.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
p(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.d(A.a4(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.o.prototype={
gu(a){return new A.an(a,this.gl(a),A.bz(a).i("an<o.E>"))},
S(a,b){return this.A(a,b)},
h(a){return A.e_(a,"[","]")}}
A.aU.prototype={
gl(a){return this.a},
h(a){return A.e3(this)}}
A.cB.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.j(a)
r.a=(r.a+=s)+": "
s=A.j(b)
r.a+=s},
$S:16}
A.b2.prototype={
h(a){return A.e_(this,"{","}")}}
A.bi.prototype={}
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
if(s<=0)return k.a?$.ez():$.p()
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
m(a,b){var s,r,q,p,o,n=this
if(b<0)throw A.d(A.a2("shift-amount must be posititve "+b,null))
s=n.c
if(s===0)return n
r=B.a.n(b,16)
if(B.a.j(b,16)===0)return n.bR(r)
q=s+r+1
p=new Uint16Array(q)
A.eZ(n.b,s,b,p)
s=n.a
o=A.v(q,p)
return new A.q(o===0?!1:s,p,o)},
ai(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(b<0)throw A.d(A.a2("shift-amount must be posititve "+b,null))
s=j.c
if(s===0)return j
r=B.a.n(b,16)
q=B.a.j(b,16)
if(q===0)return j.bS(r)
p=s-r
if(p<=0)return j.a?$.ez():$.p()
o=j.b
n=new Uint16Array(p)
A.hy(o,s,b,n)
s=j.a
m=A.v(p,n)
l=new A.q(m===0?!1:s,n,m)
if(s){s=o.length
if(!(r>=0&&r<s))return A.b(o,r)
if((o[r]&B.a.m(1,q)-1)!==0)return l.aj(0,$.u())
for(k=0;k<r;++k){if(!(k<s))return A.b(o,k)
if(o[k]!==0)return l.aj(0,$.u())}}return l},
D(a,b){var s,r=this.a
if(r===b.a){s=A.d7(this.b,this.c,b.b,b.c)
return r?0-s:s}return r?-1:1},
N(a,b){var s,r,q,p=this,o=p.c,n=a.c
if(o<n)return a.N(p,b)
if(o===0)return $.p()
if(n===0)return p.a===b?p:p.K(0)
s=o+1
r=new Uint16Array(s)
A.ht(p.b,o,a.b,n,r)
q=A.v(s,r)
return new A.q(q===0?!1:b,r,q)},
C(a,b){var s,r,q,p=this,o=p.c
if(o===0)return $.p()
s=a.c
if(s===0)return p.a===b?p:p.K(0)
r=new Uint16Array(o)
A.cb(p.b,o,a.b,s,r)
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
if(A.d7(q.b,p,b.b,s)>=0)return q.C(b,r)
return b.C(q,!r)},
aj(a,b){var s,r,q=this,p=q.c
if(p===0)return b.K(0)
s=b.c
if(s===0)return q
r=q.a
if(r!==b.a)return q.N(b,r)
if(A.d7(q.b,p,b.b,s)>=0)return q.C(b,r)
return b.C(q,!r)},
a3(a,b){var s,r,q,p,o,n,m,l=this.c,k=b.c
if(l===0||k===0)return $.p()
s=l+k
r=this.b
q=b.b
p=new Uint16Array(s)
for(o=q.length,n=0;n<k;){if(!(n<o))return A.b(q,n)
A.f_(q[n],r,0,p,n,l);++n}o=this.a!==b.a
m=A.v(s,p)
return new A.q(m===0?!1:o,p,m)},
bQ(a){var s,r,q,p
if(this.c<a.c)return $.p()
this.b5(a)
s=$.ea.E()-$.b8.E()
r=A.ec($.e9.E(),$.b8.E(),$.ea.E(),s)
q=A.v(s,r)
p=new A.q(!1,r,q)
return this.a!==a.a&&q>0?p.K(0):p},
c_(a){var s,r,q,p=this
if(p.c<a.c)return p
p.b5(a)
s=A.ec($.e9.E(),0,$.b8.E(),$.b8.E())
r=A.v($.b8.E(),s)
q=new A.q(!1,s,r)
if($.eb.E()>0)q=q.ai(0,$.eb.E())
return p.a&&q.c>0?q.K(0):q},
b5(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.c
if(b===$.eW&&a.c===$.eY&&c.b===$.eV&&a.b===$.eX)return
s=a.b
r=a.c
q=r-1
if(!(q>=0&&q<s.length))return A.b(s,q)
p=16-B.a.gbf(s[q])
if(p>0){o=new Uint16Array(r+5)
n=A.eU(s,r,p,o)
m=new Uint16Array(b+5)
l=A.eU(c.b,b,p,m)}else{m=A.ec(c.b,0,b,b+2)
n=r
o=s
l=b}q=n-1
if(!(q>=0&&q<o.length))return A.b(o,q)
k=o[q]
j=l-n
i=new Uint16Array(l)
h=A.ee(o,n,j,i)
g=l+1
q=m.$flags|0
if(A.d7(m,l,i,h)>=0){q&2&&A.y(m)
if(!(l>=0&&l<m.length))return A.b(m,l)
m[l]=1
A.cb(m,g,i,h,m)}else{q&2&&A.y(m)
if(!(l>=0&&l<m.length))return A.b(m,l)
m[l]=0}q=n+2
f=new Uint16Array(q)
if(!(n>=0&&n<q))return A.b(f,n)
f[n]=1
A.cb(f,n+1,o,n,f)
e=l-1
for(q=m.length;j>0;){d=A.hu(k,m,e);--j
A.f_(d,f,0,m,j,n)
if(!(e>=0&&e<q))return A.b(m,e)
if(m[e]<d){h=A.ee(f,n,j,i)
A.cb(m,g,i,h,m)
for(;--d,m[e]<d;)A.cb(m,g,i,h,m)}--e}$.eV=c.b
$.eW=b
$.eX=s
$.eY=r
$.e9.b=m
$.ea.b=g
$.b8.b=n
$.eb.b=p},
gk(a){var s,r,q,p,o=new A.d8(),n=this.c
if(n===0)return 6707
s=this.a?83585:429689
for(r=this.b,q=r.length,p=0;p<n;++p){if(!(p<q))return A.b(r,p)
s=o.$2(s,r[p])}return new A.d9().$1(s)},
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
for(;r.c>1;){q=$.ey()
if(q.c===0)A.U(B.E)
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
return new A.b1(s,t.r).ce(0)}}
A.d8.prototype={
$2(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
$S:6}
A.d9.prototype={
$1(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
$S:17}
A.aE.prototype={
J(a,b){if(b==null)return!1
return b instanceof A.aE&&this.a===b.a},
gk(a){return B.a.gk(this.a)},
h(a){var s,r,q,p,o=this.a,n=B.a.n(o,36e8)
o%=36e8
s=B.a.n(o,6e7)
o%=6e7
r=s<10?"0":""
q=B.a.n(o,1e6)
p=q<10?"0":""
return""+n+":"+r+s+":"+p+q+"."+B.z.cj(B.a.h(o%1e6),6,"0")}}
A.dc.prototype={
h(a){return this.X()}}
A.k.prototype={
gV(){return A.ha(this)}}
A.bC.prototype={
h(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.ct(s)
return"Assertion failed"}}
A.R.prototype={}
A.K.prototype={
gaq(){return"Invalid argument"+(!this.a?"(s)":"")},
gap(){return""},
h(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.gaq()+q+o
if(!s.a)return n
return n+s.gap()+": "+A.ct(s.gaJ())},
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
A.bH.prototype={
gaJ(){return this.b},
gaq(){return"RangeError"},
gap(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gl(a){return this.f}}
A.b4.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.c5.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.a9.prototype={
h(a){return"Bad state: "+this.a}}
A.bE.prototype={
h(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.ct(s)+"."}}
A.c_.prototype={
h(a){return"Out of Memory"},
gV(){return null},
$ik:1}
A.b3.prototype={
h(a){return"Stack Overflow"},
gV(){return null},
$ik:1}
A.dd.prototype={
h(a){return"Exception: "+this.a}}
A.cu.prototype={
h(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=B.z.bB(q,0,75)+"..."
return r+"\n"+q}}
A.bI.prototype={
gV(){return null},
h(a){return"IntegerDivisionByZeroException"},
$ik:1}
A.L.prototype={
gl(a){var s,r=this.gu(this)
for(s=0;r.p();)++s
return s},
gT(a){var s=this.gu(this)
if(!s.p())throw A.d(A.dZ())
return s.gq()},
S(a,b){var s,r
A.hd(b,"index")
s=this.gu(this)
for(r=b;s.p();){if(r===0)return s.gq();--r}throw A.d(A.eK(b,b-r,this,"index"))},
h(a){return A.h3(this,"(",")")}}
A.aV.prototype={
h(a){return"MapEntry("+A.j(this.a)+": "+A.j(this.b)+")"}}
A.z.prototype={
gk(a){return A.e.prototype.gk.call(this,0)},
h(a){return"null"}}
A.e.prototype={$ie:1,
J(a,b){return this===b},
gk(a){return A.ar(this)},
h(a){return"Instance of '"+A.cE(this)+"'"},
gt(a){return A.iV(this)},
toString(){return this.h(this)}}
A.cn.prototype={
h(a){return""},
$iI:1}
A.c4.prototype={
gl(a){return this.a.length},
h(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.dq.prototype={
cg(a){if(a<=0||a>4294967296)throw A.d(A.hc("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
A.V.prototype={
gk(a){var s=this.a,r=this.b
return A.cD(new A.m(s,r).$s,s,r,B.f)},
J(a,b){var s,r,q,p
if(b==null)return!1
if(b instanceof A.V){s=b.a
r=b.b
q=this.a
p=this.b
p=A.cD(new A.m(s,r).$s,s,r,B.f)===A.cD(new A.m(q,p).$s,q,p,B.f)
s=p}else s=!1
return s},
h(a){var s=this
return"("+s.a+" "+s.b+") => '"+s.c+"' "+s.d}}
A.am.prototype={}
A.ao.prototype={
h(a){var s=this
return"               row: "+s.a+"\n            column: "+s.b+"\n         character: '"+s.c+"'\n    characterColor: "+s.d+"\n\n          pixelRow: "+s.e+"\n       pixelColumn: "+s.f+"\n         pixelIsOn: "+s.r+"\n    "}}
A.aq.prototype={
sab(a){var s,r,q,p=this
if(a<0){s=p.d=a
for(r=p.b,q=p.a;s<0;){s+=r
p.d=s
p.c=B.a.j(p.c-1,q)}}else{s=p.b
p.c=B.a.j(p.c+B.a.M(a,s),p.a)
p.d=B.a.j(a,s)}},
gG(){return this.c*this.b+this.d},
sG(a){var s=this,r=s.b
s.c=B.a.j(B.a.M(a,r),s.a)
s.d=B.a.j(a,r)}}
A.c3.prototype={
bD(a,b,c,d,e,f,g,h){var s,r=this,q=v.G.document
q.onfocus=A.bu(new A.cG(r))
q.onblur=A.bu(new A.cH(r))
q=r.w
q.tabIndex=-1
q.style.display="block"
q.style.outline="none"
s=q.getContext("2d")
if(s==null)s=t.m.a(s)
s.imageSmoothingEnabled=!1
q.onfocus=A.bu(new A.cI(r))
q.onblur=A.bu(new A.cJ(r))
b.style.display="flex"
b.style.alignItems="flex-start"
b.style.padding="0"
b.style.margin="0"
b.style.width="fit-content"
b.style.height="fit-content"
b.style.background="gray"
b.appendChild(q)
r.a_(0)},
a9(a,b){return new A.m(B.a.j(a,this.b),B.a.j(b,this.c))},
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
O(a,b,c,d){var s,r,q,p,o,n,m=this,l=a<0||a>=m.b||b<0||b>=m.c
if(l)return
s=m.a9(a,b)
a=s.a
b=s.b
r=A.e5(b)
q=r.a
p=B.a.m(1,r.b)
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
P(a,b,c,d,e){var s,r,q,p,o,n,m=this,l=a<0||a>=m.b||b<0||b>=m.c
if(l)return
s=m.a9(a,b)
a=s.a
b=s.b
r=A.e5(b)
q=r.a
p=B.a.m(1,r.b)
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
s=A.e5(o.b)
r=s.a
q=B.a.m(1,s.b)
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
d=B.a.j(d,s)
r=k.c
c=B.a.j(c,r)
o=Math.abs(b)
n=Math.min(d+o,s)
m=Math.min(c+o,r)
for(o=k.x,q=d;q<n;++q){l=B.a.j(q,s)
for(p=c;p<m;++p)k.O(l,B.a.j(p,r),o,!1)}}k.b4()},
a_(a){return this.bi(0,null,0,0,null)},
bY(a,b,c,d,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.b1()
s=e.a9(a,b)
a=s.a
b=s.b
r=B.a.c2(1,a0)-1
for(q=a0-1,p=t.t,o=e.x,n=0;n<8;++n){m=c[n]
l=m&r
m=A.a([],p)
for(k=a+n,j=0;j<a0;++j){i=e.bs(b+j,k)?1:0
m.push(B.a.m(i,q-j))}h=B.i.ca(m,0,new A.cF())
switch(a1){case B.B:for(j=0;j<a0;++j){m=b+j
if((B.a.F(l,q-j)&1)>0)e.P(k,m,d,o,!1)
else e.O(k,m,o,!1)}break
case B.dU:for(j=0;j<a0;++j){m=b+j
if((B.a.F(l,q-j)&1)>0)e.O(k,m,o,!1)
else e.P(k,m,d,o,!1)}break
case B.dZ:for(j=0;j<a0;++j){g=q-j
if((B.a.F(l,g)&1)>0&&(B.a.ai(h,g)&1)===0)e.P(k,b+j,d,o,!1)}break
case B.dY:for(j=0;j<a0;++j)if((B.a.F(l,q-j)&1)>0)e.P(k,b+j,d,o,!1)
break
case B.e_:for(f=l&h,j=0;j<a0;++j)if((B.a.F(f,q-j)&1)>0)e.P(k,b+j,d,o,!1)
break
case B.e0:for(f=l&h,j=0;j<a0;++j)if((B.a.F(f,q-j)&1)>0)e.O(k,b+j,o,!1)
break
case B.e2:for(f=l&h,j=0;j<a0;++j)if((B.a.F(f,q-j)&1)===0)e.O(k,b+j,o,!1)
break
case B.e3:for(f=l&h,j=0;j<a0;++j){m=b+j
if((B.a.F(f,q-j)&1)===0)e.O(k,m,o,!1)
else e.P(k,m,d,o,!1)}break}}e.b4()},
bu(a,b,c){this.bY(c.a,c.b,b,a,8,B.B,!0,!1,!1)},
a0(){var s=this.w
s.style.opacity="1.0"
s.focus()},
Z(){var s=this.w
s.style.opacity="0.5"
s.blur()}}
A.cG.prototype={
$0(){this.a.z=!0},
$S:1}
A.cH.prototype={
$0(){this.a.z=!1},
$S:1}
A.cI.prototype={
$0(){this.a.a0()},
$S:1}
A.cJ.prototype={
$0(){this.a.Z()},
$S:1}
A.cF.prototype={
$2(a,b){return(a|b)>>>0},
$S:6}
A.M.prototype={
X(){return"Mode."+this.b}}
A.at.prototype={
X(){return"State."+this.b}}
A.cR.prototype={
bE(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=this,r=s.f
r.tabIndex=-1
r.onfocus=A.bu(new A.cS(s))
r.onblur=A.bu(new A.cT(s))
r.onkeydown=A.fg(new A.cU(s,l,new A.cY(),new A.cX(s)))
r.onclick=A.fg(new A.cV(s,new A.cZ(s),o))
A.hl(A.eH(300),new A.cW(s))
s.Z()
s.a_(0)},
gaF(){var s=this.w
s===$&&A.aj()
return s.gaF()},
gaD(){var s=this.w
s===$&&A.aj()
return s.gaD()},
aB(a,b){return new A.m(B.a.j(a,this.a),B.a.j(b,this.b))},
b7(){var s=this,r=s.x
s.CW.R(0,new A.V(r.c,r.d," ","white"))
s.be()
s.cy=!1},
be(){var s,r,q,p,o,n,m,l,k,j
for(s=this.CW,r=A.hB(s,s.r,s.$ti.c),q=this.w,p=this.cx,o=r.$ti.c;r.p();){n=r.d
if(n==null)n=o.a(n)
m=n.a
l=n.b
if(p.aE(n.c)){k=p.A(0,n.c)
k.toString
j=k}else j=$.fA()
q===$&&A.aj()
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
s.c=B.a.j(s.c+1,s.a)},
a1(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=this,i=e==null?j.x.c:e,h=j.aB(i,c==null?j.x.d:c)
i=j.x
i.c=B.a.j(h.a,i.a)
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
p.R(0,k)
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
q===$&&A.aj()
q.bi(0,c*10,b*8,d*10,e*8)
q=l.x
q.c=B.a.j(d,q.a)
q.sab(b)},
a_(a){return this.bh(0,0,null,0,null)},
c4(){if(this.ay!==B.e)throw A.d(A.bG("Terminal already awaiting input."))},
cc(){this.c4()
this.ay=B.j
var s=this.at
return new A.F(s,A.a0(s).i("F<1>")).gT(0)},
a0(){return this.gaF().$0()},
Z(){return this.gaD().$0()}}
A.cZ.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.w
i===$&&A.aj()
s=J.eB(a.offsetX)
r=Math.max(Math.min(B.a.M(J.eB(a.offsetY)-1,i.e),i.b-1),0)
q=Math.max(Math.min(B.a.M(s-1,i.d),i.c-1),0)
p=B.a.n(r,10)
o=B.a.n(q,8)
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
A.cY.prototype={
$1(a){var s=a.key
return new A.am(s.length>1?"":s)},
$S:19}
A.cX.prototype={
$0(){var s,r,q,p,o,n=this.a,m=n.a,l=n.b,k=new A.aq(m,l)
k.sG(n.y.gG())
s=A.a([],t.s)
for(r=n.z,q=r.b;p=k.c,o=k.d,p*l+o<r.c*q+r.d;p=k.c*l+k.d+1,k.c=B.a.j(B.a.M(p,l),m),k.d=B.a.j(p,l))s.push(n.aR(o,p))
return B.i.bm(s,"")},
$S:20}
A.cS.prototype={
$0(){var s=this.a.w
s===$&&A.aj()
s.a0()},
$S:1}
A.cT.prototype={
$0(){var s=this.a.w
s===$&&A.aj()
s.Z()},
$S:1}
A.cU.prototype={
$1(a){var s,r,q,p
a.preventDefault()
s=this.a
switch(s.ay){case B.e:break
case B.j:r=s.at
if(r.d!=null){r.R(0,this.c.$1(a))
s.ay=B.e}break
case B.D:s.b7()
$label0$1:{q=a.keyCode
if(13===q){r=s.as
if(r.d!=null){r.R(0,J.fO(this.d.$0()))
s.bp()
s.ay=B.e}break $label0$1}if(8===q){r=s.x
if(r.gG()>s.y.gG()){r.sG(r.gG()-1)
s.br(" ",!1)
r.sG(r.gG()-1)}break $label0$1}p=a.key
if(p.length===1&&s.x.gG()<s.z.gG())s.br(p,!1)}break
case B.k:break}},
$S:7}
A.cV.prototype={
$1(a){var s
a.preventDefault()
s=this.a
if(s.ay===B.k&&s.ax.d!=null){s.ax.R(0,this.b.$1(a))
s.ay=B.e}},
$S:7}
A.cW.prototype={
$1(a){var s,r,q,p=this.a,o=p.w
o===$&&A.aj()
if(o.z&&J.ak(v.G.document.activeElement,o.w)&&p.ay===B.D)if(p.cy)p.b7()
else{s=p.x
r=s.c
s=s.d
q=$.fz()
o.bu(p.d,q,new A.m(r*10,s*8))
p.cy=!0}},
$S:21}
A.G.prototype={
X(){return"Direction."+this.b},
gbo(){switch(this){case B.o:var s=B.e9
break
case B.p:s=B.e4
break
case B.q:s=B.e6
break
case B.r:s=B.e5
break
case B.t:s=B.ea
break
case B.u:s=B.eb
break
case B.v:s=B.e7
break
case B.w:s=B.e8
break
default:s=null}return s}}
A.a8.prototype={
X(){return"Mode."+this.b}}
A.cw.prototype={
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
n=n.v(0,m.m(0,l))
k=$.p()
if(n.D(0,k)>0)j.bl(B.b,r,o)
else if(s.b.v(0,m.m(0,l)).D(0,k)>0)j.bl(B.c,r,o)
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
for(s=A.h_(new A.b5(A.a("   ___  _   _        _ _     \n  / _ \\| |_| |_  ___| | |___ \n | (_) |  _| ' \\/ -_) | / _ \\\n  \\___/ \\__|_||_\\___|_|_\\___/\n".split("\n"),t.s),new A.cx(),t.U),0,t.N),r=s.a,r=r.gu(r),s=s.b,q=new A.aK(r,s);q.p();){p=q.c
p=p>=0?new A.m(s+p,r.gq()):A.U(A.dZ())
o.aN(p.b,"lightgreen",8,p.a+3)}},
ac(){var s=0,r=A.bx(t.A),q,p=this,o,n,m,l
var $async$ac=A.by(function(a,b){if(a===1)return A.br(b,r)
while(true)switch(s){case 0:p.aT()
o=p.a
o.B("Select a difficulty level:",10,10)
o.B("(A) Easy",12,12)
o.H("(B) Medium",12)
o.H("(C) Hard",12)
o.H("(D) Expert",12)
n=null
case 3:if(!(n==null)){s=5
break}if(o.ay!==B.e)A.U(A.bG("Terminal already awaiting input."))
o.ay=B.j
m=o.at
s=6
return A.O(new A.F(m,A.a0(m).i("F<1>")).gT(0),$async$ac)
case 6:l=b.b.toLowerCase()
$label0$0:{if("a"===l){m=B.dW
break $label0$0}if("b"===l){m=B.dV
break $label0$0}if("c"===l){m=B.e1
break $label0$0}if("d"===l){m=B.dX
break $label0$0}m=null
break $label0$0}case 4:n=m
s=3
break
case 5:q=n
s=1
break
case 1:return A.bs(q,r)}})
return A.bt($async$ac,r)},
ae(){var s=0,r=A.bx(t.h),q,p=this,o,n,m,l
var $async$ae=A.by(function(a,b){if(a===1)return A.br(b,r)
while(true)switch(s){case 0:p.aT()
o=p.a
o.B("Select your token:",10,10)
o.B("(A) Naught (Move First)",12,12)
o.H("(B) Cross (Move Second)",12)
n=null
case 3:if(!(n==null)){s=5
break}if(o.ay!==B.e)A.U(A.bG("Terminal already awaiting input."))
o.ay=B.j
m=o.at
s=6
return A.O(new A.F(m,A.a0(m).i("F<1>")).gT(0),$async$ae)
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
case 1:return A.bs(q,r)}})
return A.bt($async$ae,r)},
ad(){var s=0,r=A.bx(t.R),q,p=this,o,n,m,l,k,j
var $async$ad=A.by(function(a,b){if(a===1)return A.br(b,r)
while(true)switch(s){case 0:j=p.b.gaf()
o=p.a,n=-1,m=-1
case 3:if(!!B.i.c7(j,new A.m(n,m))){s=4
break}if(o.ay!==B.e)A.U(A.bG("Terminal already awaiting input."))
o.ay=B.k
l=o.ax
s=5
return A.O(new A.F(l,A.a0(l).i("F<1>")).gT(0),$async$ad)
case 5:k=b
n=B.a.n(k.a-3,3)
m=B.a.n(k.b-3,3)
s=3
break
case 4:q=new A.m(n,m)
s=1
break
case 1:return A.bs(q,r)}})
return A.bt($async$ad,r)},
a2(a){return this.bA(a)},
bA(a){var s=0,r=A.bx(t.n),q=this,p,o,n
var $async$a2=A.by(function(b,c){if(b===1)return A.br(c,r)
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
case 2:return A.bs(null,r)}})
return A.bt($async$a2,r)},
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
L(){var s=0,r=A.bx(t.n),q=this,p,o,n,m,l,k,j,i,h,g
var $async$L=A.by(function(a,b){if(a===1)return A.br(b,r)
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
return A.O(A.eJ(A.eH(100),n),$async$L)
case 12:s=p.c===l?13:15
break
case 13:s=16
return A.O(q.ad(),$async$L)
case 16:s=14
break
case 15:s=17
return A.O(A.dL(p,m),$async$L)
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
case 3:return A.bs(null,r)}})
return A.bt($async$L,r)}}
A.cx.prototype={
$1(a){return a.length!==0},
$S:22}
A.bZ.prototype={
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
U(a,b,c){var s=this,r=$.u().m(0,b*8+c)
switch(a){case B.b:s.a=s.a.ah(0,r);++s.d
if(s.b.v(0,r).D(0,$.p())>0){--s.e
s.b=s.b.v(0,$.ew().aU(0,r))}break
case B.c:s.b=s.b.ah(0,r);++s.e
if(s.a.v(0,r).D(0,$.p())>0){--s.d
s.a=s.a.v(0,$.ew().aU(0,r))}break}},
gaf(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=A.a([],t.w)
for(s=0;s<8;++s)for(r=s*8,q=0;q<8;++q)if(g.a.ah(0,g.b).v(0,$.u().m(0,r+q)).D(0,$.p())<=0){for(p=0,o=0;o<8;++o){n=B.A[o].gbo()
m=n.a
l=n.b
k=s+m
j=q+l
i=0
while(!0){h=k>=0
if(!(h&&k<8&&j>=0&&j<8&&g.gaM().v(0,$.u().m(0,k*8+j)).D(0,$.p())>0))break;++i
k+=m
j+=l}if(i>0)h=h&&k<8&&j>=0&&j<8&&g.gbt().v(0,$.u().m(0,k*8+j)).D(0,$.p())>0
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
if(!(j&&l<8&&m>=0&&m<8&&i.gaM().v(0,$.u().m(0,l*8+m)).D(0,$.p())>0))break;++k
l+=q
m+=p}if(k>0)j=j&&l<8&&m>=0&&m<8&&i.gbt().v(0,$.u().m(0,l*8+m)).D(0,$.p())>0
else j=!1
if(j)while(!0){if(!(o>=0&&o<8&&n>=0&&n<8&&i.gaM().v(0,$.u().m(0,o*8+n)).D(0,$.p())>0))break
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
o=o.v(0,n.m(0,p))
m=$.p()
if(o.D(0,m)>0)l+="o "
else l=this.b.v(0,n.m(0,p)).D(0,m)>0?l+"x ":l+". "}l+="\n"}return l.charCodeAt(0)==0?l:l}}
A.b0.prototype={
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
default:s=null}return s}};(function aliases(){var s=J.X.prototype
s.bC=s.h})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._static_2,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u
s(A,"iG","hq",2)
s(A,"iH","hr",2)
s(A,"iI","hs",2)
r(A,"fq","iB",0)
s(A,"iJ","iv",4)
q(A,"iK","iw",5)
p(A.l.prototype,"gb2","bN",5)
o(A.bb.prototype,"gbW","bX",0)
var n
o(n=A.c3.prototype,"gaF","a0",0)
o(n,"gaD","Z",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.e,null)
q(A.e,[A.e0,J.bJ,J.bB,A.k,A.a3,A.cK,A.L,A.an,A.c8,A.aK,A.aH,A.aw,A.bF,A.d0,A.cC,A.aG,A.bj,A.aU,A.cA,A.bO,A.bN,A.cy,A.dt,A.da,A.H,A.ci,A.co,A.bl,A.c9,A.E,A.au,A.cd,A.cc,A.Z,A.l,A.ca,A.cg,A.cj,A.bb,A.cm,A.dC,A.b2,A.ds,A.av,A.o,A.q,A.aE,A.dc,A.c_,A.b3,A.dd,A.cu,A.bI,A.aV,A.z,A.cn,A.c4,A.dq,A.V,A.am,A.ao,A.aq,A.c3,A.cR,A.cw,A.bZ])
q(J.bJ,[J.bK,J.aM,J.aO,J.aN,J.aP,J.al,J.a5])
q(J.aO,[J.X,J.r,A.bP,A.aY])
q(J.X,[J.c0,J.aa,J.W])
r(J.cz,J.r)
q(J.al,[J.aL,J.bL])
q(A.k,[A.aR,A.R,A.bM,A.c6,A.c2,A.ch,A.bC,A.K,A.b4,A.c5,A.a9,A.bE])
q(A.a3,[A.cr,A.cs,A.cQ,A.dM,A.dO,A.d4,A.d3,A.dD,A.dn,A.cO,A.cN,A.dx,A.d9,A.cZ,A.cY,A.cU,A.cV,A.cW,A.cx])
q(A.cr,[A.dR,A.d5,A.d6,A.dz,A.dy,A.cv,A.de,A.dj,A.di,A.dg,A.df,A.dm,A.dl,A.dk,A.cP,A.cM,A.du,A.dF,A.dG,A.dw,A.cG,A.cH,A.cI,A.cJ,A.cX,A.cS,A.cT])
q(A.L,[A.aF,A.b5,A.aJ])
q(A.aF,[A.a7,A.aT,A.aS])
r(A.b1,A.a7)
r(A.ck,A.aw)
q(A.ck,[A.m,A.cl])
r(A.aI,A.bF)
r(A.b_,A.R)
q(A.cQ,[A.cL,A.aD])
r(A.a6,A.aU)
r(A.aQ,A.a6)
q(A.cs,[A.dN,A.dE,A.dH,A.dp,A.cB,A.d8,A.cF])
q(A.aY,[A.bQ,A.ap])
q(A.ap,[A.bd,A.bf])
r(A.be,A.bd)
r(A.aW,A.be)
r(A.bg,A.bf)
r(A.aX,A.bg)
q(A.aW,[A.bR,A.bS])
q(A.aX,[A.bT,A.bU,A.bV,A.bW,A.bX,A.aZ,A.bY])
r(A.bm,A.ch)
r(A.bk,A.au)
r(A.ba,A.bk)
r(A.F,A.ba)
r(A.ce,A.cd)
r(A.b9,A.ce)
r(A.b6,A.cc)
r(A.cf,A.cg)
r(A.dv,A.dC)
r(A.bi,A.b2)
r(A.bc,A.bi)
q(A.K,[A.as,A.bH])
q(A.dc,[A.M,A.at,A.G,A.a8,A.b0])
s(A.bd,A.o)
s(A.be,A.aH)
s(A.bf,A.o)
s(A.bg,A.aH)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{c:"int",w:"double",fu:"num",A:"String",dI:"bool",z:"Null",i:"List",e:"Object",jd:"Map"},mangledNames:{},types:["~()","z()","~(~())","z(@)","~(@)","~(e,I)","c(c,c)","z(n)","Q<~>()","@(@)","@(@,A)","@(A)","z(~())","z(@,I)","~(c,@)","z(e,I)","~(e?,e?)","c(c)","ao(n)","am(n)","A()","~(d_)","dI(A)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.m&&a.b(c.a)&&b.b(c.b),"2;black,white":(a,b)=>c=>c instanceof A.cl&&a.b(c.a)&&b.b(c.b)}}
A.hQ(v.typeUniverse,JSON.parse('{"c0":"X","aa":"X","W":"X","bK":{"h":[]},"aM":{"h":[]},"aO":{"n":[]},"X":{"n":[]},"r":{"i":["1"],"n":[]},"cz":{"r":["1"],"i":["1"],"n":[]},"al":{"w":[]},"aL":{"w":[],"c":[],"h":[]},"bL":{"w":[],"h":[]},"a5":{"A":[],"h":[]},"aR":{"k":[]},"aF":{"L":["1"]},"a7":{"L":["1"]},"b5":{"L":["1"]},"aJ":{"L":["+(c,1)"]},"b1":{"a7":["1"],"L":["1"],"a7.E":"1"},"aI":{"bF":["1","2"]},"b_":{"R":[],"k":[]},"bM":{"k":[]},"c6":{"k":[]},"bj":{"I":[]},"c2":{"k":[]},"a6":{"aU":["1","2"]},"aT":{"L":["1"]},"aS":{"L":["aV<1,2>"]},"aQ":{"a6":["1","2"],"aU":["1","2"]},"bP":{"n":[],"h":[]},"aY":{"n":[]},"bQ":{"n":[],"h":[]},"ap":{"B":["1"],"n":[]},"aW":{"o":["w"],"i":["w"],"B":["w"],"n":[]},"aX":{"o":["c"],"i":["c"],"B":["c"],"n":[]},"bR":{"o":["w"],"i":["w"],"B":["w"],"n":[],"h":[],"o.E":"w"},"bS":{"o":["w"],"i":["w"],"B":["w"],"n":[],"h":[],"o.E":"w"},"bT":{"o":["c"],"i":["c"],"B":["c"],"n":[],"h":[],"o.E":"c"},"bU":{"o":["c"],"i":["c"],"B":["c"],"n":[],"h":[],"o.E":"c"},"bV":{"o":["c"],"i":["c"],"B":["c"],"n":[],"h":[],"o.E":"c"},"bW":{"o":["c"],"i":["c"],"B":["c"],"n":[],"h":[],"o.E":"c"},"bX":{"d2":[],"o":["c"],"i":["c"],"B":["c"],"n":[],"h":[],"o.E":"c"},"aZ":{"o":["c"],"i":["c"],"B":["c"],"n":[],"h":[],"o.E":"c"},"bY":{"o":["c"],"i":["c"],"B":["c"],"n":[],"h":[],"o.E":"c"},"ch":{"k":[]},"bm":{"R":[],"k":[]},"bl":{"d_":[]},"E":{"k":[]},"F":{"au":["1"]},"b6":{"cc":["1"]},"l":{"Q":["1"]},"ba":{"au":["1"]},"bk":{"au":["1"]},"bc":{"b2":["1"]},"bi":{"b2":["1"]},"bC":{"k":[]},"R":{"k":[]},"K":{"k":[]},"as":{"k":[]},"bH":{"k":[]},"b4":{"k":[]},"c5":{"k":[]},"a9":{"k":[]},"bE":{"k":[]},"c_":{"k":[]},"b3":{"k":[]},"bI":{"k":[]},"cn":{"I":[]},"h2":{"i":["c"]},"ho":{"i":["c"]},"hn":{"i":["c"]},"h0":{"i":["c"]},"hm":{"i":["c"]},"h1":{"i":["c"]},"d2":{"i":["c"]},"fY":{"i":["w"]},"fZ":{"i":["w"]}}'))
A.hP(v.typeUniverse,JSON.parse('{"aF":1,"c8":1,"aK":1,"aH":1,"bO":1,"ap":1,"ba":1,"ce":1,"cd":1,"bk":1,"cg":1,"cf":1,"cj":1,"bb":1,"cm":1,"bi":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.dK
return{o:s("V"),Q:s("k"),Z:s("jb"),V:s("r<V>"),G:s("r<i<V>>"),f:s("r<e>"),w:s("r<+(c,c)>"),s:s("r<A>"),x:s("r<d2>"),b:s("r<@>"),t:s("r<c>"),T:s("aM"),m:s("n"),g:s("W"),p:s("B<@>"),W:s("am"),j:s("i<@>"),A:s("a8"),q:s("ao"),P:s("z"),K:s("e"),h:s("b0"),L:s("jf"),F:s("+()"),R:s("+(c,c)"),r:s("b1<A>"),l:s("I"),N:s("A"),E:s("d_"),B:s("h"),_:s("R"),J:s("aa"),U:s("b5<A>"),c:s("l<@>"),a:s("l<c>"),D:s("l<~>"),y:s("dI"),i:s("w"),z:s("@"),v:s("@(e)"),C:s("@(e,I)"),S:s("c"),O:s("Q<z>?"),X:s("e?"),M:s("A?"),u:s("dI?"),I:s("w?"),Y:s("c?"),d:s("fu?"),H:s("fu"),n:s("~"),e:s("~(e)"),k:s("~(e,I)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.N=J.bJ.prototype
B.i=J.r.prototype
B.a=J.aL.prototype
B.y=J.al.prototype
B.z=J.a5.prototype
B.O=J.W.prototype
B.P=J.aO.prototype
B.C=J.c0.prototype
B.l=J.aa.prototype
B.E=new A.bI()
B.m=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.F=function() {
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
B.K=function(getTagFallback) {
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
B.G=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.J=function(hooks) {
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
B.I=function(hooks) {
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
B.H=function(hooks) {
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

B.L=new A.c_()
B.f=new A.cK()
B.M=new A.dq()
B.d=new A.dv()
B.h=new A.cn()
B.o=new A.G("n")
B.p=new A.G("e")
B.q=new A.G("s")
B.r=new A.G("w")
B.t=new A.G("ne")
B.u=new A.G("nw")
B.v=new A.G("se")
B.w=new A.G("sw")
B.x=new A.aE(0)
B.A=A.a(s([B.o,B.p,B.q,B.r,B.t,B.u,B.v,B.w]),A.dK("r<G>"))
B.de=A.a(s([126,129,165,129,189,153,129,126]),t.t)
B.ag=A.a(s([126,255,219,255,195,231,255,126]),t.t)
B.dL=A.a(s([108,254,254,254,124,56,16,0]),t.t)
B.cb=A.a(s([16,56,124,254,124,56,16,0]),t.t)
B.b9=A.a(s([56,124,56,254,254,124,56,124]),t.t)
B.bl=A.a(s([16,16,56,124,254,124,56,124]),t.t)
B.aE=A.a(s([0,0,24,60,60,24,0,0]),t.t)
B.aH=A.a(s([255,255,231,195,195,231,255,255]),t.t)
B.aT=A.a(s([0,60,102,66,66,102,60,0]),t.t)
B.cZ=A.a(s([255,195,153,189,189,153,195,255]),t.t)
B.dK=A.a(s([15,7,15,125,204,204,204,120]),t.t)
B.dJ=A.a(s([60,102,102,102,60,24,126,24]),t.t)
B.cW=A.a(s([63,51,63,48,48,112,240,224]),t.t)
B.a_=A.a(s([127,99,127,99,99,103,230,192]),t.t)
B.a4=A.a(s([153,90,60,231,231,60,90,153]),t.t)
B.aB=A.a(s([128,224,248,254,248,224,128,0]),t.t)
B.bH=A.a(s([2,14,62,254,62,14,2,0]),t.t)
B.cp=A.a(s([24,60,126,24,24,126,60,24]),t.t)
B.cl=A.a(s([102,102,102,102,102,0,102,0]),t.t)
B.cv=A.a(s([127,219,219,123,27,27,27,0]),t.t)
B.cw=A.a(s([62,99,56,108,108,56,204,120]),t.t)
B.bV=A.a(s([0,0,0,0,126,126,126,0]),t.t)
B.bY=A.a(s([24,60,126,24,126,60,24,255]),t.t)
B.V=A.a(s([24,60,126,24,24,24,24,0]),t.t)
B.dj=A.a(s([24,24,24,24,126,60,24,0]),t.t)
B.dc=A.a(s([0,24,12,254,12,24,0,0]),t.t)
B.ay=A.a(s([0,48,96,254,96,48,0,0]),t.t)
B.c2=A.a(s([0,0,192,192,192,254,0,0]),t.t)
B.bA=A.a(s([0,36,102,255,102,36,0,0]),t.t)
B.ae=A.a(s([0,24,60,126,255,255,0,0]),t.t)
B.bZ=A.a(s([0,255,255,126,60,24,0,0]),t.t)
B.b4=A.a(s([0,0,0,0,0,0,0,0]),t.t)
B.bI=A.a(s([48,120,120,48,48,0,48,0]),t.t)
B.a2=A.a(s([108,108,108,0,0,0,0,0]),t.t)
B.as=A.a(s([108,108,254,108,254,108,108,0]),t.t)
B.c6=A.a(s([48,124,192,120,12,248,48,0]),t.t)
B.U=A.a(s([0,198,204,24,48,102,198,0]),t.t)
B.cI=A.a(s([56,108,56,118,220,204,118,0]),t.t)
B.ar=A.a(s([96,96,192,0,0,0,0,0]),t.t)
B.Z=A.a(s([24,48,96,96,96,48,24,0]),t.t)
B.bE=A.a(s([96,48,24,24,24,48,96,0]),t.t)
B.cz=A.a(s([0,102,60,255,60,102,0,0]),t.t)
B.dS=A.a(s([0,48,48,252,48,48,0,0]),t.t)
B.c8=A.a(s([0,0,0,0,0,48,48,96]),t.t)
B.bz=A.a(s([0,0,0,252,0,0,0,0]),t.t)
B.cn=A.a(s([0,0,0,0,0,48,48,0]),t.t)
B.a9=A.a(s([6,12,24,48,96,192,128,0]),t.t)
B.bc=A.a(s([124,198,206,222,246,230,124,0]),t.t)
B.cq=A.a(s([48,112,48,48,48,48,252,0]),t.t)
B.c4=A.a(s([120,204,12,56,96,204,252,0]),t.t)
B.dN=A.a(s([120,204,12,56,12,204,120,0]),t.t)
B.bG=A.a(s([28,60,108,204,254,12,30,0]),t.t)
B.dd=A.a(s([252,192,248,12,12,204,120,0]),t.t)
B.dv=A.a(s([56,96,192,248,204,204,120,0]),t.t)
B.c5=A.a(s([252,204,12,24,48,48,48,0]),t.t)
B.cC=A.a(s([120,204,204,120,204,204,120,0]),t.t)
B.bj=A.a(s([120,204,204,124,12,24,112,0]),t.t)
B.d6=A.a(s([0,48,48,0,0,48,48,0]),t.t)
B.aW=A.a(s([0,48,48,0,0,48,48,96]),t.t)
B.bF=A.a(s([24,48,96,192,96,48,24,0]),t.t)
B.bu=A.a(s([0,0,252,0,0,252,0,0]),t.t)
B.aG=A.a(s([96,48,24,12,24,48,96,0]),t.t)
B.aw=A.a(s([120,204,12,24,48,0,48,0]),t.t)
B.dr=A.a(s([124,198,222,222,222,192,120,0]),t.t)
B.ch=A.a(s([48,120,204,204,252,204,204,0]),t.t)
B.aQ=A.a(s([252,102,102,124,102,102,252,0]),t.t)
B.ai=A.a(s([60,102,192,192,192,102,60,0]),t.t)
B.aa=A.a(s([248,108,102,102,102,108,248,0]),t.t)
B.ao=A.a(s([254,98,104,120,104,98,254,0]),t.t)
B.ct=A.a(s([254,98,104,120,104,96,240,0]),t.t)
B.au=A.a(s([60,102,192,192,206,102,62,0]),t.t)
B.ax=A.a(s([204,204,204,252,204,204,204,0]),t.t)
B.cR=A.a(s([120,48,48,48,48,48,120,0]),t.t)
B.bT=A.a(s([30,12,12,12,204,204,120,0]),t.t)
B.bL=A.a(s([230,102,108,120,108,102,230,0]),t.t)
B.bK=A.a(s([240,96,96,96,98,102,254,0]),t.t)
B.aR=A.a(s([198,238,254,254,214,198,198,0]),t.t)
B.a1=A.a(s([198,230,246,222,206,198,198,0]),t.t)
B.d0=A.a(s([56,108,198,198,198,108,56,0]),t.t)
B.bp=A.a(s([252,102,102,124,96,96,240,0]),t.t)
B.cL=A.a(s([120,204,204,204,220,120,28,0]),t.t)
B.T=A.a(s([252,102,102,124,108,102,230,0]),t.t)
B.al=A.a(s([120,204,224,112,28,204,120,0]),t.t)
B.dE=A.a(s([252,180,48,48,48,48,120,0]),t.t)
B.aO=A.a(s([204,204,204,204,204,204,252,0]),t.t)
B.a6=A.a(s([204,204,204,204,204,120,48,0]),t.t)
B.cU=A.a(s([198,198,198,214,254,238,198,0]),t.t)
B.cO=A.a(s([198,198,108,56,56,108,198,0]),t.t)
B.a8=A.a(s([204,204,204,120,48,48,120,0]),t.t)
B.X=A.a(s([254,198,140,24,50,102,254,0]),t.t)
B.bB=A.a(s([120,96,96,96,96,96,120,0]),t.t)
B.cG=A.a(s([192,96,48,24,12,6,2,0]),t.t)
B.bD=A.a(s([120,24,24,24,24,24,120,0]),t.t)
B.du=A.a(s([16,56,108,198,0,0,0,0]),t.t)
B.S=A.a(s([0,0,0,0,0,0,0,255]),t.t)
B.aP=A.a(s([48,48,24,0,0,0,0,0]),t.t)
B.dk=A.a(s([0,0,120,12,124,204,118,0]),t.t)
B.ck=A.a(s([224,96,96,124,102,102,220,0]),t.t)
B.cN=A.a(s([0,0,120,204,192,204,120,0]),t.t)
B.ba=A.a(s([28,12,12,124,204,204,118,0]),t.t)
B.dx=A.a(s([0,0,120,204,252,192,120,0]),t.t)
B.aU=A.a(s([56,108,96,240,96,96,240,0]),t.t)
B.cK=A.a(s([0,0,118,204,204,124,12,248]),t.t)
B.aF=A.a(s([224,96,108,118,102,102,230,0]),t.t)
B.cA=A.a(s([48,0,112,48,48,48,120,0]),t.t)
B.bO=A.a(s([12,0,12,12,12,204,204,120]),t.t)
B.bh=A.a(s([224,96,102,108,120,108,230,0]),t.t)
B.bQ=A.a(s([112,48,48,48,48,48,120,0]),t.t)
B.by=A.a(s([0,0,204,254,254,214,198,0]),t.t)
B.bR=A.a(s([0,0,248,204,204,204,204,0]),t.t)
B.bk=A.a(s([0,0,120,204,204,204,120,0]),t.t)
B.dB=A.a(s([0,0,220,102,102,124,96,240]),t.t)
B.dy=A.a(s([0,0,118,204,204,124,12,30]),t.t)
B.bv=A.a(s([0,0,220,118,102,96,240,0]),t.t)
B.d3=A.a(s([0,0,124,192,120,12,248,0]),t.t)
B.cX=A.a(s([16,48,124,48,48,52,24,0]),t.t)
B.ce=A.a(s([0,0,204,204,204,204,118,0]),t.t)
B.b8=A.a(s([0,0,204,204,204,120,48,0]),t.t)
B.bo=A.a(s([0,0,198,214,254,254,108,0]),t.t)
B.bM=A.a(s([0,0,198,108,56,108,198,0]),t.t)
B.dH=A.a(s([0,0,204,204,204,124,12,248]),t.t)
B.di=A.a(s([0,0,252,152,48,100,252,0]),t.t)
B.be=A.a(s([28,48,48,224,48,48,28,0]),t.t)
B.d2=A.a(s([24,24,24,0,24,24,24,0]),t.t)
B.aJ=A.a(s([224,48,48,28,48,48,224,0]),t.t)
B.dR=A.a(s([118,220,0,0,0,0,0,0]),t.t)
B.b7=A.a(s([0,16,56,108,198,198,254,0]),t.t)
B.aA=A.a(s([120,204,192,204,120,24,12,120]),t.t)
B.dg=A.a(s([0,204,0,204,204,204,126,0]),t.t)
B.dG=A.a(s([28,0,120,204,252,192,120,0]),t.t)
B.c7=A.a(s([126,195,60,6,62,102,63,0]),t.t)
B.an=A.a(s([204,0,120,12,124,204,126,0]),t.t)
B.bb=A.a(s([224,0,120,12,124,204,126,0]),t.t)
B.ad=A.a(s([48,48,120,12,124,204,126,0]),t.t)
B.br=A.a(s([0,0,120,192,192,120,12,56]),t.t)
B.dq=A.a(s([126,195,60,102,126,96,60,0]),t.t)
B.aS=A.a(s([204,0,120,204,252,192,120,0]),t.t)
B.d4=A.a(s([224,0,120,204,252,192,120,0]),t.t)
B.dh=A.a(s([204,0,112,48,48,48,120,0]),t.t)
B.cV=A.a(s([124,198,56,24,24,24,60,0]),t.t)
B.b3=A.a(s([224,0,112,48,48,48,120,0]),t.t)
B.dM=A.a(s([198,56,108,198,254,198,198,0]),t.t)
B.d1=A.a(s([48,48,0,120,204,252,204,0]),t.t)
B.bJ=A.a(s([28,0,252,96,120,96,252,0]),t.t)
B.dF=A.a(s([0,0,127,12,127,204,127,0]),t.t)
B.aX=A.a(s([62,108,204,254,204,204,206,0]),t.t)
B.dz=A.a(s([120,204,0,120,204,204,120,0]),t.t)
B.aj=A.a(s([0,204,0,120,204,204,120,0]),t.t)
B.dO=A.a(s([0,224,0,120,204,204,120,0]),t.t)
B.aV=A.a(s([120,204,0,204,204,204,126,0]),t.t)
B.cY=A.a(s([0,224,0,204,204,204,126,0]),t.t)
B.aD=A.a(s([0,204,0,204,204,124,12,248]),t.t)
B.ap=A.a(s([195,24,60,102,102,60,24,0]),t.t)
B.da=A.a(s([204,0,204,204,204,204,120,0]),t.t)
B.a3=A.a(s([24,24,126,192,192,126,24,24]),t.t)
B.aM=A.a(s([56,108,100,240,96,230,252,0]),t.t)
B.b5=A.a(s([204,204,120,252,48,252,48,48]),t.t)
B.dl=A.a(s([248,204,204,250,198,207,198,199]),t.t)
B.bU=A.a(s([14,27,24,60,24,24,216,112]),t.t)
B.aI=A.a(s([28,0,120,12,124,204,126,0]),t.t)
B.cj=A.a(s([56,0,112,48,48,48,120,0]),t.t)
B.aL=A.a(s([0,28,0,120,204,204,120,0]),t.t)
B.cD=A.a(s([0,28,0,204,204,204,126,0]),t.t)
B.b0=A.a(s([0,248,0,248,204,204,204,0]),t.t)
B.cT=A.a(s([252,0,204,236,252,220,204,0]),t.t)
B.ak=A.a(s([60,108,108,62,0,126,0,0]),t.t)
B.cg=A.a(s([56,108,108,56,0,124,0,0]),t.t)
B.db=A.a(s([48,0,48,96,192,204,120,0]),t.t)
B.b2=A.a(s([0,0,0,252,192,192,0,0]),t.t)
B.aK=A.a(s([0,0,0,252,12,12,0,0]),t.t)
B.d5=A.a(s([195,198,204,222,51,102,204,15]),t.t)
B.aC=A.a(s([195,198,204,219,55,111,207,3]),t.t)
B.bX=A.a(s([24,24,0,24,24,24,24,0]),t.t)
B.bW=A.a(s([0,51,102,204,102,51,0,0]),t.t)
B.bg=A.a(s([0,204,102,51,102,204,0,0]),t.t)
B.cF=A.a(s([34,136,34,136,34,136,34,136]),t.t)
B.dA=A.a(s([85,170,85,170,85,170,85,170]),t.t)
B.bP=A.a(s([219,119,219,238,219,119,219,238]),t.t)
B.b6=A.a(s([24,24,24,24,24,24,24,24]),t.t)
B.b1=A.a(s([24,24,24,24,248,24,24,24]),t.t)
B.c3=A.a(s([24,24,248,24,248,24,24,24]),t.t)
B.dQ=A.a(s([54,54,54,54,246,54,54,54]),t.t)
B.cr=A.a(s([0,0,0,0,254,54,54,54]),t.t)
B.aY=A.a(s([0,0,248,24,248,24,24,24]),t.t)
B.ah=A.a(s([54,54,246,6,246,54,54,54]),t.t)
B.cx=A.a(s([54,54,54,54,54,54,54,54]),t.t)
B.cf=A.a(s([0,0,254,6,246,54,54,54]),t.t)
B.cB=A.a(s([54,54,246,6,254,0,0,0]),t.t)
B.av=A.a(s([54,54,54,54,254,0,0,0]),t.t)
B.a7=A.a(s([24,24,248,24,248,0,0,0]),t.t)
B.ac=A.a(s([0,0,0,0,248,24,24,24]),t.t)
B.a5=A.a(s([24,24,24,24,31,0,0,0]),t.t)
B.c1=A.a(s([24,24,24,24,255,0,0,0]),t.t)
B.bt=A.a(s([0,0,0,0,255,24,24,24]),t.t)
B.d9=A.a(s([24,24,24,24,31,24,24,24]),t.t)
B.c_=A.a(s([0,0,0,0,255,0,0,0]),t.t)
B.cy=A.a(s([24,24,24,24,255,24,24,24]),t.t)
B.cJ=A.a(s([24,24,31,24,31,24,24,24]),t.t)
B.bi=A.a(s([54,54,54,54,55,54,54,54]),t.t)
B.dw=A.a(s([54,54,55,48,63,0,0,0]),t.t)
B.dp=A.a(s([0,0,63,48,55,54,54,54]),t.t)
B.bN=A.a(s([54,54,247,0,255,0,0,0]),t.t)
B.bC=A.a(s([0,0,255,0,247,54,54,54]),t.t)
B.b_=A.a(s([54,54,55,48,55,54,54,54]),t.t)
B.aZ=A.a(s([0,0,255,0,255,0,0,0]),t.t)
B.dI=A.a(s([54,54,247,0,247,54,54,54]),t.t)
B.cP=A.a(s([24,24,255,0,255,0,0,0]),t.t)
B.Q=A.a(s([54,54,54,54,255,0,0,0]),t.t)
B.dC=A.a(s([0,0,255,0,255,24,24,24]),t.t)
B.c9=A.a(s([0,0,0,0,255,54,54,54]),t.t)
B.cs=A.a(s([54,54,54,54,63,0,0,0]),t.t)
B.bx=A.a(s([24,24,31,24,31,0,0,0]),t.t)
B.cm=A.a(s([0,0,31,24,31,24,24,24]),t.t)
B.cM=A.a(s([0,0,0,0,63,54,54,54]),t.t)
B.cS=A.a(s([54,54,54,54,255,54,54,54]),t.t)
B.bS=A.a(s([24,24,255,24,255,24,24,24]),t.t)
B.dm=A.a(s([24,24,24,24,248,0,0,0]),t.t)
B.bd=A.a(s([0,0,0,0,31,24,24,24]),t.t)
B.ca=A.a(s([255,255,255,255,255,255,255,255]),t.t)
B.cd=A.a(s([0,0,0,0,255,255,255,255]),t.t)
B.bn=A.a(s([240,240,240,240,240,240,240,240]),t.t)
B.cu=A.a(s([15,15,15,15,15,15,15,15]),t.t)
B.d8=A.a(s([255,255,255,255,0,0,0,0]),t.t)
B.dP=A.a(s([0,0,118,220,200,220,118,0]),t.t)
B.ds=A.a(s([0,120,204,248,204,248,192,192]),t.t)
B.at=A.a(s([0,252,204,192,192,192,192,0]),t.t)
B.cc=A.a(s([0,254,108,108,108,108,108,0]),t.t)
B.dn=A.a(s([252,204,96,48,96,204,252,0]),t.t)
B.bq=A.a(s([0,0,126,216,216,216,112,0]),t.t)
B.bw=A.a(s([0,102,102,102,102,124,96,192]),t.t)
B.cH=A.a(s([0,118,220,24,24,24,24,0]),t.t)
B.am=A.a(s([252,48,120,204,204,120,48,252]),t.t)
B.aN=A.a(s([56,108,198,254,198,108,56,0]),t.t)
B.aq=A.a(s([56,108,198,198,108,108,238,0]),t.t)
B.R=A.a(s([28,48,24,124,204,204,120,0]),t.t)
B.dD=A.a(s([0,0,126,219,219,126,0,0]),t.t)
B.bs=A.a(s([6,12,126,219,219,126,96,192]),t.t)
B.af=A.a(s([56,96,192,248,192,96,56,0]),t.t)
B.co=A.a(s([120,204,204,204,204,204,204,0]),t.t)
B.cQ=A.a(s([0,252,0,252,0,252,0,0]),t.t)
B.ab=A.a(s([48,48,252,48,48,0,252,0]),t.t)
B.bf=A.a(s([96,48,24,48,96,0,252,0]),t.t)
B.d_=A.a(s([24,48,96,48,24,0,252,0]),t.t)
B.bm=A.a(s([14,27,27,24,24,24,24,24]),t.t)
B.df=A.a(s([24,24,24,24,24,216,216,112]),t.t)
B.ci=A.a(s([48,48,0,252,0,48,48,0]),t.t)
B.W=A.a(s([0,118,220,0,118,220,0,0]),t.t)
B.cE=A.a(s([56,108,108,56,0,0,0,0]),t.t)
B.Y=A.a(s([0,0,0,24,24,0,0,0]),t.t)
B.dt=A.a(s([0,0,0,0,24,0,0,0]),t.t)
B.a0=A.a(s([15,12,12,12,236,108,60,28]),t.t)
B.c0=A.a(s([120,108,108,108,108,0,0,0]),t.t)
B.az=A.a(s([112,24,48,96,120,0,0,0]),t.t)
B.d7=A.a(s([0,0,60,60,60,60,0,0]),t.t)
B.dT=new A.aI(["\u263a",B.de,"\u263b",B.ag,"\u2665",B.dL,"\u2666",B.cb,"\u2663",B.b9,"\u2660",B.bl,"\u2022",B.aE,"\u25d8",B.aH,"\u25cb",B.aT,"\u25d9",B.cZ,"\u2642",B.dK,"\u2640",B.dJ,"\u266a",B.cW,"\u266b",B.a_,"\u263c",B.a4,"\u25ba",B.aB,"\u25c4",B.bH,"\u2195",B.cp,"\u203c",B.cl,"\xb6",B.cv,"\xa7",B.cw,"\u25ac",B.bV,"\u21a8",B.bY,"\u2191",B.V,"\u2193",B.dj,"\u2192",B.dc,"\u2190",B.ay,"\u221f",B.c2,"\u2194",B.bA,"\u25b2",B.ae,"\u25bc",B.bZ," ",B.b4,"!",B.bI,'"',B.a2,"#",B.as,"$",B.c6,"%",B.U,"&",B.cI,"'",B.ar,"(",B.Z,")",B.bE,"*",B.cz,"+",B.dS,",",B.c8,"-",B.bz,".",B.cn,"/",B.a9,"0",B.bc,"1",B.cq,"2",B.c4,"3",B.dN,"4",B.bG,"5",B.dd,"6",B.dv,"7",B.c5,"8",B.cC,"9",B.bj,":",B.d6,";",B.aW,"<",B.bF,"=",B.bu,">",B.aG,"?",B.aw,"@",B.dr,"A",B.ch,"B",B.aQ,"C",B.ai,"D",B.aa,"E",B.ao,"F",B.ct,"G",B.au,"H",B.ax,"I",B.cR,"J",B.bT,"K",B.bL,"L",B.bK,"M",B.aR,"N",B.a1,"O",B.d0,"P",B.bp,"Q",B.cL,"R",B.T,"S",B.al,"T",B.dE,"U",B.aO,"V",B.a6,"W",B.cU,"X",B.cO,"Y",B.a8,"Z",B.X,"[",B.bB,"\\",B.cG,"]",B.bD,"^",B.du,"_",B.S,"`",B.aP,"a",B.dk,"b",B.ck,"c",B.cN,"d",B.ba,"e",B.dx,"f",B.aU,"g",B.cK,"h",B.aF,"i",B.cA,"j",B.bO,"k",B.bh,"l",B.bQ,"m",B.by,"n",B.bR,"o",B.bk,"p",B.dB,"q",B.dy,"r",B.bv,"s",B.d3,"t",B.cX,"u",B.ce,"v",B.b8,"w",B.bo,"x",B.bM,"y",B.dH,"z",B.di,"{",B.be,"|",B.d2,"}",B.aJ,"~",B.dR,"\u2302",B.b7,"\xc7",B.aA,"\xfc",B.dg,"\xe9",B.dG,"\xe2",B.c7,"\xe4",B.an,"\xe0",B.bb,"\xe5",B.ad,"\xe7",B.br,"\xea",B.dq,"\xeb",B.aS,"\xe8",B.d4,"\xef",B.dh,"\xee",B.cV,"\xec",B.b3,"\xc4",B.dM,"\xc5",B.d1,"\xc9",B.bJ,"\xe6",B.dF,"\xc6",B.aX,"\xf4",B.dz,"\xf6",B.aj,"\xf2",B.dO,"\xfb",B.aV,"\xf9",B.cY,"\xff",B.aD,"\xd6",B.ap,"\xdc",B.da,"\xa2",B.a3,"\xa3",B.aM,"\xa5",B.b5,"\u20a7",B.dl,"\u0192",B.bU,"\xe1",B.aI,"\xed",B.cj,"\xf3",B.aL,"\xfa",B.cD,"\xf1",B.b0,"\xd1",B.cT,"\xaa",B.ak,"\xba",B.cg,"\xbf",B.db,"\u2310",B.b2,"\xac",B.aK,"\xbd",B.d5,"\xbc",B.aC,"\xa1",B.bX,"\xab",B.bW,"\xbb",B.bg,"\u2591",B.cF,"\u2592",B.dA,"\u2593",B.bP,"\u2502",B.b6,"\u2524",B.b1,"\u2561",B.c3,"\u2562",B.dQ,"\u2556",B.cr,"\u2555",B.aY,"\u2563",B.ah,"\u2551",B.cx,"\u2557",B.cf,"\u255d",B.cB,"\u255c",B.av,"\u255b",B.a7,"\u2510",B.ac,"\u2514",B.a5,"\u2534",B.c1,"\u252c",B.bt,"\u251c",B.d9,"\u2500",B.c_,"\u253c",B.cy,"\u255e",B.cJ,"\u255f",B.bi,"\u255a",B.dw,"\u2554",B.dp,"\u2569",B.bN,"\u2566",B.bC,"\u2560",B.b_,"\u2550",B.aZ,"\u256c",B.dI,"\u2567",B.cP,"\u2568",B.Q,"\u2564",B.dC,"\u2565",B.c9,"\u2559",B.cs,"\u2558",B.bx,"\u2552",B.cm,"\u2553",B.cM,"\u256b",B.cS,"\u256a",B.bS,"\u2518",B.dm,"\u250c",B.bd,"\u2588",B.ca,"\u2584",B.cd,"\u258c",B.bn,"\u2590",B.cu,"\u2580",B.d8,"\u03b1",B.dP,"\xdf",B.ds,"\u0393",B.at,"\u03c0",B.cc,"\u03a3",B.dn,"\u03c3",B.bq,"\xb5",B.bw,"\u03c4",B.cH,"\u03a6",B.am,"\u0398",B.aN,"\u03a9",B.aq,"\u03b4",B.R,"\u221e",B.dD,"\u03c6",B.bs,"\u03b5",B.af,"\u2229",B.co,"\u2261",B.cQ,"\xb1",B.ab,"\u2265",B.bf,"\u2264",B.d_,"\u2320",B.bm,"\u2321",B.df,"\xf7",B.ci,"\u2248",B.W,"\xb0",B.cE,"\u2219",B.Y,"\xb7",B.dt,"\u221a",B.a0,"\u207f",B.c0,"\xb2",B.az,"\u25a0",B.d7],A.dK("aI<A,i<c>>"))
B.B=new A.M("replace")
B.dU=new A.M("inverse")
B.dV=new A.a8(100,"medium")
B.dW=new A.a8(10,"easy")
B.dX=new A.a8(1500,"expert")
B.dY=new A.M("over")
B.dZ=new A.M("under")
B.e_=new A.M("stain")
B.e0=new A.M("delete")
B.e1=new A.a8(500,"hard")
B.e2=new A.M("maskDestination")
B.e3=new A.M("maskSource")
B.c=new A.b0("cross")
B.b=new A.b0("naught")
B.e4=new A.m(0,1)
B.e5=new A.m(0,-1)
B.e6=new A.m(1,0)
B.e7=new A.m(1,1)
B.e8=new A.m(1,-1)
B.e9=new A.m(-1,0)
B.ea=new A.m(-1,1)
B.eb=new A.m(-1,-1)
B.e=new A.at("ready")
B.j=new A.at("awaitingKey")
B.D=new A.at("awaitingString")
B.k=new A.at("awaitingMouseClick")
B.ec=A.J("j8")
B.ed=A.J("j9")
B.ee=A.J("fY")
B.ef=A.J("fZ")
B.eg=A.J("h0")
B.eh=A.J("h1")
B.ei=A.J("h2")
B.ej=A.J("e")
B.ek=A.J("hm")
B.el=A.J("d2")
B.em=A.J("hn")
B.en=A.J("ho")})();(function staticFields(){$.dr=null
$.D=A.a([],t.f)
$.eN=null
$.eE=null
$.eD=null
$.ft=null
$.fp=null
$.fw=null
$.dJ=null
$.dP=null
$.es=null
$.bh=A.a([],A.dK("r<i<e>?>"))
$.ax=null
$.bv=null
$.bw=null
$.el=!1
$.f=B.d
$.eV=null
$.eW=null
$.eX=null
$.eY=null
$.e9=A.db("_lastQuoRemDigits")
$.ea=A.db("_lastQuoRemUsed")
$.b8=A.db("_lastRemUsed")
$.eb=A.db("_lastRem_nsh")})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"ja","dT",()=>A.iU("_$dart_dartClosure"))
s($,"jB","fM",()=>B.d.bv(new A.dR()))
s($,"jj","fB",()=>A.S(A.d1({
toString:function(){return"$receiver$"}})))
s($,"jk","fC",()=>A.S(A.d1({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"jl","fD",()=>A.S(A.d1(null)))
s($,"jm","fE",()=>A.S(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"jp","fH",()=>A.S(A.d1(void 0)))
s($,"jq","fI",()=>A.S(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"jo","fG",()=>A.S(A.eS(null)))
s($,"jn","fF",()=>A.S(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"js","fK",()=>A.S(A.eS(void 0)))
s($,"jr","fJ",()=>A.S(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"jt","ex",()=>A.hp())
s($,"jc","dU",()=>$.fM())
s($,"jy","p",()=>A.b7(0))
s($,"jx","u",()=>A.b7(1))
s($,"jv","ez",()=>$.u().K(0))
s($,"ju","ey",()=>A.b7(1e4))
r($,"jw","fL",()=>A.hf("^\\s*([+-]?)((0x[a-f0-9]+)|(\\d+)|([a-z0-9]+))\\s*$",!1))
s($,"jz","dV",()=>A.ev(B.ej))
s($,"ji","fA",()=>A.e2(8,0,t.S))
s($,"jh","fz",()=>A.e2(8,255,t.S))
s($,"je","ew",()=>{var q="FFFFFFFFFFFFFFFF",p=A.hz(q,16)
if(p==null)A.U(A.eI("Could not parse BigInt",q))
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.bP,ArrayBufferView:A.aY,DataView:A.bQ,Float32Array:A.bR,Float64Array:A.bS,Int16Array:A.bT,Int32Array:A.bU,Int8Array:A.bV,Uint16Array:A.bW,Uint32Array:A.bX,Uint8ClampedArray:A.aZ,CanvasPixelArray:A.aZ,Uint8Array:A.bY})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.ap.$nativeSuperclassTag="ArrayBufferView"
A.bd.$nativeSuperclassTag="ArrayBufferView"
A.be.$nativeSuperclassTag="ArrayBufferView"
A.aW.$nativeSuperclassTag="ArrayBufferView"
A.bf.$nativeSuperclassTag="ArrayBufferView"
A.bg.$nativeSuperclassTag="ArrayBufferView"
A.aX.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.j2
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=othello.js.map
