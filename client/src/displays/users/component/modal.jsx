import React, { useState, useEffect } from "react";
import axios from "axios";

function BookDetailModal({ bookId, showModal, handleCloseModal }) {
    const [book, setBook] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");
    const [count, setCount] = useState(null)
    const [repolist, setRepolist] = useState([])
    const [selectedRepoId, setSelectedRepoId] = useState(null);

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
    useEffect(() => {
        const fetchBookRemain = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:5000/api/remain-books/${bookId}`
                );
                setCount(response.data[0]);
            } catch (error) {
                console.error(error);
            }
        };
        if (showModal) {
            fetchBookRemain();
        }
    }, [bookId, showModal]);
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
                setSuccessMessage("Thuê sách thành công!");
                alert("Thuê thành công")
                setTimeout(() => {
                    setSuccessMessage("");
                    handleCloseModal();
                }, 3000);
            })
            .catch((error) => {
                console.log(error);
                alert("Sách đã mượn rồi")
            });
    };
    const handleBorrowOffline = () => {
        axios
            .post("http://localhost:5000/api/borrowing-offline", {
                bookline_id: bookId,
                repository_id: selectedRepoId
            }, {
                headers: {
                    'token': localStorage.getItem("token")
                }
            })
            .then((response) => {
                console.log(response.data);
                setSuccessMessage("Thuê sách thành công!");
                alert('Thuê thành công')
                setTimeout(() => {
                    setSuccessMessage("");
                    handleCloseModal();
                }, 3000);
            })
            .catch((error) => {
                console.log(error);
                alert("Đã hết sách")
            });
    };

    useEffect(() => {
        const fetchBookRemainByRepo = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:5000/api/remain-in-repo/${bookId}`
                );
                setRepolist(response.data);
                console.log(response);
            } catch (error) {
                console.error(error);
            }
        };
        if (showModal) {
            fetchBookRemainByRepo();
        }
    }, [bookId, showModal]);
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
                    <img src={book?.thumbnail} alt={book?.bookline_name} />
                    <div className="book-details">
                        <p>Tác giả: {book?.authors}</p>
                        <p>Nhà xuất bản: {book?.publisher_name}</p>
                        <p>Mô tả: {book?.category_description}</p>
                        <p>Số lượng còn lại: {count?.so_luong}</p>
                        {repolist.map((repo) => (
                            <div key={repo.repository_id}>
                                <input
                                    type="radio"
                                    id={repo.repository_id}
                                    name="repository"
                                    value={repo.repository_id}
                                    onChange={(e) => setSelectedRepoId(e.target.value)}
                                />
                                <label htmlFor={repo.repository_id}>
                                    Kho: {repo?.repository_name}, Còn lại: {repo?.so_luong}
                                </label>
                            </div>
                        ))}
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
