import React,{useState,useEffect} from 'react'
import './navBar.css'
import LoginLogout from '../loginLogout/loginLogout';

export default function NavBar() {

    const cred = localStorage.getItem('credentials')
    
    const [credentials,setLoginStatus]=useState(cred?JSON.parse(cred):{})

    return (
            <nav className="navbar navbar-dark bg-dark sticky-top py-lg-3 navbar-expand-lg">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href={process.env.REACT_APP_BASE_URL}>LoCart</a>
                    </div>
                    <div className="container-msm d-none searchbar  d-sm-flex w-50" >
                        {/* <div className="row">
                            <div className="col-4"> */}
                                <div className="form-group search-input">
                                    {/* <input id="autocomplete" placeholder="Enter your address" onFocus={geolocate()} type="text" id="tag1" className="form-control" /> */}
                                    <input placeholder="Search for Shops around you." type="text" />
                                </div>
                            {/* </div>
                        </div> */}
                        
                    </div>
                    <LoginLogout {...credentials}/>
                    
                </div>
            </nav>
    )
}

