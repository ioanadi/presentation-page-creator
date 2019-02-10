(function(t){function e(e){for(var n,a,l=e[0],i=e[1],c=e[2],p=0,m=[];p<l.length;p++)a=l[p],r[a]&&m.push(r[a][0]),r[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);u&&u(e);while(m.length)m.shift()();return s.push.apply(s,c||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],n=!0,l=1;l<o.length;l++){var i=o[l];0!==r[i]&&(n=!1)}n&&(s.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},r={app:0},s=[];function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=i;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"1afe":function(t,e,o){},"1d6d":function(t,e,o){},4116:function(t,e,o){"use strict";var n=o("7bc7"),r=o.n(n);r.a},"4c93":function(t,e,o){"use strict";var n=o("5c95"),r=o.n(n);r.a},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("a026"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},s=[],a={name:"App"},l=a,i=o("2877"),c=Object(i["a"])(l,r,s,!1,null,null,null),u=c.exports,p=o("8c4f"),m=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"hello"},[o("h1",[t._v("Welcome to your Presentation Page Creator!")]),o("h3",{staticClass:"subtitle"},[t._v("\n\t\tPlay with widgets like you do with "),o("span",{domProps:{innerHTML:t._s(t.textToColorfulChars("legos"))}}),t._v("\n\n\t\t!\n\t\t")]),o("div",{staticClass:"show-instructions-button",on:{click:function(e){t.showInstructions=!t.showInstructions}}},[o("p",[t._v("How does it work?")])]),t.showInstructions?o("div",{staticClass:"instructions-container"},[t._m(0),o("p",{staticStyle:{color:"darkblue","font-style":"italic"}},[t._v("2. Press 'Go!' and you'll be redirected to the preview page.")]),o("p",{staticStyle:{color:"turquoise","font-weight":"bold"}},[t._v("3. Drag and drop widgets in you page (and sort them)")]),o("p",{staticStyle:{color:"pink"}},[t._v("4. Add texts or images to you widgets.")]),o("p",{staticStyle:{color:"orange","text-decoration":"underline"}},[t._v("5. Click on each widget and customize it!")])]):t._e(),o("div",[o("h4",{staticClass:"theme-container-title"},[t._v("Choose a color combination and let's get started!")]),o("div",{staticClass:"colors-column"},t._l(t.colorLists,function(e,n){return o("div",{key:n+"allcmp",staticClass:"colors-row-container"},[o("div",{staticClass:"colors-row",class:{selected:t.isColorListSelected(e)||t.hoverSelection==n},on:{mouseover:function(e){t.hoverSelection=n},mouseleave:function(e){t.hoverSelection=-1}}},t._l(e,function(n,r){return o("div",{key:r,on:{click:function(o){t.selectedColorList=e}}},[o("div",{staticClass:"shade",style:{"background-color":n}})])}),0)])}),0)]),o("div",{staticClass:"getstarted",on:{click:function(e){return t.goToCreatePage()}}},[o("p",[t._v("Go!")])])])},d=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",{staticStyle:{color:"red"}},[t._v("1. Choose a color combination "),o("br"),t._v("(or make you own combinations by clicking 'Create color combination'!)")])}],f=[["#E27D60","#85BDCB","#E8A87C","#C38D9E","#41B3A3"],["#8D8741","#659DBD","#DAAD86","#BC986A","#FBEEC1"],["#F8E9A1","#F76C6C","#A8D0E6","#374785","#24305E"],["#E7717D","#C2CAD0","#C2B9B0","#7E685A","#AFD275"],["#5D001E","#E3E2DF","#E3AFBC","#9A1750","#EE4C7C"]],h=["cursive","fantasy","monospace","serif","sans-serif"],y={textToColorfulChars:function(t){for(var e="",o=0;o<t.length;o+=5)e=e+'<span style="color: red">'+t.charAt(o)+'</span><span style="color: darkblue; font-style: italic;">'+t.charAt(o+1)+'</span><span style="color: turquoise; font-weight: bold;">'+t.charAt(o+2)+'</span><span style="color: pink">'+t.charAt(o+3)+'</span><span style="color: orange; text-decoration: underline">'+t.charAt(o+4)+"</span>";return e}},C={name:"Home",data:function(){return{colorLists:f,selectedColorList:null,fontList:h,showInstructions:!1,picked:null,hoverSelection:!1}},methods:{goToCreatePage:function(){this.$router.push({name:"CreatePage",params:{colorList:this.selectedColorList,fontList:this.fontList}})},isColorListSelected:function(t){return this.selectedColorList==t},textToColorfulChars:function(t){return y.textToColorfulChars(t)}}},b=C,g=(o("cd0e"),Object(i["a"])(b,m,d,!1,null,"788e1327",null)),v=g.exports,L=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"demo-container"},[t.showMenu?o("div",{staticClass:"left-menu"},[o("div",{staticClass:"menu-title"},[o("span",[t._v("Drag and drop")]),o("span",{domProps:{innerHTML:t._s(t.textToColorfulChars(" widgets"))}})]),o("div",{staticClass:"icon-container",on:{click:function(e){t.showMenu=!1}}},[o("font-awesome-icon",{attrs:{icon:"chevron-up"}})],1),o("draggable",{staticClass:"menu-list",attrs:{move:t.handleMove,options:{group:{name:"components",pull:"clone",put:!1}}},model:{value:t.allComponents,callback:function(e){t.allComponents=e},expression:"allComponents"}},t._l(t.allComponents,function(e,n){return o("div",{key:n+"allcmp",staticClass:"component-name-container"},[o("p",{staticStyle:{"text-decoration":"underline"}},[t._v(t._s(e.displayName))])])}),0),o("div",{staticClass:"menu-actions"},[t._e(),o("div",{staticClass:"lego-button",on:{click:t.resetToDefault}},[o("p",[o("font-awesome-icon",{attrs:{icon:"undo"}}),t._v(" Restore")],1)]),t._e()])],1):o("div",{staticClass:"left-menu-show"},[o("div",{staticClass:"icon-container",on:{click:function(e){t.showMenu=!0}}},[o("font-awesome-icon",{attrs:{icon:"chevron-down"}})],1)]),o("div",{staticClass:"page-container"},[t.stylerVisible?o("Styler",{attrs:{colorList:t.selectedColorList?t.selectedColorList:"",fontList:t.fontList?t.fontList:"",notRemovable:!0},on:{"update-styled-element":t.updateElementStyle,"close-styler":function(e){t.stylerVisible=0}}}):t._e(),o("div",{style:{"background-color":t.pageContainer.backgroundColor,color:t.pageContainer.color,"font-family":t.pageContainer.font},on:{click:function(e){e.stopPropagation(),t.stylerVisible="true"}}},[o("draggable",{attrs:{options:{group:"components",put:!0}},model:{value:t.componentList,callback:function(e){t.componentList=e},expression:"componentList"}},t._l(t.componentList,function(e,n){return o(e.name,{key:n+"cmp",tag:"component",class:{hoveredContainer:t.hoveredComponentIndex==n},attrs:{stylerVisible:t.selectedComponentIndex==n,colorList:t.selectedColorList,fontList:t.fontList?t.fontList:"",params:e.params},on:{"remove-component":function(e){return t.removeComponent(n)},"update-params":function(e){var o=arguments.length,r=Array(o);while(o--)r[o]=arguments[o];return t.updateParams.apply(void 0,[n].concat(r))}},nativeOn:{mouseenter:function(e){return e.stopPropagation(),t.setHoveredComponent(n)},mouseleave:function(e){return e.stopPropagation(),t.setHoveredComponent(-1)},click:function(e){return e.stopPropagation(),t.selectComponent(n)}}})}),1)],1)],1)])},x=[],S=o("a4bb"),w=o.n(S),k=(o("ac6a"),o("774e")),_=o.n(k),E=o("f499"),T=o.n(E),P=o("1516"),$=o.n(P),V=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"styler"},[o("div",{staticClass:"styler-container"},[o("div",{staticClass:"icon-container",class:{selected:"bg-color"==t.selectedTab},on:{click:function(e){return t.selectTab("bg-color")}}},[o("font-awesome-icon",{attrs:{icon:"palette"}})],1),o("div",{staticClass:"icon-container",class:{selected:"text"==t.selectedTab},on:{click:function(e){return t.selectTab("text")}}},[o("font-awesome-icon",{attrs:{icon:"font"}})],1),t.notRemovable?t._e():o("div",{staticClass:"icon-container",on:{click:function(e){return t.$emit("remove-component")}}},[o("font-awesome-icon",{attrs:{icon:"trash-alt"}})],1),o("div",{staticClass:"icon-container",on:{click:function(e){return t.$emit("close-styler")}}},[o("font-awesome-icon",{attrs:{icon:"times"}})],1)]),"text"==t.selectedTab?o("div",[o("div",{staticClass:"option-list"},t._l(t.colorList,function(e,n){return o("div",{key:n},[o("div",{staticClass:"styler-dot",style:{"background-color":e},on:{click:function(o){t.styledElement.color=e}}})])}),0),o("div",{staticClass:"option-list-col"},t._l(t.fontList,function(e,n){return o("div",{key:"font"+n},[o("div",{staticClass:"font-container",style:{"font-family":e},on:{click:function(o){t.styledElement.font=e}}},[t._v(t._s(e))])])}),0)]):t._e(),"bg-color"==t.selectedTab?o("div",{staticClass:"option-list"},t._l(t.colorList,function(e,n){return o("div",{key:"bgc"+n},[o("div",{staticClass:"styler-dot",style:{"background-color":e},on:{click:function(o){t.styledElement.backgroundColor=e}}})])}),0):t._e()])},M=[],I={name:"Styler",props:["colorList","fontList","notRemovable"],data:function(){return{styledElement:{backgroundColor:null,color:null,font:null},selectedTab:null}},mounted:function(){},beforeDestroy:function(){},watch:{styledElement:{handler:function(){this.$emit("update-styled-element",this.styledElement)},deep:!0}},methods:{selectTab:function(t){this.selectedTab==t?this.selectedTab="":this.selectedTab=t}}},O=I,A=(o("4116"),Object(i["a"])(O,V,M,!1,null,"3c1d13cc",null)),D=A.exports,j=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"simple-header",style:{"background-color":t.params.backgroundColor,color:t.params.color,"font-family":t.params.font}},[t.showStyler?o("Styler",{attrs:{colorList:t.colorList?t.colorList:"",fontList:t.fontList?t.fontList:""},on:{"update-styled-element":t.updateElementStyle,"close-styler":function(e){t.showStyler=0},"remove-component":function(e){return t.$emit("remove-component")}}}):t._e(),o("h1",{staticClass:"editable-content",attrs:{contenteditable:"true"},on:{blur:function(e){t.params.text.h2=e.target.innerText}}},[t._v(t._s(t.params.text.h2))])],1)},W=[],N={name:"SimpleHeader",components:{Styler:D},props:["stylerVisible","colorList","fontList","params"],data:function(){return{showStyler:this.stylerVisible?this.stylerVisible:null}},watch:{stylerVisible:function(t){this.showStyler=t},params:{handler:function(t){this.$emit("update-params",t)},deep:!0}},beforeMount:function(){},methods:{updateElementStyle:function(t){t.backgroundColor&&(this.params.backgroundColor=t.backgroundColor),t.color&&(this.params.color=t.color),t.font&&(this.params.font=t.font)}}},H=N,F=(o("c673"),Object(i["a"])(H,j,W,!1,null,"4a91e892",null)),B=F.exports,J=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"simple-footer",style:{"background-color":t.params.backgroundColor,color:t.params.color,"font-family":t.params.font}},[t.showStyler?o("Styler",{attrs:{colorList:t.colorList?t.colorList:"",fontList:t.fontList?t.fontList:""},on:{"update-styled-element":t.updateElementStyle,"close-styler":function(e){t.showStyler=0},"remove-component":function(e){return t.$emit("remove-component")}}}):t._e(),o("h2",{staticClass:"editable-content",attrs:{contenteditable:"true"},on:{blur:function(e){t.params.text.h2=e.target.innerText}}},[t._v(t._s(t.params.text.h2))]),o("div",[o("p",{staticClass:"editable-content",attrs:{contenteditable:"true"},on:{blur:function(e){t.params.text.p=e.target.innerText}}},[t._v(t._s(t.params.text.p))])])],1)},R=[],U={name:"SimpleFooter",components:{Styler:D},props:["stylerVisible","colorList","fontList","params"],data:function(){return{showStyler:this.stylerVisible?this.stylerVisible:null}},watch:{stylerVisible:function(t){this.showStyler=t},params:{handler:function(t){this.$emit("update-params",t)},deep:!0}},beforeMount:function(){},methods:{updateElementStyle:function(t){t.backgroundColor&&(this.params.backgroundColor=t.backgroundColor),t.color&&(this.params.color=t.color),t.font&&(this.params.font=t.font)}}},q=U,G=(o("92a6"),Object(i["a"])(q,J,R,!1,null,"08a33a75",null)),z=G.exports,K=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"simple-section",style:{"background-color":t.params.backgroundColor,color:t.params.color,"font-family":t.params.font}},[t.showStyler?o("Styler",{attrs:{colorList:t.colorList?t.colorList:"",fontList:t.fontList?t.fontList:""},on:{"update-styled-element":t.updateElementStyle,"close-styler":function(e){t.showStyler=0},"remove-component":function(e){return t.$emit("remove-component")}}}):t._e(),o("h4",{attrs:{contenteditable:"true"},on:{blur:function(e){t.params.text.h4=e.target.innerText}}},[t._v(t._s(t.params.text.h4))])],1)},Q=[],X={name:"SimpleSection",components:{Styler:D},props:["stylerVisible","colorList","fontList","params"],data:function(){return{showStyler:this.stylerVisible?this.stylerVisible:null}},watch:{stylerVisible:function(t){this.showStyler=t},params:{handler:function(t){this.$emit("update-params",t)},deep:!0}},beforeMount:function(){},methods:{updateElementStyle:function(t){t.backgroundColor&&(this.params.backgroundColor=t.backgroundColor),t.color&&(this.params.color=t.color),t.font&&(this.params.font=t.font)}}},Y=X,Z=(o("6dcf"),Object(i["a"])(Y,K,Q,!1,null,"7bbdd762",null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"three-cols",style:{"background-color":t.params.backgroundColor,color:t.params.color,"font-family":t.params.font}},[t.showStyler?o("Styler",{attrs:{colorList:t.colorList?t.colorList:"",fontList:t.fontList?t.fontList:""},on:{"update-styled-element":t.updateElementStyle,"close-styler":function(e){t.showStyler=0},"remove-component":function(e){return t.$emit("remove-component")}}}):t._e(),o("div",{staticClass:"three-cols-container"},[o("div",{staticClass:"col"},[o("p",{staticClass:"editable-content",attrs:{contenteditable:"true"},on:{blur:function(e){t.params.text.p1=e.target.innerText}}},[t._v(t._s(t.params.text.p1))])]),o("div",{staticClass:"col"},[o("p",{staticClass:"editable-content",attrs:{contenteditable:"true"},on:{blur:function(e){t.params.text.p2=e.target.innerText}}},[t._v(t._s(t.params.text.p2))])]),o("div",{staticClass:"col"},[o("p",{staticClass:"editable-content",attrs:{contenteditable:"true"},on:{blur:function(e){t.params.text.p3=e.target.innerText}}},[t._v(t._s(t.params.text.p3))])])])],1)},ot=[],nt={name:"ThreeCols",components:{Styler:D},props:["stylerVisible","colorList","fontList","params"],data:function(){return{showStyler:this.stylerVisible?this.stylerVisible:null}},watch:{stylerVisible:function(t){this.showStyler=t},params:{handler:function(t){this.$emit("update-params",t)},deep:!0}},beforeMount:function(){},methods:{updateElementStyle:function(t){t.backgroundColor&&(this.params.backgroundColor=t.backgroundColor),t.color&&(this.params.color=t.color),t.font&&(this.params.font=t.font)}}},rt=nt,st=(o("4c93"),Object(i["a"])(rt,et,ot,!1,null,"0b7ff80f",null)),at=st.exports,lt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"two-cols-img",style:{"background-color":t.params.backgroundColor,color:t.params.color,"font-family":t.params.font}},[t.showStyler?o("Styler",{attrs:{colorList:t.colorList?t.colorList:"",fontList:t.fontList?t.fontList:""},on:{"update-styled-element":t.updateElementStyle,"close-styler":function(e){t.showStyler=0},"remove-component":function(e){return t.$emit("remove-component")}}}):t._e(),o("h5",{staticClass:"col",attrs:{contenteditable:"true"},on:{blur:function(e){t.params.text.h5=e.target.innerText}}},[t._v(t._s(t.params.text.h5))]),o("h5",{staticClass:"col",attrs:{contenteditable:"true"},on:{blur:function(e){t.params.text.h5bis=e.target.innerText}}},[t._v(t._s(t.params.text.h5bis))]),o("div",{staticClass:"col"},[o("uploader",{attrs:{img:t.params.other.img},on:{"update-imgSrc":t.updateImg}})],1)],1)},it=[],ct=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"uploader"},[o("img",{attrs:{src:t.img}}),o("input",{ref:"uploader",staticClass:"uploader-input",attrs:{type:"file"},on:{change:t.updateImage}}),t.img?t._e():o("div",{staticClass:"icon"},[o("font-awesome-icon",{attrs:{icon:"image"}})],1)])},ut=[],pt={name:"Uploader",props:["img"],data:function(){return{}},methods:{updateImage:function(){var t=this.$refs.uploader.files[0];if(t){var e=URL.createObjectURL(t);this.src=e,this.$emit("update-imgSrc",e)}}}},mt=pt,dt=(o("d045"),Object(i["a"])(mt,ct,ut,!1,null,null,null)),ft=dt.exports,ht={name:"TwoColsWithImg",components:{Styler:D,Uploader:ft},props:["stylerVisible","colorList","fontList","params"],data:function(){return{showStyler:this.stylerVisible?this.stylerVisible:null}},watch:{stylerVisible:function(t){this.showStyler=t},params:{handler:function(t){this.$emit("update-params",t)},deep:!0}},beforeMount:function(){},methods:{updateElementStyle:function(t){t.backgroundColor&&(this.params.backgroundColor=t.backgroundColor),t.color&&(this.params.color=t.color),t.font&&(this.params.font=t.font)},updateImg:function(t){this.params.other.img=t}}},yt=ht,Ct=(o("6a19"),Object(i["a"])(yt,lt,it,!1,null,"6323dd87",null)),bt=Ct.exports,gt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"img-section",style:{"background-color":t.params.backgroundColor,color:t.params.color,"font-family":t.params.font}},[t.showStyler?o("Styler",{attrs:{colorList:t.colorList?t.colorList:"",fontList:t.fontList?t.fontList:""},on:{"update-styled-element":t.updateElementStyle,"close-styler":function(e){t.showStyler=0},"remove-component":function(e){return t.$emit("remove-component")}}}):t._e(),o("div",{staticClass:"col"},[o("uploader",{attrs:{img:t.params.other.img},on:{"update-imgSrc":t.updateImg}})],1)],1)},vt=[],Lt={name:"ImgSection",components:{Styler:D,Uploader:ft},props:["stylerVisible","colorList","fontList","params"],data:function(){return{showStyler:this.stylerVisible?this.stylerVisible:null}},watch:{stylerVisible:function(t){this.showStyler=t},params:{handler:function(t){this.$emit("update-params",t)},deep:!0}},beforeMount:function(){},methods:{updateElementStyle:function(t){t.backgroundColor&&(this.params.backgroundColor=t.backgroundColor),t.color&&(this.params.color=t.color),t.font&&(this.params.font=t.font)},updateImg:function(t){this.params.other.img=t}}},xt=Lt,St=(o("ae4e"),Object(i["a"])(xt,gt,vt,!1,null,"65ddc3f3",null)),wt=St.exports,kt=[{name:"SimpleHeader",displayName:"Page Title",params:{text:{h2:"Write your text here!"},color:null,backgroundColor:null,font:null}},{name:"SimpleSection",displayName:"Text Row",params:{text:{h4:"Write your text here!"},color:null,backgroundColor:null,font:null}},{name:"ThreeCols",displayName:"3 Columns",params:{text:{p1:"Write your text here!",p2:"Write your text here!",p3:"Write your text here!"},color:null,backgroundColor:null,font:null}},{name:"SimpleFooter",displayName:"Footer",params:{text:{h2:"Write your text here!",p:"Write your text here!"},color:null,backgroundColor:null,font:null}},{name:"TwoColsWithImg",displayName:"2 Columns 1 Image",params:{text:{h5:"Write your text here!",h5bis:"Write your text here!"},other:{img:null},color:null,backgroundColor:null,font:null}},{name:"ImgSection",displayName:"Image",params:{text:{},other:{img:null},color:null,backgroundColor:null,font:null}}],_t=[{name:"SimpleHeader",displayName:"Page Title",params:{text:{h2:"Write your text here!"},color:null,backgroundColor:null,font:null}},{name:"TwoColsWithImg",displayName:"2 Columns 1 Image",params:{text:{h5:"Write your text here!",h5bis:"Write your text here!"},other:{img:null},color:null,backgroundColor:null,font:null}},{name:"SimpleFooter",displayName:"Footer",params:{text:{h2:"Write your text here!",p:"Write your text here!"},color:null,backgroundColor:null,font:null}}],Et={name:"CreatePage",components:{Styler:D,draggable:$.a,SimpleHeader:B,SimpleFooter:z,SimpleSection:tt,ThreeCols:at,TwoColsWithImg:bt,ImgSection:wt},data:function(){return{fontList:h,colorLists:f,componentList:JSON.parse(T()(_t)),allComponents:JSON.parse(T()(kt)),selectedComponentIndex:null,hoveredComponentIndex:null,pageEditable:!1,selectedColorList:this.$route.params.colorList,showMenu:!0,previewMode:!1,pageContainer:{color:null,backgroundColor:null,font:null},stylerVisible:null}},beforeMount:function(){this.componentListParams=this.generateComponentListParams()},watch:{componentList:function(t){this.componentListParams=this.generateComponentListParams()}},methods:{generateComponentListParams:function(){return _()(this.componentList,function(t){})},isColorListSelected:function(t){return this.selectedColorList==t},selectComponent:function(t){this.selectedComponentIndex=t},setHoveredComponent:function(t){this.hoveredComponentIndex=t},updateElementStyle:function(t){t.backgroundColor&&(this.pageContainer.backgroundColor=t.backgroundColor),t.color&&(this.pageContainer.color=t.color),t.font&&(this.pageContainer.font=t.font)},handleMove:function(t){t.relatedContext,t.draggedContext;this.allComponents=JSON.parse(T()(kt))},removeComponent:function(t){this.componentList.splice(t,1)},resetToDefault:function(){this.componentList=JSON.parse(T()(_t)),this.allComponents=JSON.parse(T()(kt)),this.selectedColorList=null,this.selectedComponentIndex=-1,this.pageContainer.color=null,this.pageContainer.backgroundColor=null,this.pageContainer.font=null},save:function(){console.log(T()(this.componentList))},updateParams:function(t,e){var o=this.componentList[t].params;o.color=e.color,o.backgroundColor=e.backgroundColor,o.font=e.font,w()(e.text).forEach(function(t){o.text[t]=e.text[t]}),e.other&&w()(e.other).forEach(function(t){o.other[t]=e.other[t]})},textToColorfulChars:function(t){return y.textToColorfulChars(t)},setPreview:function(){this.previewMode=!0,this.showMenu=!1}}},Tt=Et,Pt=(o("878a"),Object(i["a"])(Tt,L,x,!1,null,"b092f070",null)),$t=Pt.exports;n["a"].use(p["a"]);var Vt=new p["a"]({routes:[{path:"/",name:"Home",component:v,props:!0},{path:"/CreatePage",name:"CreatePage",component:$t,props:!0}]}),Mt=o("2f62");n["a"].use(Mt["a"]);var It=new Mt["a"].Store({state:{editMode:!0,componentListParams:[]},mutations:{setEditMode:function(t){t.editMode=!0},setViewMode:function(t){t.editMode=!1},updateComponent:function(t,e){console.log(e)}}}),Ot=o("ecee"),At=o("c074"),Dt=o("ad3d");Ot["c"].add(At["f"],At["a"],At["d"],At["h"],At["i"],At["c"],At["b"],At["g"],At["j"],At["e"]),n["a"].component("font-awesome-icon",Dt["a"]),n["a"].config.productionTip=!1,document.addEventListener("paste",function(t){t.preventDefault();var e=t.clipboardData.getData("text/plain");document.execCommand("insertHTML",!1,e)}),new n["a"]({el:"#app",router:Vt,store:It,components:{App:u},template:"<App/>"})},"5c95":function(t,e,o){},"6a19":function(t,e,o){"use strict";var n=o("cfa1"),r=o.n(n);r.a},"6aad":function(t,e,o){},"6dcf":function(t,e,o){"use strict";var n=o("1d6d"),r=o.n(n);r.a},"7bc7":function(t,e,o){},"878a":function(t,e,o){"use strict";var n=o("1afe"),r=o.n(n);r.a},"92a6":function(t,e,o){"use strict";var n=o("6aad"),r=o.n(n);r.a},"964f":function(t,e,o){},"976f":function(t,e,o){},ae4e:function(t,e,o){"use strict";var n=o("964f"),r=o.n(n);r.a},c673:function(t,e,o){"use strict";var n=o("d7c4"),r=o.n(n);r.a},cd0e:function(t,e,o){"use strict";var n=o("cdc2"),r=o.n(n);r.a},cdc2:function(t,e,o){},cfa1:function(t,e,o){},d045:function(t,e,o){"use strict";var n=o("976f"),r=o.n(n);r.a},d7c4:function(t,e,o){}});
//# sourceMappingURL=app.db96a08e.js.map