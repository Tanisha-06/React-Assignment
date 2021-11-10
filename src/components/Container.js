import React,{useState,useEffect} from 'react';
import './Container.css';
import Card from './Card';
import Sample_user from './Sample_user';
import Sample_user_two from './Sample_user_two';
import { useDispatch } from 'react-redux';
const Container=({setIsLoggedIn})=>{
 
    const[baskets,setBaskets]=useState([]);
    const dispatch =  useDispatch();
    const logoutHandler = ()=>{
        dispatch({
            type:"logout"
        });
    };
    useEffect(()=>{
    //fetching sample user
    const fetchBasket1=Sample_user();
    const fetchBasket2=Sample_user_two();
    
    const fetchedBasket=[];
    for(let b of fetchBasket2.results){
        const element=fetchBasket1.basket_data.find((e)=> e.id==b.basket_id);
        let assets="";
        b.basket_items.forEach((e)=>{
            assets=assets+e.coin_name+", ";
        })
        assets=assets.slice(0,-2);
        const to_push={
            url:b.basket_logo_url,
            bakset:b.name,
            assets:assets,
            manager:b.manager_name,
            investment:element.invested_value,
            current:element.current_value,
            returns:element.return_percentage
        };
        fetchedBasket.push(to_push);
    }
      setBaskets(fetchedBasket);
    },[]);
    return(
        <div className="outer">
            <div className="first-row">
                <div className="header">
                    <div className="portfolio">Portfolio</div>
                    <div className="watchlist">WatchList</div>
                </div>
                <button onClick={ logoutHandler} className="btn">
                 Logout
                </button>
           

             </div>
        <div>
         {baskets.map((e,pos)=>{
            return(
                <Card 
        key={Math.random()}        
         url= {e.url}
         position={pos}
         basket={e.bakset}
         assets={e.assets}
         manager={e.manager}
         investment={e.investment}
         current={e.current}
         returns={e.returns}

         />  
            )
         })}
        </div>
        <div className="next"><button>{`Next >`}</button></div>
        <div className="all"><button>See All Baskets</button></div>
        </div>
    )
}

export default Container;