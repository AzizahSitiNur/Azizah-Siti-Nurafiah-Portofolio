import HeroImage from "/assets/Pas_Foto.png";
import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/Blender.webp";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/laravel.webp";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/Unity-logo.webp";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/aseprite.webp";

import CertificateCloud from "/assets/certificate/Sertifikat_CloudComputing.webp";
import CertificateWebDev from "/assets/certificate/Sertifikat_WebDev.webp";

const Image = {
  HeroImage,
};

export default Image;

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Blender",
    ket: "3D Modeling",
    dad: "300",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Laravel",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Unity",
    ket: "Game Engine",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Aseprite",
    ket: "Design Pixel 2D",
    dad: "1200",
  },
];

import Proyek1Screen1 from "/assets/proyek/Screenshot 2026-01-11 160130.webp";
import Proyek2Screen1 from "/assets/proyek/Screenshot (336).png";
import Proyek3Screen1 from "/assets/proyek/login.png";
import Proyek4Screen1 from "/assets/proyek/Screenshot (479).png";
import Proyek7 from "/assets/proyek/Screenshot 2026-01-11 152643.webp";
import Proyek8 from "/assets/proyek/Screenshot 2026-01-11 160209.webp";
import Proyek9 from "/assets/proyek/Screenshot 2026-01-11 163228.webp";
import Proyek10 from "/assets/proyek/Screenshot 2026-01-11 163252.webp";
import Proyek11 from "/assets/proyek/Screenshot (337).png";
import Proyek12 from "/assets/proyek/Screenshot (338).png";
import Proyek13 from "/assets/proyek/Screenshot (339).png";
import Proyek14 from "/assets/proyek/Screenshot (340).png";
import Proyek15 from "/assets/proyek/Screenshot (341).png";
import Proyek16 from "/assets/proyek/buat_peminjaman.png";
import Proyek17 from "/assets/proyek/daftar_peminjaman.png";
import Proyek18 from "/assets/proyek/daftar_ruangan.png";
import Proyek19 from "/assets/proyek/dashboard_admin.png";
import Proyek20 from "/assets/proyek/dashboard_user.png";
import Proyek21 from "/assets/proyek/kalender_user.png";
import Proyek22 from "/assets/proyek/laporan_peminjaman.png";
import Proyek23 from "/assets/proyek/Screenshot (480).png";
import Proyek24 from "/assets/proyek/Screenshot (481).png";
import Proyek25 from "/assets/proyek/Screenshot (482).png";


export const listProyek = [
  {
    id: 1,
    gambar: Proyek1Screen1,
    nama: "Pemesanan Tiket Bioskop",
    desk: "Website untuk memudahkan pengguna dalam melihat informasi film, jadwal tayang, serta melakukan pemesanan tiket secara online.",
    detail: "Website pemesanan tiket bioskop ini memungkinkan pengguna untuk melihat daftar film yang sedang tayang, memilih jadwal, dan memesan tiket secara online dengan mudah. Fitur-fitur utama meliputi pencarian film, dan pemilihan kursi. Dibangun menggunakan Laravel 10 sebagai framework backend utama, website ini dilengkapi dengan fitur autentikasi pengguna (login dan registrasi), sehingga pengguna dapat melakukan pemesanan secara aman dan terstruktur.",
    tools: ["HTML", "CSS", "Laravel", "PHP", "Xampp", "MySQL"],
    gallery: [Proyek1Screen1, Proyek7, Proyek8, Proyek9, Proyek10],
    tahun:"2024",
    sourceCode:"https://github.com/AzizahSitiNur/PROYEK_UAS_BookingTiketFilm_TNation",
    kategori: "website",
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2Screen1,
    nama: "Website Pendaftaran Program Vinix7",
    desk: "Landing page dan prototype tampilan website untuk program magang VINIX7.",
    detail:"Halaman utama VINIX7 menyajikan informasi program dan promo magang, pilihan divisi magang yang tersedia, penjelasan singkat tentang VINIX7 melalui section About Us serta Visi & Misi, daftar mitra kerja sama, hingga testimoni alumni sebagai bentuk social proof. Di bagian akhir, pengguna juga dapat menemukan informasi kontak lengkap beserta tautan ke media sosial resmi VINIX7 untuk memudahkan komunikasi lebih lanjut. Struktur saat ini masih berupa static website (HTML, CSS, dan JavaScript) tanpa backend, sehingga difokuskan sebagai fondasi tampilan (UI/UX) yang nantinya dapat dikembangkan menjadi sistem pendaftaran online yang terintegrasi dengan database dan fitur autentikasi.",
    tools: ["HTML", "CSS", "Javascript", "NodeJS"],
    gallery: [Proyek2Screen1, Proyek11, Proyek12, Proyek13, Proyek14, Proyek15],
    tahun:"2025",
    sourceCode:"https://github.com/aryoyonatann/Vinix7-Kelompol.13-Starterpack-Web-Dev-UI-UX",
    kategori: "website",
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3Screen1,
    nama: "Web Peminjaman Ruangan di Kampus (Siruntir)",
    desk: "Website untuk mempermudah proses peminjaman ruangan di lingkungan Universitas Sultan Ageng Tirtayasa (UNTIRTA)",
    detail:"Website Siruntir dirancang untuk memudahkan mahasiswa dan staf UNTIRTA dalam meminjam ruangan secara online. Pengguna dapat melihat ketersediaan ruangan, melakukan peminjaman, serta mengelola jadwal peminjaman dengan antarmuka yang user-friendly. Sistem ini juga menyediakan dashboard khusus untuk admin guna memantau dan menyetujui permohonan peminjaman. Dibangun menggunakan Laravel 10, website ini mengintegrasikan fitur autentikasi pengguna untuk keamanan dan manajemen data yang efisien.",
    tahun:"2024",
    sourceCode:"https://github.com/AzizahSitiNur/PinjamRuang_Siruntir",
    tools: ["HTML", "CSS", "Laravel", "PHP", "Xampp", "MySQL"],
    gallery: [Proyek3Screen1, Proyek20, Proyek16, Proyek21, Proyek19, Proyek17, Proyek18, Proyek22],
    kategori: "website",
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4Screen1,
    nama: "Path of Relics",
    desk: "Sebuah game petualangan 2D side-scrolling platformer yang menggabungkan mengumpulkan item dan pertarungan dalam dunia fantasi.",
    detail:"Path of Relics adalah game petualangan 2D side-scrolling platformer yang mengajak pemain menjelajahi dunia fantasi penuh tantangan. Pemain mengendalikan karakter utama untuk mengumpulkan artefak kuno sambil menghadapi berbagai musuh dan rintangan. Game ini menampilkan grafis pixel art yang menarik dan mekanika permainan yang seru, termasuk lompatan presisi, serangan musuh, dan pengumpulan item sederhana. Dibangun menggunakan Unity, Path of Relics menawarkan pengalaman bermain yang menyenangkan dengan kontrol yang responsif dan desain level yang kreatif.",
    tools: ["Unity", "C#", "Aseprite", "Canva"],
    tahun:"2025",
    sourceCode:"",
    gallery: [Proyek4Screen1, Proyek23, Proyek24, Proyek25],
    kategori: "games",
    dad: "500",
  },
];

export const listCertificates = [
  {
    id: 1,
    gambar: CertificateCloud,
    nama: "Cloud Computing",
    penyelenggara: "Digital Talent Scholarship / Kominfo",
    tahun: "2024",
    desk:
      "Sertifikat kompetensi cloud computing, mencakup konsep dasar cloud, deployment aplikasi, dan pengelolaan layanan cloud.",
  },
  {
    id: 2,
    gambar: CertificateWebDev,
    nama: "Web Development",
    penyelenggara: "Vinix7",
    tahun: "2025",
    desk:
      "Sertifikat web development dan UI/UX yang berfokus pada HTML, CSS, dan JavaScript untuk membangun website responsif.",
  },
];

