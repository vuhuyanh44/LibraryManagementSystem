import './admin.css';
import Navbar from '../../components/navbar/navbar';

import {
    BrowserRouter as Router,
    Routes,
    Route, 
    Navigate
  } from "react-router-dom";
import Statistical from './pages/statistical/statistical';





export default function Admin() {
    return(
        <div className="container">
            <Router>
                <Routes>
                    <Route path='/' element = {<Statistical/>}/>
                </Routes>
            </Router>
        </div>
    );
}