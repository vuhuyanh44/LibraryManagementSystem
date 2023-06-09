import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/booklist.css"
import "../css/modal.css"
import BookDetailModal from "./modal"
function Book(props) {
    const [books, setBooks] = useState([]);
    const [selectedBookId, setSelectedBookId] = useState(null);
    useEffect(() => {
        if (props.searchKeyword !== "") {
            axios
                .get(`http://localhost:5000/api/book/search?bookline_name=${props.searchKeyword}`)
                .then((response) => {
                    setBooks(response.data);
                    console.log(response.data)
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [props.searchKeyword]);
    async function filterByCategory(category) {
        console.log("Đã click");
        try {
            const response = await axios.get(`http://localhost:5000/api/book/filter?category=${category}`);
            setBooks(response.data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    const handleBookClick = (bookId) => {
        setSelectedBookId(bookId);
    };
    return (
        <>
            <div className="container">
                <div className="book-list">
                    {books.map((book) => (
                        <div className="book-card" key={book.bookline_id} onClick={() => handleBookClick(book.bookline_id)} >
                            <img src={book.thumbnail} alt={book.bookline_name} />
                            <div className="book-details">
                                <h2>{book.bookline_name}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div class="sidebar">
                <h3>Thể loại</h3>
                <button className="filter-btn" onClick={() => filterByCategory('Toán học')}>Toán học</button>
                <button className="filter-btn" onClick={() => filterByCategory('Văn học')}>Văn học</button>
                <button className="filter-btn" onClick={() => filterByCategory('Khoa học kĩ thuật')}>Khoa học kĩ thuật</button>
                <button className="filter-btn" onClick={() => filterByCategory('Công nghệ thông tin')}>Công nghệ thông tin</button>
                <button className="filter-btn" onClick={() => filterByCategory('Phát triển bản thân')}>Phát triển bản thân</button>
                <button className="filter-btn" onClick={() => filterByCategory('Y học và sức khỏe')}>Y học và sức khỏe</button>
                <button className="filter-btn" onClick={() => filterByCategory('Quản trị kinh doanh')}>Quản trị kinh doanh</button>
                <button className="filter-btn" onClick={() => filterByCategory('Triết học - Lý luận')}>Triết học - Lý luận</button>
            </div>

            <BookDetailModal
                bookId={selectedBookId}
                showModal={Boolean(selectedBookId)}
                handleCloseModal={() => setSelectedBookId(null)}
            />
        </>
    );
}

export default Book;
