import { Box, Typography, Card, CardContent, Avatar } from "@mui/material";

const testimonials = [
  {
    name: "Ahmet Yılmaz",
    comment: "E-Consultant sayesinde satışlarımız %30 arttı!",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Elif Demir",
    comment: "Pazarlama stratejileri işimize yeni bir boyut kattı.",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Mert Kaya",
    comment: "SEO hizmeti gerçekten fark yaratıyor!",
    image: "https://via.placeholder.com/100",
  },
];

const Testimonials = () => {
  return (
    <Box sx={{ py: 8, px: 4, textAlign: "center" }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Referanslarımız
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 4,
          mt: 4,
        }}
      >
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            sx={{
              width: 300,
              boxShadow: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 3,
            }}
          >
            <Avatar src={testimonial.image} sx={{ width: 80, height: 80, mb: 2 }} />
            <Typography variant="body1" gutterBottom>
              "{testimonial.comment}"
            </Typography>
            <Typography variant="subtitle2" fontWeight="bold">
              - {testimonial.name}
            </Typography>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Testimonials;
