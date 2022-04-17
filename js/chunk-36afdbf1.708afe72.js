(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36afdbf1"],{1079:function(t,o,n){"use strict";var i=n("541c");o["a"]=i["a"]},"223c":function(t,o,n){"use strict";var i=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"toastification"},[n("div",{staticClass:"d-flex align-items-start"},[n("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:t.variant,size:"1.8rem"}},[n("feather-icon",{attrs:{icon:t.icon,size:"15"}})],1),n("div",{staticClass:"d-flex flex-grow-1"},[n("div",[t.title?n("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:"text-"+t.variant,domProps:{textContent:t._s(t.title)}}):t._e(),t.text?n("small",{staticClass:"d-inline-block text-body",domProps:{textContent:t._s(t.text)}}):t._e()]),n("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto ",on:{click:function(o){return t.$emit("close-toast")}}},[t.hideClose?t._e():n("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])},e=[],r=n("e8a3"),a={components:{BAvatar:r["a"]},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},l=a,p=(n("b549"),n("2877")),s=Object(p["a"])(l,i,e,!1,null,"55dd3057",null);o["a"]=s.exports},"226e":function(t,o,n){"use strict";n.r(o);var i=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("tooltip-position"),n("tooltip-variant"),n("tooltip-trigger"),n("tooltip-option"),n("tooltip-method"),n("tooltip-event")],1)],1)},e=[],r=n("a15b7"),a=n("b28b"),l=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("b-card-code",{attrs:{title:"Tooltip Positions"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codePosition)+" ")]},proxy:!0}])},[n("b-card-text",{staticClass:"mb-0"},[n("span",[t._v("Twelve options are available for positioning: ")]),n("code",[t._v("top, topleft, topright, right, righttop, rightbottom, bottom, bottomleft, bottomright, left, lefttop,")]),n("span",[t._v(" and ")]),n("code",[t._v("leftbottom")]),n("span",[t._v(" aligned. The default position is top.")])]),n("div",{staticClass:"demo-inline-spacing"},[n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}},{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"Tooltip on top!",expression:"'Tooltip on top!'",modifiers:{hover:!0,top:!0}}],attrs:{variant:"outline-primary"}},[t._v(" Tooltip on top ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}},{name:"b-tooltip",rawName:"v-b-tooltip.hover.right",value:"Tooltip on right!",expression:"'Tooltip on right!'",modifiers:{hover:!0,right:!0}}],attrs:{variant:"outline-primary"}},[t._v(" Tooltip on right ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}},{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",value:"Tooltip on left!",expression:"'Tooltip on left!'",modifiers:{hover:!0,left:!0}}],attrs:{variant:"outline-primary"}},[t._v(" Tooltip on left ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}},{name:"b-tooltip",rawName:"v-b-tooltip.hover.bottom",value:"Tooltip on bottom!",expression:"'Tooltip on bottom!'",modifiers:{hover:!0,bottom:!0}}],attrs:{variant:"outline-primary"}},[t._v(" Tooltip on bottom ")])],1)],1)},p=[],s=n("1079"),b=n("1947"),v=n("d6e4"),c=n("2616"),d=n("e009"),u='\n<template>\n  <div class="demo-inline-spacing">\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      v-b-tooltip.hover.top="\'Tooltip on top!\'"\n      variant="outline-primary"\n    >\n      Tooltip on top\n    </b-button>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      v-b-tooltip.hover.right="\'Tooltip on right!\'"\n      variant="outline-primary"\n    >\n      Tooltip on right\n    </b-button>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      v-b-tooltip.hover.left="\'Tooltip on left!\'"\n      variant="outline-primary"\n    >\n      Tooltip on left\n    </b-button>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      v-b-tooltip.hover.bottom="\'Tooltip on bottom!\'"\n      variant="outline-primary"\n    >\n      Tooltip on bottom\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport {BButton, VBTooltip,} from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BCardCode,\n    BButton,\n  },\n  directives: {\n    \'b-tooltip\': VBTooltip,\n    Ripple,\n  },\n}\n<\/script>\n',m='\n<template>\n  <div class="demo-inline-spacing">\n\n    \x3c!-- default --\x3e\n    <b-button\n      v-b-tooltip.hover\n      title="Default variant"\n      variant="gradient-primary"\n    >\n      Default\n    </b-button>\n\n    \x3c!-- primary --\x3e\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      v-b-tooltip.hover.v-primary\n      title="Primary variant"\n      variant="outline-primary"\n    >\n      Primary\n    </b-button>\n\n    \x3c!-- secondary --\x3e\n    <b-button\n      v-ripple.400="\'rgba(186, 191, 199, 0.15)\'"\n      v-b-tooltip.hover.v-secondary\n      title="Secondary variant"\n      variant="outline-secondary"\n    >\n      Secondary\n    </b-button>\n\n    \x3c!-- success --\x3e\n    <b-button\n      v-ripple.400="\'rgba(40, 199, 111, 0.15)\'"\n      v-b-tooltip.hover.v-success\n      title="Success variant"\n      variant="outline-success"\n    >\n      Success\n    </b-button>\n\n    \x3c!-- danger --\x3e\n    <b-button\n      v-ripple.400="\'rgba(234, 84, 85, 0.15)\'"\n      v-b-tooltip.hover.v-danger\n      title="Danger variant"\n      variant="outline-danger"\n    >\n      Danger\n    </b-button>\n\n    \x3c!-- warning --\x3e\n    <b-button\n      v-ripple.400="\'rgba(255, 159, 67, 0.15)\'"\n      v-b-tooltip.hover.v-warning\n      title="Warning variant"\n      variant="outline-warning"\n    >\n      Warning\n    </b-button>\n\n    \x3c!-- info --\x3e\n    <b-button\n      v-ripple.400="\'rgba(0, 207, 232, 0.15)\'"\n      v-b-tooltip.hover.v-info\n      title="Info variant"\n      variant="outline-info"\n    >\n      Info\n    </b-button>\n\n    \x3c!-- dark --\x3e\n    <b-button\n      v-ripple.400="\'rgba(30, 30, 30, 0.15)\'"\n      v-b-tooltip.hover.v-dark\n      title="Dark variant"\n      variant="outline-dark"\n    >\n      Dark\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport {VBTooltip, BButton} from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BCardCode,\n    BButton,\n  },\n  directives: {\n    \'b-tooltip\': VBTooltip,\n    Ripple,\n  },\n}\n<\/script>\n',g='\n<template>\n  <div class="demo-inline-spacing">\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      v-b-tooltip.click.v-primary\n      title="On Cllick Trigger"\n      variant="outline-primary"\n    >\n      On Cllick Trigger\n    </b-button>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      v-b-tooltip.hover.v-primary\n      title="On Hover Trigger"\n      variant="outline-primary"\n    >\n      On Hover Trigger\n    </b-button>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      v-b-tooltip.hover.focus.v-primary\n      title="Hover + Focus Trigger"\n      variant="outline-primary"\n    >\n      Hover + Focus Trigger\n    </b-button>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      v-b-tooltip.focus.v-primary\n      title="On Focus Trigger"\n      variant="outline-primary"\n    >\n      On Focus Trigger\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport {\n  VBTooltip, BButton,\n} from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BButton,\n  },\n  directives: {\n    \'b-tooltip\': VBTooltip,\n    Ripple,\n  },\n}\n<\/script>\n',f='\n<template>\n  <div class="demo-inline-spacing">\n    <b-button\n      id="tooltip-target-1"\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n    >\n      No animation\n    </b-button>\n    <b-tooltip\n      target="tooltip-target-1"\n      triggers="hover"\n      no-fade\n    >\n      Without Fade Animation        class="mb-1 mb-md-0"\n    </b-tooltip>\n    <b-button\n      id="tooltip-target-2"\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n    >\n      Delay Tooltip\n    </b-button>\n    <b-tooltip\n      target="tooltip-target-2"\n      :delay="delay"\n    >\n      Delay triggers\n    </b-tooltip>\n  </div>\n</template>\n\n<script>\nimport {VBTooltip, BButton, BTooltip} from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BTooltip,\n    BButton,\n  },\n  directives: {\n    \'b-tooltip\': VBTooltip,\n    Ripple,\n  },\n  data() {\n    return {\n      delay: { show: 500, hide: 500 },\n    }\n  },\n}\n<\/script>\n',h='\n<template>\n   <div class="demo-inline-spacing">\n    <b-button\n      id="tooltip-button-1"\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n      @click="showTooltip"\n    >\n      Show Toggle Tooltip\n    </b-button>\n    <b-tooltip\n      target="tooltip-button-1"\n      placement="top"\n      triggers="click"\n    >\n      tooltip!\n    </b-tooltip>\n\n    <b-button\n      id="tooltip-button-2"\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n      @click="hideTooltip"\n    >\n      Hide Toggle Tooltip\n    </b-button>\n    <b-tooltip\n      target="tooltip-button-2"\n      placement="top"\n      triggers="hover"\n    >\n      tooltip!\n    </b-tooltip>\n\n    <b-button\n      id="tooltip-button-3"\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n      @click="show = !show"\n    >\n      Toggle Tooltip\n    </b-button>\n    <b-tooltip\n      :show.sync="show"\n      target="tooltip-button-3"\n      placement="top"\n      triggers="click"\n    >\n      tooltip!\n    </b-tooltip>\n\n    <b-button\n      id="tooltip-button-disable"\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n    >\n      I have a tooltip\n    </b-button>\n\n    <b-button\n      v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n      :variant="disabled ? \'success\':\'danger\'"\n      @click="disabled = !disabled"\n    >\n      {{ disabled ? \'Enable\' : \'Disable\' }} Tooltip by prop\n    </b-button>\n    <b-tooltip\n      ref="tooltip"\n      :disabled.sync="disabled"\n      target="tooltip-button-disable"\n    >\n      <span>Hello </span><strong>World!</strong>\n    </b-tooltip>\n  </div>\n</template>\n\n<script>\nimport {VBTooltip, BButton, BTooltip} from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BTooltip,\n    BButton,\n  },\n  directives: {\n    \'b-tooltip\': VBTooltip,\n    Ripple,\n  },\n  data() {\n    return {\n      show: false,\n      disabled: false,\n    }\n  },\n  methods: {\n    showTooltip() {\n      this.$root.$emit(\'bv::show::tooltip\', \'tooltip-button-1\')\n    },\n    hideTooltip() {\n      this.$root.$emit(\'bv::hide::tooltip\', \'tooltip-button-2\')\n    },\n  },\n}\n<\/script>\n',T='\n<template>\n   <div class="demo-inline-spacing">\n\n    \x3c!-- show button --\x3e\n    <b-button\n      id="tooltip-button-show-event"\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n    >\n      Show Event Tooltip\n    </b-button>\n    \x3c!-- tooltip --\x3e\n    <b-tooltip\n      ref="tooltip-show"\n      target="tooltip-button-show-event"\n      triggers="click"\n      @show="onShow"\n    >\n      tooltip!\n    </b-tooltip>\n\n    \x3c!-- button shown --\x3e\n    <b-button\n      id="tooltip-button-shown-event"\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n    >\n      Shown Event Tooltip\n    </b-button>\n    \x3c!-- tooltip --\x3e\n    <b-tooltip\n      ref="tooltip-shown"\n      target="tooltip-button-shown-event"\n      triggers="click"\n      @shown="onShown"\n    >\n      tooltip!\n    </b-tooltip>\n\n    \x3c!-- button hide --\x3e\n    <b-button\n      id="tooltip-button-hide-event"\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n    >\n      Hide Event Tooltip\n    </b-button>\n    \x3c!-- tooltip --\x3e\n    <b-tooltip\n      ref="tooltip-hide"\n      target="tooltip-button-hide-event"\n      triggers="click"\n      @hide="onHide"\n    >\n      tooltip!\n    </b-tooltip>\n\n    \x3c!-- button hidden --\x3e\n    <b-button\n      id="tooltip-button-hidden-event"\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n      class="mb-1 mb-xl-0"\n    >\n      Hidden Event Tooltip\n    </b-button>\n\n    \x3c!-- tooltip --\x3e\n    <b-tooltip\n      ref="tooltip-hidden"\n      target="tooltip-button-hidden-event"\n      triggers="click"\n      @hidden="onHidden"\n    >\n      tooltip!\n    </b-tooltip>\n  </div>\n</template>\n\n<script>\nimport {VBTooltip, BButton, BTooltip} from \'bootstrap-vue\'\nimport ToastificationContent from \'@core/components/toastification/ToastificationContent.vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BButton,\n    BTooltip,\n    // eslint-disable-next-line vue/no-unused-components\n    ToastificationContent,\n  },\n  directives: {\n    \'b-tooltip\': VBTooltip,\n    Ripple,\n  },\n  methods: {\n    onShow() {\n      this.$toast({\n        component: ToastificationContent,\n        props: {\n          title: \'Show Event Tooltip\',\n          icon: \'BellIcon\',\n        },\n      })\n    },\n    onShown() {\n      this.$toast({\n        component: ToastificationContent,\n        props: {\n          title: \'Shown Event Tooltip\',\n          icon: \'BellIcon\',\n        },\n      })\n    },\n    onHide() {\n      this.$toast({\n        component: ToastificationContent,\n        props: {\n          title: \'Hide Event Tooltip\',\n          icon: \'BellIcon\',\n        },\n      })\n    },\n    onHidden() {\n      this.$toast({\n        component: ToastificationContent,\n        props: {\n          title: \'Hidden Event Tooltip\',\n          icon: \'BellIcon\',\n        },\n      })\n    },\n  },\n}\n<\/script>\n',w={components:{BCardCode:s["a"],BButton:b["a"],BCardText:v["a"]},directives:{"b-tooltip":c["a"],Ripple:d["a"]},data:function(){return{codePosition:u}}},y=w,_=n("2877"),x=Object(_["a"])(y,l,p,!1,null,null,null),B=x.exports,C=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("b-card-code",{attrs:{title:"Variants and custom class"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeVariantCustom)+" ")]},proxy:!0}])},[n("b-card-text",{staticClass:"mb-0"},[t._v(" BootstrapVue's tooltips support contextual color variants via our custom CSS, either by using directive modifiers or config options: ")]),n("div",{staticClass:"demo-inline-spacing"},[n("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Default variant",variant:"gradient-primary"}},[t._v(" Default ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}},{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-primary",modifiers:{hover:!0,"v-primary":!0}}],attrs:{title:"Primary variant",variant:"outline-primary"}},[t._v(" Primary ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(186, 191, 199, 0.15)",expression:"'rgba(186, 191, 199, 0.15)'",modifiers:{400:!0}},{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-secondary",modifiers:{hover:!0,"v-secondary":!0}}],attrs:{title:"Secondary variant",variant:"outline-secondary"}},[t._v(" Secondary ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(40, 199, 111, 0.15)",expression:"'rgba(40, 199, 111, 0.15)'",modifiers:{400:!0}},{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-success",modifiers:{hover:!0,"v-success":!0}}],attrs:{title:"Success variant",variant:"outline-success"}},[t._v(" Success ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(234, 84, 85, 0.15)",expression:"'rgba(234, 84, 85, 0.15)'",modifiers:{400:!0}},{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-danger",modifiers:{hover:!0,"v-danger":!0}}],attrs:{title:"Danger variant",variant:"outline-danger"}},[t._v(" Danger ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 159, 67, 0.15)",expression:"'rgba(255, 159, 67, 0.15)'",modifiers:{400:!0}},{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-warning",modifiers:{hover:!0,"v-warning":!0}}],attrs:{title:"Warning variant",variant:"outline-warning"}},[t._v(" Warning ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(0, 207, 232, 0.15)",expression:"'rgba(0, 207, 232, 0.15)'",modifiers:{400:!0}},{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-info",modifiers:{hover:!0,"v-info":!0}}],attrs:{title:"Info variant",variant:"outline-info"}},[t._v(" Info ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(30, 30, 30, 0.15)",expression:"'rgba(30, 30, 30, 0.15)'",modifiers:{400:!0}},{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-dark",modifiers:{hover:!0,"v-dark":!0}}],attrs:{title:"Dark variant",variant:"outline-dark"}},[t._v(" Dark ")])],1)],1)},k=[],N={components:{BCardCode:s["a"],BButton:b["a"],BCardText:v["a"]},directives:{"b-tooltip":c["a"],Ripple:d["a"]},data:function(){return{codeVariantCustom:m}}},S=N,$=Object(_["a"])(S,C,k,!1,null,null,null),E=$.exports,H=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("b-card-code",{attrs:{title:"Tooltip Triggers"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeTriggers)+" ")]},proxy:!0}])},[n("b-card-text",{staticClass:"mb-0"},[t._v(" Tooltip is triggered using - click | hover | focus | manual options.You may pass multiple triggers; separate them with a space. ")]),n("div",{staticClass:"demo-inline-spacing"},[n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}},{name:"b-tooltip",rawName:"v-b-tooltip.click.v-primary",modifiers:{click:!0,"v-primary":!0}}],attrs:{title:"On Cllick Trigger",variant:"outline-primary"}},[t._v(" On Cllick Trigger ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}},{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-primary",modifiers:{hover:!0,"v-primary":!0}}],attrs:{title:"On Hover Trigger",variant:"outline-primary"}},[t._v(" On Hover Trigger ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}},{name:"b-tooltip",rawName:"v-b-tooltip.hover.focus.v-primary",modifiers:{hover:!0,focus:!0,"v-primary":!0}}],attrs:{title:"Hover + Focus Trigger",variant:"outline-primary"}},[t._v(" Hover + Focus Trigger ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}},{name:"b-tooltip",rawName:"v-b-tooltip.focus.v-primary",modifiers:{focus:!0,"v-primary":!0}}],attrs:{title:"On Focus Trigger",variant:"outline-primary"}},[t._v(" On Focus Trigger ")])],1)],1)},O=[],D={components:{BCardCode:s["a"],BButton:b["a"],BCardText:v["a"]},directives:{"b-tooltip":c["a"],Ripple:d["a"]},data:function(){return{codeTriggers:g}}},I=D,R=Object(_["a"])(I,H,O,!1,null,null,null),V=R.exports,P=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("b-card-code",{attrs:{title:"Tooltip Options"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeOptions)+" ")]},proxy:!0}])},[n("b-card-text",{staticClass:"mb-0"},[n("span",[t._v("Use the ")]),n("code",[t._v("nofade")]),n("span",[t._v(" prop to turn off animation.")]),n("span",[t._v("Delay showing and hiding the tooltip (ms). If a number is supplied, delay is applied to both hide/show. Object structure is: ")]),n("code",[t._v('delay: { "show": 500, "hide": 100 }')])]),n("div",{staticClass:"demo-inline-spacing"},[n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{id:"tooltip-target-1",variant:"outline-primary"}},[t._v(" No animation ")]),n("b-tooltip",{attrs:{target:"tooltip-target-1",triggers:"hover","no-fade":""}},[t._v(' Without Fade Animation class="mb-1 mb-md-0" ')]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{id:"tooltip-target-2",variant:"outline-primary"}},[t._v(" Delay Tooltip ")]),n("b-tooltip",{attrs:{target:"tooltip-target-2",delay:t.delay}},[t._v(" Delay triggers ")])],1)],1)},j=[],F=n("b4ae"),W={components:{BCardCode:s["a"],BTooltip:F["a"],BButton:b["a"],BCardText:v["a"]},directives:{"b-tooltip":c["a"],Ripple:d["a"]},data:function(){return{delay:{show:500,hide:500},codeOptions:f}}},A=W,M=Object(_["a"])(A,P,j,!1,null,null,null),J=M.exports,z=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("b-card-code",{attrs:{title:"Tooltip Methods"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeMethods)+" ")]},proxy:!0}])},[n("b-card-text",{staticClass:"mb-0"},[t._v(" This is considered a “manual” triggering of the tooltip. Tooltips with zero-length titles are never displayed. ")]),n("div",{staticClass:"demo-inline-spacing"},[n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{id:"tooltip-button-1",variant:"outline-primary"},on:{click:t.showTooltip}},[t._v(" Show Toggle Tooltip ")]),n("b-tooltip",{attrs:{target:"tooltip-button-1",placement:"top",triggers:"click"}},[t._v(" tooltip! ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{id:"tooltip-button-2",variant:"outline-primary"},on:{click:t.hideTooltip}},[t._v(" Hide Toggle Tooltip ")]),n("b-tooltip",{attrs:{target:"tooltip-button-2",placement:"top",triggers:"hover"}},[t._v(" tooltip! ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{id:"tooltip-button-3",variant:"outline-primary"},on:{click:function(o){t.show=!t.show}}},[t._v(" Toggle Tooltip ")]),n("b-tooltip",{attrs:{show:t.show,target:"tooltip-button-3",placement:"top",triggers:"click"},on:{"update:show":function(o){t.show=o}}},[t._v(" tooltip! ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{id:"tooltip-button-disable",variant:"outline-primary"}},[t._v(" I have a tooltip ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{variant:t.disabled?"success":"danger"},on:{click:function(o){t.disabled=!t.disabled}}},[t._v(" "+t._s(t.disabled?"Enable":"Disable")+" Tooltip by prop ")]),n("b-tooltip",{ref:"tooltip",attrs:{disabled:t.disabled,target:"tooltip-button-disable"},on:{"update:disabled":function(o){t.disabled=o}}},[n("span",[t._v("Hello ")]),n("strong",[t._v("World!")])])],1)],1)},L=[],U={components:{BCardCode:s["a"],BTooltip:F["a"],BButton:b["a"],BCardText:v["a"]},directives:{"b-tooltip":c["a"],Ripple:d["a"]},data:function(){return{show:!1,disabled:!1,codeMethods:h}},methods:{showTooltip:function(){this.$root.$emit("bv::show::tooltip","tooltip-button-1")},hideTooltip:function(){this.$root.$emit("bv::hide::tooltip","tooltip-button-2")}}},X=U,Y=Object(_["a"])(X,z,L,!1,null,null,null),q=Y.exports,G=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("b-card-code",{attrs:{title:"Tooltip Events"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeEvent)+" ")]},proxy:!0}])},[n("div",{staticClass:"demo-inline-spacing"},[n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{id:"tooltip-button-show-event",variant:"outline-primary"}},[t._v(" Show Event Tooltip ")]),n("b-tooltip",{ref:"tooltip-show",attrs:{target:"tooltip-button-show-event",triggers:"click"},on:{show:t.onShow}},[t._v(" tooltip! ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{id:"tooltip-button-shown-event",variant:"outline-primary"}},[t._v(" Shown Event Tooltip ")]),n("b-tooltip",{ref:"tooltip-shown",attrs:{target:"tooltip-button-shown-event",triggers:"click"},on:{shown:t.onShown}},[t._v(" tooltip! ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{id:"tooltip-button-hide-event",variant:"outline-primary"}},[t._v(" Hide Event Tooltip ")]),n("b-tooltip",{ref:"tooltip-hide",attrs:{target:"tooltip-button-hide-event",triggers:"click"},on:{hide:t.onHide}},[t._v(" tooltip! ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],staticClass:"mb-1 mb-xl-0",attrs:{id:"tooltip-button-hidden-event",variant:"outline-primary"}},[t._v(" Hidden Event Tooltip ")]),n("b-tooltip",{ref:"tooltip-hidden",attrs:{target:"tooltip-button-hidden-event",triggers:"click"},on:{hidden:t.onHidden}},[t._v(" tooltip! ")])],1)])},K=[],Q=n("223c"),Z={components:{BCardCode:s["a"],BButton:b["a"],BTooltip:F["a"],ToastificationContent:Q["a"]},directives:{"b-tooltip":c["a"],Ripple:d["a"]},data:function(){return{codeEvent:T}},methods:{onShow:function(){this.$toast({component:Q["a"],props:{title:"Show Event Tooltip",icon:"BellIcon"}})},onShown:function(){this.$toast({component:Q["a"],props:{title:"Shown Event Tooltip",icon:"BellIcon"}})},onHide:function(){this.$toast({component:Q["a"],props:{title:"Hide Event Tooltip",icon:"BellIcon"}})},onHidden:function(){this.$toast({component:Q["a"],props:{title:"Hidden Event Tooltip",icon:"BellIcon"}})}}},tt=Z,ot=Object(_["a"])(tt,G,K,!1,null,null,null),nt=ot.exports,it={components:{BRow:r["a"],BCol:a["a"],TooltipPosition:B,TooltipVariant:E,TooltipTrigger:V,TooltipOption:J,TooltipMethod:q,TooltipEvent:nt}},et=it,rt=Object(_["a"])(et,i,e,!1,null,null,null);o["default"]=rt.exports},"541c":function(t,o,n){"use strict";var i=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("b-card",t._g(t._b({attrs:{"no-body":""}},"b-card",t.cardAttrs,!1),t.$listeners),[n("div",{staticClass:"card-header"},[n("div",[n("b-card-title",[t._v(t._s(t.$attrs.title))]),t.$attrs["sub-title"]?n("b-card-sub-title",[t._v(" "+t._s(t.$attrs["sub-title"])+" ")]):t._e()],1),n("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":t.code_visible?"false":"true","aria-controls":t.parentID},on:{click:function(o){t.code_visible=!t.code_visible}}})]),void 0!==t.$attrs["no-body"]?[t._t("default"),n("b-collapse",{staticClass:"card-code",attrs:{id:t.parentID,visible:t.code_visible},model:{value:t.code_visible,callback:function(o){t.code_visible=o},expression:"code_visible"}},[n("b-card-body",[n("prism",{attrs:{language:t.codeLanguage}},[t._t("code")],2)],1)],1)]:n("b-card-body",[t._t("default"),n("b-collapse",{staticClass:"card-code",attrs:{id:t.parentID,visible:t.code_visible},model:{value:t.code_visible,callback:function(o){t.code_visible=o},expression:"code_visible"}},[n("div",{staticClass:"p-1"}),n("prism",{attrs:{language:t.codeLanguage}},[t._t("code")],2)],1)],2)],2)},e=[],r=(n("e9c4"),n("205f")),a=n("4968"),l=n("ba06"),p=n("6197"),s=n("5843"),b=(n("c197"),n("84bf"),n("8d51")),v=n.n(b),c={components:{BCard:r["a"],BCardTitle:a["a"],BCardSubTitle:l["a"],BCardBody:p["a"],BCollapse:s["a"],Prism:v.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var t=JSON.parse(JSON.stringify(this.$attrs));return delete t.title,delete t["sub-title"],t}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},d=c,u=(n("8d54"),n("2877")),m=Object(u["a"])(d,i,e,!1,null,"aa799a9e",null);o["a"]=m.exports},"8d54":function(t,o,n){"use strict";n("ecda")},"8d81":function(t,o,n){},b549:function(t,o,n){"use strict";n("8d81")},ecda:function(t,o,n){}}]);