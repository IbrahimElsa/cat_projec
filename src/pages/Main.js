import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cat_breed_main from '../assets/Cat_breed_main.webp';
import healthy_cat from '../assets/healthy-cat.jpg';

function Main() {
return (
    <div className=" mt-16 xl:ml-60 xl:mt-0"> 
        <div>
        <Navbar />
            {/* Hero Section */}
            <section className="text-center bg-gray-200 py-40">
                    <h2 className="text-4xl font-bold">Welcome to Cat Wiki</h2>
                    <p className="mt-4 text-xl">Your one-stop destination for all things feline!</p>
            </section>

            {/* Introduction Section */}
            <section className="my-8 px-4">
                <h3 className="text-2xl font-semibold">Learn About Cats</h3>
                    <p className="mt-2">
                        Discover fascinating facts about cats, understand their care needs, and explore tips on nutrition, hygiene,
                        general health, and more.
                    </p>
            </section>

            {/* Topic Links */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 my-8">
                {/* Each of these divs represents a topic link */}
                <div className="bg-gray-300 p-6 rounded-lg shadow-lg"      style={{ 
                        backgroundImage: `url(${Cat_breed_main})`, 
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center' 
                    }}>
                    <h4 className="font-semibold text-lg text-soft-cream">Cat Breeds</h4>
                    <p className='text-soft-cream'>Explore various cat breeds.</p>
                </div>
                <div className="bg-gray-300 p-6 rounded-lg shadow-lg"      style={{ 
                        backgroundImage: `url(${healthy_cat})`, 
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center' 
                    }}>
                    <h4 className="font-semibold text-lg text-soft-cream">Cat Care</h4>
                    <p className='text-soft-cream'>Learn how to take care of your cat.</p>
                </div>
                <div className="bg-gray-300 p-6 rounded-lg shadow-lg">
                    <h4 className="font-semibold text-lg">Cat Nutrition</h4>
                    <p>Understand the dietary needs of cats.</p>
                </div>
            </section>
        <Footer />
        </div>
    </div>
);
};

export default Main;
