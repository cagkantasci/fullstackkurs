"use client";

import Link from "next/link";
import { useState } from "react";
import { useProgress } from "@/contexts/ProgressContext";

const lessons = [
  {
    id: "hafta-1-ders-1",
    baslik: "Web Geliştirme Nedir?",
    icerik: `
## Web Geliştirme Dünyasına Hoş Geldin! 🌐

Web geliştirme, internet üzerinde çalışan web sitelerini ve uygulamaları oluşturma sanatıdır. 

### Frontend vs Backend

**Frontend (Ön Yüz)** 👨‍💻
- Kullanıcının gördüğü ve etkileşimde bulunduğu kısım
- HTML, CSS, JavaScript kullanılır
- Tasarım, kullanıcı deneyimi, animasyonlar

**Backend (Arka Yüz)** ⚙️
- Sunucu tarafında çalışan kodlar
- Veritabanı işlemleri, API'ler
- Node.js, Python, PHP gibi diller

### Neden Web Geliştirme Öğrenmeliyim?

✅ Yüksek talep gören meslek
✅ Yüksek maaş imkanı  
✅ Uzaktan çalışma fırsatları
✅ Yaratıcılığını ifade etme şansı
✅ Sürekli gelişen teknoloji

### İhtiyaçların

1. **Bilgisayar** - Herhangi bir işletim sistemi
2. **İnternet Bağlantısı** - Örnekleri test etmek için
3. **Kod Editörü** - VS Code (ücretsiz)
4. **Tarayıcı** - Chrome, Firefox, Safari
5. **Sabır ve Azim** - En önemlisi! 💪
    `,
    kod: "",
    tamamlandi: false
  },
  {
    id: "hafta-1-ders-2",
    baslik: "HTML Nedir?",
    icerik: `
## HTML - Web'in Temel Taşı 🏗️

HTML (HyperText Markup Language), web sayfalarının iskeletini oluşturan işaretleme dilidir.

### HTML'in Özellikleri

- **Etiket Tabanlı**: \`<tag></tag>\` şeklinde çalışır
- **Anlamsal**: Her etiketin belirli bir anlamı vardır
- **Hiyerarşik**: İç içe geçmiş yapı
- **Platform Bağımsız**: Her tarayıcıda çalışır

### Temel HTML Yapısı

\`\`\`html
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>İlk Web Sayfam</title>
</head>
<body>
    <h1>Merhaba Dünya!</h1>
    <p>Bu benim ilk web sayfam.</p>
</body>
</html>
\`\`\`

### Etiket Anatomisi

\`<h1>Başlık</h1>\`

- **<h1>**: Açılış etiketi
- **Başlık**: İçerik
- **</h1>**: Kapanış etiketi

### Püf Noktaları 💡

1. **Girinti Kullan**: Kodunu düzenli tut
2. **Anlamlı Etiketler**: Doğru etiketi doğru yerde kullan
3. **Etiketleri Kapat**: Açtığın her etiketi kapat
4. **Küçük Harf**: HTML etiketlerinde küçük harf kullan
    `,
    kod: `<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>İlk Web Sayfam</title>
</head>
<body>
    <h1>Merhaba Dünya!</h1>
    <p>Bu benim ilk web sayfam.</p>
    
    <!-- Buraya yeni içerik ekle -->
    
</body>
</html>`,
    tamamlandi: false
  },
  {
    id: "hafta-1-ders-3",
    baslik: "Temel HTML Etiketleri",
    icerik: `
## En Çok Kullanılan HTML Etiketleri 📝

### Başlık Etiketleri

\`\`\`html
<h1>En Büyük Başlık</h1>
<h2>Alt Başlık</h2>
<h3>Daha Küçük Başlık</h3>
<h4>Küçük Başlık</h4>
<h5>Çok Küçük Başlık</h5>
<h6>En Küçük Başlık</h6>
\`\`\`

### Metin Etiketleri

\`\`\`html
<p>Paragraf etiketi</p>
<strong>Kalın metin</strong>
<em>İtalik metin</em>
<br> <!-- Satır sonu -->
<hr> <!-- Yatay çizgi -->
\`\`\`

### Liste Etiketleri

\`\`\`html
<!-- Sıralı Liste -->
<ol>
    <li>Birinci madde</li>
    <li>İkinci madde</li>
    <li>Üçüncü madde</li>
</ol>

<!-- Sırasız Liste -->
<ul>
    <li>Madde</li>
    <li>Madde</li>
    <li>Madde</li>
</ul>
\`\`\`

### Link ve Resim

\`\`\`html
<a href="https://www.google.com">Google'a Git</a>
<img src="resim.jpg" alt="Resim açıklaması">
\`\`\`

### Kontainer Etiketleri

\`\`\`html
<div>Genel kontainer</div>
<span>Satır içi kontainer</span>
\`\`\`

### Gerçek Hayat Örneği 🏠

Bir ev düşün:
- \`<html>\` = Evin temeli
- \`<head>\` = Evin çatısı (görünmez ama önemli)
- \`<body>\` = Evin içinde yaşadığın alan
- \`<h1>\` = Kapı numarası (en önemli bilgi)
- \`<p>\` = Odalar (içerik alanları)
    `,
    kod: `<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Etiketleri</title>
</head>
<body>
    <h1>Benim Hakkımda</h1>
    
    <h2>Kişisel Bilgiler</h2>
    <p>Merhaba! Ben <strong>Adın Soyadın</strong> ve web geliştirme öğreniyorum.</p>
    
    <h2>Hobiler</h2>
    <ul>
        <li>Kitap okumak</li>
        <li>Film izlemek</li>
        <li>Kod yazmak</li>
    </ul>
    
    <h2>Hedeflerim</h2>
    <ol>
        <li>HTML öğrenmek</li>
        <li>CSS öğrenmek</li>
        <li>JavaScript öğrenmek</li>
    </ol>
    
    <hr>
    
    <p><em>Bu sayfa HTML ile yapılmıştır.</em></p>
</body>
</html>`,
    tamamlandi: false
  }
];

const quiz = {
  id: "hafta-1-quiz",
  sorular: [
    {
      soru: "HTML'in açılımı nedir?",
      secenekler: [
        "HyperText Markup Language",
        "Home Tool Markup Language", 
        "Hyperlinks and Text Markup Language",
        "HyperTool Markup Language"
      ],
      dogruCevap: 0
    },
    {
      soru: "Hangi etiket en büyük başlığı temsil eder?",
      secenekler: ["<h6>", "<h1>", "<header>", "<big>"],
      dogruCevap: 1
    },
    {
      soru: "Sırasız liste oluşturmak için hangi etiket kullanılır?",
      secenekler: ["<ol>", "<list>", "<ul>", "<li>"],
      dogruCevap: 2
    }
  ]
};

export default function Hafta1() {
  const { markLessonComplete, markQuizComplete, isLessonCompleted, isQuizCompleted } = useProgress();
  const [aktifDers, setAktifDers] = useState(0);
  const [quizBasladi, setQuizBasladi] = useState(false);
  const [quizBitti, setQuizBitti] = useState(false);
  const [mevcutSoru, setMevcutSoru] = useState(0);
  const [secilenCevaplar, setSecilenCevaplar] = useState<number[]>([]);
  const [skor, setSkor] = useState(0);

  const quizuBaslat = () => {
    setQuizBasladi(true);
    setQuizBitti(false);
    setMevcutSoru(0);
    setSecilenCevaplar([]);
    setSkor(0);
  };

  const dersiTamamla = (dersIndex: number) => {
    markLessonComplete(lessons[dersIndex].id);
  };

  const cevapSec = (cevapIndex: number) => {
    const yeniCevaplar = [...secilenCevaplar];
    yeniCevaplar[mevcutSoru] = cevapIndex;
    setSecilenCevaplar(yeniCevaplar);

    if (cevapIndex === quiz.sorular[mevcutSoru].dogruCevap) {
      setSkor(skor + 1);
    }

    setTimeout(() => {
      if (mevcutSoru < quiz.sorular.length - 1) {
        setMevcutSoru(mevcutSoru + 1);
      } else {
        setQuizBitti(true);
        // Quiz tamamlandığında %60+ başarı oranı varsa tamamlandı olarak işaretle
        const finalSkor = skor + (cevapIndex === quiz.sorular[mevcutSoru].dogruCevap ? 1 : 0);
        if (finalSkor / quiz.sorular.length >= 0.6) {
          markQuizComplete(quiz.id);
        }
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
            <Link href="/kurslar" className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600">
              ← Kurslara Dön
            </Link>
            <div className="text-sm sm:text-lg font-medium text-gray-600 dark:text-gray-300">
              Hafta 1: HTML Temelleri
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="grid lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 sticky top-8">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4">Dersler</h2>
              <nav className="space-y-2">
                {lessons.map((lesson, index) => (
                  <div key={lesson.id} className="flex items-center">
                    <button
                      onClick={() => setAktifDers(index)}
                      className={`flex-1 text-left p-2 sm:p-3 rounded-lg transition-colors text-sm sm:text-base ${
                        aktifDers === index
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      <div className="font-medium">{index + 1}. {lesson.baslik}</div>
                    </button>
                    <button
                      onClick={() => dersiTamamla(index)}
                      className={`ml-2 p-2 rounded-lg transition-colors ${
                        isLessonCompleted(lesson.id)
                          ? 'bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                      title={isLessonCompleted(lesson.id) ? 'Ders tamamlandı!' : 'Dersi tamamlandı olarak işaretle'}
                    >
                      {isLessonCompleted(lesson.id) ? '✅' : '⭕'}
                    </button>
                  </div>
                ))}
                <div className="flex items-center">
                  <button
                    onClick={quizuBaslat}
                    className={`flex-1 text-left p-2 sm:p-3 rounded-lg transition-colors text-sm sm:text-base ${
                      isQuizCompleted(quiz.id)
                        ? 'bg-green-600 text-white'
                        : 'bg-green-500 text-white hover:bg-green-600'
                    }`}
                  >
                    <div className="font-medium">🎯 Hafta Sonu Quiz</div>
                  </button>
                  {isQuizCompleted(quiz.id) && (
                    <div className="ml-2 p-2 text-green-600 dark:text-green-400">
                      ✅
                    </div>
                  )}
                </div>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {!quizBasladi ? (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                  {lessons[aktifDers].baslik}
                </h1>
                
                <div className="prose prose-sm sm:prose-lg dark:prose-invert max-w-none mb-6 sm:mb-8">
                  <div dangerouslySetInnerHTML={{ 
                    __html: lessons[aktifDers].icerik.replace(/\n/g, '<br>').replace(/```html([^`]*)```/g, '<pre><code>$1</code></pre>').replace(/`([^`]*)`/g, '<code>$1</code>')
                  }} />
                </div>

                {lessons[aktifDers].kod && (
                  <div className="mb-6 sm:mb-8">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4">
                      💻 Deneyebileceğin Kod:
                    </h3>
                    <div className="bg-gray-900 rounded-lg p-3 sm:p-4 overflow-x-auto">
                      <pre className="text-green-400 text-xs sm:text-sm">
                        <code>{lessons[aktifDers].kod}</code>
                      </pre>
                    </div>
                    <div className="mt-4 p-3 sm:p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <p className="text-blue-800 dark:text-blue-200 text-sm sm:text-base">
                        💡 <strong>Deneme Zamanı:</strong> Bu kodu VS Code&apos;da yeni bir .html dosyasına yapıştır ve tarayıcıda aç!
                      </p>
                    </div>
                  </div>
                )}

                {/* Completion Button */}
                <div className="mb-6 sm:mb-8">
                  <button
                    onClick={() => dersiTamamla(aktifDers)}
                    disabled={isLessonCompleted(lessons[aktifDers].id)}
                    className={`w-full sm:w-auto px-6 py-3 rounded-lg font-medium transition-colors ${
                      isLessonCompleted(lessons[aktifDers].id)
                        ? 'bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400 cursor-not-allowed'
                        : 'bg-green-600 hover:bg-green-700 text-white'
                    }`}
                  >
                    {isLessonCompleted(lessons[aktifDers].id) ? '✅ Ders Tamamlandı' : '✓ Dersi Tamamladım'}
                  </button>
                </div>

                {/* Navigation */}
                <div className="flex flex-col sm:flex-row justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700 space-y-4 sm:space-y-0">
                  <button
                    onClick={() => setAktifDers(Math.max(0, aktifDers - 1))}
                    disabled={aktifDers === 0}
                    className="w-full sm:w-auto px-4 sm:px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                  >
                    ← Önceki Ders
                  </button>
                  
                  <span className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
                    {aktifDers + 1} / {lessons.length}
                  </span>
                  
                  <button
                    onClick={() => setAktifDers(Math.min(lessons.length - 1, aktifDers + 1))}
                    disabled={aktifDers === lessons.length - 1}
                    className="w-full sm:w-auto px-4 sm:px-6 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 text-sm sm:text-base"
                  >
                    Sonraki Ders →
                  </button>
                </div>
              </div>
            ) : (
              /* Quiz Section */
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                  🎯 Hafta 1 Quiz - HTML Temelleri
                </h1>

                {!quizBitti ? (
                  <div>
                    <div className="mb-4 sm:mb-6">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 space-y-2 sm:space-y-0">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Soru {mevcutSoru + 1} / {quiz.sorular.length}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Skor: {skor} / {quiz.sorular.length}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${((mevcutSoru + 1) / quiz.sorular.length) * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="mb-6 sm:mb-8">
                      <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                        {quiz.sorular[mevcutSoru].soru}
                      </h2>
                      
                      <div className="space-y-3">
                        {quiz.sorular[mevcutSoru].secenekler.map((secenek, index) => (
                          <button
                            key={index}
                            onClick={() => cevapSec(index)}
                            className="w-full text-left p-3 sm:p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors text-sm sm:text-base"
                          >
                            <span className="font-medium">{String.fromCharCode(65 + index)})</span> {secenek}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="text-4xl sm:text-6xl mb-4">
                      {skor === quiz.sorular.length ? '🎉' : skor >= quiz.sorular.length / 2 ? '👏' : '📚'}
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Quiz Tamamlandı!
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">
                      Skorun: {skor} / {quiz.sorular.length} 
                      ({Math.round((skor / quiz.sorular.length) * 100)}%)
                    </p>
                    
                    <div className="space-y-4 mb-6 sm:mb-8">
                      {skor === quiz.sorular.length && (
                        <p className="text-green-600 dark:text-green-400 font-medium text-sm sm:text-base">
                          🎉 Mükemmel! Tüm soruları doğru cevapladın!
                        </p>
                      )}
                      {skor >= quiz.sorular.length / 2 && skor < quiz.sorular.length && (
                        <p className="text-yellow-600 dark:text-yellow-400 font-medium text-sm sm:text-base">
                          👏 İyi iş! Çoğu soruyu doğru cevapladın.
                        </p>
                      )}
                      {skor < quiz.sorular.length / 2 && (
                        <p className="text-red-600 dark:text-red-400 font-medium text-sm sm:text-base">
                          📚 Dersleri tekrar gözden geçirmen faydalı olabilir.
                        </p>
                      )}
                      
                      {isQuizCompleted(quiz.id) && (
                        <p className="text-green-600 dark:text-green-400 font-medium text-sm sm:text-base">
                          ✅ Bu quiz başarıyla tamamlandı!
                        </p>
                      )}
                    </div>
                      
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                      <button
                        onClick={quizuBaslat}
                        className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm sm:text-base"
                      >
                        Tekrar Dene
                      </button>
                      <Link 
                        href="/kurslar/hafta-2"
                        className="px-4 sm:px-6 py-2 sm:py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 text-center text-sm sm:text-base"
                      >
                        Hafta 2&apos;ye Geç →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
