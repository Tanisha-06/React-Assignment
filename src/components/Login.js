
import React, {useState} from 'react';
import classes from './Login.module.css';
import { useDispatch } from 'react-redux';
const Login=({setIsLoggedIn})=>{
    const [enteredName,setEnteredName]=useState('');
    const [enteredPassword,setEnteredPassword]=useState('');
    const[isValidEnteredName,setIsValidEnteredName]=useState(true);
    const[isValidEnteredPassword,setIsValidEnteredPassword]=useState(true);
    const dispatch = useDispatch();

    const nameChangeHandler=(event)=>{
        setEnteredName(event.target.value);
    }

    const passwordChangeHandler=(event)=>{
        setEnteredPassword(event.target.value);
    }

    const loginHandler = ()=>{
        dispatch({
            type:"login"
        });
    };


    const formSubmissionHandler=(event)=>{
        event.preventDefault();
        let isValidCredential = true;
        if(enteredName===''){
            setIsValidEnteredName(false);
            isValidCredential=false;
        }
        if(enteredPassword.length<6){
            setIsValidEnteredPassword(false);
            isValidCredential=false;
        }
        if(isValidCredential)
            loginHandler();
    }
    
    // const nameInputClasses=isValidEnteredName?"form-control":"form-control invalid";
    return(
    
      <div className={classes.container}>
          <form className={classes['form-control']} onSubmit={formSubmissionHandler}>
              <label htmlFor="name">Username:</label>
              <input  type="text" id="name" onChange={nameChangeHandler}></input>
              {!isValidEnteredName && <p className={classes['error-text']}>Name must not be empty</p>}
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" onChange={passwordChangeHandler}></input>
              {!isValidEnteredPassword && <p className={classes['error-text']}>Password should contain more than 6 characters</p>}
              <div className={classes['form-actions']}>
              <button type="submit" className={classes.btn}>Login</button>
              </div>
          </form>
      </div>
    )
}

export default Login;