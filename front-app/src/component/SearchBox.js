import React, { useState } from 'react';

const SearchBox = () => {

    const [searchItem, setSearchItem] = useState('')

  return (
  <div>
      <input
        type='text'
        required
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      ></input>
  </div>
  );
};

export default SearchBox;
