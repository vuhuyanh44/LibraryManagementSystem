import './statistical.css';
import Sidebar from "../sidebar/sidebar";
import Navbar from "../../../../components/navbar/navbar";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Statistical() {
  const [dataBorrowing, setDataBorrowing] = useState([]);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  // Fetch borrowing data from backend API
  useEffect(() => {
    const fetchData = async () => {
      if (startTime && endTime) {
        const response = await axios.get(`localhost:5000/api/borrowOffCount/date?start_date=${startTime}&end_date=${endTime}`);
        const numBorrowersOff = response.data.result[0].num_borrowers_off;
        setDataBorrowing(numBorrowersOff);
      }
    }
    fetchData();
  }, [startTime, endTime]);

  // Filter borrowing data based on time range
  const filterBorrowingData = () => {
    const filteredData = dataBorrowing.filter(borrowing => {
      const borrowingDate = new Date(borrowing.borrowedDate);
      return borrowingDate >= new Date(startTime) && borrowingDate <= new Date(endTime);
    });
    return filteredData.length;
  };

  // Handle input change events
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "startTime") {
      setStartTime(value);
    } else if (name === "endTime") {
      setEndTime(value);
    }
  };

  // Handle submit button click event
  const handleButtonClick = (event) => {
    event.preventDefault();
    const filteredData = filterBorrowingData();
    console.log(filteredData);
  };

  // Display filtered borrowing data in the UI
  return (
    <div className="statistical">
      <Sidebar />
      <div className="wrapper">
        <Navbar />
        <div>
          <h2>Number of people who borrowed books:</h2>
          <form onSubmit={handleButtonClick}>
            <div>
              <label htmlFor="startTime">Start Time:</label>
              <input type="text" name="startTime" value={startTime} onChange={handleInputChange} />
            </div>
            <div>
              <label htmlFor="endTime">End Time:</label>
              <input type="text" name="endTime" value={endTime} onChange={handleInputChange} />
            </div>
            <button type="submit">Submit</button>
          </form>
          <p>{dataBorrowing}</p>
        </div>
      </div>
    </div>
  );
}