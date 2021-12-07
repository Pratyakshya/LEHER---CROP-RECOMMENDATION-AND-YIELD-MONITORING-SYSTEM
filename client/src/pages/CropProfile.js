import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./cropprofile.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import PredictCrop from "./PredictCrop";
import Backdrop from "../components/Backdrop";

const CropProfile = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function updateHandler() {
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit} className="userListUser">
        <table>
          <thead>
            <tr>
              <th>Serial No</th>
              <th>Crop</th>
              <th>Yield</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
      {/* <div className="additionRow">
        <h2>Add a New Entry</h2>
        <form onSubmit={handleAddFormSubmit}>
          <input
            type="text"
            name="fullName"
            required="required"
            placeholder="Serial No..."
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="address"
            required="required"
            placeholder="Enter crop name..."
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="phoneNumber"
            required="required"
            placeholder=""
            onChange={handleAddFormChange}
          />

          <button type="submit">Add</button>
        </form>
      </div> */}
      <div className="userAddbtnWrapper">
        <button type="button" onClick={updateHandler} className="userAddbtn">
          Add
        </button>
      </div>
      {modalIsOpen && <PredictCrop onCancel={closeModalHandler} />}
      {modalIsOpen && <Backdrop onclick onCancel={closeModalHandler} />}
    </div>
  );
};

export default CropProfile;
