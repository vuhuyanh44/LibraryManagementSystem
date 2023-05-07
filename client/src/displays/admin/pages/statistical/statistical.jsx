import './statistical.css';
import Sidebar from "../sidebar/sidebar";
import Navbar from "../../../../components/navbar/navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { IoAddCircle, IoPeopleSharp, IoBook, IoSaveSharp } from "react-icons/io5";


export default function Statistical() {

  var now = new Date();

  const [startDate, setStartDate] = useState(now);
  const [endDate, setEndDate] = useState(now);
  const [num_borrowers_off, setNumBorrowersOff] = useState("");
  const [num_books, setNumBooks] = useState("");
  const [num_new_books, setNewBoos] = useState("");
  const [num_borrowers_onl, setNumBorrowersOnl] = useState("");
  const [num_booklines, setNumBookLines] = useState("");
  

  useEffect(() => {
    if (startDate && endDate) {
      axios.get(`http://localhost:5000/api/borrowOffCount/date?start_date=${startDate}&end_date=${endDate}`)
        .then(res => {
          const numBorrowersOff = res.data.result[0]['num_borrowers_off'];
          setNumBorrowersOff(numBorrowersOff);
        })
        .catch(err => {
          console.log(err);
        })
    }
  }, [startDate, endDate]);

  useEffect(() => {
    if (startDate && endDate) {
      axios.get(`http://localhost:5000/api/book-count`)
        .then(res => {
          const numBooks = res.data.result[0]['number_of_books'];
          setNumBooks(numBooks);
        })
        .catch(err => {
          console.log(err);
        })
    }
  }, [startDate, endDate]);

  

  useEffect(() => {
    if (startDate && endDate) {
      axios.get(`http://localhost:5000/api/newBook-count/date?start_date=${startDate}&end_date=${endDate}`)
        .then(res => {
          const numNewBooks = res.data.result[0]['numNewBooks'];
          setNewBoos(numNewBooks);
        })
        .catch(err => {
          console.log(err);
        })
    }
  }, [startDate, endDate]);

  useEffect(() => {
    if (startDate && endDate) {
      axios.get(`http://localhost:5000/api/borrowOnlCount/date?start_date=${startDate}&end_date=${endDate}`)
        .then(res => {
          const numBorrowersOnl = res.data.result[0]['num_borrowers_onl'];
          setNumBorrowersOnl(numBorrowersOnl);
        })
        .catch(err => {
          console.log(err);
        })
    }
  }, [startDate, endDate]);

  useEffect(() => {
    if (startDate && endDate) {
      axios.get(`http://localhost:5000/api/bookLine-count`)
        .then(res => {
          const numBooklines = res.data.result[0]['number_of_booklines'];
          setNumBookLines(numBooklines);
        })
        .catch(err => {
          console.log(err);
        })
    }
  }, [startDate, endDate]);

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  }

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  }

  // Display filtered borrowing data in the UI
  return (
    <div className="statistical">
      <Sidebar />
      <div className="wrapper">
        <div className='title'>
          <h1>Statistical</h1>
          <Navbar />
        </div>
        
        <div>
          <form>

            <div class="childForm">
              <label htmlFor="startDate">Start Time:</label>
              <input className="ip" type="date" name="startDate" value={startDate} onChange={handleStartDateChange} />
            </div>
            <div class="childForm">
              <label htmlFor="endTime">End Time:</label>
              <input className='ip' type="date" name="endTime" value={endDate} onChange={handleEndDateChange} />
            </div>
          </form>
          <p></p>
        </div>

        <div class="statis">
          <div class="col-md-12 grid-margin">
            <div class="row_statistic_first">
              <div class="column-5 grid-margin">
                <div class="d-flex">
                  <div class="icn">
                    <IoAddCircle fontSize="40px" />
                  </div>
                  <div class="wrapper">
                    <h3 class="font-weight-semibold">{num_new_books}</h3>
                    <h5 class="font-weight-medium text-primary">New Book</h5>
                  </div>
                </div>
              </div>
              <div class="column-5 grid-margin">
                <div class="d-flex">
                  <div class="icn">
                    <IoPeopleSharp fontSize="40px" color="green" />
                  </div>
                  <div class="wrapper">
                    <h3 class="font-weight-semibold">{num_borrowers_onl}</h3>
                    <h5 class="font-weight-medium text-primary">Borrow Online</h5>
                  </div>
                </div>
              </div>
              <div class="column-5 grid-margin">
                <div class="d-flex">
                  <div class="icn">
                    <IoPeopleSharp fontSize="40px" color="red" />
                  </div>
                  <div class="wrapper">
                    <h3 class="font-weight-semibold">{num_borrowers_off}</h3>
                    <h5 class="font-weight-medium text-primary">Borrow Offline</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className='row_statistic_second'>
              <div class="column-5 grid-margin">
                <div class="d-flex">
                <div class="icn">
                    <IoBook fontSize="40px" />
                  </div>
                  <div class="wrapper">
                    <h3 class="font-weight-semibold">{num_booklines}</h3>
                    <h5 class="font-weight-medium text-primary">Book Line</h5>
                  </div>
                </div>
              </div>
              <div class="column-5 grid-margin">
                <div class="d-flex">
                <div class="icn">
                    <IoSaveSharp fontSize="40px" />
                  </div>
                  <div class="wrapper">
                    <h3 class="font-weight-semibold">{num_books}</h3>
                    <h5 class="font-weight-medium text-primary">Available</h5>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
  
}