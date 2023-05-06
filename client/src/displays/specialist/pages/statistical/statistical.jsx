import './statistical.css';
import Sidebar from "../sidebar/sidebar";
import Navbar from "../../../../components/navbar/navbar";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Statistical() {
  

  const [dataManufacture, setDataManufacture] = useState([]);

  return (
    <div className="statistical">
      <Sidebar />
      <div className="wrapper">
        <Navbar />
        
      </div>
    </div>
  );
}
