import React from "react";
import { updateuser } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import EditInput from "./EditInput.jsx";

export default function EditUser({ user }) {
	const navigate = useNavigate();

	async function onEditUserHandler(user) {
		const response = await updateuser(user);

		if (!response.error) {
		navigate("/");
		window.location.reload();
		} else {
			console.log("Update user failed:", response.error);
		}
	}

	return <EditInput {...user} updateuser={onEditUserHandler} />;
}
