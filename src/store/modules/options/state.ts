export enum viewMode {
  CONTAIN = 'Contain',
  COVER = 'Cover',
  FILL = 'Fill',
  NONE= 'None'
}

const state: () => StateOptions = () => ({
  options: {
    fields: [
      {
        value: viewMode.CONTAIN,
        label: viewMode.CONTAIN
      },
      {
        value: viewMode.COVER,
        label: viewMode.COVER
      },
      {
        value: viewMode.FILL,
        label: viewMode.FILL
      },
      {
        value: viewMode.NONE,
        label: viewMode.NONE
      },
    ],
    value: ''
  }
})

export type StateOptions = {
  options: {
    fields: {
      value: string,
      label: string
    }[],
    value: string
  }
}

export default state
