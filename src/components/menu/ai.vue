<template>
  <section>
    <h2>AI</h2>
    <label for="ai">
      <input type="checkbox" id="ai" v-model="ai" />
      <p>
        {{
          ai
            ? "Let the AI play and watch it's gameplay"
            : "Play manually and disable the AI"
        }}.
      </p>
      <h1>
        <font-awesome-icon :icon="ai ? 'robot' : 'gamepad'" />
      </h1>
    </label>

    <btn></btn>
  </section>
</template>

<script>
import store from "@/store";
import btn from "@/components/btn";

export default {
  name: "menu-ai",
  components: {
    btn
  },
  computed: {
    ai: {
      get: function() {
        return store.state.ai.enabled;
      },
      set: function(n) {
        store.commit("ai", n);
      },
    },
  },
  watch: {
    ai(_) {},
  },
};
</script>

<style scoped>
section {
  margin-top: 5em;
  padding: 1em;
  padding-bottom: 1em;
  text-align: center;
  font-weight: 100%;
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
input[type="checkbox"],
input[type="radio"] {
  display: none;
}
label {
  cursor: pointer;
  font-size: 1em;
  padding: 0.5em;
  margin: 0.5em;
  display: block;
}
p {
  max-width: 25em;
  text-align: center;
  margin: auto;
}
.selected {
  color: #080;
  font-weight: bold;
}
@media only screen and (min-width: 600px) {
  h1 {
    font-size: 5em;
  }
  p {
    font-size: 1em;
  }
}
</style>
