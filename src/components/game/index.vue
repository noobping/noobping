<template>
  <div v-touch:swipe="swipe">
    <progress v-if="loading"></progress>
    <progress v-else :value="cleaned" :max="tiles.size"></progress>

    <table>
      <tbody>
        <tr v-for="y in max_y" :key="y">
          <td v-for="x in max_x" :key="x">
            <tile :x="x" :y="y"></tile>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="gameover" v-if="cleaned >= tiles.size && !loading">
      <h1>Game Over</h1>
      <p>
        {{ ai ? 'The AI' : 'You' }} cleaned {{ ai ? 'the' : 'your' }} room with {{ cleaned }} tiles. 
        The scores are calculated with the time, difeculty and efficiency of {{ ai ? 'the' : 'your' }} gameplay.
      </p>
      <p>
        <ol>
          <li v-for="(v, k) in time" :key="k">Round {{ k +1 }}: {{ v }} points</li>
        </ol>
      </p>
      <btn id="4"></btn>
      <copyright></copyright>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import btn from "@/components/btn";
import copyright from "@/components/copyright";
import tile from "./tile";

export default {
  name: "game",
  components: {
    btn,
    copyright,
    tile
  },
  data: () => {
    return {
      cleaned: 0,
      loading: true
    };
  },
  mounted() {
    this.cleaned = 0;
    store.commit("start_game");
    setTimeout(() => {
      this.load_loop();
    }, 1000);
  },
  computed: {
    max_x() {
      return store.state.map.size.x;
    },
    max_y() {
      return store.state.map.size.y;
    },
    tiles() {
      return store.state.map.tiles;
    },
    time() {
      return store.state.time.hystory;
    },
    ai() {
      return store.state.ai.enabled;
    }
  },
  watch: {
    max_x(_) {},
    max_y(_) {},
    tiles(_) {},
    time(_) {},
    ai(_) {}
  },
  methods: {
    load_loop() {
      setTimeout(() => {
        this.loading = this.tiles.size < this.max_x * this.max_y;
        this.$forceUpdate();
        if (this.loading) this.load_loop();
        else this.game_loop();
      }, 1000);
    },
    game_loop() {
      setTimeout(() => {
        let counter = 0;
        this.tiles.forEach(function(v, _) {
          if (v.clean || v.wall) counter++;
        });
        this.cleaned = counter;
        if (counter < this.tiles.size) this.game_loop();
        else store.commit("stop_game");
      }, 1000);
    },
    swipe(n) {
      if (!this.ai) {
        if (n == "left") store.commit("left");
        else if (n == "right") store.commit("right");
        else if (n == "bottom") store.commit("down");
        else if (n == "top") store.commit("up");
      }
    }
  }
};
</script>

<style scoped>
p {
  margin-bottom: 1em;
}
@media (prefers-color-scheme: light) {
  table {
    background: white;
  }
  .gameover {
    background: rgba(255, 255, 255, 0.75);
  }
}
@media (prefers-color-scheme: dark) {
  table {
    background: #121212;
  }
  .gameover {
    background: rgba(18, 18, 18, 0.75);
  }
}
.gameover {
  position: absolute;
  top: 5em;
  width: 100%;
  text-align: center;
  left: 0;
}
progress {
  width: 100% !important;
  height: 20px;
  background-color: transparent;
  border: transparent;
}
progress::-webkit-progress-bar {
  background-color: transparent;
}
progress::-webkit-progress-value {
  background-color: #080;
}
progress::-moz-progress-bar {
  background-color: #080;
}
</style>