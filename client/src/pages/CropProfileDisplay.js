import PublishIcon from "@mui/icons-material/Publish";
// import GrassIcon from "@mui/icons-material/Grass";
// import PermIdentityIcon from "@mui/icons-material/PermIdentity";
// import YardIcon from "@mui/icons-material/Yard";
// import ScienceIcon from "@mui/icons-material/Science";
// import BiotechIcon from "@mui/icons-material/Biotech";
// import WaterIcon from "@mui/icons-material/Water";
// import ThermostatIcon from "@mui/icons-material/Thermostat";
// import OpacityIcon from "@mui/icons-material/Opacity";
// import MoneyIcon from "@mui/icons-material/Money";
import "./cropprofiledisplay.css";

export default function Home(props) {
  function cancelHandler() {
    props.onCancel();
  }
  return (
    <div className="crop">
      {/* <div className="cropTitleContainer">
        <h1 className="cropTitle">Crop Information</h1>
      </div> */}
      <div className="cropContainer">
        {/* <div className="cropShow">
          <div className="cropShowTop">
            <img
              src="./images/farmer_logo.png"
              alt=""
              className="cropShowImg"
            />
            <div className="cropShowTopTitle">
              <span className="cropShowUsername">Farmer Singh</span>
              <span className="cropShowUserTitle">Farmer</span>
            </div>
          </div>
          <div className="cropShowBottom">
            <span className="cropShowTitle">Crop Details</span>
            <div className="cropShowInfo">
              <GrassIcon className="cropShowIcon" />
              <span className="cropShowInfoTitle">crop123</span>
            </div>
            <div className="cropShowInfo">
              <PermIdentityIcon className="cropShowIcon" />
              <span className="cropShowInfoTitle">farmersingh123</span>
            </div>
            <div className="cropShowInfo">
              <YardIcon className="cropShowIcon" />
              <span className="cropShowInfoTitle">Recommended Crop: Wheat</span>
            </div>
            <div className="cropShowInfo">
              <MoneyIcon className="cropShowIcon" />
              <span className="cropShowInfoTitle">Maximum Yield: 560,0000</span>
            </div>
            <span className="cropShowTitle">Crop Description</span>
            <div className="cropShowInfo">
              <ScienceIcon className="cropShowIcon" />
              <span className="cropShowInfoTitle">
                Nitrogen Concentration: 32.54
              </span>
            </div>
            <div className="cropShowInfo">
              <ScienceIcon className="cropShowIcon" />
              <span className="cropShowInfoTitle">
                Phosphorus Concentration: 21.43
              </span>
            </div>
            <div className="cropShowInfo">
              <ScienceIcon className="cropShowIcon" />
              <span className="cropShowInfoTitle">
                Potassium Concentration: 25.71
              </span>
            </div>
            <div className="cropShowInfo">
              <BiotechIcon className="cropShowIcon" />
              <span className="cropShowInfoTitle">pH Level: 9</span>
            </div>
            <div className="cropShowInfo">
              <WaterIcon className="cropShowIcon" />
              <span className="cropShowInfoTitle">Humidity: 81%</span>
            </div>
            <div className="cropShowInfo">
              <ThermostatIcon className="cropShowIcon" />
              <span className="cropShowInfoTitle">Temperature: 37 C</span>
            </div>
            <div className="cropShowInfo">
              <OpacityIcon className="cropShowIcon" />
              <span className="cropShowInfoTitle">Rainfall: 5 cm</span>
            </div>
          </div>
        </div> */}
        <div className="cropUpdate">
          <span className="cropUpdateTitle">Edit</span>
          <form className="cropUpdateForm">
            <div className="cropUpdateLeft">
              <div className="cropUpdateItem">
                <label>Delay in Rainfall</label>
                <input
                  type="text"
                  placeholder="Delay In Rainfall"
                  className="cropUpdateInput"
                />
              </div>
              <div className="cropUpdateItem">
                <label>Change in pH level</label>
                <input
                  type="text"
                  placeholder="Change in ph level"
                  className="cropUpdateInput"
                />
              </div>
              <div className="cropUpdateItem">
                <label>Land Size</label>
                <input
                  type="text"
                  placeholder="Land Size"
                  className="cropUpdateInput"
                />
              </div>
              <div className="cropUpdateItem">
                <label>Budget</label>
                <input
                  type="text"
                  placeholder="Change in Budegt"
                  className="cropUpdateInput"
                />
              </div>
            </div>
            <div className="cropUpdateRight">
              <div className="cropUpdateUpload">
                <img className="cropUpdateImg" src="./images/crop.png" alt="" />
                <label htmlFor="file">
                  <PublishIcon className="cropUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="cropAddButton" onClick={cancelHandler}>
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
