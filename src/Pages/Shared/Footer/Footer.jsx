import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div>
            <footer>
                {/* Footer Top */}
                <div className=" md:flex justify-center items-center w-full text-white">
                    <div className='text-center bg-teal-700 md:w-5/6 md:h-60 h-52 flex flex-col justify-center items-center md:items-end md:pr-24 gap-2'>
                        <h2 className='text-2xl uppercase block'>Contact Us</h2>
                        <p>123 ABS Street, Uni 21, Bangladesh</p>
                        <p>+88 123456789</p>
                        <p>Mon - Fri: 08:00 - 22:00</p>
                        <p>Sat - Sun: 10:00 - 23:00</p>
                    </div>
                    <div className='md:w-5/6 bg-slate-500 md:h-60 h-52 flex flex-col justify-center items-center md:items-start md:pl-24 gap-3'>
                        <h2 className='text-2xl uppercase'>Follow Us</h2>
                        <p>Join us on social media</p>
                        <ul className='flex'>
                            <li><FaFacebook></FaFacebook></li>
                            <li><FaInstagram></FaInstagram></li>
                            <li><FaX></FaX></li>
                        </ul>
                    </div>
                </div>
                {/* Footer Bottom/ Copyright text */}
                <div className='text-center py-3 bg-black text-white'>&copy; Copyrights | 2024 | Iamrokibul</div>
            </footer>
        </div>
    );
};

export default Footer;