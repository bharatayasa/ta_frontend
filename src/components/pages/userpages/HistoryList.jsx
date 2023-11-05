import React from "react";
import PropTypes from "prop-types";
import Accordion from 'react-bootstrap/Accordion';
import DeleteButton from "../../DeleteButton";
import moment from "moment";

function HistoryList({ savepredict, onDelete }) {
    return (
        <div>
        {savepredict.map((predict) => (
            <Accordion defaultActiveKey={predict.id} className="mb-3">
                <Accordion.Item>
                    <Accordion.Header>Tanggal : {moment(predict.created_at).format('DD MMMM YYYY')}</Accordion.Header>
                    <Accordion.Body>
                        <p><b>Jenis penyakit : </b>{predict.kelas}</p>
                        <p><b>Confidence : </b>{predict.confidence}</p>
                        <p><b>Deskripsi : </b>{predict.description}</p>
                        <p><b>Penanganan :  </b>{predict.prevention}</p>
                        <DeleteButton id={predict.id} onDelete={onDelete}/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        ))}
        </div>
    );
}

HistoryList.propTypes = {
    savepredict: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            kelas: PropTypes.string.isRequired,
            confidence: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            prevention: PropTypes.string.isRequired,
            userId: PropTypes.number.isRequired,
            created_at: PropTypes.instanceOf(Date).isRequired,
        })
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default HistoryList;
