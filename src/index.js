
exports.min = function min (array) {
  try {
  let current = 0
  array.map( item => {
    if ( item < current ) {
      current = item;
    }
  })
  return current;
  } catch (error) {
    return 0;
  }
}

exports.max = function max (array) {
  try {
    let current = 0
    array.map( item => {
      if ( item > current ) {
        current = item;
      }
    })
    return current;
    
  } catch (error) {
    return 0;
  }
}

exports.avg = function avg (array) {
  console.log(typeof array);
  try {
    return array.length > 0 
    ? array.reduce((prev, next) => prev + next, 0) / 20
    : 0;
    
  } catch (error) {
    return 0
  }
 

}
