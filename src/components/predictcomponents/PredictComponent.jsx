import React, { useState, useEffect, Fragment } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { Spinner } from "@material-tailwind/react";
import { TooltipCustomStyles } from "./TooltipCustomStyles";
import { getUserLogged, savepredict } from "../../utils/api";
import proses from "../../../src/assets/img/proses/proses.png"
const MODEL_URL = import.meta.env.VITE_MODEL_URL;

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
		const response = await fetch( MODEL_URL,
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
		<div className="bg-gradient-to-tr from-red-300 via-yellow-200 to-emerald-400 min-h-screen flex flex-col items-center">

		<div className="text-center container mx-auto mt-[80px] self-start lg:w-1/2 px-4">
			<div className="backdrop-blur-2xl bg-white/30 hover:bg-white/50 transition duration-300 ease-in-out rounded-xl shadow-lg" data-aos="zoom-in">
				<div className="mb-5 pt-5">
					<h2 className="lg:text-3xl sm:text-xl text-xl font-semibold text-sky-900">
						Masukkan Gambar Daun Tomat
					</h2>
					<p className="lg:text-lg sm:text-xs text-slate-400 text-xs">
						pilih gambar atau drag & drop gambar ke dalam kotak
					</p>
				</div>
				<div className="border rounded-md mb-5 outline-dashed outline-4 outline-offset-2 mr-10 ml-10 backdrop-blur-2xl shadow-lg">
					<div className="mb-5 mt-5">
						<input type="file" accept="image/*" className="lg:file:py-5 lg:file:px-5 md:file-px-3 md:file-py-3 file:rounded-md file:border-0 lg:file:text-xl sm:file:text-sm file:text-sm file:font-semibold file:bg-sky-50 file:text-sky-900 hover:file:bg-sky-100 file:shadow-md file:hover:shadow-xl file:transition file:duration-300 file:ease-in-out" onChange={handleFileChange} />
					</div>
				</div>
				<div>
					{isLoading ? (
					<div className="items-center flex justify-center">
						<button className="text-xl text-white bg-emerald-500 px-3 py-2 rounded-md shadow-md flex items-center mb-5" disabled>
							Loading
							<div className=""><Spinner className="h-8 w-10 text-white-900/50" /></div>
						</button>
					</div>
					) : (
					<button onClick={handleUpload} className="text-xl text-white bg-emerald-400 px-3 py-2 rounded-md hover:shadow-xl hover:bg-emerald-500 mb-5 transition duration-300 ease-in-out shadow-md">
						Prediksi
					</button>
					)}
				</div>
			</div>
			{isLoading && (
			<div className="flex justify-center">
				<div className="justify-center mb-5 mt-5">
					<div>
						<img style={{ width: '100%' }} src={proses} />
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

			<div className="lg:grid grid-cols-2 gap-4 container mb-5 px-4 lg:px-0">
				<div className="mx-auto w-full rounded-xl bg-white/30 hover:bg-white/50 backdrop-blur-lg mb-3 shadow-lg transition duration-300">
				<Disclosure defaultOpen>
					{({ open }) => (
					<div>
						<Disclosure.Button className="flex w-full justify-between rounded-t-lg bg-emerald-400 px-2 py-4 font-medium hover:bg-emerald-500 focus:outline-none transition duration-200 ease-in-out shadow-md hover:shadow-xl">
						<div className="flex">
							<span>Deskripsi</span>
							<div className="ml-2 mt-[2px]"><TooltipCustomStyles /></div>
						</div>
						<ChevronUpIcon className={`${open ? "rotate-180 transform" : ""} h-5 w-5 to-black font-semibold`} />
						</Disclosure.Button>
						<Transition as={Fragment} enter="transition ease-out duration-300" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
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
										<div>
											<div>
											<b className="text-sky-900">Confidence : </b>
												{result.confidence}
											</div>
										</div>
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
						<Disclosure.Button className="flex w-full justify-between rounded-t-lg bg-emerald-400 px-2 py-4 font-medium hover:bg-emerald-500 focus:outline-none transition duration-200 ease-in-out shadow-md hover:shadow-xl">
						<span className="text-sm">Cara Penanggulangan</span>
						<ChevronUpIcon
							className={`${
							open ? "rotate-180 transform" : ""
							} h-5 w-5 to-black font-semibold`}
						/>
						</Disclosure.Button>
						<Transition as={Fragment} enter="transition ease-out duration-300" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95" >
						<Disclosure.Panel className="px-4 pt-4 pb-2">
							<div>
							<div className="text-center text-2xl font-semibold text-sky-900 mb-2">
								<h1 className="py-2">Cara Penanggulangan</h1>
							</div>
							<p className="mb-2 text-justify leading-relaxed">
								{result.prevention}
							</p>
							</div>
						</Disclosure.Panel>
						</Transition>
					</div>
					)}
				</Disclosure>
				</div>

			</div>
				<div className="text-center mb-10 mt-3 font-semibold text-sky-900 text-sm px-8 lg:px-0">
					<p><i>hasil prediksi akan tersimpan di history secara otomatis</i></p>
				</div>
			</div>
		)}
		</div>
	);
}

export default PredictComponent;
