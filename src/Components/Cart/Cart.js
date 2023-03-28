import React from 'react';
import AddedBook from '../AddedBook/AddedBook';

const CartOptions = ({buy, clear}) => {
  return(
    <div class="container">
      <div class="row">
        <div class="col">
          <button onClick={buy}>
            Comprar
          </button>
        </div>
        <div class="col">
          <button onClick={clear}>
            Vaciar
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Cart({ cart, handleBookDelete, buyCart, clearCart}) {
  return (
    <div class="">
      <h2 className='text-lg md:text-2xl font-bold font-sans py-2 text-white text-center bg-black mt-5 md:mt-10'>Carrito de compras</h2>
      <CartOptions buy={buyCart}  clear={clearCart}/>
      <h4 className='texl-xl font-bold my-2 md:my-5'>Has agregado {cart.length} Libros</h4>
      <div className='px-3 mb-5'>
        {
          cart.map(addedBook => <AddedBook addedBook={addedBook} handleBookDelete={handleBookDelete} />)
        }
      </div>
    </div>
  );
}