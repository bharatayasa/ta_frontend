import React from "react";
import PropTypes from 'prop-types';

function SearchBar({ selectedOption, keyword, keywordChange, handleOptionChange }) {
    const onSearch = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <form onSubmit={onSearch} className="flex mb-3 items-center">
                <div className="text-lg rounded-md shadow-md">
                    <select value={selectedOption} onChange={(e) => handleOptionChange(e.target.value)} className="py-2 px-3 rounded-l-lg text-center w-36 hover:bg-slate-100 transition duration-100 ease-in-out">
                        <option value="id">id</option>
                        <option value="username">username</option>
                        <option value="name">name</option>
                        <option value="email">email</option>
                    </select>
                </div>
                <div className="lg:w-1/2 sm:w-full ml-2">
                    <input type="text" value={keyword} onChange={(e) => keywordChange(e.target.value)} placeholder={`cari berdasarkan ${selectedOption}`}className="shadow-md rounded-r-lg px-3 py-2 w-full hover:bg-slate-100 transition duration-100 ease-in-out" />
                </div>
            </form>
        </div>
    );
}

SearchBar.propTypes = {
    selectedOption: PropTypes.string.isRequired,
    handleOptionChange: PropTypes.func.isRequired,
    keyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired
};

export default SearchBar;
