(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{172:function(e,t,n){"use strict";n.r(t);n(97),n(14);var i=n(58),l=n.n(i),a={data:function(){return{file:null,active:0,newType:{type:"",new_type_name:""},newAction:{name:"",type:""},newTable:{name:"",type:"",index_type:"",key_names:[],key_types:[]},openNewType:!1,openNewAction:!1,openNewTable:!1,editType:0,selectedValue:null,editStruct:null}},computed:{json:function(){return JSON.stringify(this.file,null,4)}},watch:{active:function(e,t){if(1==t)try{this.file=JSON.parse(this.$refs.jsonContent.innerHTML),this.$store.commit("addFile",l()({},this.$route.query.filename,this.file))}catch(e){alert("JSON格式错误")}},$route:function(e,t){"index"==e.name&&(this.file=this.$store.state.files[e.query.filename],this.editType=0)}},mounted:function(){this.file=this.$store.state.files[this.$route.query.filename]},methods:{listOnChange:function(e){e.index_type?(this.editType=2,this.selectedValue=e,this.editStruct=this.file.structs.find(function(t){return t.name==e.type})):e.name?(this.editType=1,this.selectedValue=e,this.editStruct=this.file.structs.find(function(t){return t.name==e.type})):(this.editType=0,this.selectedValue=null)},addNewType:function(){this.file.types.push(this.newType),this.newType={type:"",new_type_name:""}},addNewAction:function(){var e=this;this.file.structs.find(function(t){return t.name==e.newAction.type})||this.file.structs.push({name:this.newAction.type,base:"",fields:[]}),this.file.actions.push(this.newAction),this.newAction={name:"",type:""}},addNewTable:function(){var e=this;this.file.structs.find(function(t){return t.name==e.newTable.type})||this.file.structs.push({name:this.newTable.type,base:"",fields:[]}),this.file.tables.push(this.newTable),this.newTable={name:"",type:"",index_type:"",key_names:[],key_types:[]}}}},s=n(22),u=Object(s.a)(a,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("mu-container",[n("mu-dialog",{attrs:{open:e.openNewType,title:"新增type"},on:{"update:open":function(t){e.openNewType=t}}},[n("mu-text-field",{attrs:{label:"new_type_name"},model:{value:e.newType.new_type_name,callback:function(t){e.$set(e.newType,"new_type_name",t)},expression:"newType.new_type_name"}}),n("mu-select",{attrs:{label:"type"},model:{value:e.newType.type,callback:function(t){e.$set(e.newType,"type",t)},expression:"newType.type"}},[n("mu-option",{attrs:{label:"name",value:"name"}})],1),n("mu-button",{attrs:{slot:"actions",color:"primary"},on:{click:e.addNewType},slot:"actions"},[e._v("添加")])],1),n("mu-dialog",{attrs:{open:e.openNewAction,title:"新增action"},on:{"update:open":function(t){e.openNewAction=t}}},[n("mu-text-field",{attrs:{label:"name"},model:{value:e.newAction.name,callback:function(t){e.$set(e.newAction,"name",t)},expression:"newAction.name"}}),n("mu-text-field",{attrs:{label:"type"},model:{value:e.newAction.type,callback:function(t){e.$set(e.newAction,"type",t)},expression:"newAction.type"}}),n("mu-button",{attrs:{slot:"actions",color:"primary"},on:{click:e.addNewAction},slot:"actions"},[e._v("添加")])],1),n("mu-dialog",{attrs:{open:e.openNewTable,title:"新增type"},on:{"update:open":function(t){e.openNewTable=t}}},[n("mu-text-field",{attrs:{label:"name"},model:{value:e.newTable.name,callback:function(t){e.$set(e.newTable,"name",t)},expression:"newTable.name"}}),n("mu-text-field",{attrs:{label:"type"},model:{value:e.newTable.type,callback:function(t){e.$set(e.newTable,"type",t)},expression:"newTable.type"}}),n("mu-text-field",{attrs:{label:"index_type"},model:{value:e.newTable.index_type,callback:function(t){e.$set(e.newTable,"index_type",t)},expression:"newTable.index_type"}}),n("mu-button",{attrs:{slot:"actions",color:"primary"},on:{click:e.addNewTable},slot:"actions"},[e._v("添加")])],1),n("mu-tabs",{attrs:{value:e.active},on:{"update:value":function(t){e.active=t}}},[n("mu-tab",[e._v("设计器")]),n("mu-tab",[e._v("JSON")])],1),0===e.active&&null!=e.file?n("mu-flex",[n("mu-list",{staticStyle:{width:"350px",height:"-webkit-calc(100vh - 160px)",overflow:"hidden auto"},on:{change:e.listOnChange}},[n("mu-sub-header",{attrs:{inset:""}},[e._v("version")]),n("mu-list-item",[n("mu-text-field",{model:{value:e.file.version,callback:function(t){e.$set(e.file,"version",t)},expression:"file.version"}})],1),n("mu-sub-header",{attrs:{inset:""}},[e._v("types")]),e._l(e.file.types,function(t,i){return n("mu-list-item",{key:"type"+i},[n("mu-list-item-content",[n("mu-list-item-title",[e._v(e._s(t.new_type_name))]),n("mu-list-item-sub-title",[e._v("type:"+e._s(t.type))])],1),n("mu-list-item-action",[n("mu-button",{attrs:{icon:""},on:{click:function(t){e.file.types.splice(i,1)}}},[n("mu-icon",{attrs:{value:"delete"}})],1)],1)],1)}),n("mu-list-item",[n("mu-list-item-title",[e._v("新增type")]),n("mu-list-item-action",[n("mu-button",{attrs:{icon:""},on:{click:function(t){e.openNewType=!0}}},[n("mu-icon",{attrs:{value:"add"}})],1)],1)],1),n("mu-sub-header",{attrs:{inset:""}},[e._v("actions")]),e._l(e.file.actions,function(t,i){return n("mu-list-item",{key:"action"+i,attrs:{button:"",value:t}},[e.selectedValue==t?n("mu-list-item-action",[n("mu-icon",{attrs:{value:"edit"}})],1):e._e(),n("mu-list-item-content",[n("mu-list-item-title",[e._v(e._s(t.name))]),n("mu-list-item-sub-title",[e._v("type:"+e._s(t.type))])],1),n("mu-list-item-action",[n("mu-button",{attrs:{icon:""},on:{click:function(t){e.file.actions.splice(i,1),e.editType=0}}},[n("mu-icon",{attrs:{value:"delete"}})],1)],1)],1)}),n("mu-list-item",[n("mu-list-item-title",[e._v("新增action")]),n("mu-list-item-action",[n("mu-button",{attrs:{icon:""},on:{click:function(t){e.openNewAction=!0}}},[n("mu-icon",{attrs:{value:"add"}})],1)],1)],1),n("mu-sub-header",{attrs:{inset:""}},[e._v("tables")]),e._l(e.file.tables,function(t,i){return n("mu-list-item",{key:"tables"+i,attrs:{button:"",value:t}},[e.selectedValue==t?n("mu-list-item-action",[n("mu-icon",{attrs:{value:"edit"}})],1):e._e(),n("mu-list-item-content",[n("mu-list-item-title",[e._v(e._s(t.name))]),n("mu-list-item-sub-title",[e._v("type:"+e._s(t.type)+" index_type:"+e._s(t.index_type))])],1),n("mu-list-item-action",[n("mu-button",{attrs:{icon:""},on:{click:function(t){e.file.tables.splice(i,1),e.editType=0}}},[n("mu-icon",{attrs:{value:"delete"}})],1)],1)],1)}),n("mu-list-item",[n("mu-list-item-title",[e._v("新增table")]),n("mu-list-item-action",[n("mu-button",{attrs:{icon:""},on:{click:function(t){e.openNewTable=!0}}},[n("mu-icon",{attrs:{value:"add"}})],1)],1)],1)],2),e.editType>0?n("mu-container",[n("mu-text-field",{attrs:{label:"name"},model:{value:e.selectedValue.name,callback:function(t){e.$set(e.selectedValue,"name",t)},expression:"selectedValue.name"}}),n("mu-text-field",{attrs:{label:"type"},model:{value:e.selectedValue.type,callback:function(t){e.$set(e.selectedValue,"type",t)},expression:"selectedValue.type"}}),2==e.editType?[n("mu-text-field",{attrs:{label:"index_type"},model:{value:e.selectedValue.index_type,callback:function(t){e.$set(e.selectedValue,"index_type",t)},expression:"selectedValue.index_type"}})]:e._e(),n("mu-divider"),n("H2",{staticStyle:{display:"inline","margin-right":"20px"}},[e._v("struct "+e._s(e.editStruct.name))]),n("mu-text-field",{attrs:{label:"base"},model:{value:e.editStruct.base,callback:function(t){e.$set(e.editStruct,"base",t)},expression:"editStruct.base"}}),n("br"),n("mu-button",{on:{click:function(t){e.editStruct.fields.push({name:"",type:""})}}},[n("mu-icon",{attrs:{value:"add"}}),e._v("添加field")],1),n("mu-data-table",{attrs:{columns:[{title:"name",name:"name"},{title:"type",name:"type"}],data:e.editStruct.fields},scopedSlots:e._u([{key:"default",fn:function(t){return[n("td",[n("mu-text-field",{attrs:{placeholder:"输入字段名"},model:{value:t.row.name,callback:function(n){e.$set(t.row,"name",n)},expression:"scope.row.name"}})],1),n("td",[n("mu-text-field",{attrs:{placeholder:"选择字段类型"},model:{value:t.row.type,callback:function(n){e.$set(t.row,"type",n)},expression:"scope.row.type"}})],1)]}}])}),n("mu-button",{on:{click:function(t){e.editStruct.fields.push({name:"",type:""})}}},[n("mu-icon",{attrs:{value:"add"}}),e._v("添加field")],1)],2):e._e()],1):e._e(),1===e.active?n("pre",{ref:"jsonContent",attrs:{contenteditable:"true"}},[e._v(e._s(e.json))]):e._e()],1)},[],!1,null,null,null);u.options.__file="index.vue";t.default=u.exports}}]);