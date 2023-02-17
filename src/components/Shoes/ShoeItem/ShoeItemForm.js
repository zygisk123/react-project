import classes from './ShoeItemForm.module.css';
import Input from '../../UI/Input/Input';

const ShoeItemForm = props =>
{
    return(
        <form className={classes.form}>
            <Input 
                //ref={amountInputRef}
                label="Amount" 
                input={{
                    id:'amount_' + props.id, 
                    type: 'number', 
                    min: '1', 
                    max:'5', 
                    step:'1', 
                    defaultValue:'1'
                }} />
            <button>Add</button>
        </form>
    );
}

export default ShoeItemForm;