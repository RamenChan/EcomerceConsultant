import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";



const Navbar = ({menuItems = []}) => {
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
          {
            menuItems.map((item) => (
              <Link 
                key={item.id} 
                to={item.url} 
                style={
                  { textDecoration: "none", color: "#fff", marginRight: 16 }
                }>
                {item.name}
              </Link>
          ))
          }
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
