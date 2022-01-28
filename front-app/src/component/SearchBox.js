import React, { useState } from 'react';

const SearchBox = ({inputText, onChange}) => {

  return (
  <div>
      <input
        className='search'
        type='text'
        required
        value={inputText}
        onChange={(e) => onChange(e)}
        placeholder='อาการของคุณเป็นอย่างไร'
      ></input>
  </div>
  );
};

export default SearchBox;
