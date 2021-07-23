import React from 'react'

export default function UserDropdown() {
    return (
        <ul className="dropdown-menu dropdown-menu-end user-dropdown">
            <li><a className="dropdown-item user-icons" href="#"><i className="far fa-user-circle"></i>My Profile</a></li>
            <li><a className="dropdown-item user-icons" href="#"><i className="fas fa-box-open"></i>Orders</a></li>
            <li><a className="dropdown-item user-icons" href="#"><i className="far fa-heart"></i>Wishlist</a></li>
            <li><a className="dropdown-item user-icons" href="#"><i className="far fa-credit-card"></i>Payments</a></li>
            <li>
                <hr className="dropdown-divider"></hr>
            </li>
            <li><a className="dropdown-item user-icons" href="#"><i className="fas fa-power-off"></i>LogOut</a></li>
        </ul>
    )
}
