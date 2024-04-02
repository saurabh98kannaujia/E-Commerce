import React from "react";
import Button from "@mui/material/Button";
import '../nav/navbar.scss'
import GridViewIcon from '@mui/icons-material/GridView';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from "react-router-dom";
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';

const Navbar = () => {
    return (
        <div className="nav d-flex align-items-center">
            <div className="container-fluid ">
                <div className="row"> 
                    <div className="col-sm-3 part1">
                        <Button 
                         disableRipple="false"
                        className="bg-g text-g catbutton"
                        >
                            <GridViewIcon/> Browse All Category <KeyboardArrowDownIcon />
                        </Button>
                    </div>
                    <div className="col-sm-7 part2">
                    <ul className="list list-inline mb-0">
                                <li className="list-inline-item">
                                    <Button>
                                        <Link to="/">
                                            Home <KeyboardArrowDownIcon />
                                        </Link>
                                    </Button>
                                </li>
                                <li className="list-inline-item">
                                    <Button>
                                        <Link to="/about">
                                            About <KeyboardArrowDownIcon />
                                        </Link>
                                    </Button>
                                </li>
                                <li className="list-inline-item">
                                    <Button>
                                        <Link>
                                            Shop <KeyboardArrowDownIcon />
                                        </Link>
                                    </Button>
                                </li>
                                <li className="list-inline-item">
                                    <Button>
                                        <Link>
                                            Vendors <KeyboardArrowDownIcon />
                                        </Link>
                                    </Button>
                                </li>
                                <li className="list-inline-item">
                                    <Button>
                                        <Link>
                                            Mega Menu <KeyboardArrowDownIcon />
                                        </Link>
                                    </Button>
                                </li>
                            </ul>
                    </div>
                    <div className="col-sm-2 part3 d-flex align-items-center">
                        <div className="phNo d-flex align-items-center">
                            <span>
                                <HeadphonesOutlinedIcon/>
                            </span>
                            <div className="info ml-3">
                                <h4 className="text-green mb-0">1900 - 888</h4>
                                <p className="mb-0">24/7 Support Center</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar