import './admin.css';
import Navbar from '../../components/navbar/navbar';

import {
    BrowserRouter as Router,
    Routes,
    Route, 
    Navigate
  } from "react-router-dom";
import BorrowingOff from './pages/borrowingOff/borrowingOff';

export default function Admin() {
    return(
        <div className="container">
            <Router>
                <Routes>
                    <Route path='/infoBorrowsOff' element = {<BorrowingOff/>}/>
                </Routes>
            </Router>
        </div>
    );
}