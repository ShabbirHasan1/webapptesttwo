(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c7dbb4c"],{1079:function(e,t,a){"use strict";var n=a("541c");t["a"]=n["a"]},"1cef":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-row",{staticClass:"match-height"},[a("b-col",{attrs:{md:"6"}},[a("sidebar-basic")],1),a("b-col",{attrs:{md:"6"}},[a("sidebar-placement")],1),a("b-col",{attrs:{md:"6"}},[a("sidebar-variant")],1),a("b-col",{attrs:{md:"6"}},[a("sidebar-header")],1),a("b-col",{attrs:{md:"6"}},[a("sidebar-footer")],1),a("b-col",{attrs:{md:"6"}},[a("sidebar-without-backdrop")],1)],1)},r=[],i=a("a15b7"),o=a("b28b"),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card-code",{attrs:{title:"Sidebar Basic"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeBasic)+" ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("BootstrapVue's custom ")]),a("code",[e._v("<b-sidebar>")]),a("span",[e._v(" component is a fixed-position toggleable slide out box, which can be used for navigation, menus, details, etc.")])]),a("div",[a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}},{name:"b-toggle",rawName:"v-b-toggle.sidebar-1",modifiers:{"sidebar-1":!0}}],attrs:{variant:"outline-primary"}},[e._v(" Toggle Sidebar ")]),a("b-sidebar",{attrs:{id:"sidebar-1",shadow:"","bg-variant":"white",backdrop:""}},[a("sidebar-content")],1)],1)],1)},s=[],b=a("1079"),l=a("1947"),c=a("baa4"),p=a("d6e4"),u=a("39ba"),v=a("e009"),g="\n<template>\n  <div>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      v-b-toggle.sidebar-1\n      variant=\"outline-primary\"\n    >\n      Toggle Sidebar\n    </b-button>\n    <b-sidebar\n      id=\"sidebar-1\"\n      shadow\n      bg-variant=\"white\"\n      backdrop\n    >\n      <sidebar-content />\n    </b-sidebar>\n  </div>\n</template>\n\n<script>\nimport { BButton, BSidebar, VBToggle} from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\nimport SidebarContent from './SidebarContent.vue'\n\nexport default {\n  components: {\n    BButton,\n    BSidebar,\n    BImg,\n    SidebarContent\n  },\n  directives: {\n    'b-toggle': VBToggle,\n    Ripple,\n  },\n}\n<\/script>\n",m='\n<template>\n  <div>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      v-b-toggle.sidebar-no-header\n      variant="outline-primary"\n    >\n      Toggle Sidebar\n    </b-button>\n\n    <b-sidebar\n      id="sidebar-no-header"\n      aria-labelledby="sidebar-no-header-title"\n      no-header\n      bg-variant="white"\n      shadow\n      backdrop\n    >\n      <sidebar-content class="pt-2" />\n    </b-sidebar>\n  </div>\n</template>\n\n<script>\nimport {BButton, BSidebar, VBToggle} from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\nimport SidebarContent from \'./SidebarContent.vue\'\n\nexport default {\n  components: {\n    BButton,\n    BSidebar,\n    SidebarContent,\n  },\n  directives: {\n    \'b-toggle\': VBToggle,\n     Ripple,\n  },\n}\n<\/script>\n',f="\n<template>\n  <div>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      v-b-toggle.sidebar-right\n      variant=\"outline-primary\"\n    >\n      Toggle Sidebar\n    </b-button>\n    <b-sidebar\n      id=\"sidebar-right\"\n      bg-variant=\"white\"\n      right\n      backdrop\n      shadow\n    >\n      <sidebar-content />\n    </b-sidebar>\n  </div>\n</template>\n\n<script>\nimport {BButton, BSidebar, VBToggle} from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\nimport SidebarContent from './SidebarContent.vue'\n\nexport default {\n  components: {\n    BButton,\n    BSidebar,\n    SidebarContent,\n  },\n  directives: {\n    'b-toggle': VBToggle,\n  },\n}\n<\/script>\n",h="\n<template>\n  <div>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      v-b-toggle.sidebar-variant\n      variant=\"outline-primary\"\n    >\n      Toggle Sidebar\n    </b-button>\n\n    <b-sidebar\n      id=\"sidebar-variant\"\n      bg-variant=\"dark\"\n      text-variant=\"light\"\n      shadow\n      backdrop\n    >\n      <sidebar-content />\n    </b-sidebar>\n  </div>\n</template>\n\n<script>\nimport {BButton, BSidebar, VBToggle} from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\nimport SidebarContent from './SidebarContent.vue'\n\nexport default {\n  components: {\n    BButton,\n    BSidebar,\n    SidebarContent,\n  },\n  directives: {\n    'b-toggle': VBToggle,\n    Ripple,\n  },\n}\n<\/script>\n",B="\n<template>\n  <div>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      v-b-toggle.sidebar-backdrop\n      variant=\"outline-primary\"\n    >\n      Toggle Sidebar Without Backdrop\n    </b-button>\n\n    <b-sidebar\n      id=\"sidebar-backdrop\"\n      bg-variant=\"white\"\n      shadow\n    >\n      <sidebar-content />\n    </b-sidebar>\n  </div>\n</template>\n\n<script>\nimport {BButton, BSidebar, VBToggle} from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\nimport { codeBackdrop } from './code'\nimport SidebarContent from './SidebarContent.vue'\n\nexport default {\n  components: {\n    BButton,\n    BCardText,\n    BSidebar,\n    SidebarContent,\n  },\n  directives: {\n    'b-toggle': VBToggle,\n    Ripple,\n  },\n}\n<\/script>\n",_="\n<template>\n  <div>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      v-b-toggle.sidebar-footer\n      variant=\"outline-primary\"\n    >\n      Toggle Sidebar\n    </b-button>\n    <b-sidebar\n      id=\"sidebar-footer\"\n      aria-label=\"Sidebar with custom footer\"\n      shadow\n      backdrop\n      bg-variant=\"white\"\n    >\n      <sidebar-content />\n      <template #footer>\n        <sidebar-content-footer />\n      </template>\n    </b-sidebar>\n  </div>\n</template>\n\n<script>\nimport { BButton, BSidebar, VBToggle} from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\nimport SidebarContent from './SidebarContent.vue'\nimport SidebarContentFooter from './SidebarContentFooter.vue'\n\nexport default {\n  components: {\n    BButton,\n    BSidebar,\n    BCardText,\n    SidebarContent,\n    SidebarContentFooter,\n  },\n  directives: {\n    'b-toggle': VBToggle,\n    Ripple,\n  },\n}\n<\/script>\n",S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"text-center"},[n("b-avatar",{staticClass:"mr-1",attrs:{size:"72px",src:a("ed5f")}}),n("b-card-text",{staticClass:"mt-2 h4 color-inherit text-reset"},[e._v(" Black Widow ")])],1),n("b-list-group",{staticClass:"mt-3 rounded-0"},e._l(e.sidebarItems,(function(t){return n("b-list-group-item",{key:t.title,staticClass:"bg-transparent"},[n("feather-icon",{staticClass:"align-text-bottom",attrs:{icon:t.icon}}),n("span",{staticClass:"ml-1",domProps:{textContent:e._s(t.title)}})],1)})),1)],1)},C=[],x=a("e8a3"),w=a("3135"),y=a("d247"),k={components:{BAvatar:x["a"],BListGroup:w["a"],BListGroupItem:y["a"],BCardText:p["a"]},data:function(){return{sidebarItems:[{title:"Dashboard",icon:"GridIcon"},{title:"Analytics",icon:"ActivityIcon"},{title:"History",icon:"RefreshCwIcon"},{title:"Configuration",icon:"SettingsIcon"},{title:"Profile",icon:"UserIcon"}]}}},T=k,R=a("2877"),V=Object(R["a"])(T,S,C,!1,null,null,null),$=V.exports,I={components:{BCardCode:b["a"],BButton:l["a"],BSidebar:c["a"],SidebarContent:$,BCardText:p["a"]},directives:{"b-toggle":u["a"],Ripple:v["a"]},data:function(){return{codeBasic:g}}},N=I,O=Object(R["a"])(N,d,s,!1,null,null,null),j=O.exports,E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card-code",{attrs:{title:"Sidebar Placement"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codePlacement)+" ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("By default the sidebar will be placed on the left side fo the viewport. Set the ")]),a("code",[e._v("right")]),a("span",[e._v(" prop to ")]),a("code",[e._v("true")]),a("span",[e._v(" to have the sidebar appear on the right side of the viewport.")])]),a("div",[a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}},{name:"b-toggle",rawName:"v-b-toggle.sidebar-right",modifiers:{"sidebar-right":!0}}],attrs:{variant:"outline-primary"}},[e._v(" Toggle Sidebar ")]),a("b-sidebar",{attrs:{id:"sidebar-right","bg-variant":"white",right:"",backdrop:"",shadow:""}},[a("sidebar-content")],1)],1)],1)},F=[],A={components:{BCardCode:b["a"],BButton:l["a"],BSidebar:c["a"],SidebarContent:$,BCardText:p["a"]},directives:{"b-toggle":u["a"],Ripple:v["a"]},data:function(){return{codePlacement:f}}},L=A,P=Object(R["a"])(L,E,F,!1,null,null,null),D=P.exports,H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card-code",{attrs:{title:"Sidebar Variant"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeVariant)+" ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("Use the props ")]),a("code",[e._v("bg-variant")]),a("span",[e._v(" and ")]),a("code",[e._v("text-variant")]),a("span",[e._v(" to control the theme color variant of the background and text, respectively. Alternatively, you can apply styles or classes to specify the background and text colors. ")])]),a("div",[a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}},{name:"b-toggle",rawName:"v-b-toggle.sidebar-variant",modifiers:{"sidebar-variant":!0}}],attrs:{variant:"outline-primary"}},[e._v(" Toggle Sidebar ")]),a("b-sidebar",{attrs:{id:"sidebar-variant","bg-variant":"dark","text-variant":"light",shadow:"",backdrop:""}},[a("sidebar-content")],1)],1)],1)},J=[],W={components:{BCardCode:b["a"],BButton:l["a"],BSidebar:c["a"],SidebarContent:$,BCardText:p["a"]},directives:{"b-toggle":u["a"],Ripple:v["a"]},data:function(){return{codeVariant:h}}},G=W,M=Object(R["a"])(G,H,J,!1,null,null,null),U=M.exports,Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card-code",{attrs:{title:"Hiding the default header"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeHeader)+" ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("You can disable the default header (including the close button) via the ")]),a("code",[e._v("no-header")]),a("span",[e._v(" prop. Note that you will need to provide a method of closing the sidebar. The ")]),a("code",[e._v("default")]),a("span",[e._v(" slot is scoped, which includes a")]),a("code",[e._v("hide()")]),a("span",[e._v(" method that can be used to close the sidebar.")])]),a("div",[a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}},{name:"b-toggle",rawName:"v-b-toggle.sidebar-no-header",modifiers:{"sidebar-no-header":!0}}],attrs:{variant:"outline-primary"}},[e._v(" Toggle Sidebar ")]),a("b-sidebar",{attrs:{id:"sidebar-no-header","aria-labelledby":"sidebar-no-header-title","no-header":"","bg-variant":"white",shadow:"",backdrop:""}},[a("sidebar-content",{staticClass:"pt-2"})],1)],1)],1)},z=[],q={components:{BCardCode:b["a"],BButton:l["a"],BSidebar:c["a"],SidebarContent:$,BCardText:p["a"]},directives:{"b-toggle":u["a"],Ripple:v["a"]},data:function(){return{codeHeader:m}}},K=q,Q=Object(R["a"])(K,Y,z,!1,null,null,null),X=Q.exports,Z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card-code",{attrs:{title:"Footer"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeFooter)+" ")]},proxy:!0}])},[a("b-card-text",[a("code",[e._v("<b-sidebar>")]),a("span",[e._v(" provides a ")]),a("code",[e._v("footer")]),a("span",[e._v(" slot (optionally scoped), to allow you to provide content that appears at the bottom of the sidebar. The ")]),a("code",[e._v("footer")]),a("span",[e._v(" slot is scoped, which includes a")]),e._v(" "),a("code",[e._v("hide()")]),a("span",[e._v(" method that can be used to close the sidebar.")])]),a("div",[a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}},{name:"b-toggle",rawName:"v-b-toggle.sidebar-footer",modifiers:{"sidebar-footer":!0}}],attrs:{variant:"outline-primary"}},[e._v(" Toggle Sidebar ")]),a("b-sidebar",{attrs:{id:"sidebar-footer","aria-label":"Sidebar with custom footer",shadow:"",backdrop:"","bg-variant":"white"},scopedSlots:e._u([{key:"footer",fn:function(){return[a("sidebar-content-footer")]},proxy:!0}])},[a("sidebar-content")],1)],1)],1)},ee=[],te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"p-2 border-top text-danger cursor-pointer"},[a("feather-icon",{attrs:{icon:"LogOutIcon"}}),a("span",{staticClass:"ml-1"},[e._v("Logout")])],1)},ae=[],ne={},re=Object(R["a"])(ne,te,ae,!1,null,null,null),ie=re.exports,oe={components:{BCardCode:b["a"],BButton:l["a"],BSidebar:c["a"],BCardText:p["a"],SidebarContent:$,SidebarContentFooter:ie},directives:{"b-toggle":u["a"],Ripple:v["a"]},data:function(){return{codeFooter:_}}},de=oe,se=Object(R["a"])(de,Z,ee,!1,null,null,null),be=se.exports,le=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card-code",{attrs:{title:"Backdrop"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeBackdrop)+" ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("Sidebar component don't have backdrop by default. You can add it using ")]),a("code",[e._v("backdrop")]),a("span",[e._v(" prop. Below demo shows sidebar "),a("strong",[e._v("without")]),e._v(" backdrop")])]),a("div",[a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}},{name:"b-toggle",rawName:"v-b-toggle.sidebar-backdrop",modifiers:{"sidebar-backdrop":!0}}],attrs:{variant:"outline-primary"}},[e._v(" Toggle Sidebar Without Backdrop ")]),a("b-sidebar",{attrs:{id:"sidebar-backdrop","bg-variant":"white",shadow:""}},[a("sidebar-content")],1)],1)],1)},ce=[],pe={components:{BCardCode:b["a"],BButton:l["a"],BCardText:p["a"],BSidebar:c["a"],SidebarContent:$},directives:{"b-toggle":u["a"],Ripple:v["a"]},data:function(){return{codeBackdrop:B}}},ue=pe,ve=Object(R["a"])(ue,le,ce,!1,null,null,null),ge=ve.exports,me={components:{BRow:i["a"],BCol:o["a"],SidebarBasic:j,SidebarPlacement:D,SidebarVariant:U,SidebarHeader:X,SidebarFooter:be,SidebarWithoutBackdrop:ge}},fe=me,he=Object(R["a"])(fe,n,r,!1,null,null,null);t["default"]=he.exports},"541c":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card",e._g(e._b({attrs:{"no-body":""}},"b-card",e.cardAttrs,!1),e.$listeners),[a("div",{staticClass:"card-header"},[a("div",[a("b-card-title",[e._v(e._s(e.$attrs.title))]),e.$attrs["sub-title"]?a("b-card-sub-title",[e._v(" "+e._s(e.$attrs["sub-title"])+" ")]):e._e()],1),a("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":e.code_visible?"false":"true","aria-controls":e.parentID},on:{click:function(t){e.code_visible=!e.code_visible}}})]),void 0!==e.$attrs["no-body"]?[e._t("default"),a("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(t){e.code_visible=t},expression:"code_visible"}},[a("b-card-body",[a("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],1)]:a("b-card-body",[e._t("default"),a("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(t){e.code_visible=t},expression:"code_visible"}},[a("div",{staticClass:"p-1"}),a("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],2)],2)},r=[],i=(a("e9c4"),a("205f")),o=a("4968"),d=a("ba06"),s=a("6197"),b=a("5843"),l=(a("c197"),a("84bf"),a("8d51")),c=a.n(l),p={components:{BCard:i["a"],BCardTitle:o["a"],BCardSubTitle:d["a"],BCardBody:s["a"],BCollapse:b["a"],Prism:c.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var e=JSON.parse(JSON.stringify(this.$attrs));return delete e.title,delete e["sub-title"],e}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},u=p,v=(a("8d54"),a("2877")),g=Object(v["a"])(u,n,r,!1,null,"aa799a9e",null);t["a"]=g.exports},"8d54":function(e,t,a){"use strict";a("ecda")},ecda:function(e,t,a){}}]);