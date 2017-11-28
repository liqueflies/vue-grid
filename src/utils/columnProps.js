import { toArray } from './toArray'

export const columnProps = (breakpoints, columns) => {
  const props = toArray(breakpoints)
    .map((bp, index) => [
      {
        [bp.name]: index === 0 ? columns : null
      },
      {
        [`${bp.name}Shift`]: index === 0 ? 0 : null
      }
    ])

  return [].concat(...props)
}
