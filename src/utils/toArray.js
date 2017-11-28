export const toArray = (breakpoints) => {
  const bpArray = []
  for (const [key, value] of Object.entries(breakpoints)) {
    bpArray.push({
      name: key,
      value: value
    })
  }
  return bpArray
}
