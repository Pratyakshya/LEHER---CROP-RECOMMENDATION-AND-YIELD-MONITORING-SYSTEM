import "./cropprofiledisplay.css";

function Modal(props) {
  function cancelHandler() {
    props.onCancel();
  }
  return (
    <div className="modal">
      <p>The Crop Recommended to you is : sugarcane</p>
      <button className="cropAddButton" onClick={cancelHandler}>
        Okay
      </button>
    </div>
  );
}

export default Modal;
