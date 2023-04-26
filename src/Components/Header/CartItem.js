import React,{useContext}from 'react'


import Figure from 'react-bootstrap/Figure';
import ProductContext from '../../store/product-context';

export default function CartItem(props) {
  const cartState=useContext(ProductContext);

  return (
  <>
        <tr>
        <td>{ <Figure.Image
        width={80}
        height={80}
        alt="171x180"
        src={props.img}
      />}</td>
          <td>{props.title}</td>
          <td>{props.price}</td>
          <td>{props.quantity}</td>
          
        </tr>
  </>
  )
}
