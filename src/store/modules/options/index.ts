import { Module } from 'vuex'
import state, { StateOptions } from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import {StateRoot} from "@/js/types/store";

const userModule: Module<StateOptions, StateRoot> = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}

export default userModule
