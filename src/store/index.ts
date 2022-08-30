import Vue from 'vue'
import Vuex from 'vuex'
import images from "@/store/modules/images";
import options from "@/store/modules/options";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    images,
    options
  },
})
