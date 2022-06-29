import React from 'react'
import imgEllipse from '../images/ellipse6.svg'
import imgStar from '../images/star1.svg'

import card1 from '../assets/card1Image.png'
import card2 from '../assets/card2Image.png'
import card3 from '../assets/mountain-bike-1.png'

export default function Card(props) {
    let alt = `Image for ${props.title}`
    let cardImages =
      {"card1": card1, "card2": card2, "card3": card3}
    // console.log(cardImages[props.coverImg])
    return (
            <div className="card--container">
                <img src={cardImages[props.coverImg]} alt={alt}  width="174px"/>
                {/* <img src={cardImages[props.coverImg]}  width="174px"/> */}
                {props.openSpots && <div className="card--status">{props.openSpots} left</div>}
                {!props.openSpots && <div className="card--status">Sold out</div>}
                <div className="card--data">
                    <div className="card--text">
                        <div className="card--stars"><img src={imgStar} alt="star symbol" /> {props.rating} <span className="gray">({props.reviewCount}) <img src={imgEllipse} alt="ellipse separator" className="ellipse" /> {props.location}</span></div>
                        <div className="card--title">{props.title}</div>
                        <div className="card--cost"><b>From £{props.price}</b> / person</div>
                    </div>
                </div>
            </div>
    )
}


/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/