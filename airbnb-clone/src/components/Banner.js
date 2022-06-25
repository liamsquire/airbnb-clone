import React from 'react'
import imgGrid from '../images/photo-grid.png'

export default function Banner() {
    return (
        <section className="hero">
                <img src={imgGrid} alt="photo collage" className="hero--photo" />
                <h1 className="hero--heading">Online Experiences</h1>
                <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
        </section>
    )
}