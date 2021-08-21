import classes from "./Input.module.css"

const Input = (props) => {
    const className = `${classes.input} ${props.className}`
    return (
        < div >
            <label>{props.label}</label>
            <input
                className={className}
                {...props.input}
                >
            </input>
        </div >)
}

export default Input;