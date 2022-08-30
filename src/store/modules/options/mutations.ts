import { MutationTree } from 'vuex'
import { StateOptions } from './state'

export enum mutationsType {
    SET_VALUE = 'SET_VALUE',
}

const mutations: MutationTree<StateOptions> = {
    [mutationsType.SET_VALUE](state: StateOptions, payload: StateOptions['options']['value']) {
        state.options.value = payload
    },
}

export default mutations
