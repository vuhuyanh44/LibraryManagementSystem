import { Route, Routes } from 'react-router-dom';
import Homepage from "../homepage/homepage";
import BookOffline from "../book-offline/bookoffline";
import Navbar from '../../component/navbar';
import BorrowedOnlineBookList from '../../component/borrowbookonlinelist';
export default function BookOnline() {
    return (
        <div className="container">
            <Navbar />
            <BorrowedOnlineBookList />
            <Routes>
                <Route exact path="/" component={Homepage} />
                <Route path="/books-online" component={BookOnline} />
                <Route path="/books-offline" component={BookOffline} />
            </Routes>
        </div>
    );
};