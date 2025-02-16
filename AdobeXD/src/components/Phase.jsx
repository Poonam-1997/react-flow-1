import React, { useState } from "react";
import SearchBar from "./searchBar.jsx";
import {
  Box,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  Divider,
} from "@mui/material";

import {
  Search,
  CloudDownload,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material";
import homeIcon from "../assets/house.svg";
import contentsIcon from "../assets/align-right_content.svg";
import tasksIcon from "../assets/clipboard-check-list_task.svg";
import phasesIcon from "../assets/clock-circle.svg";
import signTrackingIcon from "../assets/clipboard-pen.svg";
import bookmarkIcon from "../assets/bookmark.svg";
import analysisIcon from "../assets/analysis.svg";
import calendarIcon from "../assets/calender-days-2.svg";
import reportLogIcon from "../assets/reports_log.svg";
import dotsIcon from "../assets/ellipsis_dots.svg";

const menuItems = [
  { text: "Transaction", icon: homeIcon },
  { text: "Contents", icon: contentsIcon },
  { text: "Tasks", icon: tasksIcon },
  { text: "Phases", icon: phasesIcon },
  { text: "Sign Tracking", icon: signTrackingIcon },
  { text: "Critical info Setting", icon: bookmarkIcon },
  { text: "Analysis Phases", icon: analysisIcon },
  { text: "Calendars", icon: calendarIcon },
];

const SeparateItems = [
  { text: "Activity Logs", icon: reportLogIcon },
  { text: undefined, icon: dotsIcon },
];

const data = [
  {
    id: 1,
    phase: "Transaction...",
    status: "Continuing",
    document: "V6",
    responsibleParty: "Goksu Safi Işık Avukatlık",
    updateDate: "11.12.2022",
    subPhases: 4,
  },
  {
    id: 2,
    phase: "Phase 2",
    status: "Completed",
    document: "-",
    responsibleParty: "Goksu Safi Işık Avukatlık",
    updateDate: "11.12.2022",
    subPhases: 2,
  },
  {
    id: 3,
    phase: "Phase 3",
    status: "Not Started",
    document: "V6",
    responsibleParty: "Goksu Safi Işık Avukatlık",
    updateDate: "11.12.2022",
    subPhases: 5,
  },
];

const StatusBadge = ({ status }) => {
  const color =
    {
      Completed: "#4CAF50",
      Continuing: "#FFC107",
      "Not Started": "#F44336",
      Undefined: "#9E9E9E",
    }[status] || "#000";

  return (
    <Box
      sx={{
        display: "inline-block",
        padding: "4px 8px",
        borderRadius: "4px",
        backgroundColor: color,
        color: "white",
        fontSize: "12px",
      }}
    >
      {status}
    </Box>
  );
};

const TransactionRow = ({ row }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell>{row.phase}</TableCell>
        <TableCell>
          <StatusBadge status={row.status} />
        </TableCell>
        <TableCell>
          {row.document === "V6" ? (
            <img
              src={analysisIcon}
              alt="Document Icon"
              style={{ width: 24, height: 24 }}
            />
          ) : (
            "-"
          )}
        </TableCell>
        <TableCell>{row.responsibleParty}</TableCell>
        <TableCell>{row.updateDate}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="body2">
                Sub Phases: {row.subPhases}
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

const Sidebar = () => (
  <Box
    sx={{
      width: "5rem",
      flexShrink: 0,
      backgroundColor: "white",
      borderRadius: "3%",
      height: "50rem",
    }}
  >
    <List>
      {menuItems.map((item, index) => (
        <ListItem
          key={index}
          style={{
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
          button
        >
          <ListItemIcon style={{ minWidth: "40px" }}>
            <div style={{ textAlign: "center" }}>
              <img
                src={item.icon}
                alt={item.text}
                style={{ width: 21, height: 21 }}
              />
              <div
                style={{
                  fontSize: "13px",
                  padding: "0.4rem 0",
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                {item.text}
              </div>
            </div>
          </ListItemIcon>
        </ListItem>
      ))}

      <Divider
        orientation="horizontal"
        variant="middle"
        style={{ marginLeft: 0, width: "5rem" }}
      />
      {SeparateItems.map((item, index) => (
        <ListItem
          key={index}
          style={{
            justifyContent: "center",
            paddingTop: "1.5rem",
            alignItems: "center",
          }}
          button
        >
          <ListItemIcon style={{ minWidth: item.text ? "40px" : "18px" }}>
            <div style={{ textAlign: "center" }}>
              <img
                src={item.icon}
                alt={item.text}
                style={{ width: 21, height: 21 }}
              />
              {item.text && (
                <div
                  style={{
                    fontSize: "13px",
                    padding: "0.3rem 0",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  {item.text}
                </div>
              )}
            </div>
          </ListItemIcon>
        </ListItem>
      ))}
    </List>
  </Box>
);

const Phase = ({ isSidebarOpen }) => {
  
  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            flex: 1,
            marginLeft:isSidebarOpen? "23%": "160px",
            
          }}
        >
          <SearchBar />

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>Phase</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Document</TableCell>
                  <TableCell>Responsible Party</TableCell>
                  <TableCell>Update Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TransactionRow key={row.id} row={row} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Box sx={{ width: "5rem", margin: "20px", borderRadius: "2px" }}>
          <Sidebar />
        </Box>
      </Box>
    </Box>
  );
};

export default Phase;
