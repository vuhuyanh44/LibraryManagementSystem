import './specialist.css';
import Navbar from '../../components/navbar/navbar';

import {
    BrowserRouter as Router,
    Routes,
    Route, 
    Navigate
  } from "react-router-dom";
import Statistical from './pages/statistical/statistical';
import Book from './pages/book/book';
import BookLines from './pages/bookLines/bookLines';




export default function Specialist() {
    return(
        <div className="container">
            <Router>
                <Routes>
                    <Route path='/' element = {<Statistical/>}/>
                    <Route path='/book' element = {<Book/>}/>
                    <Route path='/book-lines' element = {<BookLines/>}/>

                </Routes>
            </Router>
        </div>
    );
}