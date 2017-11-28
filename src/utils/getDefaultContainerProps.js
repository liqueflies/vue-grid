import { toArray } from './toArray'

export const getDefaultContainerProps = (breakpoints) => {
  return toArray(breakpoints)
    .map((bp) => ({
        [bp.name]: 0
      })
    )
}
