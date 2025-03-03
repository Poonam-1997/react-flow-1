import React, { useState, useEffect } from "react";
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
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  Divider,
} from "@mui/material";

import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
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
import wordIcon from "../assets/Group 193548word.svg";
import drop from "../assets/caret-down.svg";

// Import phase data
import phasejson from "../../Phasejson.json";

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

const TransactionRow = ({ row, level = "" }) => {
  const [open, setOpen] = useState(false);
  const phaseNumber = level ? `${level}.${row.id}` : row.id;

  return (
    <>
      <TableRow>
        <TableCell>

          {row.subPhases && row.subPhases.length >= 0 && (
            <IconButton size="small" onClick={() => setOpen(!open)}>
              <img
                src={drop}
                alt="drop"
                style={{
                  width: 14,
                  height: 14,
                  transform: open ? "rotate(0deg)" : "rotate(270deg)",
                  marginLeft: 5
                }}
              />
            </IconButton>
          )}
        </TableCell>
        <TableCell>{phaseNumber}</TableCell> {/* Display Phase Number */}
        <TableCell>{row.phase}</TableCell>
        <TableCell>
          <StatusBadge status={row.status} />
        </TableCell>
        <TableCell>
          {row.document && row.document !== "-" ? (
            <img
              src={wordIcon}
              alt="Document Icon"
              style={{ width: 24, height: 24 }}
            />
          ) : (
            "-"
          )}
        </TableCell>
        <TableCell>{row.responsibleParty || "-"}</TableCell>
        <TableCell>{row.updateDate}</TableCell>
      </TableRow>

      {
        row.subPhases && row.subPhases.length > 0 && (
          <TableRow sx={{
            paddingBottom: "10px",
          }} >
            <TableCell style={{ paddingBottom: 0, paddingTop: 0}} colSpan={6}>
              <Collapse in={open} timeout="auto" unmountOnExit>
              <TableContainer
              component={Paper} sx={{
                marginTop: 2, borderCollapse: "separate",
                borderSpacing: "0px 10px"
              }}>
              <Table>
                <TableBody>
                  {row.subPhases.map((subRow) => (
                    <TransactionRow key={subRow.id} row={subRow} />
                  ))}
                  </TableBody>
              </Table>
              </TableContainer>
              </Collapse>
            </TableCell>
          </TableRow>
        )}
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
      height: "51rem",
      margin: "15px"
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

      <Divider orientation="horizontal" variant="middle" style={{ width: "5rem" }} />
      {SeparateItems.map((item, index) => (
        <ListItem key={index} style={{ justifyContent: "center", paddingTop: "1.5rem" }} button>
          <ListItemIcon style={{ minWidth: item.text ? "40px" : "18px" }}>
            <div style={{ textAlign: "center" }}>
              <img src={item.icon} alt={item.text} style={{ width: 21, height: 21 }} />
              {item.text && (
                <div style={{ fontSize: "13px", padding: "0.3rem 0", fontWeight: "bold", color: "black" }}>
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

        <Box sx={{ flex: 1, marginLeft: isSidebarOpen ? "23%" : "160px" }}>
          <SearchBar />
          <TableContainer component={Paper} sx={{
            marginTop: 2, borderCollapse: "separate",
            borderSpacing: "0px 10px"
          }}>
            <Table>


              <TableHead>
                <TableRow sx={{ backgroundColor: "#F2F6FA", }}>
                  <TableCell></TableCell>
                  <TableCell>#</TableCell>
                  <TableCell>Phase</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Document</TableCell>
                  <TableCell>Responsible Party</TableCell>
                  <TableCell>Update Date</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {phasejson.map((row) => (
                  <TransactionRow key={row.id} row={row} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Sidebar />
      </Box>
    </Box>
  );
};

export default Phase;
