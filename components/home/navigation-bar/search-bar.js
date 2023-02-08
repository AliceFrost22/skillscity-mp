import React from "react";

const SearchPage = () => {
  return (
    <form className="flex justify-end form-inline mt-4 mb-4 max-w-2xl mx-auto">
         <input className="form-control form-control-sm ml-3 w-75 rounded-md" type="text" placeholder="Search" aria-label="Search" />
      </form>
  );
}

export default SearchPage;