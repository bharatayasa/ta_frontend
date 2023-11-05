import React, { useState, useEffect } from "react";
import { getUserLogged, savepredict } from "../../utils/api";
import { Container, Accordion } from "react-bootstrap";

function PredictComponent() {
	const [file, setFile] = useState(null);
	const [result, setResult] = useState(null);
	const [authedUser, setAuthedUser] = useState(null);
	const [saveError, setSaveError] = useState(false);

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

			if (saveResult.error) {
				setSaveError(true);
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
		<div className="py-5">
		<Container>
		<div className="text-center">
			<h2>Upload Gambar Daun Tomat</h2>
			<input type="file" accept="image/*" onChange={handleFileChange} />
			<button onClick={handleUpload}>Upload</button>
		</div>

		{result && (
			<div className="mt-5">
				<h2 className="text-center">Hasil Prediksi:</h2>
				<Accordion className="mb-3">
				<Accordion.Item>
					<Accordion.Header>Deskripsi</Accordion.Header>
					<Accordion.Body>
						<p><b>Jenis Penyakit : </b>{result.kelas}</p>
						<p><b>Confidence : </b>{result.confidence}</p>
						{result.description}
					</Accordion.Body>
				</Accordion.Item>
				</Accordion>

				<Accordion>
				<Accordion.Item>
					<Accordion.Header>Cara mengatasi</Accordion.Header>
					<Accordion.Body>{result.prevention}</Accordion.Body>
				</Accordion.Item>
				</Accordion>
			</div>
		)}
		</Container>
		</div>
	);
}

export default PredictComponent;
