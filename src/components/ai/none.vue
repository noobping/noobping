<template>
  <div v-if="show">
    <p>do nothing at all</p>
    <btn></btn>
  </div>
</template>

<script>
import store from "@/store";
import btn from "@/components/btn";

export default {
  name: "ai-none",
  components: {
    btn
  },
  props: {
    show: undefined,
  },
  created() {
    document.addEventListener("keyup", this.controlls);
  },
  destroyed() {
    document.removeEventListener("keyup", this.controlls);
  },
  methods: {
    controlls(n) {
      // ok
      if (
        n.key == "Enter" ||
        n.key == "PageUp" ||
        n.key == "Escape" ||
        n.key == "Delete" ||
        n.key == "Home" ||
        n.key == "Backspace" ||
        n.key == "PageDown"
      ) {
        store.commit("next_scene");
      }
    },
  },
};
</script>

<style scoped>
div {
  text-align: center;
  margin: auto;
  padding-top: 1em;
}
@media (prefers-color-scheme: light) {
  p {
    color: #121212;
  }
}
@media (prefers-color-scheme: dark) {
  p {
    color: #fff;
  }
}
</style>
