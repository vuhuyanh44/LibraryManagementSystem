import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../css/borrowoffline.css"
function BorrowedOfflineBookList() {
    const [borrowedBooks, setBorrowedBooks] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:5000/api/get-book-borrowed-offline', {
                headers: {
                    token: localStorage.getItem("token")
                }
            })
            .then((response) => {
                setBorrowedBooks(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <h2>Danh sách sách đã mượn</h2>
            <table className="borrowed-books">
                <thead>
                    <tr>
                        <th>Tên sách</th>
                        <th>Ảnh bìa</th>
                        <th>Ngày mượn</th>
                        <th>Hạn trả</th>
                        <th>Ngày trả</th>
                        <th>Thư viện</th>
                    </tr>
                </thead>
                <tbody>
                    {borrowedBooks.map((borrowedBook) => (
                        <tr key={borrowedBook.borrowing_id}>
                            <td>{borrowedBook.bookline_name}</td>
                            <td><img src={borrowedBook.thumbnail} alt={borrowedBook.bookline_name} id='image' /></td>
                            <td>{new Date(borrowedBook.borrowing_date).toLocaleDateString()}</td>
                            <td>{new Date(borrowedBook.due_date).toLocaleDateString()}</td>
                            <td>{borrowedBook?.return_date ? new Date(borrowedBook.return_date).toLocaleDateString() : "Chưa trả"}</td>
                            <td>{borrowedBook.repository_name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default BorrowedOfflineBookList;
