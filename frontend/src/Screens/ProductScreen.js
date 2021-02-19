import './ProductScreen.css'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//Actions
import { getProductDetails } from '../redux/actions/productAction';
import { addToCart } from '../redux/actions/cartAction';

function ProductScreen({ match, history }) {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector(state => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id))
    }
  }, [dispatch, product, match])

  return (
    <div className="productscreen">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
            <>
              <div className="productscreen__left">
                <div className="left__image">
                  <img src={product.imageUrl} alt="product name" />
                </div>
                <div className="left__info">
                  <p className="left__name">
                    {product.name}
                  </p>
                  <p>Price: ${product.price}</p>
                  <p> Description: {product.description}</p>
                </div>
              </div>
              <div className="productscreen__right">
                <div className="right__info">
                  <p>
                    Price: <span>${product.price}</span>
                  </p>
                  <p>
                    Status: <span>{product.countInStock > 0 ? "In Stock" : "Out of Stock"}</span>
                  </p>
                  <p>
                    Qty:
            <select name="" id="">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </p>
                </div>
              </div>
            </>
          )
      }


    </div>
  )
}

export default ProductScreen
