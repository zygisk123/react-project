import Header from './components/Layouts/Header';
import { useState } from 'react';
import Shoes from './components/Shoes/Shoes';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () =>
  {
    setCartIsShown(true);
  }

  const hideCartHandler = () =>
  {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Shoes />
      </main>
    </CartProvider>
  );
}

export default App;