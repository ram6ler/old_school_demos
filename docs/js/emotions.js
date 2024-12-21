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
if(a[b]!==s){A.ih(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.dJ(b)
return new s(c,this)}:function(){if(s===null)s=A.dJ(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.dJ(a).prototype
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
dM(a,b,c,d){return{i:a,p:b,e:c,x:d}},
dK(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.dL==null){A.i5()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.b(A.ea("Return interceptor for "+A.p(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.cS
if(o==null)o=$.cS=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.ia(a)
if(p!=null)return p
if(typeof a=="function")return B.I
s=Object.getPrototypeOf(a)
if(s==null)return B.v
if(s===Object.prototype)return B.v
if(typeof q=="function"){o=$.cS
if(o==null)o=$.cS=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.l,enumerable:false,writable:true,configurable:true})
return B.l}return B.l},
fn(a,b){if(a>4294967295)throw A.b(A.fx(a,0,4294967295,"length",null))
return J.fo(new Array(a),b)},
fo(a,b){var s=A.a(a,b.i("o<0>"))
s.$flags=1
return s},
e_(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
fp(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.e_(r))break;++b}return b},
fq(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.d(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.e_(q))break}return b},
a3(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aq.prototype
return J.bg.prototype}if(typeof a=="string")return J.X.prototype
if(a==null)return J.ar.prototype
if(typeof a=="boolean")return J.bf.prototype
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.O.prototype
if(typeof a=="symbol")return J.au.prototype
if(typeof a=="bigint")return J.as.prototype
return a}if(a instanceof A.e)return a
return J.dK(a)},
eJ(a){if(typeof a=="string")return J.X.prototype
if(a==null)return a
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.O.prototype
if(typeof a=="symbol")return J.au.prototype
if(typeof a=="bigint")return J.as.prototype
return a}if(a instanceof A.e)return a
return J.dK(a)},
hY(a){if(a==null)return a
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.O.prototype
if(typeof a=="symbol")return J.au.prototype
if(typeof a=="bigint")return J.as.prototype
return a}if(a instanceof A.e)return a
return J.dK(a)},
hZ(a){if(typeof a=="number")return J.a4.prototype
if(a==null)return a
if(!(a instanceof A.e))return J.Z.prototype
return a},
i_(a){if(typeof a=="string")return J.X.prototype
if(a==null)return a
if(!(a instanceof A.e))return J.Z.prototype
return a},
al(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.a3(a).v(a,b)},
E(a){return J.a3(a).gj(a)},
dQ(a){return J.hY(a).gaj(a)},
dR(a){return J.eJ(a).gn(a)},
f4(a){return J.a3(a).gl(a)},
dS(a){return J.hZ(a).bL(a)},
b4(a){return J.a3(a).h(a)},
f5(a){return J.i_(a).bM(a)},
be:function be(){},
bf:function bf(){},
ar:function ar(){},
at:function at(){},
P:function P(){},
bv:function bv(){},
Z:function Z(){},
O:function O(){},
as:function as(){},
au:function au(){},
o:function o(a){this.$ti=a},
c1:function c1(a){this.$ti=a},
b5:function b5(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
a4:function a4(){},
aq:function aq(){},
bg:function bg(){},
X:function X(){}},A={dn:function dn(){},
Q(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
dw(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
e7(a,b,c,d,e){return A.dw(A.Q(A.Q(A.Q(A.Q(e,a),b),c),d))},
dI(a,b,c){return a},
eM(a){var s,r
for(s=$.L.length,r=0;r<s;++r)if(a===$.L[r])return!0
return!1},
fm(){return new A.Y("No element")},
bi:function bi(a){this.a=a},
dd:function dd(){},
cc:function cc(){},
bj:function bj(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ap:function ap(){},
eR(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
iV(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
p(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.b4(a)
return s},
a9(a){var s,r=$.e1
if(r==null)r=$.e1=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
c6(a){return A.fu(a)},
fu(a){var s,r,q,p
if(a instanceof A.e)return A.u(A.b1(a),null)
s=J.a3(a)
if(s===B.G||s===B.J||t.B.b(a)){r=B.m(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.u(A.b1(a),null)},
e2(a){if(a==null||typeof a=="number"||A.dE(a))return J.b4(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.W)return a.h(0)
if(a instanceof A.ag)return a.aM(!0)
return"Instance of '"+A.c6(a)+"'"},
fv(a){var s=a.$thrownJsError
if(s==null)return null
return A.D(s)},
d(a,b){if(a==null)J.dR(a)
throw A.b(A.eH(a,b))},
eH(a,b){var s,r="index"
if(!A.ew(b))return new A.x(!0,b,r,null)
s=J.dR(a)
if(b<0||b>=s)return A.fi(b,s,a,r)
return A.e3(b,r)},
dH(a){return new A.x(!0,a,null,null)},
b(a){return A.eL(new Error(),a)},
eL(a,b){var s
if(b==null)b=new A.G()
a.dartException=b
s=A.ii
if("defineProperty" in Object){Object.defineProperty(a,"message",{get:s})
a.name=""}else a.toString=s
return a},
ii(){return J.b4(this.dartException)},
de(a){throw A.b(a)},
eQ(a,b){throw A.eL(b,a)},
b3(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.eQ(A.hg(a,b,c),s)},
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
return new A.aF("'"+s+"': Cannot "+o+" "+l+k+n)},
eP(a){throw A.b(A.b9(a))},
H(a){var s,r,q,p,o,n
a=A.id(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.a([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.ct(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
cu(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
e9(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
dp(a,b){var s=b==null,r=s?null:b.method
return new A.bh(a,r,s?null:b.receiver)},
M(a){if(a==null)return new A.c4(a)
if(a instanceof A.ao)return A.U(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.U(a,a.dartException)
return A.hL(a)},
U(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
hL(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.a.bt(r,16)&8191)===10)switch(q){case 438:return A.U(a,A.dp(A.p(s)+" (Error "+q+")",null))
case 445:case 5007:A.p(s)
return A.U(a,new A.aC())}}if(a instanceof TypeError){p=$.eU()
o=$.eV()
n=$.eW()
m=$.eX()
l=$.f_()
k=$.f0()
j=$.eZ()
$.eY()
i=$.f2()
h=$.f1()
g=p.u(s)
if(g!=null)return A.U(a,A.dp(s,g))
else{g=o.u(s)
if(g!=null){g.method="call"
return A.U(a,A.dp(s,g))}else if(n.u(s)!=null||m.u(s)!=null||l.u(s)!=null||k.u(s)!=null||j.u(s)!=null||m.u(s)!=null||i.u(s)!=null||h.u(s)!=null)return A.U(a,new A.aC())}return A.U(a,new A.bA(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.aE()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.U(a,new A.x(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.aE()
return a},
D(a){var s
if(a instanceof A.ao)return a.b
if(a==null)return new A.aS(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.aS(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
dN(a){if(a==null)return J.E(a)
if(typeof a=="object")return A.a9(a)
return J.E(a)},
hT(a){if(typeof a=="number")return B.H.gj(a)
if(a instanceof A.bR)return A.a9(a)
if(a instanceof A.ag)return a.gj(a)
return A.dN(a)},
hX(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=a.length
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
if(m==null)o[q]=b.M(q,p)
else m.b=p}else if(typeof q=="number"&&(q&0x3fffffff)===q){l=b.c
if(l==null){n=Object.create(null)
n["<non-identifier-key>"]=n
delete n["<non-identifier-key>"]
b.c=n
l=n}m=l[q]
if(m==null)l[q]=b.M(q,p)
else m.b=p}else{k=b.d
if(k==null){n=Object.create(null)
n["<non-identifier-key>"]=n
delete n["<non-identifier-key>"]
b.d=n
k=n}j=b.ag(q)
i=k[j]
if(i==null)k[j]=[b.M(q,p)]
else{r=b.ah(i,q)
if(r>=0)i[r].b=p
else i.push(b.M(q,p))}}}return b},
hp(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.b(A.dl("Unsupported number of arguments for wrapped closure"))},
bV(a,b){var s=a.$identity
if(!!s)return s
s=A.hU(a,b)
a.$identity=s
return s},
hU(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.hp)},
fd(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.cd().constructor.prototype):Object.create(new A.an(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.dY(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.f9(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.dY(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
f9(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.f7)}throw A.b("Error in functionType of tearoff")},
fa(a,b,c,d){var s=A.dX
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
dY(a,b,c,d){if(c)return A.fc(a,b,d)
return A.fa(b.length,d,a,b)},
fb(a,b,c,d){var s=A.dX,r=A.f8
switch(b?-1:a){case 0:throw A.b(new A.bw("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
fc(a,b,c){var s,r
if($.dV==null)$.dV=A.dU("interceptor")
if($.dW==null)$.dW=A.dU("receiver")
s=b.length
r=A.fb(s,c,a,b)
return r},
dJ(a){return A.fd(a)},
f7(a,b){return A.aZ(v.typeUniverse,A.b1(a.a),b)},
dX(a){return a.a},
f8(a){return a.b},
dU(a){var s,r,q,p=new A.an("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.b(A.am("Field name "+a+" not found.",null))},
iZ(a){throw A.b(new A.bG(a))},
i0(a){return v.getIsolateTag(a)},
ig(){return self},
ia(a){var s,r,q,p,o,n=$.eK.$1(a),m=$.d6[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.db[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.eE.$2(a,n)
if(q!=null){m=$.d6[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.db[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.dc(s)
$.d6[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.db[n]=s
return s}if(p==="-"){o=A.dc(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.eN(a,s)
if(p==="*")throw A.b(A.ea(n))
if(v.leafTags[n]===true){o=A.dc(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.eN(a,s)},
eN(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.dM(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
dc(a){return J.dM(a,!1,null,!!a.$iv)},
ib(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.dc(s)
else return J.dM(s,c,null,null)},
i5(){if(!0===$.dL)return
$.dL=!0
A.i6()},
i6(){var s,r,q,p,o,n,m,l
$.d6=Object.create(null)
$.db=Object.create(null)
A.i4()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.eO.$1(o)
if(n!=null){m=A.ib(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
i4(){var s,r,q,p,o,n,m=B.x()
m=A.ak(B.y,A.ak(B.z,A.ak(B.n,A.ak(B.n,A.ak(B.A,A.ak(B.B,A.ak(B.C(B.m),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.eK=new A.d8(p)
$.eE=new A.d9(o)
$.eO=new A.da(n)},
ak(a,b){return a(b)||b},
hV(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
id(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
z:function z(a,b){this.a=a
this.b=b},
ba:function ba(){},
bc:function bc(a,b){this.a=a
this.$ti=b},
ct:function ct(a,b,c,d,e,f){var _=this
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
bA:function bA(a){this.a=a},
c4:function c4(a){this.a=a},
ao:function ao(a,b){this.a=a
this.b=b},
aS:function aS(a){this.a=a
this.b=null},
W:function W(){},
bZ:function bZ(){},
c_:function c_(){},
ci:function ci(){},
cd:function cd(){},
an:function an(a,b){this.a=a
this.b=b},
bG:function bG(a){this.a=a},
bw:function bw(a){this.a=a},
aw:function aw(){},
c2:function c2(a,b){this.a=a
this.b=b
this.c=null},
av:function av(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
d8:function d8(a){this.a=a},
d9:function d9(a){this.a=a},
da:function da(a){this.a=a},
ag:function ag(){},
bN:function bN(){},
a0(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.eH(b,a))},
bk:function bk(){},
aA:function aA(){},
bl:function bl(){},
a7:function a7(){},
ay:function ay(){},
az:function az(){},
bm:function bm(){},
bn:function bn(){},
bo:function bo(){},
bp:function bp(){},
bq:function bq(){},
br:function br(){},
bs:function bs(){},
aB:function aB(){},
bt:function bt(){},
aM:function aM(){},
aN:function aN(){},
aO:function aO(){},
aP:function aP(){},
e4(a,b){var s=b.c
return s==null?b.c=A.dB(a,b.x,!0):s},
dt(a,b){var s=b.c
return s==null?b.c=A.aX(a,"F",[b.x]):s},
e5(a){var s=a.w
if(s===6||s===7||s===8)return A.e5(a.x)
return s===12||s===13},
fy(a){return a.as},
d7(a){return A.bS(v.typeUniverse,a,!1)},
T(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.T(a1,s,a3,a4)
if(r===s)return a2
return A.el(a1,r,!0)
case 7:s=a2.x
r=A.T(a1,s,a3,a4)
if(r===s)return a2
return A.dB(a1,r,!0)
case 8:s=a2.x
r=A.T(a1,s,a3,a4)
if(r===s)return a2
return A.ej(a1,r,!0)
case 9:q=a2.y
p=A.aj(a1,q,a3,a4)
if(p===q)return a2
return A.aX(a1,a2.x,p)
case 10:o=a2.x
n=A.T(a1,o,a3,a4)
m=a2.y
l=A.aj(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.dz(a1,n,l)
case 11:k=a2.x
j=a2.y
i=A.aj(a1,j,a3,a4)
if(i===j)return a2
return A.ek(a1,k,i)
case 12:h=a2.x
g=A.T(a1,h,a3,a4)
f=a2.y
e=A.hI(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.ei(a1,g,e)
case 13:d=a2.y
a4+=d.length
c=A.aj(a1,d,a3,a4)
o=a2.x
n=A.T(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.dA(a1,n,c,!0)
case 14:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.b(A.b7("Attempted to substitute unexpected RTI kind "+a0))}},
aj(a,b,c,d){var s,r,q,p,o=b.length,n=A.d_(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.T(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
hJ(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.d_(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.T(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
hI(a,b,c,d){var s,r=b.a,q=A.aj(a,r,c,d),p=b.b,o=A.aj(a,p,c,d),n=b.c,m=A.hJ(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.bL()
s.a=q
s.b=o
s.c=m
return s},
a(a,b){a[v.arrayRti]=b
return a},
eG(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.i3(s)
return a.$S()}return null},
i7(a,b){var s
if(A.e5(b))if(a instanceof A.W){s=A.eG(a)
if(s!=null)return s}return A.b1(a)},
b1(a){if(a instanceof A.e)return A.a1(a)
if(Array.isArray(a))return A.dC(a)
return A.dD(J.a3(a))},
dC(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
a1(a){var s=a.$ti
return s!=null?s:A.dD(a)},
dD(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.hn(a,s)},
hn(a,b){var s=a instanceof A.W?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.h4(v.typeUniverse,s.name)
b.$ccache=r
return r},
i3(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.bS(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
i2(a){return A.a2(A.a1(a))},
dG(a){var s
if(a instanceof A.ag)return A.hW(a.$r,a.aE())
s=a instanceof A.W?A.eG(a):null
if(s!=null)return s
if(t.R.b(a))return J.f4(a).a
if(Array.isArray(a))return A.dC(a)
return A.b1(a)},
a2(a){var s=a.r
return s==null?a.r=A.eq(a):s},
eq(a){var s,r,q=a.as,p=q.replace(/\*/g,"")
if(p===q)return a.r=new A.bR(a)
s=A.bS(v.typeUniverse,p,!0)
r=s.r
return r==null?s.r=A.eq(s):r},
hW(a,b){var s,r,q=b,p=q.length
if(p===0)return t.F
if(0>=p)return A.d(q,0)
s=A.aZ(v.typeUniverse,A.dG(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.d(q,r)
s=A.em(v.typeUniverse,s,A.dG(q[r]))}return A.aZ(v.typeUniverse,s,a)},
A(a){return A.a2(A.bS(v.typeUniverse,a,!1))},
hm(a){var s,r,q,p,o,n,m=this
if(m===t.K)return A.J(m,a,A.hu)
if(!A.K(m))s=m===t._
else s=!0
if(s)return A.J(m,a,A.hy)
s=m.w
if(s===7)return A.J(m,a,A.hk)
if(s===1)return A.J(m,a,A.ex)
r=s===6?m.x:m
q=r.w
if(q===8)return A.J(m,a,A.hq)
if(r===t.S)p=A.ew
else if(r===t.i||r===t.n)p=A.ht
else if(r===t.N)p=A.hw
else p=r===t.y?A.dE:null
if(p!=null)return A.J(m,a,p)
if(q===9){o=r.x
if(r.y.every(A.i8)){m.f="$i"+o
if(o==="i")return A.J(m,a,A.hs)
return A.J(m,a,A.hx)}}else if(q===11){n=A.hV(r.x,r.y)
return A.J(m,a,n==null?A.ex:n)}return A.J(m,a,A.hi)},
J(a,b,c){a.b=c
return a.b(b)},
hl(a){var s,r=this,q=A.hh
if(!A.K(r))s=r===t._
else s=!0
if(s)q=A.h7
else if(r===t.K)q=A.h6
else{s=A.b2(r)
if(s)q=A.hj}r.a=q
return r.a(a)},
bT(a){var s=a.w,r=!0
if(!A.K(a))if(!(a===t._))if(!(a===t.A))if(s!==7)if(!(s===6&&A.bT(a.x)))r=s===8&&A.bT(a.x)||a===t.P||a===t.T
return r},
hi(a){var s=this
if(a==null)return A.bT(s)
return A.i9(v.typeUniverse,A.i7(a,s),s)},
hk(a){if(a==null)return!0
return this.x.b(a)},
hx(a){var s,r=this
if(a==null)return A.bT(r)
s=r.f
if(a instanceof A.e)return!!a[s]
return!!J.a3(a)[s]},
hs(a){var s,r=this
if(a==null)return A.bT(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.e)return!!a[s]
return!!J.a3(a)[s]},
hh(a){var s=this
if(a==null){if(A.b2(s))return a}else if(s.b(a))return a
A.er(a,s)},
hj(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.er(a,s)},
er(a,b){throw A.b(A.fW(A.ec(a,A.u(b,null))))},
ec(a,b){return A.c0(a)+": type '"+A.u(A.dG(a),null)+"' is not a subtype of type '"+b+"'"},
fW(a){return new A.aV("TypeError: "+a)},
t(a,b){return new A.aV("TypeError: "+A.ec(a,b))},
hq(a){var s=this,r=s.w===6?s.x:s
return r.x.b(a)||A.dt(v.typeUniverse,r).b(a)},
hu(a){return a!=null},
h6(a){if(a!=null)return a
throw A.b(A.t(a,"Object"))},
hy(a){return!0},
h7(a){return a},
ex(a){return!1},
dE(a){return!0===a||!1===a},
iF(a){if(!0===a)return!0
if(!1===a)return!1
throw A.b(A.t(a,"bool"))},
iH(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b(A.t(a,"bool"))},
iG(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b(A.t(a,"bool?"))},
iI(a){if(typeof a=="number")return a
throw A.b(A.t(a,"double"))},
iK(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.t(a,"double"))},
iJ(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.t(a,"double?"))},
ew(a){return typeof a=="number"&&Math.floor(a)===a},
iL(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.b(A.t(a,"int"))},
iN(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b(A.t(a,"int"))},
iM(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b(A.t(a,"int?"))},
ht(a){return typeof a=="number"},
iO(a){if(typeof a=="number")return a
throw A.b(A.t(a,"num"))},
iQ(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.t(a,"num"))},
iP(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.t(a,"num?"))},
hw(a){return typeof a=="string"},
iR(a){if(typeof a=="string")return a
throw A.b(A.t(a,"String"))},
iT(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b(A.t(a,"String"))},
iS(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b(A.t(a,"String?"))},
eA(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.u(a[q],b)
return s},
hD(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.eA(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.u(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
es(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", ",a3=null
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
if(l===9){p=A.hK(a.x)
o=a.y
return o.length>0?p+("<"+A.eA(o,b)+">"):p}if(l===11)return A.hD(a,b)
if(l===12)return A.es(a,b,null)
if(l===13)return A.es(a.x,b,a.y)
if(l===14){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.d(b,n)
return b[n]}return"?"},
hK(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
h5(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
h4(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.bS(a,b,!1)
else if(typeof m=="number"){s=m
r=A.aY(a,5,"#")
q=A.d_(s)
for(p=0;p<s;++p)q[p]=r
o=A.aX(a,b,q)
n[b]=o
return o}else return m},
h3(a,b){return A.en(a.tR,b)},
h2(a,b){return A.en(a.eT,b)},
bS(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.eg(A.ee(a,null,b,c))
r.set(b,s)
return s},
aZ(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.eg(A.ee(a,b,c,!0))
q.set(c,r)
return r},
em(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.dz(a,b,c.w===10?c.y:[c])
p.set(s,q)
return q},
I(a,b){b.a=A.hl
b.b=A.hm
return b},
aY(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.w(null,null)
s.w=b
s.as=c
r=A.I(a,s)
a.eC.set(c,r)
return r},
el(a,b,c){var s,r=b.as+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.h0(a,b,r,c)
a.eC.set(r,s)
return s},
h0(a,b,c,d){var s,r,q
if(d){s=b.w
if(!A.K(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.w(null,null)
q.w=6
q.x=b
q.as=c
return A.I(a,q)},
dB(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.h_(a,b,r,c)
a.eC.set(r,s)
return s},
h_(a,b,c,d){var s,r,q,p
if(d){s=b.w
r=!0
if(!A.K(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.b2(b.x)
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.x
if(q.w===8&&A.b2(q.x))return q
else return A.e4(a,b)}}p=new A.w(null,null)
p.w=7
p.x=b
p.as=c
return A.I(a,p)},
ej(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.fY(a,b,r,c)
a.eC.set(r,s)
return s},
fY(a,b,c,d){var s,r
if(d){s=b.w
if(A.K(b)||b===t.K||b===t._)return b
else if(s===1)return A.aX(a,"F",[b])
else if(b===t.P||b===t.T)return t.O}r=new A.w(null,null)
r.w=8
r.x=b
r.as=c
return A.I(a,r)},
h1(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.w(null,null)
s.w=14
s.x=b
s.as=q
r=A.I(a,s)
a.eC.set(q,r)
return r},
aW(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
fX(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
aX(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.aW(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.w(null,null)
r.w=9
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.I(a,r)
a.eC.set(p,q)
return q},
dz(a,b,c){var s,r,q,p,o,n
if(b.w===10){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.aW(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.w(null,null)
o.w=10
o.x=s
o.y=r
o.as=q
n=A.I(a,o)
a.eC.set(q,n)
return n},
ek(a,b,c){var s,r,q="+"+(b+"("+A.aW(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.w(null,null)
s.w=11
s.x=b
s.y=c
s.as=q
r=A.I(a,s)
a.eC.set(q,r)
return r},
ei(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.aW(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.aW(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.fX(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.w(null,null)
p.w=12
p.x=b
p.y=c
p.as=r
o=A.I(a,p)
a.eC.set(r,o)
return o},
dA(a,b,c,d){var s,r=b.as+("<"+A.aW(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.fZ(a,b,c,r,d)
a.eC.set(r,s)
return s},
fZ(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.d_(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.T(a,b,r,0)
m=A.aj(a,c,r,0)
return A.dA(a,n,m,c!==m)}}l=new A.w(null,null)
l.w=13
l.x=b
l.y=c
l.as=d
return A.I(a,l)},
ee(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
eg(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.fP(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.ef(a,r,l,k,!1)
else if(q===46)r=A.ef(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.S(a.u,a.e,k.pop()))
break
case 94:k.push(A.h1(a.u,k.pop()))
break
case 35:k.push(A.aY(a.u,5,"#"))
break
case 64:k.push(A.aY(a.u,2,"@"))
break
case 126:k.push(A.aY(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.fR(a,k)
break
case 38:A.fQ(a,k)
break
case 42:p=a.u
k.push(A.el(p,A.S(p,a.e,k.pop()),a.n))
break
case 63:p=a.u
k.push(A.dB(p,A.S(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.ej(p,A.S(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.fO(a,k)
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
A.fT(a.u,a.e,o)
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
fP(a,b,c,d){var s,r,q=b-48
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
if(o.w===10)o=o.x
n=A.h5(s,o.x)[p]
if(n==null)A.de('No "'+p+'" in "'+A.fy(o)+'"')
d.push(A.aZ(s,o,n))}else d.push(p)
return m},
fR(a,b){var s,r=a.u,q=A.ed(a,b),p=b.pop()
if(typeof p=="string")b.push(A.aX(r,p,q))
else{s=A.S(r,a.e,p)
switch(s.w){case 12:b.push(A.dA(r,s,q,a.n))
break
default:b.push(A.dz(r,s,q))
break}}},
fO(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.ed(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.S(p,a.e,o)
q=new A.bL()
q.a=s
q.b=n
q.c=m
b.push(A.ei(p,r,q))
return
case-4:b.push(A.ek(p,b.pop(),s))
return
default:throw A.b(A.b7("Unexpected state under `()`: "+A.p(o)))}},
fQ(a,b){var s=b.pop()
if(0===s){b.push(A.aY(a.u,1,"0&"))
return}if(1===s){b.push(A.aY(a.u,4,"1&"))
return}throw A.b(A.b7("Unexpected extended operation "+A.p(s)))},
ed(a,b){var s=b.splice(a.p)
A.eh(a.u,a.e,s)
a.p=b.pop()
return s},
S(a,b,c){if(typeof c=="string")return A.aX(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.fS(a,b,c)}else return c},
eh(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.S(a,b,c[s])},
fT(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.S(a,b,c[s])},
fS(a,b,c){var s,r,q=b.w
if(q===10){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==9)throw A.b(A.b7("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.b(A.b7("Bad index "+c+" for "+b.h(0)))},
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
if(p===6){s=A.e4(a,d)
return A.n(a,b,c,s,e,!1)}if(r===8){if(!A.n(a,b.x,c,d,e,!1))return!1
return A.n(a,A.dt(a,b),c,d,e,!1)}if(r===7){s=A.n(a,t.P,c,d,e,!1)
return s&&A.n(a,b.x,c,d,e,!1)}if(p===8){if(A.n(a,b,c,d.x,e,!1))return!0
return A.n(a,b,c,A.dt(a,d),e,!1)}if(p===7){s=A.n(a,b,c,t.P,e,!1)
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
if(!A.n(a,j,c,i,e,!1)||!A.n(a,i,e,j,c,!1))return!1}return A.ev(a,b.x,c,d.x,e,!1)}if(p===12){if(b===t.g)return!0
if(s)return!1
return A.ev(a,b,c,d,e,!1)}if(r===9){if(p!==9)return!1
return A.hr(a,b,c,d,e,!1)}if(o&&p===11)return A.hv(a,b,c,d,e,!1)
return!1},
ev(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
hr(a,b,c,d,e,f){var s,r,q,p,o,n=b.x,m=d.x
for(;n!==m;){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.aZ(a,b,r[o])
return A.eo(a,p,null,c,d.y,e,!1)}return A.eo(a,b.y,null,c,d.y,e,!1)},
eo(a,b,c,d,e,f,g){var s,r=b.length
for(s=0;s<r;++s)if(!A.n(a,b[s],d,e[s],f,!1))return!1
return!0},
hv(a,b,c,d,e,f){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.n(a,r[s],c,q[s],e,!1))return!1
return!0},
b2(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.K(a))if(s!==7)if(!(s===6&&A.b2(a.x)))r=s===8&&A.b2(a.x)
return r},
i8(a){var s
if(!A.K(a))s=a===t._
else s=!0
return s},
K(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
en(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
d_(a){return a>0?new Array(a):v.typeUniverse.sEA},
w:function w(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
bL:function bL(){this.c=this.b=this.a=null},
bR:function bR(a){this.a=a},
bJ:function bJ(){},
aV:function aV(a){this.a=a},
fH(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.hN()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.bV(new A.cy(q),1)).observe(s,{childList:true})
return new A.cx(q,s,r)}else if(self.setImmediate!=null)return A.hO()
return A.hP()},
fI(a){self.scheduleImmediate(A.bV(new A.cz(a),0))},
fJ(a){self.setImmediate(A.bV(new A.cA(a),0))},
fK(a){A.fU(0,a)},
e8(a,b){var s=B.a.q(a.a,1000)
return A.fV(s<0?0:s,b)},
fU(a,b){var s=new A.aU()
s.bb(a,b)
return s},
fV(a,b){var s=new A.aU()
s.bc(a,b)
return s},
hz(a){return new A.bB(new A.k($.h,a.i("k<0>")),a.i("bB<0>"))},
ha(a,b){a.$2(0,null)
b.b=!0
return b.a},
ep(a,b){A.hb(a,b)},
h9(a,b){var s,r=a==null?b.$ti.c.a(a):a
if(!b.b)b.a.W(r)
else{s=b.a
if(b.$ti.i("F<1>").b(r))s.aB(r)
else s.a_(r)}},
h8(a,b){var s=A.M(a),r=A.D(a),q=b.a
if(b.b)q.C(s,r)
else q.X(s,r)},
hb(a,b){var s,r,q=new A.d1(b),p=new A.d2(b)
if(a instanceof A.k)a.aL(q,p,t.z)
else{s=t.z
if(a instanceof A.k)a.ao(q,p,s)
else{r=new A.k($.h,t.d)
r.a=8
r.c=a
r.aL(q,p,s)}}},
hM(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.h.am(new A.d5(s))},
dj(a){var s
if(t.Q.b(a)){s=a.gL()
if(s!=null)return s}return B.F},
dZ(a,b){var s
b.a(a)
s=new A.k($.h,b.i("k<0>"))
s.W(a)
return s},
ho(a,b){if($.h===B.b)return null
return null},
dx(a,b){var s,r
for(;s=a.a,(s&4)!==0;)a=a.c
if(a===b){b.X(new A.x(!0,a,null,"Cannot complete a future with itself"),A.e6())
return}s|=b.a&1
a.a=s
if((s&24)!==0){r=b.R()
b.O(a)
A.ae(b,r)}else{r=b.c
b.aJ(a)
a.a6(r)}},
fM(a,b){var s,r,q={},p=q.a=a
for(;s=p.a,(s&4)!==0;){p=p.c
q.a=p}if(p===b){b.X(new A.x(!0,p,null,"Cannot complete a future with itself"),A.e6())
return}if((s&24)===0){r=b.c
b.aJ(p)
q.a.a6(r)
return}if((s&16)===0&&b.c==null){b.O(p)
return}b.a^=2
A.ai(null,null,b.b,new A.cI(q,b))},
ae(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;!0;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){f=f.c
A.bU(f.a,f.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.ae(g.a,f)
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
if(r){A.bU(m.a,m.b)
return}j=$.h
if(j!==k)$.h=k
else j=null
f=f.c
if((f&15)===8)new A.cP(s,g,p).$0()
else if(q){if((f&1)!==0)new A.cO(s,m).$0()}else if((f&2)!==0)new A.cN(g,s).$0()
if(j!=null)$.h=j
f=s.c
if(f instanceof A.k){r=s.a.$ti
r=r.i("F<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.S(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.dx(f,i)
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
hE(a,b){if(t.C.b(a))return b.am(a)
if(t.v.b(a))return a
throw A.b(A.dT(a,"onError",u.c))},
hA(){var s,r
for(s=$.ah;s!=null;s=$.ah){$.b0=null
r=s.b
$.ah=r
if(r==null)$.b_=null
s.a.$0()}},
hH(){$.dF=!0
try{A.hA()}finally{$.b0=null
$.dF=!1
if($.ah!=null)$.dP().$1(A.eF())}},
eC(a){var s=new A.bC(a),r=$.b_
if(r==null){$.ah=$.b_=s
if(!$.dF)$.dP().$1(A.eF())}else $.b_=r.b=s},
hG(a){var s,r,q,p=$.ah
if(p==null){A.eC(a)
$.b0=$.b_
return}s=new A.bC(a)
r=$.b0
if(r==null){s.b=p
$.ah=$.b0=s}else{q=r.b
s.b=q
$.b0=r.b=s
if(q==null)$.b_=s}},
dO(a){var s=null,r=$.h
if(B.b===r){A.ai(s,s,B.b,a)
return}A.ai(s,s,r,r.aQ(a))},
ir(a){A.dI(a,"stream",t.K)
return new A.bP()},
dv(a){return new A.aG(null,null,a.i("aG<0>"))},
eB(a){return},
eb(a,b){return b==null?A.hQ():b},
fL(a,b){if(b==null)b=A.hR()
if(t.k.b(b))return a.am(b)
if(t.u.b(b))return b
throw A.b(A.am("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
hB(a){},
hC(a,b){A.bU(a,b)},
hf(a,b,c){var s,r=a.ab(),q=$.dg()
if(r!==q){q=r.$ti
s=$.h
r.N(new A.R(new A.k(s,q),8,new A.d3(b,c),null,q.i("R<1,1>")))}else b.Z(c)},
fD(a,b){var s=$.h
if(s===B.b)return A.e8(a,b)
return A.e8(a,s.aR(b,t.D))},
bU(a,b){A.hG(new A.d4(a,b))},
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
hF(a,b,c,d,e,f){var s,r=$.h
if(r===c)return d.$2(e,f)
$.h=c
s=r
try{r=d.$2(e,f)
return r}finally{$.h=s}},
ai(a,b,c,d){if(B.b!==c)d=c.aQ(d)
A.eC(d)},
cy:function cy(a){this.a=a},
cx:function cx(a,b,c){this.a=a
this.b=b
this.c=c},
cz:function cz(a){this.a=a},
cA:function cA(a){this.a=a},
aU:function aU(){this.c=0},
cZ:function cZ(a,b){this.a=a
this.b=b},
cY:function cY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bB:function bB(a,b){this.a=a
this.b=!1
this.$ti=b},
d1:function d1(a){this.a=a},
d2:function d2(a){this.a=a},
d5:function d5(a){this.a=a},
V:function V(a,b){this.a=a
this.b=b},
a_:function a_(a,b){this.a=a
this.$ti=b},
aH:function aH(a,b,c,d,e){var _=this
_.ay=0
_.CW=_.ch=null
_.w=a
_.a=b
_.d=c
_.e=d
_.r=_.f=null
_.$ti=e},
bD:function bD(){},
aG:function aG(a,b,c){var _=this
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
cF:function cF(a,b){this.a=a
this.b=b},
cM:function cM(a,b){this.a=a
this.b=b},
cJ:function cJ(a){this.a=a},
cK:function cK(a){this.a=a},
cL:function cL(a,b,c){this.a=a
this.b=b
this.c=c},
cI:function cI(a,b){this.a=a
this.b=b},
cH:function cH(a,b){this.a=a
this.b=b},
cG:function cG(a,b,c){this.a=a
this.b=b
this.c=c},
cP:function cP(a,b,c){this.a=a
this.b=b
this.c=c},
cQ:function cQ(a){this.a=a},
cO:function cO(a,b){this.a=a
this.b=b},
cN:function cN(a,b){this.a=a
this.b=b},
bC:function bC(a){this.a=a
this.b=null},
ad:function ad(){},
cg:function cg(a,b){this.a=a
this.b=b},
ch:function ch(a,b){this.a=a
this.b=b},
ce:function ce(a){this.a=a},
cf:function cf(a,b,c){this.a=a
this.b=b
this.c=c},
aI:function aI(){},
bF:function bF(){},
bE:function bE(){},
aT:function aT(){},
bI:function bI(){},
bH:function bH(a){this.b=a
this.a=null},
bM:function bM(){this.a=0
this.c=this.b=null},
cU:function cU(a,b){this.a=a
this.b=b},
aJ:function aJ(a){this.a=1
this.b=a
this.c=null},
bP:function bP(){},
d3:function d3(a,b){this.a=a
this.b=b},
d0:function d0(){},
d4:function d4(a,b){this.a=a
this.b=b},
cV:function cV(){},
cW:function cW(a,b){this.a=a
this.b=b},
cX:function cX(a,b,c){this.a=a
this.b=b
this.c=c},
e0(a){return new A.aL(a.i("aL<0>"))},
dy(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
fN(a,b,c){var s=new A.af(a,b,c.i("af<0>"))
s.c=a.e
return s},
dr(a){var s,r={}
if(A.eM(a))return"{...}"
s=new A.by("")
try{$.L.push(a)
s.a+="{"
r.a=!0
a.af(0,new A.c3(r,s))
s.a+="}"}finally{if(0>=$.L.length)return A.d($.L,-1)
$.L.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
aL:function aL(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cT:function cT(a){this.a=a
this.c=this.b=null},
af:function af(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
m:function m(){},
ax:function ax(){},
c3:function c3(a,b){this.a=a
this.b=b},
aD:function aD(){},
aR:function aR(){},
fe(a,b){a=A.b(a)
a.stack=b.h(0)
throw a
throw A.b("unreachable")},
dq(a,b,c,d){var s,r=J.fn(a,d)
if(a!==0&&b!=null)for(s=0;s<a;++s)r[s]=b
return r},
fs(a,b,c){var s,r,q=A.a([],c.i("o<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.eP)(a),++r)q.push(a[r])
q.$flags=1
return q},
ft(a,b,c){var s=A.fr(a,c)
return s},
fr(a,b){var s,r
if(Array.isArray(a))return A.a(a.slice(0),b.i("o<0>"))
s=A.a([],b.i("o<0>"))
for(r=J.dQ(a);r.E();)s.push(r.gH())
return s},
fB(a,b,c){var s=J.dQ(b)
if(!s.E())return a
if(c.length===0){do a+=A.p(s.gH())
while(s.E())}else{a+=A.p(s.gH())
for(;s.E();)a=a+c+A.p(s.gH())}return a},
e6(){return A.D(new Error())},
c0(a){if(typeof a=="number"||A.dE(a)||a==null)return J.b4(a)
if(typeof a=="string")return JSON.stringify(a)
return A.e2(a)},
ff(a,b){A.dI(a,"error",t.K)
A.dI(b,"stackTrace",t.l)
A.fe(a,b)},
b7(a){return new A.b6(a)},
am(a,b){return new A.x(!1,null,b,a)},
dT(a,b,c){return new A.x(!0,a,b,c)},
fw(a){var s=null
return new A.aa(s,s,!1,s,s,a)},
e3(a,b){return new A.aa(null,null,!0,a,b,"Value not in range")},
fx(a,b,c,d,e){return new A.aa(b,c,!0,a,d,"Invalid value")},
fi(a,b,c,d){return new A.bd(b,!0,a,d,"Index out of range")},
cw(a){return new A.aF(a)},
ea(a){return new A.bz(a)},
fA(a){return new A.Y(a)},
b9(a){return new A.b8(a)},
dl(a){return new A.cE(a)},
dm(a,b,c){var s,r
if(A.eM(a))return b+"..."+c
s=new A.by(b)
$.L.push(a)
try{r=s
r.a=A.fB(r.a,a,", ")}finally{if(0>=$.L.length)return A.d($.L,-1)
$.L.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
c5(a,b,c,d){var s
if(B.d===c){s=B.a.gj(a)
b=J.E(b)
return A.dw(A.Q(A.Q($.dh(),s),b))}if(B.d===d){s=B.a.gj(a)
b=J.E(b)
c=J.E(c)
return A.dw(A.Q(A.Q(A.Q($.dh(),s),b),c))}s=A.e7(B.a.gj(a),J.E(b),J.E(c),J.E(d),$.dh())
return s},
bb:function bb(a){this.a=a},
cB:function cB(){},
j:function j(){},
b6:function b6(a){this.a=a},
G:function G(){},
x:function x(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aa:function aa(a,b,c,d,e,f){var _=this
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
aF:function aF(a){this.a=a},
bz:function bz(a){this.a=a},
Y:function Y(a){this.a=a},
b8:function b8(a){this.a=a},
bu:function bu(){},
aE:function aE(){},
cE:function cE(a){this.a=a},
q:function q(){},
e:function e(){},
bQ:function bQ(){},
by:function by(a){this.a=a},
ds(a,b,c,d,e){var s,r
if(c<0)s=c===-1/0?0:-c*0
else s=c
if(d<0)r=d===-1/0?0:-d*0
else r=d
return new A.ab(a,b,s,r,e.i("ab<0>"))},
cR:function cR(){},
bO:function bO(){},
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
a5:function a5(){},
a6:function a6(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
a8:function a8(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=0},
fz(a,b,c,d,e,f,g){var s,r,q,p=self,o=p.document.createElement("canvas"),n=g*f
o.width=n
s=d*e
o.height=s
r=p.document.createElement("canvas")
r.width=n
r.height=s
s=A.a([],t.w)
for(q=0;q<d;++q){p=B.a.q(g,32)
s.push(new Uint32Array(p+1))}p=new A.bx(d,g,f,e,c,a,o,r,s)
p.b9(a,b,c,d,e,f,g)
return p},
du(a){return new A.z(B.a.q(a,32),31-B.a.k(a,32))},
bx:function bx(a,b,c,d,e,f,g,h,i){var _=this
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
c8:function c8(a){this.a=a},
c9:function c9(a){this.a=a},
ca:function ca(a){this.a=a},
cb:function cb(a){this.a=a},
c7:function c7(){},
B:function B(a){this.b=a},
fC(a,b,c,d,e,f,g,h){var s,r,q,p,o=null,n=A.fz("black",b,c,h*(8+g),e,f,a*8),m=A.a([],t.G)
for(s=t.U,r=0;r<h;++r){q=A.a([],s)
for(p=0;p<a;++p)q.push(new A.N(r,p," ",c))
m.push(q)}n=new A.cj(h,a,g,c,b,!0,n,new A.a8(h,a),new A.a8(h,a),new A.a8(h,a),A.dv(t.N),A.dv(t.V),A.dv(t.q),B.c,m,A.e0(t.o),B.e7)
n.ba("black",a,b,c,o,!0,e,f,g,h,!0,o,o,o,o,o,o)
return n},
ac:function ac(a){this.b=a},
cj:function cj(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
aK(a,b,c,d){var s
if(c==null)s=null
else{s=A.eD(new A.cC(c),t.m)
s=s==null?null:A.eu(s)}s=new A.bK(a,b,s,!1)
s.aN()
return s},
eD(a,b){var s=$.h
if(s===B.b)return a
return s.aR(a,b)},
dk:function dk(a,b){this.a=a
this.$ti=b},
bK:function bK(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
cC:function cC(a){this.a=a},
cD:function cD(a){this.a=a},
bW(){var s=0,r=A.hz(t.H),q,p,o,n,m,l,k
var $async$bW=A.hM(function(a,b){if(a===1)return A.h8(b,r)
while(true)switch(s){case 0:k=$.bX()
k.J()
q=A.f6()
p=k.ax,o=A.a1(p).i("a_<1>")
case 2:if(!!0){s=3
break}q.b6(0)
case 4:if(!!q.bA()){s=5
break}q.aT()
if(k.ay!==B.c)A.de(A.dl("Terminal already awaiting input."))
k.ay=B.f
s=6
return A.ep(new A.a_(p,o).gaU(0),$async$bW)
case 6:n=b
m=B.a.q(n.a-4,4)
l=B.a.q(n.b-2,4)
if(m>=0&&l>=0)q.av(m,l)
s=4
break
case 5:q.aT()
k.al("Congratulations!",2,-3)
if(k.ay!==B.c)A.de(A.dl("Terminal already awaiting input."))
k.ay=B.f
s=7
return A.ep(new A.a_(p,o).gaU(0),$async$bW)
case 7:k.al(B.p.aq(" ",16),2,-3)
s=2
break
case 3:return A.h9(null,r)}})
return A.ha($async$bW,r)},
ie(){var s,r,q=t.S,p=A.e0(q)
for(;p.a<15;){s=$.di().V(23)
if(s!==0)p.D(0,s)}q=A.ft(p,!0,q)
r=$.di().V(15)
q.$flags&1&&A.b3(q,"insert",2)
if(r<0||r>q.length)A.de(A.e3(r,null))
q.splice(r,0,0)
return q},
eI(a,b,c,d,e){var s,r,q,p,o,n,m,l,k="lightgray",j=4+4*b,i=2+4*c,h=e?k:"gray",g=d?e?"black":k:k
if(d){s=$.bX()
s.m(h,i,B.af,j)
r=i+1
s.m(h,r,B.i,j)
q=i+2
s.m(h,q,B.i,j)
p=i+3
s.m(h,p,B.ag,j)
o=j+1
s.m(h,i,B.j,o)
s.m(h,r,B.e,o)
s.m(h,q,B.e,o)
n=j+2
s.m(h,i,B.j,n)
s.m(h,p,B.k,o)
s.m(h,p,B.k,n)
s.m(h,r,B.e,n)
s.m(h,q,B.e,n)
n=j+3
s.m(h,i,B.cF,n)
s.m(h,r,B.h,n)
s.m(h,q,B.h,n)
s.m(h,p,B.cQ,n)}else for(m=0;m<4;++m)for(s=j+m,l=0;l<4;++l)$.bX().b0(i+l,B.q,s)
s=$.bX()
if(!(a>=0&&a<23))return A.d(B.r,a)
r=B.r[a]
s.w.aI((j+1)*8,(i+1)*8,r,g,16,B.u,!0,!1,!1)},
f6(){var s,r=A.ie(),q=A.a([],t.t)
for(s=0;s<16;++s)q.push(0)
r=new A.bY(r,q)
r.b8()
return r},
bY:function bY(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=0},
ih(a){A.eQ(new A.bi("Field '"+a+"' has been assigned during initialization."),new Error())},
et(a){var s
if(typeof a=="function")throw A.b(A.am("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.hc,a)
s[$.df()]=a
return s},
eu(a){var s
if(typeof a=="function")throw A.b(A.am("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.hd,a)
s[$.df()]=a
return s},
hc(a){return a.$0()},
hd(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
i1(a,b){return a[b]},
he(a,b,c){return a[b](c)}},B={}
var w=[A,J,B]
var $={}
A.dn.prototype={}
J.be.prototype={
v(a,b){return a===b},
gj(a){return A.a9(a)},
h(a){return"Instance of '"+A.c6(a)+"'"},
gl(a){return A.a2(A.dD(this))}}
J.bf.prototype={
h(a){return String(a)},
gj(a){return a?519018:218159},
gl(a){return A.a2(t.y)},
$if:1}
J.ar.prototype={
v(a,b){return null==b},
h(a){return"null"},
gj(a){return 0},
$if:1,
$iq:1}
J.at.prototype={$il:1}
J.P.prototype={
gj(a){return 0},
h(a){return String(a)}}
J.bv.prototype={}
J.Z.prototype={}
J.O.prototype={
h(a){var s=a[$.df()]
if(s==null)return this.b7(a)
return"JavaScript function for "+J.b4(s)}}
J.as.prototype={
gj(a){return 0},
h(a){return String(a)}}
J.au.prototype={
gj(a){return 0},
h(a){return String(a)}}
J.o.prototype={
bB(a,b){var s,r,q=a.length,p=A.dq(q,"",!1,t.N)
for(s=0;s<a.length;++s){r=A.p(a[s])
if(!(s<q))return A.d(p,s)
p[s]=r}return p.join(b)},
bw(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw A.b(A.b9(a))}return s},
bx(a,b,c){return this.bw(a,b,c,t.z)},
h(a){return A.dm(a,"[","]")},
gaj(a){return new J.b5(a,a.length,A.dC(a).i("b5<1>"))},
gj(a){return A.a9(a)},
gn(a){return a.length},
$ii:1}
J.c1.prototype={}
J.b5.prototype={
gH(){var s=this.d
return s==null?this.$ti.c.a(s):s},
E(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.b(A.eP(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.a4.prototype={
bL(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.b(A.cw(""+a+".toInt()"))},
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
B(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.aK(a,b)},
q(a,b){return(a|0)===a?a/b|0:this.aK(a,b)},
aK(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.cw("Result of truncating division is "+A.p(s)+": "+A.p(a)+" ~/ "+b))},
K(a,b){if(b<0)throw A.b(A.dH(b))
return b>31?0:a<<b>>>0},
bs(a,b){return b>31?0:a<<b>>>0},
b5(a,b){var s
if(b<0)throw A.b(A.dH(b))
if(a>0)s=this.a8(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
bt(a,b){var s
if(a>0)s=this.a8(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
A(a,b){if(0>b)throw A.b(A.dH(b))
return this.a8(a,b)},
a8(a,b){return b>31?0:a>>>b},
gl(a){return A.a2(t.n)},
$ir:1}
J.aq.prototype={
gl(a){return A.a2(t.S)},
$if:1,
$ic:1}
J.bg.prototype={
gl(a){return A.a2(t.i)},
$if:1}
J.X.prototype={
bM(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.d(p,0)
if(p.charCodeAt(0)===133){s=J.fp(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.d(p,r)
q=p.charCodeAt(r)===133?J.fq(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
aq(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.D)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
bD(a,b,c){var s=b-a.length
if(s<=0)return a
return this.aq(c,s)+a},
h(a){return a},
gj(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gl(a){return A.a2(t.N)},
gn(a){return a.length},
$if:1,
$iC:1}
A.bi.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.dd.prototype={
$0(){return A.dZ(null,t.H)},
$S:7}
A.cc.prototype={}
A.bj.prototype={
gH(){var s=this.d
return s==null?this.$ti.c.a(s):s},
E(){var s,r=this,q=r.a,p=J.eJ(q),o=p.gn(q)
if(r.b!==o)throw A.b(A.b9(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.bv(q,s);++r.c
return!0}}
A.ap.prototype={}
A.z.prototype={$r:"+(1,2)",$s:1}
A.ba.prototype={
h(a){return A.dr(this)}}
A.bc.prototype={
P(){var s=this,r=s.$map
if(r==null){r=new A.av(s.$ti.i("av<1,2>"))
A.hX(s.a,r)
s.$map=r}return r},
ad(a){return this.P().ad(a)},
p(a,b){return this.P().p(0,b)},
af(a,b){this.P().af(0,b)},
gn(a){return this.P().a}}
A.ct.prototype={
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
A.aC.prototype={
h(a){return"Null check operator used on a null value"}}
A.bh.prototype={
h(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.bA.prototype={
h(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.c4.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.ao.prototype={}
A.aS.prototype={
h(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iy:1}
A.W.prototype={
h(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.eR(r==null?"unknown":r)+"'"},
gbN(){return this},
$C:"$1",
$R:1,
$D:null}
A.bZ.prototype={$C:"$0",$R:0}
A.c_.prototype={$C:"$2",$R:2}
A.ci.prototype={}
A.cd.prototype={
h(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.eR(s)+"'"}}
A.an.prototype={
v(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.an))return!1
return this.$_target===b.$_target&&this.a===b.a},
gj(a){return(A.dN(this.a)^A.a9(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.c6(this.a)+"'")}}
A.bG.prototype={
h(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.bw.prototype={
h(a){return"RuntimeError: "+this.a}}
A.aw.prototype={
gn(a){return this.a},
ad(a){var s=this.b
if(s==null)return!1
return s[a]!=null},
p(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.bz(b)},
bz(a){var s,r,q=this.d
if(q==null)return null
s=q[this.ag(a)]
r=this.ah(s,a)
if(r<0)return null
return s[r].b},
af(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw A.b(A.b9(s))
r=r.c}},
M(a,b){var s=this,r=new A.c2(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&1073741823
return r},
ag(a){return J.E(a)&1073741823},
ah(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.al(a[r].a,b))return r
return-1},
h(a){return A.dr(this)}}
A.c2.prototype={}
A.av.prototype={
ag(a){return A.hT(a)&1073741823},
ah(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.al(a[r].a,b))return r
return-1}}
A.d8.prototype={
$1(a){return this.a(a)},
$S:8}
A.d9.prototype={
$2(a,b){return this.a(a,b)},
$S:9}
A.da.prototype={
$1(a){return this.a(a)},
$S:10}
A.ag.prototype={
h(a){return this.aM(!1)},
aM(a){var s,r,q,p,o,n=this.bk(),m=this.aE(),l=(a?""+"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.d(m,q)
o=m[q]
l=a?l+A.e2(o):l+A.p(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
bk(){var s,r=this.$s
for(;$.aQ.length<=r;)$.aQ.push(null)
s=$.aQ[r]
if(s==null){s=this.bj()
if(!(r<$.aQ.length))return A.d($.aQ,r)
$.aQ[r]=s}return s},
bj(){var s,r,q,p,o,n=this.$r,m=n.indexOf("("),l=n.substring(1,m),k=n.substring(m),j=k==="()"?0:k.replace(/[^,]/g,"").length+1,i=A.a(new Array(j),t.f)
for(s=0;s<j;++s)i[s]=s
if(l!==""){r=l.split(",")
s=r.length
for(q=i.length,p=j;s>0;){--p;--s
o=r[s]
if(!(p>=0&&p<q))return A.d(i,p)
i[p]=o}}i=A.fs(i,!1,t.K)
i.$flags=3
return i}}
A.bN.prototype={
aE(){return[this.a,this.b]},
v(a,b){if(b==null)return!1
return b instanceof A.bN&&this.$s===b.$s&&J.al(this.a,b.a)&&J.al(this.b,b.b)},
gj(a){return A.c5(this.$s,this.a,this.b,B.d)}}
A.bk.prototype={
gl(a){return B.ef},
$if:1}
A.aA.prototype={}
A.bl.prototype={
gl(a){return B.eg},
$if:1}
A.a7.prototype={
gn(a){return a.length},
$iv:1}
A.ay.prototype={
p(a,b){A.a0(b,a,a.length)
return a[b]},
$ii:1}
A.az.prototype={$ii:1}
A.bm.prototype={
gl(a){return B.eh},
$if:1}
A.bn.prototype={
gl(a){return B.ei},
$if:1}
A.bo.prototype={
gl(a){return B.ej},
p(a,b){A.a0(b,a,a.length)
return a[b]},
$if:1}
A.bp.prototype={
gl(a){return B.ek},
p(a,b){A.a0(b,a,a.length)
return a[b]},
$if:1}
A.bq.prototype={
gl(a){return B.el},
p(a,b){A.a0(b,a,a.length)
return a[b]},
$if:1}
A.br.prototype={
gl(a){return B.en},
p(a,b){A.a0(b,a,a.length)
return a[b]},
$if:1}
A.bs.prototype={
gl(a){return B.eo},
p(a,b){A.a0(b,a,a.length)
return a[b]},
$if:1,
$icv:1}
A.aB.prototype={
gl(a){return B.ep},
gn(a){return a.length},
p(a,b){A.a0(b,a,a.length)
return a[b]},
$if:1}
A.bt.prototype={
gl(a){return B.eq},
gn(a){return a.length},
p(a,b){A.a0(b,a,a.length)
return a[b]},
$if:1}
A.aM.prototype={}
A.aN.prototype={}
A.aO.prototype={}
A.aP.prototype={}
A.w.prototype={
i(a){return A.aZ(v.typeUniverse,this,a)},
az(a){return A.em(v.typeUniverse,this,a)}}
A.bL.prototype={}
A.bR.prototype={
h(a){return A.u(this.a,null)}}
A.bJ.prototype={
h(a){return this.a}}
A.aV.prototype={$iG:1}
A.cy.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:4}
A.cx.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:11}
A.cz.prototype={
$0(){this.a.$0()},
$S:2}
A.cA.prototype={
$0(){this.a.$0()},
$S:2}
A.aU.prototype={
bb(a,b){if(self.setTimeout!=null)self.setTimeout(A.bV(new A.cZ(this,b),0),a)
else throw A.b(A.cw("`setTimeout()` not found."))},
bc(a,b){if(self.setTimeout!=null)self.setInterval(A.bV(new A.cY(this,a,Date.now(),b),0),a)
else throw A.b(A.cw("Periodic timer."))},
$ics:1}
A.cZ.prototype={
$0(){this.a.c=1
this.b.$0()},
$S:0}
A.cY.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.a.B(s,o)}q.c=p
r.d.$1(q)},
$S:2}
A.bB.prototype={}
A.d1.prototype={
$1(a){return this.a.$2(0,a)},
$S:5}
A.d2.prototype={
$2(a,b){this.a.$2(1,new A.ao(a,b))},
$S:12}
A.d5.prototype={
$2(a,b){this.a(a,b)},
$S:13}
A.V.prototype={
h(a){return A.p(this.a)},
$ij:1,
gL(){return this.b}}
A.a_.prototype={}
A.aH.prototype={
a4(){},
a5(){}}
A.bD.prototype={
gbm(){return this.c<4},
bq(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
bu(a,b,c,d){var s,r,q,p,o,n=this
if((n.c&4)!==0){s=new A.aJ($.h)
A.dO(s.gbn())
s.c=c
return s}s=$.h
r=d?1:0
q=A.eb(s,a)
A.fL(s,b)
p=new A.aH(n,q,s,r|32,A.a1(n).i("aH<1>"))
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
bp(a){var s,r=this
A.a1(r).i("aH<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.bq(a)
if((r.c&2)===0&&r.d==null)r.bh()}return null},
be(){if((this.c&4)!==0)return new A.Y("Cannot add new events after calling close")
return new A.Y("Cannot add new events while doing an addStream")},
D(a,b){if(!this.gbm())throw A.b(this.be())
this.a7(b)},
bh(){if((this.c&4)!==0)if(null.gbO())null.W(null)
A.eB(this.b)}}
A.aG.prototype={
a7(a){var s
for(s=this.d;s!=null;s=s.ch)s.bf(new A.bH(a))}}
A.R.prototype={
bC(a){if((this.c&15)!==6)return!0
return this.b.b.an(this.d,a.a)},
by(a){var s,r=this.e,q=null,p=a.a,o=this.b.b
if(t.C.b(r))q=o.bG(r,p,a.b)
else q=o.an(r,p)
try{p=q
return p}catch(s){if(t.c.b(A.M(s))){if((this.c&1)!==0)throw A.b(A.am("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.b(A.am("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.k.prototype={
aJ(a){this.a=this.a&1|4
this.c=a},
ao(a,b,c){var s,r,q=$.h
if(q===B.b){if(b!=null&&!t.C.b(b)&&!t.v.b(b))throw A.b(A.dT(b,"onError",u.c))}else if(b!=null)b=A.hE(b,q)
s=new A.k(q,c.i("k<0>"))
r=b==null?1:3
this.N(new A.R(s,r,a,b,this.$ti.i("@<1>").az(c).i("R<1,2>")))
return s},
bK(a,b){return this.ao(a,null,b)},
aL(a,b,c){var s=new A.k($.h,c.i("k<0>"))
this.N(new A.R(s,19,a,b,this.$ti.i("@<1>").az(c).i("R<1,2>")))
return s},
br(a){this.a=this.a&1|16
this.c=a},
O(a){this.a=a.a&30|this.a&1
this.c=a.c},
N(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.N(a)
return}s.O(r)}A.ai(null,null,s.b,new A.cF(s,a))}},
a6(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.a6(a)
return}n.O(s)}m.a=n.S(a)
A.ai(null,null,n.b,new A.cM(m,n))}},
R(){var s=this.c
this.c=null
return this.S(s)},
S(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
aA(a){var s,r,q,p=this
p.a^=2
try{a.ao(new A.cJ(p),new A.cK(p),t.P)}catch(q){s=A.M(q)
r=A.D(q)
A.dO(new A.cL(p,s,r))}},
Z(a){var s,r=this,q=r.$ti
if(q.i("F<1>").b(a))if(q.b(a))A.dx(a,r)
else r.aA(a)
else{s=r.R()
r.a=8
r.c=a
A.ae(r,s)}},
a_(a){var s=this,r=s.R()
s.a=8
s.c=a
A.ae(s,r)},
C(a,b){var s=this.R()
this.br(new A.V(a,b))
A.ae(this,s)},
W(a){if(this.$ti.i("F<1>").b(a)){this.aB(a)
return}this.bg(a)},
bg(a){this.a^=2
A.ai(null,null,this.b,new A.cH(this,a))},
aB(a){if(this.$ti.b(a)){A.fM(a,this)
return}this.aA(a)},
X(a,b){this.a^=2
A.ai(null,null,this.b,new A.cG(this,a,b))},
$iF:1}
A.cF.prototype={
$0(){A.ae(this.a,this.b)},
$S:0}
A.cM.prototype={
$0(){A.ae(this.b,this.a.a)},
$S:0}
A.cJ.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.a_(p.$ti.c.a(a))}catch(q){s=A.M(q)
r=A.D(q)
p.C(s,r)}},
$S:4}
A.cK.prototype={
$2(a,b){this.a.C(a,b)},
$S:14}
A.cL.prototype={
$0(){this.a.C(this.b,this.c)},
$S:0}
A.cI.prototype={
$0(){A.dx(this.a.a,this.b)},
$S:0}
A.cH.prototype={
$0(){this.a.a_(this.b)},
$S:0}
A.cG.prototype={
$0(){this.a.C(this.b,this.c)},
$S:0}
A.cP.prototype={
$0(){var s,r,q,p,o,n,m,l=this,k=null
try{q=l.a.a
k=q.b.b.b1(q.d)}catch(p){s=A.M(p)
r=A.D(p)
if(l.c&&l.b.a.c.a===s){q=l.a
q.c=l.b.a.c}else{q=s
o=r
if(o==null)o=A.dj(q)
n=l.a
n.c=new A.V(q,o)
q=n}q.b=!0
return}if(k instanceof A.k&&(k.a&24)!==0){if((k.a&16)!==0){q=l.a
q.c=k.c
q.b=!0}return}if(k instanceof A.k){m=l.b.a
q=l.a
q.c=k.bK(new A.cQ(m),t.z)
q.b=!1}},
$S:0}
A.cQ.prototype={
$1(a){return this.a},
$S:15}
A.cO.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
q.c=p.b.b.an(p.d,this.b)}catch(o){s=A.M(o)
r=A.D(o)
q=s
p=r
if(p==null)p=A.dj(q)
n=this.a
n.c=new A.V(q,p)
n.b=!0}},
$S:0}
A.cN.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.bC(s)&&p.a.e!=null){p.c=p.a.by(s)
p.b=!1}}catch(o){r=A.M(o)
q=A.D(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.dj(p)
m=l.b
m.c=new A.V(p,n)
p=m}p.b=!0}},
$S:0}
A.bC.prototype={}
A.ad.prototype={
gn(a){var s={},r=new A.k($.h,t.a)
s.a=0
this.aV(new A.cg(s,this),!0,new A.ch(s,r),r.gaC())
return r},
gaU(a){var s=new A.k($.h,A.a1(this).i("k<1>")),r=this.aV(null,!0,new A.ce(s),s.gaC())
r.ak(new A.cf(this,r,s))
return s}}
A.cg.prototype={
$1(a){++this.a.a},
$S(){return A.a1(this.b).i("~(1)")}}
A.ch.prototype={
$0(){this.b.Z(this.a.a)},
$S:0}
A.ce.prototype={
$0(){var s,r,q,p,o
try{q=A.fm()
throw A.b(q)}catch(p){s=A.M(p)
r=A.D(p)
q=s
o=r
A.ho(q,o)
this.a.C(q,o)}},
$S:0}
A.cf.prototype={
$1(a){A.hf(this.b,this.c,a)},
$S(){return A.a1(this.a).i("~(1)")}}
A.aI.prototype={
gj(a){return(A.a9(this.a)^892482866)>>>0},
v(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.a_&&b.a===this.a}}
A.bF.prototype={
aH(){return this.w.bp(this)},
a4(){},
a5(){}}
A.bE.prototype={
ak(a){this.a=A.eb(this.d,a)},
ab(){var s,r=this,q=r.e&=4294967279
if((q&8)===0){q=r.e=q|8
if((q&128)!==0){s=r.r
if(s.a===1)s.a=3}if((q&64)===0)r.r=null
r.f=r.aH()}q=$.dg()
return q},
a4(){},
a5(){},
aH(){return null},
bf(a){var s,r,q=this,p=q.r
if(p==null)p=q.r=new A.bM()
s=p.c
if(s==null)p.b=p.c=a
else p.c=s.a=a
r=q.e
if((r&128)===0){r|=128
q.e=r
if(r<256)p.ar(q)}},
a7(a){var s=this,r=s.e
s.e=r|64
s.d.b3(s.a,a)
s.e&=4294967231
s.bi((r&4)!==0)},
bi(a){var s,r,q=this,p=q.e
if((p&128)!==0&&q.r.c==null){p=q.e=p&4294967167
s=!1
if((p&4)!==0)if(p<256){s=q.r
s=s==null?null:s.c==null
s=s!==!1}if(s){p&=4294967291
q.e=p}}for(;!0;a=r){if((p&8)!==0){q.r=null
return}r=(p&4)!==0
if(a===r)break
q.e=p^64
if(r)q.a4()
else q.a5()
p=q.e&=4294967231}if((p&128)!==0&&p<256)q.r.ar(q)}}
A.aT.prototype={
aV(a,b,c,d){return this.a.bu(a,d,c,!0)}}
A.bI.prototype={}
A.bH.prototype={}
A.bM.prototype={
ar(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.dO(new A.cU(s,a))
s.a=1}}
A.cU.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.a
q.b=r
if(r==null)q.c=null
this.b.a7(s.b)},
$S:0}
A.aJ.prototype={
ak(a){},
ab(){this.a=-1
this.c=null
return $.dg()},
bo(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.b2(s)}}else r.a=q}}
A.bP.prototype={}
A.d3.prototype={
$0(){return this.a.Z(this.b)},
$S:0}
A.d0.prototype={}
A.d4.prototype={
$0(){A.ff(this.a,this.b)},
$S:0}
A.cV.prototype={
b2(a){var s,r,q
try{if(B.b===$.h){a.$0()
return}A.ey(null,null,this,a)}catch(q){s=A.M(q)
r=A.D(q)
A.bU(s,r)}},
bJ(a,b){var s,r,q
try{if(B.b===$.h){a.$1(b)
return}A.ez(null,null,this,a,b)}catch(q){s=A.M(q)
r=A.D(q)
A.bU(s,r)}},
b3(a,b){return this.bJ(a,b,t.z)},
aQ(a){return new A.cW(this,a)},
aR(a,b){return new A.cX(this,a,b)},
bF(a){if($.h===B.b)return a.$0()
return A.ey(null,null,this,a)},
b1(a){return this.bF(a,t.z)},
bI(a,b){if($.h===B.b)return a.$1(b)
return A.ez(null,null,this,a,b)},
an(a,b){var s=t.z
return this.bI(a,b,s,s)},
bH(a,b,c){if($.h===B.b)return a.$2(b,c)
return A.hF(null,null,this,a,b,c)},
bG(a,b,c){var s=t.z
return this.bH(a,b,c,s,s,s)},
bE(a){return a},
am(a){var s=t.z
return this.bE(a,s,s,s)}}
A.cW.prototype={
$0(){return this.a.b2(this.b)},
$S:0}
A.cX.prototype={
$1(a){return this.a.b3(this.b,a)},
$S(){return this.c.i("~(0)")}}
A.aL.prototype={
gaj(a){var s=this,r=new A.af(s,s.r,s.$ti.i("af<1>"))
r.c=s.e
return r},
gn(a){return this.a},
D(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.aw(s==null?q.b=A.dy():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.aw(r==null?q.c=A.dy():r,b)}else return q.bd(b)},
bd(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.dy()
s=J.E(a)&1073741823
r=p[s]
if(r==null)p[s]=[q.a3(a)]
else{if(q.bl(r,a)>=0)return!1
r.push(q.a3(a))}return!0},
aw(a,b){if(a[b]!=null)return!1
a[b]=this.a3(b)
return!0},
aG(){this.r=this.r+1&1073741823},
a3(a){var s,r=this,q=new A.cT(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.aG()
return q},
bl(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.al(a[r].a,b))return r
return-1}}
A.cT.prototype={}
A.af.prototype={
gH(){var s=this.d
return s==null?this.$ti.c.a(s):s},
E(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.b(A.b9(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.m.prototype={
gaj(a){return new A.bj(a,this.gn(a),A.b1(a).i("bj<m.E>"))},
bv(a,b){return this.p(a,b)},
h(a){return A.dm(a,"[","]")}}
A.ax.prototype={
gn(a){return this.a},
h(a){return A.dr(this)}}
A.c3.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.p(a)
s=r.a+=s
r.a=s+": "
s=A.p(b)
r.a+=s},
$S:16}
A.aD.prototype={
h(a){return A.dm(this,"{","}")}}
A.aR.prototype={}
A.bb.prototype={
v(a,b){if(b==null)return!1
return b instanceof A.bb&&this.a===b.a},
gj(a){return B.a.gj(this.a)},
h(a){var s,r,q,p,o,n=this.a,m=B.a.q(n,36e8),l=n%36e8
if(n<0){m=0-m
n=0-l
s="-"}else{n=l
s=""}r=B.a.q(n,6e7)
n%=6e7
q=r<10?"0":""
p=B.a.q(n,1e6)
o=p<10?"0":""
return s+m+":"+q+r+":"+o+p+"."+B.p.bD(B.a.h(n%1e6),6,"0")}}
A.cB.prototype={
h(a){return this.aD()}}
A.j.prototype={
gL(){return A.fv(this)}}
A.b6.prototype={
h(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.c0(s)
return"Assertion failed"}}
A.G.prototype={}
A.x.prototype={
ga2(){return"Invalid argument"+(!this.a?"(s)":"")},
ga1(){return""},
h(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.ga2()+q+o
if(!s.a)return n
return n+s.ga1()+": "+A.c0(s.gai())},
gai(){return this.b}}
A.aa.prototype={
gai(){return this.b},
ga2(){return"RangeError"},
ga1(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.p(q):""
else if(q==null)s=": Not greater than or equal to "+A.p(r)
else if(q>r)s=": Not in inclusive range "+A.p(r)+".."+A.p(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.p(r)
return s}}
A.bd.prototype={
gai(){return this.b},
ga2(){return"RangeError"},
ga1(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gn(a){return this.f}}
A.aF.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.bz.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.Y.prototype={
h(a){return"Bad state: "+this.a}}
A.b8.prototype={
h(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.c0(s)+"."}}
A.bu.prototype={
h(a){return"Out of Memory"},
gL(){return null},
$ij:1}
A.aE.prototype={
h(a){return"Stack Overflow"},
gL(){return null},
$ij:1}
A.cE.prototype={
h(a){return"Exception: "+this.a}}
A.q.prototype={
gj(a){return A.e.prototype.gj.call(this,0)},
h(a){return"null"}}
A.e.prototype={$ie:1,
v(a,b){return this===b},
gj(a){return A.a9(this)},
h(a){return"Instance of '"+A.c6(this)+"'"},
gl(a){return A.i2(this)},
toString(){return this.h(this)}}
A.bQ.prototype={
h(a){return""},
$iy:1}
A.by.prototype={
gn(a){return this.a.length},
h(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.cR.prototype={
V(a){if(a<=0||a>4294967296)throw A.b(A.fw("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
A.bO.prototype={
h(a){var s=this
return"Rectangle ("+s.a+", "+s.b+") "+s.c+" x "+s.d},
v(a,b){var s,r,q,p,o,n,m=this
if(b==null)return!1
s=!1
if(b instanceof A.ab){r=m.a
q=b.a
if(r===q){p=m.b
o=b.b
if(p===o){s=m.$ti.c
n=b.$ti.c
s=s.a(r+m.c)===n.a(q+b.c)&&s.a(p+m.d)===n.a(o+b.d)}}}return s},
gj(a){var s=this,r=s.a,q=s.b,p=s.$ti.c
return A.e7(B.a.gj(r),B.a.gj(q),B.a.gj(p.a(r+s.c)),B.a.gj(p.a(q+s.d)),0)}}
A.ab.prototype={}
A.N.prototype={
gj(a){var s=this.a,r=this.b
return A.c5(new A.z(s,r).$s,s,r,B.d)},
v(a,b){var s,r,q,p
if(b==null)return!1
if(b instanceof A.N){s=b.a
r=b.b
q=this.a
p=this.b
p=A.c5(new A.z(s,r).$s,s,r,B.d)===A.c5(new A.z(q,p).$s,q,p,B.d)
s=p}else s=!1
return s},
h(a){var s=this
return"("+s.a+" "+s.b+") => '"+s.c+"' "+s.d}}
A.a5.prototype={}
A.a6.prototype={
h(a){var s=this
return"               row: "+s.a+"\n            column: "+s.b+"\n         character: '"+s.c+"'\n    characterColor: "+s.d+"\n\n          pixelRow: "+s.e+"\n       pixelColumn: "+s.f+"\n         pixelIsOn: "+s.r+"\n    "}}
A.a8.prototype={
sU(a){var s,r,q,p=this
if(a<0){s=p.d=a
for(r=p.b,q=p.a;s<0;){s+=r
p.d=s
p.c=B.a.k(p.c-1,q)}}else{s=p.b
p.c=B.a.k(p.c+B.a.B(a,s),p.a)
p.d=B.a.k(a,s)}},
gt(){return this.c*this.b+this.d},
st(a){var s=this,r=s.b
s.c=B.a.k(B.a.B(a,r),s.a)
s.d=B.a.k(a,r)}}
A.bx.prototype={
b9(a,b,c,d,e,f,g){var s,r=this,q=self.document
q.onfocus=A.et(new A.c8(r))
q.onblur=A.et(new A.c9(r))
q=r.r
q.tabIndex=-1
q.style.display="block"
q.style.outline="none"
s=q.getContext("2d")
if(s==null)s=t.m.a(s)
s.imageSmoothingEnabled=!1
A.aK(q,"focus",new A.ca(r),!1)
A.aK(q,"blur",new A.cb(r),!1)
b.style.display="flex"
b.style.alignItems="flex-start"
b.style.padding="0"
b.style.margin="0"
b.style.width="fit-content"
b.style.height="fit-content"
b.style.background="gray"
b.appendChild(q)
r.ac(0)},
T(a,b){return new A.z(B.a.k(a,this.a),B.a.k(b,this.b))},
Y(){var s=this.w,r=s.getContext("2d")
if(r==null)r=t.m.a(r)
r.save()
r.beginPath()
r.clearRect(0,0,s.width,s.height)
r.restore()
return r},
a0(){var s=this.r.getContext("2d")
if(s==null)s=t.m.a(s)
s.save()
s.beginPath()
s.drawImage(this.w,0,0)
s.restore()
return s},
F(a,b,c,d){var s,r,q,p,o,n,m=this,l=a<0||a>=m.a||b<0||b>=m.b
if(l)return
s=m.T(a,b)
a=s.a
b=s.b
r=A.du(b)
q=r.a
p=B.a.K(1,r.b)
l=m.x
if(!(a>=0&&a<l.length))return A.d(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.d(l,q)
o=l[q]
l.$flags&2&&A.b3(l)
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
s=m.T(a,b)
a=s.a
b=s.b
r=A.du(b)
q=r.a
p=B.a.K(1,r.b)
l=m.x
if(!(a>=0&&a<l.length))return A.d(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.d(l,q)
o=l[q]
l.$flags&2&&A.b3(l)
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
aZ(a,b){var s,r,q,p,o=this.T(b,a)
b=o.a
s=A.du(o.b)
r=s.a
q=B.a.K(1,s.b)
p=this.x
if(!(b>=0&&b<p.length))return A.d(p,b)
p=p[b]
if(!(r>=0&&r<p.length))return A.d(p,r)
return(p[r]&q)>>>0>0},
aS(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
if(b==null)b=A.ds(0,0,i.b,i.a,t.S)
i.Y()
s=b.a
if(s===0&&b.b===0&&b.c===i.b&&b.d===i.a){for(s=i.x,r=s.length,q=0;q<r;++q)for(p=0;o=s[q],p<o.length;++p){o.$flags&2&&A.b3(o)
o[p]=0}s=i.w
r=s.getContext("2d")
if(r==null)r=t.m.a(r)
r.save()
r.fillStyle=i.f
r.fillRect(0,0,s.width,s.height)
r.restore()}else{r=i.a
n=B.a.k(b.b,r)
o=i.b
m=B.a.k(s,o)
s=Math.abs(b.d)
l=Math.min(n+s,r)
k=Math.min(m+s,o)
for(s=i.w,q=n;q<l;++q){j=B.a.k(q,r)
for(p=m;p<k;++p)i.F(j,B.a.k(p,o),s,!1)}}i.a0()},
ac(a){return this.aS(0,null)},
aI(a,b,c,d,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.Y()
s=e.T(a,b)
a=s.a
b=s.b
r=B.a.bs(1,a0)-1
for(q=a0-1,p=t.t,o=e.w,n=0;n<c.length;++n){m=c[n]
l=m&r
m=A.a([],p)
for(k=a+n,j=0;j<a0;++j){i=e.aZ(b+j,k)?1:0
m.push(B.a.K(i,q-j))}h=B.o.bx(m,0,new A.c7())
switch(a1){case B.t:for(j=0;j<a0;++j){m=b+j
if((B.a.A(l,q-j)&1)>0)e.G(k,m,d,o,!1)
else e.F(k,m,o,!1)}break
case B.e8:for(j=0;j<a0;++j){m=b+j
if((B.a.A(l,q-j)&1)>0)e.F(k,m,o,!1)
else e.G(k,m,d,o,!1)}break
case B.e9:for(j=0;j<a0;++j){g=q-j
if((B.a.A(l,g)&1)>0&&(B.a.b5(h,g)&1)===0)e.G(k,b+j,d,o,!1)}break
case B.u:for(j=0;j<a0;++j)if((B.a.A(l,q-j)&1)>0)e.G(k,b+j,d,o,!1)
break
case B.ea:for(f=l&h,j=0;j<a0;++j)if((B.a.A(f,q-j)&1)>0)e.G(k,b+j,d,o,!1)
break
case B.eb:for(f=l&h,j=0;j<a0;++j)if((B.a.A(f,q-j)&1)>0)e.F(k,b+j,o,!1)
break
case B.ec:for(f=l&h,j=0;j<a0;++j)if((B.a.A(f,q-j)&1)===0)e.F(k,b+j,o,!1)
break
case B.ed:for(f=l&h,j=0;j<a0;++j){m=b+j
if((B.a.A(f,q-j)&1)===0)e.F(k,m,o,!1)
else e.G(k,m,d,o,!1)}break}}e.a0()},
b_(a,b,c){this.aI(c.a,c.b,b,a,8,B.t,!0,!1,!1)},
b4(a){var s,r,q,p,o,n,m,l,k=this,j=k.a
a=B.a.k(a,j)
for(s=j-a,r=k.x,q=r.length,p=0;p<s;++p){if(!(p<q))return A.d(r,p)
o=p+a
n=0
for(;m=r[p],n<m.length;++n){if(!(o<q))return A.d(r,o)
l=r[o]
if(!(n<l.length))return A.d(l,n)
l=l[n]
m.$flags&2&&A.b3(m)
m[n]=l}}for(;p<j;++p){if(!(p<q))return A.d(r,p)
n=0
for(;o=r[p],n<o.length;++n){o.$flags&2&&A.b3(o)
o[n]=0}}k.Y()
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
k.a0()},
J(){var s=this.r
s.style.opacity="1.0"
s.focus()},
I(){var s=this.r
s.style.opacity="0.5"
s.blur()}}
A.c8.prototype={
$0(){this.a.y=!0},
$S:2}
A.c9.prototype={
$0(){this.a.y=!1},
$S:2}
A.ca.prototype={
$1(a){this.a.J()},
$S:1}
A.cb.prototype={
$1(a){this.a.I()},
$S:1}
A.c7.prototype={
$2(a,b){return(a|b)>>>0},
$S:17}
A.B.prototype={
aD(){return"Mode."+this.b}}
A.ac.prototype={
aD(){return"State."+this.b}}
A.cj.prototype={
ba(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=this,r=s.f
r.tabIndex=-1
A.aK(r,"focus",new A.ck(s),!1)
A.aK(r,"blur",new A.cl(s),!1)
A.aK(r,"keydown",new A.cm(s,l,new A.cq(),new A.cp(s)),!1)
A.aK(r,"click",new A.cn(s,new A.cr(s),o),!1)
A.fD(new A.bb(3e5),new A.co(s))
s.I()
s.ac(0)},
gae(){return this.w.gae()},
gaa(){return this.w.gaa()},
a9(a,b){return new A.z(B.a.k(a,this.a),B.a.k(b,this.b))},
aF(){var s=this,r=s.x
s.CW.D(0,new A.N(r.c,r.d," ","white"))
s.aP()
s.cy=!1},
aP(){var s,r,q,p,o,n,m,l,k,j,i,h=this
for(s=h.CW,r=A.fN(s,s.r,s.$ti.c),q=h.w,p=h.cx,o=8+h.c,n=r.$ti.c;r.E();){m=r.d
if(m==null)m=n.a(m)
l=m.a
k=m.b
if(p.ad(m.c)){j=p.p(0,m.c)
j.toString
i=j}else i=$.eT()
q.b_(m.d,i,new A.z(l*o,k*8))}if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.aG()}},
ap(a,b){var s,r=this.a9(b,a)
b=r.a
a=r.b
s=this.ch
if(!(b>=0&&b<s.length))return A.d(s,b)
s=s[b]
if(!(a>=0&&a<s.length))return A.d(s,a)
return s[a].c},
aW(){var s,r=this.x
r.sU(0)
s=r.c
if(s===this.a-1)this.au()
else r.c=B.a.k(s+1,r.a)},
au(){var s,r,q,p,o,n,m,l,k=this
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
l.d=m.d}for(m=k.d,n=0;n<r;++n){if(!(s>=0&&s<q.length))return A.d(q,s)
l=q[s]
if(!(n<l.length))return A.d(l,n)
l=l[n]
l.c=" "
l.d=m}k.w.b4(8+k.c)},
aY(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=a1==null?e.x.c:a1,c=e.a9(d,b==null?e.x.d:b)
d=e.x
s=d.a
d.c=B.a.k(c.a,s)
d.sU(c.b)
r=e.d
for(q=a.split(""),p=q.length,o=e.ch,n=e.CW,m=e.a-1,l=e.b-1,k=0;k<p;++k){j=q[k]
i=d.c
h=d.d
if(!(i>=0&&i<o.length))return A.d(o,i)
g=o[i]
if(!(h>=0&&h<g.length))return A.d(g,h)
f=g[h]
f.c=j
f.d=r
n.D(0,f)
if(i===m&&h===l){e.au()
d.c=B.a.k(d.c-1,s)}d.sU(d.d+1)}e.aP()
if(a0)e.aW()},
al(a,b,c){return this.aY(a,b,!0,c)},
aX(a,b){return this.aY(a,null,b,null)},
ac(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=t.S,e=A.ds(0,0,g.b,g.a,f)
for(s=e.b,r=e.d,q=e.$ti.c,p=q.a(s+r),o=e.a,n=e.c,m=o+n,l=g.ch,k=g.d,j=s;j<p;++j)for(q.a(m),i=o;i<m;++i){if(!(j<l.length))return A.d(l,j)
h=l[j]
if(!(i<h.length))return A.d(h,i)
h=h[i]
h.c=" "
h.d=k}q=8+g.c
g.w.aS(0,A.ds(o*8,s*q,n*8,r*q,f))
f=g.x
f.c=B.a.k(s,f.a)
f.sU(o)},
m(a,b,c,d){if(a==null)a=this.d
this.w.b_(a,c,new A.z(d*(8+this.c),b*8))},
b0(a,b,c){return this.m(null,a,b,c)},
J(){return this.gae().$0()},
I(){return this.gaa().$0()}}
A.cr.prototype={
$1(a){var s=this.a,r=s.w,q=J.dS(a.offsetX),p=Math.max(Math.min(B.a.B(J.dS(a.offsetY)-1,r.d),r.a-1),0),o=Math.max(Math.min(B.a.B(q-1,r.c),r.b-1),0),n=B.a.B(p,8+s.c),m=B.a.q(o,8),l=s.ap(m,n),k=s.a9(n,m),j=k.a,i=k.b
s=s.ch
if(!(j>=0&&j<s.length))return A.d(s,j)
s=s[j]
if(!(i>=0&&i<s.length))return A.d(s,i)
return new A.a6(n,m,l,s[i].d,p,o,r.aZ(o,p))},
$S:18}
A.cq.prototype={
$1(a){return new A.a5()},
$S:19}
A.cp.prototype={
$0(){var s,r,q,p,o,n=this.a,m=n.a,l=n.b,k=new A.a8(m,l)
k.st(n.y.gt())
s=A.a([],t.s)
for(r=n.z,q=r.b;p=k.c,o=k.d,p*l+o<r.c*q+r.d;p=k.c*l+k.d+1,k.c=B.a.k(B.a.B(p,l),m),k.d=B.a.k(p,l))s.push(n.ap(o,p))
return B.o.bB(s,"")},
$S:20}
A.ck.prototype={
$1(a){this.a.w.J()},
$S:1}
A.cl.prototype={
$1(a){this.a.w.I()},
$S:1}
A.cm.prototype={
$1(a){var s,r,q,p
a.preventDefault()
s=this.a
switch(s.ay){case B.c:break
case B.ee:r=s.at
if(r.d!=null){r.D(0,this.c.$1(a))
s.ay=B.c}break
case B.w:s.aF()
$label0$1:{q=a.keyCode
if(13===q){r=s.as
if(r.d!=null){r.D(0,J.f5(this.d.$0()))
s.aW()
s.ay=B.c}break $label0$1}if(8===q){r=s.x
if(r.gt()>s.y.gt()){r.st(r.gt()-1)
s.aX(" ",!1)
r.st(r.gt()-1)}break $label0$1}p=a.key
if(p.length===1&&s.x.gt()<s.z.gt())s.aX(p,!1)}break
case B.f:break}},
$S:1}
A.cn.prototype={
$1(a){var s
a.preventDefault()
s=this.a
if(s.ay===B.f&&s.ax.d!=null){s.ax.D(0,this.b.$1(a))
s.ay=B.c}},
$S:1}
A.co.prototype={
$1(a){var s,r=this.a,q=r.w
if(q.y&&J.al(self.document.activeElement,q.r)&&r.ay===B.w)if(r.cy)r.aF()
else{q=r.x
s=q.c
r.b0(q.d,$.eS(),s)
r.cy=!0}},
$S:21}
A.dk.prototype={}
A.bK.prototype={
ab(){var s=this,r=A.dZ(null,t.H)
if(s.b==null)return r
s.aO()
s.d=s.b=null
return r},
ak(a){var s,r=this
if(r.b==null)throw A.b(A.fA("Subscription has been canceled."))
r.aO()
s=A.eD(new A.cD(a),t.m)
s=s==null?null:A.eu(s)
r.d=s
r.aN()},
aN(){var s=this.d
if(s!=null)this.b.addEventListener(this.c,s,!1)},
aO(){var s=this.d
if(s!=null)this.b.removeEventListener(this.c,s,!1)}}
A.cC.prototype={
$1(a){return this.a.$1(a)},
$S:1}
A.cD.prototype={
$1(a){return this.a.$1(a)},
$S:1}
A.bY.prototype={
b8(){var s,r,q,p,o=this
for(s=o.b,r=o.a,q=0;q<16;++q){if(!(q<r.length))return A.d(r,q)
p=r[q]
if(!(q<s.length))return A.d(s,q)
s[q]=p
if(p===0){o.c=B.a.q(q,4)
o.d=B.a.k(q,4)}}},
av(a,b){var s,r,q,p,o,n,m,l,k=this,j=k.c,i=a===j
if(i||b===k.d){if(a<0||a>3||b<0||b>3)return
if(i){s=k.d
r=s>b?-1:1
for(i=k.b,q=a*4,p=i.length;s!==b;){o=q+s
n=o+r
if(!(o>=0&&o<p))return A.d(i,o)
m=i[o]
if(!(n>=0&&n<p))return A.d(i,n)
i[o]=i[n]
i[n]=m
s+=r}}else if(b===k.d){l=j>a?-1:1
for(i=k.b,q=i.length;j!==a;){p=j*4+b
j+=l
o=j*4+b
if(!(p>=0&&p<q))return A.d(i,p)
m=i[p]
if(!(o>=0&&o<q))return A.d(i,o)
i[p]=i[o]
i[o]=m}}k.c=a
k.d=b}},
b6(a){var s,r,q
for(a=0;a<250;++a){s=-1
r=-1
while(!0){if(!(s!==this.c&&r!==this.d))break
q=$.di()
s=q.V(4)
r=q.V(4)}this.av(s,r)}},
bA(){var s,r,q,p,o,n
for(s=this.b,r=s.length,q=this.a,p=q.length,o=0;o<16;++o){if(!(o<r))return A.d(s,o)
n=s[o]
if(!(o<p))return A.d(q,o)
if(n!==q[o])return!1}return!0},
aT(){var s,r,q,p,o,n,m,l,k=this
for(s=k.b,r=k.a,q=0;q<16;++q){p=B.a.q(q,4)
o=B.a.k(q,4)
n=p===k.c&&o===k.d
m=r.length
l=s.length
if(n){if(!(q<m))return A.d(r,q)
n=r[q]
if(!(q<l))return A.d(s,q)
A.eI(n,p,o,!1,s[q]===n)}else{if(!(q<l))return A.d(s,q)
n=s[q]
if(!(q<m))return A.d(r,q)
A.eI(n,p,o,!0,n===r[q])}}}};(function aliases(){var s=J.P.prototype
s.b7=s.h})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._static_2,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u
s(A,"hN","fI",3)
s(A,"hO","fJ",3)
s(A,"hP","fK",3)
r(A,"eF","hH",0)
s(A,"hQ","hB",5)
q(A,"hR","hC",6)
p(A.k.prototype,"gaC","C",6)
o(A.aJ.prototype,"gbn","bo",0)
var n
o(n=A.bx.prototype,"gae","J",0)
o(n,"gaa","I",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.e,null)
q(A.e,[A.dn,J.be,J.b5,A.j,A.W,A.cc,A.bj,A.ap,A.ag,A.ba,A.ct,A.c4,A.ao,A.aS,A.ax,A.c2,A.w,A.bL,A.bR,A.aU,A.bB,A.V,A.ad,A.bE,A.bD,A.R,A.k,A.bC,A.bI,A.bM,A.aJ,A.bP,A.d0,A.aD,A.cT,A.af,A.m,A.bb,A.cB,A.bu,A.aE,A.cE,A.q,A.bQ,A.by,A.cR,A.bO,A.N,A.a5,A.a6,A.a8,A.bx,A.cj,A.dk,A.bK,A.bY])
q(J.be,[J.bf,J.ar,J.at,J.as,J.au,J.a4,J.X])
q(J.at,[J.P,J.o,A.bk,A.aA])
q(J.P,[J.bv,J.Z,J.O])
r(J.c1,J.o)
q(J.a4,[J.aq,J.bg])
q(A.j,[A.bi,A.G,A.bh,A.bA,A.bG,A.bw,A.bJ,A.b6,A.x,A.aF,A.bz,A.Y,A.b8])
q(A.W,[A.bZ,A.c_,A.ci,A.d8,A.da,A.cy,A.cx,A.d1,A.cJ,A.cQ,A.cg,A.cf,A.cX,A.ca,A.cb,A.cr,A.cq,A.ck,A.cl,A.cm,A.cn,A.co,A.cC,A.cD])
q(A.bZ,[A.dd,A.cz,A.cA,A.cZ,A.cY,A.cF,A.cM,A.cL,A.cI,A.cH,A.cG,A.cP,A.cO,A.cN,A.ch,A.ce,A.cU,A.d3,A.d4,A.cW,A.c8,A.c9,A.cp])
r(A.bN,A.ag)
r(A.z,A.bN)
r(A.bc,A.ba)
r(A.aC,A.G)
q(A.ci,[A.cd,A.an])
r(A.aw,A.ax)
r(A.av,A.aw)
q(A.c_,[A.d9,A.d2,A.d5,A.cK,A.c3,A.c7])
q(A.aA,[A.bl,A.a7])
q(A.a7,[A.aM,A.aO])
r(A.aN,A.aM)
r(A.ay,A.aN)
r(A.aP,A.aO)
r(A.az,A.aP)
q(A.ay,[A.bm,A.bn])
q(A.az,[A.bo,A.bp,A.bq,A.br,A.bs,A.aB,A.bt])
r(A.aV,A.bJ)
r(A.aT,A.ad)
r(A.aI,A.aT)
r(A.a_,A.aI)
r(A.bF,A.bE)
r(A.aH,A.bF)
r(A.aG,A.bD)
r(A.bH,A.bI)
r(A.cV,A.d0)
r(A.aR,A.aD)
r(A.aL,A.aR)
q(A.x,[A.aa,A.bd])
r(A.ab,A.bO)
q(A.cB,[A.B,A.ac])
s(A.aM,A.m)
s(A.aN,A.ap)
s(A.aO,A.m)
s(A.aP,A.ap)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{c:"int",r:"double",ic:"num",C:"String",hS:"bool",q:"Null",i:"List",e:"Object",ip:"Map"},mangledNames:{},types:["~()","~(l)","q()","~(~())","q(@)","~(@)","~(e,y)","F<~>()","@(@)","@(@,C)","@(C)","q(~())","q(@,y)","~(c,@)","q(e,y)","k<@>(@)","~(e?,e?)","c(c,c)","a6(l)","a5(l)","C()","~(cs)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.z&&a.b(c.a)&&b.b(c.b)}}
A.h3(v.typeUniverse,JSON.parse('{"bv":"P","Z":"P","O":"P","bf":{"f":[]},"ar":{"q":[],"f":[]},"at":{"l":[]},"P":{"l":[]},"o":{"i":["1"],"l":[]},"c1":{"o":["1"],"i":["1"],"l":[]},"a4":{"r":[]},"aq":{"r":[],"c":[],"f":[]},"bg":{"r":[],"f":[]},"X":{"C":[],"f":[]},"bi":{"j":[]},"aC":{"G":[],"j":[]},"bh":{"j":[]},"bA":{"j":[]},"aS":{"y":[]},"bG":{"j":[]},"bw":{"j":[]},"aw":{"ax":["1","2"]},"av":{"aw":["1","2"],"ax":["1","2"]},"bk":{"l":[],"f":[]},"aA":{"l":[]},"bl":{"l":[],"f":[]},"a7":{"v":["1"],"l":[]},"ay":{"m":["r"],"i":["r"],"v":["r"],"l":[]},"az":{"m":["c"],"i":["c"],"v":["c"],"l":[]},"bm":{"m":["r"],"i":["r"],"v":["r"],"l":[],"f":[],"m.E":"r"},"bn":{"m":["r"],"i":["r"],"v":["r"],"l":[],"f":[],"m.E":"r"},"bo":{"m":["c"],"i":["c"],"v":["c"],"l":[],"f":[],"m.E":"c"},"bp":{"m":["c"],"i":["c"],"v":["c"],"l":[],"f":[],"m.E":"c"},"bq":{"m":["c"],"i":["c"],"v":["c"],"l":[],"f":[],"m.E":"c"},"br":{"m":["c"],"i":["c"],"v":["c"],"l":[],"f":[],"m.E":"c"},"bs":{"cv":[],"m":["c"],"i":["c"],"v":["c"],"l":[],"f":[],"m.E":"c"},"aB":{"m":["c"],"i":["c"],"v":["c"],"l":[],"f":[],"m.E":"c"},"bt":{"m":["c"],"i":["c"],"v":["c"],"l":[],"f":[],"m.E":"c"},"bJ":{"j":[]},"aV":{"G":[],"j":[]},"k":{"F":["1"]},"aU":{"cs":[]},"V":{"j":[]},"a_":{"ad":["1"]},"aG":{"bD":["1"]},"aI":{"ad":["1"]},"aT":{"ad":["1"]},"aL":{"aD":["1"]},"aR":{"aD":["1"]},"b6":{"j":[]},"G":{"j":[]},"x":{"j":[]},"aa":{"j":[]},"bd":{"j":[]},"aF":{"j":[]},"bz":{"j":[]},"Y":{"j":[]},"b8":{"j":[]},"bu":{"j":[]},"aE":{"j":[]},"bQ":{"y":[]},"ab":{"bO":["1"]},"fl":{"i":["c"]},"fG":{"i":["c"]},"fF":{"i":["c"]},"fj":{"i":["c"]},"fE":{"i":["c"]},"fk":{"i":["c"]},"cv":{"i":["c"]},"fg":{"i":["r"]},"fh":{"i":["r"]}}'))
A.h2(v.typeUniverse,JSON.parse('{"ap":1,"ba":2,"a7":1,"aI":1,"bF":1,"bE":1,"aT":1,"bI":1,"bH":1,"bM":1,"aJ":1,"bP":1,"aR":1,"bK":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.d7
return{o:s("N"),Q:s("j"),Z:s("im"),U:s("o<N>"),G:s("o<i<N>>"),f:s("o<e>"),s:s("o<C>"),w:s("o<cv>"),b:s("o<@>"),t:s("o<c>"),T:s("ar"),m:s("l"),g:s("O"),p:s("v<@>"),V:s("a5"),j:s("i<@>"),q:s("a6"),P:s("q"),K:s("e"),L:s("iq"),F:s("+()"),l:s("y"),N:s("C"),D:s("cs"),R:s("f"),c:s("G"),B:s("Z"),d:s("k<@>"),a:s("k<c>"),y:s("hS"),i:s("r"),z:s("@"),v:s("@(e)"),C:s("@(e,y)"),S:s("c"),A:s("0&*"),_:s("e*"),O:s("F<q>?"),X:s("e?"),n:s("ic"),H:s("~"),u:s("~(e)"),k:s("~(e,y)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.G=J.be.prototype
B.o=J.o.prototype
B.a=J.aq.prototype
B.H=J.a4.prototype
B.p=J.X.prototype
B.I=J.O.prototype
B.J=J.at.prototype
B.v=J.bv.prototype
B.l=J.Z.prototype
B.m=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.x=function() {
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
B.C=function(getTagFallback) {
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
B.y=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.B=function(hooks) {
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
B.A=function(hooks) {
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
B.z=function(hooks) {
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

B.D=new A.bu()
B.d=new A.cc()
B.E=new A.cR()
B.b=new A.cV()
B.F=new A.bQ()
B.e=A.a(s([255,255,255,255,255,255,255,255]),t.t)
B.h=A.a(s([255,255,255,255,0,0,0,0]),t.t)
B.i=A.a(s([0,0,0,0,255,255,255,255]),t.t)
B.q=A.a(s([0,0,0,0,0,0,0,0]),t.t)
B.af=A.a(s([0,0,0,0,15,15,15,15]),t.t)
B.ag=A.a(s([0,0,0,0,240,240,240,240]),t.t)
B.cF=A.a(s([15,15,15,15,0,0,0,0]),t.t)
B.j=A.a(s([15,15,15,15,15,15,15,15]),t.t)
B.cQ=A.a(s([240,240,240,240,0,0,0,0]),t.t)
B.k=A.a(s([240,240,240,240,240,240,240,240]),t.t)
B.e2=A.a(s([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),t.t)
B.e_=A.a(s([2016,6168,8196,16386,18450,34833,32769,32769,34833,34833,33825,17346,16386,8196,6168,2016]),t.t)
B.ac=A.a(s([2016,6168,8196,16386,18450,34833,32769,32769,32769,33153,33153,16770,16770,8196,6168,2016]),t.t)
B.a0=A.a(s([2016,6168,8196,16386,21546,34833,37929,32769,32769,32769,32769,16770,16770,8196,6168,2016]),t.t)
B.dV=A.a(s([2016,6168,8196,16386,16386,34833,34833,32769,32769,32769,32769,20466,16386,8196,6168,2016]),t.t)
B.dT=A.a(s([2016,6168,8196,16386,16386,34817,34873,32769,32769,32801,32801,18370,16386,8196,6168,2016]),t.t)
B.e1=A.a(s([2016,6168,8196,16386,16386,32769,34833,32769,32769,32769,38937,17442,17346,8196,6168,2016]),t.t)
B.O=A.a(s([2016,6168,8196,16386,16386,32769,38937,32769,32769,36273,36849,18402,17346,8196,6168,2016]),t.t)
B.P=A.a(s([2016,6168,8196,16386,32766,48765,40569,32769,32769,33729,32769,16386,16386,8196,6168,2016]),t.t)
B.dW=A.a(s([2016,6168,8196,16386,16386,34833,32769,32769,32769,32769,32769,18018,18834,8196,6168,2016]),t.t)
B.a9=A.a(s([2016,6168,8196,16386,21546,34833,37929,32769,32769,32769,32769,17346,16386,8196,6168,2016]),t.t)
B.dZ=A.a(s([2016,6168,8196,16386,16386,35889,32769,32769,32769,32769,33825,17346,16386,8196,6168,2016]),t.t)
B.T=A.a(s([2016,6168,8196,16386,19506,35889,35889,32769,32769,32769,33729,17346,17346,8196,6168,2016]),t.t)
B.e5=A.a(s([2016,6168,8196,16386,16386,34833,36873,32769,32769,33729,34785,20466,20466,8196,6168,2016]),t.t)
B.ab=A.a(s([2016,6168,8196,16386,16386,34833,32769,32769,32769,32817,33217,17922,16386,8196,6168,2016]),t.t)
B.ad=A.a(s([2016,6168,8196,16386,16386,34833,33825,32769,32769,32769,32769,18402,16386,8196,6168,2016]),t.t)
B.K=A.a(s([2016,6168,8196,16386,16386,34833,34833,32769,32769,33153,33345,16962,16770,8196,6168,2016]),t.t)
B.dY=A.a(s([2016,6168,8196,16386,16386,35889,32769,32769,32769,34785,33345,16962,16770,8196,6168,2016]),t.t)
B.S=A.a(s([2016,6168,8196,16386,17442,35889,32769,36873,33729,38889,34785,22506,18402,8196,6168,2016]),t.t)
B.e3=A.a(s([2016,6168,8196,16386,18450,33825,32769,32769,34785,34833,36849,18450,18402,8196,6168,2016]),t.t)
B.dU=A.a(s([2016,6168,8196,16386,16386,35889,32769,32769,32769,32769,32785,16610,16386,8196,6168,2016]),t.t)
B.a8=A.a(s([2016,6168,8196,16386,16386,34833,34833,32769,32769,36849,36849,18402,17346,8196,6168,2016]),t.t)
B.aa=A.a(s([2016,6168,8196,16386,18450,33825,34833,32769,32769,36849,36849,18402,17346,8196,6168,2016]),t.t)
B.r=A.a(s([B.e2,B.e_,B.ac,B.a0,B.dV,B.dT,B.e1,B.O,B.P,B.dW,B.a9,B.dZ,B.T,B.e5,B.ab,B.ad,B.K,B.dY,B.S,B.e3,B.dU,B.a8,B.aa]),A.d7("o<i<c>>"))
B.da=A.a(s([126,129,165,129,189,153,129,126]),t.t)
B.e0=A.a(s([126,255,219,255,195,231,255,126]),t.t)
B.dl=A.a(s([108,254,254,254,124,56,16,0]),t.t)
B.dx=A.a(s([16,56,124,254,124,56,16,0]),t.t)
B.dI=A.a(s([56,124,56,254,254,124,56,124]),t.t)
B.ah=A.a(s([16,16,56,124,254,124,56,124]),t.t)
B.as=A.a(s([0,0,24,60,60,24,0,0]),t.t)
B.L=A.a(s([255,255,231,195,195,231,255,255]),t.t)
B.aD=A.a(s([0,60,102,66,66,102,60,0]),t.t)
B.e6=A.a(s([255,195,153,189,189,153,195,255]),t.t)
B.aO=A.a(s([15,7,15,125,204,204,204,120]),t.t)
B.aZ=A.a(s([60,102,102,102,60,24,126,24]),t.t)
B.b9=A.a(s([63,51,63,48,48,112,240,224]),t.t)
B.bk=A.a(s([127,99,127,99,99,103,230,192]),t.t)
B.e4=A.a(s([153,90,60,231,231,60,90,153]),t.t)
B.bv=A.a(s([128,224,248,254,248,224,128,0]),t.t)
B.bG=A.a(s([2,14,62,254,62,14,2,0]),t.t)
B.bR=A.a(s([24,60,126,24,24,126,60,24]),t.t)
B.c1=A.a(s([102,102,102,102,102,0,102,0]),t.t)
B.cc=A.a(s([127,219,219,123,27,27,27,0]),t.t)
B.cn=A.a(s([62,99,56,108,108,56,204,120]),t.t)
B.cy=A.a(s([0,0,0,0,126,126,126,0]),t.t)
B.Q=A.a(s([24,60,126,24,126,60,24,255]),t.t)
B.cz=A.a(s([24,60,126,24,24,24,24,0]),t.t)
B.cA=A.a(s([24,24,24,24,126,60,24,0]),t.t)
B.cB=A.a(s([0,24,12,254,12,24,0,0]),t.t)
B.cC=A.a(s([0,48,96,254,96,48,0,0]),t.t)
B.cD=A.a(s([0,0,192,192,192,254,0,0]),t.t)
B.M=A.a(s([0,36,102,255,102,36,0,0]),t.t)
B.dX=A.a(s([0,24,60,126,255,255,0,0]),t.t)
B.ae=A.a(s([0,255,255,126,60,24,0,0]),t.t)
B.cE=A.a(s([48,120,120,48,48,0,48,0]),t.t)
B.cG=A.a(s([108,108,108,0,0,0,0,0]),t.t)
B.cH=A.a(s([108,108,254,108,254,108,108,0]),t.t)
B.cI=A.a(s([48,124,192,120,12,248,48,0]),t.t)
B.cJ=A.a(s([0,198,204,24,48,102,198,0]),t.t)
B.cK=A.a(s([56,108,56,118,220,204,118,0]),t.t)
B.cL=A.a(s([96,96,192,0,0,0,0,0]),t.t)
B.cM=A.a(s([24,48,96,96,96,48,24,0]),t.t)
B.cN=A.a(s([96,48,24,24,24,48,96,0]),t.t)
B.N=A.a(s([0,102,60,255,60,102,0,0]),t.t)
B.cO=A.a(s([0,48,48,252,48,48,0,0]),t.t)
B.cP=A.a(s([0,0,0,0,0,48,48,96]),t.t)
B.cR=A.a(s([0,0,0,252,0,0,0,0]),t.t)
B.cS=A.a(s([0,0,0,0,0,48,48,0]),t.t)
B.cT=A.a(s([6,12,24,48,96,192,128,0]),t.t)
B.cU=A.a(s([124,198,206,222,246,230,124,0]),t.t)
B.cV=A.a(s([48,112,48,48,48,48,252,0]),t.t)
B.cW=A.a(s([120,204,12,56,96,204,252,0]),t.t)
B.cX=A.a(s([120,204,12,56,12,204,120,0]),t.t)
B.cY=A.a(s([28,60,108,204,254,12,30,0]),t.t)
B.cZ=A.a(s([252,192,248,12,12,204,120,0]),t.t)
B.d_=A.a(s([56,96,192,248,204,204,120,0]),t.t)
B.d0=A.a(s([252,204,12,24,48,48,48,0]),t.t)
B.d1=A.a(s([120,204,204,120,204,204,120,0]),t.t)
B.d2=A.a(s([120,204,204,124,12,24,112,0]),t.t)
B.d3=A.a(s([0,48,48,0,0,48,48,0]),t.t)
B.d4=A.a(s([0,48,48,0,0,48,48,96]),t.t)
B.d5=A.a(s([24,48,96,192,96,48,24,0]),t.t)
B.d6=A.a(s([0,0,252,0,0,252,0,0]),t.t)
B.d7=A.a(s([96,48,24,12,24,48,96,0]),t.t)
B.d8=A.a(s([120,204,12,24,48,0,48,0]),t.t)
B.d9=A.a(s([124,198,222,222,222,192,120,0]),t.t)
B.db=A.a(s([48,120,204,204,252,204,204,0]),t.t)
B.dc=A.a(s([252,102,102,124,102,102,252,0]),t.t)
B.dd=A.a(s([60,102,192,192,192,102,60,0]),t.t)
B.de=A.a(s([248,108,102,102,102,108,248,0]),t.t)
B.df=A.a(s([254,98,104,120,104,98,254,0]),t.t)
B.dg=A.a(s([254,98,104,120,104,96,240,0]),t.t)
B.dh=A.a(s([60,102,192,192,206,102,62,0]),t.t)
B.di=A.a(s([204,204,204,252,204,204,204,0]),t.t)
B.dj=A.a(s([120,48,48,48,48,48,120,0]),t.t)
B.dk=A.a(s([30,12,12,12,204,204,120,0]),t.t)
B.dm=A.a(s([230,102,108,120,108,102,230,0]),t.t)
B.dn=A.a(s([240,96,96,96,98,102,254,0]),t.t)
B.dp=A.a(s([198,238,254,254,214,198,198,0]),t.t)
B.dq=A.a(s([198,230,246,222,206,198,198,0]),t.t)
B.dr=A.a(s([56,108,198,198,198,108,56,0]),t.t)
B.ds=A.a(s([252,102,102,124,96,96,240,0]),t.t)
B.dt=A.a(s([120,204,204,204,220,120,28,0]),t.t)
B.du=A.a(s([252,102,102,124,108,102,230,0]),t.t)
B.dv=A.a(s([120,204,224,112,28,204,120,0]),t.t)
B.dw=A.a(s([252,180,48,48,48,48,120,0]),t.t)
B.dy=A.a(s([204,204,204,204,204,204,252,0]),t.t)
B.dz=A.a(s([204,204,204,204,204,120,48,0]),t.t)
B.dA=A.a(s([198,198,198,214,254,238,198,0]),t.t)
B.dB=A.a(s([198,198,108,56,56,108,198,0]),t.t)
B.dC=A.a(s([204,204,204,120,48,48,120,0]),t.t)
B.dD=A.a(s([254,198,140,24,50,102,254,0]),t.t)
B.dE=A.a(s([120,96,96,96,96,96,120,0]),t.t)
B.dF=A.a(s([192,96,48,24,12,6,2,0]),t.t)
B.dG=A.a(s([120,24,24,24,24,24,120,0]),t.t)
B.dH=A.a(s([16,56,108,198,0,0,0,0]),t.t)
B.R=A.a(s([0,0,0,0,0,0,0,255]),t.t)
B.dJ=A.a(s([48,48,24,0,0,0,0,0]),t.t)
B.dK=A.a(s([0,0,120,12,124,204,118,0]),t.t)
B.dL=A.a(s([224,96,96,124,102,102,220,0]),t.t)
B.dM=A.a(s([0,0,120,204,192,204,120,0]),t.t)
B.dN=A.a(s([28,12,12,124,204,204,118,0]),t.t)
B.dO=A.a(s([0,0,120,204,252,192,120,0]),t.t)
B.dP=A.a(s([56,108,96,240,96,96,240,0]),t.t)
B.dQ=A.a(s([0,0,118,204,204,124,12,248]),t.t)
B.dR=A.a(s([224,96,108,118,102,102,230,0]),t.t)
B.dS=A.a(s([48,0,112,48,48,48,120,0]),t.t)
B.ai=A.a(s([12,0,12,12,12,204,204,120]),t.t)
B.aj=A.a(s([224,96,102,108,120,108,230,0]),t.t)
B.ak=A.a(s([112,48,48,48,48,48,120,0]),t.t)
B.al=A.a(s([0,0,204,254,254,214,198,0]),t.t)
B.am=A.a(s([0,0,248,204,204,204,204,0]),t.t)
B.an=A.a(s([0,0,120,204,204,204,120,0]),t.t)
B.ao=A.a(s([0,0,220,102,102,124,96,240]),t.t)
B.ap=A.a(s([0,0,118,204,204,124,12,30]),t.t)
B.aq=A.a(s([0,0,220,118,102,96,240,0]),t.t)
B.ar=A.a(s([0,0,124,192,120,12,248,0]),t.t)
B.at=A.a(s([16,48,124,48,48,52,24,0]),t.t)
B.au=A.a(s([0,0,204,204,204,204,118,0]),t.t)
B.av=A.a(s([0,0,204,204,204,120,48,0]),t.t)
B.aw=A.a(s([0,0,198,214,254,254,108,0]),t.t)
B.ax=A.a(s([0,0,198,108,56,108,198,0]),t.t)
B.ay=A.a(s([0,0,204,204,204,124,12,248]),t.t)
B.az=A.a(s([0,0,252,152,48,100,252,0]),t.t)
B.aA=A.a(s([28,48,48,224,48,48,28,0]),t.t)
B.aB=A.a(s([24,24,24,0,24,24,24,0]),t.t)
B.aC=A.a(s([224,48,48,28,48,48,224,0]),t.t)
B.aE=A.a(s([118,220,0,0,0,0,0,0]),t.t)
B.aF=A.a(s([0,16,56,108,198,198,254,0]),t.t)
B.aG=A.a(s([120,204,192,204,120,24,12,120]),t.t)
B.aH=A.a(s([0,204,0,204,204,204,126,0]),t.t)
B.aI=A.a(s([28,0,120,204,252,192,120,0]),t.t)
B.aJ=A.a(s([126,195,60,6,62,102,63,0]),t.t)
B.aK=A.a(s([204,0,120,12,124,204,126,0]),t.t)
B.aL=A.a(s([224,0,120,12,124,204,126,0]),t.t)
B.aM=A.a(s([48,48,120,12,124,204,126,0]),t.t)
B.aN=A.a(s([0,0,120,192,192,120,12,56]),t.t)
B.aP=A.a(s([126,195,60,102,126,96,60,0]),t.t)
B.aQ=A.a(s([204,0,120,204,252,192,120,0]),t.t)
B.aR=A.a(s([224,0,120,204,252,192,120,0]),t.t)
B.aS=A.a(s([204,0,112,48,48,48,120,0]),t.t)
B.aT=A.a(s([124,198,56,24,24,24,60,0]),t.t)
B.aU=A.a(s([224,0,112,48,48,48,120,0]),t.t)
B.aV=A.a(s([198,56,108,198,254,198,198,0]),t.t)
B.aW=A.a(s([48,48,0,120,204,252,204,0]),t.t)
B.aX=A.a(s([28,0,252,96,120,96,252,0]),t.t)
B.aY=A.a(s([0,0,127,12,127,204,127,0]),t.t)
B.b_=A.a(s([62,108,204,254,204,204,206,0]),t.t)
B.b0=A.a(s([120,204,0,120,204,204,120,0]),t.t)
B.b1=A.a(s([0,204,0,120,204,204,120,0]),t.t)
B.b2=A.a(s([0,224,0,120,204,204,120,0]),t.t)
B.b3=A.a(s([120,204,0,204,204,204,126,0]),t.t)
B.b4=A.a(s([0,224,0,204,204,204,126,0]),t.t)
B.b5=A.a(s([0,204,0,204,204,124,12,248]),t.t)
B.b6=A.a(s([195,24,60,102,102,60,24,0]),t.t)
B.b7=A.a(s([204,0,204,204,204,204,120,0]),t.t)
B.b8=A.a(s([24,24,126,192,192,126,24,24]),t.t)
B.ba=A.a(s([56,108,100,240,96,230,252,0]),t.t)
B.bb=A.a(s([204,204,120,252,48,252,48,48]),t.t)
B.bc=A.a(s([248,204,204,250,198,207,198,199]),t.t)
B.bd=A.a(s([14,27,24,60,24,24,216,112]),t.t)
B.be=A.a(s([28,0,120,12,124,204,126,0]),t.t)
B.bf=A.a(s([56,0,112,48,48,48,120,0]),t.t)
B.bg=A.a(s([0,28,0,120,204,204,120,0]),t.t)
B.bh=A.a(s([0,28,0,204,204,204,126,0]),t.t)
B.bi=A.a(s([0,248,0,248,204,204,204,0]),t.t)
B.bj=A.a(s([252,0,204,236,252,220,204,0]),t.t)
B.bl=A.a(s([60,108,108,62,0,126,0,0]),t.t)
B.bm=A.a(s([56,108,108,56,0,124,0,0]),t.t)
B.bn=A.a(s([48,0,48,96,192,204,120,0]),t.t)
B.bo=A.a(s([0,0,0,252,192,192,0,0]),t.t)
B.bp=A.a(s([0,0,0,252,12,12,0,0]),t.t)
B.bq=A.a(s([195,198,204,222,51,102,204,15]),t.t)
B.br=A.a(s([195,198,204,219,55,111,207,3]),t.t)
B.bs=A.a(s([24,24,0,24,24,24,24,0]),t.t)
B.bt=A.a(s([0,51,102,204,102,51,0,0]),t.t)
B.bu=A.a(s([0,204,102,51,102,204,0,0]),t.t)
B.bw=A.a(s([34,136,34,136,34,136,34,136]),t.t)
B.bx=A.a(s([85,170,85,170,85,170,85,170]),t.t)
B.by=A.a(s([219,119,219,238,219,119,219,238]),t.t)
B.bz=A.a(s([24,24,24,24,24,24,24,24]),t.t)
B.bA=A.a(s([24,24,24,24,248,24,24,24]),t.t)
B.bB=A.a(s([24,24,248,24,248,24,24,24]),t.t)
B.bC=A.a(s([54,54,54,54,246,54,54,54]),t.t)
B.bD=A.a(s([0,0,0,0,254,54,54,54]),t.t)
B.bE=A.a(s([0,0,248,24,248,24,24,24]),t.t)
B.bF=A.a(s([54,54,246,6,246,54,54,54]),t.t)
B.bH=A.a(s([54,54,54,54,54,54,54,54]),t.t)
B.bI=A.a(s([0,0,254,6,246,54,54,54]),t.t)
B.bJ=A.a(s([54,54,246,6,254,0,0,0]),t.t)
B.bK=A.a(s([54,54,54,54,254,0,0,0]),t.t)
B.bL=A.a(s([24,24,248,24,248,0,0,0]),t.t)
B.bM=A.a(s([0,0,0,0,248,24,24,24]),t.t)
B.bN=A.a(s([24,24,24,24,31,0,0,0]),t.t)
B.a1=A.a(s([24,24,24,24,255,0,0,0]),t.t)
B.a2=A.a(s([0,0,0,0,255,24,24,24]),t.t)
B.bO=A.a(s([24,24,24,24,31,24,24,24]),t.t)
B.a3=A.a(s([0,0,0,0,255,0,0,0]),t.t)
B.a4=A.a(s([24,24,24,24,255,24,24,24]),t.t)
B.bP=A.a(s([24,24,31,24,31,24,24,24]),t.t)
B.bQ=A.a(s([54,54,54,54,55,54,54,54]),t.t)
B.bS=A.a(s([54,54,55,48,63,0,0,0]),t.t)
B.bT=A.a(s([0,0,63,48,55,54,54,54]),t.t)
B.U=A.a(s([54,54,247,0,255,0,0,0]),t.t)
B.V=A.a(s([0,0,255,0,247,54,54,54]),t.t)
B.bU=A.a(s([54,54,55,48,55,54,54,54]),t.t)
B.W=A.a(s([0,0,255,0,255,0,0,0]),t.t)
B.X=A.a(s([54,54,247,0,247,54,54,54]),t.t)
B.Y=A.a(s([24,24,255,0,255,0,0,0]),t.t)
B.a5=A.a(s([54,54,54,54,255,0,0,0]),t.t)
B.Z=A.a(s([0,0,255,0,255,24,24,24]),t.t)
B.a6=A.a(s([0,0,0,0,255,54,54,54]),t.t)
B.bV=A.a(s([54,54,54,54,63,0,0,0]),t.t)
B.bW=A.a(s([24,24,31,24,31,0,0,0]),t.t)
B.bX=A.a(s([0,0,31,24,31,24,24,24]),t.t)
B.bY=A.a(s([0,0,0,0,63,54,54,54]),t.t)
B.a7=A.a(s([54,54,54,54,255,54,54,54]),t.t)
B.a_=A.a(s([24,24,255,24,255,24,24,24]),t.t)
B.bZ=A.a(s([24,24,24,24,248,0,0,0]),t.t)
B.c_=A.a(s([0,0,0,0,31,24,24,24]),t.t)
B.c0=A.a(s([0,0,118,220,200,220,118,0]),t.t)
B.c2=A.a(s([0,120,204,248,204,248,192,192]),t.t)
B.c3=A.a(s([0,252,204,192,192,192,192,0]),t.t)
B.c4=A.a(s([0,254,108,108,108,108,108,0]),t.t)
B.c5=A.a(s([252,204,96,48,96,204,252,0]),t.t)
B.c6=A.a(s([0,0,126,216,216,216,112,0]),t.t)
B.c7=A.a(s([0,102,102,102,102,124,96,192]),t.t)
B.c8=A.a(s([0,118,220,24,24,24,24,0]),t.t)
B.c9=A.a(s([252,48,120,204,204,120,48,252]),t.t)
B.ca=A.a(s([56,108,198,254,198,108,56,0]),t.t)
B.cb=A.a(s([56,108,198,198,108,108,238,0]),t.t)
B.cd=A.a(s([28,48,24,124,204,204,120,0]),t.t)
B.ce=A.a(s([0,0,126,219,219,126,0,0]),t.t)
B.cf=A.a(s([6,12,126,219,219,126,96,192]),t.t)
B.cg=A.a(s([56,96,192,248,192,96,56,0]),t.t)
B.ch=A.a(s([120,204,204,204,204,204,204,0]),t.t)
B.ci=A.a(s([0,252,0,252,0,252,0,0]),t.t)
B.cj=A.a(s([48,48,252,48,48,0,252,0]),t.t)
B.ck=A.a(s([96,48,24,48,96,0,252,0]),t.t)
B.cl=A.a(s([24,48,96,48,24,0,252,0]),t.t)
B.cm=A.a(s([14,27,27,24,24,24,24,24]),t.t)
B.co=A.a(s([24,24,24,24,24,216,216,112]),t.t)
B.cp=A.a(s([48,48,0,252,0,48,48,0]),t.t)
B.cq=A.a(s([0,118,220,0,118,220,0,0]),t.t)
B.cr=A.a(s([56,108,108,56,0,0,0,0]),t.t)
B.cs=A.a(s([0,0,0,24,24,0,0,0]),t.t)
B.ct=A.a(s([0,0,0,0,24,0,0,0]),t.t)
B.cu=A.a(s([15,12,12,12,236,108,60,28]),t.t)
B.cv=A.a(s([120,108,108,108,108,0,0,0]),t.t)
B.cw=A.a(s([112,24,48,96,120,0,0,0]),t.t)
B.cx=A.a(s([0,0,60,60,60,60,0,0]),t.t)
B.e7=new A.bc(["\u263a",B.da,"\u263b",B.e0,"\u2665",B.dl,"\u2666",B.dx,"\u2663",B.dI,"\u2660",B.ah,"\u2022",B.as,"\u25d8",B.L,"\u25cb",B.aD,"\u25d9",B.e6,"\u2642",B.aO,"\u2640",B.aZ,"\u266a",B.b9,"\u266b",B.bk,"\u263c",B.e4,"\u25ba",B.bv,"\u25c4",B.bG,"\u2195",B.bR,"\u203c",B.c1,"\xb6",B.cc,"\xa7",B.cn,"\u25ac",B.cy,"\u21a8",B.Q,"\u2191",B.cz,"\u2193",B.cA,"\u2192",B.cB,"\u2190",B.cC,"\u221f",B.cD,"\u2194",B.M,"\u25b2",B.dX,"\u25bc",B.ae," ",B.q,"!",B.cE,'"',B.cG,"#",B.cH,"$",B.cI,"%",B.cJ,"&",B.cK,"'",B.cL,"(",B.cM,")",B.cN,"*",B.N,"+",B.cO,",",B.cP,"-",B.cR,".",B.cS,"/",B.cT,"0",B.cU,"1",B.cV,"2",B.cW,"3",B.cX,"4",B.cY,"5",B.cZ,"6",B.d_,"7",B.d0,"8",B.d1,"9",B.d2,":",B.d3,";",B.d4,"<",B.d5,"=",B.d6,">",B.d7,"?",B.d8,"@",B.d9,"A",B.db,"B",B.dc,"C",B.dd,"D",B.de,"E",B.df,"F",B.dg,"G",B.dh,"H",B.di,"I",B.dj,"J",B.dk,"K",B.dm,"L",B.dn,"M",B.dp,"N",B.dq,"O",B.dr,"P",B.ds,"Q",B.dt,"R",B.du,"S",B.dv,"T",B.dw,"U",B.dy,"V",B.dz,"W",B.dA,"X",B.dB,"Y",B.dC,"Z",B.dD,"[",B.dE,"\\",B.dF,"]",B.dG,"^",B.dH,"_",B.R,"`",B.dJ,"a",B.dK,"b",B.dL,"c",B.dM,"d",B.dN,"e",B.dO,"f",B.dP,"g",B.dQ,"h",B.dR,"i",B.dS,"j",B.ai,"k",B.aj,"l",B.ak,"m",B.al,"n",B.am,"o",B.an,"p",B.ao,"q",B.ap,"r",B.aq,"s",B.ar,"t",B.at,"u",B.au,"v",B.av,"w",B.aw,"x",B.ax,"y",B.ay,"z",B.az,"{",B.aA,"|",B.aB,"}",B.aC,"~",B.aE,"\u2302",B.aF,"\xc7",B.aG,"\xfc",B.aH,"\xe9",B.aI,"\xe2",B.aJ,"\xe4",B.aK,"\xe0",B.aL,"\xe5",B.aM,"\xe7",B.aN,"\xea",B.aP,"\xeb",B.aQ,"\xe8",B.aR,"\xef",B.aS,"\xee",B.aT,"\xec",B.aU,"\xc4",B.aV,"\xc5",B.aW,"\xc9",B.aX,"\xe6",B.aY,"\xc6",B.b_,"\xf4",B.b0,"\xf6",B.b1,"\xf2",B.b2,"\xfb",B.b3,"\xf9",B.b4,"\xff",B.b5,"\xd6",B.b6,"\xdc",B.b7,"\xa2",B.b8,"\xa3",B.ba,"\xa5",B.bb,"\u20a7",B.bc,"\u0192",B.bd,"\xe1",B.be,"\xed",B.bf,"\xf3",B.bg,"\xfa",B.bh,"\xf1",B.bi,"\xd1",B.bj,"\xaa",B.bl,"\xba",B.bm,"\xbf",B.bn,"\u2310",B.bo,"\xac",B.bp,"\xbd",B.bq,"\xbc",B.br,"\xa1",B.bs,"\xab",B.bt,"\xbb",B.bu,"\u2591",B.bw,"\u2592",B.bx,"\u2593",B.by,"\u2502",B.bz,"\u2524",B.bA,"\u2561",B.bB,"\u2562",B.bC,"\u2556",B.bD,"\u2555",B.bE,"\u2563",B.bF,"\u2551",B.bH,"\u2557",B.bI,"\u255d",B.bJ,"\u255c",B.bK,"\u255b",B.bL,"\u2510",B.bM,"\u2514",B.bN,"\u2534",B.a1,"\u252c",B.a2,"\u251c",B.bO,"\u2500",B.a3,"\u253c",B.a4,"\u255e",B.bP,"\u255f",B.bQ,"\u255a",B.bS,"\u2554",B.bT,"\u2569",B.U,"\u2566",B.V,"\u2560",B.bU,"\u2550",B.W,"\u256c",B.X,"\u2567",B.Y,"\u2568",B.a5,"\u2564",B.Z,"\u2565",B.a6,"\u2559",B.bV,"\u2558",B.bW,"\u2552",B.bX,"\u2553",B.bY,"\u256b",B.a7,"\u256a",B.a_,"\u2518",B.bZ,"\u250c",B.c_,"\u2588",B.e,"\u2584",B.i,"\u258c",B.k,"\u2590",B.j,"\u2580",B.h,"\u03b1",B.c0,"\xdf",B.c2,"\u0393",B.c3,"\u03c0",B.c4,"\u03a3",B.c5,"\u03c3",B.c6,"\xb5",B.c7,"\u03c4",B.c8,"\u03a6",B.c9,"\u0398",B.ca,"\u03a9",B.cb,"\u03b4",B.cd,"\u221e",B.ce,"\u03c6",B.cf,"\u03b5",B.cg,"\u2229",B.ch,"\u2261",B.ci,"\xb1",B.cj,"\u2265",B.ck,"\u2264",B.cl,"\u2320",B.cm,"\u2321",B.co,"\xf7",B.cp,"\u2248",B.cq,"\xb0",B.cr,"\u2219",B.cs,"\xb7",B.ct,"\u221a",B.cu,"\u207f",B.cv,"\xb2",B.cw,"\u25a0",B.cx],A.d7("bc<C,i<c>>"))
B.t=new A.B("replace")
B.e8=new A.B("inverse")
B.u=new A.B("over")
B.e9=new A.B("under")
B.ea=new A.B("stain")
B.eb=new A.B("delete")
B.ec=new A.B("maskDestination")
B.ed=new A.B("maskSource")
B.c=new A.ac("ready")
B.ee=new A.ac("awaitingKey")
B.w=new A.ac("awaitingString")
B.f=new A.ac("awaitingMouseClick")
B.ef=A.A("ij")
B.eg=A.A("ik")
B.eh=A.A("fg")
B.ei=A.A("fh")
B.ej=A.A("fj")
B.ek=A.A("fk")
B.el=A.A("fl")
B.em=A.A("e")
B.en=A.A("fE")
B.eo=A.A("cv")
B.ep=A.A("fF")
B.eq=A.A("fG")})();(function staticFields(){$.cS=null
$.L=A.a([],t.f)
$.e1=null
$.dW=null
$.dV=null
$.eK=null
$.eE=null
$.eO=null
$.d6=null
$.db=null
$.dL=null
$.aQ=A.a([],A.d7("o<i<e>?>"))
$.ah=null
$.b_=null
$.b0=null
$.dF=!1
$.h=B.b})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"il","df",()=>A.i0("_$dart_dartClosure"))
s($,"iW","f3",()=>B.b.b1(new A.dd()))
s($,"iu","eU",()=>A.H(A.cu({
toString:function(){return"$receiver$"}})))
s($,"iv","eV",()=>A.H(A.cu({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"iw","eW",()=>A.H(A.cu(null)))
s($,"ix","eX",()=>A.H(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"iA","f_",()=>A.H(A.cu(void 0)))
s($,"iB","f0",()=>A.H(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"iz","eZ",()=>A.H(A.e9(null)))
s($,"iy","eY",()=>A.H(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"iD","f2",()=>A.H(A.e9(void 0)))
s($,"iC","f1",()=>A.H(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"iE","dP",()=>A.fH())
s($,"io","dg",()=>$.f3())
s($,"iU","dh",()=>A.dN(B.em))
s($,"it","eT",()=>A.dq(8,0,!1,t.S))
s($,"is","eS",()=>A.dq(8,255,!1,t.S))
s($,"iX","di",()=>B.E)
s($,"iY","bX",()=>{var r=A.he(A.i1(A.ig(),"document"),"getElementById","emotions")
r.toString
r=A.fC(20,r,"lightgray",!0,3,3,0,24)
r.al("Mixed Emotions!",3,2)
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.bk,ArrayBufferView:A.aA,DataView:A.bl,Float32Array:A.bm,Float64Array:A.bn,Int16Array:A.bo,Int32Array:A.bp,Int8Array:A.bq,Uint16Array:A.br,Uint32Array:A.bs,Uint8ClampedArray:A.aB,CanvasPixelArray:A.aB,Uint8Array:A.bt})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.a7.$nativeSuperclassTag="ArrayBufferView"
A.aM.$nativeSuperclassTag="ArrayBufferView"
A.aN.$nativeSuperclassTag="ArrayBufferView"
A.ay.$nativeSuperclassTag="ArrayBufferView"
A.aO.$nativeSuperclassTag="ArrayBufferView"
A.aP.$nativeSuperclassTag="ArrayBufferView"
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
var s=A.bW
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=emotions.js.map
