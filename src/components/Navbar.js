import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import Logo from '../assets/catWikiLogo.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState('');
    const location = useLocation();
    const desktopBreakpoint = 768; // Tailwind CSS md breakpoint

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= desktopBreakpoint) {
                setOpenDropdown(determineOpenDropdown(location.pathname));
            } else {
                setOpenDropdown('');
            }
        };

        const determineOpenDropdown = (path) => {
            if (path.includes('/food-nutrition')) return 'food-nutrition';
            if (path.includes('/litter-hygiene')) return 'litter-hygiene';
            if (path.includes('/behavior-training')) return 'behavior-training';
            if (path.includes('/health-wellness')) return 'health-wellness';
            if (path.includes('/breeds')) return 'breeds';
            if (path.includes('/product-reviews')) return 'product-reviews';
            return '';
        };

        handleResize(); // Call on mount

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [location]);

    const toggleDropdown = (dropdownName) => {
        if (window.innerWidth >= desktopBreakpoint) {
            setOpenDropdown(openDropdown === dropdownName ? '' : dropdownName);
        }
    };

    return (
        <div className={`bg-earthy-green text-soft-cream flex flex-col w-full xl:w-[250px] h-auto xl:h-full fixed left-0 top-0 xl:flex-col `}>
            {/* Top Bar with Home Link and Hamburger Menu */}
            <div className='flex justify-between items-center'>
                <div className="flex xl:mx-auto items-center">
                    <Link to="/" className="hover:text-white xl:translate-y-3">
                        <img src={Logo} alt="Logo" className="h-16 xl:h-28" />
                    </Link>
                </div>
                <button className="xl:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>

            {/* Full Navbar for All Screens */}
            <div className={`mt-4 xl:mt-0 xl:pt-5 ${isMenuOpen ? 'flex' : 'hidden'} xl:flex flex-col space-y-4 xl:space-y-0 w-full`}>
                {/* Cat Food & Nutrition Dropdown */}
                <div className="dropdown " >
                    <div className={`hover:text-white py-2 flex justify-between mx-2 xl:pl-2 ${openDropdown === 'food-nutrition' ? 'text-white' : ''}`}  onClick={() => toggleDropdown('food-nutrition')} >                    
                        <div>
                            <Link to="/food-nutrition">Food & Nutrition</Link>
                        </div>
                        <IoIosArrowDown className={`block min-h-6 min-w-6  transform transition duration-300 ease-in-out ${openDropdown === 'food-nutrition' ? '-rotate-180' : ''}`}/>                    
                    </div>
                    {/* Dropdown Menu */}
                    {openDropdown === 'food-nutrition' && (
                        <div className="dropdown-menu mt-2 py-2 bg-[#a3bba3] xl:pl-2">
                            <Link to="/food-nutrition#requirements" className="block px-6 py-2 hover:bg-mid-green">Nutritional Requirements</Link>
                            <Link to="/food-nutrition#recommended-foods" className="block px-6 py-2 hover:bg-mid-green">Recommended Foods</Link>
                            <Link to="/food-nutrition#special-diets" className="block px-6 py-2 hover:bg-mid-green">Special Diets</Link>
                            <Link to="/food-nutrition#safety" className="block px-6 py-2 hover:bg-mid-green">Food Safety and Storage</Link>
                            <Link to="/food-nutrition#reviews" className="block px-6 py-2 hover:bg-mid-green">Food Reviews</Link>
                        </div>
                    )}
                </div>

                {/* Cat Litter & Hygiene Dropdown */}
                <div className="dropdown">
                    <div className={`hover:text-white py-2 flex justify-between mx-2 xl:pl-2 ${openDropdown === 'litter-hygiene' ? '' : ''}`} onClick={() => toggleDropdown('litter-hygiene')} >                    
                        <div>
                            <Link to="/litter-hygiene">Litter & Hygiene</Link>
                        </div>
                        <IoIosArrowDown className={`block min-h-6 min-w-6 transform transition duration-300 ease-in-out ${openDropdown === 'litter-hygiene' ? '-rotate-180' : ''}`}/>                    
                    </div>
                    {openDropdown === 'litter-hygiene' && (
                        <div className="dropdown-menu mt-2 py-2 bg-[#a3bba3] xl:pl-2 ">
                        <Link to="/litter-hygiene#types-of-litter" className="py-2 px-6 block hover:bg-mid-green">Types of Litter</Link>
                        <Link to="/litter-hygiene#litter-box-maintenance" className="py-2 px-6 block hover:bg-mid-green">Litter Box Maintenance</Link>
                        <Link to="/litter-hygiene#litter-box-training" className="py-2 px-6 block hover:bg-mid-green">Litter Box Training</Link>
                        <Link to="/litter-hygiene#common-issues" className="py-2 px-6 block hover:bg-mid-green">Common Issues</Link>
                        <Link to="/litter-hygiene#product-reviews" className="py-2 px-6 block hover:bg-mid-green">Product Reviews</Link>                        
                    </div>
                    )}
                </div>

                {/* Behavior & Training Dropdown */}
                <div className="dropdown">
                    <div className={`hover:text-white py-2 flex justify-between mx-2 xl:pl-2 ${openDropdown === 'behavior-training' ? '' : ''}`} onClick={() => toggleDropdown('behavior-training')} >                    
                        <div>
                            <Link to="/behavior-training">Behavior & Training</Link>
                        </div>
                        <IoIosArrowDown className={`block min-h-6 min-w-6  transform transition duration-300 ease-in-out ${openDropdown === 'behavior-training' ? '-rotate-180' : ''}`}/>                    
                    </div>
                    {openDropdown === 'behavior-training' && (
                        <div className="dropdown-menu mt-2 py-2 bg-[#a3bba3] xl:pl-2">
                        <Link to="/behavior-training#understanding-behavior" className="py-2 px-6 block hover:bg-mid-green">Understanding Behavior</Link>
                        <Link to="/behavior-training#training-basics" className="py-2 px-6 block hover:bg-mid-green">Training Basics</Link>
                        <Link to="/behavior-training#behavioral-issues" className="py-2 px-6 block hover:bg-mid-green">Behavioral Issues</Link>
                        <Link to="/behavior-training#enrichment-toys" className="py-2 px-6 block hover:bg-mid-green">Enrichment and Toys</Link>
                        <Link to="/behavior-training#socialization-tips" className="py-2 px-6 block hover:bg-mid-green">Socialization Tips</Link>                        
                        </div>
                    )}
                </div>

                {/* Health & Wellness Dropdown */}
                <div className="dropdown">
                    <div className={`hover:text-white py-2 flex justify-between mx-2 xl:pl-2 ${openDropdown === 'health-wellness' ? '' : ''}`} onClick={() => toggleDropdown('health-wellness')} >                    
                        <div>
                            <Link to="/health-wellness">Health & Wellness</Link>
                        </div>
                        <IoIosArrowDown className={`block min-h-6 min-w-6  transform transition duration-300 ease-in-out ${openDropdown === 'health-wellness' ? '-rotate-180' : ''}`}/>                    
                    </div>
                    {openDropdown === 'health-wellness' && (
                        <div className="dropdown-menu mt-2 py-2 bg-[#a3bba3] xl:pl-2">
                        <Link to="/health-wellness#common-health-issues" className="py-2 px-6 block hover:bg-mid-green">Common Health Issues</Link>
                        <Link to="/health-wellness#preventative-care" className="py-2 px-6 block hover:bg-mid-green">Preventative Care</Link>
                        <Link to="/health-wellness#vaccinations" className="py-2 px-6 block hover:bg-mid-green">Vaccinations</Link>
                        <Link to="/health-wellness#spaying-neutering" className="py-2 px-6 block hover:bg-mid-green">Spaying and Neutering</Link>
                        <Link to="/health-wellness#first-aid" className="py-2 px-6 block hover:bg-mid-green">First Aid Tips</Link>
                        <Link to="/health-wellness#vet-visits" className="py-2 px-6 block hover:bg-mid-green">When to Visit a Vet</Link>                        
                        </div>
                    )}
                </div>
                {/* Cat Breeds Dropdown */}
                <div className="dropdown">
                    <div className={`hover:text-white py-2 flex justify-between mx-2 xl:pl-2 ${openDropdown === 'breeds' ? '' : ''}`} onClick={() => toggleDropdown('breeds')} >                    
                        <div>
                            <Link to="/breeds">Breeds</Link>
                        </div>
                        <IoIosArrowDown className={`block min-h-6 min-w-6  transform transition duration-300 ease-in-out ${openDropdown === 'breeds' ? '-rotate-180' : ''}`}/>                    
                    </div>
                    {openDropdown === 'breeds' && (
                        <div className="dropdown-menu mt-2 py-2 bg-[#a3bba3] xl:pl-2">
                        <Link to="/breeds#overview" className="py-2 px-6 block hover:bg-mid-green">Overview of Breeds</Link>
                        <Link to="/breeds#breed-specific-care" className="py-2 px-6 block hover:bg-mid-green">Breed-Specific Care</Link>
                        <Link to="/breeds#choosing-right-breed" className="py-2 px-6 block hover:bg-mid-green">Choosing the Right Breed</Link>                        
                        </div>
                    )}
                </div>
                {/* Product Reviews & Recommendations Dropdown */}
                <div className="dropdown">
                    <div className={`hover:text-white py-2 flex justify-between mx-2 xl:pl-2 ${openDropdown === 'product-reviews' ? '' : ''}`} onClick={() => toggleDropdown('product-reviews')} >                    
                        <div>
                            <Link to="/product-reviews">Product Reviews</Link>
                        </div>
                        <IoIosArrowDown className={`block min-h-6 min-w-6  transform transition duration-300 ease-in-out ${openDropdown === 'product-reviews' ? '-rotate-180' : ''}`}/>                    
                    </div>
                    {openDropdown === 'product-reviews' && (
                        <div className="dropdown-menu mt-2 py-2 bg-[#a3bba3] xl:pl-2">
                        <Link to="/product-reviews#food-treats" className="py-2 px-6 block hover:bg-mid-green">Food and Treats</Link>
                        <Link to="/product-reviews#litter-boxes" className="py-2 px-6 block hover:bg-mid-green">Litter and Litter Boxes</Link>
                        <Link to="/product-reviews#toys" className="py-2 px-6 block hover:bg-mid-green">Toys and Enrichment</Link>
                        <Link to="/product-reviews#grooming-tools" className="py-2 px-6 block hover:bg-mid-green">Grooming Tools</Link>
                        <Link to="/product-reviews#beds-furniture" className="py-2 px-6 block hover:bg-mid-green">Beds and Furniture</Link>                        
                        </div>
                    )}
                </div>

                {/* Additional Single Link - About */}
                <div>
                    <Link to="/about" className="hover:text-white py-2 xl:pl-2 flex justify-between mx-2">
                        <div>
                            <h1>About</h1>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;