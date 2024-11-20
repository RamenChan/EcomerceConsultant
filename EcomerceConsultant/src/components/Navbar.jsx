import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#3f51b5" }}>
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, fontWeight: "bold", color: "#fff" }}
        >
          E-Consultant
        </Typography>
        <Box>
          <Link to="/" style={{ textDecoration: "none", color: "#fff", marginRight: 16 }}>
            ANASAYFA
          </Link>
          <Link to="/about" style={{ textDecoration: "none", color: "#fff", marginRight: 16 }}>
            HAKKIMDA
          </Link>
          <Link to="/services" style={{ textDecoration: "none", color: "#fff", marginRight: 16 }}>
            HİZMETLERİM
          </Link>
          <Link to="/contact" style={{ textDecoration: "none", color: "#fff" }}>
            İLETİŞİM
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
