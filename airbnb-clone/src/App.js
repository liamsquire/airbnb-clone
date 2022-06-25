import React from "react"
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Card from './components/Card'
import './App.css';


export default function App() {
    return (
        <div id="page">
            <Navbar />
            <Banner />
            <section className="experiences--cards">
                <Card 
                img="card1"
                reviewScore="5.0"
                reviewCount="6"
                country = "USA"
                status="Sold out"
                title="Life lessons with Katie Zaferes"
                cost="£136"
                />
                <Card 
                img="card2"
                reviewScore="5.0"
                reviewCount="30"
                country = "USA"
                status="Online"
                title="Learn wedding photography"
                cost="£125"
                />
                <Card 
                img="card3"
                reviewScore="4.8"
                reviewCount="2"
                country = "Ireland"
                status=""
                title="Group Mountain Biking"
                cost="£50"
                />
            </section>

        </div>
    )
}