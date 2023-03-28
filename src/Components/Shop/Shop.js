import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Book from '../Book/Book';
import { useStateReducer } from '../../Resources/StateReducer';

export default function Shop() {

  const [books, setBooks] = useState([]);

  const [cart, setCart] = useState([]);

  const [state, dispatch] = useStateReducer();

  useEffect(() => {
    fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, []
  );

  const addToCartHandler = (book) => {
    if (!cart.includes(book)) {
      const newCart = [...cart, book];
      setCart(newCart)
    }
  }

  const clearCart = () => {
    setCart([]);
  }
  
  const handleBookDelete = (book) => {
    const rest = cart.filter(pd => pd.id !== book.id);
    setCart(rest);
  }

  const handleBuy = () => {
    if(state.isLoggedIn) {
      alert("Compra realizada con éxito")
      clearCart()
    } else {
      alert("Debe iniciar sesión para poder comprar")
    }
  }

  return(
    <div class="container">
    <div class="row">
      {[0, 1, 2].map((colIndex) => (
        <div class="col" key={colIndex}>
          {books
            .filter((_, index) => index % 3 === colIndex)
            .map((book, index) => (
              <div class="col" key={book.id}>
                {<Book book={book} key={book.id} addToCartHandler={addToCartHandler}></Book>}
              </div>
            ))}
        </div>
      ))}
      <div id='cart-container' class='col'>
        <Cart cart={cart} handleBookDelete={handleBookDelete} buyCart={handleBuy} clearCart={clearCart}></Cart>
      </div>
    </div>
  </div>
  );
}