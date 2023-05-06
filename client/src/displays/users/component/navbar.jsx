import React from 'react';
import "../css/navbar.css"
import { Link } from 'react-router-dom';
import companyLogo from '../image/logo.jpg';
import { useState } from 'react';
function Navbar(props) {
    const [searchKeyword, setSearchKeyword] = useState("");

    const handleSearch = () => {
        props.onSearch(searchKeyword);
    };

    const handleInputChange = (event) => {
        setSearchKeyword(event.target.value);
    };
    return (
        <header>
            <nav>
                <div className="logo">
                    <img src={companyLogo} alt="logo" />
                </div>
                <ul className="nav-links">
                    <li><Link to="/rental">Home</Link></li>
                    <li><Link to="/books-online">Sách đã thuê online</Link></li>
                    <li><Link to="/books-offline">Sách đã thuê offline</Link></li>
                    <li className="search-bar-container">
                        <input type="text" placeholder="Tìm kiếm..." value={searchKeyword}
                            onChange={handleInputChange} />
                        <button onClick={handleSearch} type="submit"><i className="fas fa-search">Tìm</i></button>
                    </li>
                    <button onClick={() => {
                        localStorage.clear()
                        window.location.href = "http://localhost:3000/"
                    }}>Đăng xuất</button>
                </ul>
            </nav>
        </header>

    );
}

export default Navbar;
