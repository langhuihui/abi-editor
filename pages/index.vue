<template lang='pug'>
mu-container(ref='editorContainer')
</template>
<script>
import { editor } from "monaco-editor";
export default {
  data() {
    return {
      jsonEditor: null
    };
  },
  watch: {
    $route(to, from) {
      if (to.name == "index") {
        this.jsonEditor.setValue(this.$store.state.files[to.query.filename]);
      }
    }
  },
  mounted() {
    this.jsonEditor = editor.create(this.$refs.editorContainer, {
      value: this.$store.state.files[this.$route.query.filename],
      language: "javascript"
    });
    this.jsonEditor.onKeyUp(e => {
      this.$store.commit("addFile", {
        [this.$route.query.filename]: this.jsonEditor.getValue()
      });
    });
  }
};
</script>
