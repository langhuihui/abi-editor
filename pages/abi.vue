<template lang='pug'>
mu-container
    mu-dialog(:open.sync='openNewType' title="新增type")
      mu-text-field(v-model='newType.new_type_name' label='new_type_name')
      mu-select(v-model='newType.type' label='type')
        mu-option(label='name' value='name')
      mu-button(@click='addNewType' color="primary"  slot="actions" ) 添加
      mu-button(@click='openNewType=false' slot="actions" ) 取消
    mu-dialog(:open.sync='openNewAction' title="新增action")
      mu-text-field(v-model='newAction.name' label='name')
      mu-text-field(v-model='newAction.type' label='type')
      mu-button(@click='addNewAction' color="primary"  slot="actions" ) 添加
      mu-button(@click='openNewAction=false' slot="actions" ) 取消
    mu-dialog(:open.sync='openNewTable' title="新增type")
      mu-text-field(v-model='newTable.name' label='name' )
      mu-text-field(v-model='newTable.type' label='type' )
      mu-text-field(v-model='newTable.index_type' label='index_type' )
      mu-button(@click='addNewTable' color="primary"  slot="actions" ) 添加
      mu-button(@click='openNewTable=false' slot="actions" ) 取消
    mu-tabs( :value.sync="active")
      mu-tab 设计器
      mu-tab JSON
    mu-flex(v-if='active===0 && file!=null')
      mu-list(@change='listOnChange' style="width:350px;height:-webkit-calc(100vh - 160px);overflow: hidden auto")
        mu-sub-header(inset) version
        mu-list-item
          mu-text-field(v-model='file.version')
        mu-sub-header(inset) types
        mu-list-item(v-for='(type,i) of file.types' :key='"type"+i')
          mu-list-item-content
            mu-list-item-title {{type.new_type_name}}
            mu-list-item-sub-title type:{{type.type}}
          mu-list-item-action
            mu-button(icon @click='file.types.splice(i,1)')
              mu-icon(value='delete')
        mu-list-item
          mu-list-item-title 新增type
          mu-list-item-action
            mu-button(icon @click='openNewType=true')
              mu-icon(value='add')
        mu-sub-header(inset) actions
        mu-list-item(v-for='(action,i) of file.actions' :key='"action"+i' button :value="action")
          mu-list-item-action(v-if='selectedValue==action')
            mu-icon(value='edit')
          mu-list-item-content
            mu-list-item-title {{action.name}}
            mu-list-item-sub-title type:{{action.type}}
          mu-list-item-action
            mu-button(icon @click='file.actions.splice(i,1); editType = 0;')
              mu-icon(value='delete')
        mu-list-item
          mu-list-item-title 新增action
          mu-list-item-action
            mu-button(icon @click='openNewAction=true')
              mu-icon(value='add')
        mu-sub-header(inset) tables
        mu-list-item(v-for='(table,i) of file.tables' :key='"tables"+i' button :value="table")
          mu-list-item-action(v-if='selectedValue==table')
            mu-icon(value='edit')
          mu-list-item-content
            mu-list-item-title {{table.name}}
            mu-list-item-sub-title type:{{table.type}} index_type:{{table.index_type}}
          mu-list-item-action
            mu-button(icon @click='file.tables.splice(i,1); editType = 0;')
              mu-icon(value='delete')
        mu-list-item
          mu-list-item-title 新增table
          mu-list-item-action
            mu-button(icon @click='openNewTable=true')
              mu-icon(value='add')
      mu-container(v-if="editType>0")
        mu-text-field(v-model='selectedValue.name' label='name')
        mu-text-field(v-model='selectedValue.type' label='type')
        template(v-if='editType == 2')
            mu-text-field(v-model='selectedValue.index_type' label='index_type')
        mu-divider
        H2(style={display:"inline",'margin-right':'20px'}) struct {{editStruct.name}}
        mu-text-field(v-model='editStruct.base' label='base')
        br
        mu-button(@click='editStruct.fields.push({name:"",type:""})')
          mu-icon(value='add')
          | 添加field
        mu-data-table(:columns='[{title:"name",name:"name"},{title:"type",name:"type"}]' :data="editStruct.fields")
          template( slot-scope="scope")
            td
              mu-text-field(v-model='scope.row.name' placeholder='输入字段名')
            td
              mu-text-field(v-model='scope.row.type' placeholder='选择字段类型')
        mu-button(@click='editStruct.fields.push({name:"",type:""})')
          mu-icon(value='add')
          | 添加field
    .editorContainer(v-show='active===1' ref='jsonContent')
      //- | {{json}}
</template>
<style scoped>
.editorContainer {
  width: 100%;
  height: -webkit-calc(100vh - 160px);
}
</style>

<script>
import { editor } from "monaco-editor";
export default {
  data() {
    return {
      file: null,
      active: 1,
      newType: { type: "", new_type_name: "" },
      newAction: { name: "", type: "" },
      newTable: {
        name: "",
        type: "",
        index_type: "",
        key_names: [],
        key_types: []
      },
      openNewType: false,
      openNewAction: false,
      openNewTable: false,
      editType: 0,
      selectedValue: null,
      editStruct: null,
      jsonEditor: null
    };
  },
  computed: {
    json() {
      return JSON.stringify(this.file, null, 4);
    }
  },
  watch: {
    active(nv, ov) {
      if (nv == 1) {
        this.jsonEditor.setValue(this.json);
      }
      if (ov == 1) {
        try {
          // this.file = JSON.parse(this.$refs.jsonContent.innerHTML);
          this.file = JSON.parse(this.jsonEditor.getValue());
          this.$store.commit("addFile", {
            [this.$route.query.filename]: this.file
          });
        } catch (e) {
          alert("JSON格式错误");
        }
      }
    },
    $route(to, from) {
      if (to.name == "abi") {
        this.file = this.$store.state.files[to.query.filename];
        this.editType = 0;
      }
    }
  },
  mounted() {
    this.file = this.$store.state.files[this.$route.query.filename];
    this.jsonEditor = editor.create(this.$refs.jsonContent, {
      value: this.json,
      language: "json"
    });
    this.active = 0;
  },
  methods: {
    listOnChange(value) {
      if (value.index_type) {
        this.editType = 2;
        this.selectedValue = value;
        this.editStruct = this.file.structs.find(x => x.name == value.type);
      } else if (value.name) {
        this.editType = 1;
        this.selectedValue = value;
        this.editStruct = this.file.structs.find(x => x.name == value.type);
      } else {
        this.editType = 0;
        this.selectedValue = null;
      }
    },
    addNewType() {
      this.file.types.push(this.newType);
      this.newType = { type: "", new_type_name: "" };
    },
    addNewAction() {
      if (!this.file.structs.find(x => x.name == this.newAction.type)) {
        this.file.structs.push({
          name: this.newAction.type,
          base: "",
          fields: []
        });
      }
      this.file.actions.push(this.newAction);
      this.newAction = {
        name: "",
        type: ""
      };
    },
    addNewTable() {
      if (!this.file.structs.find(x => x.name == this.newTable.type)) {
        this.file.structs.push({
          name: this.newTable.type,
          base: "",
          fields: []
        });
      }
      this.file.tables.push(this.newTable);
      this.newTable = {
        name: "",
        type: "",
        index_type: "",
        key_names: [],
        key_types: []
      };
    }
  }
};
</script>
