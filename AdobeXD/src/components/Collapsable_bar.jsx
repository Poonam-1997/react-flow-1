


import React, { useState } from "react";
import { Box, IconButton, Collapse, Typography, Divider } from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import folderIcon from "../assets/folder.svg"; // Your folder icon
import fileIcon from "../assets/word.svg"; // Example file icon
import infoIcon from "../assets/exclamation-circle-solid.svg"; // Example info icon
import addIcon from "../assets/plus-circle-solid.svg"; // Example add icon
import jsonData from "../../data.json"; // Import JSON data
import arrowRight from "../assets/Group 193552.svg"; // This is your toggle button
import filterBar from "../assets/filter-bars.svg";
import drop from "../assets/caret-down.svg";

const Collapsable_bar = ({ isOpen, onToggle }) => {
    const [expandedFolders, setExpandedFolders] = useState({});

    // Toggle expand/collapse for a folder
    const toggleFolder = (id) => {
        setExpandedFolders((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    // Recursive function to render folders & files
    const renderTree = (items) => {
        return items.map((item) => (
            <Box key={item.id} sx={{ paddingLeft: item.level * 2, display: "block" }}>

                <Box sx={{ display: "flex", alignItems: "center" }}>



                    {/* Toggle Button */}

                    {item.type === "folder" ? ( // Show drop icon only for folders
    <IconButton onClick={() => toggleFolder(item.id)} size="small">
        <img
            src={drop}
            alt="drop"
            style={{
                width: 10,
                height: 10,
                transform: item.children && expandedFolders[item.id] ? "rotate(0deg)" : "rotate(270deg)",
                marginLeft: 5
            }}
        />
    </IconButton>
) : (
    // Empty space for alignment when item is a file
    <Box sx={{ width: 24, height: 24 }} />
)}

                    {/* Folder/File Icon */}
                    <img src={item.type === "folder" ? folderIcon : fileIcon} alt="icon" style={{ width: 20, height: 20, marginRight: 8 }} />

                    {/* Name */}
                    <Typography variant="body2">{item.name}</Typography>

                    {/* Additional Action Icons */}
                    <Box sx={{ marginLeft: "auto", display: "flex", gap: 1 }}>
                        <img src={infoIcon} alt="info" style={{ width: 16, height: 16, filter: "brightness(0) saturate(100%) invert(74%) sepia(2%) saturate(14%) hue-rotate(1deg) brightness(92%) contrast(86%)" }} />
                        {item.allowAdd && <img src={addIcon} alt="add" style={{ width: 16, height: 16,  filter: "brightness(0) saturate(100%) invert(74%) sepia(2%) saturate(14%) hue-rotate(1deg) brightness(92%) contrast(86%)"}} />}
                    </Box>

                </Box>

                {/* Render Children */}
                {item.children && (
                    <Collapse in={expandedFolders[item.id]} timeout="auto" unmountOnExit>
                        <Box sx={{ paddingLeft: 4 }}> {/* Ensures indentation */}
                            {renderTree(item.children)}
                        </Box>
                    </Collapse>
                )}

                {/* Divider */}
                {item.rootfolder && (
                    <Divider
                        orientation="horizontal"
                        variant="middle"
                        sx={{ width: "18rem", margin: "8px 0px 8px -13px" }}
                    />
                )}
            </Box>
        ));
    };



    return (
        <Box
            sx={{
                position: "fixed",
                left: isOpen ? "130px" : '-260px', // Move sidebar in and out
                width: isOpen ? "260px" : '0px',

                height: "100vh",
                top: 0,
                backgroundColor: "white",
                transition: "left 0.3s ease",
                boxShadow: isOpen ? "2px 0 5px rgba(0,0,0,0.1)" : "none",
                padding: 2,
                zIndex: 1
            }}
        >
            {/* Toggle Button INSIDE the Collapsable Bar */}
            {isOpen && <div style={{
                display: 'flex',
                flexDirection: "row-reverse"
            }}> <IconButton onClick={onToggle} sx={{ alignSelf: "flex-end", transform: isOpen ? "scaleX(-1)" : "scaleX(1)", transition: "0.3s ease" }}>
                    <img src={arrowRight} alt="Toggle Sidebar" style={{ width: 20, height: 20, padding: 0, marginTop: -10 }} />
                </IconButton></div>}
            <Typography variant="h6" sx={{ marginTop: "-30px", marginBottom: "30px", fontSize: "17px", fontWeight: "bold" }}>Transaction Contents</Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: 2, gap: "10px" }}>
                <Typography variant="body2" flex="block" fontSize="13px" color="#BDBDBD"><b style={{ fontSize: "22px", fontWeight: "Bold", color: "Black" }}>12</b> Stages</Typography>
                <Box sx={{ width: "1px", height: "40px", backgroundColor: "#ddd" }} />
                <Typography variant="body2" flex="block" fontSize="13px" color="#BDBDBD"><b style={{ fontSize: "22px", fontWeight: "Bold", color: "Black" }}>23</b> Subfolder</Typography>
                <Box sx={{ width: "1px", height: "40px", backgroundColor: "#ddd" }} />
                <Typography variant="body2" fontSize="13px" color="#BDBDBD"><b style={{ fontSize: "22px", fontWeight: "Bold", color: "Black" }}>1235</b> Document</Typography>
                <Box sx={{ width: "1px", height: "40px", backgroundColor: "#ddd" }} />
                <img src={filterBar} alt="Filter Bar" style={{ width: 25, height: 25, marginTop: 10 }} />
            </Box>
            <Divider orientation="horizontal" variant="middle" style={{ width: "18rem", marginLeft: "-13px" }} />
            <Box display="flex" gap="73px" margin="13px 2px 13px 2px">
                <Typography fontSize="13px" color="#BDBDBD">Filter by Client/Matter name</Typography>
                <img src={filterBar} alt="Filter Bar" style={{ width: 19, height: 19, color: "#BDBDBD" }} />
            </Box>
            <Divider orientation="horizontal" variant="middle" style={{ width: "18rem", marginLeft: "-13px" }} />
            <Box marginTop="20px">
                {renderTree(jsonData)}
            </Box>
        </Box>
    );
};

export default Collapsable_bar;
