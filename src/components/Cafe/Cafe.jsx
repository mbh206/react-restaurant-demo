// Gmaps URL example: `https://www.google.com/maps/search/?api=1&query=Starbucks Meguro,Tokyo`;

import "./Cafe.css";
import React from 'react';

export default function Cafe({cafeData}) {

const url = `https://ww.google.com/maps/search/?api=1&query=${cafeData.addess}`

  return (
    <div className="cafe-card">
      <img src={cafeData.picture} alt="" />
        <div>
          <div>
            <h5>{cafeData.title}</h5>
            <p>
              { cafeData.criteria.map(item => <span key={item}>{item}</span> ) }
            </p>
          </div>
          <a target="_blank" href={url}>Show on the map</a>
        </div>
    </div>
  );
}
