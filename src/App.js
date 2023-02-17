import Header from './components/Layouts/Header';
import { Fragment } from 'react';
import Shoes from './components/Shoes/Shoes';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <Fragment>
      <Header />
      <Cart />
      <Shoes />
    </Fragment>
  );
}

export default App;