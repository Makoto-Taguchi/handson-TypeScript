const axios20 = require('axios')

async function getData20(url:string, obj:object) {
  // let params = new URLSearchParams();

  // params : {
  //   method: 'POST'
  // }

  try {
    let params = new URLSearchParams();
    params.append('method', 'POST')
    params.append('mode', 'cors')
    params.append('body', JSON.stringify(obj))
    const res = axios20.post(url, params)



    // const res = await axios20.post(url, {
    //   method: 'POST',
    //   mode: 'cors',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(obj)
    // })
    // console.log(res)

    // .then(response => {
    //   console.log('送信したテキスト: ' + response.data.text);
    // })
  } catch(error) {
    console.log(error);
  }
}

const url20 = 'https://tuyano-dummy-data.firebaseio.com/sample_message.json'

const obj20 = {
  title: 'Hello!TG!',
  message: 'This is sample message!'
}
getData20(url20, obj20)