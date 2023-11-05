import React from "react";
import { updateMe } from "../../utils/api";
import EditProfileInput from "./EditProfileInput";

export default function EditProfile({ data }) {

	async function onEditProfile(user) {
		const response = await updateMe(user);

		if (!response.error) {
            console.log("update succes");
		} else {
			console.log("Update user failed:", response.error);
		}
	}
	return <EditProfileInput {...data} updateMe={onEditProfile} />;
}
