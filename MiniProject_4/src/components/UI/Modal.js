import React from "react"
import classes from "./Modal.module.css"
import ReactDOM from 'react-dom';


const Backdrop = (props) => {
    return (
        <div 
        className={classes.backdrop}
        onClick={props.onClick}>
        </div>
    )
}


const Overlay = (props) => {
    return (
        <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
        </div>
    )
}


const Modal = (props) => {
    return (
        <React.Fragment>
            {/* {ReactDOM.createPortal(<Backdrop></Backdrop>, document.getElementById("overlays"))} */}
            {/* {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, document.getElementById("overlays"))} */}
            <Backdrop onClick={props.onClick}></Backdrop>
            <Overlay>{props.children}</Overlay>
        </React.Fragment>
    )
}

export default Modal;