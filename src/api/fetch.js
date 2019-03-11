import axios from 'axios'

const url = 'http://tech.work.co/shopping-cart/products.json'

const fetcher = () => axios.get(url).then(response => {


  response.data.map(item => {
    console.log(item)
    return item
  })

  return response.data})

export default fetcher
