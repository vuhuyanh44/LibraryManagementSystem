import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Homepage from './pages/homepage/homepage';
import BookOnline from "./pages/book-online/bookonline";
import BookOffline from "./pages/book-offline/bookoffline";
export default function User() {
    return (
        <div className="container">
            <Router>
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path="/books-online" element={<BookOnline />} />
                    <Route path="/books-offline" element={<BookOffline />} />
                </Routes>
            </Router>
        </div>
    );
}