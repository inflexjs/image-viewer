import { Store } from 'vuex'
import {StateImages} from "@/store/modules/images/state";
import { StateOptions } from "@/store/modules/options/state";

export type ActionType<F> = F extends (state: infer S, payload: infer P) => infer R ? (payload?: P) => Promise<R> : never
export type MutationType<F> = F extends (state: infer S, payload: infer P) => infer R ? (payload: P) => R : never

export type StateRoot = {
    images: StateImages,
    options: StateOptions
}

export interface AsyncData {
    store: Store<StateRoot>
}
