(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6edfb0c6"],{1079:function(e,a,t){"use strict";var n=t("541c");a["a"]=n["a"]},"3d3a":function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("i18n-change")},o=[],r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("b-card-code",{attrs:{title:"Change Locale"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeChange)+" ")]},proxy:!0}])},[t("b-card-text",{staticClass:"mb-0"},[e._v(" Your Current Locale: "),t("strong",[e._v(e._s(e.locale))])]),t("b-form-group",{staticClass:"mb-0"},[t("b-form-radio-group",{staticClass:"demo-inline-spacing",attrs:{id:"radio-group-2",name:"radio-sub-component"},model:{value:e.locale,callback:function(a){e.locale=a},expression:"locale"}},[t("b-form-radio",{attrs:{value:"en"}},[e._v(" English ")]),t("b-form-radio",{attrs:{value:"fr"}},[e._v(" French ")]),t("b-form-radio",{attrs:{value:"de"}},[e._v(" German ")]),t("b-form-radio",{attrs:{value:"pt"}},[e._v(" Portuguese ")])],1)],1),t("div",{staticClass:"border rounded mt-3 p-2"},[t("h5",{staticClass:"mb-1"},[e._v(" "+e._s(e.$t("message.title"))+" ")]),e._v(" "+e._s(e.$t("message.text"))+" ")])],1)},i=[],s=t("1079"),c=t("8226"),l=t("9e14e"),d=t("d6e4"),u=t("2924"),b='\n<template>\n  <div>\n    \x3c!-- radio buttons --\x3e\n    <b-form-group class="mb-0">\n      <b-form-radio-group\n        id="radio-group-2"\n        v-model="locale"\n        name="radio-sub-component"\n        class="demo-inline-spacing"\n      >\n        <b-form-radio\n          value="en"\n        >\n          English\n        </b-form-radio>\n        <b-form-radio\n          value="fr"\n        >\n          French\n        </b-form-radio>\n        <b-form-radio\n          value="de"\n        >\n          German\n        </b-form-radio>\n        <b-form-radio value="pt">\n          Portuguese\n        </b-form-radio>\n      </b-form-radio-group>\n    </b-form-group>\n\n    \x3c!-- card --\x3e\n    <div class="border rounded mt-3 p-2">\n      <h5 class="mb-1">\n        {{ $t(\'message.title\') }}\n      </h5>\n      {{ $t(\'message.text\') }}\n    </div>\n  </div>\n</template>\n\n<script>\nimport {\n  BFormRadio, BFormRadioGroup, BFormGroup, BCardText,\n} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormGroup,\n    BFormRadio,\n    BCardText,\n    BFormRadioGroup,\n  },\n  data() {\n    return {\n      locale: this.$i18n.locale,\n    }\n  },\n  watch: {\n    locale(val) {\n      this.$i18n.locale = val\n    },\n  },\n}\n<\/script>\n',m={components:{BCardCode:s["a"],BFormGroup:c["a"],BFormRadio:l["a"],BCardText:d["a"],BFormRadioGroup:u["a"]},data:function(){return{locale:this.$i18n.locale,codeChange:b}},watch:{locale:function(e){this.$i18n.locale=e}}},p=m,v=t("2877"),f=Object(v["a"])(p,r,i,!1,null,null,null),_=f.exports,g={components:{i18nChange:_}},h=g,C=Object(v["a"])(h,n,o,!1,null,null,null);a["default"]=C.exports},"541c":function(e,a,t){"use strict";var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("b-card",e._g(e._b({attrs:{"no-body":""}},"b-card",e.cardAttrs,!1),e.$listeners),[t("div",{staticClass:"card-header"},[t("div",[t("b-card-title",[e._v(e._s(e.$attrs.title))]),e.$attrs["sub-title"]?t("b-card-sub-title",[e._v(" "+e._s(e.$attrs["sub-title"])+" ")]):e._e()],1),t("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":e.code_visible?"false":"true","aria-controls":e.parentID},on:{click:function(a){e.code_visible=!e.code_visible}}})]),void 0!==e.$attrs["no-body"]?[e._t("default"),t("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(a){e.code_visible=a},expression:"code_visible"}},[t("b-card-body",[t("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],1)]:t("b-card-body",[e._t("default"),t("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(a){e.code_visible=a},expression:"code_visible"}},[t("div",{staticClass:"p-1"}),t("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],2)],2)},o=[],r=(t("e9c4"),t("205f")),i=t("4968"),s=t("ba06"),c=t("6197"),l=t("5843"),d=(t("c197"),t("84bf"),t("8d51")),u=t.n(d),b={components:{BCard:r["a"],BCardTitle:i["a"],BCardSubTitle:s["a"],BCardBody:c["a"],BCollapse:l["a"],Prism:u.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var e=JSON.parse(JSON.stringify(this.$attrs));return delete e.title,delete e["sub-title"],e}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},m=b,p=(t("8d54"),t("2877")),v=Object(p["a"])(m,n,o,!1,null,"aa799a9e",null);a["a"]=v.exports},"8d54":function(e,a,t){"use strict";t("ecda")},ecda:function(e,a,t){}}]);