import React, { Component } from "react";
import "./Footer.css"

function Footer() {

    return (
        <div className = "footer">

            <button type = "scroll_to_top"
                className = "backToTopButton">
                Back to top
            </button>

            <div className="footer__info">
                <div className = "footer_header1">
                    <h4>Get to Know Us</h4>
                    <h5>Carrers</h5>
                    <h5>Amazon Relations</h5>
                    <h5>Press Releases</h5>
                </div>

                <div className = "footer_header1">
                    <h4>Get to Know Us</h4>
                    <h5>Sell on Amazon</h5>
                    <h5>Sell Under Amazon Accelerator</h5>
                    <h5>Amazon Associates</h5>
                    <h5>Sell on Amazon Handmade</h5>
                    <h5>Advertise Your Products</h5>
                    <h5>Independently Publish with Us</h5>
                    <h5>Host an Amazon Hub</h5>
                </div>  

                <div className = "footer_header1">
                    <h4>Amazon Payment Products</h4>
                    <h5>Amazon.ca Rewards Mastercard</h5>
                    <h5>Shop with Points</h5>
                    <h5>Reload Your Balance</h5>
                    <h5>Amazon Currency Converter</h5>
                    <h5>Gift Cards</h5>
                    <h5>Amazon Cash</h5>
                </div>  

                <div className = "footer_header1    ">
                    <h4>Let Us Help You</h4>
                    <h5>COVID-19 and Amazon</h5>
                    <h5>Shipping Rates & Policies</h5>
                    <h5>Amazon Prime</h5>
                    <h5>Returns Are Easy</h5>
                    <h5>Manage your Content and Devices</h5>
                    <h5>Customer Service</h5>
                </div>  
            </div>

        </div>
    )
}



export default Footer
