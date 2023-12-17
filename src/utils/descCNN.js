export const descCNN = [
    {
        id:1, 
        description1: "Komputer melihat suatu gambar dalam bentuk pixel, dan di dalam setiap kotak pixel tersebut terdapat angka yang mewakili intensitas cahaya pada titik tertentu. Proses ini berkaitan dengan representasi digital dari gambar di mana setiap pixel diatur dalam grid dan diberi nilai numerik yang menunjukkan tingkat kecerahan atau warna pada lokasi tersebut."
    },
    {
        id:2, 
        description2: "Bayangkan kita memiliki gambar daun tanaman tomat, di mana setiap bagian gambar direpresentasikan oleh nilai-nilai piksel (angka) yang menunjukkan tingkat kecerahan atau warna pada pixel tertentu."
    },
    {
        id:3, 
        description3: "Filter, juga dikenal sebagai kernel, yaitu matriks kecil yang digunakan untuk memindai atau melintasi gambar. Filter ini dapat memiliki bobot (angka) tertentu."
    },
    {
        id:4, 
        description4: "Pada saat proses konvolusi, filter diterapkan pada gambar awal dengan melakukan operasi perkalian dan penjumlahan di setiap langkah. sehingga menghasilkan gambar baru dengan susunan pixel yang baru."
    },
    {
        id:5, 
        description5: "Hasil dari proses konvolusi adalah peta matrix baru. Peta matix baru ini mencerminkan di mana pola atau fitur tertentu ada dalam gambar berdasarkan respons filter terhadap area gambar."
    },
    {
        id:6, 
        description6: "ReLU singakatan dari  Rectified Linear Unit memungkinkan pembelajaran yang lebih efisien karena perhitungannya sederhana. Jika nilai input positif, ReLU tidak mengubahnya, jika nilai input negatif, outputnya langsung menjadi 0. Ini dapat mengurangi beban komputasi dan mempercepat pelatihan."
    },
    {
        id:7, 
        description7: "Max Pooling adalah salah satu teknik pengurangan dimensi (downsampling), yang sering digunakan dalam jaringan saraf konvolusional (CNN), untuk mengurangi ukuran peta fitur dan meningkatkan efisiensi komputasi. pada contoh  jika kita memiliki peta fitur 4x4 dan kita menerapkan Max Pooling 2x2 tanpa tumpang, maka kita akan mendapatkan peta fitur hasil 2x2, di mana setiap nilai adalah nilai maksimum dari setiap sub-area 2x2 di peta fitur asli."
    },
    {
        id:8, 
        description8: "Proses flatten terjadi sebagai langkah persiapan sebelum memasukkan data ke dalam lapisan-lapisan terhubung (fully connected layers) pada sebuah jaringan saraf tiruan. Flatten adalah langkah konversi dari representasi array multi-dimensi menjadi array satu dimensi."
    },
    {
        id:9, 
        description9: "gambar ini merupakan ilustrasi perbandingan dari gambar awal, dan setelah melewati proses mulai dari konvolusi, ReLu, maxpooling dan flatten. proses tersebut menghasilkan pola array 1 dimensi yang unik. pola unik ini yang nantinya akan mewakili dari masing masing kelas penyakit tomat yang ada"
    },
    {
        id:10, 
        description10: "setelah mendapatkan hasil berupa pola array 1 dimensi yang unik. masuk ke tahap fully connected layers, yang dimana pola dari masing masing array 1 dimensi ini akan di cocokan oleh neural network ke dalam kelas penyakit yang ada, kelas penyakit di dapatkan dari hasil pelatihan model. apakah hasil dari pola array ini masuk ke kategori healty, late blight, early blight dan jenis penyakit lainya, sehingga akan menghasilkan output sesuai dengan pola array yang unik tersebut."
    },
    {
        id:11, 
        description11: "Convolutional Neural Network (CNN) adalah jenis arsitektur jaringan saraf tiruan yang dirancang khusus untuk memproses dan menganalisis data spasial, terutama gambar. CNN memiliki kemampuan untuk mengenali pola lokal dalam data dan mempertahankan struktur spasialnya"
    },
]