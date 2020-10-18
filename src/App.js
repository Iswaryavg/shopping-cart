import React,{useState} from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Homescreen from './screens/Homescreen';
import Cartscreen from './screens/Cartscreen';
import products from './components/Products'
import { Container } from 'react-bootstrap'
import './App.css';

function App() {
  const[cart,setCart]=useState([])

  const handleCart=(product)=>{
let itemincart=cart.find((item)=>product.name==item.name)
let newcart=[...cart]
if(itemincart)
{

  itemincart.quantity++
}
else
{
  itemincart={
    ...product,quantity:1
  }
  newcart.push(itemincart)
}
  
    setCart(newcart)
  }

const handleRemove=(itemincart)=>{

  setCart(cart.filter(product=>product!==itemincart))
}
const handleclearcart=(clearitem)=>{

  setCart([])
}
const setQuantity = (product, amount) => {

  const newCart = [...cart];
  newCart.find(
    (item) => item.name === product.name
  ).quantity = amount;
 setCart(newCart);
};
          

const getCartTotal = () => {
  return cart.reduce(
    (sum, { quantity }) => sum + quantity,
    0
  );
};
    const cartitem=(e)=>{
      
      return cart.map((x) => x.category)
      
     

    }
        
   
  return (
    <Router basename="/">
    <div className="App">
      <Header cart={cart}  /> 
      <main className="py-3">
<Container>
<Route path='/Iswaryavg/shopping-cart' component={(props)=><Homescreen products={products} addtocart={handleCart} category={cart}/>} exact />            
<Route exact path='/cart' component={(props)=><Cartscreen cart={cart} removefromcart={handleRemove} cartitem={cartitem} setQuantity={setQuantity} clearcart={handleclearcart} total={getCartTotal}  />   }/>

</Container>
  </main>

    <Footer/>
    </div>
    </Router>
  );
}

export default App;
