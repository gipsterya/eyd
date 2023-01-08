const routes = [
  {
    title: 'Beranda',
    path: '/',
  },
  {
    title: 'Penggunaan Huruf',
    path: '/penggunaan-huruf',
    tree: [
      {
        title: 'Huruf Abjad',
        path: '/huruf-abjad',
      },
      {
        title: 'Huruf Vokal',
        path: '/huruf-vokal',
      },
      {
        title: 'Huruf Konsonan',
        path: '/huruf-konsonan',
      },
      {
        title: 'Gabungan Huruf Vokal',
        path: '/gabungan-huruf-vokal',
      },
      {
        title: 'Gabungan Huruf Konsonan',
        path: '/gabungan-huruf-konsonan',
      },
      {
        title: 'Huruf Kapital',
        path: '/huruf-kapital',
      },
      {
        title: 'Huruf Miring',
        path: '/huruf-miring',
      },
      {
        title: 'Huruf Tebal',
        path: '/huruf-tebal',
      },
    ],
  },
  {
    title: 'Penulisan Kata',
    path: '/penulisan-kata',
    tree: [
      {
        title: 'Kata Dasar',
        path: '/kata-dasar',
      },
      {
        title: 'Kata Turunan',
        path: '/kata-turunan',
      },
      {
        title: 'Pemenggalan Kata',
        path: '/pemenggalan-kata',
      },
      {
        title: 'Kata Depan',
        path: '/kata-depan',
      },
      {
        title: 'Partikel',
        path: '/partikel',
      },
      {
        title: 'Singkatan',
        path: '/singkatan',
      },
      {
        title: 'Angka dan Bilangan',
        path: '/angka-dan-bilangan',
      },
      {
        title: 'Kata Ganti',
        path: '/kata-ganti',
      },
      {
        title: 'Kata Sandang',
        path: '/kata-sandang',
      },
    ],
  },
  {
    title: 'Penggunaan Tanda Baca',
    path: '/penggunaan-tanda-baca',
    tree: [
      {
        title: 'Tanda Titik (.)',
        path: '/tanda-titik',
      },
      {
        title: 'Tanda Koma (,)',
        path: '/tanda-koma',
      },
      {
        title: 'Tanda Titik Koma (;)',
        path: '/tanda-titik-koma',
      },
      {
        title: 'Tanda Titik Dua (:)',
        path: '/tanda-titik-dua',
      },
      {
        title: 'Tanda Hubung (-)',
        path: '/tanda-hubung',
      },
      {
        title: 'Tanda Pisah (—)',
        path: '/tanda-pisah',
      },
      {
        title: 'Tanda Tanya (?)',
        path: '/tanda-tanya',
      },
      {
        title: 'Tanda Seru (!)',
        path: '/tanda-seru',
      },
      {
        title: 'Tanda Elipsis (...)',
        path: '/tanda-elipsis',
      },
      {
        title: 'Tanda Petik ("...")',
        path: '/tanda-petik',
      },
      {
        title: "Tanda Petik Tunggal ('...')",
        path: '/tanda-petik-tunggal',
      },
      {
        title: 'Tanda Kurung ((...))',
        path: '/tanda-kurung',
      },
      {
        title: 'Tanda Kurung Siku ([...])',
        path: '/tanda-kurung-siku',
      },
      {
        title: 'Tanda Garis Miring (/)',
        path: '/tanda-garis-miring',
      },
      {
        title: "Tanda Apostrof (')",
        path: '/tanda-apostrof',
      },
    ],
  },
  {
    title: 'Penulisan Unsur Serapan',
    path: '/penulisan-unsur-serapan',
    tree: [
      {
        title: 'Serapan Umum',
        path: '/serapan-umum',
      },
      {
        title: 'Serapan Khusus',
        path: '/serapan-khusus',
      },
    ],
  },
]

export default routes
