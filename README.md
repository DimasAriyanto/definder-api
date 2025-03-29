# Definder API

Definder adalah aplikasi yang merekomendasikan tempat wisata berdasarkan analisis MBTI.

## Fitur Utama
- Rekomendasi tempat wisata berbasis hasil analisis MBTI
- Manajemen data destinasi wisata
- Integrasi dengan layanan analisis MBTI

## Teknologi yang Digunakan
- **Node.js** + **Express**
- **PostgreSQL** + **Sequelize**
- **JWT** (JSON Web Token) untuk autentikasi
- **Docker** untuk containerization
- **Google Cloud Platform** (GCP) untuk deployment
- Koneksi ke layanan analisis MBTI

## Instalasi
1. Instal dependensi
```bash
npm install
```

2. Jalankan server
```bash
npm start
```

## Migrasi Database dengan Sequelize dan PostgreSQL
1. Buat file konfigurasi Sequelize jika belum ada.
```bash
npx sequelize-cli init
```

2. Buat model dan migrasi untuk tabel yang dibutuhkan.
```bash
npx sequelize-cli model:generate --name Place --attributes name:string,description:text,location:string
```

3. Jalankan migrasi untuk membuat tabel di database PostgreSQL.
```bash
npx sequelize-cli db:migrate
```

4. Jika perlu membatalkan migrasi:
```bash
npx sequelize-cli db:migrate:undo
```