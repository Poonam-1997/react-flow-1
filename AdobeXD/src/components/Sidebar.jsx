import React from 'react';
import { List, ListItem, ListItemIcon} from '@mui/material';
import Muamelat from '../assets/Muamelat logo.svg';
import panoramaIcon from '../assets/chart-simple_panoroma.svg';
import transactionIcon from '../assets/file-lines_transaction.svg';
import documentIcon from '../assets/folder-3_document.svg';
import emailIcon from '../assets/envelope_email.svg';
import reportIcon from '../assets/file_Reports.svg';
import managementIcon from '../assets/sliders_management_panel.svg';
import calendarIcon from '../assets/calender-days-2.svg';
import UserIcon from '../assets/user-circle.svg';



const Sidebar = () => {

  const menuItems = [
    { text: 'Panorama', icon: panoramaIcon },
    { text: 'Transaction', icon: transactionIcon },
    { text: 'Documents', icon: documentIcon },
    { text: 'E-Mails', icon: emailIcon },
    { text: 'Reports', icon: reportIcon },
    { text: 'Management Panel', icon: managementIcon },
    { text: 'Transaction Calendar', icon: calendarIcon },
  ];

  const sidebarStyle = {
    position: 'fixed',
    width: '130px',
    backgroundColor: '#002874',
    color: 'white',
    height: '100vh',
    paddingTop: '20px',
    marginTop:'0px',
    marginBottom: '100px',
  };

  const iconStyle = {
    width: '35px',  // Adjust icon size here
    height: '35px',
    color: 'white',
    filter: 'invert(1)',
  };

  return (
    
    <div style={sidebarStyle}>
        
      <List>
     
        
      <ListItem button key =
      'm6' style = {{justifyContent:'center'}}>
            <ListItemIcon style={{ color: 'white', minWidth: '50px' }}>
                <div style={{ textAlign: 'center' }}> 
                  <img src={Muamelat} alt="Muamelat" style={{width: '55px',height: '52px'}} />
                   <div style={{fontSize: '19px', marginTop: '5px', whiteSpace: 'nowrap' }}>
                   Muamelat
                   </div>
                </div>
              
            </ListItemIcon>
            
          </ListItem>
        {menuItems.map((item, index) => (
          <ListItem button key={index} style = {{justifyContent:'center', flexDirection: 'column', alignItems: 'center'}} >
            <ListItemIcon style={{ color: 'white', minWidth: '50px' }}>
                <div style={{ textAlign: 'center' }}> 
                <img src={item.icon} alt={item.text} style={iconStyle} />
                  <div style={{fontSize: '19px', marginTop: '5px', whiteSpace: 'auto' }}>
                      {item.text}
                  </div>
                </div>
             
            </ListItemIcon>
          </ListItem>
       
          
        ))}

       <ListItem button key =
              'm7' style = {{justifyContent:'center'}}>
            <ListItemIcon style={{ color: 'white', minWidth: '50px' }}>
                <div style={{ textAlign: 'center' }}> 
                  <img src={UserIcon} alt="UserIcon" style={{width: '50px',height: '50px', color: 'white', filter: 'invert(1)', marginTop: '93px'}} />
                   <div style={{fontSize: '19px', marginTop: '5px', whiteSpace: 'auto' }}>
                   </div>
                </div>
              
            </ListItemIcon>
            
          </ListItem>

      </List>
    </div>
   
  );
};

export default Sidebar;
