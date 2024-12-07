const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
});


// let arr = [1 ,2 ,3 ,4 ,5];

// for (let index = 0; index < arr.length; index++) {
//   console.log(arr[index])
// }


let num = 10;
// console.log(num + 5)

if(num =   15){
  console.log("Num is not found")
} else {
  console.log(num)
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})