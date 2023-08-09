import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const cartAmountList = cartList.map(
        eachItem => eachItem.quantity * eachItem.price,
      )
      const reduceCartAmount = cartAmountList.reduce((a, b) => a + b)
      const itemOrItems = cartList.length > 1 ? 'Items' : 'Item'
      return (
        <div className="cart-summary-container">
          <h1 className="cart-summary-heading">
            Order Total: <span className="span">{reduceCartAmount}</span>
          </h1>
          <p className="cart-summary-description">
            {cartList.length} {itemOrItems} in cart
          </p>
          <button type="button" className="cart-summary-checkout-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
