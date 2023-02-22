export default function (target, key) {
  Object.defineProperty(target, key, {
    value: target[key],
    enumerable: false,
  })
}
