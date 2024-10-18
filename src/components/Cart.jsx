import {useContext} from 'react'
import {CartContext} from '../context/CartContext'

export const Cart = () => {

	const {cart, emptyCart} = useContext(CartContext)

	const totalPrice = cart.reduce((sum, product) => sum + product.amount * product.price, 0)


	return (
		<div style={{border: '5px solid hotpink', margin: '1em', padding: '1em'}}>
			<h3>Cart</h3>

			<p>Unique items in cart: {cart.length}</p>
			<p>Total price: {totalPrice}</p>

			<ul>
				{cart.map(product => (
					<li key={product.id}>
						{product.amount}x {product.name}
					</li>
				))}
			</ul>

			<button onClick={emptyCart}>Vyprázdnit košík košík</button>
		</div>
	);
}

export default Cart;