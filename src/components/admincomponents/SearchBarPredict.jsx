import React from "react";
import PropTypes from 'prop-types';

function SearchBarPredict({ selectedOption, keyword, keywordChange, handleOptionChange }) {
    const onSearch = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <form onSubmit={onSearch} className="flex mb-3 items-center">
                <div className="text-lg rounded-md shadow-md">
                    <select value={selectedOption} onChange={(e) => handleOptionChange(e.target.value)} className="py-2 px-3 rounded-l-lg text-center w-36 hover:bg-slate-100 transition duration-100 ease-in-out">
                        <option value="userId">user id</option>
                        <option value="kelas">kelas</option>
                    </select>
                </div>
                <div className="lg:w-1/2 w-full ml-2">
                    <input type="text" value={keyword} onChange={(e) => keywordChange(e.target.value)} placeholder={`cari berdasarkan ${selectedOption}`}className="shadow-md rounded-r-lg px-3 py-2 w-full hover:bg-slate-100 transition duration-100 ease-in-out" />
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
