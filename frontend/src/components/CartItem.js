import './CartItem.css'
import { Link } from 'react-router-dom';

function CartItem() {
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img src="https://images.unsplash.com/photo-1564424224827-cd24b8915874?
            ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80" alt="product name" />
      </div>

      <Link to={`/product/${111}`} className="cartItem__name">
        <p>Product 1</p>
      </Link>
      <p className="cartitem__price">$499.99</p>
      <select name="" id="" className="cartItem__select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <button className="cartItem__deleteBtn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  )
}
export default CartItem;
