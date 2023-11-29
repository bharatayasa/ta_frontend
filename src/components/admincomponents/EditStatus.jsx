import React from "react";
import { updateStatus } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import EditStatusInput from "./EditStatusInput.jsx";

export default function EditStatus({ id }) {
	const navigate = useNavigate();

	async function editStatusHandler(updatedPredict) {
		const response = await updateStatus(updatedPredict);

		if (!response.error) {
			navigate('/hasil/prediksi');
			window.location.reload();
		} else {
			console.log("Update Status failed:", response.error);
			console.log(updatedPredict);
		}
	}

	return <EditStatusInput {...id} updateStatus={editStatusHandler} />;
}
