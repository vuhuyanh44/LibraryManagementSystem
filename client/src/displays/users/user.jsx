import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Homepage from './pages/homepage/homepage';
export default function User() {
    return (
        <div className="container">
            <Router>
                <Routes>
                    <Route path='/' element={<Homepage />} />
                </Routes>
            </Router>
        </div>
    );
}