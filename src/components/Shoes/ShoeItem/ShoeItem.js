import classes from './ShoeItem.module.css';
import ShoeItemForm from './ShoeItemForm';
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';

const ShoeItem = props =>
{
    const cartCtx = useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`;
    
    const addToCartHandler = amount =>
    {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    }

    return(
        <li className={classes.shoe}>
        <div>
            <h3>
                {props.name}
            </h3>
            <div className={classes.description}>
                {props.description}
            </div>
            <div className={classes.price}>
                {price}
            </div>
        </div>
        <div>
            <ShoeItemForm onAddToCart={addToCartHandler} id={props.id}/>
        </div>
    </li>
    );
}

export default ShoeItem;