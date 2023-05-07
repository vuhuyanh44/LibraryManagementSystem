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
import AddButton from "./AddButton";


export default function BorrowsOff() {
  const apiEditData = 'http://localhost:5000/api/borrowingOff';
  const height = 630;
  const [rowModesModel, setRowModesModel] = React.useState({});

  const [rows, setRows] = useState([]);

  const [isAdd, setIsAdd] = useState(false);
  

  useEffect(() => {
    getInfoBorrowsOff();  
  }, []);
  
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

  console.log(rows);

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
    getInfoBorrowsOff();
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
    getInfoBorrowsOff();
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
      title: "borrowing_id",
      headerName: "borrowing_id",
      field: "_id",
      editable: false,
    },
    {
      title: "user_id",
      headerName: "user_id",
      field: "user_id",
      editable: false,
    },
    {
      title: "name",
      headerName: "name",
      field: "name",
      width: 148,
      editable: true,
    },
    {
      title: "book_id",
      headerName: "book_id",
      field: "book_id",
      editable: false,
    },
    {
      title: "book_name",
      headerName: "book_name",
      field: "book_name",
      width: 200,
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
        // nếu muốn edit -> click vào edit -> isInEditMode=true
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
          <h2 className='header_sloan'>Thông tin phiếu mượn</h2>
          <Table
          {...{
            columns,
            rows,
            setRows,
            height,
            rowModesModel,
            setRowModesModel,
            apiEditData,
          }}
        />
        <AddButton/>
        </div>
      </div>
    );
}