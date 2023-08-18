<template>
  <section>
    <h2>Tactics</h2>
    <p v-bind:class="{ selected: algorithm == 'none' }">
      <label for="none">
        <font-awesome-icon v-if="algorithm == 'none'" icon="chevron-right" />
        <input type="radio" id="none" value="none" v-model="algorithm" />
        none
      </label>
    </p>

    <p v-bind:class="{ selected: algorithm == 'line' }">
      <label for="line">
        <font-awesome-icon v-if="algorithm == 'line'" icon="chevron-right" />
        <input type="radio" id="line" value="line" v-model="algorithm" />
        a straight line forward
      </label>
    </p>

    <btn></btn>
  </section>
</template>

<script>
import store from "@/store";
import btn from "@/components/btn";

export default {
  name: "menu-algorithm",
  components: {
    btn
  },
  computed: {
    algorithm: {
      get: function() {
        return store.state.ai.algorithm;
      },
      set: function(n) {
        store.commit("algorithm", n);
      },
    },
  },
  watch: {
    algorithm(_) {},
  },
};
</script>

<style scoped>
section {
  margin-top: 5em;
  background: #ffffff;
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
p {
  max-width: 25em;
  text-align: center;
  margin: auto;
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
.selected {
  color: #080;
  font-weight: bold;
}
h2 {
  color: #080;
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
