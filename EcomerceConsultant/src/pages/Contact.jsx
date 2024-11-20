import { Box, Typography, TextField, Button, Grid } from "@mui/material";

const Contact = () => {
  return (
    <Box
      sx={{
        py: 8,
        px: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* Başlık */}
      <Typography variant="h3" fontWeight="bold" gutterBottom textAlign="center">
        İletişim
      </Typography>
      <Typography variant="subtitle1" textAlign="center" sx={{ maxWidth: 600, mb: 4 }}>
        Bizimle iletişime geçmek için aşağıdaki formu doldurun veya konumumuzu ziyaret edin!
      </Typography>

      {/* Form ve Harita */}
      <Grid container spacing={6} sx={{ maxWidth: 1200 }}>
        {/* İletişim Formu */}
        <Grid item xs={12} md={6}>
          <Box
            component="form"
            sx={{
              p: 4,
              backgroundColor: "#f5f5f5",
              borderRadius: 2,
              boxShadow: 3,
            }}
            noValidate
            autoComplete="off"
          >
            <Grid container spacing={3}>
              {/* Ad Soyad */}
              <Grid item xs={12}>
                <TextField
                  label="Ad Soyad"
                  fullWidth
                  variant="outlined"
                  required
                />
              </Grid>

              {/* E-posta */}
              <Grid item xs={12}>
                <TextField
                  label="E-posta"
                  fullWidth
                  type="email"
                  variant="outlined"
                  required
                />
              </Grid>

              {/* Telefon */}
              <Grid item xs={12}>
                <TextField
                  label="Telefon"
                  fullWidth
                  type="tel"
                  variant="outlined"
                />
              </Grid>

              {/* Mesaj */}
              <Grid item xs={12}>
                <TextField
                  label="Mesajınız"
                  fullWidth
                  multiline
                  rows={4}
                  variant="outlined"
                  required
                />
              </Grid>

              {/* Gönder Butonu */}
              <Grid item xs={12} textAlign="center">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#3f51b5",
                    color: "#fff",
                    px: 4,
                    py: 1.5,
                    fontSize: "1rem",
                    "&:hover": { backgroundColor: "#303f9f" },
                  }}
                >
                  Gönder
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        {/* Harita */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: 3,
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345091874!2d-122.42129688425478!3d37.77492927975886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f4f4f4f5%3A0x1f4e575d7f4e4f5!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1616596371425!5m2!1sen!2sus"
              width="100%"
              height="400px"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Maps Location"
            ></iframe>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
