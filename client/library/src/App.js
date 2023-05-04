import React, { useState } from "react";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  const searchBooks = () => {
    axios.get(`http://localhost:5000/api/book/search?bookline_name=${query}`).then((response) => {
      setBooks(response.data);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchBooks();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter search term"
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {books.map((book) => (
          <li key={book.book_id}>
            {book.bookline_id} - {book.bookline_name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
