import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/img/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer p-28 bg-black text-white">
            <div>
                <Link to="/" className="btn btn-ghost normal-case text-xl mb-3">
                    <img src={logo} alt="" className='logo rounded-xl mr-3' />
                    <h2 className='text-2xl text-rose-500'>Pro || Doctor</h2>
                </Link>
                <p className='text-xl text-sky-500 mt-4'>Copy Right 2022 || All Rights  <br />
                Reserved Doctor Service...&copy;</p>
            </div> 
            <div>
                <span className="footer-title">Services</span> 
                <Link to="">Branding</Link> 
                <Link to="">Design</Link> 
                <Link to="">Marketing</Link> 
                <Link to="">Advertisement</Link>
            </div> 
            <div>
                <span className="footer-title">Company</span> 
                <Link to="">About us</Link> 
                <Link to="">Contact</Link> 
                <Link to="">Jobs</Link> 
                <Link to="">Press kit</Link>
            </div> 
            <div>
                <span className="footer-title">Legal</span> 
                <Link to="">Terms of use</Link> 
                <Link to="">Privacy policy</Link> 
                <Link to="">Cookie policy</Link>
            </div>
            </footer>
    );
};

export default Footer;