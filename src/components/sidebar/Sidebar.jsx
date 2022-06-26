import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import StoreMallDirectoryOutlinedIcon from '@mui/icons-material/StoreMallDirectoryOutlined';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import React from "react"


const Sidebar = () => {
  return (
    <div className= "sidebar" >
        <div className="top"><span className="logo">MB Admin</span></div>
       <hr />
        <div className="center">
            <ul>
              <p className="title"> MAIN</p>
                <li>
               <DashboardIcon className="icon"/>
                    <span>Dashboard</span>
                    </li>
                    <li>
                      <PersonIcon className="icon"/>
                    <span>Users</span>
                    </li>
                    <p className="title">LIST</p>
                    <li>
                      <StoreMallDirectoryOutlinedIcon className="icon"/>
                    <span>Products</span>
                    </li>
                    <li>
                      <DeliveryDiningOutlinedIcon className="icon"/>
                    <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                      <QueryStatsIcon className="icon"/>
                    <span>Stats</span>
                    </li>
                    <li>
                      <NotificationsActiveIcon className="icon"/>
                    <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                      <MonitorHeartIcon className="icon"/>
                    <span>Systems Health</span>
                    </li>
                    <li>
                      <PsychologyIcon className="icon"/>
                    <span>Logs</span>
                    </li>
                    <li>
                      <SettingsIcon className="icon"/>
                    <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                      <PermIdentityIcon className="icon"/>
                    <span>Profile</span>
                    </li>
                    <li>
                      <ExitToAppIcon className="icon"/>
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

export default Sidebar