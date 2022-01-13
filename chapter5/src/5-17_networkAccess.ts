// import fetch from "node-fetch";
const axios = require('axios')

function getData17(url: string) {
  // fetch(url).then(res => res.text()).then(re=>{
  //   console.log(re)
  // })
  axios.get(url)
    .then(function (res:any) {
      console.log(res.data)
    })
}

const url17 = 'https://tuyano-dummy-data.firebaseio.com/message.json'
getData17(url17)