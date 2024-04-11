import "./App.css";
import { useState } from "react";
import vinylData from "./assets/vinyldata.json";
import Vinyl from "./components/vinyl";
import Cart from "./components/cart";
import FilterButtons from './components/FilterButtons';

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
vinylData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, updateCart] = useState([]);
    const [cartPrice, updateCartPrice] = useState(0.0);
    const [selectedGenre, setSelectedGenre] = useState('All');
    const [selectedPrice, setSelectedPrice] = useState('All');

    const handleGenreChange = (genre) => {
      setSelectedGenre(genre);
    };
  
    const handlePriceChange = (price) => {
      setSelectedPrice(price);
    };
  


  const filterVinyls = () => {
    let filteredVinyls = vinylData;

    if (selectedGenre !== 'All') {
      filteredVinyls = filteredVinyls.filter(item => item.genre === selectedGenre);
    }

    if (selectedPrice !== 'All') {
      const [minPrice, maxPrice] = selectedPrice.split('-').map(Number);
      filteredVinyls = filteredVinyls.filter(item => item.price >= minPrice && item.price <= maxPrice);
    }

    return filteredVinyls;
  };

  return (
    <div>
      <FilterButtons 
        handleGenreChange={handleGenreChange} 
        handlePriceChange={handlePriceChange} 
      />

      {/* Display filtered books */}
        {filterVinyls().map((item,  ) => (
          <Vinyl
          // <li key={item.name}>{item.genre} - ${item.price} </li>
          name={item.name}
          genre={item.genre}
          price={item.price}
          image={item.image}
          updateCart={updateCart}
          cart={cart}
          updatePrice={updateCartPrice}
          currPrice={cartPrice}
          />
        )
      )}
      <div>
        <h2>Cart</h2>
        {
          /* TODO: render a list of items in the cart */
          <Cart cartItems={cart} cartPrice={cartPrice} curPrice={cartPrice}/>
        }
      </div>
    </div>
  );
}

  

{/* //   return (
//     <div className="App">
//       <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
//       {vinylData.map( */}
//         (
//           item,
//           // index // TODO: map bakeryData to BakeryItem components
//         ) => (
//           <Vinyl  // replace with BakeryItem component
//           name={item.name}
//           price={item.price}
//           description={item.description}
//           image={item.image}
//           updateCart={updateCart}
//           cart={cart}
//           updatePrice={updateCartPrice}
//           currPrice={cartPrice}
//           />
//         )
//       )}
//       <div>
//         <h2>Cart</h2>
//         {
//           /* TODO: render a list of items in the cart */
//           <Cart cartItems={cart} cartPrice={cartPrice} curPrice={cartPrice}/>
//         }
//       </div>
//     </div>
//   );
// }

export default App;
