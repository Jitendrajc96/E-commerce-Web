import React from "react";
import Figure from 'react-bootstrap/Figure';
import MainHeader from "../Components/Header/MainHeader";

import './About.css';
import MainFooter from "../Components/Footer/Footer";

export default function About() {
  return (
    <>
<MainHeader/>
      <div>
      <h1>About Us</h1>
      <p>
       E-Commerce, also known as e-Business, or electronic business,
       is simply the sale and purchase of services and goods over an electronic medium,
       like the Internet.
       It also involves electronically transferring data and funds between two or more parties.
       Simply put, it is online shopping as we commonly know it.
       E-Commerce started way back in the 1960s when organizations began to use Electronic Data Interchange (EDI) 
       to transfer documents of their business back and forth. 
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend interdum ipsum ut auctor. 
      In lobortis nibh et magna vehicula, aliquam luctus felis finibus. Cras vel turpis sit amet magna iaculis 
      egestas nec non est. Suspendisse euismod, enim et ullamcorper ullamcorper, nulla diam
       venenatis nisi, vitae imperdiet dui leo sed nisl. Fusce pulvinar, ligula sed tristique
        sodales, nisl velit aliquam nibh, sed cursus massa augue eget ipsum. Suspendisse 
        convallis auctor augue dictum egestas. Vivamus vehicula lobortis tristique. Nulla 
        facilisi. Morbi vitae leo odio. Etiam est lectus, dictum vitae arcu sit amet, 
        fringilla mollis felis.
      </p>
      <p>
      Maecenas vitae nulla malesuada, elementum leo non, hendrerit turpis. Fusce et 
      malesuada lorem, eget posuere massa. Integer dictum non purus ut interdum. Ut sed eros
      quam. Vestibulum vitae quam sapien. Duis nec sem nibh. Pellentesque condimentum 
      auctor massa. Donec sit amet dapibus sapien.
      </p>
      </div>
      <MainFooter/>
      
    </>
  );
}
