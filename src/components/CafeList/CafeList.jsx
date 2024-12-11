import "./CafeList.css";
import React from 'react';
import Cafe from '../Cafe/Cafe'

function CafeList({cafeData}) {

  return (
    <div className="cafe-list">
      { cafeData.map(data => <Cafe cafeData={data} key={data.title}/>)}
    </div>
  );
}

export default CafeList;
