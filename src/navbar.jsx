import React,{useState} from "react";
import logo from './Images/logo2.png'
import { links } from "./data";
import './navbar.css';

function Navbar (){
    const[nav,setnav] = useState(false); 

    const changeBackground = () => {
        if(window.scrollY >= 50){
            setnav(true);
        }
        else{
            setnav(false);
        }
    }
    window.addEventListener('scroll',changeBackground);
    const handleClick = (e) =>{
        e.preventDefault();
        const target = e.target.getAttribute('href');
        const location = document.querySelector(target).offsetTop;

        window.scrollTo({
            left:0,
            top: location-64,
        })
    }
    return( 
        <nav className={nav ? 'nav sticky' : 'nav'} >
            <div className="nav-center">
                <img src = {logo} className='image1' alt='smooth-scroll'/>
                <div className="links">
                    {links.map((link) =>{
                        return(
                            <a href={link.url} key={link.id} onClick={handleClick}>
                                {link.text}
                            </a>
                        )
                    })}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;