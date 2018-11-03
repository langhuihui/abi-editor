<template lang='pug'>
#app
  mu-drawer(open width="200")
    mu-list(@change="selectFile")
      mu-list-item()
        mu-list-item-action 
          mu-button(@click='creating=true')
            mu-icon(value="add")
            | 新建abi
      mu-list-item(v-if='creating')
        mu-list-item-action
          mu-text-field(v-model='filename' placeholder="请输入文件名" @change="createFile")
      mu-list-item(v-for="(file,name) in $store.state.files" :key="name" button :value="name")
        mu-list-item-action(v-if='selectedName==name')
          mu-icon(value='create')
        mu-list-item-title {{name}}
        mu-list-item-action
          mu-button(@click='$store.commit("deleteFile",name);$forceUpdate();' icon)
            mu-icon(value='delete')
  mu-appbar.appbar
    div(slot='left' class='mu-appbar-title') abi编辑器 {{selectedName?'-'+selectedName+'.abi':''}}
  nuxt.content.appbar
</template>
<script>
export default {
  data() {
    return {
      creating: false,
      filename: "",
      selectedFile: null,
      selectedName: ""
    };
  },
  mounted() {
    this.selectFile("default");
  },
  methods: {
    createFile(value) {
      this.creating = false;
      if (this.$store.state.files[value])
        this.selectedFile = this.$store.state.files[value];
      else {
        let newFile = {
          version: "eosio::abi/1.0",
          types: [],
          structs: [],
          actions: [],
          tables: []
        };
        this.$store.commit("addFile", { [value]: newFile });
        this.selectFile(value);
      }
      this.filename = "";
    },
    selectFile(name) {
      if (typeof name == "string") {
        this.selectedFile = this.$store.state.files[name];
        this.selectedName = name;
        this.$router.push({ name: "index", query: { filename: name } });
      }
    }
  }
};
</script>

<style>
.content {
  margin-top: 20px;
  height: -webkit-calc(100vh - 84px);
  overflow: hidden auto;
  max-width: -webkit-calc(100vw - 200px);
}
.appbar {
  margin-left: 200px;
}
</style>
