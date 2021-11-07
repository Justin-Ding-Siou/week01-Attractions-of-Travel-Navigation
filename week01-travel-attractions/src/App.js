import React from 'react';
import './index.css';
import './App.css';
import Card from './component/Card';
import HeroSection from './component/HeroSection';
import AllViewList from './component/AllViewList';
import AttractionViewList from './component/AttractionViewList';
import CompaignViewList from './component/CompaignViewList';
import FoodViewList from './component/FoodViewList';


function App() {
  return (
    <React.Fragment>
       <HeroSection/>
       <AllViewList/>
       <CompaignViewList>
       </CompaignViewList>
       <FoodViewList></FoodViewList>
    </React.Fragment>
    
  );
}

export default App;
