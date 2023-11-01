import React from "react";
import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";

function AllPredictList({ savepredict }) {
    return (
        <div>
        <Table striped bordered hover>
            <thead>
            <tr className="text-center">
                <th>No</th>
                <th>ID</th>
                <th>kelas</th>
                <th>Confidence</th>
                <th>Description</th>
                <th>Prevention</th>
                <th>User Id</th>
                <th>Created at</th>
                <th>Aksi</th>
            </tr>
            </thead>
            <tbody>
            {savepredict.map((predict, index) => (
                <tr key={predict.id}>
                <td className="text-center">
                    <b>{index + 1}</b>
                </td>
                <td>{predict.id}</td>
                <td>{predict.kelas}</td>
                <td>{predict.confidence}</td>
                <td>{predict.description}</td>
                <td>{predict.prevention}</td>
                <td>{predict.userId}</td>
                <td>{predict.created_at}</td>
                <td className="text-center">
                    <button className="btn btn-danger">delete</button>
                </td>
                </tr>
            ))}
            </tbody>
        </Table>
        </div>
    );
}

AllPredictList.propTypes = {
    savepredict: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number.isRequired,
        kelas: PropTypes.string.isRequired,
        confidence: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        prevention: PropTypes.string.isRequired,
        userId: PropTypes.string.isRequired,
        created_at: PropTypes.string.isRequired,
        })
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default AllPredictList;
