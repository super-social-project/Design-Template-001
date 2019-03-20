import React, { Component } from 'react';
import './header.css'

const Header = () =>
    <div className='header'>
        <h1>LOGO</h1>
        <input type='text' placeholder='search bar'/>
        <div className='buttons'>
            <button>btn1</button>
            <button>btn1</button>
            <button>btn1</button>
            <button>Acnt</button>
        </div>
    </div>

export default Header