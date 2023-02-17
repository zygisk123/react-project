import classes from './ShoeItem.module.css';
import ShoeItemForm from './ShoeItemForm';
const ShoeItem = props =>
{
    const price = `$${props.price.toFixed(2)}`;
    
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
            <ShoeItemForm id={props.id}/>
        </div>
    </li>
    );
}

export default ShoeItem;