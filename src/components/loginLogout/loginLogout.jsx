import React from 'react'
import UserDropdown from '../userDropdown/userDropdown'
import { useHistory,generatePath } from 'react-router';
export default function LoginLogout(credentials) {
    const history = useHistory();
    const handleProceed = (e) => {
    history.push(generatePath("/login"));
  };
    if(credentials.loginStatus){
        return (
        <div className="dropdown bg-dark" id="user-account">
                        <button type="button" className="btn dropdown-toggle btn-secondary" data-bs-toggle="dropdown" aria-expanded="false" aria-haspopup="true">
                        SM
                        </button>
                        <UserDropdown/>
                    </div>
    )
    }
    else{
        return(
            <div className="" id="login-button user-account">
                        <button type="button" className="btn btn-secondary " onClick={(e) => {
              handleProceed();
            }}>
                            Login
                        </button>
                        
            </div>
        )
    }
    
}
