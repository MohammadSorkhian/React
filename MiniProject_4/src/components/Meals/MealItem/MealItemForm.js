import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'

const MealItemForm = () => {
    return (
        <form className={classes.form} >
            <Input
                label="Amount"
                input={{
                    type: "number",
                    min:"1",
                    max: "10",
                    step:"1",
                    defaultValue:"1"
                }}
            ></Input>
            <button className={classes.button}>+ Add</button>
        </form>
    )
}

export default MealItemForm;