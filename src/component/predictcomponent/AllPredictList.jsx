import React from "react";
import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";
import Accordion from 'react-bootstrap/Accordion';
import DeleteButton from "../usercomponent/DeleteButton";
import moment from 'moment';

function AllPredictList({ savepredict, onDelete }) {
    return (
        <div>
        <Table striped bordered hover responsive>
            <thead>
            <tr className="text-center">
                <th>No</th>
                <th>ID</th>
                <th>User Id</th>
                <th>kelas</th>
                <th>Confidence</th>
                <th>Description</th>
                <th>Prevention</th>
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
                <td className="text-center">{predict.id}</td>
                <td className="text-center">{predict.userId}</td>   
                <td>{predict.kelas}</td>
                <td className="text-center">{predict.confidence}</td>
                <td>
                <Accordion defaultActiveKey="0" className="mb-3">
                    <Accordion.Item>
                        <Accordion.Header>view detail</Accordion.Header>
                        <Accordion.Body>
                            {predict.description}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </td>
                <td>
                <Accordion defaultActiveKey="0" className="mb-3">
                    <Accordion.Item>
                        <Accordion.Header>view detail</Accordion.Header>
                        <Accordion.Body>
                            {predict.prevention}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </td>
                <td>{moment(predict.created_at).format('DD MMMM YYYY')}</td>
                <td className="text-center">
                <DeleteButton id={predict.id} onDelete={onDelete} />
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
        userId: PropTypes.number.isRequired,
        created_at: PropTypes.string.isRequired,
        })
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default AllPredictList;
