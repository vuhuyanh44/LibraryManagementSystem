import Navbar from "../../component/navbar";
import { useEffect, useState } from "react";
import BookOnline from "../book-online/bookonline";
import BookOffline from "../book-offline/bookoffline";
import { Route, Routes } from 'react-router-dom';
import Books from "../../component/booklist";
export default function Homepage() {

    const [searchResult, setSearchResult] = useState([]);

    // Lấy kết quả tìm kiếm từ Navbar component và truyền vào Books component để hiển thị
    const handleSearchResult = (result) => {
        setSearchResult(result);
    };
    return (
        <div className="container">
            <Navbar onSearch={handleSearchResult} />
            <Books searchKeyword={searchResult} />
            <Routes>
                <Route exact path="/" component={Homepage} />
                <Route path="/books-online" component={BookOnline} />
                <Route path="/books-offline" component={BookOffline} />
            </Routes>
        </div>
    );
}

