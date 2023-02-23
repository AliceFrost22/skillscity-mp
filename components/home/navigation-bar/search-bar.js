import React from "react";

const SearchPage = () => {
  return (
    <form className="w-full flex items-center md:justify-end md:pr-10 md:form-inline mt-4 mb-4 w-100">
         <input className="form-control form-control-sm ml-3 rounded-md ml-4" type="text" placeholder="Search" aria-label="Search" />
      </form>
  );
}

export default SearchPage;