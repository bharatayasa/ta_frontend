import React from "react";
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

function SearchBar({keyword, keywordChange}) {
    return(
        <Form>
        <Form.Group className="mb-3 w-50">
            <Form.Label>Cari User : </Form.Label>
            <Form.Control type="text" placeholder="Cari berdasarkan Name" value={keyword} onChange={(event) => keywordChange(event.target.value)} />
        </Form.Group>
        </Form>
    )
}

SearchBar.propType = {
    keyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired
}

export default SearchBar;
