import React from "react";
import { updateMe } from "../../utils/api";
import UserData from "./UserData";

export default function EditUser({ data }) {

	async function onEditProfile(user) {
		const response = await updateMe(user);

		if (!response.error) {
            console.log("update succes");
		} else {
			console.log("Update user failed:", response.error);
		}
	}
	return <UserData {...data} updateMe={onEditProfile} />;
}
