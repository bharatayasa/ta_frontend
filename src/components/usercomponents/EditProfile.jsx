import React, { useState } from "react";
import { updateMe } from "../../utils/api.js";
import EditProfileInput from "./EditProfileInput.jsx";
import CustomAlert from "../../CustomAlert.jsx";

export default function EditProfile({ data }) {
	const [alertData, setAlertData] = useState({ show: false, message: "", isSuccess: false });

	async function onEditProfile(user) {
		const response = await updateMe(user);

		if (!response.error) {
		setAlertData({ show: true, message: "Update datadiri berhasil", isSuccess: true });
		// window.location.reload();
		} else {
		setAlertData({ show: true, message: `Gagal memperbarui: ${response.error}`, isSuccess: false });
		console.log("Update user failed:", response.error);
		}
	}

	return (
		<div>
		{alertData.show && <CustomAlert message={alertData.message} isSuccess={alertData.isSuccess} />}
		<EditProfileInput {...data} updateMe={onEditProfile} />
		</div>
	);
}
