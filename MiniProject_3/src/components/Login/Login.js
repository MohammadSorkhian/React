import React, { useEffect, useReducer, useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';


const emailReducer = (previousState, actionDispatched) => {
  if (actionDispatched.type === "USER_INPUT")
  return ({
    value: actionDispatched.value,
    isValid: actionDispatched.value.includes('@'),
  })
  
  if(actionDispatched.type === "INPUT_BLUR")
  return ({
    value: previousState.value,
    isValid: previousState.value.includes('@'),
  })
}


const passwordReducer = (state, actionDispatched) => {
  if(actionDispatched.type === "USER_INPUT")
  return ({
    value:actionDispatched.value,
    isValid: actionDispatched.value.length > 2
  })
  if(actionDispatched.type === "INPUT_BLUR")
  return({
    value: state.value,
    isValid: state.value.length > 2
  })


}


const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {value:"", isValid:null})
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value:"", isValid:true})

 

  useEffect( () => {
    setFormIsValid(
      emailState.isValid && 
      passwordState.isValid
    );
  }, [emailState.isValid, passwordState.isValid])

  const emailChangeHandler = (event) => {
    dispatchEmail({type:"USER_INPUT", value:event.target.value});
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type:"USER_INPUT", value:event.target.value})
    console.log(event.target.value)
  };

  const validateEmailHandler = () => {
    dispatchEmail({type:"INPUT_BLUR"})
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type:"INPUT_BLUR"})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
