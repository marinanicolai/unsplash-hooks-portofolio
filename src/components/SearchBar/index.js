import React, { useState, useRef } from "react";

export default function SearchBar({ handleSubmit, handleClear }) {
  const formRef = useRef();
  const [searchText, setSearchText] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(searchText);
  };

  const clearComplete = () => {
    formRef.current.reset();
    handleClear();
  };

  return (
    <div>
      <div>
        <form onSubmit={handleFormSubmit} ref={formRef}>
          <div>
            <input
              type="text"
              placeholder="Search a photo !"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <div>
              <button type="button" onClick={clearComplete}>
                Clear
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
