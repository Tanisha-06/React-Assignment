import React from "react";
import './Card.css';
const Card=(props)=>{

return(
    <div className={`main ${props.position%2==0?"gray":""}`}>
      <div className="logo"><img src={props.url} alt="logo"/></div>
      <div className="details">
          <div className="row">
              <div className="left">Basket:</div>
              <div className="right1">{props.basket}</div>
          </div>
          <div className="row">
          <div className="left">Assests:</div>
          <div className="right2">{props.assets}</div>
          </div>
          <div className="row">
          <div className="left">Manager:</div>
          <div className="right3">{props.manager}</div>
          </div>
      </div>
      <div>
          <div className="subheading">Investment Value</div>
          <div className="val">₹{props.investment}</div>
      </div>
      <div>
      <div className="subheading">Current Value</div>
          <div className="val">₹{props.current}</div>
      </div>
      <div>
      <div className="subheading">Returns</div>
          <div className={`${props.returns>0?"green":"red"} val`}>{props.returns}%</div>
      </div>
    </div>
)
}

export default Card;