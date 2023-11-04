import React from "react";
import { updateMe } from "../../utils/api";
// import { useNavigate } from "react-router-dom";
import UserData from "./UserData";

export default function EditUser({ user }) {
	// const navigate = useNavigate();

	async function onEditProfile(user) {
		const response = await updateMe(user);
		console.log(user);
		console.log(response);

		if (!response.error) {
		// navigate("/");
		// window.location.reload();
		} else {
			console.log("Update user failed:", response.error);
		}
	}

	return <UserData {...user} updateMe={onEditProfile} />;
}
