import React from "react";
import { updateMe } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import UserData from "./UserData";

export default function EditProfile({ user }) {
	const navigate = useNavigate();

	async function onUpdateProfileHandler(data) {
		const response = await updateMe(data);
		console.log(data);
		console.log(response);

		if (!response.error) {
			navigate("/");
			// window.location.reload();
		} else {
			console.log("Update profile failed:", response.error);
		}
	}

	return <UserData user={user} updateMe={onUpdateProfileHandler} />;
}
