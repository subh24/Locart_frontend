import React, {useState,useEffect} from 'react'
import './categoryNav.css'
import CategoryCard from '../categoryCard/categoryCard'

export default function CategoryNav() {
    const [categories,setCategories]=useState([]);
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
        setCategories(myJson.categories)
      });
  }
  useEffect(()=>{
    getData()
  },[])
    // return(
    //     <div>
    //         {
    //             categories && categories.length>0 && categories.map((category) =>{
    //                 return <div>{category.name}</div>
    //             })
    //         }
    //         <div>LOLLL</div>
    //     </div>
    // )

    return (
        <div>
        <ul className="nav nav-tabs bg-dark justify-content-center category-nav">
            {
                categories && categories.length>0 && categories.map((category,index) =>{
                    return(
                        <li className="nav-item" key={index}>
                        <a className="nav-link" aria-current="page" href="#">
                            <CategoryCard category={category}/>
                        </a>
                    </li>
                    )
                    
                })
            }
            

        </ul>
    </div>
    )
}
