import { toArray } from './toArray'

export const getBreakpointValue = (currentBreakpoint, breakpoints, userProps, shift = false) => {
  const bp = toArray(userProps)
  // filter shifted breakpoints if present, or keep them only
  .filter(bp => bp.name.includes('Shift') === shift)
  .reduce((previous, current) => {
      // prevent `shift` on name
      const pureName = current.name.replace('Shift', '')
      const isSmallerThanCurrentBreakpoint = breakpoints[pureName] <= breakpoints[currentBreakpoint]
      return !!current.value && isSmallerThanCurrentBreakpoint ? current : previous
    })

  return bp.value
}
