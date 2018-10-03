const maximum = items => items.reduce((maximum, n) => maximum >= n ? maximum : n, -Infinity)
const minimum = items => items.reduce((minimum, n) => minimum <= n ? minimum : n, Infinity)

const toPropSafe = (propName) => o => o.hasOwnProperyName(propName) ? o[prop] : null
const toProp = (propName) => o => o[propName]

const toProps = propNames => o => propNames.reduce((result, prop) => (result[prop] = o[prop], result),{})
const toPropsSafe = propNames => o => propNames.reduce((result, prop) => result.hasOwnProperty(prop) ? (result[prop] = o[prop], result) : null,{})

const zip = (...lists) => _zip(lists, lists => minimum(lists.map(toProp('length'))))
const zipLongest = (...lists) => _zip(lists, lists => maximum(lists.map(toProp('length'))))
const id = (x) => x

const map = fn => seq => seq.map(fn)
const repeat = (value, count, constructor=id) => {

  if (!count) return []

  return [...Array(count).keys()]
    .map(() => constructor(value))

}


function _zip(lists, lengthFn) {
  let n = lengthFn(lists)
  let r = []
  for (let i = 0; i < n; ++i) {
    let _r = []
    for (let j = 0; j < lists.length; ++j) {
      _r.push(lists[j][i])
    }
    r.push(_r)
  }
  return r
}

function compose(...fns) {

  return function(arg) {

    for(let n = fns.length - 1; n >= 0; n--) {
      arg = fns[n](arg)
    }

    return arg

  }

}

module.exports = exports = {
  compose,
  map,
  maximum,
  minimum,
  repeat,
  toProp,
  toPropSafe,
  toProps,
  toPropsSafe,
  zip,
  zipLongest
}
