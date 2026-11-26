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
if(a[b]!==s){A.iw(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.r(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.dT(b)
return new s(c,this)}:function(){if(s===null)s=A.dT(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.dT(a).prototype
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
dX(a,b,c,d){return{i:a,p:b,e:c,x:d}},
dU(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.dV==null){A.io()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.c(A.eh("Return interceptor for "+A.m(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.d8
if(o==null)o=$.d8=A.dm(n)
p=q[o]}if(p!=null)return p
p=A.is(a)
if(p!=null)return p
if(typeof a=="function")return B.F
s=Object.getPrototypeOf(a)
if(s==null)return B.o
if(s===Object.prototype)return B.o
if(typeof q=="function"){o=$.d8
if(o==null)o=$.d8=A.dm(n)
Object.defineProperty(q,o,{value:B.i,enumerable:false,writable:true,configurable:true})
return B.i}return B.i},
ea(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
fs(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.ea(r))break;++b}return b},
ft(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.a(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.ea(q))break}return b},
a5(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.az.prototype
return J.bv.prototype}if(typeof a=="string")return J.Z.prototype
if(a==null)return J.aA.prototype
if(typeof a=="boolean")return J.bu.prototype
if(Array.isArray(a))return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.M.prototype
if(typeof a=="symbol")return J.aD.prototype
if(typeof a=="bigint")return J.aB.prototype
return a}if(a instanceof A.d)return a
return J.dU(a)},
eJ(a){if(typeof a=="string")return J.Z.prototype
if(a==null)return a
if(Array.isArray(a))return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.M.prototype
if(typeof a=="symbol")return J.aD.prototype
if(typeof a=="bigint")return J.aB.prototype
return a}if(a instanceof A.d)return a
return J.dU(a)},
ii(a){if(a==null)return a
if(Array.isArray(a))return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.M.prototype
if(typeof a=="symbol")return J.aD.prototype
if(typeof a=="bigint")return J.aB.prototype
return a}if(a instanceof A.d)return a
return J.dU(a)},
ij(a){if(typeof a=="number")return J.ab.prototype
if(a==null)return a
if(!(a instanceof A.d))return J.a0.prototype
return a},
ik(a){if(typeof a=="string")return J.Z.prototype
if(a==null)return a
if(!(a instanceof A.d))return J.a0.prototype
return a},
as(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.a5(a).C(a,b)},
H(a){return J.a5(a).gk(a)},
f8(a){return J.ii(a).gv(a)},
e0(a){return J.eJ(a).gt(a)},
f9(a){return J.a5(a).gp(a)},
e1(a){return J.ij(a).c5(a)},
bh(a){return J.a5(a).h(a)},
fa(a){return J.ik(a).c6(a)},
br:function br(){},
bu:function bu(){},
aA:function aA(){},
aC:function aC(){},
O:function O(){},
bH:function bH(){},
a0:function a0(){},
M:function M(){},
aB:function aB(){},
aD:function aD(){},
n:function n(a){this.$ti=a},
bt:function bt(){},
cb:function cb(a){this.$ti=a},
bi:function bi(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ab:function ab(){},
az:function az(){},
bv:function bv(){},
Z:function Z(){}},A={dA:function dA(){},
fv(a){return new A.ac("Field '"+a+"' has not been initialized.")},
fu(a){return new A.ac("Field '"+a+"' has already been initialized.")},
P(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
dH(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
dS(a,b,c){return a},
dW(a){var s,r
for(s=$.z.length,r=0;r<s;++r)if(a===$.z[r])return!0
return!1},
e9(){return new A.a_("No element")},
ac:function ac(a){this.a=a},
dt:function dt(){},
cn:function cn(){},
av:function av(){},
aG:function aG(){},
ad:function ad(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aw:function aw(a){this.$ti=a},
bp:function bp(){},
ay:function ay(){},
eR(a){var s=A.eQ(a)
if(s!=null)return s
return"minified:"+a},
iZ(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.E.b(a)},
m(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.bh(a)
return s},
ai(a){var s,r=$.eb
if(r==null)r=$.eb=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
bI(a){var s,r,q,p
if(a instanceof A.d)return A.y(A.bg(a),null)
s=J.a5(a)
if(s===B.D||s===B.G||t.A.b(a)){r=B.j(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.y(A.bg(a),null)},
ec(a){var s,r,q
if(a==null||typeof a=="number"||A.dN(a))return J.bh(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.W)return a.h(0)
if(a instanceof A.am)return a.aU(!0)
s=$.f5()
for(r=0;r<1;++r){q=s[r].c7(a)
if(q!=null)return q}return"Instance of '"+A.bI(a)+"'"},
fy(a){var s=a.$thrownJsError
if(s==null)return null
return A.T(s)},
fz(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.o(a,s)
a.$thrownJsError=s
s.stack=b.h(0)}},
a(a,b){if(a==null)J.e0(a)
throw A.c(A.ie(a,b))},
ie(a,b){var s,r="index",q=null
if(!A.ey(b))return new A.G(!0,b,r,q)
s=J.e0(a)
if(b<0||b>=s)return A.dy(b,s,a,q,r)
return new A.aj(q,q,!0,b,r,"Value not in range")},
dR(a){return new A.G(!0,a,null,null)},
c(a){return A.o(a,new Error())},
o(a,b){var s
if(a==null)a=new A.J()
b.dartException=a
s=A.iy
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
iy(){return J.bh(this.dartException)},
a7(a,b){throw A.o(a,b==null?new Error():b)},
c4(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.a7(A.hu(a,b,c),s)},
hu(a,b,c){var s,r,q,p,o,n,m,l,k
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
dZ(a){throw A.c(A.bm(a))},
K(a){var s,r,q,p,o,n
a=A.iv(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.r([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.cK(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
cL(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
eg(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
dB(a,b){var s=b==null,r=s?null:b.method
return new A.bw(a,r,s?null:b.receiver)},
a8(a){if(a==null)return new A.cf(a)
if(a instanceof A.ax)return A.U(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.U(a,a.dartException)
return A.i3(a)},
U(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
i3(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.a.bL(r,16)&8191)===10)switch(q){case 438:return A.U(a,A.dB(A.m(s)+" (Error "+q+")",null))
case 445:case 5007:A.m(s)
return A.U(a,new A.aM())}}if(a instanceof TypeError){p=$.eV()
o=$.eW()
n=$.eX()
m=$.eY()
l=$.f0()
k=$.f1()
j=$.f_()
$.eZ()
i=$.f3()
h=$.f2()
g=p.B(s)
if(g!=null)return A.U(a,A.dB(s,g))
else{g=o.B(s)
if(g!=null){g.method="call"
return A.U(a,A.dB(s,g))}else if(n.B(s)!=null||m.B(s)!=null||l.B(s)!=null||k.B(s)!=null||j.B(s)!=null||m.B(s)!=null||i.B(s)!=null||h.B(s)!=null)return A.U(a,new A.aM())}return A.U(a,new A.bN(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.aP()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.U(a,new A.G(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.aP()
return a},
T(a){var s
if(a instanceof A.ax)return a.b
if(a==null)return new A.b5(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.b5(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
dY(a){if(a==null)return J.H(a)
if(typeof a=="object")return A.ai(a)
return J.H(a)},
ib(a){if(typeof a=="number")return B.m.gk(a)
if(a instanceof A.c0)return A.ai(a)
if(a instanceof A.am)return a.gk(a)
return A.dY(a)},
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
if(m==null)o[q]=b.Z(q,p)
else m.b=p}else if(typeof q=="number"&&(q&0x3fffffff)===q){l=b.c
if(l==null){n=Object.create(null)
n["<non-identifier-key>"]=n
delete n["<non-identifier-key>"]
b.c=n
l=n}m=l[q]
if(m==null)l[q]=b.Z(q,p)
else m.b=p}else{k=b.d
if(k==null){n=Object.create(null)
n["<non-identifier-key>"]=n
delete n["<non-identifier-key>"]
b.d=n
k=n}j=b.aw(q)
i=k[j]
if(i==null)k[j]=[b.Z(q,p)]
else{r=b.az(i,q)
if(r>=0)i[r].b=p
else i.push(b.Z(q,p))}}}return b},
hD(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.c(new A.cW("Unsupported number of arguments for wrapped closure"))},
c2(a,b){var s=a.$identity
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.hD)},
fh(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.co().constructor.prototype):Object.create(new A.at(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.e7(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.fd(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.e7(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
fd(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.c("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.fb)}throw A.c("Error in functionType of tearoff")},
fe(a,b,c,d){var s=A.e6
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
e7(a,b,c,d){if(c)return A.fg(a,b,d)
return A.fe(b.length,d,a,b)},
ff(a,b,c,d){var s=A.e6,r=A.fc
switch(b?-1:a){case 0:throw A.c(new A.bJ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
fg(a,b,c){var s,r
if($.e4==null)$.e4=A.e3("interceptor")
if($.e5==null)$.e5=A.e3("receiver")
s=b.length
r=A.ff(s,c,a,b)
return r},
dT(a){return A.fh(a)},
fb(a,b){return A.bc(v.typeUniverse,A.bg(a.a),b)},
e6(a){return a.a},
fc(a){return a.b},
e3(a){var s,r,q,p=new A.at("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.c(A.a9("Field name "+a+" not found.",null))},
dm(a){return v.getIsolateTag(a)},
is(a){var s,r,q,p,o,n=$.eL.$1(a),m=$.dl[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.dr[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.eE.$2(a,n)
if(q!=null){m=$.dl[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.dr[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.ds(s)
$.dl[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.dr[n]=s
return s}if(p==="-"){o=A.ds(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.eN(a,s)
if(p==="*")throw A.c(A.eh(n))
if(v.leafTags[n]===true){o=A.ds(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.eN(a,s)},
eN(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.dX(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
ds(a){return J.dX(a,!1,null,!!a.$iv)},
iu(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.ds(s)
else return J.dX(s,c,null,null)},
io(){if(!0===$.dV)return
$.dV=!0
A.ip()},
ip(){var s,r,q,p,o,n,m,l
$.dl=Object.create(null)
$.dr=Object.create(null)
A.im()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.eO.$1(o)
if(n!=null){m=A.iu(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
im(){var s,r,q,p,o,n,m=B.q()
m=A.aq(B.r,A.aq(B.t,A.aq(B.k,A.aq(B.k,A.aq(B.u,A.aq(B.v,A.aq(B.w(B.j),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.eL=new A.dn(p)
$.eE=new A.dp(o)
$.eO=new A.dq(n)},
aq(a,b){return a(b)||b},
id(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
iv(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
x:function x(a,b){this.a=a
this.b=b},
bn:function bn(){},
aa:function aa(a,b){this.a=a
this.$ti=b},
aN:function aN(){},
cK:function cK(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aM:function aM(){},
bw:function bw(a,b,c){this.a=a
this.b=b
this.c=c},
bN:function bN(a){this.a=a},
cf:function cf(a){this.a=a},
ax:function ax(a,b){this.a=a
this.b=b},
b5:function b5(a){this.a=a
this.b=null},
W:function W(){},
c5:function c5(){},
c6:function c6(){},
ct:function ct(){},
co:function co(){},
at:function at(a,b){this.a=a
this.b=b},
bJ:function bJ(a){this.a=a},
aF:function aF(){},
cc:function cc(a,b){this.a=a
this.b=b
this.c=null},
aE:function aE(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dn:function dn(a){this.a=a},
dp:function dp(a){this.a=a},
dq:function dq(a){this.a=a},
am:function am(){},
bY:function bY(){},
af:function af(){},
aK:function aK(){},
bx:function bx(){},
ag:function ag(){},
aI:function aI(){},
aJ:function aJ(){},
by:function by(){},
bz:function bz(){},
bA:function bA(){},
bB:function bB(){},
bC:function bC(){},
bD:function bD(){},
bE:function bE(){},
aL:function aL(){},
bF:function bF(){},
b_:function b_(){},
b0:function b0(){},
b1:function b1(){},
b2:function b2(){},
dE(a,b){var s=b.c
return s==null?b.c=A.ba(a,"I",[b.x]):s},
ed(a){var s=a.w
if(s===6||s===7)return A.ed(a.x)
return s===11||s===12},
fD(a){return a.as},
c3(a){return A.dd(v.typeUniverse,a,!1)},
a3(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.a3(a1,s,a3,a4)
if(r===s)return a2
return A.ep(a1,r,!0)
case 7:s=a2.x
r=A.a3(a1,s,a3,a4)
if(r===s)return a2
return A.eo(a1,r,!0)
case 8:q=a2.y
p=A.ap(a1,q,a3,a4)
if(p===q)return a2
return A.ba(a1,a2.x,p)
case 9:o=a2.x
n=A.a3(a1,o,a3,a4)
m=a2.y
l=A.ap(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.dJ(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.ap(a1,j,a3,a4)
if(i===j)return a2
return A.eq(a1,k,i)
case 11:h=a2.x
g=A.a3(a1,h,a3,a4)
f=a2.y
e=A.i0(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.en(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.ap(a1,d,a3,a4)
o=a2.x
n=A.a3(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.dK(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.c(A.bk("Attempted to substitute unexpected RTI kind "+a0))}},
ap(a,b,c,d){var s,r,q,p,o=b.length,n=A.de(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.a3(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
i1(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.de(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.a3(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
i0(a,b,c,d){var s,r=b.a,q=A.ap(a,r,c,d),p=b.b,o=A.ap(a,p,c,d),n=b.c,m=A.i1(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.bW()
s.a=q
s.b=o
s.c=m
return s},
r(a,b){a[v.arrayRti]=b
return a},
eH(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.il(s)
return a.$S()}return null},
iq(a,b){var s
if(A.ed(b))if(a instanceof A.W){s=A.eH(a)
if(s!=null)return s}return A.bg(a)},
bg(a){if(a instanceof A.d)return A.S(a)
if(Array.isArray(a))return A.dL(a)
return A.dM(J.a5(a))},
dL(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
S(a){var s=a.$ti
return s!=null?s:A.dM(a)},
dM(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.hB(a,s)},
hB(a,b){var s=a instanceof A.W?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.h7(v.typeUniverse,s.name)
b.$ccache=r
return r},
il(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.dd(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
eK(a){return A.a4(A.S(a))},
dQ(a){var s
if(a instanceof A.am)return A.ig(a.$r,a.aN())
s=a instanceof A.W?A.eH(a):null
if(s!=null)return s
if(t.R.b(a))return J.f9(a).a
if(Array.isArray(a))return A.dL(a)
return A.bg(a)},
a4(a){var s=a.r
return s==null?a.r=new A.c0(a):s},
ig(a,b){var s,r,q=b,p=q.length
if(p===0)return t.F
if(0>=p)return A.a(q,0)
s=A.bc(v.typeUniverse,A.dQ(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.a(q,r)
s=A.es(v.typeUniverse,s,A.dQ(q[r]))}return A.bc(v.typeUniverse,s,a)},
F(a){return A.a4(A.dd(v.typeUniverse,a,!1))},
hA(a){var s=this
s.b=A.hZ(s)
return s.b(a)},
hZ(a){var s,r,q,p
if(a===t.K)return A.hJ
if(A.a6(a))return A.hN
s=a.w
if(s===6)return A.hy
if(s===1)return A.eA
if(s===7)return A.hE
r=A.hY(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.a6)){a.f="$i"+q
if(q==="f")return A.hH
if(a===t.m)return A.hG
return A.hM}}else if(s===10){p=A.id(a.x,a.y)
return p==null?A.eA:p}return A.hw},
hY(a){if(a.w===8){if(a===t.S)return A.ey
if(a===t.i||a===t.n)return A.hI
if(a===t.N)return A.hL
if(a===t.y)return A.dN}return null},
hz(a){var s=this,r=A.hv
if(A.a6(s))r=A.hm
else if(s===t.K)r=A.hj
else if(A.ar(s)){r=A.hx
if(s===t.W)r=A.hf
else if(s===t.M)r=A.hl
else if(s===t.u)r=A.hb
else if(s===t.Y)r=A.hi
else if(s===t.I)r=A.hd
else if(s===t.B)r=A.hg}else if(s===t.S)r=A.he
else if(s===t.N)r=A.hk
else if(s===t.y)r=A.ha
else if(s===t.n)r=A.hh
else if(s===t.i)r=A.hc
else if(s===t.m)r=A.L
s.a=r
return s.a(a)},
hw(a){var s=this
if(a==null)return A.ar(s)
return A.ir(v.typeUniverse,A.iq(a,s),s)},
hy(a){if(a==null)return!0
return this.x.b(a)},
hM(a){var s,r=this
if(a==null)return A.ar(r)
s=r.f
if(a instanceof A.d)return!!a[s]
return!!J.a5(a)[s]},
hH(a){var s,r=this
if(a==null)return A.ar(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.d)return!!a[s]
return!!J.a5(a)[s]},
hG(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.d)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
ez(a){if(typeof a=="object"){if(a instanceof A.d)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
hv(a){var s=this
if(a==null){if(A.ar(s))return a}else if(s.b(a))return a
throw A.o(A.ev(a,s),new Error())},
hx(a){var s=this
if(a==null||s.b(a))return a
throw A.o(A.ev(a,s),new Error())},
ev(a,b){return new A.b8("TypeError: "+A.ej(a,A.y(b,null)))},
ej(a,b){return A.c7(a)+": type '"+A.y(A.dQ(a),null)+"' is not a subtype of type '"+b+"'"},
C(a,b){return new A.b8("TypeError: "+A.ej(a,b))},
hE(a){var s=this
return s.x.b(a)||A.dE(v.typeUniverse,s).b(a)},
hJ(a){return a!=null},
hj(a){if(a!=null)return a
throw A.o(A.C(a,"Object"),new Error())},
hN(a){return!0},
hm(a){return a},
eA(a){return!1},
dN(a){return!0===a||!1===a},
ha(a){if(!0===a)return!0
if(!1===a)return!1
throw A.o(A.C(a,"bool"),new Error())},
hb(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.o(A.C(a,"bool?"),new Error())},
hc(a){if(typeof a=="number")return a
throw A.o(A.C(a,"double"),new Error())},
hd(a){if(typeof a=="number")return a
if(a==null)return a
throw A.o(A.C(a,"double?"),new Error())},
ey(a){return typeof a=="number"&&Math.floor(a)===a},
he(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.o(A.C(a,"int"),new Error())},
hf(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.o(A.C(a,"int?"),new Error())},
hI(a){return typeof a=="number"},
hh(a){if(typeof a=="number")return a
throw A.o(A.C(a,"num"),new Error())},
hi(a){if(typeof a=="number")return a
if(a==null)return a
throw A.o(A.C(a,"num?"),new Error())},
hL(a){return typeof a=="string"},
hk(a){if(typeof a=="string")return a
throw A.o(A.C(a,"String"),new Error())},
hl(a){if(typeof a=="string")return a
if(a==null)return a
throw A.o(A.C(a,"String?"),new Error())},
L(a){if(A.ez(a))return a
throw A.o(A.C(a,"JSObject"),new Error())},
hg(a){if(a==null)return a
if(A.ez(a))return a
throw A.o(A.C(a,"JSObject?"),new Error())},
eB(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.y(a[q],b)
return s},
hU(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.eB(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.y(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
ew(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.r([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)a4.push("T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.a(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.y(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.y(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.y(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.y(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.y(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
y(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.y(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.y(a.x,b)+">"
if(l===8){p=A.i2(a.x)
o=a.y
return o.length>0?p+("<"+A.eB(o,b)+">"):p}if(l===10)return A.hU(a,b)
if(l===11)return A.ew(a,b,null)
if(l===12)return A.ew(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.a(b,n)
return b[n]}return"?"},
i2(a){var s=A.eQ(a)
if(s!=null)return s
return"minified:"+a},
h8(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
h7(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.dd(a,b,!1)
else if(typeof m=="number"){s=m
r=A.bb(a,5,"#")
q=A.de(s)
for(p=0;p<s;++p)q[p]=r
o=A.ba(a,b,q)
n[b]=o
return o}else return m},
h6(a,b){return A.et(a.tR,b)},
h5(a,b){return A.et(a.eT,b)},
dd(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.er(a,null,b,!1)
r.set(b,s)
return s},
bc(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.er(a,b,c,!0)
q.set(c,r)
return r},
es(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.dJ(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
er(a,b,c,d){return A.fX(A.fR(a,b,c,d))},
R(a,b){b.a=A.hz
b.b=A.hA
return b},
bb(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.D(null,null)
s.w=b
s.as=c
r=A.R(a,s)
a.eC.set(c,r)
return r},
ep(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.h3(a,b,r,c)
a.eC.set(r,s)
return s},
h3(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.a6(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.ar(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.D(null,null)
q.w=6
q.x=b
q.as=c
return A.R(a,q)},
eo(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.h1(a,b,r,c)
a.eC.set(r,s)
return s},
h1(a,b,c,d){var s,r
if(d){s=b.w
if(A.a6(b)||b===t.K)return b
else if(s===1)return A.ba(a,"I",[b])
else if(b===t.P||b===t.T)return t.O}r=new A.D(null,null)
r.w=7
r.x=b
r.as=c
return A.R(a,r)},
h4(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.D(null,null)
s.w=13
s.x=b
s.as=q
r=A.R(a,s)
a.eC.set(q,r)
return r},
b9(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
h0(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
ba(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.b9(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.D(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.R(a,r)
a.eC.set(p,q)
return q},
dJ(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.b9(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.D(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.R(a,o)
a.eC.set(q,n)
return n},
eq(a,b,c){var s,r,q="+"+(b+"("+A.b9(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.D(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.R(a,s)
a.eC.set(q,r)
return r},
en(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.b9(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.b9(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.h0(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.D(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.R(a,p)
a.eC.set(r,o)
return o},
dK(a,b,c,d){var s,r=b.as+("<"+A.b9(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.h2(a,b,c,r,d)
a.eC.set(r,s)
return s},
h2(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.de(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.a3(a,b,r,0)
m=A.ap(a,c,r,0)
return A.dK(a,n,m,c!==m)}}l=new A.D(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.R(a,l)},
fR(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
fX(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.fT(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.el(a,r,l,k,!1)
else if(q===46)r=A.el(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.a2(a.u,a.e,k.pop()))
break
case 94:k.push(A.h4(a.u,k.pop()))
break
case 35:k.push(A.bb(a.u,5,"#"))
break
case 64:k.push(A.bb(a.u,2,"@"))
break
case 126:k.push(A.bb(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.fV(a,k)
break
case 38:A.fU(a,k)
break
case 63:p=a.u
k.push(A.ep(p,A.a2(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.eo(p,A.a2(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.fS(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.em(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.fY(a.u,a.e,o)
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
return A.a2(a.u,a.e,m)},
fT(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
el(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.h8(s,o.x)[p]
if(n==null)A.a7('No "'+p+'" in "'+A.fD(o)+'"')
d.push(A.bc(s,o,n))}else d.push(p)
return m},
fV(a,b){var s,r=a.u,q=A.ek(a,b),p=b.pop()
if(typeof p=="string")b.push(A.ba(r,p,q))
else{s=A.a2(r,a.e,p)
switch(s.w){case 11:b.push(A.dK(r,s,q,a.n))
break
default:b.push(A.dJ(r,s,q))
break}}},
fS(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.ek(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.a2(p,a.e,o)
q=new A.bW()
q.a=s
q.b=n
q.c=m
b.push(A.en(p,r,q))
return
case-4:b.push(A.eq(p,b.pop(),s))
return
default:throw A.c(A.bk("Unexpected state under `()`: "+A.m(o)))}},
fU(a,b){var s=b.pop()
if(0===s){b.push(A.bb(a.u,1,"0&"))
return}if(1===s){b.push(A.bb(a.u,4,"1&"))
return}throw A.c(A.bk("Unexpected extended operation "+A.m(s)))},
ek(a,b){var s=b.splice(a.p)
A.em(a.u,a.e,s)
a.p=b.pop()
return s},
a2(a,b,c){if(typeof c=="string")return A.ba(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.fW(a,b,c)}else return c},
em(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.a2(a,b,c[s])},
fY(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.a2(a,b,c[s])},
fW(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.c(A.bk("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.c(A.bk("Bad index "+c+" for "+b.h(0)))},
ir(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.q(a,b,null,c,null)
r.set(c,s)}return s},
q(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.a6(d))return!0
s=b.w
if(s===4)return!0
if(A.a6(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.q(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.q(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.q(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.q(a,b.x,c,d,e))return!1
return A.q(a,A.dE(a,b),c,d,e)}if(s===6)return A.q(a,p,c,d,e)&&A.q(a,b.x,c,d,e)
if(q===7){if(A.q(a,b,c,d.x,e))return!0
return A.q(a,b,c,A.dE(a,d),e)}if(q===6)return A.q(a,b,c,p,e)||A.q(a,b,c,d.x,e)
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
if(!A.q(a,j,c,i,e)||!A.q(a,i,e,j,c))return!1}return A.ex(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.ex(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.hF(a,b,c,d,e)}if(o&&q===10)return A.hK(a,b,c,d,e)
return!1},
ex(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.q(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.q(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.q(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.q(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.q(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
hF(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.bc(a,b,r[o])
return A.eu(a,p,null,c,d.y,e)}return A.eu(a,b.y,null,c,d.y,e)},
eu(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.q(a,b[s],d,e[s],f))return!1
return!0},
hK(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.q(a,r[s],c,q[s],e))return!1
return!0},
ar(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.a6(a))if(s!==6)r=s===7&&A.ar(a.x)
return r},
a6(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
et(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
de(a){return a>0?new Array(a):v.typeUniverse.sEA},
D:function D(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
bW:function bW(){this.c=this.b=this.a=null},
c0:function c0(a){this.a=a},
bV:function bV(){},
b8:function b8(a){this.a=a},
fK(){var s,r,q
if(self.scheduleImmediate!=null)return A.i5()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.c2(new A.cS(s),1)).observe(r,{childList:true})
return new A.cR(s,r,q)}else if(self.setImmediate!=null)return A.i6()
return A.i7()},
fL(a){self.scheduleImmediate(A.c2(new A.cT(a),0))},
fM(a){self.setImmediate(A.c2(new A.cU(a),0))},
fN(a){A.fZ(0,a)},
fZ(a,b){var s=new A.b7(!0)
s.be(a,b)
return s},
h_(a,b){var s=new A.b7(!1)
s.bf(a,b)
return s},
hP(a){return new A.bO(new A.l($.h,a.i("l<0>")),a.i("bO<0>"))},
hp(a,b){a.$2(0,null)
b.b=!0
return b.a},
df(a,b){A.hq(a,b)},
ho(a,b){var s,r=a==null?b.$ti.c.a(a):a
if(!b.b)b.a.a9(r)
else{s=b.a
if(b.$ti.i("I<1>").b(r))s.aJ(r)
else s.aL(r)}},
hn(a,b){var s=A.a8(a),r=A.T(a),q=b.a
if(b.b)q.N(new A.A(s,r))
else q.aI(new A.A(s,r))},
hq(a,b){var s,r,q=new A.dg(b),p=new A.dh(b)
if(a instanceof A.l)a.aT(q,p,t.z)
else{s=t.z
if(a instanceof A.l)a.b5(q,p,s)
else{r=new A.l($.h,t.c)
r.a=8
r.c=a
r.aT(q,p,s)}}},
i4(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(q){e=q
d=c}}}}(a,1),r=$.h
return r.am(r,new A.dk(s))},
dx(a){var s
if(t.Q.b(a)){s=a.gY()
if(s!=null)return s}return B.z},
hC(a,b){var s=$.h
if(s===B.c)return null
s.bq(s,a,b)
return null},
d_(a,b,c){var s,r,q,p,o={},n=o.a=a
while(s=n.a,(s&4)!==0){n=n.c
o.a=n}if(n===b){s=A.ee()
b.aI(new A.A(new A.G(!0,n,null,"Cannot complete a future with itself"),s))
return}r=b.a&1
s=n.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=n
n.aR(q)
return}if(!c)if(b.c==null)n=(s&16)===0||r!==0
else n=!1
else n=!0
if(n){q=b.R()
b.a0(o.a)
A.a1(b,q)
return}b.a^=2
p=b.b
p.T(p,new A.d0(o,b))},
a1(a,b){var s,r,q,p,o,n,m,l,k,j,i,h={},g=h.a=a
for(;;){s={}
r=g.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){r=g.c
g=g.b
g.O(g,r.a,r.b)}return}s.a=b
o=b.a
for(g=b;o!=null;g=o,o=n){g.a=null
A.a1(h.a,g)
s.a=o
n=o.a}m=h.a.c
s.b=p
s.c=m
if(q){r=g.c
r=(r&1)!==0||(r&15)===8}else r=!0
if(r){l=g.b.b
k=$.h
if(k!==l)$.h=l
else k=null
g=g.c
if((g&15)===8)new A.d4(s,h,p).$0()
else if(q){if((g&1)!==0)new A.d3(s,m).$0()}else if((g&2)!==0)new A.d2(h,s).$0()
if(k!=null)$.h=k
g=s.c
if(g instanceof A.l){r=s.a.$ti
r=r.i("I<2>").b(g)||!r.y[1].b(g)}else r=!1
if(r){j=s.a.b
if((g.a&24)!==0){i=j.c
j.c=null
b=j.a2(i)
j.a=g.a&30|j.a&1
j.c=g.c
h.a=g
continue}else A.d_(g,j,!0)
return}}j=s.a.b
i=j.c
j.c=null
b=j.a2(i)
g=s.b
r=s.c
if(!g){j.a=8
j.c=r}else{j.a=j.a&1|16
j.c=r}h.a=j
g=j}},
hV(a,b){if(t.C.b(a))return b.am(b,a)
if(t.v.b(a))return b.J(b,a)
throw A.c(A.e2(a,"onError",u.c))},
hQ(){var s,r
for(s=$.ao;s!=null;s=$.ao){$.bf=null
r=s.b
$.ao=r
if(r==null)$.be=null
s.a.$0()}},
i_(){$.dO=!0
try{A.hQ()}finally{$.bf=null
$.dO=!1
if($.ao!=null)$.e_().$1(A.eF())}},
eD(a){var s=new A.bP(a),r=$.be
if(r==null){$.ao=$.be=s
if(!$.dO)$.e_().$1(A.eF())}else $.be=r.b=s},
hX(a){var s,r,q,p=$.ao
if(p==null){A.eD(a)
$.bf=$.be
return}s=new A.bP(a)
r=$.bf
if(r==null){s.b=p
$.ao=$.bf=s}else{q=r.b
s.b=q
$.bf=r.b=s
if(q==null)$.be=s}},
eP(a){var s=$.h
if(B.c===s){A.dP(B.c,a)
return}A.dP(s,s.P(s,a))
return},
iI(a){A.dS(a,"stream",t.K)
return new A.bZ()},
dG(a){return new A.aU(null,null,a.i("aU<0>"))},
eC(a){return},
ei(a,b){return a.J(a,b==null?A.i8():b)},
fO(a,b){if(b==null)b=A.ia()
if(t.k.b(b))return a.am(a,b)
if(t.d.b(b))return a.J(a,b)
throw A.c(A.a9("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
hR(a){},
hT(a,b){var s=$.h
s.O(s,a,b)},
hS(){},
ht(a,b,c){var s,r,q,p=a.a6()
if(p!==$.dv()){s=new A.di(b,c)
r=p.$ti
q=$.h
if(q!==B.c)s=q.P(q,s)
p.a_(new A.Q(new A.l(q,r),8,s,null,r.i("Q<1,1>")))}else b.ac(c)},
fG(a,b){var s=$.h
if(s===B.c)return s.aM(s,a,b)
return s.aM(s,a,s.bP(b,t.p))},
hW(a,b){A.hX(new A.dj(a,b))},
dP(a,b){if(B.c!==a)b=a.bN(b,t.H)
A.eD(b)},
cS:function cS(a){this.a=a},
cR:function cR(a,b,c){this.a=a
this.b=b
this.c=c},
cT:function cT(a){this.a=a},
cU:function cU(a){this.a=a},
b7:function b7(a){this.a=a
this.b=null
this.c=0},
dc:function dc(a,b){this.a=a
this.b=b},
db:function db(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bO:function bO(a,b){this.a=a
this.b=!1
this.$ti=b},
dg:function dg(a){this.a=a},
dh:function dh(a){this.a=a},
dk:function dk(a){this.a=a},
A:function A(a,b){this.a=a
this.b=b},
B:function B(a,b){this.a=a
this.$ti=b},
aV:function aV(a,b,c,d,e){var _=this
_.ay=0
_.CW=_.ch=null
_.w=a
_.a=b
_.d=c
_.e=d
_.r=_.f=null
_.$ti=e},
bQ:function bQ(){},
aU:function aU(a,b,c){var _=this
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
l:function l(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
cX:function cX(a,b){this.a=a
this.b=b},
d1:function d1(a,b){this.a=a
this.b=b},
d0:function d0(a,b){this.a=a
this.b=b},
cZ:function cZ(a,b){this.a=a
this.b=b},
cY:function cY(a,b){this.a=a
this.b=b},
d4:function d4(a,b,c){this.a=a
this.b=b
this.c=c},
d5:function d5(a,b){this.a=a
this.b=b},
d6:function d6(a){this.a=a},
d3:function d3(a,b){this.a=a
this.b=b},
d2:function d2(a,b){this.a=a
this.b=b},
bP:function bP(a){this.a=a
this.b=null},
ak:function ak(){},
cr:function cr(a,b){this.a=a
this.b=b},
cs:function cs(a,b){this.a=a
this.b=b},
cp:function cp(a){this.a=a},
cq:function cq(a,b,c){this.a=a
this.b=b
this.c=c},
aW:function aW(){},
bS:function bS(){},
bR:function bR(){},
b6:function b6(){},
bU:function bU(){},
bT:function bT(a){this.b=a
this.a=null},
bX:function bX(){this.a=0
this.c=this.b=null},
da:function da(a,b){this.a=a
this.b=b},
aX:function aX(a){this.a=1
this.b=a
this.c=null},
bZ:function bZ(){},
di:function di(a,b){this.a=a
this.b=b},
cN:function cN(){},
cO:function cO(a,b,c){this.a=a
this.b=b
this.c=c},
cQ:function cQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cP:function cP(a,b,c){this.a=a
this.b=b
this.c=c},
dj:function dj(a,b){this.a=a
this.b=b},
fw(a){return new A.aZ(a.i("aZ<0>"))},
dI(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
fQ(a,b,c){var s=new A.al(a,b,c.i("al<0>"))
s.c=a.e
return s},
dD(a){var s,r
if(A.dW(a))return"{...}"
s=new A.bL("")
try{r={}
$.z.push(a)
s.a+="{"
r.a=!0
a.av(0,new A.cd(r,s))
s.a+="}"}finally{if(0>=$.z.length)return A.a($.z,-1)
$.z.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
aZ:function aZ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
d9:function d9(a){this.a=a
this.c=this.b=null},
al:function al(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
k:function k(){},
aH:function aH(){},
cd:function cd(a,b){this.a=a
this.b=b},
aO:function aO(){},
b4:function b4(){},
h9(){if(typeof WeakRef=="function")return WeakRef
var s=function LeakRef(a){this._=a}
s.prototype={
deref(){return this._}}
return s},
fi(a,b){a=A.o(a,new Error())
a.stack=b.h(0)
throw a},
dC(a,b,c){var s,r,q
if(a>4294967295)A.a7(A.fB(a,0,4294967295,"length",null))
s=A.r(new Array(a),c.i("n<0>"))
s.$flags=1
r=s
if(a!==0)for(s=r.length,q=0;q<s;++q)r[q]=b
return r},
fx(a,b,c){var s,r,q=A.r([],c.i("n<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.dZ)(a),++r)q.push(a[r])
q.$flags=1
return q},
ef(a,b,c){var s=J.f8(b)
if(!s.n())return a
if(c.length===0){do a+=A.m(s.gu())
while(s.n())}else{a+=A.m(s.gu())
while(s.n())a=a+c+A.m(s.gu())}return a},
ee(){return A.T(new Error())},
c7(a){if(typeof a=="number"||A.dN(a)||a==null)return J.bh(a)
if(typeof a=="string")return JSON.stringify(a)
return A.ec(a)},
fj(a,b){A.dS(a,"error",t.K)
A.dS(b,"stackTrace",t.l)
A.fi(a,b)},
bk(a){return new A.bj(a)},
a9(a,b){return new A.G(!1,null,b,a)},
e2(a,b,c){return new A.G(!0,a,b,c)},
fA(a){var s=null
return new A.aj(s,s,!1,s,s,a)},
fB(a,b,c,d,e){return new A.aj(b,c,!0,a,d,"Invalid value")},
fC(a,b){return a},
dy(a,b,c,d,e){return new A.bq(b,!0,a,e,"Index out of range")},
aT(a){return new A.aS(a)},
eh(a){return new A.bM(a)},
bm(a){return new A.bl(a)},
bs(a,b){if(a<=0)return new A.aw(b.i("aw<0>"))
if(!b.i("0(b)").b(A.eI()))throw A.c(A.a9("Generator must be supplied or element type must allow integers","generator"))
return new A.aY(a,A.eI(),b.i("aY<0>"))},
fr(a,b,c){var s,r
if(A.dW(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.r([],t.s)
$.z.push(a)
try{A.hO(a,s)}finally{if(0>=$.z.length)return A.a($.z,-1)
$.z.pop()}r=A.ef(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
dz(a,b,c){var s,r
if(A.dW(a))return b+"..."+c
s=new A.bL(b)
$.z.push(a)
try{r=s
r.a=A.ef(r.a,a,", ")}finally{if(0>=$.z.length)return A.a($.z,-1)
$.z.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
fP(a){return a},
hO(a,b){var s,r,q,p,o,n,m,l=a.gv(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.n())return
s=A.m(l.gu())
b.push(s)
k+=s.length+2;++j}if(!l.n()){if(j<=5)return
if(0>=b.length)return A.a(b,-1)
r=b.pop()
if(0>=b.length)return A.a(b,-1)
q=b.pop()}else{p=l.gu();++j
if(!l.n()){if(j<=4){b.push(A.m(p))
return}r=A.m(p)
if(0>=b.length)return A.a(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gu();++j
for(;l.n();p=o,o=n){n=l.gu();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.a(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=A.m(p)
r=A.m(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.a(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
cg(a,b,c,d){var s
if(B.e===c){s=B.a.gk(a)
b=J.H(b)
return A.dH(A.P(A.P($.dw(),s),b))}if(B.e===d){s=B.a.gk(a)
b=J.H(b)
c=J.H(c)
return A.dH(A.P(A.P(A.P($.dw(),s),b),c))}s=B.a.gk(a)
b=J.H(b)
c=J.H(c)
d=J.H(d)
d=A.dH(A.P(A.P(A.P(A.P($.dw(),s),b),c),d))
return d},
c1:function c1(a){this.a=a},
bo:function bo(a){this.a=a},
cV:function cV(){},
j:function j(){},
bj:function bj(a){this.a=a},
J:function J(){},
G:function G(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aj:function aj(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bq:function bq(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
aS:function aS(a){this.a=a},
bM:function bM(a){this.a=a},
a_:function a_(a){this.a=a},
bl:function bl(a){this.a=a},
bG:function bG(){},
aP:function aP(){},
cW:function cW(a){this.a=a},
Y:function Y(){},
aY:function aY(a,b,c){this.a=a
this.b=b
this.$ti=c},
u:function u(){},
d:function d(){},
c_:function c_(){},
bL:function bL(a){this.a=a},
d7:function d7(){},
V:function V(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cv(a){return new A.cu(a)},
ch:function ch(){},
cu:function cu(a){this.a=a},
N:function N(a){this.a=a},
ce:function ce(a,b){this.a=a
this.b=b},
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
fE(a,b,c,d,e,f,g,h){var s,r,q,p=A.e8(),o=h*g
p.width=o
s=d*f
p.height=s
r=A.e8()
r.width=o
r.height=s
s=A.r([],t.x)
for(o=A.bs(d,t.z),o=o.gv(o);o.n();){o.gu()
q=B.a.G(h,32)
s.push(new Uint32Array(q+1))}p=new A.bK(!0,d,h,g,f,c,a,p,r,s)
p.bc(a,b,c,d,!0,f,g,h)
return p},
dF(a){return new A.x(B.a.G(a,32),31-B.a.l(a,32))},
bK:function bK(a,b,c,d,e,f,g,h,i,j){var _=this
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
cj:function cj(a){this.a=a},
ck:function ck(a){this.a=a},
cl:function cl(a){this.a=a},
cm:function cm(a){this.a=a},
ci:function ci(){},
fF(a,b,c,d,e){var s,r,q,p,o,n="white",m=null,l=A.dG(t.N),k=A.dG(t.V),j=A.dG(t.r),i=v.G,h=i.document.getElementById(b)
if(h==null)h=A.L(h)
i=i.document.getElementById(b)
if(i==null)i=A.L(i)
i=A.fE("black",i,n,d*(8+c),!0,2,2,a*8)
s=A.r([],t.J)
for(r=t.U,q=0;q<d;++q){p=A.r([],r)
for(o=0;o<a;++o)p.push(new A.V(q,o," ",n))
s.push(p)}l=new A.aR(d,a,c,h,i,new A.ah(d,a),new A.ah(d,a),new A.ah(d,a),l,k,j,B.d,s,A.fw(t.o),B.dL)
l.bd("black",a,b,n,m,!0,2,2,c,d,!0,m,e,m,m,m,m)
return l},
aQ:function aQ(a,b){this.a=a
this.b=b},
aR:function aR(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
cI:function cI(a){this.a=a},
cH:function cH(){},
cG:function cG(a){this.a=a},
cw:function cw(a){this.a=a},
cx:function cx(a){this.a=a},
cy:function cy(a,b,c){this.a=a
this.b=b
this.c=c},
cz:function cz(a,b,c){this.a=a
this.b=b
this.c=c},
cA:function cA(a,b){this.a=a
this.b=b},
cB:function cB(a,b){this.a=a
this.b=b},
cC:function cC(a,b){this.a=a
this.b=b},
cD:function cD(a,b){this.a=a
this.b=b},
cE:function cE(a,b){this.a=a
this.b=b},
cF:function cF(a){this.a=a},
fk(a,b){var s,r,q,p,o,n=A.r([],t.G)
for(s=t.z,r=A.bs(a,s),r=r.gv(r),q=t.q;r.n();){r.gu()
p=A.r([],q)
for(o=A.bs(b,s),o=o.gv(o);o.n();){o.gu()
p.push(new A.au())}n.push(p)}return new A.c8(n)},
fn(){var s=new A.c9(A.fk(17,35),B.h)
s.bb()
return s},
it(){A.fn().I()},
au:function au(){this.c=this.b=this.a=!1},
c8:function c8(a){this.a=a},
X:function X(a,b){this.a=a
this.b=b},
c9:function c9(a,b){var _=this
_.a=!1
_.b=$
_.c=a
_.d=b},
ca:function ca(a){this.a=a},
eQ(a){return v.mangledGlobalNames[a]},
iw(a){throw A.o(new A.ac("Field '"+a+"' has been assigned during initialization."),new Error())},
p(){throw A.o(A.fv(""),new Error())},
ix(){throw A.o(A.fu(""),new Error())},
bd(a){var s
if(typeof a=="function")throw A.c(A.a9("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.hr,a)
s[$.du()]=a
return s},
an(a){var s
if(typeof a=="function")throw A.c(A.a9("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.hs,a)
s[$.du()]=a
return s},
hr(a){return a.$0()},
hs(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
e8(){return v.G.document.createElement("canvas")}},B={}
var w=[A,J,B]
var $={}
A.dA.prototype={}
J.br.prototype={
C(a,b){return a===b},
gk(a){return A.ai(a)},
h(a){return"Instance of '"+A.bI(a)+"'"},
gp(a){return A.a4(A.dM(this))}}
J.bu.prototype={
h(a){return String(a)},
gk(a){return a?519018:218159},
gp(a){return A.a4(t.y)},
$ie:1}
J.aA.prototype={
C(a,b){return null==b},
h(a){return"null"},
gk(a){return 0},
$ie:1}
J.aC.prototype={$ii:1}
J.O.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.bH.prototype={}
J.a0.prototype={}
J.M.prototype={
h(a){var s=a[$.eS()]
if(s==null)s=a[$.du()]
if(s==null)return this.ba(a)
return"JavaScript function for "+J.bh(s)}}
J.aB.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.aD.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.n.prototype={
aB(a,b){var s,r,q=a.length,p=A.dC(q,"",t.N)
for(s=0;s<a.length;++s){r=A.m(a[s])
if(!(s<q))return A.a(p,s)
p[s]=r}return p.join(b)},
bQ(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw A.c(A.bm(a))}return s},
bR(a,b,c){return this.bQ(a,b,c,t.z)},
gj(a){if(a.length>0)return a[0]
throw A.c(A.e9())},
h(a){return A.dz(a,"[","]")},
gv(a){return new J.bi(a,a.length,A.dL(a).i("bi<1>"))},
gk(a){return A.ai(a)},
gt(a){return a.length},
$if:1}
J.bt.prototype={
c7(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.bI(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.cb.prototype={}
J.bi.prototype={
gu(){var s=this.d
return s==null?this.$ti.c.a(s):s},
n(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.c(A.dZ(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.ab.prototype={
c5(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.c(A.aT(""+a+".toInt()"))},
c2(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.c(A.aT(""+a+".round()"))},
h(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gk(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
l(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
F(a,b){if((a|0)===a)if(b>=1)return a/b|0
return this.aS(a,b)},
G(a,b){return(a|0)===a?a/b|0:this.aS(a,b)},
aS(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.c(A.aT("Result of truncating division is "+A.m(s)+": "+A.m(a)+" ~/ "+b))},
X(a,b){if(b<0)throw A.c(A.dR(b))
return b>31?0:a<<b>>>0},
bK(a,b){return b>31?0:a<<b>>>0},
b9(a,b){var s
if(b<0)throw A.c(A.dR(b))
if(a>0)s=this.ao(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
bL(a,b){var s
if(a>0)s=this.ao(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
D(a,b){if(0>b)throw A.c(A.dR(b))
return this.ao(a,b)},
ao(a,b){return b>31?0:a>>>b},
gp(a){return A.a4(t.n)},
$it:1}
J.az.prototype={
gp(a){return A.a4(t.S)},
$ie:1,
$ib:1}
J.bv.prototype={
gp(a){return A.a4(t.i)},
$ie:1}
J.Z.prototype={
c6(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.a(p,0)
if(p.charCodeAt(0)===133){s=J.fs(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.a(p,r)
q=p.charCodeAt(r)===133?J.ft(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
b7(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.c(B.x)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
c0(a,b,c){var s=b-a.length
if(s<=0)return a
return this.b7(c,s)+a},
h(a){return a},
gk(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gp(a){return A.a4(t.N)},
gt(a){return a.length},
$ie:1,
$iw:1}
A.ac.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.dt.prototype={
$0(){var s=new A.l($.h,t.D)
s.a9(null)
return s},
$S:7}
A.cn.prototype={}
A.av.prototype={}
A.aG.prototype={
gv(a){var s=this
return new A.ad(s,s.gt(s),A.S(s).i("ad<1>"))}}
A.ad.prototype={
gu(){var s=this.d
return s==null?this.$ti.c.a(s):s},
n(){var s,r=this,q=r.a,p=J.eJ(q),o=p.gt(q)
if(r.b!==o)throw A.c(A.bm(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.ar(q,s);++r.c
return!0}}
A.aw.prototype={
gv(a){return B.p},
gt(a){return 0}}
A.bp.prototype={
n(){return!1},
gu(){throw A.c(A.e9())}}
A.ay.prototype={}
A.x.prototype={$r:"+(1,2)",$s:1}
A.bn.prototype={
h(a){return A.dD(this)}}
A.aa.prototype={
a1(){var s=this,r=s.$map
if(r==null){r=new A.aE(s.$ti.i("aE<1,2>"))
A.ih(s.a,r)
s.$map=r}return r},
aq(a){return this.a1().aq(a)},
W(a,b){return this.a1().W(0,b)},
av(a,b){this.a1().av(0,b)},
gt(a){return this.a1().a}}
A.aN.prototype={}
A.cK.prototype={
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
A.aM.prototype={
h(a){return"Null check operator used on a null value"}}
A.bw.prototype={
h(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.bN.prototype={
h(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.cf.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.ax.prototype={}
A.b5.prototype={
h(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iE:1}
A.W.prototype={
h(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.eR(r==null?"unknown":r)+"'"},
gc8(){return this},
$C:"$1",
$R:1,
$D:null}
A.c5.prototype={$C:"$0",$R:0}
A.c6.prototype={$C:"$2",$R:2}
A.ct.prototype={}
A.co.prototype={
h(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.eR(s)+"'"}}
A.at.prototype={
C(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.at))return!1
return this.$_target===b.$_target&&this.a===b.a},
gk(a){return(A.dY(this.a)^A.ai(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.bI(this.a)+"'")}}
A.bJ.prototype={
h(a){return"RuntimeError: "+this.a}}
A.aF.prototype={
gt(a){return this.a},
aq(a){var s=this.b
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
return q}else return this.bW(b)},
bW(a){var s,r,q=this.d
if(q==null)return null
s=this.bt(q,a)
r=this.az(s,a)
if(r<0)return null
return s[r].b},
av(a,b){var s=this,r=s.e,q=s.r
while(r!=null){b.$2(r.a,r.b)
if(q!==s.r)throw A.c(A.bm(s))
r=r.c}},
Z(a,b){var s=this,r=new A.cc(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&1073741823
return r},
aw(a){return J.H(a)&1073741823},
bt(a,b){return a[this.aw(b)]},
az(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.as(a[r].a,b))return r
return-1},
h(a){return A.dD(this)}}
A.cc.prototype={}
A.aE.prototype={
aw(a){return A.ib(a)&1073741823},
az(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.as(a[r].a,b))return r
return-1}}
A.dn.prototype={
$1(a){return this.a(a)},
$S:8}
A.dp.prototype={
$2(a,b){return this.a(a,b)},
$S:9}
A.dq.prototype={
$1(a){return this.a(a)},
$S:10}
A.am.prototype={
h(a){return this.aU(!1)},
aU(a){var s,r,q,p,o,n=this.br(),m=this.aN(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.a(m,q)
o=m[q]
l=a?l+A.ec(o):l+A.m(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
br(){var s,r=this.$s
while($.b3.length<=r)$.b3.push(null)
s=$.b3[r]
if(s==null){s=this.bp()
if(!(r<$.b3.length))return A.a($.b3,r)
$.b3[r]=s}return s},
bp(){var s,r,q,p,o,n=this.$r,m=n.indexOf("("),l=n.substring(1,m),k=n.substring(m),j=k==="()"?0:k.replace(/[^,]/g,"").length+1,i=A.r(new Array(j),t.f)
for(s=0;s<j;++s)i[s]=s
if(l!==""){r=l.split(",")
s=r.length
for(q=i.length,p=j;s>0;){--p;--s
o=r[s]
if(!(p>=0&&p<q))return A.a(i,p)
i[p]=o}}i=A.fx(i,!1,t.K)
i.$flags=3
return i}}
A.bY.prototype={
aN(){return[this.a,this.b]},
C(a,b){if(b==null)return!1
return b instanceof A.bY&&this.$s===b.$s&&J.as(this.a,b.a)&&J.as(this.b,b.b)},
gk(a){return A.cg(this.$s,this.a,this.b,B.e)}}
A.af.prototype={
gp(a){return B.dN},
$ie:1}
A.aK.prototype={}
A.bx.prototype={
gp(a){return B.dO},
$ie:1}
A.ag.prototype={
gt(a){return a.length},
$iv:1}
A.aI.prototype={$if:1}
A.aJ.prototype={$if:1}
A.by.prototype={
gp(a){return B.dP},
$ie:1}
A.bz.prototype={
gp(a){return B.dQ},
$ie:1}
A.bA.prototype={
gp(a){return B.dR},
$ie:1}
A.bB.prototype={
gp(a){return B.dS},
$ie:1}
A.bC.prototype={
gp(a){return B.dT},
$ie:1}
A.bD.prototype={
gp(a){return B.dV},
$ie:1}
A.bE.prototype={
gp(a){return B.dW},
$ie:1,
$icM:1}
A.aL.prototype={
gp(a){return B.dX},
gt(a){return a.length},
$ie:1}
A.bF.prototype={
gp(a){return B.dY},
gt(a){return a.length},
$ie:1}
A.b_.prototype={}
A.b0.prototype={}
A.b1.prototype={}
A.b2.prototype={}
A.D.prototype={
i(a){return A.bc(v.typeUniverse,this,a)},
aa(a){return A.es(v.typeUniverse,this,a)}}
A.bW.prototype={}
A.c0.prototype={
h(a){return A.y(this.a,null)}}
A.bV.prototype={
h(a){return this.a}}
A.b8.prototype={$iJ:1}
A.cS.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:4}
A.cR.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:11}
A.cT.prototype={
$0(){this.a.$0()},
$S:1}
A.cU.prototype={
$0(){this.a.$0()},
$S:1}
A.b7.prototype={
be(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.c2(new A.dc(this,b),0),a)
else throw A.c(A.aT("`setTimeout()` not found."))},
bf(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.c2(new A.db(this,a,Date.now(),b),0),a)
else throw A.c(A.aT("Periodic timer."))},
a6(){if(self.setTimeout!=null){var s=this.b
if(s==null)return
if(this.a)self.clearTimeout(s)
else self.clearInterval(s)
this.b=null}else throw A.c(A.aT("Canceling a timer."))},
$icJ:1}
A.dc.prototype={
$0(){var s=this.a
s.b=null
s.c=1
this.b.$0()},
$S:0}
A.db.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.a.F(s,o)}q.c=p
r.d.$1(q)},
$S:1}
A.bO.prototype={}
A.dg.prototype={
$1(a){return this.a.$2(0,a)},
$S:5}
A.dh.prototype={
$2(a,b){this.a.$2(1,new A.ax(a,b))},
$S:12}
A.dk.prototype={
$2(a,b){this.a(a,b)},
$S:13}
A.A.prototype={
h(a){return A.m(this.a)},
$ij:1,
gY(){return this.b}}
A.B.prototype={}
A.aV.prototype={
aj(){},
ak(){}}
A.bQ.prototype={
gbv(){return this.c<4},
bE(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
bM(a,b,c,d){var s,r,q,p,o,n,m=this
if((m.c&4)!==0){s=$.h
r=new A.aX(s)
A.eP(r.gbw())
if(c!=null)r.c=s.P(s,c)
return r}s=$.h
r=d?1:0
q=b!=null?32:0
p=A.ei(s,a)
A.fO(s,b)
s.P(s,c==null?A.i9():c)
o=new A.aV(m,p,s,r|q,A.S(m).i("aV<1>"))
o.CW=o
o.ch=o
o.ay=m.c&1
n=m.e
m.e=o
o.ch=null
o.CW=n
if(n==null)m.d=o
else n.ch=o
if(m.d===o)A.eC(m.a)
return o},
bA(a){var s,r=this
A.S(r).i("aV<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.bE(a)
if((r.c&2)===0&&r.d==null)r.bk()}return null},
bh(){if((this.c&4)!==0)return new A.a_("Cannot add new events after calling close")
return new A.a_("Cannot add new events while doing an addStream")},
E(a,b){if(!this.gbv())throw A.c(this.bh())
this.an(b)},
bk(){if((this.c&4)!==0)if(null.gc9())null.a9(null)
A.eC(this.b)}}
A.aU.prototype={
an(a){var s
for(s=this.d;s!=null;s=s.ch)s.bi(new A.bT(a))}}
A.Q.prototype={
bY(a){var s
if((this.c&15)!==6)return!0
s=this.b.b
return s.S(s,this.d,a.a)},
bT(a){var s,r=this.e,q=null,p=a.a,o=this.b.b
if(t.C.b(r))q=o.bG(o,r,p,a.b)
else q=o.S(o,r,p)
try{p=q
return p}catch(s){if(t._.b(A.a8(s))){if((this.c&1)!==0)throw A.c(A.a9("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.c(A.a9("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.l.prototype={
b5(a,b,c){var s,r,q=$.h
if(q===B.c){if(b!=null&&!t.C.b(b)&&!t.v.b(b))throw A.c(A.e2(b,"onError",u.c))}else{a=q.J(q,a)
if(b!=null)b=A.hV(b,q)}s=new A.l(q,c.i("l<0>"))
r=b==null?1:3
this.a_(new A.Q(s,r,a,b,this.$ti.i("@<1>").aa(c).i("Q<1,2>")))
return s},
aT(a,b,c){var s=new A.l($.h,c.i("l<0>"))
this.a_(new A.Q(s,19,a,b,this.$ti.i("@<1>").aa(c).i("Q<1,2>")))
return s},
bJ(a){this.a=this.a&1|16
this.c=a},
a0(a){this.a=a.a&30|this.a&1
this.c=a.c},
a_(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.a_(a)
return}s.a0(r)}r=s.b
r.T(r,new A.cX(s,a))}},
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
return}n.a0(s)}m.a=n.a2(a)
s=n.b
s.T(s,new A.d1(m,n))}},
R(){var s=this.c
this.c=null
return this.a2(s)},
a2(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
ac(a){var s,r=this
if(r.$ti.i("I<1>").b(a))A.d_(a,r,!0)
else{s=r.R()
r.a=8
r.c=a
A.a1(r,s)}},
aL(a){var s=this,r=s.R()
s.a=8
s.c=a
A.a1(s,r)},
bo(a){var s=this.R()
this.a0(a)
A.a1(this,s)},
N(a){var s=this.R()
this.bJ(a)
A.a1(this,s)},
bn(a,b){this.N(new A.A(a,b))},
a9(a){if(this.$ti.i("I<1>").b(a)){this.aJ(a)
return}this.bj(a)},
bj(a){var s
this.a^=2
s=this.b
s.T(s,new A.cZ(this,a))},
aJ(a){A.d_(a,this,!1)
return},
aI(a){var s
this.a^=2
s=this.b
s.T(s,new A.cY(this,a))},
$iI:1}
A.cX.prototype={
$0(){A.a1(this.a,this.b)},
$S:0}
A.d1.prototype={
$0(){A.a1(this.b,this.a.a)},
$S:0}
A.d0.prototype={
$0(){A.d_(this.a.a,this.b,!0)},
$S:0}
A.cZ.prototype={
$0(){this.a.aL(this.b)},
$S:0}
A.cY.prototype={
$0(){this.a.N(this.b)},
$S:0}
A.d4.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
p=q.b.b
j=p.a3(p,q.d)}catch(o){s=A.a8(o)
r=A.T(o)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
p=r
if(p==null)p=A.dx(q)
n=k.a
n.c=new A.A(q,p)
q=n}q.b=!0
return}if(j instanceof A.l&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.l){m=k.b.a
l=new A.l(m.b,m.$ti)
j.b5(new A.d5(l,m),new A.d6(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.d5.prototype={
$1(a){this.a.bo(this.b)},
$S:4}
A.d6.prototype={
$2(a,b){this.a.N(new A.A(a,b))},
$S:14}
A.d3.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
o=p.b.b
q.c=o.S(o,p.d,this.b)}catch(n){s=A.a8(n)
r=A.T(n)
q=s
p=r
if(p==null)p=A.dx(q)
o=this.a
o.c=new A.A(q,p)
o.b=!0}},
$S:0}
A.d2.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.bY(s)&&p.a.e!=null){p.c=p.a.bT(s)
p.b=!1}}catch(o){r=A.a8(o)
q=A.T(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.dx(p)
m=l.b
m.c=new A.A(p,n)
p=m}p.b=!0}},
$S:0}
A.bP.prototype={}
A.ak.prototype={
gt(a){var s={},r=new A.l($.h,t.a)
s.a=0
this.aY(new A.cr(s,this),!0,new A.cs(s,r),r.gaK())
return r},
gj(a){var s=new A.l($.h,this.$ti.i("l<1>")),r=this.aY(null,!0,new A.cp(s),s.gaK())
r.b0(new A.cq(this,r,s))
return s}}
A.cr.prototype={
$1(a){++this.a.a},
$S(){return this.b.$ti.i("~(1)")}}
A.cs.prototype={
$0(){this.b.ac(this.a.a)},
$S:0}
A.cp.prototype={
$0(){var s,r=A.ee(),q=new A.a_("No element")
A.fz(q,r)
s=A.hC(q,r)
s=new A.A(q,r)
this.a.N(s)},
$S:0}
A.cq.prototype={
$1(a){A.ht(this.b,this.c,a)},
$S(){return this.a.$ti.i("~(1)")}}
A.aW.prototype={
gk(a){return(A.ai(this.a)^892482866)>>>0},
C(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.B&&b.a===this.a}}
A.bS.prototype={
aQ(){return this.w.bA(this)},
aj(){},
ak(){}}
A.bR.prototype={
b0(a){this.a=A.ei(this.d,a)},
a6(){var s,r=this,q=r.e&=4294967279
if((q&8)===0){q=r.e=q|8
if((q&128)!==0){s=r.r
if(s.a===1)s.a=3}if((q&64)===0)r.r=null
r.f=r.aQ()}q=$.dv()
return q},
aj(){},
ak(){},
aQ(){return null},
bi(a){var s,r,q=this,p=q.r
if(p==null)p=q.r=new A.bX()
s=p.c
if(s==null)p.b=p.c=a
else p.c=s.a=a
r=q.e
if((r&128)===0){r|=128
q.e=r
if(r<256)p.aE(q)}},
an(a){var s=this,r=s.e
s.e=r|64
s.d.b4(s.a,a)
s.e&=4294967231
s.bm((r&4)!==0)},
bm(a){var s,r,q=this,p=q.e
if((p&128)!==0&&q.r.c==null){p=q.e=p&4294967167
s=!1
if((p&4)!==0)if(p<256){s=q.r
s=s==null?null:s.c==null
s=s!==!1}if(s){p&=4294967291
q.e=p}}for(;;a=r){if((p&8)!==0){q.r=null
return}r=(p&4)!==0
if(a===r)break
q.e=p^64
if(r)q.aj()
else q.ak()
p=q.e&=4294967231}if((p&128)!==0&&p<256)q.r.aE(q)}}
A.b6.prototype={
aY(a,b,c,d){return this.a.bM(a,d,c,b===!0)}}
A.bU.prototype={}
A.bT.prototype={}
A.bX.prototype={
aE(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.eP(new A.da(s,a))
s.a=1}}
A.da.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.a
q.b=r
if(r==null)q.c=null
this.b.an(s.b)},
$S:0}
A.aX.prototype={
b0(a){},
a6(){this.a=-1
this.c=null
return $.dv()},
bx(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.c3(s)}}else r.a=q}}
A.bZ.prototype={}
A.di.prototype={
$0(){return this.a.ac(this.b)},
$S:0}
A.cN.prototype={
c3(a){var s,r,q,p,o=this
try{q=o.a3(o,a)
return q}catch(p){s=A.a8(p)
r=A.T(p)
o.O(o,s,r)}},
c4(a,b){var s,r,q,p,o=this
try{q=o.S(o,a,b)
return q}catch(p){s=A.a8(p)
r=A.T(p)
o.O(o,s,r)}},
b4(a,b){return this.c4(a,b,t.z)},
bN(a,b){return new A.cO(this,this.P(this,a),b)},
bO(a,b,c){return new A.cQ(this,this.J(this,a),c,b)},
bP(a,b){return new A.cP(this,this.J(this,a),b)},
O(a,b,c){var s,r,q,p,o,n,m,l=null
if(l==null){A.hW(b,c)
return}s=l.gaC()
r=s.gca()
q=$.h
try{$.h=r
l.bS(s,s.gal(),a,b,c)
$.h=q}catch(n){p=A.a8(n)
o=A.T(n)
$.h=q
m=b===p?c:o
r.O(s,p,m)}},
bI(a,b){var s,r,q=$.h
if(q===a)return b.$0()
s=q
$.h=a
try{q=b.$0()
return q}finally{$.h=s}r=null.gaC()
return null.cb(r,r.gal(),a,b)},
a3(a,b){return this.bI(a,b,t.z)},
bH(a,b,c){var s,r,q=$.h
if(q===a)return b.$1(c)
s=q
$.h=a
try{q=b.$1(c)
return q}finally{$.h=s}r=null.gaC()
return null.bS(r,r.gal(),a,b,c)},
S(a,b,c){var s=t.z
return this.bH(a,b,c,s,s)},
bF(a,b,c,d){var s,r,q=$.h
if(q===a)return b.$2(c,d)
s=q
$.h=a
try{q=b.$2(c,d)
return q}finally{$.h=s}r=null.gaC()
return null.cc(r,r.gal(),a,b,c,d)},
bG(a,b,c,d){var s=t.z
return this.bF(a,b,c,d,s,s,s)},
bC(a,b){return b},
P(a,b){return this.bC(a,b,t.z)},
bD(a,b){return b},
J(a,b){var s=t.z
return this.bD(a,b,s,s)},
bB(a,b){return b},
am(a,b){var s=t.z
return this.bB(a,b,s,s,s)},
bq(a,b,c){return null},
T(a,b){A.dP(a,b)
return},
aM(a,b,c){var s
if(B.c!==a)c=a.bO(c,t.H,t.p)
s=B.a.G(b.a,1000)
return A.h_(s,c)}}
A.cO.prototype={
$0(){var s=this.a
return s.a3(s,this.b)},
$S(){return this.c.i("0()")}}
A.cQ.prototype={
$1(a){var s=this.a
return s.S(s,this.b,a)},
$S(){return this.d.i("@<0>").aa(this.c).i("1(2)")}}
A.cP.prototype={
$1(a){return this.a.b4(this.b,a)},
$S(){return this.c.i("~(0)")}}
A.dj.prototype={
$0(){A.fj(this.a,this.b)},
$S:0}
A.aZ.prototype={
gv(a){var s=this,r=new A.al(s,s.r,s.$ti.i("al<1>"))
r.c=s.e
return r},
gt(a){return this.a},
E(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.aH(s==null?q.b=A.dI():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.aH(r==null?q.c=A.dI():r,b)}else return q.bg(b)},
bg(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.dI()
s=J.H(a)&1073741823
r=p[s]
if(r==null)p[s]=[q.ai(a)]
else{if(q.bs(r,a)>=0)return!1
r.push(q.ai(a))}return!0},
aH(a,b){if(a[b]!=null)return!1
a[b]=this.ai(b)
return!0},
aP(){this.r=this.r+1&1073741823},
ai(a){var s,r=this,q=new A.d9(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.aP()
return q},
bs(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.as(a[r].a,b))return r
return-1}}
A.d9.prototype={}
A.al.prototype={
gu(){var s=this.d
return s==null?this.$ti.c.a(s):s},
n(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.c(A.bm(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.k.prototype={
gv(a){return new A.ad(a,a.length,A.bg(a).i("ad<k.E>"))},
ar(a,b){if(!(b<a.length))return A.a(a,b)
return a[b]},
h(a){return A.dz(a,"[","]")}}
A.aH.prototype={
gt(a){return this.a},
h(a){return A.dD(this)}}
A.cd.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.m(a)
r.a=(r.a+=s)+": "
s=A.m(b)
r.a+=s},
$S:15}
A.aO.prototype={
h(a){return A.dz(this,"{","}")}}
A.b4.prototype={}
A.c1.prototype={}
A.bo.prototype={
C(a,b){if(b==null)return!1
return b instanceof A.bo&&this.a===b.a},
gk(a){return B.a.gk(this.a)},
h(a){var s,r,q,p,o=this.a,n=B.a.G(o,36e8)
o%=36e8
s=B.a.G(o,6e7)
o%=6e7
r=s<10?"0":""
q=B.a.G(o,1e6)
p=q<10?"0":""
return""+n+":"+r+s+":"+p+q+"."+B.E.c0(B.a.h(o%1e6),6,"0")}}
A.cV.prototype={
h(a){return this.af()}}
A.j.prototype={
gY(){return A.fy(this)}}
A.bj.prototype={
h(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.c7(s)
return"Assertion failed"}}
A.J.prototype={}
A.G.prototype={
gah(){return"Invalid argument"+(!this.a?"(s)":"")},
gag(){return""},
h(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.gah()+q+o
if(!s.a)return n
return n+s.gag()+": "+A.c7(s.gaA())},
gaA(){return this.b}}
A.aj.prototype={
gaA(){return this.b},
gah(){return"RangeError"},
gag(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.m(q):""
else if(q==null)s=": Not greater than or equal to "+A.m(r)
else if(q>r)s=": Not in inclusive range "+A.m(r)+".."+A.m(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.m(r)
return s}}
A.bq.prototype={
gaA(){return this.b},
gah(){return"RangeError"},
gag(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gt(a){return this.f}}
A.aS.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.bM.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.a_.prototype={
h(a){return"Bad state: "+this.a}}
A.bl.prototype={
h(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.c7(s)+"."}}
A.bG.prototype={
h(a){return"Out of Memory"},
gY(){return null},
$ij:1}
A.aP.prototype={
h(a){return"Stack Overflow"},
gY(){return null},
$ij:1}
A.cW.prototype={
h(a){return"Exception: "+this.a}}
A.Y.prototype={
gt(a){var s,r=this.gv(this)
for(s=0;r.n();)++s
return s},
ar(a,b){var s,r
A.fC(b,"index")
s=this.gv(this)
for(r=b;s.n();){if(r===0)return s.gu();--r}throw A.c(A.dy(b,b-r,this,null,"index"))},
h(a){return A.fr(this,"(",")")}}
A.aY.prototype={
ar(a,b){var s=this.a
if(b>=s)A.a7(A.dy(b,s,this,null,"index"))
return this.b.$1(b)},
gt(a){return this.a}}
A.u.prototype={
gk(a){return A.d.prototype.gk.call(this,0)},
h(a){return"null"}}
A.d.prototype={$id:1,
C(a,b){return this===b},
gk(a){return A.ai(this)},
h(a){return"Instance of '"+A.bI(this)+"'"},
gp(a){return A.eK(this)},
toString(){return this.h(this)}}
A.c_.prototype={
h(a){return""},
$iE:1}
A.bL.prototype={
gt(a){return this.a.length},
h(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.d7.prototype={
b_(a){if(a<=0||a>4294967296)throw A.c(A.fA("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
A.V.prototype={
gk(a){var s=this.a,r=this.b
return A.cg(new A.x(s,r).$s,s,r,B.e)},
C(a,b){var s,r,q,p
if(b==null)return!1
if(b instanceof A.V){s=b.a
r=b.b
q=this.a
p=this.b
p=A.cg(new A.x(s,r).$s,s,r,B.e)===A.cg(new A.x(q,p).$s,q,p,B.e)
s=p}else s=!1
return s},
h(a){var s=this
return"("+s.a+" "+s.b+") => '"+s.c+"' "+s.d}}
A.ch.prototype={
h(a){return A.eK(this).h(0)+": "+this.a}}
A.cu.prototype={}
A.N.prototype={}
A.ce.prototype={
af(){return"Mode."+this.b}}
A.ae.prototype={
h(a){var s=this
return"               row: "+s.a+"\n            column: "+s.b+"\n         character: '"+s.c+"'\n    characterColor: "+s.d+"\n\n          pixelRow: "+s.e+"\n       pixelColumn: "+s.f+"\n         pixelIsOn: "+s.r+"\n    "}}
A.ah.prototype={
sa7(a){var s,r,q,p=this
if(a<0){s=p.d=a
for(r=p.b,q=p.a;s<0;){s+=r
p.d=s
p.c=B.a.l(p.c-1,q)}}else{s=p.b
p.c=B.a.l(p.c+B.a.F(a,s),p.a)
p.d=B.a.l(a,s)}},
gA(){return this.c*this.b+this.d},
sA(a){var s=this,r=s.b
s.c=B.a.l(B.a.F(a,r),s.a)
s.d=B.a.l(a,r)}}
A.bK.prototype={
bc(a,b,c,d,e,f,g,h){var s,r=this,q=v.G.document
q.onfocus=A.bd(new A.cj(r))
q.onblur=A.bd(new A.ck(r))
q=r.w
q.tabIndex=-1
q.style.display="block"
q.style.outline="none"
s=q.getContext("2d")
if(s==null)s=A.L(s)
s.imageSmoothingEnabled=!1
q.onfocus=A.bd(new A.cl(r))
q.onblur=A.bd(new A.cm(r))
b.style.display="flex"
b.style.alignItems="flex-start"
b.style.padding="0"
b.style.margin="0"
b.style.width="fit-content"
b.style.height="fit-content"
b.style.background=r.r
b.appendChild(q)
r.H(0)},
a4(a,b){return new A.x(B.a.l(a,this.b),B.a.l(b,this.c))},
ab(){var s=this.x,r=s.getContext("2d")
if(r==null)r=A.L(r)
r.save()
r.beginPath()
r.clearRect(0,0,s.width,s.height)
r.restore()
return r},
ad(){var s=this.w.getContext("2d")
if(s==null)s=A.L(s)
s.save()
s.beginPath()
s.drawImage(this.x,0,0)
s.restore()
return s},
K(a,b,c,d){var s,r,q,p,o,n,m=this,l=a<0||a>=m.b||b<0||b>=m.c
if(l)return
s=m.a4(a,b)
a=s.a
b=s.b
r=A.dF(b)
q=r.a
p=B.a.X(1,r.b)
l=m.y
if(!(a>=0&&a<l.length))return A.a(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.a(l,q)
o=l[q]
l.$flags&2&&A.c4(l)
l[q]=(o|p)>>>0
l[q]=(l[q]^p)>>>0
l=c.getContext("2d")
if(l==null)l=A.L(l)
l.save()
l.beginPath()
l.fillStyle=m.r
o=m.d
n=m.e
l.fillRect(b*o,a*n,o,n)
l.restore()},
L(a,b,c,d,e){var s,r,q,p,o,n,m=this,l=a<0||a>=m.b||b<0||b>=m.c
if(l)return
s=m.a4(a,b)
a=s.a
b=s.b
r=A.dF(b)
q=r.a
p=B.a.X(1,r.b)
l=m.y
if(!(a>=0&&a<l.length))return A.a(l,a)
l=l[a]
if(!(q>=0&&q<l.length))return A.a(l,q)
o=l[q]
l.$flags&2&&A.c4(l)
l[q]=(o|p)>>>0
o=d.getContext("2d")
l=o==null?A.L(o):o
l.save()
l.beginPath()
l.fillStyle=c
o=m.d
n=m.e
l.fillRect(b*o,a*n,o,n)
l.restore()},
b2(a,b){var s,r,q,p,o=this.a4(b,a)
b=o.a
s=A.dF(o.b)
r=s.a
q=B.a.X(1,s.b)
p=this.y
if(!(b>=0&&b<p.length))return A.a(p,b)
p=p[b]
if(!(r>=0&&r<p.length))return A.a(p,r)
return(p[r]&q)>>>0>0},
aX(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=this
if(e==null)e=k.c-c
if(b==null)b=k.b-d
k.ab()
if(c===0&&d===0&&e===k.c&&b===k.b){for(s=k.y,r=s.length,q=0;q<r;++q)for(p=0;o=s[q],p<o.length;++p){o.$flags&2&&A.c4(o)
o[p]=0}s=k.x
r=s.getContext("2d")
if(r==null)r=A.L(r)
r.save()
r.fillStyle=k.r
r.fillRect(0,0,s.width,s.height)
r.restore()}else{s=k.b
d=B.a.l(d,s)
r=k.c
c=B.a.l(c,r)
n=Math.min(d+Math.abs(b),s)
m=Math.min(c+Math.abs(e),r)
for(o=k.x,q=d;q<n;++q){l=B.a.l(q,s)
for(p=c;p<m;++p)k.K(l,B.a.l(p,r),o,!1)}}k.ad()},
H(a){return this.aX(0,null,0,0,null)},
by(a,b,c,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
d.ab()
s=d.a4(a,b)
a=s.a
b=s.b
r=B.a.bK(1,a1)-1
for(q=a2.a,p=a1-1,o=t.t,n=d.x,m=0;m<c.length;++m){l=c[m]
k=(l&r)>>>0
l=A.r([],o)
for(j=a+m,i=0;i<a1;++i){h=d.b2(b+i,j)?1:0
l.push(B.a.X(h,p-i))}g=B.b.bR(l,0,new A.ci())
switch(q){case 0:for(i=0;i<a1;++i){l=b+i
if((B.a.D(k,p-i)&1)>0)d.L(j,l,a0,n,!1)
else d.K(j,l,n,!1)}break
case 1:for(i=0;i<a1;++i){l=b+i
if((B.a.D(k,p-i)&1)>0)d.K(j,l,n,!1)
else d.L(j,l,a0,n,!1)}break
case 3:for(i=0;i<a1;++i){f=p-i
if((B.a.D(k,f)&1)>0&&(B.a.b9(g,f)&1)===0)d.L(j,b+i,a0,n,!1)}break
case 2:for(i=0;i<a1;++i)if((B.a.D(k,p-i)&1)>0)d.L(j,b+i,a0,n,!1)
break
case 4:for(e=(k&g)>>>0,i=0;i<a1;++i)if((B.a.D(e,p-i)&1)>0)d.L(j,b+i,a0,n,!1)
break
case 5:for(e=(k&g)>>>0,i=0;i<a1;++i)if((B.a.D(e,p-i)&1)>0)d.K(j,b+i,n,!1)
break
case 6:for(e=(k&g)>>>0,i=0;i<a1;++i)if((B.a.D(e,p-i)&1)===0)d.K(j,b+i,n,!1)
break
case 7:for(e=(k&g)>>>0,i=0;i<a1;++i){l=b+i
if((B.a.D(e,p-i)&1)===0)d.K(j,l,n,!1)
else d.L(j,l,a0,n,!1)}break}}d.ad()},
b3(a,b,c,d){this.by(d.a,d.b,b,a,8,c,!0,!1,!1)},
c1(a,b,c){return this.b3(a,b,B.n,c)},
b8(a){var s,r,q,p,o,n,m,l,k=this,j=k.b
a=B.a.l(a,j)
for(s=j-a,r=k.y,q=r.length,p=0;p<s;++p){if(!(p<q))return A.a(r,p)
o=p+a
n=0
for(;m=r[p],n<m.length;++n){if(!(o<q))return A.a(r,o)
l=r[o]
if(!(n<l.length))return A.a(l,n)
l=l[n]
m.$flags&2&&A.c4(m)
m[n]=l}}for(;p<j;++p){if(!(p<q))return A.a(r,p)
n=0
for(;o=r[p],n<o.length;++n){o.$flags&2&&A.c4(o)
o[n]=0}}k.ab()
j=k.x
r=j.getContext("2d")
if(r==null)r=A.L(r)
r.save()
r.beginPath()
q=k.e
r.drawImage(k.w,0,-a*q)
r.fillStyle=k.r
r.fillRect(0,s*q,j.width,a*q)
r.restore()
k.ad()},
V(){var s=this.w
s.style.opacity="1.0"
s.focus()},
U(){var s=this.w,r=s.style
r.opacity="0.5"
s.blur()}}
A.cj.prototype={
$0(){this.a.z=!0},
$S:1}
A.ck.prototype={
$0(){this.a.z=!1},
$S:1}
A.cl.prototype={
$0(){this.a.V()},
$S:1}
A.cm.prototype={
$0(){this.a.U()},
$S:1}
A.ci.prototype={
$2(a,b){return(a|b)>>>0},
$S:16}
A.aQ.prototype={
af(){return"State."+this.b}}
A.aR.prototype={
bd(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,a0,a1){var s,r=this,q=new A.cI(r),p=new A.cH()
r.cy=l
s=r.f
s.tabIndex=-1
s.onfocus=A.bd(new A.cw(r))
s.onblur=A.bd(new A.cx(r))
s.onkeydown=A.an(new A.cy(r,p,new A.cG(r)))
s.onclick=A.an(new A.cz(r,q,o))
r.ay=o
s.onmouseup=A.an(new A.cA(r,q))
r.ch=a0
s.onmousemove=A.an(new A.cB(r,q))
r.CW=n
s.onmouseenter=A.an(new A.cC(r,q))
r.cx=a1
s.onmouseleave=A.an(new A.cD(r,q))
r.db=m
s.onkeyup=A.an(new A.cE(r,p))
A.fG(new A.bo(3e5),new A.cF(new A.c1(new ($.f4())(r))))
r.U()
r.H(0)},
gau(){var s=this.w
s===$&&A.p()
return s.gau()},
gap(){var s=this.w
s===$&&A.p()
return s.gap()},
a5(a,b){return new A.x(B.a.l(a,this.a),B.a.l(b,this.b))},
aO(){var s=this,r=s.dy,q=s.x,p=q.c
if(!(p>=0&&p<r.length))return A.a(r,p)
p=r[p]
q=q.d
if(!(q>=0&&q<p.length))return A.a(p,q)
s.fr.E(0,p[q])
s.m()
s.fy=!1},
aV(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
for(s=h.fr,r=A.fQ(s,s.r,s.$ti.c),q=h.w,p=h.fx,o=8+h.c,n=r.$ti.c;r.n();){m=r.d
if(m==null)m=n.a(m)
l=m.a
k=m.b
if(p.aq(m.c)){j=p.W(0,m.c)
j.toString
i=j}else i=$.eU()
q===$&&A.p()
m=m.d
q.b3(m,i,B.n,new A.x(l*o,k*8))}if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.aP()}},
m(){return this.aV(null)},
aD(a,b){var s,r=this.a5(b,a)
b=r.a
a=r.b
s=this.dy
if(!(b>=0&&b<s.length))return A.a(s,b)
s=s[b]
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a].c},
q(a,b,c){var s,r=this.a5(c,b)
c=r.a
b=r.b
s=this.dy
if(!(c>=0&&c<s.length))return A.a(s,c)
s=s[c]
if(!(b>=0&&b<s.length))return A.a(s,b)
s=s[b]
s.c=a
this.fr.E(0,s)},
aZ(){var s,r=this.x
r.sa7(0)
s=r.c
if(s===this.a-1)this.aF()
else r.c=B.a.l(s+1,r.a)},
aF(){var s,r,q,p,o,n,m,l,k,j,i,h=this
for(s=A.bs(1,t.z),s=s.gv(s),r=h.w,q=8+h.c,p=h.b,o=h.dy,n=h.a-1;s.n();){s.gu()
for(m=0;m<n;m=l)for(l=m+1,k=0;k<p;++k){j=o.length
if(!(m<j))return A.a(o,m)
i=o[m]
if(!(k<i.length))return A.a(i,k)
i=i[k]
if(!(l<j))return A.a(o,l)
j=o[l]
if(!(k<j.length))return A.a(j,k)
j=j[k]
i.c=j.c
i.d=j.d}for(k=0;k<p;++k){if(!(n>=0&&n<o.length))return A.a(o,n)
j=o[n]
if(!(k<j.length))return A.a(j,k)
j=j[k]
j.c=" "
j.d="white"}r===$&&A.p()
r.b8(q)}},
a8(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=d==null?h.x.c:d,f=h.a5(g,b==null?h.x.d:b)
g=h.x
s=g.a
g.c=B.a.l(f.a,s)
g.sa7(f.b)
for(r=a.split(""),q=r.length,p=h.dy,o=h.fr,n=h.a-1,m=h.b-1,l=0;l<q;++l){k=r[l]
d=g.c
b=g.d
if(!(d>=0&&d<p.length))return A.a(p,d)
j=p[d]
if(!(b>=0&&b<j.length))return A.a(j,b)
i=j[b]
i.c=k
i.d="white"
o.E(0,i)
if(d===n&&b===m){h.aF()
g.c=B.a.l(g.c-1,s)}g.sa7(g.d+1)}h.aV(null)
if(c)h.aZ()},
c_(a,b){return this.a8(a,null,!0,b)},
bZ(a){return this.a8(a,null,!0,null)},
M(a,b,c){return this.a8(a,b,!0,c)},
b1(a,b){return this.a8(a,null,b,null)},
H(a){var s,r,q,p,o=this,n=o.b,m=o.a
for(s=o.dy,r=0;r<m;++r)for(q=0;q<n;++q){if(!(r<s.length))return A.a(s,r)
p=s[r]
if(!(q<p.length))return A.a(p,q)
p=p[q]
p.c=" "
p.d="white"}s=o.w
s===$&&A.p()
p=8+o.c
s.aX(0,m*p,0,0*p,n*8)
p=o.x
p.c=0%p.a
p.sa7(0)},
bz(a,b,c){var s=this.w
s===$&&A.p()
s.c1("white",b,new A.x(c*(8+this.c),a*8))},
V(){return this.gau().$0()},
U(){return this.gap().$0()}}
A.cI.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.w
i===$&&A.p()
s=J.e1(a.offsetX)
r=Math.max(Math.min(B.a.F(J.e1(a.offsetY)-1,i.e),i.b-1),0)
q=Math.max(Math.min(B.a.F(s-1,i.d),i.c-1),0)
p=B.a.F(r,8+j.c)
o=B.a.G(q,8)
n=j.aD(o,p)
m=j.a5(p,o)
l=m.a
k=m.b
j=j.dy
if(!(l>=0&&l<j.length))return A.a(j,l)
j=j[l]
if(!(k>=0&&k<j.length))return A.a(j,k)
return new A.ae(p,o,n,j[k].d,r,q,i.b2(q,r))},
$S:17}
A.cH.prototype={
$1(a){var s=a.keyCode
return new A.N(s)},
$S:18}
A.cG.prototype={
$0(){var s,r,q,p,o,n=this.a,m=n.a,l=n.b,k=new A.ah(m,l)
k.sA(n.y.gA())
s=A.r([],t.s)
for(r=n.z,q=r.b;p=k.c,o=k.d,p*l+o<r.c*q+r.d;p=k.c*l+k.d+1,k.c=B.a.l(B.a.F(p,l),m),k.d=B.a.l(p,l))s.push(n.aD(o,p))
return B.b.aB(s,"")},
$S:19}
A.cw.prototype={
$0(){var s=this.a.w
s===$&&A.p()
s.V()},
$S:1}
A.cx.prototype={
$0(){var s=this.a.w
s===$&&A.p()
s.U()},
$S:1}
A.cy.prototype={
$1(a){var s,r,q,p
a.preventDefault()
s=this.a
switch(s.dx.a){case 0:break
case 1:r=s.at
if(r.d!=null){r.E(0,this.b.$1(a))
s.dx=B.d}break
case 2:s.aO()
A:{q=a.keyCode
if(13===q){r=s.as
if(r.d!=null){r.E(0,J.fa(this.c.$0()))
s.aZ()
s.dx=B.d}break A}if(8===q){r=s.x
if(r.gA()>s.y.gA()){r.sA(r.gA()-1)
s.b1(" ",!1)
r.sA(r.gA()-1)}break A}p=a.key
if(p.length===1&&s.x.gA()<s.z.gA())s.b1(p,!1)}break
case 3:break}},
$S:2}
A.cz.prototype={
$1(a){var s
a.preventDefault()
s=this.a
if(s.dx===B.f&&s.ax.d!=null){s.ax.E(0,this.b.$1(a))
s.dx=B.d}},
$S:2}
A.cA.prototype={
$1(a){a.preventDefault()},
$S:2}
A.cB.prototype={
$1(a){a.preventDefault()},
$S:2}
A.cC.prototype={
$1(a){a.preventDefault()},
$S:2}
A.cD.prototype={
$1(a){a.preventDefault()},
$S:2}
A.cE.prototype={
$1(a){var s,r
a.preventDefault()
s=this.a
r=s.db
if(r!=null)r.$2(s,this.b.$1(a))},
$S:2}
A.cF.prototype={
$1(a){var s,r,q=this.a.a.deref()
if(q==null){a.a6()
return}s=q.w
s===$&&A.p()
if(s.z&&J.as(v.G.document.activeElement,s.w)&&q.dx===B.dM)if(q.fy)q.aO()
else{s=q.x
r=s.c
q.bz(s.d,$.eT(),r)
q.fy=!0}},
$S:20}
A.au.prototype={}
A.c8.prototype={
H(a){var s,r,q,p,o,n
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.dZ)(s),++q){p=s[q]
for(o=0;o<B.b.gj(s).length;++o){if(!(o<p.length))return A.a(p,o)
n=p[o]
n.c=n.b=n.a=!1}}},
bu(a,b){var s,r,q,p,o,n,m,l
for(s=this.a,r=-1;r<=1;++r)for(q=r===0,p=a+r,o=p>=0,n=-1;n<=1;++n){m=b+n
if(q&&n===0||!o||p>=s.length||m<0||m>=B.b.gj(s).length)continue
if(!(p>=0&&p<s.length))return A.a(s,p)
l=s[p]
if(!(m>=0&&m<l.length))return A.a(l,m)
if(!l[m].a)return!1}return!0},
ae(a,b){var s,r,q,p,o,n,m,l,k
for(s=this.a,r=0,q=-1;q<=1;++q)for(p=q===0,o=a+q,n=o>=0,m=-1;m<=1;++m){l=b+m
if(p&&m===0||!n||o>=s.length||l<0||l>=B.b.gj(s).length)continue
if(!(o>=0&&o<s.length))return A.a(s,o)
k=s[o]
if(!(l>=0&&l<k.length))return A.a(k,l)
r+=k[l].a?1:0}return r},
bV(a){var s,r,q,p,o=this.a
for(s=A.bs(B.m.c2(a*o.length*B.b.gj(o).length),t.z),s=s.gv(s);s.n();){s.gu()
for(r=0,q=0;;){p=$.f7()
r=p.b_(o.length)
q=p.b_(B.b.gj(o).length)
if(!(r>=0&&r<o.length))return A.a(o,r)
p=o[r]
if(!(q>=0&&q<p.length))return A.a(p,q)
if(!p[q].a&&!this.bu(r,q))break}if(!(r>=0&&r<o.length))return A.a(o,r)
p=o[r]
if(!(q>=0&&q<p.length))return A.a(p,q)
p[q].a=!0}},
aW(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.a
if(!(a>=0&&a<f.length))return A.a(f,a)
s=f[a]
if(!(b>=0&&b<s.length))return A.a(s,b)
r=s[b]
if(r.a)return r.b=!0
q=A.r([new A.x(a,b)],t.w)
while(s=q.length,s!==0){if(0>=s)return A.a(q,-1)
p=q.pop()
o=p.a
n=p.b
if(!(o>=0&&o<f.length))return A.a(f,o)
s=f[o]
if(!(n>=0&&n<s.length))return A.a(s,n)
s[n].b=!0
if(this.ae(o,n)===0)for(m=-1;m<=1;++m)for(s=m===0,l=o+m,k=l>=0,j=-1;j<=1;++j){i=n+j
if(s&&j===0||!k||l>=f.length||i<0||i>=B.b.gj(f).length)continue
if(!(l>=0&&l<f.length))return A.a(f,l)
h=f[l]
if(!(i>=0&&i<h.length))return A.a(h,i)
g=h[i]
if(!g.b&&!g.a)q.push(new A.x(l,i))}}return!1},
bX(a,b){var s,r,q,p,o,n,m,l,k,j,i=this.a
if(!(a>=0&&a<i.length))return A.a(i,a)
s=i[a]
if(!(b>=0&&b<s.length))return A.a(s,b)
r=s[b]
if(r.b){for(q=0,p=-1;p<=1;++p)for(s=p===0,o=a+p,n=o>=0,m=-1;m<=1;++m){l=b+m
if(s&&m===0||!n||o>=i.length||l<0||l>=B.b.gj(i).length)continue
if(!(o>=0&&o<i.length))return A.a(i,o)
k=i[o]
if(!(l>=0&&l<k.length))return A.a(k,l)
if(k[l].c)++q}if(this.ae(a,b)===q)for(p=-1;p<=1;++p)for(s=p===0,o=a+p,n=o>=0,m=-1;m<=1;++m){l=b+m
if(s&&m===0||!n||o>=i.length||l<0||l>=B.b.gj(i).length)continue
if(!(o>=0&&o<i.length))return A.a(i,o)
k=i[o]
if(!(l>=0&&l<k.length))return A.a(k,l)
j=k[l]
if(!j.b&&!j.c)if(this.aW(o,l))return!0}return!1}else{r.c=!r.c
return!1}},
bU(){var s,r,q,p,o
for(s=this.a,r=0;r<s.length;++r)for(q=0;q<B.b.gj(s).length;++q){if(!(r<s.length))return A.a(s,r)
p=s[r]
if(!(q<p.length))return A.a(p,q)
o=p[q]
if(o.c!==o.a)return!1}return!0},
bl(a,b){var s,r,q=this.a
if(!(a<q.length))return A.a(q,a)
q=q[a]
if(!(b<q.length))return A.a(q,b)
s=q[b]
if(!s.b)return s.c?"\u263c":"\u25a0"
if(s.a)return"*"
r=this.ae(a,b)
if(r===0)return"."
return B.a.h(r)},
h(a){var s,r,q,p,o=t.s,n=A.r([],o)
for(s=this.a,r=0;r<s.length;++r){q=A.r([],o)
for(p=0;p<B.b.gj(s).length;++p)q.push(this.bl(r,p))
n.push(B.b.aB(q,""))}return B.b.aB(n,"\n")}}
A.X.prototype={
af(){return"GameState."+this.b}}
A.c9.prototype={
b6(){var s,r,q,p,o,n=this,m=" "
if(n.d!==B.l)return
if(n.a){for(s=n.c.a,r=0;r<s.length;++r){q=n.b
q===$&&A.p()
p=4+r
q.q(m,2,p)
q.m()
q.q(m,3+B.b.gj(s).length,p)
q.m()}for(o=0;o<B.b.gj(s).length;++o){q=n.b
q===$&&A.p()
p=3+o
q.q(m,p,3)
q.m()
q.q(m,p,4+s.length)
q.m()}q=n.b
q===$&&A.p()
q.q(m,2,3)
q.m()
q.q(m,3+B.b.gj(s).length,3)
q.m()
q.q(m,2,4+s.length)
q.m()
p=s.length
q.q(m,3+B.b.gj(s).length,4+p)
q.m()
q.M("Select",3,2)}else{for(s=n.c.a,r=0;r<s.length;++r){q=n.b
q===$&&A.p()
p=4+r
q.q("\u2502",2,p)
q.m()
q.q("\u2502",3+B.b.gj(s).length,p)
q.m()}for(o=0;o<B.b.gj(s).length;++o){q=n.b
q===$&&A.p()
p=3+o
q.q("\u2500",p,3)
q.m()
q.q("\u2500",p,4+s.length)
q.m()}q=n.b
q===$&&A.p()
q.q("\u250c",2,3)
q.m()
q.q("\u2510",3+B.b.gj(s).length,3)
q.m()
q.q("\u2514",2,4+s.length)
q.m()
p=s.length
q.q("\u2518",3+B.b.gj(s).length,4+p)
q.m()
q.M("Mark  ",3,2)}n.a=!n.a},
bb(){var s=A.fF(41,"mine",0,25,new A.ca(this))
s.V()
this.b!==$&&A.ix()
this.b=s},
aG(){var s,r,q,p,o,n,m,l,k,j=this.c,i=j.h(0).split("\n")
for(j=j.a,s=0;s<i.length;++s)for(r=s+4,q=0;q<B.b.gj(j).length;++q){p=i[s]
if(!(q<p.length))return A.a(p,q)
o=p[q]
p=this.b
p===$&&A.p()
n=q+3
p.q(o,n,r)
p.m()
m=B.dK.W(0,o)
m.toString
l=r%p.a
k=n%p.b
n=p.dy
if(!(l<n.length))return A.a(n,l)
n=n[l]
if(!(k<n.length))return A.a(n,k)
n=n[k]
n.d=m
p.fr.E(0,n)
p.m()}},
I(){var s=0,r=A.hP(t.H),q=this,p,o,n,m,l,k,j,i,h,g
var $async$I=A.i4(function(a,b){if(a===1)return A.hn(b,r)
for(;;)switch(s){case 0:p=q.c,o=p.a
case 2:case 4:switch(q.d.a){case 0:s=6
break
case 1:s=7
break
case 2:s=8
break
case 3:s=9
break
case 4:s=10
break
default:s=5
break}break
case 6:n=q.b
n===$&&A.p()
n.H(0)
n.c_(" ",2)
for(m="  _____ _                               \n |     |_|___ ___ ___ _ _ _ ___ ___ ___ \n | | | | |   | -_|_ -| | | | -_| -_| . |\n |_|_|_|_|_|_|___|___|_____|___|___|  _|\n                                   |_| \n\n  Controls:\n\n    SPACE\n\n      Toggle between 'select' (no\n      border) and 'mark' (border)\n      mode.\n      \n    CLICK CELL\n\n      Select or mark cells.\n           \n  Click anywhere to begin!\n".split("\n"),l=m.length,k=0;k<l;++k)n.bZ(m[k])
if(n.dx!==B.d)A.a7(A.cv("Terminal already awaiting input."))
n.dx=B.f
n=n.ax
s=11
return A.df(new A.B(n,A.S(n).i("B<1>")).gj(0),$async$I)
case 11:q.d=B.A
s=5
break
case 7:n=q.b
n===$&&A.p()
n.H(0)
p.H(0)
p.bV(0.1)
q.aG()
q.a=!0
q.d=B.l
q.b6()
s=5
break
case 8:n=q.b
n===$&&A.p()
if(n.dx!==B.d)A.a7(A.cv("Terminal already awaiting input."))
n.dx=B.f
n=n.ax
s=12
return A.df(new A.B(n,A.S(n).i("B<1>")).gj(0),$async$I)
case 12:j=b
i=j.a-4
h=j.b-3
if(i>=0&&i<o.length&&h>=0&&h<B.b.gj(o).length){g=q.a?p.bX(i,h):p.aW(i,h)
q.aG()
if(g)q.d=B.C
if(p.bU())q.d=B.B}s=5
break
case 9:n=q.b
n===$&&A.p()
n.M("Congratutations! You win!",8,1)
n.M("Click to continue.",11,23)
if(n.dx!==B.d)A.a7(A.cv("Terminal already awaiting input."))
n.dx=B.f
n=n.ax
s=13
return A.df(new A.B(n,A.S(n).i("B<1>")).gj(0),$async$I)
case 13:q.d=B.h
s=5
break
case 10:n=q.b
n===$&&A.p()
n.M("Boom! You lose!",13,1)
n.M("Click to continue.",11,23)
if(n.dx!==B.d)A.a7(A.cv("Terminal already awaiting input."))
n.dx=B.f
n=n.ax
s=14
return A.df(new A.B(n,A.S(n).i("B<1>")).gj(0),$async$I)
case 14:q.d=B.h
s=5
break
case 5:s=2
break
case 3:return A.ho(null,r)}})
return A.hp($async$I,r)}}
A.ca.prototype={
$2(a,b){if(b.a===32)this.a.b6()},
$S:21};(function aliases(){var s=J.O.prototype
s.ba=s.h})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._static_2,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u
s(A,"i5","fL",3)
s(A,"i6","fM",3)
s(A,"i7","fN",3)
r(A,"eF","i_",0)
s(A,"i8","hR",5)
q(A,"ia","hT",6)
r(A,"i9","hS",0)
p(A.l.prototype,"gaK","bn",6)
o(A.aX.prototype,"gbw","bx",0)
s(A,"eI","fP",22)
var n
o(n=A.bK.prototype,"gau","V",0)
o(n,"gap","U",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.d,null)
q(A.d,[A.dA,J.br,A.aN,J.bi,A.j,A.W,A.cn,A.Y,A.ad,A.bp,A.ay,A.am,A.bn,A.cK,A.cf,A.ax,A.b5,A.aH,A.cc,A.D,A.bW,A.c0,A.b7,A.bO,A.A,A.ak,A.bR,A.bQ,A.Q,A.l,A.bP,A.bU,A.bX,A.aX,A.bZ,A.cN,A.aO,A.d9,A.al,A.k,A.c1,A.bo,A.cV,A.bG,A.aP,A.cW,A.u,A.c_,A.bL,A.d7,A.V,A.ch,A.N,A.ae,A.ah,A.bK,A.aR,A.au,A.c8,A.c9])
q(J.br,[J.bu,J.aA,J.aC,J.aB,J.aD,J.ab,J.Z])
q(J.aC,[J.O,J.n,A.af,A.aK])
q(J.O,[J.bH,J.a0,J.M])
r(J.bt,A.aN)
r(J.cb,J.n)
q(J.ab,[J.az,J.bv])
q(A.j,[A.ac,A.J,A.bw,A.bN,A.bJ,A.bV,A.bj,A.G,A.aS,A.bM,A.a_,A.bl])
q(A.W,[A.c5,A.c6,A.ct,A.dn,A.dq,A.cS,A.cR,A.dg,A.d5,A.cr,A.cq,A.cQ,A.cP,A.cI,A.cH,A.cy,A.cz,A.cA,A.cB,A.cC,A.cD,A.cE,A.cF])
q(A.c5,[A.dt,A.cT,A.cU,A.dc,A.db,A.cX,A.d1,A.d0,A.cZ,A.cY,A.d4,A.d3,A.d2,A.cs,A.cp,A.da,A.di,A.cO,A.dj,A.cj,A.ck,A.cl,A.cm,A.cG,A.cw,A.cx])
r(A.av,A.Y)
q(A.av,[A.aG,A.aw])
r(A.bY,A.am)
r(A.x,A.bY)
r(A.aa,A.bn)
r(A.aM,A.J)
q(A.ct,[A.co,A.at])
r(A.aF,A.aH)
r(A.aE,A.aF)
q(A.c6,[A.dp,A.dh,A.dk,A.d6,A.cd,A.ci,A.ca])
q(A.aK,[A.bx,A.ag])
q(A.ag,[A.b_,A.b1])
r(A.b0,A.b_)
r(A.aI,A.b0)
r(A.b2,A.b1)
r(A.aJ,A.b2)
q(A.aI,[A.by,A.bz])
q(A.aJ,[A.bA,A.bB,A.bC,A.bD,A.bE,A.aL,A.bF])
r(A.b8,A.bV)
r(A.b6,A.ak)
r(A.aW,A.b6)
r(A.B,A.aW)
r(A.bS,A.bR)
r(A.aV,A.bS)
r(A.aU,A.bQ)
r(A.bT,A.bU)
r(A.b4,A.aO)
r(A.aZ,A.b4)
q(A.G,[A.aj,A.bq])
r(A.aY,A.aG)
r(A.cu,A.ch)
q(A.cV,[A.ce,A.aQ,A.X])
s(A.b_,A.k)
s(A.b0,A.ay)
s(A.b1,A.k)
s(A.b2,A.ay)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{b:"int",t:"double",eM:"num",w:"String",eG:"bool",u:"Null",f:"List",d:"Object",iF:"Map",i:"JSObject"},mangledNames:{},types:["~()","u()","u(i)","~(~())","u(@)","~(@)","~(d,E)","I<~>()","@(@)","@(@,w)","@(w)","u(~())","u(@,E)","~(b,@)","u(d,E)","~(d?,d?)","b(b,b)","ae(i)","N(i)","w()","~(cJ)","~(aR,N)","b(b)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.x&&a.b(c.a)&&b.b(c.b)}}
A.h6(v.typeUniverse,JSON.parse('{"bH":"O","a0":"O","M":"O","iG":"af","bu":{"e":[]},"aA":{"e":[]},"aC":{"i":[]},"O":{"i":[]},"n":{"f":["1"],"i":[]},"bt":{"aN":[]},"cb":{"n":["1"],"f":["1"],"i":[]},"ab":{"t":[]},"az":{"t":[],"b":[],"e":[]},"bv":{"t":[],"e":[]},"Z":{"w":[],"e":[]},"ac":{"j":[]},"av":{"Y":["1"]},"aG":{"Y":["1"]},"aw":{"Y":["1"]},"aM":{"J":[],"j":[]},"bw":{"j":[]},"bN":{"j":[]},"b5":{"E":[]},"bJ":{"j":[]},"aF":{"aH":["1","2"]},"aE":{"aF":["1","2"],"aH":["1","2"]},"af":{"i":[],"e":[]},"aK":{"i":[]},"bx":{"i":[],"e":[]},"ag":{"v":["1"],"i":[]},"aI":{"k":["t"],"f":["t"],"v":["t"],"i":[]},"aJ":{"k":["b"],"f":["b"],"v":["b"],"i":[]},"by":{"k":["t"],"f":["t"],"v":["t"],"i":[],"e":[],"k.E":"t"},"bz":{"k":["t"],"f":["t"],"v":["t"],"i":[],"e":[],"k.E":"t"},"bA":{"k":["b"],"f":["b"],"v":["b"],"i":[],"e":[],"k.E":"b"},"bB":{"k":["b"],"f":["b"],"v":["b"],"i":[],"e":[],"k.E":"b"},"bC":{"k":["b"],"f":["b"],"v":["b"],"i":[],"e":[],"k.E":"b"},"bD":{"k":["b"],"f":["b"],"v":["b"],"i":[],"e":[],"k.E":"b"},"bE":{"cM":[],"k":["b"],"f":["b"],"v":["b"],"i":[],"e":[],"k.E":"b"},"aL":{"k":["b"],"f":["b"],"v":["b"],"i":[],"e":[],"k.E":"b"},"bF":{"k":["b"],"f":["b"],"v":["b"],"i":[],"e":[],"k.E":"b"},"bV":{"j":[]},"b8":{"J":[],"j":[]},"b7":{"cJ":[]},"A":{"j":[]},"B":{"ak":["1"]},"aU":{"bQ":["1"]},"l":{"I":["1"]},"aW":{"ak":["1"]},"b6":{"ak":["1"]},"aZ":{"aO":["1"]},"b4":{"aO":["1"]},"bj":{"j":[]},"J":{"j":[]},"G":{"j":[]},"aj":{"j":[]},"bq":{"j":[]},"aS":{"j":[]},"bM":{"j":[]},"a_":{"j":[]},"bl":{"j":[]},"bG":{"j":[]},"aP":{"j":[]},"aY":{"aG":["1"],"Y":["1"]},"c_":{"E":[]},"fq":{"f":["b"]},"fJ":{"f":["b"]},"fI":{"f":["b"]},"fo":{"f":["b"]},"fH":{"f":["b"]},"fp":{"f":["b"]},"cM":{"f":["b"]},"fl":{"f":["t"]},"fm":{"f":["t"]}}'))
A.h5(v.typeUniverse,JSON.parse('{"av":1,"bp":1,"ay":1,"bn":2,"ag":1,"aW":1,"bS":1,"bR":1,"b6":1,"bU":1,"bT":1,"bX":1,"aX":1,"bZ":1,"b4":1,"c1":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.c3
return{o:s("V"),Q:s("j"),Z:s("iD"),U:s("n<V>"),q:s("n<au>"),J:s("n<f<V>>"),G:s("n<f<au>>"),f:s("n<d>"),w:s("n<+(b,b)>"),s:s("n<w>"),x:s("n<cM>"),b:s("n<@>"),t:s("n<b>"),T:s("aA"),m:s("i"),g:s("M"),E:s("v<@>"),V:s("N"),j:s("f<@>"),r:s("ae"),P:s("u"),K:s("d"),L:s("iH"),F:s("+()"),l:s("E"),N:s("w"),p:s("cJ"),R:s("e"),_:s("J"),A:s("a0"),c:s("l<@>"),a:s("l<b>"),D:s("l<~>"),y:s("eG"),i:s("t"),z:s("@"),v:s("@(d)"),C:s("@(d,E)"),S:s("b"),O:s("I<u>?"),B:s("i?"),X:s("d?"),M:s("w?"),u:s("eG?"),I:s("t?"),W:s("b?"),Y:s("eM?"),n:s("eM"),H:s("~"),d:s("~(d)"),k:s("~(d,E)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.D=J.br.prototype
B.b=J.n.prototype
B.a=J.az.prototype
B.m=J.ab.prototype
B.E=J.Z.prototype
B.F=J.M.prototype
B.G=J.aC.prototype
B.o=J.bH.prototype
B.i=J.a0.prototype
B.p=new A.bp()
B.j=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.q=function() {
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
B.w=function(getTagFallback) {
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
B.r=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.v=function(hooks) {
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
B.u=function(hooks) {
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
B.t=function(hooks) {
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
B.k=function(hooks) { return hooks; }

B.x=new A.bG()
B.e=new A.cn()
B.c=new A.cN()
B.y=new A.d7()
B.z=new A.c_()
B.h=new A.X(0,"title")
B.A=new A.X(1,"setup")
B.l=new A.X(2,"play")
B.B=new A.X(3,"win")
B.C=new A.X(4,"lose")
B.dK=new A.aa([".","rgb(150, 150, 150)","1","rgb(236, 192, 109)","2","rgb(234, 118, 67)","3","rgb(235, 108, 108)","4","rgb(229, 63, 63)","5","rgb(107, 193, 235)","6","rgb(23, 128, 234)","7","rgb(193, 106, 236)","8","rgb(130, 22, 236)","*","orangered","\u263c","rgb(150, 150, 150)","\u25a0","rgb(200,200,200)"],A.c3("aa<w,w>"))
B.d5=s([126,129,165,129,189,153,129,126],t.t)
B.a7=s([126,255,219,255,195,231,255,126],t.t)
B.dC=s([108,254,254,254,124,56,16,0],t.t)
B.c2=s([16,56,124,254,124,56,16,0],t.t)
B.b0=s([56,124,56,254,254,124,56,124],t.t)
B.bc=s([16,16,56,124,254,124,56,124],t.t)
B.av=s([0,0,24,60,60,24,0,0],t.t)
B.ay=s([255,255,231,195,195,231,255,255],t.t)
B.aK=s([0,60,102,66,66,102,60,0],t.t)
B.cQ=s([255,195,153,189,189,153,195,255],t.t)
B.dB=s([15,7,15,125,204,204,204,120],t.t)
B.dA=s([60,102,102,102,60,24,126,24],t.t)
B.cN=s([63,51,63,48,48,112,240,224],t.t)
B.R=s([127,99,127,99,99,103,230,192],t.t)
B.W=s([153,90,60,231,231,60,90,153],t.t)
B.as=s([128,224,248,254,248,224,128,0],t.t)
B.by=s([2,14,62,254,62,14,2,0],t.t)
B.cg=s([24,60,126,24,24,126,60,24],t.t)
B.cc=s([102,102,102,102,102,0,102,0],t.t)
B.cm=s([127,219,219,123,27,27,27,0],t.t)
B.cn=s([62,99,56,108,108,56,204,120],t.t)
B.bM=s([0,0,0,0,126,126,126,0],t.t)
B.bP=s([24,60,126,24,126,60,24,255],t.t)
B.M=s([24,60,126,24,24,24,24,0],t.t)
B.da=s([24,24,24,24,126,60,24,0],t.t)
B.d3=s([0,24,12,254,12,24,0,0],t.t)
B.ap=s([0,48,96,254,96,48,0,0],t.t)
B.bU=s([0,0,192,192,192,254,0,0],t.t)
B.br=s([0,36,102,255,102,36,0,0],t.t)
B.a5=s([0,24,60,126,255,255,0,0],t.t)
B.bQ=s([0,255,255,126,60,24,0,0],t.t)
B.aW=s([0,0,0,0,0,0,0,0],t.t)
B.bz=s([48,120,120,48,48,0,48,0],t.t)
B.U=s([108,108,108,0,0,0,0,0],t.t)
B.aj=s([108,108,254,108,254,108,108,0],t.t)
B.bY=s([48,124,192,120,12,248,48,0],t.t)
B.L=s([0,198,204,24,48,102,198,0],t.t)
B.cz=s([56,108,56,118,220,204,118,0],t.t)
B.ai=s([96,96,192,0,0,0,0,0],t.t)
B.Q=s([24,48,96,96,96,48,24,0],t.t)
B.bv=s([96,48,24,24,24,48,96,0],t.t)
B.cq=s([0,102,60,255,60,102,0,0],t.t)
B.dJ=s([0,48,48,252,48,48,0,0],t.t)
B.c_=s([0,0,0,0,0,48,48,96],t.t)
B.bq=s([0,0,0,252,0,0,0,0],t.t)
B.ce=s([0,0,0,0,0,48,48,0],t.t)
B.a0=s([6,12,24,48,96,192,128,0],t.t)
B.b3=s([124,198,206,222,246,230,124,0],t.t)
B.ch=s([48,112,48,48,48,48,252,0],t.t)
B.bW=s([120,204,12,56,96,204,252,0],t.t)
B.dE=s([120,204,12,56,12,204,120,0],t.t)
B.bx=s([28,60,108,204,254,12,30,0],t.t)
B.d4=s([252,192,248,12,12,204,120,0],t.t)
B.dl=s([56,96,192,248,204,204,120,0],t.t)
B.bX=s([252,204,12,24,48,48,48,0],t.t)
B.ct=s([120,204,204,120,204,204,120,0],t.t)
B.ba=s([120,204,204,124,12,24,112,0],t.t)
B.cY=s([0,48,48,0,0,48,48,0],t.t)
B.aN=s([0,48,48,0,0,48,48,96],t.t)
B.bw=s([24,48,96,192,96,48,24,0],t.t)
B.bl=s([0,0,252,0,0,252,0,0],t.t)
B.ax=s([96,48,24,12,24,48,96,0],t.t)
B.an=s([120,204,12,24,48,0,48,0],t.t)
B.dh=s([124,198,222,222,222,192,120,0],t.t)
B.c8=s([48,120,204,204,252,204,204,0],t.t)
B.aH=s([252,102,102,124,102,102,252,0],t.t)
B.a9=s([60,102,192,192,192,102,60,0],t.t)
B.a1=s([248,108,102,102,102,108,248,0],t.t)
B.af=s([254,98,104,120,104,98,254,0],t.t)
B.ck=s([254,98,104,120,104,96,240,0],t.t)
B.al=s([60,102,192,192,206,102,62,0],t.t)
B.ao=s([204,204,204,252,204,204,204,0],t.t)
B.cI=s([120,48,48,48,48,48,120,0],t.t)
B.bK=s([30,12,12,12,204,204,120,0],t.t)
B.bC=s([230,102,108,120,108,102,230,0],t.t)
B.bB=s([240,96,96,96,98,102,254,0],t.t)
B.aI=s([198,238,254,254,214,198,198,0],t.t)
B.T=s([198,230,246,222,206,198,198,0],t.t)
B.cS=s([56,108,198,198,198,108,56,0],t.t)
B.bg=s([252,102,102,124,96,96,240,0],t.t)
B.cC=s([120,204,204,204,220,120,28,0],t.t)
B.K=s([252,102,102,124,108,102,230,0],t.t)
B.ac=s([120,204,224,112,28,204,120,0],t.t)
B.dv=s([252,180,48,48,48,48,120,0],t.t)
B.aF=s([204,204,204,204,204,204,252,0],t.t)
B.Y=s([204,204,204,204,204,120,48,0],t.t)
B.cL=s([198,198,198,214,254,238,198,0],t.t)
B.cF=s([198,198,108,56,56,108,198,0],t.t)
B.a_=s([204,204,204,120,48,48,120,0],t.t)
B.O=s([254,198,140,24,50,102,254,0],t.t)
B.bs=s([120,96,96,96,96,96,120,0],t.t)
B.cx=s([192,96,48,24,12,6,2,0],t.t)
B.bu=s([120,24,24,24,24,24,120,0],t.t)
B.dk=s([16,56,108,198,0,0,0,0],t.t)
B.J=s([0,0,0,0,0,0,0,255],t.t)
B.aG=s([48,48,24,0,0,0,0,0],t.t)
B.db=s([0,0,120,12,124,204,118,0],t.t)
B.cb=s([224,96,96,124,102,102,220,0],t.t)
B.cE=s([0,0,120,204,192,204,120,0],t.t)
B.b1=s([28,12,12,124,204,204,118,0],t.t)
B.dn=s([0,0,120,204,252,192,120,0],t.t)
B.aL=s([56,108,96,240,96,96,240,0],t.t)
B.cB=s([0,0,118,204,204,124,12,248],t.t)
B.aw=s([224,96,108,118,102,102,230,0],t.t)
B.cr=s([48,0,112,48,48,48,120,0],t.t)
B.bF=s([12,0,12,12,12,204,204,120],t.t)
B.b8=s([224,96,102,108,120,108,230,0],t.t)
B.bH=s([112,48,48,48,48,48,120,0],t.t)
B.bp=s([0,0,204,254,254,214,198,0],t.t)
B.bI=s([0,0,248,204,204,204,204,0],t.t)
B.bb=s([0,0,120,204,204,204,120,0],t.t)
B.ds=s([0,0,220,102,102,124,96,240],t.t)
B.dp=s([0,0,118,204,204,124,12,30],t.t)
B.bm=s([0,0,220,118,102,96,240,0],t.t)
B.cV=s([0,0,124,192,120,12,248,0],t.t)
B.cO=s([16,48,124,48,48,52,24,0],t.t)
B.c5=s([0,0,204,204,204,204,118,0],t.t)
B.b_=s([0,0,204,204,204,120,48,0],t.t)
B.bf=s([0,0,198,214,254,254,108,0],t.t)
B.bD=s([0,0,198,108,56,108,198,0],t.t)
B.dy=s([0,0,204,204,204,124,12,248],t.t)
B.d9=s([0,0,252,152,48,100,252,0],t.t)
B.b5=s([28,48,48,224,48,48,28,0],t.t)
B.cU=s([24,24,24,0,24,24,24,0],t.t)
B.aA=s([224,48,48,28,48,48,224,0],t.t)
B.dI=s([118,220,0,0,0,0,0,0],t.t)
B.aZ=s([0,16,56,108,198,198,254,0],t.t)
B.ar=s([120,204,192,204,120,24,12,120],t.t)
B.d7=s([0,204,0,204,204,204,126,0],t.t)
B.dx=s([28,0,120,204,252,192,120,0],t.t)
B.bZ=s([126,195,60,6,62,102,63,0],t.t)
B.ae=s([204,0,120,12,124,204,126,0],t.t)
B.b2=s([224,0,120,12,124,204,126,0],t.t)
B.a4=s([48,48,120,12,124,204,126,0],t.t)
B.bi=s([0,0,120,192,192,120,12,56],t.t)
B.dg=s([126,195,60,102,126,96,60,0],t.t)
B.aJ=s([204,0,120,204,252,192,120,0],t.t)
B.cW=s([224,0,120,204,252,192,120,0],t.t)
B.d8=s([204,0,112,48,48,48,120,0],t.t)
B.cM=s([124,198,56,24,24,24,60,0],t.t)
B.aV=s([224,0,112,48,48,48,120,0],t.t)
B.dD=s([198,56,108,198,254,198,198,0],t.t)
B.cT=s([48,48,0,120,204,252,204,0],t.t)
B.bA=s([28,0,252,96,120,96,252,0],t.t)
B.dw=s([0,0,127,12,127,204,127,0],t.t)
B.aO=s([62,108,204,254,204,204,206,0],t.t)
B.dq=s([120,204,0,120,204,204,120,0],t.t)
B.aa=s([0,204,0,120,204,204,120,0],t.t)
B.dF=s([0,224,0,120,204,204,120,0],t.t)
B.aM=s([120,204,0,204,204,204,126,0],t.t)
B.cP=s([0,224,0,204,204,204,126,0],t.t)
B.au=s([0,204,0,204,204,124,12,248],t.t)
B.ag=s([195,24,60,102,102,60,24,0],t.t)
B.d1=s([204,0,204,204,204,204,120,0],t.t)
B.V=s([24,24,126,192,192,126,24,24],t.t)
B.aD=s([56,108,100,240,96,230,252,0],t.t)
B.aX=s([204,204,120,252,48,252,48,48],t.t)
B.dc=s([248,204,204,250,198,207,198,199],t.t)
B.bL=s([14,27,24,60,24,24,216,112],t.t)
B.az=s([28,0,120,12,124,204,126,0],t.t)
B.ca=s([56,0,112,48,48,48,120,0],t.t)
B.aC=s([0,28,0,120,204,204,120,0],t.t)
B.cu=s([0,28,0,204,204,204,126,0],t.t)
B.aS=s([0,248,0,248,204,204,204,0],t.t)
B.cK=s([252,0,204,236,252,220,204,0],t.t)
B.ab=s([60,108,108,62,0,126,0,0],t.t)
B.c7=s([56,108,108,56,0,124,0,0],t.t)
B.d2=s([48,0,48,96,192,204,120,0],t.t)
B.aU=s([0,0,0,252,192,192,0,0],t.t)
B.aB=s([0,0,0,252,12,12,0,0],t.t)
B.cX=s([195,198,204,222,51,102,204,15],t.t)
B.at=s([195,198,204,219,55,111,207,3],t.t)
B.bO=s([24,24,0,24,24,24,24,0],t.t)
B.bN=s([0,51,102,204,102,51,0,0],t.t)
B.b7=s([0,204,102,51,102,204,0,0],t.t)
B.cw=s([34,136,34,136,34,136,34,136],t.t)
B.dr=s([85,170,85,170,85,170,85,170],t.t)
B.bG=s([219,119,219,238,219,119,219,238],t.t)
B.aY=s([24,24,24,24,24,24,24,24],t.t)
B.aT=s([24,24,24,24,248,24,24,24],t.t)
B.bV=s([24,24,248,24,248,24,24,24],t.t)
B.dH=s([54,54,54,54,246,54,54,54],t.t)
B.ci=s([0,0,0,0,254,54,54,54],t.t)
B.aP=s([0,0,248,24,248,24,24,24],t.t)
B.a8=s([54,54,246,6,246,54,54,54],t.t)
B.co=s([54,54,54,54,54,54,54,54],t.t)
B.c6=s([0,0,254,6,246,54,54,54],t.t)
B.cs=s([54,54,246,6,254,0,0,0],t.t)
B.am=s([54,54,54,54,254,0,0,0],t.t)
B.Z=s([24,24,248,24,248,0,0,0],t.t)
B.a3=s([0,0,0,0,248,24,24,24],t.t)
B.X=s([24,24,24,24,31,0,0,0],t.t)
B.bT=s([24,24,24,24,255,0,0,0],t.t)
B.bk=s([0,0,0,0,255,24,24,24],t.t)
B.d0=s([24,24,24,24,31,24,24,24],t.t)
B.bR=s([0,0,0,0,255,0,0,0],t.t)
B.cp=s([24,24,24,24,255,24,24,24],t.t)
B.cA=s([24,24,31,24,31,24,24,24],t.t)
B.b9=s([54,54,54,54,55,54,54,54],t.t)
B.dm=s([54,54,55,48,63,0,0,0],t.t)
B.df=s([0,0,63,48,55,54,54,54],t.t)
B.bE=s([54,54,247,0,255,0,0,0],t.t)
B.bt=s([0,0,255,0,247,54,54,54],t.t)
B.aR=s([54,54,55,48,55,54,54,54],t.t)
B.aQ=s([0,0,255,0,255,0,0,0],t.t)
B.dz=s([54,54,247,0,247,54,54,54],t.t)
B.cG=s([24,24,255,0,255,0,0,0],t.t)
B.H=s([54,54,54,54,255,0,0,0],t.t)
B.dt=s([0,0,255,0,255,24,24,24],t.t)
B.c0=s([0,0,0,0,255,54,54,54],t.t)
B.cj=s([54,54,54,54,63,0,0,0],t.t)
B.bo=s([24,24,31,24,31,0,0,0],t.t)
B.cd=s([0,0,31,24,31,24,24,24],t.t)
B.cD=s([0,0,0,0,63,54,54,54],t.t)
B.cJ=s([54,54,54,54,255,54,54,54],t.t)
B.bJ=s([24,24,255,24,255,24,24,24],t.t)
B.dd=s([24,24,24,24,248,0,0,0],t.t)
B.b4=s([0,0,0,0,31,24,24,24],t.t)
B.c1=s([255,255,255,255,255,255,255,255],t.t)
B.c4=s([0,0,0,0,255,255,255,255],t.t)
B.be=s([240,240,240,240,240,240,240,240],t.t)
B.cl=s([15,15,15,15,15,15,15,15],t.t)
B.d_=s([255,255,255,255,0,0,0,0],t.t)
B.dG=s([0,0,118,220,200,220,118,0],t.t)
B.di=s([0,120,204,248,204,248,192,192],t.t)
B.ak=s([0,252,204,192,192,192,192,0],t.t)
B.c3=s([0,254,108,108,108,108,108,0],t.t)
B.de=s([252,204,96,48,96,204,252,0],t.t)
B.bh=s([0,0,126,216,216,216,112,0],t.t)
B.bn=s([0,102,102,102,102,124,96,192],t.t)
B.cy=s([0,118,220,24,24,24,24,0],t.t)
B.ad=s([252,48,120,204,204,120,48,252],t.t)
B.aE=s([56,108,198,254,198,108,56,0],t.t)
B.ah=s([56,108,198,198,108,108,238,0],t.t)
B.I=s([28,48,24,124,204,204,120,0],t.t)
B.du=s([0,0,126,219,219,126,0,0],t.t)
B.bj=s([6,12,126,219,219,126,96,192],t.t)
B.a6=s([56,96,192,248,192,96,56,0],t.t)
B.cf=s([120,204,204,204,204,204,204,0],t.t)
B.cH=s([0,252,0,252,0,252,0,0],t.t)
B.a2=s([48,48,252,48,48,0,252,0],t.t)
B.b6=s([96,48,24,48,96,0,252,0],t.t)
B.cR=s([24,48,96,48,24,0,252,0],t.t)
B.bd=s([14,27,27,24,24,24,24,24],t.t)
B.d6=s([24,24,24,24,24,216,216,112],t.t)
B.c9=s([48,48,0,252,0,48,48,0],t.t)
B.N=s([0,118,220,0,118,220,0,0],t.t)
B.cv=s([56,108,108,56,0,0,0,0],t.t)
B.P=s([0,0,0,24,24,0,0,0],t.t)
B.dj=s([0,0,0,0,24,0,0,0],t.t)
B.S=s([15,12,12,12,236,108,60,28],t.t)
B.bS=s([120,108,108,108,108,0,0,0],t.t)
B.aq=s([112,24,48,96,120,0,0,0],t.t)
B.cZ=s([0,0,60,60,60,60,0,0],t.t)
B.dL=new A.aa(["\u263a",B.d5,"\u263b",B.a7,"\u2665",B.dC,"\u2666",B.c2,"\u2663",B.b0,"\u2660",B.bc,"\u2022",B.av,"\u25d8",B.ay,"\u25cb",B.aK,"\u25d9",B.cQ,"\u2642",B.dB,"\u2640",B.dA,"\u266a",B.cN,"\u266b",B.R,"\u263c",B.W,"\u25ba",B.as,"\u25c4",B.by,"\u2195",B.cg,"\u203c",B.cc,"\xb6",B.cm,"\xa7",B.cn,"\u25ac",B.bM,"\u21a8",B.bP,"\u2191",B.M,"\u2193",B.da,"\u2192",B.d3,"\u2190",B.ap,"\u221f",B.bU,"\u2194",B.br,"\u25b2",B.a5,"\u25bc",B.bQ," ",B.aW,"!",B.bz,'"',B.U,"#",B.aj,"$",B.bY,"%",B.L,"&",B.cz,"'",B.ai,"(",B.Q,")",B.bv,"*",B.cq,"+",B.dJ,",",B.c_,"-",B.bq,".",B.ce,"/",B.a0,"0",B.b3,"1",B.ch,"2",B.bW,"3",B.dE,"4",B.bx,"5",B.d4,"6",B.dl,"7",B.bX,"8",B.ct,"9",B.ba,":",B.cY,";",B.aN,"<",B.bw,"=",B.bl,">",B.ax,"?",B.an,"@",B.dh,"A",B.c8,"B",B.aH,"C",B.a9,"D",B.a1,"E",B.af,"F",B.ck,"G",B.al,"H",B.ao,"I",B.cI,"J",B.bK,"K",B.bC,"L",B.bB,"M",B.aI,"N",B.T,"O",B.cS,"P",B.bg,"Q",B.cC,"R",B.K,"S",B.ac,"T",B.dv,"U",B.aF,"V",B.Y,"W",B.cL,"X",B.cF,"Y",B.a_,"Z",B.O,"[",B.bs,"\\",B.cx,"]",B.bu,"^",B.dk,"_",B.J,"`",B.aG,"a",B.db,"b",B.cb,"c",B.cE,"d",B.b1,"e",B.dn,"f",B.aL,"g",B.cB,"h",B.aw,"i",B.cr,"j",B.bF,"k",B.b8,"l",B.bH,"m",B.bp,"n",B.bI,"o",B.bb,"p",B.ds,"q",B.dp,"r",B.bm,"s",B.cV,"t",B.cO,"u",B.c5,"v",B.b_,"w",B.bf,"x",B.bD,"y",B.dy,"z",B.d9,"{",B.b5,"|",B.cU,"}",B.aA,"~",B.dI,"\u2302",B.aZ,"\xc7",B.ar,"\xfc",B.d7,"\xe9",B.dx,"\xe2",B.bZ,"\xe4",B.ae,"\xe0",B.b2,"\xe5",B.a4,"\xe7",B.bi,"\xea",B.dg,"\xeb",B.aJ,"\xe8",B.cW,"\xef",B.d8,"\xee",B.cM,"\xec",B.aV,"\xc4",B.dD,"\xc5",B.cT,"\xc9",B.bA,"\xe6",B.dw,"\xc6",B.aO,"\xf4",B.dq,"\xf6",B.aa,"\xf2",B.dF,"\xfb",B.aM,"\xf9",B.cP,"\xff",B.au,"\xd6",B.ag,"\xdc",B.d1,"\xa2",B.V,"\xa3",B.aD,"\xa5",B.aX,"\u20a7",B.dc,"\u0192",B.bL,"\xe1",B.az,"\xed",B.ca,"\xf3",B.aC,"\xfa",B.cu,"\xf1",B.aS,"\xd1",B.cK,"\xaa",B.ab,"\xba",B.c7,"\xbf",B.d2,"\u2310",B.aU,"\xac",B.aB,"\xbd",B.cX,"\xbc",B.at,"\xa1",B.bO,"\xab",B.bN,"\xbb",B.b7,"\u2591",B.cw,"\u2592",B.dr,"\u2593",B.bG,"\u2502",B.aY,"\u2524",B.aT,"\u2561",B.bV,"\u2562",B.dH,"\u2556",B.ci,"\u2555",B.aP,"\u2563",B.a8,"\u2551",B.co,"\u2557",B.c6,"\u255d",B.cs,"\u255c",B.am,"\u255b",B.Z,"\u2510",B.a3,"\u2514",B.X,"\u2534",B.bT,"\u252c",B.bk,"\u251c",B.d0,"\u2500",B.bR,"\u253c",B.cp,"\u255e",B.cA,"\u255f",B.b9,"\u255a",B.dm,"\u2554",B.df,"\u2569",B.bE,"\u2566",B.bt,"\u2560",B.aR,"\u2550",B.aQ,"\u256c",B.dz,"\u2567",B.cG,"\u2568",B.H,"\u2564",B.dt,"\u2565",B.c0,"\u2559",B.cj,"\u2558",B.bo,"\u2552",B.cd,"\u2553",B.cD,"\u256b",B.cJ,"\u256a",B.bJ,"\u2518",B.dd,"\u250c",B.b4,"\u2588",B.c1,"\u2584",B.c4,"\u258c",B.be,"\u2590",B.cl,"\u2580",B.d_,"\u03b1",B.dG,"\xdf",B.di,"\u0393",B.ak,"\u03c0",B.c3,"\u03a3",B.de,"\u03c3",B.bh,"\xb5",B.bn,"\u03c4",B.cy,"\u03a6",B.ad,"\u0398",B.aE,"\u03a9",B.ah,"\u03b4",B.I,"\u221e",B.du,"\u03c6",B.bj,"\u03b5",B.a6,"\u2229",B.cf,"\u2261",B.cH,"\xb1",B.a2,"\u2265",B.b6,"\u2264",B.cR,"\u2320",B.bd,"\u2321",B.d6,"\xf7",B.c9,"\u2248",B.N,"\xb0",B.cv,"\u2219",B.P,"\xb7",B.dj,"\u221a",B.S,"\u207f",B.bS,"\xb2",B.aq,"\u25a0",B.cZ],A.c3("aa<w,f<b>>"))
B.n=new A.ce(0,"replace")
B.d=new A.aQ(0,"ready")
B.dM=new A.aQ(2,"awaitingString")
B.f=new A.aQ(3,"awaitingMouseClick")
B.dN=A.F("iz")
B.dO=A.F("iA")
B.dP=A.F("fl")
B.dQ=A.F("fm")
B.dR=A.F("fo")
B.dS=A.F("fp")
B.dT=A.F("fq")
B.dU=A.F("d")
B.dV=A.F("fH")
B.dW=A.F("cM")
B.dX=A.F("fI")
B.dY=A.F("fJ")})();(function staticFields(){$.d8=null
$.z=A.r([],t.f)
$.eb=null
$.e5=null
$.e4=null
$.eL=null
$.eE=null
$.eO=null
$.dl=null
$.dr=null
$.dV=null
$.b3=A.r([],A.c3("n<f<d>?>"))
$.ao=null
$.be=null
$.bf=null
$.dO=!1
$.h=B.c})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"iC","eS",()=>A.dm("_$dart_dartClosure"))
s($,"iB","du",()=>A.dm("_$dart_dartClosure_dartJSInterop"))
s($,"j_","f6",()=>B.c.a3(B.c,new A.dt()))
s($,"iY","f5",()=>A.r([new J.bt()],A.c3("n<aN>")))
s($,"iL","eV",()=>A.K(A.cL({
toString:function(){return"$receiver$"}})))
s($,"iM","eW",()=>A.K(A.cL({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"iN","eX",()=>A.K(A.cL(null)))
s($,"iO","eY",()=>A.K(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"iR","f0",()=>A.K(A.cL(void 0)))
s($,"iS","f1",()=>A.K(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"iQ","f_",()=>A.K(A.eg(null)))
s($,"iP","eZ",()=>A.K(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"iU","f3",()=>A.K(A.eg(void 0)))
s($,"iT","f2",()=>A.K(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"iV","e_",()=>A.fK())
s($,"iE","dv",()=>$.f6())
s($,"iW","f4",()=>A.h9())
s($,"iX","dw",()=>A.dY(B.dU))
s($,"iK","eU",()=>A.dC(8,0,t.S))
s($,"iJ","eT",()=>A.dC(8,255,t.S))
s($,"j0","f7",()=>B.y)})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.af,SharedArrayBuffer:A.af,ArrayBufferView:A.aK,DataView:A.bx,Float32Array:A.by,Float64Array:A.bz,Int16Array:A.bA,Int32Array:A.bB,Int8Array:A.bC,Uint16Array:A.bD,Uint32Array:A.bE,Uint8ClampedArray:A.aL,CanvasPixelArray:A.aL,Uint8Array:A.bF})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.ag.$nativeSuperclassTag="ArrayBufferView"
A.b_.$nativeSuperclassTag="ArrayBufferView"
A.b0.$nativeSuperclassTag="ArrayBufferView"
A.aI.$nativeSuperclassTag="ArrayBufferView"
A.b1.$nativeSuperclassTag="ArrayBufferView"
A.b2.$nativeSuperclassTag="ArrayBufferView"
A.aJ.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.it
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=mine.js.map
