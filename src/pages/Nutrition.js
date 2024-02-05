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
                    <p className="text-base mt-1">Protein: Cats are obligate carnivores, which means their diet must be primarily composed of meat. High-quality animal-based proteins should be the foundation of their diet, providing essential amino acids like taurine, which is crucial for heart health, vision, and reproduction.
                    <br />Fats: Fats provide energy, help absorb certain vitamins, and contribute to a healthy skin and coat. Essential fatty acids, such as omega-3 and omega-6, are vital for maintaining overall health.
                    <br />Vitamins: Cats need various vitamins in their diet, including vitamins A, D, E, K, and the B-complex vitamins. Each plays a unique role in maintaining bodily functions, from supporting vision and bone health to aiding in metabolism and immune response.
                    <br />Minerals: Essential minerals like calcium, phosphorus, magnesium, and potassium are important for strong bones and teeth, nerve function, and muscle health. The balance between minerals like calcium and phosphorus is particularly important.
                    <br />Water: Adequate hydration is crucial for cats, as it supports kidney function and overall health. Cats may not have a strong drive to drink water, so providing wet food in their diet can help ensure they stay hydrated.
                    <br />Taurine: This amino acid is critical for cats and must be provided in their diet. A deficiency in taurine can lead to serious health issues, including heart disease and blindness.
                    <br />Carbohydrates: They are NOT recommended for cats as they have adapted to attain most of their energy from protien and fats. Giving a carb heavy diet may result in things like obesity, digestive issues, and nutritional imbalances.</p>
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