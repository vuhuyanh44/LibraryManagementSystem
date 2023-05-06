import './borrowingOff.css'
import Sidebar from "../sidebar/sidebar";
import Navbar from '../../../../components/navbar/navbar';
import Table from "../../../../components/table/table";
import { GridActionsCellItem, GridRowModes } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";


export default function BorrowsOff() {
  const height = 630;
  const [rowModesModel, setRowModesModel] = React.useState({});

  const [rows, setRows] = useState([]);

  useEffect(() => {
    const getInfoBorrowsOff = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/infoBorrowOff"
        );
        setRows(res.data.result);
      } catch (error) {
        console.log(error);
      }
    };
    getInfoBorrowsOff();
  }, []);

  console.log(rows);

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    console.log(id);
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const columns = [
    {
      title: "user_id",
      headerName: "user_id",
      field: "_id",
      width: 80,
      editable: false,
    },
    {
      title: "name",
      headerName: "name",
      field: "name",
      width: 180,
      editable: true,
    },
    {
      title: "book_id",
      headerName: "book_id",
      field: "book_id",
      width: 180,
      editable: false,
    },
    {
      title: "book_name",
      headerName: "book_name",
      field: "book_name",
      width: 180,
      editable: true,
    },
    {
      title: "borrow_date",
      headerName: "borrow_date",
      field: "borrow_date",
      width: 180,
      editable: true,
    },
    {
      title: "borrow_time",
      headerName: "borrow_time",
      field: "borrow_time",
      width: 180,
      editable: true,
    },
    {
      title: "return_date",
      headerName: "return_date",
      field: "return_date",
      width: 180,
      editable: true,
    },
    {
      title: "status",
      headerName: "status",
      field: "status",
      editable: true,
    },

    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

    return(
        <div className="products">
        <Sidebar />
        <div className="wrapper">
          <Navbar/>
          <Table
          {...{
            columns,
            rows,
            setRows,
            height,
            rowModesModel,
            setRowModesModel,
          }}
        />
        </div>
      </div>
    );
}