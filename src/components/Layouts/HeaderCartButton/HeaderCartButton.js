import classes from './HeaderCartButton.module.css';
import CartIcon from '../../Cart/CartIcon';
const HeaderCartButton = (props) =>
{
    const btnClasses = `${classes.button}`;
    return(
        <button className={btnClasses} onClick={props.onShowCart}>
            <span className={classes.icon}> <CartIcon/> </span>    
            <span>Your Cart</span>
            <span className={classes.badge}>
                3
            </span>
        </button>
    );
}

export default HeaderCartButton;