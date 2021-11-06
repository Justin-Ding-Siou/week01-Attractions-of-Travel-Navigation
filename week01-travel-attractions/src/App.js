import React from 'react';
import './index.css';
import './App.css';
import Nav from "./Nav";
import Card from './component/Card';
import HeroSection from './component/HeroSection';
import AllViewList from './component/AllViewList';


function App() {
  return (
    <React.Fragment>
       <HeroSection/>
       <Card/>
       <AllViewList/>
       <AllViewList/>

    </React.Fragment>
    
  );
}

export default App;
