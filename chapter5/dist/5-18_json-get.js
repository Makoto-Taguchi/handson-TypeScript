// import fetch from "node-fetch";
var axios18 = require('axios');
function getJsonData(url) {
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
        .then(function (res) {
        console.log(res.data);
    });
}
var url18 = 'https://tuyano-dummy-data.firebaseio.com/sample_data.json';
getJsonData(url18);
