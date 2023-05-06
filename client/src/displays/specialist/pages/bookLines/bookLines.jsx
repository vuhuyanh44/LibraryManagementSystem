import './bookLines.css'
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


export default function BookLines() {
  const height = 630;
  const [rowModesModel, setRowModesModel] = React.useState({});

  const [rows, setRows] = useState([]);

  useEffect(() => {
    const getAllBookLine = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/book-line"
        );
        setRows(res.data.booklines);
      } catch (error) {
        console.log(error);
      }
    };
    getAllBookLine();
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
      title: "bookline_id",
      headerName: "bookline_id",
      field: "_id",
      editable: false,
    },
    {
      title: "bookline_name",
      headerName: "bookline_name",
      field: "bookline_name",
      editable: true,
    },
    {
      title: "file_pdf",
      headerName: "thumnail",
      field: "thumnail",
      editable: true,
    },
    {
      title: "category_name",
      headerName: "category_name",
      field: "category_name",
      editable: true,
    },
    {
      title: "category_description",
      headerName: "category_description",
      field: "category_description",
      editable: true,
    },
    {
      title: "authors",
      headerName: "authors",
      field: "authors",
      width: 180,
      editable: true,
    },{
      title: "publisher_name",
      headerName: "publisher_name",
      field: "publisher_name",
      editable: true,
    },{
      title: "publisher_address",
      headerName: "publisher_address",
      field: "publisher_address",
      editable: true,
    },{
      title: "publisher_phone",
      headerName: "publisher_phone",
      field: "publisher_phone",
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