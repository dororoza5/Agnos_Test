import React, { useState } from 'react';

const SearchBox = ({inputText, onChange}) => {

  return (
  <div>
      <input
        type='text'
        required
        value={inputText}
        onChange={(e) => onChange(e)}
      ></input>
  </div>
  );
};

export default SearchBox;
