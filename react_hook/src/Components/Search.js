import React from "react";

const Search = () => {
  const debounce = (func, delay) => {
    let debounceTimer;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
  };

  const handleSearch = debounce((e) => {
    console.log(e.target.value);
  }, 500);

  return (
    <div>
      <input type="search" placeholder="Search..." onChange={handleSearch} />
    </div>
  );
};

export default Search;
