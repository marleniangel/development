import Button from "./button";

// TODO: create a component that displays a single bakery item

export default function Vinyl(props) {
    return (
      <div  className="Vinyl">
        <div>
        <img src={props.image}  />
        </div>
        {props.name}, {props.genre}, {props.price}
        <Button cartItems={props.cart} price={props.price} updateCart={props.updateCart} name={props.name} updatePrice={props.updatePrice} currPrice={props.currPrice}/>
      </div>
     
       
    );
  }
