import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../css/borrowonline.css"
function BorrowedOnlineBookList() {
    const [borrowedBooks, setBorrowedBooks] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:5000/api/borrowed-book', {
                headers: {
                    token: localStorage.getItem("token")
                }
            })
            .then((response) => {
                setBorrowedBooks(response.data);
            })
            .catch((error) => {
                alert("Bạn chưa mượn quyển nào")
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
                        <th>Ngày mượn</th>
                        <th>Ảnh bìa</th>
                        <th>Đọc</th>
                    </tr>
                </thead>
                <tbody>
                    {borrowedBooks.map((borrowedBook) => (
                        <tr key={borrowedBook.borrowing_id}>
                            <td>{borrowedBook.bookline_name}</td>
                            <td>{new Date(borrowedBook.borrowing_date).toLocaleDateString()}</td>
                            <td><img src={borrowedBook.thumnail} alt={borrowedBook.bookline_name} id='image' /></td>
                            {/* <td><button onClick={() => window.location.href = borrowedBook.readUrl}>Đọc</button></td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default BorrowedOnlineBookList;
