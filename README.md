# Diary App (Buku Harian)

- **Nama:** Rafi Akmal Permana
- **NIM:** 2430511065

Aplikasi buku harian sederhana dengan Expo / React Native.

## Menjalankan proyek

1. Pastikan Node.js sudah terpasang.
2. Install dependency: `npm install`
3. Jalankan: `npx expo start`
4. Scan QR dengan **Expo Go**, atau tekan `a` untuk emulator Android (`i` untuk iOS simulator).

## Fitur yang diselesaikan

- Daftar diary berisi 5 entri (`src/data/diaryEntries.js`).
- Satu gambar remote diganti gambar lokal `assets/moods/happy.png`.
- Avatar pengguna di header memakai `Image` (`src/components/DiaryHeader.js`).
- Variasi border dan warna kartu berdasarkan mood: happy, focus, calm, sad, excited (`src/theme/moodStyles.js`).
- Struktur folder rapi: `components/`, `screens/`, `data/`, `theme/`, `assets/`.

## Screenshot

![Aplikasi berjalan](screenshots/ss.jpg)

> Screenshot diambil dari expo go