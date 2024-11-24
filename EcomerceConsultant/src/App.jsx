import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NetworkTestService from "./pages/network";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import api from "./abdi/axios";

const App = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await api.get("/MenuItems");
        const data = response.data.map((item) => ({
          ...item,
          url: `/${item.url}`
        }));
        console.log("Menu Items:", data); 
        setMenuItems(data);
      } catch (error) {
        console.error("Menu verileri çekilirken bir hata oluştu:", error.message);
      }
    };
    fetchMenuItems();
  }, []);


  const components = {
    //ToDo : ilk açılışta home sayfasına gitmesini sağlayacağız.
    home: <Home />,
    about: <About />,
    services: <Services />,
    contact: <Contact />,
  };


  return (
    <Router>
      <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Box sx={{ flex: 1 }}>
          <Navbar menuItems={menuItems} />
          <Routes>
            <Route path="/" element={<Navigate to={"/home"} replace />}/>
            {menuItems.map((item) =>
              item.isActive ? (
                <Route
                  key={item.id}
                  path={item.url} 
                  element={components[item.url.replace("/", "")]} 
                />
              ) : null
            )}
          </Routes>

        </Box>
        <Footer />
      </Box>
    </Router>
  );
};

export default App;
