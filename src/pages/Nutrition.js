import React from 'react';
import Navbar from '../components/Navbar';
import ProductCarousel from '../components/ProductCarousel';
import Cat1 from '../assets/catWikiLogo.png';



function Nutrition() {
    const reviews = [
        { id: 1, title: "Product 1", imageSrc: Cat1 },
        { id: 2, title: "Product 2", imageSrc: Cat1 },
    ];


    return (
        <div className="flex">
            <Navbar />
            <div className="xl:ml-64 pt-16 xl:pt-0">
                <div className="flex flex-col justify-center items-center">
                </div>
                <div className="">
                    <h1 id='requirements' className="text-2xl mb-1 text-mid-green font-bold xl:pl-4 pt-4 pl-2">Nutritional Requirements</h1>
                    <p className="text-base mt-1 xl:pl-2 pl-4">
                        Protein: Cats are obligate carnivores, which means their diet must be primarily composed of meat. High-quality animal-based 
                        proteins should be the foundation of their diet, providing essential amino acids like taurine, which is crucial for heart health, vision, and reproduction.
                        <br />Fats: Fats provide energy, help absorb certain vitamins, and contribute to a healthy skin and coat. Essential fatty acids, such as omega-3 and omega-6, are vital for maintaining overall health.
                        <br /><br />Vitamins: Cats need various vitamins in their diet, including vitamins A, D, E, K, and the B-complex vitamins. Each plays a unique role in 
                        maintaining bodily functions, from supporting vision and bone health to aiding in metabolism and immune response.
                        <br /><br />Minerals: Essential minerals like calcium, phosphorus, magnesium, and potassium are important for strong bones and teeth, nerve function, 
                        and muscle health. The balance between minerals like calcium and phosphorus is particularly important.
                        <br /><br />Water: Adequate hydration is crucial for cats, as it supports kidney function and overall health. Cats may not have a strong drive to drink 
                        water, so providing wet food in their diet can help ensure they stay hydrated. Pouring some water over dry food can also help increase their water intake.
                        <br /><br />Taurine: This amino acid is critical for cats and must be provided in their diet. A deficiency in taurine can lead to serious health issues, 
                        including heart disease and blindness.
                        <br /><br />Carbohydrates: They are NOT recommended for cats as they have adapted to attain most of their energy from protien and fats. Giving a carb 
                        heavy diet may result in things like obesity, digestive issues, and nutritional imbalances.</p>
                    <h1 id='recommended-foods' className="text-2xl mb-1 text-mid-green font-bold xl:pl-4 pt-4 pl-2" >Recommended Foods</h1>
                    <p className="text-base mt-1 xl:pl-2 pl-4">
                        High-Quality Dry Food (Kibble): Look for brands that list a high-quality animal protein (e.g., chicken, turkey, fish) as the first few ingredient and
                        that are formulated to meet the nutritional levels established by the AAFCO Cat Food Nutrient Profiles for the specific life stage of your cat.
                        <br /><br />Wet Food (Canned, Pouches): Wet food is highly recommended for hydration and can be especially beneficial for cats prone to urinary tract 
                        issues. It should also have a high-quality animal protein as the primary ingredient.
                        <br /><br />Raw or Freeze-Dried Foods: Some owners choose raw diets for their cats, which can be commercial or homemade. Commercial raw diets should be 
                        purchased from reputable brands that ensure the food is pathogen-free and nutritionally balanced.
                        <br /><br />Homemade Diets: If you choose to prepare your cat’s food at home, it’s important to work with a veterinary nutritionist to ensure the diet 
                        is balanced and meets your cat’s nutritional needs. Homemade diets can be time-consuming and require careful planning to ensure they are nutritionally 
                        complete, but may be the best option for offering your cat a high-quality diet.
                    </p>
                    <h1 id='special-diets' className="text-2xl mb-1 text-mid-green font-bold xl:pl-4 pt-4 pl-2" >Special Diets</h1>
                    <p className="text-base mt-1 xl:pl-2 pl-4">
                        Weight Management: If your cat is overweight or obese, a special diet may be recommended to help them lose weight. These diets are typically lower in 
                        calories and higher in fiber to help cats feel full while consuming fewer calories. They may also contain added nutrients to support weight loss and 
                        overall health.
                        <br /><br />Urinary Health: Cats prone to urinary issues may benefit from a special diet that helps maintain a healthy urinary pH and reduce the risk of 
                        crystals or stones. These diets are formulated to support urinary health and may contain added nutrients to help prevent urinary tract issues.
                        <br /><br />Sensitive Stomach: Cats with sensitive stomachs may benefit from a special diet that is easy to digest and less likely to cause gastrointestinal 
                        upset. These diets are formulated to be gentle on the stomach and may contain added nutrients to support digestive health.
                        <br /><br />Limited ingredient: Cats with food allergies may benefit from a special, limited ingredient diet that is free from common allergens, such as chicken, beef, or grains. These 
                        diets are formulated to be hypoallergenic and may contain novel protein sources and limited ingredients to reduce the risk of allergic reactions.
                    </p>
                    <h1 id='safety' className="text-2xl mb-1 text-mid-green font-bold xl:pl-4 pt-4 pl-2">Food Safety and Storage</h1>
                    <p className="text-base mt-1 xl:pl-2 pl-4">
                        Food Safety: Always check the expiry date on the cat food packeging before purchasing and feeding it to your cat, ensuring that the food is within the 
                        safe consumption period. Be aware of food recalls for cat food brands and products, as they may be contaminated or other safety concerns with the product. 
                        <br /><br />Handling Dry food: store dry food in a cool, dry place, and keep it in the original packaging or an airtight container to maintain freshness and to
                        prevent pests. Ensure the food is not exposed to moisture or humidity, as this can cause mold growth and spoilage.
                        <br /><br />Handling Wet food: Once the wet food has been opened, canned cat food should be covered and refrigerated, if not all consumed in one sitting. 
                        The food is generally safe to keep refrigerated for up to 3-5 days. For the next meal, be sure to serve it at room temperature to make it more palatable for the cat.
                        Refrigerated food can be gently warmed by placing the container in a bowl of warm water for a few minutes. The wet food should never be microwaved as 
                        the heat can create hot spots and burn the cat’s mouth.
                    </p>
                    <h1 id='reviews' className="text-2xl mb-1 text-mid-green font-bold xl:pl-4 pt-4 pl-2">Food Reviews</h1>
                    <ProductCarousel reviews={reviews} />
                </div>
            </div>
        </div>
    );
}

export default Nutrition;