import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className = 'home'>
            <div className="home__container">
                <img 
                className="home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2020/Other/BRND_MTH20_00000_GWBleedingHero_1500x600_Final_en-CA_FT_PVD6150._CB416179696_.jpg"
                alt = "" 
                />

                <div className = "home__row">
                    <Product 
                    id = {100}
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses" 
                    price={29.99}
                    image = {"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"}
                    rating = {5}/>
                    <Product 
                    id = {200}
                    title = 'MSI Gaming GeForce RTX 2080 Super 8GB GDRR6 256-Bit HDMI/DP'
                    price={1,241.51}
                    image = {"https://m.media-amazon.com/images/I/81WhZNCowVL._AC_UL320_.jpg"}
                    rating = {5}
                    />
                </div>

                <div className = "home__row">
                    <Product 
                    id = {900}
                    title = "Homcasito Night Lights Bluetooth Speaker, Touch Sensor Bedside Table Lamp, Dimmable RGB Night Lamp"
                    price = {39.09}
                    image = {"https://images-na.ssl-images-amazon.com/images/I/415DB8ktyPL.jpg"}
                    rating = {3}
                    />
                    <Product
                    id = {800} 
                    title = 'Philips Hue White A19 4 Pack LED Smart Bulb, Bluetooth & Zigbee compatible'
                    price = {64.99}
                    image = {"https://images-na.ssl-images-amazon.com/images/I/31ozYhWSs3L.jpg"}
                    rating={4}
                    />
                    <Product 
                    id = {900}
                    title = "Maximus SPL12-06A1W4-BKT-K1 Camera Floodlight Powered by Kuna App, Compatible with Amazon Alexa"
                    price = {355.12}
                    image = {"https://images-na.ssl-images-amazon.com/images/I/41B7SAjYoYL.jpg"}
                    rating = {4}
                    />
                </div>

                <div className = "home__row">
                    <Product 
                    id = {600}
                    title = 'ASUS ROG Strix XG49VQ 49” Curved Gaming FreeSync Monitor 144Hz Dual Full HD HDR Eye Care with DP HDMI'
                    price = {1,199.99}
                    image = {"https://images-na.ssl-images-amazon.com/images/I/81vlA84pg6L._AC_SX679_.jpg"}
                    rating = {5}
                    />
                </div>
                
                <div className = "home__row">
                    <Product 
                    id = {300}
                    title = 'Echo Dot (3rd gen) - Smart speaker with Alexa - Charcoal'
                    price = {24.99}
                    image = {"https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL200_SR200,200_.jpg"}
                    rating={4}
                    />
                    <Product
                    id = {400} 
                    title = 'Samsung LS24R350FHNXZA 24" LED-Lit Monitor 75Hz Freesync Dark Blue Grey'
                    price = {139.99}
                    image = {"https://images-na.ssl-images-amazon.com/images/I/613f49zA9NL._AC_UL200_SR200,200_.jpg"}
                    rating={4}
                    />
                    <Product 
                    id = {500}
                    title = "AMD Ryzen 5 3600 6-Core, 12-Thread Unlocked Desktop Processor with Wraith Stealth Cooler"
                    price = {368.99}
                    image = {"https://images-na.ssl-images-amazon.com/images/I/71WPGXQLcLL._AC_UL200_SR200,200_.jpg"}
                    rating = {5}
                    />
                </div>

                <div className = "home__row">
                    <Product 
                    id = {1000}
                    title = 'Ring Video Doorbell Pro, with HD Video, Motion Activated Alerts, Easy Installation (existing doorbell wiring required)'
                    price = {199.99}
                    image = {"https://images-na.ssl-images-amazon.com/images/I/712UDuT1yRL._AC_UL200_SR200,200_.jpg"}
                    rating={2}
                    />
                    <Product 
                    id = {1200}
                    title = 'Apexcam Dash Cam 4" IPS 1080P FHD Driving Recorder Front and Waterproof Rear Lens Camera 170°Wide-Angle Dashboard Backup Cars Camera'
                    price = {59.48}
                    image = {"https://images-na.ssl-images-amazon.com/images/I/71weUPcF9zL._AC_UL200_SR200,200_.jpg"}
                    rating = {5}
                    />
                </div>

                <div className = "home__row">
                    <Product
                    id = {1100} 
                    title = 'Seagate Expansion 8TB Desktop External Hard Drive USB 3.0 (STEB8000100)'
                    price = {196.75}
                    image = {"https://images-na.ssl-images-amazon.com/images/I/61eMK5IfLjL._AC_UL200_SR200,200_.jpg"}
                    rating={5}
                    />
                </div>

            </div>
        </div>
    )
}

export default Home
