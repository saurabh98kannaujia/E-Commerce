import React, { useState } from "react";
import Logo from "../../assets/images/logo.svg";
import "../header/header.scss";
import SearchIcon from "@mui/icons-material/Search";
import SelectDrop from "../common-modules/selectDrop/selectdrop";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import conatantData from "../../shared/constant";
import IconCompare from "../../assets/images/icon-compare.svg";
import IconCart from "../../assets/images/icon-cart.svg";
import IconHeat from "../../assets/images/icon-heart.svg";
import IconUser from "../../assets/images/icon-user.svg";
import Button from "@mui/material/Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import TuneIcon from "@mui/icons-material/Tune";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Navbar from "./nav/navbar";

const Header = () => {
  const categoryList = conatantData.categoryList;
  let stateList = conatantData.stateList;

  const [isAccountDropdown, showAccountDropdown] = useState(false);
  const [isCardDropDown, showCardDropDown] = useState(false);

  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row">
            {/* Logo Image Start here */}
            <div className="col-sm-2 borderColr d-flex align-items-center">
              <img className="logoImg" src={Logo} alt="Logo" />
            </div>
            {/* Logo Image End here */}

            {/* Header Search Start here */}
            <div className="col-sm-5 d-flex align-items-center">
              <div className="headerSearch d-flex align-items-center">
                <div className="selectDropMain cursor position-relative">
                  <SelectDrop listData={categoryList} icon="" />
                </div>
                <div className="line">{/* sdsd */}</div>
                <div className="search">
                  <input type="search" placeholder="Search for items..." />
                  <SearchIcon className="searchIcon cursor" />
                </div>
              </div>
            </div>
            {/* Header Search here */}

            <div className="col-sm-5 d-flex align-items-center">
              <div className="ml-auto d-flex align-items-center">
                <div className="contryClass cursor">
                  <SelectDrop listData={stateList} icon={<LocationOnIcon />} />
                </div>

                <div>
                  <ul className="list list-inline mb-0 headerTabs">
                    <li className="list-inline-item">
                      <span>
                        <img src={IconCompare} />
                        <span className="badge bg-success">3</span>
                        Compare
                      </span>
                    </li>
                    <li className="list-inline-item">
                      <span
                        onMouseEnter={() => showCardDropDown(!isCardDropDown)}
                        onMouseLeave={() => showCardDropDown(!isCardDropDown)}
                      >
                        <img src={IconCart} />
                        <span className="badge bg-success">3</span>
                        Cart
                        {isCardDropDown && (
                          <div className="cart-dropdown">
                            <div className="product-cart-list">
                              <div className="cart-details">
                                <div className="cart-product-image">
                                  <img src={IconUser} />
                                </div>
                                <div className="cart-production-name-details">
                                  <span className="product-name">
                                    Daisy Casual Bag
                                  </span>
                                  <span className="price">1 x $3200.00</span>
                                </div>
                              </div>
                              <div className="cart-details">
                                <div className="cart-product-image">
                                  <img src={IconUser} />
                                </div>
                                <div className="cart-production-name-details">
                                  <span className="product-name">
                                    Daisy Casual Bag
                                  </span>
                                  <span className="price">1 x $3200.00</span>
                                </div>
                              </div>
                            </div>
                            <div className="cart-total">
                              <div className="cart-total-upper">
                                <div className="total-label">Total</div>
                                <span className="price">$4000</span>
                              </div>
                              <div className="cart-total-btn">
                                <Button
                                  variant="outlined"
                                  disableRipple="false"
                                  color="success"
                                >
                                  View Cart
                                </Button>
                                <Button
                                  variant="contained"
                                  disableRipple="false"
                                  color="success"
                                >
                                  Checkout
                                </Button>
                              </div>
                            </div>
                          </div>
                        )}
                      </span>
                    </li>
                    <li className="list-inline-item">
                      <span>
                        <img src={IconHeat} />
                        <span className="badge bg-success">3</span>
                        Wishlist
                      </span>
                    </li>
                    <li className="list-inline-item ">
                      <span
                        onMouseEnter={() =>
                          showAccountDropdown(!isAccountDropdown)
                        }
                        onMouseLeave={() =>
                          showAccountDropdown(!isAccountDropdown)
                        }
                      >
                        <img src={IconUser} />
                        Account
                        {isAccountDropdown && (
                          <ul className="account-dropdown">
                            <li>
                              <Button disableRipple="false">
                                {" "}
                                <PersonOutlineIcon /> My Account
                              </Button>
                            </li>
                            <li>
                              <Button disableRipple="false">
                                {" "}
                                <LocationOnIcon /> Order Tracking
                              </Button>
                            </li>
                            <li>
                              <Button disableRipple="false">
                                <FavoriteBorderIcon /> My Wishlist
                              </Button>
                            </li>
                            <li>
                              <Button disableRipple="false">
                                {" "}
                                <TuneIcon /> Setting
                              </Button>
                            </li>
                            <li>
                              <Button disableRipple="false">
                                <LogoutIcon /> Sign out
                              </Button>
                            </li>
                          </ul>
                        )}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Navbar />
    </>
  );
};
export default Header;
