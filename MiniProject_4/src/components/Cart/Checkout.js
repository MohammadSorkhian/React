import { useRef, useState } from "react";
import classes from "./Checkout.module.css"

const isEmpty = (par) => par === ""
const isAtLeatThreeCharsLong = (par) => par.trim().length >= 3

const Checkout = (props) => {

    const name = useRef();
    const city = useRef();
    const postalCode = useRef();
    const street = useRef();

    const [formValidity, setFormValidity] = useState({
        name:true,
        city:true,
        postalCode:true,
        street:true
    })
    
    const onSubmitHandler = (event)=>{
        event.preventDefault();

        const enteredName = name.current.value;
        const enteredCity = city.current.value;
        const enteredStreet = street.current.value;
        const enteredPostalCode = postalCode.current.value;

        let enteredNameIsValid = !isEmpty(enteredName);
        let enteredCityIsValid = !isEmpty(enteredCity);
        let enteredStreetIsValid = !isEmpty(enteredStreet);
        let enteredPostalCodeIsValid = isAtLeatThreeCharsLong(enteredPostalCode);

        const formIsValid = 
        enteredNameIsValid &&
        enteredCityIsValid && 
        enteredStreetIsValid &&
        enteredPostalCodeIsValid

        if (!formIsValid) {
            setFormValidity({
                name: enteredNameIsValid,
                city: enteredCityIsValid,
                postalCode: enteredPostalCodeIsValid,
                street: enteredStreetIsValid
            })

            return
        }else{
            setFormValidity({
                name: true,
                city: true,
                postalCode: true,
                street: true
            })
        }

            
        let customerInfo = {
            name:enteredName,
            city:enteredCity,
            postalCode:enteredPostalCode,
            street:enteredStreet
        }

        props.onSubmit(customerInfo)
    }

    const x = true

    return(
        <form className={classes.form} onSubmit={onSubmitHandler}>
            <div className={classes.control}>
                <label htmlFor="name" >Name</label>
                <input type="text" id="name" ref={name}></input>
                {!formValidity.name && "Please enter your name"}
            </div>
            <div className={classes.control}>
                <label htmlFor="City">City</label>
                <input type="text" id="City" ref={city}></input>
                {!formValidity.city && "Please enter your city"}
            </div>
            <div className={classes.control}>
                <label htmlFor="Postal">Postal Code</label>
                <input type="text" id="Postal" ref={postalCode}></input>
                {!formValidity.postalCode && "Please enter a valid Postal Code"}
            </div>
            <div className={classes.control}>
                <label htmlFor="Street">Street</label>
                <input type="text" id="Street" ref={street}></input>
                {!formValidity.street && "Please enter your street"}
            </div >
            <div className={classes.actions}>
            <button onClick={props.onCancel}>Cancel</button>
            <button type="submit">confirm</button>
            </div>
        </form>

    )

}

export default Checkout;