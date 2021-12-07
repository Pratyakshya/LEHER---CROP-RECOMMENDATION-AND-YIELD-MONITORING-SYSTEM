import "./cropprofiledisplay.css";
import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "../components/Backdrop";

export default function PredictCrop(props) {
  const [modalcropIsOpen, setModalcropIsOpen] = useState(false);

  function updatecropHandler() {
    setModalcropIsOpen(true);
  }
  function closeModalHandler() {
    setModalcropIsOpen(false);
  }
  return (
    <div className="predictCropContainer">
      <div className="cropContainer">
        <div className="cropUpdate">
          <span className="cropUpdateTitle">Fill in the details</span>
          <form className="cropUpdateForm">
            <div className="cropUpdateLeft">
              <div className="cropUpdateItem">
                <label>Nitrogen</label>
                <input
                  type="text"
                  placeholder="Nitrogen Required"
                  className="cropUpdateInput"
                />
              </div>
              <div className="cropUpdateItem">
                <label>Phosphorous</label>
                <input
                  type="text"
                  placeholder="Phosphorous Required"
                  className="cropUpdateInput"
                />
              </div>
              <div className="cropUpdateItem">
                <label>Potassium</label>
                <input
                  type="text"
                  placeholder="Pottasium Required"
                  className="cropUpdateInput"
                />
              </div>
              <div className="cropUpdateItem">
                <label>pH</label>
                <input
                  type="text"
                  placeholder="ph level required"
                  className="cropUpdateInput"
                />
              </div>
            </div>
            <div className="cropUpdateRight">
              <div className="cropUpdateItem">
                <label>Humidity</label>
                <input
                  type="text"
                  placeholder="Current Humdidity"
                  className="cropUpdateInput"
                />
              </div>
              <div className="cropUpdateItem">
                <label>Temperature</label>
                <input
                  type="text"
                  placeholder="Current Temperature"
                  className="cropUpdateInput"
                />
              </div>
              <div className="cropUpdateItem">
                <label>Rainfall</label>
                <input
                  type="text"
                  placeholder="Rainfall in mm"
                  className="cropUpdateInput"
                />
              </div>
              <button className="cropAddButton" onClick={updatecropHandler}>
                Predict
              </button>
              {modalcropIsOpen && <Modal onCancel={closeModalHandler} />}
              {modalcropIsOpen && <Backdrop onCancel={closeModalHandler} />}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
