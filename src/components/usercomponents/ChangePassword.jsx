import React from "react";
import { updatePassword } from "../../utils/api";
import ChangePasswordInput from "./ChangePasswordInput";

export default function ChangePassword() {

	async function onEditPassword(user) {
		const response = await updatePassword(user);

		if (!response.error) {
            console.log("update succes");
		} else {
			console.log("Update password failed:", response.error);
		}
	}
	return <ChangePasswordInput updatePassword={onEditPassword} />;
}
