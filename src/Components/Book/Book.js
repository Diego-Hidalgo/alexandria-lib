import React from 'react';

export default function Book({ book, addToCartHandler }) {
  /*
  return (
    <div class='border-2 border-black relative'>
        <div class='d-flex justify-center my-4'>
            <img class='w-2/5 ' src={book.picture} alt="" />
        </div>
        <h4 class='text-lg md:text-xl font-bold font-sans'>{book.name}</h4>
        <h6 class='text-lg font-medium mt-2 mb-14'>Precio: ${book.price}</h6>
        <button onClick={() => addToCartHandler(book)} className='bg-black text-white w-full absolute bottom-0 left-0 border-2 py-3 font-semibold'>Agregar al carrito </button>
    </div>
  );
  */
 return (
  <div class="card border border-dark rounded" style={{width: 13+'rem', height: 'auto'}}>
    <img class="card-img-top" src={book.picture} width="auto" height="auto" />
    <div class="card-body">
      <h5 class="card-title">{book.name}</h5>
      <p class="card-text">Precio: $ {book.price}</p>
      <a onClick={() => addToCartHandler(book)} class="btn btn-outline-dark btn-light">Agregar al carrito</a>
    </div>
  </div>
 );
}