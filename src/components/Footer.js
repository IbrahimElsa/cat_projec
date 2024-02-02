import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="text-black text-center mt-16 xl:ml-64 xl:mt-0 fixed bottom-0 left-0 right-0">
            <div className="border-t border-mid-green w-10/12 mx-auto"></div>
            <div className="container mx-auto pt-4">
                <p>&copy; {new Date().getFullYear()} My Website</p>
                <div className="flex justify-center space-x-4 pb-4 pt-2">
                    <a href="#" className="hover:text-gray-400"><FaFacebook size={24} /></a>
                    <a href="#" className="hover:text-gray-400"><FaTwitter size={24} /></a>
                    <a href="#" className="hover:text-gray-400"><FaInstagram size={24} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;