
import {useContext} from 'react'
import {UserContext} from '../context/UserContext';
import {CartContext} from '../context/CartContext';


export const Product = ({id, name, description, price}) => {

  const {isLoggedIn} = useContext(UserContext)
  const {addToCart} = useContext(CartContext)


  const handleBuy = () => {
    // console.log(`Product ${id} added to cart`)
    addToCart({ id, name,	price })
  }

  return (
    <div style={{border: '5px solid green', margin: '1em', padding: '1em'}}>
      <h3>{name}</h3>
      <p>{description}</p>
      <p><strong>{price}</strong></p>
      { isLoggedIn &&
        <button onClick={handleBuy}>Buy</button>
      }
    </div>
  );
}

export default Product;