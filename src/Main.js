import React from 'react';
import Navbar from './components/Navbar';

function Main() {
    return (
      <div className='flex flex-col h-screen w-screen bg-soft-cream'>
          <Navbar />
          <h1 className='text-center text-4xl font-bold py-8'>Welcome to the cat wiki!</h1>
      </div>
    );
}

export default Main;
