import { Module } from 'vuex'
import state, { StateImages } from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import {StateRoot} from "@/js/types/store";

const userModule: Module<StateImages, StateRoot> = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}

export default userModule
