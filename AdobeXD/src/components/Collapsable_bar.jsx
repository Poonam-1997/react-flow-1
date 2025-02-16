import React, { useState } from "react";
import { Box, IconButton, Collapse, Typography } from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import folderIcon from "../assets/folder.svg"; // Your folder icon
import fileIcon from "../assets/word.svg"; // Example file icon
import infoIcon from "../assets/exclamation-circle-solid.svg"; // Example info icon
import addIcon from "../assets/plus-circle-solid.svg"; // Example add icon
import jsonData from "../../data.json"; // Import JSON data
import arrowRight from "../assets/Group 193552.svg"; // This is your toggle button

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
            <Box key={item.id} sx={{ paddingLeft: item.level * 2, display: "block", }}>

                <Box sx={{ display: "flex",alignItems: "center" }}>
                    {item.children ? (

                        <IconButton onClick={() => toggleFolder(item.id)} size="small">
                            {expandedFolders[item.id] ? <ExpandLess /> : <ExpandMore />}
                        </IconButton>
                    ) : (
                        <Box sx={{ width: 24, height: 24 }} /> // Empty space for alignment
                    )}

                    <img src={item.children ? folderIcon : fileIcon} alt="icon" style={{ width: 20, height: 20, marginRight: 8 }} />
                    <Typography variant="body2">{item.name}</Typography>

                    {/* Additional action icons */}
                    <Box sx={{ marginLeft: "auto", display: "flex", gap: 1 }}>
                        <img src={infoIcon} alt="info" style={{ width: 16, height: 16, cursor: "pointer" }} />
                        {item.children && <img src={addIcon} alt="add" style={{ width: 16, height: 16, cursor: "pointer" }} />}
                    </Box>

                </Box>
                {item.children && (
                    <Collapse in={expandedFolders[item.id]} timeout="auto" unmountOnExit>
                        <Box sx={{ paddingLeft: 4 }}> {/* Ensures indentation */}
                            {renderTree(item.children)}
                        </Box>
                    </Collapse>
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
                    <img src={arrowRight} alt="Toggle Sidebar" style={{ width: 24, height: 24 }} />
                </IconButton></div>}
            <Typography variant="h6" sx={{ marginBottom: 2 }}>Transaction Contents</Typography>
            {renderTree(jsonData)}
        </Box>
    );
};

export default Collapsable_bar;
