import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

const services = [
  {
    title: "SEO Optimizasyonu",
    description: "Web sitenizi arama motorları için optimize ediyoruz.",
  },
  {
    title: "Pazarlama Stratejileri",
    description: "İşinizi büyütmek için stratejiler geliştiriyoruz.",
  },
  {
    title: "Özel Geliştirme",
    description: "E-ticaret ihtiyaçlarınıza özel çözümler sunuyoruz.",
  },
];

const ServicePreview = () => {
  return (
    <Box sx={{ py: 8, px: 4, textAlign: "center", backgroundColor: "#f5f5f5" }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Hizmetlerimiz
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        E-ticaret başarı hikayenizi oluşturmanız için ihtiyacınız olan her şey
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body2">{service.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicePreview;
