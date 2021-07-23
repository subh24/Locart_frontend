import React,{useState,useEffect} from 'react'
import './homePage.css'
import CarouselMain from '../../components/carouselMain/carouselMain'
import CategoryNav from '../../components/categoryNav/categoryNav';
import StoreCard from '../../components/storeCards/storeCards';
import storeCard from '../../components/storeCards/storeCards';

export default function HomePage() {
    const [stores,setStores]=useState([]);
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
        setStores(myJson.stores)
      });
  }
  useEffect(()=>{
    getData()
  },[])
    return (
        <div className='home container'>
            <CategoryNav/>
            <CarouselMain/>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4'>
                 {stores && stores.length>0 && stores.map((store,index) =>{
                    return(
                        <div className='col' key={index}>
                            <StoreCard {...store}/>
                        </div>
                    )
                    
                })}
                
            </div>
        </div>
    )
}
