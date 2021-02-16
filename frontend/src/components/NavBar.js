import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (<nav>
    <div className="navbar__logo">
      <h2>MERN Shopping Cart</h2>
    </div>
    <ul className="navbar__links">
      <li>
        <Link to='/cart'>
          Cart
          <span className="cartlogo__badge">0</span>
        </Link>
      </li>
      <li>
        <Link to="/">
          Shops
        </Link>
      </li>
    </ul>
    <div className="hamburger__menu">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </nav>);
}
export default NavBar;