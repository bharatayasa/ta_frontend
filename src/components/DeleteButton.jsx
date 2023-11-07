import React from 'react';
import PropTypes from 'prop-types';

function DeleteButton({ id, onDelete }) {
    return (
        <button className='text-l text-white bg-pink-600 px-3 py-2 rounded-md hover:shadow-xl hover:bg-pink-700 transition duration-300 ease-in-out shadow-md' onClick={() => onDelete(id)}>Hapus</button>
    )
}

DeleteButton.propTypes = {
    id: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default DeleteButton;
