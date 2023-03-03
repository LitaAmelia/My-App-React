import React from 'react';
import ListFood from './ListFood';

export const Card = () => {
    return (
        <div className='card'>
          <h1 className='title'>Daftar Makanan Olahan Kacang</h1>
          <ListFood/>
        </div>
    )
  }

export default Card;