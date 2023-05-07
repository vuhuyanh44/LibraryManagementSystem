import React, { useState } from 'react';
import axios from "axios";

function AddButton() {
    const [formData, setFormData] = useState({ user_id: '', book_id: '' });
    const [successMessage, setSuccessMessage] = useState('');
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lưu trữ thông tin nhập vào State
    // Ẩn form bằng cách cập nhật State showForm
    axios.post('http://localhost:5000/api/createBorrowing-offline', formData)
      .then((response) => {
        console.log(response.data);
        alert("Tạo thành công")
        // Xử lý kết quả trả về
      })
      .catch((error) => {
        console.error(error);
        alert("Sách không có sẵn trong thư viện")
        // Xử lý lỗi
      });
    // setShowForm(false);
  };

  return (
    <div className='btn_add'>
      <button onClick={toggleForm}>Thêm phiếu mượn</button>
      {showForm && (
        <form className='form_add_borrow' onSubmit={handleSubmit}>
            <div class="title">Thông tin phiếu mượn</div>
          <label>
            User ID:
            <input type="text" name="user_id" placeholder="Nhập mã sinh viên" value={formData.user_id} onChange={handleChange} />
          </label>
          <br />
          <label>
            Book ID:
            <input type="text" name="book_id" placeholder="Nhập mã sách" value={formData.book_id} onChange={handleChange} />
          </label>
          <br />
          <button type="submit">Create</button>
        </form>
      )}
    </div>
  );
}

export default AddButton;