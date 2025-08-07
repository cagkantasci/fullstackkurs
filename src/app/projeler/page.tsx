import Link from "next/link";

const projeler = [
  {
    id: 1,
    hafta: 1,
    baslik: "Kişisel CV Sayfası",
    aciklama: "HTML kullanarak kendi CV'ini oluştur. Bu projede temel HTML etiketlerini öğrenecek ve ilk web sayfanı yapacaksın.",
    teknolojiler: ["HTML"],
    zorluk: "Başlangıç",
    tahminiSure: "2-3 saat",
    tamamlandi: false,
    renk: "bg-green-500"
  },
  {
    id: 2,
    hafta: 2,
    baslik: "Güzel CV Sayfası",
    aciklama: "İlk hafta yaptığın CV'yi CSS ile güzelleştir. Renkler, fontlar ve layout kullanarak profesyonel görünüm kazandir.",
    teknolojiler: ["HTML", "CSS"],
    zorluk: "Başlangıç",
    tahminiSure: "3-4 saat",
    tamamlandi: false,
    renk: "bg-green-500"
  },
  {
    id: 3,
    hafta: 3,
    baslik: "Portfolio Web Sitesi",
    aciklama: "Flexbox ve CSS Grid kullanarak responsive bir portfolio sitesi yap. Projelerini sergileyebileceğin profesyonel bir site.",
    teknolojiler: ["HTML", "CSS", "Flexbox", "Grid"],
    zorluk: "Başlangıç",
    tahminiSure: "4-5 saat",
    tamamlandi: false,
    renk: "bg-green-500"
  },
  {
    id: 4,
    hafta: 4,
    baslik: "İnteraktif Hesap Makinesi",
    aciklama: "JavaScript ile çalışan bir hesap makinesi yap. Temel matematik işlemlerini yapabilen, güzel tasarımlı bir uygulama.",
    teknolojiler: ["HTML", "CSS", "JavaScript"],
    zorluk: "Orta",
    tahminiSure: "5-6 saat",
    tamamlandi: false,
    renk: "bg-yellow-500"
  },
  {
    id: 5,
    hafta: 5,
    baslik: "Hava Durumu Uygulaması",
    aciklama: "API kullanarak gerçek hava durumu verilerini gösteren uygulama. Async/await ve fetch ile API entegrasyonu öğren.",
    teknolojiler: ["HTML", "CSS", "JavaScript", "API"],
    zorluk: "Orta",
    tahminiSure: "6-7 saat",
    tamamlandi: false,
    renk: "bg-yellow-500"
  },
  {
    id: 6,
    hafta: 6,
    baslik: "GitHub Portfolio",
    aciklama: "Git ve GitHub kullanarak projelerini yayınla. README dosyaları yaz, commit mesajları oluştur ve portfolio oluştur.",
    teknolojiler: ["Git", "GitHub", "Markdown"],
    zorluk: "Orta",
    tahminiSure: "3-4 saat",
    tamamlandi: false,
    renk: "bg-yellow-500"
  },
  {
    id: 7,
    hafta: 7,
    baslik: "CLI Todo Uygulaması",
    aciklama: "Node.js ile komut satırında çalışan todo uygulaması. File system kullanarak verileri kaydet ve oku.",
    teknolojiler: ["Node.js", "File System"],
    zorluk: "Orta",
    tahminiSure: "4-5 saat",
    tamamlandi: false,
    renk: "bg-yellow-500"
  },
  {
    id: 8,
    hafta: 8,
    baslik: "Todo REST API",
    aciklama: "Express.js ile RESTful API yap. CRUD operasyonları, middleware kullanımı ve API testing öğren.",
    teknolojiler: ["Node.js", "Express.js", "REST API"],
    zorluk: "İleri",
    tahminiSure: "6-8 saat",
    tamamlandi: false,
    renk: "bg-red-500"
  },
  {
    id: 9,
    hafta: 9,
    baslik: "Database Entegrasyonu",
    aciklama: "MongoDB ile todo API'ni genişlet. Veritabanı bağlantısı, şema tasarımı ve CRUD operasyonları.",
    teknolojiler: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
    zorluk: "İleri",
    tahminiSure: "7-9 saat",
    tamamlandi: false,
    renk: "bg-red-500"
  },
  {
    id: 10,
    hafta: 10,
    baslik: "Kullanıcı Sistemi",
    aciklama: "JWT authentication, password hashing ve kullanıcı yönetimi. Güvenli giriş/kayıt sistemi oluştur.",
    teknolojiler: ["Node.js", "Express.js", "JWT", "bcrypt"],
    zorluk: "İleri",
    tahminiSure: "8-10 saat",
    tamamlandi: false,
    renk: "bg-red-500"
  },
  {
    id: 11,
    hafta: 11,
    baslik: "React Todo App",
    aciklama: "React ile modern todo uygulaması. Component yapısı, state management ve event handling öğren.",
    teknolojiler: ["React", "JavaScript", "CSS"],
    zorluk: "İleri",
    tahminiSure: "7-9 saat",
    tamamlandi: false,
    renk: "bg-red-500"
  },
  {
    id: 12,
    hafta: 12,
    baslik: "E-ticaret Sepet Sistemi",
    aciklama: "React hooks kullanarak e-ticaret sepet sistemi. useState, useEffect ve useContext ile state management.",
    teknolojiler: ["React", "Hooks", "Context API"],
    zorluk: "İleri",
    tahminiSure: "9-11 saat",
    tamamlandi: false,
    renk: "bg-red-500"
  },
  {
    id: 13,
    hafta: 13,
    baslik: "Full Stack Blog Platformu",
    aciklama: "Next.js ile tam özellikli blog platformu. SSR, API routes, database entegrasyonu ve kullanıcı sistemi.",
    teknolojiler: ["Next.js", "React", "MongoDB", "Authentication"],
    zorluk: "İleri",
    tahminiSure: "12-15 saat",
    tamamlandi: false,
    renk: "bg-red-500"
  },
  {
    id: 14,
    hafta: 14,
    baslik: "Test Yazma",
    aciklama: "Projelerine unit ve integration testleri yaz. Jest kullanarak test-driven development öğren.",
    teknolojiler: ["Jest", "Testing", "TDD"],
    zorluk: "İleri",
    tahminiSure: "6-8 saat",
    tamamlandi: false,
    renk: "bg-red-500"
  },
  {
    id: 15,
    hafta: 15,
    baslik: "Production Deployment",
    aciklama: "Projelerini Vercel, Netlify gibi platformlarda yayınla. Environment variables, CI/CD ve performance optimization.",
    teknolojiler: ["Vercel", "Environment Variables", "CI/CD"],
    zorluk: "İleri",
    tahminiSure: "5-7 saat",
    tamamlandi: false,
    renk: "bg-red-500"
  },
  {
    id: 16,
    hafta: 16,
    baslik: "Final Projesi: Full Stack Uygulama",
    aciklama: "Tüm öğrendiklerini birleştirerek büyük bir proje yap. Sosyal medya, e-ticaret veya yönetim paneli gibi kapsamlı bir uygulama.",
    teknolojiler: ["Full Stack", "React", "Node.js", "Database", "Authentication", "Deployment"],
    zorluk: "İleri",
    tahminiSure: "20-30 saat",
    tamamlandi: false,
    renk: "bg-purple-500"
  }
];

export default function Projeler() {
  const getZorlukRengi = (zorluk: string) => {
    switch(zorluk) {
      case "Başlangıç": return "text-green-600 bg-green-100 dark:bg-green-900/20 dark:text-green-400";
      case "Orta": return "text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20 dark:text-yellow-400";
      case "İleri": return "text-red-600 bg-red-100 dark:bg-red-900/20 dark:text-red-400";
      default: return "text-gray-600 bg-gray-100 dark:bg-gray-700 dark:text-gray-400";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600">
              🚀 Full Stack Developer Kursu
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/kurslar" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                Kurslar
              </Link>
              <Link href="/projeler" className="text-blue-600 dark:text-blue-400 font-medium">
                Projeler
              </Link>
              <Link href="/quiz" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                Quiz
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            🎯 Proje Portföyü
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Her hafta bir proje ile öğrendiklerini pekiştir. Bu projeler portfolio&apos;na eklayabilir, 
            iş görüşmelerinde gösterebilir ve GitHub&apos;da paylaşabilirsin.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              {projeler.filter(p => p.zorluk === "Başlangıç").length}
            </div>
            <div className="text-gray-600 dark:text-gray-300">Başlangıç Projesi</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
              {projeler.filter(p => p.zorluk === "Orta").length}
            </div>
            <div className="text-gray-600 dark:text-gray-300">Orta Seviye Proje</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">
              {projeler.filter(p => p.zorluk === "İleri").length}
            </div>
            <div className="text-gray-600 dark:text-gray-300">İleri Seviye Proje</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {projeler.reduce((total, p) => {
                const saat = parseInt(p.tahminiSure.split('-')[0]);
                return total + saat;
              }, 0)}+
            </div>
            <div className="text-gray-600 dark:text-gray-300">Toplam Saat</div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6">
          {projeler.map((proje) => (
            <div key={proje.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`${proje.renk} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                      Hafta {proje.hafta}
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${getZorlukRengi(proje.zorluk)}`}>
                      {proje.zorluk}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      📅 {proje.tahminiSure}
                    </div>
                  </div>
                  <Link 
                    href={`/projeler/${proje.id}`}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                  >
                    Projeye Başla →
                  </Link>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {proje.baslik}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {proje.aciklama}
                </p>

                <div className="flex flex-wrap gap-2">
                  {proje.teknolojiler.map((teknoloji, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {teknoloji}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Guidance */}
        <div className="mt-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">💼 Portfolio İpuçları</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div>
              <div className="text-4xl mb-2">📝</div>
              <h3 className="font-bold mb-2">README Yaz</h3>
              <p className="text-purple-100">Her proje için detaylı README dosyası hazırla. Nasıl çalıştırılacağını açıkla.</p>
            </div>
            <div>
              <div className="text-4xl mb-2">📸</div>
              <h3 className="font-bold mb-2">Ekran Görüntüleri</h3>
              <p className="text-purple-100">Projelerinin çalışır halini gösteren güzel ekran görüntüleri ekle.</p>
            </div>
            <div>
              <div className="text-4xl mb-2">🔗</div>
              <h3 className="font-bold mb-2">Canlı Demo</h3>
              <p className="text-purple-100">Projelerini canlı olarak gösterebileceğin linkler oluştur.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
