import React from 'react';

import './search-box.style.css';

export const SearchBox = (props) => (
    <input 
        className="search"
        type="search"
        placeholder={props.placeHolder}
        onChange={props.handleChange}
  />
)