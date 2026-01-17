var z=typeof document<"u";function Fe(t){return t.charAt(0).toUpperCase()+t.slice(1)}function D(t){return z&&t?t.bind(x):void 0}function pe(t,s,a){t.forEach(n=>{let c=s+Fe(n);a[c]=K(n)})}var K=t=>function(s,...a){if(!arguments.length)return{tagName:t,props:{},children:[]};let n=s&&typeof s=="object"&&"value"in s&&"subscribe"in s,c=s&&typeof s=="object"&&"tagName"in s,p=typeof s!="object"||Array.isArray(s)||s===null||n||c,r=p?{}:s,d=p?[s,...a]:a;if(!d.length)return{tagName:t,props:r,children:[]};let b=[];for(let g=0,f=d.length;g<f;g++){let l=d[g];if(!(l==null||l===!1))if(Array.isArray(l))for(let C=0,y=l.length;C<y;C++){let m=l[C];m!=null&&m!==!1&&b.push(m)}else b.push(l)}return{tagName:t,props:r,children:b}},Ve=["html","head","body","title","base","link","meta","style","address","article","aside","footer","header","h1","h2","h3","h4","h5","h6","main","nav","section","blockquote","dd","div","dl","dt","figcaption","figure","hr","li","ol","p","pre","ul","a","abbr","b","bdi","bdo","br","cite","code","data","dfn","em","i","kbd","mark","q","rp","rt","ruby","s","samp","small","span","strong","sub","sup","time","u","wbr","area","audio","img","map","track","video","embed","iframe","object","param","picture","portal","source","canvas","noscript","script","del","ins","caption","col","colgroup","table","tbody","td","tfoot","th","thead","tr","button","datalist","fieldset","form","input","label","legend","meter","optgroup","option","output","progress","select","textarea","details","dialog","menu","summary","slot","template"],We=["svg","circle","rect","path","line","polyline","polygon","ellipse","g","text","tspan","defs","linearGradient","radialGradient","stop","pattern","mask","clipPath","use","symbol","marker","image","foreignObject","animate","animateTransform","animateMotion","set","filter","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feGaussianBlur","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence"],je=["math","mi","mn","mo","ms","mtext","mrow","mfrac","msqrt","mroot","msub","msup"],V={};Ve.forEach(t=>{V[t]=K(t)});pe(We,"svg",V);pe(je,"math",V);V.varElement=K("var");var{html:mt,head:ft,body:bt,title:yt,base:vt,link:Ct,meta:St,style:wt,address:Lt,article:Tt,aside:Pt,footer:$t,header:de,h1:k,h2:H,h3:P,h4:L,h5:Ht,h6:Rt,main:ue,nav:ge,section:xt,blockquote:Nt,dd:kt,div:v,dl:Dt,dt:Et,figcaption:At,figure:Mt,hr:Ut,li:o,ol:Ot,p:T,pre:S,ul:w,a:M,abbr:It,b:Bt,bdi:Ft,bdo:Vt,br:Wt,cite:jt,code:i,data:qt,dfn:Jt,em:zt,i:_t,kbd:Gt,mark:Qt,q:Kt,rp:Yt,rt:Zt,ruby:Xt,s:es,samp:ts,small:ss,span:Y,strong:u,sub:as,sup:ns,time:rs,u:is,wbr:os,area:cs,audio:ls,img:ps,map:ds,track:us,video:gs,embed:hs,iframe:ms,object:fs,param:bs,picture:ys,portal:vs,source:Cs,canvas:Ss,noscript:ws,script:Ls,del:Ts,ins:Ps,caption:$s,col:Hs,colgroup:Rs,table:xs,tbody:Ns,td:ks,tfoot:Ds,th:Es,thead:As,tr:Ms,button:Z,datalist:Us,fieldset:Os,form:Is,input:Bs,label:Fs,legend:Vs,meter:Ws,optgroup:js,option:qs,output:Js,progress:zs,select:_s,textarea:Gs,details:Qs,dialog:Ks,menu:Ys,summary:Zs,slot:Xs,template:ea,svgSvg:ta,svgCircle:sa,svgRect:aa,svgPath:na,svgLine:ra,svgPolyline:ia,svgPolygon:oa,svgEllipse:ca,svgG:la,svgText:pa,svgTspan:da,svgDefs:ua,svgLinearGradient:ga,svgRadialGradient:ha,svgStop:ma,svgPattern:fa,svgMask:ba,svgClipPath:ya,svgUse:va,svgSymbol:Ca,svgMarker:Sa,svgImage:wa,svgForeignObject:La,svgAnimate:Ta,svgAnimateTransform:Pa,svgAnimateMotion:$a,svgSet:Ha,svgFilter:Ra,svgFeBlend:xa,svgFeColorMatrix:Na,svgFeComponentTransfer:ka,svgFeComposite:Da,svgFeConvolveMatrix:Ea,svgFeDiffuseLighting:Aa,svgFeDisplacementMap:Ma,svgFeFlood:Ua,svgFeGaussianBlur:Oa,svgFeMorphology:Ia,svgFeOffset:Ba,svgFeSpecularLighting:Fa,svgFeTile:Va,svgFeTurbulence:Wa,mathMath:ja,mathMi:qa,mathMn:Ja,mathMo:za,mathMs:_a,mathMtext:Ga,mathMrow:Qa,mathMfrac:Ka,mathMsqrt:Ya,mathMroot:Za,mathMsub:Xa,mathMsup:en,varElement:tn}=V;var x=z?document:void 0,sn=D(x?.querySelector),an=D(x?.querySelectorAll),nn=D(x?.createElement),rn=z?x.createElementNS.bind(x,"http://www.w3.org/2000/svg"):void 0,on=z?x.createElementNS.bind(x,"http://www.w3.org/1998/Math/MathML"):void 0,cn=D(x?.createDocumentFragment),ln=D(x?.createTextNode),pn=D(x?.createComment),dn=D(x?.getElementById),un=D(x?.getElementsByClassName),gn=D(x?.getElementsByTagName),hn=D(x?.getElementsByName);function X(t){return typeof t=="string"?document.getElementById(t.replace("#","")):t}function ee(t,s){if(!t)throw new Error(`Element not found: ${s}`);return t}function O(t){return t==null||t===!1}function he(t){return t==null||typeof t=="boolean"||typeof t=="string"||typeof t=="number"}var qe=class{constructor(){this.elementCache=new WeakMap,this.reactiveNodes=new Map}createElement(t,s={},a=[]){return{tagName:t,props:s,children:a}}renderToDOM(t,s){if(t==null||t===!1)return;if(typeof t!="object"){s.appendChild(document.createTextNode(String(t)));return}let{tagName:a,props:n,children:c}=t,p=a==="svg"||a[0]==="s"&&a[1]==="v"&&a[2]==="g"||s.namespaceURI==="http://www.w3.org/2000/svg",r=p?document.createElementNS("http://www.w3.org/2000/svg",a.replace("svg","").toLowerCase()||a):document.createElement(a);for(let g in n){let f=n[g];if(f==null||f===!1)continue;let l=g.charCodeAt(0);if(l===99&&(g.length<6||g[5]==="N")){let C=Array.isArray(f)?f.join(" "):f;p?r.setAttribute("class",C):r.className=C}else if(l===115&&g.length===5)if(typeof f=="string")r.style.cssText=f;else{let C=r.style;for(let y in f)C[y]=f[y]}else l===111&&g.charCodeAt(1)===110?r[g.toLowerCase()]=f:l===100&&g.length>20?r.innerHTML=f.e:l===114&&g.length===3?setTimeout(()=>{typeof f=="function"?f(r):f.current=r},0):r.setAttribute(g,f===!0?"":String(f))}let d=c.length;if(!d){s.appendChild(r);return}let b=g=>{for(let f=0;f<d;f++){let l=c[f];if(!O(l))if(Array.isArray(l))for(let C=0,y=l.length;C<y;C++){let m=l[C];!O(m)&&this.renderToDOM(m,g)}else this.renderToDOM(l,g)}};if(d>30){let g=document.createDocumentFragment();b(g),r.appendChild(g)}else b(r);s.appendChild(r)}render(t,s){let a=ee(X(t),t);if(a.innerHTML="",s.children&&s.children.length>500){let n=document.createDocumentFragment();this.renderToDOM(s,n),a.appendChild(n)}else this.renderToDOM(s,a);return a}batchRender(t,s){let a=ee(X(t),t),n=s.length;if(n>3e3){let c=document.createDocumentFragment(),p=0,r=1500,d=()=>{let b=Math.min(p+r,n);for(let g=p;g<b;g++)this.renderToDOM(s[g],c);p=b,p>=n?a.appendChild(c):requestAnimationFrame(d)};d()}else{let c=document.createDocumentFragment();for(let p=0;p<n;p++)this.renderToDOM(s[p],c);a.appendChild(c)}return a}renderChunked(t,s,a=5e3,n){let c=ee(X(t),t),p=s.length,r=0,d=()=>{let b=Math.min(r+a,p),g=document.createDocumentFragment();for(let f=r;f<b;f++)this.renderToDOM(s[f],g);c.appendChild(g),r=b,n&&n(r,p),r<p&&requestAnimationFrame(d)};return requestAnimationFrame(d),c}renderToHead(...t){let s=document.head;if(s)for(let a of t.flat())a&&this.renderToDOM(a,s);return s}addStyle(t){let s=document.createElement("style");return s.textContent=t,document.head.appendChild(s)}addMeta(t){let s=document.createElement("meta");for(let a in t)s.setAttribute(a,t[a]);return document.head.appendChild(s)}addLink(t){let s=document.createElement("link");for(let a in t)s.setAttribute(a,t[a]);return document.head.appendChild(s)}setTitle(t){return document.title=t}createState(t,s={}){let a=t,n=new Set,c=null,{throttle:p=0,deep:r=!1}=s,d=()=>n.forEach(g=>g(a)),b=()=>{p>0?c||(c=setTimeout(()=>{c=null,d()},p)):d()};return{get value(){return a},set value(g){(r?JSON.stringify(a)!==JSON.stringify(g):a!==g)&&(a=g,b())},subscribe(g){return n.add(g),()=>n.delete(g)},destroy(){n.clear(),c&&clearTimeout(c)}}}computed(t,s){let a=t.map(c=>c.value),n=this.createState(s(...a));return t.forEach((c,p)=>{c.subscribe(r=>{a[p]=r,n.value=s(...a)})}),n}effect(t){t()}createVirtualList(t,s,a,n=50,c=5){let p=t.clientHeight,r=s.length*n,d=0,b=()=>{let l=Math.max(0,Math.floor(d/n)-c),C=Math.min(s.length,Math.ceil((d+p)/n)+c);return{start:l,end:C}},g=()=>{let{start:l,end:C}=b(),y=document.createElement("div");y.style.cssText=`height:${r}px;position:relative`;for(let m=l;m<C;m++){let h=document.createElement("div");h.style.cssText=`position:absolute;top:${m*n}px;height:${n}px;width:100%`,this.renderToDOM(a(s[m],m),h),y.appendChild(h)}t.innerHTML="",t.appendChild(y)},f=()=>{d=t.scrollTop,requestAnimationFrame(g)};return t.addEventListener("scroll",f),g(),{render:g,destroy:()=>{t.removeEventListener("scroll",f),t.innerHTML=""}}}lazy(t){let s=null,a=!1;return async(...n)=>(!s&&!a&&(a=!0,s=await t(),a=!1),s?s(...n):{tagName:"div",props:{class:"loading"},children:["Loading..."]})}cleanupUnusedElements(t){let s=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT),a=[];for(;s.nextNode();){let n=s.currentNode;n.id&&n.id.startsWith("r")&&!this.elementCache.has(n)&&a.push(n)}return a.forEach(n=>n.remove()),a.length}renderToString(t,s={}){let{pretty:a=!1,indent:n=0}=s,c=a?"  ".repeat(n):"",p=a?`
`:"",r=this.resolveStateValue(t);if(r=this.unwrapReactive(r),Array.isArray(r))return r.map(y=>this.renderToString(y,s)).join("");if(typeof r!="object"||r===null)return r==null||r===!1?"":this.escapeHtml(String(r));let{tagName:d,props:b,children:g}=r,f=this.isSelfClosingTag(d),l=`${c}<${d}`,C=this.propsToAttributes(b);if(C&&(l+=` ${C}`),f)return l+=` />${p}`,l;if(l+=">",b.dangerouslySetInnerHTML)return l+=b.dangerouslySetInnerHTML.e,l+=`</${d}>${p}`,l;if(g&&g.length>0){let y=g.map(h=>{let $=this.resolveStateValue(h);return this.unwrapReactive($)}),m=y.some(h=>typeof h=="object"&&h!==null&&!Array.isArray(h)&&"tagName"in h);if(a&&m){l+=p;for(let h of y)if(!O(h))if(Array.isArray(h))for(let $ of h)O($)||(l+=this.renderToString($,{pretty:a,indent:n+1}));else l+=this.renderToString(h,{pretty:a,indent:n+1});l+=c}else for(let h of y)if(!O(h))if(Array.isArray(h))for(let $ of h)O($)||(l+=this.renderToString($,{pretty:!1,indent:0}));else l+=this.renderToString(h,{pretty:!1,indent:0})}return l+=`</${d}>${p}`,l}resolveStateValue(t){return t&&typeof t=="object"&&"value"in t&&"subscribe"in t?t.value:t}isReactiveWrapper(t){return!t||typeof t!="object"||!t.tagName?!1:t.tagName==="span"&&t.props?.id&&typeof t.props.id=="string"&&t.props.id.match(/^r[a-z0-9]{9}$/)}unwrapReactive(t){if(!this.isReactiveWrapper(t))return t;let s=t.children;if(!s||s.length===0)return"";if(s.length===1){let a=s[0];if(a&&typeof a=="object"&&a.tagName==="span"){let n=a.props,c=!n||Object.keys(n).length===0,p=a.children&&a.children.length===1&&typeof a.children[0]=="string";if(c&&p)return a.children[0]}return this.unwrapReactive(a)}return s.map(a=>this.unwrapReactive(a))}escapeHtml(t){let s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"};return t.replace(/[&<>"']/g,a=>s[a])}isSelfClosingTag(t){return new Set(["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"]).has(t.toLowerCase())}propsToAttributes(t){let s=[];for(let a in t){if(a==="children"||a==="dangerouslySetInnerHTML"||a==="ref")continue;let n=t[a];if(n=this.resolveStateValue(n),!(n==null||n===!1)&&!(a.startsWith("on")&&typeof n=="function")){if(a==="className"||a==="class"){let c=Array.isArray(n)?n.join(" "):n;c&&s.push(`class="${this.escapeHtml(String(c))}"`);continue}if(a==="style"){let c=this.styleToString(n);c&&s.push(`style="${this.escapeHtml(c)}"`);continue}if(n===!0){s.push(a);continue}s.push(`${a}="${this.escapeHtml(String(n))}"`)}}return s.join(" ")}styleToString(t){if(typeof t=="string")return t;if(typeof t=="object"&&t!==null){let s=[];for(let a in t){let n=a.replace(/([A-Z])/g,"-$1").toLowerCase();s.push(`${n}:${t[a]}`)}return s.join(";")}return""}isState(t){return t&&typeof t=="object"&&"value"in t&&"subscribe"in t&&typeof t.subscribe=="function"}createReactiveChild(t,s){let a=s(t.value);if(typeof window<"u"&&typeof document<"u"){let n={node:null,renderFn:s};this.reactiveNodes.set(t,n),t.subscribe(()=>{if(n.node&&n.node.parentNode){let c=s(t.value);n.node.textContent=String(c??"")}})}return a}jsonToVNode(t){if(this.isState(t))return this.createReactiveChild(t,r=>r);if(he(t))return t;let{tag:s,attributes:a={},children:n}=t,c={};for(let r in a){let d=a[r];r==="class"?c.className=this.isState(d)?d.value:d:c[r]=this.isState(d)?d.value:d}let p=[];if(n!=null)if(Array.isArray(n))for(let r of n)if(this.isState(r))p.push(this.createReactiveChild(r,d=>d));else{let d=this.jsonToVNode(r);d!=null&&d!==!1&&p.push(d)}else if(this.isState(n))p.push(this.createReactiveChild(n,r=>r));else if(typeof n=="object"&&"tag"in n){let r=this.jsonToVNode(n);r!=null&&r!==!1&&p.push(r)}else p.push(n);return{tagName:s,props:c,children:p}}vNodeJsonToVNode(t){if(this.isState(t))return this.createReactiveChild(t,r=>r);if(he(t))return t;let{tagName:s,props:a={},children:n=[]}=t,c={};for(let r in a){let d=a[r];c[r]=this.isState(d)?d.value:d}let p=[];for(let r of n)if(this.isState(r))p.push(this.createReactiveChild(r,d=>d));else{let d=this.vNodeJsonToVNode(r);d!=null&&d!==!1&&p.push(d)}return{tagName:s,props:c,children:p}}renderJson(t,s){let a=this.jsonToVNode(s);if(!a||typeof a!="object"||!("tagName"in a))throw new Error("Invalid JSON structure");return this.render(t,a)}renderVNode(t,s){let a=this.vNodeJsonToVNode(s);if(!a||typeof a!="object"||!("tagName"in a))throw new Error("Invalid VNode JSON structure");return this.render(t,a)}renderJsonToString(t,s={}){let a=this.jsonToVNode(t);return this.renderToString(a,s)}renderVNodeToString(t,s={}){let a=this.vNodeJsonToVNode(t);return this.renderToString(a,s)}renderToHTMLDocument(t,s={}){let{title:a="",meta:n=[],links:c=[],scripts:p=[],styles:r=[],lang:d="en",head:b="",bodyAttrs:g={},pretty:f=!1}=s,l=f?`
`:"",C=f?"  ":"",y=f?"    ":"",m=`<!DOCTYPE html>${l}<html lang="${d}">${l}${C}<head>${l}${y}<meta charset="UTF-8">${l}${y}<meta name="viewport" content="width=device-width, initial-scale=1.0">${l}`;a&&(m+=`${y}<title>${this.escapeHtml(a)}</title>${l}`);for(let h of n){m+=`${y}<meta`;for(let $ in h)m+=` ${$}="${this.escapeHtml(h[$])}"`;m+=`>${l}`}for(let h of c){m+=`${y}<link`;for(let $ in h)m+=` ${$}="${this.escapeHtml(h[$])}"`;m+=`>${l}`}for(let h of r)h.href?m+=`${y}<link rel="stylesheet" href="${this.escapeHtml(h.href)}">${l}`:h.content&&(m+=`${y}<style>${h.content}</style>${l}`);b&&(m+=b+l),m+=`${C}</head>${l}${C}<body`;for(let h in g)m+=` ${h}="${this.escapeHtml(g[h])}"`;m+=`>${l}`,m+=this.renderToString(t,{pretty:f,indent:2});for(let h of p)m+=`${y}<script`,h.type&&(m+=` type="${this.escapeHtml(h.type)}"`),h.async&&(m+=" async"),h.defer&&(m+=" defer"),h.src?m+=` src="${this.escapeHtml(h.src)}"><\/script>${l}`:h.content?m+=`>${h.content}<\/script>${l}`:m+=`><\/script>${l}`;return m+=`${C}</body>${l}</html>`,m}getElementCache(){return this.elementCache}},_=new qe,Je=_.render.bind(_),fn=_.renderToString.bind(_),me=Je;function te(t){return typeof t=="string"?document.getElementById(t.replace("#","")):t}function se(t,s){if(!t)throw new Error(`Element not found: ${s}`);return t}function I(t){return t==null||t===!1}function fe(t){return t==null||typeof t=="boolean"||typeof t=="string"||typeof t=="number"}var ze=class{constructor(){this.elementCache=new WeakMap,this.reactiveNodes=new Map}createElement(t,s={},a=[]){return{tagName:t,props:s,children:a}}renderToDOM(t,s){if(t==null||t===!1)return;if(typeof t!="object"){s.appendChild(document.createTextNode(String(t)));return}let{tagName:a,props:n,children:c}=t,p=a==="svg"||a[0]==="s"&&a[1]==="v"&&a[2]==="g"||s.namespaceURI==="http://www.w3.org/2000/svg",r=p?document.createElementNS("http://www.w3.org/2000/svg",a.replace("svg","").toLowerCase()||a):document.createElement(a);for(let g in n){let f=n[g];if(f==null||f===!1)continue;let l=g.charCodeAt(0);if(l===99&&(g.length<6||g[5]==="N")){let C=Array.isArray(f)?f.join(" "):f;p?r.setAttribute("class",C):r.className=C}else if(l===115&&g.length===5)if(typeof f=="string")r.style.cssText=f;else{let C=r.style;for(let y in f)C[y]=f[y]}else l===111&&g.charCodeAt(1)===110?r[g.toLowerCase()]=f:l===100&&g.length>20?r.innerHTML=f.e:l===114&&g.length===3?setTimeout(()=>{typeof f=="function"?f(r):f.current=r},0):r.setAttribute(g,f===!0?"":String(f))}let d=c.length;if(!d){s.appendChild(r);return}let b=g=>{for(let f=0;f<d;f++){let l=c[f];if(!I(l))if(Array.isArray(l))for(let C=0,y=l.length;C<y;C++){let m=l[C];!I(m)&&this.renderToDOM(m,g)}else this.renderToDOM(l,g)}};if(d>30){let g=document.createDocumentFragment();b(g),r.appendChild(g)}else b(r);s.appendChild(r)}render(t,s){let a=se(te(t),t);if(a.innerHTML="",s.children&&s.children.length>500){let n=document.createDocumentFragment();this.renderToDOM(s,n),a.appendChild(n)}else this.renderToDOM(s,a);return a}batchRender(t,s){let a=se(te(t),t),n=s.length;if(n>3e3){let c=document.createDocumentFragment(),p=0,r=1500,d=()=>{let b=Math.min(p+r,n);for(let g=p;g<b;g++)this.renderToDOM(s[g],c);p=b,p>=n?a.appendChild(c):requestAnimationFrame(d)};d()}else{let c=document.createDocumentFragment();for(let p=0;p<n;p++)this.renderToDOM(s[p],c);a.appendChild(c)}return a}renderChunked(t,s,a=5e3,n){let c=se(te(t),t),p=s.length,r=0,d=()=>{let b=Math.min(r+a,p),g=document.createDocumentFragment();for(let f=r;f<b;f++)this.renderToDOM(s[f],g);c.appendChild(g),r=b,n&&n(r,p),r<p&&requestAnimationFrame(d)};return requestAnimationFrame(d),c}renderToHead(...t){let s=document.head;if(s)for(let a of t.flat())a&&this.renderToDOM(a,s);return s}addStyle(t){let s=document.createElement("style");return s.textContent=t,document.head.appendChild(s)}addMeta(t){let s=document.createElement("meta");for(let a in t)s.setAttribute(a,t[a]);return document.head.appendChild(s)}addLink(t){let s=document.createElement("link");for(let a in t)s.setAttribute(a,t[a]);return document.head.appendChild(s)}setTitle(t){return document.title=t}createState(t,s={}){let a=t,n=new Set,c=null,{throttle:p=0,deep:r=!1}=s,d=()=>n.forEach(g=>g(a)),b=()=>{p>0?c||(c=setTimeout(()=>{c=null,d()},p)):d()};return{get value(){return a},set value(g){(r?JSON.stringify(a)!==JSON.stringify(g):a!==g)&&(a=g,b())},subscribe(g){return n.add(g),()=>n.delete(g)},destroy(){n.clear(),c&&clearTimeout(c)}}}computed(t,s){let a=t.map(c=>c.value),n=this.createState(s(...a));return t.forEach((c,p)=>{c.subscribe(r=>{a[p]=r,n.value=s(...a)})}),n}effect(t){t()}createVirtualList(t,s,a,n=50,c=5){let p=t.clientHeight,r=s.length*n,d=0,b=()=>{let l=Math.max(0,Math.floor(d/n)-c),C=Math.min(s.length,Math.ceil((d+p)/n)+c);return{start:l,end:C}},g=()=>{let{start:l,end:C}=b(),y=document.createElement("div");y.style.cssText=`height:${r}px;position:relative`;for(let m=l;m<C;m++){let h=document.createElement("div");h.style.cssText=`position:absolute;top:${m*n}px;height:${n}px;width:100%`,this.renderToDOM(a(s[m],m),h),y.appendChild(h)}t.innerHTML="",t.appendChild(y)},f=()=>{d=t.scrollTop,requestAnimationFrame(g)};return t.addEventListener("scroll",f),g(),{render:g,destroy:()=>{t.removeEventListener("scroll",f),t.innerHTML=""}}}lazy(t){let s=null,a=!1;return async(...n)=>(!s&&!a&&(a=!0,s=await t(),a=!1),s?s(...n):{tagName:"div",props:{class:"loading"},children:["Loading..."]})}cleanupUnusedElements(t){let s=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT),a=[];for(;s.nextNode();){let n=s.currentNode;n.id&&n.id.startsWith("r")&&!this.elementCache.has(n)&&a.push(n)}return a.forEach(n=>n.remove()),a.length}renderToString(t,s={}){let{pretty:a=!1,indent:n=0}=s,c=a?"  ".repeat(n):"",p=a?`
`:"",r=this.resolveStateValue(t);if(r=this.unwrapReactive(r),Array.isArray(r))return r.map(y=>this.renderToString(y,s)).join("");if(typeof r!="object"||r===null)return r==null||r===!1?"":this.escapeHtml(String(r));let{tagName:d,props:b,children:g}=r,f=this.isSelfClosingTag(d),l=`${c}<${d}`,C=this.propsToAttributes(b);if(C&&(l+=` ${C}`),f)return l+=` />${p}`,l;if(l+=">",b.dangerouslySetInnerHTML)return l+=b.dangerouslySetInnerHTML.e,l+=`</${d}>${p}`,l;if(g&&g.length>0){let y=g.map(h=>{let $=this.resolveStateValue(h);return this.unwrapReactive($)}),m=y.some(h=>typeof h=="object"&&h!==null&&!Array.isArray(h)&&"tagName"in h);if(a&&m){l+=p;for(let h of y)if(!I(h))if(Array.isArray(h))for(let $ of h)I($)||(l+=this.renderToString($,{pretty:a,indent:n+1}));else l+=this.renderToString(h,{pretty:a,indent:n+1});l+=c}else for(let h of y)if(!I(h))if(Array.isArray(h))for(let $ of h)I($)||(l+=this.renderToString($,{pretty:!1,indent:0}));else l+=this.renderToString(h,{pretty:!1,indent:0})}return l+=`</${d}>${p}`,l}resolveStateValue(t){return t&&typeof t=="object"&&"value"in t&&"subscribe"in t?t.value:t}isReactiveWrapper(t){return!t||typeof t!="object"||!t.tagName?!1:t.tagName==="span"&&t.props?.id&&typeof t.props.id=="string"&&t.props.id.match(/^r[a-z0-9]{9}$/)}unwrapReactive(t){if(!this.isReactiveWrapper(t))return t;let s=t.children;if(!s||s.length===0)return"";if(s.length===1){let a=s[0];if(a&&typeof a=="object"&&a.tagName==="span"){let n=a.props,c=!n||Object.keys(n).length===0,p=a.children&&a.children.length===1&&typeof a.children[0]=="string";if(c&&p)return a.children[0]}return this.unwrapReactive(a)}return s.map(a=>this.unwrapReactive(a))}escapeHtml(t){let s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"};return t.replace(/[&<>"']/g,a=>s[a])}isSelfClosingTag(t){return new Set(["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"]).has(t.toLowerCase())}propsToAttributes(t){let s=[];for(let a in t){if(a==="children"||a==="dangerouslySetInnerHTML"||a==="ref")continue;let n=t[a];if(n=this.resolveStateValue(n),!(n==null||n===!1)&&!(a.startsWith("on")&&typeof n=="function")){if(a==="className"||a==="class"){let c=Array.isArray(n)?n.join(" "):n;c&&s.push(`class="${this.escapeHtml(String(c))}"`);continue}if(a==="style"){let c=this.styleToString(n);c&&s.push(`style="${this.escapeHtml(c)}"`);continue}if(n===!0){s.push(a);continue}s.push(`${a}="${this.escapeHtml(String(n))}"`)}}return s.join(" ")}styleToString(t){if(typeof t=="string")return t;if(typeof t=="object"&&t!==null){let s=[];for(let a in t){let n=a.replace(/([A-Z])/g,"-$1").toLowerCase();s.push(`${n}:${t[a]}`)}return s.join(";")}return""}isState(t){return t&&typeof t=="object"&&"value"in t&&"subscribe"in t&&typeof t.subscribe=="function"}createReactiveChild(t,s){let a=s(t.value);if(typeof window<"u"&&typeof document<"u"){let n={node:null,renderFn:s};this.reactiveNodes.set(t,n),t.subscribe(()=>{if(n.node&&n.node.parentNode){let c=s(t.value);n.node.textContent=String(c??"")}})}return a}jsonToVNode(t){if(this.isState(t))return this.createReactiveChild(t,r=>r);if(fe(t))return t;let{tag:s,attributes:a={},children:n}=t,c={};for(let r in a){let d=a[r];r==="class"?c.className=this.isState(d)?d.value:d:c[r]=this.isState(d)?d.value:d}let p=[];if(n!=null)if(Array.isArray(n))for(let r of n)if(this.isState(r))p.push(this.createReactiveChild(r,d=>d));else{let d=this.jsonToVNode(r);d!=null&&d!==!1&&p.push(d)}else if(this.isState(n))p.push(this.createReactiveChild(n,r=>r));else if(typeof n=="object"&&"tag"in n){let r=this.jsonToVNode(n);r!=null&&r!==!1&&p.push(r)}else p.push(n);return{tagName:s,props:c,children:p}}vNodeJsonToVNode(t){if(this.isState(t))return this.createReactiveChild(t,r=>r);if(fe(t))return t;let{tagName:s,props:a={},children:n=[]}=t,c={};for(let r in a){let d=a[r];c[r]=this.isState(d)?d.value:d}let p=[];for(let r of n)if(this.isState(r))p.push(this.createReactiveChild(r,d=>d));else{let d=this.vNodeJsonToVNode(r);d!=null&&d!==!1&&p.push(d)}return{tagName:s,props:c,children:p}}renderJson(t,s){let a=this.jsonToVNode(s);if(!a||typeof a!="object"||!("tagName"in a))throw new Error("Invalid JSON structure");return this.render(t,a)}renderVNode(t,s){let a=this.vNodeJsonToVNode(s);if(!a||typeof a!="object"||!("tagName"in a))throw new Error("Invalid VNode JSON structure");return this.render(t,a)}renderJsonToString(t,s={}){let a=this.jsonToVNode(t);return this.renderToString(a,s)}renderVNodeToString(t,s={}){let a=this.vNodeJsonToVNode(t);return this.renderToString(a,s)}renderToHTMLDocument(t,s={}){let{title:a="",meta:n=[],links:c=[],scripts:p=[],styles:r=[],lang:d="en",head:b="",bodyAttrs:g={},pretty:f=!1}=s,l=f?`
`:"",C=f?"  ":"",y=f?"    ":"",m=`<!DOCTYPE html>${l}<html lang="${d}">${l}${C}<head>${l}${y}<meta charset="UTF-8">${l}${y}<meta name="viewport" content="width=device-width, initial-scale=1.0">${l}`;a&&(m+=`${y}<title>${this.escapeHtml(a)}</title>${l}`);for(let h of n){m+=`${y}<meta`;for(let $ in h)m+=` ${$}="${this.escapeHtml(h[$])}"`;m+=`>${l}`}for(let h of c){m+=`${y}<link`;for(let $ in h)m+=` ${$}="${this.escapeHtml(h[$])}"`;m+=`>${l}`}for(let h of r)h.href?m+=`${y}<link rel="stylesheet" href="${this.escapeHtml(h.href)}">${l}`:h.content&&(m+=`${y}<style>${h.content}</style>${l}`);b&&(m+=b+l),m+=`${C}</head>${l}${C}<body`;for(let h in g)m+=` ${h}="${this.escapeHtml(g[h])}"`;m+=`>${l}`,m+=this.renderToString(t,{pretty:f,indent:2});for(let h of p)m+=`${y}<script`,h.type&&(m+=` type="${this.escapeHtml(h.type)}"`),h.async&&(m+=" async"),h.defer&&(m+=" defer"),h.src?m+=` src="${this.escapeHtml(h.src)}"><\/script>${l}`:h.content?m+=`>${h.content}<\/script>${l}`:m+=`><\/script>${l}`;return m+=`${C}</body>${l}</html>`,m}getElementCache(){return this.elementCache}},W=new ze,vn=W.render.bind(W),Cn=W.renderToString.bind(W);function _e(t,s){let a=t.split("/").filter(Boolean),n=s.split("/").filter(Boolean);if(t.endsWith("*")){let p=t.slice(0,-1);if(s.startsWith(p)||p==="/"||t==="*")return{"*":s.slice(p.length)}}if(a.length!==n.length)return null;let c={};for(let p=0;p<a.length;p++){let r=a[p],d=n[p];if(r.startsWith(":"))c[r.slice(1)]=decodeURIComponent(d);else if(r!==d)return null}return c}function be(t,s,a,n,c=!1){let p=t(s,a);return p===!1?!1:typeof p=="string"?(n(p,c),!1):!0}function ye(t){let{mode:s="history",base:a="",routes:n}=t,c=[],p=C=>{let y={};return new URLSearchParams(C).forEach((h,$)=>{y[$]=h}),y},r=()=>s==="hash"?window.location.hash.slice(1)||"/":window.location.pathname.replace(a,"")||"/",d=C=>{let[y,m=""]=C.split("?"),[h,$=""]=y.split("#");return{path:h||"/",params:{},query:p(m),hash:$?"#"+$:""}},b=C=>{for(let y of n){let m=_e(y.path,C);if(m!==null)return{route:y,params:m}}return null},g=W.createState(d(r())),f=(C,y=!1)=>{let m=d(C),h=b(m.path);h&&(m.params=h.params);for(let Be of c)if(!be(Be,m,g.value,f,y))return;if(h?.route.beforeEnter&&!be(h.route.beforeEnter,m,g.value,f,y))return;let $=s==="hash"?"#"+C:a+C;y?window.history.replaceState({path:C},"",$):window.history.pushState({path:C},"",$),g.value=m},l=()=>{let C=r(),y=d(C),m=b(y.path);m&&(y.params=m.params),g.value=y};return typeof window<"u"&&window.addEventListener("popstate",l),{currentRoute:g,navigate:f,push:C=>f(C,!1),replace:C=>f(C,!0),back:()=>window.history.back(),forward:()=>window.history.forward(),go:C=>window.history.go(C),beforeEach:C=>{c.push(C)},destroy:()=>{typeof window<"u"&&window.removeEventListener("popstate",l),g.destroy()}}}function ae(t){return typeof t=="string"?document.getElementById(t.replace("#","")):t}function ne(t,s){if(!t)throw new Error(`Element not found: ${s}`);return t}function B(t){return t==null||t===!1}function ve(t){return t==null||typeof t=="boolean"||typeof t=="string"||typeof t=="number"}var Ge=class{constructor(){this.elementCache=new WeakMap,this.reactiveNodes=new Map}createElement(t,s={},a=[]){return{tagName:t,props:s,children:a}}renderToDOM(t,s){if(t==null||t===!1)return;if(typeof t!="object"){s.appendChild(document.createTextNode(String(t)));return}let{tagName:a,props:n,children:c}=t,p=a==="svg"||a[0]==="s"&&a[1]==="v"&&a[2]==="g"||s.namespaceURI==="http://www.w3.org/2000/svg",r=p?document.createElementNS("http://www.w3.org/2000/svg",a.replace("svg","").toLowerCase()||a):document.createElement(a);for(let g in n){let f=n[g];if(f==null||f===!1)continue;let l=g.charCodeAt(0);if(l===99&&(g.length<6||g[5]==="N")){let C=Array.isArray(f)?f.join(" "):f;p?r.setAttribute("class",C):r.className=C}else if(l===115&&g.length===5)if(typeof f=="string")r.style.cssText=f;else{let C=r.style;for(let y in f)C[y]=f[y]}else l===111&&g.charCodeAt(1)===110?r[g.toLowerCase()]=f:l===100&&g.length>20?r.innerHTML=f.e:l===114&&g.length===3?setTimeout(()=>{typeof f=="function"?f(r):f.current=r},0):r.setAttribute(g,f===!0?"":String(f))}let d=c.length;if(!d){s.appendChild(r);return}let b=g=>{for(let f=0;f<d;f++){let l=c[f];if(!B(l))if(Array.isArray(l))for(let C=0,y=l.length;C<y;C++){let m=l[C];!B(m)&&this.renderToDOM(m,g)}else this.renderToDOM(l,g)}};if(d>30){let g=document.createDocumentFragment();b(g),r.appendChild(g)}else b(r);s.appendChild(r)}render(t,s){let a=ne(ae(t),t);if(a.innerHTML="",s.children&&s.children.length>500){let n=document.createDocumentFragment();this.renderToDOM(s,n),a.appendChild(n)}else this.renderToDOM(s,a);return a}batchRender(t,s){let a=ne(ae(t),t),n=s.length;if(n>3e3){let c=document.createDocumentFragment(),p=0,r=1500,d=()=>{let b=Math.min(p+r,n);for(let g=p;g<b;g++)this.renderToDOM(s[g],c);p=b,p>=n?a.appendChild(c):requestAnimationFrame(d)};d()}else{let c=document.createDocumentFragment();for(let p=0;p<n;p++)this.renderToDOM(s[p],c);a.appendChild(c)}return a}renderChunked(t,s,a=5e3,n){let c=ne(ae(t),t),p=s.length,r=0,d=()=>{let b=Math.min(r+a,p),g=document.createDocumentFragment();for(let f=r;f<b;f++)this.renderToDOM(s[f],g);c.appendChild(g),r=b,n&&n(r,p),r<p&&requestAnimationFrame(d)};return requestAnimationFrame(d),c}renderToHead(...t){let s=document.head;if(s)for(let a of t.flat())a&&this.renderToDOM(a,s);return s}addStyle(t){let s=document.createElement("style");return s.textContent=t,document.head.appendChild(s)}addMeta(t){let s=document.createElement("meta");for(let a in t)s.setAttribute(a,t[a]);return document.head.appendChild(s)}addLink(t){let s=document.createElement("link");for(let a in t)s.setAttribute(a,t[a]);return document.head.appendChild(s)}setTitle(t){return document.title=t}createState(t,s={}){let a=t,n=new Set,c=null,{throttle:p=0,deep:r=!1}=s,d=()=>n.forEach(g=>g(a)),b=()=>{p>0?c||(c=setTimeout(()=>{c=null,d()},p)):d()};return{get value(){return a},set value(g){(r?JSON.stringify(a)!==JSON.stringify(g):a!==g)&&(a=g,b())},subscribe(g){return n.add(g),()=>n.delete(g)},destroy(){n.clear(),c&&clearTimeout(c)}}}computed(t,s){let a=t.map(c=>c.value),n=this.createState(s(...a));return t.forEach((c,p)=>{c.subscribe(r=>{a[p]=r,n.value=s(...a)})}),n}effect(t){t()}createVirtualList(t,s,a,n=50,c=5){let p=t.clientHeight,r=s.length*n,d=0,b=()=>{let l=Math.max(0,Math.floor(d/n)-c),C=Math.min(s.length,Math.ceil((d+p)/n)+c);return{start:l,end:C}},g=()=>{let{start:l,end:C}=b(),y=document.createElement("div");y.style.cssText=`height:${r}px;position:relative`;for(let m=l;m<C;m++){let h=document.createElement("div");h.style.cssText=`position:absolute;top:${m*n}px;height:${n}px;width:100%`,this.renderToDOM(a(s[m],m),h),y.appendChild(h)}t.innerHTML="",t.appendChild(y)},f=()=>{d=t.scrollTop,requestAnimationFrame(g)};return t.addEventListener("scroll",f),g(),{render:g,destroy:()=>{t.removeEventListener("scroll",f),t.innerHTML=""}}}lazy(t){let s=null,a=!1;return async(...n)=>(!s&&!a&&(a=!0,s=await t(),a=!1),s?s(...n):{tagName:"div",props:{class:"loading"},children:["Loading..."]})}cleanupUnusedElements(t){let s=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT),a=[];for(;s.nextNode();){let n=s.currentNode;n.id&&n.id.startsWith("r")&&!this.elementCache.has(n)&&a.push(n)}return a.forEach(n=>n.remove()),a.length}renderToString(t,s={}){let{pretty:a=!1,indent:n=0}=s,c=a?"  ".repeat(n):"",p=a?`
`:"",r=this.resolveStateValue(t);if(r=this.unwrapReactive(r),Array.isArray(r))return r.map(y=>this.renderToString(y,s)).join("");if(typeof r!="object"||r===null)return r==null||r===!1?"":this.escapeHtml(String(r));let{tagName:d,props:b,children:g}=r,f=this.isSelfClosingTag(d),l=`${c}<${d}`,C=this.propsToAttributes(b);if(C&&(l+=` ${C}`),f)return l+=` />${p}`,l;if(l+=">",b.dangerouslySetInnerHTML)return l+=b.dangerouslySetInnerHTML.e,l+=`</${d}>${p}`,l;if(g&&g.length>0){let y=g.map(h=>{let $=this.resolveStateValue(h);return this.unwrapReactive($)}),m=y.some(h=>typeof h=="object"&&h!==null&&!Array.isArray(h)&&"tagName"in h);if(a&&m){l+=p;for(let h of y)if(!B(h))if(Array.isArray(h))for(let $ of h)B($)||(l+=this.renderToString($,{pretty:a,indent:n+1}));else l+=this.renderToString(h,{pretty:a,indent:n+1});l+=c}else for(let h of y)if(!B(h))if(Array.isArray(h))for(let $ of h)B($)||(l+=this.renderToString($,{pretty:!1,indent:0}));else l+=this.renderToString(h,{pretty:!1,indent:0})}return l+=`</${d}>${p}`,l}resolveStateValue(t){return t&&typeof t=="object"&&"value"in t&&"subscribe"in t?t.value:t}isReactiveWrapper(t){return!t||typeof t!="object"||!t.tagName?!1:t.tagName==="span"&&t.props?.id&&typeof t.props.id=="string"&&t.props.id.match(/^r[a-z0-9]{9}$/)}unwrapReactive(t){if(!this.isReactiveWrapper(t))return t;let s=t.children;if(!s||s.length===0)return"";if(s.length===1){let a=s[0];if(a&&typeof a=="object"&&a.tagName==="span"){let n=a.props,c=!n||Object.keys(n).length===0,p=a.children&&a.children.length===1&&typeof a.children[0]=="string";if(c&&p)return a.children[0]}return this.unwrapReactive(a)}return s.map(a=>this.unwrapReactive(a))}escapeHtml(t){let s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"};return t.replace(/[&<>"']/g,a=>s[a])}isSelfClosingTag(t){return new Set(["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"]).has(t.toLowerCase())}propsToAttributes(t){let s=[];for(let a in t){if(a==="children"||a==="dangerouslySetInnerHTML"||a==="ref")continue;let n=t[a];if(n=this.resolveStateValue(n),!(n==null||n===!1)&&!(a.startsWith("on")&&typeof n=="function")){if(a==="className"||a==="class"){let c=Array.isArray(n)?n.join(" "):n;c&&s.push(`class="${this.escapeHtml(String(c))}"`);continue}if(a==="style"){let c=this.styleToString(n);c&&s.push(`style="${this.escapeHtml(c)}"`);continue}if(n===!0){s.push(a);continue}s.push(`${a}="${this.escapeHtml(String(n))}"`)}}return s.join(" ")}styleToString(t){if(typeof t=="string")return t;if(typeof t=="object"&&t!==null){let s=[];for(let a in t){let n=a.replace(/([A-Z])/g,"-$1").toLowerCase();s.push(`${n}:${t[a]}`)}return s.join(";")}return""}isState(t){return t&&typeof t=="object"&&"value"in t&&"subscribe"in t&&typeof t.subscribe=="function"}createReactiveChild(t,s){let a=s(t.value);if(typeof window<"u"&&typeof document<"u"){let n={node:null,renderFn:s};this.reactiveNodes.set(t,n),t.subscribe(()=>{if(n.node&&n.node.parentNode){let c=s(t.value);n.node.textContent=String(c??"")}})}return a}jsonToVNode(t){if(this.isState(t))return this.createReactiveChild(t,r=>r);if(ve(t))return t;let{tag:s,attributes:a={},children:n}=t,c={};for(let r in a){let d=a[r];r==="class"?c.className=this.isState(d)?d.value:d:c[r]=this.isState(d)?d.value:d}let p=[];if(n!=null)if(Array.isArray(n))for(let r of n)if(this.isState(r))p.push(this.createReactiveChild(r,d=>d));else{let d=this.jsonToVNode(r);d!=null&&d!==!1&&p.push(d)}else if(this.isState(n))p.push(this.createReactiveChild(n,r=>r));else if(typeof n=="object"&&"tag"in n){let r=this.jsonToVNode(n);r!=null&&r!==!1&&p.push(r)}else p.push(n);return{tagName:s,props:c,children:p}}vNodeJsonToVNode(t){if(this.isState(t))return this.createReactiveChild(t,r=>r);if(ve(t))return t;let{tagName:s,props:a={},children:n=[]}=t,c={};for(let r in a){let d=a[r];c[r]=this.isState(d)?d.value:d}let p=[];for(let r of n)if(this.isState(r))p.push(this.createReactiveChild(r,d=>d));else{let d=this.vNodeJsonToVNode(r);d!=null&&d!==!1&&p.push(d)}return{tagName:s,props:c,children:p}}renderJson(t,s){let a=this.jsonToVNode(s);if(!a||typeof a!="object"||!("tagName"in a))throw new Error("Invalid JSON structure");return this.render(t,a)}renderVNode(t,s){let a=this.vNodeJsonToVNode(s);if(!a||typeof a!="object"||!("tagName"in a))throw new Error("Invalid VNode JSON structure");return this.render(t,a)}renderJsonToString(t,s={}){let a=this.jsonToVNode(t);return this.renderToString(a,s)}renderVNodeToString(t,s={}){let a=this.vNodeJsonToVNode(t);return this.renderToString(a,s)}renderToHTMLDocument(t,s={}){let{title:a="",meta:n=[],links:c=[],scripts:p=[],styles:r=[],lang:d="en",head:b="",bodyAttrs:g={},pretty:f=!1}=s,l=f?`
`:"",C=f?"  ":"",y=f?"    ":"",m=`<!DOCTYPE html>${l}<html lang="${d}">${l}${C}<head>${l}${y}<meta charset="UTF-8">${l}${y}<meta name="viewport" content="width=device-width, initial-scale=1.0">${l}`;a&&(m+=`${y}<title>${this.escapeHtml(a)}</title>${l}`);for(let h of n){m+=`${y}<meta`;for(let $ in h)m+=` ${$}="${this.escapeHtml(h[$])}"`;m+=`>${l}`}for(let h of c){m+=`${y}<link`;for(let $ in h)m+=` ${$}="${this.escapeHtml(h[$])}"`;m+=`>${l}`}for(let h of r)h.href?m+=`${y}<link rel="stylesheet" href="${this.escapeHtml(h.href)}">${l}`:h.content&&(m+=`${y}<style>${h.content}</style>${l}`);b&&(m+=b+l),m+=`${C}</head>${l}${C}<body`;for(let h in g)m+=` ${h}="${this.escapeHtml(g[h])}"`;m+=`>${l}`,m+=this.renderToString(t,{pretty:f,indent:2});for(let h of p)m+=`${y}<script`,h.type&&(m+=` type="${this.escapeHtml(h.type)}"`),h.async&&(m+=" async"),h.defer&&(m+=" defer"),h.src?m+=` src="${this.escapeHtml(h.src)}"><\/script>${l}`:h.content?m+=`>${h.content}<\/script>${l}`:m+=`><\/script>${l}`;return m+=`${C}</body>${l}</html>`,m}getElementCache(){return this.elementCache}},U=new Ge,Ln=U.render.bind(U),Tn=U.renderToString.bind(U),j=(t,s)=>U.createState(t,s);var Qe=class{constructor(t,s,a){this.key=t,this.wsUrl=a,this.ws=null,this.pendingUpdates=[],this.localState=j(s),this.previousValue=s,this.connect()}get value(){return this.localState.value}set value(t){this.previousValue=this.localState.value,this.localState.value=t,this.sendToServer(t)}get state(){return this.localState}onChange(t){return this.localState.subscribe(s=>{let a=this.previousValue;this.previousValue=s,t(s,a)})}update(t){this.value=t(this.value)}connect(){if(typeof window>"u")return;let t=this.wsUrl||`ws://${location.host}`;this.ws=new WebSocket(t),this.ws.addEventListener("open",()=>{for(this.subscribe();this.pendingUpdates.length>0;){let s=this.pendingUpdates.shift();this.sendToServer(s)}}),this.ws.addEventListener("message",s=>{this.handleMessage(s.data)}),this.ws.addEventListener("close",()=>{setTimeout(()=>this.connect(),1e3)}),this.ws.addEventListener("error",s=>{console.error("[SharedState] WebSocket error:",s)})}subscribe(){!this.ws||this.ws.readyState!==WebSocket.OPEN||this.ws.send(JSON.stringify({type:"state:subscribe",key:this.key}))}handleMessage(t){try{let s=JSON.parse(t);if(s.key!==this.key)return;(s.type==="state:init"||s.type==="state:update")&&(this.localState.value=s.value)}catch{}}sendToServer(t){if(this.ws){if(this.ws.readyState!==WebSocket.OPEN){this.pendingUpdates.push(t);return}this.ws.send(JSON.stringify({type:"state:change",key:this.key,value:t}))}}disconnect(){this.ws&&(this.ws.close(),this.ws=null)}destroy(){this.disconnect(),this.localState.destroy()}};var Ke=class{constructor(){this.states=new Map}create(t,s,a){if(this.states.has(t))return this.states.get(t);let n=new Qe(t,s,a);return this.states.set(t,n),n}get(t){return this.states.get(t)}delete(t){let s=this.states.get(t);return s?(s.destroy(),this.states.delete(t)):!1}clear(){this.states.forEach(t=>t.destroy()),this.states.clear()}},Pn=new Ke,Ye=(t,s)=>(t&&cancelAnimationFrame(t),requestAnimationFrame(()=>{s()})),Ze=(t,s)=>{let a=document.createDocumentFragment();if(s&&t&&typeof t=="object"&&"tagName"in t){let{children:n}=t;for(let c of n)U.renderToDOM(c,a)}else U.renderToDOM(t,a);return a},Xe=(t,s)=>{for(let a in s){let n=s[a];if(a!=="ref")if(a==="class"||a==="className")t.className=Array.isArray(n)?n.join(" "):n||"";else if(a==="style"&&typeof n=="object"){let c=t.style;for(let p in n)c[p]=n[p]}else a.startsWith("on")?t[a.toLowerCase()]=n:n!=null&&n!==!1?t.setAttribute(a,String(n===!0?"":n)):t.removeAttribute(a)}},E=(t,s)=>{let a=null,n=null,c=null,p=!0,r=s(t.value),d=r&&typeof r=="object"&&"tagName"in r,b=r==null||r===!1,g=()=>{if(!n&&!c)return;let l=s(t.value);if(l==null||l===!1)p&&n&&(c=document.createComment("reactive"),n.parentNode?.replaceChild(c,n),p=!1);else if(!p&&c&&n&&(c.parentNode?.replaceChild(n,c),c=null,p=!0),n){let y=!!(d&&l&&typeof l=="object"&&"tagName"in l);if(y){let{props:h}=l;Xe(n,h)}let m=Ze(l,y);n.textContent="",n.appendChild(m),U.getElementCache().set(n,!0)}};t.subscribe(()=>{a=Ye(a,()=>{g(),a=null})});let f=l=>{n=l,b&&l.parentNode&&(c=document.createComment("reactive"),l.parentNode.replaceChild(c,l),p=!1)};if(d){let l=r;return{tagName:l.tagName,props:{...l.props,ref:f},children:l.children}}return{tagName:"span",props:{ref:f},children:[r]}};var e={appContainer:"app-container",container:"container",header:"header",nav:"nav",logo:"logo",navLinks:"nav-links",navLink:"nav-link",navLinkActive:"nav-link-active",mainContent:"main-content",page:"page",pageH1:"page-h1",pageH2:"page-h2",pageH3:"page-h3",pageP:"page-p",pageUl:"page-ul",pageLi:"page-li",pagePre:"page-pre",pageCode:"page-code",hero:"hero",heroTitle:"hero-title",subtitle:"subtitle",features:"features",feature:"feature",featureH3:"feature-h3",section:"section",footer:"footer",tabs:"tabs",tab:"tab",tabActive:"tab-active",tabContent:"tab-content",downloadSection:"download-section",downloadButton:"download-button"};var Ce=()=>{let t=j("windows");return v(v({class:e.hero},k({class:e.heroTitle},"ScriptDB"),T({class:e.subtitle},"A high-performance in-memory database with real-time synchronization")),v({class:e.features},v({class:e.feature},P({class:e.featureH3},"\u{1F680} High Performance"),T("Sub-millisecond query response with in-memory storage")),v({class:e.feature},P({class:e.featureH3},"\u{1F50C} WebSocket Support"),T("Real-time synchronization for browser applications")),v({class:e.feature},P({class:e.featureH3},"\u{1F4BE} Persistent Storage"),T("Save databases to disk with automatic snapshots")),v({class:e.feature},P({class:e.featureH3},"\u{1F4DD} JavaScript Querying"),T("Use JavaScript for powerful data manipulation")),v({class:e.feature},P({class:e.featureH3},"\u{1F512} Secure"),T("Built-in authentication with HMAC signing support"))),v({class:e.section},H({class:e.pageH2},"Quick Start"),v({class:e.downloadSection},M({href:"https://github.com/d-osc/script-db/releases/download/v1.1.1/ScriptDB.Setup.1.1.1.exe",class:e.downloadButton,target:"_blank",rel:"noopener noreferrer"},"Download ScriptDB GUI for Windows")),v({class:e.tabs},E(t,s=>Z({class:s==="windows"?e.tabActive:e.tab,onclick:()=>t.value="windows"},"Windows (PowerShell)")),E(t,s=>Z({class:s==="linux"?e.tabActive:e.tab,onclick:()=>t.value="linux"},"Linux/macOS (Bash)"))),v({class:e.tabContent},E(t,s=>s==="windows"?S({class:e.pagePre},i({class:e.pageCode},"irm https://raw.githubusercontent.com/d-osc/script-db/refs/heads/main/scripts/install.ps1 | iex")):S({class:e.pagePre},i({class:e.pageCode},"curl -fsSL https://raw.githubusercontent.com/d-osc/script-db/refs/heads/main/scripts/install.sh | bash"))))),v({class:e.section},H({class:e.pageH2},"Why ScriptDB?"),w({class:e.pageUl},o({class:e.pageLi},u("Fast: "),"In-memory storage with sub-millisecond queries"),o({class:e.pageLi},u("Flexible: "),"JavaScript-based querying language"),o({class:e.pageLi},u("Reliable: "),"Auto-reconnect with exponential backoff"),o({class:e.pageLi},u("Real-time: "),"WebSocket support for live updates"),o({class:e.pageLi},u("Open Source: "),"Community-driven development"))))};var Se=()=>v(k({class:e.pageH1},"Installation"),T({class:e.pageP},"ScriptDB can be installed on Windows, Linux, and macOS. Choose the installation method that works best for your platform."),v({class:e.section},H({class:e.pageH2},"Windows"),P({class:e.pageH3},"PowerShell Installation"),T({class:e.pageP},"Open PowerShell and run:"),S({class:e.pagePre},i({class:e.pageCode},"irm https://raw.githubusercontent.com/d-osc/script-db/refs/heads/main/scripts/install.ps1 | iex")),P({class:e.pageH3},"Custom Installation Directory"),S({class:e.pagePre},i({class:e.pageCode},`$env:SCRIPTDB_INSTALL = "C:\\your\\custom\\path"
irm https://raw.githubusercontent.com/d-osc/script-db/refs/heads/main/scripts/install.ps1 | iex`))),v({class:e.section},H({class:e.pageH2},"Linux & macOS"),P({class:e.pageH3},"Bash Installation"),T({class:e.pageP},"Open your terminal and run:"),S({class:e.pagePre},i({class:e.pageCode},"curl -fsSL https://raw.githubusercontent.com/d-osc/script-db/refs/heads/main/scripts/install.sh | bash")),P({class:e.pageH3},"Custom Installation Directory"),S({class:e.pagePre},i({class:e.pageCode},`export SCRIPTDB_INSTALL="/your/custom/path"
curl -fsSL https://raw.githubusercontent.com/d-osc/script-db/refs/heads/main/scripts/install.sh | bash`))),v({class:e.section},H({class:e.pageH2},"Client Libraries"),T({class:e.pageP},"After installing the server, install the client library for your application:"),P({class:e.pageH3},"Browser Client"),S({class:e.pagePre},i({class:e.pageCode},"npm install @scriptdb/browser-client")),T({class:e.pageP},"For browser applications with WebSocket support."),P({class:e.pageH3},"Node.js Client"),S({class:e.pagePre},i({class:e.pageCode},"npm install @scriptdb/client")),T({class:e.pageP},"For Node.js applications with TCP connection.")),v({class:e.section},H({class:e.pageH2},"Quick Start After Installation"),T({class:e.pageP},"Once ScriptDB is installed, you can start using it:"),P({class:e.pageH3},"1. Start the Server"),S({class:e.pagePre},i({class:e.pageCode},`# Start ScriptDB server
scriptdb start

# Start on custom port
scriptdb start --port 8080

# Start in foreground
scriptdb start --foreground`)),P({class:e.pageH3},"2. Create Your First Database"),S({class:e.pagePre},i({class:e.pageCode},`import ScriptDBClient from '@scriptdb/browser-client';

const client = new ScriptDBClient('scriptdb://localhost:1234');
await client.connect();

// Create a database
await client.createDatabase('mydb');

// Insert data
await client.run(
  'db.users.insert({ name: "Alice", age: 30 })',
  'mydb'
);

// Query data
const users = await client.run('db.users.find()', 'mydb');
console.log(users);`))),v({class:e.section},H({class:e.pageH2},"Verify Installation"),T({class:e.pageP},"After installation, verify that ScriptDB is working:"),S({class:e.pagePre},i({class:e.pageCode},`# Check version
scriptdb --version

# View help
scriptdb --help

# Check status
scriptdb status`))),v({class:e.section},H({class:e.pageH2},"Uninstallation"),T({class:e.pageP},"To uninstall ScriptDB:"),P({class:e.pageH3},"Windows"),S({class:e.pagePre},i({class:e.pageCode},"irm https://raw.githubusercontent.com/d-osc/script-db/refs/heads/main/scripts/uninstall.ps1 | iex")),P({class:e.pageH3},"Linux/macOS"),S({class:e.pagePre},i({class:e.pageCode},"curl -fsSL https://raw.githubusercontent.com/d-osc/script-db/refs/heads/main/scripts/uninstall.sh | bash"))));var we=()=>v(k({class:e.pageH1},"Quick Start"),T({class:e.pageP},"Get up and running with ScriptDB in minutes!"),v({class:e.section},H({class:e.pageH2},"1. Installation"),T({class:e.pageP},"First, install ScriptDB for your platform:"),P({class:e.pageH3},"Windows"),S({class:e.pagePre},i({class:e.pageCode},"irm https://raw.githubusercontent.com/d-osc/script-db/refs/heads/main/scripts/install.ps1 | iex")),P({class:e.pageH3},"Linux/macOS"),S({class:e.pagePre},i({class:e.pageCode},"curl -fsSL https://raw.githubusercontent.com/d-osc/script-db/refs/heads/main/scripts/install.sh | bash"))),v({class:e.section},H({class:e.pageH2},"2. Start the Server"),S({class:e.pagePre},i({class:e.pageCode},`# Start ScriptDB server (default port: 1234)
scriptdb start

# Start with custom port
scriptdb start --port 8080

# Start in foreground
scriptdb start --foreground`))),v({class:e.section},H({class:e.pageH2},"3. Install Client Library"),S({class:e.pagePre},i({class:e.pageCode},`# For browser applications
npm install @scriptdb/browser-client

# For Node.js applications
npm install @scriptdb/client`))),v({class:e.section},H({class:e.pageH2},"4. Connect and Query"),P({class:e.pageH3},"Browser Example"),S({class:e.pagePre},i({class:e.pageCode},`import ScriptDBClient from '@scriptdb/browser-client';

// Connect to server
const client = new ScriptDBClient('scriptdb://localhost:1234');
await client.connect();

// Create a database
await client.createDatabase('mydb');

// Insert some data
await client.run(
  'db.users.insert({ name: "John", age: 30 })',
  'mydb'
);

// Query the data
const users = await client.run(
  'db.users.find({ age: { $gt: 25 } })',
  'mydb'
);

console.log('Found users:', users);

// Save to disk
await client.saveDatabase('mydb');`))),v({class:e.section},H({class:e.pageH2},"5. What's Next?"),w({class:e.pageUl},o({class:e.pageLi},u("Documentation")," - Read detailed API documentation"),o({class:e.pageLi},u("Usage Examples")," - Explore advanced usage patterns"),o({class:e.pageLi},u("CLI Reference")," - Learn command-line interface"),o({class:e.pageLi},u("Authentication")," - Set up secure connections"),o({class:e.pageLi},u("Real-Time Sync")," - Enable WebSocket synchronization"))));var Le=()=>v(k({class:e.pageH1},"Documentation"),T({class:e.pageP},"Welcome to the ScriptDB documentation."),v({class:e.section},H({class:e.pageH2},"What is ScriptDB?"),T({class:e.pageP},"ScriptDB is a high-performance in-memory database with JavaScript-based querying and real-time synchronization capabilities. It provides sub-millisecond query response times and supports both browser and Node.js environments.")),v({class:e.section},H({class:e.pageH2},"Core Concepts"),P({class:e.pageH3},"In-Memory Database"),T({class:e.pageP},"ScriptDB stores data in memory for ultra-fast access:"),w({class:e.pageUl},o({class:e.pageLi},"Sub-millisecond query response times"),o({class:e.pageLi},"JavaScript-based querying language"),o({class:e.pageLi},"Multiple isolated databases"),o({class:e.pageLi},"Persistent snapshots to disk")),P({class:e.pageH3},"Real-Time Synchronization"),T({class:e.pageP},"WebSocket support for real-time updates:"),w({class:e.pageUl},o({class:e.pageLi},"Browser client with WebSocket connection"),o({class:e.pageLi},"Node.js client with TCP connection"),o({class:e.pageLi},"Automatic reconnection with exponential backoff"),o({class:e.pageLi},"Request queue management for high concurrency")),P({class:e.pageH3},"Cross-Platform Support"),T({class:e.pageP},"ScriptDB works seamlessly on:"),w({class:e.pageUl},o({class:e.pageLi},u("Windows")," (x64, x86)"),o({class:e.pageLi},u("Linux")," (x64, arm64, with glibc or musl)"),o({class:e.pageLi},u("macOS")," (x64, arm64/Apple Silicon)"))),v({class:e.section},H({class:e.pageH2},"Server Architecture"),P({class:e.pageH3},"Protocol"),T({class:e.pageP},"ScriptDB uses a custom protocol over TCP and WebSocket:"),w({class:e.pageUl},o({class:e.pageLi},"Connection URI: ",i({class:e.pageCode},"scriptdb://host:port/database")),o({class:e.pageLi},"WebSocket port: TCP port + 1"),o({class:e.pageLi},"JSON message format with optional HMAC signing"),o({class:e.pageLi},"Token-based authentication")),P({class:e.pageH3},"Installation Directories"),T({class:e.pageP},"Default installation locations:"),w({class:e.pageUl},o({class:e.pageLi},u("Windows: "),i({class:e.pageCode},"%USERPROFILE%\\.scriptdb")),o({class:e.pageLi},u("Linux/macOS: "),i({class:e.pageCode},"~/.scriptdb")))),v({class:e.section},H({class:e.pageH2},"Environment Variables"),w({class:e.pageUl},o({class:e.pageLi},u("SCRIPTDB_PORT")," - Server port (default: 1234)"),o({class:e.pageLi},u("SCRIPTDB_HOST")," - Server host (default: 0.0.0.0)"),o({class:e.pageLi},u("SCRIPTDB_DATA_DIR")," - Data directory path"),o({class:e.pageLi},u("SCRIPTDB_LOG_LEVEL")," - Logging level (debug, info, warn, error)"))),v({class:e.section},H({class:e.pageH2},"Key Features"),w({class:e.pageUl},o({class:e.pageLi},u("High Performance")," - In-memory storage with sub-millisecond queries"),o({class:e.pageLi},u("WebSocket Support")," - Real-time synchronization for browsers"),o({class:e.pageLi},u("Persistent Storage")," - Save databases to disk at any time"),o({class:e.pageLi},u("Authentication")," - Built-in username/password with token sessions"),o({class:e.pageLi},u("HMAC Signing")," - Optional message signing for enhanced security"),o({class:e.pageLi},u("JavaScript Querying")," - Use JavaScript for powerful data manipulation"),o({class:e.pageLi},u("Multiple Databases")," - Manage multiple isolated database contexts"),o({class:e.pageLi},u("Auto-Reconnect")," - Automatic reconnection with exponential backoff"))),v({class:e.section},H({class:e.pageH2},"Client Libraries"),T({class:e.pageP},"ScriptDB provides official client libraries for different environments:"),w({class:e.pageUl},o({class:e.pageLi},u(M({href:"#/api",onclick:t=>{t.preventDefault(),window.location.hash="#/api"}},"@scriptdb/browser-client"))," - WebSocket client for browser applications"),o({class:e.pageLi},u(M({href:"#/api",onclick:t=>{t.preventDefault(),window.location.hash="#/api"}},"@scriptdb/client"))," - TCP client for Node.js applications")),T({class:e.pageP},"Visit the ",M({href:"#/api",onclick:t=>{t.preventDefault(),window.location.hash="#/api"}},"API Documentation")," page for detailed reference and examples.")),v({class:e.section},H({class:e.pageH2},"Client Methods"),T({class:e.pageP},"ScriptDB provides two methods for executing commands:"),w({class:e.pageUl},o({class:e.pageLi},u(i({class:e.pageCode},"client.run(command, database)"))," - Execute TypeScript/JavaScript commands and return results"),o({class:e.pageLi},u(i({class:e.pageCode},"client.execute(command, database)"))," - Execute TypeScript/JavaScript commands without waiting for results")),T({class:e.pageP},"Both methods accept TypeScript/JavaScript code as strings for database operations.")),v({class:e.section},H({class:e.pageH2},"Quick Example"),T({class:e.pageP},"Get started with ScriptDB in just a few lines:"),S({class:e.pagePre},i({class:e.pageCode},`import ScriptDBClient from '@scriptdb/browser-client';

// Connect to server
const client = new ScriptDBClient('scriptdb://localhost:1234');
await client.connect();

// Create a database
await client.createDatabase('mydb');

// Insert data (using TypeScript/JavaScript)
await client.run(
  'db.users.insert({ name: "John", age: 30, status: "active" })',
  'mydb'
);

// Query data (using TypeScript/JavaScript)
const users = await client.run(
  'db.users.find({ age: { $gt: 25 } })',
  'mydb'
);
console.log(users);

// Save to disk
await client.saveDatabase('mydb');`))));var Te=()=>v(k({class:e.pageH1},"Usage"),T({class:e.pageP},"Learn how to use ScriptDB effectively with practical examples."),v({class:e.section},H({class:e.pageH2},"Server Management"),P({class:e.pageH3},"Starting ScriptDB"),S({class:e.pagePre},i({class:e.pageCode},`# Start the server (default port: 1234)
scriptdb start

# Start with custom port
scriptdb start --port 8080

# Start in foreground
scriptdb start --foreground`)),P({class:e.pageH3},"Managing the Server"),S({class:e.pagePre},i({class:e.pageCode},`# Check server status
scriptdb status

# Stop the server
scriptdb stop

# Stop with force
scriptdb stop --force`))),v({class:e.section},H({class:e.pageH2},"Using the Browser Client"),T({class:e.pageP},"Connect to ScriptDB from your browser application:"),S({class:e.pagePre},i({class:e.pageCode},`import ScriptDBClient from '@scriptdb/browser-client';

// Connect to server
const client = new ScriptDBClient('scriptdb://localhost:1234', {
  secure: false,
  requestTimeout: 30000
});

await client.connect();

// Create database
await client.createDatabase('mydb');

// Insert data
await client.run(
  'db.users.insert({ name: "John", age: 30, email: "john@example.com" })',
  'mydb'
);

// Query data
const users = await client.run(
  'db.users.find({ age: { $gt: 25 } })',
  'mydb'
);
console.log(users);

// Save database
await client.saveDatabase('mydb');`))),v({class:e.section},H({class:e.pageH2},"Using the Node.js Client"),T({class:e.pageP},"Connect to ScriptDB from your Node.js application:"),S({class:e.pagePre},i({class:e.pageCode},`import ScriptDBClient from '@scriptdb/client';

const client = new ScriptDBClient('scriptdb://localhost:1234');
await client.connect();

// List all databases
const databases = await client.listDatabases();
console.log('Databases:', databases);

// Run queries
const result = await client.run('db.users.find()', 'mydb');
console.log(result);`))),v({class:e.section},H({class:e.pageH2},"Query Examples"),P({class:e.pageH3},"Basic CRUD Operations"),S({class:e.pagePre},i({class:e.pageCode},`// Create/Insert
await client.run(\`
  db.users.insert({
    name: 'Alice',
    age: 28,
    status: 'active',
    created: new Date()
  })
\`, 'mydb');

// Read/Find
const activeUsers = await client.run(
  'db.users.find({ status: "active" })',
  'mydb'
);

// Update
await client.run(\`
  db.users.update(
    { name: 'Alice' },
    { $set: { age: 29, verified: true } }
  )
\`, 'mydb');

// Delete
await client.run(
  'db.users.remove({ status: "inactive" })',
  'mydb'
);`)),P({class:e.pageH3},"Advanced Queries"),S({class:e.pagePre},i({class:e.pageCode},`// Find with comparison operators
const result = await client.run(\`
  db.users.find({
    age: { $gt: 18, $lte: 65 },
    status: { $in: ['active', 'pending'] }
  })
\`, 'mydb');

// Sort and limit
const sorted = await client.run(\`
  db.users.find()
    .sort({ age: -1, name: 1 })
    .limit(10)
\`, 'mydb');

// Aggregation
const stats = await client.run(\`
  db.users.aggregate([
    { $group: { 
        _id: '$status', 
        count: { $sum: 1 },
        avgAge: { $avg: '$age' }
      }
    },
    { $sort: { count: -1 } }
  ])
\`, 'mydb');`))),v({class:e.section},H({class:e.pageH2},"Common Use Cases"),P({class:e.pageH3},"1. Web Application Backend"),S({class:e.pagePre},i({class:e.pageCode},`// Fast in-memory database for web apps
const app = express();
const db = new ScriptDBClient('scriptdb://localhost:1234');

app.get('/users', async (req, res) => {
  const users = await db.run('db.users.find()', 'appdb');
  res.json(users);
});

app.post('/users', async (req, res) => {
  await db.run(
    \`db.users.insert(\${JSON.stringify(req.body)})\`,
    'appdb'
  );
  res.status(201).json({ success: true });
});`)),P({class:e.pageH3},"2. Real-Time Data Sync"),S({class:e.pagePre},i({class:e.pageCode},`// Browser client with auto-reconnect
const client = new ScriptDBClient('scriptdb://localhost:1234', {
  retries: 5,
  retryDelay: 2000
});

await client.connect();

// Poll for updates
setInterval(async () => {
  const updates = await client.run(
    'db.updates.find({ processed: false })',
    'realtime-db'
  );
  
  if (updates.length > 0) {
    console.log('New updates:', updates);
    // Process updates...
  }
}, 1000);`)),P({class:e.pageH3},"3. Caching Layer"),S({class:e.pagePre},i({class:e.pageCode},`// Use ScriptDB as a fast cache
const cache = new ScriptDBClient('scriptdb://localhost:1234');
await cache.connect();

// Set cache
await cache.run(
  \`db.cache.insert({
    key: 'user:123',
    value: userData,
    expires: Date.now() + 3600000
  })\`,
  'cache-db'
);

// Get from cache
const cached = await cache.run(
  'db.cache.findOne({ key: "user:123", expires: { $gt: Date.now() } })',
  'cache-db'
);

if (cached) {
  console.log('Cache hit:', cached.value);
} else {
  console.log('Cache miss - fetch from database');
}`))),v({class:e.section},H({class:e.pageH2},"Authentication & Security"),P({class:e.pageH3},"Authenticated Connection"),S({class:e.pagePre},i({class:e.pageCode},`const client = new ScriptDBClient('scriptdb://localhost:1234', {
  username: 'admin',
  password: 'secret123'
});

await client.connect();

// Or authenticate after connecting
await client.login('admin', 'secret123');`)),P({class:e.pageH3},"HMAC Message Signing"),S({class:e.pagePre},i({class:e.pageCode},`const client = new ScriptDBClient('scriptdb://localhost:1234', {
  signing: {
    secret: process.env.SIGNING_SECRET,
    algorithm: 'sha256'
  }
});

await client.connect();

// All messages will be signed with HMAC
const result = await client.run('db.data.find()', 'mydb');`))),v({class:e.section},H({class:e.pageH2},"Best Practices"),w({class:e.pageUl},o({class:e.pageLi},u("Use Connection Pooling")," - Reuse client instances instead of creating new ones"),o({class:e.pageLi},u("Enable Auto-Reconnect")," - Set retries > 0 for production environments"),o({class:e.pageLi},u("Monitor Memory Usage")," - Save databases to disk periodically"),o({class:e.pageLi},u("Use Indexes")," - Create indexes on frequently queried fields"),o({class:e.pageLi},u("Handle Errors")," - Always wrap operations in try-catch blocks"),o({class:e.pageLi},u("Secure Connections")," - Use secure WebSocket (wss://) in production"))));var Pe=()=>v(k({class:e.pageH1},"Installation Scripts"),T({class:e.pageP},"ScriptDB provides automated installation scripts for all supported platforms."),v({class:e.section},H({class:e.pageH2},"Overview"),T({class:e.pageP},"ScriptDB installation scripts handle binary download, installation, and configuration automatically. They support multiple platforms, architectures, and installation methods."),w({class:e.pageUl},o({class:e.pageLi},u("Cross-Platform")," - Windows, Linux, and macOS support"),o({class:e.pageLi},u("Multi-Architecture")," - x64, x86, ARM64, and more"),o({class:e.pageLi},u("Automatic Detection")," - Detects OS, architecture, and dependencies"),o({class:e.pageLi},u("Customizable")," - Environment variables for custom installations"))),v({class:e.section},H({class:e.pageH2},"Windows Installation"),P({class:e.pageH3},"install.ps1"),T({class:e.pageP},"PowerShell installation script for Windows systems."),L({class:e.pageH3},"Usage"),S({class:e.pagePre},i({class:e.pageCode},`# Basic installation
irm https://raw.githubusercontent.com/d-osc/script-db/refs/heads/main/scripts/install.ps1 | iex

# With custom version
$env:SCRIPTDB_VERSION="1.0.0"
irm https://raw.githubusercontent.com/d-osc/script-db/refs/heads/main/scripts/install.ps1 | iex

# With custom directory
$env:SCRIPTDB_INSTALL="C:\\MyTools\\scriptdb"
irm https://raw.githubusercontent.com/d-osc/script-db/refs/heads/main/scripts/install.ps1 | iex`)),L({class:e.pageH3},"Features"),w({class:e.pageUl},o({class:e.pageLi},u("Architecture Detection")," - Automatically detects x64 or x86"),o({class:e.pageLi},u("Automatic Download")," - Fetches correct binary from GitHub releases"),o({class:e.pageLi},u("PATH Configuration")," - Adds ScriptDB to user PATH"),o({class:e.pageLi},u("Custom Directory")," - Supports $env:SCRIPTDB_INSTALL"),o({class:e.pageLi},u("Version Selection")," - Use $env:SCRIPTDB_VERSION"),o({class:e.pageLi},u("Installation Directory")," - Default: %USERPROFILE%\\.scriptdb"))),v({class:e.section},H({class:e.pageH2},"Unix Installation"),P({class:e.pageH3},"install.sh"),T({class:e.pageP},"Bash installation script for Linux and macOS systems."),L({class:e.pageH3},"Usage"),S({class:e.pagePre},i({class:e.pageCode},`# Basic installation
curl -fsSL https://raw.githubusercontent.com/d-osc/script-db/refs/heads/main/scripts/install.sh | bash

# With custom version
SCRIPTDB_VERSION=1.0.0 curl -fsSL https://raw.githubusercontent.com/d-osc/script-db/refs/heads/main/scripts/install.sh | bash

# With custom directory
SCRIPTDB_INSTALL=/opt/scriptdb curl -fsSL https://raw.githubusercontent.com/d-osc/script-db/refs/heads/main/scripts/install.sh | bash`)),L({class:e.pageH3},"Features"),w({class:e.pageUl},o({class:e.pageLi},u("OS Detection")," - Supports Linux and macOS"),o({class:e.pageLi},u("Architecture Detection")," - Handles x64 and ARM64"),o({class:e.pageLi},u("LIBC Detection")," - Distinguishes between glibc and musl"),o({class:e.pageLi},u("Multiple Downloaders")," - Uses curl or wget"),o({class:e.pageLi},u("Shell Integration")," - PATH setup for bash, zsh, fish"),o({class:e.pageLi},u("Installation Directory")," - Default: ~/.scriptdb"))),v({class:e.section},H({class:e.pageH2},"Environment Variables"),T({class:e.pageP},"Customize installation behavior with environment variables:"),P({class:e.pageH3},"SCRIPTDB_VERSION"),T({class:e.pageP},"Specify the version to install (default: latest)"),S({class:e.pagePre},i({class:e.pageCode},`# Windows
$env:SCRIPTDB_VERSION="1.0.0"

# Linux/macOS
export SCRIPTDB_VERSION="1.0.0"`)),P({class:e.pageH3},"SCRIPTDB_INSTALL"),T({class:e.pageP},"Set custom installation directory"),S({class:e.pagePre},i({class:e.pageCode},`# Windows
$env:SCRIPTDB_INSTALL="C:\\Tools\\scriptdb"

# Linux/macOS
export SCRIPTDB_INSTALL="/opt/scriptdb"`))),v({class:e.section},H({class:e.pageH2},"Installation Directory Structure"),T({class:e.pageP},"After installation, ScriptDB creates the following directory structure:"),S({class:e.pagePre},i({class:e.pageCode},`# Windows
%USERPROFILE%\\.scriptdb/
\u251C\u2500\u2500 bin/
\u2502   \u2514\u2500\u2500 scriptdb.exe
\u2514\u2500\u2500 data/

# Linux/macOS
~/.scriptdb/
\u251C\u2500\u2500 bin/
\u2502   \u2514\u2500\u2500 scriptdb
\u2514\u2500\u2500 data/`)),P({class:e.pageH3},"Binary Location"),w({class:e.pageUl},o({class:e.pageLi},u("Windows: "),i({class:e.pageCode},"%USERPROFILE%\\.scriptdb\\bin\\scriptdb.exe")),o({class:e.pageLi},u("Linux/macOS: "),i({class:e.pageCode},"~/.scriptdb/bin/scriptdb")))),v({class:e.section},H({class:e.pageH2},"Uninstallation"),T({class:e.pageP},"ScriptDB also provides uninstallation scripts for clean removal."),P({class:e.pageH3},"Windows"),S({class:e.pagePre},i({class:e.pageCode},"irm https://raw.githubusercontent.com/d-osc/script-db/refs/heads/main/scripts/uninstall.ps1 | iex")),P({class:e.pageH3},"Linux/macOS"),S({class:e.pagePre},i({class:e.pageCode},"curl -fsSL https://raw.githubusercontent.com/d-osc/script-db/refs/heads/main/scripts/uninstall.sh | bash"))),v({class:e.section},H({class:e.pageH2},"Supported Platforms"),P({class:e.pageH3},"Windows"),w({class:e.pageUl},o({class:e.pageLi},"Windows 10/11 (x64, x86)")),P({class:e.pageH3},"Linux"),w({class:e.pageUl},o({class:e.pageLi},"x64 (Intel/AMD)"),o({class:e.pageLi},"ARM64 (aarch64)"),o({class:e.pageLi},"glibc or musl")),P({class:e.pageH3},"macOS"),w({class:e.pageUl},o({class:e.pageLi},"x64 (Intel)"),o({class:e.pageLi},"ARM64 (Apple Silicon)"))),v({class:e.section},H({class:e.pageH2},"Post-Installation"),P({class:e.pageH3},"Verify Installation"),S({class:e.pagePre},i({class:e.pageCode},`# Check version
scriptdb --version

# View help
scriptdb --help

# Start server
scriptdb start`)),P({class:e.pageH3},"Next Steps"),w({class:e.pageUl},o({class:e.pageLi},"Read the ",u("Quick Start")," guide"),o({class:e.pageLi},"Explore the ",u("API Documentation")," for client libraries"),o({class:e.pageLi},"Check ",u("Usage")," examples"))));var $e=()=>{let t=j("browser");return v(k({class:e.pageH1},"API Documentation"),T({class:e.pageP},"Complete API reference for ScriptDB client libraries."),v({class:e.tabs},E(t,s=>Y({class:s==="browser"?e.tabActive:e.tab,style:"cursor: pointer; padding: 0.75rem 1.5rem;",onclick:()=>t.value="browser"},"@scriptdb/browser-client")),E(t,s=>Y({class:s==="node"?e.tabActive:e.tab,style:"cursor: pointer; padding: 0.75rem 1.5rem;",onclick:()=>t.value="node"},"@scriptdb/client"))),v({class:e.tabContent},E(t,s=>s==="browser"?et():tt())))},et=()=>v(v({class:e.section},H({class:e.pageH2},"Installation"),S({class:e.pagePre},i({class:e.pageCode},"npm install @scriptdb/browser-client")),T({class:e.pageP},"Or use CDN:"),S({class:e.pagePre},i({class:e.pageCode},`<script type="module">
  import ScriptDBClient from 'https://cdn.jsdelivr.net/npm/@scriptdb/browser-client/+esm';
<\/script>`))),v({class:e.section},H({class:e.pageH2},"Quick Start"),T({class:e.pageP},"ScriptDB Browser Client is a WebSocket client for connecting to ScriptDB servers from browser applications."),S({class:e.pagePre},i({class:e.pageCode},`import ScriptDBClient from '@scriptdb/browser-client';

// Initialize client with connection URI
const client = new ScriptDBClient('scriptdb://localhost:1234');

// Connect to server
await client.connect();

// Run code in a database
const result = await client.run('db.users.find()', 'mydb');
console.log('Query result:', result);

// Disconnect
await client.disconnect();`))),v({class:e.section},H({class:e.pageH2},"Constructor"),P({class:e.pageH3},"new ScriptDBClient(uri, options?)"),T({class:e.pageP},"Creates a new ScriptDB browser client instance."),L({class:e.pageH3},"Parameters"),w({class:e.pageUl},o({class:e.pageLi},u("uri "),i({class:e.pageCode},"string")," - Connection URI in format ",i({class:e.pageCode},"scriptdb://host:port/database")),o({class:e.pageLi},u("options "),i({class:e.pageCode},"ClientOptions | optional"),w({class:e.pageUl},o({class:e.pageLi},u("secure "),i({class:e.pageCode},"boolean")," - Use wss:// if true, ws:// if false (default: ",i({class:e.pageCode},"true"),")"),o({class:e.pageLi},u("requestTimeout "),i({class:e.pageCode},"number")," - Request timeout in ms, 0 = disabled (default: ",i({class:e.pageCode},"0"),")"),o({class:e.pageLi},u("socketTimeout "),i({class:e.pageCode},"number")," - Socket timeout in ms (default: ",i({class:e.pageCode},"0"),")"),o({class:e.pageLi},u("retries "),i({class:e.pageCode},"number")," - Reconnection retries (default: ",i({class:e.pageCode},"3"),")"),o({class:e.pageLi},u("retryDelay "),i({class:e.pageCode},"number")," - Initial retry delay in ms (default: ",i({class:e.pageCode},"1000"),")"),o({class:e.pageLi},u("maxPending "),i({class:e.pageCode},"number")," - Max concurrent requests (default: ",i({class:e.pageCode},"100"),")"),o({class:e.pageLi},u("maxQueue "),i({class:e.pageCode},"number")," - Max queued requests (default: ",i({class:e.pageCode},"1000"),")"),o({class:e.pageLi},u("maxMessageSize "),i({class:e.pageCode},"number")," - Max message size in bytes (default: ",i({class:e.pageCode},"5MB"),")"),o({class:e.pageLi},u("logger "),i({class:e.pageCode},"Logger")," - Custom logger { debug, info, warn, error }"),o({class:e.pageLi},u("username "),i({class:e.pageCode},"string")," - Username for authentication"),o({class:e.pageLi},u("password "),i({class:e.pageCode},"string")," - Password for authentication"),o({class:e.pageLi},u("tokenRefresh "),i({class:e.pageCode},"function")," - Async function to refresh token"),o({class:e.pageLi},u("signing "),i({class:e.pageCode},"{ secret, algorithm }")," - HMAC signing configuration"),o({class:e.pageLi},u("stringify "),i({class:e.pageCode},"function")," - Custom JSON stringify function")))),L({class:e.pageH3},"Returns"),w({class:e.pageUl},o({class:e.pageLi},i({class:e.pageCode},"ScriptDBClient")," - A new ScriptDB client instance")),L({class:e.pageH3},"Example"),S({class:e.pagePre},i({class:e.pageCode},`const client = new ScriptDBClient('scriptdb://localhost:1234/mydb', {
  secure: false,
  requestTimeout: 30000,
  retries: 5,
  retryDelay: 2000,
  username: 'admin',
  password: 'secret'
});`))),v({class:e.section},H({class:e.pageH2},"Connection Methods"),v({class:e.section},P({class:e.pageH3},"db.connect()"),T({class:e.pageP},"Connects to the ScriptDB server."),L({class:e.pageH3},"Returns"),w({class:e.pageUl},o({class:e.pageLi},i({class:e.pageCode},"Promise<void>"))),L({class:e.pageH3},"Example"),S({class:e.pagePre},i({class:e.pageCode},"await db.connect();"))),v({class:e.section},P({class:e.pageH3},"db.disconnect()"),T({class:e.pageP},"Disconnects from the ScriptDB server."),L({class:e.pageH3},"Returns"),w({class:e.pageUl},o({class:e.pageLi},i({class:e.pageCode},"Promise<void>"))),L({class:e.pageH3},"Example"),S({class:e.pagePre},i({class:e.pageCode},"await db.disconnect();"))),v({class:e.section},P({class:e.pageH3},"db.isConnected"),T({class:e.pageP},"Returns the connection status."),L({class:e.pageH3},"Type"),w({class:e.pageUl},o({class:e.pageLi},i({class:e.pageCode},"boolean"))),L({class:e.pageH3},"Example"),S({class:e.pagePre},i({class:e.pageCode},`if (db.isConnected) {
  console.log('Connected to server');
}`)))),v({class:e.section},H({class:e.pageH2},"Scripts API"),T({class:e.pageP},"Manage scripts through the ",i({class:e.pageCode},"db.scripts")," interface."),v({class:e.section},P({class:e.pageH3},"db.scripts.add(script)"),T({class:e.pageP},"Adds a new script to the database."),L({class:e.pageH3},"Parameters"),w({class:e.pageUl},o({class:e.pageLi},u("script "),i({class:e.pageCode},"ScriptData"),w({class:e.pageUl},o({class:e.pageLi},u("name "),i({class:e.pageCode},"string")," - Script name/identifier"),o({class:e.pageLi},u("content "),i({class:e.pageCode},"string")," - Script content/code"),o({class:e.pageLi},u("description "),i({class:e.pageCode},"string | optional")," - Script description"),o({class:e.pageLi},u("tags "),i({class:e.pageCode},"string[] | optional")," - Array of tags"),o({class:e.pageLi},u("metadata "),i({class:e.pageCode},"Record<string, any> | optional")," - Additional metadata")))),L({class:e.pageH3},"Returns"),w({class:e.pageUl},o({class:e.pageLi},i({class:e.pageCode},"Promise<Script>"))),L({class:e.pageH3},"Example"),S({class:e.pagePre},i({class:e.pageCode},`const script = await db.scripts.add({
  name: 'deploy.sh',
  content: '#!/bin/bash\\ndeploy-app',
  description: 'Deploy application to production',
  tags: ['deployment', 'production'],
  metadata: {
    author: 'DevOps Team',
    version: '1.0.0'
  }
});`))),v({class:e.section},P({class:e.pageH3},"db.scripts.get(name)"),T({class:e.pageP},"Retrieves a script by name."),L({class:e.pageH3},"Parameters"),w({class:e.pageUl},o({class:e.pageLi},u("name "),i({class:e.pageCode},"string")," - Script name")),L({class:e.pageH3},"Returns"),w({class:e.pageUl},o({class:e.pageLi},i({class:e.pageCode},"Promise<Script | null>"))),L({class:e.pageH3},"Example"),S({class:e.pagePre},i({class:e.pageCode},`const script = await db.scripts.get('deploy.sh');
if (script) {
  console.log(script.content);
}`))),v({class:e.section},P({class:e.pageH3},"db.scripts.list(options?)"),T({class:e.pageP},"Lists all scripts with optional filtering."),L({class:e.pageH3},"Parameters"),w({class:e.pageUl},o({class:e.pageLi},u("options "),i({class:e.pageCode},"ListOptions | optional"),w({class:e.pageUl},o({class:e.pageLi},u("tag "),i({class:e.pageCode},"string")," - Filter by tag"),o({class:e.pageLi},u("verbose "),i({class:e.pageCode},"boolean")," - Include full details"),o({class:e.pageLi},u("limit "),i({class:e.pageCode},"number")," - Maximum number of results"),o({class:e.pageLi},u("offset "),i({class:e.pageCode},"number")," - Pagination offset")))),L({class:e.pageH3},"Returns"),w({class:e.pageUl},o({class:e.pageLi},i({class:e.pageCode},"Promise<Script[]>"))),L({class:e.pageH3},"Example"),S({class:e.pagePre},i({class:e.pageCode},`// List all scripts
const allScripts = await db.scripts.list();

// Filter by tag
const prodScripts = await db.scripts.list({ tag: 'production' });

// Pagination
const page = await db.scripts.list({ limit: 10, offset: 20 });`))),v({class:e.section},P({class:e.pageH3},"db.scripts.update(name, updates)"),T({class:e.pageP},"Updates an existing script."),L({class:e.pageH3},"Parameters"),w({class:e.pageUl},o({class:e.pageLi},u("name "),i({class:e.pageCode},"string")," - Script name"),o({class:e.pageLi},u("updates "),i({class:e.pageCode},"Partial<ScriptData>"),w({class:e.pageUl},o({class:e.pageLi},u("content "),i({class:e.pageCode},"string | optional")," - Updated content"),o({class:e.pageLi},u("description "),i({class:e.pageCode},"string | optional")," - Updated description"),o({class:e.pageLi},u("tags "),i({class:e.pageCode},"string[] | optional")," - Updated tags"),o({class:e.pageLi},u("metadata "),i({class:e.pageCode},"Record<string, any> | optional")," - Updated metadata")))),L({class:e.pageH3},"Returns"),w({class:e.pageUl},o({class:e.pageLi},i({class:e.pageCode},"Promise<Script>"))),L({class:e.pageH3},"Example"),S({class:e.pagePre},i({class:e.pageCode},`const updated = await db.scripts.update('deploy.sh', {
  description: 'Updated deployment script',
  tags: ['deployment', 'production', 'v2']
});`))),v({class:e.section},P({class:e.pageH3},"db.scripts.remove(name)"),T({class:e.pageP},"Removes a script from the database."),L({class:e.pageH3},"Parameters"),w({class:e.pageUl},o({class:e.pageLi},u("name "),i({class:e.pageCode},"string")," - Script name")),L({class:e.pageH3},"Returns"),w({class:e.pageUl},o({class:e.pageLi},i({class:e.pageCode},"Promise<void>"))),L({class:e.pageH3},"Example"),S({class:e.pagePre},i({class:e.pageCode},'await db.scripts.remove("old-script.sh");'))),v({class:e.section},P({class:e.pageH3},"db.scripts.run(name, options?)"),T({class:e.pageP},"Executes a script on the server."),L({class:e.pageH3},"Parameters"),w({class:e.pageUl},o({class:e.pageLi},u("name "),i({class:e.pageCode},"string")," - Script name"),o({class:e.pageLi},u("options "),i({class:e.pageCode},"RunOptions | optional"),w({class:e.pageUl},o({class:e.pageLi},u("args "),i({class:e.pageCode},"string[]")," - Command line arguments"),o({class:e.pageLi},u("env "),i({class:e.pageCode},"Record<string, string>")," - Environment variables"),o({class:e.pageLi},u("dryRun "),i({class:e.pageCode},"boolean")," - Preview without executing"),o({class:e.pageLi},u("timeout "),i({class:e.pageCode},"number")," - Execution timeout in ms")))),L({class:e.pageH3},"Returns"),w({class:e.pageUl},o({class:e.pageLi},i({class:e.pageCode},"Promise<ScriptResult>"))),L({class:e.pageH3},"Example"),S({class:e.pagePre},i({class:e.pageCode},`const result = await db.scripts.run('deploy.sh', {
  args: ['--env', 'production'],
  env: { DEPLOY_MODE: 'production' },
  timeout: 300000
});

console.log('Exit code:', result.exitCode);
console.log('Output:', result.stdout);`))),v({class:e.section},P({class:e.pageH3},"db.scripts.history(name, options?)"),T({class:e.pageP},"Gets execution history for a script."),L({class:e.pageH3},"Parameters"),w({class:e.pageUl},o({class:e.pageLi},u("name "),i({class:e.pageCode},"string")," - Script name"),o({class:e.pageLi},u("options "),i({class:e.pageCode},"HistoryOptions | optional"),w({class:e.pageUl},o({class:e.pageLi},u("limit "),i({class:e.pageCode},"number")," - Maximum history entries"),o({class:e.pageLi},u("offset "),i({class:e.pageCode},"number")," - Pagination offset")))),L({class:e.pageH3},"Returns"),w({class:e.pageUl},o({class:e.pageLi},i({class:e.pageCode},"Promise<ScriptHistory[]>"))),L({class:e.pageH3},"Example"),S({class:e.pagePre},i({class:e.pageCode},"const history = await db.scripts.history('deploy.sh', { limit: 10 });\nhistory.forEach(entry => {\n  console.log(`${entry.timestamp}: ${entry.exitCode}`);\n});")))),v({class:e.section},H({class:e.pageH2},"Events"),T({class:e.pageP},"The browser client emits events that you can listen to."),v({class:e.section},P({class:e.pageH3},"db.on(event, callback)"),T({class:e.pageP},"Subscribe to client events."),L({class:e.pageH3},"Events"),w({class:e.pageUl},o({class:e.pageLi},u("connected")," - Fired when connected to server",S({class:e.pagePre,style:"margin-top: 0.5rem;"},i({class:e.pageCode},`db.on("connected", () => {
  console.log("Connected to server");
});`))),o({class:e.pageLi},u("disconnected")," - Fired when disconnected",S({class:e.pagePre,style:"margin-top: 0.5rem;"},i({class:e.pageCode},`db.on("disconnected", () => {
  console.log("Disconnected from server");
});`))),o({class:e.pageLi},u("error")," - Fired on errors",S({class:e.pagePre,style:"margin-top: 0.5rem;"},i({class:e.pageCode},`db.on("error", (error) => {
  console.error("Error:", error.message);
});`))),o({class:e.pageLi},u("script:added")," - Fired when a script is added",S({class:e.pagePre,style:"margin-top: 0.5rem;"},i({class:e.pageCode},`db.on("script:added", (script) => {
  console.log("Script added:", script.name);
});`))),o({class:e.pageLi},u("script:updated")," - Fired when a script is updated",S({class:e.pagePre,style:"margin-top: 0.5rem;"},i({class:e.pageCode},`db.on("script:updated", (script) => {
  console.log("Script updated:", script.name);
});`))),o({class:e.pageLi},u("script:removed")," - Fired when a script is removed",S({class:e.pagePre,style:"margin-top: 0.5rem;"},i({class:e.pageCode},`db.on("script:removed", (name) => {
  console.log("Script removed:", name);
});`))),o({class:e.pageLi},u("script:executed")," - Fired when a script finishes execution",S({class:e.pagePre,style:"margin-top: 0.5rem;"},i({class:e.pageCode},`db.on("script:executed", (result) => {
  console.log("Script executed:", result.name, result.exitCode);
});`)))),v({class:e.section},P({class:e.pageH3},"db.off(event, callback)"),T({class:e.pageP},"Unsubscribe from events."),S({class:e.pagePre},i({class:e.pageCode},`const handler = () => console.log('Connected');
db.on('connected', handler);

// Later
db.off('connected', handler);`))))),v({class:e.section},H({class:e.pageH2},"Type Definitions"),S({class:e.pagePre},i({class:e.pageCode},`interface ScriptDBOptions {
  serverUrl: string;
  apiKey?: string;
  timeout?: number;
  autoReconnect?: boolean;
  reconnectInterval?: number;
}

interface ScriptData {
  name: string;
  content: string;
  description?: string;
  tags?: string[];
  metadata?: Record<string, any>;
}

interface Script {
  id: string;
  name: string;
  content: string;
  description?: string;
  tags: string[];
  metadata: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}

interface ScriptResult {
  name: string;
  exitCode: number;
  stdout: string;
  stderr: string;
  duration: number;
  timestamp: Date;
}

interface ScriptHistory {
  id: string;
  name: string;
  exitCode: number;
  duration: number;
  timestamp: Date;
}

interface ListOptions {
  tag?: string;
  verbose?: boolean;
  limit?: number;
  offset?: number;
}

interface RunOptions {
  args?: string[];
  env?: Record<string, string>;
  dryRun?: boolean;
  timeout?: number;
}

interface HistoryOptions {
  limit?: number;
  offset?: number;
}`)))),tt=()=>v(v({class:e.section},H({class:e.pageH2},"Installation"),S({class:e.pagePre},i({class:e.pageCode},"npm install @scriptdb/client"))),v({class:e.section},H({class:e.pageH2},"Quick Start"),T({class:e.pageP},"ScriptDB Node.js client for managing scripts from Node.js applications."),S({class:e.pagePre},i({class:e.pageCode},`import ScriptDBClient from '@scriptdb/client';

async function main() {
  // Initialize client
  const db = new ScriptDBClient('scriptdb://localhost:1234', {
    secure: false         // Use TCP if false, TLS if true
  });

  // Connect to server
  await db.connect();

  // Add a script
  await db.scripts.add({
    name: 'backup.sh',
    content: '#!/bin/bash\\necho "Backing up..."',
    description: 'Daily backup script',
    tags: ['backup', 'daily']
  });

  // List all scripts
  const scripts = await db.scripts.list();
  console.log(scripts);

  // Run a script
  const result = await db.scripts.run('backup.sh');
  console.log('Exit code:', result.exitCode);

  // Use with file paths
  await db.scripts.addFromFile('./my-script.sh', {
    name: 'my-script',
    description: 'Script from file'
  });

  // Disconnect
  await db.disconnect();
}

main().catch(console.error);`))),v({class:e.section},H({class:e.pageH2},"Constructor"),P({class:e.pageH3},"new ScriptDBClient(uri, options?)"),T({class:e.pageP},"Creates a new ScriptDB Node.js client instance."),L({class:e.pageH3},"Parameters"),w({class:e.pageUl},o({class:e.pageLi},u("uri "),i({class:e.pageCode},"string")," - Connection URI in format ",i({class:e.pageCode},"scriptdb://host:port/database")),o({class:e.pageLi},u("options "),i({class:e.pageCode},"ClientOptions | optional"),w({class:e.pageUl},o({class:e.pageLi},u("secure "),i({class:e.pageCode},"boolean")," - Use TLS if true, TCP if false (default: ",i({class:e.pageCode},"true"),")"),o({class:e.pageLi},u("requestTimeout "),i({class:e.pageCode},"number")," - Request timeout in ms, 0 = disabled (default: ",i({class:e.pageCode},"0"),")"),o({class:e.pageLi},u("socketTimeout "),i({class:e.pageCode},"number")," - Socket timeout in ms (default: ",i({class:e.pageCode},"0"),")"),o({class:e.pageLi},u("retries "),i({class:e.pageCode},"number")," - Reconnection retries (default: ",i({class:e.pageCode},"3"),")"),o({class:e.pageLi},u("retryDelay "),i({class:e.pageCode},"number")," - Initial retry delay in ms (default: ",i({class:e.pageCode},"1000"),")"),o({class:e.pageLi},u("maxPending "),i({class:e.pageCode},"number")," - Max concurrent requests (default: ",i({class:e.pageCode},"100"),")"),o({class:e.pageLi},u("maxQueue "),i({class:e.pageCode},"number")," - Max queued requests (default: ",i({class:e.pageCode},"1000"),")"),o({class:e.pageLi},u("maxMessageSize "),i({class:e.pageCode},"number")," - Max message size in bytes (default: ",i({class:e.pageCode},"5MB"),")"),o({class:e.pageLi},u("logger "),i({class:e.pageCode},"Logger")," - Custom logger { debug, info, warn, error }"),o({class:e.pageLi},u("username "),i({class:e.pageCode},"string")," - Username for authentication"),o({class:e.pageLi},u("password "),i({class:e.pageCode},"string")," - Password for authentication"),o({class:e.pageLi},u("tokenRefresh "),i({class:e.pageCode},"function")," - Async function to refresh token"),o({class:e.pageLi},u("signing "),i({class:e.pageCode},"{ secret, algorithm }")," - HMAC signing configuration"),o({class:e.pageLi},u("stringify "),i({class:e.pageCode},"function")," - Custom JSON stringify function")))),L({class:e.pageH3},"Returns"),w({class:e.pageUl},o({class:e.pageLi},i({class:e.pageCode},"ScriptDBClient")," - A new ScriptDB client instance")),L({class:e.pageH3},"Example"),S({class:e.pagePre},i({class:e.pageCode},`const client = new ScriptDBClient('scriptdb://localhost:1234/mydb', {
  secure: false,
  requestTimeout: 30000,
  retries: 5,
  retryDelay: 2000,
  username: 'admin',
  password: 'secret'
});`))),v({class:e.section},H({class:e.pageH2},"Connection Methods"),v({class:e.section},P({class:e.pageH3},"db.connect()"),T({class:e.pageP},"Connects to the ScriptDB server."),L({class:e.pageH3},"Returns"),w({class:e.pageUl},o({class:e.pageLi},i({class:e.pageCode},"Promise<void>"))),L({class:e.pageH3},"Example"),S({class:e.pagePre},i({class:e.pageCode},"await db.connect();"))),v({class:e.section},P({class:e.pageH3},"db.disconnect()"),T({class:e.pageP},"Disconnects from the ScriptDB server."),L({class:e.pageH3},"Returns"),w({class:e.pageUl},o({class:e.pageLi},i({class:e.pageCode},"Promise<void>"))),L({class:e.pageH3},"Example"),S({class:e.pagePre},i({class:e.pageCode},"await db.disconnect();"))),v({class:e.section},P({class:e.pageH3},"db.isConnected"),T({class:e.pageP},"Returns the connection status."),L({class:e.pageH3},"Type"),w({class:e.pageUl},o({class:e.pageLi},i({class:e.pageCode},"boolean"))),L({class:e.pageH3},"Example"),S({class:e.pagePre},i({class:e.pageCode},`if (db.isConnected) {
  console.log('Connected to server');
}`)))),v({class:e.section},H({class:e.pageH2},"Scripts API"),T({class:e.pageP},"Manage scripts through the ",i({class:e.pageCode},"db.scripts")," interface."),v({class:e.section},P({class:e.pageH3},"db.scripts.add(script)"),T({class:e.pageP},"Adds a new script to the database."),L({class:e.pageH3},"Parameters"),w({class:e.pageUl},o({class:e.pageLi},u("script "),i({class:e.pageCode},"ScriptData"),w({class:e.pageUl},o({class:e.pageLi},u("name "),i({class:e.pageCode},"string")," - Script name/identifier"),o({class:e.pageLi},u("content "),i({class:e.pageCode},"string")," - Script content/code"),o({class:e.pageLi},u("description "),i({class:e.pageCode},"string | optional")," - Script description"),o({class:e.pageLi},u("tags "),i({class:e.pageCode},"string[] | optional")," - Array of tags"),o({class:e.pageLi},u("metadata "),i({class:e.pageCode},"Record<string, any> | optional")," - Additional metadata")))),L({class:e.pageH3},"Returns"),w({class:e.pageUl},o({class:e.pageLi},i({class:e.pageCode},"Promise<Script>"))),L({class:e.pageH3},"Example"),S({class:e.pagePre},i({class:e.pageCode},`const script = await db.scripts.add({
  name: 'deploy.sh',
  content: '#!/bin/bash\\ndeploy-app',
  description: 'Deploy application to production',
  tags: ['deployment', 'production'],
  metadata: {
    author: 'DevOps Team',
    version: '1.0.0'
  }
});`))),v({class:e.section},P({class:e.pageH3},"db.scripts.addFromFile(filePath, options?)"),T({class:e.pageP},"Adds a script from a file on the local filesystem (Node.js only)."),L({class:e.pageH3},"Parameters"),w({class:e.pageUl},o({class:e.pageLi},u("filePath "),i({class:e.pageCode},"string")," - Path to script file"),o({class:e.pageLi},u("options "),i({class:e.pageCode},"AddFromFileOptions | optional"),w({class:e.pageUl},o({class:e.pageLi},u("name "),i({class:e.pageCode},"string")," - Custom script name (default: filename without extension)"),o({class:e.pageLi},u("description "),i({class:e.pageCode},"string")," - Script description"),o({class:e.pageLi},u("tags "),i({class:e.pageCode},"string[]")," - Array of tags"),o({class:e.pageLi},u("metadata "),i({class:e.pageCode},"Record<string, any>")," - Additional metadata")))),L({class:e.pageH3},"Returns"),w({class:e.pageUl},o({class:e.pageLi},i({class:e.pageCode},"Promise<Script>"))),L({class:e.pageH3},"Example"),S({class:e.pagePre},i({class:e.pageCode},`// Add from file with default options
const script = await db.scripts.addFromFile('./scripts/deploy.sh');

// Add with custom options
const script = await db.scripts.addFromFile('./scripts/deploy.sh', {
  name: 'production-deploy',
  description: 'Production deployment script',
  tags: ['deployment', 'production'],
  metadata: { version: '2.0.0' }
});`))),v({class:e.section},P({class:e.pageH3},"db.scripts.get(name)"),T({class:e.pageP},"Retrieves a script by name."),L({class:e.pageH3},"Parameters"),w({class:e.pageUl},o({class:e.pageLi},u("name "),i({class:e.pageCode},"string")," - Script name")),L({class:e.pageH3},"Returns"),w({class:e.pageUl},o({class:e.pageLi},i({class:e.pageCode},"Promise<Script | null>"))),L({class:e.pageH3},"Example"),S({class:e.pagePre},i({class:e.pageCode},`const script = await db.scripts.get('deploy.sh');
if (script) {
  console.log(script.content);
}`))),v({class:e.section},P({class:e.pageH3},"db.scripts.download(name, destPath)"),T({class:e.pageP},"Downloads a script to a local file (Node.js only)."),L({class:e.pageH3},"Parameters"),w({class:e.pageUl},o({class:e.pageLi},u("name "),i({class:e.pageCode},"string")," - Script name"),o({class:e.pageLi},u("destPath "),i({class:e.pageCode},"string")," - Destination file path")),L({class:e.pageH3},"Returns"),w({class:e.pageUl},o({class:e.pageLi},i({class:e.pageCode},"Promise<void>"))),L({class:e.pageH3},"Example"),S({class:e.pagePre},i({class:e.pageCode},'await db.scripts.download("deploy.sh", "./downloaded/deploy.sh");'))),v({class:e.section},P({class:e.pageH3},"db.scripts.list(options?)"),T({class:e.pageP},"Lists all scripts with optional filtering."),L({class:e.pageH3},"Parameters"),w({class:e.pageUl},o({class:e.pageLi},u("options "),i({class:e.pageCode},"ListOptions | optional"),w({class:e.pageUl},o({class:e.pageLi},u("tag "),i({class:e.pageCode},"string")," - Filter by tag"),o({class:e.pageLi},u("verbose "),i({class:e.pageCode},"boolean")," - Include full details"),o({class:e.pageLi},u("limit "),i({class:e.pageCode},"number")," - Maximum number of results"),o({class:e.pageLi},u("offset "),i({class:e.pageCode},"number")," - Pagination offset")))),L({class:e.pageH3},"Returns"),w({class:e.pageUl},o({class:e.pageLi},i({class:e.pageCode},"Promise<Script[]>"))),L({class:e.pageH3},"Example"),S({class:e.pagePre},i({class:e.pageCode},`// List all scripts
const allScripts = await db.scripts.list();

// Filter by tag
const prodScripts = await db.scripts.list({ tag: 'production' });

// Pagination
const page = await db.scripts.list({ limit: 10, offset: 20 });`))),v({class:e.section},P({class:e.pageH3},"db.scripts.update(name, updates)"),T({class:e.pageP},"Updates an existing script."),L({class:e.pageH3},"Parameters"),w({class:e.pageUl},o({class:e.pageLi},u("name "),i({class:e.pageCode},"string")," - Script name"),o({class:e.pageLi},u("updates "),i({class:e.pageCode},"Partial<ScriptData>"),w({class:e.pageUl},o({class:e.pageLi},u("content "),i({class:e.pageCode},"string | optional")," - Updated content"),o({class:e.pageLi},u("description "),i({class:e.pageCode},"string | optional")," - Updated description"),o({class:e.pageLi},u("tags "),i({class:e.pageCode},"string[] | optional")," - Updated tags"),o({class:e.pageLi},u("metadata "),i({class:e.pageCode},"Record<string, any> | optional")," - Updated metadata")))),L({class:e.pageH3},"Returns"),w({class:e.pageUl},o({class:e.pageLi},i({class:e.pageCode},"Promise<Script>"))),L({class:e.pageH3},"Example"),S({class:e.pagePre},i({class:e.pageCode},`const updated = await db.scripts.update('deploy.sh', {
  description: 'Updated deployment script',
  tags: ['deployment', 'production', 'v2']
});`))),v({class:e.section},P({class:e.pageH3},"db.scripts.remove(name)"),T({class:e.pageP},"Removes a script from the database."),L({class:e.pageH3},"Parameters"),w({class:e.pageUl},o({class:e.pageLi},u("name "),i({class:e.pageCode},"string")," - Script name")),L({class:e.pageH3},"Returns"),w({class:e.pageUl},o({class:e.pageLi},i({class:e.pageCode},"Promise<void>"))),L({class:e.pageH3},"Example"),S({class:e.pagePre},i({class:e.pageCode},'await db.scripts.remove("old-script.sh");'))),v({class:e.section},P({class:e.pageH3},"db.scripts.run(name, options?)"),T({class:e.pageP},"Executes a script on the server."),L({class:e.pageH3},"Parameters"),w({class:e.pageUl},o({class:e.pageLi},u("name "),i({class:e.pageCode},"string")," - Script name"),o({class:e.pageLi},u("options "),i({class:e.pageCode},"RunOptions | optional"),w({class:e.pageUl},o({class:e.pageLi},u("args "),i({class:e.pageCode},"string[]")," - Command line arguments"),o({class:e.pageLi},u("env "),i({class:e.pageCode},"Record<string, string>")," - Environment variables"),o({class:e.pageLi},u("dryRun "),i({class:e.pageCode},"boolean")," - Preview without executing"),o({class:e.pageLi},u("timeout "),i({class:e.pageCode},"number")," - Execution timeout in ms"),o({class:e.pageLi},u("stdin "),i({class:e.pageCode},"string")," - Input to pass to stdin (Node.js only)")))),L({class:e.pageH3},"Returns"),w({class:e.pageUl},o({class:e.pageLi},i({class:e.pageCode},"Promise<ScriptResult>"))),L({class:e.pageH3},"Example"),S({class:e.pagePre},i({class:e.pageCode},`const result = await db.scripts.run('deploy.sh', {
  args: ['--env', 'production'],
  env: { DEPLOY_MODE: 'production' },
  timeout: 300000
});

console.log('Exit code:', result.exitCode);
console.log('Output:', result.stdout);`))),v({class:e.section},P({class:e.pageH3},"db.scripts.runLocal(scriptPath, options?)"),T({class:e.pageP},"Runs a script locally on the current machine (Node.js only)."),L({class:e.pageH3},"Parameters"),w({class:e.pageUl},o({class:e.pageLi},u("scriptPath "),i({class:e.pageCode},"string")," - Path to script file"),o({class:e.pageLi},u("options "),i({class:e.pageCode},"RunLocalOptions | optional"),w({class:e.pageUl},o({class:e.pageLi},u("args "),i({class:e.pageCode},"string[]")," - Command line arguments"),o({class:e.pageLi},u("env "),i({class:e.pageCode},"Record<string, string>")," - Environment variables"),o({class:e.pageLi},u("cwd "),i({class:e.pageCode},"string")," - Working directory"),o({class:e.pageLi},u("timeout "),i({class:e.pageCode},"number")," - Execution timeout in ms")))),L({class:e.pageH3},"Returns"),w({class:e.pageUl},o({class:e.pageLi},i({class:e.pageCode},"Promise<ScriptResult>"))),L({class:e.pageH3},"Example"),S({class:e.pagePre},i({class:e.pageCode},`const result = await db.scripts.runLocal('./scripts/deploy.sh', {
  args: ['--env', 'staging'],
  env: { NODE_ENV: 'staging' },
  cwd: './project'
});`))),v({class:e.section},P({class:e.pageH3},"db.scripts.history(name, options?)"),T({class:e.pageP},"Gets execution history for a script."),L({class:e.pageH3},"Parameters"),w({class:e.pageUl},o({class:e.pageLi},u("name "),i({class:e.pageCode},"string")," - Script name"),o({class:e.pageLi},u("options "),i({class:e.pageCode},"HistoryOptions | optional"),w({class:e.pageUl},o({class:e.pageLi},u("limit "),i({class:e.pageCode},"number")," - Maximum history entries"),o({class:e.pageLi},u("offset "),i({class:e.pageCode},"number")," - Pagination offset")))),L({class:e.pageH3},"Returns"),w({class:e.pageUl},o({class:e.pageLi},i({class:e.pageCode},"Promise<ScriptHistory[]>"))),L({class:e.pageH3},"Example"),S({class:e.pagePre},i({class:e.pageCode},"const history = await db.scripts.history('deploy.sh', { limit: 10 });\nhistory.forEach(entry => {\n  console.log(`${entry.timestamp}: ${entry.exitCode}`);\n});"))),v({class:e.section},P({class:e.pageH3},"db.scripts.watch(dirPath, options?)"),T({class:e.pageP},"Watches a directory for file changes and auto-syncs scripts (Node.js only)."),L({class:e.pageH3},"Parameters"),w({class:e.pageUl},o({class:e.pageLi},u("dirPath "),i({class:e.pageCode},"string")," - Directory path to watch"),o({class:e.pageLi},u("options "),i({class:e.pageCode},"WatchOptions | optional"),w({class:e.pageUl},o({class:e.pageLi},u("pattern "),i({class:e.pageCode},"string")," - Glob pattern to match files (default: ",i({class:e.pageCode},"**/*"),")"),o({class:e.pageLi},u("ignore "),i({class:e.pageCode},"string[]")," - Patterns to ignore"),o({class:e.pageLi},u("onAdd "),i({class:e.pageCode},"(file: string) => Promise<void>")," - Callback when file is added"),o({class:e.pageLi},u("onChange "),i({class:e.pageCode},"(file: string) => Promise<void>")," - Callback when file is changed"),o({class:e.pageLi},u("onRemove "),i({class:e.pageCode},"(file: string) => Promise<void>")," - Callback when file is removed")))),L({class:e.pageH3},"Returns"),w({class:e.pageUl},o({class:e.pageLi},i({class:e.pageCode},"Promise<FSWatcher>"))),L({class:e.pageH3},"Example"),S({class:e.pagePre},i({class:e.pageCode},`const watcher = await db.scripts.watch('./scripts', {
  pattern: '**/*.sh',
  ignore: ['**/*.test.sh'],
  onAdd: async (file) => {
    await db.scripts.addFromFile(file);
    console.log('Added:', file);
  },
  onChange: async (file) => {
    const name = path.basename(file, '.sh');
    await db.scripts.update(name, { content: await fs.readFile(file, 'utf-8') });
  },
  onRemove: async (file) => {
    const name = path.basename(file, '.sh');
    await db.scripts.remove(name);
  }
});

// Stop watching
watcher.close();`)))),v({class:e.section},H({class:e.pageH2},"Batch Operations"),v({class:e.section},P({class:e.pageH3},"db.scripts.batchAdd(scripts)"),T({class:e.pageP},"Adds multiple scripts in a single batch operation."),L({class:e.pageH3},"Parameters"),w({class:e.pageUl},o({class:e.pageLi},u("scripts "),i({class:e.pageCode},"ScriptData[]")," - Array of scripts to add")),L({class:e.pageH3},"Returns"),w({class:e.pageUl},o({class:e.pageLi},i({class:e.pageCode},"Promise<Script[]>"))),L({class:e.pageH3},"Example"),S({class:e.pagePre},i({class:e.pageCode},`const scripts = await db.scripts.batchAdd([
  { name: 'script1.sh', content: '#!/bin/bash\\necho "1"' },
  { name: 'script2.sh', content: '#!/bin/bash\\necho "2"' },
  { name: 'script3.sh', content: '#!/bin/bash\\necho "3"' }
]);`))),v({class:e.section},P({class:e.pageH3},"db.scripts.batchRemove(names)"),T({class:e.pageP},"Removes multiple scripts in a single batch operation."),L({class:e.pageH3},"Parameters"),w({class:e.pageUl},o({class:e.pageLi},u("names "),i({class:e.pageCode},"string[]")," - Array of script names to remove")),L({class:e.pageH3},"Returns"),w({class:e.pageUl},o({class:e.pageLi},i({class:e.pageCode},"Promise<void>"))),L({class:e.pageH3},"Example"),S({class:e.pagePre},i({class:e.pageCode},'await db.scripts.batchRemove(["script1.sh", "script2.sh", "script3.sh"]);')))),v({class:e.section},H({class:e.pageH2},"Server Management (Node.js Only)"),v({class:e.section},P({class:e.pageH3},"db.server.start(options?)"),T({class:e.pageP},"Starts a local ScriptDB server."),L({class:e.pageH3},"Parameters"),w({class:e.pageUl},o({class:e.pageLi},u("options "),i({class:e.pageCode},"ServerOptions | optional"),w({class:e.pageUl},o({class:e.pageLi},u("port "),i({class:e.pageCode},"number")," - Server port (default: ",i({class:e.pageCode},"8080"),")"),o({class:e.pageLi},u("host "),i({class:e.pageCode},"string")," - Server host (default: ",i({class:e.pageCode},"'0.0.0.0'"),")"),o({class:e.pageLi},u("dataDir "),i({class:e.pageCode},"string")," - Data directory path"),o({class:e.pageLi},u("logLevel "),i({class:e.pageCode},"'debug' | 'info' | 'warn' | 'error'")," - Log level")))),L({class:e.pageH3},"Returns"),w({class:e.pageUl},o({class:e.pageLi},i({class:e.pageCode},"Promise<ServerProcess>"))),L({class:e.pageH3},"Example"),S({class:e.pagePre},i({class:e.pageCode},`const server = await db.server.start({
  port: 8080,
  dataDir: './data',
  logLevel: 'debug'
});

// Stop server
await server.stop();`))),v({class:e.section},P({class:e.pageH3},"db.server.stop()"),T({class:e.pageP},"Stops the local ScriptDB server."),L({class:e.pageH3},"Returns"),w({class:e.pageUl},o({class:e.pageLi},i({class:e.pageCode},"Promise<void>"))),L({class:e.pageH3},"Example"),S({class:e.pagePre},i({class:e.pageCode},"await db.server.stop();"))),v({class:e.section},P({class:e.pageH3},"db.server.status()"),T({class:e.pageP},"Gets the status of the local ScriptDB server."),L({class:e.pageH3},"Returns"),w({class:e.pageUl},o({class:e.pageLi},i({class:e.pageCode},"Promise<ServerStatus>"))),L({class:e.pageH3},"Example"),S({class:e.pagePre},i({class:e.pageCode},`const status = await db.server.status();
console.log('Server running:', status.running);
console.log('PID:', status.pid);
console.log('Uptime:', status.uptime);`)))),v({class:e.section},H({class:e.pageH2},"Events"),T({class:e.pageP},"The Node.js client uses Node.js EventEmitter and emits events."),v({class:e.section},P({class:e.pageH3},"db.on(event, callback)"),T({class:e.pageP},"Subscribe to client events."),L({class:e.pageH3},"Events"),w({class:e.pageUl},o({class:e.pageLi},u("connected")," - Fired when connected to server",S({class:e.pagePre,style:"margin-top: 0.5rem;"},i({class:e.pageCode},`db.on("connected", () => {
  console.log("Connected to server");
});`))),o({class:e.pageLi},u("disconnected")," - Fired when disconnected",S({class:e.pagePre,style:"margin-top: 0.5rem;"},i({class:e.pageCode},`db.on("disconnected", () => {
  console.log("Disconnected from server");
});`))),o({class:e.pageLi},u("error")," - Fired on errors",S({class:e.pagePre,style:"margin-top: 0.5rem;"},i({class:e.pageCode},`db.on("error", (error) => {
  console.error("Error:", error.message);
});`))),o({class:e.pageLi},u("reconnecting")," - Fired when attempting to reconnect",S({class:e.pagePre,style:"margin-top: 0.5rem;"},i({class:e.pageCode},'db.on("reconnecting", (attempt) => {\n  console.log(`Reconnecting... attempt ${attempt}`);\n});'))),o({class:e.pageLi},u("script:added")," - Fired when a script is added",S({class:e.pagePre,style:"margin-top: 0.5rem;"},i({class:e.pageCode},`db.on("script:added", (script) => {
  console.log("Script added:", script.name);
});`))),o({class:e.pageLi},u("script:updated")," - Fired when a script is updated",S({class:e.pagePre,style:"margin-top: 0.5rem;"},i({class:e.pageCode},`db.on("script:updated", (script) => {
  console.log("Script updated:", script.name);
});`))),o({class:e.pageLi},u("script:removed")," - Fired when a script is removed",S({class:e.pagePre,style:"margin-top: 0.5rem;"},i({class:e.pageCode},`db.on("script:removed", (name) => {
  console.log("Script removed:", name);
});`))),o({class:e.pageLi},u("script:executed")," - Fired when a script finishes execution",S({class:e.pagePre,style:"margin-top: 0.5rem;"},i({class:e.pageCode},`db.on("script:executed", (result) => {
  console.log("Script executed:", result.name, result.exitCode);
});`)))),v({class:e.section},P({class:e.pageH3},"db.off(event, callback)"),T({class:e.pageP},"Unsubscribe from events."),S({class:e.pagePre},i({class:e.pageCode},`const handler = () => console.log('Connected');
db.on('connected', handler);

// Later
db.off('connected', handler);`))),v({class:e.section},P({class:e.pageH3},"db.once(event, callback)"),T({class:e.pageP},"Subscribe to event one time only (Node.js only)."),S({class:e.pagePre},i({class:e.pageCode},`db.once('connected', () => {
  console.log('Connected! This will only fire once.');
});`))))),v({class:e.section},H({class:e.pageH2},"Error Handling"),T({class:e.pageP},"The client provides detailed error information."),S({class:e.pagePre},i({class:e.pageCode},`try {
  const script = await db.scripts.get('nonexistent.sh');
} catch (error) {
  if (error.code === 'SCRIPT_NOT_FOUND') {
    console.log('Script does not exist');
  } else if (error.code === 'CONNECTION_ERROR') {
    console.log('Cannot connect to server');
  } else if (error.code === 'AUTH_ERROR') {
    console.log('Invalid API key');
  } else {
    console.error('Unexpected error:', error.message);
  }
}`))),v({class:e.section},H({class:e.pageH2},"Type Definitions"),S({class:e.pagePre},i({class:e.pageCode},`interface ScriptDBOptions {
  serverUrl: string;
  apiKey?: string;
  timeout?: number;
  maxRetries?: number;
  retryDelay?: number;
  persistPath?: string;
  logLevel?: 'debug' | 'info' | 'warn' | 'error';
}

interface ScriptData {
  name: string;
  content: string;
  description?: string;
  tags?: string[];
  metadata?: Record<string, any>;
}

interface Script {
  id: string;
  name: string;
  content: string;
  description?: string;
  tags: string[];
  metadata: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}

interface ScriptResult {
  name: string;
  exitCode: number;
  stdout: string;
  stderr: string;
  duration: number;
  timestamp: Date;
}

interface ScriptHistory {
  id: string;
  name: string;
  exitCode: number;
  duration: number;
  timestamp: Date;
}

interface AddFromFileOptions {
  name?: string;
  description?: string;
  tags?: string[];
  metadata?: Record<string, any>;
}

interface RunLocalOptions {
  args?: string[];
  env?: Record<string, string>;
  cwd?: string;
  timeout?: number;
}

interface WatchOptions {
  pattern?: string;
  ignore?: string[];
  onAdd?: (file: string) => Promise<void>;
  onChange?: (file: string) => Promise<void>;
  onRemove?: (file: string) => Promise<void>;
}

interface ListOptions {
  tag?: string;
  verbose?: boolean;
  limit?: number;
  offset?: number;
}

interface RunOptions {
  args?: string[];
  env?: Record<string, string>;
  dryRun?: boolean;
  timeout?: number;
  stdin?: string;
}

interface HistoryOptions {
  limit?: number;
  offset?: number;
}

interface ServerOptions {
  port?: number;
  host?: string;
  dataDir?: string;
  logLevel?: 'debug' | 'info' | 'warn' | 'error';
}

interface ServerStatus {
  running: boolean;
  pid?: number;
  uptime?: number;
  port?: number;
}

interface ServerProcess {
  stop(): Promise<void>;
  status(): Promise<ServerStatus>;
}

// Error Codes
type ErrorCode = 
  | 'SCRIPT_NOT_FOUND'
  | 'CONNECTION_ERROR'
  | 'AUTH_ERROR'
  | 'TIMEOUT'
  | 'VALIDATION_ERROR'
  | 'SERVER_ERROR';

class ScriptDBError extends Error {
  code: ErrorCode;
  details?: any;
}`))));var He=[{path:"/",component:Ce},{path:"/installation",component:Se},{path:"/quick-start",component:we},{path:"/docs",component:Le},{path:"/usage",component:Te},{path:"/scripts",component:Pe},{path:"/api",component:$e}],st={mode:"hash",base:"/script-db",routes:He},G=ye(st),Re=()=>E(G.currentRoute,t=>{let s=He.find(a=>a.path===t.path);return s?s.component():{tagName:"div",props:{},children:["404 - Not Found"]}});var xe=()=>{let t=(s,a)=>o(M({href:`#${a}`,class:e.navLink,onclick:n=>{n.preventDefault(),G.push(a)}},s));return de({class:e.header},ge({class:`${e.container} ${e.nav}`},M({href:"#/",class:e.logo,onclick:s=>{s.preventDefault(),G.push("/")}},"ScriptDB"),w({class:e.navLinks},t("Home","/"),t("Installation","/installation"),t("Quick Start","/quick-start"),t("Docs","/docs"),t("Usage","/usage"),t("API","/api"),t("Scripts","/scripts"))))};function re(t){return typeof t=="string"?document.getElementById(t.replace("#","")):t}function ie(t,s){if(!t)throw new Error(`Element not found: ${s}`);return t}function F(t){return t==null||t===!1}function Ne(t){return t==null||typeof t=="boolean"||typeof t=="string"||typeof t=="number"}var at=class{constructor(){this.elementCache=new WeakMap,this.reactiveNodes=new Map}createElement(t,s={},a=[]){return{tagName:t,props:s,children:a}}renderToDOM(t,s){if(t==null||t===!1)return;if(typeof t!="object"){s.appendChild(document.createTextNode(String(t)));return}let{tagName:a,props:n,children:c}=t,p=a==="svg"||a[0]==="s"&&a[1]==="v"&&a[2]==="g"||s.namespaceURI==="http://www.w3.org/2000/svg",r=p?document.createElementNS("http://www.w3.org/2000/svg",a.replace("svg","").toLowerCase()||a):document.createElement(a);for(let g in n){let f=n[g];if(f==null||f===!1)continue;let l=g.charCodeAt(0);if(l===99&&(g.length<6||g[5]==="N")){let C=Array.isArray(f)?f.join(" "):f;p?r.setAttribute("class",C):r.className=C}else if(l===115&&g.length===5)if(typeof f=="string")r.style.cssText=f;else{let C=r.style;for(let y in f)C[y]=f[y]}else l===111&&g.charCodeAt(1)===110?r[g.toLowerCase()]=f:l===100&&g.length>20?r.innerHTML=f.e:l===114&&g.length===3?setTimeout(()=>{typeof f=="function"?f(r):f.current=r},0):r.setAttribute(g,f===!0?"":String(f))}let d=c.length;if(!d){s.appendChild(r);return}let b=g=>{for(let f=0;f<d;f++){let l=c[f];if(!F(l))if(Array.isArray(l))for(let C=0,y=l.length;C<y;C++){let m=l[C];!F(m)&&this.renderToDOM(m,g)}else this.renderToDOM(l,g)}};if(d>30){let g=document.createDocumentFragment();b(g),r.appendChild(g)}else b(r);s.appendChild(r)}render(t,s){let a=ie(re(t),t);if(a.innerHTML="",s.children&&s.children.length>500){let n=document.createDocumentFragment();this.renderToDOM(s,n),a.appendChild(n)}else this.renderToDOM(s,a);return a}batchRender(t,s){let a=ie(re(t),t),n=s.length;if(n>3e3){let c=document.createDocumentFragment(),p=0,r=1500,d=()=>{let b=Math.min(p+r,n);for(let g=p;g<b;g++)this.renderToDOM(s[g],c);p=b,p>=n?a.appendChild(c):requestAnimationFrame(d)};d()}else{let c=document.createDocumentFragment();for(let p=0;p<n;p++)this.renderToDOM(s[p],c);a.appendChild(c)}return a}renderChunked(t,s,a=5e3,n){let c=ie(re(t),t),p=s.length,r=0,d=()=>{let b=Math.min(r+a,p),g=document.createDocumentFragment();for(let f=r;f<b;f++)this.renderToDOM(s[f],g);c.appendChild(g),r=b,n&&n(r,p),r<p&&requestAnimationFrame(d)};return requestAnimationFrame(d),c}renderToHead(...t){let s=document.head;if(s)for(let a of t.flat())a&&this.renderToDOM(a,s);return s}addStyle(t){let s=document.createElement("style");return s.textContent=t,document.head.appendChild(s)}addMeta(t){let s=document.createElement("meta");for(let a in t)s.setAttribute(a,t[a]);return document.head.appendChild(s)}addLink(t){let s=document.createElement("link");for(let a in t)s.setAttribute(a,t[a]);return document.head.appendChild(s)}setTitle(t){return document.title=t}createState(t,s={}){let a=t,n=new Set,c=null,{throttle:p=0,deep:r=!1}=s,d=()=>n.forEach(g=>g(a)),b=()=>{p>0?c||(c=setTimeout(()=>{c=null,d()},p)):d()};return{get value(){return a},set value(g){(r?JSON.stringify(a)!==JSON.stringify(g):a!==g)&&(a=g,b())},subscribe(g){return n.add(g),()=>n.delete(g)},destroy(){n.clear(),c&&clearTimeout(c)}}}computed(t,s){let a=t.map(c=>c.value),n=this.createState(s(...a));return t.forEach((c,p)=>{c.subscribe(r=>{a[p]=r,n.value=s(...a)})}),n}effect(t){t()}createVirtualList(t,s,a,n=50,c=5){let p=t.clientHeight,r=s.length*n,d=0,b=()=>{let l=Math.max(0,Math.floor(d/n)-c),C=Math.min(s.length,Math.ceil((d+p)/n)+c);return{start:l,end:C}},g=()=>{let{start:l,end:C}=b(),y=document.createElement("div");y.style.cssText=`height:${r}px;position:relative`;for(let m=l;m<C;m++){let h=document.createElement("div");h.style.cssText=`position:absolute;top:${m*n}px;height:${n}px;width:100%`,this.renderToDOM(a(s[m],m),h),y.appendChild(h)}t.innerHTML="",t.appendChild(y)},f=()=>{d=t.scrollTop,requestAnimationFrame(g)};return t.addEventListener("scroll",f),g(),{render:g,destroy:()=>{t.removeEventListener("scroll",f),t.innerHTML=""}}}lazy(t){let s=null,a=!1;return async(...n)=>(!s&&!a&&(a=!0,s=await t(),a=!1),s?s(...n):{tagName:"div",props:{class:"loading"},children:["Loading..."]})}cleanupUnusedElements(t){let s=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT),a=[];for(;s.nextNode();){let n=s.currentNode;n.id&&n.id.startsWith("r")&&!this.elementCache.has(n)&&a.push(n)}return a.forEach(n=>n.remove()),a.length}renderToString(t,s={}){let{pretty:a=!1,indent:n=0}=s,c=a?"  ".repeat(n):"",p=a?`
`:"",r=this.resolveStateValue(t);if(r=this.unwrapReactive(r),Array.isArray(r))return r.map(y=>this.renderToString(y,s)).join("");if(typeof r!="object"||r===null)return r==null||r===!1?"":this.escapeHtml(String(r));let{tagName:d,props:b,children:g}=r,f=this.isSelfClosingTag(d),l=`${c}<${d}`,C=this.propsToAttributes(b);if(C&&(l+=` ${C}`),f)return l+=` />${p}`,l;if(l+=">",b.dangerouslySetInnerHTML)return l+=b.dangerouslySetInnerHTML.e,l+=`</${d}>${p}`,l;if(g&&g.length>0){let y=g.map(h=>{let $=this.resolveStateValue(h);return this.unwrapReactive($)}),m=y.some(h=>typeof h=="object"&&h!==null&&!Array.isArray(h)&&"tagName"in h);if(a&&m){l+=p;for(let h of y)if(!F(h))if(Array.isArray(h))for(let $ of h)F($)||(l+=this.renderToString($,{pretty:a,indent:n+1}));else l+=this.renderToString(h,{pretty:a,indent:n+1});l+=c}else for(let h of y)if(!F(h))if(Array.isArray(h))for(let $ of h)F($)||(l+=this.renderToString($,{pretty:!1,indent:0}));else l+=this.renderToString(h,{pretty:!1,indent:0})}return l+=`</${d}>${p}`,l}resolveStateValue(t){return t&&typeof t=="object"&&"value"in t&&"subscribe"in t?t.value:t}isReactiveWrapper(t){return!t||typeof t!="object"||!t.tagName?!1:t.tagName==="span"&&t.props?.id&&typeof t.props.id=="string"&&t.props.id.match(/^r[a-z0-9]{9}$/)}unwrapReactive(t){if(!this.isReactiveWrapper(t))return t;let s=t.children;if(!s||s.length===0)return"";if(s.length===1){let a=s[0];if(a&&typeof a=="object"&&a.tagName==="span"){let n=a.props,c=!n||Object.keys(n).length===0,p=a.children&&a.children.length===1&&typeof a.children[0]=="string";if(c&&p)return a.children[0]}return this.unwrapReactive(a)}return s.map(a=>this.unwrapReactive(a))}escapeHtml(t){let s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"};return t.replace(/[&<>"']/g,a=>s[a])}isSelfClosingTag(t){return new Set(["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"]).has(t.toLowerCase())}propsToAttributes(t){let s=[];for(let a in t){if(a==="children"||a==="dangerouslySetInnerHTML"||a==="ref")continue;let n=t[a];if(n=this.resolveStateValue(n),!(n==null||n===!1)&&!(a.startsWith("on")&&typeof n=="function")){if(a==="className"||a==="class"){let c=Array.isArray(n)?n.join(" "):n;c&&s.push(`class="${this.escapeHtml(String(c))}"`);continue}if(a==="style"){let c=this.styleToString(n);c&&s.push(`style="${this.escapeHtml(c)}"`);continue}if(n===!0){s.push(a);continue}s.push(`${a}="${this.escapeHtml(String(n))}"`)}}return s.join(" ")}styleToString(t){if(typeof t=="string")return t;if(typeof t=="object"&&t!==null){let s=[];for(let a in t){let n=a.replace(/([A-Z])/g,"-$1").toLowerCase();s.push(`${n}:${t[a]}`)}return s.join(";")}return""}isState(t){return t&&typeof t=="object"&&"value"in t&&"subscribe"in t&&typeof t.subscribe=="function"}createReactiveChild(t,s){let a=s(t.value);if(typeof window<"u"&&typeof document<"u"){let n={node:null,renderFn:s};this.reactiveNodes.set(t,n),t.subscribe(()=>{if(n.node&&n.node.parentNode){let c=s(t.value);n.node.textContent=String(c??"")}})}return a}jsonToVNode(t){if(this.isState(t))return this.createReactiveChild(t,r=>r);if(Ne(t))return t;let{tag:s,attributes:a={},children:n}=t,c={};for(let r in a){let d=a[r];r==="class"?c.className=this.isState(d)?d.value:d:c[r]=this.isState(d)?d.value:d}let p=[];if(n!=null)if(Array.isArray(n))for(let r of n)if(this.isState(r))p.push(this.createReactiveChild(r,d=>d));else{let d=this.jsonToVNode(r);d!=null&&d!==!1&&p.push(d)}else if(this.isState(n))p.push(this.createReactiveChild(n,r=>r));else if(typeof n=="object"&&"tag"in n){let r=this.jsonToVNode(n);r!=null&&r!==!1&&p.push(r)}else p.push(n);return{tagName:s,props:c,children:p}}vNodeJsonToVNode(t){if(this.isState(t))return this.createReactiveChild(t,r=>r);if(Ne(t))return t;let{tagName:s,props:a={},children:n=[]}=t,c={};for(let r in a){let d=a[r];c[r]=this.isState(d)?d.value:d}let p=[];for(let r of n)if(this.isState(r))p.push(this.createReactiveChild(r,d=>d));else{let d=this.vNodeJsonToVNode(r);d!=null&&d!==!1&&p.push(d)}return{tagName:s,props:c,children:p}}renderJson(t,s){let a=this.jsonToVNode(s);if(!a||typeof a!="object"||!("tagName"in a))throw new Error("Invalid JSON structure");return this.render(t,a)}renderVNode(t,s){let a=this.vNodeJsonToVNode(s);if(!a||typeof a!="object"||!("tagName"in a))throw new Error("Invalid VNode JSON structure");return this.render(t,a)}renderJsonToString(t,s={}){let a=this.jsonToVNode(t);return this.renderToString(a,s)}renderVNodeToString(t,s={}){let a=this.vNodeJsonToVNode(t);return this.renderToString(a,s)}renderToHTMLDocument(t,s={}){let{title:a="",meta:n=[],links:c=[],scripts:p=[],styles:r=[],lang:d="en",head:b="",bodyAttrs:g={},pretty:f=!1}=s,l=f?`
`:"",C=f?"  ":"",y=f?"    ":"",m=`<!DOCTYPE html>${l}<html lang="${d}">${l}${C}<head>${l}${y}<meta charset="UTF-8">${l}${y}<meta name="viewport" content="width=device-width, initial-scale=1.0">${l}`;a&&(m+=`${y}<title>${this.escapeHtml(a)}</title>${l}`);for(let h of n){m+=`${y}<meta`;for(let $ in h)m+=` ${$}="${this.escapeHtml(h[$])}"`;m+=`>${l}`}for(let h of c){m+=`${y}<link`;for(let $ in h)m+=` ${$}="${this.escapeHtml(h[$])}"`;m+=`>${l}`}for(let h of r)h.href?m+=`${y}<link rel="stylesheet" href="${this.escapeHtml(h.href)}">${l}`:h.content&&(m+=`${y}<style>${h.content}</style>${l}`);b&&(m+=b+l),m+=`${C}</head>${l}${C}<body`;for(let h in g)m+=` ${h}="${this.escapeHtml(g[h])}"`;m+=`>${l}`,m+=this.renderToString(t,{pretty:f,indent:2});for(let h of p)m+=`${y}<script`,h.type&&(m+=` type="${this.escapeHtml(h.type)}"`),h.async&&(m+=" async"),h.defer&&(m+=" defer"),h.src?m+=` src="${this.escapeHtml(h.src)}"><\/script>${l}`:h.content?m+=`>${h.content}<\/script>${l}`:m+=`><\/script>${l}`;return m+=`${C}</body>${l}</html>`,m}getElementCache(){return this.elementCache}},q=new at,mr=q.render.bind(q),fr=q.renderToString.bind(q);var nt=(t,s)=>q.createState(t,s);var rt=class{constructor(t,s,a){this.key=t,this.wsUrl=a,this.ws=null,this.pendingUpdates=[],this.localState=nt(s),this.previousValue=s,this.connect()}get value(){return this.localState.value}set value(t){this.previousValue=this.localState.value,this.localState.value=t,this.sendToServer(t)}get state(){return this.localState}onChange(t){return this.localState.subscribe(s=>{let a=this.previousValue;this.previousValue=s,t(s,a)})}update(t){this.value=t(this.value)}connect(){if(typeof window>"u")return;let t=this.wsUrl||`ws://${location.host}`;this.ws=new WebSocket(t),this.ws.addEventListener("open",()=>{for(this.subscribe();this.pendingUpdates.length>0;){let s=this.pendingUpdates.shift();this.sendToServer(s)}}),this.ws.addEventListener("message",s=>{this.handleMessage(s.data)}),this.ws.addEventListener("close",()=>{setTimeout(()=>this.connect(),1e3)}),this.ws.addEventListener("error",s=>{console.error("[SharedState] WebSocket error:",s)})}subscribe(){!this.ws||this.ws.readyState!==WebSocket.OPEN||this.ws.send(JSON.stringify({type:"state:subscribe",key:this.key}))}handleMessage(t){try{let s=JSON.parse(t);if(s.key!==this.key)return;(s.type==="state:init"||s.type==="state:update")&&(this.localState.value=s.value)}catch{}}sendToServer(t){if(this.ws){if(this.ws.readyState!==WebSocket.OPEN){this.pendingUpdates.push(t);return}this.ws.send(JSON.stringify({type:"state:change",key:this.key,value:t}))}}disconnect(){this.ws&&(this.ws.close(),this.ws=null)}destroy(){this.disconnect(),this.localState.destroy()}};var it=class{constructor(){this.states=new Map}create(t,s,a){if(this.states.has(t))return this.states.get(t);let n=new rt(t,s,a);return this.states.set(t,n),n}get(t){return this.states.get(t)}delete(t){let s=this.states.get(t);return s?(s.destroy(),this.states.delete(t)):!1}clear(){this.states.forEach(t=>t.destroy()),this.states.clear()}},br=new it;var oe=class{constructor(){this.variables=[],this.rules=[],this.mediaRules=[],this.keyframes=[],this.fontFaces=[],this.imports=[],this.containerRules=[],this.supportsRules=[],this.layerRules=[],this.t=[]}addVar(t,s){let a={name:t.startsWith("--")?t:`--${t}`,value:s,toString(){return`var(${this.name})`}};return this.variables.push(a),a}var(t,s){let a=typeof t=="string"?t.startsWith("--")?t:`--${t}`:t.name;return s?`var(${a}, ${s})`:`var(${a})`}addTag(t,s){let a={selector:t,styles:s,type:"tag"};return this.rules.push(a),a}addClass(t,s){let n={selector:t.startsWith(".")?t:`.${t}`,styles:s,type:"class"};return this.rules.push(n),n}addId(t,s){let n={selector:t.startsWith("#")?t:`#${t}`,styles:s,type:"id"};return this.rules.push(n),n}addPseudoClass(t,s,a){let n=t.startsWith(":")?t:`:${t}`,p={selector:a?`${a}${n}`:n,styles:s,type:"pseudo-class"};return this.rules.push(p),p}addPseudoElement(t,s,a){let n=t.startsWith("::")?t:`::${t}`,p={selector:a?`${a}${n}`:n,styles:s,type:"pseudo-element"};return this.rules.push(p),p}addAttribute(t,s,a){let n=t.startsWith("[")?t:`[${t}]`,p={selector:a?`${a}${n}`:n,styles:s,type:"attribute"};return this.rules.push(p),p}attrEquals(t,s,a,n){return this.addAttribute(`${t}="${s}"`,a,n)}attrContainsWord(t,s,a,n){return this.addAttribute(`${t}~="${s}"`,a,n)}attrStartsWith(t,s,a,n){return this.addAttribute(`${t}^="${s}"`,a,n)}attrEndsWith(t,s,a,n){return this.addAttribute(`${t}$="${s}"`,a,n)}attrContains(t,s,a,n){return this.addAttribute(`${t}*="${s}"`,a,n)}descendant(t,s,a){return this.createAndAddRule(`${t} ${s}`,a)}child(t,s,a){return this.createAndAddRule(`${t} > ${s}`,a)}adjacentSibling(t,s,a){return this.createAndAddRule(`${t} + ${s}`,a)}generalSibling(t,s,a){return this.createAndAddRule(`${t} ~ ${s}`,a)}multiple(t,s){return this.createAndAddRule(t.join(", "),s)}addName(t,s){return{selector:t.startsWith("--")?`&${t}`:`&--${t}`,styles:s,type:"name"}}nesting(t,...s){return t.nested=s,t}keyframe(t,s){let a=Object.entries(s).map(([c,p])=>({step:c==="from"?"from":c==="to"?"to":`${c}%`,styles:p})),n={name:t,steps:a};return this.keyframes.push(n),n}keyframeFromTo(t,s,a){return this.keyframe(t,{from:s,to:a})}fontFace(t){return this.fontFaces.push(t),t}import(t,s){let a=s?`@import url("${t}") ${s};`:`@import url("${t}");`;return this.imports.push(a),a}media(t,s,a){let n={type:t,condition:s,rules:this.rulesToCSSRules(a)};return this.mediaRules.push(n),n}mediaScreen(t,s){return this.media("screen",t,s)}mediaPrint(t){return this.media("print","",t)}mediaMinWidth(t,s){return this.media("screen",`min-width: ${t}`,s)}mediaMaxWidth(t,s){return this.media("screen",`max-width: ${t}`,s)}mediaDark(t){let s={type:"",condition:"prefers-color-scheme: dark",rules:this.rulesToCSSRules(t)};return this.mediaRules.push(s),s}mediaLight(t){let s={type:"",condition:"prefers-color-scheme: light",rules:this.rulesToCSSRules(t)};return this.mediaRules.push(s),s}mediaReducedMotion(t){let s={type:"",condition:"prefers-reduced-motion: reduce",rules:this.rulesToCSSRules(t)};return this.mediaRules.push(s),s}container(t,s,a){let n={name:a,condition:t,rules:this.rulesToCSSRules(s)};return this.containerRules.push(n),n}addContainer(t,s){let a={...s,containerName:t};return this.addClass(t,a)}supports(t,s){let a={condition:t,rules:this.rulesToCSSRules(s)};return this.supportsRules.push(a),a}layerOrder(...t){this.t=t}layer(t,s){let a={name:t,rules:this.rulesToCSSRules(s)};return this.layerRules.push(a),a}add(t){return Object.entries(t).map(([a,n])=>{let c={selector:a,styles:n,type:"custom"};return this.rules.push(c),c})}important(t){return`${t} !important`}toKebabCase(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}createAndAddRule(t,s,a="custom"){let n={selector:t,styles:s,type:a};return this.rules.push(n),n}rulesToCSSRules(t){return Object.entries(t).map(([s,a])=>({selector:s,styles:a,type:"custom"}))}renderRulesWithIndent(t,s="    "){return t.map(a=>this.renderRule(a,s)).join(`
`)}stylesToString(t,s="    "){return Object.entries(t).map(([a,n])=>{let c=typeof n=="object"&&n!==null&&"name"in n?`var(${n.name})`:n;return`${s}${this.toKebabCase(a)}: ${c};`}).join(`
`)}renderRule(t,s=""){let a=`${s}${t.selector} {
${this.stylesToString(t.styles,s+"    ")}
`;if(t.nested&&t.nested.length>0)for(let n of t.nested){let c=n.selector.startsWith("&")?n.selector.replace(/&/g,t.selector):`${t.selector} ${n.selector}`;a+=`
${s}${c} {
${this.stylesToString(n.styles,s+"    ")}
${s}}
`}return a+=`${s}}`,a}renderMediaRule(t){return`@media ${t.type&&t.condition?`${t.type} and (${t.condition})`:t.type?t.type:`(${t.condition})`} {
${this.renderRulesWithIndent(t.rules)}
}`}renderKeyframes(t){let s=`@keyframes ${t.name} {
`;for(let a of t.steps)s+=`    ${a.step} {
${this.stylesToString(a.styles,"        ")}
    }
`;return s+="}",s}renderFontFace(t){let s=`@font-face {
`;return s+=`    font-family: "${t.fontFamily}";
`,s+=`    src: ${t.src};
`,t.fontWeight&&(s+=`    font-weight: ${t.fontWeight};
`),t.fontStyle&&(s+=`    font-style: ${t.fontStyle};
`),t.fontDisplay&&(s+=`    font-display: ${t.fontDisplay};
`),t.unicodeRange&&(s+=`    unicode-range: ${t.unicodeRange};
`),s+="}",s}renderContainerRule(t){return`@container ${t.name?`${t.name} `:""}(${t.condition}) {
${this.renderRulesWithIndent(t.rules)}
}`}renderSupportsRule(t){return`@supports (${t.condition}) {
${this.renderRulesWithIndent(t.rules)}
}`}renderLayerRule(t){return`@layer ${t.name} {
${this.renderRulesWithIndent(t.rules)}
}`}render(...t){let s=[];if(this.imports.length>0&&s.push(this.imports.join(`
`)),this.t.length>0&&s.push(`@layer ${this.t.join(", ")};`),this.variables.length>0){let b=this.variables.map(g=>`    ${g.name}: ${g.value};`).join(`
`);s.push(`:root {
${b}
}`)}for(let b of this.fontFaces)s.push(this.renderFontFace(b));for(let b of this.keyframes)s.push(this.renderKeyframes(b));let a=[...this.rules],n=[...this.mediaRules],c=[],p=[...this.containerRules],r=[...this.supportsRules],d=[...this.layerRules];for(let b of t)b&&(Array.isArray(b)?a.push(...b):"condition"in b&&"rules"in b&&!("name"in b&&"steps"in b)?"type"in b?n.push(b):"name"in b&&typeof b.name=="string"?p.push(b):r.push(b):"name"in b&&"steps"in b?c.push(b):"name"in b&&"rules"in b?d.push(b):a.push(b));for(let b of c)s.push(this.renderKeyframes(b));for(let b of d)s.push(this.renderLayerRule(b));for(let b of a)s.push(this.renderRule(b));for(let b of r)s.push(this.renderSupportsRule(b));for(let b of p)s.push(this.renderContainerRule(b));for(let b of n)s.push(this.renderMediaRule(b));return s.join(`

`)}inject(t){let s=this.render(),a=document.createElement("style");return t&&(a.id=t),a.textContent=s,document.head.appendChild(a),a}clear(){this.variables=[],this.rules=[],this.mediaRules=[],this.keyframes=[],this.fontFaces=[],this.imports=[],this.containerRules=[],this.supportsRules=[],this.layerRules=[],this.t=[]}},ot=new oe,{addVar:yr,var:vr,addTag:Cr,addClass:Sr,addId:wr,addPseudoClass:Lr,addPseudoElement:Tr,addAttribute:Pr,attrEquals:$r,attrContainsWord:Hr,attrStartsWith:Rr,attrEndsWith:xr,attrContains:Nr,descendant:kr,child:Dr,adjacentSibling:Er,generalSibling:Ar,multiple:Mr,addName:Ur,nesting:Or,keyframe:Ir,keyframeFromTo:Br,fontFace:Fr,import:Vr,media:Wr,mediaScreen:jr,mediaPrint:qr,mediaMinWidth:Jr,mediaMaxWidth:zr,mediaDark:_r,mediaLight:Gr,mediaReducedMotion:Qr,container:Kr,addContainer:Yr,supports:Zr,layerOrder:Xr,layer:ei,add:ti,important:si,render:ai,inject:ni,clear:ri}=ot,Q=typeof document<"u";function ct(t){return t.charAt(0).toUpperCase()+t.slice(1)}function A(t){return Q&&t?t.bind(N):void 0}function ke(t,s,a){t.forEach(n=>{let c=s+ct(n);a[c]=ce(n)})}var ce=t=>function(s,...a){if(!arguments.length)return{tagName:t,props:{},children:[]};let n=s&&typeof s=="object"&&"value"in s&&"subscribe"in s,c=s&&typeof s=="object"&&"tagName"in s,p=typeof s!="object"||Array.isArray(s)||s===null||n||c,r=p?{}:s,d=p?[s,...a]:a;if(!d.length)return{tagName:t,props:r,children:[]};let b=[];for(let g=0,f=d.length;g<f;g++){let l=d[g];if(!(l==null||l===!1))if(Array.isArray(l))for(let C=0,y=l.length;C<y;C++){let m=l[C];m!=null&&m!==!1&&b.push(m)}else b.push(l)}return{tagName:t,props:r,children:b}},lt=["html","head","body","title","base","link","meta","style","address","article","aside","footer","header","h1","h2","h3","h4","h5","h6","main","nav","section","blockquote","dd","div","dl","dt","figcaption","figure","hr","li","ol","p","pre","ul","a","abbr","b","bdi","bdo","br","cite","code","data","dfn","em","i","kbd","mark","q","rp","rt","ruby","s","samp","small","span","strong","sub","sup","time","u","wbr","area","audio","img","map","track","video","embed","iframe","object","param","picture","portal","source","canvas","noscript","script","del","ins","caption","col","colgroup","table","tbody","td","tfoot","th","thead","tr","button","datalist","fieldset","form","input","label","legend","meter","optgroup","option","output","progress","select","textarea","details","dialog","menu","summary","slot","template"],pt=["svg","circle","rect","path","line","polyline","polygon","ellipse","g","text","tspan","defs","linearGradient","radialGradient","stop","pattern","mask","clipPath","use","symbol","marker","image","foreignObject","animate","animateTransform","animateMotion","set","filter","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feGaussianBlur","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence"],dt=["math","mi","mn","mo","ms","mtext","mrow","mfrac","msqrt","mroot","msub","msup"],J={};lt.forEach(t=>{J[t]=ce(t)});ke(pt,"svg",J);ke(dt,"math",J);J.varElement=ce("var");var{html:ii,head:oi,body:ci,title:li,base:pi,link:di,meta:ui,style:gi,address:hi,article:mi,aside:fi,footer:De,header:bi,h1:yi,h2:vi,h3:Ci,h4:Si,h5:wi,h6:Li,main:Ti,nav:Pi,section:$i,blockquote:Hi,dd:Ri,div:Ee,dl:xi,dt:Ni,figcaption:ki,figure:Di,hr:Ei,li:Ai,ol:Mi,p:le,pre:Ui,ul:Oi,a:Ae,abbr:Ii,b:Bi,bdi:Fi,bdo:Vi,br:Wi,cite:ji,code:qi,data:Ji,dfn:zi,em:_i,i:Gi,kbd:Qi,mark:Ki,q:Yi,rp:Zi,rt:Xi,ruby:eo,s:to,samp:so,small:ao,span:no,strong:ro,sub:io,sup:oo,time:co,u:lo,wbr:po,area:uo,audio:go,img:ho,map:mo,track:fo,video:bo,embed:yo,iframe:vo,object:Co,param:So,picture:wo,portal:Lo,source:To,canvas:Po,noscript:$o,script:Ho,del:Ro,ins:xo,caption:No,col:ko,colgroup:Do,table:Eo,tbody:Ao,td:Mo,tfoot:Uo,th:Oo,thead:Io,tr:Bo,button:Fo,datalist:Vo,fieldset:Wo,form:jo,input:qo,label:Jo,legend:zo,meter:_o,optgroup:Go,option:Qo,output:Ko,progress:Yo,select:Zo,textarea:Xo,details:ec,dialog:tc,menu:sc,summary:ac,slot:nc,template:rc,svgSvg:ic,svgCircle:oc,svgRect:cc,svgPath:lc,svgLine:pc,svgPolyline:dc,svgPolygon:uc,svgEllipse:gc,svgG:hc,svgText:mc,svgTspan:fc,svgDefs:bc,svgLinearGradient:yc,svgRadialGradient:vc,svgStop:Cc,svgPattern:Sc,svgMask:wc,svgClipPath:Lc,svgUse:Tc,svgSymbol:Pc,svgMarker:$c,svgImage:Hc,svgForeignObject:Rc,svgAnimate:xc,svgAnimateTransform:Nc,svgAnimateMotion:kc,svgSet:Dc,svgFilter:Ec,svgFeBlend:Ac,svgFeColorMatrix:Mc,svgFeComponentTransfer:Uc,svgFeComposite:Oc,svgFeConvolveMatrix:Ic,svgFeDiffuseLighting:Bc,svgFeDisplacementMap:Fc,svgFeFlood:Vc,svgFeGaussianBlur:Wc,svgFeMorphology:jc,svgFeOffset:qc,svgFeSpecularLighting:Jc,svgFeTile:zc,svgFeTurbulence:_c,mathMath:Gc,mathMi:Qc,mathMn:Kc,mathMo:Yc,mathMs:Zc,mathMtext:Xc,mathMrow:el,mathMfrac:tl,mathMsqrt:sl,mathMroot:al,mathMsub:nl,mathMsup:rl,varElement:il}=J;var N=Q?document:void 0,ol=A(N?.querySelector),cl=A(N?.querySelectorAll),ll=A(N?.createElement),pl=Q?N.createElementNS.bind(N,"http://www.w3.org/2000/svg"):void 0,dl=Q?N.createElementNS.bind(N,"http://www.w3.org/1998/Math/MathML"):void 0,ul=A(N?.createDocumentFragment),gl=A(N?.createTextNode),hl=A(N?.createComment),ml=A(N?.getElementById),fl=A(N?.getElementsByClassName),bl=A(N?.getElementsByTagName),yl=A(N?.getElementsByName);var ut=class{constructor(){this.enabled=!1,this.ws=null,this.acceptCallbacks=[],this.disposeCallbacks=[],this.declined=!1,!(typeof window>"u")&&this.connect()}connect(){let t=window.location.protocol==="https:"?"wss:":"ws:",s=window.location.hostname,a=window.location.port||"3000";this.ws=new WebSocket(`${t}//${s}:${a}`),this.ws.onopen=()=>{this.enabled=!0,console.log("[Elit HMR] Connected \u2713")},this.ws.onmessage=n=>{try{let c=JSON.parse(n.data);this.handleMessage(c)}catch(c){console.error("[Elit HMR] Error parsing message:",c)}},this.ws.onclose=()=>{this.enabled=!1,console.log("[Elit HMR] Disconnected - Attempting reconnect..."),setTimeout(()=>this.reload(),1e3)},this.ws.onerror=n=>{console.error("[Elit HMR] WebSocket error:",n)}}handleMessage(t){switch(t.type){case"connected":console.log("[Elit HMR] Ready");break;case"update":if(console.log(`[Elit HMR] Update detected: ${t.path}`),this.declined){this.reload();return}this.disposeCallbacks.forEach(s=>s()),this.disposeCallbacks=[],this.acceptCallbacks.length>0?this.acceptCallbacks.forEach(s=>s()):this.reload();break;case"reload":console.log("[Elit HMR] Full reload requested"),this.reload();break;case"error":console.error("[Elit HMR] Server error:",t.error);break}}reload(){window.location.reload()}accept(t){t&&this.acceptCallbacks.push(t),this.declined=!1}decline(){this.declined=!0}dispose(t){this.disposeCallbacks.push(t)}},gt=new ut;typeof window<"u"&&(window.n=gt);var Me=()=>De({class:e.footer},Ee({class:e.container},le("\xA9 2025 ScriptDB. MIT License."),le("Created by ",Ae({href:"https://github.com/n-devs",target:"n-devs",rel:"noopener noreferrer"},"@n-devs"))));var R=new oe,Ue=!1,Oe=()=>{if(Ue)return;Ue=!0;let t=document.createElement("style");t.textContent=`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      line-height: 1.6;
      color: #333;
      background: #f5f5f5;
    }
  `,document.head.appendChild(t),R.addClass("app-container",{minHeight:"100vh",display:"flex",flexDirection:"column"}),R.addClass("container",{maxWidth:"1200px",margin:"0 auto",padding:"0 20px"}),R.addClass("header",{background:"#2c3e50",color:"white",padding:"1rem 0",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"}),R.addClass("nav",{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"1rem"}),R.addClass("logo",{fontSize:"1.5rem",fontWeight:"bold",textDecoration:"none",color:"white"}),R.addClass("nav-links",{display:"flex",gap:"2rem",listStyle:"none",flexWrap:"wrap"}),R.addClass("nav-link",{color:"white",textDecoration:"none",transition:"opacity 0.2s",padding:"0.25rem 0"}),R.addPseudoClass("hover",{opacity:.8},".nav-link"),R.addClass("nav-link-active",{color:"white",textDecoration:"none",padding:"0.25rem 0",borderBottom:"2px solid white"}),R.addPseudoClass("hover",{opacity:.8},".nav-link-active"),R.addClass("main-content",{flex:1,background:"white",margin:"2rem auto",padding:"2rem",borderRadius:"8px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.1)",maxWidth:"1200px",width:"100%"}),R.addClass("page",{maxWidth:"100%"}),R.addClass("page-h1",{color:"#2c3e50",marginBottom:"1rem",paddingBottom:"0.5rem",borderBottom:"3px solid #3498db"}),R.addClass("page-h2",{color:"#2c3e50",marginTop:"2rem",marginBottom:"1rem"}),R.addClass("page-h3",{color:"#34495e",marginTop:"1.5rem",marginBottom:"0.75rem"}),R.addClass("page-p",{marginBottom:"1rem",lineHeight:1.6}),R.addClass("page-ul",{marginLeft:"2rem",marginBottom:"1rem"}),R.addClass("page-li",{marginBottom:"0.5rem"}),R.addClass("page-pre",{background:"#f4f4f4",border:"1px solid #ddd",borderLeft:"3px solid #3498db",color:"#333",fontFamily:"'Courier New', Courier, monospace",fontSize:"14px",lineHeight:1.6,marginBottom:"1.6rem",maxWidth:"100%",overflow:"auto",padding:"1rem",borderRadius:"4px"}),R.addClass("page-code",{fontFamily:"'Courier New', Courier, monospace",background:"#f4f4f4",padding:"2px 6px",borderRadius:"3px",fontSize:"0.9em"}),R.addClass("hero",{textAlign:"center",padding:"3rem 0"}),R.addClass("hero-title",{fontSize:"3rem",border:"none",marginBottom:"0.5rem"}),R.addClass("subtitle",{fontSize:"1.25rem",color:"#666"}),R.addClass("features",{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"2rem",margin:"3rem 0"}),R.addClass("feature",{padding:"1.5rem",border:"1px solid #ddd",borderRadius:"8px",transition:"transform 0.2s, box-shadow 0.2s"}),R.addPseudoClass("hover",{transform:"translateY(-4px)",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.1)"},".feature"),R.addClass("feature-h3",{marginTop:0,marginBottom:"0.5rem"}),R.addClass("section",{margin:"2rem 0"}),R.addClass("footer",{textAlign:"center",padding:"2rem 0",color:"#666",background:"#f5f5f5",marginTop:"auto"}),R.addClass("tabs",{display:"flex",gap:"0.5rem",marginBottom:"1rem",borderBottom:"2px solid #e0e0e0"}),R.addClass("tab",{padding:"0.75rem 1.5rem",background:"transparent",border:"none",borderBottom:"2px solid transparent",cursor:"pointer",fontSize:"1rem",color:"#666",transition:"all 0.2s",marginBottom:"-2px"}),R.addPseudoClass("hover",{color:"#2c3e50",background:"#f5f5f5"},".tab"),R.addClass("tab-active",{padding:"0.75rem 1.5rem",background:"transparent",border:"none",borderBottom:"2px solid #3498db",cursor:"pointer",fontSize:"1rem",color:"#2c3e50",fontWeight:"bold",marginBottom:"-2px"}),R.addClass("tab-content",{marginTop:"1rem"}),R.addClass("download-section",{textAlign:"center",margin:"2rem 0"}),R.addClass("download-button",{display:"inline-block",background:"#27ae60",color:"white",padding:"1rem 2rem",textDecoration:"none",borderRadius:"8px",fontSize:"1.1rem",fontWeight:"bold",transition:"all 0.3s",border:"none",cursor:"pointer",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"}),R.addPseudoClass("hover",{background:"#229954",transform:"translateY(-2px)",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)"},".download-button"),R.mediaMaxWidth("768px",{".nav":{flexDirection:"column",alignItems:"flex-start"},".nav-links":{flexDirection:"column",gap:"1rem",width:"100%"},".hero-title":{fontSize:"2rem"},".main-content":{margin:"1rem auto",padding:"1rem"},".features":{gridTemplateColumns:"1fr"}}),R.inject("app-styles")};Oe();var ht=()=>v({class:e.appContainer},xe(),ue({class:e.mainContent},v({class:e.page},Re())),Me()),Ie=document.getElementById("app");Ie&&me(Ie,ht());
