# IF3260_Tugas3_K02_G06

# 3D WebGL Articulated Object

Sebuah aplikasi berbasis website yang menampilkan 3D WebGL Articulated Object. Aplikasi ini menggunakan WebGL Murni, tanpa library/framework WebGL tambahan. Aplikasi ini dikembangkan menggunakan bahasa TypeScripts dan di-serve menggunakan http-server.

## Anggota

- 13520090 Rahmat Rafid Akbar
- 13520105 Malik Akbar Hashemi R.
- 13520106 Roby Purnomo
- 13518110 Petrus E. Manurung

## Cara Menjalankan

1. Install Node.js
2. Install npm
3. Clone repository ini
4. Run
   ```
   $ npm install
   $ npm run dev
   ```
5. Buka `http://localhost:8080` di browser

## Implementasi
Pada tugas ini, penulis mengembangkan tiga buah articulated model sesuai dengan jumlah anggota kelompok dengan setiap anggota menyumbangkan satu articulated model yang berbeda. Berikut fitur utama yang diimplementasikan pada tugas besar ini:
Implementasi tiga buah articulated 3d model, yakni:
Model Rahmat : ,
Model Roby : Model Minecraft,
Model Malik : Model Car.
	
Implementasi penyimpanan dan pembacaan (save and load) definisi model. 
Fitur ini dapat dilakukan dengan cara menekan tombol save untuk menyimpan data model dan menekan tombol load untuk memilih file model yang akan digunakan. Kedua tombol berada di kanan atas tampilan program.

Implementasi general view controls : 
Mengubah jenis proyeksi untuk menampilkan articulated model (orthographic, oblique atau perspective)
Melakukan rotasi, translasi dan scaling dari articulated model.
Mengubah jarak (radius) kamera view untuk mendekat atau menjauh dari model serta menggerakkan kamera untuk mengitari model-model.
Me-reset ke default view controls.
Enable dan disable shading.
Ubah tekstur permukaan model: bump, reflective, environment, dan none.
Penggunaan implementasi ini tersebar di sidebar kanan dan kiri tampilan aplikasi, dengan masing-masing tombol merepresentasikan fungsionalitas yang sesuai.

Implementasi fitur animasi model yang disimpan pada file yang sama dengan model. Animasi ini berisi kumpulan frame-frame yang merepresentasikan state transformasi dari masing-masing komponen yang ada pada model. Fitur ini juga sekaligus mengimplementasikan fitur lanjutan Animation Controller dan Save-Load animation. Animation Controller yang tersedia adalah tombol play, pause, reverse, prev, next, set duration, dan stop. Fungsionalitas replay di-cover oleh button play yang memutar animasi melanjutkan animasi sebelum di-pause. Save Load animation digunakan dengan cara memakai tombol set animation dan save animation.

Implementasi component controls dengan menggunakan component tree sehingga general view controls akan melakukan control pada component yang dipilih. Implementasi ini sekaligus mengimplementasikan fitur lanjutan component tree dan component view control (single) serta component view controls (subtree). Fitur ini membuat Component Controls menjadi lebih efektif dan realistis dengan membuat tampilan UI hanya menampilkan kontrol komponen yang dipilih saja. Oleh karena itu, kami menampilkan struktur pohon dari komponen yang dapat diklik untuk menandakan sekarang user sedang mengontrol komponen tersebut. Hal ini juga menyebabkan jumlah slider dari component controllers tidak bertambah atau berkurang. Selain itu, fitur ini mengimplementasikan fitur lanjutan Component View Controls (Subtree) yang dapat mengubah transformasi akan memberikan efek pada seluruh komponen keturunannya, dengan cara menghidupkan toggle edit subtree.

[Lanjutan] Implementasi component tree sesuai yang dijelaskan pada poin 5.
[Lanjutan] Implementasi component view control untuk komponen yang terpilih sesuai pada poin 5.
[Lanjutan] Implementasi Component View Controls (Subtree) sesuai yang dijelaskan pada poin 5.
[Lanjutan] Implementasi save and load untuk animation sesuai yang dijelaskan pada poin 4.
[Lanjutan] Implementasi fitur animasi yang dapat melakukan play, pause, stop, previous frame, dan next frame sesuai yang dijelaskan pada poin 4.
[Lanjutan] Implementasi fitur Frame Controller yang mengimplementasikan save frame untuk menyimpan kondisi model sekarang menjadi frame, delete frame untuk menghapus frame sekarang, prev dan next untuk berganti-ganti frame yang ada, swap with next frame untuk menukar urutan frame sekarang dengan frame selanjutnya, dan insert as next frame untuk menambahkan frame pada animasi.

[Lanjutan] Implementasi fitur Adaptive frames, yang mengimplementasikan error handling, atau setidaknya sebuah algoritma sehingga masih dapat mengaplikasikan animasi yang sebetulnya ditujukan pada model lain. Implementasi error handling dengan cara mencegah pengaksesan transform dari komponen frame jika jumlahnya sudah tidak cukup

## Contoh Fungsional Tiap Fitur : 

Save and Load
Klik tombol save di kanan atas untuk menyimpan model
Klik tombol load untuk memilih file model yang akan di-load

Component Tree
Klik komponen yang ingin diubah pada bagian di kiri atas
Lakukan perubahan sesuai dengan yang Anda inginkan

Projection
Klik tombol “Orthographic”, “Oblique”, atau “Perspective” untuk mengganti proyeksi dari program
Default proyeksi yang digunakan akan “Orthographic”

Shading
Klik input checkbox shading di sidebar kiri bagian tengah untuk menghidupmatikan shading program

Camera
Slide nilai pada camera angle untuk mengganti sudut camera
Klik button zoom in dan zoom out untuk mengubah radius camera

Animation
Animation




Frame controller
Frame dapat dimanipulasi pada bagian frame controller

Reset

Tombol ini digunakan untuk mereset model yang ditampilkan saat ini sesuai dengan model awal (default).
Transformation
Translasi

Pada baris pertama adalah tombol untuk men-translasi model objek ke kanan/kiri.
Pada baris kedua adalah tombol untuk men-translasi model objek ke atas/bawah.
Pada baris ketiga adalah tombol untuk men-translasi model objek ke depan/belakang.
Rotasi

Pada baris pertama adalah tombol untuk merotasi model objek ke kanan/kiri. (X-axis)
Pada baris kedua adalah tombol untuk merotasi model objek ke atas/bawah. (Y-axis)
Pada baris ketiga adalah tombol untuk merotasi model objek ke depan/belakang. (Z-axis)
Scale


Pada baris pertama adalah tombol untuk melakukan scale model objek ke sumbu x.
Pada baris kedua adalah tombol untuk melakukan scale model objek ke sumbu y.
Pada baris ketiga adalah tombol untuk melakukan scale model objek ke sumbu z.
Lalu pada gambar kedua dapat melakukan scale secara langsung pada ketiga sumbu dengan skala angka atau dengan tombol shrink dan enlarge.

