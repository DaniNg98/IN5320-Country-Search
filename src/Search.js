import React, { useState } from 'react';

function Search(props) {
  const [searchInput, setSearchInput] = useState('');

  const onChange = (event) => setSearchInput(event.target.value);

  const handleClick = (event) => {
    props.setSearchQuery(searchInput);
  };

  return (
    <div>
      <input type='text' onChange={onChange} />
      <button onClick={handleClick}>Search</button>
    </div>
  );
}

export default Search;
