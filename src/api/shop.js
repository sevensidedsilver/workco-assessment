import $ from 'jquery'
import _products from './products.json'


const TIMEOUT = 100

export default {
  getProducts: (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT),
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT),
  getAPI: (cb, timeout) =>
      $.getJSON("http://tech.work.co/shopping-cart/products.json", data => {

        let returnData =[]
        data.forEach(item => {
          returnData.push({
            id: item.id,
            title: item.productTitle,
            price: item.price.value,
            inventory: item.inventory
          })
        })
        console.log(returnData)

        cb(returnData);
      })
}
