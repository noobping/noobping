<template>
  <table v-if="show === undefined || show">
    <tbody>
      <tr>
        <td></td>
        <td class="key" v-on:click="btn_up()" v-bind:class="{ active: key == 'up' }">
          <font-awesome-icon icon="chevron-up" />
        </td>
        <td></td>
      </tr>
      <tr>
        <td
          class="key"
          v-on:click="btn_left()"
          v-bind:class="{ active: key == 'left' }"
        >
          <font-awesome-icon icon="chevron-left" />
        </td>
        <td
          class="key"
          v-on:click="btn_down()"
          v-bind:class="{ active: key == 'down' }"
        >
          <font-awesome-icon icon="chevron-down" />
        </td>
        <td
          class="key"
          v-on:click="btn_right()"
          v-bind:class="{ active: key == 'right' }"
        >
          <font-awesome-icon icon="chevron-right" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import store from "@/store";

export default {
  name: "controlls",
  props: {
    show: undefined,
  },
  data: () => ({
    key: null
  }),
  created() {
    document.addEventListener("keyup", this.move);
  },
  destroyed() {
    document.removeEventListener("keyup", this.move);
  },
  methods: {
    move(n) {
      // up
      if (n.key == "ArrowUp" || n.key == "W" || n.key == "w") {
        this.key = "up";
        store.commit("up");
      }
      // down
      if (n.key == "ArrowDown" || n.key == "S" || n.key == "s") {
        this.key = "down";
        store.commit("down");
      }
      // left
      if (n.key == "ArrowLeft" || n.key == "A" || n.key == "a") {
        this.key = "left";
        store.commit("left");
      }
      // right
      if (n.key == "ArrowRight" || n.key == "D" || n.key == "d") {
        this.key = "right";
        store.commit("right");
      }
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
    btn_up() {
      store.commit("up");
    },
    btn_left() {
      store.commit("left");
    },
    btn_down() {
      store.commit("down");
    },
    btn_right() {
      store.commit("right");
    },
  },
};
</script>

<style scoped>
table {
  text-align: center;
  margin: auto;
  padding-top: 1em;
}
td {
  height: 2em;
  width: 2em;
  font-size: 2em;
}
.key {
  cursor: pointer;
  color: #080;
  border: 1px solid #080;
}
.active,
.key:hover,
.key:active {
  color: #fff;
  background: #080 !important;
}
@media (prefers-color-scheme: light) {
  .key {
    color: #080;
  }
}
@media (prefers-color-scheme: dark) {
  .key {
    color: #fff;
  }
}
</style>
