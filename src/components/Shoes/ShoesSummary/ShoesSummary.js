import classes from './ShoesSummary.module.css';

const ShoesSummary = () =>
{
    return(
        <section className={classes.summary}>
          <h2>Great Shoes, Delivered To You</h2>
          <p>
            Choose your favorite shoes from our broad selection of available shoes.
          </p>
          <p>
            All our shoes are brand new!
          </p>
        </section>
      );
}

export default ShoesSummary;