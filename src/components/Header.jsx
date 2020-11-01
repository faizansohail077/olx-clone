import React from 'react'
import './Header.css'
import logo from '../Image/logo.svg'
import SearchIcon from '@material-ui/icons/Search';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { auth, provider } from './firebase/firebase'


function Header() {
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then(result => {
                console.log(result)
            })
            .catch(error => (alert(error.message)))
    }

    return (
        <div>
            <div className='header'>
                <Link to='/'>
                    <img className="header__logo" src={logo} alt="" />
                </Link>
                <div className="header__left">
                    <SearchIcon className="header__searchIcon" />
                    <input placeholder='enter country' />
                    <KeyboardArrowDownIcon className="header__keydown" />
                </div>
                <div className="header__right">
                    <input placeholder='Find Cars,mobile Phones and more' />
                    <SearchIcon className="header__rightSearch" />
                </div>
                <div className="header__button">
                    <Button onClick={signIn}>Login</Button>
                    <Button variant='contained'>Sell</Button>
                </div>

            </div>
            <div className="header__navigation">
                <nav className="links">
                   <Link to='/'>
                    <h5 >All catagories</h5>

                    </Link>
                    <Link to='/Car'>
                        <h5>Car</h5>
                    </Link>
                    <Link to='/Motercycles'>
                        <h5>Motercycles</h5>
                    </Link>
                    <Link to='/House'>
                        <h5>Houses</h5>
                    </Link>
                    <Link to="/Tv_product">
                        <h5>Tv-Video-Audio</h5>
                    </Link>
                    {/* <Link to="/Tablets">
                        <h5>Tablets</h5>
                    </Link> */}
                </nav>
            </div>
        </div>
    )
}

export default Header
