export function numberFormatter (num, digits) {
  if (!num) { return '' }
  return Number(num).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export function crecFormatter (num, digits) {
  if (!num) { return '' }
  const si = 1E18
  return (num / si).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
