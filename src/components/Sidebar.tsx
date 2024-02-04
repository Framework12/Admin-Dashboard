import "../styles/sidebar.scss";
import {
  FaSignOutAlt,
  FaSearch,
  FaFileContract,
  FaUserAlt,
} from "react-icons/fa";
import LOGO from "../assets/Logo.png";
import { LuLayoutDashboard, LuUsers2 } from "react-icons/lu";
import { TbReportAnalytics, TbDatabaseExport } from "react-icons/tb";
import { AiOutlineGlobal } from "react-icons/ai";
import { SiTheconversation } from "react-icons/si";
import { IoIosSettings } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={LOGO} alt="Logo" className="logo-image" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <FaSearch />
      </div>
      <ul>
        <li className="DashBoard">
          <LuLayoutDashboard /> DashBoard
        </li>
        <li className="customers">
          <LuUsers2 /> Customers
        </li>
        <li className="All-reports">
          <TbReportAnalytics /> All reports
        </li>
        <li className="geography">
          <AiOutlineGlobal /> Geography
        </li>
        <li className="conversation">
          <SiTheconversation /> Conversations
        </li>
        <li className="deals">
          <FaFileContract /> Deals
        </li>
        <li className="Export">
          <TbDatabaseExport /> Export
        </li>
      </ul>

      <div className="user-profile ">
        <div className="avatar">
          <FaUserAlt />
        </div>
        <div className="admin">
          <span className="admin-content">
            <FaUserAlt /> Admin
          </span>
        </div>

        <div className="username">Chandan Verma</div>
      </div>
      <div className="logout">
        <FaSignOutAlt /> Logout
        <div className="setting">
          <IoIosSettings /> Setting
        </div>
      </div>
    </div>
  );
};

export default Sidebar;