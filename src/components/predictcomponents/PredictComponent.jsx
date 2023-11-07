import React, { useState, useEffect } from "react";
import { getUserLogged, savepredict } from "../../utils/api";
import {Accordion } from "react-bootstrap";

function PredictComponent() {
	const [file, setFile] = useState(null);
	const [result, setResult] = useState(null);
	const [authedUser, setAuthedUser] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
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
		setIsLoading(true);

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
		} finally {
			setIsLoading(false);
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
		<div className="bg-gradient-to-r from-red-300 via-yellow-200 to-emerald-300 min-h-screen flex flex-col justify-center items-center
		">
			<div className="text-center py-20 container">
				<div className="backdrop-blur-2xl bg-white/30 rounded-xl shadow-lg">
					<div className="mb-5 pt-5">
						<h2 className="text-lg">Upload Gambar Daun Tomat</h2>
					</div>
					<div className="mb-5 px-5 py-2">
						<input type="file" accept="image/*" className="file:mr-4s file:py-6 file:px-10 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100 " onChange={handleFileChange} />
					</div>
					<div>
						{isLoading ? (
							<button className="text-xl text-white bg-emerald-400 px-5 py-2 rounded-md hover:shadow-xl hover:bg-emerald-500 mb-5 transition duration-300 ease-in-out shadow-md" disabled>
								Loading...
							</button>
						) : (
							<button onClick={handleUpload} className="text-xl text-white bg-emerald-400 px-5 py-2 rounded-md hover:shadow-xl hover:bg-emerald-500 mb-5 transition duration-300 ease-in-out shadow-md">
								Prediksi
							</button>
						)}
					</div>
				</div>
			</div>

			{result && (
				<div className="container">
					<h2 className="text-center">Hasil Prediksi:</h2>
					<div className="">
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
					</div>

					<div className="mb-5">
					<Accordion>
						<Accordion.Item>
							<Accordion.Header>Cara mengatasi</Accordion.Header>
							<Accordion.Body>{result.prevention}</Accordion.Body>
						</Accordion.Item>
					</Accordion>
					</div>
				</div>
			)}

			{isLoading && (
				<div className="text-center mt-5 container">
					<div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500 border-t-blue-500">

					</div>
				</div>
			)}
		</div>
	);
}

export default PredictComponent;
