export default {
  factor(state, n) {
    state.map.factor = Math.min(0.9, Math.max(0.1, n));
  },
  map_x(state, n) {
    state.map.size.x = parseInt(n);
  },
  map_y(state, n) {
    state.map.size.y = parseInt(n);
  },
  add(state, n) {
    const o = "x" + n.x + "y" + n.y;
    if (!state.map.tiles.has(o)) {
      state.map.tiles.set(o, n.p);
    }
  },
  remove(state, n) {
    const o = "x" + n.x + "y" + n.y;
    state.map.tiles.delete(o);
  },
};
