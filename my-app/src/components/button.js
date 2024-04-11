export default function Button(props) {
    function handleClick() {
      // const nextCart = { name: props.name, price: props.price, number: 1 };
      let newItem = true;
      let updatePrice = 0.0;
  
      // Re-render with the new array
  
      let newCartItem = {
        name: props.name,
        price: props.price,
        number: 1,
      };
  
      for (let i = 0; i < props.cartItems.length; i++) {
        console.log(props.cartItems[i].name);
        if (newCartItem.name === props.cartItems[i].name) {
          newItem = false;
          updatePrice = props.cartItems[i].price;
        }
      }
  
      if (newItem) {
        props.updateCart([...props.cartItems, newCartItem]);
        updatePrice = newCartItem.price;
      } else {
        props.updateCart(
          props.cartItems.map((cartItem) => {
            if (cartItem.name === newCartItem.name) {
              // Create a *new* object with changes
              return { ...cartItem, number: cartItem.number + 1 };
            } else {
              // No changes
              return cartItem;
            }
          })
        );
      }
      let newPrice = props.currPrice + updatePrice;
      let fixedPrice = Math.round(newPrice * 100) / 100;
      props.updatePrice(fixedPrice);
    }
  
    return (
      <div className="Button">
        <button onClick={handleClick}>Add to Cart</button>
      </div>
    );
  }