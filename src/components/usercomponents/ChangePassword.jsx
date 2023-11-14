import React, { useState } from "react";
import { updatePassword } from "../../utils/api";
<<<<<<< HEAD
import ChangePasswordInput from "./ChangePasswordInput.jsx";
import CustomAlert from "../../CustomAlert.jsx";
=======
import ChangePasswordInput from "./ChangePasswordInput";
import CustomAlert from "./CustomAlert";
>>>>>>> 11bb46e90940d3c5cf5b016e914613aeac393dae

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
