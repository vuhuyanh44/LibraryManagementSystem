import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/booklist.css"
import "../css/modal.css"
import BookDetailModal from "./modal"
function Book(props) {
    const [books, setBooks] = useState([]);
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
    const [selectedBookId, setSelectedBookId] = useState(null);

    const handleBookClick = (bookId) => {
        setSelectedBookId(bookId);
    };
    return (
        <>
            <div className="container">
                <div className="book-list">
                    {books.map((book) => (
                        <div className="book-card" key={book.bookline_id} onClick={() => handleBookClick(book.bookline_id)} >
                            <img src={require('../image/giatich1.jpg')} alt={book.title} />
                            <div className="book-details">
                                <h2>{book.bookline_name}</h2>
                            </div>
                        </div>
                    ))}
                </div>
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
