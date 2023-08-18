import Vue from "vue";
import Vuex from "vuex";
import map_mutations from "@/store/mutations/map";
import player_mutations from "@/store/mutations/player";
import scene_mutations from "@/store/mutations/scene";
import state from "@/store/state";

Vue.use(Vuex);

export default new Vuex.Store({
  state: state,
  mutations: {
    ...map_mutations,
    ...player_mutations,
    ...scene_mutations,
  },
});
