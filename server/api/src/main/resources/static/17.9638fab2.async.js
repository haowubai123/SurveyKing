(self.webpackChunksurvey_king=self.webpackChunksurvey_king||[]).push([[17],{86468:function(ne,V,t){"use strict";t.d(V,{lq:function(){return W},FQ:function(){return G},fl:function(){return A}});var p=t(43358),b=t(34041),L=t(20228),F=t(11382),M=t(11849),s=t(94657),U=t(93224),N=t(3980),K=t(28253),T=t(67294),x=t(85893),$=["fps","fetcher","width","className","defaultOptions","readonly","value"],W=function(i){var E=i.fps,z=E===void 0?30:E,e=i.fetcher,d=i.width,r=i.className,a=i.defaultOptions,n=i.readonly,l=i.value,o=(0,U.Z)(i,$),f=(0,T.useState)(!1),u=(0,s.Z)(f,2),c=u[0],m=u[1],Z=(0,T.useState)(a||[]),P=(0,s.Z)(Z,2),h=P[0],C=P[1],y=T.useRef(0),I=A(d),g=(0,N.zE)(function(B){m(!0),C([]),y.current+=1;var S=y.current;i.fetcher(B).then(function(v){S===y.current&&(C(v),m(!1))})},z);if(n){var j;return(0,x.jsx)(K.ZP.Item,(0,M.Z)((0,M.Z)({},o),{},{children:(0,x.jsx)("span",{children:(j=h.find(function(B){return B.value===l}))===null||j===void 0?void 0:j.label})}))}return(0,x.jsx)(K.ZP.Item,(0,M.Z)((0,M.Z)({},o),{},{children:(0,x.jsx)(b.Z,(0,M.Z)({showSearch:!0,placeholder:i.placeholder,filterOption:!1,onSearch:g,allowClear:!0,onFocus:function(){return g("")},onClear:function(){return g("")},loading:c,notFoundContent:c?(0,x.jsx)(F.Z,{size:"small"}):null,options:h},I))}))},Y=t(62999),Q=t(54680),H=["width","className","treeData","placeholder","readonly","value"],G=function(i){var E=i.width,z=i.className,e=i.treeData,d=i.placeholder,r=i.readonly,a=i.value,n=(0,U.Z)(i,H),l=A(E);if(r){var o;return(0,x.jsx)(K.ZP.Item,(0,M.Z)((0,M.Z)({},n),{},{children:(0,x.jsx)("span",{children:(o=(0,N.hE)(e,a,"key"))===null||o===void 0?void 0:o.title})}))}return(0,x.jsx)(K.ZP.Item,(0,M.Z)((0,M.Z)({},n),{},{children:(0,x.jsx)(Q.Z,(0,M.Z)({dropdownStyle:{maxHeight:400,overflow:"auto"},treeData:e,placeholder:d,treeDefaultExpandAll:!0},l))}))};function A(D){if(!D)return{};if(typeof D=="number")return{style:{width:D}};if(typeof D=="string")return{className:"pro-field ".concat(typeof D=="string"?"pro-field-".concat(D):"")}}},79871:function(ne,V,t){"use strict";t.d(V,{G:function(){return a},y:function(){return r}});var p=t(57663),b=t(71577),L=t(39428),F=t(3182),M=t(71194),s=t(50146),U=t(34792),N=t(48086),K=t(94657),T=t(83279),x=t(3980),$=t(57119),W=t(49101),Y=t(91186),Q=t(9761),H=t(60780),G=t.n(H),A=t(67294),D=t(11849),i=t(86468),E=t(28253),z=t(80582),e=t(85893),d=(0,z.Pi)(function(n){var l=n.dept,o=n.onClose,f=n.onOk,u=(0,x.m2)(),c=(0,A.useRef)(),m=!!(l!=null&&l.id),Z=u.depts,P=(0,A.useMemo)(function(){return G()(Z.map(function(h){return{value:h.id,title:h.name,key:h.id,parentId:h.parentId}}),{parentProperty:"parentId",customID:"value"})},[Z]);return(0,e.jsxs)(E.aN,{title:m?"\u4FEE\u6539\u7EC4\u7EC7\u673A\u6784":"\u65B0\u5EFA\u7EC4\u7EC7\u673A\u6784",formRef:c,initialValues:(0,D.Z)({},l),visible:!0,drawerProps:{forceRender:!0,destroyOnClose:!0,onClose:function(){o()}},onFinish:function(){var h=(0,F.Z)((0,L.Z)().mark(function C(y){var I;return(0,L.Z)().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,u.saveOrUpdateDept((0,D.Z)((0,D.Z)({},l),y));case 2:I=j.sent,I.success?f():N.default.error("\u4FDD\u5B58\u5931\u8D25");case 4:case"end":return j.stop()}},C)}));return function(C){return h.apply(this,arguments)}}(),children:[(0,e.jsxs)(E.ZP.Group,{children:[(!l||l&&l.id!=="1")&&Z.length>0&&(0,e.jsx)(i.FQ,{name:"parentId",width:"md",treeData:P,label:"\u4E0A\u7EA7\u90E8\u95E8",placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",required:!0,value:l==null?void 0:l.id,rules:[{required:!0,message:"\u4E0A\u7EA7\u90E8\u95E8\u4E0D\u80FD\u4E3A\u7A7A"}]}),(0,e.jsx)(E.V,{name:"code",width:"md",label:"\u7F16\u7801",placeholder:"\u8BF7\u8F93\u5165\u7F16\u7801",required:!0,rules:[{required:!0,message:"\u7F16\u7801\u4E0D\u80FD\u4E3A\u7A7A"}]})]}),(0,e.jsxs)(E.ZP.Group,{children:[(0,e.jsx)(E.V,{name:"name",width:"md",label:"\u5168\u79F0",id:"form-name",placeholder:"\u8BF7\u8F93\u5165\u5168\u79F0",required:!0,rules:[{required:!0,message:"\u5168\u79F0\u4E0D\u80FD\u4E3A\u7A7A"}]}),(0,e.jsx)(E.V,{name:"shortName",width:"md",label:"\u7B80\u79F0",id:"form-name",placeholder:"\u8BF7\u8F93\u5165\u7B80\u79F0",required:!0})]}),(0,e.jsx)(E.ZP.Group,{children:(0,e.jsx)(i.lq,{fps:2,name:"managerId",width:"md",label:"\u8D1F\u8D23\u4EBA",placeholder:"\u8F93\u5165\u59D3\u540D\u68C0\u7D22",value:l==null?void 0:l.managerId,defaultOptions:m?[{label:l.managerName,value:l.managerId}]:void 0,fetcher:function(C){return x.hi.loadUsers({name:C}).then(function(y){return y.list.map(function(I){return{label:I.name,value:I.id}})})}})}),(0,e.jsx)(E.ZP.Group,{children:(0,e.jsx)(E.$J,{name:"remark",width:690,label:"\u5907\u6CE8",id:"form-name",placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"})})]})});function r(n,l){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"id",f=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(!l)return n;for(var u=(0,T.Z)(n);u.length;){var c=u[f?"pop":"shift"]();if(c&&c[o]===l)return[c];c!=null&&c.children&&u.push.apply(u,(0,T.Z)(c.children))}return null}var a=(0,Q.Pi)(function(n){var l=n.selectedDept,o=(0,x.m2)(),f=o.loading,u=(0,A.useRef)(),c=(0,A.useState)({visible:!1}),m=(0,K.Z)(c,2),Z=m[0],P=m[1],h=r(G()(o.depts,{customID:"id",parentProperty:"parentId"}),l),C=[{title:"\u673A\u6784\u540D\u79F0",dataIndex:"name"},{title:"\u673A\u6784\u7B80\u79F0",dataIndex:"shortName",search:!1,width:200},{title:"\u8D1F\u8D23\u4EBA",dataIndex:"managerName",search:!1,width:150},{title:"\u64CD\u4F5C",valueType:"option",render:function(I,g){return[(0,e.jsx)("a",{onClick:function(){return P({visible:!0,current:g})},children:"\u7F16\u8F91"},"edit"),(0,e.jsx)("a",{onClick:function(){if(g.children&&g.children.length>0){N.default.error("\u8BF7\u5148\u5220\u9664\u5B50\u673A\u6784\uFF01");return}s.Z.confirm({title:"\u5220\u9664",content:"\u786E\u5B9A\u5220\u9664\u5F53\u524D\u673A\u6784?",icon:(0,e.jsx)($.Z,{}),onOk:function(){o.deleteDept(g.id)}})},children:"\u5220\u9664"},"delte")]}}];return(0,e.jsxs)("div",{children:[(0,e.jsx)(Y.ZP,{columns:C,actionRef:u,loading:f,bordered:!0,dataSource:h,request:(0,F.Z)((0,L.Z)().mark(function y(){return(0,L.Z)().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.abrupt("return",o.loadDepts());case 1:case"end":return g.stop()}},y)})),columnsState:{persistenceKey:"pro-table-dept",persistenceType:"localStorage"},rowKey:"id",search:!1,scroll:{x:650},pagination:!1,dateFormatter:"string",headerTitle:"\u673A\u6784\u7BA1\u7406",toolBarRender:function(){return[(0,e.jsx)(b.Z,{icon:(0,e.jsx)(W.Z,{}),type:"primary",onClick:function(){P({visible:!0})},children:"\u65B0\u5EFA"},"button")]}}),Z.visible&&(0,e.jsx)(d,{onOk:function(){P({visible:!1})},dept:Z.current,readonly:Z.readonly,onClose:function(){return P({visible:!1})}})]})})},40017:function(ne,V,t){"use strict";t.d(V,{A:function(){return n}});var p=t(58024),b=t(91894),L=t(32157),F=t(32138),M=t(34792),s=t(48086),U=t(49111),N=t(19650),K=t(22385),T=t(94199),x=t(94657),$=t(83279),W=t(3980),Y=t(81162),Q=t(17828),H=t(59879),G=t(91816),A=t(86504),D=t(63258),i=t(9761),E=t(60780),z=t.n(E),e=t(67294),d=t(79871),r=t(85893);function a(l){var o=[];return l.forEach(function(f){f.children&&(o.push(f.key),o.push.apply(o,(0,$.Z)(a(f.children))))}),o}var n=(0,i.Pi)(function(l){var o=(0,W.m2)(),f=o.depts;(0,e.useEffect)(function(){o.loadDepts()},[o]);var u=(0,e.useMemo)(function(){return z()(f.map(function(S){return{title:S.name,key:S.id,parentId:S.parentId}}),{parentProperty:"parentId",customID:"key"})},[f]),c=(0,e.useState)([]),m=(0,x.Z)(c,2),Z=m[0],P=m[1],h=(0,e.useState)(!0),C=(0,x.Z)(h,2),y=C[0],I=C[1],g=(0,e.useMemo)(function(){return a(u)},[u]),j=function(v){P(v),I(!1)},B=function(v){v.length>0?l.onSelect(v[0]):l.onSelect(void 0)};return(0,r.jsx)(b.Z,{title:"\u7EC4\u7EC7\u673A\u6784",extra:(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(N.Z,{children:[Z.length>0?(0,r.jsx)(T.Z,{title:"\u6298\u53E0\u6240\u6709",children:(0,r.jsx)(Y.Z,{style:{cursor:"pointer"},onClick:function(){return P([])}})}):(0,r.jsx)(T.Z,{title:"\u5C55\u5F00\u6240\u6709",children:(0,r.jsx)(Q.Z,{style:{cursor:"pointer"},onClick:function(){return P(g)}})}),(0,r.jsx)(T.Z,{title:"\u5237\u65B0",children:(0,r.jsx)(H.Z,{style:{cursor:"pointer"},onClick:function(){return o.loadDepts()}})})]})}),children:(0,r.jsx)(F.Z,{expandedKeys:Z,onExpand:j,draggable:!0,autoExpandParent:y,onSelect:B,showIcon:!0,treeData:u,onDrop:function(v){if(v.dragNode.pos!=="".concat(v.node.pos,"-0")){if(v.node.parentId!==v.dragNode.parentId&&v.dragNode.parentId!==v.node.key){s.default.error("\u53EA\u80FD\u6539\u53D8\u540C\u7EA7\u673A\u6784\u7684\u987A\u5E8F");return}var _=v.dragNode.parentId,k=(0,d.y)(u,_,"key");if(k){var J,R=(J=k[0].children)===null||J===void 0?void 0:J.map(function(q){return q.key}),w=v.dragNode.key,te=R.indexOf(w);R.splice(te,1,""),R.splice(v.dropPosition,0,w),o.sortDept(R.filter(function(q){return q}))}}},icon:function(v){var _=v.expanded;return _?(0,r.jsx)(G.Z,{}):!v.data.children||v.data.children.length===0?(0,r.jsx)(A.Z,{}):(0,r.jsx)(D.Z,{})}})})})},91894:function(ne,V,t){"use strict";t.d(V,{Z:function(){return z}});var p=t(96156),b=t(22122),L=t(94184),F=t.n(L),M=t(98423),s=t(67294),U=t(53124),N=t(97647),K=t(90860),T=t(60561),x=function(e,d){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&d.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)d.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r},$=function(d){var r=d.prefixCls,a=d.className,n=d.hoverable,l=n===void 0?!0:n,o=x(d,["prefixCls","className","hoverable"]);return s.createElement(U.C,null,function(f){var u=f.getPrefixCls,c=u("card",r),m=F()("".concat(c,"-grid"),a,(0,p.Z)({},"".concat(c,"-grid-hoverable"),l));return s.createElement("div",(0,b.Z)({},o,{className:m}))})},W=$,Y=function(e,d){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&d.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)d.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};function Q(e){var d=e.map(function(r,a){return s.createElement("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(a)},s.createElement("span",null,r))});return d}var H=s.forwardRef(function(e,d){var r,a,n=s.useContext(U.E_),l=n.getPrefixCls,o=n.direction,f=s.useContext(N.Z),u=function(ae){var X;(X=e.onTabChange)===null||X===void 0||X.call(e,ae)},c=function(){var ae;return s.Children.forEach(e.children,function(X){X&&X.type&&X.type===W&&(ae=!0)}),ae},m=e.prefixCls,Z=e.className,P=e.extra,h=e.headStyle,C=h===void 0?{}:h,y=e.bodyStyle,I=y===void 0?{}:y,g=e.title,j=e.loading,B=e.bordered,S=B===void 0?!0:B,v=e.size,_=e.type,k=e.cover,J=e.actions,R=e.tabList,w=e.children,te=e.activeTabKey,q=e.defaultActiveTabKey,ie=e.tabBarExtraContent,ue=e.hoverable,re=e.tabProps,ce=re===void 0?{}:re,ve=Y(e,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),O=l("card",m),fe=s.createElement(K.Z,{loading:!0,active:!0,paragraph:{rows:4},title:!1},w),le=te!==void 0,me=(0,b.Z)((0,b.Z)({},ce),(r={},(0,p.Z)(r,le?"activeKey":"defaultActiveKey",le?te:q),(0,p.Z)(r,"tabBarExtraContent",ie),r)),oe,se=R&&R.length?s.createElement(T.Z,(0,b.Z)({size:"large"},me,{className:"".concat(O,"-head-tabs"),onChange:u}),R.map(function(ee){return s.createElement(T.Z.TabPane,{tab:ee.tab,disabled:ee.disabled,key:ee.key})})):null;(g||P||se)&&(oe=s.createElement("div",{className:"".concat(O,"-head"),style:C},s.createElement("div",{className:"".concat(O,"-head-wrapper")},g&&s.createElement("div",{className:"".concat(O,"-head-title")},g),P&&s.createElement("div",{className:"".concat(O,"-extra")},P)),se));var he=k?s.createElement("div",{className:"".concat(O,"-cover")},k):null,Ee=s.createElement("div",{className:"".concat(O,"-body"),style:I},j?fe:w),ye=J&&J.length?s.createElement("ul",{className:"".concat(O,"-actions")},Q(J)):null,ge=(0,M.Z)(ve,["onTabChange"]),de=v||f,Pe=F()(O,(a={},(0,p.Z)(a,"".concat(O,"-loading"),j),(0,p.Z)(a,"".concat(O,"-bordered"),S),(0,p.Z)(a,"".concat(O,"-hoverable"),ue),(0,p.Z)(a,"".concat(O,"-contain-grid"),c()),(0,p.Z)(a,"".concat(O,"-contain-tabs"),R&&R.length),(0,p.Z)(a,"".concat(O,"-").concat(de),de),(0,p.Z)(a,"".concat(O,"-type-").concat(_),!!_),(0,p.Z)(a,"".concat(O,"-rtl"),o==="rtl"),a),Z);return s.createElement("div",(0,b.Z)({ref:d},ge,{className:Pe}),oe,he,Ee,ye)}),G=H,A=function(e,d){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&d.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)d.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r},D=function(d){return s.createElement(U.C,null,function(r){var a=r.getPrefixCls,n=d.prefixCls,l=d.className,o=d.avatar,f=d.title,u=d.description,c=A(d,["prefixCls","className","avatar","title","description"]),m=a("card",n),Z=F()("".concat(m,"-meta"),l),P=o?s.createElement("div",{className:"".concat(m,"-meta-avatar")},o):null,h=f?s.createElement("div",{className:"".concat(m,"-meta-title")},f):null,C=u?s.createElement("div",{className:"".concat(m,"-meta-description")},u):null,y=h||C?s.createElement("div",{className:"".concat(m,"-meta-detail")},h,C):null;return s.createElement("div",(0,b.Z)({},c,{className:Z}),P,y)})},i=D,E=G;E.Grid=W,E.Meta=i;var z=E}}]);
