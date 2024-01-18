import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div className={`bg-earthy-green text-soft-cream p-4 py-7 flex flex-col xl:flex-row justify-between w-full ${isMenuOpen ? 'left-0 xl:relative' : 'xl:relative'}`}>
        {/* Top Bar with Home Link and Hamburger Menu */}
            <div className='flex justify-between items-center '>
                <Link to="/" className="hover:text-white px-3">Home</Link>
                <button className="xl:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>

            {/* Full Navbar for All Screens */}
            <div className={`mt-4 xl:mt-0 ${isMenuOpen ? 'flex' : 'hidden'} xl:flex flex-col xl:flex-row space-y-4 xl:space-y-0 xl:space-x-4 w-full justify-end sticky top-0 z-10`}>
                {/* Cat Food & Nutrition Dropdown */}
                <div className="dropdown relative" onBlur={() => setIsDropdownOpen(false)}>
                    <div className="hover:text-white py-2 px-3 flex justify-between mx-2">
                        <div>
                            <Link to="/food-nutrition">Food & Nutrition</Link>
                        </div>
                        <div className='my-auto' onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                            <IoIosArrowDown className='block xl:hidden h-6 w-6'/>
                        </div>
                    </div>
                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                        <div className="dropdown-menu absolute w-48 mt-2 py-2 bg-white rounded-lg shadow-xl">
                            <Link to="/food-nutrition#requirements" className="block px-4 py-2 hover:bg-gray-200">Nutritional Requirements</Link>
                            <Link to="/food-nutrition#recommended-foods" className="block px-4 py-2 hover:bg-gray-200">Recommended Foods</Link>
                            <Link to="/food-nutrition#special-diets" className="block px-4 py-2 hover:bg-gray-200">Special Diets</Link>
                            <Link to="/food-nutrition#safety" className="block px-4 py-2 hover:bg-gray-200">Food Safety and Storage</Link>
                            <Link to="/food-nutrition#reviews" className="block px-4 py-2 hover:bg-gray-200">Food Reviews</Link>
                        </div>
                    )}
                </div>

                {/* Cat Litter & Hygiene Dropdown */}
                <div className="dropdown relative">
                    <Link to="/litter-hygiene" className="hover:text-white py-2 px-3 flex justify-between mx-2">
                        <div>
                            <h1>Litter & Hygiene</h1>
                        </div>
                        <div className='my-auto'>
                            <IoIosArrowDown className='block xl:hidden h-6 w-6'/>
                        </div>
                    </Link>
                    <div className="dropdown-menu absolute hidden xl:hover:block bg-gray-700 text-white">
                        <Link to="/litter-hygiene#types-of-litter" className="py-2 px-4 block hover:bg-gray-600">Types of Litter</Link>
                        <Link to="/litter-hygiene#litter-box-maintenance" className="py-2 px-4 block hover:bg-gray-600">Litter Box Maintenance</Link>
                        <Link to="/litter-hygiene#litter-box-training" className="py-2 px-4 block hover:bg-gray-600">Litter Box Training</Link>
                        <Link to="/litter-hygiene#common-issues" className="py-2 px-4 block hover:bg-gray-600">Common Issues</Link>
                        <Link to="/litter-hygiene#product-reviews" className="py-2 px-4 block hover:bg-gray-600">Product Reviews</Link>
                    </div>
                </div>

                {/* Behavior & Training Dropdown */}
                <div className="dropdown relative">
                    <Link to="/behavior-training" className="hover:text-white py-2 px-3 flex justify-between mx-2">
                        <div>
                            <h1>Behavior & Training</h1>
                        </div>
                        <div className='my-auto'>
                            <IoIosArrowDown className='block xl:hidden h-6 w-6'/>
                        </div>
                    </Link>
                    <div className="dropdown-menu absolute hidden xl:hover:block bg-gray-700 text-white">
                        <Link to="/behavior-training#understanding-behavior" className="py-2 px-4 block hover:bg-gray-600">Understanding Behavior</Link>
                        <Link to="/behavior-training#training-basics" className="py-2 px-4 block hover:bg-gray-600">Training Basics</Link>
                        <Link to="/behavior-training#behavioral-issues" className="py-2 px-4 block hover:bg-gray-600">Behavioral Issues</Link>
                        <Link to="/behavior-training#enrichment-toys" className="py-2 px-4 block hover:bg-gray-600">Enrichment and Toys</Link>
                        <Link to="/behavior-training#socialization-tips" className="py-2 px-4 block hover:bg-gray-600">Socialization Tips</Link>
                    </div>
                </div>

                {/* Health & Wellness Dropdown */}
                <div className="dropdown relative">
                    <Link to="/health-wellness" className="hover:text-white py-2 px-3 flex justify-between mx-2">
                        <div>
                            <h1>Health & Wellness</h1>
                        </div>
                        <div className='my-auto'>
                            <IoIosArrowDown className='block xl:hidden h-6 w-6'/>
                        </div>
                    </Link>
                    <div className="dropdown-menu absolute hidden xl:hover:block bg-gray-700 text-white">
                        <Link to="/health-wellness#common-health-issues" className="py-2 px-4 block hover:bg-gray-600">Common Health Issues</Link>
                        <Link to="/health-wellness#preventative-care" className="py-2 px-4 block hover:bg-gray-600">Preventative Care</Link>
                        <Link to="/health-wellness#vaccinations" className="py-2 px-4 block hover:bg-gray-600">Vaccinations</Link>
                        <Link to="/health-wellness#spaying-neutering" className="py-2 px-4 block hover:bg-gray-600">Spaying and Neutering</Link>
                        <Link to="/health-wellness#first-aid" className="py-2 px-4 block hover:bg-gray-600">First Aid Tips</Link>
                        <Link to="/health-wellness#vet-visits" className="py-2 px-4 block hover:bg-gray-600">When to Visit a Vet</Link>
                    </div>
                </div>

                {/* Cat Breeds Dropdown */}
                <div className="dropdown relative">
                    <Link to="/breeds" className="hover:text-white py-2 px-3 flex justify-between mx-2">
                        <div>
                            <h1>Breeds</h1>
                        </div>
                        <div className='my-auto'>
                            <IoIosArrowDown className='block xl:hidden h-6 w-6'/>
                        </div>
                    </Link>
                    <div className="dropdown-menu absolute hidden xl:hover:block bg-gray-700 text-white">
                        <Link to="/breeds#overview" className="py-2 px-4 block hover:bg-gray-600">Overview of Breeds</Link>
                        <Link to="/breeds#breed-specific-care" className="py-2 px-4 block hover:bg-gray-600">Breed-Specific Care</Link>
                        <Link to="/breeds#choosing-right-breed" className="py-2 px-4 block hover:bg-gray-600">Choosing the Right Breed</Link>
                    </div>
                </div>

                {/* Product Reviews & Recommendations Dropdown */}
                <div className="dropdown relative">
                    <Link to="/product-reviews" className="hover:text-white py-2 px-3 flex justify-between mx-2">
                        <div>
                            <h1>Product Reviews</h1>
                        </div>
                        <div className='my-auto'>
                            <IoIosArrowDown className='block xl:hidden h-6 w-6'/>
                        </div>
                    </Link>
                    <div className="dropdown-menu absolute hidden xl:hover:block bg-gray-700 text-white">
                        <Link to="/product-reviews#food-treats" className="py-2 px-4 block hover:bg-gray-600">Food and Treats</Link>
                        <Link to="/product-reviews#litter-boxes" className="py-2 px-4 block hover:bg-gray-600">Litter and Litter Boxes</Link>
                        <Link to="/product-reviews#toys" className="py-2 px-4 block hover:bg-gray-600">Toys and Enrichment</Link>
                        <Link to="/product-reviews#grooming-tools" className="py-2 px-4 block hover:bg-gray-600">Grooming Tools</Link>
                        <Link to="/product-reviews#beds-furniture" className="py-2 px-4 block hover:bg-gray-600">Beds and Furniture</Link>
                    </div>
                </div>

                {/* Additional Single Link - About */}
                <div>
                    <Link to="/about" className="hover:text-white py-2 px-3 flex justify-between mx-2">
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