import './App.css';
// import About from './About';
// import { BrowserRouter } from 'react-router-dom';
// import { Routes, Route, Link } from 'react-router-dom';
// import ReactDOM from 'react-dom/client';
import Router from './router'
import Navbar from './Navbar'
import Details from './details';
import Events from './Events';
import Form from './forms';
import Key from './key';
import Practise from './practise';
import Api from './Api';



  

function App() {
  return(
    <>
    <Api/>
    <Practise/>
    <Events/>
    <Form/>
    <Key/>
    <Navbar/>
    <Router/>

   
   <div>
    <h1>YOUR'S FAVOURITE</h1>
    

    <div className='Menu'>
      <div className='Dishes'>
        <img src='https://www.samosa-recipe.com/wp-content/uploads/2019/01/aloo-samosa.jpg' alt='Samosa'/>
        <h3>SAMOSA</h3>
        <p>25/-only</p>
        <button>BuyNow</button>
      </div>

      <div className='Dishes'>
      <img src='https://ministryofcurry.com/wp-content/uploads/2024/06/vada-pav-3.jpg' alt='Vadapav'/>
      <h3>VADAPAV</h3>
        <p>35/-only</p>
        <button>BuyNow</button>
        </div>

        <div className='Dishes'>
          <img src='https://www.awesomecuisine.com/wp-content/uploads/2012/02/Milagai-Bajji.jpg' alt='chilliBajji'/>
          <h3>Chilli Bajji</h3>
          <p>40/-only</p>
        <button>BuyNow</button>
        </div>

        <div className='Dishes'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUsg2BfV1oFXHKsxNoNYeA01muHpT_VYJyQA&s' alt='Panipuri'/>
          <h3>PaniPuri</h3>
          <p>40/-only</p>
        <button>BuyNow</button>
        </div>

        <div className='Dishes'>
          <img src='https://cdn1.foodviva.com/static-content/food-images/chinese-recipes/gobi-manchurian-recipe/gobi-manchurian-recipe.jpg' alt='GobiManchuri'/>
          <h3>Gobi Manchuri</h3>
          <p>80/-only</p>
        <button>BuyNow</button>
        </div>

        <div className='Dishes'>
          <img src='https://www.recipetineats.com/tachyon/2022/09/Crispy-Fries_8.jpg' alt='FrenchFries'/>
          <h3>FrenchFries</h3>
          <p>90/-only</p>
        <button>BuyNow</button>
        </div>

        <div className='Dishes'>
          <img src='https://jeyporedukaan.in/wp-content/uploads/2022/09/air-fryer-paneer-tikka-featured.jpg' alt='PannerTikka'/>
          <h3>PannerTikka</h3>
          <p>110/-only</p>
        <button>BuyNow</button>
        </div>

        <div className='Dishes'>
          <img src='https://www.awesomecuisine.com/wp-content/uploads/2007/11/bhel-puri.jpg' alt='Bhelpuri'/>
          <h3>BheelPuri</h3>
          <p>120/-only</p>
        <button>BuyNow</button>
        </div>
    </div>
     <a href='https://www.indianhealthyrecipes.com/indian-dinner-recipes/' target='blank' className='next'>VIEW MORE</a>
  
   </div>
   <Details/>
   
  </>
   )

  }
  export default App