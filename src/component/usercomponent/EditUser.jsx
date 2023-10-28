import React from "react";
import { updateuser } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import EditButton from "./EditButton";

function EditUser({ user }) {
	const navigate = useNavigate();

	async function onEditUserHandler() {
		const response = await updateuser(user);
		console.log(user);

		if (!response.error) {
		navigate("/");
		} else {
		console.log("Update user failed:", response.error);
		}
	}

	return <EditButton {...user} updateuser={onEditUserHandler} />;
}

export default EditUser;
