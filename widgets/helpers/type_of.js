// type_of
const type_of = (target) =>
  Object.prototype.toString.call(target).split(' ')[1].toLowerCase()

// export
export default type_of
