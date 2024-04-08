import{D as s,fB as h,fC as u,fD as t,fE as m}from"./index-nBWeBKPv.js";class b{constructor(o,r,e,l){this.dataType=o,this.samplingMode=r,this.pixelFormat=e,this.internalFormat=l}}function x(a,o){const{textureFloat:r,colorBufferFloat:e}=a.capabilities,l=r==null?void 0:r.textureFloatLinear,_=e==null?void 0:e.textureFloat,n=e==null?void 0:e.textureHalfFloat,d=e==null?void 0:e.floatBlend,f=a.driverTest.floatBufferBlend.result;if(!_&&!n)throw new s("heatmap:missing-color-buffer-float","HeatmapRenderer requires the WebGL extension EXT_color_buffer_float or EXT_color_buffer_half_float or WEBGL_color_buffer_float.");if(!(d&&f||n))throw new s("heatmap:missing-float-blend","HeatmapRenderer requires the WebGL extension EXT_float_blend or EXT_color_buffer_half_float."+(f?"":" This device claims support for EXT_float_blend, but does not actually support it."));const R=_&&d&&f,E=n,i=l,p=!!(e!=null&&e.R32F),c=!!(e!=null&&e.R16F);if(R&&i)return i||o.warnOnce("Missing WebGL extension OES_texture_float_linear. Heatmap quality may be reduced."),new b(h.FLOAT,i?u.LINEAR:u.NEAREST,p?t.RED:t.RGBA,p?m.R32F:t.RGBA);if(E)return new b(h.HALF_FLOAT,u.LINEAR,c?t.RED:t.RGBA,c?m.R16F:t.RGBA);throw new s("heatmap:missing-hardware-support","HeatmapRenderer requires WebGL extensions that allow it to render and blend to float or half float textures.")}export{x as n};
