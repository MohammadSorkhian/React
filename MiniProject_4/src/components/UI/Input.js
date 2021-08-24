import classes from "./Input.module.css"
import React from "react"

const Input = React.forwardRef((props, ref) => {
    const className = `${classes.input} ${props.className}`
    return (
        < div >
            <label>{props.label}</label>
            <input ref={ref}
                className={className}
                {...props.input}
                >
            </input>
        </div >)
})

export default Input;