<template lang="pug">
    mu-container
        mu-dialog(:open.sync='openNewConfig' title="新增FibosClient配置")
          mu-text-field(v-model='newConfig.chainId' label='chainId')
          br
          mu-text-field(v-model='newConfig.keyProvider' label='keyProvider')
          br
          mu-text-field(v-model='newConfig.httpEndpoint' label='httpEndpoint')
          mu-button(@click='addNewConfig' color="primary"  slot="actions" ) 添加
          mu-button(@click='openNewConfig=false' slot="actions" ) 取消
        mu-text-field(label='当前账号名称' v-model='$store.state.currentAcc' @change='value=>$store.commit("update",{currentAcc:value})')
        mu-text-field(label='部署合约账号' v-model='$store.state.contractAcc' @change='value=>$store.commit("update",{contractAcc:value})')
        br
        mu-select(label='选择部署合约的js文件' v-model='$store.state.contractJS' @change='value=>$store.commit("update",{contractJS:value})')
          mu-option(v-for='(file,filename) in $store.state.files' v-if="filename.endsWith('.js')" :label='filename' :value='filename' :key='filename')
        mu-select(label='选择部署合约的abi文件'  v-model='$store.state.contractABI' @change='value=>$store.commit("update",{contractABI:value})')
          mu-option(v-for='(file,filename) in $store.state.files' v-if="filename.endsWith('.json')" :label='filename' :value='filename' :key='filename')
        mu-select(label='选择运行测试的js文件' v-model='$store.state.testJS'  @change='value=>$store.commit("update",{testJS:value})')
          mu-option(v-for='(file,filename) in $store.state.files' v-if="filename.endsWith('.js')" :label='filename' :value='filename' :key='filename')
        h2 FibosClient 配置
          mu-button(icon @click='openNewConfig=true')
            mu-icon(value='add')
        mu-data-table(:data='$store.state.fibosList' :columns='columns' selectable :selects.sync="fselects" @row-click="selectFibos")
          template( slot-scope="scope")
            td {{scope.row.chainId}}
            td {{scope.row.keyProvider}}
            td {{scope.row.httpEndpoint}}
            td
              mu-button(flat v-if="$store.state.currentFibosIndex!=scope.$index" @click='$store.commit("update",{currentFibosIndex:scope.$index})') 选择
              mu-button(icon @click='$store.commit("removeFibosConfig",scope.$index)')
                mu-icon(value='delete')
</template>
<script>
export default {
  data() {
    return {
      openNewConfig: false,
      newConfig: {},
      columns: [
        { title: "chainId", name: "chainId" },
        { title: "keyProvider", name: "keyProvider" },
        { title: "httpEndpoint", name: "httpEndpoint" },
        { title: "操作" }
      ],
      fselects: [this.$store.state.currentFibosIndex]
    };
  },
  methods: {
    addNewConfig() {
      this.$store.commit("addFibosConfig", this.newConfig);
    },
    selectFibos(index, row) {
      this.fselects = [index];
      this.$store.commit("update", { currentFibosIndex: index });
    }
  }
};
</script>
