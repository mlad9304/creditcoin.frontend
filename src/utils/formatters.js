function pluralize (time, label) {
  if (time === 1) {
    return time + label
  }
  return time + label + 's'
}

export function timeAgo (time) {
  const between = Date.now() / 1000 - new Date(time).getTime() / 1000
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour')
  } else {
    return pluralize(~~(between / 86400), ' day')
  }
}

export function numberFormatter (num, digits) {
  if (!num) { return '' }
  return Number(num).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export function crecFormatter (num, digits) {
  if (!num) { return '' }
  const si = 1E18
  return (num / si).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
