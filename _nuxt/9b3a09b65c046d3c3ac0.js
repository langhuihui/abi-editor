(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{896:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{openNewConfig:!1,newConfig:{},columns:[{title:"chainId",name:"chainId"},{title:"keyProvider",name:"keyProvider"},{title:"httpEndpoint",name:"httpEndpoint"},{title:"操作"}],fselects:[this.$store.state.currentFibosIndex]}},methods:{addNewConfig:function(){this.$store.commit("addFibosConfig",this.newConfig)},selectFibos:function(t,e){this.fselects=[t],this.$store.commit("update",{currentFibosIndex:t})}}},s=n(42),c=Object(s.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("mu-container",[n("mu-dialog",{attrs:{open:t.openNewConfig,title:"新增FibosClient配置"},on:{"update:open":function(e){t.openNewConfig=e}}},[n("mu-text-field",{attrs:{label:"chainId"},model:{value:t.newConfig.chainId,callback:function(e){t.$set(t.newConfig,"chainId",e)},expression:"newConfig.chainId"}}),n("br"),n("mu-text-field",{attrs:{label:"keyProvider"},model:{value:t.newConfig.keyProvider,callback:function(e){t.$set(t.newConfig,"keyProvider",e)},expression:"newConfig.keyProvider"}}),n("br"),n("mu-text-field",{attrs:{label:"httpEndpoint"},model:{value:t.newConfig.httpEndpoint,callback:function(e){t.$set(t.newConfig,"httpEndpoint",e)},expression:"newConfig.httpEndpoint"}}),n("mu-button",{attrs:{slot:"actions",color:"primary"},on:{click:t.addNewConfig},slot:"actions"},[t._v("添加")]),n("mu-button",{attrs:{slot:"actions"},on:{click:function(e){t.openNewConfig=!1}},slot:"actions"},[t._v("取消")])],1),n("mu-text-field",{attrs:{label:"当前账号名称"},on:{change:function(e){return t.$store.commit("update",{currentAcc:e})}},model:{value:t.$store.state.currentAcc,callback:function(e){t.$set(t.$store.state,"currentAcc",e)},expression:"$store.state.currentAcc"}}),n("mu-text-field",{attrs:{label:"部署合约账号"},on:{change:function(e){return t.$store.commit("update",{contractAcc:e})}},model:{value:t.$store.state.contractAcc,callback:function(e){t.$set(t.$store.state,"contractAcc",e)},expression:"$store.state.contractAcc"}}),n("br"),n("mu-select",{attrs:{label:"选择部署合约的js文件"},on:{change:function(e){return t.$store.commit("update",{contractJS:e})}},model:{value:t.$store.state.contractJS,callback:function(e){t.$set(t.$store.state,"contractJS",e)},expression:"$store.state.contractJS"}},t._l(t.$store.state.files,function(e,o){return o.endsWith(".js")?n("mu-option",{key:o,attrs:{label:o,value:o}}):t._e()})),n("mu-select",{attrs:{label:"选择部署合约的abi文件"},on:{change:function(e){return t.$store.commit("update",{contractABI:e})}},model:{value:t.$store.state.contractABI,callback:function(e){t.$set(t.$store.state,"contractABI",e)},expression:"$store.state.contractABI"}},t._l(t.$store.state.files,function(e,o){return o.endsWith(".json")?n("mu-option",{key:o,attrs:{label:o,value:o}}):t._e()})),n("mu-select",{attrs:{label:"选择运行测试的js文件"},on:{change:function(e){return t.$store.commit("update",{testJS:e})}},model:{value:t.$store.state.testJS,callback:function(e){t.$set(t.$store.state,"testJS",e)},expression:"$store.state.testJS"}},t._l(t.$store.state.files,function(e,o){return o.endsWith(".js")?n("mu-option",{key:o,attrs:{label:o,value:o}}):t._e()})),n("h2",[t._v("FibosClient 配置"),n("mu-button",{attrs:{icon:""},on:{click:function(e){t.openNewConfig=!0}}},[n("mu-icon",{attrs:{value:"add"}})],1)],1),n("mu-data-table",{attrs:{data:t.$store.state.fibosList,columns:t.columns,selectable:"",selects:t.fselects},on:{"update:selects":function(e){t.fselects=e},"row-click":t.selectFibos},scopedSlots:t._u([{key:"default",fn:function(e){return[n("td",[t._v(t._s(e.row.chainId))]),n("td",[t._v(t._s(e.row.keyProvider))]),n("td",[t._v(t._s(e.row.httpEndpoint))]),n("td",[t.$store.state.currentFibosIndex!=e.$index?n("mu-button",{attrs:{flat:""},on:{click:function(n){t.$store.commit("update",{currentFibosIndex:e.$index})}}},[t._v("选择")]):t._e(),n("mu-button",{attrs:{icon:""},on:{click:function(n){t.$store.commit("removeFibosConfig",e.$index)}}},[n("mu-icon",{attrs:{value:"delete"}})],1)],1)]}}])})],1)},[],!1,null,null,null);c.options.__file="config.vue";e.default=c.exports}}]);