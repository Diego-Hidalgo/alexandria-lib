import React from 'react';

export default function AddedBook({ addedBook, handleBookDelete }) {
    return (
        <div className='flex justify-between items-center border-2 rounded-md border-slate-400 p-3 my-3 mx-4 md:mx-0'>
            <h6 className='text-sm font-semibold text-left w-4/5'>{addedBook.name}</h6>
            <button onClick={() => handleBookDelete(addedBook)}>
                Eliminar
            </button>
        </div>
    );
}