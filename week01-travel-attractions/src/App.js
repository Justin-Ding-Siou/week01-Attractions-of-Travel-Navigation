import React from 'react';
import './index.css';
import './App.css';
import Nav from "./Nav";
import Card from './component/Card';
import HeroSection from './component/HeroSection';
import ViewList from './component/ViewList';


function App() {
  return (
    <React.Fragment>
       <HeroSection></HeroSection>
       <Card></Card>
       <ViewList></ViewList>

    </React.Fragment>
    
  );
}

export default App;
