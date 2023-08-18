<template>
  <form>
    <fieldset>
      <legend>Width {{ x }}</legend>
      <input class="slider" v-model="x" type="range" min="10" :max="width()" />
    </fieldset>
    <fieldset>
      <legend>height {{ y }}</legend>
      <input class="slider" v-model="y" type="range" min="10" :max="height()" />
    </fieldset>
    <fieldset>
      <legend>rocks {{ description }}</legend>
      <input class="slider" v-model="factor" type="range" min="1" :max="5" />
    </fieldset>
  </form>
</template>

<script>
import store from "@/store";

export default {
  name: "menu-settings",
  data: () => {
    return {
      description: "easy",
    };
  },
  computed: {
    x: {
      get: function() {
        return store.state.map.size.x;
      },
      set: function(n) {
        store.commit("map_x", n);
      },
    },
    y: {
      get: function() {
        return store.state.map.size.y;
      },
      set: function(n) {
        store.commit("map_y", n);
      },
    },
    factor: {
      get: function() {
        const n = store.state.map.factor * 10;
        this.describe(n);
        return n;
      },
      set: function(n) {
        store.commit("factor", n / 10);
        this.describe(n / 10);
      },
    },
  },
  watch: {
    x(_) {},
    y(_) {},
    factor(_) {},
  },
  methods: {
    width() {
      return window.innerWidth / 40;
    },
    height() {
      return window.innerHeight / 40 - 1;
    },
    describe(n) {
      if (n < 2) this.description = "easy";
      else if (n == 2) this.description = "balanced";
      else if (n == 3) this.description = "hard";
      else this.description = "impossible";
    },
  },
};
</script>

<style scoped>
form {
  margin-top: 5em;
  padding: 1em;
  padding-bottom: 1em;
  max-width: 25em;
  text-align: center;
}
@media (prefers-color-scheme: light) {
  form {
    background: #fff;
  }
  legend {
    color: #121212;
  }
  .slider {
    background: #eee;
  }
}
@media (prefers-color-scheme: dark) {
  form {
    background: #121212;
  }
  legend {
    color: #fff;
  }
  .slider {
    background: #252525;
  }
}
fieldset {
  border: none;
  margin: 1em;
}
input {
  width: 100%;
}
.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 25px;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}
.slider:hover {
  opacity: 1;
}
.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  background: #080;
  cursor: pointer;
}
.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #080;
  cursor: pointer;
}
</style>
