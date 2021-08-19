import classes from './Input.Module.css';

const Input = (props) => {

    return (
        <div
            className={`${classes.control} ${props.value.isValid === false ? classes.invalid : ''
                }`}
        >
            <label htmlFor={props.id}>{props.label}</label>
            <input
                type={props.type}
                id={props.id}
                value={props.value.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </div>

    )
};

export default Input