<template>
  <section>
    <h2>Controlls</h2>
    <p>
      <label for="value">
        <input
          type="checkbox"
          id="value"
          v-bind:checked="value"
          v-on:input="$emit('input', !value)"
        />
        Move the robot with the arrow keys or WASD.
        <b>{{ value ? "show" : "Hide" }}</b> buttons while playing.
      </label>
    </p>
    <controlls v-show="value">Loading controlls...</controlls>
    <btn></btn>
  </section>
</template>

<script>
import store from "@/store";
import btn from "@/components/btn";
import controlls from "@/components/game/controlls";

export default {
  name: "menu-controlls",
  components: {
    btn,
    controlls,
  },
  props: ['value']
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
</style>