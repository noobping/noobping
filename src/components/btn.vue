<template>
  <p>
    <button v-on:click="back()" v-if="page > 1" :disabled="loading">
      <font-awesome-icon icon="chevron-left" />
      {{ " " }}Back
    </button>
    <button
      v-on:click="next()"
      v-if="page > 0 && end == undefined"
      :disabled="loading"
    >
      Next
      <font-awesome-icon icon="chevron-right" />
    </button>
    <button
      v-on:click="next()"
      v-if="page == 0 && end == undefined"
      :disabled="loading"
    >
      <font-awesome-icon icon="play" />
      {{ " " }}Play
    </button>
    <button v-on:click="play()" v-if="page > 0" :disabled="loading">
      <font-awesome-icon icon="play" />
      {{ " " }}Start
    </button>
    <button v-on:click="quit()" v-if="page < 0" :disabled="loading">
      <font-awesome-icon icon="redo" />
      {{ " " }}Retry
    </button>
    <button v-on:click="disable()" v-if="page < 0 && ai" :disabled="loading">
      <font-awesome-icon icon="gamepad" />
      {{ " " }}Play manually
    </button>
  </p>
</template>

<script>
import Vue from "vue";
import store from "@/store";

export default {
  name: "btn",
  props: {
    id: undefined,
    end: undefined,
    forward: undefined,
    backward: undefined,
  },
  data: () => {
    return {
      loading: true,
    };
  },
  mounted() {
    this.loading = false;
    // location.reload();
  },
  computed: {
    page() {
      return store.state.show.page;
    },
    ai() {
      return store.state.ai.enabled;
    },
  },
  watch: {
    page(_) {
      this.loading = false;
    },
    ai(_) {},
  },
  methods: {
    play() {
      this.loading = true;
      store.commit("page", -1);
    },
    quit() {
      this.loading = true;
      store.commit("page", 4);
    },
    disable() {
      store.commit("ai", false);
      this.quit();
    },
    next() {
      this.loading = true;
      let n = this.id != undefined ? this.id : this.page;
      n += this.forward !== undefined && this.forward ? 2 : 1;
      if (this.end != undefined) {
        n = "-1";
      }
      store.commit("page", n);
    },
    back() {
      this.loading = true;
      let n = this.id != undefined ? this.id : this.page;
      n -= this.backward !== undefined && this.backward ? 2 : 1;
      store.commit("page", n);
    },
  },
};
</script>

<style scoped>
button,
a {
  padding: 0.5em;
  margin: 1em;
  font-size: 1em;
  background: transparent;
  border: 0.1em solid #080;
  text-decoration: none;
}
button:hover,
button:active,
a:hover,
a:active {
  background: #080;
  color: white;
  cursor: pointer;
}
button:disabled {
  border: 0.1em solid transparent;
}
@media (prefers-color-scheme: light) {
  a, button {
    color: #080;
    background: #fff;
  }
}
@media (prefers-color-scheme: dark) {
  a, button {
    color: #fff;
    background: #121212;
  }
}
</style>
