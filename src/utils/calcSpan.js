import { toArray } from './toArray'

export const calcSpan = (currentBreakpoint, breakpoints, breakpointsMeasures, shift = false) => {
  const bp = toArray(breakpoints)
    .filter(bp => bp.name.includes('Shift') === shift)
    .reduce((previous, current) => {
      const pureName = current.name.replace('Shift', '')
      const isSmallerThanCurrentBreakpoint = breakpointsMeasures[pureName] <= breakpointsMeasures[currentBreakpoint]
      return !!current.value && isSmallerThanCurrentBreakpoint ? current : previous
    })
  return bp.value
}
