
import React from 'react';
import './Searchbar.css';

function Searchbar({setCafeData}) {
  const handleChange = (e) => {
    const url = `https://matcha-and-keyboard-f549965e60e7.herokuapp.com/api/v1/cafes?title=${e.currentTarget.value}`
    fetch(url)
    .then(r => r.json())
    .then(data => {
      setCafeData(data);
    });
  };

  return (
    <div className="searchbar input-group">
      <span className="input-group-text"><i className="fa-solid fa-magnifying-glass"></i></span>
      <input onChange={handleChange} placeholder="Starbucks" type="text" className="form-control" />
    </div>
  );
}

export default Searchbar;
