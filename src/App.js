import React from 'react';
import { Blog, Header, WhatGPT3, Footer,Features, Posibility } from './container'
import { Brand, Cta,Navbar }  from './component';
import './App.css'



function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
       <Navbar/>
       <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Posibility/>
      <Cta/>
      <Blog/>
      <Footer/>
      
    </div>
  );
}

export default App;
