const state: () => StateImages = () => ({
  images: []
})

export type StateImages = {
  images: File[]
}

export default state
