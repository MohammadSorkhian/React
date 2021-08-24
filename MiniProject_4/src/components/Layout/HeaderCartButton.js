import { useContext } from "react";
import CartContext from "../../Store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css"

const HeaderCartButton = (props) => {

    const cartCTX = useContext(CartContext)

    const numberOfItemsInCart = cartCTX.items
        .reduce((currentsNumber, newItem) => {
            return (currentsNumber + newItem.amount)
        }, 0)

    return (
        <button
            className={classes.button}
            onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfItemsInCart}</span>
        </button>
    )
}

export default HeaderCartButton;
