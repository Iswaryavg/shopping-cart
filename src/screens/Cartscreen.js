import React,{useEffect} from 'react'
import {Button,} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Cartscreen = (props) => {
        props.cart.sort(function (a, b) {
        return b.price - a.price;
      })
 const result=props.cart.map(x=>x.category)
    
      function onlyUnique(value, index, result) {
        return result.indexOf(value) === index;
      }
    
      const filteredarray = result.filter(onlyUnique);
   
      const success = filteredarray.filter((filteredarray) =>
        new RegExp(["seater\\b|table"]).test(filteredarray)
      );
     useEffect(() => {
                
       cartdiscount()
   
       getTotalsum()
       finalamount()
     }, [])
function cartdiscount(){
    var res=0  

     if(success.length>2)
    {
       return res= 0.15     
    }
    else if((success.length)==2)
    {
     var isEvery = success.every(item => success.includes('seater-2','table'));
     var seattable = success.every((item) =>success.includes("seater-1", "table")
  
     if(isEvery==true){ return res=0.10}  
     if (seattable == true) {
     return (res = 0.1);}
    }
    else if(success.length==1)
    {
     var isEvery = success.every(item => success.includes('table'));  
     var seat2 = success.every(item => success.includes('seater-2')); 
     var seat1= success.every(item => success.includes('seater-1')); 
  
     if(isEvery==true){ return res=0.05}
     if(seat2==true){ return res=0.10}
     if(seat1==true){ return res=0.10}
    }
    else{
     return res=0.10
    }
      
}
function finalamount(){
 return (getTotalsum()-(getTotalsum() * cartdiscount()))
         }
       const getTotalsum=()=>{
        return props.cart.reduce((sum,{price,quantity})=>sum+price*quantity,0)
     }
     
    return (
      <><h1>Cart Items</h1>
        
            <div className="cart-row">
             
                <span className="cart-item cart-header cart-column">ITEM</span>
                <span className="cart-price cart-header cart-column">PRICE</span>
                <span className="cart-quantity cart-header cart-column">QUANTITY</span>
                <span className="cart-quantity cart-header cart-column">Size</span>
            </div>
            {props.cart.map(product=>{
                return    <div className="cart-items">
      
                <div className="cart-row">
                    <div className="cart-item cart-column">
                        <img className="cart-item-image" src={product.image} width="100" height="100" />
                        <span className="cart-item-title">{product.name}</span>               
                    </div>                 
                    <span className="cart-price cart-item cart-column">£{product.price} </span>         
                    <div className="cart-quantity cart-column">{product.quantity}
     
     <input type="number" className="cart-quantity-input" min="1" max="10" style={{width:"60px",marginLeft:"10px"}} value={product.quantity} onChange={(e) =>props.setQuantity(product,parseInt(e.target.value)) }></input> 
         
     <span className="cart-price cart-column" style={{marginLeft:"70px"}}>{product.category} </span>              
                    </div>
                    <button className="btn btn-danger" type="button" style={{marginLeft:'170px', height:'50px'}}onClick={()=>props.removefromcart(product)}>REMOVE</button>
                </div>
               
            </div>
            })}
        
            <div className="cart-total">
                <strong className="cart-total-title">Total</strong>
                <span className="cart-total-price"><span style={{color:"red"}}>£{getTotalsum().toFixed(2)}</span></span>

                <br/>
                <strong className="cart-total-title">Discount {cartdiscount()*100}%</strong>
                <span className="cart-total-price">£{(cartdiscount()*getTotalsum()).toFixed(2)}</span>
           
                <br/>
                <strong className="cart-total-title">Your pay</strong>
         
                <span className="cart-total-price">£{finalamount().toFixed(2)}</span> 
            </div>
      
            <br/>
            <div className="d-flex justify-content-between">
            {props.cart.length>0?<Button variant="dark" onClick={()=>props.clearcart()}>Clear cart</Button>:""}
            <LinkContainer to="/">
       
            <Button variant="dark">Back to products</Button>
            </LinkContainer>
            <Button variant="dark" onClick={props.cart.length>0 && (()=>alert("Thanks for Buying"))}>Place order</Button>
         
            </div>
      

       </>
    )
}

export default Cartscreen
