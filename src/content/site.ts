// Semua konten landing page ada di sini.
// Ganti nilai placeholder (ditandai "PLACEHOLDER") dengan data asli tanpa perlu mengubah komponen.

export const site = {
  name: "Fashihul Fushoha",
  url: "https://fashihul-fushoha.vercel.app", // ganti saat domain sudah ada
  nameArabic: "فصيح الفصحاء",
  tagline: "Dari dasar hingga lancar",
  copyrightYear: 2026,
  description:
    "Komunitas Belajar Bahasa Arab dari dasar hingga lancar. Belajar online, kapan saja dan dari mana saja.",

  whatsappGroupUrl: "https://chat.whatsapp.com/BDFbYkBos804aG55HfmAb5",

  // Nomor admin, format internasional tanpa "+"
  adminWhatsapp: "6285624617781",
  email: "admin@example.com", // PLACEHOLDER

  socials: [
    { label: "Instagram", href: "#" }, // PLACEHOLDER
    { label: "YouTube", href: "#" }, // PLACEHOLDER
    { label: "TikTok", href: "#" }, // PLACEHOLDER
    { label: "Telegram", href: "#" }, // PLACEHOLDER
  ],
};

export const nav = [
  { label: "Tentang", href: "#tentang" },
  { label: "Program", href: "#program" },
  { label: "Jadwal", href: "#jadwal" },
  { label: "Metode", href: "#metode" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "FAQ", href: "#faq" },
];

export const stats = [
  { value: "16", label: "Anggota" },
  { value: "6", label: "Program aktif" },
  { value: "100%", label: "Online" },
];

export const benefits = [
  {
    title: "Mulai dari nol",
    body: "Tidak perlu bisa bahasa Arab sebelumnya. Materi disusun bertahap dari huruf hingga percakapan.",
  },
  {
    title: "Belajar online",
    body: "Ikuti kelas dari rumah lewat HP atau laptop. Rekaman dan materi bisa diulang kapan saja.",
  },
  {
    title: "Pengajar berpengalaman",
    body: "Dibimbing oleh asatidz yang berpengalaman mengajar bahasa Arab untuk pemula.",
  },
  {
    title: "Komunitas yang suportif",
    body: "Belajar bersama teman seperjuangan, saling menyemangati dan bertanya di grup.",
  },
  {
    title: "Praktik langsung",
    body: "Bukan hanya teori. Ada latihan membaca, menulis, menyimak, dan berbicara.",
  },
  {
    title: "Jenjang yang jelas",
    body: "Program berjenjang dari dasar, menengah, hingga lanjutan sesuai kemampuanmu.",
  },
];

export const days = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Ahad"] as const;
export type Day = (typeof days)[number];

export type Program = {
  name: string;
  level: "Dasar" | "Menengah" | "Lanjutan";
  description: string;
  days: Day[];
  time: string; // "HH.MM–HH.MM WIB" atau "ba'da Shubuh"
  teacher?: string;
  price: string;
};

export const programs: Program[] = [
  {
    name: "Durusul Lughoh Jilid 1",
    level: "Dasar",
    description: "Belajar bahasa Arab dari dasar dengan kitab Durusul Lughoh Jilid 1.",
    days: ["Sabtu"],
    time: "ba'da Shubuh",
    teacher: "Akh Dhafa",
    price: "Gratis / Berbayar", // PLACEHOLDER
  },
  {
    name: "Arobiyyah Baina Yadaik Jilid 1",
    level: "Dasar",
    description: "Belajar bahasa Arab dari dasar dengan kitab Arobiyyah Baina Yadaik Jilid 1.",
    days: ["Ahad"],
    time: "ba'da Shubuh",
    teacher: "Akh Naufal",
    price: "Gratis / Berbayar", // PLACEHOLDER
  },
  {
    name: "Nahwu: Tuhfatus Saniyyah",
    level: "Menengah",
    description:
      "Kajian ilmu nahwu membahas kitab Tuhfatus Saniyyah, syarah dari Matan Muqoddimah Jurumiyyah.",
    days: ["Sabtu"],
    time: "06.00–07.00 WIB",
    price: "Gratis / Berbayar", // PLACEHOLDER
  },
  {
    name: "Baca Kitab: Tafsir As-Sa'di",
    level: "Menengah",
    description: "Program baca kitab membahas Tafsir As-Sa'di.",
    days: ["Ahad"],
    time: "07.00–08.00 WIB",
    price: "Gratis / Berbayar", // PLACEHOLDER
  },
  {
    name: "Percakapan: Durusul Lughoh Jilid 2",
    level: "Menengah",
    description: "Bahasa Arab percakapan membahas kitab Durusul Lughoh Jilid 2.",
    days: ["Selasa", "Kamis"],
    time: "06.00–07.00 WIB",
    price: "Gratis / Berbayar", // PLACEHOLDER
  },
  {
    name: "Percakapan: Arobiyyah Baina Yadaik Jilid 2",
    level: "Menengah",
    description: "Bahasa Arab percakapan membahas kitab Arobiyyah Baina Yadaik Jilid 2.",
    days: ["Senin"],
    time: "16.00–16.30 WIB",
    price: "Gratis / Berbayar", // PLACEHOLDER
  },
];

export const steps = [
  { title: "Gabung grup WhatsApp", body: "Klik tombol gabung dan masuk ke grup komunitas." },
  { title: "Pilih program", body: "Pilih kelas sesuai level dan jadwal yang cocok untukmu." },
  { title: "Belajar bertahap", body: "Ikuti kelas online, kerjakan latihan, dan tanya jawab bersama pengajar." },
  { title: "Lancar berbahasa Arab", body: "Naik jenjang hingga mampu membaca, memahami, dan berbicara." },
];

// PLACEHOLDER: testimoni menyusul
export const testimonials = [
  { name: "Nama Peserta", role: "Kota, Peserta Program 1", quote: "Testimoni peserta akan ditampilkan di sini." },
  { name: "Nama Peserta", role: "Kota, Peserta Program 2", quote: "Testimoni peserta akan ditampilkan di sini." },
  { name: "Nama Peserta", role: "Kota, Peserta Program 3", quote: "Testimoni peserta akan ditampilkan di sini." },
];

export const faqs = [
  {
    q: "Apakah saya harus bisa bahasa Arab terlebih dahulu?",
    a: "Tidak. Fashihul Fushoha dirancang untuk belajar dari dasar, bahkan dari pengenalan huruf.",
  },
  {
    q: "Bagaimana cara bergabung?",
    a: "Klik tombol \"Gabung Grup WhatsApp\" di halaman ini. Info program dan pendaftaran kelas dibagikan di grup.",
  },
  {
    q: "Apakah kelasnya online?",
    a: "Ya, seluruh kegiatan belajar dilakukan secara online.",
  },
  {
    q: "Apakah ada biaya?",
    a: "Informasi biaya tiap program akan diumumkan. (PLACEHOLDER)",
  },
  {
    q: "Apakah ada sertifikat?",
    a: "Informasi sertifikat akan diumumkan. (PLACEHOLDER)",
  },
];
