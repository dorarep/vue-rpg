import OBJECTS from '~/constants/objects'

const initialState = {
  map: [
    [0,0,0,0,0,0,0,0],
    [2,2,2,2,2,2,2,2],
    [0,0,0,0,1,1,1,0],
    [0,0,5,0,1,1,1,0],
    [5,0,0,0,0,1,0,0],
    [0,0,0,0,0,3,0,0],
    [4,4,4,4,4,4,0,0],
    [0,0,0,0,0,0,0,0],
  ],
  object: [
    [1,1,1,4,4,4,4,4],
    [0,0,0,4,3,3,3,4],
    [0,0,0,4,0,0,0,4],
    [0,0,0,4,5,0,6,4],
    [0,0,0,4,4,0,4,4],
    [0,0,0,3,3,0,3,3],
    [0,0,0,0,0,0,0,0],
    [2,2,2,2,2,2,2,2],
  ],
  chipSize: 64
}

export const state = () => JSON.parse(JSON.stringify(initialState))

export const mutations = {
  move (state, { x1, y1, x2, y2 }) {
    state.object[y2][x2] = state.object[y1][x1]
    state.object[y1][x1] = 0
    state.object = Object.assign({}, state.object)
  }
}


export const actions = {
  onClick ({ state, commit }, { x, y }) {
    const object = OBJECTS[state.object[y][x]]
    if (object.onClick) {
      object.onClick({ state, commit, x, y })
    }
  },
  onInterval ({ state, commit }, { x, y }) {
    const object = OBJECTS[state.object[y][x]]
    if (object.onInterval) {
      object.onInterval({ state, commit, x, y })
    }
  }
}
