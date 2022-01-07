function action(dt: number) {
  return new Promise(resolve => {
    setTimeout(()=>{
      console.log('finished promise!')
      resolve("delay:" + dt)
    }, dt)
  })
}

// actionの実行（Promise）
// action(2000).then(res => console.log(res))
// action(1000).then(res => console.log(res))
// action(500).then(res => console.log(res))

// actionの実行（Async/Await）
async function doit() {
  let re1 = await action(2000)
  console.log(re1)
  let re2 = await action(1000)
  console.log(re2)
  let re3 = await action(500)
  console.log(re3)
}
doit()