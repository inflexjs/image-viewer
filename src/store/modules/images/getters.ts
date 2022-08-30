import { GetterTree } from 'vuex'
import { StateImages } from './state'
import { StateRoot } from "@/js/types/store";

const images = (state: StateImages) => state.images
export type ImagesImagesGetter = ReturnType<typeof images>


const getters: GetterTree<StateImages, StateRoot> = {
  images
}

export default getters
