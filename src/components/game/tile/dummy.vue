<template>
  <div class="tile" style="background-size: contain;" v-bind:style="{ background: bg }"></div>
</template>

<script>
export default {
  name: "tile-dummy",
  props: {
    clean: false,
    path: false,
    current: false,
    wall: false
  },
  data: () => {
    return {
      bg: "transparent"
    };
  },
  mounted() {
    let o = "grass";
    if (this.current) o = "player";
    else if (this.wall && !this.clean) o = "rock";
    else if (this.wall && this.clean) o = "mowedrock";
    else if (this.path) o = "flat";
    else if (this.clean) o = "mowed";
    this.bg = 'url("/img/tile/' + o + '.png") no-repeat center center';
  }
};
</script>

<style src="./tile.css" scoped></style>
