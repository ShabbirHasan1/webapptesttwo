(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c025013"],{1079:function(a,t,n){"use strict";var e=n("541c");t["a"]=e["a"]},"223c":function(a,t,n){"use strict";var e=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"toastification"},[n("div",{staticClass:"d-flex align-items-start"},[n("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:a.variant,size:"1.8rem"}},[n("feather-icon",{attrs:{icon:a.icon,size:"15"}})],1),n("div",{staticClass:"d-flex flex-grow-1"},[n("div",[a.title?n("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:"text-"+a.variant,domProps:{textContent:a._s(a.title)}}):a._e(),a.text?n("small",{staticClass:"d-inline-block text-body",domProps:{textContent:a._s(a.text)}}):a._e()]),n("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto ",on:{click:function(t){return a.$emit("close-toast")}}},[a.hideClose?a._e():n("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])},r=[],s=n("e8a3"),i={components:{BAvatar:s["a"]},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},o=i,c=(n("b549"),n("2877")),l=Object(c["a"])(o,e,r,!1,null,"55dd3057",null);t["a"]=l.exports},"3be5":function(a,t,n){"use strict";n.r(t);var e=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("b-row",{staticClass:"match-height"},[n("b-col",{attrs:{lg:"6"}},[n("avatar-size")],1),n("b-col",{attrs:{lg:"6"}},[n("avatar-initials")],1),n("b-col",{attrs:{lg:"6"}},[n("avatar-color")],1),n("b-col",{attrs:{lg:"6"}},[n("avatar-light-color")],1),n("b-col",{attrs:{lg:"6"}},[n("avatar-icon")],1),n("b-col",{attrs:{lg:"6"}},[n("avatar-custom-content")],1),n("b-col",{attrs:{lg:"6"}},[n("avatar-badge")],1),n("b-col",{attrs:{lg:"6"}},[n("avatar-badge-content")],1),n("b-col",{attrs:{lg:"6"}},[n("avatar-badge-position")],1),n("b-col",{attrs:{ld:"6"}},[n("avatar-offset")],1),n("b-col",{attrs:{lg:"6"}},[n("avatar-square")],1),n("b-col",{attrs:{lg:"6"}},[n("avatar-rounded")],1),n("b-col",{attrs:{lg:"6"}},[n("avatar-group")],1),n("b-col",{attrs:{lg:"6"}},[n("avatar-group-tooltip")],1),n("b-col",{attrs:{cols:"12"}},[n("avatar-action")],1)],1)},r=[],s=n("a15b7"),i=n("b28b"),o=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("b-card-code",{attrs:{title:"Sizes"},scopedSlots:a._u([{key:"code",fn:function(){return[a._v(" "+a._s(a.codeSizes)+" ")]},proxy:!0}])},[e("b-card-text",{staticClass:"mb-0"},[e("span",[a._v("Use the prop")]),e("code",[a._v("size")]),e("span",[a._v(" to specify sizes ")]),e("code",[a._v("sm, md")]),e("span",[a._v("and ")]),e("code",[a._v("lg")]),e("span",[a._v(" default to ")]),e("code",[a._v("1.5em, 2.5em")]),e("span",[a._v(" and ")]),e("code",[a._v("3.5em")])]),e("div",{staticClass:"demo-inline-spacing"},[e("b-avatar",{attrs:{size:"sm",src:n("0160")}}),e("b-avatar",{attrs:{src:n("0160")}}),e("b-avatar",{attrs:{size:"lg",src:n("0160")}}),e("b-avatar",{attrs:{size:"70px",src:n("0160")}})],1)],1)},c=[],l=n("1079"),v=n("e8a3"),d=n("d6e4"),p='\n<template>\n  <div class="demo-inline-spacing">\n    <b-avatar\n      size="sm"\n      :src="require(\'@/assets/images/portrait/small/avatar-s-20.jpg\')"\n    />\n    <b-avatar\n      :src="require(\'@/assets/images/portrait/small/avatar-s-20.jpg\')"\n    />\n    <b-avatar\n      size="lg"\n      :src="require(\'@/assets/images/portrait/small/avatar-s-20.jpg\')"\n    />\n    <b-avatar\n      size="70px"\n      :src="require(\'@/assets/images/portrait/small/avatar-s-20.jpg\')"\n    />\n  </div>\n</template>\n\n<script>\nimport { BAvatar } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BAvatar,\n  },\n}\n<\/script>\n',u='\n<template>\n  <div class="demo-inline-spacing">\n    <b-avatar\n      size="sm"\n      variant="light-primary"\n      text="PI"\n    />\n    <b-avatar\n      variant="light-secondary"\n      text="PI"\n    />\n    <b-avatar\n      size="lg"\n      variant="light-success"\n      text="PI"\n    />\n    <b-avatar\n      size="70px"\n      variant="light-danger"\n      text="PI"\n    />\n  </div>\n</template>\n\n<script>\nimport { BAvatar } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BAvatar\n  },\n}\n<\/script>\n',b='\n<template>\n  <div class="demo-inline-spacing">\n    <b-avatar\n      variant="primary"\n      text="PI"\n    />\n    <b-avatar\n      variant="secondary"\n      text="PI"\n    />\n    <b-avatar\n      variant="success"\n      text="PI"\n    />\n    <b-avatar\n      variant="danger"\n      text="PI"\n    />\n    <b-avatar\n      variant="warning"\n      text="PI"\n    />\n    <b-avatar\n      variant="info"\n      text="PI"\n    />\n  </div>\n</template>\n\n<script>\nimport { BAvatar} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BAvatar,\n  },\n}\n<\/script>\n',g='\n<template>\n  <div class="demo-inline-spacing">\n    <b-avatar\n      text="PI"\n      variant="light-primary"\n    />\n    <b-avatar\n      text="PI"\n      variant="light-secondary"\n    />\n    <b-avatar\n      text="PI"\n      variant="light-success"\n    />\n    <b-avatar\n      text="PI"\n      variant="light-danger"\n    />\n    <b-avatar\n      text="PI"\n      variant="light-warning"\n    />\n    <b-avatar\n      text="PI"\n      variant="light-info"\n    />\n  </div>\n</template>\n\n<script>\nimport { BAvatar } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BAvatar,\n  },\n}\n<\/script>\n',m='\n<template>\n  <div class="demo-inline-spacing">\n    <b-avatar variant="primary">\n      <feather-icon icon="HomeIcon" />\n    </b-avatar>\n    <b-avatar variant="success">\n      <feather-icon icon="BellIcon" />\n    </b-avatar>\n    <b-avatar variant="info">\n      <feather-icon icon="UserIcon" />\n    </b-avatar>\n    <b-avatar variant="danger">\n      <feather-icon icon="MessageSquareIcon" />\n    </b-avatar>\n  </div>\n</template>\n\n<script>\nimport { BAvatar } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BAvatar\n  },\n}\n<\/script>\n',f='\n<template>\n  <div class="demo-inline-spacing">\n    <b-avatar variant="primary">\n      <span>Hi</span>\n    </b-avatar>\n\n    <b-avatar variant="secondary">\n      <span>New</span>\n    </b-avatar>\n\n    <b-avatar variant="success">\n      <span>Hey</span>\n    </b-avatar>\n\n    <b-avatar variant="light-danger">\n      <span>Hi</span>\n    </b-avatar>\n\n    <b-avatar variant="light-warning">\n      <span>New</span>\n    </b-avatar>\n\n    <b-avatar variant="light-info">\n      <span>Hey</span>\n    </b-avatar>\n  </div>\n</template>\n\n<script>\nimport { BAvatar} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BAvatar\n  },\n}\n<\/script>\n',_='\n<template>\n  <div class="demo-inline-spacing">\n    \x3c!-- using default slot  --\x3e\n    <b-avatar\n      badge="5"\n      badge-variant="primary"\n    >\n      <span class="d-flex align-items-center">\n        <feather-icon\n          icon="DownloadIcon"\n          size="16"\n        />\n      </span>\n    </b-avatar>\n\n    \x3c!-- with badge prop --\x3e\n    <b-avatar\n      badge="3"\n      badge-variant="primary"\n    />\n\n    <b-avatar\n      badge="2"\n      badge-variant="primary"\n    />\n\n    <b-avatar\n      badge="1"\n      badge-variant="primary"\n    />\n\n    <b-avatar\n      badge="10"\n      badge-variant="primary"\n      text="BV"\n    />\n  </div>\n</template>\n\n<script>\nimport { BAvatar} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BAvatar,\n  },\n}\n<\/script>\n',h='\n<template>\n  <div class="demo-inline-spacing">\n    <b-avatar\n      class="mr-1"\n      badge="B"\n    />\n    <b-avatar\n      badge="7"\n      class="mr-1"\n      variant="primary"\n      badge-variant="danger"\n    />\n    <b-avatar\n      badge-variant="success"\n      badge="1"\n      :src="require(\'@/assets/images/portrait/small/avatar-s-16.jpg\')"\n    />\n</div>\n</template>\n\n<script>\nimport { BAvatar} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BAvatar\n  },\n}\n<\/script>\n',x='\n<template>\n  <div class="demo-inline-spacing">\n    <b-avatar\n      class="mr-1"\n      badge\n      badge-variant="success"\n    />\n    <b-avatar\n      class="mr-1"\n      badge-variant="success"\n      badge\n      badge-left\n    />\n    <b-avatar\n      badge\n      class="mr-1"\n      badge-variant="success"\n      badge-top\n    />\n    <b-avatar\n      badge\n      class="mr-1"\n      badge-variant="success"\n      badge-left\n      badge-top\n    />\n</div>\n</template>\n\n<script>\nimport { BAvatar} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BAvatar\n  },\n}\n<\/script>\n',C='\n<template>\n  <div class="demo-inline-spacing">\n    <b-avatar\n      badge\n      badge-variant="success"\n      badge-offset="-0.5em"\n      class="mr-1"\n    />\n    <b-avatar\n      badge\n      badge-variant="success"\n      badge-offset="-2px"\n      class="mr-1"\n    />\n    <b-avatar\n      badge\n      badge-variant="success"\n      badge-offset="2px"\n      class="mr-1"\n    />\n    <b-avatar\n      badge\n      badge-top\n      badge-variant="success"\n      badge-offset="-0.5em"\n      class="mr-1"\n    />\n  </div>\n</template>\n\n<script>\nimport { BAvatar } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BAvatar\n  },\n}\n<\/script>\n',B='\n<template>\n  <div class="demo-inline-spacing">\n    <b-avatar\n      variant="light-primary"\n      square\n    />\n    <b-avatar\n      square\n      variant="light-success"\n    />\n  </div>\n</template>\n\n<script>\nimport { BAvatar } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BAvatar\n  },\n}\n<\/script>\n',y='\n<template>\n  <div class="demo-inline-spacing">\n    <b-avatar\n      rounded="sm"\n      variant="light-primary"\n    />\n    <b-avatar\n      rounded\n      variant="light-success"\n    />\n    <b-avatar\n      rounded="top"\n      variant="light-danger"\n    />\n    <b-avatar\n      rounded="lg"\n      variant="light-warning"\n    />\n    <b-avatar\n      rounded="left"\n      variant="light-info"\n    />\n    <b-avatar\n      rounded="right"\n      variant="light-primary"\n    />\n    <b-avatar\n      rounded="bottom"\n      variant="light-dark"\n    />\n  </div>\n</template>\n\n<script>\nimport { BAvatar} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BAvatar\n  },\n}\n<\/script>\n',A='\n<template>\n  <b-avatar-group size="32px">\n    <b-avatar\n      class="pull-up"\n      :src="require(\'@/assets/images/portrait/small/avatar-s-5.jpg\')"\n    />\n    <b-avatar\n      class="pull-up"\n      variant="primary"\n      :src="require(\'@/assets/images/portrait/small/avatar-s-7.jpg\')"\n    />\n    <b-avatar\n      class="pull-up"\n      :src="require(\'@/assets/images/portrait/small/avatar-s-10.jpg\')"\n    />\n    <b-avatar\n      class="pull-up"\n      variant="danger"\n      :src="require(\'@/assets/images/portrait/small/avatar-s-8.jpg\')"\n    />\n    <b-avatar\n      class="pull-up"\n      :src="require(\'@/assets/images/portrait/small/avatar-s-20.jpg\')"\n    />\n  </b-avatar-group>\n</template>\n\n<script>\nimport { BAvatarGroup, BAvatar, } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BAvatarGroup,\n    BAvatar,\n  },\n}\n<\/script>\n',I='\n<template>\n  <b-avatar-group size="32px">\n    <b-avatar\n      v-b-tooltip.hover\n      class="pull-up"\n      title="Jenny Looper"\n      :src="require(\'@/assets/images/portrait/small/avatar-s-5.jpg\')"\n    />\n    <b-avatar\n      v-b-tooltip.hover\n      class="pull-up"\n      title="Darcey Nooner"\n      variant="primary"\n      :src="require(\'@/assets/images/portrait/small/avatar-s-7.jpg\')"\n    />\n    <b-avatar\n      v-b-tooltip.hover\n      class="pull-up"\n      title="Julee Rossignol"\n      :src="require(\'@/assets/images/portrait/small/avatar-s-10.jpg\')"\n    />\n    <b-avatar\n      v-b-tooltip.hover\n      class="pull-up"\n      title="Elicia Rieske"\n      variant="danger"\n      :src="require(\'@/assets/images/portrait/small/avatar-s-8.jpg\')"\n    />\n    <b-avatar\n      v-b-tooltip.hover\n      class="pull-up"\n      title="Vinnie Mostowy"\n      :src="require(\'@/assets/images/portrait/small/avatar-s-20.jpg\')"\n    />\n  </b-avatar-group>\n</template>\n\n<script>\nimport {  BAvatarGroup, BAvatar, VBTooltip} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BAvatarGroup,\n    BAvatar\n  },\n  directives: {\n    \'b-tooltip\': VBTooltip,\n  },\n}\n<\/script>\n',w='\n<template>\n  <div class="demo-inline-spacing">\n    \x3c!-- button avatar --\x3e\n    <b-avatar\n      button\n      variant="primary"\n      text="BA"\n      class="align-baseline"\n      @click="showToast"\n    />\n    <span> Button Avatar</span>\n\n    \x3c!-- link avatar --\x3e\n    <b-avatar\n      href="#foobar"\n      :src="require(\'@/assets/images/portrait/small/avatar-s-8.jpg\')"\n    />\n    <span>Link Avatar</span>\n  </div>\n</template>\n\n<script>\nimport { BAvatar} from \'bootstrap-vue\'\nimport ToastificationContent from \'@core/components/toastification/ToastificationContent.vue\'\n\nexport default {\n  components: {\n    BAvatar,\n    // eslint-disable-next-line vue/no-unused-components\n    ToastificationContent,\n  },\n  methods: {\n    showToast() {\n      this.$toast({\n        component: ToastificationContent,\n        props: {\n          title: \'Notification\',\n          icon: \'BellIcon\',\n        },\n      })\n    },\n  },\n}\n<\/script>\n',P={components:{BCardCode:l["a"],BAvatar:v["a"],BCardText:d["a"]},data:function(){return{codeSizes:p}}},j=P,k=n("2877"),S=Object(k["a"])(j,o,c,!1,null,null,null),T=S.exports,q=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("b-card-code",{attrs:{title:"Initials"},scopedSlots:a._u([{key:"code",fn:function(){return[a._v(" "+a._s(a.codeInitials)+" ")]},proxy:!0}])},[n("b-card-text",{staticClass:"mb-0"},[n("span",[a._v("You can specify a short string as the content of an avatar via the ")]),n("code",[a._v("text")]),n("span",[a._v(" prop.")])]),n("div",{staticClass:"demo-inline-spacing"},[n("b-avatar",{attrs:{size:"sm",variant:"light-primary",text:"PI"}}),n("b-avatar",{attrs:{variant:"light-secondary",text:"PI"}}),n("b-avatar",{attrs:{size:"lg",variant:"light-success",text:"PI"}}),n("b-avatar",{attrs:{size:"70px",variant:"light-danger",text:"PI"}})],1)],1)},z=[],$={components:{BCardCode:l["a"],BAvatar:v["a"],BCardText:d["a"]},data:function(){return{codeInitials:u}}},O=$,E=Object(k["a"])(O,q,z,!1,null,null,null),G=E.exports,N=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("b-card-code",{attrs:{title:"Colors"},scopedSlots:a._u([{key:"code",fn:function(){return[a._v(" "+a._s(a.codeColor)+" ")]},proxy:!0}])},[n("b-card-text",{staticClass:"mb-0"},[n("span",[a._v("Use the ")]),n("code",[a._v("variant")]),n("span",[a._v(" prop to specify one of Bootstrap theme variant colors.")])]),n("div",{staticClass:"demo-inline-spacing"},[n("b-avatar",{attrs:{variant:"primary",text:"PI"}}),n("b-avatar",{attrs:{variant:"secondary",text:"PI"}}),n("b-avatar",{attrs:{variant:"success",text:"PI"}}),n("b-avatar",{attrs:{variant:"danger",text:"PI"}}),n("b-avatar",{attrs:{variant:"warning",text:"PI"}}),n("b-avatar",{attrs:{variant:"info",text:"PI"}})],1)],1)},L=[],H={components:{BCardCode:l["a"],BAvatar:v["a"],BCardText:d["a"]},data:function(){return{codeColor:b}}},D=H,R=Object(k["a"])(D,N,L,!1,null,null,null),V=R.exports,J=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("b-card-code",{attrs:{title:"Light Colors"},scopedSlots:a._u([{key:"code",fn:function(){return[a._v(" "+a._s(a.codeColorLight)+" ")]},proxy:!0}])},[n("b-card-text",{staticClass:"mb-0"},[n("span",[a._v("use class ")]),n("code",[a._v('variant="light-{color-name}"')]),n("span",[a._v(" to change background color of your avatar.")])]),n("div",{staticClass:"demo-inline-spacing"},[n("b-avatar",{attrs:{text:"PI",variant:"light-primary"}}),n("b-avatar",{attrs:{text:"PI",variant:"light-secondary"}}),n("b-avatar",{attrs:{text:"PI",variant:"light-success"}}),n("b-avatar",{attrs:{text:"PI",variant:"light-danger"}}),n("b-avatar",{attrs:{text:"PI",variant:"light-warning"}}),n("b-avatar",{attrs:{text:"PI",variant:"light-info"}})],1)],1)},U=[],M=n("541c"),Y={components:{BAvatar:v["a"],BCardCode:M["a"],BCardText:d["a"]},data:function(){return{codeColorLight:g}}},W=Y,X=Object(k["a"])(W,J,U,!1,null,null,null),F=X.exports,K=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("b-card-code",{attrs:{title:"Actionable avatars"},scopedSlots:a._u([{key:"code",fn:function(){return[a._v(" "+a._s(a.codeAction)+" ")]},proxy:!0}])},[e("b-card-text",{staticClass:"mb-0"},[e("span",[a._v("Want to trigger the opening of a modal or trigger an action? Set the button prop to instruct")]),e("code",[a._v("<b-avatar>")]),e("span",[a._v(" to render as a ")]),e("code",[a._v("<button>")]),e("span",[a._v(" element.")])]),e("div",{staticClass:"demo-inline-spacing"},[e("b-avatar",{staticClass:"align-baseline",attrs:{button:"",variant:"primary",text:"BA"},on:{click:a.showToast}}),e("span",[a._v(" Button Avatar")]),e("b-avatar",{attrs:{href:"#foobar",src:n("ed5f")}}),e("span",[a._v("Link Avatar")])],1)],1)},Q=[],Z=n("223c"),aa={components:{BCardCode:l["a"],BAvatar:v["a"],BCardText:d["a"],ToastificationContent:Z["a"]},data:function(){return{codeAction:w}},methods:{showToast:function(){this.$toast({component:Z["a"],props:{title:"Notification",icon:"BellIcon"}})}}},ta=aa,na=Object(k["a"])(ta,K,Q,!1,null,null,null),ea=na.exports,ra=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("b-card-code",{attrs:{title:"Badge avatars"},scopedSlots:a._u([{key:"code",fn:function(){return[a._v(" "+a._s(a.codeBadge)+" ")]},proxy:!0}])},[n("b-card-text",{staticClass:"mb-0"},[n("span",[a._v("Easily add a badge to your avatar via the ")]),n("code",[a._v("badge")]),n("span",[a._v(" prop or ")]),n("code",[a._v("'badge'")]),n("span",[a._v(" slot, and the badge variant can be set via the ")]),n("code",[a._v("badge-variant")]),n("span",[a._v(" prop. The badge will scale with the size of the avatar.")])]),n("div",{staticClass:"demo-inline-spacing"},[n("b-avatar",{attrs:{badge:"5","badge-variant":"primary"}},[n("span",{staticClass:"d-flex align-items-center"},[n("feather-icon",{attrs:{icon:"DownloadIcon",size:"16"}})],1)]),n("b-avatar",{attrs:{badge:"3","badge-variant":"primary"}}),n("b-avatar",{attrs:{badge:"2","badge-variant":"primary"}}),n("b-avatar",{attrs:{badge:"1","badge-variant":"primary"}}),n("b-avatar",{attrs:{badge:"10","badge-variant":"primary",text:"BV"}})],1)],1)},sa=[],ia={components:{BCardCode:l["a"],BCardText:d["a"],BAvatar:v["a"]},data:function(){return{codeBadge:_}}},oa=ia,ca=Object(k["a"])(oa,ra,sa,!1,null,null,null),la=ca.exports,va=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("b-card-code",{attrs:{title:"Badge positioning"},scopedSlots:a._u([{key:"code",fn:function(){return[a._v(" "+a._s(a.codeBadgePosition)+" ")]},proxy:!0}])},[n("b-card-text",{staticClass:"mb-0"},[n("span",[a._v("By default the badge appears on the bottom right of the avatar. ")]),n("span",[a._v("You can use the ")]),n("code",[a._v("badge-top")]),n("span",[a._v(" and ")]),n("code",[a._v("badge-right")]),n("span",[a._v(" boolean props to switch the sides.")])]),n("div",{staticClass:"demo-inline-spacing"},[n("b-avatar",{staticClass:"mr-1",attrs:{badge:"","badge-variant":"success"}}),n("b-avatar",{staticClass:"mr-1",attrs:{"badge-variant":"success",badge:"","badge-left":""}}),n("b-avatar",{staticClass:"mr-1",attrs:{badge:"","badge-variant":"success","badge-top":""}}),n("b-avatar",{staticClass:"mr-1",attrs:{badge:"","badge-variant":"success","badge-left":"","badge-top":""}})],1)],1)},da=[],pa={components:{BCardCode:l["a"],BAvatar:v["a"],BCardText:d["a"]},data:function(){return{codeBadgePosition:x}}},ua=pa,ba=Object(k["a"])(ua,va,da,!1,null,null,null),ga=ba.exports,ma=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("b-card-code",{attrs:{title:"Badge Offset"},scopedSlots:a._u([{key:"code",fn:function(){return[a._v(" "+a._s(a.codeBadgeOffset)+" ")]},proxy:!0}])},[n("b-card-text",{staticClass:"mb-0"},[n("span",[a._v("Use the ")]),n("code",[a._v("badge-offset")]),n("span",[a._v(" prop to control the offset of the badge. ")]),n("span",[a._v("Positive values will move the badge inward, while negative values will move the badge outward.")])]),n("div",{staticClass:"demo-inline-spacing"},[n("b-avatar",{staticClass:"mr-1",attrs:{badge:"","badge-variant":"success","badge-offset":"-0.5em"}}),n("b-avatar",{staticClass:"mr-1",attrs:{badge:"","badge-variant":"success","badge-offset":"-2px"}}),n("b-avatar",{staticClass:"mr-1",attrs:{badge:"","badge-variant":"success","badge-offset":"2px"}}),n("b-avatar",{staticClass:"mr-1",attrs:{badge:"","badge-top":"","badge-variant":"success","badge-offset":"-0.5em"}})],1)],1)},fa=[],_a={components:{BCardCode:l["a"],BAvatar:v["a"],BCardText:d["a"]},data:function(){return{codeBadgeOffset:C}}},ha=_a,xa=Object(k["a"])(ha,ma,fa,!1,null,null,null),Ca=xa.exports,Ba=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("b-card-code",{attrs:{title:"Icons"},scopedSlots:a._u([{key:"code",fn:function(){return[a._v(" "+a._s(a.codeIcon)+" ")]},proxy:!0}])},[n("b-card-text",{staticClass:"mb-0"},[n("span",[a._v("Easily use one of ")]),n("code",[a._v("BootstrapVue's")]),n("span",[a._v(" icons as the avatar content via the ")]),n("code",[a._v("icon")]),n("span",[a._v(" prop. The prop should be set to a valid icon name.")])]),n("div",{staticClass:"demo-inline-spacing"},[n("b-avatar",{attrs:{variant:"primary"}},[n("feather-icon",{attrs:{icon:"HomeIcon"}})],1),n("b-avatar",{attrs:{variant:"success"}},[n("feather-icon",{attrs:{icon:"BellIcon"}})],1),n("b-avatar",{attrs:{variant:"info"}},[n("feather-icon",{attrs:{icon:"UserIcon"}})],1),n("b-avatar",{attrs:{variant:"danger"}},[n("feather-icon",{attrs:{icon:"MessageSquareIcon"}})],1)],1)],1)},ya=[],Aa={components:{BCardCode:l["a"],BAvatar:v["a"],BCardText:d["a"]},data:function(){return{codeIcon:m}}},Ia=Aa,wa=Object(k["a"])(Ia,Ba,ya,!1,null,null,null),Pa=wa.exports,ja=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("b-card-code",{attrs:{title:"Custom content"},scopedSlots:a._u([{key:"code",fn:function(){return[a._v(" "+a._s(a.codeCustomContent)+" ")]},proxy:!0}])},[n("b-card-text",{staticClass:"mb-0"},[n("span",[a._v("Use the ")]),n("code",[a._v("default")]),n("span",[a._v("slot to render custom content in the avatar, for finer grained control of its appearance.")])]),n("div",{staticClass:"demo-inline-spacing"},[n("b-avatar",{attrs:{variant:"primary"}},[n("span",[a._v("Hi")])]),n("b-avatar",{attrs:{variant:"secondary"}},[n("span",[a._v("New")])]),n("b-avatar",{attrs:{variant:"success"}},[n("span",[a._v("Hey")])]),n("b-avatar",{attrs:{variant:"light-danger"}},[n("span",[a._v("Hi")])]),n("b-avatar",{attrs:{variant:"light-warning"}},[n("span",[a._v("New")])]),n("b-avatar",{attrs:{variant:"light-info"}},[n("span",[a._v("Hey")])])],1)],1)},ka=[],Sa={components:{BCardCode:l["a"],BAvatar:v["a"],BCardText:d["a"]},data:function(){return{codeCustomContent:f}}},Ta=Sa,qa=Object(k["a"])(Ta,ja,ka,!1,null,null,null),za=qa.exports,$a=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("b-card-code",{attrs:{title:"Badge content"},scopedSlots:a._u([{key:"code",fn:function(){return[a._v(" "+a._s(a.codeBadgeContent)+" ")]},proxy:!0}])},[e("b-card-text",{staticClass:"mb-0"},[e("span",[a._v("Add textual content to the badge by supplying a string to the ")]),e("code",[a._v("badge")]),e("span",[a._v(" prop, or use the named slot ")]),e("code",[a._v("'badge'")]),a._v(". ")]),e("div",{staticClass:"demo-inline-spacing"},[e("b-avatar",{staticClass:"mr-1",attrs:{badge:"B"}}),e("b-avatar",{staticClass:"mr-1",attrs:{badge:"7",variant:"primary","badge-variant":"danger"}}),e("b-avatar",{attrs:{"badge-variant":"success",badge:"1",src:n("6683")}})],1)],1)},Oa=[],Ea={components:{BCardCode:l["a"],BAvatar:v["a"],BCardText:d["a"]},data:function(){return{codeBadgeContent:h}}},Ga=Ea,Na=Object(k["a"])(Ga,$a,Oa,!1,null,null,null),La=Na.exports,Ha=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("b-card-code",{attrs:{title:"Square"},scopedSlots:a._u([{key:"code",fn:function(){return[a._v(" "+a._s(a.codeSquare)+" ")]},proxy:!0}])},[n("b-card-text",{staticClass:"mb-0"},[n("span",[a._v(" Prefer a square avatar? simply set the ")]),n("code",[a._v("square")]),n("span",[a._v(" prop to ")]),n("code",[a._v("true")]),a._v(". ")]),n("div",{staticClass:"demo-inline-spacing"},[n("b-avatar",{attrs:{variant:"light-primary",square:""}}),n("b-avatar",{attrs:{square:"",variant:"light-success"}})],1)],1)},Da=[],Ra={components:{BCardCode:l["a"],BAvatar:v["a"],BCardText:d["a"]},data:function(){return{codeSquare:B}}},Va=Ra,Ja=Object(k["a"])(Va,Ha,Da,!1,null,null,null),Ua=Ja.exports,Ma=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("b-card-code",{attrs:{title:"Rounded"},scopedSlots:a._u([{key:"code",fn:function(){return[a._v(" "+a._s(a.codeRounded)+" ")]},proxy:!0}])},[n("b-card-text",{staticClass:"mb-0"},[n("span",[a._v(" You can change the rounding by setting the prop")]),n("code",[a._v("rounded")]),n("span",[a._v(".")])]),n("div",{staticClass:"demo-inline-spacing"},[n("b-avatar",{attrs:{rounded:"sm",variant:"light-primary"}}),n("b-avatar",{attrs:{rounded:"",variant:"light-success"}}),n("b-avatar",{attrs:{rounded:"top",variant:"light-danger"}}),n("b-avatar",{attrs:{rounded:"lg",variant:"light-warning"}}),n("b-avatar",{attrs:{rounded:"left",variant:"light-info"}}),n("b-avatar",{attrs:{rounded:"right",variant:"light-primary"}}),n("b-avatar",{attrs:{rounded:"bottom",variant:"light-dark"}})],1)],1)},Ya=[],Wa={components:{BCardCode:l["a"],BAvatar:v["a"],BCardText:d["a"]},data:function(){return{codeRounded:y}}},Xa=Wa,Fa=Object(k["a"])(Xa,Ma,Ya,!1,null,null,null),Ka=Fa.exports,Qa=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("b-card-code",{attrs:{title:"Avatar Group"},scopedSlots:a._u([{key:"code",fn:function(){return[a._v(" "+a._s(a.codeGroup)+" ")]},proxy:!0}])},[e("b-card-text",[e("span",[a._v("Group multiple avatars together by wrapping them in a ")]),e("code",[a._v("<b-avatar-group>")]),e("span",[a._v(" component. Add class ")]),e("code",[a._v("pull-up")]),e("span",[a._v(" for pull up the avatar on hover.")])]),e("b-avatar-group",{attrs:{size:"32px"}},[e("b-avatar",{staticClass:"pull-up",attrs:{src:n("9a5e")}}),e("b-avatar",{staticClass:"pull-up",attrs:{variant:"primary",src:n("b690")}}),e("b-avatar",{staticClass:"pull-up",attrs:{src:n("351c")}}),e("b-avatar",{staticClass:"pull-up",attrs:{variant:"danger",src:n("ed5f")}}),e("b-avatar",{staticClass:"pull-up",attrs:{src:n("0160")}})],1)],1)},Za=[],at=n("3985"),tt={components:{BCardCode:M["a"],BAvatarGroup:at["a"],BAvatar:v["a"],BCardText:d["a"]},data:function(){return{codeGroup:A}}},nt=tt,et=Object(k["a"])(nt,Qa,Za,!1,null,null,null),rt=et.exports,st=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("b-card-code",{attrs:{title:"Avatar Group with Tooltip"},scopedSlots:a._u([{key:"code",fn:function(){return[a._v(" "+a._s(a.codeGroupTooltip)+" ")]},proxy:!0}])},[e("b-card-text",[e("span",[a._v("Use bootstrapVue's ")]),e("code",[a._v("VBTooltip")]),e("span",[a._v(" directive with avatar to use tooltip. ")]),e("span",[a._v("Add class ")]),e("code",[a._v("pull-up")]),e("span",[a._v(" for pull up the avatar on hover.")])]),e("b-avatar-group",{attrs:{size:"32px"}},[e("b-avatar",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"pull-up",attrs:{title:"Jenny Looper",src:n("9a5e")}}),e("b-avatar",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"pull-up",attrs:{title:"Darcey Nooner",variant:"primary",src:n("b690")}}),e("b-avatar",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"pull-up",attrs:{title:"Julee Rossignol",src:n("351c")}}),e("b-avatar",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"pull-up",attrs:{title:"Elicia Rieske",variant:"danger",src:n("ed5f")}}),e("b-avatar",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"pull-up",attrs:{title:"Vinnie Mostowy",src:n("0160")}})],1)],1)},it=[],ot=n("2616"),ct={components:{BCardCode:M["a"],BAvatarGroup:at["a"],BAvatar:v["a"],BCardText:d["a"]},directives:{"b-tooltip":ot["a"]},data:function(){return{codeGroupTooltip:I}}},lt=ct,vt=Object(k["a"])(lt,st,it,!1,null,null,null),dt=vt.exports,pt={components:{BRow:s["a"],BCol:i["a"],AvatarInitials:G,AvatarColor:V,AvatarLightColor:F,AvatarSize:T,AvatarAction:ea,AvatarBadge:la,AvatarBadgePosition:ga,AvatarOffset:Ca,AvatarIcon:Pa,AvatarCustomContent:za,AvatarBadgeContent:La,AvatarSquare:Ua,AvatarRounded:Ka,AvatarGroup:rt,AvatarGroupTooltip:dt}},ut=pt,bt=Object(k["a"])(ut,e,r,!1,null,null,null);t["default"]=bt.exports},"541c":function(a,t,n){"use strict";var e=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("b-card",a._g(a._b({attrs:{"no-body":""}},"b-card",a.cardAttrs,!1),a.$listeners),[n("div",{staticClass:"card-header"},[n("div",[n("b-card-title",[a._v(a._s(a.$attrs.title))]),a.$attrs["sub-title"]?n("b-card-sub-title",[a._v(" "+a._s(a.$attrs["sub-title"])+" ")]):a._e()],1),n("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":a.code_visible?"false":"true","aria-controls":a.parentID},on:{click:function(t){a.code_visible=!a.code_visible}}})]),void 0!==a.$attrs["no-body"]?[a._t("default"),n("b-collapse",{staticClass:"card-code",attrs:{id:a.parentID,visible:a.code_visible},model:{value:a.code_visible,callback:function(t){a.code_visible=t},expression:"code_visible"}},[n("b-card-body",[n("prism",{attrs:{language:a.codeLanguage}},[a._t("code")],2)],1)],1)]:n("b-card-body",[a._t("default"),n("b-collapse",{staticClass:"card-code",attrs:{id:a.parentID,visible:a.code_visible},model:{value:a.code_visible,callback:function(t){a.code_visible=t},expression:"code_visible"}},[n("div",{staticClass:"p-1"}),n("prism",{attrs:{language:a.codeLanguage}},[a._t("code")],2)],1)],2)],2)},r=[],s=(n("e9c4"),n("205f")),i=n("4968"),o=n("ba06"),c=n("6197"),l=n("5843"),v=(n("c197"),n("84bf"),n("8d51")),d=n.n(v),p={components:{BCard:s["a"],BCardTitle:i["a"],BCardSubTitle:o["a"],BCardBody:c["a"],BCollapse:l["a"],Prism:d.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var a=JSON.parse(JSON.stringify(this.$attrs));return delete a.title,delete a["sub-title"],a}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},u=p,b=(n("8d54"),n("2877")),g=Object(b["a"])(u,e,r,!1,null,"aa799a9e",null);t["a"]=g.exports},6683:function(a,t,n){a.exports=n.p+"img/avatar-s-16.037d5bcb.jpg"},"8d54":function(a,t,n){"use strict";n("ecda")},"8d81":function(a,t,n){},b549:function(a,t,n){"use strict";n("8d81")},ecda:function(a,t,n){}}]);