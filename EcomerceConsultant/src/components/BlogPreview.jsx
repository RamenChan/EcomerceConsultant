import { Box, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";

const blogs = [
  {
    title: "E-ticaretin Geleceği",
    description: "Yeni teknolojiler e-ticarette büyük değişimler yaratıyor.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "SEO Stratejileri",
    description: "2024'te SEO stratejilerinde bilmeniz gerekenler.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Pazarlamada Yenilikçi Yaklaşımlar",
    description: "Başarılı bir pazarlama stratejisi nasıl oluşturulur?",
    image: "https://via.placeholder.com/300x200",
  },
];

const BlogPreview = () => {
  return (
    <Box sx={{ py: 8, px: 4, textAlign: "center", backgroundColor: "#f5f5f5" }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Blog Yazılarımız
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {blogs.map((blog, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="200"
                image={blog.image}
                alt={blog.title}
              />
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {blog.title}
                </Typography>
                <Typography variant="body2">{blog.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BlogPreview;
