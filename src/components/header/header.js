import React, { useState } from "react";
import Logo from "../../assets/images/logo.svg"
import '../header/header.scss'
import SearchIcon from '@mui/icons-material/Search';
import SelectDrop from '../common-modules/selectDrop/selectdrop'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import conatantData from '../../shared/constant'
import IconCompare from "../../assets/images/icon-compare.svg"
import IconCart from "../../assets/images/icon-cart.svg"
import IconHeat from "../../assets/images/icon-heart.svg"
import IconUser from "../../assets/images/icon-user.svg"
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TuneIcon from '@mui/icons-material/Tune';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';

const Header = () => {
    const categoryList = conatantData.categoryList
    let stateList = conatantData.stateList;

    const [isAccountDropdown, showAccountDropdown] = useState(false);

    return (
        <header>
            <div className="container-fluid">
                <div className="row">
                    {/* Logo Image Start here */}
                    <div className="col-sm-2 borderColr d-flex align-items-center">
                        <img className="logoImg" src={Logo}  alt="Logo" />
                    </div>
                    {/* Logo Image End here */}

                    {/* Header Search Start here */}
                    <div className="col-sm-5 d-flex align-items-center">
                        <div className="headerSearch d-flex align-items-center">
                            <div className="selectDropMain cursor position-relative">
                                <SelectDrop listData={categoryList} icon=''/>
                            </div>
                            <div className="line">
                                {/* sdsd */}
                            </div>
                            <div className="search">
                                <input type="search" placeholder="Search for items..."/>
                                <SearchIcon className="searchIcon cursor" />
                            </div>
                        </div>

                    </div>
                    {/* Header Search here */}

                    <div className="col-sm-5 d-flex align-items-center">
                        <div className="ml-auto d-flex align-items-center">
                            <div className="contryClass cursor">
                                <SelectDrop  listData={stateList} icon={
                                    <LocationOnIcon />
                                }/>
                            </div>

                           <div>
                           <ul className="list list-inline mb-0 headerTabs">
                                <li className="list-inline-item"> 
                                    <span> 
                                        <img src={IconCompare } />  
                                        <span className="badge bg-success">3</span>
                                        Compare
                                    </span>
                                </li>
                                <li className="list-inline-item"> 
                                    <span> 
                                        <img src={IconCart } />  
                                        <span className="badge bg-success">3</span>
                                        Cart
                                    </span>
                                </li>
                                <li className="list-inline-item"> 
                                    <span> 
                                        <img src={IconHeat } />  
                                        <span className="badge bg-success">3</span>
                                        Wishlist
                                    </span>
                                </li>
                                <li className="list-inline-item "> 
                                <ClickAwayListener onClickAway={()=>showAccountDropdown(false)}>

                                    <span onClick={() => showAccountDropdown(!isAccountDropdown)}> 
                                        <img src={IconUser } />  
                                        {/* <span className="badge bg-success">3</span> */}
                                        Account
                                        {
                                            isAccountDropdown &&
                                            <ul className="account-dropdown">
                                            <li>
                                                <Button disableRipple='false'> <PersonOutlineIcon /> My Account</Button>                                        
                                            </li>
                                            <li>
                                                <Button disableRipple='false'> <LocationOnIcon /> Order Tracking</Button>                                        
                                            </li>
                                            <li>
                                                <Button disableRipple='false'><FavoriteBorderIcon /> My Wishlist</Button>                                        
                                            </li>
                                            <li>
                                                <Button disableRipple='false'> < TuneIcon /> Setting</Button>                                        
                                            </li>
                                            <li>
                                                <Button disableRipple='false'><LogoutIcon /> Sign out</Button>                                        
                                            </li>
                                        </ul>
                                        }
                                        
                                        
                                    </span>
                                    </ClickAwayListener>
                                </li>
                               
                            </ul>
                           </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </header>
    )

}
export default Header