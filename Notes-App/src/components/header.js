import React from "react";
import notey from "./notey.svg"
import './header.css'

export function Header(){
    return(
        
        <div className="header-wrap">
            <div className="header">
                <nav>
                    <ul>
                        <img src={notey} className="app-logo" alt="notey_the_dinosaur"></img>
                        <li>
                            <h1>
                                Dinote
                            </h1>
                        </li>
                    </ul>
                </nav>                   
            </div>
            <div className="button-wrap">
            <div className="add-button">
                <div className="overlap">
                    <br/>
                </div>
                <div className="add-button">
                <div className="head-button">
                    <button id="open">CLEAR ALL</button>
                </div>
            </div> 
            </div>
            </div>
        </div>
        
    );
}