import { Camera } from 'lucide-react';
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import Workflow from './components/Workflow';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <>
    
    <Navbar/>
    <div className="max-w-7xl mx-auto pt-20 px-6">
    <Hero/>
    <FeatureSection/>
    <Workflow/>
    <Pricing/>
    <Testimonials/>
    <Footer/>
    </div>
    
    
    </>
   
  )
}

export default App
