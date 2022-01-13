// import fetch from "node-fetch";
var axios = require('axios');
function getData17(url) {
    // fetch(url).then(res => res.text()).then(re=>{
    //   console.log(re)
    // })
    axios.get(url)
        .then(function (res) {
        console.log(res.data);
    });
}
var url17 = 'https://tuyano-dummy-data.firebaseio.com/message.json';
getData17(url17);
