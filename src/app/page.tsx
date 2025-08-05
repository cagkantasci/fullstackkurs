"use client";

import { useState } from 'react';
import { useProgress } from '@/contexts/ProgressContext';
import Link from 'next/link';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getCompletionPercentage, completedLessons, completedQuizzes } = useProgress();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">
                💻 Full Stack Dev Kursu
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
                Ana Sayfa
              </Link>
              <Link href="/kurslar" className="text-gray-700 hover:text-blue-600 font-medium">
                Kurslar
              </Link>
              <div className="text-gray-700 font-medium">
                İlerleme: {getCompletionPercentage()}%
              </div>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
                  Ana Sayfa
                </Link>
                <Link href="/kurslar" className="text-gray-700 hover:text-blue-600 font-medium">
                  Kurslar
                </Link>
                <div className="text-gray-700 font-medium">
                  İlerleme: {getCompletionPercentage()}%
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-gray-900 mb-6">
            Dünyanın En Kapsamlı
            <span className="block text-blue-600">Full Stack Developer Kursu</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Sıfırdan ileri seviyeye kadar web geliştirme öğrenin. HTML, CSS, JavaScript'ten 
            React, Node.js ve MongoDB'ye kadar her şey burada!
          </p>

          {/* Progress Overview */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8 max-w-md mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">İlerleme Durumun</h3>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
              <div 
                className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                style={{width: `${getCompletionPercentage()}%`}}
              ></div>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Tamamlanan Dersler: {completedLessons.size}</span>
              <span>Tamamlanan Quiz'ler: {completedQuizzes.size}</span>
            </div>
            <div className="text-center mt-2 font-semibold text-blue-600">
              %{getCompletionPercentage()} Tamamlandı
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link 
              href="/kurslar"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              🚀 Kurslara Başla
            </Link>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-4 px-8 rounded-lg text-lg transition duration-300 w-full sm:w-auto">
              📖 Önizleme İzle
            </button>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Hedef Odaklı</h3>
            <p className="text-gray-600">Her hafta net hedefler ve projelerle ilerleyin. Teoriden pratiğe geçişi kolaylaştırın.</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Interaktif Öğrenme</h3>
            <p className="text-gray-600">Kodlama egzersizleri, quiz'ler ve gerçek projelerle öğrendiklerinizi pekiştirin.</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Mobil Uyumlu</h3>
            <p className="text-gray-600">Telefonunuzdan, tabletinizden her yerden öğrenmeye devam edin.</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
            <div className="text-4xl mb-4">⏱️</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Esnek Zaman</h3>
            <p className="text-gray-600">Kendi hızınızda ilerleyin. 24/7 erişim ile istediğiniz zaman öğrenin.</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Sertifika</h3>
            <p className="text-gray-600">Kursu başarıyla tamamlayınca profesyonel sertifikanızı alın.</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Topluluk</h3>
            <p className="text-gray-600">Binlerce öğrenci ile birlikte öğrenin, sorularınızı paylaşın.</p>
          </div>
        </div>

        {/* Levels Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Hangi Seviyedesin?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 hover:border-green-400 transition duration-300">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold text-green-800 mb-3">Başlangıç</h3>
              <p className="text-green-600 mb-4">Hiç programlama deneyimin yok mu? Sıfırdan başla!</p>
              <ul className="text-sm text-green-600 text-left">
                <li>✓ HTML & CSS Temelleri</li>
                <li>✓ JavaScript Giriş</li>
                <li>✓ İlk Web Siteniz</li>
              </ul>
            </div>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 hover:border-blue-400 transition duration-300">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Orta Seviye</h3>
              <p className="text-blue-600 mb-4">Temelleri biliyorsun, daha fazlasını öğrenmek istiyorsun?</p>
              <ul className="text-sm text-blue-600 text-left">
                <li>✓ React & Next.js</li>
                <li>✓ Node.js & Express</li>
                <li>✓ Veritabanı İşlemleri</li>
              </ul>
            </div>

            <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6 hover:border-purple-400 transition duration-300">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-purple-800 mb-3">İleri Seviye</h3>
              <p className="text-purple-600 mb-4">Profesyonel projeler geliştirmek istiyorsun?</p>
              <ul className="text-sm text-purple-600 text-left">
                <li>✓ Full Stack Projeler</li>
                <li>✓ DevOps & Deployment</li>
                <li>✓ Performans Optimizasyonu</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Bugün Başla, Yarın Farkı Gör!
          </h2>
          <p className="text-xl mb-8 opacity-90">
            16 hafta sonunda tam donanımlı bir Full Stack Developer ol
          </p>
          <Link 
            href="/kurslar"
            className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105 inline-block"
          >
            🎯 Hemen Başla - Ücretsiz!
          </Link>
        </div>
      </main>
    </div>
  );
}
