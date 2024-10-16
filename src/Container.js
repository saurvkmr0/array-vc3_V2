import React from 'react'
import Navbar from './Header/Navbar'
import heroBg from './assets/img/banner/banner-bg.png'
import { useTheme } from './Header/ThemeContext';
import HeroText from './Home/HeroText';

import ColorPicker from './component/ColorPicker';

import './style.css'; 
import Section from './Home/Section';
import Footer from './component/Footer';



const Container = () => {
  const { theme } = useTheme();
  return (
    <div className="">
      <div className={`z-[-99] absolute bg-cover bg-center h-screen w-full ${theme==='dark'?'bg-black':'bg-white'}`}  >
      {/* style={{ backgroundImage: `url(${heroBg})` }} */}
      </div>
        <Navbar />
        <HeroText />
        <Section />
        <Footer />
        
        {/* <div className="fixed bottom-8 right-8"><ColorPicker /></div> */}
    </div>
  )
}

export default Container