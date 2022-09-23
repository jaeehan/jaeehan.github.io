import React, {useState} from 'react';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);

    const closeMobileMenu = () => setClick(false);
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <a href="https://jaeehan.github.io/resume" className='nav-links' onClick={closeMobileMenu}>
                            Resume
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href="https://github.com/jaeehan" className='nav-links' onClick={closeMobileMenu}>
                            GitHub
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href="https://www.linkedin.com/in/jaeehan/" className='nav-links' onClick={closeMobileMenu}>
                            LinkedIn
                        </a>
                    </li>
                    
                    <li>
                        <a href="mailto:jaeehan@gmail.com" className='nav-links' onClick={closeMobileMenu}>
                            Email
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar;
