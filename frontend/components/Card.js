import React from "react"
export default function Card({title, text, imageURL, date}) {
    return (
      <div className='card'>
          <h2>{title }</h2>
            <p>
              {text}
            </p>
             <figure>
                <img src={imageURL} />
                <figcaption>Pic was snapped {date}</figcaption>
             </figure>
          
        </div>
    )
  }