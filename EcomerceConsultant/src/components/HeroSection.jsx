import { Box, Typography, Button } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: `url('https://via.placeholder.com/1500')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "#fff",
        margin: 0, // Beyaz boşlukları kaldırır
        padding: 0,
      }}
    >
      <Typography variant="h2" fontWeight="bold" gutterBottom>
        Material Design - News
      </Typography>
      <Typography variant="h6" gutterBottom>
        Connect with us on your e-commerce journey
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#ff4081",
          mt: 3,
          "&:hover": { backgroundColor: "#f73378" },
        }}
      >
        Get Started
      </Button>
    </Box>
  );
};

export default HeroSection;
