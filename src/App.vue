<template>
  <div>
    <header v-if="page == 0">
      <picture>
        <source srcset="./assets/logo.png" alt="noobping" type="image/png" />
        <source srcset="./assets/logo.webp" alt="noobping" type="image/webp" />
        <img src="./assets/logo.webp" alt="noobping" />
      </picture>
      <h1>Lawnmower</h1>
      <p>
        Use the lawnmower (robot) and cut the grass and watch out for stones.
      </p>
      <btn></btn>
    </header>

    <colors v-else-if="page == 1"></colors>
    <ai v-else-if="page == 2"></ai>
    <algorithm v-else-if="page == 3 && ai"></algorithm>
    <controlloptions
      v-else-if="page == 3 && !ai"
      v-model="show"
    ></controlloptions>
    <level v-else-if="page == 4"></level>

    <div v-else>
      <game v-if="page < 0"></game>
      <div v-if="ai" class="ctl">
        <lineai v-if="algorithm == 'line'" :show="run"></lineai>
        <none v-else :show="run"></none>
      </div>
      <controlls v-else :show="show" class="ctl"></controlls>
    </div>

    <footer>
      <copyright v-if="page >= 0 && page < 5"></copyright>
    </footer>
  </div>
</template>

<script>
import store from "@/store";
import ai from "@/components/menu/ai";
import algorithm from "@/components/menu/algorithm";
import btn from "@/components/btn";
import colors from "@/components/menu/colors";
import controlloptions from "@/components/menu/controlls";
import controlls from "@/components/game/controlls";
import copyright from "@/components/copyright";
import game from "@/components/game";
import level from "@/components/menu/map";
import lineai from "@/components/ai/line";
import none from "@/components/ai/none";
import settings from "@/components/menu/settings";

export default {
  name: "App",
  components: {
    ai,
    algorithm,
    btn,
    colors,
    controlloptions,
    controlls,
    copyright,
    game,
    level,
    lineai,
    none,
    settings
  },
  mounted() {
    store.commit("map_x", window.innerWidth / 40);
    store.commit("map_y", window.innerHeight / 40 - 1);
  },
  beforeDestroy() {
    store.commit("page", 1);
  },
  computed: {
    page() {
      return store.state.show.page;
    },
    show: {
      get: function() {
        return store.state.show.controlls;
      },
      set: function(n) {
        store.commit("show", n);
      },
    },
    ai() {
      return store.state.ai.enabled;
    },
    algorithm() {
      return store.state.ai.algorithm;
    },
    run() {
      return store.state.run;
    },
  },
  watch: {
    page(_) {},
    show(_) {},
    ai(_) {},
    algorithm(_) {},
    run(_) {},
  },
};
</script>

<style scoped>
header,
picture,
img {
  margin: auto;
  text-align: center;
}
picture,
img {
  width: 10em;
}
header {
  margin-top: 5em;
  padding: 1em;
  padding-bottom: 1em;
}
@media (prefers-color-scheme: light) {
  header,
  footer {
    background: #fff;
  }
}
@media (prefers-color-scheme: dark) {
  header,
  footer {
    background: #121212;
  }
}
.ctl {
  position: fixed;
  left: 50%;
  bottom: 20px;
  transform: translate(-50%, -50%);
}
</style>

<style>
* {
  font-family: "Courier New", Courier, monospace;
  margin: 0;
  padding: 0;
  border-spacing: 0;
}
html {
  height: 100%;
}
body {
  overscroll-behavior-y: contain;
  -webkit-background-size: initial;
  -moz-background-size: initial;
  -o-background-size: initial;
  background-size: initial;
  background-repeat: repeat;
}
@media (prefers-color-scheme: light) {
  p {
    color: #121212;
  }
  body {
    background: linear-gradient(
        rgba(255, 255, 255, 0.1),
        rgba(255, 255, 255, 0.1)
      ),
      url("/img/tile/grass.png") repeat center center;
  }
}
@media (prefers-color-scheme: dark) {
  p {
    color: #fff;
  }
  body {
    background: linear-gradient(
        rgba(18, 18, 18, 0.5),
        rgba(18, 18, 18, 0.5)
      ),
      url("/img/tile/grass.png") repeat center center;
  }
}
h1,
h2 {
  color: #080;
}
h1,
h2,
header p,
section p {
  text-align: center;
}
</style>
