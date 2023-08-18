<template>
  <section>
    <h2>Colors</h2>
    <p>Move the robot with the arrow keys or WASD.</p>

    <table>
      <tr>
        <td>
          <dummy wall="true"></dummy>
        </td>
        <td>
          <p>Walls</p>
        </td>
      </tr>
      <tr>
        <td>
          <dummy current="true"></dummy>
        </td>
        <td>
          <p>The current position of the cleaning robot.</p>
        </td>
      </tr>
      <tr>
        <td>
          <dummy path="true"></dummy>
        </td>
        <td>
          <p>The cleaned path that the robot has driven.</p>
        </td>
      </tr>
      <tr>
        <td>
          <dummy clean="true"></dummy>
        </td>
        <td>
          <p>Cleaned areas</p>
        </td>
      </tr>
      <tr>
        <td>
          <dummy></dummy>
        </td>
        <td>
          <p>Dirty areas</p>
        </td>
      </tr>
    </table>

    <btn></btn>
  </section>
</template>

<script>
import store from "@/store";
import btn from "@/components/btn";
import dummy from "@/components/game/tile/dummy";

export default {
  name: "menu-colors",
  components: {
    btn,
    dummy,
  }
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
table {
  margin: auto;
  text-align: center;
  border-spacing: 0;
}
</style>