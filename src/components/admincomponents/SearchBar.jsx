import React from "react";
import PropTypes from 'prop-types';

function SearchBar({ selectedOption, keyword, keywordChange, handleOptionChange }) {
    const onSearch = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <form onSubmit={onSearch} className="flex mb-3">
                <div className="text-lg rounded-md">
                    <span>
                    <select value={selectedOption} onChange={(e) => handleOptionChange(e.target.value)} className="py-2 px-3 rounded-l-lg mr-2 text-center">
                        <option value="name">nama</option>
                        <option value="username">username</option>
                        <option value="email">email</option>
                    </select>
                    </span>
                </div>
                <div>
                    <input type="text" value={keyword} onChange={(e) => keywordChange(e.target.value)} placeholder={`cari ${selectedOption}`} className="rounded-r-lg px-10 py-2 w-full"/>
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
