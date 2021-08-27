import { useContext } from "react"
import CartContext from "../../Store/cart-context"
import Modal from "../UI/Modal"
import classes from "./Cart.module.css"
import CartItem from "./CartItem"

const Cart = (props) => {

    // const cartItems = [{ id: "c1", name: "sushi", amount: 2, price: 12.99 }]
    const cartCTX = useContext(CartContext)
    const cartItemRemoveHandler = (id) => {cartCTX.removeItem(id)}
    const cartItemAddHandler = (item) => {}
    
    // (<ul key={item.id}>{item.name} {item.price}</ul>))}
    return (
        <Modal onClick={props.onCloseCart}>
            <ul className={classes['cart-items']}>
                { cartCTX.items.map((item) => (
                    <CartItem
                        key={item.id}
                        name={item.name}
                        amount={item.amount}
                        price={item.price}
                        onRemove={cartItemRemoveHandler.bind(null, item.id)}
                        onAdd={cartItemAddHandler.bind(null, item)}>
                    </CartItem>))}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>${cartCTX.totalAmount.toFixed(2)}</span>
            </div>
            <div className={classes.actions}>
                <button
                    className={classes['button--alt']}
                    onClick={props.onCloseCart}>Close</button>
                {cartCTX.items.length > 0 &&
                    <button className={classes.button}>order</button>}

            </div>

            cardItems
            total amount
            actions
        </Modal>
    )
}

export default Cart