import React from "react"
import mealsImage from "../../assets/meals.jpg"
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton"

const Header = () => {
    return(
        <React.Fragment>
            <head className={classes.header}>
                <h1>AllMeals</h1>
                <HeaderCartButton></HeaderCartButton>
            </head>
            <div className={classes.main_image}>
                <img src={mealsImage}></img>
            </div>
        </React.Fragment>
    )
}

export default Header