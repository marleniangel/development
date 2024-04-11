import React from 'react';

const FilterButtons = ({ handleGenreChange, handlePriceChange }) => {
  return (
    <div>
      {/* Genre filter buttons */}
      <div>
        <button onClick={() => handleGenreChange('All')}>All Genres</button>
        {/* Assume you have a list of genres available in your data */}
        {['Rock', 'Pop', /* Add more genres */].map(genre => (
          <button key={genre} onClick={() => handleGenreChange(genre)}>{genre}</button>
        ))}
      </div>

      {/* Price filter buttons */}
      <div>
        <button onClick={() => handlePriceChange('All')}>All Prices</button>
        <button onClick={() => handlePriceChange('0-10')}>$0 - $10</button>
        <button onClick={() => handlePriceChange('11-20')}>$11 - $20</button>
        {/* Add more price range buttons */}
      </div>
    </div>
  );
};

export default FilterButtons;