(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{147:function(e,t,r){},149:function(e,t,r){"use strict";var a=r(147);r.n(a).a},156:function(e,t,r){"use strict";r.r(t);var a={methods:{updateQuery:function(e){this.output=e}},data:function(){return{output:null,rules:[{type:"text",id:"first-name",label:"First Name"},{type:"text",id:"last-name",label:"Last Name"},{type:"radio",id:"plan-type",label:"Plan Type",choices:[{label:"Standard",value:"standard"},{label:"Premium",value:"premium"}]}],initialQuery:{logicalOperator:"All",children:[{type:"query-builder-rule",query:{rule:"plan-type",selectedOperand:"Plan Type",value:"premium"}},{type:"query-builder-group",query:{logicalOperator:"Any",children:[{type:"query-builder-rule",query:{rule:"first-name",selectedOperator:"equals",selectedOperand:"First Name",value:"John"}},{type:"query-builder-rule",query:{rule:"first-name",selectedOperator:"equals",selectedOperand:"First Name",value:"Sally"}}]}}]}}}},u=(r(149),r(0)),i=Object(u.a)(a,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"content"},[this._m(0),t("p",[this._v("Vue Query Builder is a user interface that makes it easy for your users to create queries of any kind. It's useful if you need a tool for generating reports, filtering data, and more.")]),t("p",[this._v('Each instance of Vue Query Builder consists of groups and rules. Groups can contain rules and other groups. Each group has a match type of either "match all" (AND) or "match any" (OR). The component outputs JSON which you can pass to your server to parse.')]),this._m(1),t("br"),t("vue-query-builder",{attrs:{rules:this.rules,initialQuery:this.initialQuery},on:{"query-updated":this.updateQuery}})],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"vue-query-builder"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-query-builder","aria-hidden":"true"}},[this._v("#")]),this._v(" Vue Query Builder")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"basic-demo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#basic-demo","aria-hidden":"true"}},[this._v("#")]),this._v(" Basic Demo")])}],!1,null,null,null);t.default=i.exports}}]);