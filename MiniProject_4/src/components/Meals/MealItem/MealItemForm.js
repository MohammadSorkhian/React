import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'
import { useContext, useRef, useState } from 'react'
import CartContext from '../../../Store/cart-context'

const MealItemForm = (props) => {

    const cartCTX = useContext(CartContext);
    const inputRef = useRef();
    const [enteredAmountIsValid, setEnteredAmountIsValid] = useState(true);

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const enteredAmount = +(inputRef.current.value);
        if (enteredAmount > 10 || enteredAmount <= 0) {
            setEnteredAmountIsValid(false)
            return
        }
        props.onAddToCart(enteredAmount)
}

    return (
        <form
            className={classes.form}
            onSubmit={onSubmitHandler}>
            <Input
                ref={inputRef}
                label="Amount"
                input={{
                    type: "number",
                    min: "1",
                    max: "10",
                    step: "1",
                    defaultValue: "1"
                }}
            ></Input>
            <button className={classes.button}>+ Add</button>
            {!enteredAmountIsValid && <div>Enter a number between 1 - 10</div>}
        </form>
    )
}

export default MealItemForm;