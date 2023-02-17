import classes from './AvailableShoes.module.css';
import Card from '../../UI/Card/Card';
import ShoeItem from '../ShoeItem/ShoeItem';

const DUMMY_SHOES = [
    {
      id: 's1',
      name: 'Nike',
      description: 'new nikes',
      price: 22.99,
    },
    {
      id: 's2',
      name: 'Adidas',
      description: 'new Adidas',
      price: 16.5,
    },
  ];
  
const AvailableShoes = () =>
{
    const shoes = DUMMY_SHOES.map((item) => <ShoeItem key={item.id} name={item.name} price={item.price} description={item.description}></ShoeItem>);
    return(
        <section className={classes.shoes}>
            <Card>
                <ul>
                    {shoes}
                </ul>
            </Card>
        </section>
    );
}

export default AvailableShoes;