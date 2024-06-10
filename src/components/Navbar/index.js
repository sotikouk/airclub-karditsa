// components/Navbar/index.js

import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <div>
            <Nav>
                <img src="./images/airclub.jpeg" alt="Karditsa Airclub" width={80} height={80}/>
                    <Bars />
                        <NavMenu>
                            <NavLink to="/about" >
                                Αρχική
                            </NavLink>
                            <NavLink to="/training" activeStyle>
                                Εκπαίδευση
                            </NavLink>
                            <NavLink to="/races" activeStyle>
                                Αγώνες
                            </NavLink>
                            <NavLink to="/civil" activeStyle>
                                Πολιτική Προστασία
                            </NavLink>
                            <NavLink to="/fotos" activeStyle>
                                Φωτογραφίες
                            </NavLink>
                            <NavLink to="/sign-up" activeStyle>
                                Εγγραφείτε
                            </NavLink>
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">
                        Sign In
                    </NavBtnLink>
                </NavBtn>
            </Nav>
        </div>
    );
};

export default Navbar;
