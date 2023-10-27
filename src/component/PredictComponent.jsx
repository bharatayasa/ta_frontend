import React, { useState } from "react";

function PredictComponent() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

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
      const response = await fetch("https://us-central1-deploy-402513.cloudfunctions.net/predict", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setResult(data);
      } else {
        alert("Terjadi kesalahan saat mengunggah gambar.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container">
      <h2>Upload Gambar</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>

      {result && (
        <div>
          <h2>Hasil Prediksi:</h2>
          <p><b>Class:</b> {result.class}</p>
          <p><b>Confidence:</b> {result.confidence}</p>
          <p><b>Description:</b> {result.description}</p>
          <p><b>Prevention:</b> {result.prevention}</p>
        </div>
      )}
    </div>
  );
}

export default PredictComponent;
