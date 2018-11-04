
const images = {
  1: require('~/assets/img/object/1.png'),
  2: require('~/assets/img/object/2.png'),
  3: require('~/assets/img/object/3.png'),
  4: require('~/assets/img/object/4.png'),
  5: require('~/assets/img/object/5.png'),
}

const isOpen = (state, x, y) => {
  return state.object[y] && state.object[y][x] === 0
}

const getMovable = (state, x, y) => {
  const movable = []

  if (isOpen(state, x, y + 1)) { movable.push([y + 1, x]) }
  if (isOpen(state, x, y - 1)) { movable.push([y - 1, x]) }
  if (isOpen(state, x + 1, y)) { movable.push([y, x + 1]) }
  if (isOpen(state, x - 1, y )) { movable.push([y, x - 1]) }

  return movable
}

const moveRandomly = ({ state, commit, x, y }) => {
  const movable = getMovable(state, x, y)
  const move = movable[Math.floor(Math.random() * movable.length)]
  commit('move', { x1: x, y1: y, x2: move[1], y2: move[0] })
}

export default [
  {

  },
  {
    img: images[1]
  },
  {
    img: images[3]
  },
  {
    img: images[4]
  },
  {
    img: images[5]
  },
  {
    img: images[2],
    onInterval: moveRandomly
  },
  {
    img: images[2],
    onClick: moveRandomly
  }
]
