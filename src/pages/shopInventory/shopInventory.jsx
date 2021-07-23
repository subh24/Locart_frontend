import React from 'react'
import { useState,useEffect } from "react";
import {
  useParams
} from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import './shopInventory.css'

export default function ShopInventory() {
    const { storeId } = useParams();
    const [store,setStore]=useState({"category":"","name":"","address":"","ratings":4.1,"inventory":{}});
    const getData=()=>{
    fetch(process.env.REACT_APP_BASE_URL+'data_file.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setStore(myJson.stores.find(shop => shop.shopid === storeId))
      });
  }
  useEffect(()=>{
    getData()
  },[])
  
    return (
        <div className='container shop-inventory'>
            <div>
                <img className="img-thumbnail rounded float-start" src={process.env.REACT_APP_BASE_URL+store.image} alt={store.shopid} width='200' height='200'/>
                <div className="store-details">
                    <h1 className="store-name">{store.name}</h1>
                    <h2 className="store-categories">{store.category.toString()}</h2>
                    <h3 className="store-location">{store.address}</h3>
                    <ReactStars
                        count={5}
                        size={24}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                        value={store.ratings}
                    />
                </div>
            </div>
            <div className='row menu-items'>
                <div id="list-category" className="list-group col-3">
                
                {
                    Object.keys(store.inventory).map((category,index)=>{
                        return(<a className="list-group-item list-group-item-action" href={"#list-item-"+index} key={index}>{category}</a>)
                    })
                }
                </div>
                <div data-bs-spy="scroll" data-bs-target="#list-category" data-bs-offset="0" className="scrollspy-example col-9" tabIndex="0">
                {
                    Object.keys(store.inventory).map((category,index)=>{
                        return(<div key={index} id={"list-item-"+index} className="cat-grp"><h4 className="list-head">{category}</h4>
                        {store.inventory[category].map((item,index_child) =>{
                        return(<div key={index_child} className='row item' id={index_child}><div className='col-8'>{item.Name}</div><div className='col-4'>₹{item.Price}</div></div>)
                    })}
                    </div>)
                    })
                }
                
                </div>
            </div>
        </div>
    )
}
