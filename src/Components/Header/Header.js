import React from 'react';
import { Link } from "react-router-dom";

export default function Header() {
  return(
    <div className='bg-black d-flex justify-content-center'>
      <h1 className='text-2xl lg:text-2xl font-semibold font-serif py-2 text-white'>
        <Link class="link-light text-decoration-none" to="/">ALEJANDRIA</Link>
      </h1>
    </div>
  );
}

