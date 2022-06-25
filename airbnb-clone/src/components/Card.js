import React from 'react'
import imgEllipse from '../images/ellipse6.svg'
import imgStar from '../images/star1.svg'

import card1 from '../assets/card1Image.png'
import card2 from '../assets/card2Image.png'
import card3 from '../assets/mountain-bike-1.png'

export default function Card({img, status, reviewScore, reviewCount, country, title, cost}) {
    let alt = "Image for " + title
    let cardImages =
      {"card1": card1, "card2": card2, "card3": card3}

    return (
            <div className="card--container">
                <img src={cardImages[img]} alt={alt}  width="174px"/>
                <div className="card--status">{status}</div>
                <div className="card--data">
                    <div className="card--text">
                        <div className="card--stars"><img src={imgStar} alt="star symbol" /> {reviewScore} <span className="gray">({reviewCount}) <img src={imgEllipse} alt="ellipse separator" className="ellipse" /> {country}</span></div>
                        <div className="card--title">{title}</div>
                        <div className="card--cost"><b>From {cost}</b> / person</div>
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