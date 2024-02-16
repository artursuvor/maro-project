import React from 'react';

interface SuplierProps {
  id: number;
  photoUrl: string;
}

const Supplier = ({ id, photoUrl }) => (
  <div key={id} className='suplier'>
    <img src={photoUrl} alt={`suplier-${id}`} />
  </div>
);

export default Supplier;
