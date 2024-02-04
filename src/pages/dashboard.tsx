import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import { PiArrowRightLight } from "react-icons/pi";
import { HiUserCircle } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { IoChatbubbleOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { FaUserAlt } from "react-icons/fa";
import { BsPencil } from "react-icons/bs";
import { CiMenuKebab } from "react-icons/ci";
import { LiaGripLinesVerticalSolid } from "react-icons/lia";
import Sidebar from "../components/Sidebar";
import "../styles/dashboard.scss";
import { CiSquarePlus } from "react-icons/ci";
import Chart from "../assets/Chart.png";

const Dashboard = () => {
 
 // users of Customers Section
  const users = [
    { username: "John Doe", address: "123 Main St, Cityville, State" },
    { username: "Jane Smith", address: "456 Elm St, Townsville, State" },
    { username: "Michael Johnson", address: "789 Oak St, Villagetown, State" },
    { username: "Emily Davis", address: "987 Pine St, Hamletville, State" },
  ];

  //deals section data
  const dealsData = [
    { text: "Oranges" },
    { text: "DashBoard" },
    { text: "Gradient" },
  ];

  return (
    <div className="container">
      <Sidebar />
      <main>
        {/* DashBoard section */}
        <div className="dashboard">
          {/* Revenue section */}
          <div className="revenue">
            <h3>Revenue</h3>
            <div className="number-section">
              <span className="amount">
                15% <FaArrowTrendUp className="icon" />
              </span>
            </div>
            <p>Increase compared to last week.</p>
            <span className="more">
              Revenue reports <PiArrowRightLight className="icon" />
            </span>
          </div>

          {/* Lost Deals section */}
          <div className="LostDeals">
            <h3>LostDeals</h3>
            <div className="number-section">
              <span className="amount">
                4% <FaArrowTrendDown className="icon" />
              </span>
            </div>
            <p>You closed 96 out of 100 deals.</p>
            <span className="more">
              All Deals <PiArrowRightLight className="icon" />
            </span>
          </div>

          {/* Quarter-Goal section */}
          <div className="quarterGoal">
            <h3>Quarter Goal</h3>
            <span className="more">
              All Goals <PiArrowRightLight className="icon" />
            </span>
          </div>

          {/* Customers section */}
          <div className="Customers">
            <div className="heading">
              <h5 className="custom-heading">Customers</h5>
              <span className="nearest">
                Sort By Newest <IoIosArrowDown />
              </span>
              <div>
                {users.map((user, index) => (
                  <li key={index} className="user-profile">
                    <div className="profile-circle">
                      <HiUserCircle />
                    </div>
                    <div className="user-details">
                      <h4>{user.username}</h4>
                      <p>{user.address}</p>
                    </div>
                    {index === 2 && (
                      <div className="icons">
                        <IoChatbubbleOutline className="icon" />
                        <CiStar className="icon" />
                        <BsPencil className="icon" />
                        <LiaGripLinesVerticalSolid className="icon" />
                        <CiMenuKebab className="icon" />
                      </div>
                    )}
                  </li>
                ))}
              </div>
            </div>
            <div className="left-bottom-icon">
              <span className="more">
                All Customers <PiArrowRightLight className="icon" />
              </span>
            </div>
          </div>
        </div>
        {/* Growth-chart section */}
        <div className="growth">
          <div className="Head">
            {" "}
            <h5>Growth</h5>
          </div>
          <div className="chart">
            <img src={Chart} alt="Chart" className="Chart" />
          </div>
        </div>
        {/* Top-Year section */}
        <div className="Year">
          <div className="h-year">
            <h5>Top Year</h5>
            <div></div>
            <div className="yaer">2023</div>
            <div className="text">96k sold so far</div>
          </div>
        </div>

        {/* Top-Month section */}
        <div className="Month">
          <div className="h-Month">
            <h5>Top Month</h5>
            <div>
              <div className="November">NOVEMBER</div>
              <div className="text">2019 </div>
            </div>
          </div>
        </div>
        {/*Top-Buyer Section */}
        <div className="Buyer">
          <div className="h-buyer">
            <h5>Top buyer</h5>
            <div>
              <li className="avatar-profile">
                <div className="avatar">
                  <FaUserAlt />
                </div>
                <div className="username">Chandan Verma</div>

                <div className="text2">Oasis Organic lnc.</div>
              </li>
            </div>
          </div>
        </div>

        {/* Chats Section*/}
        <div className="chat">
          <div className="chats">
            <h5>Chats</h5>
          </div>
          <div className="Chats">
            <div className="message">2 unread messages</div>
          </div>
        </div>

        <div className="profile-icons">
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="profile-icon">
              <FaUserAlt size={40} />
            </div>
          ))}
        </div>

        {/* Top-State section*/}
        <div className="TopStates">
          <h5>Top-States 1</h5>
          <div className="linear-gradients">
            UAE
            <div className="linear-gradients2">
              UK
              <div className="linear-gradients3">
                USA
                <div className="linear-gradients4">INDIA</div>
              </div>
            </div>
          </div>
        </div>

        {/*deals Section */}
        <div className="NewDeals">
          <div className="Head">
            <h5>Deals</h5>
            <div className="newdeals-container">
              {dealsData.map((deal, index) => (
                <div key={index} className="deal-item">
                  <CiSquarePlus className="icon" />
                  <div className="text">{deal.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
