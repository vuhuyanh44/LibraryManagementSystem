import React, { useState, useEffect } from "react";
import axios from "axios";

function BookDetailModal({ bookId, showModal, handleCloseModal }) {
    const [book, setBook] = useState(null);

    useEffect(() => {
        const fetchBookDetails = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:5000/api/book/${bookId}`
                );
                setBook(response.data[0]);
            } catch (error) {
                console.error(error);
            }
        };
        if (showModal) {
            fetchBookDetails();
        }
    }, [bookId, showModal]);
    console.log(localStorage.getItem("token"));
    const handleBorrowOnline = () => {
        axios
            .post("http://localhost:5000/api/borrowing-online",
                {
                    bookline_id: bookId,
                }, {
                headers: {
                    'token': localStorage.getItem("token")
                }
            }
            )
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const handleBorrowOffline = () => {
        axios
            .post("http://localhost:5000/api/borrowing-offline", {
                bookline_id: bookId,
            }, {
                headers: {
                    'token': localStorage.getItem("token")
                }
            })
            .then((response) => {
                console.log(response.data);
                // Do something
            })
            .catch((error) => {
                console.log(error);
                // Handle error
            });
    };
    return (
        <div className={`modal ${showModal ? "show" : ""}`}>
            <div className="modal-content">
                <div className="modal-header">
                    <h2>{book?.bookline_name}</h2>
                    <button className="close" onClick={handleCloseModal}>
                        &times;
                    </button>
                </div>
                <div className="modal-body">
                    <img src={require('../image/giatich1.jpg')} alt={book?.bookline_name} />
                    <div className="book-details">
                        <p>Tác giả: {book?.authors}</p>
                        <p>Nhà xuất bản: {book?.publisher_name}</p>
                        <p>Mô tả: {book?.category_description}</p>
                        <div className="book-buttons">
                            <button onClick={handleBorrowOnline}>Thuê Online</button>
                            <button onClick={handleBorrowOffline}>Thuê Offline</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookDetailModal;
