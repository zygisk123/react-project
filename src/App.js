import Header from './components/Layouts/Header';
import { Fragment, useState } from 'react';
import Shoes from './components/Shoes/Shoes';
import Cart from './components/Cart/Cart';

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
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <Shoes />
    </Fragment>
  );
}

export default App;