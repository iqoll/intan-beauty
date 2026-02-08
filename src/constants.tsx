
import type { Service, FAQItem } from './types';

export const WHATSAPP_NUMBER = '082219282839';
export const WHATSAPP_LINK = `https://wa.me/6282219282839?text=Halo%20IntanBeauty,%20saya%20ingin%20booking%20perawatan...`;
export const INSTAGRAM_LINK = 'https://instagram.com/intanbeauty26';

export const SERVICES: Service[] = [
  {
    id: 'head-spa',
    category: 'hair',
    name: 'Japanese Head Spa',
    price: 'Rp 199.000',
    image: 'https://i.pinimg.com/736x/3f/e8/79/3fe879b47e3f6d95e33a6e1ec6fae2c3.jpg?auto=format&fit=crop&q=80&w=800',
    description: 'Penggabungan teknik deep cleansing dan exfoliating untuk membersihkan dan menutrisi kulit kepala.',
    steps: [
      { name: 'Basic pedicure', description: 'Membersihkan kaki dan menjaga kesehatan kaki' },
      { name: 'Scalp analisis', description: 'Analisa keadaan kondisi kulit dan batang rambut' },
      { name: 'Pre shampo', description: 'Pemberian oil pada rambut untuk menetralisir kulit kepala' },
      { name: 'Facial wash', description: 'Membersihkan muka, totok facial, dan sheetmask' },
      { name: 'Scalp detox', description: 'Mengangkat sel kulit mati dan sisa residu' },
      { name: 'Shampo 1', description: 'Sesuai dengan kondisi kulit dan batang rambut' },
      { name: 'Shampo 2', description: 'Pembersihan mendalam tahap kedua' },
      { name: 'Hair mask', description: 'Menutrisi dan memperbaiki kerusakan rambut' },
      { name: 'Hypnoteraphy water', description: 'Keunggulan water healing untuk relaksasi total' },
      { name: 'Massage', description: 'Pijat kepala, dada, leher, tangan dan kaki' },
      { name: 'Serum', description: 'Nutrisi kulit kepala setelah perawatan' },
      { name: 'Hair Styling', description: 'Pengeringan dan penataan rambut rapi' }
    ],
    benefits: [
      'Melembapkan rambut & membersihkan kulit kepala',
      'Mengurangi ketombe',
      'Menumbuhkan rambut rontok',
      'Mengatur produksi sebum',
      'Mengatasi penyumbatan kulit kepala',
      'Meningkatkan sirkulasi darah',
      'Efek relaksasi mendalam'
    ]
  },
  {
    id: 'creambath',
    category: 'hair',
    name: 'Creambath',
    price: 'Rp 50.000',
    image: 'https://images.pexels.com/photos/8834074/pexels-photo-8834074.jpeg?auto=format&fit=crop&q=80&w=800',
    steps: [
      { name: 'Shampoo 2x', description: 'Pembersihan rambut' },
      { name: 'Cream creambath', description: 'Aplikasi cream nutrisi' },
      { name: 'Pijatan area kepala', description: 'Relaksasi saraf kepala' },
      { name: 'Pijat tubuh', description: 'Area leher, punggung, tangan' },
      { name: 'Alat uap rambut', description: 'Penyerapan nutrisi maksimal' },
      { name: 'Pembilasan', description: 'Pembersihan sisa cream' },
      { name: 'Tonic rambut', description: 'Kesegaran akar rambut' },
      { name: 'Vitamin rambut', description: 'Kilau alami rambut' },
      { name: 'Hair Dryer', description: 'Pengeringan standar' }
    ],
    benefits: [
      'Mengurangi stress',
      'Mengatasi rambut kering',
      'Rambut lebih halus',
      'Menguatkan helaian rambut',
      'Merelaksasi otot leher',
      'Meningkatkan kualitas tidur'
    ]
  },
  {
    id: 'facial-glow-whitening',
    category: 'facial',
    name: 'Facial Glow Whitening',
    price: 'Rp 125.000',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800',
    description: 'Layanan perawatan wajah esensial yang dirancang khusus untuk mengangkat sel kulit mati dan mengembalikan kecerahan alami kulit.',
    steps: [
      { name: 'DOUBLE CLEANSING', description: 'Pembersihan tahap awal' },
      { name: 'SCRUB', description: 'Eksfoliasi kulit wajah' },
      { name: 'VAPOZONE', description: 'Uap untuk membuka pori-pori' },
      { name: 'PENGAMBILAN KOMEDO', description: 'Ekstraksi kotoran pori-pori' },
      { name: 'HIGHFREQUENCY', description: 'Sterilisasi wajah' },
      { name: 'MASSAGE', description: 'Relaksasi otot wajah' },
      { name: 'Totok Wajah', description: 'Stimulasi titik saraf wajah' },
      { name: 'MASSAGE KEPALA', description: 'Pijatan kepala rileks' },
      { name: 'MASKER WAJAH', description: 'Nutrisi kulit intensif' },
      { name: 'SERUM', description: 'Aplikasi konsentrat aktif' },
      { name: 'SETRIKA WAJAH', description: 'Teknologi pengencangan kulit' },
      { name: 'COOLING', description: 'Menenangkan kulit wajah' },
      { name: 'SUNSCREEN', description: 'Proteksi sinar matahari' }
    ],
    benefits: [
      'Mencerahkan kulit kusam secara instan',
      'Mengangkat komedo dan sel kulit mati secara menyeluruh',
      'Meningkatkan elastisitas kulit dengan teknik Setrika Wajah',
      'Melancarkan sirkulasi darah melalui Totok Wajah dan Massage',
      'Memberikan efek wajah lebih kenyal dan tampak awet muda',
      'Menutrisi kulit dengan penyerapan serum yang maksimal'
    ]
  },
  {
    id: 'facial-glow-pdt',
    category: 'facial',
    name: 'Facial Glow Sinar PDT',
    price: 'Rp 175.000',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?auto=format&fit=crop&q=80&w=800',
    description: 'Level lanjutan dari perawatan wajah yang menggabungkan teknologi medis modern dengan terapi relaksasi.',
    steps: [
      { name: 'DOUBLE CLEANSING', description: 'Pembersihan mendalam' },
      { name: 'SCRUB', description: 'Pengangkatan sel kulit mati' },
      { name: 'VAPOZONE', description: 'Pembukaan pori-pori' },
      { name: 'PENGAMBILAN KOMEDO', description: 'Pembersihan komedo' },
      { name: 'HIGHFREQUENCY', description: 'Sterilisasi kulit' },
      { name: 'MASSAGE', description: 'Pijatan otot wajah' },
      { name: 'Totok Wajah', description: 'Titik akupresur wajah' },
      { name: 'MASSAGE KEPALA', description: 'Pijatan relaksasi kepala' },
      { name: 'MASKER WAJAH', description: 'Aplikasi masker nutrisi' },
      { name: 'GLOBE ROLLER', description: 'Terapi dingin penenang kulit' },
      { name: 'SINAR PDT', description: 'Photo Dynamic Therapy' },
      { name: 'SERUM', description: 'Nutrisi wajah aktif' },
      { name: 'SETRIKA WAJAH', description: 'Optimalisasi penyerapan' },
      { name: 'COOLING', description: 'Menenangkan wajah' },
      { name: 'SUNSCREEN', description: 'Pelindung sinar UV' }
    ],
    benefits: [
      'Mempercepat regenerasi sel kulit dengan teknologi Sinar PDT',
      'Menenangkan kulit kemerahan dan iritasi dengan Globe Roller',
      'Mencegah serta meredakan peradangan jerawat',
      'Meningkatkan produksi kolagen secara alami',
      'Mengecilkan pori-pori dan menghaluskan tekstur wajah',
      'Memberikan efek relaksasi mendalam pada otot wajah dan kepala'
    ]
  },
  {
    id: 'facial-organic',
    category: 'facial',
    name: 'Facial Organic Treatment',
    price: 'Rp 50.000',
    image: 'https://images.pexels.com/photos/20683630/pexels-photo-20683630.jpeg?auto=format&fit=crop&q=80&w=800',
    description: 'Perawatan wajah alami menggunakan bahan organik untuk kulit sehat bercahaya.',
    steps: [
      { name: 'Cleansing', description: 'Pembersihan awal wajah' },
      { name: 'Scrub', description: 'Pengangkatan sel kulit mati' },
      { name: 'Vapozone', description: 'Uap wajah untuk membuka pori-pori' },
      { name: 'Ekstraksi Komedo', description: 'Pengambilan komedo secara steril' },
      { name: 'High Frequency', description: 'Anti-bakteri setelah ekstraksi' },
      { name: 'Masker', description: 'Pemberian nutrisi kulit' },
      { name: 'Sunscreen', description: 'Perlindungan UV di akhir' }
    ],
    benefits: [
      'Membersihkan pori-pori',
      'Melembapkan kulit secara mendalam',
      'Mengangkat sel kulit mati',
      'Membantu mengatasi jerawat',
      'Membuat kulit kenyal & lembut'
    ]
  },
  {
    id: 'ipl-facial-glow',
    category: 'laser-ipl',
    name: 'FACIAL + IPL GLOW',
    price: 'Rp 330.000',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800',
    description: 'Solusi untuk flek bekas jerawat dan kulit kusam dengan teknologi Intense Pulsed Light.',
    benefits: [
      "Menyamarkan noda hitam dan bekas jerawat",
      "Mencerahkan kulit kusam secara instan",
      "Meratakan warna kulit wajah"
    ]
  },
  {
    id: 'ipl-ketiak',
    category: 'laser-ipl',
    name: 'IPL HAIR REMOVAL KETIAK',
    price: 'Rp 200.000',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfac4023c6?auto=format&fit=crop&q=80&w=800',
    description: 'Menghambat pertumbuhan bulu and mencerahkan area ketiak secara efektif.',
    benefits: [
      "Menghambat pertumbuhan bulu ketiak",
      "Mencerahkan area lipatan ketiak",
      "Menghaluskan tekstur kulit ketiak"
    ]
  },
  {
    id: 'ipl-kaki',
    category: 'laser-ipl',
    name: 'IPL HAIR REMOVAL KAKI',
    price: 'Rp 300.000',
    image: 'https://images.unsplash.com/photo-1505944270255-bd2b68af6422?auto=format&fit=crop&q=80&w=800',
    description: 'Menghambat pertumbuhan bulu halus pada kaki untuk hasil kulit mulus.',
    benefits: [
      "Mengurangi pertumbuhan bulu kaki secara signifikan",
      "Menghaluskan permukaan kulit kaki",
      "Mencegah risiko 'strawberry legs' atau bintik hitam"
    ]
  },
  {
    id: 'ipl-kumis',
    category: 'laser-ipl',
    name: 'IPL HAIR REMOVAL KUMIS',
    price: 'Rp 150.000',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800',
    description: 'Penghilangan bulu halus area kumis untuk wajah lebih bersih.',
    benefits: [
      "Menghilangkan bulu halus di area bibir atas",
      "Memberikan tampilan wajah yang lebih bersih",
      "Mengecilkan pori-pori di area sekitar mulut"
    ]
  },
  {
    id: 'ipl-tangan',
    category: 'laser-ipl',
    name: 'IPL HAIR REMOVAL TANGAN',
    price: 'Rp 300.000',
    image: 'https://images.unsplash.com/photo-1610812383740-41a02796e952?auto=format&fit=crop&q=80&w=800',
    description: 'Menghambat pertumbuhan bulu pada tangan and mencerahkan tekstur kulit.',
    benefits: [
      "Menghambat pertumbuhan bulu pada lengan",
      "Mencerahkan kulit area tangan",
      "Melembutkan tekstur kulit tangan"
    ]
  },
  {
    id: 'ipl-punggung',
    category: 'laser-ipl',
    name: 'IPL JERAWAT PUNGGUNG',
    price: 'Rp 350.000',
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=800',
    description: 'Membunuh bakteri jerawat and mengeringkan jerawat punggung secara cepat.',
    benefits: [
      "Membunuh bakteri penyebab jerawat punggung",
      "Mempercepat proses pengeringan jerawat aktif",
      "Mencegah munculnya bekas jerawat baru"
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Apakah harus booking terlebih dahulu?',
    answer: 'Kami sangat menyarankan Anda untuk melakukan booking melalui WhatsApp minimal 1 hari sebelumnya agar Anda mendapatkan slot waktu yang diinginkan, terutama untuk Japanese Head Spa.'
  },
  {
    question: 'Berapa lama durasi Japanese Head Spa?',
    answer: 'Durasi total perawatan Japanese Head Spa kurang lebih 60-90 menit, meliputi 12 tahapan lengkap mulai dari pedicure hingga styling.'
  },
  {
    question: 'Dimana lokasi tepatnya IntanBeauty?',
    answer: 'Kami berlokasi di Jln. Raya Timur No. 472 Cipakat Singaparna. Sekitar 300 meter setelah Pom Bensin Badak Paeh, tepat di belokan sebelah kanan jika dari arah Tasik.'
  },
  {
    question: 'Apakah layanan facial aman untuk kulit sensitif?',
    answer: 'Ya, Facial Organic kami menggunakan bahan-bahan alami yang lembut di kulit. Namun, terapis kami akan melakukan analisa kulit terlebih dahulu sebelum memulai treatment.'
  }
];

// --- Transformation Data ---
export const TRANSFORMATIONS = [
  {
    title: "Japanese Head Spa",
    description: "Pembersihan kerak kulit kepala & relaksasi total.",
    before: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=60&w=400",
    after: "https://images.unsplash.com/photo-1522337660859-02fbefda4740?auto=format&fit=crop&q=60&w=400",
    category: "Hair"
  },
  {
    title: "Facial Glow Whitening",
    description: "Wajah tampak lebih cerah & pori-pori mengecil.",
    before: "https://images.unsplash.com/photo-1512290901933-2868953112ba?auto=format&fit=crop&q=60&w=400",
    after: "https://images.unsplash.com/photo-15122923902-8a9f81dc2069?auto=format&fit=crop&q=60&w=400",
    category: "Skin"
  },
  {
    title: "IPL Hair Removal",
    description: "Pertumbuhan bulu melambat & area ketiak cerah.",
    before: "https://images.unsplash.com/photo-1596462502278-27bfac4023c6?auto=format&fit=crop&q=60&w=400",
    after: "https://images.unsplash.com/photo-1596461042517-f2732958742b?auto=format&fit=crop&q=60&w=400",
    category: "Laser"
  }
];

// --- Testimonial Data ---
export const TESTIMONIALS = [
  {
    name: "Siska Amelia",
    source: "WhatsApp",
    content: "Sumpah Head Spa nya enak bgt, langsung enteng bgt kepala. Gak nyangka di Singaparna ada tempat se-estetik dan se-zen ini!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=60&w=150",
    screenshot: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=60&w=500"
  },
  {
    name: "Rina Kartika",
    source: "Instagram DM",
    content: "IPL ketiak di sini beneran ngefek, bulu jd makin tipis & ketiak cerahan. Harganya paling ramah di kantong dibanding klinik lain.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=60&w=150",
    screenshot: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=60&w=500"
  },
  {
    name: "Dewi Putri",
    source: "Google Maps",
    content: "Facial Glow nya rekomen! Komedo beneran diangkat bersih, terus pake setrika wajahnya bikin muka lgsg kenceng.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=60&w=150",
    screenshot: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=60&w=500"
  }
];
