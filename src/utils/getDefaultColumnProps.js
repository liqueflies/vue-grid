import { toArray } from './toArray'

export const getDefaultColumnProps = (breakpoints, columns) => {
  const props = toArray(breakpoints)
    .map((bp, index) => [
      {
        [bp.name]: !index ? columns : null
      },
      {
        [bp.name + 'Shift']: !index ? 0 : null
      }
    ])
  // flatten array
  return [].concat(...props)
}
