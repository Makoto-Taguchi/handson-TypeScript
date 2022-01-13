// import fetch from "node-fetch";
const axios18 = require('axios')

function getJsonData(url: string) {
  // fetch(url).then(res => res.text()).then(re=>{
  //   console.log(re)
  // })
  // axios.get(url)
  //   .then(res=>res.json()).then(re=> {
  //     for (let item of re) {
  //       console.log(item)
  //     }
  //   })
  axios18.get(url)
    .then(function (res:any) {
      console.log(res.data)
    })
}

const url18 = 'https://tuyano-dummy-data.firebaseio.com/sample_data.json'
getJsonData(url18)