"use client";

import Link from "next/link";
import { useState } from "react";

const quizKategorileri = [
  {
    id: 1,
    baslik: "HTML Temelleri",
    aciklama: "HTML etiketleri, yapısı ve semantik kullanım",
    soruSayisi: 10,
    tahminiSure: "5 dakika",
    zorluk: "Başlangıç",
    renk: "bg-green-500"
  },
  {
    id: 2,
    baslik: "CSS Styling",
    aciklama: "CSS selectors, box model, flexbox ve grid",
    soruSayisi: 12,
    tahminiSure: "6 dakika",
    zorluk: "Başlangıç",
    renk: "bg-green-500"
  },
  {
    id: 3,
    baslik: "JavaScript Temelleri",
    aciklama: "Değişkenler, fonksiyonlar, DOM manipulasyonu",
    soruSayisi: 15,
    tahminiSure: "8 dakika",
    zorluk: "Orta",
    renk: "bg-yellow-500"
  },
  {
    id: 4,
    baslik: "JavaScript İleri",
    aciklama: "Async/await, API calls, ES6+ özellikleri",
    soruSayisi: 12,
    tahminiSure: "7 dakika",
    zorluk: "Orta",
    renk: "bg-yellow-500"
  },
  {
    id: 5,
    baslik: "Node.js & Backend",
    aciklama: "Node.js, Express.js, RESTful API",
    soruSayisi: 14,
    tahminiSure: "9 dakika",
    zorluk: "İleri",
    renk: "bg-red-500"
  },
  {
    id: 6,
    baslik: "Database & MongoDB",
    aciklama: "NoSQL, MongoDB, Mongoose ODM",
    soruSayisi: 10,
    tahminiSure: "6 dakika",
    zorluk: "İleri",
    renk: "bg-red-500"
  },
  {
    id: 7,
    baslik: "React Fundamentals",
    aciklama: "Components, props, state, hooks",
    soruSayisi: 16,
    tahminiSure: "10 dakika",
    zorluk: "İleri",
    renk: "bg-red-500"
  },
  {
    id: 8,
    baslik: "Full Stack Integration",
    aciklama: "Next.js, deployment, best practices",
    soruSayisi: 12,
    tahminiSure: "8 dakika",
    zorluk: "İleri",
    renk: "bg-purple-500"
  }
];

const tumSorular = [
  // HTML Soruları
  {
    kategori: 1,
    soru: "HTML'in açılımı nedir?",
    secenekler: [
      "HyperText Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "HyperTool Markup Language"
    ],
    dogruCevap: 0,
    aciklama: "HTML, HyperText Markup Language'ın kısaltmasıdır ve web sayfalarının yapısını tanımlar."
  },
  {
    kategori: 1,
    soru: "Hangi etiket en büyük başlığı temsil eder?",
    secenekler: ["<h6>", "<h1>", "<header>", "<big>"],
    dogruCevap: 1,
    aciklama: "<h1> etiketi en büyük başlığı temsil eder. <h6> en küçük başlıktır."
  },
  {
    kategori: 1,
    soru: "HTML'de yorum satırı nasıl yazılır?",
    secenekler: [
      "// Bu bir yorum",
      "/* Bu bir yorum */",
      "<!-- Bu bir yorum -->",
      "# Bu bir yorum"
    ],
    dogruCevap: 2,
    aciklama: "HTML'de yorum satırları <!-- --> işaretleri arasına yazılır."
  },
  // CSS Soruları
  {
    kategori: 2,
    soru: "CSS'de hangi özellik elemanın dış kenar boşluğunu ayarlar?",
    secenekler: ["padding", "margin", "border", "spacing"],
    dogruCevap: 1,
    aciklama: "margin özelliği elemanın dış kenar boşluğunu, padding ise iç kenar boşluğunu ayarlar."
  },
  {
    kategori: 2,
    soru: "Flexbox'ta ana eksen boyunca hizalama hangi özellik ile yapılır?",
    secenekler: ["align-items", "justify-content", "flex-direction", "align-content"],
    dogruCevap: 1,
    aciklama: "justify-content ana eksen boyunca, align-items ise çapraz eksen boyunca hizalama yapar."
  },
  // JavaScript Soruları
  {
    kategori: 3,
    soru: "JavaScript'te hangi keyword ile değişken tanımlanır (ES6+)?",
    secenekler: ["var", "let", "const", "let ve const"],
    dogruCevap: 3,
    aciklama: "ES6+ ile birlikte let ve const kullanımı önerilir. var kullanımından kaçınılmalı."
  },
  {
    kategori: 3,
    soru: "DOM'da ID'si 'myElement' olan elemanı nasıl seçersiniz?",
    secenekler: [
      "document.querySelector('.myElement')",
      "document.getElementById('myElement')",
      "document.getElementsByClassName('myElement')",
      "document.querySelector('#myElement')"
    ],
    dogruCevap: 1,
    aciklama: "getElementById() metodu ID'ye göre eleman seçer. querySelector('#myElement') de aynı işi yapar."
  }
];

export default function Quiz() {
  const [aktifQuiz, setAktifQuiz] = useState<number | null>(null);
  const [quizBasladi, setQuizBasladi] = useState(false);
  const [mevcutSoru, setMevcutSoru] = useState(0);
  const [secilenCevaplar, setSecilenCevaplar] = useState<number[]>([]);
  const [skor, setSkor] = useState(0);
  const [quizBitti, setQuizBitti] = useState(false);
  // Soru tipini tanımla
  type Soru = {
    soru: string;
    secenekler: string[];
    dogruCevap: number;
    aciklama?: string;
  };
  const [sorular, setSorular] = useState<Soru[]>([]);

  const getZorlukRengi = (zorluk: string) => {
    switch(zorluk) {
      case "Başlangıç": return "text-green-600 bg-green-100 dark:bg-green-900/20 dark:text-green-400";
      case "Orta": return "text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20 dark:text-yellow-400";
      case "İleri": return "text-red-600 bg-red-100 dark:bg-red-900/20 dark:text-red-400";
      default: return "text-gray-600 bg-gray-100 dark:bg-gray-700 dark:text-gray-400";
    }
  };

  const quizuBaslat = (kategoriId: number) => {
    const kategoriSorulari = tumSorular.filter(s => s.kategori === kategoriId);
    setSorular(kategoriSorulari);
    setAktifQuiz(kategoriId);
    setQuizBasladi(true);
    setQuizBitti(false);
    setMevcutSoru(0);
    setSecilenCevaplar([]);
    setSkor(0);
  };

  const cevapSec = (cevapIndex: number) => {
    const yeniCevaplar = [...secilenCevaplar];
    yeniCevaplar[mevcutSoru] = cevapIndex;
    setSecilenCevaplar(yeniCevaplar);

    if (cevapIndex === sorular[mevcutSoru].dogruCevap) {
      setSkor(skor + 1);
    }

    setTimeout(() => {
      if (mevcutSoru < sorular.length - 1) {
        setMevcutSoru(mevcutSoru + 1);
      } else {
        setQuizBitti(true);
      }
    }, 1500);
  };

  const quizuSifirla = () => {
    setAktifQuiz(null);
    setQuizBasladi(false);
    setQuizBitti(false);
    setMevcutSoru(0);
    setSecilenCevaplar([]);
    setSkor(0);
    setSorular([]);
  };

  if (quizBasladi) {
    const kategori = quizKategorileri.find(k => k.id === aktifQuiz);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <header className="bg-white dark:bg-gray-900 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <button 
                onClick={quizuSifirla}
                className="text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600"
              >
                ← Quiz Listesine Dön
              </button>
              <div className="text-lg font-medium text-gray-600 dark:text-gray-300">
                {kategori?.baslik} Quiz
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {!quizBitti ? (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Soru {mevcutSoru + 1} / {sorular.length}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Skor: {skor} / {sorular.length}
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((mevcutSoru + 1) / sorular.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  {sorular[mevcutSoru]?.soru}
                </h2>
                
                <div className="space-y-3">
                  {sorular[mevcutSoru]?.secenekler.map((secenek: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => cevapSec(index)}
                      className="w-full text-left p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                    >
                      <span className="font-medium">{String.fromCharCode(65 + index)})</span> {secenek}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
              <div className="text-6xl mb-4">
                {skor === sorular.length ? '🎉' : skor >= sorular.length / 2 ? '👏' : '📚'}
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Quiz Tamamlandı!
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                {kategori?.baslik} kategorisinde skorun: {skor} / {sorular.length} 
                ({Math.round((skor / sorular.length) * 100)}%)
              </p>
              
              <div className="space-y-4 mb-8">
                {skor === sorular.length && (
                  <p className="text-green-600 dark:text-green-400 font-medium text-lg">
                    🎉 Mükemmel! Bu konuyu harika öğrenmişsin!
                  </p>
                )}
                {skor >= sorular.length / 2 && skor < sorular.length && (
                  <p className="text-yellow-600 dark:text-yellow-400 font-medium text-lg">
                    👏 İyi iş! Biraz daha çalışırsan mükemmel olacak.
                  </p>
                )}
                {skor < sorular.length / 2 && (
                  <p className="text-red-600 dark:text-red-400 font-medium text-lg">
                    📚 Bu konuyu tekrar gözden geçirmen faydalı olabilir.
                  </p>
                )}
              </div>
              
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => quizuBaslat(aktifQuiz!)}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
                >
                  Tekrar Dene
                </button>
                <button
                  onClick={quizuSifirla}
                  className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 font-medium"
                >
                  Ana Menü
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    );
  }

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
              <Link href="/projeler" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                Projeler
              </Link>
              <Link href="/quiz" className="text-blue-600 dark:text-blue-400 font-medium">
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
            🧠 Quiz & Test Merkezi
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Öğrendiklerini test et, hangi konularda güçlü olduğunu keşfet. 
            Her kategori için detaylı açıklamalar ve anında geri bildirim al.
          </p>
        </div>

        {/* Quiz Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {quizKategorileri.length}
            </div>
            <div className="text-gray-600 dark:text-gray-300">Farklı Kategori</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              {quizKategorileri.reduce((total, quiz) => total + quiz.soruSayisi, 0)}+
            </div>
            <div className="text-gray-600 dark:text-gray-300">Toplam Soru</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              Anında
            </div>
            <div className="text-gray-600 dark:text-gray-300">Geri Bildirim</div>
          </div>
        </div>

        {/* Quiz Categories */}
        <div className="grid gap-6">
          {quizKategorileri.map((quiz) => (
            <div key={quiz.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`${quiz.renk} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                      {quiz.soruSayisi} Soru
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${getZorlukRengi(quiz.zorluk)}`}>
                      {quiz.zorluk}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      ⏱️ {quiz.tahminiSure}
                    </div>
                  </div>
                  <button 
                    onClick={() => quizuBaslat(quiz.id)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors font-medium"
                  >
                    Quiz&apos;e Başla →
                  </button>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {quiz.baslik}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400">
                  {quiz.aciklama}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quiz Tips */}
        <div className="mt-12 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">💡 Quiz İpuçları</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-bold mb-2">Odaklan</h3>
              <p className="text-blue-100">Her soruyu dikkatli oku. Acele etme, doğru cevabı düşün.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="font-bold mb-2">Tekrar Et</h3>
              <p className="text-blue-100">Yanlış yaptığın konuları tekrar çalış ve quiz&apos;i yeniden dene.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="font-bold mb-2">İlerle</h3>
              <p className="text-blue-100">%80+ alınca bir sonraki konuya geç. Temelini sağlam at.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
