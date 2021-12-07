import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import PublishIcon from "@mui/icons-material/Publish";

import "./home.css";

export default function Home(props) {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">User Information</h1>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="./images/farmer_logo.png"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Farmer Singh</span>
              <span className="userShowUserTitle">Farmer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentityIcon className="userShowIcon" />
              <span className="userShowInfoTitle">famersingh123</span>
            </div>
            <div className="userShowInfo">
              <CalendarTodayIcon className="userShowIcon" />
              <span className="userShowInfoTitle">19.12.1988</span>
            </div>
            {/* <span className="userShowTitle">props.</span> */}
            <div className="userShowInfo">
              <PhoneAndroidIcon className="userShowIcon" />
              <span className="userShowInfoTitle">+91 123 456 7890</span>
            </div>
            <div className="userShowInfo">
              <MailOutlineIcon className="userShowIcon" />
              <span className="userShowInfoTitle">singhfarmer@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearchingIcon className="userShowIcon" />
              <span className="userShowInfoTitle">Uttar Pradesh | India</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Farmer Singh"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="singhfarmer@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+91 123 456 7890"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Uttar Pradesh | India"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="./images/farmer_logo.png"
                  alt=""
                />
                <label htmlFor="file">
                  <PublishIcon className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userAddButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
