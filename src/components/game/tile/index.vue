<template>
  <div
    class="tile"
    style="background-size: contain;"
    v-bind:style="{ background: robot }"
  ></div>
</template>

<script>
import store from "@/store";

export default {
  name: "tile",
  props: {
    x: Number,
    y: Number,
  },
  created() {
    store.commit("add", { x: this.x, y: this.y, p: this });
  },
  mounted() {
    this.background = "transparent";
    this.clean = false;
    this.path = false;
    this.current = false;
    this.wall = Math.random() <= this.factor;
  },
  destroyed() {
    store.commit("remove", { x: this.x, y: this.y });
  },
  data: () => {
    return {
      clean: false,
      path: false,
      current: false,
      wall: false,
    };
  },
  computed: {
    factor() {
      return store.state.map.factor;
    },
    robot() {
      this.move(store.state.player);
      return this.color();
    },
  },
  watch: {
    factor(_) {},
    robot(_) {},
  },
  methods: {
    color() {
      let o = "grass";
      if (this.current) o = "player";
      else if (this.wall && !this.clean) o = "rock";
      else if (this.wall && this.clean) o = "mowedrock";
      else if (this.path) o = "flat";
      else if (this.clean) o = "mowed";
      return 'url("/img/tile/' + o + '.png") no-repeat center center';
    },
    move(n) {
      this.current = n.x == this.x && n.y == this.y;
      if (this.wall) this.wall = !this.path;
      if (this.current) this.path = true;
      if (
        n.x - 1 <= this.x &&
        n.x + 1 >= this.x &&
        n.y - 1 <= this.y &&
        n.y + 1 >= this.y
      ) {
        this.clean = true;
        if (this.wall) {
          for (let a = 0; a < 3; a++) {
            for (let b = 0; b < 3; b++) {
              let t = store.state.map.tiles.get(
                "x" + (this.x - 1 + a) + "y" + (this.y - 1 + b)
              );
              if (t != undefined) t.clean = true;
            }
          }
        }
      }
    },
  },
};
</script>

<style src="./tile.css" scoped></style>
