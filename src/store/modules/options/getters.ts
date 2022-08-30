import { GetterTree } from 'vuex'
import { StateOptions } from './state'
import {StateRoot} from "@/js/types/store";

const fields = (state: StateOptions) => state.options.fields
export type OptionsFieldsGetter = ReturnType<typeof fields>

const value = (state: StateOptions) => state.options.value
export type OptionsValueGetter = ReturnType<typeof value>

const getters: GetterTree<StateOptions, StateRoot> = {
  fields,
  value
}

export default getters
