import React from "react";
import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";
import Accordion from 'react-bootstrap/Accordion';
import { Col, Row } from "react-bootstrap";

function AccordionList({ savepredict }) {
    return (
        <div>
        {/* <Table striped bordered hover>
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
        </Table> */}

        {savepredict.map((predict, index) => (
        <Accordion defaultActiveKey="0" className="mb-3">
            <Accordion.Item>
                <Accordion.Header>
                    <Row className="d-flex">
                        <Col>
                            {predict.created_at} 
                        </Col>
                        <Col>
                            <button className="btn btn-danger">Hapus</button>
                        </Col>
                    </Row>
                </Accordion.Header>
                <Accordion.Body>
                    <p><b>Kelas penyakit : </b>{predict.kelas}</p>
                    <p><b>confidence : </b>{predict.confidence}</p>
                    <p><b>Deskripsi : </b>{predict.description}</p>
                    <p><b>Prevention :  </b>{predict.prevention}</p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
            ))}
        </div>
    );
}
    
AccordionList.propTypes = {
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
    // onDelete: PropTypes.func.isRequired,
};

export default AccordionList;
