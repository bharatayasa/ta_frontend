import React from 'react';
import PropTypes from 'prop-types';

function DeleteButton({ id, onDelete }) {
    return (
        <button className='btn btn-danger' onClick={() => onDelete(id)}>Hapus</button>
    )
}

DeleteButton.propTypes = {
    id: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default DeleteButton;
