export default function ({ $axios, redirect, $message }) {
  $axios.onRequest((config) => {
    console.log('Making request to ' + config.url)
  })

  $axios.onError((error) => {
    // console.log("axios onError", error)
    const code = parseInt(error.response && error.response.status)
    // console.log("axios onError", error.response)
    // console.log(error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
