import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ handleClear }) {
  const formRef = useRef();
  const [searchText, setSearchText] = useState(null);

  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchText}`);
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
