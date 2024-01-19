import React from 'react';
import Navbar from '../components/Navbar';

function Nutrition() {
    return (
        <div>
            <Navbar />
            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-1 flex flex-col justify-center items-center">
                    <h1 className=''>Section 1</h1>
                    <h1>Section 2</h1>
                </div>
                <div className="col-span-3">
                    <h1>Section 1</h1>
                    <h1>Section 2</h1>
                </div>
            </div>
        </div>
    );
}


export default Nutrition;