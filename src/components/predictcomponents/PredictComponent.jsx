import React, { useState, useEffect, Fragment } from "react";
import { getUserLogged, savepredict } from "../../utils/api";
import scananimate from "../../../src/assets/img/predict_proccess.png";

import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

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
		const response = await fetch( "https://us-central1-deploymodel-403616.cloudfunctions.net/predict",
			{
			method: "POST",
			body: formData,
			}
		);

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
		<div className="bg-gradient-to-r from-red-300 via-yellow-200 to-emerald-300 min-h-screen flex flex-col items-center">
		<div className="text-center container mt-20 self-start lg:w-1/2">
			<div className="backdrop-blur-2xl bg-white/30 hover:bg-white/50 transition duration-300 ease-in-out rounded-xl shadow-lg">
			<div className="mb-5 pt-5">
				<h2 className="lg:text-3xl sm:text-xl font-semibold text-sky-900">
					Masukkan Gambar Daun Tomat
				</h2>
			<p className="lg:text-lg sm:text-xs text-slate-400">
				pilih gambar atau drag & drop gambar ke dalam kotak
			</p>
			</div>
			<div className="border rounded-md mb-5 outline-dashed outline-4 outline-offset-2 mr-10 ml-10 backdrop-blur-2xl shadow-lg">
				<div className="mb-5 mt-5">
				<input
					type="file"
					accept="image/*"
					className="file:mr-4s lg:file:py-5 lg:file:px-5 md:file-px-3 md:file-py-3 file:rounded-md file:border-0 lg:file:text-xl sm:file:text-lg file:font-semibold file:bg-sky-50 file:text-sky-900 hover:file:bg-sky-100 file:shadow-md file:hover:shadow-xl file:transition file:duration-300 file:ease-in-out"
					onChange={handleFileChange} />
				</div>
			</div>
			<div>
				{isLoading ? (
				<button className="text-xl text-white bg-emerald-500 px-3 py-2 rounded-md shadow-md mb-5" disabled>
					Loading...
				</button>
				) : (
				<button onClick={handleUpload} className="text-xl text-white bg-emerald-400 px-3 py-2 rounded-md hover:shadow-xl hover:bg-emerald-500 mb-5 transition duration-300 ease-in-out shadow-md">
					Prediksi
				</button>
				)}
			</div>
			</div>
			{isLoading && (
			<div className="flex justify-center">
				<div className="animate-pulse justify-center mb-5">
				<div>
					<img src={scananimate} />
				</div>
				</div>
			</div>
			)}
		</div>
{/*  */}
		{result && (
			<div className="container">
			<div className="mt-4 mb-3">
				<h2 className="text-center text-3xl font-semibold text-sky-900">
				Hasil Prediksi:
				</h2>
				<p className="text-center text-sm font-semibold text-sky-900">silahkan masukkan gambar untuk memprediksi lagi</p>
			</div>

			<div className="lg:grid grid-cols-2 gap-4 container mb-5">
				<div className="mx-auto w-full rounded-xl bg-white/30 hover:bg-white/50 backdrop-blur-lg mb-3 shadow-lg transition duration-300">
				<Disclosure defaultOpen>
					{({ open }) => (
					<div>
						<Disclosure.Button className="flex w-full justify-between rounded-t-lg bg-emerald-300 px-2 py-4 font-medium hover:bg-emerald-500 focus:outline-none transition duration-200 ease-in-out shadow-md hover:shadow-xl">
						<span>Deskripsi</span>
						<ChevronUpIcon className={`${open ? "rotate-180 transform" : ""} h-5 w-5 to-black font-semibold`} />
						</Disclosure.Button>
						<Transition
						as={Fragment}
						enter="transition ease-out duration-300"
						enterFrom="transform opacity-0 scale-95"
						enterTo="transform opacity-100 scale-100"
						leave="transition ease-in duration-75"
						leaveFrom="transform opacity-100 scale-100"
						leaveTo="transform opacity-0 scale-95"
						>
						<Disclosure.Panel className="px-4 pt-4 pb-2">
							<div>
								<div className="text-2xl font-semibold text-sky-900 mb-2">
									<h1 className="py-2 text-center">Deskripsi</h1>
								</div>
							<div>
								<p>
								<b className="text-sky-900">Jenis Penyakit : </b>
									{result.kelas}
								</p>
							</div>
							<div>
								<p className="overflow-x-hidden whitespace-normal text-justify">
								<b className="text-sky-900">Confidence : </b>
								{result.confidence}
								</p>
							</div>
								<div className="text-justify">
									<p className="leading-relaxed">{result.description}</p>
								</div>
							</div>
						</Disclosure.Panel>
						</Transition>
					</div>
					)}
				</Disclosure>
				</div>
				<div className="mx-auto rounded-xl w-full bg-white/30 hover:bg-white/50 backdrop-blur-lg mb-3 shadow-lg transition duration-300">
				<Disclosure defaultOpen>
					{({ open }) => (
					<div>
						<Disclosure.Button className="flex w-full justify-between rounded-t-lg bg-emerald-300 px-2 py-4 font-medium hover:bg-emerald-500 focus:outline-none transition duration-200 ease-in-out shadow-md hover:shadow-xl">
						<span>Cara Penanggulangan</span>
						<ChevronUpIcon
							className={`${
							open ? "rotate-180 transform" : ""
							} h-5 w-5 to-black font-semibold`}
						/>
						</Disclosure.Button>
						<Transition
						as={Fragment}
						enter="transition ease-out duration-300"
						enterFrom="transform opacity-0 scale-95"
						enterTo="transform opacity-100 scale-100"
						leave="transition ease-in duration-75"
						leaveFrom="transform opacity-100 scale-100"
						leaveTo="transform opacity-0 scale-95"
						>
						<Disclosure.Panel className="px-4 pt-4 pb-2">
							<div>
							<div className="text-center text-2xl font-semibold text-sky-900 mb-2">
								<h1 className="py-2">Cara Peanggulangan</h1>
							</div>
							<p className="mb-2 text-justify leading-relaxed">
								{result.prevention}
							</p>
							</div>
							<div className="text-center mb-2 mt-3">
							<p></p>
							</div>
						</Disclosure.Panel>
						</Transition>
					</div>
					)}
				</Disclosure>
				</div>
			</div>
			</div>
		)}
		</div>
	);
}

export default PredictComponent;
