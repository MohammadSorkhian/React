import Modal from "../UI/Modal"
import classes from "./Cart/Cart.module.css"

const Cart = (props) => {

    const cartItems = [{ id: "c1", name: "sushi", amount: 2, price: 12.99 }]

    return (
        <Modal onClick={props.onCloseCart}>
            {cartItems.map(item => (<ul key={item.id}>{item.name} {item.price}</ul>))}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span> 35.62</span>
            </div>
            <div className={classes.actions}>
                <button 
                className={classes['button--alt']}
                onClick={props.onCloseCart}>Close</button>
                <button className={classes.button}>order</button>
            </div>

            cardItems
            total amount
            actions
        </Modal>
    )
}

export default Cart