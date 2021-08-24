import { useReducer } from "react";
import CartContext from "./cart-context"


const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        const newITems = state.items.concat(action.item);
        const newTotalAmount = state.totalAmount + (action.item.price) * (action.item.amount)

        return ({
            items: newITems,
            totalAmount: newTotalAmount
        })
    }
}


const CartProvider = (props) => {

    const [cartState, cartDispatch] = useReducer(cartReducer, { items: [], totalAmount: 0 })

    const addItemToCart = (item) => {
        cartDispatch({ type: "ADD", item: item })
    };

    const removeItemFromCart = (id) => {
        cartDispatch({ type: "Remove", id: id })
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCart,
        removeItem: removeItemFromCart,
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;