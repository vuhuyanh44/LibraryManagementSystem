import './admin.css';
import Navbar from '../../components/navbar/navbar';

import {
    BrowserRouter as Router,
    Routes,
    Route, 
    Navigate
  } from "react-router-dom";
import Statistical from './pages/statistical/statistical';
import BookNew from './pages/bookNew/bookNew';
import BorrowingOff from './pages/borrowingOff/borrowingOff';




export default function Admin() {
    return(
        <div className="container">
            <Router>
                <Routes>
                    <Route path='/' element = {<Statistical/>}/>
                    <Route path='/infoBookNew' element = {<BookNew/>}/>
                    <Route path='/infoBorrowsOff' element = {<BorrowingOff/>}/>
                </Routes>
            </Router>
        </div>
    );
}