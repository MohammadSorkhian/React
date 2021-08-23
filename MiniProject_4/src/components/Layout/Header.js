import React from "react"
import mealsImage from "../../assets/meals.jpg"
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton"

const Header = (props) => {
    return (
        <React.Fragment>
            <div className={classes.header}>
                <h1>AllMeals</h1>
                <HeaderCartButton
                    onClick={props.onShowCart}>
                </HeaderCartButton>
            </div>
            <div className={classes.main_image}>
                <img src={mealsImage} alt="Img"></img>
            </div>
        </React.Fragment>
    )
}

export default Header