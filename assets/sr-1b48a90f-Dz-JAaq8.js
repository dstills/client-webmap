import{d as n}from"./calcite-input-time-picker_2.entry-Cw0ifRA3.js";import"./index-D2dWKXoe.js";import"./interactive-583e13d7-DfHC3qcQ.js";import"./locale-b835bf72-0NfHq2VP.js";import"./focusTrapComponent-623f3c57-DxezyUAL.js";import"./form-034629b4-ZqEUAyxK.js";import"./dom-bef18e4a-C29mvo6M.js";import"./guid-617f6e1b-DQtJl1SZ.js";import"./key-3f1e3da4-DU8kuSDQ.js";import"./label-8c0f9304-BTw_rrtV.js";import"./component-b0a9a44a-WqEOSVCt.js";import"./loadable-6056dcbc-DO2oKssx.js";import"./math-a5520ff4-BEjMmqe5.js";import"./t9n-91f18f76-BKtQip7d.js";import"./openCloseComponent-f04579aa-B1AysqnL.js";import"./Validation-cf2abfd2-DfX8wrbZ.js";import"./browser-1baf23f7-zzj4YD6P.js";import"./observers-ff65e337--1jEkyko.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.7.1
 */var e={words:{m:["jedan minut","jednog minuta"],mm:["%d minut","%d minuta","%d minuta"],h:["jedan sat","jednog sata"],hh:["%d sat","%d sata","%d sati"],d:["jedan dan","jednog dana"],dd:["%d dan","%d dana","%d dana"],M:["jedan mesec","jednog meseca"],MM:["%d mesec","%d meseca","%d meseci"],y:["jednu godinu","jedne godine"],yy:["%d godinu","%d godine","%d godina"]},correctGrammarCase:function(r,t){return r%10>=1&&r%10<=4&&(r%100<10||r%100>=20)?r%10===1?t[0]:t[1]:t[2]},relativeTimeFormatter:function(r,t,a,d){var m=e.words[a];if(a.length===1)return a==="y"&&t?"jedna godina":d||t?m[0]:m[1];var o=e.correctGrammarCase(r,m);return a==="yy"&&t&&o==="%d godinu"?r+" godina":o.replace("%d",r)}},_={name:"sr",weekdays:"Nedelja_Ponedeljak_Utorak_Sreda_Četvrtak_Petak_Subota".split("_"),weekdaysShort:"Ned._Pon._Uto._Sre._Čet._Pet._Sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),months:"Januar_Februar_Mart_April_Maj_Jun_Jul_Avgust_Septembar_Oktobar_Novembar_Decembar".split("_"),monthsShort:"Jan._Feb._Mar._Apr._Maj_Jun_Jul_Avg._Sep._Okt._Nov._Dec.".split("_"),weekStart:1,relativeTime:{future:"za %s",past:"pre %s",s:"nekoliko sekundi",m:e.relativeTimeFormatter,mm:e.relativeTimeFormatter,h:e.relativeTimeFormatter,hh:e.relativeTimeFormatter,d:e.relativeTimeFormatter,dd:e.relativeTimeFormatter,M:e.relativeTimeFormatter,MM:e.relativeTimeFormatter,y:e.relativeTimeFormatter,yy:e.relativeTimeFormatter},ordinal:function(r){return r+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"D. M. YYYY.",LL:"D. MMMM YYYY.",LLL:"D. MMMM YYYY. H:mm",LLLL:"dddd, D. MMMM YYYY. H:mm"}};n.locale(_,null,!0);export{_ as default};