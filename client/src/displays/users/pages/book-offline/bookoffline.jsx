import { Route, Routes } from 'react-router-dom';
import BookOnline from "../book-online/bookonline";
import Homepage from "../homepage/homepage";
import Navbar from '../../component/navbar';
export default function BookOffline() {
    return (
        <div className="container">
            <h1>BookOffline</h1>
            <Navbar />
            <Routes>
                <Route exact path="/" component={Homepage} />
                <Route path="/books-online" component={BookOnline} />
                <Route path="/books-offline" component={BookOffline} />
            </Routes>

        </div>
    );
};