import React from 'react';

interface SupplierProps {
  id: number;
  photoUrl: string;
}

const Supplier = ({ id, photoUrl }) => (
  <div key={id} className='supplier-container'>
    <img src={photoUrl} alt={`supplier-${id}`} className='supplier-image'/>
  </div>
);

export default Supplier;
