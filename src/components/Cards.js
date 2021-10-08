import React from 'react'
import Carditem from './Carditem';
import './Card.css';


function Cards() {
return (
<>
<div className="cards">
<h1>Check out these EPIC Destinations!</h1>
<div className="cards__conatiner">
<div className="cards__wrapper">
<ul className="cards__items">

<Carditem
src="https://ik.imagekit.io/y30wnrs9bpc/images/img-9_OS38HH1iE.jpg?updatedAt=1632152383021"
text="Explore the hidden waterfall deep inside the amazone jungle"
label="Adventure"
path="/services"

/>
<Carditem
src="https://ik.imagekit.io/y30wnrs9bpc/images/img-2_wHwWJQT9Y.jpg?updatedAt=1632152393518"
text="Travel through the islands of bali in a private cruise"
label="Luxury"
path="/services"

/>

</ul>

<ul className="cards__items">

<Carditem
src="https://ik.imagekit.io/y30wnrs9bpc/images/img-9_OS38HH1iE.jpg?updatedAt=1632152383021"
text="Explore the hidden waterfall deep inside the amazone jungle"
label="Adventure"
path="/services"

/>
<Carditem
src="https://ik.imagekit.io/y30wnrs9bpc/images/img-2_wHwWJQT9Y.jpg?updatedAt=1632152393518"
text="Travel through the islands of bali in a private cruise"
label="Luxury"
path="/services"

                        />
                        
                        <Carditem
src="https://ik.imagekit.io/y30wnrs9bpc/images/img-2_wHwWJQT9Y.jpg?updatedAt=1632152393518"
text="Travel through the islands of bali in a private cruise"
label="Luxury"
path="/services"

/>

</ul>
</div>
</div>
</div>
</>
);

}

export default Cards
