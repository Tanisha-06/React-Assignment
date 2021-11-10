import React,{useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import Sample_user from './components/sample_user';
import Container from './components/Container';
import Login from './components/Login';

//basketToken => token jwt

//user id,password => server
// server => token => user
// user => post(token)t => server


function App(props) {

  const isLoggedIn = useSelector(s=>s.isLoggedIn);
  const dispatch = useDispatch();
  useEffect(()=>{
    const isThereAnyInstanceOf = localStorage.getItem("basketToken");
    if(isThereAnyInstanceOf){
      //we can't check the validity here
      dispatch({
        type:"login"
      })
    }
  },[]);

  return (
    <React.Fragment>
      {!isLoggedIn && <Login/>}
      {isLoggedIn && <Container/>}
      </React.Fragment>
  );
}

export default App;
