import React from "react";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./readonlyrow.css";
import CropProfileDisplay from "./CropProfileDisplay";
import Backdrop from "../components/Backdrop";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function updateHandler() {
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>

      <td>
        <button type="button" onClick={updateHandler}>
          <EditIcon className="buttonIcon" />
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          <DeleteIcon className="buttonIcon" />
        </button>
        {modalIsOpen && <CropProfileDisplay onCancel={closeModalHandler} />}
        {modalIsOpen && <Backdrop onclick onCancel={closeModalHandler} />}
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
