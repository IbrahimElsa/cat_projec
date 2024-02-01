import React from 'react';
import Navbar from '../components/Navbar';

function Nutrition() {
    return (
        <div className="flex">
            <Navbar />
            <div className="xl:ml-64">
                <div className="flex flex-col justify-center items-center">
                </div>
                <div className="">
                    <h1 className="text-2xl mb-1">Nutritional Requirements</h1>
                    <p className="text-base mt-1">Section Nutritional</p>
                    <h1 className="text-2xl mb-1">Recommended Foods</h1>
                    <p className="text-base mt-1">Section Recommended</p>
                    <h1 className="text-2xl mb-1">Special Diets</h1>
                    <p className="text-base mt-1">Section Diets</p>
                    <h1 className="text-2xl mb-1">Food Safety and Storage</h1>
                    <p className="text-base mt-1">Section Safety and Storage</p>
                    <h1 className="text-2xl mb-1">Food Reviews</h1>
                    <p className="text-base mt-1">Section Reviews</p>
                </div>
            </div>
        </div>
    );
}

export default Nutrition;