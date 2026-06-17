import { useState } from 'react';
import TabButton from './TabButton';

export default function Discount() {

    const [price, setPrice] = useState(100);


  return (
    <div>
      <p data-testid="price">{price}€</p>
      <TabButton clickFunction={()=>setPrice(75)}>Aplicar Desconto</TabButton>
    </div>
  );
}
