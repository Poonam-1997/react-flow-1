import Phase from "./Phase.jsx"

import React, { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import homeIcon from "../assets/house-solid.svg";
import arrowIcon from "../assets/chevron-right_breadcrumbs.svg";
import arrowRight from "../assets/Group 193552.svg"; // This is your toggle button
import Collapsable_bar from "./Collapsable_bar";



const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    
    setIsSidebarOpen(prevState => !prevState);
  };

  return (
    
    
    <Box>
        
        {/* Top Navbar */}
        <Box
          sx={{
            marginLeft: isSidebarOpen ? "22%" : "130px", // Moves right when sidebar opens
            transition: "margin-left 0.3s ease",
            display: "flex",
            alignItems: "center",
            padding: "10px 20px",
            backgroundColor: "white",
            fontSize: "15px",
            position: "relative",
            zIndex: 2, // Ensures navbar stays above sidebar
          }}
        >
          <Breadcrumbs separator={<img src={arrowIcon} alt="Arrow" style={{ width: "13px", height: "13px", margin: "10px" }} />} aria-label="breadcrumb">
            <div style={{ display: "flex", alignItems: "center", gap: "13px" }}>
            

              
             { !isSidebarOpen &&  <IconButton
                onClick={handleToggleSidebar}
                sx={{
                  transform: isSidebarOpen ? "scaleX(-1)" : "scaleX(1)", // Inverts on toggle
                  transformOrigin: "left 50px",
                  transition: "0.2s ease",
                  
                }}
              >
                <img src={arrowRight} alt="Toggle Sidebar" style={{ width: 24, height: 24 }} />
                </IconButton>} 
                
              
              <img src={homeIcon} alt="Home" style={{ width: "25px", height: "25px", marginRight: "10px" }} />
            </div>
            <Typography>CLIENT</Typography>
            <Typography>MATTER</Typography>
            <Typography>TRANSACTION DETAIL PAGE</Typography>
            <Typography color="textPrimary" style={{ fontWeight: "bold" }}>TRANSACTION CONTENTS</Typography>
          </Breadcrumbs>
          <Collapsable_bar isOpen={isSidebarOpen} onToggle={handleToggleSidebar} />
        </Box>
          <Phase isSidebarOpen={isSidebarOpen}/>
      </Box>
  );
};

export default Navbar;

