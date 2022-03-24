
const randomNumber = (cant = 10e7) => {
  const arr = []
  for (let i = 0; i < cant; i++) {
    const num = Math.floor((1000)*(Math.random()));
    if (arr[num] >= 1) {
      arr[num] = arr[num] + 1;
      // console.log(arr[num])
    } else {
      arr[num] = 1
    }
    
  }
  console.log(cant)
  return arr
}
process.on('message', (data) => {
  const cant = isNaN(data)? undefined : data
  const arr = randomNumber(cant);
  process.send(arr);
})