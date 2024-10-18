import {useState, createContext} from 'react'

export const CartContext = createContext()

export function CartProvider({children}) {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart(prevState => [
      ...prevState,
      {
        id: product.id,
        name: product.name,
        price: product.price,
        amount: 1,
      }
    ])
  }

  const emptyCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      emptyCart,
    }}>
      {children}
    </CartContext.Provider>
  )
}