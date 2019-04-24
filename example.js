const orders = [{
  id: 10001,
  items: [
    { productName: 'Pikachu food', price: 100, quantity: 1, status: 'ready' },
    { productName: 'Eevee food', price: 330, quantity: 5, status: 'delivered' }
  ]},
  {
    id: 10002,
    items: [
      { productName: 'Bulbasaur food', price: 25, quantity: 10, status: 'ready' },
      { productName: 'Onix food', price: 1250, quantity: 2, status: 'ready' }
    ]
}]

const totalOrder = order =>
    order.map(value => value.items
      .filter(item => item.status === 'delivered')
      .reduce((previous, current) => previous + (current.price * current.quantity), 0)
  )

let result = totalOrder(orders)

console.log(result) //[ 1650, 0 ]
