import{a as l,z as a,Y as d,x as g,w as s,c as m,k as r}from"./Theme-DEURy4s8.js";class u extends l{setupDefaultRules(){super.setupDefaultRules(),this.rule("InterfaceColors").setAll({stroke:a.fromHex(0),fill:a.fromHex(2829099),primaryButton:a.lighten(a.fromHex(6788316),-.2),primaryButtonHover:a.lighten(a.fromHex(6779356),-.2),primaryButtonDown:a.lighten(a.fromHex(6872181),-.2),primaryButtonActive:a.lighten(a.fromHex(6872182),-.2),primaryButtonText:a.fromHex(16777215),primaryButtonStroke:a.lighten(a.fromHex(6788316),-.2),secondaryButton:a.fromHex(3881787),secondaryButtonHover:a.lighten(a.fromHex(3881787),.1),secondaryButtonDown:a.lighten(a.fromHex(3881787),.15),secondaryButtonActive:a.lighten(a.fromHex(3881787),.2),secondaryButtonText:a.fromHex(12303291),secondaryButtonStroke:a.lighten(a.fromHex(3881787),-.2),grid:a.fromHex(12303291),background:a.fromHex(0),alternativeBackground:a.fromHex(16777215),text:a.fromHex(16777215),alternativeText:a.fromHex(0),disabled:a.fromHex(11382189),positive:a.fromHex(5288704),negative:a.fromHex(11730944)})}}class t extends l{constructor(e,i){super(e,i),Object.defineProperty(this,"_dp",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"responsiveRules",{enumerable:!0,configurable:!0,writable:!0,value:[]}),this._dp=new d([this._root._rootContainer.onPrivate("width",n=>{this._isUsed()&&this._maybeApplyRules()}),this._root._rootContainer.onPrivate("height",n=>{this._isUsed()&&this._maybeApplyRules()})])}static widthXXS(e,i){return e<=t.XXS}static widthXS(e,i){return e<=t.XS}static widthS(e,i){return e<=t.S}static widthM(e,i){return e<=t.M}static widthL(e,i){return e<=t.L}static widthXL(e,i){return e<=t.XL}static widthXXL(e,i){return e<=t.XXL}static heightXXS(e,i){return i<=t.XXS}static heightXS(e,i){return i<=t.XS}static heightS(e,i){return i<=t.S}static heightM(e,i){return i<=t.M}static heightL(e,i){return i<=t.L}static heightXL(e,i){return i<=t.XL}static heightXXL(e,i){return i<=t.XXL}static isXXS(e,i){return e<=t.XXS&&i<=t.XXS}static isXS(e,i){return e<=t.XS&&i<=t.XS}static isS(e,i){return e<=t.S&&i<=t.S}static isM(e,i){return e<=t.M&&i<=t.M}static isL(e,i){return e<=t.L&&i<=t.L}static isXL(e,i){return e<=t.XL&&i<=t.XL}static isXXL(e,i){return e<=t.XXL&&i<=t.XXL}static maybeXXS(e,i){return e<=t.XXS||i<=t.XXS}static maybeXS(e,i){return e<=t.XS||i<=t.XS}static maybeS(e,i){return e<=t.S||i<=t.S}static maybeM(e,i){return e<=t.M||i<=t.M}static maybeL(e,i){return e<=t.L||i<=t.L}static maybeXL(e,i){return e<=t.XL||i<=t.XL}static maybeXXL(e,i){return e<=t.XXL||i<=t.XXL}static newEmpty(e){return new this(e,!0)}addRule(e){return e.name&&!e.template&&(e.template=this.rule(e.name,e.tags)),this.responsiveRules.push(e),this._maybeApplyRule(e),e}removeRule(e){g(this.responsiveRules,e)}dispose(){this._dp&&this._dp.dispose()}_isUsed(){return this._root._rootContainer.get("themes").indexOf(this)!==-1}_maybeApplyRules(){s(this.responsiveRules,e=>{this._maybeUnapplyRule(e)}),s(this.responsiveRules,e=>{this._maybeApplyRule(e)})}_maybeApplyRule(e){if(e.applied)return;const i=this._root._rootContainer.getPrivate("width"),n=this._root._rootContainer.getPrivate("height");e.relevant.call(e,i,n)&&(e.applied=!0,e.template&&e.settings&&e.template.setAll(e.settings),e.applying&&e.applying.call(e))}_maybeUnapplyRule(e){if(!e.applied)return;const i=this._root._rootContainer.getPrivate("width"),n=this._root._rootContainer.getPrivate("height");e.relevant.call(e,i,n)||(e.applied=!1,e.template&&e.template.removeAll(),e.removing&&e.removing.call(e))}setupDefaultRules(){super.setupDefaultRules();const e=i=>this.addRule(i);e({name:"Chart",relevant:t.widthXXS,settings:{paddingLeft:0,paddingRight:0}}),e({name:"Chart",relevant:t.heightXXS,settings:{paddingTop:0,paddingBottom:0}}),e({name:"Bullet",relevant:t.isXS,settings:{forceHidden:!0}}),e({name:"Legend",relevant:t.isXS,settings:{forceHidden:!0}}),e({name:"HeatLegend",tags:["vertical"],relevant:t.widthXS,settings:{forceHidden:!0}}),e({name:"HeatLegend",tags:["horizontal"],relevant:t.heightXS,settings:{forceHidden:!0}}),e({name:"Label",tags:["heatlegend","start"],relevant:t.maybeXS,settings:{forceHidden:!0}}),e({name:"Label",tags:["heatlegend","end"],relevant:t.maybeXS,settings:{forceHidden:!0}}),e({name:"Button",tags:["resize"],relevant:t.maybeXS,settings:{forceHidden:!0}}),e({name:"AxisRendererX",relevant:t.heightXS,settings:{inside:!0}}),e({name:"AxisRendererY",relevant:t.widthXS,settings:{inside:!0}}),e({name:"AxisRendererXLabel",relevant:t.heightXS,settings:{minPosition:.1,maxPosition:.9}}),e({name:"AxisLabel",tags:["y"],relevant:t.widthXS,settings:{centerY:m,maxPosition:.9}}),e({name:"AxisLabel",tags:["x"],relevant:t.heightXXS,settings:{forceHidden:!0}}),e({name:"AxisLabel",tags:["x","minor"],relevant:t.widthXXL,settings:{forceHidden:!0}}),e({name:"AxisLabel",tags:["y"],relevant:t.widthXXS,settings:{forceHidden:!0}}),e({name:"AxisLabel",tags:["y","minor"],relevant:t.heightXXL,settings:{forceHidden:!0}}),e({name:"AxisTick",tags:["x"],relevant:t.heightXS,settings:{inside:!0,minPosition:.1,maxPosition:.9}}),e({name:"AxisTick",tags:["y"],relevant:t.widthXXS,settings:{inside:!0,minPosition:.1,maxPosition:.9}}),e({name:"Grid",relevant:t.maybeXXS,settings:{forceHidden:!0}}),e({name:"RadialLabel",tags:["radial"],relevant:t.maybeXS,settings:{forceHidden:!0}}),e({name:"RadialLabel",tags:["circular"],relevant:t.maybeS,settings:{inside:!0}}),e({name:"AxisTick",relevant:t.maybeS,settings:{inside:!0}}),e({name:"RadialLabel",tags:["circular"],relevant:t.maybeXS,settings:{forceHidden:!0}}),e({name:"AxisTick",tags:["circular"],relevant:t.maybeXS,settings:{inside:!0}}),e({name:"PieChart",relevant:t.maybeXS,settings:{radius:r(99)}}),e({name:"PieChart",relevant:t.widthM,settings:{radius:r(99)}}),e({name:"RadialLabel",tags:["pie"],relevant:t.maybeXS,settings:{forceHidden:!0}}),e({name:"RadialLabel",tags:["pie"],relevant:t.widthM,settings:{forceHidden:!0}}),e({name:"Tick",tags:["pie"],relevant:t.maybeXS,settings:{forceHidden:!0}}),e({name:"Tick",tags:["pie"],relevant:t.widthM,settings:{forceHidden:!0}}),e({name:"FunnelSeries",relevant:t.widthM,settings:{alignLabels:!1}}),e({name:"Label",tags:["funnel","vertical"],relevant:t.widthL,settings:{forceHidden:!0}}),e({name:"Tick",tags:["funnel","vertical"],relevant:t.widthL,settings:{forceHidden:!0}}),e({name:"Label",tags:["funnel","horizontal"],relevant:t.heightS,settings:{forceHidden:!0}}),e({name:"Tick",tags:["funnel","horizontal"],relevant:t.heightS,settings:{forceHidden:!0}}),e({name:"PyramidSeries",relevant:t.widthM,settings:{alignLabels:!1}}),e({name:"Label",tags:["pyramid","vertical"],relevant:t.widthL,settings:{forceHidden:!0}}),e({name:"Tick",tags:["pyramid","vertical"],relevant:t.widthL,settings:{forceHidden:!0}}),e({name:"Label",tags:["pyramid","horizontal"],relevant:t.heightS,settings:{forceHidden:!0}}),e({name:"Tick",tags:["pyramid","horizontal"],relevant:t.heightS,settings:{forceHidden:!0}}),e({name:"PictorialStackedSeries",relevant:t.widthM,settings:{alignLabels:!1}}),e({name:"Label",tags:["pictorial","vertical"],relevant:t.widthL,settings:{forceHidden:!0}}),e({name:"Tick",tags:["pictorial","vertical"],relevant:t.widthL,settings:{forceHidden:!0}}),e({name:"Label",tags:["pictorial","horizontal"],relevant:t.heightS,settings:{forceHidden:!0}}),e({name:"Tick",tags:["pictorial","horizontal"],relevant:t.heightS,settings:{forceHidden:!0}}),e({name:"Label",tags:["flow","horizontal"],relevant:t.widthS,settings:{forceHidden:!0}}),e({name:"Label",tags:["flow","vertical"],relevant:t.heightS,settings:{forceHidden:!0}}),e({name:"Chord",relevant:t.maybeXS,settings:{radius:r(99)}}),e({name:"Label",tags:["hierarchy","node"],relevant:t.maybeXS,settings:{forceHidden:!0}})}}Object.defineProperty(t,"XXS",{enumerable:!0,configurable:!0,writable:!0,value:100}),Object.defineProperty(t,"XS",{enumerable:!0,configurable:!0,writable:!0,value:200}),Object.defineProperty(t,"S",{enumerable:!0,configurable:!0,writable:!0,value:300}),Object.defineProperty(t,"M",{enumerable:!0,configurable:!0,writable:!0,value:400}),Object.defineProperty(t,"L",{enumerable:!0,configurable:!0,writable:!0,value:600}),Object.defineProperty(t,"XL",{enumerable:!0,configurable:!0,writable:!0,value:800}),Object.defineProperty(t,"XXL",{enumerable:!0,configurable:!0,writable:!0,value:1e3});export{u as l,t as o};
