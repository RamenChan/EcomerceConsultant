
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# **E-Consultant - Modern E-Ticaret Danışmanlık Sitesi**

E-Consultant, modern ve kullanıcı dostu bir e-ticaret danışmanlık platformudur. Bu proje, React.js ve Material-UI ile tasarlanmış ve Tailwind CSS ile desteklenmiştir. Kullanıcıların hızlı, şık ve etkili bir deneyim yaşaması için geliştirilmiştir.

---

## **Proje Özellikleri**

### 1. **Anasayfa**
- Hero Section: Çarpıcı bir giriş ve harekete geçirici mesaj (CTA).
- Hizmetlerimiz: E-ticaret için sunduğumuz temel hizmetlerin özet tanıtımı.
- Referanslar: Kullanıcı yorumları ve başarı hikayeleri.
- Blog: E-ticaret ile ilgili ipuçları ve makaleler.

### 2. **Hakkımızda Sayfası**
- Şirketin misyonu, vizyonu ve ekip tanıtımı.
- Şık tasarım ve kullanıcı dostu düzen.

### 3. **Hizmetler Sayfası**
- SEO optimizasyonu, pazarlama stratejileri ve özel yazılım geliştirme gibi hizmetlerin detaylı tanıtımı.

### 4. **İletişim Sayfası**
- Modern bir iletişim formu.
- Google Maps haritası ile işletmenin konum bilgisi.

---

## **Kullanılan Teknolojiler**
- **React.js**: Dinamik ve hızlı kullanıcı arayüzleri için.
- **Material-UI**: Modern ve profesyonel bileşen tasarımları için.
- **Tailwind CSS**: Hızlı ve özelleştirilebilir CSS yazımı için.
- **React Router**: Sayfalar arasında geçiş yapmayı sağlamak için.
- **Google Maps Embed API**: İşletmenin konumunu göstermek için.

---

## **Kurulum ve Çalıştırma**
Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

### 1. **Projeyi Klonlayın**
```bash
git clone https://github.com/kullanıcı-adınız/econsultant.git
cd econsultant
```

### 2. **Bağımlılıkları Yükleyin**
```bash
npm install
```

### 3. **Geliştirme Sunucusunu Çalıştırın**
```bash
npm run dev
```

### 4. **Proje URL'sine Göz Atın**
Tarayıcınızda `http://localhost:5173` adresine gidin.

---

## **Proje Yapısı**
```bash
src/
├── components/
│   ├── Navbar.jsx        # Üst menü bileşeni
│   ├── HeroSection.jsx   # Ana sayfa giriş bölümü
│   ├── ServiceCard.jsx   # Hizmet tanıtım kartları
│   ├── Testimonials.jsx  # Referans bölümü
│   ├── BlogPreview.jsx   # Blog bölümü
│   ├── Footer.jsx        # Alt bilgi bileşeni
├── pages/
│   ├── Home.jsx          # Anasayfa
│   ├── About.jsx         # Hakkımızda sayfası
│   ├── Services.jsx      # Hizmetler sayfası
│   ├── Contact.jsx       # İletişim sayfası
├── App.jsx               # Router ve sayfa bağlantıları
├── main.jsx              # React uygulamasının başlangıcı
```

---

## **Katkıda Bulunma**
Katkıda bulunmak isterseniz, lütfen aşağıdaki adımları takip edin:
1. Projeyi Fork'layın.
2. Yeni bir özellik eklemek için bir branch oluşturun: `git checkout -b yeni-özellik`.
3. Değişikliklerinizi yapın ve commit edin: `git commit -m "Özellik ekleme açıklaması"`.
4. Branch'inizi push edin: `git push origin yeni-özellik`.
5. Bir Pull Request gönderin.

---

## **Proje Lisansı**
Bu proje **MIT Lisansı** altında lisanslanmıştır. Detaylı bilgi için `LICENSE` dosyasını inceleyebilirsiniz.
