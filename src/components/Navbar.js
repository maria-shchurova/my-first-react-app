import React, {useState, useEffect} from 'react'
import './Navbar.css';
import logo from "../../src/assets/Logo_Devolution_small.png"


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960)
        {
            setButton(false);
        }
        else{
            setButton(true);
        }
    }

    useEffect(( )=>
        {
            showButton();
        },[button]);

    window.addEventListener('resize', showButton);
  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img src={logo} alt="devolution logo"/>
                </div>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <p className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </p>
                    </li>
                    <li className='nav-item'>
                        <p className='nav-links' onClick={closeMobileMenu}>
                            About
                        </p>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar
