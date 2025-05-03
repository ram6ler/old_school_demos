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
if(a[b]!==s){A.iA(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.e7(b)
return new s(c,this)}:function(){if(s===null)s=A.e7(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.e7(a).prototype
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
eb(a,b,c,d){return{i:a,p:b,e:c,x:d}},
e8(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.e9==null){A.ip()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.ez("Return interceptor for "+A.n(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.df
if(o==null)o=$.df=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.iu(a)
if(p!=null)return p
if(typeof a=="function")return B.L
s=Object.getPrototypeOf(a)
if(s==null)return B.v
if(s===Object.prototype)return B.v
if(typeof q=="function"){o=$.df
if(o==null)o=$.df=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.o,enumerable:false,writable:true,configurable:true})
return B.o}return B.o},
ep(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
fR(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.ep(r))break;++b}return b},
fS(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.e(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.ep(q))break}return b},
a7(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aC.prototype
return J.bv.prototype}if(typeof a=="string")return J.a1.prototype
if(a==null)return J.aD.prototype
if(typeof a=="boolean")return J.bu.prototype
if(Array.isArray(a))return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.S.prototype
if(typeof a=="symbol")return J.aG.prototype
if(typeof a=="bigint")return J.aE.prototype
return a}if(a instanceof A.i)return a
return J.e8(a)},
fa(a){if(typeof a=="string")return J.a1.prototype
if(a==null)return a
if(Array.isArray(a))return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.S.prototype
if(typeof a=="symbol")return J.aG.prototype
if(typeof a=="bigint")return J.aE.prototype
return a}if(a instanceof A.i)return a
return J.e8(a)},
ih(a){if(a==null)return a
if(Array.isArray(a))return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.S.prototype
if(typeof a=="symbol")return J.aG.prototype
if(typeof a=="bigint")return J.aE.prototype
return a}if(a instanceof A.i)return a
return J.e8(a)},
ii(a){if(typeof a=="number")return J.ab.prototype
if(a==null)return a
if(!(a instanceof A.i))return J.a3.prototype
return a},
ij(a){if(typeof a=="string")return J.a1.prototype
if(a==null)return a
if(!(a instanceof A.i))return J.a3.prototype
return a},
au(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.a7(a).C(a,b)},
I(a){return J.a7(a).gk(a)},
eh(a){return J.ih(a).gt(a)},
dI(a){return J.fa(a).gp(a)},
fw(a){return J.a7(a).gn(a)},
ei(a){return J.ii(a).bU(a)},
bm(a){return J.a7(a).h(a)},
fx(a){return J.ij(a).bV(a)},
bt:function bt(){},
bu:function bu(){},
aD:function aD(){},
aF:function aF(){},
T:function T(){},
bL:function bL(){},
a3:function a3(){},
S:function S(){},
aE:function aE(){},
aG:function aG(){},
q:function q(a){this.$ti=a},
co:function co(a){this.$ti=a},
bn:function bn(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ab:function ab(){},
aC:function aC(){},
bv:function bv(){},
a1:function a1(){}},A={dM:function dM(){},
U(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
dV(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
e6(a,b,c){return a},
ea(a){var s,r
for(s=$.A.length,r=0;r<s;++r)if(a===$.A[r])return!0
return!1},
fP(){return new A.aj("No element")},
aI:function aI(a){this.a=a},
dD:function dD(){},
cA:function cA(){},
ay:function ay(){},
bz:function bz(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bR:function bR(a,b){this.a=a
this.b=b},
aA:function aA(){},
ff(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
jf(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
n(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.bm(a)
return s},
ag(a){var s,r=$.eq
if(r==null)r=$.eq=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
cu(a){return A.fV(a)},
fV(a){var s,r,q,p
if(a instanceof A.i)return A.x(A.bi(a),null)
s=J.a7(a)
if(s===B.J||s===B.M||t.J.b(a)){r=B.p(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.x(A.bi(a),null)},
er(a){if(a==null||typeof a=="number"||A.e2(a))return J.bm(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.a_)return a.h(0)
if(a instanceof A.an)return a.aU(!0)
return"Instance of '"+A.cu(a)+"'"},
fW(a){var s=a.$thrownJsError
if(s==null)return null
return A.H(s)},
e(a,b){if(a==null)J.dI(a)
throw A.d(A.f7(a,b))},
f7(a,b){var s,r="index"
if(!A.eW(b))return new A.E(!0,b,r,null)
s=J.dI(a)
if(b<0||b>=s)return A.fL(b,s,a,r)
return A.es(b,r)},
e5(a){return new A.E(!0,a,null,null)},
d(a){return A.fc(new Error(),a)},
fc(a,b){var s
if(b==null)b=new A.K()
a.dartException=b
s=A.iB
if("defineProperty" in Object){Object.defineProperty(a,"message",{get:s})
a.name=""}else a.toString=s
return a},
iB(){return J.bm(this.dartException)},
cd(a){throw A.d(a)},
ee(a,b){throw A.fc(b,a)},
bl(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.ee(A.hC(a,b,c),s)},
hC(a,b,c){var s,r,q,p,o,n,m,l,k
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
cc(a){throw A.d(A.a0(a))},
L(a){var s,r,q,p,o,n
a=A.iy(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.a([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.cR(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
cS(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
ey(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
dN(a,b){var s=b==null,r=s?null:b.method
return new A.bw(a,r,s?null:b.receiver)},
P(a){if(a==null)return new A.cr(a)
if(a instanceof A.az)return A.Y(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.Y(a,a.dartException)
return A.i6(a)},
Y(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
i6(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.a.bw(r,16)&8191)===10)switch(q){case 438:return A.Y(a,A.dN(A.n(s)+" (Error "+q+")",null))
case 445:case 5007:A.n(s)
return A.Y(a,new A.aS())}}if(a instanceof TypeError){p=$.fi()
o=$.fj()
n=$.fk()
m=$.fl()
l=$.fo()
k=$.fp()
j=$.fn()
$.fm()
i=$.fr()
h=$.fq()
g=p.B(s)
if(g!=null)return A.Y(a,A.dN(s,g))
else{g=o.B(s)
if(g!=null){g.method="call"
return A.Y(a,A.dN(s,g))}else if(n.B(s)!=null||m.B(s)!=null||l.B(s)!=null||k.B(s)!=null||j.B(s)!=null||m.B(s)!=null||i.B(s)!=null||h.B(s)!=null)return A.Y(a,new A.aS())}return A.Y(a,new A.bQ(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.aU()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.Y(a,new A.E(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.aU()
return a},
H(a){var s
if(a instanceof A.az)return a.b
if(a==null)return new A.b6(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.b6(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
ec(a){if(a==null)return J.I(a)
if(typeof a=="object")return A.ag(a)
return J.I(a)},
ic(a){if(typeof a=="number")return B.K.gk(a)
if(a instanceof A.c6)return A.ag(a)
if(a instanceof A.an)return a.gk(a)
return A.ec(a)},
f8(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=a.length
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
k=n}j=b.an(q)
i=k[j]
if(i==null)k[j]=[b.V(q,p)]
else{r=b.ao(i,q)
if(r>=0)i[r].b=p
else i.push(b.V(q,p))}}}return b},
hL(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(A.ch("Unsupported number of arguments for wrapped closure"))},
ca(a,b){var s=a.$identity
if(!!s)return s
s=A.id(a,b)
a.$identity=s
return s},
id(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.hL)},
fE(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.cB().constructor.prototype):Object.create(new A.aw(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.en(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.fA(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.en(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
fA(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.fy)}throw A.d("Error in functionType of tearoff")},
fB(a,b,c,d){var s=A.em
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
en(a,b,c,d){if(c)return A.fD(a,b,d)
return A.fB(b.length,d,a,b)},
fC(a,b,c,d){var s=A.em,r=A.fz
switch(b?-1:a){case 0:throw A.d(new A.bM("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
fD(a,b,c){var s,r
if($.ek==null)$.ek=A.ej("interceptor")
if($.el==null)$.el=A.ej("receiver")
s=b.length
r=A.fC(s,c,a,b)
return r},
e7(a){return A.fE(a)},
fy(a,b){return A.bd(v.typeUniverse,A.bi(a.a),b)},
em(a){return a.a},
fz(a){return a.b},
ej(a){var s,r,q,p=new A.aw("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.d(A.av("Field name "+a+" not found.",null))},
jk(a){throw A.d(new A.bY(a))},
ik(a){return v.getIsolateTag(a)},
iu(a){var s,r,q,p,o,n=$.fb.$1(a),m=$.dw[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.dB[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.f4.$2(a,n)
if(q!=null){m=$.dw[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.dB[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.dC(s)
$.dw[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.dB[n]=s
return s}if(p==="-"){o=A.dC(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.fd(a,s)
if(p==="*")throw A.d(A.ez(n))
if(v.leafTags[n]===true){o=A.dC(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.fd(a,s)},
fd(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.eb(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
dC(a){return J.eb(a,!1,null,!!a.$iy)},
iv(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.dC(s)
else return J.eb(s,c,null,null)},
ip(){if(!0===$.e9)return
$.e9=!0
A.iq()},
iq(){var s,r,q,p,o,n,m,l
$.dw=Object.create(null)
$.dB=Object.create(null)
A.io()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.fe.$1(o)
if(n!=null){m=A.iv(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
io(){var s,r,q,p,o,n,m=B.z()
m=A.ar(B.A,A.ar(B.B,A.ar(B.q,A.ar(B.q,A.ar(B.C,A.ar(B.D,A.ar(B.E(B.p),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.fb=new A.dy(p)
$.f4=new A.dz(o)
$.fe=new A.dA(n)},
ar(a,b){return a(b)||b},
ie(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
iz(a,b,c){var s=a.indexOf(b,c)
return s>=0},
iy(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
u:function u(a,b){this.a=a
this.b=b},
br:function br(){},
aB:function aB(a,b){this.a=a
this.$ti=b},
cR:function cR(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aS:function aS(){},
bw:function bw(a,b,c){this.a=a
this.b=b
this.c=c},
bQ:function bQ(a){this.a=a},
cr:function cr(a){this.a=a},
az:function az(a,b){this.a=a
this.b=b},
b6:function b6(a){this.a=a
this.b=null},
a_:function a_(){},
ce:function ce(){},
cf:function cf(){},
cG:function cG(){},
cB:function cB(){},
aw:function aw(a,b){this.a=a
this.b=b},
bY:function bY(a){this.a=a},
bM:function bM(a){this.a=a},
a2:function a2(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cp:function cp(a,b){this.a=a
this.b=b
this.c=null},
aL:function aL(a,b){this.a=a
this.$ti=b},
by:function by(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
aK:function aK(a,b){this.a=a
this.$ti=b},
bx:function bx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aH:function aH(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dy:function dy(a){this.a=a},
dz:function dz(a){this.a=a},
dA:function dA(a){this.a=a},
an:function an(){},
c3:function c3(){},
a5(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.f7(b,a))},
bA:function bA(){},
aQ:function aQ(){},
bB:function bB(){},
ae:function ae(){},
aO:function aO(){},
aP:function aP(){},
bC:function bC(){},
bD:function bD(){},
bE:function bE(){},
bF:function bF(){},
bG:function bG(){},
bH:function bH(){},
bI:function bI(){},
aR:function aR(){},
bJ:function bJ(){},
b0:function b0(){},
b1:function b1(){},
b2:function b2(){},
b3:function b3(){},
et(a,b){var s=b.c
return s==null?b.c=A.e_(a,b.x,!0):s},
dS(a,b){var s=b.c
return s==null?b.c=A.bb(a,"J",[b.x]):s},
eu(a){var s=a.w
if(s===6||s===7||s===8)return A.eu(a.x)
return s===12||s===13},
fZ(a){return a.as},
dx(a){return A.c7(v.typeUniverse,a,!1)},
X(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.X(a1,s,a3,a4)
if(r===s)return a2
return A.eK(a1,r,!0)
case 7:s=a2.x
r=A.X(a1,s,a3,a4)
if(r===s)return a2
return A.e_(a1,r,!0)
case 8:s=a2.x
r=A.X(a1,s,a3,a4)
if(r===s)return a2
return A.eI(a1,r,!0)
case 9:q=a2.y
p=A.aq(a1,q,a3,a4)
if(p===q)return a2
return A.bb(a1,a2.x,p)
case 10:o=a2.x
n=A.X(a1,o,a3,a4)
m=a2.y
l=A.aq(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.dY(a1,n,l)
case 11:k=a2.x
j=a2.y
i=A.aq(a1,j,a3,a4)
if(i===j)return a2
return A.eJ(a1,k,i)
case 12:h=a2.x
g=A.X(a1,h,a3,a4)
f=a2.y
e=A.i3(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.eH(a1,g,e)
case 13:d=a2.y
a4+=d.length
c=A.aq(a1,d,a3,a4)
o=a2.x
n=A.X(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.dZ(a1,n,c,!0)
case 14:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.d(A.bp("Attempted to substitute unexpected RTI kind "+a0))}},
aq(a,b,c,d){var s,r,q,p,o=b.length,n=A.dn(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.X(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
i4(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.dn(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.X(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
i3(a,b,c,d){var s,r=b.a,q=A.aq(a,r,c,d),p=b.b,o=A.aq(a,p,c,d),n=b.c,m=A.i4(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.c1()
s.a=q
s.b=o
s.c=m
return s},
a(a,b){a[v.arrayRti]=b
return a},
f6(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.im(s)
return a.$S()}return null},
ir(a,b){var s
if(A.eu(b))if(a instanceof A.a_){s=A.f6(a)
if(s!=null)return s}return A.bi(a)},
bi(a){if(a instanceof A.i)return A.bf(a)
if(Array.isArray(a))return A.e0(a)
return A.e1(J.a7(a))},
e0(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
bf(a){var s=a.$ti
return s!=null?s:A.e1(a)},
e1(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.hJ(a,s)},
hJ(a,b){var s=a instanceof A.a_?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.ht(v.typeUniverse,s.name)
b.$ccache=r
return r},
im(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.c7(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
il(a){return A.a6(A.bf(a))},
e4(a){var s
if(a instanceof A.an)return A.ig(a.$r,a.aN())
s=a instanceof A.a_?A.f6(a):null
if(s!=null)return s
if(t.R.b(a))return J.fw(a).a
if(Array.isArray(a))return A.e0(a)
return A.bi(a)},
a6(a){var s=a.r
return s==null?a.r=A.eR(a):s},
eR(a){var s,r,q=a.as,p=q.replace(/\*/g,"")
if(p===q)return a.r=new A.c6(a)
s=A.c7(v.typeUniverse,p,!0)
r=s.r
return r==null?s.r=A.eR(s):r},
ig(a,b){var s,r,q=b,p=q.length
if(p===0)return t.F
if(0>=p)return A.e(q,0)
s=A.bd(v.typeUniverse,A.e4(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.e(q,r)
s=A.eL(v.typeUniverse,s,A.e4(q[r]))}return A.bd(v.typeUniverse,s,a)},
D(a){return A.a6(A.c7(v.typeUniverse,a,!1))},
hI(a){var s,r,q,p,o,n,m=this
if(m===t.K)return A.N(m,a,A.hQ)
if(!A.O(m))s=m===t._
else s=!0
if(s)return A.N(m,a,A.hU)
s=m.w
if(s===7)return A.N(m,a,A.hG)
if(s===1)return A.N(m,a,A.eX)
r=s===6?m.x:m
q=r.w
if(q===8)return A.N(m,a,A.hM)
if(r===t.S)p=A.eW
else if(r===t.i||r===t.o)p=A.hP
else if(r===t.N)p=A.hS
else p=r===t.y?A.e2:null
if(p!=null)return A.N(m,a,p)
if(q===9){o=r.x
if(r.y.every(A.is)){m.f="$i"+o
if(o==="h")return A.N(m,a,A.hO)
return A.N(m,a,A.hT)}}else if(q===11){n=A.ie(r.x,r.y)
return A.N(m,a,n==null?A.eX:n)}return A.N(m,a,A.hE)},
N(a,b,c){a.b=c
return a.b(b)},
hH(a){var s,r=this,q=A.hD
if(!A.O(r))s=r===t._
else s=!0
if(s)q=A.hw
else if(r===t.K)q=A.hv
else{s=A.bj(r)
if(s)q=A.hF}r.a=q
return r.a(a)},
c8(a){var s=a.w,r=!0
if(!A.O(a))if(!(a===t._))if(!(a===t.A))if(s!==7)if(!(s===6&&A.c8(a.x)))r=s===8&&A.c8(a.x)||a===t.P||a===t.T
return r},
hE(a){var s=this
if(a==null)return A.c8(s)
return A.it(v.typeUniverse,A.ir(a,s),s)},
hG(a){if(a==null)return!0
return this.x.b(a)},
hT(a){var s,r=this
if(a==null)return A.c8(r)
s=r.f
if(a instanceof A.i)return!!a[s]
return!!J.a7(a)[s]},
hO(a){var s,r=this
if(a==null)return A.c8(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.i)return!!a[s]
return!!J.a7(a)[s]},
hD(a){var s=this
if(a==null){if(A.bj(s))return a}else if(s.b(a))return a
A.eS(a,s)},
hF(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.eS(a,s)},
eS(a,b){throw A.d(A.hk(A.eB(a,A.x(b,null))))},
eB(a,b){return A.cg(a)+": type '"+A.x(A.e4(a),null)+"' is not a subtype of type '"+b+"'"},
hk(a){return new A.b9("TypeError: "+a)},
w(a,b){return new A.b9("TypeError: "+A.eB(a,b))},
hM(a){var s=this,r=s.w===6?s.x:s
return r.x.b(a)||A.dS(v.typeUniverse,r).b(a)},
hQ(a){return a!=null},
hv(a){if(a!=null)return a
throw A.d(A.w(a,"Object"))},
hU(a){return!0},
hw(a){return a},
eX(a){return!1},
e2(a){return!0===a||!1===a},
iX(a){if(!0===a)return!0
if(!1===a)return!1
throw A.d(A.w(a,"bool"))},
iZ(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.w(a,"bool"))},
iY(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.w(a,"bool?"))},
j_(a){if(typeof a=="number")return a
throw A.d(A.w(a,"double"))},
j1(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.w(a,"double"))},
j0(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.w(a,"double?"))},
eW(a){return typeof a=="number"&&Math.floor(a)===a},
j2(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.d(A.w(a,"int"))},
j4(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.w(a,"int"))},
j3(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.w(a,"int?"))},
hP(a){return typeof a=="number"},
j5(a){if(typeof a=="number")return a
throw A.d(A.w(a,"num"))},
j7(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.w(a,"num"))},
j6(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.w(a,"num?"))},
hS(a){return typeof a=="string"},
j8(a){if(typeof a=="string")return a
throw A.d(A.w(a,"String"))},
ja(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.w(a,"String"))},
j9(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.w(a,"String?"))},
f0(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.x(a[q],b)
return s},
hZ(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.f0(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.x(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
eT(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", ",a3=null
if(a6!=null){s=a6.length
if(a5==null)a5=A.a([],t.s)
else a3=a5.length
r=a5.length
for(q=s;q>0;--q)a5.push("T"+(r+q))
for(p=t.X,o=t._,n="<",m="",q=0;q<s;++q,m=a2){l=a5.length
k=l-1-q
if(!(k>=0))return A.e(a5,k)
n=n+m+a5[k]
j=a6[q]
i=j.w
if(!(i===2||i===3||i===4||i===5||j===p))l=j===o
else l=!0
if(!l)n+=" extends "+A.x(j,a5)}n+=">"}else n=""
p=a4.x
h=a4.y
g=h.a
f=g.length
e=h.b
d=e.length
c=h.c
b=c.length
a=A.x(p,a5)
for(a0="",a1="",q=0;q<f;++q,a1=a2)a0+=a1+A.x(g[q],a5)
if(d>0){a0+=a1+"["
for(a1="",q=0;q<d;++q,a1=a2)a0+=a1+A.x(e[q],a5)
a0+="]"}if(b>0){a0+=a1+"{"
for(a1="",q=0;q<b;q+=3,a1=a2){a0+=a1
if(c[q+1])a0+="required "
a0+=A.x(c[q+2],a5)+" "+c[q]}a0+="}"}if(a3!=null){a5.toString
a5.length=a3}return n+"("+a0+") => "+a},
x(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6)return A.x(a.x,b)
if(l===7){s=a.x
r=A.x(s,b)
q=s.w
return(q===12||q===13?"("+r+")":r)+"?"}if(l===8)return"FutureOr<"+A.x(a.x,b)+">"
if(l===9){p=A.i5(a.x)
o=a.y
return o.length>0?p+("<"+A.f0(o,b)+">"):p}if(l===11)return A.hZ(a,b)
if(l===12)return A.eT(a,b,null)
if(l===13)return A.eT(a.x,b,a.y)
if(l===14){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.e(b,n)
return b[n]}return"?"},
i5(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
hu(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
ht(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.c7(a,b,!1)
else if(typeof m=="number"){s=m
r=A.bc(a,5,"#")
q=A.dn(s)
for(p=0;p<s;++p)q[p]=r
o=A.bb(a,b,q)
n[b]=o
return o}else return m},
hs(a,b){return A.eM(a.tR,b)},
hr(a,b){return A.eM(a.eT,b)},
c7(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.eF(A.eD(a,null,b,c))
r.set(b,s)
return s},
bd(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.eF(A.eD(a,b,c,!0))
q.set(c,r)
return r},
eL(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.dY(a,b,c.w===10?c.y:[c])
p.set(s,q)
return q},
M(a,b){b.a=A.hH
b.b=A.hI
return b},
bc(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.B(null,null)
s.w=b
s.as=c
r=A.M(a,s)
a.eC.set(c,r)
return r},
eK(a,b,c){var s,r=b.as+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.hp(a,b,r,c)
a.eC.set(r,s)
return s},
hp(a,b,c,d){var s,r,q
if(d){s=b.w
if(!A.O(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.B(null,null)
q.w=6
q.x=b
q.as=c
return A.M(a,q)},
e_(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.ho(a,b,r,c)
a.eC.set(r,s)
return s},
ho(a,b,c,d){var s,r,q,p
if(d){s=b.w
r=!0
if(!A.O(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.bj(b.x)
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.x
if(q.w===8&&A.bj(q.x))return q
else return A.et(a,b)}}p=new A.B(null,null)
p.w=7
p.x=b
p.as=c
return A.M(a,p)},
eI(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.hm(a,b,r,c)
a.eC.set(r,s)
return s},
hm(a,b,c,d){var s,r
if(d){s=b.w
if(A.O(b)||b===t.K||b===t._)return b
else if(s===1)return A.bb(a,"J",[b])
else if(b===t.P||b===t.T)return t.O}r=new A.B(null,null)
r.w=8
r.x=b
r.as=c
return A.M(a,r)},
hq(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.B(null,null)
s.w=14
s.x=b
s.as=q
r=A.M(a,s)
a.eC.set(q,r)
return r},
ba(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
hl(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
bb(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.ba(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.B(null,null)
r.w=9
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.M(a,r)
a.eC.set(p,q)
return q},
dY(a,b,c){var s,r,q,p,o,n
if(b.w===10){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.ba(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.B(null,null)
o.w=10
o.x=s
o.y=r
o.as=q
n=A.M(a,o)
a.eC.set(q,n)
return n},
eJ(a,b,c){var s,r,q="+"+(b+"("+A.ba(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.B(null,null)
s.w=11
s.x=b
s.y=c
s.as=q
r=A.M(a,s)
a.eC.set(q,r)
return r},
eH(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.ba(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.ba(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.hl(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.B(null,null)
p.w=12
p.x=b
p.y=c
p.as=r
o=A.M(a,p)
a.eC.set(r,o)
return o},
dZ(a,b,c,d){var s,r=b.as+("<"+A.ba(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.hn(a,b,c,r,d)
a.eC.set(r,s)
return s},
hn(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.dn(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.X(a,b,r,0)
m=A.aq(a,c,r,0)
return A.dZ(a,n,m,c!==m)}}l=new A.B(null,null)
l.w=13
l.x=b
l.y=c
l.as=d
return A.M(a,l)},
eD(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
eF(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.hd(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.eE(a,r,l,k,!1)
else if(q===46)r=A.eE(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.W(a.u,a.e,k.pop()))
break
case 94:k.push(A.hq(a.u,k.pop()))
break
case 35:k.push(A.bc(a.u,5,"#"))
break
case 64:k.push(A.bc(a.u,2,"@"))
break
case 126:k.push(A.bc(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.hf(a,k)
break
case 38:A.he(a,k)
break
case 42:p=a.u
k.push(A.eK(p,A.W(p,a.e,k.pop()),a.n))
break
case 63:p=a.u
k.push(A.e_(p,A.W(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.eI(p,A.W(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.hc(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.eG(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.hh(a.u,a.e,o)
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
return A.W(a.u,a.e,m)},
hd(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
eE(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===10)o=o.x
n=A.hu(s,o.x)[p]
if(n==null)A.cd('No "'+p+'" in "'+A.fZ(o)+'"')
d.push(A.bd(s,o,n))}else d.push(p)
return m},
hf(a,b){var s,r=a.u,q=A.eC(a,b),p=b.pop()
if(typeof p=="string")b.push(A.bb(r,p,q))
else{s=A.W(r,a.e,p)
switch(s.w){case 12:b.push(A.dZ(r,s,q,a.n))
break
default:b.push(A.dY(r,s,q))
break}}},
hc(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.eC(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.W(p,a.e,o)
q=new A.c1()
q.a=s
q.b=n
q.c=m
b.push(A.eH(p,r,q))
return
case-4:b.push(A.eJ(p,b.pop(),s))
return
default:throw A.d(A.bp("Unexpected state under `()`: "+A.n(o)))}},
he(a,b){var s=b.pop()
if(0===s){b.push(A.bc(a.u,1,"0&"))
return}if(1===s){b.push(A.bc(a.u,4,"1&"))
return}throw A.d(A.bp("Unexpected extended operation "+A.n(s)))},
eC(a,b){var s=b.splice(a.p)
A.eG(a.u,a.e,s)
a.p=b.pop()
return s},
W(a,b,c){if(typeof c=="string")return A.bb(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.hg(a,b,c)}else return c},
eG(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.W(a,b,c[s])},
hh(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.W(a,b,c[s])},
hg(a,b,c){var s,r,q=b.w
if(q===10){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==9)throw A.d(A.bp("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.d(A.bp("Bad index "+c+" for "+b.h(0)))},
it(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.r(a,b,null,c,null,!1)?1:0
r.set(c,s)}if(0===s)return!1
if(1===s)return!0
return!0},
r(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(!A.O(d))s=d===t._
else s=!0
if(s)return!0
r=b.w
if(r===4)return!0
if(A.O(b))return!1
s=b.w
if(s===1)return!0
q=r===14
if(q)if(A.r(a,c[b.x],c,d,e,!1))return!0
p=d.w
s=b===t.P||b===t.T
if(s){if(p===8)return A.r(a,b,c,d.x,e,!1)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return A.r(a,b.x,c,d,e,!1)
if(r===6)return A.r(a,b.x,c,d,e,!1)
return r!==7}if(r===6)return A.r(a,b.x,c,d,e,!1)
if(p===6){s=A.et(a,d)
return A.r(a,b,c,s,e,!1)}if(r===8){if(!A.r(a,b.x,c,d,e,!1))return!1
return A.r(a,A.dS(a,b),c,d,e,!1)}if(r===7){s=A.r(a,t.P,c,d,e,!1)
return s&&A.r(a,b.x,c,d,e,!1)}if(p===8){if(A.r(a,b,c,d.x,e,!1))return!0
return A.r(a,b,c,A.dS(a,d),e,!1)}if(p===7){s=A.r(a,b,c,t.P,e,!1)
return s||A.r(a,b,c,d.x,e,!1)}if(q)return!1
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
if(!A.r(a,j,c,i,e,!1)||!A.r(a,i,e,j,c,!1))return!1}return A.eV(a,b.x,c,d.x,e,!1)}if(p===12){if(b===t.g)return!0
if(s)return!1
return A.eV(a,b,c,d,e,!1)}if(r===9){if(p!==9)return!1
return A.hN(a,b,c,d,e,!1)}if(o&&p===11)return A.hR(a,b,c,d,e,!1)
return!1},
eV(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.r(a3,a4.x,a5,a6.x,a7,!1))return!1
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
if(!A.r(a3,p[h],a7,g,a5,!1))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.r(a3,p[o+h],a7,g,a5,!1))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.r(a3,k[h],a7,g,a5,!1))return!1}f=s.c
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
if(!A.r(a3,e[a+2],a7,g,a5,!1))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
hN(a,b,c,d,e,f){var s,r,q,p,o,n=b.x,m=d.x
for(;n!==m;){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.bd(a,b,r[o])
return A.eN(a,p,null,c,d.y,e,!1)}return A.eN(a,b.y,null,c,d.y,e,!1)},
eN(a,b,c,d,e,f,g){var s,r=b.length
for(s=0;s<r;++s)if(!A.r(a,b[s],d,e[s],f,!1))return!1
return!0},
hR(a,b,c,d,e,f){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.r(a,r[s],c,q[s],e,!1))return!1
return!0},
bj(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.O(a))if(s!==7)if(!(s===6&&A.bj(a.x)))r=s===8&&A.bj(a.x)
return r},
is(a){var s
if(!A.O(a))s=a===t._
else s=!0
return s},
O(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
eM(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
dn(a){return a>0?new Array(a):v.typeUniverse.sEA},
B:function B(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
c1:function c1(){this.c=this.b=this.a=null},
c6:function c6(a){this.a=a},
c0:function c0(){},
b9:function b9(a){this.a=a},
h6(){var s,r,q
if(self.scheduleImmediate!=null)return A.i7()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.ca(new A.cW(s),1)).observe(r,{childList:true})
return new A.cV(s,r,q)}else if(self.setImmediate!=null)return A.i8()
return A.i9()},
h7(a){self.scheduleImmediate(A.ca(new A.cX(a),0))},
h8(a){self.setImmediate(A.ca(new A.cY(a),0))},
h9(a){A.dW(B.I,a)},
dW(a,b){var s=B.a.u(a.a,1000)
return A.hi(s,b)},
ex(a,b){var s=B.a.u(a.a,1000)
return A.hj(s,b)},
hi(a,b){var s=new A.b8()
s.bb(a,b)
return s},
hj(a,b){var s=new A.b8()
s.bc(a,b)
return s},
eY(a){return new A.bT(new A.m($.j,a.i("m<0>")),a.i("bT<0>"))},
eQ(a,b){a.$2(0,null)
b.b=!0
return b.a},
dq(a,b){A.hx(a,b)},
eP(a,b){var s,r=a==null?b.$ti.c.a(a):a
if(!b.b)b.a.a8(r)
else{s=b.a
if(b.$ti.i("J<1>").b(r))s.aJ(r)
else s.aa(r)}},
eO(a,b){var s=A.P(a),r=A.H(a),q=b.a
if(b.b)q.D(s,r)
else q.aH(s,r)},
hx(a,b){var s,r,q=new A.dr(b),p=new A.ds(b)
if(a instanceof A.m)a.aT(q,p,t.z)
else{s=t.z
if(a instanceof A.m)a.aB(q,p,s)
else{r=new A.m($.j,t.d)
r.a=8
r.c=a
r.aT(q,p,s)}}},
f3(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.j.az(new A.dv(s))},
dK(a){var s
if(t.Q.b(a)){s=a.gU()
if(s!=null)return s}return B.H},
fJ(a,b){var s,r=!b.b(null)
if(r)throw A.d(A.dJ(null,"computation","The type parameter is not nullable"))
s=new A.m($.j,b.i("m<0>"))
A.h1(a,new A.ci(null,s,b))
return s},
hB(a,b,c){A.hK(b,c)
a.D(b,c)},
hK(a,b){if($.j===B.b)return null
return null},
d3(a,b,c){var s,r,q,p={},o=p.a=a
for(;s=o.a,(s&4)!==0;){o=o.c
p.a=o}if(o===b){b.aH(new A.E(!0,o,null,"Cannot complete a future with itself"),A.h0())
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.aR(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.N()
b.X(p.a)
A.a4(b,q)
return}b.a^=2
A.ap(null,null,b.b,new A.d4(p,b))},
a4(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;!0;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){f=f.c
A.c9(f.a,f.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.a4(g.a,f)
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
if(r){A.c9(m.a,m.b)
return}j=$.j
if(j!==k)$.j=k
else j=null
f=f.c
if((f&15)===8)new A.db(s,g,p).$0()
else if(q){if((f&1)!==0)new A.da(s,m).$0()}else if((f&2)!==0)new A.d9(g,s).$0()
if(j!=null)$.j=j
f=s.c
if(f instanceof A.m){r=s.a.$ti
r=r.i("J<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.a0(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.d3(f,i,!0)
return}}i=s.a.b
h=i.c
i.c=null
b=i.a0(h)
f=s.b
r=s.c
if(!f){i.a=8
i.c=r}else{i.a=i.a&1|16
i.c=r}g.a=i
f=i}},
i_(a,b){if(t.C.b(a))return b.az(a)
if(t.v.b(a))return a
throw A.d(A.dJ(a,"onError",u.c))},
hW(){var s,r
for(s=$.ao;s!=null;s=$.ao){$.bh=null
r=s.b
$.ao=r
if(r==null)$.bg=null
s.a.$0()}},
i2(){$.e3=!0
try{A.hW()}finally{$.bh=null
$.e3=!1
if($.ao!=null)$.ef().$1(A.f5())}},
f2(a){var s=new A.bU(a),r=$.bg
if(r==null){$.ao=$.bg=s
if(!$.e3)$.ef().$1(A.f5())}else $.bg=r.b=s},
i1(a){var s,r,q,p=$.ao
if(p==null){A.f2(a)
$.bh=$.bg
return}s=new A.bU(a)
r=$.bh
if(r==null){s.b=p
$.ao=$.bh=s}else{q=r.b
s.b=q
$.bh=r.b=s
if(q==null)$.bg=s}},
ed(a){var s=null,r=$.j
if(B.b===r){A.ap(s,s,B.b,a)
return}A.ap(s,s,r,r.ai(a))},
iJ(a){A.e6(a,"stream",t.K)
return new A.c4()},
dU(a){return new A.aW(null,null,a.i("aW<0>"))},
f1(a){return},
eA(a,b){return b==null?A.ia():b},
ha(a,b){if(b==null)b=A.ib()
if(t.k.b(b))return a.az(b)
if(t.u.b(b))return b
throw A.d(A.av("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
hX(a){},
hY(a,b){A.c9(a,b)},
hA(a,b,c){var s,r=a.aV(),q=$.dF()
if(r!==q){q=r.$ti
s=$.j
r.W(new A.V(new A.m(s,q),8,new A.dt(b,c),null,q.i("V<1,1>")))}else b.Y(c)},
h1(a,b){var s=$.j
if(s===B.b)return A.dW(a,b)
return A.dW(a,s.ai(b))},
h2(a,b){var s=$.j
if(s===B.b)return A.ex(a,b)
return A.ex(a,s.bA(b,t.E))},
c9(a,b){A.i1(new A.du(a,b))},
eZ(a,b,c,d){var s,r=$.j
if(r===c)return d.$0()
$.j=c
s=r
try{r=d.$0()
return r}finally{$.j=s}},
f_(a,b,c,d,e){var s,r=$.j
if(r===c)return d.$1(e)
$.j=c
s=r
try{r=d.$1(e)
return r}finally{$.j=s}},
i0(a,b,c,d,e,f){var s,r=$.j
if(r===c)return d.$2(e,f)
$.j=c
s=r
try{r=d.$2(e,f)
return r}finally{$.j=s}},
ap(a,b,c,d){if(B.b!==c)d=c.ai(d)
A.f2(d)},
cW:function cW(a){this.a=a},
cV:function cV(a,b,c){this.a=a
this.b=b
this.c=c},
cX:function cX(a){this.a=a},
cY:function cY(a){this.a=a},
b8:function b8(){this.c=0},
dm:function dm(a,b){this.a=a
this.b=b},
dl:function dl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bT:function bT(a,b){this.a=a
this.b=!1
this.$ti=b},
dr:function dr(a){this.a=a},
ds:function ds(a){this.a=a},
dv:function dv(a){this.a=a},
Z:function Z(a,b){this.a=a
this.b=b},
al:function al(a,b){this.a=a
this.$ti=b},
aX:function aX(a,b,c,d,e){var _=this
_.ay=0
_.CW=_.ch=null
_.w=a
_.a=b
_.d=c
_.e=d
_.r=_.f=null
_.$ti=e},
bV:function bV(){},
aW:function aW(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null
_.$ti=c},
ci:function ci(a,b,c){this.a=a
this.b=b
this.c=c},
V:function V(a,b,c,d,e){var _=this
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
d0:function d0(a,b){this.a=a
this.b=b},
d8:function d8(a,b){this.a=a
this.b=b},
d5:function d5(a){this.a=a},
d6:function d6(a){this.a=a},
d7:function d7(a,b,c){this.a=a
this.b=b
this.c=c},
d4:function d4(a,b){this.a=a
this.b=b},
d2:function d2(a,b){this.a=a
this.b=b},
d1:function d1(a,b,c){this.a=a
this.b=b
this.c=c},
db:function db(a,b,c){this.a=a
this.b=b
this.c=c},
dc:function dc(a,b){this.a=a
this.b=b},
dd:function dd(a){this.a=a},
da:function da(a,b){this.a=a
this.b=b},
d9:function d9(a,b){this.a=a
this.b=b},
bU:function bU(a){this.a=a
this.b=null},
ak:function ak(){},
cE:function cE(a,b){this.a=a
this.b=b},
cF:function cF(a,b){this.a=a
this.b=b},
cC:function cC(a){this.a=a},
cD:function cD(a,b,c){this.a=a
this.b=b
this.c=c},
aY:function aY(){},
bX:function bX(){},
bW:function bW(){},
b7:function b7(){},
c_:function c_(){},
bZ:function bZ(a){this.b=a
this.a=null},
c2:function c2(){this.a=0
this.c=this.b=null},
dh:function dh(a,b){this.a=a
this.b=b},
aZ:function aZ(a){this.a=1
this.b=a
this.c=null},
c4:function c4(){},
dt:function dt(a,b){this.a=a
this.b=b},
dp:function dp(){},
du:function du(a,b){this.a=a
this.b=b},
di:function di(){},
dj:function dj(a,b){this.a=a
this.b=b},
dk:function dk(a,b,c){this.a=a
this.b=b
this.c=c},
b(a,b,c){return A.f8(a,new A.a2(b.i("@<0>").a9(c).i("a2<1,2>")))},
fT(a){return new A.b_(a.i("b_<0>"))},
dX(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
hb(a,b,c){var s=new A.am(a,b,c.i("am<0>"))
s.c=a.e
return s},
dP(a){var s,r
if(A.ea(a))return"{...}"
s=new A.bO("")
try{r={}
$.A.push(a)
s.a+="{"
r.a=!0
a.am(0,new A.cq(r,s))
s.a+="}"}finally{if(0>=$.A.length)return A.e($.A,-1)
$.A.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
b_:function b_(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dg:function dg(a){this.a=a
this.c=this.b=null},
am:function am(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
p:function p(){},
aM:function aM(){},
cq:function cq(a,b){this.a=a
this.b=b},
aT:function aT(){},
b5:function b5(){},
fF(a,b){a=A.d(a)
a.stack=b.h(0)
throw a
throw A.d("unreachable")},
dO(a,b,c){var s,r,q
if(a>4294967295)A.cd(A.dR(a,0,4294967295,"length",null))
s=A.a(new Array(a),c.i("q<0>"))
s.$flags=1
r=s
if(a!==0)for(s=r.length,q=0;q<s;++q)r[q]=b
return r},
fU(a,b,c){var s,r,q=A.a([],c.i("q<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.cc)(a),++r)q.push(a[r])
q.$flags=1
return q},
ev(a,b,c){var s=J.eh(b)
if(!s.l())return a
if(c.length===0){do a+=A.n(s.gm())
while(s.l())}else{a+=A.n(s.gm())
for(;s.l();)a=a+c+A.n(s.gm())}return a},
h0(){return A.H(new Error())},
eo(a){return new A.ax(1000*a)},
cg(a){if(typeof a=="number"||A.e2(a)||a==null)return J.bm(a)
if(typeof a=="string")return JSON.stringify(a)
return A.er(a)},
fG(a,b){A.e6(a,"error",t.K)
A.e6(b,"stackTrace",t.l)
A.fF(a,b)},
bp(a){return new A.bo(a)},
av(a,b){return new A.E(!1,null,b,a)},
dJ(a,b,c){return new A.E(!0,a,b,c)},
fX(a){var s=null
return new A.ah(s,s,!1,s,s,a)},
es(a,b){return new A.ah(null,null,!0,a,b,"Value not in range")},
dR(a,b,c,d,e){return new A.ah(b,c,!0,a,d,"Invalid value")},
fY(a,b,c){if(0>a||a>c)throw A.d(A.dR(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.d(A.dR(b,a,c,"end",null))
return b}return c},
fL(a,b,c,d){return new A.bs(b,!0,a,d,"Index out of range")},
cU(a){return new A.aV(a)},
ez(a){return new A.bP(a)},
a0(a){return new A.bq(a)},
ch(a){return new A.d_(a)},
fQ(a,b,c){var s,r
if(A.ea(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.a([],t.s)
$.A.push(a)
try{A.hV(a,s)}finally{if(0>=$.A.length)return A.e($.A,-1)
$.A.pop()}r=A.ev(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
dL(a,b,c){var s,r
if(A.ea(a))return b+"..."+c
s=new A.bO(b)
$.A.push(a)
try{r=s
r.a=A.ev(r.a,a,", ")}finally{if(0>=$.A.length)return A.e($.A,-1)
$.A.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
hV(a,b){var s,r,q,p,o,n,m,l=a.gt(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.l())return
s=A.n(l.gm())
b.push(s)
k+=s.length+2;++j}if(!l.l()){if(j<=5)return
if(0>=b.length)return A.e(b,-1)
r=b.pop()
if(0>=b.length)return A.e(b,-1)
q=b.pop()}else{p=l.gm();++j
if(!l.l()){if(j<=4){b.push(A.n(p))
return}r=A.n(p)
if(0>=b.length)return A.e(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gm();++j
for(;l.l();p=o,o=n){n=l.gm();++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return A.e(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=A.n(p)
r=A.n(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.e(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
cs(a,b,c,d){var s
if(B.f===c){s=B.a.gk(a)
b=J.I(b)
return A.dV(A.U(A.U($.dG(),s),b))}if(B.f===d){s=B.a.gk(a)
b=J.I(b)
c=J.I(c)
return A.dV(A.U(A.U(A.U($.dG(),s),b),c))}s=B.a.gk(a)
b=J.I(b)
c=J.I(c)
d=J.I(d)
d=A.dV(A.U(A.U(A.U(A.U($.dG(),s),b),c),d))
return d},
ix(a){A.cb(a)},
ax:function ax(a){this.a=a},
cZ:function cZ(){},
l:function l(){},
bo:function bo(a){this.a=a},
K:function K(){},
E:function E(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ah:function ah(a,b,c,d,e,f){var _=this
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
aV:function aV(a){this.a=a},
bP:function bP(a){this.a=a},
aj:function aj(a){this.a=a},
bq:function bq(a){this.a=a},
bK:function bK(){},
aU:function aU(){},
d_:function d_(a){this.a=a},
aa:function aa(){},
aN:function aN(a,b,c){this.a=a
this.b=b
this.$ti=c},
t:function t(){},
i:function i(){},
c5:function c5(){},
bO:function bO(a){this.a=a},
dQ(){return B.G},
de:function de(){},
R:function R(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ac:function ac(a,b){this.a=a
this.b=b},
ad:function ad(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
af:function af(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=0},
h_(a,b,c,d,e,f,g,h){var s,r,q,p=self,o=p.document.createElement("canvas"),n=h*g
o.width=n
s=d*f
o.height=s
r=p.document.createElement("canvas")
r.width=n
r.height=s
s=A.a([],t.x)
for(q=0;q<d;++q){p=B.a.u(h,32)
s.push(new Uint32Array(p+1))}p=new A.bN(e,d,h,g,f,c,a,o,r,s)
p.b9(a,b,c,d,e,f,g,h)
return p},
dT(a){return new A.u(B.a.u(a,32),31-B.a.j(a,32))},
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
cw:function cw(a){this.a=a},
cx:function cx(a){this.a=a},
cy:function cy(a){this.a=a},
cz:function cz(a){this.a=a},
cv:function cv(){},
G:function G(a){this.b=a},
ew(a,b,c,d,e,f,g,h,i){var s,r,q,p,o=null,n=A.h_("black",b,c,h*(8+g),d,e,f,a*8),m=A.a([],t.I)
for(s=t.U,r=0;r<h;++r){q=A.a([],s)
for(p=0;p<a;++p)q.push(new A.R(r,p," ",c))
m.push(q)}n=new A.cH(h,a,g,c,b,d,n,new A.af(h,a),new A.af(h,a),new A.af(h,a),!1,A.dU(t.N),A.dU(t.V),A.dU(t.q),B.h,m,A.fT(t.B),B.dR)
n.ba("black",a,b,c,o,d,e,f,g,h,!1,o,o,o,o,o,o)
return n},
ai:function ai(a){this.b=a},
cH:function cH(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.Q=k
_.as=l
_.at=m
_.ax=n
_.ay=o
_.ch=p
_.CW=q
_.cx=r
_.cy=!1},
cP:function cP(a){this.a=a},
cO:function cO(){},
cN:function cN(a){this.a=a},
cI:function cI(a){this.a=a},
cJ:function cJ(a){this.a=a},
cK:function cK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cL:function cL(a,b,c){this.a=a
this.b=b
this.c=c},
cM:function cM(a){this.a=a},
fK(){var s,r,q,p,o=A.a([],t.G),n=A.a([],t.M)
for(s=t.w,r=0;r<9;++r){q=A.a([],s)
for(p=0;p<9;++p)q.push(new A.aJ(B.c))
n.push(q)}return new A.cl(n,o,new A.ct())},
F:function F(a){this.b=a},
aJ:function aJ(a){var _=this
_.a="."
_.b=""
_.c=a
_.d=null},
ct:function ct(){this.b=this.a=0},
cl:function cl(a,b,c){this.a=a
this.b=b
this.c=c},
cm:function cm(a,b){this.a=a
this.b=b},
cn:function cn(){},
f9(a){var s=self.document.getElementById(a)
return s==null?t.m.a(s):s},
bk(){var s=0,r=A.eY(t.H),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$bk=A.f3(function(a1,a2){if(a1===1)return A.eO(a2,r)
while(true)switch(s){case 0:a=new A.cj(A.a([],t.n),B.n)
a0=$.dH()
a0.R()
a.aF()
p=a0.at,o=A.bf(p).i("al<1>"),n=!a0.r
case 3:if(!!0){s=4
break}if(n)A.cd(A.ch("Terminal not interactive."))
if(a0.ay!==B.h)A.cd(A.ch("Terminal already awaiting input."))
a0.ay=B.w
s=5
return A.dq(new A.al(p,o).gbE(0),$async$bk)
case 5:m=a2
case 6:switch(a.b){case B.n:s=8
break
case B.m:s=9
break
case B.r:s=10
break
case B.t:s=11
break
default:s=7
break}break
case 8:l=$.at()
l.b2()
s=12
return A.dq(a.P(),$async$bk)
case 12:l=l.c
k=l.a
l=l.b
k=B.a.j(k,9)
a0.J("yellow",2*B.a.j(l,9)+2,2*k+2)
a0.F()
a.b=B.m
s=7
break
case 9:l=$.at()
k=l.c
j=k.a
i=k.b
h=l.a
if(!(j>=0&&j<h.length)){q=A.e(h,j)
s=1
break}g=h[j]
if(!(i>=0&&i<g.length)){q=A.e(g,i)
s=1
break}f=g[i].c.gaq()
e=m.b.toLowerCase()
g=B.a.j(j+f.a,9)
if(!(g<h.length)){q=A.e(h,g)
s=1
break}d=h[g]
c=B.a.j(i+f.b,9)
if(!(c<d.length)){q=A.e(d,c)
s=1
break}b=d[c].a
if(e.length!==0)d=A.iz("abcdefghijklmnopqrstuvwxyz",e,0)
else d=!1
if(d)if(b===e){l.aY()
l=B.a.j(j,9)
a0.J("limegreen",2*B.a.j(i,9)+2,2*l+2)
a0.F()
g=2*g+2
c=2*c+2
a0.J("yellow",c,g)
a0.F()
l=k.a
if(!(l>=0&&l<h.length)){q=A.e(h,l)
s=1
break}l=h[l]
i=k.b
if(!(i>=0&&i<l.length)){q=A.e(l,i)
s=1
break}i=l[i].b
l=$.Q()
l.a7(i,"white",B.a.u(l.b-i.length,2),3)
j=k.a
if(!(j>=0&&j<h.length)){q=A.e(h,j)
s=1
break}j=h[j]
k=k.b
if(!(k>=0&&k<j.length)){q=A.e(j,k)
s=1
break}k=j[k]
if(k.d.a===k.b){l.aw("Good job! Press enter to continue!","lightgreen",l.a-2)
a0.J("limegreen",c,g)
a0.F()
a.b=B.r}}else{l=$.Q()
l.aw("Too bad! Press enter to continue!","orangered",l.a-2)
j=k.a
if(!(j>=0&&j<h.length)){q=A.e(h,j)
s=1
break}j=h[j]
k=k.b
if(!(k>=0&&k<j.length)){q=A.e(j,k)
s=1
break}k=j[k].d.a
l.a7(k,"orangered",B.a.u(l.b-k.length,2),3)
a.b=B.t}s=7
break
case 10:s=m.a===13?13:14
break
case 13:l=$.at()
s=l.aY()?15:17
break
case 15:l=l.c
k=l.a
l=l.b
a.aC()
k=B.a.j(k,9)
a0.J("yellow",2*B.a.j(l,9)+2,2*k+2)
a0.F()
a.b=B.m
s=16
break
case 17:l.b2()
s=18
return A.dq(a.P(),$async$bk)
case 18:a.aC()
a.b=B.m
case 16:case 14:s=7
break
case 11:if(m.a===13){a.aF()
a.b=B.n}s=7
break
case 7:s=3
break
case 4:case 1:return A.eP(q,r)}})
return A.eQ($async$bk,r)},
a9:function a9(a){this.b=a},
cj:function cj(a,b){this.a=a
this.b=b},
ck:function ck(){},
c(a,b){return new A.bS(b,a)},
bS:function bS(a,b){this.a=a
this.b=b},
cb(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
iA(a){A.ee(new A.aI("Field '"+a+"' has been assigned during initialization."),new Error())},
a8(){A.ee(new A.aI("Field '' has not been initialized."),new Error())},
be(a){var s
if(typeof a=="function")throw A.d(A.av("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.hy,a)
s[$.dE()]=a
return s},
eU(a){var s
if(typeof a=="function")throw A.d(A.av("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.hz,a)
s[$.dE()]=a
return s},
hy(a){return a.$0()},
hz(a,b,c){if(c>=1)return a.$1(b)
return a.$0()}},B={}
var w=[A,J,B]
var $={}
A.dM.prototype={}
J.bt.prototype={
C(a,b){return a===b},
gk(a){return A.ag(a)},
h(a){return"Instance of '"+A.cu(a)+"'"},
gn(a){return A.a6(A.e1(this))}}
J.bu.prototype={
h(a){return String(a)},
gk(a){return a?519018:218159},
gn(a){return A.a6(t.y)},
$ik:1}
J.aD.prototype={
C(a,b){return null==b},
h(a){return"null"},
gk(a){return 0},
$ik:1,
$it:1}
J.aF.prototype={$io:1}
J.T.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.bL.prototype={}
J.a3.prototype={}
J.S.prototype={
h(a){var s=a[$.dE()]
if(s==null)return this.b8(a)
return"JavaScript function for "+J.bm(s)}}
J.aE.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.aG.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.q.prototype={
by(a,b){a.$flags&1&&A.bl(a,"addAll",2)
this.be(a,b)
return},
be(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw A.d(A.a0(a))
for(s=0;s<r;++s)a.push(b[s])},
A(a){a.$flags&1&&A.bl(a,"clear","clear")
a.length=0},
S(a,b){var s,r,q=a.length,p=A.dO(q,"",t.N)
for(s=0;s<a.length;++s){r=A.n(a[s])
if(!(s<q))return A.e(p,s)
p[s]=r}return p.join(b)},
bF(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw A.d(A.a0(a))}return s},
bG(a,b,c){return this.bF(a,b,c,t.z)},
h(a){return A.dL(a,"[","]")},
gt(a){return new J.bn(a,a.length,A.e0(a).i("bn<1>"))},
gk(a){return A.ag(a)},
gp(a){return a.length},
$ih:1}
J.co.prototype={}
J.bn.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.d(A.cc(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.ab.prototype={
bU(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.d(A.cU(""+a+".toInt()"))},
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
return this.aS(a,b)},
u(a,b){return(a|0)===a?a/b|0:this.aS(a,b)},
aS(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.cU("Result of truncating division is "+A.n(s)+": "+A.n(a)+" ~/ "+b))},
T(a,b){if(b<0)throw A.d(A.e5(b))
return b>31?0:a<<b>>>0},
bv(a,b){return b>31?0:a<<b>>>0},
b6(a,b){var s
if(b<0)throw A.d(A.e5(b))
if(a>0)s=this.ah(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
bw(a,b){var s
if(a>0)s=this.ah(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
E(a,b){if(0>b)throw A.d(A.e5(b))
return this.ah(a,b)},
ah(a,b){return b>31?0:a>>>b},
gn(a){return A.a6(t.o)},
$iv:1}
J.aC.prototype={
gn(a){return A.a6(t.S)},
$ik:1,
$if:1}
J.bv.prototype={
gn(a){return A.a6(t.i)},
$ik:1}
J.a1.prototype={
b7(a,b,c){return a.substring(b,A.fY(b,c,a.length))},
bV(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.e(p,0)
if(p.charCodeAt(0)===133){s=J.fR(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.e(p,r)
q=p.charCodeAt(r)===133?J.fS(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
I(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.F)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
bM(a,b,c){var s=b-a.length
if(s<=0)return a
return this.I(c,s)+a},
h(a){return a},
gk(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gn(a){return A.a6(t.N)},
gp(a){return a.length},
$ik:1,
$iz:1}
A.aI.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.dD.prototype={
$0(){var s=new A.m($.j,t.D)
s.a8(null)
return s},
$S:8}
A.cA.prototype={}
A.ay.prototype={}
A.bz.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s,r=this,q=r.a,p=J.fa(q),o=p.gp(q)
if(r.b!==o)throw A.d(A.a0(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.bD(q,s);++r.c
return!0}}
A.bR.prototype={
l(){var s,r
for(s=this.a,r=this.b;s.l();)if(r.$1(s.gm()))return!0
return!1},
gm(){return this.a.gm()}}
A.aA.prototype={}
A.u.prototype={$r:"+(1,2)",$s:1}
A.br.prototype={
h(a){return A.dP(this)}}
A.aB.prototype={
a_(){var s=this,r=s.$map
if(r==null){r=new A.aH(s.$ti.i("aH<1,2>"))
A.f8(s.a,r)
s.$map=r}return r},
ak(a){return this.a_().ak(a)},
q(a,b){return this.a_().q(0,b)},
am(a,b){this.a_().am(0,b)},
gp(a){return this.a_().a}}
A.cR.prototype={
B(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.aS.prototype={
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
A.cr.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.az.prototype={}
A.b6.prototype={
h(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iC:1}
A.a_.prototype={
h(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.ff(r==null?"unknown":r)+"'"},
gbX(){return this},
$C:"$1",
$R:1,
$D:null}
A.ce.prototype={$C:"$0",$R:0}
A.cf.prototype={$C:"$2",$R:2}
A.cG.prototype={}
A.cB.prototype={
h(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.ff(s)+"'"}}
A.aw.prototype={
C(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.aw))return!1
return this.$_target===b.$_target&&this.a===b.a},
gk(a){return(A.ec(this.a)^A.ag(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.cu(this.a)+"'")}}
A.bY.prototype={
h(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.bM.prototype={
h(a){return"RuntimeError: "+this.a}}
A.a2.prototype={
gp(a){return this.a},
ak(a){var s=this.b
if(s==null)return!1
return s[a]!=null},
q(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.bI(b)},
bI(a){var s,r,q=this.d
if(q==null)return null
s=q[this.an(a)]
r=this.ao(s,a)
if(r<0)return null
return s[r].b},
am(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw A.d(A.a0(s))
r=r.c}},
V(a,b){var s=this,r=new A.cp(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&1073741823
return r},
an(a){return J.I(a)&1073741823},
ao(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.au(a[r].a,b))return r
return-1},
h(a){return A.dP(this)}}
A.cp.prototype={}
A.aL.prototype={
gp(a){return this.a.a},
gt(a){var s=this.a
return new A.by(s,s.r,s.e)}}
A.by.prototype={
gm(){return this.d},
l(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.a0(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}}}
A.aK.prototype={
gp(a){return this.a.a},
gt(a){var s=this.a
return new A.bx(s,s.r,s.e,this.$ti.i("bx<1,2>"))}}
A.bx.prototype={
gm(){var s=this.d
s.toString
return s},
l(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.a0(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.aN(s.a,s.b,r.$ti.i("aN<1,2>"))
r.c=s.c
return!0}}}
A.aH.prototype={
an(a){return A.ic(a)&1073741823},
ao(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.au(a[r].a,b))return r
return-1}}
A.dy.prototype={
$1(a){return this.a(a)},
$S:9}
A.dz.prototype={
$2(a,b){return this.a(a,b)},
$S:10}
A.dA.prototype={
$1(a){return this.a(a)},
$S:11}
A.an.prototype={
h(a){return this.aU(!1)},
aU(a){var s,r,q,p,o,n=this.bm(),m=this.aN(),l=(a?""+"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.e(m,q)
o=m[q]
l=a?l+A.er(o):l+A.n(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
bm(){var s,r=this.$s
for(;$.b4.length<=r;)$.b4.push(null)
s=$.b4[r]
if(s==null){s=this.bl()
if(!(r<$.b4.length))return A.e($.b4,r)
$.b4[r]=s}return s},
bl(){var s,r,q,p,o,n=this.$r,m=n.indexOf("("),l=n.substring(1,m),k=n.substring(m),j=k==="()"?0:k.replace(/[^,]/g,"").length+1,i=A.a(new Array(j),t.f)
for(s=0;s<j;++s)i[s]=s
if(l!==""){r=l.split(",")
s=r.length
for(q=i.length,p=j;s>0;){--p;--s
o=r[s]
if(!(p>=0&&p<q))return A.e(i,p)
i[p]=o}}i=A.fU(i,!1,t.K)
i.$flags=3
return i}}
A.c3.prototype={
aN(){return[this.a,this.b]},
C(a,b){if(b==null)return!1
return b instanceof A.c3&&this.$s===b.$s&&J.au(this.a,b.a)&&J.au(this.b,b.b)},
gk(a){return A.cs(this.$s,this.a,this.b,B.f)}}
A.bA.prototype={
gn(a){return B.e3},
$ik:1}
A.aQ.prototype={}
A.bB.prototype={
gn(a){return B.e4},
$ik:1}
A.ae.prototype={
gp(a){return a.length},
$iy:1}
A.aO.prototype={
q(a,b){A.a5(b,a,a.length)
return a[b]},
$ih:1}
A.aP.prototype={$ih:1}
A.bC.prototype={
gn(a){return B.e5},
$ik:1}
A.bD.prototype={
gn(a){return B.e6},
$ik:1}
A.bE.prototype={
gn(a){return B.e7},
q(a,b){A.a5(b,a,a.length)
return a[b]},
$ik:1}
A.bF.prototype={
gn(a){return B.e8},
q(a,b){A.a5(b,a,a.length)
return a[b]},
$ik:1}
A.bG.prototype={
gn(a){return B.e9},
q(a,b){A.a5(b,a,a.length)
return a[b]},
$ik:1}
A.bH.prototype={
gn(a){return B.eb},
q(a,b){A.a5(b,a,a.length)
return a[b]},
$ik:1}
A.bI.prototype={
gn(a){return B.ec},
q(a,b){A.a5(b,a,a.length)
return a[b]},
$ik:1,
$icT:1}
A.aR.prototype={
gn(a){return B.ed},
gp(a){return a.length},
q(a,b){A.a5(b,a,a.length)
return a[b]},
$ik:1}
A.bJ.prototype={
gn(a){return B.ee},
gp(a){return a.length},
q(a,b){A.a5(b,a,a.length)
return a[b]},
$ik:1}
A.b0.prototype={}
A.b1.prototype={}
A.b2.prototype={}
A.b3.prototype={}
A.B.prototype={
i(a){return A.bd(v.typeUniverse,this,a)},
a9(a){return A.eL(v.typeUniverse,this,a)}}
A.c1.prototype={}
A.c6.prototype={
h(a){return A.x(this.a,null)}}
A.c0.prototype={
h(a){return this.a}}
A.b9.prototype={$iK:1}
A.cW.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:2}
A.cV.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:12}
A.cX.prototype={
$0(){this.a.$0()},
$S:1}
A.cY.prototype={
$0(){this.a.$0()},
$S:1}
A.b8.prototype={
bb(a,b){if(self.setTimeout!=null)self.setTimeout(A.ca(new A.dm(this,b),0),a)
else throw A.d(A.cU("`setTimeout()` not found."))},
bc(a,b){if(self.setTimeout!=null)self.setInterval(A.ca(new A.dl(this,a,Date.now(),b),0),a)
else throw A.d(A.cU("Periodic timer."))},
$icQ:1}
A.dm.prototype={
$0(){this.a.c=1
this.b.$0()},
$S:0}
A.dl.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.a.G(s,o)}q.c=p
r.d.$1(q)},
$S:1}
A.bT.prototype={}
A.dr.prototype={
$1(a){return this.a.$2(0,a)},
$S:4}
A.ds.prototype={
$2(a,b){this.a.$2(1,new A.az(a,b))},
$S:13}
A.dv.prototype={
$2(a,b){this.a(a,b)},
$S:14}
A.Z.prototype={
h(a){return A.n(this.a)},
$il:1,
gU(){return this.b}}
A.al.prototype={}
A.aX.prototype={
ae(){},
af(){}}
A.bV.prototype={
gbo(){return this.c<4},
bt(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
bx(a,b,c,d){var s,r,q,p,o,n=this
if((n.c&4)!==0){s=new A.aZ($.j)
A.ed(s.gbp())
s.c=c
return s}s=$.j
r=d?1:0
q=A.eA(s,a)
A.ha(s,b)
p=new A.aX(n,q,s,r|32,A.bf(n).i("aX<1>"))
p.CW=p
p.ch=p
p.ay=n.c&1
o=n.e
n.e=p
p.ch=null
p.CW=o
if(o==null)n.d=p
else o.ch=p
if(n.d===p)A.f1(n.a)
return p},
bs(a){var s,r=this
A.bf(r).i("aX<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.bt(a)
if((r.c&2)===0&&r.d==null)r.bi()}return null},
bf(){if((this.c&4)!==0)return new A.aj("Cannot add new events after calling close")
return new A.aj("Cannot add new events while doing an addStream")},
H(a,b){if(!this.gbo())throw A.d(this.bf())
this.ag(b)},
bi(){if((this.c&4)!==0)if(null.gbY())null.a8(null)
A.f1(this.b)}}
A.aW.prototype={
ag(a){var s
for(s=this.d;s!=null;s=s.ch)s.bg(new A.bZ(a))}}
A.ci.prototype={
$0(){this.c.a(null)
this.b.Y(null)},
$S:0}
A.V.prototype={
bJ(a){if((this.c&15)!==6)return!0
return this.b.b.aA(this.d,a.a)},
bH(a){var s,r=this.e,q=null,p=a.a,o=this.b.b
if(t.C.b(r))q=o.bQ(r,p,a.b)
else q=o.aA(r,p)
try{p=q
return p}catch(s){if(t.c.b(A.P(s))){if((this.c&1)!==0)throw A.d(A.av("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.av("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.m.prototype={
aB(a,b,c){var s,r=$.j
if(r===B.b){if(!t.C.b(b)&&!t.v.b(b))throw A.d(A.dJ(b,"onError",u.c))}else b=A.i_(b,r)
s=new A.m(r,c.i("m<0>"))
this.W(new A.V(s,3,a,b,this.$ti.i("@<1>").a9(c).i("V<1,2>")))
return s},
aT(a,b,c){var s=new A.m($.j,c.i("m<0>"))
this.W(new A.V(s,19,a,b,this.$ti.i("@<1>").a9(c).i("V<1,2>")))
return s},
bu(a){this.a=this.a&1|16
this.c=a},
X(a){this.a=a.a&30|this.a&1
this.c=a.c},
W(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.W(a)
return}s.X(r)}A.ap(null,null,s.b,new A.d0(s,a))}},
aR(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.aR(a)
return}n.X(s)}m.a=n.a0(a)
A.ap(null,null,n.b,new A.d8(m,n))}},
N(){var s=this.c
this.c=null
return this.a0(s)},
a0(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
aI(a){var s,r,q,p=this
p.a^=2
try{a.aB(new A.d5(p),new A.d6(p),t.P)}catch(q){s=A.P(q)
r=A.H(q)
A.ed(new A.d7(p,s,r))}},
Y(a){var s,r=this,q=r.$ti
if(q.i("J<1>").b(a))if(q.b(a))A.d3(a,r,!0)
else r.aI(a)
else{s=r.N()
r.a=8
r.c=a
A.a4(r,s)}},
aa(a){var s=this,r=s.N()
s.a=8
s.c=a
A.a4(s,r)},
bk(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.N()
q.X(a)
A.a4(q,r)},
D(a,b){var s=this.N()
this.bu(new A.Z(a,b))
A.a4(this,s)},
a8(a){if(this.$ti.i("J<1>").b(a)){this.aJ(a)
return}this.bh(a)},
bh(a){this.a^=2
A.ap(null,null,this.b,new A.d2(this,a))},
aJ(a){if(this.$ti.b(a)){A.d3(a,this,!1)
return}this.aI(a)},
aH(a,b){this.a^=2
A.ap(null,null,this.b,new A.d1(this,a,b))},
$iJ:1}
A.d0.prototype={
$0(){A.a4(this.a,this.b)},
$S:0}
A.d8.prototype={
$0(){A.a4(this.b,this.a.a)},
$S:0}
A.d5.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.aa(p.$ti.c.a(a))}catch(q){s=A.P(q)
r=A.H(q)
p.D(s,r)}},
$S:2}
A.d6.prototype={
$2(a,b){this.a.D(a,b)},
$S:6}
A.d7.prototype={
$0(){this.a.D(this.b,this.c)},
$S:0}
A.d4.prototype={
$0(){A.d3(this.a.a,this.b,!0)},
$S:0}
A.d2.prototype={
$0(){this.a.aa(this.b)},
$S:0}
A.d1.prototype={
$0(){this.a.D(this.b,this.c)},
$S:0}
A.db.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.b3(q.d)}catch(p){s=A.P(p)
r=A.H(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.dK(q)
n=k.a
n.c=new A.Z(q,o)
q=n}q.b=!0
return}if(j instanceof A.m&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.m){m=k.b.a
l=new A.m(m.b,m.$ti)
j.aB(new A.dc(l,m),new A.dd(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.dc.prototype={
$1(a){this.a.bk(this.b)},
$S:2}
A.dd.prototype={
$2(a,b){this.a.D(a,b)},
$S:6}
A.da.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
q.c=p.b.b.aA(p.d,this.b)}catch(o){s=A.P(o)
r=A.H(o)
q=s
p=r
if(p==null)p=A.dK(q)
n=this.a
n.c=new A.Z(q,p)
n.b=!0}},
$S:0}
A.d9.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.bJ(s)&&p.a.e!=null){p.c=p.a.bH(s)
p.b=!1}}catch(o){r=A.P(o)
q=A.H(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.dK(p)
m=l.b
m.c=new A.Z(p,n)
p=m}p.b=!0}},
$S:0}
A.bU.prototype={}
A.ak.prototype={
gp(a){var s={},r=new A.m($.j,t.a)
s.a=0
this.aX(new A.cE(s,this),!0,new A.cF(s,r),r.gaL())
return r},
gbE(a){var s=new A.m($.j,this.$ti.i("m<1>")),r=this.aX(null,!0,new A.cC(s),s.gaL())
r.aZ(new A.cD(this,r,s))
return s}}
A.cE.prototype={
$1(a){++this.a.a},
$S(){return this.b.$ti.i("~(1)")}}
A.cF.prototype={
$0(){this.b.Y(this.a.a)},
$S:0}
A.cC.prototype={
$0(){var s,r,q,p
try{q=A.fP()
throw A.d(q)}catch(p){s=A.P(p)
r=A.H(p)
A.hB(this.a,s,r)}},
$S:0}
A.cD.prototype={
$1(a){A.hA(this.b,this.c,a)},
$S(){return this.a.$ti.i("~(1)")}}
A.aY.prototype={
gk(a){return(A.ag(this.a)^892482866)>>>0},
C(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.al&&b.a===this.a}}
A.bX.prototype={
aQ(){return this.w.bs(this)},
ae(){},
af(){}}
A.bW.prototype={
aZ(a){this.a=A.eA(this.d,a)},
aV(){var s,r=this,q=r.e&=4294967279
if((q&8)===0){q=r.e=q|8
if((q&128)!==0){s=r.r
if(s.a===1)s.a=3}if((q&64)===0)r.r=null
r.f=r.aQ()}q=$.dF()
return q},
ae(){},
af(){},
aQ(){return null},
bg(a){var s,r,q=this,p=q.r
if(p==null)p=q.r=new A.c2()
s=p.c
if(s==null)p.b=p.c=a
else p.c=s.a=a
r=q.e
if((r&128)===0){r|=128
q.e=r
if(r<256)p.aE(q)}},
ag(a){var s=this,r=s.e
s.e=r|64
s.d.b5(s.a,a)
s.e&=4294967231
s.bj((r&4)!==0)},
bj(a){var s,r,q=this,p=q.e
if((p&128)!==0&&q.r.c==null){p=q.e=p&4294967167
s=!1
if((p&4)!==0)if(p<256){s=q.r
s=s==null?null:s.c==null
s=s!==!1}if(s){p&=4294967291
q.e=p}}for(;!0;a=r){if((p&8)!==0){q.r=null
return}r=(p&4)!==0
if(a===r)break
q.e=p^64
if(r)q.ae()
else q.af()
p=q.e&=4294967231}if((p&128)!==0&&p<256)q.r.aE(q)}}
A.b7.prototype={
aX(a,b,c,d){return this.a.bx(a,d,c,!0)}}
A.c_.prototype={}
A.bZ.prototype={}
A.c2.prototype={
aE(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.ed(new A.dh(s,a))
s.a=1}}
A.dh.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.a
q.b=r
if(r==null)q.c=null
this.b.ag(s.b)},
$S:0}
A.aZ.prototype={
aZ(a){},
aV(){this.a=-1
this.c=null
return $.dF()},
bq(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.b4(s)}}else r.a=q}}
A.c4.prototype={}
A.dt.prototype={
$0(){return this.a.Y(this.b)},
$S:0}
A.dp.prototype={}
A.du.prototype={
$0(){A.fG(this.a,this.b)},
$S:0}
A.di.prototype={
b4(a){var s,r,q
try{if(B.b===$.j){a.$0()
return}A.eZ(null,null,this,a)}catch(q){s=A.P(q)
r=A.H(q)
A.c9(s,r)}},
bT(a,b){var s,r,q
try{if(B.b===$.j){a.$1(b)
return}A.f_(null,null,this,a,b)}catch(q){s=A.P(q)
r=A.H(q)
A.c9(s,r)}},
b5(a,b){return this.bT(a,b,t.z)},
ai(a){return new A.dj(this,a)},
bA(a,b){return new A.dk(this,a,b)},
bP(a){if($.j===B.b)return a.$0()
return A.eZ(null,null,this,a)},
b3(a){return this.bP(a,t.z)},
bS(a,b){if($.j===B.b)return a.$1(b)
return A.f_(null,null,this,a,b)},
aA(a,b){var s=t.z
return this.bS(a,b,s,s)},
bR(a,b,c){if($.j===B.b)return a.$2(b,c)
return A.i0(null,null,this,a,b,c)},
bQ(a,b,c){var s=t.z
return this.bR(a,b,c,s,s,s)},
bN(a){return a},
az(a){var s=t.z
return this.bN(a,s,s,s)}}
A.dj.prototype={
$0(){return this.a.b4(this.b)},
$S:0}
A.dk.prototype={
$1(a){return this.a.b5(this.b,a)},
$S(){return this.c.i("~(0)")}}
A.b_.prototype={
gt(a){var s=this,r=new A.am(s,s.r,s.$ti.i("am<1>"))
r.c=s.e
return r},
gp(a){return this.a},
H(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.aG(s==null?q.b=A.dX():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.aG(r==null?q.c=A.dX():r,b)}else return q.bd(b)},
bd(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.dX()
s=J.I(a)&1073741823
r=p[s]
if(r==null)p[s]=[q.ad(a)]
else{if(q.bn(r,a)>=0)return!1
r.push(q.ad(a))}return!0},
aG(a,b){if(a[b]!=null)return!1
a[b]=this.ad(b)
return!0},
aP(){this.r=this.r+1&1073741823},
ad(a){var s,r=this,q=new A.dg(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.aP()
return q},
bn(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.au(a[r].a,b))return r
return-1}}
A.dg.prototype={}
A.am.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.d(A.a0(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.p.prototype={
gt(a){return new A.bz(a,this.gp(a),A.bi(a).i("bz<p.E>"))},
bD(a,b){return this.q(a,b)},
h(a){return A.dL(a,"[","]")}}
A.aM.prototype={
gp(a){return this.a},
h(a){return A.dP(this)}}
A.cq.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.n(a)
s=r.a+=s
r.a=s+": "
s=A.n(b)
r.a+=s},
$S:15}
A.aT.prototype={
h(a){return A.dL(this,"{","}")}}
A.b5.prototype={}
A.ax.prototype={
C(a,b){if(b==null)return!1
return b instanceof A.ax&&this.a===b.a},
gk(a){return B.a.gk(this.a)},
h(a){var s,r,q,p,o=this.a,n=B.a.u(o,36e8)
o%=36e8
s=B.a.u(o,6e7)
o%=6e7
r=s<10?"0":""
q=B.a.u(o,1e6)
p=q<10?"0":""
return""+n+":"+r+s+":"+p+q+"."+B.e.bM(B.a.h(o%1e6),6,"0")}}
A.cZ.prototype={
h(a){return this.Z()}}
A.l.prototype={
gU(){return A.fW(this)}}
A.bo.prototype={
h(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.cg(s)
return"Assertion failed"}}
A.K.prototype={}
A.E.prototype={
gac(){return"Invalid argument"+(!this.a?"(s)":"")},
gab(){return""},
h(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.gac()+q+o
if(!s.a)return n
return n+s.gab()+": "+A.cg(s.gap())},
gap(){return this.b}}
A.ah.prototype={
gap(){return this.b},
gac(){return"RangeError"},
gab(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.n(q):""
else if(q==null)s=": Not greater than or equal to "+A.n(r)
else if(q>r)s=": Not in inclusive range "+A.n(r)+".."+A.n(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.n(r)
return s}}
A.bs.prototype={
gap(){return this.b},
gac(){return"RangeError"},
gab(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gp(a){return this.f}}
A.aV.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.bP.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.aj.prototype={
h(a){return"Bad state: "+this.a}}
A.bq.prototype={
h(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.cg(s)+"."}}
A.bK.prototype={
h(a){return"Out of Memory"},
gU(){return null},
$il:1}
A.aU.prototype={
h(a){return"Stack Overflow"},
gU(){return null},
$il:1}
A.d_.prototype={
h(a){return"Exception: "+this.a}}
A.aa.prototype={
bz(a,b){var s
for(s=this.gt(this);s.l();)if(b.$1(s.gm()))return!0
return!1},
gp(a){var s,r=this.gt(this)
for(s=0;r.l();)++s
return s},
h(a){return A.fQ(this,"(",")")}}
A.aN.prototype={
h(a){return"MapEntry("+A.n(this.a)+": "+A.n(this.b)+")"}}
A.t.prototype={
gk(a){return A.i.prototype.gk.call(this,0)},
h(a){return"null"}}
A.i.prototype={$ii:1,
C(a,b){return this===b},
gk(a){return A.ag(this)},
h(a){return"Instance of '"+A.cu(this)+"'"},
gn(a){return A.il(this)},
toString(){return this.h(this)}}
A.c5.prototype={
h(a){return""},
$iC:1}
A.bO.prototype={
gp(a){return this.a.length},
h(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.de.prototype={
a5(a){if(a<=0||a>4294967296)throw A.d(A.fX("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
A.R.prototype={
gk(a){var s=this.a,r=this.b
return A.cs(new A.u(s,r).$s,s,r,B.f)},
C(a,b){var s,r,q,p
if(b==null)return!1
if(b instanceof A.R){s=b.a
r=b.b
q=this.a
p=this.b
p=A.cs(new A.u(s,r).$s,s,r,B.f)===A.cs(new A.u(q,p).$s,q,p,B.f)
s=p}else s=!1
return s},
h(a){var s=this
return"("+s.a+" "+s.b+") => '"+s.c+"' "+s.d}}
A.ac.prototype={}
A.ad.prototype={
h(a){var s=this
return"               row: "+s.a+"\n            column: "+s.b+"\n         character: '"+s.c+"'\n    characterColor: "+s.d+"\n\n          pixelRow: "+s.e+"\n       pixelColumn: "+s.f+"\n         pixelIsOn: "+s.r+"\n    "}}
A.af.prototype={
sa3(a){var s,r,q,p=this
if(a<0){s=p.d=a
for(r=p.b,q=p.a;s<0;){s+=r
p.d=s
p.c=B.a.j(p.c-1,q)}}else{s=p.b
p.c=B.a.j(p.c+B.a.G(a,s),p.a)
p.d=B.a.j(a,s)}},
gv(){return this.c*this.b+this.d},
sv(a){var s=this,r=s.b
s.c=B.a.j(B.a.G(a,r),s.a)
s.d=B.a.j(a,r)}}
A.bN.prototype={
b9(a,b,c,d,e,f,g,h){var s,r=this,q=self.document
q.onfocus=A.be(new A.cw(r))
q.onblur=A.be(new A.cx(r))
q=r.w
q.tabIndex=-1
q.style.display="block"
q.style.outline="none"
s=q.getContext("2d")
if(s==null)s=t.m.a(s)
s.imageSmoothingEnabled=!1
q.onfocus=A.be(new A.cy(r))
q.onblur=A.be(new A.cz(r))
b.style.display="flex"
b.style.alignItems="flex-start"
b.style.padding="0"
b.style.margin="0"
b.style.width="fit-content"
b.style.height="fit-content"
b.style.background="gray"
b.appendChild(q)
r.A(0)},
a2(a,b){return new A.u(B.a.j(a,this.b),B.a.j(b,this.c))},
aK(){var s=this.x,r=s.getContext("2d")
if(r==null)r=t.m.a(r)
r.save()
r.beginPath()
r.clearRect(0,0,s.width,s.height)
r.restore()
return r},
aM(){var s=this.w.getContext("2d")
if(s==null)s=t.m.a(s)
s.save()
s.beginPath()
s.drawImage(this.x,0,0)
s.restore()
return s},
K(a,b,c,d){var s,r,q,p,o,n,m=this,l=a<0||a>=m.b||b<0||b>=m.c
if(l)return
s=m.a2(a,b)
a=s.a
b=s.b
r=A.dT(b)
q=r.a
p=B.a.T(1,r.b)
l=m.y
if(!(a>=0&&a<l.length))return A.e(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.e(l,q)
o=l[q]
l.$flags&2&&A.bl(l)
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
L(a,b,c,d,e){var s,r,q,p,o,n,m=this,l=a<0||a>=m.b||b<0||b>=m.c
if(l)return
s=m.a2(a,b)
a=s.a
b=s.b
r=A.dT(b)
q=r.a
p=B.a.T(1,r.b)
l=m.y
if(!(a>=0&&a<l.length))return A.e(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.e(l,q)
o=l[q]
l.$flags&2&&A.bl(l)
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
b0(a,b){var s,r,q,p,o=this.a2(b,a)
b=o.a
s=A.dT(o.b)
r=s.a
q=B.a.T(1,s.b)
p=this.y
if(!(b>=0&&b<p.length))return A.e(p,b)
p=p[b]
if(!(r>=0&&r<p.length))return A.e(p,r)
return(p[r]&q)>>>0>0},
aW(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=this
if(e==null)e=k.c-c
if(b==null)b=k.b-d
k.aK()
if(c===0&&d===0&&e===k.c&&b===k.b){for(s=k.y,r=s.length,q=0;q<r;++q)for(p=0;o=s[q],p<o.length;++p){o.$flags&2&&A.bl(o)
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
for(p=c;p<m;++p)k.K(l,B.a.j(p,r),o,!1)}}k.aM()},
A(a){return this.aW(0,null,0,0,null)},
br(a,b,c,d,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.aK()
s=e.a2(a,b)
a=s.a
b=s.b
r=B.a.bv(1,a0)-1
for(q=a0-1,p=t.t,o=e.x,n=0;n<8;++n){m=c[n]
l=m&r
m=A.a([],p)
for(k=a+n,j=0;j<a0;++j){i=e.b0(b+j,k)?1:0
m.push(B.a.T(i,q-j))}h=B.d.bG(m,0,new A.cv())
switch(a1){case B.u:for(j=0;j<a0;++j){m=b+j
if((B.a.E(l,q-j)&1)>0)e.L(k,m,d,o,!1)
else e.K(k,m,o,!1)}break
case B.dS:for(j=0;j<a0;++j){m=b+j
if((B.a.E(l,q-j)&1)>0)e.K(k,m,o,!1)
else e.L(k,m,d,o,!1)}break
case B.dU:for(j=0;j<a0;++j){g=q-j
if((B.a.E(l,g)&1)>0&&(B.a.b6(h,g)&1)===0)e.L(k,b+j,d,o,!1)}break
case B.dT:for(j=0;j<a0;++j)if((B.a.E(l,q-j)&1)>0)e.L(k,b+j,d,o,!1)
break
case B.dV:for(f=l&h,j=0;j<a0;++j)if((B.a.E(f,q-j)&1)>0)e.L(k,b+j,d,o,!1)
break
case B.dW:for(f=l&h,j=0;j<a0;++j)if((B.a.E(f,q-j)&1)>0)e.K(k,b+j,o,!1)
break
case B.dX:for(f=l&h,j=0;j<a0;++j)if((B.a.E(f,q-j)&1)===0)e.K(k,b+j,o,!1)
break
case B.dY:for(f=l&h,j=0;j<a0;++j){m=b+j
if((B.a.E(f,q-j)&1)===0)e.K(k,m,o,!1)
else e.L(k,m,d,o,!1)}break}}e.aM()},
b1(a,b,c){this.br(c.a,c.b,b,a,8,B.u,!0,!1,!1)},
R(){var s=this.w
s.style.opacity="1.0"
s.focus()},
O(){if(this.a){var s=this.w
s.style.opacity="0.5"
s.blur()}}}
A.cw.prototype={
$0(){this.a.z=!0},
$S:1}
A.cx.prototype={
$0(){this.a.z=!1},
$S:1}
A.cy.prototype={
$0(){this.a.R()},
$S:1}
A.cz.prototype={
$0(){this.a.O()},
$S:1}
A.cv.prototype={
$2(a,b){return(a|b)>>>0},
$S:16}
A.G.prototype={
Z(){return"Mode."+this.b}}
A.ai.prototype={
Z(){return"State."+this.b}}
A.cH.prototype={
ba(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s,r=this
if(r.r){s=r.f
s.tabIndex=-1
s.onfocus=A.be(new A.cI(r))
s.onblur=A.be(new A.cJ(r))
s.onkeydown=A.eU(new A.cK(r,l,new A.cO(),new A.cN(r)))
s.onclick=A.eU(new A.cL(r,new A.cP(r),o))
A.h2(A.eo(300),new A.cM(r))
r.O()}r.A(0)},
gal(){var s=this.w
s===$&&A.a8()
return s.gal()},
gaj(){var s=this.w
s===$&&A.a8()
return s.gaj()},
a1(a,b){return new A.u(B.a.j(a,this.a),B.a.j(b,this.b))},
aO(){var s=this,r=s.x
s.CW.H(0,new A.R(r.c,r.d," ","white"))
s.F()
s.cy=!1},
F(){var s,r,q,p,o,n,m,l,k,j,i,h=this
for(s=h.CW,r=A.hb(s,s.r,s.$ti.c),q=h.w,p=h.cx,o=8+h.c,n=r.$ti.c;r.l();){m=r.d
if(m==null)m=n.a(m)
l=m.a
k=m.b
if(p.ak(m.c)){j=p.q(0,m.c)
j.toString
i=j}else i=$.fh()
q===$&&A.a8()
q.b1(m.d,i,new A.u(l*o,k*8))}if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.aP()}},
aD(a,b){var s,r=this.a1(b,a)
b=r.a
a=r.b
s=this.ch
if(!(b>=0&&b<s.length))return A.e(s,b)
s=s[b]
if(!(a>=0&&a<s.length))return A.e(s,a)
return s[a].c},
J(a,b,c){var s,r=this.a1(c,b)
c=r.a
b=r.b
s=this.ch
if(!(c>=0&&c<s.length))return A.e(s,c)
s=s[c]
if(!(b>=0&&b<s.length))return A.e(s,b)
s=s[b]
s.d=a
this.CW.H(0,s)},
au(){var s=this.x
s.sa3(0)
s.c=B.a.j(s.c+1,s.a)},
M(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=this,i=e==null?j.x.c:e,h=j.a1(i,c==null?j.x.d:c)
i=j.x
i.c=B.a.j(h.a,i.a)
i.sa3(h.b)
if(b==null)b=j.d
for(s=a.split(""),r=s.length,q=j.ch,p=j.CW,o=0;o<r;++o){n=s[o]
m=i.c
l=i.d
if(!(m>=0&&m<q.length))return A.e(q,m)
m=q[m]
if(!(l>=0&&l<m.length))return A.e(m,l)
k=m[l]
k.c=n
k.d=b
p.H(0,k)
i.sa3(i.d+1)}j.F()
if(d)j.au()},
a7(a,b,c,d){return this.M(a,b,c,!0,d)},
aw(a,b,c){return this.M(a,b,null,!0,c)},
bL(a,b){return this.M(a,null,null,!0,b)},
a6(a){return this.M(a,null,null,!0,null)},
b_(a,b){return this.M(a,null,null,b,null)},
av(a,b){return this.M(a,b,null,!0,null)},
A(a){var s,r,q,p,o,n=this,m=n.b,l=n.a
for(s=n.ch,r=n.d,q=0;q<l;++q)for(p=0;p<m;++p){if(!(q<s.length))return A.e(s,q)
o=s[q]
if(!(p<o.length))return A.e(o,p)
o=o[p]
o.c=" "
o.d=r}s=n.w
s===$&&A.a8()
r=8+n.c
s.aW(0,l*r,0,0*r,m*8)
r=n.x
r.c=0%r.a
r.sa3(0)},
R(){return this.gal().$0()},
O(){return this.gaj().$0()}}
A.cP.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.w
i===$&&A.a8()
s=J.ei(a.offsetX)
r=Math.max(Math.min(B.a.G(J.ei(a.offsetY)-1,i.e),i.b-1),0)
q=Math.max(Math.min(B.a.G(s-1,i.d),i.c-1),0)
p=B.a.G(r,8+j.c)
o=B.a.u(q,8)
n=j.aD(o,p)
m=j.a1(p,o)
l=m.a
k=m.b
j=j.ch
if(!(l>=0&&l<j.length))return A.e(j,l)
j=j[l]
if(!(k>=0&&k<j.length))return A.e(j,k)
return new A.ad(p,o,n,j[k].d,r,q,i.b0(q,r))},
$S:17}
A.cO.prototype={
$1(a){var s=a.keyCode,r=a.key
return new A.ac(s,r.length>1?"":r)},
$S:18}
A.cN.prototype={
$0(){var s,r,q,p,o,n=this.a,m=n.a,l=n.b,k=new A.af(m,l)
k.sv(n.y.gv())
s=A.a([],t.s)
r=n.z
q=r.b
while(p=k.c,o=k.d,p*l+o<r.c*q+r.d){s.push(n.aD(o,p))
p=k.c*l+k.d+1
k.c=B.a.j(B.a.G(p,l),m)
k.d=B.a.j(p,l)}return B.d.S(s,"")},
$S:19}
A.cI.prototype={
$0(){var s=this.a
if(s.r){s=s.w
s===$&&A.a8()
s.R()}},
$S:1}
A.cJ.prototype={
$0(){var s=this.a
if(s.r){s=s.w
s===$&&A.a8()
s.O()}},
$S:1}
A.cK.prototype={
$1(a){var s,r,q,p
a.preventDefault()
s=this.a
switch(s.ay){case B.h:break
case B.w:r=s.at
if(r.d!=null){r.H(0,this.c.$1(a))
s.ay=B.h}break
case B.x:s.aO()
$label0$1:{q=a.keyCode
if(13===q){r=s.as
if(r.d!=null){r.H(0,J.fx(this.d.$0()))
s.au()
s.ay=B.h}break $label0$1}if(8===q){r=s.x
if(r.gv()>s.y.gv()){r.sv(r.gv()-1)
s.b_(" ",!1)
r.sv(r.gv()-1)}break $label0$1}p=a.key
if(p.length===1&&s.x.gv()<s.z.gv())s.b_(p,!1)}break
case B.y:break}},
$S:7}
A.cL.prototype={
$1(a){var s
a.preventDefault()
s=this.a
if(s.ay===B.y&&s.ax.d!=null){s.ax.H(0,this.b.$1(a))
s.ay=B.h}},
$S:7}
A.cM.prototype={
$1(a){var s,r,q,p=this.a,o=p.w
o===$&&A.a8()
if(o.z&&J.au(self.document.activeElement,o.w)&&p.ay===B.x)if(p.cy)p.aO()
else{s=p.x
r=s.c
s=s.d
q=$.fg()
o.b1(p.d,q,new A.u(r*(8+p.c),s*8))
p.cy=!0}},
$S:20}
A.F.prototype={
Z(){return"Direction."+this.b},
gaq(){switch(this){case B.i:var s=B.e2
break
case B.j:s=B.e_
break
case B.k:s=B.e1
break
case B.l:s=B.e0
break
case B.c:s=B.dZ
break
default:s=null}return s},
gbO(){switch(this){case B.i:var s=B.k
break
case B.j:s=B.l
break
case B.k:s=B.i
break
case B.l:s=B.j
break
case B.c:s=B.c
break
default:s=null}return s},
gbK(){switch(this){case B.i:var s="N"
break
case B.j:s="E"
break
case B.k:s="S"
break
case B.l:s="W"
break
case B.c:s="."
break
default:s=null}return s}}
A.aJ.prototype={
h(a){return this.a}}
A.ct.prototype={
ar(a){var s=this,r=a.gaq()
s.a=B.a.j(s.a+r.a,9)
s.b=B.a.j(s.b+r.b,9)},
h(a){return"("+this.a+" "+this.b+")"}}
A.cl.prototype={
bB(){var s,r,q,p,o
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.cc)(s),++q)for(p=B.d.gt(s[q]);p.l();){o=p.gm()
o.a="."
o.b=""
o.c=B.c
o.d=null}},
ga4(){var s=this.a,r=this.c,q=r.a
if(!(q>=0&&q<s.length))return A.e(s,q)
q=s[q]
r=r.b
if(!(r>=0&&r<q.length))return A.e(q,r)
return q[r]},
b2(){var s,r,q,p,o,n,m,l=this,k="abcdefghijklmnopqrstuvwxyz",j={},i=l.b
B.d.A(i)
for(s=0;s<5;++s){r=$.fv()
q=$.fu().a5(356)
if(!(q>=0&&q<356))return A.e(r,q)
i.push(r[q])}j.a=B.c
p=new A.cm(j,l)
for(s=0;s<100;++s)if(p.$0())break
if(s===100)throw A.d(A.ch("Failed to position words in 100 attempts."))
i=l.c
i.ar(j.a.gbO())
l.ga4().c=B.c
i.a=i.b=4
for(i=l.a,r=i.length,o=0;o<i.length;i.length===r||(0,A.cc)(i),++o)for(q=B.d.gt(i[o]);q.l();){n=q.gm()
if(n.a==="."){m=$.eg().a5(26)
if(!(m>=0&&m<26))return A.e(k,m)
n.a=k[m]
n.c=B.c}}},
aY(){var s=this.ga4().c
if(s===B.c)return!1
this.c.ar(s)
return!0},
gbC(){var s,r,q=A.a([],t.n)
for(s=0;s<9;++s)for(r=0;r<9;++r)q.push(new A.u(s,r))
return q}}
A.cm.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this.a
a1.a=B.c
s=this.b
s.bB()
r=s.c
r.a=r.b=4
for(q=s.b,p=q.length,s=s.a,o=t.Y,n=0;n<q.length;q.length===p||(0,A.cc)(q),++n){m=q[n]
for(l=m.a,k=l.length,j="Placing "+l+"[",i=0;i<k;){h=A.a([],o)
for(g=B.d.gt(B.cM),f=new A.bR(g,new A.cn());f.l();){e=g.gm()
d=e.gaq()
c=B.a.j(r.a+d.a,9)
b=B.a.j(r.b+d.b,9)
if(!(c<s.length))return A.e(s,c)
c=s[c]
if(!(b<c.length))return A.e(c,b)
if(c[b].a===".")h.push(e)}g=h.length
if(g===0){A.cb("*** ABORTING!\n")
return!1}g=$.eg().a5(g)
if(!(g>=0&&g<h.length))return A.e(h,g)
a=h[g]
A.cb(j+i+"] = "+l[i]+" at "+r.h(0)+".")
A.cb("Chosen Direction: "+a.gbK()+".")
g=r.a
if(!(g>=0&&g<s.length))return A.e(s,g)
g=s[g]
f=r.b
if(!(f>=0&&f<g.length))return A.e(g,f)
f=g[f]
f.a=l[i];++i
a0=B.e.b7(l,0,i)
f.b=a0+B.e.I("-",k-a0.length)
f.c=a
f.d=m
r.ar(a)
A.cb("  Moved to "+r.h(0)+".")
a1.a=a}}A.ix("*** SUCCESS!\n")
return!0},
$S:21}
A.cn.prototype={
$1(a){return a!==B.c},
$S:22}
A.a9.prototype={
Z(){return"GameState."+this.b}}
A.cj.prototype={
aF(){var s,r,q,p
$.dH().A(0)
$.Q().A(0)
for(s="  __      __          _  \n  \\ \\    / /__ _ _ __| | \n   \\ \\/\\/ / _ \\ '_/ _` | \n   _\\_/\\_/\\___/_| \\__,_| \n  / __| __ _| |__ _ __| |\n  \\__ \\/ _` | / _` / _` |\n  |___/\\__,_|_\\__,_\\__,_|                      \n  \n  Press any key to start! \n   ".split("\n"),r=s.length,q=0;q<r;++q){p=s[q]
if(p.length!==0)$.Q().a6(p)}},
bW(a,b){var s=$.Q()
s.a7(a,b,B.a.u(s.b-a.length,2),3)},
aC(){var s,r,q,p,o,n,m,l,k=$.at(),j=k.ga4().d.b,i=$.Q()
i.A(0)
this.bW(k.ga4().b,"white")
k=A.bf(j)
i.bL(new A.aL(j,k.i("aL<2>")).bz(0,new A.ck())?"Definitions:":"Definition:",5)
i.au()
for(k=new A.aK(j,k.i("aK<1,2>")).gt(0);k.l();){s=k.d
r=s.a
q=s.b
i.a6(r+".")
for(s=J.eh(q);s.l();){p=s.gm().split(" ")
for(i=p.length,o=0,n=" \u2022";o<i;++o,n=l){m=n.charCodeAt(0)==0?n:n
l=" "+p[o]
if((m+l).length>37){$.Q().a6(m)
n="  "}l=n+l}i=$.Q()
i.a6(n.charCodeAt(0)==0?n:n)}}},
P(){var s=0,r=A.eY(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$P=A.f3(function(a,b){if(a===1)return A.eO(b,r)
while(true)switch(s){case 0:$.Q().A(0)
o=$.dH()
o.A(0)
n=$.at()
m=t.s
o.aw(" \u250c"+B.d.S(A.a(B.e.I("\u2500",9).split(""),m),"\u252c")+"\u2510","gray",1)
for(l=0;l<9;++l){o.av(" \u2502"+B.d.S(A.a(B.e.I(" ",9).split(""),m),"\u2502")+"\u2502","gray")
if(l<8)o.av(" \u251c"+B.d.S(A.a(B.e.I("\u2500",9).split(""),m),"\u253c")+"\u2524","gray")
else o.av(" \u2514"+B.d.S(A.a(B.e.I("\u2500",9).split(""),m),"\u2534")+"\u2518","gray")}m=p.a
B.d.by(m,n.gbC())
k=t.z,j=m.$flags|0,i=n.a
case 3:if(!(h=m.length,h!==0)){s=4
break}h=$.ft().a5(h)
j&1&&A.bl(m,"removeAt",1)
if(h<0||h>=m.length)A.cd(A.es(h,null))
g=m.splice(h,1)[0]
f=g.a
e=g.b
h=B.a.j(f,9)
if(!(h<i.length)){q=A.e(i,h)
s=1
break}d=i[h]
c=B.a.j(e,9)
if(!(c<d.length)){q=A.e(d,c)
s=1
break}o.a7(d[c].a,"gray",2*c+2,2*h+2)
s=5
return A.dq(A.fJ(A.eo(25),k),$async$P)
case 5:s=3
break
case 4:p.aC()
n=n.c
m=n.a
n=n.b
m=B.a.j(m,9)
o.J("yellow",2*B.a.j(n,9)+2,2*m+2)
o.F()
case 1:return A.eP(q,r)}})
return A.eQ($async$P,r)}}
A.ck.prototype={
$1(a){return J.dI(a)>1},
$S:23}
A.bS.prototype={
h(a){return this.a}};(function aliases(){var s=J.T.prototype
s.b8=s.h})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._static_2,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u
s(A,"i7","h7",3)
s(A,"i8","h8",3)
s(A,"i9","h9",3)
r(A,"f5","i2",0)
s(A,"ia","hX",4)
q(A,"ib","hY",5)
p(A.m.prototype,"gaL","D",5)
o(A.aZ.prototype,"gbp","bq",0)
var n
o(n=A.bN.prototype,"gal","R",0)
o(n,"gaj","O",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.i,null)
q(A.i,[A.dM,J.bt,J.bn,A.l,A.a_,A.cA,A.aa,A.bz,A.bR,A.aA,A.an,A.br,A.cR,A.cr,A.az,A.b6,A.aM,A.cp,A.by,A.bx,A.B,A.c1,A.c6,A.b8,A.bT,A.Z,A.ak,A.bW,A.bV,A.V,A.m,A.bU,A.c_,A.c2,A.aZ,A.c4,A.dp,A.aT,A.dg,A.am,A.p,A.ax,A.cZ,A.bK,A.aU,A.d_,A.aN,A.t,A.c5,A.bO,A.de,A.R,A.ac,A.ad,A.af,A.bN,A.cH,A.aJ,A.ct,A.cl,A.cj,A.bS])
q(J.bt,[J.bu,J.aD,J.aF,J.aE,J.aG,J.ab,J.a1])
q(J.aF,[J.T,J.q,A.bA,A.aQ])
q(J.T,[J.bL,J.a3,J.S])
r(J.co,J.q)
q(J.ab,[J.aC,J.bv])
q(A.l,[A.aI,A.K,A.bw,A.bQ,A.bY,A.bM,A.c0,A.bo,A.E,A.aV,A.bP,A.aj,A.bq])
q(A.a_,[A.ce,A.cf,A.cG,A.dy,A.dA,A.cW,A.cV,A.dr,A.d5,A.dc,A.cE,A.cD,A.dk,A.cP,A.cO,A.cK,A.cL,A.cM,A.cn,A.ck])
q(A.ce,[A.dD,A.cX,A.cY,A.dm,A.dl,A.ci,A.d0,A.d8,A.d7,A.d4,A.d2,A.d1,A.db,A.da,A.d9,A.cF,A.cC,A.dh,A.dt,A.du,A.dj,A.cw,A.cx,A.cy,A.cz,A.cN,A.cI,A.cJ,A.cm])
r(A.ay,A.aa)
r(A.c3,A.an)
r(A.u,A.c3)
r(A.aB,A.br)
r(A.aS,A.K)
q(A.cG,[A.cB,A.aw])
r(A.a2,A.aM)
q(A.ay,[A.aL,A.aK])
r(A.aH,A.a2)
q(A.cf,[A.dz,A.ds,A.dv,A.d6,A.dd,A.cq,A.cv])
q(A.aQ,[A.bB,A.ae])
q(A.ae,[A.b0,A.b2])
r(A.b1,A.b0)
r(A.aO,A.b1)
r(A.b3,A.b2)
r(A.aP,A.b3)
q(A.aO,[A.bC,A.bD])
q(A.aP,[A.bE,A.bF,A.bG,A.bH,A.bI,A.aR,A.bJ])
r(A.b9,A.c0)
r(A.b7,A.ak)
r(A.aY,A.b7)
r(A.al,A.aY)
r(A.bX,A.bW)
r(A.aX,A.bX)
r(A.aW,A.bV)
r(A.bZ,A.c_)
r(A.di,A.dp)
r(A.b5,A.aT)
r(A.b_,A.b5)
q(A.E,[A.ah,A.bs])
q(A.cZ,[A.G,A.ai,A.F,A.a9])
s(A.b0,A.p)
s(A.b1,A.aA)
s(A.b2,A.p)
s(A.b3,A.aA)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{f:"int",v:"double",iw:"num",z:"String",as:"bool",t:"Null",h:"List",i:"Object",iH:"Map"},mangledNames:{},types:["~()","t()","t(@)","~(~())","~(@)","~(i,C)","t(i,C)","t(o)","J<~>()","@(@)","@(@,z)","@(z)","t(~())","t(@,C)","~(f,@)","~(i?,i?)","f(f,f)","ad(o)","ac(o)","z()","~(cQ)","as()","as(F)","as(h<z>)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.u&&a.b(c.a)&&b.b(c.b)}}
A.hs(v.typeUniverse,JSON.parse('{"bL":"T","a3":"T","S":"T","bu":{"k":[]},"aD":{"t":[],"k":[]},"aF":{"o":[]},"T":{"o":[]},"q":{"h":["1"],"o":[]},"co":{"q":["1"],"h":["1"],"o":[]},"ab":{"v":[]},"aC":{"v":[],"f":[],"k":[]},"bv":{"v":[],"k":[]},"a1":{"z":[],"k":[]},"aI":{"l":[]},"ay":{"aa":["1"]},"aB":{"br":["1","2"]},"aS":{"K":[],"l":[]},"bw":{"l":[]},"bQ":{"l":[]},"b6":{"C":[]},"bY":{"l":[]},"bM":{"l":[]},"a2":{"aM":["1","2"]},"aL":{"aa":["1"]},"aK":{"aa":["aN<1,2>"]},"aH":{"a2":["1","2"],"aM":["1","2"]},"bA":{"o":[],"k":[]},"aQ":{"o":[]},"bB":{"o":[],"k":[]},"ae":{"y":["1"],"o":[]},"aO":{"p":["v"],"h":["v"],"y":["v"],"o":[]},"aP":{"p":["f"],"h":["f"],"y":["f"],"o":[]},"bC":{"p":["v"],"h":["v"],"y":["v"],"o":[],"k":[],"p.E":"v"},"bD":{"p":["v"],"h":["v"],"y":["v"],"o":[],"k":[],"p.E":"v"},"bE":{"p":["f"],"h":["f"],"y":["f"],"o":[],"k":[],"p.E":"f"},"bF":{"p":["f"],"h":["f"],"y":["f"],"o":[],"k":[],"p.E":"f"},"bG":{"p":["f"],"h":["f"],"y":["f"],"o":[],"k":[],"p.E":"f"},"bH":{"p":["f"],"h":["f"],"y":["f"],"o":[],"k":[],"p.E":"f"},"bI":{"cT":[],"p":["f"],"h":["f"],"y":["f"],"o":[],"k":[],"p.E":"f"},"aR":{"p":["f"],"h":["f"],"y":["f"],"o":[],"k":[],"p.E":"f"},"bJ":{"p":["f"],"h":["f"],"y":["f"],"o":[],"k":[],"p.E":"f"},"c0":{"l":[]},"b9":{"K":[],"l":[]},"b8":{"cQ":[]},"Z":{"l":[]},"al":{"ak":["1"]},"aW":{"bV":["1"]},"m":{"J":["1"]},"aY":{"ak":["1"]},"b7":{"ak":["1"]},"b_":{"aT":["1"]},"b5":{"aT":["1"]},"bo":{"l":[]},"K":{"l":[]},"E":{"l":[]},"ah":{"l":[]},"bs":{"l":[]},"aV":{"l":[]},"bP":{"l":[]},"aj":{"l":[]},"bq":{"l":[]},"bK":{"l":[]},"aU":{"l":[]},"c5":{"C":[]},"fO":{"h":["f"]},"h5":{"h":["f"]},"h4":{"h":["f"]},"fM":{"h":["f"]},"h3":{"h":["f"]},"fN":{"h":["f"]},"cT":{"h":["f"]},"fH":{"h":["v"]},"fI":{"h":["v"]}}'))
A.hr(v.typeUniverse,JSON.parse('{"ay":1,"bR":1,"aA":1,"by":1,"ae":1,"aY":1,"bX":1,"bW":1,"b7":1,"c_":1,"bZ":1,"c2":1,"aZ":1,"c4":1,"b5":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.dx
return{B:s("R"),Q:s("l"),Z:s("iF"),U:s("q<R>"),Y:s("q<F>"),w:s("q<aJ>"),I:s("q<h<R>>"),M:s("q<h<aJ>>"),f:s("q<i>"),n:s("q<+(f,f)>"),s:s("q<z>"),x:s("q<cT>"),G:s("q<bS>"),b:s("q<@>"),t:s("q<f>"),T:s("aD"),m:s("o"),g:s("S"),p:s("y<@>"),V:s("ac"),j:s("h<@>"),q:s("ad"),P:s("t"),K:s("i"),L:s("iI"),F:s("+()"),l:s("C"),N:s("z"),E:s("cQ"),R:s("k"),c:s("K"),J:s("a3"),d:s("m<@>"),a:s("m<f>"),D:s("m<~>"),y:s("as"),i:s("v"),z:s("@"),v:s("@(i)"),C:s("@(i,C)"),S:s("f"),A:s("0&*"),_:s("i*"),O:s("J<t>?"),X:s("i?"),o:s("iw"),H:s("~"),u:s("~(i)"),k:s("~(i,C)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.J=J.bt.prototype
B.d=J.q.prototype
B.a=J.aC.prototype
B.K=J.ab.prototype
B.e=J.a1.prototype
B.L=J.S.prototype
B.M=J.aF.prototype
B.v=J.bL.prototype
B.o=J.a3.prototype
B.p=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.z=function() {
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
B.E=function(getTagFallback) {
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
B.A=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.D=function(hooks) {
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
B.C=function(hooks) {
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
B.B=function(hooks) {
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
B.q=function(hooks) { return hooks; }

B.F=new A.bK()
B.f=new A.cA()
B.G=new A.de()
B.b=new A.di()
B.H=new A.c5()
B.i=new A.F("north")
B.j=new A.F("east")
B.k=new A.F("south")
B.l=new A.F("west")
B.c=new A.F("none")
B.I=new A.ax(0)
B.n=new A.a9("titleScreen")
B.m=new A.a9("playing")
B.r=new A.a9("wordFound")
B.t=new A.a9("gameOver")
B.cM=A.a(s([B.i,B.j,B.k,B.l,B.c]),t.Y)
B.dc=A.a(s([126,129,165,129,189,153,129,126]),t.t)
B.ad=A.a(s([126,255,219,255,195,231,255,126]),t.t)
B.dJ=A.a(s([108,254,254,254,124,56,16,0]),t.t)
B.c8=A.a(s([16,56,124,254,124,56,16,0]),t.t)
B.b6=A.a(s([56,124,56,254,254,124,56,124]),t.t)
B.bi=A.a(s([16,16,56,124,254,124,56,124]),t.t)
B.aB=A.a(s([0,0,24,60,60,24,0,0]),t.t)
B.aE=A.a(s([255,255,231,195,195,231,255,255]),t.t)
B.aQ=A.a(s([0,60,102,66,66,102,60,0]),t.t)
B.cX=A.a(s([255,195,153,189,189,153,195,255]),t.t)
B.dI=A.a(s([15,7,15,125,204,204,204,120]),t.t)
B.dH=A.a(s([60,102,102,102,60,24,126,24]),t.t)
B.cU=A.a(s([63,51,63,48,48,112,240,224]),t.t)
B.X=A.a(s([127,99,127,99,99,103,230,192]),t.t)
B.a1=A.a(s([153,90,60,231,231,60,90,153]),t.t)
B.ay=A.a(s([128,224,248,254,248,224,128,0]),t.t)
B.bE=A.a(s([2,14,62,254,62,14,2,0]),t.t)
B.cm=A.a(s([24,60,126,24,24,126,60,24]),t.t)
B.ci=A.a(s([102,102,102,102,102,0,102,0]),t.t)
B.cs=A.a(s([127,219,219,123,27,27,27,0]),t.t)
B.ct=A.a(s([62,99,56,108,108,56,204,120]),t.t)
B.bS=A.a(s([0,0,0,0,126,126,126,0]),t.t)
B.bV=A.a(s([24,60,126,24,126,60,24,255]),t.t)
B.S=A.a(s([24,60,126,24,24,24,24,0]),t.t)
B.dh=A.a(s([24,24,24,24,126,60,24,0]),t.t)
B.da=A.a(s([0,24,12,254,12,24,0,0]),t.t)
B.av=A.a(s([0,48,96,254,96,48,0,0]),t.t)
B.c_=A.a(s([0,0,192,192,192,254,0,0]),t.t)
B.bx=A.a(s([0,36,102,255,102,36,0,0]),t.t)
B.ab=A.a(s([0,24,60,126,255,255,0,0]),t.t)
B.bW=A.a(s([0,255,255,126,60,24,0,0]),t.t)
B.b1=A.a(s([0,0,0,0,0,0,0,0]),t.t)
B.bF=A.a(s([48,120,120,48,48,0,48,0]),t.t)
B.a_=A.a(s([108,108,108,0,0,0,0,0]),t.t)
B.ap=A.a(s([108,108,254,108,254,108,108,0]),t.t)
B.c3=A.a(s([48,124,192,120,12,248,48,0]),t.t)
B.R=A.a(s([0,198,204,24,48,102,198,0]),t.t)
B.cF=A.a(s([56,108,56,118,220,204,118,0]),t.t)
B.ao=A.a(s([96,96,192,0,0,0,0,0]),t.t)
B.W=A.a(s([24,48,96,96,96,48,24,0]),t.t)
B.bB=A.a(s([96,48,24,24,24,48,96,0]),t.t)
B.cw=A.a(s([0,102,60,255,60,102,0,0]),t.t)
B.dQ=A.a(s([0,48,48,252,48,48,0,0]),t.t)
B.c5=A.a(s([0,0,0,0,0,48,48,96]),t.t)
B.bw=A.a(s([0,0,0,252,0,0,0,0]),t.t)
B.ck=A.a(s([0,0,0,0,0,48,48,0]),t.t)
B.a6=A.a(s([6,12,24,48,96,192,128,0]),t.t)
B.b9=A.a(s([124,198,206,222,246,230,124,0]),t.t)
B.cn=A.a(s([48,112,48,48,48,48,252,0]),t.t)
B.c1=A.a(s([120,204,12,56,96,204,252,0]),t.t)
B.dL=A.a(s([120,204,12,56,12,204,120,0]),t.t)
B.bD=A.a(s([28,60,108,204,254,12,30,0]),t.t)
B.db=A.a(s([252,192,248,12,12,204,120,0]),t.t)
B.dt=A.a(s([56,96,192,248,204,204,120,0]),t.t)
B.c2=A.a(s([252,204,12,24,48,48,48,0]),t.t)
B.cz=A.a(s([120,204,204,120,204,204,120,0]),t.t)
B.bg=A.a(s([120,204,204,124,12,24,112,0]),t.t)
B.d4=A.a(s([0,48,48,0,0,48,48,0]),t.t)
B.aT=A.a(s([0,48,48,0,0,48,48,96]),t.t)
B.bC=A.a(s([24,48,96,192,96,48,24,0]),t.t)
B.br=A.a(s([0,0,252,0,0,252,0,0]),t.t)
B.aD=A.a(s([96,48,24,12,24,48,96,0]),t.t)
B.at=A.a(s([120,204,12,24,48,0,48,0]),t.t)
B.dp=A.a(s([124,198,222,222,222,192,120,0]),t.t)
B.ce=A.a(s([48,120,204,204,252,204,204,0]),t.t)
B.aN=A.a(s([252,102,102,124,102,102,252,0]),t.t)
B.af=A.a(s([60,102,192,192,192,102,60,0]),t.t)
B.a7=A.a(s([248,108,102,102,102,108,248,0]),t.t)
B.al=A.a(s([254,98,104,120,104,98,254,0]),t.t)
B.cq=A.a(s([254,98,104,120,104,96,240,0]),t.t)
B.ar=A.a(s([60,102,192,192,206,102,62,0]),t.t)
B.au=A.a(s([204,204,204,252,204,204,204,0]),t.t)
B.cP=A.a(s([120,48,48,48,48,48,120,0]),t.t)
B.bQ=A.a(s([30,12,12,12,204,204,120,0]),t.t)
B.bI=A.a(s([230,102,108,120,108,102,230,0]),t.t)
B.bH=A.a(s([240,96,96,96,98,102,254,0]),t.t)
B.aO=A.a(s([198,238,254,254,214,198,198,0]),t.t)
B.Z=A.a(s([198,230,246,222,206,198,198,0]),t.t)
B.cZ=A.a(s([56,108,198,198,198,108,56,0]),t.t)
B.bm=A.a(s([252,102,102,124,96,96,240,0]),t.t)
B.cI=A.a(s([120,204,204,204,220,120,28,0]),t.t)
B.Q=A.a(s([252,102,102,124,108,102,230,0]),t.t)
B.ai=A.a(s([120,204,224,112,28,204,120,0]),t.t)
B.dC=A.a(s([252,180,48,48,48,48,120,0]),t.t)
B.aL=A.a(s([204,204,204,204,204,204,252,0]),t.t)
B.a3=A.a(s([204,204,204,204,204,120,48,0]),t.t)
B.cS=A.a(s([198,198,198,214,254,238,198,0]),t.t)
B.cL=A.a(s([198,198,108,56,56,108,198,0]),t.t)
B.a5=A.a(s([204,204,204,120,48,48,120,0]),t.t)
B.U=A.a(s([254,198,140,24,50,102,254,0]),t.t)
B.by=A.a(s([120,96,96,96,96,96,120,0]),t.t)
B.cD=A.a(s([192,96,48,24,12,6,2,0]),t.t)
B.bA=A.a(s([120,24,24,24,24,24,120,0]),t.t)
B.ds=A.a(s([16,56,108,198,0,0,0,0]),t.t)
B.P=A.a(s([0,0,0,0,0,0,0,255]),t.t)
B.aM=A.a(s([48,48,24,0,0,0,0,0]),t.t)
B.di=A.a(s([0,0,120,12,124,204,118,0]),t.t)
B.ch=A.a(s([224,96,96,124,102,102,220,0]),t.t)
B.cK=A.a(s([0,0,120,204,192,204,120,0]),t.t)
B.b7=A.a(s([28,12,12,124,204,204,118,0]),t.t)
B.dv=A.a(s([0,0,120,204,252,192,120,0]),t.t)
B.aR=A.a(s([56,108,96,240,96,96,240,0]),t.t)
B.cH=A.a(s([0,0,118,204,204,124,12,248]),t.t)
B.aC=A.a(s([224,96,108,118,102,102,230,0]),t.t)
B.cx=A.a(s([48,0,112,48,48,48,120,0]),t.t)
B.bL=A.a(s([12,0,12,12,12,204,204,120]),t.t)
B.be=A.a(s([224,96,102,108,120,108,230,0]),t.t)
B.bN=A.a(s([112,48,48,48,48,48,120,0]),t.t)
B.bv=A.a(s([0,0,204,254,254,214,198,0]),t.t)
B.bO=A.a(s([0,0,248,204,204,204,204,0]),t.t)
B.bh=A.a(s([0,0,120,204,204,204,120,0]),t.t)
B.dz=A.a(s([0,0,220,102,102,124,96,240]),t.t)
B.dw=A.a(s([0,0,118,204,204,124,12,30]),t.t)
B.bs=A.a(s([0,0,220,118,102,96,240,0]),t.t)
B.d1=A.a(s([0,0,124,192,120,12,248,0]),t.t)
B.cV=A.a(s([16,48,124,48,48,52,24,0]),t.t)
B.cb=A.a(s([0,0,204,204,204,204,118,0]),t.t)
B.b5=A.a(s([0,0,204,204,204,120,48,0]),t.t)
B.bl=A.a(s([0,0,198,214,254,254,108,0]),t.t)
B.bJ=A.a(s([0,0,198,108,56,108,198,0]),t.t)
B.dF=A.a(s([0,0,204,204,204,124,12,248]),t.t)
B.dg=A.a(s([0,0,252,152,48,100,252,0]),t.t)
B.bb=A.a(s([28,48,48,224,48,48,28,0]),t.t)
B.d0=A.a(s([24,24,24,0,24,24,24,0]),t.t)
B.aG=A.a(s([224,48,48,28,48,48,224,0]),t.t)
B.dP=A.a(s([118,220,0,0,0,0,0,0]),t.t)
B.b4=A.a(s([0,16,56,108,198,198,254,0]),t.t)
B.ax=A.a(s([120,204,192,204,120,24,12,120]),t.t)
B.de=A.a(s([0,204,0,204,204,204,126,0]),t.t)
B.dE=A.a(s([28,0,120,204,252,192,120,0]),t.t)
B.c4=A.a(s([126,195,60,6,62,102,63,0]),t.t)
B.ak=A.a(s([204,0,120,12,124,204,126,0]),t.t)
B.b8=A.a(s([224,0,120,12,124,204,126,0]),t.t)
B.aa=A.a(s([48,48,120,12,124,204,126,0]),t.t)
B.bo=A.a(s([0,0,120,192,192,120,12,56]),t.t)
B.dn=A.a(s([126,195,60,102,126,96,60,0]),t.t)
B.aP=A.a(s([204,0,120,204,252,192,120,0]),t.t)
B.d2=A.a(s([224,0,120,204,252,192,120,0]),t.t)
B.df=A.a(s([204,0,112,48,48,48,120,0]),t.t)
B.cT=A.a(s([124,198,56,24,24,24,60,0]),t.t)
B.b0=A.a(s([224,0,112,48,48,48,120,0]),t.t)
B.dK=A.a(s([198,56,108,198,254,198,198,0]),t.t)
B.d_=A.a(s([48,48,0,120,204,252,204,0]),t.t)
B.bG=A.a(s([28,0,252,96,120,96,252,0]),t.t)
B.dD=A.a(s([0,0,127,12,127,204,127,0]),t.t)
B.aU=A.a(s([62,108,204,254,204,204,206,0]),t.t)
B.dx=A.a(s([120,204,0,120,204,204,120,0]),t.t)
B.ag=A.a(s([0,204,0,120,204,204,120,0]),t.t)
B.dM=A.a(s([0,224,0,120,204,204,120,0]),t.t)
B.aS=A.a(s([120,204,0,204,204,204,126,0]),t.t)
B.cW=A.a(s([0,224,0,204,204,204,126,0]),t.t)
B.aA=A.a(s([0,204,0,204,204,124,12,248]),t.t)
B.am=A.a(s([195,24,60,102,102,60,24,0]),t.t)
B.d8=A.a(s([204,0,204,204,204,204,120,0]),t.t)
B.a0=A.a(s([24,24,126,192,192,126,24,24]),t.t)
B.aJ=A.a(s([56,108,100,240,96,230,252,0]),t.t)
B.b2=A.a(s([204,204,120,252,48,252,48,48]),t.t)
B.dj=A.a(s([248,204,204,250,198,207,198,199]),t.t)
B.bR=A.a(s([14,27,24,60,24,24,216,112]),t.t)
B.aF=A.a(s([28,0,120,12,124,204,126,0]),t.t)
B.cg=A.a(s([56,0,112,48,48,48,120,0]),t.t)
B.aI=A.a(s([0,28,0,120,204,204,120,0]),t.t)
B.cA=A.a(s([0,28,0,204,204,204,126,0]),t.t)
B.aY=A.a(s([0,248,0,248,204,204,204,0]),t.t)
B.cR=A.a(s([252,0,204,236,252,220,204,0]),t.t)
B.ah=A.a(s([60,108,108,62,0,126,0,0]),t.t)
B.cd=A.a(s([56,108,108,56,0,124,0,0]),t.t)
B.d9=A.a(s([48,0,48,96,192,204,120,0]),t.t)
B.b_=A.a(s([0,0,0,252,192,192,0,0]),t.t)
B.aH=A.a(s([0,0,0,252,12,12,0,0]),t.t)
B.d3=A.a(s([195,198,204,222,51,102,204,15]),t.t)
B.az=A.a(s([195,198,204,219,55,111,207,3]),t.t)
B.bU=A.a(s([24,24,0,24,24,24,24,0]),t.t)
B.bT=A.a(s([0,51,102,204,102,51,0,0]),t.t)
B.bd=A.a(s([0,204,102,51,102,204,0,0]),t.t)
B.cC=A.a(s([34,136,34,136,34,136,34,136]),t.t)
B.dy=A.a(s([85,170,85,170,85,170,85,170]),t.t)
B.bM=A.a(s([219,119,219,238,219,119,219,238]),t.t)
B.b3=A.a(s([24,24,24,24,24,24,24,24]),t.t)
B.aZ=A.a(s([24,24,24,24,248,24,24,24]),t.t)
B.c0=A.a(s([24,24,248,24,248,24,24,24]),t.t)
B.dO=A.a(s([54,54,54,54,246,54,54,54]),t.t)
B.co=A.a(s([0,0,0,0,254,54,54,54]),t.t)
B.aV=A.a(s([0,0,248,24,248,24,24,24]),t.t)
B.ae=A.a(s([54,54,246,6,246,54,54,54]),t.t)
B.cu=A.a(s([54,54,54,54,54,54,54,54]),t.t)
B.cc=A.a(s([0,0,254,6,246,54,54,54]),t.t)
B.cy=A.a(s([54,54,246,6,254,0,0,0]),t.t)
B.as=A.a(s([54,54,54,54,254,0,0,0]),t.t)
B.a4=A.a(s([24,24,248,24,248,0,0,0]),t.t)
B.a9=A.a(s([0,0,0,0,248,24,24,24]),t.t)
B.a2=A.a(s([24,24,24,24,31,0,0,0]),t.t)
B.bZ=A.a(s([24,24,24,24,255,0,0,0]),t.t)
B.bq=A.a(s([0,0,0,0,255,24,24,24]),t.t)
B.d7=A.a(s([24,24,24,24,31,24,24,24]),t.t)
B.bX=A.a(s([0,0,0,0,255,0,0,0]),t.t)
B.cv=A.a(s([24,24,24,24,255,24,24,24]),t.t)
B.cG=A.a(s([24,24,31,24,31,24,24,24]),t.t)
B.bf=A.a(s([54,54,54,54,55,54,54,54]),t.t)
B.du=A.a(s([54,54,55,48,63,0,0,0]),t.t)
B.dm=A.a(s([0,0,63,48,55,54,54,54]),t.t)
B.bK=A.a(s([54,54,247,0,255,0,0,0]),t.t)
B.bz=A.a(s([0,0,255,0,247,54,54,54]),t.t)
B.aX=A.a(s([54,54,55,48,55,54,54,54]),t.t)
B.aW=A.a(s([0,0,255,0,255,0,0,0]),t.t)
B.dG=A.a(s([54,54,247,0,247,54,54,54]),t.t)
B.cN=A.a(s([24,24,255,0,255,0,0,0]),t.t)
B.N=A.a(s([54,54,54,54,255,0,0,0]),t.t)
B.dA=A.a(s([0,0,255,0,255,24,24,24]),t.t)
B.c6=A.a(s([0,0,0,0,255,54,54,54]),t.t)
B.cp=A.a(s([54,54,54,54,63,0,0,0]),t.t)
B.bu=A.a(s([24,24,31,24,31,0,0,0]),t.t)
B.cj=A.a(s([0,0,31,24,31,24,24,24]),t.t)
B.cJ=A.a(s([0,0,0,0,63,54,54,54]),t.t)
B.cQ=A.a(s([54,54,54,54,255,54,54,54]),t.t)
B.bP=A.a(s([24,24,255,24,255,24,24,24]),t.t)
B.dk=A.a(s([24,24,24,24,248,0,0,0]),t.t)
B.ba=A.a(s([0,0,0,0,31,24,24,24]),t.t)
B.c7=A.a(s([255,255,255,255,255,255,255,255]),t.t)
B.ca=A.a(s([0,0,0,0,255,255,255,255]),t.t)
B.bk=A.a(s([240,240,240,240,240,240,240,240]),t.t)
B.cr=A.a(s([15,15,15,15,15,15,15,15]),t.t)
B.d6=A.a(s([255,255,255,255,0,0,0,0]),t.t)
B.dN=A.a(s([0,0,118,220,200,220,118,0]),t.t)
B.dq=A.a(s([0,120,204,248,204,248,192,192]),t.t)
B.aq=A.a(s([0,252,204,192,192,192,192,0]),t.t)
B.c9=A.a(s([0,254,108,108,108,108,108,0]),t.t)
B.dl=A.a(s([252,204,96,48,96,204,252,0]),t.t)
B.bn=A.a(s([0,0,126,216,216,216,112,0]),t.t)
B.bt=A.a(s([0,102,102,102,102,124,96,192]),t.t)
B.cE=A.a(s([0,118,220,24,24,24,24,0]),t.t)
B.aj=A.a(s([252,48,120,204,204,120,48,252]),t.t)
B.aK=A.a(s([56,108,198,254,198,108,56,0]),t.t)
B.an=A.a(s([56,108,198,198,108,108,238,0]),t.t)
B.O=A.a(s([28,48,24,124,204,204,120,0]),t.t)
B.dB=A.a(s([0,0,126,219,219,126,0,0]),t.t)
B.bp=A.a(s([6,12,126,219,219,126,96,192]),t.t)
B.ac=A.a(s([56,96,192,248,192,96,56,0]),t.t)
B.cl=A.a(s([120,204,204,204,204,204,204,0]),t.t)
B.cO=A.a(s([0,252,0,252,0,252,0,0]),t.t)
B.a8=A.a(s([48,48,252,48,48,0,252,0]),t.t)
B.bc=A.a(s([96,48,24,48,96,0,252,0]),t.t)
B.cY=A.a(s([24,48,96,48,24,0,252,0]),t.t)
B.bj=A.a(s([14,27,27,24,24,24,24,24]),t.t)
B.dd=A.a(s([24,24,24,24,24,216,216,112]),t.t)
B.cf=A.a(s([48,48,0,252,0,48,48,0]),t.t)
B.T=A.a(s([0,118,220,0,118,220,0,0]),t.t)
B.cB=A.a(s([56,108,108,56,0,0,0,0]),t.t)
B.V=A.a(s([0,0,0,24,24,0,0,0]),t.t)
B.dr=A.a(s([0,0,0,0,24,0,0,0]),t.t)
B.Y=A.a(s([15,12,12,12,236,108,60,28]),t.t)
B.bY=A.a(s([120,108,108,108,108,0,0,0]),t.t)
B.aw=A.a(s([112,24,48,96,120,0,0,0]),t.t)
B.d5=A.a(s([0,0,60,60,60,60,0,0]),t.t)
B.dR=new A.aB(["\u263a",B.dc,"\u263b",B.ad,"\u2665",B.dJ,"\u2666",B.c8,"\u2663",B.b6,"\u2660",B.bi,"\u2022",B.aB,"\u25d8",B.aE,"\u25cb",B.aQ,"\u25d9",B.cX,"\u2642",B.dI,"\u2640",B.dH,"\u266a",B.cU,"\u266b",B.X,"\u263c",B.a1,"\u25ba",B.ay,"\u25c4",B.bE,"\u2195",B.cm,"\u203c",B.ci,"\xb6",B.cs,"\xa7",B.ct,"\u25ac",B.bS,"\u21a8",B.bV,"\u2191",B.S,"\u2193",B.dh,"\u2192",B.da,"\u2190",B.av,"\u221f",B.c_,"\u2194",B.bx,"\u25b2",B.ab,"\u25bc",B.bW," ",B.b1,"!",B.bF,'"',B.a_,"#",B.ap,"$",B.c3,"%",B.R,"&",B.cF,"'",B.ao,"(",B.W,")",B.bB,"*",B.cw,"+",B.dQ,",",B.c5,"-",B.bw,".",B.ck,"/",B.a6,"0",B.b9,"1",B.cn,"2",B.c1,"3",B.dL,"4",B.bD,"5",B.db,"6",B.dt,"7",B.c2,"8",B.cz,"9",B.bg,":",B.d4,";",B.aT,"<",B.bC,"=",B.br,">",B.aD,"?",B.at,"@",B.dp,"A",B.ce,"B",B.aN,"C",B.af,"D",B.a7,"E",B.al,"F",B.cq,"G",B.ar,"H",B.au,"I",B.cP,"J",B.bQ,"K",B.bI,"L",B.bH,"M",B.aO,"N",B.Z,"O",B.cZ,"P",B.bm,"Q",B.cI,"R",B.Q,"S",B.ai,"T",B.dC,"U",B.aL,"V",B.a3,"W",B.cS,"X",B.cL,"Y",B.a5,"Z",B.U,"[",B.by,"\\",B.cD,"]",B.bA,"^",B.ds,"_",B.P,"`",B.aM,"a",B.di,"b",B.ch,"c",B.cK,"d",B.b7,"e",B.dv,"f",B.aR,"g",B.cH,"h",B.aC,"i",B.cx,"j",B.bL,"k",B.be,"l",B.bN,"m",B.bv,"n",B.bO,"o",B.bh,"p",B.dz,"q",B.dw,"r",B.bs,"s",B.d1,"t",B.cV,"u",B.cb,"v",B.b5,"w",B.bl,"x",B.bJ,"y",B.dF,"z",B.dg,"{",B.bb,"|",B.d0,"}",B.aG,"~",B.dP,"\u2302",B.b4,"\xc7",B.ax,"\xfc",B.de,"\xe9",B.dE,"\xe2",B.c4,"\xe4",B.ak,"\xe0",B.b8,"\xe5",B.aa,"\xe7",B.bo,"\xea",B.dn,"\xeb",B.aP,"\xe8",B.d2,"\xef",B.df,"\xee",B.cT,"\xec",B.b0,"\xc4",B.dK,"\xc5",B.d_,"\xc9",B.bG,"\xe6",B.dD,"\xc6",B.aU,"\xf4",B.dx,"\xf6",B.ag,"\xf2",B.dM,"\xfb",B.aS,"\xf9",B.cW,"\xff",B.aA,"\xd6",B.am,"\xdc",B.d8,"\xa2",B.a0,"\xa3",B.aJ,"\xa5",B.b2,"\u20a7",B.dj,"\u0192",B.bR,"\xe1",B.aF,"\xed",B.cg,"\xf3",B.aI,"\xfa",B.cA,"\xf1",B.aY,"\xd1",B.cR,"\xaa",B.ah,"\xba",B.cd,"\xbf",B.d9,"\u2310",B.b_,"\xac",B.aH,"\xbd",B.d3,"\xbc",B.az,"\xa1",B.bU,"\xab",B.bT,"\xbb",B.bd,"\u2591",B.cC,"\u2592",B.dy,"\u2593",B.bM,"\u2502",B.b3,"\u2524",B.aZ,"\u2561",B.c0,"\u2562",B.dO,"\u2556",B.co,"\u2555",B.aV,"\u2563",B.ae,"\u2551",B.cu,"\u2557",B.cc,"\u255d",B.cy,"\u255c",B.as,"\u255b",B.a4,"\u2510",B.a9,"\u2514",B.a2,"\u2534",B.bZ,"\u252c",B.bq,"\u251c",B.d7,"\u2500",B.bX,"\u253c",B.cv,"\u255e",B.cG,"\u255f",B.bf,"\u255a",B.du,"\u2554",B.dm,"\u2569",B.bK,"\u2566",B.bz,"\u2560",B.aX,"\u2550",B.aW,"\u256c",B.dG,"\u2567",B.cN,"\u2568",B.N,"\u2564",B.dA,"\u2565",B.c6,"\u2559",B.cp,"\u2558",B.bu,"\u2552",B.cj,"\u2553",B.cJ,"\u256b",B.cQ,"\u256a",B.bP,"\u2518",B.dk,"\u250c",B.ba,"\u2588",B.c7,"\u2584",B.ca,"\u258c",B.bk,"\u2590",B.cr,"\u2580",B.d6,"\u03b1",B.dN,"\xdf",B.dq,"\u0393",B.aq,"\u03c0",B.c9,"\u03a3",B.dl,"\u03c3",B.bn,"\xb5",B.bt,"\u03c4",B.cE,"\u03a6",B.aj,"\u0398",B.aK,"\u03a9",B.an,"\u03b4",B.O,"\u221e",B.dB,"\u03c6",B.bp,"\u03b5",B.ac,"\u2229",B.cl,"\u2261",B.cO,"\xb1",B.a8,"\u2265",B.bc,"\u2264",B.cY,"\u2320",B.bj,"\u2321",B.dd,"\xf7",B.cf,"\u2248",B.T,"\xb0",B.cB,"\u2219",B.V,"\xb7",B.dr,"\u221a",B.Y,"\u207f",B.bY,"\xb2",B.aw,"\u25a0",B.d5],A.dx("aB<z,h<f>>"))
B.u=new A.G("replace")
B.dS=new A.G("inverse")
B.dT=new A.G("over")
B.dU=new A.G("under")
B.dV=new A.G("stain")
B.dW=new A.G("delete")
B.dX=new A.G("maskDestination")
B.dY=new A.G("maskSource")
B.dZ=new A.u(0,0)
B.e_=new A.u(0,1)
B.e0=new A.u(0,-1)
B.e1=new A.u(1,0)
B.e2=new A.u(-1,0)
B.h=new A.ai("ready")
B.w=new A.ai("awaitingKey")
B.x=new A.ai("awaitingString")
B.y=new A.ai("awaitingMouseClick")
B.e3=A.D("iC")
B.e4=A.D("iD")
B.e5=A.D("fH")
B.e6=A.D("fI")
B.e7=A.D("fM")
B.e8=A.D("fN")
B.e9=A.D("fO")
B.ea=A.D("i")
B.eb=A.D("h3")
B.ec=A.D("cT")
B.ed=A.D("h4")
B.ee=A.D("h5")})();(function staticFields(){$.df=null
$.A=A.a([],t.f)
$.eq=null
$.el=null
$.ek=null
$.fb=null
$.f4=null
$.fe=null
$.dw=null
$.dB=null
$.e9=null
$.b4=A.a([],A.dx("q<h<i>?>"))
$.ao=null
$.bg=null
$.bh=null
$.e3=!1
$.j=B.b})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"iE","dE",()=>A.ik("_$dart_dartClosure"))
s($,"jg","fs",()=>B.b.b3(new A.dD()))
s($,"iM","fi",()=>A.L(A.cS({
toString:function(){return"$receiver$"}})))
s($,"iN","fj",()=>A.L(A.cS({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"iO","fk",()=>A.L(A.cS(null)))
s($,"iP","fl",()=>A.L(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"iS","fo",()=>A.L(A.cS(void 0)))
s($,"iT","fp",()=>A.L(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"iR","fn",()=>A.L(A.ey(null)))
s($,"iQ","fm",()=>A.L(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"iV","fr",()=>A.L(A.ey(void 0)))
s($,"iU","fq",()=>A.L(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"iW","ef",()=>A.h6())
s($,"iG","dF",()=>$.fs())
s($,"jb","dG",()=>A.ec(B.ea))
s($,"iL","fh",()=>A.dO(8,0,t.S))
s($,"iK","fg",()=>A.dO(8,255,t.S))
s($,"jh","eg",()=>A.dQ())
s($,"ji","ft",()=>A.dQ())
s($,"jd","at",()=>A.fK())
s($,"jc","dH",()=>{$.at()
return A.ew(21,A.f9("salad"),"lightgreen",!0,3,3,0,21,!1)})
s($,"je","Q",()=>A.ew(40,A.f9("salad_info"),"lightgreen",!1,3,2,2,17,!1))
s($,"jj","fu",()=>A.dQ())
s($,"jl","fv",()=>{var r=t.s,q=t.N,p=A.dx("h<z>")
return A.a([A.c(A.b(["v",A.a(["to diminish in intensity","to cause to diminish in intensity"],r)],q,p),"abate"),A.c(A.b(["adj",A.a(["diverging from the standard type"],r)],q,p),"aberrant"),A.c(A.b(["v",A.a(["to reject or renounce"],r)],q,p),"abjure"),A.c(A.b(["v",A.a(["to leave secretly, evading detection"],r)],q,p),"abscond"),A.c(A.b(["v",A.a(["to voluntarily refrain from doing something"],r)],q,p),"abstain"),A.c(A.b(["n",A.a(["keen judgment and perception"],r)],q,p),"acumen"),A.c(A.b(["v",A.a(["scold or to advise firmly"],r)],q,p),"admonish"),A.c(A.b(["v",A.a(["to contaminate or make impure by introducing inferior elements"],r)],q,p),"adulterate"),A.c(A.b(["v",A.a(["to recommend, support, or advise"],r)],q,p),"advocate"),A.c(A.b(["adj",A.a(["concerned with the nature of beauty and art"],r)],q,p),"aesthetic"),A.c(A.b(["n",A.a(["false behavior, often meant to impress or conceal the truth"],r)],q,p),"affectation"),A.c(A.b(["v",A.a(["enlarge or increase, esp wealth, power, reputation"],r)],q,p),"aggrandize"),A.c(A.b(["n",A.a(["promptness and eagerness"],r)],q,p),"alacrity"),A.c(A.b(["v",A.a(["to relieve a problem or ease a burden"],r)],q,p),"alleviate"),A.c(A.b(["v",A.a(["to combine to or mix together"],r)],q,p),"amalgamate"),A.c(A.b(["adj",A.a(["unclear","open to multiple interpretations"],r)],q,p),"ambiguous"),A.c(A.b(["adj",A.a(["having mixed or contradictory feelings about someone or something"],r)],q,p),"ambivalent"),A.c(A.b(["v",A.a(["to improve or mitigate a situation"],r)],q,p),"ameliorate"),A.c(A.b(["adj",A.a(["easily convinced or persuaded"],r)],q,p),"amenable"),A.c(A.b(["n",A.a(["something old-fashioned","something appearing in a time period where it does not belong"],r)],q,p),"anachronism"),A.c(A.b(["n",A.a(["comparable","appropriate for analogy"],r)],q,p),"analogous"),A.c(A.b(["v",A.a(["to choose for a particular office or position","to use oil on a person in a religious ceremony"],r)],q,p),"anoint"),A.c(A.b(["n",A.a(["an exception or unusual case"],r)],q,p),"anomaly"),A.c(A.b(["n",A.a(["strong dislike or hatred"],r)],q,p),"antipathy"),A.c(A.b(["adj",A.a(["contrary to the very nature of"],r)],q,p),"antithetical"),A.c(A.b(["n",A.a(["state of total lack of interest or enthusiasm"],r)],q,p),"apathy"),A.c(A.b(["v",A.a(["to placate","to satisfy (an appetite, a need)"],r)],q,p),"appease"),A.c(A.b(["adj",A.a(["seemingly chosen or designated without reason or purpose"],r)],q,p),"arbitrary"),A.c(A.b(["adj",A.a(["secret or known only to a select group"],r)],q,p),"arcane"),A.c(A.b(["adj",A.a(["old-fashioned","no longer in the common usage"],r)],q,p),"archaic"),A.c(A.b(["adj",A.a(["difficult, taxing, requiring considerable effort"],r)],q,p),"arduous"),A.c(A.b(["adj",A.a(["exhibiting considerable communication skills, well-spoken"],r)],q,p),"articulate"),A.c(A.b(["adj",A.a(["without artifice","natural, untrained"],r)],q,p),"artless"),A.c(A.b(["adj",A.a(["austere or self-denying"],r)],q,p),"ascetic"),A.c(A.b(["v",A.a(["to provide relief from an unpleasant feeling","to satisfy a need or appetite"],r)],q,p),"assuage"),A.c(A.b(["n",A.a(["total surprise, shock"],r)],q,p),"astonishment"),A.c(A.b(["adj",A.a(["very bold or presumptuous"],r)],q,p),"audacious"),A.c(A.b(["adj",A.a(["severe, unadorned"],r)],q,p),"austere"),A.c(A.b(["n",A.a(["greed"],r)],q,p),"avarice"),A.c(A.b(["v",A.a(["to assert or allege"],r)],q,p),"aver"),A.c(A.b(["adj",A.a(["boring, cliche"],r)],q,p),"banal"),A.c(A.b(["v",A.a(["give a false impression in word, appearance, or deed"],r)],q,p),"belie"),A.c(A.b(["adj",A.a(["gentle, harmless"],r)],q,p),"benign"),A.c(A.b(["adj",A.a(["prejudiced, displaying partiality"],r)],q,p),"biased"),A.c(A.b(["v",A.a(["to shore up or support"],r)],q,p),"bolster"),A.c(A.b(["adj",A.a(["overblown, theatrical"],r)],q,p),"bombastic"),A.c(A.b(["adj",A.a(["bold or open to the point of shocking","shameless"],r)],q,p),"brazen"),A.c(A.b(["adj",A.a(["pastoral, rustic"],r)],q,p),"bucolic"),A.c(A.b(["v",A.a(["flourish, bloom, expand or increase quickly"],r)],q,p),"burgeon"),A.c(A.b(["n",A.a(["loud and chaotic noise"],r)],q,p),"cacophony"),A.c(A.b(["n",A.a(["lie or slander"],r)],q,p),"calumny"),A.c(A.b(["adj",A.a(["honest, open"],r)],q,p),"candid"),A.c(A.b(["n",A.a(["accepted rules and tenets of a discipline","sacred works/scripture","notable literary and artistic works"],r)],q,p),"canon"),A.c(A.b(["n",A.a(["the ability to perform a particular action","the total amount a container can hold","a particular position or role"],r)],q,p),"capacity"),A.c(A.b(["adj",A.a(["mercurial, unpredictable, whimsical"],r)],q,p),"capricious"),A.c(A.b(["v",A.a(["to scold or berate strongly"],r)],q,p),"castigate"),A.c(A.b(["n",A.a(["something that speeds up a process or causes action"],r)],q,p),"catalyst"),A.c(A.b(["adj",A.a(["corrosive","bitterly sarcastic"],r)],q,p),"caustic"),A.c(A.b(["v",A.a(["to express intense condemnation"],r)],q,p),"censure"),A.c(A.b(["n",A.a(["someone displaying prejudiced support for their own group"],r)],q,p),"chauvinist"),A.c(A.b(["n",A.a(["trickery or deception"],r)],q,p),"chicanery"),A.c(A.b(["adj",A.a(["ordered by time"],r)],q,p),"chronological"),A.c(A.b(["v",A.a(["to come together, especially from disparate parts"],r)],q,p),"coalesce"),A.c(A.b(["adj",A.a(["clearly laid out and persuasive"],r)],q,p),"cogent"),A.c(A.b(["adj",A.a(["in accordance with, proportional"],r)],q,p),"commensurate"),A.c(A.b(["adj",A.a(["captivating","very persuasive"],r)],q,p),"compelling"),A.c(A.b(["adj",A.a(["complete and thorough"],r)],q,p),"comprehensive"),A.c(A.b(["v",A.a(["to approve or allow"],r)],q,p),"condone"),A.c(A.b(["v",A.a(["to confuse or astonish"],r)],q,p),"confound"),A.c(A.b(["n",A.a(["an expert judge in matters of taste"],r)],q,p),"connoisseur"),A.c(A.b(["adj",A.a(["as a result of","significant or memorable"],r)],q,p),"consequential"),A.c(A.b(["v",A.a(["to interpret"],r)],q,p),"construe"),A.c(A.b(["n",A.a(["utilization (especially of a resource)"],r)],q,p),"consumption"),A.c(A.b(["v",A.a(["assert or claim","grapple with"],r)],q,p),"contend"),A.c(A.b(["adj",A.a(["controversial","involving conflict"],r)],q,p),"contentious"),A.c(A.b(["adj",A.a(["remorseful"],r)],q,p),"contrite"),A.c(A.b(["adj",A.a(["roundabout, not straightforward"],r)],q,p),"convoluted"),A.c(A.b(["adj",A.a(["plentiful or abundant"],r)],q,p),"copious"),A.c(A.b(["adj",A.a(["of or relating to a city or urban area","sophisticated"],r)],q,p),"cosmopolitan"),A.c(A.b(["v",A.a(["to desire something that does not belong to you"],r)],q,p),"covet"),A.c(A.b(["n",A.a(["cunning","skill"],r)],q,p),"craft"),A.c(A.b(["adj",A.a(["cowardly to the point of being shameful"],r)],q,p),"craven"),A.c(A.b(["n",A.a(["belief or trust"],r)],q,p),"credence"),A.c(A.b(["adj",A.a(["gullible, naive"],r)],q,p),"credulous"),A.c(A.b(["n",A.a(["appropriate behavior or good manners"],r)],q,p),"decorum"),A.c(A.b(["n",A.a(["respect or polite submission"],r)],q,p),"deference"),A.c(A.b(["v",A.a(["divert or cause to ricochet"],r)],q,p),"deflect"),A.c(A.b(["adj",A.a(["skill, acumen","manual dexterity"],r)],q,p),"deftness"),A.c(A.b(["v",A.a(["to describe very accurately","to clearly demarcate a boundary","to render an outline"],r)],q,p),"delineate"),A.c(A.b(["v",A.a(["to object or raise concerns"],r)],q,p),"demur"),A.c(A.b(["v",A.a(["say negative things about, particularly in a defamatory way"],r)],q,p),"denigrate"),A.c(A.b(["v",A.a(["to mock or ridicule"],r)],q,p),"deride"),A.c(A.b(["adj",A.a(["imitates another work in a way that is uninspiring"],r)],q,p),"derivative"),A.c(A.b(["v",A.a(["to dry out completely","to suck out the vitality and passion"],r)],q,p),"desiccate"),A.c(A.b(["adj",A.a(["halfhearted","inconsistent or random"],r)],q,p),"desultory"),A.c(A.b(["n",A.a(["objectivity or aloofness"],r)],q,p),"detachment"),A.c(A.b(["n",A.a(["a strong factor in an outcome"],r)],q,p),"determinant"),A.c(A.b(["n",A.a(["a rant or angry speech denouncing someone or something"],r)],q,p),"diatribe"),A.c(A.b(["adj",A.a(["intended to teach something, particularly related to morality"],r)],q,p),"didactic"),A.c(A.b(["adj",A.a(["shy, timid, or reserved due to a lack of confidence"],r)],q,p),"diffident"),A.c(A.b(["n",A.a(["someone with an amateur, unserious interest in something"],r)],q,p),"dilettante"),A.c(A.b(["n",A.a(["funeral or mourning lament","any sad, slow song"],r)],q,p),"dirge"),A.c(A.b(["v",A.a(["to dispel someone's illusions about something"],r)],q,p),"disabuse"),A.c(A.b(["v",A.a(["to perceive"],r)],q,p),"discern"),A.c(A.b(["n",A.a(["inconsistency"],r)],q,p),"discrepancy"),A.c(A.b(["adj",A.a(["objective, unbiased","not invested in the outcome"],r)],q,p),"disinterested"),A.c(A.b(["v",A.a(["to belittle"],r)],q,p),"disparage"),A.c(A.b(["adj",A.a(["dissimilar to such a degree that comparison is not possible"],r)],q,p),"disparate"),A.c(A.b(["adj",A.a(["impartial or cool"],r)],q,p),"dispassionate"),A.c(A.b(["v",A.a(["to ignore or pay no attention to"],r)],q,p),"disregard"),A.c(A.b(["v",A.a(["conceal or disguise one's true feelings or beliefs"],r)],q,p),"dissemble"),A.c(A.b(["v",A.a(["to spread widely (especially information)"],r)],q,p),"disseminate"),A.c(A.b(["n",A.a(["a clash between two elements that don't blend well"],r)],q,p),"dissonance"),A.c(A.b(["v",A.a(["to split apart, especially a road or path"],r)],q,p),"diverge"),A.c(A.b(["n",A.a(["the official beliefs or tenets of particular sect or group"],r)],q,p),"dogma"),A.c(A.b(["v",A.a(["to deceive or fool"],r)],q,p),"dupe"),A.c(A.b(["adj",A.a(["cheerful, enthusiastic, excited"],r)],q,p),"ebullient"),A.c(A.b(["adj",A.a(["quirky or unusual"],r)],q,p),"eccentric"),A.c(A.b(["adj",A.a(["composed of a variety of styles, themes, motifs, etc."],r)],q,p),"eclectic"),A.c(A.b(["n",A.a(["effectiveness"],r)],q,p),"efficacy"),A.c(A.b(["n",A.a(["sad poem or song, often in remembrance of someone deceased"],r)],q,p),"elegy"),A.c(A.b(["v",A.a(["to provoke a response"],r)],q,p),"elicit"),A.c(A.b(["adj",A.a(["persuasive and articulate speech"],r)],q,p),"eloquence"),A.c(A.b(["adj",A.a(["well-known, respected, distinguished"],r)],q,p),"eminent"),A.c(A.b(["adj",A.a(["based on evidence"],r)],q,p),"empirical"),A.c(A.b(["v",A.a(["to imitate or attempt to equal in accomplishment"],r)],q,p),"emulate"),A.c(A.b(["v",A.a(["to exhaust or drain of energy"],r)],q,p),"enervate"),A.c(A.b(["v",A.a(["to cause or give rise to"],r)],q,p),"engender"),A.c(A.b(["v",A.a(["intensify, increase, augment"],r)],q,p),"enhance"),A.c(A.b(["n",A.a(["belief that one deserves things one has not earned","the rights one is afforded under the law"],r)],q,p),"entitlement"),A.c(A.b(["adj",A.a(["short-lived or transient"],r)],q,p),"ephemeral"),A.c(A.b(["adj",A.a(["even-tempered","not given to much change or variation"],r)],q,p),"equable"),A.c(A.b(["v",A.a(["to use ambiguous language in order to mislead or deceive"],r)],q,p),"equivocate"),A.c(A.b(["adj",A.a(["incorrect"],r)],q,p),"erroneous"),A.c(A.b(["adj",A.a(["learned"],r)],q,p),"erudite"),A.c(A.b(["v",A.a(["avoid or abstain from"],r)],q,p),"eschew"),A.c(A.b(["adj",A.a(["obscure, arcane"],r)],q,p),"esoteric"),A.c(A.b(["adj",A.a(["deserving respect, esteem, and admiration"],r)],q,p),"estimable"),A.c(A.b(["n",A.a(["memorial speech for one who has died"],r)],q,p),"eulogy"),A.c(A.b(["v",A.a(["to make worse"],r)],q,p),"exacerbate"),A.c(A.b(["adj",A.a(["challenging, demanding, grueling"],r)],q,p),"exacting"),A.c(A.b(["v",A.a(["to exonerate or vindicate"],r)],q,p),"exculpate"),A.c(A.b(["adj",A.a(["urgent or pressing"],r)],q,p),"exigent"),A.c(A.b(["v",A.a(["to clear of charges of wrongdoing"],r)],q,p),"exonerate"),A.c(A.b(["v",A.a(["to elaborate on something in great detail"],r)],q,p),"expatiate"),A.c(A.b(["v",A.a(["to explain in detail"],r)],q,p),"explicate"),A.c(A.b(["n",A.a(["a thorough explanation","a public show or fair"],r)],q,p),"exposition"),A.c(A.b(["adj",A.a(["irrelevant or superfluous"],r)],q,p),"extraneous"),A.c(A.b(["v",A.a(["to estimate based on presently available information or facts"],r)],q,p),"extrapolate"),A.c(A.b(["adj",A.a(["glib or flippant"],r)],q,p),"facetious"),A.c(A.b(["v",A.a(["to make something easier or simpler"],r)],q,p),"facilitate"),A.c(A.b(["adj",A.a(["relying on a fallacy and thus incorrect/misinformed"],r)],q,p),"fallacious"),A.c(A.b(["adj",A.a(["meticulous","invested in cleanliness"],r)],q,p),"fastidious"),A.c(A.b(["v",A.a(["to shift without apparent pattern"],r)],q,p),"fluctuate"),A.c(A.b(["v",A.a(["to foster unrest or discontent"],r)],q,p),"foment"),A.c(A.b(["v",A.a(["to hold off or try to prevent"],r)],q,p),"forestall"),A.c(A.b(["adj",A.a(["fortunate and lucky"],r)],q,p),"fortuitous"),A.c(A.b(["adj",A.a(["economical, thrifty"],r)],q,p),"frugal"),A.c(A.b(["v",A.a(["deny or oppose"],r)],q,p),"gainsay"),A.c(A.b(["v",A.a(["to prod someone into action"],r)],q,p),"galvanize"),A.c(A.b(["adj",A.a(["talkative"],r)],q,p),"garrulous"),A.c(A.b(["adj",A.a(["socially inept, inappropriate, or awkward"],r)],q,p),"gauche"),A.c(A.b(["adj",A.a(["relevant to the matter at hand"],r)],q,p),"germane"),A.c(A.b(["adj",A.a(["talking volubly, but carelessly or insincerely"],r)],q,p),"glib"),A.c(A.b(["adj",A.a(["sociable, genial"],r)],q,p),"gregarious"),A.c(A.b(["n",A.a(["craftiness and cunning"],r)],q,p),"guile"),A.c(A.b(["adj",A.a(["cliche, trite, banal"],r)],q,p),"hackneyed"),A.c(A.b(["n",A.a(["diatribe or rant"],r)],q,p),"harangue"),A.c(A.b(["n",A.a(["the pursuit of pleasure"],r)],q,p),"hedonism"),A.c(A.b(["adj",A.a(["arranged in rank order or hierarchy"],r)],q,p),"hierarchical"),A.c(A.b(["adj",A.a(["uniform, identical"],r)],q,p),"homogenous"),A.c(A.b(["n",A.a(["obvious exaggeration for effect"],r)],q,p),"hyperbole"),A.c(A.b(["n",A.a(["a person who criticizes cherished beliefs or institutions"],r)],q,p),"iconoclast"),A.c(A.b(["adj",A.a(["relating to a particular belief system or theory"],r)],q,p),"ideological"),A.c(A.b(["adj",A.a(["about to happen"],r)],q,p),"imminent"),A.c(A.b(["adj",A.a(["unchangeable"],r)],q,p),"immutable"),A.c(A.b(["v",A.a(["to hinder or weaken someone or something"],r)],q,p),"impair"),A.c(A.b(["n",A.a(["barrier, hindrance, or obstruction"],r)],q,p),"impediment"),A.c(A.b(["adj",A.a(["remaining calm under any circumstance"],r)],q,p),"imperturbable"),A.c(A.b(["adj",A.a(["unforgiving","relentless"],r)],q,p),"implacable"),A.c(A.b(["adj",A.a(["implied or insinuated without being directly stated"],r)],q,p),"implicit"),A.c(A.b(["n",A.a(["bad judgment"],r)],q,p),"imprudence"),A.c(A.b(["adj",A.a(["disrespectful"],r)],q,p),"impudent"),A.c(A.b(["adj",A.a(["by accident or unintentional"],r)],q,p),"inadvertent"),A.c(A.b(["adj",A.a(["rudimentary, in the beginning stages"],r)],q,p),"inchoate"),A.c(A.b(["adj",A.a(["indeterminate or unresolved"],r)],q,p),"inconclusive"),A.c(A.b(["adj",A.a(["owing money","owing gratitude to someone or something"],r)],q,p),"indebted"),A.c(A.b(["adj",A.a(["cannot be made tired"],r)],q,p),"indefatigable"),A.c(A.b(["adj",A.a(["lazy","idle"],r)],q,p),"indolent"),A.c(A.b(["v",A.a(["to conclude from implicit evidence (as opposed to explicit facts)"],r)],q,p),"infer"),A.c(A.b(["adj",A.a(["naive or innocent"],r)],q,p),"ingenuous"),A.c(A.b(["adj",A.a(["harmful or hostile"],r)],q,p),"inimical"),A.c(A.b(["adj",A.a(["harmless"],r)],q,p),"innocuous"),A.c(A.b(["adj",A.a(["enigmatic, incomprehensible"],r)],q,p),"inscrutable"),A.c(A.b(["adj",A.a(["bland, uninspired, inane"],r)],q,p),"insipid"),A.c(A.b(["adj",A.a(["uninterested in matters outside one's immediate sphere"],r)],q,p),"insular"),A.c(A.b(["adj",A.a(["concentrated and in-depth"],r)],q,p),"intensive"),A.c(A.b(["n",A.a(["a go-between"],r)],q,p),"intermediary"),A.c(A.b(["adj",A.a(["close (as in a relationship)","particularly private"],r),"v",A.a(["to imply"],r)],q,p),"intimate"),A.c(A.b(["adj",A.a(["unmanageable","stubborn or obstinate"],r)],q,p),"intractable"),A.c(A.b(["adj",A.a(["uncompromising, obstinate"],r)],q,p),"intransigent"),A.c(A.b(["adj",A.a(["bold and adventurous"],r)],q,p),"intrepid"),A.c(A.b(["adj",A.a(["ingrained, habitual"],r)],q,p),"inveterate"),A.c(A.b(["adj",A.a(["indestructible, impervious to harm"],r)],q,p),"invulnerable"),A.c(A.b(["adj",A.a(["irritable, testy, touchy"],r)],q,p),"irascible"),A.c(A.b(["adj",A.a(["wishy-washy, hesitant"],r)],q,p),"irresolute"),A.c(A.b(["adj",A.a(["taciturn, reserved, succinct"],r)],q,p),"laconic"),A.c(A.b(["v",A.a(["to praise"],r)],q,p),"laud"),A.c(A.b(["adj",A.a(["praiseworthy"],r)],q,p),"laudable"),A.c(A.b(["n",A.a(["legal proceedings"],r)],q,p),"litigation"),A.c(A.b(["adj",A.a(["talkative"],r)],q,p),"loquacious"),A.c(A.b(["adj",A.a(["clear and coherent"],r)],q,p),"lucid"),A.c(A.b(["adj",A.a(["full of light"],r)],q,p),"luminous"),A.c(A.b(["n",A.a(["generosity and nobility of spirit"],r)],q,p),"magnanimity"),A.c(A.b(["adj",A.a(["clumsy, awkward, inept"],r)],q,p),"maladroit"),A.c(A.b(["adj",A.a(["evil or harmful"],r),"v",A.a(["to speak negatively about someone or something"],r)],q,p),"malign"),A.c(A.b(["adj",A.a(["pliant or pliable","easily influenced"],r)],q,p),"malleable"),A.c(A.b(["n",A.a(["an unorthodox person or rebel"],r)],q,p),"maverick"),A.c(A.b(["n",A.a(["untruthfulness, dishonesty"],r)],q,p),"mendacity"),A.c(A.b(["adj",A.a(["easily changeable, fickle"],r)],q,p),"mercurial"),A.c(A.b(["adj",A.a(["paying close attention to detail"],r)],q,p),"meticulous"),A.c(A.b(["n",A.a(["person who hates humanity"],r)],q,p),"misanthrope"),A.c(A.b(["v",A.a(["to improve a painful, unpleasant, or negative situation"],r)],q,p),"mitigate"),A.c(A.b(["adj",A.a(["not boastful","not overly showy"],r)],q,p),"modest"),A.c(A.b(["v",A.a(["placate"],r)],q,p),"mollify"),A.c(A.b(["n",A.a(["boredom and repetition"],r)],q,p),"monotony"),A.c(A.b(["adj",A.a(["everyday, boring"],r)],q,p),"mundane"),A.c(A.b(["adj",A.a(["very generous"],r)],q,p),"munificent"),A.c(A.b(["adj",A.a(["just beginning or in the early stages"],r)],q,p),"nascent"),A.c(A.b(["adj",A.a(["inexperienced or gullible"],r)],q,p),"naive"),A.c(A.b(["v",A.a(["to abandon or leave uncared-for"],r)],q,p),"neglect"),A.c(A.b(["adj",A.a(["confused and baffled"],r)],q,p),"nonplussed"),A.c(A.b(["n",A.a(["fame for doing something negative or criminal"],r)],q,p),"notoriety"),A.c(A.b(["n",A.a(["subtle shades of difference"],r)],q,p),"nuance"),A.c(A.b(["adj",A.a(["stubborn, obstinate"],r)],q,p),"obdurate"),A.c(A.b(["adj",A.a(["mysterious or not well-known"],r),"v",A.a(["to cover something up or make it more difficult to perceive"],r)],q,p),"obscure"),A.c(A.b(["adj",A.a(["overly fawning and helpful in a way that is disingenuous"],r)],q,p),"obsequious"),A.c(A.b(["adj",A.a(["stubborn, uncompromising"],r)],q,p),"obstinate"),A.c(A.b(["v",A.a(["to forestall the need for something","to prevent"],r)],q,p),"obviate"),A.c(A.b(["v",A.a(["to block or obstruct"],r)],q,p),"occlude"),A.c(A.b(["n",A.a(["the mystical and supernatural"],r)],q,p),"occult"),A.c(A.b(["v",A.a(["to counterbalance or counteract"],r)],q,p),"offset"),A.c(A.b(["adj",A.a(["relating to smell or the sense of smell"],r)],q,p),"olfactory"),A.c(A.b(["n",A.a(["the quality or state of being all-knowing"],r)],q,p),"omniscience"),A.c(A.b(["adj",A.a(["difficult or burdensome"],r)],q,p),"onerous"),A.c(A.b(["adj",A.a(["not see-through; blocking light"],r)],q,p),"opaque"),A.c(A.b(["n",A.a(["criticism or condemnation"],r)],q,p),"opprobrium"),A.c(A.b(["v",A.a(["to swing back and forth between two points, poles, or positions"],r)],q,p),"oscillate"),A.c(A.b(["adj",A.a(["overly showy in a way that is gaudy or vulgar"],r)],q,p),"ostentatious"),A.c(A.b(["v",A.a(["to overtake or outrun"],r)],q,p),"outstrip"),A.c(A.b(["v",A.a(["to literally cast a shadow over","to appear more notable than"],r)],q,p),"overshadow"),A.c(A.b(["adj",A.a(["attentive to detail, meticulous"],r)],q,p),"painstaking"),A.c(A.b(["adj",A.a(["incomplete"],r)],q,p),"partial"),A.c(A.b(["n",A.a(["a devoted supporter of a group, cause, or person"],r)],q,p),"partisan"),A.c(A.b(["adj",A.a(["blatant, obvious"],r)],q,p),"patent"),A.c(A.b(["n",A.a(["scarcity, poverty"],r)],q,p),"paucity"),A.c(A.b(["adj",A.a(["overly concerned with irrelevant detail, fussy"],r)],q,p),"pedantic"),A.c(A.b(["adj",A.a(["boring, monotonous, run-of-the-mill"],r)],q,p),"pedestrian"),A.c(A.b(["n",A.a(["treachery or deceit"],r)],q,p),"perfidy"),A.c(A.b(["adj",A.a(["done without much effort, care, or thought"],r)],q,p),"perfunctory"),A.c(A.b(["adj",A.a(["on the edge or periphery; not centrally important"],r)],q,p),"peripheral"),A.c(A.b(["v",A.a(["to pervade or penetrate throughout"],r)],q,p),"permeate"),A.c(A.b(["n",A.a(["persistence in the face of obstacles"],r)],q,p),"perseverance"),A.c(A.b(["v",A.a(["to read something carefully and closely","to read something informally or quickly"],r)],q,p),"peruse"),A.c(A.b(["adj",A.a(["found everywhere, widespread; often has a negative connotation"],r)],q,p),"pervasive"),A.c(A.b(["n",A.a(["things that happen"],r)],q,p),"phenomena"),A.c(A.b(["adj",A.a(["cool and unruffled"],r)],q,p),"phlegmatic"),A.c(A.b(["n",A.a(["the essential substance of something"],r)],q,p),"pith"),A.c(A.b(["v",A.a(["to calm, especially an angry or upset person"],r)],q,p),"placate"),A.c(A.b(["adj",A.a(["easily shaped or molded","made of plastic"],r)],q,p),"plastic"),A.c(A.b(["n",A.a(["a trite or cliche statement"],r)],q,p),"platitude"),A.c(A.b(["adj",A.a(["believable, reasonable"],r)],q,p),"plausible"),A.c(A.b(["n",A.a(["a surplus or overabundance of something"],r)],q,p),"plethora"),A.c(A.b(["v",A.a(["to fall quickly and far"],r)],q,p),"plummet"),A.c(A.b(["v",A.a(["to cause a sharp division between two groups"],r)],q,p),"polarize"),A.c(A.b(["adj",A.a(["angry, hostile, harshly critical"],r)],q,p),"polemical"),A.c(A.b(["adj",A.a(["practical"],r)],q,p),"pragmatic"),A.c(A.b(["adj",A.a(["uncertain or unstable"],r)],q,p),"precarious"),A.c(A.b(["adj",A.a(["went before"],r)],q,p),"preceded"),A.c(A.b(["v",A.a(["to cause"],r),"adj",A.a(["hastily and not well-considered"],r),"n",A.a(["particulate matter formed within a solution"],r)],q,p),"precipitate"),A.c(A.b(["n",A.a(["a forerunner"],r)],q,p),"precursor"),A.c(A.b(["adj",A.a(["knowing things before they happen, prophetic"],r)],q,p),"prescient"),A.c(A.b(["adj",A.a(["overly familiar; invades social boundaries"],r)],q,p),"presumptuous"),A.c(A.b(["v",A.a(["to succeed, especially with respect to vanquishing an opponent","to convince or persuade"],r)],q,p),"prevail"),A.c(A.b(["v",A.a(["to evade or deceive without outright lying"],r)],q,p),"prevaricate"),A.c(A.b(["adj",A.a(["untouched, clean, pure"],r)],q,p),"pristine"),A.c(A.b(["n",A.a(["integrity and honor"],r)],q,p),"probity"),A.c(A.b(["n",A.a(["a reckless spender"],r)],q,p),"prodigal"),A.c(A.b(["adj",A.a(["enormous, immense, gigantic"],r)],q,p),"prodigious"),A.c(A.b(["adj",A.a(["extravagant and wasteful, especially in an immoral way"],r)],q,p),"profligate"),A.c(A.b(["v",A.a(["to multiply and spread rapidly"],r)],q,p),"proliferate"),A.c(A.b(["v",A.a(["to obtain favor from someone, by performing a pleasing action","to appease someone who is angry"],r)],q,p),"propitiate"),A.c(A.b(["n",A.a(["appropriateness, manners, decorum"],r)],q,p),"propriety"),A.c(A.b(["adj",A.a(["potential or likely","applicable to the future"],r)],q,p),"prospective"),A.c(A.b(["n",A.a(["credential","a modifying statement"],r)],q,p),"qualification"),A.c(A.b(["adj",A.a(["relating to the everyday or mundane"],r)],q,p),"quotidian"),A.c(A.b(["v",A.a(["attempt to justify with superficially valid reasons"],r)],q,p),"rationalize"),A.c(A.b(["v",A.a(["to bring into harmony","to repair a relationship"],r)],q,p),"reconcile"),A.c(A.b(["adj",A.a(["arcane or obscure"],r)],q,p),"recondite"),A.c(A.b(["v",A.a(["to rebut or disprove"],r)],q,p),"refute"),A.c(A.b(["adj",A.a(["never stopping, constant"],r)],q,p),"relentless"),A.c(A.b(["adj",A.a(["relating to the topic or issue at hand"],r)],q,p),"relevant"),A.c(A.b(["v",A.a(["to scold or express criticism"],r)],q,p),"reproach"),A.c(A.b(["v",A.a(["to renounce or disown"],r)],q,p),"repudiate"),A.c(A.b(["v",A.a(["to take back or retract (an offer or statement)"],r)],q,p),"rescind"),A.c(A.b(["adv",A.a(["in the sequential order previously given"],r)],q,p),"respectively"),A.c(A.b(["adj",A.a(["hesitant to speak","introverted or silent"],r)],q,p),"reticent"),A.c(A.b(["adj",A.a(["solemn and respectful"],r)],q,p),"reverent"),A.c(A.b(["n",A.a(["the art of effective communication (written or verbal)"],r)],q,p),"rhetoric"),A.c(A.b(["adj",A.a(["health-promoting"],r)],q,p),"salubrious"),A.c(A.b(["v",A.a(["to give official permission","to impose a penalty for a particular action"],r),"n",A.a(["punishments imposed for breaking a regulation"],r)],q,p),"sanction"),A.c(A.b(["v",A.a(["to completely satisfy (with respect to hunger or appetite)"],r)],q,p),"satiate"),A.c(A.b(["adj",A.a(["of or relating to worldly (as opposed to religious) matters"],r)],q,p),"secular"),A.c(A.b(["n",A.a(["material that settles at the bottom of a body of water"],r)],q,p),"sediment"),A.c(A.b(["adj",A.a(["dedicated and careful"],r)],q,p),"sedulous"),A.c(A.b(["adj",A.a(["occurring at the same moment"],r)],q,p),"simultaneous"),A.c(A.b(["adj",A.a(["considerate, attentive"],r)],q,p),"solicitous"),A.c(A.b(["adj",A.a(["makes sleepy"],r)],q,p),"soporific"),A.c(A.b(["adj",A.a(["scattered or scarce","austere and unadorned"],r)],q,p),"sparse"),A.c(A.b(["adj",A.a(["spurious; appearing true but actually false"],r)],q,p),"specious"),A.c(A.b(["adj",A.a(["occasional or scattered"],r)],q,p),"sporadic"),A.c(A.b(["adj",A.a(["fake or false"],r)],q,p),"spurious"),A.c(A.b(["adj",A.a(["calm and dependable"],r)],q,p),"stolid"),A.c(A.b(["adj",A.a(["open to personal interpretation; not based in objective fact"],r)],q,p),"subjective"),A.c(A.b(["v",A.a(["to corroborate or give evidence of something"],r)],q,p),"substantiate"),A.c(A.b(["adj",A.a(["meant to undercut established institutions or norms"],r)],q,p),"subversive"),A.c(A.b(["adj",A.a(["enough for a given purpose"],r)],q,p),"sufficient"),A.c(A.b(["adv",A.a(["excellently"],r)],q,p),"superbly"),A.c(A.b(["adj",A.a(["laying back with the face upward (opposite position to prone)"],r)],q,p),"supine"),A.c(A.b(["v",A.a(["to overtake or replace"],r)],q,p),"supplant"),A.c(A.b(["n",A.a(["a fawning, insincere admirer"],r)],q,p),"sycophant"),A.c(A.b(["v",A.a(["to combine disparate parts into a coherent whole"],r)],q,p),"synthesize"),A.c(A.b(["adj",A.a(["unspoken; implicit"],r)],q,p),"tacit"),A.c(A.b(["adj",A.a(["reticent or reserved; tending towards silence"],r)],q,p),"taciturn"),A.c(A.b(["n",A.a(["moderation and restraint, often in terms of alcohol consumption"],r)],q,p),"temperance"),A.c(A.b(["adj",A.a(["weak, flimsy, insubstantial"],r)],q,p),"tenuous"),A.c(A.b(["adj",A.a(["meek or timid"],r)],q,p),"timorous"),A.c(A.b(["n",A.a(["an angry rant"],r)],q,p),"tirade"),A.c(A.b(["n",A.a(["tiredness, lethargy"],r)],q,p),"torpor"),A.c(A.b(["adj",A.a(["winding or twisty","complicated"],r)],q,p),"tortuous"),A.c(A.b(["adj",A.a(["can be easily influenced or managed"],r)],q,p),"tractable"),A.c(A.b(["adj",A.a(["passes quickly; short-lived"],r)],q,p),"transient"),A.c(A.b(["adj",A.a(["ever-present or universal"],r)],q,p),"ubiquitous"),A.c(A.b(["adj",A.a(["plain; unembellished"],r)],q,p),"unadorned"),A.c(A.b(["v",A.a(["to weaken or compromise"],r)],q,p),"undermine"),A.c(A.b(["v",A.a(["to line underneath for emphasis","to emphasize"],r)],q,p),"underscore"),A.c(A.b(["adj",A.a(["describes a weak or unsupportable opinion or situation"],r)],q,p),"untenable"),A.c(A.b(["v",A.a(["to shift between multiple options or opinions"],r)],q,p),"vacillate"),A.c(A.b(["n",A.a(["the state of being capable of being bribed"],r)],q,p),"venality"),A.c(A.b(["v",A.a(["to give a high degree of respect; may border on worship"],r)],q,p),"venerate"),A.c(A.b(["n",A.a(["Truth and factual accuracy"],r)],q,p),"veracity"),A.c(A.b(["adj",A.a(["long-winded; loquacious"],r)],q,p),"verbose"),A.c(A.b(["n",A.a(["state of being frustrated, irritated, or concerned."],r)],q,p),"vexation"),A.c(A.b(["adj",A.a(["easily changeable or extreme; unstable"],r)],q,p),"volatile"),A.c(A.b(["adj",A.a(["fanciful or capricious"],r)],q,p),"whimsical"),A.c(A.b(["n",A.a(["passion or fervor"],r)],q,p),"zeal")],t.G)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.bA,ArrayBufferView:A.aQ,DataView:A.bB,Float32Array:A.bC,Float64Array:A.bD,Int16Array:A.bE,Int32Array:A.bF,Int8Array:A.bG,Uint16Array:A.bH,Uint32Array:A.bI,Uint8ClampedArray:A.aR,CanvasPixelArray:A.aR,Uint8Array:A.bJ})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.ae.$nativeSuperclassTag="ArrayBufferView"
A.b0.$nativeSuperclassTag="ArrayBufferView"
A.b1.$nativeSuperclassTag="ArrayBufferView"
A.aO.$nativeSuperclassTag="ArrayBufferView"
A.b2.$nativeSuperclassTag="ArrayBufferView"
A.b3.$nativeSuperclassTag="ArrayBufferView"
A.aP.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.bk
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=salad.js.map
