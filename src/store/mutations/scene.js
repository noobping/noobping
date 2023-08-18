export default {
  next_scene(state, _) {
    state.show.page++;
  },
  page(state, n) {
    state.show.page = parseInt(n) || 0;
  },
  show(state, n) {
    state.show.controlls = n;
  },
  ai(state, n) {
    state.ai.enabled = n;
  },
  algorithm(state, n) {
    state.ai.algorithm = n;
  },
};
