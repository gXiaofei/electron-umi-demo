"use strict";(self.webpackChunkibp=self.webpackChunkibp||[]).push([[971],{75640:function(J,P,o){o.r(P),o.d(P,{default:function(){return H}});var j=o(17061),g=o.n(j),R=o(17156),E=o.n(R),G=o(27424),b=o.n(G),K=o(41667),F=o(47933),r=o(1413),Z=o(44925),t=o(85893),c=o(22270),v=o(67294),y=o(42571),h=o(43420),T=["fieldProps","options","radioType","layout","proFieldProps","valueEnum"],S=v.forwardRef(function(e,s){var u=e.fieldProps,n=e.options,p=e.radioType,d=e.layout,a=e.proFieldProps,f=e.valueEnum,i=(0,Z.Z)(e,T);return(0,t.jsx)(h.Z,(0,r.Z)((0,r.Z)({valueType:p==="button"?"radioButton":"radio",ref:s,valueEnum:(0,c.h)(f,void 0)},i),{},{fieldProps:(0,r.Z)({options:n,layout:d},u),proFieldProps:a,filedConfig:{customLightMode:!0}}))}),A=v.forwardRef(function(e,s){var u=e.fieldProps,n=e.children;return(0,t.jsx)(F.ZP,(0,r.Z)((0,r.Z)({},u),{},{ref:s,children:n}))}),V=(0,y.G)(A,{valuePropName:"checked",ignoreWidth:!0}),m=V;m.Group=S,m.Button=F.ZP.Button,m.displayName="ProFormComponent";var M=m,O=o(98626),B=o(9676),N=["options","fieldProps","proFieldProps","valueEnum"],W=v.forwardRef(function(e,s){var u=e.options,n=e.fieldProps,p=e.proFieldProps,d=e.valueEnum,a=(0,Z.Z)(e,N);return(0,t.jsx)(h.Z,(0,r.Z)({ref:s,valueType:"checkbox",valueEnum:(0,c.h)(d,void 0),fieldProps:(0,r.Z)({options:u},n),lightProps:(0,r.Z)({labelFormatter:function(){return(0,t.jsx)(h.Z,(0,r.Z)({ref:s,valueType:"checkbox",mode:"read",valueEnum:(0,c.h)(d,void 0),filedConfig:{customLightMode:!0},fieldProps:(0,r.Z)({options:u},n),proFieldProps:p},a))}},a.lightProps),proFieldProps:p},a))}),U=v.forwardRef(function(e,s){var u=e.fieldProps,n=e.children;return(0,t.jsx)(B.Z,(0,r.Z)((0,r.Z)({ref:s},u),{},{children:n}))}),k=(0,y.G)(U,{valuePropName:"checked"}),C=k;C.Group=W;var x=C,I=o(62496),L=o(49409),$=o(95400),z={},D=function(){var s=(0,$.Z)(),u=b()(s,1),n=u[0];(0,v.useEffect)(function(){function d(){return a.apply(this,arguments)}function a(){return a=E()(g()().mark(function f(){var i;return g()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,window.electron.ipcRenderer.invoke("getStore");case 3:i=l.sent,console.log(12,i),n.setFieldsValue({darkMode:i.darkMode,autoUpdater:i.autoUpdater,notice:i.notice}),l.next=11;break;case 8:l.prev=8,l.t0=l.catch(0),console.error("setting.tsx error",l.t0);case 11:case"end":return l.stop()}},f,null,[[0,8]])})),a.apply(this,arguments)}d()},[]);var p=function(a,f){for(var i in a)window.electron.ipcRenderer.invoke("setStore",[i,a[i]])};return(0,t.jsx)(I.ZP,{className:z.container,ghost:!0,children:(0,t.jsxs)(L.Z,{form:n,labelCol:{span:4,offset:1},labelAlign:"left",colon:!1,onValuesChange:p,children:[(0,t.jsx)(M.Group,{name:"darkMode",label:"\u5916\u89C2",options:[{label:"\u6D45\u8272",value:"light"},{label:"\u6DF1\u8272",value:"dark"},{label:"\u8DDF\u968F\u7CFB\u7EDF",value:"system"}]}),(0,t.jsx)(x.Group,{name:"autoUpdater",label:"\u81EA\u52A8\u66F4\u65B0",options:[{label:"\u81EA\u52A8\u66F4\u65B0\u81F3\u6700\u65B0\u7248\u672C",value:!0}]}),(0,t.jsx)(x.Group,{name:"notice",label:"\u901A\u77E5",options:[{label:"\u4F20\u8F93\u5B8C\u6210",value:"transmission"},{label:"\u7CFB\u7EDF\u6D88\u606F",value:"system"}]})]})})},H=D}}]);
