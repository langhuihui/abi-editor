<template lang='pug'>
#app
  mu-drawer(open width="200")
    mu-list(@change="selectFile")
      mu-list-item()
        mu-list-item-action 
          mu-button(@click='creating=true')
            mu-icon(value="add")
            | File
      mu-list-item(v-if='creating')
        mu-list-item-action
          mu-text-field(v-model='filename' placeholder="请输入文件名" @change="createFile")
      mu-list-item(v-for="(file,name) in $store.state.files" :key="name" button :value="name")
        mu-list-item-title(:class='selectedName==name?"selected":""') {{name}}
        mu-list-item-action
          mu-button(@click='$store.commit("deleteFile",name);$forceUpdate();' icon)
            mu-icon(value='delete')
  mu-appbar.appbar
    div(slot='left' class='mu-appbar-title') {{selectedName?selectedName+' - ':''}} Fibos智能合约测试
    mu-button(slot='left' flat @click="deploy") 部署合约
    mu-button(slot='left' flat @click="test") 运行测试 
    mu-button(slot='right' flat to='config') 配置
  nuxt.content.appbar
</template>
<script>
import FIBOS from "fibos.js";
export default {
  data() {
    return {
      creating: false,
      filename: "",
      selectedName: ""
    };
  },
  watch: {
    $route(to, from) {
      switch (to.name) {
        case "config":
          this.selectFile();
      }
    }
  },
  mounted() {
    for (let filename in this.$store.state.files) {
      this.selectFile(filename);
      break;
    }
  },
  methods: {
    createFile(value) {
      this.creating = false;
      if (this.$store.state.files[value]) {
      } else {
        let newFile = value.endsWith("json")
          ? {
              version: "eosio::abi/1.0",
              types: [],
              structs: [],
              actions: [],
              tables: []
            }
          : "";
        this.$store.commit("addFile", { [value]: newFile });
        this.selectFile(value);
      }
      this.filename = "";
    },
    selectFile(name) {
      if (typeof name == "string") {
        this.selectedName = name;
        this.$router.push({
          name: name.endsWith("json") ? "abi" : "index",
          query: { filename: name }
        });
      } else {
        this.selectedName = null;
      }
    },
    async deploy() {
      const client = this.$store.getters.currentFibos;
      try {
        const zip = await FIBOS.compileCode(
          this.$store.getters.currentContract
        );
        await client.setcode(this.$store.state.contractAcc, 0, 0, zip);
        await client.setabi(
          this.$store.state.contractAcc,
          this.$store.getters.currentABI
        );
        this.$toast.success("部署完成");
      } catch (e) {
        this.$toast.error(e.message || e);
      }
    },
    async test() {
      const client = this.$store.getters.currentFibos;
      try {
        const contract = await client.contract(this.$store.state.contractAcc);
        const account = this.$store.state.currentAcc;
        eval(this.$store.getters.currentTest);
      } catch (e) {
        this.$toast.error(e.message || e);
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
.selected {
  font-weight: bold;
}
</style>
