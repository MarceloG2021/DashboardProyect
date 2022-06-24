import React from 'react';
import "./sidebar.scss";
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <span className="logo">AdminTest</span>
        </div>
        <hr />
        <div className="center">
           <ul>
              <li>
                <DashboardCustomizeIcon className="icon" />
                <span> Main Dashboard</span>
              </li>
              <li>
                <ShoppingBasketIcon className="icon" />
                <span>Categories</span>
              </li>
              <li>
                <CalendarMonthIcon className="icon" />
                <span>Calendar</span>
              </li>
              <li>
                <SettingsIcon className="icon" />
                <span>Settings</span>
              </li>
              <li>
                <NotificationsNoneIcon className="icon" />
                <span>Notification</span>
              </li>
              <p className='title'>USER</p>
              <li>
                <PsychologyOutlinedIcon className="icon" />
                <span>Profile</span>
              </li>
              <li>
                <AccountCircleOutlinedIcon className="icon" />
                <span>Logout</span>
              </li>
           </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default Sidebar;