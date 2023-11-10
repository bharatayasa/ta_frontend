import React from "react";
import PropTypes from 'prop-types';

function SearchBarPredict({ selectedOption, keyword, keywordChange, handleOptionChange }) {
    const onSearch = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <form onSubmit={onSearch} className="flex mb-3">
                <div className="text-lg rounded-md">
                    <select
                        value={selectedOption}
                        onChange={(e) => handleOptionChange(e.target.value)}
                        className="py-2 px-3 rounded-l-lg text-center w-36"
                    >
                        <option value="userId">user id</option>
                        <option value="kelas">kelas</option>
                    </select>
                </div>
                <div className="w-full ml-2">
                    <input
                        type="text"
                        value={keyword}
                        onChange={(e) => keywordChange(e.target.value)}
                        placeholder={`cari ${selectedOption}`}
                        className="rounded-r-lg px-3 py-2 w-full" 
                    />
                </div>
            </form>
        </div>
    );
}

SearchBarPredict.propTypes = {
    selectedOption: PropTypes.string.isRequired,
    handleOptionChange: PropTypes.func.isRequired,
    keyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired
};

export default SearchBarPredict;
