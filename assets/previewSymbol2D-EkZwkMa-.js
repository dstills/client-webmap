import{iP as S,fw as w,iQ as A,iR as R,iS as V,iT as W,D as q,iU as D,iV as H,b4 as E,iW as F,iX as I,iY as Q,iZ as L}from"./index-nBWeBKPv.js";const O="picture-fill",X="picture-marker",Y="simple-fill",G="simple-line",J="simple-marker",K="text",N="Aa",_=S.size,C=S.maxSize,$=S.maxOutlineSize,Z=S.lineWidth,P=225,ee=document.createElement("canvas");function U(a,e){const i=ee.getContext("2d"),n=[];e&&(e.weight&&n.push(e.weight),e.size&&n.push(e.size+"px"),e.family&&n.push(e.family)),i.font=n.join(" ");const{width:h,actualBoundingBoxLeft:c,actualBoundingBoxRight:d,actualBoundingBoxAscent:s,actualBoundingBoxDescent:u}=i.measureText(a);return{width:Math.ceil(Math.max(h,c+d)),height:Math.ceil(s+u),x:Math.floor(c),y:Math.floor((s-u)/2)}}function x(a){const e=a==null?void 0:a.size;return{width:e!=null&&typeof e=="object"&&"width"in e?w(e.width):null,height:e!=null&&typeof e=="object"&&"height"in e?w(e.height):null}}async function ae(a,e){const i=e.fill,n=a.color;if((i==null?void 0:i.type)==="pattern"&&n&&a.type!==O){const h=await I(i.src,n.toCss(!0));i.src=h,e.fill=i}}async function ne(a,e,i,n){var d,s,u;if(!("font"in a)||!a.font||e.shape.type!=="text")return;try{await Q(a.font)}catch{}const{width:h,height:c}=x(n);if(!/[\uE600-\uE6FF]/.test(e.shape.text)){const{width:p,height:f,x:l,y:o}=U(e.shape.text,{weight:(d=e.font)==null?void 0:d.weight,size:(s=e.font)==null?void 0:s.size,family:(u=e.font)==null?void 0:u.family});i[0]=h??p,i[1]=c??f,e.shape.x=l,e.shape.y=o;const b=(n==null?void 0:n.rotation)!=null?n.rotation:"angle"in a?a.angle:null;if(b){const M=b*(Math.PI/180),r=Math.abs(Math.sin(M)),m=Math.abs(Math.cos(M));i[1]=i[0]*r+i[1]*m}}}function ie(a,e,i,n,h){var c;if(a.haloColor!=null&&a.haloSize!=null){h.masking??(h.masking=i.map(()=>[]));const d=w(a.haloSize);n[0]+=d,n[1]+=d,i.unshift([{...e,fill:null,stroke:{color:a.haloColor,width:2*d,join:"round",cap:"round"}}]),h.masking.unshift([{shape:{type:"rect",x:0,y:0,width:n[0]+2*L,height:n[1]+2*L},fill:[255,255,255],stroke:null},{...e,fill:[0,0,0,0],stroke:null}])}a.backgroundColor==null&&a.borderLineColor==null||(n[0]+=2*L,n[1]+=2*L,i.unshift([{shape:{type:"rect",x:0,y:0,width:n[0],height:n[1]},fill:a.backgroundColor,stroke:{color:a.borderLineColor,width:w(a.borderLineSize)}}]),(c=h.masking)==null||c.unshift([]))}function T(a,e){return a>e?"dark":"light"}function le(a,e){var M;const i=typeof(e==null?void 0:e.size)=="number"?e==null?void 0:e.size:null,n=i!=null?w(i):null,h=(e==null?void 0:e.maxSize)!=null?w(e.maxSize):null,c=(e==null?void 0:e.rotation)!=null?e.rotation:"angle"in a?a.angle:null,d=A(a);let s=R(a);oe(a,245)!=="dark"||e!=null&&e.ignoreWhiteSymbols||(s={width:.75,...s,color:"#bdc3c7"});const u={shape:null,fill:d,stroke:s,offset:[0,0]};s!=null&&s.width&&(s.width=Math.min(s.width,$));const p=(s==null?void 0:s.width)||0;let f=(e==null?void 0:e.size)!=null&&((e==null?void 0:e.scale)==null||(e==null?void 0:e.scale)),l=0,o=0,b=!1;switch(a.type){case J:{const r=a.style,{width:m,height:t}=x(e),v=m===t&&m!=null?m:n??Math.min(w(a.size),h||C);switch(l=v,o=v,r){case"circle":u.shape={type:"circle",cx:0,cy:0,r:.5*v},f||(l+=p,o+=p);break;case"cross":u.shape={type:"path",path:[{command:"M",values:[0,.5*o]},{command:"L",values:[l,.5*o]},{command:"M",values:[.5*l,0]},{command:"L",values:[.5*l,o]}]};break;case"diamond":u.shape={type:"path",path:[{command:"M",values:[0,.5*o]},{command:"L",values:[.5*l,0]},{command:"L",values:[l,.5*o]},{command:"L",values:[.5*l,o]},{command:"Z",values:[]}]},f||(l+=p,o+=p);break;case"square":u.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[l,0]},{command:"L",values:[l,o]},{command:"L",values:[0,o]},{command:"Z",values:[]}]},f||(l+=p,o+=p),c&&(b=!0);break;case"triangle":u.shape={type:"path",path:[{command:"M",values:[.5*l,0]},{command:"L",values:[l,o]},{command:"L",values:[0,o]},{command:"Z",values:[]}]},f||(l+=p,o+=p),c&&(b=!0);break;case"x":u.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[l,o]},{command:"M",values:[l,0]},{command:"L",values:[0,o]}]},c&&(b=!0);break;case"path":u.shape={type:"path",path:a.path||""},f||(l+=p,o+=p),c&&(b=!0),f=!0}break}case G:{const{width:r,height:m}=x(e),t=W(s).reduce((B,k)=>B+k,0),v=t&&Math.ceil(Z/t),y=m??n??p,g=r??(t*v||Z);s&&(s.width=y),l=g,o=y,f=!0,u.shape={type:"path",path:[{command:"M",values:[y/2,o/2]},{command:"L",values:[l-y/2,o/2]}]};break}case O:case Y:{const r=typeof(e==null?void 0:e.symbolConfig)=="object"&&!!((M=e==null?void 0:e.symbolConfig)!=null&&M.isSquareFill),{width:m,height:t}=x(e);l=!r&&m!==t||m==null?n??_:m,o=!r&&m!==t||t==null?l:t,f||(l+=p,o+=p),f=!0,u.shape=r?{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[l,0]},{command:"L",values:[l,o]},{command:"L",values:[0,o]},{command:"L",values:[0,0]},{command:"Z",values:[]}]}:V.fill[0];break}case X:{const r=Math.min(w(a.width),h||C),m=Math.min(w(a.height),h||C),{width:t,height:v}=x(e),y=t===v&&t!=null?t:n??Math.max(r,m),g=r/m;l=g<=1?Math.ceil(y*g):y,o=g<=1?y:Math.ceil(y/g),u.shape={type:"image",x:-Math.round(l/2),y:-Math.round(o/2),width:l,height:o,src:a.url||""},c&&(b=!0);break}case K:{const r=a,m=(e==null?void 0:e.overrideText)||r.text||N,t=r.font,{width:v,height:y}=x(e),g=y??n??Math.min(w(t.size),h||C),{width:B,height:k}=U(m,{weight:t.weight,size:g,family:t.family}),z=/[\uE600-\uE6FF]/.test(m);l=v??(z?g:B),o=z?g:k;let j=.5*(z?g:k);z&&(j+=5),u.shape={type:"text",text:m,x:r.xoffset||0,y:r.yoffset||j,align:"middle",alignBaseline:r.verticalAlignment,decoration:t&&t.decoration,rotated:r.rotated,kerning:r.kerning},u.font=t&&{size:g,style:t.style,decoration:t.decoration,weight:t.weight,family:t.family};break}}return{shapeDescriptor:u,size:[l,o],renderOptions:{node:e==null?void 0:e.node,scale:f,opacity:e==null?void 0:e.opacity,rotation:c,useRotationSize:b,effectView:e==null?void 0:e.effectView,ariaLabel:e==null?void 0:e.ariaLabel}}}async function te(a,e){var d;const{shapeDescriptor:i,size:n,renderOptions:h}=le(a,e);if(!i.shape)throw new q("symbolPreview: renderPreviewHTML2D","symbol not supported.");await ae(a,i),await ne(a,i,n,e);const c=[[i]];if(typeof(e==null?void 0:e.symbolConfig)=="object"&&((d=e==null?void 0:e.symbolConfig)!=null&&d.applyColorModulation)){const s=.6*n[0];c.unshift([{...i,offset:[-s,0],fill:D(i.fill,-.3)}]),c.push([{...i,offset:[s,0],fill:D(i.fill,.3)}]),n[0]+=2*s,h.scale=!1}return a.type==="text"&&ie(a,i,c,n,h),H(c,n,h)}function oe(a,e=P){const i=A(a),n=R(a),h=!i||"type"in i?null:new E(i),c=n!=null&&n.color?new E(n==null?void 0:n.color):null,d=h?T(F(h),e):null,s=c?T(F(c),e):null;return s?d?d===s?d:e>=P?"light":"dark":s:d}export{oe as getContrastingBackgroundTheme,le as getRenderSymbolParameters,te as previewSymbol2D};
