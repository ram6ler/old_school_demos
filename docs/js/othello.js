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
if(a[b]!==s){A.jw(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.w(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.eC(b)
return new s(c,this)}:function(){if(s===null)s=A.eC(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.eC(a).prototype
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
eG(a,b,c,d){return{i:a,p:b,e:c,x:d}},
eD(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.eE==null){A.jn()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.c(A.f6("Return interceptor for "+A.i(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.dJ
if(o==null)o=$.dJ=A.dZ(n)
p=q[o]}if(p!=null)return p
p=A.jr(a)
if(p!=null)return p
if(typeof a=="function")return B.O
s=Object.getPrototypeOf(a)
if(s==null)return B.r
if(s===Object.prototype)return B.r
if(typeof q=="function"){o=$.dJ
if(o==null)o=$.dJ=A.dZ(n)
Object.defineProperty(q,o,{value:B.j,enumerable:false,writable:true,configurable:true})
return B.j}return B.j},
eY(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
ho(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.eY(r))break;++b}return b},
hp(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.a(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.eY(q))break}return b},
ag(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aL.prototype
return J.bP.prototype}if(typeof a=="string")return J.a7.prototype
if(a==null)return J.aM.prototype
if(typeof a=="boolean")return J.bO.prototype
if(Array.isArray(a))return J.p.prototype
if(typeof a!="object"){if(typeof a=="function")return J.V.prototype
if(typeof a=="symbol")return J.aP.prototype
if(typeof a=="bigint")return J.aN.prototype
return a}if(a instanceof A.d)return a
return J.eD(a)},
fE(a){if(typeof a=="string")return J.a7.prototype
if(a==null)return a
if(Array.isArray(a))return J.p.prototype
if(typeof a!="object"){if(typeof a=="function")return J.V.prototype
if(typeof a=="symbol")return J.aP.prototype
if(typeof a=="bigint")return J.aN.prototype
return a}if(a instanceof A.d)return a
return J.eD(a)},
fF(a){if(a==null)return a
if(Array.isArray(a))return J.p.prototype
if(typeof a!="object"){if(typeof a=="function")return J.V.prototype
if(typeof a=="symbol")return J.aP.prototype
if(typeof a=="bigint")return J.aN.prototype
return a}if(a instanceof A.d)return a
return J.eD(a)},
jj(a){if(typeof a=="number")return J.ak.prototype
if(a==null)return a
if(!(a instanceof A.d))return J.ab.prototype
return a},
jk(a){if(typeof a=="string")return J.a7.prototype
if(a==null)return a
if(!(a instanceof A.d))return J.ab.prototype
return a},
aj(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ag(a).I(a,b)},
h4(a,b){return J.fF(a).N(a,b)},
P(a){return J.ag(a).gk(a)},
eM(a){return J.fF(a).gu(a)},
eN(a){return J.fE(a).gl(a)},
h5(a){return J.ag(a).gt(a)},
eO(a){return J.jj(a).cK(a)},
bD(a){return J.ag(a).h(a)},
h6(a){return J.jk(a).cL(a)},
bM:function bM(){},
bO:function bO(){},
aM:function aM(){},
aO:function aO(){},
W:function W(){},
c3:function c3(){},
ab:function ab(){},
V:function V(){},
aN:function aN(){},
aP:function aP(){},
p:function p(a){this.$ti=a},
bN:function bN(){},
cE:function cE(a){this.$ti=a},
bE:function bE(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ak:function ak(){},
aL:function aL(){},
bP:function bP(){},
a7:function a7(){}},A={ed:function ed(){},
eZ(a){return new A.aR("Field '"+a+"' has not been initialized.")},
X(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
ek(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
eB(a,b,c){return a},
eF(a){var s,r
for(s=$.D.length,r=0;r<s;++r)if(a===$.D[r])return!0
return!1},
hi(a,b,c){return new A.aJ(a,b,c.i("aJ<0>"))},
cC(){return new A.aa("No element")},
aR:function aR(a){this.a=a},
e4:function e4(){},
cQ:function cQ(){},
aE:function aE(){},
R:function R(){},
am:function am(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
b7:function b7(a,b,c){this.a=a
this.b=b
this.$ti=c},
cb:function cb(a,b){this.a=a
this.b=b},
aF:function aF(a){this.$ti=a},
bJ:function bJ(){},
aJ:function aJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
aK:function aK(a,b){this.a=a
this.b=b
this.c=-1},
aH:function aH(){},
b1:function b1(a,b){this.a=a
this.$ti=b},
fN(a){var s=A.fM(a)
if(s!=null)return s
return"minified:"+a},
k3(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.E.b(a)},
i(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.bD(a)
return s},
ar(a){var s,r=$.f_
if(r==null)r=$.f_=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
c4(a){var s,r,q,p
if(a instanceof A.d)return A.C(A.bC(a),null)
s=J.ag(a)
if(s===B.N||s===B.P||t.J.b(a)){r=B.k(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.C(A.bC(a),null)},
f0(a){var s,r,q
if(a==null||typeof a=="number"||A.ew(a))return J.bD(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.a5)return a.h(0)
if(a instanceof A.aw)return a.bm(!0)
s=$.h2()
for(r=0;r<1;++r){q=s[r].cM(a)
if(q!=null)return q}return"Instance of '"+A.c4(a)+"'"},
hu(a){var s=a.$thrownJsError
if(s==null)return null
return A.a1(s)},
hv(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.t(a,s)
a.$thrownJsError=s
s.stack=b.h(0)}},
a(a,b){if(a==null)J.eN(a)
throw A.c(A.jg(a,b))},
jg(a,b){var s,r="index",q=null
if(!A.fu(b))return new A.M(!0,b,r,q)
s=J.eN(a)
if(b<0||b>=s)return A.eb(b,s,a,q,r)
return new A.as(q,q,!0,b,r,"Value not in range")},
eA(a){return new A.M(!0,a,null,null)},
c(a){return A.t(a,new Error())},
t(a,b){var s
if(a==null)a=new A.S()
b.dartException=a
s=A.jx
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
jx(){return J.bD(this.dartException)},
O(a,b){throw A.t(a,b==null?new Error():b)},
y(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.O(A.iy(a,b,c),s)},
iy(a,b,c){var s,r,q,p,o,n,m,l,k
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
e5(a){throw A.c(A.a6(a))},
T(a){var s,r,q,p,o,n
a=A.ju(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.w([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.dd(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
de(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
f5(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
ee(a,b){var s=b==null,r=s?null:b.method
return new A.bQ(a,r,s?null:b.receiver)},
ai(a){if(a==null)return new A.cI(a)
if(a instanceof A.aG)return A.a2(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.a2(a,a.dartException)
return A.j6(a)},
a2(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
j6(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.a.ah(r,16)&8191)===10)switch(q){case 438:return A.a2(a,A.ee(A.i(s)+" (Error "+q+")",null))
case 445:case 5007:A.i(s)
return A.a2(a,new A.b_())}}if(a instanceof TypeError){p=$.fR()
o=$.fS()
n=$.fT()
m=$.fU()
l=$.fX()
k=$.fY()
j=$.fW()
$.fV()
i=$.h_()
h=$.fZ()
g=p.H(s)
if(g!=null)return A.a2(a,A.ee(s,g))
else{g=o.H(s)
if(g!=null){g.method="call"
return A.a2(a,A.ee(s,g))}else if(n.H(s)!=null||m.H(s)!=null||l.H(s)!=null||k.H(s)!=null||j.H(s)!=null||m.H(s)!=null||i.H(s)!=null||h.H(s)!=null)return A.a2(a,new A.b_())}return A.a2(a,new A.ca(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.b4()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.a2(a,new A.M(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.b4()
return a},
a1(a){var s
if(a instanceof A.aG)return a.b
if(a==null)return new A.bm(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.bm(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
eH(a){if(a==null)return J.P(a)
if(typeof a=="object")return A.ar(a)
return J.P(a)},
jd(a){if(typeof a=="number")return B.n.gk(a)
if(a instanceof A.cr)return A.ar(a)
if(a instanceof A.aw)return a.gk(a)
return A.eH(a)},
ji(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.ao(0,a[s],a[r])}return b},
iH(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.c(new A.dw("Unsupported number of arguments for wrapped closure"))},
ct(a,b){var s=a.$identity
if(!!s)return s
s=A.je(a,b)
a.$identity=s
return s},
je(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.iH)},
hd(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.cR().constructor.prototype):Object.create(new A.aC(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.eT(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.h9(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.eT(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
h9(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.c("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.h7)}throw A.c("Error in functionType of tearoff")},
ha(a,b,c,d){var s=A.eS
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
eT(a,b,c,d){if(c)return A.hc(a,b,d)
return A.ha(b.length,d,a,b)},
hb(a,b,c,d){var s=A.eS,r=A.h8
switch(b?-1:a){case 0:throw A.c(new A.c6("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
hc(a,b,c){var s,r
if($.eQ==null)$.eQ=A.eP("interceptor")
if($.eR==null)$.eR=A.eP("receiver")
s=b.length
r=A.hb(s,c,a,b)
return r},
eC(a){return A.hd(a)},
h7(a,b){return A.bt(v.typeUniverse,A.bC(a.a),b)},
eS(a){return a.a},
h8(a){return a.b},
eP(a){var s,r,q,p=new A.aC("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.c(A.U("Field name "+a+" not found.",null))},
dZ(a){return v.getIsolateTag(a)},
jr(a){var s,r,q,p,o,n=$.fH.$1(a),m=$.dX[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.e2[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.fA.$2(a,n)
if(q!=null){m=$.dX[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.e2[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.e3(s)
$.dX[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.e2[n]=s
return s}if(p==="-"){o=A.e3(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.fJ(a,s)
if(p==="*")throw A.c(A.f6(n))
if(v.leafTags[n]===true){o=A.e3(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.fJ(a,s)},
fJ(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.eG(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
e3(a){return J.eG(a,!1,null,!!a.$iB)},
jt(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.e3(s)
else return J.eG(s,c,null,null)},
jn(){if(!0===$.eE)return
$.eE=!0
A.jo()},
jo(){var s,r,q,p,o,n,m,l
$.dX=Object.create(null)
$.e2=Object.create(null)
A.jm()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.fK.$1(o)
if(n!=null){m=A.jt(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
jm(){var s,r,q,p,o,n,m=B.w()
m=A.aA(B.x,A.aA(B.y,A.aA(B.l,A.aA(B.l,A.aA(B.z,A.aA(B.A,A.aA(B.B(B.k),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.fH=new A.e_(p)
$.fA=new A.e0(o)
$.fK=new A.e1(n)},
aA(a,b){return a(b)||b},
jf(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
hq(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.c(A.eV("Illegal RegExp pattern ("+String(o)+")",a))},
ju(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
m:function m(a,b){this.a=a
this.b=b},
co:function co(a,b){this.a=a
this.b=b},
bI:function bI(){},
aI:function aI(a,b){this.a=a
this.$ti=b},
b2:function b2(){},
dd:function dd(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
b_:function b_(){},
bQ:function bQ(a,b,c){this.a=a
this.b=b
this.c=c},
ca:function ca(a){this.a=a},
cI:function cI(a){this.a=a},
aG:function aG(a,b){this.a=a
this.b=b},
bm:function bm(a){this.a=a
this.b=null},
a5:function a5(){},
cv:function cv(){},
cw:function cw(){},
cW:function cW(){},
cR:function cR(){},
aC:function aC(a,b){this.a=a
this.b=b},
c6:function c6(a){this.a=a},
a8:function a8(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cF:function cF(a,b){this.a=a
this.b=b
this.c=null},
aT:function aT(a,b){this.a=a
this.$ti=b},
bS:function bS(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
aS:function aS(a,b){this.a=a
this.$ti=b},
bR:function bR(a,b,c,d){var _=this
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
e_:function e_(a){this.a=a},
e0:function e0(a){this.a=a},
e1:function e1(a){this.a=a},
aw:function aw(){},
cn:function cn(){},
cD:function cD(a,b){var _=this
_.a=a
_.b=b
_.e=_.c=null},
dL:function dL(a){this.b=a},
jw(a){throw A.t(new A.aR("Field '"+a+"' has been assigned during initialization."),new Error())},
a3(){throw A.t(A.eZ(""),new Error())},
du(a){var s=new A.dt(a)
return s.b=s},
dt:function dt(a){this.a=a
this.b=null},
ao:function ao(){},
aY:function aY(){},
bT:function bT(){},
ap:function ap(){},
aW:function aW(){},
aX:function aX(){},
bU:function bU(){},
bV:function bV(){},
bW:function bW(){},
bX:function bX(){},
bY:function bY(){},
bZ:function bZ(){},
c_:function c_(){},
aZ:function aZ(){},
c0:function c0(){},
bg:function bg(){},
bh:function bh(){},
bi:function bi(){},
bj:function bj(){},
eh(a,b){var s=b.c
return s==null?b.c=A.br(a,"Q",[b.x]):s},
f1(a){var s=a.w
if(s===6||s===7)return A.f1(a.x)
return s===11||s===12},
hA(a){return a.as},
cu(a){return A.dP(v.typeUniverse,a,!1)},
ae(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.ae(a1,s,a3,a4)
if(r===s)return a2
return A.fl(a1,r,!0)
case 7:s=a2.x
r=A.ae(a1,s,a3,a4)
if(r===s)return a2
return A.fk(a1,r,!0)
case 8:q=a2.y
p=A.az(a1,q,a3,a4)
if(p===q)return a2
return A.br(a1,a2.x,p)
case 9:o=a2.x
n=A.ae(a1,o,a3,a4)
m=a2.y
l=A.az(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.es(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.az(a1,j,a3,a4)
if(i===j)return a2
return A.fm(a1,k,i)
case 11:h=a2.x
g=A.ae(a1,h,a3,a4)
f=a2.y
e=A.j3(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.fj(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.az(a1,d,a3,a4)
o=a2.x
n=A.ae(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.et(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.c(A.bG("Attempted to substitute unexpected RTI kind "+a0))}},
az(a,b,c,d){var s,r,q,p,o=b.length,n=A.dQ(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.ae(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
j4(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.dQ(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.ae(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
j3(a,b,c,d){var s,r=b.a,q=A.az(a,r,c,d),p=b.b,o=A.az(a,p,c,d),n=b.c,m=A.j4(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.cl()
s.a=q
s.b=o
s.c=m
return s},
w(a,b){a[v.arrayRti]=b
return a},
fC(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.jl(s)
return a.$S()}return null},
jp(a,b){var s
if(A.f1(b))if(a instanceof A.a5){s=A.fC(a)
if(s!=null)return s}return A.bC(a)},
bC(a){if(a instanceof A.d)return A.a0(a)
if(Array.isArray(a))return A.eu(a)
return A.ev(J.ag(a))},
eu(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
a0(a){var s=a.$ti
return s!=null?s:A.ev(a)},
ev(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.iF(a,s)},
iF(a,b){var s=a instanceof A.a5?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.ic(v.typeUniverse,s.name)
b.$ccache=r
return r},
jl(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.dP(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
fG(a){return A.af(A.a0(a))},
ez(a){var s
if(a instanceof A.aw)return A.jh(a.$r,a.bf())
s=a instanceof A.a5?A.fC(a):null
if(s!=null)return s
if(t.B.b(a))return J.h5(a).a
if(Array.isArray(a))return A.eu(a)
return A.bC(a)},
af(a){var s=a.r
return s==null?a.r=new A.cr(a):s},
jh(a,b){var s,r,q=b,p=q.length
if(p===0)return t.F
if(0>=p)return A.a(q,0)
s=A.bt(v.typeUniverse,A.ez(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.a(q,r)
s=A.fo(v.typeUniverse,s,A.ez(q[r]))}return A.bt(v.typeUniverse,s,a)},
L(a){return A.af(A.dP(v.typeUniverse,a,!1))},
iE(a){var s=this
s.b=A.j1(s)
return s.b(a)},
j1(a){var s,r,q,p
if(a===t.K)return A.iN
if(A.ah(a))return A.iR
s=a.w
if(s===6)return A.iC
if(s===1)return A.fw
if(s===7)return A.iI
r=A.j0(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.ah)){a.f="$i"+q
if(q==="h")return A.iL
if(a===t.m)return A.iK
return A.iQ}}else if(s===10){p=A.jf(a.x,a.y)
return p==null?A.fw:p}return A.iA},
j0(a){if(a.w===8){if(a===t.S)return A.fu
if(a===t.i||a===t.n)return A.iM
if(a===t.N)return A.iP
if(a===t.y)return A.ew}return null},
iD(a){var s=this,r=A.iz
if(A.ah(s))r=A.it
else if(s===t.K)r=A.iq
else if(A.aB(s)){r=A.iB
if(s===t.d)r=A.il
else if(s===t.Y)r=A.is
else if(s===t.u)r=A.ih
else if(s===t.e)r=A.ip
else if(s===t.I)r=A.ij
else if(s===t.M)r=A.im}else if(s===t.S)r=A.ik
else if(s===t.N)r=A.ir
else if(s===t.y)r=A.ig
else if(s===t.n)r=A.io
else if(s===t.i)r=A.ii
else if(s===t.m)r=A.a_
s.a=r
return s.a(a)},
iA(a){var s=this
if(a==null)return A.aB(s)
return A.jq(v.typeUniverse,A.jp(a,s),s)},
iC(a){if(a==null)return!0
return this.x.b(a)},
iQ(a){var s,r=this
if(a==null)return A.aB(r)
s=r.f
if(a instanceof A.d)return!!a[s]
return!!J.ag(a)[s]},
iL(a){var s,r=this
if(a==null)return A.aB(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.d)return!!a[s]
return!!J.ag(a)[s]},
iK(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.d)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
fv(a){if(typeof a=="object"){if(a instanceof A.d)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
iz(a){var s=this
if(a==null){if(A.aB(s))return a}else if(s.b(a))return a
throw A.t(A.fr(a,s),new Error())},
iB(a){var s=this
if(a==null||s.b(a))return a
throw A.t(A.fr(a,s),new Error())},
fr(a,b){return new A.bp("TypeError: "+A.ff(a,A.C(b,null)))},
ff(a,b){return A.cx(a)+": type '"+A.C(A.ez(a),null)+"' is not a subtype of type '"+b+"'"},
H(a,b){return new A.bp("TypeError: "+A.ff(a,b))},
iI(a){var s=this
return s.x.b(a)||A.eh(v.typeUniverse,s).b(a)},
iN(a){return a!=null},
iq(a){if(a!=null)return a
throw A.t(A.H(a,"Object"),new Error())},
iR(a){return!0},
it(a){return a},
fw(a){return!1},
ew(a){return!0===a||!1===a},
ig(a){if(!0===a)return!0
if(!1===a)return!1
throw A.t(A.H(a,"bool"),new Error())},
ih(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.t(A.H(a,"bool?"),new Error())},
ii(a){if(typeof a=="number")return a
throw A.t(A.H(a,"double"),new Error())},
ij(a){if(typeof a=="number")return a
if(a==null)return a
throw A.t(A.H(a,"double?"),new Error())},
fu(a){return typeof a=="number"&&Math.floor(a)===a},
ik(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.t(A.H(a,"int"),new Error())},
il(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.t(A.H(a,"int?"),new Error())},
iM(a){return typeof a=="number"},
io(a){if(typeof a=="number")return a
throw A.t(A.H(a,"num"),new Error())},
ip(a){if(typeof a=="number")return a
if(a==null)return a
throw A.t(A.H(a,"num?"),new Error())},
iP(a){return typeof a=="string"},
ir(a){if(typeof a=="string")return a
throw A.t(A.H(a,"String"),new Error())},
is(a){if(typeof a=="string")return a
if(a==null)return a
throw A.t(A.H(a,"String?"),new Error())},
a_(a){if(A.fv(a))return a
throw A.t(A.H(a,"JSObject"),new Error())},
im(a){if(a==null)return a
if(A.fv(a))return a
throw A.t(A.H(a,"JSObject?"),new Error())},
fx(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.C(a[q],b)
return s},
iX(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.fx(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.C(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
fs(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.w([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)a4.push("T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.a(a4,l)
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
if(l===8){p=A.j5(a.x)
o=a.y
return o.length>0?p+("<"+A.fx(o,b)+">"):p}if(l===10)return A.iX(a,b)
if(l===11)return A.fs(a,b,null)
if(l===12)return A.fs(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.a(b,n)
return b[n]}return"?"},
j5(a){var s=A.fM(a)
if(s!=null)return s
return"minified:"+a},
id(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
ic(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.dP(a,b,!1)
else if(typeof m=="number"){s=m
r=A.bs(a,5,"#")
q=A.dQ(s)
for(p=0;p<s;++p)q[p]=r
o=A.br(a,b,q)
n[b]=o
return o}else return m},
ib(a,b){return A.fp(a.tR,b)},
ia(a,b){return A.fp(a.eT,b)},
dP(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.fn(a,null,b,!1)
r.set(b,s)
return s},
bt(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.fn(a,b,c,!0)
q.set(c,r)
return r},
fo(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.es(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
fn(a,b,c,d){return A.i1(A.hW(a,b,c,d))},
Z(a,b){b.a=A.iD
b.b=A.iE
return b},
bs(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.J(null,null)
s.w=b
s.as=c
r=A.Z(a,s)
a.eC.set(c,r)
return r},
fl(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.i8(a,b,r,c)
a.eC.set(r,s)
return s},
i8(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.ah(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.aB(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.J(null,null)
q.w=6
q.x=b
q.as=c
return A.Z(a,q)},
fk(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.i6(a,b,r,c)
a.eC.set(r,s)
return s},
i6(a,b,c,d){var s,r
if(d){s=b.w
if(A.ah(b)||b===t.K)return b
else if(s===1)return A.br(a,"Q",[b])
else if(b===t.P||b===t.T)return t.O}r=new A.J(null,null)
r.w=7
r.x=b
r.as=c
return A.Z(a,r)},
i9(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.J(null,null)
s.w=13
s.x=b
s.as=q
r=A.Z(a,s)
a.eC.set(q,r)
return r},
bq(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
i5(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
br(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.bq(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.J(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.Z(a,r)
a.eC.set(p,q)
return q},
es(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.bq(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.J(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.Z(a,o)
a.eC.set(q,n)
return n},
fm(a,b,c){var s,r,q="+"+(b+"("+A.bq(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.J(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.Z(a,s)
a.eC.set(q,r)
return r},
fj(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.bq(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.bq(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.i5(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.J(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.Z(a,p)
a.eC.set(r,o)
return o},
et(a,b,c,d){var s,r=b.as+("<"+A.bq(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.i7(a,b,c,r,d)
a.eC.set(r,s)
return s},
i7(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.dQ(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.ae(a,b,r,0)
m=A.az(a,c,r,0)
return A.et(a,n,m,c!==m)}}l=new A.J(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.Z(a,l)},
hW(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
i1(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.hY(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.fh(a,r,l,k,!1)
else if(q===46)r=A.fh(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.ad(a.u,a.e,k.pop()))
break
case 94:k.push(A.i9(a.u,k.pop()))
break
case 35:k.push(A.bs(a.u,5,"#"))
break
case 64:k.push(A.bs(a.u,2,"@"))
break
case 126:k.push(A.bs(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.i_(a,k)
break
case 38:A.hZ(a,k)
break
case 63:p=a.u
k.push(A.fl(p,A.ad(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.fk(p,A.ad(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.hX(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.fi(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.i2(a.u,a.e,o)
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
hY(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
fh(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.id(s,o.x)[p]
if(n==null)A.O('No "'+p+'" in "'+A.hA(o)+'"')
d.push(A.bt(s,o,n))}else d.push(p)
return m},
i_(a,b){var s,r=a.u,q=A.fg(a,b),p=b.pop()
if(typeof p=="string")b.push(A.br(r,p,q))
else{s=A.ad(r,a.e,p)
switch(s.w){case 11:b.push(A.et(r,s,q,a.n))
break
default:b.push(A.es(r,s,q))
break}}},
hX(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.fg(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.ad(p,a.e,o)
q=new A.cl()
q.a=s
q.b=n
q.c=m
b.push(A.fj(p,r,q))
return
case-4:b.push(A.fm(p,b.pop(),s))
return
default:throw A.c(A.bG("Unexpected state under `()`: "+A.i(o)))}},
hZ(a,b){var s=b.pop()
if(0===s){b.push(A.bs(a.u,1,"0&"))
return}if(1===s){b.push(A.bs(a.u,4,"1&"))
return}throw A.c(A.bG("Unexpected extended operation "+A.i(s)))},
fg(a,b){var s=b.splice(a.p)
A.fi(a.u,a.e,s)
a.p=b.pop()
return s},
ad(a,b,c){if(typeof c=="string")return A.br(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.i0(a,b,c)}else return c},
fi(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.ad(a,b,c[s])},
i2(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.ad(a,b,c[s])},
i0(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.c(A.bG("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.c(A.bG("Bad index "+c+" for "+b.h(0)))},
jq(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.r(a,b,null,c,null)
r.set(c,s)}return s},
r(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.ah(d))return!0
s=b.w
if(s===4)return!0
if(A.ah(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.r(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.r(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.r(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.r(a,b.x,c,d,e))return!1
return A.r(a,A.eh(a,b),c,d,e)}if(s===6)return A.r(a,p,c,d,e)&&A.r(a,b.x,c,d,e)
if(q===7){if(A.r(a,b,c,d.x,e))return!0
return A.r(a,b,c,A.eh(a,d),e)}if(q===6)return A.r(a,b,c,p,e)||A.r(a,b,c,d.x,e)
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
if(!A.r(a,j,c,i,e)||!A.r(a,i,e,j,c))return!1}return A.ft(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.ft(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.iJ(a,b,c,d,e)}if(o&&q===10)return A.iO(a,b,c,d,e)
return!1},
ft(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.r(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.r(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.r(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.r(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.r(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
iJ(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.bt(a,b,r[o])
return A.fq(a,p,null,c,d.y,e)}return A.fq(a,b.y,null,c,d.y,e)},
fq(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.r(a,b[s],d,e[s],f))return!1
return!0},
iO(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.r(a,r[s],c,q[s],e))return!1
return!0},
aB(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.ah(a))if(s!==6)r=s===7&&A.aB(a.x)
return r},
ah(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
fp(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
dQ(a){return a>0?new Array(a):v.typeUniverse.sEA},
J:function J(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
cl:function cl(){this.c=this.b=this.a=null},
cr:function cr(a){this.a=a},
ck:function ck(){},
bp:function bp(a){this.a=a},
hI(){var s,r,q
if(self.scheduleImmediate!=null)return A.j7()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.ct(new A.dm(s),1)).observe(r,{childList:true})
return new A.dl(s,r,q)}else if(self.setImmediate!=null)return A.j8()
return A.j9()},
hJ(a){self.scheduleImmediate(A.ct(new A.dn(a),0))},
hK(a){self.setImmediate(A.ct(new A.dp(a),0))},
hL(a){A.f4(B.m,a)},
f4(a,b){var s=B.a.p(a.a,1000)
return A.i3(s,b)},
i3(a,b){var s=new A.bo(!0)
s.bN(a,b)
return s},
i4(a,b){var s=new A.bo(!1)
s.bO(a,b)
return s},
bA(a){return new A.cc(new A.l($.e,a.i("l<0>")),a.i("cc<0>"))},
bw(a,b){a.$2(0,null)
b.b=!0
return b.a},
N(a,b){A.iu(a,b)},
bv(a,b){var s,r=a==null?b.$ti.c.a(a):a
if(!b.b)b.a.az(r)
else{s=b.a
if(b.$ti.i("Q<1>").b(r))s.b7(r)
else s.ba(r)}},
bu(a,b){var s=A.ai(a),r=A.a1(a),q=b.a
if(b.b)q.Y(new A.E(s,r))
else q.b6(new A.E(s,r))},
iu(a,b){var s,r,q=new A.dR(b),p=new A.dS(b)
if(a instanceof A.l)a.bl(q,p,t.z)
else{s=t.z
if(a instanceof A.l)a.bG(q,p,s)
else{r=new A.l($.e,t.c)
r.a=8
r.c=a
r.bl(q,p,s)}}},
bB(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(q){e=q
d=c}}}}(a,1),r=$.e
return r.aH(r,new A.dV(s))},
ea(a){var s
if(t.Q.b(a)){s=a.gX()
if(s!=null)return s}return B.E},
eW(a,b){var s
if(!b.b(null))throw A.c(A.e9(null,"computation","The type parameter is not nullable"))
s=new A.l($.e,b.i("l<0>"))
A.hD(a,new A.cz(null,s,b))
return s},
iG(a,b){var s=$.e
if(s===B.b)return null
s.c0(s,a,b)
return null},
dA(a,b,c){var s,r,q,p,o={},n=o.a=a
while(s=n.a,(s&4)!==0){n=n.c
o.a=n}if(n===b){s=A.f2()
b.b6(new A.E(new A.M(!0,n,null,"Cannot complete a future with itself"),s))
return}r=b.a&1
s=n.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=n
n.bj(q)
return}if(!c)if(b.c==null)n=(s&16)===0||r!==0
else n=!1
else n=!0
if(n){q=b.a0()
b.ab(o.a)
A.ac(b,q)
return}b.a^=2
p=b.b
p.a2(p,new A.dB(o,b))},
ac(a,b){var s,r,q,p,o,n,m,l,k,j,i,h={},g=h.a=a
for(;;){s={}
r=g.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){r=g.c
g=g.b
g.a_(g,r.a,r.b)}return}s.a=b
o=b.a
for(g=b;o!=null;g=o,o=n){g.a=null
A.ac(h.a,g)
s.a=o
n=o.a}m=h.a.c
s.b=p
s.c=m
if(q){r=g.c
r=(r&1)!==0||(r&15)===8}else r=!0
if(r){l=g.b.b
k=$.e
if(k!==l)$.e=l
else k=null
g=g.c
if((g&15)===8)new A.dF(s,h,p).$0()
else if(q){if((g&1)!==0)new A.dE(s,m).$0()}else if((g&2)!==0)new A.dD(h,s).$0()
if(k!=null)$.e=k
g=s.c
if(g instanceof A.l){r=s.a.$ti
r=r.i("Q<2>").b(g)||!r.y[1].b(g)}else r=!1
if(r){j=s.a.b
if((g.a&24)!==0){i=j.c
j.c=null
b=j.ae(i)
j.a=g.a&30|j.a&1
j.c=g.c
h.a=g
continue}else A.dA(g,j,!0)
return}}j=s.a.b
i=j.c
j.c=null
b=j.ae(i)
g=s.b
r=s.c
if(!g){j.a=8
j.c=r}else{j.a=j.a&1|16
j.c=r}h.a=j
g=j}},
iY(a,b){if(t.C.b(a))return b.aH(b,a)
if(t.v.b(a))return b.P(b,a)
throw A.c(A.e9(a,"onError",u.c))},
iT(){var s,r
for(s=$.ay;s!=null;s=$.ay){$.bz=null
r=s.b
$.ay=r
if(r==null)$.by=null
s.a.$0()}},
j2(){$.ex=!0
try{A.iT()}finally{$.bz=null
$.ex=!1
if($.ay!=null)$.eJ().$1(A.fB())}},
fz(a){var s=new A.cd(a),r=$.by
if(r==null){$.ay=$.by=s
if(!$.ex)$.eJ().$1(A.fB())}else $.by=r.b=s},
j_(a){var s,r,q,p=$.ay
if(p==null){A.fz(a)
$.bz=$.by
return}s=new A.cd(a)
r=$.bz
if(r==null){s.b=p
$.ay=$.bz=s}else{q=r.b
s.b=q
$.bz=r.b=s
if(q==null)$.by=s}},
fL(a){var s=$.e
if(B.b===s){A.ey(B.b,a)
return}A.ey(s,s.O(s,a))
return},
jI(a){A.eB(a,"stream",t.K)
return new A.cp()},
ej(a){return new A.b8(null,null,a.i("b8<0>"))},
fy(a){return},
fe(a,b){return a.P(a,b==null?A.ja():b)},
hT(a,b){if(b==null)b=A.jc()
if(t.k.b(b))return a.aH(a,b)
if(t.bo.b(b))return a.P(a,b)
throw A.c(A.U("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
iU(a){},
iW(a,b){var s=$.e
s.a_(s,a,b)},
iV(){},
ix(a,b,c){var s,r,q,p=a.ai()
if(p!==$.e7()){s=new A.dT(b,c)
r=p.$ti
q=$.e
if(q!==B.b)s=q.O(q,s)
p.a9(new A.Y(new A.l(q,r),8,s,null,r.i("Y<1,1>")))}else b.ac(c)},
hD(a,b){var s=$.e
if(s===B.b)return s.bd(s,a,b)
return s.bd(s,a,s.cp(b))},
hE(a,b){var s=$.e
if(s===B.b)return s.bc(s,a,b)
return s.bc(s,a,s.cr(b,t.p))},
iZ(a,b){A.j_(new A.dU(a,b))},
ey(a,b){if(B.b!==a)b=a.bo(b,t.H)
A.fz(b)},
dm:function dm(a){this.a=a},
dl:function dl(a,b,c){this.a=a
this.b=b
this.c=c},
dn:function dn(a){this.a=a},
dp:function dp(a){this.a=a},
bo:function bo(a){this.a=a
this.b=null
this.c=0},
dO:function dO(a,b){this.a=a
this.b=b},
dN:function dN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cc:function cc(a,b){this.a=a
this.b=!1
this.$ti=b},
dR:function dR(a){this.a=a},
dS:function dS(a){this.a=a},
dV:function dV(a){this.a=a},
E:function E(a,b){this.a=a
this.b=b},
G:function G(a,b){this.a=a
this.$ti=b},
bb:function bb(a,b,c,d,e){var _=this
_.ay=0
_.CW=_.ch=null
_.w=a
_.a=b
_.d=c
_.e=d
_.r=_.f=null
_.$ti=e},
cf:function cf(){},
b8:function b8(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null
_.$ti=c},
cz:function cz(a,b,c){this.a=a
this.b=b
this.c=c},
Y:function Y(a,b,c,d,e){var _=this
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
dx:function dx(a,b){this.a=a
this.b=b},
dC:function dC(a,b){this.a=a
this.b=b},
dB:function dB(a,b){this.a=a
this.b=b},
dz:function dz(a,b){this.a=a
this.b=b},
dy:function dy(a,b){this.a=a
this.b=b},
dF:function dF(a,b,c){this.a=a
this.b=b
this.c=c},
dG:function dG(a,b){this.a=a
this.b=b},
dH:function dH(a){this.a=a},
dE:function dE(a,b){this.a=a
this.b=b},
dD:function dD(a,b){this.a=a
this.b=b},
cd:function cd(a){this.a=a
this.b=null},
au:function au(){},
cU:function cU(a,b){this.a=a
this.b=b},
cV:function cV(a,b){this.a=a
this.b=b},
cS:function cS(a){this.a=a},
cT:function cT(a,b,c){this.a=a
this.b=b
this.c=c},
bc:function bc(){},
ch:function ch(){},
cg:function cg(){},
bn:function bn(){},
cj:function cj(){},
ci:function ci(a){this.b=a
this.a=null},
cm:function cm(){this.a=0
this.c=this.b=null},
dM:function dM(a,b){this.a=a
this.b=b},
bd:function bd(a){this.a=1
this.b=a
this.c=null},
cp:function cp(){},
dT:function dT(a,b){this.a=a
this.b=b},
dg:function dg(){},
di:function di(a,b,c){this.a=a
this.b=b
this.c=c},
dk:function dk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dh:function dh(a,b){this.a=a
this.b=b},
dj:function dj(a,b,c){this.a=a
this.b=b
this.c=c},
dU:function dU(a,b){this.a=a
this.b=b},
hr(a,b){return new A.a8(a.i("@<0>").aa(b).i("a8<1,2>"))},
hs(a){return new A.bf(a.i("bf<0>"))},
er(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
hV(a,b,c){var s=new A.av(a,b,c.i("av<0>"))
s.c=a.e
return s},
eg(a){var s,r
if(A.eF(a))return"{...}"
s=new A.c8("")
try{r={}
$.D.push(a)
s.a+="{"
r.a=!0
a.aO(0,new A.cG(r,s))
s.a+="}"}finally{if(0>=$.D.length)return A.a($.D,-1)
$.D.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
bf:function bf(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dK:function dK(a){this.a=a
this.c=this.b=null},
av:function av(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
n:function n(){},
aU:function aU(){},
cG:function cG(a,b){this.a=a
this.b=b},
b3:function b3(){},
bl:function bl(){},
hO(a,b){var s,r,q=$.o(),p=a.length,o=4-p%4
if(o===4)o=0
for(s=0,r=0;r<p;++r){s=s*10+a.charCodeAt(r)-48;++o
if(o===4){q=q.a8(0,$.eK()).aX(0,A.b9(s))
s=0
o=0}}if(b)return q.J(0)
return q},
ep(a){if(48<=a&&a<=57)return a-48
return(a|32)-97+10},
hP(a,b,c){var s,r,q,p,o,n,m,l=a.length,k=l-b,j=B.n.cs(k/4),i=new Uint16Array(j),h=j-1,g=k-h*4
for(s=b,r=0,q=0;q<g;++q,s=p){p=s+1
if(!(s<l))return A.a(a,s)
o=A.ep(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}n=h-1
if(!(h>=0))return A.a(i,h)
i[h]=r
for(;s<l;n=m){for(r=0,q=0;q<4;++q,s=p){p=s+1
if(!(s>=0&&s<l))return A.a(a,s)
o=A.ep(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}m=n-1
if(!(n>=0))return A.a(i,n)
i[n]=r}if(j===1){if(0>=j)return A.a(i,0)
l=i[0]===0}else l=!1
if(l)return $.o()
l=A.v(j,i)
return new A.q(l===0?!1:c,i,l)},
hQ(a,b,c){var s,r,q,p=$.o(),o=A.b9(b)
for(s=a.length,r=0;r<s;++r){q=A.ep(a.charCodeAt(r))
if(q>=b)return null
p=p.a8(0,o).aX(0,A.b9(q))}if(c)return p.J(0)
return p},
hS(a,b){var s,r,q,p,o,n,m,l=null
if(a==="")return l
s=$.h0().cu(a)
if(s==null)return l
r=s.b
q=r.length
if(1>=q)return A.a(r,1)
p=r[1]==="-"
if(4>=q)return A.a(r,4)
o=r[4]
n=r[3]
if(5>=q)return A.a(r,5)
m=r[5]
if(b<2||b>36)throw A.c(A.c5(b,2,36,"radix",l))
if(b===10&&o!=null)return A.hO(o,p)
if(b===16)r=o!=null||m!=null
else r=!1
if(r){if(o==null){m.toString
r=m}else r=o
return A.hP(r,0,p)}r=o==null?m:o
if(r==null){n.toString
r=n}return A.hQ(r,b,p)},
v(a,b){var s,r=b.length
for(;;){if(a>0){s=a-1
if(!(s<r))return A.a(b,s)
s=b[s]===0}else s=!1
if(!s)break;--a}return a},
eo(a,b,c,d){var s,r,q,p=new Uint16Array(d),o=c-b
for(s=a.length,r=0;r<o;++r){q=b+r
if(!(q>=0&&q<s))return A.a(a,q)
q=a[q]
if(!(r<d))return A.a(p,r)
p[r]=q}return p},
b9(a){var s,r,q,p,o=a<0
if(o){if(a===-9223372036854776e3){s=new Uint16Array(4)
s[3]=32768
r=A.v(4,s)
return new A.q(r!==0,s,r)}a=-a}if(a<65536){s=new Uint16Array(1)
s[0]=a
r=A.v(1,s)
return new A.q(r===0?!1:o,s,r)}if(a<=4294967295){s=new Uint16Array(2)
s[0]=a&65535
s[1]=B.a.ah(a,16)
r=A.v(2,s)
return new A.q(r===0?!1:o,s,r)}r=B.a.p(B.a.gbp(a)-1,16)+1
s=new Uint16Array(r)
for(q=0;a!==0;q=p){p=q+1
if(!(q<r))return A.a(s,q)
s[q]=a&65535
a=B.a.p(a,65536)}r=A.v(r,s)
return new A.q(r===0?!1:o,s,r)},
eq(a,b,c,d){var s,r,q,p,o
if(b===0)return 0
if(c===0&&d===a)return b
for(s=b-1,r=a.length,q=d.$flags|0;s>=0;--s){p=s+c
if(!(s<r))return A.a(a,s)
o=a[s]
q&2&&A.y(d)
if(!(p>=0&&p<d.length))return A.a(d,p)
d[p]=o}for(s=c-1;s>=0;--s){q&2&&A.y(d)
if(!(s<d.length))return A.a(d,s)
d[s]=0}return b+c},
fc(a,b,c,d){var s,r,q,p,o,n,m,l=B.a.p(c,16),k=B.a.j(c,16),j=16-k,i=B.a.n(1,j)-1
for(s=b-1,r=a.length,q=d.$flags|0,p=0;s>=0;--s){if(!(s<r))return A.a(a,s)
o=a[s]
n=s+l+1
m=B.a.E(o,j)
q&2&&A.y(d)
if(!(n>=0&&n<d.length))return A.a(d,n)
d[n]=(m|p)>>>0
p=B.a.n(o&i,k)}q&2&&A.y(d)
if(!(l>=0&&l<d.length))return A.a(d,l)
d[l]=p},
f7(a,b,c,d){var s,r,q,p=B.a.p(c,16)
if(B.a.j(c,16)===0)return A.eq(a,b,p,d)
s=b+p+1
A.fc(a,b,c,d)
for(r=d.$flags|0,q=p;--q,q>=0;){r&2&&A.y(d)
if(!(q<d.length))return A.a(d,q)
d[q]=0}r=s-1
if(!(r>=0&&r<d.length))return A.a(d,r)
if(d[r]===0)s=r
return s},
hR(a,b,c,d){var s,r,q,p,o,n,m=B.a.p(c,16),l=B.a.j(c,16),k=16-l,j=B.a.n(1,l)-1,i=a.length
if(!(m>=0&&m<i))return A.a(a,m)
s=B.a.E(a[m],l)
r=b-m-1
for(q=d.$flags|0,p=0;p<r;++p){o=p+m+1
if(!(o<i))return A.a(a,o)
n=a[o]
o=B.a.n(n&j,k)
q&2&&A.y(d)
if(!(p<d.length))return A.a(d,p)
d[p]=(o|s)>>>0
s=B.a.E(n,l)}q&2&&A.y(d)
if(!(r>=0&&r<d.length))return A.a(d,r)
d[r]=s},
dq(a,b,c,d){var s,r,q,p,o=b-d
if(o===0)for(s=b-1,r=a.length,q=c.length;s>=0;--s){if(!(s<r))return A.a(a,s)
p=a[s]
if(!(s<q))return A.a(c,s)
o=p-c[s]
if(o!==0)return o}return o},
hM(a,b,c,d,e){var s,r,q,p,o,n
for(s=a.length,r=c.length,q=e.$flags|0,p=0,o=0;o<d;++o){if(!(o<s))return A.a(a,o)
n=a[o]
if(!(o<r))return A.a(c,o)
p+=n+c[o]
q&2&&A.y(e)
if(!(o<e.length))return A.a(e,o)
e[o]=p&65535
p=p>>>16}for(o=d;o<b;++o){if(!(o>=0&&o<s))return A.a(a,o)
p+=a[o]
q&2&&A.y(e)
if(!(o<e.length))return A.a(e,o)
e[o]=p&65535
p=p>>>16}q&2&&A.y(e)
if(!(b>=0&&b<e.length))return A.a(e,b)
e[b]=p},
ce(a,b,c,d,e){var s,r,q,p,o,n
for(s=a.length,r=c.length,q=e.$flags|0,p=0,o=0;o<d;++o){if(!(o<s))return A.a(a,o)
n=a[o]
if(!(o<r))return A.a(c,o)
p+=n-c[o]
q&2&&A.y(e)
if(!(o<e.length))return A.a(e,o)
e[o]=p&65535
p=0-(B.a.ah(p,16)&1)}for(o=d;o<b;++o){if(!(o>=0&&o<s))return A.a(a,o)
p+=a[o]
q&2&&A.y(e)
if(!(o<e.length))return A.a(e,o)
e[o]=p&65535
p=0-(B.a.ah(p,16)&1)}},
fd(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k
if(a===0)return
for(s=b.length,r=d.length,q=d.$flags|0,p=0;--f,f>=0;e=l,c=o){o=c+1
if(!(c<s))return A.a(b,c)
n=b[c]
if(!(e>=0&&e<r))return A.a(d,e)
m=a*n+d[e]+p
l=e+1
q&2&&A.y(d)
d[e]=m&65535
p=B.a.p(m,65536)}for(;p!==0;e=l){if(!(e>=0&&e<r))return A.a(d,e)
k=d[e]+p
l=e+1
q&2&&A.y(d)
d[e]=k&65535
p=B.a.p(k,65536)}},
hN(a,b,c){var s,r,q,p=b.length
if(!(c>=0&&c<p))return A.a(b,c)
s=b[c]
if(s===a)return 65535
r=c-1
if(!(r>=0&&r<p))return A.a(b,r)
q=B.a.L((s<<16|b[r])>>>0,a)
if(q>65535)return 65535
return q},
ie(){if(typeof WeakRef=="function")return WeakRef
var s=function LeakRef(a){this._=a}
s.prototype={
deref(){return this._}}
return s},
he(a,b){a=A.t(a,new Error())
a.stack=b.h(0)
throw a},
ef(a,b,c){var s,r,q
if(a>4294967295)A.O(A.c5(a,0,4294967295,"length",null))
s=A.w(new Array(a),c.i("p<0>"))
s.$flags=1
r=s
if(a!==0)for(s=r.length,q=0;q<s;++q)r[q]=b
return r},
ht(a,b,c){var s,r,q=A.w([],c.i("p<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.e5)(a),++r)q.push(a[r])
q.$flags=1
return q},
hz(a,b){return new A.cD(a,A.hq(a,!1,!1,!1,!1,""))},
f3(a,b,c){var s=J.eM(b)
if(!s.m())return a
if(c.length===0){do a+=A.i(s.gq())
while(s.m())}else{a+=A.i(s.gq())
while(s.m())a=a+c+A.i(s.gq())}return a},
f2(){return A.a1(new Error())},
eU(a){return new A.aD(1000*a)},
cx(a){if(typeof a=="number"||A.ew(a)||a==null)return J.bD(a)
if(typeof a=="string")return JSON.stringify(a)
return A.f0(a)},
hf(a,b){A.eB(a,"error",t.K)
A.eB(b,"stackTrace",t.l)
A.he(a,b)},
bG(a){return new A.bF(a)},
U(a,b){return new A.M(!1,null,b,a)},
e9(a,b,c){return new A.M(!0,a,b,c)},
hw(a){var s=null
return new A.as(s,s,!1,s,s,a)},
c5(a,b,c,d,e){return new A.as(b,c,!0,a,d,"Invalid value")},
hy(a,b,c){if(0>a||a>c)throw A.c(A.c5(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.c(A.c5(b,a,c,"end",null))
return b}return c},
hx(a,b){if(a<0)throw A.c(A.c5(a,0,null,b,null))
return a},
eb(a,b,c,d,e){return new A.bK(b,!0,a,e,"Index out of range")},
b6(a){return new A.b5(a)},
f6(a){return new A.c9(a)},
a6(a){return new A.bH(a)},
eV(a,b){return new A.cy(a,b)},
hm(a,b){if(a<=0)return new A.aF(b.i("aF<0>"))
if(!b.i("0(b)").b(A.fD()))throw A.c(A.U("Generator must be supplied or element type must allow integers","generator"))
return new A.be(a,A.fD(),b.i("be<0>"))},
hn(a,b,c){var s,r
if(A.eF(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.w([],t.s)
$.D.push(a)
try{A.iS(a,s)}finally{if(0>=$.D.length)return A.a($.D,-1)
$.D.pop()}r=A.f3(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
ec(a,b,c){var s,r
if(A.eF(a))return b+"..."+c
s=new A.c8(b)
$.D.push(a)
try{r=s
r.a=A.f3(r.a,a,", ")}finally{if(0>=$.D.length)return A.a($.D,-1)
$.D.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
hU(a){return a},
iS(a,b){var s,r,q,p,o,n,m,l=a.gu(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.m())return
s=A.i(l.gq())
b.push(s)
k+=s.length+2;++j}if(!l.m()){if(j<=5)return
if(0>=b.length)return A.a(b,-1)
r=b.pop()
if(0>=b.length)return A.a(b,-1)
q=b.pop()}else{p=l.gq();++j
if(!l.m()){if(j<=4){b.push(A.i(p))
return}r=A.i(p)
if(0>=b.length)return A.a(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gq();++j
for(;l.m();p=o,o=n){n=l.gq();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.a(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=A.i(p)
r=A.i(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.a(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
cJ(a,b,c,d){var s
if(B.e===c){s=B.a.gk(a)
b=J.P(b)
return A.ek(A.X(A.X($.e8(),s),b))}if(B.e===d){s=B.a.gk(a)
b=J.P(b)
c=J.P(c)
return A.ek(A.X(A.X(A.X($.e8(),s),b),c))}s=B.a.gk(a)
b=J.P(b)
c=J.P(c)
d=J.P(d)
d=A.ek(A.X(A.X(A.X(A.X($.e8(),s),b),c),d))
return d},
q:function q(a,b,c){this.a=a
this.b=b
this.c=c},
dr:function dr(){},
ds:function ds(){},
cs:function cs(a){this.a=a},
aD:function aD(a){this.a=a},
dv:function dv(){},
j:function j(){},
bF:function bF(a){this.a=a},
S:function S(){},
M:function M(a,b,c,d){var _=this
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
bK:function bK(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
b5:function b5(a){this.a=a},
c9:function c9(a){this.a=a},
aa:function aa(a){this.a=a},
bH:function bH(a){this.a=a},
c2:function c2(){},
b4:function b4(){},
dw:function dw(a){this.a=a},
cy:function cy(a,b){this.a=a
this.b=b},
bL:function bL(){},
F:function F(){},
be:function be(a,b,c){this.a=a
this.b=b
this.$ti=c},
aV:function aV(a,b,c){this.a=a
this.b=b
this.$ti=c},
z:function z(){},
d:function d(){},
cq:function cq(){},
c8:function c8(a){this.a=a},
dI:function dI(){},
a4:function a4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cZ(a){return new A.cY(a)},
cK:function cK(){},
cY:function cY(a){this.a=a},
al:function al(a){this.b=a},
cH:function cH(a,b){this.a=a
this.b=b},
an:function an(a,b,c,d,e,f,g){var _=this
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
hB(a,b,c,d,e,f,g,h){var s,r,q,p=A.eX(),o=h*g
p.width=o
s=d*f
p.height=s
r=A.eX()
r.width=o
r.height=s
s=A.w([],t.x)
for(o=A.hm(d,t.z),o=o.gu(o);o.m();){o.gq()
q=B.a.p(h,32)
s.push(new Uint32Array(q+1))}p=new A.c7(!0,d,h,g,f,c,a,p,r,s)
p.bL(a,b,c,d,!0,f,g,h)
return p},
ei(a){return new A.m(B.a.p(a,32),31-B.a.j(a,32))},
c7:function c7(a,b,c,d,e,f,g,h,i,j){var _=this
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
cM:function cM(a){this.a=a},
cN:function cN(a){this.a=a},
cO:function cO(a){this.a=a},
cP:function cP(a){this.a=a},
cL:function cL(){},
hC(a,b,c,d,e,f){var s,r,q,p,o,n=null,m=A.ej(t.N),l=A.ej(t.W),k=A.ej(t.q),j=v.G,i=j.document.getElementById(c)
if(i==null)i=A.a_(i)
j=j.document.getElementById(c)
if(j==null)j=A.a_(j)
j=A.hB(a,j,d,e*10,!0,2,2,b*8)
s=A.w([],t.G)
for(r=t.V,q=0;q<e;++q){p=A.w([],r)
for(o=0;o<b;++o)p.push(new A.a4(q,o," ",d))
s.push(p)}m=new A.cX(e,b,d,i,j,new A.aq(e,b),new A.aq(e,b),new A.aq(e,b),!1,m,l,k,B.c,s,A.hs(t.o),B.dT)
m.bM(a,b,c,d,n,!0,2,2,2,e,!1,n,n,n,n,n,n)
return m},
at:function at(a,b){this.a=a
this.b=b},
cX:function cX(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.db=_.cy=_.cx=_.CW=_.ch=_.ay=null
_.dx=m
_.dy=n
_.fr=o
_.fx=p
_.fy=!1},
db:function db(a){this.a=a},
da:function da(){},
d9:function d9(a){this.a=a},
d_:function d_(a){this.a=a},
d0:function d0(a){this.a=a},
d1:function d1(a,b,c){this.a=a
this.b=b
this.c=c},
d2:function d2(a,b,c){this.a=a
this.b=b
this.c=c},
d3:function d3(a,b){this.a=a
this.b=b},
d4:function d4(a,b){this.a=a
this.b=b},
d5:function d5(a,b){this.a=a
this.b=b},
d6:function d6(a,b){this.a=a
this.b=b},
d7:function d7(a,b){this.a=a
this.b=b},
d8:function d8(a){this.a=a},
I:function I(a,b){this.a=a
this.b=b},
a9:function a9(a,b,c){this.c=a
this.a=b
this.b=c},
js(){var s=A.hC("black",50,"othello","white",29,!1),r=$.o()
s.a5()
return new A.cA(s,new A.c1(r,r,B.d)).K()},
cA:function cA(a,b){this.a=a
this.b=b},
cB:function cB(){},
c1:function c1(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0},
b0:function b0(a,b){this.a=a
this.b=b},
fM(a){return v.mangledGlobalNames[a]},
bx(a){var s
if(typeof a=="function")throw A.c(A.U("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.iv,a)
s[$.e6()]=a
return s},
ax(a){var s
if(typeof a=="function")throw A.c(A.U("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.iw,a)
s[$.e6()]=a
return s},
iv(a){return a.$0()},
iw(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
eX(){return v.G.document.createElement("canvas")},
jv(a){var s,r,q
for(;;){s=a.gan()
r=s.length
if(r===0)break
r=B.D.cF(r)
if(!(r>=0&&r<s.length))return A.a(s,r)
q=s[r]
a.aS(q.a,q.b)}r=a.d
return new A.co(a.e,r)},
dY(a1,a2){var s=0,r=A.bA(t.R),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$dY=A.bB(function(a3,a4){if(a3===1)return A.bu(a4,r)
for(;;)A:switch(s){case 0:a=a1.gan()
a0=A.hr(t.R,t.i)
for(p=a.length,o=0;n=a.length,o<n;a.length===p||(0,A.e5)(a),++o)a0.ao(0,a[o],0)
p=a2.c,m=t.z,l=0
case 3:if(!(l<B.a.L(p,n))){s=5
break}s=B.a.j(l,5)===0?6:7
break
case 6:s=8
return A.N(A.eW(B.m,m),$async$dY)
case 8:case 7:for(n=a.length,o=0;k=a.length,o<k;a.length===n||(0,A.e5)(a),++o){k=a[o]
j=k.a
i=k.b
k=a1.c
h=$.o()
k=new A.c1(h,h,k)
k.d=a1.d
k.a=a1.a
k.e=a1.e
k.b=a1.b
k.aS(j,i)
g=A.jv(k)
f=g.b
e=g.a
k=a0.W(0,new A.m(j,i))
k.toString
switch(a1.c.a){case 1:h=f-e
break
case 0:h=e-f
break
default:h=null}if(typeof h!=="number"){q=h.cO()
s=1
break A}a0.ao(0,new A.m(j,i),k+h/p)}case 4:++l,n=k
s=3
break
case 5:p=a0.$ti
d=new A.aT(a0,p.i("aT<1>")).gU(0)
for(p=new A.aS(a0,p.i("aS<1,2>")).gu(0);p.m();){n=p.d
c=n.a
b=n.b
n=a0.W(0,d)
n.toString
if(b>n)d=c}q=d
s=1
break
case 1:return A.bv(q,r)}})
return A.bw($async$dY,r)}},B={}
var w=[A,J,B]
var $={}
A.ed.prototype={}
J.bM.prototype={
I(a,b){return a===b},
gk(a){return A.ar(a)},
h(a){return"Instance of '"+A.c4(a)+"'"},
gt(a){return A.af(A.ev(this))}}
J.bO.prototype={
h(a){return String(a)},
gk(a){return a?519018:218159},
gt(a){return A.af(t.y)},
$if:1}
J.aM.prototype={
I(a,b){return null==b},
h(a){return"null"},
gk(a){return 0},
$if:1}
J.aO.prototype={$ik:1}
J.W.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.c3.prototype={}
J.ab.prototype={}
J.V.prototype={
h(a){var s=a[$.fO()]
if(s==null)s=a[$.e6()]
if(s==null)return this.bK(a)
return"JavaScript function for "+J.bD(s)}}
J.aN.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.aP.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.p.prototype={
bv(a,b){var s,r,q=a.length,p=A.ef(q,"",t.N)
for(s=0;s<a.length;++s){r=A.i(a[s])
if(!(s<q))return A.a(p,s)
p[s]=r}return p.join(b)},
cv(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw A.c(A.a6(a))}return s},
cw(a,b,c){return this.cv(a,b,c,t.z)},
N(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
ct(a,b){var s
for(s=0;s<a.length;++s)if(J.aj(a[s],b))return!0
return!1},
h(a){return A.ec(a,"[","]")},
gu(a){return new J.bE(a,a.length,A.eu(a).i("bE<1>"))},
gk(a){return A.ar(a)},
gl(a){return a.length},
$ih:1}
J.bN.prototype={
cM(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.c4(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.cE.prototype={}
J.bE.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.c(A.e5(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.ak.prototype={
cK(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.c(A.b6(""+a+".toInt()"))},
cs(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.c(A.b6(""+a+".ceil()"))},
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
L(a,b){if((a|0)===a)if(b>=1)return a/b|0
return this.bk(a,b)},
p(a,b){return(a|0)===a?a/b|0:this.bk(a,b)},
bk(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.c(A.b6("Result of truncating division is "+A.i(s)+": "+A.i(a)+" ~/ "+b))},
n(a,b){if(b<0)throw A.c(A.eA(b))
return b>31?0:a<<b>>>0},
cl(a,b){return b>31?0:a<<b>>>0},
aq(a,b){var s
if(b<0)throw A.c(A.eA(b))
if(a>0)s=this.aJ(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
ah(a,b){var s
if(a>0)s=this.aJ(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
E(a,b){if(0>b)throw A.c(A.eA(b))
return this.aJ(a,b)},
aJ(a,b){return b>31?0:a>>>b},
gt(a){return A.af(t.n)},
$ix:1}
J.aL.prototype={
gbp(a){var s,r=a<0?-a-1:a,q=r
for(s=32;q>=4294967296;){q=this.p(q,4294967296)
s+=32}return s-Math.clz32(q)},
gt(a){return A.af(t.S)},
$if:1,
$ib:1}
J.bP.prototype={
gt(a){return A.af(t.i)},
$if:1}
J.a7.prototype={
bJ(a,b,c){return a.substring(b,A.hy(b,c,a.length))},
cL(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.a(p,0)
if(p.charCodeAt(0)===133){s=J.ho(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.a(p,r)
q=p.charCodeAt(r)===133?J.hp(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
a8(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.c(B.C)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
cH(a,b,c){var s=b-a.length
if(s<=0)return a
return this.a8(c,s)+a},
h(a){return a},
gk(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gt(a){return A.af(t.N)},
gl(a){return a.length},
$if:1,
$iA:1}
A.aR.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.e4.prototype={
$0(){var s=new A.l($.e,t.D)
s.az(null)
return s},
$S:9}
A.cQ.prototype={}
A.aE.prototype={}
A.R.prototype={
gu(a){var s=this
return new A.am(s,s.gl(s),A.a0(s).i("am<R.E>"))},
cD(a){var s,r,q=this,p=q.gl(q)
for(s=0,r="";s<p;++s){r+=A.i(q.N(0,s))
if(p!==q.gl(q))throw A.c(A.a6(q))}return r.charCodeAt(0)==0?r:r}}
A.am.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.fE(q),o=p.gl(q)
if(r.b!==o)throw A.c(A.a6(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.N(q,s);++r.c
return!0}}
A.b7.prototype={
gu(a){return new A.cb(J.eM(this.a),this.b)}}
A.cb.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(r.$1(s.gq()))return!0
return!1},
gq(){return this.a.gq()}}
A.aF.prototype={
gu(a){return B.u},
gl(a){return 0}}
A.bJ.prototype={
m(){return!1},
gq(){throw A.c(A.cC())}}
A.aJ.prototype={
gl(a){var s=this.a
return s.gl(s)},
gu(a){var s=this.a
return new A.aK(s.gu(s),this.b)}}
A.aK.prototype={
m(){if(++this.c>=0&&this.a.m())return!0
this.c=-2
return!1},
gq(){var s=this.c
return s>=0?new A.m(this.b+s,this.a.gq()):A.O(A.cC())}}
A.aH.prototype={}
A.b1.prototype={
gl(a){return this.a.length},
N(a,b){var s=this.a
return J.h4(s,s.length-1-b)}}
A.m.prototype={$r:"+(1,2)",$s:1}
A.co.prototype={$r:"+black,white(1,2)",$s:2}
A.bI.prototype={
h(a){return A.eg(this)}}
A.aI.prototype={
ad(){var s=this,r=s.$map
if(r==null){r=new A.aQ(s.$ti.i("aQ<1,2>"))
A.ji(s.a,r)
s.$map=r}return r},
aM(a){return this.ad().aM(a)},
W(a,b){return this.ad().W(0,b)},
aO(a,b){this.ad().aO(0,b)},
gl(a){return this.ad().a}}
A.b2.prototype={}
A.dd.prototype={
H(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.bQ.prototype={
h(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.ca.prototype={
h(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.cI.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.aG.prototype={}
A.bm.prototype={
h(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iK:1}
A.a5.prototype={
h(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.fN(r==null?"unknown":r)+"'"},
gcN(){return this},
$C:"$1",
$R:1,
$D:null}
A.cv.prototype={$C:"$0",$R:0}
A.cw.prototype={$C:"$2",$R:2}
A.cW.prototype={}
A.cR.prototype={
h(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.fN(s)+"'"}}
A.aC.prototype={
I(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.aC))return!1
return this.$_target===b.$_target&&this.a===b.a},
gk(a){return(A.eH(this.a)^A.ar(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.c4(this.a)+"'")}}
A.c6.prototype={
h(a){return"RuntimeError: "+this.a}}
A.a8.prototype={
gl(a){return this.a},
aM(a){var s=this.b
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
return q}else return this.cC(b)},
cC(a){var s,r,q=this.d
if(q==null)return null
s=this.c3(q,a)
r=this.aQ(s,a)
if(r<0)return null
return s[r].b},
ao(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.b1(s==null?m.b=m.aC():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=m.c
m.b1(r==null?m.c=m.aC():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.aC()
p=m.aP(b)
o=q[p]
if(o==null)q[p]=[m.av(b,c)]
else{n=m.aQ(o,b)
if(n>=0)o[n].b=c
else o.push(m.av(b,c))}}},
aO(a,b){var s=this,r=s.e,q=s.r
while(r!=null){b.$2(r.a,r.b)
if(q!==s.r)throw A.c(A.a6(s))
r=r.c}},
b1(a,b,c){var s=a[b]
if(s==null)a[b]=this.av(b,c)
else s.b=c},
av(a,b){var s=this,r=new A.cF(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&1073741823
return r},
aP(a){return J.P(a)&1073741823},
c3(a,b){return a[this.aP(b)]},
aQ(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aj(a[r].a,b))return r
return-1},
h(a){return A.eg(this)},
aC(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.cF.prototype={}
A.aT.prototype={
gl(a){return this.a.a},
gu(a){var s=this.a
return new A.bS(s,s.r,s.e)}}
A.bS.prototype={
gq(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.c(A.a6(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
A.aS.prototype={
gl(a){return this.a.a},
gu(a){var s=this.a
return new A.bR(s,s.r,s.e,this.$ti.i("bR<1,2>"))}}
A.bR.prototype={
gq(){var s=this.d
s.toString
return s},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.c(A.a6(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.aV(s.a,s.b,r.$ti.i("aV<1,2>"))
r.c=s.c
return!0}}}
A.aQ.prototype={
aP(a){return A.jd(a)&1073741823},
aQ(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aj(a[r].a,b))return r
return-1}}
A.e_.prototype={
$1(a){return this.a(a)},
$S:10}
A.e0.prototype={
$2(a,b){return this.a(a,b)},
$S:11}
A.e1.prototype={
$1(a){return this.a(a)},
$S:12}
A.aw.prototype={
h(a){return this.bm(!1)},
bm(a){var s,r,q,p,o,n=this.c1(),m=this.bf(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.a(m,q)
o=m[q]
l=a?l+A.f0(o):l+A.i(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
c1(){var s,r=this.$s
while($.bk.length<=r)$.bk.push(null)
s=$.bk[r]
if(s==null){s=this.bX()
if(!(r<$.bk.length))return A.a($.bk,r)
$.bk[r]=s}return s},
bX(){var s,r,q,p,o,n=this.$r,m=n.indexOf("("),l=n.substring(1,m),k=n.substring(m),j=k==="()"?0:k.replace(/[^,]/g,"").length+1,i=A.w(new Array(j),t.f)
for(s=0;s<j;++s)i[s]=s
if(l!==""){r=l.split(",")
s=r.length
for(q=i.length,p=j;s>0;){--p;--s
o=r[s]
if(!(p>=0&&p<q))return A.a(i,p)
i[p]=o}}i=A.ht(i,!1,t.K)
i.$flags=3
return i}}
A.cn.prototype={
bf(){return[this.a,this.b]},
I(a,b){if(b==null)return!1
return b instanceof A.cn&&this.$s===b.$s&&J.aj(this.a,b.a)&&J.aj(this.b,b.b)},
gk(a){return A.cJ(this.$s,this.a,this.b,B.e)}}
A.cD.prototype={
h(a){return"RegExp/"+this.a+"/"+this.b.flags},
cu(a){var s=this.b.exec(a)
if(s==null)return null
return new A.dL(s)}}
A.dL.prototype={}
A.dt.prototype={
D(){var s=this.b
if(s===this)throw A.c(A.eZ(this.a))
return s}}
A.ao.prototype={
gt(a){return B.e6},
$if:1}
A.aY.prototype={}
A.bT.prototype={
gt(a){return B.e7},
$if:1}
A.ap.prototype={
gl(a){return a.length},
$iB:1}
A.aW.prototype={$ih:1}
A.aX.prototype={$ih:1}
A.bU.prototype={
gt(a){return B.e8},
$if:1}
A.bV.prototype={
gt(a){return B.e9},
$if:1}
A.bW.prototype={
gt(a){return B.ea},
$if:1}
A.bX.prototype={
gt(a){return B.eb},
$if:1}
A.bY.prototype={
gt(a){return B.ec},
$if:1}
A.bZ.prototype={
gt(a){return B.ee},
$if:1}
A.c_.prototype={
gt(a){return B.ef},
$if:1,
$idf:1}
A.aZ.prototype={
gt(a){return B.eg},
gl(a){return a.length},
$if:1}
A.c0.prototype={
gt(a){return B.eh},
gl(a){return a.length},
$if:1}
A.bg.prototype={}
A.bh.prototype={}
A.bi.prototype={}
A.bj.prototype={}
A.J.prototype={
i(a){return A.bt(v.typeUniverse,this,a)},
aa(a){return A.fo(v.typeUniverse,this,a)}}
A.cl.prototype={}
A.cr.prototype={
h(a){return A.C(this.a,null)}}
A.ck.prototype={
h(a){return this.a}}
A.bp.prototype={$iS:1}
A.dm.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:4}
A.dl.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:13}
A.dn.prototype={
$0(){this.a.$0()},
$S:1}
A.dp.prototype={
$0(){this.a.$0()},
$S:1}
A.bo.prototype={
bN(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.ct(new A.dO(this,b),0),a)
else throw A.c(A.b6("`setTimeout()` not found."))},
bO(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.ct(new A.dN(this,a,Date.now(),b),0),a)
else throw A.c(A.b6("Periodic timer."))},
ai(){if(self.setTimeout!=null){var s=this.b
if(s==null)return
if(this.a)self.clearTimeout(s)
else self.clearInterval(s)
this.b=null}else throw A.c(A.b6("Canceling a timer."))},
$idc:1}
A.dO.prototype={
$0(){var s=this.a
s.b=null
s.c=1
this.b.$0()},
$S:0}
A.dN.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.a.L(s,o)}q.c=p
r.d.$1(q)},
$S:1}
A.cc.prototype={}
A.dR.prototype={
$1(a){return this.a.$2(0,a)},
$S:5}
A.dS.prototype={
$2(a,b){this.a.$2(1,new A.aG(a,b))},
$S:14}
A.dV.prototype={
$2(a,b){this.a(a,b)},
$S:15}
A.E.prototype={
h(a){return A.i(this.a)},
$ij:1,
gX(){return this.b}}
A.G.prototype={}
A.bb.prototype={
aE(){},
aF(){}}
A.cf.prototype={
gc4(){return this.c<4},
ce(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
cm(a,b,c,d){var s,r,q,p,o,n,m=this
if((m.c&4)!==0){s=$.e
r=new A.bd(s)
A.fL(r.gc5())
if(c!=null)r.c=s.O(s,c)
return r}s=$.e
r=d?1:0
q=b!=null?32:0
p=A.fe(s,a)
A.hT(s,b)
s.O(s,c==null?A.jb():c)
o=new A.bb(m,p,s,r|q,A.a0(m).i("bb<1>"))
o.CW=o
o.ch=o
o.ay=m.c&1
n=m.e
m.e=o
o.ch=null
o.CW=n
if(n==null)m.d=o
else n.ch=o
if(m.d===o)A.fy(m.a)
return o},
c9(a){var s,r=this
A.a0(r).i("bb<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.ce(a)
if((r.c&2)===0&&r.d==null)r.bT()}return null},
bQ(){if((this.c&4)!==0)return new A.aa("Cannot add new events after calling close")
return new A.aa("Cannot add new events while doing an addStream")},
T(a,b){if(!this.gc4())throw A.c(this.bQ())
this.aI(b)},
bT(){if((this.c&4)!==0)if(null.gcP())null.az(null)
A.fy(this.b)}}
A.b8.prototype={
aI(a){var s
for(s=this.d;s!=null;s=s.ch)s.bR(new A.ci(a))}}
A.cz.prototype={
$0(){this.c.a(null)
this.b.ac(null)},
$S:0}
A.Y.prototype={
cE(a){var s
if((this.c&15)!==6)return!0
s=this.b.b
return s.a1(s,this.d,a.a)},
cA(a){var s,r=this.e,q=null,p=a.a,o=this.b.b
if(t.C.b(r))q=o.cg(o,r,p,a.b)
else q=o.a1(o,r,p)
try{p=q
return p}catch(s){if(t._.b(A.ai(s))){if((this.c&1)!==0)throw A.c(A.U("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.c(A.U("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.l.prototype={
bG(a,b,c){var s,r,q=$.e
if(q===B.b){if(b!=null&&!t.C.b(b)&&!t.v.b(b))throw A.c(A.e9(b,"onError",u.c))}else{a=q.P(q,a)
if(b!=null)b=A.iY(b,q)}s=new A.l(q,c.i("l<0>"))
r=b==null?1:3
this.a9(new A.Y(s,r,a,b,this.$ti.i("@<1>").aa(c).i("Y<1,2>")))
return s},
bl(a,b,c){var s=new A.l($.e,c.i("l<0>"))
this.a9(new A.Y(s,19,a,b,this.$ti.i("@<1>").aa(c).i("Y<1,2>")))
return s},
ck(a){this.a=this.a&1|16
this.c=a},
ab(a){this.a=a.a&30|this.a&1
this.c=a.c},
a9(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.a9(a)
return}s.ab(r)}r=s.b
r.a2(r,new A.dx(s,a))}},
bj(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.bj(a)
return}n.ab(s)}m.a=n.ae(a)
s=n.b
s.a2(s,new A.dC(m,n))}},
a0(){var s=this.c
this.c=null
return this.ae(s)},
ae(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
ac(a){var s,r=this
if(r.$ti.i("Q<1>").b(a))A.dA(a,r,!0)
else{s=r.a0()
r.a=8
r.c=a
A.ac(r,s)}},
ba(a){var s=this,r=s.a0()
s.a=8
s.c=a
A.ac(s,r)},
bW(a){var s=this.a0()
this.ab(a)
A.ac(this,s)},
Y(a){var s=this.a0()
this.ck(a)
A.ac(this,s)},
bV(a,b){this.Y(new A.E(a,b))},
az(a){if(this.$ti.i("Q<1>").b(a)){this.b7(a)
return}this.bS(a)},
bS(a){var s
this.a^=2
s=this.b
s.a2(s,new A.dz(this,a))},
b7(a){A.dA(a,this,!1)
return},
b6(a){var s
this.a^=2
s=this.b
s.a2(s,new A.dy(this,a))},
$iQ:1}
A.dx.prototype={
$0(){A.ac(this.a,this.b)},
$S:0}
A.dC.prototype={
$0(){A.ac(this.b,this.a.a)},
$S:0}
A.dB.prototype={
$0(){A.dA(this.a.a,this.b,!0)},
$S:0}
A.dz.prototype={
$0(){this.a.ba(this.b)},
$S:0}
A.dy.prototype={
$0(){this.a.Y(this.b)},
$S:0}
A.dF.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
p=q.b.b
j=p.af(p,q.d)}catch(o){s=A.ai(o)
r=A.a1(o)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
p=r
if(p==null)p=A.ea(q)
n=k.a
n.c=new A.E(q,p)
q=n}q.b=!0
return}if(j instanceof A.l&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.l){m=k.b.a
l=new A.l(m.b,m.$ti)
j.bG(new A.dG(l,m),new A.dH(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.dG.prototype={
$1(a){this.a.bW(this.b)},
$S:4}
A.dH.prototype={
$2(a,b){this.a.Y(new A.E(a,b))},
$S:16}
A.dE.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
o=p.b.b
q.c=o.a1(o,p.d,this.b)}catch(n){s=A.ai(n)
r=A.a1(n)
q=s
p=r
if(p==null)p=A.ea(q)
o=this.a
o.c=new A.E(q,p)
o.b=!0}},
$S:0}
A.dD.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.cE(s)&&p.a.e!=null){p.c=p.a.cA(s)
p.b=!1}}catch(o){r=A.ai(o)
q=A.a1(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.ea(p)
m=l.b
m.c=new A.E(p,n)
p=m}p.b=!0}},
$S:0}
A.cd.prototype={}
A.au.prototype={
gl(a){var s={},r=new A.l($.e,t.a)
s.a=0
this.bw(new A.cU(s,this),!0,new A.cV(s,r),r.gb9())
return r},
gU(a){var s=new A.l($.e,this.$ti.i("l<1>")),r=this.bw(null,!0,new A.cS(s),s.gb9())
r.bz(new A.cT(this,r,s))
return s}}
A.cU.prototype={
$1(a){++this.a.a},
$S(){return this.b.$ti.i("~(1)")}}
A.cV.prototype={
$0(){this.b.ac(this.a.a)},
$S:0}
A.cS.prototype={
$0(){var s,r=A.f2(),q=new A.aa("No element")
A.hv(q,r)
s=A.iG(q,r)
s=new A.E(q,r)
this.a.Y(s)},
$S:0}
A.cT.prototype={
$1(a){A.ix(this.b,this.c,a)},
$S(){return this.a.$ti.i("~(1)")}}
A.bc.prototype={
gk(a){return(A.ar(this.a)^892482866)>>>0},
I(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.G&&b.a===this.a}}
A.ch.prototype={
bi(){return this.w.c9(this)},
aE(){},
aF(){}}
A.cg.prototype={
bz(a){this.a=A.fe(this.d,a)},
ai(){var s,r=this,q=r.e&=4294967279
if((q&8)===0){q=r.e=q|8
if((q&128)!==0){s=r.r
if(s.a===1)s.a=3}if((q&64)===0)r.r=null
r.f=r.bi()}q=$.e7()
return q},
aE(){},
aF(){},
bi(){return null},
bR(a){var s,r,q=this,p=q.r
if(p==null)p=q.r=new A.cm()
s=p.c
if(s==null)p.b=p.c=a
else p.c=s.a=a
r=q.e
if((r&128)===0){r|=128
q.e=r
if(r<256)p.aZ(q)}},
aI(a){var s=this,r=s.e
s.e=r|64
s.d.bF(s.a,a)
s.e&=4294967231
s.bU((r&4)!==0)},
bU(a){var s,r,q=this,p=q.e
if((p&128)!==0&&q.r.c==null){p=q.e=p&4294967167
s=!1
if((p&4)!==0)if(p<256){s=q.r
s=s==null?null:s.c==null
s=s!==!1}if(s){p&=4294967291
q.e=p}}for(;;a=r){if((p&8)!==0){q.r=null
return}r=(p&4)!==0
if(a===r)break
q.e=p^64
if(r)q.aE()
else q.aF()
p=q.e&=4294967231}if((p&128)!==0&&p<256)q.r.aZ(q)}}
A.bn.prototype={
bw(a,b,c,d){return this.a.cm(a,d,c,b===!0)}}
A.cj.prototype={}
A.ci.prototype={}
A.cm.prototype={
aZ(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.fL(new A.dM(s,a))
s.a=1}}
A.dM.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.a
q.b=r
if(r==null)q.c=null
this.b.aI(s.b)},
$S:0}
A.bd.prototype={
bz(a){},
ai(){this.a=-1
this.c=null
return $.e7()},
c6(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.bE(s)}}else r.a=q}}
A.cp.prototype={}
A.dT.prototype={
$0(){return this.a.ac(this.b)},
$S:0}
A.dg.prototype={
bE(a){var s,r,q,p,o=this
try{q=o.af(o,a)
return q}catch(p){s=A.ai(p)
r=A.a1(p)
o.a_(o,s,r)}},
cJ(a,b){var s,r,q,p,o=this
try{q=o.a1(o,a,b)
return q}catch(p){s=A.ai(p)
r=A.a1(p)
o.a_(o,s,r)}},
bF(a,b){return this.cJ(a,b,t.z)},
bo(a,b){return new A.di(this,this.O(this,a),b)},
cq(a,b,c){return new A.dk(this,this.P(this,a),c,b)},
cp(a){return new A.dh(this,this.O(this,a))},
cr(a,b){return new A.dj(this,this.P(this,a),b)},
a_(a,b,c){var s,r,q,p,o,n,m,l=null
if(l==null){A.iZ(b,c)
return}s=l.gaW()
r=s.gcQ()
q=$.e
try{$.e=r
l.cz(s,s.gaG(),a,b,c)
$.e=q}catch(n){p=A.ai(n)
o=A.a1(n)
$.e=q
m=b===p?c:o
r.a_(s,p,m)}},
cj(a,b){var s,r,q=$.e
if(q===a)return b.$0()
s=q
$.e=a
try{q=b.$0()
return q}finally{$.e=s}r=null.gaW()
return null.cR(r,r.gaG(),a,b)},
af(a,b){return this.cj(a,b,t.z)},
ci(a,b,c){var s,r,q=$.e
if(q===a)return b.$1(c)
s=q
$.e=a
try{q=b.$1(c)
return q}finally{$.e=s}r=null.gaW()
return null.cz(r,r.gaG(),a,b,c)},
a1(a,b,c){var s=t.z
return this.ci(a,b,c,s,s)},
cf(a,b,c,d){var s,r,q=$.e
if(q===a)return b.$2(c,d)
s=q
$.e=a
try{q=b.$2(c,d)
return q}finally{$.e=s}r=null.gaW()
return null.cS(r,r.gaG(),a,b,c,d)},
cg(a,b,c,d){var s=t.z
return this.cf(a,b,c,d,s,s,s)},
cb(a,b){return b},
O(a,b){return this.cb(a,b,t.z)},
cc(a,b){return b},
P(a,b){var s=t.z
return this.cc(a,b,s,s)},
ca(a,b){return b},
aH(a,b){var s=t.z
return this.ca(a,b,s,s,s)},
c0(a,b,c){return null},
a2(a,b){A.ey(a,b)
return},
bd(a,b,c){return A.f4(b,B.b!==a?a.bo(c,t.H):c)},
bc(a,b,c){var s
if(B.b!==a)c=a.cq(c,t.H,t.p)
s=B.a.p(b.a,1000)
return A.i4(s,c)}}
A.di.prototype={
$0(){var s=this.a
return s.af(s,this.b)},
$S(){return this.c.i("0()")}}
A.dk.prototype={
$1(a){var s=this.a
return s.a1(s,this.b,a)},
$S(){return this.d.i("@<0>").aa(this.c).i("1(2)")}}
A.dh.prototype={
$0(){return this.a.bE(this.b)},
$S:0}
A.dj.prototype={
$1(a){return this.a.bF(this.b,a)},
$S(){return this.c.i("~(0)")}}
A.dU.prototype={
$0(){A.hf(this.a,this.b)},
$S:0}
A.bf.prototype={
gu(a){var s=this,r=new A.av(s,s.r,s.$ti.i("av<1>"))
r.c=s.e
return r},
gl(a){return this.a},
T(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.b5(s==null?q.b=A.er():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.b5(r==null?q.c=A.er():r,b)}else return q.bP(b)},
bP(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.er()
s=J.P(a)&1073741823
r=p[s]
if(r==null)p[s]=[q.aD(a)]
else{if(q.c2(r,a)>=0)return!1
r.push(q.aD(a))}return!0},
b5(a,b){if(a[b]!=null)return!1
a[b]=this.aD(b)
return!0},
bh(){this.r=this.r+1&1073741823},
aD(a){var s,r=this,q=new A.dK(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.bh()
return q},
c2(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aj(a[r].a,b))return r
return-1}}
A.dK.prototype={}
A.av.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.c(A.a6(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.n.prototype={
gu(a){return new A.am(a,a.length,A.bC(a).i("am<n.E>"))},
N(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
h(a){return A.ec(a,"[","]")}}
A.aU.prototype={
gl(a){return this.a},
h(a){return A.eg(this)}}
A.cG.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.i(a)
r.a=(r.a+=s)+": "
s=A.i(b)
r.a+=s},
$S:17}
A.b3.prototype={
h(a){return A.ec(this,"{","}")}}
A.bl.prototype={}
A.q.prototype={
J(a){var s,r,q=this,p=q.c
if(p===0)return q
s=!q.a
r=q.b
p=A.v(p,r)
return new A.q(p===0?!1:s,r,p)},
bZ(a){var s,r,q,p,o,n,m,l=this.c
if(l===0)return $.o()
s=l+a
r=this.b
q=new Uint16Array(s)
for(p=l-1,o=r.length;p>=0;--p){n=p+a
if(!(p<o))return A.a(r,p)
m=r[p]
if(!(n>=0&&n<s))return A.a(q,n)
q[n]=m}o=this.a
n=A.v(s,q)
return new A.q(n===0?!1:o,q,n)},
c_(a){var s,r,q,p,o,n,m,l,k=this,j=k.c
if(j===0)return $.o()
s=j-a
if(s<=0)return k.a?$.eL():$.o()
r=k.b
q=new Uint16Array(s)
for(p=r.length,o=a;o<j;++o){n=o-a
if(!(o>=0&&o<p))return A.a(r,o)
m=r[o]
if(!(n<s))return A.a(q,n)
q[n]=m}n=k.a
m=A.v(s,q)
l=new A.q(m===0?!1:n,q,m)
if(n)for(o=0;o<a;++o){if(!(o<p))return A.a(r,o)
if(r[o]!==0)return l.ar(0,$.u())}return l},
n(a,b){var s,r,q,p,o,n=this
if(b<0)throw A.c(A.U("shift-amount must be posititve "+b,null))
s=n.c
if(s===0)return n
r=B.a.p(b,16)
if(B.a.j(b,16)===0)return n.bZ(r)
q=s+r+1
p=new Uint16Array(q)
A.fc(n.b,s,b,p)
s=n.a
o=A.v(q,p)
return new A.q(o===0?!1:s,p,o)},
aq(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(b<0)throw A.c(A.U("shift-amount must be posititve "+b,null))
s=j.c
if(s===0)return j
r=B.a.p(b,16)
q=B.a.j(b,16)
if(q===0)return j.c_(r)
p=s-r
if(p<=0)return j.a?$.eL():$.o()
o=j.b
n=new Uint16Array(p)
A.hR(o,s,b,n)
s=j.a
m=A.v(p,n)
l=new A.q(m===0?!1:s,n,m)
if(s){s=o.length
if(!(r>=0&&r<s))return A.a(o,r)
if((o[r]&B.a.n(1,q)-1)!==0)return l.ar(0,$.u())
for(k=0;k<r;++k){if(!(k<s))return A.a(o,k)
if(o[k]!==0)return l.ar(0,$.u())}}return l},
C(a,b){var s,r=this.a
if(r===b.a){s=A.dq(this.b,this.c,b.b,b.c)
return r?0-s:s}return r?-1:1},
M(a,b){var s,r,q,p=this,o=p.c,n=a.c
if(o<n)return a.M(p,b)
if(o===0)return $.o()
if(n===0)return p.a===b?p:p.J(0)
s=o+1
r=new Uint16Array(s)
A.hM(p.b,o,a.b,n,r)
q=A.v(s,r)
return new A.q(q===0?!1:b,r,q)},
B(a,b){var s,r,q,p=this,o=p.c
if(o===0)return $.o()
s=a.c
if(s===0)return p.a===b?p:p.J(0)
r=new Uint16Array(o)
A.ce(p.b,o,a.b,s,r)
q=A.v(o,r)
return new A.q(q===0?!1:b,r,q)},
b3(a,b){var s,r,q,p,o,n,m,l,k=this.c,j=a.c
k=k<j?k:j
s=this.b
r=a.b
q=new Uint16Array(k)
for(p=s.length,o=r.length,n=0;n<k;++n){if(!(n<p))return A.a(s,n)
m=s[n]
if(!(n<o))return A.a(r,n)
l=r[n]
if(!(n<k))return A.a(q,n)
q[n]=m&l}p=A.v(k,q)
return new A.q(p===0?!1:b,q,p)},
b2(a,b){var s,r,q,p,o,n=this.c,m=this.b,l=a.b,k=new Uint16Array(n),j=a.c
if(n<j)j=n
for(s=m.length,r=l.length,q=0;q<j;++q){if(!(q<s))return A.a(m,q)
p=m[q]
if(!(q<r))return A.a(l,q)
o=l[q]
if(!(q<n))return A.a(k,q)
k[q]=p&~o}for(q=j;q<n;++q){if(!(q>=0&&q<s))return A.a(m,q)
k[q]=m[q]}s=A.v(n,k)
return new A.q(s===0?!1:b,k,s)},
b4(a,b){var s,r,q,p,o,n,m,l,k=this.c,j=a.c,i=k>j?k:j,h=this.b,g=a.b,f=new Uint16Array(i)
if(k<j){s=k
r=a}else{s=j
r=this}for(q=h.length,p=g.length,o=0;o<s;++o){if(!(o<q))return A.a(h,o)
n=h[o]
if(!(o<p))return A.a(g,o)
m=g[o]
if(!(o<i))return A.a(f,o)
f[o]=n|m}l=r.b
for(q=l.length,o=s;o<i;++o){if(!(o>=0&&o<q))return A.a(l,o)
p=l[o]
if(!(o<i))return A.a(f,o)
f[o]=p}q=A.v(i,f)
return new A.q(q===0?!1:b,f,q)},
aw(a,b){var s,r,q,p,o,n,m,l,k=this.c,j=a.c,i=k>j?k:j,h=this.b,g=a.b,f=new Uint16Array(i)
if(k<j){s=k
r=a}else{s=j
r=this}for(q=h.length,p=g.length,o=0;o<s;++o){if(!(o<q))return A.a(h,o)
n=h[o]
if(!(o<p))return A.a(g,o)
m=g[o]
if(!(o<i))return A.a(f,o)
f[o]=n^m}l=r.b
for(q=l.length,o=s;o<i;++o){if(!(o>=0&&o<q))return A.a(l,o)
p=l[o]
if(!(o<i))return A.a(f,o)
f[o]=p}q=A.v(i,f)
return new A.q(q===0?!1:b,f,q)},
v(a,b){var s,r,q,p=this
if(p.c===0||b.c===0)return $.o()
s=p.a
if(s===b.a){if(s){s=$.u()
return p.B(s,!0).b4(b.B(s,!0),!0).M(s,!0)}return p.b3(b,!1)}if(s){r=p
q=b}else{r=b
q=p}return q.b2(r.B($.u(),!1),!1)},
ap(a,b){var s,r,q,p=this
if(p.c===0)return b
if(b.c===0)return p
s=p.a
if(s===b.a){if(s){s=$.u()
return p.B(s,!0).b3(b.B(s,!0),!0).M(s,!0)}return p.b4(b,!1)}if(s){r=p
q=b}else{r=b
q=p}s=$.u()
return r.B(s,!0).b2(q,!0).M(s,!0)},
b0(a,b){var s,r,q,p=this
if(p.c===0)return b
if(b.c===0)return p
s=p.a
if(s===b.a){if(s){s=$.u()
return p.B(s,!0).aw(b.B(s,!0),!1)}return p.aw(b,!1)}if(s){r=p
q=b}else{r=b
q=p}s=$.u()
return q.aw(r.B(s,!0),!0).M(s,!0)},
aX(a,b){var s,r,q=this,p=q.c
if(p===0)return b
s=b.c
if(s===0)return q
r=q.a
if(r===b.a)return q.M(b,r)
if(A.dq(q.b,p,b.b,s)>=0)return q.B(b,r)
return b.B(q,!r)},
ar(a,b){var s,r,q=this,p=q.c
if(p===0)return b.J(0)
s=b.c
if(s===0)return q
r=q.a
if(r!==b.a)return q.M(b,r)
if(A.dq(q.b,p,b.b,s)>=0)return q.B(b,r)
return b.B(q,!r)},
a8(a,b){var s,r,q,p,o,n,m,l=this.c,k=b.c
if(l===0||k===0)return $.o()
s=l+k
r=this.b
q=b.b
p=new Uint16Array(s)
for(o=q.length,n=0;n<k;){if(!(n<o))return A.a(q,n)
A.fd(q[n],r,0,p,n,l);++n}o=this.a!==b.a
m=A.v(s,p)
return new A.q(m===0?!1:o,p,m)},
bY(a){var s,r,q,p
if(this.c<a.c)return $.o()
this.be(a)
s=$.em.D()-$.ba.D()
r=A.eo($.el.D(),$.ba.D(),$.em.D(),s)
q=A.v(s,r)
p=new A.q(!1,r,q)
return this.a!==a.a&&q>0?p.J(0):p},
cd(a){var s,r,q,p=this
if(p.c<a.c)return p
p.be(a)
s=A.eo($.el.D(),0,$.ba.D(),$.ba.D())
r=A.v($.ba.D(),s)
q=new A.q(!1,s,r)
if($.en.D()>0)q=q.aq(0,$.en.D())
return p.a&&q.c>0?q.J(0):q},
be(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.c
if(b===$.f9&&a.c===$.fb&&c.b===$.f8&&a.b===$.fa)return
s=a.b
r=a.c
q=r-1
if(!(q>=0&&q<s.length))return A.a(s,q)
p=16-B.a.gbp(s[q])
if(p>0){o=new Uint16Array(r+5)
n=A.f7(s,r,p,o)
m=new Uint16Array(b+5)
l=A.f7(c.b,b,p,m)}else{m=A.eo(c.b,0,b,b+2)
n=r
o=s
l=b}q=n-1
if(!(q>=0&&q<o.length))return A.a(o,q)
k=o[q]
j=l-n
i=new Uint16Array(l)
h=A.eq(o,n,j,i)
g=l+1
q=m.$flags|0
if(A.dq(m,l,i,h)>=0){q&2&&A.y(m)
if(!(l>=0&&l<m.length))return A.a(m,l)
m[l]=1
A.ce(m,g,i,h,m)}else{q&2&&A.y(m)
if(!(l>=0&&l<m.length))return A.a(m,l)
m[l]=0}q=n+2
f=new Uint16Array(q)
if(!(n>=0&&n<q))return A.a(f,n)
f[n]=1
A.ce(f,n+1,o,n,f)
e=l-1
for(q=m.length;j>0;){d=A.hN(k,m,e);--j
A.fd(d,f,0,m,j,n)
if(!(e>=0&&e<q))return A.a(m,e)
if(m[e]<d){h=A.eq(f,n,j,i)
A.ce(m,g,i,h,m)
while(--d,m[e]<d)A.ce(m,g,i,h,m)}--e}$.f8=c.b
$.f9=b
$.fa=s
$.fb=r
$.el.b=m
$.em.b=g
$.ba.b=n
$.en.b=p},
gk(a){var s,r,q,p,o=new A.dr(),n=this.c
if(n===0)return 6707
s=this.a?83585:429689
for(r=this.b,q=r.length,p=0;p<n;++p){if(!(p<q))return A.a(r,p)
s=o.$2(s,r[p])}return new A.ds().$1(s)},
I(a,b){if(b==null)return!1
return b instanceof A.q&&this.C(0,b)===0},
h(a){var s,r,q,p,o,n=this,m=n.c
if(m===0)return"0"
if(m===1){if(n.a){m=n.b
if(0>=m.length)return A.a(m,0)
return B.a.h(-m[0])}m=n.b
if(0>=m.length)return A.a(m,0)
return B.a.h(m[0])}s=A.w([],t.s)
m=n.a
r=m?n.J(0):n
while(r.c>1){q=$.eK()
if(q.c===0)A.O(B.v)
p=r.cd(q).h(0)
s.push(p)
o=p.length
if(o===1)s.push("000")
if(o===2)s.push("00")
if(o===3)s.push("0")
r=r.bY(q)}q=r.b
if(0>=q.length)return A.a(q,0)
s.push(B.a.h(q[0]))
if(m)s.push("-")
return new A.b1(s,t.r).cD(0)}}
A.dr.prototype={
$2(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
$S:7}
A.ds.prototype={
$1(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
$S:8}
A.cs.prototype={}
A.aD.prototype={
I(a,b){if(b==null)return!1
return b instanceof A.aD&&this.a===b.a},
gk(a){return B.a.gk(this.a)},
h(a){var s,r,q,p,o=this.a,n=B.a.p(o,36e8)
o%=36e8
s=B.a.p(o,6e7)
o%=6e7
r=s<10?"0":""
q=B.a.p(o,1e6)
p=q<10?"0":""
return""+n+":"+r+s+":"+p+q+"."+B.o.cH(B.a.h(o%1e6),6,"0")}}
A.dv.prototype={
h(a){return this.Z()}}
A.j.prototype={
gX(){return A.hu(this)}}
A.bF.prototype={
h(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.cx(s)
return"Assertion failed"}}
A.S.prototype={}
A.M.prototype={
gaB(){return"Invalid argument"+(!this.a?"(s)":"")},
gaA(){return""},
h(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.gaB()+q+o
if(!s.a)return n
return n+s.gaA()+": "+A.cx(s.gaR())},
gaR(){return this.b}}
A.as.prototype={
gaR(){return this.b},
gaB(){return"RangeError"},
gaA(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.i(q):""
else if(q==null)s=": Not greater than or equal to "+A.i(r)
else if(q>r)s=": Not in inclusive range "+A.i(r)+".."+A.i(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.i(r)
return s}}
A.bK.prototype={
gaR(){return this.b},
gaB(){return"RangeError"},
gaA(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gl(a){return this.f}}
A.b5.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.c9.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.aa.prototype={
h(a){return"Bad state: "+this.a}}
A.bH.prototype={
h(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.cx(s)+"."}}
A.c2.prototype={
h(a){return"Out of Memory"},
gX(){return null},
$ij:1}
A.b4.prototype={
h(a){return"Stack Overflow"},
gX(){return null},
$ij:1}
A.dw.prototype={
h(a){return"Exception: "+this.a}}
A.cy.prototype={
h(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=B.o.bJ(q,0,75)+"..."
return r+"\n"+q}}
A.bL.prototype={
gX(){return null},
h(a){return"IntegerDivisionByZeroException"},
$ij:1}
A.F.prototype={
gl(a){var s,r=this.gu(this)
for(s=0;r.m();)++s
return s},
gU(a){var s=this.gu(this)
if(!s.m())throw A.c(A.cC())
return s.gq()},
N(a,b){var s,r
A.hx(b,"index")
s=this.gu(this)
for(r=b;s.m();){if(r===0)return s.gq();--r}throw A.c(A.eb(b,b-r,this,null,"index"))},
h(a){return A.hn(this,"(",")")}}
A.be.prototype={
N(a,b){var s=this.a
if(0>b||b>=s)A.O(A.eb(b,s,this,null,"index"))
return this.b.$1(b)},
gl(a){return this.a}}
A.aV.prototype={
h(a){return"MapEntry("+A.i(this.a)+": "+A.i(this.b)+")"}}
A.z.prototype={
gk(a){return A.d.prototype.gk.call(this,0)},
h(a){return"null"}}
A.d.prototype={$id:1,
I(a,b){return this===b},
gk(a){return A.ar(this)},
h(a){return"Instance of '"+A.c4(this)+"'"},
gt(a){return A.fG(this)},
toString(){return this.h(this)}}
A.cq.prototype={
h(a){return""},
$iK:1}
A.c8.prototype={
gl(a){return this.a.length},
h(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.dI.prototype={
cF(a){if(a<=0||a>4294967296)throw A.c(A.hw("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
A.a4.prototype={
gk(a){var s=this.a,r=this.b
return A.cJ(new A.m(s,r).$s,s,r,B.e)},
I(a,b){var s,r,q,p
if(b==null)return!1
if(b instanceof A.a4){s=b.a
r=b.b
q=this.a
p=this.b
p=A.cJ(new A.m(s,r).$s,s,r,B.e)===A.cJ(new A.m(q,p).$s,q,p,B.e)
s=p}else s=!1
return s},
h(a){var s=this
return"("+s.a+" "+s.b+") => '"+s.c+"' "+s.d}}
A.cK.prototype={
h(a){return A.fG(this).h(0)+": "+this.a}}
A.cY.prototype={}
A.al.prototype={}
A.cH.prototype={
Z(){return"Mode."+this.b}}
A.an.prototype={
h(a){var s=this
return"               row: "+s.a+"\n            column: "+s.b+"\n         character: '"+s.c+"'\n    characterColor: "+s.d+"\n\n          pixelRow: "+s.e+"\n       pixelColumn: "+s.f+"\n         pixelIsOn: "+s.r+"\n    "}}
A.aq.prototype={
saj(a){var s,r,q,p=this
if(a<0){s=p.d=a
for(r=p.b,q=p.a;s<0;){s+=r
p.d=s
p.c=B.a.j(p.c-1,q)}}else{s=p.b
p.c=B.a.j(p.c+B.a.L(a,s),p.a)
p.d=B.a.j(a,s)}},
gF(){return this.c*this.b+this.d},
sF(a){var s=this,r=s.b
s.c=B.a.j(B.a.L(a,r),s.a)
s.d=B.a.j(a,r)}}
A.c7.prototype={
bL(a,b,c,d,e,f,g,h){var s,r=this,q=v.G.document
q.onfocus=A.bx(new A.cM(r))
q.onblur=A.bx(new A.cN(r))
q=r.w
q.tabIndex=-1
q.style.display="block"
q.style.outline="none"
s=q.getContext("2d")
if(s==null)s=A.a_(s)
s.imageSmoothingEnabled=!1
q.onfocus=A.bx(new A.cO(r))
q.onblur=A.bx(new A.cP(r))
b.style.display="flex"
b.style.alignItems="flex-start"
b.style.padding="0"
b.style.margin="0"
b.style.width="fit-content"
b.style.height="fit-content"
b.style.background=r.r
b.appendChild(q)
r.a4(0)},
ag(a,b){return new A.m(B.a.j(a,this.b),B.a.j(b,this.c))},
b8(){var s=this.x,r=s.getContext("2d")
if(r==null)r=A.a_(r)
r.save()
r.beginPath()
r.clearRect(0,0,s.width,s.height)
r.restore()
return r},
bb(){var s=this.w.getContext("2d")
if(s==null)s=A.a_(s)
s.save()
s.beginPath()
s.drawImage(this.x,0,0)
s.restore()
return s},
R(a,b,c,d){var s,r,q,p,o,n,m=this,l=a<0||a>=m.b||b<0||b>=m.c
if(l)return
s=m.ag(a,b)
a=s.a
b=s.b
r=A.ei(b)
q=r.a
p=B.a.n(1,r.b)
l=m.y
if(!(a>=0&&a<l.length))return A.a(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.a(l,q)
o=l[q]
l.$flags&2&&A.y(l)
l[q]=(o|p)>>>0
l[q]=(l[q]^p)>>>0
l=c.getContext("2d")
if(l==null)l=A.a_(l)
l.save()
l.beginPath()
l.fillStyle=m.r
o=m.d
n=m.e
l.fillRect(b*o,a*n,o,n)
l.restore()},
S(a,b,c,d,e){var s,r,q,p,o,n,m=this,l=a<0||a>=m.b||b<0||b>=m.c
if(l)return
s=m.ag(a,b)
a=s.a
b=s.b
r=A.ei(b)
q=r.a
p=B.a.n(1,r.b)
l=m.y
if(!(a>=0&&a<l.length))return A.a(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.a(l,q)
o=l[q]
l.$flags&2&&A.y(l)
l[q]=(o|p)>>>0
o=d.getContext("2d")
l=o==null?A.a_(o):o
l.save()
l.beginPath()
l.fillStyle=c
o=m.d
n=m.e
l.fillRect(b*o,a*n,o,n)
l.restore()},
bB(a,b){var s,r,q,p,o=this.ag(b,a)
b=o.a
s=A.ei(o.b)
r=s.a
q=B.a.n(1,s.b)
p=this.y
if(!(b>=0&&b<p.length))return A.a(p,b)
p=p[b]
if(!(r>=0&&r<p.length))return A.a(p,r)
return(p[r]&q)>>>0>0},
br(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=this
if(e==null)e=k.c-c
if(b==null)b=k.b-d
k.b8()
if(c===0&&d===0&&e===k.c&&b===k.b){for(s=k.y,r=s.length,q=0;q<r;++q)for(p=0;o=s[q],p<o.length;++p){o.$flags&2&&A.y(o)
o[p]=0}s=k.x
r=s.getContext("2d")
if(r==null)r=A.a_(r)
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
for(p=c;p<m;++p)k.R(l,B.a.j(p,r),o,!1)}}k.bb()},
a4(a){return this.br(0,null,0,0,null)},
c7(a,b,c,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
d.b8()
s=d.ag(a,b)
a=s.a
b=s.b
r=B.a.cl(1,a1)-1
for(q=a2.a,p=a1-1,o=t.t,n=d.x,m=0;m<c.length;++m){l=c[m]
k=(l&r)>>>0
l=A.w([],o)
for(j=a+m,i=0;i<a1;++i){h=d.bB(b+i,j)?1:0
l.push(B.a.n(h,p-i))}g=B.h.cw(l,0,new A.cL())
switch(q){case 0:for(i=0;i<a1;++i){l=b+i
if((B.a.E(k,p-i)&1)>0)d.S(j,l,a0,n,!1)
else d.R(j,l,n,!1)}break
case 1:for(i=0;i<a1;++i){l=b+i
if((B.a.E(k,p-i)&1)>0)d.R(j,l,n,!1)
else d.S(j,l,a0,n,!1)}break
case 3:for(i=0;i<a1;++i){f=p-i
if((B.a.E(k,f)&1)>0&&(B.a.aq(g,f)&1)===0)d.S(j,b+i,a0,n,!1)}break
case 2:for(i=0;i<a1;++i)if((B.a.E(k,p-i)&1)>0)d.S(j,b+i,a0,n,!1)
break
case 4:for(e=(k&g)>>>0,i=0;i<a1;++i)if((B.a.E(e,p-i)&1)>0)d.S(j,b+i,a0,n,!1)
break
case 5:for(e=(k&g)>>>0,i=0;i<a1;++i)if((B.a.E(e,p-i)&1)>0)d.R(j,b+i,n,!1)
break
case 6:for(e=(k&g)>>>0,i=0;i<a1;++i)if((B.a.E(e,p-i)&1)===0)d.R(j,b+i,n,!1)
break
case 7:for(e=(k&g)>>>0,i=0;i<a1;++i){l=b+i
if((B.a.E(e,p-i)&1)===0)d.R(j,l,n,!1)
else d.S(j,l,a0,n,!1)}break}}d.bb()},
bD(a,b,c,d){this.c7(d.a,d.b,b,a,8,c,!0,!1,!1)},
cI(a,b,c){return this.bD(a,b,B.q,c)},
a5(){var s=this.w
s.style.opacity="1.0"
s.focus()},
a3(){var s=this.w,r=s.style
r.opacity="0.5"
s.blur()}}
A.cM.prototype={
$0(){this.a.z=!0},
$S:1}
A.cN.prototype={
$0(){this.a.z=!1},
$S:1}
A.cO.prototype={
$0(){this.a.a5()},
$S:1}
A.cP.prototype={
$0(){this.a.a3()},
$S:1}
A.cL.prototype={
$2(a,b){return(a|b)>>>0},
$S:7}
A.at.prototype={
Z(){return"State."+this.b}}
A.cX.prototype={
bM(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,a0,a1){var s,r=this,q=new A.db(r),p=new A.da()
r.cy=l
s=r.f
s.tabIndex=-1
s.onfocus=A.bx(new A.d_(r))
s.onblur=A.bx(new A.d0(r))
s.onkeydown=A.ax(new A.d1(r,p,new A.d9(r)))
s.onclick=A.ax(new A.d2(r,q,o))
r.ay=o
s.onmouseup=A.ax(new A.d3(r,q))
r.ch=a0
s.onmousemove=A.ax(new A.d4(r,q))
r.CW=n
s.onmouseenter=A.ax(new A.d5(r,q))
r.cx=a1
s.onmouseleave=A.ax(new A.d6(r,q))
r.db=m
s.onkeyup=A.ax(new A.d7(r,p))
p=new ($.h1())(r)
A.hE(A.eU(300),new A.d8(new A.cs(p)))
r.a3()
r.a4(0)},
gaN(){var s=this.w
s===$&&A.a3()
return s.gaN()},
gaL(){var s=this.w
s===$&&A.a3()
return s.gaL()},
aK(a,b){return new A.m(B.a.j(a,this.a),B.a.j(b,this.b))},
bg(){var s=this,r=s.dy,q=s.x,p=q.c
if(!(p>=0&&p<r.length))return A.a(r,p)
p=r[p]
q=q.d
if(!(q>=0&&q<p.length))return A.a(p,q)
s.fr.T(0,p[q])
s.co()
s.fy=!1},
bn(a){var s,r,q,p,o,n,m,l,k,j
for(s=this.fr,r=A.hV(s,s.r,s.$ti.c),q=this.w,p=this.fx,o=r.$ti.c;r.m();){n=r.d
if(n==null)n=o.a(n)
m=n.a
l=n.b
if(p.aM(n.c)){k=p.W(0,n.c)
k.toString
j=k}else j=$.fQ()
q===$&&A.a3()
n=n.d
q.bD(n,j,B.q,new A.m(m*10,l*8))}if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.bh()}},
co(){return this.bn(null)},
aY(a,b){var s,r=this.aK(b,a)
b=r.a
a=r.b
s=this.dy
if(!(b>=0&&b<s.length))return A.a(s,b)
s=s[b]
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a].c},
by(){var s=this.x
s.saj(0)
s.c=B.a.j(s.c+1,s.a)},
a6(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=this,j=e==null?k.x.c:e,i=k.aK(j,c==null?k.x.d:c)
j=k.x
j.c=B.a.j(i.a,j.a)
j.saj(i.b)
if(b==null)b=k.d
for(s=a.split(""),r=s.length,q=k.dy,p=k.fr,o=0;o<r;++o){n=s[o]
e=j.c
c=j.d
if(!(e>=0&&e<q.length))return A.a(q,e)
m=q[e]
if(!(c>=0&&c<m.length))return A.a(m,c)
l=m[c]
l.c=n
l.d=b
p.T(0,l)
j.saj(j.d+1)}k.bn(null)
if(d)k.by()},
A(a,b,c){return this.a6(a,null,b,!0,c)},
cG(a,b,c){return this.a6(a,b,c,!0,null)},
G(a,b){return this.a6(a,null,b,!0,null)},
aV(a,b,c,d){return this.a6(a,b,c,!0,d)},
bA(a,b){return this.a6(a,null,null,b,null)},
bq(a,b,c,d,e){var s,r,q,p,o,n,m,l=this
if(e==null)e=l.b-b
if(c==null)c=l.a-d
s=d+c
r=b+e
for(q=l.dy,p=l.d,o=d;o<s;++o)for(n=b;n<r;++n){if(!(o>=0&&o<q.length))return A.a(q,o)
m=q[o]
if(!(n>=0&&n<m.length))return A.a(m,n)
m=m[n]
m.c=" "
m.d=p}q=l.w
q===$&&A.a3()
q.br(0,c*10,b*8,d*10,e*8)
q=l.x
q.c=B.a.j(d,q.a)
q.saj(b)},
a4(a){return this.bq(0,0,null,0,null)},
c8(a,b,c){var s=this.w
s===$&&A.a3()
s.cI(this.d,b,new A.m(c*10,a*8))},
cn(){if(this.dx!==B.c)throw A.c(A.cZ("Terminal already awaiting input."))},
cB(){this.cn()
this.dx=B.i
var s=this.at
return new A.G(s,A.a0(s).i("G<1>")).gU(0)},
a5(){return this.gaN().$0()},
a3(){return this.gaL().$0()}}
A.db.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.w
i===$&&A.a3()
s=J.eO(a.offsetX)
r=Math.max(Math.min(B.a.L(J.eO(a.offsetY)-1,i.e),i.b-1),0)
q=Math.max(Math.min(B.a.L(s-1,i.d),i.c-1),0)
p=B.a.p(r,10)
o=B.a.p(q,8)
n=j.aY(o,p)
m=j.aK(p,o)
l=m.a
k=m.b
j=j.dy
if(!(l>=0&&l<j.length))return A.a(j,l)
j=j[l]
if(!(k>=0&&k<j.length))return A.a(j,k)
return new A.an(p,o,n,j[k].d,r,q,i.bB(q,r))},
$S:18}
A.da.prototype={
$1(a){var s=a.key
return new A.al(s.length>1?"":s)},
$S:19}
A.d9.prototype={
$0(){var s,r,q,p,o,n=this.a,m=n.a,l=n.b,k=new A.aq(m,l)
k.sF(n.y.gF())
s=A.w([],t.s)
for(r=n.z,q=r.b;p=k.c,o=k.d,p*l+o<r.c*q+r.d;p=k.c*l+k.d+1,k.c=B.a.j(B.a.L(p,l),m),k.d=B.a.j(p,l))s.push(n.aY(o,p))
return B.h.bv(s,"")},
$S:20}
A.d_.prototype={
$0(){var s=this.a.w
s===$&&A.a3()
s.a5()},
$S:1}
A.d0.prototype={
$0(){var s=this.a.w
s===$&&A.a3()
s.a3()},
$S:1}
A.d1.prototype={
$1(a){var s,r,q,p
a.preventDefault()
s=this.a
switch(s.dx.a){case 0:break
case 1:r=s.at
if(r.d!=null){r.T(0,this.b.$1(a))
s.dx=B.c}break
case 2:s.bg()
A:{q=a.keyCode
if(13===q){r=s.as
if(r.d!=null){r.T(0,J.h6(this.c.$0()))
s.by()
s.dx=B.c}break A}if(8===q){r=s.x
if(r.gF()>s.y.gF()){r.sF(r.gF()-1)
s.bA(" ",!1)
r.sF(r.gF()-1)}break A}p=a.key
if(p.length===1&&s.x.gF()<s.z.gF())s.bA(p,!1)}break
case 3:break}},
$S:2}
A.d2.prototype={
$1(a){var s
a.preventDefault()
s=this.a
if(s.dx===B.t&&s.ax.d!=null){s.ax.T(0,this.b.$1(a))
s.dx=B.c}},
$S:2}
A.d3.prototype={
$1(a){a.preventDefault()},
$S:2}
A.d4.prototype={
$1(a){a.preventDefault()},
$S:2}
A.d5.prototype={
$1(a){a.preventDefault()},
$S:2}
A.d6.prototype={
$1(a){a.preventDefault()},
$S:2}
A.d7.prototype={
$1(a){a.preventDefault()},
$S:2}
A.d8.prototype={
$1(a){var s,r,q=this.a.a.deref()
if(q==null){a.ai()
return}s=q.w
s===$&&A.a3()
if(s.z&&J.aj(v.G.document.activeElement,s.w)&&q.dx===B.e5)if(q.fy)q.bg()
else{s=q.x
r=s.c
q.c8(s.d,$.fP(),r)
q.fy=!0}},
$S:21}
A.I.prototype={
Z(){return"Direction."+this.b},
gbx(){switch(this.a){case 0:var s=B.e2
break
case 1:s=B.dY
break
case 2:s=B.e_
break
case 3:s=B.dZ
break
case 4:s=B.e3
break
case 5:s=B.e4
break
case 6:s=B.e0
break
case 7:s=B.e1
break
default:s=null}return s}}
A.a9.prototype={
Z(){return"Mode."+this.b}}
A.cA.prototype={
bu(a,b,c){var s,r=a.gau()
switch(a.a){case 1:s="orange"
break
case 0:s="mediumorchid"
break
default:s=null}this.a.aV(r,s,c*3+3,b*3+3)},
bt(a){var s,r,q,p,o,n,m,l,k,j=this,i=j.a
i.bq(0,2,24,2,24)
for(s=j.b,r=0;r<8;++r)for(q=r*3+3,p=r*8,o=0;o<8;++o){n=s.a
m=$.u()
l=p+o
n=n.v(0,m.n(0,l))
k=$.o()
if(n.C(0,k)>0)j.bu(B.d,r,o)
else if(s.b.v(0,m.n(0,l)).C(0,k)>0)j.bu(B.f,r,o)
else i.aV("\u2022","lightgray",o*3+3,q)}if(a!=null){s=a.a*3+3
q=s-1
p=a.b*3+3
n=p-1
i.A("\u250c",n,q);++p
i.A("\u2510",p,q);++s
i.A("\u2514",n,s)
i.A("\u2518",p,s)}},
bs(){return this.bt(null)},
b_(){var s,r,q,p,o=this.a
o.a4(0)
for(s=A.hi(new A.b7(A.w("   ___  _   _        _ _     \n  / _ \\| |_| |_  ___| | |___ \n | (_) |  _| ' \\/ -_) | / _ \\\n  \\___/ \\__|_||_\\___|_|_\\___/\n".split("\n"),t.s),new A.cB(),t.U),0,t.N),r=s.a,r=r.gu(r),s=s.b,q=new A.aK(r,s);q.m();){p=q.c
p=p>=0?new A.m(s+p,r.gq()):A.O(A.cC())
o.aV(p.b,"lightgreen",8,p.a+3)}},
ak(){var s=0,r=A.bA(t.A),q,p=this,o,n,m
var $async$ak=A.bB(function(a,b){if(a===1)return A.bu(b,r)
for(;;)switch(s){case 0:p.b_()
o=p.a
o.A("Select a difficulty level:",10,10)
o.A("(A) Easy",12,12)
o.G("(B) Medium",12)
o.G("(C) Hard",12)
o.G("(D) Expert",12)
n=null
case 3:if(!(n==null)){s=5
break}if(o.dx!==B.c)A.O(A.cZ("Terminal already awaiting input."))
o.dx=B.i
m=o.at
case 6:s=13
return A.N(new A.G(m,A.a0(m).i("G<1>")).gU(0),$async$ak)
case 13:switch(b.b.toLowerCase()){case"a":s=8
break
case"b":s=9
break
case"c":s=10
break
case"d":s=11
break
default:s=12
break}break
case 8:m=B.dV
s=7
break
case 9:m=B.dU
s=7
break
case 10:m=B.dX
s=7
break
case 11:m=B.dW
s=7
break
case 12:m=null
s=7
break
case 7:case 4:n=m
s=3
break
case 5:q=n
s=1
break
case 1:return A.bv(q,r)}})
return A.bw($async$ak,r)},
am(){var s=0,r=A.bA(t.h),q,p=this,o,n,m
var $async$am=A.bB(function(a,b){if(a===1)return A.bu(b,r)
for(;;)switch(s){case 0:p.b_()
o=p.a
o.A("Select your token:",10,10)
o.A("(A) Naught (Move First)",12,12)
o.G("(B) Cross (Move Second)",12)
n=null
case 3:if(!(n==null)){s=5
break}if(o.dx!==B.c)A.O(A.cZ("Terminal already awaiting input."))
o.dx=B.i
m=o.at
case 6:s=11
return A.N(new A.G(m,A.a0(m).i("G<1>")).gU(0),$async$am)
case 11:switch(b.b.toLowerCase()){case"a":s=8
break
case"b":s=9
break
default:s=10
break}break
case 8:m=B.d
s=7
break
case 9:m=B.f
s=7
break
case 10:m=null
s=7
break
case 7:case 4:n=m
s=3
break
case 5:q=n
s=1
break
case 1:return A.bv(q,r)}})
return A.bw($async$am,r)},
al(){var s=0,r=A.bA(t.R),q,p=this,o,n,m,l,k,j
var $async$al=A.bB(function(a,b){if(a===1)return A.bu(b,r)
for(;;)switch(s){case 0:j=p.b.gan()
o=p.a,n=-1,m=-1
case 3:if(!!B.h.ct(j,new A.m(n,m))){s=4
break}if(o.dx!==B.c)A.O(A.cZ("Terminal already awaiting input."))
o.dx=B.t
l=o.ax
s=5
return A.N(new A.G(l,A.a0(l).i("G<1>")).gU(0),$async$al)
case 5:k=b
n=B.a.p(k.a-3,3)
m=B.a.p(k.b-3,3)
s=3
break
case 4:q=new A.m(n,m)
s=1
break
case 1:return A.bv(q,r)}})
return A.bw($async$al,r)},
a7(a){return this.bI(a)},
bI(a){var s=0,r=A.bA(t.H),q=this,p,o,n
var $async$a7=A.bB(function(b,c){if(b===1)return A.bu(c,r)
for(;;)switch(s){case 0:n=q.a
n.A("Game Over!",30,15)
p=q.b
if(p.d===0||p.e===0)n.cG("Othello!","yellow",30)
o=p.d
p=p.e
if(o===p)n.G("A tie!",30)
else switch(a.a){case 1:if(o>p)n.G("You win!",30)
else n.G("Computer wins!",30)
break
case 0:if(o>p)n.G("Computer wins!",30)
else n.G("You win!",30)
break}n.G("Press any key!",30)
s=2
return A.N(n.cB(),$async$a7)
case 2:return A.bv(null,r)}})
return A.bw($async$a7,r)},
bH(a){var s,r,q=this,p=a.gaT(),o=q.a
o.A("Score",30,3)
s=a.gau()
switch(a.a){case 0:r=q.b.e
break
case 1:r=q.b.d
break
default:r=null}o.A("  Human ("+s+"):    "+A.i(r)+" ",30,5)
r=p.gau()
switch(p.a){case 0:s=q.b.e
break
case 1:s=q.b.d
break
default:s=null}o.G("  Computer ("+r+"): "+A.i(s)+" ",30)},
K(){var s=0,r=A.bA(t.H),q=this,p,o,n,m,l,k,j,i,h,g
var $async$K=A.bB(function(a,b){if(a===1)return A.bu(b,r)
for(;;)switch(s){case 0:p=q.b,o=q.a,n=t.z
case 2:s=4
return A.N(q.ak(),$async$K)
case 4:m=b
s=5
return A.N(q.am(),$async$K)
case 5:l=b
o.a4(0)
p.a=p.b=$.o()
p.d=p.e=0
p.V(B.d,3,3)
p.V(B.d,4,4)
p.V(B.f,3,4)
p.V(B.f,4,3)
p.c=B.d
q.bs()
q.bH(l)
k=!1
case 6:j=p.gan().length===0
s=!j?9:11
break
case 9:if(p.c===l)o.A("Your move...",3,27)
else o.A("Thinking...",3,27)
s=12
return A.N(A.eW(A.eU(100),n),$async$K)
case 12:s=p.c===l?13:15
break
case 13:s=16
return A.N(q.al(),$async$K)
case 16:s=14
break
case 15:s=17
return A.N(A.dY(p,m),$async$K)
case 17:case 14:i=b
h=i.a
g=i.b
o.A("              ",3,27)
p.aS(h,g)
if(p.c===l)q.bt(new A.m(h,g))
else q.bs()
q.bH(l)
s=10
break
case 11:if(k){s=8
break}p.c=p.c.gaT()
case 10:case 7:k=j
s=6
break
case 8:s=18
return A.N(q.a7(l),$async$K)
case 18:s=2
break
case 3:return A.bv(null,r)}})
return A.bw($async$K,r)}}
A.cB.prototype={
$1(a){return a.length!==0},
$S:22}
A.c1.prototype={
gbC(){switch(this.c.a){case 1:var s=this.a
break
case 0:s=this.b
break
default:s=null}return s},
gaU(){switch(this.c.a){case 1:var s=this.b
break
case 0:s=this.a
break
default:s=null}return s},
V(a,b,c){var s=this,r=$.u().n(0,b*8+c)
switch(a.a){case 1:s.a=s.a.ap(0,r);++s.d
if(s.b.v(0,r).C(0,$.o())>0){--s.e
s.b=s.b.v(0,$.eI().b0(0,r))}break
case 0:s.b=s.b.ap(0,r);++s.e
if(s.a.v(0,r).C(0,$.o())>0){--s.d
s.a=s.a.v(0,$.eI().b0(0,r))}break}},
gan(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=A.w([],t.w)
for(s=0;s<8;++s)for(r=s*8,q=0;q<8;++q)if(g.a.ap(0,g.b).v(0,$.u().n(0,r+q)).C(0,$.o())<=0){for(p=0,o=0;o<8;++o){n=B.p[o].gbx()
m=n.a
l=n.b
k=s+m
j=q+l
i=0
for(;;){h=k>=0
if(!(h&&k<8&&j>=0&&j<8&&g.gaU().v(0,$.u().n(0,k*8+j)).C(0,$.o())>0))break;++i
k+=m
j+=l}if(i>0)h=h&&k<8&&j>=0&&j<8&&g.gbC().v(0,$.u().n(0,k*8+j)).C(0,$.o())>0
else h=!1
if(h)p+=i}if(p>0)f.push(new A.m(s,q))}return f},
aS(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
i.V(i.c,a,b)
for(s=0;s<8;++s){r=B.p[s].gbx()
q=r.a
p=r.b
o=a+q
n=b+p
m=n
l=o
k=0
for(;;){j=l>=0
if(!(j&&l<8&&m>=0&&m<8&&i.gaU().v(0,$.u().n(0,l*8+m)).C(0,$.o())>0))break;++k
l+=q
m+=p}if(k>0)j=j&&l<8&&m>=0&&m<8&&i.gbC().v(0,$.u().n(0,l*8+m)).C(0,$.o())>0
else j=!1
if(j)for(;;){if(!(o>=0&&o<8&&n>=0&&n<8&&i.gaU().v(0,$.u().n(0,o*8+n)).C(0,$.o())>0))break
i.V(i.c,o,n)
o+=q
n+=p}}i.c=i.c.gaT()},
h(a){var s,r,q,p,o,n,m,l=A.w([],t.s)
for(s=0;s<8;++s)l.push(B.a.h(s))
l="  "+B.h.bv(l," ")+"\n"
for(r=0;r<8;++r){l+=""+r+" "
for(q=r*8,s=0;s<8;++s){p=q+s
o=this.a
n=$.u()
o=o.v(0,n.n(0,p))
m=$.o()
if(o.C(0,m)>0)l+="o "
else l=this.b.v(0,n.n(0,p)).C(0,m)>0?l+"x ":l+". "}l+="\n"}return l.charCodeAt(0)==0?l:l}}
A.b0.prototype={
Z(){return"Player."+this.b},
gaT(){switch(this.a){case 0:var s=B.d
break
case 1:s=B.f
break
default:s=null}return s},
gau(){switch(this.a){case 0:var s="X"
break
case 1:s="O"
break
default:s=null}return s}};(function aliases(){var s=J.W.prototype
s.bK=s.h})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._static_2,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u
s(A,"j7","hJ",3)
s(A,"j8","hK",3)
s(A,"j9","hL",3)
r(A,"fB","j2",0)
s(A,"ja","iU",5)
q(A,"jc","iW",6)
r(A,"jb","iV",0)
p(A.l.prototype,"gb9","bV",6)
o(A.bd.prototype,"gc5","c6",0)
s(A,"fD","hU",8)
var n
o(n=A.c7.prototype,"gaN","a5",0)
o(n,"gaL","a3",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.d,null)
q(A.d,[A.ed,J.bM,A.b2,J.bE,A.j,A.a5,A.cQ,A.F,A.am,A.cb,A.bJ,A.aK,A.aH,A.aw,A.bI,A.dd,A.cI,A.aG,A.bm,A.aU,A.cF,A.bS,A.bR,A.cD,A.dL,A.dt,A.J,A.cl,A.cr,A.bo,A.cc,A.E,A.au,A.cg,A.cf,A.Y,A.l,A.cd,A.cj,A.cm,A.bd,A.cp,A.dg,A.b3,A.dK,A.av,A.n,A.q,A.cs,A.aD,A.dv,A.c2,A.b4,A.dw,A.cy,A.bL,A.aV,A.z,A.cq,A.c8,A.dI,A.a4,A.cK,A.al,A.an,A.aq,A.c7,A.cX,A.cA,A.c1])
q(J.bM,[J.bO,J.aM,J.aO,J.aN,J.aP,J.ak,J.a7])
q(J.aO,[J.W,J.p,A.ao,A.aY])
q(J.W,[J.c3,J.ab,J.V])
r(J.bN,A.b2)
r(J.cE,J.p)
q(J.ak,[J.aL,J.bP])
q(A.j,[A.aR,A.S,A.bQ,A.ca,A.c6,A.ck,A.bF,A.M,A.b5,A.c9,A.aa,A.bH])
q(A.a5,[A.cv,A.cw,A.cW,A.e_,A.e1,A.dm,A.dl,A.dR,A.dG,A.cU,A.cT,A.dk,A.dj,A.ds,A.db,A.da,A.d1,A.d2,A.d3,A.d4,A.d5,A.d6,A.d7,A.d8,A.cB])
q(A.cv,[A.e4,A.dn,A.dp,A.dO,A.dN,A.cz,A.dx,A.dC,A.dB,A.dz,A.dy,A.dF,A.dE,A.dD,A.cV,A.cS,A.dM,A.dT,A.di,A.dh,A.dU,A.cM,A.cN,A.cO,A.cP,A.d9,A.d_,A.d0])
q(A.F,[A.aE,A.b7,A.aJ])
q(A.aE,[A.R,A.aF,A.aT,A.aS])
q(A.R,[A.b1,A.be])
r(A.cn,A.aw)
q(A.cn,[A.m,A.co])
r(A.aI,A.bI)
r(A.b_,A.S)
q(A.cW,[A.cR,A.aC])
r(A.a8,A.aU)
r(A.aQ,A.a8)
q(A.cw,[A.e0,A.dS,A.dV,A.dH,A.cG,A.dr,A.cL])
q(A.aY,[A.bT,A.ap])
q(A.ap,[A.bg,A.bi])
r(A.bh,A.bg)
r(A.aW,A.bh)
r(A.bj,A.bi)
r(A.aX,A.bj)
q(A.aW,[A.bU,A.bV])
q(A.aX,[A.bW,A.bX,A.bY,A.bZ,A.c_,A.aZ,A.c0])
r(A.bp,A.ck)
r(A.bn,A.au)
r(A.bc,A.bn)
r(A.G,A.bc)
r(A.ch,A.cg)
r(A.bb,A.ch)
r(A.b8,A.cf)
r(A.ci,A.cj)
r(A.bl,A.b3)
r(A.bf,A.bl)
q(A.M,[A.as,A.bK])
r(A.cY,A.cK)
q(A.dv,[A.cH,A.at,A.I,A.a9,A.b0])
s(A.bg,A.n)
s(A.bh,A.aH)
s(A.bi,A.n)
s(A.bj,A.aH)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{b:"int",x:"double",fI:"num",A:"String",dW:"bool",z:"Null",h:"List",d:"Object",jE:"Map",k:"JSObject"},mangledNames:{},types:["~()","z()","z(k)","~(~())","z(@)","~(@)","~(d,K)","b(b,b)","b(b)","Q<~>()","@(@)","@(@,A)","@(A)","z(~())","z(@,K)","~(b,@)","z(d,K)","~(d?,d?)","an(k)","al(k)","A()","~(dc)","dW(A)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.m&&a.b(c.a)&&b.b(c.b),"2;black,white":(a,b)=>c=>c instanceof A.co&&a.b(c.a)&&b.b(c.b)}}
A.ib(v.typeUniverse,JSON.parse('{"c3":"W","ab":"W","V":"W","jF":"ao","bO":{"f":[]},"aM":{"f":[]},"aO":{"k":[]},"W":{"k":[]},"p":{"h":["1"],"k":[]},"bN":{"b2":[]},"cE":{"p":["1"],"h":["1"],"k":[]},"ak":{"x":[]},"aL":{"x":[],"b":[],"f":[]},"bP":{"x":[],"f":[]},"a7":{"A":[],"f":[]},"aR":{"j":[]},"aE":{"F":["1"]},"R":{"F":["1"]},"b7":{"F":["1"]},"aF":{"F":["1"]},"aJ":{"F":["+(b,1)"]},"b1":{"R":["1"],"F":["1"],"R.E":"1"},"aI":{"bI":["1","2"]},"b_":{"S":[],"j":[]},"bQ":{"j":[]},"ca":{"j":[]},"bm":{"K":[]},"c6":{"j":[]},"a8":{"aU":["1","2"]},"aT":{"F":["1"]},"aS":{"F":["aV<1,2>"]},"aQ":{"a8":["1","2"],"aU":["1","2"]},"ao":{"k":[],"f":[]},"aY":{"k":[]},"bT":{"k":[],"f":[]},"ap":{"B":["1"],"k":[]},"aW":{"n":["x"],"h":["x"],"B":["x"],"k":[]},"aX":{"n":["b"],"h":["b"],"B":["b"],"k":[]},"bU":{"n":["x"],"h":["x"],"B":["x"],"k":[],"f":[],"n.E":"x"},"bV":{"n":["x"],"h":["x"],"B":["x"],"k":[],"f":[],"n.E":"x"},"bW":{"n":["b"],"h":["b"],"B":["b"],"k":[],"f":[],"n.E":"b"},"bX":{"n":["b"],"h":["b"],"B":["b"],"k":[],"f":[],"n.E":"b"},"bY":{"n":["b"],"h":["b"],"B":["b"],"k":[],"f":[],"n.E":"b"},"bZ":{"n":["b"],"h":["b"],"B":["b"],"k":[],"f":[],"n.E":"b"},"c_":{"df":[],"n":["b"],"h":["b"],"B":["b"],"k":[],"f":[],"n.E":"b"},"aZ":{"n":["b"],"h":["b"],"B":["b"],"k":[],"f":[],"n.E":"b"},"c0":{"n":["b"],"h":["b"],"B":["b"],"k":[],"f":[],"n.E":"b"},"ck":{"j":[]},"bp":{"S":[],"j":[]},"bo":{"dc":[]},"E":{"j":[]},"G":{"au":["1"]},"b8":{"cf":["1"]},"l":{"Q":["1"]},"bc":{"au":["1"]},"bn":{"au":["1"]},"bf":{"b3":["1"]},"bl":{"b3":["1"]},"bF":{"j":[]},"S":{"j":[]},"M":{"j":[]},"as":{"j":[]},"bK":{"j":[]},"b5":{"j":[]},"c9":{"j":[]},"aa":{"j":[]},"bH":{"j":[]},"c2":{"j":[]},"b4":{"j":[]},"bL":{"j":[]},"be":{"R":["1"],"F":["1"],"R.E":"1"},"cq":{"K":[]},"hl":{"h":["b"]},"hH":{"h":["b"]},"hG":{"h":["b"]},"hj":{"h":["b"]},"hF":{"h":["b"]},"hk":{"h":["b"]},"df":{"h":["b"]},"hg":{"h":["x"]},"hh":{"h":["x"]}}'))
A.ia(v.typeUniverse,JSON.parse('{"aE":1,"cb":1,"bJ":1,"aK":1,"aH":1,"bS":1,"ap":1,"bc":1,"ch":1,"cg":1,"bn":1,"cj":1,"ci":1,"cm":1,"bd":1,"cp":1,"bl":1,"cs":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.cu
return{o:s("a4"),Q:s("j"),Z:s("jC"),V:s("p<a4>"),G:s("p<h<a4>>"),f:s("p<d>"),w:s("p<+(b,b)>"),s:s("p<A>"),x:s("p<df>"),b:s("p<@>"),t:s("p<b>"),T:s("aM"),m:s("k"),g:s("V"),E:s("B<@>"),W:s("al"),j:s("h<@>"),A:s("a9"),q:s("an"),P:s("z"),K:s("d"),h:s("b0"),L:s("jH"),F:s("+()"),R:s("+(b,b)"),r:s("b1<A>"),l:s("K"),N:s("A"),p:s("dc"),B:s("f"),_:s("S"),J:s("ab"),U:s("b7<A>"),c:s("l<@>"),a:s("l<b>"),D:s("l<~>"),y:s("dW"),i:s("x"),z:s("@"),v:s("@(d)"),C:s("@(d,K)"),S:s("b"),O:s("Q<z>?"),M:s("k?"),X:s("d?"),Y:s("A?"),u:s("dW?"),I:s("x?"),d:s("b?"),e:s("fI?"),n:s("fI"),H:s("~"),bo:s("~(d)"),k:s("~(d,K)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.N=J.bM.prototype
B.h=J.p.prototype
B.a=J.aL.prototype
B.n=J.ak.prototype
B.o=J.a7.prototype
B.O=J.V.prototype
B.P=J.aO.prototype
B.r=J.c3.prototype
B.j=J.ab.prototype
B.u=new A.bJ()
B.v=new A.bL()
B.k=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.w=function() {
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
B.B=function(getTagFallback) {
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
B.x=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.A=function(hooks) {
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
B.z=function(hooks) {
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
B.y=function(hooks) {
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
B.l=function(hooks) { return hooks; }

B.C=new A.c2()
B.e=new A.cQ()
B.b=new A.dg()
B.D=new A.dI()
B.E=new A.cq()
B.m=new A.aD(0)
B.F=new A.I(0,"n")
B.G=new A.I(1,"e")
B.H=new A.I(2,"s")
B.I=new A.I(3,"w")
B.J=new A.I(4,"ne")
B.K=new A.I(5,"nw")
B.L=new A.I(6,"se")
B.M=new A.I(7,"sw")
B.p=s([B.F,B.G,B.H,B.I,B.J,B.K,B.L,B.M],A.cu("p<I>"))
B.de=s([126,129,165,129,189,153,129,126],t.t)
B.ag=s([126,255,219,255,195,231,255,126],t.t)
B.dL=s([108,254,254,254,124,56,16,0],t.t)
B.cb=s([16,56,124,254,124,56,16,0],t.t)
B.b9=s([56,124,56,254,254,124,56,124],t.t)
B.bl=s([16,16,56,124,254,124,56,124],t.t)
B.aE=s([0,0,24,60,60,24,0,0],t.t)
B.aH=s([255,255,231,195,195,231,255,255],t.t)
B.aT=s([0,60,102,66,66,102,60,0],t.t)
B.cZ=s([255,195,153,189,189,153,195,255],t.t)
B.dK=s([15,7,15,125,204,204,204,120],t.t)
B.dJ=s([60,102,102,102,60,24,126,24],t.t)
B.cW=s([63,51,63,48,48,112,240,224],t.t)
B.a_=s([127,99,127,99,99,103,230,192],t.t)
B.a4=s([153,90,60,231,231,60,90,153],t.t)
B.aB=s([128,224,248,254,248,224,128,0],t.t)
B.bH=s([2,14,62,254,62,14,2,0],t.t)
B.cp=s([24,60,126,24,24,126,60,24],t.t)
B.cl=s([102,102,102,102,102,0,102,0],t.t)
B.cv=s([127,219,219,123,27,27,27,0],t.t)
B.cw=s([62,99,56,108,108,56,204,120],t.t)
B.bV=s([0,0,0,0,126,126,126,0],t.t)
B.bY=s([24,60,126,24,126,60,24,255],t.t)
B.V=s([24,60,126,24,24,24,24,0],t.t)
B.dj=s([24,24,24,24,126,60,24,0],t.t)
B.dc=s([0,24,12,254,12,24,0,0],t.t)
B.ay=s([0,48,96,254,96,48,0,0],t.t)
B.c2=s([0,0,192,192,192,254,0,0],t.t)
B.bA=s([0,36,102,255,102,36,0,0],t.t)
B.ae=s([0,24,60,126,255,255,0,0],t.t)
B.bZ=s([0,255,255,126,60,24,0,0],t.t)
B.b4=s([0,0,0,0,0,0,0,0],t.t)
B.bI=s([48,120,120,48,48,0,48,0],t.t)
B.a2=s([108,108,108,0,0,0,0,0],t.t)
B.as=s([108,108,254,108,254,108,108,0],t.t)
B.c6=s([48,124,192,120,12,248,48,0],t.t)
B.U=s([0,198,204,24,48,102,198,0],t.t)
B.cI=s([56,108,56,118,220,204,118,0],t.t)
B.ar=s([96,96,192,0,0,0,0,0],t.t)
B.Z=s([24,48,96,96,96,48,24,0],t.t)
B.bE=s([96,48,24,24,24,48,96,0],t.t)
B.cz=s([0,102,60,255,60,102,0,0],t.t)
B.dS=s([0,48,48,252,48,48,0,0],t.t)
B.c8=s([0,0,0,0,0,48,48,96],t.t)
B.bz=s([0,0,0,252,0,0,0,0],t.t)
B.cn=s([0,0,0,0,0,48,48,0],t.t)
B.a9=s([6,12,24,48,96,192,128,0],t.t)
B.bc=s([124,198,206,222,246,230,124,0],t.t)
B.cq=s([48,112,48,48,48,48,252,0],t.t)
B.c4=s([120,204,12,56,96,204,252,0],t.t)
B.dN=s([120,204,12,56,12,204,120,0],t.t)
B.bG=s([28,60,108,204,254,12,30,0],t.t)
B.dd=s([252,192,248,12,12,204,120,0],t.t)
B.dv=s([56,96,192,248,204,204,120,0],t.t)
B.c5=s([252,204,12,24,48,48,48,0],t.t)
B.cC=s([120,204,204,120,204,204,120,0],t.t)
B.bj=s([120,204,204,124,12,24,112,0],t.t)
B.d6=s([0,48,48,0,0,48,48,0],t.t)
B.aW=s([0,48,48,0,0,48,48,96],t.t)
B.bF=s([24,48,96,192,96,48,24,0],t.t)
B.bu=s([0,0,252,0,0,252,0,0],t.t)
B.aG=s([96,48,24,12,24,48,96,0],t.t)
B.aw=s([120,204,12,24,48,0,48,0],t.t)
B.dr=s([124,198,222,222,222,192,120,0],t.t)
B.ch=s([48,120,204,204,252,204,204,0],t.t)
B.aQ=s([252,102,102,124,102,102,252,0],t.t)
B.ai=s([60,102,192,192,192,102,60,0],t.t)
B.aa=s([248,108,102,102,102,108,248,0],t.t)
B.ao=s([254,98,104,120,104,98,254,0],t.t)
B.ct=s([254,98,104,120,104,96,240,0],t.t)
B.au=s([60,102,192,192,206,102,62,0],t.t)
B.ax=s([204,204,204,252,204,204,204,0],t.t)
B.cR=s([120,48,48,48,48,48,120,0],t.t)
B.bT=s([30,12,12,12,204,204,120,0],t.t)
B.bL=s([230,102,108,120,108,102,230,0],t.t)
B.bK=s([240,96,96,96,98,102,254,0],t.t)
B.aR=s([198,238,254,254,214,198,198,0],t.t)
B.a1=s([198,230,246,222,206,198,198,0],t.t)
B.d0=s([56,108,198,198,198,108,56,0],t.t)
B.bp=s([252,102,102,124,96,96,240,0],t.t)
B.cL=s([120,204,204,204,220,120,28,0],t.t)
B.T=s([252,102,102,124,108,102,230,0],t.t)
B.al=s([120,204,224,112,28,204,120,0],t.t)
B.dE=s([252,180,48,48,48,48,120,0],t.t)
B.aO=s([204,204,204,204,204,204,252,0],t.t)
B.a6=s([204,204,204,204,204,120,48,0],t.t)
B.cU=s([198,198,198,214,254,238,198,0],t.t)
B.cO=s([198,198,108,56,56,108,198,0],t.t)
B.a8=s([204,204,204,120,48,48,120,0],t.t)
B.X=s([254,198,140,24,50,102,254,0],t.t)
B.bB=s([120,96,96,96,96,96,120,0],t.t)
B.cG=s([192,96,48,24,12,6,2,0],t.t)
B.bD=s([120,24,24,24,24,24,120,0],t.t)
B.du=s([16,56,108,198,0,0,0,0],t.t)
B.S=s([0,0,0,0,0,0,0,255],t.t)
B.aP=s([48,48,24,0,0,0,0,0],t.t)
B.dk=s([0,0,120,12,124,204,118,0],t.t)
B.ck=s([224,96,96,124,102,102,220,0],t.t)
B.cN=s([0,0,120,204,192,204,120,0],t.t)
B.ba=s([28,12,12,124,204,204,118,0],t.t)
B.dx=s([0,0,120,204,252,192,120,0],t.t)
B.aU=s([56,108,96,240,96,96,240,0],t.t)
B.cK=s([0,0,118,204,204,124,12,248],t.t)
B.aF=s([224,96,108,118,102,102,230,0],t.t)
B.cA=s([48,0,112,48,48,48,120,0],t.t)
B.bO=s([12,0,12,12,12,204,204,120],t.t)
B.bh=s([224,96,102,108,120,108,230,0],t.t)
B.bQ=s([112,48,48,48,48,48,120,0],t.t)
B.by=s([0,0,204,254,254,214,198,0],t.t)
B.bR=s([0,0,248,204,204,204,204,0],t.t)
B.bk=s([0,0,120,204,204,204,120,0],t.t)
B.dB=s([0,0,220,102,102,124,96,240],t.t)
B.dy=s([0,0,118,204,204,124,12,30],t.t)
B.bv=s([0,0,220,118,102,96,240,0],t.t)
B.d3=s([0,0,124,192,120,12,248,0],t.t)
B.cX=s([16,48,124,48,48,52,24,0],t.t)
B.ce=s([0,0,204,204,204,204,118,0],t.t)
B.b8=s([0,0,204,204,204,120,48,0],t.t)
B.bo=s([0,0,198,214,254,254,108,0],t.t)
B.bM=s([0,0,198,108,56,108,198,0],t.t)
B.dH=s([0,0,204,204,204,124,12,248],t.t)
B.di=s([0,0,252,152,48,100,252,0],t.t)
B.be=s([28,48,48,224,48,48,28,0],t.t)
B.d2=s([24,24,24,0,24,24,24,0],t.t)
B.aJ=s([224,48,48,28,48,48,224,0],t.t)
B.dR=s([118,220,0,0,0,0,0,0],t.t)
B.b7=s([0,16,56,108,198,198,254,0],t.t)
B.aA=s([120,204,192,204,120,24,12,120],t.t)
B.dg=s([0,204,0,204,204,204,126,0],t.t)
B.dG=s([28,0,120,204,252,192,120,0],t.t)
B.c7=s([126,195,60,6,62,102,63,0],t.t)
B.an=s([204,0,120,12,124,204,126,0],t.t)
B.bb=s([224,0,120,12,124,204,126,0],t.t)
B.ad=s([48,48,120,12,124,204,126,0],t.t)
B.br=s([0,0,120,192,192,120,12,56],t.t)
B.dq=s([126,195,60,102,126,96,60,0],t.t)
B.aS=s([204,0,120,204,252,192,120,0],t.t)
B.d4=s([224,0,120,204,252,192,120,0],t.t)
B.dh=s([204,0,112,48,48,48,120,0],t.t)
B.cV=s([124,198,56,24,24,24,60,0],t.t)
B.b3=s([224,0,112,48,48,48,120,0],t.t)
B.dM=s([198,56,108,198,254,198,198,0],t.t)
B.d1=s([48,48,0,120,204,252,204,0],t.t)
B.bJ=s([28,0,252,96,120,96,252,0],t.t)
B.dF=s([0,0,127,12,127,204,127,0],t.t)
B.aX=s([62,108,204,254,204,204,206,0],t.t)
B.dz=s([120,204,0,120,204,204,120,0],t.t)
B.aj=s([0,204,0,120,204,204,120,0],t.t)
B.dO=s([0,224,0,120,204,204,120,0],t.t)
B.aV=s([120,204,0,204,204,204,126,0],t.t)
B.cY=s([0,224,0,204,204,204,126,0],t.t)
B.aD=s([0,204,0,204,204,124,12,248],t.t)
B.ap=s([195,24,60,102,102,60,24,0],t.t)
B.da=s([204,0,204,204,204,204,120,0],t.t)
B.a3=s([24,24,126,192,192,126,24,24],t.t)
B.aM=s([56,108,100,240,96,230,252,0],t.t)
B.b5=s([204,204,120,252,48,252,48,48],t.t)
B.dl=s([248,204,204,250,198,207,198,199],t.t)
B.bU=s([14,27,24,60,24,24,216,112],t.t)
B.aI=s([28,0,120,12,124,204,126,0],t.t)
B.cj=s([56,0,112,48,48,48,120,0],t.t)
B.aL=s([0,28,0,120,204,204,120,0],t.t)
B.cD=s([0,28,0,204,204,204,126,0],t.t)
B.b0=s([0,248,0,248,204,204,204,0],t.t)
B.cT=s([252,0,204,236,252,220,204,0],t.t)
B.ak=s([60,108,108,62,0,126,0,0],t.t)
B.cg=s([56,108,108,56,0,124,0,0],t.t)
B.db=s([48,0,48,96,192,204,120,0],t.t)
B.b2=s([0,0,0,252,192,192,0,0],t.t)
B.aK=s([0,0,0,252,12,12,0,0],t.t)
B.d5=s([195,198,204,222,51,102,204,15],t.t)
B.aC=s([195,198,204,219,55,111,207,3],t.t)
B.bX=s([24,24,0,24,24,24,24,0],t.t)
B.bW=s([0,51,102,204,102,51,0,0],t.t)
B.bg=s([0,204,102,51,102,204,0,0],t.t)
B.cF=s([34,136,34,136,34,136,34,136],t.t)
B.dA=s([85,170,85,170,85,170,85,170],t.t)
B.bP=s([219,119,219,238,219,119,219,238],t.t)
B.b6=s([24,24,24,24,24,24,24,24],t.t)
B.b1=s([24,24,24,24,248,24,24,24],t.t)
B.c3=s([24,24,248,24,248,24,24,24],t.t)
B.dQ=s([54,54,54,54,246,54,54,54],t.t)
B.cr=s([0,0,0,0,254,54,54,54],t.t)
B.aY=s([0,0,248,24,248,24,24,24],t.t)
B.ah=s([54,54,246,6,246,54,54,54],t.t)
B.cx=s([54,54,54,54,54,54,54,54],t.t)
B.cf=s([0,0,254,6,246,54,54,54],t.t)
B.cB=s([54,54,246,6,254,0,0,0],t.t)
B.av=s([54,54,54,54,254,0,0,0],t.t)
B.a7=s([24,24,248,24,248,0,0,0],t.t)
B.ac=s([0,0,0,0,248,24,24,24],t.t)
B.a5=s([24,24,24,24,31,0,0,0],t.t)
B.c1=s([24,24,24,24,255,0,0,0],t.t)
B.bt=s([0,0,0,0,255,24,24,24],t.t)
B.d9=s([24,24,24,24,31,24,24,24],t.t)
B.c_=s([0,0,0,0,255,0,0,0],t.t)
B.cy=s([24,24,24,24,255,24,24,24],t.t)
B.cJ=s([24,24,31,24,31,24,24,24],t.t)
B.bi=s([54,54,54,54,55,54,54,54],t.t)
B.dw=s([54,54,55,48,63,0,0,0],t.t)
B.dp=s([0,0,63,48,55,54,54,54],t.t)
B.bN=s([54,54,247,0,255,0,0,0],t.t)
B.bC=s([0,0,255,0,247,54,54,54],t.t)
B.b_=s([54,54,55,48,55,54,54,54],t.t)
B.aZ=s([0,0,255,0,255,0,0,0],t.t)
B.dI=s([54,54,247,0,247,54,54,54],t.t)
B.cP=s([24,24,255,0,255,0,0,0],t.t)
B.Q=s([54,54,54,54,255,0,0,0],t.t)
B.dC=s([0,0,255,0,255,24,24,24],t.t)
B.c9=s([0,0,0,0,255,54,54,54],t.t)
B.cs=s([54,54,54,54,63,0,0,0],t.t)
B.bx=s([24,24,31,24,31,0,0,0],t.t)
B.cm=s([0,0,31,24,31,24,24,24],t.t)
B.cM=s([0,0,0,0,63,54,54,54],t.t)
B.cS=s([54,54,54,54,255,54,54,54],t.t)
B.bS=s([24,24,255,24,255,24,24,24],t.t)
B.dm=s([24,24,24,24,248,0,0,0],t.t)
B.bd=s([0,0,0,0,31,24,24,24],t.t)
B.ca=s([255,255,255,255,255,255,255,255],t.t)
B.cd=s([0,0,0,0,255,255,255,255],t.t)
B.bn=s([240,240,240,240,240,240,240,240],t.t)
B.cu=s([15,15,15,15,15,15,15,15],t.t)
B.d8=s([255,255,255,255,0,0,0,0],t.t)
B.dP=s([0,0,118,220,200,220,118,0],t.t)
B.ds=s([0,120,204,248,204,248,192,192],t.t)
B.at=s([0,252,204,192,192,192,192,0],t.t)
B.cc=s([0,254,108,108,108,108,108,0],t.t)
B.dn=s([252,204,96,48,96,204,252,0],t.t)
B.bq=s([0,0,126,216,216,216,112,0],t.t)
B.bw=s([0,102,102,102,102,124,96,192],t.t)
B.cH=s([0,118,220,24,24,24,24,0],t.t)
B.am=s([252,48,120,204,204,120,48,252],t.t)
B.aN=s([56,108,198,254,198,108,56,0],t.t)
B.aq=s([56,108,198,198,108,108,238,0],t.t)
B.R=s([28,48,24,124,204,204,120,0],t.t)
B.dD=s([0,0,126,219,219,126,0,0],t.t)
B.bs=s([6,12,126,219,219,126,96,192],t.t)
B.af=s([56,96,192,248,192,96,56,0],t.t)
B.co=s([120,204,204,204,204,204,204,0],t.t)
B.cQ=s([0,252,0,252,0,252,0,0],t.t)
B.ab=s([48,48,252,48,48,0,252,0],t.t)
B.bf=s([96,48,24,48,96,0,252,0],t.t)
B.d_=s([24,48,96,48,24,0,252,0],t.t)
B.bm=s([14,27,27,24,24,24,24,24],t.t)
B.df=s([24,24,24,24,24,216,216,112],t.t)
B.ci=s([48,48,0,252,0,48,48,0],t.t)
B.W=s([0,118,220,0,118,220,0,0],t.t)
B.cE=s([56,108,108,56,0,0,0,0],t.t)
B.Y=s([0,0,0,24,24,0,0,0],t.t)
B.dt=s([0,0,0,0,24,0,0,0],t.t)
B.a0=s([15,12,12,12,236,108,60,28],t.t)
B.c0=s([120,108,108,108,108,0,0,0],t.t)
B.az=s([112,24,48,96,120,0,0,0],t.t)
B.d7=s([0,0,60,60,60,60,0,0],t.t)
B.dT=new A.aI(["\u263a",B.de,"\u263b",B.ag,"\u2665",B.dL,"\u2666",B.cb,"\u2663",B.b9,"\u2660",B.bl,"\u2022",B.aE,"\u25d8",B.aH,"\u25cb",B.aT,"\u25d9",B.cZ,"\u2642",B.dK,"\u2640",B.dJ,"\u266a",B.cW,"\u266b",B.a_,"\u263c",B.a4,"\u25ba",B.aB,"\u25c4",B.bH,"\u2195",B.cp,"\u203c",B.cl,"\xb6",B.cv,"\xa7",B.cw,"\u25ac",B.bV,"\u21a8",B.bY,"\u2191",B.V,"\u2193",B.dj,"\u2192",B.dc,"\u2190",B.ay,"\u221f",B.c2,"\u2194",B.bA,"\u25b2",B.ae,"\u25bc",B.bZ," ",B.b4,"!",B.bI,'"',B.a2,"#",B.as,"$",B.c6,"%",B.U,"&",B.cI,"'",B.ar,"(",B.Z,")",B.bE,"*",B.cz,"+",B.dS,",",B.c8,"-",B.bz,".",B.cn,"/",B.a9,"0",B.bc,"1",B.cq,"2",B.c4,"3",B.dN,"4",B.bG,"5",B.dd,"6",B.dv,"7",B.c5,"8",B.cC,"9",B.bj,":",B.d6,";",B.aW,"<",B.bF,"=",B.bu,">",B.aG,"?",B.aw,"@",B.dr,"A",B.ch,"B",B.aQ,"C",B.ai,"D",B.aa,"E",B.ao,"F",B.ct,"G",B.au,"H",B.ax,"I",B.cR,"J",B.bT,"K",B.bL,"L",B.bK,"M",B.aR,"N",B.a1,"O",B.d0,"P",B.bp,"Q",B.cL,"R",B.T,"S",B.al,"T",B.dE,"U",B.aO,"V",B.a6,"W",B.cU,"X",B.cO,"Y",B.a8,"Z",B.X,"[",B.bB,"\\",B.cG,"]",B.bD,"^",B.du,"_",B.S,"`",B.aP,"a",B.dk,"b",B.ck,"c",B.cN,"d",B.ba,"e",B.dx,"f",B.aU,"g",B.cK,"h",B.aF,"i",B.cA,"j",B.bO,"k",B.bh,"l",B.bQ,"m",B.by,"n",B.bR,"o",B.bk,"p",B.dB,"q",B.dy,"r",B.bv,"s",B.d3,"t",B.cX,"u",B.ce,"v",B.b8,"w",B.bo,"x",B.bM,"y",B.dH,"z",B.di,"{",B.be,"|",B.d2,"}",B.aJ,"~",B.dR,"\u2302",B.b7,"\xc7",B.aA,"\xfc",B.dg,"\xe9",B.dG,"\xe2",B.c7,"\xe4",B.an,"\xe0",B.bb,"\xe5",B.ad,"\xe7",B.br,"\xea",B.dq,"\xeb",B.aS,"\xe8",B.d4,"\xef",B.dh,"\xee",B.cV,"\xec",B.b3,"\xc4",B.dM,"\xc5",B.d1,"\xc9",B.bJ,"\xe6",B.dF,"\xc6",B.aX,"\xf4",B.dz,"\xf6",B.aj,"\xf2",B.dO,"\xfb",B.aV,"\xf9",B.cY,"\xff",B.aD,"\xd6",B.ap,"\xdc",B.da,"\xa2",B.a3,"\xa3",B.aM,"\xa5",B.b5,"\u20a7",B.dl,"\u0192",B.bU,"\xe1",B.aI,"\xed",B.cj,"\xf3",B.aL,"\xfa",B.cD,"\xf1",B.b0,"\xd1",B.cT,"\xaa",B.ak,"\xba",B.cg,"\xbf",B.db,"\u2310",B.b2,"\xac",B.aK,"\xbd",B.d5,"\xbc",B.aC,"\xa1",B.bX,"\xab",B.bW,"\xbb",B.bg,"\u2591",B.cF,"\u2592",B.dA,"\u2593",B.bP,"\u2502",B.b6,"\u2524",B.b1,"\u2561",B.c3,"\u2562",B.dQ,"\u2556",B.cr,"\u2555",B.aY,"\u2563",B.ah,"\u2551",B.cx,"\u2557",B.cf,"\u255d",B.cB,"\u255c",B.av,"\u255b",B.a7,"\u2510",B.ac,"\u2514",B.a5,"\u2534",B.c1,"\u252c",B.bt,"\u251c",B.d9,"\u2500",B.c_,"\u253c",B.cy,"\u255e",B.cJ,"\u255f",B.bi,"\u255a",B.dw,"\u2554",B.dp,"\u2569",B.bN,"\u2566",B.bC,"\u2560",B.b_,"\u2550",B.aZ,"\u256c",B.dI,"\u2567",B.cP,"\u2568",B.Q,"\u2564",B.dC,"\u2565",B.c9,"\u2559",B.cs,"\u2558",B.bx,"\u2552",B.cm,"\u2553",B.cM,"\u256b",B.cS,"\u256a",B.bS,"\u2518",B.dm,"\u250c",B.bd,"\u2588",B.ca,"\u2584",B.cd,"\u258c",B.bn,"\u2590",B.cu,"\u2580",B.d8,"\u03b1",B.dP,"\xdf",B.ds,"\u0393",B.at,"\u03c0",B.cc,"\u03a3",B.dn,"\u03c3",B.bq,"\xb5",B.bw,"\u03c4",B.cH,"\u03a6",B.am,"\u0398",B.aN,"\u03a9",B.aq,"\u03b4",B.R,"\u221e",B.dD,"\u03c6",B.bs,"\u03b5",B.af,"\u2229",B.co,"\u2261",B.cQ,"\xb1",B.ab,"\u2265",B.bf,"\u2264",B.d_,"\u2320",B.bm,"\u2321",B.df,"\xf7",B.ci,"\u2248",B.W,"\xb0",B.cE,"\u2219",B.Y,"\xb7",B.dt,"\u221a",B.a0,"\u207f",B.c0,"\xb2",B.az,"\u25a0",B.d7],A.cu("aI<A,h<b>>"))
B.q=new A.cH(0,"replace")
B.dU=new A.a9(100,1,"medium")
B.dV=new A.a9(10,0,"easy")
B.dW=new A.a9(1500,3,"expert")
B.dX=new A.a9(500,2,"hard")
B.f=new A.b0(0,"cross")
B.d=new A.b0(1,"naught")
B.dY=new A.m(0,1)
B.dZ=new A.m(0,-1)
B.e_=new A.m(1,0)
B.e0=new A.m(1,1)
B.e1=new A.m(1,-1)
B.e2=new A.m(-1,0)
B.e3=new A.m(-1,1)
B.e4=new A.m(-1,-1)
B.c=new A.at(0,"ready")
B.i=new A.at(1,"awaitingKey")
B.e5=new A.at(2,"awaitingString")
B.t=new A.at(3,"awaitingMouseClick")
B.e6=A.L("jy")
B.e7=A.L("jz")
B.e8=A.L("hg")
B.e9=A.L("hh")
B.ea=A.L("hj")
B.eb=A.L("hk")
B.ec=A.L("hl")
B.ed=A.L("d")
B.ee=A.L("hF")
B.ef=A.L("df")
B.eg=A.L("hG")
B.eh=A.L("hH")})();(function staticFields(){$.dJ=null
$.D=A.w([],t.f)
$.f_=null
$.eR=null
$.eQ=null
$.fH=null
$.fA=null
$.fK=null
$.dX=null
$.e2=null
$.eE=null
$.bk=A.w([],A.cu("p<h<d>?>"))
$.ay=null
$.by=null
$.bz=null
$.ex=!1
$.e=B.b
$.f8=null
$.f9=null
$.fa=null
$.fb=null
$.el=A.du("_lastQuoRemDigits")
$.em=A.du("_lastQuoRemUsed")
$.ba=A.du("_lastRemUsed")
$.en=A.du("_lastRem_nsh")})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"jB","fO",()=>A.dZ("_$dart_dartClosure"))
s($,"jA","e6",()=>A.dZ("_$dart_dartClosure_dartJSInterop"))
s($,"k4","h3",()=>B.b.af(B.b,new A.e4()))
s($,"k2","h2",()=>A.w([new J.bN()],A.cu("p<b2>")))
s($,"jL","fR",()=>A.T(A.de({
toString:function(){return"$receiver$"}})))
s($,"jM","fS",()=>A.T(A.de({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"jN","fT",()=>A.T(A.de(null)))
s($,"jO","fU",()=>A.T(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"jR","fX",()=>A.T(A.de(void 0)))
s($,"jS","fY",()=>A.T(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"jQ","fW",()=>A.T(A.f5(null)))
s($,"jP","fV",()=>A.T(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"jU","h_",()=>A.T(A.f5(void 0)))
s($,"jT","fZ",()=>A.T(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"jV","eJ",()=>A.hI())
s($,"jD","e7",()=>$.h3())
s($,"k_","o",()=>A.b9(0))
s($,"jZ","u",()=>A.b9(1))
s($,"jX","eL",()=>$.u().J(0))
s($,"jW","eK",()=>A.b9(1e4))
r($,"jY","h0",()=>A.hz("^\\s*([+-]?)((0x[a-f0-9]+)|(\\d+)|([a-z0-9]+))\\s*$",!1))
s($,"k0","h1",()=>A.ie())
s($,"k1","e8",()=>A.eH(B.ed))
s($,"jK","fQ",()=>A.ef(8,0,t.S))
s($,"jJ","fP",()=>A.ef(8,255,t.S))
s($,"jG","eI",()=>{var q="FFFFFFFFFFFFFFFF",p=A.hS(q,16)
if(p==null)A.O(A.eV("Could not parse BigInt",q))
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.ao,SharedArrayBuffer:A.ao,ArrayBufferView:A.aY,DataView:A.bT,Float32Array:A.bU,Float64Array:A.bV,Int16Array:A.bW,Int32Array:A.bX,Int8Array:A.bY,Uint16Array:A.bZ,Uint32Array:A.c_,Uint8ClampedArray:A.aZ,CanvasPixelArray:A.aZ,Uint8Array:A.c0})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.ap.$nativeSuperclassTag="ArrayBufferView"
A.bg.$nativeSuperclassTag="ArrayBufferView"
A.bh.$nativeSuperclassTag="ArrayBufferView"
A.aW.$nativeSuperclassTag="ArrayBufferView"
A.bi.$nativeSuperclassTag="ArrayBufferView"
A.bj.$nativeSuperclassTag="ArrayBufferView"
A.aX.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.js
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=othello.js.map
