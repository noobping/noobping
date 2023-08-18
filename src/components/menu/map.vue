<template>
  <section>
    <h2>Map Size</h2>
    <p>
      Set the size of your room. A small room is faster than a big room. But a
      big room is be more fun.
    </p>
    <settings></settings>
    <btn end></btn>
  </section>
</template>

<script>
import store from "@/store";
import btn from "@/components/btn";
import settings from "./settings";

export default {
  name: "menu-map",
  components: {
    btn,
    settings,
  },
};
</script>

<style scoped>
section {
  margin-top: 5em;
  padding: 1em;
  padding-bottom: 1em;
}
@media (prefers-color-scheme: light) {
  section {
    background: #fff;
  }
}
@media (prefers-color-scheme: dark) {
  section {
    background: #121212;
  }
}
section * {
  margin: auto;
  text-align: center;
}
</style>
