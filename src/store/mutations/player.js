export default {
  start_game(state, _) {
    state.time.start = new Date().getTime();
    state.player = {
      x: 1,
      y: 1,
    };
    state.run = true;
  },
  stop_game(state, _) {
    state.run = false;

    const start = state.time.start;
    const stop = new Date().getTime();
    const seconds = Math.floor((stop - start) / 1000);
    const factor = state.map.factor;
    const size = state.map.size.x * state.map.size.y;

    let wall = 0;
    let green = 0;
    let path = 0;
    state.map.tiles.forEach(function(v, _) {
      if (v.clean) green++;
      if (v.path) path++;
      if (v.wall) wall++;
    });

    const clean = (green - path) * (factor * 20);
    const sum =
      (clean + wall * factor + path + size * (1 - factor)) /
      (seconds * (1 - factor));

    state.time.hystory[
      state.time.hystory.length
    ] = parseInt(sum * 10);
  },
  up(state, _) {
    const o =
      "x" + state.player.x + "y" + (state.player.y - 1);
    if (
      state.player.y > 0 &&
      !(
        state.map.tiles.has(o) &&
        state.map.tiles.get(o).wall
      )
    )
      state.player.y--;
    if (state.player.y == 0)
      state.player.y = state.map.size.y;
  },
  down(state, _) {
    const o =
      "x" + state.player.x + "y" + (state.player.y + 1);
    if (
      state.player.y <= state.map.size.y &&
      !(
        state.map.tiles.has(o) &&
        state.map.tiles.get(o).wall
      )
    )
      state.player.y++;
    if (state.player.y > state.map.size.y)
      state.player.y = 1;
  },
  left(state, _) {
    const o =
      "x" + (state.player.x - 1) + "y" + state.player.y;
    if (
      state.player.x > 0 &&
      !(
        state.map.tiles.has(o) &&
        state.map.tiles.get(o).wall
      )
    )
      state.player.x--;
    if (state.player.x == 0)
      state.player.x = state.map.size.x;
  },
  right(state, _) {
    const o =
      "x" + (state.player.x + 1) + "y" + state.player.y;
    if (
      state.player.x <= state.map.size.x &&
      !(
        state.map.tiles.has(o) &&
        state.map.tiles.get(o).wall
      )
    )
      state.player.x++;
    if (state.player.x > state.map.size.x)
      state.player.x = 1;
  },
};
