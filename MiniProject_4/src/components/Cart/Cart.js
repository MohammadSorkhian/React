import { useContext, useState } from "react"
import CartContext from "../../Store/cart-context"
import Modal from "../UI/Modal"
import classes from "./Cart.module.css"
import CartItem from "./CartItem"
import Checkout from "./Checkout"


const Cart = (props) => {

    const cartCTX = useContext(CartContext)
    const cartItemRemoveHandler = (id) => { cartCTX.removeItem(id) }
    const cartItemAddHandler = (item) => { }
    const [order, setOrder] = useState(false);
    const [submited, setSubmited] = useState(null);

    const onSubmitHandler = async (customerData) => {
        try {
            console.log(customerData)
            let response = await fetch("https://react-fooda-default-rtdb.firebaseio.com/orders.json", {
                method: 'POST',
                body: JSON.stringify({
                    customer: customerData,
                    orderedItems: cartCTX.items
                })
            })
            if (response.ok) {
                setSubmited(true)
                console.log(submited)
                return
            }
            throw ""
        } catch (err) {
            console.log("soemthing went worng")
            setSubmited(false)
        }

    }

    return (
        <>
            <Modal onClick={props.onCloseCart}>
                {submited && <div>Your order has been submited!</div>}
                {submited != true &&
                    <>
                        <ul className={classes['cart-items']}>
                            {cartCTX.items.map((item) => (
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
                        {order &&
                            <>
                                <Checkout
                                    onCancel={() => setOrder(false)}
                                    onSubmit={onSubmitHandler}
                                ></Checkout>
                                {submited === false && <div>Something Went wrong please try again later</div>}

                            </>}
                        {!order &&
                            <div className={classes.actions}>
                                <button
                                    className={classes['button--alt']}
                                    onClick={props.onCloseCart}>
                                    Close
                                </button>
                                {cartCTX.items.length > 0 &&
                                    <button
                                        className={classes.button}
                                        onClick={() => setOrder(true)}>
                                        order
                                    </button>}
                            </div>
                        }
                    </>
                }
            </Modal>
        </>
    )
}

export default Cart