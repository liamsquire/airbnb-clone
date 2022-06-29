import React from "react"
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Card from './components/Card'
import './App.css';
import data from './data.js'

export default function App() {
    const cards = data.map(item => {
        return (
            <Card 
                key={item.id}
                coverImg={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location = {item.location}
                title={item.title}
                price={item.price}
                openSpots={item.openSpots}
                />
        )
    })



    return (
        <div id="page">
            <Navbar />
            <Banner />
            <section className="experiences--cards">
                {cards}
            </section>

        </div>
    )
}