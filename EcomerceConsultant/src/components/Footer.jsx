import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#3f51b5",
        color: "#fff",
        textAlign: "center",
        py: 3,
      }}
    >
      <Typography variant="body1">
        © 2024 E-Consultant. All rights reserved.
      </Typography>
      <Typography variant="body2">
        <Link href="#" color="inherit" underline="hover">
          Privacy Policy
        </Link>{" "}
        |{" "}
        <Link href="#" color="inherit" underline="hover">
          Terms of Use
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
