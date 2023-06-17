'use client';
import React, { useState } from 'react';
import SearchManufacturer from './SearchManufacturer';

const Searchbar = () => {
  const [manufacturer, setManufacturer] = useState('');
  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};

export default Searchbar;
