import React from 'react';
import Navbar from '../components/Navbar';

function Nutrition() {
    return (
        <div>
            <Navbar />
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1">
                    <h2>Section 1</h2>
                    <h2>Section 2</h2>
                </div>
                <div className="col-span-2">
                    <p>Testing</p>
                </div>
            </div>
        </div>
    );
}

export default Nutrition;