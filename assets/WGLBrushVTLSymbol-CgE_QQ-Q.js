import{ov as tt,fC as k,u$ as w,pQ as O,qx as N,h as et,qC as at,o as it,v0 as H,gq as q,v1 as G,qy as b,v2 as nt,v3 as A,v4 as Y,s_ as B,or as rt,v5 as Q}from"./index-nBWeBKPv.js";import{r as st}from"./vec4f32-CjrfB-0a.js";let $=class{constructor(){this.name=this.constructor.name||"UnnamedBrush",this.brushEffect=null}prepareState(i,e){}draw(i,e,t){}drawMany(i,e,t){for(const n of e)n.visible&&this.draw(i,n,t)}},gt=class extends ${constructor(){super(...arguments),this._color=st(1,0,0,1),this._patternMatrix=tt(),this._programOptions={id:!1,pattern:!1}}dispose(){this._vao&&(this._vao.dispose(),this._vao=null)}drawMany(i,e){const{context:t,painter:n,requestRender:l,allowDelayedRender:_}=i;this._loadWGLResources(i);const f=i.displayLevel,s=i.styleLayer,v=s.backgroundMaterial,d=n.vectorTilesMaterialManager,E=s.getPaintValue("background-color",f),p=s.getPaintValue("background-opacity",f),S=s.getPaintValue("background-pattern",f),y=S!==void 0,P=1|window.devicePixelRatio,M=i.spriteMosaic;let x,U;const c=P>H?2:1,m=this._programOptions;m.pattern=y;const r=d.getMaterialProgram(t,v,m);if(!_||l==null||r.compiled){if(t.bindVAO(this._vao),t.useProgram(r),y){const a=M.getMosaicItemPosition(S,!0);if(a!=null){const{tl:u,br:g,page:o}=a;x=g[0]-u[0],U=g[1]-u[1];const T=M.getPageSize(o);T!=null&&(M.bind(t,k.LINEAR,o,w),r.setUniform4f("u_tlbr",u[0],u[1],g[0],g[1]),r.setUniform2fv("u_mosaicSize",T),r.setUniform1i("u_texture",w))}r.setUniform1f("u_opacity",p)}else{const a=E[3]*p;this._color[0]=a*E[0],this._color[1]=a*E[1],this._color[2]=a*E[2],this._color[3]=a,r.setUniform4fv("u_color",this._color)}r.setUniform1f("u_depth",s.z||0);for(const a of e){if(r.setUniform1f("u_coord_range",a.rangeX),r.setUniformMatrix3fv("u_dvsMat3",a.transforms.displayViewScreenMat3),y){const u=Math.max(2**(Math.round(f)-a.key.level),1),g=c*a.width*u,o=g/q(x),T=g/q(U);this._patternMatrix[0]=o,this._patternMatrix[4]=T,r.setUniformMatrix3fv("u_pattern_matrix",this._patternMatrix)}t.setStencilFunction(O.EQUAL,0,255),t.drawArrays(N.TRIANGLE_STRIP,0,4)}}else l()}_loadWGLResources(i){if(this._vao)return;const{context:e,styleLayer:t}=i,n=t.backgroundMaterial,l=new Int8Array([0,0,1,0,0,1,1,1]),_=et.createVertex(e,at.STATIC_DRAW,l),f=new it(e,n.getAttributeLocations(),n.getLayoutInfo(),{geometry:_});this._vao=f}};class yt extends ${constructor(){super(...arguments),this._programOptions={id:!1}}dispose(){}drawMany(i,e){const{context:t,displayLevel:n,requiredLevel:l,state:_,painter:f,spriteMosaic:s,styleLayerUID:v,requestRender:d,allowDelayedRender:E}=i;if(!e.some(r=>{var a;return((a=r.layerData.get(v))==null?void 0:a.circleIndexCount)??!1}))return;const p=i.styleLayer,S=p.circleMaterial,y=f.vectorTilesMaterialManager,P=1.2,M=p.getPaintValue("circle-translate",n),x=p.getPaintValue("circle-translate-anchor",n),U=this._programOptions,c=y.getMaterialProgram(t,S,U);if(E&&d!=null&&!c.compiled)return void d();t.useProgram(c),c.setUniformMatrix3fv("u_displayMat3",x===G.VIEWPORT?_.displayMat3:_.displayViewMat3),c.setUniform2fv("u_circleTranslation",M),c.setUniform1f("u_depth",p.z),c.setUniform1f("u_antialiasingWidth",P);let m=-1;for(const r of e){if(!r.layerData.has(v))continue;r.key.level!==m&&(m=r.key.level,S.setDataUniforms(c,n,p,m,s));const a=r.layerData.get(v);if(!a.circleIndexCount)continue;a.prepareForRendering(t);const u=a.vao;u!=null&&(t.bindVAO(u),c.setUniformMatrix3fv("u_dvsMat3",r.transforms.displayViewScreenMat3),l!==r.key.level?t.setStencilFunction(O.EQUAL,r.stencilRef,255):t.setStencilFunction(O.GREATER,255,255),t.drawElements(N.TRIANGLES,a.circleIndexCount,b.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*a.circleIndexStart),r.triangleCount+=a.circleIndexCount/3)}}}const X=1/65536;class _t extends ${constructor(){super(...arguments),this._fillProgramOptions={id:!1,pattern:!1},this._outlineProgramOptions={id:!1}}dispose(){}drawMany(i,e){const{displayLevel:t,renderPass:n,spriteMosaic:l,styleLayerUID:_}=i;let f=!1;for(const c of e)if(c.layerData.has(_)){const m=c.layerData.get(_);if(m.fillIndexCount>0||m.outlineIndexCount>0){f=!0;break}}if(!f)return;const s=i.styleLayer,v=s.getPaintProperty("fill-pattern"),d=v!==void 0,E=d&&v.isDataDriven;let p;if(d&&!E){const c=v.getValue(t);p=l.getMosaicItemPosition(c,!0)}const S=!d&&s.getPaintValue("fill-antialias",t);let y=!0,P=1;if(!d){const c=s.getPaintProperty("fill-color"),m=s.getPaintProperty("fill-opacity");if(!(c!=null&&c.isDataDriven)&&!(m!=null&&m.isDataDriven)){const r=s.getPaintValue("fill-color",t);P=s.getPaintValue("fill-opacity",t)*r[3],P>=1&&(y=!1)}}if(y&&n==="opaque")return;const M=s.getPaintValue("fill-translate",t),x=s.getPaintValue("fill-translate-anchor",t);(y||n!=="translucent")&&this._drawFill(i,_,s,e,M,x,d,p,E);const U=!s.hasDataDrivenOutlineColor&&s.outlineUsesFillColor&&P<1;S&&n!=="opaque"&&!U&&this._drawOutline(i,_,s,e,M,x)}_drawFill(i,e,t,n,l,_,f,s,v){if(f&&!v&&s==null)return;const{context:d,displayLevel:E,state:p,painter:S,pixelRatio:y,spriteMosaic:P,requestRender:M,allowDelayedRender:x}=i,U=t.fillMaterial,c=S.vectorTilesMaterialManager,m=y>H?2:1,r=this._fillProgramOptions;r.pattern=f;const a=c.getMaterialProgram(d,U,r);if(x&&M!=null&&!a.compiled)return void M();if(d.useProgram(a),s!=null){const{page:g}=s,o=P.getPageSize(g);o!=null&&(P.bind(d,k.LINEAR,g,w),a.setUniform2fv("u_mosaicSize",o),a.setUniform1i("u_texture",w))}a.setUniformMatrix3fv("u_displayMat3",_===G.VIEWPORT?p.displayMat3:p.displayViewMat3),a.setUniform2fv("u_fillTranslation",l),a.setUniform1f("u_depth",t.z+X);let u=-1;for(const g of n){if(!g.layerData.has(e))continue;g.key.level!==u&&(u=g.key.level,U.setDataUniforms(a,E,t,u,P));const o=g.layerData.get(e);if(!o.fillIndexCount)continue;o.prepareForRendering(d);const T=o.fillVAO;if(T!=null){if(d.bindVAO(T),a.setUniformMatrix3fv("u_dvsMat3",g.transforms.displayViewScreenMat3),d.setStencilFunction(O.EQUAL,g.stencilRef,255),f){const h=Math.max(2**(Math.round(E)-g.key.level),1),R=g.rangeX/(m*g.width*h);a.setUniform1f("u_patternFactor",R)}if(v){const h=o.patternMap;if(!h)continue;for(const[R,D]of h){const z=P.getPageSize(R);z!=null&&(P.bind(d,k.LINEAR,R,w),a.setUniform2fv("u_mosaicSize",z),a.setUniform1i("u_texture",w),d.drawElements(N.TRIANGLES,D[1],b.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*D[0]))}}else d.drawElements(N.TRIANGLES,o.fillIndexCount,b.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*o.fillIndexStart);g.triangleCount+=o.fillIndexCount/3}}}_drawOutline(i,e,t,n,l,_){const{context:f,displayLevel:s,state:v,painter:d,pixelRatio:E,spriteMosaic:p,requestRender:S,allowDelayedRender:y}=i,P=t.outlineMaterial,M=d.vectorTilesMaterialManager,x=.75/E,U=this._outlineProgramOptions,c=M.getMaterialProgram(f,P,U);if(y&&S!=null&&!c.compiled)return void S();f.useProgram(c),c.setUniformMatrix3fv("u_displayMat3",_===G.VIEWPORT?v.displayMat3:v.displayViewMat3),c.setUniform2fv("u_fillTranslation",l),c.setUniform1f("u_depth",t.z+X),c.setUniform1f("u_outline_width",x);let m=-1;for(const r of n){if(!r.layerData.has(e))continue;r.key.level!==m&&(m=r.key.level,P.setDataUniforms(c,s,t,m,p));const a=r.layerData.get(e);if(a.prepareForRendering(f),!a.outlineIndexCount)continue;const u=a.outlineVAO;u!=null&&(f.bindVAO(u),c.setUniformMatrix3fv("u_dvsMat3",r.transforms.displayViewScreenMat3),f.setStencilFunction(O.EQUAL,r.stencilRef,255),f.drawElements(N.TRIANGLES,a.outlineIndexCount,b.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*a.outlineIndexStart),r.triangleCount+=a.outlineIndexCount/3)}}}class Mt extends ${constructor(){super(...arguments),this._programOptions={id:!1,pattern:!1,sdf:!1}}dispose(){}drawMany(i,e){const{context:t,displayLevel:n,state:l,painter:_,pixelRatio:f,spriteMosaic:s,styleLayerUID:v,requestRender:d,allowDelayedRender:E}=i;if(!e.some(h=>{var R;return((R=h.layerData.get(v))==null?void 0:R.lineIndexCount)??!1}))return;const p=i.styleLayer,S=p.lineMaterial,y=_.vectorTilesMaterialManager,P=p.getPaintValue("line-translate",n),M=p.getPaintValue("line-translate-anchor",n),x=p.getPaintProperty("line-pattern"),U=x!==void 0,c=U&&x.isDataDriven;let m,r;if(U&&!c){const h=x.getValue(n);m=s.getMosaicItemPosition(h)}let a=!1;if(!U){const h=p.getPaintProperty("line-dasharray");if(r=h!==void 0,a=r&&h.isDataDriven,r&&!a){const R=h.getValue(n),D=p.getDashKey(R,p.getLayoutValue("line-cap",n));m=s.getMosaicItemPosition(D)}}const u=1/f,g=this._programOptions;g.pattern=U,g.sdf=r;const o=y.getMaterialProgram(t,S,g);if(E&&d!=null&&!o.compiled)return void d();if(t.useProgram(o),o.setUniformMatrix3fv("u_displayViewMat3",l.displayViewMat3),o.setUniformMatrix3fv("u_displayMat3",M===G.VIEWPORT?l.displayMat3:l.displayViewMat3),o.setUniform2fv("u_lineTranslation",P),o.setUniform1f("u_depth",p.z),o.setUniform1f("u_antialiasing",u),m&&m!=null){const{page:h}=m,R=s.getPageSize(h);R!=null&&(s.bind(t,k.LINEAR,h,w),o.setUniform2fv("u_mosaicSize",R),o.setUniform1i("u_texture",w))}let T=-1;for(const h of e){if(!h.layerData.has(v))continue;h.key.level!==T&&(T=h.key.level,S.setDataUniforms(o,n,p,T,s));const R=2**(n-T)/f;o.setUniform1f("u_zoomFactor",R);const D=h.layerData.get(v);if(!D.lineIndexCount)continue;D.prepareForRendering(t);const z=D.vao;if(z!=null){if(t.bindVAO(z),o.setUniformMatrix3fv("u_dvsMat3",h.transforms.displayViewScreenMat3),t.setStencilFunction(O.EQUAL,h.stencilRef,255),c||a){const F=D.patternMap;if(!F)continue;for(const[I,C]of F){const L=s.getPageSize(I);L!=null&&(s.bind(t,k.LINEAR,I,w),o.setUniform2fv("u_mosaicSize",L),o.setUniform1i("u_texture",w),t.drawElements(N.TRIANGLES,C[1],b.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*C[0]))}}else t.drawElements(N.TRIANGLES,D.lineIndexCount,b.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*D.lineIndexStart);h.triangleCount+=D.lineIndexCount/3}}}}const ot=256/360,lt=1/Math.LN2;function ct(V,i){return(V%=i)>=0?V:V+i}function j(V){return ct(V*ot,256)}function ht(V){return Math.log(V)*lt}const ut=1/65536;class vt extends ${constructor(){super(...arguments),this._iconProgramOptions={id:!1,sdf:!1},this._sdfProgramOptions={id:!1},this._spritesTextureSize=nt()}dispose(){}drawMany(i,e){const t=i.styleLayer;this._drawIcons(i,t,e),this._drawText(i,t,e)}_drawIcons(i,e,t){const{context:n,displayLevel:l,painter:_,spriteMosaic:f,state:s,styleLayerUID:v,requestRender:d,allowDelayedRender:E}=i,p=e.iconMaterial,S=_.vectorTilesMaterialManager;let y,P=!1;for(const o of t)if(o.layerData.has(v)&&(y=o.layerData.get(v),y.iconPerPageElementsMap.size>0)){P=!0;break}if(!P)return;const M=e.getPaintValue("icon-translate",l),x=e.getPaintValue("icon-translate-anchor",l);let U=e.getLayoutValue("icon-rotation-alignment",l);U===A.AUTO&&(U=e.getLayoutValue("symbol-placement",l)===Y.POINT?A.VIEWPORT:A.MAP);const c=U===A.MAP,m=e.getLayoutValue("icon-keep-upright",l)&&c,r=y.isIconSDF,a=this._iconProgramOptions;a.sdf=r;const u=S.getMaterialProgram(n,p,a);if(E&&d!=null&&!u.compiled)return void d();n.useProgram(u),u.setUniformMatrix3fv("u_displayViewMat3",U===A.MAP?s.displayViewMat3:s.displayMat3),u.setUniformMatrix3fv("u_displayMat3",x===G.VIEWPORT?s.displayMat3:s.displayViewMat3),u.setUniform2fv("u_iconTranslation",M),u.setUniform1f("u_depth",e.z),u.setUniform1f("u_mapRotation",j(s.rotation)),u.setUniform1f("u_keepUpright",m?1:0),u.setUniform1f("u_level",10*l),u.setUniform1i("u_texture",w),u.setUniform1f("u_fadeDuration",B/1e3);let g=-1;for(const o of t){if(!o.layerData.has(v)||(o.key.level!==g&&(g=o.key.level,p.setDataUniforms(u,l,e,g,f)),y=o.layerData.get(v),y.iconPerPageElementsMap.size===0))continue;y.prepareForRendering(n),y.updateOpacityInfo();const T=y.iconVAO;if(T!=null){n.bindVAO(T),u.setUniformMatrix3fv("u_dvsMat3",o.transforms.displayViewScreenMat3),u.setUniform1f("u_time",(performance.now()-y.lastOpacityUpdate)/1e3);for(const[h,R]of y.iconPerPageElementsMap)this._renderIconRange(i,u,R,h,o)}}}_renderIconRange(i,e,t,n,l){const{context:_,spriteMosaic:f}=i;this._spritesTextureSize[0]=f.getWidth(n)/4,this._spritesTextureSize[1]=f.getHeight(n)/4,e.setUniform2fv("u_mosaicSize",this._spritesTextureSize),f.bind(_,k.LINEAR,n,w),this._setStencilState(i,l),_.drawElements(N.TRIANGLES,t[1],b.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*t[0]),l.triangleCount+=t[1]/3}_drawText(i,e,t){const{context:n,displayLevel:l,glyphMosaic:_,painter:f,pixelRatio:s,spriteMosaic:v,state:d,styleLayerUID:E,requestRender:p,allowDelayedRender:S}=i,y=e.textMaterial,P=f.vectorTilesMaterialManager;let M,x=!1;for(const L of t)if(L.layerData.has(E)&&(M=L.layerData.get(E),M.glyphPerPageElementsMap.size>0)){x=!0;break}if(!x)return;const U=e.getPaintProperty("text-opacity");if(U&&!U.isDataDriven&&U.getValue(l)===0)return;const c=e.getPaintProperty("text-color"),m=!c||c.isDataDriven||c.getValue(l)[3]>0,r=e.getPaintProperty("text-halo-width"),a=e.getPaintProperty("text-halo-color"),u=(!r||r.isDataDriven||r.getValue(l)>0)&&(!a||a.isDataDriven||a.getValue(l)[3]>0);if(!m&&!u)return;const g=24/8;let o=e.getLayoutValue("text-rotation-alignment",l);o===A.AUTO&&(o=e.getLayoutValue("symbol-placement",l)===Y.POINT?A.VIEWPORT:A.MAP);const T=o===A.MAP,h=e.getLayoutValue("text-keep-upright",l)&&T,R=.8*g/s;this._glyphTextureSize||(this._glyphTextureSize=rt(_.width/4,_.height/4));const D=e.getPaintValue("text-translate",l),z=e.getPaintValue("text-translate-anchor",l),F=this._sdfProgramOptions,I=P.getMaterialProgram(n,y,F);if(S&&p!=null&&!I.compiled)return void p();n.useProgram(I),I.setUniformMatrix3fv("u_displayViewMat3",o===A.MAP?d.displayViewMat3:d.displayMat3),I.setUniformMatrix3fv("u_displayMat3",z===G.VIEWPORT?d.displayMat3:d.displayViewMat3),I.setUniform2fv("u_textTranslation",D),I.setUniform1f("u_depth",e.z+ut),I.setUniform2fv("u_mosaicSize",this._glyphTextureSize),I.setUniform1f("u_mapRotation",j(d.rotation)),I.setUniform1f("u_keepUpright",h?1:0),I.setUniform1f("u_level",10*l),I.setUniform1i("u_texture",Q),I.setUniform1f("u_antialiasingWidth",R),I.setUniform1f("u_fadeDuration",B/1e3);let C=-1;for(const L of t){if(!L.layerData.has(E)||(L.key.level!==C&&(C=L.key.level,y.setDataUniforms(I,l,e,C,v)),M=L.layerData.get(E),M.glyphPerPageElementsMap.size===0))continue;M.prepareForRendering(n),M.updateOpacityInfo();const W=M.textVAO;if(W==null)continue;n.bindVAO(W),I.setUniformMatrix3fv("u_dvsMat3",L.transforms.displayViewScreenMat3),this._setStencilState(i,L);const K=(performance.now()-M.lastOpacityUpdate)/1e3;I.setUniform1f("u_time",K),M.glyphPerPageElementsMap.forEach((J,Z)=>{this._renderGlyphRange(n,J,Z,_,I,u,m,L)})}}_renderGlyphRange(i,e,t,n,l,_,f,s){n.bind(i,k.LINEAR,t,Q),_&&(l.setUniform1f("u_halo",1),i.drawElements(N.TRIANGLES,e[1],b.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*e[0]),s.triangleCount+=e[1]/3),f&&(l.setUniform1f("u_halo",0),i.drawElements(N.TRIANGLES,e[1],b.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*e[0]),s.triangleCount+=e[1]/3)}_setStencilState(i,e){const{context:t,is3D:n,stencilSymbols:l}=i;if(t.setStencilTestEnabled(!0),l)return t.setStencilWriteMask(255),void t.setStencilFunction(O.ALWAYS,e.stencilRef,255);t.setStencilWriteMask(0),n?t.setStencilFunction(O.EQUAL,e.stencilRef,255):t.setStencilFunction(O.GREATER,255,255)}}export{vt as d,ht as e,_t as f,yt as n,Mt as s,$ as t,gt as u};