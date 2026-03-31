var ee=typeof document<"u";function nt(e){return e.charAt(0).toUpperCase()+e.slice(1)}function M(e){return ee&&e?e.bind(A):void 0}function Se(e,s,r){e.forEach(a=>{let l=s+nt(a);r[l]=ce(a)})}var ce=e=>function(s,...r){if(!arguments.length)return{tagName:e,props:{},children:[]};let a=s&&typeof s=="object"&&"value"in s&&"subscribe"in s,l=s&&typeof s=="object"&&"tagName"in s,c=typeof s!="object"||Array.isArray(s)||s===null||a||l,n=c?{}:s,d=c?[s,...r]:r;if(!d.length)return{tagName:e,props:n,children:[]};let y=[];for(let p=0,g=d.length;p<g;p++){let i=d[p];if(!(i==null||i===!1))if(Array.isArray(i))for(let b=0,f=i.length;b<f;b++){let m=i[b];m!=null&&m!==!1&&y.push(m)}else y.push(i)}return{tagName:e,props:n,children:y}},ot=["html","head","body","title","base","link","meta","style","address","article","aside","footer","header","h1","h2","h3","h4","h5","h6","main","nav","section","blockquote","dd","div","dl","dt","figcaption","figure","hr","li","ol","p","pre","ul","a","abbr","b","bdi","bdo","br","cite","code","data","dfn","em","i","kbd","mark","q","rp","rt","ruby","s","samp","small","span","strong","sub","sup","time","u","wbr","area","audio","img","map","track","video","embed","iframe","object","param","picture","portal","source","canvas","noscript","script","del","ins","caption","col","colgroup","table","tbody","td","tfoot","th","thead","tr","button","datalist","fieldset","form","input","label","legend","meter","optgroup","option","output","progress","select","textarea","details","dialog","menu","summary","slot","template"],it=["svg","circle","rect","path","line","polyline","polygon","ellipse","g","text","tspan","defs","linearGradient","radialGradient","stop","pattern","mask","clipPath","use","symbol","marker","image","foreignObject","animate","animateTransform","animateMotion","set","filter","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feGaussianBlur","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence"],lt=["math","mi","mn","mo","ms","mtext","mrow","mfrac","msqrt","mroot","msub","msup"],Q={};ot.forEach(e=>{Q[e]=ce(e)});Se(it,"svg",Q);Se(lt,"math",Q);Q.varElement=ce("var");var{html:Tt,head:Ct,body:Lt,title:Nt,base:$t,link:Pt,meta:At,style:Dt,address:It,article:Et,aside:Mt,footer:ke,header:Te,h1:D,h2:k,h3:w,h4:Vt,h5:Ht,h6:Bt,main:Ce,nav:Le,section:Rt,blockquote:Ut,dd:Ot,div:o,dl:Gt,dt:jt,figcaption:Ft,figure:qt,hr:Wt,li:$,ol:Jt,p:h,pre:Ne,ul:I,a:S,abbr:zt,b:_t,bdi:Qt,bdo:Yt,br:Kt,cite:Zt,code:E,data:Xt,dfn:es,em:ts,i:ss,kbd:rs,mark:as,q:ns,rp:os,rt:is,ruby:ls,s:cs,samp:ds,small:ps,span:C,strong:hs,sub:us,sup:ms,time:gs,u:fs,wbr:bs,area:ys,audio:ws,img:vs,map:xs,track:Ss,video:ks,embed:Ts,iframe:Cs,object:Ls,param:Ns,picture:$s,portal:Ps,source:As,canvas:Ds,noscript:Is,script:Es,del:Ms,ins:Vs,caption:Hs,col:Bs,colgroup:Rs,table:Us,tbody:Os,td:Gs,tfoot:js,th:Fs,thead:qs,tr:Ws,button:V,datalist:Js,fieldset:zs,form:_s,input:Qs,label:Ys,legend:Ks,meter:Zs,optgroup:Xs,option:er,output:tr,progress:sr,select:rr,textarea:ar,details:nr,dialog:or,menu:ir,summary:lr,slot:cr,template:dr,svgSvg:pr,svgCircle:hr,svgRect:ur,svgPath:mr,svgLine:gr,svgPolyline:fr,svgPolygon:br,svgEllipse:yr,svgG:wr,svgText:vr,svgTspan:xr,svgDefs:Sr,svgLinearGradient:kr,svgRadialGradient:Tr,svgStop:Cr,svgPattern:Lr,svgMask:Nr,svgClipPath:$r,svgUse:Pr,svgSymbol:Ar,svgMarker:Dr,svgImage:Ir,svgForeignObject:Er,svgAnimate:Mr,svgAnimateTransform:Vr,svgAnimateMotion:Hr,svgSet:Br,svgFilter:Rr,svgFeBlend:Ur,svgFeColorMatrix:Or,svgFeComponentTransfer:Gr,svgFeComposite:jr,svgFeConvolveMatrix:Fr,svgFeDiffuseLighting:qr,svgFeDisplacementMap:Wr,svgFeFlood:Jr,svgFeGaussianBlur:zr,svgFeMorphology:_r,svgFeOffset:Qr,svgFeSpecularLighting:Yr,svgFeTile:Kr,svgFeTurbulence:Zr,mathMath:Xr,mathMi:ea,mathMn:ta,mathMo:sa,mathMs:ra,mathMtext:aa,mathMrow:na,mathMfrac:oa,mathMsqrt:ia,mathMroot:la,mathMsub:ca,mathMsup:da,varElement:pa}=Q;var A=ee?document:void 0,ha=M(A?.querySelector),ua=M(A?.querySelectorAll),ma=M(A?.createElement),ga=ee?A.createElementNS.bind(A,"http://www.w3.org/2000/svg"):void 0,fa=ee?A.createElementNS.bind(A,"http://www.w3.org/1998/Math/MathML"):void 0,ba=M(A?.createDocumentFragment),ya=M(A?.createTextNode),wa=M(A?.createComment),va=M(A?.getElementById),xa=M(A?.getElementsByClassName),Sa=M(A?.getElementsByTagName),ka=M(A?.getElementsByName);function de(e){return typeof e=="string"?document.getElementById(e.replace("#","")):e}function pe(e,s){if(!e)throw new Error(`Element not found: ${s}`);return e}function O(e){return e==null||e===!1}function $e(e){return e==null||typeof e=="boolean"||typeof e=="string"||typeof e=="number"}var ct=class{constructor(){this.elementCache=new WeakMap,this.reactiveNodes=new Map}createElement(e,s={},r=[]){return{tagName:e,props:s,children:r}}renderToDOM(e,s){if(e==null||e===!1)return;if(typeof e!="object"){s.appendChild(document.createTextNode(String(e)));return}let{tagName:r,props:a,children:l}=e,c=r==="svg"||r[0]==="s"&&r[1]==="v"&&r[2]==="g"||s.namespaceURI==="http://www.w3.org/2000/svg",n=c?document.createElementNS("http://www.w3.org/2000/svg",r.replace("svg","").toLowerCase()||r):document.createElement(r);for(let p in a){let g=a[p];if(g==null||g===!1)continue;let i=p.charCodeAt(0);if(i===99&&(p.length<6||p[5]==="N")){let b=Array.isArray(g)?g.join(" "):g;c?n.setAttribute("class",b):n.className=b}else if(i===115&&p.length===5)if(typeof g=="string")n.style.cssText=g;else{let b=n.style;for(let f in g)b[f]=g[f]}else i===111&&p.charCodeAt(1)===110?n[p.toLowerCase()]=g:i===100&&p.length>20?n.innerHTML=g.e:i===114&&p.length===3?setTimeout(()=>{typeof g=="function"?g(n):g.current=n},0):n.setAttribute(p,g===!0?"":String(g))}let d=l.length;if(!d){s.appendChild(n);return}let y=p=>{for(let g=0;g<d;g++){let i=l[g];if(!O(i))if(Array.isArray(i))for(let b=0,f=i.length;b<f;b++){let m=i[b];!O(m)&&this.renderToDOM(m,p)}else this.renderToDOM(i,p)}};if(d>30){let p=document.createDocumentFragment();y(p),n.appendChild(p)}else y(n);s.appendChild(n)}render(e,s){let r=pe(de(e),e);if(r.innerHTML="",s.children&&s.children.length>500){let a=document.createDocumentFragment();this.renderToDOM(s,a),r.appendChild(a)}else this.renderToDOM(s,r);return r}batchRender(e,s){let r=pe(de(e),e),a=s.length;if(a>3e3){let l=document.createDocumentFragment(),c=0,n=1500,d=()=>{let y=Math.min(c+n,a);for(let p=c;p<y;p++)this.renderToDOM(s[p],l);c=y,c>=a?r.appendChild(l):requestAnimationFrame(d)};d()}else{let l=document.createDocumentFragment();for(let c=0;c<a;c++)this.renderToDOM(s[c],l);r.appendChild(l)}return r}renderChunked(e,s,r=5e3,a){let l=pe(de(e),e),c=s.length,n=0,d=()=>{let y=Math.min(n+r,c),p=document.createDocumentFragment();for(let g=n;g<y;g++)this.renderToDOM(s[g],p);l.appendChild(p),n=y,a&&a(n,c),n<c&&requestAnimationFrame(d)};return requestAnimationFrame(d),l}renderToHead(...e){let s=document.head;if(s)for(let r of e.flat())r&&this.renderToDOM(r,s);return s}addStyle(e){let s=document.createElement("style");return s.textContent=e,document.head.appendChild(s)}addMeta(e){let s=document.createElement("meta");for(let r in e)s.setAttribute(r,e[r]);return document.head.appendChild(s)}addLink(e){let s=document.createElement("link");for(let r in e)s.setAttribute(r,e[r]);return document.head.appendChild(s)}setTitle(e){return document.title=e}createState(e,s={}){let r=e,a=new Set,l=null,{throttle:c=0,deep:n=!1}=s,d=()=>a.forEach(p=>p(r)),y=()=>{c>0?l||(l=setTimeout(()=>{l=null,d()},c)):d()};return{get value(){return r},set value(p){(n?JSON.stringify(r)!==JSON.stringify(p):r!==p)&&(r=p,y())},subscribe(p){return a.add(p),()=>a.delete(p)},destroy(){a.clear(),l&&clearTimeout(l)}}}computed(e,s){let r=e.map(l=>l.value),a=this.createState(s(...r));return e.forEach((l,c)=>{l.subscribe(n=>{r[c]=n,a.value=s(...r)})}),a}effect(e){e()}createVirtualList(e,s,r,a=50,l=5){let c=e.clientHeight,n=s.length*a,d=0,y=()=>{let i=Math.max(0,Math.floor(d/a)-l),b=Math.min(s.length,Math.ceil((d+c)/a)+l);return{start:i,end:b}},p=()=>{let{start:i,end:b}=y(),f=document.createElement("div");f.style.cssText=`height:${n}px;position:relative`;for(let m=i;m<b;m++){let u=document.createElement("div");u.style.cssText=`position:absolute;top:${m*a}px;height:${a}px;width:100%`,this.renderToDOM(r(s[m],m),u),f.appendChild(u)}e.innerHTML="",e.appendChild(f)},g=()=>{d=e.scrollTop,requestAnimationFrame(p)};return e.addEventListener("scroll",g),p(),{render:p,destroy:()=>{e.removeEventListener("scroll",g),e.innerHTML=""}}}lazy(e){let s=null,r=!1;return async(...a)=>(!s&&!r&&(r=!0,s=await e(),r=!1),s?s(...a):{tagName:"div",props:{class:"loading"},children:["Loading..."]})}cleanupUnusedElements(e){let s=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT),r=[];for(;s.nextNode();){let a=s.currentNode;a.id&&a.id.startsWith("r")&&!this.elementCache.has(a)&&r.push(a)}return r.forEach(a=>a.remove()),r.length}renderToString(e,s={}){let{pretty:r=!1,indent:a=0}=s,l=r?"  ".repeat(a):"",c=r?`
`:"",n=this.resolveStateValue(e);if(n=this.unwrapReactive(n),Array.isArray(n))return n.map(f=>this.renderToString(f,s)).join("");if(typeof n!="object"||n===null)return n==null||n===!1?"":this.escapeHtml(String(n));let{tagName:d,props:y,children:p}=n,g=this.isSelfClosingTag(d),i=`${l}<${d}`,b=this.propsToAttributes(y);if(b&&(i+=` ${b}`),g)return i+=` />${c}`,i;if(i+=">",y.dangerouslySetInnerHTML)return i+=y.dangerouslySetInnerHTML.e,i+=`</${d}>${c}`,i;if(p&&p.length>0){let f=p.map(u=>{let x=this.resolveStateValue(u);return this.unwrapReactive(x)}),m=f.some(u=>typeof u=="object"&&u!==null&&!Array.isArray(u)&&"tagName"in u);if(r&&m){i+=c;for(let u of f)if(!O(u))if(Array.isArray(u))for(let x of u)O(x)||(i+=this.renderToString(x,{pretty:r,indent:a+1}));else i+=this.renderToString(u,{pretty:r,indent:a+1});i+=l}else for(let u of f)if(!O(u))if(Array.isArray(u))for(let x of u)O(x)||(i+=this.renderToString(x,{pretty:!1,indent:0}));else i+=this.renderToString(u,{pretty:!1,indent:0})}return i+=`</${d}>${c}`,i}resolveStateValue(e){return e&&typeof e=="object"&&"value"in e&&"subscribe"in e?e.value:e}isReactiveWrapper(e){return!e||typeof e!="object"||!e.tagName?!1:e.tagName==="span"&&e.props?.id&&typeof e.props.id=="string"&&e.props.id.match(/^r[a-z0-9]{9}$/)}unwrapReactive(e){if(!this.isReactiveWrapper(e))return e;let s=e.children;if(!s||s.length===0)return"";if(s.length===1){let r=s[0];if(r&&typeof r=="object"&&r.tagName==="span"){let a=r.props,l=!a||Object.keys(a).length===0,c=r.children&&r.children.length===1&&typeof r.children[0]=="string";if(l&&c)return r.children[0]}return this.unwrapReactive(r)}return s.map(r=>this.unwrapReactive(r))}escapeHtml(e){let s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"};return e.replace(/[&<>"']/g,r=>s[r])}isSelfClosingTag(e){return new Set(["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"]).has(e.toLowerCase())}propsToAttributes(e){let s=[];for(let r in e){if(r==="children"||r==="dangerouslySetInnerHTML"||r==="ref")continue;let a=e[r];if(a=this.resolveStateValue(a),!(a==null||a===!1)&&!(r.startsWith("on")&&typeof a=="function")){if(r==="className"||r==="class"){let l=Array.isArray(a)?a.join(" "):a;l&&s.push(`class="${this.escapeHtml(String(l))}"`);continue}if(r==="style"){let l=this.styleToString(a);l&&s.push(`style="${this.escapeHtml(l)}"`);continue}if(a===!0){s.push(r);continue}s.push(`${r}="${this.escapeHtml(String(a))}"`)}}return s.join(" ")}styleToString(e){if(typeof e=="string")return e;if(typeof e=="object"&&e!==null){let s=[];for(let r in e){let a=r.replace(/([A-Z])/g,"-$1").toLowerCase();s.push(`${a}:${e[r]}`)}return s.join(";")}return""}isState(e){return e&&typeof e=="object"&&"value"in e&&"subscribe"in e&&typeof e.subscribe=="function"}createReactiveChild(e,s){let r=s(e.value);if(typeof window<"u"&&typeof document<"u"){let a={node:null,renderFn:s};this.reactiveNodes.set(e,a),e.subscribe(()=>{if(a.node&&a.node.parentNode){let l=s(e.value);a.node.textContent=String(l??"")}})}return r}jsonToVNode(e){if(this.isState(e))return this.createReactiveChild(e,n=>n);if($e(e))return e;let{tag:s,attributes:r={},children:a}=e,l={};for(let n in r){let d=r[n];n==="class"?l.className=this.isState(d)?d.value:d:l[n]=this.isState(d)?d.value:d}let c=[];if(a!=null)if(Array.isArray(a))for(let n of a)if(this.isState(n))c.push(this.createReactiveChild(n,d=>d));else{let d=this.jsonToVNode(n);d!=null&&d!==!1&&c.push(d)}else if(this.isState(a))c.push(this.createReactiveChild(a,n=>n));else if(typeof a=="object"&&"tag"in a){let n=this.jsonToVNode(a);n!=null&&n!==!1&&c.push(n)}else c.push(a);return{tagName:s,props:l,children:c}}vNodeJsonToVNode(e){if(this.isState(e))return this.createReactiveChild(e,n=>n);if($e(e))return e;let{tagName:s,props:r={},children:a=[]}=e,l={};for(let n in r){let d=r[n];l[n]=this.isState(d)?d.value:d}let c=[];for(let n of a)if(this.isState(n))c.push(this.createReactiveChild(n,d=>d));else{let d=this.vNodeJsonToVNode(n);d!=null&&d!==!1&&c.push(d)}return{tagName:s,props:l,children:c}}renderJson(e,s){let r=this.jsonToVNode(s);if(!r||typeof r!="object"||!("tagName"in r))throw new Error("Invalid JSON structure");return this.render(e,r)}renderVNode(e,s){let r=this.vNodeJsonToVNode(s);if(!r||typeof r!="object"||!("tagName"in r))throw new Error("Invalid VNode JSON structure");return this.render(e,r)}renderJsonToString(e,s={}){let r=this.jsonToVNode(e);return this.renderToString(r,s)}renderVNodeToString(e,s={}){let r=this.vNodeJsonToVNode(e);return this.renderToString(r,s)}renderToHTMLDocument(e,s={}){let{title:r="",meta:a=[],links:l=[],scripts:c=[],styles:n=[],lang:d="en",head:y="",bodyAttrs:p={},pretty:g=!1}=s,i=g?`
`:"",b=g?"  ":"",f=g?"    ":"",m=`<!DOCTYPE html>${i}<html lang="${d}">${i}${b}<head>${i}${f}<meta charset="UTF-8">${i}${f}<meta name="viewport" content="width=device-width, initial-scale=1.0">${i}`;r&&(m+=`${f}<title>${this.escapeHtml(r)}</title>${i}`);for(let u of a){m+=`${f}<meta`;for(let x in u)m+=` ${x}="${this.escapeHtml(u[x])}"`;m+=`>${i}`}for(let u of l){m+=`${f}<link`;for(let x in u)m+=` ${x}="${this.escapeHtml(u[x])}"`;m+=`>${i}`}for(let u of n)u.href?m+=`${f}<link rel="stylesheet" href="${this.escapeHtml(u.href)}">${i}`:u.content&&(m+=`${f}<style>${u.content}</style>${i}`);y&&(m+=y+i),m+=`${b}</head>${i}${b}<body`;for(let u in p)m+=` ${u}="${this.escapeHtml(p[u])}"`;m+=`>${i}`,m+=this.renderToString(e,{pretty:g,indent:2});for(let u of c)m+=`${f}<script`,u.type&&(m+=` type="${this.escapeHtml(u.type)}"`),u.async&&(m+=" async"),u.defer&&(m+=" defer"),u.src?m+=` src="${this.escapeHtml(u.src)}"><\/script>${i}`:u.content?m+=`>${u.content}<\/script>${i}`:m+=`><\/script>${i}`;return m+=`${b}</body>${i}</html>`,m}getElementCache(){return this.elementCache}},te=new ct,dt=te.render.bind(te),Ca=te.renderToString.bind(te),Pe=dt;function he(e){return typeof e=="string"?document.getElementById(e.replace("#","")):e}function ue(e,s){if(!e)throw new Error(`Element not found: ${s}`);return e}function G(e){return e==null||e===!1}function Ae(e){return e==null||typeof e=="boolean"||typeof e=="string"||typeof e=="number"}var pt=class{constructor(){this.elementCache=new WeakMap,this.reactiveNodes=new Map}createElement(e,s={},r=[]){return{tagName:e,props:s,children:r}}renderToDOM(e,s){if(e==null||e===!1)return;if(typeof e!="object"){s.appendChild(document.createTextNode(String(e)));return}let{tagName:r,props:a,children:l}=e,c=r==="svg"||r[0]==="s"&&r[1]==="v"&&r[2]==="g"||s.namespaceURI==="http://www.w3.org/2000/svg",n=c?document.createElementNS("http://www.w3.org/2000/svg",r.replace("svg","").toLowerCase()||r):document.createElement(r);for(let p in a){let g=a[p];if(g==null||g===!1)continue;let i=p.charCodeAt(0);if(i===99&&(p.length<6||p[5]==="N")){let b=Array.isArray(g)?g.join(" "):g;c?n.setAttribute("class",b):n.className=b}else if(i===115&&p.length===5)if(typeof g=="string")n.style.cssText=g;else{let b=n.style;for(let f in g)b[f]=g[f]}else i===111&&p.charCodeAt(1)===110?n[p.toLowerCase()]=g:i===100&&p.length>20?n.innerHTML=g.e:i===114&&p.length===3?setTimeout(()=>{typeof g=="function"?g(n):g.current=n},0):n.setAttribute(p,g===!0?"":String(g))}let d=l.length;if(!d){s.appendChild(n);return}let y=p=>{for(let g=0;g<d;g++){let i=l[g];if(!G(i))if(Array.isArray(i))for(let b=0,f=i.length;b<f;b++){let m=i[b];!G(m)&&this.renderToDOM(m,p)}else this.renderToDOM(i,p)}};if(d>30){let p=document.createDocumentFragment();y(p),n.appendChild(p)}else y(n);s.appendChild(n)}render(e,s){let r=ue(he(e),e);if(r.innerHTML="",s.children&&s.children.length>500){let a=document.createDocumentFragment();this.renderToDOM(s,a),r.appendChild(a)}else this.renderToDOM(s,r);return r}batchRender(e,s){let r=ue(he(e),e),a=s.length;if(a>3e3){let l=document.createDocumentFragment(),c=0,n=1500,d=()=>{let y=Math.min(c+n,a);for(let p=c;p<y;p++)this.renderToDOM(s[p],l);c=y,c>=a?r.appendChild(l):requestAnimationFrame(d)};d()}else{let l=document.createDocumentFragment();for(let c=0;c<a;c++)this.renderToDOM(s[c],l);r.appendChild(l)}return r}renderChunked(e,s,r=5e3,a){let l=ue(he(e),e),c=s.length,n=0,d=()=>{let y=Math.min(n+r,c),p=document.createDocumentFragment();for(let g=n;g<y;g++)this.renderToDOM(s[g],p);l.appendChild(p),n=y,a&&a(n,c),n<c&&requestAnimationFrame(d)};return requestAnimationFrame(d),l}renderToHead(...e){let s=document.head;if(s)for(let r of e.flat())r&&this.renderToDOM(r,s);return s}addStyle(e){let s=document.createElement("style");return s.textContent=e,document.head.appendChild(s)}addMeta(e){let s=document.createElement("meta");for(let r in e)s.setAttribute(r,e[r]);return document.head.appendChild(s)}addLink(e){let s=document.createElement("link");for(let r in e)s.setAttribute(r,e[r]);return document.head.appendChild(s)}setTitle(e){return document.title=e}createState(e,s={}){let r=e,a=new Set,l=null,{throttle:c=0,deep:n=!1}=s,d=()=>a.forEach(p=>p(r)),y=()=>{c>0?l||(l=setTimeout(()=>{l=null,d()},c)):d()};return{get value(){return r},set value(p){(n?JSON.stringify(r)!==JSON.stringify(p):r!==p)&&(r=p,y())},subscribe(p){return a.add(p),()=>a.delete(p)},destroy(){a.clear(),l&&clearTimeout(l)}}}computed(e,s){let r=e.map(l=>l.value),a=this.createState(s(...r));return e.forEach((l,c)=>{l.subscribe(n=>{r[c]=n,a.value=s(...r)})}),a}effect(e){e()}createVirtualList(e,s,r,a=50,l=5){let c=e.clientHeight,n=s.length*a,d=0,y=()=>{let i=Math.max(0,Math.floor(d/a)-l),b=Math.min(s.length,Math.ceil((d+c)/a)+l);return{start:i,end:b}},p=()=>{let{start:i,end:b}=y(),f=document.createElement("div");f.style.cssText=`height:${n}px;position:relative`;for(let m=i;m<b;m++){let u=document.createElement("div");u.style.cssText=`position:absolute;top:${m*a}px;height:${a}px;width:100%`,this.renderToDOM(r(s[m],m),u),f.appendChild(u)}e.innerHTML="",e.appendChild(f)},g=()=>{d=e.scrollTop,requestAnimationFrame(p)};return e.addEventListener("scroll",g),p(),{render:p,destroy:()=>{e.removeEventListener("scroll",g),e.innerHTML=""}}}lazy(e){let s=null,r=!1;return async(...a)=>(!s&&!r&&(r=!0,s=await e(),r=!1),s?s(...a):{tagName:"div",props:{class:"loading"},children:["Loading..."]})}cleanupUnusedElements(e){let s=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT),r=[];for(;s.nextNode();){let a=s.currentNode;a.id&&a.id.startsWith("r")&&!this.elementCache.has(a)&&r.push(a)}return r.forEach(a=>a.remove()),r.length}renderToString(e,s={}){let{pretty:r=!1,indent:a=0}=s,l=r?"  ".repeat(a):"",c=r?`
`:"",n=this.resolveStateValue(e);if(n=this.unwrapReactive(n),Array.isArray(n))return n.map(f=>this.renderToString(f,s)).join("");if(typeof n!="object"||n===null)return n==null||n===!1?"":this.escapeHtml(String(n));let{tagName:d,props:y,children:p}=n,g=this.isSelfClosingTag(d),i=`${l}<${d}`,b=this.propsToAttributes(y);if(b&&(i+=` ${b}`),g)return i+=` />${c}`,i;if(i+=">",y.dangerouslySetInnerHTML)return i+=y.dangerouslySetInnerHTML.e,i+=`</${d}>${c}`,i;if(p&&p.length>0){let f=p.map(u=>{let x=this.resolveStateValue(u);return this.unwrapReactive(x)}),m=f.some(u=>typeof u=="object"&&u!==null&&!Array.isArray(u)&&"tagName"in u);if(r&&m){i+=c;for(let u of f)if(!G(u))if(Array.isArray(u))for(let x of u)G(x)||(i+=this.renderToString(x,{pretty:r,indent:a+1}));else i+=this.renderToString(u,{pretty:r,indent:a+1});i+=l}else for(let u of f)if(!G(u))if(Array.isArray(u))for(let x of u)G(x)||(i+=this.renderToString(x,{pretty:!1,indent:0}));else i+=this.renderToString(u,{pretty:!1,indent:0})}return i+=`</${d}>${c}`,i}resolveStateValue(e){return e&&typeof e=="object"&&"value"in e&&"subscribe"in e?e.value:e}isReactiveWrapper(e){return!e||typeof e!="object"||!e.tagName?!1:e.tagName==="span"&&e.props?.id&&typeof e.props.id=="string"&&e.props.id.match(/^r[a-z0-9]{9}$/)}unwrapReactive(e){if(!this.isReactiveWrapper(e))return e;let s=e.children;if(!s||s.length===0)return"";if(s.length===1){let r=s[0];if(r&&typeof r=="object"&&r.tagName==="span"){let a=r.props,l=!a||Object.keys(a).length===0,c=r.children&&r.children.length===1&&typeof r.children[0]=="string";if(l&&c)return r.children[0]}return this.unwrapReactive(r)}return s.map(r=>this.unwrapReactive(r))}escapeHtml(e){let s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"};return e.replace(/[&<>"']/g,r=>s[r])}isSelfClosingTag(e){return new Set(["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"]).has(e.toLowerCase())}propsToAttributes(e){let s=[];for(let r in e){if(r==="children"||r==="dangerouslySetInnerHTML"||r==="ref")continue;let a=e[r];if(a=this.resolveStateValue(a),!(a==null||a===!1)&&!(r.startsWith("on")&&typeof a=="function")){if(r==="className"||r==="class"){let l=Array.isArray(a)?a.join(" "):a;l&&s.push(`class="${this.escapeHtml(String(l))}"`);continue}if(r==="style"){let l=this.styleToString(a);l&&s.push(`style="${this.escapeHtml(l)}"`);continue}if(a===!0){s.push(r);continue}s.push(`${r}="${this.escapeHtml(String(a))}"`)}}return s.join(" ")}styleToString(e){if(typeof e=="string")return e;if(typeof e=="object"&&e!==null){let s=[];for(let r in e){let a=r.replace(/([A-Z])/g,"-$1").toLowerCase();s.push(`${a}:${e[r]}`)}return s.join(";")}return""}isState(e){return e&&typeof e=="object"&&"value"in e&&"subscribe"in e&&typeof e.subscribe=="function"}createReactiveChild(e,s){let r=s(e.value);if(typeof window<"u"&&typeof document<"u"){let a={node:null,renderFn:s};this.reactiveNodes.set(e,a),e.subscribe(()=>{if(a.node&&a.node.parentNode){let l=s(e.value);a.node.textContent=String(l??"")}})}return r}jsonToVNode(e){if(this.isState(e))return this.createReactiveChild(e,n=>n);if(Ae(e))return e;let{tag:s,attributes:r={},children:a}=e,l={};for(let n in r){let d=r[n];n==="class"?l.className=this.isState(d)?d.value:d:l[n]=this.isState(d)?d.value:d}let c=[];if(a!=null)if(Array.isArray(a))for(let n of a)if(this.isState(n))c.push(this.createReactiveChild(n,d=>d));else{let d=this.jsonToVNode(n);d!=null&&d!==!1&&c.push(d)}else if(this.isState(a))c.push(this.createReactiveChild(a,n=>n));else if(typeof a=="object"&&"tag"in a){let n=this.jsonToVNode(a);n!=null&&n!==!1&&c.push(n)}else c.push(a);return{tagName:s,props:l,children:c}}vNodeJsonToVNode(e){if(this.isState(e))return this.createReactiveChild(e,n=>n);if(Ae(e))return e;let{tagName:s,props:r={},children:a=[]}=e,l={};for(let n in r){let d=r[n];l[n]=this.isState(d)?d.value:d}let c=[];for(let n of a)if(this.isState(n))c.push(this.createReactiveChild(n,d=>d));else{let d=this.vNodeJsonToVNode(n);d!=null&&d!==!1&&c.push(d)}return{tagName:s,props:l,children:c}}renderJson(e,s){let r=this.jsonToVNode(s);if(!r||typeof r!="object"||!("tagName"in r))throw new Error("Invalid JSON structure");return this.render(e,r)}renderVNode(e,s){let r=this.vNodeJsonToVNode(s);if(!r||typeof r!="object"||!("tagName"in r))throw new Error("Invalid VNode JSON structure");return this.render(e,r)}renderJsonToString(e,s={}){let r=this.jsonToVNode(e);return this.renderToString(r,s)}renderVNodeToString(e,s={}){let r=this.vNodeJsonToVNode(e);return this.renderToString(r,s)}renderToHTMLDocument(e,s={}){let{title:r="",meta:a=[],links:l=[],scripts:c=[],styles:n=[],lang:d="en",head:y="",bodyAttrs:p={},pretty:g=!1}=s,i=g?`
`:"",b=g?"  ":"",f=g?"    ":"",m=`<!DOCTYPE html>${i}<html lang="${d}">${i}${b}<head>${i}${f}<meta charset="UTF-8">${i}${f}<meta name="viewport" content="width=device-width, initial-scale=1.0">${i}`;r&&(m+=`${f}<title>${this.escapeHtml(r)}</title>${i}`);for(let u of a){m+=`${f}<meta`;for(let x in u)m+=` ${x}="${this.escapeHtml(u[x])}"`;m+=`>${i}`}for(let u of l){m+=`${f}<link`;for(let x in u)m+=` ${x}="${this.escapeHtml(u[x])}"`;m+=`>${i}`}for(let u of n)u.href?m+=`${f}<link rel="stylesheet" href="${this.escapeHtml(u.href)}">${i}`:u.content&&(m+=`${f}<style>${u.content}</style>${i}`);y&&(m+=y+i),m+=`${b}</head>${i}${b}<body`;for(let u in p)m+=` ${u}="${this.escapeHtml(p[u])}"`;m+=`>${i}`,m+=this.renderToString(e,{pretty:g,indent:2});for(let u of c)m+=`${f}<script`,u.type&&(m+=` type="${this.escapeHtml(u.type)}"`),u.async&&(m+=" async"),u.defer&&(m+=" defer"),u.src?m+=` src="${this.escapeHtml(u.src)}"><\/script>${i}`:u.content?m+=`>${u.content}<\/script>${i}`:m+=`><\/script>${i}`;return m+=`${b}</body>${i}</html>`,m}getElementCache(){return this.elementCache}},Y=new pt,$a=Y.render.bind(Y),Pa=Y.renderToString.bind(Y);function ht(e,s){let r=e.split("/").filter(Boolean),a=s.split("/").filter(Boolean);if(e.endsWith("*")){let c=e.slice(0,-1);if(s.startsWith(c)||c==="/"||e==="*")return{"*":s.slice(c.length)}}if(r.length!==a.length)return null;let l={};for(let c=0;c<r.length;c++){let n=r[c],d=a[c];if(n.startsWith(":"))l[n.slice(1)]=decodeURIComponent(d);else if(n!==d)return null}return l}function De(e,s,r,a,l=!1){let c=e(s,r);return c===!1?!1:typeof c=="string"?(a(c,l),!1):!0}function Ie(e){let{mode:s="history",base:r="",routes:a}=e,l=[],c=b=>{let f={};return new URLSearchParams(b).forEach((u,x)=>{f[x]=u}),f},n=()=>s==="hash"?window.location.hash.slice(1)||"/":window.location.pathname.replace(r,"")||"/",d=b=>{let[f,m=""]=b.split("?"),[u,x=""]=f.split("#");return{path:u||"/",params:{},query:c(m),hash:x?"#"+x:""}},y=b=>{for(let f of a){let m=ht(f.path,b);if(m!==null)return{route:f,params:m}}return null},p=Y.createState(d(n())),g=(b,f=!1)=>{let m=d(b),u=y(m.path);u&&(m.params=u.params);for(let at of l)if(!De(at,m,p.value,g,f))return;if(u?.route.beforeEnter&&!De(u.route.beforeEnter,m,p.value,g,f))return;let x=s==="hash"?"#"+b:r+b;f?window.history.replaceState({path:b},"",x):window.history.pushState({path:b},"",x),p.value=m},i=()=>{let b=n(),f=d(b),m=y(f.path);m&&(f.params=m.params),p.value=f};return typeof window<"u"&&window.addEventListener("popstate",i),{currentRoute:p,navigate:g,push:b=>g(b,!1),replace:b=>g(b,!0),back:()=>window.history.back(),forward:()=>window.history.forward(),go:b=>window.history.go(b),beforeEach:b=>{l.push(b)},destroy:()=>{typeof window<"u"&&window.removeEventListener("popstate",i),p.destroy()}}}function me(e){return typeof e=="string"?document.getElementById(e.replace("#","")):e}function ge(e,s){if(!e)throw new Error(`Element not found: ${s}`);return e}function j(e){return e==null||e===!1}function Ee(e){return e==null||typeof e=="boolean"||typeof e=="string"||typeof e=="number"}var ut=class{constructor(){this.elementCache=new WeakMap,this.reactiveNodes=new Map}createElement(e,s={},r=[]){return{tagName:e,props:s,children:r}}renderToDOM(e,s){if(e==null||e===!1)return;if(typeof e!="object"){s.appendChild(document.createTextNode(String(e)));return}let{tagName:r,props:a,children:l}=e,c=r==="svg"||r[0]==="s"&&r[1]==="v"&&r[2]==="g"||s.namespaceURI==="http://www.w3.org/2000/svg",n=c?document.createElementNS("http://www.w3.org/2000/svg",r.replace("svg","").toLowerCase()||r):document.createElement(r);for(let p in a){let g=a[p];if(g==null||g===!1)continue;let i=p.charCodeAt(0);if(i===99&&(p.length<6||p[5]==="N")){let b=Array.isArray(g)?g.join(" "):g;c?n.setAttribute("class",b):n.className=b}else if(i===115&&p.length===5)if(typeof g=="string")n.style.cssText=g;else{let b=n.style;for(let f in g)b[f]=g[f]}else i===111&&p.charCodeAt(1)===110?n[p.toLowerCase()]=g:i===100&&p.length>20?n.innerHTML=g.e:i===114&&p.length===3?setTimeout(()=>{typeof g=="function"?g(n):g.current=n},0):n.setAttribute(p,g===!0?"":String(g))}let d=l.length;if(!d){s.appendChild(n);return}let y=p=>{for(let g=0;g<d;g++){let i=l[g];if(!j(i))if(Array.isArray(i))for(let b=0,f=i.length;b<f;b++){let m=i[b];!j(m)&&this.renderToDOM(m,p)}else this.renderToDOM(i,p)}};if(d>30){let p=document.createDocumentFragment();y(p),n.appendChild(p)}else y(n);s.appendChild(n)}render(e,s){let r=ge(me(e),e);if(r.innerHTML="",s.children&&s.children.length>500){let a=document.createDocumentFragment();this.renderToDOM(s,a),r.appendChild(a)}else this.renderToDOM(s,r);return r}batchRender(e,s){let r=ge(me(e),e),a=s.length;if(a>3e3){let l=document.createDocumentFragment(),c=0,n=1500,d=()=>{let y=Math.min(c+n,a);for(let p=c;p<y;p++)this.renderToDOM(s[p],l);c=y,c>=a?r.appendChild(l):requestAnimationFrame(d)};d()}else{let l=document.createDocumentFragment();for(let c=0;c<a;c++)this.renderToDOM(s[c],l);r.appendChild(l)}return r}renderChunked(e,s,r=5e3,a){let l=ge(me(e),e),c=s.length,n=0,d=()=>{let y=Math.min(n+r,c),p=document.createDocumentFragment();for(let g=n;g<y;g++)this.renderToDOM(s[g],p);l.appendChild(p),n=y,a&&a(n,c),n<c&&requestAnimationFrame(d)};return requestAnimationFrame(d),l}renderToHead(...e){let s=document.head;if(s)for(let r of e.flat())r&&this.renderToDOM(r,s);return s}addStyle(e){let s=document.createElement("style");return s.textContent=e,document.head.appendChild(s)}addMeta(e){let s=document.createElement("meta");for(let r in e)s.setAttribute(r,e[r]);return document.head.appendChild(s)}addLink(e){let s=document.createElement("link");for(let r in e)s.setAttribute(r,e[r]);return document.head.appendChild(s)}setTitle(e){return document.title=e}createState(e,s={}){let r=e,a=new Set,l=null,{throttle:c=0,deep:n=!1}=s,d=()=>a.forEach(p=>p(r)),y=()=>{c>0?l||(l=setTimeout(()=>{l=null,d()},c)):d()};return{get value(){return r},set value(p){(n?JSON.stringify(r)!==JSON.stringify(p):r!==p)&&(r=p,y())},subscribe(p){return a.add(p),()=>a.delete(p)},destroy(){a.clear(),l&&clearTimeout(l)}}}computed(e,s){let r=e.map(l=>l.value),a=this.createState(s(...r));return e.forEach((l,c)=>{l.subscribe(n=>{r[c]=n,a.value=s(...r)})}),a}effect(e){e()}createVirtualList(e,s,r,a=50,l=5){let c=e.clientHeight,n=s.length*a,d=0,y=()=>{let i=Math.max(0,Math.floor(d/a)-l),b=Math.min(s.length,Math.ceil((d+c)/a)+l);return{start:i,end:b}},p=()=>{let{start:i,end:b}=y(),f=document.createElement("div");f.style.cssText=`height:${n}px;position:relative`;for(let m=i;m<b;m++){let u=document.createElement("div");u.style.cssText=`position:absolute;top:${m*a}px;height:${a}px;width:100%`,this.renderToDOM(r(s[m],m),u),f.appendChild(u)}e.innerHTML="",e.appendChild(f)},g=()=>{d=e.scrollTop,requestAnimationFrame(p)};return e.addEventListener("scroll",g),p(),{render:p,destroy:()=>{e.removeEventListener("scroll",g),e.innerHTML=""}}}lazy(e){let s=null,r=!1;return async(...a)=>(!s&&!r&&(r=!0,s=await e(),r=!1),s?s(...a):{tagName:"div",props:{class:"loading"},children:["Loading..."]})}cleanupUnusedElements(e){let s=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT),r=[];for(;s.nextNode();){let a=s.currentNode;a.id&&a.id.startsWith("r")&&!this.elementCache.has(a)&&r.push(a)}return r.forEach(a=>a.remove()),r.length}renderToString(e,s={}){let{pretty:r=!1,indent:a=0}=s,l=r?"  ".repeat(a):"",c=r?`
`:"",n=this.resolveStateValue(e);if(n=this.unwrapReactive(n),Array.isArray(n))return n.map(f=>this.renderToString(f,s)).join("");if(typeof n!="object"||n===null)return n==null||n===!1?"":this.escapeHtml(String(n));let{tagName:d,props:y,children:p}=n,g=this.isSelfClosingTag(d),i=`${l}<${d}`,b=this.propsToAttributes(y);if(b&&(i+=` ${b}`),g)return i+=` />${c}`,i;if(i+=">",y.dangerouslySetInnerHTML)return i+=y.dangerouslySetInnerHTML.e,i+=`</${d}>${c}`,i;if(p&&p.length>0){let f=p.map(u=>{let x=this.resolveStateValue(u);return this.unwrapReactive(x)}),m=f.some(u=>typeof u=="object"&&u!==null&&!Array.isArray(u)&&"tagName"in u);if(r&&m){i+=c;for(let u of f)if(!j(u))if(Array.isArray(u))for(let x of u)j(x)||(i+=this.renderToString(x,{pretty:r,indent:a+1}));else i+=this.renderToString(u,{pretty:r,indent:a+1});i+=l}else for(let u of f)if(!j(u))if(Array.isArray(u))for(let x of u)j(x)||(i+=this.renderToString(x,{pretty:!1,indent:0}));else i+=this.renderToString(u,{pretty:!1,indent:0})}return i+=`</${d}>${c}`,i}resolveStateValue(e){return e&&typeof e=="object"&&"value"in e&&"subscribe"in e?e.value:e}isReactiveWrapper(e){return!e||typeof e!="object"||!e.tagName?!1:e.tagName==="span"&&e.props?.id&&typeof e.props.id=="string"&&e.props.id.match(/^r[a-z0-9]{9}$/)}unwrapReactive(e){if(!this.isReactiveWrapper(e))return e;let s=e.children;if(!s||s.length===0)return"";if(s.length===1){let r=s[0];if(r&&typeof r=="object"&&r.tagName==="span"){let a=r.props,l=!a||Object.keys(a).length===0,c=r.children&&r.children.length===1&&typeof r.children[0]=="string";if(l&&c)return r.children[0]}return this.unwrapReactive(r)}return s.map(r=>this.unwrapReactive(r))}escapeHtml(e){let s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"};return e.replace(/[&<>"']/g,r=>s[r])}isSelfClosingTag(e){return new Set(["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"]).has(e.toLowerCase())}propsToAttributes(e){let s=[];for(let r in e){if(r==="children"||r==="dangerouslySetInnerHTML"||r==="ref")continue;let a=e[r];if(a=this.resolveStateValue(a),!(a==null||a===!1)&&!(r.startsWith("on")&&typeof a=="function")){if(r==="className"||r==="class"){let l=Array.isArray(a)?a.join(" "):a;l&&s.push(`class="${this.escapeHtml(String(l))}"`);continue}if(r==="style"){let l=this.styleToString(a);l&&s.push(`style="${this.escapeHtml(l)}"`);continue}if(a===!0){s.push(r);continue}s.push(`${r}="${this.escapeHtml(String(a))}"`)}}return s.join(" ")}styleToString(e){if(typeof e=="string")return e;if(typeof e=="object"&&e!==null){let s=[];for(let r in e){let a=r.replace(/([A-Z])/g,"-$1").toLowerCase();s.push(`${a}:${e[r]}`)}return s.join(";")}return""}isState(e){return e&&typeof e=="object"&&"value"in e&&"subscribe"in e&&typeof e.subscribe=="function"}createReactiveChild(e,s){let r=s(e.value);if(typeof window<"u"&&typeof document<"u"){let a={node:null,renderFn:s};this.reactiveNodes.set(e,a),e.subscribe(()=>{if(a.node&&a.node.parentNode){let l=s(e.value);a.node.textContent=String(l??"")}})}return r}jsonToVNode(e){if(this.isState(e))return this.createReactiveChild(e,n=>n);if(Ee(e))return e;let{tag:s,attributes:r={},children:a}=e,l={};for(let n in r){let d=r[n];n==="class"?l.className=this.isState(d)?d.value:d:l[n]=this.isState(d)?d.value:d}let c=[];if(a!=null)if(Array.isArray(a))for(let n of a)if(this.isState(n))c.push(this.createReactiveChild(n,d=>d));else{let d=this.jsonToVNode(n);d!=null&&d!==!1&&c.push(d)}else if(this.isState(a))c.push(this.createReactiveChild(a,n=>n));else if(typeof a=="object"&&"tag"in a){let n=this.jsonToVNode(a);n!=null&&n!==!1&&c.push(n)}else c.push(a);return{tagName:s,props:l,children:c}}vNodeJsonToVNode(e){if(this.isState(e))return this.createReactiveChild(e,n=>n);if(Ee(e))return e;let{tagName:s,props:r={},children:a=[]}=e,l={};for(let n in r){let d=r[n];l[n]=this.isState(d)?d.value:d}let c=[];for(let n of a)if(this.isState(n))c.push(this.createReactiveChild(n,d=>d));else{let d=this.vNodeJsonToVNode(n);d!=null&&d!==!1&&c.push(d)}return{tagName:s,props:l,children:c}}renderJson(e,s){let r=this.jsonToVNode(s);if(!r||typeof r!="object"||!("tagName"in r))throw new Error("Invalid JSON structure");return this.render(e,r)}renderVNode(e,s){let r=this.vNodeJsonToVNode(s);if(!r||typeof r!="object"||!("tagName"in r))throw new Error("Invalid VNode JSON structure");return this.render(e,r)}renderJsonToString(e,s={}){let r=this.jsonToVNode(e);return this.renderToString(r,s)}renderVNodeToString(e,s={}){let r=this.vNodeJsonToVNode(e);return this.renderToString(r,s)}renderToHTMLDocument(e,s={}){let{title:r="",meta:a=[],links:l=[],scripts:c=[],styles:n=[],lang:d="en",head:y="",bodyAttrs:p={},pretty:g=!1}=s,i=g?`
`:"",b=g?"  ":"",f=g?"    ":"",m=`<!DOCTYPE html>${i}<html lang="${d}">${i}${b}<head>${i}${f}<meta charset="UTF-8">${i}${f}<meta name="viewport" content="width=device-width, initial-scale=1.0">${i}`;r&&(m+=`${f}<title>${this.escapeHtml(r)}</title>${i}`);for(let u of a){m+=`${f}<meta`;for(let x in u)m+=` ${x}="${this.escapeHtml(u[x])}"`;m+=`>${i}`}for(let u of l){m+=`${f}<link`;for(let x in u)m+=` ${x}="${this.escapeHtml(u[x])}"`;m+=`>${i}`}for(let u of n)u.href?m+=`${f}<link rel="stylesheet" href="${this.escapeHtml(u.href)}">${i}`:u.content&&(m+=`${f}<style>${u.content}</style>${i}`);y&&(m+=y+i),m+=`${b}</head>${i}${b}<body`;for(let u in p)m+=` ${u}="${this.escapeHtml(p[u])}"`;m+=`>${i}`,m+=this.renderToString(e,{pretty:g,indent:2});for(let u of c)m+=`${f}<script`,u.type&&(m+=` type="${this.escapeHtml(u.type)}"`),u.async&&(m+=" async"),u.defer&&(m+=" defer"),u.src?m+=` src="${this.escapeHtml(u.src)}"><\/script>${i}`:u.content?m+=`>${u.content}<\/script>${i}`:m+=`><\/script>${i}`;return m+=`${b}</body>${i}</html>`,m}getElementCache(){return this.elementCache}},H=new ut,Ia=H.render.bind(H),Ea=H.renderToString.bind(H),U=(e,s)=>H.createState(e,s);var mt=class{constructor(e,s,r){this.key=e,this.wsUrl=r,this.ws=null,this.pendingUpdates=[],this.localState=U(s),this.previousValue=s,this.connect()}get value(){return this.localState.value}set value(e){this.previousValue=this.localState.value,this.localState.value=e,this.sendToServer(e)}get state(){return this.localState}onChange(e){return this.localState.subscribe(s=>{let r=this.previousValue;this.previousValue=s,e(s,r)})}update(e){this.value=e(this.value)}connect(){if(typeof window>"u")return;let e=this.wsUrl||`ws://${location.host}`;this.ws=new WebSocket(e),this.ws.addEventListener("open",()=>{for(this.subscribe();this.pendingUpdates.length>0;){let s=this.pendingUpdates.shift();this.sendToServer(s)}}),this.ws.addEventListener("message",s=>{this.handleMessage(s.data)}),this.ws.addEventListener("close",()=>{setTimeout(()=>this.connect(),1e3)}),this.ws.addEventListener("error",s=>{console.error("[SharedState] WebSocket error:",s)})}subscribe(){!this.ws||this.ws.readyState!==WebSocket.OPEN||this.ws.send(JSON.stringify({type:"state:subscribe",key:this.key}))}handleMessage(e){try{let s=JSON.parse(e);if(s.key!==this.key)return;(s.type==="state:init"||s.type==="state:update")&&(this.localState.value=s.value)}catch{}}sendToServer(e){if(this.ws){if(this.ws.readyState!==WebSocket.OPEN){this.pendingUpdates.push(e);return}this.ws.send(JSON.stringify({type:"state:change",key:this.key,value:e}))}}disconnect(){this.ws&&(this.ws.close(),this.ws=null)}destroy(){this.disconnect(),this.localState.destroy()}};var gt=class{constructor(){this.states=new Map}create(e,s,r){if(this.states.has(e))return this.states.get(e);let a=new mt(e,s,r);return this.states.set(e,a),a}get(e){return this.states.get(e)}delete(e){let s=this.states.get(e);return s?(s.destroy(),this.states.delete(e)):!1}clear(){this.states.forEach(e=>e.destroy()),this.states.clear()}},Ma=new gt,ft=(e,s)=>(e&&cancelAnimationFrame(e),requestAnimationFrame(()=>{s()})),bt=(e,s)=>{let r=document.createDocumentFragment();if(s&&e&&typeof e=="object"&&"tagName"in e){let{children:a}=e;for(let l of a)H.renderToDOM(l,r)}else H.renderToDOM(e,r);return r},yt=(e,s)=>{for(let r in s){let a=s[r];if(r!=="ref")if(r==="class"||r==="className")e.className=Array.isArray(a)?a.join(" "):a||"";else if(r==="style"&&typeof a=="object"){let l=e.style;for(let c in a)l[c]=a[c]}else r.startsWith("on")?e[r.toLowerCase()]=a:a!=null&&a!==!1?e.setAttribute(r,String(a===!0?"":a)):e.removeAttribute(r)}},P=(e,s)=>{let r=null,a=null,l=null,c=!0,n=s(e.value),d=n&&typeof n=="object"&&"tagName"in n,y=n==null||n===!1,p=()=>{if(!a&&!l)return;let i=s(e.value);if(i==null||i===!1)c&&a&&(l=document.createComment("reactive"),a.parentNode?.replaceChild(l,a),c=!1);else if(!c&&l&&a&&(l.parentNode?.replaceChild(a,l),l=null,c=!0),a){let f=!!(d&&i&&typeof i=="object"&&"tagName"in i);if(f){let{props:u}=i;yt(a,u)}let m=bt(i,f);a.textContent="",a.appendChild(m),H.getElementCache().set(a,!0)}};e.subscribe(()=>{r=ft(r,()=>{p(),r=null})});let g=i=>{a=i,y&&i.parentNode&&(l=document.createComment("reactive"),i.parentNode.replaceChild(l,i),c=!1)};if(d){let i=n;return{tagName:i.tagName,props:{...i.props,ref:g},children:i.children}}return{tagName:"span",props:{ref:g},children:[n]}};var t={appContainer:"app-container",container:"container",header:"header",nav:"nav",logo:"logo",logoMark:"logo-mark",logoText:"logo-text",navLinks:"nav-links",navLink:"nav-link",navLinkActive:"nav-link-active",navActions:"nav-actions",navButton:"nav-button",mainContent:"main-content",page:"page",pageHero:"page-hero",heroEyebrow:"hero-eyebrow",heroTitle:"hero-title",subtitle:"subtitle",heroActions:"hero-actions",buttonPrimary:"button-primary",buttonSecondary:"button-secondary",badgeRow:"badge-row",badge:"badge",statGrid:"stat-grid",statCard:"stat-card",statValue:"stat-value",statLabel:"stat-label",section:"section",sectionLabel:"section-label",pageH1:"page-h1",pageLead:"page-lead",pageH2:"page-h2",pageH3:"page-h3",pageP:"page-p",pageUl:"page-ul",pageLi:"page-li",pagePre:"page-pre",pageCode:"page-code",features:"features",feature:"feature",featureH3:"feature-h3",splitGrid:"split-grid",card:"card",cardTitle:"card-title",tabs:"tabs",tab:"tab",tabActive:"tab-active",tabContent:"tab-content",stepGrid:"step-grid",stepCard:"step-card",stepNumber:"step-number",note:"note",inlineLink:"inline-link",footer:"footer",footerGrid:"footer-grid",footerBrand:"footer-brand",footerLinks:"footer-links",footerHeading:"footer-heading",footerSmall:"footer-small"};var v=e=>Ne({class:t.pagePre},E({class:t.pageCode},e));var se="1.1.3",L={repository:"https://github.com/d-osc/script-db",releases:"https://github.com/d-osc/script-db/releases",cliPackage:"https://www.npmjs.com/package/@scriptdb/cli",browserClient:"https://www.npmjs.com/package/@scriptdb/browser-client",nodeClient:"https://www.npmjs.com/package/@scriptdb/client",docsSite:"https://d-osc.github.io/script-db/"},N={npmGlobal:"npm install -g @scriptdb/cli",bunGlobal:"bun add -g @scriptdb/cli",windowsBinary:String.raw`irm https://raw.githubusercontent.com/d-osc/script-db/refs/heads/main/scripts/install.ps1 | iex`,unixBinary:String.raw`curl -fsSL https://raw.githubusercontent.com/d-osc/script-db/refs/heads/main/scripts/install.sh | bash`,windowsCustomDir:String.raw`$env:SCRIPTDB_INSTALL = "C:\Tools\scriptdb"
irm https://raw.githubusercontent.com/d-osc/script-db/refs/heads/main/scripts/install.ps1 | iex`,unixCustomDir:String.raw`export SCRIPTDB_INSTALL="/opt/scriptdb"
curl -fsSL https://raw.githubusercontent.com/d-osc/script-db/refs/heads/main/scripts/install.sh | bash`,windowsVersion:String.raw`$env:SCRIPTDB_VERSION = "v1.1.3"
irm https://raw.githubusercontent.com/d-osc/script-db/refs/heads/main/scripts/install.ps1 | iex`,unixVersion:String.raw`export SCRIPTDB_VERSION="v1.1.3"
curl -fsSL https://raw.githubusercontent.com/d-osc/script-db/refs/heads/main/scripts/install.sh | bash`,windowsUninstall:String.raw`irm https://raw.githubusercontent.com/d-osc/script-db/refs/heads/main/scripts/uninstall.ps1 | iex`,unixUninstall:String.raw`curl -fsSL https://raw.githubusercontent.com/d-osc/script-db/refs/heads/main/scripts/uninstall.sh | bash`},Me=String.raw`git clone https://github.com/d-osc/script-db.git
cd script-db
bun install
bun run build
npm link`,F=String.raw`# Start the server in the foreground
scriptdb start

# Run it in the background with PM2
scriptdb start -d

# Inspect health and logs
scriptdb status
scriptdb logs

# Stop or restart when you change configuration
scriptdb stop
scriptdb restart -d`,q=String.raw`scriptdb --help
scriptdb status
scriptdb shell`,W=String.raw`import BrowserClient from '@scriptdb/browser-client';

const client = new BrowserClient({
  host: 'localhost',
  port: 1234,
  username: 'admin',
  password: 'admin123',
  secure: false,
  requestTimeout: 30000
});

await client.connect();

const { databases } = await client.listDatabases();
console.log('Databases:', databases);

await client.createDatabase('my-scripts');

const result = await client.run(
  [
    "export const greet = (name: string) => 'Hello, ' + name + '!';",
    "export const jobs = ['lint', 'build', 'deploy'];"
  ].join('\n'),
  'my-scripts'
);

console.log(result);
await client.saveDatabase('my-scripts');
await client.disconnect();`,J=String.raw`import { ScriptDBClient } from '@scriptdb/client';

const client = new ScriptDBClient('scriptdb://localhost:1234/my-scripts', {
  secure: false,
  username: 'admin',
  password: 'admin123',
  requestTimeout: 30000,
  retries: 3,
  retryDelay: 1000
});

await client.connect();
await client.createDatabase('my-scripts');

const info = await client.getInfo();
console.log('Server info:', info);

const result = await client.run(
  [
    "export const answer = 2 + 2;",
    "export const tags = ['server', 'cli', 'gui'];"
  ].join('\n'),
  'my-scripts'
);

console.log(result);
await client.saveDatabase('my-scripts');
client.close();`,Ve=String.raw`const client = new BrowserClient({
  host: 'localhost',
  port: 1234,
  username: 'admin',
  password: 'admin123',
  secure: false,
  requestTimeout: 30000
});`,He=String.raw`const client = new ScriptDBClient('scriptdb://localhost:1234/my-scripts', {
  secure: false,
  username: 'admin',
  password: 'admin123',
  requestTimeout: 30000,
  socketTimeout: 0,
  retries: 3,
  retryDelay: 1000,
  maxPending: 100,
  maxQueue: 1000
});`,Be=String.raw`const response = await client.execute({
  action: 'script-code',
  data: {
    databaseName: 'my-scripts',
    code: "export const answer = 42;"
  }
});`,Re=String.raw`const response = await client.execute({
  action: 'script-code',
  data: {
    databaseName: 'my-scripts',
    code: "export const answer = 42;"
  }
});`,re=String.raw`const client = new ScriptDBClient('scriptdb://localhost:1234/my-scripts', {
  secure: false,
  username: 'admin',
  password: 'change-me'
});

await client.connect();

// You can also re-authenticate explicitly.
await client.login('admin', 'change-me');`,ae=String.raw`const client = new ScriptDBClient('scriptdb://localhost:1234/my-scripts', {
  secure: true,
  signing: {
    secret: process.env.SCRIPTDB_SIGNING_SECRET || 'replace-me',
    algorithm: 'sha256'
  }
});

await client.connect();`,B=String.raw`scriptdb shell

> .dbs
> .create my-scripts
> .use my-scripts
> const build = ['lint', 'test', 'ship']
> build.map((step) => step.toUpperCase())`,ne=String.raw`# Install packages into ~/.scriptdb/packages
scriptdb add lodash
scriptdb add axios express

# Install packages into the current directory
scriptdb add --local lodash

# Remove packages again
scriptdb remove lodash
scriptdb remove --local lodash`,oe=String.raw`{
  "host": "localhost",
  "port": 1234,
  "users": [
    {
      "username": "admin",
      "password": "your-password",
      "hash": false
    }
  ],
  "folder": "databases",
  "secure": false
}`,ie=String.raw`# Windows
%USERPROFILE%\.scriptdb/
├── bin/
│   └── scriptdb.exe
├── config.json
├── databases/
└── packages/

# Linux/macOS
~/.scriptdb/
├── bin/
│   └── scriptdb
├── config.json
├── databases/
├── ecosystem.config.js
├── packages/
└── pm2-*.log`,Ue=String.raw`Connection URI: scriptdb://[username:password@]host:port/database
Node Transport: TCP on the configured ScriptDB port
Browser Transport: WebSocket proxy on port + 1
Authentication: username/password with token sessions
Security: optional TLS plus optional HMAC signing in the Node client`,Oe=["create(name, code)","update(name, code)","remove(name)","save(name, code)","read(name)"];var Ge=(e,s,r)=>S({href:`#${e}`,class:r},s),fe=(e,s,r)=>S({href:e,class:r,target:"_blank",rel:"noopener noreferrer"},s),be=(e,s)=>o({class:t.statCard},C({class:t.statValue},e),h({class:t.statLabel},s)),z=(e,s)=>o({class:t.feature},w({class:t.featureH3},e),h({class:t.pageP},s)),je=()=>{let e=U("browser");return o(o({class:t.pageHero},o({class:t.badgeRow},C({class:t.badge},`Version ${se}`),C({class:t.badge},"CLI + GUI"),C({class:t.badge},"Browser + Node clients"),C({class:t.badge},"TypeScript sandbox")),h({class:t.heroEyebrow},"Script Database Platform"),D({class:t.heroTitle},"Store, version, and run your scripts from one ScriptDB server."),h({class:t.subtitle},"ScriptDB combines a CLI, browser GUI, browser client, and Node client so teams can manage TypeScript or JavaScript databases, execute code in a controlled runtime, and keep workflows close to their tooling."),o({class:t.heroActions},Ge("/installation","Install ScriptDB",t.buttonPrimary),Ge("/quick-start","Quick Start",t.buttonSecondary),fe(L.repository,"GitHub",t.buttonSecondary)),o({class:t.statGrid},be("2 apps","CLI and GUI apps sit alongside the server and package workspace."),be("7 packages","Clients, storage, VM, server, and system modules share one monorepo."),be("1234 + 1","The TCP server listens on the configured port and the browser proxy uses port + 1."))),o({class:t.section},h({class:t.sectionLabel},"Why Teams Use It"),k({class:t.pageH2},"One workflow for code storage, execution, and tooling."),h({class:t.pageLead},"The main ScriptDB monorepo ships the server, a browser GUI, a CLI, a WebSocket browser client, a TCP Node client, system modules, storage, and the sandbox runtime in one place."),o({class:t.features},z("Secure script runtime","Run TypeScript or JavaScript in a sandboxed VM instead of pushing script execution responsibilities into ad hoc glue code."),z("Git-backed storage","Treat ScriptDB databases like code assets with versioned storage and update flows that fit engineering teams."),z("CLI-first operations","Start, stop, inspect, shell into, and monitor the server with the official @scriptdb/cli package."),z("Browser GUI","The GUI app brings Monaco-powered editing, database browsing, and output inspection to the same backend."),z("Official clients","Use the browser client over WebSocket or the Node client over TCP with matching high-level operations."),z("Typed workflows","The monorepo is built around TypeScript with typed packages and generated definitions for runtime interactions."))),o({class:t.section},h({class:t.sectionLabel},"Install"),k({class:t.pageH2},"Choose the install path that matches your environment."),h({class:t.pageLead},"Most teams start with the CLI package, while local machines and internal images can use the binary install scripts published from this repo."),o({class:t.splitGrid},o({class:t.card},w({class:t.cardTitle},"Recommended: global CLI package"),h({class:t.pageP},"Install the CLI from npm or Bun when you want `scriptdb` available in your normal JavaScript toolchain."),v(`${N.npmGlobal}
${N.bunGlobal}`),h({class:t.pageP},"This is the cleanest route when you already manage Node or Bun on the host."),fe(L.cliPackage,"Open @scriptdb/cli on npm",t.inlineLink)),o({class:t.card},w({class:t.cardTitle},"Binary install scripts"),h({class:t.pageP},"Use the shipped PowerShell or shell scripts to pull a release binary into the standard ScriptDB folder and add it to PATH."),v(`${N.windowsBinary}

${N.unixBinary}`),h({class:t.pageP},"This route is useful for disposable environments, CI images, and hosts where you want a direct binary install."),fe(L.releases,"Browse release assets",t.inlineLink)))),o({class:t.section},h({class:t.sectionLabel},"Use The Clients"),k({class:t.pageH2},"The browser and Node clients cover the same core workflow."),h({class:t.pageLead},"Both official clients let you connect, authenticate, create databases, run code, and save results. The browser client talks to the WebSocket proxy and the Node client talks to the TCP server directly."),o({class:t.tabs},P(e,s=>V({class:s==="browser"?t.tabActive:t.tab,onclick:()=>e.value="browser"},"Browser Client")),P(e,s=>V({class:s==="node"?t.tabActive:t.tab,onclick:()=>e.value="node"},"Node Client"))),o({class:t.tabContent},P(e,s=>s==="browser"?o({class:t.card},w({class:t.cardTitle},"@scriptdb/browser-client"),h({class:t.pageP},"Use this when your app runs in the browser and reaches ScriptDB through the WebSocket proxy on `port + 1`."),v(W)):o({class:t.card},w({class:t.cardTitle},"@scriptdb/client"),h({class:t.pageP},"Use this for services, workers, CLIs, and server-side tools that can connect over the native TCP transport."),v(J))))),o({class:t.section},h({class:t.sectionLabel},"Operate"),k({class:t.pageH2},"Run the server, inspect it, and work interactively."),h({class:t.pageLead},"ScriptDB is built to be operated from the CLI first. You can run it in the foreground, daemonize it with PM2, inspect logs, or drop into the interactive shell."),o({class:t.splitGrid},o({class:t.card},w({class:t.cardTitle},"Server lifecycle"),h({class:t.pageP},"These are the core commands you will use when provisioning or managing a ScriptDB instance."),v(F)),o({class:t.card},w({class:t.cardTitle},"Interactive shell"),h({class:t.pageP},"Use the shell for quick inspection, creating databases, and trying code paths without wiring a client app first."),v(B)))))};var ye=(e,s)=>S({href:e,class:t.inlineLink,target:"_blank",rel:"noopener noreferrer"},s),Fe=()=>o(o({class:t.pageHero},o({class:t.badgeRow},C({class:t.badge},"CLI package"),C({class:t.badge},"Binary installers"),C({class:t.badge},"Source build")),h({class:t.heroEyebrow},"Installation"),D({class:t.pageH1},"Install ScriptDB the way your environment expects."),h({class:t.pageLead},"You can install the CLI globally from npm or Bun, use the platform install scripts that pull release binaries, or build the monorepo from source when you need the full workspace."),o({class:t.heroActions},S({href:"#/quick-start",class:t.buttonPrimary},"Open Quick Start"),S({href:L.releases,class:t.buttonSecondary,target:"_blank",rel:"noopener noreferrer"},"View Releases"))),o({class:t.section},h({class:t.sectionLabel},"Recommended Path"),k({class:t.pageH2},"Install the CLI globally if you already have Node or Bun."),h({class:t.pageLead},"The global CLI package is the smoothest path for most developers because it matches the monorepo tooling and keeps upgrades in the normal package manager flow."),o({class:t.splitGrid},o({class:t.card},w({class:t.cardTitle},"npm"),h({class:t.pageP},"Use npm when you want the CLI available system-wide and already manage your JavaScript toolchain with Node."),v(N.npmGlobal),h({class:t.pageP},"This installs the `scriptdb` binary from the official ",ye(L.cliPackage,"@scriptdb/cli")," package.")),o({class:t.card},w({class:t.cardTitle},"Bun"),h({class:t.pageP},"Use Bun for the same CLI package when your environment already standardizes on Bun for package management."),v(N.bunGlobal),h({class:t.pageP},"This path is especially convenient when you plan to build or work inside the ScriptDB monorepo later.")))),o({class:t.section},h({class:t.sectionLabel},"Binary Installers"),k({class:t.pageH2},"Use the repository install scripts for direct binary setup."),h({class:t.pageLead},"The install scripts download the correct release asset for the host platform and put ScriptDB into the standard user-level install directory."),o({class:t.splitGrid},o({class:t.card},w({class:t.cardTitle},"Windows PowerShell"),h({class:t.pageP},"The PowerShell installer targets the Windows binary and updates the user PATH after installation."),v(N.windowsBinary)),o({class:t.card},w({class:t.cardTitle},"Linux and macOS shell"),h({class:t.pageP},"The shell installer detects OS and architecture, then downloads the matching ScriptDB binary into `~/.scriptdb/bin`."),v(N.unixBinary))),o({class:t.note},"Use the binary installers when you want a release artifact without first installing the CLI package globally.")),o({class:t.section},h({class:t.sectionLabel},"Advanced Options"),k({class:t.pageH2},"Pin a release or change the install directory."),h({class:t.pageLead},"The install scripts expose two useful environment variables: `SCRIPTDB_VERSION` for version pinning and `SCRIPTDB_INSTALL` for custom install locations."),o({class:t.splitGrid},o({class:t.card},w({class:t.cardTitle},"Version pinning"),h({class:t.pageP},"Lock to a known release when you want reproducible machine images or controlled upgrades."),v(`${N.windowsVersion}

${N.unixVersion}`)),o({class:t.card},w({class:t.cardTitle},"Custom install folders"),h({class:t.pageP},"Point the installer at a custom path when your environment uses shared tools directories or non-default home layouts."),v(`${N.windowsCustomDir}

${N.unixCustomDir}`)))),o({class:t.section},h({class:t.sectionLabel},"Source Build"),k({class:t.pageH2},"Build the workspace when you need the full monorepo."),h({class:t.pageLead},"This is the path to take if you want the GUI app, shared packages, and development scripts exactly as they live in the source tree."),v(Me)),o({class:t.section},h({class:t.sectionLabel},"Verify And Remove"),k({class:t.pageH2},"Validate the install, then keep an uninstall path handy."),h({class:t.pageLead},"Whether you installed from npm or via release scripts, a quick check right away saves time before you wire the server into larger workflows."),o({class:t.splitGrid},o({class:t.card},w({class:t.cardTitle},"Verification"),h({class:t.pageP},"These commands confirm that the CLI is available and that the server shell can be reached."),v(q)),o({class:t.card},w({class:t.cardTitle},"Uninstall scripts"),h({class:t.pageP},"If you used the binary install scripts, the uninstall scripts remove the installed files from the ScriptDB home folder."),v(`${N.windowsUninstall}

${N.unixUninstall}`)))),o({class:t.section},h({class:t.sectionLabel},"Client Packages"),k({class:t.pageH2},"Install the package that matches where your code runs."),h({class:t.pageLead},"ScriptDB ships dedicated clients for browser and Node runtimes. They expose matching high-level operations for creating databases, running code, and saving results."),o({class:t.splitGrid},o({class:t.card},w({class:t.cardTitle},"@scriptdb/browser-client"),h({class:t.pageP},"Use this in browser apps through the WebSocket proxy that listens on the ScriptDB port plus one."),v("npm install @scriptdb/browser-client"),h({class:t.pageP},"Package: ",ye(L.browserClient,"@scriptdb/browser-client"))),o({class:t.card},w({class:t.cardTitle},"@scriptdb/client"),h({class:t.pageP},"Use this in Node services, workers, and CLIs that connect directly over the native TCP transport."),v("npm install @scriptdb/client"),h({class:t.pageP},"Package: ",ye(L.nodeClient,"@scriptdb/client"))))));var K=(e,s,r)=>o({class:t.stepCard},C({class:t.stepNumber},e),w({class:t.cardTitle},s),h({class:t.pageP},r)),qe=()=>{let e=U("browser");return o(o({class:t.pageHero},o({class:t.badgeRow},C({class:t.badge},"5 steps"),C({class:t.badge},"CLI workflow"),C({class:t.badge},"Browser and Node examples")),h({class:t.heroEyebrow},"Quick Start"),D({class:t.pageH1},"Get a ScriptDB server running and execute your first database code path."),h({class:t.pageLead},"This page is the shortest path from a clean machine to a running server, a created database, and a client that can execute TypeScript or JavaScript against it."),o({class:t.heroActions},S({href:"#/installation",class:t.buttonPrimary},"Installation Options"),S({href:"#/api",class:t.buttonSecondary},"Client API"))),o({class:t.section},h({class:t.sectionLabel},"Workflow"),k({class:t.pageH2},"A complete first run in five small steps."),o({class:t.stepGrid},K("1","Install the CLI","Install @scriptdb/cli globally or use the release install scripts if you want a direct binary."),K("2","Start the server","Bring ScriptDB up in the foreground or daemonize it with PM2 depending on the environment."),K("3","Connect a client","Pick the browser client for web apps or the Node client for services and scripts."),K("4","Create a database","Create a database and run code that exports functions or values you want ScriptDB to store."),K("5","Inspect and persist","Use the shell, status, logs, and save operations to verify the result and keep it around."))),o({class:t.section},h({class:t.sectionLabel},"Install And Start"),k({class:t.pageH2},"Install the CLI, then boot the server."),h({class:t.pageLead},"If you already have Node or Bun, install the CLI package. If not, the repository also publishes direct binary install scripts for Windows, Linux, and macOS."),o({class:t.splitGrid},o({class:t.card},w({class:t.cardTitle},"Install command"),v(`${N.npmGlobal}
${N.bunGlobal}

${N.windowsBinary}

${N.unixBinary}`)),o({class:t.card},w({class:t.cardTitle},"Start and inspect"),v(F)))),o({class:t.section},h({class:t.sectionLabel},"Connect A Client"),k({class:t.pageH2},"Run the same high-level flow from browser or Node."),h({class:t.pageLead},"Both clients let you connect, create databases, run code, and save your work. Choose the browser client when your app runs in a browser and the Node client when it runs alongside backend services or automation."),o({class:t.tabs},P(e,s=>V({class:s==="browser"?t.tabActive:t.tab,onclick:()=>e.value="browser"},"Browser Client")),P(e,s=>V({class:s==="node"?t.tabActive:t.tab,onclick:()=>e.value="node"},"Node Client"))),o({class:t.tabContent},P(e,s=>s==="browser"?o({class:t.card},w({class:t.cardTitle},"Browser example"),h({class:t.pageP},"The browser client connects over the WebSocket proxy on `port + 1`, so local development usually runs with `secure: false`."),v(W)):o({class:t.card},w({class:t.cardTitle},"Node example"),h({class:t.pageP},"The Node client connects directly over the ScriptDB TCP port and exposes the same high-level operations."),v(J)))),o({class:t.note},"Use secure transport and production credentials when you move the client examples beyond local development.")),o({class:t.section},h({class:t.sectionLabel},"Inspect And Extend"),k({class:t.pageH2},"Use the shell and then move into deeper docs."),h({class:t.pageLead},"The interactive shell is the fastest place to verify a new server, create databases, and sanity-check code paths before you wire ScriptDB into an app or service."),o({class:t.splitGrid},o({class:t.card},w({class:t.cardTitle},"Interactive shell"),v(B)),o({class:t.card},w({class:t.cardTitle},"Where to go next"),h({class:t.pageP},"Move to the documentation page for architecture, the usage page for day-to-day workflows, and the API page for client constructors and method reference."),h({class:t.pageP},S({href:"#/docs",class:t.inlineLink},"Read the docs")," to understand the monorepo shape and runtime model."),h({class:t.pageP},S({href:"#/usage",class:t.inlineLink},"Open usage")," for CLI operations, package management, and security patterns."),h({class:t.pageP},S({href:"#/api",class:t.inlineLink},"Open API reference")," for browser and Node client examples based on the current source.")))))};var we=(e,s)=>S({href:`#${e}`,class:t.inlineLink},s),ve=(e,s)=>S({href:e,class:t.inlineLink,target:"_blank",rel:"noopener noreferrer"},s),xe=(e,s,r)=>o({class:t.card},w({class:t.cardTitle},e),h({class:t.pageP},s),I({class:t.pageUl},...r.map(a=>$({class:t.pageLi},a)))),We=()=>o(o({class:t.pageHero},o({class:t.badgeRow},C({class:t.badge},"Monorepo docs"),C({class:t.badge},"CLI + GUI + server"),C({class:t.badge},"Source-aligned reference")),h({class:t.heroEyebrow},"Documentation"),D({class:t.pageH1},"How ScriptDB is put together and how the pieces fit."),h({class:t.pageLead},"This site now describes ScriptDB as it exists in the current monorepo: a server with official browser and Node clients, a CLI, a browser GUI, shared storage and VM packages, and system modules used inside executed code."),o({class:t.heroActions},S({href:"#/usage",class:t.buttonPrimary},"Open Usage"),S({href:"#/api",class:t.buttonSecondary},"API Reference"),ve(L.repository,"Monorepo Source"))),o({class:t.section},h({class:t.sectionLabel},"Platform Shape"),k({class:t.pageH2},"The website now maps to the real ScriptDB workspace."),h({class:t.pageLead},"ScriptDB is not just a single binary. The repository ships application surfaces for humans, transport clients for apps, and lower-level packages that handle storage, execution, and shared modules."),o({class:t.features},xe("Apps","The repo includes the pieces operators touch directly during development and maintenance.",["The CLI starts, stops, monitors, and shells into the server.","The browser GUI provides Monaco-based editing and database inspection.","The server owns the TCP endpoint and browser-facing proxy flow."]),xe("Packages","The monorepo packages are split by transport and runtime responsibility.",["@scriptdb/client for TCP connections from Node and automation.","@scriptdb/browser-client for browser access through the proxy on port + 1.","server, storage, system-modules, and vm packages support the runtime."]),xe("Workflow","The happy path is intentionally simple even though the platform is modular.",["Install the CLI or release binary.","Start the server and create a database.","Run TypeScript or JavaScript, then save the database when you want persistence."]))),o({class:t.section},h({class:t.sectionLabel},"Transport"),k({class:t.pageH2},"There is one database model with two client transports."),h({class:t.pageLead},"The Node client talks directly to the configured TCP port. The browser client talks to the WebSocket proxy on the next port, but both clients expose nearly the same high-level database operations."),o({class:t.splitGrid},o({class:t.card},w({class:t.cardTitle},"Protocol summary"),h({class:t.pageP},"This is the transport contract the docs now assume throughout the site."),v(Ue)),o({class:t.card},w({class:t.cardTitle},"Database lifecycle"),h({class:t.pageP},"Databases are named execution contexts on the server. Clients create them, run code inside them, optionally update metadata, and persist them with ",E({class:t.pageCode},"saveDatabase()")," when the in-memory state should be written to disk."),I({class:t.pageUl},$({class:t.pageLi},E({class:t.pageCode},"run(code, databaseName)")," sends TypeScript or JavaScript for evaluation."),$({class:t.pageLi},E({class:t.pageCode},"updateDatabase(databaseName, data)")," updates metadata about the database."),$({class:t.pageLi},E({class:t.pageCode},"scriptdb shell")," is the quickest way to smoke test a server before wiring a full client app."))))),o({class:t.section},h({class:t.sectionLabel},"Filesystem"),k({class:t.pageH2},"Local installs create a predictable ScriptDB home folder."),h({class:t.pageLead},"The install scripts and CLI expect a user-scoped `.scriptdb` folder that holds the binary, configuration, databases, package workspace, and PM2 artifacts when you run daemonized processes."),o({class:t.splitGrid},o({class:t.card},w({class:t.cardTitle},"Directory layout"),v(ie)),o({class:t.card},w({class:t.cardTitle},"Minimal configuration"),h({class:t.pageP},"The current docs assume a JSON config file in the ScriptDB home directory. Keep credentials and secure settings aligned with the environment you are deploying into."),v(oe)))),o({class:t.section},h({class:t.sectionLabel},"Packages Inside ScriptDB"),k({class:t.pageH2},"Package management and system modules are part of the product story."),h({class:t.pageLead},"ScriptDB is built for running code, so the docs need to cover both the package workspace and the system modules that are available to executed scripts."),o({class:t.splitGrid},o({class:t.card},w({class:t.cardTitle},"Package workspace"),h({class:t.pageP},"Use the CLI to install packages into the shared ScriptDB package directory or the current folder when you want project-local resolution."),v(ne)),o({class:t.card},w({class:t.cardTitle},"System modules"),h({class:t.pageP},"The monorepo also ships a system modules package for common file-style operations from executed code."),I({class:t.pageUl},...Oe.map(e=>$({class:t.pageLi},E({class:t.pageCode},e))))))),o({class:t.section},h({class:t.sectionLabel},"Inspection"),k({class:t.pageH2},"The shell remains the fastest way to understand a live instance."),h({class:t.pageLead},"For first-contact debugging and database inspection, the shell is still the shortest feedback loop."),v(B),o({class:t.note},"Use ",we("/installation","Installation")," to set up a machine, ",we("/usage","Usage")," for operational workflows, and ",we("/api","API reference")," for the current client surfaces. Package pages are also available on ",ve(L.browserClient,"npm")," and ",ve(L.nodeClient,"npm"),".")));var Je=(e,s)=>S({href:`#${e}`,class:t.inlineLink},s),Z=(e,s)=>$({class:t.pageLi},E({class:t.pageCode},e)," - ",s),ze=()=>o(o({class:t.pageHero},o({class:t.badgeRow},C({class:t.badge},"Operations"),C({class:t.badge},"Security"),C({class:t.badge},"Persistence")),h({class:t.heroEyebrow},"Usage"),D({class:t.pageH1},"Operate ScriptDB as a server-backed code workflow, not a generic data store."),h({class:t.pageLead},"The key daily tasks are starting the server, inspecting it from the shell, managing the package workspace, connecting the right client for the runtime, and deciding when to persist database state."),o({class:t.heroActions},S({href:"#/api",class:t.buttonPrimary},"Client API"),S({href:"#/scripts",class:t.buttonSecondary},"Install Scripts"))),o({class:t.section},h({class:t.sectionLabel},"Server Operations"),k({class:t.pageH2},"Bring the server up first, then use the shell for fast feedback."),h({class:t.pageLead},"Most operational work starts in the CLI. You can keep the process in the foreground locally, daemonize it with PM2, inspect logs and health, and drop into the shell whenever you need to inspect a live database quickly."),o({class:t.splitGrid},o({class:t.card},w({class:t.cardTitle},"Lifecycle commands"),v(F)),o({class:t.card},w({class:t.cardTitle},"Interactive shell"),h({class:t.pageP},"The shell is the shortest path to validating that a new environment is wired correctly."),v(B)))),o({class:t.section},h({class:t.sectionLabel},"Packages And Config"),k({class:t.pageH2},"ScriptDB has its own package workspace and runtime configuration."),h({class:t.pageLead},"If the executed code depends on npm packages, install them into ScriptDB\u2019s shared package area or locally next to the project. Keep the server config small and explicit so it is easy to audit and reproduce."),o({class:t.splitGrid},o({class:t.card},w({class:t.cardTitle},"Package management"),h({class:t.pageP},"These commands target the package workspace ScriptDB uses during execution."),v(ne)),o({class:t.card},w({class:t.cardTitle},"Configuration"),h({class:t.pageP},"A minimal config is enough for local development. Tighten credentials and secure settings before production use."),v(oe)))),o({class:t.section},h({class:t.sectionLabel},"Authentication"),k({class:t.pageH2},"Use explicit credentials and signing where the runtime supports it."),h({class:t.pageLead},"The Node client source exposes the strongest transport options today, including signing and richer retry controls. Browser flows still authenticate against the proxy, but backend and automation tasks should prefer the TCP client when you need tighter security controls."),o({class:t.splitGrid},o({class:t.card},w({class:t.cardTitle},"Username and password"),v(re)),o({class:t.card},w({class:t.cardTitle},"Message signing in the Node client"),v(ae)))),o({class:t.section},h({class:t.sectionLabel},"Smoke Tests"),k({class:t.pageH2},"Verify the environment before you start writing larger workflows."),h({class:t.pageLead},"A short verification sequence catches most broken installs or missing PATH changes before you spend time debugging application code."),o({class:t.splitGrid},o({class:t.card},w({class:t.cardTitle},"Verification commands"),v(q)),o({class:t.card},w({class:t.cardTitle},"Operational habits that pay off"),I({class:t.pageUl},Z("scriptdb status","Confirm the server is really up before attaching clients."),Z("saveDatabase()","Persist important state deliberately instead of assuming memory should be durable."),Z("scriptdb add","Install runtime dependencies into ScriptDB rather than embedding ad hoc import hacks."),Z("username/password in options","Prefer explicit credentials in client options over embedding them in connection URIs."),Z("Node client for automation","Use the TCP client for scripts, workers, and services that need richer transport options."))))),o({class:t.note},"Use ",Je("/quick-start","Quick Start")," when you need the shortest working path, and move to ",Je("/api","API reference")," when you are ready to wire the browser or Node client into real code."));var _e=(e,s)=>S({href:e,class:t.inlineLink,target:"_blank",rel:"noopener noreferrer"},s),_=(e,s)=>o({class:t.feature},w({class:t.featureH3},e),h({class:t.pageP},s)),Qe=()=>o(o({class:t.pageHero},o({class:t.badgeRow},C({class:t.badge},"PowerShell + Bash"),C({class:t.badge},"Release binaries"),C({class:t.badge},"Windows, Linux, macOS")),h({class:t.heroEyebrow},"Install Scripts"),D({class:t.pageH1},"Use the shipped scripts when you want a direct ScriptDB binary install."),h({class:t.pageLead},"The repository publishes platform installers that resolve the right release asset, place the binary in the standard ScriptDB folder, and handle the user-level PATH story differently for Windows and Unix-like shells."),o({class:t.heroActions},S({href:"#/installation",class:t.buttonPrimary},"Open Installation"),S({href:L.releases,class:t.buttonSecondary,target:"_blank",rel:"noopener noreferrer"},"Release Assets"))),o({class:t.section},h({class:t.sectionLabel},"What The Scripts Handle"),k({class:t.pageH2},"The installer path is optimized for fast machine bootstrap."),h({class:t.pageLead},"The scripts are useful when you want a release binary on a host without first setting up a full JavaScript toolchain."),o({class:t.features},_("Release download","Both installers resolve a GitHub release asset instead of compiling the monorepo on the target machine."),_("Platform detection","Windows chooses x64 or x86, while the Unix script selects OS, CPU architecture, and Linux libc flavor when relevant."),_("User-scoped install","By default ScriptDB lands in a user-owned `.scriptdb` folder so local experimentation does not need system package manager privileges."),_("PATH setup","The PowerShell installer writes the user PATH directly. The Unix installer prints the shell command you should add to bash, zsh, or fish configuration."),_("Customizable","Both installers support `SCRIPTDB_VERSION` and `SCRIPTDB_INSTALL` so you can pin versions or relocate the installation."),_("Clean removal","Matching uninstall scripts remove the install directory and help you clean up PATH references when necessary."))),o({class:t.section},h({class:t.sectionLabel},"Run The Installers"),k({class:t.pageH2},"Choose the script that matches the host OS."),h({class:t.pageLead},"The website now points at the repository `scripts/` directory directly so the commands match the files that actually live in this repo."),o({class:t.splitGrid},o({class:t.card},w({class:t.cardTitle},"Windows PowerShell"),h({class:t.pageP},"Downloads the correct Windows release asset, installs it under the user profile, and attempts to append the binary directory to the user PATH."),v(N.windowsBinary)),o({class:t.card},w({class:t.cardTitle},"Linux and macOS shell"),h({class:t.pageP},"Detects OS, CPU architecture, and musl vs glibc on Linux before downloading the matching binary to `~/.scriptdb/bin` by default."),v(N.unixBinary)))),o({class:t.section},h({class:t.sectionLabel},"Customize The Install"),k({class:t.pageH2},"Pin a version or choose a different home directory."),h({class:t.pageLead},"These environment variables are the main customization hooks surfaced by the install scripts."),o({class:t.splitGrid},o({class:t.card},w({class:t.cardTitle},"Version pinning"),h({class:t.pageP},"Set `SCRIPTDB_VERSION` when you need reproducible machine images or controlled rollouts."),v(`${N.windowsVersion}

${N.unixVersion}`)),o({class:t.card},w({class:t.cardTitle},"Custom install location"),h({class:t.pageP},"Set `SCRIPTDB_INSTALL` when you need a shared tools directory or a non-default home layout."),v(`${N.windowsCustomDir}

${N.unixCustomDir}`)))),o({class:t.section},h({class:t.sectionLabel},"After Install"),k({class:t.pageH2},"Inspect the folder layout, verify the binary, and keep uninstall commands nearby."),h({class:t.pageLead},"Local installs are intentionally predictable so support and debugging stay simple."),o({class:t.splitGrid},o({class:t.card},w({class:t.cardTitle},"Expected layout"),v(ie)),o({class:t.card},w({class:t.cardTitle},"Verification and uninstall"),v(`${q}

${N.windowsUninstall}

${N.unixUninstall}`)))),o({class:t.section},h({class:t.sectionLabel},"Platform Support"),k({class:t.pageH2},"The scripts are aimed at the release matrix shipped by the repository."),I({class:t.pageUl},$({class:t.pageLi},"Windows x64 and x86 release binaries are selected from the PowerShell installer."),$({class:t.pageLi},"Linux builds support x64 and ARM64, with musl detection for distributions that need it."),$({class:t.pageLi},"macOS builds support Intel and Apple Silicon hosts through the Unix installer flow."),$({class:t.pageLi},"The scripts are best suited to developer workstations, CI runners, and internal images that need a quick binary bootstrap."))),o({class:t.note},"If you already have Node or Bun, the global CLI package on ",_e(L.cliPackage,"npm")," is usually the cleaner path. Use the script installers when you want release binaries directly from ",_e(L.releases,"GitHub Releases"),"."));var X=(e,s)=>S({href:e,class:t.inlineLink,target:"_blank",rel:"noopener noreferrer"},s),T=(e,s)=>$({class:t.pageLi},E({class:t.pageCode},e)," - ",s),R=(e,s,r)=>o({class:t.card},w({class:t.cardTitle},e),h({class:t.pageP},s),I({class:t.pageUl},...r)),Ye=()=>{let e=U("browser");return o(o({class:t.pageHero},o({class:t.badgeRow},C({class:t.badge},"API reference"),C({class:t.badge},"@scriptdb/browser-client 1.1.3"),C({class:t.badge},"@scriptdb/client 1.1.3")),h({class:t.heroEyebrow},"API"),D({class:t.pageH1},"Client reference based on the current source, not the old placeholder docs."),h({class:t.pageLead},"The previous API page described a different product. This version is narrowed to the public surfaces exposed today by `packages/browser-client/src/index.ts` and `packages/client/src/index.ts` in the ScriptDB monorepo."),o({class:t.heroActions},X(L.browserClient,"Browser Package"),X(L.nodeClient,"Node Package"),X(L.repository,"Monorepo"))),o({class:t.tabs},P(e,s=>V({class:s==="browser"?t.tabActive:t.tab,onclick:()=>e.value="browser"},"@scriptdb/browser-client")),P(e,s=>V({class:s==="node"?t.tabActive:t.tab,onclick:()=>e.value="node"},"@scriptdb/client"))),o({class:t.tabContent},P(e,s=>s==="browser"?wt():vt())))},wt=()=>o(o({class:t.section},h({class:t.sectionLabel},"Browser Client"),k({class:t.pageH2},"The browser client uses an options object and talks to the proxy on port + 1."),h({class:t.pageLead},"The current source exports `BrowserClient` and a default export. Unlike the older placeholder docs, the constructor in source takes a configuration object with `host`, `port`, `username`, `password`, `requestTimeout`, `secure`, and an optional logger."),o({class:t.splitGrid},o({class:t.card},w({class:t.cardTitle},"Install"),v("npm install @scriptdb/browser-client"),h({class:t.pageP},"Package: ",X(L.browserClient,"@scriptdb/browser-client"))),o({class:t.card},w({class:t.cardTitle},"Constructor"),h({class:t.pageP},"The source currently builds the WebSocket endpoint from `host` and `port`, then connects to the proxy on `port + 1`."),v(Ve)))),o({class:t.section},h({class:t.sectionLabel},"Public Surface"),k({class:t.pageH2},"The main browser methods are small and focused."),h({class:t.pageLead},"The browser client stays intentionally lean: connect, authenticate, manage databases, run code, and fall back to raw actions when needed."),o({class:t.features},R("Connection and auth","Use these to establish or inspect the browser session.",[T("connected","Getter that reports whether the WebSocket session is currently open."),T("connect()","Opens the WebSocket connection and sends the login request."),T("login(username, password)","Authenticates explicitly after construction if needed."),T("logout()","Ends the authenticated session on the server side."),T("disconnect() / close()","Close the browser connection and reject pending requests.")]),R("Database lifecycle","These methods manipulate named databases on the server.",[T("listDatabases()","Fetches the available database names from the server."),T("createDatabase(name)","Creates a new database context."),T("removeDatabase(name)","Deletes a database from the server."),T("renameDatabase(oldName, newName)","Renames an existing database."),T("getDatabase(name)","Fetches the stored content for a database."),T("updateDatabase(databaseName, data)","Sends metadata updates for a database.")]),R("Execution and persistence","This is the high-level workflow most browser apps will use.",[T("run(code, databaseName)","Executes TypeScript or JavaScript in the named database."),T("saveDatabase(databaseName, code?)","Persists the current database state to disk, optionally with code."),T("getInfo()","Retrieves server metadata and status information."),T("executeShell(command)","Sends a shell command request through the server interface.")]),R("Low-level actions","Drop down to raw actions when you need to send a custom payload.",[T("execute({ action, data })","Sends a raw action payload like `script-code`, `save-db`, or `get-info`."),T("sendRequest(action, data)","Convenience wrapper that forwards to the raw execute path."),T("requestTimeout","Configured in the constructor and enforced per in-flight request.")]))),o({class:t.section},h({class:t.sectionLabel},"Examples"),k({class:t.pageH2},"Use the high-level API first, then drop to raw actions only when necessary."),o({class:t.splitGrid},o({class:t.card},w({class:t.cardTitle},"Quick start"),v(W)),o({class:t.card},w({class:t.cardTitle},"Raw execute"),v(Be)))),o({class:t.note},"Source note: this client currently documents a constructor that takes an options object rather than a URI string. That difference is intentional here because the page follows the source implementation.")),vt=()=>o(o({class:t.section},h({class:t.sectionLabel},"Node Client"),k({class:t.pageH2},"The Node client is the richer transport surface for services and automation."),h({class:t.pageLead},"The current source exports `ScriptDBClient` with a `scriptdb://` connection URI plus an options object for TLS, retries, message framing, queue limits, signing, logging, and credential handling."),o({class:t.splitGrid},o({class:t.card},w({class:t.cardTitle},"Install"),v("npm install @scriptdb/client"),h({class:t.pageP},"Package: ",X(L.nodeClient,"@scriptdb/client"))),o({class:t.card},w({class:t.cardTitle},"Constructor"),h({class:t.pageP},"The URI selects host, port, and optional database. Credentials can be passed in the URI or, preferably, in the options object."),v(He)))),o({class:t.section},h({class:t.sectionLabel},"Public Surface"),k({class:t.pageH2},"The Node client adds queueing, retries, TLS, and lifecycle controls."),h({class:t.pageLead},"Use this client when the caller runs in Node, Bun, or a server-side automation context and you want the most control over transport behavior."),o({class:t.features},R("Connection lifecycle","These methods control the socket and the client lifecycle.",[T("connected","Getter that reports the current TCP or TLS connection state."),T("connect()","Connects, authenticates, and resolves once the session is ready."),T("disconnect() / close()","Gracefully ends the current socket."),T("destroy()","Destroys the client, clears timers, and rejects queued work.")]),R("Database lifecycle","The high-level database operations mirror the browser client where possible.",[T("listDatabases()","Fetches the list of available databases."),T("createDatabase(name)","Creates a named database on the server."),T("removeDatabase(name)","Deletes a named database."),T("renameDatabase(oldName, newName)","Renames a database."),T("updateDatabase(databaseName, data)","Updates stored metadata for the database.")]),R("Execution and server actions","This is the main path for real application code.",[T("run(code, databaseName)","Executes TypeScript or JavaScript in the selected database."),T("saveDatabase(databaseName, code?)","Persists the database to disk."),T("getInfo()","Returns server information."),T("executeShell(command)","Sends a shell command request to the server.")]),R("Transport options","These settings are the reason to prefer the Node client for back-end workflows.",[T("secure / tlsOptions","Enable TLS and pass through Node TLS connection options."),T("retries / retryDelay","Control reconnection behavior."),T("frame / preferLengthPrefix","Choose NDJSON or length-prefixed framing."),T("maxPending / maxQueue / maxMessageSize","Control request queueing and message limits."),T("signing / tokenRefresh","Enable message signing and token refresh strategies.")]))),o({class:t.section},h({class:t.sectionLabel},"Examples"),k({class:t.pageH2},"A normal workflow uses high-level methods, with raw execute only for special cases."),o({class:t.splitGrid},o({class:t.card},w({class:t.cardTitle},"Quick start"),v(J)),o({class:t.card},w({class:t.cardTitle},"Raw execute"),v(Re)))),o({class:t.section},h({class:t.sectionLabel},"Security Options"),k({class:t.pageH2},"Authentication is basic by default, but the Node client exposes stronger controls."),o({class:t.splitGrid},o({class:t.card},w({class:t.cardTitle},"Explicit credentials"),v(re)),o({class:t.card},w({class:t.cardTitle},"HMAC signing"),v(ae)))),o({class:t.note},"Both clients understand the same core actions like `script-code`, `list-dbs`, `create-db`, `save-db`, and `get-info`, but the Node client is the better fit when you need retries, TLS, framing control, or request queue tuning."));var Ke=[{path:"/",component:je},{path:"/installation",component:Fe},{path:"/quick-start",component:qe},{path:"/docs",component:We},{path:"/usage",component:ze},{path:"/scripts",component:Qe},{path:"/api",component:Ye}],xt={mode:"hash",base:"/script-db",routes:Ke},le=Ie(xt),Ze=()=>P(le.currentRoute,e=>{let s=Ke.find(r=>r.path===e.path);return s?s.component():{tagName:"div",props:{},children:["404 - Not Found"]}});var St=[{label:"Home",path:"/"},{label:"Installation",path:"/installation"},{label:"Quick Start",path:"/quick-start"},{label:"Docs",path:"/docs"},{label:"Usage",path:"/usage"},{label:"API",path:"/api"},{label:"Scripts",path:"/scripts"}],Xe=()=>{let e=s=>r=>{r.preventDefault(),le.push(s)};return Te({class:t.header},Le({class:`${t.container} ${t.nav}`},S({href:"#/",class:t.logo,onclick:e("/")},C({class:t.logoMark},"S"),C({class:t.logoText},"ScriptDB")),P(le.currentRoute,s=>I({class:t.navLinks},...St.map(r=>$(S({href:`#${r.path}`,class:s.path===r.path?t.navLinkActive:t.navLink,onclick:e(r.path)},r.label))))),o({class:t.navActions},S({href:L.repository,class:t.navButton,target:"_blank",rel:"noopener noreferrer"},"GitHub"))))};var et=()=>{let e=new Date().getFullYear();return ke({class:t.footer},o({class:`${t.container} ${t.footerGrid}`},o({class:t.footerBrand},h({class:t.cardTitle},"ScriptDB"),h("Store, version, and execute TypeScript or JavaScript through a ScriptDB server with a CLI, browser GUI, and official browser and Node clients."),h(`This site is aligned with the ScriptDB ${se} monorepo shape and focuses on the workflows that ship with the server, CLI, GUI, and clients.`)),o({class:t.footerLinks},h({class:t.footerHeading},"Navigate"),S({href:"#/"},"Overview"),S({href:"#/quick-start"},"Quick Start"),S({href:"#/docs"},"Documentation"),S({href:"#/usage"},"Usage"),S({href:"#/api"},"API reference")),o({class:t.footerLinks},h({class:t.footerHeading},"Packages"),S({href:"#/installation"},"Installation"),S({href:L.cliPackage,target:"_blank",rel:"noopener noreferrer"},"@scriptdb/cli"),S({href:L.browserClient,target:"_blank",rel:"noopener noreferrer"},"@scriptdb/browser-client"),S({href:L.nodeClient,target:"_blank",rel:"noopener noreferrer"},"@scriptdb/client"),S({href:L.releases,target:"_blank",rel:"noopener noreferrer"},"Releases"))),h({class:t.footerSmall},`\xA9 ${e} ScriptDB. Documentation site for the ScriptDB monorepo.`))};var tt=!1,st=()=>{if(tt)return;tt=!0;let e=document.createElement("style");e.id="app-styles",e.textContent=`
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Space+Grotesk:wght@400;500;700&display=swap');

    :root {
      --bg-top: #fbf5ec;
      --bg-bottom: #efe7da;
      --surface: rgba(255, 255, 255, 0.72);
      --surface-strong: rgba(255, 253, 249, 0.88);
      --ink: #162235;
      --muted: #5d6a7b;
      --brand: #11344f;
      --brand-strong: #0b2234;
      --accent: #c86a3c;
      --line: rgba(17, 52, 79, 0.14);
      --shadow: 0 24px 60px rgba(17, 52, 79, 0.12);
      --shadow-soft: 0 14px 30px rgba(17, 52, 79, 0.08);
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      min-height: 100vh;
      font-family: 'Space Grotesk', 'Segoe UI', sans-serif;
      line-height: 1.6;
      color: var(--ink);
      background:
        radial-gradient(circle at top left, rgba(200, 106, 60, 0.18), transparent 32%),
        radial-gradient(circle at top right, rgba(17, 52, 79, 0.14), transparent 28%),
        linear-gradient(180deg, var(--bg-top) 0%, #f4ede2 48%, var(--bg-bottom) 100%);
    }

    body::before {
      content: '';
      position: fixed;
      inset: 0;
      pointer-events: none;
      background-image: linear-gradient(rgba(17, 52, 79, 0.025) 1px, transparent 1px),
        linear-gradient(90deg, rgba(17, 52, 79, 0.025) 1px, transparent 1px);
      background-size: 42px 42px;
      mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.75), transparent 90%);
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    button,
    input,
    textarea,
    select {
      font: inherit;
    }

    pre,
    code {
      font-family: 'IBM Plex Mono', Consolas, monospace;
    }

    ::selection {
      background: rgba(200, 106, 60, 0.2);
    }

    #app {
      min-height: 100vh;
    }

    .app-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      position: relative;
    }

    .container {
      width: min(1180px, calc(100% - 32px));
      margin: 0 auto;
    }

    .header {
      position: sticky;
      top: 0;
      z-index: 20;
      backdrop-filter: blur(18px);
      background: rgba(251, 245, 236, 0.78);
      border-bottom: 1px solid var(--line);
    }

    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      padding: 18px 0;
    }

    .logo {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      font-size: 1.1rem;
      font-weight: 700;
      letter-spacing: -0.03em;
      color: var(--brand-strong);
    }

    .logo-mark {
      width: 40px;
      height: 40px;
      display: grid;
      place-items: center;
      border-radius: 12px;
      background: linear-gradient(135deg, var(--brand), #2c668f);
      color: #fff;
      box-shadow: 0 12px 26px rgba(17, 52, 79, 0.18);
    }

    .logo-text {
      font-size: 1.08rem;
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 12px;
      list-style: none;
      flex-wrap: wrap;
    }

    .nav-link,
    .nav-link-active {
      display: inline-flex;
      align-items: center;
      padding: 10px 14px;
      border-radius: 999px;
      color: var(--muted);
      font-size: 0.96rem;
      transition: all 0.18s ease;
    }

    .nav-link:hover {
      color: var(--brand);
      background: rgba(17, 52, 79, 0.06);
    }

    .nav-link-active {
      color: var(--brand-strong);
      background: rgba(17, 52, 79, 0.1);
      box-shadow: inset 0 0 0 1px rgba(17, 52, 79, 0.08);
    }

    .nav-actions {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .nav-button,
    .button-primary,
    .button-secondary {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 12px 18px;
      border-radius: 999px;
      font-weight: 600;
      transition: transform 0.18s ease, background 0.18s ease, border-color 0.18s ease;
      border: 1px solid transparent;
    }

    .button-primary {
      color: #fff;
      background: linear-gradient(135deg, var(--brand), #265c83);
      box-shadow: 0 16px 28px rgba(17, 52, 79, 0.18);
    }

    .nav-button,
    .button-secondary {
      color: var(--brand-strong);
      background: rgba(255, 255, 255, 0.62);
      border-color: var(--line);
      box-shadow: var(--shadow-soft);
    }

    .nav-button:hover,
    .button-primary:hover,
    .button-secondary:hover {
      transform: translateY(-1px);
    }

    .nav-button:hover,
    .button-secondary:hover {
      background: rgba(255, 255, 255, 0.88);
      border-color: rgba(17, 52, 79, 0.22);
    }

    .main-content {
      flex: 1;
      padding: 32px 0 48px;
    }

    .page {
      width: min(1180px, calc(100% - 32px));
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 40px;
    }

    .page-hero {
      position: relative;
      overflow: hidden;
      padding: 32px;
      border-radius: 36px;
      background: linear-gradient(135deg, var(--surface-strong), rgba(255, 250, 244, 0.74));
      border: 1px solid rgba(17, 52, 79, 0.12);
      box-shadow: var(--shadow);
    }

    .page-hero::after {
      content: '';
      position: absolute;
      right: -120px;
      bottom: -160px;
      width: 360px;
      height: 360px;
      background: radial-gradient(circle, rgba(200, 106, 60, 0.2), transparent 62%);
      pointer-events: none;
    }

    .badge-row {
      position: relative;
      z-index: 1;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 16px;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      padding: 7px 12px;
      border-radius: 999px;
      background: rgba(17, 52, 79, 0.08);
      color: var(--brand-strong);
      font-size: 0.84rem;
      font-weight: 600;
      letter-spacing: 0.01em;
    }

    .hero-eyebrow,
    .section-label {
      color: var(--accent);
      font-size: 0.82rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }

    .hero-eyebrow {
      position: relative;
      z-index: 1;
      margin-bottom: 14px;
    }

    .hero-title,
    .page-h1 {
      color: var(--brand-strong);
      line-height: 0.94;
      letter-spacing: -0.05em;
    }

    .hero-title {
      position: relative;
      z-index: 1;
      max-width: 12ch;
      margin-bottom: 18px;
      font-size: clamp(2.6rem, 7vw, 4.8rem);
    }

    .page-h1 {
      font-size: clamp(2.2rem, 6vw, 3.5rem);
      margin-bottom: 12px;
    }

    .subtitle,
    .page-lead,
    .page-p {
      color: var(--muted);
      line-height: 1.78;
    }

    .subtitle,
    .page-lead {
      max-width: 68ch;
      font-size: clamp(1.08rem, 2vw, 1.25rem);
    }

    .subtitle {
      position: relative;
      z-index: 1;
    }

    .hero-actions {
      position: relative;
      z-index: 1;
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      margin: 28px 0 32px;
    }

    .stat-grid {
      position: relative;
      z-index: 1;
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 16px;
    }

    .stat-card,
    .feature,
    .card,
    .step-card,
    .footer-grid {
      border: 1px solid rgba(17, 52, 79, 0.1);
      box-shadow: var(--shadow-soft);
    }

    .stat-card {
      padding: 18px 20px;
      border-radius: 20px;
      background: rgba(255, 255, 255, 0.74);
    }

    .stat-value {
      display: block;
      margin-bottom: 6px;
      color: var(--brand-strong);
      font-size: 1.45rem;
      font-weight: 700;
    }

    .stat-label {
      color: var(--muted);
      font-size: 0.95rem;
      line-height: 1.5;
    }

    .section {
      display: flex;
      flex-direction: column;
      gap: 18px;
    }

    .page-h2 {
      color: var(--brand-strong);
      font-size: clamp(1.6rem, 3vw, 2.35rem);
      letter-spacing: -0.04em;
    }

    .page-h3,
    .feature-h3,
    .card-title,
    .footer-heading {
      color: var(--brand-strong);
      letter-spacing: -0.02em;
    }

    .page-h3,
    .feature-h3,
    .card-title {
      font-size: 1.12rem;
    }

    .page-ul {
      display: grid;
      gap: 10px;
      padding-left: 1.25rem;
      color: var(--muted);
    }

    .page-li {
      line-height: 1.7;
    }

    .features {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 18px;
    }

    .feature,
    .card,
    .step-card {
      padding: 24px;
      border-radius: 24px;
      background: rgba(255, 255, 255, 0.72);
      transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
    }

    .feature:hover,
    .card:hover {
      transform: translateY(-3px);
      box-shadow: 0 18px 32px rgba(17, 52, 79, 0.12);
    }

    .feature-h3,
    .card-title {
      margin-bottom: 10px;
    }

    .split-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 18px;
      align-items: start;
    }

    .page-pre {
      overflow: auto;
      padding: 18px 20px;
      border-radius: 20px;
      background: #152334;
      color: #eff4f8;
      border: 1px solid rgba(255, 255, 255, 0.08);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04), 0 16px 30px rgba(11, 34, 52, 0.18);
    }

    .page-code {
      display: block;
      white-space: pre;
      font-size: 0.92rem;
      line-height: 1.7;
      background: transparent;
      color: inherit;
    }

    :not(pre) > .page-code {
      display: inline;
      padding: 0.1rem 0.4rem;
      border-radius: 8px;
      background: rgba(17, 52, 79, 0.08);
      color: var(--brand-strong);
    }

    .tabs {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .tab,
    .tab-active {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 11px 16px;
      border-radius: 999px;
      border: 1px solid var(--line);
      cursor: pointer;
      font-weight: 600;
      background: rgba(255, 255, 255, 0.62);
      color: var(--muted);
      transition: all 0.18s ease;
    }

    .tab:hover {
      color: var(--brand-strong);
      background: rgba(255, 255, 255, 0.88);
    }

    .tab-active {
      color: #fff;
      background: var(--brand);
      border-color: var(--brand);
      box-shadow: 0 10px 20px rgba(17, 52, 79, 0.14);
    }

    .tab-content {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .step-grid {
      display: grid;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      gap: 14px;
    }

    .step-card {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .step-number {
      width: 34px;
      height: 34px;
      display: grid;
      place-items: center;
      border-radius: 50%;
      background: rgba(17, 52, 79, 0.1);
      color: var(--brand-strong);
      font-weight: 700;
    }

    .note {
      padding: 16px 18px;
      border-radius: 18px;
      background: rgba(43, 122, 103, 0.1);
      border: 1px solid rgba(43, 122, 103, 0.16);
      color: #21463b;
    }

    .inline-link,
    .footer-links a {
      color: var(--brand);
      text-decoration: underline;
      text-decoration-color: rgba(17, 52, 79, 0.22);
      text-underline-offset: 0.18em;
    }

    .inline-link:hover,
    .footer-links a:hover {
      color: var(--accent);
      text-decoration-color: rgba(200, 106, 60, 0.35);
    }

    .footer {
      margin-top: auto;
      padding: 20px 0 36px;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: 1.4fr 1fr 1fr;
      gap: 20px;
      padding: 28px 30px;
      border-radius: 28px;
      background: rgba(255, 255, 255, 0.68);
    }

    .footer-brand {
      display: flex;
      flex-direction: column;
      gap: 10px;
      color: var(--muted);
    }

    .footer-links {
      display: flex;
      flex-direction: column;
      gap: 10px;
      color: var(--muted);
    }

    .footer-heading {
      margin-bottom: 6px;
      font-size: 0.9rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    .footer-small {
      margin-top: 16px;
      text-align: center;
      color: var(--muted);
      font-size: 0.92rem;
    }

    @media (max-width: 1080px) {
      .features,
      .step-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .stat-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .footer-grid {
        grid-template-columns: 1fr 1fr;
      }
    }

    @media (max-width: 820px) {
      .nav {
        flex-wrap: wrap;
      }

      .nav-links {
        order: 3;
        width: 100%;
      }

      .nav-actions {
        margin-left: auto;
      }

      .split-grid,
      .stat-grid,
      .features,
      .step-grid,
      .footer-grid {
        grid-template-columns: 1fr;
      }

      .page-hero {
        padding: 24px;
      }
    }

    @media (max-width: 640px) {
      .container,
      .page {
        width: min(100% - 24px, 1180px);
      }

      .nav {
        padding: 14px 0;
      }

      .logo-mark {
        width: 36px;
        height: 36px;
      }

      .hero-title,
      .page-h1 {
        font-size: clamp(2rem, 12vw, 3rem);
      }

      .hero-actions {
        flex-direction: column;
        align-items: stretch;
      }

      .button-primary,
      .button-secondary,
      .nav-button,
      .tab,
      .tab-active {
        width: 100%;
      }

      .main-content {
        padding-top: 24px;
      }
    }
  `,document.head.appendChild(e)};st();var kt=()=>o({class:t.appContainer},Xe(),Ce({class:t.mainContent},o({class:t.page},Ze())),et()),rt=document.getElementById("app");rt&&Pe(rt,kt());
