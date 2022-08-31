import {ActionContext, ActionTree} from "vuex";
import {StateOptions} from "@/store/modules/options/state";
import {ActionType, StateRoot} from "@/js/types/store";
import {mutationsType} from "@/store/modules/options/mutations";

export function setLocalStorageData(dataName: string, mode: string): void {
  localStorage.setItem(dataName, mode)
}

export function getLocalStorageData(dataName: string): string | null {
  return localStorage.getItem(dataName)
}

const setValue = ({commit}: ActionContext<StateOptions, StateRoot>, payload: string) => {
  commit(mutationsType.SET_VALUE, payload)
  setLocalStorageData('optionValue', payload)
}
export type OptionsSetValueAction = ActionType<typeof setValue>

const actions: ActionTree<StateOptions, StateRoot> = {
  setValue
}

export default actions
