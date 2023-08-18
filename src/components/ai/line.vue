<template>
  <div v-if="show">
    <p>
      {{ move.name }}
      <span v-if="turn > 1">({{ turn }})</span>
    </p>
    <btn></btn>
  </div>
</template>

<script>
import store from "@/store";
import btn from "@/components/btn";

export default {
  name: "ai-line",
  components: {
    btn
  },
  props: {
    show: undefined,
  },
  data: function() {
    return {
      move: {
        name: "waiting",
        id: -1,
      },
      previous: {
        x: 1,
        y: 1,
      },
      turn: 0,
    };
  },
  created() {
    document.addEventListener("keyup", this.controlls);
  },
  destroyed() {
    document.removeEventListener("keyup", this.controlls);
  },
  mounted() {
    setTimeout(() => {
      this.ready_loop();
    }, 500);
  },
  beforeDestroy() {
    this.run = false;
  },
  computed: {
    robot() {
      return store.state.player;
    },
    ai() {
      return store.state.ai.enabled;
    },
    tiles() {
      return store.state.map.tiles;
    },
  },
  watch: {
    robot(_) {},
    ai(_) {},
    tiles(_) {},
  },
  methods: {
    ready_loop() {
      setTimeout(() => {
        if (this.show && this.ai) this.controll_loop();
        else this.ready_loop();
      }, 500);
    },
    controll_loop() {
      setTimeout(() => {
        if (this.previous.x == this.robot.x && this.previous.y == this.robot.y)
          this.turn++;

        if (this.turn < 0 || this.turn > 2 || this.forecast(this.move.id)) {
          this.turn = 1;
          Math.random() >= 0.5 ? this.move.id++ : this.move.id--;
          if (this.move.id > 4) this.move.id = 0;
        }

        this.move.id = Math.abs(this.move.id);
        this.action(this.move.id);

        if (this.show && this.ai) this.controll_loop();
      }, 500);
    },
    action(n) {
      this.previous.x = this.robot.x;
      this.previous.y = this.robot.y;

      if (n == 0 || n == "down") {
        this.move.name = "down";
        store.commit("down");
      } else if (n == 1 || n == "right") {
        this.move.name = "right";
        store.commit("right");
      } else if (n == 2 || n == "up") {
        this.move.name = "up";
        store.commit("up");
      } else if (n == 3 || n == "left") {
        this.move.name = "left";
        store.commit("left");
      } else this.move.name = "waiting";
    },
    forecast(n) {
      const X = this.robot.x;
      const Y = this.robot.y;
      let o = { x: X, y: Y };

      if (n == 0) o.y++; // down
      if (n == 1) o.x++; // right
      if (n == 2) o.y--; // up
      if (n == 3) o.x--; // left

      const tile = this.tiles.get("x" + o.x + "y" + o.y);
      return tile != undefined && tile.path;
    },
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
