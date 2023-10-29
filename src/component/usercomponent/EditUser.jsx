import React from "react";
import { updateuser } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import EditButton from "./EditButton";

export default function EditUser({ user }) {
	const navigate = useNavigate();

	async function onEditUserHandler(user) {
		const response = await updateuser(user);
		// console.log(user);
		// console.log(response);

		if (!response.error) {
		navigate("/");
		window.location.reload();
		} else {
		console.log("Update user failed:", response.error);
		}
	}

	return <EditButton {...user} updateuser={onEditUserHandler} />;
}
