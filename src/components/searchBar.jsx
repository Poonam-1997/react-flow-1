import React from "react";
import {
    Box,
    TextField,
    Select,
    MenuItem,
    Typography,
    IconButton,
} from "@mui/material";
import { Search } from "@mui/icons-material";

import folderIcon from "../assets/folder.svg";
import Down from "../assets/chevron-down.svg";
import micIcon from "../assets/microphone.svg";
import downloadIcon from "../assets/arrow-down-to-line.svg";
import filterIcon from "../assets/filter.svg";
import { useState } from "react";

export default function searchBar() {
    const [searchText, setSearchText] = useState("");
    const [isMicActive, setIsMicActive] = useState(false);
    const [placeholder, setPlaceholder] = useState("Search within all folders and content...");


    return (
        <>
            {/* <Box display="flex" alignItems="center" justifyContent="space-between" mb={2} sx={{backgroundColor: 'white',  borderRadius: '4px', padding: '8px' }}> */}
            <Box display= "flex">
                {/* Folder Icon & Selector */}
                <Box display="flex" alignItems="center" sx={{ marginRight: 2, gap:'2px', backgroundColor:'white', width: '75%', margin:'10px', borderRadius: '3px'}}>
                <Box display="flex" gap= '10px' padding = "10px">
                    <img src={folderIcon} alt="Folder" style={{ width: 24, height: 24, color : 'blue' }} />
                    <Select
                        defaultValue="All (selected folder)"
                        variant="standard"
                        size="small"
                        disableUnderline
                        sx={{
                            minWidth: 160,
                            "& .MuiSelect-select": { padding: 0 },
                        }}
                    >
                        <MenuItem value="All (selected folder)">
                            All (selected folder)
                        </MenuItem>
                    </Select>
                </Box>

                {/* Separator */}
                <Box sx={{
                    width: "1px",
                    height: "40px",
                    backgroundColor: "#ddd",
                    marginX: 2
                }} />

                {/* Search Icon */}
                <Search sx={{ color: "#888", marginRight: 1 }} />

                {/* Search Input */}
                <TextField
                    variant="standard"
                    // placeholder="Search within all folders and content..."
                    placeholder = {placeholder}
                    onFocus={() => setPlaceholder("")}
                    size="small"
                    fullWidth
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    InputProps={{ disableUnderline: true }}
                    sx={{
                        "& input": { padding: "6px 0", outline: "none", border: "none" }
                    }}
                />

                {/* Mic Icon (Right) - Fills on Hover & Click */}
                <IconButton
                    onClick={() => setIsMicActive(!isMicActive)}
                    sx={{
                        marginLeft: 1,
                        transition: "0.3s ease",
                        "& img": {
                            filter: isMicActive
                                ? "invert(30%) sepia(100%) saturate(200%) hue-rotate(0deg)"
                                : "none",
                            transition: "0.3s ease",
                        },
                        "&:hover img": {
                            filter: "invert(30%) sepia(100%) saturate(200%) hue-rotate(0deg)",
                        },
                    }}
                >
                    <img src={micIcon} alt="Mic" style={{ width: 20, height: 20 }} />
                </IconButton>

                </Box>
                
            <Box  display = "flex" marginLeft= "20px" gap ="20px">
            <Box display = "flex" backgroundColor = "white" borderRadius="3px" margin = "10px" padding = "10px" width = "180px">
                <Typography variant="body2">
                    All Status
                </Typography>
                <img src={Down} alt="Dropdown" style={{ width: 16, height: 16, margin: '3px 1px 1px 95px'}} />
            </Box>
             

             
            {/* Download Icon */}
            <IconButton sx={{ margin: '10px', backgroundColor: 'white', borderRadius:'3px', padding:'15px'}}>
                <img
                    src={downloadIcon}
                    alt="Download"
                    style={{ width: 24, height: 24 }}
                />
            </IconButton>
          

            {/* Filter Icon */}
            <IconButton style = {{marginRight: '10px'}}>
                <img src={filterIcon} alt="Filter" style={{ width: 24, height: 24}} />
            </IconButton>

            </Box>

            </Box >
        </>
    );
}    