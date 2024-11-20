import { Box, Typography, Grid, Avatar } from "@mui/material";

const About = () => {
  return (
    <Box sx={{ py: 8, px: 4 }}>
      {/* Başlık ve Giriş */}
      <Typography variant="h3" fontWeight="bold" gutterBottom textAlign="center">
        Hakkımızda
      </Typography>
      <Typography
        variant="subtitle1"
        gutterBottom
        textAlign="center"
        sx={{ maxWidth: 800, mx: "auto", mb: 4 }}
      >
        E-Consultant olarak, işletmelerin dijital dünyada güçlü bir şekilde varlık göstermelerine yardımcı oluyoruz. 
        Modern teknolojilerle e-ticaret başarı hikayeleri oluşturuyor, müşterilerimize yenilikçi çözümler sunuyoruz.
      </Typography>

      {/* Misyon ve Vizyon */}
      <Grid container spacing={6} justifyContent="center">
        <Grid item xs={12} md={5}>            
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Misyonumuz
          </Typography>
          <Typography variant="body1">
            Müşterilerimize sürdürülebilir ve etkili dijital çözümler sunarak, 
            e-ticaret alanında güçlü bir varlık oluşturmalarını sağlamak.
          </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Vizyonumuz
          </Typography>
          <Typography variant="body1">
            Dijital dönüşümde lider bir marka olmak ve yenilikçi çözümlerle iş ortaklarımızın
            geleceğe hazır olmasını sağlamak.
          </Typography>
        </Grid>
      </Grid>
       
       {/* CTA (Call to Action) */}
      <Box
        sx={{
          mt: 8,
          py: 4,
          backgroundColor: "#3f51b5",
          color: "#fff",
          textAlign: "center",
          borderRadius: 2,
        }}
      >
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Bizimle Çalışmaya Hazır Mısınız?
        </Typography>
        <Typography variant="body1" gutterBottom>
          Hemen bizimle iletişime geçin ve işletmenizi dijital dünyada bir adım öne taşıyın.
        </Typography>
      </Box>

      {/* Ekibimiz */}
      <Box sx={{ mt: 8, textAlign: "center" }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Ekibimiz
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          İşin uzmanlarından oluşan bir ekip ile çalışıyoruz.
        </Typography>
        <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
          {/* Üye 1 */}
          <Grid item xs={12} sm={6} md={4}>
            <Avatar
              src="https://via.placeholder.com/150"
              alt="Founder"
              sx={{ width: 120, height: 120, mx: "auto", mb: 2 }}
            />
            <Typography variant="h6" fontWeight="bold">
              Anıl Emre DURAK
            </Typography>
            <Typography variant="subtitle2">Kurucu ve Danışman</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Dijital stratejiler ve e-ticaret çözümlerinde 10+ yıllık tecrübe.
            </Typography>
          </Grid>

          {/* Üye 2 */}
          <Grid item xs={12} sm={6} md={4}>
            <Avatar
              src="https://via.placeholder.com/150"
              alt="Team Member"
              sx={{ width: 120, height: 120, mx: "auto", mb: 2 }}
            />
            <Typography variant="h6" fontWeight="bold">
              Elif Kaya
            </Typography>
            <Typography variant="subtitle2">SEO Uzmanı</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              SEO optimizasyonu ve dijital pazarlama stratejilerinde uzman.
            </Typography>
          </Grid>

          {/* Üye 3 */}
          <Grid item xs={12} sm={6} md={4}>
            <Avatar
              src="https://via.placeholder.com/150"
              alt="Team Member"
              sx={{ width: 120, height: 120, mx: "auto", mb: 2 }}
            />
            <Typography variant="h6" fontWeight="bold">
              Mert Yılmaz
            </Typography>
            <Typography variant="subtitle2">Yazılım Geliştirici</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Özel e-ticaret yazılım geliştirme ve entegrasyon çözümleri uzmanı.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      
    </Box>
  );
};

export default About;
