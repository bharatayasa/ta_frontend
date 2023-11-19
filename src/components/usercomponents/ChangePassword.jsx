import React, { useState } from "react";
import { updatePassword } from "../../utils/api";
import ChangePasswordInput from "./ChangePasswordInput.jsx";
import CustomAlert from "../../CustomAlert.jsx";

export default function ChangePassword() {
	const [alertData, setAlertData] = useState({ show: false, message: "", isSuccess: false });

	async function onEditPassword(user) {
		const response = await updatePassword(user);

		if (!response.error) {
		setAlertData({ show: true, message: "Update password berhasil", isSuccess: true });
		// window.location.reload();
		} else {
		setAlertData({ show: true, message: `Gagal memperbarui password: ${response.error}`, isSuccess: false });
		console.log("Update password failed:", response.error);
		}
	}

	return (
		<div>
		{alertData.show && <CustomAlert message={alertData.message} isSuccess={alertData.isSuccess} />}
			<ChangePasswordInput updatePassword={onEditPassword} />
		</div>
	);
}
