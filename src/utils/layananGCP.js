import CloudFunction from "../assets/img/GCP/cloud_functions.png"
import CloudStorage from "../assets/img/GCP/cloud_storage.png"
import AppEngine from "../assets/img/GCP/app_ngine.png"
import CloudSql from "../assets/img/GCP/Cloud_SQL.png"


const layananGCP = [
    {
        id:1,
        layanan : "App Engine", 
        deskripsi : "Google App Engine adalah salah satu layanan komputasi berbasis cloud yang disediakan oleh Google Cloud Platform (GCP). Layanan ini memungkinkan pengembang untuk dengan mudah menyebarkan dan mengelola aplikasi web dan layanan back-end tanpa harus khawatir tentang mengelola infrastruktur server secara langsung.",
        gambar : AppEngine
    },
    {
        id:2,
        layanan : "Cloud SQL", 
        deskripsi : "Google Cloud SQL adalah layanan manajemen database yang disediakan oleh Google Cloud Platform (GCP). Layanan ini memungkinkan pengguna untuk membuat, mengelola, dan menggunakan database relasional seperti MySQL, PostgreSQL, dan SQL Server di lingkungan cloud Google.",
        gambar : CloudSql
    },
    {
        id:3,
        layanan : "Cloud Function", 
        deskripsi : "Google Cloud Functions adalah layanan komputasi tanpa server (serverless computing) yang disediakan oleh Google Cloud Platform (GCP). Layanan ini memungkinkan Anda menjalankan kode tanpa harus mengelola infrastruktur server secara langsung. Cloud Functions dirancang untuk menangani tugas-tugas tertentu atau menjalankan potongan kode ketika dipicu oleh peristiwa tertentu.",
        gambar : CloudFunction
    },
    {
        id:4,
        layanan : "Cloud Storage", 
        deskripsi : "Google Cloud Storage adalah layanan penyimpanan objek yang disediakan oleh Google Cloud Platform (GCP). Layanan ini memungkinkan pengguna untuk menyimpan dan mengelola berbagai jenis data, termasuk gambar, video, file teks, dan dataset besar, di cloud Google.",
        gambar : CloudStorage
    },
]

export default layananGCP; 
