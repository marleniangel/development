import React from 'react';

const SortingButton = ({ handleSortByPrice }) => {
  return (
    <div>
      <button onClick={handleSortByPrice}>Sort by Price</button>
    </div>
  );
};

export default SortingButton;