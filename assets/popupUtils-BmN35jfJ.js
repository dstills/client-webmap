import{bo as h,bp as m}from"./index-nBWeBKPv.js";async function x(e,u=e.popupTemplate){var i,o;if(u==null)return[];const n=await u.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:r}=u,{objectIdField:d,typeIdField:a,globalIdField:p,relationships:s}=e;if(n.includes("*"))return["*"];const c=r?h(e):[],l=m(e.fieldsIndex,[...n,...c]);return a&&l.push(a),l&&d&&((i=e.fieldsIndex)!=null&&i.has(d))&&!l.includes(d)&&l.push(d),l&&p&&((o=e.fieldsIndex)!=null&&o.has(p))&&!l.includes(p)&&l.push(p),s&&s.forEach(I=>{var f;const{keyField:t}=I;l&&t&&((f=e.fieldsIndex)!=null&&f.has(t))&&!l.includes(t)&&l.push(t)}),l}function b(e,u){return e.popupTemplate?e.popupTemplate:u!=null&&u.defaultPopupTemplateEnabled&&e.defaultPopupTemplate!=null?e.defaultPopupTemplate:null}function E(e,u){return b(e,{defaultPopupTemplateEnabled:u})!=null}export{x as n,b as p,E as u};
