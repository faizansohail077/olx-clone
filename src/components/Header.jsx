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
                <img className="header__logo" src={logo} alt="" />
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
                <nav>
                    <h5 >All catagories</h5>
                    <Link to='/car'>
                        <h5>car</h5>
                    </Link>
                    <h5>Motercycles</h5>
                    <h5>Houses</h5>
                    <h5>Tv-Video-Audio</h5>
                    <h5>Tablets</h5>
                </nav>
            </div>
        </div>
    )
}

export default Header
