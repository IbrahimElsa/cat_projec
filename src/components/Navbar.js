import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="bg-earthy-green text-soft-cream p-4 flex flex-col md:flex-row justify-between w-full">
            {/* Top Bar with Home Link and Hamburger Menu */}
            <div className='flex justify-between items-center w-full'>
                <Link to="/" className="hover:text-white py-2 px-3">Home</Link>
                <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>

            {/* Full Navbar for All Screens */}
            <div className={`mt-4 md:mt-0 ${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4`}>
                {/* Cat Food & Nutrition Dropdown */}
                <div className="dropdown relative">
                    <Link to="/cat-food-nutrition" className="hover:text-white py-2 px-3">
                        Cat Food & Nutrition
                    </Link>
                    <div className="dropdown-menu absolute hidden md:hover:block bg-gray-700 text-white">
                        <Link to="/cat-food-nutrition#requirements" className="py-2 px-4 block hover:bg-gray-600">Nutritional Requirements</Link>
                        <Link to="/cat-food-nutrition#recommended-foods" className="py-2 px-4 block hover:bg-gray-600">Recommended Foods</Link>
                        <Link to="/cat-food-nutrition#special-diets" className="py-2 px-4 block hover:bg-gray-600">Special Diets</Link>
                        <Link to="/cat-food-nutrition#safety" className="py-2 px-4 block hover:bg-gray-600">Food Safety and Storage</Link>
                        <Link to="/cat-food-nutrition#reviews" className="py-2 px-4 block hover:bg-gray-600">Food Reviews</Link>
                    </div>
                </div>

                {/* Cat Litter & Hygiene Dropdown */}
                <div className="dropdown relative">
                    <Link to="/cat-litter-hygiene" className="hover:text-white py-2 px-3">
                        Cat Litter & Hygiene
                    </Link>
                    <div className="dropdown-menu absolute hidden md:hover:block bg-gray-700 text-white">
                        <Link to="/cat-litter-hygiene#types-of-litter" className="py-2 px-4 block hover:bg-gray-600">Types of Litter</Link>
                        <Link to="/cat-litter-hygiene#litter-box-maintenance" className="py-2 px-4 block hover:bg-gray-600">Litter Box Maintenance</Link>
                        <Link to="/cat-litter-hygiene#litter-box-training" className="py-2 px-4 block hover:bg-gray-600">Litter Box Training</Link>
                        <Link to="/cat-litter-hygiene#common-issues" className="py-2 px-4 block hover:bg-gray-600">Common Issues</Link>
                        <Link to="/cat-litter-hygiene#product-reviews" className="py-2 px-4 block hover:bg-gray-600">Product Reviews</Link>
                    </div>
                </div>

                {/* Behavior & Training Dropdown */}
                <div className="dropdown relative">
                    <Link to="/behavior-training" className="hover:text-white py-2 px-3">
                        Behavior & Training
                    </Link>
                    <div className="dropdown-menu absolute hidden md:hover:block bg-gray-700 text-white">
                        <Link to="/behavior-training#understanding-behavior" className="py-2 px-4 block hover:bg-gray-600">Understanding Behavior</Link>
                        <Link to="/behavior-training#training-basics" className="py-2 px-4 block hover:bg-gray-600">Training Basics</Link>
                        <Link to="/behavior-training#behavioral-issues" className="py-2 px-4 block hover:bg-gray-600">Behavioral Issues</Link>
                        <Link to="/behavior-training#enrichment-toys" className="py-2 px-4 block hover:bg-gray-600">Enrichment and Toys</Link>
                        <Link to="/behavior-training#socialization-tips" className="py-2 px-4 block hover:bg-gray-600">Socialization Tips</Link>
                    </div>
                </div>

                {/* Health & Wellness Dropdown */}
                <div className="dropdown relative">
                    <Link to="/health-wellness" className="hover:text-white py-2 px-3">
                        Health & Wellness
                    </Link>
                    <div className="dropdown-menu absolute hidden md:hover:block bg-gray-700 text-white">
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
                    <Link to="/cat-breeds" className="hover:text-white py-2 px-3">
                        Cat Breeds
                    </Link>
                    <div className="dropdown-menu absolute hidden md:hover:block bg-gray-700 text-white">
                        <Link to="/cat-breeds#overview" className="py-2 px-4 block hover:bg-gray-600">Overview of Breeds</Link>
                        <Link to="/cat-breeds#breed-specific-care" className="py-2 px-4 block hover:bg-gray-600">Breed-Specific Care</Link>
                        <Link to="/cat-breeds#choosing-right-breed" className="py-2 px-4 block hover:bg-gray-600">Choosing the Right Breed</Link>
                    </div>
                </div>

                {/* Product Reviews & Recommendations Dropdown */}
                <div className="dropdown relative">
                    <Link to="/product-reviews" className="hover:text-white py-2 px-3">
                        Product Reviews
                    </Link>
                    <div className="dropdown-menu absolute hidden md:hover:block bg-gray-700 text-white">
                        <Link to="/product-reviews#food-treats" className="py-2 px-4 block hover:bg-gray-600">Food and Treats</Link>
                        <Link to="/product-reviews#litter-boxes" className="py-2 px-4 block hover:bg-gray-600">Litter and Litter Boxes</Link>
                        <Link to="/product-reviews#toys" className="py-2 px-4 block hover:bg-gray-600">Toys and Enrichment</Link>
                        <Link to="/product-reviews#grooming-tools" className="py-2 px-4 block hover:bg-gray-600">Grooming Tools</Link>
                        <Link to="/product-reviews#beds-furniture" className="py-2 px-4 block hover:bg-gray-600">Beds and Furniture</Link>
                    </div>
                </div>

                {/* Additional Single Link - About */}
                <Link to="/about" className="hover:text-white py-2 px-3">About</Link>
            </div>
        </div>
    );
};

export default Navbar;