const axios19 = require('axios')

async function getData19(url:string) {
  try {
    const res:any = await axios19.get(url)
    const items = res.data
    // for (const item of items) {
    //   console.log(item)
    // }
    console.log(items)
  } catch(err) {
    throw new Error(err.status)
  }
}

const url19 = 'https://tuyano-dummy-data.firebaseio.com/sample_data.json'
getData19(url19)