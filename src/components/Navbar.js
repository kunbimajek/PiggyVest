import React, {useEffect, useState} from 'react';
import logo from '../logo.svg';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [click, setClick] = useState(false);
  
    const handleClick = () => setClick(!click);

    useEffect(() => { 
        const handleScroll = () => {
            const offset = window.scrollY;
            if(offset > 0 ){
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener('scroll', handleScroll) 
    }, [])

    let navbarClasses = ['navbar'];
    if(scrolled){
        navbarClasses.push('scrolled');
    }

    return (
        <div className={navbarClasses.join(" ")}>
            <nav className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <a href="/" className="logo">
                            <img src={logo} alt="logo" />
                        </a>
                    </div>

                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>

                    <div className={`d-flex jc-sb ml-15 ${click ? 'nav-menu active' : 'nav-menu'}`}>
                        <div className="col-md-9 menu">
                            <a href="#save">Save</a>
                            <a href="https://www.piggyvest.com/invest" target="_blank" rel="noreferrer">Invest</a>
                            <a href="https://www.piggyvest.com/stories" target="_blank" rel="noreferrer">Stories</a>
                            <a href="https://www.piggyvest.com/faq" target="_blank" rel="noreferrer">FAQ</a>
                        </div>
                        <div className="col-md-3 btn-group ml-15">
                            <a href="https://dashboard.piggyvest.com/login" className="btn btn-white" target="_blank" rel="noreferrer">Log in</a>
                            <a href="https://dashboard.piggyvest.com/register" className="btn btn-default" target="_blank" rel="noreferrer">Sign up</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;