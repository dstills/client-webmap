/*!
 * All material copyright Esri, All Rights Reserved, unless otherwise specified.
 * See https://js.arcgis.com/4.29/esri/copyright.txt for details.
 * v4.29.10
 */function a(i){var w,o;i.childElem?i.el.isConnected||(i.view?i.view.ui.remove(i.childElem):(w=i.widget)!=null&&w.view&&i.widget.view.ui.remove(i.childElem),i._watchHandles&&i._watchHandles.forEach(d=>{d.remove()}),i._watchHandles=[],(o=i.widget)==null||o.destroy()):setTimeout(()=>{var d,c;i.el.isConnected||(i.view?i.view.ui.remove(i.el):(d=i.widget)!=null&&d.view&&i.widget.view.ui.remove(i.el),i._watchHandles&&i._watchHandles.forEach(s=>{s.remove()}),i._watchHandles=[],(c=i.widget)==null||c.destroy())},1e3)}export{a as o};
