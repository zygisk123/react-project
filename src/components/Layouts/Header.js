import { Fragment } from "react";
import classes from './Header.module.css';
import CartButton from './HeaderCartButton/HeaderCartButton';
import shoesImg from '../../assets/shoes.jpeg';
import React from "react";


const Header = (props) =>
{
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactShoes</h1>
                <CartButton> Cart </CartButton>
            </header>
            <div className={classes['main-image']}>
                <img src={shoesImg} alt='Shoes'/>
            </div>
        </Fragment>
    );
}

export default Header;