import React from "react";

/*const CropProfile = () => {
  return <div>In crop Profile nnnnn</div>;
};

export default CropProfile; */

//import React from "react";

import "./cropprofile.css";

import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function CropProfile() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "Crop Name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="CropProfileUser">
            <img className="CropProfile.Img" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Yield", width: 200 },
    
    
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="CropProfileEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="CropProfileDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="CropProfile">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}