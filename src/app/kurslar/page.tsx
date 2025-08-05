"use client";

import Link from "next/link";
import { useState } from "react";
import { useProgress } from "@/contexts/ProgressContext";

const courseWeeks = [
  {
    hafta: 1,
    baslik: "Web Geliştirmeye Giriş ve HTML Temelleri",
    konular: ["HTML nedir?", "Temel HTML etiketleri", "Semantic HTML", "Form elementleri"],
    proje: "Kişisel CV sayfası oluşturma",
    zorluk: "Başlangıç",
    renk: "bg-green-500"
  },
  {
    hafta: 2,
    baslik: "CSS ile Stil Verme",
    konular: ["CSS sözdizimi", "Selectors", "Box model", "Responsive tasarım"],
    proje: "CV sayfasını güzelleştirme",
    zorluk: "Başlangıç",
    renk: "bg-green-500"
  },
  {
    hafta: 3,
    baslik: "CSS Layout ve Flexbox",
    konular: ["Flexbox", "CSS Grid", "Positioning", "Responsive grid sistemleri"],
    proje: "Portfolio web sitesi",
    zorluk: "Başlangıç",
    renk: "bg-green-500"
  },
  {
    hafta: 4,
    baslik: "JavaScript Temelleri",
    konular: ["Değişkenler", "Fonksiyonlar", "DOM manipulasyonu", "Event handling"],
    proje: "İnteraktif hesap makinesi",
    zorluk: "Orta",
    renk: "bg-yellow-500"
  },
  {
    hafta: 5,
    baslik: "JavaScript İleri Konular",
    konular: ["Arrays & Objects", "Async/Await", "Fetch API", "Local Storage"],
    proje: "Hava durumu uygulaması",
    zorluk: "Orta",
    renk: "bg-yellow-500"
  },
  {
    hafta: 6,
    baslik: "Git ve Version Control",
    konular: ["Git temel komutları", "GitHub kullanımı", "Branch ve merge", "Collaboration"],
    proje: "GitHub portföyü oluşturma",
    zorluk: "Orta",
    renk: "bg-yellow-500"
  },
  {
    hafta: 7,
    baslik: "Node.js ve NPM",
    konular: ["Node.js nedir?", "NPM paket yöneticisi", "Module sistemi", "File operations"],
    proje: "Basit CLI uygulaması",
    zorluk: "Orta",
    renk: "bg-yellow-500"
  },
  {
    hafta: 8,
    baslik: "Express.js ile Backend",
    konular: ["Express.js kurulumu", "Routing", "Middleware", "RESTful API"],
    proje: "Todo API oluşturma",
    zorluk: "İleri",
    renk: "bg-red-500"
  },
  {
    hafta: 9,
    baslik: "MongoDB ve Database",
    konular: ["NoSQL veritabanları", "MongoDB Atlas", "Mongoose ODM", "CRUD operations"],
    proje: "Todo uygulamasına database ekleme",
    zorluk: "İleri",
    renk: "bg-red-500"
  },
  {
    hafta: 10,
    baslik: "Authentication ve Security",
    konular: ["JWT tokens", "Password hashing", "Session management", "Security best practices"],
    proje: "Kullanıcı kayıt/giriş sistemi",
    zorluk: "İleri",
    renk: "bg-red-500"
  },
  {
    hafta: 11,
    baslik: "React.js Temelleri",
    konular: ["Component yapısı", "JSX", "Props ve State", "Event handling"],
    proje: "React Todo uygulaması",
    zorluk: "İleri",
    renk: "bg-red-500"
  },
  {
    hafta: 12,
    baslik: "React Hooks ve State Management",
    konular: ["useState", "useEffect", "useContext", "Custom hooks"],
    proje: "E-ticaret sepet sistemi",
    zorluk: "İleri",
    renk: "bg-red-500"
  },
  {
    hafta: 13,
    baslik: "Next.js ve Full Stack Integration",
    konular: ["Next.js routing", "API routes", "Server-side rendering", "Static generation"],
    proje: "Blog platformu oluşturma",
    zorluk: "İleri",
    renk: "bg-red-500"
  },
  {
    hafta: 14,
    baslik: "Testing ve Quality Assurance",
    konular: ["Unit testing", "Integration testing", "Jest", "Testing best practices"],
    proje: "Projelerinize test yazma",
    zorluk: "İleri",
    renk: "bg-red-500"
  },
  {
    hafta: 15,
    baslik: "Deployment ve DevOps",
    konular: ["Vercel deployment", "Environment variables", "CI/CD", "Performance optimization"],
    proje: "Projelerinizi yayınlama",
    zorluk: "İleri",
    renk: "bg-red-500"
  },
  {
    hafta: 16,
    baslik: "Final Projesi ve Kariyer Rehberi",
    konular: ["Kapsamlı proje geliştirme", "Kod review", "Portfolio hazırlama", "İş görüşmesi ipuçları"],
    proje: "Tam özellikli web uygulaması",
    zorluk: "İleri",
    renk: "bg-purple-500"
  }
];

export default function Kurslar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getCompletionPercentage } = useProgress();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600">
              🚀 Full Stack Kursu
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/kurslar" className="text-blue-600 dark:text-blue-400 font-medium">
                Kurslar
              </Link>
              <Link href="/projeler" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                Projeler
              </Link>
              <Link href="/quiz" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                Quiz
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700">
              <nav className="flex flex-col space-y-2 pt-4">
                <Link 
                  href="/kurslar" 
                  className="text-blue-600 dark:text-blue-400 py-2 px-4 rounded-lg font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  📚 Kurslar
                </Link>
                <Link 
                  href="/projeler" 
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  💻 Projeler
                </Link>
                <Link 
                  href="/quiz" 
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  🧠 Quiz
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            📚 16 Haftalık Müfredat
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Sıfırdan başlayarak Full Stack Developer olana kadar adım adım ilerle. 
            Her hafta yeni beceriler kazanacak ve gerçek projeler geliştireceksin.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 space-y-2 sm:space-y-0">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">İlerleme Durumun</h2>
            <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
              %{getCompletionPercentage()} Tamamlandı
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 sm:h-4">
            <div 
              className="bg-gradient-to-r from-blue-500 to-green-500 h-3 sm:h-4 rounded-full transition-all duration-500"
              style={{ width: `${getCompletionPercentage()}%` }}
            ></div>
          </div>
        </div>

        {/* Progress Overview */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">Öğrenme Yolculuğun</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="text-center p-3 sm:p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="text-xl sm:text-2xl font-bold text-green-600 dark:text-green-400">6 Hafta</div>
              <div className="text-green-700 dark:text-green-300 text-sm sm:text-base">Frontend Temelleri</div>
              <div className="text-xs sm:text-sm text-green-600 dark:text-green-400">HTML, CSS, JavaScript</div>
            </div>
            <div className="text-center p-3 sm:p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <div className="text-xl sm:text-2xl font-bold text-yellow-600 dark:text-yellow-400">6 Hafta</div>
              <div className="text-yellow-700 dark:text-yellow-300 text-sm sm:text-base">Backend & Database</div>
              <div className="text-xs sm:text-sm text-yellow-600 dark:text-yellow-400">Node.js, Express, MongoDB</div>
            </div>
            <div className="text-center p-3 sm:p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <div className="text-xl sm:text-2xl font-bold text-red-600 dark:text-red-400">4 Hafta</div>
              <div className="text-red-700 dark:text-red-300 text-sm sm:text-base">Full Stack & Deploy</div>
              <div className="text-xs sm:text-sm text-red-600 dark:text-red-400">React, Next.js, Production</div>
            </div>
          </div>
        </div>

        {/* Course Weeks */}
        <div className="grid gap-4 sm:gap-6">
          {courseWeeks.map((week) => (
            <div key={week.hafta} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row items-start justify-between mb-4 space-y-3 sm:space-y-0">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                    <div className={`${week.renk} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                      Hafta {week.hafta}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {week.zorluk} Seviye
                    </div>
                  </div>
                  <Link 
                    href={`/kurslar/hafta-${week.hafta}`}
                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium text-center"
                  >
                    Başla →
                  </Link>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {week.baslik}
                </h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 text-sm sm:text-base">📖 Öğrenilecek Konular:</h4>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1 text-sm sm:text-base">
                      {week.konular.map((konu, index) => (
                        <li key={index}>{konu}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 text-sm sm:text-base">🎯 Hafta Projesi:</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">{week.proje}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8 sm:mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 sm:p-8 text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Hazır mısın? 🚀</h2>
            <p className="text-lg sm:text-xl mb-6">
              16 hafta sonunda tam donanımlı bir Full Stack Developer olacaksın!
            </p>
            <Link 
              href="/kurslar/hafta-1"
              className="inline-block bg-white text-blue-600 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-bold text-base sm:text-lg hover:bg-gray-100 transition-colors"
            >
              İlk Derse Başla
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
