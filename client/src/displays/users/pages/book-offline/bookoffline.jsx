import { Route, Routes } from 'react-router-dom';
import BookOnline from "../book-online/bookonline";
import Homepage from "../homepage/homepage";
import Navbar from '../../component/navbar';
import BorrowedOfflineBookList from '../../component/bookoffline';
export default function BookOffline() {
    return (
        <div className="container">
            <Navbar />
            <BorrowedOfflineBookList />
            <Routes>
                <Route exact path="/" component={Homepage} />
                <Route path="/books-online" component={BookOnline} />
                <Route path="/books-offline" component={BookOffline} />
            </Routes>

        </div>
    );
};