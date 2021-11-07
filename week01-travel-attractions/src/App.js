import React from 'react';
import './index.css';
import './App.css';
import Card from './component/Card';
import HeroSection from './component/HeroSection';
import AllViewList from './component/AllViewList';


function App() {
  return (
    <React.Fragment>
       <HeroSection/>
       <AllViewList/>
    </React.Fragment>
    
  );
}

export default App;
