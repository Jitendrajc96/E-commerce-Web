import React from 'react'

import MainHeader from '../Components/Header/MainHeader'

import CartState from '../store/CartState'
import pic from '../asset/pic.jpg'
import Figure from 'react-bootstrap/Figure';



export default function Home() {
  return (<>
    <CartState>
    <MainHeader/>
    </CartState>
<Figure>
      <Figure.Image
        width={1300}
        height={100}
        alt="171x180"
        src={pic}
      />
</Figure>

 
    </>
  )
}
