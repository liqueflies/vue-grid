import { toArray } from './toArray'

export const containerProps = (breakpoints) => {
  return toArray(breakpoints)
    .map((bp) => ({
        [bp.name]: 0
      })
    )
}
