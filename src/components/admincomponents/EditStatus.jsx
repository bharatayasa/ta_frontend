import React from "react";
import { updateStatus } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import EditStatusInput from "./EditStatusInput.jsx";

export default function EditStatus({ savepredict }) {
	const navigate = useNavigate();

	async function EditStatusHandler(savepredict) {
		const response = await updateStatus(savepredict);

		if (!response.error) {
		navigate("/");
		window.location.reload();
		} else {
			console.log("Update Status failed:", response.error);
		}
	}

	return <EditStatusInput {...savepredict} updateuser={EditStatusHandler} />;
}
