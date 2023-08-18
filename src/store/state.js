export default {
  show: {
    page: 0,
    controlls: true,
  },
  ai: {
    enabled: true,
    algorithm: "line",
  },
  map: {
    factor: 0.1,
    size: {
      x: 10,
      y: 10,
    },
    tiles: new Map(),
  },
  player: {
    x: 1,
    y: 1,
  },
  time: {
    start: new Date().getTime(),
    hystory: [],
  },
  run: false,
};
