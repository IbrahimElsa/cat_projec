import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white text-center mt-16 xl:ml-60 xl:mt-0 fixed bottom-0 left-0 right-0">
            <div className="container mx-auto">
                <p>&copy; {new Date().getFullYear()} My Website</p>
                <p>Follow us on social media:</p>
                <div className="flex justify-center space-x-4">
                    <a href="#" className="hover:text-gray-400">Facebook</a>
                    <a href="#" className="hover:text-gray-400">Twitter</a>
                    <a href="#" className="hover:text-gray-400">Instagram</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
