const max = items => items.reduce((max, n) => max >= n ? max : n, -Infinity)
const min = items => items.reduce((min, n) => min <= n ? min : n, Infinity)

const toPropSafe = (propName) => o => o.hasOwnProperyName(propName) ? o[prop] : null
const toProp = (propName) => o => o[propName]

const zip = (...lists) => _zip(lists, lists => min(lists.map(toProp('length'))))
const zipLongest = (...lists) => _zip(lists, lists => max(lists.map(toProp('length'))))

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
