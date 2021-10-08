import React, { useState ,useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';




function Navbar() {
const [click, setClick] = useState(false);
const [button, setButton] = useState(true)


const handleClick = () => setClick(!click);

const closeMobileMenu = () => setClick(false);

const showButton = () => {
if (window.innerWidth <= 960) {
setButton(false);
} else {
setButton(true);
}
};

    window.addEventListener('resize', showButton);
    
    useEffect(() => {
        showButton();
    
    }, []);

return (
<>
<nav className="navbar">
<div className="navbar-conatiner clearfix">
<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
<img src="https://ik.imagekit.io/y30wnrs9bpc/images/tra_UnHfVmCUS.png" width="50px" height="35px"/>
 </Link>
                

<div className="menu-icon" onClick={handleClick}>
<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
</div>
<ul className={click ? 'nav-menu active' : 'nav-menu'}>
<li className="nav-item">
<Link to='/' className='nav-links' onClick={closeMobileMenu}>
home</Link>
</li>
<li className="nav-item">
<Link to='/services' className='nav-links' onClick={closeMobileMenu}>
Services</Link>
</li>
<li className="nav-item">
<Link to='/Products' className='nav-links' onClick={closeMobileMenu}>
Products</Link>
</li>
<li className="nav-item">
<Link to='/Products' className='nav-links' onClick={closeMobileMenu}>
contact us</Link>
</li>
<li className="nav-item">
<Link to='/Sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
Sign Up
</Link>
</li>
<li>{button && <Button buttonStyle= 'btn--outline'>SIGN UP</Button>}</li>
</ul>

</div>

</nav>
</>
)
}

export default Navbar;
