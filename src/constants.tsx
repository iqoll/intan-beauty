import type { Service, FAQItem } from './types';

export const WHATSAPP_NUMBER = '082219282839';
export const WHATSAPP_LINK = `https://wa.me/6282219282839?text=Halo%20IntanBeauty,%20saya%20ingin%20booking%20perawatan `;
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
      { name: 'Basic Pedicure', description: 'Membersihkan kaki dan menjaga kesehatan kaki' },
      { name: 'Scalp Analysis', description: 'Analisa keadaan kondisi kulit dan batang rambut' },
      { name: 'Pre Shampo', description: 'Pemberian oil pada rambut untuk menetralisir kulit kepala' },
      { name: 'Facial Wash', description: 'Membersihkan muka, totok facial, dan sheetmask' },
      { name: 'Scalp Detox', description: 'Mengangkat sel kulit mati dan sisa residu' },
      { name: 'Shampo 1', description: 'Sesuai dengan kondisi kulit dan batang rambut' },
      { name: 'Shampo 2', description: 'Pembersihan mendalam tahap kedua' },
      { name: 'Hair Mask', description: 'Menutrisi dan memperbaiki kerusakan rambut' },
      { name: 'Hypnoteraphy Water', description: 'Keunggulan water healing untuk relaksasi total' },
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
    description: 'Perawatan dasar rambut yang bertujuan menghaluskan, melembapkan, merelaksasi, dan mempermudah pengaturan rambut',
    image: 'https://images.pexels.com/photos/8834074/pexels-photo-8834074.jpeg?auto=format&fit=crop&q=80&w=800',
    steps: [
      { name: 'Shampoo 2x', description: 'Pembersihan rambut' },
      { name: 'Cream Creambath', description: 'Aplikasi cream nutrisi' },
      { name: 'Pijatan Area Kepala', description: 'Relaksasi saraf kepala' },
      { name: 'Pijat Tubuh', description: 'Area leher, punggung, tangan' },
      { name: 'Alat Uap Rambut', description: 'Penyerapan nutrisi maksimal' },
      { name: 'Pembilasan', description: 'Pembersihan sisa cream' },
      { name: 'Tonic Rambut', description: 'Kesegaran akar rambut' },
      { name: 'Vitamin Rambut', description: 'Kilau alami rambut' },
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
    price: 'Rp 140.000',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800',
    description: 'Layanan perawatan wajah esensial yang dirancang khusus untuk mengangkat sel kulit mati dan mengembalikan kecerahan alami kulit.',
    steps: [
      { name: 'Double Cleansing', description: 'Pembersihan tahap awal' },
      { name: 'Scrub', description: 'Eksfoliasi kulit wajah' },
      { name: 'Vapozone', description: 'Uap untuk membuka pori-pori' },
      { name: 'Pengambilan Komedo', description: 'Ekstraksi kotoran pori-pori' },
      { name: 'High Frequency', description: 'Sterilisasi wajah' },
      { name: 'Massage', description: 'Relaksasi otot wajah' },
      { name: 'Totok Wajah', description: 'Stimulasi titik saraf wajah' },
      { name: 'Massage Kepala', description: 'Pijatan kepala rileks' },
      { name: 'Masker Wajah', description: 'Nutrisi kulit intensif' },
      { name: 'Serum', description: 'Aplikasi konsentrat aktif' },
      { name: 'Setrika Wajah', description: 'Teknologi pengencangan kulit' },
      { name: 'Cooling', description: 'Menenangkan kulit wajah' },
      { name: 'Sunscreen', description: 'Proteksi sinar matahari' }
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
    price: 'Rp 165.000',
    image: '/images/services/facial-glow-pdt.webp',
    description: 'Level lanjutan dari perawatan wajah yang menggabungkan teknologi medis modern dengan terapi relaksasi.',
    steps: [
      { name: 'Double Cleansing', description: 'Pembersihan mendalam' },
      { name: 'Scrub', description: 'Pengangkatan sel kulit mati' },
      { name: 'Vapozone', description: 'Pembukaan pori-pori' },
      { name: 'Pengambilan Komedo', description: 'Pembersihan komedo' },
      { name: 'High Frequency', description: 'Sterilisasi kulit' },
      { name: 'Massage', description: 'Pijatan otot wajah' },
      { name: 'Totok Wajah', description: 'Titik akupresur wajah' },
      { name: 'Massage Kepala', description: 'Pijatan relaksasi kepala' },
      { name: 'Masker Wajah', description: 'Aplikasi masker nutrisi' },
      { name: 'Globe Roller', description: 'Terapi dingin penenang kulit' },
      { name: 'Sinar PDT', description: 'Photo Dynamic Therapy' },
      { name: 'Serum', description: 'Nutrisi wajah aktif' },
      { name: 'Setrika Wajah', description: 'Optimalisasi penyerapan' },
      { name: 'Cooling', description: 'Menenangkan wajah' },
      { name: 'Sunscreen', description: 'Pelindung sinar UV' }
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
    image: '/images/services/facial-organic.webp',
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
    id: 'facial-oxy',
    category: 'facial',
    name: 'Facial Oxy',
    price: 'Rp 120.000',
    image: '/images/services/facial-oxy.webp',
    description: 'Oksigen murni untuk kulit yang "haus". Perawatan ini menyemprotkan nutrisi dan oksigen bertekanan tinggi ke lapisan kulit untuk memberikan hidrasi maksimal dan kesegaran instan.',
    benefits: [
      'Menghidrasi kulit kering secara mendalam',
      'Mengembalikan kesegaran dan rona wajah',
      'Menyamarkan garis halus akibat dehidrasi'
    ]
  },
  {
    id: 'facial-vshape-rf',
    category: 'facial',
    name: 'Facial V-Shape RF',
    price: 'Rp 265.000',
    image: '/images/services/facial-vshape.webp',
    description: 'Solusi wajah tirus tanpa prosedur bedah. Menggunakan teknologi Radio Frequency (RF) untuk menghangatkan lapisan dalam kulit, memicu kolagen, dan memberikan efek kencang pada area rahang.',
    benefits: [
      'Mengencangkan kulit yang kendur',
      'Memberikan efek wajah lebih tirus dan V-Shape',
      'Menghancurkan lemak ringan di area pipi'
    ]
  },
  {
    id: 'facial-mikrodermabrasi',
    category: 'facial',
    name: 'Facial Mikrodermabrasi',
    price: 'Rp 200.000',
    image: '/images/services/facial-mikroderm.webp',
    description: 'Eksfoliasi tingkat lanjut untuk mengangkat sel kulit mati yang membandel. Menggunakan alat khusus untuk menghaluskan tekstur kulit kasar dan mengembalikan kecerahan alami wajah.',
    benefits: [
      'Mengangkat sel kulit mati dan kotoran',
      'Menghaluskan tekstur kulit yang kasar',
      'Mencerahkan kulit kusam secara instan'
    ]
  },
  {
    id: 'facial-dermapen-bopeng',
    category: 'facial',
    name: 'Facial + Dermapen Bopeng',
    price: 'Rp 500.000',
    image: '/images/services/facial-derma.webp',
    description: 'Perawatan intensif untuk memperbaiki struktur kulit dari dalam. Prosedur microneedling ini dirancang khusus untuk memicu regenerasi jaringan baru pada area bopeng dan bekas jerawat.',
    benefits: [
      'Memperbaiki tekstur bopeng dan lubang jerawat',
      'Menyamarkan bekas jerawat dan flek hitam',
      'Memicu produksi kolagen untuk perbaikan kulit'
    ]
  },
  {
    id: 'facial-peeling',
    category: 'facial',
    name: 'Facial Peeling',
    price: 'Rp 300.000',
    image: '/images/services/facial-peeling.webp',
    description: 'Transformasi kulit melalui eksfoliasi kimiawi yang aman. Sangat efektif untuk memudarkan noda membandel, mengatasi jerawat, dan membuat kulit tampak lebih putih bersih.',
    benefits: [
      'Memudarkan flek hitam dan noda jerawat',
      'Mencerahkan warna kulit (Whitening effect)',
      'Mengontrol minyak berlebih dan jerawat'
    ]
  },
  {
    id: 'facial-gold',
    category: 'facial',
    name: 'Facial Gold',
    price: 'Rp 250.000',
    image: '/images/services/facial-gold.webp',
    description: 'Perawatan mewah dengan partikel emas untuk nutrisi kulit tingkat tinggi. Memberikan efek kilau sehat (golden glow) sekaligus melawan tanda-tanda penuaan dan kekeringan.',
    benefits: [
      'Memberikan kilau sehat dan mewah pada wajah',
      'Menutrisi kulit kering agar lebih kenyal',
      'Mencegah penuaan dini dan flek hitam'
    ]
  },
  {
    id: 'ipl-facial-glow',
    category: 'laser-ipl',
    name: 'FACIAL + IPL GLOW',
    price: 'Rp 330.000',
    image: '/images/services/facial-ipl-glow.webp',
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
    image: '/images/services/ipl-ketiak.webp',
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
    image: '/images/services/ipl-kaki.webp',
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
    image: '/images/services/ipl-kumis.webp',
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
    image: '/images/services/ipl-tangan.webp',
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
    image: '/images/services/ipl-punggung.webp',
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
    title: "Facial + IPL Glow",
    description: "Wajah tampak lebih cerah & pori-pori mengecil.",
    before: "/images/testimony/before-1.webp",
    after: "/images/testimony/after-1.webp",
    category: "Skin"
  },
  {
    title: "Facial Phytogen Whitening & Laser IPL Flek",
    description: "Wajah kusam dan flek langsung memudar.",
    before: "/images/testimony/before-2.webp",
    after: "/images/testimony/after-2.webp",
    category: "Skin"
  },
  {
    title: "Facial PDT Acne + Laser IPL Acne",
    description: "Jerawat berkurang wajah menjadi lebih cerah.",
    before: "/images/testimony/before-3.webp",
    after: "/images/testimony/after-3.webp",
    category: "Skin"
  }
];

// --- Testimonial Data ---
export const TESTIMONIALS = [
  {
    name: "Ida",
    source: "WhatsApp",
    content: "InsyaAllah minggu kedua saya facial lagi.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=60&w=150",
    screenshot: '/images/testimony/testimony-1.webp'
  },
  {
    name: "Rina Kartika",
    source: "WhatsApp",
    content: "Sehabis facial acne kemarin 2 hari setelahnya bener-bener ngefekk bgtt di aku.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=60&w=150",
    screenshot: '/images/testimony/testimony-2.webp'
  },
  {
    name: "Tiara Dwi Marlinda",
    source: "Google Maps",
    content: "enak kalo perawatan disini nih.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=60&w=150",
    screenshot: "/images/testimony/testimony-3.webp"
  }
];
