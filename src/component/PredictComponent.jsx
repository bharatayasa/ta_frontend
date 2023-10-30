import React, { useState, useEffect } from "react";
import { getUserLogged, savepredict } from "../utils/api";

function PredictComponent() {
	const [file, setFile] = useState(null);
	const [result, setResult] = useState(null);
	const [authedUser, setAuthedUser] = useState(null);

	const handleFileChange = (e) => {
		const selectedFile = e.target.files[0];
		setFile(selectedFile);
	};

	const handleUpload = async () => {
		if (!file) {
		alert("Silakan pilih file gambar terlebih dahulu.");
		return;
		}

		const formData = new FormData();
		formData.append("file", file);

		try {
		const response = await fetch("https://us-central1-deploymodel-403616.cloudfunctions.net/predict", {
			method: "POST",
			body: formData,
		});

		if (response.ok) {
			const data = await response.json();
			setResult(data);

			if (authedUser && data) {
			const saveResult = await savepredict({
				kelas: data.kelas,
				confidence: data.confidence,
				description: data.description,
				prevention: data.prevention,
				userId: authedUser.id,
			});

			if (!saveResult.error) {
				console.error("Terjadi kesalahan saat menyimpan data ke database:", saveResult.error);
				alert("Terjadi kesalahan saat menyimpan data ke database. Lihat konsol untuk informasi lebih lanjut.");
			} else {
				console.log("Data berhasil dimasukkan ke database dengan ID:", saveResult.insertId);
			}
			}
		} else {
			alert("Terjadi kesalahan saat mengunggah gambar.");
		}
		} catch (error) {
		console.error("Error:", error);
		}
	};

	useEffect(() => {
		async function fetchData() {
		const { data } = await getUserLogged();
		setAuthedUser(data);
		}

		fetchData();
	}, []);

	return (
		<div className="container">
		<h2>Upload Gambar</h2>
		<input type="file" accept="image/*" onChange={handleFileChange} />
		<button onClick={handleUpload}>Upload</button>

		{result && (
			<div>
			<h2>Hasil Prediksi:</h2>
			<p><b>User ID:</b> {authedUser && authedUser.id}</p>
			<p><b>Class:</b> {result.kelas}</p>
			<p><b>Confidence:</b> {result.confidence}</p>
			<p><b>Description:</b> {result.description}</p>
			<p><b>Prevention:</b> {result.prevention}</p>
			</div>
		)}
		</div>
	);
}

export default PredictComponent;
