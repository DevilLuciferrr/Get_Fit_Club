import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Join from './components/Join/Join';
import Plans from './components/Plans/Plans';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Testimonials from './components/Testimonials/Testimonials';
import { useEffect } from 'react';

function App() {
  
  useEffect(()=>{
      for(let i=1;i<=10;i++){
        console.log(i)
    }
  },[1000])
  return (
    <div className="App">
      <Hero></Hero>
      <Programs></Programs>
      <Reasons></Reasons>
      <Plans></Plans>
      <Testimonials></Testimonials>
      <Join></Join>
      <Footer></Footer>
    </div>
  );
}

export default App;
