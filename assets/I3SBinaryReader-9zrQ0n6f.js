import{D as l,dZ as U,aK as D,aH as P}from"./index-nBWeBKPv.js";const d=!0,m={identifierOffset:0,identifierLength:10,versionOffset:10,checksumOffset:12,byteCount:16};function z(e,t,r){return{identifier:String.fromCharCode.apply(null,new Uint8Array(e,r+m.identifierOffset,m.identifierLength)),version:t.getUint16(r+m.versionOffset,d),checksum:t.getUint32(r+m.checksumOffset,d)}}const g={sizeLo:0,sizeHi:4,minX:8,minY:16,minZ:24,maxX:32,maxY:40,maxZ:48,errorX:56,errorY:64,errorZ:72,count:80,reserved:84,byteCount:88};function S(e,t){return{sizeLo:e.getUint32(t+g.sizeLo,d),sizeHi:e.getUint32(t+g.sizeHi,d),minX:e.getFloat64(t+g.minX,d),minY:e.getFloat64(t+g.minY,d),minZ:e.getFloat64(t+g.minZ,d),maxX:e.getFloat64(t+g.maxX,d),maxY:e.getFloat64(t+g.maxY,d),maxZ:e.getFloat64(t+g.maxZ,d),errorX:e.getFloat64(t+g.errorX,d),errorY:e.getFloat64(t+g.errorY,d),errorZ:e.getFloat64(t+g.errorZ,d),count:e.getUint32(t+g.count,d),reserved:e.getUint32(t+g.reserved,d)}}function J(e){const t=new DataView(e,0);let r=0;const{identifier:c,version:o}=z(e,t,r);if(r+=m.byteCount,c!=="LEPCC     ")throw new l("lepcc-decode-error","Bad identifier");if(o>1)throw new l("lepcc-decode-error","Unknown version");const n=S(t,r);if(r+=g.byteCount,n.sizeHi*2**32+n.sizeLo!==e.byteLength)throw new l("lepcc-decode-error","Bad size");const a=new Float64Array(3*n.count),u=[],i=[],s=[],f=[];if(r=I(e,r,u),r=I(e,r,i),r=I(e,r,s),r=I(e,r,f),r!==e.byteLength)throw new l("lepcc-decode-error","Bad length");let w=0,y=0;for(let b=0;b<u.length;b++){y+=u[b];let v=0;for(let C=0;C<i[b];C++){v+=s[w];const E=f[w];a[3*w]=Math.min(n.maxX,n.minX+2*n.errorX*v),a[3*w+1]=Math.min(n.maxY,n.minY+2*n.errorY*y),a[3*w+2]=Math.min(n.maxZ,n.minZ+2*n.errorZ*E),w++}}return{errorX:n.errorX,errorY:n.errorY,errorZ:n.errorZ,result:a}}function I(e,t,r){const c=[];t=O(e,t,c);const o=[];for(let n=0;n<c.length;n++){o.length=0,t=O(e,t,o);for(let a=0;a<o.length;a++)r.push(o[a]+c[n])}return t}function O(e,t,r){const c=new DataView(e,t),o=c.getUint8(0),n=31&o,a=!!(32&o),u=(192&o)>>6;let i=0;if(u===0)i=c.getUint32(1,d),t+=5;else if(u===1)i=c.getUint16(1,d),t+=3;else{if(u!==2)throw new l("lepcc-decode-error","Bad count type");i=c.getUint8(1),t+=2}if(a)throw new l("lepcc-decode-error","LUT not implemented");const s=Math.ceil(i*n/8),f=new Uint8Array(e,t,s);let w=0,y=0,b=0;const v=-1>>>32-n;for(let C=0;C<i;C++){for(;y<n;)w|=f[b]<<y,y+=8,b+=1;r[C]=w&v,w>>>=n,y-=n,y+n>32&&(w|=f[b-1]>>8-y)}return t+b}const p={sizeLo:0,sizeHi:4,count:8,colorMapCount:12,lookupMethod:14,compressionMethod:15,byteCount:16};function Y(e,t){return{sizeLo:e.getUint32(t+p.sizeLo,d),sizeHi:e.getUint32(t+p.sizeHi,d),count:e.getUint32(t+p.count,d),colorMapCount:e.getUint16(t+p.colorMapCount,d),lookupMethod:e.getUint8(t+p.lookupMethod),compressionMethod:e.getUint8(t+p.compressionMethod)}}function V(e){const t=new DataView(e,0);let r=0;const{identifier:c,version:o}=z(e,t,r);if(r+=m.byteCount,c!=="ClusterRGB")throw new l("lepcc-decode-error","Bad identifier");if(o>1)throw new l("lepcc-decode-error","Unknown version");const n=Y(t,r);if(r+=p.byteCount,n.sizeHi*2**32+n.sizeLo!==e.byteLength)throw new l("lepcc-decode-error","Bad size");if((n.lookupMethod===2||n.lookupMethod===1)&&n.compressionMethod===0){if(3*n.colorMapCount+n.count+r!==e.byteLength||n.colorMapCount>256)throw new l("lepcc-decode-error","Bad count");const a=new Uint8Array(e,r,3*n.colorMapCount),u=new Uint8Array(e,r+3*n.colorMapCount,n.count),i=new Uint8Array(3*n.count);for(let s=0;s<n.count;s++){const f=u[s];i[3*s]=a[3*f],i[3*s+1]=a[3*f+1],i[3*s+2]=a[3*f+2]}return i}if(n.lookupMethod===0&&n.compressionMethod===0){if(3*n.count+r!==e.byteLength||n.colorMapCount!==0)throw new l("lepcc-decode-error","Bad count");return new Uint8Array(e,r).slice()}if(n.lookupMethod<=2&&n.compressionMethod===1){if(r+3!==e.byteLength||n.colorMapCount!==1)throw new l("lepcc-decode-error","Bad count");const a=t.getUint8(r),u=t.getUint8(r+1),i=t.getUint8(r+2),s=new Uint8Array(3*n.count);for(let f=0;f<n.count;f++)s[3*f]=a,s[3*f+1]=u,s[3*f+2]=i;return s}throw new l("lepcc-decode-error","Bad method "+n.lookupMethod+","+n.compressionMethod)}const h={sizeLo:0,sizeHi:4,count:8,scaleFactor:12,bitsPerPoint:14,reserved:15,byteCount:16};function Z(e,t){return{sizeLo:e.getUint32(t+h.sizeLo,d),sizeHi:e.getUint32(t+h.sizeHi,d),count:e.getUint32(t+h.count,d),scaleFactor:e.getUint16(t+h.scaleFactor,d),bitsPerPoint:e.getUint8(t+h.bitsPerPoint),reserved:e.getUint8(t+h.reserved)}}function $(e){const t=new DataView(e,0);let r=0;const{identifier:c,version:o}=z(e,t,r);if(r+=m.byteCount,c!=="Intensity ")throw new l("lepcc-decode-error","Bad identifier");if(o>1)throw new l("lepcc-decode-error","Unknown version");const n=Z(t,r);if(r+=h.byteCount,n.sizeHi*2**32+n.sizeLo!==e.byteLength)throw new l("lepcc-decode-error","Bad size");const a=new Uint16Array(n.count);if(n.bitsPerPoint===8){if(n.count+r!==e.byteLength)throw new l("lepcc-decode-error","Bad size");const u=new Uint8Array(e,r,n.count);for(let i=0;i<n.count;i++)a[i]=u[i]*n.scaleFactor}else if(n.bitsPerPoint===16){if(2*n.count+r!==e.byteLength)throw new l("lepcc-decode-error","Bad size");const u=new Uint16Array(e,r,n.count);for(let i=0;i<n.count;i++)a[i]=u[i]*n.scaleFactor}else{const u=[];if(O(e,r,u)!==e.byteLength)throw new l("lepcc-decode-error","Bad size");for(let i=0;i<n.count;i++)a[i]=u[i]*n.scaleFactor}return a}const M=()=>D.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function R(e,t,r){let c="",o=0;for(;o<r;){const n=e[t+o];if(n<128)c+=String.fromCharCode(n),o++;else if(n>=192&&n<224){if(o+1>=r)throw new l("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");const a=(31&n)<<6|63&e[t+o+1];c+=String.fromCharCode(a),o+=2}else if(n>=224&&n<240){if(o+2>=r)throw new l("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(15&n)<<12|(63&e[t+o+1])<<6|63&e[t+o+2];c+=String.fromCharCode(a),o+=3}else{if(!(n>=240&&n<248))throw new l("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");{if(o+3>=r)throw new l("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(7&n)<<18|(63&e[t+o+1])<<12|(63&e[t+o+2])<<6|63&e[t+o+3];if(a>=65536){const u=55296+(a-65536>>10),i=56320+(1023&a);c+=String.fromCharCode(u,i)}else c+=String.fromCharCode(a);o+=4}}}return c}function x(e,t){const r={byteOffset:0,byteCount:0,fields:Object.create(null)};let c=0;for(let o=0;o<t.length;o++){const n=t[o],a=n.valueType||n.type,u=q[a];r.fields[n.property]=u(e,c),c+=L[a].BYTES_PER_ELEMENT}return r.byteCount=c,r}function X(e,t,r){return B(e,t,r).map(c=>{const o=c?Date.parse(c):null;return o&&!Number.isNaN(o)?o:null})}function B(e,t,r){const c=[];let o,n,a=0;for(n=0;n<e;n+=1){if(o=t[n],o>0){if(c.push(R(r,a,o-1)),r[a+o-1]!==0)throw new l("string-array-error","Invalid string array: missing null termination.")}else c.push(null);a+=o}return c}function F(e,t){return new L[t.valueType](e,t.byteOffset,t.count*t.valuesPerElement)}function H(e,t){return new Uint8Array(e,t.byteOffset,t.byteCount)}function N(e,t,r){const c=t.header!=null?x(e,t.header):{byteOffset:0,byteCount:0,fields:{count:r}},o={header:c,byteOffset:c.byteCount,byteCount:0,entries:Object.create(null)};let n=c.byteCount;for(let a=0;a<t.ordering.length;a++){const u=t.ordering[a],i=P(t[u]);if(i.count=c.fields.count??0,i.valueType==="String"){if(i.byteOffset=n,i.byteCount=c.fields[u+"ByteCount"],i.encoding!=="UTF-8")throw new l("unsupported-encoding","Unsupported String encoding.",{encoding:i.encoding});if(i.timeEncoding&&i.timeEncoding!=="ECMA_ISO8601")throw new l("unsupported-time-encoding","Unsupported time encoding.",{timeEncoding:i.timeEncoding})}else{if(!k(i.valueType))throw new l("unsupported-value-type","Unsupported binary valueType",{valueType:i.valueType});{const s=A(i.valueType);n+=n%s!=0?s-n%s:0,i.byteOffset=n,i.byteCount=s*i.valuesPerElement*i.count}}n+=i.byteCount??0,o.entries[u]=i}return o.byteCount=n-o.byteOffset,o}function T(e,t,r){if(t!==e&&M().error(`Invalid ${r} buffer size
 expected: ${e}, actual: ${t})`),t<e)throw new l("buffer-too-small","Binary buffer is too small",{expectedSize:e,actualSize:t})}function j(e){return{isDraco:!1,isLegacy:!1,color:e.color!=null,normal:e.normal!=null,uv0:e.uv0!=null,uvRegion:e.uvRegion!=null,featureIndex:e.faceRange!=null&&e.featureId!=null}}function Q(e,t){const r=x(e,t&&t.header);let c=r.byteCount;const o={isDraco:!1,header:r,byteOffset:r.byteCount,byteCount:0,vertexAttributes:{}},n=r.fields,a=n.vertexCount!=null?n.vertexCount:n.count;for(const s of t.ordering){if(!t.vertexAttributes[s])continue;const f={...t.vertexAttributes[s],byteOffset:c,count:a},w=W[s]||"_"+s;o.vertexAttributes[w]=f,c+=A(f.valueType)*f.valuesPerElement*a}const u=n.faceCount;if(t.faces&&u){o.faces={};for(const s of t.ordering){if(!t.faces[s])continue;const f={...t.faces[s],byteOffset:c,count:u};o.faces[s]=f,c+=A(f.valueType)*f.valuesPerElement*u}}const i=n.featureCount;if(t.featureAttributes&&t.featureAttributeOrder&&i){o.featureAttributes={};for(const s of t.featureAttributeOrder){if(!t.featureAttributes[s])continue;const f={...t.featureAttributes[s],byteOffset:c,count:i};o.featureAttributes[s]=f,c+=(f.valueType==="UInt64"?8:A(f.valueType))*f.valuesPerElement*i}}return T(c,e.byteLength,"geometry"),o.byteCount=c-o.byteOffset,o}function ee(e,t){return!e||!e.compressedAttributes||e.compressedAttributes.encoding!=="draco"?e?j(e):_(t):G(e.compressedAttributes.attributes)}function _(e){const t={isDraco:!1,isLegacy:!0,color:!1,normal:!1,uv0:!1,uvRegion:!1,featureIndex:!1};for(const r of e.ordering)if(e.vertexAttributes[r])switch(r){case"position":break;case"normal":t.normal=!0;break;case"color":t.color=!0;break;case"uv0":t.uv0=!0;break;case"region":t.uvRegion=!0}return e.featureAttributes&&e.featureAttributeOrder&&(t.featureIndex=!0),t}function G(e){const t={isDraco:!0,isLegacy:!1,color:!1,normal:!1,uv0:!1,uvRegion:!1,featureIndex:!1};for(const r of e)switch(r){case"position":break;case"normal":t.normal=!0;break;case"uv0":t.uv0=!0;break;case"color":t.color=!0;break;case"uv-region":t.uvRegion=!0;break;case"feature-index":t.featureIndex=!0}return t}const W={position:U.POSITION,normal:U.NORMAL,color:U.COLOR,uv0:U.UV0,region:U.UVREGION};function te(e,t,r){if(e.encoding==="lepcc-rgb")return V(t);if(e.encoding==="lepcc-intensity")return $(t);if(e.encoding!=null&&e.encoding!=="")throw new l("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");e["attributeByteCounts "]&&!e.attributeByteCounts&&(M().warn("Warning: Trailing space in 'attributeByteCounts '."),e.attributeByteCounts=e["attributeByteCounts "]),e.ordering[0]==="ObjectIds"&&e.hasOwnProperty("objectIds")&&(M().warn("Warning: Case error in objectIds"),e.ordering[0]="objectIds");const c=N(t,e,r);T(c.byteOffset+c.byteCount,t.byteLength,"attribute");const o=c.entries.attributeValues||c.entries.objectIds;if(o){if(o.valueType==="String"){const n=c.entries.attributeByteCounts,a=F(t,n),u=H(t,o);return o.timeEncoding?X(n.count,a,u):B(n.count,a,u)}return F(t,o)}throw new l("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}const L={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},q={Float32:(e,t)=>new DataView(e,0).getFloat32(t,!0),Float64:(e,t)=>new DataView(e,0).getFloat64(t,!0),UInt8:(e,t)=>new DataView(e,0).getUint8(t),Int8:(e,t)=>new DataView(e,0).getInt8(t),UInt16:(e,t)=>new DataView(e,0).getUint16(t,!0),Int16:(e,t)=>new DataView(e,0).getInt16(t,!0),UInt32:(e,t)=>new DataView(e,0).getUint32(t,!0),Int32:(e,t)=>new DataView(e,0).getInt32(t,!0)};function k(e){return L.hasOwnProperty(e)}function A(e){return k(e)?L[e].BYTES_PER_ELEMENT:0}export{te as I,J as c,F as l,ee as p,Q as w};
